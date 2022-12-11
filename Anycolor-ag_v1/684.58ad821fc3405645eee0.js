/*! For license information please see 684.58ad821fc3405645eee0.js.LICENSE.txt */
"use strict";
(self.webpackChunkcolorapp = self.webpackChunkcolorapp || []).push([
    [684], {
        7715: function(t, e, r) {
            r.r(e), r.d(e, {
                default: function() {
                    return me
                },
                pixi: function() {
                    return Nt
                },
                worksOfArt: function() {
                    return Wt
                }
            }), r(6992), r(1539), r(8674), r(8783), r(3948), r(3689), r(9070), r(8304), r(489), r(1299), r(2419), r(1703), r(4819), r(5003), r(2526), r(1817), r(2165), r(7042), r(1038), r(4916), r(7601), r(2443), r(9341), r(3706), r(2703), r(4747);
            var n = r(4764),
                o = r(5198),
                i = r(550),
                a = r(6710),
                u = r(7803),
                c = r(2126);
            a.Th.registerPlugin("extract", n.Q), a.Th.registerPlugin("interaction", o.bx), a.Th.registerPlugin("batch", a.Bv), a.Th.registerPlugin("tilingSprite", u.S), i.aN.registerPlugin(c.o);
            var s = r(8844),
                l = r(5569),
                f = (r(3371), r(2222), r(3299), r(9653), r(7941), r(7327), r(9337), r(3321), r(4460)),
                h = r(9658),
                d = r(6679),
                p = r(7823),
                y = r(4242);

            function v(t) {
                return v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, v(t)
            }

            function m() {
                m = function() {
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
                    u = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function c(t, e, r, n) {
                    var o = e && e.prototype instanceof f ? e : f,
                        i = Object.create(o.prototype),
                        a = new P(n || []);
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
                                    var u = O(a, r);
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

                function f() {}

                function h() {}

                function d() {}
                var p = {};
                u(p, o, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    g = y && y(y(k([])));
                g && g !== e && r.call(g, o) && (p = g);
                var w = d.prototype = f.prototype = Object.create(p);

                function b(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        u(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function x(t, e) {
                    function n(o, i, a, u) {
                        var c = s(t[o], t, i);
                        if ("throw" !== c.type) {
                            var l = c.arg,
                                f = l.value;
                            return f && "object" == v(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                n("next", t, a, u)
                            }), (function(t) {
                                n("throw", t, a, u)
                            })) : e.resolve(f).then((function(t) {
                                l.value = t, a(l)
                            }), (function(t) {
                                return n("throw", t, a, u)
                            }))
                        }
                        u(c.arg)
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

                function O(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, O(t, e), "throw" === e.method)) return l;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return l
                    }
                    var n = s(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, l;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, l) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, l)
                }

                function S(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function j(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function P(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(S, this), this.reset(!0)
                }

                function k(t) {
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
                return h.prototype = d, u(w, "constructor", d), u(d, "constructor", h), h.displayName = u(d, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, u(t, a, "GeneratorFunction")), t.prototype = Object.create(w), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, b(x.prototype), u(x.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = x, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new x(c(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, b(w), u(w, a, "Generator"), u(w, o, (function() {
                    return this
                })), u(w, "toString", (function() {
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
                }, t.values = k, P.prototype = {
                    constructor: P,
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
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, l) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), l
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), j(r), l
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
                            iterator: k(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), l
                    }
                }, t
            }

            function g(t, e, r, n, o, i, a) {
                try {
                    var u = t[i](a),
                        c = u.value
                } catch (t) {
                    return void r(t)
                }
                u.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function w(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function b(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? w(Object(r), !0).forEach((function(e) {
                        A(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : w(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function x() {
                return x = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, r) {
                    var n = O(t, e);
                    if (n) {
                        var o = Object.getOwnPropertyDescriptor(n, e);
                        return o.get ? o.get.call(arguments.length < 3 ? t : r) : o.value
                    }
                }, x.apply(this, arguments)
            }

            function O(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = _(t)););
                return t
            }

            function S(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function j(t, e, r) {
                return e && S(t.prototype, e), r && S(t, r), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }

            function P(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function k(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), e && E(t, e)
            }

            function E(t, e) {
                return E = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, E(t, e)
            }

            function C(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = _(t);
                    if (e) {
                        var o = _(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return L(this, r)
                }
            }

            function L(t, e) {
                if (e && ("object" === v(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return T(t)
            }

            function T(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function _(t) {
                return _ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, _(t)
            }

            function A(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            d.vB.shared.autoStart = !1, d.vB.system.autoStart = !1;
            var D = Object.freeze({
                    Fill: Symbol("Fill"),
                    Inside: Symbol("KeepAspectRatio"),
                    FillReorient: Symbol("FillReorient"),
                    InsideReorient: Symbol("KeepAspectRatioReorient"),
                    FillByOrientation: Symbol("FillOrientation")
                }),
                R = Object.freeze({
                    TopLeft: Symbol("TopLeft"),
                    Center: Symbol("Center")
                }),
                M = function(t) {
                    k(r, t);
                    var e = C(r);

                    function r() {
                        var t;
                        P(this, r);
                        for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i];
                        return A(T(t = e.call.apply(e, [this].concat(o))), "deltaX", 0), A(T(t), "deltaY", 0), A(T(t), "deltaZ", 0), t
                    }
                    return j(r)
                }(o.gU),
                I = new M,
                z = new o.sm,
                F = function(t) {
                    k(o, t);
                    var e, r, n = C(o);

                    function o(t, e, r) {
                        var i, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : D.InsideReorient,
                            u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : R.TopLeft,
                            c = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : p._C.LOW;
                        P(this, o);
                        var l = s.Z.getScreenSize(),
                            f = l.width,
                            h = l.height;
                        return A(T(i = n.call(this, b({
                            width: f,
                            height: h,
                            powerPreference: "high-performance",
                            backgroundColor: 2371921,
                            forceCanvas: !1,
                            resolution: devicePixelRatio,
                            autoDensity: Math.abs(devicePixelRatio - 1) > Number.EPSILON
                        }, r))), "assetDesignWidth", void 0), A(T(i), "assetDesignHeight", void 0), A(T(i), "stageScaleMode", void 0), A(T(i), "stagePlacementMode", void 0), A(T(i), "orientationChanged", void 0), A(T(i), "sizeChanged", void 0), A(T(i), "needsRendererReset", void 0), A(T(i), "designWidth", void 0), A(T(i), "designHeight", void 0), A(T(i), "stageWidth", void 0), A(T(i), "stageHeight", void 0), A(T(i), "screenWidth", void 0), A(T(i), "screenHeight", void 0), A(T(i), "resizeHandler", void 0), A(T(i), "resizeNeeded", void 0), A(T(i), "wheelEventListener", void 0), i.orientationChanged = new y.MZ, i.sizeChanged = new y.MZ, i.assetDesignWidth = t, i.assetDesignHeight = e, i.needsRendererReset = !1, i.stageScaleMode = a, i.stagePlacementMode = u, i.designWidth = 0, i.designHeight = 0, i.stageWidth = 0, i.stageHeight = 0, i.screenWidth = f, i.screenHeight = h, i.resizeNeeded = !0, i.resizeHandler = function() {
                            i.resizeNeeded = !0
                        }, s.Z.addResizeHandler(i.resizeHandler), p.u9.add((function() {
                            return d.vB.system.update(p.u9.gameTimeMs)
                        }), p._C.NORMAL), p.tT.add((function() {
                            return d.vB.shared.update(p.tT.gameTimeMs)
                        }), p._C.NORMAL), p.tT.add(i.render, c, T(i)), i.wheelEventListener = function(t) {
                            var e = 1;
                            0 === t.deltaMode ? e = 1 : 1 === t.deltaMode ? e = 50 : 2 === t.deltaMode && (e = 500), i.interactionManager.mapPositionToPoint(I.global, t.clientX, t.clientY), I.originalEvent = t, I.deltaX = t.deltaX * e, I.deltaY = t.deltaY * e, I.deltaZ = t.deltaZ * e, z.data = I, z.reset(), i.interactionManager.processInteractive(z, i.stage, (function(t, e, r) {
                                !r || t.stopPropagationHint && e !== t.stopsPropagatingAt || e.emit("wheel", t)
                            }), !0)
                        }, i.view.addEventListener("wheel", i.wheelEventListener), i
                    }
                    return j(o, [{
                        key: "appendToDom",
                        value: function() {
                            var t;
                            null === (t = s.Z.targetElement) || void 0 === t || t.appendChild(this.view), this.view.style.visibility = "hidden"
                        }
                    }, {
                        key: "init",
                        value: (e = m().mark((function t() {
                            return m().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        this.view.style.visibility = "visible", this.handleResize();
                                    case 2:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        })), r = function() {
                            var t = this,
                                r = arguments;
                            return new Promise((function(n, o) {
                                var i = e.apply(t, r);

                                function a(t) {
                                    g(i, n, o, a, u, "next", t)
                                }

                                function u(t) {
                                    g(i, n, o, a, u, "throw", t)
                                }
                                a(void 0)
                            }))
                        }, function() {
                            return r.apply(this, arguments)
                        })
                    }, {
                        key: "interactionManager",
                        get: function() {
                            return this.renderer.plugins.interaction
                        }
                    }, {
                        key: "handleResize",
                        value: function() {
                            var t = s.Z.getScreenSize(),
                                e = t.width,
                                r = t.height,
                                n = this.isPortrait();
                            if (this.screenWidth = e, this.screenHeight = r, this.stageScaleMode === D.Inside) {
                                var o = this.assetDesignWidth / this.assetDesignHeight,
                                    i = e / r;
                                this.screenHeight = i < o ? e / o : r, this.screenWidth = this.screenHeight * o, this.designWidth = this.assetDesignWidth, this.designHeight = this.assetDesignHeight
                            } else if (this.stageScaleMode === D.InsideReorient) {
                                var a = this.assetDesignWidth / this.assetDesignHeight;
                                e / r < 1 != a < 1 ? (this.screenHeight = Math.min(e * a, r), this.screenWidth = Math.min(e, this.screenHeight / a)) : (this.screenHeight = Math.min(e / a, r), this.screenWidth = Math.min(e, this.screenHeight * a)), this.designWidth = this.isPortrait() ? this.assetDesignHeight : this.assetDesignWidth, this.designHeight = this.isPortrait() ? this.assetDesignWidth : this.assetDesignHeight
                            } else if (this.stageScaleMode === D.FillReorient) this.designWidth = this.isPortrait() ? this.assetDesignHeight : this.assetDesignWidth, this.designHeight = this.isPortrait() ? this.assetDesignWidth : this.assetDesignHeight;
                            else if (this.stageScaleMode === D.FillByOrientation) {
                                var u = this.assetDesignWidth / this.assetDesignHeight,
                                    c = e / r;
                                u < 1 ? this.screenWidth = c < u ? e : r * u : this.screenHeight = c > u ? r : e / u, this.designWidth = this.isPortrait() ? this.assetDesignWidth : this.assetDesignHeight, this.designHeight = this.isPortrait() ? this.assetDesignHeight : this.assetDesignWidth
                            } else this.designWidth = this.assetDesignWidth, this.designHeight = this.assetDesignHeight;
                            var l = Math.min(this.screenWidth / this.designWidth, this.screenHeight / this.designHeight);
                            this.stage.scale.set(l), this.stageWidth = this.screenWidth / l, this.stageHeight = this.screenHeight / l, this.stagePlacementMode === R.Center && (this.stage.x = (this.screenWidth - this.designWidth * l) / 2), this.sizeChanged.emit(), n !== this.isPortrait() && this.orientationChanged.emit();
                            var f = this.stage.enableTempParent();
                            this.stage.updateTransform(), this.stage.disableTempParent(f), this.renderer.resize(this.screenWidth, this.screenHeight), this.resizeNeeded = !1
                        }
                    }, {
                        key: "isPortrait",
                        value: function() {
                            return this.screenWidth < this.screenHeight
                        }
                    }, {
                        key: "render",
                        value: function() {
                            this.resizeNeeded && this.handleResize(), this.needsRendererReset && this.renderer instanceof a.Th && this.renderer.reset(), x(_(o.prototype), "render", this).call(this)
                        }
                    }, {
                        key: "stopAndDestroy",
                        value: function() {
                            this.view.removeEventListener("wheel", this.wheelEventListener), s.Z.removeResizeHandler(this.resizeHandler), this.stop(), this.destroy(!0)
                        }
                    }, {
                        key: "globalToNormalized",
                        value: function(t) {
                            return new h.E9(t.x / this.renderer.width, t.y / this.renderer.height)
                        }
                    }]), o
                }(f.M),
                G = r(6194);

            function N(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function W(t, e, r) {
                return e && N(t.prototype, e), r && N(t, r), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }
            var H = W((function t() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t)
            }));

            function B(t) {
                return B = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, B(t)
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
                    u = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function c(t, e, r, n) {
                    var o = e && e.prototype instanceof f ? e : f,
                        i = Object.create(o.prototype),
                        a = new S(n || []);
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

                function f() {}

                function h() {}

                function d() {}
                var p = {};
                u(p, o, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    v = y && y(y(j([])));
                v && v !== e && r.call(v, o) && (p = v);
                var m = d.prototype = f.prototype = Object.create(p);

                function g(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        u(t, e, (function(t) {
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
                            return f && "object" == B(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                n("next", t, a, u)
                            }), (function(t) {
                                n("throw", t, a, u)
                            })) : e.resolve(f).then((function(t) {
                                l.value = t, a(l)
                            }), (function(t) {
                                return n("throw", t, a, u)
                            }))
                        }
                        u(c.arg)
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

                function S(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(x, this), this.reset(!0)
                }

                function j(t) {
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
                return h.prototype = d, u(m, "constructor", d), u(d, "constructor", h), h.displayName = u(d, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, u(t, a, "GeneratorFunction")), t.prototype = Object.create(m), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, g(w.prototype), u(w.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = w, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new w(c(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, g(m), u(m, a, "Generator"), u(m, o, (function() {
                    return this
                })), u(m, "toString", (function() {
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
                }, t.values = j, S.prototype = {
                    constructor: S,
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
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, l) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), l
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), O(r), l
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
                            iterator: j(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), l
                    }
                }, t
            }

            function V(t, e, r, n, o, i, a) {
                try {
                    var u = t[i](a),
                        c = u.value
                } catch (t) {
                    return void r(t)
                }
                u.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function Z(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function q(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function Y(t, e) {
                return Y = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, Y(t, e)
            }

            function J(t, e) {
                if (e && ("object" === B(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t)
            }

            function X(t) {
                return X = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, X(t)
            }
            var $ = new G.ZA,
                K = function(t) {
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
                        }), e && Y(t, e)
                    }(c, t);
                    var e, r, n, o, i, a, u = (i = c, a = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, e = X(i);
                        if (a) {
                            var r = X(this).constructor;
                            t = Reflect.construct(e, arguments, r)
                        } else t = e.apply(this, arguments);
                        return J(this, t)
                    });

                    function c() {
                        return Z(this, c), u.apply(this, arguments)
                    }
                    return e = c, r = [{
                        key: "setup",
                        value: (n = U().mark((function t() {
                            return U().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", void 0);
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })), o = function() {
                            var t = this,
                                e = arguments;
                            return new Promise((function(r, o) {
                                var i = n.apply(t, e);

                                function a(t) {
                                    V(i, r, o, a, u, "next", t)
                                }

                                function u(t) {
                                    V(i, r, o, a, u, "throw", t)
                                }
                                a(void 0)
                            }))
                        }, function() {
                            return o.apply(this, arguments)
                        })
                    }, {
                        key: "update",
                        value: function() {
                            (0, G.Vx)(), $.update()
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            (0, G.xY)(), $.removeAll()
                        }
                    }], r && q(e.prototype, r), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), c
                }(H),
                Q = r(888),
                tt = r(7117),
                et = r(1585),
                rt = r(4390),
                nt = r(9784),
                ot = r(6020),
                it = r(5650),
                at = r(618),
                ut = r(7450),
                ct = r(6177),
                st = r(7493),
                lt = r(799);

            function ft(t) {
                return ft = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, ft(t)
            }

            function ht() {
                ht = function() {
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
                    u = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function c(t, e, r, n) {
                    var o = e && e.prototype instanceof f ? e : f,
                        i = Object.create(o.prototype),
                        a = new S(n || []);
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

                function f() {}

                function h() {}

                function d() {}
                var p = {};
                u(p, o, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    v = y && y(y(j([])));
                v && v !== e && r.call(v, o) && (p = v);
                var m = d.prototype = f.prototype = Object.create(p);

                function g(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        u(t, e, (function(t) {
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
                            return f && "object" == ft(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                n("next", t, a, u)
                            }), (function(t) {
                                n("throw", t, a, u)
                            })) : e.resolve(f).then((function(t) {
                                l.value = t, a(l)
                            }), (function(t) {
                                return n("throw", t, a, u)
                            }))
                        }
                        u(c.arg)
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

                function S(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(x, this), this.reset(!0)
                }

                function j(t) {
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
                return h.prototype = d, u(m, "constructor", d), u(d, "constructor", h), h.displayName = u(d, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, u(t, a, "GeneratorFunction")), t.prototype = Object.create(m), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, g(w.prototype), u(w.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = w, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new w(c(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, g(m), u(m, a, "Generator"), u(m, o, (function() {
                    return this
                })), u(m, "toString", (function() {
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
                }, t.values = j, S.prototype = {
                    constructor: S,
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
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, l) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), l
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), O(r), l
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
                            iterator: j(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), l
                    }
                }, t
            }

            function dt(t, e) {
                var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!r) {
                    if (Array.isArray(t) || (r = pt(t)) || e && t && "number" == typeof t.length) {
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
                    u = !1;
                return {
                    s: function() {
                        r = r.call(t)
                    },
                    n: function() {
                        var t = r.next();
                        return a = t.done, t
                    },
                    e: function(t) {
                        u = !0, i = t
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

            function pt(t, e) {
                if (t) {
                    if ("string" == typeof t) return yt(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? yt(t, e) : void 0
                }
            }

            function yt(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function vt(t, e, r, n, o, i, a) {
                try {
                    var u = t[i](a),
                        c = u.value
                } catch (t) {
                    return void r(t)
                }
                u.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function mt(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function gt(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? mt(Object(r), !0).forEach((function(e) {
                        jt(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : mt(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function wt(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function bt(t, e) {
                return bt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, bt(t, e)
            }

            function xt(t, e) {
                if (e && ("object" === ft(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return Ot(t)
            }

            function Ot(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function St(t) {
                return St = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, St(t)
            }

            function jt(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            var Pt = [{
                    name: "ui",
                    image: {
                        alpha: r.p + "32edc2051491ee92b571.png",
                        color: r.p + "e255237d2ca7f190218b.jpg"
                    },
                    spritesheet: {
                        frames: {
                            "ui/back_button": {
                                frame: {
                                    x: 405,
                                    y: 112,
                                    w: 130,
                                    h: 130
                                },
                                trimmed: !0,
                                spriteSourceSize: {
                                    x: 8,
                                    y: 8,
                                    w: 130,
                                    h: 130
                                },
                                sourceSize: {
                                    w: 146,
                                    h: 146
                                }
                            },
                            "ui/Button_bg_box": {
                                frame: {
                                    x: 251,
                                    y: 268,
                                    w: 212,
                                    h: 212
                                },
                                trimmed: !0,
                                spriteSourceSize: {
                                    x: 1,
                                    y: 1,
                                    w: 212,
                                    h: 212
                                },
                                sourceSize: {
                                    w: 214,
                                    h: 214
                                }
                            },
                            "ui/buttonBg": {
                                frame: {
                                    x: 268,
                                    y: 1,
                                    w: 528,
                                    h: 109
                                }
                            },
                            "ui/finish_button": {
                                frame: {
                                    x: 631,
                                    y: 375,
                                    w: 121,
                                    h: 121
                                }
                            },
                            "ui/freepaint_button": {
                                frame: {
                                    x: 268,
                                    y: 112,
                                    w: 139,
                                    h: 135
                                },
                                rotated: !0,
                                trimmed: !0,
                                spriteSourceSize: {
                                    x: 2,
                                    y: 3,
                                    w: 139,
                                    h: 135
                                },
                                sourceSize: {
                                    w: 144,
                                    h: 139
                                }
                            },
                            "ui/paintbucket": {
                                frame: {
                                    x: 631,
                                    y: 244,
                                    w: 129,
                                    h: 162
                                },
                                rotated: !0,
                                trimmed: !0,
                                spriteSourceSize: {
                                    x: 4,
                                    y: 1,
                                    w: 129,
                                    h: 162
                                },
                                sourceSize: {
                                    w: 138,
                                    h: 166
                                }
                            },
                            "ui/Palette_button": {
                                frame: {
                                    x: 465,
                                    y: 244,
                                    w: 164,
                                    h: 164
                                },
                                trimmed: !0,
                                spriteSourceSize: {
                                    x: 0,
                                    y: 0,
                                    w: 164,
                                    h: 164
                                },
                                sourceSize: {
                                    w: 165,
                                    h: 165
                                }
                            },
                            "ui/playADbig": {
                                frame: {
                                    x: 1,
                                    y: 268,
                                    w: 221,
                                    h: 248
                                },
                                rotated: !0,
                                trimmed: !0,
                                spriteSourceSize: {
                                    x: 6,
                                    y: 7,
                                    w: 221,
                                    h: 248
                                },
                                sourceSize: {
                                    w: 233,
                                    h: 261
                                }
                            },
                            "ui/playADcorner": {
                                frame: {
                                    x: 754,
                                    y: 375,
                                    w: 66,
                                    h: 66
                                }
                            },
                            "ui/redo_button": {
                                frame: {
                                    x: 537,
                                    y: 112,
                                    w: 130,
                                    h: 130
                                },
                                trimmed: !0,
                                spriteSourceSize: {
                                    x: 8,
                                    y: 8,
                                    w: 130,
                                    h: 130
                                },
                                sourceSize: {
                                    w: 146,
                                    h: 146
                                }
                            },
                            "ui/Selected_palette_indicator": {
                                frame: {
                                    x: 532,
                                    y: 410,
                                    w: 70,
                                    h: 70
                                }
                            },
                            "ui/Share_button": {
                                frame: {
                                    x: 1,
                                    y: 1,
                                    w: 265,
                                    h: 265
                                }
                            },
                            "ui/shut_icon": {
                                frame: {
                                    x: 465,
                                    y: 410,
                                    w: 75,
                                    h: 65
                                },
                                rotated: !0
                            },
                            "ui/undo_button": {
                                frame: {
                                    x: 669,
                                    y: 112,
                                    w: 130,
                                    h: 130
                                },
                                trimmed: !0,
                                spriteSourceSize: {
                                    x: 8,
                                    y: 8,
                                    w: 130,
                                    h: 130
                                },
                                sourceSize: {
                                    w: 146,
                                    h: 146
                                }
                            }
                        },
                        meta: {
                            image: "ui.spritesheet.png",
                            size: {
                                w: 821,
                                h: 497
                            },
                            scale: "1"
                        }
                    }
                }],
                kt = function(t) {
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
                        }), e && bt(t, e)
                    }(c, t);
                    var e, r, n, o, i, a, u = (i = c, a = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, e = St(i);
                        if (a) {
                            var r = St(this).constructor;
                            t = Reflect.construct(e, arguments, r)
                        } else t = e.apply(this, arguments);
                        return xt(this, t)
                    });

                    function c(t) {
                        var e;
                        return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, c), jt(Ot(e = u.call(this)), "background", void 0), jt(Ot(e), "stage", void 0), jt(Ot(e), "loaderProgress", void 0), jt(Ot(e), "appLogo", void 0), jt(Ot(e), "copyrightText", void 0), jt(Ot(e), "aniwayLogo", void 0), e.background = t, e.loaderProgress = new rt.Y((function(t) {
                            return e.updateProgress(t)
                        })), e.stage = new it.A(Ot(e)), e.stage.anchorTo(at.Uq.Fill), e.stage.layoutController = new ut.I(ut.J.PreferredSize, ut.J.PreferredSize, {
                            minHeight: 0,
                            minWidth: 0,
                            get preferredHeight() {
                                return Nt.stageHeight
                            },
                            get preferredWidth() {
                                return Nt.stageWidth
                            }
                        })
                        , e.appLogo = e.stage.addChild(new ot.I(nt.Mo["loading/anycolor_logo"])), e.appLogo.anchorTo(at.Uq.Center, {
                            x: 0,
                            y: -200
                        }),
                        // , e.aniwayLogo = e.stage.addChild(new ot.I(nt.Mo["loading/Aniway_logo"])), e.aniwayLogo.sizeDelta = (0, ct.bA)(e.aniwayLogo.sizeDelta, e.aniwayLogo.sizeDelta, .25), e.aniwayLogo.anchorTo(at.Uq.BottomCenter, {
                        //     x: 0,
                        //     y: 150
                        // }), e.copyrightText = e.stage.addChild(new st.sm("Anycolor is property of Aniway Oy.", st.H.TopLeft, gt(gt({}, lt.h), {}, {
                        //     fill: "#000000",
                        //     fontSize: 32
                        // }))), e.copyrightText.anchorTo(at.Uq.BottomCenter, {
                        //     x: 0,
                        //     y: 100
                        // }), 
                        e.updateProgress(0), e
                    }
                    return e = c, r = [{
                        key: "loadAll",
                        value: (n = ht().mark((function t(e) {
                            var r, n, o = this;
                            return ht().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        this.loaderProgress.increaseAssetCount(e.length), r = dt(e);
                                        try {
                                            for (r.s(); !(n = r.n()).done;) n.value.then((function() {
                                                return o.loaderProgress.advanceProgress(1)
                                            }))
                                        } catch (t) {
                                            r.e(t)
                                        } finally {
                                            r.f()
                                        }
                                        return t.t0 = Promise, t.t1 = [], t.t2 = function(t) {
                                            if (Array.isArray(t)) return yt(t)
                                        }(i = e) || function(t) {
                                            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                                        }(i) || pt(i) || function() {
                                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                        }(), t.next = 8, this.loaderProgress.load([(0, nt.ZP)(Pt)]);
                                    case 8:
                                        return t.t3 = t.sent, t.t4 = [t.t3], t.t5 = t.t1.concat.call(t.t1, t.t2, t.t4), t.abrupt("return", t.t0.all.call(t.t0, t.t5));
                                    case 12:
                                    case "end":
                                        return t.stop()
                                }
                                var i
                            }), t, this)
                        })), o = function() {
                            var t = this,
                                e = arguments;
                            return new Promise((function(r, o) {
                                var i = n.apply(t, e);

                                function a(t) {
                                    vt(i, r, o, a, u, "next", t)
                                }

                                function u(t) {
                                    vt(i, r, o, a, u, "throw", t)
                                }
                                a(void 0)
                            }))
                        }, function(t) {
                            return o.apply(this, arguments)
                        })
                    }, {
                        key: "updateProgress",
                        value: function(t) {
                            this.background.fillAmount = t
                        }
                    }], r && wt(e.prototype, r), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), c
                }(et.W2),
                Et = (r(4129), r(8033)),
                Ct = r(3345),
                Lt = r(9602),
                Tt = r(7048);

            function _t(t) {
                return _t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, _t(t)
            }

            function At(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function Dt(t, e) {
                return Dt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, Dt(t, e)
            }

            function Rt(t, e) {
                if (e && ("object" === _t(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return Mt(t)
            }

            function Mt(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function It(t) {
                return It = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, It(t)
            }

            function zt(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function Ft(t, e) {
                return function(t, e) {
                    return e.get ? e.get.call(t) : e.value
                }(t, Gt(t, e, "get"))
            }

            function Gt(t, e, r) {
                if (!e.has(t)) throw new TypeError("attempted to " + r + " private field on non-instance");
                return e.get(t)
            }
            var Nt, Wt, Ht = 192,
                Bt = [16692455, 13018111, 12975353, 7255807, 16755627, 11401431, 16732714, 16742141, 11009971, 16777169],
                Ut = new WeakMap,
                Vt = function(t) {
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
                        }), e && Dt(t, e)
                    }(a, t);
                    var e, r, n, o, i = (n = a, o = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, e = It(n);
                        if (o) {
                            var r = It(this).constructor;
                            t = Reflect.construct(e, arguments, r)
                        } else t = e.apply(this, arguments);
                        return Rt(this, t)
                    });

                    function a() {
                        var t, e, r, n;
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, a), zt(Mt(t = i.call(this)), "wavePool", []), zt(Mt(t), "blobPool", []), zt(Mt(t), "simplexNoise", void 0), zt(Mt(t), "desaturateFilters", void 0), zt(Mt(t), "blobs", []), zt(Mt(t), "timeUpdate", void 0), e = Mt(t), n = {
                                writable: !0,
                                value: 0
                            },
                            function(t, e) {
                                if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
                            }(e, r = Ut), r.set(e, n), zt(Mt(t), "fillTween", void 0), zt(Mt(t), "sizeChangedConnection", void 0), t.simplexNoise = new Tt.ZP;
                        var o = new Ct.m;
                        return o.saturate(-1, !1), t.desaturateFilters = [o], t.timeUpdate = function() {
                            for (var e = Nt.stageHeight, r = Nt.stageWidth, n = e - Ft(Mt(t), Ut) * e, o = 0; o < t.wavePool.length; ++o) {
                                var i = t.wavePool[o];
                                i.visible && (i.tilePosition.x += 3 * t.simplexNoise.noise2D(p.u9.gameTimeMs / 2e4, o + 1), i.position.y = (0, Lt.uZ)(n - Ht, i.zIndex - Ht, e))
                            }
                            for (var a = 0; a < t.blobs.length; ++a) {
                                var u = t.blobs[a],
                                    c = Math.abs(300 * Math.sin(a + p.u9.gameTimeMs / 2e3));
                                u.position.y = (0, Lt.uZ)(n, u.zIndex, e) - c, c <= 25 && (u.position.x = Math.random() * r)
                            }
                        }, t.sortableChildren = !0, t.on("added", (function() {
                            p.u9.add(t.timeUpdate), t.sizeChangedConnection = Nt.sizeChanged.connect((function() {
                                return t.layoutUpdated()
                            })), t.layoutUpdated()
                        })), t.on("removed", (function() {
                            var e;
                            p.u9.remove(t.timeUpdate), null === (e = t.sizeChangedConnection) || void 0 === e || e.disconnect(), delete t.sizeChangedConnection
                        })), t
                    }
                    return e = a, (r = [{
                        key: "layoutUpdated",
                        value: function() {
                            for (var t = this, e = Nt.stageHeight, r = Nt.stageWidth, n = nt.Mo["loading/Loading_wave"], o = Math.ceil(e / Ht) + 1, i = function(e) {
                                    for (var o = 0; o < 3; ++o) {
                                        var i, a = null !== (i = t.blobPool[0]) && void 0 !== i ? i : t.addChild(new Et.j(nt.Mo["loading/blob"]));
                                        a.position.set(Math.random() * r, e * Ht), a.zIndex = a.position.y, a.tint = Bt[e % Bt.length], a.scale.set(Math.random() + .25), t.blobs.push(a)
                                    }
                                    var c = t.addChild(new u.o(n));
                                    return c.height = n.height, c.tilePosition.x = Math.random() * r, c
                                }, a = {
                                    x: 0,
                                    y: -192
                                }, c = 0; c < Math.max(o, this.wavePool.length); ++c) {
                                var s, l, f, h = Math.trunc((a.y + Ht) / Ht),
                                    d = null !== (f = (s = this.wavePool)[l = c]) && void 0 !== f ? f : s[l] = i(h);
                                c < o ? (d.position.copyFrom(a), d.width = r, d.zIndex = a.y + Ht, d.tint = Bt[h % Bt.length], d.visible = !0, a.y += Ht) : d.visible = !1
                            }
                        }
                    }, {
                        key: "desaturate",
                        value: function() {
                            this.filters = this.desaturateFilters
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            this.filters = null
                        }
                    }, {
                        key: "fillAmount",
                        get: function() {
                            return Ft(this, Ut)
                        },
                        set: function(t) {
                            var e = this;
                            this.fillTween && (0, G.Od)(this.fillTween), this.fillTween = new G.kX({
                                t: Ft(this, Ut)
                            }).to({
                                t: t
                            }, 100).onUpdate((function(t) {
                                ! function(t, e, r) {
                                    (function(t, e, r) {
                                        if (e.set) e.set.call(t, r);
                                        else {
                                            if (!e.writable) throw new TypeError("attempted to set read only private field");
                                            e.value = r
                                        }
                                    })(t, Gt(t, e, "set"), r)
                                }(e, Ut, t.t)
                            })).start()
                        }
                    }]) && At(e.prototype, r), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), a
                }(et.W2),
                Zt = r(4392),
                qt = r(4810),
                Yt = r(7484),
                Jt = r.n(Yt),
                Xt = r(1646),
                $t = r.n(Xt),
                Kt = r(4110),
                Qt = r.n(Kt),
                te = r(6806),
                ee = r.n(te);

            function re(t) {
                return re = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, re(t)
            }

            function ne(t) {
                return function(t) {
                    if (Array.isArray(t)) return ae(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || ie(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function oe() {
                oe = function() {
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
                    u = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function c(t, e, r, n) {
                    var o = e && e.prototype instanceof f ? e : f,
                        i = Object.create(o.prototype),
                        a = new S(n || []);
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

                function f() {}

                function h() {}

                function d() {}
                var p = {};
                u(p, o, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    v = y && y(y(j([])));
                v && v !== e && r.call(v, o) && (p = v);
                var m = d.prototype = f.prototype = Object.create(p);

                function g(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        u(t, e, (function(t) {
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
                            return f && "object" == re(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                n("next", t, a, u)
                            }), (function(t) {
                                n("throw", t, a, u)
                            })) : e.resolve(f).then((function(t) {
                                l.value = t, a(l)
                            }), (function(t) {
                                return n("throw", t, a, u)
                            }))
                        }
                        u(c.arg)
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

                function S(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(x, this), this.reset(!0)
                }

                function j(t) {
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
                return h.prototype = d, u(m, "constructor", d), u(d, "constructor", h), h.displayName = u(d, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, u(t, a, "GeneratorFunction")), t.prototype = Object.create(m), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, g(w.prototype), u(w.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = w, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new w(c(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, g(m), u(m, a, "Generator"), u(m, o, (function() {
                    return this
                })), u(m, "toString", (function() {
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
                }, t.values = j, S.prototype = {
                    constructor: S,
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
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, l) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), l
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), O(r), l
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
                            iterator: j(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), l
                    }
                }, t
            }

            function ie(t, e) {
                if (t) {
                    if ("string" == typeof t) return ae(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ae(t, e) : void 0
                }
            }

            function ae(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function ue(t, e, r, n, o, i, a) {
                try {
                    var u = t[i](a),
                        c = u.value
                } catch (t) {
                    return void r(t)
                }
                u.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function ce(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(e, r);

                        function a(t) {
                            ue(i, n, o, a, u, "next", t)
                        }

                        function u(t) {
                            ue(i, n, o, a, u, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function se(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function le() {
                return le = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, r) {
                    var n = fe(t, e);
                    if (n) {
                        var o = Object.getOwnPropertyDescriptor(n, e);
                        return o.get ? o.get.call(arguments.length < 3 ? t : r) : o.value
                    }
                }, le.apply(this, arguments)
            }

            function fe(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = ye(t)););
                return t
            }

            function he(t, e) {
                return he = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, he(t, e)
            }

            function de(t, e) {
                if (e && ("object" === re(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return pe(t)
            }

            function pe(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function ye(t) {
                return ye = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, ye(t)
            }

            function ve(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            Jt().extend($t()), Jt().extend(Qt());
            var me = function(t) {
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
                    }), e && he(t, e)
                }(d, t);
                var e, n, o, i, a, u, c, l, f, h = (l = d, f = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }(), function() {
                    var t, e = ye(l);
                    if (f) {
                        var r = ye(this).constructor;
                        t = Reflect.construct(e, arguments, r)
                    } else t = e.apply(this, arguments);
                    return de(this, t)
                });

                function d() {
                    var t;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, d), ve(pe(t = h.call(this)), "galleryView", void 0), ve(pe(t), "coloringView", void 0), ve(pe(t), "finalizeView", void 0), ve(pe(t), "finishedView", void 0), ve(pe(t), "background", void 0), ve(pe(t), "_currentView", void 0), ve(pe(t), "timings", {}), Nt = new F(tt.assetDesignWidth, tt.assetDesignHeight, {
                        backgroundColor: 16742141,
                        resolution: Math.min(devicePixelRatio, 2)
                    }, D.FillReorient), t.subSystems.push(new K), Nt.appendToDom(), Wt = new qt.lp, t
                }
                return e = d, n = [{
                    key: "initGame",
                    value: (c = ce(oe().mark((function t() {
                        var e, n, o, i, a, u, c, s;
                        return oe().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, Nt.init();
                                case 2:
                                    return this.background = Nt.stage.addChild(new Vt), t.next = 5, le(ye(d.prototype), "initGame", this).call(this);
                                case 5:
                                    return Q.ZP.init([{
                                        type: Q.Us.VideoAd,
                                        count: 12,
                                        preload: 2
                                    }]), e = new kt(this.background), this.currentView = [e], t.next = 10, e.loadAll([Promise.all([r.e(688), r.e(730), r.e(676), r.e(68)]).then(r.bind(r, 7068)), Promise.all([r.e(730), r.e(977)]).then(r.bind(r, 2977)), Promise.all([r.e(688), r.e(730), r.e(676), r.e(692)]).then(r.bind(r, 1692)), Promise.all([r.e(688), r.e(676), r.e(885)]).then(r.bind(r, 2885)), r.e(696).then(r.bind(r, 9696))]);
                                case 10:
                                    n = t.sent, f = 5, o = function(t) {
                                        if (Array.isArray(t)) return t
                                    }(l = n) || function(t, e) {
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
                                    }(l, f) || ie(l, f) || function() {
                                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }(), i = o[0], a = o[1], u = o[2], c = o[3], s = o[4], this.startApp(new i.Gallery, new a.Coloring2D(this.background), new u.ColoringUI, new c.Finalize, new s.Finished), e.destroy();
                                case 19:
                                case "end":
                                    return t.stop()
                            }
                            var l, f
                        }), t, this)
                    }))), function() {
                        return c.apply(this, arguments)
                    })
                }, {
                    key: "startApp",
                    value: function(t, e, r, n, o) {
                        var i = this;
                        t.drawingSelected.connect((function(t, e) {
                            var r;
                            te.GameAnalytics.addProgressionEvent(ee().EGAProgressionStatus.Start, null !== (r = null == t ? void 0 : t.id) && void 0 !== r ? r : null === Zt.gS || void 0 === Zt.gS ? void 0 : Zt.gS.drawingData.id), i.showColoring(t, e)
                        })), r.returnToGallery.connect((function() {
                            te.GameAnalytics.addProgressionEvent(ee().EGAProgressionStatus.Fail, null === Zt.gS || void 0 === Zt.gS ? void 0 : Zt.gS.drawingData.id), te.GameAnalytics.addDesignEvent("Timing:Coloring:".concat(null === Zt.gS || void 0 === Zt.gS ? void 0 : Zt.gS.drawingData.id), Math.trunc(p.u9.gameTimeMs - i.timings.coloring), {
                                reason: "return"
                            }), i.showGallery(!1)
                        })), r.finalizeDrawing.connect((function() {
                            te.GameAnalytics.addDesignEvent("Timing:Coloring:".concat(null === Zt.gS || void 0 === Zt.gS ? void 0 : Zt.gS.drawingData.id), Math.trunc(p.u9.gameTimeMs - i.timings.coloring), {
                                reason: "next"
                            }), i.showFinalize()
                        })), n.returnToDrawing.connect((function() {
                            te.GameAnalytics.addDesignEvent("Timing:Finalize:".concat(null === Zt.gS || void 0 === Zt.gS ? void 0 : Zt.gS.drawingData.id), Math.trunc(p.u9.gameTimeMs - i.timings.finalize), {
                                reason: "return"
                            }), i.showColoring()
                        })), n.finishedWorkOfArt.connect((function() {
                            te.GameAnalytics.addDesignEvent("Timing:Finalize:".concat(null === Zt.gS || void 0 === Zt.gS ? void 0 : Zt.gS.drawingData.id), Math.trunc(p.u9.gameTimeMs - i.timings.finalize), {
                                reason: "next"
                            }), i.showFinished()
                        })), o.returnToFinalize.connect((function() {
                            te.GameAnalytics.addDesignEvent("Timing:Finished:".concat(null === Zt.gS || void 0 === Zt.gS ? void 0 : Zt.gS.drawingData.id), Math.trunc(p.u9.gameTimeMs - i.timings.finished), {
                                reason: "return"
                            }), i.showFinalize()
                        })), o.returnToGallery.connect((function() {
                            if (Zt.gS) {
                                var t, e;
                                te.GameAnalytics.addProgressionEvent(ee().EGAProgressionStatus.Complete, Zt.gS.drawingData.id), te.GameAnalytics.addDesignEvent("Timing:Finished:".concat(Zt.gS.drawingData.id), Math.trunc(p.u9.gameTimeMs - i.timings.finished), {
                                    reason: "next"
                                });
                                var r = {
                                    palettes: Zt.gS.commandProcessor.collectStatistics(),
                                    outlineColor: Zt.gS.postprocess.outlineColor,
                                    effect: null !== (t = null === (e = Zt.gS.postprocess.effect) || void 0 === e ? void 0 : e.name) && void 0 !== t ? t : "none"
                                };
                                te.GameAnalytics.addDesignEvent("Drawing:Saved:".concat(Zt.gS.drawingData.id), void 0, {
                                    palettes: r.palettes.join(),
                                    outlineColor: r.outlineColor.toFixed(0),
                                    effect: r.effect
                                }), te.GameAnalytics.addDesignEvent("Stats:Drawing:".concat(Zt.gS.drawingData.id), 1);
                                var n, o = function(t, e) {
                                    var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                                    if (!r) {
                                        if (Array.isArray(t) || (r = ie(t))) {
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
                                        u = !1;
                                    return {
                                        s: function() {
                                            r = r.call(t)
                                        },
                                        n: function() {
                                            var t = r.next();
                                            return a = t.done, t
                                        },
                                        e: function(t) {
                                            u = !0, i = t
                                        },
                                        f: function() {
                                            try {
                                                a || null == r.return || r.return()
                                            } finally {
                                                if (u) throw i
                                            }
                                        }
                                    }
                                }(r.palettes);
                                try {
                                    for (o.s(); !(n = o.n()).done;) {
                                        var a, u = n.value;
                                        te.GameAnalytics.addDesignEvent("Stats:Palette:".concat(null === (a = tt.palettes.get(u)) || void 0 === a ? void 0 : a.name), 1)
                                    }
                                } catch (t) {
                                    o.e(t)
                                } finally {
                                    o.f()
                                }
                                te.GameAnalytics.addDesignEvent("Stats:Outline:".concat(r.outlineColor), 1), te.GameAnalytics.addDesignEvent("Stats:Effect:".concat(r.effect), 1)
                            }
                            i.showGallery(!0)
                        })), this.galleryView = [t], this.coloringView = [e, r], this.finalizeView = [n], this.finishedView = [o], this.showGallery(!0)
                    }
                }, {
                    key: "showGallery",
                    value: (u = ce(oe().mark((function t(e) {
                        return oe().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    s.Z.gameplayStop(), e && Q.ZP.consumeInterstitialAd().then((function(t) {
                                        var e = t.successful,
                                            r = t.mediator;
                                        e ? te.GameAnalytics.addAdEvent(ee().EGAAdAction.Show, ee().EGAAdType.Interstitial, r, "Show gallery") : te.GameAnalytics.addAdEvent(ee().EGAAdAction.FailedShow, ee().EGAAdType.Interstitial, r, "Show gallery")
                                    })), (0, Zt.Dq)(), this.currentView = this.galleryView;
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function(t) {
                        return u.apply(this, arguments)
                    })
                }, {
                    key: "showColoring",
                    value: (a = ce(oe().mark((function t(e, r) {
                        var n, o;
                        return oe().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (n = !1, Q.ZP.consumeInterstitialAd().then((function(t) {
                                            var r, o, i = t.successful,
                                                a = t.mediator;
                                            i ? te.GameAnalytics.addAdEvent(ee().EGAAdAction.Show, ee().EGAAdType.Interstitial, a, "Coloring started", {
                                                level_name: null !== (r = null == e ? void 0 : e.id) && void 0 !== r ? r : null === Zt.gS || void 0 === Zt.gS ? void 0 : Zt.gS.drawingData.id
                                            }) : te.GameAnalytics.addAdEvent(ee().EGAAdAction.FailedShow, ee().EGAAdType.Interstitial, a, "Coloring started", {
                                                level_name: null !== (o = null == e ? void 0 : e.id) && void 0 !== o ? o : null === Zt.gS || void 0 === Zt.gS ? void 0 : Zt.gS.drawingData.id
                                            }), n || (n = !0, s.Z.gameplayStart())
                                        })), this.timings.coloring = p.u9.gameTimeMs, void 0 === this.coloringView) {
                                        t.next = 10;
                                        break
                                    }
                                    return this.currentView = this.coloringView, this.coloringView[1].interactiveChildren = !1, t.next = 8, null === (o = this.coloringView) || void 0 === o ? void 0 : o[0].loadImage(e, r);
                                case 8:
                                    this.coloringView[1].interactiveChildren = !0, n || (n = !0, s.Z.gameplayStart());
                                case 10:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function(t, e) {
                        return a.apply(this, arguments)
                    })
                }, {
                    key: "showFinalize",
                    value: (i = ce(oe().mark((function t() {
                        return oe().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (this.timings.finalize = p.u9.gameTimeMs, void 0 === this.finalizeView) {
                                        t.next = 7;
                                        break
                                    }
                                    return this.currentView = this.finalizeView, this.finalizeView[0].interactiveChildren = !1, t.next = 6, this.finalizeView[0].loadImage();
                                case 6:
                                    this.finalizeView[0].interactiveChildren = !0;
                                case 7:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function() {
                        return i.apply(this, arguments)
                    })
                }, {
                    key: "showFinished",
                    value: (o = ce(oe().mark((function t() {
                        return oe().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (this.timings.finished = p.u9.gameTimeMs, void 0 === this.finishedView) {
                                        t.next = 7;
                                        break
                                    }
                                    return this.currentView = this.finishedView, this.finishedView[0].interactiveChildren = !1, t.next = 6, this.finishedView[0].loadImage();
                                case 6:
                                    this.finishedView[0].interactiveChildren = !0;
                                case 7:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function() {
                        return o.apply(this, arguments)
                    })
                }, {
                    key: "currentView",
                    get: function() {
                        return this._currentView
                    },
                    set: function(t) {
                        var e, r;
                        void 0 !== this._currentView && (e = Nt.stage).removeChild.apply(e, ne(this._currentView)), this._currentView = t, void 0 !== t && (r = Nt.stage).addChild.apply(r, ne(t))
                    }
                }], n && se(e.prototype, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), d
            }(l.lA)
        },
        4392: function(t, e, r) {
            r.d(e, {
                D7: function() {
                    return s
                },
                Dq: function() {
                    return f
                },
                cA: function() {
                    return u
                },
                gS: function() {
                    return a
                },
                kh: function() {
                    return l
                },
                s_: function() {
                    return c
                }
            }), r(7042), r(1539), r(1038), r(8783), r(4916), r(7601), r(2526), r(1817), r(2165), r(6992), r(3948), r(1703);
            var n = r(7609),
                o = r(8381);

            function i(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }
            var a, u = new n.X(o.qK.Fill),
                c = new n.X(0),
                s = new n.X(0);

            function l(t) {
                void 0 !== a && f(), a = t
            }

            function f() {
                if (void 0 !== a) {
                    var t = a,
                        e = t.temporaryTextures,
                        r = t.commandProcessor,
                        n = t.drawing,
                        o = t.overlay;
                    r.destroy();
                    var u, c = function(t, e) {
                        var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (!r) {
                            if (Array.isArray(t) || (r = function(t, e) {
                                    if (t) {
                                        if ("string" == typeof t) return i(t, e);
                                        var r = Object.prototype.toString.call(t).slice(8, -1);
                                        return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? i(t, e) : void 0
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
                        var a, u = !0,
                            c = !1;
                        return {
                            s: function() {
                                r = r.call(t)
                            },
                            n: function() {
                                var t = r.next();
                                return u = t.done, t
                            },
                            e: function(t) {
                                c = !0, a = t
                            },
                            f: function() {
                                try {
                                    u || null == r.return || r.return()
                                } finally {
                                    if (c) throw a
                                }
                            }
                        }
                    }(e);
                    try {
                        for (c.s(); !(u = c.n()).done;) u.value.destroy(!0)
                    } catch (t) {
                        c.e(t)
                    } finally {
                        c.f()
                    }
                    n.destroy(!0), o.destroy(!0), a = void 0
                }
            }
        },
        3405: function(t, e, r) {
            var n = r(3345),
                o = r(4644),
                i = r(1386),
                a = r(5237),
                u = r(3134),
                c = r(7553),
                s = r(7023),
                l = r(3943),
                f = r(846),
                h = new n.m;
            h.sepia(!0);
            var d = new n.m;
            d.browni(!0);
            var p = new n.m;
            p.kodachrome(!0);
            var y = new n.m;
            y.lsd(!0);
            var v = new n.m;
            v.polaroid(!0);
            var m = new n.m;
            m.technicolor(!0);
            var g = new n.m;
            g.vintage(!0);
            var w = new o.x(10),
                b = new i.N({
                    threshold: .85
                }),
                x = new a.V,
                O = new u.X({
                    vignetting: .25
                }),
                S = new c.M,
                j = new s.w,
                P = new l.G(8),
                k = new n.m;
            k.negative(!0);
            var E = {
                None: {
                    filters: []
                },
                Sepia: {
                    filters: [h],
                    pay: !0
                },
                Chocolate: {
                    filters: [d]
                },
                Kodachrome: {
                    filters: [p],
                    pay: !0
                },
                Psychedelic: {
                    filters: [y]
                },
                Polaroid: {
                    filters: [v],
                    pay: !0
                },
                Technicolor: {
                    filters: [m],
                    pay: !0
                },
                Vintage: {
                    filters: [g]
                },
                Ascii: {
                    filters: [w]
                },
                Bloom: {
                    filters: [b],
                    pay: !0
                },
                Dots: {
                    filters: [x]
                },
                Crt: {
                    filters: [O]
                },
                Glitch: {
                    filters: [S]
                },
                Film: {
                    filters: [j],
                    pay: !0
                },
                Pixel: {
                    filters: [P]
                },
                Negative: {
                    filters: [k],
                    pay: !0
                },
                Noise: {
                    filters: [new f.L],
                    pay: !0
                }
            };
            e.Z = E
        },
        286: function(t, e, r) {
            var n;

            function o(t) {
                return 1 === t.$ver
            }
            r.d(e, {
                    $: function() {
                        return o
                    },
                    g: function() {
                        return n
                    }
                }),
                function(t) {
                    t[t.Aniway = 0] = "Aniway", t[t.ReColor = 1] = "ReColor"
                }(n || (n = {}))
        },
        8381: function(t, e, r) {
            r.d(e, {
                CU: function() {
                    return v
                },
                Dy: function() {
                    return d
                },
                Kr: function() {
                    return b
                },
                R2: function() {
                    return O
                },
                T: function() {
                    return w
                },
                UI: function() {
                    return x
                },
                WP: function() {
                    return S
                },
                Wx: function() {
                    return h
                },
                b$: function() {
                    return g
                },
                eP: function() {
                    return m
                },
                kp: function() {
                    return y
                },
                qK: function() {
                    return o
                },
                u0: function() {
                    return p
                },
                wI: function() {
                    return n
                }
            }), r(561), r(6992), r(1532), r(1539), r(8783), r(3948), r(189), r(1038), r(9070), r(1703), r(2526), r(1817), r(2165), r(7042), r(4916), r(7601);
            var n, o, i = r(7823);

            function a(t, e) {
                var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!r) {
                    if (Array.isArray(t) || (r = c(t)) || e && t && "number" == typeof t.length) {
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
                    u = !1;
                return {
                    s: function() {
                        r = r.call(t)
                    },
                    n: function() {
                        var t = r.next();
                        return a = t.done, t
                    },
                    e: function(t) {
                        u = !0, i = t
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

            function u(t) {
                return function(t) {
                    if (Array.isArray(t)) return s(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || c(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function c(t, e) {
                if (t) {
                    if ("string" == typeof t) return s(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? s(t, e) : void 0
                }
            }

            function s(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function l(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function f(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function h(t) {
                "paletteIndex" in t.color && (t.color.paletteId = t.color.paletteIndex, delete t.color.paletteIndex)
            }

            function d(t) {
                return t.commandType === n.PointerDown || t.commandType === n.PointerMove || t.commandType === n.PointerUp || t.commandType === n.Clear
            }

            function p(t) {
                return t.commandType === n.PointerDown
            }

            function y(t) {
                return t.commandType === n.PointerMove
            }

            function v(t) {
                return t.commandType === n.PointerUp
            }

            function m(t) {
                return t.commandType === n.ChangePalette
            }

            function g(t) {
                return t.commandType === n.ChangeColor
            }

            function w(t) {
                return t.commandType === n.ChangeTool
            }

            function b(t) {
                return t.commandType === n.Undo
            }

            function x(t) {
                return t.commandType === n.Redo
            }

            function O(t) {
                return t.commandType === n.Clear
            }! function(t) {
                t[t.PointerDown = 1] = "PointerDown", t[t.PointerMove = 2] = "PointerMove", t[t.PointerUp = 3] = "PointerUp", t[t.ChangePalette = 10] = "ChangePalette", t[t.ChangeColor = 11] = "ChangeColor", t[t.ChangeTool = 12] = "ChangeTool", t[t.Clear = 100] = "Clear", t[t.Undo = 101] = "Undo", t[t.Redo = 102] = "Redo"
            }(n || (n = {})),
            function(t) {
                t[t.Brush = 1] = "Brush", t[t.Fill = 2] = "Fill", t[t.Gradient = 3] = "Gradient"
            }(o || (o = {}));
            var S = function() {
                function t() {
                    var e = this;
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), f(this, "processedDrawCommandCount", 0), f(this, "nextDrawCommandIndex", 0), f(this, "drawCommands", []), f(this, "processedCommandCount", 0), f(this, "allCommands", []), f(this, "tickProcess", (function() {
                        return e.processCommands(!1, !1)
                    })), i.u9.add(this.tickProcess)
                }
                var e, r;
                return e = t, r = [{
                    key: "processHistory",
                    value: function(t) {
                        var e, r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        r && (this.allCommands.length = 0), (e = this.allCommands).push.apply(e, u(t)), this.processCommands(!0, r), r && this.reprocessDrawCommands()
                    }
                }, {
                    key: "processCommands",
                    value: function(t, e) {
                        for (; this.processedCommandCount < this.allCommands.length;) {
                            var r = this.allCommands[this.processedCommandCount++];
                            d(r) && (this.nextDrawCommandIndex < this.drawCommands.length && (this.drawCommands.splice(this.nextDrawCommandIndex), this.nextDrawCommandIndex = this.drawCommands.length, this.processedDrawCommandCount = this.drawCommands.length), this.drawCommands.push(r), ++this.nextDrawCommandIndex, ++this.processedDrawCommandCount), b(r) ? this.undo() : x(r) ? this.redo() : O(r) && this.clear(), e || this.executeCommand(r, t)
                        }
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        i.u9.remove(this.tickProcess)
                    }
                }, {
                    key: "addCommand",
                    value: function(t, e, r) {
                        var n = {
                            commandType: t,
                            sequenceId: e,
                            data: r,
                            timeStamp: performance.now()
                        };
                        this.allCommands.push(n)
                    }
                }, {
                    key: "cancelCommandSequence",
                    value: function(t) {
                        for (var e = this.allCommands.length - 1; e >= 0; --e) {
                            var r = this.allCommands[e];
                            if (r.sequenceId === t && (this.allCommands.splice(e, 1), p(r))) break
                        }
                        this.processedCommandCount = 0, this.clearDrawCommands(), this.processCommands(!0, !0), this.reprocessDrawCommands()
                    }
                }, {
                    key: "clearDrawCommands",
                    value: function() {
                        this.drawCommands.length = 0, this.nextDrawCommandIndex = 0, this.processedDrawCommandCount = 0
                    }
                }, {
                    key: "getLastProcessedSequenceStart",
                    value: function() {
                        for (var t, e = this.processedDrawCommandCount - 1; e >= 0; --e) {
                            var r = this.drawCommands[e];
                            if (void 0 === t && v(r)) t = r.sequenceId;
                            else if (r.commandType === n.PointerDown && t === r.sequenceId) return e
                        }
                        return 0
                    }
                }, {
                    key: "getNextUnprocessedSequenceEnd",
                    value: function() {
                        for (var t, e = this.processedDrawCommandCount; e < this.drawCommands.length; ++e) {
                            var r = this.drawCommands[e];
                            if (void 0 === t && p(r)) t = r.sequenceId;
                            else if (r.commandType === n.PointerUp && t === r.sequenceId) return e + 1
                        }
                        return this.nextDrawCommandIndex
                    }
                }, {
                    key: "reprocessDrawCommands",
                    value: function(t) {
                        var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            r = new Map;
                        this.processedDrawCommandCount = 0;
                        for (var n = void 0 !== t ? this.drawCommands.length : this.nextDrawCommandIndex; this.processedDrawCommandCount < n;) {
                            var o, i = this.drawCommands[this.processedDrawCommandCount++];
                            void 0 !== t && i.sequenceId !== t || (O(i) ? this.executeCommand(i, e) : r.has(i.data.area) ? null === (o = r.get(i.data.area)) || void 0 === o || o.push(i) : r.set(i.data.area, [i]))
                        }
                        this.fastDrawCommands(r)
                    }
                }, {
                    key: "undo",
                    value: function() {
                        var t = this.drawCommands[this.processedDrawCommandCount - 1];
                        if (void 0 !== t)
                            if (O(t)) --this.nextDrawCommandIndex, --this.processedDrawCommandCount;
                            else {
                                var e = this.getLastProcessedSequenceStart();
                                this.nextDrawCommandIndex = e, this.processedDrawCommandCount = e
                            }
                    }
                }, {
                    key: "redo",
                    value: function() {
                        var t = this.getNextUnprocessedSequenceEnd();
                        this.nextDrawCommandIndex = t, this.processedDrawCommandCount = t
                    }
                }, {
                    key: "clear",
                    value: function() {
                        this.nextDrawCommandIndex = 0, this.processedDrawCommandCount = 0
                    }
                }, {
                    key: "collectStatistics",
                    value: function() {
                        var t, e = new Map,
                            r = a(this.drawCommands);
                        try {
                            for (r.s(); !(t = r.n()).done;) {
                                var n = t.value;
                                if (v(n)) {
                                    var i, c = null !== (i = e.get(n.data.area)) && void 0 !== i ? i : new Set;
                                    e.has(n.data.area) || e.set(n.data.area, c), n.data.tool === o.Brush ? c.add(n.data.color.paletteId) : n.data.tool === o.Fill && (c.clear(), c.add(n.data.color.paletteId))
                                } else O(n) && e.clear()
                            }
                        } catch (t) {
                            r.e(t)
                        } finally {
                            r.f()
                        }
                        var s, l = [],
                            f = a(e.values());
                        try {
                            for (f.s(); !(s = f.n()).done;) {
                                var h = s.value;
                                l.push.apply(l, u(Array.from(h)))
                            }
                        } catch (t) {
                            f.e(t)
                        } finally {
                            f.f()
                        }
                        return l
                    }
                }], r && l(e.prototype, r), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t
            }()
        },
        799: function(t, e, r) {
            r.d(e, {
                T: function() {
                    return o
                },
                h: function() {
                    return n
                }
            });
            var n = {
                    fontFamily: "Poppins",
                    lineJoin: "round"
                },
                o = {
                    selectedColor: "#ffffffff",
                    unselectedColor: "#202020A0"
                }
        },
        4810: function(t, e, r) {
            r.d(e, {
                lp: function() {
                    return N
                },
                Wk: function() {
                    return B
                },
                nm: function() {
                    return W
                }
            }), r(1539), r(8674), r(3689), r(1703), r(9070), r(6992), r(8783), r(3948), r(285), r(1637), r(2526), r(1817), r(2165), r(2443), r(9341), r(3706), r(2703), r(489), r(4747), r(8304), r(7042), r(1038), r(4916), r(7601), r(7941), r(7327), r(5003), r(9337), r(3321);
            var n = r(7484),
                o = r.n(n),
                i = r(8844),
                a = r(1585),
                u = r(1014),
                c = r(8033),
                s = r(6710),
                l = r(8942),
                f = r(9658),
                h = r(9602),
                d = r(7715),
                p = r(286),
                y = r(8381);

            function v(t) {
                return v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, v(t)
            }

            function m(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function g(t, e) {
                return g = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, g(t, e)
            }

            function w(t, e) {
                if (e && ("object" === v(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return b(t)
            }

            function b(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function x(t) {
                return x = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, x(t)
            }

            function O(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            r(1299), r(2419);
            var S = function(t) {
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
                        }), e && g(t, e)
                    }(a, t);
                    var e, r, n, o, i = (n = a, o = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, e = x(n);
                        if (o) {
                            var r = x(this).constructor;
                            t = Reflect.construct(e, arguments, r)
                        } else t = e.apply(this, arguments);
                        return w(this, t)
                    });

                    function a(t) {
                        var e;
                        return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, a), O(b(e = i.call(this, "attribute vec2 aVertexPosition;\r\nattribute vec2 aTextureCoord;\r\n\r\nuniform mat3 projectionMatrix;\r\nuniform mat3 otherMatrix;\r\n\r\nvarying vec2 vMaskCoord;\r\nvarying vec2 vTextureCoord;\r\n\r\nvoid main(void)\r\n{\r\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\r\n\r\n    vTextureCoord = aTextureCoord;\r\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\r\n}", "varying vec2 vMaskCoord;\r\nvarying vec2 vTextureCoord;\r\n\r\nuniform sampler2D uSampler;\r\nuniform sampler2D mask;\r\nuniform float npmAlpha;\r\nuniform vec4 maskClamp;\r\n\r\nvoid main(void)\r\n{\r\n    float clip = step(3.5,\r\n        step(maskClamp.x, vMaskCoord.x) +\r\n        step(maskClamp.y, vMaskCoord.y) +\r\n        step(vMaskCoord.x, maskClamp.z) +\r\n        step(vMaskCoord.y, maskClamp.w));\r\n\r\n    vec4 original = texture2D(uSampler, vTextureCoord);\r\n    vec4 masky = texture2D(mask, vMaskCoord);\r\n    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);\r\n\r\n    original *= (alphaMul * (1.0 - masky.r) * clip);\r\n\r\n    gl_FragColor = original;\r\n}", void 0)), "_maskSprite", void 0), O(b(e), "maskMatrix", void 0), e.maskSprite = t, e.maskMatrix = new f.y3, e
                    }
                    return e = a, (r = [{
                        key: "maskSprite",
                        get: function() {
                            return this._maskSprite
                        },
                        set: function(t) {
                            this._maskSprite && (this._maskSprite.renderable = !0), this._maskSprite = t, this._maskSprite && (this._maskSprite.renderable = !1)
                        }
                    }, {
                        key: "apply",
                        value: function(t, e, r, n) {
                            var o = this._maskSprite,
                                i = o._texture;
                            i.valid && (i.uvMatrix || (i.uvMatrix = new s.UX(i, 0)), i.uvMatrix.update(), this.uniforms.npmAlpha = i.baseTexture.alphaMode ? 0 : 1, this.uniforms.mask = i, this.uniforms.otherMatrix = t.calculateSpriteMatrix(this.maskMatrix, o).prepend(i.uvMatrix.mapCoord), this.uniforms.maskClamp = i.uvMatrix.uClampFrame, t.applyFilter(this, e, r, n))
                        }
                    }]) && m(e.prototype, r), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), a
                }(s.wn),
                j = r(3405),
                P = r(7117);

            function k(t) {
                return k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, k(t)
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
                        R(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : E(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function L(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function T() {
                T = function() {
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
                    u = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function c(t, e, r, n) {
                    var o = e && e.prototype instanceof f ? e : f,
                        i = Object.create(o.prototype),
                        a = new S(n || []);
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

                function f() {}

                function h() {}

                function d() {}
                var p = {};
                u(p, o, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    v = y && y(y(j([])));
                v && v !== e && r.call(v, o) && (p = v);
                var m = d.prototype = f.prototype = Object.create(p);

                function g(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        u(t, e, (function(t) {
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
                            return f && "object" == k(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                n("next", t, a, u)
                            }), (function(t) {
                                n("throw", t, a, u)
                            })) : e.resolve(f).then((function(t) {
                                l.value = t, a(l)
                            }), (function(t) {
                                return n("throw", t, a, u)
                            }))
                        }
                        u(c.arg)
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

                function S(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(x, this), this.reset(!0)
                }

                function j(t) {
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
                return h.prototype = d, u(m, "constructor", d), u(d, "constructor", h), h.displayName = u(d, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, u(t, a, "GeneratorFunction")), t.prototype = Object.create(m), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, g(w.prototype), u(w.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = w, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new w(c(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, g(m), u(m, a, "Generator"), u(m, o, (function() {
                    return this
                })), u(m, "toString", (function() {
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
                }, t.values = j, S.prototype = {
                    constructor: S,
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
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, l) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), l
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), O(r), l
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
                            iterator: j(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), l
                    }
                }, t
            }

            function _(t, e, r, n, o, i, a) {
                try {
                    var u = t[i](a),
                        c = u.value
                } catch (t) {
                    return void r(t)
                }
                u.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function A(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(e, r);

                        function a(t) {
                            _(i, n, o, a, u, "next", t)
                        }

                        function u(t) {
                            _(i, n, o, a, u, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function D(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function R(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            var M = "worksofart_".concat("colorapp"),
                I = "thumbnails",
                z = "history",
                F = "postprocess",
                G = new f.y3(1, 0, 0, 1, 0, 0),
                N = function() {
                    function t() {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), R(this, "db", void 0), R(this, "overlayFilters", [new S]), R(this, "persistentStoragePermissionStatus", void 0), this.askForPermissionAndPersist(), this.db = this.openDatabase()
                    }
                    var e, r, n, f, h, p, v, m, g, w, b, x;
                    return e = t, r = [{
                        key: "openDatabase",
                        value: (x = A(T().mark((function t() {
                            var e = this;
                            return T().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", new Promise((function(t, r) {
                                            var n = indexedDB.open(M, 3);
                                            n.onupgradeneeded = function(t) {
                                                return e.onUpgradeNeeded(t)
                                            }, n.onsuccess = function(r) {
                                                var n = r.target.result;
                                                n.onclose = function() {
                                                    e.db = e.openDatabase()
                                                }, t(n)
                                            }, n.onblocked = function(t) {}, n.onerror = function(t) {
                                                r(t.target.error)
                                            }
                                        })));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        }))), function() {
                            return x.apply(this, arguments)
                        })
                    }, {
                        key: "onUpgradeNeeded",
                        value: function(t) {
                            var e = t.oldVersion,
                                r = t.target,
                                n = r.result;
                            if (e < 1 && (n.createObjectStore(I), n.createObjectStore(z)), e < 2 && n.createObjectStore(F), e < 3) {
                                var o, i = (null !== (o = r.transaction) && void 0 !== o ? o : n.transaction([z], "readwrite")).objectStore(z).openCursor();
                                i.onsuccess = function() {
                                    var t = i.result;
                                    if (t) {
                                        var e, r = t.value,
                                            n = function(t, e) {
                                                var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                                                if (!r) {
                                                    if (Array.isArray(t) || (r = function(t, e) {
                                                            if (t) {
                                                                if ("string" == typeof t) return L(t, e);
                                                                var r = Object.prototype.toString.call(t).slice(8, -1);
                                                                return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? L(t, e) : void 0
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
                                                    u = !1;
                                                return {
                                                    s: function() {
                                                        r = r.call(t)
                                                    },
                                                    n: function() {
                                                        var t = r.next();
                                                        return a = t.done, t
                                                    },
                                                    e: function(t) {
                                                        u = !0, i = t
                                                    },
                                                    f: function() {
                                                        try {
                                                            a || null == r.return || r.return()
                                                        } finally {
                                                            if (u) throw i
                                                        }
                                                    }
                                                }
                                            }(r);
                                        try {
                                            for (n.s(); !(e = n.n()).done;) {
                                                var o = e.value;
                                                (0, y.Dy)(o) && void 0 !== o.data && (0, y.Wx)(o.data)
                                            }
                                        } catch (t) {
                                            n.e(t)
                                        } finally {
                                            n.f()
                                        }
                                        t.update(r), t.continue()
                                    }
                                }
                            }
                        }
                    }, {
                        key: "askForPermissionAndPersist",
                        value: (b = A(T().mark((function t() {
                            var e = this;
                            return T().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!("permissions" in navigator)) {
                                            t.next = 11;
                                            break
                                        }
                                        return t.prev = 1, t.next = 4, navigator.permissions.query({
                                            name: "persistent-storage"
                                        });
                                    case 4:
                                        this.persistentStoragePermissionStatus = t.sent, this.persistentStoragePermissionStatus.addEventListener("change", (function() {
                                            return e.checkPermissionsAndPersist()
                                        })), t.next = 11;
                                        break;
                                    case 8:
                                        t.prev = 8, t.t0 = t.catch(1), delete this.persistentStoragePermissionStatus;
                                    case 11:
                                        return t.next = 13, this.checkPermissionsAndPersist();
                                    case 13:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [1, 8]
                            ])
                        }))), function() {
                            return b.apply(this, arguments)
                        })
                    }, {
                        key: "checkPermissionsAndPersist",
                        value: (w = A(T().mark((function t() {
                            var e, r;
                            return T().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (e = !this.persistentStoragePermissionStatus || "denied" !== this.persistentStoragePermissionStatus.state, !("storage" in navigator)) {
                                            t.next = 6;
                                            break
                                        }
                                        return t.next = 4, navigator.storage.persisted();
                                    case 4:
                                        r = t.sent, e && !r && navigator.storage.persist();
                                    case 6:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function() {
                            return w.apply(this, arguments)
                        })
                    }, {
                        key: "composeWorkOfArt",
                        value: function(t, e) {
                            var r, n, o = d.pixi.renderer,
                                i = t.drawing,
                                l = t.postprocess,
                                f = new a.W2,
                                h = f.addChild(new u.TC);
                            h.beginFill(16777215, 1), h.drawRect(0, 0, i.width, i.height), f.addChild(new c.j(i));
                            var p, y = this.colorOverlay(t);
                            if (f.addChild(new c.j(y)), l.effect && (f.filters = null !== (r = j.Z[null === (n = l.effect) || void 0 === n ? void 0 : n.name].filters) && void 0 !== r ? r : null), e instanceof s.TI) G.a = e.width / i.width, G.d = e.height / i.height, p = e;
                            else {
                                var v, m, g = Math.trunc(null !== (v = null == e ? void 0 : e.x) && void 0 !== v ? v : i.width),
                                    w = Math.trunc(null !== (m = null == e ? void 0 : e.y) && void 0 !== m ? m : i.height);
                                G.a = g / i.width, G.d = w / i.height, p = s.TI.create({
                                    width: g,
                                    height: w
                                })
                            }
                            return o.render(f, {
                                renderTexture: p,
                                clear: !0,
                                transform: G,
                                skipUpdateTransform: !0
                            }), y.destroy(!0), f.destroy({
                                children: !0
                            }), p
                        }
                    }, {
                        key: "colorOverlay",
                        value: function(t) {
                            var e = t.overlay,
                                r = P.outlines.get(t.postprocess.outlineColor);
                            if (void 0 === r) throw new Error("Unknown outline color ".concat(t.postprocess.outlineColor));
                            var n = new u.TC;
                            n.beginFill((0, l.qm)(r.color), 1), n.drawRect(0, 0, e.width, e.height);
                            var o = n.addChild(new c.j(e));
                            this.overlayFilters[0].maskSprite = o, n.filters = this.overlayFilters;
                            var i = d.pixi.renderer.generateTexture(n);
                            return o.destroy(), n.destroy(), i
                        }
                    }, {
                        key: "renderToBlob",
                        value: (g = A(T().mark((function t(e) {
                            return T().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", new Promise((function(t, r) {
                                            d.pixi.renderer.plugins.extract.canvas(e).toBlob(function() {
                                                var e = A(T().mark((function e(n) {
                                                    return T().wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                null === n ? r(new Error("No blob.")) : t(n);
                                                            case 1:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function(t) {
                                                    return e.apply(this, arguments)
                                                }
                                            }())
                                        })));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        }))), function(t) {
                            return g.apply(this, arguments)
                        })
                    }, {
                        key: "getShare",
                        value: (m = A(T().mark((function t(e) {
                            var r, n;
                            return T().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, this.renderToBlob(e);
                                    case 2:
                                        return r = t.sent, n = i.Z.gameDownloadURL ? {
                                            url: i.Z.gameDownloadURL
                                        } : {}, t.abrupt("return", C({
                                            title: "My Anycolor drawing",
                                            files: [new File([r], "Anycolor ".concat(o()().format("YYYYMMDD HHmmss"), ".png"), {
                                                type: r.type
                                            })]
                                        }, n));
                                    case 5:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function(t) {
                            return m.apply(this, arguments)
                        })
                    }, {
                        key: "saveWorkOfArt",
                        value: (v = A(T().mark((function t(e, r) {
                            var n, o, i, a, u, c;
                            return T().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return n = e.drawingData, o = e.commandProcessor, i = e.postprocess, a = null != r ? r : this.composeWorkOfArt(e), t.prev = 2, t.next = 5, this.renderToBlob(a);
                                    case 5:
                                        u = t.sent;
                                    case 6:
                                        return t.prev = 6, void 0 === r && a.destroy(!0), t.finish(6);
                                    case 9:
                                        return t.next = 11, this.db;
                                    case 11:
                                        return c = t.sent, t.abrupt("return", new Promise((function(t, e) {
                                            var r = c.transaction([I, z, F], "readwrite");
                                            r.oncomplete = function() {
                                                return t()
                                            }, r.onerror = function() {
                                                return e(r.error)
                                            }, r.objectStore(I).put(u, n.id), r.objectStore(z).put(o.allCommands, n.id), r.objectStore(F).put(i, n.id)
                                        })));
                                    case 13:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [2, , 6, 9]
                            ])
                        }))), function(t, e) {
                            return v.apply(this, arguments)
                        })
                    }, {
                        key: "loadWorkOfArtThumbnail",
                        value: (p = A(T().mark((function t(e) {
                            var r;
                            return T().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, this.db;
                                    case 2:
                                        return r = t.sent, t.abrupt("return", new Promise((function(t, n) {
                                            var o = r.transaction([I], "readonly");
                                            o.onerror = function() {
                                                return n(o.error)
                                            };
                                            var i = o.objectStore(I).get(e.id);
                                            i.onerror = function() {
                                                return n(i.error)
                                            }, i.onsuccess = function() {
                                                return t(i.result)
                                            }
                                        })));
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function(t) {
                            return p.apply(this, arguments)
                        })
                    }, {
                        key: "loadWorkOfArtHistory",
                        value: (h = A(T().mark((function t(e) {
                            var r;
                            return T().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, this.db;
                                    case 2:
                                        return r = t.sent, t.abrupt("return", new Promise((function(t, n) {
                                            var o = r.transaction([z], "readonly");
                                            o.onerror = function() {
                                                return n(o.error)
                                            };
                                            var i = o.objectStore(z).get(e.id);
                                            i.onerror = function() {
                                                return n(i.error)
                                            }, i.onsuccess = function() {
                                                return t(i.result)
                                            }
                                        })));
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function(t) {
                            return h.apply(this, arguments)
                        })
                    }, {
                        key: "loadWorkOfArtPostProcessData",
                        value: (f = A(T().mark((function t(e) {
                            var r;
                            return T().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, this.db;
                                    case 2:
                                        return r = t.sent, t.abrupt("return", new Promise((function(t, n) {
                                            var o = r.transaction([F], "readonly");
                                            o.onerror = function() {
                                                return n(o.error)
                                            };
                                            var i = o.objectStore(F).get(e.id);
                                            i.onerror = function() {
                                                return n(i.error)
                                            }, i.onsuccess = function() {
                                                return t(i.result)
                                            }
                                        })));
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function(t) {
                            return f.apply(this, arguments)
                        })
                    }, {
                        key: "getSavedWorksOfArtIds",
                        value: (n = A(T().mark((function t() {
                            var e;
                            return T().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, this.db;
                                    case 2:
                                        return e = t.sent, t.abrupt("return", new Promise((function(t, r) {
                                            var n = e.transaction([I], "readonly");
                                            n.onerror = function() {
                                                return r(n.error)
                                            };
                                            var o = n.objectStore(I).getAllKeys();
                                            o.onerror = function() {
                                                return r(o.error)
                                            }, o.onsuccess = function() {
                                                return t(o.result)
                                            }
                                        })));
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function() {
                            return n.apply(this, arguments)
                        })
                    }], r && D(e.prototype, r), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t
                }();

            function W(t, e) {
                return H.apply(this, arguments)
            }

            function H() {
                return (H = A(T().mark((function t(e, r) {
                    var n, o, i;
                    return T().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (n = B(e), void 0 !== l.kN[n]) {
                                    t.next = 10;
                                    break
                                }
                                return o = URL.createObjectURL(r), t.next = 5, (0, h.po)(o);
                            case 5:
                                return i = t.sent, URL.revokeObjectURL(o), t.abrupt("return", s.xE.fromLoader(i, n));
                            case 10:
                                return t.abrupt("return", l.kN[n]);
                            case 11:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function B(t) {
                if (t.type === p.g.ReColor) return "recolor/internal/".concat(t.id);
                if (t.type === p.g.Aniway) return "aniway/internal/".concat(t.id);
                throw new Error("Unknown drawing type.")
            }
        },
        6177: function(t, e, r) {
            function n(t, e, r) {
                return t.x = e.x + r.x, t.y = e.y + r.y, t
            }

            function o(t, e, r) {
                return t.x = e.x - r.x, t.y = e.y - r.y, t
            }

            function i(t, e, r) {
                return t.x = e.x * r.x, t.y = e.y * r.y, t
            }

            function a(t, e) {
                return t.x += e.x, t.y += e.y, t
            }

            function u(t, e) {
                return t.x -= e.x, t.y -= e.y, t
            }

            function c(t, e) {
                return t.x *= e.x, t.y *= e.y, t
            }

            function s(t, e, r) {
                return t.x = e.x * r, t.y = e.y * r, t
            }

            function l(t, e, r) {
                return t.x = e.x / r, t.y = e.y / r, t
            }

            function f(t) {
                return Math.hypot(t.x, t.y)
            }

            function h(t, e) {
                return Math.hypot(t.x - e.x, t.y - e.y)
            }
            r.d(e, {
                C2: function() {
                    return u
                },
                IH: function() {
                    return n
                },
                TE: function() {
                    return h
                },
                TZ: function() {
                    return l
                },
                XQ: function() {
                    return c
                },
                _m: function() {
                    return f
                },
                bA: function() {
                    return s
                },
                dC: function() {
                    return i
                },
                jo: function() {
                    return a
                },
                lu: function() {
                    return o
                }
            }), r(5438), Math.PI
        },
        888: function(t, e, r) {
            r.d(e, {
                Us: function() {
                    return P
                },
                sN: function() {
                    return E
                }
            }), r(8304), r(1703), r(8862), r(5827), r(1539), r(4553), r(561), r(9826), r(7327), r(8674), r(9070), r(489), r(2772), r(9714), r(1299), r(2419), r(6992), r(1532), r(8783), r(3948), r(7042), r(1038), r(4916), r(7601), r(2526), r(1817), r(2165), r(2443), r(9341), r(3706), r(2703), r(4747);
            var n = r(8844),
                o = r(1431),
                i = r(1686),
                a = r(5882),
                u = r(4242);

            function c(t) {
                return c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, c(t)
            }

            function s() {
                s = function() {
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
                    u = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function l(t, e, r, n) {
                    var o = e && e.prototype instanceof d ? e : d,
                        i = Object.create(o.prototype),
                        a = new P(n || []);
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
                                    var u = O(a, r);
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

                function d() {}

                function p() {}

                function y() {}
                var v = {};
                u(v, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    g = m && m(m(k([])));
                g && g !== e && r.call(g, o) && (v = g);
                var w = y.prototype = d.prototype = Object.create(v);

                function b(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        u(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function x(t, e) {
                    function n(o, i, a, u) {
                        var s = f(t[o], t, i);
                        if ("throw" !== s.type) {
                            var l = s.arg,
                                h = l.value;
                            return h && "object" == c(h) && r.call(h, "__await") ? e.resolve(h.__await).then((function(t) {
                                n("next", t, a, u)
                            }), (function(t) {
                                n("throw", t, a, u)
                            })) : e.resolve(h).then((function(t) {
                                l.value = t, a(l)
                            }), (function(t) {
                                return n("throw", t, a, u)
                            }))
                        }
                        u(s.arg)
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

                function O(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, O(t, e), "throw" === e.method)) return h;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return h
                    }
                    var n = f(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, h;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, h) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, h)
                }

                function S(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function j(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function P(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(S, this), this.reset(!0)
                }

                function k(t) {
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
                return p.prototype = y, u(w, "constructor", y), u(y, "constructor", p), p.displayName = u(y, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, u(t, a, "GeneratorFunction")), t.prototype = Object.create(w), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, b(x.prototype), u(x.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = x, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new x(l(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, b(w), u(w, a, "Generator"), u(w, o, (function() {
                    return this
                })), u(w, "toString", (function() {
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
                }, t.values = k, P.prototype = {
                    constructor: P,
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
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, h) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), h
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), j(r), h
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
                            iterator: k(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), h
                    }
                }, t
            }

            function l(t, e, r, n, o, i, a) {
                try {
                    var u = t[i](a),
                        c = u.value
                } catch (t) {
                    return void r(t)
                }
                u.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function f(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(e, r);

                        function a(t) {
                            l(i, n, o, a, u, "next", t)
                        }

                        function u(t) {
                            l(i, n, o, a, u, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function h(t, e) {
                var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!r) {
                    if (Array.isArray(t) || (r = function(t, e) {
                            if (t) {
                                if ("string" == typeof t) return d(t, e);
                                var r = Object.prototype.toString.call(t).slice(8, -1);
                                return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? d(t, e) : void 0
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
                    u = !1;
                return {
                    s: function() {
                        r = r.call(t)
                    },
                    n: function() {
                        var t = r.next();
                        return a = t.done, t
                    },
                    e: function(t) {
                        u = !0, i = t
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

            function d(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function p(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function y(t, e, r) {
                return e && p(t.prototype, e), r && p(t, r), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }

            function v(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function m(t, e) {
                if (e && ("object" === c(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return g(t)
            }

            function g(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function w(t) {
                var e = "function" == typeof Map ? new Map : void 0;
                return w = function(t) {
                    if (null === t || (r = t, -1 === Function.toString.call(r).indexOf("[native code]"))) return t;
                    var r;
                    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== e) {
                        if (e.has(t)) return e.get(t);
                        e.set(t, n)
                    }

                    function n() {
                        return b(t, arguments, S(this).constructor)
                    }
                    return n.prototype = Object.create(t.prototype, {
                        constructor: {
                            value: n,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), O(n, t)
                }, w(t)
            }

            function b(t, e, r) {
                return b = x() ? Reflect.construct.bind() : function(t, e, r) {
                    var n = [null];
                    n.push.apply(n, e);
                    var o = new(Function.bind.apply(t, n));
                    return r && O(o, r.prototype), o
                }, b.apply(null, arguments)
            }

            function x() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (t) {
                    return !1
                }
            }

            function O(t, e) {
                return O = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, O(t, e)
            }

            function S(t) {
                return S = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, S(t)
            }

            function j(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            var P, k = "monetization";
            ! function(t) {
                t.Nop = "nop", t.VideoAd = "VideoAd", t.Share = "Share"
            }(P || (P = {}));
            var E = function(t) {
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
                        }), e && O(t, e)
                    }(o, t);
                    var e, r, n = (e = o, r = x(), function() {
                        var t, n = S(e);
                        if (r) {
                            var o = S(this).constructor;
                            t = Reflect.construct(n, arguments, o)
                        } else t = n.apply(this, arguments);
                        return m(this, t)
                    });

                    function o(t, e) {
                        var r;
                        return v(this, o), j(g(r = n.call(this, "Action failed.")), "mediator", void 0), j(g(r), "cause", void 0), r.mediator = t, r.cause = e, Object.setPrototypeOf(g(r), o.prototype), r
                    }
                    return y(o)
                }(w(Error)),
                C = function() {
                    function t() {
                        var e = this;
                        v(this, t), j(this, "carouselReady", new u.MZ), j(this, "carouselUpdated", new u.MZ), j(this, "loopFinished", new u.MZ), j(this, "availableActions", void 0), j(this, "carousel", void 0), j(this, "nextIndex", void 0), j(this, "adsLoading", void 0), j(this, "interstitialAd", void 0), j(this, "interstitialTimeout", void 0), j(this, "carouselData", {}), j(this, "config", void 0), this.availableActions = [], this.carousel = [], this.nextIndex = 0, this.adsLoading = 0, this.carouselReady.connect((function() {
                            return e.checkStatus()
                        })), (0, i._l)((function() {
                            return e.rotateCarousel()
                        }), 6e4)
                    }
                    var e, r, c;
                    return y(t, [{
                        key: "init",
                        value: function(t) {
                            this.config = t;
                            try {
                                var e = localStorage.getItem(k);
                                this.carouselData = e ? JSON.parse(e) : {}
                            } catch (t) {
                                this.carouselData = {}
                            }
                            this.carousel.length = 0, this.nextIndex = 0;
                            var r, n = h(t);
                            try {
                                for (n.s(); !(r = n.n()).done;) {
                                    var o = r.value,
                                        i = o.count || 1,
                                        a = this.carouselData[o.type];
                                    if (a && a.cancel <= 0) {
                                        var u;
                                        if (!(o.reset && a.reset && a.reset + o.reset <= Date.now())) continue;
                                        a.cancel = null !== (u = o.cancelLimit) && void 0 !== u ? u : 1
                                    }
                                    for (var c = 0; c < i; ++c) this.carousel.push(o.type)
                                }
                            } catch (t) {
                                n.e(t)
                            } finally {
                                n.f()
                            }
                            try {
                                localStorage.setItem(k, JSON.stringify(this.carouselData))
                            } catch (t) {}
                            this.carouselReady.emit(), this.carouselUpdated.emit()
                        }
                    }, {
                        key: "rotateCarousel",
                        value: function() {
                            var t = this.carousel.shift();
                            void 0 !== t && this.carousel.push(t), this.forceUpdate()
                        }
                    }, {
                        key: "forceUpdate",
                        value: function() {
                            this.nextIndex = 0, this.carouselUpdated.emit()
                        }
                    }, {
                        key: "checkStatus",
                        value: function() {
                            var t = this;
                            if (void 0 === this.config) throw new Error("No configuration. Call init first.");
                            var e, r = h(this.config);
                            try {
                                var n = function() {
                                    var r, n = e.value,
                                        o = t.availableActions.reduce((function(t, e) {
                                            return t + (e.type === n.type ? 1 : 0)
                                        }), 0),
                                        i = null !== (r = n.preload) && void 0 !== r ? r : 1;
                                    n.type === P.VideoAd ? (o += t.adsLoading) < i && t.getRewardedVideo() : n.type === P.Share ? o < i && t.availableActions.push({
                                        type: P.Share,
                                        share: function() {
                                            var t, e;
                                            if (a.Z.defaultNetwork) return a.Z.share(a.Z.defaultNetwork, null !== (t = n.quote) && void 0 !== t ? t : "Aniway", null !== (e = n.url) && void 0 !== e ? e : "http://www.aniway.fi");
                                            throw new Error("No default network.")
                                        }
                                    }) : n.type === P.Nop && o < i && t.availableActions.push({
                                        type: P.Nop
                                    })
                                };
                                for (r.s(); !(e = r.n()).done;) n()
                            } catch (t) {
                                r.e(t)
                            } finally {
                                r.f()
                            }
                        }
                    }, {
                        key: "getRewardedAction",
                        value: function() {
                            var t = this.nextIndex++ % this.carousel.length;
                            return this.carousel[t]
                        }
                    }, {
                        key: "consumeRewardedAction",
                        value: (c = f(s().mark((function t(e) {
                            var r, n, o, i, a, u, c, l;
                            return s().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (void 0 !== this.config) {
                                            t.next = 2;
                                            break
                                        }
                                        throw new Error("No configuration. Call init first.");
                                    case 2:
                                        if (r = this.availableActions.findIndex((function(t) {
                                                return t.type === e
                                            })), n = this.availableActions[r], -1 === r) {
                                            t.next = 8;
                                            break
                                        }
                                        this.availableActions.splice(r, 1), t.next = 9;
                                        break;
                                    case 8:
                                        throw new Error("No action found for type '".concat(e, "'."));
                                    case 9:
                                        if (this.checkStatus(), o = {
                                                mediator: "dummy"
                                            }, t.prev = 11, n.type !== P.Share) {
                                            t.next = 18;
                                            break
                                        }
                                        return o.mediator = "navigator", t.next = 16, n.share();
                                    case 16:
                                        t.next = 22;
                                        break;
                                    case 18:
                                        if (n.type !== P.VideoAd) {
                                            t.next = 22;
                                            break
                                        }
                                        return o.mediator = n.ad.mediator, t.next = 22, n.ad.show();
                                    case 22:
                                        return t.abrupt("return", o);
                                    case 25:
                                        if (t.prev = 25, t.t0 = t.catch(11), !(i = this.config.find((function(t) {
                                                return t.type === n.type
                                            }))) || !i.cancelLimit) {
                                            t.next = 39;
                                            break
                                        }--(l = null !== (c = (a = this.carouselData)[u = n.type]) && void 0 !== c ? c : a[u] = {
                                            cancel: i.cancelLimit
                                        }).cancel <= 0 && (this.carousel = this.carousel.filter((function(t) {
                                            return t !== n.type
                                        })), this.forceUpdate()), i.reset && (l.reset = Date.now()), t.prev = 32, localStorage.setItem(k, JSON.stringify(this.carouselData)), t.next = 39;
                                        break;
                                    case 36:
                                        throw t.prev = 36, t.t1 = t.catch(32), new E(o.mediator, t.t1);
                                    case 39:
                                        throw new E(o.mediator, t.t0);
                                    case 40:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [11, 25],
                                [32, 36]
                            ])
                        }))), function(t) {
                            return c.apply(this, arguments)
                        })
                    }, {
                        key: "hasInterstitialAdLoaded",
                        value: function() {
                            return void 0 === this.interstitialAd && this.getInterstitialAd(), void 0 !== this.interstitialAd
                        }
                    }, {
                        key: "consumeInterstitialAd",
                        value: (r = f(s().mark((function t() {
                            var e, r, n;
                            return s().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, this.getInterstitialAd();
                                    case 2:
                                        return e = t.sent, r = e.mediator, n = e.show, t.prev = 5, t.next = 8, n();
                                    case 8:
                                        return t.abrupt("return", {
                                            successful: !0,
                                            mediator: r
                                        });
                                    case 11:
                                        return t.prev = 11, t.t0 = t.catch(5), t.abrupt("return", {
                                            successful: !1,
                                            mediator: r
                                        });
                                    case 15:
                                        return t.prev = 15, delete this.interstitialAd, t.finish(15);
                                    case 18:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [5, 11, 15, 18]
                            ])
                        }))), function() {
                            return r.apply(this, arguments)
                        })
                    }, {
                        key: "getRewardedVideo",
                        value: function() {
                            var t = this;
                            ++this.adsLoading, n.Z.getRewardedAd().then((function(e) {
                                --t.adsLoading, t.availableActions.push({
                                    type: P.VideoAd,
                                    ad: e
                                }), t.carouselReady.emit()
                            })).catch((function(e) {
                                --t.adsLoading, t.checkStatus()
                            }))
                        }
                    }, {
                        key: "getInterstitialAd",
                        value: (e = f(s().mark((function t() {
                            var e, r, i, a = this;
                            return s().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (void 0 === this.interstitialAd) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return", this.interstitialAd);
                                    case 2:
                                        if (void 0 === this.interstitialTimeout) {
                                            t.next = 4;
                                            break
                                        }
                                        return t.abrupt("return", this.interstitialTimeout);
                                    case 4:
                                        return t.prev = 4, t.next = 7, n.Z.getInterstitialAd();
                                    case 7:
                                        return this.interstitialAd = t.sent, t.abrupt("return", this.interstitialAd);
                                    case 11:
                                        if (t.prev = 11, t.t0 = t.catch(4), !(t.t0 instanceof o._)) {
                                            t.next = 32;
                                            break
                                        }
                                        if ((e = t.t0.code) !== o.j.TooFrequent) {
                                            t.next = 20;
                                            break
                                        }
                                        return null !== (r = this.interstitialTimeout) && void 0 !== r || (this.interstitialTimeout = new Promise((function(t) {
                                            window.setTimeout((function() {
                                                delete a.interstitialTimeout, t(a.getInterstitialAd())
                                            }), 5e3)
                                        }))), t.abrupt("return", this.interstitialTimeout);
                                    case 20:
                                        if (e !== o.j.NoFill) {
                                            t.next = 25;
                                            break
                                        }
                                        return null !== (i = this.interstitialTimeout) && void 0 !== i || (this.interstitialTimeout = new Promise((function(t) {
                                            window.setTimeout((function() {
                                                delete a.interstitialTimeout, t(a.getInterstitialAd())
                                            }), 500)
                                        }))), t.abrupt("return", this.interstitialTimeout);
                                    case 25:
                                        if (e !== o.j.Unknown) {
                                            t.next = 29;
                                            break
                                        }
                                        throw t.t0.cause;
                                    case 29:
                                        throw new Error("Unknown interstitial error code '".concat(e, "'."));
                                    case 30:
                                        t.next = 33;
                                        break;
                                    case 32:
                                        throw t.t0;
                                    case 33:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [4, 11]
                            ])
                        }))), function() {
                            return e.apply(this, arguments)
                        })
                    }]), t
                }();
            e.ZP = new C
        },
        7450: function(t, e, r) {
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
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            r.d(e, {
                    I: function() {
                        return u
                    },
                    J: function() {
                        return n
                    }
                }), r(9070), r(1703),
                function(t) {
                    t[t.Unconstrained = 0] = "Unconstrained", t[t.MinSize = 1] = "MinSize", t[t.PreferredSize = 2] = "PreferredSize"
                }(n || (n = {}));
            var u = function() {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n.Unconstrained,
                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.Unconstrained,
                        i = arguments.length > 2 ? arguments[2] : void 0;
                    o(this, t), a(this, "horizontalFit", void 0), a(this, "verticalFit", void 0), a(this, "layoutElement", void 0), a(this, "lastLayoutElement", void 0), this.horizontalFit = e, this.verticalFit = r, this.layoutElement = i
                }
                var e, r;
                return e = t, (r = [{
                    key: "isDirty",
                    value: function() {
                        var t, e, r, o, i = this.layoutElement,
                            a = i.minWidth,
                            u = i.preferredWidth,
                            c = i.minHeight,
                            s = i.preferredHeight;
                        return !!(this.horizontalFit === n.MinSize && (null === (t = this.lastLayoutElement) || void 0 === t ? void 0 : t.minWidth) !== a || this.horizontalFit === n.PreferredSize && (null === (e = this.lastLayoutElement) || void 0 === e ? void 0 : e.preferredWidth) !== u || this.verticalFit === n.MinSize && (null === (r = this.lastLayoutElement) || void 0 === r ? void 0 : r.minHeight) !== c || this.verticalFit === n.PreferredSize && (null === (o = this.lastLayoutElement) || void 0 === o ? void 0 : o.preferredHeight) !== s) && (this.lastLayoutElement = {
                            minWidth: a,
                            preferredWidth: u,
                            minHeight: c,
                            preferredHeight: s
                        }, !0)
                    }
                }, {
                    key: "setLayout",
                    value: function(t) {
                        var e = t.sizeDelta;
                        this.horizontalFit === n.MinSize ? e.x = this.layoutElement.minWidth : this.horizontalFit === n.PreferredSize && (e.x = Math.max(this.layoutElement.preferredWidth, this.layoutElement.minWidth)), this.verticalFit === n.MinSize ? e.y = this.layoutElement.minHeight : this.verticalFit === n.PreferredSize && (e.y = Math.max(this.layoutElement.preferredHeight, this.layoutElement.minHeight)), t.sizeDelta = e
                    }
                }]) && i(e.prototype, r), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t
            }()
        },
        618: function(t, e, r) {
            r.d(e, {
                Gz: function() {
                    return x
                },
                Uq: function() {
                    return n
                },
                u1: function() {
                    return m
                },
                w1: function() {
                    return w
                }
            }), r(6992), r(1539), r(189), r(8783), r(3948), r(1532), r(1038), r(3299), r(9653), r(1703), r(9070), r(7042), r(4916), r(7601), r(2526), r(1817), r(2165), r(7941), r(7327), r(5003), r(4747), r(9337), r(3321);
            var n, o = r(8741),
                i = r.n(o),
                a = r(4063),
                u = r.n(a),
                c = r(6177);

            function s(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function l(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? s(Object(r), !0).forEach((function(e) {
                        v(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function f(t, e) {
                var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!r) {
                    if (Array.isArray(t) || (r = h(t)) || e && t && "number" == typeof t.length) {
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
                    u = !1;
                return {
                    s: function() {
                        r = r.call(t)
                    },
                    n: function() {
                        var t = r.next();
                        return a = t.done, t
                    },
                    e: function(t) {
                        u = !0, i = t
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

            function h(t, e) {
                if (t) {
                    if ("string" == typeof t) return d(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? d(t, e) : void 0
                }
            }

            function d(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function p(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function y(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function v(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }! function(t) {
                t[t.TopLeft = 0] = "TopLeft", t[t.TopRight = 1] = "TopRight", t[t.TopCenter = 2] = "TopCenter", t[t.BottomLeft = 3] = "BottomLeft", t[t.BottomRight = 4] = "BottomRight", t[t.BottomCenter = 5] = "BottomCenter", t[t.LeftCenter = 6] = "LeftCenter", t[t.RightCenter = 7] = "RightCenter", t[t.Center = 8] = "Center", t[t.LeftEdge = 9] = "LeftEdge", t[t.TopEdge = 10] = "TopEdge", t[t.RightEdge = 11] = "RightEdge", t[t.BottomEdge = 12] = "BottomEdge", t[t.HorizontalFill = 13] = "HorizontalFill", t[t.VerticalFill = 14] = "VerticalFill", t[t.Fill = 15] = "Fill", t[t.LeftTop = 0] = "LeftTop", t[t.LeftBottom = 3] = "LeftBottom", t[t.RightTop = 1] = "RightTop", t[t.RightBottom = 4] = "RightBottom"
            }(n || (n = {}));
            var m = function() {
                function t(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e;
                    p(this, t), v(this, "displayObject", void 0), v(this, "childTarget", void 0), v(this, "dirtyCheck", void 0), v(this, "_children", new Set), v(this, "_parent", void 0), v(this, "_layoutDirty", !0), v(this, "anchor", {
                        min: {
                            x: 0,
                            y: 0
                        },
                        max: {
                            x: 0,
                            y: 0
                        }
                    }), v(this, "offset", {
                        min: {
                            x: 0,
                            y: 0
                        },
                        max: {
                            x: 0,
                            y: 0
                        }
                    }), v(this, "pivot", {
                        x: 0,
                        y: 0
                    }), v(this, "scale", {
                        x: 1,
                        y: 1
                    }), v(this, "_size", {
                        x: 0,
                        y: 0
                    }), v(this, "layoutController", void 0), v(this, "_destroyed", !1), this.displayObject = e, this.childTarget = r, r !== e && this.displayObject.addChild(r), this.dirtyCheck = new Map([
                        ["anchor", i()(this.anchor)],
                        ["offset", i()(this.offset)],
                        ["pivot", i()(this.pivot)],
                        ["scale", i()(this.scale)]
                    ])
                }
                var e, r;
                return e = t, r = [{
                    key: "setLayoutDirty",
                    value: function() {
                        this._layoutDirty = !0
                    }
                }, {
                    key: "layoutDirty",
                    get: function() {
                        return this._layoutDirty
                    }
                }, {
                    key: "destroyed",
                    get: function() {
                        return this._destroyed
                    }
                }, {
                    key: "setParent",
                    value: function(t) {
                        void 0 !== t && t.childTarget.addChild(this.displayObject), void 0 !== this._parent && this._parent.childTarget.removeChild(this.displayObject), this._parent = t, this.measure(), this._layoutDirty = !0
                    }
                }, {
                    key: "parent",
                    get: function() {
                        return this._parent
                    }
                }, {
                    key: "addChild",
                    value: function(t) {
                        return t._parent === this || (void 0 !== t._parent && t._parent._children.delete(t), this._children.add(t), t.setParent(this), this.setLayoutDirty()), t
                    }
                }, {
                    key: "removeChild",
                    value: function(t) {
                        var e = this._children.delete(t);
                        return e && t.parent === this && t.setParent(void 0), e
                    }
                }, {
                    key: "removeAllChildren",
                    value: function() {
                        var t, e = f(this._children);
                        try {
                            for (e.s(); !(t = e.n()).done;) {
                                var r = t.value;
                                r.parent === this && r.setParent(void 0)
                            }
                        } catch (t) {
                            e.e(t)
                        } finally {
                            e.f()
                        }
                        var n = Array.from(this._children.values());
                        return this._children.clear(), n
                    }
                }, {
                    key: "children",
                    value: function() {
                        return this._children.values()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (this._destroyed = !0, this._parent && this._parent.removeChild(this), t) {
                            var e, r = f(this._children);
                            try {
                                for (r.s(); !(e = r.n()).done;) {
                                    var n = e.value;
                                    n.destroy(t)
                                }
                            } catch (t) {
                                r.e(t)
                            } finally {
                                r.f()
                            }
                        }
                        this.childTarget !== this.displayObject && this.childTarget.destroy({
                            children: t
                        }), this.displayObject.destroy({
                            children: t
                        })
                    }
                }, {
                    key: "checkDirty",
                    value: function() {
                        var t, e, r, n = f(this.dirtyCheck);
                        try {
                            for (n.s(); !(t = n.n()).done;) {
                                var o = (e = t.value, r = 2, function(t) {
                                        if (Array.isArray(t)) return t
                                    }(e) || function(t, e) {
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
                                    }(e, r) || h(e, r) || function() {
                                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }()),
                                    a = o[0],
                                    c = o[1],
                                    s = this[a];
                                u()(s, c) || (this.dirtyCheck.set(a, i()(s)), this._layoutDirty = !0)
                            }
                        } catch (t) {
                            n.e(t)
                        } finally {
                            n.f()
                        }
                        this._layoutDirty || void 0 === this.layoutController || (this._layoutDirty = this.layoutController.isDirty())
                    }
                }, {
                    key: "updateLayout",
                    value: function() {
                        var t, e = f(this._children);
                        try {
                            for (e.s(); !(t = e.n()).done;) {
                                var r = t.value;
                                if (r.checkDirty(), this._layoutDirty || r._layoutDirty) {
                                    r.measure(), r.displayObject.position.set(r.anchor.min.x * this._size.x + r.offset.min.x, r.anchor.min.y * this._size.y + r.offset.min.y);
                                    var n = (0, c.dC)({
                                            x: 0,
                                            y: 0
                                        }, r.size, r.pivot),
                                        o = n.x,
                                        i = n.y,
                                        a = Math.sin(r.rotation),
                                        u = Math.cos(r.rotation);
                                    r.displayObject.position.x += o - (u * o * r.scale.x - a * i * r.scale.y), r.displayObject.position.y += i - (a * o * r.scale.x + u * i * r.scale.y), r.displayObject.scale.copyFrom(r.scale), r._layoutDirty = !0
                                }
                                r.updateLayout()
                            }
                        } catch (t) {
                            e.e(t)
                        } finally {
                            e.f()
                        }
                        this._layoutDirty = !1
                    }
                }, {
                    key: "anchoredPosition",
                    get: function() {
                        var t, e, r = null !== (t = null === (e = this.parent) || void 0 === e ? void 0 : e.size) && void 0 !== t ? t : {
                                x: 0,
                                y: 0
                            },
                            n = {
                                min: (0, c.jo)((0, c.dC)({
                                    x: 0,
                                    y: 0
                                }, this.anchor.min, r), this.offset.min),
                                max: (0, c.jo)((0, c.dC)({
                                    x: 0,
                                    y: 0
                                }, this.anchor.max, r), this.offset.max)
                            };
                        return (0, c.jo)((0, c.XQ)((0, c.C2)(n.max, n.min), this.pivot), n.min)
                    },
                    set: function(t) {
                        var e = (0, c.lu)({
                            x: 0,
                            y: 0
                        }, t, this.anchoredPosition);
                        this.moveOffset(e)
                    }
                }, {
                    key: "anchorTo",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                x: 0,
                                y: 0
                            },
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sizeDelta,
                            n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                        this.anchor = w(t), n && (this.pivot = b(t)), this.offset = g(t, r, e)
                    }
                }, {
                    key: "setPivotToAnchor",
                    value: function() {
                        var t = this.sizeDelta;
                        this.pivot = {
                            x: -this.offset.min.x / t.x,
                            y: -this.offset.min.y / t.y
                        }
                    }
                }, {
                    key: "centerAroundAnchor",
                    value: function() {
                        var t = this.sizeDelta.x / 2,
                            e = this.sizeDelta.y / 2;
                        this.offset = {
                            min: {
                                x: -t,
                                y: -e
                            },
                            max: {
                                x: t,
                                y: e
                            }
                        }
                    }
                }, {
                    key: "moveOffset",
                    value: function(t) {
                        (0, c.jo)(this.offset.min, t), (0, c.jo)(this.offset.max, t)
                    }
                }, {
                    key: "setAbsolutePosition",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.sizeDelta;
                        this.offset.min = l({}, t), (0, c.IH)(this.offset.max, t, e)
                    }
                }, {
                    key: "setAbsoluteSize",
                    value: function(t) {
                        (0, c.IH)(this.offset.max, this.offset.min, t)
                    }
                }, {
                    key: "measure",
                    value: function() {
                        var t, e, r;
                        null === (t = this.layoutController) || void 0 === t || t.setLayout(this), (0, c.lu)(this._size, this.offset.max, this.offset.min);
                        var n = null !== (e = null === (r = this.parent) || void 0 === r ? void 0 : r.size) && void 0 !== e ? e : {
                                x: 0,
                                y: 0
                            },
                            o = Math.abs(this.anchor.max.x - this.anchor.min.x);
                        o > Number.EPSILON && (this._size.x += o * n.x);
                        var i = Math.abs(this.anchor.max.y - this.anchor.min.y);
                        i > Number.EPSILON && (this._size.y += i * n.y)
                    }
                }, {
                    key: "rotation",
                    get: function() {
                        return this.displayObject.rotation
                    },
                    set: function(t) {
                        this.displayObject.rotation = t
                    }
                }, {
                    key: "visible",
                    get: function() {
                        return this.displayObject.visible
                    },
                    set: function(t) {
                        this.displayObject.visible = t
                    }
                }, {
                    key: "sizeDelta",
                    get: function() {
                        return (0, c.lu)({
                            x: 0,
                            y: 0
                        }, this.offset.max, this.offset.min)
                    },
                    set: function(t) {
                        var e = this.pivot,
                            r = e.x,
                            n = e.y,
                            o = (0, c.lu)({
                                x: 0,
                                y: 0
                            }, this.offset.max, this.offset.min);
                        (0, c.lu)(o, o, t), this.offset.min.x += o.x * r, this.offset.min.y += o.y * n, this.offset.max.x -= o.x * (1 - r), this.offset.max.y -= o.y * (1 - n)
                    }
                }, {
                    key: "size",
                    get: function() {
                        return this._size
                    }
                }, {
                    key: "hitArea",
                    get: function() {
                        return this.displayObject.hitArea
                    },
                    set: function(t) {
                        this.displayObject.hitArea = t
                    }
                }], r && y(e.prototype, r), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t
            }();

            function g(t, e) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                        x: 0,
                        y: 0
                    },
                    o = r.x,
                    i = r.y,
                    a = e.x,
                    u = e.y;
                if (t === n.TopLeft) return {
                    min: {
                        x: o,
                        y: i
                    },
                    max: {
                        x: o + a,
                        y: i + u
                    }
                };
                if (t === n.TopRight) return {
                    min: {
                        x: -o - a,
                        y: i
                    },
                    max: {
                        x: -o,
                        y: i + u
                    }
                };
                if (t === n.TopCenter) return {
                    min: {
                        x: o - a / 2,
                        y: i
                    },
                    max: {
                        x: o + a / 2,
                        y: i + u
                    }
                };
                if (t === n.BottomLeft) return {
                    min: {
                        x: o,
                        y: -i - u
                    },
                    max: {
                        x: o + a,
                        y: -i
                    }
                };
                if (t === n.BottomRight) return {
                    min: {
                        x: -o - a,
                        y: -i - u
                    },
                    max: {
                        x: -o,
                        y: -i
                    }
                };
                if (t === n.BottomCenter) return {
                    min: {
                        x: o - a / 2,
                        y: -i - u
                    },
                    max: {
                        x: o + a / 2,
                        y: -i
                    }
                };
                if (t === n.LeftCenter) return {
                    min: {
                        x: o,
                        y: i - u / 2
                    },
                    max: {
                        x: o + a,
                        y: i + u / 2
                    }
                };
                if (t === n.RightCenter) return {
                    min: {
                        x: -a - o,
                        y: i - u / 2
                    },
                    max: {
                        x: -o,
                        y: i + u / 2
                    }
                };
                if (t === n.Center) return {
                    min: {
                        x: o - a / 2,
                        y: i - u / 2
                    },
                    max: {
                        x: o + a / 2,
                        y: i + u / 2
                    }
                };
                if (t === n.LeftEdge) return {
                    min: {
                        x: o,
                        y: i / 2
                    },
                    max: {
                        x: o + a,
                        y: -i / 2
                    }
                };
                if (t === n.TopEdge) return {
                    min: {
                        x: o / 2,
                        y: i
                    },
                    max: {
                        x: -o / 2,
                        y: i + u
                    }
                };
                if (t === n.RightEdge) return {
                    min: {
                        x: -o - a,
                        y: i / 2
                    },
                    max: {
                        x: -o,
                        y: -i / 2
                    }
                };
                if (t === n.BottomEdge) return {
                    min: {
                        x: o / 2,
                        y: -i - u
                    },
                    max: {
                        x: -o / 2,
                        y: -i
                    }
                };
                if (t === n.HorizontalFill) return {
                    min: {
                        x: o / 2,
                        y: i - u / 2
                    },
                    max: {
                        x: -o / 2,
                        y: i + u / 2
                    }
                };
                if (t === n.VerticalFill) return {
                    min: {
                        x: o - a / 2,
                        y: i / 2
                    },
                    max: {
                        x: o + a / 2,
                        y: -i / 2
                    }
                };
                if (t === n.Fill) return {
                    min: {
                        x: o / 2,
                        y: i / 2
                    },
                    max: {
                        x: -o / 2,
                        y: -i / 2
                    }
                };
                throw new Error("Unknown anchor preset")
            }

            function w(t) {
                if (t === n.TopLeft) return {
                    min: {
                        x: 0,
                        y: 0
                    },
                    max: {
                        x: 0,
                        y: 0
                    }
                };
                if (t === n.TopRight) return {
                    min: {
                        x: 1,
                        y: 0
                    },
                    max: {
                        x: 1,
                        y: 0
                    }
                };
                if (t === n.TopCenter) return {
                    min: {
                        x: .5,
                        y: 0
                    },
                    max: {
                        x: .5,
                        y: 0
                    }
                };
                if (t === n.BottomLeft) return {
                    min: {
                        x: 0,
                        y: 1
                    },
                    max: {
                        x: 0,
                        y: 1
                    }
                };
                if (t === n.BottomRight) return {
                    min: {
                        x: 1,
                        y: 1
                    },
                    max: {
                        x: 1,
                        y: 1
                    }
                };
                if (t === n.BottomCenter) return {
                    min: {
                        x: .5,
                        y: 1
                    },
                    max: {
                        x: .5,
                        y: 1
                    }
                };
                if (t === n.LeftCenter) return {
                    min: {
                        x: 0,
                        y: .5
                    },
                    max: {
                        x: 0,
                        y: .5
                    }
                };
                if (t === n.RightCenter) return {
                    min: {
                        x: 1,
                        y: .5
                    },
                    max: {
                        x: 1,
                        y: .5
                    }
                };
                if (t === n.Center) return {
                    min: {
                        x: .5,
                        y: .5
                    },
                    max: {
                        x: .5,
                        y: .5
                    }
                };
                if (t === n.LeftEdge) return {
                    min: {
                        x: 0,
                        y: 0
                    },
                    max: {
                        x: 0,
                        y: 1
                    }
                };
                if (t === n.TopEdge) return {
                    min: {
                        x: 0,
                        y: 0
                    },
                    max: {
                        x: 1,
                        y: 0
                    }
                };
                if (t === n.RightEdge) return {
                    min: {
                        x: 1,
                        y: 0
                    },
                    max: {
                        x: 1,
                        y: 1
                    }
                };
                if (t === n.BottomEdge) return {
                    min: {
                        x: 0,
                        y: 1
                    },
                    max: {
                        x: 1,
                        y: 1
                    }
                };
                if (t === n.HorizontalFill) return {
                    min: {
                        x: 0,
                        y: .5
                    },
                    max: {
                        x: 1,
                        y: .5
                    }
                };
                if (t === n.VerticalFill) return {
                    min: {
                        x: .5,
                        y: 0
                    },
                    max: {
                        x: .5,
                        y: 1
                    }
                };
                if (t === n.Fill) return {
                    min: {
                        x: 0,
                        y: 0
                    },
                    max: {
                        x: 1,
                        y: 1
                    }
                };
                throw new Error("Unknown anchor preset")
            }

            function b(t) {
                if (t === n.TopLeft) return {
                    x: 0,
                    y: 0
                };
                if (t === n.TopRight) return {
                    x: 1,
                    y: 0
                };
                if (t === n.TopCenter) return {
                    x: .5,
                    y: 0
                };
                if (t === n.BottomLeft) return {
                    x: 0,
                    y: 1
                };
                if (t === n.BottomRight) return {
                    x: 1,
                    y: 1
                };
                if (t === n.BottomCenter) return {
                    x: .5,
                    y: 1
                };
                if (t === n.LeftCenter) return {
                    x: 0,
                    y: .5
                };
                if (t === n.RightCenter) return {
                    x: 1,
                    y: .5
                };
                if (t === n.Center) return {
                    x: .5,
                    y: .5
                };
                if (t === n.LeftEdge) return {
                    x: 0,
                    y: .5
                };
                if (t === n.TopEdge) return {
                    x: .5,
                    y: 0
                };
                if (t === n.RightEdge) return {
                    x: 1,
                    y: .5
                };
                if (t === n.BottomEdge) return {
                    x: .5,
                    y: 1
                };
                if (t === n.HorizontalFill) return {
                    x: .5,
                    y: .5
                };
                if (t === n.VerticalFill) return {
                    x: .5,
                    y: .5
                };
                if (t === n.Fill) return {
                    x: .5,
                    y: .5
                };
                throw new Error("Unknown anchor preset")
            }

            function x(t, e, r, n) {
                return {
                    min: {
                        x: t,
                        y: null != e ? e : t
                    },
                    max: {
                        x: -(null != r ? r : t),
                        y: -(null != n ? n : t)
                    }
                }
            }
        },
        6020: function(t, e, r) {
            r.d(e, {
                I: function() {
                    return x
                }
            }), r(6992), r(1539), r(8783), r(4129), r(3948), r(1703), r(9070), r(8304), r(489), r(1299), r(2419), r(4819), r(5003), r(2526), r(1817), r(2165);
            var n = r(8033),
                o = r(1585),
                i = r(618);

            function a(t) {
                return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, a(t)
            }

            function u(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function c() {
                return c = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, r) {
                    var n = s(t, e);
                    if (n) {
                        var o = Object.getOwnPropertyDescriptor(n, e);
                        return o.get ? o.get.call(arguments.length < 3 ? t : r) : o.value
                    }
                }, c.apply(this, arguments)
            }

            function s(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = d(t)););
                return t
            }

            function l(t, e) {
                return l = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, l(t, e)
            }

            function f(t, e) {
                if (e && ("object" === a(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return h(t)
            }

            function h(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function d(t) {
                return d = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, d(t)
            }

            function p(t, e, r) {
                ! function(t, e) {
                    if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
                }(t, e), e.set(t, r)
            }

            function y(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function v(t, e, r) {
                return function(t, e, r) {
                    if (e.set) e.set.call(t, r);
                    else {
                        if (!e.writable) throw new TypeError("attempted to set read only private field");
                        e.value = r
                    }
                }(t, g(t, e, "set"), r), r
            }

            function m(t, e) {
                return function(t, e) {
                    return e.get ? e.get.call(t) : e.value
                }(t, g(t, e, "get"))
            }

            function g(t, e, r) {
                if (!e.has(t)) throw new TypeError("attempted to " + r + " private field on non-instance");
                return e.get(t)
            }
            var w = new WeakMap,
                b = new WeakMap,
                x = function(t) {
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
                        }), e && l(t, e)
                    }(g, t);
                    var e, r, i, a, s = (i = g, a = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, e = d(i);
                        if (a) {
                            var r = d(this).constructor;
                            t = Reflect.construct(e, arguments, r)
                        } else t = e.apply(this, arguments);
                        return f(this, t)
                    });

                    function g(t) {
                        var e;
                        return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, g), y(h(e = s.call(this, new o.W2)), "sprite", void 0), y(h(e), "minWidth", 0), y(h(e), "minHeight", 0), p(h(e), w, {
                            writable: !0,
                            value: void 0
                        }), p(h(e), b, {
                            writable: !0,
                            value: void 0
                        }), e.sprite = e.displayObject.addChild(new n.j(t)), e.offset = {
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
                    return e = g, (r = [{
                        key: "tint",
                        get: function() {
                            return this.sprite.tint
                        },
                        set: function(t) {
                            this.sprite.tint = t
                        }
                    }, {
                        key: "alpha",
                        get: function() {
                            return this.displayObject.alpha
                        },
                        set: function(t) {
                            this.displayObject.alpha = t
                        }
                    }, {
                        key: "mask",
                        get: function() {
                            return this.displayObject.mask
                        },
                        set: function(t) {
                            this.displayObject.mask = t
                        }
                    }, {
                        key: "blendMode",
                        get: function() {
                            return this.sprite.blendMode
                        },
                        set: function(t) {
                            this.sprite.blendMode = t
                        }
                    }, {
                        key: "texture",
                        get: function() {
                            return this.sprite.texture
                        },
                        set: function(t) {
                            this.sprite.texture = t
                        }
                    }, {
                        key: "spriteAnchor",
                        get: function() {
                            return this.sprite.anchor
                        },
                        set: function(t) {
                            this.sprite.anchor = t
                        }
                    }, {
                        key: "updateLayout",
                        value: function() {
                            this.layoutDirty && (this.sprite.scale.set(1), this.sprite.width = this.size.x, this.sprite.height = this.size.y), c(d(g.prototype), "updateLayout", this).call(this)
                        }
                    }, {
                        key: "preferredWidth",
                        get: function() {
                            var t;
                            return null !== (t = m(this, w)) && void 0 !== t ? t : this.sprite.texture.width
                        },
                        set: function(t) {
                            v(this, w, t)
                        }
                    }, {
                        key: "preferredHeight",
                        get: function() {
                            var t;
                            return null !== (t = m(this, b)) && void 0 !== t ? t : this.sprite.texture.height
                        },
                        set: function(t) {
                            v(this, b, t)
                        }
                    }]) && u(e.prototype, r), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), g
                }(i.u1)
        },
        5650: function(t, e, r) {
            function n(t) {
                return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, n(t)
            }

            function o(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function i(t, e) {
                return i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, i(t, e)
            }

            function a(t, e) {
                if (e && ("object" === n(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return u(t)
            }

            function u(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function c(t) {
                return c = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, c(t)
            }

            function s(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            r.d(e, {
                A: function() {
                    return l
                }
            }), r(9070), r(8304), r(489), r(1539), r(1299), r(2419), r(1703), r(2526), r(1817), r(2165), r(6992), r(8783), r(3948);
            var l = function(t) {
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
                    }), e && i(t, e)
                }(h, t);
                var e, r, n, l, f = (n = h, l = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }(), function() {
                    var t, e = c(n);
                    if (l) {
                        var r = c(this).constructor;
                        t = Reflect.construct(e, arguments, r)
                    } else t = e.apply(this, arguments);
                    return a(this, t)
                });

                function h(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, h), s(u(e = f.call(this, t)), "root", void 0), s(u(e), "minWidth", 0), s(u(e), "minHeight", 0), e.root = t, t.updateTransform = function() {
                        e.checkDirty(), e.layoutDirty && (e.measure(), e.displayObject.position.set(e.anchor.min.x * e.size.x + e.offset.min.x, e.anchor.min.y * e.size.y + e.offset.min.y)), e.updateLayout(), t.containerUpdateTransform()
                    }, e
                }
                return e = h, (r = [{
                    key: "preferredWidth",
                    get: function() {
                        return this.root.width
                    }
                }, {
                    key: "preferredHeight",
                    get: function() {
                        return this.root.height
                    }
                }]) && o(e.prototype, r), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), h
            }(r(618).u1)
        },
        7493: function(t, e, r) {
            r.d(e, {
                H: function() {
                    return n
                },
                sm: function() {
                    return g
                }
            }), r(9070), r(8304), r(489), r(1539), r(1299), r(2419), r(1703), r(4819), r(5003), r(2526), r(1817), r(2165), r(6992), r(8783), r(3948);
            var n, o = r(1601),
                i = r(8741),
                a = r.n(i),
                u = r(618);

            function c(t) {
                return c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, c(t)
            }

            function s(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function l(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function f() {
                return f = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, r) {
                    var n = h(t, e);
                    if (n) {
                        var o = Object.getOwnPropertyDescriptor(n, e);
                        return o.get ? o.get.call(arguments.length < 3 ? t : r) : o.value
                    }
                }, f.apply(this, arguments)
            }

            function h(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = v(t)););
                return t
            }

            function d(t, e) {
                return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, d(t, e)
            }

            function p(t, e) {
                if (e && ("object" === c(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return y(t)
            }

            function y(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function v(t) {
                return v = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, v(t)
            }

            function m(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }! function(t) {
                t[t.TopLeft = 0] = "TopLeft", t[t.TopCenter = 1] = "TopCenter", t[t.TopRight = 2] = "TopRight", t[t.TopJustify = 3] = "TopJustify", t[t.MiddleLeft = 4] = "MiddleLeft", t[t.MiddleCenter = 5] = "MiddleCenter", t[t.MiddleRight = 6] = "MiddleRight", t[t.MiddleJustify = 7] = "MiddleJustify", t[t.BottomLeft = 8] = "BottomLeft", t[t.BottomCenter = 9] = "BottomCenter", t[t.BottomRight = 10] = "BottomRight", t[t.BottomJustify = 11] = "BottomJustify"
            }(n || (n = {}));
            var g = function(t) {
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
                    }), e && d(t, e)
                }(h, t);
                var e, r, i, u, c = (i = h, u = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }(), function() {
                    var t, e = v(i);
                    if (u) {
                        var r = v(this).constructor;
                        t = Reflect.construct(e, arguments, r)
                    } else t = e.apply(this, arguments);
                    return p(this, t)
                });

                function h(t) {
                    var e, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.TopLeft,
                        i = arguments.length > 2 ? arguments[2] : void 0;
                    return s(this, h), m(y(e = c.call(this, new o.xv(t, i))), "alignment", void 0), m(y(e), "cachedTextMetrics", void 0), m(y(e), "minWidth", 0), m(y(e), "minHeight", 0), e.alignment = r, e.offset = {
                        min: {
                            x: 0,
                            y: 0
                        },
                        max: {
                            x: e.displayObject.width,
                            y: e.displayObject.height
                        }
                    }, e.cachedTextMetrics = e.getMetrics(), e.dirtyCheck.set("text", a()(e.text)), e.dirtyCheck.set("alignment", a()(e.alignment)), e.dirtyCheck.set("localStyleID", a()(e.localStyleID)), e
                }
                return e = h, r = [{
                    key: "tint",
                    get: function() {
                        return this.displayObject.tint
                    },
                    set: function(t) {
                        this.displayObject.tint = t
                    }
                }, {
                    key: "text",
                    get: function() {
                        return this.displayObject.text
                    },
                    set: function(t) {
                        this.displayObject.text = t
                    }
                }, {
                    key: "localStyleID",
                    get: function() {
                        return this.displayObject.localStyleID
                    }
                }, {
                    key: "style",
                    get: function() {
                        return this.displayObject.style
                    },
                    set: function(t) {
                        this.displayObject.style = t
                    }
                }, {
                    key: "getMetrics",
                    value: function() {
                        var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (t = this.style) || void 0 === t ? void 0 : t.wordWrap;
                        return o._A.measureText(this.text, this.displayObject.style, null != e && e)
                    }
                }, {
                    key: "updateLayout",
                    value: function() {
                        if (this.layoutDirty) {
                            this.displayObject.style.align = (r = "left", (e = this.alignment) === n.TopCenter || e === n.MiddleCenter || e === n.BottomCenter ? r = "center" : e === n.TopRight || e === n.MiddleRight || e === n.BottomRight ? r = "right" : e !== n.TopJustify && e !== n.MiddleJustify && e !== n.BottomJustify || (r = "justify"), r);
                            var t = this.displayObject.position;
                            this.alignment === n.TopCenter || this.alignment === n.MiddleCenter || this.alignment === n.BottomCenter ? t.x += (this.size.x - this.displayObject.width) / 2 : this.alignment !== n.TopRight && this.alignment !== n.MiddleRight && this.alignment !== n.BottomRight || (t.x += this.size.x - this.displayObject.width), this.alignment === n.MiddleLeft || this.alignment === n.MiddleCenter || this.alignment === n.MiddleRight ? t.y += (this.size.y - this.displayObject.height) / 2 : this.alignment !== n.BottomLeft && this.alignment !== n.BottomCenter && this.alignment !== n.BottomRight || (t.y += this.size.y - this.displayObject.height), this.displayObject.style.wordWrapWidth = this.size.x
                        }
                        var e, r;
                        f(v(h.prototype), "updateLayout", this).call(this)
                    }
                }, {
                    key: "measure",
                    value: function() {
                        this.cachedTextMetrics = this.getMetrics(), f(v(h.prototype), "measure", this).call(this)
                    }
                }, {
                    key: "preferredWidth",
                    get: function() {
                        return this.cachedTextMetrics.width
                    }
                }, {
                    key: "preferredHeight",
                    get: function() {
                        return this.cachedTextMetrics.height
                    }
                }], r && l(e.prototype, r), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), h
            }(u.u1)
        }
    }
]);