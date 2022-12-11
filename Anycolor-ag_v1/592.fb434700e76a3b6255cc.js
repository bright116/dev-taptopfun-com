/*! For license information please see 592.fb434700e76a3b6255cc.js.LICENSE.txt */
(self.webpackChunkcolorapp = self.webpackChunkcolorapp || []).push([
    [592], {
        1680: function(t, e, r) {
            "use strict";
            var i, n, o, s, a, h, u, c, f, l, d, p, _, v, m, y, g, E, T;
            r.d(e, {
                    A7: function() {
                        return g
                    },
                    G5: function() {
                        return E
                    },
                    I2: function() {
                        return h
                    },
                    N3: function() {
                        return n
                    },
                    Nt: function() {
                        return d
                    },
                    T$: function() {
                        return s
                    },
                    UN: function() {
                        return m
                    },
                    V0: function() {
                        return o
                    },
                    Vi: function() {
                        return i
                    },
                    WB: function() {
                        return p
                    },
                    aH: function() {
                        return l
                    },
                    cB: function() {
                        return y
                    },
                    iw: function() {
                        return _
                    },
                    lg: function() {
                        return a
                    },
                    mr: function() {
                        return T
                    },
                    oT: function() {
                        return f
                    },
                    sp: function() {
                        return u
                    },
                    vK: function() {
                        return c
                    },
                    yl: function() {
                        return v
                    }
                }),
                function(t) {
                    t[t.WEBGL_LEGACY = 0] = "WEBGL_LEGACY", t[t.WEBGL = 1] = "WEBGL", t[t.WEBGL2 = 2] = "WEBGL2"
                }(i || (i = {})),
                function(t) {
                    t[t.UNKNOWN = 0] = "UNKNOWN", t[t.WEBGL = 1] = "WEBGL", t[t.CANVAS = 2] = "CANVAS"
                }(n || (n = {})),
                function(t) {
                    t[t.COLOR = 16384] = "COLOR", t[t.DEPTH = 256] = "DEPTH", t[t.STENCIL = 1024] = "STENCIL"
                }(o || (o = {})),
                function(t) {
                    t[t.NORMAL = 0] = "NORMAL", t[t.ADD = 1] = "ADD", t[t.MULTIPLY = 2] = "MULTIPLY", t[t.SCREEN = 3] = "SCREEN", t[t.OVERLAY = 4] = "OVERLAY", t[t.DARKEN = 5] = "DARKEN", t[t.LIGHTEN = 6] = "LIGHTEN", t[t.COLOR_DODGE = 7] = "COLOR_DODGE", t[t.COLOR_BURN = 8] = "COLOR_BURN", t[t.HARD_LIGHT = 9] = "HARD_LIGHT", t[t.SOFT_LIGHT = 10] = "SOFT_LIGHT", t[t.DIFFERENCE = 11] = "DIFFERENCE", t[t.EXCLUSION = 12] = "EXCLUSION", t[t.HUE = 13] = "HUE", t[t.SATURATION = 14] = "SATURATION", t[t.COLOR = 15] = "COLOR", t[t.LUMINOSITY = 16] = "LUMINOSITY", t[t.NORMAL_NPM = 17] = "NORMAL_NPM", t[t.ADD_NPM = 18] = "ADD_NPM", t[t.SCREEN_NPM = 19] = "SCREEN_NPM", t[t.NONE = 20] = "NONE", t[t.SRC_OVER = 0] = "SRC_OVER", t[t.SRC_IN = 21] = "SRC_IN", t[t.SRC_OUT = 22] = "SRC_OUT", t[t.SRC_ATOP = 23] = "SRC_ATOP", t[t.DST_OVER = 24] = "DST_OVER", t[t.DST_IN = 25] = "DST_IN", t[t.DST_OUT = 26] = "DST_OUT", t[t.DST_ATOP = 27] = "DST_ATOP", t[t.ERASE = 26] = "ERASE", t[t.SUBTRACT = 28] = "SUBTRACT", t[t.XOR = 29] = "XOR"
                }(s || (s = {})),
                function(t) {
                    t[t.POINTS = 0] = "POINTS", t[t.LINES = 1] = "LINES", t[t.LINE_LOOP = 2] = "LINE_LOOP", t[t.LINE_STRIP = 3] = "LINE_STRIP", t[t.TRIANGLES = 4] = "TRIANGLES", t[t.TRIANGLE_STRIP = 5] = "TRIANGLE_STRIP", t[t.TRIANGLE_FAN = 6] = "TRIANGLE_FAN"
                }(a || (a = {})),
                function(t) {
                    t[t.RGBA = 6408] = "RGBA", t[t.RGB = 6407] = "RGB", t[t.RG = 33319] = "RG", t[t.RED = 6403] = "RED", t[t.RGBA_INTEGER = 36249] = "RGBA_INTEGER", t[t.RGB_INTEGER = 36248] = "RGB_INTEGER", t[t.RG_INTEGER = 33320] = "RG_INTEGER", t[t.RED_INTEGER = 36244] = "RED_INTEGER", t[t.ALPHA = 6406] = "ALPHA", t[t.LUMINANCE = 6409] = "LUMINANCE", t[t.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA", t[t.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT", t[t.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL"
                }(h || (h = {})),
                function(t) {
                    t[t.TEXTURE_2D = 3553] = "TEXTURE_2D", t[t.TEXTURE_CUBE_MAP = 34067] = "TEXTURE_CUBE_MAP", t[t.TEXTURE_2D_ARRAY = 35866] = "TEXTURE_2D_ARRAY", t[t.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X", t[t.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X", t[t.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y", t[t.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y", t[t.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z", t[t.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z"
                }(u || (u = {})),
                function(t) {
                    t[t.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE", t[t.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT", t[t.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5", t[t.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4", t[t.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1", t[t.UNSIGNED_INT = 5125] = "UNSIGNED_INT", t[t.UNSIGNED_INT_10F_11F_11F_REV = 35899] = "UNSIGNED_INT_10F_11F_11F_REV", t[t.UNSIGNED_INT_2_10_10_10_REV = 33640] = "UNSIGNED_INT_2_10_10_10_REV", t[t.UNSIGNED_INT_24_8 = 34042] = "UNSIGNED_INT_24_8", t[t.UNSIGNED_INT_5_9_9_9_REV = 35902] = "UNSIGNED_INT_5_9_9_9_REV", t[t.BYTE = 5120] = "BYTE", t[t.SHORT = 5122] = "SHORT", t[t.INT = 5124] = "INT", t[t.FLOAT = 5126] = "FLOAT", t[t.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV", t[t.HALF_FLOAT = 36193] = "HALF_FLOAT"
                }(c || (c = {})),
                function(t) {
                    t[t.FLOAT = 0] = "FLOAT", t[t.INT = 1] = "INT", t[t.UINT = 2] = "UINT"
                }(f || (f = {})),
                function(t) {
                    t[t.NEAREST = 0] = "NEAREST", t[t.LINEAR = 1] = "LINEAR"
                }(l || (l = {})),
                function(t) {
                    t[t.CLAMP = 33071] = "CLAMP", t[t.REPEAT = 10497] = "REPEAT", t[t.MIRRORED_REPEAT = 33648] = "MIRRORED_REPEAT"
                }(d || (d = {})),
                function(t) {
                    t[t.OFF = 0] = "OFF", t[t.POW2 = 1] = "POW2", t[t.ON = 2] = "ON", t[t.ON_MANUAL = 3] = "ON_MANUAL"
                }(p || (p = {})),
                function(t) {
                    t[t.NPM = 0] = "NPM", t[t.UNPACK = 1] = "UNPACK", t[t.PMA = 2] = "PMA", t[t.NO_PREMULTIPLIED_ALPHA = 0] = "NO_PREMULTIPLIED_ALPHA", t[t.PREMULTIPLY_ON_UPLOAD = 1] = "PREMULTIPLY_ON_UPLOAD", t[t.PREMULTIPLY_ALPHA = 2] = "PREMULTIPLY_ALPHA", t[t.PREMULTIPLIED_ALPHA = 2] = "PREMULTIPLIED_ALPHA"
                }(_ || (_ = {})),
                function(t) {
                    t[t.NO = 0] = "NO", t[t.YES = 1] = "YES", t[t.AUTO = 2] = "AUTO", t[t.BLEND = 0] = "BLEND", t[t.CLEAR = 1] = "CLEAR", t[t.BLIT = 2] = "BLIT"
                }(v || (v = {})),
                function(t) {
                    t[t.AUTO = 0] = "AUTO", t[t.MANUAL = 1] = "MANUAL"
                }(m || (m = {})),
                function(t) {
                    t.LOW = "lowp", t.MEDIUM = "mediump", t.HIGH = "highp"
                }(y || (y = {})),
                function(t) {
                    t[t.NONE = 0] = "NONE", t[t.SCISSOR = 1] = "SCISSOR", t[t.STENCIL = 2] = "STENCIL", t[t.SPRITE = 3] = "SPRITE"
                }(g || (g = {})),
                function(t) {
                    t[t.NONE = 0] = "NONE", t[t.LOW = 2] = "LOW", t[t.MEDIUM = 4] = "MEDIUM", t[t.HIGH = 8] = "HIGH"
                }(E || (E = {})),
                function(t) {
                    t[t.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER", t[t.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER", t[t.UNIFORM_BUFFER = 35345] = "UNIFORM_BUFFER"
                }(T || (T = {}))
        },
        6710: function(t, e, r) {
            "use strict";
            r.d(e, {
                VL: function() {
                    return m
                },
                a$: function() {
                    return fe
                },
                JZ: function() {
                    return ve
                },
                Bv: function() {
                    return ge
                },
                Ie: function() {
                    return le
                },
                lW: function() {
                    return G
                },
                wn: function() {
                    return Lt
                },
                ZX: function() {
                    return V
                },
                bO: function() {
                    return J
                },
                $r: function() {
                    return Nt
                },
                ud: function() {
                    return z
                },
                TI: function() {
                    return U
                },
                Th: function() {
                    return he
                },
                ex: function() {
                    return Pt
                },
                ZM: function() {
                    return Ct
                },
                xE: function() {
                    return M
                },
                UX: function() {
                    return Ut
                },
                oo: function() {
                    return q
                },
                e6: function() {
                    return ue
                },
                Y9: function() {
                    return ce
                }
            });
            var i = r(9319),
                n = r(1680),
                o = r(8942),
                s = function() {
                    function t(t) {
                        this.items = [], this._name = t, this._aliasCount = 0
                    }
                    return t.prototype.emit = function(t, e, r, i, n, o, s, a) {
                        if (arguments.length > 8) throw new Error("max arguments reached");
                        var h = this,
                            u = h.name,
                            c = h.items;
                        this._aliasCount++;
                        for (var f = 0, l = c.length; f < l; f++) c[f][u](t, e, r, i, n, o, s, a);
                        return c === this.items && this._aliasCount--, this
                    }, t.prototype.ensureNonAliasedItems = function() {
                        this._aliasCount > 0 && this.items.length > 1 && (this._aliasCount = 0, this.items = this.items.slice(0))
                    }, t.prototype.add = function(t) {
                        return t[this._name] && (this.ensureNonAliasedItems(), this.remove(t), this.items.push(t)), this
                    }, t.prototype.remove = function(t) {
                        var e = this.items.indexOf(t);
                        return -1 !== e && (this.ensureNonAliasedItems(), this.items.splice(e, 1)), this
                    }, t.prototype.contains = function(t) {
                        return -1 !== this.items.indexOf(t)
                    }, t.prototype.removeAll = function() {
                        return this.ensureNonAliasedItems(), this.items.length = 0, this
                    }, t.prototype.destroy = function() {
                        this.removeAll(), this.items = null, this._name = null
                    }, Object.defineProperty(t.prototype, "empty", {
                        get: function() {
                            return 0 === this.items.length
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "name", {
                        get: function() {
                            return this._name
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }();
            Object.defineProperties(s.prototype, {
                dispatch: {
                    value: s.prototype.emit
                },
                run: {
                    value: s.prototype.emit
                }
            });
            var a = r(6679),
                h = r(9658);
            i.X.PREFER_ENV = o.tq.any ? n.Vi.WEBGL : n.Vi.WEBGL2, i.X.STRICT_TEXTURE_CACHE = !1;
            var u = [];

            function c(t, e) {
                if (!t) return null;
                var r = "";
                if ("string" == typeof t) {
                    var i = /\.(\w{3,4})(?:$|\?|#)/i.exec(t);
                    i && (r = i[1].toLowerCase())
                }
                for (var n = u.length - 1; n >= 0; --n) {
                    var o = u[n];
                    if (o.test && o.test(t, r)) return new o(t, e)
                }
                throw new Error("Unrecognized source type to auto-detect Resource")
            }
            var f = function(t, e) {
                return f = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                }, f(t, e)
            };

            function l(t, e) {
                function r() {
                    this.constructor = t
                }
                f(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
            }
            var d = function() {
                    return d = Object.assign || function(t) {
                        for (var e, r = arguments, i = 1, n = arguments.length; i < n; i++)
                            for (var o in e = r[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        return t
                    }, d.apply(this, arguments)
                },
                p = function() {
                    function t(t, e) {
                        void 0 === t && (t = 0), void 0 === e && (e = 0), this._width = t, this._height = e, this.destroyed = !1, this.internal = !1, this.onResize = new s("setRealSize"), this.onUpdate = new s("update"), this.onError = new s("onError")
                    }
                    return t.prototype.bind = function(t) {
                        this.onResize.add(t), this.onUpdate.add(t), this.onError.add(t), (this._width || this._height) && this.onResize.emit(this._width, this._height)
                    }, t.prototype.unbind = function(t) {
                        this.onResize.remove(t), this.onUpdate.remove(t), this.onError.remove(t)
                    }, t.prototype.resize = function(t, e) {
                        t === this._width && e === this._height || (this._width = t, this._height = e, this.onResize.emit(t, e))
                    }, Object.defineProperty(t.prototype, "valid", {
                        get: function() {
                            return !!this._width && !!this._height
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.update = function() {
                        this.destroyed || this.onUpdate.emit()
                    }, t.prototype.load = function() {
                        return Promise.resolve(this)
                    }, Object.defineProperty(t.prototype, "width", {
                        get: function() {
                            return this._width
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "height", {
                        get: function() {
                            return this._height
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.style = function(t, e, r) {
                        return !1
                    }, t.prototype.dispose = function() {}, t.prototype.destroy = function() {
                        this.destroyed || (this.destroyed = !0, this.dispose(), this.onError.removeAll(), this.onError = null, this.onResize.removeAll(), this.onResize = null, this.onUpdate.removeAll(), this.onUpdate = null)
                    }, t.test = function(t, e) {
                        return !1
                    }, t
                }(),
                _ = function(t) {
                    function e(e, r) {
                        var i = this,
                            n = r || {},
                            o = n.width,
                            s = n.height;
                        if (!o || !s) throw new Error("BufferResource width or height invalid");
                        return (i = t.call(this, o, s) || this).data = e, i
                    }
                    return l(e, t), e.prototype.upload = function(t, e, r) {
                        var i = t.gl;
                        i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.alphaMode === n.iw.UNPACK);
                        var o = e.realWidth,
                            s = e.realHeight;
                        return r.width === o && r.height === s ? i.texSubImage2D(e.target, 0, 0, 0, o, s, e.format, r.type, this.data) : (r.width = o, r.height = s, i.texImage2D(e.target, 0, r.internalFormat, o, s, 0, e.format, r.type, this.data)), !0
                    }, e.prototype.dispose = function() {
                        this.data = null
                    }, e.test = function(t) {
                        return t instanceof Float32Array || t instanceof Uint8Array || t instanceof Uint32Array
                    }, e
                }(p),
                v = {
                    scaleMode: n.aH.NEAREST,
                    format: n.I2.RGBA,
                    alphaMode: n.iw.NPM
                },
                m = function(t) {
                    function e(e, r) {
                        void 0 === e && (e = null), void 0 === r && (r = null);
                        var s = t.call(this) || this,
                            a = (r = r || {}).alphaMode,
                            h = r.mipmap,
                            u = r.anisotropicLevel,
                            f = r.scaleMode,
                            l = r.width,
                            d = r.height,
                            _ = r.wrapMode,
                            v = r.format,
                            m = r.type,
                            y = r.target,
                            g = r.resolution,
                            E = r.resourceOptions;
                        return !e || e instanceof p || ((e = c(e, E)).internal = !0), s.resolution = g || i.X.RESOLUTION, s.width = Math.round((l || 0) * s.resolution) / s.resolution, s.height = Math.round((d || 0) * s.resolution) / s.resolution, s._mipmap = void 0 !== h ? h : i.X.MIPMAP_TEXTURES, s.anisotropicLevel = void 0 !== u ? u : i.X.ANISOTROPIC_LEVEL, s._wrapMode = _ || i.X.WRAP_MODE, s._scaleMode = void 0 !== f ? f : i.X.SCALE_MODE, s.format = v || n.I2.RGBA, s.type = m || n.vK.UNSIGNED_BYTE, s.target = y || n.sp.TEXTURE_2D, s.alphaMode = void 0 !== a ? a : n.iw.UNPACK, s.uid = (0, o.hQ)(), s.touched = 0, s.isPowerOfTwo = !1, s._refreshPOT(), s._glTextures = {}, s.dirtyId = 0, s.dirtyStyleId = 0, s.cacheId = null, s.valid = l > 0 && d > 0, s.textureCacheIds = [], s.destroyed = !1, s.resource = null, s._batchEnabled = 0, s._batchLocation = 0, s.parentTextureArray = null, s.setResource(e), s
                    }
                    return l(e, t), Object.defineProperty(e.prototype, "realWidth", {
                        get: function() {
                            return Math.round(this.width * this.resolution)
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "realHeight", {
                        get: function() {
                            return Math.round(this.height * this.resolution)
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "mipmap", {
                        get: function() {
                            return this._mipmap
                        },
                        set: function(t) {
                            this._mipmap !== t && (this._mipmap = t, this.dirtyStyleId++)
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "scaleMode", {
                        get: function() {
                            return this._scaleMode
                        },
                        set: function(t) {
                            this._scaleMode !== t && (this._scaleMode = t, this.dirtyStyleId++)
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "wrapMode", {
                        get: function() {
                            return this._wrapMode
                        },
                        set: function(t) {
                            this._wrapMode !== t && (this._wrapMode = t, this.dirtyStyleId++)
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.prototype.setStyle = function(t, e) {
                        var r;
                        return void 0 !== t && t !== this.scaleMode && (this.scaleMode = t, r = !0), void 0 !== e && e !== this.mipmap && (this.mipmap = e, r = !0), r && this.dirtyStyleId++, this
                    }, e.prototype.setSize = function(t, e, r) {
                        return r = r || this.resolution, this.setRealSize(t * r, e * r, r)
                    }, e.prototype.setRealSize = function(t, e, r) {
                        return this.resolution = r || this.resolution, this.width = Math.round(t) / this.resolution, this.height = Math.round(e) / this.resolution, this._refreshPOT(), this.update(), this
                    }, e.prototype._refreshPOT = function() {
                        this.isPowerOfTwo = (0, o.wv)(this.realWidth) && (0, o.wv)(this.realHeight)
                    }, e.prototype.setResolution = function(t) {
                        var e = this.resolution;
                        return e === t || (this.resolution = t, this.valid && (this.width = Math.round(this.width * e) / t, this.height = Math.round(this.height * e) / t, this.emit("update", this)), this._refreshPOT()), this
                    }, e.prototype.setResource = function(t) {
                        if (this.resource === t) return this;
                        if (this.resource) throw new Error("Resource can be set only once");
                        return t.bind(this), this.resource = t, this
                    }, e.prototype.update = function() {
                        this.valid ? (this.dirtyId++, this.dirtyStyleId++, this.emit("update", this)) : this.width > 0 && this.height > 0 && (this.valid = !0, this.emit("loaded", this), this.emit("update", this))
                    }, e.prototype.onError = function(t) {
                        this.emit("error", this, t)
                    }, e.prototype.destroy = function() {
                        this.resource && (this.resource.unbind(this), this.resource.internal && this.resource.destroy(), this.resource = null), this.cacheId && (delete o.V8[this.cacheId], delete o.kN[this.cacheId], this.cacheId = null), this.dispose(), e.removeFromCache(this), this.textureCacheIds = null, this.destroyed = !0
                    }, e.prototype.dispose = function() {
                        this.emit("dispose", this)
                    }, e.prototype.castToBaseTexture = function() {
                        return this
                    }, e.from = function(t, r, n) {
                        void 0 === n && (n = i.X.STRICT_TEXTURE_CACHE);
                        var s = "string" == typeof t,
                            a = null;
                        if (s) a = t;
                        else {
                            if (!t._pixiId) {
                                var h = r && r.pixiIdPrefix || "pixiid";
                                t._pixiId = h + "_" + (0, o.hQ)()
                            }
                            a = t._pixiId
                        }
                        var u = o.V8[a];
                        if (s && n && !u) throw new Error('The cacheId "' + a + '" does not exist in BaseTextureCache.');
                        return u || ((u = new e(t, r)).cacheId = a, e.addToCache(u, a)), u
                    }, e.fromBuffer = function(t, r, i, o) {
                        t = t || new Float32Array(r * i * 4);
                        var s = new _(t, {
                                width: r,
                                height: i
                            }),
                            a = t instanceof Float32Array ? n.vK.FLOAT : n.vK.UNSIGNED_BYTE;
                        return new e(s, Object.assign(v, o || {
                            width: r,
                            height: i,
                            type: a
                        }))
                    }, e.addToCache = function(t, e) {
                        e && (-1 === t.textureCacheIds.indexOf(e) && t.textureCacheIds.push(e), o.V8[e], o.V8[e] = t)
                    }, e.removeFromCache = function(t) {
                        if ("string" == typeof t) {
                            var e = o.V8[t];
                            if (e) {
                                var r = e.textureCacheIds.indexOf(t);
                                return r > -1 && e.textureCacheIds.splice(r, 1), delete o.V8[t], e
                            }
                        } else if (t && t.textureCacheIds) {
                            for (var i = 0; i < t.textureCacheIds.length; ++i) delete o.V8[t.textureCacheIds[i]];
                            return t.textureCacheIds.length = 0, t
                        }
                        return null
                    }, e._globalBatch = 0, e
                }(o.vp),
                y = function(t) {
                    function e(e, r) {
                        var i = this,
                            n = r || {},
                            o = n.width,
                            s = n.height;
                        (i = t.call(this, o, s) || this).items = [], i.itemDirtyIds = [];
                        for (var a = 0; a < e; a++) {
                            var h = new m;
                            i.items.push(h), i.itemDirtyIds.push(-2)
                        }
                        return i.length = e, i._load = null, i.baseTexture = null, i
                    }
                    return l(e, t), e.prototype.initFromArray = function(t, e) {
                        for (var r = 0; r < this.length; r++) t[r] && (t[r].castToBaseTexture ? this.addBaseTextureAt(t[r].castToBaseTexture(), r) : t[r] instanceof p ? this.addResourceAt(t[r], r) : this.addResourceAt(c(t[r], e), r))
                    }, e.prototype.dispose = function() {
                        for (var t = 0, e = this.length; t < e; t++) this.items[t].destroy();
                        this.items = null, this.itemDirtyIds = null, this._load = null
                    }, e.prototype.addResourceAt = function(t, e) {
                        if (!this.items[e]) throw new Error("Index " + e + " is out of bounds");
                        return t.valid && !this.valid && this.resize(t.width, t.height), this.items[e].setResource(t), this
                    }, e.prototype.bind = function(e) {
                        if (null !== this.baseTexture) throw new Error("Only one base texture per TextureArray is allowed");
                        t.prototype.bind.call(this, e);
                        for (var r = 0; r < this.length; r++) this.items[r].parentTextureArray = e, this.items[r].on("update", e.update, e)
                    }, e.prototype.unbind = function(e) {
                        t.prototype.unbind.call(this, e);
                        for (var r = 0; r < this.length; r++) this.items[r].parentTextureArray = null, this.items[r].off("update", e.update, e)
                    }, e.prototype.load = function() {
                        var t = this;
                        if (this._load) return this._load;
                        var e = this.items.map((function(t) {
                            return t.resource
                        })).filter((function(t) {
                            return t
                        })).map((function(t) {
                            return t.load()
                        }));
                        return this._load = Promise.all(e).then((function() {
                            var e = t.items[0],
                                r = e.realWidth,
                                i = e.realHeight;
                            return t.resize(r, i), Promise.resolve(t)
                        })), this._load
                    }, e
                }(p),
                g = function(t) {
                    function e(e, r) {
                        var i, n, o = this,
                            s = r || {},
                            a = s.width,
                            h = s.height;
                        return Array.isArray(e) ? (i = e, n = e.length) : n = e, o = t.call(this, n, {
                            width: a,
                            height: h
                        }) || this, i && o.initFromArray(i, r), o
                    }
                    return l(e, t), e.prototype.addBaseTextureAt = function(t, e) {
                        if (!t.resource) throw new Error("ArrayResource does not support RenderTexture");
                        return this.addResourceAt(t.resource, e), this
                    }, e.prototype.bind = function(e) {
                        t.prototype.bind.call(this, e), e.target = n.sp.TEXTURE_2D_ARRAY
                    }, e.prototype.upload = function(t, e, r) {
                        var i = this,
                            n = i.length,
                            o = i.itemDirtyIds,
                            s = i.items,
                            a = t.gl;
                        r.dirtyId < 0 && a.texImage3D(a.TEXTURE_2D_ARRAY, 0, r.internalFormat, this._width, this._height, n, 0, e.format, r.type, null);
                        for (var h = 0; h < n; h++) {
                            var u = s[h];
                            o[h] < u.dirtyId && (o[h] = u.dirtyId, u.valid && a.texSubImage3D(a.TEXTURE_2D_ARRAY, 0, 0, 0, h, u.resource.width, u.resource.height, 1, e.format, r.type, u.resource.source))
                        }
                        return !0
                    }, e
                }(y),
                E = function(t) {
                    function e(e) {
                        var r = this,
                            i = e,
                            n = i.naturalWidth || i.videoWidth || i.width,
                            o = i.naturalHeight || i.videoHeight || i.height;
                        return (r = t.call(this, n, o) || this).source = e, r.noSubImage = !1, r
                    }
                    return l(e, t), e.crossOrigin = function(t, e, r) {
                        void 0 === r && 0 !== e.indexOf("data:") ? t.crossOrigin = (0, o.Qq)(e) : !1 !== r && (t.crossOrigin = "string" == typeof r ? r : "anonymous")
                    }, e.prototype.upload = function(t, e, r, i) {
                        var o = t.gl,
                            s = e.realWidth,
                            a = e.realHeight;
                        if ((i = i || this.source) instanceof HTMLImageElement) {
                            if (!i.complete || 0 === i.naturalWidth) return !1
                        } else if (i instanceof HTMLVideoElement && i.readyState <= 1) return !1;
                        return o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.alphaMode === n.iw.UNPACK), this.noSubImage || e.target !== o.TEXTURE_2D || r.width !== s || r.height !== a ? (r.width = s, r.height = a, o.texImage2D(e.target, 0, r.internalFormat, e.format, r.type, i)) : o.texSubImage2D(o.TEXTURE_2D, 0, 0, 0, e.format, r.type, i), !0
                    }, e.prototype.update = function() {
                        if (!this.destroyed) {
                            var e = this.source,
                                r = e.naturalWidth || e.videoWidth || e.width,
                                i = e.naturalHeight || e.videoHeight || e.height;
                            this.resize(r, i), t.prototype.update.call(this)
                        }
                    }, e.prototype.dispose = function() {
                        this.source = null
                    }, e
                }(p),
                T = function(t) {
                    function e(e) {
                        return t.call(this, e) || this
                    }
                    return l(e, t), e.test = function(t) {
                        var e = globalThis.OffscreenCanvas;
                        return !!(e && t instanceof e) || globalThis.HTMLCanvasElement && t instanceof HTMLCanvasElement
                    }, e
                }(E),
                x = function(t) {
                    function e(r, i) {
                        var o = this,
                            s = i || {},
                            a = s.width,
                            h = s.height,
                            u = s.autoLoad,
                            c = s.linkBaseTexture;
                        if (r && r.length !== e.SIDES) throw new Error("Invalid length. Got " + r.length + ", expected 6");
                        o = t.call(this, 6, {
                            width: a,
                            height: h
                        }) || this;
                        for (var f = 0; f < e.SIDES; f++) o.items[f].target = n.sp.TEXTURE_CUBE_MAP_POSITIVE_X + f;
                        return o.linkBaseTexture = !1 !== c, r && o.initFromArray(r, i), !1 !== u && o.load(), o
                    }
                    return l(e, t), e.prototype.bind = function(e) {
                        t.prototype.bind.call(this, e), e.target = n.sp.TEXTURE_CUBE_MAP
                    }, e.prototype.addBaseTextureAt = function(t, e, r) {
                        if (!this.items[e]) throw new Error("Index " + e + " is out of bounds");
                        if (!this.linkBaseTexture || t.parentTextureArray || Object.keys(t._glTextures).length > 0) {
                            if (!t.resource) throw new Error("CubeResource does not support copying of renderTexture.");
                            this.addResourceAt(t.resource, e)
                        } else t.target = n.sp.TEXTURE_CUBE_MAP_POSITIVE_X + e, t.parentTextureArray = this.baseTexture, this.items[e] = t;
                        return t.valid && !this.valid && this.resize(t.realWidth, t.realHeight), this.items[e] = t, this
                    }, e.prototype.upload = function(t, r, i) {
                        for (var n = this.itemDirtyIds, o = 0; o < e.SIDES; o++) {
                            var s = this.items[o];
                            n[o] < s.dirtyId && (s.valid && s.resource ? (s.resource.upload(t, s, i), n[o] = s.dirtyId) : n[o] < -1 && (t.gl.texImage2D(s.target, 0, i.internalFormat, r.realWidth, r.realHeight, 0, r.format, i.type, null), n[o] = -1))
                        }
                        return !0
                    }, e.test = function(t) {
                        return Array.isArray(t) && t.length === e.SIDES
                    }, e.SIDES = 6, e
                }(y),
                b = function(t) {
                    function e(e, r) {
                        var n = this;
                        if (r = r || {}, !(e instanceof HTMLImageElement)) {
                            var o = new Image;
                            E.crossOrigin(o, e, r.crossorigin), o.src = e, e = o
                        }
                        return n = t.call(this, e) || this, !e.complete && n._width && n._height && (n._width = 0, n._height = 0), n.url = e.src, n._process = null, n.preserveBitmap = !1, n.createBitmap = (void 0 !== r.createBitmap ? r.createBitmap : i.X.CREATE_IMAGE_BITMAP) && !!globalThis.createImageBitmap, n.alphaMode = "number" == typeof r.alphaMode ? r.alphaMode : null, n.bitmap = null, n._load = null, !1 !== r.autoLoad && n.load(), n
                    }
                    return l(e, t), e.prototype.load = function(t) {
                        var e = this;
                        return this._load || (void 0 !== t && (this.createBitmap = t), this._load = new Promise((function(t, r) {
                            var i = e.source;
                            e.url = i.src;
                            var n = function() {
                                e.destroyed || (i.onload = null, i.onerror = null, e.resize(i.width, i.height), e._load = null, e.createBitmap ? t(e.process()) : t(e))
                            };
                            i.complete && i.src ? n() : (i.onload = n, i.onerror = function(t) {
                                r(t), e.onError.emit(t)
                            })
                        }))), this._load
                    }, e.prototype.process = function() {
                        var t = this,
                            e = this.source;
                        if (null !== this._process) return this._process;
                        if (null !== this.bitmap || !globalThis.createImageBitmap) return Promise.resolve(this);
                        var r = globalThis.createImageBitmap,
                            i = !e.crossOrigin || "anonymous" === e.crossOrigin;
                        return this._process = fetch(e.src, {
                            mode: i ? "cors" : "no-cors"
                        }).then((function(t) {
                            return t.blob()
                        })).then((function(i) {
                            return r(i, 0, 0, e.width, e.height, {
                                premultiplyAlpha: t.alphaMode === n.iw.UNPACK ? "premultiply" : "none"
                            })
                        })).then((function(e) {
                            return t.destroyed ? Promise.reject() : (t.bitmap = e, t.update(), t._process = null, Promise.resolve(t))
                        })), this._process
                    }, e.prototype.upload = function(e, r, i) {
                        if ("number" == typeof this.alphaMode && (r.alphaMode = this.alphaMode), !this.createBitmap) return t.prototype.upload.call(this, e, r, i);
                        if (!this.bitmap && (this.process(), !this.bitmap)) return !1;
                        if (t.prototype.upload.call(this, e, r, i, this.bitmap), !this.preserveBitmap) {
                            var n = !0,
                                o = r._glTextures;
                            for (var s in o) {
                                var a = o[s];
                                if (a !== i && a.dirtyId !== r.dirtyId) {
                                    n = !1;
                                    break
                                }
                            }
                            n && (this.bitmap.close && this.bitmap.close(), this.bitmap = null)
                        }
                        return !0
                    }, e.prototype.dispose = function() {
                        this.source.onload = null, this.source.onerror = null, t.prototype.dispose.call(this), this.bitmap && (this.bitmap.close(), this.bitmap = null), this._process = null, this._load = null
                    }, e.test = function(t) {
                        return "string" == typeof t || t instanceof HTMLImageElement
                    }, e
                }(E),
                A = function(t) {
                    function e(e, r) {
                        var i = this;
                        return r = r || {}, (i = t.call(this, document.createElement("canvas")) || this)._width = 0, i._height = 0, i.svg = e, i.scale = r.scale || 1, i._overrideWidth = r.width, i._overrideHeight = r.height, i._resolve = null, i._crossorigin = r.crossorigin, i._load = null, !1 !== r.autoLoad && i.load(), i
                    }
                    return l(e, t), e.prototype.load = function() {
                        var t = this;
                        return this._load || (this._load = new Promise((function(r) {
                            if (t._resolve = function() {
                                    t.resize(t.source.width, t.source.height), r(t)
                                }, e.SVG_XML.test(t.svg.trim())) {
                                if (!btoa) throw new Error("Your browser doesn't support base64 conversions.");
                                t.svg = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(t.svg)))
                            }
                            t._loadSvg()
                        }))), this._load
                    }, e.prototype._loadSvg = function() {
                        var t = this,
                            e = new Image;
                        E.crossOrigin(e, this.svg, this._crossorigin), e.src = this.svg, e.onerror = function(r) {
                            t._resolve && (e.onerror = null, t.onError.emit(r))
                        }, e.onload = function() {
                            if (t._resolve) {
                                var r = e.width,
                                    i = e.height;
                                if (!r || !i) throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");
                                var n = r * t.scale,
                                    s = i * t.scale;
                                (t._overrideWidth || t._overrideHeight) && (n = t._overrideWidth || t._overrideHeight / i * r, s = t._overrideHeight || t._overrideWidth / r * i), n = Math.round(n), s = Math.round(s);
                                var a = t.source;
                                a.width = n, a.height = s, a._pixiId = "canvas_" + (0, o.hQ)(), a.getContext("2d").drawImage(e, 0, 0, r, i, 0, 0, n, s), t._resolve(), t._resolve = null
                            }
                        }
                    }, e.getSize = function(t) {
                        var r = e.SVG_SIZE.exec(t),
                            i = {};
                        return r && (i[r[1]] = Math.round(parseFloat(r[3])), i[r[5]] = Math.round(parseFloat(r[7]))), i
                    }, e.prototype.dispose = function() {
                        t.prototype.dispose.call(this), this._resolve = null, this._crossorigin = null
                    }, e.test = function(t, r) {
                        return "svg" === r || "string" == typeof t && /^data:image\/svg\+xml(;(charset=utf8|utf8))?;base64/.test(t) || "string" == typeof t && e.SVG_XML.test(t)
                    }, e.SVG_XML = /^(<\?xml[^?]+\?>)?\s*(<!--[^(-->)]*-->)?\s*\<svg/m, e.SVG_SIZE = /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i, e
                }(E),
                R = function(t) {
                    function e(r, i) {
                        var n = this;
                        if (i = i || {}, !(r instanceof HTMLVideoElement)) {
                            var o = document.createElement("video");
                            o.setAttribute("preload", "auto"), o.setAttribute("webkit-playsinline", ""), o.setAttribute("playsinline", ""), "string" == typeof r && (r = [r]);
                            var s = r[0].src || r[0];
                            E.crossOrigin(o, s, i.crossorigin);
                            for (var a = 0; a < r.length; ++a) {
                                var h = document.createElement("source"),
                                    u = r[a],
                                    c = u.src,
                                    f = u.mime,
                                    l = (c = c || r[a]).split("?").shift().toLowerCase(),
                                    d = l.slice(l.lastIndexOf(".") + 1);
                                f = f || e.MIME_TYPES[d] || "video/" + d, h.src = c, h.type = f, o.appendChild(h)
                            }
                            r = o
                        }
                        return (n = t.call(this, r) || this).noSubImage = !0, n._autoUpdate = !0, n._isConnectedToTicker = !1, n._updateFPS = i.updateFPS || 0, n._msToNextUpdate = 0, n.autoPlay = !1 !== i.autoPlay, n._load = null, n._resolve = null, n._onCanPlay = n._onCanPlay.bind(n), n._onError = n._onError.bind(n), !1 !== i.autoLoad && n.load(), n
                    }
                    return l(e, t), e.prototype.update = function(e) {
                        if (!this.destroyed) {
                            var r = a.vB.shared.elapsedMS * this.source.playbackRate;
                            this._msToNextUpdate = Math.floor(this._msToNextUpdate - r), (!this._updateFPS || this._msToNextUpdate <= 0) && (t.prototype.update.call(this), this._msToNextUpdate = this._updateFPS ? Math.floor(1e3 / this._updateFPS) : 0)
                        }
                    }, e.prototype.load = function() {
                        var t = this;
                        if (this._load) return this._load;
                        var e = this.source;
                        return (e.readyState === e.HAVE_ENOUGH_DATA || e.readyState === e.HAVE_FUTURE_DATA) && e.width && e.height && (e.complete = !0), e.addEventListener("play", this._onPlayStart.bind(this)), e.addEventListener("pause", this._onPlayStop.bind(this)), this._isSourceReady() ? this._onCanPlay() : (e.addEventListener("canplay", this._onCanPlay), e.addEventListener("canplaythrough", this._onCanPlay), e.addEventListener("error", this._onError, !0)), this._load = new Promise((function(r) {
                            t.valid ? r(t) : (t._resolve = r, e.load())
                        })), this._load
                    }, e.prototype._onError = function(t) {
                        this.source.removeEventListener("error", this._onError, !0), this.onError.emit(t)
                    }, e.prototype._isSourcePlaying = function() {
                        var t = this.source;
                        return t.currentTime > 0 && !1 === t.paused && !1 === t.ended && t.readyState > 2
                    }, e.prototype._isSourceReady = function() {
                        var t = this.source;
                        return 3 === t.readyState || 4 === t.readyState
                    }, e.prototype._onPlayStart = function() {
                        this.valid || this._onCanPlay(), this.autoUpdate && !this._isConnectedToTicker && (a.vB.shared.add(this.update, this), this._isConnectedToTicker = !0)
                    }, e.prototype._onPlayStop = function() {
                        this._isConnectedToTicker && (a.vB.shared.remove(this.update, this), this._isConnectedToTicker = !1)
                    }, e.prototype._onCanPlay = function() {
                        var t = this.source;
                        t.removeEventListener("canplay", this._onCanPlay), t.removeEventListener("canplaythrough", this._onCanPlay);
                        var e = this.valid;
                        this.resize(t.videoWidth, t.videoHeight), !e && this._resolve && (this._resolve(this), this._resolve = null), this._isSourcePlaying() ? this._onPlayStart() : this.autoPlay && t.play()
                    }, e.prototype.dispose = function() {
                        this._isConnectedToTicker && (a.vB.shared.remove(this.update, this), this._isConnectedToTicker = !1);
                        var e = this.source;
                        e && (e.removeEventListener("error", this._onError, !0), e.pause(), e.src = "", e.load()), t.prototype.dispose.call(this)
                    }, Object.defineProperty(e.prototype, "autoUpdate", {
                        get: function() {
                            return this._autoUpdate
                        },
                        set: function(t) {
                            t !== this._autoUpdate && (this._autoUpdate = t, !this._autoUpdate && this._isConnectedToTicker ? (a.vB.shared.remove(this.update, this), this._isConnectedToTicker = !1) : this._autoUpdate && !this._isConnectedToTicker && this._isSourcePlaying() && (a.vB.shared.add(this.update, this), this._isConnectedToTicker = !0))
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "updateFPS", {
                        get: function() {
                            return this._updateFPS
                        },
                        set: function(t) {
                            t !== this._updateFPS && (this._updateFPS = t)
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.test = function(t, r) {
                        return globalThis.HTMLVideoElement && t instanceof HTMLVideoElement || e.TYPES.indexOf(r) > -1
                    }, e.TYPES = ["mp4", "m4v", "webm", "ogg", "ogv", "h264", "avi", "mov"], e.MIME_TYPES = {
                        ogv: "video/ogg",
                        mov: "video/quicktime",
                        m4v: "video/mp4"
                    }, e
                }(E),
                I = function(t) {
                    function e(e) {
                        return t.call(this, e) || this
                    }
                    return l(e, t), e.test = function(t) {
                        return !!globalThis.createImageBitmap && t instanceof ImageBitmap
                    }, e
                }(E);
            u.push(b, I, T, R, A, _, x, g);
            var S = {
                    __proto__: null,
                    Resource: p,
                    BaseImageResource: E,
                    INSTALLED: u,
                    autoDetectResource: c,
                    AbstractMultiResource: y,
                    ArrayResource: g,
                    BufferResource: _,
                    CanvasResource: T,
                    CubeResource: x,
                    ImageResource: b,
                    SVGResource: A,
                    VideoResource: R,
                    ImageBitmapResource: I
                },
                O = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return l(e, t), e.prototype.upload = function(t, e, r) {
                        var i = t.gl;
                        i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.alphaMode === n.iw.UNPACK);
                        var o = e.realWidth,
                            s = e.realHeight;
                        return r.width === o && r.height === s ? i.texSubImage2D(e.target, 0, 0, 0, o, s, e.format, r.type, this.data) : (r.width = o, r.height = s, i.texImage2D(e.target, 0, r.internalFormat, o, s, 0, e.format, r.type, this.data)), !0
                    }, e
                }(_),
                w = function() {
                    function t(t, e) {
                        this.width = Math.round(t || 100), this.height = Math.round(e || 100), this.stencil = !1, this.depth = !1, this.dirtyId = 0, this.dirtyFormat = 0, this.dirtySize = 0, this.depthTexture = null, this.colorTextures = [], this.glFramebuffers = {}, this.disposeRunner = new s("disposeFramebuffer"), this.multisample = n.G5.NONE
                    }
                    return Object.defineProperty(t.prototype, "colorTexture", {
                        get: function() {
                            return this.colorTextures[0]
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.addColorTexture = function(t, e) {
                        return void 0 === t && (t = 0), this.colorTextures[t] = e || new m(null, {
                            scaleMode: n.aH.NEAREST,
                            resolution: 1,
                            mipmap: n.WB.OFF,
                            width: this.width,
                            height: this.height
                        }), this.dirtyId++, this.dirtyFormat++, this
                    }, t.prototype.addDepthTexture = function(t) {
                        return this.depthTexture = t || new m(new O(null, {
                            width: this.width,
                            height: this.height
                        }), {
                            scaleMode: n.aH.NEAREST,
                            resolution: 1,
                            width: this.width,
                            height: this.height,
                            mipmap: n.WB.OFF,
                            format: n.I2.DEPTH_COMPONENT,
                            type: n.vK.UNSIGNED_SHORT
                        }), this.dirtyId++, this.dirtyFormat++, this
                    }, t.prototype.enableDepth = function() {
                        return this.depth = !0, this.dirtyId++, this.dirtyFormat++, this
                    }, t.prototype.enableStencil = function() {
                        return this.stencil = !0, this.dirtyId++, this.dirtyFormat++, this
                    }, t.prototype.resize = function(t, e) {
                        if (t = Math.round(t), e = Math.round(e), t !== this.width || e !== this.height) {
                            this.width = t, this.height = e, this.dirtyId++, this.dirtySize++;
                            for (var r = 0; r < this.colorTextures.length; r++) {
                                var i = this.colorTextures[r],
                                    n = i.resolution;
                                i.setSize(t / n, e / n)
                            }
                            this.depthTexture && (n = this.depthTexture.resolution, this.depthTexture.setSize(t / n, e / n))
                        }
                    }, t.prototype.dispose = function() {
                        this.disposeRunner.emit(this, !1)
                    }, t.prototype.destroyDepthTexture = function() {
                        this.depthTexture && (this.depthTexture.destroy(), this.depthTexture = null, ++this.dirtyId, ++this.dirtyFormat)
                    }, t
                }(),
                N = function(t) {
                    function e(e) {
                        void 0 === e && (e = {});
                        var r = this;
                        if ("number" == typeof e) {
                            var i = arguments[0],
                                o = arguments[1],
                                s = arguments[2],
                                a = arguments[3];
                            e = {
                                width: i,
                                height: o,
                                scaleMode: s,
                                resolution: a
                            }
                        }
                        return e.width = e.width || 100, e.height = e.height || 100, e.multisample = void 0 !== e.multisample ? e.multisample : n.G5.NONE, (r = t.call(this, null, e) || this).mipmap = n.WB.OFF, r.valid = !0, r.clearColor = [0, 0, 0, 0], r.framebuffer = new w(r.realWidth, r.realHeight).addColorTexture(0, r), r.framebuffer.multisample = e.multisample, r.maskStack = [], r.filterStack = [{}], r
                    }
                    return l(e, t), e.prototype.resize = function(t, e) {
                        this.framebuffer.resize(t * this.resolution, e * this.resolution), this.setRealSize(this.framebuffer.width, this.framebuffer.height)
                    }, e.prototype.dispose = function() {
                        this.framebuffer.dispose(), t.prototype.dispose.call(this)
                    }, e.prototype.destroy = function() {
                        t.prototype.destroy.call(this), this.framebuffer.destroyDepthTexture(), this.framebuffer = null
                    }, e
                }(m),
                P = function() {
                    function t() {
                        this.x0 = 0, this.y0 = 0, this.x1 = 1, this.y1 = 0, this.x2 = 1, this.y2 = 1, this.x3 = 0, this.y3 = 1, this.uvsFloat32 = new Float32Array(8)
                    }
                    return t.prototype.set = function(t, e, r) {
                        var i = e.width,
                            n = e.height;
                        if (r) {
                            var o = t.width / 2 / i,
                                s = t.height / 2 / n,
                                a = t.x / i + o,
                                u = t.y / n + s;
                            r = h.Lv.add(r, h.Lv.NW), this.x0 = a + o * h.Lv.uX(r), this.y0 = u + s * h.Lv.uY(r), r = h.Lv.add(r, 2), this.x1 = a + o * h.Lv.uX(r), this.y1 = u + s * h.Lv.uY(r), r = h.Lv.add(r, 2), this.x2 = a + o * h.Lv.uX(r), this.y2 = u + s * h.Lv.uY(r), r = h.Lv.add(r, 2), this.x3 = a + o * h.Lv.uX(r), this.y3 = u + s * h.Lv.uY(r)
                        } else this.x0 = t.x / i, this.y0 = t.y / n, this.x1 = (t.x + t.width) / i, this.y1 = t.y / n, this.x2 = (t.x + t.width) / i, this.y2 = (t.y + t.height) / n, this.x3 = t.x / i, this.y3 = (t.y + t.height) / n;
                        this.uvsFloat32[0] = this.x0, this.uvsFloat32[1] = this.y0, this.uvsFloat32[2] = this.x1, this.uvsFloat32[3] = this.y1, this.uvsFloat32[4] = this.x2, this.uvsFloat32[5] = this.y2, this.uvsFloat32[6] = this.x3, this.uvsFloat32[7] = this.y3
                    }, t.prototype.toString = function() {
                        return "[@pixi/core:TextureUvs x0=" + this.x0 + " y0=" + this.y0 + " x1=" + this.x1 + " y1=" + this.y1 + " x2=" + this.x2 + " y2=" + this.y2 + " x3=" + this.x3 + " y3=" + this.y3 + "]"
                    }, t
                }(),
                C = new P;

            function L(t) {
                t.destroy = function() {}, t.on = function() {}, t.once = function() {}, t.emit = function() {}
            }
            var M = function(t) {
                    function e(r, i, n, o, s, a) {
                        var u = t.call(this) || this;
                        if (u.noFrame = !1, i || (u.noFrame = !0, i = new h.Ae(0, 0, 1, 1)), r instanceof e && (r = r.baseTexture), u.baseTexture = r, u._frame = i, u.trim = o, u.valid = !1, u._uvs = C, u.uvMatrix = null, u.orig = n || i, u._rotate = Number(s || 0), !0 === s) u._rotate = 2;
                        else if (u._rotate % 2 != 0) throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");
                        return u.defaultAnchor = a ? new h.E9(a.x, a.y) : new h.E9(0, 0), u._updateID = 0, u.textureCacheIds = [], r.valid ? u.noFrame ? r.valid && u.onBaseTextureUpdated(r) : u.frame = i : r.once("loaded", u.onBaseTextureUpdated, u), u.noFrame && r.on("update", u.onBaseTextureUpdated, u), u
                    }
                    return l(e, t), e.prototype.update = function() {
                        this.baseTexture.resource && this.baseTexture.resource.update()
                    }, e.prototype.onBaseTextureUpdated = function(t) {
                        if (this.noFrame) {
                            if (!this.baseTexture.valid) return;
                            this._frame.width = t.width, this._frame.height = t.height, this.valid = !0, this.updateUvs()
                        } else this.frame = this._frame;
                        this.emit("update", this)
                    }, e.prototype.destroy = function(t) {
                        if (this.baseTexture) {
                            if (t) {
                                var r = this.baseTexture.resource;
                                r && r.url && o.kN[r.url] && e.removeFromCache(r.url), this.baseTexture.destroy()
                            }
                            this.baseTexture.off("loaded", this.onBaseTextureUpdated, this), this.baseTexture.off("update", this.onBaseTextureUpdated, this), this.baseTexture = null
                        }
                        this._frame = null, this._uvs = null, this.trim = null, this.orig = null, this.valid = !1, e.removeFromCache(this), this.textureCacheIds = null
                    }, e.prototype.clone = function() {
                        var t = this._frame.clone(),
                            r = this._frame === this.orig ? t : this.orig.clone(),
                            i = new e(this.baseTexture, !this.noFrame && t, r, this.trim && this.trim.clone(), this.rotate, this.defaultAnchor);
                        return this.noFrame && (i._frame = t), i
                    }, e.prototype.updateUvs = function() {
                        this._uvs === C && (this._uvs = new P), this._uvs.set(this._frame, this.baseTexture, this.rotate), this._updateID++
                    }, e.from = function(t, r, n) {
                        void 0 === r && (r = {}), void 0 === n && (n = i.X.STRICT_TEXTURE_CACHE);
                        var s = "string" == typeof t,
                            a = null;
                        if (s) a = t;
                        else if (t instanceof m) {
                            if (!t.cacheId) {
                                var h = r && r.pixiIdPrefix || "pixiid";
                                t.cacheId = h + "-" + (0, o.hQ)(), m.addToCache(t, t.cacheId)
                            }
                            a = t.cacheId
                        } else t._pixiId || (h = r && r.pixiIdPrefix || "pixiid", t._pixiId = h + "_" + (0, o.hQ)()), a = t._pixiId;
                        var u = o.kN[a];
                        if (s && n && !u) throw new Error('The cacheId "' + a + '" does not exist in TextureCache.');
                        return u || t instanceof m ? !u && t instanceof m && (u = new e(t), e.addToCache(u, a)) : (r.resolution || (r.resolution = (0, o.fL)(t)), (u = new e(new m(t, r))).baseTexture.cacheId = a, m.addToCache(u.baseTexture, a), e.addToCache(u, a)), u
                    }, e.fromURL = function(t, r) {
                        var i = Object.assign({
                                autoLoad: !1
                            }, null == r ? void 0 : r.resourceOptions),
                            n = e.from(t, Object.assign({
                                resourceOptions: i
                            }, r), !1),
                            o = n.baseTexture.resource;
                        return n.baseTexture.valid ? Promise.resolve(n) : o.load().then((function() {
                            return Promise.resolve(n)
                        }))
                    }, e.fromBuffer = function(t, r, i, n) {
                        return new e(m.fromBuffer(t, r, i, n))
                    }, e.fromLoader = function(t, r, n, s) {
                        var a = new m(t, Object.assign({
                                scaleMode: i.X.SCALE_MODE,
                                resolution: (0, o.fL)(r)
                            }, s)),
                            h = a.resource;
                        h instanceof b && (h.url = r);
                        var u = new e(a);
                        return n || (n = r), m.addToCache(u.baseTexture, n), e.addToCache(u, n), n !== r && (m.addToCache(u.baseTexture, r), e.addToCache(u, r)), u.baseTexture.valid ? Promise.resolve(u) : new Promise((function(t) {
                            u.baseTexture.once("loaded", (function() {
                                return t(u)
                            }))
                        }))
                    }, e.addToCache = function(t, e) {
                        e && (-1 === t.textureCacheIds.indexOf(e) && t.textureCacheIds.push(e), o.kN[e], o.kN[e] = t)
                    }, e.removeFromCache = function(t) {
                        if ("string" == typeof t) {
                            var e = o.kN[t];
                            if (e) {
                                var r = e.textureCacheIds.indexOf(t);
                                return r > -1 && e.textureCacheIds.splice(r, 1), delete o.kN[t], e
                            }
                        } else if (t && t.textureCacheIds) {
                            for (var i = 0; i < t.textureCacheIds.length; ++i) o.kN[t.textureCacheIds[i]] === t && delete o.kN[t.textureCacheIds[i]];
                            return t.textureCacheIds.length = 0, t
                        }
                        return null
                    }, Object.defineProperty(e.prototype, "resolution", {
                        get: function() {
                            return this.baseTexture.resolution
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "frame", {
                        get: function() {
                            return this._frame
                        },
                        set: function(t) {
                            this._frame = t, this.noFrame = !1;
                            var e = t.x,
                                r = t.y,
                                i = t.width,
                                n = t.height,
                                o = e + i > this.baseTexture.width,
                                s = r + n > this.baseTexture.height;
                            if (o || s) {
                                var a = o && s ? "and" : "or",
                                    h = "X: " + e + " + " + i + " = " + (e + i) + " > " + this.baseTexture.width,
                                    u = "Y: " + r + " + " + n + " = " + (r + n) + " > " + this.baseTexture.height;
                                throw new Error("Texture Error: frame does not fit inside the base Texture dimensions: " + h + " " + a + " " + u)
                            }
                            this.valid = i && n && this.baseTexture.valid, this.trim || this.rotate || (this.orig = t), this.valid && this.updateUvs()
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "rotate", {
                        get: function() {
                            return this._rotate
                        },
                        set: function(t) {
                            this._rotate = t, this.valid && this.updateUvs()
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "width", {
                        get: function() {
                            return this.orig.width
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "height", {
                        get: function() {
                            return this.orig.height
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.prototype.castToBaseTexture = function() {
                        return this.baseTexture
                    }, Object.defineProperty(e, "EMPTY", {
                        get: function() {
                            return e._EMPTY || (e._EMPTY = new e(new m), L(e._EMPTY), L(e._EMPTY.baseTexture)), e._EMPTY
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e, "WHITE", {
                        get: function() {
                            if (!e._WHITE) {
                                var t = document.createElement("canvas"),
                                    r = t.getContext("2d");
                                t.width = 16, t.height = 16, r.fillStyle = "white", r.fillRect(0, 0, 16, 16), e._WHITE = new e(new m(new T(t))), L(e._WHITE), L(e._WHITE.baseTexture)
                            }
                            return e._WHITE
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e
                }(o.vp),
                U = function(t) {
                    function e(e, r) {
                        var i = t.call(this, e, r) || this;
                        return i.valid = !0, i.filterFrame = null, i.filterPoolKey = null, i.updateUvs(), i
                    }
                    return l(e, t), Object.defineProperty(e.prototype, "framebuffer", {
                        get: function() {
                            return this.baseTexture.framebuffer
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "multisample", {
                        get: function() {
                            return this.framebuffer.multisample
                        },
                        set: function(t) {
                            this.framebuffer.multisample = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.prototype.resize = function(t, e, r) {
                        void 0 === r && (r = !0);
                        var i = this.baseTexture.resolution,
                            n = Math.round(t * i) / i,
                            o = Math.round(e * i) / i;
                        this.valid = n > 0 && o > 0, this._frame.width = this.orig.width = n, this._frame.height = this.orig.height = o, r && this.baseTexture.resize(n, o), this.updateUvs()
                    }, e.prototype.setResolution = function(t) {
                        var e = this.baseTexture;
                        e.resolution !== t && (e.setResolution(t), this.resize(e.width, e.height, !1))
                    }, e.create = function(t) {
                        for (var r = arguments, i = [], n = 1; n < arguments.length; n++) i[n - 1] = r[n];
                        return "number" == typeof t && ((0, o.a1)("6.0.0", "Arguments (width, height, scaleMode, resolution) have been deprecated."), t = {
                            width: t,
                            height: i[0],
                            scaleMode: i[1],
                            resolution: i[2]
                        }), new e(new N(t))
                    }, e
                }(M),
                F = function() {
                    function t(t) {
                        this.texturePool = {}, this.textureOptions = t || {}, this.enableFullScreen = !1, this._pixelsWidth = 0, this._pixelsHeight = 0
                    }
                    return t.prototype.createTexture = function(t, e, r) {
                        void 0 === r && (r = n.G5.NONE);
                        var i = new N(Object.assign({
                            width: t,
                            height: e,
                            resolution: 1,
                            multisample: r
                        }, this.textureOptions));
                        return new U(i)
                    }, t.prototype.getOptimalTexture = function(t, e, r, i) {
                        var s;
                        void 0 === r && (r = 1), void 0 === i && (i = n.G5.NONE), t = Math.ceil(t * r - 1e-6), e = Math.ceil(e * r - 1e-6), this.enableFullScreen && t === this._pixelsWidth && e === this._pixelsHeight ? s = i > 1 ? -i : -1 : (s = ((65535 & (t = (0, o.a9)(t))) << 16 | 65535 & (e = (0, o.a9)(e))) >>> 0, i > 1 && (s += 4294967296 * i)), this.texturePool[s] || (this.texturePool[s] = []);
                        var a = this.texturePool[s].pop();
                        return a || (a = this.createTexture(t, e, i)), a.filterPoolKey = s, a.setResolution(r), a
                    }, t.prototype.getFilterTexture = function(t, e, r) {
                        var i = this.getOptimalTexture(t.width, t.height, e || t.resolution, r || n.G5.NONE);
                        return i.filterFrame = t.filterFrame, i
                    }, t.prototype.returnTexture = function(t) {
                        var e = t.filterPoolKey;
                        t.filterFrame = null, this.texturePool[e].push(t)
                    }, t.prototype.returnFilterTexture = function(t) {
                        this.returnTexture(t)
                    }, t.prototype.clear = function(t) {
                        if (t = !1 !== t)
                            for (var e in this.texturePool) {
                                var r = this.texturePool[e];
                                if (r)
                                    for (var i = 0; i < r.length; i++) r[i].destroy(!0)
                            }
                        this.texturePool = {}
                    }, t.prototype.setScreenSize = function(t) {
                        if (t.width !== this._pixelsWidth || t.height !== this._pixelsHeight) {
                            for (var e in this.enableFullScreen = t.width > 0 && t.height > 0, this.texturePool)
                                if (Number(e) < 0) {
                                    var r = this.texturePool[e];
                                    if (r)
                                        for (var i = 0; i < r.length; i++) r[i].destroy(!0);
                                    this.texturePool[e] = []
                                }
                            this._pixelsWidth = t.width, this._pixelsHeight = t.height
                        }
                    }, t.SCREEN_KEY = -1, t
                }(),
                D = function() {
                    function t(t, e, r, i, o, s, a) {
                        void 0 === e && (e = 0), void 0 === r && (r = !1), void 0 === i && (i = n.vK.FLOAT), this.buffer = t, this.size = e, this.normalized = r, this.type = i, this.stride = o, this.start = s, this.instance = a
                    }
                    return t.prototype.destroy = function() {
                        this.buffer = null
                    }, t.from = function(e, r, i, n, o) {
                        return new t(e, r, i, n, o)
                    }, t
                }(),
                B = 0,
                G = function() {
                    function t(t, e, r) {
                        void 0 === e && (e = !0), void 0 === r && (r = !1), this.data = t || new Float32Array(1), this._glBuffers = {}, this._updateID = 0, this.index = r, this.static = e, this.id = B++, this.disposeRunner = new s("disposeBuffer")
                    }
                    return t.prototype.update = function(t) {
                        t instanceof Array && (t = new Float32Array(t)), this.data = t || this.data, this._updateID++
                    }, t.prototype.dispose = function() {
                        this.disposeRunner.emit(this, !1)
                    }, t.prototype.destroy = function() {
                        this.dispose(), this.data = null
                    }, Object.defineProperty(t.prototype, "index", {
                        get: function() {
                            return this.type === n.mr.ELEMENT_ARRAY_BUFFER
                        },
                        set: function(t) {
                            this.type = t ? n.mr.ELEMENT_ARRAY_BUFFER : n.mr.ARRAY_BUFFER
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.from = function(e) {
                        return e instanceof Array && (e = new Float32Array(e)), new t(e)
                    }, t
                }(),
                k = {
                    Float32Array: Float32Array,
                    Uint32Array: Uint32Array,
                    Int32Array: Int32Array,
                    Uint8Array: Uint8Array
                },
                X = {
                    5126: 4,
                    5123: 2,
                    5121: 1
                },
                H = 0,
                j = {
                    Float32Array: Float32Array,
                    Uint32Array: Uint32Array,
                    Int32Array: Int32Array,
                    Uint8Array: Uint8Array,
                    Uint16Array: Uint16Array
                },
                V = function() {
                    function t(t, e) {
                        void 0 === t && (t = []), void 0 === e && (e = {}), this.buffers = t, this.indexBuffer = null, this.attributes = e, this.glVertexArrayObjects = {}, this.id = H++, this.instanced = !1, this.instanceCount = 1, this.disposeRunner = new s("disposeGeometry"), this.refCount = 0
                    }
                    return t.prototype.addAttribute = function(t, e, r, i, n, o, s, a) {
                        if (void 0 === r && (r = 0), void 0 === i && (i = !1), void 0 === a && (a = !1), !e) throw new Error("You must pass a buffer when creating an attribute");
                        e instanceof G || (e instanceof Array && (e = new Float32Array(e)), e = new G(e));
                        var h = t.split("|");
                        if (h.length > 1) {
                            for (var u = 0; u < h.length; u++) this.addAttribute(h[u], e, r, i, n);
                            return this
                        }
                        var c = this.buffers.indexOf(e);
                        return -1 === c && (this.buffers.push(e), c = this.buffers.length - 1), this.attributes[t] = new D(c, r, i, n, o, s, a), this.instanced = this.instanced || a, this
                    }, t.prototype.getAttribute = function(t) {
                        return this.attributes[t]
                    }, t.prototype.getBuffer = function(t) {
                        return this.buffers[this.getAttribute(t).buffer]
                    }, t.prototype.addIndex = function(t) {
                        return t instanceof G || (t instanceof Array && (t = new Uint16Array(t)), t = new G(t)), t.type = n.mr.ELEMENT_ARRAY_BUFFER, this.indexBuffer = t, -1 === this.buffers.indexOf(t) && this.buffers.push(t), this
                    }, t.prototype.getIndex = function() {
                        return this.indexBuffer
                    }, t.prototype.interleave = function() {
                        if (1 === this.buffers.length || 2 === this.buffers.length && this.indexBuffer) return this;
                        var t, e = [],
                            r = [],
                            i = new G;
                        for (t in this.attributes) {
                            var n = this.attributes[t],
                                s = this.buffers[n.buffer];
                            e.push(s.data), r.push(n.size * X[n.type] / 4), n.buffer = 0
                        }
                        for (i.data = function(t, e) {
                                for (var r = 0, i = 0, n = {}, s = 0; s < t.length; s++) i += e[s], r += t[s].length;
                                var a = new ArrayBuffer(4 * r),
                                    h = null,
                                    u = 0;
                                for (s = 0; s < t.length; s++) {
                                    var c = e[s],
                                        f = t[s],
                                        l = (0, o.u7)(f);
                                    n[l] || (n[l] = new k[l](a)), h = n[l];
                                    for (var d = 0; d < f.length; d++) h[(d / c | 0) * i + u + d % c] = f[d];
                                    u += c
                                }
                                return new Float32Array(a)
                            }(e, r), t = 0; t < this.buffers.length; t++) this.buffers[t] !== this.indexBuffer && this.buffers[t].destroy();
                        return this.buffers = [i], this.indexBuffer && this.buffers.push(this.indexBuffer), this
                    }, t.prototype.getSize = function() {
                        for (var t in this.attributes) {
                            var e = this.attributes[t];
                            return this.buffers[e.buffer].data.length / (e.stride / 4 || e.size)
                        }
                        return 0
                    }, t.prototype.dispose = function() {
                        this.disposeRunner.emit(this, !1)
                    }, t.prototype.destroy = function() {
                        this.dispose(), this.buffers = null, this.indexBuffer = null, this.attributes = null
                    }, t.prototype.clone = function() {
                        for (var e = new t, r = 0; r < this.buffers.length; r++) e.buffers[r] = new G(this.buffers[r].data.slice(0));
                        for (var r in this.attributes) {
                            var i = this.attributes[r];
                            e.attributes[r] = new D(i.buffer, i.size, i.normalized, i.type, i.stride, i.start, i.instance)
                        }
                        return this.indexBuffer && (e.indexBuffer = e.buffers[this.buffers.indexOf(this.indexBuffer)], e.indexBuffer.type = n.mr.ELEMENT_ARRAY_BUFFER), e
                    }, t.merge = function(e) {
                        for (var r, i = new t, s = [], a = [], h = [], u = 0; u < e.length; u++) {
                            r = e[u];
                            for (var c = 0; c < r.buffers.length; c++) a[c] = a[c] || 0, a[c] += r.buffers[c].data.length, h[c] = 0
                        }
                        for (u = 0; u < r.buffers.length; u++) s[u] = new(j[(0, o.u7)(r.buffers[u].data)])(a[u]), i.buffers[u] = new G(s[u]);
                        for (u = 0; u < e.length; u++)
                            for (r = e[u], c = 0; c < r.buffers.length; c++) s[c].set(r.buffers[c].data, h[c]), h[c] += r.buffers[c].data.length;
                        if (i.attributes = r.attributes, r.indexBuffer) {
                            i.indexBuffer = i.buffers[r.buffers.indexOf(r.indexBuffer)], i.indexBuffer.type = n.mr.ELEMENT_ARRAY_BUFFER;
                            var f = 0,
                                l = 0,
                                d = 0,
                                p = 0;
                            for (u = 0; u < r.buffers.length; u++)
                                if (r.buffers[u] !== r.indexBuffer) {
                                    p = u;
                                    break
                                }
                            for (var u in r.attributes) {
                                var _ = r.attributes[u];
                                (0 | _.buffer) === p && (l += _.size * X[_.type] / 4)
                            }
                            for (u = 0; u < e.length; u++) {
                                var v = e[u].indexBuffer.data;
                                for (c = 0; c < v.length; c++) i.indexBuffer.data[c + d] += f;
                                f += e[u].buffers[p].data.length / l, d += v.length
                            }
                        }
                        return i
                    }, t
                }(),
                Y = function(t) {
                    function e() {
                        var e = t.call(this) || this;
                        return e.addAttribute("aVertexPosition", new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])).addIndex([0, 1, 3, 2]), e
                    }
                    return l(e, t), e
                }(V),
                z = function(t) {
                    function e() {
                        var e = t.call(this) || this;
                        return e.vertices = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1]), e.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), e.vertexBuffer = new G(e.vertices), e.uvBuffer = new G(e.uvs), e.addAttribute("aVertexPosition", e.vertexBuffer).addAttribute("aTextureCoord", e.uvBuffer).addIndex([0, 1, 2, 0, 2, 3]), e
                    }
                    return l(e, t), e.prototype.map = function(t, e) {
                        var r = 0,
                            i = 0;
                        return this.uvs[0] = r, this.uvs[1] = i, this.uvs[2] = r + e.width / t.width, this.uvs[3] = i, this.uvs[4] = r + e.width / t.width, this.uvs[5] = i + e.height / t.height, this.uvs[6] = r, this.uvs[7] = i + e.height / t.height, r = e.x, i = e.y, this.vertices[0] = r, this.vertices[1] = i, this.vertices[2] = r + e.width, this.vertices[3] = i, this.vertices[4] = r + e.width, this.vertices[5] = i + e.height, this.vertices[6] = r, this.vertices[7] = i + e.height, this.invalidate(), this
                    }, e.prototype.invalidate = function() {
                        return this.vertexBuffer._updateID++, this.uvBuffer._updateID++, this
                    }, e
                }(V),
                W = 0,
                q = function() {
                    function t(t, e, r) {
                        this.group = !0, this.syncUniforms = {}, this.dirtyId = 0, this.id = W++, this.static = !!e, this.ubo = !!r, t instanceof G ? (this.buffer = t, this.buffer.type = n.mr.UNIFORM_BUFFER, this.autoManage = !1, this.ubo = !0) : (this.uniforms = t, this.ubo && (this.buffer = new G(new Float32Array(1)), this.buffer.type = n.mr.UNIFORM_BUFFER, this.autoManage = !0))
                    }
                    return t.prototype.update = function() {
                        this.dirtyId++, !this.autoManage && this.buffer && this.buffer.update()
                    }, t.prototype.add = function(e, r, i) {
                        if (this.ubo) throw new Error("[UniformGroup] uniform groups in ubo mode cannot be modified, or have uniform groups nested in them");
                        this.uniforms[e] = new t(r, i)
                    }, t.from = function(e, r, i) {
                        return new t(e, r, i)
                    }, t.uboFrom = function(e, r) {
                        return new t(e, null == r || r, !0)
                    }, t
                }(),
                K = function() {
                    function t() {
                        this.renderTexture = null, this.target = null, this.legacy = !1, this.resolution = 1, this.multisample = n.G5.NONE, this.sourceFrame = new h.Ae, this.destinationFrame = new h.Ae, this.bindingSourceFrame = new h.Ae, this.bindingDestinationFrame = new h.Ae, this.filters = [], this.transform = null
                    }
                    return t.prototype.clear = function() {
                        this.target = null, this.filters = null, this.renderTexture = null
                    }, t
                }(),
                $ = [new h.E9, new h.E9, new h.E9, new h.E9],
                Z = new h.y3,
                Q = function() {
                    function t(t) {
                        this.renderer = t, this.defaultFilterStack = [{}], this.texturePool = new F, this.texturePool.setScreenSize(t.view), this.statePool = [], this.quad = new Y, this.quadUv = new z, this.tempRect = new h.Ae, this.activeState = {}, this.globalUniforms = new q({
                            outputFrame: new h.Ae,
                            inputSize: new Float32Array(4),
                            inputPixel: new Float32Array(4),
                            inputClamp: new Float32Array(4),
                            resolution: 1,
                            filterArea: new Float32Array(4),
                            filterClamp: new Float32Array(4)
                        }, !0), this.forceClear = !1, this.useMaxPadding = !1
                    }
                    return t.prototype.push = function(t, e) {
                        for (var r, i, n = this.renderer, o = this.defaultFilterStack, s = this.statePool.pop() || new K, a = this.renderer.renderTexture, h = e[0].resolution, u = e[0].multisample, c = e[0].padding, f = e[0].autoFit, l = null === (r = e[0].legacy) || void 0 === r || r, d = 1; d < e.length; d++) {
                            var p = e[d];
                            h = Math.min(h, p.resolution), u = Math.min(u, p.multisample), c = this.useMaxPadding ? Math.max(c, p.padding) : c + p.padding, f = f && p.autoFit, l = l || null === (i = p.legacy) || void 0 === i || i
                        }
                        1 === o.length && (this.defaultFilterStack[0].renderTexture = a.current), o.push(s), s.resolution = h, s.multisample = u, s.legacy = l, s.target = t, s.sourceFrame.copyFrom(t.filterArea || t.getBounds(!0)), s.sourceFrame.pad(c);
                        var _ = this.tempRect.copyFrom(a.sourceFrame);
                        n.projection.transform && this.transformAABB(Z.copyFrom(n.projection.transform).invert(), _), f ? (s.sourceFrame.fit(_), (s.sourceFrame.width <= 0 || s.sourceFrame.height <= 0) && (s.sourceFrame.width = 0, s.sourceFrame.height = 0)) : s.sourceFrame.intersects(_) || (s.sourceFrame.width = 0, s.sourceFrame.height = 0), this.roundFrame(s.sourceFrame, a.current ? a.current.resolution : n.resolution, a.sourceFrame, a.destinationFrame, n.projection.transform), s.renderTexture = this.getOptimalFilterTexture(s.sourceFrame.width, s.sourceFrame.height, h, u), s.filters = e, s.destinationFrame.width = s.renderTexture.width, s.destinationFrame.height = s.renderTexture.height;
                        var v = this.tempRect;
                        v.x = 0, v.y = 0, v.width = s.sourceFrame.width, v.height = s.sourceFrame.height, s.renderTexture.filterFrame = s.sourceFrame, s.bindingSourceFrame.copyFrom(a.sourceFrame), s.bindingDestinationFrame.copyFrom(a.destinationFrame), s.transform = n.projection.transform, n.projection.transform = null, a.bind(s.renderTexture, s.sourceFrame, v), n.framebuffer.clear(0, 0, 0, 0)
                    }, t.prototype.pop = function() {
                        var t = this.defaultFilterStack,
                            e = t.pop(),
                            r = e.filters;
                        this.activeState = e;
                        var i = this.globalUniforms.uniforms;
                        i.outputFrame = e.sourceFrame, i.resolution = e.resolution;
                        var o = i.inputSize,
                            s = i.inputPixel,
                            a = i.inputClamp;
                        if (o[0] = e.destinationFrame.width, o[1] = e.destinationFrame.height, o[2] = 1 / o[0], o[3] = 1 / o[1], s[0] = Math.round(o[0] * e.resolution), s[1] = Math.round(o[1] * e.resolution), s[2] = 1 / s[0], s[3] = 1 / s[1], a[0] = .5 * s[2], a[1] = .5 * s[3], a[2] = e.sourceFrame.width * o[2] - .5 * s[2], a[3] = e.sourceFrame.height * o[3] - .5 * s[3], e.legacy) {
                            var h = i.filterArea;
                            h[0] = e.destinationFrame.width, h[1] = e.destinationFrame.height, h[2] = e.sourceFrame.x, h[3] = e.sourceFrame.y, i.filterClamp = i.inputClamp
                        }
                        this.globalUniforms.update();
                        var u = t[t.length - 1];
                        if (this.renderer.framebuffer.blit(), 1 === r.length) r[0].apply(this, e.renderTexture, u.renderTexture, n.yl.BLEND, e), this.returnFilterTexture(e.renderTexture);
                        else {
                            var c = e.renderTexture,
                                f = this.getOptimalFilterTexture(c.width, c.height, e.resolution);
                            f.filterFrame = c.filterFrame;
                            var l = 0;
                            for (l = 0; l < r.length - 1; ++l) {
                                1 === l && e.multisample > 1 && ((f = this.getOptimalFilterTexture(c.width, c.height, e.resolution)).filterFrame = c.filterFrame), r[l].apply(this, c, f, n.yl.CLEAR, e);
                                var d = c;
                                c = f, f = d
                            }
                            r[l].apply(this, c, u.renderTexture, n.yl.BLEND, e), l > 1 && e.multisample > 1 && this.returnFilterTexture(e.renderTexture), this.returnFilterTexture(c), this.returnFilterTexture(f)
                        }
                        e.clear(), this.statePool.push(e)
                    }, t.prototype.bindAndClear = function(t, e) {
                        void 0 === e && (e = n.yl.CLEAR);
                        var r = this.renderer,
                            i = r.renderTexture,
                            o = r.state;
                        if (t === this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture ? this.renderer.projection.transform = this.activeState.transform : this.renderer.projection.transform = null, t && t.filterFrame) {
                            var s = this.tempRect;
                            s.x = 0, s.y = 0, s.width = t.filterFrame.width, s.height = t.filterFrame.height, i.bind(t, t.filterFrame, s)
                        } else t !== this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture ? i.bind(t) : this.renderer.renderTexture.bind(t, this.activeState.bindingSourceFrame, this.activeState.bindingDestinationFrame);
                        var a = 1 & o.stateId || this.forceClear;
                        (e === n.yl.CLEAR || e === n.yl.BLIT && a) && this.renderer.framebuffer.clear(0, 0, 0, 0)
                    }, t.prototype.applyFilter = function(t, e, r, i) {
                        var o = this.renderer;
                        o.state.set(t.state), this.bindAndClear(r, i), t.uniforms.uSampler = e, t.uniforms.filterGlobals = this.globalUniforms, o.shader.bind(t), t.legacy = !!t.program.attributeData.aTextureCoord, t.legacy ? (this.quadUv.map(e._frame, e.filterFrame), o.geometry.bind(this.quadUv), o.geometry.draw(n.lg.TRIANGLES)) : (o.geometry.bind(this.quad), o.geometry.draw(n.lg.TRIANGLE_STRIP))
                    }, t.prototype.calculateSpriteMatrix = function(t, e) {
                        var r = this.activeState,
                            i = r.sourceFrame,
                            n = r.destinationFrame,
                            o = e._texture.orig,
                            s = t.set(n.width, 0, 0, n.height, i.x, i.y),
                            a = e.worldTransform.copyTo(h.y3.TEMP_MATRIX);
                        return a.invert(), s.prepend(a), s.scale(1 / o.width, 1 / o.height), s.translate(e.anchor.x, e.anchor.y), s
                    }, t.prototype.destroy = function() {
                        this.renderer = null, this.texturePool.clear(!1)
                    }, t.prototype.getOptimalFilterTexture = function(t, e, r, i) {
                        return void 0 === r && (r = 1), void 0 === i && (i = n.G5.NONE), this.texturePool.getOptimalTexture(t, e, r, i)
                    }, t.prototype.getFilterTexture = function(t, e, r) {
                        if ("number" == typeof t) {
                            var i = t;
                            t = e, e = i
                        }
                        t = t || this.activeState.renderTexture;
                        var o = this.texturePool.getOptimalTexture(t.width, t.height, e || t.resolution, r || n.G5.NONE);
                        return o.filterFrame = t.filterFrame, o
                    }, t.prototype.returnFilterTexture = function(t) {
                        this.texturePool.returnTexture(t)
                    }, t.prototype.emptyPool = function() {
                        this.texturePool.clear(!0)
                    }, t.prototype.resize = function() {
                        this.texturePool.setScreenSize(this.renderer.view)
                    }, t.prototype.transformAABB = function(t, e) {
                        var r = $[0],
                            i = $[1],
                            n = $[2],
                            o = $[3];
                        r.set(e.left, e.top), i.set(e.left, e.bottom), n.set(e.right, e.top), o.set(e.right, e.bottom), t.apply(r, r), t.apply(i, i), t.apply(n, n), t.apply(o, o);
                        var s = Math.min(r.x, i.x, n.x, o.x),
                            a = Math.min(r.y, i.y, n.y, o.y),
                            h = Math.max(r.x, i.x, n.x, o.x),
                            u = Math.max(r.y, i.y, n.y, o.y);
                        e.x = s, e.y = a, e.width = h - s, e.height = u - a
                    }, t.prototype.roundFrame = function(t, e, r, i, n) {
                        if (!(t.width <= 0 || t.height <= 0 || r.width <= 0 || r.height <= 0)) {
                            if (n) {
                                var o = n.a,
                                    s = n.b,
                                    a = n.c,
                                    h = n.d;
                                if ((Math.abs(s) > 1e-4 || Math.abs(a) > 1e-4) && (Math.abs(o) > 1e-4 || Math.abs(h) > 1e-4)) return
                            }(n = n ? Z.copyFrom(n) : Z.identity()).translate(-r.x, -r.y).scale(i.width / r.width, i.height / r.height).translate(i.x, i.y), this.transformAABB(n, t), t.ceil(e), this.transformAABB(n.invert(), t)
                        }
                    }, t
                }(),
                J = function() {
                    function t(t) {
                        this.renderer = t
                    }
                    return t.prototype.flush = function() {}, t.prototype.destroy = function() {
                        this.renderer = null
                    }, t.prototype.start = function() {}, t.prototype.stop = function() {
                        this.flush()
                    }, t.prototype.render = function(t) {}, t
                }(),
                tt = function() {
                    function t(t) {
                        this.renderer = t, this.emptyRenderer = new J(t), this.currentRenderer = this.emptyRenderer
                    }
                    return t.prototype.setObjectRenderer = function(t) {
                        this.currentRenderer !== t && (this.currentRenderer.stop(), this.currentRenderer = t, this.currentRenderer.start())
                    }, t.prototype.flush = function() {
                        this.setObjectRenderer(this.emptyRenderer)
                    }, t.prototype.reset = function() {
                        this.setObjectRenderer(this.emptyRenderer)
                    }, t.prototype.copyBoundTextures = function(t, e) {
                        for (var r = this.renderer.texture.boundTextures, i = e - 1; i >= 0; --i) t[i] = r[i] || null, t[i] && (t[i]._batchLocation = i)
                    }, t.prototype.boundArray = function(t, e, r, i) {
                        for (var n = t.elements, o = t.ids, s = t.count, a = 0, h = 0; h < s; h++) {
                            var u = n[h],
                                c = u._batchLocation;
                            if (c >= 0 && c < i && e[c] === u) o[h] = c;
                            else
                                for (; a < i;) {
                                    var f = e[a];
                                    if (!f || f._batchEnabled !== r || f._batchLocation !== a) {
                                        o[h] = a, u._batchLocation = a, e[a] = u;
                                        break
                                    }
                                    a++
                                }
                        }
                    }, t.prototype.destroy = function() {
                        this.renderer = null
                    }, t
                }(),
                et = 0,
                rt = function() {
                    function t(t) {
                        this.renderer = t, this.webGLVersion = 1, this.extensions = {}, this.supports = {
                            uint32Indices: !1
                        }, this.handleContextLost = this.handleContextLost.bind(this), this.handleContextRestored = this.handleContextRestored.bind(this), t.view.addEventListener("webglcontextlost", this.handleContextLost, !1), t.view.addEventListener("webglcontextrestored", this.handleContextRestored, !1)
                    }
                    return Object.defineProperty(t.prototype, "isLost", {
                        get: function() {
                            return !this.gl || this.gl.isContextLost()
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.contextChange = function(t) {
                        this.gl = t, this.renderer.gl = t, this.renderer.CONTEXT_UID = et++, t.isContextLost() && t.getExtension("WEBGL_lose_context") && t.getExtension("WEBGL_lose_context").restoreContext()
                    }, t.prototype.initFromContext = function(t) {
                        this.gl = t, this.validateContext(t), this.renderer.gl = t, this.renderer.CONTEXT_UID = et++, this.renderer.runners.contextChange.emit(t)
                    }, t.prototype.initFromOptions = function(t) {
                        var e = this.createContext(this.renderer.view, t);
                        this.initFromContext(e)
                    }, t.prototype.createContext = function(t, e) {
                        var r;
                        if (i.X.PREFER_ENV >= n.Vi.WEBGL2 && (r = t.getContext("webgl2", e)), r) this.webGLVersion = 2;
                        else if (this.webGLVersion = 1, !(r = t.getContext("webgl", e) || t.getContext("experimental-webgl", e))) throw new Error("This browser does not support WebGL. Try using the canvas renderer");
                        return this.gl = r, this.getExtensions(), this.gl
                    }, t.prototype.getExtensions = function() {
                        var t = this.gl,
                            e = {
                                anisotropicFiltering: t.getExtension("EXT_texture_filter_anisotropic"),
                                floatTextureLinear: t.getExtension("OES_texture_float_linear"),
                                s3tc: t.getExtension("WEBGL_compressed_texture_s3tc"),
                                s3tc_sRGB: t.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
                                etc: t.getExtension("WEBGL_compressed_texture_etc"),
                                etc1: t.getExtension("WEBGL_compressed_texture_etc1"),
                                pvrtc: t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
                                atc: t.getExtension("WEBGL_compressed_texture_atc"),
                                astc: t.getExtension("WEBGL_compressed_texture_astc")
                            };
                        1 === this.webGLVersion ? Object.assign(this.extensions, e, {
                            drawBuffers: t.getExtension("WEBGL_draw_buffers"),
                            depthTexture: t.getExtension("WEBGL_depth_texture"),
                            loseContext: t.getExtension("WEBGL_lose_context"),
                            vertexArrayObject: t.getExtension("OES_vertex_array_object") || t.getExtension("MOZ_OES_vertex_array_object") || t.getExtension("WEBKIT_OES_vertex_array_object"),
                            uint32ElementIndex: t.getExtension("OES_element_index_uint"),
                            floatTexture: t.getExtension("OES_texture_float"),
                            floatTextureLinear: t.getExtension("OES_texture_float_linear"),
                            textureHalfFloat: t.getExtension("OES_texture_half_float"),
                            textureHalfFloatLinear: t.getExtension("OES_texture_half_float_linear")
                        }) : 2 === this.webGLVersion && Object.assign(this.extensions, e, {
                            colorBufferFloat: t.getExtension("EXT_color_buffer_float")
                        })
                    }, t.prototype.handleContextLost = function(t) {
                        t.preventDefault()
                    }, t.prototype.handleContextRestored = function() {
                        this.renderer.runners.contextChange.emit(this.gl)
                    }, t.prototype.destroy = function() {
                        var t = this.renderer.view;
                        this.renderer = null, t.removeEventListener("webglcontextlost", this.handleContextLost), t.removeEventListener("webglcontextrestored", this.handleContextRestored), this.gl.useProgram(null), this.extensions.loseContext && this.extensions.loseContext.loseContext()
                    }, t.prototype.postrender = function() {
                        this.renderer.renderingToScreen && this.gl.flush()
                    }, t.prototype.validateContext = function(t) {
                        var e = t.getContextAttributes(),
                            r = "WebGL2RenderingContext" in globalThis && t instanceof globalThis.WebGL2RenderingContext;
                        r && (this.webGLVersion = 2), e && e.stencil;
                        var i = r || !!t.getExtension("OES_element_index_uint");
                        this.supports.uint32Indices = i
                    }, t
                }(),
                it = function(t) {
                    this.framebuffer = t, this.stencil = null, this.dirtyId = -1, this.dirtyFormat = -1, this.dirtySize = -1, this.multisample = n.G5.NONE, this.msaaBuffer = null, this.blitFramebuffer = null, this.mipLevel = 0
                },
                nt = new h.Ae,
                ot = function() {
                    function t(t) {
                        this.renderer = t, this.managedFramebuffers = [], this.unknownFramebuffer = new w(10, 10), this.msaaSamples = null
                    }
                    return t.prototype.contextChange = function() {
                        var t = this.gl = this.renderer.gl;
                        if (this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.current = this.unknownFramebuffer, this.viewport = new h.Ae, this.hasMRT = !0, this.writeDepthTexture = !0, this.disposeAll(!0), 1 === this.renderer.context.webGLVersion) {
                            var e = this.renderer.context.extensions.drawBuffers,
                                r = this.renderer.context.extensions.depthTexture;
                            i.X.PREFER_ENV === n.Vi.WEBGL_LEGACY && (e = null, r = null), e ? t.drawBuffers = function(t) {
                                return e.drawBuffersWEBGL(t)
                            } : (this.hasMRT = !1, t.drawBuffers = function() {}), r || (this.writeDepthTexture = !1)
                        } else this.msaaSamples = t.getInternalformatParameter(t.RENDERBUFFER, t.RGBA8, t.SAMPLES)
                    }, t.prototype.bind = function(t, e, r) {
                        void 0 === r && (r = 0);
                        var i = this.gl;
                        if (t) {
                            var n = t.glFramebuffers[this.CONTEXT_UID] || this.initFramebuffer(t);
                            this.current !== t && (this.current = t, i.bindFramebuffer(i.FRAMEBUFFER, n.framebuffer)), n.mipLevel !== r && (t.dirtyId++, t.dirtyFormat++, n.mipLevel = r), n.dirtyId !== t.dirtyId && (n.dirtyId = t.dirtyId, n.dirtyFormat !== t.dirtyFormat ? (n.dirtyFormat = t.dirtyFormat, n.dirtySize = t.dirtySize, this.updateFramebuffer(t, r)) : n.dirtySize !== t.dirtySize && (n.dirtySize = t.dirtySize, this.resizeFramebuffer(t)));
                            for (var o = 0; o < t.colorTextures.length; o++) {
                                var s = t.colorTextures[o];
                                this.renderer.texture.unbind(s.parentTextureArray || s)
                            }
                            if (t.depthTexture && this.renderer.texture.unbind(t.depthTexture), e) {
                                var a = e.width >> r,
                                    h = e.height >> r,
                                    u = a / e.width;
                                this.setViewport(e.x * u, e.y * u, a, h)
                            } else a = t.width >> r, h = t.height >> r, this.setViewport(0, 0, a, h)
                        } else this.current && (this.current = null, i.bindFramebuffer(i.FRAMEBUFFER, null)), e ? this.setViewport(e.x, e.y, e.width, e.height) : this.setViewport(0, 0, this.renderer.width, this.renderer.height)
                    }, t.prototype.setViewport = function(t, e, r, i) {
                        var n = this.viewport;
                        t = Math.round(t), e = Math.round(e), r = Math.round(r), i = Math.round(i), n.width === r && n.height === i && n.x === t && n.y === e || (n.x = t, n.y = e, n.width = r, n.height = i, this.gl.viewport(t, e, r, i))
                    }, Object.defineProperty(t.prototype, "size", {
                        get: function() {
                            return this.current ? {
                                x: 0,
                                y: 0,
                                width: this.current.width,
                                height: this.current.height
                            } : {
                                x: 0,
                                y: 0,
                                width: this.renderer.width,
                                height: this.renderer.height
                            }
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.clear = function(t, e, r, i, o) {
                        void 0 === o && (o = n.V0.COLOR | n.V0.DEPTH);
                        var s = this.gl;
                        s.clearColor(t, e, r, i), s.clear(o)
                    }, t.prototype.initFramebuffer = function(t) {
                        var e = this.gl,
                            r = new it(e.createFramebuffer());
                        return r.multisample = this.detectSamples(t.multisample), t.glFramebuffers[this.CONTEXT_UID] = r, this.managedFramebuffers.push(t), t.disposeRunner.add(this), r
                    }, t.prototype.resizeFramebuffer = function(t) {
                        var e = this.gl,
                            r = t.glFramebuffers[this.CONTEXT_UID];
                        r.msaaBuffer && (e.bindRenderbuffer(e.RENDERBUFFER, r.msaaBuffer), e.renderbufferStorageMultisample(e.RENDERBUFFER, r.multisample, e.RGBA8, t.width, t.height)), r.stencil && (e.bindRenderbuffer(e.RENDERBUFFER, r.stencil), r.msaaBuffer ? e.renderbufferStorageMultisample(e.RENDERBUFFER, r.multisample, e.DEPTH24_STENCIL8, t.width, t.height) : e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_STENCIL, t.width, t.height));
                        var i = t.colorTextures,
                            n = i.length;
                        e.drawBuffers || (n = Math.min(n, 1));
                        for (var o = 0; o < n; o++) {
                            var s = i[o],
                                a = s.parentTextureArray || s;
                            this.renderer.texture.bind(a, 0)
                        }
                        t.depthTexture && this.writeDepthTexture && this.renderer.texture.bind(t.depthTexture, 0)
                    }, t.prototype.updateFramebuffer = function(t, e) {
                        var r = this.gl,
                            i = t.glFramebuffers[this.CONTEXT_UID],
                            n = t.colorTextures,
                            o = n.length;
                        r.drawBuffers || (o = Math.min(o, 1)), i.multisample > 1 && this.canMultisampleFramebuffer(t) ? (i.msaaBuffer = i.msaaBuffer || r.createRenderbuffer(), r.bindRenderbuffer(r.RENDERBUFFER, i.msaaBuffer), r.renderbufferStorageMultisample(r.RENDERBUFFER, i.multisample, r.RGBA8, t.width, t.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.RENDERBUFFER, i.msaaBuffer)) : i.msaaBuffer && (r.deleteRenderbuffer(i.msaaBuffer), i.msaaBuffer = null, i.blitFramebuffer && (i.blitFramebuffer.dispose(), i.blitFramebuffer = null));
                        for (var s = [], a = 0; a < o; a++) {
                            var h = n[a],
                                u = h.parentTextureArray || h;
                            this.renderer.texture.bind(u, 0), 0 === a && i.msaaBuffer || (r.framebufferTexture2D(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + a, h.target, u._glTextures[this.CONTEXT_UID].texture, e), s.push(r.COLOR_ATTACHMENT0 + a))
                        }
                        if (s.length > 1 && r.drawBuffers(s), t.depthTexture && this.writeDepthTexture) {
                            var c = t.depthTexture;
                            this.renderer.texture.bind(c, 0), r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, c._glTextures[this.CONTEXT_UID].texture, e)
                        }!t.stencil && !t.depth || t.depthTexture && this.writeDepthTexture ? i.stencil && (r.deleteRenderbuffer(i.stencil), i.stencil = null) : (i.stencil = i.stencil || r.createRenderbuffer(), r.bindRenderbuffer(r.RENDERBUFFER, i.stencil), i.msaaBuffer ? r.renderbufferStorageMultisample(r.RENDERBUFFER, i.multisample, r.DEPTH24_STENCIL8, t.width, t.height) : r.renderbufferStorage(r.RENDERBUFFER, r.DEPTH_STENCIL, t.width, t.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.RENDERBUFFER, i.stencil))
                    }, t.prototype.canMultisampleFramebuffer = function(t) {
                        return 1 !== this.renderer.context.webGLVersion && t.colorTextures.length <= 1 && !t.depthTexture
                    }, t.prototype.detectSamples = function(t) {
                        var e = this.msaaSamples,
                            r = n.G5.NONE;
                        if (t <= 1 || null === e) return r;
                        for (var i = 0; i < e.length; i++)
                            if (e[i] <= t) {
                                r = e[i];
                                break
                            }
                        return 1 === r && (r = n.G5.NONE), r
                    }, t.prototype.blit = function(t, e, r) {
                        var i = this,
                            n = i.current,
                            o = i.renderer,
                            s = i.gl,
                            a = i.CONTEXT_UID;
                        if (2 === o.context.webGLVersion && n) {
                            var h = n.glFramebuffers[a];
                            if (h) {
                                if (!t) {
                                    if (!h.msaaBuffer) return;
                                    var u = n.colorTextures[0];
                                    if (!u) return;
                                    h.blitFramebuffer || (h.blitFramebuffer = new w(n.width, n.height), h.blitFramebuffer.addColorTexture(0, u)), (t = h.blitFramebuffer).colorTextures[0] !== u && (t.colorTextures[0] = u, t.dirtyId++, t.dirtyFormat++), t.width === n.width && t.height === n.height || (t.width = n.width, t.height = n.height, t.dirtyId++, t.dirtySize++)
                                }
                                e || ((e = nt).width = n.width, e.height = n.height), r || (r = e);
                                var c = e.width === r.width && e.height === r.height;
                                this.bind(t), s.bindFramebuffer(s.READ_FRAMEBUFFER, h.framebuffer), s.blitFramebuffer(e.left, e.top, e.right, e.bottom, r.left, r.top, r.right, r.bottom, s.COLOR_BUFFER_BIT, c ? s.NEAREST : s.LINEAR)
                            }
                        }
                    }, t.prototype.disposeFramebuffer = function(t, e) {
                        var r = t.glFramebuffers[this.CONTEXT_UID],
                            i = this.gl;
                        if (r) {
                            delete t.glFramebuffers[this.CONTEXT_UID];
                            var n = this.managedFramebuffers.indexOf(t);
                            n >= 0 && this.managedFramebuffers.splice(n, 1), t.disposeRunner.remove(this), e || (i.deleteFramebuffer(r.framebuffer), r.msaaBuffer && i.deleteRenderbuffer(r.msaaBuffer), r.stencil && i.deleteRenderbuffer(r.stencil)), r.blitFramebuffer && r.blitFramebuffer.dispose()
                        }
                    }, t.prototype.disposeAll = function(t) {
                        var e = this.managedFramebuffers;
                        this.managedFramebuffers = [];
                        for (var r = 0; r < e.length; r++) this.disposeFramebuffer(e[r], t)
                    }, t.prototype.forceStencil = function() {
                        var t = this.current;
                        if (t) {
                            var e = t.glFramebuffers[this.CONTEXT_UID];
                            if (e && !e.stencil) {
                                t.stencil = !0;
                                var r = t.width,
                                    i = t.height,
                                    n = this.gl,
                                    o = n.createRenderbuffer();
                                n.bindRenderbuffer(n.RENDERBUFFER, o), e.msaaBuffer ? n.renderbufferStorageMultisample(n.RENDERBUFFER, e.multisample, n.DEPTH24_STENCIL8, r, i) : n.renderbufferStorage(n.RENDERBUFFER, n.DEPTH_STENCIL, r, i), e.stencil = o, n.framebufferRenderbuffer(n.FRAMEBUFFER, n.DEPTH_STENCIL_ATTACHMENT, n.RENDERBUFFER, o)
                            }
                        }
                    }, t.prototype.reset = function() {
                        this.current = this.unknownFramebuffer, this.viewport = new h.Ae
                    }, t.prototype.destroy = function() {
                        this.renderer = null
                    }, t
                }(),
                st = {
                    5126: 4,
                    5123: 2,
                    5121: 1
                },
                at = function() {
                    function t(t) {
                        this.renderer = t, this._activeGeometry = null, this._activeVao = null, this.hasVao = !0, this.hasInstance = !0, this.canUseUInt32ElementIndex = !1, this.managedGeometries = {}
                    }
                    return t.prototype.contextChange = function() {
                        this.disposeAll(!0);
                        var t = this.gl = this.renderer.gl,
                            e = this.renderer.context;
                        if (this.CONTEXT_UID = this.renderer.CONTEXT_UID, 2 !== e.webGLVersion) {
                            var r = this.renderer.context.extensions.vertexArrayObject;
                            i.X.PREFER_ENV === n.Vi.WEBGL_LEGACY && (r = null), r ? (t.createVertexArray = function() {
                                return r.createVertexArrayOES()
                            }, t.bindVertexArray = function(t) {
                                return r.bindVertexArrayOES(t)
                            }, t.deleteVertexArray = function(t) {
                                return r.deleteVertexArrayOES(t)
                            }) : (this.hasVao = !1, t.createVertexArray = function() {
                                return null
                            }, t.bindVertexArray = function() {
                                return null
                            }, t.deleteVertexArray = function() {
                                return null
                            })
                        }
                        if (2 !== e.webGLVersion) {
                            var o = t.getExtension("ANGLE_instanced_arrays");
                            o ? (t.vertexAttribDivisor = function(t, e) {
                                return o.vertexAttribDivisorANGLE(t, e)
                            }, t.drawElementsInstanced = function(t, e, r, i, n) {
                                return o.drawElementsInstancedANGLE(t, e, r, i, n)
                            }, t.drawArraysInstanced = function(t, e, r, i) {
                                return o.drawArraysInstancedANGLE(t, e, r, i)
                            }) : this.hasInstance = !1
                        }
                        this.canUseUInt32ElementIndex = 2 === e.webGLVersion || !!e.extensions.uint32ElementIndex
                    }, t.prototype.bind = function(t, e) {
                        e = e || this.renderer.shader.shader;
                        var r = this.gl,
                            i = t.glVertexArrayObjects[this.CONTEXT_UID],
                            n = !1;
                        i || (this.managedGeometries[t.id] = t, t.disposeRunner.add(this), t.glVertexArrayObjects[this.CONTEXT_UID] = i = {}, n = !0);
                        var o = i[e.program.id] || this.initGeometryVao(t, e, n);
                        this._activeGeometry = t, this._activeVao !== o && (this._activeVao = o, this.hasVao ? r.bindVertexArray(o) : this.activateVao(t, e.program)), this.updateBuffers()
                    }, t.prototype.reset = function() {
                        this.unbind()
                    }, t.prototype.updateBuffers = function() {
                        for (var t = this._activeGeometry, e = this.renderer.buffer, r = 0; r < t.buffers.length; r++) {
                            var i = t.buffers[r];
                            e.update(i)
                        }
                    }, t.prototype.checkCompatibility = function(t, e) {
                        var r = t.attributes,
                            i = e.attributeData;
                        for (var n in i)
                            if (!r[n]) throw new Error('shader and geometry incompatible, geometry missing the "' + n + '" attribute')
                    }, t.prototype.getSignature = function(t, e) {
                        var r = t.attributes,
                            i = e.attributeData,
                            n = ["g", t.id];
                        for (var o in r) i[o] && n.push(o, i[o].location);
                        return n.join("-")
                    }, t.prototype.initGeometryVao = function(t, e, r) {
                        void 0 === r && (r = !0);
                        var i = this.gl,
                            n = this.CONTEXT_UID,
                            o = this.renderer.buffer,
                            s = e.program;
                        s.glPrograms[n] || this.renderer.shader.generateProgram(e), this.checkCompatibility(t, s);
                        var a = this.getSignature(t, s),
                            h = t.glVertexArrayObjects[this.CONTEXT_UID],
                            u = h[a];
                        if (u) return h[s.id] = u, u;
                        var c = t.buffers,
                            f = t.attributes,
                            l = {},
                            d = {};
                        for (var p in c) l[p] = 0, d[p] = 0;
                        for (var p in f) !f[p].size && s.attributeData[p] ? f[p].size = s.attributeData[p].size : f[p].size, l[f[p].buffer] += f[p].size * st[f[p].type];
                        for (var p in f) {
                            var _ = f[p],
                                v = _.size;
                            void 0 === _.stride && (l[_.buffer] === v * st[_.type] ? _.stride = 0 : _.stride = l[_.buffer]), void 0 === _.start && (_.start = d[_.buffer], d[_.buffer] += v * st[_.type])
                        }
                        u = i.createVertexArray(), i.bindVertexArray(u);
                        for (var m = 0; m < c.length; m++) {
                            var y = c[m];
                            o.bind(y), r && y._glBuffers[n].refCount++
                        }
                        return this.activateVao(t, s), this._activeVao = u, h[s.id] = u, h[a] = u, u
                    }, t.prototype.disposeGeometry = function(t, e) {
                        var r;
                        if (this.managedGeometries[t.id]) {
                            delete this.managedGeometries[t.id];
                            var i = t.glVertexArrayObjects[this.CONTEXT_UID],
                                n = this.gl,
                                o = t.buffers,
                                s = null === (r = this.renderer) || void 0 === r ? void 0 : r.buffer;
                            if (t.disposeRunner.remove(this), i) {
                                if (s)
                                    for (var a = 0; a < o.length; a++) {
                                        var h = o[a]._glBuffers[this.CONTEXT_UID];
                                        h && (h.refCount--, 0 !== h.refCount || e || s.dispose(o[a], e))
                                    }
                                if (!e)
                                    for (var u in i)
                                        if ("g" === u[0]) {
                                            var c = i[u];
                                            this._activeVao === c && this.unbind(), n.deleteVertexArray(c)
                                        }
                                delete t.glVertexArrayObjects[this.CONTEXT_UID]
                            }
                        }
                    }, t.prototype.disposeAll = function(t) {
                        for (var e = Object.keys(this.managedGeometries), r = 0; r < e.length; r++) this.disposeGeometry(this.managedGeometries[e[r]], t)
                    }, t.prototype.activateVao = function(t, e) {
                        var r = this.gl,
                            i = this.CONTEXT_UID,
                            n = this.renderer.buffer,
                            o = t.buffers,
                            s = t.attributes;
                        t.indexBuffer && n.bind(t.indexBuffer);
                        var a = null;
                        for (var h in s) {
                            var u = s[h],
                                c = o[u.buffer],
                                f = c._glBuffers[i];
                            if (e.attributeData[h]) {
                                a !== f && (n.bind(c), a = f);
                                var l = e.attributeData[h].location;
                                if (r.enableVertexAttribArray(l), r.vertexAttribPointer(l, u.size, u.type || r.FLOAT, u.normalized, u.stride, u.start), u.instance) {
                                    if (!this.hasInstance) throw new Error("geometry error, GPU Instancing is not supported on this device");
                                    r.vertexAttribDivisor(l, 1)
                                }
                            }
                        }
                    }, t.prototype.draw = function(t, e, r, i) {
                        var n = this.gl,
                            o = this._activeGeometry;
                        if (o.indexBuffer) {
                            var s = o.indexBuffer.data.BYTES_PER_ELEMENT,
                                a = 2 === s ? n.UNSIGNED_SHORT : n.UNSIGNED_INT;
                            (2 === s || 4 === s && this.canUseUInt32ElementIndex) && (o.instanced ? n.drawElementsInstanced(t, e || o.indexBuffer.data.length, a, (r || 0) * s, i || 1) : n.drawElements(t, e || o.indexBuffer.data.length, a, (r || 0) * s))
                        } else o.instanced ? n.drawArraysInstanced(t, r, e || o.getSize(), i || 1) : n.drawArrays(t, r, e || o.getSize());
                        return this
                    }, t.prototype.unbind = function() {
                        this.gl.bindVertexArray(null), this._activeVao = null, this._activeGeometry = null
                    }, t.prototype.destroy = function() {
                        this.renderer = null
                    }, t
                }(),
                ht = function() {
                    function t(t) {
                        void 0 === t && (t = null), this.type = n.A7.NONE, this.autoDetect = !0, this.maskObject = t || null, this.pooled = !1, this.isMaskData = !0, this.resolution = null, this.multisample = i.X.FILTER_MULTISAMPLE, this.enabled = !0, this._filters = null, this._stencilCounter = 0, this._scissorCounter = 0, this._scissorRect = null, this._scissorRectLocal = null, this._target = null
                    }
                    return Object.defineProperty(t.prototype, "filter", {
                        get: function() {
                            return this._filters ? this._filters[0] : null
                        },
                        set: function(t) {
                            t ? this._filters ? this._filters[0] = t : this._filters = [t] : this._filters = null
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.reset = function() {
                        this.pooled && (this.maskObject = null, this.type = n.A7.NONE, this.autoDetect = !0), this._target = null, this._scissorRectLocal = null
                    }, t.prototype.copyCountersOrReset = function(t) {
                        t ? (this._stencilCounter = t._stencilCounter, this._scissorCounter = t._scissorCounter, this._scissorRect = t._scissorRect) : (this._stencilCounter = 0, this._scissorCounter = 0, this._scissorRect = null)
                    }, t
                }();

            function ut(t, e, r) {
                var i = t.createShader(e);
                return t.shaderSource(i, r), t.compileShader(i), i
            }

            function ct(t, e) {
                var r = t.getShaderSource(e).split("\n").map((function(t, e) {
                        return e + ": " + t
                    })),
                    i = t.getShaderInfoLog(e).split("\n"),
                    n = {},
                    o = i.map((function(t) {
                        return parseFloat(t.replace(/^ERROR\: 0\:([\d]+)\:.*$/, "$1"))
                    })).filter((function(t) {
                        return !(!t || n[t] || (n[t] = !0, 0))
                    })),
                    s = [""];
                o.forEach((function(t) {
                    r[t - 1] = "%c" + r[t - 1] + "%c", s.push("background: #FF0000; color:#FFFFFF; font-size: 10px", "font-size: 10px")
                }));
                var a = r.join("\n");
                s[0] = a
            }

            function ft(t) {
                for (var e = new Array(t), r = 0; r < e.length; r++) e[r] = !1;
                return e
            }

            function lt(t, e) {
                switch (t) {
                    case "float":
                    case "int":
                    case "uint":
                    case "sampler2D":
                    case "sampler2DArray":
                        return 0;
                    case "vec2":
                        return new Float32Array(2 * e);
                    case "vec3":
                        return new Float32Array(3 * e);
                    case "vec4":
                        return new Float32Array(4 * e);
                    case "ivec2":
                        return new Int32Array(2 * e);
                    case "ivec3":
                        return new Int32Array(3 * e);
                    case "ivec4":
                        return new Int32Array(4 * e);
                    case "uvec2":
                        return new Uint32Array(2 * e);
                    case "uvec3":
                        return new Uint32Array(3 * e);
                    case "uvec4":
                        return new Uint32Array(4 * e);
                    case "bool":
                        return !1;
                    case "bvec2":
                        return ft(2 * e);
                    case "bvec3":
                        return ft(3 * e);
                    case "bvec4":
                        return ft(4 * e);
                    case "mat2":
                        return new Float32Array([1, 0, 0, 1]);
                    case "mat3":
                        return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
                    case "mat4":
                        return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
                }
                return null
            }
            var dt, pt = {},
                _t = pt;

            function vt(t, e, r) {
                if ("precision" !== t.substring(0, 9)) {
                    var i = e;
                    return e === n.cB.HIGH && r !== n.cB.HIGH && (i = n.cB.MEDIUM), "precision " + i + " float;\n" + t
                }
                return r !== n.cB.HIGH && "precision highp" === t.substring(0, 15) ? t.replace("precision highp", "precision mediump") : t
            }
            var mt = {
                float: 1,
                vec2: 2,
                vec3: 3,
                vec4: 4,
                int: 1,
                ivec2: 2,
                ivec3: 3,
                ivec4: 4,
                uint: 1,
                uvec2: 2,
                uvec3: 3,
                uvec4: 4,
                bool: 1,
                bvec2: 2,
                bvec3: 3,
                bvec4: 4,
                mat2: 4,
                mat3: 9,
                mat4: 16,
                sampler2D: 1
            };

            function yt(t) {
                return mt[t]
            }
            var gt = null,
                Et = {
                    FLOAT: "float",
                    FLOAT_VEC2: "vec2",
                    FLOAT_VEC3: "vec3",
                    FLOAT_VEC4: "vec4",
                    INT: "int",
                    INT_VEC2: "ivec2",
                    INT_VEC3: "ivec3",
                    INT_VEC4: "ivec4",
                    UNSIGNED_INT: "uint",
                    UNSIGNED_INT_VEC2: "uvec2",
                    UNSIGNED_INT_VEC3: "uvec3",
                    UNSIGNED_INT_VEC4: "uvec4",
                    BOOL: "bool",
                    BOOL_VEC2: "bvec2",
                    BOOL_VEC3: "bvec3",
                    BOOL_VEC4: "bvec4",
                    FLOAT_MAT2: "mat2",
                    FLOAT_MAT3: "mat3",
                    FLOAT_MAT4: "mat4",
                    SAMPLER_2D: "sampler2D",
                    INT_SAMPLER_2D: "sampler2D",
                    UNSIGNED_INT_SAMPLER_2D: "sampler2D",
                    SAMPLER_CUBE: "samplerCube",
                    INT_SAMPLER_CUBE: "samplerCube",
                    UNSIGNED_INT_SAMPLER_CUBE: "samplerCube",
                    SAMPLER_2D_ARRAY: "sampler2DArray",
                    INT_SAMPLER_2D_ARRAY: "sampler2DArray",
                    UNSIGNED_INT_SAMPLER_2D_ARRAY: "sampler2DArray"
                };

            function Tt(t, e) {
                if (!gt) {
                    var r = Object.keys(Et);
                    gt = {};
                    for (var i = 0; i < r.length; ++i) {
                        var n = r[i];
                        gt[t[n]] = Et[n]
                    }
                }
                return gt[e]
            }
            var xt, bt = [{
                    test: function(t) {
                        return "float" === t.type && 1 === t.size
                    },
                    code: function(t) {
                        return '\n            if(uv["' + t + '"] !== ud["' + t + '"].value)\n            {\n                ud["' + t + '"].value = uv["' + t + '"]\n                gl.uniform1f(ud["' + t + '"].location, uv["' + t + '"])\n            }\n            '
                    }
                }, {
                    test: function(t) {
                        return ("sampler2D" === t.type || "samplerCube" === t.type || "sampler2DArray" === t.type) && 1 === t.size && !t.isArray
                    },
                    code: function(t) {
                        return 't = syncData.textureCount++;\n\n            renderer.texture.bind(uv["' + t + '"], t);\n\n            if(ud["' + t + '"].value !== t)\n            {\n                ud["' + t + '"].value = t;\n                gl.uniform1i(ud["' + t + '"].location, t);\n; // eslint-disable-line max-len\n            }'
                    }
                }, {
                    test: function(t, e) {
                        return "mat3" === t.type && 1 === t.size && void 0 !== e.a
                    },
                    code: function(t) {
                        return '\n            gl.uniformMatrix3fv(ud["' + t + '"].location, false, uv["' + t + '"].toArray(true));\n            '
                    },
                    codeUbo: function(t) {
                        return "\n                var " + t + "_matrix = uv." + t + ".toArray(true);\n\n                data[offset] = " + t + "_matrix[0];\n                data[offset+1] = " + t + "_matrix[1];\n                data[offset+2] = " + t + "_matrix[2];\n        \n                data[offset + 4] = " + t + "_matrix[3];\n                data[offset + 5] = " + t + "_matrix[4];\n                data[offset + 6] = " + t + "_matrix[5];\n        \n                data[offset + 8] = " + t + "_matrix[6];\n                data[offset + 9] = " + t + "_matrix[7];\n                data[offset + 10] = " + t + "_matrix[8];\n            "
                    }
                }, {
                    test: function(t, e) {
                        return "vec2" === t.type && 1 === t.size && void 0 !== e.x
                    },
                    code: function(t) {
                        return '\n                cv = ud["' + t + '"].value;\n                v = uv["' + t + '"];\n\n                if(cv[0] !== v.x || cv[1] !== v.y)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    gl.uniform2f(ud["' + t + '"].location, v.x, v.y);\n                }'
                    },
                    codeUbo: function(t) {
                        return "\n                v = uv." + t + ";\n\n                data[offset] = v.x;\n                data[offset+1] = v.y;\n            "
                    }
                }, {
                    test: function(t) {
                        return "vec2" === t.type && 1 === t.size
                    },
                    code: function(t) {
                        return '\n                cv = ud["' + t + '"].value;\n                v = uv["' + t + '"];\n\n                if(cv[0] !== v[0] || cv[1] !== v[1])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    gl.uniform2f(ud["' + t + '"].location, v[0], v[1]);\n                }\n            '
                    }
                }, {
                    test: function(t, e) {
                        return "vec4" === t.type && 1 === t.size && void 0 !== e.width
                    },
                    code: function(t) {
                        return '\n                cv = ud["' + t + '"].value;\n                v = uv["' + t + '"];\n\n                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    cv[2] = v.width;\n                    cv[3] = v.height;\n                    gl.uniform4f(ud["' + t + '"].location, v.x, v.y, v.width, v.height)\n                }'
                    },
                    codeUbo: function(t) {
                        return "\n                    v = uv." + t + ";\n\n                    data[offset] = v.x;\n                    data[offset+1] = v.y;\n                    data[offset+2] = v.width;\n                    data[offset+3] = v.height;\n                "
                    }
                }, {
                    test: function(t) {
                        return "vec4" === t.type && 1 === t.size
                    },
                    code: function(t) {
                        return '\n                cv = ud["' + t + '"].value;\n                v = uv["' + t + '"];\n\n                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    cv[2] = v[2];\n                    cv[3] = v[3];\n\n                    gl.uniform4f(ud["' + t + '"].location, v[0], v[1], v[2], v[3])\n                }'
                    }
                }],
                At = {
                    float: "\n    if (cv !== v)\n    {\n        cu.value = v;\n        gl.uniform1f(location, v);\n    }",
                    vec2: "\n    if (cv[0] !== v[0] || cv[1] !== v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n\n        gl.uniform2f(location, v[0], v[1])\n    }",
                    vec3: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3f(location, v[0], v[1], v[2])\n    }",
                    vec4: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n        cv[3] = v[3];\n\n        gl.uniform4f(location, v[0], v[1], v[2], v[3]);\n    }",
                    int: "\n    if (cv !== v)\n    {\n        cu.value = v;\n\n        gl.uniform1i(location, v);\n    }",
                    ivec2: "\n    if (cv[0] !== v[0] || cv[1] !== v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n\n        gl.uniform2i(location, v[0], v[1]);\n    }",
                    ivec3: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3i(location, v[0], v[1], v[2]);\n    }",
                    ivec4: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n        cv[3] = v[3];\n\n        gl.uniform4i(location, v[0], v[1], v[2], v[3]);\n    }",
                    uint: "\n    if (cv !== v)\n    {\n        cu.value = v;\n\n        gl.uniform1ui(location, v);\n    }",
                    uvec2: "\n    if (cv[0] !== v[0] || cv[1] !== v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n\n        gl.uniform2ui(location, v[0], v[1]);\n    }",
                    uvec3: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3ui(location, v[0], v[1], v[2]);\n    }",
                    uvec4: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n        cv[3] = v[3];\n\n        gl.uniform4ui(location, v[0], v[1], v[2], v[3]);\n    }",
                    bool: "\n    if (cv !== v)\n    {\n        cu.value = v;\n        gl.uniform1i(location, v);\n    }",
                    bvec2: "\n    if (cv[0] != v[0] || cv[1] != v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n\n        gl.uniform2i(location, v[0], v[1]);\n    }",
                    bvec3: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3i(location, v[0], v[1], v[2]);\n    }",
                    bvec4: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n        cv[3] = v[3];\n\n        gl.uniform4i(location, v[0], v[1], v[2], v[3]);\n    }",
                    mat2: "gl.uniformMatrix2fv(location, false, v)",
                    mat3: "gl.uniformMatrix3fv(location, false, v)",
                    mat4: "gl.uniformMatrix4fv(location, false, v)",
                    sampler2D: "gl.uniform1i(location, v)",
                    samplerCube: "gl.uniform1i(location, v)",
                    sampler2DArray: "gl.uniform1i(location, v)"
                },
                Rt = {
                    float: "gl.uniform1fv(location, v)",
                    vec2: "gl.uniform2fv(location, v)",
                    vec3: "gl.uniform3fv(location, v)",
                    vec4: "gl.uniform4fv(location, v)",
                    mat4: "gl.uniformMatrix4fv(location, false, v)",
                    mat3: "gl.uniformMatrix3fv(location, false, v)",
                    mat2: "gl.uniformMatrix2fv(location, false, v)",
                    int: "gl.uniform1iv(location, v)",
                    ivec2: "gl.uniform2iv(location, v)",
                    ivec3: "gl.uniform3iv(location, v)",
                    ivec4: "gl.uniform4iv(location, v)",
                    uint: "gl.uniform1uiv(location, v)",
                    uvec2: "gl.uniform2uiv(location, v)",
                    uvec3: "gl.uniform3uiv(location, v)",
                    uvec4: "gl.uniform4uiv(location, v)",
                    bool: "gl.uniform1iv(location, v)",
                    bvec2: "gl.uniform2iv(location, v)",
                    bvec3: "gl.uniform3iv(location, v)",
                    bvec4: "gl.uniform4iv(location, v)",
                    sampler2D: "gl.uniform1iv(location, v)",
                    samplerCube: "gl.uniform1iv(location, v)",
                    sampler2DArray: "gl.uniform1iv(location, v)"
                },
                It = ["precision mediump float;", "void main(void){", "float test = 0.1;", "%forloop%", "gl_FragColor = vec4(0.0);", "}"].join("\n");

            function St(t) {
                for (var e = "", r = 0; r < t; ++r) r > 0 && (e += "\nelse "), r < t - 1 && (e += "if(test == " + r + ".0){}");
                return e
            }
            var Ot = 0,
                wt = {},
                Nt = function() {
                    function t(e, r, o) {
                        void 0 === o && (o = "pixi-shader"), this.id = Ot++, this.vertexSrc = e || t.defaultVertexSrc, this.fragmentSrc = r || t.defaultFragmentSrc, this.vertexSrc = this.vertexSrc.trim(), this.fragmentSrc = this.fragmentSrc.trim(), "#version" !== this.vertexSrc.substring(0, 8) && (o = o.replace(/\s+/g, "-"), wt[o] ? (wt[o]++, o += "-" + wt[o]) : wt[o] = 1, this.vertexSrc = "#define SHADER_NAME " + o + "\n" + this.vertexSrc, this.fragmentSrc = "#define SHADER_NAME " + o + "\n" + this.fragmentSrc, this.vertexSrc = vt(this.vertexSrc, i.X.PRECISION_VERTEX, n.cB.HIGH), this.fragmentSrc = vt(this.fragmentSrc, i.X.PRECISION_FRAGMENT, function() {
                            if (!dt) {
                                dt = n.cB.MEDIUM;
                                var t = function() {
                                    if (_t === pt || _t && _t.isContextLost()) {
                                        var t = document.createElement("canvas"),
                                            e = void 0;
                                        i.X.PREFER_ENV >= n.Vi.WEBGL2 && (e = t.getContext("webgl2", {})), e || ((e = t.getContext("webgl", {}) || t.getContext("experimental-webgl", {})) ? e.getExtension("WEBGL_draw_buffers") : e = null), _t = e
                                    }
                                    return _t
                                }();
                                if (t && t.getShaderPrecisionFormat) {
                                    var e = t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT);
                                    dt = e.precision ? n.cB.HIGH : n.cB.MEDIUM
                                }
                            }
                            return dt
                        }())), this.glPrograms = {}, this.syncUniforms = null
                    }
                    return Object.defineProperty(t, "defaultVertexSrc", {
                        get: function() {
                            return "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n}\n"
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t, "defaultFragmentSrc", {
                        get: function() {
                            return "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor *= texture2D(uSampler, vTextureCoord);\n}"
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.from = function(e, r, i) {
                        var n = e + r,
                            s = o.GG[n];
                        return s || (o.GG[n] = s = new t(e, r, i)), s
                    }, t
                }(),
                Pt = function() {
                    function t(t, e) {
                        this.uniformBindCount = 0, this.program = t, this.uniformGroup = e ? e instanceof q ? e : new q(e) : new q({})
                    }
                    return t.prototype.checkUniformExists = function(t, e) {
                        if (e.uniforms[t]) return !0;
                        for (var r in e.uniforms) {
                            var i = e.uniforms[r];
                            if (i.group && this.checkUniformExists(t, i)) return !0
                        }
                        return !1
                    }, t.prototype.destroy = function() {
                        this.uniformGroup = null
                    }, Object.defineProperty(t.prototype, "uniforms", {
                        get: function() {
                            return this.uniformGroup.uniforms
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.from = function(e, r, i) {
                        return new t(Nt.from(e, r), i)
                    }, t
                }(),
                Ct = function() {
                    function t() {
                        this.data = 0, this.blendMode = n.T$.NORMAL, this.polygonOffset = 0, this.blend = !0, this.depthMask = !0
                    }
                    return Object.defineProperty(t.prototype, "blend", {
                        get: function() {
                            return !!(1 & this.data)
                        },
                        set: function(t) {
                            !!(1 & this.data) !== t && (this.data ^= 1)
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "offsets", {
                        get: function() {
                            return !!(2 & this.data)
                        },
                        set: function(t) {
                            !!(2 & this.data) !== t && (this.data ^= 2)
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "culling", {
                        get: function() {
                            return !!(4 & this.data)
                        },
                        set: function(t) {
                            !!(4 & this.data) !== t && (this.data ^= 4)
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "depthTest", {
                        get: function() {
                            return !!(8 & this.data)
                        },
                        set: function(t) {
                            !!(8 & this.data) !== t && (this.data ^= 8)
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "depthMask", {
                        get: function() {
                            return !!(32 & this.data)
                        },
                        set: function(t) {
                            !!(32 & this.data) !== t && (this.data ^= 32)
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "clockwiseFrontFace", {
                        get: function() {
                            return !!(16 & this.data)
                        },
                        set: function(t) {
                            !!(16 & this.data) !== t && (this.data ^= 16)
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "blendMode", {
                        get: function() {
                            return this._blendMode
                        },
                        set: function(t) {
                            this.blend = t !== n.T$.NONE, this._blendMode = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "polygonOffset", {
                        get: function() {
                            return this._polygonOffset
                        },
                        set: function(t) {
                            this.offsets = !!t, this._polygonOffset = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.toString = function() {
                        return "[@pixi/core:State blendMode=" + this.blendMode + " clockwiseFrontFace=" + this.clockwiseFrontFace + " culling=" + this.culling + " depthMask=" + this.depthMask + " polygonOffset=" + this.polygonOffset + "]"
                    }, t.for2d = function() {
                        var e = new t;
                        return e.depthTest = !1, e.blend = !0, e
                    }, t
                }(),
                Lt = function(t) {
                    function e(r, n, o) {
                        var s = this,
                            a = Nt.from(r || e.defaultVertexSrc, n || e.defaultFragmentSrc);
                        return (s = t.call(this, a, o) || this).padding = 0, s.resolution = i.X.FILTER_RESOLUTION, s.multisample = i.X.FILTER_MULTISAMPLE, s.enabled = !0, s.autoFit = !0, s.state = new Ct, s
                    }
                    return l(e, t), e.prototype.apply = function(t, e, r, i, n) {
                        t.applyFilter(this, e, r, i)
                    }, Object.defineProperty(e.prototype, "blendMode", {
                        get: function() {
                            return this.state.blendMode
                        },
                        set: function(t) {
                            this.state.blendMode = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "resolution", {
                        get: function() {
                            return this._resolution
                        },
                        set: function(t) {
                            this._resolution = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e, "defaultVertexSrc", {
                        get: function() {
                            return "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n"
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e, "defaultFragmentSrc", {
                        get: function() {
                            return "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n}\n"
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e
                }(Pt),
                Mt = new h.y3,
                Ut = function() {
                    function t(t, e) {
                        this._texture = t, this.mapCoord = new h.y3, this.uClampFrame = new Float32Array(4), this.uClampOffset = new Float32Array(2), this._textureID = -1, this._updateID = 0, this.clampOffset = 0, this.clampMargin = void 0 === e ? .5 : e, this.isSimple = !1
                    }
                    return Object.defineProperty(t.prototype, "texture", {
                        get: function() {
                            return this._texture
                        },
                        set: function(t) {
                            this._texture = t, this._textureID = -1
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.multiplyUvs = function(t, e) {
                        void 0 === e && (e = t);
                        for (var r = this.mapCoord, i = 0; i < t.length; i += 2) {
                            var n = t[i],
                                o = t[i + 1];
                            e[i] = n * r.a + o * r.c + r.tx, e[i + 1] = n * r.b + o * r.d + r.ty
                        }
                        return e
                    }, t.prototype.update = function(t) {
                        var e = this._texture;
                        if (!e || !e.valid) return !1;
                        if (!t && this._textureID === e._updateID) return !1;
                        this._textureID = e._updateID, this._updateID++;
                        var r = e._uvs;
                        this.mapCoord.set(r.x1 - r.x0, r.y1 - r.y0, r.x3 - r.x0, r.y3 - r.y0, r.x0, r.y0);
                        var i = e.orig,
                            n = e.trim;
                        n && (Mt.set(i.width / n.width, 0, 0, i.height / n.height, -n.x / n.width, -n.y / n.height), this.mapCoord.append(Mt));
                        var o = e.baseTexture,
                            s = this.uClampFrame,
                            a = this.clampMargin / o.resolution,
                            h = this.clampOffset;
                        return s[0] = (e._frame.x + a + h) / o.width, s[1] = (e._frame.y + a + h) / o.height, s[2] = (e._frame.x + e._frame.width - a + h) / o.width, s[3] = (e._frame.y + e._frame.height - a + h) / o.height, this.uClampOffset[0] = h / o.realWidth, this.uClampOffset[1] = h / o.realHeight, this.isSimple = e._frame.width === o.width && e._frame.height === o.height && 0 === e.rotate, !0
                    }, t
                }(),
                Ft = function(t) {
                    function e(e, r, i) {
                        var n = this,
                            o = null;
                        return "string" != typeof e && void 0 === r && void 0 === i && (o = e, e = void 0, r = void 0, i = void 0), (n = t.call(this, e || "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n}\n", r || "varying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform sampler2D mask;\nuniform float alpha;\nuniform float npmAlpha;\nuniform vec4 maskClamp;\n\nvoid main(void)\n{\n    float clip = step(3.5,\n        step(maskClamp.x, vMaskCoord.x) +\n        step(maskClamp.y, vMaskCoord.y) +\n        step(vMaskCoord.x, maskClamp.z) +\n        step(vMaskCoord.y, maskClamp.w));\n\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);\n\n    original *= (alphaMul * masky.r * alpha * clip);\n\n    gl_FragColor = original;\n}\n", i) || this).maskSprite = o, n.maskMatrix = new h.y3, n
                    }
                    return l(e, t), Object.defineProperty(e.prototype, "maskSprite", {
                        get: function() {
                            return this._maskSprite
                        },
                        set: function(t) {
                            this._maskSprite = t, this._maskSprite && (this._maskSprite.renderable = !1)
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.prototype.apply = function(t, e, r, i) {
                        var n = this._maskSprite,
                            o = n._texture;
                        o.valid && (o.uvMatrix || (o.uvMatrix = new Ut(o, 0)), o.uvMatrix.update(), this.uniforms.npmAlpha = o.baseTexture.alphaMode ? 0 : 1, this.uniforms.mask = o, this.uniforms.otherMatrix = t.calculateSpriteMatrix(this.maskMatrix, n).prepend(o.uvMatrix.mapCoord), this.uniforms.alpha = n.worldAlpha, this.uniforms.maskClamp = o.uvMatrix.uClampFrame, t.applyFilter(this, e, r, i))
                    }, e
                }(Lt),
                Dt = function() {
                    function t(t) {
                        this.renderer = t, this.enableScissor = !0, this.alphaMaskPool = [], this.maskDataPool = [], this.maskStack = [], this.alphaMaskIndex = 0
                    }
                    return t.prototype.setMaskStack = function(t) {
                        this.maskStack = t, this.renderer.scissor.setMaskStack(t), this.renderer.stencil.setMaskStack(t)
                    }, t.prototype.push = function(t, e) {
                        var r = e;
                        if (!r.isMaskData) {
                            var i = this.maskDataPool.pop() || new ht;
                            i.pooled = !0, i.maskObject = e, r = i
                        }
                        var o = 0 !== this.maskStack.length ? this.maskStack[this.maskStack.length - 1] : null;
                        if (r.copyCountersOrReset(o), r.autoDetect && this.detect(r), r._target = t, r.type !== n.A7.SPRITE && this.maskStack.push(r), r.enabled) switch (r.type) {
                            case n.A7.SCISSOR:
                                this.renderer.scissor.push(r);
                                break;
                            case n.A7.STENCIL:
                                this.renderer.stencil.push(r);
                                break;
                            case n.A7.SPRITE:
                                r.copyCountersOrReset(null), this.pushSpriteMask(r)
                        }
                        r.type === n.A7.SPRITE && this.maskStack.push(r)
                    }, t.prototype.pop = function(t) {
                        var e = this.maskStack.pop();
                        if (e && e._target === t) {
                            if (e.enabled) switch (e.type) {
                                case n.A7.SCISSOR:
                                    this.renderer.scissor.pop();
                                    break;
                                case n.A7.STENCIL:
                                    this.renderer.stencil.pop(e.maskObject);
                                    break;
                                case n.A7.SPRITE:
                                    this.popSpriteMask(e)
                            }
                            if (e.reset(), e.pooled && this.maskDataPool.push(e), 0 !== this.maskStack.length) {
                                var r = this.maskStack[this.maskStack.length - 1];
                                r.type === n.A7.SPRITE && r._filters && (r._filters[0].maskSprite = r.maskObject)
                            }
                        }
                    }, t.prototype.detect = function(t) {
                        t.maskObject.isSprite ? t.type = n.A7.SPRITE : this.enableScissor && this.renderer.scissor.testScissor(t) ? t.type = n.A7.SCISSOR : t.type = n.A7.STENCIL
                    }, t.prototype.pushSpriteMask = function(t) {
                        var e, r, i = t.maskObject,
                            n = t._target,
                            o = t._filters;
                        o || (o = this.alphaMaskPool[this.alphaMaskIndex]) || (o = this.alphaMaskPool[this.alphaMaskIndex] = [new Ft]);
                        var s, a, h = this.renderer,
                            u = h.renderTexture;
                        if (u.current) {
                            var c = u.current;
                            s = t.resolution || c.resolution, a = null !== (e = t.multisample) && void 0 !== e ? e : c.multisample
                        } else s = t.resolution || h.resolution, a = null !== (r = t.multisample) && void 0 !== r ? r : h.multisample;
                        o[0].resolution = s, o[0].multisample = a, o[0].maskSprite = i;
                        var f = n.filterArea;
                        n.filterArea = i.getBounds(!0), h.filter.push(n, o), n.filterArea = f, t._filters || this.alphaMaskIndex++
                    }, t.prototype.popSpriteMask = function(t) {
                        this.renderer.filter.pop(), t._filters ? t._filters[0].maskSprite = null : (this.alphaMaskIndex--, this.alphaMaskPool[this.alphaMaskIndex][0].maskSprite = null)
                    }, t.prototype.destroy = function() {
                        this.renderer = null
                    }, t
                }(),
                Bt = function() {
                    function t(t) {
                        this.renderer = t, this.maskStack = [], this.glConst = 0
                    }
                    return t.prototype.getStackLength = function() {
                        return this.maskStack.length
                    }, t.prototype.setMaskStack = function(t) {
                        var e = this.renderer.gl,
                            r = this.getStackLength();
                        this.maskStack = t;
                        var i = this.getStackLength();
                        i !== r && (0 === i ? e.disable(this.glConst) : (e.enable(this.glConst), this._useCurrent()))
                    }, t.prototype._useCurrent = function() {}, t.prototype.destroy = function() {
                        this.renderer = null, this.maskStack = null
                    }, t
                }(),
                Gt = new h.y3,
                kt = function(t) {
                    function e(e) {
                        var r = t.call(this, e) || this;
                        return r.glConst = WebGLRenderingContext.SCISSOR_TEST, r
                    }
                    return l(e, t), e.prototype.getStackLength = function() {
                        var t = this.maskStack[this.maskStack.length - 1];
                        return t ? t._scissorCounter : 0
                    }, e.prototype.calcScissorRect = function(t) {
                        if (!t._scissorRectLocal) {
                            var e = t._scissorRect,
                                r = t.maskObject,
                                i = this.renderer,
                                n = i.renderTexture;
                            r.renderable = !0;
                            var o = r.getBounds();
                            this.roundFrameToPixels(o, n.current ? n.current.resolution : i.resolution, n.sourceFrame, n.destinationFrame, i.projection.transform), r.renderable = !1, e && o.fit(e), t._scissorRectLocal = o
                        }
                    }, e.isMatrixRotated = function(t) {
                        if (!t) return !1;
                        var e = t.a,
                            r = t.b,
                            i = t.c,
                            n = t.d;
                        return (Math.abs(r) > 1e-4 || Math.abs(i) > 1e-4) && (Math.abs(e) > 1e-4 || Math.abs(n) > 1e-4)
                    }, e.prototype.testScissor = function(t) {
                        var r = t.maskObject;
                        if (!r.isFastRect || !r.isFastRect()) return !1;
                        if (e.isMatrixRotated(r.worldTransform)) return !1;
                        if (e.isMatrixRotated(this.renderer.projection.transform)) return !1;
                        this.calcScissorRect(t);
                        var i = t._scissorRectLocal;
                        return i.width > 0 && i.height > 0
                    }, e.prototype.roundFrameToPixels = function(t, r, i, n, o) {
                        e.isMatrixRotated(o) || ((o = o ? Gt.copyFrom(o) : Gt.identity()).translate(-i.x, -i.y).scale(n.width / i.width, n.height / i.height).translate(n.x, n.y), this.renderer.filter.transformAABB(o, t), t.fit(n), t.x = Math.round(t.x * r), t.y = Math.round(t.y * r), t.width = Math.round(t.width * r), t.height = Math.round(t.height * r))
                    }, e.prototype.push = function(t) {
                        t._scissorRectLocal || this.calcScissorRect(t);
                        var e = this.renderer.gl;
                        t._scissorRect || e.enable(e.SCISSOR_TEST), t._scissorCounter++, t._scissorRect = t._scissorRectLocal, this._useCurrent()
                    }, e.prototype.pop = function() {
                        var t = this.renderer.gl;
                        this.getStackLength() > 0 ? this._useCurrent() : t.disable(t.SCISSOR_TEST)
                    }, e.prototype._useCurrent = function() {
                        var t, e = this.maskStack[this.maskStack.length - 1]._scissorRect;
                        t = this.renderer.renderTexture.current ? e.y : this.renderer.height - e.height - e.y, this.renderer.gl.scissor(e.x, t, e.width, e.height)
                    }, e
                }(Bt),
                Xt = function(t) {
                    function e(e) {
                        var r = t.call(this, e) || this;
                        return r.glConst = WebGLRenderingContext.STENCIL_TEST, r
                    }
                    return l(e, t), e.prototype.getStackLength = function() {
                        var t = this.maskStack[this.maskStack.length - 1];
                        return t ? t._stencilCounter : 0
                    }, e.prototype.push = function(t) {
                        var e = t.maskObject,
                            r = this.renderer.gl,
                            i = t._stencilCounter;
                        0 === i && (this.renderer.framebuffer.forceStencil(), r.clearStencil(0), r.clear(r.STENCIL_BUFFER_BIT), r.enable(r.STENCIL_TEST)), t._stencilCounter++, r.colorMask(!1, !1, !1, !1), r.stencilFunc(r.EQUAL, i, 4294967295), r.stencilOp(r.KEEP, r.KEEP, r.INCR), e.renderable = !0, e.render(this.renderer), this.renderer.batch.flush(), e.renderable = !1, this._useCurrent()
                    }, e.prototype.pop = function(t) {
                        var e = this.renderer.gl;
                        0 === this.getStackLength() ? e.disable(e.STENCIL_TEST) : (e.colorMask(!1, !1, !1, !1), e.stencilOp(e.KEEP, e.KEEP, e.DECR), t.renderable = !0, t.render(this.renderer), this.renderer.batch.flush(), t.renderable = !1, this._useCurrent())
                    }, e.prototype._useCurrent = function() {
                        var t = this.renderer.gl;
                        t.colorMask(!0, !0, !0, !0), t.stencilFunc(t.EQUAL, this.getStackLength(), 4294967295), t.stencilOp(t.KEEP, t.KEEP, t.KEEP)
                    }, e
                }(Bt),
                Ht = function() {
                    function t(t) {
                        this.renderer = t, this.destinationFrame = null, this.sourceFrame = null, this.defaultFrame = null, this.projectionMatrix = new h.y3, this.transform = null
                    }
                    return t.prototype.update = function(t, e, r, i) {
                        this.destinationFrame = t || this.destinationFrame || this.defaultFrame, this.sourceFrame = e || this.sourceFrame || t, this.calculateProjection(this.destinationFrame, this.sourceFrame, r, i), this.transform && this.projectionMatrix.append(this.transform);
                        var n = this.renderer;
                        n.globalUniforms.uniforms.projectionMatrix = this.projectionMatrix, n.globalUniforms.update(), n.shader.shader && n.shader.syncUniformGroup(n.shader.shader.uniforms.globals)
                    }, t.prototype.calculateProjection = function(t, e, r, i) {
                        var n = this.projectionMatrix,
                            o = i ? -1 : 1;
                        n.identity(), n.a = 1 / e.width * 2, n.d = o * (1 / e.height * 2), n.tx = -1 - e.x * n.a, n.ty = -o - e.y * n.d
                    }, t.prototype.setTransform = function(t) {}, t.prototype.destroy = function() {
                        this.renderer = null
                    }, t
                }(),
                jt = new h.Ae,
                Vt = new h.Ae,
                Yt = function() {
                    function t(t) {
                        this.renderer = t, this.clearColor = t._backgroundColorRgba, this.defaultMaskStack = [], this.current = null, this.sourceFrame = new h.Ae, this.destinationFrame = new h.Ae, this.viewportFrame = new h.Ae
                    }
                    return t.prototype.bind = function(t, e, r) {
                        void 0 === t && (t = null);
                        var i, n, o, s = this.renderer;
                        this.current = t, t ? (o = (i = t.baseTexture).resolution, e || (jt.width = t.frame.width, jt.height = t.frame.height, e = jt), r || (Vt.x = t.frame.x, Vt.y = t.frame.y, Vt.width = e.width, Vt.height = e.height, r = Vt), n = i.framebuffer) : (o = s.resolution, e || (jt.width = s.screen.width, jt.height = s.screen.height, e = jt), r || ((r = jt).width = e.width, r.height = e.height));
                        var a = this.viewportFrame;
                        a.x = r.x * o, a.y = r.y * o, a.width = r.width * o, a.height = r.height * o, t || (a.y = s.view.height - (a.y + a.height)), a.ceil(), this.renderer.framebuffer.bind(n, a), this.renderer.projection.update(r, e, o, !n), t ? this.renderer.mask.setMaskStack(i.maskStack) : this.renderer.mask.setMaskStack(this.defaultMaskStack), this.sourceFrame.copyFrom(e), this.destinationFrame.copyFrom(r)
                    }, t.prototype.clear = function(t, e) {
                        t = this.current ? t || this.current.baseTexture.clearColor : t || this.clearColor;
                        var r = this.destinationFrame,
                            i = this.current ? this.current.baseTexture : this.renderer.screen,
                            n = r.width !== i.width || r.height !== i.height;
                        if (n) {
                            var o = this.viewportFrame,
                                s = o.x,
                                a = o.y,
                                h = o.width,
                                u = o.height;
                            s = Math.round(s), a = Math.round(a), h = Math.round(h), u = Math.round(u), this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST), this.renderer.gl.scissor(s, a, h, u)
                        }
                        this.renderer.framebuffer.clear(t[0], t[1], t[2], t[3], e), n && this.renderer.scissor.pop()
                    }, t.prototype.resize = function() {
                        this.bind(null)
                    }, t.prototype.reset = function() {
                        this.bind(null)
                    }, t.prototype.destroy = function() {
                        this.renderer = null
                    }, t
                }();

            function zt(t, e, r, i, n) {
                r.buffer.update(n)
            }
            var Wt = {
                    float: "\n        data[offset] = v;\n    ",
                    vec2: "\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n    ",
                    vec3: "\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n        data[offset+2] = v[2];\n\n    ",
                    vec4: "\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n        data[offset+2] = v[2];\n        data[offset+3] = v[3];\n    ",
                    mat2: "\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n\n        data[offset+4] = v[2];\n        data[offset+5] = v[3];\n    ",
                    mat3: "\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n        data[offset+2] = v[2];\n\n        data[offset + 4] = v[3];\n        data[offset + 5] = v[4];\n        data[offset + 6] = v[5];\n\n        data[offset + 8] = v[6];\n        data[offset + 9] = v[7];\n        data[offset + 10] = v[8];\n    ",
                    mat4: "\n        for(var i = 0; i < 16; i++)\n        {\n            data[offset + i] = v[i];\n        }\n    "
                },
                qt = {
                    float: 4,
                    vec2: 8,
                    vec3: 12,
                    vec4: 16,
                    int: 4,
                    ivec2: 8,
                    ivec3: 12,
                    ivec4: 16,
                    uint: 4,
                    uvec2: 8,
                    uvec3: 12,
                    uvec4: 16,
                    bool: 4,
                    bvec2: 8,
                    bvec3: 12,
                    bvec4: 16,
                    mat2: 32,
                    mat3: 48,
                    mat4: 64
                };
            var Kt = function() {
                function t(t, e) {
                    this.program = t, this.uniformData = e, this.uniformGroups = {}, this.uniformDirtyGroups = {}, this.uniformBufferBindings = {}
                }
                return t.prototype.destroy = function() {
                    this.uniformData = null, this.uniformGroups = null, this.uniformDirtyGroups = null, this.uniformBufferBindings = null, this.program = null
                }, t
            }();
            var $t = 0,
                Zt = {
                    textureCount: 0,
                    uboCount: 0
                },
                Qt = function() {
                    function t(t) {
                        this.destroyed = !1, this.renderer = t, this.systemCheck(), this.gl = null, this.shader = null, this.program = null, this.cache = {}, this._uboCache = {}, this.id = $t++
                    }
                    return t.prototype.systemCheck = function() {
                        if (! function() {
                                if ("boolean" == typeof xt) return xt;
                                try {
                                    var t = new Function("param1", "param2", "param3", "return param1[param2] === param3;");
                                    xt = !0 === t({
                                        a: "b"
                                    }, "a", "b")
                                } catch (t) {
                                    xt = !1
                                }
                                return xt
                            }()) throw new Error("Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support.")
                    }, t.prototype.contextChange = function(t) {
                        this.gl = t, this.reset()
                    }, t.prototype.bind = function(t, e) {
                        t.uniforms.globals = this.renderer.globalUniforms;
                        var r = t.program,
                            i = r.glPrograms[this.renderer.CONTEXT_UID] || this.generateProgram(t);
                        return this.shader = t, this.program !== r && (this.program = r, this.gl.useProgram(i.program)), e || (Zt.textureCount = 0, Zt.uboCount = 0, this.syncUniformGroup(t.uniformGroup, Zt)), i
                    }, t.prototype.setUniforms = function(t) {
                        var e = this.shader.program,
                            r = e.glPrograms[this.renderer.CONTEXT_UID];
                        e.syncUniforms(r.uniformData, t, this.renderer)
                    }, t.prototype.syncUniformGroup = function(t, e) {
                        var r = this.getGlProgram();
                        t.static && t.dirtyId === r.uniformDirtyGroups[t.id] || (r.uniformDirtyGroups[t.id] = t.dirtyId, this.syncUniforms(t, r, e))
                    }, t.prototype.syncUniforms = function(t, e, r) {
                        (t.syncUniforms[this.shader.program.id] || this.createSyncGroups(t))(e.uniformData, t.uniforms, this.renderer, r)
                    }, t.prototype.createSyncGroups = function(t) {
                        var e = this.getSignature(t, this.shader.program.uniformData, "u");
                        return this.cache[e] || (this.cache[e] = function(t, e) {
                            var r, i = ["\n        var v = null;\n        var cv = null;\n        var cu = null;\n        var t = 0;\n        var gl = renderer.gl;\n    "];
                            for (var n in t.uniforms) {
                                var o = e[n];
                                if (o) {
                                    for (var s = t.uniforms[n], a = !1, h = 0; h < bt.length; h++)
                                        if (bt[h].test(o, s)) {
                                            i.push(bt[h].code(n, s)), a = !0;
                                            break
                                        }
                                    if (!a) {
                                        var u = (1 === o.size ? At : Rt)[o.type].replace("location", 'ud["' + n + '"].location');
                                        i.push('\n            cu = ud["' + n + '"];\n            cv = cu.value;\n            v = uv["' + n + '"];\n            ' + u + ";")
                                    }
                                } else(null === (r = t.uniforms[n]) || void 0 === r ? void 0 : r.group) && (t.uniforms[n].ubo ? i.push("\n                        renderer.shader.syncUniformBufferGroup(uv." + n + ", '" + n + "');\n                    ") : i.push("\n                        renderer.shader.syncUniformGroup(uv." + n + ", syncData);\n                    "))
                            }
                            return new Function("ud", "uv", "renderer", "syncData", i.join("\n"))
                        }(t, this.shader.program.uniformData)), t.syncUniforms[this.shader.program.id] = this.cache[e], t.syncUniforms[this.shader.program.id]
                    }, t.prototype.syncUniformBufferGroup = function(t, e) {
                        var r = this.getGlProgram();
                        if (!t.static || 0 !== t.dirtyId || !r.uniformGroups[t.id]) {
                            t.dirtyId = 0;
                            var i = r.uniformGroups[t.id] || this.createSyncBufferGroup(t, r, e);
                            t.buffer.update(), i(r.uniformData, t.uniforms, this.renderer, Zt, t.buffer)
                        }
                        this.renderer.buffer.bindBufferBase(t.buffer, r.uniformBufferBindings[e])
                    }, t.prototype.createSyncBufferGroup = function(t, e, r) {
                        var i = this.renderer.gl;
                        this.renderer.buffer.bind(t.buffer);
                        var n = this.gl.getUniformBlockIndex(e.program, r);
                        e.uniformBufferBindings[r] = this.shader.uniformBindCount, i.uniformBlockBinding(e.program, n, this.shader.uniformBindCount), this.shader.uniformBindCount++;
                        var o = this.getSignature(t, this.shader.program.uniformData, "ubo"),
                            s = this._uboCache[o];
                        if (s || (s = this._uboCache[o] = function(t, e) {
                                if (!t.autoManage) return {
                                    size: 0,
                                    syncFunc: zt
                                };
                                for (var r = function(t, e) {
                                        var r = [];
                                        for (var i in t) e[i] && r.push(e[i]);
                                        return r.sort((function(t, e) {
                                            return t.index - e.index
                                        })), r
                                    }(t.uniforms, e), i = function(t) {
                                        for (var e = t.map((function(t) {
                                                return {
                                                    data: t,
                                                    offset: 0,
                                                    dataLen: 0,
                                                    dirty: 0
                                                }
                                            })), r = 0, i = 0, n = 0, o = 0; o < e.length; o++) {
                                            var s = e[o];
                                            if (r = qt[s.data.type], s.data.size > 1 && (r = Math.max(r, 16) * s.data.size), s.dataLen = r, i % r != 0 && i < 16) {
                                                var a = i % r % 16;
                                                i += a, n += a
                                            }
                                            i + r > 16 ? (n = 16 * Math.ceil(n / 16), s.offset = n, n += r, i = r) : (s.offset = n, i += r, n += r)
                                        }
                                        return {
                                            uboElements: e,
                                            size: n = 16 * Math.ceil(n / 16)
                                        }
                                    }(r), n = i.uboElements, o = i.size, s = ["\n    var v = null;\n    var v2 = null;\n    var cv = null;\n    var t = 0;\n    var gl = renderer.gl\n    var index = 0;\n    var data = buffer.data;\n    "], a = 0; a < n.length; a++) {
                                    for (var h = n[a], u = t.uniforms[h.data.name], c = h.data.name, f = !1, l = 0; l < bt.length; l++) {
                                        var d = bt[l];
                                        if (d.codeUbo && d.test(h.data, u)) {
                                            s.push("offset = " + h.offset / 4 + ";", bt[l].codeUbo(h.data.name, u)), f = !0;
                                            break
                                        }
                                    }
                                    if (!f)
                                        if (h.data.size > 1) {
                                            var p = yt(h.data.type),
                                                _ = Math.max(qt[h.data.type] / 16, 1),
                                                v = p / _,
                                                m = (4 - v % 4) % 4;
                                            s.push("\n                cv = ud." + c + ".value;\n                v = uv." + c + ";\n                offset = " + h.offset / 4 + ";\n\n                t = 0;\n\n                for(var i=0; i < " + h.data.size * _ + "; i++)\n                {\n                    for(var j = 0; j < " + v + "; j++)\n                    {\n                        data[offset++] = v[t++];\n                    }\n                    offset += " + m + ";\n                }\n\n                ")
                                        } else {
                                            var y = Wt[h.data.type];
                                            s.push("\n                cv = ud." + c + ".value;\n                v = uv." + c + ";\n                offset = " + h.offset / 4 + ";\n                " + y + ";\n                ")
                                        }
                                }
                                return s.push("\n       renderer.buffer.update(buffer);\n    "), {
                                    size: o,
                                    syncFunc: new Function("ud", "uv", "renderer", "syncData", "buffer", s.join("\n"))
                                }
                            }(t, this.shader.program.uniformData)), t.autoManage) {
                            var a = new Float32Array(s.size / 4);
                            t.buffer.update(a)
                        }
                        return e.uniformGroups[t.id] = s.syncFunc, e.uniformGroups[t.id]
                    }, t.prototype.getSignature = function(t, e, r) {
                        var i = t.uniforms,
                            n = [r + "-"];
                        for (var o in i) n.push(o), e[o] && n.push(e[o].type);
                        return n.join("-")
                    }, t.prototype.getGlProgram = function() {
                        return this.shader ? this.shader.program.glPrograms[this.renderer.CONTEXT_UID] : null
                    }, t.prototype.generateProgram = function(t) {
                        var e = this.gl,
                            r = t.program,
                            i = function(t, e) {
                                var r = ut(t, t.VERTEX_SHADER, e.vertexSrc),
                                    i = ut(t, t.FRAGMENT_SHADER, e.fragmentSrc),
                                    n = t.createProgram();
                                if (t.attachShader(n, r), t.attachShader(n, i), t.linkProgram(n), t.getProgramParameter(n, t.LINK_STATUS) || function(t, e, r, i) {
                                        t.getProgramParameter(e, t.LINK_STATUS) || (t.getShaderParameter(r, t.COMPILE_STATUS) || ct(t, r), t.getShaderParameter(i, t.COMPILE_STATUS) || ct(t, i), t.getProgramInfoLog(e))
                                    }(t, n, r, i), e.attributeData = function(t, e) {
                                        for (var r = {}, i = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES), n = 0; n < i; n++) {
                                            var o = e.getActiveAttrib(t, n);
                                            if (0 !== o.name.indexOf("gl_")) {
                                                var s = Tt(e, o.type),
                                                    a = {
                                                        type: s,
                                                        name: o.name,
                                                        size: yt(s),
                                                        location: e.getAttribLocation(t, o.name)
                                                    };
                                                r[o.name] = a
                                            }
                                        }
                                        return r
                                    }(n, t), e.uniformData = function(t, e) {
                                        for (var r = {}, i = e.getProgramParameter(t, e.ACTIVE_UNIFORMS), n = 0; n < i; n++) {
                                            var o = e.getActiveUniform(t, n),
                                                s = o.name.replace(/\[.*?\]$/, ""),
                                                a = !!o.name.match(/\[.*?\]$/),
                                                h = Tt(e, o.type);
                                            r[s] = {
                                                name: s,
                                                index: n,
                                                type: h,
                                                size: o.size,
                                                isArray: a,
                                                value: lt(h, o.size)
                                            }
                                        }
                                        return r
                                    }(n, t), !/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(e.vertexSrc)) {
                                    var o = Object.keys(e.attributeData);
                                    o.sort((function(t, e) {
                                        return t > e ? 1 : -1
                                    }));
                                    for (var s = 0; s < o.length; s++) e.attributeData[o[s]].location = s, t.bindAttribLocation(n, s, o[s]);
                                    t.linkProgram(n)
                                }
                                t.deleteShader(r), t.deleteShader(i);
                                var a = {};
                                for (var s in e.uniformData) {
                                    var h = e.uniformData[s];
                                    a[s] = {
                                        location: t.getUniformLocation(n, s),
                                        value: lt(h.type, h.size)
                                    }
                                }
                                return new Kt(n, a)
                            }(e, r);
                        return r.glPrograms[this.renderer.CONTEXT_UID] = i, i
                    }, t.prototype.reset = function() {
                        this.program = null, this.shader = null
                    }, t.prototype.destroy = function() {
                        this.renderer = null, this.destroyed = !0
                    }, t
                }(),
                Jt = function() {
                    function t() {
                        this.gl = null, this.stateId = 0, this.polygonOffset = 0, this.blendMode = n.T$.NONE, this._blendEq = !1, this.map = [], this.map[0] = this.setBlend, this.map[1] = this.setOffset, this.map[2] = this.setCullFace, this.map[3] = this.setDepthTest, this.map[4] = this.setFrontFace, this.map[5] = this.setDepthMask, this.checks = [], this.defaultState = new Ct, this.defaultState.blend = !0
                    }
                    return t.prototype.contextChange = function(t) {
                        this.gl = t, this.blendModes = function(t, e) {
                            return void 0 === e && (e = []), e[n.T$.NORMAL] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.T$.ADD] = [t.ONE, t.ONE], e[n.T$.MULTIPLY] = [t.DST_COLOR, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.T$.SCREEN] = [t.ONE, t.ONE_MINUS_SRC_COLOR, t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.T$.OVERLAY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.T$.DARKEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.T$.LIGHTEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.T$.COLOR_DODGE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.T$.COLOR_BURN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.T$.HARD_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.T$.SOFT_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.T$.DIFFERENCE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.T$.EXCLUSION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.T$.HUE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.T$.SATURATION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.T$.COLOR] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.T$.LUMINOSITY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.T$.NONE] = [0, 0], e[n.T$.NORMAL_NPM] = [t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.T$.ADD_NPM] = [t.SRC_ALPHA, t.ONE, t.ONE, t.ONE], e[n.T$.SCREEN_NPM] = [t.SRC_ALPHA, t.ONE_MINUS_SRC_COLOR, t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.T$.SRC_IN] = [t.DST_ALPHA, t.ZERO], e[n.T$.SRC_OUT] = [t.ONE_MINUS_DST_ALPHA, t.ZERO], e[n.T$.SRC_ATOP] = [t.DST_ALPHA, t.ONE_MINUS_SRC_ALPHA], e[n.T$.DST_OVER] = [t.ONE_MINUS_DST_ALPHA, t.ONE], e[n.T$.DST_IN] = [t.ZERO, t.SRC_ALPHA], e[n.T$.DST_OUT] = [t.ZERO, t.ONE_MINUS_SRC_ALPHA], e[n.T$.DST_ATOP] = [t.ONE_MINUS_DST_ALPHA, t.SRC_ALPHA], e[n.T$.XOR] = [t.ONE_MINUS_DST_ALPHA, t.ONE_MINUS_SRC_ALPHA], e[n.T$.SUBTRACT] = [t.ONE, t.ONE, t.ONE, t.ONE, t.FUNC_REVERSE_SUBTRACT, t.FUNC_ADD], e
                        }(t), this.set(this.defaultState), this.reset()
                    }, t.prototype.set = function(t) {
                        if (t = t || this.defaultState, this.stateId !== t.data) {
                            for (var e = this.stateId ^ t.data, r = 0; e;) 1 & e && this.map[r].call(this, !!(t.data & 1 << r)), e >>= 1, r++;
                            this.stateId = t.data
                        }
                        for (r = 0; r < this.checks.length; r++) this.checks[r](this, t)
                    }, t.prototype.forceState = function(t) {
                        t = t || this.defaultState;
                        for (var e = 0; e < this.map.length; e++) this.map[e].call(this, !!(t.data & 1 << e));
                        for (e = 0; e < this.checks.length; e++) this.checks[e](this, t);
                        this.stateId = t.data
                    }, t.prototype.setBlend = function(e) {
                        this.updateCheck(t.checkBlendMode, e), this.gl[e ? "enable" : "disable"](this.gl.BLEND)
                    }, t.prototype.setOffset = function(e) {
                        this.updateCheck(t.checkPolygonOffset, e), this.gl[e ? "enable" : "disable"](this.gl.POLYGON_OFFSET_FILL)
                    }, t.prototype.setDepthTest = function(t) {
                        this.gl[t ? "enable" : "disable"](this.gl.DEPTH_TEST)
                    }, t.prototype.setDepthMask = function(t) {
                        this.gl.depthMask(t)
                    }, t.prototype.setCullFace = function(t) {
                        this.gl[t ? "enable" : "disable"](this.gl.CULL_FACE)
                    }, t.prototype.setFrontFace = function(t) {
                        this.gl.frontFace(this.gl[t ? "CW" : "CCW"])
                    }, t.prototype.setBlendMode = function(t) {
                        if (t !== this.blendMode) {
                            this.blendMode = t;
                            var e = this.blendModes[t],
                                r = this.gl;
                            2 === e.length ? r.blendFunc(e[0], e[1]) : r.blendFuncSeparate(e[0], e[1], e[2], e[3]), 6 === e.length ? (this._blendEq = !0, r.blendEquationSeparate(e[4], e[5])) : this._blendEq && (this._blendEq = !1, r.blendEquationSeparate(r.FUNC_ADD, r.FUNC_ADD))
                        }
                    }, t.prototype.setPolygonOffset = function(t, e) {
                        this.gl.polygonOffset(t, e)
                    }, t.prototype.reset = function() {
                        this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !1), this.forceState(this.defaultState), this._blendEq = !0, this.blendMode = -1, this.setBlendMode(0)
                    }, t.prototype.updateCheck = function(t, e) {
                        var r = this.checks.indexOf(t);
                        e && -1 === r ? this.checks.push(t) : e || -1 === r || this.checks.splice(r, 1)
                    }, t.checkBlendMode = function(t, e) {
                        t.setBlendMode(e.blendMode)
                    }, t.checkPolygonOffset = function(t, e) {
                        t.setPolygonOffset(1, e.polygonOffset)
                    }, t.prototype.destroy = function() {
                        this.gl = null
                    }, t
                }(),
                te = function() {
                    function t(t) {
                        this.renderer = t, this.count = 0, this.checkCount = 0, this.maxIdle = i.X.GC_MAX_IDLE, this.checkCountMax = i.X.GC_MAX_CHECK_COUNT, this.mode = i.X.GC_MODE
                    }
                    return t.prototype.postrender = function() {
                        this.renderer.renderingToScreen && (this.count++, this.mode !== n.UN.MANUAL && (this.checkCount++, this.checkCount > this.checkCountMax && (this.checkCount = 0, this.run())))
                    }, t.prototype.run = function() {
                        for (var t = this.renderer.texture, e = t.managedTextures, r = !1, i = 0; i < e.length; i++) {
                            var n = e[i];
                            !n.framebuffer && this.count - n.touched > this.maxIdle && (t.destroyTexture(n, !0), e[i] = null, r = !0)
                        }
                        if (r) {
                            var o = 0;
                            for (i = 0; i < e.length; i++) null !== e[i] && (e[o++] = e[i]);
                            e.length = o
                        }
                    }, t.prototype.unload = function(t) {
                        var e = this.renderer.texture,
                            r = t._texture;
                        r && !r.framebuffer && e.destroyTexture(r);
                        for (var i = t.children.length - 1; i >= 0; i--) this.unload(t.children[i])
                    }, t.prototype.destroy = function() {
                        this.renderer = null
                    }, t
                }(),
                ee = function(t) {
                    this.texture = t, this.width = -1, this.height = -1, this.dirtyId = -1, this.dirtyStyleId = -1, this.mipmap = !1, this.wrapMode = 33071, this.type = n.vK.UNSIGNED_BYTE, this.internalFormat = n.I2.RGBA, this.samplerType = 0
                },
                re = function() {
                    function t(t) {
                        this.renderer = t, this.boundTextures = [], this.currentLocation = -1, this.managedTextures = [], this._unknownBoundTextures = !1, this.unknownTexture = new m, this.hasIntegerTextures = !1
                    }
                    return t.prototype.contextChange = function() {
                        var t = this.gl = this.renderer.gl;
                        this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.webGLVersion = this.renderer.context.webGLVersion, this.internalFormats = function(t) {
                            var e, r, i, o, s, a, h, u, c, f, l, d, p, _, v, m, y, g, E, T, x, b, A;
                            return "WebGL2RenderingContext" in globalThis && t instanceof globalThis.WebGL2RenderingContext ? ((e = {})[n.vK.UNSIGNED_BYTE] = ((r = {})[n.I2.RGBA] = t.RGBA8, r[n.I2.RGB] = t.RGB8, r[n.I2.RG] = t.RG8, r[n.I2.RED] = t.R8, r[n.I2.RGBA_INTEGER] = t.RGBA8UI, r[n.I2.RGB_INTEGER] = t.RGB8UI, r[n.I2.RG_INTEGER] = t.RG8UI, r[n.I2.RED_INTEGER] = t.R8UI, r[n.I2.ALPHA] = t.ALPHA, r[n.I2.LUMINANCE] = t.LUMINANCE, r[n.I2.LUMINANCE_ALPHA] = t.LUMINANCE_ALPHA, r), e[n.vK.BYTE] = ((i = {})[n.I2.RGBA] = t.RGBA8_SNORM, i[n.I2.RGB] = t.RGB8_SNORM, i[n.I2.RG] = t.RG8_SNORM, i[n.I2.RED] = t.R8_SNORM, i[n.I2.RGBA_INTEGER] = t.RGBA8I, i[n.I2.RGB_INTEGER] = t.RGB8I, i[n.I2.RG_INTEGER] = t.RG8I, i[n.I2.RED_INTEGER] = t.R8I, i), e[n.vK.UNSIGNED_SHORT] = ((o = {})[n.I2.RGBA_INTEGER] = t.RGBA16UI, o[n.I2.RGB_INTEGER] = t.RGB16UI, o[n.I2.RG_INTEGER] = t.RG16UI, o[n.I2.RED_INTEGER] = t.R16UI, o[n.I2.DEPTH_COMPONENT] = t.DEPTH_COMPONENT16, o), e[n.vK.SHORT] = ((s = {})[n.I2.RGBA_INTEGER] = t.RGBA16I, s[n.I2.RGB_INTEGER] = t.RGB16I, s[n.I2.RG_INTEGER] = t.RG16I, s[n.I2.RED_INTEGER] = t.R16I, s), e[n.vK.UNSIGNED_INT] = ((a = {})[n.I2.RGBA_INTEGER] = t.RGBA32UI, a[n.I2.RGB_INTEGER] = t.RGB32UI, a[n.I2.RG_INTEGER] = t.RG32UI, a[n.I2.RED_INTEGER] = t.R32UI, a[n.I2.DEPTH_COMPONENT] = t.DEPTH_COMPONENT24, a), e[n.vK.INT] = ((h = {})[n.I2.RGBA_INTEGER] = t.RGBA32I, h[n.I2.RGB_INTEGER] = t.RGB32I, h[n.I2.RG_INTEGER] = t.RG32I, h[n.I2.RED_INTEGER] = t.R32I, h), e[n.vK.FLOAT] = ((u = {})[n.I2.RGBA] = t.RGBA32F, u[n.I2.RGB] = t.RGB32F, u[n.I2.RG] = t.RG32F, u[n.I2.RED] = t.R32F, u[n.I2.DEPTH_COMPONENT] = t.DEPTH_COMPONENT32F, u), e[n.vK.HALF_FLOAT] = ((c = {})[n.I2.RGBA] = t.RGBA16F, c[n.I2.RGB] = t.RGB16F, c[n.I2.RG] = t.RG16F, c[n.I2.RED] = t.R16F, c), e[n.vK.UNSIGNED_SHORT_5_6_5] = ((f = {})[n.I2.RGB] = t.RGB565, f), e[n.vK.UNSIGNED_SHORT_4_4_4_4] = ((l = {})[n.I2.RGBA] = t.RGBA4, l), e[n.vK.UNSIGNED_SHORT_5_5_5_1] = ((d = {})[n.I2.RGBA] = t.RGB5_A1, d), e[n.vK.UNSIGNED_INT_2_10_10_10_REV] = ((p = {})[n.I2.RGBA] = t.RGB10_A2, p[n.I2.RGBA_INTEGER] = t.RGB10_A2UI, p), e[n.vK.UNSIGNED_INT_10F_11F_11F_REV] = ((_ = {})[n.I2.RGB] = t.R11F_G11F_B10F, _), e[n.vK.UNSIGNED_INT_5_9_9_9_REV] = ((v = {})[n.I2.RGB] = t.RGB9_E5, v), e[n.vK.UNSIGNED_INT_24_8] = ((m = {})[n.I2.DEPTH_STENCIL] = t.DEPTH24_STENCIL8, m), e[n.vK.FLOAT_32_UNSIGNED_INT_24_8_REV] = ((y = {})[n.I2.DEPTH_STENCIL] = t.DEPTH32F_STENCIL8, y), A = e) : ((g = {})[n.vK.UNSIGNED_BYTE] = ((E = {})[n.I2.RGBA] = t.RGBA, E[n.I2.RGB] = t.RGB, E[n.I2.ALPHA] = t.ALPHA, E[n.I2.LUMINANCE] = t.LUMINANCE, E[n.I2.LUMINANCE_ALPHA] = t.LUMINANCE_ALPHA, E), g[n.vK.UNSIGNED_SHORT_5_6_5] = ((T = {})[n.I2.RGB] = t.RGB, T), g[n.vK.UNSIGNED_SHORT_4_4_4_4] = ((x = {})[n.I2.RGBA] = t.RGBA, x), g[n.vK.UNSIGNED_SHORT_5_5_5_1] = ((b = {})[n.I2.RGBA] = t.RGBA, b), A = g), A
                        }(t);
                        var e = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS);
                        this.boundTextures.length = e;
                        for (var r = 0; r < e; r++) this.boundTextures[r] = null;
                        this.emptyTextures = {};
                        var i = new ee(t.createTexture());
                        for (t.bindTexture(t.TEXTURE_2D, i.texture), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, new Uint8Array(4)), this.emptyTextures[t.TEXTURE_2D] = i, this.emptyTextures[t.TEXTURE_CUBE_MAP] = new ee(t.createTexture()), t.bindTexture(t.TEXTURE_CUBE_MAP, this.emptyTextures[t.TEXTURE_CUBE_MAP].texture), r = 0; r < 6; r++) t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + r, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, null);
                        for (t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MIN_FILTER, t.LINEAR), r = 0; r < this.boundTextures.length; r++) this.bind(null, r)
                    }, t.prototype.bind = function(t, e) {
                        void 0 === e && (e = 0);
                        var r = this.gl;
                        if ((t = null == t ? void 0 : t.castToBaseTexture()) && t.valid && !t.parentTextureArray) {
                            t.touched = this.renderer.textureGC.count;
                            var i = t._glTextures[this.CONTEXT_UID] || this.initTexture(t);
                            this.boundTextures[e] !== t && (this.currentLocation !== e && (this.currentLocation = e, r.activeTexture(r.TEXTURE0 + e)), r.bindTexture(t.target, i.texture)), i.dirtyId !== t.dirtyId && (this.currentLocation !== e && (this.currentLocation = e, r.activeTexture(r.TEXTURE0 + e)), this.updateTexture(t)), this.boundTextures[e] = t
                        } else this.currentLocation !== e && (this.currentLocation = e, r.activeTexture(r.TEXTURE0 + e)), r.bindTexture(r.TEXTURE_2D, this.emptyTextures[r.TEXTURE_2D].texture), this.boundTextures[e] = null
                    }, t.prototype.reset = function() {
                        this._unknownBoundTextures = !0, this.hasIntegerTextures = !1, this.currentLocation = -1;
                        for (var t = 0; t < this.boundTextures.length; t++) this.boundTextures[t] = this.unknownTexture
                    }, t.prototype.unbind = function(t) {
                        var e = this.gl,
                            r = this.boundTextures;
                        if (this._unknownBoundTextures) {
                            this._unknownBoundTextures = !1;
                            for (var i = 0; i < r.length; i++) r[i] === this.unknownTexture && this.bind(null, i)
                        }
                        for (i = 0; i < r.length; i++) r[i] === t && (this.currentLocation !== i && (e.activeTexture(e.TEXTURE0 + i), this.currentLocation = i), e.bindTexture(t.target, this.emptyTextures[t.target].texture), r[i] = null)
                    }, t.prototype.ensureSamplerType = function(t) {
                        var e = this,
                            r = e.boundTextures,
                            i = e.hasIntegerTextures,
                            o = e.CONTEXT_UID;
                        if (i)
                            for (var s = t - 1; s >= 0; --s) {
                                var a = r[s];
                                a && a._glTextures[o].samplerType !== n.oT.FLOAT && this.renderer.texture.unbind(a)
                            }
                    }, t.prototype.initTexture = function(t) {
                        var e = new ee(this.gl.createTexture());
                        return e.dirtyId = -1, t._glTextures[this.CONTEXT_UID] = e, this.managedTextures.push(t), t.on("dispose", this.destroyTexture, this), e
                    }, t.prototype.initTextureType = function(t, e) {
                        var r, i;
                        e.internalFormat = null !== (i = null === (r = this.internalFormats[t.type]) || void 0 === r ? void 0 : r[t.format]) && void 0 !== i ? i : t.format, 2 === this.webGLVersion && t.type === n.vK.HALF_FLOAT ? e.type = this.gl.HALF_FLOAT : e.type = t.type
                    }, t.prototype.updateTexture = function(t) {
                        var e = t._glTextures[this.CONTEXT_UID];
                        if (e) {
                            var r = this.renderer;
                            if (this.initTextureType(t, e), t.resource && t.resource.upload(r, t, e)) e.samplerType !== n.oT.FLOAT && (this.hasIntegerTextures = !0);
                            else {
                                var i = t.realWidth,
                                    o = t.realHeight,
                                    s = r.gl;
                                (e.width !== i || e.height !== o || e.dirtyId < 0) && (e.width = i, e.height = o, s.texImage2D(t.target, 0, e.internalFormat, i, o, 0, t.format, e.type, null))
                            }
                            t.dirtyStyleId !== e.dirtyStyleId && this.updateTextureStyle(t), e.dirtyId = t.dirtyId
                        }
                    }, t.prototype.destroyTexture = function(t, e) {
                        var r = this.gl;
                        if ((t = t.castToBaseTexture())._glTextures[this.CONTEXT_UID] && (this.unbind(t), r.deleteTexture(t._glTextures[this.CONTEXT_UID].texture), t.off("dispose", this.destroyTexture, this), delete t._glTextures[this.CONTEXT_UID], !e)) {
                            var i = this.managedTextures.indexOf(t); - 1 !== i && (0, o.Er)(this.managedTextures, i, 1)
                        }
                    }, t.prototype.updateTextureStyle = function(t) {
                        var e = t._glTextures[this.CONTEXT_UID];
                        e && (t.mipmap !== n.WB.POW2 && 2 === this.webGLVersion || t.isPowerOfTwo ? e.mipmap = t.mipmap >= 1 : e.mipmap = !1, 2 === this.webGLVersion || t.isPowerOfTwo ? e.wrapMode = t.wrapMode : e.wrapMode = n.Nt.CLAMP, t.resource && t.resource.style(this.renderer, t, e) || this.setStyle(t, e), e.dirtyStyleId = t.dirtyStyleId)
                    }, t.prototype.setStyle = function(t, e) {
                        var r = this.gl;
                        if (e.mipmap && t.mipmap !== n.WB.ON_MANUAL && r.generateMipmap(t.target), r.texParameteri(t.target, r.TEXTURE_WRAP_S, e.wrapMode), r.texParameteri(t.target, r.TEXTURE_WRAP_T, e.wrapMode), e.mipmap) {
                            r.texParameteri(t.target, r.TEXTURE_MIN_FILTER, t.scaleMode === n.aH.LINEAR ? r.LINEAR_MIPMAP_LINEAR : r.NEAREST_MIPMAP_NEAREST);
                            var i = this.renderer.context.extensions.anisotropicFiltering;
                            if (i && t.anisotropicLevel > 0 && t.scaleMode === n.aH.LINEAR) {
                                var o = Math.min(t.anisotropicLevel, r.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT));
                                r.texParameterf(t.target, i.TEXTURE_MAX_ANISOTROPY_EXT, o)
                            }
                        } else r.texParameteri(t.target, r.TEXTURE_MIN_FILTER, t.scaleMode === n.aH.LINEAR ? r.LINEAR : r.NEAREST);
                        r.texParameteri(t.target, r.TEXTURE_MAG_FILTER, t.scaleMode === n.aH.LINEAR ? r.LINEAR : r.NEAREST)
                    }, t.prototype.destroy = function() {
                        this.renderer = null
                    }, t
                }(),
                ie = {
                    __proto__: null,
                    FilterSystem: Q,
                    BatchSystem: tt,
                    ContextSystem: rt,
                    FramebufferSystem: ot,
                    GeometrySystem: at,
                    MaskSystem: Dt,
                    ScissorSystem: kt,
                    StencilSystem: Xt,
                    ProjectionSystem: Ht,
                    RenderTextureSystem: Yt,
                    ShaderSystem: Qt,
                    StateSystem: Jt,
                    TextureGCSystem: te,
                    TextureSystem: re
                },
                ne = new h.y3,
                oe = function(t) {
                    function e(e, r) {
                        void 0 === e && (e = n.N3.UNKNOWN);
                        var s = t.call(this) || this;
                        return r = Object.assign({}, i.X.RENDER_OPTIONS, r), s.options = r, s.type = e, s.screen = new h.Ae(0, 0, r.width, r.height), s.view = r.view || document.createElement("canvas"), s.resolution = r.resolution || i.X.RESOLUTION, s.useContextAlpha = r.useContextAlpha, s.autoDensity = !!r.autoDensity, s.preserveDrawingBuffer = r.preserveDrawingBuffer, s.clearBeforeRender = r.clearBeforeRender, s._backgroundColor = 0, s._backgroundColorRgba = [0, 0, 0, 1], s._backgroundColorString = "#000000", s.backgroundColor = r.backgroundColor || s._backgroundColor, s.backgroundAlpha = r.backgroundAlpha, void 0 !== r.transparent && ((0, o.a1)("6.0.0", "Option transparent is deprecated, please use backgroundAlpha instead."), s.useContextAlpha = r.transparent, s.backgroundAlpha = r.transparent ? 0 : 1), s._lastObjectRendered = null, s.plugins = {}, s
                    }
                    return l(e, t), e.prototype.initPlugins = function(t) {
                        for (var e in t) this.plugins[e] = new t[e](this)
                    }, Object.defineProperty(e.prototype, "width", {
                        get: function() {
                            return this.view.width
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "height", {
                        get: function() {
                            return this.view.height
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.prototype.resize = function(t, e) {
                        this.view.width = Math.round(t * this.resolution), this.view.height = Math.round(e * this.resolution);
                        var r = this.view.width / this.resolution,
                            i = this.view.height / this.resolution;
                        this.screen.width = r, this.screen.height = i, this.autoDensity && (this.view.style.width = r + "px", this.view.style.height = i + "px"), this.emit("resize", r, i)
                    }, e.prototype.generateTexture = function(t, e, r, i) {
                        void 0 === e && (e = {}), "number" == typeof e && ((0, o.a1)("6.1.0", "generateTexture options (scaleMode, resolution, region) are now object options."), e = {
                            scaleMode: e,
                            resolution: r,
                            region: i
                        });
                        var n = e.region,
                            s = function(t, e) {
                                var r = {};
                                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (r[i] = t[i]);
                                if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                                    var n = 0;
                                    for (i = Object.getOwnPropertySymbols(t); n < i.length; n++) e.indexOf(i[n]) < 0 && (r[i[n]] = t[i[n]])
                                }
                                return r
                            }(e, ["region"]);
                        0 === (i = n || t.getLocalBounds(null, !0)).width && (i.width = 1), 0 === i.height && (i.height = 1);
                        var a = U.create(d({
                            width: i.width,
                            height: i.height
                        }, s));
                        return ne.tx = -i.x, ne.ty = -i.y, this.render(t, {
                            renderTexture: a,
                            clear: !1,
                            transform: ne,
                            skipUpdateTransform: !!t.parent
                        }), a
                    }, e.prototype.destroy = function(t) {
                        for (var e in this.plugins) this.plugins[e].destroy(), this.plugins[e] = null;
                        t && this.view.parentNode && this.view.parentNode.removeChild(this.view);
                        var r = this;
                        r.plugins = null, r.type = n.N3.UNKNOWN, r.view = null, r.screen = null, r._tempDisplayObjectParent = null, r.options = null, this._backgroundColorRgba = null, this._backgroundColorString = null, this._lastObjectRendered = null
                    }, Object.defineProperty(e.prototype, "backgroundColor", {
                        get: function() {
                            return this._backgroundColor
                        },
                        set: function(t) {
                            this._backgroundColor = t, this._backgroundColorString = (0, o.XN)(t), (0, o.wK)(t, this._backgroundColorRgba)
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "backgroundAlpha", {
                        get: function() {
                            return this._backgroundColorRgba[3]
                        },
                        set: function(t) {
                            this._backgroundColorRgba[3] = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e
                }(o.vp),
                se = function(t) {
                    this.buffer = t || null, this.updateID = -1, this.byteLength = -1, this.refCount = 0
                },
                ae = function() {
                    function t(t) {
                        this.renderer = t, this.managedBuffers = {}, this.boundBufferBases = {}
                    }
                    return t.prototype.destroy = function() {
                        this.renderer = null
                    }, t.prototype.contextChange = function() {
                        this.disposeAll(!0), this.gl = this.renderer.gl, this.CONTEXT_UID = this.renderer.CONTEXT_UID
                    }, t.prototype.bind = function(t) {
                        var e = this.gl,
                            r = this.CONTEXT_UID,
                            i = t._glBuffers[r] || this.createGLBuffer(t);
                        e.bindBuffer(t.type, i.buffer)
                    }, t.prototype.bindBufferBase = function(t, e) {
                        var r = this.gl,
                            i = this.CONTEXT_UID;
                        if (this.boundBufferBases[e] !== t) {
                            var n = t._glBuffers[i] || this.createGLBuffer(t);
                            this.boundBufferBases[e] = t, r.bindBufferBase(r.UNIFORM_BUFFER, e, n.buffer)
                        }
                    }, t.prototype.bindBufferRange = function(t, e, r) {
                        var i = this.gl,
                            n = this.CONTEXT_UID;
                        r = r || 0;
                        var o = t._glBuffers[n] || this.createGLBuffer(t);
                        i.bindBufferRange(i.UNIFORM_BUFFER, e || 0, o.buffer, 256 * r, 256)
                    }, t.prototype.update = function(t) {
                        var e = this.gl,
                            r = this.CONTEXT_UID,
                            i = t._glBuffers[r];
                        if (t._updateID !== i.updateID)
                            if (i.updateID = t._updateID, e.bindBuffer(t.type, i.buffer), i.byteLength >= t.data.byteLength) e.bufferSubData(t.type, 0, t.data);
                            else {
                                var n = t.static ? e.STATIC_DRAW : e.DYNAMIC_DRAW;
                                i.byteLength = t.data.byteLength, e.bufferData(t.type, t.data, n)
                            }
                    }, t.prototype.dispose = function(t, e) {
                        if (this.managedBuffers[t.id]) {
                            delete this.managedBuffers[t.id];
                            var r = t._glBuffers[this.CONTEXT_UID],
                                i = this.gl;
                            t.disposeRunner.remove(this), r && (e || i.deleteBuffer(r.buffer), delete t._glBuffers[this.CONTEXT_UID])
                        }
                    }, t.prototype.disposeAll = function(t) {
                        for (var e = Object.keys(this.managedBuffers), r = 0; r < e.length; r++) this.dispose(this.managedBuffers[e[r]], t)
                    }, t.prototype.createGLBuffer = function(t) {
                        var e = this.CONTEXT_UID,
                            r = this.gl;
                        return t._glBuffers[e] = new se(r.createBuffer()), this.managedBuffers[t.id] = t, t.disposeRunner.add(this), t._glBuffers[e]
                    }, t
                }(),
                he = function(t) {
                    function e(r) {
                        var i = t.call(this, n.N3.WEBGL, r) || this;
                        return r = i.options, i.gl = null, i.CONTEXT_UID = 0, i.runners = {
                            destroy: new s("destroy"),
                            contextChange: new s("contextChange"),
                            reset: new s("reset"),
                            update: new s("update"),
                            postrender: new s("postrender"),
                            prerender: new s("prerender"),
                            resize: new s("resize")
                        }, i.runners.contextChange.add(i), i.globalUniforms = new q({
                            projectionMatrix: new h.y3
                        }, !0), i.addSystem(Dt, "mask").addSystem(rt, "context").addSystem(Jt, "state").addSystem(Qt, "shader").addSystem(re, "texture").addSystem(ae, "buffer").addSystem(at, "geometry").addSystem(ot, "framebuffer").addSystem(kt, "scissor").addSystem(Xt, "stencil").addSystem(Ht, "projection").addSystem(te, "textureGC").addSystem(Q, "filter").addSystem(Yt, "renderTexture").addSystem(tt, "batch"), i.initPlugins(e.__plugins), i.multisample = void 0, r.context ? i.context.initFromContext(r.context) : i.context.initFromOptions({
                            alpha: !!i.useContextAlpha,
                            antialias: r.antialias,
                            premultipliedAlpha: i.useContextAlpha && "notMultiplied" !== i.useContextAlpha,
                            stencil: !0,
                            preserveDrawingBuffer: r.preserveDrawingBuffer,
                            powerPreference: i.options.powerPreference
                        }), i.renderingToScreen = !0, (0, o.DE)(2 === i.context.webGLVersion ? "WebGL 2" : "WebGL 1"), i.resize(i.options.width, i.options.height), i
                    }
                    return l(e, t), e.create = function(t) {
                        if ((0, o.HR)()) return new e(t);
                        throw new Error('WebGL unsupported in this browser, use "pixi.js-legacy" for fallback canvas2d support.')
                    }, e.prototype.contextChange = function() {
                        var t, e = this.gl;
                        if (1 === this.context.webGLVersion) {
                            var r = e.getParameter(e.FRAMEBUFFER_BINDING);
                            e.bindFramebuffer(e.FRAMEBUFFER, null), t = e.getParameter(e.SAMPLES), e.bindFramebuffer(e.FRAMEBUFFER, r)
                        } else r = e.getParameter(e.DRAW_FRAMEBUFFER_BINDING), e.bindFramebuffer(e.DRAW_FRAMEBUFFER, null), t = e.getParameter(e.SAMPLES), e.bindFramebuffer(e.DRAW_FRAMEBUFFER, r);
                        t >= n.G5.HIGH ? this.multisample = n.G5.HIGH : t >= n.G5.MEDIUM ? this.multisample = n.G5.MEDIUM : t >= n.G5.LOW ? this.multisample = n.G5.LOW : this.multisample = n.G5.NONE
                    }, e.prototype.addSystem = function(t, e) {
                        var r = new t(this);
                        if (this[e]) throw new Error('Whoops! The name "' + e + '" is already in use');
                        for (var i in this[e] = r, this.runners) this.runners[i].add(r);
                        return this
                    }, e.prototype.render = function(t, e) {
                        var r, i, n, s;
                        if (e && (e instanceof U ? ((0, o.a1)("6.0.0", "Renderer#render arguments changed, use options instead."), r = e, i = arguments[2], n = arguments[3], s = arguments[4]) : (r = e.renderTexture, i = e.clear, n = e.transform, s = e.skipUpdateTransform)), this.renderingToScreen = !r, this.runners.prerender.emit(), this.emit("prerender"), this.projection.transform = n, !this.context.isLost) {
                            if (r || (this._lastObjectRendered = t), !s) {
                                var a = t.enableTempParent();
                                t.updateTransform(), t.disableTempParent(a)
                            }
                            this.renderTexture.bind(r), this.batch.currentRenderer.start(), (void 0 !== i ? i : this.clearBeforeRender) && this.renderTexture.clear(), t.render(this), this.batch.currentRenderer.flush(), r && r.baseTexture.update(), this.runners.postrender.emit(), this.projection.transform = null, this.emit("postrender")
                        }
                    }, e.prototype.generateTexture = function(e, r, i, n) {
                        void 0 === r && (r = {});
                        var o = t.prototype.generateTexture.call(this, e, r, i, n);
                        return this.framebuffer.blit(), o
                    }, e.prototype.resize = function(e, r) {
                        t.prototype.resize.call(this, e, r), this.runners.resize.emit(this.screen.height, this.screen.width)
                    }, e.prototype.reset = function() {
                        return this.runners.reset.emit(), this
                    }, e.prototype.clear = function() {
                        this.renderTexture.bind(), this.renderTexture.clear()
                    }, e.prototype.destroy = function(e) {
                        for (var r in this.runners.destroy.emit(), this.runners) this.runners[r].destroy();
                        t.prototype.destroy.call(this, e), this.gl = null
                    }, Object.defineProperty(e.prototype, "extract", {
                        get: function() {
                            return (0, o.a1)("6.0.0", "Renderer#extract has been deprecated, please use Renderer#plugins.extract instead."), this.plugins.extract
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.registerPlugin = function(t, r) {
                        e.__plugins = e.__plugins || {}, e.__plugins[t] = r
                    }, e
                }(oe);

            function ue(t) {
                return he.create(t)
            }
            var ce = "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n",
                fe = function() {
                    this.texArray = null, this.blend = 0, this.type = n.lg.TRIANGLES, this.start = 0, this.size = 0, this.data = null
                },
                le = function() {
                    function t() {
                        this.elements = [], this.ids = [], this.count = 0
                    }
                    return t.prototype.clear = function() {
                        for (var t = 0; t < this.count; t++) this.elements[t] = null;
                        this.count = 0
                    }, t
                }(),
                de = function() {
                    function t(t) {
                        "number" == typeof t ? this.rawBinaryData = new ArrayBuffer(t) : t instanceof Uint8Array ? this.rawBinaryData = t.buffer : this.rawBinaryData = t, this.uint32View = new Uint32Array(this.rawBinaryData), this.float32View = new Float32Array(this.rawBinaryData)
                    }
                    return Object.defineProperty(t.prototype, "int8View", {
                        get: function() {
                            return this._int8View || (this._int8View = new Int8Array(this.rawBinaryData)), this._int8View
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "uint8View", {
                        get: function() {
                            return this._uint8View || (this._uint8View = new Uint8Array(this.rawBinaryData)), this._uint8View
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "int16View", {
                        get: function() {
                            return this._int16View || (this._int16View = new Int16Array(this.rawBinaryData)), this._int16View
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "uint16View", {
                        get: function() {
                            return this._uint16View || (this._uint16View = new Uint16Array(this.rawBinaryData)), this._uint16View
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "int32View", {
                        get: function() {
                            return this._int32View || (this._int32View = new Int32Array(this.rawBinaryData)), this._int32View
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.view = function(t) {
                        return this[t + "View"]
                    }, t.prototype.destroy = function() {
                        this.rawBinaryData = null, this._int8View = null, this._uint8View = null, this._int16View = null, this._uint16View = null, this._int32View = null, this.uint32View = null, this.float32View = null
                    }, t.sizeOf = function(t) {
                        switch (t) {
                            case "int8":
                            case "uint8":
                                return 1;
                            case "int16":
                            case "uint16":
                                return 2;
                            case "int32":
                            case "uint32":
                            case "float32":
                                return 4;
                            default:
                                throw new Error(t + " isn't a valid view type")
                        }
                    }, t
                }(),
                pe = function(t) {
                    function e(e) {
                        var r = t.call(this, e) || this;
                        return r.shaderGenerator = null, r.geometryClass = null, r.vertexSize = null, r.state = Ct.for2d(), r.size = 4 * i.X.SPRITE_BATCH_SIZE, r._vertexCount = 0, r._indexCount = 0, r._bufferedElements = [], r._bufferedTextures = [], r._bufferSize = 0, r._shader = null, r._packedGeometries = [], r._packedGeometryPoolSize = 2, r._flushId = 0, r._aBuffers = {}, r._iBuffers = {}, r.MAX_TEXTURES = 1, r.renderer.on("prerender", r.onPrerender, r), e.runners.contextChange.add(r), r._dcIndex = 0, r._aIndex = 0, r._iIndex = 0, r._attributeBuffer = null, r._indexBuffer = null, r._tempBoundTextures = [], r
                    }
                    return l(e, t), e.prototype.contextChange = function() {
                        var t = this.renderer.gl;
                        i.X.PREFER_ENV === n.Vi.WEBGL_LEGACY ? this.MAX_TEXTURES = 1 : (this.MAX_TEXTURES = Math.min(t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS), i.X.SPRITE_MAX_TEXTURES), this.MAX_TEXTURES = function(t, e) {
                            if (0 === t) throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");
                            for (var r = e.createShader(e.FRAGMENT_SHADER);;) {
                                var i = It.replace(/%forloop%/gi, St(t));
                                if (e.shaderSource(r, i), e.compileShader(r), e.getShaderParameter(r, e.COMPILE_STATUS)) break;
                                t = t / 2 | 0
                            }
                            return t
                        }(this.MAX_TEXTURES, t)), this._shader = this.shaderGenerator.generateShader(this.MAX_TEXTURES);
                        for (var e = 0; e < this._packedGeometryPoolSize; e++) this._packedGeometries[e] = new this.geometryClass;
                        this.initFlushBuffers()
                    }, e.prototype.initFlushBuffers = function() {
                        for (var t = e._drawCallPool, r = e._textureArrayPool, i = this.size / 4, n = Math.floor(i / this.MAX_TEXTURES) + 1; t.length < i;) t.push(new fe);
                        for (; r.length < n;) r.push(new le);
                        for (var o = 0; o < this.MAX_TEXTURES; o++) this._tempBoundTextures[o] = null
                    }, e.prototype.onPrerender = function() {
                        this._flushId = 0
                    }, e.prototype.render = function(t) {
                        t._texture.valid && (this._vertexCount + t.vertexData.length / 2 > this.size && this.flush(), this._vertexCount += t.vertexData.length / 2, this._indexCount += t.indices.length, this._bufferedTextures[this._bufferSize] = t._texture.baseTexture, this._bufferedElements[this._bufferSize++] = t)
                    }, e.prototype.buildTexturesAndDrawCalls = function() {
                        var t = this._bufferedTextures,
                            r = this.MAX_TEXTURES,
                            i = e._textureArrayPool,
                            n = this.renderer.batch,
                            o = this._tempBoundTextures,
                            s = this.renderer.textureGC.count,
                            a = ++m._globalBatch,
                            h = 0,
                            u = i[0],
                            c = 0;
                        n.copyBoundTextures(o, r);
                        for (var f = 0; f < this._bufferSize; ++f) {
                            var l = t[f];
                            t[f] = null, l._batchEnabled !== a && (u.count >= r && (n.boundArray(u, o, a, r), this.buildDrawCalls(u, c, f), c = f, u = i[++h], ++a), l._batchEnabled = a, l.touched = s, u.elements[u.count++] = l)
                        }
                        for (u.count > 0 && (n.boundArray(u, o, a, r), this.buildDrawCalls(u, c, this._bufferSize), ++h, ++a), f = 0; f < o.length; f++) o[f] = null;
                        m._globalBatch = a
                    }, e.prototype.buildDrawCalls = function(t, r, i) {
                        var n = this,
                            s = n._bufferedElements,
                            a = n._attributeBuffer,
                            h = n._indexBuffer,
                            u = n.vertexSize,
                            c = e._drawCallPool,
                            f = this._dcIndex,
                            l = this._aIndex,
                            d = this._iIndex,
                            p = c[f];
                        p.start = this._iIndex, p.texArray = t;
                        for (var _ = r; _ < i; ++_) {
                            var v = s[_],
                                m = v._texture.baseTexture,
                                y = o.YA[m.alphaMode ? 1 : 0][v.blendMode];
                            s[_] = null, r < _ && p.blend !== y && (p.size = d - p.start, r = _, (p = c[++f]).texArray = t, p.start = d), this.packInterleavedGeometry(v, a, h, l, d), l += v.vertexData.length / 2 * u, d += v.indices.length, p.blend = y
                        }
                        r < i && (p.size = d - p.start, ++f), this._dcIndex = f, this._aIndex = l, this._iIndex = d
                    }, e.prototype.bindAndClearTexArray = function(t) {
                        for (var e = this.renderer.texture, r = 0; r < t.count; r++) e.bind(t.elements[r], t.ids[r]), t.elements[r] = null;
                        t.count = 0
                    }, e.prototype.updateGeometry = function() {
                        var t = this,
                            e = t._packedGeometries,
                            r = t._attributeBuffer,
                            n = t._indexBuffer;
                        i.X.CAN_UPLOAD_SAME_BUFFER ? (e[this._flushId]._buffer.update(r.rawBinaryData), e[this._flushId]._indexBuffer.update(n), this.renderer.geometry.updateBuffers()) : (this._packedGeometryPoolSize <= this._flushId && (this._packedGeometryPoolSize++, e[this._flushId] = new this.geometryClass), e[this._flushId]._buffer.update(r.rawBinaryData), e[this._flushId]._indexBuffer.update(n), this.renderer.geometry.bind(e[this._flushId]), this.renderer.geometry.updateBuffers(), this._flushId++)
                    }, e.prototype.drawBatches = function() {
                        for (var t = this._dcIndex, r = this.renderer, i = r.gl, n = r.state, o = e._drawCallPool, s = null, a = 0; a < t; a++) {
                            var h = o[a],
                                u = h.texArray,
                                c = h.type,
                                f = h.size,
                                l = h.start,
                                d = h.blend;
                            s !== u && (s = u, this.bindAndClearTexArray(u)), this.state.blendMode = d, n.set(this.state), i.drawElements(c, f, i.UNSIGNED_SHORT, 2 * l)
                        }
                    }, e.prototype.flush = function() {
                        0 !== this._vertexCount && (this._attributeBuffer = this.getAttributeBuffer(this._vertexCount), this._indexBuffer = this.getIndexBuffer(this._indexCount), this._aIndex = 0, this._iIndex = 0, this._dcIndex = 0, this.buildTexturesAndDrawCalls(), this.updateGeometry(), this.drawBatches(), this._bufferSize = 0, this._vertexCount = 0, this._indexCount = 0)
                    }, e.prototype.start = function() {
                        this.renderer.state.set(this.state), this.renderer.texture.ensureSamplerType(this.MAX_TEXTURES), this.renderer.shader.bind(this._shader), i.X.CAN_UPLOAD_SAME_BUFFER && this.renderer.geometry.bind(this._packedGeometries[this._flushId])
                    }, e.prototype.stop = function() {
                        this.flush()
                    }, e.prototype.destroy = function() {
                        for (var e = 0; e < this._packedGeometryPoolSize; e++) this._packedGeometries[e] && this._packedGeometries[e].destroy();
                        this.renderer.off("prerender", this.onPrerender, this), this._aBuffers = null, this._iBuffers = null, this._packedGeometries = null, this._attributeBuffer = null, this._indexBuffer = null, this._shader && (this._shader.destroy(), this._shader = null), t.prototype.destroy.call(this)
                    }, e.prototype.getAttributeBuffer = function(t) {
                        var e = (0, o.a9)(Math.ceil(t / 8)),
                            r = (0, o.k3)(e),
                            i = 8 * e;
                        this._aBuffers.length <= r && (this._iBuffers.length = r + 1);
                        var n = this._aBuffers[i];
                        return n || (this._aBuffers[i] = n = new de(i * this.vertexSize * 4)), n
                    }, e.prototype.getIndexBuffer = function(t) {
                        var e = (0, o.a9)(Math.ceil(t / 12)),
                            r = (0, o.k3)(e),
                            i = 12 * e;
                        this._iBuffers.length <= r && (this._iBuffers.length = r + 1);
                        var n = this._iBuffers[r];
                        return n || (this._iBuffers[r] = n = new Uint16Array(i)), n
                    }, e.prototype.packInterleavedGeometry = function(t, e, r, i, n) {
                        for (var s = e.uint32View, a = e.float32View, h = i / this.vertexSize, u = t.uvs, c = t.indices, f = t.vertexData, l = t._texture.baseTexture._batchLocation, d = Math.min(t.worldAlpha, 1), p = d < 1 && t._texture.baseTexture.alphaMode ? (0, o.rA)(t._tintRGB, d) : t._tintRGB + (255 * d << 24), _ = 0; _ < f.length; _ += 2) a[i++] = f[_], a[i++] = f[_ + 1], a[i++] = u[_], a[i++] = u[_ + 1], s[i++] = p, a[i++] = l;
                        for (_ = 0; _ < c.length; _++) r[n++] = h + c[_]
                    }, e._drawCallPool = [], e._textureArrayPool = [], e
                }(J),
                _e = function() {
                    function t(t, e) {
                        if (this.vertexSrc = t, this.fragTemplate = e, this.programCache = {}, this.defaultGroupCache = {}, e.indexOf("%count%") < 0) throw new Error('Fragment template must contain "%count%".');
                        if (e.indexOf("%forloop%") < 0) throw new Error('Fragment template must contain "%forloop%".')
                    }
                    return t.prototype.generateShader = function(t) {
                        if (!this.programCache[t]) {
                            for (var e = new Int32Array(t), r = 0; r < t; r++) e[r] = r;
                            this.defaultGroupCache[t] = q.from({
                                uSamplers: e
                            }, !0);
                            var i = this.fragTemplate;
                            i = (i = i.replace(/%count%/gi, "" + t)).replace(/%forloop%/gi, this.generateSampleSrc(t)), this.programCache[t] = new Nt(this.vertexSrc, i)
                        }
                        var n = {
                            tint: new Float32Array([1, 1, 1, 1]),
                            translationMatrix: new h.y3,
                            default: this.defaultGroupCache[t]
                        };
                        return new Pt(this.programCache[t], n)
                    }, t.prototype.generateSampleSrc = function(t) {
                        var e = "";
                        e += "\n", e += "\n";
                        for (var r = 0; r < t; r++) r > 0 && (e += "\nelse "), r < t - 1 && (e += "if(vTextureId < " + r + ".5)"), e += "\n{", e += "\n\tcolor = texture2D(uSamplers[" + r + "], vTextureCoord);", e += "\n}";
                        return (e += "\n") + "\n"
                    }, t
                }(),
                ve = function(t) {
                    function e(e) {
                        void 0 === e && (e = !1);
                        var r = t.call(this) || this;
                        return r._buffer = new G(null, e, !1), r._indexBuffer = new G(null, e, !0), r.addAttribute("aVertexPosition", r._buffer, 2, !1, n.vK.FLOAT).addAttribute("aTextureCoord", r._buffer, 2, !1, n.vK.FLOAT).addAttribute("aColor", r._buffer, 4, !0, n.vK.UNSIGNED_BYTE).addAttribute("aTextureId", r._buffer, 1, !0, n.vK.FLOAT).addIndex(r._indexBuffer), r
                    }
                    return l(e, t), e
                }(V),
                me = "precision highp float;\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\nattribute float aTextureId;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform vec4 tint;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\n\nvoid main(void){\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vTextureId = aTextureId;\n    vColor = aColor * tint;\n}\n",
                ye = "varying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\nuniform sampler2D uSamplers[%count%];\n\nvoid main(void){\n    vec4 color;\n    %forloop%\n    gl_FragColor = color * vColor;\n}\n",
                ge = function() {
                    function t() {}
                    return t.create = function(t) {
                        var e = Object.assign({
                                vertex: me,
                                fragment: ye,
                                geometryClass: ve,
                                vertexSize: 6
                            }, t),
                            r = e.vertex,
                            i = e.fragment,
                            n = e.vertexSize,
                            o = e.geometryClass;
                        return function(t) {
                            function e(e) {
                                var s = t.call(this, e) || this;
                                return s.shaderGenerator = new _e(r, i), s.geometryClass = o, s.vertexSize = n, s
                            }
                            return l(e, t), e
                        }(pe)
                    }, Object.defineProperty(t, "defaultVertexSrc", {
                        get: function() {
                            return me
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t, "defaultFragmentTemplate", {
                        get: function() {
                            return ye
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }().create(),
                Ee = {},
                Te = function(t) {
                    Object.defineProperty(Ee, t, {
                        get: function() {
                            return (0, o.a1)("6.0.0", "PIXI.systems." + t + " has moved to PIXI." + t), S[t]
                        }
                    })
                };
            for (var xe in S) Te(xe);
            var be = {},
                Ae = function(t) {
                    Object.defineProperty(be, t, {
                        get: function() {
                            return (0, o.a1)("6.0.0", "PIXI.resources." + t + " has moved to PIXI." + t), ie[t]
                        }
                    })
                };
            for (var xe in ie) Ae(xe)
        },
        550: function(t, e, r) {
            "use strict";
            r.d(e, {
                aN: function() {
                    return g
                },
                kC: function() {
                    return d
                }
            });
            var i = r(6710),
                n = function() {
                    function t(t, e, r) {
                        void 0 === e && (e = !1), this._fn = t, this._once = e, this._thisArg = r, this._next = this._prev = this._owner = null
                    }
                    return t.prototype.detach = function() {
                        return null !== this._owner && (this._owner.detach(this), !0)
                    }, t
                }();

            function o(t, e) {
                return t._head ? (t._tail._next = e, e._prev = t._tail, t._tail = e) : (t._head = e, t._tail = e), e._owner = t, e
            }
            var s, a = function() {
                function t() {
                    this._head = this._tail = void 0
                }
                return t.prototype.handlers = function(t) {
                    void 0 === t && (t = !1);
                    var e = this._head;
                    if (t) return !!e;
                    for (var r = []; e;) r.push(e), e = e._next;
                    return r
                }, t.prototype.has = function(t) {
                    if (!(t instanceof n)) throw new Error("MiniSignal#has(): First arg must be a SignalBinding object.");
                    return t._owner === this
                }, t.prototype.dispatch = function() {
                    for (var t = arguments, e = [], r = 0; r < arguments.length; r++) e[r] = t[r];
                    var i = this._head;
                    if (!i) return !1;
                    for (; i;) i._once && this.detach(i), i._fn.apply(i._thisArg, e), i = i._next;
                    return !0
                }, t.prototype.add = function(t, e) {
                    if (void 0 === e && (e = null), "function" != typeof t) throw new Error("MiniSignal#add(): First arg must be a Function.");
                    return o(this, new n(t, !1, e))
                }, t.prototype.once = function(t, e) {
                    if (void 0 === e && (e = null), "function" != typeof t) throw new Error("MiniSignal#once(): First arg must be a Function.");
                    return o(this, new n(t, !0, e))
                }, t.prototype.detach = function(t) {
                    if (!(t instanceof n)) throw new Error("MiniSignal#detach(): First arg must be a SignalBinding object.");
                    return t._owner !== this || (t._prev && (t._prev._next = t._next), t._next && (t._next._prev = t._prev), t === this._head ? (this._head = t._next, null === t._next && (this._tail = null)) : t === this._tail && (this._tail = t._prev, this._tail._next = null), t._owner = null), this
                }, t.prototype.detachAll = function() {
                    var t = this._head;
                    if (!t) return this;
                    for (this._head = this._tail = null; t;) t._owner = null, t = t._next;
                    return this
                }, t
            }();

            function h(t, e) {
                e = e || {};
                for (var r = {
                        key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
                        q: {
                            name: "queryKey",
                            parser: /(?:^|&)([^&=]*)=?([^&]*)/g
                        },
                        parser: {
                            strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                            loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
                        }
                    }, i = r.parser[e.strictMode ? "strict" : "loose"].exec(t), n = {}, o = 14; o--;) n[r.key[o]] = i[o] || "";
                return n[r.q.name] = {}, n[r.key[12]].replace(r.q.parser, (function(t, e, i) {
                    e && (n[r.q.name][e] = i)
                })), n
            }
            var u = null;

            function c() {}

            function f(t, e, r) {
                e && 0 === e.indexOf(".") && (e = e.substring(1)), e && (t[e] = r)
            }

            function l(t) {
                return t.toString().replace("object ", "")
            }
            var d = function() {
                function t(e, r, i) {
                    if (this._dequeue = c, this._onLoadBinding = null, this._elementTimer = 0, this._boundComplete = null, this._boundOnError = null, this._boundOnProgress = null, this._boundOnTimeout = null, this._boundXhrOnError = null, this._boundXhrOnTimeout = null, this._boundXhrOnAbort = null, this._boundXhrOnLoad = null, "string" != typeof e || "string" != typeof r) throw new Error("Both name and url are required for constructing a resource.");
                    i = i || {}, this._flags = 0, this._setFlag(t.STATUS_FLAGS.DATA_URL, 0 === r.indexOf("data:")), this.name = e, this.url = r, this.extension = this._getExtension(), this.data = null, this.crossOrigin = !0 === i.crossOrigin ? "anonymous" : i.crossOrigin, this.timeout = i.timeout || 0, this.loadType = i.loadType || this._determineLoadType(), this.xhrType = i.xhrType, this.metadata = i.metadata || {}, this.error = null, this.xhr = null, this.children = [], this.type = t.TYPE.UNKNOWN, this.progressChunk = 0, this._dequeue = c, this._onLoadBinding = null, this._elementTimer = 0, this._boundComplete = this.complete.bind(this), this._boundOnError = this._onError.bind(this), this._boundOnProgress = this._onProgress.bind(this), this._boundOnTimeout = this._onTimeout.bind(this), this._boundXhrOnError = this._xhrOnError.bind(this), this._boundXhrOnTimeout = this._xhrOnTimeout.bind(this), this._boundXhrOnAbort = this._xhrOnAbort.bind(this), this._boundXhrOnLoad = this._xhrOnLoad.bind(this), this.onStart = new a, this.onProgress = new a, this.onComplete = new a, this.onAfterMiddleware = new a
                }
                return t.setExtensionLoadType = function(e, r) {
                    f(t._loadTypeMap, e, r)
                }, t.setExtensionXhrType = function(e, r) {
                    f(t._xhrTypeMap, e, r)
                }, Object.defineProperty(t.prototype, "isDataUrl", {
                    get: function() {
                        return this._hasFlag(t.STATUS_FLAGS.DATA_URL)
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isComplete", {
                    get: function() {
                        return this._hasFlag(t.STATUS_FLAGS.COMPLETE)
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isLoading", {
                    get: function() {
                        return this._hasFlag(t.STATUS_FLAGS.LOADING)
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.complete = function() {
                    this._clearEvents(), this._finish()
                }, t.prototype.abort = function(e) {
                    if (!this.error) {
                        if (this.error = new Error(e), this._clearEvents(), this.xhr) this.xhr.abort();
                        else if (this.xdr) this.xdr.abort();
                        else if (this.data)
                            if (this.data.src) this.data.src = t.EMPTY_GIF;
                            else
                                for (; this.data.firstChild;) this.data.removeChild(this.data.firstChild);
                        this._finish()
                    }
                }, t.prototype.load = function(e) {
                    var r = this;
                    if (!this.isLoading)
                        if (this.isComplete) e && setTimeout((function() {
                            return e(r)
                        }), 1);
                        else switch (e && this.onComplete.once(e), this._setFlag(t.STATUS_FLAGS.LOADING, !0), this.onStart.dispatch(this), !1 !== this.crossOrigin && "string" == typeof this.crossOrigin || (this.crossOrigin = this._determineCrossOrigin(this.url)), this.loadType) {
                            case t.LOAD_TYPE.IMAGE:
                                this.type = t.TYPE.IMAGE, this._loadElement("image");
                                break;
                            case t.LOAD_TYPE.AUDIO:
                                this.type = t.TYPE.AUDIO, this._loadSourceElement("audio");
                                break;
                            case t.LOAD_TYPE.VIDEO:
                                this.type = t.TYPE.VIDEO, this._loadSourceElement("video");
                                break;
                            case t.LOAD_TYPE.XHR:
                            default:
                                void 0 === s && (s = !(!globalThis.XDomainRequest || "withCredentials" in new XMLHttpRequest)), s && this.crossOrigin ? this._loadXdr() : this._loadXhr()
                        }
                }, t.prototype._hasFlag = function(t) {
                    return 0 != (this._flags & t)
                }, t.prototype._setFlag = function(t, e) {
                    this._flags = e ? this._flags | t : this._flags & ~t
                }, t.prototype._clearEvents = function() {
                    clearTimeout(this._elementTimer), this.data && this.data.removeEventListener && (this.data.removeEventListener("error", this._boundOnError, !1), this.data.removeEventListener("load", this._boundComplete, !1), this.data.removeEventListener("progress", this._boundOnProgress, !1), this.data.removeEventListener("canplaythrough", this._boundComplete, !1)), this.xhr && (this.xhr.removeEventListener ? (this.xhr.removeEventListener("error", this._boundXhrOnError, !1), this.xhr.removeEventListener("timeout", this._boundXhrOnTimeout, !1), this.xhr.removeEventListener("abort", this._boundXhrOnAbort, !1), this.xhr.removeEventListener("progress", this._boundOnProgress, !1), this.xhr.removeEventListener("load", this._boundXhrOnLoad, !1)) : (this.xhr.onerror = null, this.xhr.ontimeout = null, this.xhr.onprogress = null, this.xhr.onload = null))
                }, t.prototype._finish = function() {
                    if (this.isComplete) throw new Error("Complete called again for an already completed resource.");
                    this._setFlag(t.STATUS_FLAGS.COMPLETE, !0), this._setFlag(t.STATUS_FLAGS.LOADING, !1), this.onComplete.dispatch(this)
                }, t.prototype._loadElement = function(t) {
                    this.metadata.loadElement ? this.data = this.metadata.loadElement : "image" === t && void 0 !== globalThis.Image ? this.data = new Image : this.data = document.createElement(t), this.crossOrigin && (this.data.crossOrigin = this.crossOrigin), this.metadata.skipSource || (this.data.src = this.url), this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1), this.timeout && (this._elementTimer = setTimeout(this._boundOnTimeout, this.timeout))
                }, t.prototype._loadSourceElement = function(t) {
                    if (this.metadata.loadElement ? this.data = this.metadata.loadElement : "audio" === t && void 0 !== globalThis.Audio ? this.data = new Audio : this.data = document.createElement(t), null !== this.data) {
                        if (this.crossOrigin && (this.data.crossOrigin = this.crossOrigin), !this.metadata.skipSource)
                            if (navigator.isCocoonJS) this.data.src = Array.isArray(this.url) ? this.url[0] : this.url;
                            else if (Array.isArray(this.url))
                            for (var e = this.metadata.mimeType, r = 0; r < this.url.length; ++r) this.data.appendChild(this._createSource(t, this.url[r], Array.isArray(e) ? e[r] : e));
                        else e = this.metadata.mimeType, this.data.appendChild(this._createSource(t, this.url, Array.isArray(e) ? e[0] : e));
                        this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1), this.data.addEventListener("canplaythrough", this._boundComplete, !1), this.data.load(), this.timeout && (this._elementTimer = setTimeout(this._boundOnTimeout, this.timeout))
                    } else this.abort("Unsupported element: " + t)
                }, t.prototype._loadXhr = function() {
                    "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
                    var e = this.xhr = new XMLHttpRequest;
                    "use-credentials" === this.crossOrigin && (e.withCredentials = !0), e.open("GET", this.url, !0), e.timeout = this.timeout, this.xhrType === t.XHR_RESPONSE_TYPE.JSON || this.xhrType === t.XHR_RESPONSE_TYPE.DOCUMENT ? e.responseType = t.XHR_RESPONSE_TYPE.TEXT : e.responseType = this.xhrType, e.addEventListener("error", this._boundXhrOnError, !1), e.addEventListener("timeout", this._boundXhrOnTimeout, !1), e.addEventListener("abort", this._boundXhrOnAbort, !1), e.addEventListener("progress", this._boundOnProgress, !1), e.addEventListener("load", this._boundXhrOnLoad, !1), e.send()
                }, t.prototype._loadXdr = function() {
                    "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
                    var t = this.xhr = new globalThis.XDomainRequest;
                    t.timeout = this.timeout || 5e3, t.onerror = this._boundXhrOnError, t.ontimeout = this._boundXhrOnTimeout, t.onprogress = this._boundOnProgress, t.onload = this._boundXhrOnLoad, t.open("GET", this.url, !0), setTimeout((function() {
                        return t.send()
                    }), 1)
                }, t.prototype._createSource = function(t, e, r) {
                    r || (r = t + "/" + this._getExtension(e));
                    var i = document.createElement("source");
                    return i.src = e, i.type = r, i
                }, t.prototype._onError = function(t) {
                    this.abort("Failed to load element using: " + t.target.nodeName)
                }, t.prototype._onProgress = function(t) {
                    t && t.lengthComputable && this.onProgress.dispatch(this, t.loaded / t.total)
                }, t.prototype._onTimeout = function() {
                    this.abort("Load timed out.")
                }, t.prototype._xhrOnError = function() {
                    var t = this.xhr;
                    this.abort(l(t) + " Request failed. Status: " + t.status + ', text: "' + t.statusText + '"')
                }, t.prototype._xhrOnTimeout = function() {
                    var t = this.xhr;
                    this.abort(l(t) + " Request timed out.")
                }, t.prototype._xhrOnAbort = function() {
                    var t = this.xhr;
                    this.abort(l(t) + " Request was aborted by the user.")
                }, t.prototype._xhrOnLoad = function() {
                    var e = this.xhr,
                        r = "",
                        i = void 0 === e.status ? 200 : e.status;
                    if ("" !== e.responseType && "text" !== e.responseType && void 0 !== e.responseType || (r = e.responseText), 0 === i && (r.length > 0 || e.responseType === t.XHR_RESPONSE_TYPE.BUFFER) ? i = 200 : 1223 === i && (i = 204), 2 == (i / 100 | 0)) {
                        if (this.xhrType === t.XHR_RESPONSE_TYPE.TEXT) this.data = r, this.type = t.TYPE.TEXT;
                        else if (this.xhrType === t.XHR_RESPONSE_TYPE.JSON) try {
                            this.data = JSON.parse(r), this.type = t.TYPE.JSON
                        } catch (t) {
                            return void this.abort("Error trying to parse loaded json: " + t)
                        } else if (this.xhrType === t.XHR_RESPONSE_TYPE.DOCUMENT) try {
                            if (globalThis.DOMParser) {
                                var n = new DOMParser;
                                this.data = n.parseFromString(r, "text/xml")
                            } else {
                                var o = document.createElement("div");
                                o.innerHTML = r, this.data = o
                            }
                            this.type = t.TYPE.XML
                        } catch (t) {
                            return void this.abort("Error trying to parse loaded xml: " + t)
                        } else this.data = e.response || r;
                        this.complete()
                    } else this.abort("[" + e.status + "] " + e.statusText + ": " + e.responseURL)
                }, t.prototype._determineCrossOrigin = function(t, e) {
                    if (0 === t.indexOf("data:")) return "";
                    if (globalThis.origin !== globalThis.location.origin) return "anonymous";
                    e = e || globalThis.location, u || (u = document.createElement("a")), u.href = t;
                    var r = h(u.href, {
                            strictMode: !0
                        }),
                        i = !r.port && "" === e.port || r.port === e.port,
                        n = r.protocol ? r.protocol + ":" : "";
                    return r.host === e.hostname && i && n === e.protocol ? "" : "anonymous"
                }, t.prototype._determineXhrType = function() {
                    return t._xhrTypeMap[this.extension] || t.XHR_RESPONSE_TYPE.TEXT
                }, t.prototype._determineLoadType = function() {
                    return t._loadTypeMap[this.extension] || t.LOAD_TYPE.XHR
                }, t.prototype._getExtension = function(t) {
                    void 0 === t && (t = this.url);
                    var e = "";
                    if (this.isDataUrl) {
                        var r = t.indexOf("/");
                        e = t.substring(r + 1, t.indexOf(";", r))
                    } else {
                        var i = t.indexOf("?"),
                            n = t.indexOf("#"),
                            o = Math.min(i > -1 ? i : t.length, n > -1 ? n : t.length);
                        e = (t = t.substring(0, o)).substring(t.lastIndexOf(".") + 1)
                    }
                    return e.toLowerCase()
                }, t.prototype._getMimeFromXhrType = function(e) {
                    switch (e) {
                        case t.XHR_RESPONSE_TYPE.BUFFER:
                            return "application/octet-binary";
                        case t.XHR_RESPONSE_TYPE.BLOB:
                            return "application/blob";
                        case t.XHR_RESPONSE_TYPE.DOCUMENT:
                            return "application/xml";
                        case t.XHR_RESPONSE_TYPE.JSON:
                            return "application/json";
                        case t.XHR_RESPONSE_TYPE.DEFAULT:
                        case t.XHR_RESPONSE_TYPE.TEXT:
                        default:
                            return "text/plain"
                    }
                }, t
            }();

            function p() {}

            function _(t) {
                return function() {
                    for (var e = arguments, r = [], i = 0; i < arguments.length; i++) r[i] = e[i];
                    if (null === t) throw new Error("Callback was already called.");
                    var n = t;
                    t = null, n.apply(this, r)
                }
            }! function(t) {
                var e, r, i, n;
                (e = t.STATUS_FLAGS || (t.STATUS_FLAGS = {}))[e.NONE = 0] = "NONE", e[e.DATA_URL = 1] = "DATA_URL", e[e.COMPLETE = 2] = "COMPLETE", e[e.LOADING = 4] = "LOADING", (r = t.TYPE || (t.TYPE = {}))[r.UNKNOWN = 0] = "UNKNOWN", r[r.JSON = 1] = "JSON", r[r.XML = 2] = "XML", r[r.IMAGE = 3] = "IMAGE", r[r.AUDIO = 4] = "AUDIO", r[r.VIDEO = 5] = "VIDEO", r[r.TEXT = 6] = "TEXT", (i = t.LOAD_TYPE || (t.LOAD_TYPE = {}))[i.XHR = 1] = "XHR", i[i.IMAGE = 2] = "IMAGE", i[i.AUDIO = 3] = "AUDIO", i[i.VIDEO = 4] = "VIDEO", (n = t.XHR_RESPONSE_TYPE || (t.XHR_RESPONSE_TYPE = {})).DEFAULT = "text", n.BUFFER = "arraybuffer", n.BLOB = "blob", n.DOCUMENT = "document", n.JSON = "json", n.TEXT = "text", t._loadTypeMap = {
                    gif: t.LOAD_TYPE.IMAGE,
                    png: t.LOAD_TYPE.IMAGE,
                    bmp: t.LOAD_TYPE.IMAGE,
                    jpg: t.LOAD_TYPE.IMAGE,
                    jpeg: t.LOAD_TYPE.IMAGE,
                    tif: t.LOAD_TYPE.IMAGE,
                    tiff: t.LOAD_TYPE.IMAGE,
                    webp: t.LOAD_TYPE.IMAGE,
                    tga: t.LOAD_TYPE.IMAGE,
                    svg: t.LOAD_TYPE.IMAGE,
                    "svg+xml": t.LOAD_TYPE.IMAGE,
                    mp3: t.LOAD_TYPE.AUDIO,
                    ogg: t.LOAD_TYPE.AUDIO,
                    wav: t.LOAD_TYPE.AUDIO,
                    mp4: t.LOAD_TYPE.VIDEO,
                    webm: t.LOAD_TYPE.VIDEO
                }, t._xhrTypeMap = {
                    xhtml: t.XHR_RESPONSE_TYPE.DOCUMENT,
                    html: t.XHR_RESPONSE_TYPE.DOCUMENT,
                    htm: t.XHR_RESPONSE_TYPE.DOCUMENT,
                    xml: t.XHR_RESPONSE_TYPE.DOCUMENT,
                    tmx: t.XHR_RESPONSE_TYPE.DOCUMENT,
                    svg: t.XHR_RESPONSE_TYPE.DOCUMENT,
                    tsx: t.XHR_RESPONSE_TYPE.DOCUMENT,
                    gif: t.XHR_RESPONSE_TYPE.BLOB,
                    png: t.XHR_RESPONSE_TYPE.BLOB,
                    bmp: t.XHR_RESPONSE_TYPE.BLOB,
                    jpg: t.XHR_RESPONSE_TYPE.BLOB,
                    jpeg: t.XHR_RESPONSE_TYPE.BLOB,
                    tif: t.XHR_RESPONSE_TYPE.BLOB,
                    tiff: t.XHR_RESPONSE_TYPE.BLOB,
                    webp: t.XHR_RESPONSE_TYPE.BLOB,
                    tga: t.XHR_RESPONSE_TYPE.BLOB,
                    json: t.XHR_RESPONSE_TYPE.JSON,
                    text: t.XHR_RESPONSE_TYPE.TEXT,
                    txt: t.XHR_RESPONSE_TYPE.TEXT,
                    ttf: t.XHR_RESPONSE_TYPE.BUFFER,
                    otf: t.XHR_RESPONSE_TYPE.BUFFER
                }, t.EMPTY_GIF = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
            }(d || (d = {}));
            var v = function(t, e) {
                    this.data = t, this.callback = e
                },
                m = function() {
                    function t(t, e) {
                        var r = this;
                        if (void 0 === e && (e = 1), this.workers = 0, this.saturated = p, this.unsaturated = p, this.empty = p, this.drain = p, this.error = p, this.started = !1, this.paused = !1, this._tasks = [], this._insert = function(t, e, i) {
                                if (i && "function" != typeof i) throw new Error("task callback must be a function");
                                if (r.started = !0, null == t && r.idle()) setTimeout((function() {
                                    return r.drain()
                                }), 1);
                                else {
                                    var n = new v(t, "function" == typeof i ? i : p);
                                    e ? r._tasks.unshift(n) : r._tasks.push(n), setTimeout(r.process, 1)
                                }
                            }, this.process = function() {
                                for (; !r.paused && r.workers < r.concurrency && r._tasks.length;) {
                                    var t = r._tasks.shift();
                                    0 === r._tasks.length && r.empty(), r.workers += 1, r.workers === r.concurrency && r.saturated(), r._worker(t.data, _(r._next(t)))
                                }
                            }, this._worker = t, 0 === e) throw new Error("Concurrency must not be zero");
                        this.concurrency = e, this.buffer = e / 4
                    }
                    return t.prototype._next = function(t) {
                        var e = this;
                        return function() {
                            for (var r = arguments, i = [], n = 0; n < arguments.length; n++) i[n] = r[n];
                            e.workers -= 1, t.callback.apply(t, i), null != i[0] && e.error(i[0], t.data), e.workers <= e.concurrency - e.buffer && e.unsaturated(), e.idle() && e.drain(), e.process()
                        }
                    }, t.prototype.push = function(t, e) {
                        this._insert(t, !1, e)
                    }, t.prototype.kill = function() {
                        this.workers = 0, this.drain = p, this.started = !1, this._tasks = []
                    }, t.prototype.unshift = function(t, e) {
                        this._insert(t, !0, e)
                    }, t.prototype.length = function() {
                        return this._tasks.length
                    }, t.prototype.running = function() {
                        return this.workers
                    }, t.prototype.idle = function() {
                        return this._tasks.length + this.workers === 0
                    }, t.prototype.pause = function() {
                        !0 !== this.paused && (this.paused = !0)
                    }, t.prototype.resume = function() {
                        if (!1 !== this.paused) {
                            this.paused = !1;
                            for (var t = 1; t <= this.concurrency; t++) this.process()
                        }
                    }, t.eachSeries = function(t, e, r, i) {
                        var n = 0,
                            o = t.length;
                        ! function s(a) {
                            a || n === o ? r && r(a) : i ? setTimeout((function() {
                                e(t[n++], s)
                            }), 1) : e(t[n++], s)
                        }()
                    }, t.queue = function(e, r) {
                        return new t(e, r)
                    }, t
                }(),
                y = /(#[\w-]+)?$/,
                g = function() {
                    function t(e, r) {
                        var i = this;
                        void 0 === e && (e = ""), void 0 === r && (r = 10), this.progress = 0, this.loading = !1, this.defaultQueryString = "", this._beforeMiddleware = [], this._afterMiddleware = [], this._resourcesParsing = [], this._boundLoadResource = function(t, e) {
                            return i._loadResource(t, e)
                        }, this.resources = {}, this.baseUrl = e, this._beforeMiddleware = [], this._afterMiddleware = [], this._resourcesParsing = [], this._boundLoadResource = function(t, e) {
                            return i._loadResource(t, e)
                        }, this._queue = m.queue(this._boundLoadResource, r), this._queue.pause(), this.resources = {}, this.onProgress = new a, this.onError = new a, this.onLoad = new a, this.onStart = new a, this.onComplete = new a;
                        for (var n = 0; n < t._plugins.length; ++n) {
                            var o = t._plugins[n],
                                s = o.pre,
                                h = o.use;
                            s && this.pre(s), h && this.use(h)
                        }
                        this._protected = !1
                    }
                    return t.prototype._add = function(t, e, r, i) {
                        if (this.loading && (!r || !r.parentResource)) throw new Error("Cannot add resources while the loader is running.");
                        if (this.resources[t]) throw new Error('Resource named "' + t + '" already exists.');
                        if (e = this._prepareUrl(e), this.resources[t] = new d(t, e, r), "function" == typeof i && this.resources[t].onAfterMiddleware.once(i), this.loading) {
                            for (var n = r.parentResource, o = [], s = 0; s < n.children.length; ++s) n.children[s].isComplete || o.push(n.children[s]);
                            var a = n.progressChunk * (o.length + 1) / (o.length + 2);
                            for (n.children.push(this.resources[t]), n.progressChunk = a, s = 0; s < o.length; ++s) o[s].progressChunk = a;
                            this.resources[t].progressChunk = a
                        }
                        return this._queue.push(this.resources[t]), this
                    }, t.prototype.pre = function(t) {
                        return this._beforeMiddleware.push(t), this
                    }, t.prototype.use = function(t) {
                        return this._afterMiddleware.push(t), this
                    }, t.prototype.reset = function() {
                        for (var t in this.progress = 0, this.loading = !1, this._queue.kill(), this._queue.pause(), this.resources) {
                            var e = this.resources[t];
                            e._onLoadBinding && e._onLoadBinding.detach(), e.isLoading && e.abort("loader reset")
                        }
                        return this.resources = {}, this
                    }, t.prototype.load = function(t) {
                        if ("function" == typeof t && this.onComplete.once(t), this.loading) return this;
                        if (this._queue.idle()) this._onStart(), this._onComplete();
                        else {
                            for (var e = 100 / this._queue._tasks.length, r = 0; r < this._queue._tasks.length; ++r) this._queue._tasks[r].data.progressChunk = e;
                            this._onStart(), this._queue.resume()
                        }
                        return this
                    }, Object.defineProperty(t.prototype, "concurrency", {
                        get: function() {
                            return this._queue.concurrency
                        },
                        set: function(t) {
                            this._queue.concurrency = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype._prepareUrl = function(t) {
                        var e, r = h(t, {
                            strictMode: !0
                        });
                        if (e = r.protocol || !r.path || 0 === t.indexOf("//") ? t : this.baseUrl.length && this.baseUrl.lastIndexOf("/") !== this.baseUrl.length - 1 && "/" !== t.charAt(0) ? this.baseUrl + "/" + t : this.baseUrl + t, this.defaultQueryString) {
                            var i = y.exec(e)[0]; - 1 !== (e = e.slice(0, e.length - i.length)).indexOf("?") ? e += "&" + this.defaultQueryString : e += "?" + this.defaultQueryString, e += i
                        }
                        return e
                    }, t.prototype._loadResource = function(t, e) {
                        var r = this;
                        t._dequeue = e, m.eachSeries(this._beforeMiddleware, (function(e, i) {
                            e.call(r, t, (function() {
                                i(t.isComplete ? {} : null)
                            }))
                        }), (function() {
                            t.isComplete ? r._onLoad(t) : (t._onLoadBinding = t.onComplete.once(r._onLoad, r), t.load())
                        }), !0)
                    }, t.prototype._onStart = function() {
                        this.progress = 0, this.loading = !0, this.onStart.dispatch(this)
                    }, t.prototype._onComplete = function() {
                        this.progress = 100, this.loading = !1, this.onComplete.dispatch(this, this.resources)
                    }, t.prototype._onLoad = function(t) {
                        var e = this;
                        t._onLoadBinding = null, this._resourcesParsing.push(t), t._dequeue(), m.eachSeries(this._afterMiddleware, (function(r, i) {
                            r.call(e, t, i)
                        }), (function() {
                            t.onAfterMiddleware.dispatch(t), e.progress = Math.min(100, e.progress + t.progressChunk), e.onProgress.dispatch(e, t), t.error ? e.onError.dispatch(t.error, e, t) : e.onLoad.dispatch(e, t), e._resourcesParsing.splice(e._resourcesParsing.indexOf(t), 1), e._queue.idle() && 0 === e._resourcesParsing.length && e._onComplete()
                        }), !0)
                    }, t.prototype.destroy = function() {
                        this._protected || this.reset()
                    }, Object.defineProperty(t, "shared", {
                        get: function() {
                            var e = t._shared;
                            return e || ((e = new t)._protected = !0, t._shared = e), e
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.registerPlugin = function(e) {
                        return t._plugins.push(e), e.add && e.add(), t
                    }, t._plugins = [], t
                }();
            g.prototype.add = function(t, e, r, i) {
                    if (Array.isArray(t)) {
                        for (var n = 0; n < t.length; ++n) this.add(t[n]);
                        return this
                    }
                    if ("object" == typeof t && (r = t, i = e || r.callback || r.onComplete, e = r.url, t = r.name || r.key || r.url), "string" != typeof e && (i = r, r = e, e = t), "string" != typeof e) throw new Error("No url passed to add resource to loader.");
                    return "function" == typeof r && (i = r, r = null), this._add(t, e, r, i)
                },
                function() {
                    function t() {}
                    t.init = function(t) {
                        t = Object.assign({
                            sharedLoader: !1
                        }, t), this.loader = t.sharedLoader ? g.shared : new g
                    }, t.destroy = function() {
                        this.loader && (this.loader.destroy(), this.loader = null)
                    }
                }();
            var E = function() {
                function t() {}
                return t.add = function() {
                    d.setExtensionLoadType("svg", d.LOAD_TYPE.XHR), d.setExtensionXhrType("svg", d.XHR_RESPONSE_TYPE.TEXT)
                }, t.use = function(t, e) {
                    if (!t.data || t.type !== d.TYPE.IMAGE && "svg" !== t.extension) e();
                    else {
                        var r = t.data,
                            n = t.url,
                            o = t.name,
                            s = t.metadata;
                        i.xE.fromLoader(r, n, o, s).then((function(r) {
                            t.texture = r, e()
                        })).catch(e)
                    }
                }, t
            }();
            g.registerPlugin({
                use: function(t, e) {
                    if (t.data) {
                        if (t.xhr && t.xhrType === d.XHR_RESPONSE_TYPE.BLOB)
                            if (self.Blob && "string" != typeof t.data) {
                                if (0 === t.data.type.indexOf("image")) {
                                    var r = globalThis.URL || globalThis.webkitURL,
                                        i = r.createObjectURL(t.data);
                                    return t.blob = t.data, t.data = new Image, t.data.src = i, t.type = d.TYPE.IMAGE, void(t.data.onload = function() {
                                        r.revokeObjectURL(i), t.data.onload = null, e()
                                    })
                                }
                            } else {
                                var n = t.xhr.getResponseHeader("content-type");
                                if (n && 0 === n.indexOf("image")) return t.data = new Image, t.data.src = "data:" + n + ";base64," + function(t) {
                                    for (var e = "", r = 0; r < t.length;) {
                                        for (var i = [0, 0, 0], n = [0, 0, 0, 0], o = 0; o < i.length; ++o) r < t.length ? i[o] = 255 & t.charCodeAt(r++) : i[o] = 0;
                                        switch (n[0] = i[0] >> 2, n[1] = (3 & i[0]) << 4 | i[1] >> 4, n[2] = (15 & i[1]) << 2 | i[2] >> 6, n[3] = 63 & i[2], r - (t.length - 1)) {
                                            case 2:
                                                n[3] = 64, n[2] = 64;
                                                break;
                                            case 1:
                                                n[3] = 64
                                        }
                                        for (o = 0; o < n.length; ++o) e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(n[o])
                                    }
                                    return e
                                }(t.xhr.responseText), t.type = d.TYPE.IMAGE, void(t.data.onload = function() {
                                    t.data.onload = null, e()
                                })
                            }
                        e()
                    } else e()
                }
            }), g.registerPlugin(E)
        },
        9658: function(t, e, r) {
            "use strict";
            r.d(e, {
                AB: function() {
                    return p
                },
                Ae: function() {
                    return u
                },
                Cd: function() {
                    return c
                },
                E9: function() {
                    return a
                },
                HS: function() {
                    return i
                },
                Lv: function() {
                    return b
                },
                Pj: function() {
                    return f
                },
                ZX: function() {
                    return s
                },
                _b: function() {
                    return n
                },
                c9: function() {
                    return d
                },
                jl: function() {
                    return o
                },
                mg: function() {
                    return l
                },
                wx: function() {
                    return A
                },
                y3: function() {
                    return _
                }
            });
            var i, n = 2 * Math.PI,
                o = 180 / Math.PI,
                s = Math.PI / 180;
            ! function(t) {
                t[t.POLY = 0] = "POLY", t[t.RECT = 1] = "RECT", t[t.CIRC = 2] = "CIRC", t[t.ELIP = 3] = "ELIP", t[t.RREC = 4] = "RREC"
            }(i || (i = {}));
            var a = function() {
                    function t(t, e) {
                        void 0 === t && (t = 0), void 0 === e && (e = 0), this.x = 0, this.y = 0, this.x = t, this.y = e
                    }
                    return t.prototype.clone = function() {
                        return new t(this.x, this.y)
                    }, t.prototype.copyFrom = function(t) {
                        return this.set(t.x, t.y), this
                    }, t.prototype.copyTo = function(t) {
                        return t.set(this.x, this.y), t
                    }, t.prototype.equals = function(t) {
                        return t.x === this.x && t.y === this.y
                    }, t.prototype.set = function(t, e) {
                        return void 0 === t && (t = 0), void 0 === e && (e = t), this.x = t, this.y = e, this
                    }, t.prototype.toString = function() {
                        return "[@pixi/math:Point x=" + this.x + " y=" + this.y + "]"
                    }, t
                }(),
                h = [new a, new a, new a, new a],
                u = function() {
                    function t(t, e, r, n) {
                        void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === r && (r = 0), void 0 === n && (n = 0), this.x = Number(t), this.y = Number(e), this.width = Number(r), this.height = Number(n), this.type = i.RECT
                    }
                    return Object.defineProperty(t.prototype, "left", {
                        get: function() {
                            return this.x
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "right", {
                        get: function() {
                            return this.x + this.width
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "top", {
                        get: function() {
                            return this.y
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "bottom", {
                        get: function() {
                            return this.y + this.height
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t, "EMPTY", {
                        get: function() {
                            return new t(0, 0, 0, 0)
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.clone = function() {
                        return new t(this.x, this.y, this.width, this.height)
                    }, t.prototype.copyFrom = function(t) {
                        return this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height, this
                    }, t.prototype.copyTo = function(t) {
                        return t.x = this.x, t.y = this.y, t.width = this.width, t.height = this.height, t
                    }, t.prototype.contains = function(t, e) {
                        return !(this.width <= 0 || this.height <= 0) && t >= this.x && t < this.x + this.width && e >= this.y && e < this.y + this.height
                    }, t.prototype.intersects = function(t, e) {
                        if (!e) {
                            var r = this.x < t.x ? t.x : this.x;
                            if ((this.right > t.right ? t.right : this.right) <= r) return !1;
                            var i = this.y < t.y ? t.y : this.y;
                            return (this.bottom > t.bottom ? t.bottom : this.bottom) > i
                        }
                        var n = this.left,
                            o = this.right,
                            s = this.top,
                            a = this.bottom;
                        if (o <= n || a <= s) return !1;
                        var u = h[0].set(t.left, t.top),
                            c = h[1].set(t.left, t.bottom),
                            f = h[2].set(t.right, t.top),
                            l = h[3].set(t.right, t.bottom);
                        if (f.x <= u.x || c.y <= u.y) return !1;
                        var d = Math.sign(e.a * e.d - e.b * e.c);
                        if (0 === d) return !1;
                        if (e.apply(u, u), e.apply(c, c), e.apply(f, f), e.apply(l, l), Math.max(u.x, c.x, f.x, l.x) <= n || Math.min(u.x, c.x, f.x, l.x) >= o || Math.max(u.y, c.y, f.y, l.y) <= s || Math.min(u.y, c.y, f.y, l.y) >= a) return !1;
                        var p = d * (c.y - u.y),
                            _ = d * (u.x - c.x),
                            v = p * n + _ * s,
                            m = p * o + _ * s,
                            y = p * n + _ * a,
                            g = p * o + _ * a;
                        if (Math.max(v, m, y, g) <= p * u.x + _ * u.y || Math.min(v, m, y, g) >= p * l.x + _ * l.y) return !1;
                        var E = d * (u.y - f.y),
                            T = d * (f.x - u.x),
                            x = E * n + T * s,
                            b = E * o + T * s,
                            A = E * n + T * a,
                            R = E * o + T * a;
                        return !(Math.max(x, b, A, R) <= E * u.x + T * u.y || Math.min(x, b, A, R) >= E * l.x + T * l.y)
                    }, t.prototype.pad = function(t, e) {
                        return void 0 === t && (t = 0), void 0 === e && (e = t), this.x -= t, this.y -= e, this.width += 2 * t, this.height += 2 * e, this
                    }, t.prototype.fit = function(t) {
                        var e = Math.max(this.x, t.x),
                            r = Math.min(this.x + this.width, t.x + t.width),
                            i = Math.max(this.y, t.y),
                            n = Math.min(this.y + this.height, t.y + t.height);
                        return this.x = e, this.width = Math.max(r - e, 0), this.y = i, this.height = Math.max(n - i, 0), this
                    }, t.prototype.ceil = function(t, e) {
                        void 0 === t && (t = 1), void 0 === e && (e = .001);
                        var r = Math.ceil((this.x + this.width - e) * t) / t,
                            i = Math.ceil((this.y + this.height - e) * t) / t;
                        return this.x = Math.floor((this.x + e) * t) / t, this.y = Math.floor((this.y + e) * t) / t, this.width = r - this.x, this.height = i - this.y, this
                    }, t.prototype.enlarge = function(t) {
                        var e = Math.min(this.x, t.x),
                            r = Math.max(this.x + this.width, t.x + t.width),
                            i = Math.min(this.y, t.y),
                            n = Math.max(this.y + this.height, t.y + t.height);
                        return this.x = e, this.width = r - e, this.y = i, this.height = n - i, this
                    }, t.prototype.toString = function() {
                        return "[@pixi/math:Rectangle x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + "]"
                    }, t
                }(),
                c = function() {
                    function t(t, e, r) {
                        void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === r && (r = 0), this.x = t, this.y = e, this.radius = r, this.type = i.CIRC
                    }
                    return t.prototype.clone = function() {
                        return new t(this.x, this.y, this.radius)
                    }, t.prototype.contains = function(t, e) {
                        if (this.radius <= 0) return !1;
                        var r = this.radius * this.radius,
                            i = this.x - t,
                            n = this.y - e;
                        return (i *= i) + (n *= n) <= r
                    }, t.prototype.getBounds = function() {
                        return new u(this.x - this.radius, this.y - this.radius, 2 * this.radius, 2 * this.radius)
                    }, t.prototype.toString = function() {
                        return "[@pixi/math:Circle x=" + this.x + " y=" + this.y + " radius=" + this.radius + "]"
                    }, t
                }(),
                f = function() {
                    function t(t, e, r, n) {
                        void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === r && (r = 0), void 0 === n && (n = 0), this.x = t, this.y = e, this.width = r, this.height = n, this.type = i.ELIP
                    }
                    return t.prototype.clone = function() {
                        return new t(this.x, this.y, this.width, this.height)
                    }, t.prototype.contains = function(t, e) {
                        if (this.width <= 0 || this.height <= 0) return !1;
                        var r = (t - this.x) / this.width,
                            i = (e - this.y) / this.height;
                        return (r *= r) + (i *= i) <= 1
                    }, t.prototype.getBounds = function() {
                        return new u(this.x - this.width, this.y - this.height, this.width, this.height)
                    }, t.prototype.toString = function() {
                        return "[@pixi/math:Ellipse x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + "]"
                    }, t
                }(),
                l = function() {
                    function t() {
                        for (var t = arguments, e = [], r = 0; r < arguments.length; r++) e[r] = t[r];
                        var n = Array.isArray(e[0]) ? e[0] : e;
                        if ("number" != typeof n[0]) {
                            for (var o = [], s = 0, a = n.length; s < a; s++) o.push(n[s].x, n[s].y);
                            n = o
                        }
                        this.points = n, this.type = i.POLY, this.closeStroke = !0
                    }
                    return t.prototype.clone = function() {
                        var e = new t(this.points.slice());
                        return e.closeStroke = this.closeStroke, e
                    }, t.prototype.contains = function(t, e) {
                        for (var r = !1, i = this.points.length / 2, n = 0, o = i - 1; n < i; o = n++) {
                            var s = this.points[2 * n],
                                a = this.points[2 * n + 1],
                                h = this.points[2 * o],
                                u = this.points[2 * o + 1];
                            a > e != u > e && t < (e - a) / (u - a) * (h - s) + s && (r = !r)
                        }
                        return r
                    }, t.prototype.toString = function() {
                        return "[@pixi/math:PolygoncloseStroke=" + this.closeStroke + "points=" + this.points.reduce((function(t, e) {
                            return t + ", " + e
                        }), "") + "]"
                    }, t
                }(),
                d = function() {
                    function t(t, e, r, n, o) {
                        void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === r && (r = 0), void 0 === n && (n = 0), void 0 === o && (o = 20), this.x = t, this.y = e, this.width = r, this.height = n, this.radius = o, this.type = i.RREC
                    }
                    return t.prototype.clone = function() {
                        return new t(this.x, this.y, this.width, this.height, this.radius)
                    }, t.prototype.contains = function(t, e) {
                        if (this.width <= 0 || this.height <= 0) return !1;
                        if (t >= this.x && t <= this.x + this.width && e >= this.y && e <= this.y + this.height) {
                            var r = Math.max(0, Math.min(this.radius, Math.min(this.width, this.height) / 2));
                            if (e >= this.y + r && e <= this.y + this.height - r || t >= this.x + r && t <= this.x + this.width - r) return !0;
                            var i = t - (this.x + r),
                                n = e - (this.y + r),
                                o = r * r;
                            if (i * i + n * n <= o) return !0;
                            if ((i = t - (this.x + this.width - r)) * i + n * n <= o) return !0;
                            if (i * i + (n = e - (this.y + this.height - r)) * n <= o) return !0;
                            if ((i = t - (this.x + r)) * i + n * n <= o) return !0
                        }
                        return !1
                    }, t.prototype.toString = function() {
                        return "[@pixi/math:RoundedRectangle x=" + this.x + " y=" + this.y + "width=" + this.width + " height=" + this.height + " radius=" + this.radius + "]"
                    }, t
                }(),
                p = function() {
                    function t(t, e, r, i) {
                        void 0 === r && (r = 0), void 0 === i && (i = 0), this._x = r, this._y = i, this.cb = t, this.scope = e
                    }
                    return t.prototype.clone = function(e, r) {
                        return void 0 === e && (e = this.cb), void 0 === r && (r = this.scope), new t(e, r, this._x, this._y)
                    }, t.prototype.set = function(t, e) {
                        return void 0 === t && (t = 0), void 0 === e && (e = t), this._x === t && this._y === e || (this._x = t, this._y = e, this.cb.call(this.scope)), this
                    }, t.prototype.copyFrom = function(t) {
                        return this._x === t.x && this._y === t.y || (this._x = t.x, this._y = t.y, this.cb.call(this.scope)), this
                    }, t.prototype.copyTo = function(t) {
                        return t.set(this._x, this._y), t
                    }, t.prototype.equals = function(t) {
                        return t.x === this._x && t.y === this._y
                    }, t.prototype.toString = function() {
                        return "[@pixi/math:ObservablePoint x=0 y=0 scope=" + this.scope + "]"
                    }, Object.defineProperty(t.prototype, "x", {
                        get: function() {
                            return this._x
                        },
                        set: function(t) {
                            this._x !== t && (this._x = t, this.cb.call(this.scope))
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "y", {
                        get: function() {
                            return this._y
                        },
                        set: function(t) {
                            this._y !== t && (this._y = t, this.cb.call(this.scope))
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(),
                _ = function() {
                    function t(t, e, r, i, n, o) {
                        void 0 === t && (t = 1), void 0 === e && (e = 0), void 0 === r && (r = 0), void 0 === i && (i = 1), void 0 === n && (n = 0), void 0 === o && (o = 0), this.array = null, this.a = t, this.b = e, this.c = r, this.d = i, this.tx = n, this.ty = o
                    }
                    return t.prototype.fromArray = function(t) {
                        this.a = t[0], this.b = t[1], this.c = t[3], this.d = t[4], this.tx = t[2], this.ty = t[5]
                    }, t.prototype.set = function(t, e, r, i, n, o) {
                        return this.a = t, this.b = e, this.c = r, this.d = i, this.tx = n, this.ty = o, this
                    }, t.prototype.toArray = function(t, e) {
                        this.array || (this.array = new Float32Array(9));
                        var r = e || this.array;
                        return t ? (r[0] = this.a, r[1] = this.b, r[2] = 0, r[3] = this.c, r[4] = this.d, r[5] = 0, r[6] = this.tx, r[7] = this.ty, r[8] = 1) : (r[0] = this.a, r[1] = this.c, r[2] = this.tx, r[3] = this.b, r[4] = this.d, r[5] = this.ty, r[6] = 0, r[7] = 0, r[8] = 1), r
                    }, t.prototype.apply = function(t, e) {
                        e = e || new a;
                        var r = t.x,
                            i = t.y;
                        return e.x = this.a * r + this.c * i + this.tx, e.y = this.b * r + this.d * i + this.ty, e
                    }, t.prototype.applyInverse = function(t, e) {
                        e = e || new a;
                        var r = 1 / (this.a * this.d + this.c * -this.b),
                            i = t.x,
                            n = t.y;
                        return e.x = this.d * r * i + -this.c * r * n + (this.ty * this.c - this.tx * this.d) * r, e.y = this.a * r * n + -this.b * r * i + (-this.ty * this.a + this.tx * this.b) * r, e
                    }, t.prototype.translate = function(t, e) {
                        return this.tx += t, this.ty += e, this
                    }, t.prototype.scale = function(t, e) {
                        return this.a *= t, this.d *= e, this.c *= t, this.b *= e, this.tx *= t, this.ty *= e, this
                    }, t.prototype.rotate = function(t) {
                        var e = Math.cos(t),
                            r = Math.sin(t),
                            i = this.a,
                            n = this.c,
                            o = this.tx;
                        return this.a = i * e - this.b * r, this.b = i * r + this.b * e, this.c = n * e - this.d * r, this.d = n * r + this.d * e, this.tx = o * e - this.ty * r, this.ty = o * r + this.ty * e, this
                    }, t.prototype.append = function(t) {
                        var e = this.a,
                            r = this.b,
                            i = this.c,
                            n = this.d;
                        return this.a = t.a * e + t.b * i, this.b = t.a * r + t.b * n, this.c = t.c * e + t.d * i, this.d = t.c * r + t.d * n, this.tx = t.tx * e + t.ty * i + this.tx, this.ty = t.tx * r + t.ty * n + this.ty, this
                    }, t.prototype.setTransform = function(t, e, r, i, n, o, s, a, h) {
                        return this.a = Math.cos(s + h) * n, this.b = Math.sin(s + h) * n, this.c = -Math.sin(s - a) * o, this.d = Math.cos(s - a) * o, this.tx = t - (r * this.a + i * this.c), this.ty = e - (r * this.b + i * this.d), this
                    }, t.prototype.prepend = function(t) {
                        var e = this.tx;
                        if (1 !== t.a || 0 !== t.b || 0 !== t.c || 1 !== t.d) {
                            var r = this.a,
                                i = this.c;
                            this.a = r * t.a + this.b * t.c, this.b = r * t.b + this.b * t.d, this.c = i * t.a + this.d * t.c, this.d = i * t.b + this.d * t.d
                        }
                        return this.tx = e * t.a + this.ty * t.c + t.tx, this.ty = e * t.b + this.ty * t.d + t.ty, this
                    }, t.prototype.decompose = function(t) {
                        var e = this.a,
                            r = this.b,
                            i = this.c,
                            o = this.d,
                            s = t.pivot,
                            a = -Math.atan2(-i, o),
                            h = Math.atan2(r, e),
                            u = Math.abs(a + h);
                        return u < 1e-5 || Math.abs(n - u) < 1e-5 ? (t.rotation = h, t.skew.x = t.skew.y = 0) : (t.rotation = 0, t.skew.x = a, t.skew.y = h), t.scale.x = Math.sqrt(e * e + r * r), t.scale.y = Math.sqrt(i * i + o * o), t.position.x = this.tx + (s.x * e + s.y * i), t.position.y = this.ty + (s.x * r + s.y * o), t
                    }, t.prototype.invert = function() {
                        var t = this.a,
                            e = this.b,
                            r = this.c,
                            i = this.d,
                            n = this.tx,
                            o = t * i - e * r;
                        return this.a = i / o, this.b = -e / o, this.c = -r / o, this.d = t / o, this.tx = (r * this.ty - i * n) / o, this.ty = -(t * this.ty - e * n) / o, this
                    }, t.prototype.identity = function() {
                        return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this
                    }, t.prototype.clone = function() {
                        var e = new t;
                        return e.a = this.a, e.b = this.b, e.c = this.c, e.d = this.d, e.tx = this.tx, e.ty = this.ty, e
                    }, t.prototype.copyTo = function(t) {
                        return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t
                    }, t.prototype.copyFrom = function(t) {
                        return this.a = t.a, this.b = t.b, this.c = t.c, this.d = t.d, this.tx = t.tx, this.ty = t.ty, this
                    }, t.prototype.toString = function() {
                        return "[@pixi/math:Matrix a=" + this.a + " b=" + this.b + " c=" + this.c + " d=" + this.d + " tx=" + this.tx + " ty=" + this.ty + "]"
                    }, Object.defineProperty(t, "IDENTITY", {
                        get: function() {
                            return new t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t, "TEMP_MATRIX", {
                        get: function() {
                            return new t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(),
                v = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1],
                m = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1],
                y = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1],
                g = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1],
                E = [],
                T = [],
                x = Math.sign;
            ! function() {
                for (var t = 0; t < 16; t++) {
                    var e = [];
                    E.push(e);
                    for (var r = 0; r < 16; r++)
                        for (var i = x(v[t] * v[r] + y[t] * m[r]), n = x(m[t] * v[r] + g[t] * m[r]), o = x(v[t] * y[r] + y[t] * g[r]), s = x(m[t] * y[r] + g[t] * g[r]), a = 0; a < 16; a++)
                            if (v[a] === i && m[a] === n && y[a] === o && g[a] === s) {
                                e.push(a);
                                break
                            }
                }
                for (t = 0; t < 16; t++) {
                    var h = new _;
                    h.set(v[t], m[t], y[t], g[t], 0, 0), T.push(h)
                }
            }();
            var b = {
                    E: 0,
                    SE: 1,
                    S: 2,
                    SW: 3,
                    W: 4,
                    NW: 5,
                    N: 6,
                    NE: 7,
                    MIRROR_VERTICAL: 8,
                    MAIN_DIAGONAL: 10,
                    MIRROR_HORIZONTAL: 12,
                    REVERSE_DIAGONAL: 14,
                    uX: function(t) {
                        return v[t]
                    },
                    uY: function(t) {
                        return m[t]
                    },
                    vX: function(t) {
                        return y[t]
                    },
                    vY: function(t) {
                        return g[t]
                    },
                    inv: function(t) {
                        return 8 & t ? 15 & t : 7 & -t
                    },
                    add: function(t, e) {
                        return E[t][e]
                    },
                    sub: function(t, e) {
                        return E[t][b.inv(e)]
                    },
                    rotate180: function(t) {
                        return 4 ^ t
                    },
                    isVertical: function(t) {
                        return 2 == (3 & t)
                    },
                    byDirection: function(t, e) {
                        return 2 * Math.abs(t) <= Math.abs(e) ? e >= 0 ? b.S : b.N : 2 * Math.abs(e) <= Math.abs(t) ? t > 0 ? b.E : b.W : e > 0 ? t > 0 ? b.SE : b.SW : t > 0 ? b.NE : b.NW
                    },
                    matrixAppendRotationInv: function(t, e, r, i) {
                        void 0 === r && (r = 0), void 0 === i && (i = 0);
                        var n = T[b.inv(e)];
                        n.tx = r, n.ty = i, t.append(n)
                    }
                },
                A = function() {
                    function t() {
                        this.worldTransform = new _, this.localTransform = new _, this.position = new p(this.onChange, this, 0, 0), this.scale = new p(this.onChange, this, 1, 1), this.pivot = new p(this.onChange, this, 0, 0), this.skew = new p(this.updateSkew, this, 0, 0), this._rotation = 0, this._cx = 1, this._sx = 0, this._cy = 0, this._sy = 1, this._localID = 0, this._currentLocalID = 0, this._worldID = 0, this._parentID = 0
                    }
                    return t.prototype.onChange = function() {
                        this._localID++
                    }, t.prototype.updateSkew = function() {
                        this._cx = Math.cos(this._rotation + this.skew.y), this._sx = Math.sin(this._rotation + this.skew.y), this._cy = -Math.sin(this._rotation - this.skew.x), this._sy = Math.cos(this._rotation - this.skew.x), this._localID++
                    }, t.prototype.toString = function() {
                        return "[@pixi/math:Transform position=(" + this.position.x + ", " + this.position.y + ") rotation=" + this.rotation + " scale=(" + this.scale.x + ", " + this.scale.y + ") skew=(" + this.skew.x + ", " + this.skew.y + ") ]"
                    }, t.prototype.updateLocalTransform = function() {
                        var t = this.localTransform;
                        this._localID !== this._currentLocalID && (t.a = this._cx * this.scale.x, t.b = this._sx * this.scale.x, t.c = this._cy * this.scale.y, t.d = this._sy * this.scale.y, t.tx = this.position.x - (this.pivot.x * t.a + this.pivot.y * t.c), t.ty = this.position.y - (this.pivot.x * t.b + this.pivot.y * t.d), this._currentLocalID = this._localID, this._parentID = -1)
                    }, t.prototype.updateTransform = function(t) {
                        var e = this.localTransform;
                        if (this._localID !== this._currentLocalID && (e.a = this._cx * this.scale.x, e.b = this._sx * this.scale.x, e.c = this._cy * this.scale.y, e.d = this._sy * this.scale.y, e.tx = this.position.x - (this.pivot.x * e.a + this.pivot.y * e.c), e.ty = this.position.y - (this.pivot.x * e.b + this.pivot.y * e.d), this._currentLocalID = this._localID, this._parentID = -1), this._parentID !== t._worldID) {
                            var r = t.worldTransform,
                                i = this.worldTransform;
                            i.a = e.a * r.a + e.b * r.c, i.b = e.a * r.b + e.b * r.d, i.c = e.c * r.a + e.d * r.c, i.d = e.c * r.b + e.d * r.d, i.tx = e.tx * r.a + e.ty * r.c + r.tx, i.ty = e.tx * r.b + e.ty * r.d + r.ty, this._parentID = t._worldID, this._worldID++
                        }
                    }, t.prototype.setFromMatrix = function(t) {
                        t.decompose(this), this._localID++
                    }, Object.defineProperty(t.prototype, "rotation", {
                        get: function() {
                            return this._rotation
                        },
                        set: function(t) {
                            this._rotation !== t && (this._rotation = t, this.updateSkew())
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.IDENTITY = new t, t
                }()
        },
        9319: function(t, e, r) {
            "use strict";
            r.d(e, {
                t: function() {
                    return B
                },
                X: function() {
                    return G
                }
            });
            var i, n, o, s, a, h, u, c, f, l, d, p, _, v, m, y, g, E, T, x = /iPhone/i,
                b = /iPod/i,
                A = /iPad/i,
                R = /\biOS-universal(?:.+)Mac\b/i,
                I = /\bAndroid(?:.+)Mobile\b/i,
                S = /Android/i,
                O = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,
                w = /Silk/i,
                N = /Windows Phone/i,
                P = /\bWindows(?:.+)ARM\b/i,
                C = /BlackBerry/i,
                L = /BB10/i,
                M = /Opera Mini/i,
                U = /\b(CriOS|Chrome)(?:.+)Mobile/i,
                F = /Mobile(?:.+)Firefox\b/i,
                D = function(t) {
                    return void 0 !== t && "MacIntel" === t.platform && "number" == typeof t.maxTouchPoints && t.maxTouchPoints > 1 && "undefined" == typeof MSStream
                },
                B = function(t) {
                    var e = {
                        userAgent: "",
                        platform: "",
                        maxTouchPoints: 0
                    };
                    t || "undefined" == typeof navigator ? "string" == typeof t ? e.userAgent = t : t && t.userAgent && (e = {
                        userAgent: t.userAgent,
                        platform: t.platform,
                        maxTouchPoints: t.maxTouchPoints || 0
                    }) : e = {
                        userAgent: navigator.userAgent,
                        platform: navigator.platform,
                        maxTouchPoints: navigator.maxTouchPoints || 0
                    };
                    var r = e.userAgent,
                        i = r.split("[FBAN");
                    void 0 !== i[1] && (r = i[0]), void 0 !== (i = r.split("Twitter"))[1] && (r = i[0]);
                    var n = function(t) {
                            return function(e) {
                                return e.test(t)
                            }
                        }(r),
                        o = {
                            apple: {
                                phone: n(x) && !n(N),
                                ipod: n(b),
                                tablet: !n(x) && (n(A) || D(e)) && !n(N),
                                universal: n(R),
                                device: (n(x) || n(b) || n(A) || n(R) || D(e)) && !n(N)
                            },
                            amazon: {
                                phone: n(O),
                                tablet: !n(O) && n(w),
                                device: n(O) || n(w)
                            },
                            android: {
                                phone: !n(N) && n(O) || !n(N) && n(I),
                                tablet: !n(N) && !n(O) && !n(I) && (n(w) || n(S)),
                                device: !n(N) && (n(O) || n(w) || n(I) || n(S)) || n(/\bokhttp\b/i)
                            },
                            windows: {
                                phone: n(N),
                                tablet: n(P),
                                device: n(N) || n(P)
                            },
                            other: {
                                blackberry: n(C),
                                blackberry10: n(L),
                                opera: n(M),
                                firefox: n(F),
                                chrome: n(U),
                                device: n(C) || n(L) || n(M) || n(F) || n(U)
                            },
                            any: !1,
                            phone: !1,
                            tablet: !1
                        };
                    return o.any = o.apple.device || o.android.device || o.windows.device || o.other.device, o.phone = o.apple.phone || o.android.phone || o.windows.phone, o.tablet = o.apple.tablet || o.android.tablet || o.windows.tablet, o
                }(globalThis.navigator);
            ! function(t) {
                t[t.WEBGL_LEGACY = 0] = "WEBGL_LEGACY", t[t.WEBGL = 1] = "WEBGL", t[t.WEBGL2 = 2] = "WEBGL2"
            }(i || (i = {})),
            function(t) {
                t[t.UNKNOWN = 0] = "UNKNOWN", t[t.WEBGL = 1] = "WEBGL", t[t.CANVAS = 2] = "CANVAS"
            }(n || (n = {})),
            function(t) {
                t[t.COLOR = 16384] = "COLOR", t[t.DEPTH = 256] = "DEPTH", t[t.STENCIL = 1024] = "STENCIL"
            }(o || (o = {})),
            function(t) {
                t[t.NORMAL = 0] = "NORMAL", t[t.ADD = 1] = "ADD", t[t.MULTIPLY = 2] = "MULTIPLY", t[t.SCREEN = 3] = "SCREEN", t[t.OVERLAY = 4] = "OVERLAY", t[t.DARKEN = 5] = "DARKEN", t[t.LIGHTEN = 6] = "LIGHTEN", t[t.COLOR_DODGE = 7] = "COLOR_DODGE", t[t.COLOR_BURN = 8] = "COLOR_BURN", t[t.HARD_LIGHT = 9] = "HARD_LIGHT", t[t.SOFT_LIGHT = 10] = "SOFT_LIGHT", t[t.DIFFERENCE = 11] = "DIFFERENCE", t[t.EXCLUSION = 12] = "EXCLUSION", t[t.HUE = 13] = "HUE", t[t.SATURATION = 14] = "SATURATION", t[t.COLOR = 15] = "COLOR", t[t.LUMINOSITY = 16] = "LUMINOSITY", t[t.NORMAL_NPM = 17] = "NORMAL_NPM", t[t.ADD_NPM = 18] = "ADD_NPM", t[t.SCREEN_NPM = 19] = "SCREEN_NPM", t[t.NONE = 20] = "NONE", t[t.SRC_OVER = 0] = "SRC_OVER", t[t.SRC_IN = 21] = "SRC_IN", t[t.SRC_OUT = 22] = "SRC_OUT", t[t.SRC_ATOP = 23] = "SRC_ATOP", t[t.DST_OVER = 24] = "DST_OVER", t[t.DST_IN = 25] = "DST_IN", t[t.DST_OUT = 26] = "DST_OUT", t[t.DST_ATOP = 27] = "DST_ATOP", t[t.ERASE = 26] = "ERASE", t[t.SUBTRACT = 28] = "SUBTRACT", t[t.XOR = 29] = "XOR"
            }(s || (s = {})),
            function(t) {
                t[t.POINTS = 0] = "POINTS", t[t.LINES = 1] = "LINES", t[t.LINE_LOOP = 2] = "LINE_LOOP", t[t.LINE_STRIP = 3] = "LINE_STRIP", t[t.TRIANGLES = 4] = "TRIANGLES", t[t.TRIANGLE_STRIP = 5] = "TRIANGLE_STRIP", t[t.TRIANGLE_FAN = 6] = "TRIANGLE_FAN"
            }(a || (a = {})),
            function(t) {
                t[t.RGBA = 6408] = "RGBA", t[t.RGB = 6407] = "RGB", t[t.RG = 33319] = "RG", t[t.RED = 6403] = "RED", t[t.RGBA_INTEGER = 36249] = "RGBA_INTEGER", t[t.RGB_INTEGER = 36248] = "RGB_INTEGER", t[t.RG_INTEGER = 33320] = "RG_INTEGER", t[t.RED_INTEGER = 36244] = "RED_INTEGER", t[t.ALPHA = 6406] = "ALPHA", t[t.LUMINANCE = 6409] = "LUMINANCE", t[t.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA", t[t.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT", t[t.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL"
            }(h || (h = {})),
            function(t) {
                t[t.TEXTURE_2D = 3553] = "TEXTURE_2D", t[t.TEXTURE_CUBE_MAP = 34067] = "TEXTURE_CUBE_MAP", t[t.TEXTURE_2D_ARRAY = 35866] = "TEXTURE_2D_ARRAY", t[t.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X", t[t.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X", t[t.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y", t[t.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y", t[t.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z", t[t.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z"
            }(u || (u = {})),
            function(t) {
                t[t.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE", t[t.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT", t[t.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5", t[t.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4", t[t.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1", t[t.UNSIGNED_INT = 5125] = "UNSIGNED_INT", t[t.UNSIGNED_INT_10F_11F_11F_REV = 35899] = "UNSIGNED_INT_10F_11F_11F_REV", t[t.UNSIGNED_INT_2_10_10_10_REV = 33640] = "UNSIGNED_INT_2_10_10_10_REV", t[t.UNSIGNED_INT_24_8 = 34042] = "UNSIGNED_INT_24_8", t[t.UNSIGNED_INT_5_9_9_9_REV = 35902] = "UNSIGNED_INT_5_9_9_9_REV", t[t.BYTE = 5120] = "BYTE", t[t.SHORT = 5122] = "SHORT", t[t.INT = 5124] = "INT", t[t.FLOAT = 5126] = "FLOAT", t[t.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV", t[t.HALF_FLOAT = 36193] = "HALF_FLOAT"
            }(c || (c = {})),
            function(t) {
                t[t.FLOAT = 0] = "FLOAT", t[t.INT = 1] = "INT", t[t.UINT = 2] = "UINT"
            }(f || (f = {})),
            function(t) {
                t[t.NEAREST = 0] = "NEAREST", t[t.LINEAR = 1] = "LINEAR"
            }(l || (l = {})),
            function(t) {
                t[t.CLAMP = 33071] = "CLAMP", t[t.REPEAT = 10497] = "REPEAT", t[t.MIRRORED_REPEAT = 33648] = "MIRRORED_REPEAT"
            }(d || (d = {})),
            function(t) {
                t[t.OFF = 0] = "OFF", t[t.POW2 = 1] = "POW2", t[t.ON = 2] = "ON", t[t.ON_MANUAL = 3] = "ON_MANUAL"
            }(p || (p = {})),
            function(t) {
                t[t.NPM = 0] = "NPM", t[t.UNPACK = 1] = "UNPACK", t[t.PMA = 2] = "PMA", t[t.NO_PREMULTIPLIED_ALPHA = 0] = "NO_PREMULTIPLIED_ALPHA", t[t.PREMULTIPLY_ON_UPLOAD = 1] = "PREMULTIPLY_ON_UPLOAD", t[t.PREMULTIPLY_ALPHA = 2] = "PREMULTIPLY_ALPHA", t[t.PREMULTIPLIED_ALPHA = 2] = "PREMULTIPLIED_ALPHA"
            }(_ || (_ = {})),
            function(t) {
                t[t.NO = 0] = "NO", t[t.YES = 1] = "YES", t[t.AUTO = 2] = "AUTO", t[t.BLEND = 0] = "BLEND", t[t.CLEAR = 1] = "CLEAR", t[t.BLIT = 2] = "BLIT"
            }(v || (v = {})),
            function(t) {
                t[t.AUTO = 0] = "AUTO", t[t.MANUAL = 1] = "MANUAL"
            }(m || (m = {})),
            function(t) {
                t.LOW = "lowp", t.MEDIUM = "mediump", t.HIGH = "highp"
            }(y || (y = {})),
            function(t) {
                t[t.NONE = 0] = "NONE", t[t.SCISSOR = 1] = "SCISSOR", t[t.STENCIL = 2] = "STENCIL", t[t.SPRITE = 3] = "SPRITE"
            }(g || (g = {})),
            function(t) {
                t[t.NONE = 0] = "NONE", t[t.LOW = 2] = "LOW", t[t.MEDIUM = 4] = "MEDIUM", t[t.HIGH = 8] = "HIGH"
            }(E || (E = {})),
            function(t) {
                t[t.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER", t[t.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER", t[t.UNIFORM_BUFFER = 35345] = "UNIFORM_BUFFER"
            }(T || (T = {}));
            var G = {
                MIPMAP_TEXTURES: p.POW2,
                ANISOTROPIC_LEVEL: 0,
                RESOLUTION: 1,
                FILTER_RESOLUTION: 1,
                FILTER_MULTISAMPLE: E.NONE,
                SPRITE_MAX_TEXTURES: function(t) {
                    var e, r = !0;
                    (B.tablet || B.phone) && (B.apple.device && (e = navigator.userAgent.match(/OS (\d+)_(\d+)?/)) && parseInt(e[1], 10) < 11 && (r = !1), B.android.device && (e = navigator.userAgent.match(/Android\s([0-9.]*)/)) && parseInt(e[1], 10) < 7 && (r = !1));
                    return r ? 32 : 4
                }(),
                SPRITE_BATCH_SIZE: 4096,
                RENDER_OPTIONS: {
                    view: null,
                    antialias: !1,
                    autoDensity: !1,
                    backgroundColor: 0,
                    backgroundAlpha: 1,
                    useContextAlpha: !0,
                    clearBeforeRender: !0,
                    preserveDrawingBuffer: !1,
                    width: 800,
                    height: 600,
                    legacy: !1
                },
                GC_MODE: m.AUTO,
                GC_MAX_IDLE: 3600,
                GC_MAX_CHECK_COUNT: 600,
                WRAP_MODE: d.CLAMP,
                SCALE_MODE: l.LINEAR,
                PRECISION_VERTEX: y.HIGH,
                PRECISION_FRAGMENT: B.apple.device ? y.HIGH : y.MEDIUM,
                CAN_UPLOAD_SAME_BUFFER: !B.apple.device,
                CREATE_IMAGE_BITMAP: !1,
                ROUND_PIXELS: !1
            }
        },
        2126: function(t, e, r) {
            "use strict";
            r.d(e, {
                c: function() {
                    return a
                },
                o: function() {
                    return h
                }
            });
            var i = r(9658),
                n = r(6710),
                o = r(8942),
                s = r(550),
                a = function() {
                    function t(t, e, r) {
                        void 0 === r && (r = null), this._texture = t instanceof n.xE ? t : null, this.baseTexture = t instanceof n.VL ? t : this._texture.baseTexture, this.textures = {}, this.animations = {}, this.data = e;
                        var i = this.baseTexture.resource;
                        this.resolution = this._updateResolution(r || (i ? i.url : null)), this._frames = this.data.frames, this._frameKeys = Object.keys(this._frames), this._batchIndex = 0, this._callback = null
                    }
                    return t.prototype._updateResolution = function(t) {
                        void 0 === t && (t = null);
                        var e = this.data.meta.scale,
                            r = (0, o.fL)(t, null);
                        return null === r && (r = void 0 !== e ? parseFloat(e) : 1), 1 !== r && this.baseTexture.setResolution(r), r
                    }, t.prototype.parse = function(e) {
                        this._batchIndex = 0, this._callback = e, this._frameKeys.length <= t.BATCH_SIZE ? (this._processFrames(0), this._processAnimations(), this._parseComplete()) : this._nextBatch()
                    }, t.prototype._processFrames = function(e) {
                        for (var r = e, o = t.BATCH_SIZE; r - e < o && r < this._frameKeys.length;) {
                            var s = this._frameKeys[r],
                                a = this._frames[s],
                                h = a.frame;
                            if (h) {
                                var u, c = null,
                                    f = !1 !== a.trimmed && a.sourceSize ? a.sourceSize : a.frame,
                                    l = new i.Ae(0, 0, Math.floor(f.w) / this.resolution, Math.floor(f.h) / this.resolution);
                                u = a.rotated ? new i.Ae(Math.floor(h.x) / this.resolution, Math.floor(h.y) / this.resolution, Math.floor(h.h) / this.resolution, Math.floor(h.w) / this.resolution) : new i.Ae(Math.floor(h.x) / this.resolution, Math.floor(h.y) / this.resolution, Math.floor(h.w) / this.resolution, Math.floor(h.h) / this.resolution), !1 !== a.trimmed && a.spriteSourceSize && (c = new i.Ae(Math.floor(a.spriteSourceSize.x) / this.resolution, Math.floor(a.spriteSourceSize.y) / this.resolution, Math.floor(h.w) / this.resolution, Math.floor(h.h) / this.resolution)), this.textures[s] = new n.xE(this.baseTexture, u, l, c, a.rotated ? 2 : 0, a.anchor), n.xE.addToCache(this.textures[s], s)
                            }
                            r++
                        }
                    }, t.prototype._processAnimations = function() {
                        var t = this.data.animations || {};
                        for (var e in t) {
                            this.animations[e] = [];
                            for (var r = 0; r < t[e].length; r++) {
                                var i = t[e][r];
                                this.animations[e].push(this.textures[i])
                            }
                        }
                    }, t.prototype._parseComplete = function() {
                        var t = this._callback;
                        this._callback = null, this._batchIndex = 0, t.call(this, this.textures)
                    }, t.prototype._nextBatch = function() {
                        var e = this;
                        this._processFrames(this._batchIndex * t.BATCH_SIZE), this._batchIndex++, setTimeout((function() {
                            e._batchIndex * t.BATCH_SIZE < e._frameKeys.length ? e._nextBatch() : (e._processAnimations(), e._parseComplete())
                        }), 0)
                    }, t.prototype.destroy = function(t) {
                        var e;
                        for (var r in void 0 === t && (t = !1), this.textures) this.textures[r].destroy();
                        this._frames = null, this._frameKeys = null, this.data = null, this.textures = null, t && (null === (e = this._texture) || void 0 === e || e.destroy(), this.baseTexture.destroy()), this._texture = null, this.baseTexture = null
                    }, t.BATCH_SIZE = 1e3, t
                }(),
                h = function() {
                    function t() {}
                    return t.use = function(e, r) {
                        var i, n, h = this,
                            u = e.name + "_image";
                        if (e.data && e.type === s.kC.TYPE.JSON && e.data.frames && !h.resources[u]) {
                            var c = null === (n = null === (i = e.data) || void 0 === i ? void 0 : i.meta) || void 0 === n ? void 0 : n.related_multi_packs;
                            if (Array.isArray(c))
                                for (var f = function(t) {
                                        if ("string" != typeof t) return "continue";
                                        var r = t.replace(".json", ""),
                                            i = o.HQ.resolve(e.url.replace(h.baseUrl, ""), t);
                                        if (h.resources[r] || Object.values(h.resources).some((function(t) {
                                                return o.HQ.format(o.HQ.parse(t.url)) === i
                                            }))) return "continue";
                                        var n = {
                                            crossOrigin: e.crossOrigin,
                                            loadType: s.kC.LOAD_TYPE.XHR,
                                            xhrType: s.kC.XHR_RESPONSE_TYPE.JSON,
                                            parentResource: e,
                                            metadata: e.metadata
                                        };
                                        h.add(r, i, n)
                                    }, l = 0, d = c; l < d.length; l++) f(d[l]);
                            var p = {
                                    crossOrigin: e.crossOrigin,
                                    metadata: e.metadata.imageMetadata,
                                    parentResource: e
                                },
                                _ = t.getResourcePath(e, h.baseUrl);
                            h.add(u, _, p, (function(t) {
                                if (t.error) r(t.error);
                                else {
                                    var i = new a(t.texture, e.data, e.url);
                                    i.parse((function() {
                                        e.spritesheet = i, e.textures = i.textures, r()
                                    }))
                                }
                            }))
                        } else r()
                    }, t.getResourcePath = function(t, e) {
                        return t.isDataUrl ? t.data.meta.image : o.HQ.resolve(t.url.replace(e, ""), t.data.meta.image)
                    }, t
                }()
        },
        6679: function(t, e, r) {
            "use strict";
            r.d(e, {
                uF: function() {
                    return i
                },
                vB: function() {
                    return s
                }
            });
            var i, n = r(9319);
            n.X.TARGET_FPMS = .06,
                function(t) {
                    t[t.INTERACTION = 50] = "INTERACTION", t[t.HIGH = 25] = "HIGH", t[t.NORMAL = 0] = "NORMAL", t[t.LOW = -25] = "LOW", t[t.UTILITY = -50] = "UTILITY"
                }(i || (i = {}));
            var o = function() {
                    function t(t, e, r, i) {
                        void 0 === e && (e = null), void 0 === r && (r = 0), void 0 === i && (i = !1), this.next = null, this.previous = null, this._destroyed = !1, this.fn = t, this.context = e, this.priority = r, this.once = i
                    }
                    return t.prototype.match = function(t, e) {
                        return void 0 === e && (e = null), this.fn === t && this.context === e
                    }, t.prototype.emit = function(t) {
                        this.fn && (this.context ? this.fn.call(this.context, t) : this.fn(t));
                        var e = this.next;
                        return this.once && this.destroy(!0), this._destroyed && (this.next = null), e
                    }, t.prototype.connect = function(t) {
                        this.previous = t, t.next && (t.next.previous = this), this.next = t.next, t.next = this
                    }, t.prototype.destroy = function(t) {
                        void 0 === t && (t = !1), this._destroyed = !0, this.fn = null, this.context = null, this.previous && (this.previous.next = this.next), this.next && (this.next.previous = this.previous);
                        var e = this.next;
                        return this.next = t ? null : e, this.previous = null, e
                    }, t
                }(),
                s = function() {
                    function t() {
                        var t = this;
                        this.autoStart = !1, this.deltaTime = 1, this.lastTime = -1, this.speed = 1, this.started = !1, this._requestId = null, this._maxElapsedMS = 100, this._minElapsedMS = 0, this._protected = !1, this._lastFrame = -1, this._head = new o(null, null, Infinity), this.deltaMS = 1 / n.X.TARGET_FPMS, this.elapsedMS = 1 / n.X.TARGET_FPMS, this._tick = function(e) {
                            t._requestId = null, t.started && (t.update(e), t.started && null === t._requestId && t._head.next && (t._requestId = requestAnimationFrame(t._tick)))
                        }
                    }
                    return t.prototype._requestIfNeeded = function() {
                        null === this._requestId && this._head.next && (this.lastTime = performance.now(), this._lastFrame = this.lastTime, this._requestId = requestAnimationFrame(this._tick))
                    }, t.prototype._cancelIfNeeded = function() {
                        null !== this._requestId && (cancelAnimationFrame(this._requestId), this._requestId = null)
                    }, t.prototype._startIfPossible = function() {
                        this.started ? this._requestIfNeeded() : this.autoStart && this.start()
                    }, t.prototype.add = function(t, e, r) {
                        return void 0 === r && (r = i.NORMAL), this._addListener(new o(t, e, r))
                    }, t.prototype.addOnce = function(t, e, r) {
                        return void 0 === r && (r = i.NORMAL), this._addListener(new o(t, e, r, !0))
                    }, t.prototype._addListener = function(t) {
                        var e = this._head.next,
                            r = this._head;
                        if (e) {
                            for (; e;) {
                                if (t.priority > e.priority) {
                                    t.connect(r);
                                    break
                                }
                                r = e, e = e.next
                            }
                            t.previous || t.connect(r)
                        } else t.connect(r);
                        return this._startIfPossible(), this
                    }, t.prototype.remove = function(t, e) {
                        for (var r = this._head.next; r;) r = r.match(t, e) ? r.destroy() : r.next;
                        return this._head.next || this._cancelIfNeeded(), this
                    }, Object.defineProperty(t.prototype, "count", {
                        get: function() {
                            if (!this._head) return 0;
                            for (var t = 0, e = this._head; e = e.next;) t++;
                            return t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.start = function() {
                        this.started || (this.started = !0, this._requestIfNeeded())
                    }, t.prototype.stop = function() {
                        this.started && (this.started = !1, this._cancelIfNeeded())
                    }, t.prototype.destroy = function() {
                        if (!this._protected) {
                            this.stop();
                            for (var t = this._head.next; t;) t = t.destroy(!0);
                            this._head.destroy(), this._head = null
                        }
                    }, t.prototype.update = function(t) {
                        var e;
                        if (void 0 === t && (t = performance.now()), t > this.lastTime) {
                            if ((e = this.elapsedMS = t - this.lastTime) > this._maxElapsedMS && (e = this._maxElapsedMS), e *= this.speed, this._minElapsedMS) {
                                var r = t - this._lastFrame | 0;
                                if (r < this._minElapsedMS) return;
                                this._lastFrame = t - r % this._minElapsedMS
                            }
                            this.deltaMS = e, this.deltaTime = this.deltaMS * n.X.TARGET_FPMS;
                            for (var i = this._head, o = i.next; o;) o = o.emit(this.deltaTime);
                            i.next || this._cancelIfNeeded()
                        } else this.deltaTime = this.deltaMS = this.elapsedMS = 0;
                        this.lastTime = t
                    }, Object.defineProperty(t.prototype, "FPS", {
                        get: function() {
                            return 1e3 / this.elapsedMS
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "minFPS", {
                        get: function() {
                            return 1e3 / this._maxElapsedMS
                        },
                        set: function(t) {
                            var e = Math.min(this.maxFPS, t),
                                r = Math.min(Math.max(0, e) / 1e3, n.X.TARGET_FPMS);
                            this._maxElapsedMS = 1 / r
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "maxFPS", {
                        get: function() {
                            return this._minElapsedMS ? Math.round(1e3 / this._minElapsedMS) : 0
                        },
                        set: function(t) {
                            if (0 === t) this._minElapsedMS = 0;
                            else {
                                var e = Math.max(this.minFPS, t);
                                this._minElapsedMS = 1 / (e / 1e3)
                            }
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t, "shared", {
                        get: function() {
                            if (!t._shared) {
                                var e = t._shared = new t;
                                e.autoStart = !0, e._protected = !0
                            }
                            return t._shared
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t, "system", {
                        get: function() {
                            if (!t._system) {
                                var e = t._system = new t;
                                e.autoStart = !0, e._protected = !0
                            }
                            return t._system
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }();
            ! function() {
                function t() {}
                t.init = function(t) {
                    var e = this;
                    t = Object.assign({
                        autoStart: !0,
                        sharedTicker: !1
                    }, t), Object.defineProperty(this, "ticker", {
                        set: function(t) {
                            this._ticker && this._ticker.remove(this.render, this), this._ticker = t, t && t.add(this.render, this, i.LOW)
                        },
                        get: function() {
                            return this._ticker
                        }
                    }), this.stop = function() {
                        e._ticker.stop()
                    }, this.start = function() {
                        e._ticker.start()
                    }, this._ticker = null, this.ticker = t.sharedTicker ? s.shared : new s, t.autoStart && this.start()
                }, t.destroy = function() {
                    if (this._ticker) {
                        var t = this._ticker;
                        this.ticker = null, t.destroy()
                    }
                }
            }()
        },
        8942: function(t, e, r) {
            "use strict";
            r.d(e, {
                D: function() {
                    return E
                },
                DE: function() {
                    return d
                },
                Er: function() {
                    return S
                },
                GG: function() {
                    return M
                },
                GT: function() {
                    return x
                },
                HQ: function() {
                    return c
                },
                HR: function() {
                    return p
                },
                OT: function() {
                    return a.a
                },
                Qq: function() {
                    return G
                },
                V8: function() {
                    return F
                },
                XN: function() {
                    return m
                },
                Xx: function() {
                    return O
                },
                YA: function() {
                    return g
                },
                a1: function() {
                    return C
                },
                a9: function() {
                    return A
                },
                fL: function() {
                    return k
                },
                hQ: function() {
                    return N
                },
                k3: function() {
                    return I
                },
                kN: function() {
                    return U
                },
                qU: function() {
                    return D
                },
                qm: function() {
                    return y
                },
                rA: function() {
                    return T
                },
                tq: function() {
                    return i.t
                },
                u7: function() {
                    return b
                },
                vp: function() {
                    return o.a
                },
                wK: function() {
                    return v
                },
                wv: function() {
                    return R
                },
                yA: function() {
                    return B
                }
            });
            var i = r(9319),
                n = r(6729),
                o = r.n(n),
                s = r(9187),
                a = r.n(s),
                h = r(8575),
                u = r(1680),
                c = {
                    parse: h.Qc,
                    format: h.WU,
                    resolve: h.DB
                };
            i.X.RETINA_PREFIX = /@([0-9\.]+)x/, i.X.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = !1;
            var f, l = !1;

            function d(t) {
                var e;
                if (!l) {
                    if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
                        var r = ["\n %c %c %c PixiJS 6.4.2 - ✰ " + t + " ✰  %c  %c  http://www.pixijs.com/  %c %c ♥%c♥%c♥ \n\n", "background: #ff66a5; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff66a5; background: #030307; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "background: #ffc3dc; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;"];
                        (e = globalThis.console).log.apply(e, r)
                    } else globalThis.console && globalThis.console.log("PixiJS 6.4.2 - " + t + " - http://www.pixijs.com/");
                    l = !0
                }
            }

            function p() {
                return void 0 === f && (f = function() {
                    var t = {
                        stencil: !0,
                        failIfMajorPerformanceCaveat: i.X.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT
                    };
                    try {
                        if (!globalThis.WebGLRenderingContext) return !1;
                        var e = document.createElement("canvas"),
                            r = e.getContext("webgl", t) || e.getContext("experimental-webgl", t),
                            n = !(!r || !r.getContextAttributes().stencil);
                        if (r) {
                            var o = r.getExtension("WEBGL_lose_context");
                            o && o.loseContext()
                        }
                        return r = null, n
                    } catch (t) {
                        return !1
                    }
                }()), f
            }
            var _ = {
                aliceblue: "#f0f8ff",
                antiquewhite: "#faebd7",
                aqua: "#00ffff",
                aquamarine: "#7fffd4",
                azure: "#f0ffff",
                beige: "#f5f5dc",
                bisque: "#ffe4c4",
                black: "#000000",
                blanchedalmond: "#ffebcd",
                blue: "#0000ff",
                blueviolet: "#8a2be2",
                brown: "#a52a2a",
                burlywood: "#deb887",
                cadetblue: "#5f9ea0",
                chartreuse: "#7fff00",
                chocolate: "#d2691e",
                coral: "#ff7f50",
                cornflowerblue: "#6495ed",
                cornsilk: "#fff8dc",
                crimson: "#dc143c",
                cyan: "#00ffff",
                darkblue: "#00008b",
                darkcyan: "#008b8b",
                darkgoldenrod: "#b8860b",
                darkgray: "#a9a9a9",
                darkgreen: "#006400",
                darkgrey: "#a9a9a9",
                darkkhaki: "#bdb76b",
                darkmagenta: "#8b008b",
                darkolivegreen: "#556b2f",
                darkorange: "#ff8c00",
                darkorchid: "#9932cc",
                darkred: "#8b0000",
                darksalmon: "#e9967a",
                darkseagreen: "#8fbc8f",
                darkslateblue: "#483d8b",
                darkslategray: "#2f4f4f",
                darkslategrey: "#2f4f4f",
                darkturquoise: "#00ced1",
                darkviolet: "#9400d3",
                deeppink: "#ff1493",
                deepskyblue: "#00bfff",
                dimgray: "#696969",
                dimgrey: "#696969",
                dodgerblue: "#1e90ff",
                firebrick: "#b22222",
                floralwhite: "#fffaf0",
                forestgreen: "#228b22",
                fuchsia: "#ff00ff",
                gainsboro: "#dcdcdc",
                ghostwhite: "#f8f8ff",
                goldenrod: "#daa520",
                gold: "#ffd700",
                gray: "#808080",
                green: "#008000",
                greenyellow: "#adff2f",
                grey: "#808080",
                honeydew: "#f0fff0",
                hotpink: "#ff69b4",
                indianred: "#cd5c5c",
                indigo: "#4b0082",
                ivory: "#fffff0",
                khaki: "#f0e68c",
                lavenderblush: "#fff0f5",
                lavender: "#e6e6fa",
                lawngreen: "#7cfc00",
                lemonchiffon: "#fffacd",
                lightblue: "#add8e6",
                lightcoral: "#f08080",
                lightcyan: "#e0ffff",
                lightgoldenrodyellow: "#fafad2",
                lightgray: "#d3d3d3",
                lightgreen: "#90ee90",
                lightgrey: "#d3d3d3",
                lightpink: "#ffb6c1",
                lightsalmon: "#ffa07a",
                lightseagreen: "#20b2aa",
                lightskyblue: "#87cefa",
                lightslategray: "#778899",
                lightslategrey: "#778899",
                lightsteelblue: "#b0c4de",
                lightyellow: "#ffffe0",
                lime: "#00ff00",
                limegreen: "#32cd32",
                linen: "#faf0e6",
                magenta: "#ff00ff",
                maroon: "#800000",
                mediumaquamarine: "#66cdaa",
                mediumblue: "#0000cd",
                mediumorchid: "#ba55d3",
                mediumpurple: "#9370db",
                mediumseagreen: "#3cb371",
                mediumslateblue: "#7b68ee",
                mediumspringgreen: "#00fa9a",
                mediumturquoise: "#48d1cc",
                mediumvioletred: "#c71585",
                midnightblue: "#191970",
                mintcream: "#f5fffa",
                mistyrose: "#ffe4e1",
                moccasin: "#ffe4b5",
                navajowhite: "#ffdead",
                navy: "#000080",
                oldlace: "#fdf5e6",
                olive: "#808000",
                olivedrab: "#6b8e23",
                orange: "#ffa500",
                orangered: "#ff4500",
                orchid: "#da70d6",
                palegoldenrod: "#eee8aa",
                palegreen: "#98fb98",
                paleturquoise: "#afeeee",
                palevioletred: "#db7093",
                papayawhip: "#ffefd5",
                peachpuff: "#ffdab9",
                peru: "#cd853f",
                pink: "#ffc0cb",
                plum: "#dda0dd",
                powderblue: "#b0e0e6",
                purple: "#800080",
                rebeccapurple: "#663399",
                red: "#ff0000",
                rosybrown: "#bc8f8f",
                royalblue: "#4169e1",
                saddlebrown: "#8b4513",
                salmon: "#fa8072",
                sandybrown: "#f4a460",
                seagreen: "#2e8b57",
                seashell: "#fff5ee",
                sienna: "#a0522d",
                silver: "#c0c0c0",
                skyblue: "#87ceeb",
                slateblue: "#6a5acd",
                slategray: "#708090",
                slategrey: "#708090",
                snow: "#fffafa",
                springgreen: "#00ff7f",
                steelblue: "#4682b4",
                tan: "#d2b48c",
                teal: "#008080",
                thistle: "#d8bfd8",
                tomato: "#ff6347",
                turquoise: "#40e0d0",
                violet: "#ee82ee",
                wheat: "#f5deb3",
                white: "#ffffff",
                whitesmoke: "#f5f5f5",
                yellow: "#ffff00",
                yellowgreen: "#9acd32"
            };

            function v(t, e) {
                return void 0 === e && (e = []), e[0] = (t >> 16 & 255) / 255, e[1] = (t >> 8 & 255) / 255, e[2] = (255 & t) / 255, e
            }

            function m(t) {
                var e = t.toString(16);
                return "#" + ("000000".substring(0, 6 - e.length) + e)
            }

            function y(t) {
                return "string" == typeof t && "#" === (t = _[t.toLowerCase()] || t)[0] && (t = t.slice(1)), parseInt(t, 16)
            }
            var g = function() {
                for (var t = [], e = [], r = 0; r < 32; r++) t[r] = r, e[r] = r;
                t[u.T$.NORMAL_NPM] = u.T$.NORMAL, t[u.T$.ADD_NPM] = u.T$.ADD, t[u.T$.SCREEN_NPM] = u.T$.SCREEN, e[u.T$.NORMAL] = u.T$.NORMAL_NPM, e[u.T$.ADD] = u.T$.ADD_NPM, e[u.T$.SCREEN] = u.T$.SCREEN_NPM;
                var i = [];
                return i.push(e), i.push(t), i
            }();

            function E(t, e) {
                return g[e ? 1 : 0][t]
            }

            function T(t, e) {
                if (1 === e) return (255 * e << 24) + t;
                if (0 === e) return 0;
                var r = t >> 16 & 255,
                    i = t >> 8 & 255,
                    n = 255 & t;
                return (255 * e << 24) + ((r = r * e + .5 | 0) << 16) + ((i = i * e + .5 | 0) << 8) + (n * e + .5 | 0)
            }

            function x(t, e, r, i) {
                return (r = r || new Float32Array(4))[0] = (t >> 16 & 255) / 255, r[1] = (t >> 8 & 255) / 255, r[2] = (255 & t) / 255, (i || void 0 === i) && (r[0] *= e, r[1] *= e, r[2] *= e), r[3] = e, r
            }

            function b(t) {
                if (4 === t.BYTES_PER_ELEMENT) return t instanceof Float32Array ? "Float32Array" : t instanceof Uint32Array ? "Uint32Array" : "Int32Array";
                if (2 === t.BYTES_PER_ELEMENT) {
                    if (t instanceof Uint16Array) return "Uint16Array"
                } else if (1 === t.BYTES_PER_ELEMENT && t instanceof Uint8Array) return "Uint8Array";
                return null
            }

            function A(t) {
                return t += 0 === t ? 1 : 0, --t, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, 1 + (t |= t >>> 16)
            }

            function R(t) {
                return !(t & t - 1 || !t)
            }

            function I(t) {
                var e = (t > 65535 ? 1 : 0) << 4,
                    r = ((t >>>= e) > 255 ? 1 : 0) << 3;
                return e |= r, e |= r = ((t >>>= r) > 15 ? 1 : 0) << 2, (e |= r = ((t >>>= r) > 3 ? 1 : 0) << 1) | (t >>>= r) >> 1
            }

            function S(t, e, r) {
                var i, n = t.length;
                if (!(e >= n || 0 === r)) {
                    var o = n - (r = e + r > n ? n - e : r);
                    for (i = e; i < o; ++i) t[i] = t[i + r];
                    t.length = o
                }
            }

            function O(t) {
                return 0 === t ? 0 : t < 0 ? -1 : 1
            }
            Float32Array, Uint32Array, Int32Array, Uint8Array;
            var w = 0;

            function N() {
                return ++w
            }
            var P = {};

            function C(t, e, r) {
                if (void 0 === r && (r = 3), !P[e]) {
                    var i = (new Error).stack;
                    void 0 === i || (i = i.split("\n").splice(r).join("\n"), console.groupCollapsed), P[e] = !0
                }
            }
            var L, M = {},
                U = Object.create(null),
                F = Object.create(null),
                D = function() {
                    function t(t, e, r) {
                        this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.resolution = r || i.X.RESOLUTION, this.resize(t, e)
                    }
                    return t.prototype.clear = function() {
                        this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
                    }, t.prototype.resize = function(t, e) {
                        this.canvas.width = Math.round(t * this.resolution), this.canvas.height = Math.round(e * this.resolution)
                    }, t.prototype.destroy = function() {
                        this.context = null, this.canvas = null
                    }, Object.defineProperty(t.prototype, "width", {
                        get: function() {
                            return this.canvas.width
                        },
                        set: function(t) {
                            this.canvas.width = Math.round(t)
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "height", {
                        get: function() {
                            return this.canvas.height
                        },
                        set: function(t) {
                            this.canvas.height = Math.round(t)
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }();

            function B(t) {
                var e, r, i, n = t.width,
                    o = t.height,
                    s = t.getContext("2d"),
                    a = s.getImageData(0, 0, n, o).data,
                    h = a.length,
                    u = {
                        top: null,
                        left: null,
                        right: null,
                        bottom: null
                    },
                    c = null;
                for (e = 0; e < h; e += 4) 0 !== a[e + 3] && (r = e / 4 % n, i = ~~(e / 4 / n), null === u.top && (u.top = i), (null === u.left || r < u.left) && (u.left = r), (null === u.right || u.right < r) && (u.right = r + 1), (null === u.bottom || u.bottom < i) && (u.bottom = i));
                return null !== u.top && (n = u.right - u.left, o = u.bottom - u.top + 1, c = s.getImageData(u.left, u.top, n, o)), {
                    height: o,
                    width: n,
                    data: c
                }
            }

            function G(t, e) {
                if (void 0 === e && (e = globalThis.location), 0 === t.indexOf("data:")) return "";
                e = e || globalThis.location, L || (L = document.createElement("a")), L.href = t;
                var r = c.parse(L.href),
                    i = !r.port && "" === e.port || r.port === e.port;
                return r.hostname === e.hostname && i && r.protocol === e.protocol ? "" : "anonymous"
            }

            function k(t, e) {
                var r = i.X.RETINA_PREFIX.exec(t);
                return r ? parseFloat(r[1]) : void 0 !== e ? e : 1
            }
        },
        1285: function(t, e, r) {
            "use strict";
            var i = r(7908),
                n = r(1400),
                o = r(6244);
            t.exports = function(t) {
                for (var e = i(this), r = o(e), s = arguments.length, a = n(s > 1 ? arguments[1] : void 0, r), h = s > 2 ? arguments[2] : void 0, u = void 0 === h ? r : n(h, r); u > a;) e[a++] = t;
                return e
            }
        },
        3671: function(t, e, r) {
            var i = r(9662),
                n = r(7908),
                o = r(8361),
                s = r(6244),
                a = TypeError,
                h = function(t) {
                    return function(e, r, h, u) {
                        i(r);
                        var c = n(e),
                            f = o(c),
                            l = s(c),
                            d = t ? l - 1 : 0,
                            p = t ? -1 : 1;
                        if (h < 2)
                            for (;;) {
                                if (d in f) {
                                    u = f[d], d += p;
                                    break
                                }
                                if (d += p, t ? d < 0 : l <= d) throw a("Reduce of empty array with no initial value")
                            }
                        for (; t ? d >= 0 : l > d; d += p) d in f && (u = r(u, f[d], d, c));
                        return u
                    }
                };
            t.exports = {
                left: h(!1),
                right: h(!0)
            }
        },
        4362: function(t, e, r) {
            var i = r(1589),
                n = Math.floor,
                o = function(t, e) {
                    var r = t.length,
                        h = n(r / 2);
                    return r < 8 ? s(t, e) : a(t, o(i(t, 0, h), e), o(i(t, h), e), e)
                },
                s = function(t, e) {
                    for (var r, i, n = t.length, o = 1; o < n;) {
                        for (i = o, r = t[o]; i && e(t[i - 1], r) > 0;) t[i] = t[--i];
                        i !== o++ && (t[i] = r)
                    }
                    return t
                },
                a = function(t, e, r, i) {
                    for (var n = e.length, o = r.length, s = 0, a = 0; s < n || a < o;) t[s + a] = s < n && a < o ? i(e[s], r[a]) <= 0 ? e[s++] : r[a++] : s < n ? e[s++] : r[a++];
                    return t
                };
            t.exports = o
        },
        8886: function(t, e, r) {
            var i = r(8113).match(/firefox\/(\d+)/i);
            t.exports = !!i && +i[1]
        },
        256: function(t, e, r) {
            var i = r(8113);
            t.exports = /MSIE|Trident/.test(i)
        },
        8008: function(t, e, r) {
            var i = r(8113).match(/AppleWebKit\/(\d+)\./);
            t.exports = !!i && +i[1]
        },
        1574: function(t, e, r) {
            "use strict";
            var i = r(9781),
                n = r(1702),
                o = r(6916),
                s = r(7293),
                a = r(1956),
                h = r(5181),
                u = r(5296),
                c = r(7908),
                f = r(8361),
                l = Object.assign,
                d = Object.defineProperty,
                p = n([].concat);
            t.exports = !l || s((function() {
                if (i && 1 !== l({
                        b: 1
                    }, l(d({}, "a", {
                        enumerable: !0,
                        get: function() {
                            d(this, "b", {
                                value: 3,
                                enumerable: !1
                            })
                        }
                    }), {
                        b: 2
                    })).b) return !0;
                var t = {},
                    e = {},
                    r = Symbol(),
                    n = "abcdefghijklmnopqrst";
                return t[r] = 7, n.split("").forEach((function(t) {
                    e[t] = t
                })), 7 != l({}, t)[r] || a(l({}, e)).join("") != n
            })) ? function(t, e) {
                for (var r = c(t), n = arguments.length, s = 1, l = h.f, d = u.f; n > s;)
                    for (var _, v = f(arguments[s++]), m = l ? p(a(v), l(v)) : a(v), y = m.length, g = 0; y > g;) _ = m[g++], i && !o(d, v, _) || (r[_] = v[_]);
                return r
            } : l
        },
        3290: function(t, e, r) {
            var i = r(2109),
                n = r(1285),
                o = r(1223);
            i({
                target: "Array",
                proto: !0
            }, {
                fill: n
            }), o("fill")
        },
        5827: function(t, e, r) {
            "use strict";
            var i = r(2109),
                n = r(3671).left,
                o = r(2133),
                s = r(7392),
                a = r(5268);
            i({
                target: "Array",
                proto: !0,
                forced: !o("reduce") || !a && s > 79 && s < 83
            }, {
                reduce: function(t) {
                    var e = arguments.length;
                    return n(this, t, e, e > 1 ? arguments[1] : void 0)
                }
            })
        },
        2707: function(t, e, r) {
            "use strict";
            var i = r(2109),
                n = r(1702),
                o = r(9662),
                s = r(7908),
                a = r(6244),
                h = r(5117),
                u = r(1340),
                c = r(7293),
                f = r(4362),
                l = r(2133),
                d = r(8886),
                p = r(256),
                _ = r(7392),
                v = r(8008),
                m = [],
                y = n(m.sort),
                g = n(m.push),
                E = c((function() {
                    m.sort(void 0)
                })),
                T = c((function() {
                    m.sort(null)
                })),
                x = l("sort"),
                b = !c((function() {
                    if (_) return _ < 70;
                    if (!(d && d > 3)) {
                        if (p) return !0;
                        if (v) return v < 603;
                        var t, e, r, i, n = "";
                        for (t = 65; t < 76; t++) {
                            switch (e = String.fromCharCode(t), t) {
                                case 66:
                                case 69:
                                case 70:
                                case 72:
                                    r = 3;
                                    break;
                                case 68:
                                case 71:
                                    r = 4;
                                    break;
                                default:
                                    r = 2
                            }
                            for (i = 0; i < 47; i++) m.push({
                                k: e + i,
                                v: r
                            })
                        }
                        for (m.sort((function(t, e) {
                                return e.v - t.v
                            })), i = 0; i < m.length; i++) e = m[i].k.charAt(0), n.charAt(n.length - 1) !== e && (n += e);
                        return "DGBEFHACIJK" !== n
                    }
                }));
            i({
                target: "Array",
                proto: !0,
                forced: E || !T || !x || !b
            }, {
                sort: function(t) {
                    void 0 !== t && o(t);
                    var e = s(this);
                    if (b) return void 0 === t ? y(e) : y(e, t);
                    var r, i, n = [],
                        c = a(e);
                    for (i = 0; i < c; i++) i in e && g(n, e[i]);
                    for (f(n, function(t) {
                            return function(e, r) {
                                return void 0 === r ? -1 : void 0 === e ? 1 : void 0 !== t ? +t(e, r) || 0 : u(e) > u(r) ? 1 : -1
                            }
                        }(t)), r = n.length, i = 0; i < r;) e[i] = n[i++];
                    for (; i < c;) h(e, i++);
                    return e
                }
            })
        },
        3689: function(t, e, r) {
            r(2109)({
                target: "Math",
                stat: !0
            }, {
                trunc: r(4758)
            })
        },
        9601: function(t, e, r) {
            var i = r(2109),
                n = r(1574);
            i({
                target: "Object",
                stat: !0,
                arity: 2,
                forced: Object.assign !== n
            }, {
                assign: n
            })
        },
        9720: function(t, e, r) {
            var i = r(2109),
                n = r(4699).entries;
            i({
                target: "Object",
                stat: !0
            }, {
                entries: function(t) {
                    return n(t)
                }
            })
        },
        9187: function(t) {
            "use strict";

            function e(t, e, i) {
                i = i || 2;
                var o, s, a, h, f, l, p, _ = e && e.length,
                    v = _ ? e[0] * i : t.length,
                    m = r(t, 0, v, i, !0),
                    y = [];
                if (!m || m.next === m.prev) return y;
                if (_ && (m = function(t, e, i, n) {
                        var o, s, a, h = [];
                        for (o = 0, s = e.length; o < s; o++)(a = r(t, e[o] * n, o < s - 1 ? e[o + 1] * n : t.length, n, !1)) === a.next && (a.steiner = !0), h.push(d(a));
                        for (h.sort(u), o = 0; o < h.length; o++) i = c(h[o], i);
                        return i
                    }(t, e, m, i)), t.length > 80 * i) {
                    o = a = t[0], s = h = t[1];
                    for (var g = i; g < v; g += i)(f = t[g]) < o && (o = f), (l = t[g + 1]) < s && (s = l), f > a && (a = f), l > h && (h = l);
                    p = 0 !== (p = Math.max(a - o, h - s)) ? 32767 / p : 0
                }
                return n(m, y, i, o, s, p, 0), y
            }

            function r(t, e, r, i, n) {
                var o, s;
                if (n === I(t, e, r, i) > 0)
                    for (o = e; o < r; o += i) s = b(o, t[o], t[o + 1], s);
                else
                    for (o = r - i; o >= e; o -= i) s = b(o, t[o], t[o + 1], s);
                return s && m(s, s.next) && (A(s), s = s.next), s
            }

            function i(t, e) {
                if (!t) return t;
                e || (e = t);
                var r, i = t;
                do {
                    if (r = !1, i.steiner || !m(i, i.next) && 0 !== v(i.prev, i, i.next)) i = i.next;
                    else {
                        if (A(i), (i = e = i.prev) === i.next) break;
                        r = !0
                    }
                } while (r || i !== e);
                return e
            }

            function n(t, e, r, u, c, f, d) {
                if (t) {
                    !d && f && function(t, e, r, i) {
                        var n = t;
                        do {
                            0 === n.z && (n.z = l(n.x, n.y, e, r, i)), n.prevZ = n.prev, n.nextZ = n.next, n = n.next
                        } while (n !== t);
                        n.prevZ.nextZ = null, n.prevZ = null,
                            function(t) {
                                var e, r, i, n, o, s, a, h, u = 1;
                                do {
                                    for (r = t, t = null, o = null, s = 0; r;) {
                                        for (s++, i = r, a = 0, e = 0; e < u && (a++, i = i.nextZ); e++);
                                        for (h = u; a > 0 || h > 0 && i;) 0 !== a && (0 === h || !i || r.z <= i.z) ? (n = r, r = r.nextZ, a--) : (n = i, i = i.nextZ, h--), o ? o.nextZ = n : t = n, n.prevZ = o, o = n;
                                        r = i
                                    }
                                    o.nextZ = null, u *= 2
                                } while (s > 1)
                            }(n)
                    }(t, u, c, f);
                    for (var p, _, v = t; t.prev !== t.next;)
                        if (p = t.prev, _ = t.next, f ? s(t, u, c, f) : o(t)) e.push(p.i / r | 0), e.push(t.i / r | 0), e.push(_.i / r | 0), A(t), t = _.next, v = _.next;
                        else if ((t = _) === v) {
                        d ? 1 === d ? n(t = a(i(t), e, r), e, r, u, c, f, 2) : 2 === d && h(t, e, r, u, c, f) : n(i(t), e, r, u, c, f, 1);
                        break
                    }
                }
            }

            function o(t) {
                var e = t.prev,
                    r = t,
                    i = t.next;
                if (v(e, r, i) >= 0) return !1;
                for (var n = e.x, o = r.x, s = i.x, a = e.y, h = r.y, u = i.y, c = n < o ? n < s ? n : s : o < s ? o : s, f = a < h ? a < u ? a : u : h < u ? h : u, l = n > o ? n > s ? n : s : o > s ? o : s, d = a > h ? a > u ? a : u : h > u ? h : u, _ = i.next; _ !== e;) {
                    if (_.x >= c && _.x <= l && _.y >= f && _.y <= d && p(n, a, o, h, s, u, _.x, _.y) && v(_.prev, _, _.next) >= 0) return !1;
                    _ = _.next
                }
                return !0
            }

            function s(t, e, r, i) {
                var n = t.prev,
                    o = t,
                    s = t.next;
                if (v(n, o, s) >= 0) return !1;
                for (var a = n.x, h = o.x, u = s.x, c = n.y, f = o.y, d = s.y, _ = a < h ? a < u ? a : u : h < u ? h : u, m = c < f ? c < d ? c : d : f < d ? f : d, y = a > h ? a > u ? a : u : h > u ? h : u, g = c > f ? c > d ? c : d : f > d ? f : d, E = l(_, m, e, r, i), T = l(y, g, e, r, i), x = t.prevZ, b = t.nextZ; x && x.z >= E && b && b.z <= T;) {
                    if (x.x >= _ && x.x <= y && x.y >= m && x.y <= g && x !== n && x !== s && p(a, c, h, f, u, d, x.x, x.y) && v(x.prev, x, x.next) >= 0) return !1;
                    if (x = x.prevZ, b.x >= _ && b.x <= y && b.y >= m && b.y <= g && b !== n && b !== s && p(a, c, h, f, u, d, b.x, b.y) && v(b.prev, b, b.next) >= 0) return !1;
                    b = b.nextZ
                }
                for (; x && x.z >= E;) {
                    if (x.x >= _ && x.x <= y && x.y >= m && x.y <= g && x !== n && x !== s && p(a, c, h, f, u, d, x.x, x.y) && v(x.prev, x, x.next) >= 0) return !1;
                    x = x.prevZ
                }
                for (; b && b.z <= T;) {
                    if (b.x >= _ && b.x <= y && b.y >= m && b.y <= g && b !== n && b !== s && p(a, c, h, f, u, d, b.x, b.y) && v(b.prev, b, b.next) >= 0) return !1;
                    b = b.nextZ
                }
                return !0
            }

            function a(t, e, r) {
                var n = t;
                do {
                    var o = n.prev,
                        s = n.next.next;
                    !m(o, s) && y(o, n, n.next, s) && T(o, s) && T(s, o) && (e.push(o.i / r | 0), e.push(n.i / r | 0), e.push(s.i / r | 0), A(n), A(n.next), n = t = s), n = n.next
                } while (n !== t);
                return i(n)
            }

            function h(t, e, r, o, s, a) {
                var h = t;
                do {
                    for (var u = h.next.next; u !== h.prev;) {
                        if (h.i !== u.i && _(h, u)) {
                            var c = x(h, u);
                            return h = i(h, h.next), c = i(c, c.next), n(h, e, r, o, s, a, 0), void n(c, e, r, o, s, a, 0)
                        }
                        u = u.next
                    }
                    h = h.next
                } while (h !== t)
            }

            function u(t, e) {
                return t.x - e.x
            }

            function c(t, e) {
                var r = function(t, e) {
                    var r, i = e,
                        n = t.x,
                        o = t.y,
                        s = -Infinity;
                    do {
                        if (o <= i.y && o >= i.next.y && i.next.y !== i.y) {
                            var a = i.x + (o - i.y) * (i.next.x - i.x) / (i.next.y - i.y);
                            if (a <= n && a > s && (s = a, r = i.x < i.next.x ? i : i.next, a === n)) return r
                        }
                        i = i.next
                    } while (i !== e);
                    if (!r) return null;
                    var h, u = r,
                        c = r.x,
                        l = r.y,
                        d = Infinity;
                    i = r;
                    do {
                        n >= i.x && i.x >= c && n !== i.x && p(o < l ? n : s, o, c, l, o < l ? s : n, o, i.x, i.y) && (h = Math.abs(o - i.y) / (n - i.x), T(i, t) && (h < d || h === d && (i.x > r.x || i.x === r.x && f(r, i))) && (r = i, d = h)), i = i.next
                    } while (i !== u);
                    return r
                }(t, e);
                if (!r) return e;
                var n = x(r, t);
                return i(n, n.next), i(r, r.next)
            }

            function f(t, e) {
                return v(t.prev, t, e.prev) < 0 && v(e.next, t, t.next) < 0
            }

            function l(t, e, r, i, n) {
                return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = (t - r) * n | 0) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = (e - i) * n | 0) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1
            }

            function d(t) {
                var e = t,
                    r = t;
                do {
                    (e.x < r.x || e.x === r.x && e.y < r.y) && (r = e), e = e.next
                } while (e !== t);
                return r
            }

            function p(t, e, r, i, n, o, s, a) {
                return (n - s) * (e - a) >= (t - s) * (o - a) && (t - s) * (i - a) >= (r - s) * (e - a) && (r - s) * (o - a) >= (n - s) * (i - a)
            }

            function _(t, e) {
                return t.next.i !== e.i && t.prev.i !== e.i && ! function(t, e) {
                    var r = t;
                    do {
                        if (r.i !== t.i && r.next.i !== t.i && r.i !== e.i && r.next.i !== e.i && y(r, r.next, t, e)) return !0;
                        r = r.next
                    } while (r !== t);
                    return !1
                }(t, e) && (T(t, e) && T(e, t) && function(t, e) {
                    var r = t,
                        i = !1,
                        n = (t.x + e.x) / 2,
                        o = (t.y + e.y) / 2;
                    do {
                        r.y > o != r.next.y > o && r.next.y !== r.y && n < (r.next.x - r.x) * (o - r.y) / (r.next.y - r.y) + r.x && (i = !i), r = r.next
                    } while (r !== t);
                    return i
                }(t, e) && (v(t.prev, t, e.prev) || v(t, e.prev, e)) || m(t, e) && v(t.prev, t, t.next) > 0 && v(e.prev, e, e.next) > 0)
            }

            function v(t, e, r) {
                return (e.y - t.y) * (r.x - e.x) - (e.x - t.x) * (r.y - e.y)
            }

            function m(t, e) {
                return t.x === e.x && t.y === e.y
            }

            function y(t, e, r, i) {
                var n = E(v(t, e, r)),
                    o = E(v(t, e, i)),
                    s = E(v(r, i, t)),
                    a = E(v(r, i, e));
                return n !== o && s !== a || !(0 !== n || !g(t, r, e)) || !(0 !== o || !g(t, i, e)) || !(0 !== s || !g(r, t, i)) || !(0 !== a || !g(r, e, i))
            }

            function g(t, e, r) {
                return e.x <= Math.max(t.x, r.x) && e.x >= Math.min(t.x, r.x) && e.y <= Math.max(t.y, r.y) && e.y >= Math.min(t.y, r.y)
            }

            function E(t) {
                return t > 0 ? 1 : t < 0 ? -1 : 0
            }

            function T(t, e) {
                return v(t.prev, t, t.next) < 0 ? v(t, e, t.next) >= 0 && v(t, t.prev, e) >= 0 : v(t, e, t.prev) < 0 || v(t, t.next, e) < 0
            }

            function x(t, e) {
                var r = new R(t.i, t.x, t.y),
                    i = new R(e.i, e.x, e.y),
                    n = t.next,
                    o = e.prev;
                return t.next = e, e.prev = t, r.next = n, n.prev = r, i.next = r, r.prev = i, o.next = i, i.prev = o, i
            }

            function b(t, e, r, i) {
                var n = new R(t, e, r);
                return i ? (n.next = i.next, n.prev = i, i.next.prev = n, i.next = n) : (n.prev = n, n.next = n), n
            }

            function A(t) {
                t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ)
            }

            function R(t, e, r) {
                this.i = t, this.x = e, this.y = r, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = !1
            }

            function I(t, e, r, i) {
                for (var n = 0, o = e, s = r - i; o < r; o += i) n += (t[s] - t[o]) * (t[o + 1] + t[s + 1]), s = o;
                return n
            }
            t.exports = e, t.exports.default = e, e.deviation = function(t, e, r, i) {
                var n = e && e.length,
                    o = n ? e[0] * r : t.length,
                    s = Math.abs(I(t, 0, o, r));
                if (n)
                    for (var a = 0, h = e.length; a < h; a++) {
                        var u = e[a] * r,
                            c = a < h - 1 ? e[a + 1] * r : t.length;
                        s -= Math.abs(I(t, u, c, r))
                    }
                var f = 0;
                for (a = 0; a < i.length; a += 3) {
                    var l = i[a] * r,
                        d = i[a + 1] * r,
                        p = i[a + 2] * r;
                    f += Math.abs((t[l] - t[p]) * (t[d + 1] - t[l + 1]) - (t[l] - t[d]) * (t[p + 1] - t[l + 1]))
                }
                return 0 === s && 0 === f ? 0 : Math.abs((f - s) / s)
            }, e.flatten = function(t) {
                for (var e = t[0][0].length, r = {
                        vertices: [],
                        holes: [],
                        dimensions: e
                    }, i = 0, n = 0; n < t.length; n++) {
                    for (var o = 0; o < t[n].length; o++)
                        for (var s = 0; s < e; s++) r.vertices.push(t[n][o][s]);
                    n > 0 && (i += t[n - 1].length, r.holes.push(i))
                }
                return r
            }
        },
        6729: function(t) {
            "use strict";
            var e = Object.prototype.hasOwnProperty,
                r = "~";

            function i() {}

            function n(t, e, r) {
                this.fn = t, this.context = e, this.once = r || !1
            }

            function o(t, e, i, o, s) {
                if ("function" != typeof i) throw new TypeError("The listener must be a function");
                var a = new n(i, o || t, s),
                    h = r ? r + e : e;
                return t._events[h] ? t._events[h].fn ? t._events[h] = [t._events[h], a] : t._events[h].push(a) : (t._events[h] = a, t._eventsCount++), t
            }

            function s(t, e) {
                0 == --t._eventsCount ? t._events = new i : delete t._events[e]
            }

            function a() {
                this._events = new i, this._eventsCount = 0
            }
            Object.create && (i.prototype = Object.create(null), (new i).__proto__ || (r = !1)), a.prototype.eventNames = function() {
                var t, i, n = [];
                if (0 === this._eventsCount) return n;
                for (i in t = this._events) e.call(t, i) && n.push(r ? i.slice(1) : i);
                return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(t)) : n
            }, a.prototype.listeners = function(t) {
                var e = r ? r + t : t,
                    i = this._events[e];
                if (!i) return [];
                if (i.fn) return [i.fn];
                for (var n = 0, o = i.length, s = new Array(o); n < o; n++) s[n] = i[n].fn;
                return s
            }, a.prototype.listenerCount = function(t) {
                var e = r ? r + t : t,
                    i = this._events[e];
                return i ? i.fn ? 1 : i.length : 0
            }, a.prototype.emit = function(t, e, i, n, o, s) {
                var a = r ? r + t : t;
                if (!this._events[a]) return !1;
                var h, u, c = this._events[a],
                    f = arguments.length;
                if (c.fn) {
                    switch (c.once && this.removeListener(t, c.fn, void 0, !0), f) {
                        case 1:
                            return c.fn.call(c.context), !0;
                        case 2:
                            return c.fn.call(c.context, e), !0;
                        case 3:
                            return c.fn.call(c.context, e, i), !0;
                        case 4:
                            return c.fn.call(c.context, e, i, n), !0;
                        case 5:
                            return c.fn.call(c.context, e, i, n, o), !0;
                        case 6:
                            return c.fn.call(c.context, e, i, n, o, s), !0
                    }
                    for (u = 1, h = new Array(f - 1); u < f; u++) h[u - 1] = arguments[u];
                    c.fn.apply(c.context, h)
                } else {
                    var l, d = c.length;
                    for (u = 0; u < d; u++) switch (c[u].once && this.removeListener(t, c[u].fn, void 0, !0), f) {
                        case 1:
                            c[u].fn.call(c[u].context);
                            break;
                        case 2:
                            c[u].fn.call(c[u].context, e);
                            break;
                        case 3:
                            c[u].fn.call(c[u].context, e, i);
                            break;
                        case 4:
                            c[u].fn.call(c[u].context, e, i, n);
                            break;
                        default:
                            if (!h)
                                for (l = 1, h = new Array(f - 1); l < f; l++) h[l - 1] = arguments[l];
                            c[u].fn.apply(c[u].context, h)
                    }
                }
                return !0
            }, a.prototype.on = function(t, e, r) {
                return o(this, t, e, r, !1)
            }, a.prototype.once = function(t, e, r) {
                return o(this, t, e, r, !0)
            }, a.prototype.removeListener = function(t, e, i, n) {
                var o = r ? r + t : t;
                if (!this._events[o]) return this;
                if (!e) return s(this, o), this;
                var a = this._events[o];
                if (a.fn) a.fn !== e || n && !a.once || i && a.context !== i || s(this, o);
                else {
                    for (var h = 0, u = [], c = a.length; h < c; h++)(a[h].fn !== e || n && !a[h].once || i && a[h].context !== i) && u.push(a[h]);
                    u.length ? this._events[o] = 1 === u.length ? u[0] : u : s(this, o)
                }
                return this
            }, a.prototype.removeAllListeners = function(t) {
                var e;
                return t ? (e = r ? r + t : t, this._events[e] && s(this, e)) : (this._events = new i, this._eventsCount = 0), this
            }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = r, a.EventEmitter = a, t.exports = a
        },
        4971: function(t, e, r) {
            var i;
            t = r.nmd(t),
                function(n) {
                    e && e.nodeType, t && t.nodeType;
                    var o = "object" == typeof r.g && r.g;
                    o.global !== o && o.window !== o && o.self;
                    var s, a = 2147483647,
                        h = 36,
                        u = /^xn--/,
                        c = /[^\x20-\x7E]/,
                        f = /[\x2E\u3002\uFF0E\uFF61]/g,
                        l = {
                            overflow: "Overflow: input needs wider integers to process",
                            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                            "invalid-input": "Invalid input"
                        },
                        d = Math.floor,
                        p = String.fromCharCode;

                    function _(t) {
                        throw RangeError(l[t])
                    }

                    function v(t, e) {
                        for (var r = t.length, i = []; r--;) i[r] = e(t[r]);
                        return i
                    }

                    function m(t, e) {
                        var r = t.split("@"),
                            i = "";
                        return r.length > 1 && (i = r[0] + "@", t = r[1]), i + v((t = t.replace(f, ".")).split("."), e).join(".")
                    }

                    function y(t) {
                        for (var e, r, i = [], n = 0, o = t.length; n < o;)(e = t.charCodeAt(n++)) >= 55296 && e <= 56319 && n < o ? 56320 == (64512 & (r = t.charCodeAt(n++))) ? i.push(((1023 & e) << 10) + (1023 & r) + 65536) : (i.push(e), n--) : i.push(e);
                        return i
                    }

                    function g(t) {
                        return v(t, (function(t) {
                            var e = "";
                            return t > 65535 && (e += p((t -= 65536) >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e + p(t)
                        })).join("")
                    }

                    function E(t, e) {
                        return t + 22 + 75 * (t < 26) - ((0 != e) << 5)
                    }

                    function T(t, e, r) {
                        var i = 0;
                        for (t = r ? d(t / 700) : t >> 1, t += d(t / e); t > 455; i += h) t = d(t / 35);
                        return d(i + 36 * t / (t + 38))
                    }

                    function x(t) {
                        var e, r, i, n, o, s, u, c, f, l, p, v = [],
                            m = t.length,
                            y = 0,
                            E = 128,
                            x = 72;
                        for ((r = t.lastIndexOf("-")) < 0 && (r = 0), i = 0; i < r; ++i) t.charCodeAt(i) >= 128 && _("not-basic"), v.push(t.charCodeAt(i));
                        for (n = r > 0 ? r + 1 : 0; n < m;) {
                            for (o = y, s = 1, u = h; n >= m && _("invalid-input"), ((c = (p = t.charCodeAt(n++)) - 48 < 10 ? p - 22 : p - 65 < 26 ? p - 65 : p - 97 < 26 ? p - 97 : h) >= h || c > d((a - y) / s)) && _("overflow"), y += c * s, !(c < (f = u <= x ? 1 : u >= x + 26 ? 26 : u - x)); u += h) s > d(a / (l = h - f)) && _("overflow"), s *= l;
                            x = T(y - o, e = v.length + 1, 0 == o), d(y / e) > a - E && _("overflow"), E += d(y / e), y %= e, v.splice(y++, 0, E)
                        }
                        return g(v)
                    }

                    function b(t) {
                        var e, r, i, n, o, s, u, c, f, l, v, m, g, x, b, A = [];
                        for (m = (t = y(t)).length, e = 128, r = 0, o = 72, s = 0; s < m; ++s)(v = t[s]) < 128 && A.push(p(v));
                        for (i = n = A.length, n && A.push("-"); i < m;) {
                            for (u = a, s = 0; s < m; ++s)(v = t[s]) >= e && v < u && (u = v);
                            for (u - e > d((a - r) / (g = i + 1)) && _("overflow"), r += (u - e) * g, e = u, s = 0; s < m; ++s)
                                if ((v = t[s]) < e && ++r > a && _("overflow"), v == e) {
                                    for (c = r, f = h; !(c < (l = f <= o ? 1 : f >= o + 26 ? 26 : f - o)); f += h) b = c - l, x = h - l, A.push(p(E(l + b % x, 0))), c = d(b / x);
                                    A.push(p(E(c, 0))), o = T(r, g, i == n), r = 0, ++i
                                }++r, ++e
                        }
                        return A.join("")
                    }
                    s = {
                        version: "1.3.2",
                        ucs2: {
                            decode: y,
                            encode: g
                        },
                        decode: x,
                        encode: b,
                        toASCII: function(t) {
                            return m(t, (function(t) {
                                return c.test(t) ? "xn--" + b(t) : t
                            }))
                        },
                        toUnicode: function(t) {
                            return m(t, (function(t) {
                                return u.test(t) ? x(t.slice(4).toLowerCase()) : t
                            }))
                        }
                    }, void 0 === (i = function() {
                        return s
                    }.call(e, r, e, t)) || (t.exports = i)
                }()
        },
        2587: function(t) {
            "use strict";

            function e(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }
            t.exports = function(t, r, i, n) {
                r = r || "&", i = i || "=";
                var o = {};
                if ("string" != typeof t || 0 === t.length) return o;
                var s = /\+/g;
                t = t.split(r);
                var a = 1e3;
                n && "number" == typeof n.maxKeys && (a = n.maxKeys);
                var h = t.length;
                a > 0 && h > a && (h = a);
                for (var u = 0; u < h; ++u) {
                    var c, f, l, d, p = t[u].replace(s, "%20"),
                        _ = p.indexOf(i);
                    _ >= 0 ? (c = p.substr(0, _), f = p.substr(_ + 1)) : (c = p, f = ""), l = decodeURIComponent(c), d = decodeURIComponent(f), e(o, l) ? Array.isArray(o[l]) ? o[l].push(d) : o[l] = [o[l], d] : o[l] = d
                }
                return o
            }
        },
        2361: function(t) {
            "use strict";
            var e = function(t) {
                switch (typeof t) {
                    case "string":
                        return t;
                    case "boolean":
                        return t ? "true" : "false";
                    case "number":
                        return isFinite(t) ? t : "";
                    default:
                        return ""
                }
            };
            t.exports = function(t, r, i, n) {
                return r = r || "&", i = i || "=", null === t && (t = void 0), "object" == typeof t ? Object.keys(t).map((function(n) {
                    var o = encodeURIComponent(e(n)) + i;
                    return Array.isArray(t[n]) ? t[n].map((function(t) {
                        return o + encodeURIComponent(e(t))
                    })).join(r) : o + encodeURIComponent(e(t[n]))
                })).join(r) : n ? encodeURIComponent(e(n)) + i + encodeURIComponent(e(t)) : ""
            }
        },
        7673: function(t, e, r) {
            "use strict";
            e.decode = e.parse = r(2587), e.encode = e.stringify = r(2361)
        },
        8575: function(t, e, r) {
            "use strict";
            var i = r(4971),
                n = r(2502);

            function o() {
                this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
            }
            e.Qc = g, e.DB = function(t, e) {
                return g(t, !1, !0).resolve(e)
            }, e.WU = function(t) {
                return n.isString(t) && (t = g(t)), t instanceof o ? t.format() : o.prototype.format.call(t)
            };
            var s = /^([a-z0-9.+-]+:)/i,
                a = /:[0-9]*$/,
                h = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
                u = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
                c = ["'"].concat(u),
                f = ["%", "/", "?", ";", "#"].concat(c),
                l = ["/", "?", "#"],
                d = /^[+a-z0-9A-Z_-]{0,63}$/,
                p = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
                _ = {
                    javascript: !0,
                    "javascript:": !0
                },
                v = {
                    javascript: !0,
                    "javascript:": !0
                },
                m = {
                    http: !0,
                    https: !0,
                    ftp: !0,
                    gopher: !0,
                    file: !0,
                    "http:": !0,
                    "https:": !0,
                    "ftp:": !0,
                    "gopher:": !0,
                    "file:": !0
                },
                y = r(7673);

            function g(t, e, r) {
                if (t && n.isObject(t) && t instanceof o) return t;
                var i = new o;
                return i.parse(t, e, r), i
            }
            o.prototype.parse = function(t, e, r) {
                if (!n.isString(t)) throw new TypeError("Parameter 'url' must be a string, not " + typeof t);
                var o = t.indexOf("?"),
                    a = -1 !== o && o < t.indexOf("#") ? "?" : "#",
                    u = t.split(a);
                u[0] = u[0].replace(/\\/g, "/");
                var g = t = u.join(a);
                if (g = g.trim(), !r && 1 === t.split("#").length) {
                    var E = h.exec(g);
                    if (E) return this.path = g, this.href = g, this.pathname = E[1], E[2] ? (this.search = E[2], this.query = e ? y.parse(this.search.substr(1)) : this.search.substr(1)) : e && (this.search = "", this.query = {}), this
                }
                var T = s.exec(g);
                if (T) {
                    var x = (T = T[0]).toLowerCase();
                    this.protocol = x, g = g.substr(T.length)
                }
                if (r || T || g.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                    var b = "//" === g.substr(0, 2);
                    !b || T && v[T] || (g = g.substr(2), this.slashes = !0)
                }
                if (!v[T] && (b || T && !m[T])) {
                    for (var A, R, I = -1, S = 0; S < l.length; S++) - 1 !== (O = g.indexOf(l[S])) && (-1 === I || O < I) && (I = O);
                    for (-1 !== (R = -1 === I ? g.lastIndexOf("@") : g.lastIndexOf("@", I)) && (A = g.slice(0, R), g = g.slice(R + 1), this.auth = decodeURIComponent(A)), I = -1, S = 0; S < f.length; S++) {
                        var O; - 1 !== (O = g.indexOf(f[S])) && (-1 === I || O < I) && (I = O)
                    } - 1 === I && (I = g.length), this.host = g.slice(0, I), g = g.slice(I), this.parseHost(), this.hostname = this.hostname || "";
                    var w = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                    if (!w)
                        for (var N = this.hostname.split(/\./), P = (S = 0, N.length); S < P; S++) {
                            var C = N[S];
                            if (C && !C.match(d)) {
                                for (var L = "", M = 0, U = C.length; M < U; M++) C.charCodeAt(M) > 127 ? L += "x" : L += C[M];
                                if (!L.match(d)) {
                                    var F = N.slice(0, S),
                                        D = N.slice(S + 1),
                                        B = C.match(p);
                                    B && (F.push(B[1]), D.unshift(B[2])), D.length && (g = "/" + D.join(".") + g), this.hostname = F.join(".");
                                    break
                                }
                            }
                        }
                    this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), w || (this.hostname = i.toASCII(this.hostname));
                    var G = this.port ? ":" + this.port : "",
                        k = this.hostname || "";
                    this.host = k + G, this.href += this.host, w && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== g[0] && (g = "/" + g))
                }
                if (!_[x])
                    for (S = 0, P = c.length; S < P; S++) {
                        var X = c[S];
                        if (-1 !== g.indexOf(X)) {
                            var H = encodeURIComponent(X);
                            H === X && (H = escape(X)), g = g.split(X).join(H)
                        }
                    }
                var j = g.indexOf("#"); - 1 !== j && (this.hash = g.substr(j), g = g.slice(0, j));
                var V = g.indexOf("?");
                if (-1 !== V ? (this.search = g.substr(V), this.query = g.substr(V + 1), e && (this.query = y.parse(this.query)), g = g.slice(0, V)) : e && (this.search = "", this.query = {}), g && (this.pathname = g), m[x] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
                    G = this.pathname || "";
                    var Y = this.search || "";
                    this.path = G + Y
                }
                return this.href = this.format(), this
            }, o.prototype.format = function() {
                var t = this.auth || "";
                t && (t = (t = encodeURIComponent(t)).replace(/%3A/i, ":"), t += "@");
                var e = this.protocol || "",
                    r = this.pathname || "",
                    i = this.hash || "",
                    o = !1,
                    s = "";
                this.host ? o = t + this.host : this.hostname && (o = t + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (o += ":" + this.port)), this.query && n.isObject(this.query) && Object.keys(this.query).length && (s = y.stringify(this.query));
                var a = this.search || s && "?" + s || "";
                return e && ":" !== e.substr(-1) && (e += ":"), this.slashes || (!e || m[e]) && !1 !== o ? (o = "//" + (o || ""), r && "/" !== r.charAt(0) && (r = "/" + r)) : o || (o = ""), i && "#" !== i.charAt(0) && (i = "#" + i), a && "?" !== a.charAt(0) && (a = "?" + a), e + o + (r = r.replace(/[?#]/g, (function(t) {
                    return encodeURIComponent(t)
                }))) + (a = a.replace("#", "%23")) + i
            }, o.prototype.resolve = function(t) {
                return this.resolveObject(g(t, !1, !0)).format()
            }, o.prototype.resolveObject = function(t) {
                if (n.isString(t)) {
                    var e = new o;
                    e.parse(t, !1, !0), t = e
                }
                for (var r = new o, i = Object.keys(this), s = 0; s < i.length; s++) {
                    var a = i[s];
                    r[a] = this[a]
                }
                if (r.hash = t.hash, "" === t.href) return r.href = r.format(), r;
                if (t.slashes && !t.protocol) {
                    for (var h = Object.keys(t), u = 0; u < h.length; u++) {
                        var c = h[u];
                        "protocol" !== c && (r[c] = t[c])
                    }
                    return m[r.protocol] && r.hostname && !r.pathname && (r.path = r.pathname = "/"), r.href = r.format(), r
                }
                if (t.protocol && t.protocol !== r.protocol) {
                    if (!m[t.protocol]) {
                        for (var f = Object.keys(t), l = 0; l < f.length; l++) {
                            var d = f[l];
                            r[d] = t[d]
                        }
                        return r.href = r.format(), r
                    }
                    if (r.protocol = t.protocol, t.host || v[t.protocol]) r.pathname = t.pathname;
                    else {
                        for (var p = (t.pathname || "").split("/"); p.length && !(t.host = p.shift()););
                        t.host || (t.host = ""), t.hostname || (t.hostname = ""), "" !== p[0] && p.unshift(""), p.length < 2 && p.unshift(""), r.pathname = p.join("/")
                    }
                    if (r.search = t.search, r.query = t.query, r.host = t.host || "", r.auth = t.auth, r.hostname = t.hostname || t.host, r.port = t.port, r.pathname || r.search) {
                        var _ = r.pathname || "",
                            y = r.search || "";
                        r.path = _ + y
                    }
                    return r.slashes = r.slashes || t.slashes, r.href = r.format(), r
                }
                var g = r.pathname && "/" === r.pathname.charAt(0),
                    E = t.host || t.pathname && "/" === t.pathname.charAt(0),
                    T = E || g || r.host && t.pathname,
                    x = T,
                    b = r.pathname && r.pathname.split("/") || [],
                    A = (p = t.pathname && t.pathname.split("/") || [], r.protocol && !m[r.protocol]);
                if (A && (r.hostname = "", r.port = null, r.host && ("" === b[0] ? b[0] = r.host : b.unshift(r.host)), r.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && ("" === p[0] ? p[0] = t.host : p.unshift(t.host)), t.host = null), T = T && ("" === p[0] || "" === b[0])), E) r.host = t.host || "" === t.host ? t.host : r.host, r.hostname = t.hostname || "" === t.hostname ? t.hostname : r.hostname, r.search = t.search, r.query = t.query, b = p;
                else if (p.length) b || (b = []), b.pop(), b = b.concat(p), r.search = t.search, r.query = t.query;
                else if (!n.isNullOrUndefined(t.search)) return A && (r.hostname = r.host = b.shift(), (w = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = w.shift(), r.host = r.hostname = w.shift())), r.search = t.search, r.query = t.query, n.isNull(r.pathname) && n.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.href = r.format(), r;
                if (!b.length) return r.pathname = null, r.search ? r.path = "/" + r.search : r.path = null, r.href = r.format(), r;
                for (var R = b.slice(-1)[0], I = (r.host || t.host || b.length > 1) && ("." === R || ".." === R) || "" === R, S = 0, O = b.length; O >= 0; O--) "." === (R = b[O]) ? b.splice(O, 1) : ".." === R ? (b.splice(O, 1), S++) : S && (b.splice(O, 1), S--);
                if (!T && !x)
                    for (; S--; S) b.unshift("..");
                !T || "" === b[0] || b[0] && "/" === b[0].charAt(0) || b.unshift(""), I && "/" !== b.join("/").substr(-1) && b.push("");
                var w, N = "" === b[0] || b[0] && "/" === b[0].charAt(0);
                return A && (r.hostname = r.host = N ? "" : b.length ? b.shift() : "", (w = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = w.shift(), r.host = r.hostname = w.shift())), (T = T || r.host && b.length) && !N && b.unshift(""), b.length ? r.pathname = b.join("/") : (r.pathname = null, r.path = null), n.isNull(r.pathname) && n.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.auth = t.auth || r.auth, r.slashes = r.slashes || t.slashes, r.href = r.format(), r
            }, o.prototype.parseHost = function() {
                var t = this.host,
                    e = a.exec(t);
                e && (":" !== (e = e[0]) && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t)
            }
        },
        2502: function(t) {
            "use strict";
            t.exports = {
                isString: function(t) {
                    return "string" == typeof t
                },
                isObject: function(t) {
                    return "object" == typeof t && null !== t
                },
                isNull: function(t) {
                    return null === t
                },
                isNullOrUndefined: function(t) {
                    return null == t
                }
            }
        },
        5933: function(t, e, r) {
            var i;
            ! function() {
                function n(t, e, r) {
                    return t.call.apply(t.bind, arguments)
                }

                function o(t, e, r) {
                    if (!t) throw Error();
                    if (2 < arguments.length) {
                        var i = Array.prototype.slice.call(arguments, 2);
                        return function() {
                            var r = Array.prototype.slice.call(arguments);
                            return Array.prototype.unshift.apply(r, i), t.apply(e, r)
                        }
                    }
                    return function() {
                        return t.apply(e, arguments)
                    }
                }

                function s(t, e, r) {
                    return (s = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? n : o).apply(null, arguments)
                }
                var a = Date.now || function() {
                    return +new Date
                };

                function h(t, e) {
                    this.a = t, this.o = e || t, this.c = this.o.document
                }
                var u = !!window.FontFace;

                function c(t, e, r, i) {
                    if (e = t.c.createElement(e), r)
                        for (var n in r) r.hasOwnProperty(n) && ("style" == n ? e.style.cssText = r[n] : e.setAttribute(n, r[n]));
                    return i && e.appendChild(t.c.createTextNode(i)), e
                }

                function f(t, e, r) {
                    (t = t.c.getElementsByTagName(e)[0]) || (t = document.documentElement), t.insertBefore(r, t.lastChild)
                }

                function l(t) {
                    t.parentNode && t.parentNode.removeChild(t)
                }

                function d(t, e, r) {
                    e = e || [], r = r || [];
                    for (var i = t.className.split(/\s+/), n = 0; n < e.length; n += 1) {
                        for (var o = !1, s = 0; s < i.length; s += 1)
                            if (e[n] === i[s]) {
                                o = !0;
                                break
                            }
                        o || i.push(e[n])
                    }
                    for (e = [], n = 0; n < i.length; n += 1) {
                        for (o = !1, s = 0; s < r.length; s += 1)
                            if (i[n] === r[s]) {
                                o = !0;
                                break
                            }
                        o || e.push(i[n])
                    }
                    t.className = e.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
                }

                function p(t, e) {
                    for (var r = t.className.split(/\s+/), i = 0, n = r.length; i < n; i++)
                        if (r[i] == e) return !0;
                    return !1
                }

                function _(t, e, r) {
                    function i() {
                        a && n && o && (a(s), a = null)
                    }
                    e = c(t, "link", {
                        rel: "stylesheet",
                        href: e,
                        media: "all"
                    });
                    var n = !1,
                        o = !0,
                        s = null,
                        a = r || null;
                    u ? (e.onload = function() {
                        n = !0, i()
                    }, e.onerror = function() {
                        n = !0, s = Error("Stylesheet failed to load"), i()
                    }) : setTimeout((function() {
                        n = !0, i()
                    }), 0), f(t, "head", e)
                }

                function v(t, e, r, i) {
                    var n = t.c.getElementsByTagName("head")[0];
                    if (n) {
                        var o = c(t, "script", {
                                src: e
                            }),
                            s = !1;
                        return o.onload = o.onreadystatechange = function() {
                            s || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (s = !0, r && r(null), o.onload = o.onreadystatechange = null, "HEAD" == o.parentNode.tagName && n.removeChild(o))
                        }, n.appendChild(o), setTimeout((function() {
                            s || (s = !0, r && r(Error("Script load timeout")))
                        }), i || 5e3), o
                    }
                    return null
                }

                function m() {
                    this.a = 0, this.c = null
                }

                function y(t) {
                    return t.a++,
                        function() {
                            t.a--, E(t)
                        }
                }

                function g(t, e) {
                    t.c = e, E(t)
                }

                function E(t) {
                    0 == t.a && t.c && (t.c(), t.c = null)
                }

                function T(t) {
                    this.a = t || "-"
                }

                function x(t, e) {
                    this.c = t, this.f = 4, this.a = "n";
                    var r = (e || "n4").match(/^([nio])([1-9])$/i);
                    r && (this.a = r[1], this.f = parseInt(r[2], 10))
                }

                function b(t) {
                    var e = [];
                    t = t.split(/,\s*/);
                    for (var r = 0; r < t.length; r++) {
                        var i = t[r].replace(/['"]/g, ""); - 1 != i.indexOf(" ") || /^\d/.test(i) ? e.push("'" + i + "'") : e.push(i)
                    }
                    return e.join(",")
                }

                function A(t) {
                    return t.a + t.f
                }

                function R(t) {
                    var e = "normal";
                    return "o" === t.a ? e = "oblique" : "i" === t.a && (e = "italic"), e
                }

                function I(t) {
                    var e = 4,
                        r = "n",
                        i = null;
                    return t && ((i = t.match(/(normal|oblique|italic)/i)) && i[1] && (r = i[1].substr(0, 1).toLowerCase()), (i = t.match(/([1-9]00|normal|bold)/i)) && i[1] && (/bold/i.test(i[1]) ? e = 7 : /[1-9]00/.test(i[1]) && (e = parseInt(i[1].substr(0, 1), 10)))), r + e
                }

                function S(t, e) {
                    this.c = t, this.f = t.o.document.documentElement, this.h = e, this.a = new T("-"), this.j = !1 !== e.events, this.g = !1 !== e.classes
                }

                function O(t) {
                    if (t.g) {
                        var e = p(t.f, t.a.c("wf", "active")),
                            r = [],
                            i = [t.a.c("wf", "loading")];
                        e || r.push(t.a.c("wf", "inactive")), d(t.f, r, i)
                    }
                    w(t, "inactive")
                }

                function w(t, e, r) {
                    t.j && t.h[e] && (r ? t.h[e](r.c, A(r)) : t.h[e]())
                }

                function N() {
                    this.c = {}
                }

                function P(t, e) {
                    this.c = t, this.f = e, this.a = c(this.c, "span", {
                        "aria-hidden": "true"
                    }, this.f)
                }

                function C(t) {
                    f(t.c, "body", t.a)
                }

                function L(t) {
                    return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + b(t.c) + ";font-style:" + R(t) + ";font-weight:" + t.f + "00;"
                }

                function M(t, e, r, i, n, o) {
                    this.g = t, this.j = e, this.a = i, this.c = r, this.f = n || 3e3, this.h = o || void 0
                }

                function U(t, e, r, i, n, o, s) {
                    this.v = t, this.B = e, this.c = r, this.a = i, this.s = s || "BESbswy", this.f = {}, this.w = n || 3e3, this.u = o || null, this.m = this.j = this.h = this.g = null, this.g = new P(this.c, this.s), this.h = new P(this.c, this.s), this.j = new P(this.c, this.s), this.m = new P(this.c, this.s), t = L(t = new x(this.a.c + ",serif", A(this.a))), this.g.a.style.cssText = t, t = L(t = new x(this.a.c + ",sans-serif", A(this.a))), this.h.a.style.cssText = t, t = L(t = new x("serif", A(this.a))), this.j.a.style.cssText = t, t = L(t = new x("sans-serif", A(this.a))), this.m.a.style.cssText = t, C(this.g), C(this.h), C(this.j), C(this.m)
                }
                T.prototype.c = function(t) {
                    for (var e = [], r = 0; r < arguments.length; r++) e.push(arguments[r].replace(/[\W_]+/g, "").toLowerCase());
                    return e.join(this.a)
                }, M.prototype.start = function() {
                    var t = this.c.o.document,
                        e = this,
                        r = a(),
                        i = new Promise((function(i, n) {
                            ! function o() {
                                a() - r >= e.f ? n() : t.fonts.load(function(t) {
                                    return R(t) + " " + t.f + "00 300px " + b(t.c)
                                }(e.a), e.h).then((function(t) {
                                    1 <= t.length ? i() : setTimeout(o, 25)
                                }), (function() {
                                    n()
                                }))
                            }()
                        })),
                        n = null,
                        o = new Promise((function(t, r) {
                            n = setTimeout(r, e.f)
                        }));
                    Promise.race([o, i]).then((function() {
                        n && (clearTimeout(n), n = null), e.g(e.a)
                    }), (function() {
                        e.j(e.a)
                    }))
                };
                var F = {
                        D: "serif",
                        C: "sans-serif"
                    },
                    D = null;

                function B() {
                    if (null === D) {
                        var t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
                        D = !!t && (536 > parseInt(t[1], 10) || 536 === parseInt(t[1], 10) && 11 >= parseInt(t[2], 10))
                    }
                    return D
                }

                function G(t, e, r) {
                    for (var i in F)
                        if (F.hasOwnProperty(i) && e === t.f[F[i]] && r === t.f[F[i]]) return !0;
                    return !1
                }

                function k(t) {
                    var e, r = t.g.a.offsetWidth,
                        i = t.h.a.offsetWidth;
                    (e = r === t.f.serif && i === t.f["sans-serif"]) || (e = B() && G(t, r, i)), e ? a() - t.A >= t.w ? B() && G(t, r, i) && (null === t.u || t.u.hasOwnProperty(t.a.c)) ? X(t, t.v) : X(t, t.B) : function(t) {
                        setTimeout(s((function() {
                            k(this)
                        }), t), 50)
                    }(t) : X(t, t.v)
                }

                function X(t, e) {
                    setTimeout(s((function() {
                        l(this.g.a), l(this.h.a), l(this.j.a), l(this.m.a), e(this.a)
                    }), t), 0)
                }

                function H(t, e, r) {
                    this.c = t, this.a = e, this.f = 0, this.m = this.j = !1, this.s = r
                }
                U.prototype.start = function() {
                    this.f.serif = this.j.a.offsetWidth, this.f["sans-serif"] = this.m.a.offsetWidth, this.A = a(), k(this)
                };
                var j = null;

                function V(t) {
                    0 == --t.f && t.j && (t.m ? ((t = t.a).g && d(t.f, [t.a.c("wf", "active")], [t.a.c("wf", "loading"), t.a.c("wf", "inactive")]), w(t, "active")) : O(t.a))
                }

                function Y(t) {
                    this.j = t, this.a = new N, this.h = 0, this.f = this.g = !0
                }

                function z(t, e, r, i, n) {
                    var o = 0 == --t.h;
                    (t.f || t.g) && setTimeout((function() {
                        var t = n || null,
                            a = i || {};
                        if (0 === r.length && o) O(e.a);
                        else {
                            e.f += r.length, o && (e.j = o);
                            var h, u = [];
                            for (h = 0; h < r.length; h++) {
                                var c = r[h],
                                    f = a[c.c],
                                    l = e.a,
                                    p = c;
                                if (l.g && d(l.f, [l.a.c("wf", p.c, A(p).toString(), "loading")]), w(l, "fontloading", p), l = null, null === j)
                                    if (window.FontFace) {
                                        p = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);
                                        var _ = /OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent) && /Apple/.exec(window.navigator.vendor);
                                        j = p ? 42 < parseInt(p[1], 10) : !_
                                    } else j = !1;
                                l = j ? new M(s(e.g, e), s(e.h, e), e.c, c, e.s, f) : new U(s(e.g, e), s(e.h, e), e.c, c, e.s, t, f), u.push(l)
                            }
                            for (h = 0; h < u.length; h++) u[h].start()
                        }
                    }), 0)
                }

                function W(t, e) {
                    this.c = t, this.a = e
                }

                function q(t, e) {
                    this.c = t, this.a = e
                }

                function K(t, e) {
                    this.c = t || $, this.a = [], this.f = [], this.g = e || ""
                }
                H.prototype.g = function(t) {
                    var e = this.a;
                    e.g && d(e.f, [e.a.c("wf", t.c, A(t).toString(), "active")], [e.a.c("wf", t.c, A(t).toString(), "loading"), e.a.c("wf", t.c, A(t).toString(), "inactive")]), w(e, "fontactive", t), this.m = !0, V(this)
                }, H.prototype.h = function(t) {
                    var e = this.a;
                    if (e.g) {
                        var r = p(e.f, e.a.c("wf", t.c, A(t).toString(), "active")),
                            i = [],
                            n = [e.a.c("wf", t.c, A(t).toString(), "loading")];
                        r || i.push(e.a.c("wf", t.c, A(t).toString(), "inactive")), d(e.f, i, n)
                    }
                    w(e, "fontinactive", t), V(this)
                }, Y.prototype.load = function(t) {
                    this.c = new h(this.j, t.context || this.j), this.g = !1 !== t.events, this.f = !1 !== t.classes,
                        function(t, e, r) {
                            var i = [],
                                n = r.timeout;
                            ! function(t) {
                                t.g && d(t.f, [t.a.c("wf", "loading")]), w(t, "loading")
                            }(e), i = function(t, e, r) {
                                var i, n = [];
                                for (i in e)
                                    if (e.hasOwnProperty(i)) {
                                        var o = t.c[i];
                                        o && n.push(o(e[i], r))
                                    }
                                return n
                            }(t.a, r, t.c);
                            var o = new H(t.c, e, n);
                            for (t.h = i.length, e = 0, r = i.length; e < r; e++) i[e].load((function(e, r, i) {
                                z(t, o, e, r, i)
                            }))
                        }(this, new S(this.c, t), t)
                }, W.prototype.load = function(t) {
                    function e() {
                        if (o["__mti_fntLst" + i]) {
                            var r, n = o["__mti_fntLst" + i](),
                                s = [];
                            if (n)
                                for (var a = 0; a < n.length; a++) {
                                    var h = n[a].fontfamily;
                                    null != n[a].fontStyle && null != n[a].fontWeight ? (r = n[a].fontStyle + n[a].fontWeight, s.push(new x(h, r))) : s.push(new x(h))
                                }
                            t(s)
                        } else setTimeout((function() {
                            e()
                        }), 50)
                    }
                    var r = this,
                        i = r.a.projectId,
                        n = r.a.version;
                    if (i) {
                        var o = r.c.o;
                        v(this.c, (r.a.api || "https://fast.fonts.net/jsapi") + "/" + i + ".js" + (n ? "?v=" + n : ""), (function(n) {
                            n ? t([]) : (o["__MonotypeConfiguration__" + i] = function() {
                                return r.a
                            }, e())
                        })).id = "__MonotypeAPIScript__" + i
                    } else t([])
                }, q.prototype.load = function(t) {
                    var e, r, i = this.a.urls || [],
                        n = this.a.families || [],
                        o = this.a.testStrings || {},
                        s = new m;
                    for (e = 0, r = i.length; e < r; e++) _(this.c, i[e], y(s));
                    var a = [];
                    for (e = 0, r = n.length; e < r; e++)
                        if ((i = n[e].split(":"))[1])
                            for (var h = i[1].split(","), u = 0; u < h.length; u += 1) a.push(new x(i[0], h[u]));
                        else a.push(new x(i[0]));
                    g(s, (function() {
                        t(a, o)
                    }))
                };
                var $ = "https://fonts.googleapis.com/css";

                function Z(t) {
                    this.f = t, this.a = [], this.c = {}
                }
                var Q = {
                        latin: "BESbswy",
                        "latin-ext": "çöüğş",
                        cyrillic: "йяЖ",
                        greek: "αβΣ",
                        khmer: "កខគ",
                        Hanuman: "កខគ"
                    },
                    J = {
                        thin: "1",
                        extralight: "2",
                        "extra-light": "2",
                        ultralight: "2",
                        "ultra-light": "2",
                        light: "3",
                        regular: "4",
                        book: "4",
                        medium: "5",
                        "semi-bold": "6",
                        semibold: "6",
                        "demi-bold": "6",
                        demibold: "6",
                        bold: "7",
                        "extra-bold": "8",
                        extrabold: "8",
                        "ultra-bold": "8",
                        ultrabold: "8",
                        black: "9",
                        heavy: "9",
                        l: "3",
                        r: "4",
                        b: "7"
                    },
                    tt = {
                        i: "i",
                        italic: "i",
                        n: "n",
                        normal: "n"
                    },
                    et = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;

                function rt(t, e) {
                    this.c = t, this.a = e
                }
                var it = {
                    Arimo: !0,
                    Cousine: !0,
                    Tinos: !0
                };

                function nt(t, e) {
                    this.c = t, this.a = e
                }

                function ot(t, e) {
                    this.c = t, this.f = e, this.a = []
                }
                rt.prototype.load = function(t) {
                    var e = new m,
                        r = this.c,
                        i = new K(this.a.api, this.a.text),
                        n = this.a.families;
                    ! function(t, e) {
                        for (var r = e.length, i = 0; i < r; i++) {
                            var n = e[i].split(":");
                            3 == n.length && t.f.push(n.pop());
                            var o = "";
                            2 == n.length && "" != n[1] && (o = ":"), t.a.push(n.join(o))
                        }
                    }(i, n);
                    var o = new Z(n);
                    ! function(t) {
                        for (var e = t.f.length, r = 0; r < e; r++) {
                            var i = t.f[r].split(":"),
                                n = i[0].replace(/\+/g, " "),
                                o = ["n4"];
                            if (2 <= i.length) {
                                var s;
                                if (s = [], a = i[1])
                                    for (var a, h = (a = a.split(",")).length, u = 0; u < h; u++) {
                                        var c;
                                        if ((c = a[u]).match(/^[\w-]+$/))
                                            if (null == (f = et.exec(c.toLowerCase()))) c = "";
                                            else {
                                                if (c = null == (c = f[2]) || "" == c ? "n" : tt[c], null == (f = f[1]) || "" == f) f = "4";
                                                else var f = J[f] || (isNaN(f) ? "4" : f.substr(0, 1));
                                                c = [c, f].join("")
                                            }
                                        else c = "";
                                        c && s.push(c)
                                    }
                                0 < s.length && (o = s), 3 == i.length && (s = [], 0 < (i = (i = i[2]) ? i.split(",") : s).length && (i = Q[i[0]]) && (t.c[n] = i))
                            }
                            for (t.c[n] || (i = Q[n]) && (t.c[n] = i), i = 0; i < o.length; i += 1) t.a.push(new x(n, o[i]))
                        }
                    }(o), _(r, function(t) {
                        if (0 == t.a.length) throw Error("No fonts to load!");
                        if (-1 != t.c.indexOf("kit=")) return t.c;
                        for (var e = t.a.length, r = [], i = 0; i < e; i++) r.push(t.a[i].replace(/ /g, "+"));
                        return e = t.c + "?family=" + r.join("%7C"), 0 < t.f.length && (e += "&subset=" + t.f.join(",")), 0 < t.g.length && (e += "&text=" + encodeURIComponent(t.g)), e
                    }(i), y(e)), g(e, (function() {
                        t(o.a, o.c, it)
                    }))
                }, nt.prototype.load = function(t) {
                    var e = this.a.id,
                        r = this.c.o;
                    e ? v(this.c, (this.a.api || "https://use.typekit.net") + "/" + e + ".js", (function(e) {
                        if (e) t([]);
                        else if (r.Typekit && r.Typekit.config && r.Typekit.config.fn) {
                            e = r.Typekit.config.fn;
                            for (var i = [], n = 0; n < e.length; n += 2)
                                for (var o = e[n], s = e[n + 1], a = 0; a < s.length; a++) i.push(new x(o, s[a]));
                            try {
                                r.Typekit.load({
                                    events: !1,
                                    classes: !1,
                                    async: !0
                                })
                            } catch (t) {}
                            t(i)
                        }
                    }), 2e3) : t([])
                }, ot.prototype.load = function(t) {
                    var e = this.f.id,
                        r = this.c.o,
                        i = this;
                    e ? (r.__webfontfontdeckmodule__ || (r.__webfontfontdeckmodule__ = {}), r.__webfontfontdeckmodule__[e] = function(e, r) {
                        for (var n = 0, o = r.fonts.length; n < o; ++n) {
                            var s = r.fonts[n];
                            i.a.push(new x(s.name, I("font-weight:" + s.weight + ";font-style:" + s.style)))
                        }
                        t(i.a)
                    }, v(this.c, (this.f.api || "https://f.fontdeck.com/s/css/js/") + function(t) {
                        return t.o.location.hostname || t.a.location.hostname
                    }(this.c) + "/" + e + ".js", (function(e) {
                        e && t([])
                    }))) : t([])
                };
                var st = new Y(window);
                st.a.c.custom = function(t, e) {
                    return new q(e, t)
                }, st.a.c.fontdeck = function(t, e) {
                    return new ot(e, t)
                }, st.a.c.monotype = function(t, e) {
                    return new W(e, t)
                }, st.a.c.typekit = function(t, e) {
                    return new nt(e, t)
                }, st.a.c.google = function(t, e) {
                    return new rt(e, t)
                };
                var at = {
                    load: s(st.load, st)
                };
                void 0 === (i = function() {
                    return at
                }.call(e, r, e, t)) || (t.exports = i)
            }()
        }
    }
]);