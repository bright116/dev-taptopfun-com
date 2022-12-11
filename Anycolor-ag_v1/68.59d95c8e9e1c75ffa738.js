/*! For license information please see 68.59d95c8e9e1c75ffa738.js.LICENSE.txt */
(self.webpackChunkcolorapp = self.webpackChunkcolorapp || []).push([
    [68], {
        7068: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                Gallery: function() {
                    return Rt
                }
            }), r(1539), r(8674), r(7327), r(5827), r(6699), r(2023), r(2222), r(9070), r(8304), r(489), r(1299), r(2419), r(1703), r(2526), r(1817), r(2165), r(6992), r(8783), r(3948), r(2443), r(9341), r(3706), r(2703), r(4747), r(7042), r(1038), r(4916), r(7601), r(7941), r(5003), r(9337), r(3321);
            var n, o = r(7484),
                i = r.n(o),
                a = r(4242),
                c = r(6194),
                u = r(6806),
                l = r.n(u),
                s = r(1585),
                f = r(6730),
                h = r(1680),
                d = r(1014),
                p = r(9784);

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
                t[t.Unconstrained = 0] = "Unconstrained", t[t.Width = 1] = "Width", t[t.Height = 2] = "Height", t[t.Fit = 3] = "Fit", t[t.Fill = 4] = "Fill"
            }(n || (n = {}));
            var g = Symbol("aspectFromPreferredSize"),
                w = Symbol("aspectFromMinSize"),
                m = function() {
                    function t(e, r, n) {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), v(this, "aspectFitMode", void 0), v(this, "aspectRatio", void 0), v(this, "layoutElement", void 0), v(this, "lastAspectRatio", void 0), v(this, "lastLayoutElement", void 0), this.aspectFitMode = e, this.aspectRatio = r, this.layoutElement = n
                    }
                    var e, r;
                    return e = t, (r = [{
                        key: "isDirty",
                        value: function() {
                            var t, e, r, o, i = this.layoutElement,
                                a = i.minWidth,
                                c = i.preferredWidth,
                                u = i.minHeight,
                                l = i.preferredHeight;
                            return !!(this.lastAspectRatio !== this.aspectRatio || this.aspectFitMode !== n.Unconstrained && (this.aspectRatio === g && ((null === (t = this.lastLayoutElement) || void 0 === t ? void 0 : t.minWidth) !== a || (null === (e = this.lastLayoutElement) || void 0 === e ? void 0 : e.minHeight) !== u) || this.aspectRatio === w && ((null === (r = this.lastLayoutElement) || void 0 === r ? void 0 : r.preferredWidth) !== c || (null === (o = this.lastLayoutElement) || void 0 === o ? void 0 : o.preferredHeight) !== l))) && (this.lastAspectRatio = this.aspectRatio, this.lastLayoutElement = {
                                minWidth: a,
                                preferredWidth: c,
                                minHeight: u,
                                preferredHeight: l
                            }, !0)
                        }
                    }, {
                        key: "setLayout",
                        value: function(t) {
                            var e = t.sizeDelta,
                                r = this.aspectRatio === w ? this.layoutElement.minWidth : Math.max(this.layoutElement.preferredWidth, this.layoutElement.minWidth),
                                o = this.aspectRatio === w ? this.layoutElement.minHeight : Math.max(this.layoutElement.preferredHeight, this.layoutElement.minHeight),
                                i = "number" == typeof this.aspectRatio ? this.aspectRatio : r / o;
                            if (void 0 !== t.parent) {
                                var a = t.parent.size.x,
                                    c = t.parent.size.y,
                                    u = i >= 1 ? r : o * i,
                                    l = i >= 1 ? r / i : o;
                                if (this.aspectFitMode === n.Fill) {
                                    var s = Math.max(a / u, c / l);
                                    e.x = u * s, e.y = l * s
                                } else if (this.aspectFitMode === n.Fit) {
                                    var f = Math.min(a / u, c / l);
                                    e.x = u * f, e.y = l * f
                                }
                            }
                            this.aspectFitMode === n.Width ? (e.x = r, e.y = r / i) : this.aspectFitMode === n.Height && (e.x = o * i, e.y = o), t.sizeDelta = e
                        }
                    }]) && y(e.prototype, r), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t
                }(),
                b = r(7450),
                x = r(4785),
                O = r(2090),
                L = r(618),
                E = r(1128),
                j = r(6020),
                P = r(5650),
                k = r(7493),
                S = r(7133),
                _ = r(888),
                C = r(799),
                T = (r(4819), r(8844)),
                A = r(9658),
                R = r(3379),
                F = r(7827),
                G = r(2289),
                N = r(7715),
                B = r(4810);

            function D(t) {
                return D = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, D(t)
            }

            function W(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function M() {
                M = function() {
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
                    var o = e && e.prototype instanceof f ? e : f,
                        i = Object.create(o.prototype),
                        a = new L(n || []);
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
                                    var c = b(a, r);
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
                                var u = l(t, e, r);
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
                var s = {};

                function f() {}

                function h() {}

                function d() {}
                var p = {};
                c(p, o, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    v = y && y(y(E([])));
                v && v !== e && r.call(v, o) && (p = v);
                var g = d.prototype = f.prototype = Object.create(p);

                function w(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        c(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function m(t, e) {
                    function n(o, i, a, c) {
                        var u = l(t[o], t, i);
                        if ("throw" !== u.type) {
                            var s = u.arg,
                                f = s.value;
                            return f && "object" == D(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                n("next", t, a, c)
                            }), (function(t) {
                                n("throw", t, a, c)
                            })) : e.resolve(f).then((function(t) {
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

                function b(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, b(t, e), "throw" === e.method)) return s;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return s
                    }
                    var n = l(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, s;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, s) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, s)
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

                function L(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(x, this), this.reset(!0)
                }

                function E(t) {
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
                        next: j
                    }
                }

                function j() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return h.prototype = d, c(g, "constructor", d), c(d, "constructor", h), h.displayName = c(d, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, c(t, a, "GeneratorFunction")), t.prototype = Object.create(g), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, w(m.prototype), c(m.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = m, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new m(u(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, w(g), c(g, a, "Generator"), c(g, o, (function() {
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
                }, t.values = E, L.prototype = {
                    constructor: L,
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
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, s) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), s
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), O(r), s
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
                            iterator: E(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), s
                    }
                }, t
            }

            function I(t, e, r, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void r(t)
                }
                c.done ? e(u) : Promise.resolve(u).then(n, o)
            }

            function H(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(e, r);

                        function a(t) {
                            I(i, n, o, a, c, "next", t)
                        }

                        function c(t) {
                            I(i, n, o, a, c, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function U(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function z(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? U(Object(r), !0).forEach((function(e) {
                        X(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : U(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function q(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function Y() {
                return Y = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, r) {
                    var n = Z(t, e);
                    if (n) {
                        var o = Object.getOwnPropertyDescriptor(n, e);
                        return o.get ? o.get.call(arguments.length < 3 ? t : r) : o.value
                    }
                }, Y.apply(this, arguments)
            }

            function Z(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = K(t)););
                return t
            }

            function V(t, e) {
                return V = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, V(t, e)
            }

            function $(t, e) {
                if (e && ("object" === D(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return J(t)
            }

            function J(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function K(t) {
                return K = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, K(t)
            }

            function X(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            var Q = function(t) {
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
                        }), e && V(t, e)
                    }(l, t);
                    var e, r, n, o, i, c, u = (i = l, c = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, e = K(i);
                        if (c) {
                            var r = K(this).constructor;
                            t = Reflect.construct(e, arguments, r)
                        } else t = e.apply(this, arguments);
                        return $(this, t)
                    });

                    function l() {
                        var t;
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, l), X(J(t = u.call(this)), "shown", new a.MZ), X(J(t), "hidden", new a.MZ), X(J(t), "continue", new a.MZ), X(J(t), "clean", new a.MZ), X(J(t), "centeringContainer", void 0), X(J(t), "drawingContainer", void 0), X(J(t), "selectionBox", void 0), X(J(t), "selectionList", void 0), X(J(t), "closeButton", void 0), X(J(t), "shareButton", void 0), X(J(t), "drawing", void 0), X(J(t), "share", void 0), t.displayObject.interactive = !0, t.centeringContainer = t.addChild(new O.d), t.centeringContainer.anchorTo(L.Uq.Center, void 0, {
                            x: 1600,
                            y: 1200
                        }), t.drawingContainer = t.centeringContainer.addChild(new O.d), t.drawingContainer.displayObject.interactive = !0, t.selectionBox = t.centeringContainer.addChild(new F.N(p.Mo["ui/Button_bg_box"], 54, 54, 54, 54)), t.selectionBox.displayObject.interactive = !0, t.selectionList = t.selectionBox.addChild(new O.d), t.selectionList.anchorTo(L.Uq.Fill, {
                            x: 40,
                            y: 40
                        }), t.selectionList.layoutController = new x.D7(x.Nm.Vertical, {
                            x: 0,
                            y: 10
                        }, x.WD.Center, x.xM.Center, !1);
                        var e = t.selectionList.addChild(new k.sm("Continue", k.H.TopLeft, z(z({}, C.h), {}, {
                            fontSize: 64
                        })));
                        e.displayObject.cursor = "pointer", e.displayObject.interactive = !0, e.displayObject.on("pointertap", (function() {
                            t.drawing && t.continue.emit(t.drawing)
                        }));
                        var r = t.selectionList.addChild(new k.sm("Clean", k.H.TopLeft, z(z({}, C.h), {}, {
                            fontSize: 64
                        })));
                        return r.displayObject.cursor = "pointer", r.displayObject.interactive = !0, r.displayObject.on("pointertap", (function() {
                            t.drawing && t.clean.emit(t.drawing)
                        })), t.shareButton = t.selectionList.addChild(new k.sm("Share", k.H.TopLeft, z(z({}, C.h), {}, {
                            fontSize: 64
                        }))), t.shareButton.displayObject.cursor = "pointer", t.shareButton.displayObject.interactive = !0, t.shareButton.displayObject.on("pointertap", (function() {
                            return t.shareDrawing()
                        })), t.shareButton.visible = !1, t.closeButton = t.selectionBox.addChild(new R.y(p.Mo["ui/shut_icon"])), t.closeButton.anchorTo(L.Uq.TopRight, {
                            x: 40,
                            y: 40
                        }), t.closeButton.tapOnly = !0, t.closeButton.tapped.connect((function() {
                            return t.hide()
                        })), t.displayObject.on("pointertap", (function(e) {
                            e.target === t.displayObject && t.hide()
                        })), N.pixi.orientationChanged.connect((function() {
                            return t.orientationChanged()
                        })), t.orientationChanged(), t
                    }
                    return e = l, r = [{
                        key: "orientationChanged",
                        value: function() {
                            N.pixi.isPortrait() ? (this.drawingContainer.anchorTo(L.Uq.TopCenter, void 0, {
                                x: 800,
                                y: 800
                            }), this.selectionBox.anchorTo(L.Uq.BottomCenter, void 0, {
                                x: 800,
                                y: 400
                            })) : (this.drawingContainer.anchorTo(L.Uq.LeftCenter, void 0, {
                                x: 800,
                                y: 800
                            }), this.selectionBox.anchorTo(L.Uq.RightCenter, void 0, {
                                x: 800,
                                y: 400
                            }))
                        }
                    }, {
                        key: "show",
                        value: (o = H(M().mark((function t(e) {
                            var r = this;
                            return M().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        this.drawing = e;
                                        try {
                                            N.worksOfArt.loadWorkOfArtThumbnail(e).then((function(t) {
                                                return (0, B.nm)(e, t)
                                            })).then((function(t) {
                                                var e = new d.TC;
                                                e.beginFill(0, .33), e.drawRoundedRect(5, t.height - 15, t.width - 10, 45, 5), e.beginFill(16777215, 1), e.lineStyle(10, 11513517, 1, 1), e.drawRoundedRect(0, 0, t.width, t.height, 1);
                                                var n = r.drawingContainer.addChild(new G.s(e));
                                                n.anchorTo(L.Uq.Fill), n.addChild(new j.I(t))
                                            })).then(H(M().mark((function t() {
                                                return M().wrap((function(t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                        case 0:
                                                            if (void 0 === navigator.share) {
                                                                t.next = 5;
                                                                break
                                                            }
                                                            return t.next = 3, N.worksOfArt.getShare(r.drawingContainer.displayObject);
                                                        case 3:
                                                            r.share = t.sent, r.shareButton.visible = void 0 === navigator.canShare || navigator.canShare(r.share);
                                                        case 5:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }), t)
                                            }))))
                                        } catch (t) {}
                                        this.shown.emit();
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function(t) {
                            return o.apply(this, arguments)
                        })
                    }, {
                        key: "updateLayout",
                        value: function() {
                            Y(K(l.prototype), "updateLayout", this).call(this), this.hitArea = new A.Ae(0, 0, N.pixi.stageWidth, N.pixi.stageHeight)
                        }
                    }, {
                        key: "hide",
                        value: function() {
                            delete this.drawing, delete this.share;
                            var t, e = function(t, e) {
                                var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                                if (!r) {
                                    if (Array.isArray(t) || (r = function(t, e) {
                                            if (t) {
                                                if ("string" == typeof t) return W(t, e);
                                                var r = Object.prototype.toString.call(t).slice(8, -1);
                                                return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? W(t, e) : void 0
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
                            }(this.drawingContainer.removeAllChildren());
                            try {
                                for (e.s(); !(t = e.n()).done;) t.value.displayObject.destroy({
                                    children: !0
                                })
                            } catch (t) {
                                e.e(t)
                            } finally {
                                e.f()
                            }
                            this.shareButton.visible = !1, this.hidden.emit()
                        }
                    }, {
                        key: "shareDrawing",
                        value: (n = H(M().mark((function t() {
                            return M().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return T.Z.gameplayStop(), t.prev = 1, t.next = 4, navigator.share(this.share);
                                    case 4:
                                        t.next = 9;
                                        break;
                                    case 6:
                                        t.prev = 6, t.t0 = t.catch(1);
                                    case 9:
                                        T.Z.gameplayStart();
                                    case 10:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [1, 6]
                            ])
                        }))), function() {
                            return n.apply(this, arguments)
                        })
                    }], r && q(e.prototype, r), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), l
                }(O.d),
                tt = r(286),
                et = r(6710),
                rt = r(8942),
                nt = r(9602);

            function ot(t) {
                return ot = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, ot(t)
            }

            function it() {
                it = function() {
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
                    var o = e && e.prototype instanceof f ? e : f,
                        i = Object.create(o.prototype),
                        a = new L(n || []);
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
                                    var c = b(a, r);
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
                                var u = l(t, e, r);
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
                var s = {};

                function f() {}

                function h() {}

                function d() {}
                var p = {};
                c(p, o, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    v = y && y(y(E([])));
                v && v !== e && r.call(v, o) && (p = v);
                var g = d.prototype = f.prototype = Object.create(p);

                function w(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        c(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function m(t, e) {
                    function n(o, i, a, c) {
                        var u = l(t[o], t, i);
                        if ("throw" !== u.type) {
                            var s = u.arg,
                                f = s.value;
                            return f && "object" == ot(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                n("next", t, a, c)
                            }), (function(t) {
                                n("throw", t, a, c)
                            })) : e.resolve(f).then((function(t) {
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

                function b(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, b(t, e), "throw" === e.method)) return s;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return s
                    }
                    var n = l(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, s;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, s) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, s)
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

                function L(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(x, this), this.reset(!0)
                }

                function E(t) {
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
                        next: j
                    }
                }

                function j() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return h.prototype = d, c(g, "constructor", d), c(d, "constructor", h), h.displayName = c(d, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, c(t, a, "GeneratorFunction")), t.prototype = Object.create(g), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, w(m.prototype), c(m.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = m, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new m(u(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, w(g), c(g, a, "Generator"), c(g, o, (function() {
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
                }, t.values = E, L.prototype = {
                    constructor: L,
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
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, s) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), s
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), O(r), s
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
                            iterator: E(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), s
                    }
                }, t
            }

            function at(t, e, r, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void r(t)
                }
                c.done ? e(u) : Promise.resolve(u).then(n, o)
            }

            function ct(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(e, r);

                        function a(t) {
                            at(i, n, o, a, c, "next", t)
                        }

                        function c(t) {
                            at(i, n, o, a, c, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function ut(t) {
                return lt.apply(this, arguments)
            }

            function lt() {
                return (lt = ct(it().mark((function t(e) {
                    var r, n;
                    return it().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (r = "recolor/".concat(e.id, "/").concat(e.id, ".png"), void 0 !== rt.kN[r]) {
                                    t.next = 8;
                                    break
                                }
                                return t.next = 4, (0, nt.po)(r);
                            case 4:
                                return n = t.sent, t.abrupt("return", et.xE.fromLoader(n, r));
                            case 8:
                                return t.abrupt("return", rt.kN[r]);
                            case 9:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function st(t) {
                return st = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, st(t)
            }

            function ft() {
                ft = function() {
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
                    var o = e && e.prototype instanceof f ? e : f,
                        i = Object.create(o.prototype),
                        a = new L(n || []);
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
                                    var c = b(a, r);
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
                                var u = l(t, e, r);
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
                var s = {};

                function f() {}

                function h() {}

                function d() {}
                var p = {};
                c(p, o, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    v = y && y(y(E([])));
                v && v !== e && r.call(v, o) && (p = v);
                var g = d.prototype = f.prototype = Object.create(p);

                function w(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        c(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function m(t, e) {
                    function n(o, i, a, c) {
                        var u = l(t[o], t, i);
                        if ("throw" !== u.type) {
                            var s = u.arg,
                                f = s.value;
                            return f && "object" == st(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                n("next", t, a, c)
                            }), (function(t) {
                                n("throw", t, a, c)
                            })) : e.resolve(f).then((function(t) {
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

                function b(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, b(t, e), "throw" === e.method)) return s;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return s
                    }
                    var n = l(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, s;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, s) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, s)
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

                function L(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(x, this), this.reset(!0)
                }

                function E(t) {
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
                        next: j
                    }
                }

                function j() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return h.prototype = d, c(g, "constructor", d), c(d, "constructor", h), h.displayName = c(d, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, c(t, a, "GeneratorFunction")), t.prototype = Object.create(g), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, w(m.prototype), c(m.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = m, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new m(u(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, w(g), c(g, a, "Generator"), c(g, o, (function() {
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
                }, t.values = E, L.prototype = {
                    constructor: L,
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
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, s) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), s
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), O(r), s
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
                            iterator: E(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), s
                    }
                }, t
            }

            function ht(t, e, r, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void r(t)
                }
                c.done ? e(u) : Promise.resolve(u).then(n, o)
            }

            function dt(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(e, r);

                        function a(t) {
                            ht(i, n, o, a, c, "next", t)
                        }

                        function c(t) {
                            ht(i, n, o, a, c, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function pt(t) {
                return yt.apply(this, arguments)
            }

            function yt() {
                return (yt = dt(ft().mark((function t(e) {
                    var r, n;
                    return ft().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (r = "aniway/".concat(e.id, ".png"), void 0 !== rt.kN[r]) {
                                    t.next = 8;
                                    break
                                }
                                return t.next = 4, (0, nt.po)(r);
                            case 4:
                                return n = t.sent, t.abrupt("return", et.xE.fromLoader(n, r));
                            case 8:
                                return t.abrupt("return", rt.kN[r]);
                            case 9:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
            var vt = r(2779),
                gt = r(1754);

            function wt(t) {
                return wt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, wt(t)
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

            function bt(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? mt(Object(r), !0).forEach((function(e) {
                        Tt(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : mt(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function xt(t, e) {
                var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!r) {
                    if (Array.isArray(t) || (r = function(t, e) {
                            if (t) {
                                if ("string" == typeof t) return Ot(t, e);
                                var r = Object.prototype.toString.call(t).slice(8, -1);
                                return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Ot(t, e) : void 0
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
            }

            function Ot(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function Lt() {
                Lt = function() {
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
                    var o = e && e.prototype instanceof f ? e : f,
                        i = Object.create(o.prototype),
                        a = new L(n || []);
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
                                    var c = b(a, r);
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
                                var u = l(t, e, r);
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
                var s = {};

                function f() {}

                function h() {}

                function d() {}
                var p = {};
                c(p, o, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    v = y && y(y(E([])));
                v && v !== e && r.call(v, o) && (p = v);
                var g = d.prototype = f.prototype = Object.create(p);

                function w(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        c(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function m(t, e) {
                    function n(o, i, a, c) {
                        var u = l(t[o], t, i);
                        if ("throw" !== u.type) {
                            var s = u.arg,
                                f = s.value;
                            return f && "object" == wt(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                n("next", t, a, c)
                            }), (function(t) {
                                n("throw", t, a, c)
                            })) : e.resolve(f).then((function(t) {
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

                function b(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, b(t, e), "throw" === e.method)) return s;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return s
                    }
                    var n = l(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, s;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, s) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, s)
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

                function L(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(x, this), this.reset(!0)
                }

                function E(t) {
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
                        next: j
                    }
                }

                function j() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return h.prototype = d, c(g, "constructor", d), c(d, "constructor", h), h.displayName = c(d, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, c(t, a, "GeneratorFunction")), t.prototype = Object.create(g), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, w(m.prototype), c(m.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = m, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new m(u(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, w(g), c(g, a, "Generator"), c(g, o, (function() {
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
                }, t.values = E, L.prototype = {
                    constructor: L,
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
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, s) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), s
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), O(r), s
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
                            iterator: E(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), s
                    }
                }, t
            }

            function Et(t, e, r, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void r(t)
                }
                c.done ? e(u) : Promise.resolve(u).then(n, o)
            }

            function jt(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(e, r);

                        function a(t) {
                            Et(i, n, o, a, c, "next", t)
                        }

                        function c(t) {
                            Et(i, n, o, a, c, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function Pt(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function kt(t, e) {
                return kt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, kt(t, e)
            }

            function St(t, e) {
                if (e && ("object" === wt(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return _t(t)
            }

            function _t(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function Ct(t) {
                return Ct = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, Ct(t)
            }

            function Tt(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            var At = (0, S.v)(O.d),
                Rt = function(t) {
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
                        }), e && kt(t, e)
                    }(w, t);
                    var e, r, o, s, y, v = (s = w, y = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, e = Ct(s);
                        if (y) {
                            var r = Ct(this).constructor;
                            t = Reflect.construct(e, arguments, r)
                        } else t = e.apply(this, arguments);
                        return St(this, t)
                    });

                    function w() {
                        var t;
                        return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, w), Tt(_t(t = v.call(this)), "drawingSelected", new a.MZ), Tt(_t(t), "stage", void 0), Tt(_t(t), "appLogo", void 0), Tt(_t(t), "drawingsContainer", void 0), Tt(_t(t), "selectedPopup", void 0), Tt(_t(t), "drawings", []), Tt(_t(t), "loadedTextures", []), Tt(_t(t), "drawingsBlur", [new f.T]), Tt(_t(t), "drawingsBlurTween", void 0), t.stage = new P.A(_t(t)), t.stage.anchorTo(L.Uq.Fill), t.stage.layoutController = new b.I(b.J.PreferredSize, b.J.PreferredSize, {
                            minHeight: 0,
                            minWidth: 0,
                            get preferredHeight() {
                                return N.pixi.stageHeight
                            },
                            get preferredWidth() {
                                return N.pixi.stageWidth
                            }
                        }), t.appLogo = t.stage.addChild(new j.I(p.Mo["loading/anycolor_logo"])), t.appLogo.anchorTo(L.Uq.TopCenter, {
                            x: 0,
                            y: 40
                        }), t.drawingsContainer = t.stage.addChild(new E.X(E.I.Vertical)), t.drawingsContainer.anchor = (0, L.w1)(L.Uq.Fill), t.drawingsContainer.offset = {
                            min: {
                                x: 10,
                                y: t.appLogo.size.y + 80
                            },
                            max: {
                                x: -10,
                                y: -10
                            }
                        }, t.drawingsContainer.layoutController = new x.D7(x.Nm.Horizontal, {
                            x: 40,
                            y: 30
                        }, x.WD.Center), t.selectedPopup = t.stage.addChild(new Q), t.selectedPopup.anchorTo(L.Uq.Fill), t.selectedPopup.shown.connect((function() {
                            t.drawingsContainer.displayObject.filters = t.drawingsBlur, t.selectedPopup.visible = !0, t.drawingsBlurTween && (0, c.Od)(t.drawingsBlurTween), t.drawingsBlur[0].blur = 0, t.drawingsBlurTween = new c.kX(t.drawingsBlur[0]).to({
                                blur: 6
                            }, 50).easing(c.oY.Quadratic.In).start()
                        })), t.selectedPopup.hidden.connect((function() {
                            t.selectedPopup.visible = !1, t.drawingsContainer.displayObject.filters = null
                        })), t.selectedPopup.continue.connect(function() {
                            var e = jt(Lt().mark((function e(r) {
                                var n;
                                return Lt().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t.selectedPopup.hide(), e.prev = 1, e.next = 4, N.worksOfArt.loadWorkOfArtHistory(r);
                                        case 4:
                                            n = e.sent, e.next = 9;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(1);
                                        case 9:
                                            t.drawingSelected.emit(r, n);
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [1, 7]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()), t.selectedPopup.clean.connect((function(e) {
                            t.selectedPopup.hide(), t.drawingSelected.emit(e)
                        })), t.selectedPopup.hide(), t.on("added", (function() {
                            return t.loadAndDisplay()
                        })), t.on("removed", (function() {
                            return t.unload()
                        })), t
                    }
                    return e = w, r = [{
                        key: "loadAndDisplay",
                        value: (o = jt(Lt().mark((function t() {
                            var e, r, n, o, i, a, c, l, s, f, h, d, p, y, v, g, w, m, b, x, O, L;
                            return Lt().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return u.GameAnalytics.addDesignEvent("View:Gallery"), e = this.drawingsContainer.addChild(new k.sm("Loading...", void 0, C.h)), r = [], t.prev = 3, t.next = 6, N.worksOfArt.getSavedWorksOfArtIds();
                                    case 6:
                                        if (t.t1 = n = t.sent, t.t0 = null !== t.t1, !t.t0) {
                                            t.next = 10;
                                            break
                                        }
                                        t.t0 = void 0 !== n;
                                    case 10:
                                        if (!t.t0) {
                                            t.next = 14;
                                            break
                                        }
                                        t.t2 = n, t.next = 15;
                                        break;
                                    case 14:
                                        t.t2 = [];
                                    case 15:
                                        r = t.t2, t.next = 20;
                                        break;
                                    case 18:
                                        t.prev = 18, t.t3 = t.catch(3);
                                    case 20:
                                        return t.next = 22, fetch(new Request("gallery.json", {
                                            credentials: "same-origin"
                                        }));
                                    case 22:
                                        if (!(o = t.sent).ok) {
                                            t.next = 31;
                                            break
                                        }
                                        return t.next = 26, o.json();
                                    case 26:
                                        if (i = t.sent, e.destroy(!0), (0, tt.$)(i)) {
                                            a = Date.now(), c = i.drawings.filter((function(t) {
                                                return !!t.unlocks && Date.parse(t.unlocks) > a
                                            })), l = i.drawings.filter((function(t) {
                                                return !t.unlocks || Date.parse(t.unlocks) <= a
                                            })), s = l.filter((function(t) {
                                                var e;
                                                return !(null !== (e = t.pay) && void 0 !== e && e)
                                            })), f = l.filter((function(t) {
                                                var e;
                                                return null !== (e = t.pay) && void 0 !== e && e
                                            })), h = xt(s);
                                            try {
                                                for (h.s(); !(d = h.n()).done;) p = d.value, y = r.includes(p.id), v = this.drawingsContainer.addChild(this.createPreview(p, y)), this.drawings.push(v)
                                            } catch (t) {
                                                h.e(t)
                                            } finally {
                                                h.f()
                                            }
                                            c.length > 0 && (g = c.reduce((function(t, e) {
                                                return Date.parse(t.unlocks) < Date.parse(e.unlocks) ? t : e
                                            })), w = this.drawingsContainer.addChild(this.createTeaser(g)), this.drawings.push(w)), m = xt(f);
                                            try {
                                                for (m.s(); !(b = m.n()).done;) x = b.value, O = r.includes(x.id), L = this.drawingsContainer.addChild(this.createPreview(x, O)), this.drawings.push(L)
                                            } catch (t) {
                                                m.e(t)
                                            } finally {
                                                m.f()
                                            }
                                        }
                                        t.next = 32;
                                        break;
                                    case 31:
                                        e.text = "Error loading gallery.";
                                    case 32:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [3, 18]
                            ])
                        }))), function() {
                            return o.apply(this, arguments)
                        })
                    }, {
                        key: "createTeaser",
                        value: function(t) {
                            var e, r = i()(),
                                o = i()(t.unlocks),
                                a = i().duration(o.diff(r)),
                                c = new d.TC;
                            c.beginFill(0, .33), c.lineStyle(void 0), c.drawRoundedRect(5, 385, 390, 30, 5), c.beginFill(16117857, 1), c.lineStyle(10, 11513517, 1, 0), c.drawRoundedRect(0, 0, 400, 400, 10);
                            var u = new O.d(c);
                            u.preferredWidth = 400, u.preferredHeight = 400;
                            var l, s = u.addChild(new O.d);
                            return s.anchorTo(L.Uq.Fill, {
                                x: 20,
                                y: 20
                            }), t.type === tt.g.Aniway ? l = pt(t) : t.type === tt.g.ReColor && (l = ut(t)), null === (e = l) || void 0 === e || e.then((function(t) {
                                var e = new j.I(t);
                                e.layoutController = new m(n.Fit, g, e), e.blendMode = h.T$.MULTIPLY, e.alpha = .2, s.addChild(e)
                            })), u.addChild(new k.sm("NEW! UNLOCKS ".concat(a.humanize(!0).toUpperCase()), k.H.MiddleCenter, bt(bt({}, C.h), {}, {
                                fontSize: 64,
                                fontWeight: "bolder",
                                lineJoin: "round",
                                stroke: "#9618a0",
                                strokeThickness: 15,
                                fill: "#f3b175",
                                wordWrap: !0
                            }))).anchorTo(L.Uq.Fill, {
                                x: 37,
                                y: 37
                            }), u
                        }
                    }, {
                        key: "createPreview",
                        value: function(t, e) {
                            var r, o, i, a = this,
                                c = new d.TC;
                            c.beginFill(0, .33), c.lineStyle(void 0), c.drawRoundedRect(5, 385, 390, 30, 5), c.beginFill(16777215, 1), c.lineStyle(10, 11513517, 1, 0), c.drawRoundedRect(0, 0, 400, 400, 10);
                            var s = new At(c);
                            s.preferredWidth = 400, s.preferredHeight = 400, s.interactive = !0, s.cursor = "pointer";
                            var f, h = s.addChild(new O.d);
                            h.anchorTo(L.Uq.Fill, {
                                x: 20,
                                y: 20
                            });
                            try {
                                e && (f = N.worksOfArt.loadWorkOfArtThumbnail(t).then((function(e) {
                                    return (0, B.nm)(t, e)
                                })))
                            } catch (t) {}
                            t.type === tt.g.Aniway ? null !== (r = f) && void 0 !== r || (f = pt(t)) : t.type === tt.g.ReColor && (null !== (o = f) && void 0 !== o || (f = ut(t))), null === (i = f) || void 0 === i || i.then((function(t) {
                                var e = new j.I(t);
                                e.layoutController = new m(n.Fit, g, e), h.addChild(e)
                            })), s.tapOnly = !0;
                            var y = s.tapped.connect((function() {
                                    e ? a.selectedPopup.show(t) : a.drawingSelected.emit(t)
                                })),
                                v = "drawing_".concat(t.type, "_").concat(t.id);
                            if (t.pay && !(0, vt.K)(v)) {
                                var w = _.ZP.getRewardedAction();
                                y.enabled = !1;
                                var b = s.addChild(new O.d);
                                b.anchorTo(L.Uq.Fill);
                                var x = new j.I(p.Mo["ui/playADcorner"]);
                                x.anchorTo(L.Uq.TopRight, {
                                    x: 0,
                                    y: 0
                                }, void 0, !0), b.addChild(x);
                                var E = s.tapped.connect(jt(Lt().mark((function e() {
                                    var r, n, o;
                                    return Lt().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return E.disconnect(), r = l().EGAAdType.Undefined, w === _.Us.VideoAd && (r = l().EGAAdType.RewardedVideo), n = gt.Oz, e.prev = 4, e.next = 7, _.ZP.consumeRewardedAction(w);
                                            case 7:
                                                o = e.sent, n = o.mediator, u.GameAnalytics.addDesignEvent("Purchase:Drawing:".concat(t.id), void 0, {
                                                    ad: "true"
                                                }), u.GameAnalytics.addAdEvent(l().EGAAdAction.Show, r, n, "Purchased drawing", {
                                                    name: t.id
                                                }), e.next = 17;
                                                break;
                                            case 13:
                                                e.prev = 13, e.t0 = e.catch(4), u.GameAnalytics.addDesignEvent("Purchase:Drawing:".concat(t.id), void 0, {
                                                    ad: "false"
                                                }), e.t0 instanceof _.sN && u.GameAnalytics.addAdEvent(l().EGAAdAction.FailedShow, r, e.t0.mediator, "Purchased drawing", {
                                                    name: t.id
                                                });
                                            case 17:
                                                return e.prev = 17, u.GameAnalytics.addAdEvent(l().EGAAdAction.RewardReceived, r, n, "Purchased drawing", {
                                                    name: t.id
                                                }), y.enabled = !0, b.destroy(!0), (0, vt.n)(v), e.finish(17);
                                            case 24:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [4, 13, 17, 24]
                                    ])
                                }))))
                            }
                            return s
                        }
                    }, {
                        key: "unload",
                        value: function() {
                            var t, e = xt(this.drawings);
                            try {
                                for (e.s(); !(t = e.n()).done;) t.value.destroy(!0)
                            } catch (t) {
                                e.e(t)
                            } finally {
                                e.f()
                            }
                            this.drawings.length = 0;
                            var r, n = xt(this.loadedTextures);
                            try {
                                for (n.s(); !(r = n.n()).done;) r.value.destroy(!0)
                            } catch (t) {
                                n.e(t)
                            } finally {
                                n.f()
                            }
                            this.loadedTextures.length = 0
                        }
                    }], r && Pt(e.prototype, r), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), w
                }(s.W2)
        },
        2289: function(t, e, r) {
            "use strict";
            r.d(e, {
                s: function() {
                    return m
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
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = f(t)););
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
                return s(t)
            }

            function s(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function f(t) {
                return f = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, f(t)
            }

            function h(t, e, r) {
                ! function(t, e) {
                    if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
                }(t, e), e.set(t, r)
            }

            function d(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function p(t, e, r) {
                return function(t, e, r) {
                    if (e.set) e.set.call(t, r);
                    else {
                        if (!e.writable) throw new TypeError("attempted to set read only private field");
                        e.value = r
                    }
                }(t, v(t, e, "set"), r), r
            }

            function y(t, e) {
                return function(t, e) {
                    return e.get ? e.get.call(t) : e.value
                }(t, v(t, e, "get"))
            }

            function v(t, e, r) {
                if (!e.has(t)) throw new TypeError("attempted to " + r + " private field on non-instance");
                return e.get(t)
            }
            var g = new WeakMap,
                w = new WeakMap,
                m = function(t) {
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
                        var t, e = f(n);
                        if (o) {
                            var r = f(this).constructor;
                            t = Reflect.construct(e, arguments, r)
                        } else t = e.apply(this, arguments);
                        return l(this, t)
                    });

                    function v(t) {
                        var e;
                        return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, v), d(s(e = c.call(this, t)), "minWidth", 0), d(s(e), "minHeight", 0), h(s(e), g, {
                            writable: !0,
                            value: void 0
                        }), h(s(e), w, {
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
                            this.layoutDirty && (this.displayObject.scale.set(1), this.displayObject.width = this.size.x, this.displayObject.height = this.size.y), a(f(v.prototype), "updateLayout", this).call(this)
                        }
                    }, {
                        key: "preferredWidth",
                        get: function() {
                            var t;
                            return null !== (t = y(this, g)) && void 0 !== t ? t : this.displayObject.width
                        },
                        set: function(t) {
                            p(this, g, t)
                        }
                    }, {
                        key: "preferredHeight",
                        get: function() {
                            var t;
                            return null !== (t = y(this, w)) && void 0 !== t ? t : this.displayObject.height
                        },
                        set: function(t) {
                            p(this, w, t)
                        }
                    }]) && i(e.prototype, r), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), v
                }(n.u1)
        },
        4964: function(t, e, r) {
            var n = r(5112)("match");
            t.exports = function(t) {
                var e = /./;
                try {
                    "/./" [t](e)
                } catch (r) {
                    try {
                        return e[n] = !1, "/./" [t](e)
                    } catch (t) {}
                }
                return !1
            }
        },
        7850: function(t, e, r) {
            var n = r(111),
                o = r(4326),
                i = r(5112)("match");
            t.exports = function(t) {
                var e;
                return n(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" == o(t))
            }
        },
        3929: function(t, e, r) {
            var n = r(7850),
                o = TypeError;
            t.exports = function(t) {
                if (n(t)) throw o("The method doesn't accept regular expressions");
                return t
            }
        },
        2023: function(t, e, r) {
            "use strict";
            var n = r(2109),
                o = r(1702),
                i = r(3929),
                a = r(4488),
                c = r(1340),
                u = r(4964),
                l = o("".indexOf);
            n({
                target: "String",
                proto: !0,
                forced: !u("includes")
            }, {
                includes: function(t) {
                    return !!~l(c(a(this)), c(i(t)), arguments.length > 1 ? arguments[1] : void 0)
                }
            })
        }
    }
]);