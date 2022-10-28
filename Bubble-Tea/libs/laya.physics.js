var COMPILED = !0,
    goog = goog || {};

goog.global = window, goog.isDef = function(o) {
        return void 0 !== o;
    }, goog.exportPath_ = function(o, t, e) {
        o = o.split("."), e = e || goog.global, o[0] in e || !e.execScript || e.execScript("var " + o[0]);
        for (var r; o.length && (r = o.shift());) !o.length && goog.isDef(t) ? e[r] = t : e = e[r] ? e[r] : e[r] = {};
    }, goog.define = function(o, t) {
        var e = t;
        COMPILED || (goog.global.CLOSURE_UNCOMPILED_DEFINES && Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_UNCOMPILED_DEFINES, o) ? e = goog.global.CLOSURE_UNCOMPILED_DEFINES[o] : goog.global.CLOSURE_DEFINES && Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_DEFINES, o) && (e = goog.global.CLOSURE_DEFINES[o])),
            goog.exportPath_(o, e);
    }, goog.DEBUG = !1, goog.LOCALE = "en", goog.TRUSTED_SITE = !0, goog.STRICT_MODE_COMPATIBLE = !1,
    goog.DISALLOW_TEST_ONLY_CODE = COMPILED && !goog.DEBUG, goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = !1,
    goog.provide = function(o) {
        if (!COMPILED && goog.isProvided_(o)) throw Error('Namespace "' + o + '" already declared.');
        goog.constructNamespace_(o);
    }, goog.constructNamespace_ = function(o, t) {
        if (!COMPILED) {
            delete goog.implicitNamespaces_[o];
            for (var e = o;
                (e = e.substring(0, e.lastIndexOf("."))) && !goog.getObjectByName(e);) goog.implicitNamespaces_[e] = !0;
        }
        goog.exportPath_(o, t);
    }, goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/, goog.module = function(o) {
        if (!goog.isString(o) || !o || -1 == o.search(goog.VALID_MODULE_RE_)) throw Error("Invalid module identifier");
        if (!goog.isInModuleLoader_()) throw Error("Module " + o + " has been loaded incorrectly.");
        if (goog.moduleLoaderState_.moduleName) throw Error("goog.module may only be called once per module.");
        if (goog.moduleLoaderState_.moduleName = o, !COMPILED) {
            if (goog.isProvided_(o)) throw Error('Namespace "' + o + '" already declared.');
            delete goog.implicitNamespaces_[o];
        }
    }, goog.module.get = function(o) {
        return goog.module.getInternal_(o);
    }, goog.module.getInternal_ = function(o) {
        if (!COMPILED) return goog.isProvided_(o) ? o in goog.loadedModules_ ? goog.loadedModules_[o] : goog.getObjectByName(o) : null;
    }, goog.moduleLoaderState_ = null, goog.isInModuleLoader_ = function() {
        return null != goog.moduleLoaderState_;
    }, goog.module.declareLegacyNamespace = function() {
        if (!COMPILED && !goog.isInModuleLoader_()) throw Error("goog.module.declareLegacyNamespace must be called from within a goog.module");
        if (!COMPILED && !goog.moduleLoaderState_.moduleName) throw Error("goog.module must be called prior to goog.module.declareLegacyNamespace.");
        goog.moduleLoaderState_.declareLegacyNamespace = !0;
    }, goog.setTestOnly = function(o) {
        if (goog.DISALLOW_TEST_ONLY_CODE) throw o = o || "", Error("Importing test-only code into non-debug environment" + (o ? ": " + o : "."));
    }, goog.forwardDeclare = function(o) {}, COMPILED || (goog.isProvided_ = function(o) {
        return o in goog.loadedModules_ || !goog.implicitNamespaces_[o] && goog.isDefAndNotNull(goog.getObjectByName(o));
    }, goog.implicitNamespaces_ = {
        "goog.module": !0
    }), goog.getObjectByName = function(o, t) {
        for (var e, r = o.split("."), i = t || goog.global; e = r.shift();) {
            if (!goog.isDefAndNotNull(i[e])) return null;
            i = i[e];
        }
        return i;
    }, goog.globalize = function(o, t) {
        var e, r = t || goog.global;
        for (e in o) r[e] = o[e];
    }, goog.addDependency = function(o, t, e, r) {
        if (goog.DEPENDENCIES_ENABLED) {
            var i;
            o = o.replace(/\\/g, "/");
            for (var b = goog.dependencies_, n = 0; i = t[n]; n++) b.nameToPath[i] = o, b.pathIsModule[o] = !!r;
            for (r = 0; t = e[r]; r++) o in b.requires || (b.requires[o] = {}), b.requires[o][t] = !0;
        }
    }, goog.ENABLE_DEBUG_LOADER = !0, goog.logToConsole_ = function(o) {
        goog.global.console && goog.global.console.error(o);
    }, goog.require = function(o) {
        if (!COMPILED) {
            if (goog.ENABLE_DEBUG_LOADER && goog.IS_OLD_IE_ && goog.maybeProcessDeferredDep_(o),
                goog.isProvided_(o)) return goog.isInModuleLoader_() ? goog.module.getInternal_(o) : null;
            if (goog.ENABLE_DEBUG_LOADER) {
                var t = goog.getPathFromDeps_(o);
                if (t) return goog.writeScripts_(t), null;
            }
            throw o = "goog.require could not find: " + o, goog.logToConsole_(o), Error(o);
        }
    }, goog.basePath = "", goog.nullFunction = function() {}, goog.abstractMethod = function() {
        throw Error("unimplemented abstract method");
    }, goog.addSingletonGetter = function(o) {
        o.getInstance = function() {
            return o.instance_ ? o.instance_ : (goog.DEBUG && (goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = o),
                o.instance_ = new o());
        };
    }, goog.instantiatedSingletons_ = [], goog.LOAD_MODULE_USING_EVAL = !0, goog.SEAL_MODULE_EXPORTS = goog.DEBUG,
    goog.loadedModules_ = {}, goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER,
    goog.DEPENDENCIES_ENABLED && (goog.dependencies_ = {
            pathIsModule: {},
            nameToPath: {},
            requires: {},
            visited: {},
            written: {},
            deferred: {}
        }, goog.inHtmlDocument_ = function() {
            var o = goog.global.document;
            return null != o && "write" in o;
        }, goog.findBasePath_ = function() {
            if (goog.isDef(goog.global.CLOSURE_BASE_PATH)) goog.basePath = goog.global.CLOSURE_BASE_PATH;
            else if (goog.inHtmlDocument_())
                for (var o = goog.global.document.getElementsByTagName("SCRIPT"), t = o.length - 1; 0 <= t; --t) {
                    var e = o[t].src,
                        r = -1 == (r = e.lastIndexOf("?")) ? e.length : r;
                    if ("base.js" == e.substr(r - 7, 7)) {
                        goog.basePath = e.substr(0, r - 7);
                        break;
                    }
                }
        }, goog.importScript_ = function(o, t) {
            (goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_)(o, t) && (goog.dependencies_.written[o] = !0);
        }, goog.IS_OLD_IE_ = !(goog.global.atob || !goog.global.document || !goog.global.document.all),
        goog.importModule_ = function(o) {
            goog.importScript_("", 'goog.retrieveAndExecModule_("' + o + '");') && (goog.dependencies_.written[o] = !0);
        }, goog.queuedModules_ = [], goog.wrapModule_ = function(o, t) {
            return goog.LOAD_MODULE_USING_EVAL && goog.isDef(goog.global.JSON) ? "goog.loadModule(" + goog.global.JSON.stringify(t + "\n//# sourceURL=" + o + "\n") + ");" : 'goog.loadModule(function(exports) {"use strict";' + t + "\n;return exports});\n//# sourceURL=" + o + "\n";
        }, goog.loadQueuedModules_ = function() {
            var o = goog.queuedModules_.length;
            if (0 < o) {
                var t = goog.queuedModules_;
                goog.queuedModules_ = [];
                for (var e = 0; e < o; e++) goog.maybeProcessDeferredPath_(t[e]);
            }
        }, goog.maybeProcessDeferredDep_ = function(o) {
            goog.isDeferredModule_(o) && goog.allDepsAreAvailable_(o) && (o = goog.getPathFromDeps_(o),
                goog.maybeProcessDeferredPath_(goog.basePath + o));
        }, goog.isDeferredModule_ = function(o) {
            return !(!(o = goog.getPathFromDeps_(o)) || !goog.dependencies_.pathIsModule[o]) && goog.basePath + o in goog.dependencies_.deferred;
        }, goog.allDepsAreAvailable_ = function(o) {
            if ((o = goog.getPathFromDeps_(o)) && o in goog.dependencies_.requires)
                for (var t in goog.dependencies_.requires[o])
                    if (!goog.isProvided_(t) && !goog.isDeferredModule_(t)) return !1;
            return !0;
        }, goog.maybeProcessDeferredPath_ = function(o) {
            if (o in goog.dependencies_.deferred) {
                var t = goog.dependencies_.deferred[o];
                delete goog.dependencies_.deferred[o], goog.globalEval(t);
            }
        }, goog.loadModuleFromUrl = function(o) {
            goog.retrieveAndExecModule_(o);
        }, goog.loadModule = function(o) {
            var t = goog.moduleLoaderState_;
            try {
                var e;
                if (goog.moduleLoaderState_ = {
                        moduleName: void 0,
                        declareLegacyNamespace: !1
                    }, goog.isFunction(o)) e = o.call(goog.global, {});
                else {
                    if (!goog.isString(o)) throw Error("Invalid module definition");
                    e = goog.loadModuleFromSource_.call(goog.global, o);
                }
                var r = goog.moduleLoaderState_.moduleName;
                if (!goog.isString(r) || !r) throw Error('Invalid module name "' + r + '"');
                goog.moduleLoaderState_.declareLegacyNamespace ? goog.constructNamespace_(r, e) : goog.SEAL_MODULE_EXPORTS && Object.seal && Object.seal(e),
                    goog.loadedModules_[r] = e;
            } finally {
                goog.moduleLoaderState_ = t;
            }
        }, goog.loadModuleFromSource_ = function(a) {
            return eval(a), {};
        }, goog.writeScriptSrcNode_ = function(o) {
            goog.global.document.write('<script type="text/javascript" src="' + o + '"><\/script>');
        }, goog.appendScriptSrcNode_ = function(o) {
            var t = goog.global.document,
                e = t.createElement("script");
            e.type = "text/javascript", e.src = o, e.defer = !1, e.async = !1, t.head.appendChild(e);
        }, goog.writeScriptTag_ = function(o, t) {
            if (goog.inHtmlDocument_()) {
                var e = goog.global.document;
                if (!goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING && "complete" == e.readyState) {
                    if (/\bdeps.js$/.test(o)) return !1;
                    throw Error('Cannot write "' + o + '" after document load');
                }
                var r = goog.IS_OLD_IE_;
                return void 0 === t ? r ? (r = " onreadystatechange='goog.onScriptLoad_(this, " + ++goog.lastNonModuleScriptIndex_ + ")' ",
                    e.write('<script type="text/javascript" src="' + o + '"' + r + "><\/script>")) : goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING ? goog.appendScriptSrcNode_(o) : goog.writeScriptSrcNode_(o) : e.write('<script type="text/javascript">' + t + "<\/script>"), !0;
            }
            return !1;
        }, goog.lastNonModuleScriptIndex_ = 0, goog.onScriptLoad_ = function(o, t) {
            return "complete" == o.readyState && goog.lastNonModuleScriptIndex_ == t && goog.loadQueuedModules_(), !0;
        }, goog.writeScripts_ = function(o) {
            var t = [],
                e = {},
                r = goog.dependencies_;
            for (function b(o) {
                    if (!(o in r.written || o in r.visited)) {
                        if (r.visited[o] = !0, o in r.requires)
                            for (var i in r.requires[o])
                                if (!goog.isProvided_(i)) {
                                    if (!(i in r.nameToPath)) throw Error("Undefined nameToPath for " + i);
                                    b(r.nameToPath[i]);
                                }
                        o in e || (e[o] = !0, t.push(o));
                    }
                }(o), o = 0; o < t.length; o++) {
                var i = t[o];
                goog.dependencies_.written[i] = !0;
            }
            var n = goog.moduleLoaderState_;
            for (goog.moduleLoaderState_ = null, o = 0; o < t.length; o++) {
                if (!(i = t[o])) throw goog.moduleLoaderState_ = n, Error("Undefined script input");
                r.pathIsModule[i] ? goog.importModule_(goog.basePath + i) : goog.importScript_(goog.basePath + i);
            }
            goog.moduleLoaderState_ = n;
        }, goog.getPathFromDeps_ = function(o) {
            return o in goog.dependencies_.nameToPath ? goog.dependencies_.nameToPath[o] : null;
        }, goog.findBasePath_(), goog.global.CLOSURE_NO_DEPS || goog.importScript_(goog.basePath + "deps.js")),
    goog.normalizePath_ = function(o) {
        o = o.split("/");
        for (var t = 0; t < o.length;) "." == o[t] ? o.splice(t, 1) : t && ".." == o[t] && o[t - 1] && ".." != o[t - 1] ? o.splice(--t, 2) : t++;
        return o.join("/");
    }, goog.loadFileSync_ = function(o) {
        if (goog.global.CLOSURE_LOAD_FILE_SYNC) return goog.global.CLOSURE_LOAD_FILE_SYNC(o);
        var t = new goog.global.XMLHttpRequest();
        return t.open("get", o, !1), t.send(), t.responseText;
    }, goog.retrieveAndExecModule_ = function(o) {
        if (!COMPILED) {
            var t = o;
            o = goog.normalizePath_(o);
            var e = goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_,
                r = goog.loadFileSync_(o);
            if (null == r) throw Error("load of " + o + "failed");
            r = goog.wrapModule_(o, r), goog.IS_OLD_IE_ ? (goog.dependencies_.deferred[t] = r,
                goog.queuedModules_.push(t)) : e(o, r);
        }
    }, goog.typeOf = function(o) {
        var t = typeof o;
        if ("object" == t) {
            if (!o) return "null";
            if (o instanceof Array) return "array";
            if (o instanceof Object) return t;
            var e = Object.prototype.toString.call(o);
            if ("[object Window]" == e) return "object";
            if ("[object Array]" == e || "number" == typeof o.length && void 0 !== o.splice && void 0 !== o.propertyIsEnumerable && !o.propertyIsEnumerable("splice")) return "array";
            if ("[object Function]" == e || void 0 !== o.call && void 0 !== o.propertyIsEnumerable && !o.propertyIsEnumerable("call")) return "function";
        } else if ("function" == t && void 0 === o.call) return "object";
        return t;
    }, goog.isNull = function(o) {
        return null === o;
    }, goog.isDefAndNotNull = function(o) {
        return null != o;
    }, goog.isArray = function(o) {
        return "array" == goog.typeOf(o);
    }, goog.isArrayLike = function(o) {
        var t = goog.typeOf(o);
        return "array" == t || "object" == t && "number" == typeof o.length;
    }, goog.isDateLike = function(o) {
        return goog.isObject(o) && "function" == typeof o.getFullYear;
    }, goog.isString = function(o) {
        return "string" == typeof o;
    }, goog.isBoolean = function(o) {
        return "boolean" == typeof o;
    }, goog.isNumber = function(o) {
        return "number" == typeof o;
    }, goog.isFunction = function(o) {
        return "function" == goog.typeOf(o);
    }, goog.isObject = function(o) {
        var t = typeof o;
        return "object" == t && null != o || "function" == t;
    }, goog.getUid = function(o) {
        return o[goog.UID_PROPERTY_] || (o[goog.UID_PROPERTY_] = ++goog.uidCounter_);
    }, goog.hasUid = function(o) {
        return !!o[goog.UID_PROPERTY_];
    }, goog.removeUid = function(o) {
        null !== o && "removeAttribute" in o && o.removeAttribute(goog.UID_PROPERTY_);
        try {
            delete o[goog.UID_PROPERTY_];
        } catch (o) {}
    }, goog.UID_PROPERTY_ = "closure_uid_" + (1e9 * Math.random() >>> 0), goog.uidCounter_ = 0,
    goog.getHashCode = goog.getUid, goog.removeHashCode = goog.removeUid, goog.cloneObject = function(o) {
        if ("object" == (e = goog.typeOf(o)) || "array" == e) {
            if (o.clone) return o.clone();
            var t, e = "array" == e ? [] : {};
            for (t in o) e[t] = goog.cloneObject(o[t]);
            return e;
        }
        return o;
    }, goog.bindNative_ = function(o, t, e) {
        return o.call.apply(o.bind, arguments);
    }, goog.bindJs_ = function(o, t, e) {
        if (!o) throw Error();
        if (2 < arguments.length) {
            var r = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                return Array.prototype.unshift.apply(e, r), o.apply(t, e);
            };
        }
        return function() {
            return o.apply(t, arguments);
        };
    }, goog.bind = function(o, t, e) {
        return Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? goog.bind = goog.bindNative_ : goog.bind = goog.bindJs_,
            goog.bind.apply(null, arguments);
    }, goog.partial = function(o, t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return function() {
            var t = e.slice();
            return t.push.apply(t, arguments), o.apply(this, t);
        };
    }, goog.mixin = function(o, t) {
        for (var e in t) o[e] = t[e];
    }, goog.now = goog.TRUSTED_SITE && Date.now || function() {
        return +new Date();
    }, goog.globalEval = function(o) {
        if (goog.global.execScript) goog.global.execScript(o, "JavaScript");
        else {
            if (!goog.global.eval) throw Error("goog.globalEval not available");
            if (null == goog.evalWorksForGlobals_)
                if (goog.global.eval("var _evalTest_ = 1;"),
                    void 0 !== goog.global._evalTest_) {
                    try {
                        delete goog.global._evalTest_;
                    } catch (o) {}
                    goog.evalWorksForGlobals_ = !0;
                } else goog.evalWorksForGlobals_ = !1;
            if (goog.evalWorksForGlobals_) goog.global.eval(o);
            else {
                var t = goog.global.document,
                    e = t.createElement("SCRIPT");
                e.type = "text/javascript", e.defer = !1, e.appendChild(t.createTextNode(o)), t.body.appendChild(e),
                    t.body.removeChild(e);
            }
        }
    }, goog.evalWorksForGlobals_ = null, goog.getCssName = function(o, t) {
        var e = function(o) {
                return goog.cssNameMapping_[o] || o;
            },
            r = function(o) {
                o = o.split("-");
                for (var t = [], r = 0; r < o.length; r++) t.push(e(o[r]));
                return t.join("-");
            };
        r = goog.cssNameMapping_ ? "BY_WHOLE" == goog.cssNameMappingStyle_ ? e : r : function(o) {
            return o;
        };
        return t ? o + "-" + r(t) : r(o);
    }, goog.setCssNameMapping = function(o, t) {
        goog.cssNameMapping_ = o, goog.cssNameMappingStyle_ = t;
    }, !COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING && (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING),
    goog.getMsg = function(o, t) {
        return t && (o = o.replace(/\{\$([^}]+)}/g, function(o, e) {
            return null != t && e in t ? t[e] : o;
        })), o;
    }, goog.getMsgWithFallback = function(o, t) {
        return o;
    }, goog.exportSymbol = function(o, t, e) {
        goog.exportPath_(o, t, e);
    }, goog.exportProperty = function(o, t, e) {
        o[t] = e;
    }, goog.inherits = function(o, t) {
        function c() {}
        c.prototype = t.prototype, o.superClass_ = t.prototype, o.prototype = new c(), o.prototype.constructor = o,
            o.base = function(o, e, r) {
                for (var i = Array(arguments.length - 2), b = 2; b < arguments.length; b++) i[b - 2] = arguments[b];
                return t.prototype[e].apply(o, i);
            };
    }, goog.base = function(o, t, e) {
        var r = arguments.callee.caller;
        if (goog.STRICT_MODE_COMPATIBLE || goog.DEBUG && !r) throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
        if (r.superClass_) {
            for (var i = Array(arguments.length - 1), b = 1; b < arguments.length; b++) i[b - 1] = arguments[b];
            return r.superClass_.constructor.apply(o, i);
        }
        for (i = Array(arguments.length - 2), b = 2; b < arguments.length; b++) i[b - 2] = arguments[b];
        b = !1;
        for (var n = o.constructor; n; n = n.superClass_ && n.superClass_.constructor)
            if (n.prototype[t] === r) b = !0;
            else if (b) return n.prototype[t].apply(o, i);
        if (o[t] === r) return o.constructor.prototype[t].apply(o, i);
        throw Error("goog.base called from a method of one name to a method of a different name");
    }, goog.scope = function(o) {
        o.call(goog.global);
    }, COMPILED || (goog.global.COMPILED = COMPILED), goog.defineClass = function(o, t) {
        var e = t.constructor,
            r = t.statics;
        return e && e != Object.prototype.constructor || (e = function() {
                throw Error("cannot instantiate an interface (no constructor defined).");
            }), e = goog.defineClass.createSealingConstructor_(e, o), o && goog.inherits(e, o),
            delete t.constructor, delete t.statics, goog.defineClass.applyProperties_(e.prototype, t),
            null != r && (r instanceof Function ? r(e) : goog.defineClass.applyProperties_(e, r)),
            e;
    }, goog.defineClass.SEAL_CLASS_INSTANCES = goog.DEBUG, goog.defineClass.createSealingConstructor_ = function(o, t) {
        if (goog.defineClass.SEAL_CLASS_INSTANCES && Object.seal instanceof Function) {
            if (t && t.prototype && t.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_]) return o;
            var e = function() {
                var t = o.apply(this, arguments) || this;
                return t[goog.UID_PROPERTY_] = t[goog.UID_PROPERTY_], this.constructor === e && Object.seal(t),
                    t;
            };
            return e;
        }
        return o;
    }, goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
    goog.defineClass.applyProperties_ = function(o, t) {
        for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (o[e] = t[e]);
        for (var r = 0; r < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length; r++) e = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[r],
            Object.prototype.hasOwnProperty.call(t, e) && (o[e] = t[e]);
    }, goog.tagUnsealableClass = function(o) {
        !COMPILED && goog.defineClass.SEAL_CLASS_INSTANCES && (o.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_] = !0);
    }, goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_ = "goog_defineClass_legacy_unsealable";

var box2d = {
    b2Settings: {}
};

Object.defineProperty || (Object.defineProperty = function(o, t, e) {
        return Object.__defineGetter__ && ("get" in e ? o.__defineGetter__(t, e.get) : "value" in e && o.__defineGetter__(t, e.value)),
            Object.__defineSetter__ && ("set" in e ? o.__defineSetter__(t, e.set) : "value" in e && o.__defineSetter__(t, e.value)),
            o;
    }), box2d.DEBUG = !0, goog.exportSymbol("box2d.DEBUG", box2d.DEBUG), box2d.ENABLE_ASSERTS = box2d.DEBUG,
    goog.exportSymbol("box2d.ENABLE_ASSERTS", box2d.ENABLE_ASSERTS), box2d.b2Assert = function(o, t, e) {
        if (box2d.DEBUG && !o) throw Error();
    }, goog.exportSymbol("box2d.b2Assert", box2d.b2Assert), box2d.b2_maxFloat = 1e37,
    goog.exportSymbol("box2d.b2_maxFloat", box2d.b2_maxFloat), box2d.b2_epsilon = 1e-5,
    goog.exportSymbol("box2d.b2_epsilon", box2d.b2_epsilon), box2d.b2_epsilon_sq = box2d.b2_epsilon * box2d.b2_epsilon,
    goog.exportSymbol("box2d.b2_epsilon_sq", box2d.b2_epsilon_sq), box2d.b2_pi = Math.PI,
    goog.exportSymbol("box2d.b2_pi", box2d.b2_pi), box2d.b2_maxManifoldPoints = 2, goog.exportSymbol("box2d.b2_maxManifoldPoints", box2d.b2_maxManifoldPoints),
    box2d.b2_maxPolygonVertices = 8, goog.exportSymbol("box2d.b2_maxPolygonVertices", box2d.b2_maxPolygonVertices),
    box2d.b2_aabbExtension = .1, goog.exportSymbol("box2d.b2_aabbExtension", box2d.b2_aabbExtension),
    box2d.b2_aabbMultiplier = 2, goog.exportSymbol("box2d.b2_aabbMultiplier", box2d.b2_aabbMultiplier),
    box2d.b2_linearSlop = .008, goog.exportSymbol("box2d.b2_linearSlop", box2d.b2_linearSlop),
    box2d.b2_angularSlop = 2 / 180 * box2d.b2_pi, goog.exportSymbol("box2d.b2_angularSlop", box2d.b2_angularSlop),
    box2d.b2_polygonRadius = 2 * box2d.b2_linearSlop, goog.exportSymbol("box2d.b2_polygonRadius", box2d.b2_polygonRadius),
    box2d.b2_maxSubSteps = 8, goog.exportSymbol("box2d.b2_maxSubSteps", box2d.b2_maxSubSteps),
    box2d.b2_maxTOIContacts = 32, goog.exportSymbol("box2d.b2_maxTOIContacts", box2d.b2_maxTOIContacts),
    box2d.b2_velocityThreshold = 1, goog.exportSymbol("box2d.b2_velocityThreshold", box2d.b2_velocityThreshold),
    box2d.b2_maxLinearCorrection = .2, goog.exportSymbol("box2d.b2_maxLinearCorrection", box2d.b2_maxLinearCorrection),
    box2d.b2_maxAngularCorrection = 8 / 180 * box2d.b2_pi, goog.exportSymbol("box2d.b2_maxAngularCorrection", box2d.b2_maxAngularCorrection),
    box2d.b2_maxTranslation = 2, goog.exportSymbol("box2d.b2_maxTranslation", box2d.b2_maxTranslation),
    box2d.b2_maxTranslationSquared = box2d.b2_maxTranslation * box2d.b2_maxTranslation,
    goog.exportSymbol("box2d.b2_maxTranslationSquared", box2d.b2_maxTranslationSquared),
    box2d.b2_maxRotation = .5 * box2d.b2_pi, goog.exportSymbol("box2d.b2_maxRotation", box2d.b2_maxRotation),
    box2d.b2_maxRotationSquared = box2d.b2_maxRotation * box2d.b2_maxRotation, goog.exportSymbol("box2d.b2_maxRotationSquared", box2d.b2_maxRotationSquared),
    box2d.b2_baumgarte = .2, goog.exportSymbol("box2d.b2_baumgarte", box2d.b2_baumgarte),
    box2d.b2_toiBaumgarte = .75, goog.exportSymbol("box2d.b2_toiBaumgarte", box2d.b2_toiBaumgarte),
    box2d.b2_invalidParticleIndex = -1, goog.exportSymbol("box2d.b2_invalidParticleIndex", box2d.b2_invalidParticleIndex),
    box2d.b2_maxParticleIndex = 2147483647, goog.exportSymbol("box2d.b2_maxParticleIndex", box2d.b2_maxParticleIndex),
    box2d.b2_particleStride = .75, goog.exportSymbol("box2d.b2_particleStride", box2d.b2_particleStride),
    box2d.b2_minParticleWeight = 1, goog.exportSymbol("box2d.b2_minParticleWeight", box2d.b2_minParticleWeight),
    box2d.b2_maxParticlePressure = .25, goog.exportSymbol("box2d.b2_maxParticlePressure", box2d.b2_maxParticlePressure),
    box2d.b2_maxParticleForce = .5, goog.exportSymbol("box2d.b2_maxParticleForce", box2d.b2_maxParticleForce),
    box2d.b2_maxTriadDistance = 2, goog.exportSymbol("box2d.b2_maxTriadDistance", box2d.b2_maxTriadDistance),
    box2d.b2_maxTriadDistanceSquared = box2d.b2_maxTriadDistance * box2d.b2_maxTriadDistance,
    goog.exportSymbol("box2d.b2_maxTriadDistanceSquared", box2d.b2_maxTriadDistanceSquared),
    box2d.b2_minParticleSystemBufferCapacity = 256, goog.exportSymbol("box2d.b2_minParticleSystemBufferCapacity", box2d.b2_minParticleSystemBufferCapacity),
    box2d.b2_barrierCollisionTime = 2.5, goog.exportSymbol("box2d.b2_barrierCollisionTime", box2d.b2_barrierCollisionTime),
    box2d.b2_timeToSleep = .5, goog.exportSymbol("box2d.b2_timeToSleep", box2d.b2_timeToSleep),
    box2d.b2_linearSleepTolerance = .01, goog.exportSymbol("box2d.b2_linearSleepTolerance", box2d.b2_linearSleepTolerance),
    box2d.b2_angularSleepTolerance = 2 / 180 * box2d.b2_pi, goog.exportSymbol("box2d.b2_angularSleepTolerance", box2d.b2_angularSleepTolerance),
    box2d.b2Alloc = function(o) {
        return null;
    }, goog.exportSymbol("box2d.b2Alloc", box2d.b2Alloc), box2d.b2Free = function(o) {},
    goog.exportSymbol("box2d.b2Free", box2d.b2Free), box2d.b2Log = function(o) {
        goog.global.console.log.apply(null, arguments);
    }, goog.exportSymbol("box2d.b2Log", box2d.b2Log), box2d.b2Version = function(o, t, e) {
        this.major = o || 0, this.minor = t || 0, this.revision = e || 0;
    }, goog.exportSymbol("box2d.b2Version", box2d.b2Version), box2d.b2Version.prototype.major = 0,
    goog.exportProperty(box2d.b2Version.prototype, "major", box2d.b2Version.prototype.major),
    box2d.b2Version.prototype.minor = 0, goog.exportProperty(box2d.b2Version.prototype, "minor", box2d.b2Version.prototype.minor),
    box2d.b2Version.prototype.revision = 0, goog.exportProperty(box2d.b2Version.prototype, "revision", box2d.b2Version.prototype.revision),
    box2d.b2Version.prototype.toString = function() {
        return this.major + "." + this.minor + "." + this.revision;
    }, goog.exportProperty(box2d.b2Version.prototype, "toString", box2d.b2Version.prototype.toString),
    box2d.b2_version = new box2d.b2Version(2, 3, 2), goog.exportSymbol("box2d.b2_version", box2d.b2_version),
    box2d.b2_changelist = 313, goog.exportSymbol("box2d.b2_changelist", box2d.b2_changelist),
    box2d.b2ParseInt = function(o) {
        return parseInt(o, 10);
    }, goog.exportSymbol("box2d.b2ParseInt", box2d.b2ParseInt), box2d.b2ParseUInt = function(o) {
        return box2d.b2Abs(parseInt(o, 10));
    }, goog.exportSymbol("box2d.b2ParseUInt", box2d.b2ParseUInt), box2d.b2MakeArray = function(o, t) {
        o = "number" == typeof o ? o : 0;
        var e = [];
        if ("function" == typeof t)
            for (var r = 0; r < o; ++r) e.push(t(r));
        else
            for (r = 0; r < o; ++r) e.push(null);
        return e;
    }, goog.exportSymbol("box2d.b2MakeArray", box2d.b2MakeArray), box2d.b2MakeNumberArray = function(o) {
        return box2d.b2MakeArray(o, function(o) {
            return 0;
        });
    }, goog.exportSymbol("box2d.b2MakeNumberArray", box2d.b2MakeNumberArray), box2d.b2Color = function(o, t, e, r) {
        this.r = o, this.g = t, this.b = e, this.a = "number" == typeof r ? r : 1;
    }, goog.exportSymbol("box2d.b2Color", box2d.b2Color), box2d.b2Color.prototype.r = .5,
    goog.exportProperty(box2d.b2Color.prototype, "r", box2d.b2Color.prototype.r), box2d.b2Color.prototype.g = .5,
    goog.exportProperty(box2d.b2Color.prototype, "g", box2d.b2Color.prototype.g), box2d.b2Color.prototype.b = .5,
    goog.exportProperty(box2d.b2Color.prototype, "b", box2d.b2Color.prototype.b), box2d.b2Color.prototype.a = 1,
    goog.exportProperty(box2d.b2Color.prototype, "a", box2d.b2Color.prototype.a), box2d.b2Color.prototype.SetRGB = function(o, t, e) {
        return this.r = o, this.g = t, this.b = e, this;
    }, goog.exportProperty(box2d.b2Color.prototype, "SetRGB", box2d.b2Color.prototype.SetRGB),
    box2d.b2Color.prototype.MakeStyleString = function(o) {
        return box2d.b2Color.MakeStyleString(Math.round(Math.max(0, Math.min(255, 255 * this.r))), Math.round(Math.max(0, Math.min(255, 255 * this.g))), Math.round(Math.max(0, Math.min(255, 255 * this.b))), void 0 === o ? this.a : Math.max(0, Math.min(1, o)));
    }, goog.exportProperty(box2d.b2Color.prototype, "MakeStyleString", box2d.b2Color.prototype.MakeStyleString),
    box2d.b2Color.MakeStyleString = function(o, t, e, r) {
        return 1 > r ? "rgba(" + o + "," + t + "," + e + "," + r + ")" : "rgb(" + o + "," + t + "," + e + ")";
    }, goog.exportProperty(box2d.b2Color, "MakeStyleString", box2d.b2Color.MakeStyleString),
    box2d.b2Color.RED = new box2d.b2Color(1, 0, 0), goog.exportProperty(box2d.b2Color, "RED", box2d.b2Color.RED),
    box2d.b2Color.GREEN = new box2d.b2Color(0, 1, 0), goog.exportProperty(box2d.b2Color, "GREEN", box2d.b2Color.GREEN),
    box2d.b2Color.BLUE = new box2d.b2Color(0, 0, 1), goog.exportProperty(box2d.b2Color, "BLUE", box2d.b2Color.BLUE),
    box2d.b2DrawFlags = {
        e_none: 0,
        e_shapeBit: 1,
        e_jointBit: 2,
        e_aabbBit: 4,
        e_pairBit: 8,
        e_centerOfMassBit: 16,
        e_controllerBit: 32,
        e_particleBit: 64,
        e_all: 65535
    }, goog.exportSymbol("box2d.b2DrawFlags", box2d.b2DrawFlags), goog.exportProperty(box2d.b2DrawFlags, "e_none", box2d.b2DrawFlags.e_none),
    goog.exportProperty(box2d.b2DrawFlags, "e_shapeBit", box2d.b2DrawFlags.e_shapeBit),
    goog.exportProperty(box2d.b2DrawFlags, "e_jointBit", box2d.b2DrawFlags.e_jointBit),
    goog.exportProperty(box2d.b2DrawFlags, "e_aabbBit", box2d.b2DrawFlags.e_aabbBit),
    goog.exportProperty(box2d.b2DrawFlags, "e_pairBit", box2d.b2DrawFlags.e_pairBit),
    goog.exportProperty(box2d.b2DrawFlags, "e_centerOfMassBit", box2d.b2DrawFlags.e_centerOfMassBit),
    goog.exportProperty(box2d.b2DrawFlags, "e_controllerBit", box2d.b2DrawFlags.e_controllerBit),
    goog.exportProperty(box2d.b2DrawFlags, "e_particleBit", box2d.b2DrawFlags.e_particleBit),
    goog.exportProperty(box2d.b2DrawFlags, "e_all", box2d.b2DrawFlags.e_all), box2d.b2Draw = function() {},
    goog.exportSymbol("box2d.b2Draw", box2d.b2Draw), box2d.b2Draw.prototype.m_drawFlags = box2d.b2DrawFlags.e_none,
    goog.exportProperty(box2d.b2Draw.prototype, "m_drawFlags", box2d.b2Draw.prototype.m_drawFlags),
    box2d.b2Draw.prototype.SetFlags = function(o) {
        this.m_drawFlags = o;
    }, goog.exportProperty(box2d.b2Draw.prototype, "SetFlags", box2d.b2Draw.prototype.SetFlags),
    box2d.b2Draw.prototype.GetFlags = function() {
        return this.m_drawFlags;
    }, goog.exportProperty(box2d.b2Draw.prototype, "GetFlags", box2d.b2Draw.prototype.GetFlags),
    box2d.b2Draw.prototype.AppendFlags = function(o) {
        this.m_drawFlags |= o;
    }, goog.exportProperty(box2d.b2Draw.prototype, "AppendFlags", box2d.b2Draw.prototype.AppendFlags),
    box2d.b2Draw.prototype.ClearFlags = function(o) {
        this.m_drawFlags &= ~o;
    }, goog.exportProperty(box2d.b2Draw.prototype, "ClearFlags", box2d.b2Draw.prototype.ClearFlags),
    box2d.b2Draw.prototype.PushTransform = function(o) {}, goog.exportProperty(box2d.b2Draw.prototype, "PushTransform", box2d.b2Draw.prototype.PushTransform),
    box2d.b2Draw.prototype.PopTransform = function(o) {}, goog.exportProperty(box2d.b2Draw.prototype, "PopTransform", box2d.b2Draw.prototype.PopTransform),
    box2d.b2Draw.prototype.DrawPolygon = function(o, t, e) {}, goog.exportProperty(box2d.b2Draw.prototype, "DrawPolygon", box2d.b2Draw.prototype.DrawPolygon),
    box2d.b2Draw.prototype.DrawSolidPolygon = function(o, t, e) {}, goog.exportProperty(box2d.b2Draw.prototype, "DrawSolidPolygon", box2d.b2Draw.prototype.DrawSolidPolygon),
    box2d.b2Draw.prototype.DrawCircle = function(o, t, e) {}, goog.exportProperty(box2d.b2Draw.prototype, "DrawCircle", box2d.b2Draw.prototype.DrawCircle),
    box2d.b2Draw.prototype.DrawSolidCircle = function(o, t, e, r) {}, goog.exportProperty(box2d.b2Draw.prototype, "DrawSolidCircle", box2d.b2Draw.prototype.DrawSolidCircle),
    box2d.b2Draw.prototype.DrawParticles = function(o, t, e, r) {}, goog.exportProperty(box2d.b2Draw.prototype, "DrawParticles", box2d.b2Draw.prototype.DrawParticles),
    box2d.b2Draw.prototype.DrawSegment = function(o, t, e) {}, goog.exportProperty(box2d.b2Draw.prototype, "DrawSegment", box2d.b2Draw.prototype.DrawSegment),
    box2d.b2Draw.prototype.DrawTransform = function(o) {}, goog.exportProperty(box2d.b2Draw.prototype, "DrawTransform", box2d.b2Draw.prototype.DrawTransform),
    box2d.b2GrowableStack = function(o) {
        this.m_stack = Array(o);
    }, goog.exportSymbol("box2d.b2GrowableStack", box2d.b2GrowableStack), box2d.b2GrowableStack.prototype.m_stack = null,
    goog.exportProperty(box2d.b2GrowableStack.prototype, "m_stack", box2d.b2GrowableStack.prototype.m_stack),
    box2d.b2GrowableStack.prototype.m_count = 0, goog.exportProperty(box2d.b2GrowableStack.prototype, "m_count", box2d.b2GrowableStack.prototype.m_count),
    box2d.b2GrowableStack.prototype.Reset = function() {
        return this.m_count = 0, this;
    }, goog.exportProperty(box2d.b2GrowableStack.prototype, "Reset", box2d.b2GrowableStack.prototype.Reset),
    box2d.b2GrowableStack.prototype.Push = function(o) {
        this.m_stack[this.m_count] = o, ++this.m_count;
    }, goog.exportProperty(box2d.b2GrowableStack.prototype, "Push", box2d.b2GrowableStack.prototype.Push),
    box2d.b2GrowableStack.prototype.Pop = function() {
        box2d.ENABLE_ASSERTS && box2d.b2Assert(0 < this.m_count), --this.m_count;
        var o = this.m_stack[this.m_count];
        return this.m_stack[this.m_count] = null, o;
    }, goog.exportProperty(box2d.b2GrowableStack.prototype, "Pop", box2d.b2GrowableStack.prototype.Pop),
    box2d.b2GrowableStack.prototype.GetCount = function() {
        return this.m_count;
    }, goog.exportProperty(box2d.b2GrowableStack.prototype, "GetCount", box2d.b2GrowableStack.prototype.GetCount),
    box2d.b2Math = {}, box2d.b2_pi_over_180 = box2d.b2_pi / 180, goog.exportSymbol("box2d.b2_pi_over_180", box2d.b2_pi_over_180),
    box2d.b2_180_over_pi = 180 / box2d.b2_pi, goog.exportSymbol("box2d.b2_180_over_pi", box2d.b2_180_over_pi),
    box2d.b2_two_pi = 2 * box2d.b2_pi, goog.exportSymbol("box2d.b2_two_pi", box2d.b2_two_pi),
    box2d.b2Abs = Math.abs, goog.exportSymbol("box2d.b2Abs", box2d.b2Abs), box2d.b2Min = Math.min,
    goog.exportSymbol("box2d.b2Min", box2d.b2Min), box2d.b2Max = Math.max, goog.exportSymbol("box2d.b2Max", box2d.b2Max),
    box2d.b2Clamp = function(o, t, e) {
        return Math.min(Math.max(o, t), e);
    }, goog.exportSymbol("box2d.b2Clamp", box2d.b2Clamp), box2d.b2Wrap = function(o, t, e) {
        return t < e ? o < t ? e - (t - o) % (e - t) : t + (o - t) % (e - t) : t === e ? t : o;
    }, goog.exportSymbol("box2d.b2Wrap", box2d.b2Wrap), box2d.b2WrapAngle = function(o) {
        return 0 > o ? (o - box2d.b2_pi) % box2d.b2_two_pi + box2d.b2_pi : (o + box2d.b2_pi) % box2d.b2_two_pi - box2d.b2_pi;
    }, goog.exportSymbol("box2d.b2WrapAngle", box2d.b2WrapAngle), box2d.b2Swap = function(o, t) {
        box2d.ENABLE_ASSERTS && box2d.b2Assert(!1);
        var e = o[0];
        o[0] = t[0], t[0] = e;
    }, goog.exportSymbol("box2d.b2Swap", box2d.b2Swap), box2d.b2IsValid = function(o) {
        return isFinite(o);
    }, goog.exportSymbol("box2d.b2IsValid", box2d.b2IsValid), box2d.b2Sq = function(o) {
        return o * o;
    }, goog.exportSymbol("box2d.b2Sq", box2d.b2Sq), box2d.b2InvSqrt = function(o) {
        return 1 / Math.sqrt(o);
    }, goog.exportSymbol("box2d.b2InvSqrt", box2d.b2InvSqrt), box2d.b2Sqrt = function(o) {
        return Math.sqrt(o);
    }, goog.exportSymbol("box2d.b2Sqrt", box2d.b2Sqrt), box2d.b2Pow = function(o, t) {
        return Math.pow(o, t);
    }, goog.exportSymbol("box2d.b2Pow", box2d.b2Pow), box2d.b2DegToRad = function(o) {
        return o * box2d.b2_pi_over_180;
    }, goog.exportSymbol("box2d.b2DegToRad", box2d.b2DegToRad), box2d.b2RadToDeg = function(o) {
        return o * box2d.b2_180_over_pi;
    }, goog.exportSymbol("box2d.b2RadToDeg", box2d.b2RadToDeg), box2d.b2Cos = function(o) {
        return Math.cos(o);
    }, goog.exportSymbol("box2d.b2Cos", box2d.b2Cos), box2d.b2Sin = function(o) {
        return Math.sin(o);
    }, goog.exportSymbol("box2d.b2Sin", box2d.b2Sin), box2d.b2Acos = function(o) {
        return Math.acos(o);
    }, goog.exportSymbol("box2d.b2Acos", box2d.b2Acos), box2d.b2Asin = function(o) {
        return Math.asin(o);
    }, goog.exportSymbol("box2d.b2Asin", box2d.b2Asin), box2d.b2Atan2 = function(o, t) {
        return Math.atan2(o, t);
    }, goog.exportSymbol("box2d.b2Atan2", box2d.b2Atan2), box2d.b2NextPowerOfTwo = function(o) {
        return o |= o >> 1 & 2147483647, o |= o >> 2 & 1073741823, o |= o >> 4 & 268435455,
            1 + ((o |= o >> 8 & 16777215) | o >> 16 & 65535);
    }, goog.exportSymbol("box2d.b2NextPowerOfTwo", box2d.b2NextPowerOfTwo), box2d.b2IsPowerOfTwo = function(o) {
        return 0 < o && 0 == (o & o - 1);
    }, goog.exportSymbol("box2d.b2IsPowerOfTwo", box2d.b2IsPowerOfTwo), box2d.b2Random = function() {
        return 2 * Math.random() - 1;
    }, goog.exportSymbol("box2d.b2Random", box2d.b2Random), box2d.b2RandomRange = function(o, t) {
        return (t - o) * Math.random() + o;
    }, goog.exportSymbol("box2d.b2RandomRange", box2d.b2RandomRange), box2d.b2Vec2 = function(o, t) {
        this.x = o || 0, this.y = t || 0;
    }, goog.exportSymbol("box2d.b2Vec2", box2d.b2Vec2), box2d.b2Vec2.prototype.x = 0,
    goog.exportProperty(box2d.b2Vec2.prototype, "x", box2d.b2Vec2.prototype.x), box2d.b2Vec2.prototype.y = 0,
    goog.exportProperty(box2d.b2Vec2.prototype, "y", box2d.b2Vec2.prototype.y), box2d.b2Vec2_zero = new box2d.b2Vec2(),
    goog.exportSymbol("box2d.b2Vec2_zero", box2d.b2Vec2_zero), box2d.b2Vec2.ZERO = new box2d.b2Vec2(),
    goog.exportProperty(box2d.b2Vec2, "ZERO", box2d.b2Vec2.ZERO), box2d.b2Vec2.UNITX = new box2d.b2Vec2(1, 0),
    goog.exportProperty(box2d.b2Vec2, "UNITX", box2d.b2Vec2.UNITX), box2d.b2Vec2.UNITY = new box2d.b2Vec2(0, 1),
    goog.exportProperty(box2d.b2Vec2, "UNITY", box2d.b2Vec2.UNITY), box2d.b2Vec2.s_t0 = new box2d.b2Vec2(),
    goog.exportProperty(box2d.b2Vec2, "s_t0", box2d.b2Vec2.s_t0), box2d.b2Vec2.s_t1 = new box2d.b2Vec2(),
    goog.exportProperty(box2d.b2Vec2, "s_t1", box2d.b2Vec2.s_t1), box2d.b2Vec2.s_t2 = new box2d.b2Vec2(),
    goog.exportProperty(box2d.b2Vec2, "s_t2", box2d.b2Vec2.s_t2), box2d.b2Vec2.s_t3 = new box2d.b2Vec2(),
    goog.exportProperty(box2d.b2Vec2, "s_t3", box2d.b2Vec2.s_t3), box2d.b2Vec2.MakeArray = function(o) {
        return box2d.b2MakeArray(o, function(o) {
            return new box2d.b2Vec2();
        });
    }, goog.exportProperty(box2d.b2Vec2, "MakeArray", box2d.b2Vec2.MakeArray), box2d.b2Vec2.prototype.Clone = function() {
        return new box2d.b2Vec2(this.x, this.y);
    }, goog.exportProperty(box2d.b2Vec2.prototype, "Clone", box2d.b2Vec2.prototype.Clone),
    box2d.b2Vec2.prototype.SetZero = function() {
        return this.y = this.x = 0, this;
    }, goog.exportProperty(box2d.b2Vec2.prototype, "SetZero", box2d.b2Vec2.prototype.SetZero),
    box2d.b2Vec2.prototype.Set = function(o, t) {
        return this.x = o, this.y = t, this;
    }, goog.exportProperty(box2d.b2Vec2.prototype, "Set", box2d.b2Vec2.prototype.Set),
    box2d.b2Vec2.prototype.Copy = function(o) {
        return this.x = o.x, this.y = o.y, this;
    }, goog.exportProperty(box2d.b2Vec2.prototype, "Copy", box2d.b2Vec2.prototype.Copy),
    box2d.b2Vec2.prototype.SelfAdd = function(o) {
        return this.x += o.x, this.y += o.y, this;
    }, goog.exportProperty(box2d.b2Vec2.prototype, "SelfAdd", box2d.b2Vec2.prototype.SelfAdd),
    box2d.b2Vec2.prototype.SelfAddXY = function(o, t) {
        return this.x += o, this.y += t, this;
    }, goog.exportProperty(box2d.b2Vec2.prototype, "SelfAddXY", box2d.b2Vec2.prototype.SelfAddXY),
    box2d.b2Vec2.prototype.SelfSub = function(o) {
        return this.x -= o.x, this.y -= o.y, this;
    }, goog.exportProperty(box2d.b2Vec2.prototype, "SelfSub", box2d.b2Vec2.prototype.SelfSub),
    box2d.b2Vec2.prototype.SelfSubXY = function(o, t) {
        return this.x -= o, this.y -= t, this;
    }, goog.exportProperty(box2d.b2Vec2.prototype, "SelfSubXY", box2d.b2Vec2.prototype.SelfSubXY),
    box2d.b2Vec2.prototype.SelfMul = function(o) {
        return this.x *= o, this.y *= o, this;
    }, goog.exportProperty(box2d.b2Vec2.prototype, "SelfMul", box2d.b2Vec2.prototype.SelfMul),
    box2d.b2Vec2.prototype.SelfMulAdd = function(o, t) {
        return this.x += o * t.x, this.y += o * t.y, this;
    }, goog.exportProperty(box2d.b2Vec2.prototype, "SelfMulAdd", box2d.b2Vec2.prototype.SelfMulAdd),
    box2d.b2Vec2.prototype.SelfMulSub = function(o, t) {
        return this.x -= o * t.x, this.y -= o * t.y, this;
    }, goog.exportProperty(box2d.b2Vec2.prototype, "SelfMulSub", box2d.b2Vec2.prototype.SelfMulSub),
    box2d.b2Vec2.prototype.Dot = function(o) {
        return this.x * o.x + this.y * o.y;
    }, goog.exportProperty(box2d.b2Vec2.prototype, "Dot", box2d.b2Vec2.prototype.Dot),
    box2d.b2Vec2.prototype.Cross = function(o) {
        return this.x * o.y - this.y * o.x;
    }, goog.exportProperty(box2d.b2Vec2.prototype, "Cross", box2d.b2Vec2.prototype.Cross),
    box2d.b2Vec2.prototype.Length = function() {
        var o = this.x,
            t = this.y;
        return Math.sqrt(o * o + t * t);
    }, goog.exportProperty(box2d.b2Vec2.prototype, "Length", box2d.b2Vec2.prototype.Length),
    box2d.b2Vec2.prototype.LengthSquared = function() {
        var o = this.x,
            t = this.y;
        return o * o + t * t;
    }, goog.exportProperty(box2d.b2Vec2.prototype, "LengthSquared", box2d.b2Vec2.prototype.LengthSquared),
    box2d.b2Vec2.prototype.Normalize = function() {
        var o = this.Length();
        if (o >= box2d.b2_epsilon) {
            var t = 1 / o;
            this.x *= t, this.y *= t;
        }
        return o;
    }, goog.exportProperty(box2d.b2Vec2.prototype, "Normalize", box2d.b2Vec2.prototype.Normalize),
    box2d.b2Vec2.prototype.SelfNormalize = function() {
        return this.Normalize(), this;
    }, goog.exportProperty(box2d.b2Vec2.prototype, "SelfNormalize", box2d.b2Vec2.prototype.SelfNormalize),
    box2d.b2Vec2.prototype.SelfRotate = function(o, t) {
        var e = this.x,
            r = this.y;
        return this.x = o * e - t * r, this.y = t * e + o * r, this;
    }, goog.exportProperty(box2d.b2Vec2.prototype, "SelfRotate", box2d.b2Vec2.prototype.SelfRotate),
    box2d.b2Vec2.prototype.SelfRotateAngle = function(o) {
        return this.SelfRotate(Math.cos(o), Math.sin(o));
    }, goog.exportProperty(box2d.b2Vec2.prototype, "SelfRotateAngle", box2d.b2Vec2.prototype.SelfRotateAngle),
    box2d.b2Vec2.prototype.IsValid = function() {
        return isFinite(this.x) && isFinite(this.y);
    }, goog.exportProperty(box2d.b2Vec2.prototype, "IsValid", box2d.b2Vec2.prototype.IsValid),
    box2d.b2Vec2.prototype.SelfMin = function(o) {
        return this.x = Math.min(this.x, o.x), this.y = Math.min(this.y, o.y), this;
    }, goog.exportProperty(box2d.b2Vec2.prototype, "SelfMin", box2d.b2Vec2.prototype.SelfMin),
    box2d.b2Vec2.prototype.SelfMax = function(o) {
        return this.x = Math.max(this.x, o.x), this.y = Math.max(this.y, o.y), this;
    }, goog.exportProperty(box2d.b2Vec2.prototype, "SelfMax", box2d.b2Vec2.prototype.SelfMax),
    box2d.b2Vec2.prototype.SelfAbs = function() {
        return this.x = Math.abs(this.x), this.y = Math.abs(this.y), this;
    }, goog.exportProperty(box2d.b2Vec2.prototype, "SelfAbs", box2d.b2Vec2.prototype.SelfAbs),
    box2d.b2Vec2.prototype.SelfNeg = function() {
        return this.x = -this.x, this.y = -this.y, this;
    }, goog.exportProperty(box2d.b2Vec2.prototype, "SelfNeg", box2d.b2Vec2.prototype.SelfNeg),
    box2d.b2Vec2.prototype.SelfSkew = function() {
        var o = this.x;
        return this.x = -this.y, this.y = o, this;
    }, goog.exportProperty(box2d.b2Vec2.prototype, "SelfSkew", box2d.b2Vec2.prototype.SelfSkew),
    box2d.b2Abs_V2 = function(o, t) {
        return t.x = Math.abs(o.x), t.y = Math.abs(o.y), t;
    }, goog.exportSymbol("box2d.b2Abs_V2", box2d.b2Abs_V2), box2d.b2Min_V2_V2 = function(o, t, e) {
        return e.x = Math.min(o.x, t.x), e.y = Math.min(o.y, t.y), e;
    }, goog.exportSymbol("box2d.b2Min_V2_V2", box2d.b2Min_V2_V2), box2d.b2Max_V2_V2 = function(o, t, e) {
        return e.x = Math.max(o.x, t.x), e.y = Math.max(o.y, t.y), e;
    }, goog.exportSymbol("box2d.b2Max_V2_V2", box2d.b2Max_V2_V2), box2d.b2Clamp_V2_V2_V2 = function(o, t, e, r) {
        return r.x = Math.min(Math.max(o.x, t.x), e.x), r.y = Math.min(Math.max(o.y, t.y), e.y),
            r;
    }, goog.exportSymbol("box2d.b2Clamp_V2_V2_V2", box2d.b2Clamp_V2_V2_V2), box2d.b2Dot_V2_V2 = function(o, t) {
        return o.x * t.x + o.y * t.y;
    }, goog.exportSymbol("box2d.b2Dot_V2_V2", box2d.b2Dot_V2_V2), box2d.b2Cross_V2_V2 = function(o, t) {
        return o.x * t.y - o.y * t.x;
    }, goog.exportSymbol("box2d.b2Cross_V2_V2", box2d.b2Cross_V2_V2), box2d.b2Cross_V2_S = function(o, t, e) {
        var r = o.x;
        return e.x = t * o.y, e.y = -t * r, e;
    }, goog.exportSymbol("box2d.b2Cross_V2_S", box2d.b2Cross_V2_S), box2d.b2Cross_S_V2 = function(o, t, e) {
        var r = t.x;
        return e.x = -o * t.y, e.y = o * r, e;
    }, goog.exportSymbol("box2d.b2Cross_S_V2", box2d.b2Cross_S_V2), box2d.b2Add_V2_V2 = function(o, t, e) {
        return e.x = o.x + t.x, e.y = o.y + t.y, e;
    }, goog.exportSymbol("box2d.b2Add_V2_V2", box2d.b2Add_V2_V2), box2d.b2Sub_V2_V2 = function(o, t, e) {
        return e.x = o.x - t.x, e.y = o.y - t.y, e;
    }, goog.exportSymbol("box2d.b2Sub_V2_V2", box2d.b2Sub_V2_V2), box2d.b2Add_V2_S = function(o, t, e) {
        return e.x = o.x + t, e.y = o.y + t, e;
    }, goog.exportSymbol("box2d.b2Add_V2_S", box2d.b2Add_V2_S), box2d.b2Sub_V2_S = function(o, t, e) {
        return e.x = o.x - t, e.y = o.y - t, e;
    }, goog.exportSymbol("box2d.b2Sub_V2_S", box2d.b2Sub_V2_S), box2d.b2Mul_S_V2 = function(o, t, e) {
        return e.x = t.x * o, e.y = t.y * o, e;
    }, goog.exportSymbol("box2d.b2Mul_S_V2", box2d.b2Mul_S_V2), box2d.b2Mul_V2_S = function(o, t, e) {
        return e.x = o.x * t, e.y = o.y * t, e;
    }, goog.exportSymbol("box2d.b2Mul_V2_S", box2d.b2Mul_V2_S), box2d.b2Div_V2_S = function(o, t, e) {
        return e.x = o.x / t, e.y = o.y / t, e;
    }, goog.exportSymbol("box2d.b2Div_V2_S", box2d.b2Div_V2_S), box2d.b2AddMul_V2_S_V2 = function(o, t, e, r) {
        return r.x = o.x + t * e.x, r.y = o.y + t * e.y, r;
    }, goog.exportSymbol("box2d.b2AddMul_V2_S_V2", box2d.b2AddMul_V2_S_V2), box2d.b2SubMul_V2_S_V2 = function(o, t, e, r) {
        return r.x = o.x - t * e.x, r.y = o.y - t * e.y, r;
    }, goog.exportSymbol("box2d.b2SubMul_V2_S_V2", box2d.b2SubMul_V2_S_V2), box2d.b2AddCross_V2_S_V2 = function(o, t, e, r) {
        var i = e.x;
        return r.x = o.x - t * e.y, r.y = o.y + t * i, r;
    }, goog.exportSymbol("box2d.b2AddCross_V2_S_V2", box2d.b2AddCross_V2_S_V2), box2d.b2Mid_V2_V2 = function(o, t, e) {
        return e.x = .5 * (o.x + t.x), e.y = .5 * (o.y + t.y), e;
    }, goog.exportSymbol("box2d.b2Mid_V2_V2", box2d.b2Mid_V2_V2), box2d.b2Ext_V2_V2 = function(o, t, e) {
        return e.x = .5 * (t.x - o.x), e.y = .5 * (t.y - o.y), e;
    }, goog.exportSymbol("box2d.b2Ext_V2_V2", box2d.b2Ext_V2_V2), box2d.b2Distance = function(o, t) {
        var e = o.x - t.x,
            r = o.y - t.y;
        return Math.sqrt(e * e + r * r);
    }, goog.exportSymbol("box2d.b2Distance", box2d.b2Distance), box2d.b2DistanceSquared = function(o, t) {
        var e = o.x - t.x,
            r = o.y - t.y;
        return e * e + r * r;
    }, goog.exportSymbol("box2d.b2DistanceSquared", box2d.b2DistanceSquared), box2d.b2Vec3 = function(o, t, e) {
        this.x = o || 0, this.y = t || 0, this.z = e || 0;
    }, goog.exportSymbol("box2d.b2Vec3", box2d.b2Vec3), box2d.b2Vec3.prototype.x = 0,
    goog.exportProperty(box2d.b2Vec3.prototype, "x", box2d.b2Vec3.prototype.x), box2d.b2Vec3.prototype.y = 0,
    goog.exportProperty(box2d.b2Vec3.prototype, "y", box2d.b2Vec3.prototype.y), box2d.b2Vec3.prototype.z = 0,
    goog.exportProperty(box2d.b2Vec3.prototype, "z", box2d.b2Vec3.prototype.z), box2d.b2Vec3.ZERO = new box2d.b2Vec3(),
    goog.exportProperty(box2d.b2Vec3, "ZERO", box2d.b2Vec3.ZERO), box2d.b2Vec3.s_t0 = new box2d.b2Vec3(),
    goog.exportProperty(box2d.b2Vec3, "s_t0", box2d.b2Vec3.s_t0), box2d.b2Vec3.prototype.Clone = function() {
        return new box2d.b2Vec3(this.x, this.y, this.z);
    }, goog.exportProperty(box2d.b2Vec3.prototype, "Clone", box2d.b2Vec3.prototype.Clone),
    box2d.b2Vec3.prototype.SetZero = function() {
        return this.z = this.y = this.x = 0, this;
    }, goog.exportProperty(box2d.b2Vec3.prototype, "SetZero", box2d.b2Vec3.prototype.SetZero),
    box2d.b2Vec3.prototype.Set = function(o, t, e) {
        return this.x = o, this.y = t, this.z = e, this;
    }, goog.exportProperty(box2d.b2Vec3.prototype, "Set", box2d.b2Vec3.prototype.Set),
    box2d.b2Vec3.prototype.Copy = function(o) {
        return this.x = o.x, this.y = o.y, this.z = o.z, this;
    }, goog.exportProperty(box2d.b2Vec3.prototype, "Copy", box2d.b2Vec3.prototype.Copy),
    box2d.b2Vec3.prototype.SelfNeg = function() {
        return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
    }, goog.exportProperty(box2d.b2Vec3.prototype, "SelfNeg", box2d.b2Vec3.prototype.SelfNeg),
    box2d.b2Vec3.prototype.SelfAdd = function(o) {
        return this.x += o.x, this.y += o.y, this.z += o.z, this;
    }, goog.exportProperty(box2d.b2Vec3.prototype, "SelfAdd", box2d.b2Vec3.prototype.SelfAdd),
    box2d.b2Vec3.prototype.SelfAddV2 = function(o, t) {
        return this.x += o.x, this.y += o.y, this.z += t, this;
    }, goog.exportProperty(box2d.b2Vec3.prototype, "SelfAddV2", box2d.b2Vec3.prototype.SelfAddV2),
    box2d.b2Vec3.prototype.SelfAddXYZ = function(o, t, e) {
        return this.x += o, this.y += t, this.z += e, this;
    }, goog.exportProperty(box2d.b2Vec3.prototype, "SelfAddXYZ", box2d.b2Vec3.prototype.SelfAddXYZ),
    box2d.b2Vec3.prototype.SelfSub = function(o) {
        return this.x -= o.x, this.y -= o.y, this.z -= o.z, this;
    }, goog.exportProperty(box2d.b2Vec3.prototype, "SelfSub", box2d.b2Vec3.prototype.SelfSub),
    box2d.b2Vec3.prototype.SelfSubV2 = function(o, t) {
        return this.x -= o.x, this.y -= o.y, this.z -= t, this;
    }, goog.exportProperty(box2d.b2Vec3.prototype, "SelfSubV2", box2d.b2Vec3.prototype.SelfSubV2),
    box2d.b2Vec3.prototype.SelfSubXYZ = function(o, t, e) {
        return this.x -= o, this.y -= t, this.z -= e, this;
    }, goog.exportProperty(box2d.b2Vec3.prototype, "SelfSubXYZ", box2d.b2Vec3.prototype.SelfSubXYZ),
    box2d.b2Vec3.prototype.SelfMul = function(o) {
        return this.x *= o.x, this.y *= o.y, this.z *= o.z, this;
    }, goog.exportProperty(box2d.b2Vec3.prototype, "SelfMul", box2d.b2Vec3.prototype.SelfMul),
    box2d.b2Vec3.prototype.SelfMulV2 = function(o, t) {
        return this.x *= o.x, this.y *= o.y, this.z *= t, this;
    }, goog.exportProperty(box2d.b2Vec3.prototype, "SelfMulV2", box2d.b2Vec3.prototype.SelfMulV2),
    box2d.b2Vec3.prototype.SelfMulXYZ = function(o, t, e) {
        return this.x *= o, this.y *= t, this.z *= e, this;
    }, goog.exportProperty(box2d.b2Vec3.prototype, "SelfMulXYZ", box2d.b2Vec3.prototype.SelfMulXYZ),
    box2d.b2Vec3.prototype.SelfMulScalar = function(o) {
        return this.x *= o, this.y *= o, this.z *= o, this;
    }, goog.exportProperty(box2d.b2Vec3.prototype, "SelfMulScalar", box2d.b2Vec3.prototype.SelfMulScalar),
    box2d.b2Vec3.prototype.Length = function() {
        var o = this.x,
            t = this.y,
            e = this.z;
        return Math.sqrt(o * o + t * t + e * e);
    }, goog.exportProperty(box2d.b2Vec3.prototype, "Length", box2d.b2Vec3.prototype.Length),
    box2d.b2Vec3.prototype.LengthSquared = function() {
        var o = this.x,
            t = this.y,
            e = this.z;
        return o * o + t * t + e * e;
    }, goog.exportProperty(box2d.b2Vec3.prototype, "LengthSquared", box2d.b2Vec3.prototype.LengthSquared),
    box2d.b2Vec3.prototype.Normalize = function() {
        var o = this.Length();
        if (o >= box2d.b2_epsilon) {
            var t = 1 / o;
            this.x *= t, this.y *= t, this.z *= t;
        }
        return o;
    }, goog.exportProperty(box2d.b2Vec3.prototype, "Normalize", box2d.b2Vec3.prototype.Normalize),
    box2d.b2Vec3.prototype.SelfNormalize = function() {
        return this.Normalize(), this;
    }, goog.exportProperty(box2d.b2Vec3.prototype, "SelfNormalize", box2d.b2Vec3.prototype.SelfNormalize),
    box2d.b2Add_V3_V3 = function(o, t, e) {
        return e.x = o.x + t.x, e.y = o.y + t.y, e.z = o.z + t.z, e;
    }, goog.exportSymbol("box2d.b2Add_V3_V3", box2d.b2Add_V3_V3), box2d.b2Sub_V3_V3 = function(o, t, e) {
        return e.x = o.x + t.x, e.y = o.y + t.y, e.z = o.z + t.z, e;
    }, goog.exportSymbol("box2d.b2Sub_V3_V3", box2d.b2Sub_V3_V3), box2d.b2Dot_V3_V3 = function(o, t) {
        return o.x * t.x + o.y * t.y + o.z * t.z;
    }, goog.exportSymbol("box2d.b2Dot_V3_V3", box2d.b2Dot_V3_V3), box2d.b2Cross_V3_V3 = function(o, t, e) {
        var r = o.x,
            i = o.y;
        o = o.z;
        var b = t.x,
            n = t.y;
        return t = t.z, e.x = i * t - o * n, e.y = o * b - r * t, e.z = r * n - i * b, e;
    }, goog.exportSymbol("box2d.b2Cross_V3_V3", box2d.b2Cross_V3_V3), box2d.b2Vec4 = function(o, t, e, r) {
        this.x = o || 0, this.y = t || 0, this.z = e || 0, this.w = r || 0;
    }, goog.exportSymbol("box2d.b2Vec4", box2d.b2Vec4), box2d.b2Vec4.prototype.x = 0,
    goog.exportProperty(box2d.b2Vec4.prototype, "x", box2d.b2Vec4.prototype.x), box2d.b2Vec4.prototype.y = 0,
    goog.exportProperty(box2d.b2Vec4.prototype, "y", box2d.b2Vec4.prototype.y), box2d.b2Vec4.prototype.z = 0,
    goog.exportProperty(box2d.b2Vec4.prototype, "z", box2d.b2Vec4.prototype.z), box2d.b2Vec4.prototype.w = 0,
    goog.exportProperty(box2d.b2Vec4.prototype, "w", box2d.b2Vec4.prototype.w), box2d.b2Vec4.ZERO = new box2d.b2Vec4(0, 0, 0, 0),
    goog.exportProperty(box2d.b2Vec4, "ZERO", box2d.b2Vec4.ZERO), box2d.b2Vec4.s_t0 = new box2d.b2Vec4(),
    goog.exportProperty(box2d.b2Vec4, "s_t0", box2d.b2Vec4.s_t0), box2d.b2Vec4.prototype.Clone = function() {
        return new box2d.b2Vec4(this.x, this.y, this.z, this.w);
    }, goog.exportProperty(box2d.b2Vec4.prototype, "Clone", box2d.b2Vec4.prototype.Clone),
    box2d.b2Vec4.prototype.SetZero = function() {
        return this.w = this.z = this.y = this.x = 0, this;
    }, goog.exportProperty(box2d.b2Vec4.prototype, "SetZero", box2d.b2Vec4.prototype.SetZero),
    box2d.b2Vec4.prototype.Set = function(o, t, e, r) {
        return this.x = o, this.y = t, this.z = e, this.w = r, this;
    }, goog.exportProperty(box2d.b2Vec4.prototype, "Set", box2d.b2Vec4.prototype.Set),
    box2d.b2Vec4.prototype.Copy = function(o) {
        return this.x = o.x, this.y = o.y, this.z = o.z, this.w = o.w, this;
    }, goog.exportProperty(box2d.b2Vec4.prototype, "Copy", box2d.b2Vec4.prototype.Copy),
    box2d.b2Mat22 = function() {
        this.ex = new box2d.b2Vec2(1, 0), this.ey = new box2d.b2Vec2(0, 1);
    }, goog.exportSymbol("box2d.b2Mat22", box2d.b2Mat22), box2d.b2Mat22.prototype.ex = null,
    goog.exportProperty(box2d.b2Mat22.prototype, "ex", box2d.b2Mat22.prototype.ex),
    box2d.b2Mat22.prototype.ey = null, goog.exportProperty(box2d.b2Mat22.prototype, "ey", box2d.b2Mat22.prototype.ey),
    box2d.b2Mat22.IDENTITY = new box2d.b2Mat22(), goog.exportProperty(box2d.b2Mat22, "IDENTITY", box2d.b2Mat22.IDENTITY),
    box2d.b2Mat22.prototype.Clone = function() {
        return new box2d.b2Mat22().Copy(this);
    }, goog.exportProperty(box2d.b2Mat22.prototype, "Clone", box2d.b2Mat22.prototype.Clone),
    box2d.b2Mat22.prototype.SetAngle = function(o) {
        var t = Math.cos(o);
        return o = Math.sin(o), this.ex.Set(t, o), this.ey.Set(-o, t), this;
    }, goog.exportProperty(box2d.b2Mat22.prototype, "SetAngle", box2d.b2Mat22.prototype.SetAngle),
    box2d.b2Mat22.prototype.Copy = function(o) {
        return this.ex.Copy(o.ex), this.ey.Copy(o.ey), this;
    }, goog.exportProperty(box2d.b2Mat22.prototype, "Copy", box2d.b2Mat22.prototype.Copy),
    box2d.b2Mat22.prototype.SetIdentity = function() {
        return this.ex.Set(1, 0), this.ey.Set(0, 1), this;
    }, goog.exportProperty(box2d.b2Mat22.prototype, "SetIdentity", box2d.b2Mat22.prototype.SetIdentity),
    box2d.b2Mat22.prototype.SetZero = function() {
        return this.ex.SetZero(), this.ey.SetZero(), this;
    }, goog.exportProperty(box2d.b2Mat22.prototype, "SetZero", box2d.b2Mat22.prototype.SetZero),
    box2d.b2Mat22.prototype.GetAngle = function() {
        return Math.atan2(this.ex.y, this.ex.x);
    }, goog.exportProperty(box2d.b2Mat22.prototype, "GetAngle", box2d.b2Mat22.prototype.GetAngle),
    box2d.b2Mat22.prototype.GetInverse = function(o) {
        var t = this.ex.x,
            e = this.ey.x,
            r = this.ex.y,
            i = this.ey.y,
            b = t * i - e * r;
        return 0 !== b && (b = 1 / b), o.ex.x = b * i, o.ey.x = -b * e, o.ex.y = -b * r,
            o.ey.y = b * t, o;
    }, goog.exportProperty(box2d.b2Mat22.prototype, "GetInverse", box2d.b2Mat22.prototype.GetInverse),
    box2d.b2Mat22.prototype.Solve = function(o, t, e) {
        var r = this.ex.x,
            i = this.ey.x,
            b = this.ex.y,
            n = this.ey.y,
            p = r * n - i * b;
        return 0 !== p && (p = 1 / p), e.x = p * (n * o - i * t), e.y = p * (r * t - b * o),
            e;
    }, goog.exportProperty(box2d.b2Mat22.prototype, "Solve", box2d.b2Mat22.prototype.Solve),
    box2d.b2Mat22.prototype.SelfAbs = function() {
        return this.ex.SelfAbs(), this.ey.SelfAbs(), this;
    }, goog.exportProperty(box2d.b2Mat22.prototype, "SelfAbs", box2d.b2Mat22.prototype.SelfAbs),
    box2d.b2Mat22.prototype.SelfInv = function() {
        return this.GetInverse(this);
    }, goog.exportProperty(box2d.b2Mat22.prototype, "SelfInv", box2d.b2Mat22.prototype.SelfInv),
    box2d.b2Mat22.prototype.SelfAdd = function(o) {
        return this.ex.SelfAdd(o.ex), this.ey.SelfAdd(o.ey), this;
    }, goog.exportProperty(box2d.b2Mat22.prototype, "SelfAdd", box2d.b2Mat22.prototype.SelfAdd),
    box2d.b2Mat22.prototype.SelfSub = function(o) {
        return this.ex.SelfSub(o.ex), this.ey.SelfSub(o.ey), this;
    }, goog.exportProperty(box2d.b2Mat22.prototype, "SelfSub", box2d.b2Mat22.prototype.SelfSub),
    box2d.b2Abs_M22 = function(o, t) {
        var e = o.ex,
            r = o.ey;
        return t.ex.x = box2d.b2Abs(e.x), t.ex.y = box2d.b2Abs(e.y), t.ey.x = box2d.b2Abs(r.x),
            t.ey.y = box2d.b2Abs(r.y), t;
    }, goog.exportSymbol("box2d.b2Abs_M22", box2d.b2Abs_M22), box2d.b2Mul_M22_V2 = function(o, t, e) {
        var r = o.ex;
        o = o.ey;
        var i = t.x;
        return t = t.y, e.x = r.x * i + o.x * t, e.y = r.y * i + o.y * t, e;
    }, goog.exportSymbol("box2d.b2Mul_M22_V2", box2d.b2Mul_M22_V2), box2d.b2MulT_M22_V2 = function(o, t, e) {
        var r = o.ex;
        o = o.ey;
        var i = t.x;
        return t = t.y, e.x = r.x * i + r.y * t, e.y = o.x * i + o.y * t, e;
    }, goog.exportSymbol("box2d.b2MulT_M22_V2", box2d.b2MulT_M22_V2), box2d.b2Add_M22_M22 = function(o, t, e) {
        var r = o.ex;
        o = o.ey;
        var i = t.ex;
        return t = t.ey, e.ex.x = r.x + i.x, e.ex.y = r.y + i.y, e.ey.x = o.x + t.x, e.ey.y = o.y + t.y,
            e;
    }, goog.exportSymbol("box2d.b2Add_M22_M22", box2d.b2Add_M22_M22), box2d.b2Mul_M22_M22 = function(o, t, e) {
        var r = o.ex.x,
            i = o.ex.y,
            b = o.ey.x;
        o = o.ey.y;
        var n = t.ex.x,
            p = t.ex.y,
            s = t.ey.x;
        return t = t.ey.y, e.ex.x = r * n + b * p, e.ex.y = i * n + o * p, e.ey.x = r * s + b * t,
            e.ey.y = i * s + o * t, e;
    }, goog.exportSymbol("box2d.b2Mul_M22_M22", box2d.b2Mul_M22_M22), box2d.b2MulT_M22_M22 = function(o, t, e) {
        var r = o.ex.x,
            i = o.ex.y,
            b = o.ey.x;
        o = o.ey.y;
        var n = t.ex.x,
            p = t.ex.y,
            s = t.ey.x;
        return t = t.ey.y, e.ex.x = r * n + i * p, e.ex.y = b * n + o * p, e.ey.x = r * s + i * t,
            e.ey.y = b * s + o * t, e;
    }, goog.exportSymbol("box2d.b2MulT_M22_M22", box2d.b2MulT_M22_M22), box2d.b2Mat33 = function() {
        this.ex = new box2d.b2Vec3(1, 0, 0), this.ey = new box2d.b2Vec3(0, 1, 0), this.ez = new box2d.b2Vec3(0, 0, 1);
    }, goog.exportSymbol("box2d.b2Mat33", box2d.b2Mat33), box2d.b2Mat33.prototype.ex = null,
    goog.exportProperty(box2d.b2Mat33.prototype, "ex", box2d.b2Mat33.prototype.ex),
    box2d.b2Mat33.prototype.ey = null, goog.exportProperty(box2d.b2Mat33.prototype, "ey", box2d.b2Mat33.prototype.ey),
    box2d.b2Mat33.prototype.ez = null, goog.exportProperty(box2d.b2Mat33.prototype, "ez", box2d.b2Mat33.prototype.ez),
    box2d.b2Mat33.IDENTITY = new box2d.b2Mat33(), goog.exportProperty(box2d.b2Mat33, "IDENTITY", box2d.b2Mat33.IDENTITY),
    box2d.b2Mat33.prototype.Clone = function() {
        return new box2d.b2Mat33().Copy(this);
    }, goog.exportProperty(box2d.b2Mat33.prototype, "Clone", box2d.b2Mat33.prototype.Clone),
    box2d.b2Mat33.prototype.Copy = function(o) {
        return this.ex.Copy(o.ex), this.ey.Copy(o.ey), this.ez.Copy(o.ez), this;
    }, goog.exportProperty(box2d.b2Mat33.prototype, "Copy", box2d.b2Mat33.prototype.Copy),
    box2d.b2Mat33.prototype.SetIdentity = function() {
        return this.ex.Set(1, 0, 0), this.ey.Set(0, 1, 0), this.ez.Set(0, 0, 1), this;
    }, goog.exportProperty(box2d.b2Mat33.prototype, "SetIdentity", box2d.b2Mat33.prototype.SetIdentity),
    box2d.b2Mat33.prototype.SetZero = function() {
        return this.ex.SetZero(), this.ey.SetZero(), this.ez.SetZero(), this;
    }, goog.exportProperty(box2d.b2Mat33.prototype, "SetZero", box2d.b2Mat33.prototype.SetZero),
    box2d.b2Mat33.prototype.SelfAdd = function(o) {
        return this.ex.SelfAdd(o.ex), this.ey.SelfAdd(o.ey), this.ez.SelfAdd(o.ez), this;
    }, goog.exportProperty(box2d.b2Mat33.prototype, "SelfAdd", box2d.b2Mat33.prototype.SelfAdd),
    box2d.b2Mat33.prototype.Solve33 = function(o, t, e, r) {
        var i = this.ex.x,
            b = this.ex.y,
            n = this.ex.z,
            p = this.ey.x,
            s = this.ey.y,
            a = this.ey.z,
            d = this.ez.x,
            l = this.ez.y,
            x = this.ez.z,
            y = i * (s * x - a * l) + b * (a * d - p * x) + n * (p * l - s * d);
        return 0 !== y && (y = 1 / y), r.x = y * (o * (s * x - a * l) + t * (a * d - p * x) + e * (p * l - s * d)),
            r.y = y * (i * (t * x - e * l) + b * (e * d - o * x) + n * (o * l - t * d)), r.z = y * (i * (s * e - a * t) + b * (a * o - p * e) + n * (p * t - s * o)),
            r;
    }, goog.exportProperty(box2d.b2Mat33.prototype, "Solve33", box2d.b2Mat33.prototype.Solve33),
    box2d.b2Mat33.prototype.Solve22 = function(o, t, e) {
        var r = this.ex.x,
            i = this.ey.x,
            b = this.ex.y,
            n = this.ey.y,
            p = r * n - i * b;
        return 0 !== p && (p = 1 / p), e.x = p * (n * o - i * t), e.y = p * (r * t - b * o),
            e;
    }, goog.exportProperty(box2d.b2Mat33.prototype, "Solve22", box2d.b2Mat33.prototype.Solve22),
    box2d.b2Mat33.prototype.GetInverse22 = function(o) {
        var t = this.ex.x,
            e = this.ey.x,
            r = this.ex.y,
            i = this.ey.y,
            b = t * i - e * r;
        0 !== b && (b = 1 / b), o.ex.x = b * i, o.ey.x = -b * e, o.ex.z = 0, o.ex.y = -b * r,
            o.ey.y = b * t, o.ey.z = 0, o.ez.x = 0, o.ez.y = 0, o.ez.z = 0;
    }, goog.exportProperty(box2d.b2Mat33.prototype, "GetInverse22", box2d.b2Mat33.prototype.GetInverse22),
    box2d.b2Mat33.prototype.GetSymInverse33 = function(o) {
        var t = box2d.b2Dot_V3_V3(this.ex, box2d.b2Cross_V3_V3(this.ey, this.ez, box2d.b2Vec3.s_t0));
        0 !== t && (t = 1 / t);
        var e = this.ex.x,
            r = this.ey.x,
            i = this.ez.x,
            b = this.ey.y,
            n = this.ez.y,
            p = this.ez.z;
        o.ex.x = t * (b * p - n * n), o.ex.y = t * (i * n - r * p), o.ex.z = t * (r * n - i * b),
            o.ey.x = o.ex.y, o.ey.y = t * (e * p - i * i), o.ey.z = t * (i * r - e * n), o.ez.x = o.ex.z,
            o.ez.y = o.ey.z, o.ez.z = t * (e * b - r * r);
    }, goog.exportProperty(box2d.b2Mat33.prototype, "GetSymInverse33", box2d.b2Mat33.prototype.GetSymInverse33),
    box2d.b2Mul_M33_V3 = function(o, t, e) {
        var r = t.x,
            i = t.y;
        return t = t.z, e.x = o.ex.x * r + o.ey.x * i + o.ez.x * t, e.y = o.ex.y * r + o.ey.y * i + o.ez.y * t,
            e.z = o.ex.z * r + o.ey.z * i + o.ez.z * t, e;
    }, goog.exportSymbol("box2d.b2Mul_M33_V3", box2d.b2Mul_M33_V3), box2d.b2Mul_M33_X_Y_Z = function(o, t, e, r, i) {
        return i.x = o.ex.x * t + o.ey.x * e + o.ez.x * r, i.y = o.ex.y * t + o.ey.y * e + o.ez.y * r,
            i.z = o.ex.z * t + o.ey.z * e + o.ez.z * r, i;
    }, goog.exportSymbol("box2d.b2Mul_M33_X_Y_Z", box2d.b2Mul_M33_X_Y_Z), box2d.b2Mul22_M33_V2 = function(o, t, e) {
        var r = t.x;
        return t = t.y, e.x = o.ex.x * r + o.ey.x * t, e.y = o.ex.y * r + o.ey.y * t, e;
    }, goog.exportSymbol("box2d.b2Mul22_M33_V2", box2d.b2Mul22_M33_V2), box2d.b2Mul_M33_X_Y = function(o, t, e, r) {
        return r.x = o.ex.x * t + o.ey.x * e, r.y = o.ex.y * t + o.ey.y * e, r;
    }, goog.exportSymbol("box2d.b2Mul_M33_X_Y", box2d.b2Mul_M33_X_Y), box2d.b2Rot = function(o) {
        o && (this.angle = o, this.s = Math.sin(o), this.c = Math.cos(o));
    }, goog.exportSymbol("box2d.b2Rot", box2d.b2Rot), box2d.b2Rot.prototype.angle = 0,
    goog.exportProperty(box2d.b2Rot.prototype, "angle", box2d.b2Rot.prototype.angle),
    box2d.b2Rot.prototype.s = 0, goog.exportProperty(box2d.b2Rot.prototype, "s", box2d.b2Rot.prototype.s),
    box2d.b2Rot.prototype.c = 1, goog.exportProperty(box2d.b2Rot.prototype, "c", box2d.b2Rot.prototype.c),
    box2d.b2Rot.IDENTITY = new box2d.b2Rot(), goog.exportProperty(box2d.b2Rot, "IDENTITY", box2d.b2Rot.IDENTITY),
    box2d.b2Rot.prototype.Clone = function() {
        return new box2d.b2Rot().Copy(this);
    }, goog.exportProperty(box2d.b2Rot.prototype, "Clone", box2d.b2Rot.prototype.Clone),
    box2d.b2Rot.prototype.Copy = function(o) {
        return this.angle = o.angle, this.s = o.s, this.c = o.c, this;
    }, goog.exportProperty(box2d.b2Rot.prototype, "Copy", box2d.b2Rot.prototype.Copy),
    box2d.b2Rot.prototype.Set = function(o) {
        return Math.abs(this.angle - o) >= box2d.b2_epsilon && (this.angle = o, this.s = Math.sin(o),
            this.c = Math.cos(o)), this;
    }, goog.exportProperty(box2d.b2Rot.prototype, "Set", box2d.b2Rot.prototype.Set),
    box2d.b2Rot.prototype.SetAngle = box2d.b2Rot.prototype.Set, goog.exportProperty(box2d.b2Rot.prototype, "SetAngle", box2d.b2Rot.prototype.SetAngle),
    box2d.b2Rot.prototype.SetIdentity = function() {
        return this.s = this.angle = 0, this.c = 1, this;
    }, goog.exportProperty(box2d.b2Rot.prototype, "SetIdentity", box2d.b2Rot.prototype.SetIdentity),
    box2d.b2Rot.prototype.GetAngle = function() {
        return this.angle;
    }, goog.exportProperty(box2d.b2Rot.prototype, "GetAngle", box2d.b2Rot.prototype.GetAngle),
    box2d.b2Rot.prototype.GetXAxis = function(o) {
        return o.x = this.c, o.y = this.s, o;
    }, goog.exportProperty(box2d.b2Rot.prototype, "GetXAxis", box2d.b2Rot.prototype.GetXAxis),
    box2d.b2Rot.prototype.GetYAxis = function(o) {
        return o.x = -this.s, o.y = this.c, o;
    }, goog.exportProperty(box2d.b2Rot.prototype, "GetYAxis", box2d.b2Rot.prototype.GetYAxis),
    box2d.b2Mul_R_R = function(o, t, e) {
        var r = o.c,
            i = o.s,
            b = t.c,
            n = t.s;
        return e.s = i * b + r * n, e.c = r * b - i * n, e.angle = box2d.b2WrapAngle(o.angle + t.angle),
            e;
    }, goog.exportSymbol("box2d.b2Mul_R_R", box2d.b2Mul_R_R), box2d.b2MulT_R_R = function(o, t, e) {
        var r = o.c,
            i = o.s,
            b = t.c,
            n = t.s;
        return e.s = r * n - i * b, e.c = r * b + i * n, e.angle = box2d.b2WrapAngle(o.angle - t.angle),
            e;
    }, goog.exportSymbol("box2d.b2MulT_R_R", box2d.b2MulT_R_R), box2d.b2Mul_R_V2 = function(o, t, e) {
        var r = o.c;
        o = o.s;
        var i = t.x;
        return t = t.y, e.x = r * i - o * t, e.y = o * i + r * t, e;
    }, goog.exportSymbol("box2d.b2Mul_R_V2", box2d.b2Mul_R_V2), box2d.b2MulT_R_V2 = function(o, t, e) {
        var r = o.c;
        o = o.s;
        var i = t.x;
        return t = t.y, e.x = r * i + o * t, e.y = -o * i + r * t, e;
    }, goog.exportSymbol("box2d.b2MulT_R_V2", box2d.b2MulT_R_V2), box2d.b2Transform = function() {
        this.p = new box2d.b2Vec2(), this.q = new box2d.b2Rot();
    }, goog.exportSymbol("box2d.b2Transform", box2d.b2Transform), box2d.b2Transform.prototype.p = null,
    goog.exportProperty(box2d.b2Transform.prototype, "p", box2d.b2Transform.prototype.p),
    box2d.b2Transform.prototype.q = null, goog.exportProperty(box2d.b2Transform.prototype, "q", box2d.b2Transform.prototype.q),
    box2d.b2Transform.IDENTITY = new box2d.b2Transform(), goog.exportProperty(box2d.b2Transform, "IDENTITY", box2d.b2Transform.IDENTITY),
    box2d.b2Transform.prototype.Clone = function() {
        return new box2d.b2Transform().Copy(this);
    }, goog.exportProperty(box2d.b2Transform.prototype, "Clone", box2d.b2Transform.prototype.Clone),
    box2d.b2Transform.prototype.Copy = function(o) {
        return this.p.Copy(o.p), this.q.Copy(o.q), this;
    }, goog.exportProperty(box2d.b2Transform.prototype, "Copy", box2d.b2Transform.prototype.Copy),
    box2d.b2Transform.prototype.SetIdentity = function() {
        return this.p.SetZero(), this.q.SetIdentity(), this;
    }, goog.exportProperty(box2d.b2Transform.prototype, "SetIdentity", box2d.b2Transform.prototype.SetIdentity),
    box2d.b2Transform.prototype.Set = function(o, t) {
        return this.SetPositionRotationAngle(o, t);
    }, box2d.b2Transform.prototype.SetPositionRotation = function(o, t) {
        return this.p.Copy(o), this.q.Copy(t), this;
    }, goog.exportProperty(box2d.b2Transform.prototype, "SetPositionRotation", box2d.b2Transform.prototype.SetPositionRotation),
    box2d.b2Transform.prototype.SetPositionRotationAngle = function(o, t) {
        return this.p.Copy(o), this.q.SetAngle(t), this;
    }, goog.exportProperty(box2d.b2Transform.prototype, "SetPositionRotationAngle", box2d.b2Transform.prototype.SetPositionRotationAngle),
    box2d.b2Transform.prototype.SetPosition = function(o) {
        return this.p.Copy(o), this;
    }, goog.exportProperty(box2d.b2Transform.prototype, "SetPosition", box2d.b2Transform.prototype.SetPosition),
    box2d.b2Transform.prototype.SetPositionXY = function(o, t) {
        return this.p.Set(o, t), this;
    }, goog.exportProperty(box2d.b2Transform.prototype, "SetPositionXY", box2d.b2Transform.prototype.SetPositionXY),
    box2d.b2Transform.prototype.SetRotation = function(o) {
        return this.q.Copy(o), this;
    }, goog.exportProperty(box2d.b2Transform.prototype, "SetRotation", box2d.b2Transform.prototype.SetRotation),
    box2d.b2Transform.prototype.SetRotationAngle = function(o) {
        return this.q.SetAngle(o), this;
    }, goog.exportProperty(box2d.b2Transform.prototype, "SetRotationAngle", box2d.b2Transform.prototype.SetRotationAngle),
    box2d.b2Transform.prototype.GetPosition = function() {
        return this.p;
    }, goog.exportProperty(box2d.b2Transform.prototype, "GetPosition", box2d.b2Transform.prototype.GetPosition),
    box2d.b2Transform.prototype.GetRotation = function() {
        return this.q;
    }, goog.exportProperty(box2d.b2Transform.prototype, "GetRotation", box2d.b2Transform.prototype.GetRotation),
    box2d.b2Transform.prototype.GetRotationAngle = function() {
        return this.q.GetAngle();
    }, goog.exportProperty(box2d.b2Transform.prototype, "GetRotationAngle", box2d.b2Transform.prototype.GetRotationAngle),
    box2d.b2Transform.prototype.GetAngle = function() {
        return this.q.GetAngle();
    }, goog.exportProperty(box2d.b2Transform.prototype, "GetAngle", box2d.b2Transform.prototype.GetAngle),
    box2d.b2Mul_X_V2 = function(o, t, e) {
        var r = o.q.c,
            i = o.q.s,
            b = t.x;
        return t = t.y, e.x = r * b - i * t + o.p.x, e.y = i * b + r * t + o.p.y, e;
    }, goog.exportSymbol("box2d.b2Mul_X_V2", box2d.b2Mul_X_V2), box2d.b2MulT_X_V2 = function(o, t, e) {
        var r = o.q.c,
            i = o.q.s,
            b = t.x - o.p.x;
        return o = t.y - o.p.y, e.x = r * b + i * o, e.y = -i * b + r * o, e;
    }, goog.exportSymbol("box2d.b2MulT_X_V2", box2d.b2MulT_X_V2), box2d.b2Mul_X_X = function(o, t, e) {
        return box2d.b2Mul_R_R(o.q, t.q, e.q), box2d.b2Add_V2_V2(box2d.b2Mul_R_V2(o.q, t.p, e.p), o.p, e.p),
            e;
    }, goog.exportSymbol("box2d.b2Mul_X_X", box2d.b2Mul_X_X), box2d.b2MulT_X_X = function(o, t, e) {
        return box2d.b2MulT_R_R(o.q, t.q, e.q), box2d.b2MulT_R_V2(o.q, box2d.b2Sub_V2_V2(t.p, o.p, e.p), e.p),
            e;
    }, goog.exportSymbol("box2d.b2MulT_X_X", box2d.b2MulT_X_X), box2d.b2Sweep = function() {
        this.localCenter = new box2d.b2Vec2(), this.c0 = new box2d.b2Vec2(), this.c = new box2d.b2Vec2();
    }, goog.exportSymbol("box2d.b2Sweep", box2d.b2Sweep), box2d.b2Sweep.prototype.localCenter = null,
    goog.exportProperty(box2d.b2Sweep.prototype, "localCenter", box2d.b2Sweep.prototype.localCenter),
    box2d.b2Sweep.prototype.c0 = null, goog.exportProperty(box2d.b2Sweep.prototype, "c0", box2d.b2Sweep.prototype.c0),
    box2d.b2Sweep.prototype.c = null, goog.exportProperty(box2d.b2Sweep.prototype, "c", box2d.b2Sweep.prototype.c),
    box2d.b2Sweep.prototype.a0 = 0, goog.exportProperty(box2d.b2Sweep.prototype, "a0", box2d.b2Sweep.prototype.a0),
    box2d.b2Sweep.prototype.a = 0, goog.exportProperty(box2d.b2Sweep.prototype, "a", box2d.b2Sweep.prototype.a),
    box2d.b2Sweep.prototype.alpha0 = 0, goog.exportProperty(box2d.b2Sweep.prototype, "alpha0", box2d.b2Sweep.prototype.alpha0),
    box2d.b2Sweep.prototype.Clone = function() {
        return new box2d.b2Sweep().Copy(this);
    }, goog.exportProperty(box2d.b2Sweep.prototype, "Clone", box2d.b2Sweep.prototype.Clone),
    box2d.b2Sweep.prototype.Copy = function(o) {
        return this.localCenter.Copy(o.localCenter), this.c0.Copy(o.c0), this.c.Copy(o.c),
            this.a0 = o.a0, this.a = o.a, this.alpha0 = o.alpha0, this;
    }, goog.exportProperty(box2d.b2Sweep.prototype, "Copy", box2d.b2Sweep.prototype.Copy),
    box2d.b2Sweep.prototype.GetTransform = function(o, t) {
        var e = 1 - t;
        return o.p.x = e * this.c0.x + t * this.c.x, o.p.y = e * this.c0.y + t * this.c.y,
            o.q.SetAngle(e * this.a0 + t * this.a), o.p.SelfSub(box2d.b2Mul_R_V2(o.q, this.localCenter, box2d.b2Vec2.s_t0)),
            o;
    }, goog.exportProperty(box2d.b2Sweep.prototype, "GetTransform", box2d.b2Sweep.prototype.GetTransform),
    box2d.b2Sweep.prototype.Advance = function(o) {
        box2d.ENABLE_ASSERTS && box2d.b2Assert(1 > this.alpha0);
        var t = (o - this.alpha0) / (1 - this.alpha0);
        this.c0.x += t * (this.c.x - this.c0.x), this.c0.y += t * (this.c.y - this.c0.y),
            this.a0 += t * (this.a - this.a0), this.alpha0 = o;
    }, goog.exportProperty(box2d.b2Sweep.prototype, "Advance", box2d.b2Sweep.prototype.Advance),
    box2d.b2Sweep.prototype.Normalize = function() {
        this.a0 = box2d.b2WrapAngle(this.a0), this.a = box2d.b2WrapAngle(this.a);
    }, goog.exportProperty(box2d.b2Sweep.prototype, "Normalize", box2d.b2Sweep.prototype.Normalize),
    box2d.b2Dot = function(o, t) {
        if (o instanceof box2d.b2Vec2 && t instanceof box2d.b2Vec2) return box2d.b2Dot_V2_V2(o, t);
        if (o instanceof box2d.b2Vec3 && t instanceof box2d.b2Vec3) return box2d.b2Dot_V3_V3(o, t);
        throw Error();
    }, goog.exportSymbol("box2d.b2Dot", box2d.b2Dot), box2d.b2Cross = function(o, t, e) {
        if (o instanceof box2d.b2Vec2 && t instanceof box2d.b2Vec2) return box2d.b2Cross_V2_V2(o, t);
        if (o instanceof box2d.b2Vec2 && "number" == typeof t && e instanceof box2d.b2Vec2) return box2d.b2Cross_V2_S(o, t, e);
        if ("number" == typeof o && t instanceof box2d.b2Vec2 && e instanceof box2d.b2Vec2) return box2d.b2Cross_S_V2(o, t, e);
        if (o instanceof box2d.b2Vec3 && t instanceof box2d.b2Vec3 && e instanceof box2d.b2Vec3) return box2d.b2Cross_V3_V3(o, t, e);
        throw Error();
    }, goog.exportSymbol("box2d.b2Cross", box2d.b2Cross), box2d.b2Add = function(o, t, e) {
        if (o instanceof box2d.b2Vec2 && t instanceof box2d.b2Vec2 && e instanceof box2d.b2Vec2) return box2d.b2Add_V2_V2(o, t, e);
        if (o instanceof box2d.b2Vec3 && t instanceof box2d.b2Vec3 && e instanceof box2d.b2Vec3) return box2d.b2Add_V3_V3(o, t, e);
        throw Error();
    }, goog.exportSymbol("box2d.b2Add", box2d.b2Add), box2d.b2Sub = function(o, t, e) {
        if (o instanceof box2d.b2Vec2 && t instanceof box2d.b2Vec2 && e instanceof box2d.b2Vec2) return box2d.b2Sub_V2_V2(o, t, e);
        if (o instanceof box2d.b2Vec3 && t instanceof box2d.b2Vec3 && e instanceof box2d.b2Vec3) return box2d.b2Sub_V3_V3(o, t, e);
        throw Error();
    }, goog.exportSymbol("box2d.b2Sub", box2d.b2Sub), box2d.b2Mul = function(o, t, e) {
        if (o instanceof box2d.b2Mat22 && t instanceof box2d.b2Vec2 && e instanceof box2d.b2Vec2) return box2d.b2Mul_M22_V2(o, t, e);
        if (o instanceof box2d.b2Mat22 && t instanceof box2d.b2Mat22 && e instanceof box2d.b2Mat22) return box2d.b2Mul_M22_M22(o, t, e);
        if (o instanceof box2d.b2Mat33 && t instanceof box2d.b2Vec3 && e instanceof box2d.b2Vec3) return box2d.b2Mul_M33_V3(o, t, e);
        if (o instanceof box2d.b2Rot && t instanceof box2d.b2Rot && e instanceof box2d.b2Rot) return box2d.b2Mul_R_R(o, t, e);
        if (o instanceof box2d.b2Rot && t instanceof box2d.b2Vec2 && e instanceof box2d.b2Vec2) return box2d.b2Mul_R_V2(o, t, e);
        if (o instanceof box2d.b2Transform && t instanceof box2d.b2Vec2 && e instanceof box2d.b2Vec2) return box2d.b2Mul_X_V2(o, t, e);
        if (o instanceof box2d.b2Transform && t instanceof box2d.b2Transform && e instanceof box2d.b2Transform) return box2d.b2Mul_X_X(o, t, e);
        throw Error();
    }, goog.exportSymbol("box2d.b2Mul", box2d.b2Mul), box2d.b2Mul22 = function(o, t, e) {
        if (o instanceof box2d.b2Mat33 && t instanceof box2d.b2Vec2) return box2d.b2Mul22_M33_V2(o, t, e);
        throw Error();
    }, goog.exportSymbol("box2d.b2Mul22", box2d.b2Mul22), box2d.b2MulT = function(o, t, e) {
        if (o instanceof box2d.b2Mat22 && t instanceof box2d.b2Vec2 && e instanceof box2d.b2Vec2) return box2d.b2MulT_M22_V2(o, t, e);
        if (o instanceof box2d.b2Mat22 && t instanceof box2d.b2Mat22 && e instanceof box2d.b2Mat22) return box2d.b2MulT_M22_M22(o, t, e);
        if (o instanceof box2d.b2Rot && t instanceof box2d.b2Rot && e instanceof box2d.b2Rot) return box2d.b2MulT_R_R(o, t, e);
        if (o instanceof box2d.b2Rot && t instanceof box2d.b2Vec2 && e instanceof box2d.b2Vec2) return box2d.b2MulT_R_V2(o, t, e);
        if (o instanceof box2d.b2Transform && t instanceof box2d.b2Vec2 && e instanceof box2d.b2Vec2) return box2d.b2MulT_X_V2(o, t, e);
        if (o instanceof box2d.b2Transform && t instanceof box2d.b2Transform && e instanceof box2d.b2Transform) return box2d.b2MulT_X_X(o, t, e);
        throw Error();
    }, goog.exportSymbol("box2d.b2MulT", box2d.b2MulT), box2d.b2DistanceProxy = function() {
        this.m_buffer = box2d.b2Vec2.MakeArray(2);
    }, goog.exportSymbol("box2d.b2DistanceProxy", box2d.b2DistanceProxy), box2d.b2DistanceProxy.prototype.m_buffer = null,
    goog.exportProperty(box2d.b2DistanceProxy.prototype, "m_buffer", box2d.b2DistanceProxy.prototype.m_buffer),
    box2d.b2DistanceProxy.prototype.m_vertices = null, goog.exportProperty(box2d.b2DistanceProxy.prototype, "m_vertices", box2d.b2DistanceProxy.prototype.m_vertices),
    box2d.b2DistanceProxy.prototype.m_count = 0, goog.exportProperty(box2d.b2DistanceProxy.prototype, "m_count", box2d.b2DistanceProxy.prototype.m_count),
    box2d.b2DistanceProxy.prototype.m_radius = 0, goog.exportProperty(box2d.b2DistanceProxy.prototype, "m_radius", box2d.b2DistanceProxy.prototype.m_radius),
    box2d.b2DistanceProxy.prototype.Reset = function() {
        return this.m_vertices = null, this.m_radius = this.m_count = 0, this;
    }, goog.exportProperty(box2d.b2DistanceProxy.prototype, "Reset", box2d.b2DistanceProxy.prototype.Reset),
    box2d.b2DistanceProxy.prototype.SetShape = function(o, t) {
        o.SetupDistanceProxy(this, t);
    }, goog.exportProperty(box2d.b2DistanceProxy.prototype, "SetShape", box2d.b2DistanceProxy.prototype.SetShape),
    box2d.b2DistanceProxy.prototype.GetSupport = function(o) {
        for (var t = 0, e = box2d.b2Dot_V2_V2(this.m_vertices[0], o), r = 1; r < this.m_count; ++r) {
            var i = box2d.b2Dot_V2_V2(this.m_vertices[r], o);
            i > e && (t = r, e = i);
        }
        return t;
    }, goog.exportProperty(box2d.b2DistanceProxy.prototype, "GetSupport", box2d.b2DistanceProxy.prototype.GetSupport),
    box2d.b2DistanceProxy.prototype.GetSupportVertex = function(o, t) {
        for (var e = 0, r = box2d.b2Dot_V2_V2(this.m_vertices[0], o), i = 1; i < this.m_count; ++i) {
            var b = box2d.b2Dot_V2_V2(this.m_vertices[i], o);
            b > r && (e = i, r = b);
        }
        return t.Copy(this.m_vertices[e]);
    }, goog.exportProperty(box2d.b2DistanceProxy.prototype, "GetSupportVertex", box2d.b2DistanceProxy.prototype.GetSupportVertex),
    box2d.b2DistanceProxy.prototype.GetVertexCount = function() {
        return this.m_count;
    }, goog.exportProperty(box2d.b2DistanceProxy.prototype, "GetVertexCount", box2d.b2DistanceProxy.prototype.GetVertexCount),
    box2d.b2DistanceProxy.prototype.GetVertex = function(o) {
        return box2d.ENABLE_ASSERTS && box2d.b2Assert(0 <= o && o < this.m_count), this.m_vertices[o];
    }, goog.exportProperty(box2d.b2DistanceProxy.prototype, "GetVertex", box2d.b2DistanceProxy.prototype.GetVertex),
    box2d.b2SimplexCache = function() {
        this.indexA = box2d.b2MakeNumberArray(3), this.indexB = box2d.b2MakeNumberArray(3);
    }, goog.exportSymbol("box2d.b2SimplexCache", box2d.b2SimplexCache), box2d.b2SimplexCache.prototype.metric = 0,
    goog.exportProperty(box2d.b2SimplexCache.prototype, "metric", box2d.b2SimplexCache.prototype.metric),
    box2d.b2SimplexCache.prototype.count = 0, goog.exportProperty(box2d.b2SimplexCache.prototype, "count", box2d.b2SimplexCache.prototype.count),
    box2d.b2SimplexCache.prototype.indexA = null, goog.exportProperty(box2d.b2SimplexCache.prototype, "indexA", box2d.b2SimplexCache.prototype.indexA),
    box2d.b2SimplexCache.prototype.indexB = null, goog.exportProperty(box2d.b2SimplexCache.prototype, "indexB", box2d.b2SimplexCache.prototype.indexB),
    box2d.b2SimplexCache.prototype.Reset = function() {
        return this.count = this.metric = 0, this;
    }, goog.exportProperty(box2d.b2SimplexCache.prototype, "Reset", box2d.b2SimplexCache.prototype.Reset),
    box2d.b2DistanceInput = function() {
        this.proxyA = new box2d.b2DistanceProxy(), this.proxyB = new box2d.b2DistanceProxy(),
            this.transformA = new box2d.b2Transform(), this.transformB = new box2d.b2Transform();
    }, goog.exportSymbol("box2d.b2DistanceInput", box2d.b2DistanceInput), box2d.b2DistanceInput.prototype.proxyA = null,
    goog.exportProperty(box2d.b2DistanceInput.prototype, "proxyA", box2d.b2DistanceInput.prototype.proxyA),
    box2d.b2DistanceInput.prototype.proxyB = null, goog.exportProperty(box2d.b2DistanceInput.prototype, "proxyB", box2d.b2DistanceInput.prototype.proxyB),
    box2d.b2DistanceInput.prototype.transformA = null, goog.exportProperty(box2d.b2DistanceInput.prototype, "transformA", box2d.b2DistanceInput.prototype.transformA),
    box2d.b2DistanceInput.prototype.transformB = null, goog.exportProperty(box2d.b2DistanceInput.prototype, "transformB", box2d.b2DistanceInput.prototype.transformB),
    box2d.b2DistanceInput.prototype.useRadii = !1, goog.exportProperty(box2d.b2DistanceInput.prototype, "useRadii", box2d.b2DistanceInput.prototype.useRadii),
    box2d.b2DistanceInput.prototype.Reset = function() {
        return this.proxyA.Reset(), this.proxyB.Reset(), this.transformA.SetIdentity(),
            this.transformB.SetIdentity(), this.useRadii = !1, this;
    }, goog.exportProperty(box2d.b2DistanceInput.prototype, "Reset", box2d.b2DistanceInput.prototype.Reset),
    box2d.b2DistanceOutput = function() {
        this.pointA = new box2d.b2Vec2(), this.pointB = new box2d.b2Vec2();
    }, goog.exportSymbol("box2d.b2DistanceOutput", box2d.b2DistanceOutput), box2d.b2DistanceOutput.prototype.pointA = null,
    goog.exportProperty(box2d.b2DistanceOutput.prototype, "pointA", box2d.b2DistanceOutput.prototype.pointA),
    box2d.b2DistanceOutput.prototype.pointB = null, goog.exportProperty(box2d.b2DistanceOutput.prototype, "pointB", box2d.b2DistanceOutput.prototype.pointB),
    box2d.b2DistanceOutput.prototype.distance = 0, goog.exportProperty(box2d.b2DistanceOutput.prototype, "distance", box2d.b2DistanceOutput.prototype.distance),
    box2d.b2DistanceOutput.prototype.iterations = 0, goog.exportProperty(box2d.b2DistanceOutput.prototype, "iterations", box2d.b2DistanceOutput.prototype.iterations),
    box2d.b2DistanceOutput.prototype.Reset = function() {
        return this.pointA.SetZero(), this.pointB.SetZero(), this.iterations = this.distance = 0,
            this;
    }, goog.exportProperty(box2d.b2DistanceOutput.prototype, "Reset", box2d.b2DistanceOutput.prototype.Reset),
    box2d.b2_gjkCalls = 0, goog.exportSymbol("box2d.b2_gjkCalls", box2d.b2_gjkCalls),
    box2d.b2_gjkIters = 0, goog.exportSymbol("box2d.b2_gjkIters", box2d.b2_gjkIters),
    box2d.b2_gjkMaxIters = 0, goog.exportSymbol("box2d.b2_gjkMaxIters", box2d.b2_gjkMaxIters),
    box2d.b2SimplexVertex = function() {
        this.wA = new box2d.b2Vec2(), this.wB = new box2d.b2Vec2(), this.w = new box2d.b2Vec2();
    }, goog.exportSymbol("box2d.b2SimplexVertex", box2d.b2SimplexVertex), box2d.b2SimplexVertex.prototype.wA = null,
    goog.exportProperty(box2d.b2SimplexVertex.prototype, "wA", box2d.b2SimplexVertex.prototype.wA),
    box2d.b2SimplexVertex.prototype.wB = null, goog.exportProperty(box2d.b2SimplexVertex.prototype, "wB", box2d.b2SimplexVertex.prototype.wB),
    box2d.b2SimplexVertex.prototype.w = null, goog.exportProperty(box2d.b2SimplexVertex.prototype, "w", box2d.b2SimplexVertex.prototype.w),
    box2d.b2SimplexVertex.prototype.a = 0, goog.exportProperty(box2d.b2SimplexVertex.prototype, "a", box2d.b2SimplexVertex.prototype.a),
    box2d.b2SimplexVertex.prototype.indexA = 0, goog.exportProperty(box2d.b2SimplexVertex.prototype, "indexA", box2d.b2SimplexVertex.prototype.indexA),
    box2d.b2SimplexVertex.prototype.indexB = 0, goog.exportProperty(box2d.b2SimplexVertex.prototype, "indexB", box2d.b2SimplexVertex.prototype.indexB),
    box2d.b2SimplexVertex.prototype.Copy = function(o) {
        return this.wA.Copy(o.wA), this.wB.Copy(o.wB), this.w.Copy(o.w), this.a = o.a, this.indexA = o.indexA,
            this.indexB = o.indexB, this;
    }, goog.exportProperty(box2d.b2SimplexVertex.prototype, "Copy", box2d.b2SimplexVertex.prototype.Copy),
    box2d.b2Simplex = function() {
        this.m_v1 = new box2d.b2SimplexVertex(), this.m_v2 = new box2d.b2SimplexVertex(),
            this.m_v3 = new box2d.b2SimplexVertex(), this.m_vertices = Array(3), this.m_vertices[0] = this.m_v1,
            this.m_vertices[1] = this.m_v2, this.m_vertices[2] = this.m_v3;
    }, goog.exportSymbol("box2d.b2Simplex", box2d.b2Simplex), box2d.b2Simplex.prototype.m_v1 = null,
    goog.exportProperty(box2d.b2Simplex.prototype, "m_v1", box2d.b2Simplex.prototype.m_v1),
    box2d.b2Simplex.prototype.m_v2 = null, goog.exportProperty(box2d.b2Simplex.prototype, "m_v2", box2d.b2Simplex.prototype.m_v2),
    box2d.b2Simplex.prototype.m_v3 = null, goog.exportProperty(box2d.b2Simplex.prototype, "m_v3", box2d.b2Simplex.prototype.m_v3),
    box2d.b2Simplex.prototype.m_vertices = null, goog.exportProperty(box2d.b2Simplex.prototype, "m_vertices", box2d.b2Simplex.prototype.m_vertices),
    box2d.b2Simplex.prototype.m_count = 0, goog.exportProperty(box2d.b2Simplex.prototype, "m_count", box2d.b2Simplex.prototype.m_count),
    box2d.b2Simplex.prototype.ReadCache = function(o, t, e, r, i) {
        box2d.ENABLE_ASSERTS && box2d.b2Assert(0 <= o.count && 3 >= o.count), this.m_count = o.count;
        for (var b = this.m_vertices, n = 0; n < this.m_count; ++n) {
            var p = b[n];
            p.indexA = o.indexA[n], p.indexB = o.indexB[n];
            var s = t.GetVertex(p.indexA),
                a = r.GetVertex(p.indexB);
            box2d.b2Mul_X_V2(e, s, p.wA), box2d.b2Mul_X_V2(i, a, p.wB), box2d.b2Sub_V2_V2(p.wB, p.wA, p.w),
                p.a = 0;
        }
        1 < this.m_count && (o = o.metric, (n = this.GetMetric()) < .5 * o || 2 * o < n || n < box2d.b2_epsilon) && (this.m_count = 0),
            0 === this.m_count && ((p = b[0]).indexA = 0, p.indexB = 0, s = t.GetVertex(0),
                a = r.GetVertex(0), box2d.b2Mul_X_V2(e, s, p.wA), box2d.b2Mul_X_V2(i, a, p.wB),
                box2d.b2Sub_V2_V2(p.wB, p.wA, p.w), this.m_count = p.a = 1);
    }, goog.exportProperty(box2d.b2Simplex.prototype, "ReadCache", box2d.b2Simplex.prototype.ReadCache),
    box2d.b2Simplex.prototype.WriteCache = function(o) {
        o.metric = this.GetMetric(), o.count = this.m_count;
        for (var t = this.m_vertices, e = 0; e < this.m_count; ++e) o.indexA[e] = t[e].indexA,
            o.indexB[e] = t[e].indexB;
    }, goog.exportProperty(box2d.b2Simplex.prototype, "WriteCache", box2d.b2Simplex.prototype.WriteCache),
    box2d.b2Simplex.prototype.GetSearchDirection = function(o) {
        switch (this.m_count) {
            case 1:
                return o.Copy(this.m_v1.w).SelfNeg();

            case 2:
                var t = box2d.b2Sub_V2_V2(this.m_v2.w, this.m_v1.w, o);
                return 0 < box2d.b2Cross_V2_V2(t, box2d.b2Vec2.s_t0.Copy(this.m_v1.w).SelfNeg()) ? box2d.b2Cross_S_V2(1, t, o) : box2d.b2Cross_V2_S(t, 1, o);

            default:
                return box2d.ENABLE_ASSERTS && box2d.b2Assert(!1), o.SetZero();
        }
    }, goog.exportProperty(box2d.b2Simplex.prototype, "GetSearchDirection", box2d.b2Simplex.prototype.GetSearchDirection),
    box2d.b2Simplex.prototype.GetClosestPoint = function(o) {
        switch (this.m_count) {
            case 0:
                return box2d.ENABLE_ASSERTS && box2d.b2Assert(!1), o.SetZero();

            case 1:
                return o.Copy(this.m_v1.w);

            case 2:
                return o.Set(this.m_v1.a * this.m_v1.w.x + this.m_v2.a * this.m_v2.w.x, this.m_v1.a * this.m_v1.w.y + this.m_v2.a * this.m_v2.w.y);

            case 3:
                return o.SetZero();

            default:
                return box2d.ENABLE_ASSERTS && box2d.b2Assert(!1), o.SetZero();
        }
    }, goog.exportProperty(box2d.b2Simplex.prototype, "GetClosestPoint", box2d.b2Simplex.prototype.GetClosestPoint),
    box2d.b2Simplex.prototype.GetWitnessPoints = function(o, t) {
        switch (this.m_count) {
            case 0:
                box2d.ENABLE_ASSERTS && box2d.b2Assert(!1);
                break;

            case 1:
                o.Copy(this.m_v1.wA), t.Copy(this.m_v1.wB);
                break;

            case 2:
                o.x = this.m_v1.a * this.m_v1.wA.x + this.m_v2.a * this.m_v2.wA.x, o.y = this.m_v1.a * this.m_v1.wA.y + this.m_v2.a * this.m_v2.wA.y,
                    t.x = this.m_v1.a * this.m_v1.wB.x + this.m_v2.a * this.m_v2.wB.x, t.y = this.m_v1.a * this.m_v1.wB.y + this.m_v2.a * this.m_v2.wB.y;
                break;

            case 3:
                t.x = o.x = this.m_v1.a * this.m_v1.wA.x + this.m_v2.a * this.m_v2.wA.x + this.m_v3.a * this.m_v3.wA.x,
                    t.y = o.y = this.m_v1.a * this.m_v1.wA.y + this.m_v2.a * this.m_v2.wA.y + this.m_v3.a * this.m_v3.wA.y;
                break;

            default:
                box2d.ENABLE_ASSERTS && box2d.b2Assert(!1);
        }
    }, goog.exportProperty(box2d.b2Simplex.prototype, "GetWitnessPoints", box2d.b2Simplex.prototype.GetWitnessPoints),
    box2d.b2Simplex.prototype.GetMetric = function() {
        switch (this.m_count) {
            case 0:
                return box2d.ENABLE_ASSERTS && box2d.b2Assert(!1), 0;

            case 1:
                return 0;

            case 2:
                return box2d.b2Distance(this.m_v1.w, this.m_v2.w);

            case 3:
                return box2d.b2Cross_V2_V2(box2d.b2Sub_V2_V2(this.m_v2.w, this.m_v1.w, box2d.b2Vec2.s_t0), box2d.b2Sub_V2_V2(this.m_v3.w, this.m_v1.w, box2d.b2Vec2.s_t1));

            default:
                return box2d.ENABLE_ASSERTS && box2d.b2Assert(!1), 0;
        }
    }, goog.exportProperty(box2d.b2Simplex.prototype, "GetMetric", box2d.b2Simplex.prototype.GetMetric),
    box2d.b2Simplex.prototype.Solve2 = function() {
        var o = this.m_v1.w,
            t = this.m_v2.w,
            e = box2d.b2Sub_V2_V2(t, o, box2d.b2Simplex.s_e12);
        0 >= (o = -box2d.b2Dot_V2_V2(o, e)) ? this.m_count = this.m_v1.a = 1 : 0 >= (t = box2d.b2Dot_V2_V2(t, e)) ? (this.m_count = this.m_v2.a = 1,
            this.m_v1.Copy(this.m_v2)) : (e = 1 / (t + o), this.m_v1.a = t * e, this.m_v2.a = o * e,
            this.m_count = 2);
    }, goog.exportProperty(box2d.b2Simplex.prototype, "Solve2", box2d.b2Simplex.prototype.Solve2),
    box2d.b2Simplex.prototype.Solve3 = function() {
        var o = this.m_v1.w,
            t = this.m_v2.w,
            e = this.m_v3.w,
            r = box2d.b2Sub_V2_V2(t, o, box2d.b2Simplex.s_e12),
            i = box2d.b2Dot_V2_V2(o, r),
            b = box2d.b2Dot_V2_V2(t, r),
            n = (i = -i,
                box2d.b2Sub_V2_V2(e, o, box2d.b2Simplex.s_e13)),
            p = box2d.b2Dot_V2_V2(o, n),
            s = box2d.b2Dot_V2_V2(e, n),
            a = (p = -p,
                box2d.b2Sub_V2_V2(e, t, box2d.b2Simplex.s_e23)),
            d = box2d.b2Dot_V2_V2(t, a);
        a = box2d.b2Dot_V2_V2(e, a), d = -d, r = (n = box2d.b2Cross_V2_V2(r, n)) * box2d.b2Cross_V2_V2(t, e),
            e = n * box2d.b2Cross_V2_V2(e, o), o = n * box2d.b2Cross_V2_V2(o, t);
        0 >= i && 0 >= p ? this.m_count = this.m_v1.a = 1 : 0 < b && 0 < i && 0 >= o ? (s = 1 / (b + i),
            this.m_v1.a = b * s, this.m_v2.a = i * s, this.m_count = 2) : 0 < s && 0 < p && 0 >= e ? (b = 1 / (s + p),
            this.m_v1.a = s * b, this.m_v3.a = p * b, this.m_count = 2, this.m_v2.Copy(this.m_v3)) : 0 >= b && 0 >= d ? (this.m_count = this.m_v2.a = 1,
            this.m_v1.Copy(this.m_v2)) : 0 >= s && 0 >= a ? (this.m_count = this.m_v3.a = 1,
            this.m_v1.Copy(this.m_v3)) : 0 < a && 0 < d && 0 >= r ? (b = 1 / (a + d), this.m_v2.a = a * b,
            this.m_v3.a = d * b, this.m_count = 2, this.m_v1.Copy(this.m_v3)) : (b = 1 / (r + e + o),
            this.m_v1.a = r * b, this.m_v2.a = e * b, this.m_v3.a = o * b, this.m_count = 3);
    }, goog.exportProperty(box2d.b2Simplex.prototype, "Solve3", box2d.b2Simplex.prototype.Solve3),
    box2d.b2Simplex.s_e12 = new box2d.b2Vec2(), box2d.b2Simplex.s_e13 = new box2d.b2Vec2(),
    box2d.b2Simplex.s_e23 = new box2d.b2Vec2(), box2d.b2ShapeDistance = function(o, t, e) {
        ++box2d.b2_gjkCalls;
        var r = e.proxyA,
            i = e.proxyB,
            b = e.transformA,
            n = e.transformB,
            p = box2d.b2Distance.s_simplex;
        p.ReadCache(t, r, b, i, n);
        for (var s = p.m_vertices, a = box2d.b2Distance.s_saveA, d = box2d.b2Distance.s_saveB, l = 0, x = 0; 20 > x;) {
            l = p.m_count;
            for (var y = 0; y < l; ++y) a[y] = s[y].indexA, d[y] = s[y].indexB;
            switch (p.m_count) {
                case 1:
                    break;

                case 2:
                    p.Solve2();
                    break;

                case 3:
                    p.Solve3();
                    break;

                default:
                    box2d.ENABLE_ASSERTS && box2d.b2Assert(!1);
            }
            if (3 === p.m_count) break;
            var c = p.GetClosestPoint(box2d.b2Distance.s_p);
            if (c.LengthSquared(), (y = p.GetSearchDirection(box2d.b2Distance.s_d)).LengthSquared() < box2d.b2_epsilon_sq) break;
            (c = s[p.m_count]).indexA = r.GetSupport(box2d.b2MulT_R_V2(b.q, box2d.b2Vec2.s_t0.Copy(y).SelfNeg(), box2d.b2Distance.s_supportA)),
                box2d.b2Mul_X_V2(b, r.GetVertex(c.indexA), c.wA), c.indexB = i.GetSupport(box2d.b2MulT_R_V2(n.q, y, box2d.b2Distance.s_supportB)),
                box2d.b2Mul_X_V2(n, i.GetVertex(c.indexB), c.wB), box2d.b2Sub_V2_V2(c.wB, c.wA, c.w),
                ++x, ++box2d.b2_gjkIters;
            var _ = !1;
            for (y = 0; y < l; ++y)
                if (c.indexA === a[y] && c.indexB === d[y]) {
                    _ = !0;
                    break;
                }
            if (_) break;
            ++p.m_count;
        }
        box2d.b2_gjkMaxIters = box2d.b2Max(box2d.b2_gjkMaxIters, x), p.GetWitnessPoints(o.pointA, o.pointB),
            o.distance = box2d.b2Distance(o.pointA, o.pointB), o.iterations = x, p.WriteCache(t),
            e.useRadii && (t = r.m_radius, i = i.m_radius, o.distance > t + i && o.distance > box2d.b2_epsilon ? (o.distance -= t + i,
                (e = box2d.b2Sub_V2_V2(o.pointB, o.pointA, box2d.b2Distance.s_normal)).Normalize(),
                o.pointA.SelfMulAdd(t, e), o.pointB.SelfMulSub(i, e)) : (c = box2d.b2Mid_V2_V2(o.pointA, o.pointB, box2d.b2Distance.s_p),
                o.pointA.Copy(c), o.pointB.Copy(c), o.distance = 0));
    }, goog.exportSymbol("box2d.b2ShapeDistance", box2d.b2ShapeDistance), box2d.b2Distance.s_simplex = new box2d.b2Simplex(),
    box2d.b2Distance.s_saveA = box2d.b2MakeNumberArray(3), box2d.b2Distance.s_saveB = box2d.b2MakeNumberArray(3),
    box2d.b2Distance.s_p = new box2d.b2Vec2(), box2d.b2Distance.s_d = new box2d.b2Vec2(),
    box2d.b2Distance.s_normal = new box2d.b2Vec2(), box2d.b2Distance.s_supportA = new box2d.b2Vec2(),
    box2d.b2Distance.s_supportB = new box2d.b2Vec2(), box2d.b2Collision = {}, box2d.b2ContactFeatureType = {
        e_vertex: 0,
        e_face: 1
    }, goog.exportSymbol("box2d.b2ContactFeatureType", box2d.b2ContactFeatureType),
    goog.exportProperty(box2d.b2ContactFeatureType, "e_vertex", box2d.b2ContactFeatureType.e_vertex),
    goog.exportProperty(box2d.b2ContactFeatureType, "e_face", box2d.b2ContactFeatureType.e_face),
    box2d.b2ContactFeature = function() {}, goog.exportSymbol("box2d.b2ContactFeature", box2d.b2ContactFeature),
    box2d.b2ContactFeature.prototype._key = 0, goog.exportProperty(box2d.b2ContactFeature.prototype, "_key", box2d.b2ContactFeature.prototype._key),
    box2d.b2ContactFeature.prototype._key_invalid = !1, goog.exportProperty(box2d.b2ContactFeature.prototype, "_key_invalid", box2d.b2ContactFeature.prototype._key_invalid),
    box2d.b2ContactFeature.prototype._indexA = 0, goog.exportProperty(box2d.b2ContactFeature.prototype, "_indexA", box2d.b2ContactFeature.prototype._indexA),
    box2d.b2ContactFeature.prototype._indexB = 0, goog.exportProperty(box2d.b2ContactFeature.prototype, "_indexB", box2d.b2ContactFeature.prototype._indexB),
    box2d.b2ContactFeature.prototype._typeA = 0, goog.exportProperty(box2d.b2ContactFeature.prototype, "_typeA", box2d.b2ContactFeature.prototype._typeA),
    box2d.b2ContactFeature.prototype._typeB = 0, goog.exportProperty(box2d.b2ContactFeature.prototype, "_typeB", box2d.b2ContactFeature.prototype._typeB),
    Object.defineProperty(box2d.b2ContactFeature.prototype, "key", {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return this._key_invalid && (this._key_invalid = !1, this._key = this._indexA | this._indexB << 8 | this._typeA << 16 | this._typeB << 24),
                this._key;
        },
        set: function(o) {
            this._key = o, this._indexA = 255 & this._key, this._indexB = this._key >> 8 & 255,
                this._typeA = this._key >> 16 & 255, this._typeB = this._key >> 24 & 255;
        }
    }), Object.defineProperty(box2d.b2ContactFeature.prototype, "indexA", {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return this._indexA;
        },
        set: function(o) {
            this._indexA = o, this._key_invalid = !0;
        }
    }), Object.defineProperty(box2d.b2ContactFeature.prototype, "indexB", {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return this._indexB;
        },
        set: function(o) {
            this._indexB = o, this._key_invalid = !0;
        }
    }), Object.defineProperty(box2d.b2ContactFeature.prototype, "typeA", {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return this._typeA;
        },
        set: function(o) {
            this._typeA = o, this._key_invalid = !0;
        }
    }), Object.defineProperty(box2d.b2ContactFeature.prototype, "typeB", {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return this._typeB;
        },
        set: function(o) {
            this._typeB = o, this._key_invalid = !0;
        }
    }), box2d.b2ContactID = function() {
        this.cf = new box2d.b2ContactFeature();
    }, goog.exportSymbol("box2d.b2ContactID", box2d.b2ContactID), box2d.b2ContactID.prototype.cf = null,
    goog.exportProperty(box2d.b2ContactID.prototype, "cf", box2d.b2ContactID.prototype.cf),
    box2d.b2ContactID.prototype.key = 0, goog.exportProperty(box2d.b2ContactID.prototype, "key", box2d.b2ContactID.prototype.key),
    Object.defineProperty(box2d.b2ContactID.prototype, "key", {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return this.cf.key;
        },
        set: function(o) {
            this.cf.key = o;
        }
    }), box2d.b2ContactID.prototype.Copy = function(o) {
        return this.key = o.key, this;
    }, goog.exportProperty(box2d.b2ContactID.prototype, "Copy", box2d.b2ContactID.prototype.Copy),
    box2d.b2ContactID.prototype.Clone = function() {
        return new box2d.b2ContactID().Copy(this);
    }, goog.exportProperty(box2d.b2ContactID.prototype, "Clone", box2d.b2ContactID.prototype.Clone),
    box2d.b2ManifoldPoint = function() {
        this.localPoint = new box2d.b2Vec2(), this.id = new box2d.b2ContactID();
    }, goog.exportSymbol("box2d.b2ManifoldPoint", box2d.b2ManifoldPoint), box2d.b2ManifoldPoint.prototype.localPoint = null,
    goog.exportProperty(box2d.b2ManifoldPoint.prototype, "localPoint", box2d.b2ManifoldPoint.prototype.localPoint),
    box2d.b2ManifoldPoint.prototype.normalImpulse = 0, goog.exportProperty(box2d.b2ManifoldPoint.prototype, "normalImpulse", box2d.b2ManifoldPoint.prototype.normalImpulse),
    box2d.b2ManifoldPoint.prototype.tangentImpulse = 0, goog.exportProperty(box2d.b2ManifoldPoint.prototype, "tangentImpulse", box2d.b2ManifoldPoint.prototype.tangentImpulse),
    box2d.b2ManifoldPoint.prototype.id = null, goog.exportProperty(box2d.b2ManifoldPoint.prototype, "id", box2d.b2ManifoldPoint.prototype.id),
    box2d.b2ManifoldPoint.MakeArray = function(o) {
        return box2d.b2MakeArray(o, function(o) {
            return new box2d.b2ManifoldPoint();
        });
    }, goog.exportProperty(box2d.b2ManifoldPoint, "MakeArray", box2d.b2ManifoldPoint.MakeArray),
    box2d.b2ManifoldPoint.prototype.Reset = function() {
        this.localPoint.SetZero(), this.tangentImpulse = this.normalImpulse = 0, this.id.key = 0;
    }, goog.exportProperty(box2d.b2ManifoldPoint.prototype, "Reset", box2d.b2ManifoldPoint.prototype.Reset);

box2d.b2ManifoldPoint.prototype.Copy = function(o) {
        return this.localPoint.Copy(o.localPoint), this.normalImpulse = o.normalImpulse,
            this.tangentImpulse = o.tangentImpulse, this.id.Copy(o.id), this;
    }, goog.exportProperty(box2d.b2ManifoldPoint.prototype, "Copy", box2d.b2ManifoldPoint.prototype.Copy),
    box2d.b2ManifoldType = {
        e_unknown: -1,
        e_circles: 0,
        e_faceA: 1,
        e_faceB: 2
    }, goog.exportSymbol("box2d.b2ManifoldType", box2d.b2ManifoldType), goog.exportProperty(box2d.b2ManifoldType, "e_unknown", box2d.b2ManifoldType.e_unknown),
    goog.exportProperty(box2d.b2ManifoldType, "e_circles", box2d.b2ManifoldType.e_circles),
    goog.exportProperty(box2d.b2ManifoldType, "e_faceA", box2d.b2ManifoldType.e_faceA),
    goog.exportProperty(box2d.b2ManifoldType, "e_faceB", box2d.b2ManifoldType.e_faceB),
    box2d.b2Manifold = function() {
        this.points = box2d.b2ManifoldPoint.MakeArray(box2d.b2_maxManifoldPoints), this.localNormal = new box2d.b2Vec2(),
            this.localPoint = new box2d.b2Vec2(), this.type = box2d.b2ManifoldType.e_unknown,
            this.pointCount = 0;
    }, goog.exportSymbol("box2d.b2Manifold", box2d.b2Manifold), box2d.b2Manifold.prototype.points = null,
    goog.exportProperty(box2d.b2Manifold.prototype, "points", box2d.b2Manifold.prototype.points),
    box2d.b2Manifold.prototype.localNormal = null, goog.exportProperty(box2d.b2Manifold.prototype, "localNormal", box2d.b2Manifold.prototype.localNormal),
    box2d.b2Manifold.prototype.localPoint = null, goog.exportProperty(box2d.b2Manifold.prototype, "localPoint", box2d.b2Manifold.prototype.localPoint),
    box2d.b2Manifold.prototype.type = box2d.b2ManifoldType.e_unknown, goog.exportProperty(box2d.b2Manifold.prototype, "type", box2d.b2Manifold.prototype.type),
    box2d.b2Manifold.prototype.pointCount = 0, goog.exportProperty(box2d.b2Manifold.prototype, "pointCount", box2d.b2Manifold.prototype.pointCount),
    box2d.b2Manifold.prototype.Reset = function() {
        for (var o = 0, t = box2d.b2_maxManifoldPoints; o < t; ++o) this.points[o].Reset();
        this.localNormal.SetZero(), this.localPoint.SetZero(), this.type = box2d.b2ManifoldType.e_unknown,
            this.pointCount = 0;
    }, goog.exportProperty(box2d.b2Manifold.prototype, "Reset", box2d.b2Manifold.prototype.Reset),
    box2d.b2Manifold.prototype.Copy = function(o) {
        this.pointCount = o.pointCount;
        for (var t = 0, e = box2d.b2_maxManifoldPoints; t < e; ++t) this.points[t].Copy(o.points[t]);
        return this.localNormal.Copy(o.localNormal), this.localPoint.Copy(o.localPoint),
            this.type = o.type, this;
    }, goog.exportProperty(box2d.b2Manifold.prototype, "Copy", box2d.b2Manifold.prototype.Copy),
    box2d.b2Manifold.prototype.Clone = function() {
        return new box2d.b2Manifold().Copy(this);
    }, goog.exportProperty(box2d.b2Manifold.prototype, "Clone", box2d.b2Manifold.prototype.Clone),
    box2d.b2WorldManifold = function() {
        this.normal = new box2d.b2Vec2(), this.points = box2d.b2Vec2.MakeArray(box2d.b2_maxManifoldPoints),
            this.separations = box2d.b2MakeNumberArray(box2d.b2_maxManifoldPoints);
    }, goog.exportSymbol("box2d.b2WorldManifold", box2d.b2WorldManifold), box2d.b2WorldManifold.prototype.normal = null,
    goog.exportProperty(box2d.b2WorldManifold.prototype, "normal", box2d.b2WorldManifold.prototype.normal),
    box2d.b2WorldManifold.prototype.points = null, goog.exportProperty(box2d.b2WorldManifold.prototype, "points", box2d.b2WorldManifold.prototype.points),
    box2d.b2WorldManifold.prototype.separations = null, goog.exportProperty(box2d.b2WorldManifold.prototype, "separations", box2d.b2WorldManifold.prototype.separations),
    box2d.b2WorldManifold.prototype.Initialize = function(o, t, e, r, i) {
        if (0 !== o.pointCount) switch (o.type) {
            case box2d.b2ManifoldType.e_circles:
                this.normal.Set(1, 0), t = box2d.b2Mul_X_V2(t, o.localPoint, box2d.b2WorldManifold.prototype.Initialize.s_pointA),
                    o = box2d.b2Mul_X_V2(r, o.points[0].localPoint, box2d.b2WorldManifold.prototype.Initialize.s_pointB),
                    box2d.b2DistanceSquared(t, o) > box2d.b2_epsilon_sq && box2d.b2Sub_V2_V2(o, t, this.normal).SelfNormalize();
                var b = box2d.b2AddMul_V2_S_V2(t, e, this.normal, box2d.b2WorldManifold.prototype.Initialize.s_cA),
                    n = box2d.b2SubMul_V2_S_V2(o, i, this.normal, box2d.b2WorldManifold.prototype.Initialize.s_cB);
                box2d.b2Mid_V2_V2(b, n, this.points[0]), this.separations[0] = box2d.b2Dot_V2_V2(box2d.b2Sub_V2_V2(n, b, box2d.b2Vec2.s_t0), this.normal);
                break;

            case box2d.b2ManifoldType.e_faceA:
                box2d.b2Mul_R_V2(t.q, o.localNormal, this.normal);
                for (var p = box2d.b2Mul_X_V2(t, o.localPoint, box2d.b2WorldManifold.prototype.Initialize.s_planePoint), s = 0, a = o.pointCount; s < a; ++s) {
                    var d = box2d.b2Mul_X_V2(r, o.points[s].localPoint, box2d.b2WorldManifold.prototype.Initialize.s_clipPoint);
                    b = e - box2d.b2Dot_V2_V2(box2d.b2Sub_V2_V2(d, p, box2d.b2Vec2.s_t0), this.normal),
                        b = box2d.b2AddMul_V2_S_V2(d, b, this.normal, box2d.b2WorldManifold.prototype.Initialize.s_cA),
                        n = box2d.b2SubMul_V2_S_V2(d, i, this.normal, box2d.b2WorldManifold.prototype.Initialize.s_cB);
                    box2d.b2Mid_V2_V2(b, n, this.points[s]), this.separations[s] = box2d.b2Dot_V2_V2(box2d.b2Sub_V2_V2(n, b, box2d.b2Vec2.s_t0), this.normal);
                }
                break;

            case box2d.b2ManifoldType.e_faceB:
                for (box2d.b2Mul_R_V2(r.q, o.localNormal, this.normal), p = box2d.b2Mul_X_V2(r, o.localPoint, box2d.b2WorldManifold.prototype.Initialize.s_planePoint),
                    s = 0, a = o.pointCount; s < a; ++s) d = box2d.b2Mul_X_V2(t, o.points[s].localPoint, box2d.b2WorldManifold.prototype.Initialize.s_clipPoint),
                    b = i - box2d.b2Dot_V2_V2(box2d.b2Sub_V2_V2(d, p, box2d.b2Vec2.s_t0), this.normal),
                    n = box2d.b2AddMul_V2_S_V2(d, b, this.normal, box2d.b2WorldManifold.prototype.Initialize.s_cB),
                    b = box2d.b2SubMul_V2_S_V2(d, e, this.normal, box2d.b2WorldManifold.prototype.Initialize.s_cA),
                    box2d.b2Mid_V2_V2(b, n, this.points[s]), this.separations[s] = box2d.b2Dot_V2_V2(box2d.b2Sub_V2_V2(b, n, box2d.b2Vec2.s_t0), this.normal);
                this.normal.SelfNeg();
        }
    }, goog.exportProperty(box2d.b2WorldManifold.prototype, "Initialize", box2d.b2WorldManifold.prototype.Initialize),
    box2d.b2WorldManifold.prototype.Initialize.s_pointA = new box2d.b2Vec2(), box2d.b2WorldManifold.prototype.Initialize.s_pointB = new box2d.b2Vec2(),
    box2d.b2WorldManifold.prototype.Initialize.s_cA = new box2d.b2Vec2(), box2d.b2WorldManifold.prototype.Initialize.s_cB = new box2d.b2Vec2(),
    box2d.b2WorldManifold.prototype.Initialize.s_planePoint = new box2d.b2Vec2(), box2d.b2WorldManifold.prototype.Initialize.s_clipPoint = new box2d.b2Vec2(),
    box2d.b2PointState = {
        b2_nullState: 0,
        b2_addState: 1,
        b2_persistState: 2,
        b2_removeState: 3
    }, goog.exportSymbol("box2d.b2PointState", box2d.b2PointState), goog.exportProperty(box2d.b2PointState, "b2_nullState   ", box2d.b2PointState.b2_nullState),
    goog.exportProperty(box2d.b2PointState, "b2_addState    ", box2d.b2PointState.b2_addState),
    goog.exportProperty(box2d.b2PointState, "b2_persistState", box2d.b2PointState.b2_persistState),
    goog.exportProperty(box2d.b2PointState, "b2_removeState ", box2d.b2PointState.b2_removeState),
    box2d.b2GetPointStates = function(o, t, e, r) {
        for (var i = 0, b = e.pointCount; i < b; ++i) {
            var n = (n = e.points[i].id).key;
            o[i] = box2d.b2PointState.b2_removeState;
            for (var p = 0, s = r.pointCount; p < s; ++p)
                if (r.points[p].id.key === n) {
                    o[i] = box2d.b2PointState.b2_persistState;
                    break;
                }
        }
        for (b = box2d.b2_maxManifoldPoints; i < b; ++i) o[i] = box2d.b2PointState.b2_nullState;
        for (i = 0, b = r.pointCount; i < b; ++i)
            for (n = (n = r.points[i].id).key, t[i] = box2d.b2PointState.b2_addState,
                p = 0, s = e.pointCount; p < s; ++p)
                if (e.points[p].id.key === n) {
                    t[i] = box2d.b2PointState.b2_persistState;
                    break;
                }
        for (b = box2d.b2_maxManifoldPoints; i < b; ++i) t[i] = box2d.b2PointState.b2_nullState;
    }, goog.exportSymbol("box2d.b2GetPointStates", box2d.b2GetPointStates), box2d.b2ClipVertex = function() {
        this.v = new box2d.b2Vec2(), this.id = new box2d.b2ContactID();
    }, goog.exportSymbol("box2d.b2ClipVertex", box2d.b2ClipVertex), box2d.b2ClipVertex.prototype.v = null,
    goog.exportProperty(box2d.b2ClipVertex.prototype, "v", box2d.b2ClipVertex.prototype.v),
    box2d.b2ClipVertex.prototype.id = null, goog.exportProperty(box2d.b2ClipVertex.prototype, "id", box2d.b2ClipVertex.prototype.id),
    box2d.b2ClipVertex.MakeArray = function(o) {
        return box2d.b2MakeArray(o, function(o) {
            return new box2d.b2ClipVertex();
        });
    }, goog.exportProperty(box2d.b2ClipVertex, "MakeArray", box2d.b2ClipVertex.MakeArray),
    box2d.b2ClipVertex.prototype.Copy = function(o) {
        return this.v.Copy(o.v), this.id.Copy(o.id), this;
    }, goog.exportProperty(box2d.b2ClipVertex.prototype, "Copy", box2d.b2ClipVertex.prototype.Copy),
    box2d.b2RayCastInput = function() {
        this.p1 = new box2d.b2Vec2(), this.p2 = new box2d.b2Vec2(), this.maxFraction = 1;
    }, goog.exportSymbol("box2d.b2RayCastInput", box2d.b2RayCastInput), box2d.b2RayCastInput.prototype.p1 = null,
    goog.exportProperty(box2d.b2RayCastInput.prototype, "p1", box2d.b2RayCastInput.prototype.p1),
    box2d.b2RayCastInput.prototype.p2 = null, goog.exportProperty(box2d.b2RayCastInput.prototype, "p2", box2d.b2RayCastInput.prototype.p2),
    box2d.b2RayCastInput.prototype.maxFraction = 1, goog.exportProperty(box2d.b2RayCastInput.prototype, "maxFraction", box2d.b2RayCastInput.prototype.maxFraction),
    box2d.b2RayCastInput.prototype.Copy = function(o) {
        return this.p1.Copy(o.p1), this.p2.Copy(o.p2), this.maxFraction = o.maxFraction,
            this;
    }, goog.exportProperty(box2d.b2RayCastInput.prototype, "Copy", box2d.b2RayCastInput.prototype.Copy),
    box2d.b2RayCastOutput = function() {
        this.normal = new box2d.b2Vec2(), this.fraction = 0;
    }, goog.exportSymbol("box2d.b2RayCastOutput", box2d.b2RayCastOutput), box2d.b2RayCastOutput.prototype.normal = null,
    goog.exportProperty(box2d.b2RayCastOutput.prototype, "normal", box2d.b2RayCastOutput.prototype.normal),
    box2d.b2RayCastOutput.prototype.fraction = 0, goog.exportProperty(box2d.b2RayCastOutput.prototype, "fraction", box2d.b2RayCastOutput.prototype.fraction),
    box2d.b2RayCastOutput.prototype.Copy = function(o) {
        return this.normal.Copy(o.normal), this.fraction = o.fraction, this;
    }, goog.exportProperty(box2d.b2RayCastOutput.prototype, "Copy", box2d.b2RayCastOutput.prototype.Copy),
    box2d.b2AABB = function() {
        this.lowerBound = new box2d.b2Vec2(), this.upperBound = new box2d.b2Vec2(), this.m_out_center = new box2d.b2Vec2(),
            this.m_out_extent = new box2d.b2Vec2();
    }, goog.exportSymbol("box2d.b2AABB", box2d.b2AABB), box2d.b2AABB.prototype.lowerBound = null,
    goog.exportProperty(box2d.b2AABB.prototype, "lowerBound", box2d.b2AABB.prototype.lowerBound),
    box2d.b2AABB.prototype.upperBound = null, goog.exportProperty(box2d.b2AABB.prototype, "upperBound", box2d.b2AABB.prototype.upperBound),
    box2d.b2AABB.prototype.m_out_center = null, goog.exportProperty(box2d.b2AABB.prototype, "m_out_center", box2d.b2AABB.prototype.m_out_center),
    box2d.b2AABB.prototype.m_out_extent = null, goog.exportProperty(box2d.b2AABB.prototype, "m_out_extent", box2d.b2AABB.prototype.m_out_extent),
    box2d.b2AABB.prototype.Clone = function() {
        return new box2d.b2AABB().Copy(this);
    }, goog.exportProperty(box2d.b2AABB.prototype, "Clone", box2d.b2AABB.prototype.Clone),
    box2d.b2AABB.prototype.Copy = function(o) {
        return this.lowerBound.Copy(o.lowerBound), this.upperBound.Copy(o.upperBound), this;
    }, goog.exportProperty(box2d.b2AABB.prototype, "Copy", box2d.b2AABB.prototype.Copy),
    box2d.b2AABB.prototype.IsValid = function() {
        var o = this.upperBound.y - this.lowerBound.y;
        return (o = 0 <= this.upperBound.x - this.lowerBound.x && 0 <= o) && this.lowerBound.IsValid() && this.upperBound.IsValid();
    }, goog.exportProperty(box2d.b2AABB.prototype, "IsValid", box2d.b2AABB.prototype.IsValid),
    box2d.b2AABB.prototype.GetCenter = function() {
        return box2d.b2Mid_V2_V2(this.lowerBound, this.upperBound, this.m_out_center);
    }, goog.exportProperty(box2d.b2AABB.prototype, "GetCenter", box2d.b2AABB.prototype.GetCenter),
    box2d.b2AABB.prototype.GetExtents = function() {
        return box2d.b2Ext_V2_V2(this.lowerBound, this.upperBound, this.m_out_extent);
    }, goog.exportProperty(box2d.b2AABB.prototype, "GetExtents", box2d.b2AABB.prototype.GetExtents),
    box2d.b2AABB.prototype.GetPerimeter = function() {
        return 2 * (this.upperBound.x - this.lowerBound.x + (this.upperBound.y - this.lowerBound.y));
    }, goog.exportProperty(box2d.b2AABB.prototype, "GetPerimeter", box2d.b2AABB.prototype.GetPerimeter),
    box2d.b2AABB.prototype.Combine = function(o, t) {
        switch (arguments.length) {
            case 1:
                return this.Combine1(o);

            case 2:
                return this.Combine2(o, t || new box2d.b2AABB());

            default:
                throw Error();
        }
    }, box2d.b2AABB.prototype.Combine1 = function(o) {
        return this.lowerBound.x = box2d.b2Min(this.lowerBound.x, o.lowerBound.x), this.lowerBound.y = box2d.b2Min(this.lowerBound.y, o.lowerBound.y),
            this.upperBound.x = box2d.b2Max(this.upperBound.x, o.upperBound.x), this.upperBound.y = box2d.b2Max(this.upperBound.y, o.upperBound.y),
            this;
    }, goog.exportProperty(box2d.b2AABB.prototype, "Combine1", box2d.b2AABB.prototype.Combine1),
    box2d.b2AABB.prototype.Combine2 = function(o, t) {
        return this.lowerBound.x = box2d.b2Min(o.lowerBound.x, t.lowerBound.x), this.lowerBound.y = box2d.b2Min(o.lowerBound.y, t.lowerBound.y),
            this.upperBound.x = box2d.b2Max(o.upperBound.x, t.upperBound.x), this.upperBound.y = box2d.b2Max(o.upperBound.y, t.upperBound.y),
            this;
    }, goog.exportProperty(box2d.b2AABB.prototype, "Combine2", box2d.b2AABB.prototype.Combine2),
    box2d.b2AABB.Combine = function(o, t, e) {
        return e.Combine2(o, t), e;
    }, goog.exportProperty(box2d.b2AABB, "Combine", box2d.b2AABB.Combine), box2d.b2AABB.prototype.Contains = function(o) {
        return this.lowerBound.x <= o.lowerBound.x && this.lowerBound.y <= o.lowerBound.y && o.upperBound.x <= this.upperBound.x && o.upperBound.y <= this.upperBound.y;
    }, goog.exportProperty(box2d.b2AABB.prototype, "Contains", box2d.b2AABB.prototype.Contains),
    box2d.b2AABB.prototype.RayCast = function(o, t) {
        var e = -box2d.b2_maxFloat,
            r = box2d.b2_maxFloat,
            i = t.p1.x,
            b = t.p1.y,
            n = t.p2.x - t.p1.x,
            p = t.p2.y - t.p1.y,
            s = box2d.b2Abs(n),
            a = box2d.b2Abs(p),
            d = o.normal;
        if (s < box2d.b2_epsilon) {
            if (i < this.lowerBound.x || this.upperBound.x < i) return !1;
        } else if (s = 1 / n, n = (this.lowerBound.x - i) * s, i = (this.upperBound.x - i) * s,
            s = -1, n > i && (s = n, n = i, i = s, s = 1), n > e && (d.x = s, d.y = 0, e = n),
            e > (r = box2d.b2Min(r, i))) return !1;
        if (a < box2d.b2_epsilon) {
            if (b < this.lowerBound.y || this.upperBound.y < b) return !1;
        } else if (s = 1 / p, n = (this.lowerBound.y - b) * s, i = (this.upperBound.y - b) * s,
            s = -1, n > i && (s = n, n = i, i = s, s = 1), n > e && (d.x = 0, d.y = s, e = n),
            e > (r = box2d.b2Min(r, i))) return !1;
        return !(0 > e || t.maxFraction < e) && (o.fraction = e, !0);
    }, goog.exportProperty(box2d.b2AABB.prototype, "RayCast", box2d.b2AABB.prototype.RayCast),
    box2d.b2AABB.prototype.TestOverlap = function(o) {
        var t = o.lowerBound.y - this.upperBound.y,
            e = this.lowerBound.y - o.upperBound.y;
        return !(0 < o.lowerBound.x - this.upperBound.x || 0 < t || 0 < this.lowerBound.x - o.upperBound.x || 0 < e);
    }, goog.exportProperty(box2d.b2AABB.prototype, "TestOverlap", box2d.b2AABB.prototype.TestOverlap),
    box2d.b2TestOverlap_AABB = function(o, t) {
        var e = t.lowerBound.y - o.upperBound.y,
            r = o.lowerBound.y - t.upperBound.y;
        return !(0 < t.lowerBound.x - o.upperBound.x || 0 < e || 0 < o.lowerBound.x - t.upperBound.x || 0 < r);
    }, goog.exportSymbol("box2d.b2TestOverlap_AABB", box2d.b2TestOverlap_AABB), box2d.b2ClipSegmentToLine = function(o, t, e, r, i) {
        var b = 0,
            n = t[0];
        t = t[1];
        var p = box2d.b2Dot_V2_V2(e, n.v) - r;
        return e = box2d.b2Dot_V2_V2(e, t.v) - r, 0 >= p && o[b++].Copy(n), 0 >= e && o[b++].Copy(t),
            0 > p * e && (e = p / (p - e), (r = o[b].v).x = n.v.x + e * (t.v.x - n.v.x), r.y = n.v.y + e * (t.v.y - n.v.y),
                (o = o[b].id).cf.indexA = i, o.cf.indexB = n.id.cf.indexB, o.cf.typeA = box2d.b2ContactFeatureType.e_vertex,
                o.cf.typeB = box2d.b2ContactFeatureType.e_face, ++b), b;
    }, goog.exportSymbol("box2d.b2ClipSegmentToLine", box2d.b2ClipSegmentToLine), box2d.b2TestOverlap_Shape = function(o, t, e, r, i, b) {
        var n = box2d.b2TestOverlap_Shape.s_input.Reset();
        return n.proxyA.SetShape(o, t), n.proxyB.SetShape(e, r), n.transformA.Copy(i), n.transformB.Copy(b),
            n.useRadii = !0, (o = box2d.b2TestOverlap_Shape.s_simplexCache.Reset()).count = 0,
            t = box2d.b2TestOverlap_Shape.s_output.Reset(), box2d.b2ShapeDistance(t, o, n),
            t.distance < 10 * box2d.b2_epsilon;
    }, goog.exportSymbol("box2d.b2TestOverlap_Shape", box2d.b2TestOverlap_Shape), box2d.b2TestOverlap_Shape.s_input = new box2d.b2DistanceInput(),
    box2d.b2TestOverlap_Shape.s_simplexCache = new box2d.b2SimplexCache(), box2d.b2TestOverlap_Shape.s_output = new box2d.b2DistanceOutput(),
    box2d.b2TestOverlap = function(o, t, e, r, i, b) {
        if (o instanceof box2d.b2AABB && t instanceof box2d.b2AABB) return box2d.b2TestOverlap_AABB(o, t);
        if (o instanceof box2d.b2Shape && "number" == typeof t && e instanceof box2d.b2Shape && "number" == typeof r && i instanceof box2d.b2Transform && b instanceof box2d.b2Transform) return box2d.b2TestOverlap_Shape(o, t, e, r, i, b);
        throw Error();
    }, goog.exportSymbol("box2d.b2TestOverlap", box2d.b2TestOverlap), box2d.b2CollideCircle = {},
    box2d.b2CollideCircles = function(o, t, e, r, i) {
        o.pointCount = 0, e = box2d.b2Mul_X_V2(e, t.m_p, box2d.b2CollideCircles.s_pA), i = box2d.b2Mul_X_V2(i, r.m_p, box2d.b2CollideCircles.s_pB),
            (i = box2d.b2DistanceSquared(e, i)) > (e = t.m_radius + r.m_radius) * e || (o.type = box2d.b2ManifoldType.e_circles,
                o.localPoint.Copy(t.m_p), o.localNormal.SetZero(), o.pointCount = 1, o.points[0].localPoint.Copy(r.m_p),
                o.points[0].id.key = 0);
    }, goog.exportSymbol("box2d.b2CollideCircles", box2d.b2CollideCircles), box2d.b2CollideCircles.s_pA = new box2d.b2Vec2(),
    box2d.b2CollideCircles.s_pB = new box2d.b2Vec2(), box2d.b2CollidePolygonAndCircle = function(o, t, e, r, i) {
        o.pointCount = 0, i = box2d.b2Mul_X_V2(i, r.m_p, box2d.b2CollidePolygonAndCircle.s_c),
            e = box2d.b2MulT_X_V2(e, i, box2d.b2CollidePolygonAndCircle.s_cLocal);
        var b = 0,
            n = -box2d.b2_maxFloat;
        i = t.m_radius + r.m_radius;
        var p = t.m_count,
            s = t.m_vertices;
        t = t.m_normals;
        for (var a = 0; a < p; ++a) {
            var d = box2d.b2Dot_V2_V2(t[a], box2d.b2Sub_V2_V2(e, s[a], box2d.b2Vec2.s_t0));
            if (d > i) return;
            d > n && (n = d, b = a);
        }
        d = s[a = b], p = s[(a + 1) % p], n < box2d.b2_epsilon ? (o.pointCount = 1, o.type = box2d.b2ManifoldType.e_faceA,
            o.localNormal.Copy(t[b]), box2d.b2Mid_V2_V2(d, p, o.localPoint), o.points[0].localPoint.Copy(r.m_p),
            o.points[0].id.key = 0) : (n = box2d.b2Dot_V2_V2(box2d.b2Sub_V2_V2(e, d, box2d.b2Vec2.s_t0), box2d.b2Sub_V2_V2(p, d, box2d.b2Vec2.s_t1)),
            b = box2d.b2Dot_V2_V2(box2d.b2Sub_V2_V2(e, p, box2d.b2Vec2.s_t0), box2d.b2Sub_V2_V2(d, p, box2d.b2Vec2.s_t1)),
            0 >= n ? box2d.b2DistanceSquared(e, d) > i * i || (o.pointCount = 1, o.type = box2d.b2ManifoldType.e_faceA,
                box2d.b2Sub_V2_V2(e, d, o.localNormal).SelfNormalize(), o.localPoint.Copy(d), o.points[0].localPoint.Copy(r.m_p),
                o.points[0].id.key = 0) : 0 >= b ? box2d.b2DistanceSquared(e, p) > i * i || (o.pointCount = 1,
                o.type = box2d.b2ManifoldType.e_faceA, box2d.b2Sub_V2_V2(e, p, o.localNormal).SelfNormalize(),
                o.localPoint.Copy(p), o.points[0].localPoint.Copy(r.m_p), o.points[0].id.key = 0) : (b = box2d.b2Mid_V2_V2(d, p, box2d.b2CollidePolygonAndCircle.s_faceCenter),
                (n = box2d.b2Dot_V2_V2(box2d.b2Sub_V2_V2(e, b, box2d.b2Vec2.s_t1), t[a])) > i || (o.pointCount = 1,
                    o.type = box2d.b2ManifoldType.e_faceA, o.localNormal.Copy(t[a]).SelfNormalize(),
                    o.localPoint.Copy(b), o.points[0].localPoint.Copy(r.m_p), o.points[0].id.key = 0)));
    }, goog.exportSymbol("box2d.b2CollidePolygonAndCircle", box2d.b2CollidePolygonAndCircle),
    box2d.b2CollidePolygonAndCircle.s_c = new box2d.b2Vec2(), box2d.b2CollidePolygonAndCircle.s_cLocal = new box2d.b2Vec2(),
    box2d.b2CollidePolygonAndCircle.s_faceCenter = new box2d.b2Vec2(), box2d.b2CollideEdge = {},
    box2d.b2CollideEdgeAndCircle = function(o, t, e, r, i) {
        o.pointCount = 0, e = box2d.b2MulT_X_V2(e, box2d.b2Mul_X_V2(i, r.m_p, box2d.b2Vec2.s_t0), box2d.b2CollideEdgeAndCircle.s_Q);
        var b = t.m_vertex1,
            n = t.m_vertex2,
            p = box2d.b2Sub_V2_V2(n, b, box2d.b2CollideEdgeAndCircle.s_e),
            s = box2d.b2Dot_V2_V2(p, box2d.b2Sub_V2_V2(n, e, box2d.b2Vec2.s_t0)),
            a = box2d.b2Dot_V2_V2(p, box2d.b2Sub_V2_V2(e, b, box2d.b2Vec2.s_t0)),
            d = t.m_radius + r.m_radius;
        if ((i = box2d.b2CollideEdgeAndCircle.s_id).cf.indexB = 0, i.cf.typeB = box2d.b2ContactFeatureType.e_vertex,
            0 >= a) {
            var l = b;
            s = box2d.b2Sub_V2_V2(e, l, box2d.b2CollideEdgeAndCircle.s_d);
            if (!((s = box2d.b2Dot_V2_V2(s, s)) > d * d)) {
                if (t.m_hasVertex0 && (t = box2d.b2Sub_V2_V2(b, t.m_vertex0, box2d.b2CollideEdgeAndCircle.s_e1),
                        0 < box2d.b2Dot_V2_V2(t, box2d.b2Sub_V2_V2(b, e, box2d.b2Vec2.s_t0)))) return;
                i.cf.indexA = 0, i.cf.typeA = box2d.b2ContactFeatureType.e_vertex, o.pointCount = 1,
                    o.type = box2d.b2ManifoldType.e_circles, o.localNormal.SetZero(), o.localPoint.Copy(l),
                    o.points[0].id.Copy(i), o.points[0].localPoint.Copy(r.m_p);
            }
        } else if (0 >= s) {
            if (l = n, s = box2d.b2Sub_V2_V2(e, l, box2d.b2CollideEdgeAndCircle.s_d), !((s = box2d.b2Dot_V2_V2(s, s)) > d * d)) {
                if (t.m_hasVertex3 && (b = box2d.b2Sub_V2_V2(t.m_vertex3, n, box2d.b2CollideEdgeAndCircle.s_e2),
                        0 < box2d.b2Dot_V2_V2(b, box2d.b2Sub_V2_V2(e, n, box2d.b2Vec2.s_t0)))) return;
                i.cf.indexA = 1, i.cf.typeA = box2d.b2ContactFeatureType.e_vertex, o.pointCount = 1,
                    o.type = box2d.b2ManifoldType.e_circles, o.localNormal.SetZero(), o.localPoint.Copy(l),
                    o.points[0].id.Copy(i), o.points[0].localPoint.Copy(r.m_p);
            }
        } else t = box2d.b2Dot_V2_V2(p, p), box2d.ENABLE_ASSERTS && box2d.b2Assert(0 < t),
            (l = box2d.b2CollideEdgeAndCircle.s_P).x = 1 / t * (s * b.x + a * n.x), l.y = 1 / t * (s * b.y + a * n.y),
            s = box2d.b2Sub_V2_V2(e, l, box2d.b2CollideEdgeAndCircle.s_d), (s = box2d.b2Dot_V2_V2(s, s)) > d * d || (l = box2d.b2CollideEdgeAndCircle.s_n.Set(-p.y, p.x),
                0 > box2d.b2Dot_V2_V2(l, box2d.b2Sub_V2_V2(e, b, box2d.b2Vec2.s_t0)) && l.Set(-l.x, -l.y),
                l.Normalize(), i.cf.indexA = 0, i.cf.typeA = box2d.b2ContactFeatureType.e_face,
                o.pointCount = 1, o.type = box2d.b2ManifoldType.e_faceA, o.localNormal.Copy(l),
                o.localPoint.Copy(b), o.points[0].id.Copy(i), o.points[0].localPoint.Copy(r.m_p));
    }, goog.exportSymbol("box2d.b2CollideEdgeAndCircle", box2d.b2CollideEdgeAndCircle),
    box2d.b2CollideEdgeAndCircle.s_Q = new box2d.b2Vec2(), box2d.b2CollideEdgeAndCircle.s_e = new box2d.b2Vec2(),
    box2d.b2CollideEdgeAndCircle.s_d = new box2d.b2Vec2(), box2d.b2CollideEdgeAndCircle.s_e1 = new box2d.b2Vec2(),
    box2d.b2CollideEdgeAndCircle.s_e2 = new box2d.b2Vec2(), box2d.b2CollideEdgeAndCircle.s_P = new box2d.b2Vec2(),
    box2d.b2CollideEdgeAndCircle.s_n = new box2d.b2Vec2(), box2d.b2CollideEdgeAndCircle.s_id = new box2d.b2ContactID(),
    box2d.b2EPAxisType = {
        e_unknown: 0,
        e_edgeA: 1,
        e_edgeB: 2
    }, goog.exportSymbol("box2d.b2EPAxisType", box2d.b2EPAxisType), goog.exportProperty(box2d.b2EPAxisType, "e_unknown", box2d.b2EPAxisType.e_unknown),
    goog.exportProperty(box2d.b2EPAxisType, "e_edgeA", box2d.b2EPAxisType.e_edgeA),
    goog.exportProperty(box2d.b2EPAxisType, "e_edgeB", box2d.b2EPAxisType.e_edgeB),
    box2d.b2EPAxis = function() {}, goog.exportSymbol("box2d.b2EPAxis", box2d.b2EPAxis),
    box2d.b2EPAxis.prototype.type = box2d.b2EPAxisType.e_unknown, goog.exportProperty(box2d.b2EPAxis.prototype, "type", box2d.b2EPAxis.prototype.type),
    box2d.b2EPAxis.prototype.index = 0, goog.exportProperty(box2d.b2EPAxis.prototype, "index", box2d.b2EPAxis.prototype.index),
    box2d.b2EPAxis.prototype.separation = 0, goog.exportProperty(box2d.b2EPAxis.prototype, "separation", box2d.b2EPAxis.prototype.separation),
    box2d.b2TempPolygon = function() {
        this.vertices = box2d.b2Vec2.MakeArray(box2d.b2_maxPolygonVertices), this.normals = box2d.b2Vec2.MakeArray(box2d.b2_maxPolygonVertices),
            this.count = 0;
    }, goog.exportSymbol("box2d.b2TempPolygon", box2d.b2TempPolygon), box2d.b2TempPolygon.prototype.vertices = null,
    goog.exportProperty(box2d.b2TempPolygon.prototype, "vertices", box2d.b2TempPolygon.prototype.vertices),
    box2d.b2TempPolygon.prototype.normals = null, goog.exportProperty(box2d.b2TempPolygon.prototype, "normals", box2d.b2TempPolygon.prototype.normals),
    box2d.b2TempPolygon.prototype.count = 0, goog.exportProperty(box2d.b2TempPolygon.prototype, "count", box2d.b2TempPolygon.prototype.count),
    box2d.b2ReferenceFace = function() {
        this.i2 = this.i1 = 0, this.v1 = new box2d.b2Vec2(), this.v2 = new box2d.b2Vec2(),
            this.normal = new box2d.b2Vec2(), this.sideNormal1 = new box2d.b2Vec2(), this.sideOffset1 = 0,
            this.sideNormal2 = new box2d.b2Vec2(), this.sideOffset2 = 0;
    }, goog.exportSymbol("box2d.b2ReferenceFace", box2d.b2ReferenceFace), box2d.b2ReferenceFace.prototype.i1 = 0,
    goog.exportProperty(box2d.b2ReferenceFace.prototype, "i1", box2d.b2ReferenceFace.prototype.i1),
    box2d.b2ReferenceFace.prototype.i2 = 0, goog.exportProperty(box2d.b2ReferenceFace.prototype, "i2", box2d.b2ReferenceFace.prototype.i2),
    box2d.b2ReferenceFace.prototype.v1 = null, goog.exportProperty(box2d.b2ReferenceFace.prototype, "v1", box2d.b2ReferenceFace.prototype.v1),
    box2d.b2ReferenceFace.prototype.v2 = null, goog.exportProperty(box2d.b2ReferenceFace.prototype, "v2", box2d.b2ReferenceFace.prototype.v2),
    box2d.b2ReferenceFace.prototype.normal = null, goog.exportProperty(box2d.b2ReferenceFace.prototype, "normal", box2d.b2ReferenceFace.prototype.normal),
    box2d.b2ReferenceFace.prototype.sideNormal1 = null, goog.exportProperty(box2d.b2ReferenceFace.prototype, "sideNormal1", box2d.b2ReferenceFace.prototype.sideNormal1),
    box2d.b2ReferenceFace.prototype.sideOffset1 = 0, goog.exportProperty(box2d.b2ReferenceFace.prototype, "sideOffset1", box2d.b2ReferenceFace.prototype.sideOffset1),
    box2d.b2ReferenceFace.prototype.sideNormal2 = null, goog.exportProperty(box2d.b2ReferenceFace.prototype, "sideNormal2", box2d.b2ReferenceFace.prototype.sideNormal2),
    box2d.b2ReferenceFace.prototype.sideOffset2 = 0, goog.exportProperty(box2d.b2ReferenceFace.prototype, "sideOffset2", box2d.b2ReferenceFace.prototype.sideOffset2),
    box2d.b2EPColliderVertexType = {
        e_isolated: 0,
        e_concave: 1,
        e_convex: 2
    }, goog.exportSymbol("box2d.b2EPColliderVertexType", box2d.b2EPColliderVertexType),
    goog.exportProperty(box2d.b2EPColliderVertexType, "e_isolated", box2d.b2EPColliderVertexType.e_isolated),
    goog.exportProperty(box2d.b2EPColliderVertexType, "e_concave", box2d.b2EPColliderVertexType.e_concave),
    goog.exportProperty(box2d.b2EPColliderVertexType, "e_convex", box2d.b2EPColliderVertexType.e_convex),
    box2d.b2EPCollider = function() {
        this.m_polygonB = new box2d.b2TempPolygon(), this.m_xf = new box2d.b2Transform(),
            this.m_centroidB = new box2d.b2Vec2(), this.m_v0 = new box2d.b2Vec2(), this.m_v1 = new box2d.b2Vec2(),
            this.m_v2 = new box2d.b2Vec2(), this.m_v3 = new box2d.b2Vec2(), this.m_normal0 = new box2d.b2Vec2(),
            this.m_normal1 = new box2d.b2Vec2(), this.m_normal2 = new box2d.b2Vec2(), this.m_normal = new box2d.b2Vec2(),
            this.m_type2 = this.m_type1 = box2d.b2EPColliderVertexType.e_isolated, this.m_lowerLimit = new box2d.b2Vec2(),
            this.m_upperLimit = new box2d.b2Vec2(), this.m_radius = 0, this.m_front = !1;
    }, goog.exportSymbol("box2d.b2EPCollider", box2d.b2EPCollider), box2d.b2EPCollider.prototype.m_polygonB = null,
    goog.exportProperty(box2d.b2EPCollider.prototype, "m_polygonB", box2d.b2EPCollider.prototype.m_polygonB),
    box2d.b2EPCollider.prototype.m_xf = null, goog.exportProperty(box2d.b2EPCollider.prototype, "m_xf", box2d.b2EPCollider.prototype.m_xf),
    box2d.b2EPCollider.prototype.m_centroidB = null, goog.exportProperty(box2d.b2EPCollider.prototype, "m_centroidB", box2d.b2EPCollider.prototype.m_centroidB),
    box2d.b2EPCollider.prototype.m_v0 = null, goog.exportProperty(box2d.b2EPCollider.prototype, "m_v0", box2d.b2EPCollider.prototype.m_v0),
    box2d.b2EPCollider.prototype.m_v1 = null, goog.exportProperty(box2d.b2EPCollider.prototype, "m_v1", box2d.b2EPCollider.prototype.m_v1),
    box2d.b2EPCollider.prototype.m_v2 = null, goog.exportProperty(box2d.b2EPCollider.prototype, "m_v2", box2d.b2EPCollider.prototype.m_v2),
    box2d.b2EPCollider.prototype.m_v3 = null, goog.exportProperty(box2d.b2EPCollider.prototype, "m_v3", box2d.b2EPCollider.prototype.m_v3),
    box2d.b2EPCollider.prototype.m_normal0 = null, goog.exportProperty(box2d.b2EPCollider.prototype, "m_normal0", box2d.b2EPCollider.prototype.m_normal0),
    box2d.b2EPCollider.prototype.m_normal1 = null, goog.exportProperty(box2d.b2EPCollider.prototype, "m_normal1", box2d.b2EPCollider.prototype.m_normal1),
    box2d.b2EPCollider.prototype.m_normal2 = null, goog.exportProperty(box2d.b2EPCollider.prototype, "m_normal2", box2d.b2EPCollider.prototype.m_normal2),
    box2d.b2EPCollider.prototype.m_normal = null, goog.exportProperty(box2d.b2EPCollider.prototype, "m_normal", box2d.b2EPCollider.prototype.m_normal),
    box2d.b2EPCollider.prototype.m_type1 = box2d.b2EPColliderVertexType.e_isolated,
    goog.exportProperty(box2d.b2EPCollider.prototype, "m_type1", box2d.b2EPCollider.prototype.m_type1),
    box2d.b2EPCollider.prototype.m_type2 = box2d.b2EPColliderVertexType.e_isolated,
    goog.exportProperty(box2d.b2EPCollider.prototype, "m_type2", box2d.b2EPCollider.prototype.m_type2),
    box2d.b2EPCollider.prototype.m_lowerLimit = null, goog.exportProperty(box2d.b2EPCollider.prototype, "m_lowerLimit", box2d.b2EPCollider.prototype.m_lowerLimit),
    box2d.b2EPCollider.prototype.m_upperLimit = null, goog.exportProperty(box2d.b2EPCollider.prototype, "m_upperLimit", box2d.b2EPCollider.prototype.m_upperLimit),
    box2d.b2EPCollider.prototype.m_radius = 0, goog.exportProperty(box2d.b2EPCollider.prototype, "m_radius", box2d.b2EPCollider.prototype.m_radius),
    box2d.b2EPCollider.prototype.m_front = !1, goog.exportProperty(box2d.b2EPCollider.prototype, "m_front", box2d.b2EPCollider.prototype.m_front),
    box2d.b2EPCollider.prototype.Collide = function(o, t, e, r, i) {
        box2d.b2MulT_X_X(e, i, this.m_xf), box2d.b2Mul_X_V2(this.m_xf, r.m_centroid, this.m_centroidB),
            this.m_v0.Copy(t.m_vertex0), this.m_v1.Copy(t.m_vertex1), this.m_v2.Copy(t.m_vertex2),
            this.m_v3.Copy(t.m_vertex3), e = t.m_hasVertex0, t = t.m_hasVertex3, (i = box2d.b2Sub_V2_V2(this.m_v2, this.m_v1, box2d.b2EPCollider.s_edge1)).Normalize(),
            this.m_normal1.Set(i.y, -i.x);
        var b = box2d.b2Dot_V2_V2(this.m_normal1, box2d.b2Sub_V2_V2(this.m_centroidB, this.m_v1, box2d.b2Vec2.s_t0)),
            n = 0,
            p = 0,
            s = !1,
            a = !1;
        for (e && ((n = box2d.b2Sub_V2_V2(this.m_v1, this.m_v0, box2d.b2EPCollider.s_edge0)).Normalize(),
                this.m_normal0.Set(n.y, -n.x), s = 0 <= box2d.b2Cross_V2_V2(n, i), n = box2d.b2Dot_V2_V2(this.m_normal0, box2d.b2Sub_V2_V2(this.m_centroidB, this.m_v0, box2d.b2Vec2.s_t0))),
            t && ((p = box2d.b2Sub_V2_V2(this.m_v3, this.m_v2, box2d.b2EPCollider.s_edge2)).Normalize(),
                this.m_normal2.Set(p.y, -p.x), a = 0 < box2d.b2Cross_V2_V2(i, p), p = box2d.b2Dot_V2_V2(this.m_normal2, box2d.b2Sub_V2_V2(this.m_centroidB, this.m_v2, box2d.b2Vec2.s_t0))),
            e && t ? s && a ? (this.m_front = 0 <= n || 0 <= b || 0 <= p) ? (this.m_normal.Copy(this.m_normal1),
                this.m_lowerLimit.Copy(this.m_normal0), this.m_upperLimit.Copy(this.m_normal2)) : (this.m_normal.Copy(this.m_normal1).SelfNeg(),
                this.m_lowerLimit.Copy(this.m_normal1).SelfNeg(), this.m_upperLimit.Copy(this.m_normal1).SelfNeg()) : s ? (this.m_front = 0 <= n || 0 <= b && 0 <= p) ? (this.m_normal.Copy(this.m_normal1),
                this.m_lowerLimit.Copy(this.m_normal0), this.m_upperLimit.Copy(this.m_normal1)) : (this.m_normal.Copy(this.m_normal1).SelfNeg(),
                this.m_lowerLimit.Copy(this.m_normal2).SelfNeg(), this.m_upperLimit.Copy(this.m_normal1).SelfNeg()) : a ? (this.m_front = 0 <= p || 0 <= n && 0 <= b) ? (this.m_normal.Copy(this.m_normal1),
                this.m_lowerLimit.Copy(this.m_normal1), this.m_upperLimit.Copy(this.m_normal2)) : (this.m_normal.Copy(this.m_normal1).SelfNeg(),
                this.m_lowerLimit.Copy(this.m_normal1).SelfNeg(), this.m_upperLimit.Copy(this.m_normal0).SelfNeg()) : (this.m_front = 0 <= n && 0 <= b && 0 <= p) ? (this.m_normal.Copy(this.m_normal1),
                this.m_lowerLimit.Copy(this.m_normal1), this.m_upperLimit.Copy(this.m_normal1)) : (this.m_normal.Copy(this.m_normal1).SelfNeg(),
                this.m_lowerLimit.Copy(this.m_normal2).SelfNeg(), this.m_upperLimit.Copy(this.m_normal0).SelfNeg()) : e ? s ? ((this.m_front = 0 <= n || 0 <= b) ? (this.m_normal.Copy(this.m_normal1),
                this.m_lowerLimit.Copy(this.m_normal0)) : (this.m_normal.Copy(this.m_normal1).SelfNeg(),
                this.m_lowerLimit.Copy(this.m_normal1)), this.m_upperLimit.Copy(this.m_normal1).SelfNeg()) : (this.m_front = 0 <= n && 0 <= b) ? (this.m_normal.Copy(this.m_normal1),
                this.m_lowerLimit.Copy(this.m_normal1), this.m_upperLimit.Copy(this.m_normal1).SelfNeg()) : (this.m_normal.Copy(this.m_normal1).SelfNeg(),
                this.m_lowerLimit.Copy(this.m_normal1), this.m_upperLimit.Copy(this.m_normal0).SelfNeg()) : t ? a ? (this.m_front = 0 <= b || 0 <= p) ? (this.m_normal.Copy(this.m_normal1),
                this.m_lowerLimit.Copy(this.m_normal1).SelfNeg(), this.m_upperLimit.Copy(this.m_normal2)) : (this.m_normal.Copy(this.m_normal1).SelfNeg(),
                this.m_lowerLimit.Copy(this.m_normal1).SelfNeg(), this.m_upperLimit.Copy(this.m_normal1)) : ((this.m_front = 0 <= b && 0 <= p) ? (this.m_normal.Copy(this.m_normal1),
                this.m_lowerLimit.Copy(this.m_normal1).SelfNeg()) : (this.m_normal.Copy(this.m_normal1).SelfNeg(),
                this.m_lowerLimit.Copy(this.m_normal2).SelfNeg()), this.m_upperLimit.Copy(this.m_normal1)) : (this.m_front = 0 <= b) ? (this.m_normal.Copy(this.m_normal1),
                this.m_lowerLimit.Copy(this.m_normal1).SelfNeg(), this.m_upperLimit.Copy(this.m_normal1).SelfNeg()) : (this.m_normal.Copy(this.m_normal1).SelfNeg(),
                this.m_lowerLimit.Copy(this.m_normal1), this.m_upperLimit.Copy(this.m_normal1)),
            this.m_polygonB.count = r.m_count, b = 0, n = r.m_count; b < n; ++b) box2d.b2Mul_X_V2(this.m_xf, r.m_vertices[b], this.m_polygonB.vertices[b]),
            box2d.b2Mul_R_V2(this.m_xf.q, r.m_normals[b], this.m_polygonB.normals[b]);
        if (this.m_radius = 2 * box2d.b2_polygonRadius, o.pointCount = 0, !((e = this.ComputeEdgeSeparation(box2d.b2EPCollider.s_edgeAxis)).type === box2d.b2EPAxisType.e_unknown || e.separation > this.m_radius || (t = this.ComputePolygonSeparation(box2d.b2EPCollider.s_polygonAxis),
                t.type !== box2d.b2EPAxisType.e_unknown && t.separation > this.m_radius))) {
            if (e = t.type === box2d.b2EPAxisType.e_unknown ? e : t.separation > .98 * e.separation + .001 ? t : e,
                i = box2d.b2EPCollider.s_ie, t = box2d.b2EPCollider.s_rf, e.type === box2d.b2EPAxisType.e_edgeA) {
                for (o.type = box2d.b2ManifoldType.e_faceA, p = 0, s = box2d.b2Dot_V2_V2(this.m_normal, this.m_polygonB.normals[0]),
                    b = 1, n = this.m_polygonB.count; b < n; ++b)(a = box2d.b2Dot_V2_V2(this.m_normal, this.m_polygonB.normals[b])) < s && (s = a,
                    p = b);
                b = ((n = p) + 1) % this.m_polygonB.count, (p = i[0]).v.Copy(this.m_polygonB.vertices[n]),
                    p.id.cf.indexA = 0, p.id.cf.indexB = n, p.id.cf.typeA = box2d.b2ContactFeatureType.e_face,
                    p.id.cf.typeB = box2d.b2ContactFeatureType.e_vertex, (n = i[1]).v.Copy(this.m_polygonB.vertices[b]),
                    n.id.cf.indexA = 0, n.id.cf.indexB = b, n.id.cf.typeA = box2d.b2ContactFeatureType.e_face,
                    n.id.cf.typeB = box2d.b2ContactFeatureType.e_vertex, this.m_front ? (t.i1 = 0, t.i2 = 1,
                        t.v1.Copy(this.m_v1), t.v2.Copy(this.m_v2), t.normal.Copy(this.m_normal1)) : (t.i1 = 1,
                        t.i2 = 0, t.v1.Copy(this.m_v2), t.v2.Copy(this.m_v1), t.normal.Copy(this.m_normal1).SelfNeg());
            } else o.type = box2d.b2ManifoldType.e_faceB, (p = i[0]).v.Copy(this.m_v1), p.id.cf.indexA = 0,
                p.id.cf.indexB = e.index, p.id.cf.typeA = box2d.b2ContactFeatureType.e_vertex, p.id.cf.typeB = box2d.b2ContactFeatureType.e_face,
                (n = i[1]).v.Copy(this.m_v2), n.id.cf.indexA = 0, n.id.cf.indexB = e.index, n.id.cf.typeA = box2d.b2ContactFeatureType.e_vertex,
                n.id.cf.typeB = box2d.b2ContactFeatureType.e_face, t.i1 = e.index, t.i2 = (t.i1 + 1) % this.m_polygonB.count,
                t.v1.Copy(this.m_polygonB.vertices[t.i1]), t.v2.Copy(this.m_polygonB.vertices[t.i2]),
                t.normal.Copy(this.m_polygonB.normals[t.i1]);
            if (t.sideNormal1.Set(t.normal.y, -t.normal.x), t.sideNormal2.Copy(t.sideNormal1).SelfNeg(),
                t.sideOffset1 = box2d.b2Dot_V2_V2(t.sideNormal1, t.v1), t.sideOffset2 = box2d.b2Dot_V2_V2(t.sideNormal2, t.v2),
                b = box2d.b2EPCollider.s_clipPoints1, p = box2d.b2EPCollider.s_clipPoints2, n = 0, !((n = box2d.b2ClipSegmentToLine(b, i, t.sideNormal1, t.sideOffset1, t.i1)) < box2d.b2_maxManifoldPoints || (n = box2d.b2ClipSegmentToLine(p, b, t.sideNormal2, t.sideOffset2, t.i2),
                    n < box2d.b2_maxManifoldPoints))) {
                for (e.type === box2d.b2EPAxisType.e_edgeA ? (o.localNormal.Copy(t.normal), o.localPoint.Copy(t.v1)) : (o.localNormal.Copy(r.m_normals[t.i1]),
                        o.localPoint.Copy(r.m_vertices[t.i1])), b = r = 0, n = box2d.b2_maxManifoldPoints; b < n; ++b) box2d.b2Dot_V2_V2(t.normal, box2d.b2Sub_V2_V2(p[b].v, t.v1, box2d.b2Vec2.s_t0)) <= this.m_radius && (i = o.points[r],
                    e.type === box2d.b2EPAxisType.e_edgeA ? (box2d.b2MulT_X_V2(this.m_xf, p[b].v, i.localPoint),
                        i.id = p[b].id) : (i.localPoint.Copy(p[b].v), i.id.cf.typeA = p[b].id.cf.typeB,
                        i.id.cf.typeB = p[b].id.cf.typeA, i.id.cf.indexA = p[b].id.cf.indexB, i.id.cf.indexB = p[b].id.cf.indexA),
                    ++r);
                o.pointCount = r;
            }
        }
    }, goog.exportProperty(box2d.b2EPCollider.prototype, "Collide", box2d.b2EPCollider.prototype.Collide),
    box2d.b2EPCollider.s_edge1 = new box2d.b2Vec2(), box2d.b2EPCollider.s_edge0 = new box2d.b2Vec2(),
    box2d.b2EPCollider.s_edge2 = new box2d.b2Vec2(), box2d.b2EPCollider.s_ie = box2d.b2ClipVertex.MakeArray(2),
    box2d.b2EPCollider.s_rf = new box2d.b2ReferenceFace(), box2d.b2EPCollider.s_clipPoints1 = box2d.b2ClipVertex.MakeArray(2),
    box2d.b2EPCollider.s_clipPoints2 = box2d.b2ClipVertex.MakeArray(2), box2d.b2EPCollider.s_edgeAxis = new box2d.b2EPAxis(),
    box2d.b2EPCollider.s_polygonAxis = new box2d.b2EPAxis(), box2d.b2EPCollider.prototype.ComputeEdgeSeparation = function(o) {
        o.type = box2d.b2EPAxisType.e_edgeA, o.index = this.m_front ? 0 : 1, o.separation = box2d.b2_maxFloat;
        for (var t = 0, e = this.m_polygonB.count; t < e; ++t) {
            var r = box2d.b2Dot_V2_V2(this.m_normal, box2d.b2Sub_V2_V2(this.m_polygonB.vertices[t], this.m_v1, box2d.b2Vec2.s_t0));
            r < o.separation && (o.separation = r);
        }
        return o;
    }, goog.exportProperty(box2d.b2EPCollider.prototype, "ComputeEdgeSeparation", box2d.b2EPCollider.prototype.ComputeEdgeSeparation),
    box2d.b2EPCollider.prototype.ComputePolygonSeparation = function(o) {
        o.type = box2d.b2EPAxisType.e_unknown, o.index = -1, o.separation = -box2d.b2_maxFloat;
        for (var t = box2d.b2EPCollider.s_perp.Set(-this.m_normal.y, this.m_normal.x), e = 0, r = this.m_polygonB.count; e < r; ++e) {
            var i = box2d.b2EPCollider.s_n.Copy(this.m_polygonB.normals[e]).SelfNeg(),
                b = box2d.b2Dot_V2_V2(i, box2d.b2Sub_V2_V2(this.m_polygonB.vertices[e], this.m_v1, box2d.b2Vec2.s_t0)),
                n = box2d.b2Dot_V2_V2(i, box2d.b2Sub_V2_V2(this.m_polygonB.vertices[e], this.m_v2, box2d.b2Vec2.s_t0));
            if ((b = box2d.b2Min(b, n)) > this.m_radius) {
                o.type = box2d.b2EPAxisType.e_edgeB, o.index = e, o.separation = b;
                break;
            }
            if (0 <= box2d.b2Dot_V2_V2(i, t)) {
                if (box2d.b2Dot_V2_V2(box2d.b2Sub_V2_V2(i, this.m_upperLimit, box2d.b2Vec2.s_t0), this.m_normal) < -box2d.b2_angularSlop) continue;
            } else if (box2d.b2Dot_V2_V2(box2d.b2Sub_V2_V2(i, this.m_lowerLimit, box2d.b2Vec2.s_t0), this.m_normal) < -box2d.b2_angularSlop) continue;
            b > o.separation && (o.type = box2d.b2EPAxisType.e_edgeB, o.index = e, o.separation = b);
        }
        return o;
    }, goog.exportProperty(box2d.b2EPCollider.prototype, "ComputePolygonSeparation", box2d.b2EPCollider.prototype.ComputePolygonSeparation),
    box2d.b2EPCollider.s_n = new box2d.b2Vec2(), box2d.b2EPCollider.s_perp = new box2d.b2Vec2(),
    box2d.b2CollideEdgeAndPolygon = function(o, t, e, r, i) {
        box2d.b2CollideEdgeAndPolygon.s_collider.Collide(o, t, e, r, i);
    }, goog.exportSymbol("box2d.b2CollideEdgeAndPolygon", box2d.b2CollideEdgeAndPolygon),
    box2d.b2CollideEdgeAndPolygon.s_collider = new box2d.b2EPCollider(), box2d.b2CollidePolygon = {},
    box2d.b2FindMaxSeparation = function(o, t, e, r, i) {
        var b = t.m_count,
            n = r.m_count,
            p = t.m_normals;
        t = t.m_vertices, r = r.m_vertices, e = box2d.b2MulT_X_X(i, e, box2d.b2FindMaxSeparation.s_xf),
            i = 0;
        for (var s = -box2d.b2_maxFloat, a = 0; a < b; ++a) {
            for (var d = box2d.b2Mul_R_V2(e.q, p[a], box2d.b2FindMaxSeparation.s_n), l = box2d.b2Mul_X_V2(e, t[a], box2d.b2FindMaxSeparation.s_v1), x = box2d.b2_maxFloat, y = 0; y < n; ++y) {
                var c = box2d.b2Dot_V2_V2(d, box2d.b2Sub_V2_V2(r[y], l, box2d.b2Vec2.s_t0));
                c < x && (x = c);
            }
            x > s && (s = x, i = a);
        }
        return o[0] = i, s;
    }, goog.exportSymbol("box2d.b2FindMaxSeparation", box2d.b2FindMaxSeparation), box2d.b2FindMaxSeparation.s_xf = new box2d.b2Transform(),
    box2d.b2FindMaxSeparation.s_n = new box2d.b2Vec2(), box2d.b2FindMaxSeparation.s_v1 = new box2d.b2Vec2(),
    box2d.b2FindIncidentEdge = function(o, t, e, r, i, b) {
        var n = t.m_count,
            p = t.m_normals,
            s = i.m_count;
        t = i.m_vertices, i = i.m_normals, box2d.ENABLE_ASSERTS && box2d.b2Assert(0 <= r && r < n),
            e = box2d.b2MulT_R_V2(b.q, box2d.b2Mul_R_V2(e.q, p[r], box2d.b2Vec2.s_t0), box2d.b2FindIncidentEdge.s_normal1);
        n = 0, p = box2d.b2_maxFloat;
        for (var a = 0; a < s; ++a) {
            var d = box2d.b2Dot_V2_V2(e, i[a]);
            d < p && (p = d, n = a);
        }
        s = ((i = n) + 1) % s, e = o[0], box2d.b2Mul_X_V2(b, t[i], e.v), (e = e.id.cf).indexA = r,
            e.indexB = i, e.typeA = box2d.b2ContactFeatureType.e_face, e.typeB = box2d.b2ContactFeatureType.e_vertex,
            o = o[1], box2d.b2Mul_X_V2(b, t[s], o.v), (b = o.id.cf).indexA = r, b.indexB = s,
            b.typeA = box2d.b2ContactFeatureType.e_face, b.typeB = box2d.b2ContactFeatureType.e_vertex;
    }, goog.exportSymbol("box2d.b2FindIncidentEdge", box2d.b2FindIncidentEdge), box2d.b2FindIncidentEdge.s_normal1 = new box2d.b2Vec2(),
    box2d.b2CollidePolygons = function(o, t, e, r, i) {
        o.pointCount = 0;
        var b = t.m_radius + r.m_radius;
        if (((c = box2d.b2CollidePolygons.s_edgeA)[0] = 0, !((a = box2d.b2FindMaxSeparation(c, t, e, r, i)) > b)) && ((s = box2d.b2CollidePolygons.s_edgeB)[0] = 0, !((x = box2d.b2FindMaxSeparation(s, r, i, t, e)) > b))) {
            var n = 0,
                p = 0;
            x > .98 * a + .001 ? (a = r, r = t, t = i, n = s[0], o.type = box2d.b2ManifoldType.e_faceB,
                    p = 1) : (a = t, t = e, e = i, n = c[0], o.type = box2d.b2ManifoldType.e_faceA,
                    p = 0), c = box2d.b2CollidePolygons.s_incidentEdge, box2d.b2FindIncidentEdge(c, a, t, n, r, e),
                i = a.m_vertices;
            var s = n,
                a = (n + 1) % a.m_count,
                d = i[s],
                l = i[a];
            (n = box2d.b2Sub_V2_V2(l, d, box2d.b2CollidePolygons.s_localTangent)).Normalize(),
                i = box2d.b2Cross_V2_S(n, 1, box2d.b2CollidePolygons.s_localNormal), r = box2d.b2Mid_V2_V2(d, l, box2d.b2CollidePolygons.s_planePoint);
            var x = box2d.b2Mul_R_V2(t.q, n, box2d.b2CollidePolygons.s_tangent),
                y = (n = box2d.b2Cross_V2_S(x, 1, box2d.b2CollidePolygons.s_normal),
                    d = box2d.b2Mul_X_V2(t, d, box2d.b2CollidePolygons.s_v11), box2d.b2Mul_X_V2(t, l, box2d.b2CollidePolygons.s_v12));
            t = box2d.b2Dot_V2_V2(n, d);
            l = -box2d.b2Dot_V2_V2(x, d) + b, y = box2d.b2Dot_V2_V2(x, y) + b;
            var c, _ = box2d.b2CollidePolygons.s_clipPoints1,
                m = (d = box2d.b2CollidePolygons.s_clipPoints2,
                    box2d.b2CollidePolygons.s_ntangent.Copy(x).SelfNeg());
            if (!(2 > (c = box2d.b2ClipSegmentToLine(_, c, m, l, s)) || (c = box2d.b2ClipSegmentToLine(d, _, x, y, a),
                    2 > c))) {
                for (o.localNormal.Copy(i), o.localPoint.Copy(r), s = c = 0; s < box2d.b2_maxManifoldPoints; ++s) i = d[s],
                    box2d.b2Dot_V2_V2(n, i.v) - t <= b && (a = o.points[c], box2d.b2MulT_X_V2(e, i.v, a.localPoint),
                        a.id.Copy(i.id), p && (i = a.id.cf, a.id.cf.indexA = i.indexB, a.id.cf.indexB = i.indexA,
                            a.id.cf.typeA = i.typeB, a.id.cf.typeB = i.typeA), ++c);
                o.pointCount = c;
            }
        }
    }, goog.exportSymbol("box2d.b2CollidePolygons", box2d.b2CollidePolygons), box2d.b2CollidePolygons.s_incidentEdge = box2d.b2ClipVertex.MakeArray(2),
    box2d.b2CollidePolygons.s_clipPoints1 = box2d.b2ClipVertex.MakeArray(2), box2d.b2CollidePolygons.s_clipPoints2 = box2d.b2ClipVertex.MakeArray(2),
    box2d.b2CollidePolygons.s_edgeA = box2d.b2MakeNumberArray(1), box2d.b2CollidePolygons.s_edgeB = box2d.b2MakeNumberArray(1),
    box2d.b2CollidePolygons.s_localTangent = new box2d.b2Vec2(), box2d.b2CollidePolygons.s_localNormal = new box2d.b2Vec2(),
    box2d.b2CollidePolygons.s_planePoint = new box2d.b2Vec2(), box2d.b2CollidePolygons.s_normal = new box2d.b2Vec2(),
    box2d.b2CollidePolygons.s_tangent = new box2d.b2Vec2(), box2d.b2CollidePolygons.s_ntangent = new box2d.b2Vec2(),
    box2d.b2CollidePolygons.s_v11 = new box2d.b2Vec2(), box2d.b2CollidePolygons.s_v12 = new box2d.b2Vec2(),
    box2d.b2TreeNode = function(o) {
        this.m_id = o || 0, this.aabb = new box2d.b2AABB();
    }, goog.exportSymbol("box2d.b2TreeNode", box2d.b2TreeNode), box2d.b2TreeNode.prototype.m_id = 0,
    goog.exportProperty(box2d.b2TreeNode.prototype, "m_id", box2d.b2TreeNode.prototype.m_id),
    box2d.b2TreeNode.prototype.aabb = null, goog.exportProperty(box2d.b2TreeNode.prototype, "aabb", box2d.b2TreeNode.prototype.aabb),
    box2d.b2TreeNode.prototype.userData = null, goog.exportProperty(box2d.b2TreeNode.prototype, "userData", box2d.b2TreeNode.prototype.userData),
    box2d.b2TreeNode.prototype.parent = null, goog.exportProperty(box2d.b2TreeNode.prototype, "parent", box2d.b2TreeNode.prototype.parent),
    box2d.b2TreeNode.prototype.child1 = null, goog.exportProperty(box2d.b2TreeNode.prototype, "child1", box2d.b2TreeNode.prototype.child1),
    box2d.b2TreeNode.prototype.child2 = null, goog.exportProperty(box2d.b2TreeNode.prototype, "child2", box2d.b2TreeNode.prototype.child2),
    box2d.b2TreeNode.prototype.height = 0, goog.exportProperty(box2d.b2TreeNode.prototype, "height", box2d.b2TreeNode.prototype.height),
    box2d.b2TreeNode.prototype.IsLeaf = function() {
        return null === this.child1;
    }, goog.exportProperty(box2d.b2TreeNode.prototype, "IsLeaf", box2d.b2TreeNode.prototype.IsLeaf),
    box2d.b2DynamicTree = function() {}, goog.exportSymbol("box2d.b2DynamicTree", box2d.b2DynamicTree),
    box2d.b2DynamicTree.prototype.m_root = null, goog.exportProperty(box2d.b2DynamicTree.prototype, "m_root", box2d.b2DynamicTree.prototype.m_root),
    box2d.b2DynamicTree.prototype.m_freeList = null, goog.exportProperty(box2d.b2DynamicTree.prototype, "m_freeList", box2d.b2DynamicTree.prototype.m_freeList),
    box2d.b2DynamicTree.prototype.m_path = 0, goog.exportProperty(box2d.b2DynamicTree.prototype, "m_path", box2d.b2DynamicTree.prototype.m_path),
    box2d.b2DynamicTree.prototype.m_insertionCount = 0, goog.exportProperty(box2d.b2DynamicTree.prototype, "m_insertionCount", box2d.b2DynamicTree.prototype.m_insertionCount),
    box2d.b2DynamicTree.s_stack = new box2d.b2GrowableStack(256), box2d.b2DynamicTree.s_r = new box2d.b2Vec2(),
    box2d.b2DynamicTree.s_v = new box2d.b2Vec2(), box2d.b2DynamicTree.s_abs_v = new box2d.b2Vec2(),
    box2d.b2DynamicTree.s_segmentAABB = new box2d.b2AABB(), box2d.b2DynamicTree.s_subInput = new box2d.b2RayCastInput(),
    box2d.b2DynamicTree.s_combinedAABB = new box2d.b2AABB(), box2d.b2DynamicTree.s_aabb = new box2d.b2AABB(),
    box2d.b2DynamicTree.prototype.GetUserData = function(o) {
        return box2d.ENABLE_ASSERTS && box2d.b2Assert(null !== o), o.userData;
    }, goog.exportProperty(box2d.b2DynamicTree.prototype, "GetUserData", box2d.b2DynamicTree.prototype.GetUserData),
    box2d.b2DynamicTree.prototype.GetFatAABB = function(o) {
        return box2d.ENABLE_ASSERTS && box2d.b2Assert(null !== o), o.aabb;
    }, goog.exportProperty(box2d.b2DynamicTree.prototype, "GetFatAABB", box2d.b2DynamicTree.prototype.GetFatAABB),
    box2d.b2DynamicTree.prototype.Query = function(o, t) {
        if (null !== this.m_root) {
            var e = box2d.b2DynamicTree.s_stack.Reset();
            for (e.Push(this.m_root); 0 < e.GetCount();) {
                var r = e.Pop();
                if (null !== r && r.aabb.TestOverlap(t))
                    if (r.IsLeaf()) {
                        if (!o(r)) break;
                    } else e.Push(r.child1), e.Push(r.child2);
            }
        }
    }, goog.exportProperty(box2d.b2DynamicTree.prototype, "Query", box2d.b2DynamicTree.prototype.Query),
    box2d.b2DynamicTree.prototype.RayCast = function(o, t) {
        if (null !== this.m_root) {
            var e = t.p1,
                r = t.p2,
                i = box2d.b2Sub_V2_V2(r, e, box2d.b2DynamicTree.s_r);
            box2d.ENABLE_ASSERTS && box2d.b2Assert(0 < i.LengthSquared()), i.Normalize();
            i = box2d.b2Cross_S_V2(1, i, box2d.b2DynamicTree.s_v);
            var b = box2d.b2Abs_V2(i, box2d.b2DynamicTree.s_abs_v),
                n = t.maxFraction,
                p = box2d.b2DynamicTree.s_segmentAABB,
                s = e.x + n * (r.x - e.x),
                a = e.y + n * (r.y - e.y);
            p.lowerBound.x = box2d.b2Min(e.x, s), p.lowerBound.y = box2d.b2Min(e.y, a), p.upperBound.x = box2d.b2Max(e.x, s),
                p.upperBound.y = box2d.b2Max(e.y, a);
            var d = box2d.b2DynamicTree.s_stack.Reset();
            for (d.Push(this.m_root); 0 < d.GetCount();)
                if (null !== (s = d.Pop()) && box2d.b2TestOverlap_AABB(s.aabb, p)) {
                    a = s.aabb.GetCenter();
                    var l = s.aabb.GetExtents();
                    if (!(0 < box2d.b2Abs(box2d.b2Dot_V2_V2(i, box2d.b2Sub_V2_V2(e, a, box2d.b2Vec2.s_t0))) - box2d.b2Dot_V2_V2(b, l)))
                        if (s.IsLeaf()) {
                            if ((a = box2d.b2DynamicTree.s_subInput).p1.Copy(t.p1), a.p2.Copy(t.p2), a.maxFraction = n,
                                0 === (s = o(a, s))) break;
                            0 < s && (n = s, s = e.x + n * (r.x - e.x), a = e.y + n * (r.y - e.y), p.lowerBound.x = box2d.b2Min(e.x, s),
                                p.lowerBound.y = box2d.b2Min(e.y, a), p.upperBound.x = box2d.b2Max(e.x, s), p.upperBound.y = box2d.b2Max(e.y, a));
                        } else d.Push(s.child1), d.Push(s.child2);
                }
        }
    }, goog.exportProperty(box2d.b2DynamicTree.prototype, "RayCast", box2d.b2DynamicTree.prototype.RayCast),
    box2d.b2DynamicTree.prototype.AllocateNode = function() {
        if (this.m_freeList) {
            var o = this.m_freeList;
            return this.m_freeList = o.parent, o.parent = null, o.child1 = null, o.child2 = null,
                o.height = 0, o.userData = null, o;
        }
        return new box2d.b2TreeNode(box2d.b2DynamicTree.prototype.s_node_id++);
    }, goog.exportProperty(box2d.b2DynamicTree.prototype, "AllocateNode", box2d.b2DynamicTree.prototype.AllocateNode),
    box2d.b2DynamicTree.prototype.s_node_id = 0, box2d.b2DynamicTree.prototype.FreeNode = function(o) {
        o.parent = this.m_freeList, o.height = -1, this.m_freeList = o;
    }, goog.exportProperty(box2d.b2DynamicTree.prototype, "FreeNode", box2d.b2DynamicTree.prototype.FreeNode),
    box2d.b2DynamicTree.prototype.CreateProxy = function(o, t) {
        var e = this.AllocateNode(),
            r = box2d.b2_aabbExtension,
            i = box2d.b2_aabbExtension;
        return e.aabb.lowerBound.x = o.lowerBound.x - r, e.aabb.lowerBound.y = o.lowerBound.y - i,
            e.aabb.upperBound.x = o.upperBound.x + r, e.aabb.upperBound.y = o.upperBound.y + i,
            e.userData = t, e.height = 0, this.InsertLeaf(e), e;
    }, goog.exportProperty(box2d.b2DynamicTree.prototype, "CreateProxy", box2d.b2DynamicTree.prototype.CreateProxy),
    box2d.b2DynamicTree.prototype.DestroyProxy = function(o) {
        box2d.ENABLE_ASSERTS && box2d.b2Assert(o.IsLeaf()), this.RemoveLeaf(o), this.FreeNode(o);
    }, goog.exportProperty(box2d.b2DynamicTree.prototype, "DestroyProxy", box2d.b2DynamicTree.prototype.DestroyProxy),
    box2d.b2DynamicTree.prototype.MoveProxy = function(o, t, e) {
        if (box2d.ENABLE_ASSERTS && box2d.b2Assert(o.IsLeaf()), o.aabb.Contains(t)) return !1;
        this.RemoveLeaf(o);
        var r = box2d.b2_aabbExtension + box2d.b2_aabbMultiplier * (0 < e.x ? e.x : -e.x);
        return e = box2d.b2_aabbExtension + box2d.b2_aabbMultiplier * (0 < e.y ? e.y : -e.y),
            o.aabb.lowerBound.x = t.lowerBound.x - r, o.aabb.lowerBound.y = t.lowerBound.y - e,
            o.aabb.upperBound.x = t.upperBound.x + r, o.aabb.upperBound.y = t.upperBound.y + e,
            this.InsertLeaf(o), !0;
    }, goog.exportProperty(box2d.b2DynamicTree.prototype, "MoveProxy", box2d.b2DynamicTree.prototype.MoveProxy),
    box2d.b2DynamicTree.prototype.InsertLeaf = function(o) {
        if (++this.m_insertionCount, null === this.m_root) this.m_root = o, this.m_root.parent = null;
        else {
            var t = o.aabb;
            t.GetCenter();
            for (var e, r, i = this.m_root; !i.IsLeaf();) {
                e = i.child1, r = i.child2;
                var b = i.aabb.GetPerimeter();
                (p = box2d.b2DynamicTree.s_combinedAABB).Combine2(i.aabb, t);
                var n, p = 2 * (s = p.GetPerimeter()),
                    s = 2 * (s - b),
                    a = box2d.b2DynamicTree.s_aabb;
                if (e.IsLeaf() ? (a.Combine2(t, e.aabb), b = a.GetPerimeter() + s) : (a.Combine2(t, e.aabb),
                        n = e.aabb.GetPerimeter(), b = a.GetPerimeter() - n + s), r.IsLeaf() ? (a.Combine2(t, r.aabb),
                        s = a.GetPerimeter() + s) : (a.Combine2(t, r.aabb), n = r.aabb.GetPerimeter(), s = a.GetPerimeter() - n + s),
                    p < b && p < s) break;
                i = b < s ? e : r;
            }
            for (e = i.parent, (r = this.AllocateNode()).parent = e, r.userData = null, r.aabb.Combine2(t, i.aabb),
                r.height = i.height + 1, e ? (e.child1 === i ? e.child1 = r : e.child2 = r, r.child1 = i,
                    r.child2 = o, i.parent = r, o.parent = r) : (r.child1 = i, r.child2 = o, i.parent = r,
                    this.m_root = o.parent = r), i = o.parent; null !== i;) e = (i = this.Balance(i)).child1,
                r = i.child2, box2d.ENABLE_ASSERTS && box2d.b2Assert(null !== e), box2d.ENABLE_ASSERTS && box2d.b2Assert(null !== r),
                i.height = 1 + box2d.b2Max(e.height, r.height), i.aabb.Combine2(e.aabb, r.aabb),
                i = i.parent;
        }
    }, goog.exportProperty(box2d.b2DynamicTree.prototype, "InsertLeaf", box2d.b2DynamicTree.prototype.InsertLeaf),
    box2d.b2DynamicTree.prototype.RemoveLeaf = function(o) {
        if (o === this.m_root) this.m_root = null;
        else {
            var t = o.parent,
                e = t.parent;
            if (o = t.child1 === o ? t.child2 : t.child1, e)
                for (e.child1 === t ? e.child1 = o : e.child2 = o,
                    o.parent = e, this.FreeNode(t), t = e; t;) e = (t = this.Balance(t)).child1, o = t.child2,
                    t.aabb.Combine2(e.aabb, o.aabb), t.height = 1 + box2d.b2Max(e.height, o.height),
                    t = t.parent;
            else this.m_root = o, o.parent = null, this.FreeNode(t);
        }
    }, goog.exportProperty(box2d.b2DynamicTree.prototype, "RemoveLeaf", box2d.b2DynamicTree.prototype.RemoveLeaf),
    box2d.b2DynamicTree.prototype.Balance = function(o) {
        if (box2d.ENABLE_ASSERTS && box2d.b2Assert(null !== o), o.IsLeaf() || 2 > o.height) return o;
        var t = o.child1,
            e = o.child2;
        if (1 < (r = e.height - t.height)) {
            var r = e.child1,
                i = e.child2;
            return e.child1 = o, e.parent = o.parent, o.parent = e, null !== e.parent ? e.parent.child1 === o ? e.parent.child1 = e : (box2d.ENABLE_ASSERTS && box2d.b2Assert(e.parent.child2 === o),
                    e.parent.child2 = e) : this.m_root = e, r.height > i.height ? (e.child2 = r, o.child2 = i,
                    i.parent = o, o.aabb.Combine2(t.aabb, i.aabb), e.aabb.Combine2(o.aabb, r.aabb),
                    o.height = 1 + box2d.b2Max(t.height, i.height), e.height = 1 + box2d.b2Max(o.height, r.height)) : (e.child2 = i,
                    o.child2 = r, r.parent = o, o.aabb.Combine2(t.aabb, r.aabb), e.aabb.Combine2(o.aabb, i.aabb),
                    o.height = 1 + box2d.b2Max(t.height, r.height), e.height = 1 + box2d.b2Max(o.height, i.height)),
                e;
        }
        return -1 > r ? (r = t.child1, i = t.child2, t.child1 = o, t.parent = o.parent,
            o.parent = t, null !== t.parent ? t.parent.child1 === o ? t.parent.child1 = t : (box2d.ENABLE_ASSERTS && box2d.b2Assert(t.parent.child2 === o),
                t.parent.child2 = t) : this.m_root = t, r.height > i.height ? (t.child2 = r, o.child1 = i,
                i.parent = o, o.aabb.Combine2(e.aabb, i.aabb), t.aabb.Combine2(o.aabb, r.aabb),
                o.height = 1 + box2d.b2Max(e.height, i.height), t.height = 1 + box2d.b2Max(o.height, r.height)) : (t.child2 = i,
                o.child1 = r, r.parent = o, o.aabb.Combine2(e.aabb, r.aabb), t.aabb.Combine2(o.aabb, i.aabb),
                o.height = 1 + box2d.b2Max(e.height, r.height), t.height = 1 + box2d.b2Max(o.height, i.height)),
            t) : o;
    }, goog.exportProperty(box2d.b2DynamicTree.prototype, "Balance", box2d.b2DynamicTree.prototype.Balance),
    box2d.b2DynamicTree.prototype.GetHeight = function() {
        return null === this.m_root ? 0 : this.m_root.height;
    }, goog.exportProperty(box2d.b2DynamicTree.prototype, "GetHeight", box2d.b2DynamicTree.prototype.GetHeight),
    box2d.b2DynamicTree.prototype.GetAreaRatio = function() {
        if (null === this.m_root) return 0;
        var o = this.m_root.aabb.GetPerimeter(),
            t = function(o) {
                return null === o || o.IsLeaf() ? 0 : o.aabb.GetPerimeter() + t(o.child1) + t(o.child2);
            };
        return t(this.m_root) / o;
    }, goog.exportProperty(box2d.b2DynamicTree.prototype, "GetAreaRatio", box2d.b2DynamicTree.prototype.GetAreaRatio),
    box2d.b2DynamicTree.prototype.ComputeHeightNode = function(o) {
        if (o.IsLeaf()) return 0;
        var t = this.ComputeHeightNode(o.child1);
        return o = this.ComputeHeightNode(o.child2), 1 + box2d.b2Max(t, o);
    }, goog.exportProperty(box2d.b2DynamicTree.prototype, "ComputeHeightNode", box2d.b2DynamicTree.prototype.ComputeHeightNode),
    box2d.b2DynamicTree.prototype.ComputeHeight = function() {
        return this.ComputeHeightNode(this.m_root);
    }, goog.exportProperty(box2d.b2DynamicTree.prototype, "ComputeHeight", box2d.b2DynamicTree.prototype.ComputeHeight),
    box2d.b2DynamicTree.prototype.ValidateStructure = function(o) {
        if (null !== o) {
            o === this.m_root && box2d.ENABLE_ASSERTS && box2d.b2Assert(null === o.parent);
            var t = o.child1,
                e = o.child2;
            o.IsLeaf() ? (box2d.ENABLE_ASSERTS && box2d.b2Assert(null === t), box2d.ENABLE_ASSERTS && box2d.b2Assert(null === e),
                box2d.ENABLE_ASSERTS && box2d.b2Assert(0 === o.height)) : (box2d.ENABLE_ASSERTS && box2d.b2Assert(t.parent === o),
                box2d.ENABLE_ASSERTS && box2d.b2Assert(e.parent === o), this.ValidateStructure(t),
                this.ValidateStructure(e));
        }
    }, goog.exportProperty(box2d.b2DynamicTree.prototype, "ValidateStructure", box2d.b2DynamicTree.prototype.ValidateStructure),
    box2d.b2DynamicTree.prototype.ValidateMetrics = function(o) {
        if (null !== o) {
            var t, e = o.child1,
                r = o.child2;
            if (o.IsLeaf()) box2d.ENABLE_ASSERTS && box2d.b2Assert(null === e), box2d.ENABLE_ASSERTS && box2d.b2Assert(null === r),
                box2d.ENABLE_ASSERTS && box2d.b2Assert(0 === o.height);
            else t = 1 + box2d.b2Max(e.height, r.height),
                box2d.ENABLE_ASSERTS && box2d.b2Assert(o.height === t), (t = box2d.b2DynamicTree.s_aabb).Combine2(e.aabb, r.aabb),
                box2d.ENABLE_ASSERTS && box2d.b2Assert(t.lowerBound === o.aabb.lowerBound), box2d.ENABLE_ASSERTS && box2d.b2Assert(t.upperBound === o.aabb.upperBound),
                this.ValidateMetrics(e), this.ValidateMetrics(r);
        }
    }, goog.exportProperty(box2d.b2DynamicTree.prototype, "ValidateMetrics", box2d.b2DynamicTree.prototype.ValidateMetrics),
    box2d.b2DynamicTree.prototype.Validate = function() {
        this.ValidateStructure(this.m_root), this.ValidateMetrics(this.m_root);
        for (var o = this.m_freeList; null !== o;) o = o.parent, 0;
        box2d.ENABLE_ASSERTS && box2d.b2Assert(this.GetHeight() === this.ComputeHeight());
    }, goog.exportProperty(box2d.b2DynamicTree.prototype, "Validate", box2d.b2DynamicTree.prototype.Validate),
    box2d.b2DynamicTree.prototype.GetMaxBalance = function() {
        var o;
        return null === (o = this.m_root) ? o = 0 : 1 >= o.height ? o = 0 : (box2d.ENABLE_ASSERTS && box2d.b2Assert(!o.IsLeaf()),
            o = box2d.b2Abs(o.child2.height - o.child1.height), o = box2d.b2Max(0, o)), o;
    }, goog.exportProperty(box2d.b2DynamicTree.prototype, "GetMaxBalance", box2d.b2DynamicTree.prototype.GetMaxBalance),
    box2d.b2DynamicTree.prototype.RebuildBottomUp = function() {
        this.Validate();
    }, goog.exportProperty(box2d.b2DynamicTree.prototype, "RebuildBottomUp", box2d.b2DynamicTree.prototype.RebuildBottomUp),
    box2d.b2DynamicTree.prototype.ShiftOrigin = function(o) {
        var t = function(o, e) {
            if (null !== o && !(1 >= o.height)) {
                box2d.ENABLE_ASSERTS && box2d.b2Assert(!o.IsLeaf());
                var r = o.child2;
                t(o.child1, e), t(r, e), o.aabb.lowerBound.SelfSub(e), o.aabb.upperBound.SelfSub(e);
            }
        };
        t(this.m_root, o);
    }, goog.exportProperty(box2d.b2DynamicTree.prototype, "ShiftOrigin", box2d.b2DynamicTree.prototype.ShiftOrigin),
    box2d.b2Pair = function() {}, goog.exportSymbol("box2d.b2Pair", box2d.b2Pair), box2d.b2Pair.prototype.proxyA = null,
    goog.exportProperty(box2d.b2Pair.prototype, "proxyA", box2d.b2Pair.prototype.proxyA),
    box2d.b2Pair.prototype.proxyB = null, goog.exportProperty(box2d.b2Pair.prototype, "proxyB", box2d.b2Pair.prototype.proxyB),
    box2d.b2BroadPhase = function() {
        this.m_tree = new box2d.b2DynamicTree(), this.m_moveBuffer = [], this.m_pairBuffer = [];
    }, goog.exportSymbol("box2d.b2BroadPhase", box2d.b2BroadPhase), box2d.b2BroadPhase.prototype.m_tree = null,
    goog.exportProperty(box2d.b2BroadPhase.prototype, "m_tree", box2d.b2BroadPhase.prototype.m_tree),
    box2d.b2BroadPhase.prototype.m_proxyCount = 0, goog.exportProperty(box2d.b2BroadPhase.prototype, "m_proxyCount", box2d.b2BroadPhase.prototype.m_proxyCount),
    box2d.b2BroadPhase.prototype.m_moveCount = 0, goog.exportProperty(box2d.b2BroadPhase.prototype, "m_moveCount", box2d.b2BroadPhase.prototype.m_moveCount),
    box2d.b2BroadPhase.prototype.m_moveBuffer = null, goog.exportProperty(box2d.b2BroadPhase.prototype, "m_moveBuffer", box2d.b2BroadPhase.prototype.m_moveBuffer),
    box2d.b2BroadPhase.prototype.m_pairCount = 0, goog.exportProperty(box2d.b2BroadPhase.prototype, "m_pairCount", box2d.b2BroadPhase.prototype.m_pairCount),
    box2d.b2BroadPhase.prototype.m_pairBuffer = null, goog.exportProperty(box2d.b2BroadPhase.prototype, "m_pairBuffer", box2d.b2BroadPhase.prototype.m_pairBuffer),
    box2d.b2BroadPhase.prototype.CreateProxy = function(o, t) {
        var e = this.m_tree.CreateProxy(o, t);
        return ++this.m_proxyCount, this.BufferMove(e), e;
    }, goog.exportProperty(box2d.b2BroadPhase.prototype, "CreateProxy", box2d.b2BroadPhase.prototype.CreateProxy),
    box2d.b2BroadPhase.prototype.DestroyProxy = function(o) {
        this.UnBufferMove(o), --this.m_proxyCount, this.m_tree.DestroyProxy(o);
    }, goog.exportProperty(box2d.b2BroadPhase.prototype, "DestroyProxy", box2d.b2BroadPhase.prototype.DestroyProxy),
    box2d.b2BroadPhase.prototype.MoveProxy = function(o, t, e) {
        this.m_tree.MoveProxy(o, t, e) && this.BufferMove(o);
    }, goog.exportProperty(box2d.b2BroadPhase.prototype, "MoveProxy", box2d.b2BroadPhase.prototype.MoveProxy),
    box2d.b2BroadPhase.prototype.TouchProxy = function(o) {
        this.BufferMove(o);
    }, goog.exportProperty(box2d.b2BroadPhase.prototype, "TouchProxy", box2d.b2BroadPhase.prototype.TouchProxy),
    box2d.b2BroadPhase.prototype.GetFatAABB = function(o) {
        return this.m_tree.GetFatAABB(o);
    }, goog.exportProperty(box2d.b2BroadPhase.prototype, "GetFatAABB", box2d.b2BroadPhase.prototype.GetFatAABB),
    box2d.b2BroadPhase.prototype.GetUserData = function(o) {
        return this.m_tree.GetUserData(o);
    }, goog.exportProperty(box2d.b2BroadPhase.prototype, "GetUserData", box2d.b2BroadPhase.prototype.GetUserData),
    box2d.b2BroadPhase.prototype.TestOverlap = function(o, t) {
        var e = this.m_tree.GetFatAABB(o),
            r = this.m_tree.GetFatAABB(t);
        return box2d.b2TestOverlap_AABB(e, r);
    }, goog.exportProperty(box2d.b2BroadPhase.prototype, "TestOverlap", box2d.b2BroadPhase.prototype.TestOverlap),
    box2d.b2BroadPhase.prototype.GetProxyCount = function() {
        return this.m_proxyCount;
    }, goog.exportProperty(box2d.b2BroadPhase.prototype, "GetProxyCount", box2d.b2BroadPhase.prototype.GetProxyCount),
    box2d.b2BroadPhase.prototype.GetTreeHeight = function() {
        return this.m_tree.GetHeight();
    }, goog.exportProperty(box2d.b2BroadPhase.prototype, "GetTreeHeight", box2d.b2BroadPhase.prototype.GetTreeHeight),
    box2d.b2BroadPhase.prototype.GetTreeBalance = function() {
        return this.m_tree.GetMaxBalance();
    }, goog.exportProperty(box2d.b2BroadPhase.prototype, "GetTreeBalance", box2d.b2BroadPhase.prototype.GetTreeBalance),
    box2d.b2BroadPhase.prototype.GetTreeQuality = function() {
        return this.m_tree.GetAreaRatio();
    }, goog.exportProperty(box2d.b2BroadPhase.prototype, "GetTreeQuality", box2d.b2BroadPhase.prototype.GetTreeQuality),
    box2d.b2BroadPhase.prototype.ShiftOrigin = function(o) {
        this.m_tree.ShiftOrigin(o);
    }, goog.exportProperty(box2d.b2BroadPhase.prototype, "ShiftOrigin", box2d.b2BroadPhase.prototype.ShiftOrigin),
    box2d.b2BroadPhase.prototype.UpdatePairs = function(o) {
        for (var t = this.m_pairCount = 0; t < this.m_moveCount; ++t) {
            var e = this.m_moveBuffer[t];
            if (null !== e) {
                var r = this,
                    i = this.m_tree.GetFatAABB(e);
                this.m_tree.Query(function(o) {
                    if (o.m_id === e.m_id) return !0;
                    r.m_pairCount === r.m_pairBuffer.length && (r.m_pairBuffer[r.m_pairCount] = new box2d.b2Pair());
                    var t = r.m_pairBuffer[r.m_pairCount];
                    return o.m_id < e.m_id ? (t.proxyA = o, t.proxyB = e) : (t.proxyA = e, t.proxyB = o),
                        ++r.m_pairCount, !0;
                }, i);
            }
        }
        for (this.m_moveCount = 0, this.m_pairBuffer.length = this.m_pairCount, this.m_pairBuffer.sort(box2d.b2PairLessThan),
            t = 0; t < this.m_pairCount;) {
            i = this.m_pairBuffer[t];
            var b = this.m_tree.GetUserData(i.proxyA),
                n = this.m_tree.GetUserData(i.proxyB);
            for (o.AddPair(b, n), ++t; t < this.m_pairCount && ((b = this.m_pairBuffer[t]).proxyA.m_id === i.proxyA.m_id && b.proxyB.m_id === i.proxyB.m_id);) ++t;
        }
    }, goog.exportProperty(box2d.b2BroadPhase.prototype, "UpdatePairs", box2d.b2BroadPhase.prototype.UpdatePairs),
    box2d.b2BroadPhase.prototype.Query = function(o, t) {
        this.m_tree.Query(o, t);
    }, goog.exportProperty(box2d.b2BroadPhase.prototype, "Query", box2d.b2BroadPhase.prototype.Query),
    box2d.b2BroadPhase.prototype.RayCast = function(o, t) {
        this.m_tree.RayCast(o, t);
    }, goog.exportProperty(box2d.b2BroadPhase.prototype, "RayCast", box2d.b2BroadPhase.prototype.RayCast),
    box2d.b2BroadPhase.prototype.BufferMove = function(o) {
        this.m_moveBuffer[this.m_moveCount] = o, ++this.m_moveCount;
    }, goog.exportProperty(box2d.b2BroadPhase.prototype, "BufferMove", box2d.b2BroadPhase.prototype.BufferMove),
    box2d.b2BroadPhase.prototype.UnBufferMove = function(o) {
        o = this.m_moveBuffer.indexOf(o), this.m_moveBuffer[o] = null;
    }, goog.exportProperty(box2d.b2BroadPhase.prototype, "UnBufferMove", box2d.b2BroadPhase.prototype.UnBufferMove),
    box2d.b2PairLessThan = function(o, t) {
        return o.proxyA.m_id === t.proxyA.m_id ? o.proxyB.m_id - t.proxyB.m_id : o.proxyA.m_id - t.proxyA.m_id;
    }, box2d.b2MassData = function() {
        this.center = new box2d.b2Vec2(0, 0);
    }, goog.exportSymbol("box2d.b2MassData", box2d.b2MassData), box2d.b2MassData.prototype.mass = 0,
    goog.exportProperty(box2d.b2MassData.prototype, "mass", box2d.b2MassData.prototype.mass),
    box2d.b2MassData.prototype.center = null, goog.exportProperty(box2d.b2MassData.prototype, "center", box2d.b2MassData.prototype.center),
    box2d.b2MassData.prototype.I = 0, goog.exportProperty(box2d.b2MassData.prototype, "I", box2d.b2MassData.prototype.I),
    box2d.b2ShapeType = {
        e_unknown: -1,
        e_circleShape: 0,
        e_edgeShape: 1,
        e_polygonShape: 2,
        e_chainShape: 3,
        e_shapeTypeCount: 4
    }, goog.exportSymbol("box2d.b2ShapeType", box2d.b2ShapeType), goog.exportProperty(box2d.b2ShapeType, "e_unknown", box2d.b2ShapeType.e_unknown),
    goog.exportProperty(box2d.b2ShapeType, "e_circleShape", box2d.b2ShapeType.e_circleShape),
    goog.exportProperty(box2d.b2ShapeType, "e_edgeShape", box2d.b2ShapeType.e_edgeShape),
    goog.exportProperty(box2d.b2ShapeType, "e_polygonShape", box2d.b2ShapeType.e_polygonShape),
    goog.exportProperty(box2d.b2ShapeType, "e_chainShape", box2d.b2ShapeType.e_chainShape),
    goog.exportProperty(box2d.b2ShapeType, "e_shapeTypeCount", box2d.b2ShapeType.e_shapeTypeCount),
    box2d.b2Shape = function(o, t) {
        this.m_type = o, this.m_radius = t;
    }, goog.exportSymbol("box2d.b2Shape", box2d.b2Shape), box2d.b2Shape.prototype.m_type = box2d.b2ShapeType.e_unknown,
    goog.exportProperty(box2d.b2Shape.prototype, "m_type", box2d.b2Shape.prototype.m_type),
    box2d.b2Shape.prototype.m_radius = 0, goog.exportProperty(box2d.b2Shape.prototype, "m_radius", box2d.b2Shape.prototype.m_radius),
    box2d.b2Shape.prototype.Clone = function() {
        return box2d.ENABLE_ASSERTS && box2d.b2Assert(!1), null;
    }, goog.exportProperty(box2d.b2Shape.prototype, "Clone", box2d.b2Shape.prototype.Clone),
    box2d.b2Shape.prototype.Copy = function(o) {
        return box2d.ENABLE_ASSERTS && box2d.b2Assert(this.m_type === o.m_type), this.m_radius = o.m_radius,
            this;
    }, goog.exportProperty(box2d.b2Shape.prototype, "Copy", box2d.b2Shape.prototype.Copy),
    box2d.b2Shape.prototype.GetType = function() {
        return this.m_type;
    }, goog.exportProperty(box2d.b2Shape.prototype, "GetType", box2d.b2Shape.prototype.GetType),
    box2d.b2Shape.prototype.GetChildCount = function() {
        return box2d.ENABLE_ASSERTS && box2d.b2Assert(!1, "pure virtual"), 0;
    }, goog.exportProperty(box2d.b2Shape.prototype, "GetChildCount", box2d.b2Shape.prototype.GetChildCount),
    box2d.b2Shape.prototype.TestPoint = function(o, t) {
        return box2d.ENABLE_ASSERTS && box2d.b2Assert(!1, "pure virtual"), !1;
    }, goog.exportProperty(box2d.b2Shape.prototype, "TestPoint", box2d.b2Shape.prototype.TestPoint),
    box2d.b2Shape.prototype.ComputeDistance = function(o, t, e, r) {
        return box2d.ENABLE_ASSERTS && box2d.b2Assert(!1, "pure virtual"), 0;
    }, goog.exportProperty(box2d.b2Shape.prototype, "ComputeDistance", box2d.b2Shape.prototype.ComputeDistance),
    box2d.b2Shape.prototype.RayCast = function(o, t, e, r) {
        return box2d.ENABLE_ASSERTS && box2d.b2Assert(!1, "pure virtual"), !1;
    }, goog.exportProperty(box2d.b2Shape.prototype, "RayCast", box2d.b2Shape.prototype.RayCast),
    box2d.b2Shape.prototype.ComputeAABB = function(o, t, e) {
        box2d.ENABLE_ASSERTS && box2d.b2Assert(!1, "pure virtual");
    }, goog.exportProperty(box2d.b2Shape.prototype, "ComputeAABB", box2d.b2Shape.prototype.ComputeAABB),
    box2d.b2Shape.prototype.ComputeMass = function(o, t) {
        box2d.ENABLE_ASSERTS && box2d.b2Assert(!1, "pure virtual");
    }, goog.exportProperty(box2d.b2Shape.prototype, "ComputeMass", box2d.b2Shape.prototype.ComputeMass),
    box2d.b2Shape.prototype.SetupDistanceProxy = function(o, t) {
        box2d.ENABLE_ASSERTS && box2d.b2Assert(!1, "pure virtual");
    }, box2d.b2Shape.prototype.ComputeSubmergedArea = function(o, t, e, r) {
        return box2d.ENABLE_ASSERTS && box2d.b2Assert(!1, "pure virtual"), 0;
    }, goog.exportProperty(box2d.b2Shape.prototype, "ComputeSubmergedArea", box2d.b2Shape.prototype.ComputeSubmergedArea),
    box2d.b2Shape.prototype.Dump = function() {
        box2d.ENABLE_ASSERTS && box2d.b2Assert(!1, "pure virtual");
    }, goog.exportProperty(box2d.b2Shape.prototype, "Dump", box2d.b2Shape.prototype.Dump),
    box2d.b2CircleShape = function(o) {
        box2d.b2Shape.call(this, box2d.b2ShapeType.e_circleShape, o || 0), this.m_p = new box2d.b2Vec2();
    }, goog.inherits(box2d.b2CircleShape, box2d.b2Shape), goog.exportSymbol("box2d.b2CircleShape", box2d.b2CircleShape),
    box2d.b2CircleShape.prototype.m_p = null, goog.exportProperty(box2d.b2CircleShape.prototype, "m_p", box2d.b2CircleShape.prototype.m_p),
    box2d.b2CircleShape.prototype.Clone = function() {
        return new box2d.b2CircleShape().Copy(this);
    }, goog.exportProperty(box2d.b2CircleShape.prototype, "Clone", box2d.b2CircleShape.prototype.Clone),
    box2d.b2CircleShape.prototype.Copy = function(o) {
        return box2d.b2Shape.prototype.Copy.call(this, o), box2d.ENABLE_ASSERTS && box2d.b2Assert(o instanceof box2d.b2CircleShape),
            this.m_p.Copy(o.m_p), this;
    }, goog.exportProperty(box2d.b2CircleShape.prototype, "Copy", box2d.b2CircleShape.prototype.Copy),
    box2d.b2CircleShape.prototype.GetChildCount = function() {
        return 1;
    }, goog.exportProperty(box2d.b2CircleShape.prototype, "GetChildCount", box2d.b2CircleShape.prototype.GetChildCount),
    box2d.b2CircleShape.prototype.TestPoint = function(o, t) {
        var e = box2d.b2Mul_X_V2(o, this.m_p, box2d.b2CircleShape.prototype.TestPoint.s_center);
        e = box2d.b2Sub_V2_V2(t, e, box2d.b2CircleShape.prototype.TestPoint.s_d);
        return box2d.b2Dot_V2_V2(e, e) <= box2d.b2Sq(this.m_radius);
    }, goog.exportProperty(box2d.b2CircleShape.prototype, "TestPoint", box2d.b2CircleShape.prototype.TestPoint),
    box2d.b2CircleShape.prototype.TestPoint.s_center = new box2d.b2Vec2(), box2d.b2CircleShape.prototype.TestPoint.s_d = new box2d.b2Vec2(),
    box2d.b2CircleShape.prototype.ComputeDistance = function(o, t, e, r) {
        return o = box2d.b2Mul_X_V2(o, this.m_p, box2d.b2CircleShape.prototype.ComputeDistance.s_center),
            box2d.b2Sub_V2_V2(t, o, e), e.Normalize() - this.m_radius;
    }, goog.exportProperty(box2d.b2CircleShape.prototype, "ComputeDistance", box2d.b2CircleShape.prototype.ComputeDistance),
    box2d.b2CircleShape.prototype.ComputeDistance.s_center = new box2d.b2Vec2(), box2d.b2CircleShape.prototype.RayCast = function(o, t, e, r) {
        e = box2d.b2Mul_X_V2(e, this.m_p, box2d.b2CircleShape.prototype.RayCast.s_position),
            e = box2d.b2Sub_V2_V2(t.p1, e, box2d.b2CircleShape.prototype.RayCast.s_s);
        var i = box2d.b2Dot_V2_V2(e, e) - box2d.b2Sq(this.m_radius);
        r = box2d.b2Sub_V2_V2(t.p2, t.p1, box2d.b2CircleShape.prototype.RayCast.s_r);
        var b = box2d.b2Dot_V2_V2(e, r),
            n = box2d.b2Dot_V2_V2(r, r);
        return !(0 > (i = b * b - n * i) || n < box2d.b2_epsilon) && (0 <= (b = -(b + box2d.b2Sqrt(i))) && b <= t.maxFraction * n && (b /= n,
            o.fraction = b, box2d.b2AddMul_V2_S_V2(e, b, r, o.normal).SelfNormalize(), !0));
    }, goog.exportProperty(box2d.b2CircleShape.prototype, "RayCast", box2d.b2CircleShape.prototype.RayCast),
    box2d.b2CircleShape.prototype.RayCast.s_position = new box2d.b2Vec2(), box2d.b2CircleShape.prototype.RayCast.s_s = new box2d.b2Vec2(),
    box2d.b2CircleShape.prototype.RayCast.s_r = new box2d.b2Vec2(), box2d.b2CircleShape.prototype.ComputeAABB = function(o, t, e) {
        t = box2d.b2Mul_X_V2(t, this.m_p, box2d.b2CircleShape.prototype.ComputeAABB.s_p),
            o.lowerBound.Set(t.x - this.m_radius, t.y - this.m_radius), o.upperBound.Set(t.x + this.m_radius, t.y + this.m_radius);
    }, goog.exportProperty(box2d.b2CircleShape.prototype, "ComputeAABB", box2d.b2CircleShape.prototype.ComputeAABB),
    box2d.b2CircleShape.prototype.ComputeAABB.s_p = new box2d.b2Vec2(), box2d.b2CircleShape.prototype.ComputeMass = function(o, t) {
        var e = box2d.b2Sq(this.m_radius);
        o.mass = t * box2d.b2_pi * e, o.center.Copy(this.m_p), o.I = o.mass * (.5 * e + box2d.b2Dot_V2_V2(this.m_p, this.m_p));
    }, goog.exportProperty(box2d.b2CircleShape.prototype, "ComputeMass", box2d.b2CircleShape.prototype.ComputeMass),
    box2d.b2CircleShape.prototype.SetupDistanceProxy = function(o, t) {
        o.m_vertices = o.m_buffer, o.m_vertices[0].Copy(this.m_p), o.m_count = 1, o.m_radius = this.m_radius;
    }, box2d.b2CircleShape.prototype.ComputeSubmergedArea = function(o, t, e, r) {
        if (e = box2d.b2Mul_X_V2(e, this.m_p, new box2d.b2Vec2()), (b = -(box2d.b2Dot_V2_V2(o, e) - t)) < -this.m_radius + box2d.b2_epsilon) return 0;
        if (b > this.m_radius) return r.Copy(e), box2d.b2_pi * this.m_radius * this.m_radius;
        var i = b * b,
            b = (t = this.m_radius * this.m_radius) * (box2d.b2Asin(b / this.m_radius) + box2d.b2_pi / 2) + b * box2d.b2Sqrt(t - i);
        return t = -2 / 3 * box2d.b2Pow(t - i, 1.5) / b, r.x = e.x + o.x * t, r.y = e.y + o.y * t,
            b;
    }, goog.exportProperty(box2d.b2CircleShape.prototype, "ComputeSubmergedArea", box2d.b2CircleShape.prototype.ComputeSubmergedArea),
    box2d.b2CircleShape.prototype.Dump = function() {
        box2d.b2Log("    /*box2d.b2CircleShape*/ var shape = new box2d.b2CircleShape();\n"),
            box2d.b2Log("    shape.m_radius = %.15f;\n", this.m_radius), box2d.b2Log("    shape.m_p.Set(%.15f, %.15f);\n", this.m_p.x, this.m_p.y);
    }, goog.exportProperty(box2d.b2CircleShape.prototype, "Dump", box2d.b2CircleShape.prototype.Dump),
    box2d.b2EdgeShape = function() {
        box2d.b2Shape.call(this, box2d.b2ShapeType.e_edgeShape, box2d.b2_polygonRadius),
            this.m_vertex1 = new box2d.b2Vec2(), this.m_vertex2 = new box2d.b2Vec2(), this.m_vertex0 = new box2d.b2Vec2(),
            this.m_vertex3 = new box2d.b2Vec2();
    }, goog.inherits(box2d.b2EdgeShape, box2d.b2Shape), goog.exportSymbol("box2d.b2EdgeShape", box2d.b2EdgeShape),
    box2d.b2EdgeShape.prototype.m_vertex1 = null, goog.exportProperty(box2d.b2EdgeShape.prototype, "m_vertex1", box2d.b2EdgeShape.prototype.m_vertex1),
    box2d.b2EdgeShape.prototype.m_vertex2 = null, goog.exportProperty(box2d.b2EdgeShape.prototype, "m_vertex2", box2d.b2EdgeShape.prototype.m_vertex2),
    box2d.b2EdgeShape.prototype.m_vertex0 = null, goog.exportProperty(box2d.b2EdgeShape.prototype, "m_vertex0", box2d.b2EdgeShape.prototype.m_vertex0),
    box2d.b2EdgeShape.prototype.m_vertex3 = null, goog.exportProperty(box2d.b2EdgeShape.prototype, "m_vertex3", box2d.b2EdgeShape.prototype.m_vertex3),
    box2d.b2EdgeShape.prototype.m_hasVertex0 = !1, goog.exportProperty(box2d.b2EdgeShape.prototype, "m_hasVertex0", box2d.b2EdgeShape.prototype.m_hasVertex0),
    box2d.b2EdgeShape.prototype.m_hasVertex3 = !1, goog.exportProperty(box2d.b2EdgeShape.prototype, "m_hasVertex3", box2d.b2EdgeShape.prototype.m_hasVertex3),
    box2d.b2EdgeShape.prototype.Set = function(o, t) {
        return this.m_vertex1.Copy(o), this.m_vertex2.Copy(t), this.m_hasVertex3 = this.m_hasVertex0 = !1,
            this;
    }, goog.exportProperty(box2d.b2EdgeShape.prototype, "Set", box2d.b2EdgeShape.prototype.Set),
    box2d.b2EdgeShape.prototype.SetAsEdge = box2d.b2EdgeShape.prototype.Set, box2d.b2EdgeShape.prototype.Clone = function() {
        return new box2d.b2EdgeShape().Copy(this);
    }, goog.exportProperty(box2d.b2EdgeShape.prototype, "Clone", box2d.b2EdgeShape.prototype.Clone),
    box2d.b2EdgeShape.prototype.Copy = function(o) {
        return box2d.b2Shape.prototype.Copy.call(this, o), box2d.ENABLE_ASSERTS && box2d.b2Assert(o instanceof box2d.b2EdgeShape),
            this.m_vertex1.Copy(o.m_vertex1), this.m_vertex2.Copy(o.m_vertex2), this.m_vertex0.Copy(o.m_vertex0),
            this.m_vertex3.Copy(o.m_vertex3), this.m_hasVertex0 = o.m_hasVertex0, this.m_hasVertex3 = o.m_hasVertex3,
            this;
    }, goog.exportProperty(box2d.b2EdgeShape.prototype, "Copy", box2d.b2EdgeShape.prototype.Copy),
    box2d.b2EdgeShape.prototype.GetChildCount = function() {
        return 1;
    }, goog.exportProperty(box2d.b2EdgeShape.prototype, "GetChildCount", box2d.b2EdgeShape.prototype.GetChildCount),
    box2d.b2EdgeShape.prototype.TestPoint = function(o, t) {
        return !1;
    }, goog.exportProperty(box2d.b2EdgeShape.prototype, "TestPoint", box2d.b2EdgeShape.prototype.TestPoint),
    box2d.b2EdgeShape.prototype.ComputeDistance = function(o, t, e, r) {
        var i = box2d.b2Mul_X_V2(o, this.m_vertex1, box2d.b2EdgeShape.prototype.ComputeDistance.s_v1);
        o = box2d.b2Mul_X_V2(o, this.m_vertex2, box2d.b2EdgeShape.prototype.ComputeDistance.s_v2),
            r = box2d.b2Sub_V2_V2(t, i, box2d.b2EdgeShape.prototype.ComputeDistance.s_d);
        i = box2d.b2Sub_V2_V2(o, i, box2d.b2EdgeShape.prototype.ComputeDistance.s_s);
        var b = box2d.b2Dot_V2_V2(r, i);
        if (0 < b) {
            var n = box2d.b2Dot_V2_V2(i, i);
            b > n ? box2d.b2Sub_V2_V2(t, o, r) : r.SelfMulSub(b / n, i);
        }
        return e.Copy(r), e.Normalize();
    }, goog.exportProperty(box2d.b2EdgeShape.prototype, "ComputeDistance", box2d.b2EdgeShape.prototype.ComputeDistance),
    box2d.b2EdgeShape.prototype.ComputeDistance.s_v1 = new box2d.b2Vec2(), box2d.b2EdgeShape.prototype.ComputeDistance.s_v2 = new box2d.b2Vec2(),
    box2d.b2EdgeShape.prototype.ComputeDistance.s_d = new box2d.b2Vec2(), box2d.b2EdgeShape.prototype.ComputeDistance.s_s = new box2d.b2Vec2(),
    box2d.b2EdgeShape.prototype.RayCast = function(o, t, e, r) {
        var i = box2d.b2MulT_X_V2(e, t.p1, box2d.b2EdgeShape.prototype.RayCast.s_p1);
        r = box2d.b2MulT_X_V2(e, t.p2, box2d.b2EdgeShape.prototype.RayCast.s_p2);
        var b = box2d.b2Sub_V2_V2(r, i, box2d.b2EdgeShape.prototype.RayCast.s_d);
        r = this.m_vertex1;
        var n = this.m_vertex2,
            p = box2d.b2Sub_V2_V2(n, r, box2d.b2EdgeShape.prototype.RayCast.s_e),
            s = o.normal.Set(p.y, -p.x).SelfNormalize();
        p = box2d.b2Dot_V2_V2(s, box2d.b2Sub_V2_V2(r, i, box2d.b2Vec2.s_t0));
        return 0 !== (s = box2d.b2Dot_V2_V2(s, b)) && (!(0 > (s = p / s) || t.maxFraction < s) && (t = box2d.b2AddMul_V2_S_V2(i, s, b, box2d.b2EdgeShape.prototype.RayCast.s_q),
            i = box2d.b2Sub_V2_V2(n, r, box2d.b2EdgeShape.prototype.RayCast.s_r), 0 !== (n = box2d.b2Dot_V2_V2(i, i)) && (!(0 > (r = box2d.b2Dot_V2_V2(box2d.b2Sub_V2_V2(t, r, box2d.b2Vec2.s_t0), i) / n) || 1 < r) && (o.fraction = s,
                box2d.b2Mul_R_V2(e.q, o.normal, o.normal), 0 < p && o.normal.SelfNeg(), !0))));
    }, goog.exportProperty(box2d.b2EdgeShape.prototype, "RayCast", box2d.b2EdgeShape.prototype.RayCast),
    box2d.b2EdgeShape.prototype.RayCast.s_p1 = new box2d.b2Vec2(), box2d.b2EdgeShape.prototype.RayCast.s_p2 = new box2d.b2Vec2(),
    box2d.b2EdgeShape.prototype.RayCast.s_d = new box2d.b2Vec2(), box2d.b2EdgeShape.prototype.RayCast.s_e = new box2d.b2Vec2(),
    box2d.b2EdgeShape.prototype.RayCast.s_q = new box2d.b2Vec2(), box2d.b2EdgeShape.prototype.RayCast.s_r = new box2d.b2Vec2(),
    box2d.b2EdgeShape.prototype.ComputeAABB = function(o, t, e) {
        e = box2d.b2Mul_X_V2(t, this.m_vertex1, box2d.b2EdgeShape.prototype.ComputeAABB.s_v1),
            t = box2d.b2Mul_X_V2(t, this.m_vertex2, box2d.b2EdgeShape.prototype.ComputeAABB.s_v2),
            box2d.b2Min_V2_V2(e, t, o.lowerBound), box2d.b2Max_V2_V2(e, t, o.upperBound), t = this.m_radius,
            o.lowerBound.SelfSubXY(t, t), o.upperBound.SelfAddXY(t, t);
    }, goog.exportProperty(box2d.b2EdgeShape.prototype, "ComputeAABB", box2d.b2EdgeShape.prototype.ComputeAABB),
    box2d.b2EdgeShape.prototype.ComputeAABB.s_v1 = new box2d.b2Vec2(), box2d.b2EdgeShape.prototype.ComputeAABB.s_v2 = new box2d.b2Vec2(),
    box2d.b2EdgeShape.prototype.ComputeMass = function(o, t) {
        o.mass = 0, box2d.b2Mid_V2_V2(this.m_vertex1, this.m_vertex2, o.center), o.I = 0;
    }, goog.exportProperty(box2d.b2EdgeShape.prototype, "ComputeMass", box2d.b2EdgeShape.prototype.ComputeMass),
    box2d.b2EdgeShape.prototype.SetupDistanceProxy = function(o, t) {
        o.m_vertices = o.m_buffer, o.m_vertices[0].Copy(this.m_vertex1), o.m_vertices[1].Copy(this.m_vertex2),
            o.m_count = 2, o.m_radius = this.m_radius;
    }, box2d.b2EdgeShape.prototype.ComputeSubmergedArea = function(o, t, e, r) {
        return r.SetZero(), 0;
    }, goog.exportProperty(box2d.b2EdgeShape.prototype, "ComputeSubmergedArea", box2d.b2EdgeShape.prototype.ComputeSubmergedArea),
    box2d.b2EdgeShape.prototype.Dump = function() {
        box2d.b2Log("    /*box2d.b2EdgeShape*/ var shape = new box2d.b2EdgeShape();\n"),
            box2d.b2Log("    shape.m_radius = %.15f;\n", this.m_radius), box2d.b2Log("    shape.m_vertex0.Set(%.15f, %.15f);\n", this.m_vertex0.x, this.m_vertex0.y),
            box2d.b2Log("    shape.m_vertex1.Set(%.15f, %.15f);\n", this.m_vertex1.x, this.m_vertex1.y),
            box2d.b2Log("    shape.m_vertex2.Set(%.15f, %.15f);\n", this.m_vertex2.x, this.m_vertex2.y),
            box2d.b2Log("    shape.m_vertex3.Set(%.15f, %.15f);\n", this.m_vertex3.x, this.m_vertex3.y),
            box2d.b2Log("    shape.m_hasVertex0 = %s;\n", this.m_hasVertex0), box2d.b2Log("    shape.m_hasVertex3 = %s;\n", this.m_hasVertex3);
    }, goog.exportProperty(box2d.b2EdgeShape.prototype, "Dump", box2d.b2EdgeShape.prototype.Dump),
    box2d.b2ChainShape = function() {
        box2d.b2Shape.call(this, box2d.b2ShapeType.e_chainShape, box2d.b2_polygonRadius),
            this.m_prevVertex = new box2d.b2Vec2(), this.m_nextVertex = new box2d.b2Vec2();
    }, goog.inherits(box2d.b2ChainShape, box2d.b2Shape), goog.exportSymbol("box2d.b2ChainShape", box2d.b2ChainShape),
    box2d.b2ChainShape.prototype.m_vertices = null, goog.exportProperty(box2d.b2ChainShape.prototype, "m_vertices", box2d.b2ChainShape.prototype.m_vertices),
    box2d.b2ChainShape.prototype.m_count = 0, goog.exportProperty(box2d.b2ChainShape.prototype, "m_count", box2d.b2ChainShape.prototype.m_count),
    box2d.b2ChainShape.prototype.m_prevVertex = null, goog.exportProperty(box2d.b2ChainShape.prototype, "m_prevVertex", box2d.b2ChainShape.prototype.m_prevVertex),
    box2d.b2ChainShape.prototype.m_nextVertex = null, goog.exportProperty(box2d.b2ChainShape.prototype, "m_nextVertex", box2d.b2ChainShape.prototype.m_nextVertex),
    box2d.b2ChainShape.prototype.m_hasPrevVertex = !1, goog.exportProperty(box2d.b2ChainShape.prototype, "m_hasPrevVertex", box2d.b2ChainShape.prototype.m_hasPrevVertex),
    box2d.b2ChainShape.prototype.m_hasNextVertex = !1, goog.exportProperty(box2d.b2ChainShape.prototype, "m_hasNextVertex", box2d.b2ChainShape.prototype.m_hasNextVertex),
    box2d.b2ChainShape.prototype.Clear = function() {
        this.m_vertices = null, this.m_count = 0;
    }, goog.exportProperty(box2d.b2ChainShape.prototype, "Clear", box2d.b2ChainShape.prototype.Clear),
    box2d.b2ChainShape.prototype.CreateLoop = function(o, t) {
        if (t = t || o.length, box2d.ENABLE_ASSERTS && box2d.b2Assert(null === this.m_vertices && 0 === this.m_count),
            box2d.ENABLE_ASSERTS && box2d.b2Assert(3 <= t), box2d.ENABLE_ASSERTS)
            for (var e = 1; e < t; ++e) box2d.b2Assert(box2d.b2DistanceSquared(o[e - 1], o[e]) > box2d.b2_linearSlop * box2d.b2_linearSlop);
        for (this.m_count = t + 1, this.m_vertices = box2d.b2Vec2.MakeArray(this.m_count),
            e = 0; e < t; ++e) this.m_vertices[e].Copy(o[e]);
        return this.m_vertices[t].Copy(this.m_vertices[0]), this.m_prevVertex.Copy(this.m_vertices[this.m_count - 2]),
            this.m_nextVertex.Copy(this.m_vertices[1]), this.m_hasNextVertex = this.m_hasPrevVertex = !0,
            this;
    }, goog.exportProperty(box2d.b2ChainShape.prototype, "CreateLoop", box2d.b2ChainShape.prototype.CreateLoop),
    box2d.b2ChainShape.prototype.CreateChain = function(o, t) {
        if (t = t || o.length, box2d.ENABLE_ASSERTS && box2d.b2Assert(null === this.m_vertices && 0 === this.m_count),
            box2d.ENABLE_ASSERTS && box2d.b2Assert(2 <= t), box2d.ENABLE_ASSERTS)
            for (var e = 1; e < t; ++e) {
                let t = box2d.b2DistanceSquared(o[e - 1], o[e]) - box2d.b2_linearSlop * box2d.b2_linearSlop;
                box2d.b2Assert(t);
            }
        for (this.m_count = t, this.m_vertices = box2d.b2Vec2.MakeArray(t), e = 0; e < t; ++e) this.m_vertices[e].Copy(o[e]);
        return this.m_hasNextVertex = this.m_hasPrevVertex = !1, this.m_prevVertex.SetZero(),
            this.m_nextVertex.SetZero(), this;
    }, goog.exportProperty(box2d.b2ChainShape.prototype, "CreateChain", box2d.b2ChainShape.prototype.CreateChain),
    box2d.b2ChainShape.prototype.SetPrevVertex = function(o) {
        return this.m_prevVertex.Copy(o), this.m_hasPrevVertex = !0, this;
    }, goog.exportProperty(box2d.b2ChainShape.prototype, "SetPrevVertex", box2d.b2ChainShape.prototype.SetPrevVertex),
    box2d.b2ChainShape.prototype.SetNextVertex = function(o) {
        return this.m_nextVertex.Copy(o), this.m_hasNextVertex = !0, this;
    }, goog.exportProperty(box2d.b2ChainShape.prototype, "SetNextVertex", box2d.b2ChainShape.prototype.SetNextVertex),
    box2d.b2ChainShape.prototype.Clone = function() {
        return new box2d.b2ChainShape().Copy(this);
    }, goog.exportProperty(box2d.b2ChainShape.prototype, "Clone", box2d.b2ChainShape.prototype.Clone),
    box2d.b2ChainShape.prototype.Copy = function(o) {
        return box2d.b2Shape.prototype.Copy.call(this, o), box2d.ENABLE_ASSERTS && box2d.b2Assert(o instanceof box2d.b2ChainShape),
            this.CreateChain(o.m_vertices, o.m_count), this.m_prevVertex.Copy(o.m_prevVertex),
            this.m_nextVertex.Copy(o.m_nextVertex), this.m_hasPrevVertex = o.m_hasPrevVertex,
            this.m_hasNextVertex = o.m_hasNextVertex, this;
    }, goog.exportProperty(box2d.b2ChainShape.prototype, "Copy", box2d.b2ChainShape.prototype.Copy),
    box2d.b2ChainShape.prototype.GetChildCount = function() {
        return this.m_count - 1;
    }, goog.exportProperty(box2d.b2ChainShape.prototype, "GetChildCount", box2d.b2ChainShape.prototype.GetChildCount),
    box2d.b2ChainShape.prototype.GetChildEdge = function(o, t) {
        box2d.ENABLE_ASSERTS && box2d.b2Assert(0 <= t && t < this.m_count - 1), o.m_type = box2d.b2ShapeType.e_edgeShape,
            o.m_radius = this.m_radius, o.m_vertex1.Copy(this.m_vertices[t]), o.m_vertex2.Copy(this.m_vertices[t + 1]),
            0 < t ? (o.m_vertex0.Copy(this.m_vertices[t - 1]), o.m_hasVertex0 = !0) : (o.m_vertex0.Copy(this.m_prevVertex),
                o.m_hasVertex0 = this.m_hasPrevVertex), t < this.m_count - 2 ? (o.m_vertex3.Copy(this.m_vertices[t + 2]),
                o.m_hasVertex3 = !0) : (o.m_vertex3.Copy(this.m_nextVertex), o.m_hasVertex3 = this.m_hasNextVertex);
    }, goog.exportProperty(box2d.b2ChainShape.prototype, "GetChildEdge", box2d.b2ChainShape.prototype.GetChildEdge),
    box2d.b2ChainShape.prototype.TestPoint = function(o, t) {
        return !1;
    }, goog.exportProperty(box2d.b2ChainShape.prototype, "TestPoint", box2d.b2ChainShape.prototype.TestPoint),
    box2d.b2ChainShape.prototype.ComputeDistance = function(o, t, e, r) {
        var i = box2d.b2ChainShape.prototype.ComputeDistance.s_edgeShape;
        return this.GetChildEdge(i, r), i.ComputeDistance(o, t, e, 0);
    }, goog.exportProperty(box2d.b2ChainShape.prototype, "ComputeDistance", box2d.b2ChainShape.prototype.ComputeDistance),
    box2d.b2ChainShape.prototype.ComputeDistance.s_edgeShape = new box2d.b2EdgeShape(),
    box2d.b2ChainShape.prototype.RayCast = function(o, t, e, r) {
        box2d.ENABLE_ASSERTS && box2d.b2Assert(r < this.m_count);
        var i = box2d.b2ChainShape.prototype.RayCast.s_edgeShape;
        return i.m_vertex1.Copy(this.m_vertices[r]), i.m_vertex2.Copy(this.m_vertices[(r + 1) % this.m_count]),
            i.RayCast(o, t, e, 0);
    }, goog.exportProperty(box2d.b2ChainShape.prototype, "RayCast", box2d.b2ChainShape.prototype.RayCast),
    box2d.b2ChainShape.prototype.RayCast.s_edgeShape = new box2d.b2EdgeShape(), box2d.b2ChainShape.prototype.ComputeAABB = function(o, t, e) {
        box2d.ENABLE_ASSERTS && box2d.b2Assert(e < this.m_count);
        var r = this.m_vertices[(e + 1) % this.m_count];
        e = box2d.b2Mul_X_V2(t, this.m_vertices[e], box2d.b2ChainShape.prototype.ComputeAABB.s_v1),
            t = box2d.b2Mul_X_V2(t, r, box2d.b2ChainShape.prototype.ComputeAABB.s_v2), box2d.b2Min_V2_V2(e, t, o.lowerBound),
            box2d.b2Max_V2_V2(e, t, o.upperBound);
    }, goog.exportProperty(box2d.b2ChainShape.prototype, "ComputeAABB", box2d.b2ChainShape.prototype.ComputeAABB),
    box2d.b2ChainShape.prototype.ComputeAABB.s_v1 = new box2d.b2Vec2(), goog.exportProperty(box2d.b2ChainShape.prototype.ComputeAABB, "s_v1", box2d.b2ChainShape.prototype.ComputeAABB.s_v1),
    box2d.b2ChainShape.prototype.ComputeAABB.s_v2 = new box2d.b2Vec2(), goog.exportProperty(box2d.b2ChainShape.prototype.ComputeAABB, "s_v2", box2d.b2ChainShape.prototype.ComputeAABB.s_v2),
    box2d.b2ChainShape.prototype.ComputeMass = function(o, t) {
        o.mass = 0, o.center.SetZero(), o.I = 0;
    }, goog.exportProperty(box2d.b2ChainShape.prototype, "ComputeMass", box2d.b2ChainShape.prototype.ComputeMass),
    box2d.b2ChainShape.prototype.SetupDistanceProxy = function(o, t) {
        box2d.ENABLE_ASSERTS && box2d.b2Assert(0 <= t && t < this.m_count), o.m_buffer[0].Copy(this.m_vertices[t]),
            t + 1 < this.m_count ? o.m_buffer[1].Copy(this.m_vertices[t + 1]) : o.m_buffer[1].Copy(this.m_vertices[0]),
            o.m_vertices = o.m_buffer, o.m_count = 2, o.m_radius = this.m_radius;
    }, box2d.b2ChainShape.prototype.ComputeSubmergedArea = function(o, t, e, r) {
        return r.SetZero(), 0;
    }, goog.exportProperty(box2d.b2ChainShape.prototype, "ComputeSubmergedArea", box2d.b2ChainShape.prototype.ComputeSubmergedArea),
    box2d.b2ChainShape.prototype.Dump = function() {
        box2d.b2Log("    /*box2d.b2ChainShape*/ var shape = new box2d.b2ChainShape();\n"),
            box2d.b2Log("    /*box2d.b2Vec2[]*/ var vs = box2d.b2Vec2.MakeArray(%d);\n", box2d.b2_maxPolygonVertices);
        for (var o = 0; o < this.m_count; ++o) box2d.b2Log("    vs[%d].Set(%.15f, %.15f);\n", o, this.m_vertices[o].x, this.m_vertices[o].y);
        box2d.b2Log("    shape.CreateChain(vs, %d);\n", this.m_count), box2d.b2Log("    shape.m_prevVertex.Set(%.15f, %.15f);\n", this.m_prevVertex.x, this.m_prevVertex.y),
            box2d.b2Log("    shape.m_nextVertex.Set(%.15f, %.15f);\n", this.m_nextVertex.x, this.m_nextVertex.y),
            box2d.b2Log("    shape.m_hasPrevVertex = %s;\n", this.m_hasPrevVertex ? "true" : "false"),
            box2d.b2Log("    shape.m_hasNextVertex = %s;\n", this.m_hasNextVertex ? "true" : "false");
    }, goog.exportProperty(box2d.b2ChainShape.prototype, "Dump", box2d.b2ChainShape.prototype.Dump),
    box2d.b2PolygonShape = function() {
        box2d.b2Shape.call(this, box2d.b2ShapeType.e_polygonShape, box2d.b2_polygonRadius),
            this.m_centroid = new box2d.b2Vec2(0, 0), this.m_vertices = box2d.b2Vec2.MakeArray(box2d.b2_maxPolygonVertices),
            this.m_normals = box2d.b2Vec2.MakeArray(box2d.b2_maxPolygonVertices);
    }, goog.inherits(box2d.b2PolygonShape, box2d.b2Shape), goog.exportSymbol("box2d.b2PolygonShape", box2d.b2PolygonShape),
    box2d.b2PolygonShape.prototype.m_centroid = null, goog.exportProperty(box2d.b2PolygonShape.prototype, "m_centroid", box2d.b2PolygonShape.prototype.m_centroid),
    box2d.b2PolygonShape.prototype.m_vertices = null, goog.exportProperty(box2d.b2PolygonShape.prototype, "m_vertices", box2d.b2PolygonShape.prototype.m_vertices),
    box2d.b2PolygonShape.prototype.m_normals = null, goog.exportProperty(box2d.b2PolygonShape.prototype, "m_normals", box2d.b2PolygonShape.prototype.m_normals),
    box2d.b2PolygonShape.prototype.m_count = 0, goog.exportProperty(box2d.b2PolygonShape.prototype, "m_count", box2d.b2PolygonShape.prototype.m_count),
    box2d.b2PolygonShape.prototype.Clone = function() {
        return new box2d.b2PolygonShape().Copy(this);
    }, goog.exportProperty(box2d.b2PolygonShape.prototype, "Clone", box2d.b2PolygonShape.prototype.Clone),
    box2d.b2PolygonShape.prototype.Copy = function(o) {
        box2d.b2Shape.prototype.Copy.call(this, o), box2d.ENABLE_ASSERTS && box2d.b2Assert(o instanceof box2d.b2PolygonShape),
            this.m_centroid.Copy(o.m_centroid), this.m_count = o.m_count;
        for (var t = 0, e = this.m_count; t < e; ++t) this.m_vertices[t].Copy(o.m_vertices[t]),
            this.m_normals[t].Copy(o.m_normals[t]);
        return this;
    }, goog.exportProperty(box2d.b2PolygonShape.prototype, "Copy", box2d.b2PolygonShape.prototype.Copy),
    box2d.b2PolygonShape.prototype.SetAsBox = function(o, t, e, r) {
        if (this.m_count = 4, this.m_vertices[0].Set(-o, -t), this.m_vertices[1].Set(o, -t),
            this.m_vertices[2].Set(o, t), this.m_vertices[3].Set(-o, t), this.m_normals[0].Set(0, -1),
            this.m_normals[1].Set(1, 0), this.m_normals[2].Set(0, 1), this.m_normals[3].Set(-1, 0),
            this.m_centroid.SetZero(), e instanceof box2d.b2Vec2)
            for (r = "number" == typeof r ? r : 0,
                this.m_centroid.Copy(e), (o = new box2d.b2Transform()).SetPosition(e), o.SetRotationAngle(r),
                e = 0, r = this.m_count; e < r; ++e) box2d.b2Mul_X_V2(o, this.m_vertices[e], this.m_vertices[e]),
                box2d.b2Mul_R_V2(o.q, this.m_normals[e], this.m_normals[e]);
        return this;
    }, goog.exportProperty(box2d.b2PolygonShape.prototype, "SetAsBox", box2d.b2PolygonShape.prototype.SetAsBox),
    box2d.b2PolygonShape.prototype.Set = function(o, t, e) {
        if (t = "number" == typeof t ? t : o.length, e = "number" == typeof e ? e : 0, box2d.ENABLE_ASSERTS && box2d.b2Assert(3 <= t && t <= box2d.b2_maxPolygonVertices),
            3 > t) return this.SetAsBox(1, 1);
        t = box2d.b2Min(t, box2d.b2_maxPolygonVertices);
        for (var r = box2d.b2PolygonShape.prototype.Set.s_ps, i = 0, b = 0; b < t; ++b) {
            for (var n = o[e + b], p = !0, s = 0; s < i; ++s)
                if (box2d.b2DistanceSquared(n, r[s]) < .25 * box2d.b2_linearSlop * box2d.b2_linearSlop) {
                    p = !1;
                    break;
                }
            p && r[i++].Copy(n);
        }
        if (3 > (t = i)) return box2d.ENABLE_ASSERTS && box2d.b2Assert(!1), this.SetAsBox(1, 1);
        for (o = 0, n = r[0].x, b = 1; b < t; ++b)((s = r[b].x) > n || s === n && r[b].y < r[o].y) && (o = b,
            n = s);
        for (i = box2d.b2PolygonShape.prototype.Set.s_hull, e = 0, b = o;;) {
            for (i[e] = b, p = 0, s = 1; s < t; ++s)
                if (p === b) p = s;
                else {
                    var a = box2d.b2Sub_V2_V2(r[p], r[i[e]], box2d.b2PolygonShape.prototype.Set.s_r),
                        d = (n = box2d.b2Sub_V2_V2(r[s], r[i[e]], box2d.b2PolygonShape.prototype.Set.s_v),
                            box2d.b2Cross_V2_V2(a, n));
                    0 > d && (p = s), 0 === d && n.LengthSquared() > a.LengthSquared() && (p = s);
                }
            if (++e, b = p, p === o) break;
        }
        if (3 > e) return box2d.ENABLE_ASSERTS && box2d.b2Assert(!1), this.SetAsBox(1, 1);
        for (this.m_count = e, b = 0; b < e; ++b) this.m_vertices[b].Copy(r[i[b]]);
        for (b = 0, t = e; b < t; ++b) r = box2d.b2Sub_V2_V2(this.m_vertices[(b + 1) % t], this.m_vertices[b], box2d.b2Vec2.s_t0),
            box2d.ENABLE_ASSERTS && box2d.b2Assert(r.LengthSquared() > box2d.b2_epsilon_sq),
            box2d.b2Cross_V2_S(r, 1, this.m_normals[b]).SelfNormalize();
        return box2d.b2PolygonShape.ComputeCentroid(this.m_vertices, e, this.m_centroid),
            this;
    }, goog.exportProperty(box2d.b2PolygonShape.prototype, "Set", box2d.b2PolygonShape.prototype.Set),
    box2d.b2PolygonShape.prototype.Set.s_ps = box2d.b2Vec2.MakeArray(box2d.b2_maxPolygonVertices),
    box2d.b2PolygonShape.prototype.Set.s_hull = box2d.b2MakeNumberArray(box2d.b2_maxPolygonVertices),
    box2d.b2PolygonShape.prototype.Set.s_r = new box2d.b2Vec2(), box2d.b2PolygonShape.prototype.Set.s_v = new box2d.b2Vec2(),
    box2d.b2PolygonShape.prototype.GetChildCount = function() {
        return 1;
    }, goog.exportProperty(box2d.b2PolygonShape.prototype, "GetChildCount", box2d.b2PolygonShape.prototype.GetChildCount),
    box2d.b2PolygonShape.prototype.TestPoint = function(o, t) {
        for (var e = box2d.b2MulT_X_V2(o, t, box2d.b2PolygonShape.prototype.TestPoint.s_pLocal), r = 0, i = this.m_count; r < i; ++r)
            if (0 < box2d.b2Dot_V2_V2(this.m_normals[r], box2d.b2Sub_V2_V2(e, this.m_vertices[r], box2d.b2Vec2.s_t0))) return !1;
        return !0;
    }, goog.exportProperty(box2d.b2PolygonShape.prototype, "TestPoint", box2d.b2PolygonShape.prototype.TestPoint),
    box2d.b2PolygonShape.prototype.TestPoint.s_pLocal = new box2d.b2Vec2(), box2d.b2PolygonShape.prototype.ComputeDistance = function(o, t, e, r) {
        t = box2d.b2MulT_X_V2(o, t, box2d.b2PolygonShape.prototype.ComputeDistance.s_pLocal);
        var i = -box2d.b2_maxFloat,
            b = box2d.b2PolygonShape.prototype.ComputeDistance.s_normalForMaxDistance.Copy(t);
        for (r = 0; r < this.m_count; ++r) {
            (n = box2d.b2Dot_V2_V2(this.m_normals[r], box2d.b2Sub_V2_V2(t, this.m_vertices[r], box2d.b2Vec2.s_t0))) > i && (i = n,
                b.Copy(this.m_normals[r]));
        }
        if (0 < i) {
            for (b = box2d.b2PolygonShape.prototype.ComputeDistance.s_minDistance.Copy(b), i *= i,
                r = 0; r < this.m_count; ++r) {
                var n, p = (n = box2d.b2Sub_V2_V2(t, this.m_vertices[r], box2d.b2PolygonShape.prototype.ComputeDistance.s_distance)).LengthSquared();
                i > p && (b.Copy(n), i = p);
            }
            return box2d.b2Mul_R_V2(o.q, b, e), e.Normalize(), Math.sqrt(i);
        }
        return box2d.b2Mul_R_V2(o.q, b, e), i;
    }, goog.exportProperty(box2d.b2PolygonShape.prototype, "ComputeDistance", box2d.b2PolygonShape.prototype.ComputeDistance),
    box2d.b2PolygonShape.prototype.ComputeDistance.s_pLocal = new box2d.b2Vec2(), box2d.b2PolygonShape.prototype.ComputeDistance.s_normalForMaxDistance = new box2d.b2Vec2(),
    box2d.b2PolygonShape.prototype.ComputeDistance.s_minDistance = new box2d.b2Vec2(),
    box2d.b2PolygonShape.prototype.ComputeDistance.s_distance = new box2d.b2Vec2(),
    box2d.b2PolygonShape.prototype.RayCast = function(o, t, e, r) {
        r = box2d.b2MulT_X_V2(e, t.p1, box2d.b2PolygonShape.prototype.RayCast.s_p1);
        for (var i = box2d.b2MulT_X_V2(e, t.p2, box2d.b2PolygonShape.prototype.RayCast.s_p2), b = (i = box2d.b2Sub_V2_V2(i, r, box2d.b2PolygonShape.prototype.RayCast.s_d),
                0), n = t.maxFraction, p = -1, s = 0, a = this.m_count; s < a; ++s) {
            var d = box2d.b2Dot_V2_V2(this.m_normals[s], box2d.b2Sub_V2_V2(this.m_vertices[s], r, box2d.b2Vec2.s_t0)),
                l = box2d.b2Dot_V2_V2(this.m_normals[s], i);
            if (0 === l) {
                if (0 > d) return !1;
            } else 0 > l && d < b * l ? (b = d / l, p = s) : 0 < l && d < n * l && (n = d / l);
            if (n < b) return !1;
        }
        return box2d.ENABLE_ASSERTS && box2d.b2Assert(0 <= b && b <= t.maxFraction), 0 <= p && (o.fraction = b,
            box2d.b2Mul_R_V2(e.q, this.m_normals[p], o.normal), !0);
    }, goog.exportProperty(box2d.b2PolygonShape.prototype, "RayCast", box2d.b2PolygonShape.prototype.RayCast),
    box2d.b2PolygonShape.prototype.RayCast.s_p1 = new box2d.b2Vec2(), box2d.b2PolygonShape.prototype.RayCast.s_p2 = new box2d.b2Vec2(),
    box2d.b2PolygonShape.prototype.RayCast.s_d = new box2d.b2Vec2(), box2d.b2PolygonShape.prototype.ComputeAABB = function(o, t, e) {
        e = box2d.b2Mul_X_V2(t, this.m_vertices[0], o.lowerBound), o = o.upperBound.Copy(e);
        for (var r = 0, i = this.m_count; r < i; ++r) {
            var b = box2d.b2Mul_X_V2(t, this.m_vertices[r], box2d.b2PolygonShape.prototype.ComputeAABB.s_v);
            box2d.b2Min_V2_V2(b, e, e), box2d.b2Max_V2_V2(b, o, o);
        }
        t = this.m_radius, e.SelfSubXY(t, t), o.SelfAddXY(t, t);
    }, goog.exportProperty(box2d.b2PolygonShape.prototype, "ComputeAABB", box2d.b2PolygonShape.prototype.ComputeAABB),
    box2d.b2PolygonShape.prototype.ComputeAABB.s_v = new box2d.b2Vec2(), box2d.b2PolygonShape.prototype.ComputeMass = function(o, t) {
        box2d.ENABLE_ASSERTS && box2d.b2Assert(3 <= this.m_count);
        for (var e = box2d.b2PolygonShape.prototype.ComputeMass.s_center.SetZero(), r = 0, i = 0, b = box2d.b2PolygonShape.prototype.ComputeMass.s_s.SetZero(), n = 0, p = this.m_count; n < p; ++n) b.SelfAdd(this.m_vertices[n]);
        b.SelfMul(1 / this.m_count);
        for (n = 0, p = this.m_count; n < p; ++n) {
            var s = box2d.b2Sub_V2_V2(this.m_vertices[n], b, box2d.b2PolygonShape.prototype.ComputeMass.s_e1),
                a = box2d.b2Sub_V2_V2(this.m_vertices[(n + 1) % p], b, box2d.b2PolygonShape.prototype.ComputeMass.s_e2),
                d = box2d.b2Cross_V2_V2(s, a);
            r = r + (l = .5 * d);
            e.SelfAdd(box2d.b2Mul_S_V2(l * (1 / 3), box2d.b2Add_V2_V2(s, a, box2d.b2Vec2.s_t0), box2d.b2Vec2.s_t1));
            var l = s.x,
                x = (s = s.y, a.x);
            i = i + 1 / 3 * .25 * d * (l * l + x * l + x * x + (s * s + (a = a.y) * s + a * a));
        }
        o.mass = t * r, box2d.ENABLE_ASSERTS && box2d.b2Assert(r > box2d.b2_epsilon), e.SelfMul(1 / r),
            box2d.b2Add_V2_V2(e, b, o.center), o.I = t * i, o.I += o.mass * (box2d.b2Dot_V2_V2(o.center, o.center) - box2d.b2Dot_V2_V2(e, e));
    }, goog.exportProperty(box2d.b2PolygonShape.prototype, "ComputeMass", box2d.b2PolygonShape.prototype.ComputeMass),
    box2d.b2PolygonShape.prototype.ComputeMass.s_center = new box2d.b2Vec2(), box2d.b2PolygonShape.prototype.ComputeMass.s_s = new box2d.b2Vec2(),
    box2d.b2PolygonShape.prototype.ComputeMass.s_e1 = new box2d.b2Vec2(), box2d.b2PolygonShape.prototype.ComputeMass.s_e2 = new box2d.b2Vec2(),
    box2d.b2PolygonShape.prototype.Validate = function() {
        for (var o = 0; o < this.m_count; ++o)
            for (var t = o, e = (o + 1) % this.m_count, r = this.m_vertices[t], i = box2d.b2Sub_V2_V2(this.m_vertices[e], r, box2d.b2PolygonShape.prototype.Validate.s_e), b = 0; b < this.m_count; ++b)
                if (b !== t && b !== e) {
                    var n = box2d.b2Sub_V2_V2(this.m_vertices[b], r, box2d.b2PolygonShape.prototype.Validate.s_v);
                    if (0 > box2d.b2Cross_V2_V2(i, n)) return !1;
                }
        return !0;
    }, goog.exportProperty(box2d.b2PolygonShape.prototype, "Validate", box2d.b2PolygonShape.prototype.Validate),
    box2d.b2PolygonShape.prototype.Validate.s_e = new box2d.b2Vec2(), box2d.b2PolygonShape.prototype.Validate.s_v = new box2d.b2Vec2(),
    box2d.b2PolygonShape.prototype.SetupDistanceProxy = function(o, t) {
        o.m_vertices = this.m_vertices, o.m_count = this.m_count, o.m_radius = this.m_radius;
    }, box2d.b2PolygonShape.prototype.ComputeSubmergedArea = function(o, t, e, r) {
        var i = box2d.b2MulT_R_V2(e.q, o, box2d.b2PolygonShape.prototype.ComputeSubmergedArea.s_normalL),
            b = t - box2d.b2Dot_V2_V2(o, e.p),
            n = box2d.b2PolygonShape.prototype.ComputeSubmergedArea.s_depths,
            p = 0,
            s = -1;
        t = -1;
        var a = !1;
        o = 0;
        for (var d = this.m_count; o < d; ++o) {
            n[o] = box2d.b2Dot_V2_V2(i, this.m_vertices[o]) - b;
            var l = n[o] < -box2d.b2_epsilon;
            0 < o && (l ? a || (s = o - 1, p++) : a && (t = o - 1, p++)), a = l;
        }
        switch (p) {
            case 0:
                return a ? (o = box2d.b2PolygonShape.prototype.ComputeSubmergedArea.s_md, this.ComputeMass(o, 1),
                    box2d.b2Mul_X_V2(e, o.center, r), o.mass) : 0;

            case 1:
                -1 === s ? s = this.m_count - 1 : t = this.m_count - 1;
        }
        for (o = (s + 1) % this.m_count, i = (t + 1) % this.m_count, b = (0 - n[s]) / (n[o] - n[s]),
            n = (0 - n[t]) / (n[i] - n[t]), s = box2d.b2PolygonShape.prototype.ComputeSubmergedArea.s_intoVec.Set(this.m_vertices[s].x * (1 - b) + this.m_vertices[o].x * b, this.m_vertices[s].y * (1 - b) + this.m_vertices[o].y * b),
            t = box2d.b2PolygonShape.prototype.ComputeSubmergedArea.s_outoVec.Set(this.m_vertices[t].x * (1 - n) + this.m_vertices[i].x * n, this.m_vertices[t].y * (1 - n) + this.m_vertices[i].y * n),
            n = 0, b = box2d.b2PolygonShape.prototype.ComputeSubmergedArea.s_center.SetZero(),
            p = this.m_vertices[o], a = null; o !== i;) a = (o = (o + 1) % this.m_count) === i ? t : this.m_vertices[o],
            n += d = .5 * ((p.x - s.x) * (a.y - s.y) - (p.y - s.y) * (a.x - s.x)), b.x += d * (s.x + p.x + a.x) / 3,
            b.y += d * (s.y + p.y + a.y) / 3, p = a;
        return b.SelfMul(1 / n), box2d.b2Mul_X_V2(e, b, r), n;
    }, goog.exportProperty(box2d.b2PolygonShape.prototype, "ComputeSubmergedArea", box2d.b2PolygonShape.prototype.ComputeSubmergedArea),
    box2d.b2PolygonShape.prototype.ComputeSubmergedArea.s_normalL = new box2d.b2Vec2(),
    box2d.b2PolygonShape.prototype.ComputeSubmergedArea.s_depths = box2d.b2MakeNumberArray(box2d.b2_maxPolygonVertices),
    box2d.b2PolygonShape.prototype.ComputeSubmergedArea.s_md = new box2d.b2MassData(),
    box2d.b2PolygonShape.prototype.ComputeSubmergedArea.s_intoVec = new box2d.b2Vec2(),
    box2d.b2PolygonShape.prototype.ComputeSubmergedArea.s_outoVec = new box2d.b2Vec2(),
    box2d.b2PolygonShape.prototype.ComputeSubmergedArea.s_center = new box2d.b2Vec2(),
    box2d.b2PolygonShape.prototype.Dump = function() {
        box2d.b2Log("    /*box2d.b2PolygonShape*/ var shape = new box2d.b2PolygonShape();\n"),
            box2d.b2Log("    /*box2d.b2Vec2[]*/ var vs = box2d.b2Vec2.MakeArray(%d);\n", box2d.b2_maxPolygonVertices);
        for (var o = 0; o < this.m_count; ++o) box2d.b2Log("    vs[%d].Set(%.15f, %.15f);\n", o, this.m_vertices[o].x, this.m_vertices[o].y);
        box2d.b2Log("    shape.Set(vs, %d);\n", this.m_count);
    }, goog.exportProperty(box2d.b2PolygonShape.prototype, "Dump", box2d.b2PolygonShape.prototype.Dump),
    box2d.b2PolygonShape.ComputeCentroid = function(o, t, e) {
        box2d.ENABLE_ASSERTS && box2d.b2Assert(3 <= t), e.SetZero();
        for (var r = 0, i = box2d.b2PolygonShape.ComputeCentroid.s_pRef.SetZero(), b = 0; b < t; ++b) {
            var n = i,
                p = o[b],
                s = o[(b + 1) % t],
                a = box2d.b2Sub_V2_V2(p, n, box2d.b2PolygonShape.ComputeCentroid.s_e1),
                d = box2d.b2Sub_V2_V2(s, n, box2d.b2PolygonShape.ComputeCentroid.s_e2);
            r = r + (a = .5 * box2d.b2Cross_V2_V2(a, d));
            e.x += a * (1 / 3) * (n.x + p.x + s.x), e.y += a * (1 / 3) * (n.y + p.y + s.y);
        }
        return box2d.ENABLE_ASSERTS && box2d.b2Assert(r > box2d.b2_epsilon), e.SelfMul(1 / r),
            e;
    }, goog.exportProperty(box2d.b2PolygonShape, "ComputeCentroid", box2d.b2PolygonShape.ComputeCentroid),
    box2d.b2PolygonShape.ComputeCentroid.s_pRef = new box2d.b2Vec2(), box2d.b2PolygonShape.ComputeCentroid.s_e1 = new box2d.b2Vec2(),
    box2d.b2PolygonShape.ComputeCentroid.s_e2 = new box2d.b2Vec2(), box2d.b2Timer = function() {
        this.m_start = new Date().getTime();
    }, goog.exportSymbol("box2d.b2Timer", box2d.b2Timer), box2d.b2Timer.prototype.m_start = 0,
    goog.exportProperty(box2d.b2Timer.prototype, "m_start", box2d.b2Timer.prototype.m_start),
    box2d.b2Timer.prototype.Reset = function() {
        return this.m_start = new Date().getTime(), this;
    }, goog.exportProperty(box2d.b2Timer.prototype, "Reset", box2d.b2Timer.prototype.Reset),
    box2d.b2Timer.prototype.GetMilliseconds = function() {
        return new Date().getTime() - this.m_start;
    }, goog.exportProperty(box2d.b2Timer.prototype, "GetMilliseconds", box2d.b2Timer.prototype.GetMilliseconds),
    box2d.b2Counter = function() {}, goog.exportSymbol("box2d.b2Counter", box2d.b2Counter),
    box2d.b2Counter.prototype.m_count = 0, goog.exportProperty(box2d.b2Counter.prototype, "m_count", box2d.b2Counter.prototype.m_count),
    box2d.b2Counter.prototype.m_min_count = 0, goog.exportProperty(box2d.b2Counter.prototype, "m_min_count", box2d.b2Counter.prototype.m_min_count),
    box2d.b2Counter.prototype.m_max_count = 0, goog.exportProperty(box2d.b2Counter.prototype, "m_max_count", box2d.b2Counter.prototype.m_max_count),
    box2d.b2Counter.prototype.GetCount = function() {
        return this.m_count;
    }, goog.exportProperty(box2d.b2Counter.prototype, "GetCount", box2d.b2Counter.prototype.GetCount),
    box2d.b2Counter.prototype.GetMinCount = function() {
        return this.m_min_count;
    }, goog.exportProperty(box2d.b2Counter.prototype, "GetMinCount", box2d.b2Counter.prototype.GetMinCount),
    box2d.b2Counter.prototype.GetMaxCount = function() {
        return this.m_max_count;
    }, goog.exportProperty(box2d.b2Counter.prototype, "GetMaxCount", box2d.b2Counter.prototype.GetMaxCount),
    box2d.b2Counter.prototype.ResetCount = function() {
        var o = this.m_count;
        return this.m_count = 0, o;
    }, goog.exportProperty(box2d.b2Counter.prototype, "ResetCount", box2d.b2Counter.prototype.ResetCount),
    box2d.b2Counter.prototype.ResetMinCount = function() {
        this.m_min_count = 0;
    }, goog.exportProperty(box2d.b2Counter.prototype, "ResetMinCount", box2d.b2Counter.prototype.ResetMinCount),
    box2d.b2Counter.prototype.ResetMaxCount = function() {
        this.m_max_count = 0;
    }, goog.exportProperty(box2d.b2Counter.prototype, "ResetMaxCount", box2d.b2Counter.prototype.ResetMaxCount),
    box2d.b2Counter.prototype.Increment = function() {
        this.m_count++, this.m_max_count < this.m_count && (this.m_max_count = this.m_count);
    }, goog.exportProperty(box2d.b2Counter.prototype, "Increment", box2d.b2Counter.prototype.Increment),
    box2d.b2Counter.prototype.Decrement = function() {
        this.m_count--, this.m_min_count > this.m_count && (this.m_min_count = this.m_count);
    }, goog.exportProperty(box2d.b2Counter.prototype, "Decrement", box2d.b2Counter.prototype.Decrement),
    box2d.b2_toiTime = 0, goog.exportSymbol("box2d.b2_toiTime", box2d.b2_toiTime), box2d.b2_toiMaxTime = 0,
    goog.exportSymbol("box2d.b2_toiMaxTime", box2d.b2_toiMaxTime), box2d.b2_toiCalls = 0,
    goog.exportSymbol("box2d.b2_toiCalls", box2d.b2_toiCalls), box2d.b2_toiIters = 0,
    goog.exportSymbol("box2d.b2_toiIters", box2d.b2_toiIters), box2d.b2_toiMaxIters = 0,
    goog.exportSymbol("box2d.b2_toiMaxIters", box2d.b2_toiMaxIters), box2d.b2_toiRootIters = 0,
    goog.exportSymbol("box2d.b2_toiRootIters", box2d.b2_toiRootIters), box2d.b2_toiMaxRootIters = 0,
    goog.exportSymbol("box2d.b2_toiMaxRootIters", box2d.b2_toiMaxRootIters), box2d.b2TOIInput = function() {
        this.proxyA = new box2d.b2DistanceProxy(), this.proxyB = new box2d.b2DistanceProxy(),
            this.sweepA = new box2d.b2Sweep(), this.sweepB = new box2d.b2Sweep();
    }, goog.exportSymbol("box2d.b2TOIInput", box2d.b2TOIInput), box2d.b2TOIInput.prototype.proxyA = null,
    goog.exportProperty(box2d.b2TOIInput.prototype, "proxyA", box2d.b2TOIInput.prototype.proxyA),
    box2d.b2TOIInput.prototype.proxyB = null, goog.exportProperty(box2d.b2TOIInput.prototype, "proxyB", box2d.b2TOIInput.prototype.proxyB),
    box2d.b2TOIInput.prototype.sweepA = null, goog.exportProperty(box2d.b2TOIInput.prototype, "sweepA", box2d.b2TOIInput.prototype.sweepA),
    box2d.b2TOIInput.prototype.sweepB = null, goog.exportProperty(box2d.b2TOIInput.prototype, "sweepB", box2d.b2TOIInput.prototype.sweepB),
    box2d.b2TOIInput.prototype.tMax = 0, goog.exportProperty(box2d.b2TOIInput.prototype, "tMax", box2d.b2TOIInput.prototype.tMax),
    box2d.b2TOIOutputState = {
        e_unknown: 0,
        e_failed: 1,
        e_overlapped: 2,
        e_touching: 3,
        e_separated: 4
    }, goog.exportSymbol("box2d.b2TOIOutputState", box2d.b2TOIOutputState), goog.exportProperty(box2d.b2TOIOutputState, "e_unknown", box2d.b2TOIOutputState.e_unknown),
    goog.exportProperty(box2d.b2TOIOutputState, "e_failed", box2d.b2TOIOutputState.e_failed),
    goog.exportProperty(box2d.b2TOIOutputState, "e_overlapped", box2d.b2TOIOutputState.e_overlapped),
    goog.exportProperty(box2d.b2TOIOutputState, "e_touching", box2d.b2TOIOutputState.e_touching),
    goog.exportProperty(box2d.b2TOIOutputState, "e_separated", box2d.b2TOIOutputState.e_separated),
    box2d.b2TOIOutput = function() {}, goog.exportSymbol("box2d.b2TOIOutput", box2d.b2TOIOutput),
    box2d.b2TOIOutput.prototype.state = box2d.b2TOIOutputState.e_unknown, goog.exportProperty(box2d.b2TOIOutput.prototype, "state", box2d.b2TOIOutput.prototype.state),
    box2d.b2TOIOutput.prototype.t = 0, goog.exportProperty(box2d.b2TOIOutput.prototype, "t", box2d.b2TOIOutput.prototype.t),
    box2d.b2SeparationFunctionType = {
        e_unknown: -1,
        e_points: 0,
        e_faceA: 1,
        e_faceB: 2
    }, goog.exportSymbol("box2d.b2SeparationFunctionType", box2d.b2SeparationFunctionType),
    goog.exportProperty(box2d.b2SeparationFunctionType, "e_unknown", box2d.b2SeparationFunctionType.e_unknown),
    goog.exportProperty(box2d.b2SeparationFunctionType, "e_points", box2d.b2SeparationFunctionType.e_points),
    goog.exportProperty(box2d.b2SeparationFunctionType, "e_faceA", box2d.b2SeparationFunctionType.e_faceA),
    goog.exportProperty(box2d.b2SeparationFunctionType, "e_faceB", box2d.b2SeparationFunctionType.e_faceB),
    box2d.b2SeparationFunction = function() {
        this.m_sweepA = new box2d.b2Sweep(), this.m_sweepB = new box2d.b2Sweep(), this.m_localPoint = new box2d.b2Vec2(),
            this.m_axis = new box2d.b2Vec2();
    }, goog.exportSymbol("box2d.b2SeparationFunction", box2d.b2SeparationFunction),
    box2d.b2SeparationFunction.prototype.m_proxyA = null, goog.exportProperty(box2d.b2SeparationFunction.prototype, "m_proxyA", box2d.b2SeparationFunction.prototype.m_proxyA),
    box2d.b2SeparationFunction.prototype.m_proxyB = null, goog.exportProperty(box2d.b2SeparationFunction.prototype, "m_proxyB", box2d.b2SeparationFunction.prototype.m_proxyB),
    box2d.b2SeparationFunction.prototype.m_sweepA = null, goog.exportProperty(box2d.b2SeparationFunction.prototype, "m_sweepA", box2d.b2SeparationFunction.prototype.m_sweepA),
    box2d.b2SeparationFunction.prototype.m_sweepB = null, goog.exportProperty(box2d.b2SeparationFunction.prototype, "m_sweepB", box2d.b2SeparationFunction.prototype.m_sweepB),
    box2d.b2SeparationFunction.prototype.m_type = box2d.b2SeparationFunctionType.e_unknown,
    goog.exportProperty(box2d.b2SeparationFunction.prototype, "m_type", box2d.b2SeparationFunction.prototype.m_type),
    box2d.b2SeparationFunction.prototype.m_localPoint = null, goog.exportProperty(box2d.b2SeparationFunction.prototype, "m_localPoint", box2d.b2SeparationFunction.prototype.m_localPoint),
    box2d.b2SeparationFunction.prototype.m_axis = null, goog.exportProperty(box2d.b2SeparationFunction.prototype, "m_axis", box2d.b2SeparationFunction.prototype.m_axis),
    box2d.b2SeparationFunction.prototype.Initialize = function(o, t, e, r, i, b) {
        return this.m_proxyA = t, this.m_proxyB = r, t = o.count, box2d.ENABLE_ASSERTS && box2d.b2Assert(0 < t && 3 > t),
            this.m_sweepA.Copy(e), this.m_sweepB.Copy(i), e = box2d.b2TimeOfImpact.s_xfA, i = box2d.b2TimeOfImpact.s_xfB,
            this.m_sweepA.GetTransform(e, b), this.m_sweepB.GetTransform(i, b), 1 === t ? (this.m_type = box2d.b2SeparationFunctionType.e_points,
                t = this.m_proxyA.GetVertex(o.indexA[0]), o = this.m_proxyB.GetVertex(o.indexB[0]),
                e = box2d.b2Mul_X_V2(e, t, box2d.b2TimeOfImpact.s_pointA), i = box2d.b2Mul_X_V2(i, o, box2d.b2TimeOfImpact.s_pointB),
                box2d.b2Sub_V2_V2(i, e, this.m_axis), o = this.m_axis.Normalize(), this.m_localPoint.SetZero()) : (o.indexA[0] === o.indexA[1] ? (this.m_type = box2d.b2SeparationFunctionType.e_faceB,
                    t = this.m_proxyB.GetVertex(o.indexB[0]), r = this.m_proxyB.GetVertex(o.indexB[1]),
                    box2d.b2Cross_V2_S(box2d.b2Sub_V2_V2(r, t, box2d.b2Vec2.s_t0), 1, this.m_axis).SelfNormalize(),
                    b = box2d.b2Mul_R_V2(i.q, this.m_axis, box2d.b2TimeOfImpact.s_normal), box2d.b2Mid_V2_V2(t, r, this.m_localPoint),
                    i = box2d.b2Mul_X_V2(i, this.m_localPoint, box2d.b2TimeOfImpact.s_pointB), t = this.m_proxyA.GetVertex(o.indexA[0]),
                    e = box2d.b2Mul_X_V2(e, t, box2d.b2TimeOfImpact.s_pointA), o = box2d.b2Dot_V2_V2(box2d.b2Sub_V2_V2(e, i, box2d.b2Vec2.s_t0), b)) : (this.m_type = box2d.b2SeparationFunctionType.e_faceA,
                    t = this.m_proxyA.GetVertex(o.indexA[0]), r = this.m_proxyA.GetVertex(o.indexA[1]),
                    box2d.b2Cross_V2_S(box2d.b2Sub_V2_V2(r, t, box2d.b2Vec2.s_t0), 1, this.m_axis).SelfNormalize(),
                    b = box2d.b2Mul_R_V2(e.q, this.m_axis, box2d.b2TimeOfImpact.s_normal), box2d.b2Mid_V2_V2(t, r, this.m_localPoint),
                    e = box2d.b2Mul_X_V2(e, this.m_localPoint, box2d.b2TimeOfImpact.s_pointA), o = this.m_proxyB.GetVertex(o.indexB[0]),
                    i = box2d.b2Mul_X_V2(i, o, box2d.b2TimeOfImpact.s_pointB), o = box2d.b2Dot_V2_V2(box2d.b2Sub_V2_V2(i, e, box2d.b2Vec2.s_t0), b)),
                0 > o && (this.m_axis.SelfNeg(), o = -o)), o;
    }, goog.exportProperty(box2d.b2SeparationFunction.prototype, "Initialize", box2d.b2SeparationFunction.prototype.Initialize),
    box2d.b2SeparationFunction.prototype.FindMinSeparation = function(o, t, e) {
        var r = box2d.b2TimeOfImpact.s_xfA,
            i = box2d.b2TimeOfImpact.s_xfB;
        switch (this.m_sweepA.GetTransform(r, e), this.m_sweepB.GetTransform(i, e), this.m_type) {
            case box2d.b2SeparationFunctionType.e_points:
                var b = box2d.b2MulT_R_V2(r.q, this.m_axis, box2d.b2TimeOfImpact.s_axisA),
                    n = box2d.b2MulT_R_V2(i.q, box2d.b2Vec2.s_t0.Copy(this.m_axis).SelfNeg(), box2d.b2TimeOfImpact.s_axisB);
                return o[0] = this.m_proxyA.GetSupport(b), t[0] = this.m_proxyB.GetSupport(n), o = this.m_proxyA.GetVertex(o[0]),
                    t = this.m_proxyB.GetVertex(t[0]), r = box2d.b2Mul_X_V2(r, o, box2d.b2TimeOfImpact.s_pointA),
                    i = box2d.b2Mul_X_V2(i, t, box2d.b2TimeOfImpact.s_pointB), box2d.b2Dot_V2_V2(box2d.b2Sub_V2_V2(i, r, box2d.b2Vec2.s_t0), this.m_axis);

            case box2d.b2SeparationFunctionType.e_faceA:
                return e = box2d.b2Mul_R_V2(r.q, this.m_axis, box2d.b2TimeOfImpact.s_normal), r = box2d.b2Mul_X_V2(r, this.m_localPoint, box2d.b2TimeOfImpact.s_pointA),
                    n = box2d.b2MulT_R_V2(i.q, box2d.b2Vec2.s_t0.Copy(e).SelfNeg(), box2d.b2TimeOfImpact.s_axisB),
                    o[0] = -1, t[0] = this.m_proxyB.GetSupport(n), t = this.m_proxyB.GetVertex(t[0]),
                    i = box2d.b2Mul_X_V2(i, t, box2d.b2TimeOfImpact.s_pointB), box2d.b2Dot_V2_V2(box2d.b2Sub_V2_V2(i, r, box2d.b2Vec2.s_t0), e);

            case box2d.b2SeparationFunctionType.e_faceB:
                return e = box2d.b2Mul_R_V2(i.q, this.m_axis, box2d.b2TimeOfImpact.s_normal), i = box2d.b2Mul_X_V2(i, this.m_localPoint, box2d.b2TimeOfImpact.s_pointB),
                    b = box2d.b2MulT_R_V2(r.q, box2d.b2Vec2.s_t0.Copy(e).SelfNeg(), box2d.b2TimeOfImpact.s_axisA),
                    t[0] = -1, o[0] = this.m_proxyA.GetSupport(b), o = this.m_proxyA.GetVertex(o[0]),
                    r = box2d.b2Mul_X_V2(r, o, box2d.b2TimeOfImpact.s_pointA), box2d.b2Dot_V2_V2(box2d.b2Sub_V2_V2(r, i, box2d.b2Vec2.s_t0), e);

            default:
                return box2d.ENABLE_ASSERTS && box2d.b2Assert(!1), o[0] = -1, t[0] = -1, 0;
        }
    }, goog.exportProperty(box2d.b2SeparationFunction.prototype, "FindMinSeparation", box2d.b2SeparationFunction.prototype.FindMinSeparation),
    box2d.b2SeparationFunction.prototype.Evaluate = function(o, t, e) {
        var r = box2d.b2TimeOfImpact.s_xfA,
            i = box2d.b2TimeOfImpact.s_xfB;
        switch (this.m_sweepA.GetTransform(r, e), this.m_sweepB.GetTransform(i, e), this.m_type) {
            case box2d.b2SeparationFunctionType.e_points:
                return o = this.m_proxyA.GetVertex(o), t = this.m_proxyB.GetVertex(t), r = box2d.b2Mul_X_V2(r, o, box2d.b2TimeOfImpact.s_pointA),
                    i = box2d.b2Mul_X_V2(i, t, box2d.b2TimeOfImpact.s_pointB), box2d.b2Dot_V2_V2(box2d.b2Sub_V2_V2(i, r, box2d.b2Vec2.s_t0), this.m_axis);

            case box2d.b2SeparationFunctionType.e_faceA:
                return e = box2d.b2Mul_R_V2(r.q, this.m_axis, box2d.b2TimeOfImpact.s_normal), r = box2d.b2Mul_X_V2(r, this.m_localPoint, box2d.b2TimeOfImpact.s_pointA),
                    t = this.m_proxyB.GetVertex(t), i = box2d.b2Mul_X_V2(i, t, box2d.b2TimeOfImpact.s_pointB),
                    box2d.b2Dot_V2_V2(box2d.b2Sub_V2_V2(i, r, box2d.b2Vec2.s_t0), e);

            case box2d.b2SeparationFunctionType.e_faceB:
                return e = box2d.b2Mul_R_V2(i.q, this.m_axis, box2d.b2TimeOfImpact.s_normal), i = box2d.b2Mul_X_V2(i, this.m_localPoint, box2d.b2TimeOfImpact.s_pointB),
                    o = this.m_proxyA.GetVertex(o), r = box2d.b2Mul_X_V2(r, o, box2d.b2TimeOfImpact.s_pointA),
                    box2d.b2Dot_V2_V2(box2d.b2Sub_V2_V2(r, i, box2d.b2Vec2.s_t0), e);

            default:
                return box2d.ENABLE_ASSERTS && box2d.b2Assert(!1), 0;
        }
    }, goog.exportProperty(box2d.b2SeparationFunction.prototype, "Evaluate", box2d.b2SeparationFunction.prototype.Evaluate),
    box2d.b2TimeOfImpact = function(o, t) {
        var e = box2d.b2TimeOfImpact.s_timer.Reset();
        ++box2d.b2_toiCalls, o.state = box2d.b2TOIOutputState.e_unknown, o.t = t.tMax;
        var r = t.proxyA,
            i = t.proxyB,
            b = box2d.b2TimeOfImpact.s_sweepA.Copy(t.sweepA),
            n = box2d.b2TimeOfImpact.s_sweepB.Copy(t.sweepB);
        b.Normalize(), n.Normalize();
        var p = t.tMax,
            s = box2d.b2Max(box2d.b2_linearSlop, r.m_radius + i.m_radius - 3 * box2d.b2_linearSlop),
            a = .25 * box2d.b2_linearSlop;
        box2d.ENABLE_ASSERTS && box2d.b2Assert(s > a);
        var d = 0,
            l = 0,
            x = box2d.b2TimeOfImpact.s_cache;
        x.count = 0;
        var y = box2d.b2TimeOfImpact.s_distanceInput;
        for (y.proxyA = t.proxyA, y.proxyB = t.proxyB, y.useRadii = !1;;) {
            var c = box2d.b2TimeOfImpact.s_xfA,
                _ = box2d.b2TimeOfImpact.s_xfB;
            if (b.GetTransform(c, d), n.GetTransform(_, d), y.transformA.Copy(c), y.transformB.Copy(_),
                c = box2d.b2TimeOfImpact.s_distanceOutput, box2d.b2ShapeDistance(c, x, y), 0 >= c.distance) {
                o.state = box2d.b2TOIOutputState.e_overlapped, o.t = 0;
                break;
            }
            if (c.distance < s + a) {
                o.state = box2d.b2TOIOutputState.e_touching, o.t = d;
                break;
            }
            (c = box2d.b2TimeOfImpact.s_fcn).Initialize(x, r, b, i, n, d);
            _ = !1;
            for (var m = p, u = 0;;) {
                var h = box2d.b2TimeOfImpact.s_indexA,
                    g = box2d.b2TimeOfImpact.s_indexB,
                    f = c.FindMinSeparation(h, g, m);
                if (f > s + a) {
                    o.state = box2d.b2TOIOutputState.e_separated, o.t = p, _ = !0;
                    break;
                }
                if (f > s - a) {
                    d = m;
                    break;
                }
                var S = c.Evaluate(h[0], g[0], d);
                if (S < s - a) {
                    o.state = box2d.b2TOIOutputState.e_failed, o.t = d, _ = !0;
                    break;
                }
                if (S <= s + a) {
                    o.state = box2d.b2TOIOutputState.e_touching, o.t = d, _ = !0;
                    break;
                }
                for (var P = 0, C = d, A = m;;) {
                    var B = 1 & P ? C + (s - S) * (A - C) / (f - S) : .5 * (C + A);
                    ++P, ++box2d.b2_toiRootIters;
                    var v = c.Evaluate(h[0], g[0], B);
                    if (box2d.b2Abs(v - s) < a) {
                        m = B;
                        break;
                    }
                    if (v > s ? (C = B, S = v) : (A = B, f = v), 50 === P) break;
                }
                if (box2d.b2_toiMaxRootIters = box2d.b2Max(box2d.b2_toiMaxRootIters, P), ++u === box2d.b2_maxPolygonVertices) break;
            }
            if (++l, ++box2d.b2_toiIters, _) break;
            if (20 === l) {
                o.state = box2d.b2TOIOutputState.e_failed, o.t = d;
                break;
            }
        }
        box2d.b2_toiMaxIters = box2d.b2Max(box2d.b2_toiMaxIters, l), e = e.GetMilliseconds(),
            box2d.b2_toiMaxTime = box2d.b2Max(box2d.b2_toiMaxTime, e), box2d.b2_toiTime += e;
    }, goog.exportSymbol("box2d.b2TimeOfImpact", box2d.b2TimeOfImpact), box2d.b2TimeOfImpact.s_timer = new box2d.b2Timer(),
    box2d.b2TimeOfImpact.s_cache = new box2d.b2SimplexCache(), box2d.b2TimeOfImpact.s_distanceInput = new box2d.b2DistanceInput(),
    box2d.b2TimeOfImpact.s_distanceOutput = new box2d.b2DistanceOutput(), box2d.b2TimeOfImpact.s_xfA = new box2d.b2Transform(),
    box2d.b2TimeOfImpact.s_xfB = new box2d.b2Transform(), box2d.b2TimeOfImpact.s_indexA = box2d.b2MakeNumberArray(1),
    box2d.b2TimeOfImpact.s_indexB = box2d.b2MakeNumberArray(1), box2d.b2TimeOfImpact.s_fcn = new box2d.b2SeparationFunction(),
    box2d.b2TimeOfImpact.s_sweepA = new box2d.b2Sweep(), box2d.b2TimeOfImpact.s_sweepB = new box2d.b2Sweep(),
    box2d.b2TimeOfImpact.s_pointA = new box2d.b2Vec2(), box2d.b2TimeOfImpact.s_pointB = new box2d.b2Vec2(),
    box2d.b2TimeOfImpact.s_normal = new box2d.b2Vec2(), box2d.b2TimeOfImpact.s_axisA = new box2d.b2Vec2(),
    box2d.b2TimeOfImpact.s_axisB = new box2d.b2Vec2(), box2d.b2Filter = function() {},
    goog.exportSymbol("box2d.b2Filter", box2d.b2Filter), box2d.b2Filter.prototype.categoryBits = 1,
    goog.exportProperty(box2d.b2Filter.prototype, "categoryBits", box2d.b2Filter.prototype.categoryBits),
    box2d.b2Filter.prototype.maskBits = 65535, goog.exportProperty(box2d.b2Filter.prototype, "maskBits", box2d.b2Filter.prototype.maskBits),
    box2d.b2Filter.prototype.groupIndex = 0, goog.exportProperty(box2d.b2Filter.prototype, "groupIndex", box2d.b2Filter.prototype.groupIndex),
    box2d.b2Filter.prototype.Clone = function() {
        return new box2d.b2Filter().Copy(this);
    }, goog.exportProperty(box2d.b2Filter.prototype, "Clone", box2d.b2Filter.prototype.Clone),
    box2d.b2Filter.prototype.Copy = function(o) {
        return box2d.ENABLE_ASSERTS && box2d.b2Assert(this !== o), this.categoryBits = o.categoryBits,
            this.maskBits = o.maskBits, this.groupIndex = o.groupIndex, this;
    }, goog.exportProperty(box2d.b2Filter.prototype, "Copy", box2d.b2Filter.prototype.Copy),
    box2d.b2FixtureDef = function() {
        this.filter = new box2d.b2Filter();
    }, goog.exportSymbol("box2d.b2FixtureDef", box2d.b2FixtureDef), box2d.b2FixtureDef.prototype.shape = null,
    goog.exportProperty(box2d.b2FixtureDef.prototype, "shape", box2d.b2FixtureDef.prototype.shape),
    box2d.b2FixtureDef.prototype.userData = null, goog.exportProperty(box2d.b2FixtureDef.prototype, "userData", box2d.b2FixtureDef.prototype.userData),
    box2d.b2FixtureDef.prototype.friction = .2, goog.exportProperty(box2d.b2FixtureDef.prototype, "friction", box2d.b2FixtureDef.prototype.friction),
    box2d.b2FixtureDef.prototype.restitution = 0, goog.exportProperty(box2d.b2FixtureDef.prototype, "restitution", box2d.b2FixtureDef.prototype.restitution),
    box2d.b2FixtureDef.prototype.density = 0, goog.exportProperty(box2d.b2FixtureDef.prototype, "density", box2d.b2FixtureDef.prototype.density),
    box2d.b2FixtureDef.prototype.isSensor = !1;

goog.exportProperty(box2d.b2FixtureDef.prototype, "isSensor", box2d.b2FixtureDef.prototype.isSensor),
    box2d.b2FixtureDef.prototype.filter = null, goog.exportProperty(box2d.b2FixtureDef.prototype, "filter", box2d.b2FixtureDef.prototype.filter),
    box2d.b2FixtureProxy = function() {
        this.aabb = new box2d.b2AABB();
    }, goog.exportSymbol("box2d.b2FixtureProxy", box2d.b2FixtureProxy), box2d.b2FixtureProxy.prototype.aabb = null,
    goog.exportProperty(box2d.b2FixtureProxy.prototype, "aabb", box2d.b2FixtureProxy.prototype.aabb),
    box2d.b2FixtureProxy.prototype.fixture = null, goog.exportProperty(box2d.b2FixtureProxy.prototype, "fixture", box2d.b2FixtureProxy.prototype.fixture),
    box2d.b2FixtureProxy.prototype.childIndex = 0, goog.exportProperty(box2d.b2FixtureProxy.prototype, "childIndex", box2d.b2FixtureProxy.prototype.childIndex),
    box2d.b2FixtureProxy.prototype.proxy = null, goog.exportProperty(box2d.b2FixtureProxy.prototype, "proxy", box2d.b2FixtureProxy.prototype.proxy),
    box2d.b2FixtureProxy.MakeArray = function(o) {
        return box2d.b2MakeArray(o, function(o) {
            return new box2d.b2FixtureProxy();
        });
    }, goog.exportProperty(box2d.b2FixtureProxy, "MakeArray", box2d.b2FixtureProxy.MakeArray),
    box2d.b2Fixture = function() {
        this.m_proxyCount = 0, this.m_filter = new box2d.b2Filter();
    }, goog.exportSymbol("box2d.b2Fixture", box2d.b2Fixture), box2d.b2Fixture.prototype.m_density = 0,
    goog.exportProperty(box2d.b2Fixture.prototype, "m_density", box2d.b2Fixture.prototype.m_density),
    box2d.b2Fixture.prototype.m_next = null, goog.exportProperty(box2d.b2Fixture.prototype, "m_next", box2d.b2Fixture.prototype.m_next),
    box2d.b2Fixture.prototype.m_body = null, goog.exportProperty(box2d.b2Fixture.prototype, "m_body", box2d.b2Fixture.prototype.m_body),
    box2d.b2Fixture.prototype.m_shape = null, goog.exportProperty(box2d.b2Fixture.prototype, "m_shape", box2d.b2Fixture.prototype.m_shape),
    box2d.b2Fixture.prototype.m_friction = 0, goog.exportProperty(box2d.b2Fixture.prototype, "m_friction", box2d.b2Fixture.prototype.m_friction),
    box2d.b2Fixture.prototype.m_restitution = 0, goog.exportProperty(box2d.b2Fixture.prototype, "m_restitution", box2d.b2Fixture.prototype.m_restitution),
    box2d.b2Fixture.prototype.m_proxies = null, goog.exportProperty(box2d.b2Fixture.prototype, "m_proxies", box2d.b2Fixture.prototype.m_proxies),
    box2d.b2Fixture.prototype.m_proxyCount = 0, goog.exportProperty(box2d.b2Fixture.prototype, "m_proxyCount", box2d.b2Fixture.prototype.m_proxyCount),
    box2d.b2Fixture.prototype.m_filter = null, goog.exportProperty(box2d.b2Fixture.prototype, "m_filter", box2d.b2Fixture.prototype.m_filter),
    box2d.b2Fixture.prototype.m_isSensor = !1, goog.exportProperty(box2d.b2Fixture.prototype, "m_isSensor", box2d.b2Fixture.prototype.m_isSensor),
    box2d.b2Fixture.prototype.m_userData = null, goog.exportProperty(box2d.b2Fixture.prototype, "m_userData", box2d.b2Fixture.prototype.m_userData),
    box2d.b2Fixture.prototype.GetType = function() {
        return this.m_shape.GetType();
    }, goog.exportProperty(box2d.b2Fixture.prototype, "GetType", box2d.b2Fixture.prototype.GetType),
    box2d.b2Fixture.prototype.GetShape = function() {
        return this.m_shape;
    }, goog.exportProperty(box2d.b2Fixture.prototype, "GetShape", box2d.b2Fixture.prototype.GetShape),
    box2d.b2Fixture.prototype.IsSensor = function() {
        return this.m_isSensor;
    }, goog.exportProperty(box2d.b2Fixture.prototype, "IsSensor", box2d.b2Fixture.prototype.IsSensor),
    box2d.b2Fixture.prototype.GetFilterData = function(o) {
        return (o = o || new box2d.b2Filter()).Copy(this.m_filter);
    }, goog.exportProperty(box2d.b2Fixture.prototype, "GetFilterData", box2d.b2Fixture.prototype.GetFilterData),
    box2d.b2Fixture.prototype.GetUserData = function() {
        return this.m_userData;
    }, goog.exportProperty(box2d.b2Fixture.prototype, "GetUserData", box2d.b2Fixture.prototype.GetUserData),
    box2d.b2Fixture.prototype.SetUserData = function(o) {
        this.m_userData = o;
    }, goog.exportProperty(box2d.b2Fixture.prototype, "SetUserData", box2d.b2Fixture.prototype.SetUserData),
    box2d.b2Fixture.prototype.GetBody = function() {
        return this.m_body;
    }, goog.exportProperty(box2d.b2Fixture.prototype, "GetBody", box2d.b2Fixture.prototype.GetBody),
    box2d.b2Fixture.prototype.GetNext = function() {
        return this.m_next;
    }, goog.exportProperty(box2d.b2Fixture.prototype, "GetNext", box2d.b2Fixture.prototype.GetNext),
    box2d.b2Fixture.prototype.SetDensity = function(o) {
        this.m_density = o;
    }, goog.exportProperty(box2d.b2Fixture.prototype, "SetDensity", box2d.b2Fixture.prototype.SetDensity),
    box2d.b2Fixture.prototype.GetDensity = function() {
        return this.m_density;
    }, goog.exportProperty(box2d.b2Fixture.prototype, "GetDensity", box2d.b2Fixture.prototype.GetDensity),
    box2d.b2Fixture.prototype.GetFriction = function() {
        return this.m_friction;
    }, goog.exportProperty(box2d.b2Fixture.prototype, "GetFriction", box2d.b2Fixture.prototype.GetFriction),
    box2d.b2Fixture.prototype.SetFriction = function(o) {
        this.m_friction = o;
    }, goog.exportProperty(box2d.b2Fixture.prototype, "SetFriction", box2d.b2Fixture.prototype.SetFriction),
    box2d.b2Fixture.prototype.GetRestitution = function() {
        return this.m_restitution;
    }, goog.exportProperty(box2d.b2Fixture.prototype, "GetRestitution", box2d.b2Fixture.prototype.GetRestitution),
    box2d.b2Fixture.prototype.SetRestitution = function(o) {
        this.m_restitution = o;
    }, goog.exportProperty(box2d.b2Fixture.prototype, "SetRestitution", box2d.b2Fixture.prototype.SetRestitution),
    box2d.b2Fixture.prototype.TestPoint = function(o) {
        return this.m_shape.TestPoint(this.m_body.GetTransform(), o);
    }, goog.exportProperty(box2d.b2Fixture.prototype, "TestPoint", box2d.b2Fixture.prototype.TestPoint),
    box2d.b2Fixture.prototype.ComputeDistance = function(o, t, e) {
        return this.m_shape.ComputeDistance(this.m_body.GetTransform(), o, t, e);
    }, goog.exportProperty(box2d.b2Fixture.prototype, "ComputeDistance", box2d.b2Fixture.prototype.ComputeDistance),
    box2d.b2Fixture.prototype.RayCast = function(o, t, e) {
        return this.m_shape.RayCast(o, t, this.m_body.GetTransform(), e);
    }, goog.exportProperty(box2d.b2Fixture.prototype, "RayCast", box2d.b2Fixture.prototype.RayCast),
    box2d.b2Fixture.prototype.GetMassData = function(o) {
        return o = o || new box2d.b2MassData(), this.m_shape.ComputeMass(o, this.m_density),
            o;
    }, goog.exportProperty(box2d.b2Fixture.prototype, "GetMassData", box2d.b2Fixture.prototype.GetMassData),
    box2d.b2Fixture.prototype.GetAABB = function(o) {
        return box2d.ENABLE_ASSERTS && box2d.b2Assert(0 <= o && o < this.m_proxyCount),
            this.m_proxies[o].aabb;
    }, goog.exportProperty(box2d.b2Fixture.prototype, "GetAABB", box2d.b2Fixture.prototype.GetAABB),
    box2d.b2Fixture.prototype.Create = function(o, t) {
        this.m_userData = t.userData, this.m_friction = t.friction, this.m_restitution = t.restitution,
            this.m_body = o, this.m_next = null, this.m_filter.Copy(t.filter), this.m_isSensor = t.isSensor,
            this.m_shape = t.shape.Clone(), this.m_proxies = box2d.b2FixtureProxy.MakeArray(this.m_shape.GetChildCount()),
            this.m_proxyCount = 0, this.m_density = t.density;
    }, goog.exportProperty(box2d.b2Fixture.prototype, "Create", box2d.b2Fixture.prototype.Create),
    box2d.b2Fixture.prototype.Destroy = function() {
        box2d.ENABLE_ASSERTS && box2d.b2Assert(0 === this.m_proxyCount), this.m_shape = null;
    }, goog.exportProperty(box2d.b2Fixture.prototype, "Destroy", box2d.b2Fixture.prototype.Destroy),
    box2d.b2Fixture.prototype.CreateProxies = function(o, t) {
        box2d.ENABLE_ASSERTS && box2d.b2Assert(0 === this.m_proxyCount), this.m_proxyCount = this.m_shape.GetChildCount();
        for (var e = 0; e < this.m_proxyCount; ++e) {
            var r = this.m_proxies[e];
            this.m_shape.ComputeAABB(r.aabb, t, e), r.proxy = o.CreateProxy(r.aabb, r), r.fixture = this,
                r.childIndex = e;
        }
    }, goog.exportProperty(box2d.b2Fixture.prototype, "CreateProxies", box2d.b2Fixture.prototype.CreateProxies),
    box2d.b2Fixture.prototype.DestroyProxies = function(o) {
        for (var t = 0; t < this.m_proxyCount; ++t) {
            var e = this.m_proxies[t];
            o.DestroyProxy(e.proxy), e.proxy = null;
        }
        this.m_proxyCount = 0;
    }, goog.exportProperty(box2d.b2Fixture.prototype, "DestroyProxies", box2d.b2Fixture.prototype.DestroyProxies),
    box2d.b2Fixture.prototype.Synchronize = function(o, t, e) {
        if (0 !== this.m_proxyCount)
            for (var r = 0; r < this.m_proxyCount; ++r) {
                var i = this.m_proxies[r],
                    b = box2d.b2Fixture.prototype.Synchronize.s_aabb1,
                    n = box2d.b2Fixture.prototype.Synchronize.s_aabb2;
                this.m_shape.ComputeAABB(b, t, r), this.m_shape.ComputeAABB(n, e, r), i.aabb.Combine2(b, n),
                    b = box2d.b2Sub_V2_V2(e.p, t.p, box2d.b2Fixture.prototype.Synchronize.s_displacement),
                    o.MoveProxy(i.proxy, i.aabb, b);
            }
    }, goog.exportProperty(box2d.b2Fixture.prototype, "Synchronize", box2d.b2Fixture.prototype.Synchronize),
    box2d.b2Fixture.prototype.Synchronize.s_aabb1 = new box2d.b2AABB(), box2d.b2Fixture.prototype.Synchronize.s_aabb2 = new box2d.b2AABB(),
    box2d.b2Fixture.prototype.Synchronize.s_displacement = new box2d.b2Vec2(), box2d.b2Fixture.prototype.SetFilterData = function(o) {
        this.m_filter.Copy(o), this.Refilter();
    }, goog.exportProperty(box2d.b2Fixture.prototype, "SetFilterData", box2d.b2Fixture.prototype.SetFilterData),
    box2d.b2Fixture.prototype.Refilter = function() {
        if (null !== this.m_body) {
            for (var o = this.m_body.GetContactList(); o;) {
                var t = o.contact,
                    e = t.GetFixtureA(),
                    r = t.GetFixtureB();
                e !== this && r !== this || t.FlagForFiltering(), o = o.next;
            }
            if (null !== (o = this.m_body.GetWorld()))
                for (o = o.m_contactManager.m_broadPhase,
                    t = 0; t < this.m_proxyCount; ++t) o.TouchProxy(this.m_proxies[t].proxy);
        }
    }, goog.exportProperty(box2d.b2Fixture.prototype, "Refilter", box2d.b2Fixture.prototype.Refilter),
    box2d.b2Fixture.prototype.SetSensor = function(o) {
        o !== this.m_isSensor && (this.m_body.SetAwake(!0), this.m_isSensor = o);
    }, goog.exportProperty(box2d.b2Fixture.prototype, "SetSensor", box2d.b2Fixture.prototype.SetSensor),
    box2d.b2Fixture.prototype.Dump = function(o) {
        box2d.DEBUG && (box2d.b2Log("    /*box2d.b2FixtureDef*/ var fd = new box2d.b2FixtureDef();\n"),
            box2d.b2Log("    fd.friction = %.15f;\n", this.m_friction), box2d.b2Log("    fd.restitution = %.15f;\n", this.m_restitution),
            box2d.b2Log("    fd.density = %.15f;\n", this.m_density), box2d.b2Log("    fd.isSensor = %s;\n", this.m_isSensor ? "true" : "false"),
            box2d.b2Log("    fd.filter.categoryBits = %d;\n", this.m_filter.categoryBits), box2d.b2Log("    fd.filter.maskBits = %d;\n", this.m_filter.maskBits),
            box2d.b2Log("    fd.filter.groupIndex = %d;\n", this.m_filter.groupIndex), this.m_shape.Dump(),
            box2d.b2Log("\n"), box2d.b2Log("    fd.shape = shape;\n"), box2d.b2Log("\n"), box2d.b2Log("    bodies[%d].CreateFixture(fd);\n", o));
    }, goog.exportProperty(box2d.b2Fixture.prototype, "Dump", box2d.b2Fixture.prototype.Dump),
    box2d.b2BodyType = {
        b2_unknown: -1,
        b2_staticBody: 0,
        b2_kinematicBody: 1,
        b2_dynamicBody: 2,
        b2_bulletBody: 3
    }, goog.exportSymbol("box2d.b2BodyType", box2d.b2BodyType), goog.exportProperty(box2d.b2BodyType, "b2_unknown", box2d.b2BodyType.b2_unknown),
    goog.exportProperty(box2d.b2BodyType, "b2_staticBody", box2d.b2BodyType.b2_staticBody),
    goog.exportProperty(box2d.b2BodyType, "b2_kinematicBody", box2d.b2BodyType.b2_kinematicBody),
    goog.exportProperty(box2d.b2BodyType, "b2_dynamicBody", box2d.b2BodyType.b2_dynamicBody),
    goog.exportProperty(box2d.b2BodyType, "b2_bulletBody", box2d.b2BodyType.b2_bulletBody),
    box2d.b2BodyDef = function() {
        this.position = new box2d.b2Vec2(0, 0), this.linearVelocity = new box2d.b2Vec2(0, 0);
    }, goog.exportSymbol("box2d.b2BodyDef", box2d.b2BodyDef), box2d.b2BodyDef.prototype.type = box2d.b2BodyType.b2_staticBody,
    goog.exportProperty(box2d.b2BodyDef.prototype, "type", box2d.b2BodyDef.prototype.type),
    box2d.b2BodyDef.prototype.position = null, goog.exportProperty(box2d.b2BodyDef.prototype, "position", box2d.b2BodyDef.prototype.position),
    box2d.b2BodyDef.prototype.angle = 0, goog.exportProperty(box2d.b2BodyDef.prototype, "angle", box2d.b2BodyDef.prototype.angle),
    box2d.b2BodyDef.prototype.linearVelocity = null, goog.exportProperty(box2d.b2BodyDef.prototype, "linearVelocity", box2d.b2BodyDef.prototype.linearVelocity),
    box2d.b2BodyDef.prototype.angularVelocity = 0, goog.exportProperty(box2d.b2BodyDef.prototype, "angularVelocity", box2d.b2BodyDef.prototype.angularVelocity),
    box2d.b2BodyDef.prototype.linearDamping = 0, goog.exportProperty(box2d.b2BodyDef.prototype, "linearDamping", box2d.b2BodyDef.prototype.linearDamping),
    box2d.b2BodyDef.prototype.angularDamping = 0, goog.exportProperty(box2d.b2BodyDef.prototype, "angularDamping", box2d.b2BodyDef.prototype.angularDamping),
    box2d.b2BodyDef.prototype.allowSleep = !0, goog.exportProperty(box2d.b2BodyDef.prototype, "allowSleep", box2d.b2BodyDef.prototype.allowSleep),
    box2d.b2BodyDef.prototype.awake = !0, goog.exportProperty(box2d.b2BodyDef.prototype, "awake", box2d.b2BodyDef.prototype.awake),
    box2d.b2BodyDef.prototype.fixedRotation = !1, goog.exportProperty(box2d.b2BodyDef.prototype, "fixedRotation", box2d.b2BodyDef.prototype.fixedRotation),
    box2d.b2BodyDef.prototype.bullet = !1, goog.exportProperty(box2d.b2BodyDef.prototype, "bullet", box2d.b2BodyDef.prototype.bullet),
    box2d.b2BodyDef.prototype.active = !0, goog.exportProperty(box2d.b2BodyDef.prototype, "active", box2d.b2BodyDef.prototype.active),
    box2d.b2BodyDef.prototype.userData = null, goog.exportProperty(box2d.b2BodyDef.prototype, "userData", box2d.b2BodyDef.prototype.userData),
    box2d.b2BodyDef.prototype.gravityScale = 1, goog.exportProperty(box2d.b2BodyDef.prototype, "gravityScale", box2d.b2BodyDef.prototype.gravityScale),
    box2d.b2Body = function(o, t) {
        this.m_xf = new box2d.b2Transform(), this.m_out_xf = new box2d.b2Transform(), this.m_xf0 = new box2d.b2Transform(),
            this.m_sweep = new box2d.b2Sweep(), this.m_out_sweep = new box2d.b2Sweep(), this.m_linearVelocity = new box2d.b2Vec2(),
            this.m_out_linearVelocity = new box2d.b2Vec2(), this.m_force = new box2d.b2Vec2(),
            box2d.ENABLE_ASSERTS && box2d.b2Assert(o.position.IsValid()), box2d.ENABLE_ASSERTS && box2d.b2Assert(o.linearVelocity.IsValid()),
            box2d.ENABLE_ASSERTS && box2d.b2Assert(box2d.b2IsValid(o.angle)), box2d.ENABLE_ASSERTS && box2d.b2Assert(box2d.b2IsValid(o.angularVelocity)),
            box2d.ENABLE_ASSERTS && box2d.b2Assert(box2d.b2IsValid(o.gravityScale) && 0 <= o.gravityScale),
            box2d.ENABLE_ASSERTS && box2d.b2Assert(box2d.b2IsValid(o.angularDamping) && 0 <= o.angularDamping),
            box2d.ENABLE_ASSERTS && box2d.b2Assert(box2d.b2IsValid(o.linearDamping) && 0 <= o.linearDamping),
            o.bullet && (this.m_flag_bulletFlag = !0), o.fixedRotation && (this.m_flag_fixedRotationFlag = !0),
            o.allowSleep && (this.m_flag_autoSleepFlag = !0), o.awake && (this.m_flag_awakeFlag = !0),
            o.active && (this.m_flag_activeFlag = !0), this.m_world = t, this.m_xf.p.Copy(o.position),
            this.m_xf.q.SetAngle(o.angle), this.m_xf0.Copy(this.m_xf), this.m_sweep.localCenter.SetZero(),
            this.m_sweep.c0.Copy(this.m_xf.p), this.m_sweep.c.Copy(this.m_xf.p), this.m_sweep.a0 = o.angle,
            this.m_sweep.a = o.angle, this.m_sweep.alpha0 = 0, this.m_linearVelocity.Copy(o.linearVelocity),
            this.m_angularVelocity = o.angularVelocity, this.m_linearDamping = o.linearDamping,
            this.m_angularDamping = o.angularDamping, this.m_gravityScale = o.gravityScale,
            this.m_force.SetZero(), this.m_sleepTime = this.m_torque = 0, this.m_type = o.type,
            this.m_invMass = o.type === box2d.b2BodyType.b2_dynamicBody ? this.m_mass = 1 : this.m_mass = 0,
            this.m_invI = this.m_I = 0, this.m_userData = o.userData, this.m_fixtureList = null,
            this.m_fixtureCount = 0, this.m_controllerList = null, this.m_controllerCount = 0;
    }, goog.exportSymbol("box2d.b2Body", box2d.b2Body), box2d.b2Body.prototype.m_flag_islandFlag = !1,
    goog.exportProperty(box2d.b2Body.prototype, "m_flag_islandFlag", box2d.b2Body.prototype.m_flag_islandFlag),
    box2d.b2Body.prototype.m_flag_awakeFlag = !1, goog.exportProperty(box2d.b2Body.prototype, "m_flag_awakeFlag", box2d.b2Body.prototype.m_flag_awakeFlag),
    box2d.b2Body.prototype.m_flag_autoSleepFlag = !1, goog.exportProperty(box2d.b2Body.prototype, "m_flag_autoSleepFlag", box2d.b2Body.prototype.m_flag_autoSleepFlag),
    box2d.b2Body.prototype.m_flag_bulletFlag = !1, goog.exportProperty(box2d.b2Body.prototype, "m_flag_bulletFlag", box2d.b2Body.prototype.m_flag_bulletFlag),
    box2d.b2Body.prototype.m_flag_fixedRotationFlag = !1, goog.exportProperty(box2d.b2Body.prototype, "m_flag_fixedRotationFlag", box2d.b2Body.prototype.m_flag_fixedRotationFlag),
    box2d.b2Body.prototype.m_flag_activeFlag = !1, goog.exportProperty(box2d.b2Body.prototype, "m_flag_activeFlag", box2d.b2Body.prototype.m_flag_activeFlag),
    box2d.b2Body.prototype.m_flag_toiFlag = !1, goog.exportProperty(box2d.b2Body.prototype, "m_flag_toiFlag", box2d.b2Body.prototype.m_flag_toiFlag),
    box2d.b2Body.prototype.m_islandIndex = 0, goog.exportProperty(box2d.b2Body.prototype, "m_islandIndex", box2d.b2Body.prototype.m_islandIndex),
    box2d.b2Body.prototype.m_world = null, goog.exportProperty(box2d.b2Body.prototype, "m_world", box2d.b2Body.prototype.m_world),
    box2d.b2Body.prototype.m_xf = null, goog.exportProperty(box2d.b2Body.prototype, "m_xf", box2d.b2Body.prototype.m_xf),
    box2d.b2Body.prototype.m_out_xf = null, goog.exportProperty(box2d.b2Body.prototype, "m_out_xf", box2d.b2Body.prototype.m_out_xf),
    box2d.b2Body.prototype.m_xf0 = null, goog.exportProperty(box2d.b2Body.prototype, "m_xf0", box2d.b2Body.prototype.m_xf0),
    box2d.b2Body.prototype.m_sweep = null, goog.exportProperty(box2d.b2Body.prototype, "m_sweep", box2d.b2Body.prototype.m_sweep),
    box2d.b2Body.prototype.m_out_sweep = null, goog.exportProperty(box2d.b2Body.prototype, "m_out_sweep", box2d.b2Body.prototype.m_out_sweep),
    box2d.b2Body.prototype.m_jointList = null, goog.exportProperty(box2d.b2Body.prototype, "m_jointList", box2d.b2Body.prototype.m_jointList),
    box2d.b2Body.prototype.m_contactList = null, goog.exportProperty(box2d.b2Body.prototype, "m_contactList", box2d.b2Body.prototype.m_contactList),
    box2d.b2Body.prototype.m_prev = null, goog.exportProperty(box2d.b2Body.prototype, "m_prev", box2d.b2Body.prototype.m_prev),
    box2d.b2Body.prototype.m_next = null, goog.exportProperty(box2d.b2Body.prototype, "m_next", box2d.b2Body.prototype.m_next),
    box2d.b2Body.prototype.m_linearVelocity = null, goog.exportProperty(box2d.b2Body.prototype, "m_linearVelocity", box2d.b2Body.prototype.m_linearVelocity),
    box2d.b2Body.prototype.m_out_linearVelocity = null, goog.exportProperty(box2d.b2Body.prototype, "m_out_linearVelocity", box2d.b2Body.prototype.m_out_linearVelocity),
    box2d.b2Body.prototype.m_angularVelocity = 0, goog.exportProperty(box2d.b2Body.prototype, "m_angularVelocity", box2d.b2Body.prototype.m_angularVelocity),
    box2d.b2Body.prototype.m_linearDamping = 0, goog.exportProperty(box2d.b2Body.prototype, "m_linearDamping", box2d.b2Body.prototype.m_linearDamping),
    box2d.b2Body.prototype.m_angularDamping = 0, goog.exportProperty(box2d.b2Body.prototype, "m_angularDamping", box2d.b2Body.prototype.m_angularDamping),
    box2d.b2Body.prototype.m_gravityScale = 1, goog.exportProperty(box2d.b2Body.prototype, "m_gravityScale", box2d.b2Body.prototype.m_gravityScale),
    box2d.b2Body.prototype.m_force = null, goog.exportProperty(box2d.b2Body.prototype, "m_force", box2d.b2Body.prototype.m_force),
    box2d.b2Body.prototype.m_torque = 0, goog.exportProperty(box2d.b2Body.prototype, "m_torque", box2d.b2Body.prototype.m_torque),
    box2d.b2Body.prototype.m_sleepTime = 0, goog.exportProperty(box2d.b2Body.prototype, "m_sleepTime", box2d.b2Body.prototype.m_sleepTime),
    box2d.b2Body.prototype.m_type = box2d.b2BodyType.b2_staticBody, goog.exportProperty(box2d.b2Body.prototype, "m_type", box2d.b2Body.prototype.m_type),
    box2d.b2Body.prototype.m_mass = 1, goog.exportProperty(box2d.b2Body.prototype, "m_mass", box2d.b2Body.prototype.m_mass),
    box2d.b2Body.prototype.m_invMass = 1, goog.exportProperty(box2d.b2Body.prototype, "m_invMass", box2d.b2Body.prototype.m_invMass),
    box2d.b2Body.prototype.m_I = 0, goog.exportProperty(box2d.b2Body.prototype, "m_I", box2d.b2Body.prototype.m_I),
    box2d.b2Body.prototype.m_invI = 0, goog.exportProperty(box2d.b2Body.prototype, "m_invI", box2d.b2Body.prototype.m_invI),
    box2d.b2Body.prototype.m_userData = null, goog.exportProperty(box2d.b2Body.prototype, "m_userData", box2d.b2Body.prototype.m_userData),
    box2d.b2Body.prototype.m_fixtureList = null, goog.exportProperty(box2d.b2Body.prototype, "m_fixtureList", box2d.b2Body.prototype.m_fixtureList),
    box2d.b2Body.prototype.m_fixtureCount = 0, goog.exportProperty(box2d.b2Body.prototype, "m_fixtureCount", box2d.b2Body.prototype.m_fixtureCount),
    box2d.b2Body.prototype.m_controllerList = null, goog.exportProperty(box2d.b2Body.prototype, "m_controllerList", box2d.b2Body.prototype.m_controllerList),
    box2d.b2Body.prototype.m_controllerCount = 0, goog.exportProperty(box2d.b2Body.prototype, "m_controllerCount", box2d.b2Body.prototype.m_controllerCount),
    box2d.b2Body.prototype.CreateFixture = function(o, t) {
        if (o instanceof box2d.b2FixtureDef) return this.CreateFixture_Def(o);
        if (o instanceof box2d.b2Shape && "number" == typeof t) return this.CreateFixture_Shape_Density(o, t);
        throw Error();
    }, goog.exportProperty(box2d.b2Body.prototype, "CreateFixture", box2d.b2Body.prototype.CreateFixture),
    box2d.b2Body.prototype.CreateFixture_Def = function(o) {
        if (box2d.ENABLE_ASSERTS && box2d.b2Assert(!this.m_world.IsLocked()), this.m_world.IsLocked()) return null;
        var t = new box2d.b2Fixture();
        return t.Create(this, o), this.m_flag_activeFlag && t.CreateProxies(this.m_world.m_contactManager.m_broadPhase, this.m_xf),
            t.m_next = this.m_fixtureList, this.m_fixtureList = t, ++this.m_fixtureCount, t.m_body = this,
            0 < t.m_density && this.ResetMassData(), this.m_world.m_flag_newFixture = !0, t;
    }, goog.exportProperty(box2d.b2Body.prototype, "CreateFixture_Def", box2d.b2Body.prototype.CreateFixture_Def),
    box2d.b2Body.prototype.CreateFixture_Shape_Density = function(o, t) {
        var e = box2d.b2Body.prototype.CreateFixture_Shape_Density.s_def;
        return e.shape = o, e.density = "number" == typeof t ? t : 0, this.CreateFixture_Def(e);
    }, goog.exportProperty(box2d.b2Body.prototype, "CreateFixture_Shape_Density", box2d.b2Body.prototype.CreateFixture_Shape_Density),
    box2d.b2Body.prototype.CreateFixture_Shape_Density.s_def = new box2d.b2FixtureDef(),
    box2d.b2Body.prototype.DestroyFixture = function(o) {
        if (box2d.ENABLE_ASSERTS && box2d.b2Assert(!this.m_world.IsLocked()), !this.m_world.IsLocked()) {
            box2d.ENABLE_ASSERTS && box2d.b2Assert(o.m_body === this), box2d.ENABLE_ASSERTS && box2d.b2Assert(0 < this.m_fixtureCount);
            for (var t = this.m_fixtureList, e = null, r = !1; null !== t;) {
                if (t === o) {
                    e ? e.m_next = o.m_next : this.m_fixtureList = o.m_next, r = !0;
                    break;
                }
                e = t, t = t.m_next;
            }
            for (box2d.ENABLE_ASSERTS && box2d.b2Assert(r), t = this.m_contactList; t;) {
                e = t.contact, t = t.next, r = e.GetFixtureA();
                var i = e.GetFixtureB();
                o !== r && o !== i || this.m_world.m_contactManager.Destroy(e);
            }
            this.m_flag_activeFlag && o.DestroyProxies(this.m_world.m_contactManager.m_broadPhase),
                o.Destroy(), o.m_body = null, o.m_next = null, --this.m_fixtureCount, this.ResetMassData();
        }
    }, goog.exportProperty(box2d.b2Body.prototype, "DestroyFixture", box2d.b2Body.prototype.DestroyFixture),
    box2d.b2Body.prototype.SetTransform = function(o, t, e) {
        if (o instanceof box2d.b2Vec2 && "number" == typeof t) this.SetTransform_X_Y_A(o.x, o.y, t);
        else if (o instanceof box2d.b2Transform) this.SetTransform_X_Y_A(o.p.x, o.p.y, o.GetAngle());
        else {
            if ("number" != typeof o || "number" != typeof t || "number" != typeof e) throw Error();
            this.SetTransform_X_Y_A(o, t, e);
        }
    }, goog.exportProperty(box2d.b2Body.prototype, "SetTransform", box2d.b2Body.prototype.SetTransform),
    box2d.b2Body.prototype.SetTransform_V2_A = function(o, t) {
        this.SetTransform_X_Y_A(o.x, o.y, t);
    }, goog.exportProperty(box2d.b2Body.prototype, "SetTransform_V2_A", box2d.b2Body.prototype.SetTransform_V2_A),
    box2d.b2Body.prototype.SetTransform_X_Y_A = function(o, t, e) {
        if (box2d.ENABLE_ASSERTS && box2d.b2Assert(!this.m_world.IsLocked()), !this.m_world.IsLocked() && (this.m_xf.p.x !== o || this.m_xf.p.y !== t || this.m_xf.q.GetAngle() !== e))
            for (this.m_xf.q.SetAngle(e),
                this.m_xf.p.Set(o, t), this.m_xf0.Copy(this.m_xf), box2d.b2Mul_X_V2(this.m_xf, this.m_sweep.localCenter, this.m_sweep.c),
                this.m_sweep.a = e, this.m_sweep.c0.Copy(this.m_sweep.c), this.m_sweep.a0 = e, o = this.m_world.m_contactManager.m_broadPhase,
                t = this.m_fixtureList; t; t = t.m_next) t.Synchronize(o, this.m_xf, this.m_xf);
    }, goog.exportProperty(box2d.b2Body.prototype, "SetTransform_X_Y_A", box2d.b2Body.prototype.SetTransform_X_Y_A),
    box2d.b2Body.prototype.SetTransform_X = function(o) {
        this.SetTransform_X_Y_A(o.p.x, o.p.y, o.GetAngle());
    }, goog.exportProperty(box2d.b2Body.prototype, "SetTransform_X", box2d.b2Body.prototype.SetTransform_X),
    box2d.b2Body.prototype.GetTransform = function(o) {
        return (o = o || this.m_out_xf).Copy(this.m_xf);
    }, goog.exportProperty(box2d.b2Body.prototype, "GetTransform", box2d.b2Body.prototype.GetTransform),
    box2d.b2Body.prototype.GetPosition = function(o) {
        return (o = o || this.m_out_xf.p).Copy(this.m_xf.p);
    }, goog.exportProperty(box2d.b2Body.prototype, "GetPosition", box2d.b2Body.prototype.GetPosition),
    box2d.b2Body.prototype.SetPosition = function(o) {
        this.SetTransform_V2_A(o, this.GetAngle());
    }, goog.exportProperty(box2d.b2Body.prototype, "SetPosition", box2d.b2Body.prototype.SetPosition),
    box2d.b2Body.prototype.SetPositionXY = function(o, t) {
        this.SetTransform_X_Y_A(o, t, this.GetAngle());
    }, goog.exportProperty(box2d.b2Body.prototype, "SetPositionXY", box2d.b2Body.prototype.SetPositionXY),
    box2d.b2Body.prototype.GetRotation = function(o) {
        return (o = o || this.m_out_xf.q).Copy(this.m_xf.q);
    }, goog.exportProperty(box2d.b2Body.prototype, "GetRotation", box2d.b2Body.prototype.GetRotation),
    box2d.b2Body.prototype.SetRotation = function(o) {
        this.SetTransform_V2_A(this.GetPosition(), o.GetAngle());
    }, goog.exportProperty(box2d.b2Body.prototype, "SetRotation", box2d.b2Body.prototype.SetRotation),
    box2d.b2Body.prototype.GetAngle = function() {
        return this.m_sweep.a;
    }, goog.exportProperty(box2d.b2Body.prototype, "GetAngle", box2d.b2Body.prototype.GetAngle),
    box2d.b2Body.prototype.SetAngle = function(o) {
        this.SetTransform_V2_A(this.GetPosition(), o);
    }, goog.exportProperty(box2d.b2Body.prototype, "SetAngle", box2d.b2Body.prototype.SetAngle),
    box2d.b2Body.prototype.GetWorldCenter = function(o) {
        return (o = o || this.m_out_sweep.c).Copy(this.m_sweep.c);
    }, goog.exportProperty(box2d.b2Body.prototype, "GetWorldCenter", box2d.b2Body.prototype.GetWorldCenter),
    box2d.b2Body.prototype.GetLocalCenter = function(o) {
        return (o = o || this.m_out_sweep.localCenter).Copy(this.m_sweep.localCenter);
    }, goog.exportProperty(box2d.b2Body.prototype, "GetLocalCenter", box2d.b2Body.prototype.GetLocalCenter),
    box2d.b2Body.prototype.SetLinearVelocity = function(o) {
        this.m_type !== box2d.b2BodyType.b2_staticBody && (0 < box2d.b2Dot_V2_V2(o, o) && this.SetAwake(!0),
            this.m_linearVelocity.Copy(o));
    }, goog.exportProperty(box2d.b2Body.prototype, "SetLinearVelocity", box2d.b2Body.prototype.SetLinearVelocity),
    box2d.b2Body.prototype.GetLinearVelocity = function(o) {
        return (o = o || this.m_out_linearVelocity).Copy(this.m_linearVelocity);
    }, goog.exportProperty(box2d.b2Body.prototype, "GetLinearVelocity", box2d.b2Body.prototype.GetLinearVelocity),
    box2d.b2Body.prototype.SetAngularVelocity = function(o) {
        this.m_type !== box2d.b2BodyType.b2_staticBody && (0 < o * o && this.SetAwake(!0),
            this.m_angularVelocity = o);
    }, goog.exportProperty(box2d.b2Body.prototype, "SetAngularVelocity", box2d.b2Body.prototype.SetAngularVelocity),
    box2d.b2Body.prototype.GetAngularVelocity = function() {
        return this.m_angularVelocity;
    }, goog.exportProperty(box2d.b2Body.prototype, "GetAngularVelocity", box2d.b2Body.prototype.GetAngularVelocity),
    box2d.b2Body.prototype.GetDefinition = function(o) {
        return o.type = this.GetType(), o.allowSleep = this.m_flag_autoSleepFlag, o.angle = this.GetAngle(),
            o.angularDamping = this.m_angularDamping, o.gravityScale = this.m_gravityScale,
            o.angularVelocity = this.m_angularVelocity, o.fixedRotation = this.m_flag_fixedRotationFlag,
            o.bullet = this.m_flag_bulletFlag, o.awake = this.m_flag_awakeFlag, o.linearDamping = this.m_linearDamping,
            o.linearVelocity.Copy(this.GetLinearVelocity()), o.position.Copy(this.GetPosition()),
            o.userData = this.GetUserData(), o;
    }, goog.exportProperty(box2d.b2Body.prototype, "GetDefinition", box2d.b2Body.prototype.GetDefinition),
    box2d.b2Body.prototype.ApplyForce = function(o, t, e) {
        this.m_type === box2d.b2BodyType.b2_dynamicBody && (!this.m_flag_awakeFlag && this.SetAwake(!0),
            this.m_flag_awakeFlag && (this.m_force.x += o.x, this.m_force.y += o.y, this.m_torque += (t.x - this.m_sweep.c.x) * o.y - (t.y - this.m_sweep.c.y) * o.x));
    }, goog.exportProperty(box2d.b2Body.prototype, "ApplyForce", box2d.b2Body.prototype.ApplyForce),
    box2d.b2Body.prototype.ApplyForceToCenter = function(o, t) {
        this.m_type === box2d.b2BodyType.b2_dynamicBody && (("boolean" == typeof t ? t : 1) && !this.m_flag_awakeFlag && this.SetAwake(!0),
            this.m_flag_awakeFlag && (this.m_force.x += o.x, this.m_force.y += o.y));
    }, goog.exportProperty(box2d.b2Body.prototype, "ApplyForceToCenter", box2d.b2Body.prototype.ApplyForceToCenter),
    box2d.b2Body.prototype.ApplyTorque = function(o, t) {
        this.m_type === box2d.b2BodyType.b2_dynamicBody && (("boolean" == typeof t ? t : 1) && !this.m_flag_awakeFlag && this.SetAwake(!0),
            this.m_flag_awakeFlag && (this.m_torque += o));
    }, goog.exportProperty(box2d.b2Body.prototype, "ApplyTorque", box2d.b2Body.prototype.ApplyTorque),
    box2d.b2Body.prototype.ApplyLinearImpulse = function(o, t, e) {
        this.m_type === box2d.b2BodyType.b2_dynamicBody && (("boolean" == typeof e ? e : 1) && !this.m_flag_awakeFlag && this.SetAwake(!0),
            this.m_flag_awakeFlag && (this.m_linearVelocity.x += this.m_invMass * o.x, this.m_linearVelocity.y += this.m_invMass * o.y,
                this.m_angularVelocity += this.m_invI * ((t.x - this.m_sweep.c.x) * o.y - (t.y - this.m_sweep.c.y) * o.x)));
    }, goog.exportProperty(box2d.b2Body.prototype, "ApplyLinearImpulse", box2d.b2Body.prototype.ApplyLinearImpulse),
    box2d.b2Body.prototype.ApplyLinearImpulseToCenter = function(o, t) {
        this.m_type === box2d.b2BodyType.b2_dynamicBody && (("boolean" == typeof t ? t : 1) && !this.m_flag_awakeFlag && this.SetAwake(!0),
            this.m_flag_awakeFlag && (this.m_linearVelocity.x += this.m_invMass * o.x, this.m_linearVelocity.y += this.m_invMass * o.y));
    }, goog.exportProperty(box2d.b2Body.prototype, "ApplyLinearImpulseToCenter", box2d.b2Body.prototype.ApplyLinearImpulseToCenter),
    box2d.b2Body.prototype.ApplyAngularImpulse = function(o, t) {
        this.m_type === box2d.b2BodyType.b2_dynamicBody && (("boolean" == typeof t ? t : 1) && !this.m_flag_awakeFlag && this.SetAwake(!0),
            this.m_flag_awakeFlag && (this.m_angularVelocity += this.m_invI * o));
    }, goog.exportProperty(box2d.b2Body.prototype, "ApplyAngularImpulse", box2d.b2Body.prototype.ApplyAngularImpulse),
    box2d.b2Body.prototype.GetMass = function() {
        return this.m_mass;
    }, goog.exportProperty(box2d.b2Body.prototype, "GetMass", box2d.b2Body.prototype.GetMass),
    box2d.b2Body.prototype.GetInertia = function() {
        return this.m_I + this.m_mass * box2d.b2Dot_V2_V2(this.m_sweep.localCenter, this.m_sweep.localCenter);
    }, goog.exportProperty(box2d.b2Body.prototype, "GetInertia", box2d.b2Body.prototype.GetInertia),
    box2d.b2Body.prototype.GetMassData = function(o) {
        return o.mass = this.m_mass, o.I = this.m_I + this.m_mass * box2d.b2Dot_V2_V2(this.m_sweep.localCenter, this.m_sweep.localCenter),
            o.center.Copy(this.m_sweep.localCenter), o;
    }, goog.exportProperty(box2d.b2Body.prototype, "GetMassData", box2d.b2Body.prototype.GetMassData),
    box2d.b2Body.prototype.SetMassData = function(o) {
        if (box2d.ENABLE_ASSERTS && box2d.b2Assert(!this.m_world.IsLocked()), !this.m_world.IsLocked() && this.m_type === box2d.b2BodyType.b2_dynamicBody) {
            this.m_invI = this.m_I = this.m_invMass = 0, this.m_mass = o.mass, 0 >= this.m_mass && (this.m_mass = 1),
                this.m_invMass = 1 / this.m_mass, 0 < o.I && !this.m_flag_fixedRotationFlag && (this.m_I = o.I - this.m_mass * box2d.b2Dot_V2_V2(o.center, o.center),
                    box2d.ENABLE_ASSERTS && box2d.b2Assert(0 < this.m_I), this.m_invI = 1 / this.m_I);
            var t = box2d.b2Body.prototype.SetMassData.s_oldCenter.Copy(this.m_sweep.c);
            this.m_sweep.localCenter.Copy(o.center), box2d.b2Mul_X_V2(this.m_xf, this.m_sweep.localCenter, this.m_sweep.c),
                this.m_sweep.c0.Copy(this.m_sweep.c), box2d.b2AddCross_V2_S_V2(this.m_linearVelocity, this.m_angularVelocity, box2d.b2Sub_V2_V2(this.m_sweep.c, t, box2d.b2Vec2.s_t0), this.m_linearVelocity);
        }
    }, goog.exportProperty(box2d.b2Body.prototype, "SetMassData", box2d.b2Body.prototype.SetMassData),
    box2d.b2Body.prototype.SetMassData.s_oldCenter = new box2d.b2Vec2(), box2d.b2Body.prototype.ResetMassData = function() {
        if (this.m_invI = this.m_I = this.m_invMass = this.m_mass = 0, this.m_sweep.localCenter.SetZero(),
            this.m_type === box2d.b2BodyType.b2_staticBody || this.m_type === box2d.b2BodyType.b2_kinematicBody) this.m_sweep.c0.Copy(this.m_xf.p),
            this.m_sweep.c.Copy(this.m_xf.p), this.m_sweep.a0 = this.m_sweep.a;
        else {
            box2d.ENABLE_ASSERTS && box2d.b2Assert(this.m_type === box2d.b2BodyType.b2_dynamicBody);
            for (var o = box2d.b2Body.prototype.ResetMassData.s_localCenter.SetZero(), t = this.m_fixtureList; t; t = t.m_next)
                if (0 !== t.m_density) {
                    var e = t.GetMassData(box2d.b2Body.prototype.ResetMassData.s_massData);
                    this.m_mass += e.mass, o.x += e.center.x * e.mass, o.y += e.center.y * e.mass, this.m_I += e.I;
                }
            0 < this.m_mass ? (this.m_invMass = 1 / this.m_mass, o.x *= this.m_invMass, o.y *= this.m_invMass) : this.m_invMass = this.m_mass = 1,
                0 < this.m_I && !this.m_flag_fixedRotationFlag ? (this.m_I -= this.m_mass * box2d.b2Dot_V2_V2(o, o),
                    box2d.ENABLE_ASSERTS && box2d.b2Assert(0 < this.m_I), this.m_invI = 1 / this.m_I) : this.m_invI = this.m_I = 0,
                t = box2d.b2Body.prototype.ResetMassData.s_oldCenter.Copy(this.m_sweep.c), this.m_sweep.localCenter.Copy(o),
                box2d.b2Mul_X_V2(this.m_xf, this.m_sweep.localCenter, this.m_sweep.c), this.m_sweep.c0.Copy(this.m_sweep.c),
                box2d.b2AddCross_V2_S_V2(this.m_linearVelocity, this.m_angularVelocity, box2d.b2Sub_V2_V2(this.m_sweep.c, t, box2d.b2Vec2.s_t0), this.m_linearVelocity);
        }
    }, goog.exportProperty(box2d.b2Body.prototype, "ResetMassData", box2d.b2Body.prototype.ResetMassData),
    box2d.b2Body.prototype.ResetMassData.s_localCenter = new box2d.b2Vec2(), box2d.b2Body.prototype.ResetMassData.s_oldCenter = new box2d.b2Vec2(),
    box2d.b2Body.prototype.ResetMassData.s_massData = new box2d.b2MassData(), box2d.b2Body.prototype.GetWorldPoint = function(o, t) {
        return box2d.b2Mul_X_V2(this.m_xf, o, t);
    }, goog.exportProperty(box2d.b2Body.prototype, "GetWorldPoint", box2d.b2Body.prototype.GetWorldPoint),
    box2d.b2Body.prototype.GetWorldVector = function(o, t) {
        return box2d.b2Mul_R_V2(this.m_xf.q, o, t);
    }, goog.exportProperty(box2d.b2Body.prototype, "GetWorldVector", box2d.b2Body.prototype.GetWorldVector),
    box2d.b2Body.prototype.GetLocalPoint = function(o, t) {
        return box2d.b2MulT_X_V2(this.m_xf, o, t);
    }, goog.exportProperty(box2d.b2Body.prototype, "GetLocalPoint", box2d.b2Body.prototype.GetLocalPoint),
    box2d.b2Body.prototype.GetLocalVector = function(o, t) {
        return box2d.b2MulT_R_V2(this.m_xf.q, o, t);
    }, goog.exportProperty(box2d.b2Body.prototype, "GetLocalVector", box2d.b2Body.prototype.GetLocalVector),
    box2d.b2Body.prototype.GetLinearVelocityFromWorldPoint = function(o, t) {
        return box2d.b2AddCross_V2_S_V2(this.m_linearVelocity, this.m_angularVelocity, box2d.b2Sub_V2_V2(o, this.m_sweep.c, box2d.b2Vec2.s_t0), t);
    }, goog.exportProperty(box2d.b2Body.prototype, "GetLinearVelocityFromWorldPoint", box2d.b2Body.prototype.GetLinearVelocityFromWorldPoint),
    box2d.b2Body.prototype.GetLinearVelocityFromLocalPoint = function(o, t) {
        return this.GetLinearVelocityFromWorldPoint(this.GetWorldPoint(o, t), t);
    }, goog.exportProperty(box2d.b2Body.prototype, "GetLinearVelocityFromLocalPoint", box2d.b2Body.prototype.GetLinearVelocityFromLocalPoint),
    box2d.b2Body.prototype.GetLinearDamping = function() {
        return this.m_linearDamping;
    }, goog.exportProperty(box2d.b2Body.prototype, "GetLinearDamping", box2d.b2Body.prototype.GetLinearDamping),
    box2d.b2Body.prototype.SetLinearDamping = function(o) {
        this.m_linearDamping = o;
    }, goog.exportProperty(box2d.b2Body.prototype, "SetLinearDamping", box2d.b2Body.prototype.SetLinearDamping),
    box2d.b2Body.prototype.GetAngularDamping = function() {
        return this.m_angularDamping;
    }, goog.exportProperty(box2d.b2Body.prototype, "GetAngularDamping", box2d.b2Body.prototype.GetAngularDamping),
    box2d.b2Body.prototype.SetAngularDamping = function(o) {
        this.m_angularDamping = o;
    }, goog.exportProperty(box2d.b2Body.prototype, "SetAngularDamping", box2d.b2Body.prototype.SetAngularDamping),
    box2d.b2Body.prototype.GetGravityScale = function() {
        return this.m_gravityScale;
    }, goog.exportProperty(box2d.b2Body.prototype, "GetGravityScale", box2d.b2Body.prototype.GetGravityScale),
    box2d.b2Body.prototype.SetGravityScale = function(o) {
        this.m_gravityScale = o;
    }, goog.exportProperty(box2d.b2Body.prototype, "SetGravityScale", box2d.b2Body.prototype.SetGravityScale),
    box2d.b2Body.prototype.SetType = function(o) {
        if (box2d.ENABLE_ASSERTS && box2d.b2Assert(!this.m_world.IsLocked()), !this.m_world.IsLocked() && this.m_type !== o) {
            for (this.m_type = o, this.ResetMassData(), this.m_type === box2d.b2BodyType.b2_staticBody && (this.m_linearVelocity.SetZero(),
                    this.m_angularVelocity = 0, this.m_sweep.a0 = this.m_sweep.a, this.m_sweep.c0.Copy(this.m_sweep.c),
                    this.SynchronizeFixtures()), this.SetAwake(!0), this.m_force.SetZero(), this.m_torque = 0,
                o = this.m_contactList; o;) {
                var t = o;
                o = o.next, this.m_world.m_contactManager.Destroy(t.contact);
            }
            for (this.m_contactList = null, o = this.m_world.m_contactManager.m_broadPhase,
                t = this.m_fixtureList; t; t = t.m_next)
                for (var e = t.m_proxyCount, r = 0; r < e; ++r) o.TouchProxy(t.m_proxies[r].proxy);
        }
    }, goog.exportProperty(box2d.b2Body.prototype, "SetType", box2d.b2Body.prototype.SetType),
    box2d.b2Body.prototype.GetType = function() {
        return this.m_type;
    }, goog.exportProperty(box2d.b2Body.prototype, "GetType", box2d.b2Body.prototype.GetType),
    box2d.b2Body.prototype.SetBullet = function(o) {
        this.m_flag_bulletFlag = o;
    }, goog.exportProperty(box2d.b2Body.prototype, "SetBullet", box2d.b2Body.prototype.SetBullet),
    box2d.b2Body.prototype.IsBullet = function() {
        return this.m_flag_bulletFlag;
    }, goog.exportProperty(box2d.b2Body.prototype, "IsBullet", box2d.b2Body.prototype.IsBullet),
    box2d.b2Body.prototype.SetSleepingAllowed = function(o) {
        o ? this.m_flag_autoSleepFlag = !0 : (this.m_flag_autoSleepFlag = !1, this.SetAwake(!0));
    }, goog.exportProperty(box2d.b2Body.prototype, "SetSleepingAllowed", box2d.b2Body.prototype.SetSleepingAllowed),
    box2d.b2Body.prototype.IsSleepingAllowed = function() {
        return this.m_flag_autoSleepFlag;
    }, goog.exportProperty(box2d.b2Body.prototype, "IsSleepingAllowed", box2d.b2Body.prototype.IsSleepingAllowed),
    box2d.b2Body.prototype.SetAwake = function(o) {
        o ? this.m_flag_awakeFlag || (this.m_flag_awakeFlag = !0, this.m_sleepTime = 0) : (this.m_flag_awakeFlag = !1,
            this.m_sleepTime = 0, this.m_linearVelocity.SetZero(), this.m_angularVelocity = 0,
            this.m_force.SetZero(), this.m_torque = 0);
    }, goog.exportProperty(box2d.b2Body.prototype, "SetAwake", box2d.b2Body.prototype.SetAwake),
    box2d.b2Body.prototype.IsAwake = function() {
        return this.m_flag_awakeFlag;
    }, goog.exportProperty(box2d.b2Body.prototype, "IsAwake", box2d.b2Body.prototype.IsAwake),
    box2d.b2Body.prototype.SetActive = function(o) {
        if (box2d.ENABLE_ASSERTS && box2d.b2Assert(!this.m_world.IsLocked()), o !== this.IsActive())
            if (o) {
                this.m_flag_activeFlag = !0, o = this.m_world.m_contactManager.m_broadPhase;
                for (var t = this.m_fixtureList; t; t = t.m_next) t.CreateProxies(o, this.m_xf);
            } else {
                for (this.m_flag_activeFlag = !1, o = this.m_world.m_contactManager.m_broadPhase,
                    t = this.m_fixtureList; t; t = t.m_next) t.DestroyProxies(o);
                for (o = this.m_contactList; o;) t = o, o = o.next, this.m_world.m_contactManager.Destroy(t.contact);
                this.m_contactList = null;
            }
    }, goog.exportProperty(box2d.b2Body.prototype, "SetActive", box2d.b2Body.prototype.SetActive),
    box2d.b2Body.prototype.IsActive = function() {
        return this.m_flag_activeFlag;
    }, goog.exportProperty(box2d.b2Body.prototype, "IsActive", box2d.b2Body.prototype.IsActive),
    box2d.b2Body.prototype.SetFixedRotation = function(o) {
        this.m_flag_fixedRotationFlag !== o && (this.m_flag_fixedRotationFlag = o, this.m_angularVelocity = 0,
            this.ResetMassData());
    }, goog.exportProperty(box2d.b2Body.prototype, "SetFixedRotation", box2d.b2Body.prototype.SetFixedRotation),
    box2d.b2Body.prototype.IsFixedRotation = function() {
        return this.m_flag_fixedRotationFlag;
    }, goog.exportProperty(box2d.b2Body.prototype, "IsFixedRotation", box2d.b2Body.prototype.IsFixedRotation),
    box2d.b2Body.prototype.GetFixtureList = function() {
        return this.m_fixtureList;
    }, goog.exportProperty(box2d.b2Body.prototype, "GetFixtureList", box2d.b2Body.prototype.GetFixtureList),
    box2d.b2Body.prototype.GetJointList = function() {
        return this.m_jointList;
    }, goog.exportProperty(box2d.b2Body.prototype, "GetJointList", box2d.b2Body.prototype.GetJointList),
    box2d.b2Body.prototype.GetContactList = function() {
        return this.m_contactList;
    }, goog.exportProperty(box2d.b2Body.prototype, "GetContactList", box2d.b2Body.prototype.GetContactList),
    box2d.b2Body.prototype.GetNext = function() {
        return this.m_next;
    }, goog.exportProperty(box2d.b2Body.prototype, "GetNext", box2d.b2Body.prototype.GetNext),
    box2d.b2Body.prototype.GetUserData = function() {
        return this.m_userData;
    }, goog.exportProperty(box2d.b2Body.prototype, "GetUserData", box2d.b2Body.prototype.GetUserData),
    box2d.b2Body.prototype.SetUserData = function(o) {
        this.m_userData = o;
    }, goog.exportProperty(box2d.b2Body.prototype, "SetUserData", box2d.b2Body.prototype.SetUserData),
    box2d.b2Body.prototype.GetWorld = function() {
        return this.m_world;
    }, goog.exportProperty(box2d.b2Body.prototype, "GetWorld", box2d.b2Body.prototype.GetWorld),
    box2d.b2Body.prototype.SynchronizeFixtures = function() {
        var o = box2d.b2Body.prototype.SynchronizeFixtures.s_xf1;
        o.q.SetAngle(this.m_sweep.a0), box2d.b2Mul_R_V2(o.q, this.m_sweep.localCenter, o.p),
            box2d.b2Sub_V2_V2(this.m_sweep.c0, o.p, o.p);
        for (var t = this.m_world.m_contactManager.m_broadPhase, e = this.m_fixtureList; e; e = e.m_next) e.Synchronize(t, o, this.m_xf);
    }, goog.exportProperty(box2d.b2Body.prototype, "SynchronizeFixtures", box2d.b2Body.prototype.SynchronizeFixtures),
    box2d.b2Body.prototype.SynchronizeFixtures.s_xf1 = new box2d.b2Transform(), box2d.b2Body.prototype.SynchronizeTransform = function() {
        this.m_xf.q.SetAngle(this.m_sweep.a), box2d.b2Mul_R_V2(this.m_xf.q, this.m_sweep.localCenter, this.m_xf.p),
            box2d.b2Sub_V2_V2(this.m_sweep.c, this.m_xf.p, this.m_xf.p);
    }, goog.exportProperty(box2d.b2Body.prototype, "SynchronizeTransform", box2d.b2Body.prototype.SynchronizeTransform),
    box2d.b2Body.prototype.ShouldCollide = function(o) {
        return (this.m_type !== box2d.b2BodyType.b2_staticBody || o.m_type !== box2d.b2BodyType.b2_staticBody) && this.ShouldCollideConnected(o);
    }, goog.exportProperty(box2d.b2Body.prototype, "ShouldCollide", box2d.b2Body.prototype.ShouldCollide),
    box2d.b2Body.prototype.ShouldCollideConnected = function(o) {
        for (var t = this.m_jointList; t; t = t.next)
            if (t.other === o && !t.joint.m_collideConnected) return !1;
        return !0;
    }, goog.exportProperty(box2d.b2Body.prototype, "ShouldCollideConnected", box2d.b2Body.prototype.ShouldCollideConnected),
    box2d.b2Body.prototype.Advance = function(o) {
        this.m_sweep.Advance(o), this.m_sweep.c.Copy(this.m_sweep.c0), this.m_sweep.a = this.m_sweep.a0,
            this.m_xf.q.SetAngle(this.m_sweep.a), box2d.b2Mul_R_V2(this.m_xf.q, this.m_sweep.localCenter, this.m_xf.p),
            box2d.b2Sub_V2_V2(this.m_sweep.c, this.m_xf.p, this.m_xf.p);
    }, goog.exportProperty(box2d.b2Body.prototype, "Advance", box2d.b2Body.prototype.Advance),
    box2d.b2Body.prototype.Dump = function() {
        if (box2d.DEBUG) {
            var o = this.m_islandIndex;
            box2d.b2Log("{\n"), box2d.b2Log("  /*box2d.b2BodyDef*/ var bd = new box2d.b2BodyDef();\n");
            var t = "";
            switch (this.m_type) {
                case box2d.b2BodyType.b2_staticBody:
                    t = "box2d.b2BodyType.b2_staticBody";
                    break;

                case box2d.b2BodyType.b2_kinematicBody:
                    t = "box2d.b2BodyType.b2_kinematicBody";
                    break;

                case box2d.b2BodyType.b2_dynamicBody:
                    t = "box2d.b2BodyType.b2_dynamicBody";
                    break;

                default:
                    box2d.ENABLE_ASSERTS && box2d.b2Assert(!1);
            }
            for (box2d.b2Log("  bd.type = %s;\n", t), box2d.b2Log("  bd.position.Set(%.15f, %.15f);\n", this.m_xf.p.x, this.m_xf.p.y),
                box2d.b2Log("  bd.angle = %.15f;\n", this.m_sweep.a), box2d.b2Log("  bd.linearVelocity.Set(%.15f, %.15f);\n", this.m_linearVelocity.x, this.m_linearVelocity.y),
                box2d.b2Log("  bd.angularVelocity = %.15f;\n", this.m_angularVelocity), box2d.b2Log("  bd.linearDamping = %.15f;\n", this.m_linearDamping),
                box2d.b2Log("  bd.angularDamping = %.15f;\n", this.m_angularDamping), box2d.b2Log("  bd.allowSleep = %s;\n", this.m_flag_autoSleepFlag ? "true" : "false"),
                box2d.b2Log("  bd.awake = %s;\n", this.m_flag_awakeFlag ? "true" : "false"), box2d.b2Log("  bd.fixedRotation = %s;\n", this.m_flag_fixedRotationFlag ? "true" : "false"),
                box2d.b2Log("  bd.bullet = %s;\n", this.m_flag_bulletFlag ? "true" : "false"), box2d.b2Log("  bd.active = %s;\n", this.m_flag_activeFlag ? "true" : "false"),
                box2d.b2Log("  bd.gravityScale = %.15f;\n", this.m_gravityScale), box2d.b2Log("\n"),
                box2d.b2Log("  bodies[%d] = this.m_world.CreateBody(bd);\n", this.m_islandIndex),
                box2d.b2Log("\n"), t = this.m_fixtureList; t; t = t.m_next) box2d.b2Log("  {\n"),
                t.Dump(o), box2d.b2Log("  }\n");
            box2d.b2Log("}\n");
        }
    }, goog.exportProperty(box2d.b2Body.prototype, "Dump", box2d.b2Body.prototype.Dump),
    box2d.b2Body.prototype.GetControllerList = function() {
        return this.m_controllerList;
    }, goog.exportProperty(box2d.b2Body.prototype, "GetControllerList", box2d.b2Body.prototype.GetControllerList),
    box2d.b2Body.prototype.GetControllerCount = function() {
        return this.m_controllerCount;
    }, goog.exportProperty(box2d.b2Body.prototype, "GetControllerCount", box2d.b2Body.prototype.GetControllerCount),
    box2d.b2Profile = function() {}, goog.exportSymbol("box2d.b2Profile", box2d.b2Profile),
    box2d.b2Profile.prototype.step = 0, goog.exportProperty(box2d.b2Profile.prototype, "step", box2d.b2Profile.prototype.step),
    box2d.b2Profile.prototype.collide = 0, goog.exportProperty(box2d.b2Profile.prototype, "collide", box2d.b2Profile.prototype.collide),
    box2d.b2Profile.prototype.solve = 0, goog.exportProperty(box2d.b2Profile.prototype, "solve", box2d.b2Profile.prototype.solve),
    box2d.b2Profile.prototype.solveInit = 0, goog.exportProperty(box2d.b2Profile.prototype, "solveInit", box2d.b2Profile.prototype.solveInit),
    box2d.b2Profile.prototype.solveVelocity = 0, goog.exportProperty(box2d.b2Profile.prototype, "solveVelocity", box2d.b2Profile.prototype.solveVelocity),
    box2d.b2Profile.prototype.solvePosition = 0, goog.exportProperty(box2d.b2Profile.prototype, "solvePosition", box2d.b2Profile.prototype.solvePosition),
    box2d.b2Profile.prototype.broadphase = 0, goog.exportProperty(box2d.b2Profile.prototype, "broadphase", box2d.b2Profile.prototype.broadphase),
    box2d.b2Profile.prototype.solveTOI = 0, goog.exportProperty(box2d.b2Profile.prototype, "solveTOI", box2d.b2Profile.prototype.solveTOI),
    box2d.b2Profile.prototype.Reset = function() {
        return this.solveTOI = this.broadphase = this.solvePosition = this.solveVelocity = this.solveInit = this.solve = this.collide = this.step = 0,
            this;
    }, goog.exportProperty(box2d.b2Profile.prototype, "Reset", box2d.b2Profile.prototype.Reset),
    box2d.b2TimeStep = function() {}, goog.exportSymbol("box2d.b2TimeStep", box2d.b2TimeStep),
    box2d.b2TimeStep.prototype.dt = 0, goog.exportProperty(box2d.b2TimeStep.prototype, "dt", box2d.b2TimeStep.prototype.dt),
    box2d.b2TimeStep.prototype.inv_dt = 0, goog.exportProperty(box2d.b2TimeStep.prototype, "inv_dt", box2d.b2TimeStep.prototype.inv_dt),
    box2d.b2TimeStep.prototype.dtRatio = 0, goog.exportProperty(box2d.b2TimeStep.prototype, "dtRatio", box2d.b2TimeStep.prototype.dtRatio),
    box2d.b2TimeStep.prototype.velocityIterations = 0, goog.exportProperty(box2d.b2TimeStep.prototype, "velocityIterations", box2d.b2TimeStep.prototype.velocityIterations),
    box2d.b2TimeStep.prototype.positionIterations = 0, goog.exportProperty(box2d.b2TimeStep.prototype, "positionIterations", box2d.b2TimeStep.prototype.positionIterations),
    box2d.b2TimeStep.prototype.particleIterations = 0, goog.exportProperty(box2d.b2TimeStep.prototype, "particleIterations", box2d.b2TimeStep.prototype.particleIterations),
    box2d.b2TimeStep.prototype.warmStarting = !1, goog.exportProperty(box2d.b2TimeStep.prototype, "warmStarting", box2d.b2TimeStep.prototype.warmStarting),
    box2d.b2TimeStep.prototype.Copy = function(o) {
        return this.dt = o.dt, this.inv_dt = o.inv_dt, this.dtRatio = o.dtRatio, this.positionIterations = o.positionIterations,
            this.velocityIterations = o.velocityIterations, this.particleIterations = o.particleIterations,
            this.warmStarting = o.warmStarting, this;
    }, goog.exportProperty(box2d.b2TimeStep.prototype, "Copy", box2d.b2TimeStep.prototype.Copy),
    box2d.b2Position = function() {
        this.c = new box2d.b2Vec2();
    }, goog.exportSymbol("box2d.b2Position", box2d.b2Position), box2d.b2Position.prototype.c = null,
    goog.exportProperty(box2d.b2Position.prototype, "c", box2d.b2Position.prototype.c),
    box2d.b2Position.prototype.a = 0, goog.exportProperty(box2d.b2Position.prototype, "a", box2d.b2Position.prototype.a),
    box2d.b2Position.MakeArray = function(o) {
        return box2d.b2MakeArray(o, function(o) {
            return new box2d.b2Position();
        });
    }, goog.exportProperty(box2d.b2Position, "MakeArray", box2d.b2Position.MakeArray),
    box2d.b2Velocity = function() {
        this.v = new box2d.b2Vec2();
    }, goog.exportSymbol("box2d.b2Velocity", box2d.b2Velocity), box2d.b2Velocity.prototype.v = null,
    goog.exportProperty(box2d.b2Velocity.prototype, "v", box2d.b2Velocity.prototype.v),
    box2d.b2Velocity.prototype.w = 0, goog.exportProperty(box2d.b2Velocity.prototype, "w", box2d.b2Velocity.prototype.w),
    box2d.b2Velocity.MakeArray = function(o) {
        return box2d.b2MakeArray(o, function(o) {
            return new box2d.b2Velocity();
        });
    }, goog.exportProperty(box2d.b2Velocity, "MakeArray", box2d.b2Velocity.MakeArray),
    box2d.b2SolverData = function() {
        this.step = new box2d.b2TimeStep();
    }, goog.exportSymbol("box2d.b2SolverData", box2d.b2SolverData), box2d.b2SolverData.prototype.step = null,
    goog.exportProperty(box2d.b2SolverData.prototype, "step", box2d.b2SolverData.prototype.step),
    box2d.b2SolverData.prototype.positions = null, goog.exportProperty(box2d.b2SolverData.prototype, "positions", box2d.b2SolverData.prototype.positions),
    box2d.b2SolverData.prototype.velocities = null, goog.exportProperty(box2d.b2SolverData.prototype, "velocities", box2d.b2SolverData.prototype.velocities),
    box2d.b2WorldCallbacks = {}, box2d.b2DestructionListener = function() {}, goog.exportSymbol("box2d.b2DestructionListener", box2d.b2DestructionListener),
    box2d.b2DestructionListener.prototype.SayGoodbyeJoint = function(o) {}, goog.exportProperty(box2d.b2DestructionListener.prototype, "SayGoodbyeJoint", box2d.b2DestructionListener.prototype.SayGoodbyeJoint),
    box2d.b2DestructionListener.prototype.SayGoodbyeFixture = function(o) {}, goog.exportProperty(box2d.b2DestructionListener.prototype, "SayGoodbyeFixture", box2d.b2DestructionListener.prototype.SayGoodbyeFixture),
    box2d.b2DestructionListener.prototype.SayGoodbyeParticleGroup = function(o) {},
    box2d.b2DestructionListener.prototype.SayGoodbyeParticle = function(o, t) {}, box2d.b2ContactFilter = function() {},
    goog.exportSymbol("box2d.b2ContactFilter", box2d.b2ContactFilter), box2d.b2ContactFilter.prototype.ShouldCollide = function(o, t) {
        var e = o.GetBody(),
            r = t.GetBody();
        return (r.GetType() !== box2d.b2BodyType.b2_staticBody || e.GetType() !== box2d.b2BodyType.b2_staticBody) && !1 !== r.ShouldCollideConnected(e) && (e = o.GetFilterData(),
            r = t.GetFilterData(), e.groupIndex === r.groupIndex && 0 !== e.groupIndex ? 0 < e.groupIndex : 0 != (e.maskBits & r.categoryBits) && 0 != (e.categoryBits & r.maskBits));
    }, goog.exportProperty(box2d.b2ContactFilter.prototype, "ShouldCollide", box2d.b2ContactFilter.prototype.ShouldCollide),
    box2d.b2ContactFilter.prototype.ShouldCollideFixtureParticle = function(o, t, e) {
        return !0;
    }, goog.exportProperty(box2d.b2ContactFilter.prototype, "ShouldCollideFixtureParticle", box2d.b2ContactFilter.prototype.ShouldCollideFixtureParticle),
    box2d.b2ContactFilter.prototype.ShouldCollideParticleParticle = function(o, t, e) {
        return !0;
    }, goog.exportProperty(box2d.b2ContactFilter.prototype, "ShouldCollideParticleParticle", box2d.b2ContactFilter.prototype.ShouldCollideParticleParticle),
    box2d.b2ContactFilter.b2_defaultFilter = new box2d.b2ContactFilter(), box2d.b2ContactImpulse = function() {
        this.normalImpulses = box2d.b2MakeNumberArray(box2d.b2_maxManifoldPoints), this.tangentImpulses = box2d.b2MakeNumberArray(box2d.b2_maxManifoldPoints);
    }, goog.exportSymbol("box2d.b2ContactImpulse", box2d.b2ContactImpulse), box2d.b2ContactImpulse.prototype.normalImpulses = null,
    goog.exportProperty(box2d.b2ContactImpulse.prototype, "normalImpulses", box2d.b2ContactImpulse.prototype.normalImpulses),
    box2d.b2ContactImpulse.prototype.tangentImpulses = null, goog.exportProperty(box2d.b2ContactImpulse.prototype, "tangentImpulses", box2d.b2ContactImpulse.prototype.tangentImpulses),
    box2d.b2ContactImpulse.prototype.count = 0, goog.exportProperty(box2d.b2ContactImpulse.prototype, "count", box2d.b2ContactImpulse.prototype.count),
    box2d.b2ContactListener = function() {}, goog.exportSymbol("box2d.b2ContactListener", box2d.b2ContactListener),
    box2d.b2ContactListener.prototype.BeginContact = function(o) {}, goog.exportProperty(box2d.b2ContactListener.prototype, "BeginContact", box2d.b2ContactListener.prototype.BeginContact),
    box2d.b2ContactListener.prototype.EndContact = function(o) {}, goog.exportProperty(box2d.b2ContactListener.prototype, "EndContact", box2d.b2ContactListener.prototype.EndContact),
    box2d.b2ContactListener.prototype.BeginContactFixtureParticle = function(o, t) {},
    goog.exportProperty(box2d.b2ContactListener.prototype, "BeginContactFixtureParticle", box2d.b2ContactListener.prototype.BeginContactFixtureParticle),
    box2d.b2ContactListener.prototype.EndContactFixtureParticle = function(o, t, e) {},
    goog.exportProperty(box2d.b2ContactListener.prototype, "EndContactFixtureParticle", box2d.b2ContactListener.prototype.EndContactFixtureParticle),
    box2d.b2ContactListener.prototype.BeginContactParticleParticle = function(o, t) {},
    goog.exportProperty(box2d.b2ContactListener.prototype, "BeginContactParticleParticle", box2d.b2ContactListener.prototype.BeginContactParticleParticle),
    box2d.b2ContactListener.prototype.EndContactParticleParticle = function(o, t, e) {},
    goog.exportProperty(box2d.b2ContactListener.prototype, "EndContactParticleParticle", box2d.b2ContactListener.prototype.EndContactParticleParticle),
    box2d.b2ContactListener.prototype.PreSolve = function(o, t) {}, goog.exportProperty(box2d.b2ContactListener.prototype, "PreSolve", box2d.b2ContactListener.prototype.PreSolve),
    box2d.b2ContactListener.prototype.PostSolve = function(o, t) {}, goog.exportProperty(box2d.b2ContactListener.prototype, "PostSolve", box2d.b2ContactListener.prototype.PostSolve),
    box2d.b2ContactListener.b2_defaultListener = new box2d.b2ContactListener(), goog.exportProperty(box2d.b2ContactListener, "b2_defaultListener", box2d.b2ContactListener.b2_defaultListener),
    box2d.b2QueryCallback = function() {}, goog.exportSymbol("box2d.b2QueryCallback", box2d.b2QueryCallback),
    box2d.b2QueryCallback.prototype.ReportFixture = function(o) {
        return !0;
    }, goog.exportProperty(box2d.b2QueryCallback.prototype, "ReportFixture", box2d.b2QueryCallback.prototype.ReportFixture),
    box2d.b2QueryCallback.prototype.ReportParticle = function(o, t) {
        return !1;
    }, goog.exportProperty(box2d.b2QueryCallback.prototype, "ReportParticle", box2d.b2QueryCallback.prototype.ReportParticle),
    box2d.b2QueryCallback.prototype.ShouldQueryParticleSystem = function(o) {
        return !0;
    }, goog.exportProperty(box2d.b2QueryCallback.prototype, "ShouldQueryParticleSystem", box2d.b2QueryCallback.prototype.ShouldQueryParticleSystem),
    box2d.b2RayCastCallback = function() {}, goog.exportSymbol("box2d.b2RayCastCallback", box2d.b2RayCastCallback),
    box2d.b2RayCastCallback.prototype.ReportFixture = function(o, t, e, r) {
        return r;
    }, goog.exportProperty(box2d.b2RayCastCallback.prototype, "ReportFixture", box2d.b2RayCastCallback.prototype.ReportFixture),
    box2d.b2RayCastCallback.prototype.ReportParticle = function(o, t, e, r, i) {
        return 0;
    }, goog.exportProperty(box2d.b2RayCastCallback.prototype, "ReportParticle", box2d.b2RayCastCallback.prototype.ReportParticle),
    box2d.b2RayCastCallback.prototype.ShouldQueryParticleSystem = function(o) {
        return !0;
    }, goog.exportProperty(box2d.b2RayCastCallback.prototype, "ShouldQueryParticleSystem", box2d.b2RayCastCallback.prototype.ShouldQueryParticleSystem),
    box2d.b2MixFriction = function(o, t) {
        return box2d.b2Sqrt(o * t);
    }, goog.exportSymbol("box2d.b2MixFriction", box2d.b2MixFriction), box2d.b2MixRestitution = function(o, t) {
        return o > t ? o : t;
    }, goog.exportSymbol("box2d.b2MixRestitution", box2d.b2MixRestitution), box2d.b2ContactEdge = function() {},
    goog.exportSymbol("box2d.b2ContactEdge", box2d.b2ContactEdge), box2d.b2ContactEdge.prototype.other = null,
    goog.exportProperty(box2d.b2ContactEdge.prototype, "other", box2d.b2ContactEdge.prototype.other),
    box2d.b2ContactEdge.prototype.contact = null, goog.exportProperty(box2d.b2ContactEdge.prototype, "contact", box2d.b2ContactEdge.prototype.contact),
    box2d.b2ContactEdge.prototype.prev = null, goog.exportProperty(box2d.b2ContactEdge.prototype, "prev", box2d.b2ContactEdge.prototype.prev),
    box2d.b2ContactEdge.prototype.next = null, goog.exportProperty(box2d.b2ContactEdge.prototype, "next", box2d.b2ContactEdge.prototype.next),
    box2d.b2Contact = function() {
        this.m_nodeA = new box2d.b2ContactEdge(), this.m_nodeB = new box2d.b2ContactEdge(),
            this.m_manifold = new box2d.b2Manifold(), this.m_oldManifold = new box2d.b2Manifold();
    }, goog.exportSymbol("box2d.b2Contact", box2d.b2Contact), box2d.b2Contact.prototype.m_flag_islandFlag = !1,
    goog.exportProperty(box2d.b2Contact.prototype, "m_flag_islandFlag", box2d.b2Contact.prototype.m_flag_islandFlag),
    box2d.b2Contact.prototype.m_flag_touchingFlag = !1, goog.exportProperty(box2d.b2Contact.prototype, "m_flag_touchingFlag", box2d.b2Contact.prototype.m_flag_touchingFlag),
    box2d.b2Contact.prototype.m_flag_enabledFlag = !1, goog.exportProperty(box2d.b2Contact.prototype, "m_flag_enabledFlag", box2d.b2Contact.prototype.m_flag_enabledFlag),
    box2d.b2Contact.prototype.m_flag_filterFlag = !1, goog.exportProperty(box2d.b2Contact.prototype, "m_flag_filterFlag", box2d.b2Contact.prototype.m_flag_filterFlag),
    box2d.b2Contact.prototype.m_flag_bulletHitFlag = !1, goog.exportProperty(box2d.b2Contact.prototype, "m_flag_bulletHitFlag", box2d.b2Contact.prototype.m_flag_bulletHitFlag),
    box2d.b2Contact.prototype.m_flag_toiFlag = !1, goog.exportProperty(box2d.b2Contact.prototype, "m_flag_toiFlag", box2d.b2Contact.prototype.m_flag_toiFlag),
    box2d.b2Contact.prototype.m_prev = null, goog.exportProperty(box2d.b2Contact.prototype, "m_prev", box2d.b2Contact.prototype.m_prev),
    box2d.b2Contact.prototype.m_next = null, goog.exportProperty(box2d.b2Contact.prototype, "m_next", box2d.b2Contact.prototype.m_next),
    box2d.b2Contact.prototype.m_nodeA = null, goog.exportProperty(box2d.b2Contact.prototype, "m_nodeA", box2d.b2Contact.prototype.m_nodeA),
    box2d.b2Contact.prototype.m_nodeB = null, goog.exportProperty(box2d.b2Contact.prototype, "m_nodeB", box2d.b2Contact.prototype.m_nodeB),
    box2d.b2Contact.prototype.m_fixtureA = null, goog.exportProperty(box2d.b2Contact.prototype, "m_fixtureA", box2d.b2Contact.prototype.m_fixtureA),
    box2d.b2Contact.prototype.m_fixtureB = null, goog.exportProperty(box2d.b2Contact.prototype, "m_fixtureB", box2d.b2Contact.prototype.m_fixtureB),
    box2d.b2Contact.prototype.m_indexA = 0, goog.exportProperty(box2d.b2Contact.prototype, "m_indexA", box2d.b2Contact.prototype.m_indexA),
    box2d.b2Contact.prototype.m_indexB = 0, goog.exportProperty(box2d.b2Contact.prototype, "m_indexB", box2d.b2Contact.prototype.m_indexB),
    box2d.b2Contact.prototype.m_manifold = null, goog.exportProperty(box2d.b2Contact.prototype, "m_manifold", box2d.b2Contact.prototype.m_manifold),
    box2d.b2Contact.prototype.m_toiCount = 0, goog.exportProperty(box2d.b2Contact.prototype, "m_toiCount", box2d.b2Contact.prototype.m_toiCount),
    box2d.b2Contact.prototype.m_toi = 0, goog.exportProperty(box2d.b2Contact.prototype, "m_toi", box2d.b2Contact.prototype.m_toi),
    box2d.b2Contact.prototype.m_friction = 0, goog.exportProperty(box2d.b2Contact.prototype, "m_friction", box2d.b2Contact.prototype.m_friction),
    box2d.b2Contact.prototype.m_restitution = 0, goog.exportProperty(box2d.b2Contact.prototype, "m_restitution", box2d.b2Contact.prototype.m_restitution),
    box2d.b2Contact.prototype.m_tangentSpeed = 0, goog.exportProperty(box2d.b2Contact.prototype, "m_tangentSpeed", box2d.b2Contact.prototype.m_tangentSpeed),
    box2d.b2Contact.prototype.m_oldManifold = null, goog.exportProperty(box2d.b2Contact.prototype, "m_oldManifold", box2d.b2Contact.prototype.m_oldManifold),
    box2d.b2Contact.prototype.GetManifold = function() {
        return this.m_manifold;
    }, goog.exportProperty(box2d.b2Contact.prototype, "GetManifold", box2d.b2Contact.prototype.GetManifold),
    box2d.b2Contact.prototype.GetWorldManifold = function(o) {
        var t = this.m_fixtureA.GetBody(),
            e = this.m_fixtureB.GetBody(),
            r = this.m_fixtureA.GetShape(),
            i = this.m_fixtureB.GetShape();
        o.Initialize(this.m_manifold, t.GetTransform(), r.m_radius, e.GetTransform(), i.m_radius);
    }, goog.exportProperty(box2d.b2Contact.prototype, "GetWorldManifold", box2d.b2Contact.prototype.GetWorldManifold),
    box2d.b2Contact.prototype.IsTouching = function() {
        return this.m_flag_touchingFlag;
    }, goog.exportProperty(box2d.b2Contact.prototype, "IsTouching", box2d.b2Contact.prototype.IsTouching),
    box2d.b2Contact.prototype.SetEnabled = function(o) {
        this.m_flag_enabledFlag = o;
    }, goog.exportProperty(box2d.b2Contact.prototype, "SetEnabled", box2d.b2Contact.prototype.SetEnabled),
    box2d.b2Contact.prototype.IsEnabled = function() {
        return this.m_flag_enabledFlag;
    }, goog.exportProperty(box2d.b2Contact.prototype, "IsEnabled", box2d.b2Contact.prototype.IsEnabled),
    box2d.b2Contact.prototype.GetNext = function() {
        return this.m_next;
    }, goog.exportProperty(box2d.b2Contact.prototype, "GetNext", box2d.b2Contact.prototype.GetNext),
    box2d.b2Contact.prototype.GetFixtureA = function() {
        return this.m_fixtureA;
    }, goog.exportProperty(box2d.b2Contact.prototype, "GetFixtureA", box2d.b2Contact.prototype.GetFixtureA),
    box2d.b2Contact.prototype.GetChildIndexA = function() {
        return this.m_indexA;
    }, goog.exportProperty(box2d.b2Contact.prototype, "GetChildIndexA", box2d.b2Contact.prototype.GetChildIndexA),
    box2d.b2Contact.prototype.GetFixtureB = function() {
        return this.m_fixtureB;
    }, goog.exportProperty(box2d.b2Contact.prototype, "GetFixtureB", box2d.b2Contact.prototype.GetFixtureB),
    box2d.b2Contact.prototype.GetChildIndexB = function() {
        return this.m_indexB;
    }, goog.exportProperty(box2d.b2Contact.prototype, "GetChildIndexB", box2d.b2Contact.prototype.GetChildIndexB),
    box2d.b2Contact.prototype.Evaluate = function(o, t, e) {}, goog.exportProperty(box2d.b2Contact.prototype, "Evaluate", box2d.b2Contact.prototype.Evaluate),
    box2d.b2Contact.prototype.FlagForFiltering = function() {
        this.m_flag_filterFlag = !0;
    }, goog.exportProperty(box2d.b2Contact.prototype, "FlagForFiltering", box2d.b2Contact.prototype.FlagForFiltering),
    box2d.b2Contact.prototype.SetFriction = function(o) {
        this.m_friction = o;
    }, goog.exportProperty(box2d.b2Contact.prototype, "SetFriction", box2d.b2Contact.prototype.SetFriction),
    box2d.b2Contact.prototype.GetFriction = function() {
        return this.m_friction;
    }, goog.exportProperty(box2d.b2Contact.prototype, "GetFriction", box2d.b2Contact.prototype.GetFriction),
    box2d.b2Contact.prototype.ResetFriction = function() {
        this.m_friction = box2d.b2MixFriction(this.m_fixtureA.m_friction, this.m_fixtureB.m_friction);
    }, goog.exportProperty(box2d.b2Contact.prototype, "ResetFriction", box2d.b2Contact.prototype.ResetFriction),
    box2d.b2Contact.prototype.SetRestitution = function(o) {
        this.m_restitution = o;
    }, goog.exportProperty(box2d.b2Contact.prototype, "SetRestitution", box2d.b2Contact.prototype.SetRestitution),
    box2d.b2Contact.prototype.GetRestitution = function() {
        return this.m_restitution;
    }, goog.exportProperty(box2d.b2Contact.prototype, "GetRestitution", box2d.b2Contact.prototype.GetRestitution),
    box2d.b2Contact.prototype.ResetRestitution = function() {
        this.m_restitution = box2d.b2MixRestitution(this.m_fixtureA.m_restitution, this.m_fixtureB.m_restitution);
    }, goog.exportProperty(box2d.b2Contact.prototype, "ResetRestitution", box2d.b2Contact.prototype.ResetRestitution),
    box2d.b2Contact.prototype.SetTangentSpeed = function(o) {
        this.m_tangentSpeed = o;
    }, goog.exportProperty(box2d.b2Contact.prototype, "SetTangentSpeed", box2d.b2Contact.prototype.SetTangentSpeed),
    box2d.b2Contact.prototype.GetTangentSpeed = function() {
        return this.m_tangentSpeed;
    }, goog.exportProperty(box2d.b2Contact.prototype, "GetTangentSpeed", box2d.b2Contact.prototype.GetTangentSpeed),
    box2d.b2Contact.prototype.Reset = function(o, t, e, r) {
        this.m_flag_touchingFlag = this.m_flag_islandFlag = !1, this.m_flag_enabledFlag = !0,
            this.m_flag_toiFlag = this.m_flag_bulletHitFlag = this.m_flag_filterFlag = !1, this.m_fixtureA = o,
            this.m_fixtureB = e, this.m_indexA = t, this.m_indexB = r, this.m_manifold.pointCount = 0,
            this.m_next = this.m_prev = null, this.m_nodeA.contact = null, this.m_nodeA.prev = null,
            this.m_nodeA.next = null, this.m_nodeA.other = null, this.m_nodeB.contact = null,
            this.m_nodeB.prev = null, this.m_nodeB.next = null, this.m_nodeB.other = null, this.m_toiCount = 0,
            this.m_friction = box2d.b2MixFriction(this.m_fixtureA.m_friction, this.m_fixtureB.m_friction),
            this.m_restitution = box2d.b2MixRestitution(this.m_fixtureA.m_restitution, this.m_fixtureB.m_restitution);
    }, goog.exportProperty(box2d.b2Contact.prototype, "Reset", box2d.b2Contact.prototype.Reset),
    box2d.b2Contact.prototype.Update = function(o) {
        var t = this.m_oldManifold;
        this.m_oldManifold = this.m_manifold, this.m_manifold = t, this.m_flag_enabledFlag = !0;
        var e = !1,
            r = (t = this.m_flag_touchingFlag, this.m_fixtureA.IsSensor()),
            i = this.m_fixtureB.IsSensor(),
            b = (r = r || i,
                i = this.m_fixtureA.GetBody(), this.m_fixtureB.GetBody()),
            n = (e = i.GetTransform(),
                b.GetTransform());
        if (r) i = this.m_fixtureA.GetShape(), b = this.m_fixtureB.GetShape(), e = box2d.b2TestOverlap_Shape(i, this.m_indexA, b, this.m_indexB, e, n),
            this.m_manifold.pointCount = 0;
        else {
            for (this.Evaluate(this.m_manifold, e, n), e = 0 < this.m_manifold.pointCount, n = 0; n < this.m_manifold.pointCount; ++n) {
                var p = this.m_manifold.points[n];
                p.normalImpulse = 0, p.tangentImpulse = 0;
                for (var s = p.id, a = 0; a < this.m_oldManifold.pointCount; ++a) {
                    var d = this.m_oldManifold.points[a];
                    if (d.id.key === s.key) {
                        p.normalImpulse = d.normalImpulse, p.tangentImpulse = d.tangentImpulse;
                        break;
                    }
                }
            }
            e !== t && (i.SetAwake(!0), b.SetAwake(!0));
        }
        this.m_flag_touchingFlag = e, !t && e && o && o.BeginContact(this), t && !e && o && o.EndContact(this), !r && e && o && o.PreSolve(this, this.m_oldManifold);
    }, goog.exportProperty(box2d.b2Contact.prototype, "Update", box2d.b2Contact.prototype.Update),
    box2d.b2Contact.prototype.ComputeTOI = function(o, t) {
        var e = box2d.b2Contact.prototype.ComputeTOI.s_input;
        e.proxyA.SetShape(this.m_fixtureA.GetShape(), this.m_indexA), e.proxyB.SetShape(this.m_fixtureB.GetShape(), this.m_indexB),
            e.sweepA.Copy(o), e.sweepB.Copy(t), e.tMax = box2d.b2_linearSlop;
        var r = box2d.b2Contact.prototype.ComputeTOI.s_output;
        return box2d.b2TimeOfImpact(r, e), r.t;
    }, goog.exportProperty(box2d.b2Contact.prototype, "ComputeTOI", box2d.b2Contact.prototype.ComputeTOI),
    box2d.b2Contact.prototype.ComputeTOI.s_input = new box2d.b2TOIInput(), box2d.b2Contact.prototype.ComputeTOI.s_output = new box2d.b2TOIOutput(),
    box2d.b2ChainAndCircleContact = function() {
        box2d.b2Contact.call(this);
    }, goog.inherits(box2d.b2ChainAndCircleContact, box2d.b2Contact), goog.exportSymbol("box2d.b2ChainAndCircleContact", box2d.b2ChainAndCircleContact),
    box2d.b2ChainAndCircleContact.Create = function(o) {
        return new box2d.b2ChainAndCircleContact();
    }, goog.exportProperty(box2d.b2ChainAndCircleContact, "Create", box2d.b2ChainAndCircleContact.Create),
    box2d.b2ChainAndCircleContact.Destroy = function(o, t) {}, goog.exportProperty(box2d.b2ChainAndCircleContact, "Destroy", box2d.b2ChainAndCircleContact.Destroy),
    box2d.b2ChainAndCircleContact.prototype.Evaluate = function(o, t, e) {
        var r = this.m_fixtureA.GetShape(),
            i = this.m_fixtureB.GetShape();
        box2d.ENABLE_ASSERTS && box2d.b2Assert(r instanceof box2d.b2ChainShape), box2d.ENABLE_ASSERTS && box2d.b2Assert(i instanceof box2d.b2CircleShape);
        var b = box2d.b2ChainAndCircleContact.prototype.Evaluate.s_edge;
        (r instanceof box2d.b2ChainShape ? r : null).GetChildEdge(b, this.m_indexA), box2d.b2CollideEdgeAndCircle(o, b, t, i instanceof box2d.b2CircleShape ? i : null, e);
    }, goog.exportProperty(box2d.b2ChainAndCircleContact.prototype, "Evaluate", box2d.b2ChainAndCircleContact.prototype.Evaluate),
    box2d.b2ChainAndCircleContact.prototype.Evaluate.s_edge = new box2d.b2EdgeShape(),
    box2d.b2ChainAndPolygonContact = function() {
        box2d.b2Contact.call(this);
    }, goog.inherits(box2d.b2ChainAndPolygonContact, box2d.b2Contact), goog.exportSymbol("box2d.b2ChainAndPolygonContact", box2d.b2ChainAndPolygonContact),
    box2d.b2ChainAndPolygonContact.Create = function(o) {
        return new box2d.b2ChainAndPolygonContact();
    }, goog.exportProperty(box2d.b2ChainAndPolygonContact, "Create", box2d.b2ChainAndPolygonContact.Create),
    box2d.b2ChainAndPolygonContact.Destroy = function(o, t) {}, goog.exportProperty(box2d.b2ChainAndPolygonContact, "Destroy", box2d.b2ChainAndPolygonContact.Destroy),
    box2d.b2ChainAndPolygonContact.prototype.Evaluate = function(o, t, e) {
        var r = this.m_fixtureA.GetShape(),
            i = this.m_fixtureB.GetShape();
        box2d.ENABLE_ASSERTS && box2d.b2Assert(r instanceof box2d.b2ChainShape), box2d.ENABLE_ASSERTS && box2d.b2Assert(i instanceof box2d.b2PolygonShape);
        var b = box2d.b2ChainAndPolygonContact.prototype.Evaluate.s_edge;
        (r instanceof box2d.b2ChainShape ? r : null).GetChildEdge(b, this.m_indexA), box2d.b2CollideEdgeAndPolygon(o, b, t, i instanceof box2d.b2PolygonShape ? i : null, e);
    }, goog.exportProperty(box2d.b2ChainAndPolygonContact.prototype, "Evaluate", box2d.b2ChainAndPolygonContact.prototype.Evaluate),
    box2d.b2ChainAndPolygonContact.prototype.Evaluate.s_edge = new box2d.b2EdgeShape(),
    box2d.b2CircleContact = function() {
        box2d.b2Contact.call(this);
    }, goog.inherits(box2d.b2CircleContact, box2d.b2Contact), goog.exportSymbol("box2d.b2CircleContact", box2d.b2CircleContact),
    box2d.b2CircleContact.Create = function(o) {
        return new box2d.b2CircleContact();
    }, goog.exportProperty(box2d.b2CircleContact, "Create", box2d.b2CircleContact.Create),
    box2d.b2CircleContact.Destroy = function(o, t) {}, goog.exportProperty(box2d.b2CircleContact, "Destroy", box2d.b2CircleContact.Destroy),
    box2d.b2CircleContact.prototype.Evaluate = function(o, t, e) {
        var r = this.m_fixtureA.GetShape(),
            i = this.m_fixtureB.GetShape();
        box2d.ENABLE_ASSERTS && box2d.b2Assert(r instanceof box2d.b2CircleShape), box2d.ENABLE_ASSERTS && box2d.b2Assert(i instanceof box2d.b2CircleShape),
            box2d.b2CollideCircles(o, r instanceof box2d.b2CircleShape ? r : null, t, i instanceof box2d.b2CircleShape ? i : null, e);
    }, goog.exportProperty(box2d.b2CircleContact.prototype, "Evaluate", box2d.b2CircleContact.prototype.Evaluate),
    box2d.b2ContactRegister = function() {}, goog.exportSymbol("box2d.b2ContactRegister", box2d.b2ContactRegister),
    box2d.b2ContactRegister.prototype.createFcn = null, box2d.b2ContactRegister.prototype.destroyFcn = null,
    box2d.b2ContactRegister.prototype.primary = !1, box2d.b2ContactFactory = function(o) {
        this.m_allocator = o, this.InitializeRegisters();
    }, goog.exportSymbol("box2d.b2ContactFactory", box2d.b2ContactFactory), box2d.b2ContactFactory.prototype.m_allocator = null,
    box2d.b2ContactFactory.prototype.AddType = function(o, t, e, r) {
        var i = box2d.b2MakeArray(256, function(t) {
            return o();
        });
        t = function(t) {
            return 0 < i.length ? i.pop() : o(t);
        };
        var b = function(o, t) {
            i.push(o);
        };
        this.m_registers[e][r].pool = i, this.m_registers[e][r].createFcn = t, this.m_registers[e][r].destroyFcn = b,
            this.m_registers[e][r].primary = !0, e !== r && (this.m_registers[r][e].pool = i,
                this.m_registers[r][e].createFcn = t, this.m_registers[r][e].destroyFcn = b, this.m_registers[r][e].primary = !1);
    }, goog.exportProperty(box2d.b2ContactFactory.prototype, "AddType", box2d.b2ContactFactory.prototype.AddType),
    box2d.b2ContactFactory.prototype.InitializeRegisters = function() {
        this.m_registers = Array(box2d.b2ShapeType.e_shapeTypeCount);
        for (var o = 0; o < box2d.b2ShapeType.e_shapeTypeCount; o++) {
            this.m_registers[o] = Array(box2d.b2ShapeType.e_shapeTypeCount);
            for (var t = 0; t < box2d.b2ShapeType.e_shapeTypeCount; t++) this.m_registers[o][t] = new box2d.b2ContactRegister();
        }
        this.AddType(box2d.b2CircleContact.Create, box2d.b2CircleContact.Destroy, box2d.b2ShapeType.e_circleShape, box2d.b2ShapeType.e_circleShape),
            this.AddType(box2d.b2PolygonAndCircleContact.Create, box2d.b2PolygonAndCircleContact.Destroy, box2d.b2ShapeType.e_polygonShape, box2d.b2ShapeType.e_circleShape),
            this.AddType(box2d.b2PolygonContact.Create, box2d.b2PolygonContact.Destroy, box2d.b2ShapeType.e_polygonShape, box2d.b2ShapeType.e_polygonShape),
            this.AddType(box2d.b2EdgeAndCircleContact.Create, box2d.b2EdgeAndCircleContact.Destroy, box2d.b2ShapeType.e_edgeShape, box2d.b2ShapeType.e_circleShape),
            this.AddType(box2d.b2EdgeAndPolygonContact.Create, box2d.b2EdgeAndPolygonContact.Destroy, box2d.b2ShapeType.e_edgeShape, box2d.b2ShapeType.e_polygonShape),
            this.AddType(box2d.b2ChainAndCircleContact.Create, box2d.b2ChainAndCircleContact.Destroy, box2d.b2ShapeType.e_chainShape, box2d.b2ShapeType.e_circleShape),
            this.AddType(box2d.b2ChainAndPolygonContact.Create, box2d.b2ChainAndPolygonContact.Destroy, box2d.b2ShapeType.e_chainShape, box2d.b2ShapeType.e_polygonShape);
    }, goog.exportProperty(box2d.b2ContactFactory.prototype, "InitializeRegisters", box2d.b2ContactFactory.prototype.InitializeRegisters),
    box2d.b2ContactFactory.prototype.Create = function(o, t, e, r) {
        var i = o.GetType(),
            b = e.GetType();
        return box2d.ENABLE_ASSERTS && box2d.b2Assert(0 <= i && i < box2d.b2ShapeType.e_shapeTypeCount),
            box2d.ENABLE_ASSERTS && box2d.b2Assert(0 <= b && b < box2d.b2ShapeType.e_shapeTypeCount),
            null !== (b = (i = this.m_registers[i][b]).createFcn) ? (i.primary ? (i = b(this.m_allocator)).Reset(o, t, e, r) : (i = b(this.m_allocator)).Reset(e, r, o, t),
                i) : null;
    }, goog.exportProperty(box2d.b2ContactFactory.prototype, "Create", box2d.b2ContactFactory.prototype.Create),
    box2d.b2ContactFactory.prototype.Destroy = function(o) {
        var t = o.m_fixtureA,
            e = o.m_fixtureB;
        0 < o.m_manifold.pointCount && !t.IsSensor() && !e.IsSensor() && (t.GetBody().SetAwake(!0),
                e.GetBody().SetAwake(!0)), t = t.GetType(), e = e.GetType(), box2d.ENABLE_ASSERTS && box2d.b2Assert(0 <= t && e < box2d.b2ShapeType.e_shapeTypeCount),
            box2d.ENABLE_ASSERTS && box2d.b2Assert(0 <= t && e < box2d.b2ShapeType.e_shapeTypeCount),
            (e = this.m_registers[t][e].destroyFcn)(o, this.m_allocator);
    }, goog.exportProperty(box2d.b2ContactFactory.prototype, "Destroy", box2d.b2ContactFactory.prototype.Destroy),
    box2d.b2ContactManager = function() {
        this.m_broadPhase = new box2d.b2BroadPhase(), this.m_contactFactory = new box2d.b2ContactFactory(this.m_allocator);
    }, box2d.b2ContactManager.prototype.m_broadPhase = null, goog.exportProperty(box2d.b2ContactManager.prototype, "m_broadPhase", box2d.b2ContactManager.prototype.m_broadPhase),
    box2d.b2ContactManager.prototype.m_contactList = null, goog.exportProperty(box2d.b2ContactManager.prototype, "m_contactList", box2d.b2ContactManager.prototype.m_contactList),
    box2d.b2ContactManager.prototype.m_contactCount = 0, goog.exportProperty(box2d.b2ContactManager.prototype, "m_contactCount", box2d.b2ContactManager.prototype.m_contactCount),
    box2d.b2ContactManager.prototype.m_contactFilter = box2d.b2ContactFilter.b2_defaultFilter,
    goog.exportProperty(box2d.b2ContactManager.prototype, "m_contactFilter", box2d.b2ContactManager.prototype.m_contactFilter),
    box2d.b2ContactManager.prototype.m_contactListener = box2d.b2ContactListener.b2_defaultListener,
    goog.exportProperty(box2d.b2ContactManager.prototype, "m_contactListener", box2d.b2ContactManager.prototype.m_contactListener),
    box2d.b2ContactManager.prototype.m_allocator = null, goog.exportProperty(box2d.b2ContactManager.prototype, "m_allocator", box2d.b2ContactManager.prototype.m_allocator),
    box2d.b2ContactManager.prototype.m_contactFactory = null, goog.exportProperty(box2d.b2ContactManager.prototype, "m_contactFactory", box2d.b2ContactManager.prototype.m_contactFactory),
    box2d.b2ContactManager.prototype.Destroy = function(o) {
        var t = o.GetFixtureA(),
            e = o.GetFixtureB();
        t = t.GetBody(), e = e.GetBody();
        this.m_contactListener && o.IsTouching() && this.m_contactListener.EndContact(o),
            o.m_prev && (o.m_prev.m_next = o.m_next), o.m_next && (o.m_next.m_prev = o.m_prev),
            o === this.m_contactList && (this.m_contactList = o.m_next), o.m_nodeA.prev && (o.m_nodeA.prev.next = o.m_nodeA.next),
            o.m_nodeA.next && (o.m_nodeA.next.prev = o.m_nodeA.prev), o.m_nodeA === t.m_contactList && (t.m_contactList = o.m_nodeA.next),
            o.m_nodeB.prev && (o.m_nodeB.prev.next = o.m_nodeB.next), o.m_nodeB.next && (o.m_nodeB.next.prev = o.m_nodeB.prev),
            o.m_nodeB === e.m_contactList && (e.m_contactList = o.m_nodeB.next), this.m_contactFactory.Destroy(o),
            --this.m_contactCount;
    }, goog.exportProperty(box2d.b2ContactManager.prototype, "Destroy", box2d.b2ContactManager.prototype.Destroy),
    box2d.b2ContactManager.prototype.Collide = function() {
        for (var o = this.m_contactList; o;) {
            var t = o.GetFixtureA(),
                e = o.GetFixtureB(),
                r = o.GetChildIndexA(),
                i = o.GetChildIndexB(),
                b = t.GetBody(),
                n = e.GetBody();
            if (o.m_flag_filterFlag) {
                if (!n.ShouldCollide(b)) {
                    o = (t = o).m_next, this.Destroy(t);
                    continue;
                }
                if (this.m_contactFilter && !this.m_contactFilter.ShouldCollide(t, e)) {
                    o = (t = o).m_next, this.Destroy(t);
                    continue;
                }
                o.m_flag_filterFlag = !1;
            }
            b = b.IsAwake() && b.m_type !== box2d.b2BodyType.b2_staticBody, n = n.IsAwake() && n.m_type !== box2d.b2BodyType.b2_staticBody,
                b || n ? this.m_broadPhase.TestOverlap(t.m_proxies[r].proxy, e.m_proxies[i].proxy) ? (o.Update(this.m_contactListener),
                    o = o.m_next) : (o = (t = o).m_next, this.Destroy(t)) : o = o.m_next;
        }
    }, goog.exportProperty(box2d.b2ContactManager.prototype, "Collide", box2d.b2ContactManager.prototype.Collide),
    box2d.b2ContactManager.prototype.FindNewContacts = function() {
        this.m_broadPhase.UpdatePairs(this);
    }, goog.exportProperty(box2d.b2ContactManager.prototype, "FindNewContacts", box2d.b2ContactManager.prototype.FindNewContacts),
    box2d.b2ContactManager.prototype.AddPair = function(o, t) {
        box2d.ENABLE_ASSERTS && box2d.b2Assert(o instanceof box2d.b2FixtureProxy), box2d.ENABLE_ASSERTS && box2d.b2Assert(t instanceof box2d.b2FixtureProxy);
        var e = o.fixture,
            r = t.fixture,
            i = o.childIndex,
            b = t.childIndex,
            n = e.GetBody(),
            p = r.GetBody();
        if (n !== p) {
            for (var s = p.GetContactList(); s;) {
                if (s.other === n) {
                    var a = s.contact.GetFixtureA(),
                        d = s.contact.GetFixtureB(),
                        l = s.contact.GetChildIndexA(),
                        x = s.contact.GetChildIndexB();
                    if (a === e && d === r && l === i && x === b || a === r && d === e && l === b && x === i) return;
                }
                s = s.next;
            }!p.ShouldCollide(n) || this.m_contactFilter && !this.m_contactFilter.ShouldCollide(e, r) || null !== (i = this.m_contactFactory.Create(e, i, r, b)) && (e = i.GetFixtureA(),
                r = i.GetFixtureB(), n = e.m_body, p = r.m_body, i.m_prev = null, i.m_next = this.m_contactList,
                null !== this.m_contactList && (this.m_contactList.m_prev = i), this.m_contactList = i,
                i.m_nodeA.contact = i, i.m_nodeA.other = p, i.m_nodeA.prev = null, i.m_nodeA.next = n.m_contactList,
                null !== n.m_contactList && (n.m_contactList.prev = i.m_nodeA), n.m_contactList = i.m_nodeA,
                i.m_nodeB.contact = i, i.m_nodeB.other = n, i.m_nodeB.prev = null, i.m_nodeB.next = p.m_contactList,
                null !== p.m_contactList && (p.m_contactList.prev = i.m_nodeB), p.m_contactList = i.m_nodeB,
                e.IsSensor() || r.IsSensor() || (n.SetAwake(!0), p.SetAwake(!0)), ++this.m_contactCount);
        }
    }, goog.exportProperty(box2d.b2ContactManager.prototype, "AddPair", box2d.b2ContactManager.prototype.AddPair),
    box2d.b2EdgeAndCircleContact = function() {
        box2d.b2Contact.call(this);
    }, goog.inherits(box2d.b2EdgeAndCircleContact, box2d.b2Contact), goog.exportSymbol("box2d.b2EdgeAndCircleContact", box2d.b2EdgeAndCircleContact),
    box2d.b2EdgeAndCircleContact.Create = function(o) {
        return new box2d.b2EdgeAndCircleContact();
    }, goog.exportProperty(box2d.b2EdgeAndCircleContact, "Create", box2d.b2EdgeAndCircleContact.Create),
    box2d.b2EdgeAndCircleContact.Destroy = function(o, t) {}, goog.exportProperty(box2d.b2EdgeAndCircleContact, "Destroy", box2d.b2EdgeAndCircleContact.Destroy),
    box2d.b2EdgeAndCircleContact.prototype.Evaluate = function(o, t, e) {
        var r = this.m_fixtureA.GetShape(),
            i = this.m_fixtureB.GetShape();
        box2d.ENABLE_ASSERTS && box2d.b2Assert(r instanceof box2d.b2EdgeShape), box2d.ENABLE_ASSERTS && box2d.b2Assert(i instanceof box2d.b2CircleShape),
            box2d.b2CollideEdgeAndCircle(o, r instanceof box2d.b2EdgeShape ? r : null, t, i instanceof box2d.b2CircleShape ? i : null, e);
    }, goog.exportProperty(box2d.b2EdgeAndCircleContact.prototype, "Evaluate", box2d.b2EdgeAndCircleContact.prototype.Evaluate),
    box2d.b2EdgeAndPolygonContact = function() {
        box2d.b2Contact.call(this);
    }, goog.inherits(box2d.b2EdgeAndPolygonContact, box2d.b2Contact), goog.exportSymbol("box2d.b2EdgeAndPolygonContact", box2d.b2EdgeAndPolygonContact),
    box2d.b2EdgeAndPolygonContact.Create = function(o) {
        return new box2d.b2EdgeAndPolygonContact();
    }, goog.exportProperty(box2d.b2EdgeAndPolygonContact, "Create", box2d.b2EdgeAndPolygonContact.Create),
    box2d.b2EdgeAndPolygonContact.Destroy = function(o, t) {}, goog.exportProperty(box2d.b2EdgeAndPolygonContact, "Destroy", box2d.b2EdgeAndPolygonContact.Destroy),
    box2d.b2EdgeAndPolygonContact.prototype.Evaluate = function(o, t, e) {
        var r = this.m_fixtureA.GetShape(),
            i = this.m_fixtureB.GetShape();
        box2d.ENABLE_ASSERTS && box2d.b2Assert(r instanceof box2d.b2EdgeShape), box2d.ENABLE_ASSERTS && box2d.b2Assert(i instanceof box2d.b2PolygonShape),
            box2d.b2CollideEdgeAndPolygon(o, r instanceof box2d.b2EdgeShape ? r : null, t, i instanceof box2d.b2PolygonShape ? i : null, e);
    }, goog.exportProperty(box2d.b2EdgeAndPolygonContact.prototype, "Evaluate", box2d.b2EdgeAndPolygonContact.prototype.Evaluate),
    box2d.b2PolygonAndCircleContact = function() {
        box2d.b2Contact.call(this);
    }, goog.inherits(box2d.b2PolygonAndCircleContact, box2d.b2Contact), goog.exportSymbol("box2d.b2PolygonAndCircleContact", box2d.b2PolygonAndCircleContact),
    box2d.b2PolygonAndCircleContact.Create = function(o) {
        return new box2d.b2PolygonAndCircleContact();
    }, goog.exportProperty(box2d.b2PolygonAndCircleContact, "Create", box2d.b2PolygonAndCircleContact.Create),
    box2d.b2PolygonAndCircleContact.Destroy = function(o, t) {}, goog.exportProperty(box2d.b2PolygonAndCircleContact, "Destroy", box2d.b2PolygonAndCircleContact.Destroy),
    box2d.b2PolygonAndCircleContact.prototype.Evaluate = function(o, t, e) {
        var r = this.m_fixtureA.GetShape(),
            i = this.m_fixtureB.GetShape();
        box2d.ENABLE_ASSERTS && box2d.b2Assert(r instanceof box2d.b2PolygonShape), box2d.ENABLE_ASSERTS && box2d.b2Assert(i instanceof box2d.b2CircleShape),
            box2d.b2CollidePolygonAndCircle(o, r instanceof box2d.b2PolygonShape ? r : null, t, i instanceof box2d.b2CircleShape ? i : null, e);
    }, goog.exportProperty(box2d.b2PolygonAndCircleContact.prototype, "Evaluate", box2d.b2PolygonAndCircleContact.prototype.Evaluate),
    box2d.b2PolygonContact = function() {
        box2d.b2Contact.call(this);
    }, goog.inherits(box2d.b2PolygonContact, box2d.b2Contact), goog.exportSymbol("box2d.b2PolygonContact", box2d.b2PolygonContact),
    box2d.b2PolygonContact.Create = function(o) {
        return new box2d.b2PolygonContact();
    }, goog.exportProperty(box2d.b2PolygonContact, "Create", box2d.b2PolygonContact.Create),
    box2d.b2PolygonContact.Destroy = function(o, t) {}, goog.exportProperty(box2d.b2PolygonContact, "Destroy", box2d.b2PolygonContact.Destroy),
    box2d.b2PolygonContact.prototype.Evaluate = function(o, t, e) {
        var r = this.m_fixtureA.GetShape(),
            i = this.m_fixtureB.GetShape();
        box2d.ENABLE_ASSERTS && box2d.b2Assert(r instanceof box2d.b2PolygonShape), box2d.ENABLE_ASSERTS && box2d.b2Assert(i instanceof box2d.b2PolygonShape),
            box2d.b2CollidePolygons(o, r instanceof box2d.b2PolygonShape ? r : null, t, i instanceof box2d.b2PolygonShape ? i : null, e);
    }, goog.exportProperty(box2d.b2PolygonContact.prototype, "Evaluate", box2d.b2PolygonContact.prototype.Evaluate),
    box2d.g_blockSolve = !0, box2d.b2VelocityConstraintPoint = function() {
        this.rA = new box2d.b2Vec2(), this.rB = new box2d.b2Vec2();
    }, goog.exportSymbol("box2d.b2VelocityConstraintPoint", box2d.b2VelocityConstraintPoint),
    box2d.b2VelocityConstraintPoint.prototype.rA = null, goog.exportProperty(box2d.b2VelocityConstraintPoint.prototype, "rA", box2d.b2VelocityConstraintPoint.prototype.rA),
    box2d.b2VelocityConstraintPoint.prototype.rB = null, goog.exportProperty(box2d.b2VelocityConstraintPoint.prototype, "rB", box2d.b2VelocityConstraintPoint.prototype.rB),
    box2d.b2VelocityConstraintPoint.prototype.normalImpulse = 0, goog.exportProperty(box2d.b2VelocityConstraintPoint.prototype, "normalImpulse", box2d.b2VelocityConstraintPoint.prototype.normalImpulse),
    box2d.b2VelocityConstraintPoint.prototype.tangentImpulse = 0, goog.exportProperty(box2d.b2VelocityConstraintPoint.prototype, "tangentImpulse", box2d.b2VelocityConstraintPoint.prototype.tangentImpulse),
    box2d.b2VelocityConstraintPoint.prototype.normalMass = 0, goog.exportProperty(box2d.b2VelocityConstraintPoint.prototype, "normalMass", box2d.b2VelocityConstraintPoint.prototype.normalMass),
    box2d.b2VelocityConstraintPoint.prototype.tangentMass = 0, goog.exportProperty(box2d.b2VelocityConstraintPoint.prototype, "tangentMass", box2d.b2VelocityConstraintPoint.prototype.tangentMass),
    box2d.b2VelocityConstraintPoint.prototype.velocityBias = 0, goog.exportProperty(box2d.b2VelocityConstraintPoint.prototype, "velocityBias", box2d.b2VelocityConstraintPoint.prototype.velocityBias),
    box2d.b2VelocityConstraintPoint.MakeArray = function(o) {
        return box2d.b2MakeArray(o, function(o) {
            return new box2d.b2VelocityConstraintPoint();
        });
    }, goog.exportProperty(box2d.b2VelocityConstraintPoint, "MakeArray", box2d.b2VelocityConstraintPoint.MakeArray),
    box2d.b2ContactVelocityConstraint = function() {
        this.points = box2d.b2VelocityConstraintPoint.MakeArray(box2d.b2_maxManifoldPoints),
            this.normal = new box2d.b2Vec2(), this.tangent = new box2d.b2Vec2(), this.normalMass = new box2d.b2Mat22(),
            this.K = new box2d.b2Mat22();
    }, goog.exportSymbol("box2d.b2ContactVelocityConstraint", box2d.b2ContactVelocityConstraint),
    box2d.b2ContactVelocityConstraint.prototype.points = null, goog.exportProperty(box2d.b2ContactVelocityConstraint.prototype, "points", box2d.b2ContactVelocityConstraint.prototype.points),
    box2d.b2ContactVelocityConstraint.prototype.normal = null, goog.exportProperty(box2d.b2ContactVelocityConstraint.prototype, "normal", box2d.b2ContactVelocityConstraint.prototype.normal),
    box2d.b2ContactVelocityConstraint.prototype.tangent = null, goog.exportProperty(box2d.b2ContactVelocityConstraint.prototype, "tangent", box2d.b2ContactVelocityConstraint.prototype.tangent),
    box2d.b2ContactVelocityConstraint.prototype.normalMass = null, goog.exportProperty(box2d.b2ContactVelocityConstraint.prototype, "normalMass", box2d.b2ContactVelocityConstraint.prototype.normalMass),
    box2d.b2ContactVelocityConstraint.prototype.K = null, goog.exportProperty(box2d.b2ContactVelocityConstraint.prototype, "K", box2d.b2ContactVelocityConstraint.prototype.K),
    box2d.b2ContactVelocityConstraint.prototype.indexA = 0, goog.exportProperty(box2d.b2ContactVelocityConstraint.prototype, "indexA", box2d.b2ContactVelocityConstraint.prototype.indexA),
    box2d.b2ContactVelocityConstraint.prototype.indexB = 0, goog.exportProperty(box2d.b2ContactVelocityConstraint.prototype, "indexB", box2d.b2ContactVelocityConstraint.prototype.indexB),
    box2d.b2ContactVelocityConstraint.prototype.invMassA = 0, goog.exportProperty(box2d.b2ContactVelocityConstraint.prototype, "invMassA", box2d.b2ContactVelocityConstraint.prototype.invMassA),
    box2d.b2ContactVelocityConstraint.prototype.invMassB = 0, goog.exportProperty(box2d.b2ContactVelocityConstraint.prototype, "invMassB", box2d.b2ContactVelocityConstraint.prototype.invMassB),
    box2d.b2ContactVelocityConstraint.prototype.invIA = 0, goog.exportProperty(box2d.b2ContactVelocityConstraint.prototype, "invIA", box2d.b2ContactVelocityConstraint.prototype.invIA),
    box2d.b2ContactVelocityConstraint.prototype.invIB = 0, goog.exportProperty(box2d.b2ContactVelocityConstraint.prototype, "invIB", box2d.b2ContactVelocityConstraint.prototype.invIB),
    box2d.b2ContactVelocityConstraint.prototype.friction = 0, goog.exportProperty(box2d.b2ContactVelocityConstraint.prototype, "friction", box2d.b2ContactVelocityConstraint.prototype.friction),
    box2d.b2ContactVelocityConstraint.prototype.restitution = 0, goog.exportProperty(box2d.b2ContactVelocityConstraint.prototype, "restitution", box2d.b2ContactVelocityConstraint.prototype.restitution),
    box2d.b2ContactVelocityConstraint.prototype.tangentSpeed = 0, goog.exportProperty(box2d.b2ContactVelocityConstraint.prototype, "tangentSpeed", box2d.b2ContactVelocityConstraint.prototype.tangentSpeed),
    box2d.b2ContactVelocityConstraint.prototype.pointCount = 0, goog.exportProperty(box2d.b2ContactVelocityConstraint.prototype, "pointCount", box2d.b2ContactVelocityConstraint.prototype.pointCount),
    box2d.b2ContactVelocityConstraint.prototype.contactIndex = 0, goog.exportProperty(box2d.b2ContactVelocityConstraint.prototype, "contactIndex", box2d.b2ContactVelocityConstraint.prototype.contactIndex),
    box2d.b2ContactVelocityConstraint.MakeArray = function(o) {
        return box2d.b2MakeArray(o, function(o) {
            return new box2d.b2ContactVelocityConstraint();
        });
    }, goog.exportProperty(box2d.b2ContactVelocityConstraint, "MakeArray", box2d.b2ContactVelocityConstraint.MakeArray),
    box2d.b2ContactPositionConstraint = function() {
        this.localPoints = box2d.b2Vec2.MakeArray(box2d.b2_maxManifoldPoints), this.localNormal = new box2d.b2Vec2(),
            this.localPoint = new box2d.b2Vec2(), this.localCenterA = new box2d.b2Vec2(), this.localCenterB = new box2d.b2Vec2();
    }, goog.exportSymbol("box2d.b2ContactPositionConstraint", box2d.b2ContactPositionConstraint),
    box2d.b2ContactPositionConstraint.prototype.localPoints = null, goog.exportProperty(box2d.b2ContactPositionConstraint.prototype, "localPoints", box2d.b2ContactPositionConstraint.prototype.localPoints),
    box2d.b2ContactPositionConstraint.prototype.localNormal = null, goog.exportProperty(box2d.b2ContactPositionConstraint.prototype, "localNormal", box2d.b2ContactPositionConstraint.prototype.localNormal),
    box2d.b2ContactPositionConstraint.prototype.localPoint = null, goog.exportProperty(box2d.b2ContactPositionConstraint.prototype, "localPoint", box2d.b2ContactPositionConstraint.prototype.localPoint),
    box2d.b2ContactPositionConstraint.prototype.indexA = 0, goog.exportProperty(box2d.b2ContactPositionConstraint.prototype, "indexA", box2d.b2ContactPositionConstraint.prototype.indexA),
    box2d.b2ContactPositionConstraint.prototype.indexB = 0, goog.exportProperty(box2d.b2ContactPositionConstraint.prototype, "indexB", box2d.b2ContactPositionConstraint.prototype.indexB),
    box2d.b2ContactPositionConstraint.prototype.invMassA = 0, goog.exportProperty(box2d.b2ContactPositionConstraint.prototype, "invMassA", box2d.b2ContactPositionConstraint.prototype.invMassA),
    box2d.b2ContactPositionConstraint.prototype.invMassB = 0, goog.exportProperty(box2d.b2ContactPositionConstraint.prototype, "invMassB", box2d.b2ContactPositionConstraint.prototype.invMassB),
    box2d.b2ContactPositionConstraint.prototype.localCenterA = null, goog.exportProperty(box2d.b2ContactPositionConstraint.prototype, "localCenterA", box2d.b2ContactPositionConstraint.prototype.localCenterA),
    box2d.b2ContactPositionConstraint.prototype.localCenterB = null, goog.exportProperty(box2d.b2ContactPositionConstraint.prototype, "localCenterB", box2d.b2ContactPositionConstraint.prototype.localCenterB),
    box2d.b2ContactPositionConstraint.prototype.invIA = 0, goog.exportProperty(box2d.b2ContactPositionConstraint.prototype, "invIA", box2d.b2ContactPositionConstraint.prototype.invIA),
    box2d.b2ContactPositionConstraint.prototype.invIB = 0, goog.exportProperty(box2d.b2ContactPositionConstraint.prototype, "invIB", box2d.b2ContactPositionConstraint.prototype.invIB),
    box2d.b2ContactPositionConstraint.prototype.type = box2d.b2ManifoldType.e_unknown,
    goog.exportProperty(box2d.b2ContactPositionConstraint.prototype, "type", box2d.b2ContactPositionConstraint.prototype.type),
    box2d.b2ContactPositionConstraint.prototype.radiusA = 0, goog.exportProperty(box2d.b2ContactPositionConstraint.prototype, "radiusA", box2d.b2ContactPositionConstraint.prototype.radiusA),
    box2d.b2ContactPositionConstraint.prototype.radiusB = 0, goog.exportProperty(box2d.b2ContactPositionConstraint.prototype, "radiusB", box2d.b2ContactPositionConstraint.prototype.radiusB),
    box2d.b2ContactPositionConstraint.prototype.pointCount = 0, goog.exportProperty(box2d.b2ContactPositionConstraint.prototype, "pointCount", box2d.b2ContactPositionConstraint.prototype.pointCount),
    box2d.b2ContactPositionConstraint.MakeArray = function(o) {
        return box2d.b2MakeArray(o, function(o) {
            return new box2d.b2ContactPositionConstraint();
        });
    }, goog.exportProperty(box2d.b2ContactPositionConstraint, "MakeArray", box2d.b2ContactPositionConstraint.MakeArray),
    box2d.b2ContactSolverDef = function() {
        this.step = new box2d.b2TimeStep();
    }, goog.exportSymbol("box2d.b2ContactSolverDef", box2d.b2ContactSolverDef), box2d.b2ContactSolverDef.prototype.step = null,
    goog.exportProperty(box2d.b2ContactSolverDef.prototype, "step", box2d.b2ContactSolverDef.prototype.step),
    box2d.b2ContactSolverDef.prototype.contacts = null, goog.exportProperty(box2d.b2ContactSolverDef.prototype, "contacts", box2d.b2ContactSolverDef.prototype.contacts),
    box2d.b2ContactSolverDef.prototype.count = 0, goog.exportProperty(box2d.b2ContactSolverDef.prototype, "count", box2d.b2ContactSolverDef.prototype.count),
    box2d.b2ContactSolverDef.prototype.positions = null, goog.exportProperty(box2d.b2ContactSolverDef.prototype, "positions", box2d.b2ContactSolverDef.prototype.positions),
    box2d.b2ContactSolverDef.prototype.velocities = null, goog.exportProperty(box2d.b2ContactSolverDef.prototype, "velocities", box2d.b2ContactSolverDef.prototype.velocities),
    box2d.b2ContactSolverDef.prototype.allocator = null, goog.exportProperty(box2d.b2ContactSolverDef.prototype, "allocator", box2d.b2ContactSolverDef.prototype.allocator);

box2d.b2ContactSolver = function() {
        this.m_step = new box2d.b2TimeStep(), this.m_positionConstraints = box2d.b2ContactPositionConstraint.MakeArray(1024),
            this.m_velocityConstraints = box2d.b2ContactVelocityConstraint.MakeArray(1024);
    }, goog.exportSymbol("box2d.b2ContactSolver", box2d.b2ContactSolver), box2d.b2ContactSolver.prototype.m_step = null,
    goog.exportProperty(box2d.b2ContactSolver.prototype, "m_step", box2d.b2ContactSolver.prototype.m_step),
    box2d.b2ContactSolver.prototype.m_positions = null, goog.exportProperty(box2d.b2ContactSolver.prototype, "m_positions", box2d.b2ContactSolver.prototype.m_positions),
    box2d.b2ContactSolver.prototype.m_velocities = null, goog.exportProperty(box2d.b2ContactSolver.prototype, "m_velocities", box2d.b2ContactSolver.prototype.m_velocities),
    box2d.b2ContactSolver.prototype.m_allocator = null, goog.exportProperty(box2d.b2ContactSolver.prototype, "m_allocator", box2d.b2ContactSolver.prototype.m_allocator),
    box2d.b2ContactSolver.prototype.m_positionConstraints = null, goog.exportProperty(box2d.b2ContactSolver.prototype, "m_positionConstraints", box2d.b2ContactSolver.prototype.m_positionConstraints),
    box2d.b2ContactSolver.prototype.m_velocityConstraints = null, goog.exportProperty(box2d.b2ContactSolver.prototype, "m_velocityConstraints", box2d.b2ContactSolver.prototype.m_velocityConstraints),
    box2d.b2ContactSolver.prototype.m_contacts = null, goog.exportProperty(box2d.b2ContactSolver.prototype, "m_contacts", box2d.b2ContactSolver.prototype.m_contacts),
    box2d.b2ContactSolver.prototype.m_count = 0, goog.exportProperty(box2d.b2ContactSolver.prototype, "m_count", box2d.b2ContactSolver.prototype.m_count),
    box2d.b2ContactSolver.prototype.Initialize = function(o) {
        if (this.m_step.Copy(o.step), this.m_allocator = o.allocator, this.m_count = o.count,
            this.m_positionConstraints.length < this.m_count) {
            var t = box2d.b2Max(2 * this.m_positionConstraints.length, this.m_count);
            for (box2d.DEBUG && window.console.log("box2d.b2ContactSolver.m_positionConstraints: " + t); this.m_positionConstraints.length < t;) this.m_positionConstraints[this.m_positionConstraints.length] = new box2d.b2ContactPositionConstraint();
        }
        if (this.m_velocityConstraints.length < this.m_count)
            for (t = box2d.b2Max(2 * this.m_velocityConstraints.length, this.m_count),
                box2d.DEBUG && window.console.log("box2d.b2ContactSolver.m_velocityConstraints: " + t); this.m_velocityConstraints.length < t;) this.m_velocityConstraints[this.m_velocityConstraints.length] = new box2d.b2ContactVelocityConstraint();
        var e, r, i, b, n, p, s, a;
        for (this.m_positions = o.positions, this.m_velocities = o.velocities, this.m_contacts = o.contacts,
            o = 0, t = this.m_count; o < t; ++o)
            for (b = (i = this.m_contacts[o]).m_fixtureA,
                n = i.m_fixtureB, e = b.GetShape(), r = n.GetShape(), e = e.m_radius, r = r.m_radius,
                p = b.GetBody(), s = n.GetBody(), a = (n = i.GetManifold()).pointCount, box2d.ENABLE_ASSERTS && box2d.b2Assert(0 < a),
                (b = this.m_velocityConstraints[o]).friction = i.m_friction, b.restitution = i.m_restitution,
                b.tangentSpeed = i.m_tangentSpeed, b.indexA = p.m_islandIndex, b.indexB = s.m_islandIndex,
                b.invMassA = p.m_invMass, b.invMassB = s.m_invMass, b.invIA = p.m_invI, b.invIB = s.m_invI,
                b.contactIndex = o, b.pointCount = a, b.K.SetZero(), b.normalMass.SetZero(), (i = this.m_positionConstraints[o]).indexA = p.m_islandIndex,
                i.indexB = s.m_islandIndex, i.invMassA = p.m_invMass, i.invMassB = s.m_invMass,
                i.localCenterA.Copy(p.m_sweep.localCenter), i.localCenterB.Copy(s.m_sweep.localCenter),
                i.invIA = p.m_invI, i.invIB = s.m_invI, i.localNormal.Copy(n.localNormal), i.localPoint.Copy(n.localPoint),
                i.pointCount = a, i.radiusA = e, i.radiusB = r, i.type = n.type, e = 0, r = a; e < r; ++e) p = n.points[e],
                a = b.points[e], this.m_step.warmStarting ? (a.normalImpulse = this.m_step.dtRatio * p.normalImpulse,
                    a.tangentImpulse = this.m_step.dtRatio * p.tangentImpulse) : (a.normalImpulse = 0,
                    a.tangentImpulse = 0), a.rA.SetZero(), a.rB.SetZero(), a.normalMass = 0, a.tangentMass = 0,
                a.velocityBias = 0, i.localPoints[e].Copy(p.localPoint);
        return this;
    }, goog.exportProperty(box2d.b2ContactSolver.prototype, "Initialize", box2d.b2ContactSolver.prototype.Initialize),
    box2d.b2ContactSolver.prototype.InitializeVelocityConstraints = function() {
        var o, t, e, r, i, b, n, p, s, a, d, l, x, y, c, _, m, u, h, g, f = box2d.b2ContactSolver.prototype.InitializeVelocityConstraints.s_xfA,
            S = box2d.b2ContactSolver.prototype.InitializeVelocityConstraints.s_xfB,
            P = box2d.b2ContactSolver.prototype.InitializeVelocityConstraints.s_worldManifold;
        for (o = 0, t = this.m_count; o < t; ++o) {
            for (i = this.m_velocityConstraints[o], e = (b = this.m_positionConstraints[o]).radiusA,
                r = b.radiusB, n = this.m_contacts[i.contactIndex].GetManifold(), p = i.indexA,
                s = i.indexB, a = i.invMassA, d = i.invMassB, l = i.invIA, x = i.invIB, y = b.localCenterA,
                c = b.localCenterB, b = this.m_positions[p].c, _ = this.m_positions[p].a, m = this.m_velocities[p].v,
                p = this.m_velocities[p].w, u = this.m_positions[s].c, h = this.m_positions[s].a,
                g = this.m_velocities[s].v, s = this.m_velocities[s].w, box2d.ENABLE_ASSERTS && box2d.b2Assert(0 < n.pointCount),
                f.q.SetAngle(_), S.q.SetAngle(h), box2d.b2Sub_V2_V2(b, box2d.b2Mul_R_V2(f.q, y, box2d.b2Vec2.s_t0), f.p),
                box2d.b2Sub_V2_V2(u, box2d.b2Mul_R_V2(S.q, c, box2d.b2Vec2.s_t0), S.p), P.Initialize(n, f, e, S, r),
                i.normal.Copy(P.normal), box2d.b2Cross_V2_S(i.normal, 1, i.tangent), r = i.pointCount,
                e = 0; e < r; ++e) n = i.points[e], box2d.b2Sub_V2_V2(P.points[e], b, n.rA), box2d.b2Sub_V2_V2(P.points[e], u, n.rB),
                y = a + d + l * (y = box2d.b2Cross_V2_V2(n.rA, i.normal)) * y + x * (c = box2d.b2Cross_V2_V2(n.rB, i.normal)) * c,
                n.normalMass = 0 < y ? 1 / y : 0, c = i.tangent, y = a + d + l * (y = box2d.b2Cross_V2_V2(n.rA, c)) * y + x * (c = box2d.b2Cross_V2_V2(n.rB, c)) * c,
                n.tangentMass = 0 < y ? 1 / y : 0, n.velocityBias = 0, (y = box2d.b2Dot_V2_V2(i.normal, box2d.b2Sub_V2_V2(box2d.b2AddCross_V2_S_V2(g, s, n.rB, box2d.b2Vec2.s_t0), box2d.b2AddCross_V2_S_V2(m, p, n.rA, box2d.b2Vec2.s_t1), box2d.b2Vec2.s_t0))) < -box2d.b2_velocityThreshold && (n.velocityBias += -i.restitution * y);
            2 === i.pointCount && box2d.g_blockSolve && (m = i.points[0], u = i.points[1], b = box2d.b2Cross_V2_V2(m.rA, i.normal),
                m = box2d.b2Cross_V2_V2(m.rB, i.normal), p = box2d.b2Cross_V2_V2(u.rA, i.normal),
                s = box2d.b2Cross_V2_V2(u.rB, i.normal), (u = a + d + l * b * b + x * m * m) * u < 1e3 * (u * (g = a + d + l * p * p + x * s * s) - (a = a + d + l * b * p + x * m * s) * a) ? (i.K.ex.Set(u, a),
                    i.K.ey.Set(a, g), i.K.GetInverse(i.normalMass)) : i.pointCount = 1);
        }
    }, goog.exportProperty(box2d.b2ContactSolver.prototype, "InitializeVelocityConstraints", box2d.b2ContactSolver.prototype.InitializeVelocityConstraints),
    box2d.b2ContactSolver.prototype.InitializeVelocityConstraints.s_xfA = new box2d.b2Transform(),
    box2d.b2ContactSolver.prototype.InitializeVelocityConstraints.s_xfB = new box2d.b2Transform(),
    box2d.b2ContactSolver.prototype.InitializeVelocityConstraints.s_worldManifold = new box2d.b2WorldManifold(),
    box2d.b2ContactSolver.prototype.WarmStart = function() {
        var o, t, e, r, i, b, n, p, s, a, d, l, x, y, c, _, m, u, h = box2d.b2ContactSolver.prototype.WarmStart.s_P;
        for (o = 0, t = this.m_count; o < t; ++o) {
            for (b = (i = this.m_velocityConstraints[o]).indexA, n = i.indexB, p = i.invMassA,
                s = i.invIA, a = i.invMassB, d = i.invIB, r = i.pointCount, l = this.m_velocities[b].v,
                x = this.m_velocities[b].w, y = this.m_velocities[n].v, c = this.m_velocities[n].w,
                _ = i.normal, m = i.tangent, e = 0; e < r; ++e) u = i.points[e], box2d.b2Add_V2_V2(box2d.b2Mul_S_V2(u.normalImpulse, _, box2d.b2Vec2.s_t0), box2d.b2Mul_S_V2(u.tangentImpulse, m, box2d.b2Vec2.s_t1), h),
                x -= s * box2d.b2Cross_V2_V2(u.rA, h), l.SelfMulSub(p, h), c += d * box2d.b2Cross_V2_V2(u.rB, h),
                y.SelfMulAdd(a, h);
            this.m_velocities[b].w = x, this.m_velocities[n].w = c;
        }
    }, goog.exportProperty(box2d.b2ContactSolver.prototype, "WarmStart", box2d.b2ContactSolver.prototype.WarmStart),
    box2d.b2ContactSolver.prototype.WarmStart.s_P = new box2d.b2Vec2(), box2d.b2ContactSolver.prototype.SolveVelocityConstraints = function() {
        var o, t, e, r, i, b, n, p, s, a, d, l, x, y, c, _, m, u, h, g, f, S, P = box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_dv,
            C = box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_dv1,
            A = box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_dv2,
            B = box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_P,
            v = box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_a,
            V = box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_b,
            J = box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_x,
            M = box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_d,
            w = box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_P1,
            D = box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_P2,
            G = box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_P1P2;
        for (o = 0, t = this.m_count; o < t; ++o) {
            for (b = (i = this.m_velocityConstraints[o]).indexA, n = i.indexB, p = i.invMassA,
                s = i.invIA, a = i.invMassB, d = i.invIB, l = i.pointCount, x = this.m_velocities[b].v,
                y = this.m_velocities[b].w, c = this.m_velocities[n].v, _ = this.m_velocities[n].w,
                m = i.normal, u = i.tangent, h = i.friction, box2d.ENABLE_ASSERTS && box2d.b2Assert(1 === l || 2 === l),
                e = 0, r = l; e < r; ++e) g = i.points[e], box2d.b2Sub_V2_V2(box2d.b2AddCross_V2_S_V2(c, _, g.rB, box2d.b2Vec2.s_t0), box2d.b2AddCross_V2_S_V2(x, y, g.rA, box2d.b2Vec2.s_t1), P),
                f = box2d.b2Dot_V2_V2(P, u) - i.tangentSpeed, f = g.tangentMass * -f, S = h * g.normalImpulse,
                f = (S = box2d.b2Clamp(g.tangentImpulse + f, -S, S)) - g.tangentImpulse, g.tangentImpulse = S,
                box2d.b2Mul_S_V2(f, u, B), x.SelfMulSub(p, B), y -= s * box2d.b2Cross_V2_V2(g.rA, B),
                c.SelfMulAdd(a, B), _ += d * box2d.b2Cross_V2_V2(g.rB, B);
            if (1 !== i.pointCount && box2d.g_blockSolve)
                for (l = i.points[0], g = i.points[1],
                    v.Set(l.normalImpulse, g.normalImpulse), box2d.ENABLE_ASSERTS && box2d.b2Assert(0 <= v.x && 0 <= v.y),
                    box2d.b2Sub_V2_V2(box2d.b2AddCross_V2_S_V2(c, _, l.rB, box2d.b2Vec2.s_t0), box2d.b2AddCross_V2_S_V2(x, y, l.rA, box2d.b2Vec2.s_t1), C),
                    box2d.b2Sub_V2_V2(box2d.b2AddCross_V2_S_V2(c, _, g.rB, box2d.b2Vec2.s_t0), box2d.b2AddCross_V2_S_V2(x, y, g.rA, box2d.b2Vec2.s_t1), A),
                    e = box2d.b2Dot_V2_V2(C, m), r = box2d.b2Dot_V2_V2(A, m), V.x = e - l.velocityBias,
                    V.y = r - g.velocityBias, V.SelfSub(box2d.b2Mul_M22_V2(i.K, v, box2d.b2Vec2.s_t0));;) {
                    if (box2d.b2Mul_M22_V2(i.normalMass, V, J).SelfNeg(), 0 <= J.x && 0 <= J.y) {
                        box2d.b2Sub_V2_V2(J, v, M), box2d.b2Mul_S_V2(M.x, m, w), box2d.b2Mul_S_V2(M.y, m, D),
                            box2d.b2Add_V2_V2(w, D, G), x.SelfMulSub(p, G), y -= s * (box2d.b2Cross_V2_V2(l.rA, w) + box2d.b2Cross_V2_V2(g.rA, D)),
                            c.SelfMulAdd(a, G), _ += d * (box2d.b2Cross_V2_V2(l.rB, w) + box2d.b2Cross_V2_V2(g.rB, D)),
                            l.normalImpulse = J.x, g.normalImpulse = J.y;
                        break;
                    }
                    if (J.x = -l.normalMass * V.x, J.y = 0, r = i.K.ex.y * J.x + V.y, 0 <= J.x && 0 <= r) {
                        box2d.b2Sub_V2_V2(J, v, M), box2d.b2Mul_S_V2(M.x, m, w), box2d.b2Mul_S_V2(M.y, m, D),
                            box2d.b2Add_V2_V2(w, D, G), x.SelfMulSub(p, G), y -= s * (box2d.b2Cross_V2_V2(l.rA, w) + box2d.b2Cross_V2_V2(g.rA, D)),
                            c.SelfMulAdd(a, G), _ += d * (box2d.b2Cross_V2_V2(l.rB, w) + box2d.b2Cross_V2_V2(g.rB, D)),
                            l.normalImpulse = J.x, g.normalImpulse = J.y;
                        break;
                    }
                    if (J.x = 0, J.y = -g.normalMass * V.y, e = i.K.ey.x * J.y + V.x, 0 <= J.y && 0 <= e) {
                        box2d.b2Sub_V2_V2(J, v, M), box2d.b2Mul_S_V2(M.x, m, w), box2d.b2Mul_S_V2(M.y, m, D),
                            box2d.b2Add_V2_V2(w, D, G), x.SelfMulSub(p, G), y -= s * (box2d.b2Cross_V2_V2(l.rA, w) + box2d.b2Cross_V2_V2(g.rA, D)),
                            c.SelfMulAdd(a, G), _ += d * (box2d.b2Cross_V2_V2(l.rB, w) + box2d.b2Cross_V2_V2(g.rB, D)),
                            l.normalImpulse = J.x, g.normalImpulse = J.y;
                        break;
                    }
                    if (J.x = 0, J.y = 0, e = V.x, r = V.y, 0 <= e && 0 <= r) {
                        box2d.b2Sub_V2_V2(J, v, M), box2d.b2Mul_S_V2(M.x, m, w), box2d.b2Mul_S_V2(M.y, m, D),
                            box2d.b2Add_V2_V2(w, D, G), x.SelfMulSub(p, G), y -= s * (box2d.b2Cross_V2_V2(l.rA, w) + box2d.b2Cross_V2_V2(g.rA, D)),
                            c.SelfMulAdd(a, G), _ += d * (box2d.b2Cross_V2_V2(l.rB, w) + box2d.b2Cross_V2_V2(g.rB, D)),
                            l.normalImpulse = J.x, g.normalImpulse = J.y;
                        break;
                    }
                    break;
                } else
                    for (e = 0; e < l; ++e) g = i.points[e], box2d.b2Sub_V2_V2(box2d.b2AddCross_V2_S_V2(c, _, g.rB, box2d.b2Vec2.s_t0), box2d.b2AddCross_V2_S_V2(x, y, g.rA, box2d.b2Vec2.s_t1), P),
                        r = box2d.b2Dot_V2_V2(P, m), f = -g.normalMass * (r - g.velocityBias), f = (S = box2d.b2Max(g.normalImpulse + f, 0)) - g.normalImpulse,
                        g.normalImpulse = S, box2d.b2Mul_S_V2(f, m, B), x.SelfMulSub(p, B), y -= s * box2d.b2Cross_V2_V2(g.rA, B),
                        c.SelfMulAdd(a, B), _ += d * box2d.b2Cross_V2_V2(g.rB, B);
            this.m_velocities[b].w = y, this.m_velocities[n].w = _;
        }
    }, goog.exportProperty(box2d.b2ContactSolver.prototype, "SolveVelocityConstraints", box2d.b2ContactSolver.prototype.SolveVelocityConstraints),
    box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_dv = new box2d.b2Vec2(),
    box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_dv1 = new box2d.b2Vec2(),
    box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_dv2 = new box2d.b2Vec2(),
    box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_P = new box2d.b2Vec2(),
    box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_a = new box2d.b2Vec2(),
    box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_b = new box2d.b2Vec2(),
    box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_x = new box2d.b2Vec2(),
    box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_d = new box2d.b2Vec2(),
    box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_P1 = new box2d.b2Vec2(),
    box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_P2 = new box2d.b2Vec2(),
    box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_P1P2 = new box2d.b2Vec2(),
    box2d.b2ContactSolver.prototype.StoreImpulses = function() {
        var o, t, e, r, i, b;
        for (o = 0, t = this.m_count; o < t; ++o)
            for (i = this.m_velocityConstraints[o],
                b = this.m_contacts[i.contactIndex].GetManifold(), e = 0, r = i.pointCount; e < r; ++e) b.points[e].normalImpulse = i.points[e].normalImpulse,
                b.points[e].tangentImpulse = i.points[e].tangentImpulse;
    }, goog.exportProperty(box2d.b2ContactSolver.prototype, "StoreImpulses", box2d.b2ContactSolver.prototype.StoreImpulses),
    box2d.b2PositionSolverManifold = function() {
        this.normal = new box2d.b2Vec2(), this.point = new box2d.b2Vec2();
    }, goog.exportSymbol("box2d.b2PositionSolverManifold", box2d.b2PositionSolverManifold),
    box2d.b2PositionSolverManifold.prototype.normal = null, goog.exportProperty(box2d.b2PositionSolverManifold.prototype, "normal", box2d.b2PositionSolverManifold.prototype.normal),
    box2d.b2PositionSolverManifold.prototype.point = null, goog.exportProperty(box2d.b2PositionSolverManifold.prototype, "point", box2d.b2PositionSolverManifold.prototype.point),
    box2d.b2PositionSolverManifold.prototype.separation = 0, goog.exportProperty(box2d.b2PositionSolverManifold.prototype, "separation", box2d.b2PositionSolverManifold.prototype.separation),
    box2d.b2PositionSolverManifold.prototype.Initialize = function(o, t, e, r) {
        var i = box2d.b2PositionSolverManifold.prototype.Initialize.s_pointA,
            b = box2d.b2PositionSolverManifold.prototype.Initialize.s_pointB,
            n = box2d.b2PositionSolverManifold.prototype.Initialize.s_planePoint,
            p = box2d.b2PositionSolverManifold.prototype.Initialize.s_clipPoint;
        switch (box2d.ENABLE_ASSERTS && box2d.b2Assert(0 < o.pointCount), o.type) {
            case box2d.b2ManifoldType.e_circles:
                box2d.b2Mul_X_V2(t, o.localPoint, i), box2d.b2Mul_X_V2(e, o.localPoints[0], b),
                    box2d.b2Sub_V2_V2(b, i, this.normal).SelfNormalize(), box2d.b2Mid_V2_V2(i, b, this.point),
                    this.separation = box2d.b2Dot_V2_V2(box2d.b2Sub_V2_V2(b, i, box2d.b2Vec2.s_t0), this.normal) - o.radiusA - o.radiusB;
                break;

            case box2d.b2ManifoldType.e_faceA:
                box2d.b2Mul_R_V2(t.q, o.localNormal, this.normal), box2d.b2Mul_X_V2(t, o.localPoint, n),
                    box2d.b2Mul_X_V2(e, o.localPoints[r], p), this.separation = box2d.b2Dot_V2_V2(box2d.b2Sub_V2_V2(p, n, box2d.b2Vec2.s_t0), this.normal) - o.radiusA - o.radiusB,
                    this.point.Copy(p);
                break;

            case box2d.b2ManifoldType.e_faceB:
                box2d.b2Mul_R_V2(e.q, o.localNormal, this.normal), box2d.b2Mul_X_V2(e, o.localPoint, n),
                    box2d.b2Mul_X_V2(t, o.localPoints[r], p), this.separation = box2d.b2Dot_V2_V2(box2d.b2Sub_V2_V2(p, n, box2d.b2Vec2.s_t0), this.normal) - o.radiusA - o.radiusB,
                    this.point.Copy(p), this.normal.SelfNeg();
        }
    }, goog.exportProperty(box2d.b2PositionSolverManifold.prototype, "Initialize", box2d.b2PositionSolverManifold.prototype.Initialize),
    box2d.b2PositionSolverManifold.prototype.Initialize.s_pointA = new box2d.b2Vec2(),
    box2d.b2PositionSolverManifold.prototype.Initialize.s_pointB = new box2d.b2Vec2(),
    box2d.b2PositionSolverManifold.prototype.Initialize.s_planePoint = new box2d.b2Vec2(),
    box2d.b2PositionSolverManifold.prototype.Initialize.s_clipPoint = new box2d.b2Vec2(),
    box2d.b2ContactSolver.prototype.SolvePositionConstraints = function() {
        var o, t, e, r, i, b, n, p, s, a, d, l, x, y, c, _, m, u, h, g, f, S = box2d.b2ContactSolver.prototype.SolvePositionConstraints.s_xfA,
            P = box2d.b2ContactSolver.prototype.SolvePositionConstraints.s_xfB,
            C = box2d.b2ContactSolver.prototype.SolvePositionConstraints.s_psm,
            A = box2d.b2ContactSolver.prototype.SolvePositionConstraints.s_rA,
            B = box2d.b2ContactSolver.prototype.SolvePositionConstraints.s_rB,
            v = box2d.b2ContactSolver.prototype.SolvePositionConstraints.s_P,
            V = 0;
        for (o = 0, t = this.m_count; o < t; ++o) {
            for (b = (i = this.m_positionConstraints[o]).indexA, n = i.indexB, p = i.localCenterA,
                s = i.invMassA, a = i.invIA, d = i.localCenterB, l = i.invMassB, x = i.invIB, r = i.pointCount,
                y = this.m_positions[b].c, c = this.m_positions[b].a, _ = this.m_positions[n].c,
                m = this.m_positions[n].a, e = 0; e < r; ++e) S.q.SetAngle(c), P.q.SetAngle(m),
                box2d.b2Sub_V2_V2(y, box2d.b2Mul_R_V2(S.q, p, box2d.b2Vec2.s_t0), S.p), box2d.b2Sub_V2_V2(_, box2d.b2Mul_R_V2(P.q, d, box2d.b2Vec2.s_t0), P.p),
                C.Initialize(i, S, P, e), u = C.normal, h = C.point, g = C.separation, box2d.b2Sub_V2_V2(h, y, A),
                box2d.b2Sub_V2_V2(h, _, B), V = box2d.b2Min(V, g), h = box2d.b2Clamp(box2d.b2_baumgarte * (g + box2d.b2_linearSlop), -box2d.b2_maxLinearCorrection, 0),
                h = 0 < (g = s + l + a * (g = box2d.b2Cross_V2_V2(A, u)) * g + x * (f = box2d.b2Cross_V2_V2(B, u)) * f) ? -h / g : 0,
                box2d.b2Mul_S_V2(h, u, v), y.SelfMulSub(s, v), c -= a * box2d.b2Cross_V2_V2(A, v),
                _.SelfMulAdd(l, v), m += x * box2d.b2Cross_V2_V2(B, v);
            this.m_positions[b].a = c, this.m_positions[n].a = m;
        }
        return V > -3 * box2d.b2_linearSlop;
    }, goog.exportProperty(box2d.b2ContactSolver.prototype, "SolvePositionConstraints", box2d.b2ContactSolver.prototype.SolvePositionConstraints),
    box2d.b2ContactSolver.prototype.SolvePositionConstraints.s_xfA = new box2d.b2Transform(),
    box2d.b2ContactSolver.prototype.SolvePositionConstraints.s_xfB = new box2d.b2Transform(),
    box2d.b2ContactSolver.prototype.SolvePositionConstraints.s_psm = new box2d.b2PositionSolverManifold(),
    box2d.b2ContactSolver.prototype.SolvePositionConstraints.s_rA = new box2d.b2Vec2(),
    box2d.b2ContactSolver.prototype.SolvePositionConstraints.s_rB = new box2d.b2Vec2(),
    box2d.b2ContactSolver.prototype.SolvePositionConstraints.s_P = new box2d.b2Vec2(),
    box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints = function(o, t) {
        var e, r, i, b, n, p, s, a, d, l, x, y, c, _, m, u, h, g, f, S, P, C = box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints.s_xfA,
            A = box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints.s_xfB,
            B = box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints.s_psm,
            v = box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints.s_rA,
            V = box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints.s_rB,
            J = box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints.s_P,
            M = 0;
        for (e = 0, r = this.m_count; e < r; ++e) {
            for (p = (n = this.m_positionConstraints[e]).indexA, s = n.indexB, a = n.localCenterA,
                d = n.localCenterB, b = n.pointCount, x = l = 0, p !== o && p !== t || (l = n.invMassA,
                    x = n.invIA), c = y = 0, s !== o && s !== t || (y = n.invMassB, c = n.invIB), _ = this.m_positions[p].c,
                m = this.m_positions[p].a, u = this.m_positions[s].c, h = this.m_positions[s].a,
                i = 0; i < b; ++i) C.q.SetAngle(m), A.q.SetAngle(h), box2d.b2Sub_V2_V2(_, box2d.b2Mul_R_V2(C.q, a, box2d.b2Vec2.s_t0), C.p),
                box2d.b2Sub_V2_V2(u, box2d.b2Mul_R_V2(A.q, d, box2d.b2Vec2.s_t0), A.p), B.Initialize(n, C, A, i),
                g = B.normal, f = B.point, S = B.separation, box2d.b2Sub_V2_V2(f, _, v), box2d.b2Sub_V2_V2(f, u, V),
                M = box2d.b2Min(M, S), f = box2d.b2Clamp(box2d.b2_toiBaumgarte * (S + box2d.b2_linearSlop), -box2d.b2_maxLinearCorrection, 0),
                f = 0 < (S = l + y + x * (S = box2d.b2Cross_V2_V2(v, g)) * S + c * (P = box2d.b2Cross_V2_V2(V, g)) * P) ? -f / S : 0,
                box2d.b2Mul_S_V2(f, g, J), _.SelfMulSub(l, J), m -= x * box2d.b2Cross_V2_V2(v, J),
                u.SelfMulAdd(y, J), h += c * box2d.b2Cross_V2_V2(V, J);
            this.m_positions[p].a = m, this.m_positions[s].a = h;
        }
        return M >= -1.5 * box2d.b2_linearSlop;
    }, goog.exportProperty(box2d.b2ContactSolver.prototype, "SolveTOIPositionConstraints", box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints),
    box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints.s_xfA = new box2d.b2Transform(),
    box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints.s_xfB = new box2d.b2Transform(),
    box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints.s_psm = new box2d.b2PositionSolverManifold(),
    box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints.s_rA = new box2d.b2Vec2(),
    box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints.s_rB = new box2d.b2Vec2(),
    box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints.s_P = new box2d.b2Vec2(),
    box2d.b2Island = function() {
        this.m_bodies = Array(1024), this.m_contacts = Array(1024), this.m_joints = Array(1024),
            this.m_positions = box2d.b2Position.MakeArray(1024), this.m_velocities = box2d.b2Velocity.MakeArray(1024);
    }, goog.exportSymbol("box2d.b2Island", box2d.b2Island), box2d.b2Island.prototype.m_allocator = null,
    goog.exportProperty(box2d.b2Island.prototype, "m_allocator", box2d.b2Island.prototype.m_allocator),
    box2d.b2Island.prototype.m_listener = null, goog.exportProperty(box2d.b2Island.prototype, "m_listener", box2d.b2Island.prototype.m_listener),
    box2d.b2Island.prototype.m_bodies = null, goog.exportProperty(box2d.b2Island.prototype, "m_bodies", box2d.b2Island.prototype.m_bodies),
    box2d.b2Island.prototype.m_contacts = null, goog.exportProperty(box2d.b2Island.prototype, "m_contacts", box2d.b2Island.prototype.m_contacts),
    box2d.b2Island.prototype.m_joints = null, goog.exportProperty(box2d.b2Island.prototype, "m_joints", box2d.b2Island.prototype.m_joints),
    box2d.b2Island.prototype.m_positions = null, goog.exportProperty(box2d.b2Island.prototype, "m_positions", box2d.b2Island.prototype.m_positions),
    box2d.b2Island.prototype.m_velocities = null, goog.exportProperty(box2d.b2Island.prototype, "m_velocities", box2d.b2Island.prototype.m_velocities),
    box2d.b2Island.prototype.m_bodyCount = 0, goog.exportProperty(box2d.b2Island.prototype, "m_bodyCount", box2d.b2Island.prototype.m_bodyCount),
    box2d.b2Island.prototype.m_jointCount = 0, goog.exportProperty(box2d.b2Island.prototype, "m_jointCount", box2d.b2Island.prototype.m_jointCount),
    box2d.b2Island.prototype.m_contactCount = 0, goog.exportProperty(box2d.b2Island.prototype, "m_contactCount", box2d.b2Island.prototype.m_contactCount),
    box2d.b2Island.prototype.m_bodyCapacity = 0, goog.exportProperty(box2d.b2Island.prototype, "m_bodyCapacity", box2d.b2Island.prototype.m_bodyCapacity),
    box2d.b2Island.prototype.m_contactCapacity = 0, goog.exportProperty(box2d.b2Island.prototype, "m_contactCapacity", box2d.b2Island.prototype.m_contactCapacity),
    box2d.b2Island.prototype.m_jointCapacity = 0, goog.exportProperty(box2d.b2Island.prototype, "m_jointCapacity", box2d.b2Island.prototype.m_jointCapacity),
    box2d.b2Island.prototype.Initialize = function(o, t, e, r, i) {
        for (this.m_bodyCapacity = o, this.m_contactCapacity = t, this.m_jointCapacity = e,
            this.m_jointCount = this.m_contactCount = this.m_bodyCount = 0, this.m_allocator = r,
            this.m_listener = i; this.m_bodies.length < o;) this.m_bodies[this.m_bodies.length] = null;
        for (; this.m_contacts.length < t;) this.m_contacts[this.m_contacts.length] = null;
        for (; this.m_joints.length < e;) this.m_joints[this.m_joints.length] = null;
        if (this.m_positions.length < o)
            for (t = box2d.b2Max(2 * this.m_positions.length, o),
                box2d.DEBUG && window.console.log("box2d.b2Island.m_positions: " + t); this.m_positions.length < t;) this.m_positions[this.m_positions.length] = new box2d.b2Position();
        if (this.m_velocities.length < o)
            for (t = box2d.b2Max(2 * this.m_velocities.length, o),
                box2d.DEBUG && window.console.log("box2d.b2Island.m_velocities: " + t); this.m_velocities.length < t;) this.m_velocities[this.m_velocities.length] = new box2d.b2Velocity();
    }, goog.exportProperty(box2d.b2Island.prototype, "Initialize", box2d.b2Island.prototype.Initialize),
    box2d.b2Island.prototype.Clear = function() {
        this.m_jointCount = this.m_contactCount = this.m_bodyCount = 0;
    }, goog.exportProperty(box2d.b2Island.prototype, "Clear", box2d.b2Island.prototype.Clear),
    box2d.b2Island.prototype.AddBody = function(o) {
        box2d.ENABLE_ASSERTS && box2d.b2Assert(this.m_bodyCount < this.m_bodyCapacity),
            o.m_islandIndex = this.m_bodyCount, this.m_bodies[this.m_bodyCount++] = o;
    }, goog.exportProperty(box2d.b2Island.prototype, "AddBody", box2d.b2Island.prototype.AddBody),
    box2d.b2Island.prototype.AddContact = function(o) {
        box2d.ENABLE_ASSERTS && box2d.b2Assert(this.m_contactCount < this.m_contactCapacity),
            this.m_contacts[this.m_contactCount++] = o;
    }, goog.exportProperty(box2d.b2Island.prototype, "AddContact", box2d.b2Island.prototype.AddContact),
    box2d.b2Island.prototype.AddJoint = function(o) {
        box2d.ENABLE_ASSERTS && box2d.b2Assert(this.m_jointCount < this.m_jointCapacity),
            this.m_joints[this.m_jointCount++] = o;
    }, goog.exportProperty(box2d.b2Island.prototype, "AddJoint", box2d.b2Island.prototype.AddJoint),
    box2d.b2Island.prototype.Solve = function(o, t, e, r) {
        for (var i = box2d.b2Island.s_timer.Reset(), b = t.dt, n = 0; n < this.m_bodyCount; ++n) {
            var p = this.m_bodies[n],
                s = this.m_positions[n].c.Copy(p.m_sweep.c),
                a = p.m_sweep.a,
                d = this.m_velocities[n].v.Copy(p.m_linearVelocity),
                l = p.m_angularVelocity;
            p.m_sweep.c0.Copy(p.m_sweep.c), p.m_sweep.a0 = p.m_sweep.a, p.m_type === box2d.b2BodyType.b2_dynamicBody && (d.x += b * (p.m_gravityScale * e.x + p.m_invMass * p.m_force.x),
                    d.y += b * (p.m_gravityScale * e.y + p.m_invMass * p.m_force.y), l += b * p.m_invI * p.m_torque,
                    d.SelfMul(1 / (1 + b * p.m_linearDamping)), l *= 1 / (1 + b * p.m_angularDamping)),
                this.m_positions[n].a = a, this.m_velocities[n].w = l;
        }
        for (i.Reset(), (p = box2d.b2Island.s_solverData).step.Copy(t), p.positions = this.m_positions,
            p.velocities = this.m_velocities, (n = box2d.b2Island.s_contactSolverDef).step.Copy(t),
            n.contacts = this.m_contacts, n.count = this.m_contactCount, n.positions = this.m_positions,
            n.velocities = this.m_velocities, n.allocator = this.m_allocator, (e = box2d.b2Island.s_contactSolver.Initialize(n)).InitializeVelocityConstraints(),
            t.warmStarting && e.WarmStart(), n = 0; n < this.m_jointCount; ++n) this.m_joints[n].InitVelocityConstraints(p);
        for (o.solveInit = i.GetMilliseconds(), i.Reset(), n = 0; n < t.velocityIterations; ++n) {
            for (a = 0; a < this.m_jointCount; ++a) this.m_joints[a].SolveVelocityConstraints(p);
            e.SolveVelocityConstraints();
        }
        for (e.StoreImpulses(), o.solveVelocity = i.GetMilliseconds(), n = 0; n < this.m_bodyCount; ++n) {
            s = this.m_positions[n].c, a = this.m_positions[n].a, d = this.m_velocities[n].v,
                l = this.m_velocities[n].w;
            var x = box2d.b2Mul_S_V2(b, d, box2d.b2Island.s_translation);
            box2d.b2Dot_V2_V2(x, x) > box2d.b2_maxTranslationSquared && (x = box2d.b2_maxTranslation / x.Length(),
                    d.SelfMul(x)), (x = b * l) * x > box2d.b2_maxRotationSquared && (l *= x = box2d.b2_maxRotation / box2d.b2Abs(x)),
                s.x += b * d.x, s.y += b * d.y, a += b * l, this.m_positions[n].a = a, this.m_velocities[n].w = l;
        }
        for (i.Reset(), s = !1, n = 0; n < t.positionIterations; ++n) {
            for (d = e.SolvePositionConstraints(), l = !0, a = 0; a < this.m_jointCount; ++a) x = this.m_joints[a].SolvePositionConstraints(p),
                l = l && x;
            if (d && l) {
                s = !0;
                break;
            }
        }
        for (n = 0; n < this.m_bodyCount; ++n)(t = this.m_bodies[n]).m_sweep.c.Copy(this.m_positions[n].c),
            t.m_sweep.a = this.m_positions[n].a, t.m_linearVelocity.Copy(this.m_velocities[n].v),
            t.m_angularVelocity = this.m_velocities[n].w, t.SynchronizeTransform();
        if (o.solvePosition = i.GetMilliseconds(), this.Report(e.m_velocityConstraints),
            r) {
            for (o = box2d.b2_maxFloat, r = box2d.b2_linearSleepTolerance * box2d.b2_linearSleepTolerance,
                i = box2d.b2_angularSleepTolerance * box2d.b2_angularSleepTolerance, n = 0; n < this.m_bodyCount; ++n)(p = this.m_bodies[n]).GetType() !== box2d.b2BodyType.b2_staticBody && (!p.m_flag_autoSleepFlag || p.m_angularVelocity * p.m_angularVelocity > i || box2d.b2Dot_V2_V2(p.m_linearVelocity, p.m_linearVelocity) > r ? o = p.m_sleepTime = 0 : (p.m_sleepTime += b,
                o = box2d.b2Min(o, p.m_sleepTime)));
            if (o >= box2d.b2_timeToSleep && s)
                for (n = 0; n < this.m_bodyCount; ++n)(p = this.m_bodies[n]).SetAwake(!1);
        }
    }, goog.exportProperty(box2d.b2Island.prototype, "Solve", box2d.b2Island.prototype.Solve),
    box2d.b2Island.prototype.SolveTOI = function(o, t, e) {
        box2d.ENABLE_ASSERTS && box2d.b2Assert(t < this.m_bodyCount), box2d.ENABLE_ASSERTS && box2d.b2Assert(e < this.m_bodyCount);
        for (var r = 0; r < this.m_bodyCount; ++r) {
            var i = this.m_bodies[r];
            this.m_positions[r].c.Copy(i.m_sweep.c), this.m_positions[r].a = i.m_sweep.a, this.m_velocities[r].v.Copy(i.m_linearVelocity),
                this.m_velocities[r].w = i.m_angularVelocity;
        }
        for ((r = box2d.b2Island.s_contactSolverDef).contacts = this.m_contacts, r.count = this.m_contactCount,
            r.allocator = this.m_allocator, r.step.Copy(o), r.positions = this.m_positions,
            r.velocities = this.m_velocities, i = box2d.b2Island.s_contactSolver.Initialize(r),
            r = 0; r < o.positionIterations && !i.SolveTOIPositionConstraints(t, e); ++r);
        for (this.m_bodies[t].m_sweep.c0.Copy(this.m_positions[t].c), this.m_bodies[t].m_sweep.a0 = this.m_positions[t].a,
            this.m_bodies[e].m_sweep.c0.Copy(this.m_positions[e].c), this.m_bodies[e].m_sweep.a0 = this.m_positions[e].a,
            i.InitializeVelocityConstraints(), r = 0; r < o.velocityIterations; ++r) i.SolveVelocityConstraints();
        for (o = o.dt, r = 0; r < this.m_bodyCount; ++r) {
            t = this.m_positions[r].c, e = this.m_positions[r].a;
            var b = this.m_velocities[r].v,
                n = this.m_velocities[r].w,
                p = box2d.b2Mul_S_V2(o, b, box2d.b2Island.s_translation);
            box2d.b2Dot_V2_V2(p, p) > box2d.b2_maxTranslationSquared && (p = box2d.b2_maxTranslation / p.Length(),
                    b.SelfMul(p)), (p = o * n) * p > box2d.b2_maxRotationSquared && (n *= p = box2d.b2_maxRotation / box2d.b2Abs(p)),
                t.SelfMulAdd(o, b), e += o * n, this.m_positions[r].a = e, this.m_velocities[r].w = n,
                (p = this.m_bodies[r]).m_sweep.c.Copy(t), p.m_sweep.a = e, p.m_linearVelocity.Copy(b),
                p.m_angularVelocity = n, p.SynchronizeTransform();
        }
        this.Report(i.m_velocityConstraints);
    }, goog.exportProperty(box2d.b2Island.prototype, "SolveTOI", box2d.b2Island.prototype.SolveTOI),
    box2d.b2Island.prototype.Report = function(o) {
        if (null !== this.m_listener)
            for (var t = 0; t < this.m_contactCount; ++t) {
                var e = this.m_contacts[t];
                if (e) {
                    var r = o[t],
                        i = box2d.b2Island.s_impulse;
                    i.count = r.pointCount;
                    for (var b = 0; b < r.pointCount; ++b) i.normalImpulses[b] = r.points[b].normalImpulse,
                        i.tangentImpulses[b] = r.points[b].tangentImpulse;
                    this.m_listener.PostSolve(e, i);
                }
            }
    }, goog.exportProperty(box2d.b2Island.prototype, "Report", box2d.b2Island.prototype.Report),
    box2d.b2Island.s_timer = new box2d.b2Timer(), box2d.b2Island.s_solverData = new box2d.b2SolverData(),
    box2d.b2Island.s_contactSolverDef = new box2d.b2ContactSolverDef(), box2d.b2Island.s_contactSolver = new box2d.b2ContactSolver(),
    box2d.b2Island.s_translation = new box2d.b2Vec2(), box2d.b2Island.s_impulse = new box2d.b2ContactImpulse(),
    box2d.b2JointType = {
        e_unknownJoint: 0,
        e_revoluteJoint: 1,
        e_prismaticJoint: 2,
        e_distanceJoint: 3,
        e_pulleyJoint: 4,
        e_mouseJoint: 5,
        e_gearJoint: 6,
        e_wheelJoint: 7,
        e_weldJoint: 8,
        e_frictionJoint: 9,
        e_ropeJoint: 10,
        e_motorJoint: 11,
        e_areaJoint: 12
    }, goog.exportSymbol("box2d.b2JointType", box2d.b2JointType), goog.exportProperty(box2d.b2JointType, "e_unknownJoint", box2d.b2JointType.e_unknownJoint),
    goog.exportProperty(box2d.b2JointType, "e_revoluteJoint", box2d.b2JointType.e_revoluteJoint),
    goog.exportProperty(box2d.b2JointType, "e_prismaticJoint", box2d.b2JointType.e_prismaticJoint),
    goog.exportProperty(box2d.b2JointType, "e_distanceJoint", box2d.b2JointType.e_distanceJoint),
    goog.exportProperty(box2d.b2JointType, "e_pulleyJoint", box2d.b2JointType.e_pulleyJoint),
    goog.exportProperty(box2d.b2JointType, "e_mouseJoint", box2d.b2JointType.e_mouseJoint),
    goog.exportProperty(box2d.b2JointType, "e_gearJoint", box2d.b2JointType.e_gearJoint),
    goog.exportProperty(box2d.b2JointType, "e_wheelJoint", box2d.b2JointType.e_wheelJoint),
    goog.exportProperty(box2d.b2JointType, "e_weldJoint", box2d.b2JointType.e_weldJoint),
    goog.exportProperty(box2d.b2JointType, "e_frictionJoint", box2d.b2JointType.e_frictionJoint),
    goog.exportProperty(box2d.b2JointType, "e_ropeJoint", box2d.b2JointType.e_ropeJoint),
    goog.exportProperty(box2d.b2JointType, "e_motorJoint", box2d.b2JointType.e_motorJoint),
    goog.exportProperty(box2d.b2JointType, "e_areaJoint", box2d.b2JointType.e_areaJoint),
    box2d.b2LimitState = {
        e_inactiveLimit: 0,
        e_atLowerLimit: 1,
        e_atUpperLimit: 2,
        e_equalLimits: 3
    }, goog.exportSymbol("box2d.b2LimitState", box2d.b2LimitState), goog.exportProperty(box2d.b2LimitState, "e_inactiveLimit", box2d.b2LimitState.e_inactiveLimit),
    goog.exportProperty(box2d.b2LimitState, "e_atLowerLimit", box2d.b2LimitState.e_atLowerLimit),
    goog.exportProperty(box2d.b2LimitState, "e_atUpperLimit", box2d.b2LimitState.e_atUpperLimit),
    goog.exportProperty(box2d.b2LimitState, "e_equalLimits", box2d.b2LimitState.e_equalLimits),
    box2d.b2Jacobian = function() {
        this.linear = new box2d.b2Vec2();
    }, goog.exportSymbol("box2d.b2Jacobian", box2d.b2Jacobian), box2d.b2Jacobian.prototype.linear = null,
    goog.exportProperty(box2d.b2Jacobian.prototype, "linear", box2d.b2Jacobian.prototype.linear),
    box2d.b2Jacobian.prototype.angularA = 0, goog.exportProperty(box2d.b2Jacobian.prototype, "angularA", box2d.b2Jacobian.prototype.angularA),
    box2d.b2Jacobian.prototype.angularB = 0, goog.exportProperty(box2d.b2Jacobian.prototype, "angularB", box2d.b2Jacobian.prototype.angularB),
    box2d.b2Jacobian.prototype.SetZero = function() {
        return this.linear.SetZero(), this.angularB = this.angularA = 0, this;
    }, goog.exportProperty(box2d.b2Jacobian.prototype, "SetZero", box2d.b2Jacobian.prototype.SetZero),
    box2d.b2Jacobian.prototype.Set = function(o, t, e) {
        return this.linear.Copy(o), this.angularA = t, this.angularB = e, this;
    }, goog.exportProperty(box2d.b2Jacobian.prototype, "Set", box2d.b2Jacobian.prototype.Set),
    box2d.b2JointEdge = function() {}, goog.exportSymbol("box2d.b2JointEdge", box2d.b2JointEdge),
    box2d.b2JointEdge.prototype.other = null, goog.exportProperty(box2d.b2JointEdge.prototype, "other", box2d.b2JointEdge.prototype.other),
    box2d.b2JointEdge.prototype.joint = null, goog.exportProperty(box2d.b2JointEdge.prototype, "joint", box2d.b2JointEdge.prototype.joint),
    box2d.b2JointEdge.prototype.prev = null, goog.exportProperty(box2d.b2JointEdge.prototype, "prev", box2d.b2JointEdge.prototype.prev),
    box2d.b2JointEdge.prototype.next = null, goog.exportProperty(box2d.b2JointEdge.prototype, "next", box2d.b2JointEdge.prototype.next),
    box2d.b2JointDef = function(o) {
        this.type = o;
    }, goog.exportSymbol("box2d.b2JointDef", box2d.b2JointDef), box2d.b2JointDef.prototype.type = box2d.b2JointType.e_unknownJoint,
    goog.exportProperty(box2d.b2JointDef.prototype, "type", box2d.b2JointDef.prototype.type),
    box2d.b2JointDef.prototype.userData = null, goog.exportProperty(box2d.b2JointDef.prototype, "userData", box2d.b2JointDef.prototype.userData),
    box2d.b2JointDef.prototype.bodyA = null, goog.exportProperty(box2d.b2JointDef.prototype, "bodyA", box2d.b2JointDef.prototype.bodyA),
    box2d.b2JointDef.prototype.bodyB = null, goog.exportProperty(box2d.b2JointDef.prototype, "bodyB", box2d.b2JointDef.prototype.bodyB),
    box2d.b2JointDef.prototype.collideConnected = !1, goog.exportProperty(box2d.b2JointDef.prototype, "collideConnected", box2d.b2JointDef.prototype.collideConnected),
    box2d.b2Joint = function(o) {
        box2d.ENABLE_ASSERTS && box2d.b2Assert(o.bodyA !== o.bodyB), this.m_type = o.type,
            this.m_edgeA = new box2d.b2JointEdge(), this.m_edgeB = new box2d.b2JointEdge(),
            this.m_bodyA = o.bodyA, this.m_bodyB = o.bodyB, this.m_collideConnected = o.collideConnected,
            this.m_userData = o.userData;
    }, goog.exportSymbol("box2d.b2Joint", box2d.b2Joint), box2d.b2Joint.prototype.m_type = box2d.b2JointType.e_unknownJoint,
    goog.exportProperty(box2d.b2Joint.prototype, "m_type", box2d.b2Joint.prototype.m_type),
    box2d.b2Joint.prototype.m_prev = null, goog.exportProperty(box2d.b2Joint.prototype, "m_prev", box2d.b2Joint.prototype.m_prev),
    box2d.b2Joint.prototype.m_next = null, goog.exportProperty(box2d.b2Joint.prototype, "m_next", box2d.b2Joint.prototype.m_next),
    box2d.b2Joint.prototype.m_edgeA = null, goog.exportProperty(box2d.b2Joint.prototype, "m_edgeA", box2d.b2Joint.prototype.m_edgeA),
    box2d.b2Joint.prototype.m_edgeB = null, goog.exportProperty(box2d.b2Joint.prototype, "m_edgeB", box2d.b2Joint.prototype.m_edgeB),
    box2d.b2Joint.prototype.m_bodyA = null, goog.exportProperty(box2d.b2Joint.prototype, "m_bodyA", box2d.b2Joint.prototype.m_bodyA),
    box2d.b2Joint.prototype.m_bodyB = null, goog.exportProperty(box2d.b2Joint.prototype, "m_bodyB", box2d.b2Joint.prototype.m_bodyB),
    box2d.b2Joint.prototype.m_index = 0, goog.exportProperty(box2d.b2Joint.prototype, "m_index", box2d.b2Joint.prototype.m_index),
    box2d.b2Joint.prototype.m_islandFlag = !1, goog.exportProperty(box2d.b2Joint.prototype, "m_islandFlag", box2d.b2Joint.prototype.m_islandFlag),
    box2d.b2Joint.prototype.m_collideConnected = !1, goog.exportProperty(box2d.b2Joint.prototype, "m_collideConnected", box2d.b2Joint.prototype.m_collideConnected),
    box2d.b2Joint.prototype.m_userData = null, goog.exportProperty(box2d.b2Joint.prototype, "m_userData", box2d.b2Joint.prototype.m_userData),
    box2d.b2Joint.prototype.GetAnchorA = function(o) {
        return o.SetZero();
    }, goog.exportProperty(box2d.b2Joint.prototype, "GetAnchorA", box2d.b2Joint.prototype.GetAnchorA),
    box2d.b2Joint.prototype.GetAnchorB = function(o) {
        return o.SetZero();
    }, goog.exportProperty(box2d.b2Joint.prototype, "GetAnchorB", box2d.b2Joint.prototype.GetAnchorB),
    box2d.b2Joint.prototype.GetReactionForce = function(o, t) {
        return t.SetZero();
    }, goog.exportProperty(box2d.b2Joint.prototype, "GetReactionForce", box2d.b2Joint.prototype.GetReactionForce),
    box2d.b2Joint.prototype.GetReactionTorque = function(o) {
        return 0;
    }, goog.exportProperty(box2d.b2Joint.prototype, "GetReactionTorque", box2d.b2Joint.prototype.GetReactionTorque),
    box2d.b2Joint.prototype.InitVelocityConstraints = function(o) {}, goog.exportProperty(box2d.b2Joint.prototype, "InitVelocityConstraints", box2d.b2Joint.prototype.InitVelocityConstraints),
    box2d.b2Joint.prototype.SolveVelocityConstraints = function(o) {}, goog.exportProperty(box2d.b2Joint.prototype, "SolveVelocityConstraints", box2d.b2Joint.prototype.SolveVelocityConstraints),
    box2d.b2Joint.prototype.SolvePositionConstraints = function(o) {
        return !1;
    }, goog.exportProperty(box2d.b2Joint.prototype, "SolvePositionConstraints", box2d.b2Joint.prototype.SolvePositionConstraints),
    box2d.b2Joint.prototype.GetType = function() {
        return this.m_type;
    }, goog.exportProperty(box2d.b2Joint.prototype, "GetType", box2d.b2Joint.prototype.GetType),
    box2d.b2Joint.prototype.GetBodyA = function() {
        return this.m_bodyA;
    }, goog.exportProperty(box2d.b2Joint.prototype, "GetBodyA", box2d.b2Joint.prototype.GetBodyA),
    box2d.b2Joint.prototype.GetBodyB = function() {
        return this.m_bodyB;
    }, goog.exportProperty(box2d.b2Joint.prototype, "GetBodyB", box2d.b2Joint.prototype.GetBodyB),
    box2d.b2Joint.prototype.GetNext = function() {
        return this.m_next;
    }, goog.exportProperty(box2d.b2Joint.prototype, "GetNext", box2d.b2Joint.prototype.GetNext),
    box2d.b2Joint.prototype.GetUserData = function() {
        return this.m_userData;
    }, goog.exportProperty(box2d.b2Joint.prototype, "GetUserData", box2d.b2Joint.prototype.GetUserData),
    box2d.b2Joint.prototype.SetUserData = function(o) {
        this.m_userData = o;
    }, goog.exportProperty(box2d.b2Joint.prototype, "SetUserData", box2d.b2Joint.prototype.SetUserData),
    box2d.b2Joint.prototype.GetCollideConnected = function() {
        return this.m_collideConnected;
    }, goog.exportProperty(box2d.b2Joint.prototype, "GetCollideConnected", box2d.b2Joint.prototype.GetCollideConnected),
    box2d.b2Joint.prototype.Dump = function() {
        box2d.DEBUG && box2d.b2Log("// Dump is not supported for this joint type.\n");
    }, goog.exportProperty(box2d.b2Joint.prototype, "Dump", box2d.b2Joint.prototype.Dump),
    box2d.b2Joint.prototype.IsActive = function() {
        return this.m_bodyA.IsActive() && this.m_bodyB.IsActive();
    }, goog.exportProperty(box2d.b2Joint.prototype, "IsActive", box2d.b2Joint.prototype.IsActive),
    box2d.b2Joint.prototype.ShiftOrigin = function(o) {}, goog.exportProperty(box2d.b2Joint.prototype, "ShiftOrigin", box2d.b2Joint.prototype.ShiftOrigin),
    box2d.b2AreaJointDef = function() {
        box2d.b2JointDef.call(this, box2d.b2JointType.e_areaJoint), this.bodies = [];
    }, goog.inherits(box2d.b2AreaJointDef, box2d.b2JointDef), goog.exportSymbol("box2d.b2AreaJointDef", box2d.b2AreaJointDef),
    box2d.b2AreaJointDef.prototype.world = null, goog.exportProperty(box2d.b2AreaJointDef.prototype, "world", box2d.b2AreaJointDef.prototype.world),
    box2d.b2AreaJointDef.prototype.bodies = null, goog.exportProperty(box2d.b2AreaJointDef.prototype, "bodies", box2d.b2AreaJointDef.prototype.bodies),
    box2d.b2AreaJointDef.prototype.frequencyHz = 0, goog.exportProperty(box2d.b2AreaJointDef.prototype, "frequencyHz", box2d.b2AreaJointDef.prototype.frequencyHz),
    box2d.b2AreaJointDef.prototype.dampingRatio = 0, goog.exportProperty(box2d.b2AreaJointDef.prototype, "dampingRatio", box2d.b2AreaJointDef.prototype.dampingRatio),
    box2d.b2AreaJointDef.prototype.AddBody = function(o) {
        this.bodies.push(o), 1 === this.bodies.length ? this.bodyA = o : 2 === this.bodies.length && (this.bodyB = o);
    }, goog.exportProperty(box2d.b2AreaJointDef.prototype, "AddBody", box2d.b2AreaJointDef.prototype.AddBody),
    box2d.b2AreaJoint = function(o) {
        box2d.b2Joint.call(this, o), box2d.ENABLE_ASSERTS && box2d.b2Assert(3 <= o.bodies.length, "You cannot create an area joint with less than three bodies."),
            this.m_bodies = o.bodies, this.m_frequencyHz = o.frequencyHz, this.m_dampingRatio = o.dampingRatio,
            this.m_targetLengths = box2d.b2MakeNumberArray(o.bodies.length), this.m_normals = box2d.b2Vec2.MakeArray(o.bodies.length),
            this.m_joints = Array(o.bodies.length), this.m_deltas = box2d.b2Vec2.MakeArray(o.bodies.length),
            this.m_delta = new box2d.b2Vec2();
        var t = new box2d.b2DistanceJointDef();
        t.frequencyHz = o.frequencyHz, t.dampingRatio = o.dampingRatio;
        for (var e = this.m_targetArea = 0, r = this.m_bodies.length; e < r; ++e) {
            var i = this.m_bodies[e],
                b = this.m_bodies[(e + 1) % r],
                n = i.GetWorldCenter(),
                p = b.GetWorldCenter();
            this.m_targetLengths[e] = box2d.b2Distance(n, p), this.m_targetArea += box2d.b2Cross_V2_V2(n, p),
                t.Initialize(i, b, n, p), this.m_joints[e] = o.world.CreateJoint(t);
        }
        this.m_targetArea *= .5;
    }, goog.inherits(box2d.b2AreaJoint, box2d.b2Joint), goog.exportSymbol("box2d.b2AreaJoint", box2d.b2AreaJoint),
    box2d.b2AreaJoint.prototype.m_bodies = null, goog.exportProperty(box2d.b2AreaJoint.prototype, "m_bodies", box2d.b2AreaJoint.prototype.m_bodies),
    box2d.b2AreaJoint.prototype.m_frequencyHz = 0, goog.exportProperty(box2d.b2AreaJoint.prototype, "m_frequencyHz", box2d.b2AreaJoint.prototype.m_frequencyHz),
    box2d.b2AreaJoint.prototype.m_dampingRatio = 0, goog.exportProperty(box2d.b2AreaJoint.prototype, "m_dampingRatio", box2d.b2AreaJoint.prototype.m_dampingRatio),
    box2d.b2AreaJoint.prototype.m_impulse = 0, goog.exportProperty(box2d.b2AreaJoint.prototype, "m_impulse", box2d.b2AreaJoint.prototype.m_impulse),
    box2d.b2AreaJoint.prototype.m_targetLengths = null, box2d.b2AreaJoint.prototype.m_targetArea = 0,
    box2d.b2AreaJoint.prototype.m_normals = null, box2d.b2AreaJoint.prototype.m_joints = null,
    box2d.b2AreaJoint.prototype.m_deltas = null, box2d.b2AreaJoint.prototype.m_delta = null,
    box2d.b2AreaJoint.prototype.GetAnchorA = function(o) {
        return o.SetZero();
    }, goog.exportProperty(box2d.b2AreaJoint.prototype, "GetAnchorA", box2d.b2AreaJoint.prototype.GetAnchorA),
    box2d.b2AreaJoint.prototype.GetAnchorB = function(o) {
        return o.SetZero();
    }, goog.exportProperty(box2d.b2AreaJoint.prototype, "GetAnchorB", box2d.b2AreaJoint.prototype.GetAnchorB),
    box2d.b2AreaJoint.prototype.GetReactionForce = function(o, t) {
        return t.SetZero();
    }, goog.exportProperty(box2d.b2AreaJoint.prototype, "GetReactionForce", box2d.b2AreaJoint.prototype.GetReactionForce),
    box2d.b2AreaJoint.prototype.GetReactionTorque = function(o) {
        return 0;
    }, goog.exportProperty(box2d.b2AreaJoint.prototype, "GetReactionTorque", box2d.b2AreaJoint.prototype.GetReactionTorque),
    box2d.b2AreaJoint.prototype.SetFrequency = function(o) {
        this.m_frequencyHz = o;
        for (var t = 0, e = this.m_joints.length; t < e; ++t) this.m_joints[t].SetFrequency(o);
    }, goog.exportProperty(box2d.b2AreaJoint.prototype, "SetFrequency", box2d.b2AreaJoint.prototype.SetFrequency),
    box2d.b2AreaJoint.prototype.GetFrequency = function() {
        return this.m_frequencyHz;
    }, goog.exportProperty(box2d.b2AreaJoint.prototype, "GetFrequency", box2d.b2AreaJoint.prototype.GetFrequency),
    box2d.b2AreaJoint.prototype.SetDampingRatio = function(o) {
        this.m_dampingRatio = o;
        for (var t = 0, e = this.m_joints.length; t < e; ++t) this.m_joints[t].SetDampingRatio(o);
    }, goog.exportProperty(box2d.b2AreaJoint.prototype, "SetDampingRatio", box2d.b2AreaJoint.prototype.SetDampingRatio),
    box2d.b2AreaJoint.prototype.GetDampingRatio = function() {
        return this.m_dampingRatio;
    }, goog.exportProperty(box2d.b2AreaJoint.prototype, "GetDampingRatio", box2d.b2AreaJoint.prototype.GetDampingRatio),
    box2d.b2AreaJoint.prototype.Dump = function() {
        box2d.DEBUG && box2d.b2Log("Area joint dumping is not supported.\n");
    }, goog.exportProperty(box2d.b2AreaJoint.prototype, "Dump", box2d.b2AreaJoint.prototype.Dump),
    box2d.b2AreaJoint.prototype.InitVelocityConstraints = function(o) {
        for (var t = 0, e = this.m_bodies.length; t < e; ++t) {
            var r = this.m_deltas[t];
            box2d.b2Sub_V2_V2(o.positions[this.m_bodies[(t + 1) % e].m_islandIndex].c, o.positions[this.m_bodies[(t + e - 1) % e].m_islandIndex].c, r);
        }
        if (o.step.warmStarting)
            for (this.m_impulse *= o.step.dtRatio, t = 0, e = this.m_bodies.length; t < e; ++t) {
                var i = this.m_bodies[t],
                    b = o.velocities[i.m_islandIndex].v;
                r = this.m_deltas[t];
                b.x += i.m_invMass * r.y * .5 * this.m_impulse, b.y += i.m_invMass * -r.x * .5 * this.m_impulse;
            } else this.m_impulse = 0;
    }, goog.exportProperty(box2d.b2AreaJoint.prototype, "InitVelocityConstraints", box2d.b2AreaJoint.prototype.InitVelocityConstraints),
    box2d.b2AreaJoint.prototype.SolveVelocityConstraints = function(o) {
        for (var t = 0, e = 0, r = 0, i = this.m_bodies.length; r < i; ++r) {
            var b = this.m_bodies[r],
                n = o.velocities[b.m_islandIndex].v,
                p = this.m_deltas[r];
            t = t + p.LengthSquared() / b.GetMass(), e = e + box2d.b2Cross_V2_V2(n, p);
        }
        for (t = -2 * e / t, this.m_impulse += t, r = 0, i = this.m_bodies.length; r < i; ++r) b = this.m_bodies[r],
            n = o.velocities[b.m_islandIndex].v, p = this.m_deltas[r], n.x += b.m_invMass * p.y * .5 * t,
            n.y += b.m_invMass * -p.x * .5 * t;
    }, goog.exportProperty(box2d.b2AreaJoint.prototype, "SolveVelocityConstraints", box2d.b2AreaJoint.prototype.SolveVelocityConstraints),
    box2d.b2AreaJoint.prototype.SolvePositionConstraints = function(o) {
        for (var t = 0, e = 0, r = 0, i = this.m_bodies.length; r < i; ++r) {
            var b = this.m_bodies[r],
                n = (b = o.positions[b.m_islandIndex].c, o.positions[this.m_bodies[(r + 1) % i].m_islandIndex].c),
                p = box2d.b2Sub_V2_V2(n, b, this.m_delta),
                s = p.Length();
            s < box2d.b2_epsilon && (s = 1), this.m_normals[r].x = p.y / s, this.m_normals[r].y = -p.x / s,
                t += s, e += box2d.b2Cross_V2_V2(b, n);
        }
        for (t = .5 * (this.m_targetArea - .5 * e) / t, e = !0, r = 0, i = this.m_bodies.length; r < i; ++r) b = this.m_bodies[r],
            b = o.positions[b.m_islandIndex].c, (p = box2d.b2Add_V2_V2(this.m_normals[r], this.m_normals[(r + 1) % i], this.m_delta)).SelfMul(t),
            (n = p.LengthSquared()) > box2d.b2Sq(box2d.b2_maxLinearCorrection) && p.SelfMul(box2d.b2_maxLinearCorrection / box2d.b2Sqrt(n)),
            n > box2d.b2Sq(box2d.b2_linearSlop) && (e = !1), b.x += p.x, b.y += p.y;
        return e;
    }, goog.exportProperty(box2d.b2AreaJoint.prototype, "SolvePositionConstraints", box2d.b2AreaJoint.prototype.SolvePositionConstraints),
    box2d.b2DistanceJointDef = function() {
        box2d.b2JointDef.call(this, box2d.b2JointType.e_distanceJoint), this.localAnchorA = new box2d.b2Vec2(),
            this.localAnchorB = new box2d.b2Vec2();
    }, goog.inherits(box2d.b2DistanceJointDef, box2d.b2JointDef), goog.exportSymbol("box2d.b2DistanceJointDef", box2d.b2DistanceJointDef),
    box2d.b2DistanceJointDef.prototype.localAnchorA = null, goog.exportProperty(box2d.b2DistanceJointDef.prototype, "localAnchorA", box2d.b2DistanceJointDef.prototype.localAnchorA),
    box2d.b2DistanceJointDef.prototype.localAnchorB = null, goog.exportProperty(box2d.b2DistanceJointDef.prototype, "localAnchorB", box2d.b2DistanceJointDef.prototype.localAnchorB),
    box2d.b2DistanceJointDef.prototype.length = 1, goog.exportProperty(box2d.b2DistanceJointDef.prototype, "length", box2d.b2DistanceJointDef.prototype.length),
    box2d.b2DistanceJointDef.prototype.frequencyHz = 0, goog.exportProperty(box2d.b2DistanceJointDef.prototype, "frequencyHz", box2d.b2DistanceJointDef.prototype.frequencyHz),
    box2d.b2DistanceJointDef.prototype.dampingRatio = 0, goog.exportProperty(box2d.b2DistanceJointDef.prototype, "dampingRatio", box2d.b2DistanceJointDef.prototype.dampingRatio),
    box2d.b2DistanceJointDef.prototype.Initialize = function(o, t, e, r) {
        this.bodyA = o, this.bodyB = t, this.bodyA.GetLocalPoint(e, this.localAnchorA),
            this.bodyB.GetLocalPoint(r, this.localAnchorB), this.length = box2d.b2Distance(e, r),
            this.dampingRatio = this.frequencyHz = 0;
    }, goog.exportProperty(box2d.b2DistanceJointDef.prototype, "Initialize", box2d.b2DistanceJointDef.prototype.Initialize),
    box2d.b2DistanceJoint = function(o) {
        box2d.b2Joint.call(this, o), this.m_u = new box2d.b2Vec2(), this.m_rA = new box2d.b2Vec2(),
            this.m_rB = new box2d.b2Vec2(), this.m_localCenterA = new box2d.b2Vec2(), this.m_localCenterB = new box2d.b2Vec2(),
            this.m_qA = new box2d.b2Rot(), this.m_qB = new box2d.b2Rot(), this.m_lalcA = new box2d.b2Vec2(),
            this.m_lalcB = new box2d.b2Vec2(), this.m_frequencyHz = o.frequencyHz, this.m_dampingRatio = o.dampingRatio,
            this.m_localAnchorA = o.localAnchorA.Clone(), this.m_localAnchorB = o.localAnchorB.Clone(),
            this.m_length = o.length;
    }, goog.inherits(box2d.b2DistanceJoint, box2d.b2Joint), goog.exportSymbol("box2d.b2DistanceJoint", box2d.b2DistanceJoint),
    box2d.b2DistanceJoint.prototype.m_frequencyHz = 0, goog.exportProperty(box2d.b2DistanceJoint.prototype, "m_frequencyHz", box2d.b2DistanceJoint.prototype.m_frequencyHz),
    box2d.b2DistanceJoint.prototype.m_dampingRatio = 0, goog.exportProperty(box2d.b2DistanceJoint.prototype, "m_dampingRatio", box2d.b2DistanceJoint.prototype.m_dampingRatio),
    box2d.b2DistanceJoint.prototype.m_bias = 0, goog.exportProperty(box2d.b2DistanceJoint.prototype, "m_bias", box2d.b2DistanceJoint.prototype.m_bias),
    box2d.b2DistanceJoint.prototype.m_localAnchorA = null, goog.exportProperty(box2d.b2DistanceJoint.prototype, "m_localAnchorA", box2d.b2DistanceJoint.prototype.m_localAnchorA),
    box2d.b2DistanceJoint.prototype.m_localAnchorB = null, goog.exportProperty(box2d.b2DistanceJoint.prototype, "m_localAnchorB", box2d.b2DistanceJoint.prototype.m_localAnchorB),
    box2d.b2DistanceJoint.prototype.m_gamma = 0, goog.exportProperty(box2d.b2DistanceJoint.prototype, "m_gamma", box2d.b2DistanceJoint.prototype.m_gamma),
    box2d.b2DistanceJoint.prototype.m_impulse = 0, goog.exportProperty(box2d.b2DistanceJoint.prototype, "m_impulse", box2d.b2DistanceJoint.prototype.m_impulse),
    box2d.b2DistanceJoint.prototype.m_length = 0, goog.exportProperty(box2d.b2DistanceJoint.prototype, "m_length", box2d.b2DistanceJoint.prototype.m_length),
    box2d.b2DistanceJoint.prototype.m_indexA = 0, goog.exportProperty(box2d.b2DistanceJoint.prototype, "m_indexA", box2d.b2DistanceJoint.prototype.m_indexA),
    box2d.b2DistanceJoint.prototype.m_indexB = 0, goog.exportProperty(box2d.b2DistanceJoint.prototype, "m_indexB", box2d.b2DistanceJoint.prototype.m_indexB),
    box2d.b2DistanceJoint.prototype.m_u = null, goog.exportProperty(box2d.b2DistanceJoint.prototype, "m_u", box2d.b2DistanceJoint.prototype.m_u),
    box2d.b2DistanceJoint.prototype.m_rA = null, goog.exportProperty(box2d.b2DistanceJoint.prototype, "m_rA", box2d.b2DistanceJoint.prototype.m_rA),
    box2d.b2DistanceJoint.prototype.m_rB = null, goog.exportProperty(box2d.b2DistanceJoint.prototype, "m_rB", box2d.b2DistanceJoint.prototype.m_rB),
    box2d.b2DistanceJoint.prototype.m_localCenterA = null, goog.exportProperty(box2d.b2DistanceJoint.prototype, "m_localCenterA", box2d.b2DistanceJoint.prototype.m_localCenterA),
    box2d.b2DistanceJoint.prototype.m_localCenterB = null, goog.exportProperty(box2d.b2DistanceJoint.prototype, "m_localCenterB", box2d.b2DistanceJoint.prototype.m_localCenterB),
    box2d.b2DistanceJoint.prototype.m_invMassA = 0, goog.exportProperty(box2d.b2DistanceJoint.prototype, "m_invMassA", box2d.b2DistanceJoint.prototype.m_invMassA),
    box2d.b2DistanceJoint.prototype.m_invMassB = 0, goog.exportProperty(box2d.b2DistanceJoint.prototype, "m_invMassB", box2d.b2DistanceJoint.prototype.m_invMassB),
    box2d.b2DistanceJoint.prototype.m_invIA = 0, goog.exportProperty(box2d.b2DistanceJoint.prototype, "m_invIA", box2d.b2DistanceJoint.prototype.m_invIA),
    box2d.b2DistanceJoint.prototype.m_invIB = 0, goog.exportProperty(box2d.b2DistanceJoint.prototype, "m_invIB", box2d.b2DistanceJoint.prototype.m_invIB),
    box2d.b2DistanceJoint.prototype.m_mass = 0, goog.exportProperty(box2d.b2DistanceJoint.prototype, "m_mass", box2d.b2DistanceJoint.prototype.m_mass),
    box2d.b2DistanceJoint.prototype.m_qA = null, goog.exportProperty(box2d.b2DistanceJoint.prototype, "m_qA", box2d.b2DistanceJoint.prototype.m_qA),
    box2d.b2DistanceJoint.prototype.m_qB = null, goog.exportProperty(box2d.b2DistanceJoint.prototype, "m_qB", box2d.b2DistanceJoint.prototype.m_qB),
    box2d.b2DistanceJoint.prototype.m_lalcA = null, goog.exportProperty(box2d.b2DistanceJoint.prototype, "m_lalcA", box2d.b2DistanceJoint.prototype.m_lalcA),
    box2d.b2DistanceJoint.prototype.m_lalcB = null, goog.exportProperty(box2d.b2DistanceJoint.prototype, "m_lalcB", box2d.b2DistanceJoint.prototype.m_lalcB),
    box2d.b2DistanceJoint.prototype.GetAnchorA = function(o) {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, o);
    }, goog.exportProperty(box2d.b2DistanceJoint.prototype, "GetAnchorA", box2d.b2DistanceJoint.prototype.GetAnchorA),
    box2d.b2DistanceJoint.prototype.GetAnchorB = function(o) {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, o);
    }, goog.exportProperty(box2d.b2DistanceJoint.prototype, "GetAnchorB", box2d.b2DistanceJoint.prototype.GetAnchorB),
    box2d.b2DistanceJoint.prototype.GetReactionForce = function(o, t) {
        return t.Set(o * this.m_impulse * this.m_u.x, o * this.m_impulse * this.m_u.y);
    }, goog.exportProperty(box2d.b2DistanceJoint.prototype, "GetReactionForce", box2d.b2DistanceJoint.prototype.GetReactionForce),
    box2d.b2DistanceJoint.prototype.GetReactionTorque = function(o) {
        return 0;
    }, goog.exportProperty(box2d.b2DistanceJoint.prototype, "GetReactionTorque", box2d.b2DistanceJoint.prototype.GetReactionTorque),
    box2d.b2DistanceJoint.prototype.GetLocalAnchorA = function(o) {
        return o.Copy(this.m_localAnchorA);
    }, goog.exportProperty(box2d.b2DistanceJoint.prototype, "GetLocalAnchorA", box2d.b2DistanceJoint.prototype.GetLocalAnchorA),
    box2d.b2DistanceJoint.prototype.GetLocalAnchorB = function(o) {
        return o.Copy(this.m_localAnchorB);
    }, goog.exportProperty(box2d.b2DistanceJoint.prototype, "GetLocalAnchorB", box2d.b2DistanceJoint.prototype.GetLocalAnchorB),
    box2d.b2DistanceJoint.prototype.SetLength = function(o) {
        this.m_length = o;
    }, goog.exportProperty(box2d.b2DistanceJoint.prototype, "SetLength", box2d.b2DistanceJoint.prototype.SetLength),
    box2d.b2DistanceJoint.prototype.GetLength = function() {
        return this.m_length;
    }, goog.exportProperty(box2d.b2DistanceJoint.prototype, "GetLength", box2d.b2DistanceJoint.prototype.GetLength),
    box2d.b2DistanceJoint.prototype.SetFrequency = function(o) {
        this.m_frequencyHz = o;
    }, goog.exportProperty(box2d.b2DistanceJoint.prototype, "SetFrequency", box2d.b2DistanceJoint.prototype.SetFrequency),
    box2d.b2DistanceJoint.prototype.GetFrequency = function() {
        return this.m_frequencyHz;
    }, goog.exportProperty(box2d.b2DistanceJoint.prototype, "GetFrequency", box2d.b2DistanceJoint.prototype.GetFrequency),
    box2d.b2DistanceJoint.prototype.SetDampingRatio = function(o) {
        this.m_dampingRatio = o;
    }, goog.exportProperty(box2d.b2DistanceJoint.prototype, "SetDampingRatio", box2d.b2DistanceJoint.prototype.SetDampingRatio),
    box2d.b2DistanceJoint.prototype.GetDampingRatio = function() {
        return this.m_dampingRatio;
    }, goog.exportProperty(box2d.b2DistanceJoint.prototype, "GetDampingRatio", box2d.b2DistanceJoint.prototype.GetDampingRatio),
    box2d.b2DistanceJoint.prototype.Dump = function() {
        if (box2d.DEBUG) {
            var o = this.m_bodyA.m_islandIndex,
                t = this.m_bodyB.m_islandIndex;
            box2d.b2Log("  /*box2d.b2DistanceJointDef*/ var jd = new box2d.b2DistanceJointDef();\n"),
                box2d.b2Log("  jd.bodyA = bodies[%d];\n", o), box2d.b2Log("  jd.bodyB = bodies[%d];\n", t),
                box2d.b2Log("  jd.collideConnected = %s;\n", this.m_collideConnected ? "true" : "false"),
                box2d.b2Log("  jd.localAnchorA.Set(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y),
                box2d.b2Log("  jd.localAnchorB.Set(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y),
                box2d.b2Log("  jd.length = %.15f;\n", this.m_length), box2d.b2Log("  jd.frequencyHz = %.15f;\n", this.m_frequencyHz),
                box2d.b2Log("  jd.dampingRatio = %.15f;\n", this.m_dampingRatio), box2d.b2Log("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index);
        }
    }, goog.exportProperty(box2d.b2DistanceJoint.prototype, "Dump", box2d.b2DistanceJoint.prototype.Dump),
    box2d.b2DistanceJoint.prototype.InitVelocityConstraints = function(o) {
        this.m_indexA = this.m_bodyA.m_islandIndex, this.m_indexB = this.m_bodyB.m_islandIndex,
            this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter), this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter),
            this.m_invMassA = this.m_bodyA.m_invMass, this.m_invMassB = this.m_bodyB.m_invMass,
            this.m_invIA = this.m_bodyA.m_invI, this.m_invIB = this.m_bodyB.m_invI;
        var t = o.positions[this.m_indexA].c,
            e = o.velocities[this.m_indexA].v,
            r = o.velocities[this.m_indexA].w,
            i = o.positions[this.m_indexB].c,
            b = o.positions[this.m_indexB].a,
            n = o.velocities[this.m_indexB].v,
            p = o.velocities[this.m_indexB].w,
            s = this.m_qA.SetAngle(o.positions[this.m_indexA].a);
        b = this.m_qB.SetAngle(b);
        if (box2d.b2Sub_V2_V2(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA), box2d.b2Mul_R_V2(s, this.m_lalcA, this.m_rA),
            box2d.b2Sub_V2_V2(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB), box2d.b2Mul_R_V2(b, this.m_lalcB, this.m_rB),
            this.m_u.x = i.x + this.m_rB.x - t.x - this.m_rA.x, this.m_u.y = i.y + this.m_rB.y - t.y - this.m_rA.y,
            (i = this.m_u.Length()) > box2d.b2_linearSlop ? this.m_u.SelfMul(1 / i) : this.m_u.SetZero(),
            t = box2d.b2Cross_V2_V2(this.m_rA, this.m_u), s = box2d.b2Cross_V2_V2(this.m_rB, this.m_u),
            t = this.m_invMassA + this.m_invIA * t * t + this.m_invMassB + this.m_invIB * s * s,
            this.m_mass = 0 !== t ? 1 / t : 0, 0 < this.m_frequencyHz) {
            i = i - this.m_length, s = 2 * box2d.b2_pi * this.m_frequencyHz, b = this.m_mass * s * s;
            var a = o.step.dt;
            this.m_gamma = a * (2 * this.m_mass * this.m_dampingRatio * s + a * b), this.m_gamma = 0 !== this.m_gamma ? 1 / this.m_gamma : 0,
                this.m_bias = i * a * b * this.m_gamma, t += this.m_gamma, this.m_mass = 0 !== t ? 1 / t : 0;
        } else this.m_bias = this.m_gamma = 0;
        o.step.warmStarting ? (this.m_impulse *= o.step.dtRatio, t = box2d.b2Mul_S_V2(this.m_impulse, this.m_u, box2d.b2DistanceJoint.prototype.InitVelocityConstraints.s_P),
                e.SelfMulSub(this.m_invMassA, t), r -= this.m_invIA * box2d.b2Cross_V2_V2(this.m_rA, t),
                n.SelfMulAdd(this.m_invMassB, t), p += this.m_invIB * box2d.b2Cross_V2_V2(this.m_rB, t)) : this.m_impulse = 0,
            o.velocities[this.m_indexA].w = r, o.velocities[this.m_indexB].w = p;
    }, goog.exportProperty(box2d.b2DistanceJoint.prototype, "InitVelocityConstraints", box2d.b2DistanceJoint.prototype.InitVelocityConstraints),
    box2d.b2DistanceJoint.prototype.InitVelocityConstraints.s_P = new box2d.b2Vec2(),
    box2d.b2DistanceJoint.prototype.SolveVelocityConstraints = function(o) {
        var t = o.velocities[this.m_indexA].v,
            e = o.velocities[this.m_indexA].w,
            r = o.velocities[this.m_indexB].v,
            i = o.velocities[this.m_indexB].w,
            b = box2d.b2AddCross_V2_S_V2(t, e, this.m_rA, box2d.b2DistanceJoint.prototype.SolveVelocityConstraints.s_vpA),
            n = box2d.b2AddCross_V2_S_V2(r, i, this.m_rB, box2d.b2DistanceJoint.prototype.SolveVelocityConstraints.s_vpB);
        b = box2d.b2Dot_V2_V2(this.m_u, box2d.b2Sub_V2_V2(n, b, box2d.b2Vec2.s_t0)), b = -this.m_mass * (b + this.m_bias + this.m_gamma * this.m_impulse);
        this.m_impulse += b, b = box2d.b2Mul_S_V2(b, this.m_u, box2d.b2DistanceJoint.prototype.SolveVelocityConstraints.s_P),
            t.SelfMulSub(this.m_invMassA, b), e -= this.m_invIA * box2d.b2Cross_V2_V2(this.m_rA, b),
            r.SelfMulAdd(this.m_invMassB, b), i += this.m_invIB * box2d.b2Cross_V2_V2(this.m_rB, b),
            o.velocities[this.m_indexA].w = e, o.velocities[this.m_indexB].w = i;
    }, goog.exportProperty(box2d.b2DistanceJoint.prototype, "SolveVelocityConstraints", box2d.b2DistanceJoint.prototype.SolveVelocityConstraints),
    box2d.b2DistanceJoint.prototype.SolveVelocityConstraints.s_vpA = new box2d.b2Vec2(),
    box2d.b2DistanceJoint.prototype.SolveVelocityConstraints.s_vpB = new box2d.b2Vec2(),
    box2d.b2DistanceJoint.prototype.SolveVelocityConstraints.s_P = new box2d.b2Vec2(),
    box2d.b2DistanceJoint.prototype.SolvePositionConstraints = function(o) {
        if (0 < this.m_frequencyHz) return !0;
        var t = o.positions[this.m_indexA].c,
            e = o.positions[this.m_indexA].a,
            r = o.positions[this.m_indexB].c,
            i = o.positions[this.m_indexB].a;
        this.m_qA.SetAngle(e), this.m_qB.SetAngle(i);
        var b = box2d.b2Mul_R_V2(this.m_qA, this.m_lalcA, this.m_rA),
            n = box2d.b2Mul_R_V2(this.m_qB, this.m_lalcB, this.m_rB);
        (s = this.m_u).x = r.x + n.x - t.x - b.x, s.y = r.y + n.y - t.y - b.y;
        var p = this.m_u.Normalize() - this.m_length,
            s = (p = box2d.b2Clamp(p, -box2d.b2_maxLinearCorrection, box2d.b2_maxLinearCorrection),
                box2d.b2Mul_S_V2(-this.m_mass * p, s, box2d.b2DistanceJoint.prototype.SolvePositionConstraints.s_P));
        return t.SelfMulSub(this.m_invMassA, s), e -= this.m_invIA * box2d.b2Cross_V2_V2(b, s),
            r.SelfMulAdd(this.m_invMassB, s), i += this.m_invIB * box2d.b2Cross_V2_V2(n, s),
            o.positions[this.m_indexA].a = e, o.positions[this.m_indexB].a = i, box2d.b2Abs(p) < box2d.b2_linearSlop;
    }, goog.exportProperty(box2d.b2DistanceJoint.prototype, "SolvePositionConstraints", box2d.b2DistanceJoint.prototype.SolvePositionConstraints),
    box2d.b2DistanceJoint.prototype.SolvePositionConstraints.s_P = new box2d.b2Vec2(),
    box2d.b2FrictionJointDef = function() {
        box2d.b2JointDef.call(this, box2d.b2JointType.e_frictionJoint), this.localAnchorA = new box2d.b2Vec2(),
            this.localAnchorB = new box2d.b2Vec2();
    }, goog.inherits(box2d.b2FrictionJointDef, box2d.b2JointDef), goog.exportSymbol("box2d.b2FrictionJointDef", box2d.b2FrictionJointDef),
    box2d.b2FrictionJointDef.prototype.localAnchorA = null, goog.exportProperty(box2d.b2FrictionJointDef.prototype, "localAnchorA", box2d.b2FrictionJointDef.prototype.localAnchorA),
    box2d.b2FrictionJointDef.prototype.localAnchorB = null, goog.exportProperty(box2d.b2FrictionJointDef.prototype, "localAnchorB", box2d.b2FrictionJointDef.prototype.localAnchorB),
    box2d.b2FrictionJointDef.prototype.maxForce = 0, goog.exportProperty(box2d.b2FrictionJointDef.prototype, "maxForce", box2d.b2FrictionJointDef.prototype.maxForce),
    box2d.b2FrictionJointDef.prototype.maxTorque = 0, goog.exportProperty(box2d.b2FrictionJointDef.prototype, "maxTorque", box2d.b2FrictionJointDef.prototype.maxTorque),
    box2d.b2FrictionJointDef.prototype.Initialize = function(o, t, e) {
        this.bodyA = o, this.bodyB = t, this.bodyA.GetLocalPoint(e, this.localAnchorA),
            this.bodyB.GetLocalPoint(e, this.localAnchorB);
    }, goog.exportProperty(box2d.b2FrictionJointDef.prototype, "Initialize", box2d.b2FrictionJointDef.prototype.Initialize),
    box2d.b2FrictionJoint = function(o) {
        box2d.b2Joint.call(this, o), this.m_localAnchorA = o.localAnchorA.Clone(), this.m_localAnchorB = o.localAnchorB.Clone(),
            this.m_linearImpulse = new box2d.b2Vec2().SetZero(), this.m_maxForce = o.maxForce,
            this.m_maxTorque = o.maxTorque, this.m_rA = new box2d.b2Vec2(), this.m_rB = new box2d.b2Vec2(),
            this.m_localCenterA = new box2d.b2Vec2(), this.m_localCenterB = new box2d.b2Vec2(),
            this.m_linearMass = new box2d.b2Mat22().SetZero(), this.m_qA = new box2d.b2Rot(),
            this.m_qB = new box2d.b2Rot(), this.m_lalcA = new box2d.b2Vec2(), this.m_lalcB = new box2d.b2Vec2(),
            this.m_K = new box2d.b2Mat22();
    }, goog.inherits(box2d.b2FrictionJoint, box2d.b2Joint), goog.exportSymbol("box2d.b2FrictionJoint", box2d.b2FrictionJoint),
    box2d.b2FrictionJoint.prototype.m_localAnchorA = null, goog.exportProperty(box2d.b2FrictionJoint.prototype, "m_localAnchorA", box2d.b2FrictionJoint.prototype.m_localAnchorA),
    box2d.b2FrictionJoint.prototype.m_localAnchorB = null, goog.exportProperty(box2d.b2FrictionJoint.prototype, "m_localAnchorB", box2d.b2FrictionJoint.prototype.m_localAnchorB),
    box2d.b2FrictionJoint.prototype.m_linearImpulse = null, goog.exportProperty(box2d.b2FrictionJoint.prototype, "m_linearImpulse", box2d.b2FrictionJoint.prototype.m_linearImpulse),
    box2d.b2FrictionJoint.prototype.m_angularImpulse = 0, goog.exportProperty(box2d.b2FrictionJoint.prototype, "m_angularImpulse", box2d.b2FrictionJoint.prototype.m_angularImpulse),
    box2d.b2FrictionJoint.prototype.m_maxForce = 0, goog.exportProperty(box2d.b2FrictionJoint.prototype, "m_maxForce", box2d.b2FrictionJoint.prototype.m_maxForce),
    box2d.b2FrictionJoint.prototype.m_maxTorque = 0, goog.exportProperty(box2d.b2FrictionJoint.prototype, "m_maxTorque", box2d.b2FrictionJoint.prototype.m_maxTorque),
    box2d.b2FrictionJoint.prototype.m_indexA = 0, goog.exportProperty(box2d.b2FrictionJoint.prototype, "m_indexA", box2d.b2FrictionJoint.prototype.m_indexA),
    box2d.b2FrictionJoint.prototype.m_indexB = 0, goog.exportProperty(box2d.b2FrictionJoint.prototype, "m_indexB", box2d.b2FrictionJoint.prototype.m_indexB),
    box2d.b2FrictionJoint.prototype.m_rA = null, goog.exportProperty(box2d.b2FrictionJoint.prototype, "m_rA", box2d.b2FrictionJoint.prototype.m_rA),
    box2d.b2FrictionJoint.prototype.m_rB = null, goog.exportProperty(box2d.b2FrictionJoint.prototype, "m_rB", box2d.b2FrictionJoint.prototype.m_rB),
    box2d.b2FrictionJoint.prototype.m_localCenterA = null, goog.exportProperty(box2d.b2FrictionJoint.prototype, "m_localCenterA", box2d.b2FrictionJoint.prototype.m_localCenterA),
    box2d.b2FrictionJoint.prototype.m_localCenterB = null, goog.exportProperty(box2d.b2FrictionJoint.prototype, "m_localCenterB", box2d.b2FrictionJoint.prototype.m_localCenterB),
    box2d.b2FrictionJoint.prototype.m_invMassA = 0, goog.exportProperty(box2d.b2FrictionJoint.prototype, "m_invMassA", box2d.b2FrictionJoint.prototype.m_invMassA),
    box2d.b2FrictionJoint.prototype.m_invMassB = 0, goog.exportProperty(box2d.b2FrictionJoint.prototype, "m_invMassB", box2d.b2FrictionJoint.prototype.m_invMassB),
    box2d.b2FrictionJoint.prototype.m_invIA = 0, goog.exportProperty(box2d.b2FrictionJoint.prototype, "m_invIA", box2d.b2FrictionJoint.prototype.m_invIA),
    box2d.b2FrictionJoint.prototype.m_invIB = 0, goog.exportProperty(box2d.b2FrictionJoint.prototype, "m_invIB", box2d.b2FrictionJoint.prototype.m_invIB),
    box2d.b2FrictionJoint.prototype.m_linearMass = null, goog.exportProperty(box2d.b2FrictionJoint.prototype, "m_linearMass", box2d.b2FrictionJoint.prototype.m_linearMass),
    box2d.b2FrictionJoint.prototype.m_angularMass = 0, goog.exportProperty(box2d.b2FrictionJoint.prototype, "m_angularMass", box2d.b2FrictionJoint.prototype.m_angularMass),
    box2d.b2FrictionJoint.prototype.m_qA = null, goog.exportProperty(box2d.b2FrictionJoint.prototype, "m_qA", box2d.b2FrictionJoint.prototype.m_qA),
    box2d.b2FrictionJoint.prototype.m_qB = null, goog.exportProperty(box2d.b2FrictionJoint.prototype, "m_qB", box2d.b2FrictionJoint.prototype.m_qB),
    box2d.b2FrictionJoint.prototype.m_lalcA = null, goog.exportProperty(box2d.b2FrictionJoint.prototype, "m_lalcA", box2d.b2FrictionJoint.prototype.m_lalcA),
    box2d.b2FrictionJoint.prototype.m_lalcB = null, goog.exportProperty(box2d.b2FrictionJoint.prototype, "m_lalcB", box2d.b2FrictionJoint.prototype.m_lalcB),
    box2d.b2FrictionJoint.prototype.m_K = null, goog.exportProperty(box2d.b2FrictionJoint.prototype, "m_K", box2d.b2FrictionJoint.prototype.m_K),
    box2d.b2FrictionJoint.prototype.InitVelocityConstraints = function(o) {
        this.m_indexA = this.m_bodyA.m_islandIndex, this.m_indexB = this.m_bodyB.m_islandIndex,
            this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter), this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter),
            this.m_invMassA = this.m_bodyA.m_invMass, this.m_invMassB = this.m_bodyB.m_invMass,
            this.m_invIA = this.m_bodyA.m_invI, this.m_invIB = this.m_bodyB.m_invI;
        var t = o.velocities[this.m_indexA].v,
            e = o.velocities[this.m_indexA].w,
            r = o.positions[this.m_indexB].a,
            i = o.velocities[this.m_indexB].v,
            b = o.velocities[this.m_indexB].w,
            n = this.m_qA.SetAngle(o.positions[this.m_indexA].a);
        r = this.m_qB.SetAngle(r);
        box2d.b2Sub_V2_V2(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA), n = box2d.b2Mul_R_V2(n, this.m_lalcA, this.m_rA),
            box2d.b2Sub_V2_V2(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
        var p = box2d.b2Mul_R_V2(r, this.m_lalcB, this.m_rB),
            s = (r = this.m_invMassA,
                this.m_invMassB),
            a = this.m_invIA,
            d = this.m_invIB,
            l = this.m_K;
        l.ex.x = r + s + a * n.y * n.y + d * p.y * p.y, l.ex.y = -a * n.x * n.y - d * p.x * p.y,
            l.ey.x = l.ex.y, l.ey.y = r + s + a * n.x * n.x + d * p.x * p.x, l.GetInverse(this.m_linearMass),
            this.m_angularMass = a + d, 0 < this.m_angularMass && (this.m_angularMass = 1 / this.m_angularMass),
            o.step.warmStarting ? (this.m_linearImpulse.SelfMul(o.step.dtRatio), this.m_angularImpulse *= o.step.dtRatio,
                n = this.m_linearImpulse, t.SelfMulSub(r, n), e -= a * (box2d.b2Cross_V2_V2(this.m_rA, n) + this.m_angularImpulse),
                i.SelfMulAdd(s, n), b += d * (box2d.b2Cross_V2_V2(this.m_rB, n) + this.m_angularImpulse)) : (this.m_linearImpulse.SetZero(),
                this.m_angularImpulse = 0), o.velocities[this.m_indexA].w = e, o.velocities[this.m_indexB].w = b;
    }, goog.exportProperty(box2d.b2FrictionJoint.prototype, "InitVelocityConstraints", box2d.b2FrictionJoint.prototype.InitVelocityConstraints),
    box2d.b2FrictionJoint.prototype.SolveVelocityConstraints = function(o) {
        var t, e = o.velocities[this.m_indexA].v,
            r = o.velocities[this.m_indexA].w,
            i = o.velocities[this.m_indexB].v,
            b = o.velocities[this.m_indexB].w,
            n = this.m_invMassA,
            p = this.m_invMassB,
            s = this.m_invIA,
            a = this.m_invIB,
            d = o.step.dt,
            l = -this.m_angularMass * (b - r),
            x = this.m_angularImpulse;
        t = d * this.m_maxTorque, this.m_angularImpulse = box2d.b2Clamp(this.m_angularImpulse + l, -t, t),
            r -= s * (l = this.m_angularImpulse - x), b += a * l, t = box2d.b2Sub_V2_V2(box2d.b2AddCross_V2_S_V2(i, b, this.m_rB, box2d.b2Vec2.s_t0), box2d.b2AddCross_V2_S_V2(e, r, this.m_rA, box2d.b2Vec2.s_t1), box2d.b2FrictionJoint.prototype.SolveVelocityConstraints.s_Cdot),
            l = box2d.b2Mul_M22_V2(this.m_linearMass, t, box2d.b2FrictionJoint.prototype.SolveVelocityConstraints.s_impulseV).SelfNeg(),
            x = box2d.b2FrictionJoint.prototype.SolveVelocityConstraints.s_oldImpulseV.Copy(this.m_linearImpulse),
            this.m_linearImpulse.SelfAdd(l), t = d * this.m_maxForce, this.m_linearImpulse.LengthSquared() > t * t && (this.m_linearImpulse.Normalize(),
                this.m_linearImpulse.SelfMul(t)), box2d.b2Sub_V2_V2(this.m_linearImpulse, x, l),
            e.SelfMulSub(n, l), r -= s * box2d.b2Cross_V2_V2(this.m_rA, l), i.SelfMulAdd(p, l),
            b += a * box2d.b2Cross_V2_V2(this.m_rB, l), o.velocities[this.m_indexA].w = r, o.velocities[this.m_indexB].w = b;
    }, goog.exportProperty(box2d.b2FrictionJoint.prototype, "SolveVelocityConstraints", box2d.b2FrictionJoint.prototype.SolveVelocityConstraints),
    box2d.b2FrictionJoint.prototype.SolveVelocityConstraints.s_Cdot = new box2d.b2Vec2(),
    box2d.b2FrictionJoint.prototype.SolveVelocityConstraints.s_impulseV = new box2d.b2Vec2(),
    box2d.b2FrictionJoint.prototype.SolveVelocityConstraints.s_oldImpulseV = new box2d.b2Vec2(),
    box2d.b2FrictionJoint.prototype.SolvePositionConstraints = function(o) {
        return !0;
    }, goog.exportProperty(box2d.b2FrictionJoint.prototype, "SolvePositionConstraints", box2d.b2FrictionJoint.prototype.SolvePositionConstraints),
    box2d.b2FrictionJoint.prototype.GetAnchorA = function(o) {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, o);
    }, goog.exportProperty(box2d.b2FrictionJoint.prototype, "GetAnchorA", box2d.b2FrictionJoint.prototype.GetAnchorA),
    box2d.b2FrictionJoint.prototype.GetAnchorB = function(o) {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, o);
    }, goog.exportProperty(box2d.b2FrictionJoint.prototype, "GetAnchorB", box2d.b2FrictionJoint.prototype.GetAnchorB),
    box2d.b2FrictionJoint.prototype.GetReactionForce = function(o, t) {
        return t.Set(o * this.m_linearImpulse.x, o * this.m_linearImpulse.y);
    }, goog.exportProperty(box2d.b2FrictionJoint.prototype, "GetReactionForce", box2d.b2FrictionJoint.prototype.GetReactionForce),
    box2d.b2FrictionJoint.prototype.GetReactionTorque = function(o) {
        return o * this.m_angularImpulse;
    }, goog.exportProperty(box2d.b2FrictionJoint.prototype, "GetReactionTorque", box2d.b2FrictionJoint.prototype.GetReactionTorque),
    box2d.b2FrictionJoint.prototype.GetLocalAnchorA = function(o) {
        return o.Copy(this.m_localAnchorA);
    }, goog.exportProperty(box2d.b2FrictionJoint.prototype, "GetLocalAnchorA", box2d.b2FrictionJoint.prototype.GetLocalAnchorA),
    box2d.b2FrictionJoint.prototype.GetLocalAnchorB = function(o) {
        return o.Copy(this.m_localAnchorB);
    }, goog.exportProperty(box2d.b2FrictionJoint.prototype, "GetLocalAnchorB", box2d.b2FrictionJoint.prototype.GetLocalAnchorB),
    box2d.b2FrictionJoint.prototype.SetMaxForce = function(o) {
        this.m_maxForce = o;
    }, goog.exportProperty(box2d.b2FrictionJoint.prototype, "SetMaxForce", box2d.b2FrictionJoint.prototype.SetMaxForce),
    box2d.b2FrictionJoint.prototype.GetMaxForce = function() {
        return this.m_maxForce;
    }, goog.exportProperty(box2d.b2FrictionJoint.prototype, "GetMaxForce", box2d.b2FrictionJoint.prototype.GetMaxForce),
    box2d.b2FrictionJoint.prototype.SetMaxTorque = function(o) {
        this.m_maxTorque = o;
    }, goog.exportProperty(box2d.b2FrictionJoint.prototype, "SetMaxTorque", box2d.b2FrictionJoint.prototype.SetMaxTorque),
    box2d.b2FrictionJoint.prototype.GetMaxTorque = function() {
        return this.m_maxTorque;
    }, goog.exportProperty(box2d.b2FrictionJoint.prototype, "GetMaxTorque", box2d.b2FrictionJoint.prototype.GetMaxTorque),
    box2d.b2FrictionJoint.prototype.Dump = function() {
        if (box2d.DEBUG) {
            var o = this.m_bodyA.m_islandIndex,
                t = this.m_bodyB.m_islandIndex;
            box2d.b2Log("  /*box2d.b2FrictionJointDef*/ var jd = new box2d.b2FrictionJointDef();\n"),
                box2d.b2Log("  jd.bodyA = bodies[%d];\n", o), box2d.b2Log("  jd.bodyB = bodies[%d];\n", t),
                box2d.b2Log("  jd.collideConnected = %s;\n", this.m_collideConnected ? "true" : "false"),
                box2d.b2Log("  jd.localAnchorA.Set(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y),
                box2d.b2Log("  jd.localAnchorB.Set(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y),
                box2d.b2Log("  jd.maxForce = %.15f;\n", this.m_maxForce), box2d.b2Log("  jd.maxTorque = %.15f;\n", this.m_maxTorque),
                box2d.b2Log("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index);
        }
    }, goog.exportProperty(box2d.b2FrictionJoint.prototype, "Dump", box2d.b2FrictionJoint.prototype.Dump),
    box2d.b2JointFactory = {}, box2d.b2JointFactory.Create = function(o, t) {
        var e = null;
        switch (o.type) {
            case box2d.b2JointType.e_distanceJoint:
                e = new box2d.b2DistanceJoint(o instanceof box2d.b2DistanceJointDef ? o : null);
                break;

            case box2d.b2JointType.e_mouseJoint:
                e = new box2d.b2MouseJoint(o instanceof box2d.b2MouseJointDef ? o : null);
                break;

            case box2d.b2JointType.e_prismaticJoint:
                e = new box2d.b2PrismaticJoint(o instanceof box2d.b2PrismaticJointDef ? o : null);
                break;

            case box2d.b2JointType.e_revoluteJoint:
                e = new box2d.b2RevoluteJoint(o instanceof box2d.b2RevoluteJointDef ? o : null);
                break;

            case box2d.b2JointType.e_pulleyJoint:
                e = new box2d.b2PulleyJoint(o instanceof box2d.b2PulleyJointDef ? o : null);
                break;

            case box2d.b2JointType.e_gearJoint:
                e = new box2d.b2GearJoint(o instanceof box2d.b2GearJointDef ? o : null);
                break;

            case box2d.b2JointType.e_wheelJoint:
                e = new box2d.b2WheelJoint(o instanceof box2d.b2WheelJointDef ? o : null);
                break;

            case box2d.b2JointType.e_weldJoint:
                e = new box2d.b2WeldJoint(o instanceof box2d.b2WeldJointDef ? o : null);
                break;

            case box2d.b2JointType.e_frictionJoint:
                e = new box2d.b2FrictionJoint(o instanceof box2d.b2FrictionJointDef ? o : null);
                break;

            case box2d.b2JointType.e_ropeJoint:
                e = new box2d.b2RopeJoint(o instanceof box2d.b2RopeJointDef ? o : null);
                break;

            case box2d.b2JointType.e_motorJoint:
                e = new box2d.b2MotorJoint(o instanceof box2d.b2MotorJointDef ? o : null);
                break;

            case box2d.b2JointType.e_areaJoint:
                e = new box2d.b2AreaJoint(o instanceof box2d.b2AreaJointDef ? o : null);
                break;

            default:
                box2d.ENABLE_ASSERTS && box2d.b2Assert(!1);
        }
        return e;
    }, goog.exportSymbol("box2d.b2JointFactory.Create", box2d.b2JointFactory.Create),
    box2d.b2JointFactory.Destroy = function(o, t) {}, goog.exportSymbol("box2d.b2JointFactory.Destroy", box2d.b2JointFactory.Destroy),
    box2d.b2World = function(o) {
        this.m_flag_clearForces = !0, this.m_contactManager = new box2d.b2ContactManager(),
            this.m_gravity = o.Clone(), this.m_out_gravity = new box2d.b2Vec2(), this.m_allowSleep = !0,
            this.m_debugDraw = this.m_destructionListener = null, this.m_continuousPhysics = this.m_warmStarting = !0,
            this.m_subStepping = !1, this.m_stepComplete = !0, this.m_profile = new box2d.b2Profile(),
            this.m_island = new box2d.b2Island(), this.s_stack = [];
    }, goog.exportSymbol("box2d.b2World", box2d.b2World), box2d.b2World.prototype.m_flag_newFixture = !1,
    goog.exportProperty(box2d.b2World.prototype, "m_flag_newFixture", box2d.b2World.prototype.m_flag_newFixture),
    box2d.b2World.prototype.m_flag_locked = !1, goog.exportProperty(box2d.b2World.prototype, "m_flag_locked", box2d.b2World.prototype.m_flag_locked),
    box2d.b2World.prototype.m_flag_clearForces = !1, goog.exportProperty(box2d.b2World.prototype, "m_flag_clearForces", box2d.b2World.prototype.m_flag_clearForces),
    box2d.b2World.prototype.m_contactManager = null, goog.exportProperty(box2d.b2World.prototype, "m_contactManager", box2d.b2World.prototype.m_contactManager),
    box2d.b2World.prototype.m_bodyList = null, goog.exportProperty(box2d.b2World.prototype, "m_bodyList", box2d.b2World.prototype.m_bodyList),
    box2d.b2World.prototype.m_jointList = null, goog.exportProperty(box2d.b2World.prototype, "m_jointList", box2d.b2World.prototype.m_jointList),
    box2d.b2World.prototype.m_particleSystemList = null, goog.exportProperty(box2d.b2World.prototype, "m_particleSystemList", box2d.b2World.prototype.m_particleSystemList),
    box2d.b2World.prototype.m_bodyCount = 0, goog.exportProperty(box2d.b2World.prototype, "m_bodyCount", box2d.b2World.prototype.m_bodyCount),
    box2d.b2World.prototype.m_jointCount = 0, goog.exportProperty(box2d.b2World.prototype, "m_jointCount", box2d.b2World.prototype.m_jointCount),
    box2d.b2World.prototype.m_gravity = null, goog.exportProperty(box2d.b2World.prototype, "m_gravity", box2d.b2World.prototype.m_gravity),
    box2d.b2World.prototype.m_out_gravity = null, goog.exportProperty(box2d.b2World.prototype, "m_out_gravity", box2d.b2World.prototype.m_out_gravity),
    box2d.b2World.prototype.m_allowSleep = !0, goog.exportProperty(box2d.b2World.prototype, "m_allowSleep", box2d.b2World.prototype.m_allowSleep),
    box2d.b2World.prototype.m_destructionListener = null, goog.exportProperty(box2d.b2World.prototype, "m_destructionListener", box2d.b2World.prototype.m_destructionListener),
    box2d.b2World.prototype.m_debugDraw = null, goog.exportProperty(box2d.b2World.prototype, "m_debugDraw", box2d.b2World.prototype.m_debugDraw),
    box2d.b2World.prototype.m_inv_dt0 = 0, goog.exportProperty(box2d.b2World.prototype, "m_inv_dt0", box2d.b2World.prototype.m_inv_dt0),
    box2d.b2World.prototype.m_warmStarting = !0, goog.exportProperty(box2d.b2World.prototype, "m_warmStarting", box2d.b2World.prototype.m_warmStarting),
    box2d.b2World.prototype.m_continuousPhysics = !0, goog.exportProperty(box2d.b2World.prototype, "m_continuousPhysics", box2d.b2World.prototype.m_continuousPhysics),
    box2d.b2World.prototype.m_subStepping = !1, goog.exportProperty(box2d.b2World.prototype, "m_subStepping", box2d.b2World.prototype.m_subStepping),
    box2d.b2World.prototype.m_stepComplete = !0, goog.exportProperty(box2d.b2World.prototype, "m_stepComplete", box2d.b2World.prototype.m_stepComplete),
    box2d.b2World.prototype.m_profile = null, goog.exportProperty(box2d.b2World.prototype, "m_profile", box2d.b2World.prototype.m_profile),
    box2d.b2World.prototype.m_island = null, goog.exportProperty(box2d.b2World.prototype, "m_island", box2d.b2World.prototype.m_island),
    box2d.b2World.prototype.s_stack = null, goog.exportProperty(box2d.b2World.prototype, "s_stack", box2d.b2World.prototype.s_stack),
    box2d.b2World.prototype.m_controllerList = null, goog.exportProperty(box2d.b2World.prototype, "m_controllerList", box2d.b2World.prototype.m_controllerList),
    box2d.b2World.prototype.m_controllerCount = 0, goog.exportProperty(box2d.b2World.prototype, "m_controllerCount", box2d.b2World.prototype.m_controllerCount),
    box2d.b2World.prototype.SetAllowSleeping = function(o) {
        if (o !== this.m_allowSleep && (this.m_allowSleep = o, !this.m_allowSleep))
            for (o = this.m_bodyList; o; o = o.m_next) o.SetAwake(!0);
    }, goog.exportProperty(box2d.b2World.prototype, "SetAllowSleeping", box2d.b2World.prototype.SetAllowSleeping),
    box2d.b2World.prototype.GetAllowSleeping = function() {
        return this.m_allowSleep;
    }, goog.exportProperty(box2d.b2World.prototype, "GetAllowSleeping", box2d.b2World.prototype.GetAllowSleeping),
    box2d.b2World.prototype.SetWarmStarting = function(o) {
        this.m_warmStarting = o;
    }, goog.exportProperty(box2d.b2World.prototype, "SetWarmStarting", box2d.b2World.prototype.SetWarmStarting),
    box2d.b2World.prototype.GetWarmStarting = function() {
        return this.m_warmStarting;
    }, goog.exportProperty(box2d.b2World.prototype, "GetWarmStarting", box2d.b2World.prototype.GetWarmStarting),
    box2d.b2World.prototype.SetContinuousPhysics = function(o) {
        this.m_continuousPhysics = o;
    }, goog.exportProperty(box2d.b2World.prototype, "SetContinuousPhysics", box2d.b2World.prototype.SetContinuousPhysics),
    box2d.b2World.prototype.GetContinuousPhysics = function() {
        return this.m_continuousPhysics;
    }, goog.exportProperty(box2d.b2World.prototype, "GetContinuousPhysics", box2d.b2World.prototype.GetContinuousPhysics),
    box2d.b2World.prototype.SetSubStepping = function(o) {
        this.m_subStepping = o;
    }, goog.exportProperty(box2d.b2World.prototype, "SetSubStepping", box2d.b2World.prototype.SetSubStepping),
    box2d.b2World.prototype.GetSubStepping = function() {
        return this.m_subStepping;
    }, goog.exportProperty(box2d.b2World.prototype, "GetSubStepping", box2d.b2World.prototype.GetSubStepping),
    box2d.b2World.prototype.GetBodyList = function() {
        return this.m_bodyList;
    }, goog.exportProperty(box2d.b2World.prototype, "GetBodyList", box2d.b2World.prototype.GetBodyList),
    box2d.b2World.prototype.GetJointList = function() {
        return this.m_jointList;
    }, goog.exportProperty(box2d.b2World.prototype, "GetJointList", box2d.b2World.prototype.GetJointList),
    box2d.b2World.prototype.GetParticleSystemList = function() {
        return this.m_particleSystemList;
    }, goog.exportProperty(box2d.b2World.prototype, "GetParticleSystemList", box2d.b2World.prototype.GetParticleSystemList),
    box2d.b2World.prototype.GetContactList = function() {
        return this.m_contactManager.m_contactList;
    }, goog.exportProperty(box2d.b2World.prototype, "GetContactList", box2d.b2World.prototype.GetContactList),
    box2d.b2World.prototype.GetBodyCount = function() {
        return this.m_bodyCount;
    }, goog.exportProperty(box2d.b2World.prototype, "GetBodyCount", box2d.b2World.prototype.GetBodyCount),
    box2d.b2World.prototype.GetJointCount = function() {
        return this.m_jointCount;
    }, goog.exportProperty(box2d.b2World.prototype, "GetJointCount", box2d.b2World.prototype.GetJointCount),
    box2d.b2World.prototype.GetContactCount = function() {
        return this.m_contactManager.m_contactCount;
    }, goog.exportProperty(box2d.b2World.prototype, "GetContactCount", box2d.b2World.prototype.GetContactCount),
    box2d.b2World.prototype.SetGravity = function(o, t) {
        if (t = t || !0, (this.m_gravity.x !== o.x || this.m_gravity.y !== o.y) && (this.m_gravity.Copy(o),
                t))
            for (var e = this.m_bodyList; e; e = e.m_next) e.SetAwake(!0);
    }, goog.exportProperty(box2d.b2World.prototype, "SetGravity", box2d.b2World.prototype.SetGravity),
    box2d.b2World.prototype.GetGravity = function(o) {
        return (o = o || this.m_out_gravity).Copy(this.m_gravity);
    }, goog.exportProperty(box2d.b2World.prototype, "GetGravity", box2d.b2World.prototype.GetGravity),
    box2d.b2World.prototype.IsLocked = function() {
        return this.m_flag_locked;
    }, goog.exportProperty(box2d.b2World.prototype, "IsLocked", box2d.b2World.prototype.IsLocked),
    box2d.b2World.prototype.SetAutoClearForces = function(o) {
        this.m_flag_clearForces = o;
    }, goog.exportProperty(box2d.b2World.prototype, "SetAutoClearForces", box2d.b2World.prototype.SetAutoClearForces),
    box2d.b2World.prototype.GetAutoClearForces = function() {
        return this.m_flag_clearForces;
    }, goog.exportProperty(box2d.b2World.prototype, "GetAutoClearForces", box2d.b2World.prototype.GetAutoClearForces),
    box2d.b2World.prototype.GetContactManager = function() {
        return this.m_contactManager;
    }, goog.exportProperty(box2d.b2World.prototype, "GetContactManager", box2d.b2World.prototype.GetContactManager),
    box2d.b2World.prototype.GetProfile = function() {
        return this.m_profile;
    }, goog.exportProperty(box2d.b2World.prototype, "GetProfile", box2d.b2World.prototype.GetProfile),
    box2d.b2World.prototype.SetDestructionListener = function(o) {
        this.m_destructionListener = o;
    }, goog.exportProperty(box2d.b2World.prototype, "SetDestructionListener", box2d.b2World.prototype.SetDestructionListener),
    box2d.b2World.prototype.SetContactFilter = function(o) {
        this.m_contactManager.m_contactFilter = o;
    }, goog.exportProperty(box2d.b2World.prototype, "SetContactFilter", box2d.b2World.prototype.SetContactFilter),
    box2d.b2World.prototype.SetContactListener = function(o) {
        this.m_contactManager.m_contactListener = o;
    }, goog.exportProperty(box2d.b2World.prototype, "SetContactListener", box2d.b2World.prototype.SetContactListener),
    box2d.b2World.prototype.SetDebugDraw = function(o) {
        this.m_debugDraw = o;
    }, goog.exportProperty(box2d.b2World.prototype, "SetDebugDraw", box2d.b2World.prototype.SetDebugDraw),
    box2d.b2World.prototype.CreateBody = function(o) {
        return box2d.ENABLE_ASSERTS && box2d.b2Assert(!this.IsLocked()), this.IsLocked() ? null : ((o = new box2d.b2Body(o, this)).m_prev = null,
            (o.m_next = this.m_bodyList) && (this.m_bodyList.m_prev = o), this.m_bodyList = o,
            ++this.m_bodyCount, o);
    }, goog.exportProperty(box2d.b2World.prototype, "CreateBody", box2d.b2World.prototype.CreateBody),
    box2d.b2World.prototype.DestroyBody = function(o) {
        if (box2d.ENABLE_ASSERTS && box2d.b2Assert(0 < this.m_bodyCount), box2d.ENABLE_ASSERTS && box2d.b2Assert(!this.IsLocked()), !this.IsLocked()) {
            for (var t = o.m_jointList; t;) {
                var e = t;
                t = t.next;
                this.m_destructionListener && this.m_destructionListener.SayGoodbyeJoint(e.joint),
                    this.DestroyJoint(e.joint), o.m_jointList = t;
            }
            for (o.m_jointList = null, t = o.m_controllerList; t;) e = t, t = t.nextController,
                e.controller.RemoveBody(o);
            for (t = o.m_contactList; t;) e = t, t = t.next, this.m_contactManager.Destroy(e.contact);
            for (o.m_contactList = null, t = o.m_fixtureList; t;) e = t, t = t.m_next, this.m_destructionListener && this.m_destructionListener.SayGoodbyeFixture(e),
                e.DestroyProxies(this.m_contactManager.m_broadPhase), e.Destroy(), o.m_fixtureList = t,
                --o.m_fixtureCount;
            o.m_fixtureList = null, o.m_fixtureCount = 0, o.m_prev && (o.m_prev.m_next = o.m_next),
                o.m_next && (o.m_next.m_prev = o.m_prev), o === this.m_bodyList && (this.m_bodyList = o.m_next),
                --this.m_bodyCount;
        }
    }, goog.exportProperty(box2d.b2World.prototype, "DestroyBody", box2d.b2World.prototype.DestroyBody),
    box2d.b2World.prototype.CreateJoint = function(o) {
        if (box2d.ENABLE_ASSERTS && box2d.b2Assert(!this.IsLocked()), this.IsLocked()) return null;
        var t = box2d.b2JointFactory.Create(o, null);
        t.m_prev = null, (t.m_next = this.m_jointList) && (this.m_jointList.m_prev = t),
            this.m_jointList = t, ++this.m_jointCount, t.m_edgeA.joint = t, t.m_edgeA.other = t.m_bodyB,
            t.m_edgeA.prev = null, (t.m_edgeA.next = t.m_bodyA.m_jointList) && (t.m_bodyA.m_jointList.prev = t.m_edgeA),
            t.m_bodyA.m_jointList = t.m_edgeA, t.m_edgeB.joint = t, t.m_edgeB.other = t.m_bodyA,
            t.m_edgeB.prev = null, (t.m_edgeB.next = t.m_bodyB.m_jointList) && (t.m_bodyB.m_jointList.prev = t.m_edgeB),
            t.m_bodyB.m_jointList = t.m_edgeB;
        var e = o.bodyA,
            r = o.bodyB;
        if (!o.collideConnected)
            for (o = r.GetContactList(); o;) o.other === e && o.contact.FlagForFiltering(),
                o = o.next;
        return t;
    }, goog.exportProperty(box2d.b2World.prototype, "CreateJoint", box2d.b2World.prototype.CreateJoint),
    box2d.b2World.prototype.DestroyJoint = function(o) {
        if (box2d.ENABLE_ASSERTS && box2d.b2Assert(!this.IsLocked()), !this.IsLocked()) {
            var t = o.m_collideConnected;
            o.m_prev && (o.m_prev.m_next = o.m_next), o.m_next && (o.m_next.m_prev = o.m_prev),
                o === this.m_jointList && (this.m_jointList = o.m_next);
            var e = o.m_bodyA,
                r = o.m_bodyB;
            if (e.SetAwake(!0), r.SetAwake(!0), o.m_edgeA.prev && (o.m_edgeA.prev.next = o.m_edgeA.next),
                o.m_edgeA.next && (o.m_edgeA.next.prev = o.m_edgeA.prev), o.m_edgeA === e.m_jointList && (e.m_jointList = o.m_edgeA.next),
                o.m_edgeA.prev = null, o.m_edgeA.next = null, o.m_edgeB.prev && (o.m_edgeB.prev.next = o.m_edgeB.next),
                o.m_edgeB.next && (o.m_edgeB.next.prev = o.m_edgeB.prev), o.m_edgeB === r.m_jointList && (r.m_jointList = o.m_edgeB.next),
                o.m_edgeB.prev = null, o.m_edgeB.next = null, box2d.b2JointFactory.Destroy(o, null),
                box2d.ENABLE_ASSERTS && box2d.b2Assert(0 < this.m_jointCount), --this.m_jointCount, !t)
                for (o = r.GetContactList(); o;) o.other === e && o.contact.FlagForFiltering(),
                    o = o.next;
        }
    }, goog.exportProperty(box2d.b2World.prototype, "DestroyJoint", box2d.b2World.prototype.DestroyJoint),
    box2d.b2World.prototype.CreateParticleSystem = function(o) {
        return box2d.ENABLE_ASSERTS && box2d.b2Assert(!this.IsLocked()), this.IsLocked() ? null : ((o = new box2d.b2ParticleSystem(o, this)).m_prev = null,
            (o.m_next = this.m_particleSystemList) && (this.m_particleSystemList.m_prev = o),
            this.m_particleSystemList = o);
    }, goog.exportProperty(box2d.b2World.prototype, "CreateParticleSystem", box2d.b2World.prototype.CreateParticleSystem),
    box2d.b2World.prototype.DestroyParticleSystem = function(o) {
        box2d.ENABLE_ASSERTS && box2d.b2Assert(!this.IsLocked()), this.IsLocked() || (o.m_prev && (o.m_prev.m_next = o.m_next),
            o.m_next && (o.m_next.m_prev = o.m_prev), o === this.m_particleSystemList && (this.m_particleSystemList = o.m_next));
    }, goog.exportProperty(box2d.b2World.prototype, "DestroyParticleSystem", box2d.b2World.prototype.DestroyParticleSystem),
    box2d.b2World.prototype.Solve = function(o) {
        for (var t = this.m_bodyList; t; t = t.m_next) t.m_xf0.Copy(t.m_xf);
        for (var e = this.m_controllerList; e; e = e.m_next) e.Step(o);
        for (this.m_profile.solveInit = 0, this.m_profile.solveVelocity = 0, this.m_profile.solvePosition = 0,
            (e = this.m_island).Initialize(this.m_bodyCount, this.m_contactManager.m_contactCount, this.m_jointCount, null, this.m_contactManager.m_contactListener),
            t = this.m_bodyList; t; t = t.m_next) t.m_flag_islandFlag = !1;
        for (var r = this.m_contactManager.m_contactList; r; r = r.m_next) r.m_flag_islandFlag = !1;
        for (r = this.m_jointList; r; r = r.m_next) r.m_islandFlag = !1;
        r = this.m_bodyCount;
        for (var i = this.s_stack, b = this.m_bodyList; b; b = b.m_next)
            if (!b.m_flag_islandFlag && b.IsAwake() && b.IsActive() && b.GetType() !== box2d.b2BodyType.b2_staticBody) {
                e.Clear();
                var n = 0;
                for (i[n++] = b, b.m_flag_islandFlag = !0; 0 < n;)
                    if (t = i[--n], box2d.ENABLE_ASSERTS && box2d.b2Assert(t.IsActive()),
                        e.AddBody(t), t.SetAwake(!0), t.GetType() !== box2d.b2BodyType.b2_staticBody) {
                        for (var p = t.m_contactList; p; p = p.next) {
                            var s = p.contact;
                            if (!s.m_flag_islandFlag && s.IsEnabled() && s.IsTouching()) {
                                var a = s.m_fixtureB.m_isSensor;
                                s.m_fixtureA.m_isSensor || a || (e.AddContact(s), s.m_flag_islandFlag = !0, (s = p.other).m_flag_islandFlag || (box2d.ENABLE_ASSERTS && box2d.b2Assert(n < r),
                                    i[n++] = s, s.m_flag_islandFlag = !0));
                            }
                        }
                        for (t = t.m_jointList; t; t = t.next) t.joint.m_islandFlag || (s = t.other).IsActive() && (e.AddJoint(t.joint),
                            t.joint.m_islandFlag = !0, s.m_flag_islandFlag || (box2d.ENABLE_ASSERTS && box2d.b2Assert(n < r),
                                i[n++] = s, s.m_flag_islandFlag = !0));
                    }
                for (t = new box2d.b2Profile(), e.Solve(t, o, this.m_gravity, this.m_allowSleep),
                    this.m_profile.solveInit += t.solveInit, this.m_profile.solveVelocity += t.solveVelocity,
                    this.m_profile.solvePosition += t.solvePosition, n = 0; n < e.m_bodyCount; ++n)(t = e.m_bodies[n]).GetType() === box2d.b2BodyType.b2_staticBody && (t.m_flag_islandFlag = !1);
            }
        for (n = 0; n < i.length && i[n]; ++n) i[n] = null;
        for (o = new box2d.b2Timer(), t = this.m_bodyList; t; t = t.m_next) t.m_flag_islandFlag && t.GetType() !== box2d.b2BodyType.b2_staticBody && t.SynchronizeFixtures();
        this.m_contactManager.FindNewContacts(), this.m_profile.broadphase = o.GetMilliseconds();
    }, goog.exportProperty(box2d.b2World.prototype, "Solve", box2d.b2World.prototype.Solve),
    box2d.b2World.prototype.SolveTOI = function(o) {
        var t = this.m_island;
        if (t.Initialize(2 * box2d.b2_maxTOIContacts, box2d.b2_maxTOIContacts, 0, null, this.m_contactManager.m_contactListener),
            this.m_stepComplete) {
            for (var e = this.m_bodyList; e; e = e.m_next) e.m_flag_islandFlag = !1, e.m_sweep.alpha0 = 0;
            for (var r = this.m_contactManager.m_contactList; r; r = r.m_next) r.m_flag_toiFlag = r.m_flag_islandFlag = !1,
                r.m_toiCount = 0, r.m_toi = 1;
        }
        for (;;) {
            var i = null;
            for (e = 1, r = this.m_contactManager.m_contactList; r; r = r.m_next)
                if (r.IsEnabled() && !(r.m_toiCount > box2d.b2_maxSubSteps)) {
                    var b = 1;
                    if (r.m_flag_toiFlag) b = r.m_toi;
                    else {
                        var n = r.GetFixtureA(),
                            p = r.GetFixtureB();
                        if (n.IsSensor() || p.IsSensor()) continue;
                        b = n.GetBody();
                        var s = p.GetBody(),
                            a = b.m_type,
                            d = s.m_type;
                        box2d.ENABLE_ASSERTS && box2d.b2Assert(a !== box2d.b2BodyType.b2_staticBody || d !== box2d.b2BodyType.b2_staticBody);
                        var l = b.IsAwake() && a !== box2d.b2BodyType.b2_staticBody,
                            x = s.IsAwake() && d !== box2d.b2BodyType.b2_staticBody;
                        if (!l && !x) continue;
                        if (a = b.IsBullet() || a !== box2d.b2BodyType.b2_dynamicBody, d = s.IsBullet() || d !== box2d.b2BodyType.b2_dynamicBody, !a && !d) continue;
                        d = b.m_sweep.alpha0, b.m_sweep.alpha0 < s.m_sweep.alpha0 ? (d = s.m_sweep.alpha0,
                                b.m_sweep.Advance(d)) : s.m_sweep.alpha0 < b.m_sweep.alpha0 && (d = b.m_sweep.alpha0,
                                s.m_sweep.Advance(d)), box2d.ENABLE_ASSERTS && box2d.b2Assert(1 > d), l = r.GetChildIndexA(),
                            x = r.GetChildIndexB(), (a = box2d.b2World.prototype.SolveTOI.s_toi_input).proxyA.SetShape(n.GetShape(), l),
                            a.proxyB.SetShape(p.GetShape(), x), a.sweepA.Copy(b.m_sweep), a.sweepB.Copy(s.m_sweep),
                            a.tMax = 1, b = box2d.b2World.prototype.SolveTOI.s_toi_output, box2d.b2TimeOfImpact(b, a),
                            s = b.t, b = b.state === box2d.b2TOIOutputState.e_touching ? box2d.b2Min(d + (1 - d) * s, 1) : 1,
                            r.m_toi = b, r.m_flag_toiFlag = !0;
                    }
                    b < e && (i = r, e = b);
                }
            if (null === i || 1 - 10 * box2d.b2_epsilon < e) {
                this.m_stepComplete = !0;
                break;
            }
            if (n = i.GetFixtureA(), p = i.GetFixtureB(), b = n.GetBody(), s = p.GetBody(),
                r = box2d.b2World.prototype.SolveTOI.s_backup1.Copy(b.m_sweep), n = box2d.b2World.prototype.SolveTOI.s_backup2.Copy(s.m_sweep),
                b.Advance(e), s.Advance(e), i.Update(this.m_contactManager.m_contactListener), i.m_flag_toiFlag = !1,
                ++i.m_toiCount, i.IsEnabled() && i.IsTouching()) {
                for (b.SetAwake(!0), s.SetAwake(!0), t.Clear(), t.AddBody(b), t.AddBody(s), t.AddContact(i),
                    b.m_flag_islandFlag = !0, s.m_flag_islandFlag = !0, i.m_flag_islandFlag = !0, i = 0; 2 > i; ++i)
                    if ((r = 0 === i ? b : s).m_type === box2d.b2BodyType.b2_dynamicBody)
                        for (n = r.m_contactList; n && t.m_bodyCount !== t.m_bodyCapacity && t.m_contactCount !== t.m_contactCapacity; n = n.next) !(p = n.contact).m_flag_islandFlag && ((d = n.other).m_type !== box2d.b2BodyType.b2_dynamicBody || r.IsBullet() || d.IsBullet()) && (a = p.m_fixtureB.m_isSensor,
                            p.m_fixtureA.m_isSensor || a || (a = box2d.b2World.prototype.SolveTOI.s_backup.Copy(d.m_sweep),
                                d.m_flag_islandFlag || d.Advance(e), p.Update(this.m_contactManager.m_contactListener),
                                p.IsEnabled() && p.IsTouching() ? (p.m_flag_islandFlag = !0, t.AddContact(p), d.m_flag_islandFlag || (d.m_flag_islandFlag = !0,
                                    d.m_type !== box2d.b2BodyType.b2_staticBody && d.SetAwake(!0), t.AddBody(d))) : (d.m_sweep.Copy(a),
                                    d.SynchronizeTransform())));
                for ((i = box2d.b2World.prototype.SolveTOI.s_subStep).dt = (1 - e) * o.dt, i.inv_dt = 1 / i.dt,
                    i.dtRatio = 1, i.positionIterations = 20, i.velocityIterations = o.velocityIterations,
                    i.particleIterations = o.particleIterations, i.warmStarting = !1, t.SolveTOI(i, b.m_islandIndex, s.m_islandIndex),
                    i = 0; i < t.m_bodyCount; ++i)
                    if ((r = t.m_bodies[i]).m_flag_islandFlag = !1, r.m_type === box2d.b2BodyType.b2_dynamicBody)
                        for (r.SynchronizeFixtures(),
                            n = r.m_contactList; n; n = n.next) n.contact.m_flag_toiFlag = n.contact.m_flag_islandFlag = !1;
                if (this.m_contactManager.FindNewContacts(), this.m_subStepping) {
                    this.m_stepComplete = !1;
                    break;
                }
            } else i.SetEnabled(!1), b.m_sweep.Copy(r), s.m_sweep.Copy(n), b.SynchronizeTransform(),
                s.SynchronizeTransform();
        }
    }, goog.exportProperty(box2d.b2World.prototype, "SolveTOI", box2d.b2World.prototype.SolveTOI),
    box2d.b2World.prototype.SolveTOI.s_subStep = new box2d.b2TimeStep(), box2d.b2World.prototype.SolveTOI.s_backup = new box2d.b2Sweep(),
    box2d.b2World.prototype.SolveTOI.s_backup1 = new box2d.b2Sweep(), box2d.b2World.prototype.SolveTOI.s_backup2 = new box2d.b2Sweep(),
    box2d.b2World.prototype.SolveTOI.s_toi_input = new box2d.b2TOIInput(), box2d.b2World.prototype.SolveTOI.s_toi_output = new box2d.b2TOIOutput(),
    box2d.b2World.prototype.Step = function(o, t, e, r) {
        r = r || this.CalculateReasonableParticleIterations(o);
        var i = new box2d.b2Timer();
        this.m_flag_newFixture && (this.m_contactManager.FindNewContacts(), this.m_flag_newFixture = !1),
            this.m_flag_locked = !0;
        var b = box2d.b2World.prototype.Step.s_step;
        if (b.dt = o, b.velocityIterations = t, b.positionIterations = e, b.particleIterations = r,
            b.inv_dt = 0 < o ? 1 / o : 0, b.dtRatio = this.m_inv_dt0 * o, b.warmStarting = this.m_warmStarting,
            o = new box2d.b2Timer(), this.m_contactManager.Collide(), this.m_profile.collide = o.GetMilliseconds(),
            this.m_stepComplete && 0 < b.dt) {
            for (o = new box2d.b2Timer(), t = this.m_particleSystemList; t; t = t.m_next) t.Solve(b);
            this.Solve(b), this.m_profile.solve = o.GetMilliseconds();
        }
        this.m_continuousPhysics && 0 < b.dt && (o = new box2d.b2Timer(), this.SolveTOI(b),
                this.m_profile.solveTOI = o.GetMilliseconds()), 0 < b.dt && (this.m_inv_dt0 = b.inv_dt),
            this.m_flag_clearForces && this.ClearForces(), this.m_flag_locked = !1, this.m_profile.step = i.GetMilliseconds();
    }, goog.exportProperty(box2d.b2World.prototype, "Step", box2d.b2World.prototype.Step),
    box2d.b2World.prototype.Step.s_step = new box2d.b2TimeStep(), box2d.b2World.prototype.ClearForces = function() {
        for (var o = this.m_bodyList; o; o = o.m_next) o.m_force.SetZero(), o.m_torque = 0;
    }, goog.exportProperty(box2d.b2World.prototype, "ClearForces", box2d.b2World.prototype.ClearForces),
    box2d.b2World.prototype.QueryAABB = function(o, t) {
        var e = this.m_contactManager.m_broadPhase;
        if (e.Query(function(t) {
                return t = e.GetUserData(t), box2d.ENABLE_ASSERTS && box2d.b2Assert(t instanceof box2d.b2FixtureProxy),
                    t = t.fixture, o instanceof box2d.b2QueryCallback ? o.ReportFixture(t) : o(t);
            }, t), o instanceof box2d.b2QueryCallback)
            for (var r = this.m_particleSystemList; r; r = r.m_next) o.ShouldQueryParticleSystem(r) && r.QueryAABB(o, t);
    }, goog.exportProperty(box2d.b2World.prototype, "QueryAABB", box2d.b2World.prototype.QueryAABB),
    box2d.b2World.prototype.QueryShape = function(o, t, e, r) {
        var i = this.m_contactManager.m_broadPhase,
            b = box2d.b2World.prototype.QueryShape.s_aabb;
        if (t.ComputeAABB(b, e, r || 0), i.Query(function(r) {
                return r = i.GetUserData(r), box2d.ENABLE_ASSERTS && box2d.b2Assert(r instanceof box2d.b2FixtureProxy),
                    r = r.fixture, !box2d.b2TestOverlap_Shape(t, 0, r.GetShape(), 0, e, r.GetBody().GetTransform()) || (o instanceof box2d.b2QueryCallback ? o.ReportFixture(r) : o(r));
            }, b), o instanceof box2d.b2QueryCallback)
            for (r = this.m_particleSystemList; r; r = r.m_next) o.ShouldQueryParticleSystem(r) && r.QueryAABB(o, b);
    }, goog.exportProperty(box2d.b2World.prototype, "QueryShape", box2d.b2World.prototype.QueryShape),
    box2d.b2World.prototype.QueryShape.s_aabb = new box2d.b2AABB(), box2d.b2World.prototype.QueryPoint = function(o, t, e) {
        var r = this.m_contactManager.m_broadPhase;
        e = "number" == typeof e ? e : box2d.b2_linearSlop;
        var i = box2d.b2World.prototype.QueryPoint.s_aabb;
        if (i.lowerBound.Set(t.x - e, t.y - e), i.upperBound.Set(t.x + e, t.y + e), r.Query(function(e) {
                return e = r.GetUserData(e), box2d.ENABLE_ASSERTS && box2d.b2Assert(e instanceof box2d.b2FixtureProxy), !(e = e.fixture).TestPoint(t) || (o instanceof box2d.b2QueryCallback ? o.ReportFixture(e) : o(e));
            }, i), o instanceof box2d.b2QueryCallback)
            for (e = this.m_particleSystemList; e; e = e.m_next) o.ShouldQueryParticleSystem(e) && e.QueryAABB(o, i);
    }, goog.exportProperty(box2d.b2World.prototype, "QueryPoint", box2d.b2World.prototype.QueryPoint),
    box2d.b2World.prototype.QueryPoint.s_aabb = new box2d.b2AABB(), box2d.b2World.prototype.RayCast = function(o, t, e) {
        var r = this.m_contactManager.m_broadPhase,
            i = box2d.b2World.prototype.RayCast.s_input;
        if (i.maxFraction = 1, i.p1.Copy(t), i.p2.Copy(e), r.RayCast(function(i, b) {
                var n = r.GetUserData(b);
                box2d.ENABLE_ASSERTS && box2d.b2Assert(n instanceof box2d.b2FixtureProxy);
                var p = n.fixture,
                    s = box2d.b2World.prototype.RayCast.s_output;
                if (p.RayCast(s, i, n.childIndex)) {
                    n = s.fraction;
                    var a = box2d.b2World.prototype.RayCast.s_point;
                    return a.Set((1 - n) * t.x + n * e.x, (1 - n) * t.y + n * e.y), o instanceof box2d.b2RayCastCallback ? o.ReportFixture(p, a, s.normal, n) : o(p, a, s.normal, n);
                }
                return i.maxFraction;
            }, i), o instanceof box2d.b2RayCastCallback)
            for (i = this.m_particleSystemList; i; i = i.m_next) o.ShouldQueryParticleSystem(i) && i.RayCast(o, t, e);
    }, goog.exportProperty(box2d.b2World.prototype, "RayCast", box2d.b2World.prototype.RayCast),
    box2d.b2World.prototype.RayCast.s_input = new box2d.b2RayCastInput(), box2d.b2World.prototype.RayCast.s_output = new box2d.b2RayCastOutput(),
    box2d.b2World.prototype.RayCast.s_point = new box2d.b2Vec2(), box2d.b2World.prototype.RayCastOne = function(o, t) {
        var e = null,
            r = 1;
        return this.RayCast(function(o, t, i, b) {
            return b < r && (r = b, e = o), r;
        }, o, t), e;
    }, goog.exportProperty(box2d.b2World.prototype, "RayCastOne", box2d.b2World.prototype.RayCastOne),
    box2d.b2World.prototype.RayCastAll = function(o, t, e) {
        return e.length = 0, this.RayCast(function(o, t, r, i) {
            return e.push(o), 1;
        }, o, t), e;
    }, goog.exportProperty(box2d.b2World.prototype, "RayCastAll", box2d.b2World.prototype.RayCastAll),
    box2d.b2World.prototype.DrawShape = function(o, t) {
        switch ((e = o.GetShape()).m_type) {
            case box2d.b2ShapeType.e_circleShape:
                e = e instanceof box2d.b2CircleShape ? e : null, this.m_debugDraw.DrawSolidCircle(e.m_p, e.m_radius, box2d.b2Vec2.UNITX, t);
                break;

            case box2d.b2ShapeType.e_edgeShape:
                var e = (i = e instanceof box2d.b2EdgeShape ? e : null).m_vertex1,
                    r = i.m_vertex2;
                this.m_debugDraw.DrawSegment(e, r, t);
                break;

            case box2d.b2ShapeType.e_chainShape:
                var i = (e = e instanceof box2d.b2ChainShape ? e : null).m_count,
                    b = e.m_vertices;
                e = b[0];
                this.m_debugDraw.DrawCircle(e, .05, t);
                for (var n = 1; n < i; ++n) r = b[n], this.m_debugDraw.DrawSegment(e, r, t), this.m_debugDraw.DrawCircle(r, .05, t),
                    e = r;
                break;

            case box2d.b2ShapeType.e_polygonShape:
                e = (i = e instanceof box2d.b2PolygonShape ? e : null).m_count, b = i.m_vertices,
                    this.m_debugDraw.DrawSolidPolygon(b, e, t);
        }
    }, goog.exportProperty(box2d.b2World.prototype, "DrawShape", box2d.b2World.prototype.DrawShape),
    box2d.b2World.prototype.DrawJoint = function(o) {
        var t = o.GetBodyA(),
            e = o.GetBodyB(),
            r = t.m_xf.p,
            i = e.m_xf.p,
            b = (e = o.GetAnchorA(box2d.b2World.prototype.DrawJoint.s_p1),
                t = o.GetAnchorB(box2d.b2World.prototype.DrawJoint.s_p2), box2d.b2World.prototype.DrawJoint.s_color.SetRGB(.5, .8, .8));
        switch (o.m_type) {
            case box2d.b2JointType.e_distanceJoint:
                this.m_debugDraw.DrawSegment(e, t, b);
                break;

            case box2d.b2JointType.e_pulleyJoint:
                o = (r = o instanceof box2d.b2PulleyJoint ? o : null).GetGroundAnchorA(box2d.b2World.prototype.DrawJoint.s_s1),
                    r = r.GetGroundAnchorB(box2d.b2World.prototype.DrawJoint.s_s2), this.m_debugDraw.DrawSegment(o, e, b),
                    this.m_debugDraw.DrawSegment(r, t, b), this.m_debugDraw.DrawSegment(o, r, b);
                break;

            case box2d.b2JointType.e_mouseJoint:
                this.m_debugDraw.DrawSegment(e, t, b);
                break;

            default:
                this.m_debugDraw.DrawSegment(r, e, b), this.m_debugDraw.DrawSegment(e, t, b), this.m_debugDraw.DrawSegment(i, t, b);
        }
    }, goog.exportProperty(box2d.b2World.prototype, "DrawJoint", box2d.b2World.prototype.DrawJoint),
    box2d.b2World.prototype.DrawJoint.s_p1 = new box2d.b2Vec2(), box2d.b2World.prototype.DrawJoint.s_p2 = new box2d.b2Vec2(),
    box2d.b2World.prototype.DrawJoint.s_color = new box2d.b2Color(.5, .8, .8), box2d.b2World.prototype.DrawJoint.s_s1 = new box2d.b2Vec2(),
    box2d.b2World.prototype.DrawJoint.s_s2 = new box2d.b2Vec2(), box2d.b2World.prototype.DrawParticleSystem = function(o) {
        var t = o.GetParticleCount();
        if (t) {
            var e = o.GetRadius(),
                r = o.GetPositionBuffer();
            o.m_colorBuffer.data ? (o = o.GetColorBuffer(), this.m_debugDraw.DrawParticles(r, e, o, t)) : this.m_debugDraw.DrawParticles(r, e, null, t);
        }
    }, goog.exportProperty(box2d.b2World.prototype, "DrawParticleSystem", box2d.b2World.prototype.DrawParticleSystem),
    box2d.b2World.prototype.DrawDebugData = function() {
        if (null !== this.m_debugDraw) {
            var o = this.m_debugDraw.GetFlags(),
                t = box2d.b2World.prototype.DrawDebugData.s_color.SetRGB(0, 0, 0);
            if (o & box2d.b2DrawFlags.e_shapeBit)
                for (var e = this.m_bodyList; e; e = e.m_next) {
                    var r = e.m_xf;
                    this.m_debugDraw.PushTransform(r);
                    for (var i = e.GetFixtureList(); i; i = i.m_next) e.IsActive() ? e.GetType() === box2d.b2BodyType.b2_staticBody ? t.SetRGB(.5, .9, .5) : e.GetType() === box2d.b2BodyType.b2_kinematicBody ? t.SetRGB(.5, .5, .9) : e.IsAwake() ? t.SetRGB(.9, .7, .7) : t.SetRGB(.6, .6, .6) : t.SetRGB(.5, .5, .3),
                        this.DrawShape(i, t);
                    this.m_debugDraw.PopTransform(r);
                }
            if (o & box2d.b2DrawFlags.e_particleBit)
                for (e = this.m_particleSystemList; e; e = e.m_next) this.DrawParticleSystem(e);
            if (o & box2d.b2DrawFlags.e_jointBit)
                for (e = this.m_jointList; e; e = e.m_next) this.DrawJoint(e);
            if (o & box2d.b2DrawFlags.e_aabbBit) {
                t.SetRGB(.9, .3, .9);
                r = this.m_contactManager.m_broadPhase;
                var b = box2d.b2World.prototype.DrawDebugData.s_vs;
                for (e = this.m_bodyList; e; e = e.m_next)
                    if (e.IsActive())
                        for (i = e.GetFixtureList(); i; i = i.m_next)
                            for (var n = 0; n < i.m_proxyCount; ++n) {
                                var p = r.GetFatAABB(i.m_proxies[n].proxy);
                                b[0].Set(p.lowerBound.x, p.lowerBound.y), b[1].Set(p.upperBound.x, p.lowerBound.y),
                                    b[2].Set(p.upperBound.x, p.upperBound.y), b[3].Set(p.lowerBound.x, p.upperBound.y),
                                    this.m_debugDraw.DrawPolygon(b, 4, t);
                            }
            }
            if (o & box2d.b2DrawFlags.e_centerOfMassBit)
                for (e = this.m_bodyList; e; e = e.m_next)(r = box2d.b2World.prototype.DrawDebugData.s_xf).q.Copy(e.m_xf.q),
                    r.p.Copy(e.GetWorldCenter()), this.m_debugDraw.DrawTransform(r);
            if (o & box2d.b2DrawFlags.e_controllerBit)
                for (o = this.m_controllerList; o; o = o.m_next) o.Draw(this.m_debugDraw);
        }
    }, goog.exportProperty(box2d.b2World.prototype, "DrawDebugData", box2d.b2World.prototype.DrawDebugData),
    box2d.b2World.prototype.DrawDebugData.s_color = new box2d.b2Color(0, 0, 0), box2d.b2World.prototype.DrawDebugData.s_vs = box2d.b2Vec2.MakeArray(4),
    box2d.b2World.prototype.DrawDebugData.s_xf = new box2d.b2Transform(), box2d.b2World.prototype.SetBroadPhase = function(o) {
        var t = this.m_contactManager.m_broadPhase;
        this.m_contactManager.m_broadPhase = o;
        for (var e = this.m_bodyList; e; e = e.m_next)
            for (var r = e.m_fixtureList; r; r = r.m_next) r.m_proxy = o.CreateProxy(t.GetFatAABB(r.m_proxy), r);
    }, goog.exportProperty(box2d.b2World.prototype, "SetBroadPhase", box2d.b2World.prototype.SetBroadPhase),
    box2d.b2World.prototype.CalculateReasonableParticleIterations = function(o) {
        return null === this.m_particleSystemList ? 1 : box2d.b2CalculateParticleIterations(this.m_gravity.Length(), function(o) {
            var t = box2d.b2_maxFloat;
            for (o = o.GetParticleSystemList(); null !== o; o = o.m_next) t = box2d.b2Min(t, o.GetRadius());
            return t;
        }(this), o);
    }, goog.exportProperty(box2d.b2World.prototype, "CalculateReasonableParticleIterations", box2d.b2World.prototype.CalculateReasonableParticleIterations),
    box2d.b2World.prototype.GetProxyCount = function() {
        return this.m_contactManager.m_broadPhase.GetProxyCount();
    }, goog.exportProperty(box2d.b2World.prototype, "GetProxyCount", box2d.b2World.prototype.GetProxyCount),
    box2d.b2World.prototype.GetTreeHeight = function() {
        return this.m_contactManager.m_broadPhase.GetTreeHeight();
    }, goog.exportProperty(box2d.b2World.prototype, "GetTreeHeight", box2d.b2World.prototype.GetTreeHeight),
    box2d.b2World.prototype.GetTreeBalance = function() {
        return this.m_contactManager.m_broadPhase.GetTreeBalance();
    }, goog.exportProperty(box2d.b2World.prototype, "GetTreeBalance", box2d.b2World.prototype.GetTreeBalance),
    box2d.b2World.prototype.GetTreeQuality = function() {
        return this.m_contactManager.m_broadPhase.GetTreeQuality();
    }, goog.exportProperty(box2d.b2World.prototype, "GetTreeQuality", box2d.b2World.prototype.GetTreeQuality),
    box2d.b2World.prototype.ShiftOrigin = function(o) {
        if (box2d.ENABLE_ASSERTS && box2d.b2Assert(!this.IsLocked()), !this.IsLocked()) {
            for (var t = this.m_bodyList; t; t = t.m_next) t.m_xf.p.SelfSub(o), t.m_sweep.c0.SelfSub(o),
                t.m_sweep.c.SelfSub(o);
            for (t = this.m_jointList; t; t = t.m_next) t.ShiftOrigin(o);
            this.m_contactManager.m_broadPhase.ShiftOrigin(o);
        }
    }, goog.exportProperty(box2d.b2World.prototype, "ShiftOrigin", box2d.b2World.prototype.ShiftOrigin),
    box2d.b2World.prototype.Dump = function() {
        if (box2d.DEBUG && !this.m_flag_locked) {
            box2d.b2Log("/** @type {box2d.b2Vec2} */ var g = new box2d.b2Vec2(%.15f, %.15f);\n", this.m_gravity.x, this.m_gravity.y),
                box2d.b2Log("this.m_world.SetGravity(g);\n"), box2d.b2Log("/** @type {Array.<box2d.b2Body>} */ var bodies = new Array(%d);\n", this.m_bodyCount),
                box2d.b2Log("/** @type {Array.<box2d.b2Joint>} */ var joints = new Array(%d);\n", this.m_jointCount);
            for (var o = 0, t = this.m_bodyList; t; t = t.m_next) t.m_islandIndex = o, t.Dump(),
                ++o;
            for (o = 0, t = this.m_jointList; t; t = t.m_next) t.m_index = o, ++o;
            for (t = this.m_jointList; t; t = t.m_next) t.m_type !== box2d.b2JointType.e_gearJoint && (box2d.b2Log("{\n"),
                t.Dump(), box2d.b2Log("}\n"));
            for (t = this.m_jointList; t; t = t.m_next) t.m_type === box2d.b2JointType.e_gearJoint && (box2d.b2Log("{\n"),
                t.Dump(), box2d.b2Log("}\n"));
        }
    }, goog.exportProperty(box2d.b2World.prototype, "Dump", box2d.b2World.prototype.Dump),
    box2d.b2World.prototype.AddController = function(o) {
        return box2d.ENABLE_ASSERTS && box2d.b2Assert(null === o.m_world, "Controller can only be a member of one world"),
            o.m_world = this, o.m_next = this.m_controllerList, o.m_prev = null, this.m_controllerList && (this.m_controllerList.m_prev = o),
            this.m_controllerList = o, ++this.m_controllerCount, o;
    }, goog.exportProperty(box2d.b2World.prototype, "AddController", box2d.b2World.prototype.AddController),
    box2d.b2World.prototype.RemoveController = function(o) {
        box2d.ENABLE_ASSERTS && box2d.b2Assert(o.m_world === this, "Controller is not a member of this world"),
            o.m_prev && (o.m_prev.m_next = o.m_next), o.m_next && (o.m_next.m_prev = o.m_prev),
            this.m_controllerList === o && (this.m_controllerList = o.m_next), --this.m_controllerCount,
            o.m_prev = null, o.m_next = null, o.m_world = null;
    }, goog.exportProperty(box2d.b2World.prototype, "RemoveController", box2d.b2World.prototype.RemoveController),
    box2d.b2MotorJointDef = function() {
        box2d.b2JointDef.call(this, box2d.b2JointType.e_motorJoint), this.linearOffset = new box2d.b2Vec2(0, 0);
    }, goog.inherits(box2d.b2MotorJointDef, box2d.b2JointDef), goog.exportSymbol("box2d.b2MotorJointDef", box2d.b2MotorJointDef),
    box2d.b2MotorJointDef.prototype.linearOffset = null, goog.exportProperty(box2d.b2MotorJointDef.prototype, "linearOffset", box2d.b2MotorJointDef.prototype.linearOffset),
    box2d.b2MotorJointDef.prototype.angularOffset = 0, goog.exportProperty(box2d.b2MotorJointDef.prototype, "angularOffset", box2d.b2MotorJointDef.prototype.angularOffset),
    box2d.b2MotorJointDef.prototype.maxForce = 1, goog.exportProperty(box2d.b2MotorJointDef.prototype, "maxForce", box2d.b2MotorJointDef.prototype.maxForce),
    box2d.b2MotorJointDef.prototype.maxTorque = 1, goog.exportProperty(box2d.b2MotorJointDef.prototype, "maxTorque", box2d.b2MotorJointDef.prototype.maxTorque),
    box2d.b2MotorJointDef.prototype.correctionFactor = .3, goog.exportProperty(box2d.b2MotorJointDef.prototype, "correctionFactor", box2d.b2MotorJointDef.prototype.correctionFactor),
    box2d.b2MotorJointDef.prototype.Initialize = function(o, t) {
        this.bodyA = o, this.bodyB = t, this.bodyA.GetLocalPoint(this.bodyB.GetPosition(), this.linearOffset);
        var e = this.bodyA.GetAngle();
        this.angularOffset = this.bodyB.GetAngle() - e;
    }, goog.exportProperty(box2d.b2MotorJointDef.prototype, "Initialize", box2d.b2MotorJointDef.prototype.Initialize),
    box2d.b2MotorJoint = function(o) {
        box2d.b2Joint.call(this, o), this.m_linearOffset = o.linearOffset.Clone(), this.m_linearImpulse = new box2d.b2Vec2(0, 0),
            this.m_maxForce = o.maxForce, this.m_maxTorque = o.maxTorque, this.m_correctionFactor = o.correctionFactor,
            this.m_rA = new box2d.b2Vec2(0, 0), this.m_rB = new box2d.b2Vec2(0, 0), this.m_localCenterA = new box2d.b2Vec2(0, 0),
            this.m_localCenterB = new box2d.b2Vec2(0, 0), this.m_linearError = new box2d.b2Vec2(0, 0),
            this.m_linearMass = new box2d.b2Mat22(), this.m_qA = new box2d.b2Rot(), this.m_qB = new box2d.b2Rot(),
            this.m_K = new box2d.b2Mat22();
    }, goog.inherits(box2d.b2MotorJoint, box2d.b2Joint), goog.exportSymbol("box2d.b2MotorJoint", box2d.b2MotorJoint),
    box2d.b2MotorJoint.prototype.m_linearOffset = null, goog.exportProperty(box2d.b2MotorJoint.prototype, "m_linearOffset", box2d.b2MotorJoint.prototype.m_linearOffset),
    box2d.b2MotorJoint.prototype.m_angularOffset = 0, goog.exportProperty(box2d.b2MotorJoint.prototype, "m_angularOffset", box2d.b2MotorJoint.prototype.m_angularOffset),
    box2d.b2MotorJoint.prototype.m_linearImpulse = null, goog.exportProperty(box2d.b2MotorJoint.prototype, "m_linearImpulse", box2d.b2MotorJoint.prototype.m_linearImpulse),
    box2d.b2MotorJoint.prototype.m_angularImpulse = 0, goog.exportProperty(box2d.b2MotorJoint.prototype, "m_angularImpulse", box2d.b2MotorJoint.prototype.m_angularImpulse),
    box2d.b2MotorJoint.prototype.m_maxForce = 0, goog.exportProperty(box2d.b2MotorJoint.prototype, "m_maxForce", box2d.b2MotorJoint.prototype.m_maxForce),
    box2d.b2MotorJoint.prototype.m_maxTorque = 0, goog.exportProperty(box2d.b2MotorJoint.prototype, "m_maxTorque", box2d.b2MotorJoint.prototype.m_maxTorque),
    box2d.b2MotorJoint.prototype.m_correctionFactor = .3, goog.exportProperty(box2d.b2MotorJoint.prototype, "m_correctionFactor", box2d.b2MotorJoint.prototype.m_correctionFactor),
    box2d.b2MotorJoint.prototype.m_indexA = 0, goog.exportProperty(box2d.b2MotorJoint.prototype, "m_indexA", box2d.b2MotorJoint.prototype.m_indexA),
    box2d.b2MotorJoint.prototype.m_indexB = 0, goog.exportProperty(box2d.b2MotorJoint.prototype, "m_indexB", box2d.b2MotorJoint.prototype.m_indexB),
    box2d.b2MotorJoint.prototype.m_rA = null, goog.exportProperty(box2d.b2MotorJoint.prototype, "m_rA", box2d.b2MotorJoint.prototype.m_rA),
    box2d.b2MotorJoint.prototype.m_rB = null, goog.exportProperty(box2d.b2MotorJoint.prototype, "m_rB", box2d.b2MotorJoint.prototype.m_rB),
    box2d.b2MotorJoint.prototype.m_localCenterA = null, goog.exportProperty(box2d.b2MotorJoint.prototype, "m_localCenterA", box2d.b2MotorJoint.prototype.m_localCenterA),
    box2d.b2MotorJoint.prototype.m_localCenterB = null, goog.exportProperty(box2d.b2MotorJoint.prototype, "m_localCenterB", box2d.b2MotorJoint.prototype.m_localCenterB),
    box2d.b2MotorJoint.prototype.m_linearError = null, goog.exportProperty(box2d.b2MotorJoint.prototype, "m_linearError", box2d.b2MotorJoint.prototype.m_linearError),
    box2d.b2MotorJoint.prototype.m_angularError = 0, goog.exportProperty(box2d.b2MotorJoint.prototype, "m_angularError", box2d.b2MotorJoint.prototype.m_angularError),
    box2d.b2MotorJoint.prototype.m_invMassA = 0, goog.exportProperty(box2d.b2MotorJoint.prototype, "m_invMassA", box2d.b2MotorJoint.prototype.m_invMassA),
    box2d.b2MotorJoint.prototype.m_invMassB = 0, goog.exportProperty(box2d.b2MotorJoint.prototype, "m_invMassB", box2d.b2MotorJoint.prototype.m_invMassB),
    box2d.b2MotorJoint.prototype.m_invIA = 0, goog.exportProperty(box2d.b2MotorJoint.prototype, "m_invIA", box2d.b2MotorJoint.prototype.m_invIA),
    box2d.b2MotorJoint.prototype.m_invIB = 0, goog.exportProperty(box2d.b2MotorJoint.prototype, "m_invIB", box2d.b2MotorJoint.prototype.m_invIB),
    box2d.b2MotorJoint.prototype.m_linearMass = null, goog.exportProperty(box2d.b2MotorJoint.prototype, "m_linearMass", box2d.b2MotorJoint.prototype.m_linearMass),
    box2d.b2MotorJoint.prototype.m_angularMass = 0, goog.exportProperty(box2d.b2MotorJoint.prototype, "m_angularMass", box2d.b2MotorJoint.prototype.m_angularMass),
    box2d.b2MotorJoint.prototype.m_qA = null, goog.exportProperty(box2d.b2MotorJoint.prototype, "m_qA", box2d.b2MotorJoint.prototype.m_qA),
    box2d.b2MotorJoint.prototype.m_qB = null, goog.exportProperty(box2d.b2MotorJoint.prototype, "m_qB", box2d.b2MotorJoint.prototype.m_qB),
    box2d.b2MotorJoint.prototype.m_K = null, goog.exportProperty(box2d.b2MotorJoint.prototype, "m_K", box2d.b2MotorJoint.prototype.m_K),
    box2d.b2MotorJoint.prototype.GetAnchorA = function(o) {
        return this.m_bodyA.GetPosition(o);
    }, goog.exportProperty(box2d.b2MotorJoint.prototype, "GetAnchorA", box2d.b2MotorJoint.prototype.GetAnchorA),
    box2d.b2MotorJoint.prototype.GetAnchorB = function(o) {
        return this.m_bodyB.GetPosition(o);
    }, goog.exportProperty(box2d.b2MotorJoint.prototype, "GetAnchorB", box2d.b2MotorJoint.prototype.GetAnchorB),
    box2d.b2MotorJoint.prototype.GetReactionForce = function(o, t) {
        return box2d.b2Mul_S_V2(o, this.m_linearImpulse, t);
    }, goog.exportProperty(box2d.b2MotorJoint.prototype, "GetReactionForce", box2d.b2MotorJoint.prototype.GetReactionForce),
    box2d.b2MotorJoint.prototype.GetReactionTorque = function(o) {
        return o * this.m_angularImpulse;
    }, goog.exportProperty(box2d.b2MotorJoint.prototype, "GetReactionTorque", box2d.b2MotorJoint.prototype.GetReactionTorque),
    box2d.b2MotorJoint.prototype.SetCorrectionFactor = function(o) {
        box2d.ENABLE_ASSERTS && box2d.b2Assert(box2d.b2IsValid(o) && 0 <= o && 1 >= o),
            this._correctionFactor = o;
    }, box2d.b2MotorJoint.prototype.GetCorrectionFactor = function() {
        return this.m_correctionFactor;
    }, box2d.b2MotorJoint.prototype.SetLinearOffset = function(o) {
        o.x == this.m_linearOffset.x && o.y == this.m_linearOffset.y || (this.m_bodyA.SetAwake(!0),
            this.m_bodyB.SetAwake(!0), this.m_linearOffset.Copy(o));
    }, goog.exportProperty(box2d.b2MotorJoint.prototype, "SetLinearOffset", box2d.b2MotorJoint.prototype.SetLinearOffset),
    box2d.b2MotorJoint.prototype.GetLinearOffset = function(o) {
        return o.Copy(this.m_linearOffset);
    }, goog.exportProperty(box2d.b2MotorJoint.prototype, "GetLinearOffset", box2d.b2MotorJoint.prototype.GetLinearOffset),
    box2d.b2MotorJoint.prototype.SetAngularOffset = function(o) {
        o !== this.m_angularOffset && (this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0),
            this.m_angularOffset = o);
    }, goog.exportProperty(box2d.b2MotorJoint.prototype, "SetAngularOffset", box2d.b2MotorJoint.prototype.SetAngularOffset),
    box2d.b2MotorJoint.prototype.GetAngularOffset = function() {
        return this.m_angularOffset;
    }, goog.exportProperty(box2d.b2MotorJoint.prototype, "GetAngularOffset", box2d.b2MotorJoint.prototype.GetAngularOffset),
    box2d.b2MotorJoint.prototype.SetMaxForce = function(o) {
        box2d.ENABLE_ASSERTS && box2d.b2Assert(box2d.b2IsValid(o) && 0 <= o), this.m_maxForce = o;
    }, goog.exportProperty(box2d.b2MotorJoint.prototype, "SetMaxForce", box2d.b2MotorJoint.prototype.SetMaxForce),
    box2d.b2MotorJoint.prototype.GetMaxForce = function() {
        return this.m_maxForce;
    }, goog.exportProperty(box2d.b2MotorJoint.prototype, "GetMaxForce", box2d.b2MotorJoint.prototype.GetMaxForce),
    box2d.b2MotorJoint.prototype.SetMaxTorque = function(o) {
        box2d.ENABLE_ASSERTS && box2d.b2Assert(box2d.b2IsValid(o) && 0 <= o), this.m_maxTorque = o;
    }, goog.exportProperty(box2d.b2MotorJoint.prototype, "SetMaxTorque", box2d.b2MotorJoint.prototype.SetMaxTorque),
    box2d.b2MotorJoint.prototype.GetMaxTorque = function() {
        return this.m_maxTorque;
    }, goog.exportProperty(box2d.b2MotorJoint.prototype, "GetMaxTorque", box2d.b2MotorJoint.prototype.GetMaxTorque),
    box2d.b2MotorJoint.prototype.InitVelocityConstraints = function(o) {
        this.m_indexA = this.m_bodyA.m_islandIndex, this.m_indexB = this.m_bodyB.m_islandIndex,
            this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter), this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter),
            this.m_invMassA = this.m_bodyA.m_invMass, this.m_invMassB = this.m_bodyB.m_invMass,
            this.m_invIA = this.m_bodyA.m_invI, this.m_invIB = this.m_bodyB.m_invI;
        var t = o.positions[this.m_indexA].c,
            e = o.positions[this.m_indexA].a,
            r = o.velocities[this.m_indexA].v,
            i = o.velocities[this.m_indexA].w,
            b = o.positions[this.m_indexB].c,
            n = o.positions[this.m_indexB].a,
            p = o.velocities[this.m_indexB].v,
            s = o.velocities[this.m_indexB].w,
            a = this.m_qA.SetAngle(e),
            d = this.m_qB.SetAngle(n),
            l = box2d.b2Mul_R_V2(a, box2d.b2Vec2.s_t0.Copy(this.m_localCenterA).SelfNeg(), this.m_rA),
            x = (d = box2d.b2Mul_R_V2(d, box2d.b2Vec2.s_t0.Copy(this.m_localCenterB).SelfNeg(), this.m_rB),
                this.m_invMassA),
            y = this.m_invMassB,
            c = this.m_invIA,
            _ = this.m_invIB,
            m = this.m_K;
        m.ex.x = x + y + c * l.y * l.y + _ * d.y * d.y, m.ex.y = -c * l.x * l.y - _ * d.x * d.y,
            m.ey.x = m.ex.y, m.ey.y = x + y + c * l.x * l.x + _ * d.x * d.x, m.GetInverse(this.m_linearMass),
            this.m_angularMass = c + _, 0 < this.m_angularMass && (this.m_angularMass = 1 / this.m_angularMass),
            box2d.b2Sub_V2_V2(box2d.b2Sub_V2_V2(box2d.b2Add_V2_V2(b, d, box2d.b2Vec2.s_t0), box2d.b2Add_V2_V2(t, l, box2d.b2Vec2.s_t1), box2d.b2Vec2.s_t2), box2d.b2Mul_R_V2(a, this.m_linearOffset, box2d.b2Vec2.s_t3), this.m_linearError),
            this.m_angularError = n - e - this.m_angularOffset, o.step.warmStarting ? (this.m_linearImpulse.SelfMul(o.step.dtRatio),
                this.m_angularImpulse *= o.step.dtRatio, t = this.m_linearImpulse, r.SelfMulSub(x, t),
                i -= c * (box2d.b2Cross_V2_V2(l, t) + this.m_angularImpulse), p.SelfMulAdd(y, t),
                s += _ * (box2d.b2Cross_V2_V2(d, t) + this.m_angularImpulse)) : (this.m_linearImpulse.SetZero(),
                this.m_angularImpulse = 0), o.velocities[this.m_indexA].w = i, o.velocities[this.m_indexB].w = s;
    }, goog.exportProperty(box2d.b2MotorJoint.prototype, "InitVelocityConstraints", box2d.b2MotorJoint.prototype.InitVelocityConstraints),
    box2d.b2MotorJoint.prototype.SolveVelocityConstraints = function(o) {
        var t = o.velocities[this.m_indexA].v,
            e = o.velocities[this.m_indexA].w,
            r = o.velocities[this.m_indexB].v,
            i = o.velocities[this.m_indexB].w,
            b = this.m_invMassA,
            n = this.m_invMassB,
            p = this.m_invIA,
            s = this.m_invIB,
            a = o.step.dt,
            d = o.step.inv_dt,
            l = i - e + d * this.m_correctionFactor * this.m_angularError,
            x = (l = -this.m_angularMass * l,
                this.m_angularImpulse),
            y = a * this.m_maxTorque;
        this.m_angularImpulse = box2d.b2Clamp(this.m_angularImpulse + l, -y, y);
        e -= p * (l = this.m_angularImpulse - x), i += s * l;
        var c = this.m_rA,
            _ = this.m_rB;
        l = box2d.b2Add_V2_V2(box2d.b2Sub_V2_V2(box2d.b2Add_V2_V2(r, box2d.b2Cross_S_V2(i, _, box2d.b2Vec2.s_t0), box2d.b2Vec2.s_t0), box2d.b2Add_V2_V2(t, box2d.b2Cross_S_V2(e, c, box2d.b2Vec2.s_t1), box2d.b2Vec2.s_t1), box2d.b2Vec2.s_t2), box2d.b2Mul_S_V2(d * this.m_correctionFactor, this.m_linearError, box2d.b2Vec2.s_t3), box2d.b2MotorJoint.prototype.SolveVelocityConstraints.s_Cdot),
            l = box2d.b2Mul_M22_V2(this.m_linearMass, l, box2d.b2MotorJoint.prototype.SolveVelocityConstraints.s_impulse).SelfNeg(),
            x = box2d.b2MotorJoint.prototype.SolveVelocityConstraints.s_oldImpulse.Copy(this.m_linearImpulse);
        this.m_linearImpulse.SelfAdd(l), y = a * this.m_maxForce, this.m_linearImpulse.LengthSquared() > y * y && (this.m_linearImpulse.Normalize(),
                this.m_linearImpulse.SelfMul(y)), box2d.b2Sub_V2_V2(this.m_linearImpulse, x, l),
            t.SelfMulSub(b, l), e -= p * box2d.b2Cross_V2_V2(c, l), r.SelfMulAdd(n, l), i += s * box2d.b2Cross_V2_V2(_, l),
            o.velocities[this.m_indexA].w = e, o.velocities[this.m_indexB].w = i;
    }, goog.exportProperty(box2d.b2MotorJoint.prototype, "SolveVelocityConstraints", box2d.b2MotorJoint.prototype.SolveVelocityConstraints),
    box2d.b2MotorJoint.prototype.SolveVelocityConstraints.s_Cdot = new box2d.b2Vec2(),
    box2d.b2MotorJoint.prototype.SolveVelocityConstraints.s_impulse = new box2d.b2Vec2(),
    box2d.b2MotorJoint.prototype.SolveVelocityConstraints.s_oldImpulse = new box2d.b2Vec2(),
    box2d.b2MotorJoint.prototype.SolvePositionConstraints = function(o) {
        return !0;
    }, goog.exportProperty(box2d.b2MotorJoint.prototype, "SolvePositionConstraints", box2d.b2MotorJoint.prototype.SolvePositionConstraints),
    box2d.b2MotorJoint.prototype.Dump = function() {
        if (box2d.DEBUG) {
            var o = this.m_bodyA.m_islandIndex,
                t = this.m_bodyB.m_islandIndex;
            box2d.b2Log("  /*box2d.b2MotorJointDef*/ var jd = new box2d.b2MotorJointDef();\n"),
                box2d.b2Log("  jd.bodyA = bodies[%d];\n", o), box2d.b2Log("  jd.bodyB = bodies[%d];\n", t),
                box2d.b2Log("  jd.collideConnected = %s;\n", this.m_collideConnected ? "true" : "false"),
                box2d.b2Log("  jd.linearOffset.Set(%.15f, %.15f);\n", this.m_linearOffset.x, this.m_linearOffset.y),
                box2d.b2Log("  jd.angularOffset = %.15f;\n", this.m_angularOffset), box2d.b2Log("  jd.maxForce = %.15f;\n", this.m_maxForce),
                box2d.b2Log("  jd.maxTorque = %.15f;\n", this.m_maxTorque), box2d.b2Log("  jd.correctionFactor = %.15f;\n", this.m_correctionFactor),
                box2d.b2Log("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index);
        }
    }, goog.exportProperty(box2d.b2MotorJoint.prototype, "Dump", box2d.b2MotorJoint.prototype.Dump),
    box2d.b2MouseJointDef = function() {
        box2d.b2JointDef.call(this, box2d.b2JointType.e_mouseJoint), this.target = new box2d.b2Vec2();
    }, goog.inherits(box2d.b2MouseJointDef, box2d.b2JointDef), goog.exportSymbol("box2d.b2MouseJointDef", box2d.b2MouseJointDef),
    box2d.b2MouseJointDef.prototype.target = null, goog.exportProperty(box2d.b2MouseJointDef.prototype, "target", box2d.b2MouseJointDef.prototype.target),
    box2d.b2MouseJointDef.prototype.maxForce = 0, goog.exportProperty(box2d.b2MouseJointDef.prototype, "maxForce", box2d.b2MouseJointDef.prototype.maxForce),
    box2d.b2MouseJointDef.prototype.frequencyHz = 5, goog.exportProperty(box2d.b2MouseJointDef.prototype, "frequencyHz", box2d.b2MouseJointDef.prototype.frequencyHz),
    box2d.b2MouseJointDef.prototype.dampingRatio = .7, goog.exportProperty(box2d.b2MouseJointDef.prototype, "dampingRatio", box2d.b2MouseJointDef.prototype.dampingRatio),
    box2d.b2MouseJoint = function(o) {
        box2d.b2Joint.call(this, o), this.m_localAnchorB = new box2d.b2Vec2(), this.m_targetA = new box2d.b2Vec2(),
            this.m_impulse = new box2d.b2Vec2(), this.m_rB = new box2d.b2Vec2(), this.m_localCenterB = new box2d.b2Vec2(),
            this.m_mass = new box2d.b2Mat22(), this.m_C = new box2d.b2Vec2(), this.m_qB = new box2d.b2Rot(),
            this.m_lalcB = new box2d.b2Vec2(), this.m_K = new box2d.b2Mat22(), box2d.ENABLE_ASSERTS && box2d.b2Assert(o.target.IsValid()),
            box2d.ENABLE_ASSERTS && box2d.b2Assert(box2d.b2IsValid(o.maxForce) && 0 <= o.maxForce),
            box2d.ENABLE_ASSERTS && box2d.b2Assert(box2d.b2IsValid(o.frequencyHz) && 0 <= o.frequencyHz),
            box2d.ENABLE_ASSERTS && box2d.b2Assert(box2d.b2IsValid(o.dampingRatio) && 0 <= o.dampingRatio),
            this.m_targetA.Copy(o.target), box2d.b2MulT_X_V2(this.m_bodyB.GetTransform(), this.m_targetA, this.m_localAnchorB),
            this.m_maxForce = o.maxForce, this.m_impulse.SetZero(), this.m_frequencyHz = o.frequencyHz,
            this.m_dampingRatio = o.dampingRatio, this.m_gamma = this.m_beta = 0;
    }, goog.inherits(box2d.b2MouseJoint, box2d.b2Joint), goog.exportSymbol("box2d.b2MouseJoint", box2d.b2MouseJoint),
    box2d.b2MouseJoint.prototype.m_localAnchorB = null, goog.exportProperty(box2d.b2MouseJoint.prototype, "m_localAnchorB", box2d.b2MouseJoint.prototype.m_localAnchorB),
    box2d.b2MouseJoint.prototype.m_targetA = null, goog.exportProperty(box2d.b2MouseJoint.prototype, "m_targetA", box2d.b2MouseJoint.prototype.m_targetA),
    box2d.b2MouseJoint.prototype.m_frequencyHz = 0, goog.exportProperty(box2d.b2MouseJoint.prototype, "m_frequencyHz", box2d.b2MouseJoint.prototype.m_frequencyHz),
    box2d.b2MouseJoint.prototype.m_dampingRatio = 0, goog.exportProperty(box2d.b2MouseJoint.prototype, "m_dampingRatio", box2d.b2MouseJoint.prototype.m_dampingRatio),
    box2d.b2MouseJoint.prototype.m_beta = 0, goog.exportProperty(box2d.b2MouseJoint.prototype, "m_beta", box2d.b2MouseJoint.prototype.m_beta);

box2d.b2MouseJoint.prototype.m_impulse = null, goog.exportProperty(box2d.b2MouseJoint.prototype, "m_impulse", box2d.b2MouseJoint.prototype.m_impulse),
    box2d.b2MouseJoint.prototype.m_maxForce = 0, goog.exportProperty(box2d.b2MouseJoint.prototype, "m_maxForce", box2d.b2MouseJoint.prototype.m_maxForce),
    box2d.b2MouseJoint.prototype.m_gamma = 0, goog.exportProperty(box2d.b2MouseJoint.prototype, "m_gamma", box2d.b2MouseJoint.prototype.m_gamma),
    box2d.b2MouseJoint.prototype.m_indexA = 0, goog.exportProperty(box2d.b2MouseJoint.prototype, "m_indexA", box2d.b2MouseJoint.prototype.m_indexA),
    box2d.b2MouseJoint.prototype.m_indexB = 0, goog.exportProperty(box2d.b2MouseJoint.prototype, "m_indexB", box2d.b2MouseJoint.prototype.m_indexB),
    box2d.b2MouseJoint.prototype.m_rB = null, goog.exportProperty(box2d.b2MouseJoint.prototype, "m_rB", box2d.b2MouseJoint.prototype.m_rB),
    box2d.b2MouseJoint.prototype.m_localCenterB = null, goog.exportProperty(box2d.b2MouseJoint.prototype, "m_localCenterB", box2d.b2MouseJoint.prototype.m_localCenterB),
    box2d.b2MouseJoint.prototype.m_invMassB = 0, goog.exportProperty(box2d.b2MouseJoint.prototype, "m_invMassB", box2d.b2MouseJoint.prototype.m_invMassB),
    box2d.b2MouseJoint.prototype.m_invIB = 0, goog.exportProperty(box2d.b2MouseJoint.prototype, "m_invIB", box2d.b2MouseJoint.prototype.m_invIB),
    box2d.b2MouseJoint.prototype.m_mass = null, goog.exportProperty(box2d.b2MouseJoint.prototype, "m_mass", box2d.b2MouseJoint.prototype.m_mass),
    box2d.b2MouseJoint.prototype.m_C = null, goog.exportProperty(box2d.b2MouseJoint.prototype, "m_C", box2d.b2MouseJoint.prototype.m_C),
    box2d.b2MouseJoint.prototype.m_qB = null, goog.exportProperty(box2d.b2MouseJoint.prototype, "m_qB", box2d.b2MouseJoint.prototype.m_qB),
    box2d.b2MouseJoint.prototype.m_lalcB = null, goog.exportProperty(box2d.b2MouseJoint.prototype, "m_lalcB", box2d.b2MouseJoint.prototype.m_lalcB),
    box2d.b2MouseJoint.prototype.m_K = null, goog.exportProperty(box2d.b2MouseJoint.prototype, "m_K", box2d.b2MouseJoint.prototype.m_K),
    box2d.b2MouseJoint.prototype.SetTarget = function(o) {
        this.m_bodyB.IsAwake() || this.m_bodyB.SetAwake(!0), this.m_targetA.Copy(o);
    }, goog.exportProperty(box2d.b2MouseJoint.prototype, "SetTarget", box2d.b2MouseJoint.prototype.SetTarget),
    box2d.b2MouseJoint.prototype.GetTarget = function(o) {
        return o.Copy(this.m_targetA);
    }, goog.exportProperty(box2d.b2MouseJoint.prototype, "GetTarget", box2d.b2MouseJoint.prototype.GetTarget),
    box2d.b2MouseJoint.prototype.SetMaxForce = function(o) {
        this.m_maxForce = o;
    }, goog.exportProperty(box2d.b2MouseJoint.prototype, "SetMaxForce", box2d.b2MouseJoint.prototype.SetMaxForce),
    box2d.b2MouseJoint.prototype.GetMaxForce = function() {
        return this.m_maxForce;
    }, goog.exportProperty(box2d.b2MouseJoint.prototype, "GetMaxForce", box2d.b2MouseJoint.prototype.GetMaxForce),
    box2d.b2MouseJoint.prototype.SetFrequency = function(o) {
        this.m_frequencyHz = o;
    }, goog.exportProperty(box2d.b2MouseJoint.prototype, "SetFrequency", box2d.b2MouseJoint.prototype.SetFrequency),
    box2d.b2MouseJoint.prototype.GetFrequency = function() {
        return this.m_frequencyHz;
    }, goog.exportProperty(box2d.b2MouseJoint.prototype, "GetFrequency", box2d.b2MouseJoint.prototype.GetFrequency),
    box2d.b2MouseJoint.prototype.SetDampingRatio = function(o) {
        this.m_dampingRatio = o;
    }, goog.exportProperty(box2d.b2MouseJoint.prototype, "SetDampingRatio", box2d.b2MouseJoint.prototype.SetDampingRatio),
    box2d.b2MouseJoint.prototype.GetDampingRatio = function() {
        return this.m_dampingRatio;
    }, goog.exportProperty(box2d.b2MouseJoint.prototype, "GetDampingRatio", box2d.b2MouseJoint.prototype.GetDampingRatio),
    box2d.b2MouseJoint.prototype.InitVelocityConstraints = function(o) {
        this.m_indexB = this.m_bodyB.m_islandIndex, this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter),
            this.m_invMassB = this.m_bodyB.m_invMass, this.m_invIB = this.m_bodyB.m_invI;
        var t = o.positions[this.m_indexB].c,
            e = o.velocities[this.m_indexB].v,
            r = o.velocities[this.m_indexB].w,
            i = this.m_qB.SetAngle(o.positions[this.m_indexB].a),
            b = this.m_bodyB.GetMass(),
            n = 2 * box2d.b2_pi * this.m_frequencyHz,
            p = 2 * b * this.m_dampingRatio * n;
        b = b * n * n, n = o.step.dt;
        box2d.ENABLE_ASSERTS && box2d.b2Assert(p + n * b > box2d.b2_epsilon), this.m_gamma = n * (p + n * b),
            0 !== this.m_gamma && (this.m_gamma = 1 / this.m_gamma), this.m_beta = n * b * this.m_gamma,
            box2d.b2Sub_V2_V2(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB), box2d.b2Mul_R_V2(i, this.m_lalcB, this.m_rB),
            (i = this.m_K).ex.x = this.m_invMassB + this.m_invIB * this.m_rB.y * this.m_rB.y + this.m_gamma,
            i.ex.y = -this.m_invIB * this.m_rB.x * this.m_rB.y, i.ey.x = i.ex.y, i.ey.y = this.m_invMassB + this.m_invIB * this.m_rB.x * this.m_rB.x + this.m_gamma,
            i.GetInverse(this.m_mass), this.m_C.x = t.x + this.m_rB.x - this.m_targetA.x, this.m_C.y = t.y + this.m_rB.y - this.m_targetA.y,
            this.m_C.SelfMul(this.m_beta), r *= .98, o.step.warmStarting ? (this.m_impulse.SelfMul(o.step.dtRatio),
                e.x += this.m_invMassB * this.m_impulse.x, e.y += this.m_invMassB * this.m_impulse.y,
                r += this.m_invIB * box2d.b2Cross_V2_V2(this.m_rB, this.m_impulse)) : this.m_impulse.SetZero(),
            o.velocities[this.m_indexB].w = r;
    }, goog.exportProperty(box2d.b2MouseJoint.prototype, "InitVelocityConstraints", box2d.b2MouseJoint.prototype.InitVelocityConstraints),
    box2d.b2MouseJoint.prototype.SolveVelocityConstraints = function(o) {
        var t = o.velocities[this.m_indexB].v,
            e = o.velocities[this.m_indexB].w,
            r = box2d.b2AddCross_V2_S_V2(t, e, this.m_rB, box2d.b2MouseJoint.prototype.SolveVelocityConstraints.s_Cdot),
            i = (r = box2d.b2Mul_M22_V2(this.m_mass, box2d.b2Add_V2_V2(r, box2d.b2Add_V2_V2(this.m_C, box2d.b2Mul_S_V2(this.m_gamma, this.m_impulse, box2d.b2Vec2.s_t0), box2d.b2Vec2.s_t0), box2d.b2Vec2.s_t0).SelfNeg(), box2d.b2MouseJoint.prototype.SolveVelocityConstraints.s_impulse),
                box2d.b2MouseJoint.prototype.SolveVelocityConstraints.s_oldImpulse.Copy(this.m_impulse));
        this.m_impulse.SelfAdd(r);
        var b = o.step.dt * this.m_maxForce;
        this.m_impulse.LengthSquared() > b * b && this.m_impulse.SelfMul(b / this.m_impulse.Length()),
            box2d.b2Sub_V2_V2(this.m_impulse, i, r), t.SelfMulAdd(this.m_invMassB, r), e += this.m_invIB * box2d.b2Cross_V2_V2(this.m_rB, r),
            o.velocities[this.m_indexB].w = e;
    }, goog.exportProperty(box2d.b2MouseJoint.prototype, "SolveVelocityConstraints", box2d.b2MouseJoint.prototype.SolveVelocityConstraints),
    box2d.b2MouseJoint.prototype.SolveVelocityConstraints.s_Cdot = new box2d.b2Vec2(),
    box2d.b2MouseJoint.prototype.SolveVelocityConstraints.s_impulse = new box2d.b2Vec2(),
    box2d.b2MouseJoint.prototype.SolveVelocityConstraints.s_oldImpulse = new box2d.b2Vec2(),
    box2d.b2MouseJoint.prototype.SolvePositionConstraints = function(o) {
        return !0;
    }, goog.exportProperty(box2d.b2MouseJoint.prototype, "SolvePositionConstraints", box2d.b2MouseJoint.prototype.SolvePositionConstraints),
    box2d.b2MouseJoint.prototype.GetAnchorA = function(o) {
        return o.Copy(this.m_targetA);
    }, goog.exportProperty(box2d.b2MouseJoint.prototype, "GetAnchorA", box2d.b2MouseJoint.prototype.GetAnchorA),
    box2d.b2MouseJoint.prototype.GetAnchorB = function(o) {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, o);
    }, goog.exportProperty(box2d.b2MouseJoint.prototype, "GetAnchorB", box2d.b2MouseJoint.prototype.GetAnchorB),
    box2d.b2MouseJoint.prototype.GetReactionForce = function(o, t) {
        return box2d.b2Mul_S_V2(o, this.m_impulse, t);
    }, goog.exportProperty(box2d.b2MouseJoint.prototype, "GetReactionForce", box2d.b2MouseJoint.prototype.GetReactionForce),
    box2d.b2MouseJoint.prototype.GetReactionTorque = function(o) {
        return 0;
    }, goog.exportProperty(box2d.b2MouseJoint.prototype, "GetReactionTorque", box2d.b2MouseJoint.prototype.GetReactionTorque),
    box2d.b2MouseJoint.prototype.Dump = function() {
        box2d.DEBUG && box2d.b2Log("Mouse joint dumping is not supported.\n");
    }, goog.exportProperty(box2d.b2MouseJoint.prototype, "Dump", box2d.b2MouseJoint.prototype.Dump),
    box2d.b2MouseJoint.prototype.ShiftOrigin = function(o) {
        this.m_targetA.SelfSub(o);
    }, goog.exportProperty(box2d.b2MouseJoint.prototype, "ShiftOrigin", box2d.b2MouseJoint.prototype.ShiftOrigin),
    box2d.b2PrismaticJointDef = function() {
        box2d.b2JointDef.call(this, box2d.b2JointType.e_prismaticJoint), this.localAnchorA = new box2d.b2Vec2(),
            this.localAnchorB = new box2d.b2Vec2(), this.localAxisA = new box2d.b2Vec2(1, 0);
    }, goog.inherits(box2d.b2PrismaticJointDef, box2d.b2JointDef), goog.exportSymbol("box2d.b2PrismaticJointDef", box2d.b2PrismaticJointDef),
    box2d.b2PrismaticJointDef.prototype.localAnchorA = null, goog.exportProperty(box2d.b2PrismaticJointDef.prototype, "localAnchorA", box2d.b2PrismaticJointDef.prototype.localAnchorA),
    box2d.b2PrismaticJointDef.prototype.localAnchorB = null, goog.exportProperty(box2d.b2PrismaticJointDef.prototype, "localAnchorB", box2d.b2PrismaticJointDef.prototype.localAnchorB),
    box2d.b2PrismaticJointDef.prototype.localAxisA = null, goog.exportProperty(box2d.b2PrismaticJointDef.prototype, "localAxisA", box2d.b2PrismaticJointDef.prototype.localAxisA),
    box2d.b2PrismaticJointDef.prototype.referenceAngle = 0, goog.exportProperty(box2d.b2PrismaticJointDef.prototype, "referenceAngle", box2d.b2PrismaticJointDef.prototype.referenceAngle),
    box2d.b2PrismaticJointDef.prototype.enableLimit = !1, goog.exportProperty(box2d.b2PrismaticJointDef.prototype, "enableLimit", box2d.b2PrismaticJointDef.prototype.enableLimit),
    box2d.b2PrismaticJointDef.prototype.lowerTranslation = 0, goog.exportProperty(box2d.b2PrismaticJointDef.prototype, "lowerTranslation", box2d.b2PrismaticJointDef.prototype.lowerTranslation),
    box2d.b2PrismaticJointDef.prototype.upperTranslation = 0, goog.exportProperty(box2d.b2PrismaticJointDef.prototype, "upperTranslation", box2d.b2PrismaticJointDef.prototype.upperTranslation),
    box2d.b2PrismaticJointDef.prototype.enableMotor = !1, goog.exportProperty(box2d.b2PrismaticJointDef.prototype, "enableMotor", box2d.b2PrismaticJointDef.prototype.enableMotor),
    box2d.b2PrismaticJointDef.prototype.maxMotorForce = 0, goog.exportProperty(box2d.b2PrismaticJointDef.prototype, "maxMotorForce", box2d.b2PrismaticJointDef.prototype.maxMotorForce),
    box2d.b2PrismaticJointDef.prototype.motorSpeed = 0, goog.exportProperty(box2d.b2PrismaticJointDef.prototype, "motorSpeed", box2d.b2PrismaticJointDef.prototype.motorSpeed),
    box2d.b2PrismaticJointDef.prototype.Initialize = function(o, t, e, r) {
        this.bodyA = o, this.bodyB = t, this.bodyA.GetLocalPoint(e, this.localAnchorA),
            this.bodyB.GetLocalPoint(e, this.localAnchorB), this.bodyA.GetLocalVector(r, this.localAxisA),
            this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle();
    }, goog.exportProperty(box2d.b2PrismaticJointDef.prototype, "Initialize", box2d.b2PrismaticJointDef.prototype.Initialize),
    box2d.b2PrismaticJoint = function(o) {
        box2d.b2Joint.call(this, o), this.m_localAnchorA = o.localAnchorA.Clone(), this.m_localAnchorB = o.localAnchorB.Clone(),
            this.m_localXAxisA = o.localAxisA.Clone().SelfNormalize(), this.m_localYAxisA = box2d.b2Cross_S_V2(1, this.m_localXAxisA, new box2d.b2Vec2()),
            this.m_referenceAngle = o.referenceAngle, this.m_impulse = new box2d.b2Vec3(0, 0, 0),
            this.m_lowerTranslation = o.lowerTranslation, this.m_upperTranslation = o.upperTranslation,
            this.m_maxMotorForce = o.maxMotorForce, this.m_motorSpeed = o.motorSpeed, this.m_enableLimit = o.enableLimit,
            this.m_enableMotor = o.enableMotor, this.m_localCenterA = new box2d.b2Vec2(), this.m_localCenterB = new box2d.b2Vec2(),
            this.m_axis = new box2d.b2Vec2(0, 0), this.m_perp = new box2d.b2Vec2(0, 0), this.m_K = new box2d.b2Mat33(),
            this.m_K3 = new box2d.b2Mat33(), this.m_K2 = new box2d.b2Mat22(), this.m_qA = new box2d.b2Rot(),
            this.m_qB = new box2d.b2Rot(), this.m_lalcA = new box2d.b2Vec2(), this.m_lalcB = new box2d.b2Vec2(),
            this.m_rA = new box2d.b2Vec2(), this.m_rB = new box2d.b2Vec2();
    }, goog.inherits(box2d.b2PrismaticJoint, box2d.b2Joint), goog.exportSymbol("box2d.b2PrismaticJoint", box2d.b2PrismaticJoint),
    box2d.b2PrismaticJoint.prototype.m_localAnchorA = null, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "m_localAnchorA", box2d.b2PrismaticJoint.prototype.m_localAnchorA),
    box2d.b2PrismaticJoint.prototype.m_localAnchorB = null, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "m_localAnchorB", box2d.b2PrismaticJoint.prototype.m_localAnchorB),
    box2d.b2PrismaticJoint.prototype.m_localXAxisA = null, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "m_localXAxisA", box2d.b2PrismaticJoint.prototype.m_localXAxisA),
    box2d.b2PrismaticJoint.prototype.m_localYAxisA = null, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "m_localYAxisA", box2d.b2PrismaticJoint.prototype.m_localYAxisA),
    box2d.b2PrismaticJoint.prototype.m_referenceAngle = 0, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "m_referenceAngle", box2d.b2PrismaticJoint.prototype.m_referenceAngle),
    box2d.b2PrismaticJoint.prototype.m_impulse = null, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "m_impulse", box2d.b2PrismaticJoint.prototype.m_impulse),
    box2d.b2PrismaticJoint.prototype.m_motorImpulse = 0, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "m_motorImpulse", box2d.b2PrismaticJoint.prototype.m_motorImpulse),
    box2d.b2PrismaticJoint.prototype.m_lowerTranslation = 0, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "m_lowerTranslation", box2d.b2PrismaticJoint.prototype.m_lowerTranslation),
    box2d.b2PrismaticJoint.prototype.m_upperTranslation = 0, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "m_upperTranslation", box2d.b2PrismaticJoint.prototype.m_upperTranslation),
    box2d.b2PrismaticJoint.prototype.m_maxMotorForce = 0, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "m_maxMotorForce", box2d.b2PrismaticJoint.prototype.m_maxMotorForce),
    box2d.b2PrismaticJoint.prototype.m_motorSpeed = 0, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "m_motorSpeed", box2d.b2PrismaticJoint.prototype.m_motorSpeed),
    box2d.b2PrismaticJoint.prototype.m_enableLimit = !1, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "m_enableLimit", box2d.b2PrismaticJoint.prototype.m_enableLimit),
    box2d.b2PrismaticJoint.prototype.m_enableMotor = !1, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "m_enableMotor", box2d.b2PrismaticJoint.prototype.m_enableMotor),
    box2d.b2PrismaticJoint.prototype.m_limitState = box2d.b2LimitState.e_inactiveLimit,
    goog.exportProperty(box2d.b2PrismaticJoint.prototype, "m_limitState", box2d.b2PrismaticJoint.prototype.m_limitState),
    box2d.b2PrismaticJoint.prototype.m_indexA = 0, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "m_indexA", box2d.b2PrismaticJoint.prototype.m_indexA),
    box2d.b2PrismaticJoint.prototype.m_indexB = 0, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "m_indexB", box2d.b2PrismaticJoint.prototype.m_indexB),
    box2d.b2PrismaticJoint.prototype.m_localCenterA = null, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "m_localCenterA", box2d.b2PrismaticJoint.prototype.m_localCenterA),
    box2d.b2PrismaticJoint.prototype.m_localCenterB = null, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "m_localCenterB", box2d.b2PrismaticJoint.prototype.m_localCenterB),
    box2d.b2PrismaticJoint.prototype.m_invMassA = 0, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "m_invMassA", box2d.b2PrismaticJoint.prototype.m_invMassA),
    box2d.b2PrismaticJoint.prototype.m_invMassB = 0, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "m_invMassB", box2d.b2PrismaticJoint.prototype.m_invMassB),
    box2d.b2PrismaticJoint.prototype.m_invIA = 0, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "m_invIA", box2d.b2PrismaticJoint.prototype.m_invIA),
    box2d.b2PrismaticJoint.prototype.m_invIB = 0, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "m_invIB", box2d.b2PrismaticJoint.prototype.m_invIB),
    box2d.b2PrismaticJoint.prototype.m_axis = null, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "m_axis", box2d.b2PrismaticJoint.prototype.m_axis),
    box2d.b2PrismaticJoint.prototype.m_perp = null, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "m_perp", box2d.b2PrismaticJoint.prototype.m_perp),
    box2d.b2PrismaticJoint.prototype.m_s1 = 0, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "m_s1", box2d.b2PrismaticJoint.prototype.m_s1),
    box2d.b2PrismaticJoint.prototype.m_s2 = 0, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "m_s2", box2d.b2PrismaticJoint.prototype.m_s2),
    box2d.b2PrismaticJoint.prototype.m_a1 = 0, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "m_a1", box2d.b2PrismaticJoint.prototype.m_a1),
    box2d.b2PrismaticJoint.prototype.m_a2 = 0, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "m_a2", box2d.b2PrismaticJoint.prototype.m_a2),
    box2d.b2PrismaticJoint.prototype.m_K = null, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "m_K", box2d.b2PrismaticJoint.prototype.m_K),
    box2d.b2PrismaticJoint.prototype.m_K3 = null, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "m_K3", box2d.b2PrismaticJoint.prototype.m_K3),
    box2d.b2PrismaticJoint.prototype.m_K2 = null, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "m_K2", box2d.b2PrismaticJoint.prototype.m_K2),
    box2d.b2PrismaticJoint.prototype.m_motorMass = 0, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "m_motorMass", box2d.b2PrismaticJoint.prototype.m_motorMass),
    box2d.b2PrismaticJoint.prototype.m_qA = null, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "m_qA", box2d.b2PrismaticJoint.prototype.m_qA),
    box2d.b2PrismaticJoint.prototype.m_qB = null, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "m_qB", box2d.b2PrismaticJoint.prototype.m_qB),
    box2d.b2PrismaticJoint.prototype.m_lalcA = null, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "m_lalcA", box2d.b2PrismaticJoint.prototype.m_lalcA),
    box2d.b2PrismaticJoint.prototype.m_lalcB = null, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "m_lalcB", box2d.b2PrismaticJoint.prototype.m_lalcB),
    box2d.b2PrismaticJoint.prototype.m_rA = null, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "m_rA", box2d.b2PrismaticJoint.prototype.m_rA),
    box2d.b2PrismaticJoint.prototype.m_rB = null, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "m_rB", box2d.b2PrismaticJoint.prototype.m_rB),
    box2d.b2PrismaticJoint.prototype.InitVelocityConstraints = function(o) {
        this.m_indexA = this.m_bodyA.m_islandIndex, this.m_indexB = this.m_bodyB.m_islandIndex,
            this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter), this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter),
            this.m_invMassA = this.m_bodyA.m_invMass, this.m_invMassB = this.m_bodyB.m_invMass,
            this.m_invIA = this.m_bodyA.m_invI, this.m_invIB = this.m_bodyB.m_invI;
        var t = o.positions[this.m_indexA].c,
            e = o.velocities[this.m_indexA].v,
            r = o.velocities[this.m_indexA].w,
            i = o.positions[this.m_indexB].c,
            b = o.positions[this.m_indexB].a,
            n = o.velocities[this.m_indexB].v,
            p = o.velocities[this.m_indexB].w,
            s = this.m_qA.SetAngle(o.positions[this.m_indexA].a);
        b = this.m_qB.SetAngle(b);
        box2d.b2Sub_V2_V2(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA);
        var a = box2d.b2Mul_R_V2(s, this.m_lalcA, this.m_rA);
        box2d.b2Sub_V2_V2(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
        var d = box2d.b2Mul_R_V2(b, this.m_lalcB, this.m_rB),
            l = box2d.b2Add_V2_V2(box2d.b2Sub_V2_V2(i, t, box2d.b2Vec2.s_t0), box2d.b2Sub_V2_V2(d, a, box2d.b2Vec2.s_t1), box2d.b2PrismaticJoint.prototype.InitVelocityConstraints.s_d),
            x = (t = this.m_invMassA,
                i = this.m_invMassB, b = this.m_invIA, this.m_invIB);
        box2d.b2Mul_R_V2(s, this.m_localXAxisA, this.m_axis), this.m_a1 = box2d.b2Cross_V2_V2(box2d.b2Add_V2_V2(l, a, box2d.b2Vec2.s_t0), this.m_axis),
            this.m_a2 = box2d.b2Cross_V2_V2(d, this.m_axis), this.m_motorMass = t + i + b * this.m_a1 * this.m_a1 + x * this.m_a2 * this.m_a2,
            0 < this.m_motorMass && (this.m_motorMass = 1 / this.m_motorMass), box2d.b2Mul_R_V2(s, this.m_localYAxisA, this.m_perp),
            this.m_s1 = box2d.b2Cross_V2_V2(box2d.b2Add_V2_V2(l, a, box2d.b2Vec2.s_t0), this.m_perp),
            this.m_s2 = box2d.b2Cross_V2_V2(d, this.m_perp), this.m_K.ex.x = t + i + b * this.m_s1 * this.m_s1 + x * this.m_s2 * this.m_s2,
            this.m_K.ex.y = b * this.m_s1 + x * this.m_s2, this.m_K.ex.z = b * this.m_s1 * this.m_a1 + x * this.m_s2 * this.m_a2,
            this.m_K.ey.x = this.m_K.ex.y, this.m_K.ey.y = b + x, 0 === this.m_K.ey.y && (this.m_K.ey.y = 1),
            this.m_K.ey.z = b * this.m_a1 + x * this.m_a2, this.m_K.ez.x = this.m_K.ex.z, this.m_K.ez.y = this.m_K.ey.z,
            this.m_K.ez.z = t + i + b * this.m_a1 * this.m_a1 + x * this.m_a2 * this.m_a2, this.m_enableLimit ? (s = box2d.b2Dot_V2_V2(this.m_axis, l),
                box2d.b2Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * box2d.b2_linearSlop ? this.m_limitState = box2d.b2LimitState.e_equalLimits : s <= this.m_lowerTranslation ? this.m_limitState !== box2d.b2LimitState.e_atLowerLimit && (this.m_limitState = box2d.b2LimitState.e_atLowerLimit,
                    this.m_impulse.z = 0) : s >= this.m_upperTranslation ? this.m_limitState !== box2d.b2LimitState.e_atUpperLimit && (this.m_limitState = box2d.b2LimitState.e_atUpperLimit,
                    this.m_impulse.z = 0) : (this.m_limitState = box2d.b2LimitState.e_inactiveLimit,
                    this.m_impulse.z = 0)) : (this.m_limitState = box2d.b2LimitState.e_inactiveLimit,
                this.m_impulse.z = 0), this.m_enableMotor || (this.m_motorImpulse = 0), o.step.warmStarting ? (this.m_impulse.SelfMulScalar(o.step.dtRatio),
                this.m_motorImpulse *= o.step.dtRatio, s = box2d.b2Add_V2_V2(box2d.b2Mul_S_V2(this.m_impulse.x, this.m_perp, box2d.b2Vec2.s_t0), box2d.b2Mul_S_V2(this.m_motorImpulse + this.m_impulse.z, this.m_axis, box2d.b2Vec2.s_t1), box2d.b2PrismaticJoint.prototype.InitVelocityConstraints.s_P),
                a = this.m_impulse.x * this.m_s1 + this.m_impulse.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_a1,
                d = this.m_impulse.x * this.m_s2 + this.m_impulse.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_a2,
                e.SelfMulSub(t, s), r -= b * a, n.SelfMulAdd(i, s), p += x * d) : (this.m_impulse.SetZero(),
                this.m_motorImpulse = 0), o.velocities[this.m_indexA].w = r, o.velocities[this.m_indexB].w = p;
    }, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "InitVelocityConstraints", box2d.b2PrismaticJoint.prototype.InitVelocityConstraints),
    box2d.b2PrismaticJoint.prototype.InitVelocityConstraints.s_d = new box2d.b2Vec2(),
    box2d.b2PrismaticJoint.prototype.InitVelocityConstraints.s_P = new box2d.b2Vec2(),
    box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints = function(o) {
        var t = o.velocities[this.m_indexA].v,
            e = o.velocities[this.m_indexA].w,
            r = o.velocities[this.m_indexB].v,
            i = o.velocities[this.m_indexB].w,
            b = this.m_invMassA,
            n = this.m_invMassB,
            p = this.m_invIA,
            s = this.m_invIB;
        if (this.m_enableMotor && this.m_limitState !== box2d.b2LimitState.e_equalLimits) {
            var a = box2d.b2Dot_V2_V2(this.m_axis, box2d.b2Sub_V2_V2(r, t, box2d.b2Vec2.s_t0)) + this.m_a2 * i - this.m_a1 * e,
                d = (a = this.m_motorMass * (this.m_motorSpeed - a),
                    this.m_motorImpulse),
                l = o.step.dt * this.m_maxMotorForce;
            this.m_motorImpulse = box2d.b2Clamp(this.m_motorImpulse + a, -l, l), a = this.m_motorImpulse - d,
                d = box2d.b2Mul_S_V2(a, this.m_axis, box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints.s_P),
                l = a * this.m_a1, a *= this.m_a2, t.SelfMulSub(b, d), e -= p * l, r.SelfMulAdd(n, d),
                i += s * a;
        }
        l = box2d.b2Dot_V2_V2(this.m_perp, box2d.b2Sub_V2_V2(r, t, box2d.b2Vec2.s_t0)) + this.m_s2 * i - this.m_s1 * e;
        var x = i - e;
        this.m_enableLimit && this.m_limitState !== box2d.b2LimitState.e_inactiveLimit ? (a = box2d.b2Dot_V2_V2(this.m_axis, box2d.b2Sub_V2_V2(r, t, box2d.b2Vec2.s_t0)) + this.m_a2 * i - this.m_a1 * e,
                d = box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints.s_f1.Copy(this.m_impulse),
                a = this.m_K.Solve33(-l, -x, -a, box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints.s_df3),
                this.m_impulse.SelfAdd(a), this.m_limitState === box2d.b2LimitState.e_atLowerLimit ? this.m_impulse.z = box2d.b2Max(this.m_impulse.z, 0) : this.m_limitState === box2d.b2LimitState.e_atUpperLimit && (this.m_impulse.z = box2d.b2Min(this.m_impulse.z, 0)),
                (l = this.m_K.Solve22(-l - (this.m_impulse.z - d.z) * this.m_K.ez.x, -x - (this.m_impulse.z - d.z) * this.m_K.ez.y, box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints.s_f2r)).x += d.x,
                l.y += d.y, this.m_impulse.x = l.x, this.m_impulse.y = l.y, a.x = this.m_impulse.x - d.x,
                a.y = this.m_impulse.y - d.y, a.z = this.m_impulse.z - d.z, d = box2d.b2Add_V2_V2(box2d.b2Mul_S_V2(a.x, this.m_perp, box2d.b2Vec2.s_t0), box2d.b2Mul_S_V2(a.z, this.m_axis, box2d.b2Vec2.s_t1), box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints.s_P),
                l = a.x * this.m_s1 + a.y + a.z * this.m_a1, a = a.x * this.m_s2 + a.y + a.z * this.m_a2) : (a = this.m_K.Solve22(-l, -x, box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints.s_df2),
                this.m_impulse.x += a.x, this.m_impulse.y += a.y, d = box2d.b2Mul_S_V2(a.x, this.m_perp, box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints.s_P),
                l = a.x * this.m_s1 + a.y, a = a.x * this.m_s2 + a.y), t.SelfMulSub(b, d), e -= p * l,
            r.SelfMulAdd(n, d), o.velocities[this.m_indexA].w = e, o.velocities[this.m_indexB].w = i + s * a;
    }, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "SolveVelocityConstraints", box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints),
    box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints.s_P = new box2d.b2Vec2(),
    box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints.s_f2r = new box2d.b2Vec2(),
    box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints.s_f1 = new box2d.b2Vec3(),
    box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints.s_df3 = new box2d.b2Vec3(),
    box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints.s_df2 = new box2d.b2Vec2(),
    box2d.b2PrismaticJoint.prototype.SolvePositionConstraints = function(o) {
        var t = o.positions[this.m_indexA].c,
            e = o.positions[this.m_indexA].a,
            r = o.positions[this.m_indexB].c,
            i = o.positions[this.m_indexB].a,
            b = this.m_qA.SetAngle(e),
            n = this.m_qB.SetAngle(i),
            p = this.m_invMassA,
            s = this.m_invMassB,
            a = this.m_invIA,
            d = this.m_invIB,
            l = box2d.b2Mul_R_V2(b, this.m_lalcA, this.m_rA),
            x = box2d.b2Mul_R_V2(n, this.m_lalcB, this.m_rB),
            y = box2d.b2Sub_V2_V2(box2d.b2Add_V2_V2(r, x, box2d.b2Vec2.s_t0), box2d.b2Add_V2_V2(t, l, box2d.b2Vec2.s_t1), box2d.b2PrismaticJoint.prototype.SolvePositionConstraints.s_d),
            c = box2d.b2Mul_R_V2(b, this.m_localXAxisA, this.m_axis),
            _ = box2d.b2Cross_V2_V2(box2d.b2Add_V2_V2(y, l, box2d.b2Vec2.s_t0), c),
            m = (n = box2d.b2Cross_V2_V2(x, c),
                b = box2d.b2Mul_R_V2(b, this.m_localYAxisA, this.m_perp), box2d.b2Cross_V2_V2(box2d.b2Add_V2_V2(y, l, box2d.b2Vec2.s_t0), b)),
            u = box2d.b2Cross_V2_V2(x, b),
            h = box2d.b2PrismaticJoint.prototype.SolvePositionConstraints.s_impulse,
            g = box2d.b2Dot_V2_V2(b, y),
            f = i - e - this.m_referenceAngle,
            S = (l = box2d.b2Abs(g),
                x = box2d.b2Abs(f), !1),
            P = 0;
        if (this.m_enableLimit && (y = box2d.b2Dot_V2_V2(c, y), box2d.b2Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * box2d.b2_linearSlop ? (P = box2d.b2Clamp(y, -box2d.b2_maxLinearCorrection, box2d.b2_maxLinearCorrection),
                l = box2d.b2Max(l, box2d.b2Abs(y)), S = !0) : y <= this.m_lowerTranslation ? (P = box2d.b2Clamp(y - this.m_lowerTranslation + box2d.b2_linearSlop, -box2d.b2_maxLinearCorrection, 0),
                l = box2d.b2Max(l, this.m_lowerTranslation - y), S = !0) : y >= this.m_upperTranslation && (P = box2d.b2Clamp(y - this.m_upperTranslation - box2d.b2_linearSlop, 0, box2d.b2_maxLinearCorrection),
                l = box2d.b2Max(l, y - this.m_upperTranslation), S = !0)), S) {
            y = a * m + d * u;
            var C = a * m * _ + d * u * n;
            0 === (S = a + d) && (S = 1);
            var A = a * _ + d * n,
                B = p + s + a * _ * _ + d * n * n,
                v = this.m_K3;
            v.ex.Set(p + s + a * m * m + d * u * u, y, C), v.ey.Set(y, S, A), v.ez.Set(C, A, B),
                h = v.Solve33(-g, -f, -P, h);
        } else y = a * m + d * u, 0 === (S = a + d) && (S = 1), (P = this.m_K2).ex.Set(p + s + a * m * m + d * u * u, y),
            P.ey.Set(y, S), g = P.Solve(-g, -f, box2d.b2PrismaticJoint.prototype.SolvePositionConstraints.s_impulse1),
            h.x = g.x, h.y = g.y, h.z = 0;
        return c = box2d.b2Add_V2_V2(box2d.b2Mul_S_V2(h.x, b, box2d.b2Vec2.s_t0), box2d.b2Mul_S_V2(h.z, c, box2d.b2Vec2.s_t1), box2d.b2PrismaticJoint.prototype.SolvePositionConstraints.s_P),
            _ = h.x * m + h.y + h.z * _, n = h.x * u + h.y + h.z * n, t.SelfMulSub(p, c), e -= a * _,
            r.SelfMulAdd(s, c), o.positions[this.m_indexA].a = e, o.positions[this.m_indexB].a = i + d * n,
            l <= box2d.b2_linearSlop && x <= box2d.b2_angularSlop;
    }, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "SolvePositionConstraints", box2d.b2PrismaticJoint.prototype.SolvePositionConstraints),
    box2d.b2PrismaticJoint.prototype.SolvePositionConstraints.s_d = new box2d.b2Vec2(),
    box2d.b2PrismaticJoint.prototype.SolvePositionConstraints.s_impulse = new box2d.b2Vec3(),
    box2d.b2PrismaticJoint.prototype.SolvePositionConstraints.s_impulse1 = new box2d.b2Vec2(),
    box2d.b2PrismaticJoint.prototype.SolvePositionConstraints.s_P = new box2d.b2Vec2(),
    box2d.b2PrismaticJoint.prototype.GetAnchorA = function(o) {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, o);
    }, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "GetAnchorA", box2d.b2PrismaticJoint.prototype.GetAnchorA),
    box2d.b2PrismaticJoint.prototype.GetAnchorB = function(o) {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, o);
    }, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "GetAnchorB", box2d.b2PrismaticJoint.prototype.GetAnchorB),
    box2d.b2PrismaticJoint.prototype.GetReactionForce = function(o, t) {
        return t.Set(o * (this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.x), o * (this.m_impulse.x * this.m_perp.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.y));
    }, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "GetReactionForce", box2d.b2PrismaticJoint.prototype.GetReactionForce),
    box2d.b2PrismaticJoint.prototype.GetReactionTorque = function(o) {
        return o * this.m_impulse.y;
    }, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "GetReactionTorque", box2d.b2PrismaticJoint.prototype.GetReactionTorque),
    box2d.b2PrismaticJoint.prototype.GetLocalAnchorA = function(o) {
        return o.Copy(this.m_localAnchorA);
    }, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "GetLocalAnchorA", box2d.b2PrismaticJoint.prototype.GetLocalAnchorA),
    box2d.b2PrismaticJoint.prototype.GetLocalAnchorB = function(o) {
        return o.Copy(this.m_localAnchorB);
    }, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "GetLocalAnchorB", box2d.b2PrismaticJoint.prototype.GetLocalAnchorB),
    box2d.b2PrismaticJoint.prototype.GetLocalAxisA = function(o) {
        return o.Copy(this.m_localXAxisA);
    }, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "GetLocalAxisA", box2d.b2PrismaticJoint.prototype.GetLocalAxisA),
    box2d.b2PrismaticJoint.prototype.GetReferenceAngle = function() {
        return this.m_referenceAngle;
    }, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "GetReferenceAngle", box2d.b2PrismaticJoint.prototype.GetReferenceAngle),
    box2d.b2PrismaticJoint.prototype.GetJointTranslation = function() {
        var o = this.m_bodyA.GetWorldPoint(this.m_localAnchorA, box2d.b2PrismaticJoint.prototype.GetJointTranslation.s_pA),
            t = this.m_bodyB.GetWorldPoint(this.m_localAnchorB, box2d.b2PrismaticJoint.prototype.GetJointTranslation.s_pB);
        o = box2d.b2Sub_V2_V2(t, o, box2d.b2PrismaticJoint.prototype.GetJointTranslation.s_d),
            t = this.m_bodyA.GetWorldVector(this.m_localXAxisA, box2d.b2PrismaticJoint.prototype.GetJointTranslation.s_axis);
        return box2d.b2Dot_V2_V2(o, t);
    }, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "GetJointTranslation", box2d.b2PrismaticJoint.prototype.GetJointTranslation),
    box2d.b2PrismaticJoint.prototype.GetJointTranslation.s_pA = new box2d.b2Vec2(),
    box2d.b2PrismaticJoint.prototype.GetJointTranslation.s_pB = new box2d.b2Vec2(),
    box2d.b2PrismaticJoint.prototype.GetJointTranslation.s_d = new box2d.b2Vec2(), box2d.b2PrismaticJoint.prototype.GetJointTranslation.s_axis = new box2d.b2Vec2(),
    box2d.b2PrismaticJoint.prototype.GetJointSpeed = function() {
        var o = this.m_bodyA,
            t = this.m_bodyB;
        box2d.b2Sub_V2_V2(this.m_localAnchorA, o.m_sweep.localCenter, this.m_lalcA);
        var e = box2d.b2Mul_R_V2(o.m_xf.q, this.m_lalcA, this.m_rA);
        box2d.b2Sub_V2_V2(this.m_localAnchorB, t.m_sweep.localCenter, this.m_lalcB);
        var r = box2d.b2Mul_R_V2(t.m_xf.q, this.m_lalcB, this.m_rB),
            i = box2d.b2Add_V2_V2(o.m_sweep.c, e, box2d.b2Vec2.s_t0),
            b = box2d.b2Add_V2_V2(t.m_sweep.c, r, box2d.b2Vec2.s_t1),
            n = (i = box2d.b2Sub_V2_V2(b, i, box2d.b2Vec2.s_t2),
                b = o.GetWorldVector(this.m_localXAxisA, this.m_axis), o.m_linearVelocity),
            p = t.m_linearVelocity;
        o = o.m_angularVelocity, t = t.m_angularVelocity;
        return box2d.b2Dot_V2_V2(i, box2d.b2Cross_S_V2(o, b, box2d.b2Vec2.s_t0)) + box2d.b2Dot_V2_V2(b, box2d.b2Sub_V2_V2(box2d.b2AddCross_V2_S_V2(p, t, r, box2d.b2Vec2.s_t0), box2d.b2AddCross_V2_S_V2(n, o, e, box2d.b2Vec2.s_t1), box2d.b2Vec2.s_t0));
    }, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "GetJointSpeed", box2d.b2PrismaticJoint.prototype.GetJointSpeed),
    box2d.b2PrismaticJoint.prototype.IsLimitEnabled = function() {
        return this.m_enableLimit;
    }, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "IsLimitEnabled", box2d.b2PrismaticJoint.prototype.IsLimitEnabled),
    box2d.b2PrismaticJoint.prototype.EnableLimit = function(o) {
        o !== this.m_enableLimit && (this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0),
            this.m_enableLimit = o, this.m_impulse.z = 0);
    }, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "EnableLimit", box2d.b2PrismaticJoint.prototype.EnableLimit),
    box2d.b2PrismaticJoint.prototype.GetLowerLimit = function() {
        return this.m_lowerTranslation;
    }, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "GetLowerLimit", box2d.b2PrismaticJoint.prototype.GetLowerLimit),
    box2d.b2PrismaticJoint.prototype.GetUpperLimit = function() {
        return this.m_upperTranslation;
    }, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "GetUpperLimit", box2d.b2PrismaticJoint.prototype.GetUpperLimit),
    box2d.b2PrismaticJoint.prototype.SetLimits = function(o, t) {
        o === this.m_lowerTranslation && t === this.m_upperTranslation || (this.m_bodyA.SetAwake(!0),
            this.m_bodyB.SetAwake(!0), this.m_lowerTranslation = o, this.m_upperTranslation = t,
            this.m_impulse.z = 0);
    }, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "SetLimits", box2d.b2PrismaticJoint.prototype.SetLimits),
    box2d.b2PrismaticJoint.prototype.IsMotorEnabled = function() {
        return this.m_enableMotor;
    }, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "IsMotorEnabled", box2d.b2PrismaticJoint.prototype.IsMotorEnabled),
    box2d.b2PrismaticJoint.prototype.EnableMotor = function(o) {
        this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), this.m_enableMotor = o;
    }, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "EnableMotor", box2d.b2PrismaticJoint.prototype.EnableMotor),
    box2d.b2PrismaticJoint.prototype.SetMotorSpeed = function(o) {
        this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), this.m_motorSpeed = o;
    }, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "SetMotorSpeed", box2d.b2PrismaticJoint.prototype.SetMotorSpeed),
    box2d.b2PrismaticJoint.prototype.GetMotorSpeed = function() {
        return this.m_motorSpeed;
    }, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "GetMotorSpeed", box2d.b2PrismaticJoint.prototype.GetMotorSpeed),
    box2d.b2PrismaticJoint.prototype.SetMaxMotorForce = function(o) {
        this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), this.m_maxMotorForce = o;
    }, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "SetMaxMotorForce", box2d.b2PrismaticJoint.prototype.SetMaxMotorForce),
    box2d.b2PrismaticJoint.prototype.GetMaxMotorForce = function() {
        return this.m_maxMotorForce;
    }, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "GetMaxMotorForce", box2d.b2PrismaticJoint.prototype.GetMaxMotorForce),
    box2d.b2PrismaticJoint.prototype.GetMotorForce = function(o) {
        return o * this.m_motorImpulse;
    }, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "GetMotorForce", box2d.b2PrismaticJoint.prototype.GetMotorForce),
    box2d.b2PrismaticJoint.prototype.Dump = function() {
        if (box2d.DEBUG) {
            var o = this.m_bodyA.m_islandIndex,
                t = this.m_bodyB.m_islandIndex;
            box2d.b2Log("  /*box2d.b2PrismaticJointDef*/ var jd = new box2d.b2PrismaticJointDef();\n"),
                box2d.b2Log("  jd.bodyA = bodies[%d];\n", o), box2d.b2Log("  jd.bodyB = bodies[%d];\n", t),
                box2d.b2Log("  jd.collideConnected = %s;\n", this.m_collideConnected ? "true" : "false"),
                box2d.b2Log("  jd.localAnchorA.Set(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y),
                box2d.b2Log("  jd.localAnchorB.Set(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y),
                box2d.b2Log("  jd.localAxisA.Set(%.15f, %.15f);\n", this.m_localXAxisA.x, this.m_localXAxisA.y),
                box2d.b2Log("  jd.referenceAngle = %.15f;\n", this.m_referenceAngle), box2d.b2Log("  jd.enableLimit = %s;\n", this.m_enableLimit ? "true" : "false"),
                box2d.b2Log("  jd.lowerTranslation = %.15f;\n", this.m_lowerTranslation), box2d.b2Log("  jd.upperTranslation = %.15f;\n", this.m_upperTranslation),
                box2d.b2Log("  jd.enableMotor = %s;\n", this.m_enableMotor ? "true" : "false"),
                box2d.b2Log("  jd.motorSpeed = %.15f;\n", this.m_motorSpeed), box2d.b2Log("  jd.maxMotorForce = %.15f;\n", this.m_maxMotorForce),
                box2d.b2Log("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index);
        }
    }, goog.exportProperty(box2d.b2PrismaticJoint.prototype, "Dump", box2d.b2PrismaticJoint.prototype.Dump),
    box2d.b2_minPulleyLength = 2, goog.exportSymbol("box2d.b2_minPulleyLength", box2d.b2_minPulleyLength),
    box2d.b2PulleyJointDef = function() {
        box2d.b2JointDef.call(this, box2d.b2JointType.e_pulleyJoint), this.collideConnected = !0,
            this.groundAnchorA = new box2d.b2Vec2(-1, 1), this.groundAnchorB = new box2d.b2Vec2(1, 1),
            this.localAnchorA = new box2d.b2Vec2(-1, 0), this.localAnchorB = new box2d.b2Vec2(1, 0);
    }, goog.inherits(box2d.b2PulleyJointDef, box2d.b2JointDef), goog.exportSymbol("box2d.b2PulleyJointDef", box2d.b2PulleyJointDef),
    box2d.b2PulleyJointDef.prototype.groundAnchorA = null, goog.exportProperty(box2d.b2PulleyJointDef.prototype, "groundAnchorA", box2d.b2PulleyJointDef.prototype.groundAnchorA),
    box2d.b2PulleyJointDef.prototype.groundAnchorB = null, goog.exportProperty(box2d.b2PulleyJointDef.prototype, "groundAnchorB", box2d.b2PulleyJointDef.prototype.groundAnchorB),
    box2d.b2PulleyJointDef.prototype.localAnchorA = null, goog.exportProperty(box2d.b2PulleyJointDef.prototype, "localAnchorA", box2d.b2PulleyJointDef.prototype.localAnchorA),
    box2d.b2PulleyJointDef.prototype.localAnchorB = null, goog.exportProperty(box2d.b2PulleyJointDef.prototype, "localAnchorB", box2d.b2PulleyJointDef.prototype.localAnchorB),
    box2d.b2PulleyJointDef.prototype.lengthA = 0, goog.exportProperty(box2d.b2PulleyJointDef.prototype, "lengthA", box2d.b2PulleyJointDef.prototype.lengthA),
    box2d.b2PulleyJointDef.prototype.lengthB = 0, goog.exportProperty(box2d.b2PulleyJointDef.prototype, "lengthB", box2d.b2PulleyJointDef.prototype.lengthB),
    box2d.b2PulleyJointDef.prototype.ratio = 1, goog.exportProperty(box2d.b2PulleyJointDef.prototype, "ratio", box2d.b2PulleyJointDef.prototype.ratio),
    box2d.b2PulleyJointDef.prototype.Initialize = function(o, t, e, r, i, b, n) {
        this.bodyA = o, this.bodyB = t, this.groundAnchorA.Copy(e), this.groundAnchorB.Copy(r),
            this.bodyA.GetLocalPoint(i, this.localAnchorA), this.bodyB.GetLocalPoint(b, this.localAnchorB),
            this.lengthA = box2d.b2Distance(i, e), this.lengthB = box2d.b2Distance(b, r), this.ratio = n,
            box2d.ENABLE_ASSERTS && box2d.b2Assert(this.ratio > box2d.b2_epsilon);
    }, goog.exportProperty(box2d.b2PulleyJointDef.prototype, "Initialize", box2d.b2PulleyJointDef.prototype.Initialize),
    box2d.b2PulleyJoint = function(o) {
        box2d.b2Joint.call(this, o), this.m_groundAnchorA = new box2d.b2Vec2(), this.m_groundAnchorB = new box2d.b2Vec2(),
            this.m_localAnchorA = new box2d.b2Vec2(), this.m_localAnchorB = new box2d.b2Vec2(),
            this.m_uA = new box2d.b2Vec2(), this.m_uB = new box2d.b2Vec2(), this.m_rA = new box2d.b2Vec2(),
            this.m_rB = new box2d.b2Vec2(), this.m_localCenterA = new box2d.b2Vec2(), this.m_localCenterB = new box2d.b2Vec2(),
            this.m_qA = new box2d.b2Rot(), this.m_qB = new box2d.b2Rot(), this.m_lalcA = new box2d.b2Vec2(),
            this.m_lalcB = new box2d.b2Vec2(), this.m_groundAnchorA.Copy(o.groundAnchorA), this.m_groundAnchorB.Copy(o.groundAnchorB),
            this.m_localAnchorA.Copy(o.localAnchorA), this.m_localAnchorB.Copy(o.localAnchorB),
            this.m_lengthA = o.lengthA, this.m_lengthB = o.lengthB, box2d.ENABLE_ASSERTS && box2d.b2Assert(0 !== o.ratio),
            this.m_ratio = o.ratio, this.m_constant = o.lengthA + this.m_ratio * o.lengthB,
            this.m_impulse = 0;
    }, goog.inherits(box2d.b2PulleyJoint, box2d.b2Joint), goog.exportSymbol("box2d.b2PulleyJoint", box2d.b2PulleyJoint),
    box2d.b2PulleyJoint.prototype.m_groundAnchorA = null, goog.exportProperty(box2d.b2PulleyJoint.prototype, "m_groundAnchorA", box2d.b2PulleyJoint.prototype.m_groundAnchorA),
    box2d.b2PulleyJoint.prototype.m_groundAnchorB = null, goog.exportProperty(box2d.b2PulleyJoint.prototype, "m_groundAnchorB", box2d.b2PulleyJoint.prototype.m_groundAnchorB),
    box2d.b2PulleyJoint.prototype.m_lengthA = 0, goog.exportProperty(box2d.b2PulleyJoint.prototype, "m_lengthA", box2d.b2PulleyJoint.prototype.m_lengthA),
    box2d.b2PulleyJoint.prototype.m_lengthB = 0, goog.exportProperty(box2d.b2PulleyJoint.prototype, "m_lengthB", box2d.b2PulleyJoint.prototype.m_lengthB),
    box2d.b2PulleyJoint.prototype.m_localAnchorA = null, goog.exportProperty(box2d.b2PulleyJoint.prototype, "m_localAnchorA", box2d.b2PulleyJoint.prototype.m_localAnchorA),
    box2d.b2PulleyJoint.prototype.m_localAnchorB = null, goog.exportProperty(box2d.b2PulleyJoint.prototype, "m_localAnchorB", box2d.b2PulleyJoint.prototype.m_localAnchorB),
    box2d.b2PulleyJoint.prototype.m_constant = 0, goog.exportProperty(box2d.b2PulleyJoint.prototype, "m_constant", box2d.b2PulleyJoint.prototype.m_constant),
    box2d.b2PulleyJoint.prototype.m_ratio = 0, goog.exportProperty(box2d.b2PulleyJoint.prototype, "m_ratio", box2d.b2PulleyJoint.prototype.m_ratio),
    box2d.b2PulleyJoint.prototype.m_impulse = 0, goog.exportProperty(box2d.b2PulleyJoint.prototype, "m_impulse", box2d.b2PulleyJoint.prototype.m_impulse),
    box2d.b2PulleyJoint.prototype.m_indexA = 0, goog.exportProperty(box2d.b2PulleyJoint.prototype, "m_indexA", box2d.b2PulleyJoint.prototype.m_indexA),
    box2d.b2PulleyJoint.prototype.m_indexB = 0, goog.exportProperty(box2d.b2PulleyJoint.prototype, "m_indexB", box2d.b2PulleyJoint.prototype.m_indexB),
    box2d.b2PulleyJoint.prototype.m_uA = null, goog.exportProperty(box2d.b2PulleyJoint.prototype, "m_uA", box2d.b2PulleyJoint.prototype.m_uA),
    box2d.b2PulleyJoint.prototype.m_uB = null, goog.exportProperty(box2d.b2PulleyJoint.prototype, "m_uB", box2d.b2PulleyJoint.prototype.m_uB),
    box2d.b2PulleyJoint.prototype.m_rA = null, goog.exportProperty(box2d.b2PulleyJoint.prototype, "m_rA", box2d.b2PulleyJoint.prototype.m_rA),
    box2d.b2PulleyJoint.prototype.m_rB = null, goog.exportProperty(box2d.b2PulleyJoint.prototype, "m_rB", box2d.b2PulleyJoint.prototype.m_rB),
    box2d.b2PulleyJoint.prototype.m_localCenterA = null, goog.exportProperty(box2d.b2PulleyJoint.prototype, "m_localCenterA", box2d.b2PulleyJoint.prototype.m_localCenterA),
    box2d.b2PulleyJoint.prototype.m_localCenterB = null, goog.exportProperty(box2d.b2PulleyJoint.prototype, "m_localCenterB", box2d.b2PulleyJoint.prototype.m_localCenterB),
    box2d.b2PulleyJoint.prototype.m_invMassA = 0, goog.exportProperty(box2d.b2PulleyJoint.prototype, "m_invMassA", box2d.b2PulleyJoint.prototype.m_invMassA),
    box2d.b2PulleyJoint.prototype.m_invMassB = 0, goog.exportProperty(box2d.b2PulleyJoint.prototype, "m_invMassB", box2d.b2PulleyJoint.prototype.m_invMassB),
    box2d.b2PulleyJoint.prototype.m_invIA = 0, goog.exportProperty(box2d.b2PulleyJoint.prototype, "m_invIA", box2d.b2PulleyJoint.prototype.m_invIA),
    box2d.b2PulleyJoint.prototype.m_invIB = 0, goog.exportProperty(box2d.b2PulleyJoint.prototype, "m_invIB", box2d.b2PulleyJoint.prototype.m_invIB),
    box2d.b2PulleyJoint.prototype.m_mass = 0, goog.exportProperty(box2d.b2PulleyJoint.prototype, "m_mass", box2d.b2PulleyJoint.prototype.m_mass),
    box2d.b2PulleyJoint.prototype.m_qA = null, goog.exportProperty(box2d.b2PulleyJoint.prototype, "m_qA", box2d.b2PulleyJoint.prototype.m_qA),
    box2d.b2PulleyJoint.prototype.m_qB = null, goog.exportProperty(box2d.b2PulleyJoint.prototype, "m_qB", box2d.b2PulleyJoint.prototype.m_qB),
    box2d.b2PulleyJoint.prototype.m_lalcA = null, goog.exportProperty(box2d.b2PulleyJoint.prototype, "m_lalcA", box2d.b2PulleyJoint.prototype.m_lalcA),
    box2d.b2PulleyJoint.prototype.m_lalcB = null, goog.exportProperty(box2d.b2PulleyJoint.prototype, "m_lalcB", box2d.b2PulleyJoint.prototype.m_lalcB),
    box2d.b2PulleyJoint.prototype.InitVelocityConstraints = function(o) {
        this.m_indexA = this.m_bodyA.m_islandIndex, this.m_indexB = this.m_bodyB.m_islandIndex,
            this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter), this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter),
            this.m_invMassA = this.m_bodyA.m_invMass, this.m_invMassB = this.m_bodyB.m_invMass,
            this.m_invIA = this.m_bodyA.m_invI, this.m_invIB = this.m_bodyB.m_invI;
        var t = o.positions[this.m_indexA].c,
            e = o.velocities[this.m_indexA].v,
            r = o.velocities[this.m_indexA].w,
            i = o.positions[this.m_indexB].c,
            b = o.positions[this.m_indexB].a,
            n = o.velocities[this.m_indexB].v,
            p = o.velocities[this.m_indexB].w,
            s = this.m_qA.SetAngle(o.positions[this.m_indexA].a);
        b = this.m_qB.SetAngle(b);
        box2d.b2Sub_V2_V2(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA), box2d.b2Mul_R_V2(s, this.m_lalcA, this.m_rA),
            box2d.b2Sub_V2_V2(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB), box2d.b2Mul_R_V2(b, this.m_lalcB, this.m_rB),
            this.m_uA.Copy(t).SelfAdd(this.m_rA).SelfSub(this.m_groundAnchorA), this.m_uB.Copy(i).SelfAdd(this.m_rB).SelfSub(this.m_groundAnchorB),
            t = this.m_uA.Length(), i = this.m_uB.Length(), t > 10 * box2d.b2_linearSlop ? this.m_uA.SelfMul(1 / t) : this.m_uA.SetZero(),
            i > 10 * box2d.b2_linearSlop ? this.m_uB.SelfMul(1 / i) : this.m_uB.SetZero(), t = box2d.b2Cross_V2_V2(this.m_rA, this.m_uA),
            i = box2d.b2Cross_V2_V2(this.m_rB, this.m_uB), this.m_mass = this.m_invMassA + this.m_invIA * t * t + this.m_ratio * this.m_ratio * (this.m_invMassB + this.m_invIB * i * i),
            0 < this.m_mass && (this.m_mass = 1 / this.m_mass), o.step.warmStarting ? (this.m_impulse *= o.step.dtRatio,
                t = box2d.b2Mul_S_V2(-this.m_impulse, this.m_uA, box2d.b2PulleyJoint.prototype.InitVelocityConstraints.s_PA),
                i = box2d.b2Mul_S_V2(-this.m_ratio * this.m_impulse, this.m_uB, box2d.b2PulleyJoint.prototype.InitVelocityConstraints.s_PB),
                e.SelfMulAdd(this.m_invMassA, t), r += this.m_invIA * box2d.b2Cross_V2_V2(this.m_rA, t),
                n.SelfMulAdd(this.m_invMassB, i), p += this.m_invIB * box2d.b2Cross_V2_V2(this.m_rB, i)) : this.m_impulse = 0,
            o.velocities[this.m_indexA].w = r, o.velocities[this.m_indexB].w = p;
    }, goog.exportProperty(box2d.b2PulleyJoint.prototype, "InitVelocityConstraints", box2d.b2PulleyJoint.prototype.InitVelocityConstraints),
    box2d.b2PulleyJoint.prototype.InitVelocityConstraints.s_PA = new box2d.b2Vec2(),
    box2d.b2PulleyJoint.prototype.InitVelocityConstraints.s_PB = new box2d.b2Vec2(),
    box2d.b2PulleyJoint.prototype.SolveVelocityConstraints = function(o) {
        var t = o.velocities[this.m_indexA].v,
            e = o.velocities[this.m_indexA].w,
            r = o.velocities[this.m_indexB].v,
            i = o.velocities[this.m_indexB].w,
            b = box2d.b2AddCross_V2_S_V2(t, e, this.m_rA, box2d.b2PulleyJoint.prototype.SolveVelocityConstraints.s_vpA),
            n = box2d.b2AddCross_V2_S_V2(r, i, this.m_rB, box2d.b2PulleyJoint.prototype.SolveVelocityConstraints.s_vpB);
        b = -box2d.b2Dot_V2_V2(this.m_uA, b) - this.m_ratio * box2d.b2Dot_V2_V2(this.m_uB, n),
            n = -this.m_mass * b;
        this.m_impulse += n, b = box2d.b2Mul_S_V2(-n, this.m_uA, box2d.b2PulleyJoint.prototype.SolveVelocityConstraints.s_PA),
            n = box2d.b2Mul_S_V2(-this.m_ratio * n, this.m_uB, box2d.b2PulleyJoint.prototype.SolveVelocityConstraints.s_PB),
            t.SelfMulAdd(this.m_invMassA, b), e += this.m_invIA * box2d.b2Cross_V2_V2(this.m_rA, b),
            r.SelfMulAdd(this.m_invMassB, n), i += this.m_invIB * box2d.b2Cross_V2_V2(this.m_rB, n),
            o.velocities[this.m_indexA].w = e, o.velocities[this.m_indexB].w = i;
    }, goog.exportProperty(box2d.b2PulleyJoint.prototype, "SolveVelocityConstraints", box2d.b2PulleyJoint.prototype.SolveVelocityConstraints),
    box2d.b2PulleyJoint.prototype.SolveVelocityConstraints.s_vpA = new box2d.b2Vec2(),
    box2d.b2PulleyJoint.prototype.SolveVelocityConstraints.s_vpB = new box2d.b2Vec2(),
    box2d.b2PulleyJoint.prototype.SolveVelocityConstraints.s_PA = new box2d.b2Vec2(),
    box2d.b2PulleyJoint.prototype.SolveVelocityConstraints.s_PB = new box2d.b2Vec2(),
    box2d.b2PulleyJoint.prototype.SolvePositionConstraints = function(o) {
        var t = o.positions[this.m_indexA].c,
            e = o.positions[this.m_indexA].a,
            r = o.positions[this.m_indexB].c,
            i = o.positions[this.m_indexB].a,
            b = this.m_qA.SetAngle(e),
            n = this.m_qB.SetAngle(i);
        box2d.b2Sub_V2_V2(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA), b = box2d.b2Mul_R_V2(b, this.m_lalcA, this.m_rA),
            box2d.b2Sub_V2_V2(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
        n = box2d.b2Mul_R_V2(n, this.m_lalcB, this.m_rB);
        var p = this.m_uA.Copy(t).SelfAdd(b).SelfSub(this.m_groundAnchorA),
            s = this.m_uB.Copy(r).SelfAdd(n).SelfSub(this.m_groundAnchorB),
            a = p.Length(),
            d = s.Length();
        a > 10 * box2d.b2_linearSlop ? p.SelfMul(1 / a) : p.SetZero(), d > 10 * box2d.b2_linearSlop ? s.SelfMul(1 / d) : s.SetZero();
        var l = box2d.b2Cross_V2_V2(b, p),
            x = box2d.b2Cross_V2_V2(n, s);
        return 0 < (l = this.m_invMassA + this.m_invIA * l * l + this.m_ratio * this.m_ratio * (this.m_invMassB + this.m_invIB * x * x)) && (l = 1 / l),
            d = this.m_constant - a - this.m_ratio * d, a = box2d.b2Abs(d), d *= -l, p = box2d.b2Mul_S_V2(-d, p, box2d.b2PulleyJoint.prototype.SolvePositionConstraints.s_PA),
            s = box2d.b2Mul_S_V2(-this.m_ratio * d, s, box2d.b2PulleyJoint.prototype.SolvePositionConstraints.s_PB),
            t.SelfMulAdd(this.m_invMassA, p), e += this.m_invIA * box2d.b2Cross_V2_V2(b, p),
            r.SelfMulAdd(this.m_invMassB, s), i += this.m_invIB * box2d.b2Cross_V2_V2(n, s),
            o.positions[this.m_indexA].a = e, o.positions[this.m_indexB].a = i, a < box2d.b2_linearSlop;
    }, goog.exportProperty(box2d.b2PulleyJoint.prototype, "SolvePositionConstraints", box2d.b2PulleyJoint.prototype.SolvePositionConstraints),
    box2d.b2PulleyJoint.prototype.SolvePositionConstraints.s_PA = new box2d.b2Vec2(),
    box2d.b2PulleyJoint.prototype.SolvePositionConstraints.s_PB = new box2d.b2Vec2(),
    box2d.b2PulleyJoint.prototype.GetAnchorA = function(o) {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, o);
    }, goog.exportProperty(box2d.b2PulleyJoint.prototype, "GetAnchorA", box2d.b2PulleyJoint.prototype.GetAnchorA),
    box2d.b2PulleyJoint.prototype.GetAnchorB = function(o) {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, o);
    }, goog.exportProperty(box2d.b2PulleyJoint.prototype, "GetAnchorB", box2d.b2PulleyJoint.prototype.GetAnchorB),
    box2d.b2PulleyJoint.prototype.GetReactionForce = function(o, t) {
        return t.Set(o * this.m_impulse * this.m_uB.x, o * this.m_impulse * this.m_uB.y);
    }, goog.exportProperty(box2d.b2PulleyJoint.prototype, "GetReactionForce", box2d.b2PulleyJoint.prototype.GetReactionForce),
    box2d.b2PulleyJoint.prototype.GetReactionTorque = function(o) {
        return 0;
    }, goog.exportProperty(box2d.b2PulleyJoint.prototype, "GetReactionTorque", box2d.b2PulleyJoint.prototype.GetReactionTorque),
    box2d.b2PulleyJoint.prototype.GetGroundAnchorA = function(o) {
        return o.Copy(this.m_groundAnchorA);
    }, goog.exportProperty(box2d.b2PulleyJoint.prototype, "GetGroundAnchorA", box2d.b2PulleyJoint.prototype.GetGroundAnchorA),
    box2d.b2PulleyJoint.prototype.GetGroundAnchorB = function(o) {
        return o.Copy(this.m_groundAnchorB);
    }, goog.exportProperty(box2d.b2PulleyJoint.prototype, "GetGroundAnchorB", box2d.b2PulleyJoint.prototype.GetGroundAnchorB),
    box2d.b2PulleyJoint.prototype.GetLengthA = function() {
        return this.m_lengthA;
    }, goog.exportProperty(box2d.b2PulleyJoint.prototype, "GetLengthA", box2d.b2PulleyJoint.prototype.GetLengthA),
    box2d.b2PulleyJoint.prototype.GetLengthB = function() {
        return this.m_lengthB;
    }, goog.exportProperty(box2d.b2PulleyJoint.prototype, "GetLengthB", box2d.b2PulleyJoint.prototype.GetLengthB),
    box2d.b2PulleyJoint.prototype.GetRatio = function() {
        return this.m_ratio;
    }, goog.exportProperty(box2d.b2PulleyJoint.prototype, "GetRatio", box2d.b2PulleyJoint.prototype.GetRatio),
    box2d.b2PulleyJoint.prototype.GetCurrentLengthA = function() {
        var o = this.m_bodyA.GetWorldPoint(this.m_localAnchorA, box2d.b2PulleyJoint.prototype.GetCurrentLengthA.s_p);
        return box2d.b2Distance(o, this.m_groundAnchorA);
    }, goog.exportProperty(box2d.b2PulleyJoint.prototype, "GetCurrentLengthA", box2d.b2PulleyJoint.prototype.GetCurrentLengthA),
    box2d.b2PulleyJoint.prototype.GetCurrentLengthA.s_p = new box2d.b2Vec2(), box2d.b2PulleyJoint.prototype.GetCurrentLengthB = function() {
        var o = this.m_bodyB.GetWorldPoint(this.m_localAnchorB, box2d.b2PulleyJoint.prototype.GetCurrentLengthB.s_p);
        return box2d.b2Distance(o, this.m_groundAnchorB);
    }, goog.exportProperty(box2d.b2PulleyJoint.prototype, "GetCurrentLengthB", box2d.b2PulleyJoint.prototype.GetCurrentLengthB),
    box2d.b2PulleyJoint.prototype.GetCurrentLengthB.s_p = new box2d.b2Vec2(), box2d.b2PulleyJoint.prototype.Dump = function() {
        if (box2d.DEBUG) {
            var o = this.m_bodyA.m_islandIndex,
                t = this.m_bodyB.m_islandIndex;
            box2d.b2Log("  /*box2d.b2PulleyJointDef*/ var jd = new box2d.b2PulleyJointDef();\n"),
                box2d.b2Log("  jd.bodyA = bodies[%d];\n", o), box2d.b2Log("  jd.bodyB = bodies[%d];\n", t),
                box2d.b2Log("  jd.collideConnected = %s;\n", this.m_collideConnected ? "true" : "false"),
                box2d.b2Log("  jd.groundAnchorA.Set(%.15f, %.15f);\n", this.m_groundAnchorA.x, this.m_groundAnchorA.y),
                box2d.b2Log("  jd.groundAnchorB.Set(%.15f, %.15f);\n", this.m_groundAnchorB.x, this.m_groundAnchorB.y),
                box2d.b2Log("  jd.localAnchorA.Set(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y),
                box2d.b2Log("  jd.localAnchorB.Set(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y),
                box2d.b2Log("  jd.lengthA = %.15f;\n", this.m_lengthA), box2d.b2Log("  jd.lengthB = %.15f;\n", this.m_lengthB),
                box2d.b2Log("  jd.ratio = %.15f;\n", this.m_ratio), box2d.b2Log("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index);
        }
    }, goog.exportProperty(box2d.b2PulleyJoint.prototype, "Dump", box2d.b2PulleyJoint.prototype.Dump),
    box2d.b2PulleyJoint.prototype.ShiftOrigin = function(o) {
        this.m_groundAnchorA.SelfSub(o), this.m_groundAnchorB.SelfSub(o);
    }, goog.exportProperty(box2d.b2PulleyJoint.prototype, "ShiftOrigin", box2d.b2PulleyJoint.prototype.ShiftOrigin),
    box2d.b2RevoluteJointDef = function() {
        box2d.b2JointDef.call(this, box2d.b2JointType.e_revoluteJoint), this.localAnchorA = new box2d.b2Vec2(0, 0),
            this.localAnchorB = new box2d.b2Vec2(0, 0);
    }, goog.inherits(box2d.b2RevoluteJointDef, box2d.b2JointDef), goog.exportSymbol("box2d.b2RevoluteJointDef", box2d.b2RevoluteJointDef),
    box2d.b2RevoluteJointDef.prototype.localAnchorA = null, goog.exportProperty(box2d.b2RevoluteJointDef.prototype, "localAnchorA", box2d.b2RevoluteJointDef.prototype.localAnchorA),
    box2d.b2RevoluteJointDef.prototype.localAnchorB = null, goog.exportProperty(box2d.b2RevoluteJointDef.prototype, "localAnchorB", box2d.b2RevoluteJointDef.prototype.localAnchorB),
    box2d.b2RevoluteJointDef.prototype.referenceAngle = 0, goog.exportProperty(box2d.b2RevoluteJointDef.prototype, "referenceAngle", box2d.b2RevoluteJointDef.prototype.referenceAngle),
    box2d.b2RevoluteJointDef.prototype.enableLimit = !1, goog.exportProperty(box2d.b2RevoluteJointDef.prototype, "enableLimit", box2d.b2RevoluteJointDef.prototype.enableLimit),
    box2d.b2RevoluteJointDef.prototype.lowerAngle = 0, goog.exportProperty(box2d.b2RevoluteJointDef.prototype, "lowerAngle", box2d.b2RevoluteJointDef.prototype.lowerAngle),
    box2d.b2RevoluteJointDef.prototype.upperAngle = 0, goog.exportProperty(box2d.b2RevoluteJointDef.prototype, "upperAngle", box2d.b2RevoluteJointDef.prototype.upperAngle),
    box2d.b2RevoluteJointDef.prototype.enableMotor = !1, goog.exportProperty(box2d.b2RevoluteJointDef.prototype, "enableMotor", box2d.b2RevoluteJointDef.prototype.enableMotor),
    box2d.b2RevoluteJointDef.prototype.motorSpeed = 0, goog.exportProperty(box2d.b2RevoluteJointDef.prototype, "motorSpeed", box2d.b2RevoluteJointDef.prototype.motorSpeed),
    box2d.b2RevoluteJointDef.prototype.maxMotorTorque = 0, goog.exportProperty(box2d.b2RevoluteJointDef.prototype, "maxMotorTorque", box2d.b2RevoluteJointDef.prototype.maxMotorTorque),
    box2d.b2RevoluteJointDef.prototype.Initialize = function(o, t, e) {
        this.bodyA = o, this.bodyB = t, this.bodyA.GetLocalPoint(e, this.localAnchorA),
            this.bodyB.GetLocalPoint(e, this.localAnchorB), this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle();
    }, goog.exportProperty(box2d.b2RevoluteJointDef.prototype, "Initialize", box2d.b2RevoluteJointDef.prototype.Initialize),
    box2d.b2RevoluteJoint = function(o) {
        box2d.b2Joint.call(this, o), this.m_localAnchorA = new box2d.b2Vec2(), this.m_localAnchorB = new box2d.b2Vec2(),
            this.m_impulse = new box2d.b2Vec3(), this.m_rA = new box2d.b2Vec2(), this.m_rB = new box2d.b2Vec2(),
            this.m_localCenterA = new box2d.b2Vec2(), this.m_localCenterB = new box2d.b2Vec2(),
            this.m_mass = new box2d.b2Mat33(), this.m_qA = new box2d.b2Rot(), this.m_qB = new box2d.b2Rot(),
            this.m_lalcA = new box2d.b2Vec2(), this.m_lalcB = new box2d.b2Vec2(), this.m_K = new box2d.b2Mat22(),
            this.m_localAnchorA.Copy(o.localAnchorA), this.m_localAnchorB.Copy(o.localAnchorB),
            this.m_referenceAngle = o.referenceAngle, this.m_impulse.SetZero(), this.m_motorImpulse = 0,
            this.m_lowerAngle = o.lowerAngle, this.m_upperAngle = o.upperAngle, this.m_maxMotorTorque = o.maxMotorTorque,
            this.m_motorSpeed = o.motorSpeed, this.m_enableLimit = o.enableLimit, this.m_enableMotor = o.enableMotor,
            this.m_limitState = box2d.b2LimitState.e_inactiveLimit;
    }, goog.inherits(box2d.b2RevoluteJoint, box2d.b2Joint), goog.exportSymbol("box2d.b2RevoluteJoint", box2d.b2RevoluteJoint),
    box2d.b2RevoluteJoint.prototype.m_localAnchorA = null, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "m_localAnchorA", box2d.b2RevoluteJoint.prototype.m_localAnchorA),
    box2d.b2RevoluteJoint.prototype.m_localAnchorB = null, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "m_localAnchorB", box2d.b2RevoluteJoint.prototype.m_localAnchorB),
    box2d.b2RevoluteJoint.prototype.m_impulse = null, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "m_impulse", box2d.b2RevoluteJoint.prototype.m_impulse),
    box2d.b2RevoluteJoint.prototype.m_motorImpulse = 0, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "m_motorImpulse", box2d.b2RevoluteJoint.prototype.m_motorImpulse),
    box2d.b2RevoluteJoint.prototype.m_enableMotor = !1, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "m_enableMotor", box2d.b2RevoluteJoint.prototype.m_enableMotor),
    box2d.b2RevoluteJoint.prototype.m_maxMotorTorque = 0, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "m_maxMotorTorque", box2d.b2RevoluteJoint.prototype.m_maxMotorTorque),
    box2d.b2RevoluteJoint.prototype.m_motorSpeed = 0, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "m_motorSpeed", box2d.b2RevoluteJoint.prototype.m_motorSpeed),
    box2d.b2RevoluteJoint.prototype.m_enableLimit = !1, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "m_enableLimit", box2d.b2RevoluteJoint.prototype.m_enableLimit),
    box2d.b2RevoluteJoint.prototype.m_referenceAngle = 0, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "m_referenceAngle", box2d.b2RevoluteJoint.prototype.m_referenceAngle),
    box2d.b2RevoluteJoint.prototype.m_lowerAngle = 0, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "m_lowerAngle", box2d.b2RevoluteJoint.prototype.m_lowerAngle),
    box2d.b2RevoluteJoint.prototype.m_upperAngle = 0, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "m_upperAngle", box2d.b2RevoluteJoint.prototype.m_upperAngle),
    box2d.b2RevoluteJoint.prototype.m_indexA = 0, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "m_indexA", box2d.b2RevoluteJoint.prototype.m_indexA),
    box2d.b2RevoluteJoint.prototype.m_indexB = 0, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "m_indexB", box2d.b2RevoluteJoint.prototype.m_indexB),
    box2d.b2RevoluteJoint.prototype.m_rA = null, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "m_rA", box2d.b2RevoluteJoint.prototype.m_rA),
    box2d.b2RevoluteJoint.prototype.m_rB = null, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "m_rB", box2d.b2RevoluteJoint.prototype.m_rB),
    box2d.b2RevoluteJoint.prototype.m_localCenterA = null, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "m_localCenterA", box2d.b2RevoluteJoint.prototype.m_localCenterA),
    box2d.b2RevoluteJoint.prototype.m_localCenterB = null, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "m_localCenterB", box2d.b2RevoluteJoint.prototype.m_localCenterB),
    box2d.b2RevoluteJoint.prototype.m_invMassA = 0, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "m_invMassA", box2d.b2RevoluteJoint.prototype.m_invMassA),
    box2d.b2RevoluteJoint.prototype.m_invMassB = 0, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "m_invMassB", box2d.b2RevoluteJoint.prototype.m_invMassB),
    box2d.b2RevoluteJoint.prototype.m_invIA = 0, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "m_invIA", box2d.b2RevoluteJoint.prototype.m_invIA),
    box2d.b2RevoluteJoint.prototype.m_invIB = 0, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "m_invIB", box2d.b2RevoluteJoint.prototype.m_invIB),
    box2d.b2RevoluteJoint.prototype.m_mass = null, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "m_mass", box2d.b2RevoluteJoint.prototype.m_mass),
    box2d.b2RevoluteJoint.prototype.m_motorMass = 0, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "m_motorMass", box2d.b2RevoluteJoint.prototype.m_motorMass),
    box2d.b2RevoluteJoint.prototype.m_limitState = box2d.b2LimitState.e_inactiveLimit,
    goog.exportProperty(box2d.b2RevoluteJoint.prototype, "m_limitState", box2d.b2RevoluteJoint.prototype.m_limitState),
    box2d.b2RevoluteJoint.prototype.m_qA = null, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "m_qA", box2d.b2RevoluteJoint.prototype.m_qA),
    box2d.b2RevoluteJoint.prototype.m_qB = null, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "m_qB", box2d.b2RevoluteJoint.prototype.m_qB),
    box2d.b2RevoluteJoint.prototype.m_lalcA = null, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "m_lalcA", box2d.b2RevoluteJoint.prototype.m_lalcA),
    box2d.b2RevoluteJoint.prototype.m_lalcB = null, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "m_lalcB", box2d.b2RevoluteJoint.prototype.m_lalcB),
    box2d.b2RevoluteJoint.prototype.m_K = null, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "m_K", box2d.b2RevoluteJoint.prototype.m_K),
    box2d.b2RevoluteJoint.prototype.InitVelocityConstraints = function(o) {
        this.m_indexA = this.m_bodyA.m_islandIndex, this.m_indexB = this.m_bodyB.m_islandIndex,
            this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter), this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter),
            this.m_invMassA = this.m_bodyA.m_invMass, this.m_invMassB = this.m_bodyB.m_invMass,
            this.m_invIA = this.m_bodyA.m_invI, this.m_invIB = this.m_bodyB.m_invI;
        var t = o.positions[this.m_indexA].a,
            e = o.velocities[this.m_indexA].v,
            r = o.velocities[this.m_indexA].w,
            i = o.positions[this.m_indexB].a,
            b = o.velocities[this.m_indexB].v,
            n = o.velocities[this.m_indexB].w,
            p = this.m_qA.SetAngle(t),
            s = this.m_qB.SetAngle(i);
        box2d.b2Sub_V2_V2(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA), box2d.b2Mul_R_V2(p, this.m_lalcA, this.m_rA),
            box2d.b2Sub_V2_V2(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB), box2d.b2Mul_R_V2(s, this.m_lalcB, this.m_rB);
        p = this.m_invMassA, s = this.m_invMassB;
        var a = this.m_invIA,
            d = this.m_invIB,
            l = 0 === a + d;
        this.m_mass.ex.x = p + s + this.m_rA.y * this.m_rA.y * a + this.m_rB.y * this.m_rB.y * d,
            this.m_mass.ey.x = -this.m_rA.y * this.m_rA.x * a - this.m_rB.y * this.m_rB.x * d,
            this.m_mass.ez.x = -this.m_rA.y * a - this.m_rB.y * d, this.m_mass.ex.y = this.m_mass.ey.x,
            this.m_mass.ey.y = p + s + this.m_rA.x * this.m_rA.x * a + this.m_rB.x * this.m_rB.x * d,
            this.m_mass.ez.y = this.m_rA.x * a + this.m_rB.x * d, this.m_mass.ex.z = this.m_mass.ez.x,
            this.m_mass.ey.z = this.m_mass.ez.y, this.m_mass.ez.z = a + d, this.m_motorMass = a + d,
            0 < this.m_motorMass && (this.m_motorMass = 1 / this.m_motorMass), this.m_enableMotor && !l || (this.m_motorImpulse = 0),
            this.m_enableLimit && !l ? (t = i - t - this.m_referenceAngle, box2d.b2Abs(this.m_upperAngle - this.m_lowerAngle) < 2 * box2d.b2_angularSlop ? this.m_limitState = box2d.b2LimitState.e_equalLimits : t <= this.m_lowerAngle ? (this.m_limitState !== box2d.b2LimitState.e_atLowerLimit && (this.m_impulse.z = 0),
                this.m_limitState = box2d.b2LimitState.e_atLowerLimit) : t >= this.m_upperAngle ? (this.m_limitState !== box2d.b2LimitState.e_atUpperLimit && (this.m_impulse.z = 0),
                this.m_limitState = box2d.b2LimitState.e_atUpperLimit) : (this.m_limitState = box2d.b2LimitState.e_inactiveLimit,
                this.m_impulse.z = 0)) : this.m_limitState = box2d.b2LimitState.e_inactiveLimit,
            o.step.warmStarting ? (this.m_impulse.SelfMulScalar(o.step.dtRatio), this.m_motorImpulse *= o.step.dtRatio,
                t = box2d.b2RevoluteJoint.prototype.InitVelocityConstraints.s_P.Set(this.m_impulse.x, this.m_impulse.y),
                e.SelfMulSub(p, t), r -= a * (box2d.b2Cross_V2_V2(this.m_rA, t) + this.m_motorImpulse + this.m_impulse.z),
                b.SelfMulAdd(s, t), n += d * (box2d.b2Cross_V2_V2(this.m_rB, t) + this.m_motorImpulse + this.m_impulse.z)) : (this.m_impulse.SetZero(),
                this.m_motorImpulse = 0), o.velocities[this.m_indexA].w = r, o.velocities[this.m_indexB].w = n;
    }, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "InitVelocityConstraints", box2d.b2RevoluteJoint.prototype.InitVelocityConstraints),
    box2d.b2RevoluteJoint.prototype.InitVelocityConstraints.s_P = new box2d.b2Vec2(),
    box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints = function(o) {
        var t = o.velocities[this.m_indexA].v,
            e = o.velocities[this.m_indexA].w,
            r = o.velocities[this.m_indexB].v,
            i = o.velocities[this.m_indexB].w,
            b = this.m_invMassA,
            n = this.m_invMassB,
            p = this.m_invIA,
            s = this.m_invIB,
            a = 0 === p + s;
        if (this.m_enableMotor && this.m_limitState !== box2d.b2LimitState.e_equalLimits && !a) {
            var d = i - e - this.m_motorSpeed,
                l = (d = -this.m_motorMass * d, this.m_motorImpulse),
                x = o.step.dt * this.m_maxMotorTorque;
            this.m_motorImpulse = box2d.b2Clamp(this.m_motorImpulse + d, -x, x), e -= p * (d = this.m_motorImpulse - l),
                i += s * d;
        }
        this.m_enableLimit && this.m_limitState !== box2d.b2LimitState.e_inactiveLimit && !a ? (a = box2d.b2Sub_V2_V2(box2d.b2AddCross_V2_S_V2(r, i, this.m_rB, box2d.b2Vec2.s_t0), box2d.b2AddCross_V2_S_V2(t, e, this.m_rA, box2d.b2Vec2.s_t1), box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints.s_Cdot1),
                d = this.m_mass.Solve33(a.x, a.y, i - e, box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints.s_impulse3).SelfNeg(),
                this.m_limitState === box2d.b2LimitState.e_equalLimits ? this.m_impulse.SelfAdd(d) : this.m_limitState === box2d.b2LimitState.e_atLowerLimit ? 0 > (l = this.m_impulse.z + d.z) ? (l = -a.x + this.m_impulse.z * this.m_mass.ez.x,
                    a = -a.y + this.m_impulse.z * this.m_mass.ez.y, a = this.m_mass.Solve22(l, a, box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints.s_reduced),
                    d.x = a.x, d.y = a.y, d.z = -this.m_impulse.z, this.m_impulse.x += a.x, this.m_impulse.y += a.y,
                    this.m_impulse.z = 0) : this.m_impulse.SelfAdd(d) : this.m_limitState === box2d.b2LimitState.e_atUpperLimit && (0 < (l = this.m_impulse.z + d.z) ? (l = -a.x + this.m_impulse.z * this.m_mass.ez.x,
                    a = -a.y + this.m_impulse.z * this.m_mass.ez.y, a = this.m_mass.Solve22(l, a, box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints.s_reduced),
                    d.x = a.x, d.y = a.y, d.z = -this.m_impulse.z, this.m_impulse.x += a.x, this.m_impulse.y += a.y,
                    this.m_impulse.z = 0) : this.m_impulse.SelfAdd(d)), a = box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints.s_P.Set(d.x, d.y),
                t.SelfMulSub(b, a), e -= p * (box2d.b2Cross_V2_V2(this.m_rA, a) + d.z), r.SelfMulAdd(n, a),
                i += s * (box2d.b2Cross_V2_V2(this.m_rB, a) + d.z)) : (d = box2d.b2Sub_V2_V2(box2d.b2AddCross_V2_S_V2(r, i, this.m_rB, box2d.b2Vec2.s_t0), box2d.b2AddCross_V2_S_V2(t, e, this.m_rA, box2d.b2Vec2.s_t1), box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints.s_Cdot),
                d = this.m_mass.Solve22(-d.x, -d.y, box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints.s_impulse2),
                this.m_impulse.x += d.x, this.m_impulse.y += d.y, t.SelfMulSub(b, d), e -= p * box2d.b2Cross_V2_V2(this.m_rA, d),
                r.SelfMulAdd(n, d), i += s * box2d.b2Cross_V2_V2(this.m_rB, d)), o.velocities[this.m_indexA].w = e,
            o.velocities[this.m_indexB].w = i;
    }, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "SolveVelocityConstraints", box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints),
    box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints.s_P = new box2d.b2Vec2(),
    box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints.s_Cdot = new box2d.b2Vec2(),
    box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints.s_Cdot1 = new box2d.b2Vec2(),
    box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints.s_impulse3 = new box2d.b2Vec3(),
    box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints.s_reduced = new box2d.b2Vec2(),
    box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints.s_impulse2 = new box2d.b2Vec2(),
    box2d.b2RevoluteJoint.prototype.SolvePositionConstraints = function(o) {
        var t = o.positions[this.m_indexA].c,
            e = o.positions[this.m_indexA].a,
            r = o.positions[this.m_indexB].c,
            i = o.positions[this.m_indexB].a,
            b = this.m_qA.SetAngle(e),
            n = this.m_qB.SetAngle(i),
            p = 0,
            s = 0;
        s = 0 === this.m_invIA + this.m_invIB;
        if (this.m_enableLimit && this.m_limitState !== box2d.b2LimitState.e_inactiveLimit && !s) {
            var a = i - e - this.m_referenceAngle;
            s = 0;
            this.m_limitState === box2d.b2LimitState.e_equalLimits ? (a = box2d.b2Clamp(a - this.m_lowerAngle, -box2d.b2_maxAngularCorrection, box2d.b2_maxAngularCorrection),
                    s = -this.m_motorMass * a, p = box2d.b2Abs(a)) : this.m_limitState === box2d.b2LimitState.e_atLowerLimit ? (p = -(a -= this.m_lowerAngle),
                    a = box2d.b2Clamp(a + box2d.b2_angularSlop, -box2d.b2_maxAngularCorrection, 0),
                    s = -this.m_motorMass * a) : this.m_limitState === box2d.b2LimitState.e_atUpperLimit && (p = a -= this.m_upperAngle,
                    a = box2d.b2Clamp(a - box2d.b2_angularSlop, 0, box2d.b2_maxAngularCorrection), s = -this.m_motorMass * a),
                e -= this.m_invIA * s, i += this.m_invIB * s;
        }
        b.SetAngle(e), n.SetAngle(i), box2d.b2Sub_V2_V2(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA),
            b = box2d.b2Mul_R_V2(b, this.m_lalcA, this.m_rA), box2d.b2Sub_V2_V2(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
        n = box2d.b2Mul_R_V2(n, this.m_lalcB, this.m_rB), s = (a = box2d.b2Sub_V2_V2(box2d.b2Add_V2_V2(r, n, box2d.b2Vec2.s_t0), box2d.b2Add_V2_V2(t, b, box2d.b2Vec2.s_t1), box2d.b2RevoluteJoint.prototype.SolvePositionConstraints.s_C)).Length();
        var d = this.m_invMassA,
            l = this.m_invMassB,
            x = this.m_invIA,
            y = this.m_invIB,
            c = this.m_K;
        return c.ex.x = d + l + x * b.y * b.y + y * n.y * n.y, c.ex.y = -x * b.x * b.y - y * n.x * n.y,
            c.ey.x = c.ex.y, c.ey.y = d + l + x * b.x * b.x + y * n.x * n.x, a = c.Solve(a.x, a.y, box2d.b2RevoluteJoint.prototype.SolvePositionConstraints.s_impulse).SelfNeg(),
            t.SelfMulSub(d, a), e -= x * box2d.b2Cross_V2_V2(b, a), r.SelfMulAdd(l, a), i += y * box2d.b2Cross_V2_V2(n, a),
            o.positions[this.m_indexA].a = e, o.positions[this.m_indexB].a = i, s <= box2d.b2_linearSlop && p <= box2d.b2_angularSlop;
    }, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "SolvePositionConstraints", box2d.b2RevoluteJoint.prototype.SolvePositionConstraints),
    box2d.b2RevoluteJoint.prototype.SolvePositionConstraints.s_C = new box2d.b2Vec2(),
    box2d.b2RevoluteJoint.prototype.SolvePositionConstraints.s_impulse = new box2d.b2Vec2(),
    box2d.b2RevoluteJoint.prototype.GetAnchorA = function(o) {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, o);
    }, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "GetAnchorA", box2d.b2RevoluteJoint.prototype.GetAnchorA),
    box2d.b2RevoluteJoint.prototype.GetAnchorB = function(o) {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, o);
    }, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "GetAnchorB", box2d.b2RevoluteJoint.prototype.GetAnchorB),
    box2d.b2RevoluteJoint.prototype.GetReactionForce = function(o, t) {
        return t.Set(o * this.m_impulse.x, o * this.m_impulse.y);
    }, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "GetReactionForce", box2d.b2RevoluteJoint.prototype.GetReactionForce),
    box2d.b2RevoluteJoint.prototype.GetReactionTorque = function(o) {
        return o * this.m_impulse.z;
    }, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "GetReactionTorque", box2d.b2RevoluteJoint.prototype.GetReactionTorque),
    box2d.b2RevoluteJoint.prototype.GetLocalAnchorA = function(o) {
        return o.Copy(this.m_localAnchorA);
    }, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "GetLocalAnchorA", box2d.b2RevoluteJoint.prototype.GetLocalAnchorA),
    box2d.b2RevoluteJoint.prototype.GetLocalAnchorB = function(o) {
        return o.Copy(this.m_localAnchorB);
    }, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "GetLocalAnchorB", box2d.b2RevoluteJoint.prototype.GetLocalAnchorB),
    box2d.b2RevoluteJoint.prototype.GetReferenceAngle = function() {
        return this.m_referenceAngle;
    }, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "GetReferenceAngle", box2d.b2RevoluteJoint.prototype.GetReferenceAngle),
    box2d.b2RevoluteJoint.prototype.GetJointAngle = function() {
        return this.m_bodyB.m_sweep.a - this.m_bodyA.m_sweep.a - this.m_referenceAngle;
    }, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "GetJointAngle", box2d.b2RevoluteJoint.prototype.GetJointAngle),
    box2d.b2RevoluteJoint.prototype.GetJointSpeed = function() {
        return this.m_bodyB.m_angularVelocity - this.m_bodyA.m_angularVelocity;
    }, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "GetJointSpeed", box2d.b2RevoluteJoint.prototype.GetJointSpeed),
    box2d.b2RevoluteJoint.prototype.IsMotorEnabled = function() {
        return this.m_enableMotor;
    }, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "IsMotorEnabled", box2d.b2RevoluteJoint.prototype.IsMotorEnabled),
    box2d.b2RevoluteJoint.prototype.EnableMotor = function(o) {
        this.m_enableMotor !== o && (this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0),
            this.m_enableMotor = o);
    }, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "EnableMotor", box2d.b2RevoluteJoint.prototype.EnableMotor),
    box2d.b2RevoluteJoint.prototype.GetMotorTorque = function(o) {
        return o * this.m_motorImpulse;
    }, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "GetMotorTorque", box2d.b2RevoluteJoint.prototype.GetMotorTorque),
    box2d.b2RevoluteJoint.prototype.GetMotorSpeed = function() {
        return this.m_motorSpeed;
    }, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "GetMotorSpeed", box2d.b2RevoluteJoint.prototype.GetMotorSpeed),
    box2d.b2RevoluteJoint.prototype.SetMaxMotorTorque = function(o) {
        this.m_maxMotorTorque = o;
    }, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "SetMaxMotorTorque", box2d.b2RevoluteJoint.prototype.SetMaxMotorTorque),
    box2d.b2RevoluteJoint.prototype.GetMaxMotorTorque = function() {
        return this.m_maxMotorTorque;
    }, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "GetMaxMotorTorque", box2d.b2RevoluteJoint.prototype.GetMaxMotorTorque),
    box2d.b2RevoluteJoint.prototype.IsLimitEnabled = function() {
        return this.m_enableLimit;
    }, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "IsLimitEnabled", box2d.b2RevoluteJoint.prototype.IsLimitEnabled),
    box2d.b2RevoluteJoint.prototype.EnableLimit = function(o) {
        o !== this.m_enableLimit && (this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0),
            this.m_enableLimit = o, this.m_impulse.z = 0);
    }, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "EnableLimit", box2d.b2RevoluteJoint.prototype.EnableLimit),
    box2d.b2RevoluteJoint.prototype.GetLowerLimit = function() {
        return this.m_lowerAngle;
    }, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "GetLowerLimit", box2d.b2RevoluteJoint.prototype.GetLowerLimit),
    box2d.b2RevoluteJoint.prototype.GetUpperLimit = function() {
        return this.m_upperAngle;
    }, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "GetUpperLimit", box2d.b2RevoluteJoint.prototype.GetUpperLimit),
    box2d.b2RevoluteJoint.prototype.SetLimits = function(o, t) {
        o === this.m_lowerAngle && t === this.m_upperAngle || (this.m_bodyA.SetAwake(!0),
            this.m_bodyB.SetAwake(!0), this.m_impulse.z = 0, this.m_lowerAngle = o, this.m_upperAngle = t);
    }, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "SetLimits", box2d.b2RevoluteJoint.prototype.SetLimits),
    box2d.b2RevoluteJoint.prototype.SetMotorSpeed = function(o) {
        this.m_motorSpeed !== o && (this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0),
            this.m_motorSpeed = o);
    }, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "SetMotorSpeed", box2d.b2RevoluteJoint.prototype.SetMotorSpeed),
    box2d.b2RevoluteJoint.prototype.Dump = function() {
        if (box2d.DEBUG) {
            var o = this.m_bodyA.m_islandIndex,
                t = this.m_bodyB.m_islandIndex;
            box2d.b2Log("  /*box2d.b2RevoluteJointDef*/ var jd = new box2d.b2RevoluteJointDef();\n"),
                box2d.b2Log("  jd.bodyA = bodies[%d];\n", o), box2d.b2Log("  jd.bodyB = bodies[%d];\n", t),
                box2d.b2Log("  jd.collideConnected = %s;\n", this.m_collideConnected ? "true" : "false"),
                box2d.b2Log("  jd.localAnchorA.Set(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y),
                box2d.b2Log("  jd.localAnchorB.Set(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y),
                box2d.b2Log("  jd.referenceAngle = %.15f;\n", this.m_referenceAngle), box2d.b2Log("  jd.enableLimit = %s;\n", this.m_enableLimit ? "true" : "false"),
                box2d.b2Log("  jd.lowerAngle = %.15f;\n", this.m_lowerAngle), box2d.b2Log("  jd.upperAngle = %.15f;\n", this.m_upperAngle),
                box2d.b2Log("  jd.enableMotor = %s;\n", this.m_enableMotor ? "true" : "false"),
                box2d.b2Log("  jd.motorSpeed = %.15f;\n", this.m_motorSpeed), box2d.b2Log("  jd.maxMotorTorque = %.15f;\n", this.m_maxMotorTorque),
                box2d.b2Log("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index);
        }
    }, goog.exportProperty(box2d.b2RevoluteJoint.prototype, "Dump", box2d.b2RevoluteJoint.prototype.Dump),
    box2d.b2GearJointDef = function() {
        box2d.b2JointDef.call(this, box2d.b2JointType.e_gearJoint);
    }, goog.inherits(box2d.b2GearJointDef, box2d.b2JointDef), goog.exportSymbol("box2d.b2GearJointDef", box2d.b2GearJointDef),
    box2d.b2GearJointDef.prototype.joint1 = null, goog.exportProperty(box2d.b2GearJointDef.prototype, "joint1", box2d.b2GearJointDef.prototype.joint1),
    box2d.b2GearJointDef.prototype.joint2 = null, goog.exportProperty(box2d.b2GearJointDef.prototype, "joint2", box2d.b2GearJointDef.prototype.joint2),
    box2d.b2GearJointDef.prototype.ratio = 1, goog.exportProperty(box2d.b2GearJointDef.prototype, "ratio", box2d.b2GearJointDef.prototype.ratio),
    box2d.b2GearJoint = function(o) {
        var t, e;
        box2d.b2Joint.call(this, o), this.m_joint1 = o.joint1, this.m_joint2 = o.joint2,
            this.m_localAnchorA = new box2d.b2Vec2(), this.m_localAnchorB = new box2d.b2Vec2(),
            this.m_localAnchorC = new box2d.b2Vec2(), this.m_localAnchorD = new box2d.b2Vec2(),
            this.m_localAxisC = new box2d.b2Vec2(), this.m_localAxisD = new box2d.b2Vec2(),
            this.m_lcA = new box2d.b2Vec2(), this.m_lcB = new box2d.b2Vec2(), this.m_lcC = new box2d.b2Vec2(),
            this.m_lcD = new box2d.b2Vec2(), this.m_JvAC = new box2d.b2Vec2(), this.m_JvBD = new box2d.b2Vec2(),
            this.m_qA = new box2d.b2Rot(), this.m_qB = new box2d.b2Rot(), this.m_qC = new box2d.b2Rot(),
            this.m_qD = new box2d.b2Rot(), this.m_lalcA = new box2d.b2Vec2(), this.m_lalcB = new box2d.b2Vec2(),
            this.m_lalcC = new box2d.b2Vec2(), this.m_lalcD = new box2d.b2Vec2(), this.m_typeA = this.m_joint1.GetType(),
            this.m_typeB = this.m_joint2.GetType(), box2d.ENABLE_ASSERTS && box2d.b2Assert(this.m_typeA === box2d.b2JointType.e_revoluteJoint || this.m_typeA === box2d.b2JointType.e_prismaticJoint),
            box2d.ENABLE_ASSERTS && box2d.b2Assert(this.m_typeB === box2d.b2JointType.e_revoluteJoint || this.m_typeB === box2d.b2JointType.e_prismaticJoint),
            this.m_bodyC = this.m_joint1.GetBodyA(), this.m_bodyA = this.m_joint1.GetBodyB(),
            t = this.m_bodyA.m_xf;
        var r = this.m_bodyA.m_sweep.a;
        e = this.m_bodyC.m_xf;
        var i = this.m_bodyC.m_sweep.a;
        this.m_typeA === box2d.b2JointType.e_revoluteJoint ? (e = o.joint1, this.m_localAnchorC.Copy(e.m_localAnchorA),
                this.m_localAnchorA.Copy(e.m_localAnchorB), this.m_referenceAngleA = e.m_referenceAngle,
                this.m_localAxisC.SetZero(), t = r - i - this.m_referenceAngleA) : (i = o.joint1,
                this.m_localAnchorC.Copy(i.m_localAnchorA), this.m_localAnchorA.Copy(i.m_localAnchorB),
                this.m_referenceAngleA = i.m_referenceAngle, this.m_localAxisC.Copy(i.m_localXAxisA),
                r = this.m_localAnchorC, t = box2d.b2MulT_R_V2(e.q, box2d.b2Add_V2_V2(box2d.b2Mul_R_V2(t.q, this.m_localAnchorA, box2d.b2Vec2.s_t0), box2d.b2Sub_V2_V2(t.p, e.p, box2d.b2Vec2.s_t1), box2d.b2Vec2.s_t0), box2d.b2Vec2.s_t0),
                t = box2d.b2Dot_V2_V2(box2d.b2Sub_V2_V2(t, r, box2d.b2Vec2.s_t0), this.m_localAxisC)),
            this.m_bodyD = this.m_joint2.GetBodyA(), this.m_bodyB = this.m_joint2.GetBodyB(),
            e = this.m_bodyB.m_xf;
        i = this.m_bodyB.m_sweep.a, r = this.m_bodyD.m_xf;
        var b = this.m_bodyD.m_sweep.a;
        this.m_typeB === box2d.b2JointType.e_revoluteJoint ? (e = o.joint2, this.m_localAnchorD.Copy(e.m_localAnchorA),
                this.m_localAnchorB.Copy(e.m_localAnchorB), this.m_referenceAngleB = e.m_referenceAngle,
                this.m_localAxisD.SetZero(), e = i - b - this.m_referenceAngleB) : (i = o.joint2,
                this.m_localAnchorD.Copy(i.m_localAnchorA), this.m_localAnchorB.Copy(i.m_localAnchorB),
                this.m_referenceAngleB = i.m_referenceAngle, this.m_localAxisD.Copy(i.m_localXAxisA),
                i = this.m_localAnchorD, e = box2d.b2MulT_R_V2(r.q, box2d.b2Add_V2_V2(box2d.b2Mul_R_V2(e.q, this.m_localAnchorB, box2d.b2Vec2.s_t0), box2d.b2Sub_V2_V2(e.p, r.p, box2d.b2Vec2.s_t1), box2d.b2Vec2.s_t0), box2d.b2Vec2.s_t0),
                e = box2d.b2Dot_V2_V2(box2d.b2Sub_V2_V2(e, i, box2d.b2Vec2.s_t0), this.m_localAxisD)),
            this.m_ratio = o.ratio, this.m_constant = t + this.m_ratio * e, this.m_impulse = 0;
    }, goog.inherits(box2d.b2GearJoint, box2d.b2Joint), goog.exportSymbol("box2d.b2GearJoint", box2d.b2GearJoint),
    box2d.b2GearJoint.prototype.m_joint1 = null, goog.exportProperty(box2d.b2GearJoint.prototype, "m_joint1", box2d.b2GearJoint.prototype.m_joint1),
    box2d.b2GearJoint.prototype.m_joint2 = null, goog.exportProperty(box2d.b2GearJoint.prototype, "m_joint2", box2d.b2GearJoint.prototype.m_joint2),
    box2d.b2GearJoint.prototype.m_typeA = box2d.b2JointType.e_unknownJoint, goog.exportProperty(box2d.b2GearJoint.prototype, "m_typeA", box2d.b2GearJoint.prototype.m_typeA),
    box2d.b2GearJoint.prototype.m_typeB = box2d.b2JointType.e_unknownJoint, goog.exportProperty(box2d.b2GearJoint.prototype, "m_typeB", box2d.b2GearJoint.prototype.m_typeB),
    box2d.b2GearJoint.prototype.m_bodyC = null, goog.exportProperty(box2d.b2GearJoint.prototype, "m_bodyC", box2d.b2GearJoint.prototype.m_bodyC),
    box2d.b2GearJoint.prototype.m_bodyD = null, goog.exportProperty(box2d.b2GearJoint.prototype, "m_bodyD", box2d.b2GearJoint.prototype.m_bodyD),
    box2d.b2GearJoint.prototype.m_localAnchorA = null, goog.exportProperty(box2d.b2GearJoint.prototype, "m_localAnchorA", box2d.b2GearJoint.prototype.m_localAnchorA),
    box2d.b2GearJoint.prototype.m_localAnchorB = null, goog.exportProperty(box2d.b2GearJoint.prototype, "m_localAnchorB", box2d.b2GearJoint.prototype.m_localAnchorB),
    box2d.b2GearJoint.prototype.m_localAnchorC = null, goog.exportProperty(box2d.b2GearJoint.prototype, "m_localAnchorC", box2d.b2GearJoint.prototype.m_localAnchorC),
    box2d.b2GearJoint.prototype.m_localAnchorD = null, goog.exportProperty(box2d.b2GearJoint.prototype, "m_localAnchorD", box2d.b2GearJoint.prototype.m_localAnchorD),
    box2d.b2GearJoint.prototype.m_localAxisC = null, goog.exportProperty(box2d.b2GearJoint.prototype, "m_localAxisC", box2d.b2GearJoint.prototype.m_localAxisC),
    box2d.b2GearJoint.prototype.m_localAxisD = null, goog.exportProperty(box2d.b2GearJoint.prototype, "m_localAxisD", box2d.b2GearJoint.prototype.m_localAxisD),
    box2d.b2GearJoint.prototype.m_referenceAngleA = 0, goog.exportProperty(box2d.b2GearJoint.prototype, "m_referenceAngleA", box2d.b2GearJoint.prototype.m_referenceAngleA),
    box2d.b2GearJoint.prototype.m_referenceAngleB = 0, goog.exportProperty(box2d.b2GearJoint.prototype, "m_referenceAngleB", box2d.b2GearJoint.prototype.m_referenceAngleB),
    box2d.b2GearJoint.prototype.m_constant = 0, goog.exportProperty(box2d.b2GearJoint.prototype, "m_constant", box2d.b2GearJoint.prototype.m_constant),
    box2d.b2GearJoint.prototype.m_ratio = 0, goog.exportProperty(box2d.b2GearJoint.prototype, "m_ratio", box2d.b2GearJoint.prototype.m_ratio),
    box2d.b2GearJoint.prototype.m_impulse = 0, goog.exportProperty(box2d.b2GearJoint.prototype, "m_impulse", box2d.b2GearJoint.prototype.m_impulse),
    box2d.b2GearJoint.prototype.m_indexA = 0, goog.exportProperty(box2d.b2GearJoint.prototype, "m_indexA", box2d.b2GearJoint.prototype.m_indexA),
    box2d.b2GearJoint.prototype.m_indexB = 0, goog.exportProperty(box2d.b2GearJoint.prototype, "m_indexB", box2d.b2GearJoint.prototype.m_indexB),
    box2d.b2GearJoint.prototype.m_indexC = 0, goog.exportProperty(box2d.b2GearJoint.prototype, "m_indexC", box2d.b2GearJoint.prototype.m_indexC),
    box2d.b2GearJoint.prototype.m_indexD = 0, goog.exportProperty(box2d.b2GearJoint.prototype, "m_indexD", box2d.b2GearJoint.prototype.m_indexD),
    box2d.b2GearJoint.prototype.m_lcA = null, goog.exportProperty(box2d.b2GearJoint.prototype, "m_lcA", box2d.b2GearJoint.prototype.m_lcA),
    box2d.b2GearJoint.prototype.m_lcB = null, goog.exportProperty(box2d.b2GearJoint.prototype, "m_lcB", box2d.b2GearJoint.prototype.m_lcB),
    box2d.b2GearJoint.prototype.m_lcC = null, goog.exportProperty(box2d.b2GearJoint.prototype, "m_lcC", box2d.b2GearJoint.prototype.m_lcC),
    box2d.b2GearJoint.prototype.m_lcD = null, goog.exportProperty(box2d.b2GearJoint.prototype, "m_lcD", box2d.b2GearJoint.prototype.m_lcD),
    box2d.b2GearJoint.prototype.m_mA = 0, goog.exportProperty(box2d.b2GearJoint.prototype, "m_mA", box2d.b2GearJoint.prototype.m_mA),
    box2d.b2GearJoint.prototype.m_mB = 0, goog.exportProperty(box2d.b2GearJoint.prototype, "m_mB", box2d.b2GearJoint.prototype.m_mB),
    box2d.b2GearJoint.prototype.m_mC = 0, goog.exportProperty(box2d.b2GearJoint.prototype, "m_mC", box2d.b2GearJoint.prototype.m_mC),
    box2d.b2GearJoint.prototype.m_mD = 0, goog.exportProperty(box2d.b2GearJoint.prototype, "m_mD", box2d.b2GearJoint.prototype.m_mD),
    box2d.b2GearJoint.prototype.m_iA = 0, goog.exportProperty(box2d.b2GearJoint.prototype, "m_iA", box2d.b2GearJoint.prototype.m_iA),
    box2d.b2GearJoint.prototype.m_iB = 0, goog.exportProperty(box2d.b2GearJoint.prototype, "m_iB", box2d.b2GearJoint.prototype.m_iB),
    box2d.b2GearJoint.prototype.m_iC = 0, goog.exportProperty(box2d.b2GearJoint.prototype, "m_iC", box2d.b2GearJoint.prototype.m_iC),
    box2d.b2GearJoint.prototype.m_iD = 0, goog.exportProperty(box2d.b2GearJoint.prototype, "m_iD", box2d.b2GearJoint.prototype.m_iD),
    box2d.b2GearJoint.prototype.m_JvAC = null, goog.exportProperty(box2d.b2GearJoint.prototype, "m_JvAC", box2d.b2GearJoint.prototype.m_JvAC),
    box2d.b2GearJoint.prototype.m_JvBD = null, goog.exportProperty(box2d.b2GearJoint.prototype, "m_JvBD", box2d.b2GearJoint.prototype.m_JvBD),
    box2d.b2GearJoint.prototype.m_JwA = 0, goog.exportProperty(box2d.b2GearJoint.prototype, "m_JwA", box2d.b2GearJoint.prototype.m_JwA),
    box2d.b2GearJoint.prototype.m_JwB = 0, goog.exportProperty(box2d.b2GearJoint.prototype, "m_JwB", box2d.b2GearJoint.prototype.m_JwB),
    box2d.b2GearJoint.prototype.m_JwC = 0, goog.exportProperty(box2d.b2GearJoint.prototype, "m_JwC", box2d.b2GearJoint.prototype.m_JwC),
    box2d.b2GearJoint.prototype.m_JwD = 0, goog.exportProperty(box2d.b2GearJoint.prototype, "m_JwD", box2d.b2GearJoint.prototype.m_JwD),
    box2d.b2GearJoint.prototype.m_mass = 0, goog.exportProperty(box2d.b2GearJoint.prototype, "m_mass", box2d.b2GearJoint.prototype.m_mass),
    box2d.b2GearJoint.prototype.m_qA = null, goog.exportProperty(box2d.b2GearJoint.prototype, "m_qA", box2d.b2GearJoint.prototype.m_qA),
    box2d.b2GearJoint.prototype.m_qB = null, goog.exportProperty(box2d.b2GearJoint.prototype, "m_qB", box2d.b2GearJoint.prototype.m_qB),
    box2d.b2GearJoint.prototype.m_qC = null, goog.exportProperty(box2d.b2GearJoint.prototype, "m_qC", box2d.b2GearJoint.prototype.m_qC),
    box2d.b2GearJoint.prototype.m_qD = null, goog.exportProperty(box2d.b2GearJoint.prototype, "m_qD", box2d.b2GearJoint.prototype.m_qD),
    box2d.b2GearJoint.prototype.m_lalcA = null, goog.exportProperty(box2d.b2GearJoint.prototype, "m_lalcA", box2d.b2GearJoint.prototype.m_lalcA),
    box2d.b2GearJoint.prototype.m_lalcB = null, goog.exportProperty(box2d.b2GearJoint.prototype, "m_lalcB", box2d.b2GearJoint.prototype.m_lalcB),
    box2d.b2GearJoint.prototype.m_lalcC = null, goog.exportProperty(box2d.b2GearJoint.prototype, "m_lalcC", box2d.b2GearJoint.prototype.m_lalcC),
    box2d.b2GearJoint.prototype.m_lalcD = null, goog.exportProperty(box2d.b2GearJoint.prototype, "m_lalcD", box2d.b2GearJoint.prototype.m_lalcD),
    box2d.b2GearJoint.prototype.InitVelocityConstraints = function(o) {
        this.m_indexA = this.m_bodyA.m_islandIndex, this.m_indexB = this.m_bodyB.m_islandIndex,
            this.m_indexC = this.m_bodyC.m_islandIndex, this.m_indexD = this.m_bodyD.m_islandIndex,
            this.m_lcA.Copy(this.m_bodyA.m_sweep.localCenter), this.m_lcB.Copy(this.m_bodyB.m_sweep.localCenter),
            this.m_lcC.Copy(this.m_bodyC.m_sweep.localCenter), this.m_lcD.Copy(this.m_bodyD.m_sweep.localCenter),
            this.m_mA = this.m_bodyA.m_invMass, this.m_mB = this.m_bodyB.m_invMass, this.m_mC = this.m_bodyC.m_invMass,
            this.m_mD = this.m_bodyD.m_invMass, this.m_iA = this.m_bodyA.m_invI, this.m_iB = this.m_bodyB.m_invI,
            this.m_iC = this.m_bodyC.m_invI, this.m_iD = this.m_bodyD.m_invI;
        var t = o.velocities[this.m_indexA].v,
            e = o.velocities[this.m_indexA].w,
            r = o.positions[this.m_indexB].a,
            i = o.velocities[this.m_indexB].v,
            b = o.velocities[this.m_indexB].w,
            n = o.positions[this.m_indexC].a,
            p = o.velocities[this.m_indexC].v,
            s = o.velocities[this.m_indexC].w,
            a = o.positions[this.m_indexD].a,
            d = o.velocities[this.m_indexD].v,
            l = o.velocities[this.m_indexD].w,
            x = this.m_qA.SetAngle(o.positions[this.m_indexA].a),
            y = (r = this.m_qB.SetAngle(r),
                this.m_qC.SetAngle(n));
        n = this.m_qD.SetAngle(a);
        this.m_mass = 0, this.m_typeA === box2d.b2JointType.e_revoluteJoint ? (this.m_JvAC.SetZero(),
                this.m_JwC = this.m_JwA = 1, this.m_mass += this.m_iA + this.m_iC) : (a = box2d.b2Mul_R_V2(y, this.m_localAxisC, box2d.b2GearJoint.prototype.InitVelocityConstraints.s_u),
                box2d.b2Sub_V2_V2(this.m_localAnchorC, this.m_lcC, this.m_lalcC), y = box2d.b2Mul_R_V2(y, this.m_lalcC, box2d.b2GearJoint.prototype.InitVelocityConstraints.s_rC),
                box2d.b2Sub_V2_V2(this.m_localAnchorA, this.m_lcA, this.m_lalcA), x = box2d.b2Mul_R_V2(x, this.m_lalcA, box2d.b2GearJoint.prototype.InitVelocityConstraints.s_rA),
                this.m_JvAC.Copy(a), this.m_JwC = box2d.b2Cross_V2_V2(y, a), this.m_JwA = box2d.b2Cross_V2_V2(x, a),
                this.m_mass += this.m_mC + this.m_mA + this.m_iC * this.m_JwC * this.m_JwC + this.m_iA * this.m_JwA * this.m_JwA),
            this.m_typeB === box2d.b2JointType.e_revoluteJoint ? (this.m_JvBD.SetZero(), this.m_JwD = this.m_JwB = this.m_ratio,
                this.m_mass += this.m_ratio * this.m_ratio * (this.m_iB + this.m_iD)) : (a = box2d.b2Mul_R_V2(n, this.m_localAxisD, box2d.b2GearJoint.prototype.InitVelocityConstraints.s_u),
                box2d.b2Sub_V2_V2(this.m_localAnchorD, this.m_lcD, this.m_lalcD), x = box2d.b2Mul_R_V2(n, this.m_lalcD, box2d.b2GearJoint.prototype.InitVelocityConstraints.s_rD),
                box2d.b2Sub_V2_V2(this.m_localAnchorB, this.m_lcB, this.m_lalcB), r = box2d.b2Mul_R_V2(r, this.m_lalcB, box2d.b2GearJoint.prototype.InitVelocityConstraints.s_rB),
                box2d.b2Mul_S_V2(this.m_ratio, a, this.m_JvBD), this.m_JwD = this.m_ratio * box2d.b2Cross_V2_V2(x, a),
                this.m_JwB = this.m_ratio * box2d.b2Cross_V2_V2(r, a), this.m_mass += this.m_ratio * this.m_ratio * (this.m_mD + this.m_mB) + this.m_iD * this.m_JwD * this.m_JwD + this.m_iB * this.m_JwB * this.m_JwB),
            this.m_mass = 0 < this.m_mass ? 1 / this.m_mass : 0, o.step.warmStarting ? (t.SelfMulAdd(this.m_mA * this.m_impulse, this.m_JvAC),
                e += this.m_iA * this.m_impulse * this.m_JwA, i.SelfMulAdd(this.m_mB * this.m_impulse, this.m_JvBD),
                b += this.m_iB * this.m_impulse * this.m_JwB, p.SelfMulSub(this.m_mC * this.m_impulse, this.m_JvAC),
                s -= this.m_iC * this.m_impulse * this.m_JwC, d.SelfMulSub(this.m_mD * this.m_impulse, this.m_JvBD),
                l -= this.m_iD * this.m_impulse * this.m_JwD) : this.m_impulse = 0, o.velocities[this.m_indexA].w = e,
            o.velocities[this.m_indexB].w = b, o.velocities[this.m_indexC].w = s, o.velocities[this.m_indexD].w = l;
    }, box2d.b2GearJoint.prototype.InitVelocityConstraints.s_u = new box2d.b2Vec2(),
    box2d.b2GearJoint.prototype.InitVelocityConstraints.s_rA = new box2d.b2Vec2(), box2d.b2GearJoint.prototype.InitVelocityConstraints.s_rB = new box2d.b2Vec2(),
    box2d.b2GearJoint.prototype.InitVelocityConstraints.s_rC = new box2d.b2Vec2(), box2d.b2GearJoint.prototype.InitVelocityConstraints.s_rD = new box2d.b2Vec2(),
    box2d.b2GearJoint.prototype.SolveVelocityConstraints = function(o) {
        var t = o.velocities[this.m_indexA].v,
            e = o.velocities[this.m_indexA].w,
            r = o.velocities[this.m_indexB].v,
            i = o.velocities[this.m_indexB].w,
            b = o.velocities[this.m_indexC].v,
            n = o.velocities[this.m_indexC].w,
            p = o.velocities[this.m_indexD].v,
            s = o.velocities[this.m_indexD].w,
            a = (a = box2d.b2Dot_V2_V2(this.m_JvAC, box2d.b2Sub_V2_V2(t, b, box2d.b2Vec2.s_t0)) + box2d.b2Dot_V2_V2(this.m_JvBD, box2d.b2Sub_V2_V2(r, p, box2d.b2Vec2.s_t0))) + (this.m_JwA * e - this.m_JwC * n + (this.m_JwB * i - this.m_JwD * s));
        a = -this.m_mass * a;
        this.m_impulse += a, t.SelfMulAdd(this.m_mA * a, this.m_JvAC), e += this.m_iA * a * this.m_JwA,
            r.SelfMulAdd(this.m_mB * a, this.m_JvBD), i += this.m_iB * a * this.m_JwB, b.SelfMulSub(this.m_mC * a, this.m_JvAC),
            n -= this.m_iC * a * this.m_JwC, p.SelfMulSub(this.m_mD * a, this.m_JvBD), s -= this.m_iD * a * this.m_JwD,
            o.velocities[this.m_indexA].w = e, o.velocities[this.m_indexB].w = i, o.velocities[this.m_indexC].w = n,
            o.velocities[this.m_indexD].w = s;
    }, box2d.b2GearJoint.prototype.SolvePositionConstraints = function(o) {
        var t, e, r = o.positions[this.m_indexA].c,
            i = o.positions[this.m_indexA].a,
            b = o.positions[this.m_indexB].c,
            n = o.positions[this.m_indexB].a,
            p = o.positions[this.m_indexC].c,
            s = o.positions[this.m_indexC].a,
            a = o.positions[this.m_indexD].c,
            d = o.positions[this.m_indexD].a,
            l = this.m_qA.SetAngle(i),
            x = this.m_qB.SetAngle(n),
            y = this.m_qC.SetAngle(s),
            c = this.m_qD.SetAngle(d),
            _ = this.m_JvAC,
            m = this.m_JvBD,
            u = 0;
        if (this.m_typeA === box2d.b2JointType.e_revoluteJoint) _.SetZero(), l = t = 1,
            u += this.m_iA + this.m_iC, y = i - s - this.m_referenceAngleA;
        else {
            e = box2d.b2Mul_R_V2(y, this.m_localAxisC, box2d.b2GearJoint.prototype.SolvePositionConstraints.s_u),
                t = box2d.b2Mul_R_V2(y, this.m_lalcC, box2d.b2GearJoint.prototype.SolvePositionConstraints.s_rC);
            var h = box2d.b2Mul_R_V2(l, this.m_lalcA, box2d.b2GearJoint.prototype.SolvePositionConstraints.s_rA);
            _.Copy(e), l = box2d.b2Cross_V2_V2(t, e), t = box2d.b2Cross_V2_V2(h, e), u += this.m_mC + this.m_mA + this.m_iC * l * l + this.m_iA * t * t,
                e = this.m_lalcC, y = box2d.b2MulT_R_V2(y, box2d.b2Add_V2_V2(h, box2d.b2Sub_V2_V2(r, p, box2d.b2Vec2.s_t0), box2d.b2Vec2.s_t0), box2d.b2Vec2.s_t0),
                y = box2d.b2Dot_V2_V2(box2d.b2Sub_V2_V2(y, e, box2d.b2Vec2.s_t0), this.m_localAxisC);
        }
        if (this.m_typeB === box2d.b2JointType.e_revoluteJoint) m.SetZero(), x = e = this.m_ratio,
            u += this.m_ratio * this.m_ratio * (this.m_iB + this.m_iD), c = n - d - this.m_referenceAngleB;
        else {
            e = box2d.b2Mul_R_V2(c, this.m_localAxisD, box2d.b2GearJoint.prototype.SolvePositionConstraints.s_u);
            var g = box2d.b2Mul_R_V2(c, this.m_lalcD, box2d.b2GearJoint.prototype.SolvePositionConstraints.s_rD);
            h = box2d.b2Mul_R_V2(x, this.m_lalcB, box2d.b2GearJoint.prototype.SolvePositionConstraints.s_rB);
            box2d.b2Mul_S_V2(this.m_ratio, e, m), x = this.m_ratio * box2d.b2Cross_V2_V2(g, e),
                e = this.m_ratio * box2d.b2Cross_V2_V2(h, e), u += this.m_ratio * this.m_ratio * (this.m_mD + this.m_mB) + this.m_iD * x * x + this.m_iB * e * e,
                g = this.m_lalcD, c = box2d.b2MulT_R_V2(c, box2d.b2Add_V2_V2(h, box2d.b2Sub_V2_V2(b, a, box2d.b2Vec2.s_t0), box2d.b2Vec2.s_t0), box2d.b2Vec2.s_t0),
                c = box2d.b2Dot_V2_V2(box2d.b2Sub_V2_V2(c, g, box2d.b2Vec2.s_t0), this.m_localAxisD);
        }
        return c = y + this.m_ratio * c - this.m_constant, y = 0, 0 < u && (y = -c / u),
            r.SelfMulAdd(this.m_mA * y, _), i += this.m_iA * y * t, b.SelfMulAdd(this.m_mB * y, m),
            n += this.m_iB * y * e, p.SelfMulSub(this.m_mC * y, _), s -= this.m_iC * y * l,
            a.SelfMulSub(this.m_mD * y, m), d -= this.m_iD * y * x, o.positions[this.m_indexA].a = i,
            o.positions[this.m_indexB].a = n, o.positions[this.m_indexC].a = s, o.positions[this.m_indexD].a = d,
            0 < box2d.b2_linearSlop;
    }, goog.exportProperty(box2d.b2GearJoint.prototype, "SolvePositionConstraints", box2d.b2GearJoint.prototype.SolvePositionConstraints),
    box2d.b2GearJoint.prototype.SolvePositionConstraints.s_u = new box2d.b2Vec2(), box2d.b2GearJoint.prototype.SolvePositionConstraints.s_rA = new box2d.b2Vec2(),
    box2d.b2GearJoint.prototype.SolvePositionConstraints.s_rB = new box2d.b2Vec2(),
    box2d.b2GearJoint.prototype.SolvePositionConstraints.s_rC = new box2d.b2Vec2(),
    box2d.b2GearJoint.prototype.SolvePositionConstraints.s_rD = new box2d.b2Vec2(),
    box2d.b2GearJoint.prototype.GetAnchorA = function(o) {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, o);
    }, goog.exportProperty(box2d.b2GearJoint.prototype, "GetAnchorA", box2d.b2GearJoint.prototype.GetAnchorA),
    box2d.b2GearJoint.prototype.GetAnchorB = function(o) {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, o);
    }, goog.exportProperty(box2d.b2GearJoint.prototype, "GetAnchorB", box2d.b2GearJoint.prototype.GetAnchorB),
    box2d.b2GearJoint.prototype.GetReactionForce = function(o, t) {
        return box2d.b2Mul_S_V2(o * this.m_impulse, this.m_JvAC, t);
    }, goog.exportProperty(box2d.b2GearJoint.prototype, "GetReactionForce", box2d.b2GearJoint.prototype.GetReactionForce),
    box2d.b2GearJoint.prototype.GetReactionTorque = function(o) {
        return o * this.m_impulse * this.m_JwA;
    }, goog.exportProperty(box2d.b2GearJoint.prototype, "GetReactionTorque", box2d.b2GearJoint.prototype.GetReactionTorque),
    box2d.b2GearJoint.prototype.GetJoint1 = function() {
        return this.m_joint1;
    }, goog.exportProperty(box2d.b2GearJoint.prototype, "GetJoint1", box2d.b2GearJoint.prototype.GetJoint1),
    box2d.b2GearJoint.prototype.GetJoint2 = function() {
        return this.m_joint2;
    }, goog.exportProperty(box2d.b2GearJoint.prototype, "GetJoint2", box2d.b2GearJoint.prototype.GetJoint2),
    box2d.b2GearJoint.prototype.GetRatio = function() {
        return this.m_ratio;
    }, goog.exportProperty(box2d.b2GearJoint.prototype, "GetRatio", box2d.b2GearJoint.prototype.GetRatio),
    box2d.b2GearJoint.prototype.SetRatio = function(o) {
        box2d.ENABLE_ASSERTS && box2d.b2Assert(box2d.b2IsValid(o)), this.m_ratio = o;
    }, goog.exportProperty(box2d.b2GearJoint.prototype, "SetRatio", box2d.b2GearJoint.prototype.SetRatio),
    box2d.b2GearJoint.prototype.Dump = function() {
        if (box2d.DEBUG) {
            var o = this.m_bodyA.m_islandIndex,
                t = this.m_bodyB.m_islandIndex,
                e = this.m_joint1.m_index,
                r = this.m_joint2.m_index;
            box2d.b2Log("  /*box2d.b2GearJointDef*/ var jd = new box2d.b2GearJointDef();\n"),
                box2d.b2Log("  jd.bodyA = bodies[%d];\n", o), box2d.b2Log("  jd.bodyB = bodies[%d];\n", t),
                box2d.b2Log("  jd.collideConnected = %s;\n", this.m_collideConnected ? "true" : "false"),
                box2d.b2Log("  jd.joint1 = joints[%d];\n", e), box2d.b2Log("  jd.joint2 = joints[%d];\n", r),
                box2d.b2Log("  jd.ratio = %.15f;\n", this.m_ratio), box2d.b2Log("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index);
        }
    }, goog.exportProperty(box2d.b2GearJoint.prototype, "Dump", box2d.b2GearJoint.prototype.Dump),
    box2d.b2RopeJointDef = function() {
        box2d.b2JointDef.call(this, box2d.b2JointType.e_ropeJoint), this.localAnchorA = new box2d.b2Vec2(-1, 0),
            this.localAnchorB = new box2d.b2Vec2(1, 0);
    }, goog.inherits(box2d.b2RopeJointDef, box2d.b2JointDef), goog.exportSymbol("box2d.b2RopeJointDef", box2d.b2RopeJointDef),
    box2d.b2RopeJointDef.prototype.localAnchorA = null, goog.exportProperty(box2d.b2RopeJointDef.prototype, "localAnchorA", box2d.b2RopeJointDef.prototype.localAnchorA),
    box2d.b2RopeJointDef.prototype.localAnchorB = null, goog.exportProperty(box2d.b2RopeJointDef.prototype, "localAnchorB", box2d.b2RopeJointDef.prototype.localAnchorB),
    box2d.b2RopeJointDef.prototype.maxLength = 0, goog.exportProperty(box2d.b2RopeJointDef.prototype, "maxLength", box2d.b2RopeJointDef.prototype.maxLength),
    box2d.b2RopeJoint = function(o) {
        box2d.b2Joint.call(this, o), this.m_localAnchorA = o.localAnchorA.Clone(), this.m_localAnchorB = o.localAnchorB.Clone(),
            this.m_maxLength = o.maxLength, this.m_u = new box2d.b2Vec2(), this.m_rA = new box2d.b2Vec2(),
            this.m_rB = new box2d.b2Vec2(), this.m_localCenterA = new box2d.b2Vec2(), this.m_localCenterB = new box2d.b2Vec2(),
            this.m_qA = new box2d.b2Rot(), this.m_qB = new box2d.b2Rot(), this.m_lalcA = new box2d.b2Vec2(),
            this.m_lalcB = new box2d.b2Vec2();
    }, goog.inherits(box2d.b2RopeJoint, box2d.b2Joint), goog.exportSymbol("box2d.b2RopeJoint", box2d.b2RopeJoint),
    box2d.b2RopeJoint.prototype.m_localAnchorA = null, goog.exportProperty(box2d.b2RopeJoint.prototype, "m_localAnchorA", box2d.b2RopeJoint.prototype.m_localAnchorA),
    box2d.b2RopeJoint.prototype.m_localAnchorB = null, goog.exportProperty(box2d.b2RopeJoint.prototype, "m_localAnchorB", box2d.b2RopeJoint.prototype.m_localAnchorB),
    box2d.b2RopeJoint.prototype.m_maxLength = 0, goog.exportProperty(box2d.b2RopeJoint.prototype, "m_maxLength", box2d.b2RopeJoint.prototype.m_maxLength),
    box2d.b2RopeJoint.prototype.m_length = 0, goog.exportProperty(box2d.b2RopeJoint.prototype, "m_length", box2d.b2RopeJoint.prototype.m_length),
    box2d.b2RopeJoint.prototype.m_impulse = 0, goog.exportProperty(box2d.b2RopeJoint.prototype, "m_impulse", box2d.b2RopeJoint.prototype.m_impulse),
    box2d.b2RopeJoint.prototype.m_indexA = 0, goog.exportProperty(box2d.b2RopeJoint.prototype, "m_indexA", box2d.b2RopeJoint.prototype.m_indexA),
    box2d.b2RopeJoint.prototype.m_indexB = 0, goog.exportProperty(box2d.b2RopeJoint.prototype, "m_indexB", box2d.b2RopeJoint.prototype.m_indexB),
    box2d.b2RopeJoint.prototype.m_u = null, goog.exportProperty(box2d.b2RopeJoint.prototype, "m_u", box2d.b2RopeJoint.prototype.m_u),
    box2d.b2RopeJoint.prototype.m_rA = null, goog.exportProperty(box2d.b2RopeJoint.prototype, "m_rA", box2d.b2RopeJoint.prototype.m_rA),
    box2d.b2RopeJoint.prototype.m_rB = null, goog.exportProperty(box2d.b2RopeJoint.prototype, "m_rB", box2d.b2RopeJoint.prototype.m_rB),
    box2d.b2RopeJoint.prototype.m_localCenterA = null, goog.exportProperty(box2d.b2RopeJoint.prototype, "m_localCenterA", box2d.b2RopeJoint.prototype.m_localCenterA),
    box2d.b2RopeJoint.prototype.m_localCenterB = null, goog.exportProperty(box2d.b2RopeJoint.prototype, "m_localCenterB", box2d.b2RopeJoint.prototype.m_localCenterB),
    box2d.b2RopeJoint.prototype.m_invMassA = 0, goog.exportProperty(box2d.b2RopeJoint.prototype, "m_invMassA", box2d.b2RopeJoint.prototype.m_invMassA),
    box2d.b2RopeJoint.prototype.m_invMassB = 0, goog.exportProperty(box2d.b2RopeJoint.prototype, "m_invMassB", box2d.b2RopeJoint.prototype.m_invMassB),
    box2d.b2RopeJoint.prototype.m_invIA = 0, goog.exportProperty(box2d.b2RopeJoint.prototype, "m_invIA", box2d.b2RopeJoint.prototype.m_invIA),
    box2d.b2RopeJoint.prototype.m_invIB = 0, goog.exportProperty(box2d.b2RopeJoint.prototype, "m_invIB", box2d.b2RopeJoint.prototype.m_invIB),
    box2d.b2RopeJoint.prototype.m_mass = 0, goog.exportProperty(box2d.b2RopeJoint.prototype, "m_mass", box2d.b2RopeJoint.prototype.m_mass),
    box2d.b2RopeJoint.prototype.m_state = box2d.b2LimitState.e_inactiveLimit, goog.exportProperty(box2d.b2RopeJoint.prototype, "m_state", box2d.b2RopeJoint.prototype.m_state),
    box2d.b2RopeJoint.prototype.m_qA = null, goog.exportProperty(box2d.b2RopeJoint.prototype, "m_qA", box2d.b2RopeJoint.prototype.m_qA),
    box2d.b2RopeJoint.prototype.m_qB = null, goog.exportProperty(box2d.b2RopeJoint.prototype, "m_qB", box2d.b2RopeJoint.prototype.m_qB),
    box2d.b2RopeJoint.prototype.m_lalcA = null, goog.exportProperty(box2d.b2RopeJoint.prototype, "m_lalcA", box2d.b2RopeJoint.prototype.m_lalcA),
    box2d.b2RopeJoint.prototype.m_lalcB = null, goog.exportProperty(box2d.b2RopeJoint.prototype, "m_lalcB", box2d.b2RopeJoint.prototype.m_lalcB),
    box2d.b2RopeJoint.prototype.InitVelocityConstraints = function(o) {
        this.m_indexA = this.m_bodyA.m_islandIndex, this.m_indexB = this.m_bodyB.m_islandIndex,
            this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter), this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter),
            this.m_invMassA = this.m_bodyA.m_invMass, this.m_invMassB = this.m_bodyB.m_invMass,
            this.m_invIA = this.m_bodyA.m_invI, this.m_invIB = this.m_bodyB.m_invI;
        var t = o.positions[this.m_indexA].c,
            e = o.velocities[this.m_indexA].v,
            r = o.velocities[this.m_indexA].w,
            i = o.positions[this.m_indexB].c,
            b = o.positions[this.m_indexB].a,
            n = o.velocities[this.m_indexB].v,
            p = o.velocities[this.m_indexB].w,
            s = this.m_qA.SetAngle(o.positions[this.m_indexA].a);
        b = this.m_qB.SetAngle(b);
        box2d.b2Sub_V2_V2(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA), box2d.b2Mul_R_V2(s, this.m_lalcA, this.m_rA),
            box2d.b2Sub_V2_V2(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB), box2d.b2Mul_R_V2(b, this.m_lalcB, this.m_rB),
            this.m_u.Copy(i).SelfAdd(this.m_rB).SelfSub(t).SelfSub(this.m_rA), this.m_length = this.m_u.Length(),
            this.m_state = 0 < this.m_length - this.m_maxLength ? box2d.b2LimitState.e_atUpperLimit : box2d.b2LimitState.e_inactiveLimit,
            this.m_length > box2d.b2_linearSlop ? (this.m_u.SelfMul(1 / this.m_length), t = box2d.b2Cross_V2_V2(this.m_rA, this.m_u),
                i = box2d.b2Cross_V2_V2(this.m_rB, this.m_u), t = this.m_invMassA + this.m_invIA * t * t + this.m_invMassB + this.m_invIB * i * i,
                this.m_mass = 0 !== t ? 1 / t : 0, o.step.warmStarting ? (this.m_impulse *= o.step.dtRatio,
                    t = box2d.b2Mul_S_V2(this.m_impulse, this.m_u, box2d.b2RopeJoint.prototype.InitVelocityConstraints.s_P),
                    e.SelfMulSub(this.m_invMassA, t), r -= this.m_invIA * box2d.b2Cross_V2_V2(this.m_rA, t),
                    n.SelfMulAdd(this.m_invMassB, t), p += this.m_invIB * box2d.b2Cross_V2_V2(this.m_rB, t)) : this.m_impulse = 0,
                o.velocities[this.m_indexA].w = r, o.velocities[this.m_indexB].w = p) : (this.m_u.SetZero(),
                this.m_impulse = this.m_mass = 0);
    }, goog.exportProperty(box2d.b2RopeJoint.prototype, "InitVelocityConstraints", box2d.b2RopeJoint.prototype.InitVelocityConstraints),
    box2d.b2RopeJoint.prototype.InitVelocityConstraints.s_P = new box2d.b2Vec2(), box2d.b2RopeJoint.prototype.SolveVelocityConstraints = function(o) {
        var t = o.velocities[this.m_indexA].v,
            e = o.velocities[this.m_indexA].w,
            r = o.velocities[this.m_indexB].v,
            i = o.velocities[this.m_indexB].w,
            b = box2d.b2AddCross_V2_S_V2(t, e, this.m_rA, box2d.b2RopeJoint.prototype.SolveVelocityConstraints.s_vpA),
            n = box2d.b2AddCross_V2_S_V2(r, i, this.m_rB, box2d.b2RopeJoint.prototype.SolveVelocityConstraints.s_vpB),
            p = this.m_length - this.m_maxLength;
        b = box2d.b2Dot_V2_V2(this.m_u, box2d.b2Sub_V2_V2(n, b, box2d.b2Vec2.s_t0));
        0 > p && (b += o.step.inv_dt * p), p = -this.m_mass * b, b = this.m_impulse, this.m_impulse = box2d.b2Min(0, this.m_impulse + p),
            p = this.m_impulse - b, p = box2d.b2Mul_S_V2(p, this.m_u, box2d.b2RopeJoint.prototype.SolveVelocityConstraints.s_P),
            t.SelfMulSub(this.m_invMassA, p), e -= this.m_invIA * box2d.b2Cross_V2_V2(this.m_rA, p),
            r.SelfMulAdd(this.m_invMassB, p), i += this.m_invIB * box2d.b2Cross_V2_V2(this.m_rB, p),
            o.velocities[this.m_indexA].w = e, o.velocities[this.m_indexB].w = i;
    }, goog.exportProperty(box2d.b2RopeJoint.prototype, "SolveVelocityConstraints", box2d.b2RopeJoint.prototype.SolveVelocityConstraints),
    box2d.b2RopeJoint.prototype.SolveVelocityConstraints.s_vpA = new box2d.b2Vec2(),
    box2d.b2RopeJoint.prototype.SolveVelocityConstraints.s_vpB = new box2d.b2Vec2(),
    box2d.b2RopeJoint.prototype.SolveVelocityConstraints.s_P = new box2d.b2Vec2(), box2d.b2RopeJoint.prototype.SolvePositionConstraints = function(o) {
        var t = o.positions[this.m_indexA].c,
            e = o.positions[this.m_indexA].a,
            r = o.positions[this.m_indexB].c,
            i = o.positions[this.m_indexB].a,
            b = this.m_qA.SetAngle(e),
            n = this.m_qB.SetAngle(i);
        box2d.b2Sub_V2_V2(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA), b = box2d.b2Mul_R_V2(b, this.m_lalcA, this.m_rA),
            box2d.b2Sub_V2_V2(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
        n = box2d.b2Mul_R_V2(n, this.m_lalcB, this.m_rB);
        var p = (a = this.m_u.Copy(r).SelfAdd(n).SelfSub(t).SelfSub(b)).Normalize(),
            s = p - this.m_maxLength,
            a = (s = box2d.b2Clamp(s, 0, box2d.b2_maxLinearCorrection),
                box2d.b2Mul_S_V2(-this.m_mass * s, a, box2d.b2RopeJoint.prototype.SolvePositionConstraints.s_P));
        return t.SelfMulSub(this.m_invMassA, a), e -= this.m_invIA * box2d.b2Cross_V2_V2(b, a),
            r.SelfMulAdd(this.m_invMassB, a), i += this.m_invIB * box2d.b2Cross_V2_V2(n, a),
            o.positions[this.m_indexA].a = e, o.positions[this.m_indexB].a = i, p - this.m_maxLength < box2d.b2_linearSlop;
    }, goog.exportProperty(box2d.b2RopeJoint.prototype, "SolvePositionConstraints", box2d.b2RopeJoint.prototype.SolvePositionConstraints),
    box2d.b2RopeJoint.prototype.SolvePositionConstraints.s_P = new box2d.b2Vec2(), box2d.b2RopeJoint.prototype.GetAnchorA = function(o) {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, o);
    }, goog.exportProperty(box2d.b2RopeJoint.prototype, "GetAnchorA", box2d.b2RopeJoint.prototype.GetAnchorA),
    box2d.b2RopeJoint.prototype.GetAnchorB = function(o) {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, o);
    }, goog.exportProperty(box2d.b2RopeJoint.prototype, "GetAnchorB", box2d.b2RopeJoint.prototype.GetAnchorB),
    box2d.b2RopeJoint.prototype.GetReactionForce = function(o, t) {
        return box2d.b2Mul_S_V2(o * this.m_impulse, this.m_u, t);
    }, goog.exportProperty(box2d.b2RopeJoint.prototype, "GetReactionForce", box2d.b2RopeJoint.prototype.GetReactionForce),
    box2d.b2RopeJoint.prototype.GetReactionTorque = function(o) {
        return 0;
    }, goog.exportProperty(box2d.b2RopeJoint.prototype, "GetReactionTorque", box2d.b2RopeJoint.prototype.GetReactionTorque),
    box2d.b2RopeJoint.prototype.GetLocalAnchorA = function(o) {
        return o.Copy(this.m_localAnchorA);
    }, goog.exportProperty(box2d.b2RopeJoint.prototype, "GetLocalAnchorA", box2d.b2RopeJoint.prototype.GetLocalAnchorA),
    box2d.b2RopeJoint.prototype.GetLocalAnchorB = function(o) {
        return o.Copy(this.m_localAnchorB);
    }, goog.exportProperty(box2d.b2RopeJoint.prototype, "GetLocalAnchorB", box2d.b2RopeJoint.prototype.GetLocalAnchorB),
    box2d.b2RopeJoint.prototype.SetMaxLength = function(o) {
        this.m_maxLength = o;
    }, goog.exportProperty(box2d.b2RopeJoint.prototype, "SetMaxLength", box2d.b2RopeJoint.prototype.SetMaxLength),
    box2d.b2RopeJoint.prototype.GetMaxLength = function() {
        return this.m_maxLength;
    }, goog.exportProperty(box2d.b2RopeJoint.prototype, "GetMaxLength", box2d.b2RopeJoint.prototype.GetMaxLength),
    box2d.b2RopeJoint.prototype.GetLimitState = function() {
        return this.m_state;
    }, goog.exportProperty(box2d.b2RopeJoint.prototype, "GetLimitState", box2d.b2RopeJoint.prototype.GetLimitState),
    box2d.b2RopeJoint.prototype.Dump = function() {
        if (box2d.DEBUG) {
            var o = this.m_bodyA.m_islandIndex,
                t = this.m_bodyB.m_islandIndex;
            box2d.b2Log("  /*box2d.b2RopeJointDef*/ var jd = new box2d.b2RopeJointDef();\n"),
                box2d.b2Log("  jd.bodyA = bodies[%d];\n", o), box2d.b2Log("  jd.bodyB = bodies[%d];\n", t),
                box2d.b2Log("  jd.collideConnected = %s;\n", this.m_collideConnected ? "true" : "false"),
                box2d.b2Log("  jd.localAnchorA.Set(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y),
                box2d.b2Log("  jd.localAnchorB.Set(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y),
                box2d.b2Log("  jd.maxLength = %.15f;\n", this.m_maxLength), box2d.b2Log("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index);
        }
    }, goog.exportProperty(box2d.b2RopeJoint.prototype, "Dump", box2d.b2RopeJoint.prototype.Dump),
    box2d.b2WeldJointDef = function() {
        box2d.b2JointDef.call(this, box2d.b2JointType.e_weldJoint), this.localAnchorA = new box2d.b2Vec2(),
            this.localAnchorB = new box2d.b2Vec2();
    }, goog.inherits(box2d.b2WeldJointDef, box2d.b2JointDef), goog.exportSymbol("box2d.b2WeldJointDef", box2d.b2WeldJointDef),
    box2d.b2WeldJointDef.prototype.localAnchorA = null, goog.exportProperty(box2d.b2WeldJointDef.prototype, "localAnchorA", box2d.b2WeldJointDef.prototype.localAnchorA),
    box2d.b2WeldJointDef.prototype.localAnchorB = null, goog.exportProperty(box2d.b2WeldJointDef.prototype, "localAnchorB", box2d.b2WeldJointDef.prototype.localAnchorB),
    box2d.b2WeldJointDef.prototype.referenceAngle = 0, goog.exportProperty(box2d.b2WeldJointDef.prototype, "referenceAngle", box2d.b2WeldJointDef.prototype.referenceAngle),
    box2d.b2WeldJointDef.prototype.frequencyHz = 0, goog.exportProperty(box2d.b2WeldJointDef.prototype, "frequencyHz", box2d.b2WeldJointDef.prototype.frequencyHz),
    box2d.b2WeldJointDef.prototype.dampingRatio = 0, goog.exportProperty(box2d.b2WeldJointDef.prototype, "dampingRatio", box2d.b2WeldJointDef.prototype.dampingRatio),
    box2d.b2WeldJointDef.prototype.Initialize = function(o, t, e) {
        this.bodyA = o, this.bodyB = t, this.bodyA.GetLocalPoint(e, this.localAnchorA),
            this.bodyB.GetLocalPoint(e, this.localAnchorB), this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle();
    }, goog.exportProperty(box2d.b2WeldJointDef.prototype, "Initialize", box2d.b2WeldJointDef.prototype.Initialize),
    box2d.b2WeldJoint = function(o) {
        box2d.b2Joint.call(this, o), this.m_frequencyHz = o.frequencyHz, this.m_dampingRatio = o.dampingRatio,
            this.m_localAnchorA = o.localAnchorA.Clone(), this.m_localAnchorB = o.localAnchorB.Clone(),
            this.m_referenceAngle = o.referenceAngle, this.m_impulse = new box2d.b2Vec3(0, 0, 0),
            this.m_rA = new box2d.b2Vec2(), this.m_rB = new box2d.b2Vec2(), this.m_localCenterA = new box2d.b2Vec2(),
            this.m_localCenterB = new box2d.b2Vec2(), this.m_mass = new box2d.b2Mat33(), this.m_qA = new box2d.b2Rot(),
            this.m_qB = new box2d.b2Rot(), this.m_lalcA = new box2d.b2Vec2(), this.m_lalcB = new box2d.b2Vec2(),
            this.m_K = new box2d.b2Mat33();
    }, goog.inherits(box2d.b2WeldJoint, box2d.b2Joint), goog.exportSymbol("box2d.b2WeldJoint", box2d.b2WeldJoint),
    box2d.b2WeldJoint.prototype.m_frequencyHz = 0, goog.exportProperty(box2d.b2WeldJoint.prototype, "m_frequencyHz", box2d.b2WeldJoint.prototype.m_frequencyHz),
    box2d.b2WeldJoint.prototype.m_dampingRatio = 0, goog.exportProperty(box2d.b2WeldJoint.prototype, "m_dampingRatio", box2d.b2WeldJoint.prototype.m_dampingRatio),
    box2d.b2WeldJoint.prototype.m_bias = 0, goog.exportProperty(box2d.b2WeldJoint.prototype, "m_bias", box2d.b2WeldJoint.prototype.m_bias),
    box2d.b2WeldJoint.prototype.m_localAnchorA = null, goog.exportProperty(box2d.b2WeldJoint.prototype, "m_localAnchorA", box2d.b2WeldJoint.prototype.m_localAnchorA),
    box2d.b2WeldJoint.prototype.m_localAnchorB = null, goog.exportProperty(box2d.b2WeldJoint.prototype, "m_localAnchorB", box2d.b2WeldJoint.prototype.m_localAnchorB),
    box2d.b2WeldJoint.prototype.m_referenceAngle = 0, goog.exportProperty(box2d.b2WeldJoint.prototype, "m_referenceAngle", box2d.b2WeldJoint.prototype.m_referenceAngle),
    box2d.b2WeldJoint.prototype.m_gamma = 0, goog.exportProperty(box2d.b2WeldJoint.prototype, "m_gamma", box2d.b2WeldJoint.prototype.m_gamma),
    box2d.b2WeldJoint.prototype.m_impulse = null, goog.exportProperty(box2d.b2WeldJoint.prototype, "m_impulse", box2d.b2WeldJoint.prototype.m_impulse),
    box2d.b2WeldJoint.prototype.m_indexA = 0, goog.exportProperty(box2d.b2WeldJoint.prototype, "m_indexA", box2d.b2WeldJoint.prototype.m_indexA),
    box2d.b2WeldJoint.prototype.m_indexB = 0, goog.exportProperty(box2d.b2WeldJoint.prototype, "m_indexB", box2d.b2WeldJoint.prototype.m_indexB),
    box2d.b2WeldJoint.prototype.m_rA = null, goog.exportProperty(box2d.b2WeldJoint.prototype, "m_rA", box2d.b2WeldJoint.prototype.m_rA),
    box2d.b2WeldJoint.prototype.m_rB = null, goog.exportProperty(box2d.b2WeldJoint.prototype, "m_rB", box2d.b2WeldJoint.prototype.m_rB),
    box2d.b2WeldJoint.prototype.m_localCenterA = null, goog.exportProperty(box2d.b2WeldJoint.prototype, "m_localCenterA", box2d.b2WeldJoint.prototype.m_localCenterA),
    box2d.b2WeldJoint.prototype.m_localCenterB = null, goog.exportProperty(box2d.b2WeldJoint.prototype, "m_localCenterB", box2d.b2WeldJoint.prototype.m_localCenterB),
    box2d.b2WeldJoint.prototype.m_invMassA = 0, goog.exportProperty(box2d.b2WeldJoint.prototype, "m_invMassA", box2d.b2WeldJoint.prototype.m_invMassA),
    box2d.b2WeldJoint.prototype.m_invMassB = 0, goog.exportProperty(box2d.b2WeldJoint.prototype, "m_invMassB", box2d.b2WeldJoint.prototype.m_invMassB),
    box2d.b2WeldJoint.prototype.m_invIA = 0, goog.exportProperty(box2d.b2WeldJoint.prototype, "m_invIA", box2d.b2WeldJoint.prototype.m_invIA),
    box2d.b2WeldJoint.prototype.m_invIB = 0, goog.exportProperty(box2d.b2WeldJoint.prototype, "m_invIB", box2d.b2WeldJoint.prototype.m_invIB),
    box2d.b2WeldJoint.prototype.m_mass = null, goog.exportProperty(box2d.b2WeldJoint.prototype, "m_mass", box2d.b2WeldJoint.prototype.m_mass),
    box2d.b2WeldJoint.prototype.m_qA = null, goog.exportProperty(box2d.b2WeldJoint.prototype, "m_qA", box2d.b2WeldJoint.prototype.m_qA),
    box2d.b2WeldJoint.prototype.m_qB = null, goog.exportProperty(box2d.b2WeldJoint.prototype, "m_qB", box2d.b2WeldJoint.prototype.m_qB),
    box2d.b2WeldJoint.prototype.m_lalcA = null, goog.exportProperty(box2d.b2WeldJoint.prototype, "m_lalcA", box2d.b2WeldJoint.prototype.m_lalcA),
    box2d.b2WeldJoint.prototype.m_lalcB = null, goog.exportProperty(box2d.b2WeldJoint.prototype, "m_lalcB", box2d.b2WeldJoint.prototype.m_lalcB),
    box2d.b2WeldJoint.prototype.m_K = null, goog.exportProperty(box2d.b2WeldJoint.prototype, "m_K", box2d.b2WeldJoint.prototype.m_K),
    box2d.b2WeldJoint.prototype.InitVelocityConstraints = function(o) {
        this.m_indexA = this.m_bodyA.m_islandIndex, this.m_indexB = this.m_bodyB.m_islandIndex,
            this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter), this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter),
            this.m_invMassA = this.m_bodyA.m_invMass, this.m_invMassB = this.m_bodyB.m_invMass,
            this.m_invIA = this.m_bodyA.m_invI, this.m_invIB = this.m_bodyB.m_invI;
        var t = o.positions[this.m_indexA].a,
            e = o.velocities[this.m_indexA].v,
            r = o.velocities[this.m_indexA].w,
            i = o.positions[this.m_indexB].a,
            b = o.velocities[this.m_indexB].v,
            n = o.velocities[this.m_indexB].w,
            p = this.m_qA.SetAngle(t),
            s = this.m_qB.SetAngle(i);
        box2d.b2Sub_V2_V2(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA), box2d.b2Mul_R_V2(p, this.m_lalcA, this.m_rA),
            box2d.b2Sub_V2_V2(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB), box2d.b2Mul_R_V2(s, this.m_lalcB, this.m_rB);
        p = this.m_invMassA, s = this.m_invMassB;
        var a = this.m_invIA,
            d = this.m_invIB;
        if ((l = this.m_K).ex.x = p + s + this.m_rA.y * this.m_rA.y * a + this.m_rB.y * this.m_rB.y * d,
            l.ey.x = -this.m_rA.y * this.m_rA.x * a - this.m_rB.y * this.m_rB.x * d, l.ez.x = -this.m_rA.y * a - this.m_rB.y * d,
            l.ex.y = l.ey.x, l.ey.y = p + s + this.m_rA.x * this.m_rA.x * a + this.m_rB.x * this.m_rB.x * d,
            l.ez.y = this.m_rA.x * a + this.m_rB.x * d, l.ex.z = l.ez.x, l.ey.z = l.ez.y, l.ez.z = a + d,
            0 < this.m_frequencyHz) {
            l.GetInverse22(this.m_mass);
            var l, x = 0 < (l = a + d) ? 1 / l : 0,
                y = (t = i - t - this.m_referenceAngle,
                    x * (i = 2 * box2d.b2_pi * this.m_frequencyHz) * i),
                c = o.step.dt;
            this.m_gamma = c * (2 * x * this.m_dampingRatio * i + c * y), this.m_gamma = 0 !== this.m_gamma ? 1 / this.m_gamma : 0,
                this.m_bias = t * c * y * this.m_gamma, l += this.m_gamma, this.m_mass.ez.z = 0 !== l ? 1 / l : 0;
        } else 0 === l.ez.z ? l.GetInverse22(this.m_mass) : l.GetSymInverse33(this.m_mass),
            this.m_bias = this.m_gamma = 0;
        o.step.warmStarting ? (this.m_impulse.SelfMulScalar(o.step.dtRatio), l = box2d.b2WeldJoint.prototype.InitVelocityConstraints.s_P.Set(this.m_impulse.x, this.m_impulse.y),
                e.SelfMulSub(p, l), r -= a * (box2d.b2Cross_V2_V2(this.m_rA, l) + this.m_impulse.z),
                b.SelfMulAdd(s, l), n += d * (box2d.b2Cross_V2_V2(this.m_rB, l) + this.m_impulse.z)) : this.m_impulse.SetZero(),
            o.velocities[this.m_indexA].w = r, o.velocities[this.m_indexB].w = n;
    }, box2d.b2WeldJoint.prototype.InitVelocityConstraints.s_P = new box2d.b2Vec2(),
    box2d.b2WeldJoint.prototype.SolveVelocityConstraints = function(o) {
        var t = o.velocities[this.m_indexA].v,
            e = o.velocities[this.m_indexA].w,
            r = o.velocities[this.m_indexB].v,
            i = o.velocities[this.m_indexB].w,
            b = this.m_invMassA,
            n = this.m_invMassB,
            p = this.m_invIA,
            s = this.m_invIB;
        if (0 < this.m_frequencyHz) {
            var a = -this.m_mass.ez.z * (i - e + this.m_bias + this.m_gamma * this.m_impulse.z);
            this.m_impulse.z += a, e -= p * a, i += s * a, a = box2d.b2Sub_V2_V2(box2d.b2AddCross_V2_S_V2(r, i, this.m_rB, box2d.b2Vec2.s_t0), box2d.b2AddCross_V2_S_V2(t, e, this.m_rA, box2d.b2Vec2.s_t1), box2d.b2WeldJoint.prototype.SolveVelocityConstraints.s_Cdot1),
                a = box2d.b2Mul_M33_X_Y(this.m_mass, a.x, a.y, box2d.b2WeldJoint.prototype.SolveVelocityConstraints.s_impulse1).SelfNeg(),
                this.m_impulse.x += a.x, this.m_impulse.y += a.y, t.SelfMulSub(b, a), e -= p * box2d.b2Cross_V2_V2(this.m_rA, a),
                r.SelfMulAdd(n, a), i += s * box2d.b2Cross_V2_V2(this.m_rB, a);
        } else {
            a = box2d.b2Sub_V2_V2(box2d.b2AddCross_V2_S_V2(r, i, this.m_rB, box2d.b2Vec2.s_t0), box2d.b2AddCross_V2_S_V2(t, e, this.m_rA, box2d.b2Vec2.s_t1), box2d.b2WeldJoint.prototype.SolveVelocityConstraints.s_Cdot1);
            var d = box2d.b2Mul_M33_X_Y_Z(this.m_mass, a.x, a.y, i - e, box2d.b2WeldJoint.prototype.SolveVelocityConstraints.s_impulse).SelfNeg();
            this.m_impulse.SelfAdd(d), a = box2d.b2WeldJoint.prototype.SolveVelocityConstraints.s_P.Set(d.x, d.y),
                t.SelfMulSub(b, a), e -= p * (box2d.b2Cross_V2_V2(this.m_rA, a) + d.z), r.SelfMulAdd(n, a),
                i += s * (box2d.b2Cross_V2_V2(this.m_rB, a) + d.z);
        }
        o.velocities[this.m_indexA].w = e, o.velocities[this.m_indexB].w = i;
    }, goog.exportProperty(box2d.b2WeldJoint.prototype, "SolveVelocityConstraints", box2d.b2WeldJoint.prototype.SolveVelocityConstraints),
    box2d.b2WeldJoint.prototype.SolveVelocityConstraints.s_Cdot1 = new box2d.b2Vec2(),
    box2d.b2WeldJoint.prototype.SolveVelocityConstraints.s_impulse1 = new box2d.b2Vec2(),
    box2d.b2WeldJoint.prototype.SolveVelocityConstraints.s_impulse = new box2d.b2Vec3(),
    box2d.b2WeldJoint.prototype.SolveVelocityConstraints.s_P = new box2d.b2Vec2(), box2d.b2WeldJoint.prototype.SolvePositionConstraints = function(o) {
        var t = o.positions[this.m_indexA].c,
            e = o.positions[this.m_indexA].a,
            r = o.positions[this.m_indexB].c,
            i = o.positions[this.m_indexB].a,
            b = this.m_qA.SetAngle(e),
            n = this.m_qB.SetAngle(i),
            p = this.m_invMassA,
            s = this.m_invMassB,
            a = this.m_invIA,
            d = this.m_invIB;
        box2d.b2Sub_V2_V2(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA);
        var l = box2d.b2Mul_R_V2(b, this.m_lalcA, this.m_rA);
        box2d.b2Sub_V2_V2(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
        var x = box2d.b2Mul_R_V2(n, this.m_lalcB, this.m_rB);
        if ((c = this.m_K).ex.x = p + s + l.y * l.y * a + x.y * x.y * d, c.ey.x = -l.y * l.x * a - x.y * x.x * d,
            c.ez.x = -l.y * a - x.y * d, c.ex.y = c.ey.x, c.ey.y = p + s + l.x * l.x * a + x.x * x.x * d,
            c.ez.y = l.x * a + x.x * d, c.ex.z = c.ez.x, c.ey.z = c.ez.y, c.ez.z = a + d, 0 < this.m_frequencyHz) {
            var y = box2d.b2Sub_V2_V2(box2d.b2Add_V2_V2(r, x, box2d.b2Vec2.s_t0), box2d.b2Add_V2_V2(t, l, box2d.b2Vec2.s_t1), box2d.b2WeldJoint.prototype.SolvePositionConstraints.s_C1),
                c = (n = y.Length(),
                    b = 0, c.Solve22(y.x, y.y, box2d.b2WeldJoint.prototype.SolvePositionConstraints.s_P).SelfNeg());
            t.SelfMulSub(p, c), e -= a * box2d.b2Cross_V2_V2(l, c), r.SelfMulAdd(s, c), i += d * box2d.b2Cross_V2_V2(x, c);
        } else y = box2d.b2Sub_V2_V2(box2d.b2Add_V2_V2(r, x, box2d.b2Vec2.s_t0), box2d.b2Add_V2_V2(t, l, box2d.b2Vec2.s_t1), box2d.b2WeldJoint.prototype.SolvePositionConstraints.s_C1),
            x = i - e - this.m_referenceAngle, n = y.Length(), b = box2d.b2Abs(x), l = box2d.b2WeldJoint.prototype.SolvePositionConstraints.s_impulse,
            0 < c.ez.z ? c.Solve33(y.x, y.y, x, l).SelfNeg() : (c = c.Solve22(y.x, y.y, box2d.b2WeldJoint.prototype.SolvePositionConstraints.s_impulse2).SelfNeg(),
                l.x = c.x, l.y = c.y, l.z = 0), c = box2d.b2WeldJoint.prototype.SolvePositionConstraints.s_P.Set(l.x, l.y),
            t.SelfMulSub(p, c), e -= a * (box2d.b2Cross_V2_V2(this.m_rA, c) + l.z), r.SelfMulAdd(s, c),
            i += d * (box2d.b2Cross_V2_V2(this.m_rB, c) + l.z);
        return o.positions[this.m_indexA].a = e, o.positions[this.m_indexB].a = i, n <= box2d.b2_linearSlop && b <= box2d.b2_angularSlop;
    }, goog.exportProperty(box2d.b2WeldJoint.prototype, "SolvePositionConstraints", box2d.b2WeldJoint.prototype.SolvePositionConstraints);

box2d.b2WeldJoint.prototype.SolvePositionConstraints.s_C1 = new box2d.b2Vec2(),
    box2d.b2WeldJoint.prototype.SolvePositionConstraints.s_P = new box2d.b2Vec2(), box2d.b2WeldJoint.prototype.SolvePositionConstraints.s_impulse = new box2d.b2Vec3(),
    box2d.b2WeldJoint.prototype.SolvePositionConstraints.s_impulse2 = new box2d.b2Vec2(),
    box2d.b2WeldJoint.prototype.GetAnchorA = function(o) {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, o);
    }, goog.exportProperty(box2d.b2WeldJoint.prototype, "GetAnchorA", box2d.b2WeldJoint.prototype.GetAnchorA),
    box2d.b2WeldJoint.prototype.GetAnchorB = function(o) {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, o);
    }, goog.exportProperty(box2d.b2WeldJoint.prototype, "GetAnchorB", box2d.b2WeldJoint.prototype.GetAnchorB),
    box2d.b2WeldJoint.prototype.GetReactionForce = function(o, t) {
        return t.Set(o * this.m_impulse.x, o * this.m_impulse.y);
    }, goog.exportProperty(box2d.b2WeldJoint.prototype, "GetReactionForce", box2d.b2WeldJoint.prototype.GetReactionForce),
    box2d.b2WeldJoint.prototype.GetReactionTorque = function(o) {
        return o * this.m_impulse.z;
    }, goog.exportProperty(box2d.b2WeldJoint.prototype, "GetReactionTorque", box2d.b2WeldJoint.prototype.GetReactionTorque),
    box2d.b2WeldJoint.prototype.GetLocalAnchorA = function(o) {
        return o.Copy(this.m_localAnchorA);
    }, goog.exportProperty(box2d.b2WeldJoint.prototype, "GetLocalAnchorA", box2d.b2WeldJoint.prototype.GetLocalAnchorA),
    box2d.b2WeldJoint.prototype.GetLocalAnchorB = function(o) {
        return o.Copy(this.m_localAnchorB);
    }, goog.exportProperty(box2d.b2WeldJoint.prototype, "GetLocalAnchorB", box2d.b2WeldJoint.prototype.GetLocalAnchorB),
    box2d.b2WeldJoint.prototype.GetReferenceAngle = function() {
        return this.m_referenceAngle;
    }, goog.exportProperty(box2d.b2WeldJoint.prototype, "GetReferenceAngle", box2d.b2WeldJoint.prototype.GetReferenceAngle),
    box2d.b2WeldJoint.prototype.SetFrequency = function(o) {
        this.m_frequencyHz = o;
    }, box2d.b2WeldJoint.prototype.GetFrequency = function() {
        return this.m_frequencyHz;
    }, goog.exportProperty(box2d.b2WeldJoint.prototype, "GetFrequency", box2d.b2WeldJoint.prototype.GetFrequency),
    box2d.b2WeldJoint.prototype.SetDampingRatio = function(o) {
        this.m_dampingRatio = o;
    }, box2d.b2WeldJoint.prototype.GetDampingRatio = function() {
        return this.m_dampingRatio;
    }, goog.exportProperty(box2d.b2WeldJoint.prototype, "GetDampingRatio", box2d.b2WeldJoint.prototype.GetDampingRatio),
    box2d.b2WeldJoint.prototype.Dump = function() {
        if (box2d.DEBUG) {
            var o = this.m_bodyA.m_islandIndex,
                t = this.m_bodyB.m_islandIndex;
            box2d.b2Log("  /*box2d.b2WeldJointDef*/ var jd = new box2d.b2WeldJointDef();\n"),
                box2d.b2Log("  jd.bodyA = bodies[%d];\n", o), box2d.b2Log("  jd.bodyB = bodies[%d];\n", t),
                box2d.b2Log("  jd.collideConnected = %s;\n", this.m_collideConnected ? "true" : "false"),
                box2d.b2Log("  jd.localAnchorA.Set(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y),
                box2d.b2Log("  jd.localAnchorB.Set(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y),
                box2d.b2Log("  jd.referenceAngle = %.15f;\n", this.m_referenceAngle), box2d.b2Log("  jd.frequencyHz = %.15f;\n", this.m_frequencyHz),
                box2d.b2Log("  jd.dampingRatio = %.15f;\n", this.m_dampingRatio), box2d.b2Log("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index);
        }
    }, goog.exportProperty(box2d.b2WeldJoint.prototype, "Dump", box2d.b2WeldJoint.prototype.Dump),
    box2d.b2WheelJointDef = function() {
        box2d.b2JointDef.call(this, box2d.b2JointType.e_wheelJoint), this.localAnchorA = new box2d.b2Vec2(0, 0),
            this.localAnchorB = new box2d.b2Vec2(0, 0), this.localAxisA = new box2d.b2Vec2(1, 0);
    }, goog.inherits(box2d.b2WheelJointDef, box2d.b2JointDef), goog.exportSymbol("box2d.b2WheelJointDef", box2d.b2WheelJointDef),
    box2d.b2WheelJointDef.prototype.localAnchorA = null, goog.exportProperty(box2d.b2WheelJointDef.prototype, "localAnchorA", box2d.b2WheelJointDef.prototype.localAnchorA),
    box2d.b2WheelJointDef.prototype.localAnchorB = null, goog.exportProperty(box2d.b2WheelJointDef.prototype, "localAnchorB", box2d.b2WheelJointDef.prototype.localAnchorB),
    box2d.b2WheelJointDef.prototype.localAxisA = null, goog.exportProperty(box2d.b2WheelJointDef.prototype, "localAxisA", box2d.b2WheelJointDef.prototype.localAxisA),
    box2d.b2WheelJointDef.prototype.enableMotor = !1, goog.exportProperty(box2d.b2WheelJointDef.prototype, "enableMotor", box2d.b2WheelJointDef.prototype.enableMotor),
    box2d.b2WheelJointDef.prototype.maxMotorTorque = 0, goog.exportProperty(box2d.b2WheelJointDef.prototype, "maxMotorTorque", box2d.b2WheelJointDef.prototype.maxMotorTorque),
    box2d.b2WheelJointDef.prototype.motorSpeed = 0, goog.exportProperty(box2d.b2WheelJointDef.prototype, "motorSpeed", box2d.b2WheelJointDef.prototype.motorSpeed),
    box2d.b2WheelJointDef.prototype.frequencyHz = 2, goog.exportProperty(box2d.b2WheelJointDef.prototype, "frequencyHz", box2d.b2WheelJointDef.prototype.frequencyHz),
    box2d.b2WheelJointDef.prototype.dampingRatio = .7, goog.exportProperty(box2d.b2WheelJointDef.prototype, "dampingRatio", box2d.b2WheelJointDef.prototype.dampingRatio),
    box2d.b2WheelJointDef.prototype.Initialize = function(o, t, e, r) {
        this.bodyA = o, this.bodyB = t, this.bodyA.GetLocalPoint(e, this.localAnchorA),
            this.bodyB.GetLocalPoint(e, this.localAnchorB), this.bodyA.GetLocalVector(r, this.localAxisA);
    }, goog.exportProperty(box2d.b2WheelJointDef.prototype, "Initialize", box2d.b2WheelJointDef.prototype.Initialize),
    box2d.b2WheelJoint = function(o) {
        box2d.b2Joint.call(this, o), this.m_frequencyHz = o.frequencyHz, this.m_dampingRatio = o.dampingRatio,
            this.m_localAnchorA = o.localAnchorA.Clone(), this.m_localAnchorB = o.localAnchorB.Clone(),
            this.m_localXAxisA = o.localAxisA.Clone(), this.m_localYAxisA = box2d.b2Cross_S_V2(1, this.m_localXAxisA, new box2d.b2Vec2()),
            this.m_maxMotorTorque = o.maxMotorTorque, this.m_motorSpeed = o.motorSpeed, this.m_enableMotor = o.enableMotor,
            this.m_localCenterA = new box2d.b2Vec2(), this.m_localCenterB = new box2d.b2Vec2(),
            this.m_ax = new box2d.b2Vec2(), this.m_ay = new box2d.b2Vec2(), this.m_qA = new box2d.b2Rot(),
            this.m_qB = new box2d.b2Rot(), this.m_lalcA = new box2d.b2Vec2(), this.m_lalcB = new box2d.b2Vec2(),
            this.m_rA = new box2d.b2Vec2(), this.m_rB = new box2d.b2Vec2(), this.m_ax.SetZero(),
            this.m_ay.SetZero();
    }, goog.inherits(box2d.b2WheelJoint, box2d.b2Joint), goog.exportSymbol("box2d.b2WheelJoint", box2d.b2WheelJoint),
    box2d.b2WheelJoint.prototype.m_frequencyHz = 0, goog.exportProperty(box2d.b2WheelJoint.prototype, "m_frequencyHz", box2d.b2WheelJoint.prototype.m_frequencyHz),
    box2d.b2WheelJoint.prototype.m_dampingRatio = 0, goog.exportProperty(box2d.b2WheelJoint.prototype, "m_dampingRatio", box2d.b2WheelJoint.prototype.m_dampingRatio),
    box2d.b2WheelJoint.prototype.m_localAnchorA = null, goog.exportProperty(box2d.b2WheelJoint.prototype, "m_localAnchorA", box2d.b2WheelJoint.prototype.m_localAnchorA),
    box2d.b2WheelJoint.prototype.m_localAnchorB = null, goog.exportProperty(box2d.b2WheelJoint.prototype, "m_localAnchorB", box2d.b2WheelJoint.prototype.m_localAnchorB),
    box2d.b2WheelJoint.prototype.m_localXAxisA = null, goog.exportProperty(box2d.b2WheelJoint.prototype, "m_localXAxisA", box2d.b2WheelJoint.prototype.m_localXAxisA),
    box2d.b2WheelJoint.prototype.m_localYAxisA = null, goog.exportProperty(box2d.b2WheelJoint.prototype, "m_localYAxisA", box2d.b2WheelJoint.prototype.m_localYAxisA),
    box2d.b2WheelJoint.prototype.m_impulse = 0, goog.exportProperty(box2d.b2WheelJoint.prototype, "m_impulse", box2d.b2WheelJoint.prototype.m_impulse),
    box2d.b2WheelJoint.prototype.m_motorImpulse = 0, goog.exportProperty(box2d.b2WheelJoint.prototype, "m_motorImpulse", box2d.b2WheelJoint.prototype.m_motorImpulse),
    box2d.b2WheelJoint.prototype.m_springImpulse = 0, goog.exportProperty(box2d.b2WheelJoint.prototype, "m_springImpulse", box2d.b2WheelJoint.prototype.m_springImpulse),
    box2d.b2WheelJoint.prototype.m_maxMotorTorque = 0, goog.exportProperty(box2d.b2WheelJoint.prototype, "m_maxMotorTorque", box2d.b2WheelJoint.prototype.m_maxMotorTorque),
    box2d.b2WheelJoint.prototype.m_motorSpeed = 0, goog.exportProperty(box2d.b2WheelJoint.prototype, "m_motorSpeed", box2d.b2WheelJoint.prototype.m_motorSpeed),
    box2d.b2WheelJoint.prototype.m_enableMotor = !1, goog.exportProperty(box2d.b2WheelJoint.prototype, "m_enableMotor", box2d.b2WheelJoint.prototype.m_enableMotor),
    box2d.b2WheelJoint.prototype.m_indexA = 0, goog.exportProperty(box2d.b2WheelJoint.prototype, "m_indexA", box2d.b2WheelJoint.prototype.m_indexA),
    box2d.b2WheelJoint.prototype.m_indexB = 0, goog.exportProperty(box2d.b2WheelJoint.prototype, "m_indexB", box2d.b2WheelJoint.prototype.m_indexB),
    box2d.b2WheelJoint.prototype.m_localCenterA = null, goog.exportProperty(box2d.b2WheelJoint.prototype, "m_localCenterA", box2d.b2WheelJoint.prototype.m_localCenterA),
    box2d.b2WheelJoint.prototype.m_localCenterB = null, goog.exportProperty(box2d.b2WheelJoint.prototype, "m_localCenterB", box2d.b2WheelJoint.prototype.m_localCenterB),
    box2d.b2WheelJoint.prototype.m_invMassA = 0, goog.exportProperty(box2d.b2WheelJoint.prototype, "m_invMassA", box2d.b2WheelJoint.prototype.m_invMassA),
    box2d.b2WheelJoint.prototype.m_invMassB = 0, goog.exportProperty(box2d.b2WheelJoint.prototype, "m_invMassB", box2d.b2WheelJoint.prototype.m_invMassB),
    box2d.b2WheelJoint.prototype.m_invIA = 0, goog.exportProperty(box2d.b2WheelJoint.prototype, "m_invIA", box2d.b2WheelJoint.prototype.m_invIA),
    box2d.b2WheelJoint.prototype.m_invIB = 0, goog.exportProperty(box2d.b2WheelJoint.prototype, "m_invIB", box2d.b2WheelJoint.prototype.m_invIB),
    box2d.b2WheelJoint.prototype.m_ax = null, goog.exportProperty(box2d.b2WheelJoint.prototype, "m_ax", box2d.b2WheelJoint.prototype.m_ax),
    box2d.b2WheelJoint.prototype.m_ay = null, goog.exportProperty(box2d.b2WheelJoint.prototype, "m_ay", box2d.b2WheelJoint.prototype.m_ay),
    box2d.b2WheelJoint.prototype.m_sAx = 0, goog.exportProperty(box2d.b2WheelJoint.prototype, "m_sAx", box2d.b2WheelJoint.prototype.m_sAx),
    box2d.b2WheelJoint.prototype.m_sBx = 0, goog.exportProperty(box2d.b2WheelJoint.prototype, "m_sBx", box2d.b2WheelJoint.prototype.m_sBx),
    box2d.b2WheelJoint.prototype.m_sAy = 0, goog.exportProperty(box2d.b2WheelJoint.prototype, "m_sAy", box2d.b2WheelJoint.prototype.m_sAy),
    box2d.b2WheelJoint.prototype.m_sBy = 0, goog.exportProperty(box2d.b2WheelJoint.prototype, "m_sBy", box2d.b2WheelJoint.prototype.m_sBy),
    box2d.b2WheelJoint.prototype.m_mass = 0, goog.exportProperty(box2d.b2WheelJoint.prototype, "m_mass", box2d.b2WheelJoint.prototype.m_mass),
    box2d.b2WheelJoint.prototype.m_motorMass = 0, goog.exportProperty(box2d.b2WheelJoint.prototype, "m_motorMass", box2d.b2WheelJoint.prototype.m_motorMass),
    box2d.b2WheelJoint.prototype.m_springMass = 0, goog.exportProperty(box2d.b2WheelJoint.prototype, "m_springMass", box2d.b2WheelJoint.prototype.m_springMass),
    box2d.b2WheelJoint.prototype.m_bias = 0, goog.exportProperty(box2d.b2WheelJoint.prototype, "m_bias", box2d.b2WheelJoint.prototype.m_bias),
    box2d.b2WheelJoint.prototype.m_gamma = 0, goog.exportProperty(box2d.b2WheelJoint.prototype, "m_gamma", box2d.b2WheelJoint.prototype.m_gamma),
    box2d.b2WheelJoint.prototype.m_qA = null, goog.exportProperty(box2d.b2WheelJoint.prototype, "m_qA", box2d.b2WheelJoint.prototype.m_qA),
    box2d.b2WheelJoint.prototype.m_qB = null, goog.exportProperty(box2d.b2WheelJoint.prototype, "m_qB", box2d.b2WheelJoint.prototype.m_qB),
    box2d.b2WheelJoint.prototype.m_lalcA = null, goog.exportProperty(box2d.b2WheelJoint.prototype, "m_lalcA", box2d.b2WheelJoint.prototype.m_lalcA),
    box2d.b2WheelJoint.prototype.m_lalcB = null, goog.exportProperty(box2d.b2WheelJoint.prototype, "m_lalcB", box2d.b2WheelJoint.prototype.m_lalcB),
    box2d.b2WheelJoint.prototype.m_rA = null, goog.exportProperty(box2d.b2WheelJoint.prototype, "m_rA", box2d.b2WheelJoint.prototype.m_rA),
    box2d.b2WheelJoint.prototype.m_rB = null, goog.exportProperty(box2d.b2WheelJoint.prototype, "m_rB", box2d.b2WheelJoint.prototype.m_rB),
    box2d.b2WheelJoint.prototype.GetMotorSpeed = function() {
        return this.m_motorSpeed;
    }, goog.exportProperty(box2d.b2WheelJoint.prototype, "GetMotorSpeed", box2d.b2WheelJoint.prototype.GetMotorSpeed),
    box2d.b2WheelJoint.prototype.GetMaxMotorTorque = function() {
        return this.m_maxMotorTorque;
    }, goog.exportProperty(box2d.b2WheelJoint.prototype, "GetMaxMotorTorque", box2d.b2WheelJoint.prototype.GetMaxMotorTorque),
    box2d.b2WheelJoint.prototype.SetSpringFrequencyHz = function(o) {
        this.m_frequencyHz = o;
    }, goog.exportProperty(box2d.b2WheelJoint.prototype, "SetSpringFrequencyHz", box2d.b2WheelJoint.prototype.SetSpringFrequencyHz),
    box2d.b2WheelJoint.prototype.GetSpringFrequencyHz = function() {
        return this.m_frequencyHz;
    }, goog.exportProperty(box2d.b2WheelJoint.prototype, "GetSpringFrequencyHz", box2d.b2WheelJoint.prototype.GetSpringFrequencyHz),
    box2d.b2WheelJoint.prototype.SetSpringDampingRatio = function(o) {
        this.m_dampingRatio = o;
    }, goog.exportProperty(box2d.b2WheelJoint.prototype, "SetSpringDampingRatio", box2d.b2WheelJoint.prototype.SetSpringDampingRatio),
    box2d.b2WheelJoint.prototype.GetSpringDampingRatio = function() {
        return this.m_dampingRatio;
    }, goog.exportProperty(box2d.b2WheelJoint.prototype, "GetSpringDampingRatio", box2d.b2WheelJoint.prototype.GetSpringDampingRatio),
    box2d.b2WheelJoint.prototype.InitVelocityConstraints = function(o) {
        this.m_indexA = this.m_bodyA.m_islandIndex, this.m_indexB = this.m_bodyB.m_islandIndex,
            this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter), this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter),
            this.m_invMassA = this.m_bodyA.m_invMass, this.m_invMassB = this.m_bodyB.m_invMass,
            this.m_invIA = this.m_bodyA.m_invI, this.m_invIB = this.m_bodyB.m_invI;
        var t = this.m_invMassA,
            e = this.m_invMassB,
            r = this.m_invIA,
            i = this.m_invIB,
            b = o.positions[this.m_indexA].c,
            n = o.velocities[this.m_indexA].v,
            p = o.velocities[this.m_indexA].w,
            s = o.positions[this.m_indexB].c,
            a = o.positions[this.m_indexB].a,
            d = o.velocities[this.m_indexB].v,
            l = o.velocities[this.m_indexB].w,
            x = this.m_qA.SetAngle(o.positions[this.m_indexA].a),
            y = this.m_qB.SetAngle(a);
        box2d.b2Sub_V2_V2(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA), a = box2d.b2Mul_R_V2(x, this.m_lalcA, this.m_rA),
            box2d.b2Sub_V2_V2(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB), y = box2d.b2Mul_R_V2(y, this.m_lalcB, this.m_rB),
            b = box2d.b2Sub_V2_V2(box2d.b2Add_V2_V2(s, y, box2d.b2Vec2.s_t0), box2d.b2Add_V2_V2(b, a, box2d.b2Vec2.s_t1), box2d.b2WheelJoint.prototype.InitVelocityConstraints.s_d),
            box2d.b2Mul_R_V2(x, this.m_localYAxisA, this.m_ay), this.m_sAy = box2d.b2Cross_V2_V2(box2d.b2Add_V2_V2(b, a, box2d.b2Vec2.s_t0), this.m_ay),
            this.m_sBy = box2d.b2Cross_V2_V2(y, this.m_ay), this.m_mass = t + e + r * this.m_sAy * this.m_sAy + i * this.m_sBy * this.m_sBy,
            0 < this.m_mass && (this.m_mass = 1 / this.m_mass), this.m_gamma = this.m_bias = this.m_springMass = 0,
            0 < this.m_frequencyHz ? (box2d.b2Mul_R_V2(x, this.m_localXAxisA, this.m_ax), this.m_sAx = box2d.b2Cross_V2_V2(box2d.b2Add_V2_V2(b, a, box2d.b2Vec2.s_t0), this.m_ax),
                this.m_sBx = box2d.b2Cross_V2_V2(y, this.m_ax), 0 < (t = t + e + r * this.m_sAx * this.m_sAx + i * this.m_sBx * this.m_sBx) && (this.m_springMass = 1 / t,
                    e = box2d.b2Dot_V2_V2(b, this.m_ax), x = 2 * box2d.b2_pi * this.m_frequencyHz, b = this.m_springMass * x * x,
                    s = o.step.dt, this.m_gamma = s * (2 * this.m_springMass * this.m_dampingRatio * x + s * b),
                    0 < this.m_gamma && (this.m_gamma = 1 / this.m_gamma), this.m_bias = e * s * b * this.m_gamma,
                    this.m_springMass = t + this.m_gamma, 0 < this.m_springMass && (this.m_springMass = 1 / this.m_springMass))) : this.m_springImpulse = 0,
            this.m_enableMotor ? (this.m_motorMass = r + i, 0 < this.m_motorMass && (this.m_motorMass = 1 / this.m_motorMass)) : this.m_motorImpulse = this.m_motorMass = 0,
            o.step.warmStarting ? (this.m_impulse *= o.step.dtRatio, this.m_springImpulse *= o.step.dtRatio,
                this.m_motorImpulse *= o.step.dtRatio, r = box2d.b2Add_V2_V2(box2d.b2Mul_S_V2(this.m_impulse, this.m_ay, box2d.b2Vec2.s_t0), box2d.b2Mul_S_V2(this.m_springImpulse, this.m_ax, box2d.b2Vec2.s_t1), box2d.b2WheelJoint.prototype.InitVelocityConstraints.s_P),
                i = this.m_impulse * this.m_sAy + this.m_springImpulse * this.m_sAx + this.m_motorImpulse,
                t = this.m_impulse * this.m_sBy + this.m_springImpulse * this.m_sBx + this.m_motorImpulse,
                n.SelfMulSub(this.m_invMassA, r), p -= this.m_invIA * i, d.SelfMulAdd(this.m_invMassB, r),
                l += this.m_invIB * t) : this.m_motorImpulse = this.m_springImpulse = this.m_impulse = 0,
            o.velocities[this.m_indexA].w = p, o.velocities[this.m_indexB].w = l;
    }, goog.exportProperty(box2d.b2WheelJoint.prototype, "InitVelocityConstraints", box2d.b2WheelJoint.prototype.InitVelocityConstraints),
    box2d.b2WheelJoint.prototype.InitVelocityConstraints.s_d = new box2d.b2Vec2(), box2d.b2WheelJoint.prototype.InitVelocityConstraints.s_P = new box2d.b2Vec2(),
    box2d.b2WheelJoint.prototype.SolveVelocityConstraints = function(o) {
        var t = this.m_invMassA,
            e = this.m_invMassB,
            r = this.m_invIA,
            i = this.m_invIB,
            b = o.velocities[this.m_indexA].v,
            n = o.velocities[this.m_indexA].w,
            p = o.velocities[this.m_indexB].v,
            s = o.velocities[this.m_indexB].w,
            a = box2d.b2Dot_V2_V2(this.m_ax, box2d.b2Sub_V2_V2(p, b, box2d.b2Vec2.s_t0)) + this.m_sBx * s - this.m_sAx * n;
        a = -this.m_springMass * (a + this.m_bias + this.m_gamma * this.m_springImpulse);
        this.m_springImpulse += a;
        var d = box2d.b2Mul_S_V2(a, this.m_ax, box2d.b2WheelJoint.prototype.SolveVelocityConstraints.s_P),
            l = a * this.m_sAx;
        a *= this.m_sBx;
        b.SelfMulSub(t, d), n -= r * l, p.SelfMulAdd(e, d), a = (s += i * a) - n - this.m_motorSpeed,
            a *= -this.m_motorMass, d = this.m_motorImpulse, l = o.step.dt * this.m_maxMotorTorque,
            this.m_motorImpulse = box2d.b2Clamp(this.m_motorImpulse + a, -l, l), n -= r * (a = this.m_motorImpulse - d),
            s += i * a, a = box2d.b2Dot_V2_V2(this.m_ay, box2d.b2Sub_V2_V2(p, b, box2d.b2Vec2.s_t0)) + this.m_sBy * s - this.m_sAy * n,
            a *= -this.m_mass, this.m_impulse += a, d = box2d.b2Mul_S_V2(a, this.m_ay, box2d.b2WheelJoint.prototype.SolveVelocityConstraints.s_P),
            l = a * this.m_sAy, a *= this.m_sBy, b.SelfMulSub(t, d), n -= r * l, p.SelfMulAdd(e, d),
            o.velocities[this.m_indexA].w = n, o.velocities[this.m_indexB].w = s + i * a;
    }, goog.exportProperty(box2d.b2WheelJoint.prototype, "SolveVelocityConstraints", box2d.b2WheelJoint.prototype.SolveVelocityConstraints),
    box2d.b2WheelJoint.prototype.SolveVelocityConstraints.s_P = new box2d.b2Vec2(),
    box2d.b2WheelJoint.prototype.SolvePositionConstraints = function(o) {
        var t = o.positions[this.m_indexA].c,
            e = o.positions[this.m_indexA].a,
            r = o.positions[this.m_indexB].c,
            i = o.positions[this.m_indexB].a,
            b = this.m_qA.SetAngle(e),
            n = this.m_qB.SetAngle(i);
        box2d.b2Sub_V2_V2(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA);
        var p = box2d.b2Mul_R_V2(b, this.m_lalcA, this.m_rA);
        box2d.b2Sub_V2_V2(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
        n = box2d.b2Mul_R_V2(n, this.m_lalcB, this.m_rB);
        var s = box2d.b2Add_V2_V2(box2d.b2Sub_V2_V2(r, t, box2d.b2Vec2.s_t0), box2d.b2Sub_V2_V2(n, p, box2d.b2Vec2.s_t1), box2d.b2WheelJoint.prototype.SolvePositionConstraints.s_d),
            a = (b = box2d.b2Mul_R_V2(b, this.m_localYAxisA, this.m_ay),
                p = box2d.b2Cross_V2_V2(box2d.b2Add_V2_V2(s, p, box2d.b2Vec2.s_t0), b), n = box2d.b2Cross_V2_V2(n, b),
                s = box2d.b2Dot_V2_V2(s, this.m_ay), 0 !== (a = this.m_invMassA + this.m_invMassB + this.m_invIA * this.m_sAy * this.m_sAy + this.m_invIB * this.m_sBy * this.m_sBy) ? -s / a : 0);
        b = box2d.b2Mul_S_V2(a, b, box2d.b2WheelJoint.prototype.SolvePositionConstraints.s_P),
            p *= a, n *= a;
        return t.SelfMulSub(this.m_invMassA, b), e -= this.m_invIA * p, r.SelfMulAdd(this.m_invMassB, b),
            i += this.m_invIB * n, o.positions[this.m_indexA].a = e, o.positions[this.m_indexB].a = i,
            box2d.b2Abs(s) <= box2d.b2_linearSlop;
    }, goog.exportProperty(box2d.b2WheelJoint.prototype, "SolvePositionConstraints", box2d.b2WheelJoint.prototype.SolvePositionConstraints),
    box2d.b2WheelJoint.prototype.SolvePositionConstraints.s_d = new box2d.b2Vec2(),
    box2d.b2WheelJoint.prototype.SolvePositionConstraints.s_P = new box2d.b2Vec2(),
    box2d.b2WheelJoint.prototype.GetDefinition = function(o) {
        return box2d.ENABLE_ASSERTS && box2d.b2Assert(!1), o;
    }, goog.exportProperty(box2d.b2WheelJoint.prototype, "GetDefinition", box2d.b2WheelJoint.prototype.GetDefinition),
    box2d.b2WheelJoint.prototype.GetAnchorA = function(o) {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, o);
    }, goog.exportProperty(box2d.b2WheelJoint.prototype, "GetAnchorA", box2d.b2WheelJoint.prototype.GetAnchorA),
    box2d.b2WheelJoint.prototype.GetAnchorB = function(o) {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, o);
    }, goog.exportProperty(box2d.b2WheelJoint.prototype, "GetAnchorB", box2d.b2WheelJoint.prototype.GetAnchorB),
    box2d.b2WheelJoint.prototype.GetReactionForce = function(o, t) {
        return t.x = o * (this.m_impulse * this.m_ay.x + this.m_springImpulse * this.m_ax.x),
            t.y = o * (this.m_impulse * this.m_ay.y + this.m_springImpulse * this.m_ax.y), t;
    }, goog.exportProperty(box2d.b2WheelJoint.prototype, "GetReactionForce", box2d.b2WheelJoint.prototype.GetReactionForce),
    box2d.b2WheelJoint.prototype.GetReactionTorque = function(o) {
        return o * this.m_motorImpulse;
    }, goog.exportProperty(box2d.b2WheelJoint.prototype, "GetReactionTorque", box2d.b2WheelJoint.prototype.GetReactionTorque),
    box2d.b2WheelJoint.prototype.GetLocalAnchorA = function(o) {
        return o.Copy(this.m_localAnchorA);
    }, goog.exportProperty(box2d.b2WheelJoint.prototype, "GetLocalAnchorA", box2d.b2WheelJoint.prototype.GetLocalAnchorA),
    box2d.b2WheelJoint.prototype.GetLocalAnchorB = function(o) {
        return o.Copy(this.m_localAnchorB);
    }, goog.exportProperty(box2d.b2WheelJoint.prototype, "GetLocalAnchorB", box2d.b2WheelJoint.prototype.GetLocalAnchorB),
    box2d.b2WheelJoint.prototype.GetLocalAxisA = function(o) {
        return o.Copy(this.m_localXAxisA);
    }, goog.exportProperty(box2d.b2WheelJoint.prototype, "GetLocalAxisA", box2d.b2WheelJoint.prototype.GetLocalAxisA),
    box2d.b2WheelJoint.prototype.GetJointTranslation = function() {
        return this.GetPrismaticJointTranslation();
    }, goog.exportProperty(box2d.b2WheelJoint.prototype, "GetJointTranslation", box2d.b2WheelJoint.prototype.GetJointTranslation),
    box2d.b2WheelJoint.prototype.GetJointSpeed = function() {
        return this.GetRevoluteJointSpeed();
    }, goog.exportProperty(box2d.b2WheelJoint.prototype, "GetJointSpeed", box2d.b2WheelJoint.prototype.GetJointSpeed),
    box2d.b2WheelJoint.prototype.GetPrismaticJointTranslation = function() {
        var o = this.m_bodyA,
            t = this.m_bodyB,
            e = o.GetWorldPoint(this.m_localAnchorA, new box2d.b2Vec2());
        t = t.GetWorldPoint(this.m_localAnchorB, new box2d.b2Vec2()), e = box2d.b2Sub_V2_V2(t, e, new box2d.b2Vec2()),
            o = o.GetWorldVector(this.m_localXAxisA, new box2d.b2Vec2());
        return box2d.b2Dot_V2_V2(e, o);
    }, goog.exportProperty(box2d.b2WheelJoint.prototype, "GetPrismaticJointTranslation", box2d.b2WheelJoint.prototype.GetPrismaticJointTranslation),
    box2d.b2WheelJoint.prototype.GetPrismaticJointSpeed = function() {
        var o = this.m_bodyA,
            t = this.m_bodyB;
        box2d.b2Sub_V2_V2(this.m_localAnchorA, o.m_sweep.localCenter, this.m_lalcA);
        var e = box2d.b2Mul_R_V2(o.m_xf.q, this.m_lalcA, this.m_rA);
        box2d.b2Sub_V2_V2(this.m_localAnchorB, t.m_sweep.localCenter, this.m_lalcB);
        var r = box2d.b2Mul_R_V2(t.m_xf.q, this.m_lalcB, this.m_rB),
            i = box2d.b2Add_V2_V2(o.m_sweep.c, e, box2d.b2Vec2.s_t0),
            b = box2d.b2Add_V2_V2(t.m_sweep.c, r, box2d.b2Vec2.s_t1),
            n = (i = box2d.b2Sub_V2_V2(b, i, box2d.b2Vec2.s_t2),
                b = o.GetWorldVector(this.m_localXAxisA, new box2d.b2Vec2()), o.m_linearVelocity),
            p = t.m_linearVelocity;
        o = o.m_angularVelocity, t = t.m_angularVelocity;
        return box2d.b2Dot_V2_V2(i, box2d.b2Cross_S_V2(o, b, box2d.b2Vec2.s_t0)) + box2d.b2Dot_V2_V2(b, box2d.b2Sub_V2_V2(box2d.b2AddCross_V2_S_V2(p, t, r, box2d.b2Vec2.s_t0), box2d.b2AddCross_V2_S_V2(n, o, e, box2d.b2Vec2.s_t1), box2d.b2Vec2.s_t0));
    }, goog.exportProperty(box2d.b2WheelJoint.prototype, "GetPrismaticJointSpeed", box2d.b2WheelJoint.prototype.GetPrismaticJointSpeed),
    box2d.b2WheelJoint.prototype.GetRevoluteJointAngle = function() {
        return this.m_bodyB.m_sweep.a - this.m_bodyA.m_sweep.a;
    }, goog.exportProperty(box2d.b2WheelJoint.prototype, "GetRevoluteJointAngle", box2d.b2WheelJoint.prototype.GetRevoluteJointAngle),
    box2d.b2WheelJoint.prototype.GetRevoluteJointSpeed = function() {
        return this.m_bodyB.m_angularVelocity - this.m_bodyA.m_angularVelocity;
    }, goog.exportProperty(box2d.b2WheelJoint.prototype, "GetRevoluteJointSpeed", box2d.b2WheelJoint.prototype.GetRevoluteJointSpeed),
    box2d.b2WheelJoint.prototype.IsMotorEnabled = function() {
        return this.m_enableMotor;
    }, goog.exportProperty(box2d.b2WheelJoint.prototype, "IsMotorEnabled", box2d.b2WheelJoint.prototype.IsMotorEnabled),
    box2d.b2WheelJoint.prototype.EnableMotor = function(o) {
        this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), this.m_enableMotor = o;
    }, goog.exportProperty(box2d.b2WheelJoint.prototype, "EnableMotor", box2d.b2WheelJoint.prototype.EnableMotor),
    box2d.b2WheelJoint.prototype.SetMotorSpeed = function(o) {
        this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), this.m_motorSpeed = o;
    }, goog.exportProperty(box2d.b2WheelJoint.prototype, "SetMotorSpeed", box2d.b2WheelJoint.prototype.SetMotorSpeed),
    box2d.b2WheelJoint.prototype.SetMaxMotorTorque = function(o) {
        this.m_bodyA.SetAwake(!0), this.m_bodyB.SetAwake(!0), this.m_maxMotorTorque = o;
    }, goog.exportProperty(box2d.b2WheelJoint.prototype, "SetMaxMotorTorque", box2d.b2WheelJoint.prototype.SetMaxMotorTorque),
    box2d.b2WheelJoint.prototype.GetMotorTorque = function(o) {
        return o * this.m_motorImpulse;
    }, goog.exportProperty(box2d.b2WheelJoint.prototype, "GetMotorTorque", box2d.b2WheelJoint.prototype.GetMotorTorque),
    box2d.b2WheelJoint.prototype.Dump = function() {
        if (box2d.DEBUG) {
            var o = this.m_bodyA.m_islandIndex,
                t = this.m_bodyB.m_islandIndex;
            box2d.b2Log("  /*box2d.b2WheelJointDef*/ var jd = new box2d.b2WheelJointDef();\n"),
                box2d.b2Log("  jd.bodyA = bodies[%d];\n", o), box2d.b2Log("  jd.bodyB = bodies[%d];\n", t),
                box2d.b2Log("  jd.collideConnected = %s;\n", this.m_collideConnected ? "true" : "false"),
                box2d.b2Log("  jd.localAnchorA.Set(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y),
                box2d.b2Log("  jd.localAnchorB.Set(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y),
                box2d.b2Log("  jd.localAxisA.Set(%.15f, %.15f);\n", this.m_localXAxisA.x, this.m_localXAxisA.y),
                box2d.b2Log("  jd.enableMotor = %s;\n", this.m_enableMotor ? "true" : "false"),
                box2d.b2Log("  jd.motorSpeed = %.15f;\n", this.m_motorSpeed), box2d.b2Log("  jd.maxMotorTorque = %.15f;\n", this.m_maxMotorTorque),
                box2d.b2Log("  jd.frequencyHz = %.15f;\n", this.m_frequencyHz), box2d.b2Log("  jd.dampingRatio = %.15f;\n", this.m_dampingRatio),
                box2d.b2Log("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index);
        }
    }, goog.exportProperty(box2d.b2WheelJoint.prototype, "Dump", box2d.b2WheelJoint.prototype.Dump),
    box2d.b2Particle = {}, box2d.b2ParticleFlag = {
        b2_waterParticle: 0,
        b2_zombieParticle: 2,
        b2_wallParticle: 4,
        b2_springParticle: 8,
        b2_elasticParticle: 16,
        b2_viscousParticle: 32,
        b2_powderParticle: 64,
        b2_tensileParticle: 128,
        b2_colorMixingParticle: 256,
        b2_destructionListenerParticle: 512,
        b2_barrierParticle: 1024,
        b2_staticPressureParticle: 2048,
        b2_reactiveParticle: 4096,
        b2_repulsiveParticle: 8192,
        b2_fixtureContactListenerParticle: 16384,
        b2_particleContactListenerParticle: 32768,
        b2_fixtureContactFilterParticle: 65536,
        b2_particleContactFilterParticle: 131072
    }, goog.exportSymbol("box2d.b2ParticleFlag", box2d.b2ParticleFlag), goog.exportProperty(box2d.b2ParticleFlag, "b2_waterParticle", box2d.b2ParticleFlag.b2_waterParticle),
    goog.exportProperty(box2d.b2ParticleFlag, "b2_zombieParticle", box2d.b2ParticleFlag.b2_zombieParticle),
    goog.exportProperty(box2d.b2ParticleFlag, "b2_wallParticle", box2d.b2ParticleFlag.b2_wallParticle),
    goog.exportProperty(box2d.b2ParticleFlag, "b2_springParticle", box2d.b2ParticleFlag.b2_springParticle),
    goog.exportProperty(box2d.b2ParticleFlag, "b2_elasticParticle", box2d.b2ParticleFlag.b2_elasticParticle),
    goog.exportProperty(box2d.b2ParticleFlag, "b2_viscousParticle", box2d.b2ParticleFlag.b2_viscousParticle),
    goog.exportProperty(box2d.b2ParticleFlag, "b2_powderParticle", box2d.b2ParticleFlag.b2_powderParticle),
    goog.exportProperty(box2d.b2ParticleFlag, "b2_tensileParticle", box2d.b2ParticleFlag.b2_tensileParticle),
    goog.exportProperty(box2d.b2ParticleFlag, "b2_colorMixingParticle", box2d.b2ParticleFlag.b2_colorMixingParticle),
    goog.exportProperty(box2d.b2ParticleFlag, "b2_destructionListenerParticle", box2d.b2ParticleFlag.b2_destructionListenerParticle),
    goog.exportProperty(box2d.b2ParticleFlag, "b2_barrierParticle", box2d.b2ParticleFlag.b2_barrierParticle),
    goog.exportProperty(box2d.b2ParticleFlag, "b2_staticPressureParticle", box2d.b2ParticleFlag.b2_staticPressureParticle),
    goog.exportProperty(box2d.b2ParticleFlag, "b2_reactiveParticle", box2d.b2ParticleFlag.b2_reactiveParticle),
    goog.exportProperty(box2d.b2ParticleFlag, "b2_repulsiveParticle", box2d.b2ParticleFlag.b2_repulsiveParticle),
    goog.exportProperty(box2d.b2ParticleFlag, "b2_fixtureContactListenerParticle", box2d.b2ParticleFlag.b2_fixtureContactListenerParticle),
    goog.exportProperty(box2d.b2ParticleFlag, "b2_particleContactListenerParticle", box2d.b2ParticleFlag.b2_particleContactListenerParticle),
    goog.exportProperty(box2d.b2ParticleFlag, "b2_fixtureContactFilterParticle", box2d.b2ParticleFlag.b2_fixtureContactFilterParticle),
    goog.exportProperty(box2d.b2ParticleFlag, "b2_particleContactFilterParticle", box2d.b2ParticleFlag.b2_particleContactFilterParticle),
    box2d.b2ParticleColor = function(o, t, e, r) {
        if (0 !== arguments.length)
            if (o instanceof box2d.b2Color) this.r = 0 | 255 * o.r,
                this.g = 0 | 255 * o.g, this.b = 0 | 255 * o.b, this.a = 0 | 255 * o.a;
            else {
                if (!(3 <= arguments.length)) throw Error();
                this.r = 0 | o || 0, this.g = 0 | t || 0, this.b = 0 | e || 0, this.a = 0 | r || 0;
            }
    }, goog.exportSymbol("box2d.b2ParticleColor", box2d.b2ParticleColor), box2d.b2ParticleColor.prototype.r = 0,
    goog.exportProperty(box2d.b2ParticleColor.prototype, "r", box2d.b2ParticleColor.prototype.r),
    box2d.b2ParticleColor.prototype.g = 0, goog.exportProperty(box2d.b2ParticleColor.prototype, "g", box2d.b2ParticleColor.prototype.g),
    box2d.b2ParticleColor.prototype.b = 0, goog.exportProperty(box2d.b2ParticleColor.prototype, "b", box2d.b2ParticleColor.prototype.b),
    box2d.b2ParticleColor.prototype.a = 0, goog.exportProperty(box2d.b2ParticleColor.prototype, "a", box2d.b2ParticleColor.prototype.a),
    box2d.b2ParticleColor.prototype.IsZero = function() {
        return 0 === this.r && 0 === this.g && 0 === this.b && 0 === this.a;
    }, goog.exportProperty(box2d.b2ParticleColor.prototype, "IsZero", box2d.b2ParticleColor.prototype.IsZero),
    box2d.b2ParticleColor.prototype.GetColor = function(o) {
        return o.r = this.r / 255, o.g = this.g / 255, o.b = this.b / 255, o.a = this.a / 255,
            o;
    }, goog.exportProperty(box2d.b2ParticleColor.prototype, "GetColor", box2d.b2ParticleColor.prototype.GetColor),
    box2d.b2ParticleColor.prototype.Set = function(o, t, e, r) {
        if (o instanceof box2d.b2Color) this.SetColor(o);
        else {
            if (!(3 <= arguments.length)) throw Error();
            this.SetRGBA(o || 0, t || 0, e || 0, r);
        }
    }, goog.exportProperty(box2d.b2ParticleColor.prototype, "Set", box2d.b2ParticleColor.prototype.Set),
    box2d.b2ParticleColor.prototype.SetRGBA = function(o, t, e, r) {
        this.r = o, this.g = t, this.b = e, this.a = "number" == typeof r ? r : 255;
    }, goog.exportProperty(box2d.b2ParticleColor.prototype, "SetRGBA", box2d.b2ParticleColor.prototype.SetRGBA),
    box2d.b2ParticleColor.prototype.SetColor = function(o) {
        this.r = 255 * o.r, this.g = 255 * o.g, this.b = 255 * o.b, this.a = 255 * o.a;
    }, goog.exportProperty(box2d.b2ParticleColor.prototype, "SetColor", box2d.b2ParticleColor.prototype.SetColor),
    box2d.b2ParticleColor.prototype.Copy = function(o) {
        return this.r = o.r, this.g = o.g, this.b = o.b, this.a = o.a, this;
    }, goog.exportProperty(box2d.b2ParticleColor.prototype, "Copy", box2d.b2ParticleColor.prototype.Copy),
    box2d.b2ParticleColor.prototype.Clone = function() {
        return new box2d.b2ParticleColor(this.r, this.g, this.b, this.a);
    }, box2d.b2ParticleColor.prototype.SelfMul_0_1 = function(o) {
        return this.r *= o, this.g *= o, this.b *= o, this.a *= o, this;
    }, goog.exportProperty(box2d.b2ParticleColor.prototype, "SelfMul_0_1", box2d.b2ParticleColor.prototype.SelfMul_0_1),
    box2d.b2ParticleColor.prototype.SelfMul_0_255 = function(o) {
        return o += 1, this.r = this.r * o >> box2d.b2ParticleColor.k_bitsPerComponent,
            this.g = this.g * o >> box2d.b2ParticleColor.k_bitsPerComponent, this.b = this.b * o >> box2d.b2ParticleColor.k_bitsPerComponent,
            this.a = this.a * o >> box2d.b2ParticleColor.k_bitsPerComponent, this;
    }, goog.exportProperty(box2d.b2ParticleColor.prototype, "SelfMul_0_255", box2d.b2ParticleColor.prototype.SelfMul_0_255),
    box2d.b2ParticleColor.prototype.Mul_0_1 = function(o, t) {
        return t.Copy(this).SelfMul_0_1(o);
    }, goog.exportProperty(box2d.b2ParticleColor.prototype, "Mul_0_1", box2d.b2ParticleColor.prototype.Mul_0_1),
    box2d.b2ParticleColor.prototype.Mul_0_255 = function(o, t) {
        return t.Copy(this).SelfMul_0_255(o);
    }, goog.exportProperty(box2d.b2ParticleColor.prototype, "Mul_0_255", box2d.b2ParticleColor.prototype.Mul_0_255),
    box2d.b2ParticleColor.prototype.SelfAdd = function(o) {
        return this.r += o.r, this.g += o.g, this.b += o.b, this.a += o.a, this;
    }, goog.exportProperty(box2d.b2ParticleColor.prototype, "SelfAdd", box2d.b2ParticleColor.prototype.SelfAdd),
    box2d.b2ParticleColor.prototype.Add = function(o, t) {
        return t.r = this.r + o.r, t.g = this.g + o.g, t.b = this.b + o.b, t.a = this.a + o.a,
            t;
    }, goog.exportProperty(box2d.b2ParticleColor.prototype, "Add", box2d.b2ParticleColor.prototype.Add),
    box2d.b2ParticleColor.prototype.SelfSub = function(o) {
        return this.r -= o.r, this.g -= o.g, this.b -= o.b, this.a -= o.a, this;
    }, goog.exportProperty(box2d.b2ParticleColor.prototype, "SelfSub", box2d.b2ParticleColor.prototype.SelfSub),
    box2d.b2ParticleColor.prototype.Sub = function(o, t) {
        return t.r = this.r - o.r, t.g = this.g - o.g, t.b = this.b - o.b, t.a = this.a - o.a,
            t;
    }, goog.exportProperty(box2d.b2ParticleColor.prototype, "Sub", box2d.b2ParticleColor.prototype.Sub),
    box2d.b2ParticleColor.prototype.IsEqual = function(o) {
        return this.r === o.r && this.g === o.g && this.b === o.b && this.a === o.a;
    }, goog.exportProperty(box2d.b2ParticleColor.prototype, "IsEqual", box2d.b2ParticleColor.prototype.IsEqual),
    box2d.b2ParticleColor.prototype.Mix = function(o, t) {
        box2d.b2ParticleColor.MixColors(this, o, t);
    }, goog.exportProperty(box2d.b2ParticleColor.prototype, "Mix", box2d.b2ParticleColor.prototype.Mix),
    box2d.b2ParticleColor.MixColors = function(o, t, e) {
        var r = e * (t.r - o.r) >> box2d.b2ParticleColor.k_bitsPerComponent,
            i = e * (t.g - o.g) >> box2d.b2ParticleColor.k_bitsPerComponent,
            b = e * (t.b - o.b) >> box2d.b2ParticleColor.k_bitsPerComponent;
        e = e * (t.a - o.a) >> box2d.b2ParticleColor.k_bitsPerComponent, o.r += r, o.g += i,
            o.b += b, o.a += e, t.r -= r, t.g -= i, t.b -= b, t.a -= e;
    }, goog.exportProperty(box2d.b2ParticleColor, "MixColors", box2d.b2ParticleColor.MixColors),
    box2d.B2PARTICLECOLOR_BITS_PER_COMPONENT = 8, box2d.B2PARTICLECOLOR_MAX_VALUE = (1 << box2d.B2PARTICLECOLOR_BITS_PER_COMPONENT) - 1,
    box2d.b2ParticleColor.k_maxValue = +box2d.B2PARTICLECOLOR_MAX_VALUE, goog.exportProperty(box2d.b2ParticleColor, "k_maxValue", box2d.b2ParticleColor.k_maxValue),
    box2d.b2ParticleColor.k_inverseMaxValue = 1 / +box2d.B2PARTICLECOLOR_MAX_VALUE,
    goog.exportProperty(box2d.b2ParticleColor, "k_inverseMaxValue", box2d.b2ParticleColor.k_inverseMaxValue),
    box2d.b2ParticleColor.k_bitsPerComponent = box2d.B2PARTICLECOLOR_BITS_PER_COMPONENT,
    goog.exportProperty(box2d.b2ParticleColor, "k_bitsPerComponent", box2d.b2ParticleColor.k_bitsPerComponent),
    box2d.b2ParticleColor_zero = new box2d.b2ParticleColor(), box2d.b2ParticleDef = function() {
        this.position = box2d.b2Vec2_zero.Clone(), this.velocity = box2d.b2Vec2_zero.Clone(),
            this.color = box2d.b2ParticleColor_zero.Clone();
    }, goog.exportSymbol("box2d.b2ParticleDef", box2d.b2ParticleDef), box2d.b2ParticleDef.prototype.flags = 0,
    goog.exportProperty(box2d.b2ParticleDef.prototype, "flags", box2d.b2ParticleDef.prototype.flags),
    box2d.b2ParticleDef.prototype.position = null, goog.exportProperty(box2d.b2ParticleDef.prototype, "position", box2d.b2ParticleDef.prototype.position),
    box2d.b2ParticleDef.prototype.velocity = null, goog.exportProperty(box2d.b2ParticleDef.prototype, "velocity", box2d.b2ParticleDef.prototype.velocity),
    box2d.b2ParticleDef.prototype.color = null, goog.exportProperty(box2d.b2ParticleDef.prototype, "color", box2d.b2ParticleDef.prototype.color),
    box2d.b2ParticleDef.prototype.lifetime = 0, goog.exportProperty(box2d.b2ParticleDef.prototype, "lifetime", box2d.b2ParticleDef.prototype.lifetime),
    box2d.b2ParticleDef.prototype.userData = null, goog.exportProperty(box2d.b2ParticleDef.prototype, "userData", box2d.b2ParticleDef.prototype.userData),
    box2d.b2ParticleDef.prototype.group = null, goog.exportProperty(box2d.b2ParticleDef.prototype, "group", box2d.b2ParticleDef.prototype.group),
    box2d.b2CalculateParticleIterations = function(o, t, e) {
        return box2d.b2Clamp(Math.ceil(Math.sqrt(o / (.01 * t)) * e), 1, 8);
    }, goog.exportSymbol("box2d.b2CalculateParticleIterations", box2d.b2CalculateParticleIterations),
    box2d.b2ParticleHandle = function() {}, goog.exportSymbol("box2d.b2ParticleHandle", box2d.b2ParticleHandle),
    box2d.b2ParticleHandle.prototype.m_index = box2d.b2_invalidParticleIndex, box2d.b2ParticleHandle.prototype.GetIndex = function() {
        return this.m_index;
    }, goog.exportProperty(box2d.b2ParticleHandle.prototype, "GetIndex", box2d.b2ParticleHandle.prototype.GetIndex),
    box2d.b2ParticleHandle.prototype.SetIndex = function(o) {
        this.m_index = o;
    }, box2d.b2ParticleGroupFlag = {
        b2_solidParticleGroup: 1,
        b2_rigidParticleGroup: 2,
        b2_particleGroupCanBeEmpty: 4,
        b2_particleGroupWillBeDestroyed: 8,
        b2_particleGroupNeedsUpdateDepth: 16
    }, goog.exportSymbol("box2d.b2ParticleGroupFlag", box2d.b2ParticleGroupFlag), goog.exportProperty(box2d.b2ParticleGroupFlag, "b2_solidParticleGroup", box2d.b2ParticleGroupFlag.b2_solidParticleGroup),
    goog.exportProperty(box2d.b2ParticleGroupFlag, "b2_rigidParticleGroup", box2d.b2ParticleGroupFlag.b2_rigidParticleGroup),
    goog.exportProperty(box2d.b2ParticleGroupFlag, "b2_particleGroupCanBeEmpty", box2d.b2ParticleGroupFlag.b2_particleGroupCanBeEmpty),
    goog.exportProperty(box2d.b2ParticleGroupFlag, "b2_particleGroupWillBeDestroyed", box2d.b2ParticleGroupFlag.b2_particleGroupWillBeDestroyed),
    goog.exportProperty(box2d.b2ParticleGroupFlag, "b2_particleGroupNeedsUpdateDepth", box2d.b2ParticleGroupFlag.b2_particleGroupNeedsUpdateDepth),
    box2d.b2ParticleGroupFlag.b2_particleGroupInternalMask = box2d.b2ParticleGroupFlag.b2_particleGroupWillBeDestroyed | box2d.b2ParticleGroupFlag.b2_particleGroupNeedsUpdateDepth,
    box2d.b2ParticleGroupDef = function() {
        this.position = box2d.b2Vec2_zero.Clone(), this.linearVelocity = box2d.b2Vec2_zero.Clone(),
            this.color = box2d.b2ParticleColor_zero.Clone();
    }, goog.exportSymbol("box2d.b2ParticleGroupDef", box2d.b2ParticleGroupDef), box2d.b2ParticleGroupDef.prototype.flags = 0,
    goog.exportProperty(box2d.b2ParticleGroupDef.prototype, "flags", box2d.b2ParticleGroupDef.prototype.flags),
    box2d.b2ParticleGroupDef.prototype.groupFlags = 0, goog.exportProperty(box2d.b2ParticleGroupDef.prototype, "groupFlags", box2d.b2ParticleGroupDef.prototype.groupFlags),
    box2d.b2ParticleGroupDef.prototype.position = null, goog.exportProperty(box2d.b2ParticleGroupDef.prototype, "position", box2d.b2ParticleGroupDef.prototype.position),
    box2d.b2ParticleGroupDef.prototype.angle = 0, goog.exportProperty(box2d.b2ParticleGroupDef.prototype, "angle", box2d.b2ParticleGroupDef.prototype.angle),
    box2d.b2ParticleGroupDef.prototype.linearVelocity = null, goog.exportProperty(box2d.b2ParticleGroupDef.prototype, "linearVelocity", box2d.b2ParticleGroupDef.prototype.linearVelocity),
    box2d.b2ParticleGroupDef.prototype.angularVelocity = 0, goog.exportProperty(box2d.b2ParticleGroupDef.prototype, "angularVelocity", box2d.b2ParticleGroupDef.prototype.angularVelocity),
    box2d.b2ParticleGroupDef.prototype.color = null, goog.exportProperty(box2d.b2ParticleGroupDef.prototype, "color", box2d.b2ParticleGroupDef.prototype.color),
    box2d.b2ParticleGroupDef.prototype.strength = 1, goog.exportProperty(box2d.b2ParticleGroupDef.prototype, "strength", box2d.b2ParticleGroupDef.prototype.strength),
    box2d.b2ParticleGroupDef.prototype.shape = null, goog.exportProperty(box2d.b2ParticleGroupDef.prototype, "shape", box2d.b2ParticleGroupDef.prototype.shape),
    box2d.b2ParticleGroupDef.prototype.shapes = null, goog.exportProperty(box2d.b2ParticleGroupDef.prototype, "shapes", box2d.b2ParticleGroupDef.prototype.shapes),
    box2d.b2ParticleGroupDef.prototype.shapeCount = 0, goog.exportProperty(box2d.b2ParticleGroupDef.prototype, "shapeCount", box2d.b2ParticleGroupDef.prototype.shapeCount),
    box2d.b2ParticleGroupDef.prototype.stride = 0, goog.exportProperty(box2d.b2ParticleGroupDef.prototype, "stride", box2d.b2ParticleGroupDef.prototype.stride),
    box2d.b2ParticleGroupDef.prototype.particleCount = 0, goog.exportProperty(box2d.b2ParticleGroupDef.prototype, "particleCount", box2d.b2ParticleGroupDef.prototype.particleCount),
    box2d.b2ParticleGroupDef.prototype.positionData = null, goog.exportProperty(box2d.b2ParticleGroupDef.prototype, "positionData", box2d.b2ParticleGroupDef.prototype.positionData),
    box2d.b2ParticleGroupDef.prototype.lifetime = 0, goog.exportProperty(box2d.b2ParticleGroupDef.prototype, "lifetime", box2d.b2ParticleGroupDef.prototype.lifetime),
    box2d.b2ParticleGroupDef.prototype.userData = null, goog.exportProperty(box2d.b2ParticleGroupDef.prototype, "userData", box2d.b2ParticleGroupDef.prototype.userData),
    box2d.b2ParticleGroupDef.prototype.group = null, goog.exportProperty(box2d.b2ParticleGroupDef.prototype, "group", box2d.b2ParticleGroupDef.prototype.group),
    box2d.b2ParticleGroup = function() {
        this.m_center = new box2d.b2Vec2(), this.m_linearVelocity = new box2d.b2Vec2(),
            this.m_transform = new box2d.b2Transform(), this.m_transform.SetIdentity();
    }, goog.exportSymbol("box2d.b2ParticleGroup", box2d.b2ParticleGroup), box2d.b2ParticleGroup.prototype.m_system = null,
    box2d.b2ParticleGroup.prototype.m_firstIndex = 0, box2d.b2ParticleGroup.prototype.m_lastIndex = 0,
    box2d.b2ParticleGroup.prototype.m_groupFlags = 0, box2d.b2ParticleGroup.prototype.m_strength = 1,
    box2d.b2ParticleGroup.prototype.m_prev = null, box2d.b2ParticleGroup.prototype.m_next = null,
    box2d.b2ParticleGroup.prototype.m_timestamp = -1, box2d.b2ParticleGroup.prototype.m_mass = 0,
    box2d.b2ParticleGroup.prototype.m_inertia = 0, box2d.b2ParticleGroup.prototype.m_center = null,
    box2d.b2ParticleGroup.prototype.m_linearVelocity = null, box2d.b2ParticleGroup.prototype.m_angularVelocity = 0,
    box2d.b2ParticleGroup.prototype.m_transform = null, box2d.b2ParticleGroup.prototype.m_userData = null,
    box2d.b2ParticleGroup.prototype.GetNext = function() {
        return this.m_next;
    }, goog.exportProperty(box2d.b2ParticleGroup.prototype, "GetNext", box2d.b2ParticleGroup.prototype.GetNext),
    box2d.b2ParticleGroup.prototype.GetParticleSystem = function() {
        return this.m_system;
    }, goog.exportProperty(box2d.b2ParticleGroup.prototype, "GetParticleSystem", box2d.b2ParticleGroup.prototype.GetParticleSystem),
    box2d.b2ParticleGroup.prototype.GetParticleCount = function() {
        return this.m_lastIndex - this.m_firstIndex;
    }, goog.exportProperty(box2d.b2ParticleGroup.prototype, "GetParticleCount", box2d.b2ParticleGroup.prototype.GetParticleCount),
    box2d.b2ParticleGroup.prototype.GetBufferIndex = function() {
        return this.m_firstIndex;
    }, goog.exportProperty(box2d.b2ParticleGroup.prototype, "GetBufferIndex", box2d.b2ParticleGroup.prototype.GetBufferIndex),
    box2d.b2ParticleGroup.prototype.ContainsParticle = function(o) {
        return this.m_firstIndex <= o && o < this.m_lastIndex;
    }, box2d.b2ParticleGroup.prototype.GetAllParticleFlags = function() {
        for (var o = 0, t = this.m_firstIndex; t < this.m_lastIndex; t++) o |= this.m_system.m_flagsBuffer.data[t];
        return o;
    }, goog.exportProperty(box2d.b2ParticleGroup.prototype, "GetAllParticleFlags", box2d.b2ParticleGroup.prototype.GetAllParticleFlags),
    box2d.b2ParticleGroup.prototype.GetGroupFlags = function() {
        return this.m_groupFlags;
    }, goog.exportProperty(box2d.b2ParticleGroup.prototype, "GetGroupFlags", box2d.b2ParticleGroup.prototype.GetGroupFlags),
    box2d.b2ParticleGroup.prototype.SetGroupFlags = function(o) {
        box2d.b2Assert(0 == (o & box2d.b2ParticleGroupFlag.b2_particleGroupInternalMask)),
            o |= this.m_groupFlags & box2d.b2ParticleGroupFlag.b2_particleGroupInternalMask,
            this.m_system.SetGroupFlags(this, o);
    }, goog.exportProperty(box2d.b2ParticleGroup.prototype, "SetGroupFlags", box2d.b2ParticleGroup.prototype.SetGroupFlags),
    box2d.b2ParticleGroup.prototype.GetMass = function() {
        return this.UpdateStatistics(), this.m_mass;
    }, goog.exportProperty(box2d.b2ParticleGroup.prototype, "GetMass", box2d.b2ParticleGroup.prototype.GetMass),
    box2d.b2ParticleGroup.prototype.GetInertia = function() {
        return this.UpdateStatistics(), this.m_inertia;
    }, goog.exportProperty(box2d.b2ParticleGroup.prototype, "GetInertia", box2d.b2ParticleGroup.prototype.GetInertia),
    box2d.b2ParticleGroup.prototype.GetCenter = function() {
        return this.UpdateStatistics(), this.m_center;
    }, goog.exportProperty(box2d.b2ParticleGroup.prototype, "GetCenter", box2d.b2ParticleGroup.prototype.GetCenter),
    box2d.b2ParticleGroup.prototype.GetLinearVelocity = function() {
        return this.UpdateStatistics(), this.m_linearVelocity;
    }, goog.exportProperty(box2d.b2ParticleGroup.prototype, "GetLinearVelocity", box2d.b2ParticleGroup.prototype.GetLinearVelocity),
    box2d.b2ParticleGroup.prototype.GetAngularVelocity = function() {
        return this.UpdateStatistics(), this.m_angularVelocity;
    }, goog.exportProperty(box2d.b2ParticleGroup.prototype, "GetAngularVelocity", box2d.b2ParticleGroup.prototype.GetAngularVelocity),
    box2d.b2ParticleGroup.prototype.GetTransform = function() {
        return this.m_transform;
    }, goog.exportProperty(box2d.b2ParticleGroup.prototype, "GetTransform", box2d.b2ParticleGroup.prototype.GetTransform),
    box2d.b2ParticleGroup.prototype.GetPosition = function() {
        return this.m_transform.p;
    }, goog.exportProperty(box2d.b2ParticleGroup.prototype, "GetPosition", box2d.b2ParticleGroup.prototype.GetPosition),
    box2d.b2ParticleGroup.prototype.GetAngle = function() {
        return this.m_transform.q.GetAngle();
    }, goog.exportProperty(box2d.b2ParticleGroup.prototype, "GetAngle", box2d.b2ParticleGroup.prototype.GetAngle),
    box2d.b2ParticleGroup.prototype.GetLinearVelocityFromWorldPoint = function(o, t) {
        var e = box2d.b2ParticleGroup.prototype.GetLinearVelocityFromWorldPoint.s_t0;
        return this.UpdateStatistics(), box2d.b2AddCross_V2_S_V2(this.m_linearVelocity, this.m_angularVelocity, box2d.b2Sub_V2_V2(o, this.m_center, e), t);
    }, goog.exportProperty(box2d.b2ParticleGroup.prototype, "GetLinearVelocityFromWorldPoint", box2d.b2ParticleGroup.prototype.GetLinearVelocityFromWorldPoint),
    box2d.b2ParticleGroup.prototype.GetLinearVelocityFromWorldPoint.s_t0 = new box2d.b2Vec2(),
    box2d.b2ParticleGroup.prototype.GetUserData = function() {
        return this.m_userData;
    }, goog.exportProperty(box2d.b2ParticleGroup.prototype, "GetUserData", box2d.b2ParticleGroup.prototype.GetUserData),
    box2d.b2ParticleGroup.prototype.SetUserData = function(o) {
        this.m_userData = o;
    }, goog.exportProperty(box2d.b2ParticleGroup.prototype, "SetUserData", box2d.b2ParticleGroup.prototype.SetUserData),
    box2d.b2ParticleGroup.prototype.ApplyForce = function(o) {
        this.m_system.ApplyForce(this.m_firstIndex, this.m_lastIndex, o);
    }, goog.exportProperty(box2d.b2ParticleGroup.prototype, "ApplyForce", box2d.b2ParticleGroup.prototype.ApplyForce),
    box2d.b2ParticleGroup.prototype.ApplyLinearImpulse = function(o) {
        this.m_system.ApplyLinearImpulse(this.m_firstIndex, this.m_lastIndex, o);
    }, goog.exportProperty(box2d.b2ParticleGroup.prototype, "ApplyLinearImpulse", box2d.b2ParticleGroup.prototype.ApplyLinearImpulse),
    box2d.b2ParticleGroup.prototype.DestroyParticles = function(o) {
        if (box2d.b2Assert(!1 === this.m_system.m_world.IsLocked()), !this.m_system.m_world.IsLocked())
            for (var t = this.m_firstIndex; t < this.m_lastIndex; t++) this.m_system.DestroyParticle(t, o);
    }, goog.exportProperty(box2d.b2ParticleGroup.prototype, "DestroyParticles", box2d.b2ParticleGroup.prototype.DestroyParticles),
    box2d.b2ParticleGroup.prototype.UpdateStatistics = function() {
        var o = new box2d.b2Vec2(),
            t = new box2d.b2Vec2();
        if (this.m_timestamp != this.m_system.m_timestamp) {
            var e = this.m_system.GetParticleMass();
            this.m_mass = e * (this.m_lastIndex - this.m_firstIndex), this.m_center.SetZero(),
                this.m_linearVelocity.SetZero();
            for (var r = this.m_firstIndex; r < this.m_lastIndex; r++) this.m_center.SelfMulAdd(e, this.m_system.m_positionBuffer.data[r]),
                this.m_linearVelocity.SelfMulAdd(e, this.m_system.m_velocityBuffer.data[r]);
            for (0 < this.m_mass && (r = 1 / this.m_mass, this.m_center.SelfMul(r), this.m_linearVelocity.SelfMul(r)),
                this.m_angularVelocity = this.m_inertia = 0, r = this.m_firstIndex; r < this.m_lastIndex; r++) box2d.b2Sub_V2_V2(this.m_system.m_positionBuffer.data[r], this.m_center, o),
                box2d.b2Sub_V2_V2(this.m_system.m_velocityBuffer.data[r], this.m_linearVelocity, t),
                this.m_inertia += e * box2d.b2Dot_V2_V2(o, o), this.m_angularVelocity += e * box2d.b2Cross_V2_V2(o, t);
            0 < this.m_inertia && (this.m_angularVelocity *= 1 / this.m_inertia), this.m_timestamp = this.m_system.m_timestamp;
        }
    }, goog.exportProperty(box2d.b2ParticleGroup.prototype, "UpdateStatistics", box2d.b2ParticleGroup.prototype.UpdateStatistics),
    box2d.std_iter_swap = function(o, t, e) {
        var r = o[t];
        o[t] = o[e], o[e] = r;
    }, box2d.std_sort = function(o, t, e, r) {
        "number" != typeof t && (t = 0), "number" != typeof e && (e = o.length - t), "function" != typeof r && (r = function(o, t) {
            return o < t;
        });
        for (var i = [], b = 0;;) {
            for (; t + 1 < e; e++) {
                var n = o[t + Math.floor(Math.random() * (e - t))];
                i[b++] = e;
                for (var p = t - 1;;) {
                    for (; r(o[++p], n););
                    for (; r(n, o[--e]););
                    if (p >= e) break;
                    box2d.std_iter_swap(o, p, e);
                }
            }
            if (0 === b) break;
            t = e, e = i[--b];
        }
        return o;
    }, box2d.std_stable_sort = function(o, t, e, r) {
        return box2d.std_sort(o, t, e, r);
    }, box2d.std_remove_if = function(o, t, e) {
        "number" != typeof e && (e = o.length);
        for (var r = 0, i = 0; i < e; ++i) t(o[i]) || (i === r ? ++r : box2d.std_iter_swap(o, r++, i));
        return r;
    }, box2d.std_lower_bound = function(o, t, e, r, i) {
        for ("function" != typeof i && (i = function(o, t) {
                return o < t;
            }), e -= t; 0 < e;) {
            var b = Math.floor(e / 2),
                n = t + b;
            i(o[n], r) ? (t = ++n, e -= b + 1) : e = b;
        }
        return t;
    }, box2d.std_upper_bound = function(o, t, e, r, i) {
        for ("function" != typeof i && (i = function(o, t) {
                return o < t;
            }), e -= t; 0 < e;) {
            var b = Math.floor(e / 2),
                n = t + b;
            i(r, o[n]) ? e = b : (t = ++n, e -= b + 1);
        }
        return t;
    }, box2d.std_rotate = function(o, t, e, r) {
        for (var i = e; t !== i;) box2d.std_iter_swap(o, t++, i++), i === r ? i = e : t === e && (e = i);
    }, box2d.std_unique = function(o, t, e, r) {
        if (t === e) return e;
        for (var i = t; ++t !== e;) r(o[i], o[t]) || box2d.std_iter_swap(o, ++i, t);
        return ++i;
    }, box2d.b2GrowableBuffer = function(o) {
        this.data = [], this.capacity = this.count = 0, this.allocator = o;
    }, box2d.b2GrowableBuffer.prototype.data = null, box2d.b2GrowableBuffer.prototype.count = 0,
    box2d.b2GrowableBuffer.prototype.capacity = 0, box2d.b2GrowableBuffer.prototype.allocator = function() {
        return null;
    }, box2d.b2GrowableBuffer.prototype.Append = function() {
        return this.count >= this.capacity && this.Grow(), this.count++;
    }, box2d.b2GrowableBuffer.prototype.Reserve = function(o) {
        if (!(this.capacity >= o)) {
            box2d.b2Assert(this.capacity === this.data.length);
            for (var t = this.capacity; t < o; ++t) this.data[t] = this.allocator();
            this.capacity = o;
        }
    }, box2d.b2GrowableBuffer.prototype.Grow = function() {
        var o = this.capacity ? 2 * this.capacity : box2d.b2_minParticleSystemBufferCapacity;
        box2d.b2Assert(o > this.capacity), this.Reserve(o);
    }, box2d.b2GrowableBuffer.prototype.Free = function() {
        0 !== this.data.length && (this.data = [], this.count = this.capacity = 0);
    }, box2d.b2GrowableBuffer.prototype.Shorten = function(o) {
        box2d.b2Assert(!1);
    }, box2d.b2GrowableBuffer.prototype.Data = function() {
        return this.data;
    }, box2d.b2GrowableBuffer.prototype.GetCount = function() {
        return this.count;
    }, box2d.b2GrowableBuffer.prototype.SetCount = function(o) {
        box2d.b2Assert(0 <= o && o <= this.capacity), this.count = o;
    }, box2d.b2GrowableBuffer.prototype.GetCapacity = function() {
        return this.capacity;
    }, box2d.b2GrowableBuffer.prototype.RemoveIf = function(o) {
        for (var t = 0, e = 0; e < this.count; ++e) o(this.data[e]) || t++;
        this.count = box2d.std_remove_if(this.data, o, this.count), box2d.b2Assert(t === this.count);
    }, box2d.b2GrowableBuffer.prototype.Unique = function(o) {
        this.count = box2d.std_unique(this.data, 0, this.count, o);
    }, box2d.b2FixtureParticleQueryCallback = function(o) {
        this.m_system = o;
    }, goog.inherits(box2d.b2FixtureParticleQueryCallback, box2d.b2QueryCallback), box2d.b2FixtureParticleQueryCallback.prototype.m_system = null,
    box2d.b2FixtureParticleQueryCallback.prototype.ShouldQueryParticleSystem = function(o) {
        return !1;
    }, box2d.b2FixtureParticleQueryCallback.prototype.ReportFixture = function(o) {
        if (o.IsSensor()) return !0;
        for (var t = o.GetShape().GetChildCount(), e = 0; e < t; e++) {
            var r, i = o.GetAABB(e);
            for (i = this.m_system.GetInsideBoundsEnumerator(i); 0 <= (r = i.GetNext());) this.ReportFixtureAndParticle(o, e, r);
        }
        return !0;
    }, goog.exportProperty(box2d.b2FixtureParticleQueryCallback.prototype, "ReportFixture", box2d.b2FixtureParticleQueryCallback.prototype.ReportFixture),
    box2d.b2FixtureParticleQueryCallback.prototype.ReportParticle = function(o, t) {
        return !1;
    }, goog.exportProperty(box2d.b2FixtureParticleQueryCallback.prototype, "ReportParticle", box2d.b2FixtureParticleQueryCallback.prototype.ReportParticle),
    box2d.b2FixtureParticleQueryCallback.prototype.ReportFixtureAndParticle = function(o, t, e) {
        box2d.b2Assert(!1);
    }, goog.exportProperty(box2d.b2FixtureParticleQueryCallback.prototype, "ReportFixtureAndParticle", box2d.b2FixtureParticleQueryCallback.prototype.ReportFixtureAndParticle),
    box2d.b2ParticleContact = function() {
        this.normal = new box2d.b2Vec2();
    }, goog.exportSymbol("box2d.b2ParticleContact", box2d.b2ParticleContact), box2d.b2ParticleContact.prototype.indexA = 0,
    goog.exportProperty(box2d.b2ParticleContact.prototype, "indexA", box2d.b2ParticleContact.prototype.indexA),
    box2d.b2ParticleContact.prototype.indexB = 0, goog.exportProperty(box2d.b2ParticleContact.prototype, "indexB", box2d.b2ParticleContact.prototype.indexB),
    box2d.b2ParticleContact.prototype.weight = 0, goog.exportProperty(box2d.b2ParticleContact.prototype, "weight", box2d.b2ParticleContact.prototype.weight),
    box2d.b2ParticleContact.prototype.normal = null, goog.exportProperty(box2d.b2ParticleContact.prototype, "normal", box2d.b2ParticleContact.prototype.normal),
    box2d.b2ParticleContact.prototype.flags = 0, goog.exportProperty(box2d.b2ParticleContact.prototype, "flags", box2d.b2ParticleContact.prototype.flags),
    box2d.b2ParticleContact.prototype.SetIndices = function(o, t) {
        box2d.b2Assert(o <= box2d.b2_maxParticleIndex && t <= box2d.b2_maxParticleIndex),
            this.indexA = o, this.indexB = t;
    }, goog.exportProperty(box2d.b2ParticleContact.prototype, "SetIndices", box2d.b2ParticleContact.prototype.SetIndices),
    box2d.b2ParticleContact.prototype.SetWeight = function(o) {
        this.weight = o;
    }, goog.exportProperty(box2d.b2ParticleContact.prototype, "SetWeight", box2d.b2ParticleContact.prototype.SetWeight),
    box2d.b2ParticleContact.prototype.SetNormal = function(o) {
        this.normal.Copy(o);
    }, goog.exportProperty(box2d.b2ParticleContact.prototype, "SetNormal", box2d.b2ParticleContact.prototype.SetNormal),
    box2d.b2ParticleContact.prototype.SetFlags = function(o) {
        this.flags = o;
    }, goog.exportProperty(box2d.b2ParticleContact.prototype, "SetFlags", box2d.b2ParticleContact.prototype.SetFlags),
    box2d.b2ParticleContact.prototype.GetIndexA = function() {
        return this.indexA;
    }, goog.exportProperty(box2d.b2ParticleContact.prototype, "GetIndexA", box2d.b2ParticleContact.prototype.GetIndexA),
    box2d.b2ParticleContact.prototype.GetIndexB = function() {
        return this.indexB;
    }, goog.exportProperty(box2d.b2ParticleContact.prototype, "GetIndexB", box2d.b2ParticleContact.prototype.GetIndexB),
    box2d.b2ParticleContact.prototype.GetWeight = function() {
        return this.weight;
    }, goog.exportProperty(box2d.b2ParticleContact.prototype, "GetWeight", box2d.b2ParticleContact.prototype.GetWeight),
    box2d.b2ParticleContact.prototype.GetNormal = function() {
        return this.normal;
    }, goog.exportProperty(box2d.b2ParticleContact.prototype, "GetNormal", box2d.b2ParticleContact.prototype.GetNormal),
    box2d.b2ParticleContact.prototype.GetFlags = function() {
        return this.flags;
    }, goog.exportProperty(box2d.b2ParticleContact.prototype, "GetFlags", box2d.b2ParticleContact.prototype.GetFlags),
    box2d.b2ParticleContact.prototype.IsEqual = function(o) {
        return this.indexA === o.indexA && this.indexB === o.indexB && this.flags === o.flags && this.weight === o.weight && this.normal.x === o.normal.x && this.normal.y === o.normal.y;
    }, goog.exportProperty(box2d.b2ParticleContact.prototype, "IsEqual", box2d.b2ParticleContact.prototype.IsEqual),
    box2d.b2ParticleContact.prototype.IsNotEqual = function(o) {
        return !this.IsEqual(o);
    }, goog.exportProperty(box2d.b2ParticleContact.prototype, "IsNotEqual", box2d.b2ParticleContact.prototype.IsNotEqual),
    box2d.b2ParticleContact.prototype.ApproximatelyEqual = function(o) {
        return this.indexA === o.indexA && this.indexB === o.indexB && this.flags === o.flags && .01 > box2d.b2Abs(this.weight - o.weight) && 1e-4 > box2d.b2DistanceSquared(this.normal, o.normal);
    }, goog.exportProperty(box2d.b2ParticleContact.prototype, "ApproximatelyEqual", box2d.b2ParticleContact.prototype.ApproximatelyEqual),
    box2d.b2ParticleBodyContact = function() {
        this.normal = new box2d.b2Vec2();
    }, goog.exportSymbol("box2d.b2ParticleBodyContact", box2d.b2ParticleBodyContact),
    box2d.b2ParticleBodyContact.prototype.index = 0, goog.exportProperty(box2d.b2ParticleBodyContact.prototype, "index", box2d.b2ParticleBodyContact.prototype.index),
    box2d.b2ParticleBodyContact.prototype.body = null, goog.exportProperty(box2d.b2ParticleBodyContact.prototype, "body", box2d.b2ParticleBodyContact.prototype.body),
    box2d.b2ParticleBodyContact.prototype.fixture = null, goog.exportProperty(box2d.b2ParticleBodyContact.prototype, "fixture", box2d.b2ParticleBodyContact.prototype.fixture),
    box2d.b2ParticleBodyContact.prototype.weight = 0, goog.exportProperty(box2d.b2ParticleBodyContact.prototype, "weight", box2d.b2ParticleBodyContact.prototype.weight),
    box2d.b2ParticleBodyContact.prototype.normal = null, goog.exportProperty(box2d.b2ParticleBodyContact.prototype, "normal", box2d.b2ParticleBodyContact.prototype.normal),
    box2d.b2ParticleBodyContact.prototype.mass = 0, goog.exportProperty(box2d.b2ParticleBodyContact.prototype, "mass", box2d.b2ParticleBodyContact.prototype.mass),
    box2d.b2ParticlePair = function() {}, goog.exportSymbol("box2d.b2ParticlePair", box2d.b2ParticlePair),
    box2d.b2ParticlePair.prototype.indexA = 0, goog.exportProperty(box2d.b2ParticlePair.prototype, "indexA", box2d.b2ParticlePair.prototype.indexA),
    box2d.b2ParticlePair.prototype.indexB = 0, goog.exportProperty(box2d.b2ParticlePair.prototype, "indexB", box2d.b2ParticlePair.prototype.indexB),
    box2d.b2ParticlePair.prototype.flags = 0, goog.exportProperty(box2d.b2ParticlePair.prototype, "flags", box2d.b2ParticlePair.prototype.flags),
    box2d.b2ParticlePair.prototype.strength = 0, goog.exportProperty(box2d.b2ParticlePair.prototype, "strength", box2d.b2ParticlePair.prototype.strength),
    box2d.b2ParticlePair.prototype.distance = 0, goog.exportProperty(box2d.b2ParticlePair.prototype, "distance", box2d.b2ParticlePair.prototype.distance),
    box2d.b2ParticleTriad = function() {
        this.pa = new box2d.b2Vec2(0, 0), this.pb = new box2d.b2Vec2(0, 0), this.pc = new box2d.b2Vec2(0, 0);
    }, goog.exportSymbol("box2d.b2ParticleTriad", box2d.b2ParticleTriad), box2d.b2ParticleTriad.prototype.indexA = 0,
    goog.exportProperty(box2d.b2ParticleTriad.prototype, "indexA", box2d.b2ParticleTriad.prototype.indexA),
    box2d.b2ParticleTriad.prototype.indexB = 0, goog.exportProperty(box2d.b2ParticleTriad.prototype, "indexB", box2d.b2ParticleTriad.prototype.indexB),
    box2d.b2ParticleTriad.prototype.indexC = 0, goog.exportProperty(box2d.b2ParticleTriad.prototype, "indexC", box2d.b2ParticleTriad.prototype.indexC),
    box2d.b2ParticleTriad.prototype.flags = 0, goog.exportProperty(box2d.b2ParticleTriad.prototype, "flags", box2d.b2ParticleTriad.prototype.flags),
    box2d.b2ParticleTriad.prototype.strength = 0, goog.exportProperty(box2d.b2ParticleTriad.prototype, "strength", box2d.b2ParticleTriad.prototype.strength),
    box2d.b2ParticleTriad.prototype.pa = null, goog.exportProperty(box2d.b2ParticleTriad.prototype, "pa", box2d.b2ParticleTriad.prototype.pa),
    box2d.b2ParticleTriad.prototype.pb = null, goog.exportProperty(box2d.b2ParticleTriad.prototype, "pb", box2d.b2ParticleTriad.prototype.pb),
    box2d.b2ParticleTriad.prototype.pc = null, goog.exportProperty(box2d.b2ParticleTriad.prototype, "pc", box2d.b2ParticleTriad.prototype.pc),
    box2d.b2ParticleTriad.prototype.ka = 0, goog.exportProperty(box2d.b2ParticleTriad.prototype, "ka", box2d.b2ParticleTriad.prototype.ka),
    box2d.b2ParticleTriad.prototype.kb = 0, goog.exportProperty(box2d.b2ParticleTriad.prototype, "kb", box2d.b2ParticleTriad.prototype.kb),
    box2d.b2ParticleTriad.prototype.kc = 0, goog.exportProperty(box2d.b2ParticleTriad.prototype, "kc", box2d.b2ParticleTriad.prototype.kc),
    box2d.b2ParticleTriad.prototype.s = 0, goog.exportProperty(box2d.b2ParticleTriad.prototype, "s", box2d.b2ParticleTriad.prototype.s),
    box2d.b2ParticleSystemDef = function() {}, goog.exportSymbol("box2d.b2ParticleSystemDef", box2d.b2ParticleSystemDef),
    box2d.b2ParticleSystemDef.prototype.strictContactCheck = !1, goog.exportProperty(box2d.b2ParticleSystemDef.prototype, "strictContactCheck", box2d.b2ParticleSystemDef.prototype.strictContactCheck),
    box2d.b2ParticleSystemDef.prototype.density = 1, goog.exportProperty(box2d.b2ParticleSystemDef.prototype, "density", box2d.b2ParticleSystemDef.prototype.density),
    box2d.b2ParticleSystemDef.prototype.gravityScale = 1, goog.exportProperty(box2d.b2ParticleSystemDef.prototype, "gravityScale", box2d.b2ParticleSystemDef.prototype.gravityScale),
    box2d.b2ParticleSystemDef.prototype.radius = 1, goog.exportProperty(box2d.b2ParticleSystemDef.prototype, "radius", box2d.b2ParticleSystemDef.prototype.radius),
    box2d.b2ParticleSystemDef.prototype.maxCount = 0, goog.exportProperty(box2d.b2ParticleSystemDef.prototype, "maxCount", box2d.b2ParticleSystemDef.prototype.maxCount),
    box2d.b2ParticleSystemDef.prototype.pressureStrength = .005, goog.exportProperty(box2d.b2ParticleSystemDef.prototype, "pressureStrength", box2d.b2ParticleSystemDef.prototype.pressureStrength),
    box2d.b2ParticleSystemDef.prototype.dampingStrength = 1, goog.exportProperty(box2d.b2ParticleSystemDef.prototype, "dampingStrength", box2d.b2ParticleSystemDef.prototype.dampingStrength),
    box2d.b2ParticleSystemDef.prototype.elasticStrength = .25, goog.exportProperty(box2d.b2ParticleSystemDef.prototype, "elasticStrength", box2d.b2ParticleSystemDef.prototype.elasticStrength),
    box2d.b2ParticleSystemDef.prototype.springStrength = .25, goog.exportProperty(box2d.b2ParticleSystemDef.prototype, "springStrength", box2d.b2ParticleSystemDef.prototype.springStrength),
    box2d.b2ParticleSystemDef.prototype.viscousStrength = .25, goog.exportProperty(box2d.b2ParticleSystemDef.prototype, "viscousStrength", box2d.b2ParticleSystemDef.prototype.viscousStrength),
    box2d.b2ParticleSystemDef.prototype.surfaceTensionPressureStrength = .2, goog.exportProperty(box2d.b2ParticleSystemDef.prototype, "surfaceTensionPressureStrength", box2d.b2ParticleSystemDef.prototype.surfaceTensionPressureStrength),
    box2d.b2ParticleSystemDef.prototype.surfaceTensionNormalStrength = .2, goog.exportProperty(box2d.b2ParticleSystemDef.prototype, "surfaceTensionNormalStrength", box2d.b2ParticleSystemDef.prototype.surfaceTensionNormalStrength),
    box2d.b2ParticleSystemDef.prototype.repulsiveStrength = 1, goog.exportProperty(box2d.b2ParticleSystemDef.prototype, "repulsiveStrength", box2d.b2ParticleSystemDef.prototype.repulsiveStrength),
    box2d.b2ParticleSystemDef.prototype.powderStrength = .5, goog.exportProperty(box2d.b2ParticleSystemDef.prototype, "powderStrength", box2d.b2ParticleSystemDef.prototype.powderStrength),
    box2d.b2ParticleSystemDef.prototype.ejectionStrength = .5, goog.exportProperty(box2d.b2ParticleSystemDef.prototype, "ejectionStrength", box2d.b2ParticleSystemDef.prototype.ejectionStrength),
    box2d.b2ParticleSystemDef.prototype.staticPressureStrength = .2, goog.exportProperty(box2d.b2ParticleSystemDef.prototype, "staticPressureStrength", box2d.b2ParticleSystemDef.prototype.staticPressureStrength),
    box2d.b2ParticleSystemDef.prototype.staticPressureRelaxation = .2, goog.exportProperty(box2d.b2ParticleSystemDef.prototype, "staticPressureRelaxation", box2d.b2ParticleSystemDef.prototype.staticPressureRelaxation),
    box2d.b2ParticleSystemDef.prototype.staticPressureIterations = 8, goog.exportProperty(box2d.b2ParticleSystemDef.prototype, "staticPressureIterations", box2d.b2ParticleSystemDef.prototype.staticPressureIterations),
    box2d.b2ParticleSystemDef.prototype.colorMixingStrength = .5, goog.exportProperty(box2d.b2ParticleSystemDef.prototype, "colorMixingStrength", box2d.b2ParticleSystemDef.prototype.colorMixingStrength),
    box2d.b2ParticleSystemDef.prototype.destroyByAge = !0, goog.exportProperty(box2d.b2ParticleSystemDef.prototype, "destroyByAge", box2d.b2ParticleSystemDef.prototype.destroyByAge),
    box2d.b2ParticleSystemDef.prototype.lifetimeGranularity = 1 / 60, goog.exportProperty(box2d.b2ParticleSystemDef.prototype, "lifetimeGranularity", box2d.b2ParticleSystemDef.prototype.lifetimeGranularity),
    box2d.b2ParticleSystemDef.prototype.Copy = function(o) {
        return this.strictContactCheck = o.strictContactCheck, this.density = o.density,
            this.gravityScale = o.gravityScale, this.radius = o.radius, this.maxCount = o.maxCount,
            this.pressureStrength = o.pressureStrength, this.dampingStrength = o.dampingStrength,
            this.elasticStrength = o.elasticStrength, this.springStrength = o.springStrength,
            this.viscousStrength = o.viscousStrength, this.surfaceTensionPressureStrength = o.surfaceTensionPressureStrength,
            this.surfaceTensionNormalStrength = o.surfaceTensionNormalStrength, this.repulsiveStrength = o.repulsiveStrength,
            this.powderStrength = o.powderStrength, this.ejectionStrength = o.ejectionStrength,
            this.staticPressureStrength = o.staticPressureStrength, this.staticPressureRelaxation = o.staticPressureRelaxation,
            this.staticPressureIterations = o.staticPressureIterations, this.colorMixingStrength = o.colorMixingStrength,
            this.destroyByAge = o.destroyByAge, this.lifetimeGranularity = o.lifetimeGranularity,
            this;
    }, box2d.b2ParticleSystemDef.prototype.Clone = function() {
        return new box2d.b2ParticleSystemDef().Copy(this);
    }, box2d.b2ParticleSystem = function(o, t) {
        this._ctor_(o, t);
    }, goog.exportSymbol("box2d.b2ParticleSystem", box2d.b2ParticleSystem), box2d.b2ParticleSystem.prototype.m_paused = !1,
    box2d.b2ParticleSystem.prototype.m_timestamp = 0, box2d.b2ParticleSystem.prototype.m_allParticleFlags = 0,
    box2d.b2ParticleSystem.prototype.m_needsUpdateAllParticleFlags = !1, box2d.b2ParticleSystem.prototype.m_allGroupFlags = 0,
    box2d.b2ParticleSystem.prototype.m_needsUpdateAllGroupFlags = !1, box2d.b2ParticleSystem.prototype.m_hasForce = !1,
    box2d.b2ParticleSystem.prototype.m_iterationIndex = 0, box2d.b2ParticleSystem.prototype.m_inverseDensity = 0,
    box2d.b2ParticleSystem.prototype.m_particleDiameter = 0, box2d.b2ParticleSystem.prototype.m_inverseDiameter = 0,
    box2d.b2ParticleSystem.prototype.m_squaredDiameter = 0, box2d.b2ParticleSystem.prototype.m_count = 0,
    box2d.b2ParticleSystem.prototype.m_internalAllocatedCapacity = 0, box2d.b2ParticleSystem.prototype.m_handleAllocator = null,
    box2d.b2ParticleSystem.prototype.m_handleIndexBuffer = null, box2d.b2ParticleSystem.prototype.m_flagsBuffer = null,
    box2d.b2ParticleSystem.prototype.m_positionBuffer = null, box2d.b2ParticleSystem.prototype.m_velocityBuffer = null,
    box2d.b2ParticleSystem.prototype.m_forceBuffer = null, box2d.b2ParticleSystem.prototype.m_weightBuffer = null,
    box2d.b2ParticleSystem.prototype.m_staticPressureBuffer = null, box2d.b2ParticleSystem.prototype.m_accumulationBuffer = null,
    box2d.b2ParticleSystem.prototype.m_accumulation2Buffer = null, box2d.b2ParticleSystem.prototype.m_depthBuffer = null,
    box2d.b2ParticleSystem.prototype.m_colorBuffer = null, box2d.b2ParticleSystem.prototype.m_groupBuffer = null,
    box2d.b2ParticleSystem.prototype.m_userDataBuffer = null, box2d.b2ParticleSystem.prototype.m_stuckThreshold = 0,
    box2d.b2ParticleSystem.prototype.m_lastBodyContactStepBuffer = null, box2d.b2ParticleSystem.prototype.m_bodyContactCountBuffer = null,
    box2d.b2ParticleSystem.prototype.m_consecutiveContactStepsBuffer = null, box2d.b2ParticleSystem.prototype.m_stuckParticleBuffer = null,
    box2d.b2ParticleSystem.prototype.m_proxyBuffer = null, box2d.b2ParticleSystem.prototype.m_contactBuffer = null,
    box2d.b2ParticleSystem.prototype.m_bodyContactBuffer = null, box2d.b2ParticleSystem.prototype.m_pairBuffer = null,
    box2d.b2ParticleSystem.prototype.m_triadBuffer = null, box2d.b2ParticleSystem.prototype.m_expirationTimeBuffer = null,
    box2d.b2ParticleSystem.prototype.m_indexByExpirationTimeBuffer = null, box2d.b2ParticleSystem.prototype.m_timeElapsed = 0,
    box2d.b2ParticleSystem.prototype.m_expirationTimeBufferRequiresSorting = !1, box2d.b2ParticleSystem.prototype.m_groupCount = 0,
    box2d.b2ParticleSystem.prototype.m_groupList = null, box2d.b2ParticleSystem.prototype.m_def = null,
    box2d.b2ParticleSystem.prototype.m_world = null, box2d.b2ParticleSystem.prototype.m_prev = null,
    box2d.b2ParticleSystem.prototype.m_next = null, box2d.b2ParticleSystem.xTruncBits = 12,
    box2d.b2ParticleSystem.yTruncBits = 12, box2d.b2ParticleSystem.tagBits = 32, box2d.b2ParticleSystem.yOffset = 1 << box2d.b2ParticleSystem.yTruncBits - 1,
    box2d.b2ParticleSystem.yShift = box2d.b2ParticleSystem.tagBits - box2d.b2ParticleSystem.yTruncBits,
    box2d.b2ParticleSystem.xShift = box2d.b2ParticleSystem.tagBits - box2d.b2ParticleSystem.yTruncBits - box2d.b2ParticleSystem.xTruncBits,
    box2d.b2ParticleSystem.xScale = 1 << box2d.b2ParticleSystem.xShift, box2d.b2ParticleSystem.xOffset = box2d.b2ParticleSystem.xScale * (1 << box2d.b2ParticleSystem.xTruncBits - 1),
    box2d.b2ParticleSystem.yMask = (1 << box2d.b2ParticleSystem.yTruncBits) - 1 << box2d.b2ParticleSystem.yShift,
    box2d.b2ParticleSystem.xMask = ~box2d.b2ParticleSystem.yMask, box2d.b2ParticleSystem.computeTag = function(o, t) {
        return (t + box2d.b2ParticleSystem.yOffset >>> 0 << box2d.b2ParticleSystem.yShift) + (box2d.b2ParticleSystem.xScale * o + box2d.b2ParticleSystem.xOffset >>> 0) >>> 0;
    }, box2d.b2ParticleSystem.computeRelativeTag = function(o, t, e) {
        return o + (e << box2d.b2ParticleSystem.yShift) + (t << box2d.b2ParticleSystem.xShift) >>> 0;
    }, box2d.b2ParticleSystem.FixedSetAllocator = function() {}, box2d.b2ParticleSystem.FixedSetAllocator.prototype.Invalidate = function(o) {},
    box2d.b2ParticleSystem.FixtureParticle = function(o, t) {
        this.first = o, this.second = t;
    }, box2d.b2ParticleSystem.FixtureParticle.prototype.first = null, box2d.b2ParticleSystem.FixtureParticle.prototype.second = box2d.b2_invalidParticleIndex,
    box2d.b2ParticleSystem.FixtureParticleSet = function() {}, goog.inherits(box2d.b2ParticleSystem.FixtureParticleSet, box2d.b2ParticleSystem.FixedSetAllocator),
    box2d.b2ParticleSystem.FixtureParticleSet.prototype.Initialize = function(o, t) {},
    box2d.b2ParticleSystem.FixtureParticleSet.prototype.Find = function(o) {}, box2d.b2ParticleSystem.ParticlePair = function(o, t) {},
    box2d.b2ParticleSystem.ParticlePair.prototype.first = box2d.b2_invalidParticleIndex,
    box2d.b2ParticleSystem.ParticlePair.prototype.second = box2d.b2_invalidParticleIndex,
    box2d.b2ParticleSystem.b2ParticlePairSet = function() {}, goog.inherits(box2d.b2ParticleSystem.b2ParticlePairSet, box2d.b2ParticleSystem.FixedSetAllocator),
    box2d.b2ParticleSystem.b2ParticlePairSet.prototype.Initialize = function(o, t) {},
    box2d.b2ParticleSystem.b2ParticlePairSet.prototype.Find = function(o) {}, box2d.b2ParticleSystem.ConnectionFilter = function() {},
    box2d.b2ParticleSystem.ConnectionFilter.prototype.IsNecessary = function(o) {
        return !0;
    }, box2d.b2ParticleSystem.ConnectionFilter.prototype.ShouldCreatePair = function(o, t) {
        return !0;
    }, box2d.b2ParticleSystem.ConnectionFilter.prototype.ShouldCreateTriad = function(o, t, e) {
        return !0;
    }, box2d.b2ParticleSystem.prototype._ctor_ = function(o, t) {
        this.m_handleIndexBuffer = new box2d.b2ParticleSystem.UserOverridableBuffer(), this.m_flagsBuffer = new box2d.b2ParticleSystem.UserOverridableBuffer(),
            this.m_positionBuffer = new box2d.b2ParticleSystem.UserOverridableBuffer(), this.m_velocityBuffer = new box2d.b2ParticleSystem.UserOverridableBuffer(),
            this.m_forceBuffer = [], this.m_weightBuffer = [], this.m_staticPressureBuffer = [],
            this.m_accumulationBuffer = [], this.m_accumulation2Buffer = [], this.m_depthBuffer = [],
            this.m_colorBuffer = new box2d.b2ParticleSystem.UserOverridableBuffer(), this.m_groupBuffer = [],
            this.m_userDataBuffer = new box2d.b2ParticleSystem.UserOverridableBuffer(), this.m_lastBodyContactStepBuffer = new box2d.b2ParticleSystem.UserOverridableBuffer(),
            this.m_bodyContactCountBuffer = new box2d.b2ParticleSystem.UserOverridableBuffer(),
            this.m_consecutiveContactStepsBuffer = new box2d.b2ParticleSystem.UserOverridableBuffer(),
            this.m_stuckParticleBuffer = new box2d.b2GrowableBuffer(function() {
                return 0;
            }), this.m_proxyBuffer = new box2d.b2GrowableBuffer(function() {
                return new box2d.b2ParticleSystem.Proxy();
            }), this.m_contactBuffer = new box2d.b2GrowableBuffer(function() {
                return new box2d.b2ParticleContact();
            }), this.m_bodyContactBuffer = new box2d.b2GrowableBuffer(function() {
                return new box2d.b2ParticleBodyContact();
            }), this.m_pairBuffer = new box2d.b2GrowableBuffer(function() {
                return new box2d.b2ParticlePair();
            }), this.m_triadBuffer = new box2d.b2GrowableBuffer(function() {
                return new box2d.b2ParticleTriad();
            }), this.m_expirationTimeBuffer = new box2d.b2ParticleSystem.UserOverridableBuffer(),
            this.m_indexByExpirationTimeBuffer = new box2d.b2ParticleSystem.UserOverridableBuffer(),
            this.m_def = new box2d.b2ParticleSystemDef(), box2d.b2Assert(null !== o), this.SetStrictContactCheck(o.strictContactCheck),
            this.SetDensity(o.density), this.SetGravityScale(o.gravityScale), this.SetRadius(o.radius),
            this.SetMaxParticleCount(o.maxCount), box2d.b2Assert(0 < o.lifetimeGranularity),
            this.m_def = o.Clone(), this.m_world = t, this.SetDestructionByAge(this.m_def.destroyByAge);
    }, box2d.b2ParticleSystem.prototype._dtor_ = function() {
        for (; this.m_groupList;) this.DestroyParticleGroup(this.m_groupList);
        this.FreeUserOverridableBuffer(this.m_handleIndexBuffer), this.FreeUserOverridableBuffer(this.m_flagsBuffer),
            this.FreeUserOverridableBuffer(this.m_lastBodyContactStepBuffer), this.FreeUserOverridableBuffer(this.m_bodyContactCountBuffer),
            this.FreeUserOverridableBuffer(this.m_consecutiveContactStepsBuffer), this.FreeUserOverridableBuffer(this.m_positionBuffer),
            this.FreeUserOverridableBuffer(this.m_velocityBuffer), this.FreeUserOverridableBuffer(this.m_colorBuffer),
            this.FreeUserOverridableBuffer(this.m_userDataBuffer), this.FreeUserOverridableBuffer(this.m_expirationTimeBuffer),
            this.FreeUserOverridableBuffer(this.m_indexByExpirationTimeBuffer), this.FreeBuffer(this.m_forceBuffer, this.m_internalAllocatedCapacity),
            this.FreeBuffer(this.m_weightBuffer, this.m_internalAllocatedCapacity), this.FreeBuffer(this.m_staticPressureBuffer, this.m_internalAllocatedCapacity),
            this.FreeBuffer(this.m_accumulationBuffer, this.m_internalAllocatedCapacity), this.FreeBuffer(this.m_accumulation2Buffer, this.m_internalAllocatedCapacity),
            this.FreeBuffer(this.m_depthBuffer, this.m_internalAllocatedCapacity), this.FreeBuffer(this.m_groupBuffer, this.m_internalAllocatedCapacity);
    }, box2d.b2ParticleSystem.prototype.Drop = function() {
        this._dtor_();
    }, box2d.b2ParticleSystem.prototype.CreateParticle = function(o) {
        if (box2d.b2Assert(!1 === this.m_world.IsLocked()), this.m_world.IsLocked()) return 0;
        if (this.m_count >= this.m_internalAllocatedCapacity && this.ReallocateInternalAllocatedBuffers(this.m_count ? 2 * this.m_count : box2d.b2_minParticleSystemBufferCapacity),
            this.m_count >= this.m_internalAllocatedCapacity) {
            if (!this.m_def.destroyByAge) return box2d.b2_invalidParticleIndex;
            this.DestroyOldestParticle(0, !1), this.SolveZombie();
        }
        var t = this.m_count++;
        this.m_flagsBuffer.data[t] = 0, this.m_lastBodyContactStepBuffer.data && (this.m_lastBodyContactStepBuffer.data[t] = 0),
            this.m_bodyContactCountBuffer.data && (this.m_bodyContactCountBuffer.data[t] = 0),
            this.m_consecutiveContactStepsBuffer.data && (this.m_consecutiveContactStepsBuffer.data[t] = 0),
            this.m_positionBuffer.data[t] = (this.m_positionBuffer.data[t] || new box2d.b2Vec2()).Copy(o.position),
            this.m_velocityBuffer.data[t] = (this.m_velocityBuffer.data[t] || new box2d.b2Vec2()).Copy(o.velocity),
            this.m_weightBuffer[t] = 0, this.m_forceBuffer[t] = (this.m_forceBuffer[t] || new box2d.b2Vec2()).SetZero(),
            this.m_staticPressureBuffer && (this.m_staticPressureBuffer[t] = 0), this.m_depthBuffer && (this.m_depthBuffer[t] = 0), !this.m_colorBuffer.data && o.color.IsZero() || (this.m_colorBuffer.data = this.RequestBuffer(this.m_colorBuffer.data),
                this.m_colorBuffer.data[t] = (this.m_colorBuffer.data[t] || new box2d.b2ParticleColor()).Copy(o.color)),
            (this.m_userDataBuffer.data || o.userData) && (this.m_userDataBuffer.data = this.RequestBuffer(this.m_userDataBuffer.data),
                this.m_userDataBuffer.data[t] = o.userData), this.m_handleIndexBuffer.data && (this.m_handleIndexBuffer.data[t] = null);
        var e = this.m_proxyBuffer.data[this.m_proxyBuffer.Append()],
            r = 0 < o.lifetime;
        return (this.m_expirationTimeBuffer.data || r) && (this.SetParticleLifetime(t, r ? o.lifetime : this.ExpirationTimeToLifetime(-this.GetQuantizedTimeElapsed())),
                this.m_indexByExpirationTimeBuffer.data[t] = t), e.index = t, e = o.group, (this.m_groupBuffer[t] = e) && (e.m_firstIndex < e.m_lastIndex ? (this.RotateBuffer(e.m_firstIndex, e.m_lastIndex, t),
                box2d.b2Assert(e.m_lastIndex === t)) : e.m_firstIndex = t, e.m_lastIndex = t + 1),
            this.SetParticleFlags(t, o.flags), t;
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "CreateParticle", box2d.b2ParticleSystem.prototype.CreateParticle),
    box2d.b2ParticleSystem.prototype.GetParticleHandleFromIndex = function(o) {
        box2d.b2Assert(0 <= o && o < this.GetParticleCount() && o !== box2d.b2_invalidParticleIndex),
            this.m_handleIndexBuffer.data = this.RequestBuffer(this.m_handleIndexBuffer.data);
        var t = this.m_handleIndexBuffer.data[o];
        return t || (t = new box2d.b2ParticleHandle(), box2d.b2Assert(null !== t), t.SetIndex(o),
            this.m_handleIndexBuffer.data[o] = t);
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "GetParticleHandleFromIndex", box2d.b2ParticleSystem.prototype.GetParticleHandleFromIndex),
    box2d.b2ParticleSystem.prototype.DestroyParticle = function(o, t) {
        var e = box2d.b2ParticleFlag.b2_zombieParticle;
        t && (e |= box2d.b2ParticleFlag.b2_destructionListenerParticle), this.SetParticleFlags(o, this.m_flagsBuffer.data[o] | e);
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "DestroyParticle", box2d.b2ParticleSystem.prototype.DestroyParticle),
    box2d.b2ParticleSystem.prototype.DestroyOldestParticle = function(o, t) {
        var e = this.GetParticleCount();
        box2d.b2Assert(0 <= o && o < e), box2d.b2Assert(null !== this.m_indexByExpirationTimeBuffer.data);
        e = this.m_indexByExpirationTimeBuffer.data[e - (o + 1)];
        var r = this.m_indexByExpirationTimeBuffer.data[o];
        this.DestroyParticle(0 < this.m_expirationTimeBuffer.data[e] ? e : r, t);
    }, box2d.b2ParticleSystem.DestroyParticlesInShapeCallback = function(o, t, e, r) {
        this.m_system = o, this.m_shape = t, this.m_xf = e, this.m_callDestructionListener = r,
            this.m_destroyed = 0;
    }, goog.inherits(box2d.b2ParticleSystem.DestroyParticlesInShapeCallback, box2d.b2QueryCallback),
    box2d.b2ParticleSystem.DestroyParticlesInShapeCallback.prototype.m_system = null,
    box2d.b2ParticleSystem.DestroyParticlesInShapeCallback.prototype.m_shape = null,
    box2d.b2ParticleSystem.DestroyParticlesInShapeCallback.prototype.m_xf = null, box2d.b2ParticleSystem.DestroyParticlesInShapeCallback.prototype.m_callDestructionListener = !1,
    box2d.b2ParticleSystem.DestroyParticlesInShapeCallback.prototype.m_destroyed = 0,
    box2d.b2ParticleSystem.DestroyParticlesInShapeCallback.prototype.ReportFixture = function(o) {
        return !1;
    }, box2d.b2ParticleSystem.DestroyParticlesInShapeCallback.prototype.ReportParticle = function(o, t) {
        return o === this.m_system && (box2d.b2Assert(0 <= t && t < this.m_system.m_count),
            this.m_shape.TestPoint(this.m_xf, this.m_system.m_positionBuffer.data[t]) && (this.m_system.DestroyParticle(t, this.m_callDestructionListener),
                this.m_destroyed++), !0);
    }, box2d.b2ParticleSystem.DestroyParticlesInShapeCallback.prototype.Destroyed = function() {
        return this.m_destroyed;
    }, box2d.b2ParticleSystem.prototype.DestroyParticlesInShape = function(o, t, e) {
        var r = box2d.b2ParticleSystem.prototype.DestroyParticlesInShape.s_aabb;
        return box2d.b2Assert(!1 === this.m_world.IsLocked()), this.m_world.IsLocked() ? 0 : (e = new box2d.b2ParticleSystem.DestroyParticlesInShapeCallback(this, o, t, e),
            o.ComputeAABB(r, t, 0), this.m_world.QueryAABB(e, r), e.Destroyed());
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "DestroyParticlesInShape", box2d.b2ParticleSystem.prototype.DestroyParticlesInShape),
    box2d.b2ParticleSystem.prototype.DestroyParticlesInShape.s_aabb = new box2d.b2AABB(),
    box2d.b2ParticleSystem.prototype.CreateParticleGroup = function(o) {
        var t = box2d.b2ParticleSystem.prototype.CreateParticleGroup.s_transform;
        if (box2d.b2Assert(!1 === this.m_world.IsLocked()), this.m_world.IsLocked()) return null;
        t.Set(o.position, o.angle);
        var e = this.m_count;
        if (o.shape && this.CreateParticlesWithShapeForGroup(o.shape, o, t), o.shapes && this.CreateParticlesWithShapesForGroup(o.shapes, o.shapeCount, o, t),
            o.particleCount) {
            box2d.b2Assert(null !== o.positionData);
            for (var r = 0; r < o.particleCount; r++) this.CreateParticleForGroup(o, t, o.positionData[r]);
        }
        var i = this.m_count,
            b = new box2d.b2ParticleGroup();
        for (b.m_system = this, b.m_firstIndex = e, b.m_lastIndex = i, b.m_strength = o.strength,
            b.m_userData = o.userData, b.m_transform.Copy(t), b.m_prev = null, (b.m_next = this.m_groupList) && (this.m_groupList.m_prev = b),
            this.m_groupList = b, ++this.m_groupCount, r = e; r < i; r++) this.m_groupBuffer[r] = b;
        return this.SetGroupFlags(b, o.groupFlags), t = new box2d.b2ParticleSystem.ConnectionFilter(),
            this.UpdateContacts(!0), this.UpdatePairsAndTriads(e, i, t), o.group && (this.JoinParticleGroups(o.group, b),
                b = o.group), b;
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "CreateParticleGroup", box2d.b2ParticleSystem.prototype.CreateParticleGroup),
    box2d.b2ParticleSystem.prototype.CreateParticleGroup.s_transform = new box2d.b2Transform(),
    box2d.b2ParticleSystem.JoinParticleGroupsFilter = function(o) {
        this.m_threshold = o;
    }, goog.inherits(box2d.b2ParticleSystem.JoinParticleGroupsFilter, box2d.b2ParticleSystem.ConnectionFilter),
    box2d.b2ParticleSystem.JoinParticleGroupsFilter.prototype.m_threshold = 0, box2d.b2ParticleSystem.JoinParticleGroupsFilter.prototype.ShouldCreatePair = function(o, t) {
        return o < this.m_threshold && this.m_threshold <= t || t < this.m_threshold && this.m_threshold <= o;
    }, box2d.b2ParticleSystem.JoinParticleGroupsFilter.prototype.ShouldCreateTriad = function(o, t, e) {
        return (o < this.m_threshold || t < this.m_threshold || e < this.m_threshold) && (this.m_threshold <= o || this.m_threshold <= t || this.m_threshold <= e);
    }, box2d.b2ParticleSystem.prototype.JoinParticleGroups = function(o, t) {
        if (box2d.b2Assert(!1 === this.m_world.IsLocked()), !this.m_world.IsLocked()) {
            box2d.b2Assert(o !== t), this.RotateBuffer(t.m_firstIndex, t.m_lastIndex, this.m_count),
                box2d.b2Assert(t.m_lastIndex === this.m_count), this.RotateBuffer(o.m_firstIndex, o.m_lastIndex, t.m_firstIndex),
                box2d.b2Assert(o.m_lastIndex === t.m_firstIndex);
            var e = new box2d.b2ParticleSystem.JoinParticleGroupsFilter(t.m_firstIndex);
            for (this.UpdateContacts(!0), this.UpdatePairsAndTriads(o.m_firstIndex, t.m_lastIndex, e),
                e = t.m_firstIndex; e < t.m_lastIndex; e++) this.m_groupBuffer[e] = o;
            this.SetGroupFlags(o, o.m_groupFlags | t.m_groupFlags), o.m_lastIndex = t.m_lastIndex,
                t.m_firstIndex = t.m_lastIndex, this.DestroyParticleGroup(t);
        }
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "JoinParticleGroups", box2d.b2ParticleSystem.prototype.JoinParticleGroups),
    box2d.b2ParticleSystem.prototype.SplitParticleGroup = function(o) {
        this.UpdateContacts(!0);
        var t = o.GetParticleCount();
        t = box2d.b2MakeArray(t, function(o) {
            return new box2d.b2ParticleSystem.ParticleListNode();
        });
        box2d.b2ParticleSystem.InitializeParticleLists(o, t), this.MergeParticleListsInContact(o, t);
        var e = box2d.b2ParticleSystem.FindLongestParticleList(o, t);
        this.MergeZombieParticleListNodes(o, t, e), this.CreateParticleGroupsFromParticleList(o, t, e),
            this.UpdatePairsAndTriadsWithParticleList(o, t);
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "SplitParticleGroup", box2d.b2ParticleSystem.prototype.SplitParticleGroup),
    box2d.b2ParticleSystem.prototype.GetParticleGroupList = function() {
        return this.m_groupList;
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "GetParticleGroupList", box2d.b2ParticleSystem.prototype.GetParticleGroupList),
    box2d.b2ParticleSystem.prototype.GetParticleGroupCount = function() {
        return this.m_groupCount;
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "GetParticleGroupCount", box2d.b2ParticleSystem.prototype.GetParticleGroupCount),
    box2d.b2ParticleSystem.prototype.GetParticleCount = function() {
        return this.m_count;
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "GetParticleCount", box2d.b2ParticleSystem.prototype.GetParticleCount),
    box2d.b2ParticleSystem.prototype.GetMaxParticleCount = function() {
        return this.m_def.maxCount;
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "GetMaxParticleCount", box2d.b2ParticleSystem.prototype.GetMaxParticleCount),
    box2d.b2ParticleSystem.prototype.SetMaxParticleCount = function(o) {
        box2d.b2Assert(this.m_count <= o), this.m_def.maxCount = o;
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "SetMaxParticleCount", box2d.b2ParticleSystem.prototype.SetMaxParticleCount),
    box2d.b2ParticleSystem.prototype.GetAllParticleFlags = function() {
        return this.m_allParticleFlags;
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "GetAllParticleFlags", box2d.b2ParticleSystem.prototype.GetAllParticleFlags),
    box2d.b2ParticleSystem.prototype.GetAllGroupFlags = function() {
        return this.m_allGroupFlags;
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "GetAllGroupFlags", box2d.b2ParticleSystem.prototype.GetAllGroupFlags),
    box2d.b2ParticleSystem.prototype.SetPaused = function(o) {
        this.m_paused = o;
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "SetPaused", box2d.b2ParticleSystem.prototype.SetPaused),
    box2d.b2ParticleSystem.prototype.GetPaused = function() {
        return this.m_paused;
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "GetPaused", box2d.b2ParticleSystem.prototype.GetPaused),
    box2d.b2ParticleSystem.prototype.SetDensity = function(o) {
        this.m_def.density = o, this.m_inverseDensity = 1 / this.m_def.density;
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "SetDensity", box2d.b2ParticleSystem.prototype.SetDensity),
    box2d.b2ParticleSystem.prototype.GetDensity = function() {
        return this.m_def.density;
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "GetDensity", box2d.b2ParticleSystem.prototype.GetDensity),
    box2d.b2ParticleSystem.prototype.SetGravityScale = function(o) {
        this.m_def.gravityScale = o;
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "SetGravityScale", box2d.b2ParticleSystem.prototype.SetGravityScale),
    box2d.b2ParticleSystem.prototype.GetGravityScale = function() {
        return this.m_def.gravityScale;
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "GetGravityScale", box2d.b2ParticleSystem.prototype.GetGravityScale),
    box2d.b2ParticleSystem.prototype.SetDamping = function(o) {
        this.m_def.dampingStrength = o;
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "SetDamping", box2d.b2ParticleSystem.prototype.SetDamping),
    box2d.b2ParticleSystem.prototype.GetDamping = function() {
        return this.m_def.dampingStrength;
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "GetDamping", box2d.b2ParticleSystem.prototype.GetDamping),
    box2d.b2ParticleSystem.prototype.SetStaticPressureIterations = function(o) {
        this.m_def.staticPressureIterations = o;
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "SetStaticPressureIterations", box2d.b2ParticleSystem.prototype.SetStaticPressureIterations),
    box2d.b2ParticleSystem.prototype.GetStaticPressureIterations = function() {
        return this.m_def.staticPressureIterations;
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "GetStaticPressureIterations", box2d.b2ParticleSystem.prototype.GetStaticPressureIterations),
    box2d.b2ParticleSystem.prototype.SetRadius = function(o) {
        this.m_particleDiameter = 2 * o, this.m_squaredDiameter = this.m_particleDiameter * this.m_particleDiameter,
            this.m_inverseDiameter = 1 / this.m_particleDiameter;
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "SetRadius", box2d.b2ParticleSystem.prototype.SetRadius),
    box2d.b2ParticleSystem.prototype.GetRadius = function() {
        return this.m_particleDiameter / 2;
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "GetRadius", box2d.b2ParticleSystem.prototype.GetRadius),
    box2d.b2ParticleSystem.prototype.GetPositionBuffer = function() {
        return this.m_positionBuffer.data;
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "GetPositionBuffer", box2d.b2ParticleSystem.prototype.GetPositionBuffer),
    box2d.b2ParticleSystem.prototype.GetVelocityBuffer = function() {
        return this.m_velocityBuffer.data;
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "GetVelocityBuffer", box2d.b2ParticleSystem.prototype.GetVelocityBuffer),
    box2d.b2ParticleSystem.prototype.GetColorBuffer = function() {
        return this.m_colorBuffer.data = this.RequestBuffer(this.m_colorBuffer.data), this.m_colorBuffer.data;
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "GetColorBuffer", box2d.b2ParticleSystem.prototype.GetColorBuffer),
    box2d.b2ParticleSystem.prototype.GetGroupBuffer = function() {
        return this.m_groupBuffer;
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "GetGroupBuffer", box2d.b2ParticleSystem.prototype.GetGroupBuffer),
    box2d.b2ParticleSystem.prototype.GetWeightBuffer = function() {
        return this.m_weightBuffer;
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "GetWeightBuffer", box2d.b2ParticleSystem.prototype.GetWeightBuffer),
    box2d.b2ParticleSystem.prototype.GetUserDataBuffer = function() {
        return this.m_userDataBuffer.data = this.RequestBuffer(this.m_userDataBuffer.data),
            this.m_userDataBuffer.data;
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "GetUserDataBuffer", box2d.b2ParticleSystem.prototype.GetUserDataBuffer),
    box2d.b2ParticleSystem.prototype.GetFlagsBuffer = function() {
        return this.m_flagsBuffer.data;
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "GetFlagsBuffer", box2d.b2ParticleSystem.prototype.GetFlagsBuffer),
    box2d.b2ParticleSystem.prototype.SetParticleFlags = function(o, t) {
        this.m_flagsBuffer.data[o] & ~t && (this.m_needsUpdateAllParticleFlags = !0), ~this.m_allParticleFlags & t && (t & box2d.b2ParticleFlag.b2_tensileParticle && (this.m_accumulation2Buffer = this.RequestBuffer(this.m_accumulation2Buffer)),
            t & box2d.b2ParticleFlag.b2_colorMixingParticle && (this.m_colorBuffer.data = this.RequestBuffer(this.m_colorBuffer.data)),
            this.m_allParticleFlags |= t), this.m_flagsBuffer.data[o] = t;
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "SetParticleFlags", box2d.b2ParticleSystem.prototype.SetParticleFlags),
    box2d.b2ParticleSystem.prototype.GetParticleFlags = function(o) {
        return this.m_flagsBuffer.data[o];
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "GetParticleFlags", box2d.b2ParticleSystem.prototype.GetParticleFlags),
    box2d.b2ParticleSystem.prototype.SetFlagsBuffer = function(o, t) {
        this.SetUserOverridableBuffer(this.m_flagsBuffer, o, t);
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "SetFlagsBuffer", box2d.b2ParticleSystem.prototype.SetFlagsBuffer),
    box2d.b2ParticleSystem.prototype.SetPositionBuffer = function(o, t) {
        this.SetUserOverridableBuffer(this.m_positionBuffer, o, t);
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "SetPositionBuffer", box2d.b2ParticleSystem.prototype.SetPositionBuffer),
    box2d.b2ParticleSystem.prototype.SetVelocityBuffer = function(o, t) {
        this.SetUserOverridableBuffer(this.m_velocityBuffer, o, t);
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "SetVelocityBuffer", box2d.b2ParticleSystem.prototype.SetVelocityBuffer),
    box2d.b2ParticleSystem.prototype.SetColorBuffer = function(o, t) {
        this.SetUserOverridableBuffer(this.m_colorBuffer, o, t);
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "SetColorBuffer", box2d.b2ParticleSystem.prototype.SetColorBuffer),
    box2d.b2ParticleSystem.prototype.SetUserDataBuffer = function(o, t) {
        this.SetUserOverridableBuffer(this.m_userDataBuffer, o, t);
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "SetUserDataBuffer", box2d.b2ParticleSystem.prototype.SetUserDataBuffer),
    box2d.b2ParticleSystem.prototype.GetContacts = function() {
        return this.m_contactBuffer.data;
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "GetContacts", box2d.b2ParticleSystem.prototype.GetContacts),
    box2d.b2ParticleSystem.prototype.GetContactCount = function() {
        return this.m_contactBuffer.count;
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "GetContactCount", box2d.b2ParticleSystem.prototype.GetContactCount),
    box2d.b2ParticleSystem.prototype.GetBodyContacts = function() {
        return this.m_bodyContactBuffer.data;
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "GetBodyContacts", box2d.b2ParticleSystem.prototype.GetBodyContacts),
    box2d.b2ParticleSystem.prototype.GetBodyContactCount = function() {
        return this.m_bodyContactBuffer.count;
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "GetBodyContactCount", box2d.b2ParticleSystem.prototype.GetBodyContactCount),
    box2d.b2ParticleSystem.prototype.GetPairs = function() {
        return this.m_pairBuffer.data;
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "GetPairs", box2d.b2ParticleSystem.prototype.GetPairs),
    box2d.b2ParticleSystem.prototype.GetPairCount = function() {
        return this.m_pairBuffer.count;
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "GetPairCount", box2d.b2ParticleSystem.prototype.GetPairCount),
    box2d.b2ParticleSystem.prototype.GetTriads = function() {
        return this.m_triadBuffer.data;
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "GetTriads", box2d.b2ParticleSystem.prototype.GetTriads),
    box2d.b2ParticleSystem.prototype.GetTriadCount = function() {
        return this.m_triadBuffer.count;
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "GetTriadCount", box2d.b2ParticleSystem.prototype.GetTriadCount),
    box2d.b2ParticleSystem.prototype.SetStuckThreshold = function(o) {
        this.m_stuckThreshold = o, 0 < o && (this.m_lastBodyContactStepBuffer.data = this.RequestBuffer(this.m_lastBodyContactStepBuffer.data),
            this.m_bodyContactCountBuffer.data = this.RequestBuffer(this.m_bodyContactCountBuffer.data),
            this.m_consecutiveContactStepsBuffer.data = this.RequestBuffer(this.m_consecutiveContactStepsBuffer.data));
    }, box2d.b2ParticleSystem.prototype.GetStuckCandidates = function() {
        return this.m_stuckParticleBuffer.Data();
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "GetStuckCandidates", box2d.b2ParticleSystem.prototype.GetStuckCandidates),
    box2d.b2ParticleSystem.prototype.GetStuckCandidateCount = function() {
        return this.m_stuckParticleBuffer.GetCount();
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "GetStuckCandidateCount", box2d.b2ParticleSystem.prototype.GetStuckCandidateCount),
    box2d.b2ParticleSystem.prototype.ComputeCollisionEnergy = function() {
        for (var o = box2d.b2ParticleSystem.prototype.ComputeCollisionEnergy.s_v, t = this.m_velocityBuffer.data, e = 0, r = 0; r < this.m_contactBuffer.count; r++) {
            var i = (b = this.m_contactBuffer.data[r]).normal,
                b = box2d.b2Sub_V2_V2(t[b.indexB], t[b.indexA], o);
            0 > (i = box2d.b2Dot_V2_V2(b, i)) && (e += i * i);
        }
        return .5 * this.GetParticleMass() * e;
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "ComputeCollisionEnergy", box2d.b2ParticleSystem.prototype.ComputeCollisionEnergy),
    box2d.b2ParticleSystem.prototype.ComputeCollisionEnergy.s_v = new box2d.b2Vec2(),
    box2d.b2ParticleSystem.prototype.SetStrictContactCheck = function(o) {
        this.m_def.strictContactCheck = o;
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "SetStrictContactCheck", box2d.b2ParticleSystem.prototype.SetStrictContactCheck),
    box2d.b2ParticleSystem.prototype.GetStrictContactCheck = function() {
        return this.m_def.strictContactCheck;
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "GetStrictContactCheck", box2d.b2ParticleSystem.prototype.GetStrictContactCheck),
    box2d.b2ParticleSystem.prototype.SetParticleLifetime = function(o, t) {
        box2d.b2Assert(this.ValidateParticleIndex(o));
        var e = null === this.m_indexByExpirationTimeBuffer.data;
        if (this.m_expirationTimeBuffer.data = this.RequestBuffer(this.m_expirationTimeBuffer.data),
            this.m_indexByExpirationTimeBuffer.data = this.RequestBuffer(this.m_indexByExpirationTimeBuffer.data),
            e) {
            e = this.GetParticleCount();
            for (var r = 0; r < e; ++r) this.m_indexByExpirationTimeBuffer.data[r] = r;
        }
        (e = 0 < (e = t / this.m_def.lifetimeGranularity) ? this.GetQuantizedTimeElapsed() + e : e) !== this.m_expirationTimeBuffer.data[o] && (this.m_expirationTimeBuffer.data[o] = e,
            this.m_expirationTimeBufferRequiresSorting = !0);
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "SetParticleLifetime", box2d.b2ParticleSystem.prototype.SetParticleLifetime),
    box2d.b2ParticleSystem.prototype.GetParticleLifetime = function(o) {
        return box2d.b2Assert(this.ValidateParticleIndex(o)), this.ExpirationTimeToLifetime(this.GetExpirationTimeBuffer()[o]);
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "GetParticleLifetime", box2d.b2ParticleSystem.prototype.GetParticleLifetime),
    box2d.b2ParticleSystem.prototype.SetDestructionByAge = function(o) {
        o && this.GetExpirationTimeBuffer(), this.m_def.destroyByAge = o;
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "SetDestructionByAge", box2d.b2ParticleSystem.prototype.SetDestructionByAge),
    box2d.b2ParticleSystem.prototype.GetDestructionByAge = function() {
        return this.m_def.destroyByAge;
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "GetDestructionByAge", box2d.b2ParticleSystem.prototype.GetDestructionByAge),
    box2d.b2ParticleSystem.prototype.GetExpirationTimeBuffer = function() {
        return this.m_expirationTimeBuffer.data = this.RequestBuffer(this.m_expirationTimeBuffer.data),
            this.m_expirationTimeBuffer.data;
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "GetExpirationTimeBuffer", box2d.b2ParticleSystem.prototype.GetExpirationTimeBuffer),
    box2d.b2ParticleSystem.prototype.ExpirationTimeToLifetime = function(o) {
        return (0 < o ? o - this.GetQuantizedTimeElapsed() : o) * this.m_def.lifetimeGranularity;
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "ExpirationTimeToLifetime", box2d.b2ParticleSystem.prototype.ExpirationTimeToLifetime),
    box2d.b2ParticleSystem.prototype.GetIndexByExpirationTimeBuffer = function() {
        return this.GetParticleCount() ? this.SetParticleLifetime(0, this.GetParticleLifetime(0)) : this.m_indexByExpirationTimeBuffer.data = this.RequestBuffer(this.m_indexByExpirationTimeBuffer.data),
            this.m_indexByExpirationTimeBuffer.data;
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "GetIndexByExpirationTimeBuffer", box2d.b2ParticleSystem.prototype.GetIndexByExpirationTimeBuffer),
    box2d.b2ParticleSystem.prototype.ParticleApplyLinearImpulse = function(o, t) {
        this.ApplyLinearImpulse(o, o + 1, t);
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "ParticleApplyLinearImpulse", box2d.b2ParticleSystem.prototype.ParticleApplyLinearImpulse),
    box2d.b2ParticleSystem.prototype.ApplyLinearImpulse = function(o, t, e) {
        var r = this.m_velocityBuffer.data,
            i = (t - o) * this.GetParticleMass();
        for (e = e.Clone().SelfMul(1 / i); o < t; o++) r[o].SelfAdd(e);
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "ApplyLinearImpulse", box2d.b2ParticleSystem.prototype.ApplyLinearImpulse),
    box2d.b2ParticleSystem.IsSignificantForce = function(o) {
        return 0 !== o.x || 0 !== o.y;
    }, box2d.b2ParticleSystem.prototype.ParticleApplyForce = function(o, t) {
        box2d.b2ParticleSystem.IsSignificantForce(t) && this.ForceCanBeApplied(this.m_flagsBuffer.data[o]) && (this.PrepareForceBuffer(),
            this.m_forceBuffer[o].SelfAdd(t));
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "ParticleApplyForce", box2d.b2ParticleSystem.prototype.ParticleApplyForce),
    box2d.b2ParticleSystem.prototype.ApplyForce = function(o, t, e) {
        for (var r = 0, i = o; i < t; i++) r |= this.m_flagsBuffer.data[i];
        if (box2d.b2Assert(this.ForceCanBeApplied(r)), e = e.Clone().SelfMul(1 / (t - o)),
            box2d.b2ParticleSystem.IsSignificantForce(e))
            for (this.PrepareForceBuffer(), i = o; i < t; i++) this.m_forceBuffer[i].SelfAdd(e);
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "ApplyForce", box2d.b2ParticleSystem.prototype.ApplyForce),
    box2d.b2ParticleSystem.prototype.GetNext = function() {
        return this.m_next;
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "GetNext", box2d.b2ParticleSystem.prototype.GetNext),
    box2d.b2ParticleSystem.prototype.QueryAABB = function(o, t) {
        if (0 !== this.m_proxyBuffer.count)
            for (var e = this.m_proxyBuffer.count, r = box2d.std_lower_bound(this.m_proxyBuffer.data, 0, e, box2d.b2ParticleSystem.computeTag(this.m_inverseDiameter * t.lowerBound.x, this.m_inverseDiameter * t.lowerBound.y), box2d.b2ParticleSystem.Proxy.CompareProxyTag), i = (e = box2d.std_upper_bound(this.m_proxyBuffer.data, r, e, box2d.b2ParticleSystem.computeTag(this.m_inverseDiameter * t.upperBound.x, this.m_inverseDiameter * t.upperBound.y), box2d.b2ParticleSystem.Proxy.CompareTagProxy),
                    this.m_positionBuffer.data); r < e; ++r) {
                var b = this.m_proxyBuffer.data[r].index,
                    n = i[b];
                if (t.lowerBound.x < n.x && n.x < t.upperBound.x && t.lowerBound.y < n.y && n.y < t.upperBound.y && !o.ReportParticle(this, b)) break;
            }
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "QueryAABB", box2d.b2ParticleSystem.prototype.QueryAABB),
    box2d.b2ParticleSystem.prototype.QueryShapeAABB = function(o, t, e, r) {
        var i = box2d.b2ParticleSystem.prototype.QueryShapeAABB.s_aabb;
        t.ComputeAABB(i, e, r || 0), this.QueryAABB(o, i);
    };

goog.exportProperty(box2d.b2ParticleSystem.prototype, "QueryShapeAABB", box2d.b2ParticleSystem.prototype.QueryShapeAABB),
    box2d.b2ParticleSystem.prototype.QueryShapeAABB.s_aabb = new box2d.b2AABB(), box2d.b2ParticleSystem.prototype.QueryPointAABB = function(o, t, e) {
        var r = box2d.b2ParticleSystem.prototype.QueryPointAABB.s_aabb;
        e = "number" == typeof e ? e : box2d.b2_linearSlop, r.lowerBound.Set(t.x - e, t.y - e),
            r.upperBound.Set(t.x + e, t.y + e), this.QueryAABB(o, r);
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "QueryPointAABB", box2d.b2ParticleSystem.prototype.QueryPointAABB),
    box2d.b2ParticleSystem.prototype.QueryPointAABB.s_aabb = new box2d.b2AABB(), box2d.b2ParticleSystem.prototype.RayCast = function(o, t, e) {
        var r = box2d.b2ParticleSystem.prototype.RayCast.s_aabb,
            i = box2d.b2ParticleSystem.prototype.RayCast.s_p,
            b = box2d.b2ParticleSystem.prototype.RayCast.s_v,
            n = box2d.b2ParticleSystem.prototype.RayCast.s_n,
            p = box2d.b2ParticleSystem.prototype.RayCast.s_point;
        if (0 !== this.m_proxyBuffer.count) {
            var s = this.m_positionBuffer.data;
            box2d.b2Min_V2_V2(t, e, r.lowerBound), box2d.b2Max_V2_V2(t, e, r.upperBound);
            var a = 1;
            e = box2d.b2Sub_V2_V2(e, t, b);
            var d;
            for (b = box2d.b2Dot_V2_V2(e, e), r = this.GetInsideBoundsEnumerator(r); 0 <= (d = r.GetNext());) {
                var l = box2d.b2Sub_V2_V2(t, s[d], i),
                    x = box2d.b2Dot_V2_V2(l, e);
                if (0 <= (y = x * x - b * ((y = box2d.b2Dot_V2_V2(l, l)) - this.m_squaredDiameter))) {
                    var y, c = box2d.b2Sqrt(y);
                    if (!((y = (-x - c) / b) > a)) {
                        if (0 > y && (0 > (y = (-x + c) / b) || y > a)) continue;
                        if ((l = box2d.b2AddMul_V2_S_V2(l, y, e, n)).Normalize(), d = o.ReportParticle(this, d, box2d.b2AddMul_V2_S_V2(t, y, e, p), l, y),
                            0 >= (a = box2d.b2Min(a, d))) break;
                    }
                }
            }
        }
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "RayCast", box2d.b2ParticleSystem.prototype.RayCast),
    box2d.b2ParticleSystem.prototype.RayCast.s_aabb = new box2d.b2AABB(), box2d.b2ParticleSystem.prototype.RayCast.s_p = new box2d.b2Vec2(),
    box2d.b2ParticleSystem.prototype.RayCast.s_v = new box2d.b2Vec2(), box2d.b2ParticleSystem.prototype.RayCast.s_n = new box2d.b2Vec2(),
    box2d.b2ParticleSystem.prototype.RayCast.s_point = new box2d.b2Vec2(), box2d.b2ParticleSystem.prototype.ComputeAABB = function(o) {
        var t = this.GetParticleCount();
        box2d.b2Assert(null !== o), o.lowerBound.x = +box2d.b2_maxFloat, o.lowerBound.y = +box2d.b2_maxFloat,
            o.upperBound.x = -box2d.b2_maxFloat, o.upperBound.y = -box2d.b2_maxFloat;
        for (var e = this.m_positionBuffer.data, r = 0; r < t; r++) {
            var i = e[r];
            box2d.b2Min_V2_V2(o.lowerBound, i, o.lowerBound), box2d.b2Max_V2_V2(o.upperBound, i, o.upperBound);
        }
        o.lowerBound.x -= this.m_particleDiameter, o.lowerBound.y -= this.m_particleDiameter,
            o.upperBound.x += this.m_particleDiameter, o.upperBound.y += this.m_particleDiameter;
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "ComputeAABB", box2d.b2ParticleSystem.prototype.ComputeAABB),
    box2d.b2ParticleSystem.UserOverridableBuffer = function() {}, box2d.b2ParticleSystem.UserOverridableBuffer.prototype.data = null,
    box2d.b2ParticleSystem.UserOverridableBuffer.prototype.userSuppliedCapacity = 0,
    box2d.b2ParticleSystem.Proxy = function() {}, box2d.b2ParticleSystem.Proxy.prototype.index = box2d.b2_invalidParticleIndex,
    box2d.b2ParticleSystem.Proxy.prototype.tag = 0, box2d.b2ParticleSystem.Proxy.CompareProxyProxy = function(o, t) {
        return o.tag < t.tag;
    }, box2d.b2ParticleSystem.Proxy.CompareTagProxy = function(o, t) {
        return o < t.tag;
    }, box2d.b2ParticleSystem.Proxy.CompareProxyTag = function(o, t) {
        return o.tag < t;
    }, box2d.b2ParticleSystem.InsideBoundsEnumerator = function(o, t, e, r, i) {
        this.m_system = o, this.m_xLower = (t & box2d.b2ParticleSystem.xMask) >>> 0, this.m_xUpper = (e & box2d.b2ParticleSystem.xMask) >>> 0,
            this.m_yLower = (t & box2d.b2ParticleSystem.yMask) >>> 0, this.m_yUpper = (e & box2d.b2ParticleSystem.yMask) >>> 0,
            this.m_first = r, this.m_last = i, box2d.b2Assert(this.m_first <= this.m_last);
    }, box2d.b2ParticleSystem.InsideBoundsEnumerator.prototype.GetNext = function() {
        for (; this.m_first < this.m_last;) {
            var o = (this.m_system.m_proxyBuffer.data[this.m_first].tag & box2d.b2ParticleSystem.xMask) >>> 0,
                t = (this.m_system.m_proxyBuffer.data[this.m_first].tag & box2d.b2ParticleSystem.yMask) >>> 0;
            if (box2d.b2Assert(t >= this.m_yLower), box2d.b2Assert(t <= this.m_yUpper), o >= this.m_xLower && o <= this.m_xUpper) return this.m_system.m_proxyBuffer.data[this.m_first++].index;
            this.m_first++;
        }
        return box2d.b2_invalidParticleIndex;
    }, box2d.b2ParticleSystem.ParticleListNode = function() {}, box2d.b2ParticleSystem.ParticleListNode.prototype.list = null,
    box2d.b2ParticleSystem.ParticleListNode.prototype.next = null, box2d.b2ParticleSystem.ParticleListNode.prototype.count = 0,
    box2d.b2ParticleSystem.ParticleListNode.prototype.index = 0, box2d.b2ParticleSystem.k_pairFlags = box2d.b2ParticleFlag.b2_springParticle,
    box2d.b2ParticleSystem.k_triadFlags = box2d.b2ParticleFlag.b2_elasticParticle, box2d.b2ParticleSystem.k_noPressureFlags = box2d.b2ParticleFlag.b2_powderParticle | box2d.b2ParticleFlag.b2_tensileParticle,
    box2d.b2ParticleSystem.k_extraDampingFlags = box2d.b2ParticleFlag.b2_staticPressureParticle,
    box2d.b2ParticleSystem.k_barrierWallFlags = box2d.b2ParticleFlag.b2_barrierParticle | box2d.b2ParticleFlag.b2_wallParticle,
    box2d.b2ParticleSystem.prototype.FreeBuffer = function(o, t) {
        null !== o && (o.length = 0);
    }, box2d.b2ParticleSystem.prototype.FreeUserOverridableBuffer = function(o) {
        0 == o.userSuppliedCapacity && this.FreeBuffer(o.data, this.m_internalAllocatedCapacity);
    }, box2d.b2ParticleSystem.prototype.ReallocateBuffer3 = function(o, t, e) {
        return box2d.b2Assert(e > t), (o = o ? o.slice() : []).length = e, o;
    }, box2d.b2ParticleSystem.prototype.ReallocateBuffer5 = function(o, t, e, r, i) {
        return box2d.b2Assert(r > e), box2d.b2Assert(!t || r <= t), i && !o || t || (o = this.ReallocateBuffer3(o, e, r)),
            o;
    }, box2d.b2ParticleSystem.prototype.ReallocateBuffer4 = function(o, t, e, r) {
        return box2d.b2Assert(e > t), this.ReallocateBuffer5(o.data, o.userSuppliedCapacity, t, e, r);
    }, box2d.b2ParticleSystem.prototype.RequestBuffer = function(o) {
        return o || (0 === this.m_internalAllocatedCapacity && this.ReallocateInternalAllocatedBuffers(box2d.b2_minParticleSystemBufferCapacity),
            (o = []).length = this.m_internalAllocatedCapacity), o;
    }, box2d.b2ParticleSystem.prototype.ReallocateHandleBuffers = function(o) {
        box2d.b2Assert(o > this.m_internalAllocatedCapacity), this.m_handleIndexBuffer.data = this.ReallocateBuffer4(this.m_handleIndexBuffer, this.m_internalAllocatedCapacity, o, !0);
    }, box2d.b2ParticleSystem.prototype.ReallocateInternalAllocatedBuffers = function(o) {
        function b(o, t) {
            return t && o > t ? t : o;
        }
        if (o = b(o, this.m_def.maxCount), o = b(o, this.m_flagsBuffer.userSuppliedCapacity),
            o = b(o, this.m_positionBuffer.userSuppliedCapacity), o = b(o, this.m_velocityBuffer.userSuppliedCapacity),
            o = b(o, this.m_colorBuffer.userSuppliedCapacity), o = b(o, this.m_userDataBuffer.userSuppliedCapacity),
            this.m_internalAllocatedCapacity < o) {
            this.ReallocateHandleBuffers(o), this.m_flagsBuffer.data = this.ReallocateBuffer4(this.m_flagsBuffer, this.m_internalAllocatedCapacity, o, !1);
            var t = 0 < this.m_stuckThreshold;
            this.m_lastBodyContactStepBuffer.data = this.ReallocateBuffer4(this.m_lastBodyContactStepBuffer, this.m_internalAllocatedCapacity, o, t),
                this.m_bodyContactCountBuffer.data = this.ReallocateBuffer4(this.m_bodyContactCountBuffer, this.m_internalAllocatedCapacity, o, t),
                this.m_consecutiveContactStepsBuffer.data = this.ReallocateBuffer4(this.m_consecutiveContactStepsBuffer, this.m_internalAllocatedCapacity, o, t),
                this.m_positionBuffer.data = this.ReallocateBuffer4(this.m_positionBuffer, this.m_internalAllocatedCapacity, o, !1),
                this.m_velocityBuffer.data = this.ReallocateBuffer4(this.m_velocityBuffer, this.m_internalAllocatedCapacity, o, !1),
                this.m_forceBuffer = this.ReallocateBuffer5(this.m_forceBuffer, 0, this.m_internalAllocatedCapacity, o, !1),
                this.m_weightBuffer = this.ReallocateBuffer5(this.m_weightBuffer, 0, this.m_internalAllocatedCapacity, o, !1),
                this.m_staticPressureBuffer = this.ReallocateBuffer5(this.m_staticPressureBuffer, 0, this.m_internalAllocatedCapacity, o, !0),
                this.m_accumulationBuffer = this.ReallocateBuffer5(this.m_accumulationBuffer, 0, this.m_internalAllocatedCapacity, o, !1),
                this.m_accumulation2Buffer = this.ReallocateBuffer5(this.m_accumulation2Buffer, 0, this.m_internalAllocatedCapacity, o, !0),
                this.m_depthBuffer = this.ReallocateBuffer5(this.m_depthBuffer, 0, this.m_internalAllocatedCapacity, o, !0),
                this.m_colorBuffer.data = this.ReallocateBuffer4(this.m_colorBuffer, this.m_internalAllocatedCapacity, o, !0),
                this.m_groupBuffer = this.ReallocateBuffer5(this.m_groupBuffer, 0, this.m_internalAllocatedCapacity, o, !1),
                this.m_userDataBuffer.data = this.ReallocateBuffer4(this.m_userDataBuffer, this.m_internalAllocatedCapacity, o, !0),
                this.m_expirationTimeBuffer.data = this.ReallocateBuffer4(this.m_expirationTimeBuffer, this.m_internalAllocatedCapacity, o, !0),
                this.m_indexByExpirationTimeBuffer.data = this.ReallocateBuffer4(this.m_indexByExpirationTimeBuffer, this.m_internalAllocatedCapacity, o, !1),
                this.m_internalAllocatedCapacity = o;
        }
    }, box2d.b2ParticleSystem.prototype.CreateParticleForGroup = function(o, t, e) {
        var r = new box2d.b2ParticleDef();
        r.flags = o.flags, box2d.b2Mul_X_V2(t, e, r.position), box2d.b2Add_V2_V2(o.linearVelocity, box2d.b2Cross_S_V2(o.angularVelocity, box2d.b2Sub_V2_V2(r.position, o.position, box2d.b2Vec2.s_t0), box2d.b2Vec2.s_t0), r.velocity),
            r.color.Copy(o.color), r.lifetime = o.lifetime, r.userData = o.userData, this.CreateParticle(r);
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "CreateParticleForGroup", box2d.b2ParticleSystem.prototype.CreateParticleForGroup),
    box2d.b2ParticleSystem.prototype.CreateParticlesStrokeShapeForGroup = function(o, t, e) {
        var r = box2d.b2ParticleSystem.prototype.CreateParticlesStrokeShapeForGroup.s_edge,
            i = box2d.b2ParticleSystem.prototype.CreateParticlesStrokeShapeForGroup.s_d,
            b = box2d.b2ParticleSystem.prototype.CreateParticlesStrokeShapeForGroup.s_p,
            n = t.stride;
        0 === n && (n = this.GetParticleStride());
        for (var p = 0, s = o.GetChildCount(), a = 0; a < s; a++) {
            var d = null;
            o.GetType() === box2d.b2ShapeType.e_edgeShape ? d = o : (box2d.b2Assert(o.GetType() === box2d.b2ShapeType.e_chainShape),
                d = r, o.GetChildEdge(d, a));
            for (var l = box2d.b2Sub_V2_V2(d.m_vertex2, d.m_vertex1, i), x = l.Length(); p < x;) {
                var y = box2d.b2AddMul_V2_S_V2(d.m_vertex1, p / x, l, b);
                this.CreateParticleForGroup(t, e, y), p += n;
            }
            p -= x;
        }
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "CreateParticlesStrokeShapeForGroup", box2d.b2ParticleSystem.prototype.CreateParticlesStrokeShapeForGroup),
    box2d.b2ParticleSystem.prototype.CreateParticlesStrokeShapeForGroup.s_edge = new box2d.b2EdgeShape(),
    box2d.b2ParticleSystem.prototype.CreateParticlesStrokeShapeForGroup.s_d = new box2d.b2Vec2(),
    box2d.b2ParticleSystem.prototype.CreateParticlesStrokeShapeForGroup.s_p = new box2d.b2Vec2(),
    box2d.b2ParticleSystem.prototype.CreateParticlesFillShapeForGroup = function(o, t, e) {
        var r = box2d.b2ParticleSystem.prototype.CreateParticlesFillShapeForGroup.s_aabb,
            i = box2d.b2ParticleSystem.prototype.CreateParticlesFillShapeForGroup.s_p,
            b = t.stride;
        0 === b && (b = this.GetParticleStride());
        var n = box2d.b2Transform.IDENTITY;
        box2d.b2Assert(1 === o.GetChildCount()), o.ComputeAABB(r, n, 0);
        for (var p = Math.floor(r.lowerBound.y / b) * b; p < r.upperBound.y; p += b)
            for (var s = Math.floor(r.lowerBound.x / b) * b; s < r.upperBound.x; s += b) {
                var a = i.Set(s, p);
                o.TestPoint(n, a) && this.CreateParticleForGroup(t, e, a);
            }
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "CreateParticlesFillShapeForGroup", box2d.b2ParticleSystem.prototype.CreateParticlesFillShapeForGroup),
    box2d.b2ParticleSystem.prototype.CreateParticlesFillShapeForGroup.s_aabb = new box2d.b2AABB(),
    box2d.b2ParticleSystem.prototype.CreateParticlesFillShapeForGroup.s_p = new box2d.b2Vec2(),
    box2d.b2ParticleSystem.prototype.CreateParticlesWithShapeForGroup = function(o, t, e) {
        switch (o.GetType()) {
            case box2d.b2ShapeType.e_edgeShape:
            case box2d.b2ShapeType.e_chainShape:
                this.CreateParticlesStrokeShapeForGroup(o, t, e);
                break;

            case box2d.b2ShapeType.e_polygonShape:
            case box2d.b2ShapeType.e_circleShape:
                this.CreateParticlesFillShapeForGroup(o, t, e);
                break;

            default:
                box2d.b2Assert(!1);
        }
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "CreateParticlesWithShapeForGroup", box2d.b2ParticleSystem.prototype.CreateParticlesWithShapeForGroup),
    box2d.b2ParticleSystem.CompositeShape = function(o, t) {
        this.m_shapes = o, this.m_shapeCount = t;
    }, goog.inherits(box2d.b2ParticleSystem.CompositeShape, box2d.b2Shape), box2d.b2ParticleSystem.CompositeShape.prototype.m_shapes = null,
    box2d.b2ParticleSystem.CompositeShape.prototype.m_shapeCount = 0, box2d.b2ParticleSystem.CompositeShape.prototype.Clone = function() {
        return box2d.b2Assert(!1), null;
    }, box2d.b2ParticleSystem.CompositeShape.prototype.GetChildCount = function() {
        return 1;
    }, box2d.b2ParticleSystem.CompositeShape.prototype.TestPoint = function(o, t) {
        for (var e = 0; e < this.m_shapeCount; e++)
            if (this.m_shapes[e].TestPoint(o, t)) return !0;
        return !1;
    }, goog.exportProperty(box2d.b2ParticleSystem.CompositeShape.prototype, "TestPoint", box2d.b2ParticleSystem.CompositeShape.prototype.TestPoint),
    box2d.b2ParticleSystem.CompositeShape.prototype.ComputeDistance = function(o, t, e, r) {
        return box2d.b2Assert(!1), 0;
    }, goog.exportProperty(box2d.b2ParticleSystem.CompositeShape.prototype, "ComputeDistance", box2d.b2ParticleSystem.CompositeShape.prototype.ComputeDistance),
    box2d.b2ParticleSystem.CompositeShape.prototype.RayCast = function(o, t, e, r) {
        return box2d.b2Assert(!1), !1;
    }, goog.exportProperty(box2d.b2ParticleSystem.CompositeShape.prototype, "RayCast", box2d.b2ParticleSystem.CompositeShape.prototype.RayCast),
    box2d.b2ParticleSystem.CompositeShape.prototype.ComputeAABB = function(o, t, e) {
        var r = new box2d.b2AABB();
        for (o.lowerBound.x = +box2d.b2_maxFloat, o.lowerBound.y = +box2d.b2_maxFloat, o.upperBound.x = -box2d.b2_maxFloat,
            o.upperBound.y = -box2d.b2_maxFloat, box2d.b2Assert(0 === e), e = 0; e < this.m_shapeCount; e++)
            for (var i = this.m_shapes[e].GetChildCount(), b = 0; b < i; b++) {
                var n = r;
                this.m_shapes[e].ComputeAABB(n, t, b), o.Combine1(n);
            }
    }, goog.exportProperty(box2d.b2ParticleSystem.CompositeShape.prototype, "ComputeAABB", box2d.b2ParticleSystem.CompositeShape.prototype.ComputeAABB),
    box2d.b2ParticleSystem.CompositeShape.prototype.ComputeMass = function(o, t) {
        box2d.b2Assert(!1);
    }, goog.exportProperty(box2d.b2ParticleSystem.CompositeShape.prototype, "ComputeMass", box2d.b2ParticleSystem.CompositeShape.prototype.ComputeMass),
    box2d.b2ParticleSystem.prototype.CreateParticlesWithShapesForGroup = function(o, t, e, r) {
        o = new box2d.b2ParticleSystem.CompositeShape(o, t), this.CreateParticlesFillShapeForGroup(o, e, r);
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "CreateParticlesWithShapesForGroup", box2d.b2ParticleSystem.prototype.CreateParticlesWithShapesForGroup),
    box2d.b2ParticleSystem.prototype.CloneParticle = function(o, t) {
        var e = new box2d.b2ParticleDef();
        if (e.flags = this.m_flagsBuffer.data[o], e.position.Copy(this.m_positionBuffer.data[o]),
            e.velocity.Copy(this.m_velocityBuffer.data[o]), this.m_colorBuffer.data && e.color.Copy(this.m_colorBuffer.data[o]),
            this.m_userDataBuffer.data && (e.userData = this.m_userDataBuffer.data[o]), e.group = t,
            e = this.CreateParticle(e), this.m_handleIndexBuffer.data) {
            var r = this.m_handleIndexBuffer.data[o];
            r && r.SetIndex(e), this.m_handleIndexBuffer.data[e] = r, this.m_handleIndexBuffer.data[o] = null;
        }
        return this.m_lastBodyContactStepBuffer.data && (this.m_lastBodyContactStepBuffer.data[e] = this.m_lastBodyContactStepBuffer.data[o]),
            this.m_bodyContactCountBuffer.data && (this.m_bodyContactCountBuffer.data[e] = this.m_bodyContactCountBuffer.data[o]),
            this.m_consecutiveContactStepsBuffer.data && (this.m_consecutiveContactStepsBuffer.data[e] = this.m_consecutiveContactStepsBuffer.data[o]),
            this.m_hasForce && this.m_forceBuffer[e].Copy(this.m_forceBuffer[o]), this.m_staticPressureBuffer && (this.m_staticPressureBuffer[e] = this.m_staticPressureBuffer[o]),
            this.m_depthBuffer && (this.m_depthBuffer[e] = this.m_depthBuffer[o]), this.m_expirationTimeBuffer.data && (this.m_expirationTimeBuffer.data[e] = this.m_expirationTimeBuffer.data[o]),
            e;
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "CloneParticle", box2d.b2ParticleSystem.prototype.CloneParticle),
    box2d.b2ParticleSystem.prototype.DestroyParticlesInGroup = function(o, t) {
        for (var e = o.m_firstIndex; e < o.m_lastIndex; e++) this.DestroyParticle(e, t);
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "DestroyParticlesInGroup", box2d.b2ParticleSystem.prototype.DestroyParticlesInGroup),
    box2d.b2ParticleSystem.prototype.DestroyParticleGroup = function(o) {
        box2d.b2Assert(0 < this.m_groupCount), box2d.b2Assert(null !== o), this.m_world.m_destructionListener && this.m_world.m_destructionListener.SayGoodbyeParticleGroup(o),
            this.SetGroupFlags(o, 0);
        for (var t = o.m_firstIndex; t < o.m_lastIndex; t++) this.m_groupBuffer[t] = null;
        o.m_prev && (o.m_prev.m_next = o.m_next), o.m_next && (o.m_next.m_prev = o.m_prev),
            o === this.m_groupList && (this.m_groupList = o.m_next), --this.m_groupCount;
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "DestroyParticleGroup", box2d.b2ParticleSystem.prototype.DestroyParticleGroup),
    box2d.b2ParticleSystem.ParticleCanBeConnected = function(o, t) {
        return 0 != (o & (box2d.b2ParticleFlag.b2_wallParticle | box2d.b2ParticleFlag.b2_springParticle | box2d.b2ParticleFlag.b2_elasticParticle)) || null !== t && 0 != (t.GetGroupFlags() & box2d.b2ParticleGroupFlag.b2_rigidParticleGroup);
    }, box2d.b2ParticleSystem.prototype.UpdatePairsAndTriads = function(o, t, e) {
        var r = box2d.b2ParticleSystem.prototype.UpdatePairsAndTriads.s_dab,
            i = box2d.b2ParticleSystem.prototype.UpdatePairsAndTriads.s_dbc,
            b = box2d.b2ParticleSystem.prototype.UpdatePairsAndTriads.s_dca,
            n = this.m_positionBuffer.data;
        box2d.b2Assert(o <= t);
        for (var p = 0, s = o; s < t; s++) p |= this.m_flagsBuffer.data[s];
        if (p & box2d.b2ParticleSystem.k_pairFlags)
            for (s = 0; s < this.m_contactBuffer.count; s++) {
                var a = this.m_contactBuffer.data[s],
                    d = a.indexA,
                    l = a.indexB,
                    x = this.m_flagsBuffer.data[d],
                    y = this.m_flagsBuffer.data[l],
                    c = this.m_groupBuffer[d],
                    _ = this.m_groupBuffer[l];
                d >= o && d < t && l >= o && l < t && !((x | y) & box2d.b2ParticleFlag.b2_zombieParticle) && (x | y) & box2d.b2ParticleSystem.k_pairFlags && (e.IsNecessary(d) || e.IsNecessary(l)) && box2d.b2ParticleSystem.ParticleCanBeConnected(x, c) && box2d.b2ParticleSystem.ParticleCanBeConnected(y, _) && e.ShouldCreatePair(d, l) && ((x = this.m_pairBuffer.data[this.m_pairBuffer.Append()]).indexA = d,
                        x.indexB = l, x.flags = a.flags, x.strength = box2d.b2Min(c ? c.m_strength : 1, _ ? _.m_strength : 1),
                        x.distance = box2d.b2Distance(n[d], n[l])), box2d.std_stable_sort(this.m_pairBuffer.data, 0, this.m_pairBuffer.count, box2d.b2ParticleSystem.ComparePairIndices),
                    this.m_pairBuffer.Unique(box2d.b2ParticleSystem.MatchPairIndices);
            }
        if (p & box2d.b2ParticleSystem.k_triadFlags) {
            for (p = new box2d.b2VoronoiDiagram(t - o), a = 0, s = o; s < t; s++) d = this.m_flagsBuffer.data[s],
                l = this.m_groupBuffer[s], d & box2d.b2ParticleFlag.b2_zombieParticle || !box2d.b2ParticleSystem.ParticleCanBeConnected(d, l) || (e.IsNecessary(s) && ++a,
                    p.AddGenerator(n[s], s, e.IsNecessary(s)));
            if (0 === a)
                for (s = o; s < t; s++) e.IsNecessary(s);
            o = this.GetParticleStride(), p.Generate(o / 2, 2 * o);
            var m = this;
            p.GetNodes(function(o, t, p) {
                    var s = m.m_flagsBuffer.data[o],
                        a = m.m_flagsBuffer.data[t],
                        d = m.m_flagsBuffer.data[p];
                    if ((s | a | d) & box2d.b2ParticleSystem.k_triadFlags && e.ShouldCreateTriad(o, t, p)) {
                        var l = n[o],
                            x = n[t],
                            y = n[p],
                            c = box2d.b2Sub_V2_V2(l, x, r),
                            _ = box2d.b2Sub_V2_V2(x, y, i),
                            u = box2d.b2Sub_V2_V2(y, l, b),
                            h = box2d.b2_maxTriadDistanceSquared * m.m_squaredDiameter;
                        if (!(box2d.b2Dot_V2_V2(c, c) > h || box2d.b2Dot_V2_V2(_, _) > h || box2d.b2Dot_V2_V2(u, u) > h)) {
                            var g = m.m_groupBuffer[o],
                                f = m.m_groupBuffer[t],
                                S = m.m_groupBuffer[p];
                            (h = m.m_triadBuffer.data[m.m_triadBuffer.Append()]).indexA = o, h.indexB = t, h.indexC = p,
                                h.flags = s | a | d, h.strength = box2d.b2Min(box2d.b2Min(g ? g.m_strength : 1, f ? f.m_strength : 1), S ? S.m_strength : 1),
                                o = (l.x + x.x + y.x) / 3, t = (l.y + x.y + y.y) / 3, h.pa.x = l.x - o, h.pa.y = l.y - t,
                                h.pb.x = x.x - o, h.pb.y = x.y - t, h.pc.x = y.x - o, h.pc.y = y.y - t, h.ka = -box2d.b2Dot_V2_V2(u, c),
                                h.kb = -box2d.b2Dot_V2_V2(c, _), h.kc = -box2d.b2Dot_V2_V2(_, u), h.s = box2d.b2Cross_V2_V2(l, x) + box2d.b2Cross_V2_V2(x, y) + box2d.b2Cross_V2_V2(y, l);
                        }
                    }
                }), box2d.std_stable_sort(this.m_triadBuffer.data, 0, this.m_triadBuffer.count, box2d.b2ParticleSystem.CompareTriadIndices),
                this.m_triadBuffer.Unique(box2d.b2ParticleSystem.MatchTriadIndices);
        }
    }, box2d.b2ParticleSystem.prototype.UpdatePairsAndTriads.s_dab = new box2d.b2Vec2(),
    box2d.b2ParticleSystem.prototype.UpdatePairsAndTriads.s_dbc = new box2d.b2Vec2(),
    box2d.b2ParticleSystem.prototype.UpdatePairsAndTriads.s_dca = new box2d.b2Vec2(),
    box2d.b2ParticleSystem.ReactiveFilter = function(o) {
        this.m_flagsBuffer = o;
    }, goog.inherits(box2d.b2ParticleSystem.ReactiveFilter, box2d.b2ParticleSystem.ConnectionFilter),
    box2d.b2ParticleSystem.ReactiveFilter.prototype.m_flagsBuffer = null, box2d.b2ParticleSystem.ReactiveFilter.prototype.IsNecessary = function(o) {
        return 0 != (this.m_flagsBuffer[o] & box2d.b2ParticleFlag.b2_reactiveParticle);
    }, box2d.b2ParticleSystem.prototype.UpdatePairsAndTriadsWithReactiveParticles = function() {
        var o = new box2d.b2ParticleSystem.ReactiveFilter(this.m_flagsBuffer);
        for (this.UpdatePairsAndTriads(0, this.m_count, o), o = 0; o < this.m_count; o++) this.m_flagsBuffer.data[o] &= ~box2d.b2ParticleFlag.b2_reactiveParticle;
        this.m_allParticleFlags &= ~box2d.b2ParticleFlag.b2_reactiveParticle;
    }, box2d.b2ParticleSystem.ComparePairIndices = function(o, t) {
        var e = o.indexA - t.indexA;
        return 0 !== e ? 0 > e : o.indexB < t.indexB;
    }, box2d.b2ParticleSystem.MatchPairIndices = function(o, t) {
        return o.indexA === t.indexA && o.indexB === t.indexB;
    }, box2d.b2ParticleSystem.CompareTriadIndices = function(o, t) {
        var e = o.indexA - t.indexA;
        return 0 !== e ? 0 > e : 0 !== (e = o.indexB - t.indexB) ? 0 > e : o.indexC < t.indexC;
    }, box2d.b2ParticleSystem.MatchTriadIndices = function(o, t) {
        return o.indexA === t.indexA && o.indexB === t.indexB && o.indexC === t.indexC;
    }, box2d.b2ParticleSystem.InitializeParticleLists = function(o, t) {
        for (var e = o.GetBufferIndex(), r = o.GetParticleCount(), i = 0; i < r; i++) {
            var b = t[i];
            b.list = b, b.next = null, b.count = 1, b.index = i + e;
        }
    }, box2d.b2ParticleSystem.prototype.MergeParticleListsInContact = function(o, t) {
        for (var e = o.GetBufferIndex(), r = 0; r < this.m_contactBuffer.count; r++) {
            var i = (b = this.m_contactBuffer.data[r]).indexA,
                b = b.indexB;
            if (o.ContainsParticle(i) && o.ContainsParticle(b) && (i = t[i - e].list) !== (b = t[b - e].list)) {
                if (i.count < b.count) {
                    var n = i;
                    i = b, b = n;
                }
                box2d.b2Assert(i.count >= b.count), box2d.b2ParticleSystem.MergeParticleLists(i, b);
            }
        }
    }, box2d.b2ParticleSystem.MergeParticleLists = function(o, t) {
        box2d.b2Assert(o !== t);
        for (var e = t;;) {
            e.list = o;
            var r = e.next;
            if (!r) {
                e.next = o.next;
                break;
            }
            e = r;
        }
        o.next = t, o.count += t.count, t.count = 0;
    }, box2d.b2ParticleSystem.FindLongestParticleList = function(o, t) {
        for (var e = o.GetParticleCount(), r = t[0], i = 0; i < e; i++) {
            var b = t[i];
            r.count < b.count && (r = b);
        }
        return r;
    }, box2d.b2ParticleSystem.prototype.MergeZombieParticleListNodes = function(o, t, e) {
        o = o.GetParticleCount();
        for (var r = 0; r < o; r++) {
            var i = t[r];
            i !== e && this.m_flagsBuffer.data[i.index] & box2d.b2ParticleFlag.b2_zombieParticle && box2d.b2ParticleSystem.MergeParticleListAndNode(e, i);
        }
    }, box2d.b2ParticleSystem.MergeParticleListAndNode = function(o, t) {
        box2d.b2Assert(t !== o), box2d.b2Assert(t.list === t), box2d.b2Assert(1 === t.count),
            t.list = o, t.next = o.next, o.next = t, o.count++, t.count = 0;
    }, box2d.b2ParticleSystem.prototype.CreateParticleGroupsFromParticleList = function(o, t, e) {
        var r = o.GetParticleCount(),
            i = new box2d.b2ParticleGroupDef();
        for (i.groupFlags = o.GetGroupFlags(), i.userData = o.GetUserData(), o = 0; o < r; o++) {
            var b = t[o];
            if (b.count && b !== e) {
                box2d.b2Assert(b.list === b);
                for (var n = this.CreateParticleGroup(i); b; b = b.next) {
                    var p = b.index;
                    box2d.b2Assert(!(this.m_flagsBuffer.data[p] & box2d.b2ParticleFlag.b2_zombieParticle));
                    var s = this.CloneParticle(p, n);
                    this.m_flagsBuffer.data[p] |= box2d.b2ParticleFlag.b2_zombieParticle, b.index = s;
                }
            }
        }
    }, box2d.b2ParticleSystem.prototype.UpdatePairsAndTriadsWithParticleList = function(o, t) {
        for (var e = o.GetBufferIndex(), r = 0; r < this.m_pairBuffer.count; r++) {
            var i = (n = this.m_pairBuffer.data[r]).indexA,
                b = n.indexB;
            o.ContainsParticle(i) && (n.indexA = t[i - e].index), o.ContainsParticle(b) && (n.indexB = t[b - e].index);
        }
        for (r = 0; r < this.m_triadBuffer.count; r++) {
            i = (n = this.m_triadBuffer.data[r]).indexA, b = n.indexB;
            var n, p = n.indexC;
            o.ContainsParticle(i) && (n.indexA = t[i - e].index), o.ContainsParticle(b) && (n.indexB = t[b - e].index),
                o.ContainsParticle(p) && (n.indexC = t[p - e].index);
        }
    }, box2d.b2ParticleSystem.prototype.ComputeDepth = function() {
        for (var o = [], t = 0, e = 0; e < this.m_contactBuffer.count; e++) {
            var r = (l = this.m_contactBuffer.data[e]).indexA,
                i = l.indexB,
                b = this.m_groupBuffer[r],
                n = this.m_groupBuffer[i];
            b && b === n && b.m_groupFlags & box2d.b2ParticleGroupFlag.b2_particleGroupNeedsUpdateDepth && (o[t++] = l);
        }
        for (b = [], n = 0, e = this.m_groupList; e; e = e.GetNext())
            if (e.m_groupFlags & box2d.b2ParticleGroupFlag.b2_particleGroupNeedsUpdateDepth)
                for (b[n++] = e,
                    this.SetGroupFlags(e, e.m_groupFlags & ~box2d.b2ParticleGroupFlag.b2_particleGroupNeedsUpdateDepth),
                    i = e.m_firstIndex; i < e.m_lastIndex; i++) this.m_accumulationBuffer[i] = 0;
        for (e = 0; e < t; e++) {
            r = (l = o[e]).indexA, i = l.indexB;
            var p = l.weight;
            this.m_accumulationBuffer[r] += p, this.m_accumulationBuffer[i] += p;
        }
        for (box2d.b2Assert(null !== this.m_depthBuffer), i = 0; i < n; i++)
            for (i = (e = b[i]).m_firstIndex; i < e.m_lastIndex; i++) p = this.m_accumulationBuffer[i],
                this.m_depthBuffer[i] = .8 > p ? 0 : box2d.b2_maxFloat;
        p = box2d.b2Sqrt(this.m_count) >> 0;
        for (var s = 0; s < p; s++) {
            var a = !1;
            for (e = 0; e < t; e++) {
                r = (l = o[e]).indexA, i = l.indexB;
                var d = 1 - l.weight,
                    l = this.m_depthBuffer[r],
                    x = this.m_depthBuffer[i],
                    y = x + d;
                d = l + d;
                l > y && (this.m_depthBuffer[r] = y, a = !0), x > d && (this.m_depthBuffer[i] = d,
                    a = !0);
            }
            if (!a) break;
        }
        for (i = 0; i < n; i++)
            for (i = (e = b[i]).m_firstIndex; i < e.m_lastIndex; i++) this.m_depthBuffer[i] = this.m_depthBuffer[i] < box2d.b2_maxFloat ? this.m_depthBuffer[i] * this.m_particleDiameter : 0;
    }, box2d.b2ParticleSystem.prototype.GetInsideBoundsEnumerator = function(o) {
        var t = box2d.b2ParticleSystem.computeTag(this.m_inverseDiameter * o.lowerBound.x - 1, this.m_inverseDiameter * o.lowerBound.y - 1);
        o = box2d.b2ParticleSystem.computeTag(this.m_inverseDiameter * o.upperBound.x + 1, this.m_inverseDiameter * o.upperBound.y + 1);
        var e = this.m_proxyBuffer.count,
            r = box2d.std_lower_bound(this.m_proxyBuffer.data, 0, e, t, box2d.b2ParticleSystem.Proxy.CompareProxyTag),
            i = box2d.std_upper_bound(this.m_proxyBuffer.data, 0, e, o, box2d.b2ParticleSystem.Proxy.CompareTagProxy);
        return box2d.b2Assert(0 <= r), box2d.b2Assert(r <= i), box2d.b2Assert(i <= e), new box2d.b2ParticleSystem.InsideBoundsEnumerator(this, t, o, r, i);
    }, box2d.b2ParticleSystem.prototype.UpdateAllParticleFlags = function() {
        for (var o = this.m_allParticleFlags = 0; o < this.m_count; o++) this.m_allParticleFlags |= this.m_flagsBuffer.data[o];
        this.m_needsUpdateAllParticleFlags = !1;
    }, box2d.b2ParticleSystem.prototype.UpdateAllGroupFlags = function() {
        this.m_allGroupFlags = 0;
        for (var o = this.m_groupList; o; o = o.GetNext()) this.m_allGroupFlags |= o.m_groupFlags;
        this.m_needsUpdateAllGroupFlags = !1;
    }, box2d.b2ParticleSystem.prototype.AddContact = function(o, t, e) {
        var r = box2d.b2ParticleSystem.prototype.AddContact.s_d,
            i = this.m_positionBuffer.data;
        if (box2d.b2Assert(e === this.m_contactBuffer), e = box2d.b2Sub_V2_V2(i[t], i[o], r),
            (r = box2d.b2Dot_V2_V2(e, e)) < this.m_squaredDiameter) {
            i = box2d.b2InvSqrt(r), isFinite(i) || (i = 198177537e11);
            var b = this.m_contactBuffer.data[this.m_contactBuffer.Append()];
            b.indexA = o, b.indexB = t, b.flags = this.m_flagsBuffer.data[o] | this.m_flagsBuffer.data[t],
                b.weight = 1 - r * i * this.m_inverseDiameter, box2d.b2Mul_S_V2(i, e, b.normal);
        }
    }, box2d.b2ParticleSystem.prototype.AddContact.s_d = new box2d.b2Vec2(), box2d.b2ParticleSystem.prototype.FindContacts_Reference = function(o) {
        box2d.b2Assert(o === this.m_contactBuffer), o = this.m_proxyBuffer.count;
        for (var t = this.m_contactBuffer.count = 0, e = 0; t < o; t++) {
            for (var r = box2d.b2ParticleSystem.computeRelativeTag(this.m_proxyBuffer.data[t].tag, 1, 0), i = t + 1; i < o && !(r < this.m_proxyBuffer.data[i].tag); i++) this.AddContact(this.m_proxyBuffer.data[t].index, this.m_proxyBuffer.data[i].index, this.m_contactBuffer);
            for (i = box2d.b2ParticleSystem.computeRelativeTag(this.m_proxyBuffer.data[t].tag, -1, 1); e < o && !(i <= this.m_proxyBuffer.data[e].tag); e++);
            for (r = box2d.b2ParticleSystem.computeRelativeTag(this.m_proxyBuffer.data[t].tag, 1, 1),
                i = e; i < o && !(r < this.m_proxyBuffer.data[i].tag); i++) this.AddContact(this.m_proxyBuffer.data[t].index, this.m_proxyBuffer.data[i].index, this.m_contactBuffer);
        }
    }, box2d.b2ParticleSystem.prototype.FindContacts = function(o) {
        this.FindContacts_Reference(o);
    }, box2d.b2ParticleSystem.prototype.UpdateProxies_Reference = function(o) {
        box2d.b2Assert(o === this.m_proxyBuffer), o = this.m_positionBuffer.data;
        for (var t = this.m_inverseDiameter, e = 0; e < this.m_proxyBuffer.count; ++e) {
            var r = this.m_proxyBuffer.data[e],
                i = o[r.index];
            r.tag = box2d.b2ParticleSystem.computeTag(t * i.x, t * i.y);
        }
    }, box2d.b2ParticleSystem.prototype.UpdateProxies = function(o) {
        this.UpdateProxies_Reference(o);
    }, box2d.b2ParticleSystem.prototype.SortProxies = function(o) {
        box2d.b2Assert(o === this.m_proxyBuffer), box2d.std_sort(this.m_proxyBuffer.data, 0, this.m_proxyBuffer.count, box2d.b2ParticleSystem.Proxy.CompareProxyProxy);
    }, box2d.b2ParticleSystem.prototype.FilterContacts = function(o) {
        var t = this.GetParticleContactFilter();
        if (null !== t) {
            box2d.b2Assert(o === this.m_contactBuffer);
            var e = this;
            this.m_contactBuffer.RemoveIf(function(o) {
                return o.flags & box2d.b2ParticleFlag.b2_particleContactFilterParticle && !t.ShouldCollideParticleParticle(e, o.indexA, o.indexB);
            });
        }
    }, box2d.b2ParticleSystem.prototype.NotifyContactListenerPreContact = function(o) {
        if (null !== this.GetParticleContactListener()) throw o.Initialize(this.m_contactBuffer, this.m_flagsBuffer),
            Error();
    }, box2d.b2ParticleSystem.prototype.NotifyContactListenerPostContact = function(o) {
        if (null !== (o = this.GetParticleContactListener())) {
            for (var t = 0; t < this.m_contactBuffer.count; ++t) o.BeginContactParticleParticle(this, this.m_contactBuffer.data[t]);
            throw Error();
        }
    }, box2d.b2ParticleSystem.b2ParticleContactIsZombie = function(o) {
        return (o.flags & box2d.b2ParticleFlag.b2_zombieParticle) === box2d.b2ParticleFlag.b2_zombieParticle;
    }, box2d.b2ParticleSystem.prototype.UpdateContacts = function(o) {
        this.UpdateProxies(this.m_proxyBuffer), this.SortProxies(this.m_proxyBuffer);
        var t = new box2d.b2ParticleSystem.b2ParticlePairSet();
        this.NotifyContactListenerPreContact(t), this.FindContacts(this.m_contactBuffer),
            this.FilterContacts(this.m_contactBuffer), this.NotifyContactListenerPostContact(t),
            o && this.m_contactBuffer.RemoveIf(box2d.b2ParticleSystem.b2ParticleContactIsZombie);
    }, box2d.b2ParticleSystem.prototype.NotifyBodyContactListenerPreContact = function(o) {
        if (null !== this.GetFixtureContactListener()) throw o.Initialize(this.m_bodyContactBuffer, this.m_flagsBuffer),
            Error();
    }, box2d.b2ParticleSystem.prototype.NotifyBodyContactListenerPostContact = function(o) {
        if (null !== (o = this.GetFixtureContactListener())) {
            for (var t = 0; t < this.m_bodyContactBuffer.count; t++) {
                var e = this.m_bodyContactBuffer.data[t];
                box2d.b2Assert(null !== e), o.BeginContactFixtureParticle(this, e);
            }
            throw Error();
        }
    }, box2d.b2ParticleSystem.UpdateBodyContactsCallback = function(o, t) {
        box2d.b2FixtureParticleQueryCallback.call(this, o), this.m_contactFilter = t;
    }, goog.inherits(box2d.b2ParticleSystem.UpdateBodyContactsCallback, box2d.b2FixtureParticleQueryCallback),
    box2d.b2ParticleSystem.UpdateBodyContactsCallback.prototype.ShouldCollideFixtureParticle = function(o, t, e) {
        return !(this.m_contactFilter && this.m_system.GetFlagsBuffer()[e] & box2d.b2ParticleFlag.b2_fixtureContactFilterParticle) || this.m_contactFilter.ShouldCollideFixtureParticle(o, this.m_system, e);
    }, goog.exportProperty(box2d.b2ParticleSystem.UpdateBodyContactsCallback.prototype, "ShouldCollideFixtureParticle", box2d.b2ParticleSystem.UpdateBodyContactsCallback.prototype.ShouldCollideFixtureParticle),
    box2d.b2ParticleSystem.UpdateBodyContactsCallback.prototype.ReportFixtureAndParticle = function(o, t, e) {
        var r = box2d.b2ParticleSystem.UpdateBodyContactsCallback.prototype.ReportFixtureAndParticle.s_rp,
            i = this.m_system.m_positionBuffer.data[e],
            b = box2d.b2ParticleSystem.UpdateBodyContactsCallback.prototype.ReportFixtureAndParticle.s_n;
        if ((t = o.ComputeDistance(i, b, t)) < this.m_system.m_particleDiameter && this.ShouldCollideFixtureParticle(o, this.m_system, e)) {
            var n = o.GetBody(),
                p = n.GetWorldCenter(),
                s = n.GetMass(),
                a = n.GetInertia() - s * n.GetLocalCenter().LengthSquared(),
                d = (s = 0 < s ? 1 / s : 0,
                    a = 0 < a ? 1 / a : 0, this.m_system.m_flagsBuffer.data[e] & box2d.b2ParticleFlag.b2_wallParticle ? 0 : this.m_system.GetParticleInvMass());
            r = box2d.b2Sub_V2_V2(i, p, r), r = d + s + a * (r = box2d.b2Cross_V2_V2(r, b)) * r;
            (i = this.m_system.m_bodyContactBuffer.data[this.m_system.m_bodyContactBuffer.Append()]).index = e,
                i.body = n, i.fixture = o, i.weight = 1 - t * this.m_system.m_inverseDiameter, i.normal.Copy(b.SelfNeg()),
                i.mass = 0 < r ? 1 / r : 0, this.m_system.DetectStuckParticle(e);
        }
    }, goog.exportProperty(box2d.b2ParticleSystem.UpdateBodyContactsCallback.prototype, "ReportFixtureAndParticle", box2d.b2ParticleSystem.UpdateBodyContactsCallback.prototype.ReportFixtureAndParticle),
    box2d.b2ParticleSystem.UpdateBodyContactsCallback.prototype.ReportFixtureAndParticle.s_n = new box2d.b2Vec2(),
    box2d.b2ParticleSystem.UpdateBodyContactsCallback.prototype.ReportFixtureAndParticle.s_rp = new box2d.b2Vec2(),
    box2d.b2ParticleSystem.prototype.UpdateBodyContacts = function() {
        var o = box2d.b2ParticleSystem.prototype.UpdateBodyContacts.s_aabb,
            t = new box2d.b2ParticleSystem.FixtureParticleSet();
        if (this.NotifyBodyContactListenerPreContact(t), 0 < this.m_stuckThreshold)
            for (var e = this.GetParticleCount(), r = 0; r < e; r++) this.m_bodyContactCountBuffer.data[r] = 0,
                this.m_timestamp > this.m_lastBodyContactStepBuffer.data[r] + 1 && (this.m_consecutiveContactStepsBuffer.data[r] = 0);
        this.m_bodyContactBuffer.SetCount(0), this.m_stuckParticleBuffer.SetCount(0), this.ComputeAABB(o),
            e = new box2d.b2ParticleSystem.UpdateBodyContactsCallback(this, this.GetFixtureContactFilter()),
            this.m_world.QueryAABB(e, o), this.m_def.strictContactCheck && this.RemoveSpuriousBodyContacts(),
            this.NotifyBodyContactListenerPostContact(t);
    }, box2d.b2ParticleSystem.prototype.UpdateBodyContacts.s_aabb = new box2d.b2AABB(),
    box2d.b2ParticleSystem.prototype.Solve = function(o) {
        var t = box2d.b2ParticleSystem.prototype.Solve.s_subStep;
        if (0 !== this.m_count && (this.m_expirationTimeBuffer.data && this.SolveLifetimes(o),
                this.m_allParticleFlags & box2d.b2ParticleFlag.b2_zombieParticle && this.SolveZombie(),
                this.m_needsUpdateAllParticleFlags && this.UpdateAllParticleFlags(), this.m_needsUpdateAllGroupFlags && this.UpdateAllGroupFlags(), !this.m_paused))
            for (this.m_iterationIndex = 0; this.m_iterationIndex < o.particleIterations; this.m_iterationIndex++) {
                ++this.m_timestamp;
                var e = t.Copy(o);
                e.dt /= o.particleIterations, e.inv_dt *= o.particleIterations, this.UpdateContacts(!1),
                    this.UpdateBodyContacts(), this.ComputeWeight(), this.m_allGroupFlags & box2d.b2ParticleGroupFlag.b2_particleGroupNeedsUpdateDepth && this.ComputeDepth(),
                    this.m_allParticleFlags & box2d.b2ParticleFlag.b2_reactiveParticle && this.UpdatePairsAndTriadsWithReactiveParticles(),
                    this.m_hasForce && this.SolveForce(e), this.m_allParticleFlags & box2d.b2ParticleFlag.b2_viscousParticle && this.SolveViscous(),
                    this.m_allParticleFlags & box2d.b2ParticleFlag.b2_repulsiveParticle && this.SolveRepulsive(e),
                    this.m_allParticleFlags & box2d.b2ParticleFlag.b2_powderParticle && this.SolvePowder(e),
                    this.m_allParticleFlags & box2d.b2ParticleFlag.b2_tensileParticle && this.SolveTensile(e),
                    this.m_allGroupFlags & box2d.b2ParticleGroupFlag.b2_solidParticleGroup && this.SolveSolid(e),
                    this.m_allParticleFlags & box2d.b2ParticleFlag.b2_colorMixingParticle && this.SolveColorMixing(),
                    this.SolveGravity(e), this.m_allParticleFlags & box2d.b2ParticleFlag.b2_staticPressureParticle && this.SolveStaticPressure(e),
                    this.SolvePressure(e), this.SolveDamping(e), this.m_allParticleFlags & box2d.b2ParticleSystem.k_extraDampingFlags && this.SolveExtraDamping(),
                    this.m_allParticleFlags & box2d.b2ParticleFlag.b2_elasticParticle && this.SolveElastic(e),
                    this.m_allParticleFlags & box2d.b2ParticleFlag.b2_springParticle && this.SolveSpring(e),
                    this.LimitVelocity(e), this.m_allGroupFlags & box2d.b2ParticleGroupFlag.b2_rigidParticleGroup && this.SolveRigidDamping(),
                    this.m_allParticleFlags & box2d.b2ParticleFlag.b2_barrierParticle && this.SolveBarrier(e),
                    this.SolveCollision(e), this.m_allGroupFlags & box2d.b2ParticleGroupFlag.b2_rigidParticleGroup && this.SolveRigid(e),
                    this.m_allParticleFlags & box2d.b2ParticleFlag.b2_wallParticle && this.SolveWall();
                for (var r = 0; r < this.m_count; r++) this.m_positionBuffer.data[r].SelfMulAdd(e.dt, this.m_velocityBuffer.data[r]);
            }
    }, goog.exportProperty(box2d.b2ParticleSystem.prototype, "Solve", box2d.b2ParticleSystem.prototype.Solve),
    box2d.b2ParticleSystem.prototype.Solve.s_subStep = new box2d.b2TimeStep(), box2d.b2ParticleSystem.SolveCollisionCallback = function(o, t) {
        box2d.b2FixtureParticleQueryCallback.call(this, o), this.m_step = t;
    }, goog.inherits(box2d.b2ParticleSystem.SolveCollisionCallback, box2d.b2FixtureParticleQueryCallback),
    box2d.b2ParticleSystem.SolveCollisionCallback.prototype.ReportFixtureAndParticle = function(o, t, e) {
        var r = box2d.b2ParticleSystem.SolveCollisionCallback.prototype.ReportFixtureAndParticle.s_p1,
            i = box2d.b2ParticleSystem.SolveCollisionCallback.prototype.ReportFixtureAndParticle.s_output,
            b = box2d.b2ParticleSystem.SolveCollisionCallback.prototype.ReportFixtureAndParticle.s_input,
            n = box2d.b2ParticleSystem.SolveCollisionCallback.prototype.ReportFixtureAndParticle.s_p,
            p = box2d.b2ParticleSystem.SolveCollisionCallback.prototype.ReportFixtureAndParticle.s_v,
            s = box2d.b2ParticleSystem.SolveCollisionCallback.prototype.ReportFixtureAndParticle.s_f,
            a = o.GetBody(),
            d = this.m_system.m_positionBuffer.data[e],
            l = this.m_system.m_velocityBuffer.data[e];
        0 === this.m_system.m_iterationIndex ? (r = box2d.b2MulT_X_V2(a.m_xf0, d, r), o.GetShape().GetType() === box2d.b2ShapeType.e_circleShape && (r.SelfSub(a.GetLocalCenter()),
                    box2d.b2Mul_R_V2(a.m_xf0.q, r, r), box2d.b2MulT_R_V2(a.m_xf.q, r, r), r.SelfAdd(a.GetLocalCenter())),
                box2d.b2Mul_X_V2(a.m_xf, r, b.p1)) : b.p1.Copy(d), box2d.b2AddMul_V2_S_V2(d, this.m_step.dt, l, b.p2),
            b.maxFraction = 1, o.RayCast(i, b, t) && (o = i.normal, n.x = (1 - i.fraction) * b.p1.x + i.fraction * b.p2.x + box2d.b2_linearSlop * o.x,
                n.y = (1 - i.fraction) * b.p1.y + i.fraction * b.p2.y + box2d.b2_linearSlop * o.y,
                p.x = this.m_step.inv_dt * (n.x - d.x), p.y = this.m_step.inv_dt * (n.y - d.y),
                this.m_system.m_velocityBuffer.data[e].Copy(p), s.x = this.m_step.inv_dt * this.m_system.GetParticleMass() * (l.x - p.x),
                s.y = this.m_step.inv_dt * this.m_system.GetParticleMass() * (l.y - p.y), this.m_system.ParticleApplyForce(e, s));
    }, goog.exportProperty(box2d.b2ParticleSystem.SolveCollisionCallback.prototype, "ReportFixtureAndParticle", box2d.b2ParticleSystem.SolveCollisionCallback.prototype.ReportFixtureAndParticle),
    box2d.b2ParticleSystem.SolveCollisionCallback.prototype.ReportFixtureAndParticle.s_p1 = new box2d.b2Vec2(),
    box2d.b2ParticleSystem.SolveCollisionCallback.prototype.ReportFixtureAndParticle.s_output = new box2d.b2RayCastOutput(),
    box2d.b2ParticleSystem.SolveCollisionCallback.prototype.ReportFixtureAndParticle.s_input = new box2d.b2RayCastInput(),
    box2d.b2ParticleSystem.SolveCollisionCallback.prototype.ReportFixtureAndParticle.s_p = new box2d.b2Vec2(),
    box2d.b2ParticleSystem.SolveCollisionCallback.prototype.ReportFixtureAndParticle.s_v = new box2d.b2Vec2(),
    box2d.b2ParticleSystem.SolveCollisionCallback.prototype.ReportFixtureAndParticle.s_f = new box2d.b2Vec2(),
    box2d.b2ParticleSystem.SolveCollisionCallback.prototype.ReportParticle = function(o, t) {
        return !1;
    }, goog.exportProperty(box2d.b2ParticleSystem.SolveCollisionCallback.prototype, "ReportParticle", box2d.b2ParticleSystem.SolveCollisionCallback.prototype.ReportParticle),
    box2d.b2ParticleSystem.prototype.SolveCollision = function(o) {
        var t = this.m_positionBuffer.data,
            e = this.m_velocityBuffer.data,
            r = box2d.b2ParticleSystem.prototype.SolveCollision.s_aabb;
        r.lowerBound.x = +box2d.b2_maxFloat, r.lowerBound.y = +box2d.b2_maxFloat, r.upperBound.x = -box2d.b2_maxFloat,
            r.upperBound.y = -box2d.b2_maxFloat;
        for (var i = 0; i < this.m_count; i++) {
            var b = e[i],
                n = t[i],
                p = n.x + o.dt * b.x;
            b = n.y + o.dt * b.y;
            r.lowerBound.x = box2d.b2Min(r.lowerBound.x, box2d.b2Min(n.x, p)), r.lowerBound.y = box2d.b2Min(r.lowerBound.y, box2d.b2Min(n.y, b)),
                r.upperBound.x = box2d.b2Max(r.upperBound.x, box2d.b2Max(n.x, p)), r.upperBound.y = box2d.b2Max(r.upperBound.y, box2d.b2Max(n.y, b));
        }
        o = new box2d.b2ParticleSystem.SolveCollisionCallback(this, o), this.m_world.QueryAABB(o, r);
    }, box2d.b2ParticleSystem.prototype.SolveCollision.s_aabb = new box2d.b2AABB(),
    box2d.b2ParticleSystem.prototype.LimitVelocity = function(o) {
        var t = this.m_velocityBuffer.data;
        o = this.GetCriticalVelocitySquared(o);
        for (var e = 0; e < this.m_count; e++) {
            var r = t[e],
                i = box2d.b2Dot_V2_V2(r, r);
            i > o && r.SelfMul(box2d.b2Sqrt(o / i));
        }
    }, box2d.b2ParticleSystem.prototype.SolveGravity = function(o) {
        var t = box2d.b2ParticleSystem.prototype.SolveGravity.s_gravity,
            e = this.m_velocityBuffer.data;
        for (o = box2d.b2Mul_S_V2(o.dt * this.m_def.gravityScale, this.m_world.GetGravity(), t),
            t = 0; t < this.m_count; t++) e[t].SelfAdd(o);
    }, box2d.b2ParticleSystem.prototype.SolveGravity.s_gravity = new box2d.b2Vec2(),
    box2d.b2ParticleSystem.prototype.SolveBarrier = function(o) {
        for (var t = box2d.b2ParticleSystem.prototype.SolveBarrier.s_aabb, e = box2d.b2ParticleSystem.prototype.SolveBarrier.s_va, r = box2d.b2ParticleSystem.prototype.SolveBarrier.s_vb, i = box2d.b2ParticleSystem.prototype.SolveBarrier.s_pba, b = box2d.b2ParticleSystem.prototype.SolveBarrier.s_vba, n = box2d.b2ParticleSystem.prototype.SolveBarrier.s_vc, p = box2d.b2ParticleSystem.prototype.SolveBarrier.s_pca, s = box2d.b2ParticleSystem.prototype.SolveBarrier.s_vca, a = box2d.b2ParticleSystem.prototype.SolveBarrier.s_qba, d = box2d.b2ParticleSystem.prototype.SolveBarrier.s_qca, l = box2d.b2ParticleSystem.prototype.SolveBarrier.s_dv, x = box2d.b2ParticleSystem.prototype.SolveBarrier.s_f, y = this.m_positionBuffer.data, c = this.m_velocityBuffer.data, _ = 0; _ < this.m_count; _++) 0 != (this.m_flagsBuffer.data[_] & box2d.b2ParticleSystem.k_barrierWallFlags) && c[_].SetZero();
        _ = box2d.b2_barrierCollisionTime * o.dt;
        for (var m = this.GetParticleMass(), u = 0; u < this.m_pairBuffer.count; u++) {
            if ((f = this.m_pairBuffer.data[u]).flags & box2d.b2ParticleFlag.b2_barrierParticle) {
                var h = f.indexA,
                    g = f.indexB,
                    f = y[h],
                    S = y[g],
                    P = t;
                box2d.b2Min_V2_V2(f, S, P.lowerBound), box2d.b2Max_V2_V2(f, S, P.upperBound);
                var C, A = this.m_groupBuffer[h],
                    B = this.m_groupBuffer[g];
                for (h = this.GetLinearVelocity(A, h, f, e), g = this.GetLinearVelocity(B, g, S, r),
                    S = box2d.b2Sub_V2_V2(S, f, i), g = box2d.b2Sub_V2_V2(g, h, b), P = this.GetInsideBoundsEnumerator(P); 0 <= (C = P.GetNext());) {
                    var v = y[C],
                        V = this.m_groupBuffer[C];
                    if (A !== V && B !== V) {
                        var J = this.GetLinearVelocity(V, C, v, n),
                            M = box2d.b2Sub_V2_V2(v, f, p),
                            w = box2d.b2Sub_V2_V2(J, h, s),
                            D = box2d.b2Cross_V2_V2(g, w),
                            G = box2d.b2Cross_V2_V2(S, w) - box2d.b2Cross_V2_V2(M, g),
                            T = box2d.b2Cross_V2_V2(S, M),
                            I = a,
                            R = d;
                        if (0 === D) {
                            if (0 === G) continue;
                            if (!(0 <= (T = -T / G) && T < _)) continue;
                            if (box2d.b2AddMul_V2_S_V2(S, T, g, I), box2d.b2AddMul_V2_S_V2(M, T, w, R), !(0 <= (G = box2d.b2Dot_V2_V2(I, R) / box2d.b2Dot_V2_V2(I, I)) && 1 >= G)) continue;
                        } else {
                            if (0 > (T = G * G - 4 * T * D)) continue;
                            var F = box2d.b2Sqrt(T);
                            if ((T = (-G - F) / (2 * D)) > (D = (-G + F) / (2 * D)) && (G = T, T = D, D = G),
                                box2d.b2AddMul_V2_S_V2(S, T, g, I), box2d.b2AddMul_V2_S_V2(M, T, w, R), G = box2d.b2Dot_V2_V2(I, R) / box2d.b2Dot_V2_V2(I, I), !(0 <= T && T < _ && 0 <= G && 1 >= G)) {
                                if (!(0 <= (T = D) && T < _)) continue;
                                if (box2d.b2AddMul_V2_S_V2(S, T, g, I), box2d.b2AddMul_V2_S_V2(M, T, w, R), !(0 <= (G = box2d.b2Dot_V2_V2(I, R) / box2d.b2Dot_V2_V2(I, I)) && 1 >= G)) continue;
                            }
                        }
                        (M = l).x = h.x + G * g.x - J.x, M.y = h.y + G * g.y - J.y, J = box2d.b2Mul_S_V2(m, M, x),
                            this.IsRigidGroup(V) ? (m = V.GetMass(), M = V.GetInertia(), 0 < m && V.m_linearVelocity.SelfMulAdd(1 / m, J),
                                0 < M && (V.m_angularVelocity += box2d.b2Cross_V2_V2(box2d.b2Sub_V2_V2(v, V.GetCenter(), box2d.b2Vec2.s_t0), J) / M)) : c[C].SelfAdd(M),
                            this.ParticleApplyForce(C, J.SelfMul(-o.inv_dt));
                    }
                }
            }
        }
    }, box2d.b2ParticleSystem.prototype.SolveBarrier.s_aabb = new box2d.b2AABB(), box2d.b2ParticleSystem.prototype.SolveBarrier.s_va = new box2d.b2Vec2(),
    box2d.b2ParticleSystem.prototype.SolveBarrier.s_vb = new box2d.b2Vec2(), box2d.b2ParticleSystem.prototype.SolveBarrier.s_pba = new box2d.b2Vec2(),
    box2d.b2ParticleSystem.prototype.SolveBarrier.s_vba = new box2d.b2Vec2(), box2d.b2ParticleSystem.prototype.SolveBarrier.s_vc = new box2d.b2Vec2(),
    box2d.b2ParticleSystem.prototype.SolveBarrier.s_pca = new box2d.b2Vec2(), box2d.b2ParticleSystem.prototype.SolveBarrier.s_vca = new box2d.b2Vec2(),
    box2d.b2ParticleSystem.prototype.SolveBarrier.s_qba = new box2d.b2Vec2(), box2d.b2ParticleSystem.prototype.SolveBarrier.s_qca = new box2d.b2Vec2(),
    box2d.b2ParticleSystem.prototype.SolveBarrier.s_dv = new box2d.b2Vec2(), box2d.b2ParticleSystem.prototype.SolveBarrier.s_f = new box2d.b2Vec2(),
    box2d.b2ParticleSystem.prototype.SolveStaticPressure = function(o) {
        this.m_staticPressureBuffer = this.RequestBuffer(this.m_staticPressureBuffer);
        var t = this.GetCriticalPressure(o);
        o = this.m_def.staticPressureStrength * t;
        t = box2d.b2_maxParticlePressure * t;
        for (var e = this.m_def.staticPressureRelaxation, r = 0; r < this.m_def.staticPressureIterations; r++) {
            for (var i = 0; i < this.m_count; i++) this.m_accumulationBuffer[i] = 0;
            for (i = 0; i < this.m_contactBuffer.count; i++) {
                if ((p = this.m_contactBuffer.data[i]).flags & box2d.b2ParticleFlag.b2_staticPressureParticle) {
                    var b = p.indexA,
                        n = p.indexB,
                        p = p.weight;
                    this.m_accumulationBuffer[b] += p * this.m_staticPressureBuffer[n], this.m_accumulationBuffer[n] += p * this.m_staticPressureBuffer[b];
                }
            }
            for (i = 0; i < this.m_count; i++) p = this.m_weightBuffer[i], this.m_staticPressureBuffer[i] = this.m_flagsBuffer.data[i] & box2d.b2ParticleFlag.b2_staticPressureParticle ? box2d.b2Clamp((this.m_accumulationBuffer[i] + o * (p - box2d.b2_minParticleWeight)) / (p + e), 0, t) : 0;
        }
    }, box2d.b2ParticleSystem.prototype.ComputeWeight = function() {
        for (var o = 0; o < this.m_count; o++) this.m_weightBuffer[o] = 0;
        for (o = 0; o < this.m_bodyContactBuffer.count; o++) {
            var t = (e = this.m_bodyContactBuffer.data[o]).index,
                e = e.weight;
            this.m_weightBuffer[t] += e;
        }
        for (o = 0; o < this.m_contactBuffer.count; o++) {
            t = (e = this.m_contactBuffer.data[o]).indexA;
            var r = e.indexB;
            e = e.weight;
            this.m_weightBuffer[t] += e, this.m_weightBuffer[r] += e;
        }
    }, box2d.b2ParticleSystem.prototype.SolvePressure = function(o) {
        for (var t = box2d.b2ParticleSystem.prototype.SolvePressure.s_f, e = this.m_positionBuffer.data, r = this.m_velocityBuffer.data, i = this.GetCriticalPressure(o), b = this.m_def.pressureStrength * i, n = box2d.b2_maxParticlePressure * i, p = 0; p < this.m_count; p++) {
            i = this.m_weightBuffer[p];
            var s = b * box2d.b2Max(0, i - box2d.b2_minParticleWeight);
            this.m_accumulationBuffer[p] = box2d.b2Min(s, n);
        }
        if (this.m_allParticleFlags & box2d.b2ParticleSystem.k_noPressureFlags)
            for (p = 0; p < this.m_count; p++) this.m_flagsBuffer.data[p] & box2d.b2ParticleSystem.k_noPressureFlags && (this.m_accumulationBuffer[p] = 0);
        if (this.m_allParticleFlags & box2d.b2ParticleFlag.b2_staticPressureParticle)
            for (box2d.b2Assert(null !== this.m_staticPressureBuffer),
                p = 0; p < this.m_count; p++) this.m_flagsBuffer.data[p] & box2d.b2ParticleFlag.b2_staticPressureParticle && (this.m_accumulationBuffer[p] += this.m_staticPressureBuffer[p]);
        for (o = o.dt / (this.m_def.density * this.m_particleDiameter), n = this.GetParticleInvMass(),
            p = 0; p < this.m_bodyContactBuffer.count; p++) {
            var a = (s = this.m_bodyContactBuffer.data[p]).index,
                d = s.body,
                l = (i = s.weight,
                    s.mass),
                x = s.normal,
                y = e[a];
            s = this.m_accumulationBuffer[a] + b * i, i = box2d.b2Mul_S_V2(o * i * l * s, x, t);
            r[a].SelfMulSub(n, i), d.ApplyLinearImpulse(i, y, !0);
        }
        for (p = 0; p < this.m_contactBuffer.count; p++) a = (s = this.m_contactBuffer.data[p]).indexA,
            d = s.indexB, i = s.weight, x = s.normal, s = this.m_accumulationBuffer[a] + this.m_accumulationBuffer[d],
            i = box2d.b2Mul_S_V2(o * i * s, x, t), r[a].SelfSub(i), r[d].SelfAdd(i);
    }, box2d.b2ParticleSystem.prototype.SolvePressure.s_f = new box2d.b2Vec2(), box2d.b2ParticleSystem.prototype.SolveDamping = function(o) {
        var t = box2d.b2ParticleSystem.prototype.SolveDamping.s_v,
            e = box2d.b2ParticleSystem.prototype.SolveDamping.s_f,
            r = this.m_positionBuffer.data,
            i = this.m_velocityBuffer.data,
            b = this.m_def.dampingStrength;
        o = 1 / this.GetCriticalVelocity(o);
        for (var n = this.GetParticleInvMass(), p = 0; p < this.m_bodyContactBuffer.count; p++) {
            var s = (y = this.m_bodyContactBuffer.data[p]).index,
                a = y.body,
                d = y.weight,
                l = y.mass,
                x = y.normal,
                y = r[s],
                c = box2d.b2Sub_V2_V2(a.GetLinearVelocityFromWorldPoint(y, box2d.b2Vec2.s_t0), i[s], t);
            0 > (c = box2d.b2Dot_V2_V2(c, x)) && (d = box2d.b2Max(b * d, box2d.b2Min(-o * c, .5)),
                l = box2d.b2Mul_S_V2(d * l * c, x, e), i[s].SelfMulAdd(n, l), a.ApplyLinearImpulse(l.SelfNeg(), y, !0));
        }
        for (p = 0; p < this.m_contactBuffer.count; p++) s = (y = this.m_contactBuffer.data[p]).indexA,
            a = y.indexB, d = y.weight, x = y.normal, c = box2d.b2Sub_V2_V2(i[a], i[s], t),
            0 > (c = box2d.b2Dot_V2_V2(c, x)) && (d = box2d.b2Max(b * d, box2d.b2Min(-o * c, .5)),
                l = box2d.b2Mul_S_V2(d * c, x, e), i[s].SelfAdd(l), i[a].SelfSub(l));
    }, box2d.b2ParticleSystem.prototype.SolveDamping.s_v = new box2d.b2Vec2(), box2d.b2ParticleSystem.prototype.SolveDamping.s_f = new box2d.b2Vec2(),
    box2d.b2ParticleSystem.prototype.SolveRigidDamping = function() {
        for (var o = box2d.b2ParticleSystem.prototype.SolveRigidDamping.s_t0, t = box2d.b2ParticleSystem.prototype.SolveRigidDamping.s_t1, e = box2d.b2ParticleSystem.prototype.SolveRigidDamping.s_p, r = box2d.b2ParticleSystem.prototype.SolveRigidDamping.s_v, i = [0], b = [0], n = [0], p = [0], s = [0], a = [0], d = this.m_positionBuffer.data, l = this.m_def.dampingStrength, x = 0; x < this.m_bodyContactBuffer.count; x++) {
            var y = (h = this.m_bodyContactBuffer.data[x]).index,
                c = this.m_groupBuffer[y];
            if (this.IsRigidGroup(c)) {
                var _ = h.body,
                    m = h.normal,
                    u = h.weight,
                    h = d[y],
                    g = box2d.b2Sub_V2_V2(_.GetLinearVelocityFromWorldPoint(h, o), c.GetLinearVelocityFromWorldPoint(h, t), r);
                0 > (g = box2d.b2Dot_V2_V2(g, m)) && (this.InitDampingParameterWithRigidGroupOrParticle(i, b, n, !0, c, y, h, m),
                    this.InitDampingParameter(p, s, a, _.GetMass(), _.GetInertia() - _.GetMass() * _.GetLocalCenter().LengthSquared(), _.GetWorldCenter(), h, m),
                    u = l * box2d.b2Min(u, 1) * this.ComputeDampingImpulse(i[0], b[0], n[0], p[0], s[0], a[0], g),
                    this.ApplyDamping(i[0], b[0], n[0], !0, c, y, u, m), _.ApplyLinearImpulse(box2d.b2Mul_S_V2(-u, m, box2d.b2Vec2.s_t0), h, !0));
            }
        }
        for (x = 0; x < this.m_contactBuffer.count; x++) {
            y = (h = this.m_contactBuffer.data[x]).indexA, _ = h.indexB, m = h.normal, u = h.weight,
                c = this.m_groupBuffer[y];
            var f = this.m_groupBuffer[_],
                S = this.IsRigidGroup(c),
                P = this.IsRigidGroup(f);
            c !== f && (S || P) && (h = box2d.b2Mid_V2_V2(d[y], d[_], e), g = box2d.b2Sub_V2_V2(this.GetLinearVelocity(f, _, h, o), this.GetLinearVelocity(c, y, h, t), r),
                0 > (g = box2d.b2Dot_V2_V2(g, m)) && (this.InitDampingParameterWithRigidGroupOrParticle(i, b, n, S, c, y, h, m),
                    this.InitDampingParameterWithRigidGroupOrParticle(p, s, a, P, f, _, h, m), u = l * u * this.ComputeDampingImpulse(i[0], b[0], n[0], p[0], s[0], a[0], g),
                    this.ApplyDamping(i[0], b[0], n[0], S, c, y, u, m), this.ApplyDamping(p[0], s[0], a[0], P, f, _, -u, m)));
        }
    }, box2d.b2ParticleSystem.prototype.SolveRigidDamping.s_t0 = new box2d.b2Vec2(),
    box2d.b2ParticleSystem.prototype.SolveRigidDamping.s_t1 = new box2d.b2Vec2(), box2d.b2ParticleSystem.prototype.SolveRigidDamping.s_p = new box2d.b2Vec2(),
    box2d.b2ParticleSystem.prototype.SolveRigidDamping.s_v = new box2d.b2Vec2(), box2d.b2ParticleSystem.prototype.SolveExtraDamping = function() {
        for (var o = box2d.b2ParticleSystem.prototype.SolveExtraDamping.s_v, t = box2d.b2ParticleSystem.prototype.SolveExtraDamping.s_f, e = this.m_velocityBuffer.data, r = this.m_positionBuffer.data, i = this.GetParticleInvMass(), b = 0; b < this.m_bodyContactBuffer.count; b++) {
            var n = (d = this.m_bodyContactBuffer.data[b]).index;
            if (this.m_flagsBuffer.data[n] & box2d.b2ParticleSystem.k_extraDampingFlags) {
                var p = d.body,
                    s = d.mass,
                    a = d.normal,
                    d = r[n],
                    l = box2d.b2Sub_V2_V2(p.GetLinearVelocityFromWorldPoint(d, box2d.b2Vec2.s_t0), e[n], o);
                0 > (l = box2d.b2Dot_V2_V2(l, a)) && (s = box2d.b2Mul_S_V2(.5 * s * l, a, t), e[n].SelfMulAdd(i, s),
                    p.ApplyLinearImpulse(s.SelfNeg(), d, !0));
            }
        }
    }, box2d.b2ParticleSystem.prototype.SolveExtraDamping.s_v = new box2d.b2Vec2(),
    box2d.b2ParticleSystem.prototype.SolveExtraDamping.s_f = new box2d.b2Vec2(), box2d.b2ParticleSystem.prototype.SolveWall = function() {
        for (var o = this.m_velocityBuffer.data, t = 0; t < this.m_count; t++) this.m_flagsBuffer.data[t] & box2d.b2ParticleFlag.b2_wallParticle && o[t].SetZero();
    }, box2d.b2ParticleSystem.prototype.SolveRigid = function(o) {
        for (var t = box2d.b2ParticleSystem.prototype.SolveRigid.s_position, e = box2d.b2ParticleSystem.prototype.SolveRigid.s_rotation, r = box2d.b2ParticleSystem.prototype.SolveRigid.s_transform, i = box2d.b2ParticleSystem.prototype.SolveRigid.s_velocityTransform, b = this.m_positionBuffer.data, n = this.m_velocityBuffer.data, p = this.m_groupList; p; p = p.GetNext())
            if (p.m_groupFlags & box2d.b2ParticleGroupFlag.b2_rigidParticleGroup) {
                p.UpdateStatistics();
                var s = e;
                s.SetAngle(o.dt * p.m_angularVelocity);
                var a = box2d.b2Add_V2_V2(p.m_center, box2d.b2Sub_V2_V2(box2d.b2Mul_S_V2(o.dt, p.m_linearVelocity, box2d.b2Vec2.s_t0), box2d.b2Mul_R_V2(s, p.m_center, box2d.b2Vec2.s_t1), box2d.b2Vec2.s_t0), t),
                    d = r;
                for (d.SetPositionRotation(a, s), box2d.b2Mul_X_X(d, p.m_transform, p.m_transform),
                    (s = i).p.x = o.inv_dt * d.p.x, s.p.y = o.inv_dt * d.p.y, s.q.s = o.inv_dt * d.q.s,
                    s.q.c = o.inv_dt * (d.q.c - 1), d = p.m_firstIndex; d < p.m_lastIndex; d++) box2d.b2Mul_X_V2(s, b[d], n[d]);
            }
    }, box2d.b2ParticleSystem.prototype.SolveRigid.s_position = new box2d.b2Vec2(),
    box2d.b2ParticleSystem.prototype.SolveRigid.s_rotation = new box2d.b2Rot(), box2d.b2ParticleSystem.prototype.SolveRigid.s_transform = new box2d.b2Transform(),
    box2d.b2ParticleSystem.prototype.SolveRigid.s_velocityTransform = new box2d.b2Transform(),
    box2d.b2ParticleSystem.prototype.SolveElastic = function(o) {
        for (var t = box2d.b2ParticleSystem.prototype.SolveElastic.s_pa, e = box2d.b2ParticleSystem.prototype.SolveElastic.s_pb, r = box2d.b2ParticleSystem.prototype.SolveElastic.s_pc, i = box2d.b2ParticleSystem.prototype.SolveElastic.s_r, b = box2d.b2ParticleSystem.prototype.SolveElastic.s_t0, n = this.m_positionBuffer.data, p = this.m_velocityBuffer.data, s = o.inv_dt * this.m_def.elasticStrength, a = 0; a < this.m_triadBuffer.count; a++) {
            var d = this.m_triadBuffer.data[a];
            if (d.flags & box2d.b2ParticleFlag.b2_elasticParticle) {
                var l = d.indexA,
                    x = d.indexB,
                    y = d.indexC,
                    c = d.pa,
                    _ = d.pb,
                    m = d.pc,
                    u = t.Copy(n[l]),
                    h = e.Copy(n[x]),
                    g = r.Copy(n[y]);
                l = p[l], x = p[x], y = p[y];
                u.SelfMulAdd(o.dt, l), h.SelfMulAdd(o.dt, x), g.SelfMulAdd(o.dt, y);
                var f = (u.x + h.x + g.x) / 3,
                    S = (u.y + h.y + g.y) / 3;
                u.x -= f, u.y -= S, h.x -= f, h.y -= S, g.x -= f, g.y -= S, (f = i).s = box2d.b2Cross_V2_V2(c, u) + box2d.b2Cross_V2_V2(_, h) + box2d.b2Cross_V2_V2(m, g),
                    f.c = box2d.b2Dot_V2_V2(c, u) + box2d.b2Dot_V2_V2(_, h) + box2d.b2Dot_V2_V2(m, g),
                    S = box2d.b2InvSqrt(f.s * f.s + f.c * f.c), isFinite(S) || (S = 198177537e11), f.s *= S,
                    f.c *= S, f.angle = Math.atan2(f.s, f.c), d = s * d.strength, box2d.b2Mul_R_V2(f, c, b),
                    box2d.b2Sub_V2_V2(b, u, b), box2d.b2Mul_S_V2(d, b, b), l.SelfAdd(b), box2d.b2Mul_R_V2(f, _, b),
                    box2d.b2Sub_V2_V2(b, h, b), box2d.b2Mul_S_V2(d, b, b), x.SelfAdd(b), box2d.b2Mul_R_V2(f, m, b),
                    box2d.b2Sub_V2_V2(b, g, b), box2d.b2Mul_S_V2(d, b, b), y.SelfAdd(b);
            }
        }
    }, box2d.b2ParticleSystem.prototype.SolveElastic.s_pa = new box2d.b2Vec2(), box2d.b2ParticleSystem.prototype.SolveElastic.s_pb = new box2d.b2Vec2(),
    box2d.b2ParticleSystem.prototype.SolveElastic.s_pc = new box2d.b2Vec2(), box2d.b2ParticleSystem.prototype.SolveElastic.s_r = new box2d.b2Rot(),
    box2d.b2ParticleSystem.prototype.SolveElastic.s_t0 = new box2d.b2Vec2(), box2d.b2ParticleSystem.prototype.SolveSpring = function(o) {
        for (var t = box2d.b2ParticleSystem.prototype.SolveSpring.s_pa, e = box2d.b2ParticleSystem.prototype.SolveSpring.s_pb, r = box2d.b2ParticleSystem.prototype.SolveSpring.s_d, i = box2d.b2ParticleSystem.prototype.SolveSpring.s_f, b = this.m_positionBuffer.data, n = this.m_velocityBuffer.data, p = o.inv_dt * this.m_def.springStrength, s = 0; s < this.m_pairBuffer.count; s++) {
            if ((c = this.m_pairBuffer.data[s]).flags & box2d.b2ParticleFlag.b2_springParticle) {
                var a = c.indexA,
                    d = c.indexB,
                    l = t.Copy(b[a]),
                    x = e.Copy(b[d]);
                a = n[a], d = n[d];
                l.SelfMulAdd(o.dt, a), x.SelfMulAdd(o.dt, d);
                l = box2d.b2Sub_V2_V2(x, l, r), x = c.distance;
                var y = l.Length(),
                    c = box2d.b2Mul_S_V2(p * c.strength * (x - y) / y, l, i);
                a.SelfSub(c), d.SelfAdd(c);
            }
        }
    }, box2d.b2ParticleSystem.prototype.SolveSpring.s_pa = new box2d.b2Vec2(), box2d.b2ParticleSystem.prototype.SolveSpring.s_pb = new box2d.b2Vec2(),
    box2d.b2ParticleSystem.prototype.SolveSpring.s_d = new box2d.b2Vec2(), box2d.b2ParticleSystem.prototype.SolveSpring.s_f = new box2d.b2Vec2(),
    box2d.b2ParticleSystem.prototype.SolveTensile = function(o) {
        var t = box2d.b2ParticleSystem.prototype.SolveTensile.s_weightedNormal,
            e = box2d.b2ParticleSystem.prototype.SolveTensile.s_s,
            r = box2d.b2ParticleSystem.prototype.SolveTensile.s_f,
            i = this.m_velocityBuffer.data;
        box2d.b2Assert(null !== this.m_accumulation2Buffer);
        for (var b = 0; b < this.m_count; b++) this.m_accumulation2Buffer[b] = box2d.b2Vec2_zero.Clone(),
            this.m_accumulation2Buffer[b].SetZero();
        for (b = 0; b < this.m_contactBuffer.count; b++) {
            if ((a = this.m_contactBuffer.data[b]).flags & box2d.b2ParticleFlag.b2_tensileParticle) {
                var n = a.indexA,
                    p = a.indexB,
                    s = a.weight,
                    a = a.normal;
                s = box2d.b2Mul_S_V2((1 - s) * s, a, t);
                this.m_accumulation2Buffer[n].SelfSub(s), this.m_accumulation2Buffer[p].SelfAdd(s);
            }
        }
        b = this.GetCriticalVelocity(o), o = this.m_def.surfaceTensionPressureStrength * b;
        t = this.m_def.surfaceTensionNormalStrength * b;
        var d = box2d.b2_maxParticleForce * b;
        for (b = 0; b < this.m_contactBuffer.count; b++)
            if ((a = this.m_contactBuffer.data[b]).flags & box2d.b2ParticleFlag.b2_tensileParticle) {
                n = a.indexA, p = a.indexB, s = a.weight, a = a.normal;
                var l = this.m_weightBuffer[n] + this.m_weightBuffer[p],
                    x = box2d.b2Sub_V2_V2(this.m_accumulation2Buffer[p], this.m_accumulation2Buffer[n], e);
                s = box2d.b2Min(o * (l - 2) + t * box2d.b2Dot_V2_V2(x, a), d) * s, s = box2d.b2Mul_S_V2(s, a, r);
                i[n].SelfSub(s), i[p].SelfAdd(s);
            }
    }, box2d.b2ParticleSystem.prototype.SolveTensile.s_weightedNormal = new box2d.b2Vec2(),
    box2d.b2ParticleSystem.prototype.SolveTensile.s_s = new box2d.b2Vec2(), box2d.b2ParticleSystem.prototype.SolveTensile.s_f = new box2d.b2Vec2(),
    box2d.b2ParticleSystem.prototype.SolveViscous = function() {
        for (var o = box2d.b2ParticleSystem.prototype.SolveViscous.s_v, t = box2d.b2ParticleSystem.prototype.SolveViscous.s_f, e = this.m_positionBuffer.data, r = this.m_velocityBuffer.data, i = this.m_def.viscousStrength, b = this.GetParticleInvMass(), n = 0; n < this.m_bodyContactBuffer.count; n++) {
            var p = (l = this.m_bodyContactBuffer.data[n]).index;
            if (this.m_flagsBuffer.data[p] & box2d.b2ParticleFlag.b2_viscousParticle) {
                var s = l.body,
                    a = l.weight,
                    d = l.mass,
                    l = e[p],
                    x = box2d.b2Sub_V2_V2(s.GetLinearVelocityFromWorldPoint(l, box2d.b2Vec2.s_t0), r[p], o);
                a = box2d.b2Mul_S_V2(i * d * a, x, t);
                r[p].SelfMulAdd(b, a), s.ApplyLinearImpulse(a.SelfNeg(), l, !0);
            }
        }
        for (n = 0; n < this.m_contactBuffer.count; n++)(l = this.m_contactBuffer.data[n]).flags & box2d.b2ParticleFlag.b2_viscousParticle && (p = l.indexA,
            s = l.indexB, a = l.weight, x = box2d.b2Sub_V2_V2(r[s], r[p], o), a = box2d.b2Mul_S_V2(i * a, x, t),
            r[p].SelfAdd(a), r[s].SelfSub(a));
    }, box2d.b2ParticleSystem.prototype.SolveViscous.s_v = new box2d.b2Vec2(), box2d.b2ParticleSystem.prototype.SolveViscous.s_f = new box2d.b2Vec2(),
    box2d.b2ParticleSystem.prototype.SolveRepulsive = function(o) {
        var t = box2d.b2ParticleSystem.prototype.SolveRepulsive.s_f,
            e = this.m_velocityBuffer.data;
        o = this.m_def.repulsiveStrength * this.GetCriticalVelocity(o);
        for (var r = 0; r < this.m_contactBuffer.count; r++) {
            var i = this.m_contactBuffer.data[r];
            if (i.flags & box2d.b2ParticleFlag.b2_repulsiveParticle) {
                var b = i.indexA,
                    n = i.indexB;
                this.m_groupBuffer[b] !== this.m_groupBuffer[n] && (i = box2d.b2Mul_S_V2(o * i.weight, i.normal, t),
                    e[b].SelfSub(i), e[n].SelfAdd(i));
            }
        }
    }, box2d.b2ParticleSystem.prototype.SolveRepulsive.s_f = new box2d.b2Vec2(), box2d.b2ParticleSystem.prototype.SolvePowder = function(o) {
        var t = box2d.b2ParticleSystem.prototype.SolvePowder.s_f,
            e = this.m_positionBuffer.data,
            r = this.m_velocityBuffer.data;
        o = this.m_def.powderStrength * this.GetCriticalVelocity(o);
        for (var i = 1 - box2d.b2_particleStride, b = this.GetParticleInvMass(), n = 0; n < this.m_bodyContactBuffer.count; n++) {
            var p = (x = this.m_bodyContactBuffer.data[n]).index;
            if (this.m_flagsBuffer.data[p] & box2d.b2ParticleFlag.b2_powderParticle) {
                var s = x.weight;
                if (s > i) {
                    var a = x.body,
                        d = e[p],
                        l = x.normal,
                        x = box2d.b2Mul_S_V2(o * x.mass * (s - i), l, t);
                    r[p].SelfMulSub(b, x), a.ApplyLinearImpulse(x, d, !0);
                }
            }
        }
        for (n = 0; n < this.m_contactBuffer.count; n++)(x = this.m_contactBuffer.data[n]).flags & box2d.b2ParticleFlag.b2_powderParticle && ((s = x.weight) > i && (p = x.indexA,
            a = x.indexB, l = x.normal, x = box2d.b2Mul_S_V2(o * (s - i), l, t), r[p].SelfSub(x),
            r[a].SelfAdd(x)));
    }, box2d.b2ParticleSystem.prototype.SolvePowder.s_f = new box2d.b2Vec2(), box2d.b2ParticleSystem.prototype.SolveSolid = function(o) {
        var t = box2d.b2ParticleSystem.prototype.SolveSolid.s_f,
            e = this.m_velocityBuffer.data;
        this.m_depthBuffer = this.RequestBuffer(this.m_depthBuffer), o = o.inv_dt * this.m_def.ejectionStrength;
        for (var r = 0; r < this.m_contactBuffer.count; r++) {
            var i = this.m_contactBuffer.data[r],
                b = i.indexA,
                n = i.indexB;
            this.m_groupBuffer[b] !== this.m_groupBuffer[n] && (i = box2d.b2Mul_S_V2(o * (this.m_depthBuffer[b] + this.m_depthBuffer[n]) * i.weight, i.normal, t),
                e[b].SelfSub(i), e[n].SelfAdd(i));
        }
    }, box2d.b2ParticleSystem.prototype.SolveSolid.s_f = new box2d.b2Vec2(), box2d.b2ParticleSystem.prototype.SolveForce = function(o) {
        var t = this.m_velocityBuffer.data;
        o = o.dt * this.GetParticleInvMass();
        for (var e = 0; e < this.m_count; e++) t[e].SelfMulAdd(o, this.m_forceBuffer[e]);
        this.m_hasForce = !1;
    }, box2d.b2ParticleSystem.prototype.SolveColorMixing = function() {
        box2d.b2Assert(null !== this.m_colorBuffer.data);
        var o = Math.floor(128 * this.m_def.colorMixingStrength);
        if (o)
            for (var t = 0; t < this.m_contactBuffer.count; t++) {
                var e = (r = this.m_contactBuffer.data[t]).indexA,
                    r = r.indexB;
                this.m_flagsBuffer.data[e] & this.m_flagsBuffer.data[r] & box2d.b2ParticleFlag.b2_colorMixingParticle && box2d.b2ParticleColor.MixColors(this.m_colorBuffer.data[e], this.m_colorBuffer.data[r], o);
            }
    }, box2d.b2ParticleSystem.prototype.SolveZombie = function() {
        for (var o = 0, t = [], e = 0; e < this.m_count; e++) t[e] = box2d.b2_invalidParticleIndex;
        box2d.b2Assert(t.length === this.m_count);
        var r = 0;
        for (e = 0; e < this.m_count; e++) {
            var i = this.m_flagsBuffer.data[e];
            if (i & box2d.b2ParticleFlag.b2_zombieParticle) {
                var b = this.m_world.m_destructionListener;
                i & box2d.b2ParticleFlag.b2_destructionListenerParticle && b && b.SayGoodbyeParticle(this, e),
                    this.m_handleIndexBuffer.data && (b = this.m_handleIndexBuffer.data[e]) && (b.SetIndex(box2d.b2_invalidParticleIndex),
                        this.m_handleIndexBuffer.data[e] = null), t[e] = box2d.b2_invalidParticleIndex;
            } else t[e] = o, e !== o && (this.m_handleIndexBuffer.data && ((b = this.m_handleIndexBuffer.data[e]) && b.SetIndex(o),
                        this.m_handleIndexBuffer.data[o] = b), this.m_flagsBuffer.data[o] = this.m_flagsBuffer.data[e],
                    this.m_lastBodyContactStepBuffer.data && (this.m_lastBodyContactStepBuffer.data[o] = this.m_lastBodyContactStepBuffer.data[e]),
                    this.m_bodyContactCountBuffer.data && (this.m_bodyContactCountBuffer.data[o] = this.m_bodyContactCountBuffer.data[e]),
                    this.m_consecutiveContactStepsBuffer.data && (this.m_consecutiveContactStepsBuffer.data[o] = this.m_consecutiveContactStepsBuffer.data[e]),
                    this.m_positionBuffer.data[o].Copy(this.m_positionBuffer.data[e]), this.m_velocityBuffer.data[o].Copy(this.m_velocityBuffer.data[e]),
                    this.m_groupBuffer[o] = this.m_groupBuffer[e], this.m_hasForce && this.m_forceBuffer[o].Copy(this.m_forceBuffer[e]),
                    this.m_staticPressureBuffer && (this.m_staticPressureBuffer[o] = this.m_staticPressureBuffer[e]),
                    this.m_depthBuffer && (this.m_depthBuffer[o] = this.m_depthBuffer[e]), this.m_colorBuffer.data && this.m_colorBuffer.data[o].Copy(this.m_colorBuffer.data[e]),
                    this.m_userDataBuffer.data && (this.m_userDataBuffer.data[o] = this.m_userDataBuffer.data[e]),
                    this.m_expirationTimeBuffer.data && (this.m_expirationTimeBuffer.data[o] = this.m_expirationTimeBuffer.data[e])),
                o++, r |= i;
        }
        for (e = 0; e < this.m_proxyBuffer.count; e++)(i = this.m_proxyBuffer.data[e]).index = t[i.index];
        for (this.m_proxyBuffer.RemoveIf(function(o) {
                return 0 > o.index;
            }), e = 0; e < this.m_contactBuffer.count; e++)(i = this.m_contactBuffer.data[e]).indexA = t[i.indexA],
            i.indexB = t[i.indexB];
        for (this.m_contactBuffer.RemoveIf(function(o) {
                return 0 > o.indexA || 0 > o.indexB;
            }), e = 0; e < this.m_bodyContactBuffer.count; e++)(i = this.m_bodyContactBuffer.data[e]).index = t[i.index];
        for (this.m_bodyContactBuffer.RemoveIf(function(o) {
                return 0 > o.index;
            }), e = 0; e < this.m_pairBuffer.count; e++)(i = this.m_pairBuffer.data[e]).indexA = t[i.indexA],
            i.indexB = t[i.indexB];
        for (this.m_pairBuffer.RemoveIf(function(o) {
                return 0 > o.indexA || 0 > o.indexB;
            }), e = 0; e < this.m_triadBuffer.count; e++)(i = this.m_triadBuffer.data[e]).indexA = t[i.indexA],
            i.indexB = t[i.indexB], i.indexC = t[i.indexC];
        if (this.m_triadBuffer.RemoveIf(function(o) {
                return 0 > o.indexA || 0 > o.indexB || 0 > o.indexC;
            }), this.m_indexByExpirationTimeBuffer.data)
            for (i = e = 0; i < this.m_count; i++)(b = t[this.m_indexByExpirationTimeBuffer.data[i]]) !== box2d.b2_invalidParticleIndex && (this.m_indexByExpirationTimeBuffer.data[e++] = b);
        for (i = this.m_groupList; i; i = i.GetNext()) {
            b = o;
            var n = 0,
                p = !1;
            for (e = i.m_firstIndex; e < i.m_lastIndex; e++) {
                var s = t[e];
                0 <= s ? (b = box2d.b2Min(b, s), n = box2d.b2Max(n, s + 1)) : p = !0;
            }
            b < n ? (i.m_firstIndex = b, i.m_lastIndex = n, p && i.m_groupFlags & box2d.b2ParticleGroupFlag.b2_solidParticleGroup && this.SetGroupFlags(i, i.m_groupFlags | box2d.b2ParticleGroupFlag.b2_particleGroupNeedsUpdateDepth)) : (i.m_firstIndex = 0,
                i.m_lastIndex = 0, i.m_groupFlags & box2d.b2ParticleGroupFlag.b2_particleGroupCanBeEmpty || this.SetGroupFlags(i, i.m_groupFlags | box2d.b2ParticleGroupFlag.b2_particleGroupWillBeDestroyed));
        }
        for (this.m_count = o, this.m_allParticleFlags = r, this.m_needsUpdateAllParticleFlags = !1,
            i = this.m_groupList; i;) o = i.GetNext(), i.m_groupFlags & box2d.b2ParticleGroupFlag.b2_particleGroupWillBeDestroyed && this.DestroyParticleGroup(i),
            i = o;
    }, box2d.b2ParticleSystem.prototype.SolveLifetimes = function(o) {
        box2d.b2Assert(null !== this.m_expirationTimeBuffer.data), box2d.b2Assert(null !== this.m_indexByExpirationTimeBuffer.data),
            this.m_timeElapsed = this.LifetimeToExpirationTime(o.dt), o = this.GetQuantizedTimeElapsed();
        var t = this.m_expirationTimeBuffer.data,
            e = this.m_indexByExpirationTimeBuffer.data,
            r = this.GetParticleCount();
        for (this.m_expirationTimeBufferRequiresSorting && (box2d.std_sort(e, 0, r, function(o, e) {
                var r = t[o],
                    i = t[e],
                    b = 0 >= r;
                return b === 0 >= i ? r > i : b;
            }), this.m_expirationTimeBufferRequiresSorting = !1), --r; 0 <= r; --r) {
            var i = e[r],
                b = t[i];
            if (o < b || 0 >= b) break;
            this.DestroyParticle(i);
        }
    }, box2d.b2ParticleSystem.prototype.RotateBuffer = function(o, t, e) {
        function d(r) {
            return r < o ? r : r < t ? r + e - t : r < e ? r + o - t : r;
        }
        if (o !== t && t !== e) {
            if (box2d.b2Assert(t >= o && t <= e), box2d.std_rotate(this.m_flagsBuffer.data, o, t, e),
                this.m_lastBodyContactStepBuffer.data && box2d.std_rotate(this.m_lastBodyContactStepBuffer.data, o, t, e),
                this.m_bodyContactCountBuffer.data && box2d.std_rotate(this.m_bodyContactCountBuffer.data, o, t, e),
                this.m_consecutiveContactStepsBuffer.data && box2d.std_rotate(this.m_consecutiveContactStepsBuffer.data, o, t, e),
                box2d.std_rotate(this.m_positionBuffer.data, o, t, e), box2d.std_rotate(this.m_velocityBuffer.data, o, t, e),
                box2d.std_rotate(this.m_groupBuffer, o, t, e), this.m_hasForce && box2d.std_rotate(this.m_forceBuffer, o, t, e),
                this.m_staticPressureBuffer && box2d.std_rotate(this.m_staticPressureBuffer, o, t, e),
                this.m_depthBuffer && box2d.std_rotate(this.m_depthBuffer, o, t, e), this.m_colorBuffer.data && box2d.std_rotate(this.m_colorBuffer.data, o, t, e),
                this.m_userDataBuffer.data && box2d.std_rotate(this.m_userDataBuffer.data, o, t, e),
                this.m_handleIndexBuffer.data) {
                box2d.std_rotate(this.m_handleIndexBuffer.data, o, t, e);
                for (var r = o; r < e; ++r) {
                    (i = this.m_handleIndexBuffer.data[r]) && i.SetIndex(d(i.GetIndex()));
                }
            }
            if (this.m_expirationTimeBuffer.data) {
                box2d.std_rotate(this.m_expirationTimeBuffer.data, o, t, e);
                var i = this.GetParticleCount(),
                    b = this.m_indexByExpirationTimeBuffer.data;
                for (r = 0; r < i; ++r) b[r] = d(b[r]);
            }
            for (r = 0; r < this.m_proxyBuffer.count; r++)(i = this.m_proxyBuffer.data[r]).index = d(i.index);
            for (r = 0; r < this.m_contactBuffer.count; r++)(i = this.m_contactBuffer.data[r]).indexA = d(i.indexA),
                i.indexB = d(i.indexB);
            for (r = 0; r < this.m_bodyContactBuffer.count; r++)(i = this.m_bodyContactBuffer.data[r]).index = d(i.index);
            for (r = 0; r < this.m_pairBuffer.count; r++)(i = this.m_pairBuffer.data[r]).indexA = d(i.indexA),
                i.indexB = d(i.indexB);
            for (r = 0; r < this.m_triadBuffer.count; r++)(i = this.m_triadBuffer.data[r]).indexA = d(i.indexA),
                i.indexB = d(i.indexB), i.indexC = d(i.indexC);
            for (r = this.m_groupList; r; r = r.GetNext()) r.m_firstIndex = d(r.m_firstIndex),
                r.m_lastIndex = d(r.m_lastIndex - 1) + 1;
        }
    }, box2d.b2ParticleSystem.prototype.GetCriticalVelocity = function(o) {
        return this.m_particleDiameter * o.inv_dt;
    }, box2d.b2ParticleSystem.prototype.GetCriticalVelocitySquared = function(o) {
        return (o = this.GetCriticalVelocity(o)) * o;
    }, box2d.b2ParticleSystem.prototype.GetCriticalPressure = function(o) {
        return this.m_def.density * this.GetCriticalVelocitySquared(o);
    }, box2d.b2ParticleSystem.prototype.GetParticleStride = function() {
        return box2d.b2_particleStride * this.m_particleDiameter;
    }, box2d.b2ParticleSystem.prototype.GetParticleMass = function() {
        var o = this.GetParticleStride();
        return this.m_def.density * o * o;
    }, box2d.b2ParticleSystem.prototype.GetParticleInvMass = function() {
        var o = 1 / box2d.b2_particleStride * this.m_inverseDiameter;
        return this.m_inverseDensity * o * o;
    }, box2d.b2ParticleSystem.prototype.GetFixtureContactFilter = function() {
        return this.m_allParticleFlags & box2d.b2ParticleFlag.b2_fixtureContactFilterParticle ? this.m_world.m_contactManager.m_contactFilter : null;
    }, box2d.b2ParticleSystem.prototype.GetParticleContactFilter = function() {
        return this.m_allParticleFlags & box2d.b2ParticleFlag.b2_particleContactFilterParticle ? this.m_world.m_contactManager.m_contactFilter : null;
    }, box2d.b2ParticleSystem.prototype.GetFixtureContactListener = function() {
        return this.m_allParticleFlags & box2d.b2ParticleFlag.b2_fixtureContactListenerParticle ? this.m_world.m_contactManager.m_contactListener : null;
    }, box2d.b2ParticleSystem.prototype.GetParticleContactListener = function() {
        return this.m_allParticleFlags & box2d.b2ParticleFlag.b2_particleContactListenerParticle ? this.m_world.m_contactManager.m_contactListener : null;
    }, box2d.b2ParticleSystem.prototype.SetUserOverridableBuffer = function(o, t, e) {
        box2d.b2Assert(null !== t && 0 < e || null === t && 0 === e), o.data = t, o.userSuppliedCapacity = e;
    }, box2d.b2ParticleSystem.prototype.SetGroupFlags = function(o, t) {
        var e = o.m_groupFlags;
        (e ^ t) & box2d.b2ParticleGroupFlag.b2_solidParticleGroup && (t |= box2d.b2ParticleGroupFlag.b2_particleGroupNeedsUpdateDepth),
            e & ~t && (this.m_needsUpdateAllGroupFlags = !0), ~this.m_allGroupFlags & t && (t & box2d.b2ParticleGroupFlag.b2_solidParticleGroup && (this.m_depthBuffer = this.RequestBuffer(this.m_depthBuffer)),
                this.m_allGroupFlags |= t), o.m_groupFlags = t;
    }, box2d.b2ParticleSystem.prototype.RemoveSpuriousBodyContacts = function() {
        box2d.std_sort(this.m_bodyContactBuffer.data, 0, this.m_bodyContactBuffer.count, box2d.b2ParticleSystem.BodyContactCompare);
        var o = box2d.b2ParticleSystem.prototype.RemoveSpuriousBodyContacts.s_n,
            t = box2d.b2ParticleSystem.prototype.RemoveSpuriousBodyContacts.s_pos,
            e = box2d.b2ParticleSystem.prototype.RemoveSpuriousBodyContacts.s_normal,
            r = this,
            i = -1,
            b = 0;
        this.m_bodyContactBuffer.count = box2d.std_remove_if(this.m_bodyContactBuffer.data, function(n) {
            if (n.index !== i && (b = 0, i = n.index), 3 < b++) return 0, !0;
            var p = o.Copy(n.normal);
            if (p.SelfMul(r.m_particleDiameter * (1 - n.weight)), p = box2d.b2Add_V2_V2(r.m_positionBuffer.data[n.index], p, t), !n.fixture.TestPoint(p)) {
                for (var s = n.fixture.GetShape().GetChildCount(), a = 0; a < s; a++)
                    if (n.fixture.ComputeDistance(p, e, a) < box2d.b2_linearSlop) return !1;
                return 0, !0;
            }
            return !1;
        }, this.m_bodyContactBuffer.count);
    }, box2d.b2ParticleSystem.prototype.RemoveSpuriousBodyContacts.s_n = new box2d.b2Vec2(),
    box2d.b2ParticleSystem.prototype.RemoveSpuriousBodyContacts.s_pos = new box2d.b2Vec2(),
    box2d.b2ParticleSystem.prototype.RemoveSpuriousBodyContacts.s_normal = new box2d.b2Vec2(),
    box2d.b2ParticleSystem.BodyContactCompare = function(o, t) {
        return o.index === t.index ? o.weight > t.weight : o.index < t.index;
    }, box2d.b2ParticleSystem.prototype.DetectStuckParticle = function(o) {
        0 >= this.m_stuckThreshold || (++this.m_bodyContactCountBuffer.data[o], 2 === this.m_bodyContactCountBuffer.data[o] && (++this.m_consecutiveContactStepsBuffer.data[o],
                this.m_consecutiveContactStepsBuffer.data[o] > this.m_stuckThreshold && (this.m_stuckParticleBuffer.data[this.m_stuckParticleBuffer.Append()] = o)),
            this.m_lastBodyContactStepBuffer.data[o] = this.m_timestamp);
    }, box2d.b2ParticleSystem.prototype.ValidateParticleIndex = function(o) {
        return 0 <= o && o < this.GetParticleCount() && o !== box2d.b2_invalidParticleIndex;
    }, box2d.b2ParticleSystem.prototype.GetQuantizedTimeElapsed = function() {
        return Math.floor(this.m_timeElapsed / 4294967296);
    }, box2d.b2ParticleSystem.prototype.LifetimeToExpirationTime = function(o) {
        return this.m_timeElapsed + Math.floor(o / this.m_def.lifetimeGranularity * 4294967296);
    }, box2d.b2ParticleSystem.prototype.ForceCanBeApplied = function(o) {
        return !(o & box2d.b2ParticleFlag.b2_wallParticle);
    }, box2d.b2ParticleSystem.prototype.PrepareForceBuffer = function() {
        if (!this.m_hasForce) {
            for (var o = 0; o < this.m_count; o++) this.m_forceBuffer[o].SetZero();
            this.m_hasForce = !0;
        }
    }, box2d.b2ParticleSystem.prototype.IsRigidGroup = function(o) {
        return null !== o && 0 != (o.m_groupFlags & box2d.b2ParticleGroupFlag.b2_rigidParticleGroup);
    }, box2d.b2ParticleSystem.prototype.GetLinearVelocity = function(o, t, e, r) {
        return this.IsRigidGroup(o) ? o.GetLinearVelocityFromWorldPoint(e, r) : r.Copy(this.m_velocityBuffer.data[t]);
    }, box2d.b2ParticleSystem.prototype.InitDampingParameter = function(o, t, e, r, i, b, n, p) {
        o[0] = 0 < r ? 1 / r : 0, t[0] = 0 < i ? 1 / i : 0, e[0] = box2d.b2Cross_V2_V2(box2d.b2Sub_V2_V2(n, b, box2d.b2Vec2.s_t0), p);
    }, box2d.b2ParticleSystem.prototype.InitDampingParameterWithRigidGroupOrParticle = function(o, t, e, r, i, b, n, p) {
        r ? this.InitDampingParameter(o, t, e, i.GetMass(), i.GetInertia(), i.GetCenter(), n, p) : this.InitDampingParameter(o, t, e, this.m_flagsBuffer.data[b] & box2d.b2ParticleFlag.b2_wallParticle ? 0 : this.GetParticleMass(), 0, n, n, p);
    }, box2d.b2ParticleSystem.prototype.ComputeDampingImpulse = function(o, t, e, r, i, b, n) {
        return 0 < (o = o + t * e * e + r + i * b * b) ? n / o : 0;
    }, box2d.b2ParticleSystem.prototype.ApplyDamping = function(o, t, e, r, i, b, n, p) {
        r ? (i.m_linearVelocity.SelfMulAdd(n * o, p), i.m_angularVelocity += n * e * t) : this.m_velocityBuffer.data[b].SelfMulAdd(n * o, p);
    }, box2d.b2StackQueue = function(o) {
        this.m_buffer = box2d.b2MakeArray(o), this.m_end = o;
    }, box2d.b2StackQueue.prototype.m_buffer = null, box2d.b2StackQueue.prototype.m_front = 0,
    box2d.b2StackQueue.prototype.m_back = 0, box2d.b2StackQueue.prototype.m_capacity = 0,
    box2d.b2StackQueue.prototype.Push = function(o) {
        if (this.m_back >= this.m_capacity) {
            for (var t = this.m_front; t < this.m_back; t++) this.m_buffer[t - this.m_front] = this.m_buffer[t];
            this.m_back -= this.m_front, this.m_front = 0, this.m_back >= this.m_capacity && (0 < this.m_capacity ? (this.m_buffer.concat(box2d.b2MakeArray(this.m_capacity)),
                this.m_capacity *= 2) : (this.m_buffer.concat(box2d.b2MakeArray(1)), this.m_capacity = 1));
        }
        this.m_buffer[this.m_back] = o, this.m_back++;
    }, box2d.b2StackQueue.prototype.Pop = function() {
        box2d.b2Assert(this.m_front < this.m_back), this.m_buffer[this.m_front] = null,
            this.m_front++;
    }, box2d.b2StackQueue.prototype.Empty = function() {
        return box2d.b2Assert(this.m_front <= this.m_back), this.m_front === this.m_back;
    }, box2d.b2StackQueue.prototype.Front = function() {
        return this.m_buffer[this.m_front];
    }, box2d.b2VoronoiDiagram = function(o) {
        this.m_generatorBuffer = box2d.b2MakeArray(o, function(o) {
            return new box2d.b2VoronoiDiagram.Generator();
        }), this.m_generatorCapacity = o;
    }, goog.exportSymbol("box2d.b2VoronoiDiagram", box2d.b2VoronoiDiagram), box2d.b2VoronoiDiagram.prototype.m_generatorBuffer = null,
    goog.exportProperty(box2d.b2VoronoiDiagram.prototype, "m_generatorBuffer", box2d.b2VoronoiDiagram.prototype.m_generatorBuffer),
    box2d.b2VoronoiDiagram.prototype.m_generatorCapacity = 0, box2d.b2VoronoiDiagram.prototype.m_generatorCount = 0,
    box2d.b2VoronoiDiagram.prototype.m_countX = 0, box2d.b2VoronoiDiagram.prototype.m_countY = 0,
    box2d.b2VoronoiDiagram.prototype.m_diagram = null, box2d.b2VoronoiDiagram.Generator = function() {
        this.center = new box2d.b2Vec2();
    }, box2d.b2VoronoiDiagram.Generator.prototype.center = null, box2d.b2VoronoiDiagram.Generator.prototype.tag = 0,
    box2d.b2VoronoiDiagram.b2VoronoiDiagramTask = function(o, t, e, r) {
        this.m_x = o, this.m_y = t, this.m_i = e, this.m_generator = r;
    }, box2d.b2VoronoiDiagram.b2VoronoiDiagramTask.prototype.m_x = 0, box2d.b2VoronoiDiagram.b2VoronoiDiagramTask.prototype.m_y = 0,
    box2d.b2VoronoiDiagram.b2VoronoiDiagramTask.prototype.m_i = 0, box2d.b2VoronoiDiagram.b2VoronoiDiagramTask.prototype.m_generator = null,
    box2d.b2VoronoiDiagram.prototype.AddGenerator = function(o, t, e) {
        box2d.b2Assert(this.m_generatorCount < this.m_generatorCapacity);
        var r = this.m_generatorBuffer[this.m_generatorCount++];
        r.center.Copy(o), r.tag = t, r.necessary = e;
    }, goog.exportProperty(box2d.b2VoronoiDiagram.prototype, "AddGenerator", box2d.b2VoronoiDiagram.prototype.AddGenerator),
    box2d.b2VoronoiDiagram.prototype.Generate = function(o, t) {
        box2d.b2Assert(null === this.m_diagram);
        for (var e = 1 / o, r = new box2d.b2Vec2(+box2d.b2_maxFloat, +box2d.b2_maxFloat), i = new box2d.b2Vec2(-box2d.b2_maxFloat, -box2d.b2_maxFloat), b = 0, n = 0; n < this.m_generatorCount; n++) {
            (s = this.m_generatorBuffer[n]).necessary && (box2d.b2Min_V2_V2(r, s.center, r),
                box2d.b2Max_V2_V2(i, s.center, i), ++b);
        }
        if (0 === b) this.m_countY = this.m_countX = 0;
        else {
            for (r.x -= t, r.y -= t, i.x += t, i.y += t, this.m_countX = 1 + Math.floor(e * (i.x - r.x)),
                this.m_countY = 1 + Math.floor(e * (i.y - r.y)), this.m_diagram = box2d.b2MakeArray(this.m_countX * this.m_countY),
                i = new box2d.b2StackQueue(4 * this.m_countX * this.m_countY), n = 0; n < this.m_generatorCount; n++) {
                (s = this.m_generatorBuffer[n]).center.SelfSub(r).SelfMul(e);
                b = Math.floor(s.center.x);
                var p = Math.floor(s.center.y);
                0 <= b && 0 <= p && b < this.m_countX && p < this.m_countY && i.Push(new box2d.b2VoronoiDiagram.b2VoronoiDiagramTask(b, p, b + p * this.m_countX, s));
            }
            for (; !i.Empty();) b = (n = i.Front()).m_x, p = n.m_y, e = n.m_i, s = n.m_generator,
                i.Pop(), this.m_diagram[e] || (this.m_diagram[e] = s, 0 < b && i.Push(new box2d.b2VoronoiDiagram.b2VoronoiDiagramTask(b - 1, p, e - 1, s)),
                    0 < p && i.Push(new box2d.b2VoronoiDiagram.b2VoronoiDiagramTask(b, p - 1, e - this.m_countX, s)),
                    b < this.m_countX - 1 && i.Push(new box2d.b2VoronoiDiagram.b2VoronoiDiagramTask(b + 1, p, e + 1, s)),
                    p < this.m_countY - 1 && i.Push(new box2d.b2VoronoiDiagram.b2VoronoiDiagramTask(b, p + 1, e + this.m_countX, s)));
            for (p = 0; p < this.m_countY; p++)
                for (b = 0; b < this.m_countX - 1; b++) e = b + p * this.m_countX,
                    (r = this.m_diagram[e]) !== (n = this.m_diagram[e + 1]) && (i.Push(new box2d.b2VoronoiDiagram.b2VoronoiDiagramTask(b, p, e, n)),
                        i.Push(new box2d.b2VoronoiDiagram.b2VoronoiDiagramTask(b + 1, p, e + 1, r)));
            for (p = 0; p < this.m_countY - 1; p++)
                for (b = 0; b < this.m_countX; b++) e = b + p * this.m_countX,
                    (r = this.m_diagram[e]) !== (n = this.m_diagram[e + this.m_countX]) && (i.Push(new box2d.b2VoronoiDiagram.b2VoronoiDiagramTask(b, p, e, n)),
                        i.Push(new box2d.b2VoronoiDiagram.b2VoronoiDiagramTask(b, p + 1, e + this.m_countX, r)));
            for (; !i.Empty();)
                if (b = (n = i.Front()).m_x, p = n.m_y, e = n.m_i, n = n.m_generator,
                    i.Pop(), (r = this.m_diagram[e]) !== n) {
                    var s = r.center.x - b,
                        a = (r = r.center.y - p, n.center.x - b),
                        d = n.center.y - p;
                    s * s + r * r > a * a + d * d && (this.m_diagram[e] = n, 0 < b && i.Push(new box2d.b2VoronoiDiagram.b2VoronoiDiagramTask(b - 1, p, e - 1, n)),
                        0 < p && i.Push(new box2d.b2VoronoiDiagram.b2VoronoiDiagramTask(b, p - 1, e - this.m_countX, n)),
                        b < this.m_countX - 1 && i.Push(new box2d.b2VoronoiDiagram.b2VoronoiDiagramTask(b + 1, p, e + 1, n)),
                        p < this.m_countY - 1 && i.Push(new box2d.b2VoronoiDiagram.b2VoronoiDiagramTask(b, p + 1, e + this.m_countX, n)));
                }
        }
    }, goog.exportProperty(box2d.b2VoronoiDiagram.prototype, "Generate", box2d.b2VoronoiDiagram.prototype.Generate),
    box2d.b2VoronoiDiagram.prototype.GetNodes = function(o) {
        for (var t = 0; t < this.m_countY - 1; t++)
            for (var e = 0; e < this.m_countX - 1; e++) {
                var r = e + t * this.m_countX,
                    i = this.m_diagram[r],
                    b = this.m_diagram[r + 1],
                    n = this.m_diagram[r + this.m_countX];
                r = this.m_diagram[r + 1 + this.m_countX];
                b !== n && (i !== b && i !== n && (i.necessary || b.necessary || n.necessary) && o(i.tag, b.tag, n.tag),
                    r !== b && r !== n && (i.necessary || b.necessary || n.necessary) && o(b.tag, r.tag, n.tag));
            }
    }, goog.exportProperty(box2d.b2VoronoiDiagram.prototype, "GetNodes", box2d.b2VoronoiDiagram.prototype.GetNodes),
    box2d.b2RopeDef = function() {
        this.vertices = [], this.masses = [], this.gravity = new box2d.b2Vec2();
    }, goog.exportSymbol("box2d.b2RopeDef", box2d.b2RopeDef), box2d.b2RopeDef.prototype.vertices = null,
    box2d.b2RopeDef.prototype.count = 0, box2d.b2RopeDef.prototype.masses = null, box2d.b2RopeDef.prototype.gravity = null,
    box2d.b2RopeDef.prototype.damping = .1, box2d.b2RopeDef.prototype.k2 = .9, box2d.b2RopeDef.prototype.k3 = .1,
    box2d.b2Rope = function() {
        this.m_gravity = new box2d.b2Vec2();
    }, goog.exportSymbol("box2d.b2Rope", box2d.b2Rope), box2d.b2Rope.prototype.m_count = 0,
    box2d.b2Rope.prototype.m_ps = null, box2d.b2Rope.prototype.m_p0s = null, box2d.b2Rope.prototype.m_vs = null,
    box2d.b2Rope.prototype.m_ims = null, box2d.b2Rope.prototype.m_Ls = null, box2d.b2Rope.prototype.m_as = null,
    box2d.b2Rope.prototype.m_gravity = null, box2d.b2Rope.prototype.m_damping = 0, box2d.b2Rope.prototype.m_k2 = 1,
    box2d.b2Rope.prototype.m_k3 = .1, box2d.b2Rope.prototype.GetVertexCount = function() {
        return this.m_count;
    }, goog.exportProperty(box2d.b2Rope.prototype, "GetVertexCount", box2d.b2Rope.prototype.GetVertexCount),
    box2d.b2Rope.prototype.GetVertices = function() {
        return this.m_ps;
    }, goog.exportProperty(box2d.b2Rope.prototype, "GetVertices", box2d.b2Rope.prototype.GetVertices),
    box2d.b2Rope.prototype.Initialize = function(o) {
        box2d.ENABLE_ASSERTS && box2d.b2Assert(3 <= o.count), this.m_count = o.count, this.m_ps = box2d.b2Vec2.MakeArray(this.m_count),
            this.m_p0s = box2d.b2Vec2.MakeArray(this.m_count), this.m_vs = box2d.b2Vec2.MakeArray(this.m_count),
            this.m_ims = box2d.b2MakeNumberArray(this.m_count);
        for (var t = 0; t < this.m_count; ++t) {
            this.m_ps[t].Copy(o.vertices[t]), this.m_p0s[t].Copy(o.vertices[t]), this.m_vs[t].SetZero();
            var e = o.masses[t];
            this.m_ims[t] = 0 < e ? 1 / e : 0;
        }
        var r = this.m_count - 1;
        e = this.m_count - 2;
        for (this.m_Ls = box2d.b2MakeNumberArray(r), this.m_as = box2d.b2MakeNumberArray(e),
            t = 0; t < r; ++t) {
            var i = this.m_ps[t],
                b = this.m_ps[t + 1];
            this.m_Ls[t] = box2d.b2Distance(i, b);
        }
        for (t = 0; t < e; ++t) i = this.m_ps[t], b = this.m_ps[t + 1], r = this.m_ps[t + 2],
            i = box2d.b2Sub_V2_V2(b, i, box2d.b2Vec2.s_t0), r = box2d.b2Sub_V2_V2(r, b, box2d.b2Vec2.s_t1),
            b = box2d.b2Cross_V2_V2(i, r), i = box2d.b2Dot_V2_V2(i, r), this.m_as[t] = box2d.b2Atan2(b, i);
        this.m_gravity.Copy(o.gravity), this.m_damping = o.damping, this.m_k2 = o.k2, this.m_k3 = o.k3;
    }, goog.exportProperty(box2d.b2Rope.prototype, "Initialize", box2d.b2Rope.prototype.Initialize),
    box2d.b2Rope.prototype.Step = function(o, t) {
        if (0 !== o) {
            for (var e = Math.exp(-o * this.m_damping), r = 0; r < this.m_count; ++r) this.m_p0s[r].Copy(this.m_ps[r]),
                0 < this.m_ims[r] && this.m_vs[r].SelfMulAdd(o, this.m_gravity), this.m_vs[r].SelfMul(e),
                this.m_ps[r].SelfMulAdd(o, this.m_vs[r]);
            for (r = 0; r < t; ++r) this.SolveC2(), this.SolveC3(), this.SolveC2();
            for (e = 1 / o, r = 0; r < this.m_count; ++r) box2d.b2Mul_S_V2(e, box2d.b2Sub_V2_V2(this.m_ps[r], this.m_p0s[r], box2d.b2Vec2.s_t0), this.m_vs[r]);
        }
    }, goog.exportProperty(box2d.b2Rope.prototype, "Step", box2d.b2Rope.prototype.Step),
    box2d.b2Rope.prototype.SolveC2 = function() {
        for (var o = this.m_count - 1, t = 0; t < o; ++t) {
            var e = this.m_ps[t],
                r = this.m_ps[t + 1],
                i = box2d.b2Sub_V2_V2(r, e, box2d.b2Rope.s_d),
                b = i.Normalize(),
                n = this.m_ims[t],
                p = this.m_ims[t + 1];
            if (0 !== n + p) {
                var s = p / (n + p);
                e.SelfMulSub(n / (n + p) * this.m_k2 * (this.m_Ls[t] - b), i), r.SelfMulAdd(this.m_k2 * s * (this.m_Ls[t] - b), i);
            }
        }
    }, goog.exportProperty(box2d.b2Rope.prototype, "SolveC2", box2d.b2Rope.prototype.SolveC2),
    box2d.b2Rope.s_d = new box2d.b2Vec2(), box2d.b2Rope.prototype.SetAngle = function(o) {
        for (var t = this.m_count - 2, e = 0; e < t; ++e) this.m_as[e] = o;
    }, goog.exportProperty(box2d.b2Rope.prototype, "SetAngle", box2d.b2Rope.prototype.SetAngle),
    box2d.b2Rope.prototype.SolveC3 = function() {
        for (var o = this.m_count - 2, t = 0; t < o; ++t) {
            var e = this.m_ps[t],
                r = this.m_ps[t + 1],
                i = this.m_ps[t + 2],
                b = this.m_ims[t],
                n = this.m_ims[t + 1],
                p = this.m_ims[t + 2],
                s = box2d.b2Sub_V2_V2(r, e, box2d.b2Rope.s_d1),
                a = box2d.b2Sub_V2_V2(i, r, box2d.b2Rope.s_d2);
            if (0 != (x = s.LengthSquared()) * (y = a.LengthSquared())) {
                var d = box2d.b2Cross_V2_V2(s, a),
                    l = box2d.b2Dot_V2_V2(s, a),
                    x = (d = box2d.b2Atan2(d, l),
                        s = box2d.b2Mul_S_V2(-1 / x, s.SelfSkew(), box2d.b2Rope.s_Jd1), box2d.b2Mul_S_V2(1 / y, a.SelfSkew(), box2d.b2Rope.s_Jd2)),
                    y = (a = box2d.b2Rope.s_J1.Copy(s).SelfNeg(),
                        box2d.b2Sub_V2_V2(s, x, box2d.b2Rope.s_J2));
                s = x;
                if (0 !== (x = b * box2d.b2Dot_V2_V2(a, a) + n * box2d.b2Dot_V2_V2(y, y) + p * box2d.b2Dot_V2_V2(s, s))) {
                    for (x = 1 / x, l = d - this.m_as[t]; l > box2d.b2_pi;) l = (d -= 2 * box2d.b2_pi) - this.m_as[t];
                    for (; l < -box2d.b2_pi;) l = (d += 2 * box2d.b2_pi) - this.m_as[t];
                    d = -this.m_k3 * x * l, e.SelfMulAdd(b * d, a), r.SelfMulAdd(n * d, y), i.SelfMulAdd(p * d, s);
                }
            }
        }
    }, goog.exportProperty(box2d.b2Rope.prototype, "SolveC3", box2d.b2Rope.prototype.SolveC3),
    box2d.b2Rope.s_d1 = new box2d.b2Vec2(), box2d.b2Rope.s_d2 = new box2d.b2Vec2(),
    box2d.b2Rope.s_Jd1 = new box2d.b2Vec2(), box2d.b2Rope.s_Jd2 = new box2d.b2Vec2(),
    box2d.b2Rope.s_J1 = new box2d.b2Vec2(), box2d.b2Rope.s_J2 = new box2d.b2Vec2(),
    box2d.b2Rope.prototype.Draw = function(o) {
        for (var t = new box2d.b2Color(.4, .5, .7), e = 0; e < this.m_count - 1; ++e) o.DrawSegment(this.m_ps[e], this.m_ps[e + 1], t);
    }, goog.exportProperty(box2d.b2Rope.prototype, "Draw", box2d.b2Rope.prototype.Draw),
    box2d.b2ControllerEdge = function() {}, goog.exportSymbol("box2d.b2ControllerEdge", box2d.b2ControllerEdge),
    box2d.b2ControllerEdge.prototype.controller = null, goog.exportProperty(box2d.b2ControllerEdge.prototype, "controller", box2d.b2ControllerEdge.prototype.controller),
    box2d.b2ControllerEdge.prototype.body = null, goog.exportProperty(box2d.b2ControllerEdge.prototype, "body", box2d.b2ControllerEdge.prototype.body),
    box2d.b2ControllerEdge.prototype.prevBody = null, goog.exportProperty(box2d.b2ControllerEdge.prototype, "prevBody", box2d.b2ControllerEdge.prototype.prevBody),
    box2d.b2ControllerEdge.prototype.nextBody = null, goog.exportProperty(box2d.b2ControllerEdge.prototype, "nextBody", box2d.b2ControllerEdge.prototype.nextBody),
    box2d.b2ControllerEdge.prototype.prevController = null, goog.exportProperty(box2d.b2ControllerEdge.prototype, "prevController", box2d.b2ControllerEdge.prototype.prevController),
    box2d.b2ControllerEdge.prototype.nextController = null, goog.exportProperty(box2d.b2ControllerEdge.prototype, "nextController", box2d.b2ControllerEdge.prototype.nextController),
    box2d.b2Controller = function() {}, goog.exportSymbol("box2d.b2Controller", box2d.b2Controller),
    box2d.b2Controller.prototype.m_world = null, goog.exportProperty(box2d.b2Controller.prototype, "m_world", box2d.b2Controller.prototype.m_world),
    box2d.b2Controller.prototype.m_bodyList = null, goog.exportProperty(box2d.b2Controller.prototype, "m_bodyList", box2d.b2Controller.prototype.m_bodyList),
    box2d.b2Controller.prototype.m_bodyCount = 0, goog.exportProperty(box2d.b2Controller.prototype, "m_bodyCount", box2d.b2Controller.prototype.m_bodyCount),
    box2d.b2Controller.prototype.m_prev = null, goog.exportProperty(box2d.b2Controller.prototype, "m_prev", box2d.b2Controller.prototype.m_prev),
    box2d.b2Controller.prototype.m_next = null, goog.exportProperty(box2d.b2Controller.prototype, "m_next", box2d.b2Controller.prototype.m_next),
    box2d.b2Controller.prototype.Step = function(o) {}, goog.exportProperty(box2d.b2Controller.prototype, "Step", box2d.b2Controller.prototype.Step),
    box2d.b2Controller.prototype.Draw = function(o) {}, goog.exportProperty(box2d.b2Controller.prototype, "Draw", box2d.b2Controller.prototype.Draw),
    box2d.b2Controller.prototype.GetNext = function() {
        return this.m_next;
    }, goog.exportProperty(box2d.b2Controller.prototype, "GetNext", box2d.b2Controller.prototype.GetNext),
    box2d.b2Controller.prototype.GetPrev = function() {
        return this.m_prev;
    }, goog.exportProperty(box2d.b2Controller.prototype, "GetPrev", box2d.b2Controller.prototype.GetPrev),
    box2d.b2Controller.prototype.GetWorld = function() {
        return this.m_world;
    }, goog.exportProperty(box2d.b2Controller.prototype, "GetWorld", box2d.b2Controller.prototype.GetWorld),
    box2d.b2Controller.prototype.GetBodyList = function() {
        return this.m_bodyList;
    }, goog.exportProperty(box2d.b2Controller.prototype, "GetBodyList", box2d.b2Controller.prototype.GetBodyList),
    box2d.b2Controller.prototype.AddBody = function(o) {
        var t = new box2d.b2ControllerEdge();
        t.body = o, t.controller = this, t.nextBody = this.m_bodyList, t.prevBody = null,
            this.m_bodyList && (this.m_bodyList.prevBody = t), this.m_bodyList = t, ++this.m_bodyCount,
            t.nextController = o.m_controllerList, t.prevController = null, o.m_controllerList && (o.m_controllerList.prevController = t),
            o.m_controllerList = t, ++o.m_controllerCount;
    }, goog.exportProperty(box2d.b2Controller.prototype, "AddBody", box2d.b2Controller.prototype.AddBody),
    box2d.b2Controller.prototype.RemoveBody = function(o) {
        box2d.ENABLE_ASSERTS && box2d.b2Assert(0 < this.m_bodyCount);
        for (var t = this.m_bodyList; t && t.body !== o;) t = t.nextBody;
        box2d.ENABLE_ASSERTS && box2d.b2Assert(null !== t), t.prevBody && (t.prevBody.nextBody = t.nextBody),
            t.nextBody && (t.nextBody.prevBody = t.prevBody), this.m_bodyList === t && (this.m_bodyList = t.nextBody),
            --this.m_bodyCount, t.nextController && (t.nextController.prevController = t.prevController),
            t.prevController && (t.prevController.nextController = t.nextController), o.m_controllerList === t && (o.m_controllerList = t.nextController),
            --o.m_controllerCount;
    }, goog.exportProperty(box2d.b2Controller.prototype, "RemoveBody", box2d.b2Controller.prototype.RemoveBody),
    box2d.b2Controller.prototype.Clear = function() {
        for (; this.m_bodyList;) this.RemoveBody(this.m_bodyList.body);
        this.m_bodyCount = 0;
    }, goog.exportProperty(box2d.b2Controller.prototype, "Clear", box2d.b2Controller.prototype.Clear),
    box2d.b2BuoyancyController = function() {
        box2d.b2Controller.call(this), this.normal = new box2d.b2Vec2(0, 1), this.velocity = new box2d.b2Vec2(0, 0),
            this.gravity = new box2d.b2Vec2(0, 0);
    }, goog.inherits(box2d.b2BuoyancyController, box2d.b2Controller), goog.exportSymbol("box2d.b2BuoyancyController", box2d.b2BuoyancyController),
    box2d.b2BuoyancyController.prototype.normal = null, goog.exportProperty(box2d.b2BuoyancyController.prototype, "normal", box2d.b2BuoyancyController.prototype.normal),
    box2d.b2BuoyancyController.prototype.offset = 0, goog.exportProperty(box2d.b2BuoyancyController.prototype, "offset", box2d.b2BuoyancyController.prototype.offset),
    box2d.b2BuoyancyController.prototype.density = 0, goog.exportProperty(box2d.b2BuoyancyController.prototype, "density", box2d.b2BuoyancyController.prototype.density),
    box2d.b2BuoyancyController.prototype.velocity = null, goog.exportProperty(box2d.b2BuoyancyController.prototype, "velocity", box2d.b2BuoyancyController.prototype.velocity),
    box2d.b2BuoyancyController.prototype.linearDrag = 0, goog.exportProperty(box2d.b2BuoyancyController.prototype, "linearDrag", box2d.b2BuoyancyController.prototype.linearDrag),
    box2d.b2BuoyancyController.prototype.angularDrag = 0, goog.exportProperty(box2d.b2BuoyancyController.prototype, "angularDrag", box2d.b2BuoyancyController.prototype.angularDrag),
    box2d.b2BuoyancyController.prototype.useDensity = !1, goog.exportProperty(box2d.b2BuoyancyController.prototype, "useDensity", box2d.b2BuoyancyController.prototype.useDensity),
    box2d.b2BuoyancyController.prototype.useWorldGravity = !0, goog.exportProperty(box2d.b2BuoyancyController.prototype, "useWorldGravity", box2d.b2BuoyancyController.prototype.useWorldGravity),
    box2d.b2BuoyancyController.prototype.gravity = null, goog.exportProperty(box2d.b2BuoyancyController.prototype, "gravity", box2d.b2BuoyancyController.prototype.gravity),
    box2d.b2BuoyancyController.prototype.Step = function(o) {
        if (this.m_bodyList)
            for (this.useWorldGravity && this.gravity.Copy(this.GetWorld().GetGravity()),
                o = this.m_bodyList; o; o = o.nextBody) {
                var t = o.body;
                if (t.IsAwake()) {
                    for (var e = new box2d.b2Vec2(), r = new box2d.b2Vec2(), i = 0, b = 0, n = t.GetFixtureList(); n; n = n.m_next) {
                        var p = new box2d.b2Vec2(),
                            s = n.GetShape().ComputeSubmergedArea(this.normal, this.offset, t.GetTransform(), p);
                        i = i + s;
                        e.x += s * p.x, e.y += s * p.y;
                        var a = 0;
                        b = b + s * (a = this.useDensity ? n.GetDensity() : 1);
                        r.x += s * p.x * a, r.y += s * p.y * a;
                    }
                    e.x /= i, e.y /= i, r.x /= b, r.y /= b, i < box2d.b2_epsilon || ((b = this.gravity.Clone().SelfNeg()).SelfMul(this.density * i),
                        t.ApplyForce(b, r), (r = t.GetLinearVelocityFromWorldPoint(e, new box2d.b2Vec2())).SelfSub(this.velocity),
                        r.SelfMul(-this.linearDrag * i), t.ApplyForce(r, e), t.ApplyTorque(-t.GetInertia() / t.GetMass() * i * t.GetAngularVelocity() * this.angularDrag));
                }
            }
    }, goog.exportProperty(box2d.b2BuoyancyController.prototype, "Step", box2d.b2BuoyancyController.prototype.Step),
    box2d.b2BuoyancyController.prototype.Draw = function(o) {
        var t = new box2d.b2Vec2(),
            e = new box2d.b2Vec2();
        t.x = this.normal.x * this.offset + 100 * this.normal.y, t.y = this.normal.y * this.offset - 100 * this.normal.x,
            e.x = this.normal.x * this.offset - 100 * this.normal.y, e.y = this.normal.y * this.offset + 100 * this.normal.x;
        var r = new box2d.b2Color(0, 0, .8);
        o.DrawSegment(t, e, r);
    }, goog.exportProperty(box2d.b2BuoyancyController.prototype, "Draw", box2d.b2BuoyancyController.prototype.Draw),
    box2d.b2ConstantAccelController = function() {
        box2d.b2Controller.call(this), this.A = new box2d.b2Vec2(0, 0);
    }, goog.inherits(box2d.b2ConstantAccelController, box2d.b2Controller), goog.exportSymbol("box2d.b2ConstantAccelController", box2d.b2ConstantAccelController),
    box2d.b2ConstantAccelController.prototype.A = null, goog.exportProperty(box2d.b2ConstantAccelController.prototype, "A", box2d.b2ConstantAccelController.prototype.A),
    box2d.b2ConstantAccelController.prototype.Step = function(o) {
        o = box2d.b2Mul_S_V2(o.dt, this.A, box2d.b2ConstantAccelController.prototype.Step.s_dtA);
        for (var t = this.m_bodyList; t; t = t.nextBody) {
            var e = t.body;
            e.IsAwake() && e.SetLinearVelocity(box2d.b2Add_V2_V2(e.GetLinearVelocity(), o, box2d.b2Vec2.s_t0));
        }
    }, goog.exportProperty(box2d.b2ConstantAccelController.prototype, "Step", box2d.b2ConstantAccelController.prototype.Step),
    box2d.b2ConstantAccelController.prototype.Step.s_dtA = new box2d.b2Vec2(), box2d.b2ConstantForceController = function() {
        box2d.b2Controller.call(this), this.F = new box2d.b2Vec2(0, 0);
    }, goog.inherits(box2d.b2ConstantForceController, box2d.b2Controller), goog.exportSymbol("box2d.b2ConstantForceController", box2d.b2ConstantForceController),
    box2d.b2ConstantAccelController.prototype.F = null, goog.exportProperty(box2d.b2ConstantAccelController.prototype, "F", box2d.b2ConstantAccelController.prototype.F),
    box2d.b2ConstantForceController.prototype.Step = function(o) {
        for (o = this.m_bodyList; o; o = o.nextBody) {
            var t = o.body;
            t.IsAwake() && t.ApplyForce(this.F, t.GetWorldCenter());
        }
    }, goog.exportProperty(box2d.b2ConstantForceController.prototype, "Step", box2d.b2ConstantForceController.prototype.Step),
    box2d.b2GravityController = function() {
        box2d.b2Controller.call(this);
    }, goog.inherits(box2d.b2GravityController, box2d.b2Controller), goog.exportSymbol("box2d.b2GravityController", box2d.b2GravityController),
    box2d.b2GravityController.prototype.G = 1, goog.exportProperty(box2d.b2GravityController.prototype, "G", box2d.b2GravityController.prototype.G),
    box2d.b2GravityController.prototype.invSqr = !0, goog.exportProperty(box2d.b2GravityController.prototype, "invSqr", box2d.b2GravityController.prototype.invSqr),
    box2d.b2GravityController.prototype.Step = function(o) {
        if (this.invSqr)
            for (o = this.m_bodyList; o; o = o.nextBody)
                for (var t = o.body, e = t.GetWorldCenter(), r = t.GetMass(), i = this.m_bodyList; i !== o; i = i.nextBody) {
                    var b = i.body,
                        n = b.GetWorldCenter(),
                        p = b.GetMass(),
                        s = n.x - e.x,
                        a = n.y - e.y,
                        d = s * s + a * a;
                    d < box2d.b2_epsilon || ((s = box2d.b2GravityController.prototype.Step.s_f.Set(s, a)).SelfMul(this.G / d / box2d.b2Sqrt(d) * r * p),
                        t.IsAwake() && t.ApplyForce(s, e), b.IsAwake() && b.ApplyForce(s.SelfMul(-1), n));
                } else
                    for (o = this.m_bodyList; o; o = o.nextBody)
                        for (e = (t = o.body).GetWorldCenter(),
                            r = t.GetMass(), i = this.m_bodyList; i !== o; i = i.nextBody) n = (b = i.body).GetWorldCenter(),
                            p = b.GetMass(), (d = (s = n.x - e.x) * s + (a = n.y - e.y) * a) < box2d.b2_epsilon || ((s = box2d.b2GravityController.prototype.Step.s_f.Set(s, a)).SelfMul(this.G / d * r * p),
                                t.IsAwake() && t.ApplyForce(s, e), b.IsAwake() && b.ApplyForce(s.SelfMul(-1), n));
    }, goog.exportProperty(box2d.b2GravityController.prototype, "Step", box2d.b2GravityController.prototype.Step),
    box2d.b2GravityController.prototype.Step.s_f = new box2d.b2Vec2(), box2d.b2TensorDampingController = function() {
        box2d.b2Controller.call(this), this.T = new box2d.b2Mat22(), this.maxTimestep = 0;
    }, goog.inherits(box2d.b2TensorDampingController, box2d.b2Controller), goog.exportSymbol("box2d.b2TensorDampingController", box2d.b2TensorDampingController),
    box2d.b2TensorDampingController.prototype.T = new box2d.b2Mat22(), goog.exportProperty(box2d.b2TensorDampingController.prototype, "T", box2d.b2TensorDampingController.prototype.T),
    box2d.b2TensorDampingController.prototype.maxTimestep = 0, goog.exportProperty(box2d.b2TensorDampingController.prototype, "maxTimestep", box2d.b2TensorDampingController.prototype.maxTimestep),
    box2d.b2TensorDampingController.prototype.Step = function(o) {
        if (!((o = o.dt) <= box2d.b2_epsilon)) {
            o > this.maxTimestep && 0 < this.maxTimestep && (o = this.maxTimestep);
            for (var t = this.m_bodyList; t; t = t.nextBody) {
                var e = t.body;
                if (e.IsAwake()) {
                    var r = e.GetWorldVector(box2d.b2Mul_M22_V2(this.T, e.GetLocalVector(e.GetLinearVelocity(), box2d.b2Vec2.s_t0), box2d.b2Vec2.s_t1), box2d.b2TensorDampingController.prototype.Step.s_damping);
                    e.SetLinearVelocity(box2d.b2Add_V2_V2(e.GetLinearVelocity(), box2d.b2Mul_S_V2(o, r, box2d.b2Vec2.s_t0), box2d.b2Vec2.s_t1));
                }
            }
        }
    }, box2d.b2TensorDampingController.prototype.Step.s_damping = new box2d.b2Vec2(),
    box2d.b2TensorDampingController.prototype.SetAxisAligned = function(o, t) {
        this.T.ex.x = -o, this.T.ex.y = 0, this.T.ey.x = 0, this.T.ey.y = -t, this.maxTimestep = 0 < o || 0 < t ? 1 / box2d.b2Max(o, t) : 0;
    }, box2d.b2Vec2.SubVV = function(o, t, e) {
        return e.x = o.x - t.x, e.y = o.y - t.y, e;
    }, window.box2d = box2d,
    function(o, t) {
        "use strict";
        class e {}
        e.RigidBody = null, e.Physics = null;
        class r extends t.Component {
            constructor() {
                super(...arguments), this._isSensor = !1, this._density = 10, this._friction = .2,
                    this._restitution = 0;
            }
            getDef() {
                if (!this._def) {
                    var o = new window.box2d.b2FixtureDef();
                    o.density = this.density, o.friction = this.friction, o.isSensor = this.isSensor,
                        o.restitution = this.restitution, o.shape = this._shape, this._def = o;
                }
                return this._def;
            }
            _onEnable() {
                this.rigidBody ? this.refresh() : t.Laya.systemTimer.callLater(this, this._checkRigidBody);
            }
            _checkRigidBody() {
                if (!this.rigidBody) {
                    var o = this.owner.getComponent(e.RigidBody);
                    o && (this.rigidBody = o, this.refresh());
                }
            }
            _onDestroy() {
                this.rigidBody && (this.fixture && (this.fixture.GetBody() == this.rigidBody.body && this.rigidBody.body.DestroyFixture(this.fixture),
                    this.fixture = null), this.rigidBody = null, this._shape = null, this._def = null);
            }
            get isSensor() {
                return this._isSensor;
            }
            set isSensor(o) {
                this._isSensor = o, this._def && (this._def.isSensor = o, this.refresh());
            }
            get density() {
                return this._density;
            }
            set density(o) {
                this._density = o, this._def && (this._def.density = o, this.refresh());
            }
            get friction() {
                return this._friction;
            }
            set friction(o) {
                this._friction = o, this._def && (this._def.friction = o, this.refresh());
            }
            get restitution() {
                return this._restitution;
            }
            set restitution(o) {
                this._restitution = o, this._def && (this._def.restitution = o, this.refresh());
            }
            refresh() {
                if (this.enabled && this.rigidBody) {
                    var o = this.rigidBody.body;
                    this.fixture && (this.fixture.GetBody() == this.rigidBody.body && this.rigidBody.body.DestroyFixture(this.fixture),
                        this.fixture.Destroy(), this.fixture = null);
                    var t = this.getDef();
                    t.filter.groupIndex = this.rigidBody.group, t.filter.categoryBits = this.rigidBody.category,
                        t.filter.maskBits = this.rigidBody.mask, this.fixture = o.CreateFixture(t), this.fixture.collider = this;
                }
            }
            resetShape(o = !0) {}
            get isSingleton() {
                return !1;
            }
        }
        t.ClassUtils.regClass("laya.physics.ColliderBase", r), t.ClassUtils.regClass("Laya.ColliderBase", r);
        class i extends t.Component {
            constructor() {
                super(...arguments), this._type = "dynamic", this._allowSleep = !0, this._angularVelocity = 0,
                    this._angularDamping = 0, this._linearVelocity = {
                        x: 0,
                        y: 0
                    }, this._linearDamping = 0, this._bullet = !1, this._allowRotation = !0, this._gravityScale = 1,
                    this.group = 0, this.category = 1, this.mask = -1, this.label = "RigidBody";
            }
            _createBody() {
                if (!this._body && this.owner) {
                    var o = this.owner,
                        r = window.box2d,
                        i = new r.b2BodyDef(),
                        b = o.localToGlobal(t.Point.TEMP.setTo(0, 0), !1, e.Physics.I.worldRoot);
                    i.position.Set(b.x / e.Physics.PIXEL_RATIO, b.y / e.Physics.PIXEL_RATIO), i.angle = t.Utils.toRadian(o.rotation),
                        i.allowSleep = this._allowSleep, i.angularDamping = this._angularDamping, i.angularVelocity = this._angularVelocity,
                        i.bullet = this._bullet, i.fixedRotation = !this._allowRotation, i.gravityScale = this._gravityScale,
                        i.linearDamping = this._linearDamping;
                    var n = this._linearVelocity;
                    (n && 0 != n.x || 0 != n.y) && (i.linearVelocity = new r.b2Vec2(n.x, n.y)), i.type = r.b2BodyType["b2_" + this._type + "Body"],
                        this._body = e.Physics.I._createBody(i), this.resetCollider(!1);
                }
            }
            _onAwake() {
                this._createBody();
            }
            _onEnable() {
                var o = this;
                this._createBody(), t.Laya.physicsTimer.frameLoop(1, this, this._sysPhysicToNode);
                var e = this.owner;
                if (this.accessGetSetFunc(e, "x", "set") && !e._changeByRigidBody) {
                    e._changeByRigidBody = !0, this._overSet(e, "x", function(t) {
                        o.accessGetSetFunc(e, "x", "set")(t), o._sysPosToPhysic();
                    }), this._overSet(e, "y", function(t) {
                        o.accessGetSetFunc(e, "y", "set")(t), o._sysPosToPhysic();
                    }), this._overSet(e, "rotation", function(t) {
                        o.accessGetSetFunc(e, "rotation", "set")(t), o._sysNodeToPhysic();
                    }), this._overSet(e, "scaleX", function(t) {
                        o.accessGetSetFunc(e, "scaleX", "set")(t), o.resetCollider(!0);
                    }), this._overSet(e, "scaleY", function(t) {
                        o.accessGetSetFunc(e, "scaleY", "set")(t), o.resetCollider(!0);
                    });
                }
            }
            accessGetSetFunc(o, t, e) {
                if (-1 === ["get", "set"].indexOf(e)) return;
                let r = `_$${e}_${t}`;
                if (o[r]) return o[r];
                let i, b = o.constructor;
                for (; b;) {
                    if ((i = Object.getOwnPropertyDescriptor(b.prototype, t)) && i[e]) {
                        o[r] = i[e].bind(o);
                        break;
                    }
                    b = Object.getPrototypeOf(b);
                }
                return o[r];
            }
            resetCollider(o) {
                var t = this.owner.getComponents(r);
                if (t)
                    for (var e = 0, i = t.length; e < i; e++) {
                        var b = t[e];
                        b.rigidBody = this, o ? b.resetShape() : b.refresh();
                    }
            }
            _sysPhysicToNode() {
                if ("static" != this.type && this._body.IsAwake()) {
                    var o = this._body.GetPosition(),
                        r = this._body.GetAngle(),
                        i = this.owner;
                    if (this.accessGetSetFunc(i, "rotation", "set")(t.Utils.toAngle(r) - i.parent.globalRotation),
                        0 == r) {
                        var b = i.parent.globalToLocal(t.Point.TEMP.setTo(o.x * e.Physics.PIXEL_RATIO + i.pivotX, o.y * e.Physics.PIXEL_RATIO + i.pivotY), !1, e.Physics.I.worldRoot);
                        this.accessGetSetFunc(i, "x", "set")(b.x), this.accessGetSetFunc(i, "y", "set")(b.y);
                    } else(b = i.globalToLocal(t.Point.TEMP.setTo(o.x * e.Physics.PIXEL_RATIO, o.y * e.Physics.PIXEL_RATIO), !1, e.Physics.I.worldRoot)).x += i.pivotX,
                        b.y += i.pivotY, b = i.toParentPoint(b), this.accessGetSetFunc(i, "x", "set")(b.x),
                        this.accessGetSetFunc(i, "y", "set")(b.y);
                }
            }
            _sysNodeToPhysic() {
                var o = this.owner;
                this._body.SetAngle(t.Utils.toRadian(o.rotation));
                var r = o.localToGlobal(t.Point.TEMP.setTo(0, 0), !1, e.Physics.I.worldRoot);
                this._body.SetPositionXY(r.x / e.Physics.PIXEL_RATIO, r.y / e.Physics.PIXEL_RATIO);
            }
            _sysPosToPhysic() {
                var o = this.owner.localToGlobal(t.Point.TEMP.setTo(0, 0), !1, e.Physics.I.worldRoot);
                this._body.SetPositionXY(o.x / e.Physics.PIXEL_RATIO, o.y / e.Physics.PIXEL_RATIO);
            }
            _overSet(o, t, e) {
                Object.defineProperty(o, t, {
                    get: this.accessGetSetFunc(o, t, "get"),
                    set: e,
                    enumerable: !1,
                    configurable: !0
                });
            }
            _onDisable() {
                t.Laya.physicsTimer.clear(this, this._sysPhysicToNode), e.Physics.I._removeBody(this._body),
                    this._body = null;
                var o = this.owner;
                o._changeByRigidBody && (this._overSet(o, "x", this.accessGetSetFunc(o, "x", "set")),
                    this._overSet(o, "y", this.accessGetSetFunc(o, "y", "set")), this._overSet(o, "rotation", this.accessGetSetFunc(o, "rotation", "set")),
                    this._overSet(o, "scaleX", this.accessGetSetFunc(o, "scaleX", "set")), this._overSet(o, "scaleY", this.accessGetSetFunc(o, "scaleY", "set")),
                    o._changeByRigidBody = !1);
            }
            getBody() {
                return this._body || this._onAwake(), this._body;
            }
            get body() {
                return this._body || this._onAwake(), this._body;
            }
            applyForce(o, t) {
                this._body || this._onAwake(), this._body.ApplyForce(t, o);
            }
            applyForceToCenter(o) {
                this._body || this._onAwake(), this._body.ApplyForceToCenter(o);
            }
            applyLinearImpulse(o, t) {
                this._body || this._onAwake(), this._body.ApplyLinearImpulse(t, o);
            }
            applyLinearImpulseToCenter(o) {
                this._body || this._onAwake(), this._body.ApplyLinearImpulseToCenter(o);
            }
            applyTorque(o) {
                this._body || this._onAwake(), this._body.ApplyTorque(o);
            }
            setVelocity(o) {
                this._body || this._onAwake(), this._body.SetLinearVelocity(o);
            }
            setAngle(o) {
                this._body || this._onAwake(), this._body.SetAngle(o), this._body.SetAwake(!0);
            }
            getMass() {
                return this._body ? this._body.GetMass() : 0;
            }
            getCenter() {
                this._body || this._onAwake();
                var o = this._body.GetLocalCenter();
                return o.x = o.x * e.Physics.PIXEL_RATIO, o.y = o.y * e.Physics.PIXEL_RATIO, o;
            }
            getWorldCenter() {
                this._body || this._onAwake();
                var o = this._body.GetWorldCenter();
                return o.x = o.x * e.Physics.PIXEL_RATIO, o.y = o.y * e.Physics.PIXEL_RATIO, o;
            }
            get type() {
                return this._type;
            }
            set type(o) {
                this._type = o, this._body && this._body.SetType(window.box2d.b2BodyType["b2_" + this._type + "Body"]);
            }
            get gravityScale() {
                return this._gravityScale;
            }
            set gravityScale(o) {
                this._gravityScale = o, this._body && this._body.SetGravityScale(o);
            }
            get allowRotation() {
                return this._allowRotation;
            }
            set allowRotation(o) {
                this._allowRotation = o, this._body && this._body.SetFixedRotation(!o);
            }
            get allowSleep() {
                return this._allowSleep;
            }
            set allowSleep(o) {
                this._allowSleep = o, this._body && this._body.SetSleepingAllowed(o);
            }
            get angularDamping() {
                return this._angularDamping;
            }
            set angularDamping(o) {
                this._angularDamping = o, this._body && this._body.SetAngularDamping(o);
            }
            get angularVelocity() {
                return this._body ? this._body.GetAngularVelocity() : this._angularVelocity;
            }
            set angularVelocity(o) {
                this._angularVelocity = o, this._body && this._body.SetAngularVelocity(o);
            }
            get linearDamping() {
                return this._linearDamping;
            }
            set linearDamping(o) {
                this._linearDamping = o, this._body && this._body.SetLinearDamping(o);
            }
            get linearVelocity() {
                if (this._body) {
                    var o = this._body.GetLinearVelocity();
                    return {
                        x: o.x,
                        y: o.y
                    };
                }
                return this._linearVelocity;
            }
            set linearVelocity(o) {
                o && (o instanceof Array && (o = {
                    x: o[0],
                    y: o[1]
                }), this._linearVelocity = o, this._body && this._body.SetLinearVelocity(new window.box2d.b2Vec2(o.x, o.y)));
            }
            get bullet() {
                return this._bullet;
            }
            set bullet(o) {
                this._bullet = o, this._body && this._body.SetBullet(o);
            }
        }
        t.ClassUtils.regClass("laya.physics.RigidBody", i), t.ClassUtils.regClass("Laya.RigidBody", i);
        class b extends t.EventDispatcher {
            constructor() {
                super(), this.box2d = window.box2d, this.velocityIterations = 8, this.positionIterations = 3,
                    this._eventList = [];
            }
            static get I() {
                return b._I || (b._I = new b());
            }
            static enable(o = null) {
                b.I.start(o), e.RigidBody = i, e.Physics = this;
            }
            start(o = null) {
                if (!this._enabled) {
                    this._enabled = !0, o || (o = {});
                    var e = window.box2d;
                    if (null == e) return;
                    var r = new e.b2Vec2(0, o.gravity || 500 / b.PIXEL_RATIO);
                    this.world = new e.b2World(r), this.world.SetContactListener(new n()), this.allowSleeping = null == o.allowSleeping || o.allowSleeping,
                        o.customUpdate || t.Laya.physicsTimer.frameLoop(1, this, this._update), this._emptyBody = this._createBody(new window.box2d.b2BodyDef());
                }
            }
            _update() {
                this.world.Step(1 / 60, this.velocityIterations, this.positionIterations, 3);
                var o = this._eventList.length;
                if (o > 0) {
                    for (var t = 0; t < o; t += 2) this._sendEvent(this._eventList[t], this._eventList[t + 1]);
                    this._eventList.length = 0;
                }
            }
            _sendEvent(o, e) {
                var r = e.GetFixtureA().collider,
                    i = e.GetFixtureB().collider,
                    n = r.owner,
                    p = i.owner;
                if (e.getHitInfo = function() {
                        var o = new this.box2d.b2WorldManifold();
                        this.GetWorldManifold(o);
                        var t = o.points[0];
                        return t.x *= b.PIXEL_RATIO, t.y *= b.PIXEL_RATIO, o;
                    }, n) {
                    var s = [i, r, e];
                    0 === o ? (n.event(t.Event.TRIGGER_ENTER, s), n._triggered ? n.event(t.Event.TRIGGER_STAY, s) : n._triggered = !0) : (n._triggered = !1,
                        n.event(t.Event.TRIGGER_EXIT, s));
                }
                p && (s = [r, i, e], 0 === o ? (p.event(t.Event.TRIGGER_ENTER, s), p._triggered ? p.event(t.Event.TRIGGER_STAY, s) : p._triggered = !0) : (p._triggered = !1,
                    p.event(t.Event.TRIGGER_EXIT, s)));
            }
            _createBody(o) {
                return this.world ? this.world.CreateBody(o) : null;
            }
            _removeBody(o) {
                this.world && this.world.DestroyBody(o);
            }
            _createJoint(o) {
                return this.world ? this.world.CreateJoint(o) : null;
            }
            _removeJoint(o) {
                this.world && this.world.DestroyJoint(o);
            }
            stop() {
                t.Laya.physicsTimer.clear(this, this._update);
            }
            get allowSleeping() {
                return this.world.GetAllowSleeping();
            }
            set allowSleeping(o) {
                this.world.SetAllowSleeping(o);
            }
            get gravity() {
                return this.world.GetGravity();
            }
            set gravity(o) {
                this.world.SetGravity(o);
            }
            getBodyCount() {
                return this.world.GetBodyCount();
            }
            getContactCount() {
                return this.world.GetContactCount();
            }
            getJointCount() {
                return this.world.GetJointCount();
            }
            get worldRoot() {
                return this._worldRoot || t.Laya.stage;
            }
            set worldRoot(o) {
                if (this._worldRoot = o, o) {
                    var e = o.localToGlobal(t.Point.TEMP.setTo(0, 0));
                    this.world.ShiftOrigin({
                        x: e.x / b.PIXEL_RATIO,
                        y: e.y / b.PIXEL_RATIO
                    });
                }
            }
        }
        b.PIXEL_RATIO = 50, t.ClassUtils.regClass("laya.physics.Physics", b), t.ClassUtils.regClass("Laya.Physics", b);
        class n {
            BeginContact(o) {
                b.I._eventList.push(0, o);
            }
            EndContact(o) {
                b.I._eventList.push(1, o);
            }
            PreSolve(o, t) {}
            PostSolve(o, t) {}
        }
        class p extends r {
            constructor() {
                super(...arguments), this._x = 0, this._y = 0, this._width = 100, this._height = 100;
            }
            getDef() {
                return this._shape || (this._shape = new window.box2d.b2PolygonShape(), this._setShape(!1)),
                    this.label = this.label || "BoxCollider", super.getDef();
            }
            _setShape(o = !0) {
                var t = this.owner.scaleX || 1,
                    e = this.owner.scaleY || 1;
                this._shape.SetAsBox(this._width / 2 / b.PIXEL_RATIO * t, this._height / 2 / b.PIXEL_RATIO * e, new window.box2d.b2Vec2((this._width / 2 + this._x) / b.PIXEL_RATIO * t, (this._height / 2 + this._y) / b.PIXEL_RATIO * e)),
                    o && this.refresh();
            }
            get x() {
                return this._x;
            }
            set x(o) {
                this._x = o, this._shape && this._setShape();
            }
            get y() {
                return this._y;
            }
            set y(o) {
                this._y = o, this._shape && this._setShape();
            }
            get width() {
                return this._width;
            }
            set width(o) {
                if (o <= 0) throw "BoxCollider size cannot be less than 0";
                this._width = o, this._shape && this._setShape();
            }
            get height() {
                return this._height;
            }
            set height(o) {
                if (o <= 0) throw "BoxCollider size cannot be less than 0";
                this._height = o, this._shape && this._setShape();
            }
            resetShape(o = !0) {
                this._setShape();
            }
        }
        t.ClassUtils.regClass("laya.physics.BoxCollider", p), t.ClassUtils.regClass("Laya.BoxCollider", p);
        class s extends r {
            constructor() {
                super(...arguments), this._x = 0, this._y = 0, this._points = "0,0,100,0", this._loop = !1;
            }
            getDef() {
                return this._shape || (this._shape = new window.box2d.b2ChainShape(), this._setShape(!1)),
                    this.label = this.label || "ChainCollider", super.getDef();
            }
            _setShape(o = !0) {
                var t = this._points.split(","),
                    e = t.length;
                if (e % 2 == 1) throw "ChainCollider points lenth must a multiplier of 2";
                for (var r = [], i = 0, n = e; i < n; i += 2) r.push(new window.box2d.b2Vec2((this._x + parseInt(t[i])) / b.PIXEL_RATIO, (this._y + parseInt(t[i + 1])) / b.PIXEL_RATIO));
                this._loop ? this._shape.CreateLoop(r, e / 2) : this._shape.CreateChain(r, e / 2),
                    o && this.refresh();
            }
            get x() {
                return this._x;
            }
            set x(o) {
                this._x = o, this._shape && this._setShape();
            }
            get y() {
                return this._y;
            }
            set y(o) {
                this._y = o, this._shape && this._setShape();
            }
            get points() {
                return this._points;
            }
            set points(o) {
                if (!o) throw "ChainCollider points cannot be empty";
                this._points = o, this._shape && this._setShape();
            }
            get loop() {
                return this._loop;
            }
            set loop(o) {
                this._loop = o, this._shape && this._setShape();
            }
        }
        t.ClassUtils.regClass("laya.physics.ChainCollider", s), t.ClassUtils.regClass("Laya.ChainCollider", s);
        class a extends r {
            constructor() {
                super(...arguments), this._x = 0, this._y = 0, this._radius = 50;
            }
            getDef() {
                return this._shape || (this._shape = new window.box2d.b2CircleShape(), this._setShape(!1)),
                    this.label = this.label || "CircleCollider", super.getDef();
            }
            _setShape(o = !0) {
                var t = this.owner.scaleX || 1;
                this._shape.m_radius = this._radius / b.PIXEL_RATIO * t, this._shape.m_p.Set((this._radius + this._x) / b.PIXEL_RATIO * t, (this._radius + this._y) / b.PIXEL_RATIO * t),
                    o && this.refresh();
            }
            get x() {
                return this._x;
            }
            set x(o) {
                this._x = o, this._shape && this._setShape();
            }
            get y() {
                return this._y;
            }
            set y(o) {
                this._y = o, this._shape && this._setShape();
            }
            get radius() {
                return this._radius;
            }
            set radius(o) {
                if (o <= 0) throw "CircleCollider radius cannot be less than 0";
                this._radius = o, this._shape && this._setShape();
            }
            resetShape(o = !0) {
                this._setShape();
            }
        }
        t.ClassUtils.regClass("laya.physics.CircleCollider", a), t.ClassUtils.regClass("Laya.CircleCollider", a);
        class d extends t.Sprite {
            constructor() {
                super(), this.m_drawFlags = 99, d._inited || (d._inited = !0, d.init()), this._camera = {},
                    this._camera.m_center = new d.box2d.b2Vec2(0, 0), this._camera.m_extent = 25, this._camera.m_zoom = 1,
                    this._camera.m_width = 1280, this._camera.m_height = 800, this._mG = new t.Graphics(),
                    this.graphics = this._mG, this._textSp = new t.Sprite(), this._textG = this._textSp.graphics,
                    this.addChild(this._textSp);
            }
            static init() {
                d.box2d = t.Browser.window.box2d, d.DrawString_s_color = new d.box2d.b2Color(.9, .6, .6),
                    d.DrawStringWorld_s_p = new d.box2d.b2Vec2(), d.DrawStringWorld_s_cc = new d.box2d.b2Vec2(),
                    d.DrawStringWorld_s_color = new d.box2d.b2Color(.5, .9, .5);
            }
            render(o, t, e) {
                this._renderToGraphic(), super.render(o, t, e);
            }
            _renderToGraphic() {
                this.world && (this._textG.clear(), this._mG.clear(), this._mG.save(), this._mG.scale(b.PIXEL_RATIO, b.PIXEL_RATIO),
                    this.lineWidth = 1 / b.PIXEL_RATIO, this.world.DrawDebugData(), this._mG.restore());
            }
            SetFlags(o) {
                this.m_drawFlags = o;
            }
            GetFlags() {
                return this.m_drawFlags;
            }
            AppendFlags(o) {
                this.m_drawFlags |= o;
            }
            ClearFlags(o) {
                this.m_drawFlags &= ~o;
            }
            PushTransform(o) {
                this._mG.save(), this._mG.translate(o.p.x, o.p.y), this._mG.rotate(o.q.GetAngle());
            }
            PopTransform(o) {
                this._mG.restore();
            }
            DrawPolygon(o, t, e) {
                var r, i;
                for (o.length, i = [], r = 0; r < t; r++) i.push(o[r].x, o[r].y);
                this._mG.drawPoly(0, 0, i, null, e.MakeStyleString(1), this.lineWidth);
            }
            DrawSolidPolygon(o, t, e) {
                var r, i;
                for (o.length, i = [], r = 0; r < t; r++) i.push(o[r].x, o[r].y);
                this._mG.drawPoly(0, 0, i, e.MakeStyleString(.5), e.MakeStyleString(1), this.lineWidth);
            }
            DrawCircle(o, t, e) {
                this._mG.drawCircle(o.x, o.y, t, null, e.MakeStyleString(1), this.lineWidth);
            }
            DrawSolidCircle(o, t, e, r) {
                var i = o.x,
                    b = o.y;
                this._mG.drawCircle(i, b, t, r.MakeStyleString(.5), r.MakeStyleString(1), this.lineWidth),
                    this._mG.drawLine(i, b, i + e.x * t, b + e.y * t, r.MakeStyleString(1), this.lineWidth);
            }
            DrawParticles(o, t, e, r) {
                if (null !== e)
                    for (var i = 0; i < r; ++i) {
                        var b = o[i],
                            n = e[i];
                        this._mG.drawCircle(b.x, b.y, t, n.MakeStyleString(), null, this.lineWidth);
                    } else
                        for (i = 0; i < r; ++i) b = o[i], this._mG.drawCircle(b.x, b.y, t, "#ffff00", null, this.lineWidth);
            }
            DrawSegment(o, t, e) {
                this._mG.drawLine(o.x, o.y, t.x, t.y, e.MakeStyleString(1), this.lineWidth);
            }
            DrawTransform(o) {
                this.PushTransform(o), this._mG.drawLine(0, 0, 1, 0, d.box2d.b2Color.RED.MakeStyleString(1), this.lineWidth),
                    this._mG.drawLine(0, 0, 0, 1, d.box2d.b2Color.GREEN.MakeStyleString(1), this.lineWidth),
                    this.PopTransform(o);
            }
            DrawPoint(o, t, e) {
                t *= this._camera.m_zoom;
                var r = (t /= this._camera.m_extent) / 2;
                this._mG.drawRect(o.x - r, o.y - r, t, t, e.MakeStyleString(), null);
            }
            DrawString(o, t, e) {
                this._textG.fillText(e, o, t, "15px DroidSans", d.DrawString_s_color.MakeStyleString(), "left");
            }
            DrawStringWorld(o, t, e) {
                this.DrawString(o, t, e);
            }
            DrawAABB(o, t) {
                var e = o.lowerBound.x,
                    r = o.lowerBound.y,
                    i = o.upperBound.x - o.lowerBound.x,
                    b = o.upperBound.y - o.lowerBound.y;
                this._mG.drawRect(e, r, i, b, null, t.MakeStyleString(), this.lineWidth);
            }
            static enable(o = 99) {
                if (!d.I) {
                    var e = new d();
                    e.world = b.I.world, e.world.SetDebugDraw(e), e.zOrder = 1e3, e.m_drawFlags = o,
                        t.Laya.stage.addChild(e), d.I = e;
                }
                return e;
            }
        }
        d._inited = !1, t.ClassUtils.regClass("laya.physics.PhysicsDebugDraw", d), t.ClassUtils.regClass("Laya.PhysicsDebugDraw", d);
        class l extends r {
            constructor() {
                super(...arguments), this._x = 0, this._y = 0, this._points = "50,0,100,100,0,100";
            }
            getDef() {
                return this._shape || (this._shape = new window.box2d.b2PolygonShape(), this._setShape(!1)),
                    this.label = this.label || "PolygonCollider", super.getDef();
            }
            _setShape(o = !0) {
                var t = this._points.split(","),
                    e = t.length;
                if (e < 6) throw "PolygonCollider points must be greater than 3";
                if (e % 2 == 1) throw "PolygonCollider points lenth must a multiplier of 2";
                for (var r = [], i = 0, n = e; i < n; i += 2) r.push(new window.box2d.b2Vec2((this._x + parseInt(t[i])) / b.PIXEL_RATIO, (this._y + parseInt(t[i + 1])) / b.PIXEL_RATIO));
                this._shape.Set(r, e / 2), o && this.refresh();
            }
            get x() {
                return this._x;
            }
            set x(o) {
                this._x = o, this._shape && this._setShape();
            }
            get y() {
                return this._y;
            }
            set y(o) {
                this._y = o, this._shape && this._setShape();
            }
            get points() {
                return this._points;
            }
            set points(o) {
                if (!o) throw "PolygonCollider points cannot be empty";
                this._points = o, this._shape && this._setShape();
            }
        }
        t.ClassUtils.regClass("laya.physics.PolygonCollider", l), t.ClassUtils.regClass("Laya.PolygonCollider", l);
        class x extends t.Component {
            get joint() {
                return this._joint || this._createJoint(), this._joint;
            }
            _onEnable() {
                this._createJoint();
            }
            _onAwake() {
                this._createJoint();
            }
            _createJoint() {}
            _onDisable() {
                this._joint && (b.I._removeJoint(this._joint), this._joint = null);
            }
        }
        t.ClassUtils.regClass("laya.physics.joint.JointBase", x), t.ClassUtils.regClass("Laya.JointBase", x);
        class y extends x {
            constructor() {
                super(...arguments), this.selfAnchor = [0, 0], this.otherAnchor = [0, 0], this.collideConnected = !1,
                    this._length = 0, this._frequency = 0, this._damping = 0;
            }
            _createJoint() {
                if (!this._joint) {
                    if (this.selfBody = this.selfBody || this.owner.getComponent(i), !this.selfBody) throw "selfBody can not be empty";
                    var o = window.box2d,
                        t = y._temp || (y._temp = new o.b2DistanceJointDef());
                    t.bodyA = this.otherBody ? this.otherBody.getBody() : b.I._emptyBody, t.bodyB = this.selfBody.getBody(),
                        t.localAnchorA.Set(this.otherAnchor[0] / b.PIXEL_RATIO, this.otherAnchor[1] / b.PIXEL_RATIO),
                        t.localAnchorB.Set(this.selfAnchor[0] / b.PIXEL_RATIO, this.selfAnchor[1] / b.PIXEL_RATIO),
                        t.frequencyHz = this._frequency, t.dampingRatio = this._damping, t.collideConnected = this.collideConnected;
                    var e = t.bodyA.GetWorldPoint(t.localAnchorA, new o.b2Vec2()),
                        r = t.bodyB.GetWorldPoint(t.localAnchorB, new o.b2Vec2());
                    t.length = this._length / b.PIXEL_RATIO || o.b2Vec2.SubVV(r, e, new o.b2Vec2()).Length(),
                        this._joint = b.I._createJoint(t);
                }
            }
            get length() {
                return this._length;
            }
            set length(o) {
                this._length = o, this._joint && this._joint.SetLength(o / b.PIXEL_RATIO);
            }
            get frequency() {
                return this._frequency;
            }
            set frequency(o) {
                this._frequency = o, this._joint && this._joint.SetFrequency(o);
            }
            get damping() {
                return this._damping;
            }
            set damping(o) {
                this._damping = o, this._joint && this._joint.SetDampingRatio(o);
            }
        }
        t.ClassUtils.regClass("laya.physics.joint.DistanceJoint", y), t.ClassUtils.regClass("Laya.DistanceJoint", y);
        class c extends x {
            constructor() {
                super(...arguments), this.collideConnected = !1, this._ratio = 1;
            }
            _createJoint() {
                if (!this._joint) {
                    if (!this.joint1) throw "Joint1 can not be empty";
                    if (!this.joint2) throw "Joint2 can not be empty";
                    var o = window.box2d,
                        t = c._temp || (c._temp = new o.b2GearJointDef());
                    t.bodyA = this.joint1.owner.getComponent(i).getBody(), t.bodyB = this.joint2.owner.getComponent(i).getBody(),
                        t.joint1 = this.joint1.joint, t.joint2 = this.joint2.joint, t.ratio = this._ratio,
                        t.collideConnected = this.collideConnected, this._joint = b.I._createJoint(t);
                }
            }
            get ratio() {
                return this._ratio;
            }
            set ratio(o) {
                this._ratio = o, this._joint && this._joint.SetRatio(o);
            }
        }
        t.ClassUtils.regClass("laya.physics.joint.GearJoint", c), t.ClassUtils.regClass("Laya.GearJoint", c);
        class _ extends x {
            constructor() {
                super(...arguments), this.collideConnected = !1, this._linearOffset = [0, 0],
                    this._angularOffset = 0, this._maxForce = 1e3, this._maxTorque = 1e3, this._correctionFactor = .3;
            }
            _createJoint() {
                if (!this._joint) {
                    if (!this.otherBody) throw "otherBody can not be empty";
                    if (this.selfBody = this.selfBody || this.owner.getComponent(i), !this.selfBody) throw "selfBody can not be empty";
                    var o = window.box2d,
                        t = _._temp || (_._temp = new o.b2MotorJointDef());
                    t.Initialize(this.otherBody.getBody(), this.selfBody.getBody()), t.linearOffset = new o.b2Vec2(this._linearOffset[0] / b.PIXEL_RATIO, this._linearOffset[1] / b.PIXEL_RATIO),
                        t.angularOffset = this._angularOffset, t.maxForce = this._maxForce, t.maxTorque = this._maxTorque,
                        t.correctionFactor = this._correctionFactor, t.collideConnected = this.collideConnected,
                        this._joint = b.I._createJoint(t);
                }
            }
            get linearOffset() {
                return this._linearOffset;
            }
            set linearOffset(o) {
                this._linearOffset = o, this._joint && this._joint.SetLinearOffset(new window.box2d.b2Vec2(o[0] / b.PIXEL_RATIO, o[1] / b.PIXEL_RATIO));
            }
            get angularOffset() {
                return this._angularOffset;
            }
            set angularOffset(o) {
                this._angularOffset = o, this._joint && this._joint.SetAngularOffset(o);
            }
            get maxForce() {
                return this._maxForce;
            }
            set maxForce(o) {
                this._maxForce = o, this._joint && this._joint.SetMaxForce(o);
            }
            get maxTorque() {
                return this._maxTorque;
            }
            set maxTorque(o) {
                this._maxTorque = o, this._joint && this._joint.SetMaxTorque(o);
            }
            get correctionFactor() {
                return this._correctionFactor;
            }
            set correctionFactor(o) {
                this._correctionFactor = o, this._joint && this._joint.SetCorrectionFactor(o);
            }
        }
        t.ClassUtils.regClass("laya.physics.joint.MotorJoint", _), t.ClassUtils.regClass("Laya.MotorJoint", _);
        class m extends x {
            constructor() {
                super(...arguments), this._maxForce = 1e4, this._frequency = 5, this._damping = .7;
            }
            _onEnable() {
                this.owner.on(t.Event.MOUSE_DOWN, this, this.onMouseDown);
            }
            _onAwake() {}
            onMouseDown() {
                this._createJoint(), t.Laya.stage.on(t.Event.MOUSE_MOVE, this, this.onMouseMove),
                    t.Laya.stage.once(t.Event.MOUSE_UP, this, this.onStageMouseUp);
            }
            _createJoint() {
                if (!this._joint) {
                    if (this.selfBody = this.selfBody || this.owner.getComponent(i), !this.selfBody) throw "selfBody can not be empty";
                    var o = window.box2d,
                        e = m._temp || (m._temp = new o.b2MouseJointDef());
                    if (this.anchor) var r = this.selfBody.owner.localToGlobal(t.Point.TEMP.setTo(this.anchor[0], this.anchor[1]), !1, b.I.worldRoot);
                    else r = b.I.worldRoot.globalToLocal(t.Point.TEMP.setTo(t.Laya.stage.mouseX, t.Laya.stage.mouseY));
                    var n = new o.b2Vec2(r.x / b.PIXEL_RATIO, r.y / b.PIXEL_RATIO);
                    e.bodyA = b.I._emptyBody, e.bodyB = this.selfBody.getBody(), e.target = n, e.frequencyHz = this._frequency,
                        e.damping = this._damping, e.maxForce = this._maxForce, this._joint = b.I._createJoint(e);
                }
            }
            onStageMouseUp() {
                t.Laya.stage.off(t.Event.MOUSE_MOVE, this, this.onMouseMove), super._onDisable();
            }
            onMouseMove() {
                this._joint.SetTarget(new window.box2d.b2Vec2(b.I.worldRoot.mouseX / b.PIXEL_RATIO, b.I.worldRoot.mouseY / b.PIXEL_RATIO));
            }
            _onDisable() {
                this.owner.off(t.Event.MOUSE_DOWN, this, this.onMouseDown), super._onDisable();
            }
            get maxForce() {
                return this._maxForce;
            }
            set maxForce(o) {
                this._maxForce = o, this._joint && this._joint.SetMaxForce(o);
            }
            get frequency() {
                return this._frequency;
            }
            set frequency(o) {
                this._frequency = o, this._joint && this._joint.SetFrequency(o);
            }
            get damping() {
                return this._damping;
            }
            set damping(o) {
                this._damping = o, this._joint && this._joint.SetDampingRatio(o);
            }
        }
        t.ClassUtils.regClass("laya.physics.joint.MouseJoint", m), t.ClassUtils.regClass("Laya.MouseJoint", m);
        class u extends x {
            constructor() {
                super(...arguments), this.anchor = [0, 0], this.axis = [1, 0], this.collideConnected = !1,
                    this._enableMotor = !1, this._motorSpeed = 0, this._maxMotorForce = 1e4, this._enableLimit = !1,
                    this._lowerTranslation = 0, this._upperTranslation = 0;
            }
            _createJoint() {
                if (!this._joint) {
                    if (this.selfBody = this.selfBody || this.owner.getComponent(i), !this.selfBody) throw "selfBody can not be empty";
                    var o = window.box2d,
                        e = u._temp || (u._temp = new o.b2PrismaticJointDef()),
                        r = this.selfBody.owner.localToGlobal(t.Point.TEMP.setTo(this.anchor[0], this.anchor[1]), !1, b.I.worldRoot),
                        n = new o.b2Vec2(r.x / b.PIXEL_RATIO, r.y / b.PIXEL_RATIO);
                    e.Initialize(this.otherBody ? this.otherBody.getBody() : b.I._emptyBody, this.selfBody.getBody(), n, new o.b2Vec2(this.axis[0], this.axis[1])),
                        e.enableMotor = this._enableMotor, e.motorSpeed = this._motorSpeed, e.maxMotorForce = this._maxMotorForce,
                        e.enableLimit = this._enableLimit, e.lowerTranslation = this._lowerTranslation / b.PIXEL_RATIO,
                        e.upperTranslation = this._upperTranslation / b.PIXEL_RATIO, e.collideConnected = this.collideConnected,
                        this._joint = b.I._createJoint(e);
                }
            }
            get enableMotor() {
                return this._enableMotor;
            }
            set enableMotor(o) {
                this._enableMotor = o, this._joint && this._joint.EnableMotor(o);
            }
            get motorSpeed() {
                return this._motorSpeed;
            }
            set motorSpeed(o) {
                this._motorSpeed = o, this._joint && this._joint.SetMotorSpeed(o);
            }
            get maxMotorForce() {
                return this._maxMotorForce;
            }
            set maxMotorForce(o) {
                this._maxMotorForce = o, this._joint && this._joint.SetMaxMotorForce(o);
            }
            get enableLimit() {
                return this._enableLimit;
            }
            set enableLimit(o) {
                this._enableLimit = o, this._joint && this._joint.EnableLimit(o);
            }
            get lowerTranslation() {
                return this._lowerTranslation;
            }
            set lowerTranslation(o) {
                this._lowerTranslation = o, this._joint && this._joint.SetLimits(o, this._upperTranslation);
            }
            get upperTranslation() {
                return this._upperTranslation;
            }
            set upperTranslation(o) {
                this._upperTranslation = o, this._joint && this._joint.SetLimits(this._lowerTranslation, o);
            }
        }
        t.ClassUtils.regClass("laya.physics.joint.PrismaticJoint", u), t.ClassUtils.regClass("Laya.PrismaticJoint", u);
        class h extends x {
            constructor() {
                super(...arguments), this.selfAnchor = [0, 0], this.otherAnchor = [0, 0], this.selfGroundPoint = [0, 0],
                    this.otherGroundPoint = [0, 0], this.ratio = 1.5, this.collideConnected = !1;
            }
            _createJoint() {
                if (!this._joint) {
                    if (!this.otherBody) throw "otherBody can not be empty";
                    if (this.selfBody = this.selfBody || this.owner.getComponent(i), !this.selfBody) throw "selfBody can not be empty";
                    var o = window.box2d,
                        e = h._temp || (h._temp = new o.b2PulleyJointDef()),
                        r = this.otherBody.owner.localToGlobal(t.Point.TEMP.setTo(this.otherAnchor[0], this.otherAnchor[1]), !1, b.I.worldRoot),
                        n = new o.b2Vec2(r.x / b.PIXEL_RATIO, r.y / b.PIXEL_RATIO),
                        p = this.selfBody.owner.localToGlobal(t.Point.TEMP.setTo(this.selfAnchor[0], this.selfAnchor[1]), !1, b.I.worldRoot),
                        s = new o.b2Vec2(p.x / b.PIXEL_RATIO, p.y / b.PIXEL_RATIO),
                        a = this.otherBody.owner.localToGlobal(t.Point.TEMP.setTo(this.otherGroundPoint[0], this.otherGroundPoint[1]), !1, b.I.worldRoot),
                        d = new o.b2Vec2(a.x / b.PIXEL_RATIO, a.y / b.PIXEL_RATIO),
                        l = this.selfBody.owner.localToGlobal(t.Point.TEMP.setTo(this.selfGroundPoint[0], this.selfGroundPoint[1]), !1, b.I.worldRoot),
                        x = new o.b2Vec2(l.x / b.PIXEL_RATIO, l.y / b.PIXEL_RATIO);
                    e.Initialize(this.otherBody.getBody(), this.selfBody.getBody(), d, x, n, s, this.ratio),
                        e.collideConnected = this.collideConnected, this._joint = b.I._createJoint(e);
                }
            }
        }
        t.ClassUtils.regClass("laya.physics.joint.PulleyJoint", h), t.ClassUtils.regClass("Laya.PulleyJoint", h);
        class g extends x {
            constructor() {
                super(...arguments), this.anchor = [0, 0], this.collideConnected = !1, this._enableMotor = !1,
                    this._motorSpeed = 0, this._maxMotorTorque = 1e4, this._enableLimit = !1, this._lowerAngle = 0,
                    this._upperAngle = 0;
            }
            _createJoint() {
                if (!this._joint) {
                    if (this.selfBody = this.selfBody || this.owner.getComponent(i), !this.selfBody) throw "selfBody can not be empty";
                    var o = window.box2d,
                        e = g._temp || (g._temp = new o.b2RevoluteJointDef()),
                        r = this.selfBody.owner.localToGlobal(t.Point.TEMP.setTo(this.anchor[0], this.anchor[1]), !1, b.I.worldRoot),
                        n = new o.b2Vec2(r.x / b.PIXEL_RATIO, r.y / b.PIXEL_RATIO);
                    e.Initialize(this.otherBody ? this.otherBody.getBody() : b.I._emptyBody, this.selfBody.getBody(), n),
                        e.enableMotor = this._enableMotor, e.motorSpeed = this._motorSpeed, e.maxMotorTorque = this._maxMotorTorque,
                        e.enableLimit = this._enableLimit, e.lowerAngle = this._lowerAngle, e.upperAngle = this._upperAngle,
                        e.collideConnected = this.collideConnected, this._joint = b.I._createJoint(e);
                }
            }
            get enableMotor() {
                return this._enableMotor;
            }
            set enableMotor(o) {
                this._enableMotor = o, this._joint && this._joint.EnableMotor(o);
            }
            get motorSpeed() {
                return this._motorSpeed;
            }
            set motorSpeed(o) {
                this._motorSpeed = o, this._joint && this._joint.SetMotorSpeed(o);
            }
            get maxMotorTorque() {
                return this._maxMotorTorque;
            }
            set maxMotorTorque(o) {
                this._maxMotorTorque = o, this._joint && this._joint.SetMaxMotorTorque(o);
            }
            get enableLimit() {
                return this._enableLimit;
            }
            set enableLimit(o) {
                this._enableLimit = o, this._joint && this._joint.EnableLimit(o);
            }
            get lowerAngle() {
                return this._lowerAngle;
            }
            set lowerAngle(o) {
                this._lowerAngle = o, this._joint && this._joint.SetLimits(o, this._upperAngle);
            }
            get upperAngle() {
                return this._upperAngle;
            }
            set upperAngle(o) {
                this._upperAngle = o, this._joint && this._joint.SetLimits(this._lowerAngle, o);
            }
        }
        t.ClassUtils.regClass("laya.physics.joint.RevoluteJoint", g), t.ClassUtils.regClass("Laya.RevoluteJoint", g);
        class f extends x {
            constructor() {
                super(...arguments), this.selfAnchor = [0, 0], this.otherAnchor = [0, 0], this.collideConnected = !1,
                    this._maxLength = 1;
            }
            _createJoint() {
                if (!this._joint) {
                    if (this.selfBody = this.selfBody || this.owner.getComponent(i), !this.selfBody) throw "selfBody can not be empty";
                    var o = window.box2d,
                        t = f._temp || (f._temp = new o.b2RopeJointDef());
                    t.bodyA = this.otherBody ? this.otherBody.getBody() : b.I._emptyBody, t.bodyB = this.selfBody.getBody(),
                        t.localAnchorA.Set(this.otherAnchor[0] / b.PIXEL_RATIO, this.otherAnchor[1] / b.PIXEL_RATIO),
                        t.localAnchorB.Set(this.selfAnchor[0] / b.PIXEL_RATIO, this.selfAnchor[1] / b.PIXEL_RATIO),
                        t.maxLength = this._maxLength / b.PIXEL_RATIO, t.collideConnected = this.collideConnected,
                        this._joint = b.I._createJoint(t);
                }
            }
            get maxLength() {
                return this._maxLength;
            }
            set maxLength(o) {
                this._maxLength = o, this._joint && this._joint.SetMaxLength(o / b.PIXEL_RATIO);
            }
        }
        t.ClassUtils.regClass("laya.physics.joint.RopeJoint", f), t.ClassUtils.regClass("Laya.RopeJoint", f);
        class S extends x {
            constructor() {
                super(...arguments), this.anchor = [0, 0], this.collideConnected = !1, this._frequency = 5,
                    this._damping = .7;
            }
            _createJoint() {
                if (!this._joint) {
                    if (!this.otherBody) throw "otherBody can not be empty";
                    if (this.selfBody = this.selfBody || this.owner.getComponent(i), !this.selfBody) throw "selfBody can not be empty";
                    var o = window.box2d,
                        e = S._temp || (S._temp = new o.b2WeldJointDef()),
                        r = this.selfBody.owner.localToGlobal(t.Point.TEMP.setTo(this.anchor[0], this.anchor[1]), !1, b.I.worldRoot),
                        n = new o.b2Vec2(r.x / b.PIXEL_RATIO, r.y / b.PIXEL_RATIO);
                    e.Initialize(this.otherBody.getBody(), this.selfBody.getBody(), n), e.frequencyHz = this._frequency,
                        e.dampingRatio = this._damping, e.collideConnected = this.collideConnected, this._joint = b.I._createJoint(e);
                }
            }
            get frequency() {
                return this._frequency;
            }
            set frequency(o) {
                this._frequency = o, this._joint && this._joint.SetFrequency(o);
            }
            get damping() {
                return this._damping;
            }
            set damping(o) {
                this._damping = o, this._joint && this._joint.SetDampingRatio(o);
            }
        }
        t.ClassUtils.regClass("laya.physics.joint.WeldJoint", S), t.ClassUtils.regClass("Laya.WeldJoint", S);
        class P extends x {
            constructor() {
                super(...arguments), this.anchor = [0, 0], this.collideConnected = !1, this.axis = [1, 0],
                    this._frequency = 5, this._damping = .7, this._enableMotor = !1, this._motorSpeed = 0,
                    this._maxMotorTorque = 1e4;
            }
            _createJoint() {
                if (!this._joint) {
                    if (!this.otherBody) throw "otherBody can not be empty";
                    if (this.selfBody = this.selfBody || this.owner.getComponent(i), !this.selfBody) throw "selfBody can not be empty";
                    var o = window.box2d,
                        e = P._temp || (P._temp = new o.b2WheelJointDef()),
                        r = this.selfBody.owner.localToGlobal(t.Point.TEMP.setTo(this.anchor[0], this.anchor[1]), !1, b.I.worldRoot),
                        n = new o.b2Vec2(r.x / b.PIXEL_RATIO, r.y / b.PIXEL_RATIO);
                    e.Initialize(this.otherBody.getBody(), this.selfBody.getBody(), n, new o.b2Vec2(this.axis[0], this.axis[1])),
                        e.enableMotor = this._enableMotor, e.motorSpeed = this._motorSpeed, e.maxMotorTorque = this._maxMotorTorque,
                        e.frequencyHz = this._frequency, e.dampingRatio = this._damping, e.collideConnected = this.collideConnected,
                        this._joint = b.I._createJoint(e);
                }
            }
            get frequency() {
                return this._frequency;
            }
            set frequency(o) {
                this._frequency = o, this._joint && this._joint.SetSpringFrequencyHz(o);
            }
            get damping() {
                return this._damping;
            }
            set damping(o) {
                this._damping = o, this._joint && this._joint.SetSpringDampingRatio(o);
            }
            get enableMotor() {
                return this._enableMotor;
            }
            set enableMotor(o) {
                this._enableMotor = o, this._joint && this._joint.EnableMotor(o);
            }
            get motorSpeed() {
                return this._motorSpeed;
            }
            set motorSpeed(o) {
                this._motorSpeed = o, this._joint && this._joint.SetMotorSpeed(o);
            }
            get maxMotorTorque() {
                return this._maxMotorTorque;
            }
            set maxMotorTorque(o) {
                this._maxMotorTorque = o, this._joint && this._joint.SetMaxMotorTorque(o);
            }
        }
        t.ClassUtils.regClass("laya.physics.joint.WheelJoint", P), t.ClassUtils.regClass("Laya.WheelJoint", P),
            o.BoxCollider = p, o.ChainCollider = s, o.CircleCollider = a, o.ColliderBase = r,
            o.DistanceJoint = y, o.GearJoint = c, o.IPhysics = e, o.JointBase = x, o.MotorJoint = _,
            o.MouseJoint = m, o.Physics = b, o.PhysicsDebugDraw = d, o.PolygonCollider = l,
            o.PrismaticJoint = u, o.PulleyJoint = h, o.RevoluteJoint = g, o.RigidBody = i, o.RopeJoint = f,
            o.WeldJoint = S, o.WheelJoint = P;
    }(window.Laya = window.Laya || {}, Laya);