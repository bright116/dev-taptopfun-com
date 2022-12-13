!function(t, e, i) {
    i.un, i.uns;
    var a = i.static, r = i.class, n = i.getset, s = (i.__newvec, laya.webgl.canvas.BlendMode), o = (laya.events.Event, 
    laya.resource.HTMLCanvas), l = laya.utils.Handler, h = laya.webgl.utils.IndexBuffer2D, c = (laya.net.Loader, 
    laya.maths.MathUtil), u = laya.maths.Matrix, d = laya.renders.Render, m = (laya.renders.RenderContext, 
    laya.renders.RenderSprite, laya.webgl.shader.Shader), _ = laya.display.Sprite, f = laya.utils.Stat, p = laya.resource.Texture, v = laya.utils.Utils, x = laya.webgl.shader.d2.value.Value2D, y = laya.webgl.utils.VertexBuffer2D, C = laya.webgl.WebGL, P = (laya.webgl.WebGLContext, 
    function() {
        function t() {
            this._frameTime = 0, this._emissionRate = 60, this._emissionTime = 0, this.minEmissionTime = 1 / 60, 
            this._particleTemplate = null;
        }
        r(t, "laya.particle.emitter.EmitterBase");
        var e = t.prototype;
        return e.start = function(t) {
            void 0 === t && (t = 2147483647), 0 != this._emissionRate && (this._emissionTime = t);
        }, e.stop = function() {
            this._emissionTime = 0;
        }, e.clear = function() {
            this._emissionTime = 0;
        }, e.emit = function() {}, e.advanceTime = function(t) {
            if (void 0 === t && (t = 1), this._emissionTime -= t, !(this._emissionTime < 0 || (this._frameTime += t, 
            this._frameTime < this.minEmissionTime))) for (;this._frameTime > this.minEmissionTime; ) this._frameTime -= this.minEmissionTime, 
            this.emit();
        }, n(0, e, "particleTemplate", null, function(t) {
            this._particleTemplate = t;
        }), n(0, e, "emissionRate", function() {
            return this._emissionRate;
        }, function(t) {
            t <= 0 || (this._emissionRate = t, t > 0 && (this.minEmissionTime = 1 / t));
        }), t;
    }()), g = function() {
        function t() {
            this.position = null, this.velocity = null, this.startColor = null, this.endColor = null, 
            this.sizeRotation = null, this.radius = null, this.radian = null, this.durationAddScale = NaN, 
            this.time = NaN;
        }
        return r(t, "laya.particle.ParticleData"), t.Create = function(e, i, a, r) {
            var n = new t();
            n.position = i, c.scaleVector3(a, e.emitterVelocitySensitivity, t._tempVelocity);
            var s = c.lerp(e.minHorizontalVelocity, e.maxHorizontalVelocity, Math.random()), o = Math.random() * Math.PI * 2;
            t._tempVelocity[0] += s * Math.cos(o), t._tempVelocity[2] += s * Math.sin(o), t._tempVelocity[1] += c.lerp(e.minVerticalVelocity, e.maxVerticalVelocity, Math.random()), 
            n.velocity = t._tempVelocity, n.startColor = t._tempStartColor, n.endColor = t._tempEndColor;
            var l = 0;
            if (e.disableColor) for (l = 0; l < 4; l++) n.startColor[l] = 1, n.endColor[l] = 1; else if (e.colorComponentInter) for (l = 0; l < 4; l++) n.startColor[l] = c.lerp(e.minStartColor[l], e.maxStartColor[l], Math.random()), 
            n.endColor[l] = c.lerp(e.minEndColor[l], e.maxEndColor[l], Math.random()); else c.lerpVector4(e.minStartColor, e.maxStartColor, Math.random(), n.startColor), 
            c.lerpVector4(e.minEndColor, e.maxEndColor, Math.random(), n.endColor);
            n.sizeRotation = t._tempSizeRotation;
            var h = Math.random();
            n.sizeRotation[0] = c.lerp(e.minStartSize, e.maxStartSize, h), n.sizeRotation[1] = c.lerp(e.minEndSize, e.maxEndSize, h), 
            n.sizeRotation[2] = c.lerp(e.minRotateSpeed, e.maxRotateSpeed, Math.random()), n.radius = t._tempRadius;
            var u = Math.random();
            n.radius[0] = c.lerp(e.minStartRadius, e.maxStartRadius, u), n.radius[1] = c.lerp(e.minEndRadius, e.maxEndRadius, u), 
            n.radian = t._tempRadian, n.radian[0] = c.lerp(e.minHorizontalStartRadian, e.maxHorizontalStartRadian, Math.random()), 
            n.radian[1] = c.lerp(e.minVerticalStartRadian, e.maxVerticalStartRadian, Math.random());
            var d = e.useEndRadian;
            return n.radian[2] = d ? c.lerp(e.minHorizontalEndRadian, e.maxHorizontalEndRadian, Math.random()) : n.radian[0], 
            n.radian[3] = d ? c.lerp(e.minVerticalEndRadian, e.maxVerticalEndRadian, Math.random()) : n.radian[1], 
            n.durationAddScale = e.ageAddScale * Math.random(), n.time = r, n;
        }, a(t, [ "_tempVelocity", function() {
            return this._tempVelocity = new Float32Array(3);
        }, "_tempStartColor", function() {
            return this._tempStartColor = new Float32Array(4);
        }, "_tempEndColor", function() {
            return this._tempEndColor = new Float32Array(4);
        }, "_tempSizeRotation", function() {
            return this._tempSizeRotation = new Float32Array(3);
        }, "_tempRadius", function() {
            return this._tempRadius = new Float32Array(2);
        }, "_tempRadian", function() {
            return this._tempRadian = new Float32Array(4);
        } ]), t;
    }(), R = (function() {
        function t(t, e, i) {
            this._templet = null, this._timeBetweenParticles = NaN, this._previousPosition = null, 
            this._timeLeftOver = 0, this._tempVelocity = new Float32Array([ 0, 0, 0 ]), this._tempPosition = new Float32Array([ 0, 0, 0 ]), 
            this._templet = t, this._timeBetweenParticles = 1 / e, this._previousPosition = i;
        }
        r(t, "laya.particle.ParticleEmitter"), t.prototype.update = function(t, e) {
            if ((t /= 1e3) > 0) {
                c.subtractVector3(e, this._previousPosition, this._tempVelocity), c.scaleVector3(this._tempVelocity, 1 / t, this._tempVelocity);
                for (var i = this._timeLeftOver + t, a = -this._timeLeftOver; i > this._timeBetweenParticles; ) a += this._timeBetweenParticles, 
                i -= this._timeBetweenParticles, c.lerpVector3(this._previousPosition, e, a / t, this._tempPosition), 
                this._templet.addParticleArray(this._tempPosition, this._tempVelocity);
                this._timeLeftOver = i;
            }
            this._previousPosition[0] = e[0], this._previousPosition[1] = e[1], this._previousPosition[2] = e[2];
        };
    }(), function() {
        function t() {
            this.textureName = null, this.textureCount = 1, this.maxPartices = 100, this.duration = 1, 
            this.ageAddScale = 0, this.emitterVelocitySensitivity = 1, this.minStartSize = 100, 
            this.maxStartSize = 100, this.minEndSize = 100, this.maxEndSize = 100, this.minHorizontalVelocity = 0, 
            this.maxHorizontalVelocity = 0, this.minVerticalVelocity = 0, this.maxVerticalVelocity = 0, 
            this.endVelocity = 1, this.minRotateSpeed = 0, this.maxRotateSpeed = 0, this.minStartRadius = 0, 
            this.maxStartRadius = 0, this.minEndRadius = 0, this.maxEndRadius = 0, this.minHorizontalStartRadian = 0, 
            this.maxHorizontalStartRadian = 0, this.minVerticalStartRadian = 0, this.maxVerticalStartRadian = 0, 
            this.useEndRadian = !0, this.minHorizontalEndRadian = 0, this.maxHorizontalEndRadian = 0, 
            this.minVerticalEndRadian = 0, this.maxVerticalEndRadian = 0, this.colorComponentInter = !1, 
            this.disableColor = !1, this.blendState = 0, this.emitterType = "null", this.emissionRate = 0, 
            this.sphereEmitterRadius = 1, this.sphereEmitterVelocity = 0, this.sphereEmitterVelocityAddVariance = 0, 
            this.ringEmitterRadius = 30, this.ringEmitterVelocity = 0, this.ringEmitterVelocityAddVariance = 0, 
            this.ringEmitterUp = 2, this.gravity = new Float32Array([ 0, 0, 0 ]), this.minStartColor = new Float32Array([ 1, 1, 1, 1 ]), 
            this.maxStartColor = new Float32Array([ 1, 1, 1, 1 ]), this.minEndColor = new Float32Array([ 1, 1, 1, 1 ]), 
            this.maxEndColor = new Float32Array([ 1, 1, 1, 1 ]), this.pointEmitterPosition = new Float32Array([ 0, 0, 0 ]), 
            this.pointEmitterPositionVariance = new Float32Array([ 0, 0, 0 ]), this.pointEmitterVelocity = new Float32Array([ 0, 0, 0 ]), 
            this.pointEmitterVelocityAddVariance = new Float32Array([ 0, 0, 0 ]), this.boxEmitterCenterPosition = new Float32Array([ 0, 0, 0 ]), 
            this.boxEmitterSize = new Float32Array([ 0, 0, 0 ]), this.boxEmitterVelocity = new Float32Array([ 0, 0, 0 ]), 
            this.boxEmitterVelocityAddVariance = new Float32Array([ 0, 0, 0 ]), this.sphereEmitterCenterPosition = new Float32Array([ 0, 0, 0 ]), 
            this.ringEmitterCenterPosition = new Float32Array([ 0, 0, 0 ]), this.positionVariance = new Float32Array([ 0, 0, 0 ]);
        }
        return r(t, "laya.particle.ParticleSetting"), t.checkSetting = function(e) {
            var i;
            for (i in t._defaultSetting) e.hasOwnProperty(i) || (e[i] = t._defaultSetting[i]);
            e.endVelocity = +e.endVelocity, e.gravity[0] = +e.gravity[0], e.gravity[1] = +e.gravity[1], 
            e.gravity[2] = +e.gravity[2];
        }, a(t, [ "_defaultSetting", function() {
            return this._defaultSetting = new t();
        } ]), t;
    }()), S = function() {
        function t() {
            this.settings = null, this.texture = null;
        }
        return r(t, "laya.particle.ParticleTemplateBase"), t.prototype.addParticleArray = function(t, e) {}, 
        t;
    }(), V = function() {
        function t() {
            this.u_Duration = NaN, this.u_EndVelocity = NaN, this.u_Gravity = null, this.a_Position = null, 
            this.a_Velocity = null, this.a_StartColor = null, this.a_EndColor = null, this.a_SizeRotation = null, 
            this.a_Radius = null, this.a_Radian = null, this.a_AgeAddScale = NaN, this.gl_Position = null, 
            this.v_Color = null, this.oSize = NaN, this._color = new Float32Array(4), this._position = new Float32Array(3);
        }
        r(t, "laya.particle.particleUtils.CanvasShader");
        var e = t.prototype;
        return e.getLen = function(t) {
            return Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
        }, e.ComputeParticlePosition = function(t, e, i, a) {
            this._position[0] = t[0], this._position[1] = t[1], this._position[2] = t[2];
            var r = this.getLen(e), n = r * a + (r * this.u_EndVelocity - r) * a * a / 2, s = NaN;
            s = this.getLen(e);
            var o = 0;
            for (o = 0; o < 3; o++) this._position[o] = this._position[o] + e[o] / s * n * this.u_Duration, 
            this._position[o] += this.u_Gravity[o] * i * a;
            var l = c.lerp(this.a_Radius[0], this.a_Radius[1], a), h = c.lerp(this.a_Radian[0], this.a_Radian[2], a), u = c.lerp(this.a_Radian[1], this.a_Radian[3], a), d = Math.cos(u) * l;
            return this._position[1] += Math.sin(u) * l, this._position[0] += Math.cos(h) * d, 
            this._position[2] += Math.sin(h) * d, new Float32Array([ this._position[0], this._position[1], 0, 1 ]);
        }, e.ComputeParticleSize = function(t, e, i) {
            return c.lerp(t, e, i);
        }, e.ComputeParticleRotation = function(t, e) {
            return t * e;
        }, e.ComputeParticleColor = function(t, e, i) {
            var a = this._color;
            return c.lerpVector4(t, e, i, a), a[3] = a[3] * i * (1 - i) * (1 - i) * 6.7, a;
        }, e.clamp = function(t, e, i) {
            return t < e ? e : t > i ? i : t;
        }, e.getData = function(t) {
            t *= 1 + this.a_AgeAddScale;
            var e = this.clamp(t / this.u_Duration, 0, 1);
            this.gl_Position = this.ComputeParticlePosition(this.a_Position, this.a_Velocity, t, e);
            var i = this.ComputeParticleSize(this.a_SizeRotation[0], this.a_SizeRotation[1], e), a = this.ComputeParticleRotation(this.a_SizeRotation[2], t);
            this.v_Color = this.ComputeParticleColor(this.a_StartColor, this.a_EndColor, e);
            var r = new u(), n = NaN;
            n = i / this.oSize * 2, r.scale(n, n), r.rotate(a), r.setTranslate(this.gl_Position[0], -this.gl_Position[1]);
            var s = NaN;
            return s = this.v_Color[3], [ this.v_Color, s, r, this.v_Color[0] * s, this.v_Color[1] * s, this.v_Color[2] * s ];
        }, t;
    }(), E = function() {
        function t() {
            this.maxIndex = 0, this.cmds = null, this.id = 0;
        }
        return r(t, "laya.particle.particleUtils.CMDParticle"), t.prototype.setCmds = function(t) {
            this.cmds = t, this.maxIndex = t.length - 1;
        }, t;
    }(), A = function() {
        function t() {}
        return r(t, "laya.particle.particleUtils.PicTool"), t.getCanvasPic = function(t, e) {
            t = t.bitmap;
            var i = new o("2D"), a = i.getContext("2d");
            i.size(t.width, t.height);
            var r = e >> 16 & 255, n = e >> 8 & 255, s = 255 & e;
            if (d.isConchApp && a.setFilter(r / 255, n / 255, s / 255, 0), a.drawImage(t.source, 0, 0), 
            !d.isConchApp) {
                for (var l = a.getImageData(0, 0, i.width, i.height), h = l.data, c = 0, u = h.length; c < u; c += 4) 0 != h[c + 3] && (h[c] *= r / 255, 
                h[c + 1] *= n / 255, h[c + 2] *= s / 255);
                a.putImageData(l, 0, 0);
            }
            return i;
        }, t.getRGBPic = function(e) {
            return [ new p(t.getCanvasPic(e, 16711680)), new p(t.getCanvasPic(e, 65280)), new p(t.getCanvasPic(e, 255)) ];
        }, t;
    }(), T = function(t) {
        function e(t) {
            this.setting = null, this._posRange = null, this._canvasTemplate = null, this._emitFun = null, 
            e.__super.call(this), this.template = t;
        }
        r(e, "laya.particle.emitter.Emitter2D", t);
        var i = e.prototype;
        return i.emit = function() {
            t.prototype.emit.call(this), null != this._emitFun && this._emitFun();
        }, i.getRandom = function(t) {
            return (2 * Math.random() - 1) * t;
        }, i.webGLEmit = function() {
            var t = new Float32Array(3);
            t[0] = this.getRandom(this._posRange[0]), t[1] = this.getRandom(this._posRange[1]), 
            t[2] = this.getRandom(this._posRange[2]);
            var e = new Float32Array(3);
            e[0] = 0, e[1] = 0, e[2] = 0, this._particleTemplate.addParticleArray(t, e);
        }, i.canvasEmit = function() {
            var t = new Float32Array(3);
            t[0] = this.getRandom(this._posRange[0]), t[1] = this.getRandom(this._posRange[1]), 
            t[2] = this.getRandom(this._posRange[2]);
            var e = new Float32Array(3);
            e[0] = 0, e[1] = 0, e[2] = 0, this._particleTemplate.addParticleArray(t, e);
        }, n(0, i, "template", function() {
            return this._particleTemplate;
        }, function(t) {
            this._particleTemplate = t, t || (this._emitFun = null, this.setting = null, this._posRange = null), 
            this.setting = t.settings, this._posRange = this.setting.positionVariance, this._particleTemplate instanceof laya.particle.ParticleTemplate2D ? this._emitFun = this.webGLEmit : this._particleTemplate instanceof laya.particle.ParticleTemplateCanvas && (this._canvasTemplate = t, 
            this._emitFun = this.canvasEmit);
        }), e;
    }(P), w = function(t) {
        function e(t) {
            this._vertices = null, this._vertexBuffer = null, this._indexBuffer = null, this._floatCountPerVertex = 29, 
            this._firstActiveElement = 0, this._firstNewElement = 0, this._firstFreeElement = 0, 
            this._firstRetiredElement = 0, this._currentTime = 0, this._drawCounter = 0, e.__super.call(this), 
            this.settings = t;
        }
        r(e, "laya.particle.ParticleTemplateWebGL", S);
        var i = e.prototype;
        return i.initialize = function() {
            this._vertices = new Float32Array(this.settings.maxPartices * this._floatCountPerVertex * 4);
            for (var t = 0, e = 0; e < this.settings.maxPartices; e++) {
                var i = Math.random(), a = this.settings.textureCount ? 1 / this.settings.textureCount : 1, r = NaN;
                for (r = 0; r < this.settings.textureCount && !(i < r + a); r += a) ;
                t = e * this._floatCountPerVertex * 4, this._vertices[t + 0 * this._floatCountPerVertex + 0] = -1, 
                this._vertices[t + 0 * this._floatCountPerVertex + 1] = -1, this._vertices[t + 0 * this._floatCountPerVertex + 2] = 0, 
                this._vertices[t + 0 * this._floatCountPerVertex + 3] = r, this._vertices[t + 1 * this._floatCountPerVertex + 0] = 1, 
                this._vertices[t + 1 * this._floatCountPerVertex + 1] = -1, this._vertices[t + 1 * this._floatCountPerVertex + 2] = 1, 
                this._vertices[t + 1 * this._floatCountPerVertex + 3] = r, this._vertices[t + 2 * this._floatCountPerVertex + 0] = 1, 
                this._vertices[t + 2 * this._floatCountPerVertex + 1] = 1, this._vertices[t + 2 * this._floatCountPerVertex + 2] = 1, 
                this._vertices[t + 2 * this._floatCountPerVertex + 3] = r + a, this._vertices[t + 3 * this._floatCountPerVertex + 0] = -1, 
                this._vertices[t + 3 * this._floatCountPerVertex + 1] = 1, this._vertices[t + 3 * this._floatCountPerVertex + 2] = 0, 
                this._vertices[t + 3 * this._floatCountPerVertex + 3] = r + a;
            }
        }, i.loadContent = function() {}, i.update = function(t) {
            this._currentTime += t / 1e3, this.retireActiveParticles(), this.freeRetiredParticles(), 
            this._firstActiveElement == this._firstFreeElement && (this._currentTime = 0), this._firstRetiredElement == this._firstActiveElement && (this._drawCounter = 0);
        }, i.retireActiveParticles = function() {
            for (var t = this.settings.duration; this._firstActiveElement != this._firstNewElement; ) {
                var e = this._firstActiveElement * this._floatCountPerVertex * 4, i = e + 28, a = this._currentTime - this._vertices[i];
                if (1e-4 + (a *= 1 + this._vertices[e + 27]) < t) break;
                this._vertices[i] = this._drawCounter, ++this._firstActiveElement >= this.settings.maxPartices && (this._firstActiveElement = 0);
            }
        }, i.freeRetiredParticles = function() {
            for (;this._firstRetiredElement != this._firstActiveElement && !(this._drawCounter - this._vertices[this._firstRetiredElement * this._floatCountPerVertex * 4 + 28] < 3); ) ++this._firstRetiredElement >= this.settings.maxPartices && (this._firstRetiredElement = 0);
        }, i.addNewParticlesToVertexBuffer = function() {}, i.addParticleArray = function(t, e) {
            var i = this._firstFreeElement + 1;
            if (i >= this.settings.maxPartices && (i = 0), i !== this._firstRetiredElement) {
                for (var a = g.Create(this.settings, t, e, this._currentTime), r = this._firstFreeElement * this._floatCountPerVertex * 4, n = 0; n < 4; n++) {
                    var s = 0, o = 0;
                    for (s = 0, o = 4; s < 3; s++) this._vertices[r + n * this._floatCountPerVertex + o + s] = a.position[s];
                    for (s = 0, o = 7; s < 3; s++) this._vertices[r + n * this._floatCountPerVertex + o + s] = a.velocity[s];
                    for (s = 0, o = 10; s < 4; s++) this._vertices[r + n * this._floatCountPerVertex + o + s] = a.startColor[s];
                    for (s = 0, o = 14; s < 4; s++) this._vertices[r + n * this._floatCountPerVertex + o + s] = a.endColor[s];
                    for (s = 0, o = 18; s < 3; s++) this._vertices[r + n * this._floatCountPerVertex + o + s] = a.sizeRotation[s];
                    for (s = 0, o = 21; s < 2; s++) this._vertices[r + n * this._floatCountPerVertex + o + s] = a.radius[s];
                    for (s = 0, o = 23; s < 4; s++) this._vertices[r + n * this._floatCountPerVertex + o + s] = a.radian[s];
                    this._vertices[r + n * this._floatCountPerVertex + 27] = a.durationAddScale, this._vertices[r + n * this._floatCountPerVertex + 28] = a.time;
                }
                this._firstFreeElement = i;
            }
        }, e;
    }(), z = function(t) {
        function e(t) {
            this._ready = !1, this.textureList = [], this.particleList = [], this.pX = 0, this.pY = 0, 
            this.activeParticles = [], this.deadParticles = [], this.iList = [], this._maxNumParticles = 0, 
            this.textureWidth = NaN, this.dTextureWidth = NaN, this.colorChange = !0, this.step = 1 / 60, 
            this.canvasShader = new V(), e.__super.call(this), this.settings = t, this._maxNumParticles = t.maxPartices, 
            this.texture = new p(), this.texture.on("loaded", this, this._textureLoaded), this.texture.load(t.textureName);
        }
        r(e, "laya.particle.ParticleTemplateCanvas", S);
        var i = e.prototype;
        return i._textureLoaded = function(t) {
            this.setTexture(this.texture), this._ready = !0;
        }, i.clear = function(t) {
            void 0 === t && (t = !0), this.deadParticles.length = 0, this.activeParticles.length = 0, 
            this.textureList.length = 0;
        }, i.setTexture = function(t) {
            this.texture = t, this.textureWidth = t.width, this.dTextureWidth = 1 / this.textureWidth, 
            this.pX = .5 * -t.width, this.pY = .5 * -t.height, this.textureList = e.changeTexture(t, this.textureList), 
            this.particleList.length = 0, this.deadParticles.length = 0, this.activeParticles.length = 0;
        }, i._createAParticleData = function(t, e) {
            this.canvasShader.u_EndVelocity = this.settings.endVelocity, this.canvasShader.u_Gravity = this.settings.gravity, 
            this.canvasShader.u_Duration = this.settings.duration;
            var i;
            i = g.Create(this.settings, t, e, 0), this.canvasShader.a_Position = i.position, 
            this.canvasShader.a_Velocity = i.velocity, this.canvasShader.a_StartColor = i.startColor, 
            this.canvasShader.a_EndColor = i.endColor, this.canvasShader.a_SizeRotation = i.sizeRotation, 
            this.canvasShader.a_Radius = i.radius, this.canvasShader.a_Radian = i.radian, this.canvasShader.a_AgeAddScale = i.durationAddScale, 
            this.canvasShader.oSize = this.textureWidth;
            var a = new E(), r = 0, n = this.settings.duration / (1 + i.durationAddScale), s = [];
            for (r = 0; r < n; r += this.step) s.push(this.canvasShader.getData(r));
            return a.id = this.particleList.length, this.particleList.push(a), a.setCmds(s), 
            a;
        }, i.addParticleArray = function(t, e) {
            if (this._ready) {
                var i;
                this.particleList.length < this._maxNumParticles ? (i = this._createAParticleData(t, e), 
                this.iList[i.id] = 0, this.activeParticles.push(i)) : this.deadParticles.length > 0 && (i = this.deadParticles.pop(), 
                this.iList[i.id] = 0, this.activeParticles.push(i));
            }
        }, i.advanceTime = function(t) {
            if (void 0 === t && (t = 1), this._ready) {
                var e, i = this.activeParticles, a = this.deadParticles, r = 0, n = i.length, s = 0, o = this.iList;
                for (r = n - 1; r > -1; r--) (s = o[(e = i[r]).id]) >= e.maxIndex ? (s = 0, i.splice(r, 1), 
                a.push(e)) : s += 1, o[e.id] = s;
            }
        }, i.render = function(t, e, i) {
            this._ready && (this.activeParticles.length < 1 || this.textureList.length < 2 || (this.settings.disableColor ? this.noColorRender(t, e, i) : this.canvasRender(t, e, i)));
        }, i.noColorRender = function(t, e, i) {
            var a, r, n = this.activeParticles, s = 0, o = n.length, l = NaN, h = this.pX, c = this.pY, u = 2 * -h, d = 2 * -c, m = 0, _ = (this.textureList, 
            this.iList), f = NaN;
            for (t.translate(e, i), f = t.ctx.globalAlpha, s = 0; s < o; s++) m = _[(a = n[s]).id], 
            (r = a.cmds[m]) && ((l = r[1]) <= .01 || (t.setAlpha(f * l), t.drawTextureWithTransform(this.texture, h, c, u, d, r[2], 1)));
            t.setAlpha(f), t.translate(-e, -i);
        }, i.canvasRender = function(t, e, i) {
            var a, r, n, s = this.activeParticles, o = 0, l = s.length, h = this.pX, c = this.pY, u = 2 * -h, d = 2 * -c, m = 0, _ = this.textureList, f = this.iList, p = NaN;
            for (t.translate(e, i), p = t.ctx.globalAlpha, n = t.ctx.globalCompositeOperation, 
            t.blendMode("lighter"), o = 0; o < l; o++) m = f[(a = s[o]).id], (r = a.cmds[m]) && (r[1] <= .01 || (t.save(), 
            t.transformByMatrix(r[2]), r[3] > .01 && (t.setAlpha(p * r[3]), t.drawTexture(_[0], h, c, u, d)), 
            r[4] > .01 && (t.setAlpha(p * r[4]), t.drawTexture(_[1], h, c, u, d)), r[5] > .01 && (t.setAlpha(p * r[5]), 
            t.drawTexture(_[2], h, c, u, d)), t.restore()));
            t.setAlpha(p), t.translate(-e, -i), t.blendMode(n);
        }, e.changeTexture = function(t, e, i) {
            return e || (e = []), e.length = 0, i && i.disableColor ? e.push(t, t, t) : v.copyArray(e, A.getRGBPic(t)), 
            e;
        }, e;
    }(), b = function(t) {
        function e(t) {
            this._vertexBuffer2D = null, this._indexBuffer2D = null, this.x = 0, this.y = 0, 
            this._blendFn = null, this._startTime = 0, this.sv = new F(), e.__super.call(this, t);
            var a = this;
            i.loader.load(this.settings.textureName, l.create(null, function(t) {
                t.bitmap.enableMerageInAtlas = !1, a.texture = t;
            })), this.sv.u_Duration = this.settings.duration, this.sv.u_Gravity = this.settings.gravity, 
            this.sv.u_EndVelocity = this.settings.endVelocity, this._blendFn = s.fns[t.blendState], 
            this.initialize(), this._vertexBuffer = this._vertexBuffer2D = y.create(-1, 35048), 
            this._indexBuffer = this._indexBuffer2D = h.create(35044), this.loadContent();
        }
        r(e, "laya.particle.ParticleTemplate2D", t);
        var a = e.prototype;
        return i.imps(a, {
            "laya.webgl.submit.ISubmit": !0
        }), a.getRenderType = function() {
            return -111;
        }, a.releaseRender = function() {}, a.addParticleArray = function(e, i) {
            e[0] += this.x, e[1] += this.y, t.prototype.addParticleArray.call(this, e, i);
        }, a.loadContent = function() {
            for (var t = new Uint16Array(6 * this.settings.maxPartices), e = 0; e < this.settings.maxPartices; e++) t[6 * e + 0] = 4 * e + 0, 
            t[6 * e + 1] = 4 * e + 1, t[6 * e + 2] = 4 * e + 2, t[6 * e + 3] = 4 * e + 0, t[6 * e + 4] = 4 * e + 2, 
            t[6 * e + 5] = 4 * e + 3;
            this._indexBuffer2D.clear(), this._indexBuffer2D.append(t), this._indexBuffer2D.upload();
        }, a.addNewParticlesToVertexBuffer = function() {
            this._vertexBuffer2D.clear(), this._vertexBuffer2D.append(this._vertices);
            var t = 0;
            this._firstNewElement < this._firstFreeElement ? (t = 4 * this._firstNewElement * this._floatCountPerVertex * 4, 
            this._vertexBuffer2D.subUpload(t, t, t + 4 * (this._firstFreeElement - this._firstNewElement) * this._floatCountPerVertex * 4)) : (t = 4 * this._firstNewElement * this._floatCountPerVertex * 4, 
            this._vertexBuffer2D.subUpload(t, t, t + 4 * (this.settings.maxPartices - this._firstNewElement) * this._floatCountPerVertex * 4), 
            this._firstFreeElement > 0 && (this._vertexBuffer2D.setNeedUpload(), this._vertexBuffer2D.subUpload(0, 0, 4 * this._firstFreeElement * this._floatCountPerVertex * 4))), 
            this._firstNewElement = this._firstFreeElement;
        }, a.renderSubmit = function() {
            return this.texture && this.texture.loaded && (this.update(i.timer.delta), this.sv.u_CurrentTime = this._currentTime, 
            this._firstNewElement != this._firstFreeElement && this.addNewParticlesToVertexBuffer(), 
            this.blend(), this._firstActiveElement != this._firstFreeElement && (C.mainContext, 
            this._vertexBuffer2D.bind(this._indexBuffer2D), this.sv.u_texture = this.texture.source, 
            this.sv.upload(), this._firstActiveElement < this._firstFreeElement ? C.mainContext.drawElements(4, 6 * (this._firstFreeElement - this._firstActiveElement), 5123, 6 * this._firstActiveElement * 2) : (C.mainContext.drawElements(4, 6 * (this.settings.maxPartices - this._firstActiveElement), 5123, 6 * this._firstActiveElement * 2), 
            this._firstFreeElement > 0 && C.mainContext.drawElements(4, 6 * this._firstFreeElement, 5123, 0)), 
            f.drawCall++), this._drawCounter++), 1;
        }, a.blend = function() {
            if (s.activeBlendFunction !== this._blendFn) {
                var t = C.mainContext;
                t.enable(3042), this._blendFn(t), s.activeBlendFunction = this._blendFn;
            }
        }, a.dispose = function() {
            this._vertexBuffer2D.dispose(), this._indexBuffer2D.dispose();
        }, e.activeBlendType = -1, e;
    }(w), F = function(t) {
        function e() {
            this.a_CornerTextureCoordinate = [ 4, 5126, !1, 116, 0 ], this.a_Position = [ 3, 5126, !1, 116, 16 ], 
            this.a_Velocity = [ 3, 5126, !1, 116, 28 ], this.a_StartColor = [ 4, 5126, !1, 116, 40 ], 
            this.a_EndColor = [ 4, 5126, !1, 116, 56 ], this.a_SizeRotation = [ 3, 5126, !1, 116, 72 ], 
            this.a_Radius = [ 2, 5126, !1, 116, 84 ], this.a_Radian = [ 4, 5126, !1, 116, 92 ], 
            this.a_AgeAddScale = [ 1, 5126, !1, 116, 108 ], this.a_Time = [ 1, 5126, !1, 116, 112 ], 
            this.u_CurrentTime = NaN, this.u_Duration = NaN, this.u_Gravity = null, this.u_EndVelocity = NaN, 
            this.u_texture = null, e.__super.call(this, 0, 0);
        }
        return r(e, "laya.particle.shader.value.ParticleShaderValue", x), e.prototype.upload = function() {
            this.refresh(), e.pShader.upload(this);
        }, a(e, [ "pShader", function() {
            return this.pShader = new N();
        } ]), e;
    }(), N = (function(e) {
        function a(t) {
            this._matrix4 = [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ], this._particleTemplate = null, 
            this._canvasTemplate = null, this._emitter = null, this.autoPlay = !0, a.__super.call(this), 
            t && this.setParticleSetting(t);
        }
        r(a, "laya.particle.Particle2D", e);
        var s = a.prototype;
        s.load = function(t) {
            i.loader.load(t, l.create(this, this.setParticleSetting), null, "json");
        }, s.setParticleSetting = function(e) {
            var a = this;
            if (!e) return this.stop();
            if (R.checkSetting(e), t.ConchParticleTemplate2D && !d.isWebGL || (this.customRenderEnable = !0), 
            d.isWebGL) this._particleTemplate = new b(e), this.graphics._saveToCmd(d.context._drawParticle, [ this._particleTemplate ]); else {
                if (d.isConchApp && t.ConchParticleTemplate2D) {
                    this._particleTemplate = new ConchParticleTemplate2D();
                    var r = this;
                    return i.loader.load(e.textureName, l.create(null, function(t) {
                        r._particleTemplate.texture = t, r._particleTemplate.settings = e, d.isConchNode ? r.graphics.drawParticle(r._particleTemplate) : r.graphics._saveToCmd(d.context._drawParticle, [ a._particleTemplate ]);
                    })), this._emitter = {
                        start: function() {}
                    }, this.play = this._particleTemplate.play.bind(this._particleTemplate), this.stop = this._particleTemplate.stop.bind(this._particleTemplate), 
                    void (this.autoPlay && this.play());
                }
                this._particleTemplate = this._canvasTemplate = new z(e);
            }
            this._emitter ? this._emitter.template = this._particleTemplate : this._emitter = new T(this._particleTemplate), 
            this.autoPlay && (this.emitter.start(), this.play());
        }, s.play = function() {
            this.timer.frameLoop(1, this, this._loop);
        }, s.stop = function() {
            this.timer.clear(this, this._loop);
        }, s._loop = function() {
            this.advanceTime(1 / 60);
        }, s.advanceTime = function(t) {
            void 0 === t && (t = 1), this._canvasTemplate && this._canvasTemplate.advanceTime(t), 
            this._emitter && this._emitter.advanceTime(t);
        }, s.customRender = function(t, e, i) {
            d.isWebGL && (this._matrix4[0] = t.ctx._curMat.a, this._matrix4[1] = t.ctx._curMat.b, 
            this._matrix4[4] = t.ctx._curMat.c, this._matrix4[5] = t.ctx._curMat.d, this._matrix4[12] = t.ctx._curMat.tx, 
            this._matrix4[13] = t.ctx._curMat.ty, this._particleTemplate.sv.u_mmat = this._matrix4), 
            this._canvasTemplate && this._canvasTemplate.render(t, e, i);
        }, s.destroy = function(t) {
            void 0 === t && (t = !0), this._particleTemplate instanceof laya.particle.ParticleTemplate2D && this._particleTemplate.dispose(), 
            e.prototype.destroy.call(this, t);
        }, n(0, s, "url", null, function(t) {
            this.load(t);
        }), n(0, s, "emitter", function() {
            return this._emitter;
        });
    }(_), function(t) {
        function e() {
            e.__super.call(this, e.vs, e.ps, "ParticleShader");
        }
        return r(e, "laya.particle.shader.ParticleShader", m), a(e, [ "vs", function() {
            return this.vs = "attribute vec4 a_CornerTextureCoordinate;\nattribute vec3 a_Position;\nattribute vec3 a_Velocity;\nattribute vec4 a_StartColor;\nattribute vec4 a_EndColor;\nattribute vec3 a_SizeRotation;\nattribute vec2 a_Radius;\nattribute vec4 a_Radian;\nattribute float a_AgeAddScale;\nattribute float a_Time;\n\nvarying vec4 v_Color;\nvarying vec2 v_TextureCoordinate;\n\nuniform float u_CurrentTime;\nuniform float u_Duration;\nuniform float u_EndVelocity;\nuniform vec3 u_Gravity;\n\n#ifdef PARTICLE3D\n uniform mat4 u_WorldMat;\n uniform mat4 u_View;\n uniform mat4 u_Projection;\n uniform vec2 u_ViewportScale;\n#else\n uniform vec2 size;\n uniform mat4 mmat;\n uniform mat4 u_mmat;\n#endif\n\nvec4 ComputeParticlePosition(in vec3 position, in vec3 velocity,in float age,in float normalizedAge)\n{\n\n   float startVelocity = length(velocity);//起始标量速度\n   float endVelocity = startVelocity * u_EndVelocity;//结束标量速度\n\n   float velocityIntegral = startVelocity * normalizedAge +(endVelocity - startVelocity) * normalizedAge *normalizedAge/2.0;//计算当前速度的标量（单位空间），vt=v0*t+(1/2)*a*(t^2)\n   \n   vec3 addPosition = normalize(velocity) * velocityIntegral * u_Duration;//计算受自身速度影响的位置，转换标量到矢量    \n   addPosition += u_Gravity * age * normalizedAge;//计算受重力影响的位置\n   \n   float radius=mix(a_Radius.x, a_Radius.y, normalizedAge); //计算粒子受半径和角度影响（无需计算角度和半径时，可用宏定义优化屏蔽此计算）\n   float radianHorizontal =mix(a_Radian.x,a_Radian.z,normalizedAge);\n   float radianVertical =mix(a_Radian.y,a_Radian.w,normalizedAge);\n   \n   float r =cos(radianVertical)* radius;\n   addPosition.y += sin(radianVertical) * radius;\n\t\n   addPosition.x += cos(radianHorizontal) *r;\n   addPosition.z += sin(radianHorizontal) *r;\n  \n   #ifdef PARTICLE3D\n   position+=addPosition;\n    return  u_Projection*u_View*u_WorldMat*(vec4(position, 1.0));\n   #else\n   addPosition.y=-addPosition.y;//2D粒子位置更新需要取负，2D粒子坐标系Y轴正向朝上\n   position+=addPosition;\n    return  vec4(position,1.0);\n   #endif\n}\n\nfloat ComputeParticleSize(in float startSize,in float endSize, in float normalizedAge)\n{    \n    float size = mix(startSize, endSize, normalizedAge);\n    \n\t#ifdef PARTICLE3D\n    //Project the size into screen coordinates.\n     return size * u_Projection[1][1];\n\t#else\n\t return size;\n\t#endif\n}\n\nmat2 ComputeParticleRotation(in float rot,in float age)\n{    \n    float rotation =rot * age;\n    //计算2x2旋转矩阵.\n    float c = cos(rotation);\n    float s = sin(rotation);\n    return mat2(c, -s, s, c);\n}\n\nvec4 ComputeParticleColor(in vec4 startColor,in vec4 endColor,in float normalizedAge)\n{\n\tvec4 color=mix(startColor,endColor,normalizedAge);\n    //硬编码设置，使粒子淡入很快，淡出很慢,6.7的缩放因子把置归一在0到1之间，可以谷歌x*(1-x)*(1-x)*6.7的制图表\n    color.a *= normalizedAge * (1.0-normalizedAge) * (1.0-normalizedAge) * 6.7;\n   \n    return color;\n}\n\nvoid main()\n{\n   float age = u_CurrentTime - a_Time;\n   age *= 1.0 + a_AgeAddScale;\n   float normalizedAge = clamp(age / u_Duration,0.0,1.0);\n   gl_Position = ComputeParticlePosition(a_Position, a_Velocity, age, normalizedAge);//计算粒子位置\n   float pSize = ComputeParticleSize(a_SizeRotation.x,a_SizeRotation.y, normalizedAge);\n   mat2 rotation = ComputeParticleRotation(a_SizeRotation.z, age);\n\t\n   #ifdef PARTICLE3D\n\tgl_Position.xy += (rotation*a_CornerTextureCoordinate.xy) * pSize * u_ViewportScale;\n   #else\n    mat4 mat=u_mmat*mmat;\n    gl_Position=vec4((mat*gl_Position).xy,0.0,1.0);\n\tgl_Position.xy += (rotation*a_CornerTextureCoordinate.xy) * pSize*vec2(mat[0][0],mat[1][1]);\n    gl_Position=vec4((gl_Position.x/size.x-0.5)*2.0,(0.5-gl_Position.y/size.y)*2.0,0.0,1.0);\n   #endif\n   \n   v_Color = ComputeParticleColor(a_StartColor,a_EndColor, normalizedAge);\n   v_TextureCoordinate =a_CornerTextureCoordinate.zw;\n}\n\n";
        }, "ps", function() {
            return this.ps = "#ifdef FSHIGHPRECISION\nprecision highp float;\n#else\nprecision mediump float;\n#endif\n\nvarying vec4 v_Color;\nvarying vec2 v_TextureCoordinate;\nuniform sampler2D u_texture;\n\nvoid main()\n{\t\n\tgl_FragColor=texture2D(u_texture,v_TextureCoordinate)*v_Color;\n\tgl_FragColor.xyz *= v_Color.w;\n}";
        } ]), e;
    }());
}(window, document, Laya), "function" == typeof define && define.amd && define("laya.core", [ "require", "exports" ], function(t, e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    for (var i in Laya) {
        var a = Laya[i];
        a && a.__isclass && (e[i] = a);
    }
});