/*! For license information please see 696.20fbd9e65c40fb2d547e.js.LICENSE.txt */
"use strict";
(self.webpackChunkcolorapp = self.webpackChunkcolorapp || []).push([
    [696], {
        1754: function(t, e, r) {
            r.d(e, {
                Hw: function() {
                    return a
                },
                Kj: function() {
                    return o
                },
                Oz: function() {
                    return c
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
                c = "free"
        },
        9696: function(t, e, r) {
            r.r(e), r.d(e, {
                Finished: function() {
                    return M
                }
            }), r(1703), r(9070), r(8304), r(489), r(1539), r(1299), r(2419), r(7941), r(2526), r(7327), r(5003), r(4747), r(9337), r(3321), r(7042), r(1038), r(8783), r(4916), r(7601), r(1817), r(2165), r(6992), r(3948), r(8674), r(2443), r(9341), r(3706), r(2703);
            var n = r(8844),
                o = r(4242),
                i = r(1014),
                a = r(8942),
                c = r(1585),
                u = r(5650),
                f = r(618),
                s = r(7450),
                l = r(3379),
                p = r(9784),
                h = r(2090),
                y = r(2289),
                d = r(6020),
                b = r(7493),
                v = r(7715),
                g = r(1754),
                w = r(4392),
                m = r(4810),
                O = r(799),
                j = r(6806);

            function P(t) {
                return P = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, P(t)
            }

            function k() {
                k = function() {
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
                    var o = e && e.prototype instanceof l ? e : l,
                        i = Object.create(o.prototype),
                        a = new x(n || []);
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
                                    var c = m(a, r);
                                    if (c) {
                                        if (c === s) continue;
                                        return c
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var u = f(t, e, r);
                                if ("normal" === u.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", u.arg === s) continue;
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
                t.wrap = u;
                var s = {};

                function l() {}

                function p() {}

                function h() {}
                var y = {};
                c(y, o, (function() {
                    return this
                }));
                var d = Object.getPrototypeOf,
                    b = d && d(d(S([])));
                b && b !== e && r.call(b, o) && (y = b);
                var v = h.prototype = l.prototype = Object.create(y);

                function g(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        c(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function w(t, e) {
                    function n(o, i, a, c) {
                        var u = f(t[o], t, i);
                        if ("throw" !== u.type) {
                            var s = u.arg,
                                l = s.value;
                            return l && "object" == P(l) && r.call(l, "__await") ? e.resolve(l.__await).then((function(t) {
                                n("next", t, a, c)
                            }), (function(t) {
                                n("throw", t, a, c)
                            })) : e.resolve(l).then((function(t) {
                                s.value = t, a(s)
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

                function m(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, m(t, e), "throw" === e.method)) return s;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return s
                    }
                    var n = f(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, s;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, s) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, s)
                }

                function O(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function j(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function x(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(O, this), this.reset(!0)
                }

                function S(t) {
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
                        next: _
                    }
                }

                function _() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return p.prototype = h, c(v, "constructor", h), c(h, "constructor", p), p.displayName = c(h, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, c(t, a, "GeneratorFunction")), t.prototype = Object.create(v), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, g(w.prototype), c(w.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = w, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new w(u(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, g(v), c(v, a, "Generator"), c(v, o, (function() {
                    return this
                })), c(v, "toString", (function() {
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
                }, t.values = S, x.prototype = {
                    constructor: x,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(j), !t)
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
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, s) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), s
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), j(r), s
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    j(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, r) {
                        return this.delegate = {
                            iterator: S(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), s
                    }
                }, t
            }

            function x(t, e, r, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void r(t)
                }
                c.done ? e(u) : Promise.resolve(u).then(n, o)
            }

            function S(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(e, r);

                        function a(t) {
                            x(i, n, o, a, c, "next", t)
                        }

                        function c(t) {
                            x(i, n, o, a, c, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function _(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function E(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function C(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? E(Object(r), !0).forEach((function(e) {
                        A(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : E(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function T(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function R(t, e) {
                return R = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, R(t, e)
            }

            function B(t, e) {
                if (e && ("object" === P(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return L(t)
            }

            function L(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function F(t) {
                return F = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, F(t)
            }

            function A(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            var M = function(t) {
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
                    }), e && R(t, e)
                }(H, t);
                var e, r, c, P, x, E, M, D = (E = H, M = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }(), function() {
                    var t, e = F(E);
                    if (M) {
                        var r = F(this).constructor;
                        t = Reflect.construct(e, arguments, r)
                    } else t = e.apply(this, arguments);
                    return B(this, t)
                });

                function H() {
                    var t;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, H), A(L(t = D.call(this)), "returnToFinalize", new o.MZ), A(L(t), "returnToGallery", new o.MZ), A(L(t), "stage", void 0), A(L(t), "buttonContainer", void 0), A(L(t), "backButton", void 0), A(L(t), "finishButton", void 0), A(L(t), "shareButton", void 0), A(L(t), "savingMessage", void 0), A(L(t), "imageContainer", void 0), A(L(t), "share", void 0), A(L(t), "workOfArt", void 0), t.stage = new u.A(L(t)), t.stage.anchorTo(f.Uq.Fill), t.stage.layoutController = new s.I(s.J.PreferredSize, s.J.PreferredSize, {
                        minHeight: 0,
                        minWidth: 0,
                        get preferredHeight() {
                            return v.pixi.stageHeight
                        },
                        get preferredWidth() {
                            return v.pixi.stageWidth
                        }
                    }), t.imageContainer = t.stage.addChild(new h.d), t.buttonContainer = t.stage.addChild(new h.d), t.backButton = t.buttonContainer.addChild(new l.y(p.Mo["ui/back_button"])), t.backButton.released.connect((function() {
                        t.returnToFinalize.emit()
                    })), t.finishButton = t.buttonContainer.addChild(new l.y(p.Mo["ui/finish_button"])), t.finishButton.addChild(new b.sm("DONE", b.H.MiddleCenter, C(C({}, O.h), {}, {
                        fill: "#000000AA",
                        fontSize: 36,
                        stroke: "#FFFFFFBB",
                        strokeThickness: 4
                    }))).anchorTo(f.Uq.Fill), t.finishButton.released.connect((function() {
                        return t.saveDrawing()
                    })), t.shareButton = t.stage.addChild(new l.y(p.Mo["ui/Share_button"])), t.shareButton.released.connect((function() {
                        return t.shareDrawing()
                    })), t.shareButton.visible = !1, t.savingMessage = t.stage.addChild(new b.sm("Saving...", b.H.MiddleCenter, C(C({}, O.h), {}, {
                        fill: "#000",
                        fontSize: 72,
                        stroke: "#FFFFFFBB",
                        strokeThickness: 4
                    }))), t.savingMessage.anchorTo(f.Uq.Fill), t.on("added", (function() {
                        return t.added()
                    })), t.on("removed", (function() {
                        return t.unload()
                    })), v.pixi.orientationChanged.connect((function() {
                        return t.orientationChanged()
                    })), t.orientationChanged(), t
                }
                return e = H, r = [{
                    key: "orientationChanged",
                    value: function() {
                        var t = a.tq.any ? 200 : 0;
                        v.pixi.isPortrait() ? (this.buttonContainer.anchor = (0, f.w1)(f.Uq.TopEdge), this.buttonContainer.offset = (0, f.Gz)(g.Kj + t, g.Kj, g.Kj, 0), this.backButton.anchorTo(f.Uq.TopLeft, {
                            x: 0,
                            y: 0
                        }), this.finishButton.anchorTo(f.Uq.TopRight, {
                            x: 0,
                            y: 0
                        }), this.shareButton.anchorTo(f.Uq.BottomCenter, {
                            x: g.Kj,
                            y: g.Kj
                        })) : (this.buttonContainer.anchor = (0, f.w1)(f.Uq.LeftEdge), this.buttonContainer.offset = (0, f.Gz)(g.Kj, g.Kj + t, 0, g.Kj), this.backButton.anchorTo(f.Uq.TopLeft, {
                            x: 0,
                            y: 0
                        }), this.finishButton.anchorTo(f.Uq.BottomLeft, {
                            x: 0,
                            y: 0
                        }), this.shareButton.anchorTo(f.Uq.RightCenter, {
                            x: g.Kj,
                            y: g.Kj
                        }))
                    }
                }, {
                    key: "added",
                    value: function() {
                        j.GameAnalytics.addDesignEvent("View:Finished"), this.savingMessage.visible = !1
                    }
                }, {
                    key: "unload",
                    value: function() {
                        delete this.share, this.shareButton.visible = !1, delete this.workOfArt;
                        var t, e = function(t, e) {
                            var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                            if (!r) {
                                if (Array.isArray(t) || (r = function(t, e) {
                                        if (t) {
                                            if ("string" == typeof t) return _(t, e);
                                            var r = Object.prototype.toString.call(t).slice(8, -1);
                                            return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? _(t, e) : void 0
                                        }
                                    }(t)) || e && t && "number" == typeof t.length) {
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
                        }(this.imageContainer.removeAllChildren());
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
                    }
                }, {
                    key: "loadImage",
                    value: (x = S(k().mark((function t() {
                        var e, r;
                        return k().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (void 0 !== w.gS) {
                                        t.next = 2;
                                        break
                                    }
                                    throw new Error("Missing drawing data.");
                                case 2:
                                    if (e = w.gS.drawing, this.workOfArt = v.worksOfArt.composeWorkOfArt(w.gS), (r = new i.TC).beginFill(0, .33), r.drawRoundedRect(5, e.height - 15, e.width - 10, 45, 5), r.beginFill(16777215, 1), r.lineStyle(10, 11513517, 1, 1), r.drawRoundedRect(0, 0, e.width, e.height, 1), this.imageContainer.addChild(new y.s(r)).addChild(new d.I(this.workOfArt)), this.imageContainer.anchorTo(f.Uq.Center, void 0, {
                                            x: e.width,
                                            y: e.height
                                        }), void 0 === navigator.share) {
                                        t.next = 18;
                                        break
                                    }
                                    return t.next = 16, v.worksOfArt.getShare(this.imageContainer.displayObject);
                                case 16:
                                    this.share = t.sent, this.shareButton.visible = void 0 === navigator.canShare || navigator.canShare(this.share);
                                case 18:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function() {
                        return x.apply(this, arguments)
                    })
                }, {
                    key: "saveDrawing",
                    value: (P = S(k().mark((function t() {
                        var e, r;
                        return k().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (void 0 !== w.gS) {
                                        t.next = 2;
                                        break
                                    }
                                    throw new Error("Missing drawing state.");
                                case 2:
                                    if (!this.savingMessage.visible) {
                                        t.next = 4;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 4:
                                    return this.savingMessage.visible = !0, t.prev = 5, t.next = 8, v.worksOfArt.saveWorkOfArt(w.gS, this.workOfArt);
                                case 8:
                                    t.next = 12;
                                    break;
                                case 10:
                                    t.prev = 10, t.t0 = t.catch(5);
                                case 12:
                                    void 0 !== w.gS && (r = (0, m.Wk)(w.gS.drawingData), null === (e = a.kN[r]) || void 0 === e || e.destroy(!0)), this.returnToGallery.emit(), this.savingMessage.visible = !1;
                                case 15:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this, [
                            [5, 10]
                        ])
                    }))), function() {
                        return P.apply(this, arguments)
                    })
                }, {
                    key: "shareDrawing",
                    value: (c = S(k().mark((function t() {
                        return k().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return n.Z.gameplayStop(), t.prev = 1, t.next = 4, navigator.share(this.share);
                                case 4:
                                    t.next = 9;
                                    break;
                                case 6:
                                    t.prev = 6, t.t0 = t.catch(1);
                                case 9:
                                    n.Z.gameplayStart();
                                case 10:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this, [
                            [1, 6]
                        ])
                    }))), function() {
                        return c.apply(this, arguments)
                    })
                }], r && T(e.prototype, r), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), H
            }(c.W2)
        },
        7133: function(t, e, r) {
            r.d(e, {
                v: function() {
                    return y
                }
            }), r(2222), r(9070), r(8304), r(489), r(1539), r(1299), r(2419), r(1703), r(2526), r(1817), r(2165), r(6992), r(8783), r(3948);
            var n = r(9658),
                o = r(4242),
                i = r(6177);

            function a(t) {
                return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, a(t)
            }

            function c(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function u(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function f(t, e) {
                return f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, f(t, e)
            }

            function s(t, e) {
                if (e && ("object" === a(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return l(t)
            }

            function l(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function p(t) {
                return p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, p(t)
            }

            function h(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function y(t) {
                return function(t) {
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
                        }), e && f(t, e)
                    }(b, t);
                    var e, r, a, y, d = (a = b, y = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, e = p(a);
                        if (y) {
                            var r = p(this).constructor;
                            t = Reflect.construct(e, arguments, r)
                        } else t = e.apply(this, arguments);
                        return s(this, t)
                    });

                    function b() {
                        var t;
                        c(this, b);
                        for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++) r[i] = arguments[i];
                        return h(l(t = d.call.apply(d, [this].concat(r))), "pressed", new o.MZ), h(l(t), "released", new o.MZ), h(l(t), "tapped", new o.MZ), h(l(t), "releasedoutside", new o.MZ), h(l(t), "tapOnly", !1), h(l(t), "lastPos", new n.E9), t
                    }
                    return e = b, (r = [{
                        key: "downHandler",
                        value: function(t) {
                            this.tapOnly || (t.stopPropagation(), this.pressed.emit(t.data)), this.lastPos.copyFrom(t.data.global)
                        }
                    }, {
                        key: "upHandler",
                        value: function(t) {
                            this.tapOnly || (t.stopPropagation(), this.released.emit(t.data)), (0, i.TE)(this.lastPos, t.data.global) <= 5 && this.tapped.emit(t.data)
                        }
                    }, {
                        key: "outsideHandler",
                        value: function(t) {
                            this.tapOnly || (t.stopPropagation(), this.releasedoutside.emit(t.data))
                        }
                    }, {
                        key: "interactive",
                        get: function() {
                            return this.displayObject.interactive
                        },
                        set: function(t) {
                            this.displayObject.interactive = t, t ? (this.displayObject.on("pointerdown", this.downHandler, this), this.displayObject.on("pointerup", this.upHandler, this), this.displayObject.on("pointerupoutside", this.outsideHandler, this)) : (this.displayObject.off("pointerdown", this.downHandler, this), this.displayObject.off("pointerup", this.upHandler, this), this.displayObject.off("pointerupoutside", this.outsideHandler, this))
                        }
                    }, {
                        key: "cursor",
                        get: function() {
                            return this.displayObject.cursor
                        },
                        set: function(t) {
                            this.displayObject.cursor = t
                        }
                    }, {
                        key: "interactiveChildren",
                        get: function() {
                            return this.displayObject.interactiveChildren
                        },
                        set: function(t) {
                            this.displayObject.interactiveChildren = t
                        }
                    }]) && u(e.prototype, r), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), b
                }(t)
            }
        },
        3379: function(t, e, r) {
            r.d(e, {
                y: function() {
                    return f
                }
            }), r(8304), r(489), r(1539), r(1299), r(2419), r(1703), r(9070), r(2526), r(1817), r(2165), r(6992), r(8783), r(3948);
            var n = r(7133),
                o = r(6020);

            function i(t) {
                return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, i(t)
            }

            function a(t, e) {
                return a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, a(t, e)
            }

            function c(t, e) {
                if (e && ("object" === i(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t)
            }

            function u(t) {
                return u = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, u(t)
            }
            var f = function(t) {
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
                    }), e && a(t, e)
                }(i, t);
                var e, r, n, o = (r = i, n = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }(), function() {
                    var t, e = u(r);
                    if (n) {
                        var o = u(this).constructor;
                        t = Reflect.construct(e, arguments, o)
                    } else t = e.apply(this, arguments);
                    return c(this, t)
                });

                function i(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, i), (e = o.call(this, t)).interactive = !0, e.cursor = "pointer", e
                }
                return e = i, Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }((0, n.v)(o.I))
        },
        2090: function(t, e, r) {
            r.d(e, {
                d: function() {
                    return y
                }
            }), r(9070), r(8304), r(489), r(1539), r(1299), r(2419), r(1703), r(4819), r(5003), r(2526), r(1817), r(2165), r(6992), r(8783), r(3948);
            var n = r(1585);

            function o(t) {
                return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, o(t)
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

            function c() {
                return c = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, r) {
                    var n = u(t, e);
                    if (n) {
                        var o = Object.getOwnPropertyDescriptor(n, e);
                        return o.get ? o.get.call(arguments.length < 3 ? t : r) : o.value
                    }
                }, c.apply(this, arguments)
            }

            function u(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = p(t)););
                return t
            }

            function f(t, e) {
                return f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, f(t, e)
            }

            function s(t, e) {
                if (e && ("object" === o(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return l(t)
            }

            function l(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function p(t) {
                return p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, p(t)
            }

            function h(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            r(1014);
            var y = function(t) {
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
                    }), e && f(t, e)
                }(d, t);
                var e, r, o, u, y = (o = d, u = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }(), function() {
                    var t, e = p(o);
                    if (u) {
                        var r = p(this).constructor;
                        t = Reflect.construct(e, arguments, r)
                    } else t = e.apply(this, arguments);
                    return s(this, t)
                });

                function d() {
                    var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new n.W2;
                    return i(this, d), h(l(t = y.call(this, e)), "debug", void 0), h(l(t), "minWidth", 0), h(l(t), "preferredWidth", 0), h(l(t), "minHeight", 0), h(l(t), "preferredHeight", 0), t
                }
                return e = d, (r = [{
                    key: "updateLayout",
                    value: function() {
                        this.layoutDirty, c(p(d.prototype), "updateLayout", this).call(this)
                    }
                }, {
                    key: "alpha",
                    get: function() {
                        return this.displayObject.alpha
                    },
                    set: function(t) {
                        this.displayObject.alpha = t
                    }
                }]) && a(e.prototype, r), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), d
            }(r(618).u1)
        },
        2289: function(t, e, r) {
            r.d(e, {
                s: function() {
                    return w
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
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = l(t)););
                return t
            }

            function u(t, e) {
                return u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, u(t, e)
            }

            function f(t, e) {
                if (e && ("object" === o(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return s(t)
            }

            function s(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function l(t) {
                return l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, l(t)
            }

            function p(t, e, r) {
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
                }(t, b(t, e, "set"), r), r
            }

            function d(t, e) {
                return function(t, e) {
                    return e.get ? e.get.call(t) : e.value
                }(t, b(t, e, "get"))
            }

            function b(t, e, r) {
                if (!e.has(t)) throw new TypeError("attempted to " + r + " private field on non-instance");
                return e.get(t)
            }
            var v = new WeakMap,
                g = new WeakMap,
                w = function(t) {
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
                    }(b, t);
                    var e, r, n, o, c = (n = b, o = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, e = l(n);
                        if (o) {
                            var r = l(this).constructor;
                            t = Reflect.construct(e, arguments, r)
                        } else t = e.apply(this, arguments);
                        return f(this, t)
                    });

                    function b(t) {
                        var e;
                        return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, b), h(s(e = c.call(this, t)), "minWidth", 0), h(s(e), "minHeight", 0), p(s(e), v, {
                            writable: !0,
                            value: void 0
                        }), p(s(e), g, {
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
                    return e = b, (r = [{
                        key: "updateLayout",
                        value: function() {
                            this.layoutDirty && (this.displayObject.scale.set(1), this.displayObject.width = this.size.x, this.displayObject.height = this.size.y), a(l(b.prototype), "updateLayout", this).call(this)
                        }
                    }, {
                        key: "preferredWidth",
                        get: function() {
                            var t;
                            return null !== (t = d(this, v)) && void 0 !== t ? t : this.displayObject.width
                        },
                        set: function(t) {
                            y(this, v, t)
                        }
                    }, {
                        key: "preferredHeight",
                        get: function() {
                            var t;
                            return null !== (t = d(this, g)) && void 0 !== t ? t : this.displayObject.height
                        },
                        set: function(t) {
                            y(this, g, t)
                        }
                    }]) && i(e.prototype, r), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), b
                }(n.u1)
        }
    }
]);