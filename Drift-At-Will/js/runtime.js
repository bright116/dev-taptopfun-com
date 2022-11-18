
function _typeof(t) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t;
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    })(t);
}

const regeneratorRuntime = function (t) {
    var e, r = Object.prototype, n = r.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", c = o.toStringTag || "@@toStringTag";
    function wrap(t, e, r, n) {
        var o = e && e.prototype instanceof Generator ? e : Generator, i = Object.create(o.prototype), a = new Context(n || []);
        return i._invoke = function (t, e, r) {
            var n = u;
            return function (o, i) {
                if (n === l) throw new Error("Generator is already running");
                if (n === s) {
                    if ("throw" === o) throw i;
                    return doneResult();
                }
                for (r.method = o, r.arg = i; ;) {
                    var a = r.delegate;
                    if (a) {
                        var c = maybeInvokeDelegate(a, r);
                        if (c) {
                            if (c === f) continue;
                            return c;
                        }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg; else if ("throw" === r.method) {
                        if (n === u) throw n = s, r.arg;
                        r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    n = l;
                    var y = tryCatch(t, e, r);
                    if ("normal" === y.type) {
                        if (n = r.done ? s : h, y.arg === f) continue;
                        return {
                            value: y.arg,
                            done: r.done
                        };
                    }
                    "throw" === y.type && (n = s, r.method = "throw", r.arg = y.arg);
                }
            };
        }(t, r, a), i;
    }
    function tryCatch(t, e, r) {
        try {
            return {
                type: "normal",
                arg: t.call(e, r)
            };
        } catch (t) {
            return {
                type: "throw",
                arg: t
            };
        }
    }
    t.wrap = wrap;
    var u = "suspendedStart", h = "suspendedYield", l = "executing", s = "completed", f = {};
    function Generator() { }
    function GeneratorFunction() { }
    function GeneratorFunctionPrototype() { }
    var y = {};
    y[i] = function () {
        return this;
    };
    var p = Object.getPrototypeOf, d = p && p(p(values([])));
    d && d !== r && n.call(d, i) && (y = d);
    var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(y);
    function defineIteratorMethods(t) {
        ["next", "throw", "return"].forEach(function (e) {
            t[e] = function (t) {
                return this._invoke(e, t);
            };
        });
    }
    function AsyncIterator(t, e) {
        var r;
        this._invoke = function (o, i) {
            function callInvokeWithMethodAndArg() {
                return new e(function (r, a) {
                    !function invoke(r, o, i, a) {
                        var c = tryCatch(t[r], t, o);
                        if ("throw" !== c.type) {
                            var u = c.arg, h = u.value;
                            return h && "object" === _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
                                invoke("next", t, i, a);
                            }, function (t) {
                                invoke("throw", t, i, a);
                            }) : e.resolve(h).then(function (t) {
                                u.value = t, i(u);
                            }, function (t) {
                                return invoke("throw", t, i, a);
                            });
                        }
                        a(c.arg);
                    }(o, i, r, a);
                });
            }
            return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        };
    }
    function maybeInvokeDelegate(t, r) {
        var n = t.iterator[r.method];
        if (n === e) {
            if (r.delegate = null, "throw" === r.method) {
                if (t.iterator.return && (r.method = "return", r.arg = e, maybeInvokeDelegate(t, r),
                    "throw" === r.method)) return f;
                r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method");
            }
            return f;
        }
        var o = tryCatch(n, t.iterator, r.arg);
        if ("throw" === o.type) return r.method = "throw", r.arg = o.arg, r.delegate = null,
            f;
        var i = o.arg;
        return i ? i.done ? (r[t.resultName] = i.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next",
            r.arg = e), r.delegate = null, f) : i : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"),
                r.delegate = null, f);
    }
    function pushTryEntry(t) {
        var e = {
            tryLoc: t[0]
        };
        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]),
            this.tryEntries.push(e);
    }
    function resetTryEntry(t) {
        var e = t.completion || {};
        e.type = "normal", delete e.arg, t.completion = e;
    }
    function Context(t) {
        this.tryEntries = [{
            tryLoc: "root"
        }], t.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(t) {
        if (t) {
            var r = t[i];
            if (r) return r.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
                var o = -1, a = function next() {
                    for (; ++o < t.length;) if (n.call(t, o)) return next.value = t[o], next.done = !1,
                        next;
                    return next.value = e, next.done = !0, next;
                };
                return a.next = a;
            }
        }
        return {
            next: doneResult
        };
    }
    function doneResult() {
        return {
            value: e,
            done: !0
        };
    }
    return GeneratorFunction.prototype = v.constructor = GeneratorFunctionPrototype,
        GeneratorFunctionPrototype.constructor = GeneratorFunction, GeneratorFunctionPrototype[c] = GeneratorFunction.displayName = "GeneratorFunction",
        t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
        }, t.mark = function (t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype,
                c in t || (t[c] = "GeneratorFunction")), t.prototype = Object.create(v), t;
        }, t.awrap = function (t) {
            return {
                __await: t
            };
        }, defineIteratorMethods(AsyncIterator.prototype), AsyncIterator.prototype[a] = function () {
            return this;
        }, t.AsyncIterator = AsyncIterator, t.async = function (e, r, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new AsyncIterator(wrap(e, r, n, o), i);
            return t.isGeneratorFunction(r) ? a : a.next().then(function (t) {
                return t.done ? t.value : a.next();
            });
        }, defineIteratorMethods(v), v[c] = "Generator", v[i] = function () {
            return this;
        }, v.toString = function () {
            return "[object Generator]";
        }, t.keys = function (t) {
            var e = [];
            for (var r in t) e.push(r);
            return e.reverse(), function next() {
                for (; e.length;) {
                    var r = e.pop();
                    if (r in t) return next.value = r, next.done = !1, next;
                }
                return next.done = !0, next;
            };
        }, t.values = values, Context.prototype = {
            constructor: Context,
            reset: function (t) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null,
                    this.method = "next", this.arg = e, this.tryEntries.forEach(resetTryEntry), !t) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e);
            },
            stop: function () {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
            },
            dispatchException: function (t) {
                if (this.done) throw t;
                var r = this;
                function handle(n, o) {
                    return a.type = "throw", a.arg = t, r.next = n, o && (r.method = "next", r.arg = e),
                        !!o;
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                    var i = this.tryEntries[o], a = i.completion;
                    if ("root" === i.tryLoc) return handle("end");
                    if (i.tryLoc <= this.prev) {
                        var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc");
                        if (c && u) {
                            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                        } else if (c) {
                            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                        } else {
                            if (!u) throw new Error("try statement without catch or finally");
                            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                        }
                    }
                }
            },
            abrupt: function (t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var o = this.tryEntries[r];
                    if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                        var i = o;
                        break;
                    }
                }
                i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                var a = i ? i.completion : {};
                return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc,
                    f) : this.complete(a);
            },
            complete: function (t, e) {
                if ("throw" === t.type) throw t.arg;
                return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                    this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e),
                    f;
            },
            finish: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var r = this.tryEntries[e];
                    if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r),
                        f;
                }
            },
            catch: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var r = this.tryEntries[e];
                    if (r.tryLoc === t) {
                        var n = r.completion;
                        if ("throw" === n.type) {
                            var o = n.arg;
                            resetTryEntry(r);
                        }
                        return o;
                    }
                }
                throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, r, n) {
                return this.delegate = {
                    iterator: values(t),
                    resultName: r,
                    nextLoc: n
                }, "next" === this.method && (this.arg = e), f;
            }
        }, t;
}("object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) ? module.exports : {});