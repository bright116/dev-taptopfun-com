"use strict";
(self.webpackChunkcolorapp = self.webpackChunkcolorapp || []).push([
    [688], {
        4688: function(t, e, r) {
            r.d(e, {
                ZT: function() {
                    return w
                }
            });
            var i = r(6710),
                n = r(9658),
                o = r(1680),
                h = r(1585),
                s = r(9319),
                a = r(8942),
                u = function(t, e) {
                    return u = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                    }, u(t, e)
                };

            function d(t, e) {
                function r() {
                    this.constructor = t
                }
                u(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
            }
            var f = function() {
                    function t(t, e) {
                        this.uvBuffer = t, this.uvMatrix = e, this.data = null, this._bufferUpdateId = -1, this._textureUpdateId = -1, this._updateID = 0
                    }
                    return t.prototype.update = function(t) {
                        if (t || this._bufferUpdateId !== this.uvBuffer._updateID || this._textureUpdateId !== this.uvMatrix._updateID) {
                            this._bufferUpdateId = this.uvBuffer._updateID, this._textureUpdateId = this.uvMatrix._updateID;
                            var e = this.uvBuffer.data;
                            this.data && this.data.length === e.length || (this.data = new Float32Array(e.length)), this.uvMatrix.multiplyUvs(e, this.data), this._updateID++
                        }
                    }, t
                }(),
                p = new n.E9,
                l = new n.mg,
                c = function(t) {
                    function e(e, r, n, h) {
                        void 0 === h && (h = o.lg.TRIANGLES);
                        var a = t.call(this) || this;
                        return a.geometry = e, a.shader = r, a.state = n || i.ZM.for2d(), a.drawMode = h, a.start = 0, a.size = 0, a.uvs = null, a.indices = null, a.vertexData = new Float32Array(1), a.vertexDirty = -1, a._transformID = -1, a._roundPixels = s.X.ROUND_PIXELS, a.batchUvs = null, a
                    }
                    return d(e, t), Object.defineProperty(e.prototype, "geometry", {
                        get: function() {
                            return this._geometry
                        },
                        set: function(t) {
                            this._geometry !== t && (this._geometry && (this._geometry.refCount--, 0 === this._geometry.refCount && this._geometry.dispose()), this._geometry = t, this._geometry && this._geometry.refCount++, this.vertexDirty = -1)
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "uvBuffer", {
                        get: function() {
                            return this.geometry.buffers[1]
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "verticesBuffer", {
                        get: function() {
                            return this.geometry.buffers[0]
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "material", {
                        get: function() {
                            return this.shader
                        },
                        set: function(t) {
                            this.shader = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "blendMode", {
                        get: function() {
                            return this.state.blendMode
                        },
                        set: function(t) {
                            this.state.blendMode = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "roundPixels", {
                        get: function() {
                            return this._roundPixels
                        },
                        set: function(t) {
                            this._roundPixels !== t && (this._transformID = -1), this._roundPixels = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "tint", {
                        get: function() {
                            return "tint" in this.shader ? this.shader.tint : null
                        },
                        set: function(t) {
                            this.shader.tint = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "texture", {
                        get: function() {
                            return "texture" in this.shader ? this.shader.texture : null
                        },
                        set: function(t) {
                            this.shader.texture = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.prototype._render = function(t) {
                        var r = this.geometry.buffers[0].data;
                        this.shader.batchable && this.drawMode === o.lg.TRIANGLES && r.length < 2 * e.BATCHABLE_SIZE ? this._renderToBatch(t) : this._renderDefault(t)
                    }, e.prototype._renderDefault = function(t) {
                        var e = this.shader;
                        e.alpha = this.worldAlpha, e.update && e.update(), t.batch.flush(), e.uniforms.translationMatrix = this.transform.worldTransform.toArray(!0), t.shader.bind(e), t.state.set(this.state), t.geometry.bind(this.geometry, e), t.geometry.draw(this.drawMode, this.size, this.start, this.geometry.instanceCount)
                    }, e.prototype._renderToBatch = function(t) {
                        var e = this.geometry,
                            r = this.shader;
                        r.uvMatrix && (r.uvMatrix.update(), this.calculateUvs()), this.calculateVertices(), this.indices = e.indexBuffer.data, this._tintRGB = r._tintRGB, this._texture = r.texture;
                        var i = this.material.pluginName;
                        t.batch.setObjectRenderer(t.plugins[i]), t.plugins[i].render(this)
                    }, e.prototype.calculateVertices = function() {
                        var t = this.geometry.buffers[0],
                            e = t.data,
                            r = t._updateID;
                        if (r !== this.vertexDirty || this._transformID !== this.transform._worldID) {
                            this._transformID = this.transform._worldID, this.vertexData.length !== e.length && (this.vertexData = new Float32Array(e.length));
                            for (var i = this.transform.worldTransform, n = i.a, o = i.b, h = i.c, a = i.d, u = i.tx, d = i.ty, f = this.vertexData, p = 0; p < f.length / 2; p++) {
                                var l = e[2 * p],
                                    c = e[2 * p + 1];
                                f[2 * p] = n * l + h * c + u, f[2 * p + 1] = o * l + a * c + d
                            }
                            if (this._roundPixels) {
                                var g = s.X.RESOLUTION;
                                for (p = 0; p < f.length; ++p) f[p] = Math.round((f[p] * g | 0) / g)
                            }
                            this.vertexDirty = r
                        }
                    }, e.prototype.calculateUvs = function() {
                        var t = this.geometry.buffers[1],
                            e = this.shader;
                        e.uvMatrix.isSimple ? this.uvs = t.data : (this.batchUvs || (this.batchUvs = new f(t, e.uvMatrix)), this.batchUvs.update(), this.uvs = this.batchUvs.data)
                    }, e.prototype._calculateBounds = function() {
                        this.calculateVertices(), this._bounds.addVertexData(this.vertexData, 0, this.vertexData.length)
                    }, e.prototype.containsPoint = function(t) {
                        if (!this.getBounds().contains(t.x, t.y)) return !1;
                        this.worldTransform.applyInverse(t, p);
                        for (var e = this.geometry.getBuffer("aVertexPosition").data, r = l.points, i = this.geometry.getIndex().data, n = i.length, o = 4 === this.drawMode ? 3 : 1, h = 0; h + 2 < n; h += o) {
                            var s = 2 * i[h],
                                a = 2 * i[h + 1],
                                u = 2 * i[h + 2];
                            if (r[0] = e[s], r[1] = e[s + 1], r[2] = e[a], r[3] = e[a + 1], r[4] = e[u], r[5] = e[u + 1], l.contains(p.x, p.y)) return !0
                        }
                        return !1
                    }, e.prototype.destroy = function(e) {
                        t.prototype.destroy.call(this, e), this._cachedTexture && (this._cachedTexture.destroy(), this._cachedTexture = null), this.geometry = null, this.shader = null, this.state = null, this.uvs = null, this.indices = null, this.vertexData = null
                    }, e.BATCHABLE_SIZE = 100, e
                }(h.W2),
                g = function(t) {
                    function e(e, r) {
                        var o = this,
                            h = {
                                uSampler: e,
                                alpha: 1,
                                uTextureMatrix: n.y3.IDENTITY,
                                uColor: new Float32Array([1, 1, 1, 1])
                            };
                        return (r = Object.assign({
                            tint: 16777215,
                            alpha: 1,
                            pluginName: "batch"
                        }, r)).uniforms && Object.assign(h, r.uniforms), (o = t.call(this, r.program || i.$r.from("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTextureMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\n}\n", "varying vec2 vTextureCoord;\nuniform vec4 uColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;\n}\n"), h) || this)._colorDirty = !1, o.uvMatrix = new i.UX(e), o.batchable = void 0 === r.program, o.pluginName = r.pluginName, o.tint = r.tint, o.alpha = r.alpha, o
                    }
                    return d(e, t), Object.defineProperty(e.prototype, "texture", {
                        get: function() {
                            return this.uniforms.uSampler
                        },
                        set: function(t) {
                            this.uniforms.uSampler !== t && (!this.uniforms.uSampler.baseTexture.alphaMode != !t.baseTexture.alphaMode && (this._colorDirty = !0), this.uniforms.uSampler = t, this.uvMatrix.texture = t)
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "alpha", {
                        get: function() {
                            return this._alpha
                        },
                        set: function(t) {
                            t !== this._alpha && (this._alpha = t, this._colorDirty = !0)
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "tint", {
                        get: function() {
                            return this._tint
                        },
                        set: function(t) {
                            t !== this._tint && (this._tint = t, this._tintRGB = (t >> 16) + (65280 & t) + ((255 & t) << 16), this._colorDirty = !0)
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.prototype.update = function() {
                        if (this._colorDirty) {
                            this._colorDirty = !1;
                            var t = this.texture.baseTexture;
                            (0, a.GT)(this._tint, this._alpha, this.uniforms.uColor, t.alphaMode)
                        }
                        this.uvMatrix.update() && (this.uniforms.uTextureMatrix = this.uvMatrix.mapCoord)
                    }, e
                }(i.ex),
                y = function(t) {
                    function e(e, r, n) {
                        var h = t.call(this) || this,
                            s = new i.lW(e),
                            a = new i.lW(r, !0),
                            u = new i.lW(n, !0, !0);
                        return h.addAttribute("aVertexPosition", s, 2, !1, o.vK.FLOAT).addAttribute("aTextureCoord", a, 2, !1, o.vK.FLOAT).addIndex(u), h._updateId = -1, h
                    }
                    return d(e, t), Object.defineProperty(e.prototype, "vertexDirtyId", {
                        get: function() {
                            return this.buffers[0]._updateID
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e
                }(i.ZX),
                _ = function(t, e) {
                    return _ = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                    }, _(t, e)
                };

            function x(t, e) {
                function r() {
                    this.constructor = t
                }
                _(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
            }
            var b = function(t) {
                    function e(e, r, i, n) {
                        void 0 === e && (e = 100), void 0 === r && (r = 100), void 0 === i && (i = 10), void 0 === n && (n = 10);
                        var o = t.call(this) || this;
                        return o.segWidth = i, o.segHeight = n, o.width = e, o.height = r, o.build(), o
                    }
                    return x(e, t), e.prototype.build = function() {
                        for (var t = this.segWidth * this.segHeight, e = [], r = [], i = [], n = this.segWidth - 1, o = this.segHeight - 1, h = this.width / n, s = this.height / o, a = 0; a < t; a++) {
                            var u = a % this.segWidth,
                                d = a / this.segWidth | 0;
                            e.push(u * h, d * s), r.push(u / n, d / o)
                        }
                        var f = n * o;
                        for (a = 0; a < f; a++) {
                            var p = a % n,
                                l = a / n | 0,
                                c = l * this.segWidth + p,
                                g = l * this.segWidth + p + 1,
                                y = (l + 1) * this.segWidth + p,
                                _ = (l + 1) * this.segWidth + p + 1;
                            i.push(c, g, y, g, _, y)
                        }
                        this.buffers[0].data = new Float32Array(e), this.buffers[1].data = new Float32Array(r), this.indexBuffer.data = new Uint16Array(i), this.buffers[0].update(), this.buffers[1].update(), this.indexBuffer.update()
                    }, e
                }(y),
                v = function(t) {
                    function e(e, r, i) {
                        void 0 === e && (e = 200), void 0 === i && (i = 0);
                        var n = t.call(this, new Float32Array(4 * r.length), new Float32Array(4 * r.length), new Uint16Array(6 * (r.length - 1))) || this;
                        return n.points = r, n._width = e, n.textureScale = i, n.build(), n
                    }
                    return x(e, t), Object.defineProperty(e.prototype, "width", {
                        get: function() {
                            return this._width
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.prototype.build = function() {
                        var t = this.points;
                        if (t) {
                            var e = this.getBuffer("aVertexPosition"),
                                r = this.getBuffer("aTextureCoord"),
                                i = this.getIndex();
                            if (!(t.length < 1)) {
                                e.data.length / 4 !== t.length && (e.data = new Float32Array(4 * t.length), r.data = new Float32Array(4 * t.length), i.data = new Uint16Array(6 * (t.length - 1)));
                                var n = r.data,
                                    o = i.data;
                                n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 1;
                                for (var h = 0, s = t[0], a = this._width * this.textureScale, u = t.length, d = 0; d < u; d++) {
                                    var f = 4 * d;
                                    if (this.textureScale > 0) {
                                        var p = s.x - t[d].x,
                                            l = s.y - t[d].y,
                                            c = Math.sqrt(p * p + l * l);
                                        s = t[d], h += c / a
                                    } else h = d / (u - 1);
                                    n[f] = h, n[f + 1] = 0, n[f + 2] = h, n[f + 3] = 1
                                }
                                var g = 0;
                                for (d = 0; d < u - 1; d++) f = 2 * d, o[g++] = f, o[g++] = f + 1, o[g++] = f + 2, o[g++] = f + 2, o[g++] = f + 1, o[g++] = f + 3;
                                r.update(), i.update(), this.updateVertices()
                            }
                        }
                    }, e.prototype.updateVertices = function() {
                        var t = this.points;
                        if (!(t.length < 1)) {
                            for (var e, r = t[0], i = 0, n = 0, o = this.buffers[0].data, h = t.length, s = 0; s < h; s++) {
                                var a = t[s],
                                    u = 4 * s;
                                n = -((e = s < t.length - 1 ? t[s + 1] : a).x - r.x), i = e.y - r.y;
                                var d = Math.sqrt(i * i + n * n),
                                    f = this.textureScale > 0 ? this.textureScale * this._width / 2 : this._width / 2;
                                i /= d, n /= d, i *= f, n *= f, o[u] = a.x + i, o[u + 1] = a.y + n, o[u + 2] = a.x - i, o[u + 3] = a.y - n, r = a
                            }
                            this.buffers[0].update()
                        }
                    }, e.prototype.update = function() {
                        this.textureScale > 0 ? this.build() : this.updateVertices()
                    }, e
                }(y),
                m = (function(t) {
                    function e(e, r, i) {
                        void 0 === i && (i = 0);
                        var n = this,
                            h = new v(e.height, r, i),
                            s = new g(e);
                        return i > 0 && (e.baseTexture.wrapMode = o.Nt.REPEAT), (n = t.call(this, h, s) || this).autoUpdate = !0, n
                    }
                    x(e, t), e.prototype._render = function(e) {
                        var r = this.geometry;
                        (this.autoUpdate || r._width !== this.shader.texture.height) && (r._width = this.shader.texture.height, r.update()), t.prototype._render.call(this, e)
                    }
                }(c), function(t) {
                    function e(e, r, n) {
                        var o = this,
                            h = new b(e.width, e.height, r, n),
                            s = new g(i.xE.WHITE);
                        return (o = t.call(this, h, s) || this).texture = e, o.autoResize = !0, o
                    }
                    return x(e, t), e.prototype.textureUpdated = function() {
                        this._textureID = this.shader.texture._updateID;
                        var t = this.geometry,
                            e = this.shader.texture,
                            r = e.width,
                            i = e.height;
                        !this.autoResize || t.width === r && t.height === i || (t.width = this.shader.texture.width, t.height = this.shader.texture.height, t.build())
                    }, Object.defineProperty(e.prototype, "texture", {
                        get: function() {
                            return this.shader.texture
                        },
                        set: function(t) {
                            this.shader.texture !== t && (this.shader.texture = t, this._textureID = -1, t.baseTexture.valid ? this.textureUpdated() : t.once("update", this.textureUpdated, this))
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.prototype._render = function(e) {
                        this._textureID !== this.shader.texture._updateID && this.textureUpdated(), t.prototype._render.call(this, e)
                    }, e.prototype.destroy = function(e) {
                        this.shader.texture.off("update", this.textureUpdated, this), t.prototype.destroy.call(this, e)
                    }, e
                }(c)),
                w = (function(t) {
                    function e(e, r, n, o, h) {
                        void 0 === e && (e = i.xE.EMPTY);
                        var s = this,
                            a = new y(r, n, o);
                        a.getBuffer("aVertexPosition").static = !1;
                        var u = new g(e);
                        return (s = t.call(this, a, u, null, h) || this).autoUpdate = !0, s
                    }
                    x(e, t), Object.defineProperty(e.prototype, "vertices", {
                        get: function() {
                            return this.geometry.getBuffer("aVertexPosition").data
                        },
                        set: function(t) {
                            this.geometry.getBuffer("aVertexPosition").data = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.prototype._render = function(e) {
                        this.autoUpdate && this.geometry.getBuffer("aVertexPosition").update(), t.prototype._render.call(this, e)
                    }
                }(c), function(t) {
                    function e(e, r, n, o, h) {
                        void 0 === r && (r = 10), void 0 === n && (n = 10), void 0 === o && (o = 10), void 0 === h && (h = 10);
                        var s = t.call(this, i.xE.WHITE, 4, 4) || this;
                        return s._origWidth = e.orig.width, s._origHeight = e.orig.height, s._width = s._origWidth, s._height = s._origHeight, s._leftWidth = r, s._rightWidth = o, s._topHeight = n, s._bottomHeight = h, s.texture = e, s
                    }
                    return x(e, t), e.prototype.textureUpdated = function() {
                        this._textureID = this.shader.texture._updateID, this._refresh()
                    }, Object.defineProperty(e.prototype, "vertices", {
                        get: function() {
                            return this.geometry.getBuffer("aVertexPosition").data
                        },
                        set: function(t) {
                            this.geometry.getBuffer("aVertexPosition").data = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.prototype.updateHorizontalVertices = function() {
                        var t = this.vertices,
                            e = this._getMinScale();
                        t[9] = t[11] = t[13] = t[15] = this._topHeight * e, t[17] = t[19] = t[21] = t[23] = this._height - this._bottomHeight * e, t[25] = t[27] = t[29] = t[31] = this._height
                    }, e.prototype.updateVerticalVertices = function() {
                        var t = this.vertices,
                            e = this._getMinScale();
                        t[2] = t[10] = t[18] = t[26] = this._leftWidth * e, t[4] = t[12] = t[20] = t[28] = this._width - this._rightWidth * e, t[6] = t[14] = t[22] = t[30] = this._width
                    }, e.prototype._getMinScale = function() {
                        var t = this._leftWidth + this._rightWidth,
                            e = this._width > t ? 1 : this._width / t,
                            r = this._topHeight + this._bottomHeight,
                            i = this._height > r ? 1 : this._height / r;
                        return Math.min(e, i)
                    }, Object.defineProperty(e.prototype, "width", {
                        get: function() {
                            return this._width
                        },
                        set: function(t) {
                            this._width = t, this._refresh()
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "height", {
                        get: function() {
                            return this._height
                        },
                        set: function(t) {
                            this._height = t, this._refresh()
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "leftWidth", {
                        get: function() {
                            return this._leftWidth
                        },
                        set: function(t) {
                            this._leftWidth = t, this._refresh()
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "rightWidth", {
                        get: function() {
                            return this._rightWidth
                        },
                        set: function(t) {
                            this._rightWidth = t, this._refresh()
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "topHeight", {
                        get: function() {
                            return this._topHeight
                        },
                        set: function(t) {
                            this._topHeight = t, this._refresh()
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "bottomHeight", {
                        get: function() {
                            return this._bottomHeight
                        },
                        set: function(t) {
                            this._bottomHeight = t, this._refresh()
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.prototype._refresh = function() {
                        var t = this.texture,
                            e = this.geometry.buffers[1].data;
                        this._origWidth = t.orig.width, this._origHeight = t.orig.height;
                        var r = 1 / this._origWidth,
                            i = 1 / this._origHeight;
                        e[0] = e[8] = e[16] = e[24] = 0, e[1] = e[3] = e[5] = e[7] = 0, e[6] = e[14] = e[22] = e[30] = 1, e[25] = e[27] = e[29] = e[31] = 1, e[2] = e[10] = e[18] = e[26] = r * this._leftWidth, e[4] = e[12] = e[20] = e[28] = 1 - r * this._rightWidth, e[9] = e[11] = e[13] = e[15] = i * this._topHeight, e[17] = e[19] = e[21] = e[23] = 1 - i * this._bottomHeight, this.updateHorizontalVertices(), this.updateVerticalVertices(), this.geometry.buffers[0].update(), this.geometry.buffers[1].update()
                    }, e
                }(m))
        }
    }
]);