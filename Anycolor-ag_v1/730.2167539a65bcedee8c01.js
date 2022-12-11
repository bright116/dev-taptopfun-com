/*! For license information please see 730.2167539a65bcedee8c01.js.LICENSE.txt */
"use strict";
(self.webpackChunkcolorapp = self.webpackChunkcolorapp || []).push([
    [730], {
        6730: function(t, e, r) {
            r.d(e, {
                T: function() {
                    return F
                }
            });
            var i = r(6710),
                n = r(9319),
                E = function(t, e) {
                    return E = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                    }, E(t, e)
                };

            function _(t, e) {
                function r() {
                    this.constructor = t
                }
                E(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
            }
            var o, T, u, N, R, l, I, s, A, a, O, L, P, U, h, S, p, c, f, d = {
                    5: [.153388, .221461, .250301],
                    7: [.071303, .131514, .189879, .214607],
                    9: [.028532, .067234, .124009, .179044, .20236],
                    11: [.0093, .028002, .065984, .121703, .175713, .198596],
                    13: [.002406, .009255, .027867, .065666, .121117, .174868, .197641],
                    15: [489e-6, .002403, .009246, .02784, .065602, .120999, .174697, .197448]
                },
                C = ["varying vec2 vBlurTexCoords[%size%];", "uniform sampler2D uSampler;", "void main(void)", "{", "    gl_FragColor = vec4(0.0);", "    %blur%", "}"].join("\n");
            ! function(t) {
                t[t.WEBGL_LEGACY = 0] = "WEBGL_LEGACY", t[t.WEBGL = 1] = "WEBGL", t[t.WEBGL2 = 2] = "WEBGL2"
            }(o || (o = {})),
            function(t) {
                t[t.UNKNOWN = 0] = "UNKNOWN", t[t.WEBGL = 1] = "WEBGL", t[t.CANVAS = 2] = "CANVAS"
            }(T || (T = {})),
            function(t) {
                t[t.COLOR = 16384] = "COLOR", t[t.DEPTH = 256] = "DEPTH", t[t.STENCIL = 1024] = "STENCIL"
            }(u || (u = {})),
            function(t) {
                t[t.NORMAL = 0] = "NORMAL", t[t.ADD = 1] = "ADD", t[t.MULTIPLY = 2] = "MULTIPLY", t[t.SCREEN = 3] = "SCREEN", t[t.OVERLAY = 4] = "OVERLAY", t[t.DARKEN = 5] = "DARKEN", t[t.LIGHTEN = 6] = "LIGHTEN", t[t.COLOR_DODGE = 7] = "COLOR_DODGE", t[t.COLOR_BURN = 8] = "COLOR_BURN", t[t.HARD_LIGHT = 9] = "HARD_LIGHT", t[t.SOFT_LIGHT = 10] = "SOFT_LIGHT", t[t.DIFFERENCE = 11] = "DIFFERENCE", t[t.EXCLUSION = 12] = "EXCLUSION", t[t.HUE = 13] = "HUE", t[t.SATURATION = 14] = "SATURATION", t[t.COLOR = 15] = "COLOR", t[t.LUMINOSITY = 16] = "LUMINOSITY", t[t.NORMAL_NPM = 17] = "NORMAL_NPM", t[t.ADD_NPM = 18] = "ADD_NPM", t[t.SCREEN_NPM = 19] = "SCREEN_NPM", t[t.NONE = 20] = "NONE", t[t.SRC_OVER = 0] = "SRC_OVER", t[t.SRC_IN = 21] = "SRC_IN", t[t.SRC_OUT = 22] = "SRC_OUT", t[t.SRC_ATOP = 23] = "SRC_ATOP", t[t.DST_OVER = 24] = "DST_OVER", t[t.DST_IN = 25] = "DST_IN", t[t.DST_OUT = 26] = "DST_OUT", t[t.DST_ATOP = 27] = "DST_ATOP", t[t.ERASE = 26] = "ERASE", t[t.SUBTRACT = 28] = "SUBTRACT", t[t.XOR = 29] = "XOR"
            }(N || (N = {})),
            function(t) {
                t[t.POINTS = 0] = "POINTS", t[t.LINES = 1] = "LINES", t[t.LINE_LOOP = 2] = "LINE_LOOP", t[t.LINE_STRIP = 3] = "LINE_STRIP", t[t.TRIANGLES = 4] = "TRIANGLES", t[t.TRIANGLE_STRIP = 5] = "TRIANGLE_STRIP", t[t.TRIANGLE_FAN = 6] = "TRIANGLE_FAN"
            }(R || (R = {})),
            function(t) {
                t[t.RGBA = 6408] = "RGBA", t[t.RGB = 6407] = "RGB", t[t.RG = 33319] = "RG", t[t.RED = 6403] = "RED", t[t.RGBA_INTEGER = 36249] = "RGBA_INTEGER", t[t.RGB_INTEGER = 36248] = "RGB_INTEGER", t[t.RG_INTEGER = 33320] = "RG_INTEGER", t[t.RED_INTEGER = 36244] = "RED_INTEGER", t[t.ALPHA = 6406] = "ALPHA", t[t.LUMINANCE = 6409] = "LUMINANCE", t[t.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA", t[t.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT", t[t.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL"
            }(l || (l = {})),
            function(t) {
                t[t.TEXTURE_2D = 3553] = "TEXTURE_2D", t[t.TEXTURE_CUBE_MAP = 34067] = "TEXTURE_CUBE_MAP", t[t.TEXTURE_2D_ARRAY = 35866] = "TEXTURE_2D_ARRAY", t[t.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X", t[t.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X", t[t.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y", t[t.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y", t[t.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z", t[t.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z"
            }(I || (I = {})),
            function(t) {
                t[t.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE", t[t.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT", t[t.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5", t[t.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4", t[t.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1", t[t.UNSIGNED_INT = 5125] = "UNSIGNED_INT", t[t.UNSIGNED_INT_10F_11F_11F_REV = 35899] = "UNSIGNED_INT_10F_11F_11F_REV", t[t.UNSIGNED_INT_2_10_10_10_REV = 33640] = "UNSIGNED_INT_2_10_10_10_REV", t[t.UNSIGNED_INT_24_8 = 34042] = "UNSIGNED_INT_24_8", t[t.UNSIGNED_INT_5_9_9_9_REV = 35902] = "UNSIGNED_INT_5_9_9_9_REV", t[t.BYTE = 5120] = "BYTE", t[t.SHORT = 5122] = "SHORT", t[t.INT = 5124] = "INT", t[t.FLOAT = 5126] = "FLOAT", t[t.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV", t[t.HALF_FLOAT = 36193] = "HALF_FLOAT"
            }(s || (s = {})),
            function(t) {
                t[t.FLOAT = 0] = "FLOAT", t[t.INT = 1] = "INT", t[t.UINT = 2] = "UINT"
            }(A || (A = {})),
            function(t) {
                t[t.NEAREST = 0] = "NEAREST", t[t.LINEAR = 1] = "LINEAR"
            }(a || (a = {})),
            function(t) {
                t[t.CLAMP = 33071] = "CLAMP", t[t.REPEAT = 10497] = "REPEAT", t[t.MIRRORED_REPEAT = 33648] = "MIRRORED_REPEAT"
            }(O || (O = {})),
            function(t) {
                t[t.OFF = 0] = "OFF", t[t.POW2 = 1] = "POW2", t[t.ON = 2] = "ON", t[t.ON_MANUAL = 3] = "ON_MANUAL"
            }(L || (L = {})),
            function(t) {
                t[t.NPM = 0] = "NPM", t[t.UNPACK = 1] = "UNPACK", t[t.PMA = 2] = "PMA", t[t.NO_PREMULTIPLIED_ALPHA = 0] = "NO_PREMULTIPLIED_ALPHA", t[t.PREMULTIPLY_ON_UPLOAD = 1] = "PREMULTIPLY_ON_UPLOAD", t[t.PREMULTIPLY_ALPHA = 2] = "PREMULTIPLY_ALPHA", t[t.PREMULTIPLIED_ALPHA = 2] = "PREMULTIPLIED_ALPHA"
            }(P || (P = {})),
            function(t) {
                t[t.NO = 0] = "NO", t[t.YES = 1] = "YES", t[t.AUTO = 2] = "AUTO", t[t.BLEND = 0] = "BLEND", t[t.CLEAR = 1] = "CLEAR", t[t.BLIT = 2] = "BLIT"
            }(U || (U = {})),
            function(t) {
                t[t.AUTO = 0] = "AUTO", t[t.MANUAL = 1] = "MANUAL"
            }(h || (h = {})),
            function(t) {
                t.LOW = "lowp", t.MEDIUM = "mediump", t.HIGH = "highp"
            }(S || (S = {})),
            function(t) {
                t[t.NONE = 0] = "NONE", t[t.SCISSOR = 1] = "SCISSOR", t[t.STENCIL = 2] = "STENCIL", t[t.SPRITE = 3] = "SPRITE"
            }(p || (p = {})),
            function(t) {
                t[t.NONE = 0] = "NONE", t[t.LOW = 2] = "LOW", t[t.MEDIUM = 4] = "MEDIUM", t[t.HIGH = 8] = "HIGH"
            }(c || (c = {})),
            function(t) {
                t[t.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER", t[t.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER", t[t.UNIFORM_BUFFER = 35345] = "UNIFORM_BUFFER"
            }(f || (f = {}));
            var b = function(t) {
                    function e(e, r, i, E, _) {
                        void 0 === r && (r = 8), void 0 === i && (i = 4), void 0 === E && (E = n.X.FILTER_RESOLUTION), void 0 === _ && (_ = 5);
                        var o = this,
                            T = function(t, e) {
                                var r, i = Math.ceil(t / 2),
                                    n = "\n    attribute vec2 aVertexPosition;\n\n    uniform mat3 projectionMatrix;\n\n    uniform float strength;\n\n    varying vec2 vBlurTexCoords[%size%];\n\n    uniform vec4 inputSize;\n    uniform vec4 outputFrame;\n\n    vec4 filterVertexPosition( void )\n    {\n        vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n        return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n    }\n\n    vec2 filterTextureCoord( void )\n    {\n        return aVertexPosition * (outputFrame.zw * inputSize.zw);\n    }\n\n    void main(void)\n    {\n        gl_Position = filterVertexPosition();\n\n        vec2 textureCoord = filterTextureCoord();\n        %blur%\n    }",
                                    E = "";
                                r = e ? "vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);" : "vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);";
                                for (var _ = 0; _ < t; _++) {
                                    var o = r.replace("%index%", _.toString());
                                    E += o = o.replace("%sampleIndex%", _ - (i - 1) + ".0"), E += "\n"
                                }
                                return (n = n.replace("%blur%", E)).replace("%size%", t.toString())
                            }(_, e),
                            u = function(t) {
                                for (var e, r = d[t], i = r.length, n = C, E = "", _ = 0; _ < t; _++) {
                                    var o = "gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;".replace("%index%", _.toString());
                                    e = _, _ >= i && (e = t - _ - 1), E += o = o.replace("%value%", r[e].toString()), E += "\n"
                                }
                                return (n = n.replace("%blur%", E)).replace("%size%", t.toString())
                            }(_);
                        return (o = t.call(this, T, u) || this).horizontal = e, o.resolution = E, o._quality = 0, o.quality = i, o.blur = r, o
                    }
                    return _(e, t), e.prototype.apply = function(t, e, r, i) {
                        if (r ? this.horizontal ? this.uniforms.strength = 1 / r.width * (r.width / e.width) : this.uniforms.strength = 1 / r.height * (r.height / e.height) : this.horizontal ? this.uniforms.strength = 1 / t.renderer.width * (t.renderer.width / e.width) : this.uniforms.strength = 1 / t.renderer.height * (t.renderer.height / e.height), this.uniforms.strength *= this.strength, this.uniforms.strength /= this.passes, 1 === this.passes) t.applyFilter(this, e, r, i);
                        else {
                            var n = t.getFilterTexture(),
                                E = t.renderer,
                                _ = e,
                                o = n;
                            this.state.blend = !1, t.applyFilter(this, _, o, U.CLEAR);
                            for (var T = 1; T < this.passes - 1; T++) {
                                t.bindAndClear(_, U.BLIT), this.uniforms.uSampler = o;
                                var u = o;
                                o = _, _ = u, E.shader.bind(this), E.geometry.draw(5)
                            }
                            this.state.blend = !0, t.applyFilter(this, o, r, i), t.returnFilterTexture(n)
                        }
                    }, Object.defineProperty(e.prototype, "blur", {
                        get: function() {
                            return this.strength
                        },
                        set: function(t) {
                            this.padding = 1 + 2 * Math.abs(t), this.strength = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "quality", {
                        get: function() {
                            return this._quality
                        },
                        set: function(t) {
                            this._quality = t, this.passes = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e
                }(i.wn),
                F = function(t) {
                    function e(e, r, i, E) {
                        void 0 === e && (e = 8), void 0 === r && (r = 4), void 0 === i && (i = n.X.FILTER_RESOLUTION), void 0 === E && (E = 5);
                        var _ = t.call(this) || this;
                        return _.blurXFilter = new b(!0, e, r, i, E), _.blurYFilter = new b(!1, e, r, i, E), _.resolution = i, _.quality = r, _.blur = e, _.repeatEdgePixels = !1, _
                    }
                    return _(e, t), e.prototype.apply = function(t, e, r, i) {
                        var n = Math.abs(this.blurXFilter.strength),
                            E = Math.abs(this.blurYFilter.strength);
                        if (n && E) {
                            var _ = t.getFilterTexture();
                            this.blurXFilter.apply(t, e, _, U.CLEAR), this.blurYFilter.apply(t, _, r, i), t.returnFilterTexture(_)
                        } else E ? this.blurYFilter.apply(t, e, r, i) : this.blurXFilter.apply(t, e, r, i)
                    }, e.prototype.updatePadding = function() {
                        this._repeatEdgePixels ? this.padding = 0 : this.padding = 2 * Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength))
                    }, Object.defineProperty(e.prototype, "blur", {
                        get: function() {
                            return this.blurXFilter.blur
                        },
                        set: function(t) {
                            this.blurXFilter.blur = this.blurYFilter.blur = t, this.updatePadding()
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "quality", {
                        get: function() {
                            return this.blurXFilter.quality
                        },
                        set: function(t) {
                            this.blurXFilter.quality = this.blurYFilter.quality = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "blurX", {
                        get: function() {
                            return this.blurXFilter.blur
                        },
                        set: function(t) {
                            this.blurXFilter.blur = t, this.updatePadding()
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "blurY", {
                        get: function() {
                            return this.blurYFilter.blur
                        },
                        set: function(t) {
                            this.blurYFilter.blur = t, this.updatePadding()
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "blendMode", {
                        get: function() {
                            return this.blurYFilter.blendMode
                        },
                        set: function(t) {
                            this.blurYFilter.blendMode = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "repeatEdgePixels", {
                        get: function() {
                            return this._repeatEdgePixels
                        },
                        set: function(t) {
                            this._repeatEdgePixels = t, this.updatePadding()
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e
                }(i.wn)
        }
    }
]);