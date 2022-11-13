var Laya = window.Laya = function(t, e) {
    var i = {
        __internals: [],
        __packages: {},
        __classmap: {
            Object: Object,
            Function: Function,
            Array: Array,
            String: String
        },
        __sysClass: {
            object: "Object",
            array: "Array",
            string: "String",
            dictionary: "Dictionary"
        },
        __propun: {
            writable: !0,
            enumerable: !1,
            configurable: !0
        },
        __presubstr: String.prototype.substr,
        __substr: function(t, e) {
            return 1 == arguments.length ? i.__presubstr.call(this, t) : i.__presubstr.call(this, t, e > 0 ? e : this.length + e);
        },
        __init: function(t) {
            t.forEach(function(t) {
                t.__init$ && t.__init$();
            });
        },
        __isClass: function(t) {
            return t && (t.__isclass || t == Object || t == String || t == Array);
        },
        __newvec: function(t, e) {
            var i = [];
            i.length = t;
            for (var n = 0; n < t; n++) i[n] = e;
            return i;
        },
        __extend: function(t, e) {
            for (var n in e) if (e.hasOwnProperty(n)) {
                var r = Object.getOwnPropertyDescriptor(e, n), s = r.get, a = r.set;
                s || a ? s && a ? Object.defineProperty(t, n, r) : (s && Object.defineProperty(t, n, s), 
                a && Object.defineProperty(t, n, a)) : t[n] = e[n];
            }
            function __() {
                i.un(this, "constructor", t);
            }
            __.prototype = e.prototype, t.prototype = new __(), i.un(t.prototype, "__imps", i.__copy({}, e.prototype.__imps));
        },
        __copy: function(t, e) {
            if (!e) return null;
            for (var i in t = t || {}, e) t[i] = e[i];
            return t;
        },
        __package: function(e, n) {
            if (!i.__packages[e]) {
                i.__packages[e] = !0;
                var r = t, s = e.split(".");
                if (s.length > 1) for (var a = 0, o = s.length - 1; a < o; a++) {
                    var h = r[s[a]];
                    r = h || (r[s[a]] = {});
                }
                r[s[s.length - 1]] || (r[s[s.length - 1]] = n || {});
            }
        },
        __hasOwnProperty: function(t, e) {
            return e = e || this, Object.hasOwnProperty.call(e, t) || function classHas(t, e) {
                if (Object.hasOwnProperty.call(e.prototype, t)) return !0;
                var i = e.prototype.__super;
                return null == i ? null : classHas(t, i);
            }(t, e.__class);
        },
        __typeof: function(t, e) {
            if (!t || !e) return !1;
            if (e === String) return "string" == typeof t;
            if (e === Number) return "number" == typeof t;
            if (e.__interface__) e = e.__interface__; else if ("string" != typeof e) return t instanceof e;
            return t.__imps && t.__imps[e] || t.__class == e;
        },
        __as: function(t, e) {
            return this.__typeof(t, e) ? t : null;
        },
        __int: function(t) {
            return t ? parseInt(t) : 0;
        },
        interface: function(e, n) {
            i.__package(e, {});
            var r = i.__internals, s = r[e] = r[e] || {
                self: e
            };
            if (n) {
                var a = n.split(",");
                s.extend = [];
                for (var o = 0; o < a.length; o++) {
                    var h = a[o];
                    r[h] = r[h] || {
                        self: h
                    }, s.extend.push(r[h]);
                }
            }
            var u = t, l = e.split(".");
            for (o = 0; o < l.length - 1; o++) u = u[l[o]];
            u[l[l.length - 1]] = {
                __interface__: e
            };
        },
        class: function(e, n, r, s) {
            if (r && i.__extend(e, r), n) if (i.__package(n, e), i.__classmap[n] = e, n.indexOf(".") > 0) {
                if (0 == n.indexOf("laya.")) {
                    var a = n.split(".");
                    s = s || a[a.length - 1], i[s] && console.log("Warning!,this class[" + s + "] already exist:", i[s]), 
                    i[s] = e;
                }
            } else "Main" == n ? t.Main = e : (i[n] && console.log("Error!,this class[" + n + "] already exist:", i[n]), 
            i[n] = e);
            var o = i.un, h = e.prototype;
            o(h, "hasOwnProperty", i.__hasOwnProperty), o(h, "__class", e), o(h, "__super", r), 
            o(h, "__className", n), o(e, "__super", r), o(e, "__className", n), o(e, "__isclass", !0), 
            o(e, "super", function(t) {
                this.__super.call(t);
            });
        },
        imps: function(t, e) {
            if (!e) return null;
            var n = t.__imps || i.un(t, "__imps", {});
            function __(t) {
                var e, r;
                if ((e = i.__internals[t]) && (n[t] = !0, r = e.extend)) for (var s = 0; s < r.length; s++) __(r[s].self);
            }
            for (var r in e) __(r);
        },
        superSet: function(t, e, i, n) {
            var r = t.prototype["_$set_" + i];
            r && r.call(e, n);
        },
        superGet: function(t, e, i) {
            var n = t.prototype["_$get_" + i];
            return n ? n.call(e) : null;
        },
        getset: function(t, e, n, r, s) {
            t ? (r && (e["_$GET_" + n] = r), s && (e["_$SET_" + n] = s)) : (r && i.un(e, "_$get_" + n, r), 
            s && i.un(e, "_$set_" + n, s)), r && s ? Object.defineProperty(e, n, {
                get: r,
                set: s,
                enumerable: !1,
                configurable: !0
            }) : (r && Object.defineProperty(e, n, {
                get: r,
                enumerable: !1,
                configurable: !0
            }), s && Object.defineProperty(e, n, {
                set: s,
                enumerable: !1,
                configurable: !0
            }));
        },
        static: function(t, e) {
            for (var i = 0, n = e.length; i < n; i += 2) if ("length" == e[i]) t.length = e[i + 1].call(t); else {
                function tmp() {
                    var n = e[i], r = e[i + 1];
                    Object.defineProperty(t, n, {
                        get: function() {
                            return delete this[n], this[n] = r.call(this);
                        },
                        set: function(t) {
                            delete this[n], this[n] = t;
                        },
                        enumerable: !0,
                        configurable: !0
                    });
                }
                tmp();
            }
        },
        un: function(t, e, n) {
            return n || (n = t[e]), i.__propun.value = n, Object.defineProperty(t, e, i.__propun), 
            n;
        },
        uns: function(t, e) {
            e.forEach(function(e) {
                i.un(t, e);
            });
        }
    };
    return t.console = t.console || {
        log: function() {}
    }, t.trace = t.console.log, Error.prototype.throwError = function() {
        throw arguments;
    }, Object.defineProperty(Array.prototype, "fixed", {
        enumerable: !1
    }), i;
}(window, document);

!function(t, e, i) {
    i.un, i.uns, i.static, i.class, i.getset, i.__newvec;
}(window, document, Laya), function(t, e, i) {
    i.un, i.uns;
    var n = i.static, r = i.class, s = i.getset;
    i.__newvec;
    i.interface("laya.filters.IFilter"), i.interface("laya.resource.IDispose"), i.interface("laya.resource.IDestroy"), 
    i.interface("laya.webgl.submit.ISubmit"), i.interface("laya.resource.ICreateResource"), 
    i.interface("laya.webgl.canvas.save.ISaveData"), i.interface("laya.resource.ISingletonElement");
    s(1, i, "alertGlobalError", null, function(t) {
        var e = 0;
        It.window.onerror = t ? function(t, i, n, r, s) {
            e++ < 5 && s && alert("出错啦，请把此信息截图给研发商\n" + t + "\n" + s.stack);
        } : null;
    }), i.init = function(e, n, r) {
        for (var s = [], a = 2, o = arguments.length; a < o; a++) s.push(arguments[a]);
        if (!i._isinit) {
            i._isinit = !0, ArrayBuffer.prototype.slice || (ArrayBuffer.prototype.slice = i._arrayBufferSlice), 
            It.__init__(), i.systemTimer = new J(!1), i.startTimer = new J(!1), i.physicsTimer = new J(!1), 
            i.updateTimer = new J(!1), i.lateTimer = new J(!1), i.timer = new J(!1), i.loader = new We(), 
            St.__init__(), Ct.inner_enable(), a = 0;
            for (var h = s.length; a < h; a++) s[a] && s[a].enable && s[a].enable();
            return Rt.isConchApp && le.enableNative(), q.beginCheck(), i._currentStage = i.stage = new ai(), 
            $.rootPath = $._basePath = i._getUrlPath(), i.render = new Rt(0, 0), i.stage.size(e, n), 
            t.stage = i.stage, E.__init__(), gt.__init__(), A.instance.__init__(i.stage, Rt.canvas), 
            ui.__init__(), xe.autoStopMusic = !0, Rt.canvas;
        }
    }, i._getUrlPath = function() {
        var t = It.window.location, e = t.pathname;
        return e = ":" == e.charAt(2) ? e.substring(1) : e, $.getPath("file:" == t.protocol ? e : t.protocol + "//" + t.host + t.pathname);
    }, i._arrayBufferSlice = function(t, e) {
        var i = new Uint8Array(this, t, e - t), n = new Uint8Array(i.length);
        return n.set(i), n.buffer;
    }, i._runScript = function(t) {
        return It.window[i._evcode](t);
    }, i.enableDebugPanel = function(t) {
        if (void 0 === t && (t = "libs/laya.debugtool.js"), i.DebugPanel) i.DebugPanel.enable(); else {
            var e = It.createElement("script");
            e.onload = function() {
                i.DebugPanel.enable();
            }, e.src = t, It.document.body.appendChild(e);
        }
    }, i.stage = null, i.systemTimer = null, i.startTimer = null, i.physicsTimer = null, 
    i.updateTimer = null, i.lateTimer = null, i.timer = null, i.loader = null, i.version = "2.1.1", 
    i.render = null, i._currentStage = null, i._isinit = !1, i.isWXOpenDataContext = !1, 
    i.isWXPosMsg = !1, n(i, [ "_evcode", function() {
        return this._evcode = "eval";
    } ]);
    var a = function() {
        function LayaGLQuickRunner() {}
        return r(LayaGLQuickRunner, "laya.renders.LayaGLQuickRunner"), LayaGLQuickRunner.__init__ = function() {
            LayaGLQuickRunner.map[515] = LayaGLQuickRunner.alpha_transform_drawLayaGL, LayaGLQuickRunner.map[513] = LayaGLQuickRunner.alpha_drawLayaGL, 
            LayaGLQuickRunner.map[514] = LayaGLQuickRunner.transform_drawLayaGL, LayaGLQuickRunner.map[8194] = LayaGLQuickRunner.transform_drawNodes, 
            LayaGLQuickRunner.map[259] = LayaGLQuickRunner.alpha_transform_drawTexture, LayaGLQuickRunner.map[257] = LayaGLQuickRunner.alpha_drawTexture, 
            LayaGLQuickRunner.map[258] = LayaGLQuickRunner.transform_drawTexture, LayaGLQuickRunner.map[8704] = LayaGLQuickRunner.drawLayaGL_drawNodes;
        }, LayaGLQuickRunner.transform_drawTexture = function(t, e, i, n) {
            t._style;
            var r = t.texture;
            e.saveTransform(LayaGLQuickRunner.curMat), e.transformByMatrix(t.transform, i, n), 
            e.drawTexture(r, -t.pivotX, -t.pivotY, t._width || r.width, t._height || r.height), 
            e.restoreTransform(LayaGLQuickRunner.curMat);
        }, LayaGLQuickRunner.alpha_drawTexture = function(t, e, i, n) {
            var r, s = t._style, a = t.texture;
            if ((r = s.alpha) > .01 || t._needRepaint()) {
                var o = e.globalAlpha;
                e.globalAlpha *= r, e.drawTexture(a, i - s.pivotX + a.offsetX, n - s.pivotY + a.offsetY, t._width || a.width, t._height || a.height), 
                e.globalAlpha = o;
            }
        }, LayaGLQuickRunner.alpha_transform_drawTexture = function(t, e, i, n) {
            var r, s = t._style, a = t.texture;
            if ((r = s.alpha) > .01 || t._needRepaint()) {
                var o = e.globalAlpha;
                e.globalAlpha *= r, e.saveTransform(LayaGLQuickRunner.curMat), e.transformByMatrix(t.transform, i, n), 
                e.drawTexture(a, -s.pivotX + a.offsetX, -s.pivotY + a.offsetY, t._width || a.width, t._height || a.height), 
                e.restoreTransform(LayaGLQuickRunner.curMat), e.globalAlpha = o;
            }
        }, LayaGLQuickRunner.alpha_transform_drawLayaGL = function(t, e, i, n) {
            var r, s = t._style;
            if ((r = s.alpha) > .01 || t._needRepaint()) {
                var a = e.globalAlpha;
                e.globalAlpha *= r, e.saveTransform(LayaGLQuickRunner.curMat), e.transformByMatrix(t.transform, i, n), 
                t._graphics && t._graphics._render(t, e, -s.pivotX, -s.pivotY), e.restoreTransform(LayaGLQuickRunner.curMat), 
                e.globalAlpha = a;
            }
        }, LayaGLQuickRunner.alpha_drawLayaGL = function(t, e, i, n) {
            var r, s = t._style;
            if ((r = s.alpha) > .01 || t._needRepaint()) {
                var a = e.globalAlpha;
                e.globalAlpha *= r, t._graphics && t._graphics._render(t, e, i - s.pivotX, n - s.pivotY), 
                e.globalAlpha = a;
            }
        }, LayaGLQuickRunner.transform_drawLayaGL = function(t, e, i, n) {
            var r = t._style;
            e.saveTransform(LayaGLQuickRunner.curMat), e.transformByMatrix(t.transform, i, n), 
            t._graphics && t._graphics._render(t, e, -r.pivotX, -r.pivotY), e.restoreTransform(LayaGLQuickRunner.curMat);
        }, LayaGLQuickRunner.transform_drawNodes = function(t, e, i, n) {
            var r = t._getBit(256) && e.drawCallOptimize(!0), s = t._style;
            e.saveTransform(LayaGLQuickRunner.curMat), e.transformByMatrix(t.transform, i, n), 
            i = -s.pivotX, n = -s.pivotY;
            var a, o = t._children, h = o.length;
            if (s.viewport) {
                var u = s.viewport, l = u.x, c = u.y, _ = u.right, d = u.bottom, f = NaN, p = NaN;
                for (m = 0; m < h; ++m) (a = o[m])._visible && (f = a._x) < _ && f + a.width > l && (p = a._y) < d && p + a.height > c && a.render(e, i, n);
            } else for (var m = 0; m < h; ++m) (a = o[m])._visible && a.render(e, i, n);
            e.restoreTransform(LayaGLQuickRunner.curMat), r && e.drawCallOptimize(!1);
        }, LayaGLQuickRunner.drawLayaGL_drawNodes = function(t, e, i, n) {
            var r = t._getBit(256) && e.drawCallOptimize(!0), s = t._style;
            i -= s.pivotX, n -= s.pivotY, t._graphics && t._graphics._render(t, e, i, n);
            var a, o = t._children, h = o.length;
            if (s.viewport) {
                var u = s.viewport, l = u.x, c = u.y, _ = u.right, d = u.bottom, f = NaN, p = NaN;
                for (m = 0; m < h; ++m) (a = o[m])._visible && (f = a._x) < _ && f + a.width > l && (p = a._y) < d && p + a.height > c && a.render(e, i, n);
            } else for (var m = 0; m < h; ++m) (a = o[m])._visible && a.render(e, i, n);
            r && e.drawCallOptimize(!1);
        }, LayaGLQuickRunner.map = {}, n(LayaGLQuickRunner, [ "curMat", function() {
            return this.curMat = new st();
        } ]), LayaGLQuickRunner;
    }(), o = function() {
        function ColorUtils(t) {
            if (this.arrColor = [], null == t) return this.strColor = "#00000000", this.numColor = 0, 
            void (this.arrColor = [ 0, 0, 0, 0 ]);
            var e = 0, i = 0, n = 0;
            if ("string" == typeof t) if (t.indexOf("rgba(") >= 0 || t.indexOf("rgb(") >= 0) {
                var r, s, a = t;
                for (r = a.indexOf("("), s = a.indexOf(")"), a = a.substring(r + 1, s), this.arrColor = a.split(","), 
                i = this.arrColor.length, e = 0; e < i; e++) this.arrColor[e] = parseFloat(this.arrColor[e]), 
                e < 3 && (this.arrColor[e] = Math.round(this.arrColor[e]));
                n = 4 == this.arrColor.length ? 256 * (256 * (256 * this.arrColor[0] + this.arrColor[1]) + this.arrColor[2]) + Math.round(255 * this.arrColor[3]) : 256 * (256 * this.arrColor[0] + this.arrColor[1]) + this.arrColor[2], 
                this.strColor = t;
            } else {
                if (this.strColor = t, "#" === t.charAt(0) && (t = t.substr(1)), 3 === (i = t.length) || 4 === i) {
                    var o = "";
                    for (e = 0; e < i; e++) o += t[e] + t[e];
                    t = o;
                }
                n = parseInt(t, 16);
            } else n = t, this.strColor = ie.toHexColor(n);
            this.strColor.indexOf("rgba") >= 0 || 9 === this.strColor.length ? (this.arrColor = [ ((4278190080 & n) >>> 24) / 255, ((16711680 & n) >> 16) / 255, ((65280 & n) >> 8) / 255, (255 & n) / 255 ], 
            this.numColor = (4278190080 & n) >>> 24 | (16711680 & n) >> 8 | (65280 & n) << 8 | (255 & n) << 24) : (this.arrColor = [ ((16711680 & n) >> 16) / 255, ((65280 & n) >> 8) / 255, (255 & n) / 255, 1 ], 
            this.numColor = 4278190080 | (16711680 & n) >> 16 | 65280 & n | (255 & n) << 16), 
            this.arrColor.__id = ++ColorUtils._COLODID;
        }
        return r(ColorUtils, "laya.utils.ColorUtils"), ColorUtils._initDefault = function() {
            for (var t in ColorUtils._DEFAULT = {}, ColorUtils._COLOR_MAP) ColorUtils._SAVE[t] = ColorUtils._DEFAULT[t] = new ColorUtils(ColorUtils._COLOR_MAP[t]);
            return ColorUtils._DEFAULT;
        }, ColorUtils._initSaveMap = function() {
            for (var t in ColorUtils._SAVE_SIZE = 0, ColorUtils._SAVE = {}, ColorUtils._DEFAULT) ColorUtils._SAVE[t] = ColorUtils._DEFAULT[t];
        }, ColorUtils.create = function(t) {
            var e = t + "", i = ColorUtils._SAVE[e];
            return null != i ? i : (ColorUtils._SAVE_SIZE < 1e3 && ColorUtils._initSaveMap(), 
            ColorUtils._SAVE[e] = new ColorUtils(t));
        }, ColorUtils._SAVE = {}, ColorUtils._SAVE_SIZE = 0, ColorUtils._COLOR_MAP = {
            purple: "#800080",
            orange: "#ffa500",
            white: "#FFFFFF",
            red: "#FF0000",
            green: "#00FF00",
            blue: "#0000FF",
            black: "#000000",
            yellow: "#FFFF00",
            gray: "#808080"
        }, ColorUtils._DEFAULT = ColorUtils._initDefault(), ColorUtils._COLODID = 1, ColorUtils;
    }(), h = function() {
        function SaveBase() {}
        r(SaveBase, "laya.webgl.canvas.save.SaveBase");
        var t = SaveBase.prototype;
        return i.imps(t, {
            "laya.webgl.canvas.save.ISaveData": !0
        }), t.isSaveMark = function() {
            return !1;
        }, t.restore = function(t) {
            this._dataObj[this._valueName] = this._value, SaveBase.POOL[SaveBase.POOL._length++] = this, 
            this._newSubmit && (t._curSubmit = u.RENDERBASE);
        }, SaveBase._createArray = function() {
            var t = [];
            return t._length = 0, t;
        }, SaveBase._init = function() {
            var t = SaveBase._namemap = {};
            return t[1] = "ALPHA", t[2] = "fillStyle", t[8] = "font", t[256] = "lineWidth", 
            t[512] = "strokeStyle", t[8192] = "_mergeID", t[1024] = t[2048] = t[4096] = [], 
            t[16384] = "textBaseline", t[32768] = "textAlign", t[65536] = "_nBlendType", t[1048576] = "shader", 
            t[2097152] = "filters", t[8388608] = "_colorFiler", t;
        }, SaveBase.save = function(t, e, i, n) {
            if ((t._saveMark._saveuse & e) !== e) {
                t._saveMark._saveuse |= e;
                var r = SaveBase.POOL, s = r._length > 0 ? r[--r._length] : new SaveBase();
                s._value = i[s._valueName = SaveBase._namemap[e]], s._dataObj = i, s._newSubmit = n;
                var a = t._save;
                a[a._length++] = s;
            }
        }, SaveBase.POOL = laya.webgl.canvas.save.SaveBase._createArray(), SaveBase._namemap = SaveBase._init(), 
        SaveBase;
    }(), u = function() {
        function Submit(t) {
            this.clipInfoID = -1, this._mesh = null, this._blendFn = null, this._id = 0, this._renderType = 0, 
            this._parent = null, this._startIdx = 0, this._numEle = 0, this._ref = 1, this.shaderValue = null, 
            this._key = new O(), void 0 === t && (t = 1e4), this._renderType = t, this._id = ++Submit.ID;
        }
        r(Submit, "laya.webgl.submit.Submit");
        var t = Submit.prototype;
        return i.imps(t, {
            "laya.webgl.submit.ISubmit": !0
        }), t.getID = function() {
            return this._id;
        }, t.releaseRender = function() {
            Submit.RENDERBASE != this && --this._ref < 1 && (Submit.POOL[Submit._poolSize++] = this, 
            this.shaderValue.release(), this.shaderValue = null, this._mesh = null, this._parent && (this._parent.releaseRender(), 
            this._parent = null));
        }, t.getRenderType = function() {
            return this._renderType;
        }, t.renderSubmit = function() {
            if (0 === this._numEle || !this._mesh || 0 == this._numEle) return 1;
            var t = this.shaderValue.textureHost;
            if (t) {
                var e = t._getSource();
                if (!e) return 1;
                this.shaderValue.texture = e;
            }
            var i = Ct.mainContext;
            return this._mesh.useMesh(i), this.shaderValue.upload(), _e.activeBlendFunction !== this._blendFn && (nt.setBlend(i, !0), 
            this._blendFn(i), _e.activeBlendFunction = this._blendFn), i.drawElements(4, this._numEle, 5123, this._startIdx), 
            w.renderBatches++, w.trianglesFaces += this._numEle / 3, 1;
        }, t._cloneInit = function(t, e, i, n) {
            t._ref = 1, t._mesh = i, t._id = this._id, t._key.copyFrom(this._key), t._parent = this, 
            t._blendFn = this._blendFn, t._renderType = this._renderType, t._startIdx = n * _t.BYTES_PIDX, 
            t._numEle = this._numEle, t.shaderValue = this.shaderValue, this.shaderValue.ref++, 
            this._ref++;
        }, t.clone = function(t, e, i) {
            return null;
        }, t.reUse = function(t, e) {
            return 0;
        }, t.toString = function() {
            return "ibindex:" + this._startIdx + " num:" + this._numEle + " key=" + this._key;
        }, Submit.__init__ = function() {
            var t = Submit.RENDERBASE = new Submit(-1);
            t.shaderValue = new H(0, 0), t.shaderValue.ALPHA = 1, t._ref = 4294967295;
        }, Submit.create = function(t, e, i) {
            var n = Submit._poolSize ? Submit.POOL[--Submit._poolSize] : new Submit();
            n._ref = 1, n._mesh = e, n._key.clear(), n._startIdx = e.indexNum * _t.BYTES_PIDX, 
            n._numEle = 0;
            var r = t._nBlendType;
            n._blendFn = t._targets ? _e.targetFns[r] : _e.fns[r], n.shaderValue = i, n.shaderValue.setValue(t._shader2D);
            var s = t._shader2D.filters;
            return s && n.shaderValue.setFilters(s), n;
        }, Submit.createShape = function(t, e, i, n) {
            var r = Submit._poolSize ? Submit.POOL[--Submit._poolSize] : new Submit();
            r._mesh = e, r._numEle = i, r._startIdx = 2 * e.indexNum, r._ref = 1, r.shaderValue = n, 
            r.shaderValue.setValue(t._shader2D);
            var s = t._nBlendType;
            return r._key.blendShader = s, r._blendFn = t._targets ? _e.targetFns[s] : _e.fns[s], 
            r;
        }, Submit.TYPE_2D = 1e4, Submit.TYPE_CANVAS = 10003, Submit.TYPE_CMDSETRT = 10004, 
        Submit.TYPE_CUSTOM = 10005, Submit.TYPE_BLURRT = 10006, Submit.TYPE_CMDDESTORYPRERT = 10007, 
        Submit.TYPE_DISABLESTENCIL = 10008, Submit.TYPE_OTHERIBVB = 10009, Submit.TYPE_PRIMITIVE = 10010, 
        Submit.TYPE_RT = 10011, Submit.TYPE_BLUR_RT = 10012, Submit.TYPE_TARGET = 10013, 
        Submit.TYPE_CHANGE_VALUE = 10014, Submit.TYPE_SHAPE = 10015, Submit.TYPE_TEXTURE = 10016, 
        Submit.TYPE_FILLTEXTURE = 10017, Submit.KEY_ONCE = -1, Submit.KEY_FILLRECT = 1, 
        Submit.KEY_DRAWTEXTURE = 2, Submit.KEY_VG = 3, Submit.KEY_TRIANGLES = 4, Submit.RENDERBASE = null, 
        Submit.ID = 1, Submit.preRender = null, Submit._poolSize = 0, Submit.POOL = [], 
        Submit;
    }(), l = function() {
        function FillTextureCmd() {}
        r(FillTextureCmd, "laya.display.cmd.FillTextureCmd");
        var t = FillTextureCmd.prototype;
        return t.recover = function() {
            this.texture = null, this.offset = null, this.other = null, N.recover("FillTextureCmd", this);
        }, t.run = function(t, e, i) {
            t.fillTexture(this.texture, this.x + e, this.y + i, this.width, this.height, this.type, this.offset, this.other);
        }, s(0, t, "cmdID", function() {
            return "FillTexture";
        }), FillTextureCmd.create = function(t, e, i, n, r, s, a, o) {
            var h = N.getItemByClass("FillTextureCmd", FillTextureCmd);
            return h.texture = t, h.x = e, h.y = i, h.width = n, h.height = r, h.type = s, h.offset = a, 
            h.other = o, h;
        }, FillTextureCmd.ID = "FillTexture", FillTextureCmd;
    }(), c = function() {
        function Filter() {
            this._glRender = null;
        }
        r(Filter, "laya.filters.Filter");
        var t = Filter.prototype;
        return i.imps(t, {
            "laya.filters.IFilter": !0
        }), s(0, t, "type", function() {
            return -1;
        }), Filter.BLUR = 16, Filter.COLOR = 32, Filter.GLOW = 8, Filter._filter = function(t, e, i, n) {
            var r = e, s = this._next;
            if (s) {
                var a = t.filters, o = a.length;
                if (1 == o && 32 == a[0].type) return e.save(), e.setColorFilter(a[0]), s._fun.call(s, t, e, i, n), 
                void e.restore();
                var h, u = H.create(1, 0), l = Xt.TEMP, c = r._curMat, _ = st.create();
                c.copyTo(_);
                var d = 0, f = 0, p = null, m = t._cacheStyle.filterCache || null;
                if (m && 0 == t.getRepaint()) {
                    if ((t._cacheStyle.hasGlowFilter || !1) && (d = 50, f = 25), (h = t.getBounds()).width <= 0 || h.height <= 0) return;
                    h.width += d, h.height += d, l.x = h.x * _.a + h.y * _.c, l.y = h.y * _.d + h.x * _.b, 
                    h.x = l.x, h.y = l.y, l.x = h.width * _.a + h.height * _.c, l.y = h.height * _.d + h.width * _.b, 
                    h.width = l.x, h.height = l.y;
                } else {
                    t._isHaveGlowFilter() && (d = 50, f = 25), (h = new mt()).copyFrom(t.getSelfBounds()), 
                    h.x += t.x, h.y += t.y, h.x -= t.pivotX + 4, h.y -= t.pivotY + 4;
                    var g = h.x, v = h.y;
                    if (h.width += d + 8, h.height += d + 8, l.x = h.x * _.a + h.y * _.c, l.y = h.y * _.d + h.x * _.b, 
                    h.x = l.x, h.y = l.y, l.x = h.width * _.a + h.height * _.c, l.y = h.height * _.d + h.width * _.b, 
                    h.width = l.x, h.height = l.y, h.width <= 0 || h.height <= 0) return;
                    m && ee.releaseRT(m), p = ee.getRT(h.width, h.height);
                    var x = m = ee.getRT(h.width, h.height);
                    t._getCacheStyle().filterCache = m, r.pushRT(), r.useRT(p);
                    var y = t.x - g + f, T = t.y - v + f;
                    s._fun.call(s, t, e, y, T), r.useRT(x);
                    for (var b = 0; b < o; b++) {
                        0 != b && (r.useRT(p), r.drawTarget(x, 0, 0, h.width, h.height, st.TEMP.identity(), u, null, _e.TOINT.overlay), 
                        r.useRT(x));
                        var C = a[b];
                        switch (C.type) {
                          case 16:
                          case 8:
                            C._glRender && C._glRender.render(p, e, h.width, h.height, C);
                            break;

                          case 32:
                            r.setColorFilter(C), r.drawTarget(p, 0, 0, h.width, h.height, st.EMPTY.identity(), H.create(1, 0)), 
                            r.setColorFilter(null);
                        }
                    }
                    r.popRT();
                }
                if (i = i - f - t.x, n = n - f - t.y, l.setTo(i, n), _.transformPoint(l), i = l.x + h.x, 
                n = l.y + h.y, r._drawRenderTexture(m, i, n, h.width, h.height, st.TEMP.identity(), 1, di.defuv), 
                p) {
                    var S = Q.create([ p ], function(t) {
                        t.destroy();
                    }, this);
                    p = null, e.addRenderObject(S);
                }
                _.destroy();
            }
        }, Filter;
    }(), _ = (function() {
        function Log() {}
        r(Log, "laya.utils.Log"), Log.enable = function() {
            Log._logdiv || (Log._logdiv = It.createElement("div"), Log._logdiv.style.cssText = "border:white;padding:4px;overflow-y:auto;z-index:1000000;background:rgba(100,100,100,0.6);color:white;position: absolute;left:0px;top:0px;width:50%;height:50%;", 
            It.document.body.appendChild(Log._logdiv), Log._btn = It.createElement("button"), 
            Log._btn.innerText = "Hide", Log._btn.style.cssText = "z-index:1000001;position: absolute;left:10px;top:10px;", 
            Log._btn.onclick = Log.toggle, It.document.body.appendChild(Log._btn));
        }, Log.toggle = function() {
            var t = Log._logdiv.style;
            "" === t.display ? (Log._btn.innerText = "Show", t.display = "none") : (Log._btn.innerText = "Hide", 
            t.display = "");
        }, Log.print = function(t) {
            Log._logdiv && (Log._count >= Log.maxCount && Log.clear(), Log._count++, Log._logdiv.innerText += t + "\n", 
            Log.autoScrollToBottom && Log._logdiv.scrollHeight - Log._logdiv.scrollTop - Log._logdiv.clientHeight < 50 && (Log._logdiv.scrollTop = Log._logdiv.scrollHeight));
        }, Log.clear = function() {
            Log._logdiv.innerText = "", Log._count = 0;
        }, Log._logdiv = null, Log._btn = null, Log._count = 0, Log.maxCount = 50, Log.autoScrollToBottom = !0;
    }(), function() {
        function TouchManager() {
            this.preOvers = [], this.preDowns = [], this.preRightDowns = [], this.enable = !0, 
            this._lastClickTime = 0, this._event = new C();
        }
        r(TouchManager, "laya.events.TouchManager");
        var t = TouchManager.prototype;
        return t._clearTempArrs = function() {
            TouchManager._oldArr.length = 0, TouchManager._newArr.length = 0, TouchManager._tEleArr.length = 0;
        }, t.getTouchFromArr = function(t, e) {
            var i, n, r = 0;
            for (i = e.length, r = 0; r < i; r++) if ((n = e[r]).id == t) return n;
            return null;
        }, t.removeTouchFromArr = function(t, e) {
            var i = 0;
            for (i = e.length - 1; i >= 0; i--) e[i].id == t && e.splice(i, 1);
        }, t.createTouchO = function(t, e) {
            var i;
            return (i = N.getItem("TouchData") || {}).id = e, i.tar = t, i;
        }, t.onMouseDown = function(t, e, i) {
            var n, r, s, a;
            (void 0 === i && (i = !1), this.enable) && (n = this.getTouchFromArr(e, this.preOvers), 
            s = this.getEles(t, null, TouchManager._tEleArr), n ? n.tar = t : (r = this.createTouchO(t, e), 
            this.preOvers.push(r)), It.onMobile && this.sendEvents(s, "mouseover"), a = i ? this.preDowns : this.preRightDowns, 
            (n = this.getTouchFromArr(e, a)) ? n.tar = t : (r = this.createTouchO(t, e), a.push(r)), 
            this.sendEvents(s, i ? "mousedown" : "rightmousedown"), this._clearTempArrs());
        }, t.sendEvents = function(t, e) {
            var i, n, r, s = 0;
            for (i = t.length, this._event._stoped = !1, n = t[0], s = 0; s < i; s++) {
                if ((r = t[s]).destroyed) return;
                if (r.event(e, this._event.setTo(e, r, n)), this._event._stoped) break;
            }
        }, t.getEles = function(t, e, i) {
            for (i ? i.length = 0 : i = []; t && t != e; ) i.push(t), t = t.parent;
            return i;
        }, t.checkMouseOutAndOverOfMove = function(t, e, i) {
            if (void 0 === i && (i = 0), e != t) {
                var n, r, s = 0, a = 0;
                if (e.contains(t)) r = this.getEles(t, e, TouchManager._tEleArr), this.sendEvents(r, "mouseover"); else if (t.contains(e)) r = this.getEles(e, t, TouchManager._tEleArr), 
                this.sendEvents(r, "mouseout"); else {
                    var o, h;
                    (r = TouchManager._tEleArr).length = 0, o = this.getEles(e, null, TouchManager._oldArr), 
                    h = this.getEles(t, null, TouchManager._newArr), a = o.length;
                    var u = 0;
                    for (s = 0; s < a; s++) {
                        if (n = o[s], (u = h.indexOf(n)) >= 0) {
                            h.splice(u, h.length - u);
                            break;
                        }
                        r.push(n);
                    }
                    r.length > 0 && this.sendEvents(r, "mouseout"), h.length > 0 && this.sendEvents(h, "mouseover");
                }
            }
        }, t.onMouseMove = function(t, e) {
            var i, n;
            this.enable && ((i = this.getTouchFromArr(e, this.preOvers)) ? (this.checkMouseOutAndOverOfMove(t, i.tar), 
            i.tar = t, n = this.getEles(t, null, TouchManager._tEleArr)) : (n = this.getEles(t, null, TouchManager._tEleArr), 
            this.sendEvents(n, "mouseover"), this.preOvers.push(this.createTouchO(t, e))), this.sendEvents(n, "mousemove"), 
            this._clearTempArrs());
        }, t.getLastOvers = function() {
            return TouchManager._tEleArr.length = 0, this.preOvers.length > 0 && this.preOvers[0].tar ? this.getEles(this.preOvers[0].tar, null, TouchManager._tEleArr) : (TouchManager._tEleArr.push(i.stage), 
            TouchManager._tEleArr);
        }, t.stageMouseOut = function() {
            var t;
            t = this.getLastOvers(), this.preOvers.length = 0, this.sendEvents(t, "mouseout");
        }, t.onMouseUp = function(t, e, i) {
            if (void 0 === i && (i = !1), this.enable) {
                var n, r, s, a, o, h, u = 0, l = 0, c = It.onMobile;
                if (r = this.getEles(t, null, TouchManager._tEleArr), this.sendEvents(r, i ? "mouseup" : "rightmouseup"), 
                h = i ? this.preDowns : this.preRightDowns, n = this.getTouchFromArr(e, h)) {
                    var _, d = It.now();
                    if (_ = d - this._lastClickTime < 300, this._lastClickTime = d, t == n.tar) o = r; else for (s = this.getEles(n.tar, null, TouchManager._oldArr), 
                    (o = TouchManager._newArr).length = 0, l = s.length, u = 0; u < l; u++) a = s[u], 
                    r.indexOf(a) >= 0 && o.push(a);
                    o.length > 0 && this.sendEvents(o, i ? "click" : "rightclick"), i && _ && this.sendEvents(o, "doubleclick"), 
                    this.removeTouchFromArr(e, h), n.tar = null, N.recover("TouchData", n);
                } else ;
                (n = this.getTouchFromArr(e, this.preOvers)) && c && ((o = this.getEles(n.tar, null, o)) && o.length > 0 && this.sendEvents(o, "mouseout"), 
                this.removeTouchFromArr(e, this.preOvers), n.tar = null, N.recover("TouchData", n)), 
                this._clearTempArrs();
            }
        }, TouchManager._oldArr = [], TouchManager._newArr = [], TouchManager._tEleArr = [], 
        n(TouchManager, [ "I", function() {
            return this.I = new TouchManager();
        } ]), TouchManager;
    }()), d = function() {
        function SubmitTarget() {
            this._mesh = null, this._startIdx = 0, this._numEle = 0, this.shaderValue = null, 
            this.blendType = 0, this._ref = 1, this.srcRT = null, this._key = new O();
        }
        r(SubmitTarget, "laya.webgl.submit.SubmitTarget");
        var t = SubmitTarget.prototype;
        return i.imps(t, {
            "laya.webgl.submit.ISubmit": !0
        }), t.renderSubmit = function() {
            var t = Ct.mainContext;
            this._mesh.useMesh(t);
            var e = this.srcRT;
            return e && (this.shaderValue.texture = e._getSource(), this.shaderValue.upload(), 
            this.blend(), w.renderBatches++, w.trianglesFaces += this._numEle / 3, Ct.mainContext.drawElements(4, this._numEle, 5123, this._startIdx)), 
            1;
        }, t.blend = function() {
            if (_e.activeBlendFunction !== _e.fns[this.blendType]) {
                var t = Ct.mainContext;
                t.enable(3042), _e.fns[this.blendType](t), _e.activeBlendFunction = _e.fns[this.blendType];
            }
        }, t.getRenderType = function() {
            return 0;
        }, t.releaseRender = function() {
            if (--this._ref < 1) {
                var t = SubmitTarget.POOL;
                t[t._length++] = this;
            }
        }, t.reUse = function(t, e) {
            return this._startIdx = e, this._ref++, e;
        }, SubmitTarget.create = function(t, e, i, n) {
            var r = SubmitTarget.POOL._length ? SubmitTarget.POOL[--SubmitTarget.POOL._length] : new SubmitTarget();
            if (r._mesh = e, r.srcRT = n, r._startIdx = e.indexNum * _t.BYTES_PIDX, r._ref = 1, 
            r._key.clear(), r._numEle = 0, r.blendType = t._nBlendType, r._key.blendShader = r.blendType, 
            r.shaderValue = i, r.shaderValue.setValue(t._shader2D), t._colorFiler) {
                var s = t._colorFiler;
                i.defines.add(s.type), i.colorMat = s._mat, i.colorAlpha = s._alpha;
            }
            return r;
        }, SubmitTarget.POOL = [], SubmitTarget.__init$ = function() {
            SubmitTarget.POOL._length = 0;
        }, SubmitTarget;
    }(), f = function() {
        function DrawImageCmd() {}
        r(DrawImageCmd, "laya.display.cmd.DrawImageCmd");
        var t = DrawImageCmd.prototype;
        return t.recover = function() {
            this.texture._removeReference(), this.texture = null, N.recover("DrawImageCmd", this);
        }, t.run = function(t, e, i) {
            t.drawTexture(this.texture, this.x + e, this.y + i, this.width, this.height);
        }, s(0, t, "cmdID", function() {
            return "DrawImage";
        }), DrawImageCmd.create = function(t, e, i, n, r) {
            var s = N.getItemByClass("DrawImageCmd", DrawImageCmd);
            return s.texture = t, t._addReference(), s.x = e, s.y = i, s.width = n, s.height = r, 
            s;
        }, DrawImageCmd.ID = "DrawImage", DrawImageCmd;
    }(), p = function() {
        function Component() {
            this._id = ie.getGID(), this._resetComp();
        }
        r(Component, "laya.components.Component");
        var t = Component.prototype;
        return i.imps(t, {
            "laya.resource.ISingletonElement": !0,
            "laya.resource.IDestroy": !0
        }), t._isScript = function() {
            return !1;
        }, t._resetComp = function() {
            this._indexInList = -1, this._enabled = !0, this._awaked = !1, this.owner = null;
        }, t._getIndexInList = function() {
            return this._indexInList;
        }, t._setIndexInList = function(t) {
            this._indexInList = t;
        }, t._onAdded = function() {}, t._onAwake = function() {}, t._onEnable = function() {}, 
        t._onDisable = function() {}, t._onEnableInScene = function() {}, t._onDisableInScene = function() {}, 
        t._onDestroy = function() {}, t.onReset = function() {}, t._parse = function(t) {}, 
        t._cloneTo = function(t) {}, t._setActive = function(t) {
            t ? (this._awaked || (this._awaked = !0, this._onAwake()), this._enabled && this._onEnable()) : this._enabled && this._onDisable();
        }, t._setActiveInScene = function(t) {
            t ? this._onEnableInScene() : this._onDisableInScene();
        }, t.destroy = function() {
            this.owner && this.owner._destroyComponent(this);
        }, t._destroy = function() {
            this.owner.activeInHierarchy && this._enabled && (this._setActive(!1), this._isScript() && this.onDisable()), 
            this.owner._scene && this._setActiveInScene(!1), this._onDestroy(), this._destroyed = !0, 
            this.onReset !== laya.components.Component.prototype.onReset ? (this.onReset(), 
            this._resetComp(), N.recoverByClass(this)) : this._resetComp();
        }, s(0, t, "id", function() {
            return this._id;
        }), s(0, t, "enabled", function() {
            return this._enabled;
        }, function(t) {
            this._enabled = t, this.owner && (t ? this.owner.activeInHierarchy && this._onEnable() : this.owner.activeInHierarchy && this._onDisable());
        }), s(0, t, "isSingleton", function() {
            return !0;
        }), s(0, t, "destroyed", function() {
            return this._destroyed;
        }), Component;
    }(), m = function() {
        var t;
        function EventDispatcher() {
            this._$0__events = null;
        }
        r(EventDispatcher, "laya.events.EventDispatcher");
        var e = EventDispatcher.prototype;
        return e.hasListener = function(t) {
            return !!(this._$0__events && this._$0__events[t]);
        }, e.event = function(t, e) {
            if (!this._$0__events || !this._$0__events[t]) return !1;
            var i = this._$0__events[t];
            if (i.run) i.once && delete this._$0__events[t], null != e ? i.runWith(e) : i.run(); else {
                for (var n = 0, r = i.length; n < r; n++) {
                    var s = i[n];
                    s && (null != e ? s.runWith(e) : s.run()), s && !s.once || (i.splice(n, 1), n--, 
                    r--);
                }
                0 === i.length && this._$0__events && delete this._$0__events[t];
            }
            return !0;
        }, e.on = function(t, e, i, n) {
            return this._createListener(t, e, i, n, !1);
        }, e.once = function(t, e, i, n) {
            return this._createListener(t, e, i, n, !0);
        }, e._createListener = function(e, i, n, r, s, a) {
            void 0 === a && (a = !0), a && this.off(e, i, n, s);
            var o = t.create(i || this, n, r, s);
            this._$0__events || (this._$0__events = {});
            var h = this._$0__events;
            return h[e] ? h[e].run ? h[e] = [ h[e], o ] : h[e].push(o) : h[e] = o, this;
        }, e.off = function(t, e, i, n) {
            if (void 0 === n && (n = !1), !this._$0__events || !this._$0__events[t]) return this;
            var r = this._$0__events[t];
            if (null != r) if (r.run) e && r.caller !== e || null != i && r.method !== i || n && !r.once || (delete this._$0__events[t], 
            r.recover()); else {
                for (var s = 0, a = 0, o = r.length; a < o; a++) {
                    var h = r[a];
                    h ? !h || e && h.caller !== e || null != i && h.method !== i || n && !h.once || (s++, 
                    r[a] = null, h.recover()) : s++;
                }
                s === o && delete this._$0__events[t];
            }
            return this;
        }, e.offAll = function(t) {
            var e = this._$0__events;
            if (!e) return this;
            if (t) this._recoverHandlers(e[t]), delete e[t]; else {
                for (var i in e) this._recoverHandlers(e[i]);
                this._$0__events = null;
            }
            return this;
        }, e.offAllCaller = function(t) {
            if (t && this._$0__events) for (var e in this._$0__events) this.off(e, t, null);
            return this;
        }, e._recoverHandlers = function(t) {
            if (t) if (t.run) t.recover(); else for (var e = t.length - 1; e > -1; e--) t[e] && (t[e].recover(), 
            t[e] = null);
        }, e.isMouseEvent = function(t) {
            return EventDispatcher.MOUSE_EVENTS[t] || !1;
        }, EventDispatcher.MOUSE_EVENTS = {
            rightmousedown: !0,
            rightmouseup: !0,
            rightclick: !0,
            mousedown: !0,
            mouseup: !0,
            mousemove: !0,
            mouseover: !0,
            mouseout: !0,
            click: !0,
            doubleclick: !0
        }, EventDispatcher.__init$ = function() {
            Object.defineProperty(laya.events.EventDispatcher.prototype, "_events", {
                enumerable: !1,
                writable: !0
            }), t = function(t) {
                function EventHandler(t, e, i, n) {
                    EventHandler.__super.call(this, t, e, i, n);
                }
                return r(EventHandler, "", g), EventHandler.prototype.recover = function() {
                    this._id > 0 && (this._id = 0, EventHandler._pool.push(this.clear()));
                }, EventHandler.create = function(t, e, i, n) {
                    return void 0 === n && (n = !0), EventHandler._pool.length ? EventHandler._pool.pop().setTo(t, e, i, n) : new EventHandler(t, e, i, n);
                }, EventHandler._pool = [], EventHandler;
            }();
        }, EventDispatcher;
    }(), g = function() {
        function Handler(t, e, i, n) {
            this.once = !1, this._id = 0, void 0 === n && (n = !1), this.setTo(t, e, i, n);
        }
        r(Handler, "laya.utils.Handler");
        var t = Handler.prototype;
        return t.setTo = function(t, e, i, n) {
            return this._id = Handler._gid++, this.caller = t, this.method = e, this.args = i, 
            this.once = n, this;
        }, t.run = function() {
            if (null == this.method) return null;
            var t = this._id, e = this.method.apply(this.caller, this.args);
            return this._id === t && this.once && this.recover(), e;
        }, t.runWith = function(t) {
            if (null == this.method) return null;
            var e = this._id;
            if (null == t) var i = this.method.apply(this.caller, this.args); else i = this.args || t.unshift ? this.args ? this.method.apply(this.caller, this.args.concat(t)) : this.method.apply(this.caller, t) : this.method.call(this.caller, t);
            return this._id === e && this.once && this.recover(), i;
        }, t.clear = function() {
            return this.caller = null, this.method = null, this.args = null, this;
        }, t.recover = function() {
            this._id > 0 && (this._id = 0, Handler._pool.push(this.clear()));
        }, Handler.create = function(t, e, i, n) {
            return void 0 === n && (n = !0), Handler._pool.length ? Handler._pool.pop().setTo(t, e, i, n) : new Handler(t, e, i, n);
        }, Handler._pool = [], Handler._gid = 1, Handler;
    }(), v = function() {
        function SkinMeshBuffer() {
            this.ib = null, this.vb = null;
            Ct.mainContext;
            this.ib = qe.create(35048), this.vb = ti.create(8);
        }
        r(SkinMeshBuffer, "laya.webgl.shader.d2.skinAnishader.SkinMeshBuffer");
        var t = SkinMeshBuffer.prototype;
        return t.addSkinMesh = function(t) {
            t.getData2(this.vb, this.ib, this.vb._byteLength / 32);
        }, t.reset = function() {
            this.vb.clear(), this.ib.clear();
        }, SkinMeshBuffer.getInstance = function() {
            return SkinMeshBuffer.instance = SkinMeshBuffer.instance || new SkinMeshBuffer();
        }, SkinMeshBuffer.instance = null, SkinMeshBuffer;
    }(), x = function() {
        function DrawTrianglesCmd() {}
        r(DrawTrianglesCmd, "laya.display.cmd.DrawTrianglesCmd");
        var t = DrawTrianglesCmd.prototype;
        return t.recover = function() {
            this.texture = null, this.vertices = null, this.uvs = null, this.indices = null, 
            this.matrix = null, N.recover("DrawTrianglesCmd", this);
        }, t.run = function(t, e, i) {
            t.drawTriangles(this.texture, this.x + e, this.y + i, this.vertices, this.uvs, this.indices, this.matrix, this.alpha, this.color, this.blendMode);
        }, s(0, t, "cmdID", function() {
            return "DrawTriangles";
        }), DrawTrianglesCmd.create = function(t, e, i, n, r, s, a, h, u, l) {
            var c = N.getItemByClass("DrawTrianglesCmd", DrawTrianglesCmd);
            if (c.texture = t, c.x = e, c.y = i, c.vertices = n, c.uvs = r, c.indices = s, c.matrix = a, 
            c.alpha = h, u) {
                c.color = new Te();
                var _ = o.create(u).arrColor;
                c.color.color(255 * _[0], 255 * _[1], 255 * _[2], 255 * _[3]);
            }
            return c.blendMode = l, c;
        }, DrawTrianglesCmd.ID = "DrawTriangles", DrawTrianglesCmd;
    }(), y = function() {
        function DrawPieCmd() {}
        r(DrawPieCmd, "laya.display.cmd.DrawPieCmd");
        var t = DrawPieCmd.prototype;
        return t.recover = function() {
            this.fillColor = null, this.lineColor = null, N.recover("DrawPieCmd", this);
        }, t.run = function(t, e, i) {
            t._drawPie(this.x + e, this.y + i, this.radius, this._startAngle, this._endAngle, this.fillColor, this.lineColor, this.lineWidth, this.vid);
        }, s(0, t, "startAngle", function() {
            return 180 * this._startAngle / Math.PI;
        }, function(t) {
            this._startAngle = t * Math.PI / 180;
        }), s(0, t, "cmdID", function() {
            return "DrawPie";
        }), s(0, t, "endAngle", function() {
            return 180 * this._endAngle / Math.PI;
        }, function(t) {
            this._endAngle = t * Math.PI / 180;
        }), DrawPieCmd.create = function(t, e, i, n, r, s, a, o, h) {
            var u = N.getItemByClass("DrawPieCmd", DrawPieCmd);
            return u.x = t, u.y = e, u.radius = i, u._startAngle = n, u._endAngle = r, u.fillColor = s, 
            u.lineColor = a, u.lineWidth = o, u.vid = h, u;
        }, DrawPieCmd.ID = "DrawPie", DrawPieCmd;
    }(), T = function() {
        function WordText() {
            this.id = NaN, this.save = [], this.toUpperCase = null, this.changed = !1, this._text = null, 
            this.width = -1, this.pageChars = [], this.startID = 0, this.startIDStroke = 0, 
            this.lastGCCnt = 0, this.splitRender = !1;
        }
        r(WordText, "laya.utils.WordText");
        var t = WordText.prototype;
        return t.setText = function(t) {
            this.changed = !0, this._text = t, this.width = -1, this.cleanCache();
        }, t.toString = function() {
            return this._text;
        }, t.charCodeAt = function(t) {
            return this._text ? this._text.charCodeAt(t) : NaN;
        }, t.charAt = function(t) {
            return this._text ? this._text.charAt(t) : null;
        }, t.cleanCache = function() {
            this.pageChars.forEach(function(t) {
                var e = t.tex;
                t.words;
                1 == t.words.length && e && e.ri && e.destroy();
            }), this.pageChars = [], this.startID = 0;
        }, s(0, t, "length", function() {
            return this._text ? this._text.length : 0;
        }), WordText;
    }(), b = function() {
        function Mesh2D(t, e, i) {
            this._stride = 0, this.vertNum = 0, this.indexNum = 0, this._applied = !1, this._vb = null, 
            this._ib = null, this._vao = null, this._attribInfo = null, this._quadNum = 0, this.canReuse = !1, 
            this._stride = t, this._vb = new ti(t, 35048), e ? this._vb._resizeBuffer(e, !1) : se.webGL2D_MeshAllocMaxMem && this._vb._resizeBuffer(65536 * t, !1), 
            this._ib = new qe(), i && this._ib._resizeBuffer(i, !1);
        }
        r(Mesh2D, "laya.webgl.utils.Mesh2D");
        var t = Mesh2D.prototype;
        return t.cloneWithNewVB = function() {
            var t = new Mesh2D(this._stride, 0, 0);
            return t._ib = this._ib, t._quadNum = this._quadNum, t._attribInfo = this._attribInfo, 
            t;
        }, t.cloneWithNewVBIB = function() {
            var t = new Mesh2D(this._stride, 0, 0);
            return t._attribInfo = this._attribInfo, t;
        }, t.getVBW = function() {
            return this._vb.setNeedUpload(), this._vb;
        }, t.getVBR = function() {
            return this._vb;
        }, t.getIBR = function() {
            return this._ib;
        }, t.getIBW = function() {
            return this._ib.setNeedUpload(), this._ib;
        }, t.createQuadIB = function(t) {
            this._quadNum = t, this._ib._resizeBuffer(6 * t * 2, !1), this._ib.byteLength = this._ib.bufferLength;
            for (var e = this._ib.getUint16Array(), i = 0, n = 0, r = 0; r < t; r++) e[i++] = n, 
            e[i++] = n + 2, e[i++] = n + 1, e[i++] = n, e[i++] = n + 3, e[i++] = n + 2, n += 4;
            this._ib.setNeedUpload();
        }, t.setAttributes = function(t) {
            if (this._attribInfo = t, this._attribInfo.length % 3 != 0) throw "Mesh2D setAttributes error!";
        }, t.configVAO = function(t) {
            if (!this._applied) {
                this._applied = !0, this._vao || (this._vao = new Ve()), this._vao.bind(), this._vb._bindForVAO(), 
                this._ib.setNeedUpload(), this._ib._bind_uploadForVAO();
                for (var e = this._attribInfo.length / 3, i = 0, n = 0; n < e; n++) {
                    var r = this._attribInfo[i + 1], s = this._attribInfo[i], a = this._attribInfo[i + 2];
                    t.enableVertexAttribArray(n), t.vertexAttribPointer(n, r, s, !1, this._stride, a), 
                    i += 3;
                }
                this._vao.unBind();
            }
        }, t.useMesh = function(t) {
            this._applied || this.configVAO(t), this._vao.bind(), this._vb.bind(), this._ib._bind_upload() || this._ib.bind(), 
            this._vb._bind_upload() || this._vb.bind();
        }, t.getEleNum = function() {
            return this._ib.getBuffer().byteLength / 2;
        }, t.releaseMesh = function() {}, t.destroy = function() {}, t.clearVB = function() {
            this._vb.clear();
        }, Mesh2D._gvaoid = 0, Mesh2D;
    }(), C = function() {
        function Event() {}
        r(Event, "laya.events.Event");
        var t = Event.prototype;
        return t.setTo = function(t, e, i) {
            return this.type = t, this.currentTarget = e, this.target = i, this;
        }, t.stopPropagation = function() {
            this._stoped = !0;
        }, s(0, t, "stageY", function() {
            return i.stage.mouseY;
        }), s(0, t, "charCode", function() {
            return this.nativeEvent.charCode;
        }), s(0, t, "touches", function() {
            if (!this.nativeEvent) return null;
            var t = this.nativeEvent.touches;
            if (t) for (var e = i.stage, n = 0, r = t.length; n < r; n++) {
                var s = t[n], a = Xt.TEMP;
                a.setTo(s.clientX, s.clientY), e._canvasTransform.invertTransformPoint(a), e.transform.invertTransformPoint(a), 
                s.stageX = a.x, s.stageY = a.y;
            }
            return t;
        }), s(0, t, "keyLocation", function() {
            return this.nativeEvent.location || this.nativeEvent.keyLocation;
        }), s(0, t, "ctrlKey", function() {
            return this.nativeEvent.ctrlKey;
        }), s(0, t, "altKey", function() {
            return this.nativeEvent.altKey;
        }), s(0, t, "shiftKey", function() {
            return this.nativeEvent.shiftKey;
        }), s(0, t, "stageX", function() {
            return i.stage.mouseX;
        }), Event.EMPTY = new Event(), Event.MOUSE_DOWN = "mousedown", Event.MOUSE_UP = "mouseup", 
        Event.CLICK = "click", Event.RIGHT_MOUSE_DOWN = "rightmousedown", Event.RIGHT_MOUSE_UP = "rightmouseup", 
        Event.RIGHT_CLICK = "rightclick", Event.MOUSE_MOVE = "mousemove", Event.MOUSE_OVER = "mouseover", 
        Event.MOUSE_OUT = "mouseout", Event.MOUSE_WHEEL = "mousewheel", Event.ROLL_OVER = "mouseover", 
        Event.ROLL_OUT = "mouseout", Event.DOUBLE_CLICK = "doubleclick", Event.CHANGE = "change", 
        Event.CHANGED = "changed", Event.RESIZE = "resize", Event.ADDED = "added", Event.REMOVED = "removed", 
        Event.DISPLAY = "display", Event.UNDISPLAY = "undisplay", Event.ERROR = "error", 
        Event.COMPLETE = "complete", Event.LOADED = "loaded", Event.READY = "ready", Event.PROGRESS = "progress", 
        Event.INPUT = "input", Event.RENDER = "render", Event.OPEN = "open", Event.MESSAGE = "message", 
        Event.CLOSE = "close", Event.KEY_DOWN = "keydown", Event.KEY_PRESS = "keypress", 
        Event.KEY_UP = "keyup", Event.FRAME = "enterframe", Event.DRAG_START = "dragstart", 
        Event.DRAG_MOVE = "dragmove", Event.DRAG_END = "dragend", Event.ENTER = "enter", 
        Event.SELECT = "select", Event.BLUR = "blur", Event.FOCUS = "focus", Event.VISIBILITY_CHANGE = "visibilitychange", 
        Event.FOCUS_CHANGE = "focuschange", Event.PLAYED = "played", Event.PAUSED = "paused", 
        Event.STOPPED = "stopped", Event.START = "start", Event.END = "end", Event.COMPONENT_ADDED = "componentadded", 
        Event.COMPONENT_REMOVED = "componentremoved", Event.RELEASED = "released", Event.LINK = "link", 
        Event.LABEL = "label", Event.FULL_SCREEN_CHANGE = "fullscreenchange", Event.DEVICE_LOST = "devicelost", 
        Event.TRANSFORM_CHANGED = "transformchanged", Event.ANIMATION_CHANGED = "animationchanged", 
        Event.TRAIL_FILTER_CHANGE = "trailfilterchange", Event.TRIGGER_ENTER = "triggerenter", 
        Event.TRIGGER_STAY = "triggerstay", Event.TRIGGER_EXIT = "triggerexit", Event;
    }(), S = function() {
        function TextRender() {
            this.fontSizeInfo = {}, this.charRender = null, this.mapFont = {}, this.fontID = 0, 
            this.mapColor = [], this.colorID = 0, this.fontScaleX = 1, this.fontScaleY = 1, 
            this._curStrPos = 0, this.bmpData32 = null, this.lastFont = null, this.fontSizeW = 0, 
            this.fontSizeH = 0, this.fontSizeOffX = 0, this.fontSizeOffY = 0, this.renderPerChar = !0, 
            this.textureMem = 0, this.fontStr = null, this.textAtlases = [], this.isoTextures = [], 
            this.tmpAtlasPos = new Xt();
            var t = !1, e = i.MiniAdpter;
            e && e.systemInfo && e.systemInfo.system && (t = "ios 10.1.1" === e.systemInfo.system.toLowerCase()), 
            It.onMiniGame && !t && (TextRender.isWan1Wan = !0), It.onLimixiu && (TextRender.isWan1Wan = !0), 
            this.charRender = Rt.isConchApp ? new ze() : new Ye(TextRender.atlasWidth, TextRender.atlasWidth, TextRender.scaleFontWithCtx, !TextRender.isWan1Wan, !1), 
            TextRender.textRenderInst = this, i.textRender = this, TextRender.atlasWidth2 = TextRender.atlasWidth * TextRender.atlasWidth;
        }
        r(TextRender, "laya.webgl.text.TextRender");
        var t = TextRender.prototype;
        return t.setFont = function(t) {
            if (this.lastFont != t) {
                this.lastFont = t;
                var e = this.getFontSizeInfo(t._family), i = e >> 24, n = e >> 16 & 255, r = e >> 8 & 255, s = 255 & e, a = t._size / TextRender.standardFontSize;
                this.fontSizeOffX = Math.ceil(i * a), this.fontSizeOffY = Math.ceil(n * a), this.fontSizeW = Math.ceil(r * a), 
                this.fontSizeH = Math.ceil(s * a), t._font.indexOf("italic") >= 0 ? this.fontStr = t._font.replace("italic", "") : this.fontStr = t._font;
            }
        }, t.getNextChar = function(t) {
            var e = t.length, i = this._curStrPos;
            if (i >= e) return null;
            for (var n = i, r = 0; n < e; n++) {
                var s = t.charCodeAt(n);
                if (s >>> 11 == 27) {
                    if (1 == r) break;
                    r = 1, n++;
                } else if (65038 === s || 65039 === s) ; else if (8205 == s) r = 2; else if (0 == r) r = 1; else if (1 == r) break;
            }
            return this._curStrPos = n, t.substring(i, n);
        }, t.filltext = function(t, e, i, n, r, s, a, o, h, u) {
            if (void 0 === u && (u = 0), !(e.length <= 0)) {
                var l = fe.Parse(r), c = 0;
                switch (h) {
                  case "center":
                    c = lt.ENUM_TEXTALIGN_CENTER;
                    break;

                  case "right":
                    c = lt.ENUM_TEXTALIGN_RIGHT;
                }
                this._fast_filltext(t, e, null, i, n, l, s, a, o, c, u);
            }
        }, t.fillWords = function(t, e, i, n, r, s, a, o) {
            if (e && !(e.length <= 0)) {
                var h = fe.Parse(r);
                this._fast_filltext(t, null, e, i, n, h, s, a, o, 0, 0);
            }
        }, t._fast_filltext = function(t, e, i, n, r, s, a, o, h, u, l) {
            if (void 0 === l && (l = 0), !(e && e.length < 1 || i && i.length < 1)) {
                if (h < 0 && (h = 0), this.setFont(s), this.fontScaleX = this.fontScaleY = 1, !Rt.isConchApp && TextRender.scaleFontWithCtx) {
                    var c = 1, _ = 1;
                    if (Rt.isConchApp ? (c = t._curMat.getScaleX(), _ = t._curMat.getScaleY()) : (c = t.getMatScaleX(), 
                    _ = t.getMatScaleY()), c < 1e-4 || _ < .1) return;
                    c > 1 && (this.fontScaleX = c), _ > 1 && (this.fontScaleY = _);
                }
                s._italic && (t._italicDeg = 13);
                var d = e, f = !i && e instanceof laya.utils.WordText, p = e, m = !!i, g = f ? d.pageChars : [], v = 0;
                switch (f ? (p = d._text, (v = d.width) < 0 && (v = d.width = this.charRender.getWidth(this.fontStr, p))) : v = p ? this.charRender.getWidth(this.fontStr, p) : 0, 
                u) {
                  case lt.ENUM_TEXTALIGN_CENTER:
                    n -= v / 2;
                    break;

                  case lt.ENUM_TEXTALIGN_RIGHT:
                    n -= v;
                }
                d && g && this.hasFreedText(g) && (g = d.pageChars = []);
                var x = null, y = (f || TextRender.forceWholeRender, this.renderPerChar = !f || TextRender.forceSplitRender || m || f && d.splitRender);
                if (!g || g.length < 1) if (y) {
                    var T, b = 0, C = 0;
                    for (this._curStrPos = 0; ;) {
                        if (m) {
                            var S = i[this._curStrPos++];
                            S ? (T = S.char, b = S.x, C = S.y) : T = null;
                        } else T = this.getNextChar(p);
                        if (!T) break;
                        if (!(x = this.getCharRenderInfo(T, s, a, o, h, !1))) break;
                        if (x.isSpace) ; else {
                            var w = g[x.tex.id];
                            if (w) w = w.words; else {
                                var M = {
                                    texgen: x.tex.genID,
                                    tex: x.tex,
                                    words: []
                                };
                                g[x.tex.id] = M, w = M.words;
                            }
                            Rt.isConchApp ? w.push({
                                ri: x,
                                x: b,
                                y: C,
                                w: x.bmpWidth / this.fontScaleX,
                                h: x.bmpHeight / this.fontScaleY
                            }) : w.push({
                                ri: x,
                                x: b + 1 / this.fontScaleX,
                                y: C,
                                w: (x.bmpWidth - 2) / this.fontScaleX,
                                h: (x.bmpHeight - 1) / this.fontScaleY
                            }), b += x.width;
                        }
                    }
                } else {
                    var A = TextRender.noAtlas || v * this.fontScaleX > TextRender.atlasWidth;
                    x = this.getCharRenderInfo(p, s, a, o, h, A), Rt.isConchApp ? g[0] = {
                        texgen: x.tex.genID,
                        tex: x.tex,
                        words: [ {
                            ri: x,
                            x: 0,
                            y: 0,
                            w: x.bmpWidth / this.fontScaleX,
                            h: x.bmpHeight / this.fontScaleY
                        } ]
                    } : g[0] = {
                        texgen: x.tex.genID,
                        tex: x.tex,
                        words: [ {
                            ri: x,
                            x: 1 / this.fontScaleX,
                            y: 0 / this.fontScaleY,
                            w: (x.bmpWidth - 2) / this.fontScaleX,
                            h: (x.bmpHeight - 1) / this.fontScaleY
                        } ]
                    };
                }
                this._drawResortedWords(t, n, r, g), t._italicDeg = 0;
            }
        }, t._drawResortedWords = function(t, e, i, n) {
            for (var r = t._charSubmitCache && t._charSubmitCache._enbale, s = t._curMat, a = n.length, o = 0; o < a; o++) {
                var h = n[o];
                if (h) {
                    var u = h.words, l = u.length;
                    if (!(l <= 0)) for (var c = n[o].tex, _ = 0; _ < l; _++) {
                        var d = u[_], f = d.ri;
                        f.isSpace || (f.touch(), t.drawTexAlign = !0, Rt.isConchApp ? t._drawTextureM(c.texture, e + d.x - f.orix, i + d.y - f.oriy, d.w, d.h, null, 1, f.uv) : t._inner_drawTexture(c.texture, c.texture.bitmap.id, e + d.x - f.orix, i + d.y - f.oriy, d.w, d.h, s, f.uv, 1, r), 
                        t.touches && t.touches.push(f));
                    }
                }
            }
        }, t.hasFreedText = function(t) {
            for (var e = t.length, i = 0; i < e; i++) {
                var n = t[i];
                if (n) {
                    var r = n.tex;
                    if (r.__destroyed || r.genID != n.texgen) return !0;
                }
            }
            return !1;
        }, t.getCharRenderInfo = function(t, e, i, n, r, s) {
            void 0 === s && (s = !1);
            var a = this.mapFont[e._family];
            null == a && (this.mapFont[e._family] = a = this.fontID++);
            var o = t + "_" + a + "_" + e._size + "_" + i;
            r > 0 && (o += "_" + n + r), e._bold && (o += "P"), 1 == this.fontScaleX && 1 == this.fontScaleY || (o += (20 * this.fontScaleX | 0) + "_" + (20 * this.fontScaleY | 0));
            var h = 0, u = this.textAtlases.length, l = null, c = null;
            if (!s) for (h = 0; h < u; h++) if (l = (c = this.textAtlases[h]).charMaps[o]) return l.touch(), 
            l;
            l = new dt(), this.charRender.scale(this.fontScaleX, this.fontScaleY), l.char = t, 
            l.height = e._size;
            var _ = e._size / 3 | 0, d = null, f = Math.ceil(this.charRender.getWidth(this.fontStr, t) * this.fontScaleX);
            if (f > this.charRender.canvasWidth && (this.charRender.canvasWidth = Math.min(2048, f + 2 * _)), 
            s) {
                d = this.charRender.getCharBmp(t, this.fontStr, r, i, n, l, _, _, _, _, null);
                var p = $e.getTextTexture(d.width, d.height);
                p.addChar(d, 0, 0, l.uv), l.tex = p, l.orix = _, l.oriy = _, p.ri = l, this.isoTextures.push(p);
            } else {
                var m = t.length, g = 1 * r, v = Math.ceil((this.fontSizeW + 2 * g) * this.fontScaleX), x = Math.ceil((this.fontSizeH + 2 * g) * this.fontScaleY);
                TextRender.imgdtRect[0] = (_ - this.fontSizeOffX - g) * this.fontScaleX | 0, TextRender.imgdtRect[1] = (_ - this.fontSizeOffY - g) * this.fontScaleY | 0, 
                this.renderPerChar || 1 == m ? (TextRender.imgdtRect[2] = Math.max(f, v), TextRender.imgdtRect[3] = Math.max(f, x)) : (TextRender.imgdtRect[2] = -1, 
                TextRender.imgdtRect[3] = x), d = this.charRender.getCharBmp(t, this.fontStr, r, i, n, l, _, _, _, _, TextRender.imgdtRect), 
                c = this.addBmpData(d, l), TextRender.isWan1Wan ? (l.orix = _, l.oriy = _) : (l.orix = this.fontSizeOffX + g, 
                l.oriy = this.fontSizeOffY + g), c.charMaps[o] = l;
            }
            return l;
        }, t.addBmpData = function(t, e) {
            for (var i = t.width, n = t.height, r = this.textAtlases.length, s = null, a = !1, o = 0; o < r && !(a = (s = this.textAtlases[o]).getAEmpty(i, n, this.tmpAtlasPos)); o++) ;
            if (!a) {
                if (s = new Ot(), this.textAtlases.push(s), !(a = s.getAEmpty(i, n, this.tmpAtlasPos))) throw "err1";
                this.cleanAtlases();
            }
            return a && (s.texture.addChar(t, this.tmpAtlasPos.x, this.tmpAtlasPos.y, e.uv), 
            e.tex = s.texture), s;
        }, t.GC = function() {
            for (var t = 0, e = this.textAtlases.length, i = TextRender.destroyAtlasDt, n = 0, r = w.loopCount, s = -1, a = 0, o = null, h = null; t < e; t++) {
                if (o = (h = this.textAtlases[t]).texture) {
                    o.curUsedCovRate, n += o.curUsedCovRateAtlas;
                    var u = h.usedRate - o.curUsedCovRateAtlas;
                    a < u && (a = u, s = t);
                }
                r - h.texture.lastTouchTm > i && (TextRender.showLog && console.log(h.texture.id), 
                h.destroy(), this.textAtlases[t] = this.textAtlases[e - 1], e--, t--, s = -1);
            }
            for (this.textAtlases.length = e, e = this.isoTextures.length, t = 0; t < e; t++) r - (o = this.isoTextures[t]).lastTouchTm > TextRender.destroyUnusedTextureDt && (o.ri.deleted = !0, 
            o.ri.tex = null, o.destroy(), this.isoTextures[t] = this.isoTextures[e - 1], e--, 
            t--);
            this.isoTextures.length = e;
            var l = this.textAtlases.length > 1 && this.textAtlases.length - n >= 2;
            (TextRender.atlasWidth * TextRender.atlasWidth * 4 * this.textAtlases.length > TextRender.cleanMem || l || TextRender.simClean) && (TextRender.simClean = !1, 
            TextRender.showLog && console.log("清理使用率低的贴图。总使用率:", n, ":", this.textAtlases.length, "最差贴图:" + s), 
            s >= 0 && ((h = this.textAtlases[s]).destroy(), this.textAtlases[s] = this.textAtlases[this.textAtlases.length - 1], 
            this.textAtlases.length = this.textAtlases.length - 1)), $e.clean();
        }, t.cleanAtlases = function() {}, t.getCharBmp = function(t) {}, t.checkBmpLine = function(t, e, i, n) {
            this.bmpData32.buffer != t.data.buffer && (this.bmpData32 = new Uint32Array(t.data.buffer));
            for (var r = t.width * e + i, s = i; s < n; s++) if (0 != this.bmpData32[r++]) return !0;
            return !1;
        }, t.updateBbx = function(t, e, i) {
            void 0 === i && (i = !1);
            var n = t.width, r = t.height, s = 0, a = e[1], o = 0, h = a;
            if (this.checkBmpLine(t, a, 0, n)) for (;;) {
                if ((h = (a + o) / 2 | 0) + 1 >= a) {
                    e[1] = h;
                    break;
                }
                this.checkBmpLine(t, h, 0, n) ? a = h : o = h;
            }
            if (e[3] > r) e[3] = r; else if (h = a = e[3], o = r, this.checkBmpLine(t, a, 0, n)) for (;;) {
                if ((h = (a + o) / 2 | 0) - 1 <= a) {
                    e[3] = h;
                    break;
                }
                this.checkBmpLine(t, h, 0, n) ? a = h : o = h;
            }
            if (!i) {
                var u = e[0], l = n * e[1];
                for (h = e[1]; h < e[3]; h++) {
                    for (s = 0; s < u; s++) if (0 != this.bmpData32[l + s]) {
                        u = s;
                        break;
                    }
                    l += n;
                }
                e[0] = u;
                var c = e[2];
                for (l = n * e[1], h = e[1]; h < e[3]; h++) {
                    for (s = c; s < n; s++) if (0 != this.bmpData32[l + s]) {
                        c = s;
                        break;
                    }
                    l += n;
                }
                e[2] = c;
            }
        }, t.getFontSizeInfo = function(t) {
            var e = this.fontSizeInfo[t];
            if (null != e) return e;
            var i = "bold " + TextRender.standardFontSize + "px " + t;
            if (TextRender.isWan1Wan) {
                this.fontSizeW = 1.5 * this.charRender.getWidth(i, "有"), this.fontSizeH = 1.5 * TextRender.standardFontSize;
                var n = this.fontSizeW << 8 | this.fontSizeH;
                return this.fontSizeInfo[t] = n, n;
            }
            TextRender.pixelBBX[0] = TextRender.standardFontSize / 2, TextRender.pixelBBX[1] = TextRender.standardFontSize / 2, 
            TextRender.pixelBBX[2] = TextRender.standardFontSize, TextRender.pixelBBX[3] = TextRender.standardFontSize;
            var r = 16, s = 16;
            this.charRender.scale(1, 1), TextRender.tmpRI.height = TextRender.standardFontSize;
            var a = this.charRender.getCharBmp("g", i, 0, "red", null, TextRender.tmpRI, r, s, 16, 16);
            Rt.isConchApp && (a.data = new Uint8ClampedArray(a.data)), this.bmpData32 = new Uint32Array(a.data.buffer), 
            this.updateBbx(a, TextRender.pixelBBX, !1), a = this.charRender.getCharBmp("有", i, 0, "red", null, TextRender.tmpRI, s, s, 16, 16), 
            Rt.isConchApp && (a.data = new Uint8ClampedArray(a.data)), this.bmpData32 = new Uint32Array(a.data.buffer), 
            TextRender.pixelBBX[2] < r + TextRender.tmpRI.width && (TextRender.pixelBBX[2] = r + TextRender.tmpRI.width), 
            this.updateBbx(a, TextRender.pixelBBX, !1), Rt.isConchApp && (r = 0, s = 0);
            var o = Math.max(r - TextRender.pixelBBX[0], 0) << 24 | Math.max(s - TextRender.pixelBBX[1], 0) << 16 | TextRender.pixelBBX[2] - TextRender.pixelBBX[0] << 8 | TextRender.pixelBBX[3] - TextRender.pixelBBX[1] + 2;
            return this.fontSizeInfo[t] = o, o;
        }, t.printDbgInfo = function() {
            for (var t in console.log("图集个数:" + this.textAtlases.length + ",每个图集大小:" + TextRender.atlasWidth + "x" + TextRender.atlasWidth, " 用canvas:", TextRender.isWan1Wan), 
            console.log("图集占用空间:" + TextRender.atlasWidth * TextRender.atlasWidth * 4 / 1024 / 1024 * this.textAtlases.length + "M"), 
            console.log("缓存用到的字体:"), this.mapFont) {
                var e = this.getFontSizeInfo(t), i = e >> 24, n = e >> 16 & 255, r = e >> 8 & 255, s = 255 & e;
                console.log("    " + t, " off:", i, n, " size:", r, s);
            }
            var a = 0;
            console.log("缓存数据:");
            var o = 0, h = 0;
            this.textAtlases.forEach(function(t) {
                var e = t.texture.id, i = w.loopCount - t.texture.lastTouchTm, n = i > 0 ? i + "帧以前" : "当前帧";
                for (var r in o += t.texture.curUsedCovRate, h += t.texture.curUsedCovRateAtlas, 
                console.log("--图集(id:" + e + ",当前使用率:" + (1e3 * t.texture.curUsedCovRate | 0) + "‰", "当前图集使用率:", (100 * t.texture.curUsedCovRateAtlas | 0) + "%", "图集使用率:", 100 * t.usedRate | 0, "%, 使用于:" + n + ")--:"), 
                t.charMaps) {
                    var s = t.charMaps[r];
                    console.log("     off:", s.orix, s.oriy, " bmp宽高:", s.bmpWidth, s.bmpHeight, "无效:", s.deleted, "touchdt:", w.loopCount - s.touchTick, "位置:", s.uv[0] * TextRender.atlasWidth | 0, s.uv[1] * TextRender.atlasWidth | 0, "字符:", s.char, "key:", r), 
                    a++;
                }
            }), console.log("独立贴图文字(" + this.isoTextures.length + "个):"), this.isoTextures.forEach(function(t) {
                console.log("    size:", t._texW, t._texH, "touch间隔:", w.loopCount - t.lastTouchTm, "char:", t.ri.char);
            }), console.log("总缓存:", a, "总使用率:", o, "总当前图集使用率:", h);
        }, t.showAtlas = function(t, e, n, r, s, a) {
            if (!this.textAtlases[t]) return console.log("没有这个图集"), null;
            var o = new Ke(), h = this.textAtlases[t].texture, u = {
                width: TextRender.atlasWidth,
                height: TextRender.atlasWidth,
                sourceWidth: TextRender.atlasWidth,
                sourceHeight: TextRender.atlasWidth,
                offsetX: 0,
                offsetY: 0,
                getIsReady: function() {
                    return !0;
                },
                _addReference: function() {},
                _removeReference: function() {},
                _getSource: function() {
                    return h._getSource();
                },
                bitmap: {
                    id: h.id
                },
                _uv: Ee.DEF_UV
            };
            return o.size = function(t, i) {
                return this.width = t, this.height = i, o.graphics.clear(), o.graphics.drawRect(0, 0, o.width, o.height, e), 
                o.graphics.drawTexture(u, 0, 0, o.width, o.height), this;
            }, o.graphics.drawRect(0, 0, s, a, e), o.graphics.drawTexture(u, 0, 0, s, a), o.pos(n, r), 
            i.stage.addChild(o), o;
        }, t.filltext_native = function(t, e, i, n, r, s, a, o, h, u, l) {
            if (void 0 === l && (l = 0), !(e && e.length <= 0 || i && i.length < 1)) {
                var c = fe.Parse(s), _ = 0;
                switch (u) {
                  case "center":
                    _ = lt.ENUM_TEXTALIGN_CENTER;
                    break;

                  case "right":
                    _ = lt.ENUM_TEXTALIGN_RIGHT;
                }
                return this._fast_filltext(t, e, i, n, r, c, a, o, h, _, l);
            }
        }, TextRender.useOldCharBook = !1, TextRender.atlasWidth = 2048, TextRender.noAtlas = !1, 
        TextRender.forceSplitRender = !1, TextRender.forceWholeRender = !1, TextRender.scaleFontWithCtx = !0, 
        TextRender.standardFontSize = 32, TextRender.destroyAtlasDt = 10, TextRender.checkCleanTextureDt = 2e3, 
        TextRender.destroyUnusedTextureDt = 3e3, TextRender.cleanMem = 104857600, TextRender.isWan1Wan = !1, 
        TextRender.showLog = !1, TextRender.debugUV = !1, TextRender.atlasWidth2 = 4194304, 
        TextRender.textRenderInst = null, TextRender.simClean = !1, n(TextRender, [ "tmpRI", function() {
            return this.tmpRI = new dt();
        }, "pixelBBX", function() {
            return this.pixelBBX = [ 0, 0, 0, 0 ];
        }, "imgdtRect", function() {
            return this.imgdtRect = [ 0, 0, 0, 0 ];
        } ]), TextRender;
    }(), w = function() {
        function Stat() {}
        return r(Stat, "laya.utils.Stat"), s(1, Stat, "onclick", null, function(t) {
            Stat._sp && Stat._sp.on("click", Stat._sp, t), Stat._canvas && (Stat._canvas.source.onclick = t, 
            Stat._canvas.source.style.pointerEvents = "");
        }), Stat.show = function(t, e) {
            void 0 === t && (t = 0), void 0 === e && (e = 0), It.onMiniGame || It.onLimixiu || Rt.isConchApp || It.onBDMiniGame || It.onKGMiniGame || It.onQGMiniGame || It.onVVMiniGame || It.onAlipayMiniGame || It.onBLMiniGame || (Stat._useCanvas = !0), 
            Stat._show = !0, Stat._fpsData.length = 60, Stat._view[0] = {
                title: "FPS(Canvas)",
                value: "_fpsStr",
                color: "yellow",
                units: "int"
            }, Stat._view[1] = {
                title: "Sprite",
                value: "_spriteStr",
                color: "white",
                units: "int"
            }, Stat._view[2] = {
                title: "RenderBatches",
                value: "renderBatches",
                color: "white",
                units: "int"
            }, Stat._view[3] = {
                title: "SavedRenderBatches",
                value: "savedRenderBatches",
                color: "white",
                units: "int"
            }, Stat._view[4] = {
                title: "CPUMemory",
                value: "cpuMemory",
                color: "yellow",
                units: "M"
            }, Stat._view[5] = {
                title: "GPUMemory",
                value: "gpuMemory",
                color: "yellow",
                units: "M"
            }, Stat._view[6] = {
                title: "Shader",
                value: "shaderCall",
                color: "white",
                units: "int"
            }, Rt.is3DMode ? (Stat._view[0].title = "FPS(3D)", Stat._view[7] = {
                title: "TriFaces",
                value: "trianglesFaces",
                color: "white",
                units: "int"
            }, Stat._view[8] = {
                title: "FrustumCulling",
                value: "frustumCulling",
                color: "white",
                units: "int"
            }, Stat._view[9] = {
                title: "OctreeNodeCulling",
                value: "octreeNodeCulling",
                color: "white",
                units: "int"
            }) : (Stat._view[0].title = "FPS(WebGL)", Stat._view[7] = {
                title: "Canvas",
                value: "_canvasStr",
                color: "white",
                units: "int"
            }), Stat._useCanvas ? Stat.createUIPre(t, e) : Stat.createUI(t, e), Stat.enable();
        }, Stat.createUIPre = function(t, e) {
            var i = It.pixelRatio;
            (It.onQGMiniGame || It.onVVMiniGame) && (i = 3), Stat._width = 180 * i, Stat._vx = 120 * i, 
            Stat._height = i * (12 * Stat._view.length + 3 * i) + 4, Stat._fontSize = 12 * i;
            for (var n = 0; n < Stat._view.length; n++) Stat._view[n].x = 4, Stat._view[n].y = n * Stat._fontSize + 2 * i;
            Stat._canvas || (Stat._canvas = new si(!0), Stat._canvas.size(Stat._width, Stat._height), 
            Stat._ctx = Stat._canvas.getContext("2d"), Stat._ctx.textBaseline = "top", Stat._ctx.font = Stat._fontSize + "px Arial", 
            Stat._canvas.source.style.cssText = "pointer-events:none;background:rgba(150,150,150,0.8);z-index:100000;position: absolute;direction:ltr;left:" + t + "px;top:" + e + "px;width:" + Stat._width / i + "px;height:" + Stat._height / i + "px;"), 
            It.onKGMiniGame || It.container.appendChild(Stat._canvas.source), Stat._first = !0, 
            Stat.loop(), Stat._first = !1;
        }, Stat.createUI = function(t, e) {
            var i = Stat._sp, n = It.pixelRatio;
            (It.onQGMiniGame || It.onVVMiniGame) && (n = 3), i || (i = new Ke(), Stat._leftText = new ei(), 
            Stat._leftText.pos(5, 5), Stat._leftText.color = "#ffffff", i.addChild(Stat._leftText), 
            Stat._txt = new ei(), Stat._txt.pos(80 * n, 5), Stat._txt.color = "#ffffff", i.addChild(Stat._txt), 
            Stat._sp = i), i.pos(t, e);
            for (var r = "", s = 0; s < Stat._view.length; s++) {
                r += Stat._view[s].title + "\n";
            }
            Stat._leftText.text = r;
            var a = 138 * n, o = n * (12 * Stat._view.length + 3 * n) + 4;
            Stat._txt.fontSize = Stat._fontSize * n, Stat._leftText.fontSize = Stat._fontSize * n, 
            i.size(a, o), i.graphics.clear(), i.graphics.alpha(.5), i.graphics.drawRect(0, 0, a, o, "#999999"), 
            i.graphics.alpha(2), Stat.loop();
        }, Stat.enable = function() {
            i.systemTimer.frameLoop(1, Stat, Stat.loop);
        }, Stat.hide = function() {
            Stat._show = !1, i.systemTimer.clear(Stat, Stat.loop), Stat._canvas && It.removeElement(Stat._canvas.source);
        }, Stat.clear = function() {
            Stat.trianglesFaces = Stat.renderBatches = Stat.savedRenderBatches = Stat.shaderCall = Stat.spriteRenderUseCacheCount = Stat.frustumCulling = Stat.octreeNodeCulling = Stat.canvasNormal = Stat.canvasBitmap = Stat.canvasReCache = 0;
        }, Stat.loop = function() {
            Stat._count++;
            var t = It.now();
            if (!(t - Stat._timer < 1e3)) {
                var e = Stat._count;
                if (Stat.FPS = Math.round(1e3 * e / (t - Stat._timer)), Stat._show) {
                    Stat.trianglesFaces = Math.round(Stat.trianglesFaces / e), Stat._useCanvas ? Stat.renderBatches = Math.round(Stat.renderBatches / e) : Stat.renderBatches = Math.round(Stat.renderBatches / e) - 1, 
                    Stat.savedRenderBatches = Math.round(Stat.savedRenderBatches / e), Stat.shaderCall = Math.round(Stat.shaderCall / e), 
                    Stat.spriteRenderUseCacheCount = Math.round(Stat.spriteRenderUseCacheCount / e), 
                    Stat.canvasNormal = Math.round(Stat.canvasNormal / e), Stat.canvasBitmap = Math.round(Stat.canvasBitmap / e), 
                    Stat.canvasReCache = Math.ceil(Stat.canvasReCache / e), Stat.frustumCulling = Math.round(Stat.frustumCulling / e), 
                    Stat.octreeNodeCulling = Math.round(Stat.octreeNodeCulling / e);
                    var i = Stat.FPS > 0 ? Math.floor(1e3 / Stat.FPS).toString() : " ";
                    Stat._fpsStr = Stat.FPS + (Stat.renderSlow ? " slow" : "") + " " + i, Stat._useCanvas ? Stat._spriteStr = Stat.spriteCount - 1 + (Stat.spriteRenderUseCacheCount ? "/" + Stat.spriteRenderUseCacheCount : "") : Stat._spriteStr = Stat.spriteCount - 4 + (Stat.spriteRenderUseCacheCount ? "/" + Stat.spriteRenderUseCacheCount : ""), 
                    Stat._canvasStr = Stat.canvasReCache + "/" + Stat.canvasNormal + "/" + Stat.canvasBitmap, 
                    Stat.cpuMemory = Me.cpuMemory, Stat.gpuMemory = Me.gpuMemory, Stat._useCanvas ? Stat.renderInfoPre() : Stat.renderInfo(), 
                    Stat.clear();
                }
                Stat._count = 0, Stat._timer = t;
            }
        }, Stat.renderInfoPre = function() {
            var t, e, i = 0;
            if (Stat._canvas) {
                var n = Stat._ctx;
                for (n.clearRect(Stat._first ? 0 : Stat._vx, 0, Stat._width, Stat._height), i = 0; i < Stat._view.length; i++) t = Stat._view[i], 
                Stat._first && (n.fillStyle = "white", n.fillText(t.title, t.x, t.y)), n.fillStyle = t.color, 
                e = Stat[t.value], "M" == t.units && (e = Math.floor(e / 1048576 * 100) / 100 + " M"), 
                n.fillText(e + "", t.x + Stat._vx, t.y);
            }
        }, Stat.renderInfo = function() {
            for (var t = "", e = 0; e < Stat._view.length; e++) {
                var i = Stat._view[e], n = Stat[i.value];
                "M" == i.units && (n = Math.floor(n / 1048576 * 100) / 100 + " M"), "K" == i.units && (n = Math.floor(n / 1024 * 100) / 100 + " K"), 
                t += n + "\n";
            }
            Stat._txt.text = t;
        }, Stat.FPS = 0, Stat.loopCount = 0, Stat.shaderCall = 0, Stat.renderBatches = 0, 
        Stat.savedRenderBatches = 0, Stat.trianglesFaces = 0, Stat.spriteCount = 0, Stat.spriteRenderUseCacheCount = 0, 
        Stat.frustumCulling = 0, Stat.octreeNodeCulling = 0, Stat.canvasNormal = 0, Stat.canvasBitmap = 0, 
        Stat.canvasReCache = 0, Stat.renderSlow = !1, Stat.gpuMemory = 0, Stat.cpuMemory = 0, 
        Stat._fpsStr = null, Stat._canvasStr = null, Stat._spriteStr = null, Stat._fpsData = [], 
        Stat._timer = 0, Stat._count = 0, Stat._view = [], Stat._fontSize = 12, Stat._txt = null, 
        Stat._leftText = null, Stat._sp = null, Stat._titleSp = null, Stat._bgSp = null, 
        Stat._show = !1, Stat._useCanvas = !1, Stat._canvas = null, Stat._ctx = null, Stat._first = !1, 
        Stat._vx = NaN, Stat._width = 0, Stat._height = 100, Stat;
    }(), M = function() {
        var t;
        function Path() {
            this._lastOriX = 0, this._lastOriY = 0, this.paths = [], this._curPath = null;
        }
        r(Path, "laya.webgl.canvas.Path");
        var e = Path.prototype;
        return e.beginPath = function(e) {
            this.paths.length = 1, this._curPath = this.paths[0] = new t(), this._curPath.convex = e;
        }, e.closePath = function() {
            this._curPath.loop = !0;
        }, e.newPath = function() {
            this._curPath = new t(), this.paths.push(this._curPath);
        }, e.addPoint = function(t, e) {
            this._curPath.path.push(t, e);
        }, e.push = function(e, i) {
            this._curPath ? this._curPath.path.length > 0 && (this._curPath = new t(), this.paths.push(this._curPath)) : (this._curPath = new t(), 
            this.paths.push(this._curPath));
            var n = this._curPath;
            n.path = e.slice(), n.convex = i;
        }, e.reset = function() {
            this.paths.length = 0;
        }, Path.__init$ = function() {
            t = function() {
                function renderPath() {
                    this.path = [], this.loop = !1, this.convex = !1;
                }
                return r(renderPath, ""), renderPath;
            }();
        }, Path;
    }(), A = function() {
        function MouseManager() {
            this.mouseX = 0, this.mouseY = 0, this.disableMouseEvent = !1, this.mouseDownTime = 0, 
            this.mouseMoveAccuracy = 2, this._stage = null, this._captureSp = null, this._captureExlusiveMode = !1, 
            this._hitCaputreSp = !1, this._target = null, this._lastMoveTimer = 0, this._isLeftMouse = !1, 
            this._touchIDs = {}, this._id = 1, this._tTouchID = 0, this._event = new C(), this._captureChain = [], 
            this._matrix = new st(), this._point = new Xt(), this._rect = new mt(), this._prePoint = new Xt(), 
            this._curTouchID = NaN;
        }
        r(MouseManager, "laya.events.MouseManager");
        var t = MouseManager.prototype;
        return t.__init__ = function(t, e) {
            var i = this;
            this._stage = t;
            var n = this;
            e.oncontextmenu = function(t) {
                if (MouseManager.enabled) return !1;
            }, e.addEventListener("mousedown", function(t) {
                MouseManager.enabled && (It.onIE || t.preventDefault(), n.mouseDownTime = It.now(), 
                i.runEvent(t));
            }), e.addEventListener("mouseup", function(t) {
                MouseManager.enabled && (t.preventDefault(), n.mouseDownTime = -It.now(), i.runEvent(t));
            }, !0), e.addEventListener("mousemove", function(t) {
                if (MouseManager.enabled) {
                    t.preventDefault();
                    var e = It.now();
                    if (e - n._lastMoveTimer < 10) return;
                    n._lastMoveTimer = e, i.runEvent(t);
                }
            }, !0), e.addEventListener("mouseout", function(t) {
                MouseManager.enabled && i.runEvent(t);
            }), e.addEventListener("mouseover", function(t) {
                MouseManager.enabled && i.runEvent(t);
            }), e.addEventListener("touchstart", function(t) {
                MouseManager.enabled && (MouseManager._isFirstTouch || ui.isInputting || t.preventDefault(), 
                n.mouseDownTime = It.now(), i.runEvent(t));
            }), e.addEventListener("touchend", function(t) {
                MouseManager.enabled ? (MouseManager._isFirstTouch || ui.isInputting || t.preventDefault(), 
                MouseManager._isFirstTouch = !1, n.mouseDownTime = -It.now(), i.runEvent(t)) : i._curTouchID = NaN;
            }, !0), e.addEventListener("touchmove", function(t) {
                MouseManager.enabled && (t.preventDefault(), i.runEvent(t));
            }, !0), e.addEventListener("touchcancel", function(t) {
                MouseManager.enabled ? (t.preventDefault(), i.runEvent(t)) : i._curTouchID = NaN;
            }, !0), e.addEventListener("mousewheel", function(t) {
                MouseManager.enabled && i.runEvent(t);
            }), e.addEventListener("DOMMouseScroll", function(t) {
                MouseManager.enabled && i.runEvent(t);
            });
        }, t.initEvent = function(t, e) {
            var i;
            this._event._stoped = !1, this._event.nativeEvent = e || t, this._target = null, 
            this._point.setTo(t.pageX || t.clientX, t.pageY || t.clientY), this._stage._canvasTransform && (this._stage._canvasTransform.invertTransformPoint(this._point), 
            this.mouseX = this._point.x, this.mouseY = this._point.y), this._event.touchId = t.identifier || 0, 
            this._tTouchID = this._event.touchId, (i = _.I._event)._stoped = !1, i.nativeEvent = this._event.nativeEvent, 
            i.touchId = this._event.touchId;
        }, t.checkMouseWheel = function(t) {
            this._event.delta = t.wheelDelta ? .025 * t.wheelDelta : -t.detail;
            for (var e = _.I.getLastOvers(), i = 0, n = e.length; i < n; i++) {
                var r = e[i];
                r.event("mousewheel", this._event.setTo("mousewheel", r, this._target));
            }
        }, t.onMouseMove = function(t) {
            _.I.onMouseMove(t, this._tTouchID);
        }, t.onMouseDown = function(t) {
            if (ui.isInputting && i.stage.focus && i.stage.focus.focus && !i.stage.focus.contains(this._target)) {
                var e = i.stage.focus._tf || i.stage.focus, n = t._tf || t;
                n instanceof laya.display.Input && n.multiline == e.multiline ? e._focusOut() : e.focus = !1;
            }
            _.I.onMouseDown(t, this._tTouchID, this._isLeftMouse);
        }, t.onMouseUp = function(t) {
            _.I.onMouseUp(t, this._tTouchID, this._isLeftMouse);
        }, t.check = function(t, e, i, n) {
            this._point.setTo(e, i), t.fromParentPoint(this._point), e = this._point.x, i = this._point.y;
            var r = t._style.scrollRect;
            if (r && (this._rect.setTo(r.x, r.y, r.width, r.height), !this._rect.contains(e, i))) return !1;
            if (!this.disableMouseEvent) {
                if (t.hitTestPrior && !t.mouseThrough && !this.hitTest(t, e, i)) return !1;
                for (var s = t._children.length - 1; s > -1; s--) {
                    var a = t._children[s];
                    if (!a.destroyed && a._mouseState > 1 && a._visible && this.check(a, e, i, n)) return !0;
                }
                for (s = t._extUIChild.length - 1; s >= 0; s--) {
                    var o = t._extUIChild[s];
                    if (!o.destroyed && o._mouseState > 1 && o._visible && this.check(o, e, i, n)) return !0;
                }
            }
            var h = !(!t.hitTestPrior || t.mouseThrough || this.disableMouseEvent) || this.hitTest(t, e, i);
            return h ? (this._target = t, n.call(this, t), this._target == this._hitCaputreSp && (this._hitCaputreSp = !0)) : n === this.onMouseUp && t === this._stage && (this._target = this._stage, 
            n.call(this, this._target)), h;
        }, t.hitTest = function(t, e, i) {
            var n = !1;
            t.scrollRect && (e -= t._style.scrollRect.x, i -= t._style.scrollRect.y);
            var r = t._style.hitArea;
            return r && r._hit ? r.contains(e, i) : ((t.width > 0 && t.height > 0 || t.mouseThrough || r) && (n = t.mouseThrough ? t.getGraphicBounds().contains(e, i) : (r || this._rect.setTo(0, 0, t.width, t.height)).contains(e, i)), 
            n);
        }, t._checkAllBaseUI = function(t, e, i) {
            var n = this.handleExclusiveCapture(this.mouseX, this.mouseY, i);
            return !!n || (n = this.check(this._stage, this.mouseX, this.mouseY, i), this.handleCapture(this.mouseX, this.mouseY, i) || n);
        }, t.check3DUI = function(t, e, i) {
            for (var n = this._stage._3dUI, r = 0, s = !1; r < n.length; r++) {
                var a = n[r];
                this._stage._curUIBase = a, !a.destroyed && a._mouseState > 1 && a._visible && (s = s || this.check(a, this.mouseX, this.mouseY, i));
            }
            return this._stage._curUIBase = this._stage, s;
        }, t.handleExclusiveCapture = function(t, e, i) {
            if (this._captureExlusiveMode && this._captureSp && this._captureChain.length > 0) {
                var n;
                this._point.setTo(t, e);
                for (var r = 0; r < this._captureChain.length; r++) (n = this._captureChain[r]).fromParentPoint(this._point);
                return this._target = n, i.call(this, n), !0;
            }
            return !1;
        }, t.handleCapture = function(t, e, i) {
            if (!this._hitCaputreSp && this._captureSp && this._captureChain.length > 0) {
                var n;
                this._point.setTo(t, e);
                for (var r = 0; r < this._captureChain.length; r++) (n = this._captureChain[r]).fromParentPoint(this._point);
                return this._target = n, i.call(this, n), !0;
            }
            return !1;
        }, t.runEvent = function(t) {
            var e, i = 0, n = 0;
            switch ("mousemove" !== t.type && (this._prePoint.x = this._prePoint.y = -1e6), 
            t.type) {
              case "mousedown":
                this._touchIDs[0] = this._id++, MouseManager._isTouchRespond ? MouseManager._isTouchRespond = !1 : (this._isLeftMouse = 0 === t.button, 
                this.initEvent(t), this._checkAllBaseUI(this.mouseX, this.mouseY, this.onMouseDown));
                break;

              case "mouseup":
                this._isLeftMouse = 0 === t.button, this.initEvent(t), this._checkAllBaseUI(this.mouseX, this.mouseY, this.onMouseUp);
                break;

              case "mousemove":
                Math.abs(this._prePoint.x - t.clientX) + Math.abs(this._prePoint.y - t.clientY) >= this.mouseMoveAccuracy && (this._prePoint.x = t.clientX, 
                this._prePoint.y = t.clientY, this.initEvent(t), this._checkAllBaseUI(this.mouseX, this.mouseY, this.onMouseMove));
                break;

              case "touchstart":
                MouseManager._isTouchRespond = !0, this._isLeftMouse = !0;
                var r = t.changedTouches;
                for (i = 0, n = r.length; i < n; i++) e = r[i], (MouseManager.multiTouchEnabled || isNaN(this._curTouchID)) && (this._curTouchID = e.identifier, 
                this._id % 200 == 0 && (this._touchIDs = {}), this._touchIDs[e.identifier] = this._id++, 
                this.initEvent(e, t), this._checkAllBaseUI(this.mouseX, this.mouseY, this.onMouseDown));
                break;

              case "touchend":
              case "touchcancel":
                MouseManager._isTouchRespond = !0, this._isLeftMouse = !0;
                var s = t.changedTouches;
                for (i = 0, n = s.length; i < n; i++) if (e = s[i], MouseManager.multiTouchEnabled || e.identifier == this._curTouchID) {
                    this._curTouchID = NaN, this.initEvent(e, t);
                    this._checkAllBaseUI(this.mouseX, this.mouseY, this.onMouseUp) || this.onMouseUp(null);
                }
                break;

              case "touchmove":
                var a = t.changedTouches;
                for (i = 0, n = a.length; i < n; i++) e = a[i], (MouseManager.multiTouchEnabled || e.identifier == this._curTouchID) && (this.initEvent(e, t), 
                this._checkAllBaseUI(this.mouseX, this.mouseY, this.onMouseMove));
                break;

              case "wheel":
              case "mousewheel":
              case "DOMMouseScroll":
                this.checkMouseWheel(t);
                break;

              case "mouseout":
                _.I.stageMouseOut();
                break;

              case "mouseover":
                this._stage.event("mouseover", this._event.setTo("mouseover", this._stage, this._stage));
            }
        }, t.setCapture = function(t, e) {
            void 0 === e && (e = !1), this._captureSp = t, this._captureExlusiveMode = e, this._captureChain.length = 0, 
            this._captureChain.push(t);
            for (var n = t; n != i.stage && n != i.stage._curUIBase && (n = n.parent); ) this._captureChain.splice(0, 0, n);
        }, t.releaseCapture = function() {
            console.log("release capture"), this._captureSp = null;
        }, MouseManager.enabled = !0, MouseManager.multiTouchEnabled = !0, MouseManager._isTouchRespond = !1, 
        MouseManager._isFirstTouch = !0, n(MouseManager, [ "instance", function() {
            return this.instance = new MouseManager();
        } ]), MouseManager;
    }(), R = function() {
        function VectorGraphManager() {
            this.useDic = {}, this.shapeDic = {}, this.shapeLineDic = {}, this._id = 0, this._checkKey = !1, 
            this._freeIdArray = [], q.regCacheByFunction(ie.bind(this.startDispose, this), ie.bind(this.getCacheList, this));
        }
        r(VectorGraphManager, "laya.utils.VectorGraphManager");
        var t = VectorGraphManager.prototype;
        return t.getId = function() {
            return this._id++;
        }, t.addShape = function(t, e) {
            this.shapeDic[t] = e, this.useDic[t] || (this.useDic[t] = !0);
        }, t.addLine = function(t, e) {
            this.shapeLineDic[t] = e, this.shapeLineDic[t] || (this.shapeLineDic[t] = !0);
        }, t.getShape = function(t) {
            this._checkKey && null != this.useDic[t] && (this.useDic[t] = !0);
        }, t.deleteShape = function(t) {
            this.shapeDic[t] && (this.shapeDic[t] = null, delete this.shapeDic[t]), this.shapeLineDic[t] && (this.shapeLineDic[t] = null, 
            delete this.shapeLineDic[t]), null != this.useDic[t] && delete this.useDic[t];
        }, t.getCacheList = function() {
            var t, e = [];
            for (t in this.shapeDic) e.push(this.shapeDic[t]);
            for (t in this.shapeLineDic) e.push(this.shapeLineDic[t]);
            return e;
        }, t.startDispose = function(t) {
            var e;
            for (e in this.useDic) this.useDic[e] = !1;
            this._checkKey = !0;
        }, t.endDispose = function() {
            if (this._checkKey) {
                var t;
                for (t in this.useDic) this.useDic[t] || this.deleteShape(t);
                this._checkKey = !1;
            }
        }, VectorGraphManager.getInstance = function() {
            return VectorGraphManager.instance = VectorGraphManager.instance || new VectorGraphManager();
        }, VectorGraphManager.instance = null, VectorGraphManager;
    }(), L = function() {
        function MathUtil() {}
        return r(MathUtil, "laya.maths.MathUtil"), MathUtil.subtractVector3 = function(t, e, i) {
            i[0] = t[0] - e[0], i[1] = t[1] - e[1], i[2] = t[2] - e[2];
        }, MathUtil.lerp = function(t, e, i) {
            return t * (1 - i) + e * i;
        }, MathUtil.scaleVector3 = function(t, e, i) {
            i[0] = t[0] * e, i[1] = t[1] * e, i[2] = t[2] * e;
        }, MathUtil.lerpVector3 = function(t, e, i, n) {
            var r = t[0], s = t[1], a = t[2];
            n[0] = r + i * (e[0] - r), n[1] = s + i * (e[1] - s), n[2] = a + i * (e[2] - a);
        }, MathUtil.lerpVector4 = function(t, e, i, n) {
            var r = t[0], s = t[1], a = t[2], o = t[3];
            n[0] = r + i * (e[0] - r), n[1] = s + i * (e[1] - s), n[2] = a + i * (e[2] - a), 
            n[3] = o + i * (e[3] - o);
        }, MathUtil.slerpQuaternionArray = function(t, e, i, n, r, s, a) {
            var o, h, u, l, c, _ = t[e + 0], d = t[e + 1], f = t[e + 2], p = t[e + 3], m = i[n + 0], g = i[n + 1], v = i[n + 2], x = i[n + 3];
            return (h = _ * m + d * g + f * v + p * x) < 0 && (h = -h, m = -m, g = -g, v = -v, 
            x = -x), 1 - h > 1e-6 ? (o = Math.acos(h), u = Math.sin(o), l = Math.sin((1 - r) * o) / u, 
            c = Math.sin(r * o) / u) : (l = 1 - r, c = r), s[a + 0] = l * _ + c * m, s[a + 1] = l * d + c * g, 
            s[a + 2] = l * f + c * v, s[a + 3] = l * p + c * x, s;
        }, MathUtil.getRotation = function(t, e, i, n) {
            return Math.atan2(n - e, i - t) / Math.PI * 180;
        }, MathUtil.sortBigFirst = function(t, e) {
            return t == e ? 0 : e > t ? 1 : -1;
        }, MathUtil.sortSmallFirst = function(t, e) {
            return t == e ? 0 : e > t ? -1 : 1;
        }, MathUtil.sortNumBigFirst = function(t, e) {
            return parseFloat(e) - parseFloat(t);
        }, MathUtil.sortNumSmallFirst = function(t, e) {
            return parseFloat(t) - parseFloat(e);
        }, MathUtil.sortByKey = function(t, e, i) {
            var n;
            return void 0 === e && (e = !1), void 0 === i && (i = !0), n = e ? i ? MathUtil.sortNumBigFirst : MathUtil.sortBigFirst : i ? MathUtil.sortNumSmallFirst : MathUtil.sortSmallFirst, 
            function(e, i) {
                return n(e[t], i[t]);
            };
        }, MathUtil;
    }(), E = function() {
        function RenderSprite(t, e) {
            if (a.map[t]) return this._fun = a.map[t], void (this._next = RenderSprite.NORENDER);
            switch (this._next = e || RenderSprite.NORENDER, t) {
              case 0:
                return void (this._fun = this._no);

              case 1:
                return void (this._fun = this._alpha);

              case 2:
                return void (this._fun = this._transform);

              case 4:
                return void (this._fun = this._blend);

              case 8:
                return void (this._fun = this._canvas);

              case 32:
                return void (this._fun = this._mask);

              case 64:
                return void (this._fun = this._clip);

              case 128:
                return void (this._fun = this._style);

              case 512:
                return void (this._fun = this._graphics);

              case 8192:
                return void (this._fun = this._children);

              case 2048:
                return void (this._fun = this._custom);

              case 256:
                return void (this._fun = this._texture);

              case 16:
                return void (this._fun = c._filter);

              case 69905:
                return void (this._fun = RenderSprite._initRenderFun);
            }
            this.onCreate(t);
        }
        r(RenderSprite, "laya.renders.RenderSprite");
        var t = RenderSprite.prototype;
        return t.onCreate = function(t) {}, t._style = function(t, e, i, n) {
            var r = t._style;
            null != r.render && r.render(t, e, i, n);
            var s = this._next;
            s._fun.call(s, t, e, i, n);
        }, t._no = function(t, e, i, n) {}, t._custom = function(t, e, i, n) {
            t.customRender(e, i, n), this._next._fun.call(this._next, t, e, i - t.pivotX, n - t.pivotY);
        }, t._clip = function(t, e, i, n) {
            var r = this._next;
            if (r != RenderSprite.NORENDER) {
                var s = t._style.scrollRect;
                e.save(), e.clipRect(i, n, s.width, s.height), r._fun.call(r, t, e, i - s.x, n - s.y), 
                e.restore();
            }
        }, t._texture = function(t, e, i, n) {
            var r = t.texture;
            r._getSource() && e.drawTexture(r, i - t.pivotX + r.offsetX, n - t.pivotY + r.offsetY, t._width || r.width, t._height || r.height);
            var s = this._next;
            s != RenderSprite.NORENDER && s._fun.call(s, t, e, i, n);
        }, t._graphics = function(t, e, i, n) {
            var r = t._style, s = t._graphics;
            s && s._render(t, e, i - r.pivotX, n - r.pivotY);
            var a = this._next;
            a != RenderSprite.NORENDER && a._fun.call(a, t, e, i, n);
        }, t._image = function(t, e, i, n) {
            var r = t._style;
            e.drawTexture2(i, n, r.pivotX, r.pivotY, t.transform, t._graphics._one);
        }, t._image2 = function(t, e, i, n) {
            var r = t._style;
            e.drawTexture2(i, n, r.pivotX, r.pivotY, t.transform, t._graphics._one);
        }, t._alpha = function(t, e, i, n) {
            var r;
            if ((r = t._style.alpha) > .01 || t._needRepaint()) {
                var s = e.globalAlpha;
                e.globalAlpha *= r;
                var a = this._next;
                a._fun.call(a, t, e, i, n), e.globalAlpha = s;
            }
        }, t._transform = function(t, e, i, n) {
            var r = t.transform, s = this._next;
            t._style;
            r && s != RenderSprite.NORENDER ? (e.save(), e.transform(r.a, r.b, r.c, r.d, r.tx + i, r.ty + n), 
            s._fun.call(s, t, e, 0, 0), e.restore()) : s != RenderSprite.NORENDER && s._fun.call(s, t, e, i, n);
        }, t._children = function(t, e, i, n) {
            var r, s = t._style, a = t._children, o = a.length;
            i -= t.pivotX, n -= t.pivotY;
            var h = t._getBit(256) && e.drawCallOptimize(!0);
            if (s.viewport) {
                var u = s.viewport, l = u.x, c = u.y, _ = u.right, d = u.bottom, f = NaN, p = NaN;
                for (m = 0; m < o; ++m) (r = a[m])._visible && (f = r._x) < _ && f + r.width > l && (p = r._y) < d && p + r.height > c && r.render(e, i, n);
            } else for (var m = 0; m < o; ++m) (r = a[m])._visible && r.render(e, i, n);
            h && e.drawCallOptimize(!1);
        }, t._canvas = function(t, e, n, r) {
            var s = t._cacheStyle, a = this._next;
            if (s.enableCanvasRender) {
                "bitmap" === s.cacheAs ? w.canvasBitmap++ : w.canvasNormal++;
                var o = !1, h = !1;
                if (s.canvas) {
                    var u = s.canvas, l = (u.context, u.touches);
                    if (l) for (var c = 0; c < l.length; c++) if (l[c].deleted) {
                        h = !0;
                        break;
                    }
                    o = u.isCacheValid && !u.isCacheValid();
                }
                if (t._needRepaint() || !s.canvas || h || o || i.stage.isGlobalRepaint()) if ("normal" === s.cacheAs) {
                    if (e._targets) return void a._fun.call(a, t, e, n, r);
                    this._canvas_webgl_normal_repaint(t, e);
                } else this._canvas_repaint(t, e, n, r);
                var _ = s.cacheRect;
                e.drawCanvas(s.canvas, n + _.x, r + _.y, _.width, _.height);
            } else a._fun.call(a, t, e, n, r);
        }, t._canvas_repaint = function(t, e, i, n) {
            var r, s, a, o, h, u, l, c, _, d = t._cacheStyle, f = this._next, p = d.canvas, m = d.cacheAs;
            if (l = (_ = d._calculateCacheRect(t, m, i, n)).x, c = _.y, h = (o = d.cacheRect).width * l, 
            u = o.height * c, s = o.x, a = o.y, "bitmap" === m && (h > 2048 || u > 2048)) return console.warn("cache bitmap size larger than 2048,cache ignored"), 
            d.releaseContext(), void f._fun.call(f, t, e, i, n);
            if (p || (d.createContext(), p = d.canvas), (r = p.context).sprite = t, (p.width != h || p.height != u) && p.size(h, u), 
            "bitmap" === m ? r.asBitmap = !0 : "normal" === m && (r.asBitmap = !1), r.clear(), 
            1 != l || 1 != c) {
                var g = r;
                g.save(), g.scale(l, c), f._fun.call(f, t, r, -s, -a), g.restore(), t._applyFilters();
            } else g = r, f._fun.call(f, t, r, -s, -a), t._applyFilters();
            d.staticCache && (d.reCache = !1), w.canvasReCache++;
        }, t._canvas_webgl_normal_repaint = function(t, e) {
            var n = t._cacheStyle, r = this._next, s = n.canvas, a = n.cacheAs;
            n._calculateCacheRect(t, a, 0, 0);
            s || (s = n.canvas = new i.WebGLCacheAsNormalCanvas(e, t));
            var o = s.context;
            s.startRec(), r._fun.call(r, t, o, t.pivotX, t.pivotY), t._applyFilters(), w.canvasReCache++, 
            s.endRec();
        }, t._blend = function(t, e, i, n) {
            var r = t._style, s = this._next;
            r.blendMode ? (e.save(), e.globalCompositeOperation = r.blendMode, s._fun.call(s, t, e, i, n), 
            e.restore()) : s._fun.call(s, t, e, i, n);
        }, t._mask = function(t, e, i, n) {
            var r = this._next, s = t.mask, a = e;
            if (s) {
                a.save();
                var o = a.globalCompositeOperation, h = new mt();
                if (h.copyFrom(s.getBounds()), h.width = Math.round(h.width), h.height = Math.round(h.height), 
                h.x = Math.round(h.x), h.y = Math.round(h.y), h.width > 0 && h.height > 0) {
                    var u = h.width, l = h.height, c = ee.getRT(u, l);
                    a.breakNextMerge(), a.pushRT(), a.addRenderObject(Q.create([ a, c, u, l ], RenderSprite.tmpTarget, this)), 
                    s.render(a, -h.x, -h.y), a.breakNextMerge(), a.popRT(), a.save(), a.clipRect(i + h.x - t.getStyle().pivotX, n + h.y - t.getStyle().pivotY, u, l), 
                    r._fun.call(r, t, a, i, n), a.restore(), o = a.globalCompositeOperation, a.addRenderObject(Q.create([ "mask" ], RenderSprite.setBlendMode, this));
                    var _ = H.create(1, 0), d = Ee.INV_UV;
                    a.drawTarget(c, i + h.x - t.getStyle().pivotX, n + h.y - t.getStyle().pivotY, u, l, st.TEMP.identity(), _, d, 6), 
                    a.addRenderObject(Q.create([ c ], RenderSprite.recycleTarget, this)), a.addRenderObject(Q.create([ o ], RenderSprite.setBlendMode, this));
                }
                a.restore();
            } else r._fun.call(r, t, e, i, n);
        }, RenderSprite.__init__ = function() {
            a.__init__();
            var t, e, i = 0;
            for (e = new RenderSprite(69905, null), t = RenderSprite.renders.length = 16384, 
            i = 0; i < t; i++) RenderSprite.renders[i] = e;
            RenderSprite.renders[0] = new RenderSprite(0, null);
        }, RenderSprite._initRenderFun = function(t, e, i, n) {
            var r = t._renderType;
            (RenderSprite.renders[r] = RenderSprite._getTypeRender(r))._fun(t, e, i, n);
        }, RenderSprite._getTypeRender = function(t) {
            if (a.map[t]) return new RenderSprite(t, null);
            for (var e = null, i = 8192; i > 0; ) i & t && (e = new RenderSprite(i, e)), i >>= 1;
            return e;
        }, RenderSprite.tmpTarget = function(t, e, i, n) {
            e.start(), e.clear(0, 0, 0, 0);
        }, RenderSprite.recycleTarget = function(t) {
            ee.releaseRT(t);
        }, RenderSprite.setBlendMode = function(t) {
            var e = Ct.mainContext;
            _e.targetFns[_e.TOINT[t]](e);
        }, RenderSprite.INIT = 69905, RenderSprite.renders = [], RenderSprite.NORENDER = new RenderSprite(0, null), 
        n(RenderSprite, [ "tempUV", function() {
            return this.tempUV = new Array(8);
        } ]), RenderSprite;
    }(), D = (function() {
        function Keyboard() {}
        r(Keyboard, "laya.events.Keyboard"), Keyboard.NUMBER_0 = 48, Keyboard.NUMBER_1 = 49, 
        Keyboard.NUMBER_2 = 50, Keyboard.NUMBER_3 = 51, Keyboard.NUMBER_4 = 52, Keyboard.NUMBER_5 = 53, 
        Keyboard.NUMBER_6 = 54, Keyboard.NUMBER_7 = 55, Keyboard.NUMBER_8 = 56, Keyboard.NUMBER_9 = 57, 
        Keyboard.A = 65, Keyboard.B = 66, Keyboard.C = 67, Keyboard.D = 68, Keyboard.E = 69, 
        Keyboard.F = 70, Keyboard.G = 71, Keyboard.H = 72, Keyboard.I = 73, Keyboard.J = 74, 
        Keyboard.K = 75, Keyboard.L = 76, Keyboard.M = 77, Keyboard.N = 78, Keyboard.O = 79, 
        Keyboard.P = 80, Keyboard.Q = 81, Keyboard.R = 82, Keyboard.S = 83, Keyboard.T = 84, 
        Keyboard.U = 85, Keyboard.V = 86, Keyboard.W = 87, Keyboard.X = 88, Keyboard.Y = 89, 
        Keyboard.Z = 90, Keyboard.F1 = 112, Keyboard.F2 = 113, Keyboard.F3 = 114, Keyboard.F4 = 115, 
        Keyboard.F5 = 116, Keyboard.F6 = 117, Keyboard.F7 = 118, Keyboard.F8 = 119, Keyboard.F9 = 120, 
        Keyboard.F10 = 121, Keyboard.F11 = 122, Keyboard.F12 = 123, Keyboard.F13 = 124, 
        Keyboard.F14 = 125, Keyboard.F15 = 126, Keyboard.NUMPAD = 21, Keyboard.NUMPAD_0 = 96, 
        Keyboard.NUMPAD_1 = 97, Keyboard.NUMPAD_2 = 98, Keyboard.NUMPAD_3 = 99, Keyboard.NUMPAD_4 = 100, 
        Keyboard.NUMPAD_5 = 101, Keyboard.NUMPAD_6 = 102, Keyboard.NUMPAD_7 = 103, Keyboard.NUMPAD_8 = 104, 
        Keyboard.NUMPAD_9 = 105, Keyboard.NUMPAD_ADD = 107, Keyboard.NUMPAD_DECIMAL = 110, 
        Keyboard.NUMPAD_DIVIDE = 111, Keyboard.NUMPAD_ENTER = 108, Keyboard.NUMPAD_MULTIPLY = 106, 
        Keyboard.NUMPAD_SUBTRACT = 109, Keyboard.SEMICOLON = 186, Keyboard.EQUAL = 187, 
        Keyboard.COMMA = 188, Keyboard.MINUS = 189, Keyboard.PERIOD = 190, Keyboard.SLASH = 191, 
        Keyboard.BACKQUOTE = 192, Keyboard.LEFTBRACKET = 219, Keyboard.BACKSLASH = 220, 
        Keyboard.RIGHTBRACKET = 221, Keyboard.QUOTE = 222, Keyboard.ALTERNATE = 18, Keyboard.BACKSPACE = 8, 
        Keyboard.CAPS_LOCK = 20, Keyboard.COMMAND = 15, Keyboard.CONTROL = 17, Keyboard.DELETE = 46, 
        Keyboard.ENTER = 13, Keyboard.ESCAPE = 27, Keyboard.PAGE_UP = 33, Keyboard.PAGE_DOWN = 34, 
        Keyboard.END = 35, Keyboard.HOME = 36, Keyboard.LEFT = 37, Keyboard.UP = 38, Keyboard.RIGHT = 39, 
        Keyboard.DOWN = 40, Keyboard.SHIFT = 16, Keyboard.SPACE = 32, Keyboard.TAB = 9, 
        Keyboard.INSERT = 45;
    }(), function() {
        function RestoreCmd() {}
        r(RestoreCmd, "laya.display.cmd.RestoreCmd");
        var t = RestoreCmd.prototype;
        return t.recover = function() {
            N.recover("RestoreCmd", this);
        }, t.run = function(t, e, i) {
            t.restore();
        }, s(0, t, "cmdID", function() {
            return "Restore";
        }), RestoreCmd.create = function() {
            return N.getItemByClass("RestoreCmd", RestoreCmd);
        }, RestoreCmd.ID = "Restore", RestoreCmd;
    }()), I = function() {
        function ShaderDefinesBase(t, e, i) {
            this._value = 0, this._name2int = t, this._int2name = e, this._int2nameMap = i;
        }
        r(ShaderDefinesBase, "laya.webgl.shader.ShaderDefinesBase");
        var t = ShaderDefinesBase.prototype;
        return t.add = function(t) {
            return "string" == typeof t && (t = this._name2int[t]), this._value |= t, this._value;
        }, t.addInt = function(t) {
            return this._value |= t, this._value;
        }, t.remove = function(t) {
            return "string" == typeof t && (t = this._name2int[t]), this._value &= ~t, this._value;
        }, t.isDefine = function(t) {
            return (this._value & t) === t;
        }, t.getValue = function() {
            return this._value;
        }, t.setValue = function(t) {
            this._value = t;
        }, t.toNameDic = function() {
            var t = this._int2nameMap[this._value];
            return t || ShaderDefinesBase._toText(this._value, this._int2name, this._int2nameMap);
        }, ShaderDefinesBase._reg = function(t, e, i, n) {
            i[t] = e, n[e] = t;
        }, ShaderDefinesBase._toText = function(t, e, i) {
            var n = i[t];
            if (n) return n;
            for (var r = {}, s = 1, a = 0; a < 32 && !((s = 1 << a) > t); a++) if (t & s) {
                var o = e[s];
                o && (r[o] = "");
            }
            return i[t] = r, r;
        }, ShaderDefinesBase._toInt = function(t, e) {
            for (var i = t.split("."), n = 0, r = 0, s = i.length; r < s; r++) {
                var a = e[i[r]];
                if (!a) throw new Error("Defines to int err:" + t + "/" + i[r]);
                n |= a;
            }
            return n;
        }, ShaderDefinesBase;
    }(), P = function() {
        function BitmapFont() {
            this._texture = null, this._fontCharDic = {}, this._fontWidthMap = {}, this._complete = null, 
            this._path = null, this._maxWidth = 0, this._spaceWidth = 10, this._padding = null, 
            this.fontSize = 12, this.autoScaleSize = !1, this.letterSpacing = 0;
        }
        r(BitmapFont, "laya.display.BitmapFont");
        var t = BitmapFont.prototype;
        return t.loadFont = function(t, e) {
            this._path = t, this._complete = e, t && -1 !== t.indexOf(".fnt") ? i.loader.load([ {
                url: t,
                type: "xml"
            }, {
                url: t.replace(".fnt", ".png"),
                type: "image"
            } ], g.create(this, this._onLoaded)) : console.error('Bitmap font configuration information must be a ".fnt" file');
        }, t._onLoaded = function() {
            this.parseFont(Ie.getRes(this._path), Ie.getRes(this._path.replace(".fnt", ".png"))), 
            this._complete && this._complete.run();
        }, t.parseFont = function(t, e) {
            if (null != t && null != e) {
                this._texture = e;
                var i = t.getElementsByTagName("info");
                if (!i[0].getAttributeNode) return this.parseFont2(t, e);
                this.fontSize = parseInt(i[0].getAttributeNode("size").nodeValue);
                var n, r = i[0].getAttributeNode("padding").nodeValue.split(",");
                this._padding = [ parseInt(r[0]), parseInt(r[1]), parseInt(r[2]), parseInt(r[3]) ], 
                n = t.getElementsByTagName("char");
                var s = 0;
                for (s = 0; s < n.length; s++) {
                    var a = n[s], o = parseInt(a.getAttributeNode("id").nodeValue), h = parseInt(a.getAttributeNode("xoffset").nodeValue) / 1, u = parseInt(a.getAttributeNode("yoffset").nodeValue) / 1, l = parseInt(a.getAttributeNode("xadvance").nodeValue) / 1, c = new mt();
                    c.x = parseInt(a.getAttributeNode("x").nodeValue), c.y = parseInt(a.getAttributeNode("y").nodeValue), 
                    c.width = parseInt(a.getAttributeNode("width").nodeValue), c.height = parseInt(a.getAttributeNode("height").nodeValue);
                    var _ = Ee.create(e, c.x, c.y, c.width, c.height, h, u);
                    this._maxWidth = Math.max(this._maxWidth, l + this.letterSpacing), this._fontCharDic[o] = _, 
                    this._fontWidthMap[o] = l;
                }
            }
        }, t.parseFont2 = function(t, e) {
            if (null != t && null != e) {
                this._texture = e;
                var i = t.getElementsByTagName("info");
                this.fontSize = parseInt(i[0].attributes.size.nodeValue);
                var n = i[0].attributes.padding.nodeValue.split(",");
                this._padding = [ parseInt(n[0]), parseInt(n[1]), parseInt(n[2]), parseInt(n[3]) ];
                var r = t.getElementsByTagName("char"), s = 0;
                for (s = 0; s < r.length; s++) {
                    var a = r[s].attributes, o = parseInt(a.id.nodeValue), h = parseInt(a.xoffset.nodeValue) / 1, u = parseInt(a.yoffset.nodeValue) / 1, l = parseInt(a.xadvance.nodeValue) / 1, c = new mt();
                    c.x = parseInt(a.x.nodeValue), c.y = parseInt(a.y.nodeValue), c.width = parseInt(a.width.nodeValue), 
                    c.height = parseInt(a.height.nodeValue);
                    var _ = Ee.create(e, c.x, c.y, c.width, c.height, h, u);
                    this._maxWidth = Math.max(this._maxWidth, l + this.letterSpacing), this._fontCharDic[o] = _, 
                    this._fontWidthMap[o] = l;
                }
            }
        }, t.getCharTexture = function(t) {
            return this._fontCharDic[t.charCodeAt(0)];
        }, t.destroy = function() {
            if (this._texture) {
                for (var t in this._fontCharDic) {
                    var e = this._fontCharDic[t];
                    e && e.destroy();
                }
                this._texture.destroy(), this._fontCharDic = null, this._fontWidthMap = null, this._texture = null, 
                this._complete = null, this._padding = null;
            }
        }, t.setSpaceWidth = function(t) {
            this._spaceWidth = t;
        }, t.getCharWidth = function(t) {
            var e = t.charCodeAt(0);
            return this._fontWidthMap[e] ? this._fontWidthMap[e] + this.letterSpacing : " " === t ? this._spaceWidth + this.letterSpacing : 0;
        }, t.getTextWidth = function(t) {
            for (var e = 0, i = 0, n = t.length; i < n; i++) e += this.getCharWidth(t.charAt(i));
            return e;
        }, t.getMaxWidth = function() {
            return this._maxWidth;
        }, t.getMaxHeight = function() {
            return this.fontSize;
        }, t._drawText = function(t, e, i, n, r, s) {
            var a, o = this.getTextWidth(t), h = 0;
            "center" === r && (h = (s - o) / 2), "right" === r && (h = s - o);
            for (var u = 0, l = 0, c = t.length; l < c; l++) (a = this.getCharTexture(t.charAt(l))) && (e.graphics.drawImage(a, i + u + h, n), 
            u += this.getCharWidth(t.charAt(l)));
        }, BitmapFont;
    }(), B = function() {
        function ClipRectCmd() {}
        r(ClipRectCmd, "laya.display.cmd.ClipRectCmd");
        var t = ClipRectCmd.prototype;
        return t.recover = function() {
            N.recover("ClipRectCmd", this);
        }, t.run = function(t, e, i) {
            t.clipRect(this.x + e, this.y + i, this.width, this.height);
        }, s(0, t, "cmdID", function() {
            return "ClipRect";
        }), ClipRectCmd.create = function(t, e, i, n) {
            var r = N.getItemByClass("ClipRectCmd", ClipRectCmd);
            return r.x = t, r.y = e, r.width = i, r.height = n, r;
        }, ClipRectCmd.ID = "ClipRect", ClipRectCmd;
    }(), F = function() {
        function Shader2D() {
            this.ALPHA = 1, this.shaderType = 0, this.defines = new Le(), this.fillStyle = Mt.DEFAULT, 
            this.strokeStyle = Mt.DEFAULT;
        }
        return r(Shader2D, "laya.webgl.shader.d2.Shader2D"), Shader2D.prototype.destroy = function() {
            this.defines = null, this.filters = null;
        }, Shader2D.__init__ = function() {
            var t, e;
            t = "/*\n\ttexture和fillrect使用的。\n*/\nattribute vec4 posuv;\nattribute vec4 attribColor;\nattribute vec4 attribFlags;\n//attribute vec4 clipDir;\n//attribute vec2 clipRect;\nuniform vec4 clipMatDir;\nuniform vec2 clipMatPos;\t\t// 这个是全局的，不用再应用矩阵了。\nvarying vec2 cliped;\nuniform vec2 size;\nuniform vec2 clipOff;\t\t\t// 使用要把clip偏移。cacheas normal用. 只用了[0]\n#ifdef WORLDMAT\n\tuniform mat4 mmat;\n#endif\n#ifdef MVP3D\n\tuniform mat4 u_MvpMatrix;\n#endif\nvarying vec4 v_texcoordAlpha;\nvarying vec4 v_color;\nvarying float v_useTex;\n\nvoid main() {\n\n\tvec4 pos = vec4(posuv.xy,0.,1.);\n#ifdef WORLDMAT\n\tpos=mmat*pos;\n#endif\n\tvec4 pos1  =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,0.,1.0);\n#ifdef MVP3D\n\tgl_Position=u_MvpMatrix*pos1;\n#else\n\tgl_Position=pos1;\n#endif\n\tv_texcoordAlpha.xy = posuv.zw;\n\t//v_texcoordAlpha.z = attribColor.a/255.0;\n\tv_color = attribColor/255.0;\n\tv_color.xyz*=v_color.w;//反正后面也要预乘\n\t\n\tv_useTex = attribFlags.r/255.0;\n\tfloat clipw = length(clipMatDir.xy);\n\tfloat cliph = length(clipMatDir.zw);\n\t\n\tvec2 clpos = clipMatPos.xy;\n\t#ifdef WORLDMAT\n\t\t// 如果有mmat，需要修改clipMatPos,因为 这是cacheas normal （如果不是就错了）， clipMatPos被去掉了偏移\n\t\tif(clipOff[0]>0.0){\n\t\t\tclpos.x+=mmat[3].x;\t//tx\t最简单处理\n\t\t\tclpos.y+=mmat[3].y;\t//ty\n\t\t}\n\t#endif\n\tvec2 clippos = pos.xy - clpos;\t//pos已经应用矩阵了，为了减的有意义，clip的位置也要缩放\n\tif(clipw>20000. && cliph>20000.)\n\t\tcliped = vec2(0.5,0.5);\n\telse {\n\t\t//转成0到1之间。/clipw/clipw 表示clippos与normalize之后的clip朝向点积之后，再除以clipw\n\t\tcliped=vec2( dot(clippos,clipMatDir.xy)/clipw/clipw, dot(clippos,clipMatDir.zw)/cliph/cliph);\n\t}\n\n}", 
            e = "/*\n\ttexture和fillrect使用的。\n*/\n#ifdef FSHIGHPRECISION\nprecision highp float;\n#else\nprecision mediump float;\n#endif\n\nvarying vec4 v_texcoordAlpha;\nvarying vec4 v_color;\nvarying float v_useTex;\nuniform sampler2D texture;\nvarying vec2 cliped;\n\n#ifdef BLUR_FILTER\nuniform vec4 strength_sig2_2sig2_gauss1;\nuniform vec2 blurInfo;\n\n#define PI 3.141593\n\nfloat getGaussian(float x, float y){\n    return strength_sig2_2sig2_gauss1.w*exp(-(x*x+y*y)/strength_sig2_2sig2_gauss1.z);\n}\n\nvec4 blur(){\n    const float blurw = 9.0;\n    vec4 vec4Color = vec4(0.0,0.0,0.0,0.0);\n    vec2 halfsz=vec2(blurw,blurw)/2.0/blurInfo;    \n    vec2 startpos=v_texcoordAlpha.xy-halfsz;\n    vec2 ctexcoord = startpos;\n    vec2 step = 1.0/blurInfo;  //每个像素      \n    \n    for(float y = 0.0;y<=blurw; ++y){\n        ctexcoord.x=startpos.x;\n        for(float x = 0.0;x<=blurw; ++x){\n            //TODO 纹理坐标的固定偏移应该在vs中处理\n            vec4Color += texture2D(texture, ctexcoord)*getGaussian(x-blurw/2.0,y-blurw/2.0);\n            ctexcoord.x+=step.x;\n        }\n        ctexcoord.y+=step.y;\n    }\n    return vec4Color;\n}\n#endif\n\n#ifdef COLOR_FILTER\nuniform vec4 colorAlpha;\nuniform mat4 colorMat;\n#endif\n\n#ifdef GLOW_FILTER\nuniform vec4 u_color;\nuniform vec4 u_blurInfo1;\nuniform vec4 u_blurInfo2;\n#endif\n\n#ifdef COLOR_ADD\nuniform vec4 colorAdd;\n#endif\n\n#ifdef FILLTEXTURE\t\nuniform vec4 u_TexRange;//startu,startv,urange, vrange\n#endif\nvoid main() {\n\tif(cliped.x<0.) discard;\n\tif(cliped.x>1.) discard;\n\tif(cliped.y<0.) discard;\n\tif(cliped.y>1.) discard;\n\t\n#ifdef FILLTEXTURE\t\n   vec4 color= texture2D(texture, fract(v_texcoordAlpha.xy)*u_TexRange.zw + u_TexRange.xy);\n#else\n   vec4 color= texture2D(texture, v_texcoordAlpha.xy);\n#endif\n\n   if(v_useTex<=0.)color = vec4(1.,1.,1.,1.);\n   color.a*=v_color.w;\n   //color.rgb*=v_color.w;\n   color.rgb*=v_color.rgb;\n   gl_FragColor=color;\n   \n   #ifdef COLOR_ADD\n\tgl_FragColor = vec4(colorAdd.rgb,colorAdd.a*gl_FragColor.a);\n\tgl_FragColor.xyz *= colorAdd.a;\n   #endif\n   \n   #ifdef BLUR_FILTER\n\tgl_FragColor =   blur();\n\tgl_FragColor.w*=v_color.w;   \n   #endif\n   \n   #ifdef COLOR_FILTER\n\tmat4 alphaMat =colorMat;\n\n\talphaMat[0][3] *= gl_FragColor.a;\n\talphaMat[1][3] *= gl_FragColor.a;\n\talphaMat[2][3] *= gl_FragColor.a;\n\n\tgl_FragColor = gl_FragColor * alphaMat;\n\tgl_FragColor += colorAlpha/255.0*gl_FragColor.a;\n   #endif\n   \n   #ifdef GLOW_FILTER\n\tconst float c_IterationTime = 10.0;\n\tfloat floatIterationTotalTime = c_IterationTime * c_IterationTime;\n\tvec4 vec4Color = vec4(0.0,0.0,0.0,0.0);\n\tvec2 vec2FilterDir = vec2(-(u_blurInfo1.z)/u_blurInfo2.x,-(u_blurInfo1.w)/u_blurInfo2.y);\n\tvec2 vec2FilterOff = vec2(u_blurInfo1.x/u_blurInfo2.x/c_IterationTime * 2.0,u_blurInfo1.y/u_blurInfo2.y/c_IterationTime * 2.0);\n\tfloat maxNum = u_blurInfo1.x * u_blurInfo1.y;\n\tvec2 vec2Off = vec2(0.0,0.0);\n\tfloat floatOff = c_IterationTime/2.0;\n\tfor(float i = 0.0;i<=c_IterationTime; ++i){\n\t\tfor(float j = 0.0;j<=c_IterationTime; ++j){\n\t\t\tvec2Off = vec2(vec2FilterOff.x * (i - floatOff),vec2FilterOff.y * (j - floatOff));\n\t\t\tvec4Color += texture2D(texture, v_texcoordAlpha.xy + vec2FilterDir + vec2Off)/floatIterationTotalTime;\n\t\t}\n\t}\n\tgl_FragColor = vec4(u_color.rgb,vec4Color.a * u_blurInfo2.z);\n\tgl_FragColor.rgb *= gl_FragColor.a;   \n   #endif\n   \n}", 
            ni.preCompile2D(0, 1, t, e, null), t = "attribute vec4 position;\nattribute vec4 attribColor;\n//attribute vec4 clipDir;\n//attribute vec2 clipRect;\nuniform vec4 clipMatDir;\nuniform vec2 clipMatPos;\n#ifdef WORLDMAT\n\tuniform mat4 mmat;\n#endif\nuniform mat4 u_mmat2;\n//uniform vec2 u_pos;\nuniform vec2 size;\nvarying vec4 color;\n//vec4 dirxy=vec4(0.9,0.1, -0.1,0.9);\n//vec4 clip=vec4(100.,30.,300.,600.);\nvarying vec2 cliped;\nvoid main(){\n\t\n#ifdef WORLDMAT\n\tvec4 pos=mmat*vec4(position.xy,0.,1.);\n\tgl_Position =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\n#else\n\tgl_Position =vec4((position.x/size.x-0.5)*2.0,(0.5-position.y/size.y)*2.0,position.z,1.0);\n#endif\t\n\tfloat clipw = length(clipMatDir.xy);\n\tfloat cliph = length(clipMatDir.zw);\n\tvec2 clippos = position.xy - clipMatPos.xy;\t//pos已经应用矩阵了，为了减的有意义，clip的位置也要缩放\n\tif(clipw>20000. && cliph>20000.)\n\t\tcliped = vec2(0.5,0.5);\n\telse {\n\t\t//clipdir是带缩放的方向，由于上面clippos是在缩放后的空间计算的，所以需要把方向先normalize一下\n\t\tcliped=vec2( dot(clippos,clipMatDir.xy)/clipw/clipw, dot(clippos,clipMatDir.zw)/cliph/cliph);\n\t}\n  //pos2d.x = dot(clippos,dirx);\n  color=attribColor/255.;\n}", 
            e = "precision mediump float;\n//precision mediump float;\nvarying vec4 color;\n//uniform float alpha;\nvarying vec2 cliped;\nvoid main(){\n\t//vec4 a=vec4(color.r, color.g, color.b, 1);\n\t//a.a*=alpha;\n    gl_FragColor= color;// vec4(color.r, color.g, color.b, alpha);\n\tgl_FragColor.rgb*=color.a;\n\tif(cliped.x<0.) discard;\n\tif(cliped.x>1.) discard;\n\tif(cliped.y<0.) discard;\n\tif(cliped.y>1.) discard;\n}", 
            ni.preCompile2D(0, 4, t, e, null), t = "attribute vec2 position;\nattribute vec2 texcoord;\nattribute vec4 color;\nuniform vec2 size;\nuniform float offsetX;\nuniform float offsetY;\nuniform mat4 mmat;\nuniform mat4 u_mmat2;\nvarying vec2 v_texcoord;\nvarying vec4 v_color;\nvoid main() {\n  vec4 pos=mmat*u_mmat2*vec4(offsetX+position.x,offsetY+position.y,0,1 );\n  gl_Position = vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\n  v_color = color;\n  v_color.rgb *= v_color.a;\n  v_texcoord = texcoord;  \n}", 
            e = "precision mediump float;\nvarying vec2 v_texcoord;\nvarying vec4 v_color;\nuniform sampler2D texture;\nuniform float alpha;\nvoid main() {\n\tvec4 t_color = texture2D(texture, v_texcoord);\n\tgl_FragColor = t_color.rgba * v_color;\n\tgl_FragColor *= alpha;\n}", 
            ni.preCompile2D(0, 512, t, e, null);
        }, Shader2D;
    }(), G = function() {
        function DrawPolyCmd() {}
        r(DrawPolyCmd, "laya.display.cmd.DrawPolyCmd");
        var t = DrawPolyCmd.prototype;
        return t.recover = function() {
            this.points = null, this.fillColor = null, this.lineColor = null, N.recover("DrawPolyCmd", this);
        }, t.run = function(t, e, i) {
            t._drawPoly(this.x + e, this.y + i, this.points, this.fillColor, this.lineColor, this.lineWidth, this.isConvexPolygon, this.vid);
        }, s(0, t, "cmdID", function() {
            return "DrawPoly";
        }), DrawPolyCmd.create = function(t, e, i, n, r, s, a, o) {
            var h = N.getItemByClass("DrawPolyCmd", DrawPolyCmd);
            return h.x = t, h.y = e, h.points = i, h.fillColor = n, h.lineColor = r, h.lineWidth = s, 
            h.isConvexPolygon = a, h.vid = o, h;
        }, DrawPolyCmd.ID = "DrawPoly", DrawPolyCmd;
    }(), W = function() {
        function TTFLoader() {
            this.fontName = null, this.complete = null, this.err = null, this._fontTxt = null, 
            this._url = null, this._div = null, this._txtWidth = NaN, this._http = null;
        }
        r(TTFLoader, "laya.net.TTFLoader");
        var t = TTFLoader.prototype;
        return t.load = function(t) {
            this._url = t;
            var e = t.split(".ttf")[0].split("/");
            this.fontName = e[e.length - 1], Rt.isConchApp ? this._loadConch() : It.window.FontFace ? this._loadWithFontFace() : this._loadWithCSS();
        }, t._loadConch = function() {
            this._http = new De(), this._http.on("error", this, this._onErr), this._http.on("complete", this, this._onHttpLoaded), 
            this._http.send(this._url, null, "get", "arraybuffer");
        }, t._onHttpLoaded = function(t) {
            It.window.conchTextCanvas.setFontFaceFromBuffer(this.fontName, t), this._clearHttp(), 
            this._complete();
        }, t._clearHttp = function() {
            this._http && (this._http.off("error", this, this._onErr), this._http.off("complete", this, this._onHttpLoaded), 
            this._http = null);
        }, t._onErr = function() {
            this._clearHttp(), this.err && (this.err.runWith("fail:" + this._url), this.err = null);
        }, t._complete = function() {
            i.systemTimer.clear(this, this._complete), i.systemTimer.clear(this, this._checkComplete), 
            this._div && this._div.parentNode && (this._div.parentNode.removeChild(this._div), 
            this._div = null), this.complete && (this.complete.runWith(this), this.complete = null);
        }, t._checkComplete = function() {
            le.measureText("LayaTTFFont", this._fontTxt).width != this._txtWidth && this._complete();
        }, t._loadWithFontFace = function() {
            var t = new It.window.FontFace(this.fontName, "url('" + this._url + "')");
            It.window.document.fonts.add(t);
            var e = this;
            t.loaded.then(function() {
                e._complete();
            }), t.load();
        }, t._createDiv = function() {
            this._div = It.createElement("div"), this._div.innerHTML = "laya";
            var t = this._div.style;
            t.fontFamily = this.fontName, t.position = "absolute", t.left = "-100px", t.top = "-100px", 
            It.document.body.appendChild(this._div);
        }, t._loadWithCSS = function() {
            var t = this, e = It.createElement("style");
            e.type = "text/css", It.document.body.appendChild(e), e.textContent = "@font-face { font-family:'" + this.fontName + "'; src:url('" + this._url + "');}", 
            this._fontTxt = "40px " + this.fontName, this._txtWidth = le.measureText("LayaTTFFont", this._fontTxt).width;
            var n = this;
            e.onload = function() {
                i.systemTimer.once(1e4, n, t._complete);
            }, i.systemTimer.loop(20, this, this._checkComplete), this._createDiv();
        }, TTFLoader._testString = "LayaTTFFont", TTFLoader;
    }(), O = function() {
        function SubmitKey() {
            this.blendShader = 0, this.submitType = 0, this.other = 0, this.clear();
        }
        r(SubmitKey, "laya.webgl.submit.SubmitKey");
        var t = SubmitKey.prototype;
        return t.clear = function() {
            this.submitType = -1, this.blendShader = this.other = 0;
        }, t.copyFrom = function(t) {
            this.other = t.other, this.blendShader = t.blendShader, this.submitType = t.submitType;
        }, t.copyFrom2 = function(t, e, i) {
            this.other = i, this.submitType = e;
        }, t.equal3_2 = function(t, e, i) {
            return this.submitType === e && this.other === i && this.blendShader === t.blendShader;
        }, t.equal4_2 = function(t, e, i) {
            return this.submitType === e && this.other === i && this.blendShader === t.blendShader;
        }, t.equal_3 = function(t) {
            return this.submitType === t.submitType && this.blendShader === t.blendShader;
        }, t.equal = function(t) {
            return this.other === t.other && this.submitType === t.submitType && this.blendShader === t.blendShader;
        }, SubmitKey;
    }(), N = (function() {
        function DrawCanvasCmd() {
            this._graphicsCmdEncoder = null, this._index = 0, this._paramData = null, this.texture = null, 
            this.x = NaN, this.y = NaN, this.width = NaN, this.height = NaN;
        }
        r(DrawCanvasCmd, "laya.display.cmd.DrawCanvasCmd");
        var t = DrawCanvasCmd.prototype;
        t.recover = function() {
            this._graphicsCmdEncoder = null, N.recover("DrawCanvasCmd", this);
        }, s(0, t, "cmdID", function() {
            return "DrawCanvasCmd";
        }), DrawCanvasCmd.create = function(t, e, i, n, r) {
            return null;
        }, DrawCanvasCmd.ID = "DrawCanvasCmd", DrawCanvasCmd._DRAW_IMAGE_CMD_ENCODER_ = null, 
        DrawCanvasCmd._PARAM_TEXTURE_POS_ = 2, DrawCanvasCmd._PARAM_VB_POS_ = 5;
    }(), function() {
        function Pool() {}
        return r(Pool, "laya.utils.Pool"), Pool.getPoolBySign = function(t) {
            return Pool._poolDic[t] || (Pool._poolDic[t] = []);
        }, Pool.clearBySign = function(t) {
            Pool._poolDic[t] && (Pool._poolDic[t].length = 0);
        }, Pool.recover = function(t, e) {
            e.__InPool || (e.__InPool = !0, Pool.getPoolBySign(t).push(e));
        }, Pool.recoverByClass = function(t) {
            if (t) {
                var e = t.__className || t.constructor._$gid;
                e && Pool.recover(e, t);
            }
        }, Pool._getClassSign = function(t) {
            var e = t.__className || t._$gid;
            return e || (t._$gid = e = ie.getGID() + ""), e;
        }, Pool.createByClass = function(t) {
            return Pool.getItemByClass(Pool._getClassSign(t), t);
        }, Pool.getItemByClass = function(t, e) {
            if (!Pool._poolDic[t]) return new e();
            var i = Pool.getPoolBySign(t);
            if (i.length) {
                var n = i.pop();
                n.__InPool = !1;
            } else n = new e();
            return n;
        }, Pool.getItemByCreateFun = function(t, e, i) {
            var n = Pool.getPoolBySign(t), r = n.length ? n.pop() : e.call(i);
            return r.__InPool = !1, r;
        }, Pool.getItem = function(t) {
            var e = Pool.getPoolBySign(t), i = e.length ? e.pop() : null;
            return i && (i.__InPool = !1), i;
        }, Pool.POOLSIGN = "__InPool", Pool._poolDic = {}, Pool;
    }()), U = function() {
        function InlcudeFile(t) {
            this.script = null, this.codes = {}, this.funs = {}, this.curUseID = -1, this.funnames = "", 
            this.script = t;
            for (var e = 0, i = 0, n = 0; !((e = t.indexOf("#begin", e)) < 0); ) {
                for (n = e + 5; !((n = t.indexOf("#end", n)) < 0) && "i" === t.charAt(n + 4); ) n += 5;
                if (n < 0) throw "add include err,no #end:" + t;
                i = t.indexOf("\n", e);
                var r = pe.splitToWords(t.substr(e, i - e), null);
                "code" == r[1] ? this.codes[r[2]] = t.substr(i + 1, n - i - 1) : "function" == r[1] && (i = t.indexOf("function", e), 
                i += "function".length, this.funs[r[3]] = t.substr(i + 1, n - i - 1), this.funnames += r[3] + ";"), 
                e = n + 1;
            }
        }
        r(InlcudeFile, "laya.webgl.utils.InlcudeFile");
        var t = InlcudeFile.prototype;
        return t.getWith = function(t) {
            var e = t ? this.codes[t] : this.script;
            if (!e) throw "get with error:" + t;
            return e;
        }, t.getFunsScript = function(t) {
            var e = "";
            for (var i in this.funs) t.indexOf(i + ";") >= 0 && (e += this.funs[i]);
            return e;
        }, InlcudeFile;
    }(), k = (function() {
        function SpriteConst() {}
        r(SpriteConst, "laya.display.SpriteConst"), SpriteConst.ALPHA = 1, SpriteConst.TRANSFORM = 2, 
        SpriteConst.BLEND = 4, SpriteConst.CANVAS = 8, SpriteConst.FILTERS = 16, SpriteConst.MASK = 32, 
        SpriteConst.CLIP = 64, SpriteConst.STYLE = 128, SpriteConst.TEXTURE = 256, SpriteConst.GRAPHICS = 512, 
        SpriteConst.LAYAGL3D = 1024, SpriteConst.CUSTOM = 2048, SpriteConst.ONECHILD = 4096, 
        SpriteConst.CHILDS = 8192, SpriteConst.REPAINT_NONE = 0, SpriteConst.REPAINT_NODE = 1, 
        SpriteConst.REPAINT_CACHE = 2, SpriteConst.REPAINT_ALL = 3;
    }(), function() {
        function Buffer() {
            this._glBuffer = null, this._buffer = null, this._bufferType = 0, this._bufferUsage = 0, 
            this._byteLength = 0, this._glBuffer = Dt.instance.createBuffer();
        }
        r(Buffer, "laya.webgl.utils.Buffer");
        var t = Buffer.prototype;
        return t._bindForVAO = function() {}, t.bind = function() {
            return !1;
        }, t.destroy = function() {
            this._glBuffer && (Dt.instance.deleteBuffer(this._glBuffer), this._glBuffer = null);
        }, s(0, t, "bufferUsage", function() {
            return this._bufferUsage;
        }), Buffer._bindedVertexBuffer = null, Buffer._bindedIndexBuffer = null, Buffer;
    }()), V = function() {
        function DrawTextureCmd() {
            this.colorFlt = null;
        }
        r(DrawTextureCmd, "laya.display.cmd.DrawTextureCmd");
        var t = DrawTextureCmd.prototype;
        return t.recover = function() {
            this.texture._removeReference(), this.texture = null, this.matrix = null, N.recover("DrawTextureCmd", this);
        }, t.run = function(t, e, i) {
            t.drawTextureWithTransform(this.texture, this.x, this.y, this.width, this.height, this.matrix, e, i, this.alpha, this.blendMode, this.colorFlt);
        }, s(0, t, "cmdID", function() {
            return "DrawTexture";
        }), DrawTextureCmd.create = function(t, e, i, n, r, s, a, o, h) {
            var u = N.getItemByClass("DrawTextureCmd", DrawTextureCmd);
            return u.texture = t, t._addReference(), u.x = e, u.y = i, u.width = n, u.height = r, 
            u.matrix = s, u.alpha = a, u.color = o, u.blendMode = h, o && (u.colorFlt = new Te(), 
            u.colorFlt.setColor(o)), u;
        }, DrawTextureCmd.ID = "DrawTexture", DrawTextureCmd;
    }(), H = function() {
        function Value2D(t, e) {
            this.size = [ 0, 0 ], this.alpha = 1, this.ALPHA = 1, this.subID = 0, this.ref = 1, 
            this._cacheID = 0, this.clipMatDir = [ 99999999, 0, 0, 99999999 ], this.clipMatPos = [ 0, 0 ], 
            this.clipOff = [ 0, 0 ], this.defines = new Le(), this.mainID = t, this.subID = e, 
            this.textureHost = null, this.texture = null, this.color = null, this.colorAdd = null, 
            this.u_mmat2 = null, this._cacheID = t | e, this._inClassCache = Value2D._cache[this._cacheID], 
            t > 0 && !this._inClassCache && (this._inClassCache = Value2D._cache[this._cacheID] = [], 
            this._inClassCache._length = 0), this.clear();
        }
        r(Value2D, "laya.webgl.shader.d2.value.Value2D");
        var t = Value2D.prototype;
        return t.setValue = function(t) {}, t._ShaderWithCompile = function() {
            return ni.withCompile2D(0, this.mainID, this.defines.toNameDic(), this.mainID | this.defines._value, li.create, this._attribLocation);
        }, t.upload = function() {
            var t = ft;
            ft.worldMatrix4 === ft.TEMPMAT4_ARRAY || this.defines.addInt(128), this.mmat = t.worldMatrix4, 
            ft.matWVP && (this.defines.addInt(2048), this.u_MvpMatrix = ft.matWVP.elements);
            var e = ni.sharders[this.mainID | this.defines._value] || this._ShaderWithCompile();
            e._shaderValueWidth !== t.width || e._shaderValueHeight !== t.height ? (this.size[0] = t.width, 
            this.size[1] = t.height, e._shaderValueWidth = t.width, e._shaderValueHeight = t.height, 
            e.upload(this, null)) : e.upload(this, e._params2dQuick2 || e._make2dQuick2());
        }, t.setFilters = function(t) {
            if (this.filters = t, t) for (var e, i = t.length, n = 0; n < i; n++) (e = t[n]) && (this.defines.add(e.type), 
            e.action.setValue(this));
        }, t.clear = function() {
            this.defines._value = this.subID + (Ct.shaderHighPrecision ? 1024 : 0), this.clipOff[0] = 0;
        }, t.release = function() {
            --this.ref < 1 && (this._inClassCache && (this._inClassCache[this._inClassCache._length++] = this), 
            this.clear(), this.filters = null, this.ref = 1, this.clipOff[0] = 0);
        }, Value2D._initone = function(t, e) {
            Value2D._typeClass[t] = e, Value2D._cache[t] = [], Value2D._cache[t]._length = 0;
        }, Value2D.__init__ = function() {
            Value2D._initone(4, He), Value2D._initone(512, Xe), Value2D._initone(1, Ge), Value2D._initone(9, Ge);
        }, Value2D.create = function(t, e) {
            var i = Value2D._cache[t | e];
            return i._length ? i[--i._length] : new Value2D._typeClass[t | e](e);
        }, Value2D._cache = [], Value2D._typeClass = [], Value2D.TEMPMAT4_ARRAY = [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ], 
        Value2D;
    }(), X = function() {
        function GrahamScan() {}
        return r(GrahamScan, "laya.maths.GrahamScan"), GrahamScan.multiply = function(t, e, i) {
            return (t.x - i.x) * (e.y - i.y) - (e.x - i.x) * (t.y - i.y);
        }, GrahamScan.dis = function(t, e) {
            return (t.x - e.x) * (t.x - e.x) + (t.y - e.y) * (t.y - e.y);
        }, GrahamScan._getPoints = function(t, e, i) {
            for (void 0 === e && (e = !1), GrahamScan._mPointList || (GrahamScan._mPointList = []); GrahamScan._mPointList.length < t; ) GrahamScan._mPointList.push(new Xt());
            return i || (i = []), i.length = 0, e ? GrahamScan.getFrom(i, GrahamScan._mPointList, t) : GrahamScan.getFromR(i, GrahamScan._mPointList, t), 
            i;
        }, GrahamScan.getFrom = function(t, e, i) {
            var n = 0;
            for (n = 0; n < i; n++) t.push(e[n]);
            return t;
        }, GrahamScan.getFromR = function(t, e, i) {
            var n = 0;
            for (n = 0; n < i; n++) t.push(e.pop());
            return t;
        }, GrahamScan.pListToPointList = function(t, e) {
            void 0 === e && (e = !1);
            var i = 0, n = t.length / 2, r = GrahamScan._getPoints(n, e, GrahamScan._tempPointList);
            for (i = 0; i < n; i++) r[i].setTo(t[i + i], t[i + i + 1]);
            return r;
        }, GrahamScan.pointListToPlist = function(t) {
            var e, i = 0, n = t.length, r = GrahamScan._temPList;
            for (r.length = 0, i = 0; i < n; i++) e = t[i], r.push(e.x, e.y);
            return r;
        }, GrahamScan.scanPList = function(t) {
            return ie.copyArray(t, GrahamScan.pointListToPlist(GrahamScan.scan(GrahamScan.pListToPointList(t, !0))));
        }, GrahamScan.scan = function(t) {
            var e, i, n, r = 0, s = 0, a = 0, o = t.length, h = {};
            for ((i = GrahamScan._temArr).length = 0, r = (o = t.length) - 1; r >= 0; r--) n = (e = t[r]).x + "_" + e.y, 
            h.hasOwnProperty(n) || (h[n] = !0, i.push(e));
            for (o = i.length, ie.copyArray(t, i), r = 1; r < o; r++) (t[r].y < t[a].y || t[r].y == t[a].y && t[r].x < t[a].x) && (a = r);
            for (e = t[0], t[0] = t[a], t[a] = e, r = 1; r < o - 1; r++) {
                for (a = r, s = r + 1; s < o; s++) (GrahamScan.multiply(t[s], t[a], t[0]) > 0 || 0 == GrahamScan.multiply(t[s], t[a], t[0]) && GrahamScan.dis(t[0], t[s]) < GrahamScan.dis(t[0], t[a])) && (a = s);
                e = t[r], t[r] = t[a], t[a] = e;
            }
            if ((i = GrahamScan._temArr).length = 0, t.length < 3) return ie.copyArray(i, t);
            for (i.push(t[0], t[1], t[2]), r = 3; r < o; r++) {
                for (;i.length >= 2 && GrahamScan.multiply(t[r], i[i.length - 1], i[i.length - 2]) >= 0; ) i.pop();
                t[r] && i.push(t[r]);
            }
            return i;
        }, GrahamScan._mPointList = null, GrahamScan._tempPointList = [], GrahamScan._temPList = [], 
        GrahamScan._temArr = [], GrahamScan;
    }(), Y = function() {
        function SaveMark() {
            this._saveuse = 0;
        }
        r(SaveMark, "laya.webgl.canvas.save.SaveMark");
        var t = SaveMark.prototype;
        return i.imps(t, {
            "laya.webgl.canvas.save.ISaveData": !0
        }), t.isSaveMark = function() {
            return !0;
        }, t.restore = function(t) {
            t._saveMark = this._preSaveMark, SaveMark.POOL[SaveMark.POOL._length++] = this;
        }, SaveMark.Create = function(t) {
            var e = SaveMark.POOL, i = e._length > 0 ? e[--e._length] : new SaveMark();
            return i._saveuse = 0, i._preSaveMark = t._saveMark, t._saveMark = i, i;
        }, SaveMark.POOL = h._createArray(), SaveMark;
    }(), z = function() {
        function Tween() {
            this.gid = 0, this.repeat = 1, this._count = 0;
        }
        r(Tween, "laya.utils.Tween");
        var t = Tween.prototype;
        return t.to = function(t, e, i, n, r, s, a) {
            return void 0 === s && (s = 0), void 0 === a && (a = !1), this._create(t, e, i, n, r, s, a, !0, !1, !0);
        }, t.from = function(t, e, i, n, r, s, a) {
            return void 0 === s && (s = 0), void 0 === a && (a = !1), this._create(t, e, i, n, r, s, a, !1, !1, !0);
        }, t._create = function(t, e, n, r, s, a, o, h, u, l) {
            if (!t) throw new Error("Tween:target is null");
            this._target = t, this._duration = n, this._ease = r || e.ease || Tween.easeNone, 
            this._complete = s || e.complete, this._delay = a, this._props = [], this._usedTimer = 0, 
            this._startTimer = It.now(), this._usedPool = u, this._delayParam = null, this.update = e.update;
            var c = t.$_GID || (t.$_GID = ie.getGID());
            return Tween.tweenMap[c] ? (o && Tween.clearTween(t), Tween.tweenMap[c].push(this)) : Tween.tweenMap[c] = [ this ], 
            l ? a <= 0 ? this.firstStart(t, e, h) : (this._delayParam = [ t, e, h ], i.timer.once(a, this, this.firstStart, this._delayParam)) : this._initProps(t, e, h), 
            this;
        }, t.firstStart = function(t, e, i) {
            this._delayParam = null, t.destroyed ? this.clear() : (this._initProps(t, e, i), 
            this._beginLoop());
        }, t._initProps = function(t, e, i) {
            for (var n in e) if ("number" == typeof t[n]) {
                var r = i ? t[n] : e[n], s = i ? e[n] : t[n];
                this._props.push([ n, r, s - r ]), i || (t[n] = r);
            }
        }, t._beginLoop = function() {
            i.timer.frameLoop(1, this, this._doEase);
        }, t._doEase = function() {
            this._updateEase(It.now());
        }, t._updateEase = function(t) {
            var e = this._target;
            if (e) {
                if (e.destroyed) return Tween.clearTween(e);
                var i = this._usedTimer = t - this._startTimer - this._delay;
                if (!(i < 0)) {
                    if (i >= this._duration) return this.complete();
                    for (var n = i > 0 ? this._ease(i, 0, 1, this._duration) : 0, r = this._props, s = 0, a = r.length; s < a; s++) {
                        var o = r[s];
                        e[o[0]] = o[1] + n * o[2];
                    }
                    this.update && this.update.run();
                }
            }
        }, t.complete = function() {
            if (this._target) {
                i.timer.runTimer(this, this.firstStart);
                for (var t = this._target, e = this._props, n = this._complete, r = 0, s = e.length; r < s; r++) {
                    var a = e[r];
                    t[a[0]] = a[1] + a[2];
                }
                this.update && this.update.run(), this._count++, 0 != this.repeat && this._count >= this.repeat ? (this.clear(), 
                n && n.run()) : this.restart();
            }
        }, t.pause = function() {
            i.timer.clear(this, this._beginLoop), i.timer.clear(this, this._doEase), i.timer.clear(this, this.firstStart);
            var t;
            (t = It.now() - this._startTimer - this._delay) < 0 && (this._usedTimer = t);
        }, t.setStartTime = function(t) {
            this._startTimer = t;
        }, t.clear = function() {
            this._target && (this._remove(), this._clear());
        }, t._clear = function() {
            this.pause(), i.timer.clear(this, this.firstStart), this._complete = null, this._target = null, 
            this._ease = null, this._props = null, this._delayParam = null, this._usedPool && (this.update = null, 
            N.recover("tween", this));
        }, t.recover = function() {
            this._usedPool = !0, this._clear();
        }, t._remove = function() {
            var t = Tween.tweenMap[this._target.$_GID];
            if (t) for (var e = 0, i = t.length; e < i; e++) if (t[e] === this) {
                t.splice(e, 1);
                break;
            }
        }, t.restart = function() {
            if (this.pause(), this._usedTimer = 0, this._startTimer = It.now(), this._delayParam) i.timer.once(this._delay, this, this.firstStart, this._delayParam); else {
                for (var t = this._props, e = 0, n = t.length; e < n; e++) {
                    var r = t[e];
                    this._target[r[0]] = r[1];
                }
                i.timer.once(this._delay, this, this._beginLoop);
            }
        }, t.resume = function() {
            this._usedTimer >= this._duration || (this._startTimer = It.now() - this._usedTimer - this._delay, 
            this._delayParam ? this._usedTimer < 0 ? i.timer.once(-this._usedTimer, this, this.firstStart, this._delayParam) : this.firstStart.apply(this, this._delayParam) : this._beginLoop());
        }, s(0, t, "progress", null, function(t) {
            var e = t * this._duration;
            this._startTimer = It.now() - this._delay - e;
        }), Tween.to = function(t, e, i, n, r, s, a, o) {
            return void 0 === s && (s = 0), void 0 === a && (a = !1), void 0 === o && (o = !0), 
            N.getItemByClass("tween", Tween)._create(t, e, i, n, r, s, a, !0, o, !0);
        }, Tween.from = function(t, e, i, n, r, s, a, o) {
            return void 0 === s && (s = 0), void 0 === a && (a = !1), void 0 === o && (o = !0), 
            N.getItemByClass("tween", Tween)._create(t, e, i, n, r, s, a, !1, o, !0);
        }, Tween.clearAll = function(t) {
            if (t && t.$_GID) {
                var e = Tween.tweenMap[t.$_GID];
                if (e) {
                    for (var i = 0, n = e.length; i < n; i++) e[i]._clear();
                    e.length = 0;
                }
            }
        }, Tween.clear = function(t) {
            t.clear();
        }, Tween.clearTween = function(t) {
            Tween.clearAll(t);
        }, Tween.easeNone = function(t, e, i, n) {
            return i * t / n + e;
        }, Tween.tweenMap = [], Tween;
    }(), K = function() {
        function DrawRectCmd() {}
        r(DrawRectCmd, "laya.display.cmd.DrawRectCmd");
        var t = DrawRectCmd.prototype;
        return t.recover = function() {
            this.fillColor = null, this.lineColor = null, N.recover("DrawRectCmd", this);
        }, t.run = function(t, e, i) {
            t.drawRect(this.x + e, this.y + i, this.width, this.height, this.fillColor, this.lineColor, this.lineWidth);
        }, s(0, t, "cmdID", function() {
            return "DrawRect";
        }), DrawRectCmd.create = function(t, e, i, n, r, s, a) {
            var o = N.getItemByClass("DrawRectCmd", DrawRectCmd);
            return o.x = t, o.y = e, o.width = i, o.height = n, o.fillColor = r, o.lineColor = s, 
            o.lineWidth = a, o;
        }, DrawRectCmd.ID = "DrawRect", DrawRectCmd;
    }(), j = function() {
        function EarcutNode(t, e, i) {
            this.i = null, this.x = null, this.y = null, this.prev = null, this.next = null, 
            this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = null, this.i = t, 
            this.x = e, this.y = i, this.prev = null, this.next = null, this.z = null, this.prevZ = null, 
            this.nextZ = null, this.steiner = !1;
        }
        return r(EarcutNode, "laya.webgl.shapes.EarcutNode"), EarcutNode;
    }(), Q = function() {
        function SubmitCMD() {
            this.fun = null, this._this = null, this.args = null, this._ref = 1, this._key = new O();
        }
        r(SubmitCMD, "laya.webgl.submit.SubmitCMD");
        var t = SubmitCMD.prototype;
        return i.imps(t, {
            "laya.webgl.submit.ISubmit": !0
        }), t.renderSubmit = function() {
            return this.fun.apply(this._this, this.args), 1;
        }, t.getRenderType = function() {
            return 0;
        }, t.reUse = function(t, e) {
            return this._ref++, e;
        }, t.releaseRender = function() {
            if (--this._ref < 1) {
                var t = SubmitCMD.POOL;
                t[t._length++] = this;
            }
        }, t.clone = function(t, e, i) {
            return null;
        }, SubmitCMD.create = function(t, e, i) {
            var n = SubmitCMD.POOL._length ? SubmitCMD.POOL[--SubmitCMD.POOL._length] : new SubmitCMD();
            return n.fun = e, n.args = t, n._this = i, n._ref = 1, n._key.clear(), n;
        }, SubmitCMD.POOL = [], SubmitCMD.__init$ = function() {
            SubmitCMD.POOL._length = 0;
        }, SubmitCMD;
    }(), $ = function() {
        function URL(t) {
            this._url = null, this._path = null, this._url = URL.formatURL(t), this._path = URL.getPath(t);
        }
        r(URL, "laya.net.URL");
        var t = URL.prototype;
        return s(0, t, "path", function() {
            return this._path;
        }), s(0, t, "url", function() {
            return this._url;
        }), s(1, URL, "basePath", function() {
            return URL._basePath;
        }, function(t) {
            URL._basePath = i._getUrlPath(), URL._basePath = URL.formatURL(t);
        }), URL.formatURL = function(t) {
            if (!t) return "null path";
            if (t.indexOf(":") > 0) return t;
            if (null != URL.customFormat && (t = URL.customFormat(t)), t.indexOf(":") > 0) return t;
            var e = t.charAt(0);
            if ("." === e) return URL._formatRelativePath(URL._basePath + t);
            if ("~" === e) return URL.rootPath + t.substring(1);
            if ("d" === e) {
                if (0 === t.indexOf("data:image")) return t;
            } else if ("/" === e) return t;
            return URL._basePath + t;
        }, URL._formatRelativePath = function(t) {
            for (var e = t.split("/"), i = 0, n = e.length; i < n; i++) ".." == e[i] && (e.splice(i - 1, 2), 
            i -= 2);
            return e.join("/");
        }, URL.getPath = function(t) {
            var e = t.lastIndexOf("/");
            return e > 0 ? t.substr(0, e + 1) : "";
        }, URL.getFileName = function(t) {
            var e = t.lastIndexOf("/");
            return e > 0 ? t.substr(e + 1) : t;
        }, URL.getAdptedFilePath = function(t) {
            if (!URL.exportSceneToJson || !t) return t;
            var e, i, n = 0;
            for (e = URL._adpteTypeList.length, n = 0; n < e; n++) i = URL._adpteTypeList[n], 
            t = t.replace(i[0], i[1]);
            return t;
        }, URL.version = {}, URL.exportSceneToJson = !1, URL._basePath = "", URL.rootPath = "", 
        URL.customFormat = function(t) {
            var e = URL.version[t];
            return !Rt.isConchApp && e && (t += "?v=" + e), t;
        }, n(URL, [ "_adpteTypeList", function() {
            return this._adpteTypeList = [ [ ".scene3d", ".json" ], [ ".scene", ".json" ], [ ".taa", ".json" ], [ ".prefab", ".json" ] ];
        } ]), URL;
    }(), q = function() {
        function CacheManger() {}
        return r(CacheManger, "laya.utils.CacheManger"), CacheManger.regCacheByFunction = function(t, e) {
            var i;
            CacheManger.unRegCacheByFunction(t, e), i = {
                tryDispose: t,
                getCacheList: e
            }, CacheManger._cacheList.push(i);
        }, CacheManger.unRegCacheByFunction = function(t, e) {
            var i, n = 0;
            for (i = CacheManger._cacheList.length, n = 0; n < i; n++) if (CacheManger._cacheList[n].tryDispose == t && CacheManger._cacheList[n].getCacheList == e) return void CacheManger._cacheList.splice(n, 1);
        }, CacheManger.forceDispose = function() {
            var t = 0, e = CacheManger._cacheList.length;
            for (t = 0; t < e; t++) CacheManger._cacheList[t].tryDispose(!0);
        }, CacheManger.beginCheck = function(t) {
            void 0 === t && (t = 15e3), i.systemTimer.loop(t, null, CacheManger._checkLoop);
        }, CacheManger.stopCheck = function() {
            i.systemTimer.clear(null, CacheManger._checkLoop);
        }, CacheManger._checkLoop = function() {
            var t = CacheManger._cacheList;
            if (!(t.length < 1)) {
                var e, i = It.now(), n = 0;
                for (e = n = t.length; n > 0 && (CacheManger._index++, CacheManger._index = CacheManger._index % e, 
                t[CacheManger._index].tryDispose(!1), !(It.now() - i > CacheManger.loopTimeLimit)); ) n--;
            }
        }, CacheManger.loopTimeLimit = 2, CacheManger._cacheList = [], CacheManger._index = 0, 
        CacheManger;
    }(), Z = function() {
        function SpriteStyle() {
            this.reset();
        }
        r(SpriteStyle, "laya.display.css.SpriteStyle");
        var t = SpriteStyle.prototype;
        return t.reset = function() {
            return this.scaleX = this.scaleY = 1, this.skewX = this.skewY = 0, this.pivotX = this.pivotY = this.rotation = 0, 
            this.alpha = 1, this.scrollRect && this.scrollRect.recover(), this.scrollRect = null, 
            this.viewport && this.viewport.recover(), this.viewport = null, this.hitArea = null, 
            this.dragging = null, this.blendMode = null, this;
        }, t.recover = function() {
            this !== SpriteStyle.EMPTY && N.recover("SpriteStyle", this.reset());
        }, SpriteStyle.create = function() {
            return N.getItemByClass("SpriteStyle", SpriteStyle);
        }, SpriteStyle.EMPTY = new SpriteStyle(), SpriteStyle;
    }(), J = (function() {
        function WebGLCacheAsNormalCanvas(t, e) {
            this.submitStartPos = 0, this.submitEndPos = 0, this.context = null, this.touches = [], 
            this.submits = [], this.sprite = null, this._mesh = null, this._pathMesh = null, 
            this._triangleMesh = null, this.meshlist = [], this._oldMesh = null, this._oldPathMesh = null, 
            this._oldTriMesh = null, this._oldMeshList = null, this.oldTx = 0, this.oldTy = 0, 
            this.cachedClipInfo = new st(), this.invMat = new st(), this.context = t, this.sprite = e, 
            t._globalClipMatrix.copyTo(this.cachedClipInfo);
        }
        r(WebGLCacheAsNormalCanvas, "laya.webgl.canvas.WebGLCacheAsNormalCanvas");
        var t = WebGLCacheAsNormalCanvas.prototype;
        t.startRec = function() {
            this.context._charSubmitCache._enbale && (this.context._charSubmitCache.enable(!1, this.context), 
            this.context._charSubmitCache.enable(!0, this.context)), this.context._incache = !0, 
            this.touches.length = 0, this.context.touches = this.touches, this.context._globalClipMatrix.copyTo(this.cachedClipInfo), 
            this.submits.length = 0, this.submitStartPos = this.context._submits._length;
            for (var t = 0, e = this.meshlist.length; t < e; t++) {
                var i = this.meshlist[t];
                i.canReuse ? i.releaseMesh() : i.destroy();
            }
            this.meshlist.length = 0, this._mesh = Fe.getAMesh(!1), this._pathMesh = Ae.getAMesh(!1), 
            this._triangleMesh = Oe.getAMesh(!1), this.meshlist.push(this._mesh), this.meshlist.push(this._pathMesh), 
            this.meshlist.push(this._triangleMesh), this.context._curSubmit = u.RENDERBASE, 
            this._oldMesh = this.context._mesh, this._oldPathMesh = this.context._pathMesh, 
            this._oldTriMesh = this.context._triangleMesh, this._oldMeshList = this.context.meshlist, 
            this.context._mesh = this._mesh, this.context._pathMesh = this._pathMesh, this.context._triangleMesh = this._triangleMesh, 
            this.context.meshlist = this.meshlist, this.oldTx = this.context._curMat.tx, this.oldTy = this.context._curMat.ty, 
            this.context._curMat.tx = 0, this.context._curMat.ty = 0, this.context._curMat.copyTo(this.invMat), 
            this.invMat.invert();
        }, t.endRec = function() {
            this.context._charSubmitCache._enbale && (this.context._charSubmitCache.enable(!1, this.context), 
            this.context._charSubmitCache.enable(!0, this.context));
            var t = this.context._submits;
            this.submitEndPos = t._length;
            for (var e = this.submitEndPos - this.submitStartPos, i = 0; i < e; i++) this.submits.push(t[this.submitStartPos + i]);
            t._length -= e, this.context._mesh = this._oldMesh, this.context._pathMesh = this._oldPathMesh, 
            this.context._triangleMesh = this._oldTriMesh, this.context.meshlist = this._oldMeshList, 
            this.context._curSubmit = u.RENDERBASE, this.context._curMat.tx = this.oldTx, this.context._curMat.ty = this.oldTy, 
            this.context.touches = null, this.context._incache = !1;
        }, t.isCacheValid = function() {
            var t = this.context._globalClipMatrix;
            return t.a == this.cachedClipInfo.a && t.b == this.cachedClipInfo.b && t.c == this.cachedClipInfo.c && t.d == this.cachedClipInfo.d && t.tx == this.cachedClipInfo.tx && t.ty == this.cachedClipInfo.ty;
        }, t.flushsubmit = function() {
            var t = u.RENDERBASE;
            this.submits.forEach(function(e) {
                e != u.RENDERBASE && (u.preRender = t, t = e, e.renderSubmit());
            });
        }, t.releaseMem = function() {}, n(WebGLCacheAsNormalCanvas, [ "matI", function() {
            return this.matI = new st();
        } ]);
    }(), function() {
        var t;
        function Timer(t) {
            this.scale = 1, this.currFrame = 0, this._delta = 0, this._map = [], this._handlers = [], 
            this._temp = [], this._count = 0, this.currTimer = It.now(), this._lastTimer = It.now(), 
            void 0 === t && (t = !0), t && i.systemTimer && i.systemTimer.frameLoop(1, this, this._update);
        }
        r(Timer, "laya.utils.Timer");
        var e = Timer.prototype;
        return e._update = function() {
            if (this.scale <= 0) this._lastTimer = It.now(); else {
                var t = this.currFrame = this.currFrame + this.scale, e = It.now();
                this._delta = (e - this._lastTimer) * this.scale;
                var i = this.currTimer = this.currTimer + this._delta;
                this._lastTimer = e;
                var n = this._handlers;
                this._count = 0;
                for (var r = 0, s = n.length; r < s; r++) {
                    var a = n[r];
                    if (null !== a.method) {
                        var o = a.userFrame ? t : i;
                        if (o >= a.exeTime) if (a.repeat) if (a.jumpFrame) for (;o >= a.exeTime; ) a.exeTime += a.delay, 
                        a.run(!1); else a.exeTime += a.delay, a.run(!1), o > a.exeTime && (a.exeTime += Math.ceil((o - a.exeTime) / a.delay) * a.delay); else a.run(!0);
                    } else this._count++;
                }
                (this._count > 30 || t % 200 == 0) && this._clearHandlers();
            }
        }, e._clearHandlers = function() {
            for (var t = this._handlers, e = 0, i = t.length; e < i; e++) {
                var n = t[e];
                null !== n.method ? this._temp.push(n) : this._recoverHandler(n);
            }
            this._handlers = this._temp, t.length = 0, this._temp = t;
        }, e._recoverHandler = function(t) {
            this._map[t.key] == t && (this._map[t.key] = null), t.clear(), Timer._pool.push(t);
        }, e._create = function(e, i, n, r, s, a, o) {
            if (!n) return s.apply(r, a), null;
            if (o) {
                var h = this._getHandler(r, s);
                if (h) return h.repeat = i, h.userFrame = e, h.delay = n, h.caller = r, h.method = s, 
                h.args = a, h.exeTime = n + (e ? this.currFrame : this.currTimer + It.now() - this._lastTimer), 
                h;
            }
            return (h = Timer._pool.length > 0 ? Timer._pool.pop() : new t()).repeat = i, h.userFrame = e, 
            h.delay = n, h.caller = r, h.method = s, h.args = a, h.exeTime = n + (e ? this.currFrame : this.currTimer + It.now() - this._lastTimer), 
            this._indexHandler(h), this._handlers.push(h), h;
        }, e._indexHandler = function(t) {
            var e = t.caller, i = t.method, n = e ? e.$_GID || (e.$_GID = ie.getGID()) : 0, r = i.$_TID || (i.$_TID = 1e5 * Timer._mid++);
            t.key = n + r, this._map[t.key] = t;
        }, e.once = function(t, e, i, n, r) {
            void 0 === r && (r = !0), this._create(!1, !1, t, e, i, n, r);
        }, e.loop = function(t, e, i, n, r, s) {
            void 0 === r && (r = !0), void 0 === s && (s = !1);
            var a = this._create(!1, !0, t, e, i, n, r);
            a && (a.jumpFrame = s);
        }, e.frameOnce = function(t, e, i, n, r) {
            void 0 === r && (r = !0), this._create(!0, !1, t, e, i, n, r);
        }, e.frameLoop = function(t, e, i, n, r) {
            void 0 === r && (r = !0), this._create(!0, !0, t, e, i, n, r);
        }, e.toString = function() {
            return " handlers:" + this._handlers.length + " pool:" + Timer._pool.length;
        }, e.clear = function(t, e) {
            var i = this._getHandler(t, e);
            i && (this._map[i.key] = null, i.key = 0, i.clear());
        }, e.clearAll = function(t) {
            if (t) for (var e = 0, i = this._handlers.length; e < i; e++) {
                var n = this._handlers[e];
                n.caller === t && (this._map[n.key] = null, n.key = 0, n.clear());
            }
        }, e._getHandler = function(t, e) {
            var i = t ? t.$_GID || (t.$_GID = ie.getGID()) : 0, n = e.$_TID || (e.$_TID = 1e5 * Timer._mid++);
            return this._map[i + n];
        }, e.callLater = function(t, e, i) {
            Qt.I.callLater(t, e, i);
        }, e.runCallLater = function(t, e) {
            Qt.I.runCallLater(t, e);
        }, e.runTimer = function(t, e) {
            var i = this._getHandler(t, e);
            i && null != i.method && (this._map[i.key] = null, i.run(!0));
        }, e.pause = function() {
            this.scale = 0;
        }, e.resume = function() {
            this.scale = 1;
        }, s(0, e, "delta", function() {
            return this._delta;
        }), Timer._pool = [], Timer._mid = 1, Timer.__init$ = function() {
            t = function() {
                function TimerHandler() {
                    this.key = 0, this.repeat = !1, this.delay = 0, this.userFrame = !1, this.exeTime = 0, 
                    this.caller = null, this.method = null, this.args = null, this.jumpFrame = !1;
                }
                r(TimerHandler, "");
                var t = TimerHandler.prototype;
                return t.clear = function() {
                    this.caller = null, this.method = null, this.args = null;
                }, t.run = function(t) {
                    var e = this.caller;
                    if (e && e.destroyed) return this.clear();
                    var i = this.method, n = this.args;
                    t && this.clear(), null != i && (n ? i.apply(e, n) : i.call(e));
                }, TimerHandler;
            }();
        }, Timer;
    }()), tt = function() {
        function CacheStyle() {
            this.reset();
        }
        r(CacheStyle, "laya.display.css.CacheStyle");
        var t = CacheStyle.prototype;
        return t.needBitmapCache = function() {
            return this.cacheForFilters || !!this.mask;
        }, t.needEnableCanvasRender = function() {
            return "none" != this.userSetCache || this.cacheForFilters || !!this.mask;
        }, t.releaseContext = function() {
            this.canvas && this.canvas.size && (N.recover("CacheCanvas", this.canvas), this.canvas.size(0, 0), 
            this.canvas.width = 0, this.canvas.height = 0), this.canvas = null;
        }, t.createContext = function() {
            if (!this.canvas) {
                this.canvas = N.getItem("CacheCanvas") || new si(!1);
                var t = this.canvas.context;
                t || (t = this.canvas.getContext("2d"));
            }
        }, t.releaseFilterCache = function() {
            var t = this.filterCache;
            t && (t.destroy(), t.recycle(), this.filterCache = null);
        }, t.recover = function() {
            this !== CacheStyle.EMPTY && N.recover("SpriteCache", this.reset());
        }, t.reset = function() {
            return this.releaseContext(), this.releaseFilterCache(), this.cacheAs = "none", 
            this.enableCanvasRender = !1, this.userSetCache = "none", this.cacheForFilters = !1, 
            this.staticCache = !1, this.reCache = !0, this.mask = null, this.maskParent = null, 
            this.filterCache = null, this.filters = null, this.hasGlowFilter = !1, this.cacheRect && this.cacheRect.recover(), 
            this.cacheRect = null, this;
        }, t._calculateCacheRect = function(t, e, i, n) {
            var r, s = t._cacheStyle;
            if (s.cacheRect || (s.cacheRect = mt.create()), "bitmap" === e ? ((r = t.getSelfBounds()).width = r.width + 32, 
            r.height = r.height + 32, r.x = r.x - t.pivotX, r.y = r.y - t.pivotY, r.x = r.x - 16, 
            r.y = r.y - 16, r.x = Math.floor(r.x + i) - i, r.y = Math.floor(r.y + n) - n, r.width = Math.floor(r.width), 
            r.height = Math.floor(r.height), s.cacheRect.copyFrom(r)) : s.cacheRect.setTo(-t._style.pivotX, -t._style.pivotY, 1, 1), 
            r = s.cacheRect, t._style.scrollRect) {
                var a = t._style.scrollRect;
                r.x -= a.x, r.y -= a.y;
            }
            return CacheStyle._scaleInfo.setTo(1, 1), CacheStyle._scaleInfo;
        }, CacheStyle.create = function() {
            return N.getItemByClass("SpriteCache", CacheStyle);
        }, CacheStyle.EMPTY = new CacheStyle(), CacheStyle.CANVAS_EXTEND_EDGE = 16, n(CacheStyle, [ "_scaleInfo", function() {
            return this._scaleInfo = new Xt();
        } ]), CacheStyle;
    }(), et = function() {
        function SaveTranslate() {
            this._mat = new st();
        }
        r(SaveTranslate, "laya.webgl.canvas.save.SaveTranslate");
        var t = SaveTranslate.prototype;
        return i.imps(t, {
            "laya.webgl.canvas.save.ISaveData": !0
        }), t.isSaveMark = function() {
            return !1;
        }, t.restore = function(t) {
            this._mat.copyTo(t._curMat), SaveTranslate.POOL[SaveTranslate.POOL._length++] = this;
        }, SaveTranslate.save = function(t) {
            var e = SaveTranslate.POOL, i = e._length > 0 ? e[--e._length] : new SaveTranslate();
            t._curMat.copyTo(i._mat);
            var n = t._save;
            n[n._length++] = i;
        }, SaveTranslate.POOL = h._createArray(), SaveTranslate;
    }(), it = function() {
        function DrawLineCmd() {}
        r(DrawLineCmd, "laya.display.cmd.DrawLineCmd");
        var t = DrawLineCmd.prototype;
        return t.recover = function() {
            N.recover("DrawLineCmd", this);
        }, t.run = function(t, e, i) {
            t._drawLine(e, i, this.fromX, this.fromY, this.toX, this.toY, this.lineColor, this.lineWidth, this.vid);
        }, s(0, t, "cmdID", function() {
            return "DrawLine";
        }), DrawLineCmd.create = function(t, e, i, n, r, s, a) {
            var o = N.getItemByClass("DrawLineCmd", DrawLineCmd);
            return o.fromX = t, o.fromY = e, o.toX = i, o.toY = n, o.lineColor = r, o.lineWidth = s, 
            o.vid = a, o;
        }, DrawLineCmd.ID = "DrawLine", DrawLineCmd;
    }(), nt = function() {
        function WebGLContext() {}
        r(WebGLContext, "laya.webgl.WebGLContext");
        var e = WebGLContext.prototype;
        return e.getContextAttributes = function() {
            return null;
        }, e.isContextLost = function() {}, e.getSupportedExtensions = function() {
            return null;
        }, e.getExtension = function(t) {
            return null;
        }, e.activeTexture = function(t) {}, e.attachShader = function(t, e) {}, e.bindAttribLocation = function(t, e, i) {}, 
        e.bindBuffer = function(t, e) {}, e.bindFramebuffer = function(t, e) {}, e.bindRenderbuffer = function(t, e) {}, 
        e.bindTexture = function(t, e) {}, e.useTexture = function(t) {}, e.blendColor = function(t, e, i, n) {}, 
        e.blendEquation = function(t) {}, e.blendEquationSeparate = function(t, e) {}, e.blendFunc = function(t, e) {}, 
        e.blendFuncSeparate = function(t, e, i, n) {}, e.bufferData = function(t, e, i) {}, 
        e.bufferSubData = function(t, e, i) {}, e.checkFramebufferStatus = function(t) {
            return null;
        }, e.clear = function(t) {}, e.clearColor = function(t, e, i, n) {}, e.clearDepth = function(t) {}, 
        e.clearStencil = function(t) {}, e.colorMask = function(t, e, i, n) {}, e.compileShader = function(t) {}, 
        e.copyTexImage2D = function(t, e, i, n, r, s, a, o) {}, e.copyTexSubImage2D = function(t, e, i, n, r, s, a, o) {}, 
        e.createBuffer = function() {}, e.createFramebuffer = function() {}, e.createProgram = function() {}, 
        e.createRenderbuffer = function() {}, e.createShader = function(t) {}, e.createTexture = function() {
            return null;
        }, e.cullFace = function(t) {}, e.deleteBuffer = function(t) {}, e.deleteFramebuffer = function(t) {}, 
        e.deleteProgram = function(t) {}, e.deleteRenderbuffer = function(t) {}, e.deleteShader = function(t) {}, 
        e.deleteTexture = function(t) {}, e.depthFunc = function(t) {}, e.depthMask = function(t) {}, 
        e.depthRange = function(t, e) {}, e.detachShader = function(t, e) {}, e.disable = function(t) {}, 
        e.disableVertexAttribArray = function(t) {}, e.drawArrays = function(t, e, i) {}, 
        e.drawElements = function(t, e, i, n) {}, e.enable = function(t) {}, e.enableVertexAttribArray = function(t) {}, 
        e.finish = function() {}, e.flush = function() {}, e.framebufferRenderbuffer = function(t, e, i, n) {}, 
        e.framebufferTexture2D = function(t, e, i, n, r) {}, e.frontFace = function(t) {
            return null;
        }, e.generateMipmap = function(t) {
            return null;
        }, e.getActiveAttrib = function(t, e) {
            return null;
        }, e.getActiveUniform = function(t, e) {
            return null;
        }, e.getAttribLocation = function(t, e) {
            return 0;
        }, e.getParameter = function(t) {
            return null;
        }, e.getBufferParameter = function(t, e) {
            return null;
        }, e.getError = function() {
            return null;
        }, e.getFramebufferAttachmentParameter = function(t, e, i) {}, e.getProgramParameter = function(t, e) {
            return 0;
        }, e.getProgramInfoLog = function(t) {
            return null;
        }, e.getRenderbufferParameter = function(t, e) {
            return null;
        }, e.getShaderPrecisionFormat = function(t) {
            return null;
        }, e.getShaderParameter = function(t, e) {}, e.getShaderInfoLog = function(t) {
            return null;
        }, e.getShaderSource = function(t) {
            return null;
        }, e.getTexParameter = function(t, e) {}, e.getUniform = function(t, e) {}, e.getUniformLocation = function(t, e) {
            return null;
        }, e.getVertexAttrib = function(t, e) {
            return null;
        }, e.getVertexAttribOffset = function(t, e) {
            return null;
        }, e.hint = function(t, e) {}, e.isBuffer = function(t) {}, e.isEnabled = function(t) {}, 
        e.isFramebuffer = function(t) {}, e.isProgram = function(t) {}, e.isRenderbuffer = function(t) {}, 
        e.isShader = function(t) {}, e.isTexture = function(t) {}, e.lineWidth = function(t) {}, 
        e.linkProgram = function(t) {}, e.pixelStorei = function(t, e) {}, e.polygonOffset = function(t, e) {}, 
        e.readPixels = function(t, e, i, n, r, s, a) {}, e.renderbufferStorage = function(t, e, i, n) {}, 
        e.sampleCoverage = function(t, e) {}, e.scissor = function(t, e, i, n) {}, e.shaderSource = function(t, e) {}, 
        e.stencilFunc = function(t, e, i) {}, e.stencilFuncSeparate = function(t, e, i, n) {}, 
        e.stencilMask = function(t) {}, e.stencilMaskSeparate = function(t, e) {}, e.stencilOp = function(t, e, i) {}, 
        e.stencilOpSeparate = function(t, e, i, n) {}, e.texImage2D = function(t) {}, e.texParameterf = function(t, e, i) {}, 
        e.texParameteri = function(t, e, i) {}, e.texSubImage2D = function(t) {}, e.uniform1f = function(t, e) {}, 
        e.uniform1fv = function(t, e) {}, e.uniform1i = function(t, e) {}, e.uniform1iv = function(t, e) {}, 
        e.uniform2f = function(t, e, i) {}, e.uniform2fv = function(t, e) {}, e.uniform2i = function(t, e, i) {}, 
        e.uniform2iv = function(t, e) {}, e.uniform3f = function(t, e, i, n) {}, e.uniform3fv = function(t, e) {}, 
        e.uniform3i = function(t, e, i, n) {}, e.uniform3iv = function(t, e) {}, e.uniform4f = function(t, e, i, n, r) {}, 
        e.uniform4fv = function(t, e) {}, e.uniform4i = function(t, e, i, n, r) {}, e.uniform4iv = function(t, e) {}, 
        e.uniformMatrix2fv = function(t, e, i) {}, e.uniformMatrix3fv = function(t, e, i) {}, 
        e.uniformMatrix4fv = function(t, e, i) {}, e.useProgram = function(t) {}, e.validateProgram = function(t) {}, 
        e.vertexAttrib1f = function(t, e) {}, e.vertexAttrib1fv = function(t, e) {}, e.vertexAttrib2f = function(t, e, i) {}, 
        e.vertexAttrib2fv = function(t, e) {}, e.vertexAttrib3f = function(t, e, i, n) {}, 
        e.vertexAttrib3fv = function(t, e) {}, e.vertexAttrib4f = function(t, e, i, n, r) {}, 
        e.vertexAttrib4fv = function(t, e) {}, e.vertexAttribPointer = function(t, e, i, n, r, s) {}, 
        e.viewport = function(t, e, i, n) {}, e.configureBackBuffer = function(t, e, i, n, r) {
            void 0 === n && (n = !0), void 0 === r && (r = !1);
        }, e.compressedTexImage2D = function(t) {}, e.createVertexArray = function() {
            throw "not implemented";
        }, e.bindVertexArray = function(t) {
            throw "not implemented";
        }, e.deleteVertexArray = function(t) {
            throw "not implemented";
        }, e.isVertexArray = function(t) {
            throw "not implemented";
        }, WebGLContext._forceSupportVAOPlatform = function() {
            return It.onMiniGame && It.onIOS || It.onBDMiniGame || It.onQGMiniGame;
        }, WebGLContext.__init__ = function(e) {
            if (laya.webgl.WebGLContext._checkExtensions(e), !Ct._isWebGL2 && !Rt.isConchApp) {
                t._setupVertexArrayObject && (WebGLContext._forceSupportVAOPlatform() ? t._forceSetupVertexArrayObject(e) : t._setupVertexArrayObject(e));
                var i = (e.rawgl || e).getExtension("OES_vertex_array_object");
                if (i) {
                    var n = e;
                    n.createVertexArray = function() {
                        return i.createVertexArrayOES();
                    }, n.bindVertexArray = function(t) {
                        i.bindVertexArrayOES(t);
                    }, n.deleteVertexArray = function(t) {
                        i.deleteVertexArrayOES(t);
                    }, n.isVertexArray = function(t) {
                        i.isVertexArrayOES(t);
                    };
                }
            }
        }, WebGLContext._getExtension = function(t, e) {
            var i = WebGLContext._extentionVendorPrefixes;
            for (var n in i) {
                var r = t.getExtension(i[n] + e);
                if (r) return r;
            }
            return null;
        }, WebGLContext._checkExtensions = function(t) {
            WebGLContext._extTextureFilterAnisotropic = WebGLContext._getExtension(t, "EXT_texture_filter_anisotropic"), 
            WebGLContext._compressedTextureS3tc = WebGLContext._getExtension(t, "WEBGL_compressed_texture_s3tc"), 
            WebGLContext._compressedTexturePvrtc = WebGLContext._getExtension(t, "WEBGL_compressed_texture_pvrtc"), 
            WebGLContext._compressedTextureEtc1 = WebGLContext._getExtension(t, "WEBGL_compressed_texture_etc1"), 
            WebGLContext._forceSupportVAOPlatform() || (WebGLContext._angleInstancedArrays = WebGLContext._getExtension(t, "ANGLE_instanced_arrays"));
        }, WebGLContext.__init_native = function() {
            if (Rt.supportWebGLPlusRendering) {
                var t = WebGLContext;
                t.activeTexture = t.activeTextureForNative, t.bindTexture = t.bindTextureForNative;
            }
        }, WebGLContext.useProgram = function(t, e) {
            return WebGLContext._useProgram !== e && (t.useProgram(e), WebGLContext._useProgram = e, 
            !0);
        }, WebGLContext.setDepthTest = function(t, e) {
            e !== WebGLContext._depthTest && (WebGLContext._depthTest = e, e ? t.enable(2929) : t.disable(2929));
        }, WebGLContext.setDepthMask = function(t, e) {
            e !== WebGLContext._depthMask && (WebGLContext._depthMask = e, t.depthMask(e));
        }, WebGLContext.setDepthFunc = function(t, e) {
            e !== WebGLContext._depthFunc && (WebGLContext._depthFunc = e, t.depthFunc(e));
        }, WebGLContext.setBlend = function(t, e) {
            e !== WebGLContext._blend && (WebGLContext._blend = e, e ? t.enable(3042) : t.disable(3042));
        }, WebGLContext.setBlendFunc = function(t, e, i) {
            (e !== WebGLContext._sFactor || i !== WebGLContext._dFactor) && (WebGLContext._sFactor = WebGLContext._srcAlpha = e, 
            WebGLContext._dFactor = WebGLContext._dstAlpha = i, t.blendFunc(e, i));
        }, WebGLContext.setBlendFuncSeperate = function(t, e, i, n, r) {
            e === WebGLContext._sFactor && i === WebGLContext._dFactor && n === WebGLContext._srcAlpha && r === WebGLContext._dstAlpha || (WebGLContext._sFactor = e, 
            WebGLContext._dFactor = i, WebGLContext._srcAlpha = n, WebGLContext._dstAlpha = r, 
            t.blendFuncSeparate(e, i, n, r));
        }, WebGLContext.setCullFace = function(t, e) {
            e !== WebGLContext._cullFace && (WebGLContext._cullFace = e, e ? t.enable(2884) : t.disable(2884));
        }, WebGLContext.setFrontFace = function(t, e) {
            e !== WebGLContext._frontFace && (WebGLContext._frontFace = e, t.frontFace(e));
        }, WebGLContext.activeTexture = function(t, e) {
            WebGLContext._activedTextureID !== e && (t.activeTexture(e), WebGLContext._activedTextureID = e);
        }, WebGLContext.bindTexture = function(t, e, i) {
            WebGLContext._activeTextures[WebGLContext._activedTextureID - 33984] !== i && (t.bindTexture(e, i), 
            WebGLContext._activeTextures[WebGLContext._activedTextureID - 33984] = i);
        }, WebGLContext.useProgramForNative = function(t, e) {
            return t.useProgram(e), !0;
        }, WebGLContext.setDepthTestForNative = function(t, e) {
            e ? t.enable(2929) : t.disable(2929);
        }, WebGLContext.setDepthMaskForNative = function(t, e) {
            t.depthMask(e);
        }, WebGLContext.setDepthFuncForNative = function(t, e) {
            t.depthFunc(e);
        }, WebGLContext.setBlendForNative = function(t, e) {
            e ? t.enable(3042) : t.disable(3042);
        }, WebGLContext.setBlendFuncForNative = function(t, e, i) {
            t.blendFunc(e, i);
        }, WebGLContext.setCullFaceForNative = function(t, e) {
            e ? t.enable(2884) : t.disable(2884);
        }, WebGLContext.setFrontFaceForNative = function(t, e) {
            t.frontFace(e);
        }, WebGLContext.activeTextureForNative = function(t, e) {
            t.activeTexture(e);
        }, WebGLContext.bindTextureForNative = function(t, e, i) {
            t.bindTexture(e, i);
        }, WebGLContext.bindVertexArrayForNative = function(t, e) {
            t.bindVertexArray(e);
        }, WebGLContext.DEPTH_BUFFER_BIT = 256, WebGLContext.STENCIL_BUFFER_BIT = 1024, 
        WebGLContext.COLOR_BUFFER_BIT = 16384, WebGLContext.POINTS = 0, WebGLContext.LINES = 1, 
        WebGLContext.LINE_LOOP = 2, WebGLContext.LINE_STRIP = 3, WebGLContext.TRIANGLES = 4, 
        WebGLContext.TRIANGLE_STRIP = 5, WebGLContext.TRIANGLE_FAN = 6, WebGLContext.ZERO = 0, 
        WebGLContext.ONE = 1, WebGLContext.SRC_COLOR = 768, WebGLContext.ONE_MINUS_SRC_COLOR = 769, 
        WebGLContext.SRC_ALPHA = 770, WebGLContext.ONE_MINUS_SRC_ALPHA = 771, WebGLContext.DST_ALPHA = 772, 
        WebGLContext.ONE_MINUS_DST_ALPHA = 773, WebGLContext.DST_COLOR = 774, WebGLContext.ONE_MINUS_DST_COLOR = 775, 
        WebGLContext.SRC_ALPHA_SATURATE = 776, WebGLContext.FUNC_ADD = 32774, WebGLContext.BLEND_EQUATION = 32777, 
        WebGLContext.BLEND_EQUATION_RGB = 32777, WebGLContext.BLEND_EQUATION_ALPHA = 34877, 
        WebGLContext.FUNC_SUBTRACT = 32778, WebGLContext.FUNC_REVERSE_SUBTRACT = 32779, 
        WebGLContext.BLEND_DST_RGB = 32968, WebGLContext.BLEND_SRC_RGB = 32969, WebGLContext.BLEND_DST_ALPHA = 32970, 
        WebGLContext.BLEND_SRC_ALPHA = 32971, WebGLContext.CONSTANT_COLOR = 32769, WebGLContext.ONE_MINUS_CONSTANT_COLOR = 32770, 
        WebGLContext.CONSTANT_ALPHA = 32771, WebGLContext.ONE_MINUS_CONSTANT_ALPHA = 32772, 
        WebGLContext.BLEND_COLOR = 32773, WebGLContext.ARRAY_BUFFER = 34962, WebGLContext.ELEMENT_ARRAY_BUFFER = 34963, 
        WebGLContext.ARRAY_BUFFER_BINDING = 34964, WebGLContext.ELEMENT_ARRAY_BUFFER_BINDING = 34965, 
        WebGLContext.STREAM_DRAW = 35040, WebGLContext.STATIC_DRAW = 35044, WebGLContext.DYNAMIC_DRAW = 35048, 
        WebGLContext.BUFFER_SIZE = 34660, WebGLContext.BUFFER_USAGE = 34661, WebGLContext.CURRENT_VERTEX_ATTRIB = 34342, 
        WebGLContext.FRONT = 1028, WebGLContext.BACK = 1029, WebGLContext.CULL_FACE = 2884, 
        WebGLContext.FRONT_AND_BACK = 1032, WebGLContext.BLEND = 3042, WebGLContext.DITHER = 3024, 
        WebGLContext.STENCIL_TEST = 2960, WebGLContext.DEPTH_TEST = 2929, WebGLContext.SCISSOR_TEST = 3089, 
        WebGLContext.POLYGON_OFFSET_FILL = 32823, WebGLContext.SAMPLE_ALPHA_TO_COVERAGE = 32926, 
        WebGLContext.SAMPLE_COVERAGE = 32928, WebGLContext.NO_ERROR = 0, WebGLContext.INVALID_ENUM = 1280, 
        WebGLContext.INVALID_VALUE = 1281, WebGLContext.INVALID_OPERATION = 1282, WebGLContext.OUT_OF_MEMORY = 1285, 
        WebGLContext.CW = 2304, WebGLContext.CCW = 2305, WebGLContext.LINE_WIDTH = 2849, 
        WebGLContext.ALIASED_POINT_SIZE_RANGE = 33901, WebGLContext.ALIASED_LINE_WIDTH_RANGE = 33902, 
        WebGLContext.CULL_FACE_MODE = 2885, WebGLContext.FRONT_FACE = 2886, WebGLContext.DEPTH_RANGE = 2928, 
        WebGLContext.DEPTH_WRITEMASK = 2930, WebGLContext.DEPTH_CLEAR_VALUE = 2931, WebGLContext.DEPTH_FUNC = 2932, 
        WebGLContext.STENCIL_CLEAR_VALUE = 2961, WebGLContext.STENCIL_FUNC = 2962, WebGLContext.STENCIL_FAIL = 2964, 
        WebGLContext.STENCIL_PASS_DEPTH_FAIL = 2965, WebGLContext.STENCIL_PASS_DEPTH_PASS = 2966, 
        WebGLContext.STENCIL_REF = 2967, WebGLContext.STENCIL_VALUE_MASK = 2963, WebGLContext.STENCIL_WRITEMASK = 2968, 
        WebGLContext.STENCIL_BACK_FUNC = 34816, WebGLContext.STENCIL_BACK_FAIL = 34817, 
        WebGLContext.STENCIL_BACK_PASS_DEPTH_FAIL = 34818, WebGLContext.STENCIL_BACK_PASS_DEPTH_PASS = 34819, 
        WebGLContext.STENCIL_BACK_REF = 36003, WebGLContext.STENCIL_BACK_VALUE_MASK = 36004, 
        WebGLContext.STENCIL_BACK_WRITEMASK = 36005, WebGLContext.VIEWPORT = 2978, WebGLContext.SCISSOR_BOX = 3088, 
        WebGLContext.COLOR_CLEAR_VALUE = 3106, WebGLContext.COLOR_WRITEMASK = 3107, WebGLContext.UNPACK_ALIGNMENT = 3317, 
        WebGLContext.PACK_ALIGNMENT = 3333, WebGLContext.MAX_TEXTURE_SIZE = 3379, WebGLContext.MAX_VIEWPORT_DIMS = 3386, 
        WebGLContext.SUBPIXEL_BITS = 3408, WebGLContext.RED_BITS = 3410, WebGLContext.GREEN_BITS = 3411, 
        WebGLContext.BLUE_BITS = 3412, WebGLContext.ALPHA_BITS = 3413, WebGLContext.DEPTH_BITS = 3414, 
        WebGLContext.STENCIL_BITS = 3415, WebGLContext.POLYGON_OFFSET_UNITS = 10752, WebGLContext.POLYGON_OFFSET_FACTOR = 32824, 
        WebGLContext.TEXTURE_BINDING_2D = 32873, WebGLContext.SAMPLE_BUFFERS = 32936, WebGLContext.SAMPLES = 32937, 
        WebGLContext.SAMPLE_COVERAGE_VALUE = 32938, WebGLContext.SAMPLE_COVERAGE_INVERT = 32939, 
        WebGLContext.NUM_COMPRESSED_TEXTURE_FORMATS = 34466, WebGLContext.COMPRESSED_TEXTURE_FORMATS = 34467, 
        WebGLContext.DONT_CARE = 4352, WebGLContext.FASTEST = 4353, WebGLContext.NICEST = 4354, 
        WebGLContext.GENERATE_MIPMAP_HINT = 33170, WebGLContext.BYTE = 5120, WebGLContext.UNSIGNED_BYTE = 5121, 
        WebGLContext.SHORT = 5122, WebGLContext.UNSIGNED_SHORT = 5123, WebGLContext.INT = 5124, 
        WebGLContext.UNSIGNED_INT = 5125, WebGLContext.FLOAT = 5126, WebGLContext.DEPTH_COMPONENT = 6402, 
        WebGLContext.ALPHA = 6406, WebGLContext.RGB = 6407, WebGLContext.RGBA = 6408, WebGLContext.LUMINANCE = 6409, 
        WebGLContext.LUMINANCE_ALPHA = 6410, WebGLContext.UNSIGNED_SHORT_4_4_4_4 = 32819, 
        WebGLContext.UNSIGNED_SHORT_5_5_5_1 = 32820, WebGLContext.UNSIGNED_SHORT_5_6_5 = 33635, 
        WebGLContext.FRAGMENT_SHADER = 35632, WebGLContext.VERTEX_SHADER = 35633, WebGLContext.MAX_VERTEX_ATTRIBS = 34921, 
        WebGLContext.MAX_VERTEX_UNIFORM_VECTORS = 36347, WebGLContext.MAX_VARYING_VECTORS = 36348, 
        WebGLContext.MAX_COMBINED_TEXTURE_IMAGE_UNITS = 35661, WebGLContext.MAX_VERTEX_TEXTURE_IMAGE_UNITS = 35660, 
        WebGLContext.MAX_TEXTURE_IMAGE_UNITS = 34930, WebGLContext.MAX_FRAGMENT_UNIFORM_VECTORS = 36349, 
        WebGLContext.SHADER_TYPE = 35663, WebGLContext.DELETE_STATUS = 35712, WebGLContext.LINK_STATUS = 35714, 
        WebGLContext.VALIDATE_STATUS = 35715, WebGLContext.ATTACHED_SHADERS = 35717, WebGLContext.ACTIVE_UNIFORMS = 35718, 
        WebGLContext.ACTIVE_ATTRIBUTES = 35721, WebGLContext.SHADING_LANGUAGE_VERSION = 35724, 
        WebGLContext.CURRENT_PROGRAM = 35725, WebGLContext.NEVER = 512, WebGLContext.LESS = 513, 
        WebGLContext.EQUAL = 514, WebGLContext.LEQUAL = 515, WebGLContext.GREATER = 516, 
        WebGLContext.NOTEQUAL = 517, WebGLContext.GEQUAL = 518, WebGLContext.ALWAYS = 519, 
        WebGLContext.KEEP = 7680, WebGLContext.REPLACE = 7681, WebGLContext.INCR = 7682, 
        WebGLContext.DECR = 7683, WebGLContext.INVERT = 5386, WebGLContext.INCR_WRAP = 34055, 
        WebGLContext.DECR_WRAP = 34056, WebGLContext.VENDOR = 7936, WebGLContext.RENDERER = 7937, 
        WebGLContext.VERSION = 7938, WebGLContext.NEAREST = 9728, WebGLContext.LINEAR = 9729, 
        WebGLContext.NEAREST_MIPMAP_NEAREST = 9984, WebGLContext.LINEAR_MIPMAP_NEAREST = 9985, 
        WebGLContext.NEAREST_MIPMAP_LINEAR = 9986, WebGLContext.LINEAR_MIPMAP_LINEAR = 9987, 
        WebGLContext.TEXTURE_MAG_FILTER = 10240, WebGLContext.TEXTURE_MIN_FILTER = 10241, 
        WebGLContext.TEXTURE_WRAP_S = 10242, WebGLContext.TEXTURE_WRAP_T = 10243, WebGLContext.TEXTURE_2D = 3553, 
        WebGLContext.TEXTURE_3D = 32879, WebGLContext.TEXTURE = 5890, WebGLContext.TEXTURE_CUBE_MAP = 34067, 
        WebGLContext.TEXTURE_BINDING_CUBE_MAP = 34068, WebGLContext.TEXTURE_CUBE_MAP_POSITIVE_X = 34069, 
        WebGLContext.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070, WebGLContext.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071, 
        WebGLContext.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072, WebGLContext.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073, 
        WebGLContext.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074, WebGLContext.MAX_CUBE_MAP_TEXTURE_SIZE = 34076, 
        WebGLContext.TEXTURE0 = 33984, WebGLContext.TEXTURE1 = 33985, WebGLContext.TEXTURE2 = 33986, 
        WebGLContext.TEXTURE3 = 33987, WebGLContext.TEXTURE4 = 33988, WebGLContext.TEXTURE5 = 33989, 
        WebGLContext.TEXTURE6 = 33990, WebGLContext.TEXTURE7 = 33991, WebGLContext.TEXTURE8 = 33992, 
        WebGLContext.TEXTURE9 = 33993, WebGLContext.TEXTURE10 = 33994, WebGLContext.TEXTURE11 = 33995, 
        WebGLContext.TEXTURE12 = 33996, WebGLContext.TEXTURE13 = 33997, WebGLContext.TEXTURE14 = 33998, 
        WebGLContext.TEXTURE15 = 33999, WebGLContext.TEXTURE16 = 34e3, WebGLContext.TEXTURE17 = 34001, 
        WebGLContext.TEXTURE18 = 34002, WebGLContext.TEXTURE19 = 34003, WebGLContext.TEXTURE20 = 34004, 
        WebGLContext.TEXTURE21 = 34005, WebGLContext.TEXTURE22 = 34006, WebGLContext.TEXTURE23 = 34007, 
        WebGLContext.TEXTURE24 = 34008, WebGLContext.TEXTURE25 = 34009, WebGLContext.TEXTURE26 = 34010, 
        WebGLContext.TEXTURE27 = 34011, WebGLContext.TEXTURE28 = 34012, WebGLContext.TEXTURE29 = 34013, 
        WebGLContext.TEXTURE30 = 34014, WebGLContext.TEXTURE31 = 34015, WebGLContext.ACTIVE_TEXTURE = 34016, 
        WebGLContext.REPEAT = 10497, WebGLContext.CLAMP_TO_EDGE = 33071, WebGLContext.MIRRORED_REPEAT = 33648, 
        WebGLContext.FLOAT_VEC2 = 35664, WebGLContext.FLOAT_VEC3 = 35665, WebGLContext.FLOAT_VEC4 = 35666, 
        WebGLContext.INT_VEC2 = 35667, WebGLContext.INT_VEC3 = 35668, WebGLContext.INT_VEC4 = 35669, 
        WebGLContext.BOOL = 35670, WebGLContext.BOOL_VEC2 = 35671, WebGLContext.BOOL_VEC3 = 35672, 
        WebGLContext.BOOL_VEC4 = 35673, WebGLContext.FLOAT_MAT2 = 35674, WebGLContext.FLOAT_MAT3 = 35675, 
        WebGLContext.FLOAT_MAT4 = 35676, WebGLContext.SAMPLER_2D = 35678, WebGLContext.SAMPLER_CUBE = 35680, 
        WebGLContext.VERTEX_ATTRIB_ARRAY_ENABLED = 34338, WebGLContext.VERTEX_ATTRIB_ARRAY_SIZE = 34339, 
        WebGLContext.VERTEX_ATTRIB_ARRAY_STRIDE = 34340, WebGLContext.VERTEX_ATTRIB_ARRAY_TYPE = 34341, 
        WebGLContext.VERTEX_ATTRIB_ARRAY_NORMALIZED = 34922, WebGLContext.VERTEX_ATTRIB_ARRAY_POINTER = 34373, 
        WebGLContext.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 34975, WebGLContext.COMPILE_STATUS = 35713, 
        WebGLContext.LOW_FLOAT = 36336, WebGLContext.MEDIUM_FLOAT = 36337, WebGLContext.HIGH_FLOAT = 36338, 
        WebGLContext.LOW_INT = 36339, WebGLContext.MEDIUM_INT = 36340, WebGLContext.HIGH_INT = 36341, 
        WebGLContext.FRAMEBUFFER = 36160, WebGLContext.RENDERBUFFER = 36161, WebGLContext.RGBA4 = 32854, 
        WebGLContext.RGB5_A1 = 32855, WebGLContext.RGB565 = 36194, WebGLContext.DEPTH_COMPONENT16 = 33189, 
        WebGLContext.STENCIL_INDEX = 6401, WebGLContext.STENCIL_INDEX8 = 36168, WebGLContext.DEPTH_STENCIL = 34041, 
        WebGLContext.RENDERBUFFER_WIDTH = 36162, WebGLContext.RENDERBUFFER_HEIGHT = 36163, 
        WebGLContext.RENDERBUFFER_INTERNAL_FORMAT = 36164, WebGLContext.RENDERBUFFER_RED_SIZE = 36176, 
        WebGLContext.RENDERBUFFER_GREEN_SIZE = 36177, WebGLContext.RENDERBUFFER_BLUE_SIZE = 36178, 
        WebGLContext.RENDERBUFFER_ALPHA_SIZE = 36179, WebGLContext.RENDERBUFFER_DEPTH_SIZE = 36180, 
        WebGLContext.RENDERBUFFER_STENCIL_SIZE = 36181, WebGLContext.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 36048, 
        WebGLContext.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 36049, WebGLContext.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 36050, 
        WebGLContext.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 36051, WebGLContext.COLOR_ATTACHMENT0 = 36064, 
        WebGLContext.DEPTH_ATTACHMENT = 36096, WebGLContext.STENCIL_ATTACHMENT = 36128, 
        WebGLContext.DEPTH_STENCIL_ATTACHMENT = 33306, WebGLContext.NONE = 0, WebGLContext.FRAMEBUFFER_COMPLETE = 36053, 
        WebGLContext.FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 36054, WebGLContext.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 36055, 
        WebGLContext.FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 36057, WebGLContext.FRAMEBUFFER_UNSUPPORTED = 36061, 
        WebGLContext.FRAMEBUFFER_BINDING = 36006, WebGLContext.RENDERBUFFER_BINDING = 36007, 
        WebGLContext.MAX_RENDERBUFFER_SIZE = 34024, WebGLContext.INVALID_FRAMEBUFFER_OPERATION = 1286, 
        WebGLContext.UNPACK_FLIP_Y_WEBGL = 37440, WebGLContext.UNPACK_PREMULTIPLY_ALPHA_WEBGL = 37441, 
        WebGLContext.CONTEXT_LOST_WEBGL = 37442, WebGLContext.UNPACK_COLORSPACE_CONVERSION_WEBGL = 37443, 
        WebGLContext.BROWSER_DEFAULT_WEBGL = 37444, WebGLContext._extTextureFilterAnisotropic = null, 
        WebGLContext._compressedTextureS3tc = null, WebGLContext._compressedTexturePvrtc = null, 
        WebGLContext._compressedTextureEtc1 = null, WebGLContext._angleInstancedArrays = null, 
        WebGLContext._glTextureIDs = [ 33984, 33985, 33986, 33987, 33988, 33989, 33990, 33991 ], 
        WebGLContext._useProgram = null, WebGLContext._depthTest = !0, WebGLContext._depthMask = !0, 
        WebGLContext._blend = !1, WebGLContext._cullFace = !1, WebGLContext._activedTextureID = 33984, 
        n(WebGLContext, [ "_extentionVendorPrefixes", function() {
            return this._extentionVendorPrefixes = [ "", "WEBKIT_", "MOZ_" ];
        }, "_activeTextures", function() {
            return this._activeTextures = new Array(8);
        }, "_depthFunc", function() {
            return this._depthFunc = 513;
        }, "_sFactor", function() {
            return this._sFactor = 1;
        }, "_dFactor", function() {
            return this._dFactor = 0;
        }, "_srcAlpha", function() {
            return this._srcAlpha = 1;
        }, "_dstAlpha", function() {
            return this._dstAlpha = 0;
        }, "_frontFace", function() {
            return this._frontFace = 2305;
        } ]), WebGLContext;
    }(), rt = (function() {
        function ResourceVersion() {}
        r(ResourceVersion, "laya.net.ResourceVersion"), ResourceVersion.enable = function(t, e, n) {
            void 0 === n && (n = 2), laya.net.ResourceVersion.type = n, i.loader.load(t, g.create(null, ResourceVersion.onManifestLoaded, [ e ]), null, "json"), 
            $.customFormat = ResourceVersion.addVersionPrefix;
        }, ResourceVersion.onManifestLoaded = function(t, e) {
            ResourceVersion.manifest = e, t.run(), e || console.warn("资源版本清单文件不存在，不使用资源版本管理。忽略ERR_FILE_NOT_FOUND错误。");
        }, ResourceVersion.addVersionPrefix = function(t) {
            return t = $.getAdptedFilePath(t), ResourceVersion.manifest && ResourceVersion.manifest[t] ? 2 == ResourceVersion.type ? ResourceVersion.manifest[t] : ResourceVersion.manifest[t] + "/" + t : t;
        }, ResourceVersion.FOLDER_VERSION = 1, ResourceVersion.FILENAME_VERSION = 2, ResourceVersion.manifest = null, 
        ResourceVersion.type = 1;
    }(), function() {
        function FillWordsCmd() {}
        r(FillWordsCmd, "laya.display.cmd.FillWordsCmd");
        var t = FillWordsCmd.prototype;
        return t.recover = function() {
            this.words = null, N.recover("FillWordsCmd", this);
        }, t.run = function(t, e, i) {
            t.fillWords(this.words, this.x + e, this.y + i, this.font, this.color);
        }, s(0, t, "cmdID", function() {
            return "FillWords";
        }), FillWordsCmd.create = function(t, e, i, n, r) {
            var s = N.getItemByClass("FillWordsCmd", FillWordsCmd);
            return s.words = t, s.x = e, s.y = i, s.font = n, s.color = r, s;
        }, FillWordsCmd.ID = "FillWords", FillWordsCmd;
    }()), st = function() {
        function Matrix(t, e, i, n, r, s, a) {
            if (this._bTransform = !1, void 0 === t && (t = 1), void 0 === e && (e = 0), void 0 === i && (i = 0), 
            void 0 === n && (n = 1), void 0 === r && (r = 0), void 0 === s && (s = 0), void 0 === a && (a = 0), 
            null != Matrix._createFun) return Matrix._createFun(t, e, i, n, r, s, a);
            this.a = t, this.b = e, this.c = i, this.d = n, this.tx = r, this.ty = s, this._checkTransform();
        }
        r(Matrix, "laya.maths.Matrix");
        var t = Matrix.prototype;
        return t.identity = function() {
            return this.a = this.d = 1, this.b = this.tx = this.ty = this.c = 0, this._bTransform = !1, 
            this;
        }, t._checkTransform = function() {
            return this._bTransform = 1 !== this.a || 0 !== this.b || 0 !== this.c || 1 !== this.d;
        }, t.setTranslate = function(t, e) {
            return this.tx = t, this.ty = e, this;
        }, t.translate = function(t, e) {
            return this.tx += t, this.ty += e, this;
        }, t.scale = function(t, e) {
            return this.a *= t, this.d *= e, this.c *= t, this.b *= e, this.tx *= t, this.ty *= e, 
            this._bTransform = !0, this;
        }, t.rotate = function(t) {
            var e = Math.cos(t), i = Math.sin(t), n = this.a, r = this.c, s = this.tx;
            return this.a = n * e - this.b * i, this.b = n * i + this.b * e, this.c = r * e - this.d * i, 
            this.d = r * i + this.d * e, this.tx = s * e - this.ty * i, this.ty = s * i + this.ty * e, 
            this._bTransform = !0, this;
        }, t.skew = function(t, e) {
            var i = Math.tan(t), n = Math.tan(e), r = this.a, s = this.b;
            return this.a += n * this.c, this.b += n * this.d, this.c += i * r, this.d += i * s, 
            this;
        }, t.invertTransformPoint = function(t) {
            var e = this.a, i = this.b, n = this.c, r = this.d, s = this.tx, a = e * r - i * n, o = r / a, h = -i / a, u = -n / a, l = e / a, c = (n * this.ty - r * s) / a, _ = -(e * this.ty - i * s) / a;
            return t.setTo(o * t.x + u * t.y + c, h * t.x + l * t.y + _);
        }, t.transformPoint = function(t) {
            return t.setTo(this.a * t.x + this.c * t.y + this.tx, this.b * t.x + this.d * t.y + this.ty);
        }, t.transformPointN = function(t) {
            return t.setTo(this.a * t.x + this.c * t.y, this.b * t.x + this.d * t.y);
        }, t.getScaleX = function() {
            return 0 === this.b ? this.a : Math.sqrt(this.a * this.a + this.b * this.b);
        }, t.getScaleY = function() {
            return 0 === this.c ? this.d : Math.sqrt(this.c * this.c + this.d * this.d);
        }, t.invert = function() {
            var t = this.a, e = this.b, i = this.c, n = this.d, r = this.tx, s = t * n - e * i;
            return this.a = n / s, this.b = -e / s, this.c = -i / s, this.d = t / s, this.tx = (i * this.ty - n * r) / s, 
            this.ty = -(t * this.ty - e * r) / s, this;
        }, t.setTo = function(t, e, i, n, r, s) {
            return this.a = t, this.b = e, this.c = i, this.d = n, this.tx = r, this.ty = s, 
            this;
        }, t.concat = function(t) {
            var e = this.a, i = this.c, n = this.tx;
            return this.a = e * t.a + this.b * t.c, this.b = e * t.b + this.b * t.d, this.c = i * t.a + this.d * t.c, 
            this.d = i * t.b + this.d * t.d, this.tx = n * t.a + this.ty * t.c + t.tx, this.ty = n * t.b + this.ty * t.d + t.ty, 
            this;
        }, t.scaleEx = function(t, e) {
            var i = this.a, n = this.b, r = this.c, s = this.d;
            0 !== n || 0 !== r ? (this.a = t * i, this.b = t * n, this.c = e * r, this.d = e * s) : (this.a = t * i, 
            this.b = 0 * s, this.c = 0 * i, this.d = e * s), this._bTransform = !0;
        }, t.rotateEx = function(t) {
            var e = Math.cos(t), i = Math.sin(t), n = this.a, r = this.b, s = this.c, a = this.d;
            0 !== r || 0 !== s ? (this.a = e * n + i * s, this.b = e * r + i * a, this.c = -i * n + e * s, 
            this.d = -i * r + e * a) : (this.a = e * n, this.b = i * a, this.c = -i * n, this.d = e * a), 
            this._bTransform = !0;
        }, t.clone = function() {
            var t = Matrix.create();
            return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, 
            t._bTransform = this._bTransform, t;
        }, t.copyTo = function(t) {
            return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, 
            t._bTransform = this._bTransform, t;
        }, t.toString = function() {
            return this.a + "," + this.b + "," + this.c + "," + this.d + "," + this.tx + "," + this.ty;
        }, t.destroy = function() {
            this.recover();
        }, t.recover = function() {
            N.recover("Matrix", this.identity());
        }, Matrix.mul = function(t, e, i) {
            var n = t.a, r = t.b, s = t.c, a = t.d, o = t.tx, h = t.ty, u = e.a, l = e.b, c = e.c, _ = e.d, d = e.tx, f = e.ty;
            return 0 !== l || 0 !== c ? (i.a = n * u + r * c, i.b = n * l + r * _, i.c = s * u + a * c, 
            i.d = s * l + a * _, i.tx = u * o + c * h + d, i.ty = l * o + _ * h + f) : (i.a = n * u, 
            i.b = r * _, i.c = s * u, i.d = a * _, i.tx = u * o + d, i.ty = _ * h + f), i;
        }, Matrix.mul16 = function(t, e, i) {
            var n = t.a, r = t.b, s = t.c, a = t.d, o = t.tx, h = t.ty, u = e.a, l = e.b, c = e.c, _ = e.d, d = e.tx, f = e.ty;
            return 0 !== l || 0 !== c ? (i[0] = n * u + r * c, i[1] = n * l + r * _, i[4] = s * u + a * c, 
            i[5] = s * l + a * _, i[12] = u * o + c * h + d, i[13] = l * o + _ * h + f) : (i[0] = n * u, 
            i[1] = r * _, i[4] = s * u, i[5] = a * _, i[12] = u * o + d, i[13] = _ * h + f), 
            i;
        }, Matrix.create = function() {
            return N.getItemByClass("Matrix", Matrix);
        }, Matrix.EMPTY = new Matrix(), Matrix.TEMP = new Matrix(), Matrix._createFun = null, 
        Matrix;
    }(), at = function() {
        function PerfData(t, e, i, n) {
            this.id = 0, this.name = null, this.color = 0, this.scale = 1, this.datapos = 0, 
            this.datas = new Array(oi.DATANUM), this.id = t, this.color = e, this.name = i, 
            this.scale = n;
        }
        return r(PerfData, "laya.utils.PerfData"), PerfData.prototype.addData = function(t) {
            this.datas[this.datapos] = t, this.datapos++, this.datapos %= oi.DATANUM;
        }, PerfData;
    }(), ot = function() {
        function TransformCmd() {}
        r(TransformCmd, "laya.display.cmd.TransformCmd");
        var t = TransformCmd.prototype;
        return t.recover = function() {
            this.matrix = null, N.recover("TransformCmd", this);
        }, t.run = function(t, e, i) {
            t._transform(this.matrix, this.pivotX + e, this.pivotY + i);
        }, s(0, t, "cmdID", function() {
            return "Transform";
        }), TransformCmd.create = function(t, e, i) {
            var n = N.getItemByClass("TransformCmd", TransformCmd);
            return n.matrix = t, n.pivotX = e, n.pivotY = i, n;
        }, TransformCmd.ID = "Transform", TransformCmd;
    }(), ht = function() {
        function DrawTexturesCmd() {}
        r(DrawTexturesCmd, "laya.display.cmd.DrawTexturesCmd");
        var t = DrawTexturesCmd.prototype;
        return t.recover = function() {
            this.texture._removeReference(), this.texture = null, this.pos = null, N.recover("DrawTexturesCmd", this);
        }, t.run = function(t, e, i) {
            t.drawTextures(this.texture, this.pos, e, i);
        }, s(0, t, "cmdID", function() {
            return "DrawTextures";
        }), DrawTexturesCmd.create = function(t, e) {
            var i = N.getItemByClass("DrawTexturesCmd", DrawTexturesCmd);
            return i.texture = t, t._addReference(), i.pos = e, i;
        }, DrawTexturesCmd.ID = "DrawTextures", DrawTexturesCmd;
    }(), ut = function() {
        function DrawCircleCmd() {}
        r(DrawCircleCmd, "laya.display.cmd.DrawCircleCmd");
        var t = DrawCircleCmd.prototype;
        return t.recover = function() {
            this.fillColor = null, this.lineColor = null, N.recover("DrawCircleCmd", this);
        }, t.run = function(t, e, i) {
            t._drawCircle(this.x + e, this.y + i, this.radius, this.fillColor, this.lineColor, this.lineWidth, this.vid);
        }, s(0, t, "cmdID", function() {
            return "DrawCircle";
        }), DrawCircleCmd.create = function(t, e, i, n, r, s, a) {
            var o = N.getItemByClass("DrawCircleCmd", DrawCircleCmd);
            return o.x = t, o.y = e, o.radius = i, o.fillColor = n, o.lineColor = r, o.lineWidth = s, 
            o.vid = a, o;
        }, DrawCircleCmd.ID = "DrawCircle", DrawCircleCmd;
    }(), lt = function() {
        var t;
        function Context() {
            if (this._drawTriUseAbsMatrix = !1, this._id = ++Context._COUNT, this._other = null, 
            this._renderNextSubmitIndex = 0, this._path = null, this._drawCount = 1, this._renderCount = 0, 
            this._isConvexCmd = !0, this._submits = null, this._curSubmit = null, this._mesh = null, 
            this._pathMesh = null, this._triangleMesh = null, this.meshlist = [], this._clipInCache = !1, 
            this._clipInfoID = 0, this._curMat = null, this._lastMatScaleX = 1, this._lastMatScaleY = 1, 
            this._lastMat_a = 1, this._lastMat_b = 0, this._lastMat_c = 0, this._lastMat_d = 1, 
            this._nBlendType = 0, this._save = null, this._targets = null, this._charSubmitCache = null, 
            this._saveMark = null, this.sprite = null, this._italicDeg = 0, this._lastTex = null, 
            this._fillColor = 0, this._flushCnt = 0, this.defTexture = null, this._colorFiler = null, 
            this.drawTexAlign = !1, this._incache = !1, this.isMain = !1, this._tmpMatrix = new st(), 
            this._drawTexToDrawTri_Vert = new Float32Array(8), this._drawTexToDrawTri_Index = new Uint16Array([ 0, 1, 2, 0, 2, 3 ]), 
            this._tempUV = new Float32Array(8), this._width = 99999999, this._height = 99999999, 
            this._submitKey = new O(), this._transedPoints = new Array(8), this._temp4Points = new Array(8), 
            this._clipRect = Context.MAXCLIPRECT, this._globalClipMatrix = new st(99999999, 0, 0, 99999999, 0, 0), 
            this._shader2D = new F(), Context._contextcount++, !this.defTexture) {
                var t = new _i(2, 2);
                t.setPixels(new Uint8Array(16)), t.lock = !0, this.defTexture = new Ee(t);
            }
            this._lastTex = this.defTexture, this.clear();
        }
        r(Context, "laya.resource.Context");
        var e = Context.prototype;
        return e.drawImage = function(t) {}, e.getImageData = function(t) {}, e.measureText = function(t) {
            return null;
        }, e.setTransform = function(t) {}, e.$transform = function(t, e, i, n, r, s) {}, 
        e.clearRect = function(t, e, i, n) {}, e._drawRect = function(t, e, i, n, r) {
            w.renderBatches++, r && (this.fillStyle = r), this.fillRect(t, e, i, n);
        }, e.drawTexture2 = function(t, e, i, n, r, s) {}, e.transformByMatrix = function(t, e, i) {
            this.transform(t.a, t.b, t.c, t.d, t.tx + e, t.ty + i);
        }, e.saveTransform = function(t) {
            this.save();
        }, e.restoreTransform = function(t) {
            this.restore();
        }, e.drawRect = function(t, e, i, n, r, s, a) {
            null != r && (this.fillStyle = r, this.fillRect(t, e, i, n)), null != s && (this.strokeStyle = s, 
            this.lineWidth = a, this.strokeRect(t, e, i, n));
        }, e.alpha = function(t) {
            this.globalAlpha *= t;
        }, e._transform = function(t, e, i) {
            this.translate(e, i), this.transform(t.a, t.b, t.c, t.d, t.tx, t.ty), this.translate(-e, -i);
        }, e._rotate = function(t, e, i) {
            this.translate(e, i), this.rotate(t), this.translate(-e, -i);
        }, e._scale = function(t, e, i, n) {
            this.translate(i, n), this.scale(t, e), this.translate(-i, -n);
        }, e._drawLine = function(t, e, i, n, r, s, a, o, h) {
            this.beginPath(), this.strokeStyle = a, this.lineWidth = o, this.moveTo(t + i, e + n), 
            this.lineTo(t + r, e + s), this.stroke();
        }, e._drawLines = function(t, e, i, n, r, s) {
            this.beginPath(), this.strokeStyle = n, this.lineWidth = r;
            i.length;
            this.addPath(i.slice(), !1, !1, t, e), this.stroke();
        }, e.drawCurves = function(t, e, i, n, r) {
            this.beginPath(), this.strokeStyle = n, this.lineWidth = r, this.moveTo(t + i[0], e + i[1]);
            for (var s = 2, a = i.length; s < a; ) this.quadraticCurveTo(t + i[s++], e + i[s++], t + i[s++], e + i[s++]);
            this.stroke();
        }, e._fillAndStroke = function(t, e, i, n) {
            void 0 === n && (n = !1), null != t && (this.fillStyle = t, this.fill()), null != e && i > 0 && (this.strokeStyle = e, 
            this.lineWidth = i, this.stroke());
        }, e._drawCircle = function(t, e, i, n, r, s, a) {
            w.renderBatches++, this.beginPath(!0), this.arc(t, e, i, 0, Context.PI2), this.closePath(), 
            this._fillAndStroke(n, r, s);
        }, e._drawPie = function(t, e, i, n, r, s, a, o, h) {
            this.beginPath(), this.moveTo(t, e), this.arc(t, e, i, n, r), this.closePath(), 
            this._fillAndStroke(s, a, o);
        }, e._drawPoly = function(t, e, i, n, r, s, a, o) {
            i.length;
            this.beginPath(), this.addPath(i.slice(), !0, a, t, e), this.closePath(), this._fillAndStroke(n, r, s, a);
        }, e._drawPath = function(t, e, i, n, r) {
            this.beginPath();
            for (var s = 0, a = i.length; s < a; s++) {
                var o = i[s];
                switch (o[0]) {
                  case "moveTo":
                    this.moveTo(t + o[1], e + o[2]);
                    break;

                  case "lineTo":
                    this.lineTo(t + o[1], e + o[2]);
                    break;

                  case "arcTo":
                    this.arcTo(t + o[1], e + o[2], t + o[3], e + o[4], o[5]);
                    break;

                  case "closePath":
                    this.closePath();
                }
            }
            null != n && (this.fillStyle = n.fillStyle, this.fill()), null != r && (this.strokeStyle = r.strokeStyle, 
            this.lineWidth = r.lineWidth || 1, this.lineJoin = r.lineJoin, this.lineCap = r.lineCap, 
            this.miterLimit = r.miterLimit, this.stroke());
        }, e.clearBG = function(t, e, i, n) {
            var r = Ct.mainContext;
            r.clearColor(t, e, i, n), r.clear(16384);
        }, e._getSubmits = function() {
            return this._submits;
        }, e._releaseMem = function(t) {
            if (void 0 === t && (t = !1), this._submits) {
                this._curMat.destroy(), this._curMat = null, this._shader2D.destroy(), this._shader2D = null, 
                this._charSubmitCache.clear();
                for (var e = 0, i = this._submits._length; e < i; e++) this._submits[e].releaseRender();
                this._submits.length = 0, this._submits._length = 0, this._submits = null, this._curSubmit = null, 
                this._path = null, this._save = null;
                var n;
                for (e = 0, n = this.meshlist.length; e < n; e++) {
                    this.meshlist[e].destroy();
                }
                this.meshlist.length = 0, this.sprite = null, t || (this._targets && this._targets.destroy(), 
                this._targets = null);
            }
        }, e.destroy = function(t) {
            void 0 === t && (t = !1), --Context._contextcount, this.sprite = null, this._releaseMem(t), 
            this._charSubmitCache.destroy(), this._mesh.destroy(), t || (this._targets && this._targets.destroy(), 
            this._targets = null);
        }, e.clear = function() {
            this._submits || (this._other = t.DEFAULT, this._curMat = st.create(), this._charSubmitCache = new re(), 
            this._mesh = Fe.getAMesh(this.isMain), this.meshlist.push(this._mesh), this._pathMesh = Ae.getAMesh(this.isMain), 
            this.meshlist.push(this._pathMesh), this._triangleMesh = Oe.getAMesh(this.isMain), 
            this.meshlist.push(this._triangleMesh), this._submits = [], this._save = [ Y.Create(this) ], 
            this._save.length = 10, this._shader2D = new F()), this._submitKey.clear(), this._mesh.clearVB(), 
            this._renderCount++, this._drawCount = 1, this._other = t.DEFAULT, this._other.lineWidth = this._shader2D.ALPHA = 1, 
            this._nBlendType = 0, this._clipRect = Context.MAXCLIPRECT, this._curSubmit = u.RENDERBASE, 
            u.RENDERBASE._ref = 16777215, u.RENDERBASE._numEle = 0, this._shader2D.fillStyle = this._shader2D.strokeStyle = Mt.DEFAULT;
            for (var e = 0, i = this._submits._length; e < i; e++) this._submits[e].releaseRender();
            this._submits._length = 0, this._curMat.identity(), this._other.clear(), this._saveMark = this._save[0], 
            this._save._length = 1;
        }, e.size = function(t, e) {
            this._width == t && this._height == e || (this._width = t, this._height = e, this._targets && (this._targets.destroy(), 
            this._targets = new di(t, e, 1, -1)), Rt._context == this && (Ct.mainContext.viewport(0, 0, t, e), 
            ft.width = t, ft.height = e)), 0 === t && 0 === e && this._releaseMem();
        }, e.getMatScaleX = function() {
            return this._lastMat_a == this._curMat.a && this._lastMat_b == this._curMat.b ? this._lastMatScaleX : (this._lastMatScaleX = this._curMat.getScaleX(), 
            this._lastMat_a = this._curMat.a, this._lastMat_b = this._curMat.b, this._lastMatScaleX);
        }, e.getMatScaleY = function() {
            return this._lastMat_c == this._curMat.c && this._lastMat_d == this._curMat.d ? this._lastMatScaleY : (this._lastMatScaleY = this._curMat.getScaleY(), 
            this._lastMat_c = this._curMat.c, this._lastMat_d = this._curMat.d, this._lastMatScaleY);
        }, e.setFillColor = function(t) {
            this._fillColor = t;
        }, e.getFillColor = function() {
            return this._fillColor;
        }, e.translate = function(t, e) {
            0 === t && 0 === e || (et.save(this), this._curMat._bTransform ? (Pt.save(this), 
            this._curMat.tx += t * this._curMat.a + e * this._curMat.c, this._curMat.ty += t * this._curMat.b + e * this._curMat.d) : (this._curMat.tx = t, 
            this._curMat.ty = e));
        }, e.save = function() {
            this._save[this._save._length++] = Y.Create(this);
        }, e.restore = function() {
            var t = this._save._length, e = this._nBlendType;
            if (!(t < 1)) {
                for (var i = t - 1; i >= 0; i--) {
                    var n = this._save[i];
                    if (n.restore(this), n.isSaveMark()) return void (this._save._length = i);
                }
                e != this._nBlendType && (this._curSubmit = u.RENDERBASE);
            }
        }, e.fillText = function(t, e, i, n, r, s) {
            this._fillText(t, null, e, i, n, r, null, 0, null);
        }, e._fillText = function(t, e, i, n, r, s, a, o, h, u) {
            void 0 === u && (u = 0), t ? Context._textRender.filltext(this, t, i, n, r, s, a, o, h, u) : e && Context._textRender.fillWords(this, e, i, n, r, s, a, o);
        }, e._fast_filltext = function(t, e, i, n, r, s, a, o, h) {
            void 0 === h && (h = 0), Context._textRender._fast_filltext(this, t, null, e, i, n, r, s, a, o, h);
        }, e.fillWords = function(t, e, i, n, r) {
            this._fillText(null, t, e, i, n, r, null, -1, null, 0);
        }, e.fillBorderWords = function(t, e, i, n, r, s, a) {
            this._fillBorderText(null, t, e, i, n, r, s, a, null);
        }, e.drawText = function(t, e, i, n, r, s) {
            this._fillText(t, null, e, i, n, o.create(r).strColor, null, -1, s);
        }, e.strokeWord = function(t, e, i, n, r, s, a) {
            this._fillText(t, null, e, i, n, null, o.create(r).strColor, s || 1, a);
        }, e.fillBorderText = function(t, e, i, n, r, s, a, h) {
            this._fillBorderText(t, null, e, i, n, o.create(r).strColor, o.create(s).strColor, a, h);
        }, e._fillBorderText = function(t, e, i, n, r, s, a, o, h) {
            this._fillText(t, e, i, n, r, s, a, o || 1, h);
        }, e._fillRect = function(t, e, i, n, r) {
            var s = this._curSubmit, a = s && 2 === s._key.submitType && s._key.blendShader === this._nBlendType;
            this._mesh.vertNum + 4 > 65535 && (this._mesh = Fe.getAMesh(this.isMain), this.meshlist.push(this._mesh), 
            a = !1), a && (a = a && this.isSameClipInfo(s)), this.transformQuad(t, e, i, n, 0, this._curMat, this._transedPoints), 
            this.clipedOff(this._transedPoints) || (this._mesh.addQuad(this._transedPoints, Ee.NO_UV, r, !1), 
            a || (s = this._curSubmit = ye.create(this, this._mesh, H.create(1, 0)), this._submits[this._submits._length++] = s, 
            this._copyClipInfo(s, this._globalClipMatrix), s.shaderValue.textureHost = this._lastTex, 
            s._key.other = this._lastTex && this._lastTex.bitmap ? this._lastTex.bitmap.id : -1, 
            s._renderType = 10016), this._curSubmit._numEle += 6, this._mesh.indexNum += 6, 
            this._mesh.vertNum += 4);
        }, e.fillRect = function(t, e, i, n, r) {
            var s = r ? Mt.create(r) : this._shader2D.fillStyle, a = this.mixRGBandAlpha(s.toInt());
            this._fillRect(t, e, i, n, a);
        }, e.fillTexture = function(t, e, n, r, s, a, o, h) {
            t._getSource() ? this._fillTexture(t, t.width, t.height, t.uvrect, e, n, r, s, a, o.x, o.y) : this.sprite && i.systemTimer.callLater(this, this._repaintSprite);
        }, e._fillTexture = function(t, e, i, n, r, s, a, o, h, u, l) {
            var c = this._curSubmit;
            this._mesh.vertNum + 4 > 65535 && (this._mesh = Fe.getAMesh(this.isMain), this.meshlist.push(this._mesh));
            var _ = !0, d = !0;
            switch (h) {
              case "repeat":
                break;

              case "repeat-x":
                d = !1;
                break;

              case "repeat-y":
                _ = !1;
                break;

              case "no-repeat":
                _ = d = !1;
            }
            var f = this._temp4Points, p = 0, m = 0, g = 0, v = 0, x = 0, y = 0;
            if (u < 0 ? (g = r, p = -u % e / e) : g = r + u, l < 0 ? (v = s, m = -l % i / i) : v = s + l, 
            x = r + a, y = s + o, !_ && (x = Math.min(x, r + u + e)), !d && (y = Math.min(y, s + l + i)), 
            !(x < r || y < s || g > x || v > y)) {
                var T = (x - r - u) / e, b = (y - s - l) / i;
                if (this.transformQuad(g, v, x - g, y - v, 0, this._curMat, this._transedPoints), 
                f[0] = p, f[1] = m, f[2] = T, f[3] = m, f[4] = T, f[5] = b, f[6] = p, f[7] = b, 
                !this.clipedOff(this._transedPoints)) {
                    var C = this._mixRGBandAlpha(4294967295, this._shader2D.ALPHA);
                    this._mesh.addQuad(this._transedPoints, f, C, !0);
                    var S = H.create(1, 0);
                    S.defines.add(256), S.u_TexRange = n, c = this._curSubmit = ye.create(this, this._mesh, S), 
                    this._submits[this._submits._length++] = c, this._copyClipInfo(c, this._globalClipMatrix), 
                    c.shaderValue.textureHost = t, c._renderType = 10016, this._curSubmit._numEle += 6, 
                    this._mesh.indexNum += 6, this._mesh.vertNum += 4;
                }
                this.breakNextMerge();
            }
        }, e.setColorFilter = function(t) {
            h.save(this, 8388608, this, !0), this._colorFiler = t, this._curSubmit = u.RENDERBASE;
        }, e.drawTexture = function(t, e, i, n, r) {
            this._drawTextureM(t, e, i, n, r, null, 1, null);
        }, e.drawTextures = function(t, e, n, r) {
            if (t._getSource()) for (var s = e.length / 2, a = 0, o = t.bitmap.id, h = 0; h < s; h++) this._inner_drawTexture(t, o, e[a++] + n, e[a++] + r, 0, 0, null, null, 1, !1); else this.sprite && i.systemTimer.callLater(this, this._repaintSprite);
        }, e._drawTextureAddSubmit = function(t, e) {
            var i = null;
            i = ye.create(this, this._mesh, H.create(1, 0)), this._submits[this._submits._length++] = i, 
            i.shaderValue.textureHost = e, i._key.other = t, i._renderType = 10016, this._curSubmit = i;
        }, e._drawTextureM = function(t, e, i, n, r, s, a, o) {
            var h = this.sprite;
            return !!t._getSource(function() {
                h && h.repaint();
            }) && this._inner_drawTexture(t, t.bitmap.id, e, i, n, r, s, o, a, !1);
        }, e._drawRenderTexture = function(t, e, i, n, r, s, a, o) {
            return this._inner_drawTexture(t, -1, e, i, n, r, s, o, 1, !1);
        }, e.submitDebugger = function() {
            this._submits[this._submits._length++] = Q.create([], function() {}, this);
        }, e._copyClipInfo = function(t, e) {
            var i = t.shaderValue.clipMatDir;
            i[0] = e.a, i[1] = e.b, i[2] = e.c, i[3] = e.d;
            var n = t.shaderValue.clipMatPos;
            n[0] = e.tx, n[1] = e.ty, t.clipInfoID = this._clipInfoID, this._clipInCache && (t.shaderValue.clipOff[0] = 1);
        }, e.isSameClipInfo = function(t) {
            return t.clipInfoID === this._clipInfoID;
        }, e._useNewTex2DSubmit = function(t, e) {
            this._mesh.vertNum + e > 65535 && (this._mesh = Fe.getAMesh(this.isMain), this.meshlist.push(this._mesh));
            var i = ye.create(this, this._mesh, H.create(1, 0));
            this._submits[this._submits._length++] = this._curSubmit = i, i.shaderValue.textureHost = t, 
            this._copyClipInfo(i, this._globalClipMatrix);
        }, e._drawTexRect = function(t, e, i, n, r) {
            this.transformQuad(t, e, i, n, this._italicDeg, this._curMat, this._transedPoints);
            var s = this._transedPoints;
            s[0] = s[0] + .5 | 0, s[1] = s[1] + .5 | 0, s[2] = s[2] + .5 | 0, s[3] = s[3] + .5 | 0, 
            s[4] = s[4] + .5 | 0, s[5] = s[5] + .5 | 0, s[6] = s[6] + .5 | 0, s[7] = s[7] + .5 | 0, 
            this.clipedOff(this._transedPoints) || (this._mesh.addQuad(this._transedPoints, r, this._fillColor, !0), 
            this._curSubmit._numEle += 6, this._mesh.indexNum += 6, this._mesh.vertNum += 4);
        }, e.drawCallOptimize = function(t) {
            return this._charSubmitCache.enable(t, this), t;
        }, e._inner_drawTexture = function(t, e, i, n, r, s, a, o, h, u) {
            var l = this._curSubmit._key;
            if (o = o || t._uv, 4 === l.submitType && l.other === e) {
                var c = this._drawTexToDrawTri_Vert;
                c[0] = i, c[1] = n, c[2] = i + r, c[3] = n, c[4] = i + r, c[5] = n + s, c[6] = i, 
                c[7] = n + s, this._drawTriUseAbsMatrix = !0;
                var _ = this._tempUV;
                return _[0] = o[0], _[1] = o[1], _[2] = o[2], _[3] = o[3], _[4] = o[4], _[5] = o[5], 
                _[6] = o[6], _[7] = o[7], this.drawTriangles(t, 0, 0, c, _, this._drawTexToDrawTri_Index, a, h, null, null), 
                this._drawTriUseAbsMatrix = !1, !0;
            }
            var d = this._mesh, f = this._curSubmit, p = u ? this._charSubmitCache.getPos() : this._transedPoints;
            if (this.transformQuad(i, n, r || t.width, s || t.height, this._italicDeg, a || this._curMat, p), 
            this.drawTexAlign) {
                var m = Math.round;
                p[0] = m(p[0]), p[1] = m(p[1]), p[2] = m(p[2]), p[3] = m(p[3]), p[4] = m(p[4]), 
                p[5] = m(p[5]), p[6] = m(p[6]), p[7] = m(p[7]), this.drawTexAlign = !1;
            }
            var g = this._mixRGBandAlpha(4294967295, this._shader2D.ALPHA * h);
            if (u) return this._charSubmitCache.add(this, t, e, p, o, g), !0;
            this._drawCount++;
            var v = e >= 0 && 2 === l.submitType && l.other === e;
            return v && (v = v && this.isSameClipInfo(f)), this._lastTex = t, d.vertNum + 4 > 65535 && (d = this._mesh = Fe.getAMesh(this.isMain), 
            this.meshlist.push(d), v = !1), d.addQuad(p, o, g, !0), v || (this._submits[this._submits._length++] = this._curSubmit = f = ye.create(this, d, H.create(1, 0)), 
            f.shaderValue.textureHost = t, f._key.other = e, this._copyClipInfo(f, this._globalClipMatrix)), 
            f._numEle += 6, d.indexNum += 6, d.vertNum += 4, !0;
        }, e.transform4Points = function(t, e, i) {
            var n = e.tx, r = e.ty, s = e.a, a = e.b, o = e.c, h = e.d, u = t[0], l = t[1], c = t[2], _ = t[3], d = t[4], f = t[5], p = t[6], m = t[7];
            e._bTransform ? (i[0] = u * s + l * o + n, i[1] = u * a + l * h + r, i[2] = c * s + _ * o + n, 
            i[3] = c * a + _ * h + r, i[4] = d * s + f * o + n, i[5] = d * a + f * h + r, i[6] = p * s + m * o + n, 
            i[7] = p * a + m * h + r) : (i[0] = u + n, i[1] = l + r, i[2] = c + n, i[3] = _ + r, 
            i[4] = d + n, i[5] = f + r, i[6] = p + n, i[7] = m + r);
        }, e.clipedOff = function(t) {
            return this._clipRect.width <= 0 || this._clipRect.height <= 0;
        }, e.transformQuad = function(t, e, i, n, r, s, a) {
            var o = 0;
            0 != r && (o = Math.tan(r * Math.PI / 180) * n);
            var h = t + i, u = e + n, l = s.tx, c = s.ty, _ = s.a, d = s.b, f = s.c, p = s.d, m = t + o, g = e, v = h + o, x = e, y = h, T = u, b = t, C = u;
            s._bTransform ? (a[0] = m * _ + g * f + l, a[1] = m * d + g * p + c, a[2] = v * _ + x * f + l, 
            a[3] = v * d + x * p + c, a[4] = y * _ + T * f + l, a[5] = y * d + T * p + c, a[6] = b * _ + C * f + l, 
            a[7] = b * d + C * p + c) : (a[0] = m + l, a[1] = g + c, a[2] = v + l, a[3] = x + c, 
            a[4] = y + l, a[5] = T + c, a[6] = b + l, a[7] = C + c);
        }, e.pushRT = function() {
            this.addRenderObject(Q.create(null, di.pushRT, this));
        }, e.popRT = function() {
            this.addRenderObject(Q.create(null, di.popRT, this)), this.breakNextMerge();
        }, e.useRT = function(t) {
            this.addRenderObject(Q.create([ t ], function(t) {
                if (!t) throw "error useRT";
                t.start(), t.clear(0, 0, 0, 0);
            }, this)), this.breakNextMerge();
        }, e.RTRestore = function(t) {
            this.addRenderObject(Q.create([ t ], function(t) {
                t.restore();
            }, this)), this.breakNextMerge();
        }, e.breakNextMerge = function() {
            this._curSubmit = u.RENDERBASE;
        }, e._repaintSprite = function() {
            this.sprite && this.sprite.repaint();
        }, e.drawTextureWithTransform = function(t, e, i, n, r, s, a, o, h, u, l) {
            var c = null, _ = this._curMat;
            u && (c = this.globalCompositeOperation, this.globalCompositeOperation = u);
            var d = this._colorFiler;
            if (l && this.setColorFilter(l), !s) return this._drawTextureM(t, e + a, i + o, n, r, _, h, null), 
            u && (this.globalCompositeOperation = c), void (l && this.setColorFilter(d));
            var f = this._tmpMatrix;
            f.a = s.a, f.b = s.b, f.c = s.c, f.d = s.d, f.tx = s.tx + a, f.ty = s.ty + o, f._bTransform = s._bTransform, 
            s && _._bTransform ? (st.mul(f, _, f), (s = f)._bTransform = !0) : (f.tx += _.tx, 
            f.ty += _.ty, s = f), this._drawTextureM(t, e, i, n, r, s, h, null), u && (this.globalCompositeOperation = c), 
            l && this.setColorFilter(d);
        }, e._flushToTarget = function(t, e) {
            ft.worldScissorTest = !1, Ct.mainContext.disable(3089);
            var i = ft.worldAlpha, n = ft.worldMatrix4, r = ft.worldMatrix;
            ft.worldShaderDefines;
            ft.worldMatrix = st.EMPTY, ft.restoreTempArray(), ft.worldMatrix4 = ft.TEMPMAT4_ARRAY, 
            ft.worldAlpha = 1, je.activeShader = null, e.start(), t._submits._length > 0 && e.clear(0, 0, 0, 0), 
            t._curSubmit = u.RENDERBASE, t.flush(), t.clear(), e.restore(), t._curSubmit = u.RENDERBASE, 
            je.activeShader = null, ft.worldAlpha = i, ft.worldMatrix4 = n, ft.worldMatrix = r;
        }, e.drawCanvas = function(t, e, i, n, r) {
            if (t) {
                var s, a = t.context;
                if (a._targets) a._submits._length > 0 && (s = Q.create([ a, a._targets ], this._flushToTarget, this), 
                this._submits[this._submits._length++] = s), this._drawRenderTexture(a._targets, e, i, n, r, null, 1, di.flipyuv), 
                this._curSubmit = u.RENDERBASE; else {
                    var o = t;
                    o.touches && o.touches.forEach(function(t) {
                        t.touch();
                    }), s = be.create(t, this._shader2D.ALPHA, this._shader2D.filters), this._submits[this._submits._length++] = s, 
                    s._key.clear();
                    var h = s._matrix;
                    this._curMat.copyTo(h);
                    var l = h.tx, c = h.ty;
                    h.tx = h.ty = 0, h.transformPoint(Xt.TEMP.setTo(e, i)), h.translate(Xt.TEMP.x + l, Xt.TEMP.y + c), 
                    st.mul(o.invMat, h, h), this._curSubmit = u.RENDERBASE;
                }
            }
        }, e.drawTarget = function(t, e, i, n, r, s, a, o, h) {
            void 0 === h && (h = -1), this._drawCount++;
            if (this._mesh.vertNum + 4 > 65535 && (this._mesh = Fe.getAMesh(this.isMain), this.meshlist.push(this._mesh)), 
            this.transformQuad(e, i, n, r, 0, s || this._curMat, this._transedPoints), !this.clipedOff(this._transedPoints)) {
                this._mesh.addQuad(this._transedPoints, o || Ee.DEF_UV, 4294967295, !0);
                var l = this._curSubmit = d.create(this, this._mesh, a, t);
                return l.blendType = -1 == h ? this._nBlendType : h, this._copyClipInfo(l, this._globalClipMatrix), 
                l._numEle = 6, this._mesh.indexNum += 6, this._mesh.vertNum += 4, this._submits[this._submits._length++] = l, 
                this._curSubmit = u.RENDERBASE, !0;
            }
            return this._curSubmit = u.RENDERBASE, !1;
        }, e.drawTriangles = function(t, e, n, r, s, a, o, h, l, c) {
            if (t._getSource()) {
                this._drawCount++;
                var _ = this._tmpMatrix, d = this._triangleMesh, f = null, p = !1;
                l && (f = this._colorFiler, this._colorFiler = l, this._curSubmit = u.RENDERBASE, 
                p = f != l);
                var m = t.bitmap, g = this._curSubmit._key, v = 4 === g.submitType && g.other === m.id && g.blendShader == this._nBlendType;
                if (d.vertNum + r.length / 2 > 65535 && (d = this._triangleMesh = Oe.getAMesh(this.isMain), 
                this.meshlist.push(d), v = !1), !v) {
                    var x = this._curSubmit = ye.create(this, d, H.create(1, 0));
                    x.shaderValue.textureHost = t, x._renderType = 10016, x._key.submitType = 4, x._key.other = m.id, 
                    this._copyClipInfo(x, this._globalClipMatrix), this._submits[this._submits._length++] = x;
                }
                var y = this._mixRGBandAlpha(4294967295, this._shader2D.ALPHA * h);
                this._drawTriUseAbsMatrix ? d.addData(r, s, a, o, y) : (o ? (_.a = o.a, _.b = o.b, 
                _.c = o.c, _.d = o.d, _.tx = o.tx + e, _.ty = o.ty + n) : (_.a = 1, _.b = 0, _.c = 0, 
                _.d = 1, _.tx = e, _.ty = n), st.mul(_, this._curMat, _), d.addData(r, s, a, _, y)), 
                this._curSubmit._numEle += a.length, p && (this._colorFiler = f, this._curSubmit = u.RENDERBASE);
            } else this.sprite && i.systemTimer.callLater(this, this._repaintSprite);
        }, e.transform = function(t, e, i, n, r, s) {
            Pt.save(this), st.mul(st.TEMP.setTo(t, e, i, n, r, s), this._curMat, this._curMat), 
            this._curMat._checkTransform();
        }, e._transformByMatrix = function(t, e, i) {
            t.setTranslate(e, i), st.mul(t, this._curMat, this._curMat), t.setTranslate(0, 0), 
            this._curMat._bTransform = !0;
        }, e.setTransformByMatrix = function(t) {
            t.copyTo(this._curMat);
        }, e.rotate = function(t) {
            Pt.save(this), this._curMat.rotateEx(t);
        }, e.scale = function(t, e) {
            Pt.save(this), this._curMat.scaleEx(t, e);
        }, e.clipRect = function(t, e, i, n) {
            he.save(this), this._clipRect == Context.MAXCLIPRECT ? this._clipRect = new mt(t, e, i, n) : (this._clipRect.width = i, 
            this._clipRect.height = n, this._clipRect.x = t, this._clipRect.y = e), Context._clipID_Gen++, 
            Context._clipID_Gen %= 1e4, this._clipInfoID = Context._clipID_Gen;
            var r = this._globalClipMatrix, s = r.tx, a = r.ty, o = s + r.a, h = a + r.d;
            if (this._clipRect.width >= 99999999 ? (r.a = r.d = 99999999, r.b = r.c = r.tx = r.ty = 0) : (this._curMat._bTransform ? (r.tx = this._clipRect.x * this._curMat.a + this._clipRect.y * this._curMat.c + this._curMat.tx, 
            r.ty = this._clipRect.x * this._curMat.b + this._clipRect.y * this._curMat.d + this._curMat.ty, 
            r.a = this._clipRect.width * this._curMat.a, r.b = this._clipRect.width * this._curMat.b, 
            r.c = this._clipRect.height * this._curMat.c, r.d = this._clipRect.height * this._curMat.d) : (r.tx = this._clipRect.x + this._curMat.tx, 
            r.ty = this._clipRect.y + this._curMat.ty, r.a = this._clipRect.width, r.b = r.c = 0, 
            r.d = this._clipRect.height), this._incache && (this._clipInCache = !0)), r.a > 0 && r.d > 0) {
                var u = r.tx + r.a, l = r.ty + r.d;
                u <= s || l <= a || r.tx >= o || r.ty >= h ? (r.a = -.1, r.d = -.1) : (r.tx < s && (r.a -= s - r.tx, 
                r.tx = s), u > o && (r.a -= u - o), r.ty < a && (r.d -= a - r.ty, r.ty = a), l > h && (r.d -= l - h), 
                r.a <= 0 && (r.a = -.1), r.d <= 0 && (r.d = -.1));
            }
        }, e.drawMesh = function(t, e, i, n, r, s, a, o, h) {
            void 0 === h && (h = 0);
        }, e.addRenderObject = function(t) {
            this._submits[this._submits._length++] = t;
        }, e.submitElement = function(t, e) {
            Rt._context;
            var i = this._submits, n = i._length;
            e < 0 && (e = i._length);
            for (var r = u.RENDERBASE; t < e; ) this._renderNextSubmitIndex = t + 1, i[t] !== u.RENDERBASE ? (u.preRender = r, 
            t += (r = i[t]).renderSubmit()) : t++;
            return n;
        }, e.flush = function() {
            var t = this.submitElement(0, this._submits._length);
            this._path && this._path.reset(), v.instance && v.getInstance().reset(), this._curSubmit = u.RENDERBASE;
            for (var e = 0, i = this.meshlist.length; e < i; e++) {
                var n = this.meshlist[e];
                n.canReuse ? n.releaseMesh() : n.destroy();
            }
            return this.meshlist.length = 0, this._mesh = Fe.getAMesh(this.isMain), this._pathMesh = Ae.getAMesh(this.isMain), 
            this._triangleMesh = Oe.getAMesh(this.isMain), this.meshlist.push(this._mesh, this._pathMesh, this._triangleMesh), 
            this._flushCnt++, this._flushCnt % 60 == 0 && Rt._context == this && S.textRenderInst && S.textRenderInst.GC(), 
            t;
        }, e.beginPath = function(t) {
            void 0 === t && (t = !1), this._getPath().beginPath(t);
        }, e.closePath = function() {
            this._path.closePath();
        }, e.addPath = function(t, e, i, n, r) {
            for (var s = 0, a = 0, o = t.length / 2; a < o; a++) {
                var h = t[s] + n, u = t[s + 1] + r;
                t[s] = h, t[s + 1] = u, s += 2;
            }
            this._getPath().push(t, i);
        }, e.fill = function() {
            var t = this._curMat, e = this._getPath(), i = this._curSubmit, n = 3 === i._key.submitType && i._key.blendShader === this._nBlendType;
            n && (n = n && this.isSameClipInfo(i)), n || (this._curSubmit = this.addVGSubmit(this._pathMesh));
            for (var r, s = this.mixRGBandAlpha(this.fillStyle.toInt()), a = 0, o = 0, h = e.paths.length; o < h; o++) {
                var u = e.paths[o], l = u.path.length / 2;
                if (!(l < 3 || 3 == l && !u.convex)) {
                    var c = u.path.concat(), _ = 0, d = 0, f = 0, p = NaN, m = NaN;
                    if (t._bTransform) for (_ = 0; _ < l; _++) f = (d = _ << 1) + 1, p = c[d], m = c[f], 
                    c[d] = t.a * p + t.c * m + t.tx, c[f] = t.b * p + t.d * m + t.ty; else for (_ = 0; _ < l; _++) f = (d = _ << 1) + 1, 
                    p = c[d], m = c[f], c[d] = p + t.tx, c[f] = m + t.ty;
                    this._pathMesh.vertNum + l > 65535 && (this._curSubmit._numEle += a, a = 0, this._pathMesh = Ae.getAMesh(this.isMain), 
                    this._curSubmit = this.addVGSubmit(this._pathMesh));
                    var g = this._pathMesh.vertNum;
                    if (u.convex) {
                        var v = l - 2;
                        r = new Array(3 * v);
                        for (var x = 0, y = 0; y < v; y++) r[x++] = g, r[x++] = y + 1 + g, r[x++] = y + 2 + g;
                    } else if (r = kt.earcut(c, null, 2), g > 0) for (var T = 0; T < r.length; T++) r[T] += g;
                    this._pathMesh.addVertAndIBToMesh(this, c, s, r), a += r.length;
                }
            }
            this._curSubmit._numEle += a;
        }, e.addVGSubmit = function(t) {
            var e = u.createShape(this, t, 0, H.create(4, 0));
            return e._key.submitType = 3, this._submits[this._submits._length++] = e, this._copyClipInfo(e, this._globalClipMatrix), 
            e;
        }, e.stroke = function() {
            if (this.lineWidth > 0) {
                var t = this.mixRGBandAlpha(this.strokeStyle._color.numColor), e = this._getPath(), i = this._curSubmit, n = 3 === i._key.submitType && i._key.blendShader === this._nBlendType;
                n && (n = n && this.isSameClipInfo(i)), n || (this._curSubmit = this.addVGSubmit(this._pathMesh));
                for (var r = 0, s = 0, a = e.paths.length; s < a; s++) {
                    var o = e.paths[s];
                    if (!(o.path.length <= 0)) {
                        var h = [], u = [], l = 2 * o.path.length;
                        if (!(l < 2)) {
                            this._pathMesh.vertNum + l > 65535 && (this._curSubmit._numEle += r, r = 0, this._pathMesh = Ae.getAMesh(this.isMain), 
                            this.meshlist.push(this._pathMesh), this._curSubmit = this.addVGSubmit(this._pathMesh)), 
                            Yt.createLine2(o.path, h, this.lineWidth, this._pathMesh.vertNum, u, o.loop);
                            var c = u.length / 2, _ = this._curMat, d = 0, f = 0, p = 0, m = NaN, g = NaN;
                            if (_._bTransform) for (d = 0; d < c; d++) p = (f = d << 1) + 1, m = u[f], g = u[p], 
                            u[f] = _.a * m + _.c * g + _.tx, u[p] = _.b * m + _.d * g + _.ty; else for (d = 0; d < c; d++) p = (f = d << 1) + 1, 
                            m = u[f], g = u[p], u[f] = m + _.tx, u[p] = g + _.ty;
                            this._pathMesh.addVertAndIBToMesh(this, u, t, h), r += h.length;
                        }
                    }
                }
                this._curSubmit._numEle += r;
            }
        }, e.moveTo = function(t, e) {
            var i = this._getPath();
            i.newPath(), i._lastOriX = t, i._lastOriY = e, i.addPoint(t, e);
        }, e.lineTo = function(t, e) {
            var i = this._getPath();
            Math.abs(t - i._lastOriX) < .001 && Math.abs(e - i._lastOriY) < .001 || (i._lastOriX = t, 
            i._lastOriY = e, i.addPoint(t, e));
        }, e.arcTo = function(t, e, i, n, r) {
            var s = 0, a = 0, o = 0, h = this._path._lastOriX - t, u = this._path._lastOriY - e, l = Math.sqrt(h * h + u * u);
            if (!(l <= 1e-6)) {
                var c = h / l, _ = u / l, d = i - t, f = n - e, p = d * d + f * f, m = Math.sqrt(p);
                if (!(m <= 1e-6)) {
                    var g = d / m, v = f / m, x = c + g, y = _ + v, T = Math.sqrt(x * x + y * y);
                    if (!(T <= 1e-6)) {
                        var b = x / T, C = y / T, S = Math.acos(b * c + C * _), w = Math.PI / 2 - S, M = (l = r / Math.tan(w)) * c + t, A = l * _ + e, R = Math.sqrt(l * l + r * r), L = t + b * R, E = e + C * R, D = 0, I = 0;
                        if (c * v - _ * g >= 0) {
                            var P = 2 * w / Context.SEGNUM;
                            D = Math.sin(P), I = Math.cos(P);
                        } else P = 2 * -w / Context.SEGNUM, D = Math.sin(P), I = Math.cos(P);
                        var B = this._path._lastOriX, F = this._path._lastOriY, G = M, W = A;
                        (Math.abs(G - this._path._lastOriX) > .1 || Math.abs(W - this._path._lastOriY) > .1) && (a = G, 
                        o = W, B = G, F = W, this._path.addPoint(a, o));
                        var O = M - L, N = A - E;
                        for (s = 0; s < Context.SEGNUM; s++) {
                            var U = O * I + N * D, k = -O * D + N * I;
                            a = U + L, o = k + E, (Math.abs(B - a) > .1 || Math.abs(F - o) > .1) && (this._path.addPoint(a, o), 
                            B = a, F = o), O = U, N = k;
                        }
                    }
                }
            }
        }, e.arc = function(t, e, i, n, r, s, a) {
            void 0 === s && (s = !1), void 0 === a && (a = !0);
            var o, h, u = 0, l = 0, c = 0, _ = 0, d = 0, f = 0, p = 0;
            if (l = r - n, s) if (Math.abs(l) >= 2 * Math.PI) l = 2 * -Math.PI; else for (;l > 0; ) l -= 2 * Math.PI; else if (Math.abs(l) >= 2 * Math.PI) l = 2 * Math.PI; else for (;l < 0; ) l += 2 * Math.PI;
            var m = this.getMatScaleX(), g = this.getMatScaleY(), v = i * (m > g ? m : g), x = 2 * Math.PI * v;
            o = l / (h = 0 | Math.max(x / 10, 10)) / 2, c = Math.abs(4 / 3 * (1 - Math.cos(o)) / Math.sin(o)), 
            s && (c = -c);
            var y = this._getPath();
            for (p = 0; p <= h; p++) u = n + l * (p / h), _ = Math.cos(u), f = e + Math.sin(u) * i, 
            (d = t + _ * i) == this._path._lastOriX && f == this._path._lastOriY || y.addPoint(d, f);
            _ = Math.cos(r), f = e + Math.sin(r) * i, (d = t + _ * i) == this._path._lastOriX && f == this._path._lastOriY || y.addPoint(d, f);
        }, e.quadraticCurveTo = function(t, e, i, n) {
            for (var r = Gt.I.getBezierPoints([ this._path._lastOriX, this._path._lastOriY, t, e, i, n ], 30, 2), s = 0, a = r.length / 2; s < a; s++) this.lineTo(r[2 * s], r[2 * s + 1]);
            this.lineTo(i, n);
        }, e.mixRGBandAlpha = function(t) {
            return this._mixRGBandAlpha(t, this._shader2D.ALPHA);
        }, e._mixRGBandAlpha = function(t, e) {
            if (e >= 1) return t;
            var i = (4278190080 & t) >>> 24;
            return 0 != i ? i *= e : i = 255 * e, 16777215 & t | i << 24;
        }, e.strokeRect = function(t, e, i, n, r) {
            if (this.lineWidth > 0) {
                var s = this.mixRGBandAlpha(this.strokeStyle._color.numColor), a = this.lineWidth / 2;
                this._fillRect(t - a, e - a, i + this.lineWidth, this.lineWidth, s), this._fillRect(t - a, e - a + n, i + this.lineWidth, this.lineWidth, s), 
                this._fillRect(t - a, e + a, this.lineWidth, n - this.lineWidth, s), this._fillRect(t - a + i, e + a, this.lineWidth, n - this.lineWidth, s);
            }
        }, e.clip = function() {}, e.drawParticle = function(t, e, i) {
            i.x = t, i.y = e, this._submits[this._submits._length++] = i;
        }, e._getPath = function() {
            return this._path || (this._path = new M());
        }, e._fillTexture_h = function(t, e, i, n, r, s, a, o) {
            for (var h = s, u = Math.floor(o / n), l = o % n, c = 0; c < u; c++) this._inner_drawTexture(t, e, h, a, n, r, this._curMat, i, 1, !1), 
            h += n;
            if (l > 0) {
                var _ = i[2] - i[0], d = i[0] + _ * (l / n), f = Context.tmpuv1;
                f[0] = i[0], f[1] = i[1], f[2] = d, f[3] = i[3], f[4] = d, f[5] = i[5], f[6] = i[6], 
                f[7] = i[7], this._inner_drawTexture(t, e, h, a, l, r, this._curMat, f, 1, !1);
            }
        }, e._fillTexture_v = function(t, e, i, n, r, s, a, o) {
            for (var h = a, u = Math.floor(o / r), l = o % r, c = 0; c < u; c++) this._inner_drawTexture(t, e, s, h, n, r, this._curMat, i, 1, !1), 
            h += r;
            if (l > 0) {
                var _ = i[7] - i[1], d = i[1] + _ * (l / r), f = Context.tmpuv1;
                f[0] = i[0], f[1] = i[1], f[2] = i[2], f[3] = i[3], f[4] = i[4], f[5] = d, f[6] = i[6], 
                f[7] = d, this._inner_drawTexture(t, e, s, h, n, l, this._curMat, f, 1, !1);
            }
        }, e.drawTextureWithSizeGrid = function(t, e, i, n, r, s, a, o) {
            if (t._getSource()) {
                e += a, i += o;
                var h = t.uv, u = t.bitmap.width, l = t.bitmap.height, c = s[0], _ = s[3], d = c / l, f = _ / u, p = s[1], m = s[2], g = p / u, v = m / l, x = s[4], y = !1;
                if (n == u && (_ = p = 0), r == l && (c = m = 0), _ + p > n) {
                    var T = n;
                    y = !0, n = _ + p, this.save(), this.clipRect(0 + e, 0 + i, T, r);
                }
                var b = t.bitmap.id, C = this._curMat, S = this._tempUV, w = h[0], M = h[1], A = h[4], R = h[5], L = w, E = M, D = A, I = R;
                if (_ && c && (D = w + f, I = M + d, S[0] = w, S[1] = M, S[2] = D, S[3] = M, S[4] = D, 
                S[5] = I, S[6] = w, S[7] = I, this._inner_drawTexture(t, b, e, i, _, c, C, S, 1, !1)), 
                p && c && (L = A - g, E = M, D = A, I = M + d, S[0] = L, S[1] = E, S[2] = D, S[3] = E, 
                S[4] = D, S[5] = I, S[6] = L, S[7] = I, this._inner_drawTexture(t, b, n - p + e, 0 + i, p, c, C, S, 1, !1)), 
                _ && m && (L = w, E = R - v, D = w + f, I = R, S[0] = L, S[1] = E, S[2] = D, S[3] = E, 
                S[4] = D, S[5] = I, S[6] = L, S[7] = I, this._inner_drawTexture(t, b, 0 + e, r - m + i, _, m, C, S, 1, !1)), 
                p && m && (L = A - g, E = R - v, D = A, I = R, S[0] = L, S[1] = E, S[2] = D, S[3] = E, 
                S[4] = D, S[5] = I, S[6] = L, S[7] = I, this._inner_drawTexture(t, b, n - p + e, r - m + i, p, m, C, S, 1, !1)), 
                c && (L = w + f, E = M, D = A - g, I = M + d, S[0] = L, S[1] = E, S[2] = D, S[3] = E, 
                S[4] = D, S[5] = I, S[6] = L, S[7] = I, x ? this._fillTexture_h(t, b, S, t.width - _ - p, c, _ + e, i, n - _ - p) : this._inner_drawTexture(t, b, _ + e, i, n - _ - p, c, C, S, 1, !1)), 
                m && (L = w + f, E = R - v, D = A - g, I = R, S[0] = L, S[1] = E, S[2] = D, S[3] = E, 
                S[4] = D, S[5] = I, S[6] = L, S[7] = I, x ? this._fillTexture_h(t, b, S, t.width - _ - p, m, _ + e, r - m + i, n - _ - p) : this._inner_drawTexture(t, b, _ + e, r - m + i, n - _ - p, m, C, S, 1, !1)), 
                _ && (L = w, E = M + d, D = w + f, I = R - v, S[0] = L, S[1] = E, S[2] = D, S[3] = E, 
                S[4] = D, S[5] = I, S[6] = L, S[7] = I, x ? this._fillTexture_v(t, b, S, _, t.height - c - m, e, c + i, r - c - m) : this._inner_drawTexture(t, b, e, c + i, _, r - c - m, C, S, 1, !1)), 
                p && (L = A - g, E = M + d, D = A, I = R - v, S[0] = L, S[1] = E, S[2] = D, S[3] = E, 
                S[4] = D, S[5] = I, S[6] = L, S[7] = I, x ? this._fillTexture_v(t, b, S, p, t.height - c - m, n - p + e, c + i, r - c - m) : this._inner_drawTexture(t, b, n - p + e, c + i, p, r - c - m, C, S, 1, !1)), 
                L = w + f, E = M + d, D = A - g, I = R - v, S[0] = L, S[1] = E, S[2] = D, S[3] = E, 
                S[4] = D, S[5] = I, S[6] = L, S[7] = I, x) {
                    var P = Context.tmpUVRect;
                    P[0] = L, P[1] = E, P[2] = D - L, P[3] = I - E, this._fillTexture(t, t.width - _ - p, t.height - c - m, P, _ + e, c + i, n - _ - p, r - c - m, "repeat", 0, 0);
                } else this._inner_drawTexture(t, b, _ + e, c + i, n - _ - p, r - c - m, C, S, 1, !1);
                y && this.restore();
            }
        }, s(0, e, "textAlign", function() {
            return this._other.textAlign;
        }, function(t) {
            this._other.textAlign === t || (this._other = this._other.make(), h.save(this, 32768, this._other, !1), 
            this._other.textAlign = t);
        }), s(0, e, "lineJoin", function() {
            return null;
        }, function(t) {}), s(0, e, "fillStyle", function() {
            return this._shader2D.fillStyle;
        }, function(t) {
            this._shader2D.fillStyle.equal(t) || (h.save(this, 2, this._shader2D, !1), this._shader2D.fillStyle = Mt.create(t), 
            this._submitKey.other = -this._shader2D.fillStyle.toInt());
        }), s(0, e, "lineCap", function() {
            return null;
        }, function(t) {}), s(0, e, "miterLimit", function() {
            return null;
        }, function(t) {}), s(0, e, "strokeStyle", function() {
            return this._shader2D.strokeStyle;
        }, function(t) {
            this._shader2D.strokeStyle.equal(t) || (h.save(this, 512, this._shader2D, !1), this._shader2D.strokeStyle = Mt.create(t), 
            this._submitKey.other = -this._shader2D.strokeStyle.toInt());
        }), s(0, e, "globalCompositeOperation", function() {
            return _e.NAMES[this._nBlendType];
        }, function(t) {
            var e = _e.TOINT[t];
            null == e || this._nBlendType === e || (h.save(this, 65536, this, !0), this._curSubmit = u.RENDERBASE, 
            this._nBlendType = e);
        }), s(0, e, "globalAlpha", function() {
            return this._shader2D.ALPHA;
        }, function(t) {
            (t = Math.floor(1e3 * t) / 1e3) != this._shader2D.ALPHA && (h.save(this, 1, this._shader2D, !1), 
            this._shader2D.ALPHA = t);
        }), s(0, e, "asBitmap", null, function(t) {
            if (t) {
                if (this._targets || (this._targets = new di(this._width, this._height, 1, -1)), 
                !this._width || !this._height) throw Error("asBitmap no size!");
            } else this._targets && this._targets.destroy(), this._targets = null;
        }), s(0, e, "textBaseline", function() {
            return this._other.textBaseline;
        }, function(t) {
            this._other.textBaseline === t || (this._other = this._other.make(), h.save(this, 16384, this._other, !1), 
            this._other.textBaseline = t);
        }), s(0, e, "lineWidth", function() {
            return this._other.lineWidth;
        }, function(t) {
            this._other.lineWidth === t || (this._other = this._other.make(), h.save(this, 256, this._other, !1), 
            this._other.lineWidth = t);
        }), s(0, e, "font", null, function(t) {
            this._other = this._other.make(), h.save(this, 8, this._other, !1);
        }), s(0, e, "canvas", function() {
            return this._canvas;
        }), Context.__init__ = function() {
            Context.MAXCLIPRECT = new mt(0, 0, 99999999, 99999999), t.DEFAULT = new t();
        }, Context.set2DRenderConfig = function() {
            var t = Dt.instance;
            nt.setBlend(t, !0), nt.setBlendFunc(t, 1, 771), nt.setDepthTest(t, !1), nt.setCullFace(t, !1), 
            nt.setDepthMask(t, !0), nt.setFrontFace(t, 2305), t.viewport(0, 0, ft.width, ft.height);
        }, Context.ENUM_TEXTALIGN_DEFAULT = 0, Context.ENUM_TEXTALIGN_CENTER = 1, Context.ENUM_TEXTALIGN_RIGHT = 2, 
        Context._SUBMITVBSIZE = 32e3, Context._MAXSIZE = 99999999, Context._MAXVERTNUM = 65535, 
        Context.MAXCLIPRECT = null, Context._COUNT = 0, Context.SEGNUM = 32, Context._contextcount = 0, 
        Context.PI2 = 2 * Math.PI, Context._clipID_Gen = 0, n(Context, [ "_textRender", function() {
            return this._textRender = new S();
        }, "tmpuv1", function() {
            return this.tmpuv1 = [ 0, 0, 0, 0, 0, 0, 0, 0 ];
        }, "tmpUV", function() {
            return this.tmpUV = [ 0, 0, 0, 0, 0, 0, 0, 0 ];
        }, "tmpUVRect", function() {
            return this.tmpUVRect = [ 0, 0, 0, 0 ];
        } ]), Context.__init$ = function() {
            t = function() {
                function ContextParams() {
                    this.lineWidth = 1, this.textAlign = null, this.textBaseline = null;
                }
                r(ContextParams, "");
                var t = ContextParams.prototype;
                return t.clear = function() {
                    this.lineWidth = 1, this.textAlign = this.textBaseline = null;
                }, t.make = function() {
                    return this === ContextParams.DEFAULT ? new ContextParams() : this;
                }, ContextParams.DEFAULT = null, ContextParams;
            }();
        }, Context;
    }(), ct = function() {
        function BlurFilterGLRender() {}
        r(BlurFilterGLRender, "laya.filters.BlurFilterGLRender");
        var t = BlurFilterGLRender.prototype;
        return t.render = function(t, e, i, n, r) {
            var s = H.create(1, 0);
            this.setShaderInfo(s, r, t.width, t.height), e.drawTarget(t, 0, 0, i, n, st.EMPTY.identity(), s);
        }, t.setShaderInfo = function(t, e, i, n) {
            t.defines.add(16);
            var r = t;
            BlurFilterGLRender.blurinfo[0] = i, BlurFilterGLRender.blurinfo[1] = n, r.blurInfo = BlurFilterGLRender.blurinfo;
            var s = e.strength / 3, a = s * s;
            e.strength_sig2_2sig2_gauss1[0] = e.strength, e.strength_sig2_2sig2_gauss1[1] = a, 
            e.strength_sig2_2sig2_gauss1[2] = 2 * a, e.strength_sig2_2sig2_gauss1[3] = 1 / (2 * Math.PI * a), 
            r.strength_sig2_2sig2_gauss1 = e.strength_sig2_2sig2_gauss1;
        }, n(BlurFilterGLRender, [ "blurinfo", function() {
            return this.blurinfo = new Array(2);
        } ]), BlurFilterGLRender;
    }(), _t = function() {
        function CONST3D2D() {}
        return r(CONST3D2D, "laya.webgl.utils.CONST3D2D"), CONST3D2D.BYTES_PE = 4, CONST3D2D.BYTES_PIDX = 2, 
        CONST3D2D.defaultMatrix4 = [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ], CONST3D2D.defaultMinusYMatrix4 = [ 1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ], 
        CONST3D2D.uniformMatrix3 = [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0 ], CONST3D2D._TMPARRAY = [], 
        CONST3D2D._OFFSETX = 0, CONST3D2D._OFFSETY = 0, CONST3D2D;
    }(), dt = function() {
        function CharRenderInfo() {
            this.char = "", this.tex = null, this.deleted = !1, this.pos = 0, this.width = 0, 
            this.height = 0, this.bmpWidth = 0, this.bmpHeight = 0, this.orix = 0, this.oriy = 0, 
            this.touchTick = 0, this.isSpace = !1, this.uv = new Array(8);
        }
        return r(CharRenderInfo, "laya.webgl.text.CharRenderInfo"), CharRenderInfo.prototype.touch = function() {
            var t = w.loopCount;
            this.touchTick != t && this.tex.touchRect(this, t), this.touchTick = t;
        }, CharRenderInfo;
    }(), ft = (function() {
        function QuickTestTool() {
            this._renderType = 0, this._repaint = 0, this._x = NaN, this._y = NaN;
        }
        r(QuickTestTool, "laya.layagl.QuickTestTool");
        var t = QuickTestTool.prototype;
        t.render = function(t, e, i) {
            QuickTestTool._addType(this._renderType), QuickTestTool.showRenderTypeInfo(this._renderType), 
            E.renders[this._renderType]._fun(this, t, e + this._x, i + this._y), this._repaint = 0;
        }, t._stageRender = function(t, e, n) {
            QuickTestTool._countStart(), QuickTestTool._PreStageRender.call(i.stage, t, e, n), 
            QuickTestTool._countEnd();
        }, QuickTestTool.getMCDName = function(t) {
            return QuickTestTool._typeToNameDic[t];
        }, QuickTestTool.showRenderTypeInfo = function(t, e) {
            if (void 0 === e && (e = !1), e || !QuickTestTool.showedDic[t]) {
                if (QuickTestTool.showedDic[t] = !0, !QuickTestTool._rendertypeToStrDic[t]) {
                    var i = [], n = 0;
                    for (n = 1; n <= t; ) n & t && i.push(QuickTestTool.getMCDName(n & t)), n <<= 1;
                    QuickTestTool._rendertypeToStrDic[t] = i.join(",");
                }
                console.log("cmd:", QuickTestTool._rendertypeToStrDic[t]);
            }
        }, QuickTestTool.__init__ = function() {
            QuickTestTool._typeToNameDic[1] = "ALPHA", QuickTestTool._typeToNameDic[2] = "TRANSFORM", 
            QuickTestTool._typeToNameDic[256] = "TEXTURE", QuickTestTool._typeToNameDic[512] = "GRAPHICS", 
            QuickTestTool._typeToNameDic[4096] = "ONECHILD", QuickTestTool._typeToNameDic[8192] = "CHILDS", 
            QuickTestTool._typeToNameDic[3] = "TRANSFORM|ALPHA", QuickTestTool._typeToNameDic[8] = "CANVAS", 
            QuickTestTool._typeToNameDic[4] = "BLEND", QuickTestTool._typeToNameDic[16] = "FILTERS", 
            QuickTestTool._typeToNameDic[32] = "MASK", QuickTestTool._typeToNameDic[64] = "CLIP", 
            QuickTestTool._typeToNameDic[1024] = "LAYAGL3D";
        }, QuickTestTool._countStart = function() {
            var t;
            for (t in QuickTestTool._countDic) QuickTestTool._countDic[t] = 0;
        }, QuickTestTool._countEnd = function() {
            QuickTestTool._i++, QuickTestTool._i > 60 && (QuickTestTool.showCountInfo(), QuickTestTool._i = 0);
        }, QuickTestTool._addType = function(t) {
            QuickTestTool._countDic[t] ? QuickTestTool._countDic[t] += 1 : QuickTestTool._countDic[t] = 1;
        }, QuickTestTool.showCountInfo = function() {
            var t;
            for (t in console.log("==================="), QuickTestTool._countDic) console.log("count:" + QuickTestTool._countDic[t]), 
            QuickTestTool.showRenderTypeInfo(t, !0);
        }, QuickTestTool.enableQuickTest = function() {
            QuickTestTool.__init__(), Ke.prototype.render = QuickTestTool.prototype.render, 
            QuickTestTool._PreStageRender = ai.prototype.render, ai.prototype.render = QuickTestTool.prototype._stageRender;
        }, QuickTestTool.showedDic = {}, QuickTestTool._rendertypeToStrDic = {}, QuickTestTool._typeToNameDic = {}, 
        QuickTestTool._PreStageRender = null, QuickTestTool._countDic = {}, QuickTestTool._i = 0;
    }(), function() {
        function RenderState2D() {}
        return r(RenderState2D, "laya.webgl.utils.RenderState2D"), RenderState2D.mat2MatArray = function(t, e) {
            var i = t, n = e;
            return n[0] = i.a, n[1] = i.b, n[2] = RenderState2D.EMPTYMAT4_ARRAY[2], n[3] = RenderState2D.EMPTYMAT4_ARRAY[3], 
            n[4] = i.c, n[5] = i.d, n[6] = RenderState2D.EMPTYMAT4_ARRAY[6], n[7] = RenderState2D.EMPTYMAT4_ARRAY[7], 
            n[8] = RenderState2D.EMPTYMAT4_ARRAY[8], n[9] = RenderState2D.EMPTYMAT4_ARRAY[9], 
            n[10] = RenderState2D.EMPTYMAT4_ARRAY[10], n[11] = RenderState2D.EMPTYMAT4_ARRAY[11], 
            n[12] = i.tx, n[13] = i.ty, n[14] = RenderState2D.EMPTYMAT4_ARRAY[14], n[15] = RenderState2D.EMPTYMAT4_ARRAY[15], 
            e;
        }, RenderState2D.restoreTempArray = function() {
            RenderState2D.TEMPMAT4_ARRAY[0] = 1, RenderState2D.TEMPMAT4_ARRAY[1] = 0, RenderState2D.TEMPMAT4_ARRAY[4] = 0, 
            RenderState2D.TEMPMAT4_ARRAY[5] = 1, RenderState2D.TEMPMAT4_ARRAY[12] = 0, RenderState2D.TEMPMAT4_ARRAY[13] = 0;
        }, RenderState2D.clear = function() {
            RenderState2D.worldScissorTest = !1, RenderState2D.worldAlpha = 1;
        }, RenderState2D._MAXSIZE = 99999999, RenderState2D.EMPTYMAT4_ARRAY = [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ], 
        RenderState2D.TEMPMAT4_ARRAY = [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ], 
        RenderState2D.worldMatrix4 = RenderState2D.TEMPMAT4_ARRAY, RenderState2D.matWVP = null, 
        RenderState2D.worldAlpha = 1, RenderState2D.worldScissorTest = !1, RenderState2D.worldShaderDefines = null, 
        RenderState2D.worldFilters = null, RenderState2D.width = 0, RenderState2D.height = 0, 
        n(RenderState2D, [ "worldMatrix", function() {
            return this.worldMatrix = new st();
        } ]), RenderState2D;
    }()), pt = function() {
        var t, e;
        function SceneUtils() {}
        return r(SceneUtils, "laya.utils.SceneUtils"), SceneUtils.getBindFun = function(t) {
            var e = SceneUtils._funMap.get(t);
            if (null == e) {
                var n = '"' + t + '"', r = "(function(data){if(data==null)return;with(data){try{\nreturn " + (n = n.replace(/^"\${|}"$/g, "").replace(/\${/g, '"+').replace(/}/g, '+"')) + "\n}catch(e){}}})";
                e = i._runScript(r), SceneUtils._funMap.set(t, e);
            }
            return e;
        }, SceneUtils.createByData = function(t, i) {
            var n = e.create();
            if ((t = SceneUtils.createComp(i, t, t, null, n))._setBit(8, !0), t.hasOwnProperty("_idMap") && (t._idMap = n._idMap), 
            i.animations) {
                var r, s, a = [], o = i.animations, h = 0, u = o.length;
                for (h = 0; h < u; h++) {
                    switch (r = new ci(), s = o[h], r._setUp(n._idMap, s), t[s.name] = r, r._setControlNode(t), 
                    s.action) {
                      case 1:
                        r.play(0, !1);
                        break;

                      case 2:
                        r.play(0, !0);
                    }
                    a.push(r);
                }
                t._aniList = a;
            }
            return "Scene" === t._$componentType && t._width > 0 && null == i.props.hitTestPrior && !t.mouseThrough && (t.hitTestPrior = !0), 
            n.beginLoad(t), t;
        }, SceneUtils.createInitTool = function() {
            return e.create();
        }, SceneUtils.createComp = function(t, e, n, r, s) {
            if ("Scene3D" == t.type || "Sprite3D" == t.type) {
                var a = [], o = i.Utils3D._createSceneByJsonForMaker(t, a, s);
                return "Sprite3D" == t.type ? i.StaticBatchManager.combine(o, a) : i.StaticBatchManager.combine(null, a), 
                o;
            }
            if (!(e = e || SceneUtils.getCompInstance(t))) return t.props && t.props.runtime ? console.warn("runtime not found:" + t.props.runtime) : console.warn("can not create:" + t.type), 
            null;
            var h = t.child;
            if (h) for (var u = "List" == e._$componentType, l = 0, c = h.length; l < c; l++) {
                var _ = h[l];
                if (!e.hasOwnProperty("itemRender") || "render" != _.props.name && "render" !== _.props.renderType) if ("Graphic" == _.type) Lt._addGraphicsToSprite(_, e); else if (Lt._isDrawType(_.type)) Lt._addGraphicToSprite(_, e, !0); else {
                    if (u) {
                        var d = [], f = SceneUtils.createComp(_, null, n, d, s);
                        d.length && (f._$bindData = d);
                    } else f = SceneUtils.createComp(_, null, n, r, s);
                    "Script" == _.type ? f instanceof laya.components.Component ? e._addComponentInstance(f) : "owner" in f ? f.owner = e : "target" in f && (f.target = e) : "mask" == _.props.renderType || "mask" == _.props.name ? e.mask = f : f instanceof laya.display.Node && e.addChild(f);
                } else e.itemRender = _;
            }
            var p = t.props;
            for (var m in p) {
                var g = p[m];
                "string" == typeof g && (g.indexOf("@node:") >= 0 || g.indexOf("@Prefab:") >= 0) ? s && s.addNodeRef(e, m, g) : SceneUtils.setCompValue(e, m, g, n, r);
            }
            return e._afterInited && e._afterInited(), t.compId && s && s._idMap && (s._idMap[t.compId] = e), 
            e;
        }, SceneUtils.setCompValue = function(e, i, n, r, s) {
            if ("string" == typeof n && n.indexOf("${") > -1) {
                if (SceneUtils._sheet || (SceneUtils._sheet = Lt.getClass("laya.data.Table")), !SceneUtils._sheet) return void console.warn("Can not find class Sheet");
                if (s) s.push(e, i, n); else if (r) {
                    -1 == n.indexOf("].") && (n = n.replace(".", "[0]."));
                    var a, o, h = new t(e, i, n);
                    h.exe(r);
                    for (var u = n.replace(/\[.*?\]\./g, "."); null != (a = SceneUtils._parseWatchData.exec(u)); ) {
                        for (var l = a[1]; null != (o = SceneUtils._parseKeyWord.exec(l)); ) {
                            var c = o[0], _ = r._watchMap[c] || (r._watchMap[c] = []);
                            _.push(h), SceneUtils._sheet.I.notifer.on(c, r, r.changeData, [ c ]);
                        }
                        (_ = r._watchMap[l] || (r._watchMap[l] = [])).push(h), SceneUtils._sheet.I.notifer.on(l, r, r.changeData, [ l ]);
                    }
                }
            } else "var" === i && r ? r[n] = e : e[i] = "true" === n || "false" !== n && n;
        }, SceneUtils.getCompInstance = function(t) {
            if ("UIView" == t.type && t.props && t.props.pageData) return SceneUtils.createByData(null, t.props.pageData);
            var e = t.props && t.props.runtime || t.type, i = Lt.getClass(e);
            if (!i) throw "Can not find class " + e;
            if ("Script" === t.type && i.prototype._doAwake) {
                var n = N.createByClass(i);
                return n._destroyed = !1, n;
            }
            return t.props && t.props.hasOwnProperty("renderType") && "instance" == t.props.renderType ? (i.instance || (i.instance = new i()), 
            i.instance) : new i();
        }, SceneUtils._sheet = null, n(SceneUtils, [ "_funMap", function() {
            return this._funMap = new St();
        }, "_parseWatchData", function() {
            return this._parseWatchData = /\${(.*?)}/g;
        }, "_parseKeyWord", function() {
            return this._parseKeyWord = /[a-zA-Z_][a-zA-Z0-9_]*(?:(?:\.[a-zA-Z_][a-zA-Z0-9_]*)+)/g;
        } ]), SceneUtils.__init$ = function() {
            t = function() {
                function DataWatcher(t, e, i) {
                    this.comp = null, this.prop = null, this.value = null, this.comp = t, this.prop = e, 
                    this.value = i;
                }
                return r(DataWatcher, ""), DataWatcher.prototype.exe = function(t) {
                    var e = SceneUtils.getBindFun(this.value);
                    this.comp[this.prop] = e.call(this, t);
                }, DataWatcher;
            }(), e = function() {
                function InitTool() {
                    this._nodeRefList = null, this._initList = null, this._loadList = null, this._idMap = null, 
                    this._scene = null;
                }
                r(InitTool, "");
                var t = InitTool.prototype;
                return t.reset = function() {
                    this._nodeRefList = null, this._initList = null, this._idMap = null, this._loadList = null, 
                    this._scene = null;
                }, t.recover = function() {
                    this.reset(), N.recover("InitTool", this);
                }, t.addLoadRes = function(t, e) {
                    this._loadList || (this._loadList = []), e ? this._loadList.push({
                        url: t,
                        type: e
                    }) : this._loadList.push(t);
                }, t.addNodeRef = function(t, e, i) {
                    this._nodeRefList || (this._nodeRefList = []), this._nodeRefList.push([ t, e, i ]), 
                    i.indexOf("@Prefab:") >= 0 && this.addLoadRes(i.replace("@Prefab:", ""), "prefab");
                }, t.setNodeRef = function() {
                    if (this._nodeRefList) if (this._idMap) {
                        var t, e, i = 0;
                        for (t = this._nodeRefList.length, i = 0; i < t; i++) (e = this._nodeRefList[i])[0][e[1]] = this.getReferData(e[2]);
                        this._nodeRefList = null;
                    } else this._nodeRefList = null;
                }, t.getReferData = function(t) {
                    if (t.indexOf("@Prefab:") >= 0) return Ie.getRes(t.replace("@Prefab:", ""));
                    if (t.indexOf("@arr:") >= 0) {
                        var e, i, n, r = 0;
                        for (i = (e = (t = t.replace("@arr:", "")).split(",")).length, r = 0; r < i; r++) n = e[r], 
                        e[r] = n ? this._idMap[n.replace("@node:", "")] : null;
                        return e;
                    }
                    return this._idMap[t.replace("@node:", "")];
                }, t.addInitItem = function(t) {
                    this._initList || (this._initList = []), this._initList.push(t);
                }, t.doInits = function() {
                    this._initList && (this._initList = null);
                }, t.finish = function() {
                    this.setNodeRef(), this.doInits(), this._scene._setBit(8, !1), this._scene.parent && this._scene.parent.activeInHierarchy && this._scene.active && this._scene._processActive(), 
                    this._scene.event("onViewCreated"), this.recover();
                }, t.beginLoad = function(t) {
                    this._scene = t, !this._loadList || this._loadList.length < 1 ? this.finish() : i.loader.load(this._loadList, g.create(this, this.finish));
                }, InitTool.create = function() {
                    var t = N.getItemByClass("InitTool", InitTool);
                    return t._idMap = [], t;
                }, InitTool;
            }();
        }, SceneUtils;
    }(), mt = function() {
        function Rectangle(t, e, i, n) {
            void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === n && (n = 0), 
            this.x = t, this.y = e, this.width = i, this.height = n;
        }
        r(Rectangle, "laya.maths.Rectangle");
        var t = Rectangle.prototype;
        return t.setTo = function(t, e, i, n) {
            return this.x = t, this.y = e, this.width = i, this.height = n, this;
        }, t.reset = function() {
            return this.x = this.y = this.width = this.height = 0, this;
        }, t.recover = function() {
            this != Rectangle.TEMP && this != Rectangle.EMPTY ? N.recover("Rectangle", this.reset()) : console.log("recover Temp or Empty:", this);
        }, t.copyFrom = function(t) {
            return this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height, 
            this;
        }, t.contains = function(t, e) {
            return !(this.width <= 0 || this.height <= 0) && (t >= this.x && t < this.right && e >= this.y && e < this.bottom);
        }, t.intersects = function(t) {
            return !(t.x > this.x + this.width || t.x + t.width < this.x || t.y > this.y + this.height || t.y + t.height < this.y);
        }, t.intersection = function(t, e) {
            return this.intersects(t) ? (e || (e = new Rectangle()), e.x = Math.max(this.x, t.x), 
            e.y = Math.max(this.y, t.y), e.width = Math.min(this.right, t.right) - e.x, e.height = Math.min(this.bottom, t.bottom) - e.y, 
            e) : null;
        }, t.union = function(t, e) {
            return e || (e = new Rectangle()), this.clone(e), t.width <= 0 || t.height <= 0 ? e : (e.addPoint(t.x, t.y), 
            e.addPoint(t.right, t.bottom), this);
        }, t.clone = function(t) {
            return t || (t = new Rectangle()), t.x = this.x, t.y = this.y, t.width = this.width, 
            t.height = this.height, t;
        }, t.toString = function() {
            return this.x + "," + this.y + "," + this.width + "," + this.height;
        }, t.equals = function(t) {
            return !(!t || t.x !== this.x || t.y !== this.y || t.width !== this.width || t.height !== this.height);
        }, t.addPoint = function(t, e) {
            return this.x > t && (this.width += this.x - t, this.x = t), this.y > e && (this.height += this.y - e, 
            this.y = e), this.width < t - this.x && (this.width = t - this.x), this.height < e - this.y && (this.height = e - this.y), 
            this;
        }, t._getBoundPoints = function() {
            var t = Rectangle._temB;
            return t.length = 0, 0 == this.width || 0 == this.height ? t : (t.push(this.x, this.y, this.x + this.width, this.y, this.x, this.y + this.height, this.x + this.width, this.y + this.height), 
            t);
        }, t.isEmpty = function() {
            return this.width <= 0 || this.height <= 0;
        }, s(0, t, "right", function() {
            return this.x + this.width;
        }), s(0, t, "bottom", function() {
            return this.y + this.height;
        }), Rectangle.create = function() {
            return N.getItemByClass("Rectangle", Rectangle);
        }, Rectangle._getBoundPointS = function(t, e, i, n) {
            var r = Rectangle._temA;
            return r.length = 0, 0 == i || 0 == n ? r : (r.push(t, e, t + i, e, t, e + n, t + i, e + n), 
            r);
        }, Rectangle._getWrapRec = function(t, e) {
            if (!t || t.length < 1) return e ? e.setTo(0, 0, 0, 0) : Rectangle.TEMP.setTo(0, 0, 0, 0);
            e = e || laya.maths.Rectangle.create();
            var i, n, r, s, a, o = t.length, h = Xt.TEMP;
            for (r = a = -(n = s = 99999), i = 0; i < o; i += 2) h.x = t[i], h.y = t[i + 1], 
            n = n < h.x ? n : h.x, s = s < h.y ? s : h.y, r = r > h.x ? r : h.x, a = a > h.y ? a : h.y;
            return e.setTo(n, s, r - n, a - s);
        }, Rectangle.EMPTY = new Rectangle(), Rectangle.TEMP = new Rectangle(), Rectangle._temB = [], 
        Rectangle._temA = [], Rectangle;
    }(), gt = function() {
        function KeyBoardManager() {}
        return r(KeyBoardManager, "laya.events.KeyBoardManager"), KeyBoardManager.__init__ = function() {
            KeyBoardManager._addEvent("keydown"), KeyBoardManager._addEvent("keypress"), KeyBoardManager._addEvent("keyup");
        }, KeyBoardManager._addEvent = function(t) {
            It.document.addEventListener(t, function(e) {
                laya.events.KeyBoardManager._dispatch(e, t);
            }, !0);
        }, KeyBoardManager._dispatch = function(t, e) {
            if (KeyBoardManager.enabled) {
                KeyBoardManager._event._stoped = !1, KeyBoardManager._event.nativeEvent = t, KeyBoardManager._event.keyCode = t.keyCode || t.which || t.charCode, 
                "keydown" === e ? KeyBoardManager._pressKeys[KeyBoardManager._event.keyCode] = !0 : "keyup" === e && (KeyBoardManager._pressKeys[KeyBoardManager._event.keyCode] = null);
                for (var n = i.stage.focus && null != i.stage.focus.event && i.stage.focus.displayedInStage ? i.stage.focus : i.stage, r = n; r; ) r.event(e, KeyBoardManager._event.setTo(e, r, n)), 
                r = r.parent;
            }
        }, KeyBoardManager.hasKeyDown = function(t) {
            return KeyBoardManager._pressKeys[t];
        }, KeyBoardManager._pressKeys = {}, KeyBoardManager.enabled = !0, n(KeyBoardManager, [ "_event", function() {
            return this._event = new C();
        } ]), KeyBoardManager;
    }(), vt = function() {
        function LayaGLRunner() {}
        return r(LayaGLRunner, "laya.layagl.LayaGLRunner"), LayaGLRunner.uploadShaderUniforms = function(t, e, i, n) {
            for (var r = i._data, s = e.getArrayData(), a = 0, o = 0, h = s.length; o < h; o++) {
                var u = s[o];
                if (n || -1 !== u.textureID) {
                    var l = r[u.dataOffset];
                    null != l && (a += u.fun.call(u.caller, u, l));
                }
            }
            return a;
        }, LayaGLRunner.uploadCustomUniform = function(t, e, i, n) {
            var r = 0, s = e[i];
            return s && null != n && (r += s.fun.call(s.caller, s, n)), r;
        }, LayaGLRunner.uploadShaderUniformsForNative = function(t, e, i) {
            var n = 0;
            i._runtimeCopyValues.length > 0 && (n = 1);
            var r = i._data;
            return t.uploadShaderUniforms(e, r, n);
        }, LayaGLRunner;
    }(), xt = function() {
        function DrawPathCmd() {}
        r(DrawPathCmd, "laya.display.cmd.DrawPathCmd");
        var t = DrawPathCmd.prototype;
        return t.recover = function() {
            this.paths = null, this.brush = null, this.pen = null, N.recover("DrawPathCmd", this);
        }, t.run = function(t, e, i) {
            t._drawPath(this.x + e, this.y + i, this.paths, this.brush, this.pen);
        }, s(0, t, "cmdID", function() {
            return "DrawPath";
        }), DrawPathCmd.create = function(t, e, i, n, r) {
            var s = N.getItemByClass("DrawPathCmd", DrawPathCmd);
            return s.x = t, s.y = e, s.paths = i, s.brush = n, s.pen = r, s;
        }, DrawPathCmd.ID = "DrawPath", DrawPathCmd;
    }(), yt = function() {
        function BufferStateBase() {
            this._nativeVertexArrayObject = null, this._bindedIndexBuffer = null, this._nativeVertexArrayObject = Dt.instance.createVertexArray();
        }
        r(BufferStateBase, "laya.webgl.BufferStateBase");
        var t = BufferStateBase.prototype;
        return t.bind = function() {
            BufferStateBase._curBindedBufferState !== this && (Dt.instance.bindVertexArray(this._nativeVertexArrayObject), 
            BufferStateBase._curBindedBufferState = this);
        }, t.unBind = function() {
            if (BufferStateBase._curBindedBufferState !== this) throw "BufferState: must call bind() function first.";
            Dt.instance.bindVertexArray(null), BufferStateBase._curBindedBufferState = null;
        }, t.bindForNative = function() {
            Dt.instance.bindVertexArray(this._nativeVertexArrayObject), BufferStateBase._curBindedBufferState = this;
        }, t.unBindForNative = function() {
            Dt.instance.bindVertexArray(null), BufferStateBase._curBindedBufferState = null;
        }, t.destroy = function() {
            Dt.instance.deleteVertexArray(this._nativeVertexArrayObject);
        }, BufferStateBase._curBindedBufferState = null, BufferStateBase;
    }(), Tt = function() {
        function SaveCmd() {}
        r(SaveCmd, "laya.display.cmd.SaveCmd");
        var t = SaveCmd.prototype;
        return t.recover = function() {
            N.recover("SaveCmd", this);
        }, t.run = function(t, e, i) {
            t.save();
        }, s(0, t, "cmdID", function() {
            return "Save";
        }), SaveCmd.create = function() {
            return N.getItemByClass("SaveCmd", SaveCmd);
        }, SaveCmd.ID = "Save", SaveCmd;
    }(), bt = function() {
        var e;
        function LocalStorage() {}
        return r(LocalStorage, "laya.net.LocalStorage"), LocalStorage.__init__ = function() {
            return LocalStorage._baseClass || (LocalStorage._baseClass = e, e.init()), LocalStorage.items = LocalStorage._baseClass.items, 
            LocalStorage.support = LocalStorage._baseClass.support, LocalStorage.support;
        }, LocalStorage.setItem = function(t, e) {
            LocalStorage._baseClass.setItem(t, e);
        }, LocalStorage.getItem = function(t) {
            return LocalStorage._baseClass.getItem(t);
        }, LocalStorage.setJSON = function(t, e) {
            LocalStorage._baseClass.setJSON(t, e);
        }, LocalStorage.getJSON = function(t) {
            return LocalStorage._baseClass.getJSON(t);
        }, LocalStorage.removeItem = function(t) {
            LocalStorage._baseClass.removeItem(t);
        }, LocalStorage.clear = function() {
            LocalStorage._baseClass.clear();
        }, LocalStorage._baseClass = null, LocalStorage.items = null, LocalStorage.support = !1, 
        LocalStorage.__init$ = function() {
            e = function() {
                function Storage() {}
                return r(Storage, ""), Storage.init = function() {
                    try {
                        Storage.support = !0, Storage.items = t.localStorage, Storage.setItem("laya", "1"), 
                        Storage.removeItem("laya");
                    } catch (t) {
                        Storage.support = !1;
                    }
                    Storage.support || console.log("LocalStorage is not supprot or browser is private mode.");
                }, Storage.setItem = function(t, e) {
                    try {
                        Storage.support && Storage.items.setItem(t, e);
                    } catch (t) {
                        console.warn("set localStorage failed", t);
                    }
                }, Storage.getItem = function(t) {
                    return Storage.support ? Storage.items.getItem(t) : null;
                }, Storage.setJSON = function(t, e) {
                    try {
                        Storage.support && Storage.items.setItem(t, JSON.stringify(e));
                    } catch (t) {
                        console.warn("set localStorage failed", t);
                    }
                }, Storage.getJSON = function(t) {
                    return JSON.parse(Storage.support ? Storage.items.getItem(t) : null);
                }, Storage.removeItem = function(t) {
                    Storage.support && Storage.items.removeItem(t);
                }, Storage.clear = function() {
                    Storage.support && Storage.items.clear();
                }, Storage.items = null, Storage.support = !1, Storage;
            }();
        }, LocalStorage;
    }(), Ct = function() {
        function WebGL() {}
        return r(WebGL, "laya.webgl.WebGL"), WebGL._uint8ArraySlice = function() {
            for (var t = this.length, e = new Uint8Array(this.length), i = 0; i < t; i++) e[i] = this[i];
            return e;
        }, WebGL._float32ArraySlice = function() {
            for (var t = this.length, e = new Float32Array(this.length), i = 0; i < t; i++) e[i] = this[i];
            return e;
        }, WebGL._uint16ArraySlice = function(t) {
            var e, i = arguments, n = 0, r = 0;
            if (0 === i.length) for (n = this.length, e = new Uint16Array(n), r = 0; r < n; r++) e[r] = this[r]; else if (2 === i.length) {
                var s = i[0], a = i[1];
                if (a > s) for (n = a - s, e = new Uint16Array(n), r = s; r < a; r++) e[r - s] = this[r]; else e = new Uint16Array(0);
            }
            return e;
        }, WebGL._nativeRender_enable = function() {
            WebGL.isNativeRender_enable || (WebGL.isNativeRender_enable = !0, nt.__init_native(), 
            ni.prototype.uploadTexture2D = function(t) {
                var e = nt;
                e.bindTexture(laya.webgl.WebGL.mainContext, e.TEXTURE_2D, t);
            }, ft.width = It.window.innerWidth, ft.height = It.window.innerHeight, le.measureText = function(e, i) {
                return t.conchTextCanvas.font = i, t.conchTextCanvas.measureText(e);
            }, le.enableNative = function() {
                Rt.supportWebGLPlusRendering && (vt.uploadShaderUniforms = vt.uploadShaderUniformsForNative, 
                Bt = t.GLCommandEncoder, Dt = t.LayaGLContext);
                var e = ai;
                e.prototype.render = e.prototype.renderToNative;
            }, le.clear = function(t) {
                lt.set2DRenderConfig();
                var e = o.create(t).arrColor, i = Dt.instance;
                e && i.clearColor(e[0], e[1], e[2], e[3]), i.clear(17664), ft.clear();
            }, le.drawToCanvas = le.drawToTexture = function(t, e, i, n, r, s) {
                r -= t.x, s -= t.y, r |= 0, s |= 0, i |= 0, n |= 0;
                var a = new si(!1), o = a.getContext("2d");
                return a.size(i, n), o.asBitmap = !0, o._targets.start(), E.renders[e]._fun(t, o, r, s), 
                o.flush(), o._targets.end(), o._targets.restore(), a;
            }, di.prototype._uv = di.flipyuv, Object.defineProperty(di.prototype, "uv", {
                get: function() {
                    return this._uv;
                },
                set: function(t) {
                    this._uv = t;
                }
            }), si.prototype.getTexture = function() {
                return this._texture || (this._texture = this.context._targets, this._texture.uv = di.flipyuv, 
                this._texture.bitmap = this._texture), this._texture;
            });
        }, WebGL.enable = function() {
            return !0;
        }, WebGL.inner_enable = function() {
            return Float32Array.prototype.slice || (Float32Array.prototype.slice = WebGL._float32ArraySlice), 
            Uint16Array.prototype.slice || (Uint16Array.prototype.slice = WebGL._uint16ArraySlice), 
            Uint8Array.prototype.slice || (Uint8Array.prototype.slice = WebGL._uint8ArraySlice), 
            Rt.isConchApp && WebGL._nativeRender_enable(), !0;
        }, WebGL.onStageResize = function(t, e) {
            null != WebGL.mainContext && (WebGL.mainContext.viewport(0, 0, t, e), ft.width = t, 
            ft.height = e);
        }, WebGL.mainContext = null, WebGL.shaderHighPrecision = !1, WebGL._isWebGL2 = !1, 
        WebGL.isNativeRender_enable = !1, WebGL;
    }(), St = function() {
        function WeakObject() {
            this._obj = null, this._obj = WeakObject.supportWeakMap ? new It.window.WeakMap() : {}, 
            WeakObject.supportWeakMap || WeakObject._maps.push(this);
        }
        r(WeakObject, "laya.utils.WeakObject");
        var t = WeakObject.prototype;
        return t.set = function(t, e) {
            if (null != t) if (WeakObject.supportWeakMap) {
                var i = t;
                "string" != typeof t && "number" != typeof t || (i = WeakObject._keys[t]) || (i = WeakObject._keys[t] = {
                    k: t
                }), this._obj.set(i, e);
            } else "string" == typeof t || "number" == typeof t ? this._obj[t] = e : (t.$_GID || (t.$_GID = ie.getGID()), 
            this._obj[t.$_GID] = e);
        }, t.get = function(t) {
            if (null == t) return null;
            if (WeakObject.supportWeakMap) {
                var e = "string" == typeof t || "number" == typeof t ? WeakObject._keys[t] : t;
                return e ? this._obj.get(e) : null;
            }
            return "string" == typeof t || "number" == typeof t ? this._obj[t] : this._obj[t.$_GID];
        }, t.del = function(t) {
            if (null != t) if (WeakObject.supportWeakMap) {
                var e = "string" == typeof t || "number" == typeof t ? WeakObject._keys[t] : t;
                if (!e) return;
                this._obj.delete(e);
            } else "string" == typeof t || "number" == typeof t ? delete this._obj[t] : delete this._obj[this._obj.$_GID];
        }, t.has = function(t) {
            if (null == t) return !1;
            if (WeakObject.supportWeakMap) {
                var e = "string" == typeof t || "number" == typeof t ? WeakObject._keys[t] : t;
                return this._obj.has(e);
            }
            return "string" == typeof t || "number" == typeof t ? null != this._obj[t] : null != this._obj[this._obj.$_GID];
        }, WeakObject.__init__ = function() {
            WeakObject.supportWeakMap = null != It.window.WeakMap, WeakObject.supportWeakMap || i.systemTimer.loop(WeakObject.delInterval, null, WeakObject.clearCache);
        }, WeakObject.clearCache = function() {
            for (var t = 0, e = WeakObject._maps.length; t < e; t++) {
                WeakObject._maps[t]._obj = {};
            }
        }, WeakObject.supportWeakMap = !1, WeakObject.delInterval = 6e5, WeakObject._keys = {}, 
        WeakObject._maps = [], n(WeakObject, [ "I", function() {
            return this.I = new WeakObject();
        } ]), WeakObject;
    }(), wt = function() {
        function BoundsStyle() {}
        r(BoundsStyle, "laya.display.css.BoundsStyle");
        var t = BoundsStyle.prototype;
        return t.reset = function() {
            return this.bounds && this.bounds.recover(), this.userBounds && this.userBounds.recover(), 
            this.bounds = null, this.userBounds = null, this.temBM = null, this;
        }, t.recover = function() {
            N.recover("BoundsStyle", this.reset());
        }, BoundsStyle.create = function() {
            return N.getItemByClass("BoundsStyle", BoundsStyle);
        }, BoundsStyle;
    }(), Mt = function() {
        function DrawStyle(t) {
            this._color = null, this.setValue(t);
        }
        r(DrawStyle, "laya.webgl.canvas.DrawStyle");
        var t = DrawStyle.prototype;
        return t.setValue = function(t) {
            this._color = t ? t instanceof laya.utils.ColorUtils ? t : o.create(t) : o.create("#000000");
        }, t.reset = function() {
            this._color = o.create("#000000");
        }, t.toInt = function() {
            return this._color.numColor;
        }, t.equal = function(t) {
            return "string" == typeof t ? this._color.strColor === t : t instanceof laya.utils.ColorUtils && this._color.numColor === t.numColor;
        }, t.toColorStr = function() {
            return this._color.strColor;
        }, DrawStyle.create = function(t) {
            if (t) {
                var e = t instanceof laya.utils.ColorUtils ? t : o.create(t);
                return e._drawStyle || (e._drawStyle = new DrawStyle(t));
            }
            return DrawStyle.DEFAULT;
        }, n(DrawStyle, [ "DEFAULT", function() {
            return this.DEFAULT = new DrawStyle("#000000");
        } ]), DrawStyle;
    }(), At = function() {
        function System() {}
        return r(System, "laya.system.System"), System.changeDefinition = function(t, e) {
            i[t] = e;
            var n = t + "=classObj";
            i._runScript(n);
        }, System.__init__ = function() {}, System;
    }(), Rt = (function() {
        function DrawParticleCmd() {}
        r(DrawParticleCmd, "laya.display.cmd.DrawParticleCmd");
        var t = DrawParticleCmd.prototype;
        t.recover = function() {
            this._templ = null, N.recover("DrawParticleCmd", this);
        }, t.run = function(t, e, i) {
            t.drawParticle(e, i, this._templ);
        }, s(0, t, "cmdID", function() {
            return "DrawParticleCmd";
        }), DrawParticleCmd.create = function(t) {
            var e = N.getItemByClass("DrawParticleCmd", DrawParticleCmd);
            return e._templ = t, e;
        }, DrawParticleCmd.ID = "DrawParticleCmd";
    }(), function() {
        function Render(t, e) {
            this._timeId = 0, Render._mainCanvas.source.id = "layaCanvas", Render._mainCanvas.source.width = t, 
            Render._mainCanvas.source.height = e, laya.renders.Render.isConchApp ? It.document.body.appendChild(Render._mainCanvas.source) : It.onKGMiniGame || It.container.appendChild(Render._mainCanvas.source), 
            this.initRender(Render._mainCanvas, t, e), It.window.requestAnimationFrame(function loop(t) {
                i.stage._loop();
                It.window.requestAnimationFrame(loop);
            }), i.stage.on("visibilitychange", this, this._onVisibilitychange);
        }
        r(Render, "laya.renders.Render");
        var e = Render.prototype;
        return e._onVisibilitychange = function() {
            i.stage.isVisibility ? 0 != this._timeId && It.window.clearInterval(this._timeId) : this._timeId = It.window.setInterval(this._enterFrame, 1e3);
        }, e.initRender = function(t, e, i) {
            var n = Dt.instance = Ct.mainContext = function(t) {
                var e, i = [ "webgl2", "webgl", "experimental-webgl", "webkit-3d", "moz-webgl" ];
                se.useWebGL2 || i.shift();
                for (var n = 0; n < i.length; n++) {
                    try {
                        e = t.getContext(i[n], {
                            stencil: se.isStencil,
                            alpha: se.isAlpha,
                            antialias: se.isAntialias,
                            premultipliedAlpha: se.premultipliedAlpha,
                            preserveDrawingBuffer: se.preserveDrawingBuffer
                        });
                    } catch (t) {}
                    if (e) return "webgl2" === i[n] && (Ct._isWebGL2 = !0), new Dt(), e;
                }
                return null;
            }(laya.renders.Render._mainCanvas.source);
            if (!n) return !1;
            t.size(e, i), nt.__init__(n), lt.__init__(), u.__init__();
            var r = new lt();
            r.isMain = !0, laya.renders.Render._context = r, t._setContext(r), Ct.shaderHighPrecision = !1;
            try {
                n.getShaderPrecisionFormat(35632, 36338).precision ? Ct.shaderHighPrecision = !0 : Ct.shaderHighPrecision = !1;
            } catch (t) {}
            return Dt.instance = n, At.__init__(), Le.__init__(), H.__init__(), F.__init__(), 
            Pe.__int__(n), _e._init_(n), !0;
        }, e._enterFrame = function(t) {
            i.stage._loop();
        }, s(1, Render, "context", function() {
            return Render._context;
        }), s(1, Render, "canvas", function() {
            return Render._mainCanvas.source;
        }), Render._context = null, Render._mainCanvas = null, Render.supportWebGLPlusCulling = !1, 
        Render.supportWebGLPlusAnimation = !1, Render.supportWebGLPlusRendering = !1, Render.isConchApp = !1, 
        Render.is3DMode = !1, Render.__init$ = function() {
            Render.isConchApp = null != t.conch, Render.isConchApp && (Render.supportWebGLPlusCulling = !0, 
            Render.supportWebGLPlusAnimation = !0, Render.supportWebGLPlusRendering = !0);
        }, Render;
    }()), Lt = function() {
        function ClassUtils() {}
        return r(ClassUtils, "laya.utils.ClassUtils"), ClassUtils.regClass = function(t, e) {
            ClassUtils._classMap[t] = e;
        }, ClassUtils.regShortClassName = function(t) {
            for (var e = 0; e < t.length; e++) {
                var i = t[e], n = i.name;
                ClassUtils._classMap[n] = i;
            }
        }, ClassUtils.getRegClass = function(t) {
            return ClassUtils._classMap[t];
        }, ClassUtils.getClass = function(t) {
            var e = ClassUtils._classMap[t] || t;
            return "string" == typeof e ? i.__classmap[e] || i[t] : e;
        }, ClassUtils.getInstance = function(t) {
            var e = ClassUtils.getClass(t);
            return e ? new e() : (console.warn("[error] Undefined class:", t), null);
        }, ClassUtils.createByJson = function(t, e, i, n, r) {
            "string" == typeof t && (t = JSON.parse(t));
            var s = t.props;
            if (!e && !(e = r ? r.runWith(t) : ClassUtils.getInstance(s.runtime || t.type))) return null;
            var a = t.child;
            if (a) for (var o = 0, h = a.length; o < h; o++) {
                var u = a[o];
                if ("render" !== u.props.name && "render" !== u.props.renderType || !e._$set_itemRender) if ("Graphic" == u.type) ClassUtils._addGraphicsToSprite(u, e); else if (ClassUtils._isDrawType(u.type)) ClassUtils._addGraphicToSprite(u, e, !0); else {
                    var l = ClassUtils.createByJson(u, null, i, n, r);
                    "Script" === u.type ? l.hasOwnProperty("owner") ? l.owner = e : l.hasOwnProperty("target") && (l.target = e) : "mask" == u.props.renderType ? e.mask = l : e.addChild(l);
                } else e.itemRender = u;
            }
            if (s) for (var c in s) {
                var _ = s[c];
                "var" === c && i ? i[_] = e : _ instanceof Array && "function" == typeof e[c] ? e[c].apply(e, _) : e[c] = _;
            }
            return n && t.customProps && n.runWith([ e, t ]), e.created && e.created(), e;
        }, ClassUtils._addGraphicsToSprite = function(t, e) {
            var i = t.child;
            if (i && !(i.length < 1)) {
                var n = ClassUtils._getGraphicsFromSprite(t, e), r = 0, s = 0;
                t.props && (r = ClassUtils._getObjVar(t.props, "x", 0), s = ClassUtils._getObjVar(t.props, "y", 0)), 
                0 != r && 0 != s && n.translate(r, s);
                var a, o = 0;
                for (a = i.length, o = 0; o < a; o++) ClassUtils._addGraphicToGraphics(i[o], n);
                0 != r && 0 != s && n.translate(-r, -s);
            }
        }, ClassUtils._addGraphicToSprite = function(t, e, i) {
            void 0 === i && (i = !1);
            var n = i ? ClassUtils._getGraphicsFromSprite(t, e) : e.graphics;
            ClassUtils._addGraphicToGraphics(t, n);
        }, ClassUtils._getGraphicsFromSprite = function(t, e) {
            if (!t || !t.props) return e.graphics;
            var i = t.props.renderType;
            if ("hit" === i || "unHit" === i) {
                var n = e._style.hitArea || (e.hitArea = new ve());
                n[i] || (n[i] = new $t());
                var r = n[i];
            }
            return r || (r = e.graphics), r;
        }, ClassUtils._getTransformData = function(t) {
            var e;
            (t.hasOwnProperty("pivotX") || t.hasOwnProperty("pivotY")) && (e = e || new st()).translate(-ClassUtils._getObjVar(t, "pivotX", 0), -ClassUtils._getObjVar(t, "pivotY", 0));
            var i = ClassUtils._getObjVar(t, "scaleX", 1), n = ClassUtils._getObjVar(t, "scaleY", 1), r = ClassUtils._getObjVar(t, "rotation", 0);
            ClassUtils._getObjVar(t, "skewX", 0), ClassUtils._getObjVar(t, "skewY", 0);
            return 1 == i && 1 == n && 0 == r || ((e = e || new st()).scale(i, n), e.rotate(.0174532922222222 * r)), 
            e;
        }, ClassUtils._addGraphicToGraphics = function(t, e) {
            var i, n;
            if ((i = t.props) && (n = ClassUtils.DrawTypeDic[t.type])) {
                var r = e, s = ClassUtils._getParams(i, n[1], n[2], n[3]), a = ClassUtils._tM;
                (a || 1 != ClassUtils._alpha) && (r.save(), a && r.transform(a), 1 != ClassUtils._alpha && r.alpha(ClassUtils._alpha)), 
                r[n[0]].apply(r, s), (a || 1 != ClassUtils._alpha) && r.restore();
            }
        }, ClassUtils._adptLineData = function(t) {
            return t[2] = parseFloat(t[0]) + parseFloat(t[2]), t[3] = parseFloat(t[1]) + parseFloat(t[3]), 
            t;
        }, ClassUtils._adptTextureData = function(t) {
            return t[0] = Ie.getRes(t[0]), t;
        }, ClassUtils._adptLinesData = function(t) {
            return t[2] = ClassUtils._getPointListByStr(t[2]), t;
        }, ClassUtils._isDrawType = function(t) {
            return "Image" !== t && ClassUtils.DrawTypeDic.hasOwnProperty(t);
        }, ClassUtils._getParams = function(t, e, i, n) {
            void 0 === i && (i = 0);
            var r = ClassUtils._temParam;
            r.length = e.length;
            var s, a, o = 0;
            for (s = e.length, o = 0; o < s; o++) r[o] = ClassUtils._getObjVar(t, e[o][0], e[o][1]);
            return ClassUtils._alpha = ClassUtils._getObjVar(t, "alpha", 1), (a = ClassUtils._getTransformData(t)) ? (i || (i = 0), 
            a.translate(r[i], r[i + 1]), r[i] = r[i + 1] = 0, ClassUtils._tM = a) : ClassUtils._tM = null, 
            n && ClassUtils[n] && (r = ClassUtils[n](r)), r;
        }, ClassUtils._getPointListByStr = function(t) {
            var e, i = t.split(","), n = 0;
            for (e = i.length, n = 0; n < e; n++) i[n] = parseFloat(i[n]);
            return i;
        }, ClassUtils._getObjVar = function(t, e, i) {
            return t.hasOwnProperty(e) ? t[e] : i;
        }, ClassUtils._temParam = [], ClassUtils._classMap = {
            Sprite: Ke,
            Scene: hi,
            Text: ei,
            Animation: "laya.display.Animation",
            Skeleton: "laya.ani.bone.Skeleton",
            Particle2D: "laya.particle.Particle2D",
            div: "laya.html.dom.HTMLDivParser",
            p: "laya.html.dom.HTMLElement",
            img: "laya.html.dom.HTMLImageElement",
            span: "laya.html.dom.HTMLElement",
            br: "laya.html.dom.HTMLBrElement",
            style: "laya.html.dom.HTMLStyleElement",
            font: "laya.html.dom.HTMLElement",
            a: "laya.html.dom.HTMLElement",
            "#text": "laya.html.dom.HTMLElement",
            link: "laya.html.dom.HTMLLinkElement"
        }, ClassUtils._tM = null, ClassUtils._alpha = NaN, n(ClassUtils, [ "DrawTypeDic", function() {
            return this.DrawTypeDic = {
                Rect: [ "drawRect", [ [ "x", 0 ], [ "y", 0 ], [ "width", 0 ], [ "height", 0 ], [ "fillColor", null ], [ "lineColor", null ], [ "lineWidth", 1 ] ] ],
                Circle: [ "drawCircle", [ [ "x", 0 ], [ "y", 0 ], [ "radius", 0 ], [ "fillColor", null ], [ "lineColor", null ], [ "lineWidth", 1 ] ] ],
                Pie: [ "drawPie", [ [ "x", 0 ], [ "y", 0 ], [ "radius", 0 ], [ "startAngle", 0 ], [ "endAngle", 0 ], [ "fillColor", null ], [ "lineColor", null ], [ "lineWidth", 1 ] ] ],
                Image: [ "drawTexture", [ [ "x", 0 ], [ "y", 0 ], [ "width", 0 ], [ "height", 0 ] ] ],
                Texture: [ "drawTexture", [ [ "skin", null ], [ "x", 0 ], [ "y", 0 ], [ "width", 0 ], [ "height", 0 ] ], 1, "_adptTextureData" ],
                FillTexture: [ "fillTexture", [ [ "skin", null ], [ "x", 0 ], [ "y", 0 ], [ "width", 0 ], [ "height", 0 ], [ "repeat", null ] ], 1, "_adptTextureData" ],
                FillText: [ "fillText", [ [ "text", "" ], [ "x", 0 ], [ "y", 0 ], [ "font", null ], [ "color", null ], [ "textAlign", null ] ], 1 ],
                Line: [ "drawLine", [ [ "x", 0 ], [ "y", 0 ], [ "toX", 0 ], [ "toY", 0 ], [ "lineColor", null ], [ "lineWidth", 0 ] ], 0, "_adptLineData" ],
                Lines: [ "drawLines", [ [ "x", 0 ], [ "y", 0 ], [ "points", "" ], [ "lineColor", null ], [ "lineWidth", 0 ] ], 0, "_adptLinesData" ],
                Curves: [ "drawCurves", [ [ "x", 0 ], [ "y", 0 ], [ "points", "" ], [ "lineColor", null ], [ "lineWidth", 0 ] ], 0, "_adptLinesData" ],
                Poly: [ "drawPoly", [ [ "x", 0 ], [ "y", 0 ], [ "points", "" ], [ "fillColor", null ], [ "lineColor", null ], [ "lineWidth", 1 ] ], 0, "_adptLinesData" ]
            };
        } ]), ClassUtils;
    }(), Et = function() {
        function GraphicsBounds() {
            this._cacheBoundsType = !1;
        }
        r(GraphicsBounds, "laya.display.GraphicsBounds");
        var t = GraphicsBounds.prototype;
        return t.destroy = function() {
            this._graphics = null, this._cacheBoundsType = !1, this._temp && (this._temp.length = 0), 
            this._rstBoundPoints && (this._rstBoundPoints.length = 0), this._bounds && this._bounds.recover(), 
            this._bounds = null, N.recover("GraphicsBounds", this);
        }, t.reset = function() {
            this._temp && (this._temp.length = 0);
        }, t.getBounds = function(t) {
            return void 0 === t && (t = !1), (!this._bounds || !this._temp || this._temp.length < 1 || t != this._cacheBoundsType) && (this._bounds = mt._getWrapRec(this.getBoundPoints(t), this._bounds)), 
            this._cacheBoundsType = t, this._bounds;
        }, t.getBoundPoints = function(t) {
            return void 0 === t && (t = !1), (!this._temp || this._temp.length < 1 || t != this._cacheBoundsType) && (this._temp = this._getCmdPoints(t)), 
            this._cacheBoundsType = t, this._rstBoundPoints = ie.copyArray(this._rstBoundPoints, this._temp);
        }, t._getCmdPoints = function(t) {
            void 0 === t && (t = !1);
            Rt._context;
            var e, i = this._graphics.cmds;
            if ((e = this._temp || (this._temp = [])).length = 0, i || null == this._graphics._one || (GraphicsBounds._tempCmds.length = 0, 
            GraphicsBounds._tempCmds.push(this._graphics._one), i = GraphicsBounds._tempCmds), 
            !i) return e;
            var n = GraphicsBounds._tempMatrixArrays;
            n.length = 0;
            var r = GraphicsBounds._initMatrix;
            r.identity();
            for (var s, a, o = GraphicsBounds._tempMatrix, h = 0, u = i.length; h < u; h++) switch ((s = i[h]).cmdID) {
              case "Alpha":
                n.push(r), r = r.clone();
                break;

              case "Restore":
                r = n.pop();
                break;

              case "Scale":
                o.identity(), o.translate(-s.pivotX, -s.pivotY), o.scale(s.scaleX, s.scaleY), o.translate(s.pivotX, s.pivotY), 
                this._switchMatrix(r, o);
                break;

              case "Rotate":
                o.identity(), o.translate(-s.pivotX, -s.pivotY), o.rotate(s.angle), o.translate(s.pivotX, s.pivotY), 
                this._switchMatrix(r, o);
                break;

              case "Translate":
                o.identity(), o.translate(s.tx, s.ty), this._switchMatrix(r, o);
                break;

              case "Transform":
                o.identity(), o.translate(-s.pivotX, -s.pivotY), o.concat(s.matrix), o.translate(s.pivotX, s.pivotY), 
                this._switchMatrix(r, o);
                break;

              case "DrawImage":
              case "FillTexture":
                GraphicsBounds._addPointArrToRst(e, mt._getBoundPointS(s.x, s.y, s.width, s.height), r);
                break;

              case "DrawTexture":
                r.copyTo(o), s.matrix && o.concat(s.matrix), GraphicsBounds._addPointArrToRst(e, mt._getBoundPointS(s.x, s.y, s.width, s.height), o);
                break;

              case "DrawImage":
                if (a = s.texture, t) s.width && s.height ? GraphicsBounds._addPointArrToRst(e, mt._getBoundPointS(s.x, s.y, s.width, s.height), r) : GraphicsBounds._addPointArrToRst(e, mt._getBoundPointS(s.x, s.y, a.width, a.height), r); else {
                    var l = (s.width || a.sourceWidth) / a.width, c = (s.height || a.sourceHeight) / a.height, _ = l * a.sourceWidth, d = c * a.sourceHeight, f = a.offsetX > 0 ? a.offsetX : 0, p = a.offsetY > 0 ? a.offsetY : 0;
                    f *= l, p *= c, GraphicsBounds._addPointArrToRst(e, mt._getBoundPointS(s.x - f, s.y - p, _, d), r);
                }
                break;

              case "FillTexture":
                s.width && s.height ? GraphicsBounds._addPointArrToRst(e, mt._getBoundPointS(s.x, s.y, s.width, s.height), r) : (a = s.texture, 
                GraphicsBounds._addPointArrToRst(e, mt._getBoundPointS(s.x, s.y, a.width, a.height), r));
                break;

              case "DrawTexture":
                var m;
                s.matrix ? (r.copyTo(o), o.concat(s.matrix), m = o) : m = r, t ? s.width && s.height ? GraphicsBounds._addPointArrToRst(e, mt._getBoundPointS(s.x, s.y, s.width, s.height), m) : (a = s.texture, 
                GraphicsBounds._addPointArrToRst(e, mt._getBoundPointS(s.x, s.y, a.width, a.height), m)) : (a = s.texture, 
                l = (s.width || a.sourceWidth) / a.width, c = (s.height || a.sourceHeight) / a.height, 
                _ = l * a.sourceWidth, d = c * a.sourceHeight, f = a.offsetX > 0 ? a.offsetX : 0, 
                p = a.offsetY > 0 ? a.offsetY : 0, f *= l, p *= c, GraphicsBounds._addPointArrToRst(e, mt._getBoundPointS(s.x - f, s.y - p, _, d), m));
                break;

              case "DrawRect":
                GraphicsBounds._addPointArrToRst(e, mt._getBoundPointS(s.x, s.y, s.width, s.height), r);
                break;

              case "DrawCircle":
                GraphicsBounds._addPointArrToRst(e, mt._getBoundPointS(s.x - s.radius, s.y - s.radius, s.radius + s.radius, s.radius + s.radius), r);
                break;

              case "DrawLine":
                GraphicsBounds._tempPoints.length = 0;
                var g;
                g = .5 * s.lineWidth, s.fromX == s.toX ? GraphicsBounds._tempPoints.push(s.fromX + g, s.fromY, s.toX + g, s.toY, s.fromX - g, s.fromY, s.toX - g, s.toY) : s.fromY == s.toY ? GraphicsBounds._tempPoints.push(s.fromX, s.fromY + g, s.toX, s.toY + g, s.fromX, s.fromY - g, s.toX, s.toY - g) : GraphicsBounds._tempPoints.push(s.fromX, s.fromY, s.toX, s.toY), 
                GraphicsBounds._addPointArrToRst(e, GraphicsBounds._tempPoints, r);
                break;

              case "DrawCurves":
                GraphicsBounds._addPointArrToRst(e, Gt.I.getBezierPoints(s.points), r, s.x, s.y);
                break;

              case "DrawLines":
              case "DrawPoly":
                GraphicsBounds._addPointArrToRst(e, s.points, r, s.x, s.y);
                break;

              case "DrawPath":
                GraphicsBounds._addPointArrToRst(e, this._getPathPoints(s.paths), r, s.x, s.y);
                break;

              case "DrawPie":
                GraphicsBounds._addPointArrToRst(e, this._getPiePoints(s.x, s.y, s.radius, s.startAngle, s.endAngle), r);
            }
            return e.length > 200 ? e = ie.copyArray(e, mt._getWrapRec(e)._getBoundPoints()) : e.length > 8 && (e = X.scanPList(e)), 
            e;
        }, t._switchMatrix = function(t, e) {
            e.concat(t), e.copyTo(t);
        }, t._getPiePoints = function(t, e, i, n, r) {
            var s = GraphicsBounds._tempPoints;
            GraphicsBounds._tempPoints.length = 0;
            var a = Math.PI / 180, o = r - n;
            if (o >= 360 || o <= -360) return s.push(t - i, e - i), s.push(t + i, e - i), s.push(t + i, e + i), 
            s.push(t - i, e + i), s;
            s.push(t, e);
            var h = o % 360;
            h < 0 && (h += 360);
            var u = n + h, l = n * a, c = u * a;
            s.push(t + i * Math.cos(l), e + i * Math.sin(l)), s.push(t + i * Math.cos(c), e + i * Math.sin(c));
            for (var _ = 90 * Math.ceil(n / 90), d = 90 * Math.floor(u / 90), f = _; f <= d; f += 90) {
                var p = f * a;
                s.push(t + i * Math.cos(p), e + i * Math.sin(p));
            }
            return s;
        }, t._getPathPoints = function(t) {
            var e, i, n = 0, r = GraphicsBounds._tempPoints;
            for (r.length = 0, e = t.length, n = 0; n < e; n++) (i = t[n]).length > 1 && (r.push(i[1], i[2]), 
            i.length > 3 && r.push(i[3], i[4]));
            return r;
        }, GraphicsBounds.create = function() {
            return N.getItemByClass("GraphicsBounds", GraphicsBounds);
        }, GraphicsBounds._addPointArrToRst = function(t, e, i, n, r) {
            void 0 === n && (n = 0), void 0 === r && (r = 0);
            var s, a = 0;
            for (s = e.length, a = 0; a < s; a += 2) GraphicsBounds._addPointToRst(t, e[a] + n, e[a + 1] + r, i);
        }, GraphicsBounds._addPointToRst = function(t, e, i, n) {
            var r = Xt.TEMP;
            r.setTo(e || 0, i || 0), n.transformPoint(r), t.push(r.x, r.y);
        }, GraphicsBounds._tempPoints = [], GraphicsBounds._tempMatrixArrays = [], GraphicsBounds._tempCmds = [], 
        n(GraphicsBounds, [ "_tempMatrix", function() {
            return this._tempMatrix = new st();
        }, "_initMatrix", function() {
            return this._initMatrix = new st();
        } ]), GraphicsBounds;
    }(), Dt = function() {
        function LayaGL() {}
        r(LayaGL, "laya.layagl.LayaGL");
        var t = LayaGL.prototype;
        return t.createCommandEncoder = function(t, e, i) {
            return void 0 === t && (t = 128), void 0 === e && (e = 64), void 0 === i && (i = !1), 
            new Bt(this, t, e, i);
        }, t.beginCommandEncoding = function(t) {}, t.endCommandEncoding = function() {}, 
        t.matrix4x4Multiply = function(t, e, i) {}, t.evaluateClipDatasRealTime = function(t, e, i, n) {}, 
        LayaGL.getFrameCount = function() {
            return 0;
        }, LayaGL.syncBufferToRenderThread = function(t, e) {
            void 0 === e && (e = 0);
        }, LayaGL.createArrayBufferRef = function(t, e, i) {}, LayaGL.createArrayBufferRefs = function(t, e, i, n) {}, 
        LayaGL.EXECUTE_JS_THREAD_BUFFER = 0, LayaGL.EXECUTE_RENDER_THREAD_BUFFER = 1, LayaGL.EXECUTE_COPY_TO_RENDER = 2, 
        LayaGL.EXECUTE_COPY_TO_RENDER3D = 3, LayaGL.ARRAY_BUFFER_TYPE_DATA = 0, LayaGL.ARRAY_BUFFER_TYPE_CMD = 1, 
        LayaGL.ARRAY_BUFFER_REF_REFERENCE = 0, LayaGL.ARRAY_BUFFER_REF_COPY = 1, LayaGL.UPLOAD_SHADER_UNIFORM_TYPE_ID = 0, 
        LayaGL.UPLOAD_SHADER_UNIFORM_TYPE_DATA = 1, LayaGL.instance = null, LayaGL;
    }(), It = function() {
        function Browser() {}
        return r(Browser, "laya.utils.Browser"), s(1, Browser, "pixelRatio", function() {
            if (Browser._pixelRatio < 0) if (Browser.__init__(), Browser.userAgent.indexOf("Mozilla/6.0(Linux; Android 6.0; HUAWEI NXT-AL10 Build/HUAWEINXT-AL10)") > -1) Browser._pixelRatio = 2; else {
                var t = Browser.context, e = t.backingStorePixelRatio || t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1;
                Browser._pixelRatio = (Browser._window.devicePixelRatio || 1) / e, Browser._pixelRatio < 1 && (Browser._pixelRatio = 1);
            }
            return Browser._pixelRatio;
        }), s(1, Browser, "height", function() {
            return Browser.__init__(), (i.stage && i.stage.canvasRotation ? Browser.clientWidth : Browser.clientHeight) * Browser.pixelRatio;
        }), s(1, Browser, "clientWidth", function() {
            return Browser.__init__(), Browser._window.innerWidth || Browser._document.body.clientWidth;
        }), s(1, Browser, "window", function() {
            return Browser._window || Browser.__init__();
        }), s(1, Browser, "clientHeight", function() {
            return Browser.__init__(), Browser._window.innerHeight || Browser._document.body.clientHeight || Browser._document.documentElement.clientHeight;
        }), s(1, Browser, "width", function() {
            return Browser.__init__(), (i.stage && i.stage.canvasRotation ? Browser.clientHeight : Browser.clientWidth) * Browser.pixelRatio;
        }), s(1, Browser, "container", function() {
            return Browser._container || (Browser.__init__(), Browser._container = Browser.createElement("div"), 
            Browser._container.id = "layaContainer", Browser._document.body.appendChild(Browser._container)), 
            Browser._container;
        }, function(t) {
            Browser._container = t;
        }), s(1, Browser, "document", function() {
            return Browser.__init__(), Browser._document;
        }), Browser.__init__ = function() {
            if (Browser._window) return Browser._window;
            var e = Browser._window = t, n = Browser._document = e.document, r = Browser.userAgent = e.navigator.userAgent, s = e._layalibs;
            if (s) {
                s.sort(function(t, e) {
                    return t.i - e.i;
                });
                for (var a = 0; a < s.length; a++) s[a].f(e, n, i);
            }
            r.indexOf("MiniGame") > -1 && Browser.window.hasOwnProperty("wx") && (laya.utils.Browser.window.hasOwnProperty("bl") ? i.BLMiniAdapter ? i.BLMiniAdapter.enable() : console.error("请先添加小游戏适配库,详细教程：https://ldc2.layabox.com/doc/?nav=zh-ts-5-0-0") : i.MiniAdpter ? i.MiniAdpter.enable() : console.error("请先添加小游戏适配库,详细教程：https://ldc2.layabox.com/doc/?nav=zh-ts-5-0-0")), 
            r.indexOf("SwanGame") > -1 && (i.BMiniAdapter ? i.BMiniAdapter.enable() : console.error("请先添加百度小游戏适配库,详细教程：https://ldc2.layabox.com/doc/?nav=zh-ts-5-0-0")), 
            "function" == typeof getApp && (i.KGMiniAdapter ? i.KGMiniAdapter.enable() : console.error("请先添加小米小游戏适配库,详细教程：https://ldc2.layabox.com/doc/?nav=zh-ts-5-0-0")), 
            r.indexOf("OPPO") > -1 && r.indexOf("MiniGame") > -1 && (i.QGMiniAdapter ? i.QGMiniAdapter.enable() : console.error("请先添加OPPO小游戏适配库")), 
            r.indexOf("VVGame") > -1 && (i.VVMiniAdapter ? i.VVMiniAdapter.enable() : console.error("请先添加VIVO小游戏适配库")), 
            r.indexOf("AlipayMiniGame") > -1 && (i.ALIMiniAdapter ? i.ALIMiniAdapter.enable() : console.error("请先添加VIVO小游戏适配库")), 
            e.trace = console.log, e.requestAnimationFrame = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function(t) {
                return e.setTimeout(t, 1e3 / 60);
            };
            var o = n.body.style;
            o.margin = 0, o.overflow = "hidden", o["-webkit-user-select"] = "none", o["-webkit-tap-highlight-color"] = "rgba(200,200,200,0)";
            for (var h = n.getElementsByTagName("meta"), u = 0, l = !1, c = "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"; u < h.length; ) {
                var _ = h[u];
                if ("viewport" == _.name) {
                    _.content = c, l = !0;
                    break;
                }
                u++;
            }
            l || laya.utils.Browser.window.hasOwnProperty("bl") || ((_ = n.createElement("meta")).name = "viewport", 
            _.content = c, n.getElementsByTagName("head")[0].appendChild(_)), Browser.onMobile = !!t.isConchApp || r.indexOf("Mobile") > -1, 
            Browser.onIOS = !!r.match(/\(i[^;]+;(U;)? CPU.+Mac OS X/), Browser.onIPhone = r.indexOf("iPhone") > -1, 
            Browser.onMac = r.indexOf("Mac OS X") > -1, Browser.onIPad = r.indexOf("iPad") > -1, 
            Browser.onAndroid = r.indexOf("Android") > -1 || r.indexOf("Adr") > -1, Browser.onWP = r.indexOf("Windows Phone") > -1, 
            Browser.onQQBrowser = r.indexOf("QQBrowser") > -1, Browser.onMQQBrowser = r.indexOf("MQQBrowser") > -1 || r.indexOf("Mobile") > -1 && r.indexOf("QQ") > -1, 
            Browser.onIE = !!e.ActiveXObject || "ActiveXObject" in e, Browser.onWeiXin = r.indexOf("MicroMessenger") > -1, 
            Browser.onSafari = r.indexOf("Safari") > -1, Browser.onPC = !Browser.onMobile, Browser.onMiniGame = r.indexOf("MiniGame") > -1, 
            Browser.onBDMiniGame = r.indexOf("SwanGame") > -1, r.indexOf("OPPO") > -1 && r.indexOf("MiniGame") > -1 && (Browser.onQGMiniGame = !0, 
            Browser.onMiniGame = !1), laya.utils.Browser.window.hasOwnProperty("bl") && r.indexOf("MiniGame") > -1 && (Browser.onBLMiniGame = !0, 
            Browser.onMiniGame = !1), Browser.onVVMiniGame = r.indexOf("VVGame") > -1, Browser.onLimixiu = r.indexOf("limixiu") > -1, 
            Browser.onKGMiniGame = r.indexOf("QuickGame") > -1, r.indexOf("AlipayMiniGame") > -1 && (Browser.onAlipayMiniGame = !0, 
            Browser.onMiniGame = !1), Browser.supportLocalStorage = bt.__init__(), Browser.supportWebAudio = xe.__init__(), 
            Rt._mainCanvas = new si(!0);
            var d = Rt._mainCanvas.source.style;
            d.position = "absolute", d.top = d.left = "0px", d.background = "#000000", Browser.canvas = new si(!0), 
            Browser.context = Browser.canvas.getContext("2d");
            var f = new si(!0);
            (laya.utils.Browser.onQGMiniGame || laya.utils.Browser.onVVMiniGame) && (f = Rt._mainCanvas);
            var p = [ "webgl", "experimental-webgl", "webkit-3d", "moz-webgl" ], m = null;
            for (u = 0; u < p.length; u++) {
                try {
                    m = f.source.getContext(p[u]);
                } catch (t) {}
                if (m) {
                    Browser._supportWebGL = !0;
                    break;
                }
            }
            return e;
        }, Browser.createElement = function(t) {
            return Browser.__init__(), Browser._document.createElement(t);
        }, Browser.getElementById = function(t) {
            return Browser.__init__(), Browser._document.getElementById(t);
        }, Browser.removeElement = function(t) {
            t && t.parentNode && t.parentNode.removeChild(t);
        }, Browser.now = function() {
            return Date.now();
        }, Browser.userAgent = null, Browser.onMobile = !1, Browser.onIOS = !1, Browser.onMac = !1, 
        Browser.onIPhone = !1, Browser.onIPad = !1, Browser.onAndroid = !1, Browser.onWP = !1, 
        Browser.onQQBrowser = !1, Browser.onMQQBrowser = !1, Browser.onSafari = !1, Browser.onIE = !1, 
        Browser.onWeiXin = !1, Browser.onPC = !1, Browser.onMiniGame = !1, Browser.onBDMiniGame = !1, 
        Browser.onVVMiniGame = !1, Browser.onKGMiniGame = !1, Browser.onQGMiniGame = !1, 
        Browser.onBLMiniGame = !1, Browser.onAlipayMiniGame = !1, Browser.onLimixiu = !1, 
        Browser.onFirefox = !1, Browser.onEdge = !1, Browser.supportWebAudio = !1, Browser.supportLocalStorage = !1, 
        Browser.canvas = null, Browser.context = null, Browser._window = null, Browser._document = null, 
        Browser._container = null, Browser._pixelRatio = -1, Browser._supportWebGL = !1, 
        Browser;
    }(), Pt = function() {
        function SaveTransform() {
            this._matrix = new st();
        }
        r(SaveTransform, "laya.webgl.canvas.save.SaveTransform");
        var t = SaveTransform.prototype;
        return i.imps(t, {
            "laya.webgl.canvas.save.ISaveData": !0
        }), t.isSaveMark = function() {
            return !1;
        }, t.restore = function(t) {
            t._curMat = this._savematrix, SaveTransform.POOL[SaveTransform.POOL._length++] = this;
        }, SaveTransform.save = function(t) {
            var e = t._saveMark;
            if (2048 != (2048 & e._saveuse)) {
                e._saveuse |= 2048;
                var i = SaveTransform.POOL, n = i._length > 0 ? i[--i._length] : new SaveTransform();
                n._savematrix = t._curMat, t._curMat = t._curMat.copyTo(n._matrix);
                var r = t._save;
                r[r._length++] = n;
            }
        }, SaveTransform.POOL = h._createArray(), SaveTransform;
    }(), Bt = function() {
        function CommandEncoder(t, e, i, n) {
            this._idata = [];
        }
        r(CommandEncoder, "laya.layagl.CommandEncoder");
        var t = CommandEncoder.prototype;
        return t.getArrayData = function() {
            return this._idata;
        }, t.getPtrID = function() {
            return 0;
        }, t.beginEncoding = function() {}, t.endEncoding = function() {}, t.clearEncoding = function() {
            this._idata.length = 0;
        }, t.getCount = function() {
            return this._idata.length;
        }, t.add_ShaderValue = function(t) {
            this._idata.push(t);
        }, t.addShaderUniform = function(t) {
            this.add_ShaderValue(t);
        }, CommandEncoder;
    }(), Ft = function() {
        function FillBorderTextCmd() {}
        r(FillBorderTextCmd, "laya.display.cmd.FillBorderTextCmd");
        var t = FillBorderTextCmd.prototype;
        return t.recover = function() {
            N.recover("FillBorderTextCmd", this);
        }, t.run = function(t, e, i) {
            t.fillBorderText(this.text, this.x + e, this.y + i, this.font, this.fillColor, this.borderColor, this.lineWidth, this.textAlign);
        }, s(0, t, "cmdID", function() {
            return "FillBorderText";
        }), FillBorderTextCmd.create = function(t, e, i, n, r, s, a, o) {
            var h = N.getItemByClass("FillBorderTextCmd", FillBorderTextCmd);
            return h.text = t, h.x = e, h.y = i, h.font = n, h.fillColor = r, h.borderColor = s, 
            h.lineWidth = a, h.textAlign = o, h;
        }, FillBorderTextCmd.ID = "FillBorderText", FillBorderTextCmd;
    }(), Gt = function() {
        function Bezier() {
            this._controlPoints = [ new Xt(), new Xt(), new Xt() ], this._calFun = this.getPoint2;
        }
        r(Bezier, "laya.maths.Bezier");
        var t = Bezier.prototype;
        return t._switchPoint = function(t, e) {
            var i = this._controlPoints.shift();
            i.setTo(t, e), this._controlPoints.push(i);
        }, t.getPoint2 = function(t, e) {
            var i = this._controlPoints[0], n = this._controlPoints[1], r = this._controlPoints[2], s = Math.pow(1 - t, 2) * i.x + 2 * t * (1 - t) * n.x + Math.pow(t, 2) * r.x, a = Math.pow(1 - t, 2) * i.y + 2 * t * (1 - t) * n.y + Math.pow(t, 2) * r.y;
            e.push(s, a);
        }, t.getPoint3 = function(t, e) {
            var i = this._controlPoints[0], n = this._controlPoints[1], r = this._controlPoints[2], s = this._controlPoints[3], a = Math.pow(1 - t, 3) * i.x + 3 * n.x * t * (1 - t) * (1 - t) + 3 * r.x * t * t * (1 - t) + s.x * Math.pow(t, 3), o = Math.pow(1 - t, 3) * i.y + 3 * n.y * t * (1 - t) * (1 - t) + 3 * r.y * t * t * (1 - t) + s.y * Math.pow(t, 3);
            e.push(a, o);
        }, t.insertPoints = function(t, e) {
            var i, n = NaN;
            for (i = 1 / (t = t > 0 ? t : 5), n = 0; n <= 1; n += i) this._calFun(n, e);
        }, t.getBezierPoints = function(t, e, i) {
            void 0 === e && (e = 5), void 0 === i && (i = 2);
            var n, r = 0;
            if ((n = t.length) < 2 * (i + 1)) return [];
            var s = [];
            switch (i) {
              case 2:
                this._calFun = this.getPoint2;
                break;

              case 3:
                this._calFun = this.getPoint3;
                break;

              default:
                return [];
            }
            for (;this._controlPoints.length <= i; ) this._controlPoints.push(Xt.create());
            for (r = 0; r < 2 * i; r += 2) this._switchPoint(t[r], t[r + 1]);
            for (r = 2 * i; r < n; r += 2) this._switchPoint(t[r], t[r + 1]), r / 2 % i == 0 && this.insertPoints(e, s);
            return s;
        }, n(Bezier, [ "I", function() {
            return this.I = new Bezier();
        } ]), Bezier;
    }(), Wt = function() {
        function Draw9GridTexture() {}
        r(Draw9GridTexture, "laya.display.cmd.Draw9GridTexture");
        var t = Draw9GridTexture.prototype;
        return t.recover = function() {
            this.texture._removeReference(), N.recover("Draw9GridTexture", this);
        }, t.run = function(t, e, i) {
            t.drawTextureWithSizeGrid(this.texture, this.x, this.y, this.width, this.height, this.sizeGrid, e, i);
        }, s(0, t, "cmdID", function() {
            return "Draw9GridTexture";
        }), Draw9GridTexture.create = function(t, e, i, n, r, s) {
            var a = N.getItemByClass("Draw9GridTexture", Draw9GridTexture);
            return a.texture = t, t._addReference(), a.x = e, a.y = i, a.width = n, a.height = r, 
            a.sizeGrid = s, a;
        }, Draw9GridTexture.ID = "Draw9GridTexture", Draw9GridTexture;
    }(), Ot = function() {
        function TextAtlas() {
            this.texWidth = 1024, this.texHeight = 1024, this.atlasgrid = null, this.protectDist = 1, 
            this.texture = null, this.charMaps = {}, this.texHeight = this.texWidth = S.atlasWidth, 
            this.texture = $e.getTextTexture(this.texWidth, this.texHeight), this.texWidth / TextAtlas.atlasGridW > 256 && (TextAtlas.atlasGridW = Math.ceil(this.texWidth / 256)), 
            this.atlasgrid = new qt(this.texWidth / TextAtlas.atlasGridW, this.texHeight / TextAtlas.atlasGridW, this.texture.id);
        }
        r(TextAtlas, "laya.webgl.text.TextAtlas");
        var t = TextAtlas.prototype;
        return t.setProtecteDist = function(t) {
            this.protectDist = t;
        }, t.getAEmpty = function(t, e, i) {
            var n = this.atlasgrid.addRect(1, Math.ceil(t / TextAtlas.atlasGridW), Math.ceil(e / TextAtlas.atlasGridW), i);
            return n && (i.x *= TextAtlas.atlasGridW, i.y *= TextAtlas.atlasGridW), n;
        }, t.destroy = function() {
            for (var t in this.charMaps) {
                this.charMaps[t].deleted = !0;
            }
            this.texture.discard();
        }, t.printDebugInfo = function() {}, s(0, t, "usedRate", function() {
            return this.atlasgrid._used;
        }), TextAtlas.atlasGridW = 16, TextAtlas;
    }(), Nt = function() {
        function StringKey() {
            this._strsToID = {}, this._idToStrs = [], this._length = 0;
        }
        r(StringKey, "laya.utils.StringKey");
        var t = StringKey.prototype;
        return t.add = function(t) {
            var e = this._strsToID[t];
            return null != e ? e : (this._idToStrs[this._length] = t, this._strsToID[t] = this._length++);
        }, t.getID = function(t) {
            var e = this._strsToID[t];
            return null == e ? -1 : e;
        }, t.getName = function(t) {
            var e = this._idToStrs[t];
            return null == e ? void 0 : e;
        }, StringKey;
    }(), Ut = function() {
        function Dragging() {
            this.ratio = .92, this.maxOffset = 60, this._dragging = !1, this._clickOnly = !0;
        }
        r(Dragging, "laya.utils.Dragging");
        var t = Dragging.prototype;
        return t.start = function(t, e, n, r, s, a, o, h) {
            void 0 === h && (h = .92), this.clearTimer(), this.target = t, this.area = e, this.hasInertia = n, 
            this.elasticDistance = e ? r : 0, this.elasticBackTime = s, this.data = a, this._disableMouseEvent = o, 
            this.ratio = h, this._parent = t.parent, this._clickOnly = !0, this._dragging = !0, 
            this._elasticRateX = this._elasticRateY = 1, this._lastX = this._parent.mouseX, 
            this._lastY = this._parent.mouseY, i.stage.on("mouseup", this, this.onStageMouseUp), 
            i.stage.on("mouseout", this, this.onStageMouseUp), i.systemTimer.frameLoop(1, this, this.loop);
        }, t.clearTimer = function() {
            i.systemTimer.clear(this, this.loop), i.systemTimer.clear(this, this.tweenMove), 
            this._tween && (this._tween.recover(), this._tween = null);
        }, t.stop = function() {
            this._dragging && (A.instance.disableMouseEvent = !1, i.stage.off("mouseup", this, this.onStageMouseUp), 
            i.stage.off("mouseout", this, this.onStageMouseUp), this._dragging = !1, this.target && this.area && this.backToArea(), 
            this.clear());
        }, t.loop = function() {
            var t = this._parent.getMousePoint(), e = t.x, n = t.y, r = e - this._lastX, s = n - this._lastY;
            if (this._clickOnly) {
                if (!(Math.abs(r * i.stage._canvasTransform.getScaleX()) > 1 || Math.abs(s * i.stage._canvasTransform.getScaleY()) > 1)) return;
                this._clickOnly = !1, this._offsets || (this._offsets = []), this._offsets.length = 0, 
                this.target.event("dragstart", this.data), A.instance.disableMouseEvent = this._disableMouseEvent;
            } else this._offsets.push(r, s);
            0 === r && 0 === s || (this._lastX = e, this._lastY = n, this.target.x += r * this._elasticRateX, 
            this.target.y += s * this._elasticRateY, this.area && this.checkArea(), this.target.event("dragmove", this.data));
        }, t.checkArea = function() {
            if (this.elasticDistance <= 0) this.backToArea(); else {
                if (this.target._x < this.area.x) var t = this.area.x - this.target._x; else t = this.target._x > this.area.x + this.area.width ? this.target._x - this.area.x - this.area.width : 0;
                if (this._elasticRateX = Math.max(0, 1 - t / this.elasticDistance), this.target._y < this.area.y) var e = this.area.y - this.target.y; else e = this.target._y > this.area.y + this.area.height ? this.target._y - this.area.y - this.area.height : 0;
                this._elasticRateY = Math.max(0, 1 - e / this.elasticDistance);
            }
        }, t.backToArea = function() {
            this.target.x = Math.min(Math.max(this.target._x, this.area.x), this.area.x + this.area.width), 
            this.target.y = Math.min(Math.max(this.target._y, this.area.y), this.area.y + this.area.height);
        }, t.onStageMouseUp = function(t) {
            if (A.instance.disableMouseEvent = !1, i.stage.off("mouseup", this, this.onStageMouseUp), 
            i.stage.off("mouseout", this, this.onStageMouseUp), i.systemTimer.clear(this, this.loop), 
            !this._clickOnly && this.target) if (this.hasInertia) {
                this._offsets.length < 1 && this._offsets.push(this._parent.mouseX - this._lastX, this._parent.mouseY - this._lastY), 
                this._offsetX = this._offsetY = 0;
                for (var e = this._offsets.length, n = Math.min(e, 6), r = this._offsets.length - n, s = e - 1; s > r; s--) this._offsetY += this._offsets[s--], 
                this._offsetX += this._offsets[s];
                this._offsetX = this._offsetX / n * 2, this._offsetY = this._offsetY / n * 2, Math.abs(this._offsetX) > this.maxOffset && (this._offsetX = this._offsetX > 0 ? this.maxOffset : -this.maxOffset), 
                Math.abs(this._offsetY) > this.maxOffset && (this._offsetY = this._offsetY > 0 ? this.maxOffset : -this.maxOffset), 
                i.systemTimer.frameLoop(1, this, this.tweenMove);
            } else this.elasticDistance > 0 ? this.checkElastic() : this.clear();
        }, t.checkElastic = function() {
            var t = NaN, e = NaN;
            if (this.target.x < this.area.x ? t = this.area.x : this.target._x > this.area.x + this.area.width && (t = this.area.x + this.area.width), 
            this.target.y < this.area.y ? e = this.area.y : this.target._y > this.area.y + this.area.height && (e = this.area.y + this.area.height), 
            isNaN(t) && isNaN(e)) this.clear(); else {
                var i = {};
                isNaN(t) || (i.x = t), isNaN(e) || (i.y = e), this._tween = z.to(this.target, i, this.elasticBackTime, te.sineOut, g.create(this, this.clear), 0, !1, !1);
            }
        }, t.tweenMove = function() {
            this._offsetX *= this.ratio * this._elasticRateX, this._offsetY *= this.ratio * this._elasticRateY, 
            this.target.x += this._offsetX, this.target.y += this._offsetY, this.area && this.checkArea(), 
            this.target.event("dragmove", this.data), (Math.abs(this._offsetX) < 1 && Math.abs(this._offsetY) < 1 || this._elasticRateX < .5 || this._elasticRateY < .5) && (i.systemTimer.clear(this, this.tweenMove), 
            this.elasticDistance > 0 ? this.checkElastic() : this.clear());
        }, t.clear = function() {
            if (this.target) {
                this.clearTimer();
                var t = this.target;
                this.target = null, this._parent = null, t.event("dragend", this.data);
            }
        }, Dragging;
    }(), kt = function() {
        function Earcut() {}
        return r(Earcut, "laya.webgl.shapes.Earcut"), Earcut.earcut = function(t, e, i) {
            i = i || 2;
            var n, r, s, a, o, h, u, l = e && e.length, c = l ? e[0] * i : t.length, _ = Earcut.linkedList(t, 0, c, i, !0), d = [];
            if (!_) return d;
            if (l && (_ = Earcut.eliminateHoles(t, e, _, i)), t.length > 80 * i) {
                n = s = t[0], r = a = t[1];
                for (var f = i; f < c; f += i) (o = t[f]) < n && (n = o), (h = t[f + 1]) < r && (r = h), 
                o > s && (s = o), h > a && (a = h);
                u = 0 !== (u = Math.max(s - n, a - r)) ? 1 / u : 0;
            }
            return Earcut.earcutLinked(_, d, i, n, r, u), d;
        }, Earcut.linkedList = function(t, e, i, n, r) {
            var s, a;
            if (r === Earcut.signedArea(t, e, i, n) > 0) for (s = e; s < i; s += n) a = Earcut.insertNode(s, t[s], t[s + 1], a); else for (s = i - n; s >= e; s -= n) a = Earcut.insertNode(s, t[s], t[s + 1], a);
            return a && Earcut.equals(a, a.next) && (Earcut.removeNode(a), a = a.next), a;
        }, Earcut.filterPoints = function(t, e) {
            if (!t) return t;
            e || (e = t);
            var i, n = t;
            do {
                if (i = !1, n.steiner || !Earcut.equals(n, n.next) && 0 !== Earcut.area(n.prev, n, n.next)) n = n.next; else {
                    if (Earcut.removeNode(n), (n = e = n.prev) === n.next) break;
                    i = !0;
                }
            } while (i || n !== e);
            return e;
        }, Earcut.earcutLinked = function(t, e, i, n, r, s, a) {
            if (t) {
                !a && s && Earcut.indexCurve(t, n, r, s);
                for (var o, h, u = t; t.prev !== t.next; ) if (o = t.prev, h = t.next, s ? Earcut.isEarHashed(t, n, r, s) : Earcut.isEar(t)) e.push(o.i / i), 
                e.push(t.i / i), e.push(h.i / i), Earcut.removeNode(t), t = h.next, u = h.next; else if ((t = h) === u) {
                    a ? 1 === a ? (t = Earcut.cureLocalIntersections(t, e, i), Earcut.earcutLinked(t, e, i, n, r, s, 2)) : 2 === a && Earcut.splitEarcut(t, e, i, n, r, s) : Earcut.earcutLinked(Earcut.filterPoints(t, null), e, i, n, r, s, 1);
                    break;
                }
            }
        }, Earcut.isEar = function(t) {
            var e = t.prev, i = t, n = t.next;
            if (Earcut.area(e, i, n) >= 0) return !1;
            for (var r = t.next.next; r !== t.prev; ) {
                if (Earcut.pointInTriangle(e.x, e.y, i.x, i.y, n.x, n.y, r.x, r.y) && Earcut.area(r.prev, r, r.next) >= 0) return !1;
                r = r.next;
            }
            return !0;
        }, Earcut.isEarHashed = function(t, e, i, n) {
            var r = t.prev, s = t, a = t.next;
            if (Earcut.area(r, s, a) >= 0) return !1;
            for (var o = r.x < s.x ? r.x < a.x ? r.x : a.x : s.x < a.x ? s.x : a.x, h = r.y < s.y ? r.y < a.y ? r.y : a.y : s.y < a.y ? s.y : a.y, u = r.x > s.x ? r.x > a.x ? r.x : a.x : s.x > a.x ? s.x : a.x, l = r.y > s.y ? r.y > a.y ? r.y : a.y : s.y > a.y ? s.y : a.y, c = Earcut.zOrder(o, h, e, i, n), _ = Earcut.zOrder(u, l, e, i, n), d = t.nextZ; d && d.z <= _; ) {
                if (d !== t.prev && d !== t.next && Earcut.pointInTriangle(r.x, r.y, s.x, s.y, a.x, a.y, d.x, d.y) && Earcut.area(d.prev, d, d.next) >= 0) return !1;
                d = d.nextZ;
            }
            for (d = t.prevZ; d && d.z >= c; ) {
                if (d !== t.prev && d !== t.next && Earcut.pointInTriangle(r.x, r.y, s.x, s.y, a.x, a.y, d.x, d.y) && Earcut.area(d.prev, d, d.next) >= 0) return !1;
                d = d.prevZ;
            }
            return !0;
        }, Earcut.cureLocalIntersections = function(t, e, i) {
            var n = t;
            do {
                var r = n.prev, s = n.next.next;
                !Earcut.equals(r, s) && Earcut.intersects(r, n, n.next, s) && Earcut.locallyInside(r, s) && Earcut.locallyInside(s, r) && (e.push(r.i / i), 
                e.push(n.i / i), e.push(s.i / i), Earcut.removeNode(n), Earcut.removeNode(n.next), 
                n = t = s), n = n.next;
            } while (n !== t);
            return n;
        }, Earcut.splitEarcut = function(t, e, i, n, r, s) {
            var a = t;
            do {
                for (var o = a.next.next; o !== a.prev; ) {
                    if (a.i !== o.i && Earcut.isValidDiagonal(a, o)) {
                        var h = Earcut.splitPolygon(a, o);
                        return a = Earcut.filterPoints(a, a.next), h = Earcut.filterPoints(h, h.next), Earcut.earcutLinked(a, e, i, n, r, s), 
                        void Earcut.earcutLinked(h, e, i, n, r, s);
                    }
                    o = o.next;
                }
                a = a.next;
            } while (a !== t);
        }, Earcut.eliminateHoles = function(t, e, i, n) {
            var r, s, a, o, h, u = [];
            for (r = 0, s = e.length; r < s; r++) a = e[r] * n, o = r < s - 1 ? e[r + 1] * n : t.length, 
            (h = Earcut.linkedList(t, a, o, n, !1)) === h.next && (h.steiner = !0), u.push(Earcut.getLeftmost(h));
            for (u.sort(Earcut.compareX), r = 0; r < u.length; r++) Earcut.eliminateHole(u[r], i), 
            i = Earcut.filterPoints(i, i.next);
            return i;
        }, Earcut.compareX = function(t, e) {
            return t.x - e.x;
        }, Earcut.eliminateHole = function(t, e) {
            if (e = Earcut.findHoleBridge(t, e)) {
                var i = Earcut.splitPolygon(e, t);
                Earcut.filterPoints(i, i.next);
            }
        }, Earcut.findHoleBridge = function(t, e) {
            var i, n = e, r = t.x, s = t.y, a = -1 / 0;
            do {
                if (s <= n.y && s >= n.next.y && n.next.y !== n.y) {
                    var o = n.x + (s - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
                    if (o <= r && o > a) {
                        if (a = o, o === r) {
                            if (s === n.y) return n;
                            if (s === n.next.y) return n.next;
                        }
                        i = n.x < n.next.x ? n : n.next;
                    }
                }
                n = n.next;
            } while (n !== e);
            if (!i) return null;
            if (r === a) return i.prev;
            var h, u = i, l = i.x, c = i.y, _ = 1 / 0;
            for (n = i.next; n !== u; ) r >= n.x && n.x >= l && r !== n.x && Earcut.pointInTriangle(s < c ? r : a, s, l, c, s < c ? a : r, s, n.x, n.y) && ((h = Math.abs(s - n.y) / (r - n.x)) < _ || h === _ && n.x > i.x) && Earcut.locallyInside(n, t) && (i = n, 
            _ = h), n = n.next;
            return i;
        }, Earcut.indexCurve = function(t, e, i, n) {
            var r = t;
            do {
                null === r.z && (r.z = Earcut.zOrder(r.x, r.y, e, i, n)), r.prevZ = r.prev, r.nextZ = r.next, 
                r = r.next;
            } while (r !== t);
            r.prevZ.nextZ = null, r.prevZ = null, Earcut.sortLinked(r);
        }, Earcut.sortLinked = function(t) {
            var e, i, n, r, s, a, o, h, u = 1;
            do {
                for (i = t, t = null, s = null, a = 0; i; ) {
                    for (a++, n = i, o = 0, e = 0; e < u && (o++, n = n.nextZ); e++) ;
                    for (h = u; o > 0 || h > 0 && n; ) 0 !== o && (0 === h || !n || i.z <= n.z) ? (r = i, 
                    i = i.nextZ, o--) : (r = n, n = n.nextZ, h--), s ? s.nextZ = r : t = r, r.prevZ = s, 
                    s = r;
                    i = n;
                }
                s.nextZ = null, u *= 2;
            } while (a > 1);
            return t;
        }, Earcut.zOrder = function(t, e, i, n, r) {
            return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - i) * r) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - n) * r) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1;
        }, Earcut.getLeftmost = function(t) {
            var e = t, i = t;
            do {
                e.x < i.x && (i = e), e = e.next;
            } while (e !== t);
            return i;
        }, Earcut.pointInTriangle = function(t, e, i, n, r, s, a, o) {
            return (r - a) * (e - o) - (t - a) * (s - o) >= 0 && (t - a) * (n - o) - (i - a) * (e - o) >= 0 && (i - a) * (s - o) - (r - a) * (n - o) >= 0;
        }, Earcut.isValidDiagonal = function(t, e) {
            return t.next.i !== e.i && t.prev.i !== e.i && !Earcut.intersectsPolygon(t, e) && Earcut.locallyInside(t, e) && Earcut.locallyInside(e, t) && Earcut.middleInside(t, e);
        }, Earcut.area = function(t, e, i) {
            return (e.y - t.y) * (i.x - e.x) - (e.x - t.x) * (i.y - e.y);
        }, Earcut.equals = function(t, e) {
            return t.x === e.x && t.y === e.y;
        }, Earcut.intersects = function(t, e, i, n) {
            return !!(Earcut.equals(t, e) && Earcut.equals(i, n) || Earcut.equals(t, n) && Earcut.equals(i, e)) || Earcut.area(t, e, i) > 0 != Earcut.area(t, e, n) > 0 && Earcut.area(i, n, t) > 0 != Earcut.area(i, n, e) > 0;
        }, Earcut.intersectsPolygon = function(t, e) {
            var i = t;
            do {
                if (i.i !== t.i && i.next.i !== t.i && i.i !== e.i && i.next.i !== e.i && Earcut.intersects(i, i.next, t, e)) return !0;
                i = i.next;
            } while (i !== t);
            return !1;
        }, Earcut.locallyInside = function(t, e) {
            return Earcut.area(t.prev, t, t.next) < 0 ? Earcut.area(t, e, t.next) >= 0 && Earcut.area(t, t.prev, e) >= 0 : Earcut.area(t, e, t.prev) < 0 || Earcut.area(t, t.next, e) < 0;
        }, Earcut.middleInside = function(t, e) {
            var i = t, n = !1, r = (t.x + e.x) / 2, s = (t.y + e.y) / 2;
            do {
                i.y > s != i.next.y > s && i.next.y !== i.y && r < (i.next.x - i.x) * (s - i.y) / (i.next.y - i.y) + i.x && (n = !n), 
                i = i.next;
            } while (i !== t);
            return n;
        }, Earcut.splitPolygon = function(t, e) {
            var i = new j(t.i, t.x, t.y), n = new j(e.i, e.x, e.y), r = t.next, s = e.prev;
            return t.next = e, e.prev = t, i.next = r, r.prev = i, n.next = i, i.prev = n, s.next = n, 
            n.prev = s, n;
        }, Earcut.insertNode = function(t, e, i, n) {
            var r = new j(t, e, i);
            return n ? (r.next = n.next, r.prev = n, n.next.prev = r, n.next = r) : (r.prev = r, 
            r.next = r), r;
        }, Earcut.removeNode = function(t) {
            t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), 
            t.nextZ && (t.nextZ.prevZ = t.prevZ);
        }, Earcut.signedArea = function(t, e, i, n) {
            for (var r = 0, s = e, a = i - n; s < i; s += n) r += (t[a] - t[s]) * (t[s + 1] + t[a + 1]), 
            a = s;
            return r;
        }, Earcut;
    }(), Vt = function() {
        function ShaderNode(t) {
            this.childs = [], this.text = "", this.parent = null, this.name = null, this.noCompile = !1, 
            this.includefiles = null, this.condition = null, this.conditionType = 0, this.useFuns = "", 
            this.z = 0, this.src = null, this.includefiles = t;
        }
        r(ShaderNode, "laya.webgl.utils.ShaderNode");
        var t = ShaderNode.prototype;
        return t.setParent = function(t) {
            t.childs.push(this), this.z = t.z + 1, this.parent = t;
        }, t.setCondition = function(t, e) {
            t && (this.conditionType = e, t = t.replace(/(\s*$)/g, ""), this.condition = function() {
                return this[t];
            }, this.condition.__condition = t);
        }, t.toscript = function(t, e) {
            return this._toscript(t, e, ++ShaderNode.__id);
        }, t._toscript = function(t, e, i) {
            if (this.childs.length < 1 && !this.text) return e;
            e.length;
            if (this.condition) {
                var n = !!this.condition.call(t);
                if (2 === this.conditionType && (n = !n), !n) return e;
            }
            if (this.text && e.push(this.text), this.childs.length > 0 && this.childs.forEach(function(n, r, s) {
                n._toscript(t, e, i);
            }), this.includefiles.length > 0 && this.useFuns.length > 0) for (var r, s = 0, a = this.includefiles.length; s < a; s++) this.includefiles[s].curUseID != i && (r = this.includefiles[s].file.getFunsScript(this.useFuns)).length > 0 && (this.includefiles[s].curUseID = i, 
            e[0] = r + e[0]);
            return e;
        }, ShaderNode.__id = 1, ShaderNode;
    }(), Ht = function() {
        function TranslateCmd() {}
        r(TranslateCmd, "laya.display.cmd.TranslateCmd");
        var t = TranslateCmd.prototype;
        return t.recover = function() {
            N.recover("TranslateCmd", this);
        }, t.run = function(t, e, i) {
            t.translate(this.tx, this.ty);
        }, s(0, t, "cmdID", function() {
            return "Translate";
        }), TranslateCmd.create = function(t, e) {
            var i = N.getItemByClass("TranslateCmd", TranslateCmd);
            return i.tx = t, i.ty = e, i;
        }, TranslateCmd.ID = "Translate", TranslateCmd;
    }(), Xt = function() {
        function Point(t, e) {
            void 0 === t && (t = 0), void 0 === e && (e = 0), this.x = t, this.y = e;
        }
        r(Point, "laya.maths.Point");
        var t = Point.prototype;
        return t.setTo = function(t, e) {
            return this.x = t, this.y = e, this;
        }, t.reset = function() {
            return this.x = this.y = 0, this;
        }, t.recover = function() {
            N.recover("Point", this.reset());
        }, t.distance = function(t, e) {
            return Math.sqrt((this.x - t) * (this.x - t) + (this.y - e) * (this.y - e));
        }, t.toString = function() {
            return this.x + "," + this.y;
        }, t.normalize = function() {
            var t = Math.sqrt(this.x * this.x + this.y * this.y);
            if (t > 0) {
                var e = 1 / t;
                this.x *= e, this.y *= e;
            }
        }, t.copy = function(t) {
            return this.setTo(t.x, t.y);
        }, Point.create = function() {
            return N.getItemByClass("Point", Point);
        }, Point.TEMP = new Point(), Point.EMPTY = new Point(), Point;
    }(), Yt = (function() {
        function Const() {}
        r(Const, "laya.Const"), Const.NOT_ACTIVE = 1, Const.ACTIVE_INHIERARCHY = 2, Const.AWAKED = 4, 
        Const.NOT_READY = 8, Const.DISPLAY = 16, Const.HAS_ZORDER = 32, Const.HAS_MOUSE = 64, 
        Const.DISPLAYED_INSTAGE = 128, Const.DRAWCALL_OPTIMIZE = 256;
    }(), function() {
        function BasePoly() {}
        return r(BasePoly, "laya.webgl.shapes.BasePoly"), BasePoly.createLine2 = function(t, e, i, n, r, s) {
            if (t.length < 4) return null;
            var a = BasePoly.tempData.length > t.length + 2 ? BasePoly.tempData : new Array(t.length + 2);
            a[0] = t[0], a[1] = t[1];
            var o = 2, h = 0, u = t.length;
            for (h = 2; h < u; h += 2) Math.abs(t[h] - t[h - 2]) + Math.abs(t[h + 1] - t[h - 1]) > .01 && (a[o++] = t[h], 
            a[o++] = t[h + 1]);
            s && Math.abs(t[0] - a[o - 2]) + Math.abs(t[1] - a[o - 1]) > .01 && (a[o++] = t[0], 
            a[o++] = t[1]);
            var l = r;
            u = o / 2;
            var c, _, d, f, p, m, g, v, x, y, T, b, C, S, w, M, A, R, L, E, D = i / 2;
            d = a[0], f = a[1], y = d - (p = a[2]);
            x = (x = -(f - (m = a[3]))) / (E = Math.sqrt(x * x + y * y)) * D, y = y / E * D;
            for (l.push(d - x, f - y, d + x, f + y), h = 1; h < u - 1; h++) d = a[2 * (h - 1)], 
            f = a[2 * (h - 1) + 1], p = a[2 * h], m = a[2 * h + 1], g = a[2 * (h + 1)], v = a[2 * (h + 1) + 1], 
            y = d - p, b = p - g, w = (-(x = (x = -(f - m)) / (E = Math.sqrt(x * x + y * y)) * D) + d) * (-(y = y / E * D) + m) - (-x + p) * (-y + f), 
            R = (-(T = (T = -(m - v)) / (E = Math.sqrt(T * T + b * b)) * D) + g) * (-(b = b / E * D) + m) - (-T + p) * (-b + v), 
            L = (C = -y + f - (-y + m)) * (A = -T + p - (-T + g)) - (M = -b + v - (-b + m)) * (S = -x + p - (-x + d)), 
            Math.abs(L) < .1 ? (L += 10.1, l.push(p - x, m - y, p + x, m + y)) : (((c = (S * R - A * w) / L) - p) * (c - p) + ((_ = (M * w - C * R) / L) - m) + (_ - m), 
            l.push(c, _, p - (c - p), m - (_ - m)));
            for (d = a[o - 4], f = a[o - 3], y = d - (p = a[o - 2]), x = (x = -(f - (m = a[o - 1]))) / (E = Math.sqrt(x * x + y * y)) * D, 
            y = y / E * D, l.push(p - x, m - y, p + x, m + y), h = 1; h < u; h++) e.push(n + 2 * (h - 1), n + 2 * (h - 1) + 1, n + 2 * h + 1, n + 2 * h + 1, n + 2 * h, n + 2 * (h - 1));
            return l;
        }, BasePoly.createLineTriangle = function(t, e, i, n, r, s, a) {
            var o = t.slice(), h = o.length, u = o[0], l = o[1], c = o[2], _ = (o[2], 0), d = 0, f = 0, p = 0, m = h / 2;
            if (!(m <= 1) && 2 != m) {
                for (var g = new Array(4 * m), v = 0, x = 0, y = 0; y < m - 1; y++) u = o[x++], 
                l = o[x++], c = o[x++], p = o[x++] - l, 0 != (f = c - u) && 0 != p && (_ = Math.sqrt(f * f + p * p)) > .001 && (g[d = 4 * v] = u, 
                g[d + 1] = l, g[d + 2] = f / _, g[d + 3] = p / _, v++);
                for (n ? (u = o[h - 2], l = o[h - 1], c = o[0], p = o[1] - l, 0 != (f = c - u) && 0 != p && (_ = Math.sqrt(f * f + p * p)) > .001 && (g[d = 4 * v] = u, 
                g[d + 1] = l, g[d + 2] = f / _, g[d + 3] = p / _, v++)) : (g[d = 4 * v] = u, g[d + 1] = l, 
                g[d + 2] = f / _, g[d + 3] = p / _, v++), x = 0, y = 0; y < m; y++) {
                    u = o[x], l = o[x + 1], c = o[x + 2], o[x + 3];
                    o[x + 4], o[x + 5];
                }
            }
        }, n(BasePoly, [ "tempData", function() {
            return this.tempData = new Array(256);
        } ]), BasePoly;
    }()), zt = function() {
        function ScaleCmd() {}
        r(ScaleCmd, "laya.display.cmd.ScaleCmd");
        var t = ScaleCmd.prototype;
        return t.recover = function() {
            N.recover("ScaleCmd", this);
        }, t.run = function(t, e, i) {
            t._scale(this.scaleX, this.scaleY, this.pivotX + e, this.pivotY + i);
        }, s(0, t, "cmdID", function() {
            return "Scale";
        }), ScaleCmd.create = function(t, e, i, n) {
            var r = N.getItemByClass("ScaleCmd", ScaleCmd);
            return r.scaleX = t, r.scaleY = e, r.pivotX = i, r.pivotY = n, r;
        }, ScaleCmd.ID = "Scale", ScaleCmd;
    }(), Kt = function() {
        function AlphaCmd() {}
        r(AlphaCmd, "laya.display.cmd.AlphaCmd");
        var t = AlphaCmd.prototype;
        return t.recover = function() {
            N.recover("AlphaCmd", this);
        }, t.run = function(t, e, i) {
            t.alpha(this.alpha);
        }, s(0, t, "cmdID", function() {
            return "Alpha";
        }), AlphaCmd.create = function(t) {
            var e = N.getItemByClass("AlphaCmd", AlphaCmd);
            return e.alpha = t, e;
        }, AlphaCmd.ID = "Alpha", AlphaCmd;
    }(), jt = function() {
        function Byte(t) {
            this._xd_ = !0, this._allocated_ = 8, this._pos_ = 0, this._length = 0, t ? (this._u8d_ = new Uint8Array(t), 
            this._d_ = new DataView(this._u8d_.buffer), this._length = this._d_.byteLength) : this._resizeBuffer(this._allocated_);
        }
        r(Byte, "laya.utils.Byte");
        var t = Byte.prototype;
        return t._resizeBuffer = function(t) {
            try {
                var e = new Uint8Array(t);
                null != this._u8d_ && (this._u8d_.length <= t ? e.set(this._u8d_) : e.set(this._u8d_.subarray(0, t))), 
                this._u8d_ = e, this._d_ = new DataView(e.buffer);
            } catch (e) {
                throw "Invalid typed array length:" + t;
            }
        }, t.getString = function() {
            return this.readString();
        }, t.readString = function() {
            return this._rUTF(this.getUint16());
        }, t.getFloat32Array = function(t, e) {
            return this.readFloat32Array(t, e);
        }, t.readFloat32Array = function(t, e) {
            var i = t + e;
            i = i > this._length ? this._length : i;
            var n = new Float32Array(this._d_.buffer.slice(t, i));
            return this._pos_ = i, n;
        }, t.getUint8Array = function(t, e) {
            return this.readUint8Array(t, e);
        }, t.readUint8Array = function(t, e) {
            var i = t + e;
            i = i > this._length ? this._length : i;
            var n = new Uint8Array(this._d_.buffer.slice(t, i));
            return this._pos_ = i, n;
        }, t.getInt16Array = function(t, e) {
            return this.readInt16Array(t, e);
        }, t.readInt16Array = function(t, e) {
            var i = t + e;
            i = i > this._length ? this._length : i;
            var n = new Int16Array(this._d_.buffer.slice(t, i));
            return this._pos_ = i, n;
        }, t.getFloat32 = function() {
            return this.readFloat32();
        }, t.readFloat32 = function() {
            if (this._pos_ + 4 > this._length) throw "getFloat32 error - Out of bounds";
            var t = this._d_.getFloat32(this._pos_, this._xd_);
            return this._pos_ += 4, t;
        }, t.getFloat64 = function() {
            return this.readFloat64();
        }, t.readFloat64 = function() {
            if (this._pos_ + 8 > this._length) throw "getFloat64 error - Out of bounds";
            var t = this._d_.getFloat64(this._pos_, this._xd_);
            return this._pos_ += 8, t;
        }, t.writeFloat32 = function(t) {
            this._ensureWrite(this._pos_ + 4), this._d_.setFloat32(this._pos_, t, this._xd_), 
            this._pos_ += 4;
        }, t.writeFloat64 = function(t) {
            this._ensureWrite(this._pos_ + 8), this._d_.setFloat64(this._pos_, t, this._xd_), 
            this._pos_ += 8;
        }, t.getInt32 = function() {
            return this.readInt32();
        }, t.readInt32 = function() {
            if (this._pos_ + 4 > this._length) throw "getInt32 error - Out of bounds";
            var t = this._d_.getInt32(this._pos_, this._xd_);
            return this._pos_ += 4, t;
        }, t.getUint32 = function() {
            return this.readUint32();
        }, t.readUint32 = function() {
            if (this._pos_ + 4 > this._length) throw "getUint32 error - Out of bounds";
            var t = this._d_.getUint32(this._pos_, this._xd_);
            return this._pos_ += 4, t;
        }, t.writeInt32 = function(t) {
            this._ensureWrite(this._pos_ + 4), this._d_.setInt32(this._pos_, t, this._xd_), 
            this._pos_ += 4;
        }, t.writeUint32 = function(t) {
            this._ensureWrite(this._pos_ + 4), this._d_.setUint32(this._pos_, t, this._xd_), 
            this._pos_ += 4;
        }, t.getInt16 = function() {
            return this.readInt16();
        }, t.readInt16 = function() {
            if (this._pos_ + 2 > this._length) throw "getInt16 error - Out of bounds";
            var t = this._d_.getInt16(this._pos_, this._xd_);
            return this._pos_ += 2, t;
        }, t.getUint16 = function() {
            return this.readUint16();
        }, t.readUint16 = function() {
            if (this._pos_ + 2 > this._length) throw "getUint16 error - Out of bounds";
            var t = this._d_.getUint16(this._pos_, this._xd_);
            return this._pos_ += 2, t;
        }, t.writeUint16 = function(t) {
            this._ensureWrite(this._pos_ + 2), this._d_.setUint16(this._pos_, t, this._xd_), 
            this._pos_ += 2;
        }, t.writeInt16 = function(t) {
            this._ensureWrite(this._pos_ + 2), this._d_.setInt16(this._pos_, t, this._xd_), 
            this._pos_ += 2;
        }, t.getUint8 = function() {
            return this.readUint8();
        }, t.readUint8 = function() {
            if (this._pos_ + 1 > this._length) throw "getUint8 error - Out of bounds";
            return this._u8d_[this._pos_++];
        }, t.writeUint8 = function(t) {
            this._ensureWrite(this._pos_ + 1), this._d_.setUint8(this._pos_, t), this._pos_++;
        }, t._getUInt8 = function(t) {
            return this._readUInt8(t);
        }, t._readUInt8 = function(t) {
            return this._d_.getUint8(t);
        }, t._getUint16 = function(t) {
            return this._readUint16(t);
        }, t._readUint16 = function(t) {
            return this._d_.getUint16(t, this._xd_);
        }, t._getMatrix = function() {
            return this._readMatrix();
        }, t._readMatrix = function() {
            return new st(this.getFloat32(), this.getFloat32(), this.getFloat32(), this.getFloat32(), this.getFloat32(), this.getFloat32());
        }, t._rUTF = function(t) {
            var e = this._pos_ + t, i = 0, n = 0, r = 0, s = String.fromCharCode, a = this._u8d_, o = [], h = 0;
            for (o.length = 1e3; this._pos_ < e; ) (i = a[this._pos_++]) < 128 ? 0 != i && (o[h++] = s(i)) : i < 224 ? o[h++] = s((63 & i) << 6 | 127 & a[this._pos_++]) : i < 240 ? (n = a[this._pos_++], 
            o[h++] = s((31 & i) << 12 | (127 & n) << 6 | 127 & a[this._pos_++])) : (n = a[this._pos_++], 
            r = a[this._pos_++], o[h++] = s((15 & i) << 18 | (127 & n) << 12 | r << 6 & 127 | 127 & a[this._pos_++])), 
            0;
            return o.length = h, o.join("");
        }, t.getCustomString = function(t) {
            return this.readCustomString(t);
        }, t.readCustomString = function(t) {
            for (var e = "", i = 0, n = 0, r = String.fromCharCode, s = this._u8d_; t > 0; ) if ((n = s[this._pos_]) < 128) e += r(n), 
            this._pos_++, t--; else for (i = n - 128, this._pos_++, t -= i; i > 0; ) n = s[this._pos_++], 
            e += r(s[this._pos_++] << 8 | n), i--;
            return e;
        }, t.clear = function() {
            this._pos_ = 0, this.length = 0;
        }, t.__getBuffer = function() {
            return this._d_.buffer;
        }, t.writeUTFBytes = function(t) {
            for (var e = 0, i = (t += "").length; e < i; e++) {
                var n = t.charCodeAt(e);
                n <= 127 ? this.writeByte(n) : n <= 2047 ? (this._ensureWrite(this._pos_ + 2), this._u8d_.set([ 192 | n >> 6, 128 | 63 & n ], this._pos_), 
                this._pos_ += 2) : n <= 65535 ? (this._ensureWrite(this._pos_ + 3), this._u8d_.set([ 224 | n >> 12, 128 | n >> 6 & 63, 128 | 63 & n ], this._pos_), 
                this._pos_ += 3) : (this._ensureWrite(this._pos_ + 4), this._u8d_.set([ 240 | n >> 18, 128 | n >> 12 & 63, 128 | n >> 6 & 63, 128 | 63 & n ], this._pos_), 
                this._pos_ += 4);
            }
        }, t.writeUTFString = function(t) {
            var e = this.pos;
            this.writeUint16(1), this.writeUTFBytes(t);
            var i = this.pos - e - 2;
            this._d_.setUint16(e, i, this._xd_);
        }, t.readUTFString = function() {
            return this.readUTFBytes(this.getUint16());
        }, t.getUTFString = function() {
            return this.readUTFString();
        }, t.readUTFBytes = function(t) {
            if (void 0 === t && (t = -1), 0 === t) return "";
            var e = this.bytesAvailable;
            if (t > e) throw "readUTFBytes error - Out of bounds";
            return t = t > 0 ? t : e, this._rUTF(t);
        }, t.getUTFBytes = function(t) {
            return void 0 === t && (t = -1), this.readUTFBytes(t);
        }, t.writeByte = function(t) {
            this._ensureWrite(this._pos_ + 1), this._d_.setInt8(this._pos_, t), this._pos_ += 1;
        }, t.readByte = function() {
            if (this._pos_ + 1 > this._length) throw "readByte error - Out of bounds";
            return this._d_.getInt8(this._pos_++);
        }, t.getByte = function() {
            return this.readByte();
        }, t._ensureWrite = function(t) {
            this._length < t && (this._length = t), this._allocated_ < t && (this.length = t);
        }, t.writeArrayBuffer = function(t, e, i) {
            if (void 0 === e && (e = 0), void 0 === i && (i = 0), e < 0 || i < 0) throw "writeArrayBuffer error - Out of bounds";
            0 == i && (i = t.byteLength - e), this._ensureWrite(this._pos_ + i);
            var n = new Uint8Array(t);
            this._u8d_.set(n.subarray(e, e + i), this._pos_), this._pos_ += i;
        }, t.readArrayBuffer = function(t) {
            var e;
            return e = this._u8d_.buffer.slice(this._pos_, this._pos_ + t), this._pos_ = this._pos_ + t, 
            e;
        }, s(0, t, "buffer", function() {
            var t = this._d_.buffer;
            return t.byteLength === this._length ? t : t.slice(0, this._length);
        }), s(0, t, "endian", function() {
            return this._xd_ ? "littleEndian" : "bigEndian";
        }, function(t) {
            this._xd_ = "littleEndian" === t;
        }), s(0, t, "length", function() {
            return this._length;
        }, function(t) {
            this._allocated_ < t ? this._resizeBuffer(this._allocated_ = Math.floor(Math.max(t, 2 * this._allocated_))) : this._allocated_ > t && this._resizeBuffer(this._allocated_ = t), 
            this._length = t;
        }), s(0, t, "pos", function() {
            return this._pos_;
        }, function(t) {
            this._pos_ = t;
        }), s(0, t, "bytesAvailable", function() {
            return this._length - this._pos_;
        }), Byte.getSystemEndian = function() {
            if (!Byte._sysEndian) {
                var t = new ArrayBuffer(2);
                new DataView(t).setInt16(0, 256, !0), Byte._sysEndian = 256 === new Int16Array(t)[0] ? "littleEndian" : "bigEndian";
            }
            return Byte._sysEndian;
        }, Byte.BIG_ENDIAN = "bigEndian", Byte.LITTLE_ENDIAN = "littleEndian", Byte._sysEndian = null, 
        Byte;
    }(), Qt = function() {
        var t;
        function CallLater() {
            this._pool = [], this._map = [], this._laters = [];
        }
        r(CallLater, "laya.utils.CallLater");
        var e = CallLater.prototype;
        return e._update = function() {
            var t = this._laters, e = t.length;
            if (e > 0) {
                for (var i = 0, n = e - 1; i <= n; i++) {
                    var r = t[i];
                    this._map[r.key] = null, null !== r.method && (r.run(), r.clear()), this._pool.push(r), 
                    i === n && (n = t.length - 1);
                }
                t.length = 0;
            }
        }, e._getHandler = function(t, e) {
            var i = t ? t.$_GID || (t.$_GID = ie.getGID()) : 0, n = e.$_TID || (e.$_TID = 1e5 * J._mid++);
            return this._map[i + n];
        }, e.callLater = function(e, i, n) {
            if (null == this._getHandler(e, i)) {
                if (this._pool.length) var r = this._pool.pop(); else r = new t();
                r.caller = e, r.method = i, r.args = n;
                var s = e ? e.$_GID : 0, a = i.$_TID;
                r.key = s + a, this._map[r.key] = r, this._laters.push(r);
            }
        }, e.runCallLater = function(t, e) {
            var i = this._getHandler(t, e);
            i && null != i.method && (this._map[i.key] = null, i.run(), i.clear());
        }, CallLater.I = new CallLater(), CallLater.__init$ = function() {
            t = function() {
                function LaterHandler() {
                    this.key = 0, this.caller = null, this.method = null, this.args = null;
                }
                r(LaterHandler, "");
                var t = LaterHandler.prototype;
                return t.clear = function() {
                    this.caller = null, this.method = null, this.args = null;
                }, t.run = function() {
                    var t = this.caller;
                    if (t && t.destroyed) return this.clear();
                    var e = this.method, i = this.args;
                    null != e && (i ? e.apply(t, i) : e.call(t));
                }, LaterHandler;
            }();
        }, CallLater;
    }(), $t = function() {
        function Graphics() {
            this._sp = null, this._one = null, this._cmds = null, this._vectorgraphArray = null, 
            this._graphicBounds = null, this.autoDestroy = !1, this._render = this._renderEmpty, 
            this._createData();
        }
        r(Graphics, "laya.display.Graphics");
        var t = Graphics.prototype;
        return t._createData = function() {}, t._clearData = function() {}, t._destroyData = function() {}, 
        t.destroy = function() {
            this.clear(!0), this._graphicBounds && this._graphicBounds.destroy(), this._graphicBounds = null, 
            this._vectorgraphArray = null, this._sp && (this._sp._renderType = 0, this._sp._setRenderType(0), 
            this._sp = null), this._destroyData();
        }, t.clear = function(t) {
            if (void 0 === t && (t = !0), t) {
                var e = this._one;
                if (this._cmds) {
                    var i = 0, n = this._cmds.length;
                    for (i = 0; i < n; i++) (e = this._cmds[i]).recover();
                    this._cmds.length = 0;
                } else e && e.recover();
            } else this._cmds = null;
            if (this._one = null, this._render = this._renderEmpty, this._clearData(), this._sp && (this._sp._renderType &= -513, 
            this._sp._setRenderType(this._sp._renderType)), this._repaint(), this._vectorgraphArray) {
                for (i = 0, n = this._vectorgraphArray.length; i < n; i++) R.getInstance().deleteShape(this._vectorgraphArray[i]);
                this._vectorgraphArray.length = 0;
            }
        }, t._clearBoundsCache = function() {
            this._graphicBounds && this._graphicBounds.reset();
        }, t._initGraphicBounds = function() {
            this._graphicBounds || (this._graphicBounds = Et.create(), this._graphicBounds._graphics = this);
        }, t._repaint = function() {
            this._clearBoundsCache(), this._sp && this._sp.repaint();
        }, t._isOnlyOne = function() {
            return !this._cmds || 0 === this._cmds.length;
        }, t.getBounds = function(t) {
            return void 0 === t && (t = !1), this._initGraphicBounds(), this._graphicBounds.getBounds(t);
        }, t.getBoundPoints = function(t) {
            return void 0 === t && (t = !1), this._initGraphicBounds(), this._graphicBounds.getBoundPoints(t);
        }, t.drawImage = function(t, e, i, n, r) {
            if (void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === n && (n = 0), void 0 === r && (r = 0), 
            !t) return null;
            if (n || (n = t.sourceWidth), r || (r = t.sourceHeight), t.getIsReady()) {
                var s = n / t.sourceWidth, a = r / t.sourceHeight;
                if (n = t.width * s, r = t.height * a, n <= 0 || r <= 0) return null;
                e += t.offsetX * s, i += t.offsetY * a;
            }
            this._sp && (this._sp._renderType |= 512, this._sp._setRenderType(this._sp._renderType));
            var o = f.create.call(this, t, e, i, n, r);
            return null == this._one ? (this._one = o, this._render = this._renderOneImg) : this._saveToCmd(null, o), 
            this._repaint(), o;
        }, t.drawTexture = function(t, e, i, n, r, s, a, o, h) {
            if (void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === n && (n = 0), void 0 === r && (r = 0), 
            void 0 === a && (a = 1), !t || a < .01) return null;
            if (!t.getIsReady()) return null;
            if (n || (n = t.sourceWidth), r || (r = t.sourceHeight), t.getIsReady()) {
                var u = n / t.sourceWidth, l = r / t.sourceHeight;
                if (n = t.width * u, r = t.height * l, n <= 0 || r <= 0) return null;
                e += t.offsetX * u, i += t.offsetY * l;
            }
            this._sp && (this._sp._renderType |= 512, this._sp._setRenderType(this._sp._renderType));
            var c = V.create.call(this, t, e, i, n, r, s, a, o, h);
            return this._repaint(), this._saveToCmd(null, c);
        }, t.drawTextures = function(t, e) {
            return t ? this._saveToCmd(Rt._context.drawTextures, ht.create.call(this, t, e)) : null;
        }, t.drawTriangles = function(t, e, i, n, r, s, a, o, h, u) {
            return void 0 === o && (o = 1), this._saveToCmd(Rt._context.drawTriangles, x.create.call(this, t, e, i, n, r, s, a, o, h, u));
        }, t.fillTexture = function(t, e, i, n, r, s, a) {
            return void 0 === n && (n = 0), void 0 === r && (r = 0), void 0 === s && (s = "repeat"), 
            t && t.getIsReady() ? this._saveToCmd(Rt._context._fillTexture, l.create.call(this, t, e, i, n, r, s, a || Xt.EMPTY, {})) : null;
        }, t._saveToCmd = function(t, e) {
            return this._sp && (this._sp._renderType |= 512, this._sp._setRenderType(this._sp._renderType)), 
            null == this._one ? (this._one = e, this._render = this._renderOne) : (this._render = this._renderAll, 
            0 === (this._cmds || (this._cmds = [])).length && this._cmds.push(this._one), this._cmds.push(e)), 
            this._repaint(), e;
        }, t.clipRect = function(t, e, i, n) {
            return this._saveToCmd(Rt._context.clipRect, B.create.call(this, t, e, i, n));
        }, t.fillText = function(t, e, i, n, r, s) {
            return this._saveToCmd(Rt._context.fillText, oe.create.call(this, t, e, i, n || ei.defaultFontStr(), r, s));
        }, t.fillBorderText = function(t, e, i, n, r, s, a, o) {
            return this._saveToCmd(Rt._context.fillBorderText, Ft.create.call(this, t, e, i, n || ei.defaultFontStr(), r, s, a, o));
        }, t.fillWords = function(t, e, i, n, r) {
            return this._saveToCmd(Rt._context.fillWords, rt.create.call(this, t, e, i, n || ei.defaultFontStr(), r));
        }, t.fillBorderWords = function(t, e, i, n, r, s, a) {
            return this._saveToCmd(Rt._context.fillBorderWords, ge.create.call(this, t, e, i, n || ei.defaultFontStr(), r, s, a));
        }, t.strokeText = function(t, e, i, n, r, s, a) {
            return this._saveToCmd(Rt._context.fillBorderText, Zt.create.call(this, t, e, i, n || ei.defaultFontStr(), null, r, s, a));
        }, t.alpha = function(t) {
            return this._saveToCmd(Rt._context.alpha, Kt.create.call(this, t));
        }, t.transform = function(t, e, i) {
            return void 0 === e && (e = 0), void 0 === i && (i = 0), this._saveToCmd(Rt._context._transform, ot.create.call(this, t, e, i));
        }, t.rotate = function(t, e, i) {
            return void 0 === e && (e = 0), void 0 === i && (i = 0), this._saveToCmd(Rt._context._rotate, de.create.call(this, t, e, i));
        }, t.scale = function(t, e, i, n) {
            return void 0 === i && (i = 0), void 0 === n && (n = 0), this._saveToCmd(Rt._context._scale, zt.create.call(this, t, e, i, n));
        }, t.translate = function(t, e) {
            return this._saveToCmd(Rt._context.translate, Ht.create.call(this, t, e));
        }, t.save = function() {
            return this._saveToCmd(Rt._context._save, Tt.create.call(this));
        }, t.restore = function() {
            return this._saveToCmd(Rt._context.restore, D.create.call(this));
        }, t.replaceText = function(t) {
            this._repaint();
            var e = this._cmds;
            if (e) {
                for (var i = e.length - 1; i > -1; i--) if (this._isTextCmd(e[i])) return e[i].text = t, 
                !0;
            } else if (this._one && this._isTextCmd(this._one)) return this._one.text = t, !0;
            return !1;
        }, t._isTextCmd = function(t) {
            var e = t.cmdID;
            return "FillText" == e || "StrokeText" == e || "FillBorderText" == e;
        }, t.replaceTextColor = function(t) {
            this._repaint();
            var e = this._cmds;
            if (e) for (var i = e.length - 1; i > -1; i--) this._isTextCmd(e[i]) && this._setTextCmdColor(e[i], t); else this._one && this._isTextCmd(this._one) && this._setTextCmdColor(this._one, t);
        }, t._setTextCmdColor = function(t, e) {
            switch (t.cmdID) {
              case "FillText":
              case "StrokeText":
                t.color = e;
                break;

              case "FillBorderText":
              case "FillBorderWords":
              case "FillBorderText":
                t.fillColor = e;
            }
        }, t.loadImage = function(t, e, i, n, r, s) {
            void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === n && (n = 0), void 0 === r && (r = 0);
            var a = Ie.getRes(t);
            a ? a.getIsReady() ? this.drawImage(a, e, i, n, r) : a.once("ready", this, this.drawImage, [ a, e, i, n, r ]) : ((a = new Ee()).load(t), 
            Ie.cacheRes(t, a), a.once("ready", this, this.drawImage, [ a, e, i, n, r ])), null != s && (a.getIsReady() ? s.call(this._sp) : a.on("ready", this._sp, s));
        }, t._renderEmpty = function(t, e, i, n) {}, t._renderAll = function(t, e, i, n) {
            for (var r = this._cmds, s = 0, a = r.length; s < a; s++) r[s].run(e, i, n);
        }, t._renderOne = function(t, e, i, n) {
            e.sprite = t, this._one.run(e, i, n);
        }, t._renderOneImg = function(t, e, i, n) {
            e.sprite = t, this._one.run(e, i, n);
        }, t.drawLine = function(t, e, i, n, r, s) {
            void 0 === s && (s = 1);
            var a = s < 1 || s % 2 == 0 ? 0 : .5;
            return this._saveToCmd(Rt._context._drawLine, it.create.call(this, t + a, e + a, i + a, n + a, r, s, 0));
        }, t.drawLines = function(t, e, i, n, r) {
            if (void 0 === r && (r = 1), !i || i.length < 4) return null;
            var s = r < 1 || r % 2 == 0 ? 0 : .5;
            return this._saveToCmd(Rt._context._drawLines, ne.create.call(this, t + s, e + s, i, n, r, 0));
        }, t.drawCurves = function(t, e, i, n, r) {
            return void 0 === r && (r = 1), this._saveToCmd(Rt._context.drawCurves, ae.create.call(this, t, e, i, n, r));
        }, t.drawRect = function(t, e, i, n, r, s, a) {
            void 0 === a && (a = 1);
            var o = a >= 1 && s ? a / 2 : 0, h = s ? a : 0;
            return this._saveToCmd(Rt._context.drawRect, K.create.call(this, t + o, e + o, i - h, n - h, r, s, a));
        }, t.drawCircle = function(t, e, i, n, r, s) {
            void 0 === s && (s = 1);
            var a = s >= 1 && r ? s / 2 : 0;
            return this._saveToCmd(Rt._context._drawCircle, ut.create.call(this, t, e, i - a, n, r, s, 0));
        }, t.drawPie = function(t, e, i, n, r, s, a, o) {
            void 0 === o && (o = 1);
            var h = o >= 1 && a ? o / 2 : 0, u = a ? o : 0;
            return this._saveToCmd(Rt._context._drawPie, y.create.call(this, t + h, e + h, i - u, ie.toRadian(n), ie.toRadian(r), s, a, o, 0));
        }, t.drawPoly = function(t, e, i, n, r, s) {
            void 0 === s && (s = 1);
            var a = !1;
            a = !(i.length > 6);
            var o = s >= 1 && r ? s % 2 == 0 ? 0 : .5 : 0;
            return this._saveToCmd(Rt._context._drawPoly, G.create.call(this, t + o, e + o, i, n, r, s, a, 0));
        }, t.drawPath = function(t, e, i, n, r) {
            return this._saveToCmd(Rt._context._drawPath, xt.create.call(this, t, e, i, n, r));
        }, t.draw9Grid = function(t, e, i, n, r, s) {
            void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === n && (n = 0), void 0 === r && (r = 0), 
            this._saveToCmd(null, Wt.create(t, e, i, n, r, s));
        }, s(0, t, "cmds", function() {
            return this._cmds;
        }, function(t) {
            this._sp && (this._sp._renderType |= 512, this._sp._setRenderType(this._sp._renderType)), 
            this._cmds = t, this._render = this._renderAll, this._repaint();
        }), Graphics;
    }(), qt = (function() {
        function HTMLChar() {
            this.reset();
        }
        r(HTMLChar, "laya.utils.HTMLChar");
        var t = HTMLChar.prototype;
        t.setData = function(t, e, i, n) {
            return this.char = t, this.charNum = t.charCodeAt(0), this.x = this.y = 0, this.width = e, 
            this.height = i, this.style = n, this.isWord = !HTMLChar._isWordRegExp.test(t), 
            this;
        }, t.reset = function() {
            return this.x = this.y = this.width = this.height = 0, this.isWord = !1, this.char = null, 
            this.charNum = 0, this.style = null, this;
        }, t.recover = function() {
            N.recover("HTMLChar", this.reset());
        }, t._isChar = function() {
            return !0;
        }, t._getCSSStyle = function() {
            return this.style;
        }, HTMLChar.create = function() {
            return N.getItemByClass("HTMLChar", HTMLChar);
        }, HTMLChar._isWordRegExp = new RegExp("[\\w.]", "");
    }(), function() {
        function AtlasGrid(t, e, i) {
            this.atlasID = 0, this._width = 0, this._height = 0, this._texCount = 0, this._rowInfo = null, 
            this._cells = null, this._used = 0, void 0 === t && (t = 0), void 0 === e && (e = 0), 
            void 0 === i && (i = 0), this._cells = null, this._rowInfo = null, this.atlasID = i, 
            this._init(t, e);
        }
        r(AtlasGrid, "laya.webgl.text.AtlasGrid");
        var t = AtlasGrid.prototype;
        return t.addRect = function(t, e, i, n) {
            return !!this._get(e, i, n) && (this._fill(n.x, n.y, e, i, t), this._texCount++, 
            !0);
        }, t._release = function() {
            this._cells = null, this._rowInfo = null;
        }, t._init = function(t, e) {
            return this._width = t, this._height = e, this._release(), 0 != this._width && (this._cells = new Uint8Array(this._width * this._height * 3), 
            this._rowInfo = new Uint8Array(this._height), this._used = 0, this._clear(), !0);
        }, t._get = function(t, e, i) {
            if (t > this._width || e > this._height) return !1;
            for (var n = -1, r = -1, s = this._width, a = this._height, o = this._cells, h = 0; h < a; h++) if (!(this._rowInfo[h] < t)) for (var u = 0; u < s; ) {
                var l = 3 * (h * s + u);
                if (0 != o[l] || o[l + 1] < t || o[l + 2] < e) u += o[l + 1]; else {
                    n = u, r = h;
                    for (var c = 0; c < t; c++) if (o[3 * c + l + 2] < e) {
                        n = -1;
                        break;
                    }
                    if (!(n < 0)) return i.x = n, i.y = r, !0;
                    u += o[l + 1];
                }
            }
            return !1;
        }, t._fill = function(t, e, i, n, r) {
            var s = this._width, a = this._height;
            this._check(t + i <= s && e + n <= a);
            for (var o = e; o < n + e; ++o) {
                this._check(this._rowInfo[o] >= i), this._rowInfo[o] -= i;
                for (var h = 0; h < i; h++) {
                    var u = 3 * (t + o * s + h);
                    this._check(0 == this._cells[u]), this._cells[u] = r, this._cells[u + 1] = i, this._cells[u + 2] = n;
                }
            }
            if (t > 0) for (o = 0; o < n; ++o) {
                var l = 0;
                for (h = t - 1; h >= 0 && 0 == this._cells[3 * ((e + o) * s + h)]; --h, ++l) ;
                for (h = l; h > 0; --h) this._cells[3 * ((e + o) * s + t - h) + 1] = h, this._check(h > 0);
            }
            if (e > 0) for (h = t; h < t + i; ++h) {
                for (l = 0, o = e - 1; o >= 0 && 0 == this._cells[3 * (h + o * s)]; --o, l++) ;
                for (o = l; o > 0; --o) this._cells[3 * (h + (e - o) * s) + 2] = o, this._check(o > 0);
            }
            this._used += i * n / (this._width * this._height);
        }, t._check = function(t) {
            0 == t && console.log("xtexMerger 错误啦");
        }, t._clear = function() {
            this._texCount = 0;
            for (var t = 0; t < this._height; t++) this._rowInfo[t] = this._width;
            for (var e = 0; e < this._height; e++) for (var i = 0; i < this._width; i++) {
                var n = 3 * (e * this._width + i);
                this._cells[n] = 0, this._cells[n + 1] = this._width - i, this._cells[n + 2] = this._width - e;
            }
        }, AtlasGrid;
    }()), Zt = function() {
        function StrokeTextCmd() {}
        r(StrokeTextCmd, "laya.display.cmd.StrokeTextCmd");
        var t = StrokeTextCmd.prototype;
        return t.recover = function() {
            N.recover("StrokeTextCmd", this);
        }, t.run = function(t, e, i) {
            t.strokeWord(this.text, this.x + e, this.y + i, this.font, this.color, this.lineWidth, this.textAlign);
        }, s(0, t, "cmdID", function() {
            return "StrokeText";
        }), StrokeTextCmd.create = function(t, e, i, n, r, s, a) {
            var o = N.getItemByClass("StrokeTextCmd", StrokeTextCmd);
            return o.text = t, o.x = e, o.y = i, o.font = n, o.color = r, o.lineWidth = s, o.textAlign = a, 
            o;
        }, StrokeTextCmd.ID = "StrokeText", StrokeTextCmd;
    }(), Jt = function() {
        function ICharRender() {}
        r(ICharRender, "laya.webgl.text.ICharRender");
        var t = ICharRender.prototype;
        return t.getWidth = function(t, e) {
            return 0;
        }, t.scale = function(t, e) {}, t.getCharBmp = function(t, e, i, n, r, s, a, o, h, u, l) {
            return null;
        }, s(0, t, "canvasWidth", function() {
            return 0;
        }, function(t) {}), ICharRender;
    }(), te = function() {
        function Ease() {}
        return r(Ease, "laya.utils.Ease"), Ease.linearNone = function(t, e, i, n) {
            return i * t / n + e;
        }, Ease.linearIn = function(t, e, i, n) {
            return i * t / n + e;
        }, Ease.linearInOut = function(t, e, i, n) {
            return i * t / n + e;
        }, Ease.linearOut = function(t, e, i, n) {
            return i * t / n + e;
        }, Ease.bounceIn = function(t, e, i, n) {
            return i - Ease.bounceOut(n - t, 0, i, n) + e;
        }, Ease.bounceInOut = function(t, e, i, n) {
            return t < .5 * n ? .5 * Ease.bounceIn(2 * t, 0, i, n) + e : .5 * Ease.bounceOut(2 * t - n, 0, i, n) + .5 * i + e;
        }, Ease.bounceOut = function(t, e, i, n) {
            return (t /= n) < 1 / 2.75 ? i * (7.5625 * t * t) + e : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + e : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + e : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + e;
        }, Ease.backIn = function(t, e, i, n, r) {
            return void 0 === r && (r = 1.70158), i * (t /= n) * t * ((r + 1) * t - r) + e;
        }, Ease.backInOut = function(t, e, i, n, r) {
            return void 0 === r && (r = 1.70158), (t /= .5 * n) < 1 ? .5 * i * (t * t * ((1 + (r *= 1.525)) * t - r)) + e : i / 2 * ((t -= 2) * t * ((1 + (r *= 1.525)) * t + r) + 2) + e;
        }, Ease.backOut = function(t, e, i, n, r) {
            return void 0 === r && (r = 1.70158), i * ((t = t / n - 1) * t * ((r + 1) * t + r) + 1) + e;
        }, Ease.elasticIn = function(t, e, i, n, r, s) {
            var a;
            return void 0 === r && (r = 0), void 0 === s && (s = 0), 0 == t ? e : 1 == (t /= n) ? e + i : (s || (s = .3 * n), 
            !r || i > 0 && r < i || i < 0 && r < -i ? (r = i, a = s / 4) : a = s / Ease.PI2 * Math.asin(i / r), 
            -r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * n - a) * Ease.PI2 / s) + e);
        }, Ease.elasticInOut = function(t, e, i, n, r, s) {
            var a;
            return void 0 === r && (r = 0), void 0 === s && (s = 0), 0 == t ? e : 2 == (t /= .5 * n) ? e + i : (s || (s = n * (.3 * 1.5)), 
            !r || i > 0 && r < i || i < 0 && r < -i ? (r = i, a = s / 4) : a = s / Ease.PI2 * Math.asin(i / r), 
            t < 1 ? r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * n - a) * Ease.PI2 / s) * -.5 + e : r * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * n - a) * Ease.PI2 / s) * .5 + i + e);
        }, Ease.elasticOut = function(t, e, i, n, r, s) {
            var a;
            return void 0 === r && (r = 0), void 0 === s && (s = 0), 0 == t ? e : 1 == (t /= n) ? e + i : (s || (s = .3 * n), 
            !r || i > 0 && r < i || i < 0 && r < -i ? (r = i, a = s / 4) : a = s / Ease.PI2 * Math.asin(i / r), 
            r * Math.pow(2, -10 * t) * Math.sin((t * n - a) * Ease.PI2 / s) + i + e);
        }, Ease.strongIn = function(t, e, i, n) {
            return i * (t /= n) * t * t * t * t + e;
        }, Ease.strongInOut = function(t, e, i, n) {
            return (t /= .5 * n) < 1 ? .5 * i * t * t * t * t * t + e : .5 * i * ((t -= 2) * t * t * t * t + 2) + e;
        }, Ease.strongOut = function(t, e, i, n) {
            return i * ((t = t / n - 1) * t * t * t * t + 1) + e;
        }, Ease.sineInOut = function(t, e, i, n) {
            return .5 * -i * (Math.cos(Math.PI * t / n) - 1) + e;
        }, Ease.sineIn = function(t, e, i, n) {
            return -i * Math.cos(t / n * Ease.HALF_PI) + i + e;
        }, Ease.sineOut = function(t, e, i, n) {
            return i * Math.sin(t / n * Ease.HALF_PI) + e;
        }, Ease.quintIn = function(t, e, i, n) {
            return i * (t /= n) * t * t * t * t + e;
        }, Ease.quintInOut = function(t, e, i, n) {
            return (t /= .5 * n) < 1 ? .5 * i * t * t * t * t * t + e : .5 * i * ((t -= 2) * t * t * t * t + 2) + e;
        }, Ease.quintOut = function(t, e, i, n) {
            return i * ((t = t / n - 1) * t * t * t * t + 1) + e;
        }, Ease.quartIn = function(t, e, i, n) {
            return i * (t /= n) * t * t * t + e;
        }, Ease.quartInOut = function(t, e, i, n) {
            return (t /= .5 * n) < 1 ? .5 * i * t * t * t * t + e : .5 * -i * ((t -= 2) * t * t * t - 2) + e;
        }, Ease.quartOut = function(t, e, i, n) {
            return -i * ((t = t / n - 1) * t * t * t - 1) + e;
        }, Ease.cubicIn = function(t, e, i, n) {
            return i * (t /= n) * t * t + e;
        }, Ease.cubicInOut = function(t, e, i, n) {
            return (t /= .5 * n) < 1 ? .5 * i * t * t * t + e : .5 * i * ((t -= 2) * t * t + 2) + e;
        }, Ease.cubicOut = function(t, e, i, n) {
            return i * ((t = t / n - 1) * t * t + 1) + e;
        }, Ease.quadIn = function(t, e, i, n) {
            return i * (t /= n) * t + e;
        }, Ease.quadInOut = function(t, e, i, n) {
            return (t /= .5 * n) < 1 ? .5 * i * t * t + e : .5 * -i * (--t * (t - 2) - 1) + e;
        }, Ease.quadOut = function(t, e, i, n) {
            return -i * (t /= n) * (t - 2) + e;
        }, Ease.expoIn = function(t, e, i, n) {
            return 0 == t ? e : i * Math.pow(2, 10 * (t / n - 1)) + e - .001 * i;
        }, Ease.expoInOut = function(t, e, i, n) {
            return 0 == t ? e : t == n ? e + i : (t /= .5 * n) < 1 ? .5 * i * Math.pow(2, 10 * (t - 1)) + e : .5 * i * (2 - Math.pow(2, -10 * --t)) + e;
        }, Ease.expoOut = function(t, e, i, n) {
            return t == n ? e + i : i * (1 - Math.pow(2, -10 * t / n)) + e;
        }, Ease.circIn = function(t, e, i, n) {
            return -i * (Math.sqrt(1 - (t /= n) * t) - 1) + e;
        }, Ease.circInOut = function(t, e, i, n) {
            return (t /= .5 * n) < 1 ? .5 * -i * (Math.sqrt(1 - t * t) - 1) + e : .5 * i * (Math.sqrt(1 - (t -= 2) * t) + 1) + e;
        }, Ease.circOut = function(t, e, i, n) {
            return i * Math.sqrt(1 - (t = t / n - 1) * t) + e;
        }, Ease.HALF_PI = .5 * Math.PI, Ease.PI2 = 2 * Math.PI, Ease;
    }(), ee = (function() {
        function PoolCache() {
            this.sign = null, this.maxCount = 1e3;
        }
        r(PoolCache, "laya.utils.PoolCache");
        var t = PoolCache.prototype;
        t.getCacheList = function() {
            return N.getPoolBySign(this.sign);
        }, t.tryDispose = function(t) {
            var e;
            (e = N.getPoolBySign(this.sign)).length > this.maxCount && e.splice(this.maxCount, e.length - this.maxCount);
        }, PoolCache.addPoolCacheManager = function(t, e) {
            var i;
            void 0 === e && (e = 100), (i = new PoolCache()).sign = t, i.maxCount = e, q.regCacheByFunction(ie.bind(i.tryDispose, i), ie.bind(i.getCacheList, i));
        };
    }(), function() {
        function MatirxArray() {}
        r(MatirxArray, "laya.webgl.utils.MatirxArray"), MatirxArray.ArrayMul = function(t, e, i) {
            if (t) if (e) for (var n = NaN, r = NaN, s = NaN, a = NaN, o = 0; o < 4; o++) n = t[o], 
            r = t[o + 4], s = t[o + 8], a = t[o + 12], i[o] = n * e[0] + r * e[1] + s * e[2] + a * e[3], 
            i[o + 4] = n * e[4] + r * e[5] + s * e[6] + a * e[7], i[o + 8] = n * e[8] + r * e[9] + s * e[10] + a * e[11], 
            i[o + 12] = n * e[12] + r * e[13] + s * e[14] + a * e[15]; else MatirxArray.copyArray(t, i); else MatirxArray.copyArray(e, i);
        }, MatirxArray.copyArray = function(t, e) {
            if (t && e) for (var i = 0; i < t.length; i++) e[i] = t[i];
        };
    }(), function() {
        function Mouse() {}
        r(Mouse, "laya.utils.Mouse"), s(1, Mouse, "cursor", function() {
            return Mouse._style.cursor;
        }, function(t) {
            Mouse._style.cursor = t;
        }), Mouse.hide = function() {
            "none" != Mouse.cursor && (Mouse._preCursor = Mouse.cursor, Mouse.cursor = "none");
        }, Mouse.show = function() {
            "none" == Mouse.cursor && (Mouse._preCursor ? Mouse.cursor = Mouse._preCursor : Mouse.cursor = "auto");
        }, Mouse._preCursor = null, n(Mouse, [ "_style", function() {
            return this._style = It.document.body.style;
        } ]);
    }(), function() {
        function VertexArrayObject() {}
        return r(VertexArrayObject, "laya.webgl.VertexArrayObject"), VertexArrayObject;
    }()(function() {
        var e = {};
        function synthesizeGLError(i, n) {
            var r;
            e[i] = !0, void 0 !== n && (r = n, t.console && t.console.error && t.console.error(r));
        }
        var i = function WebGLVertexArrayObjectOES(t) {
            var e = t.gl;
            this.ext = t, this.isAlive = !0, this.hasBeenBound = !1, this.elementArrayBuffer = null, 
            this.attribs = new Array(t.maxVertexAttribs);
            for (var i = 0; i < this.attribs.length; i++) {
                var n = new WebGLVertexArrayObjectOES.VertexAttrib(e);
                this.attribs[i] = n;
            }
            this.maxAttrib = 0;
        };
        (i.VertexAttrib = function(t) {
            this.enabled = !1, this.buffer = null, this.size = 4, this.type = t.FLOAT, this.normalized = !1, 
            this.stride = 16, this.offset = 0, this.cached = "", this.recache();
        }).prototype.recache = function() {
            this.cached = [ this.size, this.type, this.normalized, this.stride, this.offset ].join(":");
        };
        var n = function(i) {
            var n = this;
            this.gl = i, function(t) {
                var i = t.getError;
                t.getError = function() {
                    do {
                        (n = i.apply(t)) != t.NO_ERROR && (e[n] = !0);
                    } while (n != t.NO_ERROR);
                    for (var n in e) if (e[n]) return delete e[n], parseInt(n);
                    return t.NO_ERROR;
                };
            }(i);
            var r = this.original = {
                getParameter: i.getParameter,
                enableVertexAttribArray: i.enableVertexAttribArray,
                disableVertexAttribArray: i.disableVertexAttribArray,
                bindBuffer: i.bindBuffer,
                getVertexAttrib: i.getVertexAttrib,
                vertexAttribPointer: i.vertexAttribPointer
            };
            i.getParameter = function(t) {
                return t == n.VERTEX_ARRAY_BINDING_OES ? n.currentVertexArrayObject == n.defaultVertexArrayObject ? null : n.currentVertexArrayObject : r.getParameter.apply(this, arguments);
            }, i.enableVertexAttribArray = function(t) {
                var e = n.currentVertexArrayObject;
                return e.maxAttrib = Math.max(e.maxAttrib, t), e.attribs[t].enabled = !0, r.enableVertexAttribArray.apply(this, arguments);
            }, i.disableVertexAttribArray = function(t) {
                var e = n.currentVertexArrayObject;
                return e.maxAttrib = Math.max(e.maxAttrib, t), e.attribs[t].enabled = !1, r.disableVertexAttribArray.apply(this, arguments);
            }, i.bindBuffer = function(t, e) {
                switch (t) {
                  case i.ARRAY_BUFFER:
                    n.currentArrayBuffer = e;
                    break;

                  case i.ELEMENT_ARRAY_BUFFER:
                    n.currentVertexArrayObject.elementArrayBuffer = e;
                }
                return r.bindBuffer.apply(this, arguments);
            }, i.getVertexAttrib = function(t, e) {
                var s = n.currentVertexArrayObject.attribs[t];
                switch (e) {
                  case i.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING:
                    return s.buffer;

                  case i.VERTEX_ATTRIB_ARRAY_ENABLED:
                    return s.enabled;

                  case i.VERTEX_ATTRIB_ARRAY_SIZE:
                    return s.size;

                  case i.VERTEX_ATTRIB_ARRAY_STRIDE:
                    return s.stride;

                  case i.VERTEX_ATTRIB_ARRAY_TYPE:
                    return s.type;

                  case i.VERTEX_ATTRIB_ARRAY_NORMALIZED:
                    return s.normalized;

                  default:
                    return r.getVertexAttrib.apply(this, arguments);
                }
            }, i.vertexAttribPointer = function(t, e, i, s, a, o) {
                var h = n.currentVertexArrayObject;
                h.maxAttrib = Math.max(h.maxAttrib, t);
                var u = h.attribs[t];
                return u.buffer = n.currentArrayBuffer, u.size = e, u.type = i, u.normalized = s, 
                u.stride = a, u.offset = o, u.recache(), r.vertexAttribPointer.apply(this, arguments);
            }, i.instrumentExtension && i.instrumentExtension(this, "OES_vertex_array_object"), 
            i.canvas && i.canvas.addEventListener && i.canvas.addEventListener("webglcontextrestored", function() {
                var e;
                e = "OESVertexArrayObject emulation library context restored", t.console && t.console.log && t.console.log(e), 
                n.reset_();
            }, !0), this.reset_();
        };
        n.prototype.VERTEX_ARRAY_BINDING_OES = 34229, n.prototype.reset_ = function() {
            if (void 0 !== this.vertexArrayObjects) for (var t = 0; t < this.vertexArrayObjects.length; ++t) this.vertexArrayObjects.isAlive = !1;
            var e = this.gl;
            this.maxVertexAttribs = e.getParameter(e.MAX_VERTEX_ATTRIBS), this.defaultVertexArrayObject = new i(this), 
            this.currentVertexArrayObject = null, this.currentArrayBuffer = null, this.vertexArrayObjects = [ this.defaultVertexArrayObject ], 
            this.bindVertexArrayOES(null);
        }, n.prototype.createVertexArrayOES = function() {
            var t = new i(this);
            return this.vertexArrayObjects.push(t), t;
        }, n.prototype.deleteVertexArrayOES = function(t) {
            t.isAlive = !1, this.vertexArrayObjects.splice(this.vertexArrayObjects.indexOf(t), 1), 
            this.currentVertexArrayObject == t && this.bindVertexArrayOES(null);
        }, n.prototype.isVertexArrayOES = function(t) {
            return !!(t && t instanceof i && t.hasBeenBound && t.ext == this);
        }, n.prototype.bindVertexArrayOES = function(t) {
            var e = this.gl;
            if (!t || t.isAlive) {
                var i = this.original, n = this.currentVertexArrayObject;
                this.currentVertexArrayObject = t || this.defaultVertexArrayObject, this.currentVertexArrayObject.hasBeenBound = !0;
                var r = this.currentVertexArrayObject;
                if (n != r) {
                    n && r.elementArrayBuffer == n.elementArrayBuffer || i.bindBuffer.call(e, e.ELEMENT_ARRAY_BUFFER, r.elementArrayBuffer);
                    for (var s = this.currentArrayBuffer, a = Math.max(n ? n.maxAttrib : 0, r.maxAttrib), o = 0; o <= a; o++) {
                        var h = r.attribs[o], u = n ? n.attribs[o] : null;
                        if (n && h.enabled == u.enabled || (h.enabled ? i.enableVertexAttribArray.call(e, o) : i.disableVertexAttribArray.call(e, o)), 
                        h.enabled) {
                            var l = !1;
                            n && h.buffer == u.buffer || (s != h.buffer && (i.bindBuffer.call(e, e.ARRAY_BUFFER, h.buffer), 
                            s = h.buffer), l = !0), (l || h.cached != u.cached) && i.vertexAttribPointer.call(e, o, h.size, h.type, h.normalized, h.stride, h.offset);
                        }
                    }
                    this.currentArrayBuffer != s && i.bindBuffer.call(e, e.ARRAY_BUFFER, this.currentArrayBuffer);
                }
            } else synthesizeGLError(e.INVALID_OPERATION, "bindVertexArrayOES: attempt to bind deleted arrayObject");
        }, t._setupVertexArrayObject = function(t) {
            var e = t.getSupportedExtensions;
            t.getSupportedExtensions = function() {
                var t = e.call(this) || [];
                return t.indexOf("OES_vertex_array_object") < 0 && t.push("OES_vertex_array_object"), 
                t;
            };
            var i = t.getExtension;
            t.getExtension = function(t) {
                var e = i.call(this, t);
                return e || ("OES_vertex_array_object" !== t ? null : (this.__OESVertexArrayObject || (console.log("Setup OES_vertex_array_object polyfill"), 
                this.__OESVertexArrayObject = new n(this)), this.__OESVertexArrayObject));
            };
        }, t._forceSetupVertexArrayObject = function(t) {
            var e = t.getSupportedExtensions;
            t.getSupportedExtensions = function() {
                var t = e.call(this) || [];
                return t.indexOf("OES_vertex_array_object") < 0 && t.push("OES_vertex_array_object"), 
                t;
            };
            var i = t.getExtension;
            t.getExtension = function(t) {
                if ("OES_vertex_array_object" === t) return this.__OESVertexArrayObject || (console.log("Setup OES_vertex_array_object polyfill"), 
                this.__OESVertexArrayObject = new n(this)), this.__OESVertexArrayObject;
                var e = i.call(this, t);
                return e || null;
            };
        };
    }()), function() {
        function WebGLRTMgr() {}
        return r(WebGLRTMgr, "laya.resource.WebGLRTMgr"), WebGLRTMgr.getRT = function(t, e) {
            e |= 0, (t |= 0) >= 1e4 && console.error("getRT error! w too big");
            var i, n = 1e4 * e + t, r = WebGLRTMgr.dict[n];
            return r && r.length > 0 ? ((i = r.pop())._mgrKey = n, i) : ((i = new di(t, e, 1, -1))._mgrKey = n, 
            i);
        }, WebGLRTMgr.releaseRT = function(t) {
            if (!(t._mgrKey <= 0)) {
                var e = WebGLRTMgr.dict[t._mgrKey];
                !e && (e = [], WebGLRTMgr.dict[t._mgrKey] = e), t._mgrKey = 0, e.push(t);
            }
        }, WebGLRTMgr.dict = {}, WebGLRTMgr;
    }()), ie = function() {
        function Utils() {}
        return r(Utils, "laya.utils.Utils"), Utils.toRadian = function(t) {
            return t * Utils._pi2;
        }, Utils.toAngle = function(t) {
            return t * Utils._pi;
        }, Utils.toHexColor = function(t) {
            if (t < 0 || isNaN(t)) return null;
            for (var e = t.toString(16); e.length < 6; ) e = "0" + e;
            return "#" + e;
        }, Utils.getGID = function() {
            return Utils._gid++;
        }, Utils.concatArray = function(t, e) {
            if (!e) return t;
            if (!t) return e;
            var i = 0, n = e.length;
            for (i = 0; i < n; i++) t.push(e[i]);
            return t;
        }, Utils.clearArray = function(t) {
            return t ? (t.length = 0, t) : t;
        }, Utils.copyArray = function(t, e) {
            if (t || (t = []), !e) return t;
            t.length = e.length;
            var i = 0, n = e.length;
            for (i = 0; i < n; i++) t[i] = e[i];
            return t;
        }, Utils.getGlobalRecByPoints = function(t, e, i, n, r) {
            var s, a;
            s = Xt.create().setTo(e, i), s = t.localToGlobal(s), a = Xt.create().setTo(n, r), 
            a = t.localToGlobal(a);
            var o = mt._getWrapRec([ s.x, s.y, a.x, a.y ]);
            return s.recover(), a.recover(), o;
        }, Utils.getGlobalPosAndScale = function(t) {
            return Utils.getGlobalRecByPoints(t, 0, 0, 1, 1);
        }, Utils.bind = function(t, e) {
            return t.bind(e);
        }, Utils.measureText = function(t, e) {
            return le.measureText(t, e);
        }, Utils.updateOrder = function(t) {
            if (!t || t.length < 2) return !1;
            for (var e, i = 1, n = 0, r = t.length, s = NaN; i < r; ) {
                for (e = t[n = i], s = t[n]._zOrder; --n > -1 && t[n]._zOrder > s; ) t[n + 1] = t[n];
                t[n + 1] = e, i++;
            }
            return !0;
        }, Utils.transPointList = function(t, e, i) {
            var n = 0, r = t.length;
            for (n = 0; n < r; n += 2) t[n] += e, t[n + 1] += i;
        }, Utils.parseInt = function(t, e) {
            void 0 === e && (e = 0);
            var i = It.window.parseInt(t, e);
            return isNaN(i) ? 0 : i;
        }, Utils.getFileExtension = function(t) {
            Utils._extReg.lastIndex = t.lastIndexOf(".");
            var e = Utils._extReg.exec(t);
            return e && e.length > 1 ? e[1].toLowerCase() : null;
        }, Utils.getTransformRelativeToWindow = function(t, e, n) {
            var r = i.stage, s = laya.utils.Utils.getGlobalPosAndScale(t), a = r._canvasTransform.clone(), o = a.tx, h = a.ty;
            a.rotate(-Math.PI / 180 * i.stage.canvasDegree), a.scale(i.stage.clientScaleX, i.stage.clientScaleY);
            var u = i.stage.canvasDegree % 180 != 0, l = NaN, c = NaN;
            u ? (l = n + s.y, c = e + s.x, l *= a.d, c *= a.a, 90 == i.stage.canvasDegree ? (l = o - l, 
            c += h) : (l += o, c = h - c)) : (l = e + s.x, c = n + s.y, l *= a.a, c *= a.d, 
            l += o, c += h), c += i.stage._safariOffsetY;
            var _ = NaN, d = NaN;
            return u ? (_ = a.d * s.height, d = a.a * s.width) : (_ = a.a * s.width, d = a.d * s.height), 
            {
                x: l,
                y: c,
                scaleX: _,
                scaleY: d
            };
        }, Utils.fitDOMElementInArea = function(t, e, n, r, s, a) {
            t._fitLayaAirInitialized || (t._fitLayaAirInitialized = !0, t.style.transformOrigin = t.style.webKittransformOrigin = "left top", 
            t.style.position = "absolute");
            var o = Utils.getTransformRelativeToWindow(e, n, r);
            t.style.transform = t.style.webkitTransform = "scale(" + o.scaleX + "," + o.scaleY + ") rotate(" + i.stage.canvasDegree + "deg)", 
            t.style.width = s + "px", t.style.height = a + "px", t.style.left = o.x + "px", 
            t.style.top = o.y + "px";
        }, Utils.isOkTextureList = function(t) {
            if (!t) return !1;
            var e, i = 0, n = t.length;
            for (i = 0; i < n; i++) if (!(e = t[i]) || !e._getSource()) return !1;
            return !0;
        }, Utils.isOKCmdList = function(t) {
            if (!t) return !1;
            var e = 0, i = t.length;
            for (e = 0; e < i; e++) t[e];
            return !0;
        }, Utils.getQueryString = function(e) {
            if (It.onMiniGame) return null;
            if (!t.location || !t.location.search) return null;
            var i = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"), n = t.location.search.substr(1).match(i);
            return null != n ? unescape(n[2]) : null;
        }, Utils._gid = 1, Utils._pi = 180 / Math.PI, Utils._pi2 = Math.PI / 180, Utils._extReg = /\.(\w+)\??/g, 
        Utils.parseXMLFromString = function(t) {
            var e;
            if (t = t.replace(/>\s+</g, "><"), (e = new DOMParser().parseFromString(t, "text/xml")).firstChild.textContent.indexOf("This page contains the following errors") > -1) throw new Error(e.firstChild.firstChild.textContent);
            return e;
        }, Utils;
    }(), ne = (function() {
        function ArabicReshaper() {}
        r(ArabicReshaper, "laya.webgl.text.ArabicReshaper");
        var t = ArabicReshaper.prototype;
        t.characterMapContains = function(t) {
            for (var e = 0; e < ArabicReshaper.charsMap.length; ++e) if (ArabicReshaper.charsMap[e][0] === t) return !0;
            return !1;
        }, t.getCharRep = function(t) {
            for (var e = 0; e < ArabicReshaper.charsMap.length; ++e) if (ArabicReshaper.charsMap[e][0] === t) return ArabicReshaper.charsMap[e];
            return !1;
        }, t.getCombCharRep = function(t, e) {
            for (var i = 0; i < ArabicReshaper.combCharsMap.length; ++i) if (ArabicReshaper.combCharsMap[i][0][0] === t && ArabicReshaper.combCharsMap[i][0][1] === e) return ArabicReshaper.combCharsMap[i];
            return !1;
        }, t.isTransparent = function(t) {
            for (var e = 0; e < ArabicReshaper.transChars.length; ++e) if (ArabicReshaper.transChars[e] === t) return !0;
            return !1;
        }, t.getOriginalCharsFromCode = function(t) {
            var e = 0;
            for (e = 0; e < ArabicReshaper.charsMap.length; ++e) if (ArabicReshaper.charsMap[e].indexOf(t) > -1) return String.fromCharCode(ArabicReshaper.charsMap[e][0]);
            for (e = 0; e < ArabicReshaper.combCharsMap.length; ++e) if (ArabicReshaper.combCharsMap[e].indexOf(t) > -1) return String.fromCharCode(ArabicReshaper.combCharsMap[e][0][0]) + String.fromCharCode(ArabicReshaper.combCharsMap[e][0][1]);
            return String.fromCharCode(t);
        }, t.convertArabic = function(t) {
            for (var e, i, n = "", r = 0; r < t.length; ++r) {
                var s = t.charCodeAt(r);
                if (this.characterMapContains(s)) {
                    for (var a = null, o = null, h = r - 1, u = r + 1; h >= 0 && this.isTransparent(t.charCodeAt(h)); --h) ;
                    for ((!(e = !!(a = h >= 0 ? t.charCodeAt(h) : null) && this.getCharRep(a)) || null == e[2] && null == e[3]) && (a = null); u < t.length && this.isTransparent(t.charCodeAt(u)); ++u) ;
                    if ((!(e = !!(o = u < t.length ? t.charCodeAt(u) : null) && this.getCharRep(o)) || null == e[3] && null == e[4]) && (o = null), 
                    1604 === s && null != o && (1570 === o || 1571 === o || 1573 === o || 1575 === o)) {
                        i = this.getCombCharRep(s, o), n += null != a ? String.fromCharCode(i[4]) : String.fromCharCode(i[1]), 
                        ++r;
                        continue;
                    }
                    if (e = this.getCharRep(s), null != a && null != o && null != e[3]) {
                        n += String.fromCharCode(e[3]);
                        continue;
                    }
                    if (null != a && null != e[4]) {
                        n += String.fromCharCode(e[4]);
                        continue;
                    }
                    if (null != o && null != e[2]) {
                        n += String.fromCharCode(e[2]);
                        continue;
                    }
                    n += String.fromCharCode(e[1]);
                } else n += String.fromCharCode(s);
            }
            return n;
        }, t.convertArabicBack = function(t) {
            var e = "", i = 0, n = 0;
            for (n = 0; n < t.length; ++n) i = t.charCodeAt(n), e += this.getOriginalCharsFromCode(i);
            return e;
        }, n(ArabicReshaper, [ "charsMap", function() {
            return this.charsMap = [ [ 1569, 65152, null, null, null ], [ 1570, 65153, null, null, 65154 ], [ 1571, 65155, null, null, 65156 ], [ 1572, 65157, null, null, 65158 ], [ 1573, 65159, null, null, 65160 ], [ 1574, 65161, 65163, 65164, 65162 ], [ 1575, 65165, null, null, 65166 ], [ 1576, 65167, 65169, 65170, 65168 ], [ 1577, 65171, null, null, 65172 ], [ 1578, 65173, 65175, 65176, 65174 ], [ 1579, 65177, 65179, 65180, 65178 ], [ 1580, 65181, 65183, 65184, 65182 ], [ 1581, 65185, 65187, 65188, 65186 ], [ 1582, 65189, 65191, 65192, 65190 ], [ 1583, 65193, null, null, 65194 ], [ 1584, 65195, null, null, 65196 ], [ 1585, 65197, null, null, 65198 ], [ 1586, 65199, null, null, 65200 ], [ 1587, 65201, 65203, 65204, 65202 ], [ 1588, 65205, 65207, 65208, 65206 ], [ 1589, 65209, 65211, 65212, 65210 ], [ 1590, 65213, 65215, 65216, 65214 ], [ 1591, 65217, 65219, 65220, 65218 ], [ 1592, 65221, 65223, 65224, 65222 ], [ 1593, 65225, 65227, 65228, 65226 ], [ 1594, 65229, 65231, 65232, 65230 ], [ 1600, 1600, 1600, 1600, 1600 ], [ 1601, 65233, 65235, 65236, 65234 ], [ 1602, 65237, 65239, 65240, 65238 ], [ 1603, 65241, 65243, 65244, 65242 ], [ 1604, 65245, 65247, 65248, 65246 ], [ 1605, 65249, 65251, 65252, 65250 ], [ 1606, 65253, 65255, 65256, 65254 ], [ 1607, 65257, 65259, 65260, 65258 ], [ 1608, 65261, null, null, 65262 ], [ 1609, 65263, null, null, 65264 ], [ 1610, 65265, 65267, 65268, 65266 ], [ 1662, 64342, 64344, 64345, 64343 ], [ 1740, 64508, 64510, 64511, 64509 ], [ 1670, 64378, 64380, 64381, 64379 ], [ 1705, 64398, 64400, 64401, 64399 ], [ 1711, 64402, 64404, 64405, 64403 ], [ 1688, 64394, null, null, 64395 ] ];
        }, "combCharsMap", function() {
            return this.combCharsMap = [ [ [ 1604, 1570 ], 65269, null, null, 65270 ], [ [ 1604, 1571 ], 65271, null, null, 65272 ], [ [ 1604, 1573 ], 65273, null, null, 65274 ], [ [ 1604, 1575 ], 65275, null, null, 65276 ] ];
        }, "transChars", function() {
            return this.transChars = [ 1552, 1554, 1555, 1556, 1557, 1611, 1612, 1613, 1614, 1615, 1616, 1617, 1618, 1619, 1620, 1621, 1622, 1623, 1624, 1648, 1750, 1751, 1752, 1753, 1754, 1755, 1756, 1759, 1760, 1761, 1762, 1763, 1764, 1767, 1768, 1770, 1771, 1772, 1773 ];
        } ]);
    }(), function() {
        function DrawLinesCmd() {}
        r(DrawLinesCmd, "laya.display.cmd.DrawLinesCmd");
        var t = DrawLinesCmd.prototype;
        return t.recover = function() {
            this.points = null, this.lineColor = null, N.recover("DrawLinesCmd", this);
        }, t.run = function(t, e, i) {
            t._drawLines(this.x + e, this.y + i, this.points, this.lineColor, this.lineWidth, this.vid);
        }, s(0, t, "cmdID", function() {
            return "DrawLines";
        }), DrawLinesCmd.create = function(t, e, i, n, r, s) {
            var a = N.getItemByClass("DrawLinesCmd", DrawLinesCmd);
            return a.x = t, a.y = e, a.points = i, a.lineColor = n, a.lineWidth = r, a.vid = s, 
            a;
        }, DrawLinesCmd.ID = "DrawLines", DrawLinesCmd;
    }()), re = function() {
        function CharSubmitCache() {
            this._data = [], this._ndata = 0, this._tex = null, this._imgId = 0, this._clipid = -1, 
            this._enbale = !1, this._colorFiler = null, this._clipMatrix = new st();
        }
        r(CharSubmitCache, "laya.webgl.text.CharSubmitCache");
        var t = CharSubmitCache.prototype;
        return t.clear = function() {
            this._tex = null, this._imgId = -1, this._ndata = 0, this._enbale = !1, this._colorFiler = null;
        }, t.destroy = function() {
            this.clear(), this._data.length = 0, this._data = null;
        }, t.add = function(t, e, i, n, r, s) {
            this._ndata > 0 && (this._tex != e || this._imgId != i || this._clipid >= 0 && this._clipid != t._clipInfoID) && this.submit(t), 
            this._clipid = t._clipInfoID, t._globalClipMatrix.copyTo(this._clipMatrix), this._tex = e, 
            this._imgId = i, this._colorFiler = t._colorFiler, this._data[this._ndata] = n, 
            this._data[this._ndata + 1] = r, this._data[this._ndata + 2] = s, this._ndata += 3;
        }, t.getPos = function() {
            return 0 == CharSubmitCache.__nPosPool ? new Array(8) : CharSubmitCache.__posPool[--CharSubmitCache.__nPosPool];
        }, t.enable = function(t, e) {
            t !== this._enbale && (this._enbale = t, this._enbale || this.submit(e));
        }, t.submit = function(t) {
            var e = this._ndata;
            if (e) {
                var i = t._mesh, n = t._colorFiler;
                t._colorFiler = this._colorFiler;
                var r = ye.create(t, i, H.create(1, 0));
                t._submits[t._submits._length++] = t._curSubmit = r, r.shaderValue.textureHost = this._tex, 
                r._key.other = this._imgId, t._colorFiler = n, t._copyClipInfo(r, this._clipMatrix), 
                r.clipInfoID = this._clipid;
                for (var s = 0; s < e; s += 3) i.addQuad(this._data[s], this._data[s + 1], this._data[s + 2], !0), 
                CharSubmitCache.__posPool[CharSubmitCache.__nPosPool++] = this._data[s];
                e /= 3, r._numEle += 6 * e, i.indexNum += 6 * e, i.vertNum += 4 * e, t._drawCount += e, 
                this._ndata = 0, w.loopCount % 100 == 0 && (this._data.length = 0);
            }
        }, CharSubmitCache.__posPool = [], CharSubmitCache.__nPosPool = 0, CharSubmitCache;
    }(), se = function() {
        function Config() {}
        return r(Config, "Config"), Config.animationInterval = 50, Config.isAntialias = !1, 
        Config.isAlpha = !1, Config.premultipliedAlpha = !0, Config.isStencil = !0, Config.preserveDrawingBuffer = !1, 
        Config.webGL2D_MeshAllocMaxMem = !0, Config.is2DPixelArtGame = !1, Config.useWebGL2 = !1, 
        Config.useRetinalCanvas = !1, Config;
    }(), ae = function() {
        function DrawCurvesCmd() {}
        r(DrawCurvesCmd, "laya.display.cmd.DrawCurvesCmd");
        var t = DrawCurvesCmd.prototype;
        return t.recover = function() {
            this.points = null, this.lineColor = null, N.recover("DrawCurvesCmd", this);
        }, t.run = function(t, e, i) {
            t.drawCurves(this.x + e, this.y + i, this.points, this.lineColor, this.lineWidth);
        }, s(0, t, "cmdID", function() {
            return "DrawCurves";
        }), DrawCurvesCmd.create = function(t, e, i, n, r) {
            var s = N.getItemByClass("DrawCurvesCmd", DrawCurvesCmd);
            return s.x = t, s.y = e, s.points = i, s.lineColor = n, s.lineWidth = r, s;
        }, DrawCurvesCmd.ID = "DrawCurves", DrawCurvesCmd;
    }(), oe = function() {
        function FillTextCmd() {
            this._textIsWorldText = !1, this._fontColor = 4294967295, this._strokeColor = 0, 
            this._nTexAlign = 0, this._fontObj = FillTextCmd._defFontObj;
        }
        r(FillTextCmd, "laya.display.cmd.FillTextCmd");
        var t = FillTextCmd.prototype;
        return t.recover = function() {
            N.recover("FillTextCmd", this);
        }, t.run = function(t, e, n) {
            i.stage.isGlobalRepaint() && this._textIsWorldText && this._text.cleanCache(), this._textIsWorldText ? t._fast_filltext(this._text, this.x + e, this.y + n, this._fontObj, this._color, null, 0, this._nTexAlign, 0) : t.drawText(this._text, this.x + e, this.y + n, this._font, this._color, this._textAlign);
        }, s(0, t, "text", function() {
            return this._text;
        }, function(t) {
            this._text = t, this._textIsWorldText = t instanceof laya.utils.WordText, this._textIsWorldText && this._text.cleanCache();
        }), s(0, t, "cmdID", function() {
            return "FillText";
        }), s(0, t, "color", function() {
            return this._color;
        }, function(t) {
            this._color = t, this._fontColor = o.create(t).numColor, this._textIsWorldText && this._text.cleanCache();
        }), s(0, t, "font", function() {
            return this._font;
        }, function(t) {
            this._font = t, this._fontObj = fe.Parse(t), this._textIsWorldText && this._text.cleanCache();
        }), s(0, t, "textAlign", function() {
            return this._textAlign;
        }, function(t) {
            switch (this._textAlign = t, t) {
              case "center":
                this._nTexAlign = lt.ENUM_TEXTALIGN_CENTER;
                break;

              case "right":
                this._nTexAlign = lt.ENUM_TEXTALIGN_RIGHT;
                break;

              default:
                this._nTexAlign = lt.ENUM_TEXTALIGN_DEFAULT;
            }
            this._textIsWorldText && this._text.cleanCache();
        }), FillTextCmd.create = function(t, e, i, n, r, s) {
            var a = N.getItemByClass("FillTextCmd", FillTextCmd);
            return a.text = t, a._textIsWorldText = t instanceof laya.utils.WordText, a.x = e, 
            a.y = i, a.font = n, a.color = r, a.textAlign = s, a;
        }, FillTextCmd.ID = "FillText", n(FillTextCmd, [ "_defFontObj", function() {
            return this._defFontObj = new fe(null);
        } ]), FillTextCmd;
    }(), he = (function() {
        function ShaderValue() {}
        r(ShaderValue, "laya.webgl.shader.ShaderValue");
    }(), function() {
        function KeyLocation() {}
        r(KeyLocation, "laya.events.KeyLocation"), KeyLocation.STANDARD = 0, KeyLocation.LEFT = 1, 
        KeyLocation.RIGHT = 2, KeyLocation.NUM_PAD = 3;
    }(), function() {
        function SaveClipRect() {
            this._clipInfoID = -1, this.incache = !1, this._globalClipMatrix = new st(), this._clipRect = new mt();
        }
        r(SaveClipRect, "laya.webgl.canvas.save.SaveClipRect");
        var t = SaveClipRect.prototype;
        return i.imps(t, {
            "laya.webgl.canvas.save.ISaveData": !0
        }), t.isSaveMark = function() {
            return !1;
        }, t.restore = function(t) {
            this._globalClipMatrix.copyTo(t._globalClipMatrix), this._clipRect.clone(t._clipRect), 
            t._clipInfoID = this._clipInfoID, SaveClipRect.POOL[SaveClipRect.POOL._length++] = this, 
            t._clipInCache = this.incache;
        }, SaveClipRect.save = function(t) {
            if (131072 != (131072 & t._saveMark._saveuse)) {
                t._saveMark._saveuse |= 131072;
                var e = SaveClipRect.POOL, i = e._length > 0 ? e[--e._length] : new SaveClipRect();
                t._globalClipMatrix.copyTo(i._globalClipMatrix), t._clipRect.clone(i._clipRect), 
                i._clipInfoID = t._clipInfoID, i.incache = t._clipInCache;
                var n = t._save;
                n[n._length++] = i;
            }
        }, SaveClipRect.POOL = h._createArray(), SaveClipRect;
    }()), ue = function() {
        function GlowFilterGLRender() {}
        r(GlowFilterGLRender, "laya.filters.GlowFilterGLRender");
        var t = GlowFilterGLRender.prototype;
        return t.setShaderInfo = function(t, e, i, n) {
            t.defines.add(n.type);
            var r = t;
            r.u_blurInfo1 = n._sv_blurInfo1;
            var s = n._sv_blurInfo2;
            s[0] = e, s[1] = i, r.u_blurInfo2 = s, r.u_color = n.getColor();
        }, t.render = function(t, e, i, n, r) {
            var s = i, a = n, o = H.create(1, 0);
            this.setShaderInfo(o, s, a, r);
            var h = H.create(1, 0), u = st.TEMP.identity();
            e.drawTarget(t, 0, 0, s, a, u, o), e.drawTarget(t, 0, 0, s, a, u, h);
        }, GlowFilterGLRender;
    }(), le = function() {
        function RunDriver() {}
        return r(RunDriver, "laya.utils.RunDriver"), RunDriver.createShaderCondition = function(t) {
            var e = "(function() {return " + t + ";})";
            return i._runScript(e);
        }, RunDriver.fontMap = [], RunDriver.measureText = function(t, e) {
            var i = RunDriver.hanzi.test(t);
            if (i && RunDriver.fontMap[e]) return RunDriver.fontMap[e];
            var n = It.context;
            n.font = e;
            var r = n.measureText(t);
            return i && (RunDriver.fontMap[e] = r), r;
        }, RunDriver.drawToCanvas = function(t, e, i, n, r, s) {
            r -= t.x, s -= t.y, r |= 0, s |= 0, i |= 0, n |= 0;
            var a = new lt();
            a.size(i, n), a.asBitmap = !0, a._targets.start(), E.renders[e]._fun(t, a, r, s), 
            a.flush(), a._targets.end(), a._targets.restore();
            var o = a._targets.getData(0, 0, i, n);
            a.destroy();
            for (var h = new ImageData(i, n), u = 4 * i, l = (new Uint8Array(u), h.data), c = n - 1, _ = c * u, d = 0; c >= 0; c--) l.set(o.subarray(d, d + u), _), 
            _ -= u, d += u;
            var f = new si(!0);
            return f.size(i, n), f.getContext("2d").putImageData(h, 0, 0), f;
        }, RunDriver.drawToTexture = function(t, e, i, n, r, s) {
            r -= t.x, s -= t.y, r |= 0, s |= 0, i |= 0, n |= 0;
            var a = new lt();
            a.size(i, n), a.asBitmap = !0, a._targets.start(), E.renders[e]._fun(t, a, r, s), 
            a.flush(), a._targets.end(), a._targets.restore();
            var o = new Ee(a._targets, Ee.INV_UV);
            return a.destroy(!0), o;
        }, RunDriver.changeWebGLSize = function(t, e) {
            Ct.onStageResize(t, e);
        }, RunDriver.clear = function(t) {
            lt.set2DRenderConfig(), ft.worldScissorTest && Ct.mainContext.disable(3089);
            var e = Rt.context, n = 0 == e._submits._length || se.preserveDrawingBuffer ? o.create(t).arrColor : i.stage._wgColor;
            n ? e.clearBG(n[0], n[1], n[2], n[3]) : e.clearBG(0, 0, 0, 0), ft.clear();
        }, RunDriver.enableNative = null, n(RunDriver, [ "hanzi", function() {
            return this.hanzi = new RegExp("^[一-龥]$");
        } ]), RunDriver;
    }(), ce = function() {
        function AtlasInfoManager() {}
        return r(AtlasInfoManager, "laya.net.AtlasInfoManager"), AtlasInfoManager.enable = function(t, e) {
            i.loader.load(t, g.create(null, AtlasInfoManager._onInfoLoaded, [ e ]), null, "json");
        }, AtlasInfoManager._onInfoLoaded = function(t, e) {
            var i, n, r, s = 0, a = 0;
            for (i in e) for (n = (r = e[i])[0], a = (r = r[1]).length, s = 0; s < a; s++) AtlasInfoManager._fileLoadDic[n + r[s]] = i;
            t && t.run();
        }, AtlasInfoManager.getFileLoadPath = function(t) {
            return AtlasInfoManager._fileLoadDic[t] || t;
        }, AtlasInfoManager._fileLoadDic = {}, AtlasInfoManager;
    }(), _e = function() {
        function BlendMode() {}
        return r(BlendMode, "laya.webgl.canvas.BlendMode"), BlendMode._init_ = function(t) {
            BlendMode.fns = [ BlendMode.BlendNormal, BlendMode.BlendAdd, BlendMode.BlendMultiply, BlendMode.BlendScreen, BlendMode.BlendOverlay, BlendMode.BlendLight, BlendMode.BlendMask, BlendMode.BlendDestinationOut ], 
            BlendMode.targetFns = [ BlendMode.BlendNormalTarget, BlendMode.BlendAddTarget, BlendMode.BlendMultiplyTarget, BlendMode.BlendScreenTarget, BlendMode.BlendOverlayTarget, BlendMode.BlendLightTarget, BlendMode.BlendMask, BlendMode.BlendDestinationOut ];
        }, BlendMode.BlendNormal = function(t) {
            nt.setBlendFunc(t, 1, 771);
        }, BlendMode.BlendAdd = function(t) {
            nt.setBlendFunc(t, 1, 772);
        }, BlendMode.BlendMultiply = function(t) {
            nt.setBlendFunc(t, 774, 771);
        }, BlendMode.BlendScreen = function(t) {
            nt.setBlendFunc(t, 1, 1);
        }, BlendMode.BlendOverlay = function(t) {
            nt.setBlendFunc(t, 1, 769);
        }, BlendMode.BlendLight = function(t) {
            nt.setBlendFunc(t, 1, 1);
        }, BlendMode.BlendNormalTarget = function(t) {
            nt.setBlendFunc(t, 1, 771);
        }, BlendMode.BlendAddTarget = function(t) {
            nt.setBlendFunc(t, 1, 772);
        }, BlendMode.BlendMultiplyTarget = function(t) {
            nt.setBlendFunc(t, 774, 771);
        }, BlendMode.BlendScreenTarget = function(t) {
            nt.setBlendFunc(t, 1, 1);
        }, BlendMode.BlendOverlayTarget = function(t) {
            nt.setBlendFunc(t, 1, 769);
        }, BlendMode.BlendLightTarget = function(t) {
            nt.setBlendFunc(t, 1, 1);
        }, BlendMode.BlendMask = function(t) {
            nt.setBlendFunc(t, 0, 770);
        }, BlendMode.BlendDestinationOut = function(t) {
            nt.setBlendFunc(t, 0, 0);
        }, BlendMode.activeBlendFunction = null, BlendMode.NAMES = [ "normal", "add", "multiply", "screen", "overlay", "light", "mask", "destination-out" ], 
        BlendMode.TOINT = {
            normal: 0,
            add: 1,
            multiply: 2,
            screen: 3,
            overlay: 4,
            light: 5,
            mask: 6,
            "destination-out": 7,
            lighter: 1
        }, BlendMode.NORMAL = "normal", BlendMode.ADD = "add", BlendMode.MULTIPLY = "multiply", 
        BlendMode.SCREEN = "screen", BlendMode.OVERLAY = "overlay", BlendMode.LIGHT = "light", 
        BlendMode.MASK = "mask", BlendMode.DESTINATIONOUT = "destination-out", BlendMode.LIGHTER = "lighter", 
        BlendMode.fns = [], BlendMode.targetFns = [], BlendMode;
    }(), de = function() {
        function RotateCmd() {}
        r(RotateCmd, "laya.display.cmd.RotateCmd");
        var t = RotateCmd.prototype;
        return t.recover = function() {
            N.recover("RotateCmd", this);
        }, t.run = function(t, e, i) {
            t._rotate(this.angle, this.pivotX + e, this.pivotY + i);
        }, s(0, t, "cmdID", function() {
            return "Rotate";
        }), RotateCmd.create = function(t, e, i) {
            var n = N.getItemByClass("RotateCmd", RotateCmd);
            return n.angle = t, n.pivotX = e, n.pivotY = i, n;
        }, RotateCmd.ID = "Rotate", RotateCmd;
    }(), fe = function() {
        function FontInfo(t) {
            this._font = "14px Arial", this._family = "Arial", this._size = 14, this._italic = !1, 
            this._bold = !1, this._id = FontInfo._gfontID++, this.setFont(t || this._font);
        }
        return r(FontInfo, "laya.utils.FontInfo"), FontInfo.prototype.setFont = function(t) {
            this._font = t;
            var e = t.split(" "), i = e.length;
            if (i < 2) 1 == i && e[0].indexOf("px") > 0 && (this._size = parseInt(e[0])); else {
                for (var n = -1, r = 0; r < i; r++) if (e[r].indexOf("px") > 0 || e[r].indexOf("pt") > 0) {
                    n = r, this._size = parseInt(e[r]), this._size <= 0 && (console.error("font parse error:" + t), 
                    this._size = 14);
                    break;
                }
                var s = n + 1, a = e[s];
                for (s++; s < i; s++) a += " " + e[s];
                this._family = a.split(",")[0], this._italic = e.indexOf("italic") >= 0, this._bold = e.indexOf("bold") >= 0;
            }
        }, FontInfo.Parse = function(t) {
            if (t === FontInfo._lastFont) return FontInfo._lastFontInfo;
            var e = FontInfo._cache[t];
            return e || (e = FontInfo._cache[t] = new FontInfo(t)), FontInfo._lastFont = t, 
            FontInfo._lastFontInfo = e, e;
        }, FontInfo.EMPTY = new FontInfo(null), FontInfo._cache = {}, FontInfo._gfontID = 0, 
        FontInfo._lastFont = "", FontInfo._lastFontInfo = null, FontInfo;
    }(), pe = function() {
        function ShaderCompile(t, e, i, n) {
            this._clearCR = new RegExp("\r", "g");
            var r = this;
            function _compile(t) {
                t = t.replace(r._clearCR, "");
                var e = [], i = new Vt(e);
                return r._compileToTree(i, t.split("\n"), 0, e, n), i;
            }
            var s = It.now();
            this._VS = _compile(t), this._PS = _compile(e), this._nameMap = i, It.now() - s > 2 && console.log("ShaderCompile use time:" + (It.now() - s) + "  size:" + t.length + "/" + e.length);
        }
        r(ShaderCompile, "laya.webgl.utils.ShaderCompile");
        var t = ShaderCompile.prototype;
        return t._compileToTree = function(t, e, i, n, r) {
            var s, a, o, h, u, l, c, _ = 0, d = 0, f = 0, p = 0;
            for (d = i; d < e.length; d++) if (!((o = e[d]).length < 1) && 0 !== (_ = o.indexOf("//"))) {
                if (_ >= 0 && (o = o.substr(0, _)), s = c || new Vt(n), c = null, s.text = o, s.noCompile = !0, 
                (_ = o.indexOf("#")) >= 0) {
                    for (h = "#", p = _ + 1, f = o.length; p < f; p++) {
                        var m = o.charAt(p);
                        if (" " === m || "\t" === m || "?" === m) break;
                        h += m;
                    }
                    switch (s.name = h, h) {
                      case "#ifdef":
                      case "#ifndef":
                        if (s.src = o, s.noCompile = null != o.match(/[!&|()=<>]/), s.noCompile ? console.log("function():Boolean{return " + o.substr(_ + s.name.length) + "}") : (l = o.replace(/^\s*/, "").split(/\s+/), 
                        s.setCondition(l[1], "#ifdef" === h ? 1 : 2), s.text = "//" + s.text), s.setParent(t), 
                        t = s, r) for (l = o.substr(p).split(ShaderCompile._splitToWordExps3), p = 0; p < l.length; p++) (o = l[p]).length && (r[o] = !0);
                        continue;

                      case "#if":
                        if (s.src = o, s.noCompile = !0, s.setParent(t), t = s, r) for (l = o.substr(p).split(ShaderCompile._splitToWordExps3), 
                        p = 0; p < l.length; p++) (o = l[p]).length && "defined" != o && (r[o] = !0);
                        continue;

                      case "#else":
                        s.src = o, a = (t = t.parent).childs[t.childs.length - 1], s.noCompile = a.noCompile, 
                        s.noCompile || (s.condition = a.condition, s.conditionType = 1 == a.conditionType ? 2 : 1, 
                        s.text = "//" + s.text + " " + a.text + " " + s.conditionType), s.setParent(t), 
                        t = s;
                        continue;

                      case "#endif":
                        a = (t = t.parent).childs[t.childs.length - 1], s.noCompile = a.noCompile, s.noCompile || (s.text = "//" + s.text), 
                        s.setParent(t);
                        continue;

                      case "#include":
                        l = ShaderCompile.splitToWords(o, null);
                        var g = ShaderCompile.includes[l[1]];
                        if (!g) throw "ShaderCompile error no this include file:" + l[1];
                        if ((_ = l[0].indexOf("?")) < 0) {
                            s.setParent(t), o = g.getWith("with" == l[2] ? l[3] : null), this._compileToTree(s, o.split("\n"), 0, n, r), 
                            s.text = "";
                            continue;
                        }
                        s.setCondition(l[0].substr(_ + 1), 1), s.text = g.getWith("with" == l[2] ? l[3] : null);
                        break;

                      case "#import":
                        u = (l = ShaderCompile.splitToWords(o, null))[1], n.push({
                            node: s,
                            file: ShaderCompile.includes[u],
                            ofs: s.text.length
                        });
                        continue;
                    }
                } else {
                    if ((a = t.childs[t.childs.length - 1]) && !a.name) {
                        n.length > 0 && ShaderCompile.splitToWords(o, a), c = s, a.text += "\n" + o;
                        continue;
                    }
                    n.length > 0 && ShaderCompile.splitToWords(o, s);
                }
                s.setParent(t);
            }
        }, t.createShader = function(t, e, i, n) {
            var r = {}, s = "";
            if (t) for (var a in t) s += "#define " + a + "\n", r[a] = !0;
            var o = this._VS.toscript(r, []), h = this._PS.toscript(r, []);
            return (i || ni.create)(s + o.join("\n"), s + h.join("\n"), e, this._nameMap, n);
        }, ShaderCompile._parseOne = function(t, e, i, n, r, s) {
            var a = {
                type: ShaderCompile.shaderParamsMap[i[n + 1]],
                name: i[n + 2],
                size: isNaN(parseInt(i[n + 3])) ? 1 : parseInt(i[n + 3])
            };
            return s && ("attribute" == r ? t.push(a) : e.push(a)), ":" == i[n + 3] && (a.type = i[n + 4], 
            n += 2), n += 2;
        }, ShaderCompile.addInclude = function(t, e) {
            if (!e || 0 === e.length) throw new Error("add shader include file err:" + t);
            if (ShaderCompile.includes[t]) throw new Error("add shader include file err, has add:" + t);
            ShaderCompile.includes[t] = new U(e);
        }, ShaderCompile.preGetParams = function(t, e) {
            var i = [ t, e ], n = {}, r = [], s = [], a = {}, o = [];
            n.attributes = r, n.uniforms = s, n.defines = a;
            for (var h = 0, u = 0, l = 0; l < 2; l++) {
                i[l] = i[l].replace(ShaderCompile._removeAnnotation, "");
                var c, _ = i[l].match(ShaderCompile._reg);
                for (h = 0, u = _.length; h < u; h++) {
                    var d = _[h];
                    if ("attribute" == d || "uniform" == d) h = ShaderCompile._parseOne(r, s, _, h, d, !0); else {
                        if ("#define" == d) {
                            o[d = _[++h]] = 1;
                            continue;
                        }
                        if ("#ifdef" == d) {
                            a[c = _[++h]] = a[c] || [];
                            for (h++; h < u; h++) if ("attribute" == (d = _[h]) || "uniform" == d) h = ShaderCompile._parseOne(r, s, _, h, d, o[c]); else if ("#else" == d) for (h++; h < u; h++) if ("attribute" == (d = _[h]) || "uniform" == d) h = ShaderCompile._parseOne(r, s, _, h, d, !o[c]); else if ("#endif" == d) break;
                        }
                    }
                }
            }
            return n;
        }, ShaderCompile.splitToWords = function(t, e) {
            for (var i, n, r = [], s = -1, a = 0, o = t.length; a < o; a++) if (i = t.charAt(a), 
            " \t=+-*/&%!<>()'\",;".indexOf(i) >= 0) {
                if (s >= 0 && a - s > 1 && (n = t.substr(s, a - s), r.push(n)), '"' == i || "'" == i) {
                    var h = t.indexOf(i, a + 1);
                    if (h < 0) throw "Sharder err:" + t;
                    r.push(t.substr(a + 1, h - a - 1)), a = h, s = -1;
                    continue;
                }
                "(" == i && e && r.length > 0 && (n = r[r.length - 1] + ";", "vec4;main;".indexOf(n) < 0 && (e.useFuns += n)), 
                s = -1;
            } else s < 0 && (s = a);
            return s < o && o - s > 1 && (n = t.substr(s, o - s), r.push(n)), r;
        }, ShaderCompile.IFDEF_NO = 0, ShaderCompile.IFDEF_YES = 1, ShaderCompile.IFDEF_ELSE = 2, 
        ShaderCompile.IFDEF_PARENT = 3, ShaderCompile._removeAnnotation = new RegExp("(/\\*([^*]|[\\r\\\n]|(\\*+([^*/]|[\\r\\n])))*\\*+/)|(//.*)", "g"), 
        ShaderCompile._reg = new RegExp("(\".*\")|('.*')|([#\\w\\*-\\.+/()=<>{}\\\\]+)|([,;:\\\\])", "g"), 
        ShaderCompile._splitToWordExps = new RegExp("[(\".*\")]+|[('.*')]+|([ \\t=\\+\\-*/&%!<>!%(),;])", "g"), 
        ShaderCompile.includes = {}, n(ShaderCompile, [ "shaderParamsMap", function() {
            return this.shaderParamsMap = {
                float: 5126,
                int: 5124,
                bool: 35670,
                vec2: 35664,
                vec3: 35665,
                vec4: 35666,
                ivec2: 35667,
                ivec3: 35668,
                ivec4: 35669,
                bvec2: 35671,
                bvec3: 35672,
                bvec4: 35673,
                mat2: 35674,
                mat3: 35675,
                mat4: 35676,
                sampler2D: 35678,
                samplerCube: 35680
            };
        }, "_splitToWordExps3", function() {
            return this._splitToWordExps3 = new RegExp("[ \\t=\\+\\-*/&%!<>!%(),;\\|]", "g");
        } ]), ShaderCompile;
    }(), me = function() {
        function Prefab() {
            this.json = null;
        }
        return r(Prefab, "laya.components.Prefab"), Prefab.prototype.create = function() {
            return this.json ? pt.createByData(null, this.json) : null;
        }, Prefab;
    }(), ge = function() {
        function FillBorderWordsCmd() {}
        r(FillBorderWordsCmd, "laya.display.cmd.FillBorderWordsCmd");
        var t = FillBorderWordsCmd.prototype;
        return t.recover = function() {
            this.words = null, N.recover("FillBorderWordsCmd", this);
        }, t.run = function(t, e, i) {
            t.fillBorderWords(this.words, this.x + e, this.y + i, this.font, this.fillColor, this.borderColor, this.lineWidth);
        }, s(0, t, "cmdID", function() {
            return "FillBorderWords";
        }), FillBorderWordsCmd.create = function(t, e, i, n, r, s, a) {
            var o = N.getItemByClass("FillBorderWordsCmd", FillBorderWordsCmd);
            return o.words = t, o.x = e, o.y = i, o.font = n, o.fillColor = r, o.borderColor = s, 
            o.lineWidth = a, o;
        }, FillBorderWordsCmd.ID = "FillBorderWords", FillBorderWordsCmd;
    }(), ve = function() {
        function HitArea() {
            this._hit = null, this._unHit = null;
        }
        r(HitArea, "laya.utils.HitArea");
        var t = HitArea.prototype;
        return t.contains = function(t, e) {
            return !!HitArea._isHitGraphic(t, e, this.hit) && !HitArea._isHitGraphic(t, e, this.unHit);
        }, s(0, t, "hit", function() {
            return this._hit || (this._hit = new $t()), this._hit;
        }, function(t) {
            this._hit = t;
        }), s(0, t, "unHit", function() {
            return this._unHit || (this._unHit = new $t()), this._unHit;
        }, function(t) {
            this._unHit = t;
        }), HitArea._isHitGraphic = function(t, e, i) {
            if (!i) return !1;
            var n = i.cmds;
            if (!n && i._one && ((n = HitArea._cmds).length = 1, n[0] = i._one), !n) return !1;
            var r, s, a = 0;
            for (r = n.length, a = 0; a < r; a++) if (s = n[a]) {
                switch (s.cmdID) {
                  case "Translate":
                    t -= s.tx, e -= s.ty;
                }
                if (HitArea._isHitCmd(t, e, s)) return !0;
            }
            return !1;
        }, HitArea._isHitCmd = function(t, e, i) {
            if (!i) return !1;
            var n = !1;
            switch (i.cmdID) {
              case "DrawRect":
                HitArea._rect.setTo(i.x, i.y, i.width, i.height), n = HitArea._rect.contains(t, e);
                break;

              case "DrawCircle":
                n = (t -= i.x) * t + (e -= i.y) * e < i.radius * i.radius;
                break;

              case "DrawPoly":
                t -= i.x, e -= i.y, n = HitArea._ptInPolygon(t, e, i.points);
            }
            return n;
        }, HitArea._ptInPolygon = function(t, e, i) {
            var n = HitArea._ptPoint;
            n.setTo(t, e);
            var r, s = 0, a = NaN, o = NaN, h = NaN, u = NaN;
            r = i.length;
            for (var l = 0; l < r; l += 2) {
                if (a = i[l], o = i[l + 1], h = i[(l + 2) % r], o != (u = i[(l + 3) % r])) if (!(n.y < Math.min(o, u))) if (!(n.y >= Math.max(o, u))) (n.y - o) * (h - a) / (u - o) + a > n.x && s++;
            }
            return s % 2 == 1;
        }, HitArea._cmds = [], n(HitArea, [ "_rect", function() {
            return this._rect = new mt();
        }, "_ptPoint", function() {
            return this._ptPoint = new Xt();
        } ]), HitArea;
    }(), xe = function() {
        function SoundManager() {}
        return r(SoundManager, "laya.media.SoundManager"), s(1, SoundManager, "useAudioMusic", function() {
            return SoundManager._useAudioMusic;
        }, function(t) {
            SoundManager._useAudioMusic = t, SoundManager._musicClass = t ? Ce : null;
        }), s(1, SoundManager, "autoStopMusic", function() {
            return SoundManager._autoStopMusic;
        }, function(t) {
            i.stage.off("blur", null, SoundManager._stageOnBlur), i.stage.off("focus", null, SoundManager._stageOnFocus), 
            i.stage.off("visibilitychange", null, SoundManager._visibilityChange), SoundManager._autoStopMusic = t, 
            t && (i.stage.on("blur", null, SoundManager._stageOnBlur), i.stage.on("focus", null, SoundManager._stageOnFocus), 
            i.stage.on("visibilitychange", null, SoundManager._visibilityChange));
        }), s(1, SoundManager, "muted", function() {
            return SoundManager._muted;
        }, function(t) {
            t != SoundManager._muted && (t && SoundManager.stopAllSound(), SoundManager.musicMuted = t, 
            SoundManager._muted = t);
        }), s(1, SoundManager, "musicMuted", function() {
            return SoundManager._musicMuted;
        }, function(t) {
            t != SoundManager._musicMuted && (t ? (SoundManager._bgMusic && SoundManager._musicChannel && !SoundManager._musicChannel.isStopped ? Rt.isConchApp ? SoundManager._musicChannel._audio && (SoundManager._musicChannel._audio.muted = !0) : SoundManager._musicChannel.pause() : SoundManager._musicChannel = null, 
            SoundManager._musicMuted = t) : (SoundManager._musicMuted = t, SoundManager._bgMusic && SoundManager._musicChannel && (Rt.isConchApp ? SoundManager._musicChannel._audio && (SoundManager._musicChannel._audio.muted = !1) : SoundManager._musicChannel.resume())));
        }), s(1, SoundManager, "soundMuted", function() {
            return SoundManager._soundMuted;
        }, function(t) {
            SoundManager._soundMuted = t;
        }), SoundManager.__init__ = function() {
            var t = It.window, e = !!(t.AudioContext || t.webkitAudioContext || t.mozAudioContext);
            return e && Be.initWebAudio(), SoundManager._soundClass = e ? Be : Ce, Ce._initMusicAudio(), 
            SoundManager._musicClass = Ce, e;
        }, SoundManager.addChannel = function(t) {
            SoundManager._channels.indexOf(t) >= 0 || SoundManager._channels.push(t);
        }, SoundManager.removeChannel = function(t) {
            var e = 0;
            for (e = SoundManager._channels.length - 1; e >= 0; e--) SoundManager._channels[e] == t && SoundManager._channels.splice(e, 1);
        }, SoundManager.disposeSoundLater = function(t) {
            SoundManager._lastSoundUsedTimeDic[t] = It.now(), SoundManager._isCheckingDispose || (SoundManager._isCheckingDispose = !0, 
            i.timer.loop(5e3, null, SoundManager._checkDisposeSound));
        }, SoundManager._checkDisposeSound = function() {
            var t, e = It.now(), n = !1;
            for (t in SoundManager._lastSoundUsedTimeDic) e - SoundManager._lastSoundUsedTimeDic[t] > 3e4 ? (delete SoundManager._lastSoundUsedTimeDic[t], 
            SoundManager.disposeSoundIfNotUsed(t)) : n = !0;
            n || (SoundManager._isCheckingDispose = !1, i.timer.clear(null, SoundManager._checkDisposeSound));
        }, SoundManager.disposeSoundIfNotUsed = function(t) {
            var e = 0;
            for (e = SoundManager._channels.length - 1; e >= 0; e--) if (SoundManager._channels[e].url == t) return;
            SoundManager.destroySound(t);
        }, SoundManager._visibilityChange = function() {
            i.stage.isVisibility ? SoundManager._stageOnFocus() : SoundManager._stageOnBlur();
        }, SoundManager._stageOnBlur = function() {
            SoundManager._isActive = !1, SoundManager._musicChannel && (SoundManager._musicChannel.isStopped || (SoundManager._blurPaused = !0, 
            SoundManager._musicChannel.pause())), SoundManager.stopAllSound(), i.stage.once("mousedown", null, SoundManager._stageOnFocus);
        }, SoundManager._recoverWebAudio = function() {
            Be.ctx && "running" != Be.ctx.state && Be.ctx.resume && Be.ctx.resume();
        }, SoundManager._stageOnFocus = function() {
            SoundManager._isActive = !0, SoundManager._recoverWebAudio(), i.stage.off("mousedown", null, SoundManager._stageOnFocus), 
            SoundManager._blurPaused && SoundManager._musicChannel && SoundManager._musicChannel.isStopped && (SoundManager._blurPaused = !1, 
            SoundManager._musicChannel.resume());
        }, SoundManager.playSound = function(t, e, n, r, s) {
            if (void 0 === e && (e = 1), void 0 === s && (s = 0), !SoundManager._isActive || !t) return null;
            if (SoundManager._muted) return null;
            if (SoundManager._recoverWebAudio(), (t = $.formatURL(t)) == SoundManager._bgMusic) {
                if (SoundManager._musicMuted) return null;
            } else {
                if (Rt.isConchApp) {
                    var a = ie.getFileExtension(t);
                    if ("wav" != a && "ogg" != a) return alert("The sound only supports wav or ogg format,for optimal performance reason,please refer to the official website document."), 
                    null;
                }
                if (SoundManager._soundMuted) return null;
            }
            var o, h;
            return It.onMiniGame || (o = i.loader.getRes(t)), r || (r = SoundManager._soundClass), 
            o || ((o = new r()).load(t), It.onMiniGame || Ie.cacheRes(t, o)), (h = o.play(s, e)) ? (h.url = t, 
            h.volume = t == SoundManager._bgMusic ? SoundManager.musicVolume : SoundManager.soundVolume, 
            h.completeHandler = n, h) : null;
        }, SoundManager.destroySound = function(t) {
            var e = i.loader.getRes(t);
            e && (Ie.clearRes(t), e.dispose());
        }, SoundManager.playMusic = function(t, e, i, n) {
            return void 0 === e && (e = 0), void 0 === n && (n = 0), t = $.formatURL(t), SoundManager._bgMusic = t, 
            SoundManager._musicChannel && SoundManager._musicChannel.stop(), SoundManager._musicChannel = SoundManager.playSound(t, e, i, SoundManager._musicClass, n);
        }, SoundManager.stopSound = function(t) {
            t = $.formatURL(t);
            var e, i = 0;
            for (i = SoundManager._channels.length - 1; i >= 0; i--) (e = SoundManager._channels[i]).url == t && e.stop();
        }, SoundManager.stopAll = function() {
            SoundManager._bgMusic = null;
            var t = 0;
            for (t = SoundManager._channels.length - 1; t >= 0; t--) SoundManager._channels[t].stop();
        }, SoundManager.stopAllSound = function() {
            var t, e = 0;
            for (e = SoundManager._channels.length - 1; e >= 0; e--) (t = SoundManager._channels[e]).url != SoundManager._bgMusic && t.stop();
        }, SoundManager.stopMusic = function() {
            SoundManager._musicChannel && SoundManager._musicChannel.stop(), SoundManager._bgMusic = null;
        }, SoundManager.setSoundVolume = function(t, e) {
            if (e) e = $.formatURL(e), SoundManager._setVolume(e, t); else {
                SoundManager.soundVolume = t;
                var i, n = 0;
                for (n = SoundManager._channels.length - 1; n >= 0; n--) (i = SoundManager._channels[n]).url != SoundManager._bgMusic && (i.volume = t);
            }
        }, SoundManager.setMusicVolume = function(t) {
            SoundManager.musicVolume = t, SoundManager._setVolume(SoundManager._bgMusic, t);
        }, SoundManager._setVolume = function(t, e) {
            t = $.formatURL(t);
            var i, n = 0;
            for (n = SoundManager._channels.length - 1; n >= 0; n--) (i = SoundManager._channels[n]).url == t && (i.volume = e);
        }, SoundManager.musicVolume = 1, SoundManager.soundVolume = 1, SoundManager.playbackRate = 1, 
        SoundManager._useAudioMusic = !0, SoundManager._muted = !1, SoundManager._soundMuted = !1, 
        SoundManager._musicMuted = !1, SoundManager._bgMusic = null, SoundManager._musicChannel = null, 
        SoundManager._channels = [], SoundManager._autoStopMusic = !1, SoundManager._blurPaused = !1, 
        SoundManager._isActive = !0, SoundManager._soundClass = null, SoundManager._musicClass = null, 
        SoundManager._lastSoundUsedTimeDic = {}, SoundManager._isCheckingDispose = !1, SoundManager.autoReleaseSound = !0, 
        SoundManager;
    }(), ye = function(t) {
        function SubmitTexture(t) {
            void 0 === t && (t = 1e4), SubmitTexture.__super.call(this, t);
        }
        r(SubmitTexture, "laya.webgl.submit.SubmitTexture", u);
        var e = SubmitTexture.prototype;
        return e.clone = function(t, e, i) {
            var n = SubmitTexture._poolSize ? SubmitTexture.POOL[--SubmitTexture._poolSize] : new SubmitTexture();
            return this._cloneInit(n, t, e, i), n;
        }, e.releaseRender = function() {
            --this._ref < 1 && (SubmitTexture.POOL[SubmitTexture._poolSize++] = this, this.shaderValue.release(), 
            this._mesh = null, this._parent && (this._parent.releaseRender(), this._parent = null));
        }, e.renderSubmit = function() {
            if (0 === this._numEle) return 1;
            var t = this.shaderValue.textureHost;
            if (t) {
                var e = t ? t._getSource() : null;
                if (!e) return 1;
            }
            var i = Ct.mainContext;
            this._mesh.useMesh(i);
            var n = u.preRender, r = u.preRender._key;
            return 0 === this._key.blendShader && this._key.submitType === r.submitType && this._key.blendShader === r.blendShader && je.activeShader && u.preRender.clipInfoID == this.clipInfoID && n.shaderValue.defines._value === this.shaderValue.defines._value && 0 == (this.shaderValue.defines._value & Le.NOOPTMASK) ? je.activeShader.uploadTexture2D(e) : (_e.activeBlendFunction !== this._blendFn && (nt.setBlend(i, !0), 
            this._blendFn(i), _e.activeBlendFunction = this._blendFn), this.shaderValue.texture = e, 
            this.shaderValue.upload()), i.drawElements(4, this._numEle, 5123, this._startIdx), 
            w.renderBatches++, w.trianglesFaces += this._numEle / 3, 1;
        }, SubmitTexture.create = function(t, e, i) {
            var n = SubmitTexture._poolSize ? SubmitTexture.POOL[--SubmitTexture._poolSize] : new SubmitTexture(10016);
            n._mesh = e, n._key.clear(), n._key.submitType = 2, n._ref = 1, n._startIdx = e.indexNum * _t.BYTES_PIDX, 
            n._numEle = 0;
            var r = t._nBlendType;
            if (n._key.blendShader = r, n._blendFn = t._targets ? _e.targetFns[r] : _e.fns[r], 
            n.shaderValue = i, t._colorFiler) {
                var s = t._colorFiler;
                i.defines.add(s.type), i.colorMat = s._mat, i.colorAlpha = s._alpha;
            }
            return n;
        }, SubmitTexture._poolSize = 0, SubmitTexture.POOL = [], SubmitTexture;
    }(), Te = function(t) {
        function ColorFilter(t) {
            ColorFilter.__super.call(this), t || (t = this._copyMatrix(ColorFilter.IDENTITY_MATRIX)), 
            this._mat = new Float32Array(16), this._alpha = new Float32Array(4), this.setByMatrix(t);
        }
        r(ColorFilter, "laya.filters.ColorFilter", c);
        var e = ColorFilter.prototype;
        return i.imps(e, {
            "laya.filters.IFilter": !0
        }), e.gray = function() {
            return this.setByMatrix(ColorFilter.GRAY_MATRIX);
        }, e.color = function(t, e, i, n) {
            return void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), 
            void 0 === n && (n = 1), this.setByMatrix([ 1, 0, 0, 0, t, 0, 1, 0, 0, e, 0, 0, 1, 0, i, 0, 0, 0, 1, n ]);
        }, e.setColor = function(t) {
            var e = o.create(t).arrColor, i = [ 0, 0, 0, 0, 256 * e[0], 0, 0, 0, 0, 256 * e[1], 0, 0, 0, 0, 256 * e[2], 0, 0, 0, 1, 0 ];
            return this.setByMatrix(i);
        }, e.setByMatrix = function(t) {
            this._matrix != t && this._copyMatrix(t);
            for (var e = 0, i = 0, n = 0; n < 20; n++) n % 5 != 4 ? this._mat[e++] = t[n] : this._alpha[i++] = t[n];
            return this;
        }, e.adjustColor = function(t, e, i, n) {
            return this.adjustHue(n), this.adjustContrast(e), this.adjustBrightness(t), this.adjustSaturation(i), 
            this;
        }, e.adjustBrightness = function(t) {
            return 0 == (t = this._clampValue(t, 100)) || isNaN(t) ? this : this._multiplyMatrix([ 1, 0, 0, 0, t, 0, 1, 0, 0, t, 0, 0, 1, 0, t, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1 ]);
        }, e.adjustContrast = function(t) {
            if (0 == (t = this._clampValue(t, 100)) || isNaN(t)) return this;
            var e = NaN, i = (e = t < 0 ? 127 + t / 100 * 127 : 127 * (e = 0 == (e = t % 1) ? ColorFilter.DELTA_INDEX[t] : ColorFilter.DELTA_INDEX[t << 0] * (1 - e) + ColorFilter.DELTA_INDEX[1 + (t << 0)] * e) + 127) / 127, n = .5 * (127 - e);
            return this._multiplyMatrix([ i, 0, 0, 0, n, 0, i, 0, 0, n, 0, 0, i, 0, n, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1 ]);
        }, e.adjustSaturation = function(t) {
            if (0 == (t = this._clampValue(t, 100)) || isNaN(t)) return this;
            var e = 1 + (t > 0 ? 3 * t / 100 : t / 100), i = 1 - e, n = .3086 * i, r = .6094 * i, s = .082 * i;
            return this._multiplyMatrix([ n + e, r, s, 0, 0, n, r + e, s, 0, 0, n, r, s + e, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1 ]);
        }, e.adjustHue = function(t) {
            if (0 == (t = this._clampValue(t, 180) / 180 * Math.PI) || isNaN(t)) return this;
            var e = Math.cos(t), i = Math.sin(t), n = .213, r = .715, s = .072;
            return this._multiplyMatrix([ n + e * (1 - n) + i * -n, r + e * -r + i * -r, s + e * -s + i * (1 - s), 0, 0, n + e * -n + .143 * i, r + e * (1 - r) + .14 * i, s + e * -s + -.283 * i, 0, 0, n + e * -n + -.787 * i, r + e * -r + i * r, s + e * (1 - s) + i * s, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1 ]);
        }, e.reset = function() {
            return this.setByMatrix(this._copyMatrix(ColorFilter.IDENTITY_MATRIX));
        }, e._multiplyMatrix = function(t) {
            var e = [];
            this._matrix = this._fixMatrix(this._matrix);
            for (var i = 0; i < 5; i++) {
                for (var n = 0; n < 5; n++) e[n] = this._matrix[n + 5 * i];
                for (n = 0; n < 5; n++) {
                    for (var r = 0, s = 0; s < 5; s++) r += t[n + 5 * s] * e[s];
                    this._matrix[n + 5 * i] = r;
                }
            }
            return this.setByMatrix(this._matrix);
        }, e._clampValue = function(t, e) {
            return Math.min(e, Math.max(-e, t));
        }, e._fixMatrix = function(t) {
            return null == t ? ColorFilter.IDENTITY_MATRIX : (t.length < 25 ? t = t.slice(0, t.length).concat(ColorFilter.IDENTITY_MATRIX.slice(t.length, 25)) : t.length > 25 && (t = t.slice(0, 25)), 
            t);
        }, e._copyMatrix = function(t) {
            this._matrix || (this._matrix = []);
            for (var e = 0; e < 25; e++) this._matrix[e] = t[e];
            return this._matrix;
        }, s(0, e, "type", function() {
            return 32;
        }), ColorFilter.LENGTH = 25, n(ColorFilter, [ "DELTA_INDEX", function() {
            return this.DELTA_INDEX = [ 0, .01, .02, .04, .05, .06, .07, .08, .1, .11, .12, .14, .15, .16, .17, .18, .2, .21, .22, .24, .25, .27, .28, .3, .32, .34, .36, .38, .4, .42, .44, .46, .48, .5, .53, .56, .59, .62, .65, .68, .71, .74, .77, .8, .83, .86, .89, .92, .95, .98, 1, 1.06, 1.12, 1.18, 1.24, 1.3, 1.36, 1.42, 1.48, 1.54, 1.6, 1.66, 1.72, 1.78, 1.84, 1.9, 1.96, 2, 2.12, 2.25, 2.37, 2.5, 2.62, 2.75, 2.87, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.3, 4.7, 4.9, 5, 5.5, 6, 6.5, 6.8, 7, 7.3, 7.5, 7.8, 8, 8.4, 8.7, 9, 9.4, 9.6, 9.8, 10 ];
        }, "GRAY_MATRIX", function() {
            return this.GRAY_MATRIX = [ .3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, 0, 0, 0, 1, 0 ];
        }, "IDENTITY_MATRIX", function() {
            return this.IDENTITY_MATRIX = [ 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1 ];
        } ]), ColorFilter;
    }(), be = function(t) {
        function SubmitCanvas() {
            this._matrix = new st(), this._matrix4 = _t.defaultMatrix4.concat(), SubmitCanvas.__super.call(this, 1e4), 
            this.shaderValue = new H(0, 0);
        }
        r(SubmitCanvas, "laya.webgl.submit.SubmitCanvas", u);
        var e = SubmitCanvas.prototype;
        return e.renderSubmit = function() {
            var t = ft.worldAlpha, e = ft.worldMatrix4, i = ft.worldMatrix, n = ft.worldFilters, r = ft.worldShaderDefines, s = this.shaderValue, a = this._matrix, o = this._matrix4, h = st.TEMP;
            return st.mul(a, i, h), o[0] = h.a, o[1] = h.b, o[4] = h.c, o[5] = h.d, o[12] = h.tx, 
            o[13] = h.ty, ft.worldMatrix = h.clone(), ft.worldMatrix4 = o, ft.worldAlpha = ft.worldAlpha * s.alpha, 
            s.filters && s.filters.length && (ft.worldFilters = s.filters, ft.worldShaderDefines = s.defines), 
            this.canv.flushsubmit(), ft.worldAlpha = t, ft.worldMatrix4 = e, ft.worldMatrix.destroy(), 
            ft.worldMatrix = i, ft.worldFilters = n, ft.worldShaderDefines = r, 1;
        }, e.releaseRender = function() {
            if (--this._ref < 1) {
                var t = SubmitCanvas.POOL;
                this._mesh = null, t[t._length++] = this;
            }
        }, e.clone = function(t, e, i) {
            return null;
        }, e.getRenderType = function() {
            return 10003;
        }, SubmitCanvas.create = function(t, e, i) {
            var n = SubmitCanvas.POOL._length ? SubmitCanvas.POOL[--SubmitCanvas.POOL._length] : new SubmitCanvas();
            n.canv = t, n._ref = 1, n._numEle = 0;
            var r = n.shaderValue;
            return r.alpha = e, r.defines.setValue(0), i && i.length && r.setFilters(i), n;
        }, SubmitCanvas.POOL = [], SubmitCanvas.__init$ = function() {
            SubmitCanvas.POOL._length = 0;
        }, SubmitCanvas;
    }(), Ce = (function(t) {
        function Script() {
            Script.__super.call(this);
        }
        r(Script, "laya.components.Script", p);
        var e = Script.prototype;
        e._onAwake = function() {
            this.onAwake(), this.onStart !== laya.components.Script.prototype.onStart && i.startTimer.callLater(this, this.onStart);
        }, e._onEnable = function() {
            var t = laya.components.Script.prototype;
            this.onTriggerEnter !== t.onTriggerEnter && this.owner.on("triggerenter", this, this.onTriggerEnter), 
            this.onTriggerStay !== t.onTriggerStay && this.owner.on("triggerstay", this, this.onTriggerStay), 
            this.onTriggerExit !== t.onTriggerExit && this.owner.on("triggerexit", this, this.onTriggerExit), 
            this.onMouseDown !== t.onMouseDown && this.owner.on("mousedown", this, this.onMouseDown), 
            this.onMouseUp !== t.onMouseUp && this.owner.on("mouseup", this, this.onMouseUp), 
            this.onClick !== t.onClick && this.owner.on("click", this, this.onClick), this.onStageMouseDown !== t.onStageMouseDown && i.stage.on("mousedown", this, this.onStageMouseDown), 
            this.onStageMouseUp !== t.onStageMouseUp && i.stage.on("mouseup", this, this.onStageMouseUp), 
            this.onStageClick !== t.onStageClick && i.stage.on("click", this, this.onStageClick), 
            this.onStageMouseMove !== t.onStageMouseMove && i.stage.on("mousemove", this, this.onStageMouseMove), 
            this.onDoubleClick !== t.onDoubleClick && this.owner.on("doubleclick", this, this.onDoubleClick), 
            this.onRightClick !== t.onRightClick && this.owner.on("rightclick", this, this.onRightClick), 
            this.onMouseMove !== t.onMouseMove && this.owner.on("mousemove", this, this.onMouseMove), 
            this.onMouseOver !== t.onMouseOver && this.owner.on("mouseover", this, this.onMouseOver), 
            this.onMouseOut !== t.onMouseOut && this.owner.on("mouseout", this, this.onMouseOut), 
            this.onKeyDown !== t.onKeyDown && i.stage.on("keydown", this, this.onKeyDown), this.onKeyPress !== t.onKeyPress && i.stage.on("keypress", this, this.onKeyPress), 
            this.onKeyUp !== t.onKeyUp && i.stage.on("keyup", this, this.onKeyUp), this.onUpdate !== t.onUpdate && i.updateTimer.frameLoop(1, this, this.onUpdate), 
            this.onLateUpdate !== t.onLateUpdate && i.lateTimer.frameLoop(1, this, this.onLateUpdate), 
            this.onPreRender !== t.onPreRender && i.lateTimer.frameLoop(1, this, this.onPreRender);
        }, e._onDisable = function() {
            this.owner.offAllCaller(this), i.stage.offAllCaller(this), i.startTimer.clearAll(this), 
            i.updateTimer.clearAll(this), i.lateTimer.clearAll(this);
        }, e._isScript = function() {
            return !0;
        }, e._onDestroy = function() {
            this.onDestroy();
        }, e.onAwake = function() {}, e.onEnable = function() {}, e.onStart = function() {}, 
        e.onTriggerEnter = function(t, e, i) {}, e.onTriggerStay = function(t, e, i) {}, 
        e.onTriggerExit = function(t, e, i) {}, e.onMouseDown = function(t) {}, e.onMouseUp = function(t) {}, 
        e.onClick = function(t) {}, e.onStageMouseDown = function(t) {}, e.onStageMouseUp = function(t) {}, 
        e.onStageClick = function(t) {}, e.onStageMouseMove = function(t) {}, e.onDoubleClick = function(t) {}, 
        e.onRightClick = function(t) {}, e.onMouseMove = function(t) {}, e.onMouseOver = function(t) {}, 
        e.onMouseOut = function(t) {}, e.onKeyDown = function(t) {}, e.onKeyPress = function(t) {}, 
        e.onKeyUp = function(t) {}, e.onUpdate = function() {}, e.onLateUpdate = function() {}, 
        e.onPreRender = function() {}, e.onPostRender = function() {}, e.onDisable = function() {}, 
        e.onDestroy = function() {}, s(0, e, "isSingleton", function() {
            return !1;
        });
    }(), function(t) {
        function AudioSound() {
            this.url = null, this.audio = null, this.loaded = !1, AudioSound.__super.call(this);
        }
        r(AudioSound, "laya.media.h5audio.AudioSound", m);
        var e = AudioSound.prototype;
        return e.dispose = function() {
            var t = AudioSound._audioCache[this.url];
            N.clearBySign("audio:" + this.url), t && (Rt.isConchApp || (t.src = ""), delete AudioSound._audioCache[this.url]);
        }, e.load = function(t) {
            var e;
            if (t = $.formatURL(t), this.url = t, t == xe._bgMusic ? (AudioSound._initMusicAudio(), 
            (e = AudioSound._musicAudio).src != t && (AudioSound._audioCache[e.src] = null, 
            e = null)) : e = AudioSound._audioCache[t], e && e.readyState >= 2) this.event("complete"); else {
                e || (t == xe._bgMusic ? (AudioSound._initMusicAudio(), e = AudioSound._musicAudio) : e = It.createElement("audio"), 
                AudioSound._audioCache[t] = e, e.src = t), e.addEventListener("canplaythrough", onLoaded), 
                e.addEventListener("error", onErr);
                var i = this;
                this.audio = e, e.load ? e.load() : onErr();
            }
            function onLoaded() {
                offs(), i.loaded = !0, i.event("complete");
            }
            function onErr() {
                e.load = null, offs(), i.event("error");
            }
            function offs() {
                e.removeEventListener("canplaythrough", onLoaded), e.removeEventListener("error", onErr);
            }
        }, e.play = function(t, e) {
            if (void 0 === t && (t = 0), void 0 === e && (e = 0), !this.url) return null;
            var i, n;
            if (!(i = this.url == xe._bgMusic ? AudioSound._musicAudio : AudioSound._audioCache[this.url])) return null;
            n = N.getItem("audio:" + this.url), Rt.isConchApp ? n || ((n = It.createElement("audio")).src = this.url) : this.url == xe._bgMusic ? (AudioSound._initMusicAudio(), 
            (n = AudioSound._musicAudio).src = this.url) : n = n || i.cloneNode(!0);
            var r = new Je(n);
            return r.url = this.url, r.loops = e, r.startTime = t, r.play(), xe.addChannel(r), 
            r;
        }, s(0, e, "duration", function() {
            var t;
            return (t = AudioSound._audioCache[this.url]) ? t.duration : 0;
        }), AudioSound._initMusicAudio = function() {
            AudioSound._musicAudio || (AudioSound._musicAudio || (AudioSound._musicAudio = It.createElement("audio")), 
            Rt.isConchApp || It.document.addEventListener("mousedown", AudioSound._makeMusicOK));
        }, AudioSound._makeMusicOK = function() {
            It.document.removeEventListener("mousedown", AudioSound._makeMusicOK), AudioSound._musicAudio.src ? AudioSound._musicAudio.play() : (AudioSound._musicAudio.src = "", 
            AudioSound._musicAudio.load());
        }, AudioSound._audioCache = {}, AudioSound._musicAudio = null, AudioSound;
    }()), Se = (function(t) {
        function Sound() {
            Sound.__super.call(this);
        }
        r(Sound, "laya.media.Sound", m);
        var e = Sound.prototype;
        e.load = function(t) {}, e.play = function(t, e) {
            return void 0 === t && (t = 0), void 0 === e && (e = 0), null;
        }, e.dispose = function() {}, s(0, e, "duration", function() {
            return 0;
        });
    }(), function(t) {
        function MeshParticle2D(t) {
            MeshParticle2D.__super.call(this, 116, 4 * t * 116, 4), this.canReuse = !0, this.setAttributes(laya.webgl.utils.MeshParticle2D._fixattriInfo), 
            this.createQuadIB(t), this._quadNum = t;
        }
        r(MeshParticle2D, "laya.webgl.utils.MeshParticle2D", b);
        var e = MeshParticle2D.prototype;
        e.setMaxParticleNum = function(t) {
            this._vb._resizeBuffer(4 * t * 116, !1), this.createQuadIB(t);
        }, e.releaseMesh = function() {
            this._vb.setByteLength(0), this.vertNum = 0, this.indexNum = 0, laya.webgl.utils.MeshParticle2D._POOL.push(this);
        }, e.destroy = function() {
            this._ib.destroy(), this._vb.destroy(), this._vb.deleteBuffer();
        }, MeshParticle2D.getAMesh = function(t) {
            if (laya.webgl.utils.MeshParticle2D._POOL.length) {
                var e = laya.webgl.utils.MeshParticle2D._POOL.pop();
                return e.setMaxParticleNum(t), e;
            }
            return new MeshParticle2D(t);
        }, MeshParticle2D.const_stride = 116, MeshParticle2D._POOL = [], n(MeshParticle2D, [ "_fixattriInfo", function() {
            return this._fixattriInfo = [ 5126, 4, 0, 5126, 3, 16, 5126, 3, 28, 5126, 4, 40, 5126, 4, 56, 5126, 3, 72, 5126, 2, 84, 5126, 4, 92, 5126, 1, 108, 5126, 1, 112 ];
        } ]);
    }(), function(t) {
        function Node() {
            this._bits = 0, this._parent = null, this.name = "", this.destroyed = !1, this._conchData = null, 
            this._components = null, this._activeChangeScripts = null, this._scene = null, Node.__super.call(this), 
            this._children = Node.ARRAY_EMPTY, this._extUIChild = Node.ARRAY_EMPTY, this.createGLBuffer();
        }
        r(Node, "laya.display.Node", m);
        var e = Node.prototype;
        return e.createGLBuffer = function() {}, e._setBit = function(t, e) {
            16 === t && (this._getBit(t) != e && this._updateDisplayedInstage());
            e ? this._bits |= t : this._bits &= ~t;
        }, e._getBit = function(t) {
            return 0 != (this._bits & t);
        }, e._setUpNoticeChain = function() {
            this._getBit(16) && this._setBitUp(16);
        }, e._setBitUp = function(t) {
            var e = this;
            for (e._setBit(t, !0), e = e._parent; e; ) {
                if (e._getBit(t)) return;
                e._setBit(t, !0), e = e._parent;
            }
        }, e.on = function(t, e, i, n) {
            return "display" !== t && "undisplay" !== t || this._getBit(16) || this._setBitUp(16), 
            this._createListener(t, e, i, n, !1);
        }, e.once = function(t, e, i, n) {
            return "display" !== t && "undisplay" !== t || this._getBit(16) || this._setBitUp(16), 
            this._createListener(t, e, i, n, !0);
        }, e.destroy = function(t) {
            void 0 === t && (t = !0), this.destroyed = !0, this._destroyAllComponent(), this._parent && this._parent.removeChild(this), 
            this._children && (t ? this.destroyChildren() : this.removeChildren()), this.onDestroy(), 
            this._children = null, this.offAll();
        }, e.onDestroy = function() {}, e.destroyChildren = function() {
            if (this._children) for (var t = 0, e = this._children.length; t < e; t++) this._children[0].destroy(!0);
        }, e.addChild = function(t) {
            if (!t || this.destroyed || t === this) return t;
            if (t._zOrder && this._setBit(32, !0), t._parent === this) {
                var e = this.getChildIndex(t);
                e !== this._children.length - 1 && (this._children.splice(e, 1), this._children.push(t), 
                this._childChanged());
            } else t._parent && t._parent.removeChild(t), this._children === Node.ARRAY_EMPTY && (this._children = []), 
            this._children.push(t), t._setParent(this), this._childChanged();
            return t;
        }, e.addInputChild = function(t) {
            if (this._extUIChild == Node.ARRAY_EMPTY) this._extUIChild = [ t ]; else {
                if (this._extUIChild.indexOf(t) >= 0) return null;
                this._extUIChild.push(t);
            }
            return null;
        }, e.removeInputChild = function(t) {
            var e = this._extUIChild.indexOf(t);
            e >= 0 && this._extUIChild.splice(e, 1);
        }, e.addChildren = function(t) {
            for (var e = arguments, i = 0, n = e.length; i < n; ) this.addChild(e[i++]);
        }, e.addChildAt = function(t, e) {
            if (!t || this.destroyed || t === this) return t;
            if (t._zOrder && this._setBit(32, !0), e >= 0 && e <= this._children.length) {
                if (t._parent === this) {
                    var i = this.getChildIndex(t);
                    this._children.splice(i, 1), this._children.splice(e, 0, t), this._childChanged();
                } else t._parent && t._parent.removeChild(t), this._children === Node.ARRAY_EMPTY && (this._children = []), 
                this._children.splice(e, 0, t), t._setParent(this);
                return t;
            }
            throw new Error("appendChildAt:The index is out of bounds");
        }, e.getChildIndex = function(t) {
            return this._children.indexOf(t);
        }, e.getChildByName = function(t) {
            var e = this._children;
            if (e) for (var i = 0, n = e.length; i < n; i++) {
                var r = e[i];
                if (r.name === t) return r;
            }
            return null;
        }, e.getChildAt = function(t) {
            return this._children[t] || null;
        }, e.setChildIndex = function(t, e) {
            var i = this._children;
            if (e < 0 || e >= i.length) throw new Error("setChildIndex:The index is out of bounds.");
            var n = this.getChildIndex(t);
            if (n < 0) throw new Error("setChildIndex:node is must child of this object.");
            return i.splice(n, 1), i.splice(e, 0, t), this._childChanged(), t;
        }, e._childChanged = function(t) {}, e.removeChild = function(t) {
            if (!this._children) return t;
            var e = this._children.indexOf(t);
            return this.removeChildAt(e);
        }, e.removeSelf = function() {
            return this._parent && this._parent.removeChild(this), this;
        }, e.removeChildByName = function(t) {
            var e = this.getChildByName(t);
            return e && this.removeChild(e), e;
        }, e.removeChildAt = function(t) {
            var e = this.getChildAt(t);
            return e && (this._children.splice(t, 1), e._setParent(null)), e;
        }, e.removeChildren = function(t, e) {
            if (void 0 === t && (t = 0), void 0 === e && (e = 2147483647), this._children && this._children.length > 0) {
                var i = this._children;
                if (0 === t && e >= i.length - 1) {
                    var n = i;
                    this._children = Node.ARRAY_EMPTY;
                } else n = i.splice(t, e - t);
                for (var r = 0, s = n.length; r < s; r++) n[r]._setParent(null);
            }
            return this;
        }, e.replaceChild = function(t, e) {
            var i = this._children.indexOf(e);
            return i > -1 ? (this._children.splice(i, 1, t), e._setParent(null), t._setParent(this), 
            t) : null;
        }, e._setParent = function(t) {
            this._parent !== t && (t ? (this._parent = t, this._onAdded(), this.event("added"), 
            this._getBit(16) && (this._setUpNoticeChain(), t.displayedInStage && this._displayChild(this, !0)), 
            t._childChanged(this)) : (this._onRemoved(), this.event("removed"), this._parent._childChanged(), 
            this._getBit(16) && this._displayChild(this, !1), this._parent = t));
        }, e._updateDisplayedInstage = function() {
            var t;
            t = this;
            for (var e = i.stage, n = !1; t; ) {
                if (t._getBit(16)) {
                    n = t._getBit(128);
                    break;
                }
                if (t === e || t._getBit(128)) {
                    n = !0;
                    break;
                }
                t = t._parent;
            }
            this._setBit(128, n);
        }, e._setDisplay = function(t) {
            this._getBit(128) !== t && (this._setBit(128, t), t ? this.event("display") : this.event("undisplay"));
        }, e._displayChild = function(t, e) {
            var i = t._children;
            if (i) for (var n = 0, r = i.length; n < r; n++) {
                var s = i[n];
                s._getBit(16) && (s._children.length > 0 ? this._displayChild(s, e) : s._setDisplay(e));
            }
            t._setDisplay(e);
        }, e.contains = function(t) {
            if (t === this) return !0;
            for (;t; ) {
                if (t._parent === this) return !0;
                t = t._parent;
            }
            return !1;
        }, e.timerLoop = function(t, e, n, r, s, a) {
            void 0 === s && (s = !0), void 0 === a && (a = !1), (this.scene ? this.scene.timer : i.timer).loop(t, e, n, r, s, a);
        }, e.timerOnce = function(t, e, n, r, s) {
            void 0 === s && (s = !0), (this.scene ? this.scene.timer : i.timer)._create(!1, !1, t, e, n, r, s);
        }, e.frameLoop = function(t, e, n, r, s) {
            void 0 === s && (s = !0), (this.scene ? this.scene.timer : i.timer)._create(!0, !0, t, e, n, r, s);
        }, e.frameOnce = function(t, e, n, r, s) {
            void 0 === s && (s = !0), (this.scene ? this.scene.timer : i.timer)._create(!0, !1, t, e, n, r, s);
        }, e.clearTimer = function(t, e) {
            (this.scene ? this.scene.timer : i.timer).clear(t, e);
        }, e.callLater = function(t, e) {
            (this.scene ? this.scene.timer : i.timer).callLater(this, t, e);
        }, e.runCallLater = function(t) {
            (this.scene ? this.scene.timer : i.timer).runCallLater(this, t);
        }, e._onActive = function() {
            w.spriteCount++;
        }, e._onInActive = function() {
            w.spriteCount--;
        }, e._onActiveInScene = function() {}, e._onInActiveInScene = function() {}, e._parse = function(t, e) {}, 
        e._setBelongScene = function(t) {
            if (!this._scene) {
                if (this._scene = t, this._components) for (var e = 0, i = this._components.length; e < i; e++) this._components[e]._setActiveInScene(!0);
                for (this._onActiveInScene(), e = 0, i = this._children.length; e < i; e++) this._children[e]._setBelongScene(t);
            }
        }, e._setUnBelongScene = function() {
            if (this._scene !== this) {
                if (this._onInActiveInScene(), this._components) for (var t = 0, e = this._components.length; t < e; t++) this._components[t]._setActiveInScene(!1);
                for (this._scene = null, t = 0, e = this._children.length; t < e; t++) this._children[t]._setUnBelongScene();
            }
        }, e.onAwake = function() {}, e.onEnable = function() {}, e._processActive = function() {
            this._activeChangeScripts || (this._activeChangeScripts = []), this._activeHierarchy(this._activeChangeScripts), 
            this._activeScripts();
        }, e._activeHierarchy = function(t) {
            if (this._setBit(2, !0), this._components) for (var e = 0, i = this._components.length; e < i; e++) {
                var n = this._components[e];
                n._setActive(!0), n._isScript() && n._enabled && t.push(n);
            }
            for (this._onActive(), e = 0, i = this._children.length; e < i; e++) {
                var r = this._children[e];
                !r._getBit(1) && r._activeHierarchy(t);
            }
            this._getBit(4) || (this._setBit(4, !0), this.onAwake()), this.onEnable();
        }, e._activeScripts = function() {
            for (var t = 0, e = this._activeChangeScripts.length; t < e; t++) this._activeChangeScripts[t].onEnable();
            this._activeChangeScripts.length = 0;
        }, e._processInActive = function() {
            this._activeChangeScripts || (this._activeChangeScripts = []), this._inActiveHierarchy(this._activeChangeScripts), 
            this._inActiveScripts();
        }, e._inActiveHierarchy = function(t) {
            if (this._onInActive(), this._components) for (var e = 0, i = this._components.length; e < i; e++) {
                var n = this._components[e];
                n._setActive(!1), n._isScript() && n._enabled && t.push(n);
            }
            for (this._setBit(2, !1), e = 0, i = this._children.length; e < i; e++) {
                var r = this._children[e];
                r && !r._getBit(1) && r._inActiveHierarchy(t);
            }
            this.onDisable();
        }, e._inActiveScripts = function() {
            for (var t = 0, e = this._activeChangeScripts.length; t < e; t++) this._activeChangeScripts[t].onDisable();
            this._activeChangeScripts.length = 0;
        }, e.onDisable = function() {}, e._onAdded = function() {
            if (this._activeChangeScripts && 0 !== this._activeChangeScripts.length) throw "Node: can't set the main inActive node active in hierarchy,if the operate is in main inActive node or it's children script's onDisable Event.";
            var t = this._parent.scene;
            t && this._setBelongScene(t), this._parent.activeInHierarchy && this.active && this._processActive();
        }, e._onRemoved = function() {
            if (this._activeChangeScripts && 0 !== this._activeChangeScripts.length) throw "Node: can't set the main active node inActive in hierarchy,if the operate is in main active node or it's children script's onEnable Event.";
            this._parent.activeInHierarchy && this.active && this._processInActive(), this._parent.scene && this._setUnBelongScene();
        }, e._addComponentInstance = function(t) {
            this._components = this._components || [], this._components.push(t), t.owner = this, 
            t._onAdded(), this.activeInHierarchy && (t._setActive(!0), t._isScript() && t._enabled && t.onEnable()), 
            this._scene && t._setActiveInScene(!0);
        }, e._destroyComponent = function(t) {
            if (this._components) for (var e = 0, i = this._components.length; e < i; e++) {
                var n = this._components[e];
                if (n === t) {
                    n._destroy(), this._components.splice(e, 1);
                    break;
                }
            }
        }, e._destroyAllComponent = function() {
            if (this._components) {
                for (var t = 0, e = this._components.length; t < e; t++) {
                    this._components[t]._destroy();
                }
                this._components.length = 0;
            }
        }, e._cloneTo = function(t, e, i) {
            var n = t;
            if (this._components) for (var r = 0, s = this._components.length; r < s; r++) {
                var a = n.addComponent(this._components[r].constructor);
                this._components[r]._cloneTo(a);
            }
        }, e.addComponentIntance = function(t) {
            if (t.owner) throw "Node:the component has belong to other node.";
            if (t.isSingleton && this.getComponent(t.constructor)) throw "Node:the component is singleton,can't add the second one.";
            return this._addComponentInstance(t), t;
        }, e.addComponent = function(t) {
            var e = N.createByClass(t);
            if (e._destroyed = !1, e.isSingleton && this.getComponent(t)) throw "无法实例" + t + "组件，" + t + "组件已存在！";
            return this._addComponentInstance(e), e;
        }, e.getComponent = function(t) {
            if (this._components) for (var e = 0, n = this._components.length; e < n; e++) {
                var r = this._components[e];
                if (i.__typeof(r, t)) return r;
            }
            return null;
        }, e.getComponents = function(t) {
            var e;
            if (this._components) for (var n = 0, r = this._components.length; n < r; n++) {
                var s = this._components[n];
                i.__typeof(s, t) && (e = e || []).push(s);
            }
            return e;
        }, s(0, e, "numChildren", function() {
            return this._children.length;
        }), s(0, e, "parent", function() {
            return this._parent;
        }), s(0, e, "activeInHierarchy", function() {
            return this._getBit(2);
        }), s(0, e, "active", function() {
            return !this._getBit(8) && !this._getBit(1);
        }, function(t) {
            if (t = !!t, !this._getBit(1) !== t) {
                if (this._activeChangeScripts && 0 !== this._activeChangeScripts.length) throw t ? "Node: can't set the main inActive node active in hierarchy,if the operate is in main inActive node or it's children script's onDisable Event." : "Node: can't set the main active node inActive in hierarchy,if the operate is in main active node or it's children script's onEnable Event.";
                this._setBit(1, !t), this._parent && this._parent.activeInHierarchy && (t ? this._processActive() : this._processInActive());
            }
        }), s(0, e, "displayedInStage", function() {
            return this._getBit(16) ? this._getBit(128) : (this._setBitUp(16), this._getBit(128));
        }), s(0, e, "scene", function() {
            return this._scene;
        }), s(0, e, "timer", function() {
            return this.scene ? this.scene.timer : i.timer;
        }), Node.ARRAY_EMPTY = [], Node;
    }()), we = function(t) {
        function SoundChannel() {
            this.url = null, this.loops = 0, this.startTime = NaN, this.isStopped = !1, this.completeHandler = null, 
            SoundChannel.__super.call(this);
        }
        r(SoundChannel, "laya.media.SoundChannel", m);
        var e = SoundChannel.prototype;
        return e.play = function() {}, e.stop = function() {
            this.completeHandler && this.completeHandler.run();
        }, e.pause = function() {}, e.resume = function() {}, e.__runComplete = function(t) {
            t && t.run();
        }, s(0, e, "volume", function() {
            return 1;
        }, function(t) {}), s(0, e, "position", function() {
            return 0;
        }), s(0, e, "duration", function() {
            return 0;
        }), SoundChannel;
    }(), Me = function(t) {
        function Resource() {
            this._id = 0, this._url = null, this._cpuMemory = 0, this._gpuMemory = 0, this._destroyed = !1, 
            this._referenceCount = 0, this.lock = !1, this.name = null, Resource.__super.call(this), 
            this._id = ++Resource._uniqueIDCounter, this._destroyed = !1, this._referenceCount = 0, 
            Resource._idResourcesMap[this.id] = this, this.lock = !1;
        }
        r(Resource, "laya.resource.Resource", m);
        var e = Resource.prototype;
        return i.imps(e, {
            "laya.resource.ICreateResource": !0,
            "laya.resource.IDestroy": !0
        }), e._setCPUMemory = function(t) {
            var e = t - this._cpuMemory;
            this._cpuMemory = t, Resource._addCPUMemory(e);
        }, e._setGPUMemory = function(t) {
            var e = t - this._gpuMemory;
            this._gpuMemory = t, Resource._addGPUMemory(e);
        }, e._setCreateURL = function(t) {
            var e;
            (t = $.formatURL(t), this._url !== t) && (this._url && ((e = Resource._urlResourcesMap[this._url]).splice(e.indexOf(this), 1), 
            0 === e.length && delete Resource._urlResourcesMap[this._url]), t && ((e = Resource._urlResourcesMap[t]) || (Resource._urlResourcesMap[t] = e = []), 
            e.push(this)), this._url = t);
        }, e._addReference = function(t) {
            void 0 === t && (t = 1), this._referenceCount += t;
        }, e._removeReference = function(t) {
            void 0 === t && (t = 1), this._referenceCount -= t;
        }, e._clearReference = function() {
            this._referenceCount = 0;
        }, e._recoverResource = function() {}, e._disposeResource = function() {}, e._activeResource = function() {}, 
        e.destroy = function() {
            var t;
            this._destroyed || (this._destroyed = !0, this.lock = !1, this._disposeResource(), 
            delete Resource._idResourcesMap[this.id], this._url && ((t = Resource._urlResourcesMap[this._url]) && (t.splice(t.indexOf(this), 1), 
            0 === t.length && delete Resource._urlResourcesMap[this._url]), Ie.getRes(this._url) == this && delete Ie.loadedMap[this._url]));
        }, s(0, e, "id", function() {
            return this._id;
        }), s(0, e, "gpuMemory", function() {
            return this._gpuMemory;
        }), s(0, e, "url", function() {
            return this._url;
        }), s(0, e, "cpuMemory", function() {
            return this._cpuMemory;
        }), s(0, e, "destroyed", function() {
            return this._destroyed;
        }), s(0, e, "referenceCount", function() {
            return this._referenceCount;
        }), s(1, Resource, "cpuMemory", function() {
            return this._cpuMemory;
        }, laya.events.EventDispatcher._$SET_cpuMemory), s(1, Resource, "gpuMemory", function() {
            return this._gpuMemory;
        }, laya.events.EventDispatcher._$SET_gpuMemory), Resource._addCPUMemory = function(t) {
            this._cpuMemory += t;
        }, Resource._addGPUMemory = function(t) {
            this._gpuMemory += t;
        }, Resource._addMemory = function(t, e) {
            this._cpuMemory += t, this._gpuMemory += e;
        }, Resource.getResourceByID = function(t) {
            return Resource._idResourcesMap[t];
        }, Resource.getResourceByURL = function(t, e) {
            return void 0 === e && (e = 0), Resource._urlResourcesMap[t][e];
        }, Resource.destroyUnusedResources = function() {
            for (var t in Resource._idResourcesMap) {
                var e = Resource._idResourcesMap[t];
                e.lock || 0 !== e._referenceCount || e.destroy();
            }
        }, Resource._uniqueIDCounter = 0, Resource._idResourcesMap = {}, Resource._urlResourcesMap = {}, 
        Resource._cpuMemory = 0, Resource._gpuMemory = 0, Resource;
    }(), Ae = function(t) {
        function MeshVG() {
            MeshVG.__super.call(this, 12, 4, 4), this.canReuse = !0, this.setAttributes(laya.webgl.utils.MeshVG._fixattriInfo);
        }
        r(MeshVG, "laya.webgl.utils.MeshVG", b);
        var e = MeshVG.prototype;
        return e.addVertAndIBToMesh = function(t, e, i, n) {
            for (var r = this._vb.needSize(e.length / 2 * 12) >> 2, s = this._vb._floatArray32 || this._vb.getFloat32Array(), a = this._vb._uint32Array, o = 0, h = e.length / 2, u = 0; u < h; u++) s[r++] = e[o], 
            s[r++] = e[o + 1], o += 2, a[r++] = i;
            this._vb.setNeedUpload(), this._ib.append(new Uint16Array(n)), this._ib.setNeedUpload(), 
            this.vertNum += h, this.indexNum += n.length;
        }, e.releaseMesh = function() {
            this._vb.setByteLength(0), this._ib.setByteLength(0), this.vertNum = 0, this.indexNum = 0, 
            laya.webgl.utils.MeshVG._POOL.push(this);
        }, e.destroy = function() {
            this._ib.destroy(), this._vb.destroy(), this._ib.disposeResource(), this._vb.deleteBuffer();
        }, MeshVG.getAMesh = function(t) {
            var e;
            return e = laya.webgl.utils.MeshVG._POOL.length ? laya.webgl.utils.MeshVG._POOL.pop() : new MeshVG(), 
            t && e._vb._resizeBuffer(786432, !1), e;
        }, MeshVG.const_stride = 12, MeshVG._POOL = [], n(MeshVG, [ "_fixattriInfo", function() {
            return this._fixattriInfo = [ 5126, 2, 0, 5121, 4, 8 ];
        } ]), MeshVG;
    }(), Re = function(t) {
        var e;
        function TimeLine() {
            this._labelDic = null, this._tweenDic = {}, this._tweenDataList = [], this._endTweenDataList = null, 
            this._currTime = 0, this._lastTime = 0, this._startTime = 0, this._index = 0, this._gidIndex = 0, 
            this._firstTweenDic = {}, this._startTimeSort = !1, this._endTimeSort = !1, this._loopKey = !1, 
            this.scale = 1, this._frameRate = 60, this._frameIndex = 0, this._total = 0, TimeLine.__super.call(this);
        }
        r(TimeLine, "laya.utils.TimeLine", m);
        var n = TimeLine.prototype;
        return n.to = function(t, e, i, n, r) {
            return void 0 === r && (r = 0), this._create(t, e, i, n, r, !0);
        }, n.from = function(t, e, i, n, r) {
            return void 0 === r && (r = 0), this._create(t, e, i, n, r, !1);
        }, n._create = function(t, i, n, r, s, a) {
            var o = N.getItemByClass("tweenData", e);
            return o.isTo = a, o.type = 0, o.target = t, o.duration = n, o.data = i, o.startTime = this._startTime + s, 
            o.endTime = o.startTime + o.duration, o.ease = r, this._startTime = Math.max(o.endTime, this._startTime), 
            this._tweenDataList.push(o), this._startTimeSort = !0, this._endTimeSort = !0, this;
        }, n.addLabel = function(t, i) {
            var n = N.getItemByClass("tweenData", e);
            return n.type = 1, n.data = t, n.endTime = n.startTime = this._startTime + i, this._labelDic || (this._labelDic = {}), 
            this._labelDic[t] = n, this._tweenDataList.push(n), this;
        }, n.removeLabel = function(t) {
            if (this._labelDic && this._labelDic[t]) {
                var e = this._labelDic[t];
                if (e) {
                    var i = this._tweenDataList.indexOf(e);
                    i > -1 && this._tweenDataList.splice(i, 1);
                }
                delete this._labelDic[t];
            }
        }, n.gotoTime = function(t) {
            if (null != this._tweenDataList && 0 != this._tweenDataList.length) {
                var e, i, n, r;
                for (var s in this._firstTweenDic) if (i = this._firstTweenDic[s]) for (var a in i) i.diyTarget.hasOwnProperty(a) && (i.diyTarget[a] = i[a]);
                for (s in this._tweenDic) (e = this._tweenDic[s]).clear(), delete this._tweenDic[s];
                if (this._index = 0, this._gidIndex = 0, this._currTime = t, this._lastTime = It.now(), 
                null == this._endTweenDataList || this._endTimeSort) {
                    this._endTimeSort = !1, this._endTweenDataList = n = this._tweenDataList.concat(), 
                    n.sort(function(t, e) {
                        return t.endTime > e.endTime ? 1 : t.endTime < e.endTime ? -1 : 0;
                    });
                } else n = this._endTweenDataList;
                for (var o = 0, h = n.length; o < h; o++) if (0 == (r = n[o]).type) {
                    if (!(t >= r.endTime)) break;
                    this._index = Math.max(this._index, o + 1);
                    var u = r.data;
                    if (r.isTo) for (var l in u) r.target[l] = u[l];
                }
                for (o = 0, h = this._tweenDataList.length; o < h; o++) 0 == (r = this._tweenDataList[o]).type && t >= r.startTime && t < r.endTime && (this._index = Math.max(this._index, o + 1), 
                this._gidIndex++, (e = N.getItemByClass("tween", z))._create(r.target, r.data, r.duration, r.ease, g.create(this, this._animComplete, [ this._gidIndex ]), 0, !1, r.isTo, !0, !1), 
                e.setStartTime(this._currTime - (t - r.startTime)), e._updateEase(this._currTime), 
                e.gid = this._gidIndex, this._tweenDic[this._gidIndex] = e);
            }
        }, n.gotoLabel = function(t) {
            if (null != this._labelDic) {
                var e = this._labelDic[t];
                e && this.gotoTime(e.startTime);
            }
        }, n.pause = function() {
            i.timer.clear(this, this._update);
        }, n.resume = function() {
            this.play(this._currTime, this._loopKey);
        }, n.play = function(t, e) {
            if (void 0 === t && (t = 0), void 0 === e && (e = !1), this._tweenDataList) {
                if (this._startTimeSort) {
                    this._startTimeSort = !1, this._tweenDataList.sort(function(t, e) {
                        return t.startTime > e.startTime ? 1 : t.startTime < e.startTime ? -1 : 0;
                    });
                    for (var n = 0, r = this._tweenDataList.length; n < r; n++) {
                        var s = this._tweenDataList[n];
                        if (null != s && 0 == s.type) {
                            var a = s.target, o = a.$_GID || (a.$_GID = ie.getGID()), h = null;
                            for (var u in null == this._firstTweenDic[o] ? ((h = {}).diyTarget = a, this._firstTweenDic[o] = h) : h = this._firstTweenDic[o], 
                            s.data) null == h[u] && (h[u] = a[u]);
                        }
                    }
                }
                "string" == typeof t ? this.gotoLabel(t) : this.gotoTime(t), this._loopKey = e, 
                this._lastTime = It.now(), i.timer.frameLoop(1, this, this._update);
            }
        }, n._update = function() {
            if (this._currTime >= this._startTime) {
                if (!this._loopKey) {
                    for (var t in this._tweenDic) (e = this._tweenDic[t]).complete();
                    return this._complete(), void this.pause();
                }
                if (this._complete(), !this._tweenDataList) return;
                this.gotoTime(0);
            }
            var e, i = It.now(), n = i - this._lastTime, r = this._currTime += n * this.scale;
            for (t in this._lastTime = i, this._tweenDic) (e = this._tweenDic[t])._updateEase(r);
            if (0 != this._tweenDataList.length && this._index < this._tweenDataList.length) {
                var s = this._tweenDataList[this._index];
                r >= s.startTime && (this._index++, 0 == s.type ? (this._gidIndex++, (e = N.getItemByClass("tween", z))._create(s.target, s.data, s.duration, s.ease, g.create(this, this._animComplete, [ this._gidIndex ]), 0, !1, s.isTo, !0, !1), 
                e.setStartTime(r), e.gid = this._gidIndex, this._tweenDic[this._gidIndex] = e, e._updateEase(r)) : this.event("label", s.data));
            }
        }, n._animComplete = function(t) {
            this._tweenDic[t] && delete this._tweenDic[t];
        }, n._complete = function() {
            this.event("complete");
        }, n.reset = function() {
            var t;
            if (this._labelDic) for (t in this._labelDic) delete this._labelDic[t];
            for (t in this._tweenDic) this._tweenDic[t].clear(), delete this._tweenDic[t];
            for (t in this._firstTweenDic) delete this._firstTweenDic[t];
            if (this._endTweenDataList = null, this._tweenDataList && this._tweenDataList.length) {
                var e, n = 0;
                for (e = this._tweenDataList.length, n = 0; n < e; n++) this._tweenDataList[n] && this._tweenDataList[n].destroy();
            }
            this._tweenDataList.length = 0, this._currTime = 0, this._lastTime = 0, this._startTime = 0, 
            this._index = 0, this._gidIndex = 0, this.scale = 1, i.timer.clear(this, this._update);
        }, n.destroy = function() {
            this.reset(), this._labelDic = null, this._tweenDic = null, this._tweenDataList = null, 
            this._firstTweenDic = null;
        }, s(0, n, "index", function() {
            return this._frameIndex;
        }, function(t) {
            this._frameIndex = t, this.gotoTime(this._frameIndex / this._frameRate * 1e3);
        }), s(0, n, "total", function() {
            return this._total = Math.floor(this._startTime / 1e3 * this._frameRate), this._total;
        }), TimeLine.to = function(t, e, i, n, r) {
            return void 0 === r && (r = 0), new TimeLine().to(t, e, i, n, r);
        }, TimeLine.from = function(t, e, i, n, r) {
            return void 0 === r && (r = 0), new TimeLine().from(t, e, i, n, r);
        }, TimeLine.__init$ = function() {
            e = function() {
                function tweenData() {
                    this.type = 0, this.isTo = !0, this.startTime = NaN, this.endTime = NaN, this.target = null, 
                    this.duration = NaN, this.ease = null, this.data = null;
                }
                return r(tweenData, ""), tweenData.prototype.destroy = function() {
                    this.target = null, this.ease = null, this.data = null, this.isTo = !0, this.type = 0, 
                    N.recover("tweenData", this);
                }, tweenData;
            }();
        }, TimeLine;
    }(), Le = function(t) {
        function ShaderDefines2D() {
            ShaderDefines2D.__super.call(this, ShaderDefines2D.__name2int, ShaderDefines2D.__int2name, ShaderDefines2D.__int2nameMap);
        }
        return r(ShaderDefines2D, "laya.webgl.shader.d2.ShaderDefines2D", I), ShaderDefines2D.__init__ = function() {
            ShaderDefines2D.reg("TEXTURE2D", 1), ShaderDefines2D.reg("PRIMITIVE", 4), ShaderDefines2D.reg("GLOW_FILTER", 8), 
            ShaderDefines2D.reg("BLUR_FILTER", 16), ShaderDefines2D.reg("COLOR_FILTER", 32), 
            ShaderDefines2D.reg("COLOR_ADD", 64), ShaderDefines2D.reg("WORLDMAT", 128), ShaderDefines2D.reg("FILLTEXTURE", 256), 
            ShaderDefines2D.reg("FSHIGHPRECISION", 1024), ShaderDefines2D.reg("MVP3D", 2048);
        }, ShaderDefines2D.reg = function(t, e) {
            I._reg(t, e, ShaderDefines2D.__name2int, ShaderDefines2D.__int2name);
        }, ShaderDefines2D.toText = function(t, e, i) {
            return I._toText(t, e, i);
        }, ShaderDefines2D.toInt = function(t) {
            return I._toInt(t, ShaderDefines2D.__name2int);
        }, ShaderDefines2D.TEXTURE2D = 1, ShaderDefines2D.PRIMITIVE = 4, ShaderDefines2D.FILTERGLOW = 8, 
        ShaderDefines2D.FILTERBLUR = 16, ShaderDefines2D.FILTERCOLOR = 32, ShaderDefines2D.COLORADD = 64, 
        ShaderDefines2D.WORLDMAT = 128, ShaderDefines2D.FILLTEXTURE = 256, ShaderDefines2D.SKINMESH = 512, 
        ShaderDefines2D.SHADERDEFINE_FSHIGHPRECISION = 1024, ShaderDefines2D.MVP3D = 2048, 
        ShaderDefines2D.NOOPTMASK = 312, ShaderDefines2D.__name2int = {}, ShaderDefines2D.__int2name = [], 
        ShaderDefines2D.__int2nameMap = [], ShaderDefines2D;
    }(), Ee = function(t) {
        function Texture(t, e, i, n) {
            this.uvrect = [ 0, 0, 1, 1 ], this._destroyed = !1, this._referenceCount = 0, this.$_GID = 0, 
            this.offsetX = 0, this.offsetY = 0, this._w = 0, this._h = 0, this.sourceWidth = 0, 
            this.sourceHeight = 0, this.url = null, this.scaleRate = 1, Texture.__super.call(this), 
            void 0 === i && (i = 0), void 0 === n && (n = 0), this.setTo(t, e, i, n);
        }
        r(Texture, "laya.resource.Texture", m);
        var e = Texture.prototype;
        return e._addReference = function() {
            this._bitmap && this._bitmap._addReference(), this._referenceCount++;
        }, e._removeReference = function() {
            this._bitmap && this._bitmap._removeReference(), this._referenceCount--;
        }, e._getSource = function(t) {
            return this._destroyed || !this._bitmap ? null : (this.recoverBitmap(t), this._bitmap.destroyed ? null : this.bitmap._getSource());
        }, e._onLoaded = function(t, e) {
            if (e) if (e == this) ; else if (e instanceof laya.resource.Texture) {
                var i = e;
                Texture._create(e, 0, 0, i.width, i.height, 0, 0, i.sourceWidth, i.sourceHeight, this);
            } else this.bitmap = e, this.sourceWidth = this._w = e.width, this.sourceHeight = this._h = e.height; else ;
            t && t.run(), this.event("ready", this);
        }, e.getIsReady = function() {
            return !this._destroyed && !!this._bitmap;
        }, e.setTo = function(t, e, i, n) {
            void 0 === i && (i = 0), void 0 === n && (n = 0), this.bitmap = t, this.sourceWidth = i, 
            this.sourceHeight = n, t && (this._w = t.width, this._h = t.height, this.sourceWidth = this.sourceWidth || t.width, 
            this.sourceHeight = this.sourceHeight || t.height), this.uv = e || Texture.DEF_UV;
        }, e.load = function(t, e) {
            this._destroyed || i.loader.load(t, g.create(this, this._onLoaded, [ e ]), null, "htmlimage", 1, !1, null, !0);
        }, e.getTexturePixels = function(t, e, i, n) {
            var r = 0, s = 0, a = 0, o = this.bitmap, h = o.width, u = o.height;
            if (t + i > h && (i -= t + i - h), e + n > u && (n -= e + n - u), i <= 0 || n <= 0) return null;
            var l = 4 * i, c = null;
            try {
                c = o.getPixels();
            } catch (t) {}
            if (c) {
                if (0 == t && 0 == e && i == h && n == u) return c;
                var _ = new Uint8Array(i * n * 4);
                for (r = 4 * t, s = (e + n - 1) * (l = 4 * h) + 4 * t, a = n - 1; a >= 0; a--) _.set(x.slice(s, s + 4 * i), r), 
                r += l, s -= l;
                return _;
            }
            var d = new lt();
            d.size(i, n), d.asBitmap = !0;
            var f = null;
            if (0 != t || 0 != e || i != h || n != u) {
                var p = (f = f.concat())[0], m = f[1], g = (f[2] - p) / h, v = (f[7] - m) / u;
                f = [ p + t * g, m + e * v, p + (t + i) * g, m + e * v, p + (t + i) * g, m + (e + n) * v, p + t * g, m + (e + n) * v ];
            }
            d._drawTextureM(this, 0, 0, i, n, null, 1, f), d._targets.start(), d.flush(), d._targets.end(), 
            d._targets.restore();
            var x = d._targets.getData(0, 0, i, n);
            for (d.destroy(), _ = new Uint8Array(i * n * 4), r = 0, s = (n - 1) * l, a = n - 1; a >= 0; a--) _.set(x.slice(s, s + l), r), 
            r += l, s -= l;
            return _;
        }, e.getPixels = function(t, e, i, n) {
            return Rt.isConchApp ? this._nativeObj.getImageData(t, e, i, n) : this.getTexturePixels(t, e, i, n);
        }, e.recoverBitmap = function(t) {
            var e = this, n = this._bitmap.url;
            this._destroyed || this._bitmap && !this._bitmap.destroyed || !n || i.loader.load(n, g.create(this, function(i) {
                e.bitmap = i, t && t();
            }), null, "htmlimage", 1, !1, null, !0);
        }, e.disposeBitmap = function() {
            !this._destroyed && this._bitmap && this._bitmap.destroy();
        }, e.destroy = function(t) {
            if (void 0 === t && (t = !1), !this._destroyed) {
                this._destroyed = !0;
                var e = this._bitmap;
                e && (e._removeReference(this._referenceCount), (0 === e.referenceCount || t) && e.destroy(), 
                e = null), this.url && this === i.loader.getRes(this.url) && i.loader.clearRes(this.url);
            }
        }, s(0, e, "height", function() {
            return this._h ? this._h : this.bitmap ? this.uv && this.uv !== Texture.DEF_UV ? (this.uv[5] - this.uv[1]) * this.bitmap.height : this.bitmap.height : 0;
        }, function(t) {
            this._h = t, this.sourceHeight || (this.sourceHeight = t);
        }), s(0, e, "uv", function() {
            return this._uv;
        }, function(t) {
            this.uvrect[0] = Math.min(t[0], t[2], t[4], t[6]), this.uvrect[1] = Math.min(t[1], t[3], t[5], t[7]), 
            this.uvrect[2] = Math.max(t[0], t[2], t[4], t[6]) - this.uvrect[0], this.uvrect[3] = Math.max(t[1], t[3], t[5], t[7]) - this.uvrect[1], 
            this._uv = t;
        }), s(0, e, "width", function() {
            return this._w ? this._w : this.bitmap ? this.uv && this.uv !== Texture.DEF_UV ? (this.uv[2] - this.uv[0]) * this.bitmap.width : this.bitmap.width : 0;
        }, function(t) {
            this._w = t, this.sourceWidth || (this.sourceWidth = t);
        }), s(0, e, "bitmap", function() {
            return this._bitmap;
        }, function(t) {
            this._bitmap && this._bitmap._removeReference(this._referenceCount), this._bitmap = t, 
            t && t._addReference(this._referenceCount);
        }), s(0, e, "destroyed", function() {
            return this._destroyed;
        }), Texture.moveUV = function(t, e, i) {
            for (var n = 0; n < 8; n += 2) i[n] += t, i[n + 1] += e;
            return i;
        }, Texture.create = function(t, e, i, n, r, s, a, o, h) {
            return void 0 === s && (s = 0), void 0 === a && (a = 0), void 0 === o && (o = 0), 
            void 0 === h && (h = 0), Texture._create(t, e, i, n, r, s, a, o, h);
        }, Texture._create = function(t, e, i, n, r, s, a, o, h, u) {
            void 0 === s && (s = 0), void 0 === a && (a = 0), void 0 === o && (o = 0), void 0 === h && (h = 0);
            var l, c = t instanceof laya.resource.Texture, _ = c ? t.uv : Texture.DEF_UV, d = c ? t.bitmap : t;
            d.width && e + n > d.width && (n = d.width - e), d.height && i + r > d.height && (r = d.height - i), 
            u ? (l = u).setTo(d, null, o || n, h || r) : l = new Texture(d, null, o || n, h || r), 
            l.width = n, l.height = r, l.offsetX = s, l.offsetY = a;
            var f = 1 / d.width, p = 1 / d.height;
            e *= f, i *= p, n *= f, r *= p;
            var m = l.uv[0], g = l.uv[1], v = l.uv[4], x = l.uv[5], y = v - m, T = x - g, b = Texture.moveUV(_[0], _[1], [ e, i, e + n, i, e + n, i + r, e, i + r ]);
            l.uv = new Float32Array([ m + b[0] * y, g + b[1] * T, v - (1 - b[2]) * y, g + b[3] * T, v - (1 - b[4]) * y, x - (1 - b[5]) * T, m + b[6] * y, x - (1 - b[7]) * T ]);
            var C = d.scaleRate;
            return C && 1 != C ? (l.sourceWidth /= C, l.sourceHeight /= C, l.width /= C, l.height /= C, 
            l.scaleRate = C) : l.scaleRate = 1, l;
        }, Texture.createFromTexture = function(t, e, i, n, r) {
            var s = t.scaleRate;
            1 != s && (e *= s, i *= s, n *= s, r *= s);
            var a = mt.TEMP.setTo(e - t.offsetX, i - t.offsetY, n, r), o = a.intersection(Texture._rect1.setTo(0, 0, t.width, t.height), Texture._rect2);
            return o ? Texture.create(t, o.x, o.y, o.width, o.height, o.x - a.x, o.y - a.y, n, r) : null;
        }, Texture.DEF_UV = new Float32Array([ 0, 0, 1, 0, 1, 1, 0, 1 ]), Texture.NO_UV = new Float32Array([ 0, 0, 0, 0, 0, 0, 0, 0 ]), 
        Texture.INV_UV = new Float32Array([ 0, 1, 1, 1, 1, 0, 0, 0 ]), Texture._rect1 = new mt(), 
        Texture._rect2 = new mt(), Texture;
    }(), De = function(t) {
        function HttpRequest() {
            this._responseType = null, this._data = null, this._url = null, HttpRequest.__super.call(this), 
            this._http = new It.window.XMLHttpRequest();
        }
        r(HttpRequest, "laya.net.HttpRequest", m);
        var e = HttpRequest.prototype;
        return e.send = function(t, e, i, n, r) {
            void 0 === i && (i = "get"), void 0 === n && (n = "text"), this._responseType = n, 
            this._data = null, (It.onQGMiniGame || It.onVVMiniGame) && (this._url = encodeURI(t)), 
            this._url = t;
            var s = this, a = this._http;
            if (t = $.getAdptedFilePath(t), a.open(i, t, !0), r) for (var o = 0; o < r.length; o++) a.setRequestHeader(r[o++], r[o]); else Rt.isConchApp || (e && "string" != typeof e ? a.setRequestHeader("Content-Type", "application/json") : a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"));
            a.responseType = "arraybuffer" !== n ? "text" : "arraybuffer", a.onerror = function(t) {
                s._onError(t);
            }, a.onabort = function(t) {
                s._onAbort(t);
            }, a.onprogress = function(t) {
                s._onProgress(t);
            }, a.onload = function(t) {
                s._onLoad(t);
            }, a.send(e);
        }, e._onProgress = function(t) {
            t && t.lengthComputable && this.event("progress", t.loaded / t.total);
        }, e._onAbort = function(t) {
            this.error("Request was aborted by user");
        }, e._onError = function(t) {
            this.error("Request failed Status:" + this._http.status + " text:" + this._http.statusText);
        }, e._onLoad = function(t) {
            var e = this._http, i = void 0 !== e.status ? e.status : 200;
            200 === i || 204 === i || 0 === i ? this.complete() : this.error("[" + e.status + "]" + e.statusText + ":" + e.responseURL);
        }, e.error = function(t) {
            this.clear(), console.warn(this.url, t), this.event("error", t);
        }, e.complete = function() {
            this.clear();
            var t = !0;
            try {
                "json" === this._responseType ? this._data = JSON.parse(this._http.responseText) : "xml" === this._responseType ? this._data = ie.parseXMLFromString(this._http.responseText) : this._data = this._http.response || this._http.responseText;
            } catch (e) {
                t = !1, this.error(e.message);
            }
            t && this.event("complete", this._data instanceof Array ? [ this._data ] : this._data);
        }, e.clear = function() {
            var t = this._http;
            t.onerror = t.onabort = t.onprogress = t.onload = null;
        }, s(0, e, "url", function() {
            return this._url;
        }), s(0, e, "http", function() {
            return this._http;
        }), s(0, e, "data", function() {
            return this._data;
        }), HttpRequest;
    }(), Ie = function(t) {
        function Loader() {
            this._data = null, this._url = null, this._type = null, this._cache = !1, this._http = null, 
            this._useWorkerLoader = !1, this._customParse = !1, this._constructParams = null, 
            this._propertyParams = null, this._createCache = !1, Loader.__super.call(this);
        }
        r(Loader, "laya.net.Loader", m);
        var e = Loader.prototype;
        return e.load = function(t, e, i, n, r, s) {
            if (void 0 === i && (i = !0), void 0 === r && (r = !1), void 0 === s && (s = !1), 
            t) {
                if (Loader.setGroup(t, "666"), this._url = t, 0 === t.indexOf("data:image") ? e = "image" : t = $.formatURL(t), 
                this._type = e || (e = Loader.getTypeFromUrl(this._url)), this._cache = i, this._useWorkerLoader = s, 
                this._data = null, s && ke.enableWorkerLoader(), !r && Loader.loadedMap[t]) return this._data = Loader.loadedMap[t], 
                this.event("progress", 1), void this.event("complete", this._data);
                if (n && Loader.setGroup(t, n), null != Loader.parserMap[e]) return this._customParse = !0, 
                void (Loader.parserMap[e] instanceof laya.utils.Handler ? Loader.parserMap[e].runWith(this) : Loader.parserMap[e].call(null, this));
                if ("image" === e || "htmlimage" === e || "nativeimage" === e) return this._loadImage(t);
                if ("sound" === e) return this._loadSound(t);
                if ("ttf" === e) return this._loadTTF(t);
                var a;
                switch (e) {
                  case "atlas":
                  case "prefab":
                  case "plf":
                    a = "json";
                    break;

                  case "font":
                    a = "xml";
                    break;

                  case "plfb":
                    a = "arraybuffer";
                    break;

                  default:
                    a = e;
                }
                Loader.preLoadedMap[t] ? this.onLoaded(Loader.preLoadedMap[t]) : (It.onVVMiniGame ? (this._http = new De(), 
                this._http.on("progress", this, this.onProgress), this._http.on("error", this, this.onError), 
                this._http.on("complete", this, this.onLoaded)) : this._http || (this._http = new De(), 
                this._http.on("progress", this, this.onProgress), this._http.on("error", this, this.onError), 
                this._http.on("complete", this, this.onLoaded)), this._http.send(t, null, "get", a));
            } else this.onLoaded(null);
        }, e._loadTTF = function(t) {
            t = $.formatURL(t);
            var e = new W();
            e.complete = g.create(this, this.onLoaded), e.load(t);
        }, e._loadImage = function(t) {
            t = $.formatURL(t);
            var e, i = this;
            function clear() {
                var i = e;
                i && (i.onload = null, i.onerror = null, delete Loader._imgCache[t]);
            }
            var n = function() {
                clear(), i.event("error", "Load image failed");
            };
            if ("nativeimage" === this._type) {
                var r = function() {
                    clear(), i.onLoaded(e);
                };
                (e = new It.window.Image()).crossOrigin = "", e.onload = r, e.onerror = n, e.src = t, 
                Loader._imgCache[t] = e;
            } else {
                var s = ie.getFileExtension(t);
                if ("ktx" === s || "pvr" === s) {
                    var a;
                    r = function(n) {
                        var r = 0;
                        switch (s) {
                          case "ktx":
                            r = 5;
                            break;

                          case "pvr":
                            r = 12;
                        }
                        (e = new _i(0, 0, r, !1, !1)).wrapModeU = 1, e.wrapModeV = 1, e.setCompressData(n), 
                        e._setCreateURL(t), clear(), i.onLoaded(e);
                    }, (a = new De()).on("error", null, n), a.on("complete", null, r), a.send(t, null, "get", "arraybuffer");
                } else {
                    var o = new It.window.Image();
                    r = function() {
                        var e = new _i(o.width, o.height, 1, !1, !1);
                        e.wrapModeU = 1, e.wrapModeV = 1, e.loadImageSource(o, !0), e._setCreateURL(t), 
                        clear(), i.onLoaded(e);
                    }, o.crossOrigin = "", o.onload = r, o.onerror = n, o.src = t, Loader._imgCache[t] = o;
                }
            }
        }, e._loadSound = function(t) {
            var e = new xe._soundClass(), i = this;
            function clear() {
                e.offAll();
            }
            e.on("complete", this, function() {
                clear(), i.onLoaded(e);
            }), e.on("error", this, function() {
                clear(), e.dispose(), i.event("error", "Load sound failed");
            }), e.load(t);
        }, e.onProgress = function(t) {
            "atlas" === this._type ? this.event("progress", .3 * t) : this.event("progress", t);
        }, e.onError = function(t) {
            this.event("error", t);
        }, e.onLoaded = function(t) {
            var e = this._type;
            if ("plfb" == e) this.parsePLFBData(t), this.complete(t); else if ("plf" == e) this.parsePLFData(t), 
            this.complete(t); else if ("image" === e) {
                var i = new Ee(t);
                i.url = this._url, this.complete(i);
            } else if ("sound" === e || "htmlimage" === e || "nativeimage" === e) this.complete(t); else if ("atlas" === e) {
                if (!t.url && !t._setContext) {
                    if (!this._data) {
                        if (this._data = t, t.meta && t.meta.image) {
                            var n, r = t.meta.image.split(","), s = this._url.indexOf("/") >= 0 ? "/" : "\\", a = this._url.lastIndexOf(s), o = a >= 0 ? this._url.substr(0, a + 1) : "";
                            It.onAndroid && t.meta.compressTextureAndroid && (n = ".ktx"), It.onIOS && t.meta.compressTextureIOS && (n = ".pvr");
                            for (var h = 0, u = r.length; h < u; h++) r[h] = n ? o + r[h].replace(".png", n) : o + r[h];
                        } else r = [ this._url.replace(".json", ".png") ];
                        r.reverse(), t.toLoads = r, t.pics = [];
                    }
                    return this.event("progress", .3 + 1 / r.length * .6), this._loadImage(r.pop());
                }
                if (this._data.pics.push(t), this._data.toLoads.length > 0) return this.event("progress", .3 + 1 / this._data.toLoads.length * .6), 
                this._loadImage(this._data.toLoads.pop());
                var l = this._data.frames, c = this._url.split("?")[0], _ = this._data.meta && this._data.meta.prefix ? this._data.meta.prefix : c.substring(0, c.lastIndexOf(".")) + "/", d = this._data.pics, f = $.formatURL(this._url), p = Loader.atlasMap[f] || (Loader.atlasMap[f] = []);
                p.dir = _;
                var m = 1;
                if (this._data.meta && this._data.meta.scale && 1 != this._data.meta.scale) for (var g in m = parseFloat(this._data.meta.scale), 
                l) {
                    var v, x = l[g], y = d[x.frame.idx ? x.frame.idx : 0], T = $.formatURL(_ + g);
                    y.scaleRate = m, v = Ee._create(y, x.frame.x, x.frame.y, x.frame.w, x.frame.h, x.spriteSourceSize.x, x.spriteSourceSize.y, x.sourceSize.w, x.sourceSize.h, laya.net.Loader.getRes(T)), 
                    Loader.cacheRes(T, v), v.url = T, p.push(T);
                } else for (g in l) y = d[(x = l[g]).frame.idx ? x.frame.idx : 0], T = $.formatURL(_ + g), 
                v = Ee._create(y, x.frame.x, x.frame.y, x.frame.w, x.frame.h, x.spriteSourceSize.x, x.spriteSourceSize.y, x.sourceSize.w, x.sourceSize.h, laya.net.Loader.getRes(T)), 
                Loader.cacheRes(T, v), v.url = T, p.push(T);
                delete this._data.pics, this.complete(this._data);
            } else if ("font" === e) {
                if (!t._source) return this._data = t, this.event("progress", .5), this._loadImage(this._url.replace(".fnt", ".png"));
                var b = new P();
                b.parseFont(this._data, new Ee(t));
                var C = this._url.split(".fnt")[0].split("/"), S = C[C.length - 1];
                ei.registerBitmapFont(S, b), this._data = b, this.complete(this._data);
            } else if ("prefab" === e) {
                var w = new me();
                w.json = t, this.complete(w);
            } else this.complete(t);
        }, e.parsePLFData = function(t) {
            var e, i, n;
            for (e in t) switch (n = t[e], e) {
              case "json":
              case "text":
                for (i in n) Loader.preLoadedMap[$.formatURL(i)] = n[i];
                break;

              default:
                for (i in n) Loader.preLoadedMap[$.formatURL(i)] = n[i];
            }
        }, e.parsePLFBData = function(t) {
            var e, i, n = 0;
            for (i = (e = new jt(t)).getInt32(), n = 0; n < i; n++) this.parseOnePLFBFile(e);
        }, e.parseOnePLFBFile = function(t) {
            var e, i, n;
            i = t.getUTFString(), e = t.getInt32(), n = t.readArrayBuffer(e), Loader.preLoadedMap[$.formatURL(i)] = n;
        }, e.complete = function(t) {
            this._data = t, this._customParse ? this.event("loaded", t instanceof Array ? [ t ] : t) : (Loader._loaders.push(this), 
            Loader._isWorking || Loader.checkNext());
        }, e.endLoad = function(t) {
            t && (this._data = t), this._cache && Loader.cacheRes(this._url, this._data), this.event("progress", 1), 
            this.event("complete", this.data instanceof Array ? [ this.data ] : this.data);
        }, s(0, e, "url", function() {
            return this._url;
        }), s(0, e, "data", function() {
            return this._data;
        }), s(0, e, "cache", function() {
            return this._cache;
        }), s(0, e, "type", function() {
            return this._type;
        }), Loader.getTypeFromUrl = function(t) {
            var e = ie.getFileExtension(t);
            return e ? Loader.typeMap[e] : (console.warn("Not recognize the resources suffix", t), 
            "text");
        }, Loader.checkNext = function() {
            Loader._isWorking = !0;
            for (var t = It.now(); Loader._startIndex < Loader._loaders.length; ) if (It.now(), 
            Loader._loaders[Loader._startIndex].endLoad(), Loader._startIndex++, It.now() - t > Loader.maxTimeOut) return console.warn("loader callback cost a long time:" + (It.now() - t) + " url=" + Loader._loaders[Loader._startIndex - 1].url), 
            void i.systemTimer.frameOnce(1, null, Loader.checkNext);
            Loader._loaders.length = 0, Loader._startIndex = 0, Loader._isWorking = !1;
        }, Loader.clearRes = function(t) {
            t = $.formatURL(t);
            var e = Loader.getAtlas(t);
            if (e) {
                for (var i = 0, n = e.length; i < n; i++) {
                    var r = e[i], s = Loader.getRes(r);
                    delete Loader.loadedMap[r], s && s.destroy();
                }
                e.length = 0, delete Loader.atlasMap[t], delete Loader.loadedMap[t];
            } else {
                var a = Loader.loadedMap[t];
                a && (delete Loader.loadedMap[t], a instanceof laya.resource.Texture && a.bitmap && a.destroy());
            }
        }, Loader.clearTextureRes = function(t) {
            t = $.formatURL(t);
            var e = laya.net.Loader.getAtlas(t), i = e && e.length > 0 ? laya.net.Loader.getRes(e[0]) : laya.net.Loader.getRes(t);
            i instanceof laya.resource.Texture && i.disposeBitmap();
        }, Loader.getRes = function(t) {
            return Loader.loadedMap[$.formatURL(t)];
        }, Loader.getAtlas = function(t) {
            return Loader.atlasMap[$.formatURL(t)];
        }, Loader.cacheRes = function(t, e) {
            t = $.formatURL(t), null != Loader.loadedMap[t] ? console.warn("Resources already exist,is repeated loading:", t) : Loader.loadedMap[t] = e;
        }, Loader.setGroup = function(t, e) {
            Loader.groupMap[e] || (Loader.groupMap[e] = []), Loader.groupMap[e].push(t);
        }, Loader.clearResByGroup = function(t) {
            if (Loader.groupMap[t]) {
                var e = Loader.groupMap[t], i = 0, n = e.length;
                for (i = 0; i < n; i++) Loader.clearRes(e[i]);
                e.length = 0;
            }
        }, Loader.TEXT = "text", Loader.JSON = "json", Loader.PREFAB = "prefab", Loader.XML = "xml", 
        Loader.BUFFER = "arraybuffer", Loader.IMAGE = "image", Loader.SOUND = "sound", Loader.ATLAS = "atlas", 
        Loader.FONT = "font", Loader.TTF = "ttf", Loader.PLF = "plf", Loader.PLFB = "plfb", 
        Loader.HIERARCHY = "HIERARCHY", Loader.MESH = "MESH", Loader.MATERIAL = "MATERIAL", 
        Loader.TEXTURE2D = "TEXTURE2D", Loader.TEXTURECUBE = "TEXTURECUBE", Loader.ANIMATIONCLIP = "ANIMATIONCLIP", 
        Loader.AVATAR = "AVATAR", Loader.TERRAINHEIGHTDATA = "TERRAINHEIGHTDATA", Loader.TERRAINRES = "TERRAIN", 
        Loader.typeMap = {
            ttf: "ttf",
            png: "image",
            jpg: "image",
            jpeg: "image",
            ktx: "image",
            pvr: "image",
            txt: "text",
            json: "json",
            prefab: "prefab",
            xml: "xml",
            als: "atlas",
            atlas: "atlas",
            mp3: "sound",
            ogg: "sound",
            wav: "sound",
            part: "json",
            fnt: "font",
            plf: "plf",
            plfb: "plfb",
            scene: "json",
            ani: "json",
            sk: "arraybuffer"
        }, Loader.parserMap = {}, Loader.maxTimeOut = 100, Loader.groupMap = {}, Loader.loadedMap = {}, 
        Loader.atlasMap = {}, Loader.preLoadedMap = {}, Loader._imgCache = {}, Loader._loaders = [], 
        Loader._isWorking = !1, Loader._startIndex = 0, Loader;
    }(), Pe = (function(t) {
        function BlurFilter(t) {
            this.strength = NaN, this.strength_sig2_2sig2_gauss1 = [], this.strength_sig2_native = null, 
            this.renderFunc = null, BlurFilter.__super.call(this), void 0 === t && (t = 4), 
            this.strength = t, this._glRender = new ct();
        }
        r(BlurFilter, "laya.filters.BlurFilter", c);
        var e = BlurFilter.prototype;
        e.getStrenth_sig2_2sig2_native = function() {
            this.strength_sig2_native || (this.strength_sig2_native = new Float32Array(4));
            var t = this.strength / 3, e = t * t;
            return this.strength_sig2_native[0] = this.strength, this.strength_sig2_native[1] = e, 
            this.strength_sig2_native[2] = 2 * e, this.strength_sig2_native[3] = 1 / (2 * Math.PI * e), 
            this.strength_sig2_native;
        }, s(0, e, "type", function() {
            return 16;
        });
    }(), function(t) {
        function Buffer2D() {
            this._maxsize = 0, this._upload = !0, this._uploadSize = 0, this._bufferSize = 0, 
            this._u8Array = null, Buffer2D.__super.call(this);
        }
        r(Buffer2D, "laya.webgl.utils.Buffer2D", k);
        var e = Buffer2D.prototype;
        return e.setByteLength = function(t) {
            this._byteLength !== t && (t <= this._bufferSize || this._resizeBuffer(2 * t + 256, !0), 
            this._byteLength = t);
        }, e.needSize = function(t) {
            var e = this._byteLength;
            if (t) {
                var i = this._byteLength + t;
                i <= this._bufferSize || this._resizeBuffer(i << 1, !0), this._byteLength = i;
            }
            return e;
        }, e._bufferData = function() {
            this._maxsize = Math.max(this._maxsize, this._byteLength), w.loopCount % 30 == 0 && (this._buffer.byteLength > this._maxsize + 64 && (this._buffer = this._buffer.slice(0, this._maxsize + 64), 
            this._bufferSize = this._buffer.byteLength, this._checkArrayUse()), this._maxsize = this._byteLength), 
            this._uploadSize < this._buffer.byteLength && (this._uploadSize = this._buffer.byteLength, 
            Dt.instance.bufferData(this._bufferType, this._uploadSize, this._bufferUsage)), 
            Dt.instance.bufferSubData(this._bufferType, 0, new Uint8Array(this._buffer, 0, this._byteLength));
        }, e._bufferSubData = function(t, e, i) {
            if (void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), this._maxsize = Math.max(this._maxsize, this._byteLength), 
            w.loopCount % 30 == 0 && (this._buffer.byteLength > this._maxsize + 64 && (this._buffer = this._buffer.slice(0, this._maxsize + 64), 
            this._bufferSize = this._buffer.byteLength, this._checkArrayUse()), this._maxsize = this._byteLength), 
            this._uploadSize < this._buffer.byteLength && (this._uploadSize = this._buffer.byteLength, 
            Dt.instance.bufferData(this._bufferType, this._uploadSize, this._bufferUsage)), 
            e || i) {
                var n = this._buffer.slice(e, i);
                Dt.instance.bufferSubData(this._bufferType, t, n);
            } else Dt.instance.bufferSubData(this._bufferType, t, this._buffer);
        }, e._checkArrayUse = function() {}, e._bind_uploadForVAO = function() {
            return !!this._upload && (this._upload = !1, this._bindForVAO(), this._bufferData(), 
            !0);
        }, e._bind_upload = function() {
            return !!this._upload && (this._upload = !1, this.bind(), this._bufferData(), !0);
        }, e._bind_subUpload = function(t, e, i) {
            return void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), 
            !!this._upload && (this._upload = !1, this.bind(), this._bufferSubData(t, e, i), 
            !0);
        }, e._resizeBuffer = function(t, e) {
            var i = this._buffer;
            if (t <= i.byteLength) return this;
            var n = this._u8Array;
            if (e && i && i.byteLength > 0) {
                var r = new ArrayBuffer(t), s = n && n.buffer == i ? n : new Uint8Array(i);
                (n = this._u8Array = new Uint8Array(r)).set(s, 0), i = this._buffer = r;
            } else i = this._buffer = new ArrayBuffer(t), this._u8Array = null;
            return this._checkArrayUse(), this._upload = !0, this._bufferSize = i.byteLength, 
            this;
        }, e.append = function(t) {
            this._upload = !0;
            var e, i;
            e = t.byteLength, t instanceof Uint8Array ? (this._resizeBuffer(this._byteLength + e, !0), 
            i = new Uint8Array(this._buffer, this._byteLength)) : t instanceof Uint16Array ? (this._resizeBuffer(this._byteLength + e, !0), 
            i = new Uint16Array(this._buffer, this._byteLength)) : t instanceof Float32Array && (this._resizeBuffer(this._byteLength + e, !0), 
            i = new Float32Array(this._buffer, this._byteLength)), i.set(t, 0), this._byteLength += e, 
            this._checkArrayUse();
        }, e.appendU16Array = function(t, e) {
            this._resizeBuffer(this._byteLength + 2 * e, !0);
            var i = new Uint16Array(this._buffer, this._byteLength, e);
            if (6 == e) i[0] = t[0], i[1] = t[1], i[2] = t[2], i[3] = t[3], i[4] = t[4], i[5] = t[5]; else if (e >= 100) i.set(new Uint16Array(t.buffer, 0, e)); else for (var n = 0; n < e; n++) i[n] = t[n];
            this._byteLength += 2 * e, this._checkArrayUse();
        }, e.appendEx = function(t, e) {
            this._upload = !0;
            var i;
            i = t.byteLength, this._resizeBuffer(this._byteLength + i, !0), new e(this._buffer, this._byteLength).set(t, 0), 
            this._byteLength += i, this._checkArrayUse();
        }, e.appendEx2 = function(t, e, i, n) {
            void 0 === n && (n = 1), this._upload = !0;
            var r, s;
            r = i * n, this._resizeBuffer(this._byteLength + r, !0), s = new e(this._buffer, this._byteLength);
            var a = 0;
            for (a = 0; a < i; a++) s[a] = t[a];
            this._byteLength += r, this._checkArrayUse();
        }, e.getBuffer = function() {
            return this._buffer;
        }, e.setNeedUpload = function() {
            this._upload = !0;
        }, e.getNeedUpload = function() {
            return this._upload;
        }, e.upload = function() {
            var t = this._bind_upload();
            return Dt.instance.bindBuffer(this._bufferType, null), 34962 == this._bufferType && (k._bindedVertexBuffer = null), 
            34963 == this._bufferType && (k._bindedIndexBuffer = null), je.activeShader = null, 
            t;
        }, e.subUpload = function(t, e, i) {
            void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0);
            var n = this._bind_subUpload();
            return Dt.instance.bindBuffer(this._bufferType, null), 34962 == this._bufferType && (k._bindedVertexBuffer = null), 
            34963 == this._bufferType && (k._bindedIndexBuffer = null), je.activeShader = null, 
            n;
        }, e._disposeResource = function() {
            this._upload = !0, this._uploadSize = 0;
        }, e.clear = function() {
            this._byteLength = 0, this._upload = !0;
        }, s(0, e, "bufferLength", function() {
            return this._buffer.byteLength;
        }), s(0, e, "byteLength", null, function(t) {
            this.setByteLength(t);
        }), Buffer2D.__int__ = function(t) {}, Buffer2D.FLOAT32 = 4, Buffer2D.SHORT = 2, 
        Buffer2D;
    }()), Be = function(t) {
        function WebAudioSound() {
            this.url = null, this.loaded = !1, this.data = null, this.audioBuffer = null, this.__toPlays = null, 
            this._disposed = !1, WebAudioSound.__super.call(this);
        }
        r(WebAudioSound, "laya.media.webaudio.WebAudioSound", m);
        var e = WebAudioSound.prototype;
        return e.load = function(t) {
            var e = this;
            if (t = $.formatURL(t), this.url = t, this.audioBuffer = WebAudioSound._dataCache[t], 
            this.audioBuffer) this._loaded(this.audioBuffer); else if (WebAudioSound.e.on("loaded:" + t, this, this._loaded), 
            WebAudioSound.e.on("err:" + t, this, this._err), !WebAudioSound.__loadingSound[t]) {
                WebAudioSound.__loadingSound[t] = !0;
                var i = new It.window.XMLHttpRequest();
                i.open("GET", t, !0), i.responseType = "arraybuffer", i.onload = function() {
                    e._disposed ? e._removeLoadEvents() : (e.data = i.response, WebAudioSound.buffs.push({
                        buffer: e.data,
                        url: e.url
                    }), WebAudioSound.decode());
                }, i.onerror = function(t) {
                    e._err();
                }, i.send();
            }
        }, e._err = function() {
            this._removeLoadEvents(), WebAudioSound.__loadingSound[this.url] = !1, this.event("error");
        }, e._loaded = function(t) {
            this._removeLoadEvents(), this._disposed || (this.audioBuffer = t, WebAudioSound._dataCache[this.url] = this.audioBuffer, 
            this.loaded = !0, this.event("complete"));
        }, e._removeLoadEvents = function() {
            WebAudioSound.e.off("loaded:" + this.url, this, this._loaded), WebAudioSound.e.off("err:" + this.url, this, this._err);
        }, e.__playAfterLoaded = function() {
            if (this.__toPlays) {
                var t, e, i, n = 0;
                for (t = (e = this.__toPlays).length, n = 0; n < t; n++) (i = e[n])[2] && !i[2].isStopped && this.play(i[0], i[1], i[2]);
                this.__toPlays.length = 0;
            }
        }, e.play = function(t, e, i) {
            return void 0 === t && (t = 0), void 0 === e && (e = 0), i = i || new Ze(), this.audioBuffer || this.url && (this.__toPlays || (this.__toPlays = []), 
            this.__toPlays.push([ t, e, i ]), this.once("complete", this, this.__playAfterLoaded), 
            this.load(this.url)), i.url = this.url, i.loops = e, i.audioBuffer = this.audioBuffer, 
            i.startTime = t, i.play(), xe.addChannel(i), i;
        }, e.dispose = function() {
            this._disposed = !0, delete WebAudioSound._dataCache[this.url], delete WebAudioSound.__loadingSound[this.url], 
            this.audioBuffer = null, this.data = null, this.__toPlays = [];
        }, s(0, e, "duration", function() {
            return this.audioBuffer ? this.audioBuffer.duration : 0;
        }), WebAudioSound.decode = function() {
            WebAudioSound.buffs.length <= 0 || WebAudioSound.isDecoding || (WebAudioSound.isDecoding = !0, 
            WebAudioSound.tInfo = WebAudioSound.buffs.shift(), WebAudioSound.ctx.decodeAudioData(WebAudioSound.tInfo.buffer, WebAudioSound._done, WebAudioSound._fail));
        }, WebAudioSound._done = function(t) {
            WebAudioSound.e.event("loaded:" + WebAudioSound.tInfo.url, t), WebAudioSound.isDecoding = !1, 
            WebAudioSound.decode();
        }, WebAudioSound._fail = function() {
            WebAudioSound.e.event("err:" + WebAudioSound.tInfo.url, null), WebAudioSound.isDecoding = !1, 
            WebAudioSound.decode();
        }, WebAudioSound._playEmptySound = function() {
            if (null != WebAudioSound.ctx) {
                var t = WebAudioSound.ctx.createBufferSource();
                t.buffer = WebAudioSound._miniBuffer, t.connect(WebAudioSound.ctx.destination);
            }
        }, WebAudioSound._unlock = function() {
            WebAudioSound._unlocked || (WebAudioSound._playEmptySound(), "running" == WebAudioSound.ctx.state && (It.document.removeEventListener("mousedown", WebAudioSound._unlock, !0), 
            It.document.removeEventListener("touchend", WebAudioSound._unlock, !0), It.document.removeEventListener("touchstart", WebAudioSound._unlock, !0), 
            WebAudioSound._unlocked = !0));
        }, WebAudioSound.initWebAudio = function() {
            "running" != WebAudioSound.ctx.state && (WebAudioSound._unlock(), It.document.addEventListener("mousedown", WebAudioSound._unlock, !0), 
            It.document.addEventListener("touchend", WebAudioSound._unlock, !0), It.document.addEventListener("touchstart", WebAudioSound._unlock, !0));
        }, WebAudioSound._dataCache = {}, WebAudioSound.buffs = [], WebAudioSound.isDecoding = !1, 
        WebAudioSound._unlocked = !1, WebAudioSound.tInfo = null, WebAudioSound.__loadingSound = {}, 
        n(WebAudioSound, [ "window", function() {
            return this.window = It.window;
        }, "webAudioEnabled", function() {
            return this.webAudioEnabled = WebAudioSound.window.AudioContext || WebAudioSound.window.webkitAudioContext || WebAudioSound.window.mozAudioContext;
        }, "ctx", function() {
            return this.ctx = WebAudioSound.webAudioEnabled ? new (WebAudioSound.window.AudioContext || WebAudioSound.window.webkitAudioContext || WebAudioSound.window.mozAudioContext)() : void 0;
        }, "_miniBuffer", function() {
            return this._miniBuffer = WebAudioSound.ctx.createBuffer(1, 1, 22050);
        }, "e", function() {
            return this.e = new m();
        } ]), WebAudioSound;
    }(), Fe = function(t) {
        function MeshQuadTexture() {
            MeshQuadTexture.__super.call(this, 24, 4, 4), this.canReuse = !0, this.setAttributes(laya.webgl.utils.MeshQuadTexture._fixattriInfo), 
            laya.webgl.utils.MeshQuadTexture._fixib ? (this._ib = laya.webgl.utils.MeshQuadTexture._fixib, 
            this._quadNum = MeshQuadTexture._maxIB) : (this.createQuadIB(MeshQuadTexture._maxIB), 
            laya.webgl.utils.MeshQuadTexture._fixib = this._ib);
        }
        r(MeshQuadTexture, "laya.webgl.utils.MeshQuadTexture", b);
        var e = MeshQuadTexture.prototype;
        return e.releaseMesh = function() {
            this._vb.setByteLength(0), this.vertNum = 0, this.indexNum = 0, laya.webgl.utils.MeshQuadTexture._POOL.push(this);
        }, e.destroy = function() {
            this._vb.destroy(), this._vb.deleteBuffer();
        }, e.addQuad = function(t, e, i, n) {
            var r = this._vb, s = r._byteLength >> 2;
            r.setByteLength(s + 24 << 2);
            var a = r._floatArray32 || r.getFloat32Array(), o = r._uint32Array, h = s, u = n ? 255 : 0;
            a[h++] = t[0], a[h++] = t[1], a[h++] = e[0], a[h++] = e[1], o[h++] = i, o[h++] = u, 
            a[h++] = t[2], a[h++] = t[3], a[h++] = e[2], a[h++] = e[3], o[h++] = i, o[h++] = u, 
            a[h++] = t[4], a[h++] = t[5], a[h++] = e[4], a[h++] = e[5], o[h++] = i, o[h++] = u, 
            a[h++] = t[6], a[h++] = t[7], a[h++] = e[6], a[h++] = e[7], o[h++] = i, o[h++] = u, 
            r._upload = !0;
        }, MeshQuadTexture.getAMesh = function(t) {
            var e = null;
            return e = laya.webgl.utils.MeshQuadTexture._POOL.length ? laya.webgl.utils.MeshQuadTexture._POOL.pop() : new MeshQuadTexture(), 
            t && e._vb._resizeBuffer(1572864, !1), e;
        }, MeshQuadTexture.const_stride = 24, MeshQuadTexture._fixib = null, MeshQuadTexture._maxIB = 16384, 
        MeshQuadTexture._POOL = [], n(MeshQuadTexture, [ "_fixattriInfo", function() {
            return this._fixattriInfo = [ 5126, 4, 0, 5121, 4, 16, 5121, 4, 20 ];
        } ]), MeshQuadTexture;
    }(), Ge = (function(t) {
        function GlowFilter(t, e, i, n) {
            this._sv_blurInfo2 = [ 0, 0, 1, 0 ], this._color = null, this._color_native = null, 
            this._blurInof1_native = null, this._blurInof2_native = null, GlowFilter.__super.call(this), 
            this._elements = new Float32Array(9), this._sv_blurInfo1 = new Array(4), void 0 === e && (e = 4), 
            void 0 === i && (i = 6), void 0 === n && (n = 6), this._color = new o(t), this.blur = Math.min(e, 20), 
            this.offX = i, this.offY = n, this._sv_blurInfo1[0] = this._sv_blurInfo1[1] = this.blur, 
            this._sv_blurInfo1[2] = i, this._sv_blurInfo1[3] = -n, this._glRender = new ue();
        }
        r(GlowFilter, "laya.filters.GlowFilter", c);
        var e = GlowFilter.prototype;
        e.getColor = function() {
            return this._color.arrColor;
        }, e.getColorNative = function() {
            this._color_native || (this._color_native = new Float32Array(4));
            var t = this.getColor();
            return this._color_native[0] = t[0], this._color_native[1] = t[1], this._color_native[2] = t[2], 
            this._color_native[3] = t[3], this._color_native;
        }, e.getBlurInfo1Native = function() {
            return this._blurInof1_native || (this._blurInof1_native = new Float32Array(4)), 
            this._blurInof1_native[0] = this._blurInof1_native[1] = this.blur, this._blurInof1_native[2] = this.offX, 
            this._blurInof1_native[3] = this.offY, this._blurInof1_native;
        }, e.getBlurInfo2Native = function() {
            return this._blurInof2_native || (this._blurInof2_native = new Float32Array(4)), 
            this._blurInof2_native[2] = 1, this._blurInof2_native;
        }, s(0, e, "type", function() {
            return 8;
        }), s(0, e, "offY", function() {
            return this._elements[6];
        }, function(t) {
            this._elements[6] = t, this._sv_blurInfo1[3] = -t;
        }), s(0, e, "offX", function() {
            return this._elements[5];
        }, function(t) {
            this._elements[5] = t, this._sv_blurInfo1[2] = t;
        }), s(0, e, "blur", function() {
            return this._elements[4];
        }, function(t) {
            this._elements[4] = t, this._sv_blurInfo1[0] = this._sv_blurInfo1[1] = t;
        });
    }(), function(t) {
        function Socket(t, e, i, n) {
            this._endian = null, this._socket = null, this._connected = !1, this._addInputPosition = 0, 
            this._input = null, this._output = null, this.disableInput = !1, this._byteClass = null, 
            this.protocols = [], Socket.__super.call(this), void 0 === e && (e = 0), this._byteClass = i || jt, 
            this.protocols = n, this.endian = "bigEndian", t && e > 0 && e < 65535 && this.connect(t, e);
        }
        r(Socket, "laya.net.Socket", m);
        var e = Socket.prototype;
        e.connect = function(t, e) {
            var i = "ws://" + t + ":" + e;
            this.connectByUrl(i);
        }, e.connectByUrl = function(t) {
            var e = this;
            null != this._socket && this.close(), this._socket && this.cleanSocket(), this.protocols && 0 != this.protocols.length ? this._socket = new It.window.WebSocket(t, this.protocols) : this._socket = new It.window.WebSocket(t), 
            this._socket.binaryType = "arraybuffer", this._output = new this._byteClass(), this._output.endian = this.endian, 
            this._input = new this._byteClass(), this._input.endian = this.endian, this._addInputPosition = 0, 
            this._socket.onopen = function(t) {
                e._onOpen(t);
            }, this._socket.onmessage = function(t) {
                e._onMessage(t);
            }, this._socket.onclose = function(t) {
                e._onClose(t);
            }, this._socket.onerror = function(t) {
                e._onError(t);
            };
        }, e.cleanSocket = function() {
            this.close(), this._connected = !1, this._socket.onopen = null, this._socket.onmessage = null, 
            this._socket.onclose = null, this._socket.onerror = null, this._socket = null;
        }, e.close = function() {
            if (null != this._socket) try {
                this._socket.close();
            } catch (t) {}
        }, e._onOpen = function(t) {
            this._connected = !0, this.event("open", t);
        }, e._onMessage = function(t) {
            if (t && t.data) {
                var e = t.data;
                if (this.disableInput && e) this.event("message", e); else {
                    this._input.length > 0 && this._input.bytesAvailable < 1 && (this._input.clear(), 
                    this._addInputPosition = 0);
                    var i = this._input.pos;
                    !this._addInputPosition && (this._addInputPosition = 0), this._input.pos = this._addInputPosition, 
                    e && ("string" == typeof e ? this._input.writeUTFBytes(e) : this._input.writeArrayBuffer(e), 
                    this._addInputPosition = this._input.pos, this._input.pos = i), this.event("message", e);
                }
            }
        }, e._onClose = function(t) {
            this._connected = !1, this.event("close", t);
        }, e._onError = function(t) {
            this.event("error", t);
        }, e.send = function(t) {
            this._socket.send(t);
        }, e.flush = function() {
            if (this._output && this._output.length > 0) {
                var t;
                try {
                    this._socket && this._socket.send(this._output.__getBuffer().slice(0, this._output.length));
                } catch (e) {
                    t = e;
                }
                this._output.endian = this.endian, this._output.clear(), t && this.event("error", t);
            }
        }, s(0, e, "input", function() {
            return this._input;
        }), s(0, e, "output", function() {
            return this._output;
        }), s(0, e, "connected", function() {
            return this._connected;
        }), s(0, e, "endian", function() {
            return this._endian;
        }, function(t) {
            this._endian = t, null != this._input && (this._input.endian = t), null != this._output && (this._output.endian = t);
        }), Socket.LITTLE_ENDIAN = "littleEndian", Socket.BIG_ENDIAN = "bigEndian";
    }(), function(t) {
        function TextureSV(t) {
            this.u_colorMatrix = null, this.strength = 0, this.blurInfo = null, this.colorMat = null, 
            this.colorAlpha = null, void 0 === t && (t = 0), TextureSV.__super.call(this, 1, t), 
            this._attribLocation = [ "posuv", 0, "attribColor", 1, "attribFlags", 2 ];
        }
        return r(TextureSV, "laya.webgl.shader.d2.value.TextureSV", H), TextureSV.prototype.clear = function() {
            this.texture = null, this.shader = null, this.defines._value = this.subID + (Ct.shaderHighPrecision ? 1024 : 0);
        }, TextureSV;
    }()), We = (function(t) {
        function CommonScript() {
            CommonScript.__super.call(this);
        }
        r(CommonScript, "laya.components.CommonScript", p);
        var e = CommonScript.prototype;
        e.onAwake = function() {}, e.onEnable = function() {}, e.onStart = function() {}, 
        e.onUpdate = function() {}, e.onLateUpdate = function() {}, e.onDisable = function() {}, 
        e.onDestroy = function() {}, s(0, e, "isSingleton", function() {
            return !1;
        });
    }(), function(t) {
        var e;
        function LoaderManager() {
            this.retryNum = 1, this.retryDelay = 0, this.maxLoader = 5, this._loaders = [], 
            this._loaderCount = 0, this._resInfos = [], this._infoPool = [], this._maxPriority = 5, 
            this._failRes = {}, this._statInfo = {
                count: 1,
                loaded: 1
            }, LoaderManager.__super.call(this);
            for (var t = 0; t < this._maxPriority; t++) this._resInfos[t] = [];
        }
        r(LoaderManager, "laya.net.LoaderManager", m);
        var s = LoaderManager.prototype;
        return s.getProgress = function() {
            return this._statInfo.loaded / this._statInfo.count;
        }, s.resetProgress = function() {
            this._statInfo.count = this._statInfo.loaded = 1;
        }, s.create = function(t, e, i, n, r, s, a, o) {
            void 0 === a && (a = 1), void 0 === o && (o = !0), this._create(t, !0, e, i, n, r, s, a, o);
        }, s._create = function(t, e, i, n, r, s, a, o, h) {
            if (void 0 === o && (o = 1), void 0 === h && (h = !0), t instanceof Array) {
                var u = !0, l = t, c = l.length, _ = 0;
                if (n) var d = g.create(n.caller, n.method, n.args, !1);
                for (var f = 0; f < c; f++) {
                    var p = l[f];
                    "string" == typeof p && (p = l[f] = {
                        url: p
                    }), p.progress = 0;
                }
                for (f = 0; f < c; f++) {
                    p = l[f];
                    var m = n ? g.create(null, onProgress, [ p ], !1) : null, v = n || i ? g.create(null, onComplete, [ p ]) : null;
                    this._createOne(p.url, e, v, m, p.type || r, p.constructParams || s, p.propertyParams || a, p.priority || o, h);
                }
                function onComplete(t, e) {
                    _++, t.progress = 1, e || (u = !1), _ === c && i && i.runWith(u);
                }
                function onProgress(t, e) {
                    t.progress = e;
                    for (var i = 0, n = 0; n < c; n++) {
                        i += l[n].progress;
                    }
                    var r = i / c;
                    d.runWith(r);
                }
            } else this._createOne(t, e, i, n, r, s, a, o, h);
        }, s._createOne = function(t, e, n, r, s, a, o, h, u) {
            void 0 === h && (h = 1), void 0 === u && (u = !0);
            var l = this.getRes(t);
            if (l) !e && l instanceof laya.resource.Resource && l._addReference(), r && r.runWith(1), 
            n && n.runWith(l); else {
                var c = ie.getFileExtension(t);
                if (s || (s = LoaderManager.createMap[c] ? LoaderManager.createMap[c][0] : null), 
                !s) return void this.load(t, n, r, s, h, u);
                if (!Ie.parserMap[s]) return void this.load(t, n, r, s, h, u);
                this._createLoad(t, g.create(null, function(r) {
                    r && (!e && r instanceof laya.resource.Resource && r._addReference(), r._setCreateURL(t));
                    n && n.runWith(r), i.loader.event(t);
                }), r, s, a, o, h, u, !0);
            }
        }, s.load = function(t, n, r, s, a, o, h, u, l) {
            var c = this;
            if (void 0 === a && (a = 1), void 0 === o && (o = !0), void 0 === u && (u = !1), 
            void 0 === l && (l = !1), t instanceof Array) return this._loadAssets(t, n, r, s, a, o, h);
            var _ = Ie.getRes(t);
            if (u || null == _) {
                var d;
                d = t, (t = ce.getFileLoadPath(t)) != d && "nativeimage" !== s ? s = "atlas" : d = null;
                var f = LoaderManager._resMap[t];
                f ? (n && (d ? n && f._createListener("complete", this, this._resInfoLoaded, [ d, n ], !1, !1) : n && f._createListener("complete", n.caller, n.method, n.args, !1, !1)), 
                r && f._createListener("progress", r.caller, r.method, r.args, !1, !1)) : ((f = this._infoPool.length ? this._infoPool.pop() : new e()).url = t, 
                f.type = s, f.cache = o, f.group = h, f.ignoreCache = u, f.useWorkerLoader = l, 
                f.originalUrl = d, n && f.on("complete", n.caller, n.method, n.args), r && f.on("progress", r.caller, r.method, r.args), 
                LoaderManager._resMap[t] = f, a = a < this._maxPriority ? a : this._maxPriority - 1, 
                this._resInfos[a].push(f), this._statInfo.count++, this.event("progress", this.getProgress()), 
                this._next());
            } else i.systemTimer.frameOnce(1, null, function() {
                r && r.runWith(1), n && n.runWith(_ instanceof Array ? [ _ ] : _), c._loaderCount || c.event("complete");
            });
            return this;
        }, s._resInfoLoaded = function(t, e) {
            e.runWith(Ie.getRes(t));
        }, s._createLoad = function(t, n, r, s, a, o, h, u, l) {
            var c = this;
            if (void 0 === h && (h = 1), void 0 === u && (u = !0), void 0 === l && (l = !1), 
            t instanceof Array) return this._loadAssets(t, n, r, s, h, u);
            var _ = Ie.getRes(t);
            if (null != _) i.systemTimer.frameOnce(1, null, function() {
                r && r.runWith(1), n && n.runWith(_), c._loaderCount || c.event("complete");
            }); else {
                var d = LoaderManager._resMap[t];
                d ? (n && d._createListener("complete", n.caller, n.method, n.args, !1, !1), r && d._createListener("progress", r.caller, r.method, r.args, !1, !1)) : ((d = this._infoPool.length ? this._infoPool.pop() : new e()).url = t, 
                d.type = s, d.cache = !1, d.ignoreCache = l, d.originalUrl = null, d.createCache = u, 
                d.createConstructParams = a, d.createPropertyParams = o, n && d.on("complete", n.caller, n.method, n.args), 
                r && d.on("progress", r.caller, r.method, r.args), LoaderManager._resMap[t] = d, 
                h = h < this._maxPriority ? h : this._maxPriority - 1, this._resInfos[h].push(d), 
                this._statInfo.count++, this.event("progress", this.getProgress()), this._next());
            }
            return this;
        }, s._next = function() {
            if (!(this._loaderCount >= this.maxLoader)) {
                for (var t = 0; t < this._maxPriority; t++) for (var e = this._resInfos[t]; e.length > 0; ) {
                    var i = e.shift();
                    if (i) return this._doLoad(i);
                }
                this._loaderCount || this.event("complete");
            }
        }, s._doLoad = function(t) {
            this._loaderCount++;
            var e = this._loaders.length ? this._loaders.pop() : new Ie();
            e.on("complete", null, onLoaded), e.on("progress", null, function(e) {
                t.event("progress", e);
            }), e.on("error", null, function(t) {
                onLoaded(null);
            });
            var i = this;
            function onLoaded(n) {
                e.offAll(), e._data = null, e._customParse = !1, i._loaders.push(e), i._endLoad(t, n instanceof Array ? [ n ] : n), 
                i._loaderCount--, i._next();
            }
            e._constructParams = t.createConstructParams, e._propertyParams = t.createPropertyParams, 
            e._createCache = t.createCache, e.load(t.url, t.type, t.cache, t.group, t.ignoreCache, t.useWorkerLoader);
        }, s._endLoad = function(t, e) {
            var n = t.url;
            if (null == e) {
                var r = this._failRes[n] || 0;
                if (r < this.retryNum) return console.warn("[warn]Retry to load:", n), this._failRes[n] = r + 1, 
                void i.systemTimer.once(this.retryDelay, this, this._addReTry, [ t ], !1);
                Ie.clearRes(n), console.warn("[error]Failed to load:", n), this.event("error", n);
            }
            this._failRes[n] && (this._failRes[n] = 0), delete LoaderManager._resMap[n], t.originalUrl && (e = Ie.getRes(t.originalUrl)), 
            t.event("complete", e), t.offAll(), this._infoPool.push(t), this._statInfo.loaded++, 
            this.event("progress", this.getProgress());
        }, s._addReTry = function(t) {
            this._resInfos[this._maxPriority - 1].push(t), this._next();
        }, s.clearRes = function(t) {
            Ie.clearRes(t);
        }, s.clearTextureRes = function(t) {
            Ie.clearTextureRes(t);
        }, s.getRes = function(t) {
            return Ie.getRes(t);
        }, s.cacheRes = function(t, e) {
            Ie.cacheRes(t, e);
        }, s.setGroup = function(t, e) {
            Ie.setGroup(t, e);
        }, s.clearResByGroup = function(t) {
            Ie.clearResByGroup(t);
        }, s.clearUnLoaded = function() {
            for (var t = 0; t < this._maxPriority; t++) {
                for (var e = this._resInfos[t], i = e.length - 1; i > -1; i--) {
                    var n = e[i];
                    n && (n.offAll(), this._infoPool.push(n));
                }
                e.length = 0;
            }
            this._loaderCount = 0, LoaderManager._resMap = {};
        }, s.cancelLoadByUrls = function(t) {
            if (t) for (var e = 0, i = t.length; e < i; e++) this.cancelLoadByUrl(t[e]);
        }, s.cancelLoadByUrl = function(t) {
            for (var e = 0; e < this._maxPriority; e++) for (var i = this._resInfos[e], n = i.length - 1; n > -1; n--) {
                var r = i[n];
                r && r.url === t && (i[n] = null, r.offAll(), this._infoPool.push(r));
            }
            LoaderManager._resMap[t] && delete LoaderManager._resMap[t];
        }, s._loadAssets = function(t, e, i, n, r, s, a) {
            void 0 === r && (r = 1), void 0 === s && (s = !0);
            for (var o = t.length, h = 0, u = 0, l = [], c = !0, _ = 0; _ < o; _++) {
                var d = t[_];
                "string" == typeof d && (d = {
                    url: d,
                    type: n,
                    size: 1,
                    priority: r
                }), d.size || (d.size = 1), d.progress = 0, u += d.size, l.push(d);
                var f = i ? g.create(null, loadProgress, [ d ], !1) : null, p = e || i ? g.create(null, loadComplete, [ d ]) : null;
                this.load(d.url, p, f, d.type, d.priority || 1, s, d.group || a, !1, d.useWorkerLoader);
            }
            function loadComplete(t, i) {
                h++, t.progress = 1, i || (c = !1), h === o && e && e.runWith(c);
            }
            function loadProgress(t, e) {
                if (null != i) {
                    t.progress = e;
                    for (var n = 0, r = 0; r < l.length; r++) {
                        var s = l[r];
                        n += s.size * s.progress;
                    }
                    var a = n / u;
                    i.runWith(a);
                }
            }
            return this;
        }, s.decodeBitmaps = function(t) {
            var e, i = 0, n = t.length;
            for (e = Rt._context, i = 0; i < n; i++) {
                var r, s;
                if (r = Ie.getAtlas(t[i])) this._decodeTexture(r[0], e); else (s = this.getRes(t[i])) && s instanceof laya.resource.Texture && this._decodeTexture(s, e);
            }
        }, s._decodeTexture = function(t, e) {
            var n = t.bitmap;
            if (t && n) {
                var r = n.source || n.image;
                if (r && i.__typeof(r, It.window.HTMLImageElement)) {
                    e.drawImage(r, 0, 0, 1, 1);
                    e.getImageData(0, 0, 1, 1);
                }
            }
        }, LoaderManager.cacheRes = function(t, e) {
            Ie.cacheRes(t, e);
        }, LoaderManager._resMap = {}, n(LoaderManager, [ "createMap", function() {
            return this.createMap = {
                atlas: [ null, "atlas" ]
            };
        } ]), LoaderManager.__init$ = function() {
            e = function(t) {
                function ResInfo() {
                    this.url = null, this.type = null, this.cache = !1, this.group = null, this.ignoreCache = !1, 
                    this.useWorkerLoader = !1, this.originalUrl = null, this.createCache = !1, this.createConstructParams = null, 
                    this.createPropertyParams = null, ResInfo.__super.call(this);
                }
                return r(ResInfo, "", m), ResInfo;
            }();
        }, LoaderManager;
    }()), Oe = function(t) {
        function MeshTexture() {
            MeshTexture.__super.call(this, 24, 4, 4), this.canReuse = !0, this.setAttributes(laya.webgl.utils.MeshTexture._fixattriInfo);
        }
        r(MeshTexture, "laya.webgl.utils.MeshTexture", b);
        var e = MeshTexture.prototype;
        return e.addData = function(t, e, i, n, r) {
            var s = this._vb, a = this._ib, o = t.length >> 1, h = s.needSize(24 * o) >> 2, u = s._floatArray32 || s.getFloat32Array(), l = s._uint32Array, c = 0, _ = n.a, d = n.b, f = n.c, p = n.d, m = n.tx, g = n.ty, v = 0;
            for (v = 0; v < o; v++) {
                var x = t[c], y = t[c + 1];
                u[h] = x * _ + y * f + m, u[h + 1] = x * d + y * p + g, u[h + 2] = e[c], u[h + 3] = e[c + 1], 
                l[h + 4] = r, l[h + 5] = 255, h += 6, c += 2;
            }
            s.setNeedUpload();
            var T = this.vertNum, b = i.length, C = a.needSize(i.byteLength), S = a.getUint16Array(), w = C >> 1;
            if (T > 0) {
                var M = w + b, A = 0;
                for (v = w; v < M; v++, A++) S[v] = i[A] + T;
            } else S.set(i, w);
            a.setNeedUpload(), this.vertNum += o, this.indexNum += i.length;
        }, e.releaseMesh = function() {
            this._vb.setByteLength(0), this._ib.setByteLength(0), this.vertNum = 0, this.indexNum = 0, 
            laya.webgl.utils.MeshTexture._POOL.push(this);
        }, e.destroy = function() {
            this._ib.destroy(), this._vb.destroy(), this._ib.disposeResource(), this._vb.deleteBuffer();
        }, MeshTexture.getAMesh = function(t) {
            var e;
            return e = laya.webgl.utils.MeshTexture._POOL.length ? laya.webgl.utils.MeshTexture._POOL.pop() : new MeshTexture(), 
            t && e._vb._resizeBuffer(1572864, !1), e;
        }, MeshTexture.const_stride = 24, MeshTexture._POOL = [], n(MeshTexture, [ "_fixattriInfo", function() {
            return this._fixattriInfo = [ 5126, 4, 0, 5121, 4, 16, 5121, 4, 20 ];
        } ]), MeshTexture;
    }(), Ne = function(t) {
        function SceneLoader() {
            this.totalCount = 0, this._completeHandler = null, this._toLoadList = null, this._isLoading = !1, 
            this._curUrl = null, SceneLoader.__super.call(this), this._completeHandler = new g(this, this.onOneLoadComplete), 
            this.reset();
        }
        r(SceneLoader, "laya.net.SceneLoader", m);
        var e = SceneLoader.prototype;
        return e.reset = function() {
            this._toLoadList = [], this._isLoading = !1, this.totalCount = 0;
        }, e.load = function(t, e, i) {
            if (void 0 === e && (e = !1), void 0 === i && (i = !0), t instanceof Array) {
                var n, r = 0;
                for (n = t.length, r = 0; r < n; r++) this._addToLoadList(t[r], e);
            } else this._addToLoadList(t, e);
            i && this._checkNext();
        }, e._addToLoadList = function(t, e) {
            void 0 === e && (e = !1), this._toLoadList.indexOf(t) >= 0 || Ie.getRes(t) || (e ? this._toLoadList.push({
                url: t
            }) : this._toLoadList.push(t), this.totalCount++);
        }, e._checkNext = function() {
            if (!this._isLoading) {
                if (0 == this._toLoadList.length) return void this.event("complete");
                var t;
                "string" == typeof (t = this._toLoadList.pop()) ? this.loadOne(t) : this.loadOne(t.url, !0);
            }
        }, e.loadOne = function(t, e) {
            void 0 === e && (e = !1), this._curUrl = t;
            var n = ie.getFileExtension(this._curUrl);
            e ? i.loader.create(t, this._completeHandler) : SceneLoader.LoadableExtensions[n] ? i.loader.load(t, this._completeHandler, null, SceneLoader.LoadableExtensions[n]) : t != ce.getFileLoadPath(t) || SceneLoader.No3dLoadTypes[n] || !We.createMap[n] ? i.loader.load(t, this._completeHandler) : i.loader.create(t, this._completeHandler);
        }, e.onOneLoadComplete = function() {
            this._isLoading = !1, Ie.getRes(this._curUrl) || console.log("Fail to load:", this._curUrl);
            var t, e = ie.getFileExtension(this._curUrl);
            SceneLoader.LoadableExtensions[e] && ((t = Ie.getRes(this._curUrl)) && t instanceof laya.components.Prefab && (t = t.json), 
            t && (t.loadList && this.load(t.loadList, !1, !1), t.loadList3D && this.load(t.loadList3D, !0, !1)));
            "sk" == e && this.load(this._curUrl.replace(".sk", ".png"), !1, !1), this.event("progress", this.getProgress()), 
            this._checkNext();
        }, e.getProgress = function() {
            return this.loadedCount / this.totalCount;
        }, s(0, e, "loadedCount", function() {
            return this.totalCount - this.leftCount;
        }), s(0, e, "leftCount", function() {
            return this._isLoading ? this._toLoadList.length + 1 : this._toLoadList.length;
        }), n(SceneLoader, [ "LoadableExtensions", function() {
            return this.LoadableExtensions = {
                scene: "json",
                scene3d: "json",
                ani: "json",
                ui: "json",
                prefab: "prefab"
            };
        }, "No3dLoadTypes", function() {
            return this.No3dLoadTypes = {
                png: !0,
                jpg: !0,
                txt: !0
            };
        } ]), SceneLoader;
    }(), Ue = function(t) {
        function TextStyle() {
            this.italic = !1, TextStyle.__super.call(this);
        }
        r(TextStyle, "laya.display.css.TextStyle", t);
        var e = TextStyle.prototype;
        return e.reset = function() {
            return t.prototype.reset.call(this), this.italic = !1, this.align = "left", this.wordWrap = !1, 
            this.leading = 0, this.padding = [ 0, 0, 0, 0 ], this.bgColor = null, this.borderColor = null, 
            this.asPassword = !1, this.stroke = 0, this.strokeColor = "#000000", this.bold = !1, 
            this.underline = !1, this.underlineColor = null, this.currBitmapFont = null, this;
        }, e.recover = function() {
            this !== TextStyle.EMPTY && N.recover("TextStyle", this.reset());
        }, e.render = function(t, e, i, n) {
            (this.bgColor || this.borderColor) && e.drawRect(i, n, t.width, t.height, this.bgColor, this.borderColor, 1);
        }, TextStyle.create = function() {
            return N.getItemByClass("TextStyle", TextStyle);
        }, TextStyle.EMPTY = new TextStyle(), TextStyle;
    }(Z), ke = function(t) {
        function WorkerLoader() {
            this.worker = null, this._useWorkerLoader = !1, WorkerLoader.__super.call(this);
            var t = this;
            this.worker = new Worker(WorkerLoader.workerPath), this.worker.onmessage = function(e) {
                t.workerMessage(e.data);
            };
        }
        r(WorkerLoader, "laya.net.WorkerLoader", m);
        var e = WorkerLoader.prototype;
        return e.workerMessage = function(t) {
            if (t) switch (t.type) {
              case "Image":
                this.imageLoaded(t);
                break;

              case "Disable":
                WorkerLoader.enable = !1;
            }
        }, e.imageLoaded = function(t) {
            if (t.dataType && "imageBitmap" == t.dataType) {
                var e = new si(!0), i = e.source.getContext("2d");
                switch (t.dataType) {
                  case "imageBitmap":
                    var n = t.imageBitmap;
                    e.size(n.width, n.height), i.drawImage(n, 0, 0);
                }
                console.log("load:", t.url), e._setGPUMemory(0);
                var r = new _i();
                r.loadImageSource(e.source), this.event(t.url, r);
            } else this.event(t.url, null);
        }, e.loadImage = function(t) {
            this.worker.postMessage(t);
        }, e._loadImage = function(t) {
            var e = this;
            if (this._useWorkerLoader && WorkerLoader._enable) {
                t = $.formatURL(t);
                var i = function(n) {
                    laya.net.WorkerLoader.I.off(t, e, i), n ? e.onLoaded(n) : WorkerLoader._preLoadFun.call(e, t);
                };
                laya.net.WorkerLoader.I.on(t, e, i), laya.net.WorkerLoader.I.loadImage(t);
            } else WorkerLoader._preLoadFun.call(e, t);
        }, s(1, WorkerLoader, "enable", function() {
            return WorkerLoader._enable;
        }, function(t) {
            WorkerLoader._enable != t && (WorkerLoader._enable = t, t && null == WorkerLoader._preLoadFun && (WorkerLoader._enable = WorkerLoader.__init__()));
        }), WorkerLoader.__init__ = function() {
            return null == WorkerLoader._preLoadFun && (!!Worker && (WorkerLoader._preLoadFun = Ie.prototype._loadImage, 
            Ie.prototype._loadImage = WorkerLoader.prototype._loadImage, WorkerLoader.I || (WorkerLoader.I = new WorkerLoader()), 
            !0));
        }, WorkerLoader.workerSupported = function() {
            return !!Worker;
        }, WorkerLoader.enableWorkerLoader = function() {
            WorkerLoader._tryEnabled || (WorkerLoader.enable = !0, WorkerLoader._tryEnabled = !0);
        }, WorkerLoader.I = null, WorkerLoader.workerPath = "libs/workerloader.js", WorkerLoader._preLoadFun = null, 
        WorkerLoader._enable = !1, WorkerLoader._tryEnabled = !1, WorkerLoader;
    }(), Ve = function(t) {
        function BufferState2D() {
            BufferState2D.__super.call(this);
        }
        return r(BufferState2D, "laya.webgl.BufferState2D", yt), BufferState2D;
    }(), He = function(t) {
        function PrimitiveSV(t) {
            PrimitiveSV.__super.call(this, 4, 0), this._attribLocation = [ "position", 0, "attribColor", 1 ];
        }
        return r(PrimitiveSV, "laya.webgl.shader.d2.value.PrimitiveSV", H), PrimitiveSV;
    }(), Xe = function(t) {
        function SkinSV(t) {
            this.texcoord = null, this.position = null, this.offsetX = 300, this.offsetY = 0, 
            SkinSV.__super.call(this, 512, 0);
            var e = 8 * _t.BYTES_PE;
            this.position = [ 2, 5126, !1, e, 0 ], this.texcoord = [ 2, 5126, !1, e, 2 * _t.BYTES_PE ], 
            this.color = [ 4, 5126, !1, e, 4 * _t.BYTES_PE ];
        }
        return r(SkinSV, "laya.webgl.shader.d2.skinAnishader.SkinSV", H), SkinSV;
    }(), Ye = function(i) {
        function CharRender_Canvas(i, n, r, s, a) {
            this.ctx = null, this.lastScaleX = 1, this.lastScaleY = 1, this.needResetScale = !1, 
            this.maxTexW = 0, this.maxTexH = 0, this.scaleFontSize = !0, this.showDbgInfo = !1, 
            this.supportImageData = !0, this.settrans = null, CharRender_Canvas.__super.call(this), 
            void 0 === r && (r = !0), void 0 === s && (s = !0), void 0 === a && (a = !1), this.maxTexW = i, 
            this.maxTexH = n, this.scaleFontSize = r, this.supportImageData = s, this.showDbgInfo = a, 
            CharRender_Canvas.canvas || (CharRender_Canvas.canvas = t.document.createElement("canvas"), 
            CharRender_Canvas.canvas.width = 1024, CharRender_Canvas.canvas.height = 512, CharRender_Canvas.canvas.style.left = "-10000px", 
            CharRender_Canvas.canvas.style.position = "absolute", e.body.appendChild(CharRender_Canvas.canvas), 
            this.ctx = CharRender_Canvas.canvas.getContext("2d"), this.settrans = this.ctx._setTransform || this.ctx.setTransform);
        }
        r(CharRender_Canvas, "laya.webgl.text.CharRender_Canvas", Jt);
        var n = CharRender_Canvas.prototype;
        return n.getWidth = function(t, e) {
            return this.ctx ? (this.ctx._lastFont != t && (this.ctx.font = t, this.ctx._lastFont = t), 
            this.ctx.measureText(e).width) : 0;
        }, n.scale = function(t, e) {
            if (!this.supportImageData) return this.lastScaleX = t, void (this.lastScaleY = e);
            this.lastScaleX == t && this.lastScaleY == e || (this.settrans.call(this.ctx, t, 0, 0, e, 0, 0), 
            this.lastScaleX = t, this.lastScaleY = e);
        }, n.getCharBmp = function(t, e, i, n, r, s, a, o, h, u, l) {
            if (!this.supportImageData) return this.getCharCanvas(t, e, i, n, r, s, a, o, h, u);
            var c = this.ctx;
            c.font != e && (c.font = e, c._lastFont = e), s.width = c.measureText(t).width;
            var _ = s.width * this.lastScaleX, d = s.height * this.lastScaleY;
            _ += (a + h) * this.lastScaleX, d += (o + u) * this.lastScaleY, _ = Math.ceil(_), 
            d = Math.ceil(d);
            var f = (_ = Math.min(_, laya.webgl.text.CharRender_Canvas.canvas.width)) + 2 * i + 1, p = (d = Math.min(d, laya.webgl.text.CharRender_Canvas.canvas.height)) + 2 * i + 1;
            l && (f = Math.max(f, l[0] + l[2] + 1), p = Math.max(p, l[1] + l[3] + 1)), c.clearRect(0, 0, f, p), 
            c.save(), c.textBaseline = "top", i > 0 && (c.strokeStyle = r, c.lineWidth = i, 
            c.strokeText(t, a, o)), c.fillStyle = n, c.fillText(t, a, o), this.showDbgInfo && (c.strokeStyle = "#ff0000", 
            c.strokeRect(0, 0, _, d), c.strokeStyle = "#00ff00", c.strokeRect(a, o, s.width, s.height)), 
            l && -1 == l[2] && (l[2] = Math.ceil((s.width + 2 * i) * this.lastScaleX));
            var m = l ? c.getImageData(l[0], l[1], l[2], l[3]) : c.getImageData(0, 0, _, d);
            return c.restore(), s.bmpWidth = m.width, s.bmpHeight = m.height, m;
        }, n.getCharCanvas = function(t, e, i, n, r, s, a, o, h, u) {
            var l = this.ctx;
            l.font != e && (l.font = e, l._lastFont = e), s.width = l.measureText(t).width;
            var c = s.width * this.lastScaleX, _ = s.height * this.lastScaleY;
            return c += (a + h) * this.lastScaleX, _ += (o + u) * this.lastScaleY + 1, c = Math.min(c, this.maxTexW), 
            _ = Math.min(_, this.maxTexH), CharRender_Canvas.canvas.width = Math.min(c + 1, this.maxTexW), 
            CharRender_Canvas.canvas.height = Math.min(_ + 1, this.maxTexH), l.font = e, l.clearRect(0, 0, c + 1 + i, _ + 1 + i), 
            this.settrans.call(l, 1, 0, 0, 1, 0, 0), l.save(), this.scaleFontSize && l.scale(this.lastScaleX, this.lastScaleY), 
            l.translate(a, o), l.textAlign = "left", l.textBaseline = "top", i > 0 ? (l.strokeStyle = r, 
            l.fillStyle = n, l.lineWidth = i, l.fillAndStrokeText ? l.fillAndStrokeText(t, 0, 0) : (l.strokeText(t, 0, 0), 
            l.fillText(t, 0, 0))) : (l.fillStyle = n, l.fillText(t, 0, 0)), this.showDbgInfo && (l.strokeStyle = "#ff0000", 
            l.strokeRect(0, 0, c, _), l.strokeStyle = "#00ff00", l.strokeRect(0, 0, s.width, s.height)), 
            l.restore(), s.bmpWidth = CharRender_Canvas.canvas.width, s.bmpHeight = CharRender_Canvas.canvas.height, 
            CharRender_Canvas.canvas;
        }, s(0, n, "canvasWidth", function() {
            return CharRender_Canvas.canvas.width;
        }, function(t) {
            CharRender_Canvas.canvas.width != t && (CharRender_Canvas.canvas.width = t, t > 2048 && console.warn("画文字设置的宽度太大，超过2048了"), 
            this.settrans.call(this.ctx, 1, 0, 0, 1, 0, 0), this.ctx.scale(this.lastScaleX, this.lastScaleY));
        }), CharRender_Canvas.canvas = null, CharRender_Canvas;
    }(), ze = function(e) {
        function CharRender_Native() {
            this.lastFont = "", CharRender_Native.__super.call(this);
        }
        r(CharRender_Native, "laya.webgl.text.CharRender_Native", Jt);
        var i = CharRender_Native.prototype;
        return i.getWidth = function(e, i) {
            return t.conchTextCanvas ? (t.conchTextCanvas.font = e, this.lastFont = e, t.conchTextCanvas.measureText(i).width) : 0;
        }, i.scale = function(t, e) {}, i.getCharBmp = function(e, i, n, r, s, a, h, u, l, c, _) {
            if (!t.conchTextCanvas) return null;
            t.conchTextCanvas.font = i, this.lastFont = i;
            a.width = t.conchTextCanvas.measureText(e).width, a.height;
            var d = o.create(s).numColor, f = o.create(r).numColor, p = t.conchTextCanvas.getTextBitmapData(e, f, n > 2 ? 2 : n, d);
            return a.bmpWidth = p.width, a.bmpHeight = p.height, p;
        }, CharRender_Native;
    }(), Ke = function(t) {
        function Sprite() {
            this._x = 0, this._y = 0, this._width = 0, this._height = 0, this._visible = !0, 
            this._mouseState = 0, this._zOrder = 0, this._renderType = 0, this._transform = null, 
            this._tfChanged = !1, this._texture = null, this._boundStyle = null, this._graphics = null, 
            this.mouseThrough = !1, this.autoSize = !1, this.hitTestPrior = !1, Sprite.__super.call(this), 
            this._repaint = 0, this._style = Z.EMPTY, this._cacheStyle = tt.EMPTY;
        }
        r(Sprite, "laya.display.Sprite", t);
        var e = Sprite.prototype;
        return e.destroy = function(e) {
            void 0 === e && (e = !0), t.prototype.destroy.call(this, e), this._style && this._style.recover(), 
            this._cacheStyle && this._cacheStyle.recover(), this._boundStyle && this._boundStyle.recover(), 
            this._style = null, this._cacheStyle = null, this._boundStyle = null, this._transform = null, 
            this._graphics && this._graphics.autoDestroy && this._graphics.destroy(), this._graphics = null, 
            this.texture = null;
        }, e.updateZOrder = function() {
            ie.updateOrder(this._children) && this.repaint();
        }, e._getBoundsStyle = function() {
            return this._boundStyle || (this._boundStyle = wt.create()), this._boundStyle;
        }, e._setCustomRender = function() {}, e._setCacheAs = function(t) {}, e._checkCanvasEnable = function() {
            var t = this._cacheStyle.needEnableCanvasRender();
            this._getCacheStyle().enableCanvasRender = t, t ? (this._cacheStyle.needBitmapCache() ? this._cacheStyle.cacheAs = "bitmap" : this._cacheStyle.cacheAs = this._cacheStyle.userSetCache, 
            this._cacheStyle.reCache = !0, this._renderType |= 8) : (this._cacheStyle.cacheAs = "none", 
            this._cacheStyle.releaseContext(), this._renderType &= -9), this._setCacheAs(this._cacheStyle.cacheAs), 
            this._setRenderType(this._renderType);
        }, e.reCache = function() {
            this._cacheStyle.reCache = !0, this._repaint |= 2;
        }, e.getRepaint = function() {
            return this._repaint;
        }, e._setX = function(t) {
            this._x = t;
        }, e._setY = function(t) {
            this._y = t;
        }, e._setWidth = function(t, e) {}, e._setHeight = function(t, e) {}, e.setSelfBounds = function(t) {
            this._getBoundsStyle().userBounds = t;
        }, e.getBounds = function() {
            return this._getBoundsStyle().bounds = mt._getWrapRec(this._boundPointsToParent());
        }, e.getSelfBounds = function() {
            return this._boundStyle && this._boundStyle.userBounds ? this._boundStyle.userBounds : this._graphics || 0 !== this._children.length || this._texture ? this._getBoundsStyle().bounds = mt._getWrapRec(this._getBoundPointsM(!1)) : mt.TEMP.setTo(0, 0, 0, 0);
        }, e._boundPointsToParent = function(t) {
            void 0 === t && (t = !1);
            var e = 0, i = 0;
            this._style && (e = this.pivotX, i = this.pivotY, t = t || 0 !== this._style.rotation, 
            this._style.scrollRect && (e += this._style.scrollRect.x, i += this._style.scrollRect.y));
            var n = this._getBoundPointsM(t);
            if (!n || n.length < 1) return n;
            if (8 != n.length && (n = t ? X.scanPList(n) : mt._getWrapRec(n, mt.TEMP)._getBoundPoints()), 
            !this.transform) return ie.transPointList(n, this._x - e, this._y - i), n;
            var r = Xt.TEMP, s = 0, a = n.length;
            for (s = 0; s < a; s += 2) r.x = n[s], r.y = n[s + 1], this.toParentPoint(r), n[s] = r.x, 
            n[s + 1] = r.y;
            return n;
        }, e.getGraphicBounds = function(t) {
            return void 0 === t && (t = !1), this._graphics ? this._graphics.getBounds(t) : mt.TEMP.setTo(0, 0, 0, 0);
        }, e._getBoundPointsM = function(t) {
            if (void 0 === t && (t = !1), this._boundStyle && this._boundStyle.userBounds) return this._boundStyle.userBounds._getBoundPoints();
            if (this._boundStyle || this._getBoundsStyle(), this._boundStyle.temBM || (this._boundStyle.temBM = []), 
            this._style.scrollRect) {
                var e = ie.clearArray(this._boundStyle.temBM), i = mt.TEMP;
                return i.copyFrom(this._style.scrollRect), ie.concatArray(e, i._getBoundPoints()), 
                e;
            }
            var n, r, s, a;
            this._graphics ? n = this._graphics.getBoundPoints() : (n = ie.clearArray(this._boundStyle.temBM), 
            this._texture && ((i = mt.TEMP).setTo(0, 0, this.width || this._texture.width, this.height || this._texture.height), 
            ie.concatArray(n, i._getBoundPoints())));
            for (var o = 0, h = (a = this._children).length; o < h; o++) (r = a[o]) instanceof laya.display.Sprite && !0 === r._visible && (s = r._boundPointsToParent(t)) && (n = n ? ie.concatArray(n, s) : s);
            return n;
        }, e._getCacheStyle = function() {
            return this._cacheStyle === tt.EMPTY && (this._cacheStyle = tt.create()), this._cacheStyle;
        }, e.getStyle = function() {
            return this._style === Z.EMPTY && (this._style = Z.create()), this._style;
        }, e.setStyle = function(t) {
            this._style = t;
        }, e._setScaleX = function(t) {
            this._style.scaleX = t;
        }, e._setScaleY = function(t) {
            this._style.scaleY = t;
        }, e._setRotation = function(t) {
            this._style.rotation = t;
        }, e._setSkewX = function(t) {
            this._style.skewX = t;
        }, e._setSkewY = function(t) {
            this._style.skewY = t;
        }, e._createTransform = function() {
            return st.create();
        }, e._adjustTransform = function() {
            this._tfChanged = !1;
            var t = this._style, e = t.scaleX, i = t.scaleY, n = t.skewX, r = t.skewY, s = t.rotation, a = this._transform || (this._transform = this._createTransform());
            if (s || 1 !== e || 1 !== i || 0 !== n || 0 !== r) {
                a._bTransform = !0;
                var o = .0174532922222222 * (s - n), h = .0174532922222222 * (s + r), u = Math.cos(h), l = Math.sin(h), c = Math.sin(o), _ = Math.cos(o);
                a.a = e * u, a.b = e * l, a.c = -i * c, a.d = i * _, a.tx = a.ty = 0;
            } else a.identity(), this._renderType &= -3, this._setRenderType(this._renderType);
            return a;
        }, e._setTransform = function(t) {}, e._setPivotX = function(t) {
            this.getStyle().pivotX = t;
        }, e._getPivotX = function() {
            return this._style.pivotX;
        }, e._setPivotY = function(t) {
            this.getStyle().pivotY = t;
        }, e._getPivotY = function() {
            return this._style.pivotY;
        }, e._setAlpha = function(t) {
            this._style.alpha !== t && (this.getStyle().alpha = t, 1 !== t ? this._renderType |= 1 : this._renderType &= -2, 
            this._setRenderType(this._renderType), this.parentRepaint());
        }, e._getAlpha = function() {
            return this._style.alpha;
        }, e._setBlendMode = function(t) {}, e._setGraphics = function(t) {}, e._setGraphicsCallBack = function() {}, 
        e._setScrollRect = function(t) {}, e.pos = function(t, e, i) {
            if (void 0 === i && (i = !1), this._x !== t || this._y !== e) {
                if (this.destroyed) return this;
                if (i) {
                    this._setX(t), this._setY(e), this.parentRepaint(2);
                    var n = this._cacheStyle.maskParent;
                    n && n.repaint(2);
                } else this.x = t, this.y = e;
            }
            return this;
        }, e.pivot = function(t, e) {
            return this.pivotX = t, this.pivotY = e, this;
        }, e.size = function(t, e) {
            return this.width = t, this.height = e, this;
        }, e.scale = function(t, e, i) {
            void 0 === i && (i = !1);
            var n = this.getStyle();
            if (n.scaleX != t || n.scaleY != e) {
                if (this.destroyed) return this;
                i ? (this._setScaleX(t), this._setScaleY(e), this._setTranformChange()) : (this.scaleX = t, 
                this.scaleY = e);
            }
            return this;
        }, e.skew = function(t, e) {
            return this.skewX = t, this.skewY = e, this;
        }, e.render = function(t, e, i) {
            E.renders[this._renderType]._fun(this, t, e + this._x, i + this._y), this._repaint = 0;
        }, e.drawToCanvas = function(t, e, i, n) {
            return le.drawToCanvas(this, this._renderType, t, e, i, n);
        }, e.drawToTexture = function(t, e, i, n) {
            return le.drawToTexture(this, this._renderType, t, e, i, n);
        }, e.customRender = function(t, e, i) {
            this._repaint = 3;
        }, e._applyFilters = function() {}, e._setColorFilter = function(t) {}, e._isHaveGlowFilter = function() {
            var t, e = 0;
            if (this.filters) for (e = 0; e < this.filters.length; e++) if (8 == this.filters[e].type) return !0;
            for (e = 0, t = this._children.length; e < t; e++) if (this._children[e]._isHaveGlowFilter()) return !0;
            return !1;
        }, e.localToGlobal = function(t, e, n) {
            void 0 === e && (e = !1), !0 === e && (t = new Xt(t.x, t.y));
            var r = this;
            for (n = n || i.stage; r && !r.destroyed && r != n; ) t = r.toParentPoint(t), r = r.parent;
            return t;
        }, e.globalToLocal = function(t, e, n) {
            void 0 === e && (e = !1), e && (t = new Xt(t.x, t.y));
            var r = this, s = [];
            for (n = n || i.stage; r && !r.destroyed && r != n; ) s.push(r), r = r.parent;
            for (var a = s.length - 1; a >= 0; ) t = (r = s[a]).fromParentPoint(t), a--;
            return t;
        }, e.toParentPoint = function(t) {
            if (!t) return t;
            t.x -= this.pivotX, t.y -= this.pivotY, this.transform && this._transform.transformPoint(t), 
            t.x += this._x, t.y += this._y;
            var e = this._style.scrollRect;
            return e && (t.x -= e.x, t.y -= e.y), t;
        }, e.fromParentPoint = function(t) {
            if (!t) return t;
            t.x -= this._x, t.y -= this._y;
            var e = this._style.scrollRect;
            return e && (t.x += e.x, t.y += e.y), this.transform && this._transform.invertTransformPoint(t), 
            t.x += this.pivotX, t.y += this.pivotY, t;
        }, e.fromStagePoint = function(t) {
            return t;
        }, e.on = function(e, i, n, r) {
            return 1 !== this._mouseState && this.isMouseEvent(e) ? (this.mouseEnabled = !0, 
            this._setBit(64, !0), this._parent && this._$2__onDisplay(), this._createListener(e, i, n, r, !1)) : t.prototype.on.call(this, e, i, n, r);
        }, e.once = function(e, i, n, r) {
            return 1 !== this._mouseState && this.isMouseEvent(e) ? (this.mouseEnabled = !0, 
            this._setBit(64, !0), this._parent && this._$2__onDisplay(), this._createListener(e, i, n, r, !0)) : t.prototype.once.call(this, e, i, n, r);
        }, e._$2__onDisplay = function() {
            if (1 !== this._mouseState) {
                var t = this;
                for (t = t.parent; t && 1 !== t._mouseState && !t._getBit(64); ) t.mouseEnabled = !0, 
                t._setBit(64, !0), t = t.parent;
            }
        }, e._setParent = function(e) {
            t.prototype._setParent.call(this, e), e && this._getBit(64) && this._$2__onDisplay();
        }, e.loadImage = function(t, e) {
            var i = this;
            if (null == t) this.texture = null, loaded(); else {
                var n = Ie.getRes(t);
                n || ((n = new Ee()).load(t), Ie.cacheRes(t, n)), this.texture = n, n.getIsReady() ? loaded() : n.once("ready", null, loaded);
            }
            function loaded() {
                i.repaint(3), e && e.run();
            }
            return this;
        }, e.repaint = function(t) {
            void 0 === t && (t = 2), this._repaint & t || (this._repaint |= t, this.parentRepaint(t)), 
            this._cacheStyle && this._cacheStyle.maskParent && this._cacheStyle.maskParent.repaint(t);
        }, e._needRepaint = function() {
            return 2 & this._repaint && this._cacheStyle.enableCanvasRender && this._cacheStyle.reCache;
        }, e._childChanged = function(t) {
            this._children.length ? this._renderType |= 8192 : this._renderType &= -8193, this._setRenderType(this._renderType), 
            t && this._getBit(32) && i.systemTimer.callLater(this, this.updateZOrder), this.repaint(3);
        }, e.parentRepaint = function(t) {
            void 0 === t && (t = 2);
            var e = this._parent;
            !e || e._repaint & t || (e._repaint |= t, e.parentRepaint(t));
        }, e._setMask = function(t) {}, e.startDrag = function(t, e, i, n, r, s, a) {
            void 0 === e && (e = !1), void 0 === i && (i = 0), void 0 === n && (n = 300), void 0 === s && (s = !1), 
            void 0 === a && (a = .92), this._style.dragging || (this.getStyle().dragging = new Ut()), 
            this._style.dragging.start(this, t, e, i, n, r, s, a);
        }, e.stopDrag = function() {
            this._style.dragging && this._style.dragging.stop();
        }, e._setDisplay = function(e) {
            e || this._cacheStyle && (this._cacheStyle.releaseContext(), this._cacheStyle.releaseFilterCache(), 
            this._cacheStyle.hasGlowFilter && (this._cacheStyle.hasGlowFilter = !1)), t.prototype._setDisplay.call(this, e);
        }, e.hitTestPoint = function(t, e) {
            var i = this.globalToLocal(Xt.TEMP.setTo(t, e));
            return t = i.x, e = i.y, (this._style.hitArea ? this._style.hitArea : this._width > 0 && this._height > 0 ? mt.TEMP.setTo(0, 0, this._width, this._height) : this.getSelfBounds()).contains(t, e);
        }, e.getMousePoint = function() {
            return this.globalToLocal(Xt.TEMP.setTo(i.stage.mouseX, i.stage.mouseY));
        }, e._setTexture = function(t) {}, e._setRenderType = function(t) {}, e._setTranformChange = function() {
            this._tfChanged = !0, this._renderType |= 2, this.parentRepaint(2);
        }, e._setBgStyleColor = function(t, e, i, n, r) {}, e._setBorderStyleColor = function(t, e, i, n, r, s) {}, 
        e.captureMouseEvent = function(t) {
            A.instance.setCapture(this, t);
        }, e.releaseMouseEvent = function() {
            A.instance.releaseCapture();
        }, s(0, e, "customRenderEnable", null, function(t) {
            t && (this._renderType |= 2048, this._setRenderType(this._renderType), this._setCustomRender());
        }), s(0, e, "cacheAs", function() {
            return this._cacheStyle.cacheAs;
        }, function(t) {
            t !== this._cacheStyle.userSetCache && (this.mask && "normal" === t || (this._setCacheAs(t), 
            this._getCacheStyle().userSetCache = t, this._checkCanvasEnable(), this.repaint()));
        }), s(0, e, "globalScaleY", function() {
            for (var t = 1, e = this; e && e !== i.stage; ) t *= e.scaleY, e = e.parent;
            return t;
        }), s(0, e, "hitArea", function() {
            return this._style.hitArea;
        }, function(t) {
            this.getStyle().hitArea = t;
        }), s(0, e, "staticCache", function() {
            return this._cacheStyle.staticCache;
        }, function(t) {
            this._getCacheStyle().staticCache = t, t || this.reCache();
        }), s(0, e, "displayWidth", function() {
            return this.width * this.scaleX;
        }), s(0, e, "zOrder", function() {
            return this._zOrder;
        }, function(t) {
            this._zOrder != t && (this._zOrder = t, this._parent && (t && this._parent._setBit(32, !0), 
            i.systemTimer.callLater(this._parent, this.updateZOrder)));
        }), s(0, e, "rotation", function() {
            return this._style.rotation;
        }, function(t) {
            this.getStyle().rotation !== t && (this._setRotation(t), this._setTranformChange());
        }), s(0, e, "width", function() {
            return this.autoSize ? this.texture ? this.texture.width : this._graphics || 0 !== this._children.length ? this.getSelfBounds().width : 0 : this._width || (this.texture ? this.texture.width : 0);
        }, function(t) {
            this._width !== t && (this._width = t, this._setWidth(this.texture, t), this._setTranformChange());
        }), s(0, e, "x", function() {
            return this._x;
        }, function(t) {
            if (!this.destroyed && this._x !== t) {
                this._setX(t), this.parentRepaint(2);
                var e = this._cacheStyle.maskParent;
                e && e.repaint(2);
            }
        }), s(0, e, "drawCallOptimize", function() {
            return this._getBit(256);
        }, function(t) {
            this._setBit(256, t);
        }), s(0, e, "texture", function() {
            return this._texture;
        }, function(t) {
            "string" == typeof t ? this.loadImage(t) : this._texture != t && (this._texture && this._texture._removeReference(), 
            this._texture = t, t && t._addReference(), this._setTexture(t), this._setWidth(this._texture, this.width), 
            this._setHeight(this._texture, this.height), t ? this._renderType |= 256 : this._renderType &= -257, 
            this._setRenderType(this._renderType), this.repaint());
        }), s(0, e, "globalRotation", function() {
            for (var t = 0, e = this; e && e !== i.stage; ) t += e.rotation, e = e.parent;
            return t;
        }), s(0, e, "y", function() {
            return this._y;
        }, function(t) {
            if (!this.destroyed && this._y !== t) {
                this._setY(t), this.parentRepaint(2);
                var e = this._cacheStyle.maskParent;
                e && e.repaint(2);
            }
        }), s(0, e, "displayHeight", function() {
            return this.height * this.scaleY;
        }), s(0, e, "height", function() {
            return this.autoSize ? this.texture ? this.texture.height : this._graphics || 0 !== this._children.length ? this.getSelfBounds().height : 0 : this._height || (this.texture ? this.texture.height : 0);
        }, function(t) {
            this._height !== t && (this._height = t, this._setHeight(this.texture, t), this._setTranformChange());
        }), s(0, e, "blendMode", function() {
            return this._style.blendMode;
        }, function(t) {
            this._setBlendMode(t), this.getStyle().blendMode = t, t && "source-over" != t ? this._renderType |= 4 : this._renderType &= -5, 
            this._setRenderType(this._renderType), this.parentRepaint();
        }), s(0, e, "scaleX", function() {
            return this._style.scaleX;
        }, function(t) {
            this.getStyle().scaleX !== t && (this._setScaleX(t), this._setTranformChange());
        }), s(0, e, "scaleY", function() {
            return this._style.scaleY;
        }, function(t) {
            this.getStyle().scaleY !== t && (this._setScaleY(t), this._setTranformChange());
        }), s(0, e, "stage", function() {
            return i.stage;
        }), s(0, e, "skewX", function() {
            return this._style.skewX;
        }, function(t) {
            this.getStyle().skewX !== t && (this._setSkewX(t), this._setTranformChange());
        }), s(0, e, "scrollRect", function() {
            return this._style.scrollRect;
        }, function(t) {
            this.getStyle().scrollRect = t, this._setScrollRect(t), this.repaint(), t ? this._renderType |= 64 : this._renderType &= -65, 
            this._setRenderType(this._renderType);
        }), s(0, e, "skewY", function() {
            return this._style.skewY;
        }, function(t) {
            this.getStyle().skewY !== t && (this._setSkewY(t), this._setTranformChange());
        }), s(0, e, "transform", function() {
            return this._tfChanged ? this._adjustTransform() : this._transform;
        }, function(t) {
            this._tfChanged = !1;
            var e = this._transform || (this._transform = this._createTransform());
            t.copyTo(e), this._setTransform(e), t && (this._x = e.tx, this._y = e.ty, e.tx = e.ty = 0), 
            t ? this._renderType |= 2 : this._renderType &= -3, this._setRenderType(this._renderType), 
            this.parentRepaint();
        }), s(0, e, "pivotX", function() {
            return this._getPivotX();
        }, function(t) {
            this._setPivotX(t), this.repaint();
        }), s(0, e, "pivotY", function() {
            return this._getPivotY();
        }, function(t) {
            this._setPivotY(t), this.repaint();
        }), s(0, e, "alpha", function() {
            return this._getAlpha();
        }, function(t) {
            t = t < 0 ? 0 : t > 1 ? 1 : t, this._setAlpha(t);
        }), s(0, e, "visible", function() {
            return this._visible;
        }, function(t) {
            this._visible !== t && (this._visible = t, this.parentRepaint(3));
        }), s(0, e, "graphics", function() {
            return this._graphics || (this.graphics = new $t(), this._graphics.autoDestroy = !0), 
            this._graphics;
        }, function(t) {
            this._graphics && (this._graphics._sp = null), this._graphics = t, t ? (this._setGraphics(t), 
            this._renderType |= 512, t._sp = this) : this._renderType &= -513, this._setRenderType(this._renderType), 
            this.repaint();
        }), s(0, e, "filters", function() {
            return this._cacheStyle.filters;
        }, function(t) {
            t && 0 === t.length && (t = null), this._cacheStyle.filters != t && (this._getCacheStyle().filters = t ? t.slice() : null, 
            t && t.length ? (this._setColorFilter(t[0]), this._renderType |= 16) : (this._setColorFilter(null), 
            this._renderType &= -17), this._setRenderType(this._renderType), t && t.length > 0 ? (this._getBit(16) || this._setBitUp(16), 
            1 == t.length && t[0] instanceof laya.filters.ColorFilter || (this._getCacheStyle().cacheForFilters = !0, 
            this._checkCanvasEnable())) : this._cacheStyle.cacheForFilters && (this._cacheStyle.cacheForFilters = !1, 
            this._checkCanvasEnable()), this._getCacheStyle().hasGlowFilter = this._isHaveGlowFilter(), 
            this.repaint());
        }), s(0, e, "mask", function() {
            return this._cacheStyle.mask;
        }, function(t) {
            t && this.mask && this.mask._cacheStyle.maskParent || (this._getCacheStyle().mask = t, 
            this._setMask(t), this._checkCanvasEnable(), t ? t._getCacheStyle().maskParent = this : this.mask && (this.mask._getCacheStyle().maskParent = null), 
            this._renderType |= 32, this._setRenderType(this._renderType), this.parentRepaint(3));
        }), s(0, e, "mouseEnabled", function() {
            return this._mouseState > 1;
        }, function(t) {
            this._mouseState = t ? 2 : 1;
        }), s(0, e, "globalScaleX", function() {
            for (var t = 1, e = this; e && e !== i.stage; ) t *= e.scaleX, e = e.parent;
            return t;
        }), s(0, e, "mouseX", function() {
            return this.getMousePoint().x;
        }), s(0, e, "mouseY", function() {
            return this.getMousePoint().y;
        }), s(0, e, "viewport", function() {
            return this._style.viewport;
        }, function(t) {
            var e;
            "string" == typeof t && ((e = t.split(",")).length > 3 && (t = new mt(parseFloat(e[0]), parseFloat(e[1]), parseFloat(e[2]), parseFloat(e[3]))));
            this.getStyle().viewport = t;
        }), Sprite.fromImage = function(t) {
            return new Sprite().loadImage(t);
        }, Sprite;
    }(Se), je = function(t) {
        function BaseShader() {
            BaseShader.__super.call(this);
        }
        return r(BaseShader, "laya.webgl.shader.BaseShader", Me), BaseShader.activeShader = null, 
        BaseShader.bindShader = null, BaseShader;
    }(), Qe = function(t) {
        function Bitmap() {
            Bitmap.__super.call(this), this._width = -1, this._height = -1;
        }
        r(Bitmap, "laya.resource.Bitmap", Me);
        var e = Bitmap.prototype;
        return e._getSource = function() {
            throw "Bitmap: must override it.";
        }, s(0, e, "width", function() {
            return this._width;
        }), s(0, e, "height", function() {
            return this._height;
        }), Bitmap;
    }(), $e = function(t) {
        function TextTexture(t, e) {
            this._source = null, this._texW = 0, this._texH = 0, this.__destroyed = !1, this._discardTm = 0, 
            this.genID = 0, this.bitmap = {
                id: 0,
                _glTexture: null
            }, this.curUsedCovRate = 0, this.curUsedCovRateAtlas = 0, this.lastTouchTm = 0, 
            this.ri = null, TextTexture.__super.call(this), this._texW = t || S.atlasWidth, 
            this._texH = e || S.atlasWidth, this.bitmap.id = this.id, this.lock = !0;
        }
        r(TextTexture, "laya.webgl.text.TextTexture", Me);
        var e = TextTexture.prototype;
        return e.recreateResource = function() {
            if (!this._source) {
                var t = Rt.isConchApp ? Dt.instance.getDefaultCommandEncoder() : Ct.mainContext, e = this._source = t.createTexture();
                this.bitmap._glTexture = e, nt.bindTexture(t, 3553, e), t.texImage2D(3553, 0, 6408, this._texW, this._texH, 0, 6408, 5121, null), 
                t.texParameteri(3553, 10241, 9729), t.texParameteri(3553, 10240, 9729), t.texParameteri(3553, 10242, 33071), 
                t.texParameteri(3553, 10243, 33071), S.debugUV && this.fillWhite();
            }
        }, e.addChar = function(t, e, i, n) {
            if (S.isWan1Wan) return this.addCharCanvas(t, e, i, n);
            !this._source && this.recreateResource();
            var r = Rt.isConchApp ? Dt.instance.getDefaultCommandEncoder() : Ct.mainContext;
            nt.bindTexture(r, 3553, this._source), !Rt.isConchApp && r.pixelStorei(37441, !0);
            var s = t.data;
            t.data instanceof Uint8ClampedArray && (s = new Uint8Array(s.buffer)), r.texSubImage2D(3553, 0, e, i, t.width, t.height, 6408, 5121, s), 
            !Rt.isConchApp && r.pixelStorei(37441, !1);
            var a = NaN, o = NaN, h = NaN, u = NaN;
            return Rt.isConchApp ? (a = e / this._texW, o = i / this._texH, h = (e + t.width) / this._texW, 
            u = (i + t.height) / this._texH) : (a = (e + 1) / this._texW, o = i / this._texH, 
            h = (e + t.width - 1) / this._texW, u = (i + t.height - 1) / this._texH), (n = n || new Array(8))[0] = a, 
            n[1] = o, n[2] = h, n[3] = o, n[4] = h, n[5] = u, n[6] = a, n[7] = u, n;
        }, e.addCharCanvas = function(t, e, i, n) {
            !this._source && this.recreateResource();
            var r = Rt.isConchApp ? Dt.instance.getDefaultCommandEncoder() : Ct.mainContext;
            nt.bindTexture(r, 3553, this._source), !Rt.isConchApp && r.pixelStorei(37441, !0), 
            r.texSubImage2D(3553, 0, e, i, 6408, 5121, t), !Rt.isConchApp && r.pixelStorei(37441, !1);
            var s = NaN, a = NaN, o = NaN, h = NaN;
            return Rt.isConchApp ? (s = e / this._texW, a = i / this._texH, o = (e + t.width) / this._texW, 
            h = (i + t.height) / this._texH) : (s = (e + 1) / this._texW, a = (i + 1) / this._texH, 
            o = (e + t.width - 1) / this._texW, h = (i + t.height - 1) / this._texH), (n = n || new Array(8))[0] = s, 
            n[1] = a, n[2] = o, n[3] = a, n[4] = o, n[5] = h, n[6] = s, n[7] = h, n;
        }, e.fillWhite = function() {
            !this._source && this.recreateResource();
            var t = Rt.isConchApp ? Dt.instance.getDefaultCommandEncoder() : Ct.mainContext, e = new Uint8Array(this._texW * this._texH * 4);
            e.fill(255), t.texSubImage2D(3553, 0, 0, 0, this._texW, this._texH, 6408, 5121, e);
        }, e.discard = function() {
            this._texW == S.atlasWidth && this._texH == S.atlasWidth ? (this.genID++, TextTexture.poolLen >= TextTexture.pool.length && (TextTexture.pool = TextTexture.pool.concat(new Array(10))), 
            this._discardTm = i.stage.getFrameTm(), TextTexture.pool[TextTexture.poolLen++] = this) : this.destroy();
        }, e.destroy = function() {
            this.__destroyed = !0;
            var t = Rt.isConchApp ? Dt.instance.getDefaultCommandEncoder() : Ct.mainContext;
            this._source && t.deleteTexture(this._source), this._source = null;
        }, e.touchRect = function(t, e) {
            this.lastTouchTm != e && (this.curUsedCovRate = 0, this.curUsedCovRateAtlas = 0, 
            this.lastTouchTm = e);
            var i = S.atlasWidth * S.atlasWidth, n = Ot.atlasGridW * Ot.atlasGridW;
            this.curUsedCovRate += t.bmpWidth * t.bmpHeight / i, this.curUsedCovRateAtlas += Math.ceil(t.bmpWidth / Ot.atlasGridW) * Math.ceil(t.bmpHeight / Ot.atlasGridW) / (i / n);
        }, e._getSource = function() {
            return this._source;
        }, e.drawOnScreen = function(t, e) {}, s(0, e, "texture", function() {
            return this;
        }), TextTexture.getTextTexture = function(t, e) {
            if (t != S.atlasWidth || t != S.atlasWidth) return new TextTexture(t, e);
            if (TextTexture.poolLen > 0) {
                var i = TextTexture.pool[--TextTexture.poolLen];
                return TextTexture.poolLen > 0 && TextTexture.clean(), i;
            }
            return new TextTexture(t, e);
        }, TextTexture.clean = function() {
            var t = i.stage.getFrameTm();
            if (0 === TextTexture.cleanTm && (TextTexture.cleanTm = t), t - TextTexture.cleanTm >= S.checkCleanTextureDt) {
                for (var e = 0; e < TextTexture.poolLen; e++) {
                    var n = TextTexture.pool[e];
                    t - n._discardTm >= S.destroyUnusedTextureDt && (n.destroy(), TextTexture.pool[e] = TextTexture.pool[TextTexture.poolLen - 1], 
                    TextTexture.poolLen--, e--);
                }
                TextTexture.cleanTm = t;
            }
        }, TextTexture.poolLen = 0, TextTexture.cleanTm = 0, n(TextTexture, [ "pool", function() {
            return this.pool = new Array(10);
        } ]), TextTexture;
    }(), qe = function(t) {
        function IndexBuffer2D(t) {
            this._uint16Array = null, void 0 === t && (t = 35044), IndexBuffer2D.__super.call(this), 
            this._bufferUsage = t, this._bufferType = 34963, this._buffer = new ArrayBuffer(8);
        }
        r(IndexBuffer2D, "laya.webgl.utils.IndexBuffer2D", Pe);
        var e = IndexBuffer2D.prototype;
        return e._checkArrayUse = function() {
            this._uint16Array && (this._uint16Array = new Uint16Array(this._buffer));
        }, e.getUint16Array = function() {
            return this._uint16Array || (this._uint16Array = new Uint16Array(this._buffer));
        }, e._bindForVAO = function() {
            Dt.instance.bindBuffer(34963, this._glBuffer);
        }, e.bind = function() {
            return k._bindedIndexBuffer !== this._glBuffer && (Dt.instance.bindBuffer(34963, this._glBuffer), 
            k._bindedIndexBuffer = this._glBuffer, !0);
        }, e.destory = function() {
            this._uint16Array = null, this._buffer = null;
        }, e.disposeResource = function() {
            this._disposeResource();
        }, IndexBuffer2D.create = function(t) {
            return void 0 === t && (t = 35044), new IndexBuffer2D(t);
        }, IndexBuffer2D;
    }(), Ze = function(t) {
        function WebAudioSoundChannel() {
            this.audioBuffer = null, this.gain = null, this.bufferSource = null, this._currentTime = 0, 
            this._volume = 1, this._startTime = 0, this._pauseTime = 0, this._onPlayEnd = null, 
            this.context = Be.ctx, WebAudioSoundChannel.__super.call(this), this._onPlayEnd = ie.bind(this.__onPlayEnd, this), 
            this.context.createGain ? this.gain = this.context.createGain() : this.gain = this.context.createGainNode();
        }
        r(WebAudioSoundChannel, "laya.media.webaudio.WebAudioSoundChannel", t);
        var e = WebAudioSoundChannel.prototype;
        return e.play = function() {
            if (xe.addChannel(this), this.isStopped = !1, this._clearBufferSource(), this.audioBuffer) {
                if (this.startTime >= this.duration) return this.stop();
                var t = this.context, e = this.gain, i = t.createBufferSource();
                this.bufferSource = i, i.buffer = this.audioBuffer, i.connect(e), e && e.disconnect(), 
                e.connect(t.destination), i.onended = this._onPlayEnd, this._startTime = It.now(), 
                this.gain.gain.setTargetAtTime ? this.gain.gain.setTargetAtTime(this._volume, this.context.currentTime, .001) : this.gain.gain.value = this._volume, 
                0 == this.loops && (i.loop = !0), i.playbackRate.setTargetAtTime ? i.playbackRate.setTargetAtTime(xe.playbackRate, this.context.currentTime, .001) : i.playbackRate.value = xe.playbackRate, 
                i.start(0, this.startTime), this._currentTime = 0;
            }
        }, e.__onPlayEnd = function() {
            if (1 == this.loops) return this.completeHandler && (i.timer.once(10, this, this.__runComplete, [ this.completeHandler ], !1), 
            this.completeHandler = null), this.stop(), void this.event("complete");
            this.loops > 0 && this.loops--, this.startTime = 0, this.play();
        }, e._clearBufferSource = function() {
            if (this.bufferSource) {
                var t = this.bufferSource;
                t.stop ? t.stop(0) : t.noteOff(0), t.disconnect(0), t.onended = null, WebAudioSoundChannel._tryCleanFailed || this._tryClearBuffer(t), 
                this.bufferSource = null;
            }
        }, e._tryClearBuffer = function(t) {
            if (It.onMac) try {
                t.buffer = Be._miniBuffer;
            } catch (t) {
                WebAudioSoundChannel._tryCleanFailed = !0;
            } else try {
                t.buffer = null;
            } catch (t) {
                WebAudioSoundChannel._tryCleanFailed = !0;
            }
        }, e.stop = function() {
            t.prototype.stop.call(this), this._clearBufferSource(), this.audioBuffer = null, 
            this.gain && this.gain.disconnect(), this.isStopped = !0, xe.removeChannel(this), 
            this.completeHandler = null, xe.autoReleaseSound && xe.disposeSoundLater(this.url);
        }, e.pause = function() {
            this.isStopped || (this._pauseTime = this.position), this._clearBufferSource(), 
            this.gain && this.gain.disconnect(), this.isStopped = !0, xe.removeChannel(this), 
            xe.autoReleaseSound && xe.disposeSoundLater(this.url);
        }, e.resume = function() {
            this.startTime = this._pauseTime, this.play();
        }, s(0, e, "position", function() {
            return this.bufferSource ? (It.now() - this._startTime) / 1e3 + this.startTime : 0;
        }), s(0, e, "duration", function() {
            return this.audioBuffer ? this.audioBuffer.duration : 0;
        }), s(0, e, "volume", function() {
            return this._volume;
        }, function(t) {
            this._volume = t, this.isStopped || (this.gain.gain.setTargetAtTime ? this.gain.gain.setTargetAtTime(t, this.context.currentTime, .001) : this.gain.gain.value = t);
        }), WebAudioSoundChannel._tryCleanFailed = !1, WebAudioSoundChannel.SetTargetDelay = .001, 
        WebAudioSoundChannel;
    }(we), Je = function(t) {
        function AudioSoundChannel(t) {
            this._audio = null, this._onEnd = null, this._resumePlay = null, AudioSoundChannel.__super.call(this), 
            this._onEnd = ie.bind(this.__onEnd, this), this._resumePlay = ie.bind(this.__resumePlay, this), 
            t.addEventListener("ended", this._onEnd), this._audio = t;
        }
        r(AudioSoundChannel, "laya.media.h5audio.AudioSoundChannel", t);
        var e = AudioSoundChannel.prototype;
        return e.__onEnd = function() {
            if (1 == this.loops) return this.completeHandler && (i.systemTimer.once(10, this, this.__runComplete, [ this.completeHandler ], !1), 
            this.completeHandler = null), this.stop(), void this.event("complete");
            this.loops > 0 && this.loops--, this.startTime = 0, this.play();
        }, e.__resumePlay = function() {
            if (this._audio && this._audio.removeEventListener("canplay", this._resumePlay), 
            !this.isStopped) try {
                this._audio.currentTime = this.startTime, It.container.appendChild(this._audio), 
                this._audio.play();
            } catch (t) {
                this.event("error");
            }
        }, e.play = function() {
            this.isStopped = !1;
            try {
                this._audio.playbackRate = xe.playbackRate, this._audio.currentTime = this.startTime;
            } catch (t) {
                return void this._audio.addEventListener("canplay", this._resumePlay);
            }
            xe.addChannel(this), It.container.appendChild(this._audio), "play" in this._audio && this._audio.play();
        }, e.stop = function() {
            t.prototype.stop.call(this), this.isStopped = !0, xe.removeChannel(this), this.completeHandler = null, 
            this._audio && ("pause" in this._audio && Rt.isConchApp && this._audio.stop(), this._audio.pause(), 
            this._audio.removeEventListener("ended", this._onEnd), this._audio.removeEventListener("canplay", this._resumePlay), 
            It.onIE || this._audio != Ce._musicAudio && N.recover("audio:" + this.url, this._audio), 
            It.removeElement(this._audio), this._audio = null);
        }, e.pause = function() {
            this.isStopped = !0, xe.removeChannel(this), "pause" in this._audio && this._audio.pause();
        }, e.resume = function() {
            this._audio && (this.isStopped = !1, xe.addChannel(this), "play" in this._audio && this._audio.play());
        }, s(0, e, "position", function() {
            return this._audio ? this._audio.currentTime : 0;
        }), s(0, e, "duration", function() {
            return this._audio ? this._audio.duration : 0;
        }), s(0, e, "volume", function() {
            return this._audio ? this._audio.volume : 1;
        }, function(t) {
            this._audio && (this._audio.volume = t);
        }), AudioSoundChannel;
    }(we), ti = function(t) {
        function VertexBuffer2D(t, e) {
            this._floatArray32 = null, this._uint32Array = null, this._vertexStride = 0, VertexBuffer2D.__super.call(this), 
            this._vertexStride = t, this._bufferUsage = e, this._bufferType = 34962, this._buffer = new ArrayBuffer(8), 
            this._floatArray32 = new Float32Array(this._buffer), this._uint32Array = new Uint32Array(this._buffer);
        }
        r(VertexBuffer2D, "laya.webgl.utils.VertexBuffer2D", Pe);
        var e = VertexBuffer2D.prototype;
        return e.getFloat32Array = function() {
            return this._floatArray32;
        }, e.appendArray = function(t) {
            var e = this._byteLength >> 2;
            this.setByteLength(this._byteLength + 4 * t.length), this.getFloat32Array().set(t, e), 
            this._upload = !0;
        }, e._checkArrayUse = function() {
            this._floatArray32 && (this._floatArray32 = new Float32Array(this._buffer)), this._uint32Array && (this._uint32Array = new Uint32Array(this._buffer));
        }, e.deleteBuffer = function() {
            this._disposeResource();
        }, e._bindForVAO = function() {
            Dt.instance.bindBuffer(34962, this._glBuffer);
        }, e.bind = function() {
            return k._bindedVertexBuffer !== this._glBuffer && (Dt.instance.bindBuffer(34962, this._glBuffer), 
            k._bindedVertexBuffer = this._glBuffer, !0);
        }, e.destroy = function() {
            laya.webgl.utils.Buffer.prototype.destroy.call(this), this._byteLength = 0, this._upload = !0, 
            this._buffer = null, this._floatArray32 = null;
        }, s(0, e, "vertexStride", function() {
            return this._vertexStride;
        }), VertexBuffer2D.create = function(t, e) {
            return void 0 === e && (e = 35048), new VertexBuffer2D(t, e);
        }, VertexBuffer2D;
    }(), ei = function(e) {
        function Text() {
            this._clipPoint = null, this._text = null, this._isChanged = !1, this._textWidth = 0, 
            this._textHeight = 0, this._lines = [], this._lineWidths = [], this._startX = 0, 
            this._startY = 0, this._words = null, this._charSize = {}, this._valign = "top", 
            this._color = "#000000", this._singleCharRender = !1, Text.__super.call(this), this._fontSize = Text.defaultFontSize, 
            this._font = Text.defaultFont, this.overflow = "visible", this._style = Ue.EMPTY;
        }
        r(Text, "laya.display.Text", e);
        var a = Text.prototype;
        return a.getStyle = function() {
            return this._style === Ue.EMPTY && (this._style = Ue.create()), this._style;
        }, a._getTextStyle = function() {
            return this._style === Ue.EMPTY && (this._style = Ue.create()), this._style;
        }, a.destroy = function(t) {
            void 0 === t && (t = !0), e.prototype.destroy.call(this, t), this._clipPoint = null, 
            this._lines = null, this._lineWidths = null, this._words && this._words.forEach(function(t) {
                t.cleanCache();
            }), this._words = null, this._charSize = null;
        }, a._getBoundPointsM = function(t) {
            void 0 === t && (t = !1);
            var e = mt.TEMP;
            return e.setTo(0, 0, this.width, this.height), e._getBoundPoints();
        }, a.getGraphicBounds = function(t) {
            void 0 === t && (t = !1);
            var e = mt.TEMP;
            return e.setTo(0, 0, this.width, this.height), e;
        }, a._getCSSStyle = function() {
            return this._style;
        }, a.lang = function(t, e, i, n, r, s, a, o, h, u, l) {
            if (t = Text.langPacks && Text.langPacks[t] ? Text.langPacks[t] : t, arguments.length < 2) this._text = t; else {
                for (var c = 0, _ = arguments.length; c < _; c++) t = t.replace("{" + c + "}", arguments[c + 1]);
                this._text = t;
            }
        }, a._getContextFont = function() {
            return (this.italic ? "italic " : "") + (this.bold ? "bold " : "") + this.fontSize + "px " + (It.onIPhone && laya.display.Text.fontFamilyMap[this.font] || this.font);
        }, a._isPassWordMode = function() {
            var t = this._style.asPassword;
            return "prompt" in this && this.prompt == this._text && (t = !1), t;
        }, a._getPassWordTxt = function(t) {
            var e;
            e = "";
            for (var i = t.length; i > 0; i--) e += "●";
            return e;
        }, a._renderText = function() {
            var t = this.padding, e = this._lines.length;
            "visible" != this.overflow && (e = Math.min(e, Math.floor((this.height - t[0] - t[2]) / (this.leading + this._charSize.height)) + 1));
            var i = this.scrollY / (this._charSize.height + this.leading) | 0, n = this.graphics;
            n.clear(!0);
            var r = this._getContextFont();
            It.context.font = r;
            var s = t[3], a = "left", o = this._lines, h = this.leading + this._charSize.height, u = this._style.currBitmapFont;
            u && (h = this.leading + u.getMaxHeight());
            var l = t[0];
            if (!u && this._width > 0 && this._textWidth <= this._width && ("right" == this.align ? (a = "right", 
            s = this._width - t[1]) : "center" == this.align && (a = "center", s = .5 * this._width + t[3] - t[1])), 
            this._height > 0) {
                var c = this._textHeight > this._height ? "top" : this.valign;
                "middle" === c ? l = .5 * (this._height - e * h) + t[0] - t[2] : "bottom" === c && (l = this._height - e * h - t[2]);
            }
            var _ = this._style;
            if (u && u.autoScaleSize) var d = u.fontSize / this.fontSize;
            if (this._clipPoint) {
                if (n.save(), u && u.autoScaleSize) {
                    var f = 0, p = 0;
                    f = this._width ? this._width - t[3] - t[1] : this._textWidth, p = this._height ? this._height - t[0] - t[2] : this._textHeight, 
                    f *= d, p *= d, n.clipRect(t[3], t[0], f, p);
                } else n.clipRect(t[3], t[0], this._width ? this._width - t[3] - t[1] : this._textWidth, this._height ? this._height - t[0] - t[2] : this._textHeight);
                this.repaint();
            }
            var m = _.asPassword;
            "prompt" in this && this.prompt == this._text && (m = !1);
            for (var g = 0, v = 0, x = Math.min(this._lines.length, e + i) || 1, y = i; y < x; y++) {
                var b, C = o[y];
                if (m) {
                    var S = C.length;
                    C = "";
                    for (var w = S; w > 0; w--) C += "●";
                }
                if (null == C && (C = ""), g = s - (this._clipPoint ? this._clipPoint.x : 0), v = l + h * y - (this._clipPoint ? this._clipPoint.y : 0), 
                this.underline && this._drawUnderline(a, g, v, y), u) {
                    var M = this.width;
                    u.autoScaleSize && (M = this.width * d), u._drawText(C, this, g, v, this.align, M);
                } else this._words || (this._words = []), this._words.length > y - i ? b = this._words[y - i] : (b = new T(), 
                this._words.push(b)), b.setText(C), b.splitRender = this._singleCharRender, _.stroke ? n.fillBorderText(b, g, v, r, this.color, _.strokeColor, _.stroke, a) : n.fillText(b, g, v, r, this.color, a);
            }
            if (u && u.autoScaleSize) {
                var A = 1 / d;
                this.scale(A, A);
            }
            this._clipPoint && n.restore(), this._startX = s, this._startY = l;
        }, a._drawUnderline = function(t, e, i, n) {
            var r = this._lineWidths[n];
            switch (t) {
              case "center":
                e -= r / 2;
                break;

              case "right":
                e -= r;
            }
            i += this._charSize.height, this._graphics.drawLine(e, i, e + r, i, this.underlineColor || this.color, 1);
        }, a.typeset = function() {
            if (this._isChanged = !1, !this._text) return this._clipPoint = null, this._textWidth = this._textHeight = 0, 
            void this.graphics.clear(!0);
            Rt.isConchApp ? t.conchTextCanvas.font = this._getContextFont() : It.context.font = this._getContextFont(), 
            this._lines.length = 0, this._lineWidths.length = 0, this._isPassWordMode() ? this._parseLines(this._getPassWordTxt(this._text)) : this._parseLines(this._text), 
            this._evalTextSize(), this._checkEnabledViewportOrNot() ? this._clipPoint || (this._clipPoint = new Xt(0, 0)) : this._clipPoint = null, 
            this._renderText();
        }, a._evalTextSize = function() {
            var t, e = NaN;
            t = Math.max.apply(this, this._lineWidths), e = this._style.currBitmapFont ? this._lines.length * (this._style.currBitmapFont.getMaxHeight() + this.leading) + this.padding[0] + this.padding[2] : this._lines.length * (this._charSize.height + this.leading) + this.padding[0] + this.padding[2], 
            t == this._textWidth && e == this._textHeight || (this._textWidth = t, this._textHeight = e);
        }, a._checkEnabledViewportOrNot = function() {
            return "scroll" == this.overflow && (this._width > 0 && this._textWidth > this._width || this._height > 0 && this._textHeight > this._height);
        }, a.changeText = function(t) {
            this._text !== t && (this.lang(t + ""), this._graphics && this._graphics.replaceText(this._text) || this.typeset());
        }, a._parseLines = function(e) {
            var i = this.wordWrap || "hidden" == this.overflow;
            if (i) var n = this._getWordWrapWidth();
            var r = this._style.currBitmapFont;
            if (r) this._charSize.width = r.getMaxWidth(), this._charSize.height = r.getMaxHeight(); else {
                var s = null;
                (s = Rt.isConchApp ? t.conchTextCanvas.measureText(this._testWord) : It.context.measureText(Text._testWord)) || (s = {
                    width: 100
                }), this._charSize.width = s.width, this._charSize.height = s.height || this.fontSize;
            }
            for (var a = e.replace(/\r\n/g, "\n").split("\n"), o = 0, h = a.length; o < h; o++) {
                var u = a[o];
                i ? this._parseLine(u, n) : (this._lineWidths.push(this._getTextWidth(u)), this._lines.push(u));
            }
        }, a._parseLine = function(t, e) {
            It.context;
            var i, n = this._lines, r = 0, s = NaN, a = NaN, o = 0;
            if ((s = this._getTextWidth(t)) <= e) return n.push(t), void this._lineWidths.push(s);
            s = this._charSize.width, 0 == (r = Math.floor(e / s)) && (r = 1), a = s = this._getTextWidth(t.substring(0, r));
            for (var h = r, u = t.length; h < u; h++) if ((a += s = this._getTextWidth(t.charAt(h))) > e) if (this.wordWrap) {
                var l = t.substring(o, h);
                if (l.charCodeAt(l.length - 1) < 255 && (i = /(?:\w|-)+$/.exec(l)) && (h = i.index + o, 
                0 == i.index ? h += l.length : l = t.substring(o, h)), n.push(l), this._lineWidths.push(a - s), 
                o = h, !(h + r < u)) {
                    n.push(t.substring(o, u)), this._lineWidths.push(this._getTextWidth(n[n.length - 1])), 
                    o = -1;
                    break;
                }
                h += r, a = s = this._getTextWidth(t.substring(o, h)), h--;
            } else if ("hidden" == this.overflow) return n.push(t.substring(0, h)), void this._lineWidths.push(this._getTextWidth(n[n.length - 1]));
            this.wordWrap && -1 != o && (n.push(t.substring(o, u)), this._lineWidths.push(this._getTextWidth(n[n.length - 1])));
        }, a._getTextWidth = function(e) {
            var i = this._style.currBitmapFont;
            return i ? i.getTextWidth(e) : Rt.isConchApp ? t.conchTextCanvas.measureText(e).width : It.context.measureText(e).width;
        }, a._getWordWrapWidth = function() {
            var t = this.padding, e = NaN, i = this._style.currBitmapFont;
            return (e = i && i.autoScaleSize ? this._width * (i.fontSize / this.fontSize) : this._width) <= 0 && (e = this.wordWrap ? 100 : It.width), 
            e <= 0 && (e = 100), e - t[3] - t[1];
        }, a.getCharPoint = function(t, e) {
            this._isChanged && i.systemTimer.runCallLater(this, this.typeset);
            for (var n = 0, r = this._lines, s = 0, a = 0, o = r.length; a < o; a++) {
                if (t < (n += r[a].length)) {
                    var h = a;
                    break;
                }
                s = n;
            }
            var u = (this.italic ? "italic " : "") + (this.bold ? "bold " : "") + this.fontSize + "px " + this.font;
            It.context.font = u;
            var l = this._getTextWidth(this._text.substring(s, t));
            return (e || new Xt()).setTo(this._startX + l - (this._clipPoint ? this._clipPoint.x : 0), this._startY + h * (this._charSize.height + this.leading) - (this._clipPoint ? this._clipPoint.y : 0));
        }, s(0, a, "width", function() {
            return this._width ? this._width : this.textWidth + this.padding[1] + this.padding[3];
        }, function(t) {
            t != this._width && (i.superSet(Ke, this, "width", t), this.isChanged = !0, this.borderColor && this._setBorderStyleColor(0, 0, this.width, this.height, this.borderColor, 1));
        }), s(0, a, "textWidth", function() {
            return this._isChanged && i.systemTimer.runCallLater(this, this.typeset), this._textWidth;
        }), s(0, a, "height", function() {
            return this._height ? this._height : this.textHeight;
        }, function(t) {
            t != this._height && (i.superSet(Ke, this, "height", t), this.isChanged = !0, this.borderColor && this._setBorderStyleColor(0, 0, this.width, this.height, this.borderColor, 1));
        }), s(0, a, "textHeight", function() {
            return this._isChanged && i.systemTimer.runCallLater(this, this.typeset), this._textHeight;
        }), s(0, a, "padding", function() {
            return this._style.padding;
        }, function(t) {
            if ("string" == typeof t) {
                var e, i, n = 0;
                for (i = (e = t.split(",")).length; e.length < 4; ) e.push(0);
                for (n = 0; n < i; n++) e[n] = parseFloat(e[n]) || 0;
                t = e;
            }
            this._getTextStyle().padding = t, this.isChanged = !0;
        }), s(0, a, "bold", function() {
            return this._style.bold;
        }, function(t) {
            this._getTextStyle().bold = t, this.isChanged = !0;
        }), s(0, a, "text", function() {
            return this._text || "";
        }, function(t) {
            this._text !== t && (this.lang(t + ""), this.isChanged = !0, this.event("change"), 
            this.borderColor && this._setBorderStyleColor(0, 0, this.width, this.height, this.borderColor, 1));
        }), s(0, a, "color", function() {
            return this._color;
        }, function(t) {
            this._color != t && (this._color = t, !this._isChanged && this._graphics ? this._graphics.replaceTextColor(this.color) : this.isChanged = !0);
        }), s(0, a, "font", function() {
            return this._font;
        }, function(t) {
            this._style.currBitmapFont && (this._getTextStyle().currBitmapFont = null, this.scale(1, 1)), 
            Text._bitmapFonts && Text._bitmapFonts[t] && (this._getTextStyle().currBitmapFont = Text._bitmapFonts[t]), 
            this._font = t, this.isChanged = !0;
        }), s(0, a, "fontSize", function() {
            return this._fontSize;
        }, function(t) {
            this._fontSize != t && (this._fontSize = t, this.isChanged = !0);
        }), s(0, a, "italic", function() {
            return this._style.italic;
        }, function(t) {
            this._getTextStyle().italic = t, this.isChanged = !0;
        }), s(0, a, "align", function() {
            return this._style.align;
        }, function(t) {
            this._getTextStyle().align = t, this.isChanged = !0;
        }), s(0, a, "valign", function() {
            return this._valign;
        }, function(t) {
            this._valign = t, this.isChanged = !0;
        }), s(0, a, "wordWrap", function() {
            return this._style.wordWrap;
        }, function(t) {
            this._getTextStyle().wordWrap = t, this.isChanged = !0;
        }), s(0, a, "singleCharRender", function() {
            return this._singleCharRender;
        }, function(t) {
            this._singleCharRender = t;
        }), s(0, a, "leading", function() {
            return this._style.leading;
        }, function(t) {
            this._getTextStyle().leading = t, this.isChanged = !0;
        }), s(0, a, "bgColor", function() {
            return this._style.bgColor;
        }, function(t) {
            this._getTextStyle().bgColor = t, this._renderType |= 128, this._setBgStyleColor(0, 0, this.width, this.height, t), 
            this._setRenderType(this._renderType), this.isChanged = !0;
        }), s(0, a, "borderColor", function() {
            return this._style.borderColor;
        }, function(t) {
            this._getTextStyle().borderColor = t, this._renderType |= 128, this._setBorderStyleColor(0, 0, this.width, this.height, t, 1), 
            this._setRenderType(this._renderType), this.isChanged = !0;
        }), s(0, a, "stroke", function() {
            return this._style.stroke;
        }, function(t) {
            this._getTextStyle().stroke = t, this.isChanged = !0;
        }), s(0, a, "strokeColor", function() {
            return this._style.strokeColor;
        }, function(t) {
            this._getTextStyle().strokeColor = t, this.isChanged = !0;
        }), s(0, a, "isChanged", null, function(t) {
            this._isChanged !== t && (this._isChanged = t, t && i.systemTimer.callLater(this, this.typeset));
        }), s(0, a, "scrollX", function() {
            return this._clipPoint ? this._clipPoint.x : 0;
        }, function(t) {
            if (!("scroll" != this.overflow || this.textWidth < this._width) && this._clipPoint) {
                t = t < this.padding[3] ? this.padding[3] : t;
                var e = this._textWidth - this._width;
                t = t > e ? e : t, this._clipPoint.x = t, this._renderText();
            }
        }), s(0, a, "scrollY", function() {
            return this._clipPoint ? this._clipPoint.y : 0;
        }, function(t) {
            if (!("scroll" != this.overflow || this.textHeight < this._height) && this._clipPoint) {
                t = t < this.padding[0] ? this.padding[0] : t;
                var e = this._textHeight - this._height;
                t = t > e ? e : t, this._clipPoint.y = t, this._renderText();
            }
        }), s(0, a, "maxScrollX", function() {
            return this.textWidth < this._width ? 0 : this._textWidth - this._width;
        }), s(0, a, "maxScrollY", function() {
            return this.textHeight < this._height ? 0 : this._textHeight - this._height;
        }), s(0, a, "lines", function() {
            return this._isChanged && this.typeset(), this._lines;
        }), s(0, a, "underlineColor", function() {
            return this._style.underlineColor;
        }, function(t) {
            this._getTextStyle().underlineColor = t, this._isChanged || this._renderText();
        }), s(0, a, "underline", function() {
            return this._style.underline;
        }, function(t) {
            this._getTextStyle().underline = t;
        }), Text.defaultFontStr = function() {
            return Text.defaultFontSize + "px " + Text.defaultFont;
        }, Text.registerBitmapFont = function(t, e) {
            Text._bitmapFonts || (Text._bitmapFonts = {}), Text._bitmapFonts[t] = e;
        }, Text.unregisterBitmapFont = function(t, e) {
            if (void 0 === e && (e = !0), Text._bitmapFonts && Text._bitmapFonts[t]) {
                var i = Text._bitmapFonts[t];
                e && i.destroy(), delete Text._bitmapFonts[t];
            }
        }, Text.VISIBLE = "visible", Text.SCROLL = "scroll", Text.HIDDEN = "hidden", Text.defaultFontSize = 12, 
        Text.defaultFont = "Arial", Text.langPacks = null, Text.isComplexText = !1, Text._testWord = "游", 
        Text._bitmapFonts = null, Text.CharacterCache = !0, Text.RightToLeft = !1, n(Text, [ "fontFamilyMap", function() {
            return this.fontFamilyMap = {
                "报隶": "报隶-简",
                "黑体": "黑体-简",
                "楷体": "楷体-简",
                "兰亭黑": "兰亭黑-简",
                "隶变": "隶变-简",
                "凌慧体": "凌慧体-简",
                "翩翩体": "翩翩体-简",
                "苹方": "苹方-简",
                "手札体": "手札体-简",
                "宋体": "宋体-简",
                "娃娃体": "娃娃体-简",
                "魏碑": "魏碑-简",
                "行楷": "行楷-简",
                "雅痞": "雅痞-简",
                "圆体": "圆体-简"
            };
        } ]), Text;
    }(Ke), ii = function(t) {
        function AnimationBase() {
            this.loop = !1, this.wrapMode = 0, this._index = 0, this._count = 0, this._isPlaying = !1, 
            this._labels = null, this._isReverse = !1, this._frameRateChanged = !1, this._actionName = null, 
            this._controlNode = null, AnimationBase.__super.call(this), this._interval = se.animationInterval, 
            this._setBitUp(16);
        }
        r(AnimationBase, "laya.display.AnimationBase", t);
        var e = AnimationBase.prototype;
        return e.play = function(t, e, i) {
            void 0 === t && (t = 0), void 0 === e && (e = !0), void 0 === i && (i = ""), this._isPlaying = !0, 
            this._actionName = i, this.index = "string" == typeof t ? this._getFrameByLabel(t) : t, 
            this.loop = e, this._isReverse = 1 === this.wrapMode, 0 == this.index && this._isReverse && (this.index = this.count - 1), 
            this.interval > 0 && this.timerLoop(this.interval, this, this._frameLoop, null, !0, !0);
        }, e._getFrameByLabel = function(t) {
            for (var e = 0; e < this._count; e++) {
                var i = this._labels[e];
                if (i && i.indexOf(t) > -1) return e;
            }
            return 0;
        }, e._frameLoop = function() {
            if (this._isReverse) {
                if (this._index--, this._index < 0) {
                    if (!this.loop) return this._index = 0, this.stop(), void this.event("complete");
                    2 == this.wrapMode ? (this._index = this._count > 0 ? 1 : 0, this._isReverse = !1) : this._index = this._count - 1, 
                    this.event("complete");
                }
            } else if (this._index++, this._index >= this._count) {
                if (!this.loop) return this._index--, this.stop(), void this.event("complete");
                2 == this.wrapMode ? (this._index = this._count - 2 >= 0 ? this._count - 2 : 0, 
                this._isReverse = !0) : this._index = 0, this.event("complete");
            }
            this.index = this._index;
        }, e._setControlNode = function(t) {
            this._controlNode && (this._controlNode.off("display", this, this._resumePlay), 
            this._controlNode.off("undisplay", this, this._resumePlay)), this._controlNode = t, 
            t && t != this && (t.on("display", this, this._resumePlay), t.on("undisplay", this, this._resumePlay));
        }, e._setDisplay = function(e) {
            t.prototype._setDisplay.call(this, e), this._resumePlay();
        }, e._resumePlay = function() {
            this._isPlaying && (this._controlNode.displayedInStage ? this.play(this._index, this.loop, this._actionName) : this.clearTimer(this, this._frameLoop));
        }, e.stop = function() {
            this._isPlaying = !1, this.clearTimer(this, this._frameLoop);
        }, e.addLabel = function(t, e) {
            this._labels || (this._labels = {}), this._labels[e] || (this._labels[e] = []), 
            this._labels[e].push(t);
        }, e.removeLabel = function(t) {
            if (t) {
                if (this._labels) for (var e in this._labels) this._removeLabelFromList(this._labels[e], t);
            } else this._labels = null;
        }, e._removeLabelFromList = function(t, e) {
            if (t) for (var i = t.length - 1; i >= 0; i--) t[i] == e && t.splice(i, 1);
        }, e.gotoAndStop = function(t) {
            this.index = "string" == typeof t ? this._getFrameByLabel(t) : t, this.stop();
        }, e._displayToIndex = function(t) {}, e.clear = function() {
            return this.stop(), this._labels = null, this;
        }, s(0, e, "interval", function() {
            return this._interval;
        }, function(t) {
            this._interval != t && (this._frameRateChanged = !0, this._interval = t, this._isPlaying && t > 0 && this.timerLoop(t, this, this._frameLoop, null, !0, !0));
        }), s(0, e, "isPlaying", function() {
            return this._isPlaying;
        }), s(0, e, "index", function() {
            return this._index;
        }, function(t) {
            if (this._index = t, this._displayToIndex(t), this._labels && this._labels[t]) for (var e = this._labels[t], i = 0, n = e.length; i < n; i++) this.event("label", e[i]);
        }), s(0, e, "count", function() {
            return this._count;
        }), AnimationBase.WRAP_POSITIVE = 0, AnimationBase.WRAP_REVERSE = 1, AnimationBase.WRAP_PINGPONG = 2, 
        AnimationBase;
    }(Ke), ni = function(t) {
        function Shader(t, e, i, n, r) {
            if (this._attribInfo = null, this.customCompile = !1, this._curActTexIndex = 0, 
            this.tag = {}, this._program = null, this._params = null, this._paramsMap = {}, 
            Shader.__super.call(this), !t || !e) throw "Shader Error";
            this._attribInfo = r, this._id = ++Shader._count, this._vs = t, this._ps = e, this._nameMap = n || {}, 
            null != i && (Shader.sharders[i] = this), this.recreateResource(), this.lock = !0;
        }
        r(Shader, "laya.webgl.shader.Shader", je);
        var e = Shader.prototype;
        return e.recreateResource = function() {
            this._compile(), this._setGPUMemory(0);
        }, e._disposeResource = function() {
            Ct.mainContext.deleteShader(this._vshader), Ct.mainContext.deleteShader(this._pshader), 
            Ct.mainContext.deleteProgram(this._program), this._vshader = this._pshader = this._program = null, 
            this._params = null, this._paramsMap = {}, this._setGPUMemory(0), this._curActTexIndex = 0;
        }, e._compile = function() {
            if (this._vs && this._ps && !this._params) {
                var t;
                this._reCompile = !0, this._params = [], this.customCompile && (t = pe.preGetParams(this._vs, this._ps));
                var e = Ct.mainContext;
                this._program = e.createProgram(), this._vshader = Shader._createShader(e, this._vs, 35633), 
                this._pshader = Shader._createShader(e, this._ps, 35632), e.attachShader(this._program, this._vshader), 
                e.attachShader(this._program, this._pshader);
                var i, n, r = 0, s = this._attribInfo ? this._attribInfo.length : 0;
                for (r = 0; r < s; r += 2) e.bindAttribLocation(this._program, this._attribInfo[r + 1], this._attribInfo[r]);
                if (e.linkProgram(this._program), !this.customCompile && !e.getProgramParameter(this._program, 35714)) throw e.getProgramInfoLog(this._program);
                var a = this.customCompile ? t.uniforms.length : e.getProgramParameter(this._program, 35718);
                for (r = 0; r < a; r++) {
                    var o = this.customCompile ? t.uniforms[r] : e.getActiveUniform(this._program, r);
                    (i = {
                        vartype: "uniform",
                        glfun: null,
                        ivartype: 1,
                        location: e.getUniformLocation(this._program, o.name),
                        name: o.name,
                        type: o.type,
                        isArray: !1,
                        isSame: !1,
                        preValue: null,
                        indexOfParams: 0
                    }).name.indexOf("[0]") > 0 && (i.name = i.name.substr(0, i.name.length - 3), i.isArray = !0, 
                    i.location = e.getUniformLocation(this._program, i.name)), this._params.push(i);
                }
                for (r = 0, n = this._params.length; r < n; r++) switch ((i = this._params[r]).indexOfParams = r, 
                i.index = 1, i.value = [ i.location, null ], i.codename = i.name, i.name = this._nameMap[i.codename] ? this._nameMap[i.codename] : i.codename, 
                this._paramsMap[i.name] = i, i._this = this, i.uploadedValue = [], i.type) {
                  case 5124:
                    i.fun = i.isArray ? this._uniform1iv : this._uniform1i;
                    break;

                  case 5126:
                    i.fun = i.isArray ? this._uniform1fv : this._uniform1f;
                    break;

                  case 35664:
                    i.fun = i.isArray ? this._uniform_vec2v : this._uniform_vec2;
                    break;

                  case 35665:
                    i.fun = i.isArray ? this._uniform_vec3v : this._uniform_vec3;
                    break;

                  case 35666:
                    i.fun = i.isArray ? this._uniform_vec4v : this._uniform_vec4;
                    break;

                  case 35678:
                    i.fun = this._uniform_sampler2D;
                    break;

                  case 35680:
                    i.fun = this._uniform_samplerCube;
                    break;

                  case 35676:
                    i.glfun = e.uniformMatrix4fv, i.fun = this._uniformMatrix4fv;
                    break;

                  case 35670:
                    i.fun = this._uniform1i;
                    break;

                  case 35674:
                  case 35675:
                  default:
                    throw new Error("compile shader err!");
                }
            }
        }, e.getUniform = function(t) {
            return this._paramsMap[t];
        }, e._uniform1f = function(t, e) {
            var i = t.uploadedValue;
            return i[0] !== e ? (Ct.mainContext.uniform1f(t.location, i[0] = e), 1) : 0;
        }, e._uniform1fv = function(t, e) {
            if (e.length < 4) {
                var i = t.uploadedValue;
                return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] || i[3] !== e[3] ? (Ct.mainContext.uniform1fv(t.location, e), 
                i[0] = e[0], i[1] = e[1], i[2] = e[2], i[3] = e[3], 1) : 0;
            }
            return Ct.mainContext.uniform1fv(t.location, e), 1;
        }, e._uniform_vec2 = function(t, e) {
            var i = t.uploadedValue;
            return i[0] !== e[0] || i[1] !== e[1] ? (Ct.mainContext.uniform2f(t.location, i[0] = e[0], i[1] = e[1]), 
            1) : 0;
        }, e._uniform_vec2v = function(t, e) {
            if (e.length < 2) {
                var i = t.uploadedValue;
                return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] || i[3] !== e[3] ? (Ct.mainContext.uniform2fv(t.location, e), 
                i[0] = e[0], i[1] = e[1], i[2] = e[2], i[3] = e[3], 1) : 0;
            }
            return Ct.mainContext.uniform2fv(t.location, e), 1;
        }, e._uniform_vec3 = function(t, e) {
            var i = t.uploadedValue;
            return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] ? (Ct.mainContext.uniform3f(t.location, i[0] = e[0], i[1] = e[1], i[2] = e[2]), 
            1) : 0;
        }, e._uniform_vec3v = function(t, e) {
            return Ct.mainContext.uniform3fv(t.location, e), 1;
        }, e._uniform_vec4 = function(t, e) {
            var i = t.uploadedValue;
            return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] || i[3] !== e[3] ? (Ct.mainContext.uniform4f(t.location, i[0] = e[0], i[1] = e[1], i[2] = e[2], i[3] = e[3]), 
            1) : 0;
        }, e._uniform_vec4v = function(t, e) {
            return Ct.mainContext.uniform4fv(t.location, e), 1;
        }, e._uniformMatrix2fv = function(t, e) {
            return Ct.mainContext.uniformMatrix2fv(t.location, !1, e), 1;
        }, e._uniformMatrix3fv = function(t, e) {
            return Ct.mainContext.uniformMatrix3fv(t.location, !1, e), 1;
        }, e._uniformMatrix4fv = function(t, e) {
            return Ct.mainContext.uniformMatrix4fv(t.location, !1, e), 1;
        }, e._uniform1i = function(t, e) {
            var i = t.uploadedValue;
            return i[0] !== e ? (Ct.mainContext.uniform1i(t.location, i[0] = e), 1) : 0;
        }, e._uniform1iv = function(t, e) {
            return Ct.mainContext.uniform1iv(t.location, e), 1;
        }, e._uniform_ivec2 = function(t, e) {
            var i = t.uploadedValue;
            return i[0] !== e[0] || i[1] !== e[1] ? (Ct.mainContext.uniform2i(t.location, i[0] = e[0], i[1] = e[1]), 
            1) : 0;
        }, e._uniform_ivec2v = function(t, e) {
            return Ct.mainContext.uniform2iv(t.location, e), 1;
        }, e._uniform_vec3i = function(t, e) {
            var i = t.uploadedValue;
            return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] ? (Ct.mainContext.uniform3i(t.location, i[0] = e[0], i[1] = e[1], i[2] = e[2]), 
            1) : 0;
        }, e._uniform_vec3vi = function(t, e) {
            return Ct.mainContext.uniform3iv(t.location, e), 1;
        }, e._uniform_vec4i = function(t, e) {
            var i = t.uploadedValue;
            return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] || i[3] !== e[3] ? (Ct.mainContext.uniform4i(t.location, i[0] = e[0], i[1] = e[1], i[2] = e[2], i[3] = e[3]), 
            1) : 0;
        }, e._uniform_vec4vi = function(t, e) {
            return Ct.mainContext.uniform4iv(t.location, e), 1;
        }, e._uniform_sampler2D = function(t, e) {
            var i = Ct.mainContext, n = t.uploadedValue;
            return null == n[0] ? (n[0] = this._curActTexIndex, i.uniform1i(t.location, this._curActTexIndex), 
            nt.activeTexture(i, 33984 + this._curActTexIndex), nt.bindTexture(i, 3553, e), this._curActTexIndex++, 
            1) : (nt.activeTexture(i, 33984 + n[0]), nt.bindTexture(i, 3553, e), 0);
        }, e._uniform_samplerCube = function(t, e) {
            var i = Ct.mainContext, n = t.uploadedValue;
            return null == n[0] ? (n[0] = this._curActTexIndex, i.uniform1i(t.location, this._curActTexIndex), 
            nt.activeTexture(i, 33984 + this._curActTexIndex), nt.bindTexture(i, 34067, e), 
            this._curActTexIndex++, 1) : (nt.activeTexture(i, 33984 + n[0]), nt.bindTexture(i, 34067, e), 
            0);
        }, e._noSetValue = function(t) {
            console.log("no....:" + t.name);
        }, e.uploadOne = function(t, e) {
            nt.useProgram(Ct.mainContext, this._program);
            var i = this._paramsMap[t];
            i.fun.call(this, i, e);
        }, e.uploadTexture2D = function(t) {
            var e = nt;
            e._activeTextures[0] !== t && (e.bindTexture(Ct.mainContext, e.TEXTURE_2D, t), e._activeTextures[0] = t);
        }, e.upload = function(t, e) {
            je.activeShader = je.bindShader = this;
            var i = Ct.mainContext;
            nt.useProgram(i, this._program), this._reCompile ? (e = this._params, this._reCompile = !1) : e = e || this._params;
            for (var n, r, s = e.length, a = 0, o = 0; o < s; o++) null !== (r = t[(n = e[o]).name]) && (a += n.fun.call(this, n, r));
            w.shaderCall += a;
        }, e.uploadArray = function(t, e, i) {
            je.activeShader = this, je.bindShader = this, nt.useProgram(Ct.mainContext, this._program);
            this._params;
            for (var n, r, s = 0, a = e - 2; a >= 0; a -= 2) (r = this._paramsMap[t[a]]) && null != (n = t[a + 1]) && (i && i[r.name] && i[r.name].bind(), 
            s += r.fun.call(this, r, n));
            w.shaderCall += s;
        }, e.getParams = function() {
            return this._params;
        }, e.setAttributesLocation = function(t) {
            this._attribInfo = t;
        }, Shader.getShader = function(t) {
            return Shader.sharders[t];
        }, Shader.create = function(t, e, i, n, r) {
            return new Shader(t, e, i, n, r);
        }, Shader.withCompile = function(t, e, i, n) {
            if (i && Shader.sharders[i]) return Shader.sharders[i];
            var r = Shader._preCompileShader[2e-4 * t];
            if (!r) throw new Error("withCompile shader err!" + t);
            return r.createShader(e, i, n, null);
        }, Shader.withCompile2D = function(t, e, i, n, r, s) {
            if (n && Shader.sharders[n]) return Shader.sharders[n];
            var a = Shader._preCompileShader[2e-4 * t + e];
            if (!a) throw new Error("withCompile shader err!" + t + " " + e);
            return a.createShader(i, n, r, s);
        }, Shader.addInclude = function(t, e) {
            pe.addInclude(t, e);
        }, Shader.preCompile = function(t, e, i, n) {
            var r = 2e-4 * t;
            Shader._preCompileShader[r] = new pe(e, i, n);
        }, Shader.preCompile2D = function(t, e, i, n, r) {
            var s = 2e-4 * t + e;
            Shader._preCompileShader[s] = new pe(i, n, r);
        }, Shader._createShader = function(t, e, i) {
            var n = t.createShader(i);
            return t.shaderSource(n, e), t.compileShader(n), t.getShaderParameter(n, 35713) ? n : (console.log(t.getShaderInfoLog(n)), 
            null);
        }, Shader._count = 0, Shader._preCompileShader = {}, Shader.SHADERNAME2ID = 2e-4, 
        Shader.sharders = new Array(32), n(Shader, [ "nameKey", function() {
            return this.nameKey = new Nt();
        } ]), Shader;
    }(), ri = (function(t) {
        function SoundNode() {
            this.url = null, this._channel = null, this._tar = null, this._playEvents = null, 
            this._stopEvents = null, SoundNode.__super.call(this), this.visible = !1, this.on("added", this, this._onParentChange), 
            this.on("removed", this, this._onParentChange);
        }
        r(SoundNode, "laya.media.SoundNode", Ke);
        var e = SoundNode.prototype;
        e._onParentChange = function() {
            this.target = this.parent;
        }, e.play = function(t, e) {
            void 0 === t && (t = 1), isNaN(t) && (t = 1), this.url && (this.stop(), this._channel = xe.playSound(this.url, t, e));
        }, e.stop = function() {
            this._channel && !this._channel.isStopped && this._channel.stop(), this._channel = null;
        }, e._setPlayAction = function(t, e, i, n) {
            void 0 === n && (n = !0), this[i] && t && (n ? t.on(e, this, this[i]) : t.off(e, this, this[i]));
        }, e._setPlayActions = function(t, e, i, n) {
            if (void 0 === n && (n = !0), t && e) {
                var r, s = e.split(","), a = 0;
                for (r = s.length, a = 0; a < r; a++) this._setPlayAction(t, s[a], i, n);
            }
        }, s(0, e, "playEvent", null, function(t) {
            this._playEvents = t, t && this._tar && this._setPlayActions(this._tar, t, "play");
        }), s(0, e, "target", null, function(t) {
            this._tar && (this._setPlayActions(this._tar, this._playEvents, "play", !1), this._setPlayActions(this._tar, this._stopEvents, "stop", !1)), 
            this._tar = t, this._tar && (this._setPlayActions(this._tar, this._playEvents, "play", !0), 
            this._setPlayActions(this._tar, this._stopEvents, "stop", !0));
        }), s(0, e, "stopEvent", null, function(t) {
            this._stopEvents = t, t && this._tar && this._setPlayActions(this._tar, t, "stop");
        });
    }(), function(t) {
        function BaseTexture(t, e) {
            BaseTexture.__super.call(this), this._wrapModeU = 0, this._wrapModeV = 0, this._filterMode = 1, 
            this._readyed = !1, this._width = -1, this._height = -1, this._format = t, this._mipmap = e, 
            this._anisoLevel = 1, this._glTexture = Dt.instance.createTexture();
        }
        r(BaseTexture, "laya.resource.BaseTexture", Qe);
        var e = BaseTexture.prototype;
        return e._isPot = function(t) {
            return 0 == (t & t - 1);
        }, e._getGLFormat = function() {
            var t = 0;
            switch (this._format) {
              case 0:
                t = 6407;
                break;

              case 1:
                t = 6408;
                break;

              case 2:
                t = 6406;
                break;

              case 3:
                if (!nt._compressedTextureS3tc) throw "BaseTexture: not support DXT1 format.";
                t = nt._compressedTextureS3tc.COMPRESSED_RGB_S3TC_DXT1_EXT;
                break;

              case 4:
                if (!nt._compressedTextureS3tc) throw "BaseTexture: not support DXT5 format.";
                t = nt._compressedTextureS3tc.COMPRESSED_RGBA_S3TC_DXT5_EXT;
                break;

              case 5:
                if (!nt._compressedTextureEtc1) throw "BaseTexture: not support ETC1RGB format.";
                t = nt._compressedTextureEtc1.COMPRESSED_RGB_ETC1_WEBGL;
                break;

              case 9:
                if (!nt._compressedTexturePvrtc) throw "BaseTexture: not support PVRTCRGB_2BPPV format.";
                t = nt._compressedTexturePvrtc.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                break;

              case 10:
                if (!nt._compressedTexturePvrtc) throw "BaseTexture: not support PVRTCRGBA_2BPPV format.";
                t = nt._compressedTexturePvrtc.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
                break;

              case 11:
                if (!nt._compressedTexturePvrtc) throw "BaseTexture: not support PVRTCRGB_4BPPV format.";
                t = nt._compressedTexturePvrtc.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                break;

              case 12:
                if (!nt._compressedTexturePvrtc) throw "BaseTexture: not support PVRTCRGBA_4BPPV format.";
                t = nt._compressedTexturePvrtc.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                break;

              default:
                throw "BaseTexture: unknown texture format.";
            }
            return t;
        }, e._setFilterMode = function(t) {
            var e = Dt.instance;
            switch (nt.bindTexture(e, this._glTextureType, this._glTexture), t) {
              case 0:
                this._mipmap ? e.texParameteri(this._glTextureType, 10241, 9984) : e.texParameteri(this._glTextureType, 10241, 9728), 
                e.texParameteri(this._glTextureType, 10240, 9728);
                break;

              case 1:
                this._mipmap ? e.texParameteri(this._glTextureType, 10241, 9985) : e.texParameteri(this._glTextureType, 10241, 9729), 
                e.texParameteri(this._glTextureType, 10240, 9729);
                break;

              case 2:
                this._mipmap ? e.texParameteri(this._glTextureType, 10241, 9987) : e.texParameteri(this._glTextureType, 10241, 9729), 
                e.texParameteri(this._glTextureType, 10240, 9729);
                break;

              default:
                throw new Error("BaseTexture:unknown filterMode value.");
            }
        }, e._setWarpMode = function(t, e) {
            var i = Dt.instance;
            if (nt.bindTexture(i, this._glTextureType, this._glTexture), this._isPot(this._width) && this._isPot(this._height)) switch (e) {
              case 0:
                i.texParameteri(this._glTextureType, t, 10497);
                break;

              case 1:
                i.texParameteri(this._glTextureType, t, 33071);
            } else i.texParameteri(this._glTextureType, t, 33071);
        }, e._setAnisotropy = function(t) {
            var e = nt._extTextureFilterAnisotropic;
            if (e && !It.onLimixiu) {
                t = Math.max(t, 1);
                var i = Dt.instance;
                nt.bindTexture(i, this._glTextureType, this._glTexture), t = Math.min(i.getParameter(e.MAX_TEXTURE_MAX_ANISOTROPY_EXT), t), 
                i.texParameterf(this._glTextureType, e.TEXTURE_MAX_ANISOTROPY_EXT, t);
            }
        }, e._disposeResource = function() {
            this._glTexture && (Dt.instance.deleteTexture(this._glTexture), this._glTexture = null, 
            this._setGPUMemory(0));
        }, e._getSource = function() {
            return this._readyed ? this._glTexture : null;
        }, e.generateMipmap = function() {
            this._isPot(this.width) && this._isPot(this.height) && Dt.instance.generateMipmap(this._glTextureType);
        }, s(0, e, "wrapModeU", function() {
            return this._wrapModeU;
        }, function(t) {
            this._wrapModeU !== t && (this._wrapModeU = t, -1 !== this._width && this._setWarpMode(10242, t));
        }), s(0, e, "mipmap", function() {
            return this._mipmap;
        }), s(0, e, "format", function() {
            return this._format;
        }), s(0, e, "wrapModeV", function() {
            return this._wrapModeV;
        }, function(t) {
            this._wrapModeV !== t && (this._wrapModeV = t, -1 !== this._height && this._setWarpMode(10243, t));
        }), s(0, e, "defaulteTexture", function() {
            throw "BaseTexture:must override it.";
        }), s(0, e, "filterMode", function() {
            return this._filterMode;
        }, function(t) {
            t !== this._filterMode && (this._filterMode = t, -1 !== this._width && -1 !== this._height && this._setFilterMode(t));
        }), s(0, e, "anisoLevel", function() {
            return this._anisoLevel;
        }, function(t) {
            t !== this._anisoLevel && (this._anisoLevel = Math.max(1, Math.min(16, t)), -1 !== this._width && -1 !== this._height && this._setAnisotropy(t));
        }), BaseTexture.WARPMODE_REPEAT = 0, BaseTexture.WARPMODE_CLAMP = 1, BaseTexture.FILTERMODE_POINT = 0, 
        BaseTexture.FILTERMODE_BILINEAR = 1, BaseTexture.FILTERMODE_TRILINEAR = 2, BaseTexture.FORMAT_R8G8B8 = 0, 
        BaseTexture.FORMAT_R8G8B8A8 = 1, BaseTexture.FORMAT_ALPHA8 = 2, BaseTexture.FORMAT_DXT1 = 3, 
        BaseTexture.FORMAT_DXT5 = 4, BaseTexture.FORMAT_ETC1RGB = 5, BaseTexture.FORMAT_PVRTCRGB_2BPPV = 9, 
        BaseTexture.FORMAT_PVRTCRGBA_2BPPV = 10, BaseTexture.FORMAT_PVRTCRGB_4BPPV = 11, 
        BaseTexture.FORMAT_PVRTCRGBA_4BPPV = 12, BaseTexture.FORMAT_DEPTH_16 = 0, BaseTexture.FORMAT_STENCIL_8 = 1, 
        BaseTexture.FORMAT_DEPTHSTENCIL_16_8 = 2, BaseTexture.FORMAT_DEPTHSTENCIL_NONE = 3, 
        BaseTexture;
    }()), si = function(t) {
        function HTMLCanvas(t) {
            HTMLCanvas.__super.call(this), void 0 === t && (t = !1), this._source = t ? It.createElement("canvas") : this, 
            this.lock = !0;
        }
        r(HTMLCanvas, "laya.resource.HTMLCanvas", Qe);
        var e = HTMLCanvas.prototype;
        return e._getSource = function() {
            return this._source;
        }, e.clear = function() {
            this._ctx && this._ctx.clear && this._ctx.clear(), this._texture && (this._texture.destroy(), 
            this._texture = null);
        }, e.destroy = function() {
            laya.resource.Resource.prototype.destroy.call(this), this._setCPUMemory(0), this._ctx && this._ctx.destroy(), 
            this._ctx = null;
        }, e.release = function() {}, e._setContext = function(t) {
            this._ctx = t;
        }, e.getContext = function(t, e) {
            return this.context;
        }, e.getMemSize = function() {
            return 0;
        }, e.size = function(t, e) {
            (this._width != t || this._height != e || this._source && (this._source.width != t || this._source.height != e)) && (this._width = t, 
            this._height = e, this._setCPUMemory(t * e * 4), this._ctx && this._ctx.size && this._ctx.size(t, e), 
            this._source && (this._source.height = e, this._source.width = t), this._texture && (this._texture.destroy(), 
            this._texture = null));
        }, e.getTexture = function() {
            if (!this._texture) {
                var t = new _i();
                t.loadImageSource(this.source), this._texture = new Ee(t);
            }
            return this._texture;
        }, e.toBase64 = function(t, e) {
            if (this._source) {
                if (Rt.isConchApp) {
                    if (2 == conchConfig.threadMode) throw "native 2 thread mode use toBase64Async";
                    var i = this._ctx._targets.sourceWidth, n = this._ctx._targets.sourceHeight, r = this._ctx._targets.getData(0, 0, i, n);
                    return conchToBase64FlipY ? conchToBase64FlipY(t, e, r.buffer, i, n) : conchToBase64(t, e, r.buffer, i, n);
                }
                return this._source.toDataURL(t, e);
            }
            return null;
        }, e.toBase64Async = function(t, e, i) {
            var n = this._ctx._targets.sourceWidth, r = this._ctx._targets.sourceHeight;
            this._ctx._targets.getDataAsync(0, 0, n, r, function(s) {
                var a = conchToBase64FlipY ? conchToBase64FlipY(t, e, s.buffer, n, r) : conchToBase64(t, e, s.buffer, n, r);
                i(a);
            });
        }, s(0, e, "source", function() {
            return this._source;
        }), s(0, e, "context", function() {
            return this._ctx ? this._ctx : (this._source == this ? this._ctx = new lt() : this._ctx = this._source.getContext(Rt.isConchApp ? "layagl" : "2d"), 
            this._ctx._canvas = this, this._ctx);
        }), HTMLCanvas;
    }(), ai = (function(t) {
        function HTMLImage() {
            HTMLImage.__super.call(this);
        }
        r(HTMLImage, "laya.resource.HTMLImage", Qe), HTMLImage.create = function(t, e, i) {
            var n = new _i(t, e, i, !1, !1);
            return n.wrapModeU = 1, n.wrapModeV = 1, n;
        };
    }(), function(e) {
        function Stage() {
            this.focus = null, this._frameRate = "fast", this.designWidth = 0, this.designHeight = 0, 
            this.canvasRotation = !1, this.canvasDegree = 0, this.renderingEnabled = !0, this.screenAdaptationEnabled = !0, 
            this._screenMode = "none", this._scaleMode = "noscale", this._alignV = "top", this._alignH = "left", 
            this._bgColor = "black", this._mouseMoveTime = 0, this._renderCount = 0, this._safariOffsetY = 0, 
            this._frameStartTime = 0, this._isFocused = !1, this._isVisibility = !1, this._wgColor = [ 0, 0, 0, 1 ], 
            this._scene3Ds = [], this._globalRepaintSet = !1, this._globalRepaintGet = !1, this._curUIBase = null, 
            this.useRetinalCanvas = !1, Stage.__super.call(this), this.offset = new Xt(), this._canvasTransform = new st(), 
            this._previousOrientation = It.window.orientation, this._3dUI = [];
            var t = this;
            this.transform = this._createTransform(), this.mouseEnabled = !0, this.hitTestPrior = !0, 
            this.autoSize = !1, this._setBit(128, !0), this._setBit(2, !0), this._isFocused = !0, 
            this._isVisibility = !0, this.useRetinalCanvas = se.useRetinalCanvas;
            var e = It.window, i = this;
            e.addEventListener("focus", function() {
                t._isFocused = !0, i.event("focus"), i.event("focuschange");
            }), e.addEventListener("blur", function() {
                t._isFocused = !1, i.event("blur"), i.event("focuschange"), i._isInputting() && (ui.inputElement.target.focus = !1);
            });
            var n = "visibilityState", r = "visibilitychange", s = e.document;
            void 0 !== s.hidden ? (r = "visibilitychange", n = "visibilityState") : void 0 !== s.mozHidden ? (r = "mozvisibilitychange", 
            n = "mozVisibilityState") : void 0 !== s.msHidden ? (r = "msvisibilitychange", n = "msVisibilityState") : void 0 !== s.webkitHidden && (r = "webkitvisibilitychange", 
            n = "webkitVisibilityState"), e.document.addEventListener(r, function() {
                "hidden" == It.document[n] ? (t._isVisibility = !1, i._isInputting() && (ui.inputElement.target.focus = !1)) : t._isVisibility = !0;
                t.renderingEnabled = t._isVisibility, i.event("visibilitychange");
            }), e.addEventListener("resize", function() {
                var e = It.window.orientation;
                null != e && e != t._previousOrientation && i._isInputting() && (ui.inputElement.target.focus = !1), 
                t._previousOrientation = e, i._isInputting() || (It.onSafari && (i._safariOffsetY = (It.window.__innerHeight || It.document.body.clientHeight || It.document.documentElement.clientHeight) - It.window.innerHeight), 
                i._resetCanvas());
            }), e.addEventListener("orientationchange", function(t) {
                i._resetCanvas();
            }), this.on("mousemove", this, this._onmouseMove), It.onMobile && this.on("mousedown", this, this._onmouseMove);
        }
        r(Stage, "laya.display.Stage", e);
        var a = Stage.prototype;
        return a._isInputting = function() {
            return It.onMobile && ui.isInputting;
        }, a._changeCanvasSize = function() {
            this.setScreenSize(It.clientWidth * It.pixelRatio, It.clientHeight * It.pixelRatio);
        }, a._resetCanvas = function() {
            this.screenAdaptationEnabled && this._changeCanvasSize();
        }, a.setScreenSize = function(t, e) {
            var i = !1;
            if ("none" !== this._screenMode && (i = (t / e < 1 ? "vertical" : "horizontal") !== this._screenMode)) {
                var n = e;
                e = t, t = n;
            }
            this.canvasRotation = i;
            var r = Rt._mainCanvas, s = r.source.style, a = this._canvasTransform.identity(), o = this._scaleMode, h = t / this.designWidth, u = e / this.designHeight, l = this.useRetinalCanvas ? t : this.designWidth, c = this.useRetinalCanvas ? e : this.designHeight, _ = t, d = e, f = It.pixelRatio;
            switch (this._width = this.designWidth, this._height = this.designHeight, o) {
              case "noscale":
                h = u = 1, _ = this.designWidth, d = this.designHeight;
                break;

              case "showall":
                h = u = Math.min(h, u), l = _ = Math.round(this.designWidth * h), c = d = Math.round(this.designHeight * u);
                break;

              case "noborder":
                h = u = Math.max(h, u), _ = Math.round(this.designWidth * h), d = Math.round(this.designHeight * u);
                break;

              case "full":
                h = u = 1, this._width = l = t, this._height = c = e;
                break;

              case "fixedwidth":
                u = h, this._height = c = Math.round(e / h);
                break;

              case "fixedheight":
                h = u, this._width = l = Math.round(t / u);
                break;

              case "fixedauto":
                t / e < this.designWidth / this.designHeight ? (u = h, this._height = c = Math.round(e / h)) : (h = u, 
                this._width = l = Math.round(t / u));
            }
            this.useRetinalCanvas && (l = t, c = e), h *= this.scaleX, u *= this.scaleY, 1 === h && 1 === u ? this.transform.identity() : (this.transform.a = this._formatData(h / (_ / l)), 
            this.transform.d = this._formatData(u / (d / c))), r.size(l, c), le.changeWebGLSize(l, c), 
            a.scale(_ / l / f, d / c / f), "left" === this._alignH ? this.offset.x = 0 : "right" === this._alignH ? this.offset.x = t - _ : this.offset.x = .5 * (t - _) / f, 
            "top" === this._alignV ? this.offset.y = 0 : "bottom" === this._alignV ? this.offset.y = e - d : this.offset.y = .5 * (e - d) / f, 
            this.offset.x = Math.round(this.offset.x), this.offset.y = Math.round(this.offset.y), 
            a.translate(this.offset.x, this.offset.y), this._safariOffsetY && a.translate(0, this._safariOffsetY), 
            this.canvasDegree = 0, i && ("horizontal" === this._screenMode ? (a.rotate(Math.PI / 2), 
            a.translate(e / f, 0), this.canvasDegree = 90) : (a.rotate(-Math.PI / 2), a.translate(0, t / f), 
            this.canvasDegree = -90)), a.a = this._formatData(a.a), a.d = this._formatData(a.d), 
            a.tx = this._formatData(a.tx), a.ty = this._formatData(a.ty), this.transform = this.transform, 
            s.transformOrigin = s.webkitTransformOrigin = s.msTransformOrigin = s.mozTransformOrigin = s.oTransformOrigin = "0px 0px 0px", 
            s.transform = s.webkitTransform = s.msTransform = s.mozTransform = s.oTransform = "matrix(" + a.toString() + ")", 
            this._safariOffsetY && a.translate(0, -this._safariOffsetY), a.translate(parseInt(s.left) || 0, parseInt(s.top) || 0), 
            this.visible = !0, this._repaint |= 2, this.event("resize");
        }, a._formatData = function(t) {
            return Math.abs(t) < 1e-6 ? 0 : Math.abs(1 - t) < .001 ? t > 0 ? 1 : -1 : t;
        }, a.getMousePoint = function() {
            return Xt.TEMP.setTo(this.mouseX, this.mouseY);
        }, a.repaint = function(t) {
            void 0 === t && (t = 2), this._repaint |= t;
        }, a.parentRepaint = function(t) {
            void 0 === t && (t = 2);
        }, a._loop = function() {
            return this._globalRepaintGet = this._globalRepaintSet, this._globalRepaintSet = !1, 
            this.render(Rt._context, 0, 0), !0;
        }, a.getFrameTm = function() {
            return this._frameStartTime;
        }, a._onmouseMove = function(t) {
            this._mouseMoveTime = It.now();
        }, a.getTimeFromFrameStart = function() {
            return It.now() - this._frameStartTime;
        }, a.render = function(t, i, n) {
            if (Stage._dbgSprite.graphics.clear(), "sleep" === this._frameRate) {
                var r = It.now();
                if (!(r - this._frameStartTime >= 1e3)) return;
                this._frameStartTime = r;
            } else {
                if (!this._visible) return this._renderCount++, void (this._renderCount % 5 == 0 && (Qt.I._update(), 
                w.loopCount++, this._updateTimers()));
                this._frameStartTime = It.now();
            }
            this._renderCount++;
            var s = "slow" !== ("mouse" === this._frameRate ? this._frameStartTime - this._mouseMoveTime < 2e3 ? "fast" : "slow" : this._frameRate), a = this._renderCount % 2 == 0;
            if (w.renderSlow = !s, (s || a) && (Qt.I._update(), w.loopCount++, this.renderingEnabled)) {
                for (var o = 0, h = this._scene3Ds.length; o < h; o++) this._scene3Ds[o]._update();
                t.clear(), e.prototype.render.call(this, t, i, n), w._show && w._sp && w._sp.render(t, i, n);
            }
            Stage._dbgSprite.render(t, 0, 0), !s && a || (this.renderingEnabled && (le.clear(this._bgColor), 
            t.flush(), R.instance && R.getInstance().endDispose()), this._updateTimers());
        }, a.renderToNative = function(t, i, n) {
            if (this._renderCount++, this._visible) {
                if (Qt.I._update(), w.loopCount++, this.renderingEnabled) {
                    for (var r = 0, s = this._scene3Ds.length; r < s; r++) this._scene3Ds[r]._update();
                    t.clear(), e.prototype.render.call(this, t, i, n), w._show && w._sp && w._sp.render(t, i, n);
                }
                this.renderingEnabled && (le.clear(this._bgColor), t.flush(), R.instance && R.getInstance().endDispose()), 
                this._updateTimers();
            } else this._renderCount % 5 == 0 && (Qt.I._update(), w.loopCount++, this._updateTimers());
        }, a._updateTimers = function() {
            i.systemTimer._update(), i.startTimer._update(), i.physicsTimer._update(), i.updateTimer._update(), 
            i.lateTimer._update(), i.timer._update();
        }, a._requestFullscreen = function() {
            var t = It.document.documentElement;
            t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.msRequestFullscreen && t.msRequestFullscreen();
        }, a._fullScreenChanged = function() {
            i.stage.event("fullscreenchange");
        }, a.exitFullscreen = function() {
            var t = It.document;
            t.exitFullscreen ? t.exitFullscreen() : t.mozCancelFullScreen ? t.mozCancelFullScreen() : t.webkitExitFullscreen && t.webkitExitFullscreen();
        }, a.isGlobalRepaint = function() {
            return this._globalRepaintGet;
        }, a.setGlobalRepaint = function() {
            this._globalRepaintSet = !0;
        }, a.add3DUI = function(t) {
            var e = t.rootView;
            this._3dUI.indexOf(e) >= 0 || this._3dUI.push(e);
        }, a.remove3DUI = function(t) {
            var e = t.rootView, i = this._3dUI.indexOf(e);
            return i >= 0 && (this._3dUI.splice(i, 1), !0);
        }, s(0, a, "clientScaleY", function() {
            return this._transform ? this._transform.getScaleY() : 1;
        }), s(0, a, "width", e.prototype._$get_width, function(t) {
            this.designWidth = t, i.superSet(Ke, this, "width", t), i.systemTimer.callLater(this, this._changeCanvasSize);
        }), s(0, a, "isFocused", function() {
            return this._isFocused;
        }), s(0, a, "alignH", function() {
            return this._alignH;
        }, function(t) {
            this._alignH = t, i.systemTimer.callLater(this, this._changeCanvasSize);
        }), s(0, a, "height", e.prototype._$get_height, function(t) {
            this.designHeight = t, i.superSet(Ke, this, "height", t), i.systemTimer.callLater(this, this._changeCanvasSize);
        }), s(0, a, "transform", function() {
            return this._tfChanged && this._adjustTransform(), this._transform = this._transform || this._createTransform();
        }, e.prototype._$set_transform), s(0, a, "isVisibility", function() {
            return this._isVisibility;
        }), s(0, a, "scaleMode", function() {
            return this._scaleMode;
        }, function(t) {
            this._scaleMode = t, i.systemTimer.callLater(this, this._changeCanvasSize);
        }), s(0, a, "alignV", function() {
            return this._alignV;
        }, function(t) {
            this._alignV = t, i.systemTimer.callLater(this, this._changeCanvasSize);
        }), s(0, a, "bgColor", function() {
            return this._bgColor;
        }, function(t) {
            this._bgColor = t, this._wgColor = t ? o.create(t).arrColor : null, It.onLimixiu ? this._wgColor = o.create(t).arrColor : Rt.canvas.style.background = t || "none";
        }), s(0, a, "mouseX", function() {
            return Math.round(A.instance.mouseX / this.clientScaleX);
        }), s(0, a, "mouseY", function() {
            return Math.round(A.instance.mouseY / this.clientScaleY);
        }), s(0, a, "clientScaleX", function() {
            return this._transform ? this._transform.getScaleX() : 1;
        }), s(0, a, "screenMode", function() {
            return this._screenMode;
        }, function(t) {
            this._screenMode = t;
        }), s(0, a, "visible", e.prototype._$get_visible, function(t) {
            this.visible !== t && (i.superSet(Ke, this, "visible", t), Rt._mainCanvas.source.style.visibility = t ? "visible" : "hidden");
        }), s(0, a, "fullScreenEnabled", null, function(t) {
            var e = It.document, i = Rt.canvas;
            t ? (i.addEventListener("mousedown", this._requestFullscreen), i.addEventListener("touchstart", this._requestFullscreen), 
            e.addEventListener("fullscreenchange", this._fullScreenChanged), e.addEventListener("mozfullscreenchange", this._fullScreenChanged), 
            e.addEventListener("webkitfullscreenchange", this._fullScreenChanged), e.addEventListener("msfullscreenchange", this._fullScreenChanged)) : (i.removeEventListener("mousedown", this._requestFullscreen), 
            i.removeEventListener("touchstart", this._requestFullscreen), e.removeEventListener("fullscreenchange", this._fullScreenChanged), 
            e.removeEventListener("mozfullscreenchange", this._fullScreenChanged), e.removeEventListener("webkitfullscreenchange", this._fullScreenChanged), 
            e.removeEventListener("msfullscreenchange", this._fullScreenChanged));
        }), s(0, a, "frameRate", function() {
            return Rt.isConchApp ? this._frameRateNative : this._frameRate;
        }, function(e) {
            if (Rt.isConchApp) {
                switch (e) {
                  case "fast":
                    t.conch.config.setLimitFPS(60);
                    break;

                  case "mouse":
                    t.conch.config.setMouseFrame(2e3);
                    break;

                  case "slow":
                    t.conch.config.setSlowFrame(!0);
                    break;

                  case "sleep":
                    t.conch.config.setLimitFPS(1);
                }
                this._frameRateNative = e;
            } else this._frameRate = e;
        }), Stage.SCALE_NOSCALE = "noscale", Stage.SCALE_EXACTFIT = "exactfit", Stage.SCALE_SHOWALL = "showall", 
        Stage.SCALE_NOBORDER = "noborder", Stage.SCALE_FULL = "full", Stage.SCALE_FIXED_WIDTH = "fixedwidth", 
        Stage.SCALE_FIXED_HEIGHT = "fixedheight", Stage.SCALE_FIXED_AUTO = "fixedauto", 
        Stage.ALIGN_LEFT = "left", Stage.ALIGN_RIGHT = "right", Stage.ALIGN_CENTER = "center", 
        Stage.ALIGN_TOP = "top", Stage.ALIGN_MIDDLE = "middle", Stage.ALIGN_BOTTOM = "bottom", 
        Stage.SCREEN_NONE = "none", Stage.SCREEN_HORIZONTAL = "horizontal", Stage.SCREEN_VERTICAL = "vertical", 
        Stage.FRAME_FAST = "fast", Stage.FRAME_SLOW = "slow", Stage.FRAME_MOUSE = "mouse", 
        Stage.FRAME_SLEEP = "sleep", n(Stage, [ "_dbgSprite", function() {
            return this._dbgSprite = new Ke();
        } ]), Stage;
    }(Ke)), oi = function(t) {
        function PerfHUD() {
            this.datas = [], this.hud_width = 800, this.hud_height = 200, this.gMinV = 0, this.gMaxV = 100, 
            this.textSpace = 40, this._now = null, this.sttm = 0, PerfHUD.__super.call(this), 
            this.xdata = new Array(PerfHUD.DATANUM), this.ydata = new Array(PerfHUD.DATANUM), 
            PerfHUD.inst = this, this._renderType |= 2048, this._setRenderType(this._renderType), 
            this._setCustomRender(), this.addDataDef(0, 16777215, "frame", 1), this.addDataDef(1, 65280, "update", 1), 
            this.addDataDef(2, 16711680, "flush", 1), this._now = performance ? performance.now.bind(performance) : Date.now;
        }
        r(PerfHUD, "laya.utils.PerfHUD", Ke);
        var e = PerfHUD.prototype;
        return e.now = function() {
            return this._now();
        }, e.start = function() {
            this.sttm = this._now();
        }, e.end = function(t) {
            var e = this._now() - this.sttm;
            this.updateValue(t, e);
        }, e.config = function(t, e) {
            this.hud_width = t, this.hud_height = e;
        }, e.addDataDef = function(t, e, i, n) {
            this.datas[t] = new at(t, e, i, n);
        }, e.updateValue = function(t, e) {
            this.datas[t].addData(e);
        }, e.v2y = function(t) {
            this._y, this.hud_height, this.gMinV, this.gMaxV;
            return this._y + this.hud_height * (1 - (t - this.gMinV) / this.gMaxV);
        }, e.drawHLine = function(t, e, i, n) {
            var r = this._x, s = (this._x, this.hud_width, this.v2y(e));
            t.fillText(n, r, s - 6, null, "green", null), r += this.textSpace, t.fillStyle = i, 
            t.fillRect(r, s, this._x + this.hud_width, 1, null);
        }, e.customRender = function(t, e, i) {
            var n = performance.now();
            PerfHUD._lastTm <= 0 && (PerfHUD._lastTm = n), this.updateValue(0, n - PerfHUD._lastTm), 
            PerfHUD._lastTm = n, t.save(), t.fillRect(this._x, this._y, this.hud_width, this.hud_height + 4, "#000000cc"), 
            t.globalAlpha = .9, this.drawHLine(t, 0, "green", "    0"), this.drawHLine(t, 10, "green", "  10"), 
            this.drawHLine(t, 16.667, "red", " "), this.drawHLine(t, 20, "green", "50|20"), 
            this.drawHLine(t, 33.334, "yellow", ""), this.drawHLine(t, 16.667 * 3, "yellow", ""), 
            this.drawHLine(t, 66.668, "yellow", ""), this.drawHLine(t, 50, "green", "20|50"), 
            this.drawHLine(t, 100, "green", "10|100");
            for (var r = 0, s = this.datas.length; r < s; r++) {
                var a = this.datas[r];
                if (a) {
                    var o = a.datas.length, h = (this.hud_width - this.textSpace) / o, u = a.datapos, l = this._x + this.textSpace;
                    t.fillStyle = a.color;
                    for (var c = o; u < c; u++) {
                        var _ = this.v2y(a.datas[u] * a.scale);
                        t.fillRect(l, _, h, this.hud_height + this._y - _, null), l += h;
                    }
                    for (u = 0; u < a.datapos; u++) _ = this.v2y(a.datas[u] * a.scale), t.fillRect(l, _, h, this.hud_height + this._y - _, null), 
                    l += h;
                }
            }
            t.restore();
        }, PerfHUD._lastTm = 0, PerfHUD._now = 0, PerfHUD.DATANUM = 300, PerfHUD.inst = null, 
        PerfHUD.drawTexTm = 0, PerfHUD;
    }(), hi = function(t) {
        function Scene() {
            this.autoDestroyAtClosed = !1, this.url = null, this._timer = null, this._viewCreated = !1, 
            this._idMap = null, this._$componentType = "Scene", Scene.__super.call(this), this._setBit(8, !0), 
            Scene.unDestroyedScenes.push(this), this._scene = this, this.createChildren();
        }
        r(Scene, "laya.display.Scene", t);
        var e = Scene.prototype;
        return e.createChildren = function() {}, e.loadScene = function(t) {
            var e = t.indexOf(".") > -1 ? t : t + ".scene", n = i.loader.getRes(e);
            if (n) this.createView(n); else {
                i.loader.resetProgress();
                var r = new Ne();
                r.on("complete", this, this._onSceneLoaded, [ e ]), r.load(e);
            }
        }, e._onSceneLoaded = function(t) {
            this.createView(Ie.getRes(t));
        }, e.createView = function(t) {
            t && !this._viewCreated && (this._viewCreated = !0, pt.createByData(this, t));
        }, e.getNodeByID = function(t) {
            return this._idMap ? this._idMap[t] : null;
        }, e.open = function(t, e) {
            void 0 === t && (t = !0), t && Scene.closeAll(), Scene.root.addChild(this), this.onOpened(e);
        }, e.onOpened = function(t) {}, e.close = function(t) {
            this.onClosed(t), this.autoDestroyAtClosed ? this.destroy() : this.removeSelf();
        }, e.onClosed = function(t) {}, e.destroy = function(e) {
            void 0 === e && (e = !0), this._idMap = null, t.prototype.destroy.call(this, e);
            for (var i = laya.display.Scene.unDestroyedScenes, n = i.length - 1; n > -1; n--) if (i[n] === this) return void i.splice(n, 1);
        }, e._sizeChanged = function() {
            this.event("resize");
        }, s(0, e, "scaleX", t.prototype._$get_scaleX, function(t) {
            i.superGet(Ke, this, "scaleX") != t && (i.superSet(Ke, this, "scaleX", t), this.event("resize"));
        }), s(0, e, "scaleY", t.prototype._$get_scaleY, function(t) {
            i.superGet(Ke, this, "scaleY") != t && (i.superSet(Ke, this, "scaleY", t), this.event("resize"));
        }), s(0, e, "width", function() {
            if (this._width) return this._width;
            for (var t = 0, e = this.numChildren - 1; e > -1; e--) {
                var i = this.getChildAt(e);
                i._visible && (t = Math.max(i._x + i.width * i.scaleX, t));
            }
            return t;
        }, function(t) {
            i.superGet(Ke, this, "width") != t && (i.superSet(Ke, this, "width", t), this.callLater(this._sizeChanged));
        }), s(0, e, "timer", function() {
            return this._timer || i.timer;
        }, function(t) {
            this._timer = t;
        }), s(0, e, "height", function() {
            if (this._height) return this._height;
            for (var t = 0, e = this.numChildren - 1; e > -1; e--) {
                var i = this.getChildAt(e);
                i._visible && (t = Math.max(i._y + i.height * i.scaleY, t));
            }
            return t;
        }, function(t) {
            i.superGet(Ke, this, "height") != t && (i.superSet(Ke, this, "height", t), this.callLater(this._sizeChanged));
        }), s(1, Scene, "root", function() {
            if (!Scene._root) {
                function resize() {
                    Scene._root.size(i.stage.width, i.stage.height), Scene._root.event("resize");
                }
                Scene._root = i.stage.addChild(new Ke()), Scene._root.name = "root", i.stage.on("resize", null, resize), 
                resize();
            }
            return Scene._root;
        }, laya.display.Sprite._$SET_root), Scene.load = function(t, e, n) {
            i.loader.resetProgress();
            var r = new Ne();
            function onProgress(t) {
                Scene._loadPage && Scene._loadPage.event("progress", t), n && n.runWith(t);
            }
            r.on("progress", null, onProgress), r.once("complete", null, function() {
                r.off("progress", null, onProgress);
                var i = Ie.getRes(t);
                if (!i) throw "Can not find scene:" + t;
                if (!i.props) throw "Scene data is error:" + t;
                var n = i.props.runtime ? i.props.runtime : i.type, s = Lt.getClass(n);
                if ("instance" == i.props.renderType) var a = s.instance || (s.instance = new s()); else a = new s();
                if (!(a && a instanceof laya.display.Node)) throw "Can not find scene:" + n;
                a.url = t, a._getBit(8) ? (a.on("onViewCreated", null, function() {
                    e && e.runWith(a);
                }), a.createView(i)) : e && e.runWith(a), Scene.hideLoadingPage();
            }), r.load(t);
        }, Scene.open = function(t, e, i, n, r) {
            if (void 0 === e && (e = !0), i instanceof laya.utils.Handler) {
                var s = n;
                n = i, i = s;
            }
            Scene.showLoadingPage(), Scene.load(t, g.create(null, this._onSceneLoaded, [ e, n, i ]), r);
        }, Scene._onSceneLoaded = function(t, e, i, n) {
            n.open(t, i), e && e.runWith(n);
        }, Scene.close = function(t, e) {
            void 0 === e && (e = "");
            for (var i = !1, n = laya.display.Scene.unDestroyedScenes, r = 0, s = n.length; r < s; r++) {
                var a = n[r];
                a && a.parent && a.url === t && a.name == e && (a.close(), i = !0);
            }
            return i;
        }, Scene.closeAll = function() {
            for (var t = laya.display.Scene.root, e = 0, i = t.numChildren; e < i; e++) {
                var n = t.getChildAt(0);
                n instanceof laya.display.Scene ? n.close() : n.removeSelf();
            }
        }, Scene.destroy = function(t, e) {
            void 0 === e && (e = "");
            for (var i = !1, n = laya.display.Scene.unDestroyedScenes, r = 0, s = n.length; r < s; r++) {
                var a = n[r];
                a.url === t && a.name == e && (a.destroy(), i = !0);
            }
            return i;
        }, Scene.gc = function() {
            Me.destroyUnusedResources();
        }, Scene.setLoadingPage = function(t) {
            Scene._loadPage != t && (Scene._loadPage = t);
        }, Scene.showLoadingPage = function(t, e) {
            void 0 === e && (e = 500), Scene._loadPage && (i.systemTimer.clear(null, Scene._showLoading), 
            i.systemTimer.clear(null, Scene._hideLoading), i.systemTimer.once(e, null, Scene._showLoading, [ t ], !1));
        }, Scene._showLoading = function(t) {
            i.stage.addChild(Scene._loadPage), Scene._loadPage.onOpened(t);
        }, Scene._hideLoading = function() {
            Scene._loadPage.close();
        }, Scene.hideLoadingPage = function(t) {
            void 0 === t && (t = 500), Scene._loadPage && (i.systemTimer.clear(null, Scene._showLoading), 
            i.systemTimer.clear(null, Scene._hideLoading), i.systemTimer.once(t, null, Scene._hideLoading));
        }, Scene.unDestroyedScenes = [], Scene._root = null, Scene._loadPage = null, Scene;
    }(Ke), ui = function(t) {
        function Input() {
            this._focus = !1, this._multiline = !1, this._editable = !0, this._restrictPattern = null, 
            this._type = "text", this._prompt = "", this._promptColor = "#A9A9A9", this._originColor = "#000000", 
            this._content = "", Input.__super.call(this), this._maxChars = 1e5, this._width = 100, 
            this._height = 20, this.multiline = !1, this.overflow = "scroll", this.on("mousedown", this, this._onMouseDown), 
            this.on("undisplay", this, this._onUnDisplay);
        }
        r(Input, "laya.display.Input", t);
        var e = Input.prototype;
        return e.setSelection = function(t, e) {
            this.focus = !0, laya.display.Input.inputElement.selectionStart = t, laya.display.Input.inputElement.selectionEnd = e;
        }, e._onUnDisplay = function(t) {
            this.focus = !1;
        }, e._onMouseDown = function(t) {
            this.focus = !0;
        }, e._syncInputTransform = function() {
            var t = this.nativeInput, e = ie.getTransformRelativeToWindow(this, this.padding[3], this.padding[0]), n = this._width - this.padding[1] - this.padding[3], r = this._height - this.padding[0] - this.padding[2];
            Rt.isConchApp ? (t.setScale(e.scaleX, e.scaleY), t.setSize(n, r), t.setPos(e.x, e.y)) : (Input.inputContainer.style.transform = Input.inputContainer.style.webkitTransform = "scale(" + e.scaleX + "," + e.scaleY + ") rotate(" + i.stage.canvasDegree + "deg)", 
            t.style.width = n + "px", t.style.height = r + "px", Input.inputContainer.style.left = e.x + "px", 
            Input.inputContainer.style.top = e.y + "px");
        }, e.select = function() {
            this.nativeInput.select();
        }, e._setInputMethod = function() {
            Input.input.parentElement && Input.inputContainer.removeChild(Input.input), Input.area.parentElement && Input.inputContainer.removeChild(Input.area), 
            Input.inputElement = this._multiline ? Input.area : Input.input, Input.inputContainer.appendChild(Input.inputElement), 
            ei.RightToLeft && (Input.inputElement.style.direction = "rtl");
        }, e._focusIn = function() {
            laya.display.Input.isInputting = !0;
            var t = this.nativeInput;
            this._focus = !0;
            var e = t.style;
            e.whiteSpace = this.wordWrap ? "pre-wrap" : "nowrap", this._setPromptColor(), t.readOnly = !this._editable, 
            Rt.isConchApp && (t.setType(this._type), t.setForbidEdit(!this._editable)), t.maxLength = this._maxChars;
            this.padding;
            if (t.type = this._type, t.value = this._content, t.placeholder = this._prompt, 
            i.stage.off("keydown", this, this._onKeyDown), i.stage.on("keydown", this, this._onKeyDown), 
            i.stage.focus = this, this.event("focus"), It.onPC && t.focus(), !(It.onMiniGame || It.onBDMiniGame || It.onQGMiniGame || It.onKGMiniGame || It.onVVMiniGame || It.onAlipayMiniGame || It.onBLMiniGame)) {
                this._text;
                this._text = null;
            }
            this.typeset(), t.setColor(this._originColor), t.setFontSize(this.fontSize), t.setFontFace(It.onIPhone && ei.fontFamilyMap[this.font] || this.font), 
            Rt.isConchApp && t.setMultiAble && t.setMultiAble(this._multiline), e.lineHeight = this.leading + this.fontSize + "px", 
            e.fontStyle = this.italic ? "italic" : "normal", e.fontWeight = this.bold ? "bold" : "normal", 
            e.textAlign = this.align, e.padding = "0 0", this._syncInputTransform(), !Rt.isConchApp && It.onPC && i.systemTimer.frameLoop(1, this, this._syncInputTransform);
        }, e._setPromptColor = function() {
            Input.promptStyleDOM = It.getElementById("promptStyle"), Input.promptStyleDOM || (Input.promptStyleDOM = It.createElement("style"), 
            Input.promptStyleDOM.setAttribute("id", "promptStyle"), It.document.head.appendChild(Input.promptStyleDOM)), 
            Input.promptStyleDOM.innerText = "input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {color:" + this._promptColor + "}input:-moz-placeholder, textarea:-moz-placeholder {color:" + this._promptColor + "}input::-moz-placeholder, textarea::-moz-placeholder {color:" + this._promptColor + "}input:-ms-input-placeholder, textarea:-ms-input-placeholder {color:" + this._promptColor + "}";
        }, e._focusOut = function() {
            laya.display.Input.isInputting = !1, this._focus = !1, this._text = null, this._content = this.nativeInput.value, 
            this._content ? (i.superSet(ei, this, "text", this._content), i.superSet(ei, this, "color", this._originColor)) : (i.superSet(ei, this, "text", this._prompt), 
            i.superSet(ei, this, "color", this._promptColor)), i.stage.off("keydown", this, this._onKeyDown), 
            i.stage.focus = null, this.event("blur"), this.event("change"), Rt.isConchApp && this.nativeInput.blur(), 
            It.onPC && i.systemTimer.clear(this, this._syncInputTransform);
        }, e._onKeyDown = function(t) {
            13 === t.keyCode && (It.onMobile && !this._multiline && (this.focus = !1), this.event("enter"));
        }, e.changeText = function(e) {
            this._content = e, this._focus ? (this.nativeInput.value = e || "", this.event("change")) : t.prototype.changeText.call(this, e);
        }, s(0, e, "color", t.prototype._$get_color, function(t) {
            this._focus && this.nativeInput.setColor(t), i.superSet(ei, this, "color", this._content ? t : this._promptColor), 
            this._originColor = t;
        }), s(0, e, "multiline", function() {
            return this._multiline;
        }, function(t) {
            this._multiline = t, this.valign = t ? "top" : "middle";
        }), s(0, e, "maxChars", function() {
            return this._maxChars;
        }, function(t) {
            t <= 0 && (t = 1e5), this._maxChars = t;
        }), s(0, e, "text", function() {
            return this._focus ? this.nativeInput.value : this._content || "";
        }, function(t) {
            i.superSet(ei, this, "color", this._originColor), t += "", this._focus ? (this.nativeInput.value = t || "", 
            this.event("change")) : (this._multiline || (t = t.replace(/\r?\n/g, "")), this._content = t, 
            t ? i.superSet(ei, this, "text", t) : (i.superSet(ei, this, "text", this._prompt), 
            i.superSet(ei, this, "color", this.promptColor)));
        }), s(0, e, "nativeInput", function() {
            return this._multiline ? Input.area : Input.input;
        }), s(0, e, "focus", function() {
            return this._focus;
        }, function(t) {
            var e = this.nativeInput;
            this._focus !== t && (t ? (e.target ? e.target._focusOut() : this._setInputMethod(), 
            e.target = this, this._focusIn()) : (e.target = null, this._focusOut(), It.document.body.scrollTop = 0, 
            e.blur(), Rt.isConchApp ? e.setPos(-1e4, -1e4) : Input.inputContainer.contains(e) && Input.inputContainer.removeChild(e)));
        }), s(0, e, "editable", function() {
            return this._editable;
        }, function(t) {
            this._editable = t, Rt.isConchApp && Input.input.setForbidEdit(!t);
        }), s(0, e, "bgColor", t.prototype._$get_bgColor, function(t) {
            i.superSet(ei, this, "bgColor", t), Rt.isConchApp && this.nativeInput.setBgColor(t);
        }), s(0, e, "restrict", function() {
            return this._restrictPattern ? this._restrictPattern.source : "";
        }, function(t) {
            t ? ((t = "[^" + t + "]").indexOf("^^") > -1 && (t = t.replace("^^", "")), this._restrictPattern = new RegExp(t, "g")) : this._restrictPattern = null;
        }), s(0, e, "prompt", function() {
            return this._prompt;
        }, function(t) {
            !this._text && t && i.superSet(ei, this, "color", this._promptColor), this.promptColor = this._promptColor, 
            this._text ? i.superSet(ei, this, "text", this._text == this._prompt ? t : this._text) : i.superSet(ei, this, "text", t), 
            this._prompt = ei.langPacks && ei.langPacks[t] ? ei.langPacks[t] : t;
        }), s(0, e, "promptColor", function() {
            return this._promptColor;
        }, function(t) {
            this._promptColor = t, this._content || i.superSet(ei, this, "color", t);
        }), s(0, e, "type", function() {
            return this._type;
        }, function(t) {
            this._getTextStyle().asPassword = "password" === t, this._type = t;
        }), Input.__init__ = function() {
            if (Input._createInputElement(), It.onMobile) {
                var t = !1;
                (It.onMiniGame || It.onBDMiniGame || It.onQGMiniGame || It.onKGMiniGame || It.onVVMiniGame || It.onAlipayMiniGame || It.onBLMiniGame) && (t = !0), 
                Rt.canvas.addEventListener(Input.IOS_IFRAME ? t ? "touchend" : "click" : "touchend", Input._popupInputMethod);
            }
        }, Input._popupInputMethod = function(t) {
            laya.display.Input.isInputting && laya.display.Input.inputElement.focus();
        }, Input._createInputElement = function() {
            Input._initInput(Input.area = It.createElement("textarea")), Input._initInput(Input.input = It.createElement("input")), 
            Input.inputContainer = It.createElement("div"), Input.inputContainer.style.position = "absolute", 
            Input.inputContainer.style.zIndex = 1e5, It.container.appendChild(Input.inputContainer), 
            Input.inputContainer.setPos = function(t, e) {
                Input.inputContainer.style.left = t + "px", Input.inputContainer.style.top = e + "px";
            };
        }, Input._initInput = function(t) {
            var e = t.style;
            e.cssText = "position:absolute;overflow:hidden;resize:none;transform-origin:0 0;-webkit-transform-origin:0 0;-moz-transform-origin:0 0;-o-transform-origin:0 0;", 
            e.resize = "none", e.backgroundColor = "transparent", e.border = "none", e.outline = "none", 
            e.zIndex = 1, t.addEventListener("input", Input._processInputting), t.addEventListener("mousemove", Input._stopEvent), 
            t.addEventListener("mousedown", Input._stopEvent), t.addEventListener("touchmove", Input._stopEvent), 
            t.setFontFace = function(e) {
                t.style.fontFamily = e;
            }, Rt.isConchApp || (t.setColor = function(e) {
                t.style.color = e;
            }, t.setFontSize = function(e) {
                t.style.fontSize = e + "px";
            });
        }, Input._processInputting = function(t) {
            var e = laya.display.Input.inputElement.target;
            if (e) {
                var i = laya.display.Input.inputElement.value;
                e._restrictPattern && (i = i.replace(/\u2006|\x27/g, ""), e._restrictPattern.test(i) && (i = i.replace(e._restrictPattern, ""), 
                laya.display.Input.inputElement.value = i)), e._text = i, e.event("input");
            }
        }, Input._stopEvent = function(t) {
            "touchmove" == t.type && t.preventDefault(), t.stopPropagation && t.stopPropagation();
        }, Input.TYPE_TEXT = "text", Input.TYPE_PASSWORD = "password", Input.TYPE_EMAIL = "email", 
        Input.TYPE_URL = "url", Input.TYPE_NUMBER = "number", Input.TYPE_RANGE = "range", 
        Input.TYPE_DATE = "date", Input.TYPE_MONTH = "month", Input.TYPE_WEEK = "week", 
        Input.TYPE_TIME = "time", Input.TYPE_DATE_TIME = "datetime", Input.TYPE_DATE_TIME_LOCAL = "datetime-local", 
        Input.TYPE_SEARCH = "search", Input.input = null, Input.area = null, Input.inputElement = null, 
        Input.inputContainer = null, Input.confirmButton = null, Input.promptStyleDOM = null, 
        Input.inputHeight = 45, Input.isInputting = !1, Input.stageMatrix = null, n(Input, [ "IOS_IFRAME", function() {
            return this.IOS_IFRAME = It.onIOS && It.window.top != It.window.self;
        } ]), Input;
    }(ei), li = (function(t) {
        function Animation() {
            this._frames = null, this._url = null, Animation.__super.call(this), this._setControlNode(this);
        }
        r(Animation, "laya.display.Animation", t);
        var e = Animation.prototype;
        e.destroy = function(t) {
            void 0 === t && (t = !0), this.stop(), laya.display.Sprite.prototype.destroy.call(this, t), 
            this._frames = null, this._labels = null;
        }, e.play = function(e, i, n) {
            void 0 === e && (e = 0), void 0 === i && (i = !0), void 0 === n && (n = ""), n && this._setFramesFromCache(n, !0), 
            t.prototype.play.call(this, e, i, n);
        }, e._setFramesFromCache = function(t, e) {
            if (void 0 === e && (e = !1), this._url && (t = this._url + "#" + t), t && Animation.framesMap[t]) {
                var i = Animation.framesMap[t];
                return i instanceof Array ? (this._frames = Animation.framesMap[t], this._count = this._frames.length) : (i.nodeRoot && (Animation.framesMap[t] = fi.parseAnimationByData(i), 
                i = Animation.framesMap[t]), this._frames = i.frames, this._count = this._frames.length, 
                this._frameRateChanged || (this._interval = i.interval), this._labels = this._copyLabels(i.labels)), 
                !0;
            }
            return e && console.log("ani not found:", t), !1;
        }, e._copyLabels = function(t) {
            if (!t) return null;
            var e, i;
            for (i in e = {}, t) e[i] = ie.copyArray([], t[i]);
            return e;
        }, e._frameLoop = function() {
            this._visible && this._style.alpha > .01 && this._frames && t.prototype._frameLoop.call(this);
        }, e._displayToIndex = function(t) {
            this._frames && (this.graphics = this._frames[t]);
        }, e.clear = function() {
            return t.prototype.clear.call(this), this.stop(), this.graphics = null, this._frames = null, 
            this._labels = null, this;
        }, e.loadImages = function(t, e) {
            return void 0 === e && (e = ""), this._url = "", this._setFramesFromCache(e) || (this.frames = Animation.framesMap[e] ? Animation.framesMap[e] : Animation.createFrames(t, e)), 
            this;
        }, e.loadAtlas = function(t, e, n) {
            void 0 === n && (n = ""), this._url = "";
            var r = this;
            if (!r._setFramesFromCache(n)) {
                function onLoaded(i) {
                    t === i && (r.frames = Animation.framesMap[n] ? Animation.framesMap[n] : Animation.createFrames(t, n), 
                    e && e.run());
                }
                Ie.getAtlas(t) ? onLoaded(t) : i.loader.load(t, g.create(null, onLoaded, [ t ]), null, "atlas");
            }
            return this;
        }, e.loadAnimation = function(t, e, n) {
            this._url = t;
            return this._actionName || (this._actionName = ""), this._setFramesFromCache(this._actionName) ? (this._setFramesFromCache(this._actionName, !0), 
            this.index = 0, e && e.run()) : !n || Ie.getAtlas(n) ? this._loadAnimationData(t, e, n) : i.loader.load(n, g.create(this, this._loadAnimationData, [ t, e, n ]), null, "atlas"), 
            this;
        }, e._loadAnimationData = function(t, e, n) {
            var r = this;
            if (!n || Ie.getAtlas(n)) {
                var s = this;
                Ie.getRes(t) ? onLoaded(t) : i.loader.load(t, g.create(null, onLoaded, [ t ]), null, "json");
            } else console.warn("atlas load fail:" + n);
            function onLoaded(i) {
                if (Ie.getRes(i)) {
                    if (t === i) {
                        var n;
                        if (Animation.framesMap[t + "#"]) s._setFramesFromCache(r._actionName, !0), r.index = 0, 
                        r._resumePlay(); else {
                            var a = fi.parseAnimationData(Ie.getRes(t));
                            if (!a) return;
                            var o, h = a.animationList, u = 0, l = h.length;
                            for (u = 0; u < l; u++) n = h[u], Animation.framesMap[t + "#" + n.name] = n, o || (o = n);
                            o && (Animation.framesMap[t + "#"] = o, s._setFramesFromCache(r._actionName, !0), 
                            r.index = 0), r._resumePlay();
                        }
                        e && e.run();
                    }
                    Ie.clearRes(t);
                } else Animation.framesMap[t + "#"] && (s._setFramesFromCache(r._actionName, !0), 
                r.index = 0, r._resumePlay(), e && e.run());
            }
        }, s(0, e, "frames", function() {
            return this._frames;
        }, function(t) {
            this._frames = t, t && (this._count = t.length, this._actionName && this._setFramesFromCache(this._actionName, !0), 
            this.index = this._index);
        }), s(0, e, "autoPlay", null, function(t) {
            t ? this.play() : this.stop();
        }), s(0, e, "source", null, function(t) {
            t.indexOf(".ani") > -1 ? this.loadAnimation(t) : t.indexOf(".json") > -1 || t.indexOf("als") > -1 || t.indexOf("atlas") > -1 ? this.loadAtlas(t) : this.loadImages(t.split(","));
        }), s(0, e, "autoAnimation", null, function(t) {
            this.play(0, !0, t);
        }), Animation.createFrames = function(t, e) {
            var i;
            if ("string" == typeof t) {
                var n = Ie.getAtlas(t);
                if (n && n.length) {
                    i = [];
                    for (var r = 0, s = n.length; r < s; r++) {
                        var a = new $t();
                        a.drawImage(Ie.getRes(n[r]), 0, 0), i.push(a);
                    }
                }
            } else if (t instanceof Array) for (i = [], r = 0, s = t.length; r < s; r++) (a = new $t()).loadImage(t[r], 0, 0), 
            i.push(a);
            return e && (Animation.framesMap[e] = i), i;
        }, Animation.clearCache = function(t) {
            var e, i = Animation.framesMap, n = t + "#";
            for (e in i) e !== t && 0 !== e.indexOf(n) || delete Animation.framesMap[e];
        }, Animation.framesMap = {};
    }(ii), function(t) {
        function Shader2X(t, e, i, n, r) {
            this._params2dQuick2 = null, this._shaderValueWidth = 0, this._shaderValueHeight = 0, 
            Shader2X.__super.call(this, t, e, i, n, r);
        }
        r(Shader2X, "laya.webgl.shader.d2.Shader2X", t);
        var e = Shader2X.prototype;
        return e._disposeResource = function() {
            t.prototype._disposeResource.call(this), this._params2dQuick2 = null;
        }, e.upload2dQuick2 = function(t) {
            this.upload(t, this._params2dQuick2 || this._make2dQuick2());
        }, e._make2dQuick2 = function() {
            if (!this._params2dQuick2) {
                this._params2dQuick2 = [];
                for (var t, e = this._params, i = 0, n = e.length; i < n; i++) "size" !== (t = e[i]).name && this._params2dQuick2.push(t);
            }
            return this._params2dQuick2;
        }, Shader2X.create = function(t, e, i, n, r) {
            return new Shader2X(t, e, i, n, r);
        }, Shader2X;
    }(ni)), ci = function(t) {
        function FrameAnimation() {
            this._targetDic = null, this._animationData = null, this._usedFrames = null, FrameAnimation.__super.call(this), 
            null === FrameAnimation._sortIndexFun && (FrameAnimation._sortIndexFun = L.sortByKey("index", !1, !0));
        }
        r(FrameAnimation, "laya.display.FrameAnimation", t);
        var e = FrameAnimation.prototype;
        return e._setUp = function(t, e) {
            this._targetDic = t, this._animationData = e, this.interval = 1e3 / e.frameRate, 
            e.parsed ? (this._count = e.count, this._labels = e.labels, this._usedFrames = e.animationNewFrames) : (this._usedFrames = [], 
            this._calculateDatas(), e.parsed = !0, e.labels = this._labels, e.count = this._count, 
            e.animationNewFrames = this._usedFrames);
        }, e.clear = function() {
            return t.prototype.clear.call(this), this._targetDic = null, this._animationData = null, 
            this;
        }, e._displayToIndex = function(t) {
            if (this._animationData) {
                t < 0 && (t = 0), t > this._count && (t = this._count);
                var e = this._animationData.nodes, i = 0, n = e.length;
                for (i = 0; i < n; i++) this._displayNodeToFrame(e[i], t);
            }
        }, e._displayNodeToFrame = function(t, e, i) {
            i || (i = this._targetDic);
            var n = i[t.target];
            if (n) {
                var r, s, a, o = t.frames, h = t.keys, u = 0, l = h.length;
                for (u = 0; u < l; u++) a = (s = o[r = h[u]]).length > e ? s[e] : s[s.length - 1], 
                n[r] = a;
                var c, _ = t.funkeys;
                if (0 != (l = _.length)) for (u = 0; u < l; u++) void 0 !== (c = o[r = _[u]])[e] && n[r] && n[r].apply(n, c[e]);
            }
        }, e._calculateDatas = function() {
            if (this._animationData) {
                var t, e = this._animationData.nodes, i = 0, n = e.length;
                for (this._count = 0, i = 0; i < n; i++) t = e[i], this._calculateKeyFrames(t);
                this._count += 1;
            }
        }, e._calculateKeyFrames = function(t) {
            var e, i, n = t.keyframes, r = t.target;
            for (e in t.frames || (t.frames = {}), t.keys ? t.keys.length = 0 : t.keys = [], 
            t.funkeys ? t.funkeys.length = 0 : t.funkeys = [], t.initValues || (t.initValues = {}), 
            n) {
                var s = -1 != e.indexOf("()");
                if (i = n[e], s && (e = e.substr(0, e.length - 2)), t.frames[e] || (t.frames[e] = []), 
                s) {
                    t.funkeys.push(e);
                    for (var a = t.frames[e], o = 0; o < i.length; o++) {
                        var h = i[o];
                        a[h.index] = h.value, h.index > this._count && (this._count = h.index);
                    }
                } else this._targetDic && this._targetDic[r] && (t.initValues[e] = this._targetDic[r][e]), 
                i.sort(FrameAnimation._sortIndexFun), t.keys.push(e), this._calculateNodePropFrames(i, t.frames[e], e, r);
            }
        }, e.resetNodes = function() {
            if (this._targetDic && this._animationData) {
                var t, e, i = this._animationData.nodes, n = 0, r = i.length;
                for (n = 0; n < r; n++) if (e = (t = i[n]).initValues) {
                    var s, a = this._targetDic[t.target];
                    if (a) for (s in e) a[s] = e[s];
                }
            }
        }, e._calculateNodePropFrames = function(t, e, i, n) {
            var r = 0, s = t.length - 1;
            for (e.length = t[s].index + 1, r = 0; r < s; r++) this._dealKeyFrame(t[r]), this._calculateFrameValues(t[r], t[r + 1], e);
            0 == s && (e[0] = t[0].value, this._usedFrames && (this._usedFrames[t[0].index] = !0)), 
            this._dealKeyFrame(t[r]);
        }, e._dealKeyFrame = function(t) {
            t.label && "" != t.label && this.addLabel(t.label, t.index);
        }, e._calculateFrameValues = function(t, e, i) {
            var n, r = 0, s = t.index, a = e.index, o = t.value, h = e.value - t.value, u = a - s, l = this._usedFrames;
            if (a > this._count && (this._count = a), t.tween) for (null == (n = te[t.tweenMethod]) && (n = te.linearNone), 
            r = s; r < a; r++) i[r] = n(r - s, o, h, u), l && (l[r] = !0); else for (r = s; r < a; r++) i[r] = o;
            l && (l[t.index] = !0, l[e.index] = !0), i[e.index] = e.value;
        }, FrameAnimation._sortIndexFun = null, FrameAnimation;
    }(ii), _i = function(t) {
        function Texture2D(t, e, i, n, r) {
            if (void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 1), void 0 === n && (n = !0), 
            void 0 === r && (r = !1), Texture2D.__super.call(this, i, n), this._glTextureType = 3553, 
            this._width = t, this._height = e, this._canRead = r, this._setWarpMode(10242, this._wrapModeU), 
            this._setWarpMode(10243, this._wrapModeV), this._setFilterMode(this._filterMode), 
            this._setAnisotropy(this._anisoLevel), this._mipmap) {
                this._mipmapCount = Math.max(Math.ceil(Math.log2(t)) + 1, Math.ceil(Math.log2(2)) + 1);
                for (var s = 0; s < this._mipmapCount; s++) this._setPixels(null, s, Math.max(t >> s, 1), Math.max(e >> s, 1));
                this._setGPUMemory(t * e * 4 * (1 + 1 / 3));
            } else this._mipmapCount = 1, this._setGPUMemory(t * e * 4);
        }
        r(Texture2D, "laya.resource.Texture2D", ri);
        var e = Texture2D.prototype;
        return e._getFormatByteCount = function() {
            switch (this._format) {
              case 0:
                return 3;

              case 1:
                return 4;

              case 2:
                return 1;

              default:
                throw "Texture2D: unknown format.";
            }
        }, e._setPixels = function(t, e, i, n) {
            var r = Dt.instance, s = this._glTextureType, a = this._getGLFormat();
            nt.bindTexture(r, s, this._glTexture), 0 === this.format ? (r.pixelStorei(3317, 1), 
            r.texImage2D(s, e, a, i, n, 0, a, 5121, t), r.pixelStorei(3317, 4)) : r.texImage2D(s, e, a, i, n, 0, a, 5121, t);
        }, e._calcualatesCompressedDataSize = function(t, e, i) {
            switch (t) {
              case 3:
              case 5:
                return (e + 3 >> 2) * (i + 3 >> 2) * 8;

              case 4:
                return (e + 3 >> 2) * (i + 3 >> 2) * 16;

              case 11:
              case 12:
                return Math.floor((Math.max(e, 8) * Math.max(i, 8) * 4 + 7) / 8);

              case 9:
              case 10:
                return Math.floor((Math.max(e, 16) * Math.max(i, 8) * 2 + 7) / 8);

              default:
                return 0;
            }
        }, e._pharseDDS = function(t) {
            var e = new Int32Array(t, 0, 31);
            if (542327876 != e[0]) throw "Invalid magic number in DDS header";
            if (!(4 & e[20])) throw "Unsupported format, must contain a FourCC code";
            var i = e[21];
            switch (this._format) {
              case 3:
                if (827611204 !== i) throw "the FourCC code is not same with texture format.";
                break;

              case 4:
                if (894720068 !== i) throw "the FourCC code is not same with texture format.";
                break;

              default:
                throw "unknown texture format.";
            }
            var n = 1;
            if (131072 & e[2]) {
                if (n = Math.max(1, e[7]), !this._mipmap) throw "the mipmap is not same with Texture2D.";
            } else if (this._mipmap) throw "the mipmap is not same with Texture2D.";
            var r = e[4], s = e[3];
            this._width = r, this._height = s;
            var a = e[1] + 4;
            this._upLoadCompressedTexImage2D(t, r, s, n, a, 0);
        }, e._pharseKTX = function(t) {
            var e = new Uint8Array(t, 0, 12);
            if (171 != e[0] || 75 != e[1] || 84 != e[2] || 88 != e[3] || 32 != e[4] || 49 != e[5] || 49 != e[6] || 187 != e[7] || 13 != e[8] || 10 != e[9] || 26 != e[10] || 10 != e[11]) throw "Invalid fileIdentifier in KTX header";
            var i = new Int32Array(e.buffer, e.length, 13);
            switch (i[4]) {
              case nt._compressedTextureEtc1.COMPRESSED_RGB_ETC1_WEBGL:
                this._format = 5;
                break;

              default:
                throw "unknown texture format.";
            }
            var n = i[11], r = i[6], s = i[7];
            this._width = r, this._height = s;
            var a = 64 + i[12];
            this._upLoadCompressedTexImage2D(t, r, s, n, a, 4);
        }, e._pharsePVR = function(t) {
            var e = new Int32Array(t, 0, 13);
            if (55727696 != e[0]) throw "Invalid magic number in PVR header";
            switch (e[2]) {
              case 0:
                this._format = 9;
                break;

              case 2:
                this._format = 11;
                break;

              case 1:
                this._format = 10;
                break;

              case 3:
                this._format = 12;
                break;

              default:
                throw "Texture2D:unknown PVR format.";
            }
            var i = e[11], n = e[7], r = e[6];
            this._width = n, this._height = r;
            var s = e[12] + 52;
            this._upLoadCompressedTexImage2D(t, n, r, i, s, 0);
        }, e._upLoadCompressedTexImage2D = function(t, e, i, n, r, s) {
            var a = Dt.instance, o = this._glTextureType;
            nt.bindTexture(a, o, this._glTexture);
            for (var h = this._getGLFormat(), u = r, l = 0; l < n; l++) {
                u += s;
                var c = this._calcualatesCompressedDataSize(this._format, e, i), _ = new Uint8Array(t, u, c);
                a.compressedTexImage2D(o, l, h, e, i, 0, _), e = Math.max(e >> 1, 1), i = Math.max(i >> 1, 1), 
                u += c;
            }
            var d = u;
            this._setGPUMemory(d), this._readyed = !0, this._activeResource();
        }, e.loadImageSource = function(t, e) {
            void 0 === e && (e = !1);
            var i = t.width, n = t.height;
            this._width = i, this._height = n, this._isPot(i) && this._isPot(n) || (this._mipmap = !1), 
            this._setWarpMode(10242, this._wrapModeU), this._setWarpMode(10243, this._wrapModeV), 
            this._setFilterMode(this._filterMode);
            var r = Dt.instance;
            nt.bindTexture(r, this._glTextureType, this._glTexture);
            var s = this._getGLFormat();
            Rt.isConchApp ? t instanceof laya.resource.HTMLCanvas ? r.texImage2D(this._glTextureType, 0, 6408, 6408, 5121, t) : (t.setPremultiplyAlpha(e), 
            r.texImage2D(this._glTextureType, 0, 6408, 6408, 5121, t)) : (e && r.pixelStorei(37441, !0), 
            r.texImage2D(this._glTextureType, 0, s, s, 5121, t), e && r.pixelStorei(37441, !1)), 
            this._mipmap ? (r.generateMipmap(this._glTextureType), this._setGPUMemory(i * n * 4 * (1 + 1 / 3))) : this._setGPUMemory(i * n * 4), 
            this._canRead && (Rt.isConchApp ? this._pixels = new Uint8Array(t._nativeObj.getImageData(0, 0, i, n)) : (It.canvas.size(i, n), 
            It.canvas.clear(), It.context.drawImage(t, 0, 0, i, n), this._pixels = new Uint8Array(It.context.getImageData(0, 0, i, n).data.buffer))), 
            this._readyed = !0, this._activeResource();
        }, e.setPixels = function(t, e) {
            if (void 0 === e && (e = 0), !t) throw "Texture2D:pixels can't be null.";
            var i = Math.max(this._width >> e, 1), n = Math.max(this._height >> e, 1), r = i * n * this._getFormatByteCount();
            if (t.length < r) throw "Texture2D:pixels length should at least " + r + ".";
            this._setPixels(t, e, i, n), this._canRead && (this._pixels = t), this._readyed = !0, 
            this._activeResource();
        }, e.setSubPixels = function(t, e, i, n, r, s) {
            if (void 0 === s && (s = 0), !r) throw "Texture2D:pixels can't be null.";
            var a = Dt.instance, o = this._glTextureType;
            nt.bindTexture(a, o, this._glTexture);
            var h = this._getGLFormat();
            0 === this._format ? (a.pixelStorei(3317, 1), a.texSubImage2D(o, s, t, e, i, n, h, 5121, r), 
            a.pixelStorei(3317, 4)) : a.texSubImage2D(o, s, t, e, i, n, h, 5121, r), this._readyed = !0, 
            this._activeResource();
        }, e.setCompressData = function(t) {
            switch (this._format) {
              case 3:
              case 4:
                this._pharseDDS(t);
                break;

              case 5:
                this._pharseKTX(t);
                break;

              case 9:
              case 10:
              case 11:
              case 12:
                this._pharsePVR(t);
                break;

              default:
                throw "Texture2D:unkonwn format.";
            }
        }, e._recoverResource = function() {}, e.getPixels = function() {
            if (this._canRead) return this._pixels;
            throw new Error("Texture2D: must set texture canRead is true.");
        }, s(0, e, "mipmapCount", function() {
            return this._mipmapCount;
        }), s(0, e, "defaulteTexture", function() {
            return laya.resource.Texture2D.grayTexture;
        }), Texture2D.__init__ = function() {
            var t = new Uint8Array(3);
            t[0] = 128, t[1] = 128, t[2] = 128, Texture2D.grayTexture = new Texture2D(1, 1, 0, !1, !1), 
            Texture2D.grayTexture.setPixels(t), Texture2D.grayTexture.lock = !0, t[0] = 255, 
            t[1] = 255, t[2] = 255, Texture2D.whiteTexture = new Texture2D(1, 1, 0, !1, !1), 
            Texture2D.whiteTexture.setPixels(t), Texture2D.whiteTexture.lock = !0, t[0] = 0, 
            t[1] = 0, t[2] = 0, Texture2D.blackTexture = new Texture2D(1, 1, 0, !1, !1), Texture2D.blackTexture.setPixels(t), 
            Texture2D.blackTexture.lock = !0;
        }, Texture2D._parse = function(t, e, i) {
            var n = i ? new Texture2D(i[0], i[1], i[2], i[3], i[4]) : new Texture2D(0, 0);
            switch (e && (n.wrapModeU = e.wrapModeU, n.wrapModeV = e.wrapModeV, n.filterMode = e.filterMode, 
            n.anisoLevel = e.anisoLevel), n._format) {
              case 0:
              case 1:
                n.loadImageSource(t);
                break;

              case 3:
              case 4:
              case 5:
              case 9:
              case 10:
              case 11:
              case 12:
                n.setCompressData(t);
                break;

              default:
                throw "Texture2D:unkonwn format.";
            }
            return n;
        }, Texture2D.load = function(t, e) {
            i.loader.create(t, e, null, "TEXTURE2D");
        }, Texture2D.grayTexture = null, Texture2D.whiteTexture = null, Texture2D.blackTexture = null, 
        Texture2D;
    }(), di = function(t) {
        function RenderTexture2D(t, e, i, n) {
            this._mgrKey = 0, void 0 === i && (i = 0), void 0 === n && (n = 0), RenderTexture2D.__super.call(this, i, !1), 
            this._glTextureType = 3553, this._width = t, this._height = e, this._depthStencilFormat = n, 
            this._create(t, e), this.lock = !0;
        }
        r(RenderTexture2D, "laya.resource.RenderTexture2D", ri);
        var e = RenderTexture2D.prototype;
        return e.getIsReady = function() {
            return !0;
        }, e._create = function(t, e) {
            var i = Dt.instance;
            this._frameBuffer = i.createFramebuffer(), nt.bindTexture(i, this._glTextureType, this._glTexture);
            var n = this._getGLFormat();
            if (i.texImage2D(this._glTextureType, 0, n, t, e, 0, n, 5121, null), this._setGPUMemory(t * e * 4), 
            i.bindFramebuffer(36160, this._frameBuffer), i.framebufferTexture2D(36160, 36064, 3553, this._glTexture, 0), 
            3 !== this._depthStencilFormat) switch (this._depthStencilBuffer = i.createRenderbuffer(), 
            i.bindRenderbuffer(36161, this._depthStencilBuffer), this._depthStencilFormat) {
              case 0:
                i.renderbufferStorage(36161, 33189, t, e), i.framebufferRenderbuffer(36160, 36096, 36161, this._depthStencilBuffer);
                break;

              case 1:
                i.renderbufferStorage(36161, 36168, t, e), i.framebufferRenderbuffer(36160, 36128, 36161, this._depthStencilBuffer);
                break;

              case 2:
                i.renderbufferStorage(36161, 34041, t, e), i.framebufferRenderbuffer(36160, 33306, 36161, this._depthStencilBuffer);
            }
            i.bindFramebuffer(36160, null), i.bindRenderbuffer(36161, null), this._setWarpMode(10242, this._wrapModeU), 
            this._setWarpMode(10243, this._wrapModeV), this._setFilterMode(this._filterMode), 
            this._setAnisotropy(this._anisoLevel), this._readyed = !0, this._activeResource();
        }, e.generateMipmap = function() {
            this._isPot(this.width) && this._isPot(this.height) ? (this._mipmap = !0, Dt.instance.generateMipmap(this._glTextureType), 
            this._setFilterMode(this._filterMode), this._setGPUMemory(this.width * this.height * 4 * (1 + 1 / 3))) : (this._mipmap = !1, 
            this._setGPUMemory(this.width * this.height * 4));
        }, e.start = function() {
            var t = Dt.instance;
            Dt.instance.bindFramebuffer(36160, this._frameBuffer), this._lastRT = RenderTexture2D._currentActive, 
            RenderTexture2D._currentActive = this, this._readyed = !0, t.viewport(0, 0, this._width, this._height), 
            this._lastWidth = ft.width, this._lastHeight = ft.height, ft.width = this._width, 
            ft.height = this._height, je.activeShader = null;
        }, e.end = function() {
            Dt.instance.bindFramebuffer(36160, null), RenderTexture2D._currentActive = null, 
            this._readyed = !0;
        }, e.restore = function() {
            var t = Dt.instance;
            this._lastRT != RenderTexture2D._currentActive && (Dt.instance.bindFramebuffer(36160, this._lastRT ? this._lastRT._frameBuffer : null), 
            RenderTexture2D._currentActive = this._lastRT), this._readyed = !0, t.viewport(0, 0, this._lastWidth, this._lastHeight), 
            ft.width = this._lastWidth, ft.height = this._lastHeight, je.activeShader = null;
        }, e.clear = function(t, e, i, n) {
            void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === n && (n = 1);
            var r = Dt.instance;
            r.clearColor(t, e, i, n);
            var s = 16384;
            switch (this._depthStencilFormat) {
              case 33189:
                s |= 256;
                break;

              case 36168:
                s |= 1024;
                break;

              case 34041:
                s |= 256, s |= 1024;
            }
            r.clear(s);
        }, e.getData = function(t, e, i, n) {
            if (Rt.isConchApp && 2 == conchConfig.threadMode) throw "native 2 thread mode use getDataAsync";
            var r = Dt.instance;
            if (r.bindFramebuffer(36160, this._frameBuffer), !(36053 === r.checkFramebufferStatus(36160))) return r.bindFramebuffer(36160, null), 
            null;
            var s = new Uint8Array(this._width * this._height * 4), a = this._getGLFormat();
            return r.readPixels(t, e, i, n, a, 5121, s), r.bindFramebuffer(36160, null), s;
        }, e.getDataAsync = function(t, e, i, n, r) {
            var s = Dt.instance;
            s.bindFramebuffer(36160, this._frameBuffer), s.readPixelsAsync(t, e, i, n, 6408, 5121, function(t) {
                r(new Uint8Array(t));
            }), s.bindFramebuffer(36160, null);
        }, e.recycle = function() {}, e._disposeResource = function() {
            if (this._frameBuffer) {
                var t = Dt.instance;
                t.deleteTexture(this._glTexture), t.deleteFramebuffer(this._frameBuffer), t.deleteRenderbuffer(this._depthStencilBuffer), 
                this._glTexture = null, this._frameBuffer = null, this._depthStencilBuffer = null, 
                this._setGPUMemory(0);
            }
        }, s(0, e, "depthStencilFormat", function() {
            return this._depthStencilFormat;
        }), s(0, e, "defaulteTexture", function() {
            return _i.grayTexture;
        }), s(0, e, "sourceWidth", function() {
            return this._width;
        }), s(0, e, "sourceHeight", function() {
            return this._height;
        }), s(0, e, "offsetX", function() {
            return 0;
        }), s(0, e, "offsetY", function() {
            return 0;
        }), s(1, RenderTexture2D, "currentActive", function() {
            return RenderTexture2D._currentActive;
        }, laya.resource.BaseTexture._$SET_currentActive), RenderTexture2D.pushRT = function() {
            RenderTexture2D.rtStack.push({
                rt: RenderTexture2D._currentActive,
                w: ft.width,
                h: ft.height
            });
        }, RenderTexture2D.popRT = function() {
            var t = Dt.instance, e = RenderTexture2D.rtStack.pop();
            e && (RenderTexture2D._currentActive != e.rt && (Dt.instance.bindFramebuffer(36160, e.rt ? e.rt._frameBuffer : null), 
            RenderTexture2D._currentActive = e.rt), t.viewport(0, 0, e.w, e.h), ft.width = e.w, 
            ft.height = e.h);
        }, RenderTexture2D._currentActive = null, RenderTexture2D.rtStack = [], n(RenderTexture2D, [ "defuv", function() {
            return this.defuv = [ 0, 0, 1, 0, 1, 1, 0, 1 ];
        }, "flipyuv", function() {
            return this.flipyuv = [ 0, 1, 1, 1, 1, 0, 0, 0 ];
        } ]), RenderTexture2D;
    }(), fi = function(t) {
        var e;
        function GraphicAnimation() {
            this.animationList = null, this.animationDic = null, this._nodeList = null, this._nodeDefaultProps = null, 
            this._gList = null, this._nodeIDAniDic = {}, this._rootNode = null, this._nodeGDic = null, 
            GraphicAnimation.__super.call(this);
        }
        r(GraphicAnimation, "laya.utils.GraphicAnimation", t);
        var i = GraphicAnimation.prototype;
        return i._parseNodeList = function(t) {
            this._nodeList || (this._nodeList = []), this._nodeDefaultProps[t.compId] = t.props, 
            t.compId && this._nodeList.push(t.compId);
            var e = t.child;
            if (e) {
                var i = 0, n = e.length;
                for (i = 0; i < n; i++) this._parseNodeList(e[i]);
            }
        }, i._calGraphicData = function(t) {
            var e;
            if (this._setUp(null, t), this._createGraphicData(), this._nodeIDAniDic) for (e in this._nodeIDAniDic) this._nodeIDAniDic[e] = null;
        }, i._createGraphicData = function() {
            var t, e = [], i = 0, n = this.count, r = this._usedFrames;
            for (r || (r = []), i = 0; i < n; i++) !r[i] && t || (t = this._createFrameGraphic(i)), 
            e.push(t);
            this._gList = e;
        }, i._createFrameGraphic = function(t) {
            var e = new $t();
            return GraphicAnimation._rootMatrix || (GraphicAnimation._rootMatrix = new st()), 
            this._updateNodeGraphic(this._rootNode, t, GraphicAnimation._rootMatrix, e), e;
        }, i._updateNodeGraphic = function(t, e, i, n, r) {
            var s, a, o;
            void 0 === r && (r = 1), (s = this._nodeGDic[t.compId] = this._getNodeGraphicData(t.compId, e, this._nodeGDic[t.compId])).resultTransform || (s.resultTransform = new st()), 
            a = s.resultTransform, st.mul(s.transform, i, a);
            var h = s.alpha * r;
            if (!(h < .01)) {
                s.skin && (o = this._getTextureByUrl(s.skin)) && (a._checkTransform() ? (n.drawTexture(o, 0, 0, s.width, s.height, a, h), 
                s.resultTransform = null) : n.drawTexture(o, a.tx, a.ty, s.width, s.height, null, h));
                var u = t.child;
                if (u) {
                    var l, c = 0;
                    for (l = u.length, c = 0; c < l; c++) this._updateNodeGraphic(u[c], e, a, n, h);
                }
            }
        }, i._updateNoChilds = function(t, e) {
            if (t.skin) {
                var i = this._getTextureByUrl(t.skin);
                if (i) {
                    var n = t.transform;
                    n._checkTransform();
                    !n._bTransform ? e.drawTexture(i, n.tx, n.ty, t.width, t.height, null, t.alpha) : e.drawTexture(i, 0, 0, t.width, t.height, n.clone(), t.alpha);
                }
            }
        }, i._updateNodeGraphic2 = function(t, e, i) {
            var n;
            if (n = this._nodeGDic[t.compId] = this._getNodeGraphicData(t.compId, e, this._nodeGDic[t.compId]), 
            t.child) {
                var r = n.transform;
                r._checkTransform();
                var s, a;
                a = (s = !r._bTransform) && (0 != r.tx || 0 != r.ty);
                var o;
                (o = r._bTransform || 1 != n.alpha) && i.save(), 1 != n.alpha && i.alpha(n.alpha), 
                s ? a && i.translate(r.tx, r.ty) : i.transform(r.clone());
                var h, u = t.child;
                if (n.skin && (h = this._getTextureByUrl(n.skin)) && i.drawImage(h, 0, 0, n.width, n.height), 
                u) {
                    var l, c = 0;
                    for (l = u.length, c = 0; c < l; c++) this._updateNodeGraphic2(u[c], e, i);
                }
                o ? i.restore() : s ? a && i.translate(-r.tx, -r.ty) : i.transform(r.clone().invert());
            } else this._updateNoChilds(n, i);
        }, i._calculateKeyFrames = function(e) {
            t.prototype._calculateKeyFrames.call(this, e), this._nodeIDAniDic[e.target] = e;
        }, i.getNodeDataByID = function(t) {
            return this._nodeIDAniDic[t];
        }, i._getParams = function(t, e, i, n) {
            var r = GraphicAnimation._temParam;
            r.length = e.length;
            var s = 0, a = e.length;
            for (s = 0; s < a; s++) r[s] = this._getObjVar(t, e[s][0], i, e[s][1], n);
            return r;
        }, i._getObjVar = function(t, e, i, n, r) {
            if (t.hasOwnProperty(e)) {
                var s = t[e];
                return i >= s.length && (i = s.length - 1), t[e][i];
            }
            return r.hasOwnProperty(e) ? r[e] : n;
        }, i._getNodeGraphicData = function(t, i, n) {
            n || (n = new e()), n.transform ? n.transform.identity() : n.transform = new st();
            var r = this.getNodeDataByID(t);
            if (!r) return n;
            var s, a = r.frames, o = this._getParams(a, GraphicAnimation._drawTextureCmd, i, this._nodeDefaultProps[t]), h = o[0], u = NaN, l = NaN, c = o[5], _ = o[6], d = o[13], f = o[14], p = o[7], m = o[8], g = o[9], v = o[11], x = o[12];
            u = o[3], l = o[4], 0 != u && 0 != l || (h = null), -1 == u && (u = 0), -1 == l && (l = 0), 
            n.skin = h, n.width = u, n.height = l, h && ((s = this._getTextureByUrl(h)) ? (u || (u = s.sourceWidth), 
            l || (l = s.sourceHeight)) : console.warn("lost skin:", h, ",you may load pics first")), 
            n.alpha = o[10];
            var y = n.transform;
            0 != d && (c = d * u), 0 != f && (_ = f * l), 0 == c && 0 == _ || y.translate(-c, -_);
            var T = null;
            if (g || 1 !== p || 1 !== m || v || x) {
                (T = GraphicAnimation._tempMt).identity(), T._bTransform = !0;
                var b = .0174532922222222 * (g - v), C = .0174532922222222 * (g + x), S = Math.cos(C), w = Math.sin(C), M = Math.sin(b), A = Math.cos(b);
                T.a = p * S, T.b = p * w, T.c = -m * M, T.d = m * A, T.tx = T.ty = 0;
            }
            return T && (y = st.mul(y, T, y)), y.translate(o[1], o[2]), n;
        }, i._getTextureByUrl = function(t) {
            return Ie.getRes(t);
        }, i.setAniData = function(t, e) {
            if (t.animations) {
                this._nodeDefaultProps = {}, this._nodeGDic = {}, this._nodeList && (this._nodeList.length = 0), 
                this._rootNode = t, this._parseNodeList(t);
                var i, n = {}, r = [], s = t.animations, a = 0, o = s.length;
                for (a = 0; a < o; a++) if (i = s[a], this._labels = null, (!e || e == i.name) && i) {
                    try {
                        this._calGraphicData(i);
                    } catch (t) {
                        console.warn("parse animation fail:" + i.name + ",empty animation created"), this._gList = [];
                    }
                    var h = {};
                    h.interval = 1e3 / i.frameRate, h.frames = this._gList, h.labels = this._labels, 
                    h.name = i.name, r.push(h), n[i.name] = h;
                }
                this.animationList = r, this.animationDic = n;
            }
            GraphicAnimation._temParam.length = 0;
        }, i.parseByData = function(t) {
            var e, i;
            e = t.nodeRoot, i = t.aniO, delete t.nodeRoot, delete t.aniO, this._nodeDefaultProps = {}, 
            this._nodeGDic = {}, this._nodeList && (this._nodeList.length = 0), this._rootNode = e, 
            this._parseNodeList(e), this._labels = null;
            try {
                this._calGraphicData(i);
            } catch (t) {
                console.warn("parse animation fail:" + i.name + ",empty animation created"), this._gList = [];
            }
            var n = t;
            return n.interval = 1e3 / i.frameRate, n.frames = this._gList, n.labels = this._labels, 
            n.name = i.name, n;
        }, i.setUpAniData = function(t) {
            if (t.animations) {
                var e, i = {}, n = [], r = t.animations, s = 0, a = r.length;
                for (s = 0; s < a; s++) if (e = r[s]) {
                    var o = {};
                    o.name = e.name, o.aniO = e, o.nodeRoot = t, n.push(o), i[e.name] = o;
                }
                this.animationList = n, this.animationDic = i;
            }
        }, i._clear = function() {
            this.animationList = null, this.animationDic = null, this._gList = null, this._nodeGDic = null;
        }, GraphicAnimation.parseAnimationByData = function(t) {
            var e;
            return GraphicAnimation._I || (GraphicAnimation._I = new GraphicAnimation()), e = GraphicAnimation._I.parseByData(t), 
            GraphicAnimation._I._clear(), e;
        }, GraphicAnimation.parseAnimationData = function(t) {
            var e;
            return GraphicAnimation._I || (GraphicAnimation._I = new GraphicAnimation()), GraphicAnimation._I.setUpAniData(t), 
            (e = {}).animationList = GraphicAnimation._I.animationList, e.animationDic = GraphicAnimation._I.animationDic, 
            GraphicAnimation._I._clear(), e;
        }, GraphicAnimation._temParam = [], GraphicAnimation._I = null, GraphicAnimation._rootMatrix = null, 
        n(GraphicAnimation, [ "_drawTextureCmd", function() {
            return this._drawTextureCmd = [ [ "skin", null ], [ "x", 0 ], [ "y", 0 ], [ "width", -1 ], [ "height", -1 ], [ "pivotX", 0 ], [ "pivotY", 0 ], [ "scaleX", 1 ], [ "scaleY", 1 ], [ "rotation", 0 ], [ "alpha", 1 ], [ "skewX", 0 ], [ "skewY", 0 ], [ "anchorX", 0 ], [ "anchorY", 0 ] ];
        }, "_tempMt", function() {
            return this._tempMt = new st();
        } ]), GraphicAnimation.__init$ = function() {
            e = function() {
                function GraphicNode() {
                    this.skin = null, this.transform = null, this.resultTransform = null, this.width = NaN, 
                    this.height = NaN, this.alpha = 1;
                }
                return r(GraphicNode, ""), GraphicNode;
            }();
        }, GraphicAnimation;
    }(ci);
    !function(t) {
        function EffectAnimation() {
            this._target = null, this._playEvent = null, this._initData = {}, this._aniKeys = null, 
            this._effectClass = null, EffectAnimation.__super.call(this);
        }
        r(EffectAnimation, "laya.display.EffectAnimation", t);
        var e = EffectAnimation.prototype;
        e._onOtherBegin = function(t) {
            t !== this && this.stop();
        }, e._addEvent = function() {
            this._target && this._playEvent && (this._setControlNode(this._target), this._target.on(this._playEvent, this, this._onPlayAction));
        }, e._onPlayAction = function() {
            this.play(0, !1);
        }, e.play = function(t, e, i) {
            void 0 === t && (t = 0), void 0 === e && (e = !0), void 0 === i && (i = ""), this._target && (this._target.event("effectbegin", [ this ]), 
            this._recordInitData(), laya.display.AnimationBase.prototype.play.call(this, t, e, i));
        }, e._recordInitData = function() {
            if (this._aniKeys) {
                var t, e, i = 0;
                for (t = this._aniKeys.length, i = 0; i < t; i++) e = this._aniKeys[i], this._initData[e] = this._target[e];
            }
        }, e._displayToIndex = function(t) {
            if (this._animationData) {
                t < 0 && (t = 0), t > this._count && (t = this._count);
                var e = this._animationData.nodes, i = 0, n = e.length;
                for (n = n > 1 ? 1 : n, i = 0; i < n; i++) this._displayNodeToFrame(e[i], t);
            }
        }, e._displayNodeToFrame = function(t, e, i) {
            if (this._target) {
                var n, r, s, a, o, h, u, l = this._target, c = t.frames, _ = t.keys, d = 0, f = _.length, p = t.secondFrames, m = 0;
                for (d = 0; d < f; d++) r = c[n = _[d]], -1 == (m = p[n]) ? s = this._initData[n] : e < m ? (h = (o = t.keyframes[n])[0]).tween ? (null == (a = te[h.tweenMethod]) && (a = te.linearNone), 
                u = o[1], s = a(e, this._initData[n], u.value - this._initData[n], u.index)) : s = this._initData[n] : s = r.length > e ? r[e] : r[r.length - 1], 
                l[n] = s;
            }
        }, e._calculateKeyFrames = function(e) {
            t.prototype._calculateKeyFrames.call(this, e);
            var i, n, r = e.keyframes, s = (e.target, {});
            for (i in e.secondFrames = s, r) (n = r[i]).length <= 1 ? s[i] = -1 : s[i] = n[1].index;
        }, s(0, e, "target", function() {
            return this._target;
        }, function(t) {
            this._target && this._target.off("effectbegin", this, this._onOtherBegin), this._target = t, 
            this._target && this._target.on("effectbegin", this, this._onOtherBegin), this._addEvent();
        }), s(0, e, "playEvent", null, function(t) {
            this._playEvent = t, t && this._addEvent();
        }), s(0, e, "effectData", null, function(t) {
            if (t) {
                var e = t.animations;
                if (e && e[0]) {
                    var i = e[0];
                    this._setUp({}, i), i.nodes && i.nodes[0] && (this._aniKeys = i.nodes[0].keys);
                }
            }
        }), s(0, e, "effectClass", null, function(t) {
            if (this._effectClass = Lt.getClass(t), this._effectClass) {
                var e = this._effectClass.uiView;
                if (e) {
                    var i = e.animations;
                    if (i && i[0]) {
                        var n = i[0];
                        this._setUp({}, n), n.nodes && n.nodes[0] && (this._aniKeys = n.nodes[0].keys);
                    }
                }
            }
        }), EffectAnimation.EFFECT_BEGIN = "effectbegin";
    }(ci);
    i.__init([ We, m, lt, M, fi, pt, Rt, Q, J, Qt, bt, be, d, Re ]);
}(window, document, Laya), function(t, e, i) {
    i.un, i.uns, i.static;
    var n = i.class;
    i.getset, i.__newvec;
    new (function() {
        function LayaMain() {}
        return n(LayaMain, "LayaMain"), LayaMain;
    }())();
}(window, document, Laya);