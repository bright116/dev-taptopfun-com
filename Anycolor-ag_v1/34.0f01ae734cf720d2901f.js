(self.webpackChunkcolorapp = self.webpackChunkcolorapp || []).push([
    [34], {
        9662: function(e, t, n) {
            var r = n(614),
                i = n(6330),
                o = TypeError;
            e.exports = function(e) {
                if (r(e)) return e;
                throw o(i(e) + " is not a function")
            }
        },
        9483: function(e, t, n) {
            var r = n(4411),
                i = n(6330),
                o = TypeError;
            e.exports = function(e) {
                if (r(e)) return e;
                throw o(i(e) + " is not a constructor")
            }
        },
        6077: function(e, t, n) {
            var r = n(614),
                i = String,
                o = TypeError;
            e.exports = function(e) {
                if ("object" == typeof e || r(e)) return e;
                throw o("Can't set " + i(e) + " as a prototype")
            }
        },
        1223: function(e, t, n) {
            var r = n(5112),
                i = n(30),
                o = n(3070).f,
                s = r("unscopables"),
                a = Array.prototype;
            null == a[s] && o(a, s, {
                configurable: !0,
                value: i(null)
            }), e.exports = function(e) {
                a[s][e] = !0
            }
        },
        1530: function(e, t, n) {
            "use strict";
            var r = n(8710).charAt;
            e.exports = function(e, t, n) {
                return t + (n ? r(e, t).length : 1)
            }
        },
        5787: function(e, t, n) {
            var r = n(7976),
                i = TypeError;
            e.exports = function(e, t) {
                if (r(t, e)) return e;
                throw i("Incorrect invocation")
            }
        },
        9670: function(e, t, n) {
            var r = n(111),
                i = String,
                o = TypeError;
            e.exports = function(e) {
                if (r(e)) return e;
                throw o(i(e) + " is not an object")
            }
        },
        7556: function(e, t, n) {
            var r = n(7293);
            e.exports = r((function() {
                if ("function" == typeof ArrayBuffer) {
                    var e = new ArrayBuffer(8);
                    Object.isExtensible(e) && Object.defineProperty(e, "a", {
                        value: 8
                    })
                }
            }))
        },
        8533: function(e, t, n) {
            "use strict";
            var r = n(2092).forEach,
                i = n(2133)("forEach");
            e.exports = i ? [].forEach : function(e) {
                return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
        },
        8457: function(e, t, n) {
            "use strict";
            var r = n(9974),
                i = n(6916),
                o = n(7908),
                s = n(3411),
                a = n(7659),
                u = n(4411),
                c = n(6244),
                d = n(6135),
                l = n(8554),
                f = n(1246),
                v = Array;
            e.exports = function(e) {
                var t = o(e),
                    n = u(this),
                    g = arguments.length,
                    p = g > 1 ? arguments[1] : void 0,
                    m = void 0 !== p;
                m && (p = r(p, g > 2 ? arguments[2] : void 0));
                var h, E, y, S, A, b, C = f(t),
                    T = 0;
                if (!C || this === v && a(C))
                    for (h = c(t), E = n ? new this(h) : v(h); h > T; T++) b = m ? p(t[T], T) : t[T], d(E, T, b);
                else
                    for (A = (S = l(t, C)).next, E = n ? new this : []; !(y = i(A, S)).done; T++) b = m ? s(S, p, [y.value, T], !0) : y.value, d(E, T, b);
                return E.length = T, E
            }
        },
        1318: function(e, t, n) {
            var r = n(5656),
                i = n(1400),
                o = n(6244),
                s = function(e) {
                    return function(t, n, s) {
                        var a, u = r(t),
                            c = o(u),
                            d = i(s, c);
                        if (e && n != n) {
                            for (; c > d;)
                                if ((a = u[d++]) != a) return !0
                        } else
                            for (; c > d; d++)
                                if ((e || d in u) && u[d] === n) return e || d || 0;
                        return !e && -1
                    }
                };
            e.exports = {
                includes: s(!0),
                indexOf: s(!1)
            }
        },
        2092: function(e, t, n) {
            var r = n(9974),
                i = n(1702),
                o = n(8361),
                s = n(7908),
                a = n(6244),
                u = n(5417),
                c = i([].push),
                d = function(e) {
                    var t = 1 == e,
                        n = 2 == e,
                        i = 3 == e,
                        d = 4 == e,
                        l = 6 == e,
                        f = 7 == e,
                        v = 5 == e || l;
                    return function(g, p, m, h) {
                        for (var E, y, S = s(g), A = o(S), b = r(p, m), C = a(A), T = 0, w = h || u, I = t ? w(g, C) : n || f ? w(g, 0) : void 0; C > T; T++)
                            if ((v || T in A) && (y = b(E = A[T], T, S), e))
                                if (t) I[T] = y;
                                else if (y) switch (e) {
                            case 3:
                                return !0;
                            case 5:
                                return E;
                            case 6:
                                return T;
                            case 2:
                                c(I, E)
                        } else switch (e) {
                            case 4:
                                return !1;
                            case 7:
                                c(I, E)
                        }
                        return l ? -1 : i || d ? d : I
                    }
                };
            e.exports = {
                forEach: d(0),
                map: d(1),
                filter: d(2),
                some: d(3),
                every: d(4),
                find: d(5),
                findIndex: d(6),
                filterReject: d(7)
            }
        },
        1194: function(e, t, n) {
            var r = n(7293),
                i = n(5112),
                o = n(7392),
                s = i("species");
            e.exports = function(e) {
                return o >= 51 || !r((function() {
                    var t = [];
                    return (t.constructor = {})[s] = function() {
                        return {
                            foo: 1
                        }
                    }, 1 !== t[e](Boolean).foo
                }))
            }
        },
        2133: function(e, t, n) {
            "use strict";
            var r = n(7293);
            e.exports = function(e, t) {
                var n = [][e];
                return !!n && r((function() {
                    n.call(null, t || function() {
                        return 1
                    }, 1)
                }))
            }
        },
        1589: function(e, t, n) {
            var r = n(1400),
                i = n(6244),
                o = n(6135),
                s = Array,
                a = Math.max;
            e.exports = function(e, t, n) {
                for (var u = i(e), c = r(t, u), d = r(void 0 === n ? u : n, u), l = s(a(d - c, 0)), f = 0; c < d; c++, f++) o(l, f, e[c]);
                return l.length = f, l
            }
        },
        206: function(e, t, n) {
            var r = n(1702);
            e.exports = r([].slice)
        },
        7475: function(e, t, n) {
            var r = n(3157),
                i = n(4411),
                o = n(111),
                s = n(5112)("species"),
                a = Array;
            e.exports = function(e) {
                var t;
                return r(e) && (t = e.constructor, (i(t) && (t === a || r(t.prototype)) || o(t) && null === (t = t[s])) && (t = void 0)), void 0 === t ? a : t
            }
        },
        5417: function(e, t, n) {
            var r = n(7475);
            e.exports = function(e, t) {
                return new(r(e))(0 === t ? 0 : t)
            }
        },
        4170: function(e) {
            for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", n = {}, r = 0; r < 66; r++) n[t.charAt(r)] = r;
            e.exports = {
                itoc: t,
                ctoi: n
            }
        },
        3411: function(e, t, n) {
            var r = n(9670),
                i = n(9212);
            e.exports = function(e, t, n, o) {
                try {
                    return o ? t(r(n)[0], n[1]) : t(n)
                } catch (t) {
                    i(e, "throw", t)
                }
            }
        },
        7072: function(e, t, n) {
            var r = n(5112)("iterator"),
                i = !1;
            try {
                var o = 0,
                    s = {
                        next: function() {
                            return {
                                done: !!o++
                            }
                        },
                        return: function() {
                            i = !0
                        }
                    };
                s[r] = function() {
                    return this
                }, Array.from(s, (function() {
                    throw 2
                }))
            } catch (e) {}
            e.exports = function(e, t) {
                if (!t && !i) return !1;
                var n = !1;
                try {
                    var o = {};
                    o[r] = function() {
                        return {
                            next: function() {
                                return {
                                    done: n = !0
                                }
                            }
                        }
                    }, e(o)
                } catch (e) {}
                return n
            }
        },
        4326: function(e, t, n) {
            var r = n(1702),
                i = r({}.toString),
                o = r("".slice);
            e.exports = function(e) {
                return o(i(e), 8, -1)
            }
        },
        648: function(e, t, n) {
            var r = n(1694),
                i = n(614),
                o = n(4326),
                s = n(5112)("toStringTag"),
                a = Object,
                u = "Arguments" == o(function() {
                    return arguments
                }());
            e.exports = r ? o : function(e) {
                var t, n, r;
                return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
                    try {
                        return e[t]
                    } catch (e) {}
                }(t = a(e), s)) ? n : u ? o(t) : "Object" == (r = o(t)) && i(t.callee) ? "Arguments" : r
            }
        },
        7741: function(e, t, n) {
            var r = n(1702),
                i = Error,
                o = r("".replace),
                s = String(i("zxcasd").stack),
                a = /\n\s*at [^:]*:[^\n]*/,
                u = a.test(s);
            e.exports = function(e, t) {
                if (u && "string" == typeof e && !i.prepareStackTrace)
                    for (; t--;) e = o(e, a, "");
                return e
            }
        },
        5631: function(e, t, n) {
            "use strict";
            var r = n(3070).f,
                i = n(30),
                o = n(9190),
                s = n(9974),
                a = n(5787),
                u = n(408),
                c = n(654),
                d = n(6340),
                l = n(9781),
                f = n(2423).fastKey,
                v = n(9909),
                g = v.set,
                p = v.getterFor;
            e.exports = {
                getConstructor: function(e, t, n, c) {
                    var d = e((function(e, r) {
                            a(e, v), g(e, {
                                type: t,
                                index: i(null),
                                first: void 0,
                                last: void 0,
                                size: 0
                            }), l || (e.size = 0), null != r && u(r, e[c], {
                                that: e,
                                AS_ENTRIES: n
                            })
                        })),
                        v = d.prototype,
                        m = p(t),
                        h = function(e, t, n) {
                            var r, i, o = m(e),
                                s = E(e, t);
                            return s ? s.value = n : (o.last = s = {
                                index: i = f(t, !0),
                                key: t,
                                value: n,
                                previous: r = o.last,
                                next: void 0,
                                removed: !1
                            }, o.first || (o.first = s), r && (r.next = s), l ? o.size++ : e.size++, "F" !== i && (o.index[i] = s)), e
                        },
                        E = function(e, t) {
                            var n, r = m(e),
                                i = f(t);
                            if ("F" !== i) return r.index[i];
                            for (n = r.first; n; n = n.next)
                                if (n.key == t) return n
                        };
                    return o(v, {
                        clear: function() {
                            for (var e = m(this), t = e.index, n = e.first; n;) n.removed = !0, n.previous && (n.previous = n.previous.next = void 0), delete t[n.index], n = n.next;
                            e.first = e.last = void 0, l ? e.size = 0 : this.size = 0
                        },
                        delete: function(e) {
                            var t = this,
                                n = m(t),
                                r = E(t, e);
                            if (r) {
                                var i = r.next,
                                    o = r.previous;
                                delete n.index[r.index], r.removed = !0, o && (o.next = i), i && (i.previous = o), n.first == r && (n.first = i), n.last == r && (n.last = o), l ? n.size-- : t.size--
                            }
                            return !!r
                        },
                        forEach: function(e) {
                            for (var t, n = m(this), r = s(e, arguments.length > 1 ? arguments[1] : void 0); t = t ? t.next : n.first;)
                                for (r(t.value, t.key, this); t && t.removed;) t = t.previous
                        },
                        has: function(e) {
                            return !!E(this, e)
                        }
                    }), o(v, n ? {
                        get: function(e) {
                            var t = E(this, e);
                            return t && t.value
                        },
                        set: function(e, t) {
                            return h(this, 0 === e ? 0 : e, t)
                        }
                    } : {
                        add: function(e) {
                            return h(this, e = 0 === e ? 0 : e, e)
                        }
                    }), l && r(v, "size", {
                        get: function() {
                            return m(this).size
                        }
                    }), d
                },
                setStrong: function(e, t, n) {
                    var r = t + " Iterator",
                        i = p(t),
                        o = p(r);
                    c(e, t, (function(e, t) {
                        g(this, {
                            type: r,
                            target: e,
                            state: i(e),
                            kind: t,
                            last: void 0
                        })
                    }), (function() {
                        for (var e = o(this), t = e.kind, n = e.last; n && n.removed;) n = n.previous;
                        return e.target && (e.last = n = n ? n.next : e.state.first) ? "keys" == t ? {
                            value: n.key,
                            done: !1
                        } : "values" == t ? {
                            value: n.value,
                            done: !1
                        } : {
                            value: [n.key, n.value],
                            done: !1
                        } : (e.target = void 0, {
                            value: void 0,
                            done: !0
                        })
                    }), n ? "entries" : "values", !n, !0), d(t)
                }
            }
        },
        7710: function(e, t, n) {
            "use strict";
            var r = n(2109),
                i = n(7854),
                o = n(1702),
                s = n(4705),
                a = n(8052),
                u = n(2423),
                c = n(408),
                d = n(5787),
                l = n(614),
                f = n(111),
                v = n(7293),
                g = n(7072),
                p = n(8003),
                m = n(9587);
            e.exports = function(e, t, n) {
                var h = -1 !== e.indexOf("Map"),
                    E = -1 !== e.indexOf("Weak"),
                    y = h ? "set" : "add",
                    S = i[e],
                    A = S && S.prototype,
                    b = S,
                    C = {},
                    T = function(e) {
                        var t = o(A[e]);
                        a(A, e, "add" == e ? function(e) {
                            return t(this, 0 === e ? 0 : e), this
                        } : "delete" == e ? function(e) {
                            return !(E && !f(e)) && t(this, 0 === e ? 0 : e)
                        } : "get" == e ? function(e) {
                            return E && !f(e) ? void 0 : t(this, 0 === e ? 0 : e)
                        } : "has" == e ? function(e) {
                            return !(E && !f(e)) && t(this, 0 === e ? 0 : e)
                        } : function(e, n) {
                            return t(this, 0 === e ? 0 : e, n), this
                        })
                    };
                if (s(e, !l(S) || !(E || A.forEach && !v((function() {
                        (new S).entries().next()
                    }))))) b = n.getConstructor(t, e, h, y), u.enable();
                else if (s(e, !0)) {
                    var w = new b,
                        I = w[y](E ? {} : -0, 1) != w,
                        k = v((function() {
                            w.has(1)
                        })),
                        _ = g((function(e) {
                            new S(e)
                        })),
                        R = !E && v((function() {
                            for (var e = new S, t = 5; t--;) e[y](t, t);
                            return !e.has(-0)
                        }));
                    _ || ((b = t((function(e, t) {
                        d(e, A);
                        var n = m(new S, e, b);
                        return null != t && c(t, n[y], {
                            that: n,
                            AS_ENTRIES: h
                        }), n
                    }))).prototype = A, A.constructor = b), (k || R) && (T("delete"), T("has"), h && T("get")), (R || I) && T(y), E && A.clear && delete A.clear
                }
                return C[e] = b, r({
                    global: !0,
                    constructor: !0,
                    forced: b != S
                }, C), p(b, e), E || n.setStrong(b, e, h), b
            }
        },
        9920: function(e, t, n) {
            var r = n(2597),
                i = n(3887),
                o = n(1236),
                s = n(3070);
            e.exports = function(e, t, n) {
                for (var a = i(t), u = s.f, c = o.f, d = 0; d < a.length; d++) {
                    var l = a[d];
                    r(e, l) || n && r(n, l) || u(e, l, c(t, l))
                }
            }
        },
        8544: function(e, t, n) {
            var r = n(7293);
            e.exports = !r((function() {
                function e() {}
                return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
            }))
        },
        4994: function(e, t, n) {
            "use strict";
            var r = n(3383).IteratorPrototype,
                i = n(30),
                o = n(9114),
                s = n(8003),
                a = n(7497),
                u = function() {
                    return this
                };
            e.exports = function(e, t, n, c) {
                var d = t + " Iterator";
                return e.prototype = i(r, {
                    next: o(+!c, n)
                }), s(e, d, !1, !0), a[d] = u, e
            }
        },
        8880: function(e, t, n) {
            var r = n(9781),
                i = n(3070),
                o = n(9114);
            e.exports = r ? function(e, t, n) {
                return i.f(e, t, o(1, n))
            } : function(e, t, n) {
                return e[t] = n, e
            }
        },
        9114: function(e) {
            e.exports = function(e, t) {
                return {
                    enumerable: !(1 & e),
                    configurable: !(2 & e),
                    writable: !(4 & e),
                    value: t
                }
            }
        },
        6135: function(e, t, n) {
            "use strict";
            var r = n(4948),
                i = n(3070),
                o = n(9114);
            e.exports = function(e, t, n) {
                var s = r(t);
                s in e ? i.f(e, s, o(0, n)) : e[s] = n
            }
        },
        7045: function(e, t, n) {
            var r = n(6339),
                i = n(3070);
            e.exports = function(e, t, n) {
                return n.get && r(n.get, t, {
                    getter: !0
                }), n.set && r(n.set, t, {
                    setter: !0
                }), i.f(e, t, n)
            }
        },
        8052: function(e, t, n) {
            var r = n(614),
                i = n(3070),
                o = n(6339),
                s = n(3072);
            e.exports = function(e, t, n, a) {
                a || (a = {});
                var u = a.enumerable,
                    c = void 0 !== a.name ? a.name : t;
                if (r(n) && o(n, c, a), a.global) u ? e[t] = n : s(t, n);
                else {
                    try {
                        a.unsafe ? e[t] && (u = !0) : delete e[t]
                    } catch (e) {}
                    u ? e[t] = n : i.f(e, t, {
                        value: n,
                        enumerable: !1,
                        configurable: !a.nonConfigurable,
                        writable: !a.nonWritable
                    })
                }
                return e
            }
        },
        9190: function(e, t, n) {
            var r = n(8052);
            e.exports = function(e, t, n) {
                for (var i in t) r(e, i, t[i], n);
                return e
            }
        },
        3072: function(e, t, n) {
            var r = n(7854),
                i = Object.defineProperty;
            e.exports = function(e, t) {
                try {
                    i(r, e, {
                        value: t,
                        configurable: !0,
                        writable: !0
                    })
                } catch (n) {
                    r[e] = t
                }
                return t
            }
        },
        654: function(e, t, n) {
            "use strict";
            var r = n(2109),
                i = n(6916),
                o = n(1913),
                s = n(6530),
                a = n(614),
                u = n(4994),
                c = n(9518),
                d = n(7674),
                l = n(8003),
                f = n(8880),
                v = n(8052),
                g = n(5112),
                p = n(7497),
                m = n(3383),
                h = s.PROPER,
                E = s.CONFIGURABLE,
                y = m.IteratorPrototype,
                S = m.BUGGY_SAFARI_ITERATORS,
                A = g("iterator"),
                b = "keys",
                C = "values",
                T = "entries",
                w = function() {
                    return this
                };
            e.exports = function(e, t, n, s, g, m, I) {
                u(n, t, s);
                var k, _, R, G = function(e) {
                        if (e === g && M) return M;
                        if (!S && e in P) return P[e];
                        switch (e) {
                            case b:
                            case C:
                            case T:
                                return function() {
                                    return new n(this, e)
                                }
                        }
                        return function() {
                            return new n(this)
                        }
                    },
                    x = t + " Iterator",
                    O = !1,
                    P = e.prototype,
                    D = P[A] || P["@@iterator"] || g && P[g],
                    M = !S && D || G(g),
                    F = "Array" == t && P.entries || D;
                if (F && (k = c(F.call(new e))) !== Object.prototype && k.next && (o || c(k) === y || (d ? d(k, y) : a(k[A]) || v(k, A, w)), l(k, x, !0, !0), o && (p[x] = w)), h && g == C && D && D.name !== C && (!o && E ? f(P, "name", C) : (O = !0, M = function() {
                        return i(D, this)
                    })), g)
                    if (_ = {
                            values: G(C),
                            keys: m ? M : G(b),
                            entries: G(T)
                        }, I)
                        for (R in _)(S || O || !(R in P)) && v(P, R, _[R]);
                    else r({
                        target: t,
                        proto: !0,
                        forced: S || O
                    }, _);
                return o && !I || P[A] === M || v(P, A, M, {
                    name: g
                }), p[t] = M, _
            }
        },
        7235: function(e, t, n) {
            var r = n(857),
                i = n(2597),
                o = n(6061),
                s = n(3070).f;
            e.exports = function(e) {
                var t = r.Symbol || (r.Symbol = {});
                i(t, e) || s(t, e, {
                    value: o.f(e)
                })
            }
        },
        5117: function(e, t, n) {
            "use strict";
            var r = n(6330),
                i = TypeError;
            e.exports = function(e, t) {
                if (!delete e[t]) throw i("Cannot delete property " + r(t) + " of " + r(e))
            }
        },
        9781: function(e, t, n) {
            var r = n(7293);
            e.exports = !r((function() {
                return 7 != Object.defineProperty({}, 1, {
                    get: function() {
                        return 7
                    }
                })[1]
            }))
        },
        317: function(e, t, n) {
            var r = n(7854),
                i = n(111),
                o = r.document,
                s = i(o) && i(o.createElement);
            e.exports = function(e) {
                return s ? o.createElement(e) : {}
            }
        },
        7207: function(e) {
            var t = TypeError;
            e.exports = function(e) {
                if (e > 9007199254740991) throw t("Maximum allowed index exceeded");
                return e
            }
        },
        3678: function(e) {
            e.exports = {
                IndexSizeError: {
                    s: "INDEX_SIZE_ERR",
                    c: 1,
                    m: 1
                },
                DOMStringSizeError: {
                    s: "DOMSTRING_SIZE_ERR",
                    c: 2,
                    m: 0
                },
                HierarchyRequestError: {
                    s: "HIERARCHY_REQUEST_ERR",
                    c: 3,
                    m: 1
                },
                WrongDocumentError: {
                    s: "WRONG_DOCUMENT_ERR",
                    c: 4,
                    m: 1
                },
                InvalidCharacterError: {
                    s: "INVALID_CHARACTER_ERR",
                    c: 5,
                    m: 1
                },
                NoDataAllowedError: {
                    s: "NO_DATA_ALLOWED_ERR",
                    c: 6,
                    m: 0
                },
                NoModificationAllowedError: {
                    s: "NO_MODIFICATION_ALLOWED_ERR",
                    c: 7,
                    m: 1
                },
                NotFoundError: {
                    s: "NOT_FOUND_ERR",
                    c: 8,
                    m: 1
                },
                NotSupportedError: {
                    s: "NOT_SUPPORTED_ERR",
                    c: 9,
                    m: 1
                },
                InUseAttributeError: {
                    s: "INUSE_ATTRIBUTE_ERR",
                    c: 10,
                    m: 1
                },
                InvalidStateError: {
                    s: "INVALID_STATE_ERR",
                    c: 11,
                    m: 1
                },
                SyntaxError: {
                    s: "SYNTAX_ERR",
                    c: 12,
                    m: 1
                },
                InvalidModificationError: {
                    s: "INVALID_MODIFICATION_ERR",
                    c: 13,
                    m: 1
                },
                NamespaceError: {
                    s: "NAMESPACE_ERR",
                    c: 14,
                    m: 1
                },
                InvalidAccessError: {
                    s: "INVALID_ACCESS_ERR",
                    c: 15,
                    m: 1
                },
                ValidationError: {
                    s: "VALIDATION_ERR",
                    c: 16,
                    m: 0
                },
                TypeMismatchError: {
                    s: "TYPE_MISMATCH_ERR",
                    c: 17,
                    m: 1
                },
                SecurityError: {
                    s: "SECURITY_ERR",
                    c: 18,
                    m: 1
                },
                NetworkError: {
                    s: "NETWORK_ERR",
                    c: 19,
                    m: 1
                },
                AbortError: {
                    s: "ABORT_ERR",
                    c: 20,
                    m: 1
                },
                URLMismatchError: {
                    s: "URL_MISMATCH_ERR",
                    c: 21,
                    m: 1
                },
                QuotaExceededError: {
                    s: "QUOTA_EXCEEDED_ERR",
                    c: 22,
                    m: 1
                },
                TimeoutError: {
                    s: "TIMEOUT_ERR",
                    c: 23,
                    m: 1
                },
                InvalidNodeTypeError: {
                    s: "INVALID_NODE_TYPE_ERR",
                    c: 24,
                    m: 1
                },
                DataCloneError: {
                    s: "DATA_CLONE_ERR",
                    c: 25,
                    m: 1
                }
            }
        },
        8324: function(e) {
            e.exports = {
                CSSRuleList: 0,
                CSSStyleDeclaration: 0,
                CSSValueList: 0,
                ClientRectList: 0,
                DOMRectList: 0,
                DOMStringList: 0,
                DOMTokenList: 1,
                DataTransferItemList: 0,
                FileList: 0,
                HTMLAllCollection: 0,
                HTMLCollection: 0,
                HTMLFormElement: 0,
                HTMLSelectElement: 0,
                MediaList: 0,
                MimeTypeArray: 0,
                NamedNodeMap: 0,
                NodeList: 1,
                PaintRequestList: 0,
                Plugin: 0,
                PluginArray: 0,
                SVGLengthList: 0,
                SVGNumberList: 0,
                SVGPathSegList: 0,
                SVGPointList: 0,
                SVGStringList: 0,
                SVGTransformList: 0,
                SourceBufferList: 0,
                StyleSheetList: 0,
                TextTrackCueList: 0,
                TextTrackList: 0,
                TouchList: 0
            }
        },
        8509: function(e, t, n) {
            var r = n(317)("span").classList,
                i = r && r.constructor && r.constructor.prototype;
            e.exports = i === Object.prototype ? void 0 : i
        },
        7871: function(e) {
            e.exports = "object" == typeof window && "object" != typeof Deno
        },
        1528: function(e, t, n) {
            var r = n(8113),
                i = n(7854);
            e.exports = /ipad|iphone|ipod/i.test(r) && void 0 !== i.Pebble
        },
        6833: function(e, t, n) {
            var r = n(8113);
            e.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(r)
        },
        5268: function(e, t, n) {
            var r = n(4326),
                i = n(7854);
            e.exports = "process" == r(i.process)
        },
        1036: function(e, t, n) {
            var r = n(8113);
            e.exports = /web0s(?!.*chrome)/i.test(r)
        },
        8113: function(e, t, n) {
            var r = n(5005);
            e.exports = r("navigator", "userAgent") || ""
        },
        7392: function(e, t, n) {
            var r, i, o = n(7854),
                s = n(8113),
                a = o.process,
                u = o.Deno,
                c = a && a.versions || u && u.version,
                d = c && c.v8;
            d && (i = (r = d.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])), !i && s && (!(r = s.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = s.match(/Chrome\/(\d+)/)) && (i = +r[1]), e.exports = i
        },
        748: function(e) {
            e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
        },
        2914: function(e, t, n) {
            var r = n(7293),
                i = n(9114);
            e.exports = !r((function() {
                var e = Error("a");
                return !("stack" in e) || (Object.defineProperty(e, "stack", i(1, 7)), 7 !== e.stack)
            }))
        },
        7762: function(e, t, n) {
            "use strict";
            var r = n(9781),
                i = n(7293),
                o = n(9670),
                s = n(30),
                a = n(6277),
                u = Error.prototype.toString,
                c = i((function() {
                    if (r) {
                        var e = s(Object.defineProperty({}, "name", {
                            get: function() {
                                return this === e
                            }
                        }));
                        if ("true" !== u.call(e)) return !0
                    }
                    return "2: 1" !== u.call({
                        message: 1,
                        name: 2
                    }) || "Error" !== u.call({})
                }));
            e.exports = c ? function() {
                var e = o(this),
                    t = a(e.name, "Error"),
                    n = a(e.message);
                return t ? n ? t + ": " + n : t : n
            } : u
        },
        2109: function(e, t, n) {
            var r = n(7854),
                i = n(1236).f,
                o = n(8880),
                s = n(8052),
                a = n(3072),
                u = n(9920),
                c = n(4705);
            e.exports = function(e, t) {
                var n, d, l, f, v, g = e.target,
                    p = e.global,
                    m = e.stat;
                if (n = p ? r : m ? r[g] || a(g, {}) : (r[g] || {}).prototype)
                    for (d in t) {
                        if (f = t[d], l = e.dontCallGetSet ? (v = i(n, d)) && v.value : n[d], !c(p ? d : g + (m ? "." : "#") + d, e.forced) && void 0 !== l) {
                            if (typeof f == typeof l) continue;
                            u(f, l)
                        }(e.sham || l && l.sham) && o(f, "sham", !0), s(n, d, f, e)
                    }
            }
        },
        7293: function(e) {
            e.exports = function(e) {
                try {
                    return !!e()
                } catch (e) {
                    return !0
                }
            }
        },
        7007: function(e, t, n) {
            "use strict";
            n(4916);
            var r = n(1702),
                i = n(8052),
                o = n(2261),
                s = n(7293),
                a = n(5112),
                u = n(8880),
                c = a("species"),
                d = RegExp.prototype;
            e.exports = function(e, t, n, l) {
                var f = a(e),
                    v = !s((function() {
                        var t = {};
                        return t[f] = function() {
                            return 7
                        }, 7 != "" [e](t)
                    })),
                    g = v && !s((function() {
                        var t = !1,
                            n = /a/;
                        return "split" === e && ((n = {}).constructor = {}, n.constructor[c] = function() {
                            return n
                        }, n.flags = "", n[f] = /./ [f]), n.exec = function() {
                            return t = !0, null
                        }, n[f](""), !t
                    }));
                if (!v || !g || n) {
                    var p = r(/./ [f]),
                        m = t(f, "" [e], (function(e, t, n, i, s) {
                            var a = r(e),
                                u = t.exec;
                            return u === o || u === d.exec ? v && !s ? {
                                done: !0,
                                value: p(t, n, i)
                            } : {
                                done: !0,
                                value: a(n, t, i)
                            } : {
                                done: !1
                            }
                        }));
                    i(String.prototype, e, m[0]), i(d, f, m[1])
                }
                l && u(d[f], "sham", !0)
            }
        },
        6677: function(e, t, n) {
            var r = n(7293);
            e.exports = !r((function() {
                return Object.isExtensible(Object.preventExtensions({}))
            }))
        },
        2104: function(e, t, n) {
            var r = n(4374),
                i = Function.prototype,
                o = i.apply,
                s = i.call;
            e.exports = "object" == typeof Reflect && Reflect.apply || (r ? s.bind(o) : function() {
                return s.apply(o, arguments)
            })
        },
        9974: function(e, t, n) {
            var r = n(1702),
                i = n(9662),
                o = n(4374),
                s = r(r.bind);
            e.exports = function(e, t) {
                return i(e), void 0 === t ? e : o ? s(e, t) : function() {
                    return e.apply(t, arguments)
                }
            }
        },
        4374: function(e, t, n) {
            var r = n(7293);
            e.exports = !r((function() {
                var e = function() {}.bind();
                return "function" != typeof e || e.hasOwnProperty("prototype")
            }))
        },
        7065: function(e, t, n) {
            "use strict";
            var r = n(1702),
                i = n(9662),
                o = n(111),
                s = n(2597),
                a = n(206),
                u = n(4374),
                c = Function,
                d = r([].concat),
                l = r([].join),
                f = {},
                v = function(e, t, n) {
                    if (!s(f, t)) {
                        for (var r = [], i = 0; i < t; i++) r[i] = "a[" + i + "]";
                        f[t] = c("C,a", "return new C(" + l(r, ",") + ")")
                    }
                    return f[t](e, n)
                };
            e.exports = u ? c.bind : function(e) {
                var t = i(this),
                    n = t.prototype,
                    r = a(arguments, 1),
                    s = function() {
                        var n = d(r, a(arguments));
                        return this instanceof s ? v(t, n.length, n) : t.apply(e, n)
                    };
                return o(n) && (s.prototype = n), s
            }
        },
        6916: function(e, t, n) {
            var r = n(4374),
                i = Function.prototype.call;
            e.exports = r ? i.bind(i) : function() {
                return i.apply(i, arguments)
            }
        },
        6530: function(e, t, n) {
            var r = n(9781),
                i = n(2597),
                o = Function.prototype,
                s = r && Object.getOwnPropertyDescriptor,
                a = i(o, "name"),
                u = a && "something" === function() {}.name,
                c = a && (!r || r && s(o, "name").configurable);
            e.exports = {
                EXISTS: a,
                PROPER: u,
                CONFIGURABLE: c
            }
        },
        1702: function(e, t, n) {
            var r = n(4374),
                i = Function.prototype,
                o = i.bind,
                s = i.call,
                a = r && o.bind(s, s);
            e.exports = r ? function(e) {
                return e && a(e)
            } : function(e) {
                return e && function() {
                    return s.apply(e, arguments)
                }
            }
        },
        5005: function(e, t, n) {
            var r = n(7854),
                i = n(614),
                o = function(e) {
                    return i(e) ? e : void 0
                };
            e.exports = function(e, t) {
                return arguments.length < 2 ? o(r[e]) : r[e] && r[e][t]
            }
        },
        1246: function(e, t, n) {
            var r = n(648),
                i = n(8173),
                o = n(7497),
                s = n(5112)("iterator");
            e.exports = function(e) {
                if (null != e) return i(e, s) || i(e, "@@iterator") || o[r(e)]
            }
        },
        8554: function(e, t, n) {
            var r = n(6916),
                i = n(9662),
                o = n(9670),
                s = n(6330),
                a = n(1246),
                u = TypeError;
            e.exports = function(e, t) {
                var n = arguments.length < 2 ? a(e) : t;
                if (i(n)) return o(r(n, e));
                throw u(s(e) + " is not iterable")
            }
        },
        8173: function(e, t, n) {
            var r = n(9662);
            e.exports = function(e, t) {
                var n = e[t];
                return null == n ? void 0 : r(n)
            }
        },
        7854: function(e, t, n) {
            var r = function(e) {
                return e && e.Math == Math && e
            };
            e.exports = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof n.g && n.g) || function() {
                return this
            }() || Function("return this")()
        },
        2597: function(e, t, n) {
            var r = n(1702),
                i = n(7908),
                o = r({}.hasOwnProperty);
            e.exports = Object.hasOwn || function(e, t) {
                return o(i(e), t)
            }
        },
        3501: function(e) {
            e.exports = {}
        },
        842: function(e, t, n) {
            var r = n(7854);
            e.exports = function(e, t) {
                var n = r.console;
                n && n.error && (1 == arguments.length ? n.error(e) : n.error(e, t))
            }
        },
        490: function(e, t, n) {
            var r = n(5005);
            e.exports = r("document", "documentElement")
        },
        4664: function(e, t, n) {
            var r = n(9781),
                i = n(7293),
                o = n(317);
            e.exports = !r && !i((function() {
                return 7 != Object.defineProperty(o("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a
            }))
        },
        8361: function(e, t, n) {
            var r = n(1702),
                i = n(7293),
                o = n(4326),
                s = Object,
                a = r("".split);
            e.exports = i((function() {
                return !s("z").propertyIsEnumerable(0)
            })) ? function(e) {
                return "String" == o(e) ? a(e, "") : s(e)
            } : s
        },
        9587: function(e, t, n) {
            var r = n(614),
                i = n(111),
                o = n(7674);
            e.exports = function(e, t, n) {
                var s, a;
                return o && r(s = t.constructor) && s !== n && i(a = s.prototype) && a !== n.prototype && o(e, a), e
            }
        },
        2788: function(e, t, n) {
            var r = n(1702),
                i = n(614),
                o = n(5465),
                s = r(Function.toString);
            i(o.inspectSource) || (o.inspectSource = function(e) {
                return s(e)
            }), e.exports = o.inspectSource
        },
        8340: function(e, t, n) {
            var r = n(111),
                i = n(8880);
            e.exports = function(e, t) {
                r(t) && "cause" in t && i(e, "cause", t.cause)
            }
        },
        2423: function(e, t, n) {
            var r = n(2109),
                i = n(1702),
                o = n(3501),
                s = n(111),
                a = n(2597),
                u = n(3070).f,
                c = n(8006),
                d = n(1156),
                l = n(2050),
                f = n(9711),
                v = n(6677),
                g = !1,
                p = f("meta"),
                m = 0,
                h = function(e) {
                    u(e, p, {
                        value: {
                            objectID: "O" + m++,
                            weakData: {}
                        }
                    })
                },
                E = e.exports = {
                    enable: function() {
                        E.enable = function() {}, g = !0;
                        var e = c.f,
                            t = i([].splice),
                            n = {};
                        n[p] = 1, e(n).length && (c.f = function(n) {
                            for (var r = e(n), i = 0, o = r.length; i < o; i++)
                                if (r[i] === p) {
                                    t(r, i, 1);
                                    break
                                }
                            return r
                        }, r({
                            target: "Object",
                            stat: !0,
                            forced: !0
                        }, {
                            getOwnPropertyNames: d.f
                        }))
                    },
                    fastKey: function(e, t) {
                        if (!s(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                        if (!a(e, p)) {
                            if (!l(e)) return "F";
                            if (!t) return "E";
                            h(e)
                        }
                        return e[p].objectID
                    },
                    getWeakData: function(e, t) {
                        if (!a(e, p)) {
                            if (!l(e)) return !0;
                            if (!t) return !1;
                            h(e)
                        }
                        return e[p].weakData
                    },
                    onFreeze: function(e) {
                        return v && g && l(e) && !a(e, p) && h(e), e
                    }
                };
            o[p] = !0
        },
        9909: function(e, t, n) {
            var r, i, o, s = n(8536),
                a = n(7854),
                u = n(1702),
                c = n(111),
                d = n(8880),
                l = n(2597),
                f = n(5465),
                v = n(6200),
                g = n(3501),
                p = "Object already initialized",
                m = a.TypeError,
                h = a.WeakMap;
            if (s || f.state) {
                var E = f.state || (f.state = new h),
                    y = u(E.get),
                    S = u(E.has),
                    A = u(E.set);
                r = function(e, t) {
                    if (S(E, e)) throw new m(p);
                    return t.facade = e, A(E, e, t), t
                }, i = function(e) {
                    return y(E, e) || {}
                }, o = function(e) {
                    return S(E, e)
                }
            } else {
                var b = v("state");
                g[b] = !0, r = function(e, t) {
                    if (l(e, b)) throw new m(p);
                    return t.facade = e, d(e, b, t), t
                }, i = function(e) {
                    return l(e, b) ? e[b] : {}
                }, o = function(e) {
                    return l(e, b)
                }
            }
            e.exports = {
                set: r,
                get: i,
                has: o,
                enforce: function(e) {
                    return o(e) ? i(e) : r(e, {})
                },
                getterFor: function(e) {
                    return function(t) {
                        var n;
                        if (!c(t) || (n = i(t)).type !== e) throw m("Incompatible receiver, " + e + " required");
                        return n
                    }
                }
            }
        },
        7659: function(e, t, n) {
            var r = n(5112),
                i = n(7497),
                o = r("iterator"),
                s = Array.prototype;
            e.exports = function(e) {
                return void 0 !== e && (i.Array === e || s[o] === e)
            }
        },
        3157: function(e, t, n) {
            var r = n(4326);
            e.exports = Array.isArray || function(e) {
                return "Array" == r(e)
            }
        },
        614: function(e) {
            e.exports = function(e) {
                return "function" == typeof e
            }
        },
        4411: function(e, t, n) {
            var r = n(1702),
                i = n(7293),
                o = n(614),
                s = n(648),
                a = n(5005),
                u = n(2788),
                c = function() {},
                d = [],
                l = a("Reflect", "construct"),
                f = /^\s*(?:class|function)\b/,
                v = r(f.exec),
                g = !f.exec(c),
                p = function(e) {
                    if (!o(e)) return !1;
                    try {
                        return l(c, d, e), !0
                    } catch (e) {
                        return !1
                    }
                },
                m = function(e) {
                    if (!o(e)) return !1;
                    switch (s(e)) {
                        case "AsyncFunction":
                        case "GeneratorFunction":
                        case "AsyncGeneratorFunction":
                            return !1
                    }
                    try {
                        return g || !!v(f, u(e))
                    } catch (e) {
                        return !0
                    }
                };
            m.sham = !0, e.exports = !l || i((function() {
                var e;
                return p(p.call) || !p(Object) || !p((function() {
                    e = !0
                })) || e
            })) ? m : p
        },
        5032: function(e, t, n) {
            var r = n(2597);
            e.exports = function(e) {
                return void 0 !== e && (r(e, "value") || r(e, "writable"))
            }
        },
        4705: function(e, t, n) {
            var r = n(7293),
                i = n(614),
                o = /#|\.prototype\./,
                s = function(e, t) {
                    var n = u[a(e)];
                    return n == d || n != c && (i(t) ? r(t) : !!t)
                },
                a = s.normalize = function(e) {
                    return String(e).replace(o, ".").toLowerCase()
                },
                u = s.data = {},
                c = s.NATIVE = "N",
                d = s.POLYFILL = "P";
            e.exports = s
        },
        111: function(e, t, n) {
            var r = n(614);
            e.exports = function(e) {
                return "object" == typeof e ? null !== e : r(e)
            }
        },
        1913: function(e) {
            e.exports = !1
        },
        2190: function(e, t, n) {
            var r = n(5005),
                i = n(614),
                o = n(7976),
                s = n(3307),
                a = Object;
            e.exports = s ? function(e) {
                return "symbol" == typeof e
            } : function(e) {
                var t = r("Symbol");
                return i(t) && o(t.prototype, a(e))
            }
        },
        408: function(e, t, n) {
            var r = n(9974),
                i = n(6916),
                o = n(9670),
                s = n(6330),
                a = n(7659),
                u = n(6244),
                c = n(7976),
                d = n(8554),
                l = n(1246),
                f = n(9212),
                v = TypeError,
                g = function(e, t) {
                    this.stopped = e, this.result = t
                },
                p = g.prototype;
            e.exports = function(e, t, n) {
                var m, h, E, y, S, A, b, C = n && n.that,
                    T = !(!n || !n.AS_ENTRIES),
                    w = !(!n || !n.IS_ITERATOR),
                    I = !(!n || !n.INTERRUPTED),
                    k = r(t, C),
                    _ = function(e) {
                        return m && f(m, "normal", e), new g(!0, e)
                    },
                    R = function(e) {
                        return T ? (o(e), I ? k(e[0], e[1], _) : k(e[0], e[1])) : I ? k(e, _) : k(e)
                    };
                if (w) m = e;
                else {
                    if (!(h = l(e))) throw v(s(e) + " is not iterable");
                    if (a(h)) {
                        for (E = 0, y = u(e); y > E; E++)
                            if ((S = R(e[E])) && c(p, S)) return S;
                        return new g(!1)
                    }
                    m = d(e, h)
                }
                for (A = m.next; !(b = i(A, m)).done;) {
                    try {
                        S = R(b.value)
                    } catch (e) {
                        f(m, "throw", e)
                    }
                    if ("object" == typeof S && S && c(p, S)) return S
                }
                return new g(!1)
            }
        },
        9212: function(e, t, n) {
            var r = n(6916),
                i = n(9670),
                o = n(8173);
            e.exports = function(e, t, n) {
                var s, a;
                i(e);
                try {
                    if (!(s = o(e, "return"))) {
                        if ("throw" === t) throw n;
                        return n
                    }
                    s = r(s, e)
                } catch (e) {
                    a = !0, s = e
                }
                if ("throw" === t) throw n;
                if (a) throw s;
                return i(s), n
            }
        },
        3383: function(e, t, n) {
            "use strict";
            var r, i, o, s = n(7293),
                a = n(614),
                u = n(30),
                c = n(9518),
                d = n(8052),
                l = n(5112),
                f = n(1913),
                v = l("iterator"),
                g = !1;
            [].keys && ("next" in (o = [].keys()) ? (i = c(c(o))) !== Object.prototype && (r = i) : g = !0), null == r || s((function() {
                var e = {};
                return r[v].call(e) !== e
            })) ? r = {} : f && (r = u(r)), a(r[v]) || d(r, v, (function() {
                return this
            })), e.exports = {
                IteratorPrototype: r,
                BUGGY_SAFARI_ITERATORS: g
            }
        },
        7497: function(e) {
            e.exports = {}
        },
        6244: function(e, t, n) {
            var r = n(7466);
            e.exports = function(e) {
                return r(e.length)
            }
        },
        6339: function(e, t, n) {
            var r = n(7293),
                i = n(614),
                o = n(2597),
                s = n(9781),
                a = n(6530).CONFIGURABLE,
                u = n(2788),
                c = n(9909),
                d = c.enforce,
                l = c.get,
                f = Object.defineProperty,
                v = s && !r((function() {
                    return 8 !== f((function() {}), "length", {
                        value: 8
                    }).length
                })),
                g = String(String).split("String"),
                p = e.exports = function(e, t, n) {
                    "Symbol(" === String(t).slice(0, 7) && (t = "[" + String(t).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), n && n.getter && (t = "get " + t), n && n.setter && (t = "set " + t), (!o(e, "name") || a && e.name !== t) && (s ? f(e, "name", {
                        value: t,
                        configurable: !0
                    }) : e.name = t), v && n && o(n, "arity") && e.length !== n.arity && f(e, "length", {
                        value: n.arity
                    });
                    try {
                        n && o(n, "constructor") && n.constructor ? s && f(e, "prototype", {
                            writable: !1
                        }) : e.prototype && (e.prototype = void 0)
                    } catch (e) {}
                    var r = d(e);
                    return o(r, "source") || (r.source = g.join("string" == typeof t ? t : "")), e
                };
            Function.prototype.toString = p((function() {
                return i(this) && l(this).source || u(this)
            }), "toString")
        },
        4758: function(e) {
            var t = Math.ceil,
                n = Math.floor;
            e.exports = Math.trunc || function(e) {
                var r = +e;
                return (r > 0 ? n : t)(r)
            }
        },
        5948: function(e, t, n) {
            var r, i, o, s, a, u, c, d, l = n(7854),
                f = n(9974),
                v = n(1236).f,
                g = n(261).set,
                p = n(6833),
                m = n(1528),
                h = n(1036),
                E = n(5268),
                y = l.MutationObserver || l.WebKitMutationObserver,
                S = l.document,
                A = l.process,
                b = l.Promise,
                C = v(l, "queueMicrotask"),
                T = C && C.value;
            T || (r = function() {
                var e, t;
                for (E && (e = A.domain) && e.exit(); i;) {
                    t = i.fn, i = i.next;
                    try {
                        t()
                    } catch (e) {
                        throw i ? s() : o = void 0, e
                    }
                }
                o = void 0, e && e.enter()
            }, p || E || h || !y || !S ? !m && b && b.resolve ? ((c = b.resolve(void 0)).constructor = b, d = f(c.then, c), s = function() {
                d(r)
            }) : E ? s = function() {
                A.nextTick(r)
            } : (g = f(g, l), s = function() {
                g(r)
            }) : (a = !0, u = S.createTextNode(""), new y(r).observe(u, {
                characterData: !0
            }), s = function() {
                u.data = a = !a
            })), e.exports = T || function(e) {
                var t = {
                    fn: e,
                    next: void 0
                };
                o && (o.next = t), i || (i = t, s()), o = t
            }
        },
        735: function(e, t, n) {
            var r = n(133);
            e.exports = r && !!Symbol.for && !!Symbol.keyFor
        },
        133: function(e, t, n) {
            var r = n(7392),
                i = n(7293);
            e.exports = !!Object.getOwnPropertySymbols && !i((function() {
                var e = Symbol();
                return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && r && r < 41
            }))
        },
        8536: function(e, t, n) {
            var r = n(7854),
                i = n(614),
                o = n(2788),
                s = r.WeakMap;
            e.exports = i(s) && /native code/.test(o(s))
        },
        8523: function(e, t, n) {
            "use strict";
            var r = n(9662),
                i = function(e) {
                    var t, n;
                    this.promise = new e((function(e, r) {
                        if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
                        t = e, n = r
                    })), this.resolve = r(t), this.reject = r(n)
                };
            e.exports.f = function(e) {
                return new i(e)
            }
        },
        6277: function(e, t, n) {
            var r = n(1340);
            e.exports = function(e, t) {
                return void 0 === e ? arguments.length < 2 ? "" : t : r(e)
            }
        },
        3009: function(e, t, n) {
            var r = n(7854),
                i = n(7293),
                o = n(1702),
                s = n(1340),
                a = n(3111).trim,
                u = n(1361),
                c = r.parseInt,
                d = r.Symbol,
                l = d && d.iterator,
                f = /^[+-]?0x/i,
                v = o(f.exec),
                g = 8 !== c(u + "08") || 22 !== c(u + "0x16") || l && !i((function() {
                    c(Object(l))
                }));
            e.exports = g ? function(e, t) {
                var n = a(s(e));
                return c(n, t >>> 0 || (v(f, n) ? 16 : 10))
            } : c
        },
        30: function(e, t, n) {
            var r, i = n(9670),
                o = n(6048),
                s = n(748),
                a = n(3501),
                u = n(490),
                c = n(317),
                d = n(6200)("IE_PROTO"),
                l = function() {},
                f = function(e) {
                    return "<script>" + e + "<\/script>"
                },
                v = function(e) {
                    e.write(f("")), e.close();
                    var t = e.parentWindow.Object;
                    return e = null, t
                },
                g = function() {
                    try {
                        r = new ActiveXObject("htmlfile")
                    } catch (e) {}
                    var e, t;
                    g = "undefined" != typeof document ? document.domain && r ? v(r) : ((t = c("iframe")).style.display = "none", u.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(f("document.F=Object")), e.close(), e.F) : v(r);
                    for (var n = s.length; n--;) delete g.prototype[s[n]];
                    return g()
                };
            a[d] = !0, e.exports = Object.create || function(e, t) {
                var n;
                return null !== e ? (l.prototype = i(e), n = new l, l.prototype = null, n[d] = e) : n = g(), void 0 === t ? n : o.f(n, t)
            }
        },
        6048: function(e, t, n) {
            var r = n(9781),
                i = n(3353),
                o = n(3070),
                s = n(9670),
                a = n(5656),
                u = n(1956);
            t.f = r && !i ? Object.defineProperties : function(e, t) {
                s(e);
                for (var n, r = a(t), i = u(t), c = i.length, d = 0; c > d;) o.f(e, n = i[d++], r[n]);
                return e
            }
        },
        3070: function(e, t, n) {
            var r = n(9781),
                i = n(4664),
                o = n(3353),
                s = n(9670),
                a = n(4948),
                u = TypeError,
                c = Object.defineProperty,
                d = Object.getOwnPropertyDescriptor;
            t.f = r ? o ? function(e, t, n) {
                if (s(e), t = a(t), s(n), "function" == typeof e && "prototype" === t && "value" in n && "writable" in n && !n.writable) {
                    var r = d(e, t);
                    r && r.writable && (e[t] = n.value, n = {
                        configurable: "configurable" in n ? n.configurable : r.configurable,
                        enumerable: "enumerable" in n ? n.enumerable : r.enumerable,
                        writable: !1
                    })
                }
                return c(e, t, n)
            } : c : function(e, t, n) {
                if (s(e), t = a(t), s(n), i) try {
                    return c(e, t, n)
                } catch (e) {}
                if ("get" in n || "set" in n) throw u("Accessors not supported");
                return "value" in n && (e[t] = n.value), e
            }
        },
        1236: function(e, t, n) {
            var r = n(9781),
                i = n(6916),
                o = n(5296),
                s = n(9114),
                a = n(5656),
                u = n(4948),
                c = n(2597),
                d = n(4664),
                l = Object.getOwnPropertyDescriptor;
            t.f = r ? l : function(e, t) {
                if (e = a(e), t = u(t), d) try {
                    return l(e, t)
                } catch (e) {}
                if (c(e, t)) return s(!i(o.f, e, t), e[t])
            }
        },
        1156: function(e, t, n) {
            var r = n(4326),
                i = n(5656),
                o = n(8006).f,
                s = n(1589),
                a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
            e.exports.f = function(e) {
                return a && "Window" == r(e) ? function(e) {
                    try {
                        return o(e)
                    } catch (e) {
                        return s(a)
                    }
                }(e) : o(i(e))
            }
        },
        8006: function(e, t, n) {
            var r = n(6324),
                i = n(748).concat("length", "prototype");
            t.f = Object.getOwnPropertyNames || function(e) {
                return r(e, i)
            }
        },
        5181: function(e, t) {
            t.f = Object.getOwnPropertySymbols
        },
        9518: function(e, t, n) {
            var r = n(2597),
                i = n(614),
                o = n(7908),
                s = n(6200),
                a = n(8544),
                u = s("IE_PROTO"),
                c = Object,
                d = c.prototype;
            e.exports = a ? c.getPrototypeOf : function(e) {
                var t = o(e);
                if (r(t, u)) return t[u];
                var n = t.constructor;
                return i(n) && t instanceof n ? n.prototype : t instanceof c ? d : null
            }
        },
        2050: function(e, t, n) {
            var r = n(7293),
                i = n(111),
                o = n(4326),
                s = n(7556),
                a = Object.isExtensible,
                u = r((function() {
                    a(1)
                }));
            e.exports = u || s ? function(e) {
                return !!i(e) && (!s || "ArrayBuffer" != o(e)) && (!a || a(e))
            } : a
        },
        7976: function(e, t, n) {
            var r = n(1702);
            e.exports = r({}.isPrototypeOf)
        },
        6324: function(e, t, n) {
            var r = n(1702),
                i = n(2597),
                o = n(5656),
                s = n(1318).indexOf,
                a = n(3501),
                u = r([].push);
            e.exports = function(e, t) {
                var n, r = o(e),
                    c = 0,
                    d = [];
                for (n in r) !i(a, n) && i(r, n) && u(d, n);
                for (; t.length > c;) i(r, n = t[c++]) && (~s(d, n) || u(d, n));
                return d
            }
        },
        1956: function(e, t, n) {
            var r = n(6324),
                i = n(748);
            e.exports = Object.keys || function(e) {
                return r(e, i)
            }
        },
        5296: function(e, t) {
            "use strict";
            var n = {}.propertyIsEnumerable,
                r = Object.getOwnPropertyDescriptor,
                i = r && !n.call({
                    1: 2
                }, 1);
            t.f = i ? function(e) {
                var t = r(this, e);
                return !!t && t.enumerable
            } : n
        },
        7674: function(e, t, n) {
            var r = n(1702),
                i = n(9670),
                o = n(6077);
            e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
                var e, t = !1,
                    n = {};
                try {
                    (e = r(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set))(n, []), t = n instanceof Array
                } catch (e) {}
                return function(n, r) {
                    return i(n), o(r), t ? e(n, r) : n.__proto__ = r, n
                }
            }() : void 0)
        },
        4699: function(e, t, n) {
            var r = n(9781),
                i = n(1702),
                o = n(1956),
                s = n(5656),
                a = i(n(5296).f),
                u = i([].push),
                c = function(e) {
                    return function(t) {
                        for (var n, i = s(t), c = o(i), d = c.length, l = 0, f = []; d > l;) n = c[l++], r && !a(i, n) || u(f, e ? [n, i[n]] : i[n]);
                        return f
                    }
                };
            e.exports = {
                entries: c(!0),
                values: c(!1)
            }
        },
        288: function(e, t, n) {
            "use strict";
            var r = n(1694),
                i = n(648);
            e.exports = r ? {}.toString : function() {
                return "[object " + i(this) + "]"
            }
        },
        2140: function(e, t, n) {
            var r = n(6916),
                i = n(614),
                o = n(111),
                s = TypeError;
            e.exports = function(e, t) {
                var n, a;
                if ("string" === t && i(n = e.toString) && !o(a = r(n, e))) return a;
                if (i(n = e.valueOf) && !o(a = r(n, e))) return a;
                if ("string" !== t && i(n = e.toString) && !o(a = r(n, e))) return a;
                throw s("Can't convert object to primitive value")
            }
        },
        3887: function(e, t, n) {
            var r = n(5005),
                i = n(1702),
                o = n(8006),
                s = n(5181),
                a = n(9670),
                u = i([].concat);
            e.exports = r("Reflect", "ownKeys") || function(e) {
                var t = o.f(a(e)),
                    n = s.f;
                return n ? u(t, n(e)) : t
            }
        },
        857: function(e, t, n) {
            var r = n(7854);
            e.exports = r
        },
        2534: function(e) {
            e.exports = function(e) {
                try {
                    return {
                        error: !1,
                        value: e()
                    }
                } catch (e) {
                    return {
                        error: !0,
                        value: e
                    }
                }
            }
        },
        3702: function(e, t, n) {
            var r = n(7854),
                i = n(2492),
                o = n(614),
                s = n(4705),
                a = n(2788),
                u = n(5112),
                c = n(7871),
                d = n(1913),
                l = n(7392),
                f = i && i.prototype,
                v = u("species"),
                g = !1,
                p = o(r.PromiseRejectionEvent),
                m = s("Promise", (function() {
                    var e = a(i),
                        t = e !== String(i);
                    if (!t && 66 === l) return !0;
                    if (d && (!f.catch || !f.finally)) return !0;
                    if (l >= 51 && /native code/.test(e)) return !1;
                    var n = new i((function(e) {
                            e(1)
                        })),
                        r = function(e) {
                            e((function() {}), (function() {}))
                        };
                    return (n.constructor = {})[v] = r, !(g = n.then((function() {})) instanceof r) || !t && c && !p
                }));
            e.exports = {
                CONSTRUCTOR: m,
                REJECTION_EVENT: p,
                SUBCLASSING: g
            }
        },
        2492: function(e, t, n) {
            var r = n(7854);
            e.exports = r.Promise
        },
        9478: function(e, t, n) {
            var r = n(9670),
                i = n(111),
                o = n(8523);
            e.exports = function(e, t) {
                if (r(e), i(t) && t.constructor === e) return t;
                var n = o.f(e);
                return (0, n.resolve)(t), n.promise
            }
        },
        612: function(e, t, n) {
            var r = n(2492),
                i = n(7072),
                o = n(3702).CONSTRUCTOR;
            e.exports = o || !i((function(e) {
                r.all(e).then(void 0, (function() {}))
            }))
        },
        2626: function(e, t, n) {
            var r = n(3070).f;
            e.exports = function(e, t, n) {
                n in e || r(e, n, {
                    configurable: !0,
                    get: function() {
                        return t[n]
                    },
                    set: function(e) {
                        t[n] = e
                    }
                })
            }
        },
        8572: function(e) {
            var t = function() {
                this.head = null, this.tail = null
            };
            t.prototype = {
                add: function(e) {
                    var t = {
                        item: e,
                        next: null
                    };
                    this.head ? this.tail.next = t : this.head = t, this.tail = t
                },
                get: function() {
                    var e = this.head;
                    if (e) return this.head = e.next, this.tail === e && (this.tail = null), e.item
                }
            }, e.exports = t
        },
        7651: function(e, t, n) {
            var r = n(6916),
                i = n(9670),
                o = n(614),
                s = n(4326),
                a = n(2261),
                u = TypeError;
            e.exports = function(e, t) {
                var n = e.exec;
                if (o(n)) {
                    var c = r(n, e, t);
                    return null !== c && i(c), c
                }
                if ("RegExp" === s(e)) return r(a, e, t);
                throw u("RegExp#exec called on incompatible receiver")
            }
        },
        2261: function(e, t, n) {
            "use strict";
            var r, i, o = n(6916),
                s = n(1702),
                a = n(1340),
                u = n(7066),
                c = n(2999),
                d = n(2309),
                l = n(30),
                f = n(9909).get,
                v = n(9441),
                g = n(7168),
                p = d("native-string-replace", String.prototype.replace),
                m = RegExp.prototype.exec,
                h = m,
                E = s("".charAt),
                y = s("".indexOf),
                S = s("".replace),
                A = s("".slice),
                b = (i = /b*/g, o(m, r = /a/, "a"), o(m, i, "a"), 0 !== r.lastIndex || 0 !== i.lastIndex),
                C = c.BROKEN_CARET,
                T = void 0 !== /()??/.exec("")[1];
            (b || T || C || v || g) && (h = function(e) {
                var t, n, r, i, s, c, d, v = this,
                    g = f(v),
                    w = a(e),
                    I = g.raw;
                if (I) return I.lastIndex = v.lastIndex, t = o(h, I, w), v.lastIndex = I.lastIndex, t;
                var k = g.groups,
                    _ = C && v.sticky,
                    R = o(u, v),
                    G = v.source,
                    x = 0,
                    O = w;
                if (_ && (R = S(R, "y", ""), -1 === y(R, "g") && (R += "g"), O = A(w, v.lastIndex), v.lastIndex > 0 && (!v.multiline || v.multiline && "\n" !== E(w, v.lastIndex - 1)) && (G = "(?: " + G + ")", O = " " + O, x++), n = new RegExp("^(?:" + G + ")", R)), T && (n = new RegExp("^" + G + "$(?!\\s)", R)), b && (r = v.lastIndex), i = o(m, _ ? n : v, O), _ ? i ? (i.input = A(i.input, x), i[0] = A(i[0], x), i.index = v.lastIndex, v.lastIndex += i[0].length) : v.lastIndex = 0 : b && i && (v.lastIndex = v.global ? i.index + i[0].length : r), T && i && i.length > 1 && o(p, i[0], n, (function() {
                        for (s = 1; s < arguments.length - 2; s++) void 0 === arguments[s] && (i[s] = void 0)
                    })), i && k)
                    for (i.groups = c = l(null), s = 0; s < k.length; s++) c[(d = k[s])[0]] = i[d[1]];
                return i
            }), e.exports = h
        },
        7066: function(e, t, n) {
            "use strict";
            var r = n(9670);
            e.exports = function() {
                var e = r(this),
                    t = "";
                return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t
            }
        },
        4706: function(e, t, n) {
            var r = n(6916),
                i = n(2597),
                o = n(7976),
                s = n(7066),
                a = RegExp.prototype;
            e.exports = function(e) {
                var t = e.flags;
                return void 0 !== t || "flags" in a || i(e, "flags") || !o(a, e) ? t : r(s, e)
            }
        },
        2999: function(e, t, n) {
            var r = n(7293),
                i = n(7854).RegExp,
                o = r((function() {
                    var e = i("a", "y");
                    return e.lastIndex = 2, null != e.exec("abcd")
                })),
                s = o || r((function() {
                    return !i("a", "y").sticky
                })),
                a = o || r((function() {
                    var e = i("^r", "gy");
                    return e.lastIndex = 2, null != e.exec("str")
                }));
            e.exports = {
                BROKEN_CARET: a,
                MISSED_STICKY: s,
                UNSUPPORTED_Y: o
            }
        },
        9441: function(e, t, n) {
            var r = n(7293),
                i = n(7854).RegExp;
            e.exports = r((function() {
                var e = i(".", "s");
                return !(e.dotAll && e.exec("\n") && "s" === e.flags)
            }))
        },
        7168: function(e, t, n) {
            var r = n(7293),
                i = n(7854).RegExp;
            e.exports = r((function() {
                var e = i("(?<a>b)", "g");
                return "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c")
            }))
        },
        4488: function(e) {
            var t = TypeError;
            e.exports = function(e) {
                if (null == e) throw t("Can't call method on " + e);
                return e
            }
        },
        6340: function(e, t, n) {
            "use strict";
            var r = n(5005),
                i = n(3070),
                o = n(5112),
                s = n(9781),
                a = o("species");
            e.exports = function(e) {
                var t = r(e),
                    n = i.f;
                s && t && !t[a] && n(t, a, {
                    configurable: !0,
                    get: function() {
                        return this
                    }
                })
            }
        },
        8003: function(e, t, n) {
            var r = n(3070).f,
                i = n(2597),
                o = n(5112)("toStringTag");
            e.exports = function(e, t, n) {
                e && !n && (e = e.prototype), e && !i(e, o) && r(e, o, {
                    configurable: !0,
                    value: t
                })
            }
        },
        6200: function(e, t, n) {
            var r = n(2309),
                i = n(9711),
                o = r("keys");
            e.exports = function(e) {
                return o[e] || (o[e] = i(e))
            }
        },
        5465: function(e, t, n) {
            var r = n(7854),
                i = n(3072),
                o = "__core-js_shared__",
                s = r[o] || i(o, {});
            e.exports = s
        },
        2309: function(e, t, n) {
            var r = n(1913),
                i = n(5465);
            (e.exports = function(e, t) {
                return i[e] || (i[e] = void 0 !== t ? t : {})
            })("versions", []).push({
                version: "3.23.3",
                mode: r ? "pure" : "global",
                copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
                license: "https://github.com/zloirock/core-js/blob/v3.23.3/LICENSE",
                source: "https://github.com/zloirock/core-js"
            })
        },
        6707: function(e, t, n) {
            var r = n(9670),
                i = n(9483),
                o = n(5112)("species");
            e.exports = function(e, t) {
                var n, s = r(e).constructor;
                return void 0 === s || null == (n = r(s)[o]) ? t : i(n)
            }
        },
        8710: function(e, t, n) {
            var r = n(1702),
                i = n(9303),
                o = n(1340),
                s = n(4488),
                a = r("".charAt),
                u = r("".charCodeAt),
                c = r("".slice),
                d = function(e) {
                    return function(t, n) {
                        var r, d, l = o(s(t)),
                            f = i(n),
                            v = l.length;
                        return f < 0 || f >= v ? e ? "" : void 0 : (r = u(l, f)) < 55296 || r > 56319 || f + 1 === v || (d = u(l, f + 1)) < 56320 || d > 57343 ? e ? a(l, f) : r : e ? c(l, f, f + 2) : d - 56320 + (r - 55296 << 10) + 65536
                    }
                };
            e.exports = {
                codeAt: d(!1),
                charAt: d(!0)
            }
        },
        3111: function(e, t, n) {
            var r = n(1702),
                i = n(4488),
                o = n(1340),
                s = n(1361),
                a = r("".replace),
                u = "[" + s + "]",
                c = RegExp("^" + u + u + "*"),
                d = RegExp(u + u + "*$"),
                l = function(e) {
                    return function(t) {
                        var n = o(i(t));
                        return 1 & e && (n = a(n, c, "")), 2 & e && (n = a(n, d, "")), n
                    }
                };
            e.exports = {
                start: l(1),
                end: l(2),
                trim: l(3)
            }
        },
        6532: function(e, t, n) {
            var r = n(6916),
                i = n(5005),
                o = n(5112),
                s = n(8052);
            e.exports = function() {
                var e = i("Symbol"),
                    t = e && e.prototype,
                    n = t && t.valueOf,
                    a = o("toPrimitive");
                t && !t[a] && s(t, a, (function(e) {
                    return r(n, this)
                }), {
                    arity: 1
                })
            }
        },
        261: function(e, t, n) {
            var r, i, o, s, a = n(7854),
                u = n(2104),
                c = n(9974),
                d = n(614),
                l = n(2597),
                f = n(7293),
                v = n(490),
                g = n(206),
                p = n(317),
                m = n(8053),
                h = n(6833),
                E = n(5268),
                y = a.setImmediate,
                S = a.clearImmediate,
                A = a.process,
                b = a.Dispatch,
                C = a.Function,
                T = a.MessageChannel,
                w = a.String,
                I = 0,
                k = {};
            try {
                r = a.location
            } catch (e) {}
            var _ = function(e) {
                    if (l(k, e)) {
                        var t = k[e];
                        delete k[e], t()
                    }
                },
                R = function(e) {
                    return function() {
                        _(e)
                    }
                },
                G = function(e) {
                    _(e.data)
                },
                x = function(e) {
                    a.postMessage(w(e), r.protocol + "//" + r.host)
                };
            y && S || (y = function(e) {
                m(arguments.length, 1);
                var t = d(e) ? e : C(e),
                    n = g(arguments, 1);
                return k[++I] = function() {
                    u(t, void 0, n)
                }, i(I), I
            }, S = function(e) {
                delete k[e]
            }, E ? i = function(e) {
                A.nextTick(R(e))
            } : b && b.now ? i = function(e) {
                b.now(R(e))
            } : T && !h ? (s = (o = new T).port2, o.port1.onmessage = G, i = c(s.postMessage, s)) : a.addEventListener && d(a.postMessage) && !a.importScripts && r && "file:" !== r.protocol && !f(x) ? (i = x, a.addEventListener("message", G, !1)) : i = "onreadystatechange" in p("script") ? function(e) {
                v.appendChild(p("script")).onreadystatechange = function() {
                    v.removeChild(this), _(e)
                }
            } : function(e) {
                setTimeout(R(e), 0)
            }), e.exports = {
                set: y,
                clear: S
            }
        },
        1400: function(e, t, n) {
            var r = n(9303),
                i = Math.max,
                o = Math.min;
            e.exports = function(e, t) {
                var n = r(e);
                return n < 0 ? i(n + t, 0) : o(n, t)
            }
        },
        5656: function(e, t, n) {
            var r = n(8361),
                i = n(4488);
            e.exports = function(e) {
                return r(i(e))
            }
        },
        9303: function(e, t, n) {
            var r = n(4758);
            e.exports = function(e) {
                var t = +e;
                return t != t || 0 === t ? 0 : r(t)
            }
        },
        7466: function(e, t, n) {
            var r = n(9303),
                i = Math.min;
            e.exports = function(e) {
                return e > 0 ? i(r(e), 9007199254740991) : 0
            }
        },
        7908: function(e, t, n) {
            var r = n(4488),
                i = Object;
            e.exports = function(e) {
                return i(r(e))
            }
        },
        7593: function(e, t, n) {
            var r = n(6916),
                i = n(111),
                o = n(2190),
                s = n(8173),
                a = n(2140),
                u = n(5112),
                c = TypeError,
                d = u("toPrimitive");
            e.exports = function(e, t) {
                if (!i(e) || o(e)) return e;
                var n, u = s(e, d);
                if (u) {
                    if (void 0 === t && (t = "default"), n = r(u, e, t), !i(n) || o(n)) return n;
                    throw c("Can't convert object to primitive value")
                }
                return void 0 === t && (t = "number"), a(e, t)
            }
        },
        4948: function(e, t, n) {
            var r = n(7593),
                i = n(2190);
            e.exports = function(e) {
                var t = r(e, "string");
                return i(t) ? t : t + ""
            }
        },
        1694: function(e, t, n) {
            var r = {};
            r[n(5112)("toStringTag")] = "z", e.exports = "[object z]" === String(r)
        },
        1340: function(e, t, n) {
            var r = n(648),
                i = String;
            e.exports = function(e) {
                if ("Symbol" === r(e)) throw TypeError("Cannot convert a Symbol value to a string");
                return i(e)
            }
        },
        4038: function(e, t, n) {
            var r = n(5268);
            e.exports = function(e) {
                try {
                    if (r) return Function('return require("' + e + '")')()
                } catch (e) {}
            }
        },
        6330: function(e) {
            var t = String;
            e.exports = function(e) {
                try {
                    return t(e)
                } catch (e) {
                    return "Object"
                }
            }
        },
        9711: function(e, t, n) {
            var r = n(1702),
                i = 0,
                o = Math.random(),
                s = r(1..toString);
            e.exports = function(e) {
                return "Symbol(" + (void 0 === e ? "" : e) + ")_" + s(++i + o, 36)
            }
        },
        3307: function(e, t, n) {
            var r = n(133);
            e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
        },
        3353: function(e, t, n) {
            var r = n(9781),
                i = n(7293);
            e.exports = r && i((function() {
                return 42 != Object.defineProperty((function() {}), "prototype", {
                    value: 42,
                    writable: !1
                }).prototype
            }))
        },
        8053: function(e) {
            var t = TypeError;
            e.exports = function(e, n) {
                if (e < n) throw t("Not enough arguments");
                return e
            }
        },
        6061: function(e, t, n) {
            var r = n(5112);
            t.f = r
        },
        5112: function(e, t, n) {
            var r = n(7854),
                i = n(2309),
                o = n(2597),
                s = n(9711),
                a = n(133),
                u = n(3307),
                c = i("wks"),
                d = r.Symbol,
                l = d && d.for,
                f = u ? d : d && d.withoutSetter || s;
            e.exports = function(e) {
                if (!o(c, e) || !a && "string" != typeof c[e]) {
                    var t = "Symbol." + e;
                    a && o(d, e) ? c[e] = d[e] : c[e] = u && l ? l(t) : f(t)
                }
                return c[e]
            }
        },
        1361: function(e) {
            e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff"
        },
        9191: function(e, t, n) {
            "use strict";
            var r = n(5005),
                i = n(2597),
                o = n(8880),
                s = n(7976),
                a = n(7674),
                u = n(9920),
                c = n(2626),
                d = n(9587),
                l = n(6277),
                f = n(8340),
                v = n(7741),
                g = n(2914),
                p = n(9781),
                m = n(1913);
            e.exports = function(e, t, n, h) {
                var E = "stackTraceLimit",
                    y = h ? 2 : 1,
                    S = e.split("."),
                    A = S[S.length - 1],
                    b = r.apply(null, S);
                if (b) {
                    var C = b.prototype;
                    if (!m && i(C, "cause") && delete C.cause, !n) return b;
                    var T = r("Error"),
                        w = t((function(e, t) {
                            var n = l(h ? t : e, void 0),
                                r = h ? new b(e) : new b;
                            return void 0 !== n && o(r, "message", n), g && o(r, "stack", v(r.stack, 2)), this && s(C, this) && d(r, this, w), arguments.length > y && f(r, arguments[y]), r
                        }));
                    if (w.prototype = C, "Error" !== A ? a ? a(w, T) : u(w, T, {
                            name: !0
                        }) : p && E in b && (c(w, b, E), c(w, b, "prepareStackTrace")), u(w, b), !m) try {
                        C.name !== A && o(C, "name", A), C.constructor = w
                    } catch (e) {}
                    return w
                }
            }
        },
        2222: function(e, t, n) {
            "use strict";
            var r = n(2109),
                i = n(7293),
                o = n(3157),
                s = n(111),
                a = n(7908),
                u = n(6244),
                c = n(7207),
                d = n(6135),
                l = n(5417),
                f = n(1194),
                v = n(5112),
                g = n(7392),
                p = v("isConcatSpreadable"),
                m = g >= 51 || !i((function() {
                    var e = [];
                    return e[p] = !1, e.concat()[0] !== e
                })),
                h = f("concat"),
                E = function(e) {
                    if (!s(e)) return !1;
                    var t = e[p];
                    return void 0 !== t ? !!t : o(e)
                };
            r({
                target: "Array",
                proto: !0,
                arity: 1,
                forced: !m || !h
            }, {
                concat: function(e) {
                    var t, n, r, i, o, s = a(this),
                        f = l(s, 0),
                        v = 0;
                    for (t = -1, r = arguments.length; t < r; t++)
                        if (E(o = -1 === t ? s : arguments[t]))
                            for (i = u(o), c(v + i), n = 0; n < i; n++, v++) n in o && d(f, v, o[n]);
                        else c(v + 1), d(f, v++, o);
                    return f.length = v, f
                }
            })
        },
        1038: function(e, t, n) {
            var r = n(2109),
                i = n(8457);
            r({
                target: "Array",
                stat: !0,
                forced: !n(7072)((function(e) {
                    Array.from(e)
                }))
            }, {
                from: i
            })
        },
        6699: function(e, t, n) {
            "use strict";
            var r = n(2109),
                i = n(1318).includes,
                o = n(7293),
                s = n(1223);
            r({
                target: "Array",
                proto: !0,
                forced: o((function() {
                    return !Array(1).includes()
                }))
            }, {
                includes: function(e) {
                    return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
                }
            }), s("includes")
        },
        2772: function(e, t, n) {
            "use strict";
            var r = n(2109),
                i = n(1702),
                o = n(1318).indexOf,
                s = n(2133),
                a = i([].indexOf),
                u = !!a && 1 / a([1], 1, -0) < 0,
                c = s("indexOf");
            r({
                target: "Array",
                proto: !0,
                forced: u || !c
            }, {
                indexOf: function(e) {
                    var t = arguments.length > 1 ? arguments[1] : void 0;
                    return u ? a(this, e, t) || 0 : o(this, e, t)
                }
            })
        },
        6992: function(e, t, n) {
            "use strict";
            var r = n(5656),
                i = n(1223),
                o = n(7497),
                s = n(9909),
                a = n(3070).f,
                u = n(654),
                c = n(1913),
                d = n(9781),
                l = "Array Iterator",
                f = s.set,
                v = s.getterFor(l);
            e.exports = u(Array, "Array", (function(e, t) {
                f(this, {
                    type: l,
                    target: r(e),
                    index: 0,
                    kind: t
                })
            }), (function() {
                var e = v(this),
                    t = e.target,
                    n = e.kind,
                    r = e.index++;
                return !t || r >= t.length ? (e.target = void 0, {
                    value: void 0,
                    done: !0
                }) : "keys" == n ? {
                    value: r,
                    done: !1
                } : "values" == n ? {
                    value: t[r],
                    done: !1
                } : {
                    value: [r, t[r]],
                    done: !1
                }
            }), "values");
            var g = o.Arguments = o.Array;
            if (i("keys"), i("values"), i("entries"), !c && d && "values" !== g.name) try {
                a(g, "name", {
                    value: "values"
                })
            } catch (e) {}
        },
        1249: function(e, t, n) {
            "use strict";
            var r = n(2109),
                i = n(2092).map;
            r({
                target: "Array",
                proto: !0,
                forced: !n(1194)("map")
            }, {
                map: function(e) {
                    return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
                }
            })
        },
        7042: function(e, t, n) {
            "use strict";
            var r = n(2109),
                i = n(3157),
                o = n(4411),
                s = n(111),
                a = n(1400),
                u = n(6244),
                c = n(5656),
                d = n(6135),
                l = n(5112),
                f = n(1194),
                v = n(206),
                g = f("slice"),
                p = l("species"),
                m = Array,
                h = Math.max;
            r({
                target: "Array",
                proto: !0,
                forced: !g
            }, {
                slice: function(e, t) {
                    var n, r, l, f = c(this),
                        g = u(f),
                        E = a(e, g),
                        y = a(void 0 === t ? g : t, g);
                    if (i(f) && (n = f.constructor, (o(n) && (n === m || i(n.prototype)) || s(n) && null === (n = n[p])) && (n = void 0), n === m || void 0 === n)) return v(f, E, y);
                    for (r = new(void 0 === n ? m : n)(h(y - E, 0)), l = 0; E < y; E++, l++) E in f && d(r, l, f[E]);
                    return r.length = l, r
                }
            })
        },
        561: function(e, t, n) {
            "use strict";
            var r = n(2109),
                i = n(7908),
                o = n(1400),
                s = n(9303),
                a = n(6244),
                u = n(7207),
                c = n(5417),
                d = n(6135),
                l = n(5117),
                f = n(1194)("splice"),
                v = Math.max,
                g = Math.min;
            r({
                target: "Array",
                proto: !0,
                forced: !f
            }, {
                splice: function(e, t) {
                    var n, r, f, p, m, h, E = i(this),
                        y = a(E),
                        S = o(e, y),
                        A = arguments.length;
                    for (0 === A ? n = r = 0 : 1 === A ? (n = 0, r = y - S) : (n = A - 2, r = g(v(s(t), 0), y - S)), u(y + n - r), f = c(E, r), p = 0; p < r; p++)(m = S + p) in E && d(f, p, E[m]);
                    if (f.length = r, n < r) {
                        for (p = S; p < y - r; p++) h = p + n, (m = p + r) in E ? E[h] = E[m] : l(E, h);
                        for (p = y; p > y - r + n; p--) l(E, p - 1)
                    } else if (n > r)
                        for (p = y - r; p > S; p--) h = p + n - 1, (m = p + r - 1) in E ? E[h] = E[m] : l(E, h);
                    for (p = 0; p < n; p++) E[p + S] = arguments[p + 2];
                    return E.length = y - r + n, f
                }
            })
        },
        1703: function(e, t, n) {
            var r = n(2109),
                i = n(7854),
                o = n(2104),
                s = n(9191),
                a = i.WebAssembly,
                u = 7 !== Error("e", {
                    cause: 7
                }).cause,
                c = function(e, t) {
                    var n = {};
                    n[e] = s(e, t, u), r({
                        global: !0,
                        constructor: !0,
                        arity: 1,
                        forced: u
                    }, n)
                },
                d = function(e, t) {
                    if (a && a[e]) {
                        var n = {};
                        n[e] = s("WebAssembly." + e, t, u), r({
                            target: "WebAssembly",
                            stat: !0,
                            constructor: !0,
                            arity: 1,
                            forced: u
                        }, n)
                    }
                };
            c("Error", (function(e) {
                return function(t) {
                    return o(e, this, arguments)
                }
            })), c("EvalError", (function(e) {
                return function(t) {
                    return o(e, this, arguments)
                }
            })), c("RangeError", (function(e) {
                return function(t) {
                    return o(e, this, arguments)
                }
            })), c("ReferenceError", (function(e) {
                return function(t) {
                    return o(e, this, arguments)
                }
            })), c("SyntaxError", (function(e) {
                return function(t) {
                    return o(e, this, arguments)
                }
            })), c("TypeError", (function(e) {
                return function(t) {
                    return o(e, this, arguments)
                }
            })), c("URIError", (function(e) {
                return function(t) {
                    return o(e, this, arguments)
                }
            })), d("CompileError", (function(e) {
                return function(t) {
                    return o(e, this, arguments)
                }
            })), d("LinkError", (function(e) {
                return function(t) {
                    return o(e, this, arguments)
                }
            })), d("RuntimeError", (function(e) {
                return function(t) {
                    return o(e, this, arguments)
                }
            }))
        },
        5837: function(e, t, n) {
            n(2109)({
                global: !0
            }, {
                globalThis: n(7854)
            })
        },
        8862: function(e, t, n) {
            var r = n(2109),
                i = n(5005),
                o = n(2104),
                s = n(6916),
                a = n(1702),
                u = n(7293),
                c = n(3157),
                d = n(614),
                l = n(111),
                f = n(2190),
                v = n(206),
                g = n(133),
                p = i("JSON", "stringify"),
                m = a(/./.exec),
                h = a("".charAt),
                E = a("".charCodeAt),
                y = a("".replace),
                S = a(1..toString),
                A = /[\uD800-\uDFFF]/g,
                b = /^[\uD800-\uDBFF]$/,
                C = /^[\uDC00-\uDFFF]$/,
                T = !g || u((function() {
                    var e = i("Symbol")();
                    return "[null]" != p([e]) || "{}" != p({
                        a: e
                    }) || "{}" != p(Object(e))
                })),
                w = u((function() {
                    return '"\\udf06\\ud834"' !== p("\udf06\ud834") || '"\\udead"' !== p("\udead")
                })),
                I = function(e, t) {
                    var n = v(arguments),
                        r = t;
                    if ((l(t) || void 0 !== e) && !f(e)) return c(t) || (t = function(e, t) {
                        if (d(r) && (t = s(r, this, e, t)), !f(t)) return t
                    }), n[1] = t, o(p, null, n)
                },
                k = function(e, t, n) {
                    var r = h(n, t - 1),
                        i = h(n, t + 1);
                    return m(b, e) && !m(C, i) || m(C, e) && !m(b, r) ? "\\u" + S(E(e, 0), 16) : e
                };
            p && r({
                target: "JSON",
                stat: !0,
                arity: 3,
                forced: T || w
            }, {
                stringify: function(e, t, n) {
                    var r = v(arguments),
                        i = o(T ? I : p, null, r);
                    return w && "string" == typeof i ? y(i, A, k) : i
                }
            })
        },
        3706: function(e, t, n) {
            var r = n(7854);
            n(8003)(r.JSON, "JSON", !0)
        },
        9098: function(e, t, n) {
            "use strict";
            n(7710)("Map", (function(e) {
                return function() {
                    return e(this, arguments.length ? arguments[0] : void 0)
                }
            }), n(5631))
        },
        1532: function(e, t, n) {
            n(9098)
        },
        2703: function(e, t, n) {
            n(8003)(Math, "Math", !0)
        },
        9070: function(e, t, n) {
            var r = n(2109),
                i = n(9781),
                o = n(3070).f;
            r({
                target: "Object",
                stat: !0,
                forced: Object.defineProperty !== o,
                sham: !i
            }, {
                defineProperty: o
            })
        },
        5003: function(e, t, n) {
            var r = n(2109),
                i = n(7293),
                o = n(5656),
                s = n(1236).f,
                a = n(9781),
                u = i((function() {
                    s(1)
                }));
            r({
                target: "Object",
                stat: !0,
                forced: !a || u,
                sham: !a
            }, {
                getOwnPropertyDescriptor: function(e, t) {
                    return s(o(e), t)
                }
            })
        },
        9660: function(e, t, n) {
            var r = n(2109),
                i = n(133),
                o = n(7293),
                s = n(5181),
                a = n(7908);
            r({
                target: "Object",
                stat: !0,
                forced: !i || o((function() {
                    s.f(1)
                }))
            }, {
                getOwnPropertySymbols: function(e) {
                    var t = s.f;
                    return t ? t(a(e)) : []
                }
            })
        },
        489: function(e, t, n) {
            var r = n(2109),
                i = n(7293),
                o = n(7908),
                s = n(9518),
                a = n(8544);
            r({
                target: "Object",
                stat: !0,
                forced: i((function() {
                    s(1)
                })),
                sham: !a
            }, {
                getPrototypeOf: function(e) {
                    return s(o(e))
                }
            })
        },
        7941: function(e, t, n) {
            var r = n(2109),
                i = n(7908),
                o = n(1956);
            r({
                target: "Object",
                stat: !0,
                forced: n(7293)((function() {
                    o(1)
                }))
            }, {
                keys: function(e) {
                    return o(i(e))
                }
            })
        },
        8304: function(e, t, n) {
            n(2109)({
                target: "Object",
                stat: !0
            }, {
                setPrototypeOf: n(7674)
            })
        },
        1539: function(e, t, n) {
            var r = n(1694),
                i = n(8052),
                o = n(288);
            r || i(Object.prototype, "toString", o, {
                unsafe: !0
            })
        },
        2479: function(e, t, n) {
            var r = n(2109),
                i = n(4699).values;
            r({
                target: "Object",
                stat: !0
            }, {
                values: function(e) {
                    return i(e)
                }
            })
        },
        1058: function(e, t, n) {
            var r = n(2109),
                i = n(3009);
            r({
                global: !0,
                forced: parseInt != i
            }, {
                parseInt: i
            })
        },
        821: function(e, t, n) {
            "use strict";
            var r = n(2109),
                i = n(6916),
                o = n(9662),
                s = n(8523),
                a = n(2534),
                u = n(408);
            r({
                target: "Promise",
                stat: !0,
                forced: n(612)
            }, {
                all: function(e) {
                    var t = this,
                        n = s.f(t),
                        r = n.resolve,
                        c = n.reject,
                        d = a((function() {
                            var n = o(t.resolve),
                                s = [],
                                a = 0,
                                d = 1;
                            u(e, (function(e) {
                                var o = a++,
                                    u = !1;
                                d++, i(n, t, e).then((function(e) {
                                    u || (u = !0, s[o] = e, --d || r(s))
                                }), c)
                            })), --d || r(s)
                        }));
                    return d.error && c(d.value), n.promise
                }
            })
        },
        4164: function(e, t, n) {
            "use strict";
            var r = n(2109),
                i = n(1913),
                o = n(3702).CONSTRUCTOR,
                s = n(2492),
                a = n(5005),
                u = n(614),
                c = n(8052),
                d = s && s.prototype;
            if (r({
                    target: "Promise",
                    proto: !0,
                    forced: o,
                    real: !0
                }, {
                    catch: function(e) {
                        return this.then(void 0, e)
                    }
                }), !i && u(s)) {
                var l = a("Promise").prototype.catch;
                d.catch !== l && c(d, "catch", l, {
                    unsafe: !0
                })
            }
        },
        3401: function(e, t, n) {
            "use strict";
            var r, i, o, s = n(2109),
                a = n(1913),
                u = n(5268),
                c = n(7854),
                d = n(6916),
                l = n(8052),
                f = n(7674),
                v = n(8003),
                g = n(6340),
                p = n(9662),
                m = n(614),
                h = n(111),
                E = n(5787),
                y = n(6707),
                S = n(261).set,
                A = n(5948),
                b = n(842),
                C = n(2534),
                T = n(8572),
                w = n(9909),
                I = n(2492),
                k = n(3702),
                _ = n(8523),
                R = "Promise",
                G = k.CONSTRUCTOR,
                x = k.REJECTION_EVENT,
                O = k.SUBCLASSING,
                P = w.getterFor(R),
                D = w.set,
                M = I && I.prototype,
                F = I,
                N = M,
                L = c.TypeError,
                U = c.document,
                V = c.process,
                j = _.f,
                B = j,
                K = !!(U && U.createEvent && c.dispatchEvent),
                z = "unhandledrejection",
                H = function(e) {
                    var t;
                    return !(!h(e) || !m(t = e.then)) && t
                },
                q = function(e, t) {
                    var n, r, i, o = t.value,
                        s = 1 == t.state,
                        a = s ? e.ok : e.fail,
                        u = e.resolve,
                        c = e.reject,
                        l = e.domain;
                    try {
                        a ? (s || (2 === t.rejection && $(t), t.rejection = 1), !0 === a ? n = o : (l && l.enter(), n = a(o), l && (l.exit(), i = !0)), n === e.promise ? c(L("Promise-chain cycle")) : (r = H(n)) ? d(r, n, u, c) : u(n)) : c(o)
                    } catch (e) {
                        l && !i && l.exit(), c(e)
                    }
                },
                W = function(e, t) {
                    e.notified || (e.notified = !0, A((function() {
                        for (var n, r = e.reactions; n = r.get();) q(n, e);
                        e.notified = !1, t && !e.rejection && Q(e)
                    })))
                },
                J = function(e, t, n) {
                    var r, i;
                    K ? ((r = U.createEvent("Event")).promise = t, r.reason = n, r.initEvent(e, !1, !0), c.dispatchEvent(r)) : r = {
                        promise: t,
                        reason: n
                    }, !x && (i = c["on" + e]) ? i(r) : e === z && b("Unhandled promise rejection", n)
                },
                Q = function(e) {
                    d(S, c, (function() {
                        var t, n = e.facade,
                            r = e.value;
                        if (X(e) && (t = C((function() {
                                u ? V.emit("unhandledRejection", r, n) : J(z, n, r)
                            })), e.rejection = u || X(e) ? 2 : 1, t.error)) throw t.value
                    }))
                },
                X = function(e) {
                    return 1 !== e.rejection && !e.parent
                },
                $ = function(e) {
                    d(S, c, (function() {
                        var t = e.facade;
                        u ? V.emit("rejectionHandled", t) : J("rejectionhandled", t, e.value)
                    }))
                },
                Z = function(e, t, n) {
                    return function(r) {
                        e(t, r, n)
                    }
                },
                Y = function(e, t, n) {
                    e.done || (e.done = !0, n && (e = n), e.value = t, e.state = 2, W(e, !0))
                },
                ee = function(e, t, n) {
                    if (!e.done) {
                        e.done = !0, n && (e = n);
                        try {
                            if (e.facade === t) throw L("Promise can't be resolved itself");
                            var r = H(t);
                            r ? A((function() {
                                var n = {
                                    done: !1
                                };
                                try {
                                    d(r, t, Z(ee, n, e), Z(Y, n, e))
                                } catch (t) {
                                    Y(n, t, e)
                                }
                            })) : (e.value = t, e.state = 1, W(e, !1))
                        } catch (t) {
                            Y({
                                done: !1
                            }, t, e)
                        }
                    }
                };
            if (G && (N = (F = function(e) {
                    E(this, N), p(e), d(r, this);
                    var t = P(this);
                    try {
                        e(Z(ee, t), Z(Y, t))
                    } catch (e) {
                        Y(t, e)
                    }
                }).prototype, (r = function(e) {
                    D(this, {
                        type: R,
                        done: !1,
                        notified: !1,
                        parent: !1,
                        reactions: new T,
                        rejection: !1,
                        state: 0,
                        value: void 0
                    })
                }).prototype = l(N, "then", (function(e, t) {
                    var n = P(this),
                        r = j(y(this, F));
                    return n.parent = !0, r.ok = !m(e) || e, r.fail = m(t) && t, r.domain = u ? V.domain : void 0, 0 == n.state ? n.reactions.add(r) : A((function() {
                        q(r, n)
                    })), r.promise
                })), i = function() {
                    var e = new r,
                        t = P(e);
                    this.promise = e, this.resolve = Z(ee, t), this.reject = Z(Y, t)
                }, _.f = j = function(e) {
                    return e === F || void 0 === e ? new i(e) : B(e)
                }, !a && m(I) && M !== Object.prototype)) {
                o = M.then, O || l(M, "then", (function(e, t) {
                    var n = this;
                    return new F((function(e, t) {
                        d(o, n, e, t)
                    })).then(e, t)
                }), {
                    unsafe: !0
                });
                try {
                    delete M.constructor
                } catch (e) {}
                f && f(M, N)
            }
            s({
                global: !0,
                constructor: !0,
                wrap: !0,
                forced: G
            }, {
                Promise: F
            }), v(F, R, !1, !0), g(R)
        },
        7727: function(e, t, n) {
            "use strict";
            var r = n(2109),
                i = n(1913),
                o = n(2492),
                s = n(7293),
                a = n(5005),
                u = n(614),
                c = n(6707),
                d = n(9478),
                l = n(8052),
                f = o && o.prototype;
            if (r({
                    target: "Promise",
                    proto: !0,
                    real: !0,
                    forced: !!o && s((function() {
                        f.finally.call({
                            then: function() {}
                        }, (function() {}))
                    }))
                }, {
                    finally: function(e) {
                        var t = c(this, a("Promise")),
                            n = u(e);
                        return this.then(n ? function(n) {
                            return d(t, e()).then((function() {
                                return n
                            }))
                        } : e, n ? function(n) {
                            return d(t, e()).then((function() {
                                throw n
                            }))
                        } : e)
                    }
                }), !i && u(o)) {
                var v = a("Promise").prototype.finally;
                f.finally !== v && l(f, "finally", v, {
                    unsafe: !0
                })
            }
        },
        8674: function(e, t, n) {
            n(3401), n(821), n(4164), n(6027), n(683), n(6294)
        },
        6027: function(e, t, n) {
            "use strict";
            var r = n(2109),
                i = n(6916),
                o = n(9662),
                s = n(8523),
                a = n(2534),
                u = n(408);
            r({
                target: "Promise",
                stat: !0,
                forced: n(612)
            }, {
                race: function(e) {
                    var t = this,
                        n = s.f(t),
                        r = n.reject,
                        c = a((function() {
                            var s = o(t.resolve);
                            u(e, (function(e) {
                                i(s, t, e).then(n.resolve, r)
                            }))
                        }));
                    return c.error && r(c.value), n.promise
                }
            })
        },
        683: function(e, t, n) {
            "use strict";
            var r = n(2109),
                i = n(6916),
                o = n(8523);
            r({
                target: "Promise",
                stat: !0,
                forced: n(3702).CONSTRUCTOR
            }, {
                reject: function(e) {
                    var t = o.f(this);
                    return i(t.reject, void 0, e), t.promise
                }
            })
        },
        6294: function(e, t, n) {
            "use strict";
            var r = n(2109),
                i = n(5005),
                o = n(1913),
                s = n(2492),
                a = n(3702).CONSTRUCTOR,
                u = n(9478),
                c = i("Promise"),
                d = o && !a;
            r({
                target: "Promise",
                stat: !0,
                forced: o || a
            }, {
                resolve: function(e) {
                    return u(d && this === c ? s : this, e)
                }
            })
        },
        2419: function(e, t, n) {
            var r = n(2109),
                i = n(5005),
                o = n(2104),
                s = n(7065),
                a = n(9483),
                u = n(9670),
                c = n(111),
                d = n(30),
                l = n(7293),
                f = i("Reflect", "construct"),
                v = Object.prototype,
                g = [].push,
                p = l((function() {
                    function e() {}
                    return !(f((function() {}), [], e) instanceof e)
                })),
                m = !l((function() {
                    f((function() {}))
                })),
                h = p || m;
            r({
                target: "Reflect",
                stat: !0,
                forced: h,
                sham: h
            }, {
                construct: function(e, t) {
                    a(e), u(t);
                    var n = arguments.length < 3 ? e : a(arguments[2]);
                    if (m && !p) return f(e, t, n);
                    if (e == n) {
                        switch (t.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t[0]);
                            case 2:
                                return new e(t[0], t[1]);
                            case 3:
                                return new e(t[0], t[1], t[2]);
                            case 4:
                                return new e(t[0], t[1], t[2], t[3])
                        }
                        var r = [null];
                        return o(g, r, t), new(o(s, e, r))
                    }
                    var i = n.prototype,
                        l = d(c(i) ? i : v),
                        h = o(e, l, t);
                    return c(h) ? h : l
                }
            })
        },
        4819: function(e, t, n) {
            var r = n(2109),
                i = n(6916),
                o = n(111),
                s = n(9670),
                a = n(5032),
                u = n(1236),
                c = n(9518);
            r({
                target: "Reflect",
                stat: !0
            }, {
                get: function e(t, n) {
                    var r, d, l = arguments.length < 3 ? t : arguments[2];
                    return s(t) === l ? t[n] : (r = u.f(t, n)) ? a(r) ? r.value : void 0 === r.get ? void 0 : i(r.get, l) : o(d = c(t)) ? e(d, n, l) : void 0
                }
            })
        },
        1299: function(e, t, n) {
            var r = n(2109),
                i = n(7854),
                o = n(8003);
            r({
                global: !0
            }, {
                Reflect: {}
            }), o(i.Reflect, "Reflect", !0)
        },
        4916: function(e, t, n) {
            "use strict";
            var r = n(2109),
                i = n(2261);
            r({
                target: "RegExp",
                proto: !0,
                forced: /./.exec !== i
            }, {
                exec: i
            })
        },
        7601: function(e, t, n) {
            "use strict";
            n(4916);
            var r, i, o = n(2109),
                s = n(6916),
                a = n(1702),
                u = n(614),
                c = n(111),
                d = (r = !1, (i = /[ac]/).exec = function() {
                    return r = !0, /./.exec.apply(this, arguments)
                }, !0 === i.test("abc") && r),
                l = TypeError,
                f = a(/./.test);
            o({
                target: "RegExp",
                proto: !0,
                forced: !d
            }, {
                test: function(e) {
                    var t = this.exec;
                    if (!u(t)) return f(this, e);
                    var n = s(t, this, e);
                    if (null !== n && !c(n)) throw new l("RegExp exec method returned something other than an Object or null");
                    return !!n
                }
            })
        },
        9714: function(e, t, n) {
            "use strict";
            var r = n(6530).PROPER,
                i = n(8052),
                o = n(9670),
                s = n(1340),
                a = n(7293),
                u = n(4706),
                c = "toString",
                d = RegExp.prototype.toString,
                l = a((function() {
                    return "/a/b" != d.call({
                        source: "a",
                        flags: "b"
                    })
                })),
                f = r && d.name != c;
            (l || f) && i(RegExp.prototype, c, (function() {
                var e = o(this);
                return "/" + s(e.source) + "/" + s(u(e))
            }), {
                unsafe: !0
            })
        },
        8783: function(e, t, n) {
            "use strict";
            var r = n(8710).charAt,
                i = n(1340),
                o = n(9909),
                s = n(654),
                a = "String Iterator",
                u = o.set,
                c = o.getterFor(a);
            s(String, "String", (function(e) {
                u(this, {
                    type: a,
                    string: i(e),
                    index: 0
                })
            }), (function() {
                var e, t = c(this),
                    n = t.string,
                    i = t.index;
                return i >= n.length ? {
                    value: void 0,
                    done: !0
                } : (e = r(n, i), t.index += e.length, {
                    value: e,
                    done: !1
                })
            }))
        },
        4723: function(e, t, n) {
            "use strict";
            var r = n(6916),
                i = n(7007),
                o = n(9670),
                s = n(7466),
                a = n(1340),
                u = n(4488),
                c = n(8173),
                d = n(1530),
                l = n(7651);
            i("match", (function(e, t, n) {
                return [function(t) {
                    var n = u(this),
                        i = null == t ? void 0 : c(t, e);
                    return i ? r(i, t, n) : new RegExp(t)[e](a(n))
                }, function(e) {
                    var r = o(this),
                        i = a(e),
                        u = n(t, r, i);
                    if (u.done) return u.value;
                    if (!r.global) return l(r, i);
                    var c = r.unicode;
                    r.lastIndex = 0;
                    for (var f, v = [], g = 0; null !== (f = l(r, i));) {
                        var p = a(f[0]);
                        v[g] = p, "" === p && (r.lastIndex = d(i, s(r.lastIndex), c)), g++
                    }
                    return 0 === g ? null : v
                }]
            }))
        },
        2443: function(e, t, n) {
            n(7235)("asyncIterator")
        },
        4032: function(e, t, n) {
            "use strict";
            var r = n(2109),
                i = n(7854),
                o = n(6916),
                s = n(1702),
                a = n(1913),
                u = n(9781),
                c = n(133),
                d = n(7293),
                l = n(2597),
                f = n(7976),
                v = n(9670),
                g = n(5656),
                p = n(4948),
                m = n(1340),
                h = n(9114),
                E = n(30),
                y = n(1956),
                S = n(8006),
                A = n(1156),
                b = n(5181),
                C = n(1236),
                T = n(3070),
                w = n(6048),
                I = n(5296),
                k = n(8052),
                _ = n(2309),
                R = n(6200),
                G = n(3501),
                x = n(9711),
                O = n(5112),
                P = n(6061),
                D = n(7235),
                M = n(6532),
                F = n(8003),
                N = n(9909),
                L = n(2092).forEach,
                U = R("hidden"),
                V = "Symbol",
                j = N.set,
                B = N.getterFor(V),
                K = Object.prototype,
                z = i.Symbol,
                H = z && z.prototype,
                q = i.TypeError,
                W = i.QObject,
                J = C.f,
                Q = T.f,
                X = A.f,
                $ = I.f,
                Z = s([].push),
                Y = _("symbols"),
                ee = _("op-symbols"),
                te = _("wks"),
                ne = !W || !W.prototype || !W.prototype.findChild,
                re = u && d((function() {
                    return 7 != E(Q({}, "a", {
                        get: function() {
                            return Q(this, "a", {
                                value: 7
                            }).a
                        }
                    })).a
                })) ? function(e, t, n) {
                    var r = J(K, t);
                    r && delete K[t], Q(e, t, n), r && e !== K && Q(K, t, r)
                } : Q,
                ie = function(e, t) {
                    var n = Y[e] = E(H);
                    return j(n, {
                        type: V,
                        tag: e,
                        description: t
                    }), u || (n.description = t), n
                },
                oe = function(e, t, n) {
                    e === K && oe(ee, t, n), v(e);
                    var r = p(t);
                    return v(n), l(Y, r) ? (n.enumerable ? (l(e, U) && e[U][r] && (e[U][r] = !1), n = E(n, {
                        enumerable: h(0, !1)
                    })) : (l(e, U) || Q(e, U, h(1, {})), e[U][r] = !0), re(e, r, n)) : Q(e, r, n)
                },
                se = function(e, t) {
                    v(e);
                    var n = g(t),
                        r = y(n).concat(de(n));
                    return L(r, (function(t) {
                        u && !o(ae, n, t) || oe(e, t, n[t])
                    })), e
                },
                ae = function(e) {
                    var t = p(e),
                        n = o($, this, t);
                    return !(this === K && l(Y, t) && !l(ee, t)) && (!(n || !l(this, t) || !l(Y, t) || l(this, U) && this[U][t]) || n)
                },
                ue = function(e, t) {
                    var n = g(e),
                        r = p(t);
                    if (n !== K || !l(Y, r) || l(ee, r)) {
                        var i = J(n, r);
                        return !i || !l(Y, r) || l(n, U) && n[U][r] || (i.enumerable = !0), i
                    }
                },
                ce = function(e) {
                    var t = X(g(e)),
                        n = [];
                    return L(t, (function(e) {
                        l(Y, e) || l(G, e) || Z(n, e)
                    })), n
                },
                de = function(e) {
                    var t = e === K,
                        n = X(t ? ee : g(e)),
                        r = [];
                    return L(n, (function(e) {
                        !l(Y, e) || t && !l(K, e) || Z(r, Y[e])
                    })), r
                };
            c || (z = function() {
                if (f(H, this)) throw q("Symbol is not a constructor");
                var e = arguments.length && void 0 !== arguments[0] ? m(arguments[0]) : void 0,
                    t = x(e),
                    n = function(e) {
                        this === K && o(n, ee, e), l(this, U) && l(this[U], t) && (this[U][t] = !1), re(this, t, h(1, e))
                    };
                return u && ne && re(K, t, {
                    configurable: !0,
                    set: n
                }), ie(t, e)
            }, k(H = z.prototype, "toString", (function() {
                return B(this).tag
            })), k(z, "withoutSetter", (function(e) {
                return ie(x(e), e)
            })), I.f = ae, T.f = oe, w.f = se, C.f = ue, S.f = A.f = ce, b.f = de, P.f = function(e) {
                return ie(O(e), e)
            }, u && (Q(H, "description", {
                configurable: !0,
                get: function() {
                    return B(this).description
                }
            }), a || k(K, "propertyIsEnumerable", ae, {
                unsafe: !0
            }))), r({
                global: !0,
                constructor: !0,
                wrap: !0,
                forced: !c,
                sham: !c
            }, {
                Symbol: z
            }), L(y(te), (function(e) {
                D(e)
            })), r({
                target: V,
                stat: !0,
                forced: !c
            }, {
                useSetter: function() {
                    ne = !0
                },
                useSimple: function() {
                    ne = !1
                }
            }), r({
                target: "Object",
                stat: !0,
                forced: !c,
                sham: !u
            }, {
                create: function(e, t) {
                    return void 0 === t ? E(e) : se(E(e), t)
                },
                defineProperty: oe,
                defineProperties: se,
                getOwnPropertyDescriptor: ue
            }), r({
                target: "Object",
                stat: !0,
                forced: !c
            }, {
                getOwnPropertyNames: ce
            }), M(), F(z, V), G[U] = !0
        },
        1817: function(e, t, n) {
            "use strict";
            var r = n(2109),
                i = n(9781),
                o = n(7854),
                s = n(1702),
                a = n(2597),
                u = n(614),
                c = n(7976),
                d = n(1340),
                l = n(3070).f,
                f = n(9920),
                v = o.Symbol,
                g = v && v.prototype;
            if (i && u(v) && (!("description" in g) || void 0 !== v().description)) {
                var p = {},
                    m = function() {
                        var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : d(arguments[0]),
                            t = c(g, this) ? new v(e) : void 0 === e ? v() : v(e);
                        return "" === e && (p[t] = !0), t
                    };
                f(m, v), m.prototype = g, g.constructor = m;
                var h = "Symbol(test)" == String(v("test")),
                    E = s(g.toString),
                    y = s(g.valueOf),
                    S = /^Symbol\((.*)\)[^)]+$/,
                    A = s("".replace),
                    b = s("".slice);
                l(g, "description", {
                    configurable: !0,
                    get: function() {
                        var e = y(this),
                            t = E(e);
                        if (a(p, e)) return "";
                        var n = h ? b(t, 7, -1) : A(t, S, "$1");
                        return "" === n ? void 0 : n
                    }
                }), r({
                    global: !0,
                    constructor: !0,
                    forced: !0
                }, {
                    Symbol: m
                })
            }
        },
        763: function(e, t, n) {
            var r = n(2109),
                i = n(5005),
                o = n(2597),
                s = n(1340),
                a = n(2309),
                u = n(735),
                c = a("string-to-symbol-registry"),
                d = a("symbol-to-string-registry");
            r({
                target: "Symbol",
                stat: !0,
                forced: !u
            }, {
                for: function(e) {
                    var t = s(e);
                    if (o(c, t)) return c[t];
                    var n = i("Symbol")(t);
                    return c[t] = n, d[n] = t, n
                }
            })
        },
        2165: function(e, t, n) {
            n(7235)("iterator")
        },
        2526: function(e, t, n) {
            n(4032), n(763), n(6620), n(8862), n(9660)
        },
        6620: function(e, t, n) {
            var r = n(2109),
                i = n(2597),
                o = n(2190),
                s = n(6330),
                a = n(2309),
                u = n(735),
                c = a("symbol-to-string-registry");
            r({
                target: "Symbol",
                stat: !0,
                forced: !u
            }, {
                keyFor: function(e) {
                    if (!o(e)) throw TypeError(s(e) + " is not a symbol");
                    if (i(c, e)) return c[e]
                }
            })
        },
        9341: function(e, t, n) {
            var r = n(5005),
                i = n(7235),
                o = n(8003);
            i("toStringTag"), o(r("Symbol"), "Symbol")
        },
        5505: function(e, t, n) {
            var r = n(2109),
                i = n(5005),
                o = n(1702),
                s = n(7293),
                a = n(1340),
                u = n(2597),
                c = n(8053),
                d = n(4170).ctoi,
                l = /[^\d+/a-z]/i,
                f = /[\t\n\f\r ]+/g,
                v = /[=]+$/,
                g = i("atob"),
                p = String.fromCharCode,
                m = o("".charAt),
                h = o("".replace),
                E = o(l.exec),
                y = s((function() {
                    return "" !== g(" ")
                })),
                S = !s((function() {
                    g("a")
                })),
                A = !y && !S && !s((function() {
                    g()
                })),
                b = !y && !S && 1 !== g.length;
            r({
                global: !0,
                enumerable: !0,
                forced: y || S || A || b
            }, {
                atob: function(e) {
                    if (c(arguments.length, 1), A || b) return g(e);
                    var t, n, r = h(a(e), f, ""),
                        o = "",
                        s = 0,
                        y = 0;
                    if (r.length % 4 == 0 && (r = h(r, v, "")), r.length % 4 == 1 || E(l, r)) throw new(i("DOMException"))("The string is not correctly encoded", "InvalidCharacterError");
                    for (; t = m(r, s++);) u(d, t) && (n = y % 4 ? 64 * n + d[t] : d[t], y++ % 4 && (o += p(255 & n >> (-2 * y & 6))));
                    return o
                }
            })
        },
        4747: function(e, t, n) {
            var r = n(7854),
                i = n(8324),
                o = n(8509),
                s = n(8533),
                a = n(8880),
                u = function(e) {
                    if (e && e.forEach !== s) try {
                        a(e, "forEach", s)
                    } catch (t) {
                        e.forEach = s
                    }
                };
            for (var c in i) i[c] && u(r[c] && r[c].prototype);
            u(o)
        },
        3948: function(e, t, n) {
            var r = n(7854),
                i = n(8324),
                o = n(8509),
                s = n(6992),
                a = n(8880),
                u = n(5112),
                c = u("iterator"),
                d = u("toStringTag"),
                l = s.values,
                f = function(e, t) {
                    if (e) {
                        if (e[c] !== l) try {
                            a(e, c, l)
                        } catch (t) {
                            e[c] = l
                        }
                        if (e[d] || a(e, d, t), i[t])
                            for (var n in s)
                                if (e[n] !== s[n]) try {
                                    a(e, n, s[n])
                                } catch (t) {
                                    e[n] = s[n]
                                }
                    }
                };
            for (var v in i) f(r[v] && r[v].prototype, v);
            f(o, "DOMTokenList")
        },
        7714: function(e, t, n) {
            "use strict";
            var r = n(2109),
                i = n(4038),
                o = n(5005),
                s = n(7293),
                a = n(30),
                u = n(9114),
                c = n(3070).f,
                d = n(8052),
                l = n(7045),
                f = n(2597),
                v = n(5787),
                g = n(9670),
                p = n(7762),
                m = n(6277),
                h = n(3678),
                E = n(7741),
                y = n(9909),
                S = n(9781),
                A = n(1913),
                b = "DOMException",
                C = o("Error"),
                T = o(b) || function() {
                    try {
                        (new(o("MessageChannel") || i("worker_threads").MessageChannel)).port1.postMessage(new WeakMap)
                    } catch (e) {
                        if ("DATA_CLONE_ERR" == e.name && 25 == e.code) return e.constructor
                    }
                }(),
                w = T && T.prototype,
                I = C.prototype,
                k = y.set,
                _ = y.getterFor(b),
                R = "stack" in C(b),
                G = function(e) {
                    return f(h, e) && h[e].m ? h[e].c : 0
                },
                x = function() {
                    v(this, O);
                    var e = arguments.length,
                        t = m(e < 1 ? void 0 : arguments[0]),
                        n = m(e < 2 ? void 0 : arguments[1], "Error"),
                        r = G(n);
                    if (k(this, {
                            type: b,
                            name: n,
                            message: t,
                            code: r
                        }), S || (this.name = n, this.message = t, this.code = r), R) {
                        var i = C(t);
                        i.name = b, c(this, "stack", u(1, E(i.stack, 1)))
                    }
                },
                O = x.prototype = a(I),
                P = function(e) {
                    return {
                        enumerable: !0,
                        configurable: !0,
                        get: e
                    }
                },
                D = function(e) {
                    return P((function() {
                        return _(this)[e]
                    }))
                };
            S && (l(O, "code", D("code")), l(O, "message", D("message")), l(O, "name", D("name"))), c(O, "constructor", u(1, x));
            var M = s((function() {
                    return !(new T instanceof C)
                })),
                F = M || s((function() {
                    return I.toString !== p || "2: 1" !== String(new T(1, 2))
                })),
                N = M || s((function() {
                    return 25 !== new T(1, "DataCloneError").code
                })),
                L = M || 25 !== T.DATA_CLONE_ERR || 25 !== w.DATA_CLONE_ERR,
                U = A ? F || N || L : M;
            r({
                global: !0,
                constructor: !0,
                forced: U
            }, {
                DOMException: U ? x : T
            });
            var V = o(b),
                j = V.prototype;
            for (var B in F && (A || T === V) && d(j, "toString", p), N && S && T === V && l(j, "code", P((function() {
                    return G(g(this).name)
                }))), h)
                if (f(h, B)) {
                    var K = h[B],
                        z = K.s,
                        H = u(6, K.c);
                    f(V, z) || c(V, z, H), f(j, z) || c(j, z, H)
                }
        },
        2801: function(e, t, n) {
            "use strict";
            var r = n(2109),
                i = n(5005),
                o = n(9114),
                s = n(3070).f,
                a = n(2597),
                u = n(5787),
                c = n(9587),
                d = n(6277),
                l = n(3678),
                f = n(7741),
                v = n(1913),
                g = "DOMException",
                p = i("Error"),
                m = i(g),
                h = function() {
                    u(this, E);
                    var e = arguments.length,
                        t = d(e < 1 ? void 0 : arguments[0]),
                        n = d(e < 2 ? void 0 : arguments[1], "Error"),
                        r = new m(t, n),
                        i = p(t);
                    return i.name = g, s(r, "stack", o(1, f(i.stack, 1))), c(r, this, h), r
                },
                E = h.prototype = m.prototype,
                y = "stack" in p(g),
                S = "stack" in new m(1, 2),
                A = y && !S;
            r({
                global: !0,
                constructor: !0,
                forced: v || A
            }, {
                DOMException: A ? h : m
            });
            var b = i(g),
                C = b.prototype;
            if (C.constructor !== b)
                for (var T in v || s(C, "constructor", o(1, b)), l)
                    if (a(l, T)) {
                        var w = l[T],
                            I = w.s;
                        a(b, I) || s(b, I, o(6, w.c))
                    }
        },
        1174: function(e, t, n) {
            var r = n(5005),
                i = "DOMException";
            n(8003)(r(i), i)
        },
        6806: function(e, t, n) {
            "use strict";
            var r, i, o, s, a = a || function(e, t) {
                var n = {},
                    r = n.lib = {},
                    i = function() {},
                    o = r.Base = {
                        extend: function(e) {
                            i.prototype = this;
                            var t = new i;
                            return e && t.mixIn(e), t.hasOwnProperty("init") || (t.init = function() {
                                t.$super.init.apply(this, arguments)
                            }), t.init.prototype = t, t.$super = this, t
                        },
                        create: function() {
                            var e = this.extend();
                            return e.init.apply(e, arguments), e
                        },
                        init: function() {},
                        mixIn: function(e) {
                            for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                            e.hasOwnProperty("toString") && (this.toString = e.toString)
                        },
                        clone: function() {
                            return this.init.prototype.extend(this)
                        }
                    },
                    s = r.WordArray = o.extend({
                        init: function(e, t) {
                            e = this.words = e || [], this.sigBytes = null != t ? t : 4 * e.length
                        },
                        toString: function(e) {
                            return (e || u).stringify(this)
                        },
                        concat: function(e) {
                            var t = this.words,
                                n = e.words,
                                r = this.sigBytes;
                            if (e = e.sigBytes, this.clamp(), r % 4)
                                for (var i = 0; i < e; i++) t[r + i >>> 2] |= (n[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 24 - (r + i) % 4 * 8;
                            else if (65535 < n.length)
                                for (i = 0; i < e; i += 4) t[r + i >>> 2] = n[i >>> 2];
                            else t.push.apply(t, n);
                            return this.sigBytes += e, this
                        },
                        clamp: function() {
                            var t = this.words,
                                n = this.sigBytes;
                            t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4)
                        },
                        clone: function() {
                            var e = o.clone.call(this);
                            return e.words = this.words.slice(0), e
                        },
                        random: function(t) {
                            for (var n = [], r = 0; r < t; r += 4) n.push(4294967296 * e.random() | 0);
                            return new s.init(n, t)
                        }
                    }),
                    a = n.enc = {},
                    u = a.Hex = {
                        stringify: function(e) {
                            var t = e.words;
                            e = e.sigBytes;
                            for (var n = [], r = 0; r < e; r++) {
                                var i = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                                n.push((i >>> 4).toString(16)), n.push((15 & i).toString(16))
                            }
                            return n.join("")
                        },
                        parse: function(e) {
                            for (var t = e.length, n = [], r = 0; r < t; r += 2) n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << 24 - r % 8 * 4;
                            return new s.init(n, t / 2)
                        }
                    },
                    c = a.Latin1 = {
                        stringify: function(e) {
                            var t = e.words;
                            e = e.sigBytes;
                            for (var n = [], r = 0; r < e; r++) n.push(String.fromCharCode(t[r >>> 2] >>> 24 - r % 4 * 8 & 255));
                            return n.join("")
                        },
                        parse: function(e) {
                            for (var t = e.length, n = [], r = 0; r < t; r++) n[r >>> 2] |= (255 & e.charCodeAt(r)) << 24 - r % 4 * 8;
                            return new s.init(n, t)
                        }
                    },
                    d = a.Utf8 = {
                        stringify: function(e) {
                            try {
                                return decodeURIComponent(escape(c.stringify(e)))
                            } catch (e) {
                                throw Error("Malformed UTF-8 data")
                            }
                        },
                        parse: function(e) {
                            return c.parse(unescape(encodeURIComponent(e)))
                        }
                    },
                    l = r.BufferedBlockAlgorithm = o.extend({
                        reset: function() {
                            this._data = new s.init, this._nDataBytes = 0
                        },
                        _append: function(e) {
                            "string" == typeof e && (e = d.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes
                        },
                        _process: function(t) {
                            var n = this._data,
                                r = n.words,
                                i = n.sigBytes,
                                o = this.blockSize,
                                a = i / (4 * o);
                            if (t = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * o, i = e.min(4 * t, i), t) {
                                for (var u = 0; u < t; u += o) this._doProcessBlock(r, u);
                                u = r.splice(0, t), n.sigBytes -= i
                            }
                            return new s.init(u, i)
                        },
                        clone: function() {
                            var e = o.clone.call(this);
                            return e._data = this._data.clone(), e
                        },
                        _minBufferSize: 0
                    });
                r.Hasher = l.extend({
                    cfg: o.extend(),
                    init: function(e) {
                        this.cfg = this.cfg.extend(e), this.reset()
                    },
                    reset: function() {
                        l.reset.call(this), this._doReset()
                    },
                    update: function(e) {
                        return this._append(e), this._process(), this
                    },
                    finalize: function(e) {
                        return e && this._append(e), this._doFinalize()
                    },
                    blockSize: 16,
                    _createHelper: function(e) {
                        return function(t, n) {
                            return new e.init(n).finalize(t)
                        }
                    },
                    _createHmacHelper: function(e) {
                        return function(t, n) {
                            return new f.HMAC.init(e, n).finalize(t)
                        }
                    }
                });
                var f = n.algo = {};
                return n
            }(Math);
            ! function(e) {
                for (var t = a, n = (i = t.lib).WordArray, r = i.Hasher, i = t.algo, o = [], s = [], u = function(e) {
                        return 4294967296 * (e - (0 | e)) | 0
                    }, c = 2, d = 0; 64 > d;) {
                    var l;
                    e: {
                        l = c;
                        for (var f = e.sqrt(l), v = 2; v <= f; v++)
                            if (!(l % v)) {
                                l = !1;
                                break e
                            }
                        l = !0
                    }
                    l && (8 > d && (o[d] = u(e.pow(c, .5))), s[d] = u(e.pow(c, 1 / 3)), d++), c++
                }
                var g = [];
                i = i.SHA256 = r.extend({
                    _doReset: function() {
                        this._hash = new n.init(o.slice(0))
                    },
                    _doProcessBlock: function(e, t) {
                        for (var n = this._hash.words, r = n[0], i = n[1], o = n[2], a = n[3], u = n[4], c = n[5], d = n[6], l = n[7], f = 0; 64 > f; f++) {
                            if (16 > f) g[f] = 0 | e[t + f];
                            else {
                                var v = g[f - 15],
                                    p = g[f - 2];
                                g[f] = ((v << 25 | v >>> 7) ^ (v << 14 | v >>> 18) ^ v >>> 3) + g[f - 7] + ((p << 15 | p >>> 17) ^ (p << 13 | p >>> 19) ^ p >>> 10) + g[f - 16]
                            }
                            v = l + ((u << 26 | u >>> 6) ^ (u << 21 | u >>> 11) ^ (u << 7 | u >>> 25)) + (u & c ^ ~u & d) + s[f] + g[f], p = ((r << 30 | r >>> 2) ^ (r << 19 | r >>> 13) ^ (r << 10 | r >>> 22)) + (r & i ^ r & o ^ i & o), l = d, d = c, c = u, u = a + v | 0, a = o, o = i, i = r, r = v + p | 0
                        }
                        n[0] = n[0] + r | 0, n[1] = n[1] + i | 0, n[2] = n[2] + o | 0, n[3] = n[3] + a | 0, n[4] = n[4] + u | 0, n[5] = n[5] + c | 0, n[6] = n[6] + d | 0, n[7] = n[7] + l | 0
                    },
                    _doFinalize: function() {
                        var t = this._data,
                            n = t.words,
                            r = 8 * this._nDataBytes,
                            i = 8 * t.sigBytes;
                        return n[i >>> 5] |= 128 << 24 - i % 32, n[14 + (i + 64 >>> 9 << 4)] = e.floor(r / 4294967296), n[15 + (i + 64 >>> 9 << 4)] = r, t.sigBytes = 4 * n.length, this._process(), this._hash
                    },
                    clone: function() {
                        var e = r.clone.call(this);
                        return e._hash = this._hash.clone(), e
                    }
                }), t.SHA256 = r._createHelper(i), t.HmacSHA256 = r._createHmacHelper(i)
            }(Math), i = (r = a).enc.Utf8, r.algo.HMAC = r.lib.Base.extend({
                    init: function(e, t) {
                        e = this._hasher = new e.init, "string" == typeof t && (t = i.parse(t));
                        var n = e.blockSize,
                            r = 4 * n;
                        t.sigBytes > r && (t = e.finalize(t)), t.clamp();
                        for (var o = this._oKey = t.clone(), s = this._iKey = t.clone(), a = o.words, u = s.words, c = 0; c < n; c++) a[c] ^= 1549556828, u[c] ^= 909522486;
                        o.sigBytes = s.sigBytes = r, this.reset()
                    },
                    reset: function() {
                        var e = this._hasher;
                        e.reset(), e.update(this._iKey)
                    },
                    update: function(e) {
                        return this._hasher.update(e), this
                    },
                    finalize: function(e) {
                        var t = this._hasher;
                        return e = t.finalize(e), t.reset(), t.finalize(this._oKey.clone().concat(e))
                    }
                }),
                function() {
                    var e = a,
                        t = e.lib.WordArray;
                    e.enc.Base64 = {
                        stringify: function(e) {
                            var t = e.words,
                                n = e.sigBytes,
                                r = this._map;
                            e.clamp(), e = [];
                            for (var i = 0; i < n; i += 3)
                                for (var o = (t[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 16 | (t[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255) << 8 | t[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255, s = 0; 4 > s && i + .75 * s < n; s++) e.push(r.charAt(o >>> 6 * (3 - s) & 63));
                            if (t = r.charAt(64))
                                for (; e.length % 4;) e.push(t);
                            return e.join("")
                        },
                        parse: function(e) {
                            var n = e.length,
                                r = this._map;
                            (i = r.charAt(64)) && -1 != (i = e.indexOf(i)) && (n = i);
                            for (var i = [], o = 0, s = 0; s < n; s++)
                                if (s % 4) {
                                    var a = r.indexOf(e.charAt(s - 1)) << s % 4 * 2,
                                        u = r.indexOf(e.charAt(s)) >>> 6 - s % 4 * 2;
                                    i[o >>> 2] |= (a | u) << 24 - o % 4 * 8, o++
                                }
                            return t.create(i, o)
                        },
                        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                    }
                }(),
                function(e) {
                    var t, n, r, i, o, s, a, u, c, d, l, f, v;
                    (v = e.EGAErrorSeverity || (e.EGAErrorSeverity = {}))[v.Undefined = 0] = "Undefined", v[v.Debug = 1] = "Debug", v[v.Info = 2] = "Info", v[v.Warning = 3] = "Warning", v[v.Error = 4] = "Error", v[v.Critical = 5] = "Critical", (f = e.EGAProgressionStatus || (e.EGAProgressionStatus = {}))[f.Undefined = 0] = "Undefined", f[f.Start = 1] = "Start", f[f.Complete = 2] = "Complete", f[f.Fail = 3] = "Fail", (l = e.EGAResourceFlowType || (e.EGAResourceFlowType = {}))[l.Undefined = 0] = "Undefined", l[l.Source = 1] = "Source", l[l.Sink = 2] = "Sink", (d = e.EGAAdAction || (e.EGAAdAction = {}))[d.Undefined = 0] = "Undefined", d[d.Clicked = 1] = "Clicked", d[d.Show = 2] = "Show", d[d.FailedShow = 3] = "FailedShow", d[d.RewardReceived = 4] = "RewardReceived", (c = e.EGAAdError || (e.EGAAdError = {}))[c.Undefined = 0] = "Undefined", c[c.Unknown = 1] = "Unknown", c[c.Offline = 2] = "Offline", c[c.NoFill = 3] = "NoFill", c[c.InternalError = 4] = "InternalError", c[c.InvalidRequest = 5] = "InvalidRequest", c[c.UnableToPrecache = 6] = "UnableToPrecache", (u = e.EGAAdType || (e.EGAAdType = {}))[u.Undefined = 0] = "Undefined", u[u.Video = 1] = "Video", u[u.RewardedVideo = 2] = "RewardedVideo", u[u.Playable = 3] = "Playable", u[u.Interstitial = 4] = "Interstitial", u[u.OfferWall = 5] = "OfferWall", u[u.Banner = 6] = "Banner", s = e.http || (e.http = {}), (a = s.EGAHTTPApiResponse || (s.EGAHTTPApiResponse = {}))[a.NoResponse = 0] = "NoResponse", a[a.BadResponse = 1] = "BadResponse", a[a.RequestTimeout = 2] = "RequestTimeout", a[a.JsonEncodeFailed = 3] = "JsonEncodeFailed", a[a.JsonDecodeFailed = 4] = "JsonDecodeFailed", a[a.InternalServerError = 5] = "InternalServerError", a[a.BadRequest = 6] = "BadRequest", a[a.Unauthorized = 7] = "Unauthorized", a[a.UnknownResponseCode = 8] = "UnknownResponseCode", a[a.Ok = 9] = "Ok", a[a.Created = 10] = "Created", t = e.events || (e.events = {}), (o = t.EGASdkErrorCategory || (t.EGASdkErrorCategory = {}))[o.Undefined = 0] = "Undefined", o[o.EventValidation = 1] = "EventValidation", o[o.Database = 2] = "Database", o[o.Init = 3] = "Init", o[o.Http = 4] = "Http", o[o.Json = 5] = "Json", (i = t.EGASdkErrorArea || (t.EGASdkErrorArea = {}))[i.Undefined = 0] = "Undefined", i[i.BusinessEvent = 1] = "BusinessEvent", i[i.ResourceEvent = 2] = "ResourceEvent", i[i.ProgressionEvent = 3] = "ProgressionEvent", i[i.DesignEvent = 4] = "DesignEvent", i[i.ErrorEvent = 5] = "ErrorEvent", i[i.InitHttp = 9] = "InitHttp", i[i.EventsHttp = 10] = "EventsHttp", i[i.ProcessEvents = 11] = "ProcessEvents", i[i.AddEventsToStore = 12] = "AddEventsToStore", i[i.AdEvent = 20] = "AdEvent", (r = t.EGASdkErrorAction || (t.EGASdkErrorAction = {}))[r.Undefined = 0] = "Undefined", r[r.InvalidCurrency = 1] = "InvalidCurrency", r[r.InvalidShortString = 2] = "InvalidShortString", r[r.InvalidEventPartLength = 3] = "InvalidEventPartLength", r[r.InvalidEventPartCharacters = 4] = "InvalidEventPartCharacters", r[r.InvalidStore = 5] = "InvalidStore", r[r.InvalidFlowType = 6] = "InvalidFlowType", r[r.StringEmptyOrNull = 7] = "StringEmptyOrNull", r[r.NotFoundInAvailableCurrencies = 8] = "NotFoundInAvailableCurrencies", r[r.InvalidAmount = 9] = "InvalidAmount", r[r.NotFoundInAvailableItemTypes = 10] = "NotFoundInAvailableItemTypes", r[r.WrongProgressionOrder = 11] = "WrongProgressionOrder", r[r.InvalidEventIdLength = 12] = "InvalidEventIdLength", r[r.InvalidEventIdCharacters = 13] = "InvalidEventIdCharacters", r[r.InvalidProgressionStatus = 15] = "InvalidProgressionStatus", r[r.InvalidSeverity = 16] = "InvalidSeverity", r[r.InvalidLongString = 17] = "InvalidLongString", r[r.DatabaseTooLarge = 18] = "DatabaseTooLarge", r[r.DatabaseOpenOrCreate = 19] = "DatabaseOpenOrCreate", r[r.JsonError = 25] = "JsonError", r[r.FailHttpJsonDecode = 29] = "FailHttpJsonDecode", r[r.FailHttpJsonEncode = 30] = "FailHttpJsonEncode", r[r.InvalidAdAction = 31] = "InvalidAdAction", r[r.InvalidAdType = 32] = "InvalidAdType", r[r.InvalidString = 33] = "InvalidString", (n = t.EGASdkErrorParameter || (t.EGASdkErrorParameter = {}))[n.Undefined = 0] = "Undefined", n[n.Currency = 1] = "Currency", n[n.CartType = 2] = "CartType", n[n.ItemType = 3] = "ItemType", n[n.ItemId = 4] = "ItemId", n[n.Store = 5] = "Store", n[n.FlowType = 6] = "FlowType", n[n.Amount = 7] = "Amount", n[n.Progression01 = 8] = "Progression01", n[n.Progression02 = 9] = "Progression02", n[n.Progression03 = 10] = "Progression03", n[n.EventId = 11] = "EventId", n[n.ProgressionStatus = 12] = "ProgressionStatus", n[n.Severity = 13] = "Severity", n[n.Message = 14] = "Message", n[n.AdAction = 15] = "AdAction", n[n.AdType = 16] = "AdType", n[n.AdSdkName = 17] = "AdSdkName", n[n.AdPlacement = 18] = "AdPlacement"
                }(s || (s = {})),
                function(e) {
                    var t, n, r, i, o, s;
                    (s = e.EGAErrorSeverity || (e.EGAErrorSeverity = {}))[s.Undefined = 0] = "Undefined", s[s.Debug = 1] = "Debug", s[s.Info = 2] = "Info", s[s.Warning = 3] = "Warning", s[s.Error = 4] = "Error", s[s.Critical = 5] = "Critical", (o = e.EGAProgressionStatus || (e.EGAProgressionStatus = {}))[o.Undefined = 0] = "Undefined", o[o.Start = 1] = "Start", o[o.Complete = 2] = "Complete", o[o.Fail = 3] = "Fail", (i = e.EGAResourceFlowType || (e.EGAResourceFlowType = {}))[i.Undefined = 0] = "Undefined", i[i.Source = 1] = "Source", i[i.Sink = 2] = "Sink", (r = e.EGAAdAction || (e.EGAAdAction = {}))[r.Undefined = 0] = "Undefined", r[r.Clicked = 1] = "Clicked", r[r.Show = 2] = "Show", r[r.FailedShow = 3] = "FailedShow", r[r.RewardReceived = 4] = "RewardReceived", (n = e.EGAAdError || (e.EGAAdError = {}))[n.Undefined = 0] = "Undefined", n[n.Unknown = 1] = "Unknown", n[n.Offline = 2] = "Offline", n[n.NoFill = 3] = "NoFill", n[n.InternalError = 4] = "InternalError", n[n.InvalidRequest = 5] = "InvalidRequest", n[n.UnableToPrecache = 6] = "UnableToPrecache", (t = e.EGAAdType || (e.EGAAdType = {}))[t.Undefined = 0] = "Undefined", t[t.Video = 1] = "Video", t[t.RewardedVideo = 2] = "RewardedVideo", t[t.Playable = 3] = "Playable", t[t.Interstitial = 4] = "Interstitial", t[t.OfferWall = 5] = "OfferWall", t[t.Banner = 6] = "Banner"
                }(o || (o = {})),
                function(e) {
                    ! function(e) {
                        var t;
                        ! function(e) {
                            e[e.Error = 0] = "Error", e[e.Warning = 1] = "Warning", e[e.Info = 2] = "Info", e[e.Debug = 3] = "Debug"
                        }(t || (t = {}));
                        var n = function() {
                            function e() {
                                e.debugEnabled = !1
                            }
                            return e.setInfoLog = function(t) {
                                e.instance.infoLogEnabled = t
                            }, e.setVerboseLog = function(t) {
                                e.instance.infoLogVerboseEnabled = t
                            }, e.i = function(n) {
                                if (e.instance.infoLogEnabled) {
                                    var r = "Info/" + e.Tag + ": " + n;
                                    e.instance.sendNotificationMessage(r, t.Info)
                                }
                            }, e.w = function(n) {
                                var r = "Warning/" + e.Tag + ": " + n;
                                e.instance.sendNotificationMessage(r, t.Warning)
                            }, e.e = function(n) {
                                var r = "Error/" + e.Tag + ": " + n;
                                e.instance.sendNotificationMessage(r, t.Error)
                            }, e.ii = function(n) {
                                if (e.instance.infoLogVerboseEnabled) {
                                    var r = "Verbose/" + e.Tag + ": " + n;
                                    e.instance.sendNotificationMessage(r, t.Info)
                                }
                            }, e.d = function(n) {
                                if (e.debugEnabled) {
                                    var r = "Debug/" + e.Tag + ": " + n;
                                    e.instance.sendNotificationMessage(r, t.Debug)
                                }
                            }, e.prototype.sendNotificationMessage = function(e, n) {
                                switch (n) {
                                    case t.Error:
                                    case t.Warning:
                                        break;
                                    case t.Debug:
                                        console.debug;
                                    case t.Info:
                                }
                            }, e.instance = new e, e.Tag = "GameAnalytics", e
                        }();
                        e.GALogger = n
                    }(e.logging || (e.logging = {}))
                }(s || (s = {})),
                function(e) {
                    var t, n, r;
                    t = e.utilities || (e.utilities = {}), n = e.logging.GALogger, r = function() {
                        function e() {}
                        return e.getHmac = function(e, t) {
                            var n = a.HmacSHA256(t, e);
                            return a.enc.Base64.stringify(n)
                        }, e.stringMatch = function(e, t) {
                            return !(!e || !t) && t.test(e)
                        }, e.joinStringArray = function(e, t) {
                            for (var n = "", r = 0, i = e.length; r < i; r++) r > 0 && (n += t), n += e[r];
                            return n
                        }, e.stringArrayContainsString = function(e, t) {
                            if (0 === e.length) return !1;
                            for (var n in e)
                                if (e[n] === t) return !0;
                            return !1
                        }, e.encode64 = function(t) {
                            t = encodeURI(t);
                            var n, r, i, o, s, a = "",
                                u = 0,
                                c = 0,
                                d = 0;
                            do {
                                i = (n = t.charCodeAt(d++)) >> 2, o = (3 & n) << 4 | (r = t.charCodeAt(d++)) >> 4, s = (15 & r) << 2 | (u = t.charCodeAt(d++)) >> 6, c = 63 & u, isNaN(r) ? s = c = 64 : isNaN(u) && (c = 64), a = a + e.keyStr.charAt(i) + e.keyStr.charAt(o) + e.keyStr.charAt(s) + e.keyStr.charAt(c), n = r = u = 0, i = o = s = c = 0
                            } while (d < t.length);
                            return a
                        }, e.decode64 = function(t) {
                            var r, i, o, s, a = "",
                                u = 0,
                                c = 0,
                                d = 0;
                            /[^A-Za-z0-9\+\/\=]/g.exec(t) && n.w("There were invalid base64 characters in the input text. Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='. Expect errors in decoding."), t = t.replace(/[^A-Za-z0-9\+\/\=]/g, "");
                            do {
                                r = e.keyStr.indexOf(t.charAt(d++)) << 2 | (o = e.keyStr.indexOf(t.charAt(d++))) >> 4, i = (15 & o) << 4 | (s = e.keyStr.indexOf(t.charAt(d++))) >> 2, u = (3 & s) << 6 | (c = e.keyStr.indexOf(t.charAt(d++))), a += String.fromCharCode(r), 64 != s && (a += String.fromCharCode(i)), 64 != c && (a += String.fromCharCode(u)), r = i = u = 0, o = s = c = 0
                            } while (d < t.length);
                            return decodeURI(a)
                        }, e.timeIntervalSince1970 = function() {
                            var e = new Date;
                            return Math.round(e.getTime() / 1e3)
                        }, e.createGuid = function() {
                            return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (function(e) {
                                return (+e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +e / 4).toString(16)
                            }))
                        }, e.keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", e
                    }(), t.GAUtilities = r
                }(s || (s = {})),
                function(e) {
                    ! function(t) {
                        var n = e.logging.GALogger,
                            r = e.utilities.GAUtilities,
                            i = e.events.EGASdkErrorCategory,
                            o = e.events.EGASdkErrorArea,
                            s = e.events.EGASdkErrorAction,
                            a = e.events.EGASdkErrorParameter,
                            u = function(e, t, n, r, i) {
                                this.category = e, this.area = t, this.action = n, this.parameter = r, this.reason = i
                            };
                        t.ValidationResult = u;
                        var c = function() {
                            function t() {}
                            return t.validateBusinessEvent = function(e, r, c, d, l) {
                                return t.validateCurrency(e) ? r < 0 ? (n.w("Validation fail - business event - amount. Cannot be less than 0. Failed amount: " + r), new u(i.EventValidation, o.BusinessEvent, s.InvalidAmount, a.Amount, r + "")) : t.validateShortString(c, !0) ? t.validateEventPartLength(d, !1) ? t.validateEventPartCharacters(d) ? t.validateEventPartLength(l, !1) ? t.validateEventPartCharacters(l) ? null : (n.w("Validation fail - business event - itemId: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " + l), new u(i.EventValidation, o.BusinessEvent, s.InvalidEventPartCharacters, a.ItemId, l)) : (n.w("Validation fail - business event - itemId. Cannot be (null), empty or above 64 characters. String: " + l), new u(i.EventValidation, o.BusinessEvent, s.InvalidEventPartLength, a.ItemId, l)) : (n.w("Validation fail - business event - itemType: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " + d), new u(i.EventValidation, o.BusinessEvent, s.InvalidEventPartCharacters, a.ItemType, d)) : (n.w("Validation fail - business event - itemType: Cannot be (null), empty or above 64 characters. String: " + d), new u(i.EventValidation, o.BusinessEvent, s.InvalidEventPartLength, a.ItemType, d)) : (n.w("Validation fail - business event - cartType. Cannot be above 32 length. String: " + c), new u(i.EventValidation, o.BusinessEvent, s.InvalidShortString, a.CartType, c)) : (n.w("Validation fail - business event - currency: Cannot be (null) and need to be A-Z, 3 characters and in the standard at openexchangerates.org. Failed currency: " + e), new u(i.EventValidation, o.BusinessEvent, s.InvalidCurrency, a.Currency, e))
                            }, t.validateResourceEvent = function(c, d, l, f, v, g, p) {
                                return c == e.EGAResourceFlowType.Undefined ? (n.w("Validation fail - resource event - flowType: Invalid flow type."), new u(i.EventValidation, o.ResourceEvent, s.InvalidFlowType, a.FlowType, "")) : d ? r.stringArrayContainsString(g, d) ? l > 0 ? f ? t.validateEventPartLength(f, !1) ? t.validateEventPartCharacters(f) ? r.stringArrayContainsString(p, f) ? t.validateEventPartLength(v, !1) ? t.validateEventPartCharacters(v) ? null : (n.w("Validation fail - resource event - itemId: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " + v), new u(i.EventValidation, o.ResourceEvent, s.InvalidEventPartCharacters, a.ItemId, v)) : (n.w("Validation fail - resource event - itemId: Cannot be (null), empty or above 64 characters. String: " + v), new u(i.EventValidation, o.ResourceEvent, s.InvalidEventPartLength, a.ItemId, v)) : (n.w("Validation fail - resource event - itemType: Not found in list of pre-defined available resource itemTypes. String: " + f), new u(i.EventValidation, o.ResourceEvent, s.NotFoundInAvailableItemTypes, a.ItemType, f)) : (n.w("Validation fail - resource event - itemType: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " + f), new u(i.EventValidation, o.ResourceEvent, s.InvalidEventPartCharacters, a.ItemType, f)) : (n.w("Validation fail - resource event - itemType: Cannot be (null), empty or above 64 characters. String: " + f), new u(i.EventValidation, o.ResourceEvent, s.InvalidEventPartLength, a.ItemType, f)) : (n.w("Validation fail - resource event - itemType: Cannot be (null)"), new u(i.EventValidation, o.ResourceEvent, s.StringEmptyOrNull, a.ItemType, "")) : (n.w("Validation fail - resource event - amount: Float amount cannot be 0 or negative. Value: " + l), new u(i.EventValidation, o.ResourceEvent, s.InvalidAmount, a.Amount, l + "")) : (n.w("Validation fail - resource event - currency: Not found in list of pre-defined available resource currencies. String: " + d), new u(i.EventValidation, o.ResourceEvent, s.NotFoundInAvailableCurrencies, a.Currency, d)) : (n.w("Validation fail - resource event - currency: Cannot be (null)"), new u(i.EventValidation, o.ResourceEvent, s.StringEmptyOrNull, a.Currency, ""))
                            }, t.validateProgressionEvent = function(r, c, d, l) {
                                if (r == e.EGAProgressionStatus.Undefined) return n.w("Validation fail - progression event: Invalid progression status."), new u(i.EventValidation, o.ProgressionEvent, s.InvalidProgressionStatus, a.ProgressionStatus, "");
                                if (l && !d && c) return n.w("Validation fail - progression event: 03 found but 01+02 are invalid. Progression must be set as either 01, 01+02 or 01+02+03."), new u(i.EventValidation, o.ProgressionEvent, s.WrongProgressionOrder, a.Undefined, c + ":" + d + ":" + l);
                                if (d && !c) return n.w("Validation fail - progression event: 02 found but not 01. Progression must be set as either 01, 01+02 or 01+02+03"), new u(i.EventValidation, o.ProgressionEvent, s.WrongProgressionOrder, a.Undefined, c + ":" + d + ":" + l);
                                if (!c) return n.w("Validation fail - progression event: progression01 not valid. Progressions must be set as either 01, 01+02 or 01+02+03"), new u(i.EventValidation, o.ProgressionEvent, s.WrongProgressionOrder, a.Undefined, (c || "") + ":" + (d || "") + ":" + (l || ""));
                                if (!t.validateEventPartLength(c, !1)) return n.w("Validation fail - progression event - progression01: Cannot be (null), empty or above 64 characters. String: " + c), new u(i.EventValidation, o.ProgressionEvent, s.InvalidEventPartLength, a.Progression01, c);
                                if (!t.validateEventPartCharacters(c)) return n.w("Validation fail - progression event - progression01: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " + c), new u(i.EventValidation, o.ProgressionEvent, s.InvalidEventPartCharacters, a.Progression01, c);
                                if (d) {
                                    if (!t.validateEventPartLength(d, !0)) return n.w("Validation fail - progression event - progression02: Cannot be empty or above 64 characters. String: " + d), new u(i.EventValidation, o.ProgressionEvent, s.InvalidEventPartLength, a.Progression02, d);
                                    if (!t.validateEventPartCharacters(d)) return n.w("Validation fail - progression event - progression02: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " + d), new u(i.EventValidation, o.ProgressionEvent, s.InvalidEventPartCharacters, a.Progression02, d)
                                }
                                if (l) {
                                    if (!t.validateEventPartLength(l, !0)) return n.w("Validation fail - progression event - progression03: Cannot be empty or above 64 characters. String: " + l), new u(i.EventValidation, o.ProgressionEvent, s.InvalidEventPartLength, a.Progression03, l);
                                    if (!t.validateEventPartCharacters(l)) return n.w("Validation fail - progression event - progression03: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " + l), new u(i.EventValidation, o.ProgressionEvent, s.InvalidEventPartCharacters, a.Progression03, l)
                                }
                                return null
                            }, t.validateDesignEvent = function(e) {
                                return t.validateEventIdLength(e) ? t.validateEventIdCharacters(e) ? null : (n.w("Validation fail - design event - eventId: Non valid characters. Only allowed A-z, 0-9, -_., ()!?. String: " + e), new u(i.EventValidation, o.DesignEvent, s.InvalidEventIdCharacters, a.EventId, e)) : (n.w("Validation fail - design event - eventId: Cannot be (null) or empty. Only 5 event parts allowed seperated by :. Each part need to be 64 characters or less. String: " + e), new u(i.EventValidation, o.DesignEvent, s.InvalidEventIdLength, a.EventId, e))
                            }, t.validateErrorEvent = function(r, c) {
                                return r == e.EGAErrorSeverity.Undefined ? (n.w("Validation fail - error event - severity: Severity was unsupported value."), new u(i.EventValidation, o.ErrorEvent, s.InvalidSeverity, a.Severity, "")) : t.validateLongString(c, !0) ? null : (n.w("Validation fail - error event - message: Message cannot be above 8192 characters."), new u(i.EventValidation, o.ErrorEvent, s.InvalidLongString, a.Message, c))
                            }, t.validateAdEvent = function(r, c, d, l) {
                                return r == e.EGAAdAction.Undefined ? (n.w("Validation fail - error event - severity: Severity was unsupported value."), new u(i.EventValidation, o.AdEvent, s.InvalidAdAction, a.AdAction, "")) : c == e.EGAAdType.Undefined ? (n.w("Validation fail - ad event - adType: Ad type was unsupported value."), new u(i.EventValidation, o.AdEvent, s.InvalidAdType, a.AdType, "")) : t.validateShortString(d, !1) ? t.validateString(l, !1) ? null : (n.w("Validation fail - ad event - message: Ad placement cannot be above 64 characters."), new u(i.EventValidation, o.AdEvent, s.InvalidString, a.AdPlacement, l)) : (n.w("Validation fail - ad event - message: Ad SDK name cannot be above 32 characters."), new u(i.EventValidation, o.AdEvent, s.InvalidShortString, a.AdSdkName, d))
                            }, t.validateSdkErrorEvent = function(e, r, a, u, c) {
                                return !(!t.validateKeys(e, r) || (a === i.Undefined ? (n.w("Validation fail - sdk error event - type: Category was unsupported value."), 1) : u === o.Undefined ? (n.w("Validation fail - sdk error event - type: Area was unsupported value."), 1) : c === s.Undefined && (n.w("Validation fail - sdk error event - type: Action was unsupported value."), 1)))
                            }, t.validateKeys = function(e, t) {
                                return !(!r.stringMatch(e, /^[A-z0-9]{32}$/) || !r.stringMatch(t, /^[A-z0-9]{40}$/))
                            }, t.validateCurrency = function(e) {
                                return !!e && !!r.stringMatch(e, /^[A-Z]{3}$/)
                            }, t.validateEventPartLength = function(e, t) {
                                return !(!t || e) || !!e && !(e.length > 64)
                            }, t.validateEventPartCharacters = function(e) {
                                return !!r.stringMatch(e, /^[A-Za-z0-9\s\-_\.\(\)\!\?]{1,64}$/)
                            }, t.validateEventIdLength = function(e) {
                                return !!e && !!r.stringMatch(e, /^[^:]{1,64}(?::[^:]{1,64}){0,4}$/)
                            }, t.validateEventIdCharacters = function(e) {
                                return !!e && !!r.stringMatch(e, /^[A-Za-z0-9\s\-_\.\(\)\!\?]{1,64}(:[A-Za-z0-9\s\-_\.\(\)\!\?]{1,64}){0,4}$/)
                            }, t.validateAndCleanInitRequestResponse = function(e, t) {
                                if (null == e) return n.w("validateInitRequestResponse failed - no response dictionary."), null;
                                var r = {};
                                try {
                                    var i = e.server_ts;
                                    if (!(i > 0)) return n.w("validateInitRequestResponse failed - invalid value in 'server_ts' field."), null;
                                    r.server_ts = i
                                } catch (t) {
                                    return n.w("validateInitRequestResponse failed - invalid type in 'server_ts' field. type=" + typeof e.server_ts + ", value=" + e.server_ts + ", " + t), null
                                }
                                if (t) {
                                    try {
                                        var o = e.configs;
                                        r.configs = o
                                    } catch (t) {
                                        return n.w("validateInitRequestResponse failed - invalid type in 'configs' field. type=" + typeof e.configs + ", value=" + e.configs + ", " + t), null
                                    }
                                    try {
                                        var s = e.configs_hash;
                                        r.configs_hash = s
                                    } catch (t) {
                                        return n.w("validateInitRequestResponse failed - invalid type in 'configs_hash' field. type=" + typeof e.configs_hash + ", value=" + e.configs_hash + ", " + t), null
                                    }
                                    try {
                                        var a = e.ab_id;
                                        r.ab_id = a
                                    } catch (t) {
                                        return n.w("validateInitRequestResponse failed - invalid type in 'ab_id' field. type=" + typeof e.ab_id + ", value=" + e.ab_id + ", " + t), null
                                    }
                                    try {
                                        var u = e.ab_variant_id;
                                        r.ab_variant_id = u
                                    } catch (t) {
                                        return n.w("validateInitRequestResponse failed - invalid type in 'ab_variant_id' field. type=" + typeof e.ab_variant_id + ", value=" + e.ab_variant_id + ", " + t), null
                                    }
                                }
                                return r
                            }, t.validateBuild = function(e) {
                                return !!t.validateShortString(e, !1)
                            }, t.validateSdkWrapperVersion = function(e) {
                                return !!r.stringMatch(e, /^(unity|unreal|gamemaker|cocos2d|construct|defold|godot|flutter) [0-9]{0,5}(\.[0-9]{0,5}){0,2}$/)
                            }, t.validateEngineVersion = function(e) {
                                return !(!e || !r.stringMatch(e, /^(unity|unreal|gamemaker|cocos2d|construct|defold|godot) [0-9]{0,5}(\.[0-9]{0,5}){0,2}$/))
                            }, t.validateUserId = function(e) {
                                return !!t.validateString(e, !1) || (n.w("Validation fail - user id: id cannot be (null), empty or above 64 characters."), !1)
                            }, t.validateShortString = function(e, t) {
                                return !(!t || e) || !(!e || e.length > 32)
                            }, t.validateString = function(e, t) {
                                return !(!t || e) || !(!e || e.length > 64)
                            }, t.validateLongString = function(e, t) {
                                return !(!t || e) || !(!e || e.length > 8192)
                            }, t.validateConnectionType = function(e) {
                                return r.stringMatch(e, /^(wwan|wifi|lan|offline)$/)
                            }, t.validateCustomDimensions = function(e) {
                                return t.validateArrayOfStrings(20, 32, !1, "custom dimensions", e)
                            }, t.validateResourceCurrencies = function(e) {
                                if (!t.validateArrayOfStrings(20, 64, !1, "resource currencies", e)) return !1;
                                for (var i = 0; i < e.length; ++i)
                                    if (!r.stringMatch(e[i], /^[A-Za-z]+$/)) return n.w("resource currencies validation failed: a resource currency can only be A-Z, a-z. String was: " + e[i]), !1;
                                return !0
                            }, t.validateResourceItemTypes = function(e) {
                                if (!t.validateArrayOfStrings(20, 32, !1, "resource item types", e)) return !1;
                                for (var r = 0; r < e.length; ++r)
                                    if (!t.validateEventPartCharacters(e[r])) return n.w("resource item types validation failed: a resource item type cannot contain other characters than A-z, 0-9, -_., ()!?. String was: " + e[r]), !1;
                                return !0
                            }, t.validateDimension01 = function(e, t) {
                                return !e || !!r.stringArrayContainsString(t, e)
                            }, t.validateDimension02 = function(e, t) {
                                return !e || !!r.stringArrayContainsString(t, e)
                            }, t.validateDimension03 = function(e, t) {
                                return !e || !!r.stringArrayContainsString(t, e)
                            }, t.validateArrayOfStrings = function(e, t, r, i, o) {
                                var s = i;
                                if (s || (s = "Array"), !o) return n.w(s + " validation failed: array cannot be null. "), !1;
                                if (0 == r && 0 == o.length) return n.w(s + " validation failed: array cannot be empty. "), !1;
                                if (e > 0 && o.length > e) return n.w(s + " validation failed: array cannot exceed " + e + " values. It has " + o.length + " values."), !1;
                                for (var a = 0; a < o.length; ++a) {
                                    var u = o[a] ? o[a].length : 0;
                                    if (0 === u) return n.w(s + " validation failed: contained an empty string. Array=" + JSON.stringify(o)), !1;
                                    if (t > 0 && u > t) return n.w(s + " validation failed: a string exceeded max allowed length (which is: " + t + "). String was: " + o[a]), !1
                                }
                                return !0
                            }, t.validateClientTs = function(e) {
                                return !(e < 0 || e > 99999999999)
                            }, t
                        }();
                        t.GAValidator = c
                    }(e.validators || (e.validators = {}))
                }(s || (s = {})),
                function(e) {
                    ! function(e) {
                        var t = function(e, t, n) {
                            this.name = e, this.value = t, this.version = n
                        };
                        e.NameValueVersion = t;
                        var n = function(e, t) {
                            this.name = e, this.version = t
                        };
                        e.NameVersion = n;
                        var r = function() {
                            function e() {}
                            return e.touch = function() {}, e.getRelevantSdkVersion = function() {
                                return e.sdkGameEngineVersion ? e.sdkGameEngineVersion : e.sdkWrapperVersion
                            }, e.getConnectionType = function() {
                                return e.connectionType
                            }, e.updateConnectionType = function() {
                                navigator.onLine ? "ios" === e.buildPlatform || "android" === e.buildPlatform ? e.connectionType = "wwan" : e.connectionType = "lan" : e.connectionType = "offline"
                            }, e.getOSVersionString = function() {
                                return e.buildPlatform + " " + e.osVersionPair.version
                            }, e.runtimePlatformToString = function() {
                                return e.osVersionPair.name
                            }, e.getBrowserVersionString = function() {
                                var t, n = navigator.userAgent,
                                    r = n.match(/(opera|chrome|safari|firefox|ubrowser|msie|trident|fbav(?=\/))\/?\s*(\d+)/i) || [];
                                if (0 == r.length && "ios" === e.buildPlatform) return "webkit_" + e.osVersion;
                                if (/trident/i.test(r[1])) return "IE " + ((t = /\brv[ :]+(\d+)/g.exec(n) || [])[1] || "");
                                if ("Chrome" === r[1] && null != (t = n.match(/\b(OPR|Edge|UBrowser)\/(\d+)/))) return t.slice(1).join(" ").replace("OPR", "Opera").replace("UBrowser", "UC").toLowerCase();
                                if (r[1] && "fbav" === r[1].toLowerCase() && (r[1] = "facebook", r[2])) return "facebook " + r[2];
                                var i = r[2] ? [r[1], r[2]] : [navigator.appName, navigator.appVersion, "-?"];
                                return null != (t = n.match(/version\/(\d+)/i)) && i.splice(1, 1, t[1]), i.join(" ").toLowerCase()
                            }, e.getDeviceModel = function() {
                                return "unknown"
                            }, e.getDeviceManufacturer = function() {
                                return "unknown"
                            }, e.matchItem = function(e, t) {
                                var r, i, o, s, a = new n("unknown", "0.0.0"),
                                    u = 0,
                                    c = 0;
                                for (u = 0; u < t.length; u += 1)
                                    if (new RegExp(t[u].value, "i").test(e)) {
                                        if (r = new RegExp(t[u].version + "[- /:;]([\\d._]+)", "i"), s = "", (i = e.match(r)) && i[1] && (o = i[1]), o) {
                                            var d = o.split(/[._]+/);
                                            for (c = 0; c < Math.min(d.length, 3); c += 1) s += d[c] + (c < Math.min(d.length, 3) - 1 ? "." : "")
                                        } else s = "0.0.0";
                                        return a.name = t[u].name, a.version = s, a
                                    }
                                return a
                            }, e.sdkWrapperVersion = "javascript 4.4.5", e.osVersionPair = e.matchItem([navigator.platform, navigator.userAgent, navigator.appVersion, navigator.vendor].join(" "), [new t("windows_phone", "Windows Phone", "OS"), new t("windows", "Win", "NT"), new t("ios", "iPhone", "OS"), new t("ios", "iPad", "OS"), new t("ios", "iPod", "OS"), new t("android", "Android", "Android"), new t("blackBerry", "BlackBerry", "/"), new t("mac_osx", "Mac", "OS X"), new t("tizen", "Tizen", "Tizen"), new t("linux", "Linux", "rv"), new t("kai_os", "KAIOS", "KAIOS")]), e.buildPlatform = e.runtimePlatformToString(), e.deviceModel = e.getDeviceModel(), e.deviceManufacturer = e.getDeviceManufacturer(), e.osVersion = e.getOSVersionString(), e.browserVersion = e.getBrowserVersionString(), e
                        }();
                        e.GADevice = r
                    }(e.device || (e.device = {}))
                }(s || (s = {})),
                function(e) {
                    var t, n;
                    t = e.threading || (e.threading = {}), n = function() {
                        function e(t) {
                            this.deadline = t, this.ignore = !1, this.async = !1, this.running = !1, this.id = ++e.idCounter
                        }
                        return e.idCounter = 0, e
                    }(), t.TimedBlock = n
                }(s || (s = {})),
                function(e) {
                    var t, n;
                    t = e.threading || (e.threading = {}), n = function() {
                        function e(e) {
                            this.comparer = e, this._subQueues = {}, this._sortedKeys = []
                        }
                        return e.prototype.enqueue = function(e, t) {
                            -1 === this._sortedKeys.indexOf(e) && this.addQueueOfPriority(e), this._subQueues[e].push(t)
                        }, e.prototype.addQueueOfPriority = function(e) {
                            var t = this;
                            this._sortedKeys.push(e), this._sortedKeys.sort((function(e, n) {
                                return t.comparer.compare(e, n)
                            })), this._subQueues[e] = []
                        }, e.prototype.peek = function() {
                            if (this.hasItems()) return this._subQueues[this._sortedKeys[0]][0];
                            throw new Error("The queue is empty")
                        }, e.prototype.hasItems = function() {
                            return this._sortedKeys.length > 0
                        }, e.prototype.dequeue = function() {
                            if (this.hasItems()) return this.dequeueFromHighPriorityQueue();
                            throw new Error("The queue is empty")
                        }, e.prototype.dequeueFromHighPriorityQueue = function() {
                            var e = this._sortedKeys[0],
                                t = this._subQueues[e].shift();
                            return 0 === this._subQueues[e].length && (this._sortedKeys.shift(), delete this._subQueues[e]), t
                        }, e
                    }(), t.PriorityQueue = n
                }(s || (s = {})),
                function(e) {
                    ! function(t) {
                        var n, r, i = e.logging.GALogger;
                        ! function(e) {
                            e[e.Equal = 0] = "Equal", e[e.LessOrEqual = 1] = "LessOrEqual", e[e.NotEqual = 2] = "NotEqual"
                        }(n = t.EGAStoreArgsOperator || (t.EGAStoreArgsOperator = {})),
                        function(e) {
                            e[e.Events = 0] = "Events", e[e.Sessions = 1] = "Sessions", e[e.Progression = 2] = "Progression"
                        }(r = t.EGAStore || (t.EGAStore = {}));
                        var o = function() {
                            function e() {
                                this.eventsStore = [], this.sessionsStore = [], this.progressionStore = [], this.storeItems = {};
                                try {
                                    "object" == typeof localStorage ? (localStorage.setItem("testingLocalStorage", "yes"), localStorage.removeItem("testingLocalStorage"), e.storageAvailable = !0) : e.storageAvailable = !1
                                } catch (e) {}
                            }
                            return e.isStorageAvailable = function() {
                                return e.storageAvailable
                            }, e.isStoreTooLargeForEvents = function() {
                                return e.instance.eventsStore.length + e.instance.sessionsStore.length > e.MaxNumberOfEntries
                            }, e.select = function(t, r, i, o) {
                                void 0 === r && (r = []), void 0 === i && (i = !1), void 0 === o && (o = 0);
                                var s = e.getStore(t);
                                if (!s) return null;
                                for (var a = [], u = 0; u < s.length; ++u) {
                                    for (var c = s[u], d = !0, l = 0; l < r.length; ++l) {
                                        var f = r[l];
                                        if (c[f[0]]) switch (f[1]) {
                                            case n.Equal:
                                                d = c[f[0]] == f[2];
                                                break;
                                            case n.LessOrEqual:
                                                d = c[f[0]] <= f[2];
                                                break;
                                            case n.NotEqual:
                                                d = c[f[0]] != f[2];
                                                break;
                                            default:
                                                d = !1
                                        } else d = !1;
                                        if (!d) break
                                    }
                                    d && a.push(c)
                                }
                                return i && a.sort((function(e, t) {
                                    return e.client_ts - t.client_ts
                                })), o > 0 && a.length > o && (a = a.slice(0, o + 1)), a
                            }, e.update = function(t, r, i) {
                                void 0 === i && (i = []);
                                var o = e.getStore(t);
                                if (!o) return !1;
                                for (var s = 0; s < o.length; ++s) {
                                    for (var a = o[s], u = !0, c = 0; c < i.length; ++c) {
                                        var d = i[c];
                                        if (a[d[0]]) switch (d[1]) {
                                            case n.Equal:
                                                u = a[d[0]] == d[2];
                                                break;
                                            case n.LessOrEqual:
                                                u = a[d[0]] <= d[2];
                                                break;
                                            case n.NotEqual:
                                                u = a[d[0]] != d[2];
                                                break;
                                            default:
                                                u = !1
                                        } else u = !1;
                                        if (!u) break
                                    }
                                    if (u)
                                        for (c = 0; c < r.length; ++c) {
                                            var l = r[c];
                                            a[l[0]] = l[1]
                                        }
                                }
                                return !0
                            }, e.delete = function(t, r) {
                                var i = e.getStore(t);
                                if (i)
                                    for (var o = 0; o < i.length; ++o) {
                                        for (var s = i[o], a = !0, u = 0; u < r.length; ++u) {
                                            var c = r[u];
                                            if (s[c[0]]) switch (c[1]) {
                                                case n.Equal:
                                                    a = s[c[0]] == c[2];
                                                    break;
                                                case n.LessOrEqual:
                                                    a = s[c[0]] <= c[2];
                                                    break;
                                                case n.NotEqual:
                                                    a = s[c[0]] != c[2];
                                                    break;
                                                default:
                                                    a = !1
                                            } else a = !1;
                                            if (!a) break
                                        }
                                        a && (i.splice(o, 1), --o)
                                    }
                            }, e.insert = function(t, n, r, i) {
                                void 0 === r && (r = !1), void 0 === i && (i = null);
                                var o = e.getStore(t);
                                if (o)
                                    if (r) {
                                        if (!i) return;
                                        for (var s = !1, a = 0; a < o.length; ++a) {
                                            var u = o[a];
                                            if (u[i] == n[i]) {
                                                for (var c in n) u[c] = n[c];
                                                s = !0;
                                                break
                                            }
                                        }
                                        s || o.push(n)
                                    } else o.push(n)
                            }, e.save = function(t) {
                                e.isStorageAvailable() ? (localStorage.setItem(e.StringFormat(e.KeyFormat, t, e.EventsStoreKey), JSON.stringify(e.instance.eventsStore)), localStorage.setItem(e.StringFormat(e.KeyFormat, t, e.SessionsStoreKey), JSON.stringify(e.instance.sessionsStore)), localStorage.setItem(e.StringFormat(e.KeyFormat, t, e.ProgressionStoreKey), JSON.stringify(e.instance.progressionStore)), localStorage.setItem(e.StringFormat(e.KeyFormat, t, e.ItemsStoreKey), JSON.stringify(e.instance.storeItems))) : i.w("Storage is not available, cannot save.")
                            }, e.load = function(t) {
                                if (e.isStorageAvailable()) {
                                    try {
                                        e.instance.eventsStore = JSON.parse(localStorage.getItem(e.StringFormat(e.KeyFormat, t, e.EventsStoreKey))), e.instance.eventsStore || (e.instance.eventsStore = [])
                                    } catch (t) {
                                        i.w("Load failed for 'events' store. Using empty store."), e.instance.eventsStore = []
                                    }
                                    try {
                                        e.instance.sessionsStore = JSON.parse(localStorage.getItem(e.StringFormat(e.KeyFormat, t, e.SessionsStoreKey))), e.instance.sessionsStore || (e.instance.sessionsStore = [])
                                    } catch (t) {
                                        i.w("Load failed for 'sessions' store. Using empty store."), e.instance.sessionsStore = []
                                    }
                                    try {
                                        e.instance.progressionStore = JSON.parse(localStorage.getItem(e.StringFormat(e.KeyFormat, t, e.ProgressionStoreKey))), e.instance.progressionStore || (e.instance.progressionStore = [])
                                    } catch (t) {
                                        i.w("Load failed for 'progression' store. Using empty store."), e.instance.progressionStore = []
                                    }
                                    try {
                                        e.instance.storeItems = JSON.parse(localStorage.getItem(e.StringFormat(e.KeyFormat, t, e.ItemsStoreKey))), e.instance.storeItems || (e.instance.storeItems = {})
                                    } catch (t) {
                                        i.w("Load failed for 'items' store. Using empty store."), e.instance.progressionStore = []
                                    }
                                } else i.w("Storage is not available, cannot load.")
                            }, e.setItem = function(t, n, r) {
                                var i = e.StringFormat(e.KeyFormat, t, n);
                                r ? e.instance.storeItems[i] = r : i in e.instance.storeItems && delete e.instance.storeItems[i]
                            }, e.getItem = function(t, n) {
                                var r = e.StringFormat(e.KeyFormat, t, n);
                                return r in e.instance.storeItems ? e.instance.storeItems[r] : null
                            }, e.getStore = function(t) {
                                switch (t) {
                                    case r.Events:
                                        return e.instance.eventsStore;
                                    case r.Sessions:
                                        return e.instance.sessionsStore;
                                    case r.Progression:
                                        return e.instance.progressionStore;
                                    default:
                                        return i.w("GAStore.getStore(): Cannot find store: " + t), null
                                }
                            }, e.instance = new e, e.MaxNumberOfEntries = 2e3, e.StringFormat = function(e) {
                                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                                return e.replace(/{(\d+)}/g, (function(e, n) {
                                    return t[n] || ""
                                }))
                            }, e.KeyFormat = "GA::{0}::{1}", e.EventsStoreKey = "ga_event", e.SessionsStoreKey = "ga_session", e.ProgressionStoreKey = "ga_progression", e.ItemsStoreKey = "ga_items", e
                        }();
                        t.GAStore = o
                    }(e.store || (e.store = {}))
                }(s || (s = {})),
                function(e) {
                    var t, n, r, i, o, s, a, u, c;
                    t = e.state || (e.state = {}), n = e.validators.GAValidator, r = e.utilities.GAUtilities, i = e.logging.GALogger, o = e.store.GAStore, s = e.device.GADevice, a = e.store.EGAStore, u = e.store.EGAStoreArgsOperator, c = function() {
                        function e() {
                            this.availableCustomDimensions01 = [], this.availableCustomDimensions02 = [], this.availableCustomDimensions03 = [], this.currentGlobalCustomEventFields = {}, this.availableResourceCurrencies = [], this.availableResourceItemTypes = [], this.configurations = {}, this.remoteConfigsListeners = [], this.beforeUnloadListeners = [], this.sdkConfigDefault = {}, this.sdkConfig = {}, this.progressionTries = {}, this._isEventSubmissionEnabled = !0, this.isUnloading = !1
                        }
                        return e.setUserId = function(t) {
                            e.instance.userId = t, e.cacheIdentifier()
                        }, e.getIdentifier = function() {
                            return e.instance.identifier
                        }, e.isInitialized = function() {
                            return e.instance.initialized
                        }, e.setInitialized = function(t) {
                            e.instance.initialized = t
                        }, e.getSessionStart = function() {
                            return e.instance.sessionStart
                        }, e.getSessionNum = function() {
                            return e.instance.sessionNum
                        }, e.getTransactionNum = function() {
                            return e.instance.transactionNum
                        }, e.getSessionId = function() {
                            return e.instance.sessionId
                        }, e.getCurrentCustomDimension01 = function() {
                            return e.instance.currentCustomDimension01
                        }, e.getCurrentCustomDimension02 = function() {
                            return e.instance.currentCustomDimension02
                        }, e.getCurrentCustomDimension03 = function() {
                            return e.instance.currentCustomDimension03
                        }, e.getGameKey = function() {
                            return e.instance.gameKey
                        }, e.getGameSecret = function() {
                            return e.instance.gameSecret
                        }, e.getAvailableCustomDimensions01 = function() {
                            return e.instance.availableCustomDimensions01
                        }, e.setAvailableCustomDimensions01 = function(t) {
                            n.validateCustomDimensions(t) && (e.instance.availableCustomDimensions01 = t, e.validateAndFixCurrentDimensions(), i.i("Set available custom01 dimension values: (" + r.joinStringArray(t, ", ") + ")"))
                        }, e.getAvailableCustomDimensions02 = function() {
                            return e.instance.availableCustomDimensions02
                        }, e.setAvailableCustomDimensions02 = function(t) {
                            n.validateCustomDimensions(t) && (e.instance.availableCustomDimensions02 = t, e.validateAndFixCurrentDimensions(), i.i("Set available custom02 dimension values: (" + r.joinStringArray(t, ", ") + ")"))
                        }, e.getAvailableCustomDimensions03 = function() {
                            return e.instance.availableCustomDimensions03
                        }, e.setAvailableCustomDimensions03 = function(t) {
                            n.validateCustomDimensions(t) && (e.instance.availableCustomDimensions03 = t, e.validateAndFixCurrentDimensions(), i.i("Set available custom03 dimension values: (" + r.joinStringArray(t, ", ") + ")"))
                        }, e.getAvailableResourceCurrencies = function() {
                            return e.instance.availableResourceCurrencies
                        }, e.setAvailableResourceCurrencies = function(t) {
                            n.validateResourceCurrencies(t) && (e.instance.availableResourceCurrencies = t, i.i("Set available resource currencies: (" + r.joinStringArray(t, ", ") + ")"))
                        }, e.getAvailableResourceItemTypes = function() {
                            return e.instance.availableResourceItemTypes
                        }, e.setAvailableResourceItemTypes = function(t) {
                            n.validateResourceItemTypes(t) && (e.instance.availableResourceItemTypes = t, i.i("Set available resource item types: (" + r.joinStringArray(t, ", ") + ")"))
                        }, e.getBuild = function() {
                            return e.instance.build
                        }, e.setBuild = function(t) {
                            e.instance.build = t, i.i("Set build version: " + t)
                        }, e.getUseManualSessionHandling = function() {
                            return e.instance.useManualSessionHandling
                        }, e.isEventSubmissionEnabled = function() {
                            return e.instance._isEventSubmissionEnabled
                        }, e.getABTestingId = function() {
                            return e.instance.abId
                        }, e.getABTestingVariantId = function() {
                            return e.instance.abVariantId
                        }, e.prototype.setDefaultId = function(t) {
                            this.defaultUserId = t || "", e.cacheIdentifier()
                        }, e.getDefaultId = function() {
                            return e.instance.defaultUserId
                        }, e.getSdkConfig = function() {
                            var t, n = 0;
                            for (var r in e.instance.sdkConfig) 0 === n && (t = r), ++n;
                            if (t && n > 0) return e.instance.sdkConfig;
                            for (var r in n = 0, e.instance.sdkConfigCached) 0 === n && (t = r), ++n;
                            return t && n > 0 ? e.instance.sdkConfigCached : e.instance.sdkConfigDefault
                        }, e.isEnabled = function() {
                            return !!e.instance.initAuthorized
                        }, e.setCustomDimension01 = function(t) {
                            e.instance.currentCustomDimension01 = t, o.setItem(e.getGameKey(), e.Dimension01Key, t), i.i("Set custom01 dimension value: " + t)
                        }, e.setCustomDimension02 = function(t) {
                            e.instance.currentCustomDimension02 = t, o.setItem(e.getGameKey(), e.Dimension02Key, t), i.i("Set custom02 dimension value: " + t)
                        }, e.setCustomDimension03 = function(t) {
                            e.instance.currentCustomDimension03 = t, o.setItem(e.getGameKey(), e.Dimension03Key, t), i.i("Set custom03 dimension value: " + t)
                        }, e.incrementSessionNum = function() {
                            var t = e.getSessionNum() + 1;
                            e.instance.sessionNum = t
                        }, e.incrementTransactionNum = function() {
                            var t = e.getTransactionNum() + 1;
                            e.instance.transactionNum = t
                        }, e.incrementProgressionTries = function(t) {
                            var n = e.getProgressionTries(t) + 1;
                            e.instance.progressionTries[t] = n;
                            var r = {};
                            r.progression = t, r.tries = n, o.insert(a.Progression, r, !0, "progression")
                        }, e.getProgressionTries = function(t) {
                            return t in e.instance.progressionTries ? e.instance.progressionTries[t] : 0
                        }, e.clearProgressionTries = function(t) {
                            t in e.instance.progressionTries && delete e.instance.progressionTries[t];
                            var n = [];
                            n.push(["progression", u.Equal, t]), o.delete(a.Progression, n)
                        }, e.setKeys = function(t, n) {
                            e.instance.gameKey = t, e.instance.gameSecret = n
                        }, e.setManualSessionHandling = function(t) {
                            e.instance.useManualSessionHandling = t, i.i("Use manual session handling: " + t)
                        }, e.setEnabledEventSubmission = function(t) {
                            e.instance._isEventSubmissionEnabled = t
                        }, e.getEventAnnotations = function() {
                            var t = {
                                v: 2
                            };
                            t.event_uuid = r.createGuid(), t.user_id = e.instance.identifier, t.client_ts = e.getClientTsAdjusted(), t.sdk_version = s.getRelevantSdkVersion(), t.os_version = s.osVersion, t.manufacturer = s.deviceManufacturer, t.device = s.deviceModel, t.browser_version = s.browserVersion, t.platform = s.buildPlatform, t.session_id = e.instance.sessionId, t[e.SessionNumKey] = e.instance.sessionNum;
                            var i = s.getConnectionType();
                            if (n.validateConnectionType(i) && (t.connection_type = i), s.gameEngineVersion && (t.engine_version = s.gameEngineVersion), e.instance.configurations) {
                                var o = 0;
                                for (var a in e.instance.configurations) {
                                    o++;
                                    break
                                }
                                o > 0 && (t.configurations = e.instance.configurations)
                            }
                            return e.instance.abId && (t.ab_id = e.instance.abId), e.instance.abVariantId && (t.ab_variant_id = e.instance.abVariantId), e.instance.build && (t.build = e.instance.build), t
                        }, e.getSdkErrorEventAnnotations = function() {
                            var t = {
                                v: 2
                            };
                            t.event_uuid = r.createGuid(), t.category = e.CategorySdkError, t.sdk_version = s.getRelevantSdkVersion(), t.os_version = s.osVersion, t.manufacturer = s.deviceManufacturer, t.device = s.deviceModel, t.platform = s.buildPlatform;
                            var i = s.getConnectionType();
                            return n.validateConnectionType(i) && (t.connection_type = i), s.gameEngineVersion && (t.engine_version = s.gameEngineVersion), t
                        }, e.getInitAnnotations = function() {
                            var t = {};
                            return e.getIdentifier() || e.cacheIdentifier(), o.setItem(e.getGameKey(), e.LastUsedIdentifierKey, e.getIdentifier()), t.user_id = e.getIdentifier(), t.sdk_version = s.getRelevantSdkVersion(), t.os_version = s.osVersion, t.platform = s.buildPlatform, e.getBuild() ? t.build = e.getBuild() : t.build = null, t.session_num = e.getSessionNum(), t.random_salt = e.getSessionNum(), t
                        }, e.getClientTsAdjusted = function() {
                            var t = r.timeIntervalSince1970(),
                                i = t + e.instance.clientServerTimeOffset;
                            return n.validateClientTs(i) ? i : t
                        }, e.sessionIsStarted = function() {
                            return 0 != e.instance.sessionStart
                        }, e.cacheIdentifier = function() {
                            e.instance.userId ? e.instance.identifier = e.instance.userId : e.instance.defaultUserId && (e.instance.identifier = e.instance.defaultUserId)
                        }, e.ensurePersistedStates = function() {
                            o.isStorageAvailable() && o.load(e.getGameKey());
                            var t = e.instance;
                            t.setDefaultId(null != o.getItem(e.getGameKey(), e.DefaultUserIdKey) ? o.getItem(e.getGameKey(), e.DefaultUserIdKey) : r.createGuid()), t.sessionNum = null != o.getItem(e.getGameKey(), e.SessionNumKey) ? Number(o.getItem(e.getGameKey(), e.SessionNumKey)) : 0, t.transactionNum = null != o.getItem(e.getGameKey(), e.TransactionNumKey) ? Number(o.getItem(e.getGameKey(), e.TransactionNumKey)) : 0, t.currentCustomDimension01 ? o.setItem(e.getGameKey(), e.Dimension01Key, t.currentCustomDimension01) : (t.currentCustomDimension01 = null != o.getItem(e.getGameKey(), e.Dimension01Key) ? o.getItem(e.getGameKey(), e.Dimension01Key) : "", t.currentCustomDimension01), t.currentCustomDimension02 ? o.setItem(e.getGameKey(), e.Dimension02Key, t.currentCustomDimension02) : (t.currentCustomDimension02 = null != o.getItem(e.getGameKey(), e.Dimension02Key) ? o.getItem(e.getGameKey(), e.Dimension02Key) : "", t.currentCustomDimension02), t.currentCustomDimension03 ? o.setItem(e.getGameKey(), e.Dimension03Key, t.currentCustomDimension03) : (t.currentCustomDimension03 = null != o.getItem(e.getGameKey(), e.Dimension03Key) ? o.getItem(e.getGameKey(), e.Dimension03Key) : "", t.currentCustomDimension03);
                            var n = null != o.getItem(e.getGameKey(), e.SdkConfigCachedKey) ? o.getItem(e.getGameKey(), e.SdkConfigCachedKey) : "";
                            if (n) {
                                var s = JSON.parse(r.decode64(n));
                                if (s) {
                                    var u = o.getItem(e.getGameKey(), e.LastUsedIdentifierKey);
                                    null != u && u != e.getIdentifier() && (i.w("New identifier spotted compared to last one used, clearing cached configs hash!!"), s.configs_hash && delete s.configs_hash), t.sdkConfigCached = s
                                }
                            }
                            var c = e.getSdkConfig();
                            t.configsHash = c.configs_hash ? c.configs_hash : "", t.abId = c.ab_id ? c.ab_id : "", t.abVariantId = c.ab_variant_id ? c.ab_variant_id : "";
                            var d = o.select(a.Progression);
                            if (d)
                                for (var l = 0; l < d.length; ++l) {
                                    var f = d[l];
                                    f && (t.progressionTries[f.progression] = f.tries)
                                }
                        }, e.calculateServerTimeOffset = function(e) {
                            return e - r.timeIntervalSince1970()
                        }, e.formatString = function(e, t) {
                            for (var n = e, r = 0; r < t.length; r++) {
                                var i = new RegExp("\\{" + r + "\\}", "gi");
                                n = n.replace(i, arguments[r])
                            }
                            return n
                        }, e.validateAndCleanCustomFields = function(t, n) {
                            void 0 === n && (n = null);
                            var o = {};
                            if (t) {
                                var s = 0;
                                for (var a in t) {
                                    var u = t[a];
                                    if (a && u)
                                        if (s < e.MAX_CUSTOM_FIELDS_COUNT) {
                                            var c = new RegExp("^[a-zA-Z0-9_]{1," + e.MAX_CUSTOM_FIELDS_KEY_LENGTH + "}$");
                                            if (r.stringMatch(a, c)) {
                                                var d = typeof u;
                                                if ("string" === d || u instanceof String) {
                                                    var l = u;
                                                    l.length <= e.MAX_CUSTOM_FIELDS_VALUE_STRING_LENGTH && l.length > 0 ? (o[a] = l, ++s) : (v = "validateAndCleanCustomFields: entry with key={0}, value={1} has been omitted because its value is an empty string or exceeds the max number of characters (" + e.MAX_CUSTOM_FIELDS_VALUE_STRING_LENGTH + ")", g = e.formatString(v, [a, u]), i.w(g), n && n(v, g))
                                                } else if ("number" === d || u instanceof Number) {
                                                    var f = u;
                                                    o[a] = f, ++s
                                                } else v = "validateAndCleanCustomFields: entry with key={0}, value={1} has been omitted because its value is not a string or number", g = e.formatString(v, [a, u]), i.w(g), n && n(v, g)
                                            } else v = "validateAndCleanCustomFields: entry with key={0}, value={1} has been omitted because its key contains illegal character, is empty or exceeds the max number of characters (" + e.MAX_CUSTOM_FIELDS_KEY_LENGTH + ")", g = e.formatString(v, [a, u]), i.w(g), n && n(v, g)
                                        } else v = "validateAndCleanCustomFields: entry with key={0}, value={1} has been omitted because it exceeds the max number of custom fields (" + e.MAX_CUSTOM_FIELDS_COUNT + ")", g = e.formatString(v, [a, u]), i.w(g), n && n(v, g);
                                    else {
                                        var v = "validateAndCleanCustomFields: entry with key={0}, value={1} has been omitted because its key or value is null",
                                            g = e.formatString(v, [a, u]);
                                        i.w(g), n && n(v, g)
                                    }
                                }
                            }
                            return o
                        }, e.validateAndFixCurrentDimensions = function() {
                            n.validateDimension01(e.getCurrentCustomDimension01(), e.getAvailableCustomDimensions01()) || e.setCustomDimension01(""), n.validateDimension02(e.getCurrentCustomDimension02(), e.getAvailableCustomDimensions02()) || e.setCustomDimension02(""), n.validateDimension03(e.getCurrentCustomDimension03(), e.getAvailableCustomDimensions03()) || e.setCustomDimension03("")
                        }, e.getConfigurationStringValue = function(t, n) {
                            return e.instance.configurations[t] ? e.instance.configurations[t].toString() : n
                        }, e.isRemoteConfigsReady = function() {
                            return e.instance.remoteConfigsIsReady
                        }, e.addRemoteConfigsListener = function(t) {
                            e.instance.remoteConfigsListeners.indexOf(t) < 0 && e.instance.remoteConfigsListeners.push(t)
                        }, e.removeRemoteConfigsListener = function(t) {
                            var n = e.instance.remoteConfigsListeners.indexOf(t);
                            n > -1 && e.instance.remoteConfigsListeners.splice(n, 1)
                        }, e.getRemoteConfigsContentAsString = function() {
                            return JSON.stringify(e.instance.configurations)
                        }, e.populateConfigurations = function(t) {
                            var n = t.configs;
                            if (n) {
                                e.instance.configurations = {};
                                for (var r = 0; r < n.length; ++r) {
                                    var i = n[r];
                                    if (i) {
                                        var o = i.key,
                                            s = i.value,
                                            a = i.start_ts ? i.start_ts : Number.MIN_VALUE,
                                            u = i.end_ts ? i.end_ts : Number.MAX_VALUE,
                                            c = e.getClientTsAdjusted();
                                        o && s && c > a && c < u && (e.instance.configurations[o] = s)
                                    }
                                }
                            }
                            e.instance.remoteConfigsIsReady = !0;
                            var d = e.instance.remoteConfigsListeners;
                            for (r = 0; r < d.length; ++r) d[r] && d[r].onRemoteConfigsUpdated()
                        }, e.addOnBeforeUnloadListener = function(t) {
                            e.instance.beforeUnloadListeners.indexOf(t) < 0 && e.instance.beforeUnloadListeners.push(t)
                        }, e.removeOnBeforeUnloadListener = function(t) {
                            var n = e.instance.beforeUnloadListeners.indexOf(t);
                            n > -1 && e.instance.beforeUnloadListeners.splice(n, 1)
                        }, e.notifyBeforeUnloadListeners = function() {
                            for (var t = e.instance.beforeUnloadListeners, n = 0; n < t.length; ++n) t[n] && t[n].onBeforeUnload()
                        }, e.CategorySdkError = "sdk_error", e.MAX_CUSTOM_FIELDS_COUNT = 50, e.MAX_CUSTOM_FIELDS_KEY_LENGTH = 64, e.MAX_CUSTOM_FIELDS_VALUE_STRING_LENGTH = 256, e.instance = new e, e.DefaultUserIdKey = "default_user_id", e.SessionNumKey = "session_num", e.TransactionNumKey = "transaction_num", e.Dimension01Key = "dimension01", e.Dimension02Key = "dimension02", e.Dimension03Key = "dimension03", e.SdkConfigCachedKey = "sdk_config_cached", e.LastUsedIdentifierKey = "last_used_identifier", e
                    }(), t.GAState = c
                }(s || (s = {})),
                function(e) {
                    var t, n, r, i;
                    t = e.tasks || (e.tasks = {}), n = e.utilities.GAUtilities, r = e.logging.GALogger, i = function() {
                        function e() {}
                        return e.execute = function(t, i, o, s) {
                            var a = new Date;
                            if (e.timestampMap[i] || (e.timestampMap[i] = a), e.countMap[i] || (e.countMap[i] = 0), (a.getTime() - e.timestampMap[i].getTime()) / 1e3 >= 3600 && (e.timestampMap[i] = a, e.countMap[i] = 0), !(e.countMap[i] >= e.MaxCount)) {
                                var u = n.getHmac(s, o),
                                    c = new XMLHttpRequest;
                                c.onreadystatechange = function() {
                                    if (4 === c.readyState) {
                                        if (!c.responseText) return;
                                        if (200 != c.status) return void r.w("sdk error failed. response code not 200. status code: " + c.status + ", description: " + c.statusText + ", body: " + c.responseText);
                                        e.countMap[i] = e.countMap[i] + 1
                                    }
                                }, c.open("POST", t, !0), c.setRequestHeader("Content-Type", "application/json"), c.setRequestHeader("Authorization", u);
                                try {
                                    c.send(o)
                                } catch (e) {}
                            }
                        }, e.MaxCount = 10, e.countMap = {}, e.timestampMap = {}, e
                    }(), t.SdkErrorTask = i
                }(s || (s = {})),
                function(e) {
                    var t, n, r, i, o, s, a, u, c, d, l;
                    t = e.http || (e.http = {}), n = e.state.GAState, r = e.logging.GALogger, i = e.utilities.GAUtilities, o = e.validators.GAValidator, s = e.tasks.SdkErrorTask, a = e.events.EGASdkErrorCategory, u = e.events.EGASdkErrorArea, c = e.events.EGASdkErrorAction, d = e.events.EGASdkErrorParameter, l = function() {
                        function e() {
                            this.protocol = "https", this.hostName = "api.gameanalytics.com", this.version = "v2", this.remoteConfigsVersion = "v1", this.baseUrl = this.protocol + "://" + this.hostName + "/" + this.version, this.remoteConfigsBaseUrl = this.protocol + "://" + this.hostName + "/remote_configs/" + this.remoteConfigsVersion, this.initializeUrlPath = "init", this.eventsUrlPath = "events", this.useGzip = !1
                        }
                        return e.prototype.requestInit = function(r, i) {
                            // var o = n.getGameKey(),
                            //     s = this.remoteConfigsBaseUrl + "/" + this.initializeUrlPath + "?game_key=" + o + "&interval_seconds=0&configs_hash=" + r,
                            //     a = n.getInitAnnotations(),
                            //     u = JSON.stringify(a);
                            // if (u) {
                            //     var c = this.createPayloadData(u, this.useGzip),
                            //         d = [];
                            //     d.push(u), e.sendRequest(s, c, d, this.useGzip, e.initRequestCallback, i)
                            // } else i(t.EGAHTTPApiResponse.JsonEncodeFailed, null)
                        }, e.prototype.sendEventsInArray = function(r, i, o) {
                            if (0 != r.length) {
                                var s = n.getGameKey(),
                                    a = this.baseUrl + "/" + s + "/" + this.eventsUrlPath,
                                    u = JSON.stringify(r);
                                if (u) {
                                    var c = this.createPayloadData(u, this.useGzip),
                                        d = [];
                                    d.push(u), d.push(i), d.push(r.length.toString()), e.sendRequest(a, c, d, this.useGzip, e.sendEventInArrayRequestCallback, o)
                                } else o(t.EGAHTTPApiResponse.JsonEncodeFailed, null, i, r.length)
                            }
                        }, e.prototype.sendSdkErrorEvent = function(t, i, a, u, c, d, l) {
                            if (n.isEventSubmissionEnabled() && o.validateSdkErrorEvent(d, l, t, i, a)) {
                                var f, v = this.baseUrl + "/" + d + "/" + this.eventsUrlPath,
                                    g = "",
                                    p = n.getSdkErrorEventAnnotations(),
                                    m = e.sdkErrorCategoryString(t);
                                p.error_category = m, g += m;
                                var h = e.sdkErrorAreaString(i);
                                p.error_area = h, g += ":" + h;
                                var E = e.sdkErrorActionString(a);
                                p.error_action = E;
                                var y = e.sdkErrorParameterString(u);
                                if (y.length > 0 && (p.error_parameter = y), c.length > 0) {
                                    var S = c;
                                    c.length > e.MAX_ERROR_MESSAGE_LENGTH && (S = c.substring(0, e.MAX_ERROR_MESSAGE_LENGTH)), p.reason = S
                                }
                                var A = [];
                                A.push(p), (f = JSON.stringify(A)) ? s.execute(v, g, f, l) : r.w("sendSdkErrorEvent: JSON encoding failed.")
                            }
                        }, e.sendEventInArrayRequestCallback = function(r, i, o, s) {
                            void 0 === s && (s = null), s[0], s[1];
                            var l, f, v = s[2],
                                g = parseInt(s[3]);
                            l = r.responseText, f = r.status;
                            var p = e.instance.processRequestResponse(f, r.statusText, l, "Events");
                            if (p == t.EGAHTTPApiResponse.Ok || p == t.EGAHTTPApiResponse.Created || p == t.EGAHTTPApiResponse.BadRequest) {
                                var m = l ? JSON.parse(l) : {};
                                if (null == m) return o(t.EGAHTTPApiResponse.JsonDecodeFailed, null, v, g), void e.instance.sendSdkErrorEvent(a.Http, u.EventsHttp, c.FailHttpJsonDecode, d.Undefined, l, n.getGameKey(), n.getGameSecret());
                                t.EGAHTTPApiResponse.BadRequest, o(p, m, v, g)
                            } else o(p, null, v, g)
                        }, e.sendRequest = function(e, t, r, o, s, a) {
                            var u = new XMLHttpRequest,
                                c = n.getGameSecret(),
                                d = i.getHmac(c, t),
                                l = [];
                            for (var f in l.push(d), r) l.push(r[f]);
                            if (u.onreadystatechange = function() {
                                    4 === u.readyState && s(u, e, a, l)
                                }, u.open("POST", e, !0), u.setRequestHeader("Content-Type", "application/json"), u.setRequestHeader("Authorization", d), o) throw new Error("gzip not supported");
                            try {
                                u.send(t)
                            } catch (e) {}
                        }, e.initRequestCallback = function(r, i, s, l) {
                            var f, v;
                            void 0 === l && (l = null), l[0], l[1], f = r.responseText, v = r.status;
                            var g = f ? JSON.parse(f) : {},
                                p = e.instance.processRequestResponse(v, r.statusText, f, "Init");
                            if (p == t.EGAHTTPApiResponse.Ok || p == t.EGAHTTPApiResponse.Created || p == t.EGAHTTPApiResponse.BadRequest) {
                                if (null == g) return s(t.EGAHTTPApiResponse.JsonDecodeFailed, null, "", 0), void e.instance.sendSdkErrorEvent(a.Http, u.InitHttp, c.FailHttpJsonDecode, d.Undefined, f, n.getGameKey(), n.getGameSecret());
                                if (p !== t.EGAHTTPApiResponse.BadRequest) {
                                    var m = o.validateAndCleanInitRequestResponse(g, p === t.EGAHTTPApiResponse.Created);
                                    m ? s(p, m, "", 0) : s(t.EGAHTTPApiResponse.BadResponse, null, "", 0)
                                } else s(p, null, "", 0)
                            } else s(p, null, "", 0)
                        }, e.prototype.createPayloadData = function(e, t) {
                            if (t) throw new Error("gzip not supported");
                            return e
                        }, e.prototype.processRequestResponse = function(e, n, r, i) {
                            return r ? 200 === e ? t.EGAHTTPApiResponse.Ok : 201 === e ? t.EGAHTTPApiResponse.Created : 0 === e || 401 === e ? t.EGAHTTPApiResponse.Unauthorized : 400 === e ? t.EGAHTTPApiResponse.BadRequest : 500 === e ? t.EGAHTTPApiResponse.InternalServerError : t.EGAHTTPApiResponse.UnknownResponseCode : t.EGAHTTPApiResponse.NoResponse
                        }, e.sdkErrorCategoryString = function(e) {
                            switch (e) {
                                case a.EventValidation:
                                    return "event_validation";
                                case a.Database:
                                    return "db";
                                case a.Init:
                                    return "init";
                                case a.Http:
                                    return "http";
                                case a.Json:
                                    return "json"
                            }
                            return ""
                        }, e.sdkErrorAreaString = function(e) {
                            switch (e) {
                                case u.BusinessEvent:
                                    return "business";
                                case u.ResourceEvent:
                                    return "resource";
                                case u.ProgressionEvent:
                                    return "progression";
                                case u.DesignEvent:
                                    return "design";
                                case u.ErrorEvent:
                                    return "error";
                                case u.InitHttp:
                                    return "init_http";
                                case u.EventsHttp:
                                    return "events_http";
                                case u.ProcessEvents:
                                    return "process_events";
                                case u.AddEventsToStore:
                                    return "add_events_to_store"
                            }
                            return ""
                        }, e.sdkErrorActionString = function(e) {
                            switch (e) {
                                case c.InvalidCurrency:
                                    return "invalid_currency";
                                case c.InvalidShortString:
                                    return "invalid_short_string";
                                case c.InvalidEventPartLength:
                                    return "invalid_event_part_length";
                                case c.InvalidEventPartCharacters:
                                    return "invalid_event_part_characters";
                                case c.InvalidStore:
                                    return "invalid_store";
                                case c.InvalidFlowType:
                                    return "invalid_flow_type";
                                case c.StringEmptyOrNull:
                                    return "string_empty_or_null";
                                case c.NotFoundInAvailableCurrencies:
                                    return "not_found_in_available_currencies";
                                case c.InvalidAmount:
                                    return "invalid_amount";
                                case c.NotFoundInAvailableItemTypes:
                                    return "not_found_in_available_item_types";
                                case c.WrongProgressionOrder:
                                    return "wrong_progression_order";
                                case c.InvalidEventIdLength:
                                    return "invalid_event_id_length";
                                case c.InvalidEventIdCharacters:
                                    return "invalid_event_id_characters";
                                case c.InvalidProgressionStatus:
                                    return "invalid_progression_status";
                                case c.InvalidSeverity:
                                    return "invalid_severity";
                                case c.InvalidLongString:
                                    return "invalid_long_string";
                                case c.DatabaseTooLarge:
                                    return "db_too_large";
                                case c.DatabaseOpenOrCreate:
                                    return "db_open_or_create";
                                case c.JsonError:
                                    return "json_error";
                                case c.FailHttpJsonDecode:
                                    return "fail_http_json_decode";
                                case c.FailHttpJsonEncode:
                                    return "fail_http_json_encode"
                            }
                            return ""
                        }, e.sdkErrorParameterString = function(e) {
                            switch (e) {
                                case d.Currency:
                                    return "currency";
                                case d.CartType:
                                    return "cart_type";
                                case d.ItemType:
                                    return "item_type";
                                case d.ItemId:
                                    return "item_id";
                                case d.Store:
                                    return "store";
                                case d.FlowType:
                                    return "flow_type";
                                case d.Amount:
                                    return "amount";
                                case d.Progression01:
                                    return "progression01";
                                case d.Progression02:
                                    return "progression02";
                                case d.Progression03:
                                    return "progression03";
                                case d.EventId:
                                    return "event_id";
                                case d.ProgressionStatus:
                                    return "progression_status";
                                case d.Severity:
                                    return "severity";
                                case d.Message:
                                    return "message"
                            }
                            return ""
                        }, e.instance = new e, e.MAX_ERROR_MESSAGE_LENGTH = 256, e
                    }(), t.GAHTTPApi = l
                }(s || (s = {})),
                function(e) {
                    var t, n, r, i, o, s, a, u, c, d, l;
                    t = e.events || (e.events = {}), n = e.store.GAStore, r = e.store.EGAStore, i = e.store.EGAStoreArgsOperator, o = e.state.GAState, s = e.logging.GALogger, a = e.utilities.GAUtilities, u = e.http.EGAHTTPApiResponse, c = e.http.GAHTTPApi, d = e.validators.GAValidator, l = function() {
                        function l() {}
                        return l.customEventFieldsErrorCallback = function(t, n) {
                            if (o.isEventSubmissionEnabled()) {
                                var r = new Date;
                                l.timestampMap[t] || (l.timestampMap[t] = r), l.countMap[t] || (l.countMap[t] = 0), (r.getTime() - l.timestampMap[t].getTime()) / 1e3 >= 3600 && (l.timestampMap[t] = r, l.countMap[t] = 0), l.countMap[t] >= l.MAX_ERROR_COUNT || e.threading.GAThreading.performTaskOnGAThread((function() {
                                    l.addErrorEvent(e.EGAErrorSeverity.Warning, n, null, !0), l.countMap[t] = l.countMap[t] + 1
                                }))
                            }
                        }, l.addSessionStartEvent = function() {
                            if (o.isEventSubmissionEnabled()) {
                                var e = {};
                                e.category = l.CategorySessionStart, o.incrementSessionNum(), n.setItem(o.getGameKey(), o.SessionNumKey, o.getSessionNum().toString()), l.addDimensionsToEvent(e);
                                var t = o.instance.currentGlobalCustomEventFields;
                                l.addCustomFieldsToEvent(e, o.validateAndCleanCustomFields(t, l.customEventFieldsErrorCallback)), l.addEventToStore(e), s.i("Add SESSION START event"), l.processEvents(l.CategorySessionStart, !1)
                            }
                        }, l.addSessionEndEvent = function() {
                            if (o.isEventSubmissionEnabled()) {
                                var e = o.getSessionStart(),
                                    t = o.getClientTsAdjusted() - e;
                                t < 0 && (s.w("Session length was calculated to be less then 0. Should not be possible. Resetting to 0."), t = 0);
                                var n = {};
                                n.category = l.CategorySessionEnd, n.length = t, l.addDimensionsToEvent(n);
                                var r = o.instance.currentGlobalCustomEventFields;
                                l.addCustomFieldsToEvent(n, o.validateAndCleanCustomFields(r, l.customEventFieldsErrorCallback)), l.addEventToStore(n), s.i("Add SESSION END event."), l.processEvents("", !1)
                            }
                        }, l.addBusinessEvent = function(e, t, r, i, a, u, f) {
                            if (void 0 === a && (a = null), o.isEventSubmissionEnabled()) {
                                var v = d.validateBusinessEvent(e, t, a, r, i);
                                if (null == v) {
                                    var g = {};
                                    o.incrementTransactionNum(), n.setItem(o.getGameKey(), o.TransactionNumKey, o.getTransactionNum().toString()), g.event_id = r + ":" + i, g.category = l.CategoryBusiness, g.currency = e, g.amount = t, g[o.TransactionNumKey] = o.getTransactionNum(), a && (g.cart_type = a), l.addDimensionsToEvent(g);
                                    var p = {};
                                    if (u && Object.keys(u).length > 0)
                                        for (var m in u) p[m] = u[m];
                                    else
                                        for (var m in o.instance.currentGlobalCustomEventFields) p[m] = o.instance.currentGlobalCustomEventFields[m];
                                    if (f && u && Object.keys(u).length > 0)
                                        for (var m in o.instance.currentGlobalCustomEventFields) p[m] || (p[m] = o.instance.currentGlobalCustomEventFields[m]);
                                    l.addCustomFieldsToEvent(g, o.validateAndCleanCustomFields(p, l.customEventFieldsErrorCallback)), s.i("Add BUSINESS event: {currency:" + e + ", amount:" + t + ", itemType:" + r + ", itemId:" + i + ", cartType:" + a + "}"), l.addEventToStore(g)
                                } else c.instance.sendSdkErrorEvent(v.category, v.area, v.action, v.parameter, v.reason, o.getGameKey(), o.getGameSecret())
                            }
                        }, l.addResourceEvent = function(t, n, r, i, a, u, f) {
                            if (o.isEventSubmissionEnabled()) {
                                var v = d.validateResourceEvent(t, n, r, i, a, o.getAvailableResourceCurrencies(), o.getAvailableResourceItemTypes());
                                if (null == v) {
                                    t === e.EGAResourceFlowType.Sink && (r *= -1);
                                    var g = {},
                                        p = l.resourceFlowTypeToString(t);
                                    g.event_id = p + ":" + n + ":" + i + ":" + a, g.category = l.CategoryResource, g.amount = r, l.addDimensionsToEvent(g);
                                    var m = {};
                                    if (u && Object.keys(u).length > 0)
                                        for (var h in u) m[h] = u[h];
                                    else
                                        for (var h in o.instance.currentGlobalCustomEventFields) m[h] = o.instance.currentGlobalCustomEventFields[h];
                                    if (f && u && Object.keys(u).length > 0)
                                        for (var h in o.instance.currentGlobalCustomEventFields) m[h] || (m[h] = o.instance.currentGlobalCustomEventFields[h]);
                                    l.addCustomFieldsToEvent(g, o.validateAndCleanCustomFields(m, l.customEventFieldsErrorCallback)), s.i("Add RESOURCE event: {currency:" + n + ", amount:" + r + ", itemType:" + i + ", itemId:" + a + "}"), l.addEventToStore(g)
                                } else c.instance.sendSdkErrorEvent(v.category, v.area, v.action, v.parameter, v.reason, o.getGameKey(), o.getGameSecret())
                            }
                        }, l.addProgressionEvent = function(t, n, r, i, a, u, f, v) {
                            if (o.isEventSubmissionEnabled()) {
                                var g = l.progressionStatusToString(t),
                                    p = d.validateProgressionEvent(t, n, r, i);
                                if (null == p) {
                                    var m, h = {};
                                    m = r ? i ? n + ":" + r + ":" + i : n + ":" + r : n, h.category = l.CategoryProgression, h.event_id = g + ":" + m;
                                    var E = 0;
                                    u && t != e.EGAProgressionStatus.Start && (h.score = Math.round(a)), t === e.EGAProgressionStatus.Fail && o.incrementProgressionTries(m), t === e.EGAProgressionStatus.Complete && (o.incrementProgressionTries(m), E = o.getProgressionTries(m), h.attempt_num = E, o.clearProgressionTries(m)), l.addDimensionsToEvent(h);
                                    var y = {};
                                    if (f && Object.keys(f).length > 0)
                                        for (var S in f) y[S] = f[S];
                                    else
                                        for (var S in o.instance.currentGlobalCustomEventFields) y[S] = o.instance.currentGlobalCustomEventFields[S];
                                    if (v && f && Object.keys(f).length > 0)
                                        for (var S in o.instance.currentGlobalCustomEventFields) y[S] || (y[S] = o.instance.currentGlobalCustomEventFields[S]);
                                    l.addCustomFieldsToEvent(h, o.validateAndCleanCustomFields(y, l.customEventFieldsErrorCallback)), s.i("Add PROGRESSION event: {status:" + g + ", progression01:" + n + ", progression02:" + r + ", progression03:" + i + ", score:" + a + ", attempt:" + E + "}"), l.addEventToStore(h)
                                } else c.instance.sendSdkErrorEvent(p.category, p.area, p.action, p.parameter, p.reason, o.getGameKey(), o.getGameSecret())
                            }
                        }, l.addDesignEvent = function(e, t, n, r, i) {
                            if (o.isEventSubmissionEnabled()) {
                                var a = d.validateDesignEvent(e);
                                if (null == a) {
                                    var u = {};
                                    u.category = l.CategoryDesign, u.event_id = e, n && (u.value = t), l.addDimensionsToEvent(u);
                                    var f = {};
                                    if (r && Object.keys(r).length > 0)
                                        for (var v in r) f[v] = r[v];
                                    else
                                        for (var v in o.instance.currentGlobalCustomEventFields) f[v] = o.instance.currentGlobalCustomEventFields[v];
                                    if (i && r && Object.keys(r).length > 0)
                                        for (var v in o.instance.currentGlobalCustomEventFields) f[v] || (f[v] = o.instance.currentGlobalCustomEventFields[v]);
                                    l.addCustomFieldsToEvent(u, o.validateAndCleanCustomFields(f, l.customEventFieldsErrorCallback)), s.i("Add DESIGN event: {eventId:" + e + ", value:" + t + "}"), l.addEventToStore(u)
                                } else c.instance.sendSdkErrorEvent(a.category, a.area, a.action, a.parameter, a.reason, o.getGameKey(), o.getGameSecret())
                            }
                        }, l.addErrorEvent = function(e, t, n, r, i) {
                            if (void 0 === i && (i = !1), o.isEventSubmissionEnabled()) {
                                var a = l.errorSeverityToString(e),
                                    u = d.validateErrorEvent(e, t);
                                if (null == u) {
                                    var f = {};
                                    if (f.category = l.CategoryError, f.severity = a, f.message = t, l.addDimensionsToEvent(f), !i) {
                                        var v = {};
                                        if (n && Object.keys(n).length > 0)
                                            for (var g in n) v[g] = n[g];
                                        else
                                            for (var g in o.instance.currentGlobalCustomEventFields) v[g] = o.instance.currentGlobalCustomEventFields[g];
                                        if (r && n && Object.keys(n).length > 0)
                                            for (var g in o.instance.currentGlobalCustomEventFields) v[g] || (v[g] = o.instance.currentGlobalCustomEventFields[g]);
                                        l.addCustomFieldsToEvent(f, o.validateAndCleanCustomFields(v, l.customEventFieldsErrorCallback))
                                    }
                                    s.i("Add ERROR event: {severity:" + a + ", message:" + t + "}"), l.addEventToStore(f)
                                } else c.instance.sendSdkErrorEvent(u.category, u.area, u.action, u.parameter, u.reason, o.getGameKey(), o.getGameSecret())
                            }
                        }, l.addAdEvent = function(t, n, r, i, a, u, f, v, g) {
                            if (o.isEventSubmissionEnabled()) {
                                var p = l.adActionToString(t),
                                    m = l.adTypeToString(n),
                                    h = l.adErrorToString(a),
                                    E = d.validateAdEvent(t, n, r, i);
                                if (null == E) {
                                    var y = {};
                                    y.category = l.CategoryAds, y.ad_sdk_name = r, y.ad_placement = i, y.ad_type = m, y.ad_action = p, t == e.EGAAdAction.FailedShow && h.length > 0 && (y.ad_fail_show_reason = h), !f || n != e.EGAAdType.RewardedVideo && n != e.EGAAdType.Video || (y.ad_duration = u), l.addDimensionsToEvent(y);
                                    var S = {};
                                    if (v && Object.keys(v).length > 0)
                                        for (var A in v) S[A] = v[A];
                                    else
                                        for (var A in o.instance.currentGlobalCustomEventFields) S[A] = o.instance.currentGlobalCustomEventFields[A];
                                    if (g && v && Object.keys(v).length > 0)
                                        for (var A in o.instance.currentGlobalCustomEventFields) S[A] || (S[A] = o.instance.currentGlobalCustomEventFields[A]);
                                    l.addCustomFieldsToEvent(y, o.validateAndCleanCustomFields(S, l.customEventFieldsErrorCallback)), s.i("Add AD event: {ad_sdk_name:" + r + ", ad_placement:" + i + ", ad_type:" + m + ", ad_action:" + p + (t == e.EGAAdAction.FailedShow && h.length > 0 ? ", ad_fail_show_reason:" + h : "") + (!f || n != e.EGAAdType.RewardedVideo && n != e.EGAAdType.Video ? "" : ", ad_duration:" + u) + "}"), l.addEventToStore(y)
                                } else c.instance.sendSdkErrorEvent(E.category, E.area, E.action, E.parameter, E.reason, o.getGameKey(), o.getGameSecret())
                            }
                        }, l.processEvents = function(e, u) {
                            if (o.isEventSubmissionEnabled()) try {
                                var f = a.createGuid();
                                u && (l.cleanupEvents(), l.fixMissingSessionEndEvents());
                                var v = [];
                                v.push(["status", i.Equal, "new"]);
                                var g = [];
                                g.push(["status", i.Equal, "new"]), e && (v.push(["category", i.Equal, e]), g.push(["category", i.Equal, e]));
                                var p = [];
                                p.push(["status", f]);
                                var m = n.select(r.Events, v);
                                if (!m || 0 == m.length) return s.i("Event queue: No events to send"), void l.updateSessionStore();
                                if (m.length > l.MaxEventCount) {
                                    if (!(m = n.select(r.Events, v, !0, l.MaxEventCount))) return;
                                    var h = m[m.length - 1].client_ts;
                                    if (v.push(["client_ts", i.LessOrEqual, h]), !(m = n.select(r.Events, v))) return;
                                    g.push(["client_ts", i.LessOrEqual, h])
                                }
                                if (s.i("Event queue: Sending " + m.length + " events."), !n.update(r.Events, p, g)) return;
                                for (var E = [], y = 0; y < m.length; ++y) {
                                    var S = m[y],
                                        A = JSON.parse(a.decode64(S.event));
                                    if (0 != A.length) {
                                        var b = A.client_ts;
                                        b && !d.validateClientTs(b) && delete A.client_ts, E.push(A)
                                    }
                                }
                                c.instance.sendEventsInArray(E, f, l.processEventsCallback)
                            } catch (e) {
                                s.e("Error during ProcessEvents(): " + e.stack), c.instance.sendSdkErrorEvent(t.EGASdkErrorCategory.Json, t.EGASdkErrorArea.ProcessEvents, t.EGASdkErrorAction.JsonError, t.EGASdkErrorParameter.Undefined, e.stack, o.getGameKey(), o.getGameSecret())
                            }
                        }, l.processEventsCallback = function(e, t, o, a) {
                            var c = [];
                            if (c.push(["status", i.Equal, o]), e === u.Ok) n.delete(r.Events, c), s.i("Event queue: " + a + " events sent.");
                            else if (e === u.NoResponse) {
                                var d = [];
                                d.push(["status", "new"]), s.w("Event queue: Failed to send events to collector - Retrying next time"), n.update(r.Events, d, c)
                            } else {
                                if (t) {
                                    var l, f = 0;
                                    for (var v in t) 0 == f && (l = t[v]), ++f;
                                    e === u.BadRequest && l.constructor === Array ? s.w("Event queue: " + a + " events sent. " + f + " events failed GA server validation.") : s.w("Event queue: Failed to send events.")
                                } else s.w("Event queue: Failed to send events.");
                                n.delete(r.Events, c)
                            }
                        }, l.cleanupEvents = function() {
                            n.update(r.Events, [
                                ["status", "new"]
                            ])
                        }, l.fixMissingSessionEndEvents = function() {
                            if (o.isEventSubmissionEnabled()) {
                                var e = [];
                                e.push(["session_id", i.NotEqual, o.getSessionId()]);
                                var t = n.select(r.Sessions, e);
                                if (t && 0 != t.length) {
                                    s.i(t.length + " session(s) located with missing session_end event.");
                                    for (var u = 0; u < t.length; ++u) {
                                        var c = JSON.parse(a.decode64(t[u].event)),
                                            d = c.client_ts - t[u].timestamp;
                                        d = Math.max(0, d), c.category = l.CategorySessionEnd, c.length = d, l.addEventToStore(c)
                                    }
                                }
                            }
                        }, l.addEventToStore = function(e) {
                            if (o.isEventSubmissionEnabled())
                                if (o.isInitialized()) try {
                                    if (n.isStoreTooLargeForEvents() && !a.stringMatch(e.category, /^(user|session_end|business)$/)) return s.w("Database too large. Event has been blocked."), void c.instance.sendSdkErrorEvent(t.EGASdkErrorCategory.Database, t.EGASdkErrorArea.AddEventsToStore, t.EGASdkErrorAction.DatabaseTooLarge, t.EGASdkErrorParameter.Undefined, "", o.getGameKey(), o.getGameSecret());
                                    var u = o.getEventAnnotations();
                                    for (var d in e) u[d] = e[d];
                                    var f = JSON.stringify(u);
                                    s.ii("Event added to queue: " + f);
                                    var v = {
                                        status: "new"
                                    };
                                    v.category = u.category, v.session_id = u.session_id, v.client_ts = u.client_ts, v.event = a.encode64(JSON.stringify(u)), n.insert(r.Events, v), e.category == l.CategorySessionEnd ? n.delete(r.Sessions, [
                                        ["session_id", i.Equal, u.session_id]
                                    ]) : l.updateSessionStore(), n.isStorageAvailable() && n.save(o.getGameKey())
                                } catch (d) {
                                    s.e("addEventToStore: error"), s.e(d.stack), c.instance.sendSdkErrorEvent(t.EGASdkErrorCategory.Database, t.EGASdkErrorArea.AddEventsToStore, t.EGASdkErrorAction.DatabaseTooLarge, t.EGASdkErrorParameter.Undefined, d.stack, o.getGameKey(), o.getGameSecret())
                                } else s.w("Could not add event: SDK is not initialized")
                        }, l.updateSessionStore = function() {
                            if (o.sessionIsStarted()) {
                                var e = {};
                                e.session_id = o.instance.sessionId, e.timestamp = o.getSessionStart();
                                var t = o.getEventAnnotations();
                                l.addDimensionsToEvent(t);
                                var i = o.instance.currentGlobalCustomEventFields;
                                l.addCustomFieldsToEvent(t, o.validateAndCleanCustomFields(i, l.customEventFieldsErrorCallback)), e.event = a.encode64(JSON.stringify(t)), n.insert(r.Sessions, e, !0, "session_id"), n.isStorageAvailable() && n.save(o.getGameKey())
                            }
                        }, l.addDimensionsToEvent = function(e) {
                            e && (o.getCurrentCustomDimension01() && (e.custom_01 = o.getCurrentCustomDimension01()), o.getCurrentCustomDimension02() && (e.custom_02 = o.getCurrentCustomDimension02()), o.getCurrentCustomDimension03() && (e.custom_03 = o.getCurrentCustomDimension03()))
                        }, l.addCustomFieldsToEvent = function(e, t) {
                            e && t && Object.keys(t).length > 0 && (e.custom_fields = t)
                        }, l.resourceFlowTypeToString = function(t) {
                            return t == e.EGAResourceFlowType.Source || t == e.EGAResourceFlowType[e.EGAResourceFlowType.Source] ? "Source" : t == e.EGAResourceFlowType.Sink || t == e.EGAResourceFlowType[e.EGAResourceFlowType.Sink] ? "Sink" : ""
                        }, l.progressionStatusToString = function(t) {
                            return t == e.EGAProgressionStatus.Start || t == e.EGAProgressionStatus[e.EGAProgressionStatus.Start] ? "Start" : t == e.EGAProgressionStatus.Complete || t == e.EGAProgressionStatus[e.EGAProgressionStatus.Complete] ? "Complete" : t == e.EGAProgressionStatus.Fail || t == e.EGAProgressionStatus[e.EGAProgressionStatus.Fail] ? "Fail" : ""
                        }, l.errorSeverityToString = function(t) {
                            return t == e.EGAErrorSeverity.Debug || t == e.EGAErrorSeverity[e.EGAErrorSeverity.Debug] ? "debug" : t == e.EGAErrorSeverity.Info || t == e.EGAErrorSeverity[e.EGAErrorSeverity.Info] ? "info" : t == e.EGAErrorSeverity.Warning || t == e.EGAErrorSeverity[e.EGAErrorSeverity.Warning] ? "warning" : t == e.EGAErrorSeverity.Error || t == e.EGAErrorSeverity[e.EGAErrorSeverity.Error] ? "error" : t == e.EGAErrorSeverity.Critical || t == e.EGAErrorSeverity[e.EGAErrorSeverity.Critical] ? "critical" : ""
                        }, l.adActionToString = function(t) {
                            return t == e.EGAAdAction.Clicked || t == e.EGAAdAction[e.EGAAdAction.Clicked] ? "clicked" : t == e.EGAAdAction.Show || t == e.EGAAdAction[e.EGAAdAction.Show] ? "show" : t == e.EGAAdAction.FailedShow || t == e.EGAAdAction[e.EGAAdAction.FailedShow] ? "failed_show" : t == e.EGAAdAction.RewardReceived || t == e.EGAAdAction[e.EGAAdAction.RewardReceived] ? "reward_received" : ""
                        }, l.adErrorToString = function(t) {
                            return t == e.EGAAdError.Unknown || t == e.EGAAdError[e.EGAAdError.Unknown] ? "unknown" : t == e.EGAAdError.Offline || t == e.EGAAdError[e.EGAAdError.Offline] ? "offline" : t == e.EGAAdError.NoFill || t == e.EGAAdError[e.EGAAdError.NoFill] ? "no_fill" : t == e.EGAAdError.InternalError || t == e.EGAAdError[e.EGAAdError.InternalError] ? "internal_error" : t == e.EGAAdError.InvalidRequest || t == e.EGAAdError[e.EGAAdError.InvalidRequest] ? "invalid_request" : t == e.EGAAdError.UnableToPrecache || t == e.EGAAdError[e.EGAAdError.UnableToPrecache] ? "unable_to_precache" : ""
                        }, l.adTypeToString = function(t) {
                            return t == e.EGAAdType.Video || t == e.EGAAdType[e.EGAAdType.Video] ? "video" : t == e.EGAAdType.RewardedVideo || t == e.EGAAdError[e.EGAAdType.RewardedVideo] ? "rewarded_video" : t == e.EGAAdType.Playable || t == e.EGAAdError[e.EGAAdType.Playable] ? "playable" : t == e.EGAAdType.Interstitial || t == e.EGAAdError[e.EGAAdType.Interstitial] ? "interstitial" : t == e.EGAAdType.OfferWall || t == e.EGAAdError[e.EGAAdType.OfferWall] ? "offer_wall" : t == e.EGAAdType.Banner || t == e.EGAAdError[e.EGAAdType.Banner] ? "banner" : ""
                        }, l.CategorySessionStart = "user", l.CategorySessionEnd = "session_end", l.CategoryDesign = "design", l.CategoryBusiness = "business", l.CategoryProgression = "progression", l.CategoryResource = "resource", l.CategoryError = "error", l.CategoryAds = "ads", l.MaxEventCount = 500, l.MAX_ERROR_COUNT = 10, l.countMap = {}, l.timestampMap = {}, l
                    }(), t.GAEvents = l
                }(s || (s = {})),
                function(e) {
                    var t, n, r, i, o;
                    t = e.threading || (e.threading = {}), n = e.logging.GALogger, r = e.state.GAState, i = e.events.GAEvents, o = function() {
                        function e() {
                            this.blocks = new t.PriorityQueue({
                                compare: function(e, t) {
                                    return e - t
                                }
                            }), this.id2TimedBlockMap = {}, e.startThread()
                        }
                        return e.createTimedBlock = function(e) {
                            void 0 === e && (e = 0);
                            var n = new Date;
                            return n.setSeconds(n.getSeconds() + e), new t.TimedBlock(n)
                        }, e.performTaskOnGAThread = function(n, r) {
                            void 0 === r && (r = 0);
                            var i = new Date;
                            i.setSeconds(i.getSeconds() + r);
                            var o = new t.TimedBlock(i);
                            o.block = n, e.instance.id2TimedBlockMap[o.id] = o, e.instance.addTimedBlock(o)
                        }, e.performTimedBlockOnGAThread = function(t) {
                            e.instance.id2TimedBlockMap[t.id] = t, e.instance.addTimedBlock(t)
                        }, e.scheduleTimer = function(n, r) {
                            var i = new Date;
                            i.setSeconds(i.getSeconds() + n);
                            var o = new t.TimedBlock(i);
                            return o.block = r, e.instance.id2TimedBlockMap[o.id] = o, e.instance.addTimedBlock(o), o.id
                        }, e.getTimedBlockById = function(t) {
                            return t in e.instance.id2TimedBlockMap ? e.instance.id2TimedBlockMap[t] : null
                        }, e.ensureEventQueueIsRunning = function() {
                            e.instance.keepRunning = !0, e.instance.isRunning || (e.instance.isRunning = !0, e.scheduleTimer(e.ProcessEventsIntervalInSeconds, e.processEventQueue))
                        }, e.endSessionAndStopQueue = function() {
                            r.isInitialized() && (n.i("Ending session."), e.stopEventQueue(), r.isEnabled() && r.sessionIsStarted() && (i.addSessionEndEvent(), r.instance.sessionStart = 0))
                        }, e.stopEventQueue = function() {
                            e.instance.keepRunning = !1
                        }, e.ignoreTimer = function(t) {
                            t in e.instance.id2TimedBlockMap && (e.instance.id2TimedBlockMap[t].ignore = !0)
                        }, e.setEventProcessInterval = function(t) {
                            t > 0 && (e.ProcessEventsIntervalInSeconds = t)
                        }, e.prototype.addTimedBlock = function(e) {
                            this.blocks.enqueue(e.deadline.getTime(), e)
                        }, e.run = function() {
                            clearTimeout(e.runTimeoutId);
                            try {
                                for (var t; t = e.getNextBlock();)
                                    if (!t.ignore)
                                        if (t.async) {
                                            if (!t.running) {
                                                t.running = !0, t.block();
                                                break
                                            }
                                        } else t.block();
                                return void(e.runTimeoutId = setTimeout(e.run, e.ThreadWaitTimeInMs))
                            } catch (e) {
                                n.e("Error on GA thread"), n.e(e.stack)
                            }
                        }, e.startThread = function() {
                            e.runTimeoutId = setTimeout(e.run, 0)
                        }, e.getNextBlock = function() {
                            var t = new Date;
                            return e.instance.blocks.hasItems() && e.instance.blocks.peek().deadline.getTime() <= t.getTime() ? e.instance.blocks.peek().async && e.instance.blocks.peek().running ? e.instance.blocks.peek() : e.instance.blocks.dequeue() : null
                        }, e.processEventQueue = function() {
                            i.processEvents("", !0), e.instance.keepRunning ? e.scheduleTimer(e.ProcessEventsIntervalInSeconds, e.processEventQueue) : e.instance.isRunning = !1
                        }, e.instance = new e, e.ThreadWaitTimeInMs = 1e3, e.ProcessEventsIntervalInSeconds = 8, e
                    }(), t.GAThreading = o
                }(s || (s = {})),
                function(e) {
                    var t = e.threading.GAThreading,
                        r = e.logging.GALogger,
                        i = e.store.GAStore,
                        o = e.state.GAState,
                        s = e.http.GAHTTPApi,
                        a = e.device.GADevice,
                        u = e.validators.GAValidator,
                        c = e.http.EGAHTTPApiResponse,
                        d = e.utilities.GAUtilities,
                        l = e.events.GAEvents,
                        f = function() {
                            function f() {}
                            return f.getGlobalObject = function() {
                                return "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== n.g ? n.g : void 0
                            }, f.init = function() {
                                if (a.touch(), f.methodMap.configureAvailableCustomDimensions01 = f.configureAvailableCustomDimensions01, f.methodMap.configureAvailableCustomDimensions02 = f.configureAvailableCustomDimensions02, f.methodMap.configureAvailableCustomDimensions03 = f.configureAvailableCustomDimensions03, f.methodMap.configureAvailableResourceCurrencies = f.configureAvailableResourceCurrencies, f.methodMap.configureAvailableResourceItemTypes = f.configureAvailableResourceItemTypes, f.methodMap.configureBuild = f.configureBuild, f.methodMap.configureSdkGameEngineVersion = f.configureSdkGameEngineVersion, f.methodMap.configureGameEngineVersion = f.configureGameEngineVersion, f.methodMap.configureUserId = f.configureUserId, f.methodMap.initialize = f.initialize, f.methodMap.addBusinessEvent = f.addBusinessEvent, f.methodMap.addResourceEvent = f.addResourceEvent, f.methodMap.addProgressionEvent = f.addProgressionEvent, f.methodMap.addDesignEvent = f.addDesignEvent, f.methodMap.addErrorEvent = f.addErrorEvent, f.methodMap.addAdEvent = f.addAdEvent, f.methodMap.setEnabledInfoLog = f.setEnabledInfoLog, f.methodMap.setEnabledVerboseLog = f.setEnabledVerboseLog, f.methodMap.setEnabledManualSessionHandling = f.setEnabledManualSessionHandling, f.methodMap.setEnabledEventSubmission = f.setEnabledEventSubmission, f.methodMap.setCustomDimension01 = f.setCustomDimension01, f.methodMap.setCustomDimension02 = f.setCustomDimension02, f.methodMap.setCustomDimension03 = f.setCustomDimension03, f.methodMap.setGlobalCustomEventFields = f.setGlobalCustomEventFields, f.methodMap.setEventProcessInterval = f.setEventProcessInterval, f.methodMap.startSession = f.startSession, f.methodMap.endSession = f.endSession, f.methodMap.onStop = f.onStop, f.methodMap.onResume = f.onResume, f.methodMap.addRemoteConfigsListener = f.addRemoteConfigsListener, f.methodMap.removeRemoteConfigsListener = f.removeRemoteConfigsListener, f.methodMap.getRemoteConfigsValueAsString = f.getRemoteConfigsValueAsString, f.methodMap.isRemoteConfigsReady = f.isRemoteConfigsReady, f.methodMap.getRemoteConfigsContentAsString = f.getRemoteConfigsContentAsString, f.methodMap.addOnBeforeUnloadListener = f.addOnBeforeUnloadListener, f.methodMap.removeOnBeforeUnloadListener = f.removeOnBeforeUnloadListener, void 0 !== f.getGlobalObject() && void 0 !== f.getGlobalObject().GameAnalytics && void 0 !== f.getGlobalObject().GameAnalytics.q) {
                                    var e = f.getGlobalObject().GameAnalytics.q;
                                    for (var n in e) f.gaCommand.apply(null, e[n])
                                }
                                window.addEventListener("beforeunload", (function(e) {
                                    o.instance.isUnloading = !0, o.notifyBeforeUnloadListeners(), t.endSessionAndStopQueue(), o.instance.isUnloading = !1
                                }))
                            }, f.gaCommand = function() {
                                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                                t.length > 0 && t[0] in e.GameAnalytics.methodMap && (t.length > 1 ? e.GameAnalytics.methodMap[t[0]].apply(null, Array.prototype.slice.call(t, 1)) : e.GameAnalytics.methodMap[t[0]]())
                            }, f.configureAvailableCustomDimensions01 = function(e) {
                                void 0 === e && (e = []), t.performTaskOnGAThread((function() {
                                    f.isSdkReady(!0, !1) ? r.w("Available custom dimensions must be set before SDK is initialized") : o.setAvailableCustomDimensions01(e)
                                }))
                            }, f.configureAvailableCustomDimensions02 = function(e) {
                                void 0 === e && (e = []), t.performTaskOnGAThread((function() {
                                    f.isSdkReady(!0, !1) ? r.w("Available custom dimensions must be set before SDK is initialized") : o.setAvailableCustomDimensions02(e)
                                }))
                            }, f.configureAvailableCustomDimensions03 = function(e) {
                                void 0 === e && (e = []), t.performTaskOnGAThread((function() {
                                    f.isSdkReady(!0, !1) ? r.w("Available custom dimensions must be set before SDK is initialized") : o.setAvailableCustomDimensions03(e)
                                }))
                            }, f.configureAvailableResourceCurrencies = function(e) {
                                void 0 === e && (e = []), t.performTaskOnGAThread((function() {
                                    f.isSdkReady(!0, !1) ? r.w("Available resource currencies must be set before SDK is initialized") : o.setAvailableResourceCurrencies(e)
                                }))
                            }, f.configureAvailableResourceItemTypes = function(e) {
                                void 0 === e && (e = []), t.performTaskOnGAThread((function() {
                                    f.isSdkReady(!0, !1) ? r.w("Available resource item types must be set before SDK is initialized") : o.setAvailableResourceItemTypes(e)
                                }))
                            }, f.configureBuild = function(e) {
                                void 0 === e && (e = ""), t.performTaskOnGAThread((function() {
                                    f.isSdkReady(!0, !1) ? r.w("Build version must be set before SDK is initialized.") : u.validateBuild(e) ? o.setBuild(e) : r.i("Validation fail - configure build: Cannot be null, empty or above 32 length. String: " + e)
                                }))
                            }, f.configureSdkGameEngineVersion = function(e) {
                                void 0 === e && (e = ""), t.performTaskOnGAThread((function() {
                                    f.isSdkReady(!0, !1) || (u.validateSdkWrapperVersion(e) ? a.sdkGameEngineVersion = e : r.i("Validation fail - configure sdk version: Sdk version not supported. String: " + e))
                                }))
                            }, f.configureGameEngineVersion = function(e) {
                                void 0 === e && (e = ""), t.performTaskOnGAThread((function() {
                                    f.isSdkReady(!0, !1) || (u.validateEngineVersion(e) ? a.gameEngineVersion = e : r.i("Validation fail - configure game engine version: Game engine version not supported. String: " + e))
                                }))
                            }, f.configureUserId = function(e) {
                                void 0 === e && (e = ""), t.performTaskOnGAThread((function() {
                                    f.isSdkReady(!0, !1) ? r.w("A custom user id must be set before SDK is initialized.") : u.validateUserId(e) ? o.setUserId(e) : r.i("Validation fail - configure user_id: Cannot be null, empty or above 64 length. Will use default user_id method. Used string: " + e)
                                }))
                            }, f.initialize = function(e, n) {
                                void 0 === e && (e = ""), void 0 === n && (n = ""), a.updateConnectionType();
                                var i = t.createTimedBlock();
                                i.async = !0, f.initTimedBlockId = i.id, i.block = function() {
                                    f.isSdkReady(!0, !1) ? r.w("SDK already initialized. Can only be called once.") : u.validateKeys(e, n) ? (o.setKeys(e, n), f.internalInitialize()) : r.w("SDK failed initialize. Game key or secret key is invalid. Can only contain characters A-z 0-9, gameKey is 32 length, gameSecret is 40 length. Failed keys - gameKey: " + e + ", secretKey: " + n)
                                }, t.performTimedBlockOnGAThread(i)
                            }, f.addBusinessEvent = function(e, n, r, i, s, u, c) {
                                if (void 0 === e && (e = ""), void 0 === n && (n = 0), void 0 === r && (r = ""), void 0 === i && (i = ""), void 0 === s && (s = ""), void 0 === u && (u = {}), void 0 === c && (c = !1), a.updateConnectionType(), o.instance.isUnloading) {
                                    if (!f.isSdkReady(!0, !0, "Could not add business event")) return;
                                    l.addBusinessEvent(e, n, r, i, s, u, c)
                                } else t.performTaskOnGAThread((function() {
                                    f.isSdkReady(!0, !0, "Could not add business event") && l.addBusinessEvent(e, n, r, i, s, u, c)
                                }))
                            }, f.addResourceEvent = function(n, r, i, s, u, c, d) {
                                if (void 0 === n && (n = e.EGAResourceFlowType.Undefined), void 0 === r && (r = ""), void 0 === i && (i = 0), void 0 === s && (s = ""), void 0 === u && (u = ""), void 0 === c && (c = {}), void 0 === d && (d = !1), a.updateConnectionType(), o.instance.isUnloading) {
                                    if (!f.isSdkReady(!0, !0, "Could not add resource event")) return;
                                    l.addResourceEvent(n, r, i, s, u, c, d)
                                } else t.performTaskOnGAThread((function() {
                                    f.isSdkReady(!0, !0, "Could not add resource event") && l.addResourceEvent(n, r, i, s, u, c, d)
                                }))
                            }, f.addProgressionEvent = function(n, r, i, s, u, c, d) {
                                if (void 0 === n && (n = e.EGAProgressionStatus.Undefined), void 0 === r && (r = ""), void 0 === i && (i = ""), void 0 === s && (s = ""), void 0 === c && (c = {}), void 0 === d && (d = !1), a.updateConnectionType(), o.instance.isUnloading) {
                                    if (!f.isSdkReady(!0, !0, "Could not add progression event")) return;
                                    var v = "number" == typeof u;
                                    l.addProgressionEvent(n, r, i, s, v ? u : 0, v, c, d)
                                } else t.performTaskOnGAThread((function() {
                                    if (f.isSdkReady(!0, !0, "Could not add progression event")) {
                                        var e = "number" == typeof u;
                                        l.addProgressionEvent(n, r, i, s, e ? u : 0, e, c, d)
                                    }
                                }))
                            }, f.addDesignEvent = function(e, n, r, i) {
                                if (void 0 === r && (r = {}), void 0 === i && (i = !1), a.updateConnectionType(), o.instance.isUnloading) {
                                    if (!f.isSdkReady(!0, !0, "Could not add design event")) return;
                                    var s = "number" == typeof n;
                                    l.addDesignEvent(e, s ? n : 0, s, r, i)
                                } else t.performTaskOnGAThread((function() {
                                    if (f.isSdkReady(!0, !0, "Could not add design event")) {
                                        var t = "number" == typeof n;
                                        l.addDesignEvent(e, t ? n : 0, t, r, i)
                                    }
                                }))
                            }, f.addErrorEvent = function(n, r, i, s) {
                                if (void 0 === n && (n = e.EGAErrorSeverity.Undefined), void 0 === r && (r = ""), void 0 === i && (i = {}), void 0 === s && (s = !1), a.updateConnectionType(), o.instance.isUnloading) {
                                    if (!f.isSdkReady(!0, !0, "Could not add error event")) return;
                                    l.addErrorEvent(n, r, i, s)
                                } else t.performTaskOnGAThread((function() {
                                    f.isSdkReady(!0, !0, "Could not add error event") && l.addErrorEvent(n, r, i, s)
                                }))
                            }, f.addAdEventWithNoAdReason = function(n, r, i, s, u, c, d) {
                                if (void 0 === n && (n = e.EGAAdAction.Undefined), void 0 === r && (r = e.EGAAdType.Undefined), void 0 === i && (i = ""), void 0 === s && (s = ""), void 0 === u && (u = e.EGAAdError.Undefined), void 0 === c && (c = {}), void 0 === d && (d = !1), a.updateConnectionType(), o.instance.isUnloading) {
                                    if (!f.isSdkReady(!0, !0, "Could not add ad event")) return;
                                    l.addAdEvent(n, r, i, s, u, 0, !1, c, d)
                                } else t.performTaskOnGAThread((function() {
                                    f.isSdkReady(!0, !0, "Could not add ad event") && l.addAdEvent(n, r, i, s, u, 0, !1, c, d)
                                }))
                            }, f.addAdEventWithDuration = function(n, r, i, s, u, c, d) {
                                if (void 0 === n && (n = e.EGAAdAction.Undefined), void 0 === r && (r = e.EGAAdType.Undefined), void 0 === i && (i = ""), void 0 === s && (s = ""), void 0 === u && (u = 0), void 0 === c && (c = {}), void 0 === d && (d = !1), a.updateConnectionType(), o.instance.isUnloading) {
                                    if (!f.isSdkReady(!0, !0, "Could not add ad event")) return;
                                    l.addAdEvent(n, r, i, s, e.EGAAdError.Undefined, u, !0, c, d)
                                } else t.performTaskOnGAThread((function() {
                                    f.isSdkReady(!0, !0, "Could not add ad event") && l.addAdEvent(n, r, i, s, e.EGAAdError.Undefined, u, !0, c, d)
                                }))
                            }, f.addAdEvent = function(n, r, i, s, u, c) {
                                if (void 0 === n && (n = e.EGAAdAction.Undefined), void 0 === r && (r = e.EGAAdType.Undefined), void 0 === i && (i = ""), void 0 === s && (s = ""), void 0 === u && (u = {}), void 0 === c && (c = !1), a.updateConnectionType(), o.instance.isUnloading) {
                                    if (!f.isSdkReady(!0, !0, "Could not add ad event")) return;
                                    l.addAdEvent(n, r, i, s, e.EGAAdError.Undefined, 0, !1, u, c)
                                } else t.performTaskOnGAThread((function() {
                                    f.isSdkReady(!0, !0, "Could not add ad event") && l.addAdEvent(n, r, i, s, e.EGAAdError.Undefined, 0, !1, u, c)
                                }))
                            }, f.setEnabledInfoLog = function(e) {
                                void 0 === e && (e = !1), t.performTaskOnGAThread((function() {
                                    e ? (r.setInfoLog(e), r.i("Info logging enabled")) : (r.i("Info logging disabled"), r.setInfoLog(e))
                                }))
                            }, f.setEnabledVerboseLog = function(e) {
                                void 0 === e && (e = !1), t.performTaskOnGAThread((function() {
                                    e ? (r.setVerboseLog(e), r.i("Verbose logging enabled")) : (r.i("Verbose logging disabled"), r.setVerboseLog(e))
                                }))
                            }, f.setEnabledManualSessionHandling = function(e) {
                                void 0 === e && (e = !1), t.performTaskOnGAThread((function() {
                                    o.setManualSessionHandling(e)
                                }))
                            }, f.setEnabledEventSubmission = function(e) {
                                void 0 === e && (e = !1), t.performTaskOnGAThread((function() {
                                    e ? (o.setEnabledEventSubmission(e), r.i("Event submission enabled")) : (r.i("Event submission disabled"), o.setEnabledEventSubmission(e))
                                }))
                            }, f.setCustomDimension01 = function(e) {
                                void 0 === e && (e = ""), t.performTaskOnGAThread((function() {
                                    u.validateDimension01(e, o.getAvailableCustomDimensions01()) ? o.setCustomDimension01(e) : r.w("Could not set custom01 dimension value to '" + e + "'. Value not found in available custom01 dimension values")
                                }))
                            }, f.setCustomDimension02 = function(e) {
                                void 0 === e && (e = ""), t.performTaskOnGAThread((function() {
                                    u.validateDimension02(e, o.getAvailableCustomDimensions02()) ? o.setCustomDimension02(e) : r.w("Could not set custom02 dimension value to '" + e + "'. Value not found in available custom02 dimension values")
                                }))
                            }, f.setCustomDimension03 = function(e) {
                                void 0 === e && (e = ""), t.performTaskOnGAThread((function() {
                                    u.validateDimension03(e, o.getAvailableCustomDimensions03()) ? o.setCustomDimension03(e) : r.w("Could not set custom03 dimension value to '" + e + "'. Value not found in available custom03 dimension values")
                                }))
                            }, f.setGlobalCustomEventFields = function(e) {
                                void 0 === e && (e = {}), t.performTaskOnGAThread((function() {
                                    r.i("Set global custom event fields: " + JSON.stringify(e)), o.instance.currentGlobalCustomEventFields = e
                                }))
                            }, f.setEventProcessInterval = function(e) {
                                t.performTaskOnGAThread((function() {
                                    t.setEventProcessInterval(e)
                                }))
                            }, f.startSession = function() {
                                if (o.isInitialized()) {
                                    var e = t.createTimedBlock();
                                    e.async = !0, f.initTimedBlockId = e.id, e.block = function() {
                                        o.isEnabled() && o.sessionIsStarted() && t.endSessionAndStopQueue(), f.resumeSessionAndStartQueue()
                                    }, t.performTimedBlockOnGAThread(e)
                                }
                            }, f.endSession = function() {
                                f.onStop()
                            }, f.onStop = function() {
                                t.performTaskOnGAThread((function() {
                                    try {
                                        t.endSessionAndStopQueue()
                                    } catch (e) {}
                                }))
                            }, f.onResume = function() {
                                var e = t.createTimedBlock();
                                e.async = !0, f.initTimedBlockId = e.id, e.block = function() {
                                    f.resumeSessionAndStartQueue()
                                }, t.performTimedBlockOnGAThread(e)
                            }, f.getRemoteConfigsValueAsString = function(e, t) {
                                return void 0 === t && (t = null), o.getConfigurationStringValue(e, t)
                            }, f.isRemoteConfigsReady = function() {
                                return o.isRemoteConfigsReady()
                            }, f.addRemoteConfigsListener = function(e) {
                                o.addRemoteConfigsListener(e)
                            }, f.removeRemoteConfigsListener = function(e) {
                                o.removeRemoteConfigsListener(e)
                            }, f.getRemoteConfigsContentAsString = function() {
                                return o.getRemoteConfigsContentAsString()
                            }, f.getABTestingId = function() {
                                return o.getABTestingId()
                            }, f.getABTestingVariantId = function() {
                                return o.getABTestingVariantId()
                            }, f.addOnBeforeUnloadListener = function(e) {
                                o.addOnBeforeUnloadListener(e)
                            }, f.removeOnBeforeUnloadListener = function(e) {
                                o.removeOnBeforeUnloadListener(e)
                            }, f.internalInitialize = function() {
                                o.ensurePersistedStates(), i.setItem(o.getGameKey(), o.DefaultUserIdKey, o.getDefaultId()), o.setInitialized(!0), f.newSession(), o.isEnabled() && t.ensureEventQueueIsRunning()
                            }, f.newSession = function() {
                                r.i("Starting a new session."), o.validateAndFixCurrentDimensions(), s.instance.requestInit(o.instance.configsHash, f.startNewSessionCallback)
                            }, f.startNewSessionCallback = function(e, n) {
                                if (e !== c.Ok && e !== c.Created || !n) e == c.Unauthorized ? (r.w("Initialize SDK failed - Unauthorized"), o.instance.initAuthorized = !1) : (e === c.NoResponse || e === c.RequestTimeout ? r.i("Init call (session start) failed - no response. Could be offline or timeout.") : e === c.BadResponse || e === c.JsonEncodeFailed || e === c.JsonDecodeFailed ? r.i("Init call (session start) failed - bad response. Could be bad response from proxy or GA servers.") : e !== c.BadRequest && e !== c.UnknownResponseCode || r.i("Init call (session start) failed - bad request or unknown response."), null == o.instance.sdkConfig ? null != o.instance.sdkConfigCached ? (r.i("Init call (session start) failed - using cached init values."), o.instance.sdkConfig = o.instance.sdkConfigCached) : (r.i("Init call (session start) failed - using default init values."), o.instance.sdkConfig = o.instance.sdkConfigDefault) : r.i("Init call (session start) failed - using cached init values."), o.instance.initAuthorized = !0);
                                else {
                                    var s = 0;
                                    if (n.server_ts) {
                                        var a = n.server_ts;
                                        s = o.calculateServerTimeOffset(a)
                                    }
                                    if (n.time_offset = s, e != c.Created) {
                                        var u = o.getSdkConfig();
                                        u.configs && (n.configs = u.configs), u.configs_hash && (n.configs_hash = u.configs_hash), u.ab_id && (n.ab_id = u.ab_id), u.ab_variant_id && (n.ab_variant_id = u.ab_variant_id)
                                    }
                                    o.instance.configsHash = n.configs_hash ? n.configs_hash : "", o.instance.abId = n.ab_id ? n.ab_id : "", o.instance.abVariantId = n.ab_variant_id ? n.ab_variant_id : "", i.setItem(o.getGameKey(), o.SdkConfigCachedKey, d.encode64(JSON.stringify(n))), o.instance.sdkConfigCached = n, o.instance.sdkConfig = n, o.instance.initAuthorized = !0
                                }
                                if (o.instance.clientServerTimeOffset = o.getSdkConfig().time_offset ? o.getSdkConfig().time_offset : 0, o.populateConfigurations(o.getSdkConfig()), !o.isEnabled()) return r.w("Could not start session: SDK is disabled."), void t.stopEventQueue();
                                t.ensureEventQueueIsRunning();
                                var v = d.createGuid();
                                o.instance.sessionId = v, o.instance.sessionStart = o.getClientTsAdjusted(), l.addSessionStartEvent();
                                var g = t.getTimedBlockById(f.initTimedBlockId);
                                null != g && (g.running = !1), f.initTimedBlockId = -1
                            }, f.resumeSessionAndStartQueue = function() {
                                o.isInitialized() && (r.i("Resuming session."), o.sessionIsStarted() || f.newSession())
                            }, f.isSdkReady = function(e, t, n) {
                                return void 0 === t && (t = !0), void 0 === n && (n = ""), n && (n += ": "), e && !o.isInitialized() ? (t && r.w(n + "SDK is not initialized"), !1) : e && !o.isEnabled() ? (t && r.w(n + "SDK is disabled"), !1) : !(e && !o.sessionIsStarted() && (t && r.w(n + "Session has not started yet"), 1))
                            }, f.initTimedBlockId = -1, f.methodMap = {}, f
                        }();
                    e.GameAnalytics = f
                }(s || (s = {})), s.GameAnalytics.init(), s.GameAnalytics.gaCommand, e.exports = s
        },
        8100: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Collector = void 0, t.Collector = class {
                constructor(e) {
                    this.emit = (...t) => {
                        e.emitCollecting(this, t)
                    }
                }
            }
        },
        5333: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CollectorArray = void 0;
            const r = n(8100);
            class i extends r.Collector {
                constructor() {
                    super(...arguments), this.result = []
                }
                handleResult(e) {
                    return this.result.push(e), !0
                }
                getResult() {
                    return this.result
                }
                reset() {
                    this.result.length = 0
                }
            }
            t.CollectorArray = i
        },
        8484: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CollectorLast = void 0;
            const r = n(8100);
            class i extends r.Collector {
                handleResult(e) {
                    return this.result = e, !0
                }
                getResult() {
                    return this.result
                }
                reset() {
                    delete this.result
                }
            }
            t.CollectorLast = i
        },
        688: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CollectorUntil0 = void 0;
            const r = n(8100);
            class i extends r.Collector {
                constructor() {
                    super(...arguments), this.result = !1
                }
                handleResult(e) {
                    return this.result = e, this.result
                }
                getResult() {
                    return this.result
                }
                reset() {
                    this.result = !1
                }
            }
            t.CollectorUntil0 = i
        },
        1764: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CollectorWhile0 = void 0;
            const r = n(8100);
            class i extends r.Collector {
                constructor() {
                    super(...arguments), this.result = !1
                }
                handleResult(e) {
                    return this.result = e, !this.result
                }
                getResult() {
                    return this.result
                }
                reset() {
                    this.result = !1
                }
            }
            t.CollectorWhile0 = i
        },
        7919: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Signal = void 0;
            const r = n(2513),
                i = n(470);
            t.Signal = class {
                constructor() {
                    this.head = new i.SignalLink, this.hasNewLinks = !1, this.emitDepth = 0, this.connectionsCount = 0
                }
                getConnectionsCount() {
                    return this.connectionsCount
                }
                hasConnections() {
                    return this.connectionsCount > 0
                }
                connect(e, t = 0) {
                    this.connectionsCount++;
                    const n = this.head.insert(e, t);
                    return this.emitDepth > 0 && (this.hasNewLinks = !0, n.newLink = !0), new r.SignalConnectionImpl(n, (() => this.decrementConnectionCount()))
                }
                decrementConnectionCount() {
                    this.connectionsCount--
                }
                disconnect(e) {
                    for (let t = this.head.next; t !== this.head; t = t.next)
                        if (t.callback === e) return this.decrementConnectionCount(), t.unlink(), !0;
                    return !1
                }
                disconnectAll() {
                    for (; this.head.next !== this.head;) this.head.next.unlink();
                    this.connectionsCount = 0
                }
                emit(...e) {
                    this.emitDepth++;
                    for (let t = this.head.next; t !== this.head; t = t.next) t.isEnabled() && t.callback && t.callback.apply(null, e);
                    this.emitDepth--, this.unsetNewLink()
                }
                emitCollecting(e, t) {
                    this.emitDepth++;
                    for (let n = this.head.next; n !== this.head; n = n.next)
                        if (n.isEnabled() && n.callback) {
                            const r = n.callback.apply(null, t);
                            if (!e.handleResult(r)) break
                        }
                    this.emitDepth--, this.unsetNewLink()
                }
                unsetNewLink() {
                    if (this.hasNewLinks && 0 === this.emitDepth) {
                        for (let e = this.head.next; e !== this.head; e = e.next) e.newLink = !1;
                        this.hasNewLinks = !1
                    }
                }
            }
        },
        2513: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SignalConnectionImpl = void 0, t.SignalConnectionImpl = class {
                constructor(e, t) {
                    this.link = e, this.parentCleanup = t
                }
                disconnect() {
                    return null !== this.link && (this.link.unlink(), this.link = null, this.parentCleanup(), this.parentCleanup = null, !0)
                }
                set enabled(e) {
                    this.link && this.link.setEnabled(e)
                }
                get enabled() {
                    return null !== this.link && this.link.isEnabled()
                }
            }
        },
        1669: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SignalConnections = void 0, t.SignalConnections = class {
                constructor() {
                    this.list = []
                }
                add(e) {
                    this.list.push(e)
                }
                disconnectAll() {
                    for (const e of this.list) e.disconnect();
                    this.list = []
                }
                getCount() {
                    return this.list.length
                }
                isEmpty() {
                    return 0 === this.list.length
                }
            }
        },
        470: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SignalLink = void 0;
            class n {
                constructor(e = null, t = null, n = 0) {
                    this.enabled = !0, this.newLink = !1, this.callback = null, this.prev = null != e ? e : this, this.next = null != t ? t : this, this.order = n
                }
                isEnabled() {
                    return this.enabled && !this.newLink
                }
                setEnabled(e) {
                    this.enabled = e
                }
                unlink() {
                    this.callback = null, this.next.prev = this.prev, this.prev.next = this.next
                }
                insert(e, t) {
                    let r = this.prev;
                    for (; r !== this && !(r.order <= t);) r = r.prev;
                    const i = new n(r, r.next, t);
                    return i.callback = e, r.next = i, i.next.prev = i, i
                }
            }
            t.SignalLink = n
        },
        4242: function(e, t, n) {
            "use strict";
            t.MZ = void 0;
            n(8100), n(5333), n(8484), n(688), n(1764);
            var r = n(7919);
            Object.defineProperty(t, "MZ", {
                enumerable: !0,
                get: function() {
                    return r.Signal
                }
            });
            n(1669)
        }
    }
]);