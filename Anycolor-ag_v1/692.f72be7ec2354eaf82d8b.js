/*! For license information please see 692.f72be7ec2354eaf82d8b.js.LICENSE.txt */
(self.webpackChunkcolorapp = self.webpackChunkcolorapp || []).push([
    [692], {
        1692: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                ColoringUI: function() {
                    return bt
                }
            }), n(9070), n(8304), n(489), n(1539), n(1299), n(2419), n(1703), n(7941), n(2526), n(7327), n(5003), n(4747), n(9337), n(3321), n(1817), n(2165), n(6992), n(8783), n(3948);
            var r, o, i, a = n(4242),
                l = n(1585),
                c = n(618),
                u = n(9784),
                s = n(3379),
                f = n(5650),
                h = n(7493),
                d = n(7450),
                p = n(7715),
                y = n(1754),
                v = n(2555),
                m = n(8381),
                g = (n(4819), n(7042), n(4916), n(7601), n(8674), n(2443), n(9341), n(3706), n(2703), n(2420), n(2772), n(1038), n(1249), n(3290), n(4129), n(9658)),
                b = n(8942),
                w = n(6730),
                x = n(6177),
                O = n(2090),
                P = n(7823),
                T = n(9747),
                C = n(3925),
                j = n(1128),
                M = n(9602),
                E = n(6020),
                k = n(4785),
                N = n(7827),
                S = n(7133),
                z = n(888),
                A = n(7117),
                I = n(4392),
                B = n(799),
                U = n(2779),
                L = n(6806),
                _ = n.n(L);

            function q(t) {
                return q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, q(t)
            }

            function D() {
                D = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    n = e.hasOwnProperty,
                    r = "function" == typeof Symbol ? Symbol : {},
                    o = r.iterator || "@@iterator",
                    i = r.asyncIterator || "@@asyncIterator",
                    a = r.toStringTag || "@@toStringTag";

                function l(t, e, n) {
                    return Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    l({}, "")
                } catch (t) {
                    l = function(t, e, n) {
                        return t[e] = n
                    }
                }

                function c(t, e, n, r) {
                    var o = e && e.prototype instanceof f ? e : f,
                        i = Object.create(o.prototype),
                        a = new P(r || []);
                    return i._invoke = function(t, e, n) {
                        var r = "suspendedStart";
                        return function(o, i) {
                            if ("executing" === r) throw new Error("Generator is already running");
                            if ("completed" === r) {
                                if ("throw" === o) throw i;
                                return {
                                    value: void 0,
                                    done: !0
                                }
                            }
                            for (n.method = o, n.arg = i;;) {
                                var a = n.delegate;
                                if (a) {
                                    var l = w(a, n);
                                    if (l) {
                                        if (l === s) continue;
                                        return l
                                    }
                                }
                                if ("next" === n.method) n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if ("suspendedStart" === r) throw r = "completed", n.arg;
                                    n.dispatchException(n.arg)
                                } else "return" === n.method && n.abrupt("return", n.arg);
                                r = "executing";
                                var c = u(t, e, n);
                                if ("normal" === c.type) {
                                    if (r = n.done ? "completed" : "suspendedYield", c.arg === s) continue;
                                    return {
                                        value: c.arg,
                                        done: n.done
                                    }
                                }
                                "throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg)
                            }
                        }
                    }(t, n, a), i
                }

                function u(t, e, n) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, n)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                t.wrap = c;
                var s = {};

                function f() {}

                function h() {}

                function d() {}
                var p = {};
                l(p, o, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    v = y && y(y(T([])));
                v && v !== e && n.call(v, o) && (p = v);
                var m = d.prototype = f.prototype = Object.create(p);

                function g(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        l(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function b(t, e) {
                    function r(o, i, a, l) {
                        var c = u(t[o], t, i);
                        if ("throw" !== c.type) {
                            var s = c.arg,
                                f = s.value;
                            return f && "object" == q(f) && n.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                r("next", t, a, l)
                            }), (function(t) {
                                r("throw", t, a, l)
                            })) : e.resolve(f).then((function(t) {
                                s.value = t, a(s)
                            }), (function(t) {
                                return r("throw", t, a, l)
                            }))
                        }
                        l(c.arg)
                    }
                    var o;
                    this._invoke = function(t, n) {
                        function i() {
                            return new e((function(e, o) {
                                r(t, n, e, o)
                            }))
                        }
                        return o = o ? o.then(i, i) : i()
                    }
                }

                function w(t, e) {
                    var n = t.iterator[e.method];
                    if (void 0 === n) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, w(t, e), "throw" === e.method)) return s;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return s
                    }
                    var r = u(n, t.iterator, e.arg);
                    if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, s;
                    var o = r.arg;
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

                function P(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(x, this), this.reset(!0)
                }

                function T(t) {
                    if (t) {
                        var e = t[o];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var r = -1,
                                i = function e() {
                                    for (; ++r < t.length;)
                                        if (n.call(t, r)) return e.value = t[r], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return i.next = i
                        }
                    }
                    return {
                        next: C
                    }
                }

                function C() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return h.prototype = d, l(m, "constructor", d), l(d, "constructor", h), h.displayName = l(d, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, l(t, a, "GeneratorFunction")), t.prototype = Object.create(m), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, g(b.prototype), l(b.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = b, t.async = function(e, n, r, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new b(c(e, n, r, o), i);
                    return t.isGeneratorFunction(n) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, g(m), l(m, a, "Generator"), l(m, o, (function() {
                    return this
                })), l(m, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = [];
                    for (var n in t) e.push(n);
                    return e.reverse(),
                        function n() {
                            for (; e.length;) {
                                var r = e.pop();
                                if (r in t) return n.value = r, n.done = !1, n
                            }
                            return n.done = !0, n
                        }
                }, t.values = T, P.prototype = {
                    constructor: P,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(O), !t)
                            for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
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

                        function r(n, r) {
                            return a.type = "throw", a.arg = t, e.next = n, r && (e.method = "next", e.arg = void 0), !!r
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                a = i.completion;
                            if ("root" === i.tryLoc) return r("end");
                            if (i.tryLoc <= this.prev) {
                                var l = n.call(i, "catchLoc"),
                                    c = n.call(i, "finallyLoc");
                                if (l && c) {
                                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                                } else if (l) {
                                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r];
                            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
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
                            var n = this.tryEntries[e];
                            if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), O(n), s
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.tryLoc === t) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var o = r.arg;
                                    O(n)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, n) {
                        return this.delegate = {
                            iterator: T(t),
                            resultName: e,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), s
                    }
                }, t
            }

            function H(t, e, n, r, o, i, a) {
                try {
                    var l = t[i](a),
                        c = l.value
                } catch (t) {
                    return void n(t)
                }
                l.done ? e(c) : Promise.resolve(c).then(r, o)
            }

            function W(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = t.apply(e, n);

                        function a(t) {
                            H(i, r, o, a, l, "next", t)
                        }

                        function l(t) {
                            H(i, r, o, a, l, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function G(t) {
                return function(t) {
                    if (Array.isArray(t)) return J(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || V(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function F(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function R(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? F(Object(n), !0).forEach((function(e) {
                        ot(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : F(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function Z(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            l = !1;
                        try {
                            for (n = n.call(t); !(a = (r = n.next()).done) && (i.push(r.value), !e || i.length !== e); a = !0);
                        } catch (t) {
                            l = !0, o = t
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return i
                    }
                }(t, e) || V(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function K(t, e) {
                var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = V(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var r = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return r >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[r++]
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
                    l = !1;
                return {
                    s: function() {
                        n = n.call(t)
                    },
                    n: function() {
                        var t = n.next();
                        return a = t.done, t
                    },
                    e: function(t) {
                        l = !0, i = t
                    },
                    f: function() {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (l) throw i
                        }
                    }
                }
            }

            function V(t, e) {
                if (t) {
                    if ("string" == typeof t) return J(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? J(t, e) : void 0
                }
            }

            function J(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function $(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function Y() {
                return Y = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, n) {
                    var r = X(t, e);
                    if (r) {
                        var o = Object.getOwnPropertyDescriptor(r, e);
                        return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value
                    }
                }, Y.apply(this, arguments)
            }

            function X(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = nt(t)););
                return t
            }

            function Q(t, e) {
                return Q = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, Q(t, e)
            }

            function tt(t, e) {
                if (e && ("object" === q(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return et(t)
            }

            function et(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function nt(t) {
                return nt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, nt(t)
            }

            function rt(t, e, n) {
                if (!e.has(t)) throw new TypeError("attempted to " + n + " private field on non-instance");
                return e.get(t)
            }

            function ot(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }! function(t) {
                t[t.None = 0] = "None", t[t.Undetermined = 1] = "Undetermined", t[t.Scroll = 2] = "Scroll", t[t.ChangePalette = 3] = "ChangePalette"
            }(i || (i = {}));
            var it = (ot(r = {}, k.Nm.Horizontal, [6, 5]), ot(r, k.Nm.Vertical, [4, 3]), r),
                at = (ot(o = {}, k.Nm.Horizontal, [0, .5]), ot(o, k.Nm.Vertical, [0, .5]), o),
                lt = (0, S.v)(O.d),
                ct = new WeakMap,
                ut = function(t) {
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
                        }), e && Q(t, e)
                    }(f, t);
                    var e, n, r, o, a = (r = f, o = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, e = nt(r);
                        if (o) {
                            var n = nt(this).constructor;
                            t = Reflect.construct(e, arguments, n)
                        } else t = e.apply(this, arguments);
                        return tt(this, t)
                    });

                    function f() {
                        var t, e, n, r;
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, f), ot(et(t = a.call(this, new l.W2)), "paletteIndicator", void 0), ot(et(t), "paletteOrigin", void 0), ot(et(t), "paletteTrack", void 0), ot(et(t), "paletteNames", void 0), ot(et(t), "paletteNamePlates", []), ot(et(t), "paletteNamesContainer", void 0), ot(et(t), "colorButtonTexture", void 0), ot(et(t), "columnWidth", void 0), ot(et(t), "rowHeight", void 0), ot(et(t), "paletteButtons", []), ot(et(t), "lastPointer", {
                                pointerId: -1,
                                position: new g.E9,
                                start: new g.E9,
                                timestamp: 0
                            }), ot(et(t), "velocity", {
                                x: 0,
                                y: 0
                            }), ot(et(t), "dragMode", i.None), ot(et(t), "minWidth", 0), ot(et(t), "preferredWidth", 0), ot(et(t), "minHeight", 0), ot(et(t), "preferredHeight", 0), e = et(t), r = {
                                writable: !0,
                                value: 0
                            },
                            function(t, e) {
                                if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
                            }(e, n = ct), n.set(e, r), t.displayObject.interactive = !0, t.colorButtonTexture = u.Mo["ui/Palette_button"], t.columnWidth = t.colorButtonTexture.width + 10, t.rowHeight = Math.sqrt(Math.pow(t.columnWidth, 2) - Math.pow(t.columnWidth / 2, 2)), t.paletteIndicator = new E.I(u.Mo["ui/Selected_palette_indicator"]), t.paletteIndicator.anchorTo(c.Uq.Center), t.paletteOrigin = t.addChild(new O.d), t.paletteTrack = t.paletteOrigin.addChild(new O.d), t.paletteNamesContainer = t.addChild(new O.d), t.paletteNames = t.paletteNamesContainer.addChild(new O.d), t.displayObject.on("pointerdown", (function(e) {
                                e.data.getLocalPosition(t.displayObject, t.lastPointer.position), t.lastPointer.start.copyFrom(t.lastPointer.position), t.lastPointer.pointerId = e.data.pointerId, t.lastPointer.timestamp = performance.now(), t.dragMode = i.Undetermined, e.stopPropagation()
                            })), t.displayObject.on("pointermove", (function(e) {
                                if (t.dragMode !== i.None && e.data.pointerId === t.lastPointer.pointerId) {
                                    var n = e.data.getLocalPosition(t.displayObject),
                                        r = performance.now() - t.lastPointer.timestamp;
                                    (0, x.lu)(t.velocity, n, t.lastPointer.position), r > 0 ? (0, x.TZ)(t.velocity, t.velocity, r) : (0, x.TZ)(t.velocity, t.velocity, P.u9.deltaMS), t.lastPointer.position.copyFrom(n), t.lastPointer.timestamp = performance.now();
                                    var o = (0, x.lu)({
                                        x: 0,
                                        y: 0
                                    }, t.lastPointer.position, t.lastPointer.start);
                                    t.dragMode === i.Undetermined && (0, x._m)(o) > 5 && (p.pixi.isPortrait() ? t.dragMode = Math.abs(o.x) < Math.abs(o.y) ? i.Scroll : i.ChangePalette : t.dragMode = Math.abs(o.x) >= Math.abs(o.y) ? i.Scroll : i.ChangePalette, e.stopPropagation())
                                }
                            }));
                        var o = function(e) {
                            if (t.dragMode !== i.None && t.dragMode !== i.Undetermined) {
                                var n = t.paletteTrack.anchoredPosition;
                                if (p.pixi.isPortrait()) {
                                    var r = t.paletteIndex * -t.paletteOrigin.size.x,
                                        o = Math.sign(r - n.x) * t.paletteOrigin.size.x / 5,
                                        a = (0, M.uZ)(Math.round((o - n.x) / t.paletteOrigin.size.x), 0, A.palettes.size - 1);
                                    t.paletteIndex = a
                                } else {
                                    var l = t.paletteIndex * -t.paletteOrigin.size.y,
                                        c = Math.sign(l - n.y) * t.paletteOrigin.size.y / 5,
                                        u = (0, M.uZ)(Math.round((c - n.y) / t.paletteOrigin.size.y), 0, A.palettes.size - 1);
                                    t.paletteIndex = u
                                }
                                t.dragMode = i.None, e.stopPropagation()
                            } else t.dragMode = i.None
                        };
                        return t.displayObject.on("pointerup", (function(t) {
                            return o(t)
                        })), t.displayObject.on("pointerupoutside", (function(t) {
                            return o(t)
                        })), t.displayObject.on("pointercancel", (function(t) {
                            return o(t)
                        })), p.pixi.orientationChanged.connect((function() {
                            return t.orientationChanged()
                        })), t.orientationChanged(), I.s_.subscribe((function(e) {
                            return t.paletteChanged(e, I.D7.value)
                        })), I.D7.subscribe((function(e) {
                            return t.paletteChanged(I.s_.value, e)
                        })), P.u9.add((function() {
                            return t.tick()
                        })), t
                    }
                    return e = f, (n = [{
                        key: "orientationChanged",
                        value: function() {
                            var t;
                            if (p.pixi.isPortrait()) {
                                var e = this.columnWidth + this.rowHeight;
                                this.sizeDelta = {
                                    x: 0,
                                    y: e + 90
                                }, this.paletteNamesContainer.anchorTo(c.Uq.TopLeft), this.paletteNames.layoutController = new T.G(0, c.Uq.TopLeft), this.paletteOrigin.anchorTo(c.Uq.TopEdge, {
                                    x: 0,
                                    y: 90
                                }, {
                                    x: 0,
                                    y: e
                                }), this.paletteTrack.layoutController = new T.G(0, c.Uq.TopLeft)
                            } else this.sizeDelta = {
                                x: this.columnWidth + this.rowHeight + this.rowHeight + 10,
                                y: 0
                            }, this.paletteNamesContainer.anchorTo(c.Uq.TopLeft, {
                                x: 0,
                                y: y.Kj
                            }), this.paletteNames.layoutController = new C.Z(10, c.Uq.TopLeft), this.paletteOrigin.anchorTo(c.Uq.LeftEdge), this.paletteOrigin.offset = (0, c.Gz)(0, 128, -this.sizeDelta.x, -128), this.paletteTrack.layoutController = new C.Z(0, c.Uq.TopLeft);
                            var n = this.paletteTrack.anchoredPosition;
                            this.paletteTrack.anchoredPosition = {
                                x: n.y,
                                y: n.x
                            }, null === (t = this.paletteIndicator.parent) || void 0 === t || t.removeChild(this.paletteIndicator), this.createPalettes();
                            var r = Array.from(A.palettes.keys()).indexOf(I.s_.value); - 1 === r && (r = 0), this.paletteIndex = r, this.paletteChanged(I.s_.value, I.D7.value)
                        }
                    }, {
                        key: "updateLayout",
                        value: function() {
                            this.layoutDirty && (this.paletteNamesContainer.hitArea = new g.Ae(-.5, -.5, Math.round(this.size.x) + .5, Math.round(258) + .5)), Y(nt(f.prototype), "updateLayout", this).call(this)
                        }
                    }, {
                        key: "paletteChanged",
                        value: function(t, e) {
                            var n = Array.from(A.palettes.keys()).indexOf(t); - 1 === n && (n = 0), this.paletteButtons[n][e].addChild(this.paletteIndicator)
                        }
                    }, {
                        key: "createPalettes",
                        value: function() {
                            var t, e = this,
                                n = K(this.paletteTrack.removeAllChildren());
                            try {
                                for (n.s(); !(t = n.n()).done;) t.value.destroy(!0)
                            } catch (t) {
                                n.e(t)
                            } finally {
                                n.f()
                            }
                            var r, o = K(this.paletteNames.removeAllChildren());
                            try {
                                for (o.s(); !(r = o.n()).done;) r.value.destroy(!0)
                            } catch (t) {
                                o.e(t)
                            } finally {
                                o.f()
                            }
                            this.paletteButtons.length = 0, this.paletteNamePlates.length = 0;
                            var a, l = 0,
                                s = K(A.palettes);
                            try {
                                var f = function() {
                                    var t = Z(a.value, 2),
                                        n = t[0],
                                        r = t[1].name,
                                        o = l,
                                        s = e.paletteOrigin,
                                        f = e.createPaletteButtons(n, p.pixi.isPortrait() ? k.Nm.Horizontal : k.Nm.Vertical),
                                        v = e.paletteNames.addChild(new O.d),
                                        m = v.addChild(new N.N(u.Mo["ui/buttonBg"], 53, 53, 53, 53));
                                    m.tint = 0, m.alpha = .25, m.anchorTo(c.Uq.Fill, {
                                        x: 20,
                                        y: 0
                                    }), m.moveOffset({
                                        x: 0,
                                        y: 20
                                    });
                                    var g = v.addChild(new N.N(u.Mo["ui/buttonBg"], 53, 53, 53, 53));
                                    g.tint = (0, M.q7)(f.sprites.map((function(t) {
                                        return t.tint
                                    }))), g.anchorTo(c.Uq.Fill, {
                                        x: 20,
                                        y: 0
                                    });
                                    var b = v.addChild(new h.sm(r, h.H.TopCenter, R(R({}, B.h), {}, {
                                        fontSize: 64
                                    })));
                                    b.anchorTo(c.Uq.Center), v.layoutController = new d.I(d.J.PreferredSize, d.J.PreferredSize, {
                                        minHeight: 0,
                                        minWidth: b.preferredWidth,
                                        get preferredHeight() {
                                            return 76
                                        },
                                        get preferredWidth() {
                                            return p.pixi.isPortrait() ? s.size.x / 3 : s.size.x
                                        }
                                    }), v.displayObject.interactive = !0, v.displayObject.cursor = "pointer", v.displayObject.on("pointerup", (function(t) {
                                        e.dragMode !== i.None && e.dragMode !== i.Undetermined || (e.paletteIndex = o)
                                    })), e.paletteNamePlates.push([v, b]);
                                    var x = e.paletteTrack.addChild(new lt);
                                    x.layoutController = new d.I(d.J.PreferredSize, d.J.PreferredSize, {
                                        minHeight: 0,
                                        minWidth: 0,
                                        get preferredHeight() {
                                            return s.size.y
                                        },
                                        get preferredWidth() {
                                            return s.size.x
                                        }
                                    });
                                    var P = x.addChild(new j.X(j.I.Vertical));
                                    P.anchorTo(c.Uq.Fill);
                                    var T = P.addChild(new O.d);
                                    p.pixi.isPortrait() ? (P.direction = j.I.Vertical, T.anchorTo(c.Uq.TopCenter, {
                                        x: 0,
                                        y: 10
                                    }, {
                                        x: Math.max.apply(Math, G(it[k.Nm.Horizontal])) * e.columnWidth,
                                        y: e.rowHeight * f.rows
                                    })) : (P.direction = j.I.Horizontal, T.anchorTo(c.Uq.LeftCenter, {
                                        x: 10,
                                        y: 0
                                    }, {
                                        x: e.rowHeight * f.rows,
                                        y: Math.max.apply(Math, G(it[k.Nm.Vertical])) * e.columnWidth
                                    }));
                                    var C, S = K(f.sprites);
                                    try {
                                        for (S.s(); !(C = S.n()).done;) {
                                            var I = C.value;
                                            T.addChild(I)
                                        }
                                    } catch (t) {
                                        S.e(t)
                                    } finally {
                                        S.f()
                                    }
                                    e.paletteButtons[o] = f.sprites;
                                    var q = A.palettes.get(n);
                                    if (void 0 === q) throw new Error("Unknown palette ".concat(n));
                                    var H = "palette_".concat(q.id);
                                    if (q.pay && !(0, U.K)(H)) {
                                        var F = z.ZP.getRewardedAction(),
                                            V = P.addChild(new O.d);
                                        V.anchorTo(c.Uq.Center), V.addChild(new E.I(u.Mo["ui/playADbig"])).anchorTo(c.Uq.Center), T.displayObject.interactiveChildren = !1, T.displayObject.filters = [new w.T(6)], x.interactive = !0, x.tapOnly = !0, x.cursor = "pointer", x.tapped.connect(W(D().mark((function t() {
                                            var e, n, r;
                                            return D().wrap((function(t) {
                                                for (;;) switch (t.prev = t.next) {
                                                    case 0:
                                                        return x.interactive = !1, e = _().EGAAdType.Undefined, F === z.Us.VideoAd && (e = _().EGAAdType.RewardedVideo), n = y.Oz, t.prev = 4, t.next = 7, z.ZP.consumeRewardedAction(F);
                                                    case 7:
                                                        r = t.sent, n = r.mediator, L.GameAnalytics.addDesignEvent("Purchase:Palette:".concat(q.name), void 0, {
                                                            ad: "true"
                                                        }), L.GameAnalytics.addAdEvent(_().EGAAdAction.Show, e, n, "Purchased palette", {
                                                            name: q.name
                                                        }), t.next = 17;
                                                        break;
                                                    case 13:
                                                        t.prev = 13, t.t0 = t.catch(4), L.GameAnalytics.addDesignEvent("Purchase:Palette:".concat(q.name), void 0, {
                                                            ad: "false"
                                                        }), t.t0 instanceof z.sN && L.GameAnalytics.addAdEvent(_().EGAAdAction.FailedShow, e, t.t0.mediator, "Purchased palette", {
                                                            name: q.name
                                                        });
                                                    case 17:
                                                        return t.prev = 17, L.GameAnalytics.addAdEvent(_().EGAAdAction.RewardReceived, e, n, "Purchased palette", {
                                                            name: q.name
                                                        }), T.displayObject.interactiveChildren = !0, T.displayObject.filters = null, V.destroy(!0), (0, U.n)(H), t.finish(17);
                                                    case 24:
                                                    case "end":
                                                        return t.stop()
                                                }
                                            }), t, null, [
                                                [4, 13, 17, 24]
                                            ])
                                        }))))
                                    }++l
                                };
                                for (s.s(); !(a = s.n()).done;) f()
                            } catch (t) {
                                s.e(t)
                            } finally {
                                s.f()
                            }
                        }
                    }, {
                        key: "nextPalette",
                        value: function() {
                            var t = A.palettes.size - 1;
                            ++this.paletteIndex > t && (this.paletteIndex = t)
                        }
                    }, {
                        key: "previousPalette",
                        value: function() {
                            --this.paletteIndex < 0 && (this.paletteIndex = 0)
                        }
                    }, {
                        key: "createPaletteButtons",
                        value: function(t, e) {
                            var n = this,
                                r = A.palettes.get(t);
                            if (void 0 === r) throw new Error("Unknown palette ".concat(t));
                            for (var o = [], i = 0, a = function(a, l) {
                                    l >= it[e][1 & i] && (i++, l = 0);
                                    var u = (0, b.qm)(r.colors[a]),
                                        f = at[e][1 & i] * n.columnWidth,
                                        h = new s.y(n.colorButtonTexture);
                                    h.setAbsolutePosition(e === k.Nm.Horizontal ? {
                                        x: f + n.columnWidth * l,
                                        y: n.rowHeight * i
                                    } : {
                                        x: n.rowHeight * i,
                                        y: f + n.columnWidth * l
                                    }), h.tint = u, h.tapOnly = !0, h.tapped.connect((function() {
                                        return v.FC.emit(t, a)
                                    })), o.push(h), c = l
                                }, l = 0, c = 0; l < r.colors.length; ++l, ++c) a(l, c);
                            return {
                                sprites: o,
                                rows: i + 1
                            }
                        }
                    }, {
                        key: "tick",
                        value: function() {
                            var t = P.u9.deltaMS;
                            this.dragMode !== i.None && performance.now() - this.lastPointer.timestamp > 6e3 && (this.dragMode = i.None);
                            var e = this.paletteTrack.anchoredPosition,
                                n = p.pixi.isPortrait() ? this.paletteIndex * -this.paletteOrigin.size.x : this.paletteIndex * -this.paletteOrigin.size.y;
                            this.dragMode === i.None && (p.pixi.isPortrait() ? (this.velocity.y = 0, this.velocity.x = .01 * (n - e.x)) : (this.velocity.y = .01 * (n - e.y), this.velocity.x = 0));
                            var r = (0, x.bA)(new g.E9, this.velocity, t);
                            this.dragMode === i.Scroll ? (this.paletteTrack.size.x < this.size.x && (r.x = 0), this.paletteTrack.size.y < this.size.y && (r.y = 0), this.paletteTrack.moveOffset(r)) : this.dragMode === i.ChangePalette ? (p.pixi.isPortrait() ? r.y = 0 : r.x = 0, this.paletteTrack.moveOffset(r)) : this.dragMode === i.None && this.paletteTrack.moveOffset(r), (0, x.bA)(this.velocity, this.velocity, .9);
                            var o = p.pixi.isPortrait() ? (0, M.uZ)(this.paletteTrack.anchoredPosition.x / this.paletteOrigin.size.x, 1 - A.palettes.size, 0) : (0, M.uZ)(this.paletteTrack.anchoredPosition.y / this.paletteOrigin.size.y, 1 - A.palettes.size, 0);
                            if (!isNaN(o)) {
                                var a = Z(this.paletteNamePlates[Math.floor(Math.abs(o))], 1)[0];
                                if (p.pixi.isPortrait()) {
                                    var l = this.paletteOrigin.size.x / 2,
                                        c = this.paletteNamePlates[this.paletteIndex][0].size.x,
                                        u = -a.anchoredPosition.x + o % 1 * a.size.x;
                                    this.paletteNames.setAbsolutePosition({
                                        x: l - c / 2 + u,
                                        y: 0
                                    })
                                } else {
                                    var s = this.paletteNamePlates[this.paletteIndex][0].size.y,
                                        f = -a.anchoredPosition.y + o % 1 * a.size.y;
                                    this.paletteNames.setAbsolutePosition({
                                        x: 0,
                                        y: 129 - s / 2 + f
                                    })
                                }
                                for (var h = 0; h < this.paletteNamePlates.length; ++h) this.paletteNamePlates[h][0].displayObject.alpha = (0, M.uZ)(2 - Math.abs(h - Math.abs(o)), 0, 1)
                            }
                        }
                    }, {
                        key: "paletteIndex",
                        get: function() {
                            return function(t, e) {
                                return e.get ? e.get.call(t) : e.value
                            }(this, rt(this, ct, "get"))
                        },
                        set: function(t) {
                            for (var e = 0; e < this.paletteNamePlates.length; ++e) this.paletteNamePlates[e][1].style.fill = e === t ? B.T.selectedColor : B.T.unselectedColor;
                            ! function(t, e, n) {
                                (function(t, e, n) {
                                    if (e.set) e.set.call(t, n);
                                    else {
                                        if (!e.writable) throw new TypeError("attempted to set read only private field");
                                        e.value = n
                                    }
                                })(t, rt(t, e, "set"), n)
                            }(this, ct, t)
                        }
                    }]) && $(e.prototype, n), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), f
                }(c.u1);

            function st(t) {
                return st = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, st(t)
            }

            function ft(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function ht(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? ft(Object(n), !0).forEach((function(e) {
                        gt(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ft(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function dt(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function pt(t, e) {
                return pt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, pt(t, e)
            }

            function yt(t, e) {
                if (e && ("object" === st(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return vt(t)
            }

            function vt(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function mt(t) {
                return mt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, mt(t)
            }

            function gt(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var bt = function(t) {
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
                    }), e && pt(t, e)
                }(l, t);
                var e, n, r, o, i = (r = l, o = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }(), function() {
                    var t, e = mt(r);
                    if (o) {
                        var n = mt(this).constructor;
                        t = Reflect.construct(e, arguments, n)
                    } else t = e.apply(this, arguments);
                    return yt(this, t)
                });

                function l() {
                    var t;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, l), gt(vt(t = i.call(this)), "returnToGallery", new a.MZ), gt(vt(t), "finalizeDrawing", new a.MZ), gt(vt(t), "galleryButton", void 0), gt(vt(t), "undoButton", void 0), gt(vt(t), "bucketToolButton", void 0), gt(vt(t), "paintToolButton", void 0), gt(vt(t), "redoButton", void 0), gt(vt(t), "finalizeButton", void 0), gt(vt(t), "paletteUI", void 0), gt(vt(t), "stage", void 0), gt(vt(t), "buttonContainer", void 0), t.stage = new f.A(vt(t)), t.stage.anchorTo(c.Uq.Fill), t.stage.layoutController = new d.I(d.J.PreferredSize, d.J.PreferredSize, {
                        minHeight: 0,
                        minWidth: 0,
                        get preferredHeight() {
                            return p.pixi.stageHeight
                        },
                        get preferredWidth() {
                            return p.pixi.stageWidth
                        }
                    }), t.buttonContainer = t.stage.addChild(new O.d), t.galleryButton = t.buttonContainer.addChild(new s.y(u.Mo["ui/back_button"])), t.galleryButton.released.connect((function() {
                        t.returnToGallery.emit()
                    })), t.undoButton = t.buttonContainer.addChild(new s.y(u.Mo["ui/undo_button"])), t.undoButton.released.connect((function() {
                        return v.he.emit()
                    })), t.bucketToolButton = t.buttonContainer.addChild(new s.y(u.Mo["ui/paintbucket"])), t.bucketToolButton.released.connect((function() {
                        return v.jC.emit(m.qK.Fill)
                    })), t.paintToolButton = t.buttonContainer.addChild(new s.y(u.Mo["ui/freepaint_button"])), t.paintToolButton.released.connect((function() {
                        return v.jC.emit(m.qK.Brush)
                    })), I.cA.subscribe((function(e) {
                        t.paintToolButton.tint = e === m.qK.Brush ? 12844936 : 16777215, t.bucketToolButton.tint = e === m.qK.Fill ? 12844936 : 16777215
                    })), t.redoButton = t.buttonContainer.addChild(new s.y(u.Mo["ui/redo_button"])), t.redoButton.released.connect((function() {
                        return v.UK.emit()
                    })), t.finalizeButton = t.buttonContainer.addChild(new s.y(u.Mo["ui/finish_button"])), t.finalizeButton.addChild(new h.sm("DONE", h.H.MiddleCenter, ht(ht({}, B.h), {}, {
                        fill: "#000000AA",
                        fontSize: 36,
                        stroke: "#FFFFFFBB",
                        strokeThickness: 4
                    }))).anchorTo(c.Uq.Fill), t.finalizeButton.released.connect((function() {
                        return t.finalizeDrawing.emit()
                    })), t.paletteUI = t.stage.addChild(new ut), p.pixi.orientationChanged.connect((function() {
                        return t.orientationChanged()
                    })), t.orientationChanged(), t
                }
                return e = l, (n = [{
                    key: "orientationChanged",
                    value: function() {
                        var t = b.tq.any ? 200 : 0;
                        p.pixi.isPortrait() ? (this.buttonContainer.anchor = (0, c.w1)(c.Uq.TopEdge), this.buttonContainer.offset = (0, c.Gz)(y.Kj + t, y.Kj, y.Kj, 0), this.galleryButton.anchorTo(c.Uq.TopLeft, {
                            x: 0,
                            y: 0
                        }), this.undoButton.anchorTo(c.Uq.TopCenter, {
                            x: -225,
                            y: 0
                        }), this.bucketToolButton.anchorTo(c.Uq.TopCenter, {
                            x: -75,
                            y: 0
                        }), this.paintToolButton.anchorTo(c.Uq.TopCenter, {
                            x: 75,
                            y: 0
                        }), this.redoButton.anchorTo(c.Uq.TopCenter, {
                            x: 225,
                            y: 0
                        }), this.finalizeButton.anchorTo(c.Uq.TopRight, {
                            x: 0,
                            y: 0
                        }), this.paletteUI.anchorTo(c.Uq.BottomEdge, {
                            x: 0,
                            y: y.Kj
                        })) : (this.buttonContainer.anchor = (0, c.w1)(c.Uq.LeftEdge), this.buttonContainer.offset = (0, c.Gz)(y.Kj, y.Kj + t, 0, y.Kj), this.galleryButton.anchorTo(c.Uq.TopLeft, {
                            x: 0,
                            y: 0
                        }), this.undoButton.anchorTo(c.Uq.LeftCenter, {
                            x: 0,
                            y: -225
                        }), this.bucketToolButton.anchorTo(c.Uq.LeftCenter, {
                            x: 0,
                            y: -75
                        }), this.paintToolButton.anchorTo(c.Uq.LeftCenter, {
                            x: 0,
                            y: 75
                        }), this.redoButton.anchorTo(c.Uq.LeftCenter, {
                            x: 0,
                            y: 225
                        }), this.finalizeButton.anchorTo(c.Uq.BottomLeft, {
                            x: 0,
                            y: 0
                        }), this.paletteUI.anchorTo(c.Uq.RightEdge))
                    }
                }]) && dt(e.prototype, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), l
            }(l.W2)
        },
        2555: function(t, e, n) {
            "use strict";
            n.d(e, {
                FC: function() {
                    return l
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
            var r = n(4242),
                o = new r.MZ,
                i = new r.MZ,
                a = new r.MZ,
                l = new r.MZ
        },
        9747: function(t, e, n) {
            "use strict";
            n.d(e, {
                G: function() {
                    return c
                }
            }), n(3299), n(9653), n(9070), n(1703), n(7042), n(1539), n(1038), n(8783), n(4916), n(7601), n(2526), n(1817), n(2165), n(6992), n(3948);
            var r = n(618);

            function o(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function a(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function l(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var c = function() {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        n = arguments.length > 1 ? arguments[1] : void 0,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                            x: 0,
                            y: 0
                        };
                    i(this, t), l(this, "spacing", void 0), l(this, "anchorPreset", void 0), l(this, "padding", void 0), this.spacing = e, this.anchorPreset = n, this.padding = r
                }
                var e, n;
                return e = t, (n = [{
                    key: "isDirty",
                    value: function() {
                        return !1
                    }
                }, {
                    key: "setLayout",
                    value: function(t) {
                        var e, n = (0, r.w1)(this.anchorPreset),
                            i = t.size,
                            a = (i.x, i.y),
                            l = {
                                x: this.padding.x,
                                y: this.padding.y
                            },
                            c = function(t, e) {
                                var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                                if (!n) {
                                    if (Array.isArray(t) || (n = function(t, e) {
                                            if (t) {
                                                if ("string" == typeof t) return o(t, e);
                                                var n = Object.prototype.toString.call(t).slice(8, -1);
                                                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(t, e) : void 0
                                            }
                                        }(t)) || e && t && "number" == typeof t.length) {
                                        n && (t = n);
                                        var r = 0,
                                            i = function() {};
                                        return {
                                            s: i,
                                            n: function() {
                                                return r >= t.length ? {
                                                    done: !0
                                                } : {
                                                    done: !1,
                                                    value: t[r++]
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
                                var a, l = !0,
                                    c = !1;
                                return {
                                    s: function() {
                                        n = n.call(t)
                                    },
                                    n: function() {
                                        var t = n.next();
                                        return l = t.done, t
                                    },
                                    e: function(t) {
                                        c = !0, a = t
                                    },
                                    f: function() {
                                        try {
                                            l || null == n.return || n.return()
                                        } finally {
                                            if (c) throw a
                                        }
                                    }
                                }
                            }(t.children());
                        try {
                            for (c.s(); !(e = c.n()).done;) {
                                var u = e.value,
                                    s = u.layoutController ? u.sizeDelta.x : Math.max(u.preferredWidth, u.minWidth),
                                    f = u.layoutController ? u.sizeDelta.y : Math.max(u.preferredHeight, u.minHeight);
                                u.offset.min.x = s * n.min.x + l.x, u.offset.min.y = a * n.min.y, u.offset.max.x = s * n.max.x + l.x, u.offset.max.y = a * n.max.y, Math.abs(n.max.x - n.min.x) <= Number.EPSILON && (u.offset.min.x -= s * n.min.x, u.offset.max.x += s - s * n.max.x), Math.abs(n.max.y - n.min.y) <= Number.EPSILON && (u.offset.min.y -= f * n.min.y, u.offset.max.y += f - f * n.max.y), l.x += s + this.spacing
                            }
                        } catch (t) {
                            c.e(t)
                        } finally {
                            c.f()
                        }
                    }
                }]) && a(e.prototype, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t
            }()
        },
        3925: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return c
                }
            }), n(3299), n(9653), n(9070), n(1703), n(7042), n(1539), n(1038), n(8783), n(4916), n(7601), n(2526), n(1817), n(2165), n(6992), n(3948);
            var r = n(618);

            function o(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function a(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function l(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var c = function() {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        n = arguments.length > 1 ? arguments[1] : void 0,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                            x: 0,
                            y: 0
                        };
                    i(this, t), l(this, "spacing", void 0), l(this, "anchorPreset", void 0), l(this, "padding", void 0), this.spacing = e, this.anchorPreset = n, this.padding = r
                }
                var e, n;
                return e = t, (n = [{
                    key: "isDirty",
                    value: function() {
                        return !1
                    }
                }, {
                    key: "setLayout",
                    value: function(t) {
                        var e, n = (0, r.w1)(this.anchorPreset),
                            i = t.size,
                            a = i.x,
                            l = (i.y, {
                                x: this.padding.x,
                                y: this.padding.y
                            }),
                            c = function(t, e) {
                                var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                                if (!n) {
                                    if (Array.isArray(t) || (n = function(t, e) {
                                            if (t) {
                                                if ("string" == typeof t) return o(t, e);
                                                var n = Object.prototype.toString.call(t).slice(8, -1);
                                                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(t, e) : void 0
                                            }
                                        }(t)) || e && t && "number" == typeof t.length) {
                                        n && (t = n);
                                        var r = 0,
                                            i = function() {};
                                        return {
                                            s: i,
                                            n: function() {
                                                return r >= t.length ? {
                                                    done: !0
                                                } : {
                                                    done: !1,
                                                    value: t[r++]
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
                                var a, l = !0,
                                    c = !1;
                                return {
                                    s: function() {
                                        n = n.call(t)
                                    },
                                    n: function() {
                                        var t = n.next();
                                        return l = t.done, t
                                    },
                                    e: function(t) {
                                        c = !0, a = t
                                    },
                                    f: function() {
                                        try {
                                            l || null == n.return || n.return()
                                        } finally {
                                            if (c) throw a
                                        }
                                    }
                                }
                            }(t.children());
                        try {
                            for (c.s(); !(e = c.n()).done;) {
                                var u = e.value,
                                    s = u.layoutController ? u.sizeDelta.x : Math.max(u.preferredWidth, u.minWidth),
                                    f = u.layoutController ? u.sizeDelta.y : Math.max(u.preferredHeight, u.minHeight);
                                u.offset.min.x = a * n.min.x, u.offset.min.y = f * n.min.y + l.y, u.offset.max.x = a * n.max.x, u.offset.max.y = f * n.max.y + l.y, Math.abs(n.max.x - n.min.x) <= Number.EPSILON && (u.offset.min.x -= s * n.min.x, u.offset.max.x += s - s * n.max.x), Math.abs(n.max.y - n.min.y) <= Number.EPSILON && (u.offset.min.y -= f * n.min.y, u.offset.max.y += f - f * n.max.y), l.y += f + this.spacing
                            }
                        } catch (t) {
                            c.e(t)
                        } finally {
                            c.f()
                        }
                    }
                }]) && a(e.prototype, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t
            }()
        },
        4310: function(t) {
            t.exports = Math.sign || function(t) {
                var e = +t;
                return 0 == e || e != e ? e : e < 0 ? -1 : 1
            }
        },
        2420: function(t, e, n) {
            n(2109)({
                target: "Math",
                stat: !0
            }, {
                sign: n(4310)
            })
        }
    }
]);