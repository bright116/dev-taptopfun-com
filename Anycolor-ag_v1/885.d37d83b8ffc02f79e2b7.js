/*! For license information please see 885.d37d83b8ffc02f79e2b7.js.LICENSE.txt */
"use strict";
(self.webpackChunkcolorapp = self.webpackChunkcolorapp || []).push([
    [885], {
        2885: function(t, e, r) {
            r.r(e), r.d(e, {
                Finalize: function() {
                    return Y
                }
            }), r(8304), r(489), r(1299), r(2419), r(7941), r(2526), r(7327), r(5003), r(4747), r(9337), r(3321), r(1817), r(2165), r(6992), r(8783), r(3948), r(7042), r(1038), r(4916), r(7601), r(8674), r(2443), r(9341), r(3706), r(2703), r(9720), r(5827), r(1539), r(3290), r(1703), r(9070);
            var n, o = r(4242),
                i = r(1014),
                a = r(8942),
                c = r(1585),
                u = r(6710),
                l = r(5650),
                f = r(618),
                s = r(7450),
                d = r(3379),
                h = r(9784),
                y = r(2090),
                p = r(2289),
                v = r(6020),
                g = r(4785),
                m = r(9747),
                b = r(3925),
                w = r(1128),
                x = r(7493),
                O = r(7827),
                C = r(888),
                A = r(7715),
                E = r(1754),
                L = r(4392),
                j = r(3405),
                T = r(799),
                P = r(7117),
                S = r(2779),
                k = r(6806),
                B = r.n(k);

            function R(t) {
                return R = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, R(t)
            }

            function U() {
                U = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    i = n.asyncIterator || "@@asyncIterator",
                    a = n.toStringTag || "@@toStringTag";

                function c(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    c({}, "")
                } catch (t) {
                    c = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function u(t, e, r, n) {
                    var o = e && e.prototype instanceof s ? e : s,
                        i = Object.create(o.prototype),
                        a = new C(n || []);
                    return i._invoke = function(t, e, r) {
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
                                    var c = w(a, r);
                                    if (c) {
                                        if (c === f) continue;
                                        return c
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var u = l(t, e, r);
                                if ("normal" === u.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", u.arg === f) continue;
                                    return {
                                        value: u.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === u.type && (n = "completed", r.method = "throw", r.arg = u.arg)
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
                t.wrap = u;
                var f = {};

                function s() {}

                function d() {}

                function h() {}
                var y = {};
                c(y, o, (function() {
                    return this
                }));
                var p = Object.getPrototypeOf,
                    v = p && p(p(A([])));
                v && v !== e && r.call(v, o) && (y = v);
                var g = h.prototype = s.prototype = Object.create(y);

                function m(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        c(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function b(t, e) {
                    function n(o, i, a, c) {
                        var u = l(t[o], t, i);
                        if ("throw" !== u.type) {
                            var f = u.arg,
                                s = f.value;
                            return s && "object" == R(s) && r.call(s, "__await") ? e.resolve(s.__await).then((function(t) {
                                n("next", t, a, c)
                            }), (function(t) {
                                n("throw", t, a, c)
                            })) : e.resolve(s).then((function(t) {
                                f.value = t, a(f)
                            }), (function(t) {
                                return n("throw", t, a, c)
                            }))
                        }
                        c(u.arg)
                    }
                    var o;
                    this._invoke = function(t, r) {
                        function i() {
                            return new e((function(e, o) {
                                n(t, r, e, o)
                            }))
                        }
                        return o = o ? o.then(i, i) : i()
                    }
                }

                function w(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, w(t, e), "throw" === e.method)) return f;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return f
                    }
                    var n = l(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, f;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, f) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f)
                }

                function x(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function O(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function C(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(x, this), this.reset(!0)
                }

                function A(t) {
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
                        next: E
                    }
                }

                function E() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return d.prototype = h, c(g, "constructor", h), c(h, "constructor", d), d.displayName = c(h, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === d || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, c(t, a, "GeneratorFunction")), t.prototype = Object.create(g), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, m(b.prototype), c(b.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = b, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new b(u(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, m(g), c(g, a, "Generator"), c(g, o, (function() {
                    return this
                })), c(g, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
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
                }, t.values = A, C.prototype = {
                    constructor: C,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(O), !t)
                            for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
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
                                var c = r.call(i, "catchLoc"),
                                    u = r.call(i, "finallyLoc");
                                if (c && u) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                } else if (c) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                                } else {
                                    if (!u) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
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
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), f
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), O(r), f
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    O(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, r) {
                        return this.delegate = {
                            iterator: A(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), f
                    }
                }, t
            }

            function G(t, e, r, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void r(t)
                }
                c.done ? e(u) : Promise.resolve(u).then(n, o)
            }

            function _(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(e, r);

                        function a(t) {
                            G(i, n, o, a, c, "next", t)
                        }

                        function c(t) {
                            G(i, n, o, a, c, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function I(t, e) {
                var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!r) {
                    if (Array.isArray(t) || (r = q(t)) || e && t && "number" == typeof t.length) {
                        r && (t = r);
                        var n = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return n >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[n++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, a = !0,
                    c = !1;
                return {
                    s: function() {
                        r = r.call(t)
                    },
                    n: function() {
                        var t = r.next();
                        return a = t.done, t
                    },
                    e: function(t) {
                        c = !0, i = t
                    },
                    f: function() {
                        try {
                            a || null == r.return || r.return()
                        } finally {
                            if (c) throw i
                        }
                    }
                }
            }

            function F(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != r) {
                        var n, o, i = [],
                            a = !0,
                            c = !1;
                        try {
                            for (r = r.call(t); !(a = (n = r.next()).done) && (i.push(n.value), !e || i.length !== e); a = !0);
                        } catch (t) {
                            c = !0, o = t
                        } finally {
                            try {
                                a || null == r.return || r.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(t, e) || q(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function q(t, e) {
                if (t) {
                    if ("string" == typeof t) return z(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? z(t, e) : void 0
                }
            }

            function z(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function H(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function D(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? H(Object(r), !0).forEach((function(e) {
                        V(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : H(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function M(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function W(t, e) {
                return W = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, W(t, e)
            }

            function N(t, e) {
                if (e && ("object" === R(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return K(t)
            }

            function K(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function Z(t) {
                return Z = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, Z(t)
            }

            function V(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            var J, X = 392;
            ! function(t) {
                t[t.outline = 0] = "outline", t[t.filters = 1] = "filters"
            }(J || (J = {}));
            var $ = (V(n = {}, J.outline, 4774908), V(n, J.filters, 7987343), n),
                Y = function(t) {
                    ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), e && W(t, e)
                    }(q, t);
                    var e, r, n, c, R, G = (c = q, R = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, e = Z(c);
                        if (R) {
                            var r = Z(this).constructor;
                            t = Reflect.construct(e, arguments, r)
                        } else t = e.apply(this, arguments);
                        return N(this, t)
                    });

                    function q() {
                        var t;
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, q), V(K(t = G.call(this)), "returnToDrawing", new o.MZ), V(K(t), "finishedWorkOfArt", new o.MZ), V(K(t), "stage", void 0), V(K(t), "buttonContainer", void 0), V(K(t), "backButton", void 0), V(K(t), "finishButton", void 0), V(K(t), "imageContainer", void 0), V(K(t), "overlayColorList", void 0), V(K(t), "filterList", void 0), V(K(t), "filterButtons", []), V(K(t), "categoryList", void 0), V(K(t), "categoryButtons", []), V(K(t), "colorButtonTexture", void 0), V(K(t), "filterListHeight", 0), V(K(t), "workOfArt", void 0), t.stage = new l.A(K(t)), t.stage.anchorTo(f.Uq.Fill), t.stage.layoutController = new s.I(s.J.PreferredSize, s.J.PreferredSize, {
                            minHeight: 0,
                            minWidth: 0,
                            get preferredHeight() {
                                return A.pixi.stageHeight
                            },
                            get preferredWidth() {
                                return A.pixi.stageWidth
                            }
                        }), t.imageContainer = t.stage.addChild(new y.d), t.buttonContainer = t.stage.addChild(new y.d), t.backButton = t.buttonContainer.addChild(new d.y(h.Mo["ui/back_button"])), t.backButton.released.connect((function() {
                            t.returnToDrawing.emit()
                        })), t.finishButton = t.buttonContainer.addChild(new d.y(h.Mo["ui/finish_button"])), t.finishButton.addChild(new x.sm("DONE", x.H.MiddleCenter, D(D({}, T.h), {}, {
                            fill: "#000000AA",
                            fontSize: 36,
                            stroke: "#FFFFFFBB",
                            strokeThickness: 4
                        }))).anchorTo(f.Uq.Fill), t.finishButton.released.connect((function() {
                            t.finishedWorkOfArt.emit()
                        })), t.colorButtonTexture = h.Mo["ui/Palette_button"], t.categoryList = t.stage.addChild(new w.X(w.I.Horizontal));
                        var e = F(t.createCategoryButton("Filters", J.filters), 2),
                            r = e[0],
                            n = e[1];
                        t.categoryList.addChild(r), t.categoryButtons.push({
                            button: r,
                            text: n,
                            category: J.filters
                        });
                        var c = F(t.createCategoryButton("Outline", J.outline), 2),
                            g = c[0],
                            m = c[1];
                        t.categoryList.addChild(g), t.categoryButtons.push({
                            button: g,
                            text: m,
                            category: J.outline
                        }), t.overlayColorList = t.stage.addChild(new w.X(w.I.Vertical));
                        var b, O = I(P.outlines);
                        try {
                            var L = function() {
                                var e = F(b.value, 2)[1],
                                    r = t.overlayColorList.addChild(new d.y(t.colorButtonTexture));
                                r.tint = (0, a.qm)(e.color);
                                var n = r.tapped.connect((function() {
                                    t.changeOverlayColor(e)
                                }));
                                r.tapOnly = !0;
                                var o = "outline_".concat(e.id);
                                if (e.pay && !(0, S.K)(o)) {
                                    var i = C.ZP.getRewardedAction();
                                    n.enabled = !1;
                                    var c = r.addChild(new y.d);
                                    c.anchorTo(f.Uq.Fill);
                                    var u = new v.I(h.Mo["ui/playADcorner"]);
                                    u.anchorTo(f.Uq.TopRight, {
                                        x: 2,
                                        y: 2
                                    }, void 0, !0), c.addChild(u);
                                    var l = r.tapped.connect(_(U().mark((function t() {
                                        var r, a, u;
                                        return U().wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return l.disconnect(), r = B().EGAAdType.Undefined, i === C.Us.VideoAd && (r = B().EGAAdType.RewardedVideo), a = E.Oz, t.prev = 4, t.next = 7, C.ZP.consumeRewardedAction(i);
                                                case 7:
                                                    u = t.sent, a = u.mediator, k.GameAnalytics.addDesignEvent("Purchase:Outline:".concat(e.color), void 0, {
                                                        ad: "true"
                                                    }), k.GameAnalytics.addAdEvent(B().EGAAdAction.Show, r, a, "Purchased outline", {
                                                        name: e.color
                                                    }), t.next = 17;
                                                    break;
                                                case 13:
                                                    t.prev = 13, t.t0 = t.catch(4), k.GameAnalytics.addDesignEvent("Purchase:Outline:".concat(e.color), void 0, {
                                                        ad: "false"
                                                    }), t.t0 instanceof C.sN && k.GameAnalytics.addAdEvent(B().EGAAdAction.FailedShow, r, t.t0.mediator, "Purchased outline", {
                                                        name: e.color
                                                    });
                                                case 17:
                                                    return t.prev = 17, k.GameAnalytics.addAdEvent(B().EGAAdAction.RewardReceived, r, a, "Purchased outline", {
                                                        name: e.color
                                                    }), n.enabled = !0, c.destroy(!0), (0, S.n)(o), t.finish(17);
                                                case 23:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t, null, [
                                            [4, 13, 17, 23]
                                        ])
                                    }))))
                                }
                            };
                            for (O.s(); !(b = O.n()).done;) L()
                        } catch (t) {
                            O.e(t)
                        } finally {
                            O.f()
                        }
                        t.filterList = t.stage.addChild(new w.X(w.I.Horizontal));
                        for (var R = function() {
                                var e = F(H[z], 2),
                                    r = e[0],
                                    n = e[1],
                                    o = t.filterList.addChild(new y.d),
                                    a = new i.TC;
                                a.beginFill(16777215, 1), a.lineStyle(4, 11513517, 1, 1), a.drawRoundedRect(4, 4, X, X, 1);
                                var c = o.addChild(new p.s(a));
                                c.anchorTo(f.Uq.TopCenter, {
                                    x: 0,
                                    y: 0
                                }, void 0, !0);
                                var l = c.addChild(new d.y(u.xE.WHITE));
                                l.layoutController = new s.I(s.J.PreferredSize, s.J.PreferredSize, l), l.anchorTo(f.Uq.TopLeft, {
                                    x: 4,
                                    y: 4
                                });
                                var g = l.tapped.connect((function() {
                                    t.changeEffect({
                                        name: r
                                    })
                                }));
                                l.tapOnly = !0;
                                var m = o.addChild(new x.sm(r, x.H.TopCenter, D(D({}, T.h), {}, {
                                    fontSize: 56,
                                    stroke: "#FFFFFFBB",
                                    strokeThickness: 8
                                })));
                                m.anchorTo(f.Uq.TopEdge, {
                                    x: 0,
                                    y: 40
                                }), o.preferredWidth = 400, o.preferredHeight = 400, t.filterListHeight = Math.max(t.filterListHeight, o.preferredHeight), t.filterButtons.push({
                                    button: l,
                                    text: m,
                                    effectName: r
                                });
                                var b = "filter_".concat(r);
                                if (n.pay && !(0, S.K)(b)) {
                                    var w = C.ZP.getRewardedAction();
                                    g.enabled = !1;
                                    var O = c.addChild(new y.d);
                                    O.anchorTo(f.Uq.Fill);
                                    var A = new v.I(h.Mo["ui/playADcorner"]);
                                    A.anchorTo(f.Uq.TopRight, {
                                        x: 0,
                                        y: 0
                                    }, void 0, !0), O.addChild(A);
                                    var L = l.tapped.connect(_(U().mark((function t() {
                                        var e, n, o;
                                        return U().wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return L.disconnect(), e = B().EGAAdType.Undefined, w === C.Us.VideoAd && (e = B().EGAAdType.RewardedVideo), n = E.Oz, t.prev = 4, t.next = 7, C.ZP.consumeRewardedAction(w);
                                                case 7:
                                                    o = t.sent, n = o.mediator, k.GameAnalytics.addDesignEvent("Purchase:Effect:".concat(r), void 0, {
                                                        ad: "true"
                                                    }), k.GameAnalytics.addAdEvent(B().EGAAdAction.Show, e, n, "Purchased effect", {
                                                        name: r
                                                    }), t.next = 17;
                                                    break;
                                                case 13:
                                                    t.prev = 13, t.t0 = t.catch(4), k.GameAnalytics.addDesignEvent("Purchase:Effect:".concat(r), void 0, {
                                                        ad: "false"
                                                    }), t.t0 instanceof C.sN && k.GameAnalytics.addAdEvent(B().EGAAdAction.FailedShow, e, t.t0.mediator, "Purchased effect", {
                                                        name: r
                                                    });
                                                case 17:
                                                    return t.prev = 17, k.GameAnalytics.addAdEvent(B().EGAAdAction.RewardReceived, e, n, "Purchased effect", {
                                                        name: r
                                                    }), g.enabled = !0, O.destroy(!0), (0, S.n)(b), t.finish(17);
                                                case 23:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t, null, [
                                            [4, 13, 17, 23]
                                        ])
                                    }))))
                                }
                            }, z = 0, H = Object.entries(j.Z); z < H.length; z++) R();
                        return t.on("added", (function() {
                            return t.added()
                        })), t.on("removed", (function() {
                            return t.unload()
                        })), A.pixi.orientationChanged.connect((function() {
                            return t.orientationChanged()
                        })), t.orientationChanged(), t.selectCategory(J.filters), t
                    }
                    return e = q, r = [{
                        key: "orientationChanged",
                        value: function() {
                            var t, e, r = {
                                    x: null !== (t = null === L.gS || void 0 === L.gS ? void 0 : L.gS.drawing.width) && void 0 !== t ? t : 0,
                                    y: null !== (e = null === L.gS || void 0 === L.gS ? void 0 : L.gS.drawing.height) && void 0 !== e ? e : 0
                                },
                                n = a.tq.any ? 200 : 0;
                            if (A.pixi.isPortrait()) {
                                this.buttonContainer.anchor = (0, f.w1)(f.Uq.TopEdge), this.buttonContainer.offset = (0, f.Gz)(E.Kj + n, E.Kj, E.Kj, 0), this.backButton.anchorTo(f.Uq.TopLeft, {
                                    x: 0,
                                    y: 0
                                }), this.finishButton.anchorTo(f.Uq.TopRight, {
                                    x: 0,
                                    y: 0
                                });
                                var o = this.categoryButtons.reduce((function(t, e) {
                                        var r = e.button;
                                        return Math.max(t, r.preferredHeight + 20)
                                    }), 0),
                                    i = this.categoryButtons.reduce((function(t, e) {
                                        return t + e.button.preferredWidth
                                    }), 0) + 10;
                                this.categoryList.sizeDelta = {
                                    x: i,
                                    y: o
                                }, this.categoryList.layoutController = new m.G(10, f.Uq.TopLeft), this.categoryList.anchorTo(f.Uq.BottomCenter, {
                                    x: 0,
                                    y: this.filterListHeight + 10
                                }), this.overlayColorList.anchorTo(f.Uq.BottomEdge, {
                                    x: 20,
                                    y: 10
                                }, {
                                    x: 0,
                                    y: this.filterListHeight
                                }), this.overlayColorList.direction = w.I.Horizontal, this.overlayColorList.layoutController = new g.D7(g.Nm.Vertical, {
                                    x: 10,
                                    y: 10
                                }, g.WD.Start), this.filterList.anchorTo(f.Uq.BottomEdge, {
                                    x: 0,
                                    y: 10
                                }, {
                                    x: 0,
                                    y: this.filterListHeight
                                }), this.filterList.direction = w.I.Horizontal, this.filterList.layoutController = new m.G(10, f.Uq.TopLeft, {
                                    x: 10,
                                    y: 0
                                }), this.imageContainer.anchorTo(f.Uq.Center, void 0, r), this.imageContainer.moveOffset({
                                    x: 0,
                                    y: -200
                                })
                            } else {
                                this.buttonContainer.anchor = (0, f.w1)(f.Uq.LeftEdge), this.buttonContainer.offset = (0, f.Gz)(E.Kj, E.Kj + n, 0, E.Kj), this.backButton.anchorTo(f.Uq.TopLeft, {
                                    x: 0,
                                    y: 0
                                }), this.finishButton.anchorTo(f.Uq.BottomLeft, {
                                    x: 0,
                                    y: 0
                                });
                                var c = this.categoryButtons.reduce((function(t, e) {
                                    return t + e.button.preferredHeight + 10
                                }), 0);
                                this.categoryList.sizeDelta = {
                                    x: 500,
                                    y: c + 10
                                }, this.categoryList.layoutController = new b.Z(10, f.Uq.TopEdge), this.categoryList.anchorTo(f.Uq.TopRight, {
                                    x: 0,
                                    y: E.Kj
                                });
                                var u = this.categoryList.sizeDelta.y + E.Kj;
                                this.overlayColorList.anchorTo(f.Uq.RightEdge), this.overlayColorList.offset = (0, f.Gz)(-510, u, 10, 0), this.overlayColorList.direction = w.I.Vertical, this.overlayColorList.layoutController = new g.D7(g.Nm.Horizontal, void 0, g.WD.End), this.filterList.anchorTo(f.Uq.RightEdge), this.filterList.offset = (0, f.Gz)(-500, u, 10, 0), this.filterList.direction = w.I.Vertical, this.filterList.layoutController = new b.Z(10, f.Uq.TopCenter), this.imageContainer.anchorTo(f.Uq.Center, void 0, r), this.imageContainer.moveOffset({
                                    x: -200,
                                    y: 0
                                })
                            }
                        }
                    }, {
                        key: "added",
                        value: function() {
                            k.GameAnalytics.addDesignEvent("View:Finalize")
                        }
                    }, {
                        key: "unload",
                        value: function() {
                            var t, e = I(this.imageContainer.removeAllChildren());
                            try {
                                for (e.s(); !(t = e.n()).done;) t.value.displayObject.destroy({
                                    children: !0,
                                    texture: !0,
                                    baseTexture: !0
                                })
                            } catch (t) {
                                e.e(t)
                            } finally {
                                e.f()
                            }
                            var r, n = I(this.filterButtons);
                            try {
                                for (n.s(); !(r = n.n()).done;) {
                                    var o = r.value.button;
                                    o.texture !== u.xE.WHITE && o.texture.destroy(!0), o.texture = u.xE.WHITE
                                }
                            } catch (t) {
                                n.e(t)
                            } finally {
                                n.f()
                            }
                        }
                    }, {
                        key: "createCategoryButton",
                        value: function(t, e) {
                            var r = this,
                                n = new y.d,
                                o = n.addChild(new O.N(h.Mo["ui/buttonBg"], 53, 53, 53, 53));
                            o.tint = 0, o.alpha = .25, o.anchorTo(f.Uq.Fill, {
                                x: 20,
                                y: 0
                            }), o.moveOffset({
                                x: 0,
                                y: 20
                            });
                            var i = n.addChild(new O.N(h.Mo["ui/buttonBg"], 53, 53, 53, 53));
                            i.anchorTo(f.Uq.Fill, {
                                x: 20,
                                y: 0
                            }), i.tint = $[e];
                            var a = n.addChild(new x.sm(t, x.H.TopCenter, D(D({}, T.h), {}, {
                                fontSize: 64
                            })));
                            return a.anchorTo(f.Uq.Center), n.preferredWidth = a.preferredWidth + 240, n.preferredHeight = 76, n.displayObject.interactive = !0, n.displayObject.cursor = "pointer", n.displayObject.on("pointerup", (function() {
                                r.selectCategory(e)
                            })), [n, a]
                        }
                    }, {
                        key: "selectCategory",
                        value: function(t) {
                            this.filterList.visible = !1, this.overlayColorList.visible = !1;
                            var e, r = I(this.categoryButtons);
                            try {
                                for (r.s(); !(e = r.n()).done;) {
                                    var n = e.value,
                                        o = n.text,
                                        i = n.category === t;
                                    o.style.fill = i ? T.T.selectedColor : T.T.unselectedColor
                                }
                            } catch (t) {
                                r.e(t)
                            } finally {
                                r.f()
                            }
                            t === J.filters ? this.filterList.visible = !0 : t === J.outline && (this.overlayColorList.visible = !0)
                        }
                    }, {
                        key: "changeOverlayColor",
                        value: function(t) {
                            if (void 0 === L.gS) throw new Error("Missing drawing data.");
                            L.gS.postprocess.outlineColor = t.id, this.updatePreview(), this.updateFilterButtons()
                        }
                    }, {
                        key: "changeEffect",
                        value: function(t) {
                            if (void 0 === L.gS) throw new Error("Missing drawing data.");
                            var e = L.gS.postprocess;
                            void 0 === t ? delete e.effect : e.effect = t, this.updatePreview()
                        }
                    }, {
                        key: "loadImage",
                        value: (n = _(U().mark((function t() {
                            var e, r;
                            return U().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (void 0 !== L.gS) {
                                            t.next = 2;
                                            break
                                        }
                                        throw new Error("Missing drawing data.");
                                    case 2:
                                        e = L.gS.drawing, this.workOfArt = A.worksOfArt.composeWorkOfArt(L.gS), (r = new i.TC).beginFill(0, .33), r.drawRoundedRect(5, e.height - 15, e.width - 10, 45, 5), r.beginFill(16777215, 1), r.lineStyle(10, 11513517, 1, 1), r.drawRoundedRect(0, 0, e.width, e.height, 1), this.imageContainer.addChild(new p.s(r)).addChild(new v.I(this.workOfArt)), this.updateFilterButtons(), this.orientationChanged();
                                    case 14:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function() {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "updatePreview",
                        value: function() {
                            if (void 0 === L.gS) throw new Error("Missing drawing data.");
                            if (void 0 === this.workOfArt) throw new Error("Missing drawing data.");
                            A.worksOfArt.composeWorkOfArt(L.gS, this.workOfArt)
                        }
                    }, {
                        key: "updateFilterButtons",
                        value: function() {
                            var t, e = I(this.filterButtons);
                            try {
                                for (e.s(); !(t = e.n()).done;) {
                                    var r = t.value,
                                        n = r.button,
                                        o = r.effectName,
                                        i = D({}, L.gS);
                                    i.postprocess = D(D({}, i.postprocess), {}, {
                                        effect: {
                                            name: o
                                        }
                                    }), n.texture instanceof u.TI ? A.worksOfArt.composeWorkOfArt(i, n.texture) : n.texture = A.worksOfArt.composeWorkOfArt(i, {
                                        x: X,
                                        y: X
                                    })
                                }
                            } catch (t) {
                                e.e(t)
                            } finally {
                                e.f()
                            }
                        }
                    }], r && M(e.prototype, r), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), q
                }(c.W2)
        },
        9747: function(t, e, r) {
            r.d(e, {
                G: function() {
                    return u
                }
            }), r(3299), r(9653), r(9070), r(1703), r(7042), r(1539), r(1038), r(8783), r(4916), r(7601), r(2526), r(1817), r(2165), r(6992), r(3948);
            var n = r(618);

            function o(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function a(t, e) {
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
            var u = function() {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        r = arguments.length > 1 ? arguments[1] : void 0,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                            x: 0,
                            y: 0
                        };
                    i(this, t), c(this, "spacing", void 0), c(this, "anchorPreset", void 0), c(this, "padding", void 0), this.spacing = e, this.anchorPreset = r, this.padding = n
                }
                var e, r;
                return e = t, (r = [{
                    key: "isDirty",
                    value: function() {
                        return !1
                    }
                }, {
                    key: "setLayout",
                    value: function(t) {
                        var e, r = (0, n.w1)(this.anchorPreset),
                            i = t.size,
                            a = (i.x, i.y),
                            c = {
                                x: this.padding.x,
                                y: this.padding.y
                            },
                            u = function(t, e) {
                                var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                                if (!r) {
                                    if (Array.isArray(t) || (r = function(t, e) {
                                            if (t) {
                                                if ("string" == typeof t) return o(t, e);
                                                var r = Object.prototype.toString.call(t).slice(8, -1);
                                                return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? o(t, e) : void 0
                                            }
                                        }(t)) || e && t && "number" == typeof t.length) {
                                        r && (t = r);
                                        var n = 0,
                                            i = function() {};
                                        return {
                                            s: i,
                                            n: function() {
                                                return n >= t.length ? {
                                                    done: !0
                                                } : {
                                                    done: !1,
                                                    value: t[n++]
                                                }
                                            },
                                            e: function(t) {
                                                throw t
                                            },
                                            f: i
                                        }
                                    }
                                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }
                                var a, c = !0,
                                    u = !1;
                                return {
                                    s: function() {
                                        r = r.call(t)
                                    },
                                    n: function() {
                                        var t = r.next();
                                        return c = t.done, t
                                    },
                                    e: function(t) {
                                        u = !0, a = t
                                    },
                                    f: function() {
                                        try {
                                            c || null == r.return || r.return()
                                        } finally {
                                            if (u) throw a
                                        }
                                    }
                                }
                            }(t.children());
                        try {
                            for (u.s(); !(e = u.n()).done;) {
                                var l = e.value,
                                    f = l.layoutController ? l.sizeDelta.x : Math.max(l.preferredWidth, l.minWidth),
                                    s = l.layoutController ? l.sizeDelta.y : Math.max(l.preferredHeight, l.minHeight);
                                l.offset.min.x = f * r.min.x + c.x, l.offset.min.y = a * r.min.y, l.offset.max.x = f * r.max.x + c.x, l.offset.max.y = a * r.max.y, Math.abs(r.max.x - r.min.x) <= Number.EPSILON && (l.offset.min.x -= f * r.min.x, l.offset.max.x += f - f * r.max.x), Math.abs(r.max.y - r.min.y) <= Number.EPSILON && (l.offset.min.y -= s * r.min.y, l.offset.max.y += s - s * r.max.y), c.x += f + this.spacing
                            }
                        } catch (t) {
                            u.e(t)
                        } finally {
                            u.f()
                        }
                    }
                }]) && a(e.prototype, r), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t
            }()
        },
        3925: function(t, e, r) {
            r.d(e, {
                Z: function() {
                    return u
                }
            }), r(3299), r(9653), r(9070), r(1703), r(7042), r(1539), r(1038), r(8783), r(4916), r(7601), r(2526), r(1817), r(2165), r(6992), r(3948);
            var n = r(618);

            function o(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function a(t, e) {
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
            var u = function() {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        r = arguments.length > 1 ? arguments[1] : void 0,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                            x: 0,
                            y: 0
                        };
                    i(this, t), c(this, "spacing", void 0), c(this, "anchorPreset", void 0), c(this, "padding", void 0), this.spacing = e, this.anchorPreset = r, this.padding = n
                }
                var e, r;
                return e = t, (r = [{
                    key: "isDirty",
                    value: function() {
                        return !1
                    }
                }, {
                    key: "setLayout",
                    value: function(t) {
                        var e, r = (0, n.w1)(this.anchorPreset),
                            i = t.size,
                            a = i.x,
                            c = (i.y, {
                                x: this.padding.x,
                                y: this.padding.y
                            }),
                            u = function(t, e) {
                                var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                                if (!r) {
                                    if (Array.isArray(t) || (r = function(t, e) {
                                            if (t) {
                                                if ("string" == typeof t) return o(t, e);
                                                var r = Object.prototype.toString.call(t).slice(8, -1);
                                                return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? o(t, e) : void 0
                                            }
                                        }(t)) || e && t && "number" == typeof t.length) {
                                        r && (t = r);
                                        var n = 0,
                                            i = function() {};
                                        return {
                                            s: i,
                                            n: function() {
                                                return n >= t.length ? {
                                                    done: !0
                                                } : {
                                                    done: !1,
                                                    value: t[n++]
                                                }
                                            },
                                            e: function(t) {
                                                throw t
                                            },
                                            f: i
                                        }
                                    }
                                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }
                                var a, c = !0,
                                    u = !1;
                                return {
                                    s: function() {
                                        r = r.call(t)
                                    },
                                    n: function() {
                                        var t = r.next();
                                        return c = t.done, t
                                    },
                                    e: function(t) {
                                        u = !0, a = t
                                    },
                                    f: function() {
                                        try {
                                            c || null == r.return || r.return()
                                        } finally {
                                            if (u) throw a
                                        }
                                    }
                                }
                            }(t.children());
                        try {
                            for (u.s(); !(e = u.n()).done;) {
                                var l = e.value,
                                    f = l.layoutController ? l.sizeDelta.x : Math.max(l.preferredWidth, l.minWidth),
                                    s = l.layoutController ? l.sizeDelta.y : Math.max(l.preferredHeight, l.minHeight);
                                l.offset.min.x = a * r.min.x, l.offset.min.y = s * r.min.y + c.y, l.offset.max.x = a * r.max.x, l.offset.max.y = s * r.max.y + c.y, Math.abs(r.max.x - r.min.x) <= Number.EPSILON && (l.offset.min.x -= f * r.min.x, l.offset.max.x += f - f * r.max.x), Math.abs(r.max.y - r.min.y) <= Number.EPSILON && (l.offset.min.y -= s * r.min.y, l.offset.max.y += s - s * r.max.y), c.y += s + this.spacing
                            }
                        } catch (t) {
                            u.e(t)
                        } finally {
                            u.f()
                        }
                    }
                }]) && a(e.prototype, r), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t
            }()
        },
        2289: function(t, e, r) {
            r.d(e, {
                s: function() {
                    return b
                }
            }), r(6992), r(1539), r(8783), r(4129), r(3948), r(1703), r(9070), r(8304), r(489), r(1299), r(2419), r(4819), r(5003), r(2526), r(1817), r(2165);
            var n = r(618);

            function o(t) {
                return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, o(t)
            }

            function i(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function a() {
                return a = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, r) {
                    var n = c(t, e);
                    if (n) {
                        var o = Object.getOwnPropertyDescriptor(n, e);
                        return o.get ? o.get.call(arguments.length < 3 ? t : r) : o.value
                    }
                }, a.apply(this, arguments)
            }

            function c(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = s(t)););
                return t
            }

            function u(t, e) {
                return u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, u(t, e)
            }

            function l(t, e) {
                if (e && ("object" === o(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return f(t)
            }

            function f(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function s(t) {
                return s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, s(t)
            }

            function d(t, e, r) {
                ! function(t, e) {
                    if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
                }(t, e), e.set(t, r)
            }

            function h(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function y(t, e, r) {
                return function(t, e, r) {
                    if (e.set) e.set.call(t, r);
                    else {
                        if (!e.writable) throw new TypeError("attempted to set read only private field");
                        e.value = r
                    }
                }(t, v(t, e, "set"), r), r
            }

            function p(t, e) {
                return function(t, e) {
                    return e.get ? e.get.call(t) : e.value
                }(t, v(t, e, "get"))
            }

            function v(t, e, r) {
                if (!e.has(t)) throw new TypeError("attempted to " + r + " private field on non-instance");
                return e.get(t)
            }
            var g = new WeakMap,
                m = new WeakMap,
                b = function(t) {
                    ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), e && u(t, e)
                    }(v, t);
                    var e, r, n, o, c = (n = v, o = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, e = s(n);
                        if (o) {
                            var r = s(this).constructor;
                            t = Reflect.construct(e, arguments, r)
                        } else t = e.apply(this, arguments);
                        return l(this, t)
                    });

                    function v(t) {
                        var e;
                        return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, v), h(f(e = c.call(this, t)), "minWidth", 0), h(f(e), "minHeight", 0), d(f(e), g, {
                            writable: !0,
                            value: void 0
                        }), d(f(e), m, {
                            writable: !0,
                            value: void 0
                        }), e.offset = {
                            min: {
                                x: 0,
                                y: 0
                            },
                            max: {
                                x: t.width,
                                y: t.height
                            }
                        }, e.minWidth = 0, e.minHeight = 0, e
                    }
                    return e = v, (r = [{
                        key: "updateLayout",
                        value: function() {
                            this.layoutDirty && (this.displayObject.scale.set(1), this.displayObject.width = this.size.x, this.displayObject.height = this.size.y), a(s(v.prototype), "updateLayout", this).call(this)
                        }
                    }, {
                        key: "preferredWidth",
                        get: function() {
                            var t;
                            return null !== (t = p(this, g)) && void 0 !== t ? t : this.displayObject.width
                        },
                        set: function(t) {
                            y(this, g, t)
                        }
                    }, {
                        key: "preferredHeight",
                        get: function() {
                            var t;
                            return null !== (t = p(this, m)) && void 0 !== t ? t : this.displayObject.height
                        },
                        set: function(t) {
                            y(this, m, t)
                        }
                    }]) && i(e.prototype, r), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), v
                }(n.u1)
        }
    }
]);