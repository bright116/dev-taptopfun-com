!function(t, e, i) {
    i.un, i.uns;
    var a = i.static, r = i.class, s = i.getset, n = i.__newvec, h = laya.maths.Bezier, l = laya.utils.Browser, o = laya.utils.Byte, u = (laya.Const, 
    laya.events.Event, laya.events.EventDispatcher), p = laya.display.Graphics, c = laya.utils.Handler, _ = laya.net.Loader, d = laya.maths.MathUtil, f = laya.maths.Matrix, m = (laya.display.Node, 
    laya.maths.Rectangle), y = (laya.renders.Render, laya.resource.Resource), x = (laya.media.SoundChannel, 
    laya.media.SoundManager), g = laya.display.Sprite, D = laya.utils.Stat, M = laya.resource.Texture, v = (laya.resource.Texture2D, 
    laya.utils.Timer, laya.net.URL, laya.utils.Utils), A = function() {
        function SlotData() {
            this.name = null, this.displayArr = [];
        }
        return r(SlotData, "laya.ani.bone.SlotData"), SlotData.prototype.getDisplayByName = function(t) {
            for (var e = 0, i = this.displayArr.length; e < i; e++) if (this.displayArr[e].attachmentName == t) return e;
            return -1;
        }, SlotData;
    }(), I = function() {
        function MeshData() {
            this.texture = null, this.uvTransform = null, this.useUvTransform = !1, this.canvasPadding = 1, 
            this.uvs = new Float32Array([ 0, 0, 1, 0, 1, 1, 0, 1 ]), this.vertices = new Float32Array([ 0, 0, 100, 0, 100, 100, 0, 100 ]), 
            this.indexes = new Uint16Array([ 0, 1, 3, 3, 1, 2 ]);
        }
        return r(MeshData, "laya.ani.bone.canvasmesh.MeshData"), MeshData.prototype.getBounds = function() {
            return m._getWrapRec(this.vertices);
        }, MeshData;
    }(), S = function() {
        function AnimationNodeContent() {
            this.name = null, this.parentIndex = 0, this.parent = null, this.keyframeWidth = 0, 
            this.lerpType = 0, this.interpolationMethod = null, this.childs = null, this.keyFrame = null, 
            this.playTime = NaN, this.extenData = null, this.dataOffset = 0;
        }
        return r(AnimationNodeContent, "laya.ani.AnimationNodeContent"), AnimationNodeContent;
    }(), T = function() {
        function KeyFramesContent() {
            this.startTime = NaN, this.duration = NaN, this.interpolationData = null, this.data = null, 
            this.dData = null, this.nextData = null;
        }
        return r(KeyFramesContent, "laya.ani.KeyFramesContent"), KeyFramesContent;
    }(), b = function() {
        function TfConstraint(t, e) {
            this._data = null, this._bones = null, this.target = null, this.rotateMix = NaN, 
            this.translateMix = NaN, this.scaleMix = NaN, this.shearMix = NaN, this._temp = n(2, 0), 
            this._data = t, null == this._bones && (this._bones = []), this.target = e[t.targetIndex];
            var i, a = 0;
            for (a = 0, i = t.boneIndexs.length; a < i; a++) this._bones.push(e[t.boneIndexs[a]]);
            this.rotateMix = t.rotateMix, this.translateMix = t.translateMix, this.scaleMix = t.scaleMix, 
            this.shearMix = t.shearMix;
        }
        return r(TfConstraint, "laya.ani.bone.TfConstraint"), TfConstraint.prototype.apply = function() {
            for (var t, e = this.target.resultMatrix.a, i = this.target.resultMatrix.b, a = this.target.resultMatrix.c, r = this.target.resultMatrix.d, s = 0, n = this._bones.length; s < n; s++) {
                if (t = this._bones[s], this.rotateMix > 0) {
                    var h = t.resultMatrix.a, l = t.resultMatrix.b, o = t.resultMatrix.c, u = t.resultMatrix.d, p = Math.atan2(a, e) - Math.atan2(o, h) + this._data.offsetRotation * Math.PI / 180;
                    p > Math.PI ? p -= 2 * Math.PI : p < -Math.PI && (p += 2 * Math.PI), p *= this.rotateMix;
                    var c = Math.cos(p), _ = Math.sin(p);
                    t.resultMatrix.a = c * h - _ * o, t.resultMatrix.b = c * l - _ * u, t.resultMatrix.c = _ * h + c * o, 
                    t.resultMatrix.d = _ * l + c * u;
                }
                if (this.translateMix && (this._temp[0] = this._data.offsetX, this._temp[1] = this._data.offsetY, 
                this.target.localToWorld(this._temp), t.resultMatrix.tx += (this._temp[0] - t.resultMatrix.tx) * this.translateMix, 
                t.resultMatrix.ty += (this._temp[1] - t.resultMatrix.ty) * this.translateMix, t.updateChild()), 
                this.scaleMix > 0) {
                    var d = Math.sqrt(t.resultMatrix.a * t.resultMatrix.a + t.resultMatrix.c * t.resultMatrix.c), f = Math.sqrt(e * e + a * a), m = d > 1e-5 ? (d + (f - d + this._data.offsetScaleX) * this.scaleMix) / d : 0;
                    t.resultMatrix.a *= m, t.resultMatrix.c *= m, d = Math.sqrt(t.resultMatrix.b * t.resultMatrix.b + t.resultMatrix.d * t.resultMatrix.d), 
                    f = Math.sqrt(i * i + r * r), m = d > 1e-5 ? (d + (f - d + this._data.offsetScaleY) * this.scaleMix) / d : 0, 
                    t.resultMatrix.b *= m, t.resultMatrix.d *= m;
                }
                if (this.shearMix > 0) {
                    l = t.resultMatrix.b, u = t.resultMatrix.d;
                    var y = Math.atan2(u, l);
                    (p = Math.atan2(r, i) - Math.atan2(a, e) - (y - Math.atan2(t.resultMatrix.c, t.resultMatrix.a))) > Math.PI ? p -= 2 * Math.PI : p < -Math.PI && (p += 2 * Math.PI), 
                    p = y + (p + this._data.offsetShearY * Math.PI / 180) * this.shearMix, m = Math.sqrt(l * l + u * u), 
                    t.resultMatrix.b = Math.cos(p) * m, t.resultMatrix.d = Math.sin(p) * m;
                }
            }
        }, TfConstraint;
    }(), N = function() {
        function PathConstraintData() {
            this.name = null, this.target = null, this.positionMode = null, this.spacingMode = null, 
            this.rotateMode = null, this.offsetRotation = NaN, this.position = NaN, this.spacing = NaN, 
            this.rotateMix = NaN, this.translateMix = NaN, this.bones = [];
        }
        return r(PathConstraintData, "laya.ani.bone.PathConstraintData"), PathConstraintData;
    }(), C = function() {
        function UVTools() {}
        return r(UVTools, "laya.ani.bone.UVTools"), UVTools.getRelativeUV = function(t, e, i) {
            var a = t[0], r = t[2] - t[0], s = t[1], n = t[5] - t[1];
            i || (i = []), i.length = e.length;
            var h, l = 0;
            h = i.length;
            var o = 1 / r, u = 1 / n;
            for (l = 0; l < h; l += 2) i[l] = (e[l] - a) * o, i[l + 1] = (e[l + 1] - s) * u;
            return i;
        }, UVTools.getAbsoluteUV = function(t, e, i) {
            if (0 == t[0] && 0 == t[1] && 1 == t[4] && 1 == t[5]) return i ? (v.copyArray(i, e), 
            i) : e;
            var a = t[0], r = t[2] - t[0], s = t[1], n = t[5] - t[1];
            i || (i = []), i.length = e.length;
            var h, l = 0;
            for (h = i.length, l = 0; l < h; l += 2) i[l] = e[l] * r + a, i[l + 1] = e[l + 1] * n + s;
            return i;
        }, UVTools;
    }(), k = function() {
        function DeformSlotData() {
            this.deformSlotDisplayList = [];
        }
        return r(DeformSlotData, "laya.ani.bone.DeformSlotData"), DeformSlotData;
    }(), P = function() {
        function AnimationParser02() {}
        return r(AnimationParser02, "laya.ani.AnimationParser02"), AnimationParser02.READ_DATA = function() {
            AnimationParser02._DATA.offset = AnimationParser02._reader.getUint32(), AnimationParser02._DATA.size = AnimationParser02._reader.getUint32();
        }, AnimationParser02.READ_BLOCK = function() {
            for (var t = AnimationParser02._BLOCK.count = AnimationParser02._reader.getUint16(), e = AnimationParser02._BLOCK.blockStarts = [], i = AnimationParser02._BLOCK.blockLengths = [], a = 0; a < t; a++) e.push(AnimationParser02._reader.getUint32()), 
            i.push(AnimationParser02._reader.getUint32());
        }, AnimationParser02.READ_STRINGS = function() {
            var t = AnimationParser02._reader.getUint32(), e = AnimationParser02._reader.getUint16(), i = AnimationParser02._reader.pos;
            AnimationParser02._reader.pos = t + AnimationParser02._DATA.offset;
            for (var a = 0; a < e; a++) AnimationParser02._strings[a] = AnimationParser02._reader.readUTFString();
            AnimationParser02._reader.pos = i;
        }, AnimationParser02.parse = function(t, e) {
            AnimationParser02._templet = t, AnimationParser02._reader = e;
            e.__getBuffer();
            AnimationParser02.READ_DATA(), AnimationParser02.READ_BLOCK(), AnimationParser02.READ_STRINGS();
            for (var i = 0, a = AnimationParser02._BLOCK.count; i < a; i++) {
                var r = e.getUint16(), s = AnimationParser02._strings[r], n = AnimationParser02["READ_" + s];
                if (null == n) throw new Error("model file err,no this function:" + r + " " + s);
                n.call(null);
            }
        }, AnimationParser02.READ_ANIMATIONS = function() {
            var t = AnimationParser02._reader, e = t.__getBuffer(), i = 0, a = 0, r = 0, s = 0, n = t.getUint16(), h = [];
            for (h.length = n, i = 0; i < n; i++) h[i] = $.interpolation[t.getByte()];
            var l = t.getUint8();
            for (AnimationParser02._templet._anis.length = l, i = 0; i < l; i++) {
                var o = AnimationParser02._templet._anis[i] = new L();
                o.nodes = new Array();
                var u = o.name = AnimationParser02._strings[t.getUint16()];
                AnimationParser02._templet._aniMap[u] = i, o.bone3DMap = {}, o.playTime = t.getFloat32();
                var p = o.nodes.length = t.getInt16();
                for (o.totalKeyframeDatasLength = 0, a = 0; a < p; a++) {
                    var c = o.nodes[a] = new S();
                    c.keyframeWidth = n, c.childs = [];
                    var _ = t.getUint16();
                    _ >= 0 && (c.name = AnimationParser02._strings[_], o.bone3DMap[c.name] = a), c.keyFrame = new Array(), 
                    c.parentIndex = t.getInt16(), -1 == c.parentIndex ? c.parent = null : c.parent = o.nodes[c.parentIndex], 
                    o.totalKeyframeDatasLength += n, c.interpolationMethod = h, null != c.parent && c.parent.childs.push(c);
                    var d = t.getUint16();
                    c.keyFrame.length = d;
                    var f = null, m = null;
                    for (r = 0, s = d; r < s; r++) {
                        (f = c.keyFrame[r] = new T()).startTime = t.getFloat32(), m && (m.duration = f.startTime - m.startTime), 
                        f.dData = new Float32Array(n), f.nextData = new Float32Array(n);
                        var y = AnimationParser02._DATA.offset, x = t.getUint32(), g = 4 * n, D = e.slice(y + x, y + x + g);
                        f.data = new Float32Array(D), m = f;
                    }
                    f.duration = 0, c.playTime = o.playTime, AnimationParser02._templet._calculateKeyFrame(c, d, n);
                }
            }
        }, AnimationParser02._templet = null, AnimationParser02._reader = null, AnimationParser02._strings = [], 
        a(AnimationParser02, [ "_BLOCK", function() {
            return this._BLOCK = {
                count: 0
            };
        }, "_DATA", function() {
            return this._DATA = {
                offset: 0,
                size: 0
            };
        } ]), AnimationParser02;
    }(), F = function() {
        function AnimationParser01() {}
        return r(AnimationParser01, "laya.ani.AnimationParser01"), AnimationParser01.parse = function(t, e) {
            var i = e.__getBuffer(), a = 0, r = 0, s = 0, n = 0, h = 0, l = 0, u = 0, p = e.readUTFString();
            t._aniClassName = p;
            var c, _ = e.readUTFString().split("\n"), d = e.getUint8(), f = e.getUint32(), m = e.getUint32();
            f > 0 && (c = i.slice(f, m));
            var y = new o(c);
            for (m > 0 && (t._publicExtData = i.slice(m, i.byteLength)), t._useParent = !!e.getUint8(), 
            t._anis.length = d, a = 0; a < d; a++) {
                var x = t._anis[a] = new L();
                x.nodes = new Array();
                var g = x.name = _[e.getUint16()];
                t._aniMap[g] = a, x.bone3DMap = {}, x.playTime = e.getFloat32();
                var D = x.nodes.length = e.getUint8();
                for (x.totalKeyframeDatasLength = 0, r = 0; r < D; r++) {
                    var M = x.nodes[r] = new S();
                    M.childs = [];
                    var v = e.getInt16();
                    v >= 0 && (M.name = _[v], x.bone3DMap[M.name] = r), M.keyFrame = new Array(), M.parentIndex = e.getInt16(), 
                    -1 == M.parentIndex ? M.parent = null : M.parent = x.nodes[M.parentIndex], M.lerpType = e.getUint8();
                    var A = e.getUint32();
                    y.pos = A;
                    var I = M.keyframeWidth = y.getUint16();
                    if (x.totalKeyframeDatasLength += I, 0 === M.lerpType || 1 === M.lerpType) for (M.interpolationMethod = [], 
                    M.interpolationMethod.length = I, s = 0; s < I; s++) M.interpolationMethod[s] = $.interpolation[y.getUint8()];
                    null != M.parent && M.parent.childs.push(M);
                    var b = e.getUint16();
                    b > 0 && (M.extenData = i.slice(e.pos, e.pos + b), e.pos += b);
                    var N = e.getUint16();
                    M.keyFrame.length = N;
                    var C, k = 0;
                    for (s = 0, n = N; s < n; s++) {
                        if ((C = M.keyFrame[s] = new T()).duration = e.getFloat32(), C.startTime = k, 2 === M.lerpType) {
                            C.interpolationData = [];
                            var P, F = e.getUint8();
                            switch (P = e.getFloat32()) {
                              case 254:
                                for (C.interpolationData.length = I, u = 0; u < I; u++) C.interpolationData[u] = 0;
                                break;

                              case 255:
                                for (C.interpolationData.length = I, u = 0; u < I; u++) C.interpolationData[u] = 5;
                                break;

                              default:
                                for (C.interpolationData.push(P), l = 1; l < F; l++) C.interpolationData.push(e.getFloat32());
                            }
                        }
                        for (C.data = new Float32Array(I), C.dData = new Float32Array(I), C.nextData = new Float32Array(I), 
                        h = 0; h < I; h++) C.data[h] = e.getFloat32(), C.data[h] > -1e-8 && C.data[h] < 1e-8 && (C.data[h] = 0);
                        k += C.duration;
                    }
                    C.startTime = x.playTime, M.playTime = x.playTime, t._calculateKeyFrame(M, N, I);
                }
            }
        }, AnimationParser01;
    }(), w = function() {
        function SkinData() {
            this.name = null, this.slotArr = [];
        }
        return r(SkinData, "laya.ani.bone.SkinData"), SkinData;
    }(), B = function() {
        function IkConstraint(t, e) {
            this._targetBone = null, this._bones = null, this._data = null, this.name = null, 
            this.mix = NaN, this.bendDirection = NaN, this.isSpine = !0, this._sp = null, this.isDebug = !1, 
            this._data = t, this._targetBone = e[t.targetBoneIndex], this.isSpine = t.isSpine, 
            null == this._bones && (this._bones = []), this._bones.length = 0;
            for (var i = 0, a = t.boneIndexs.length; i < a; i++) this._bones.push(e[t.boneIndexs[i]]);
            this.name = t.name, this.mix = t.mix, this.bendDirection = t.bendDirection;
        }
        r(IkConstraint, "laya.ani.bone.IkConstraint");
        var t = IkConstraint.prototype;
        return t.apply = function() {
            switch (this._bones.length) {
              case 1:
                this._applyIk1(this._bones[0], this._targetBone.resultMatrix.tx, this._targetBone.resultMatrix.ty, this.mix);
                break;

              case 2:
                this.isSpine ? this._applyIk2(this._bones[0], this._bones[1], this._targetBone.resultMatrix.tx, this._targetBone.resultMatrix.ty, this.bendDirection, this.mix) : this._applyIk3(this._bones[0], this._bones[1], this._targetBone.resultMatrix.tx, this._targetBone.resultMatrix.ty, this.bendDirection, this.mix);
            }
        }, t._applyIk1 = function(t, e, i, a) {
            var r = t.parentBone, s = 1 / (r.resultMatrix.a * r.resultMatrix.d - r.resultMatrix.b * r.resultMatrix.c), n = e - r.resultMatrix.tx, h = i - r.resultMatrix.ty, l = (n * r.resultMatrix.d - h * r.resultMatrix.c) * s - t.transform.x, o = (h * r.resultMatrix.a - n * r.resultMatrix.b) * s - t.transform.y, u = Math.atan2(o, l) * IkConstraint.radDeg - 0 - t.transform.skX;
            t.transform.scX < 0 && (u += 180), u > 180 ? u -= 360 : u < -180 && (u += 360), 
            t.transform.skX = t.transform.skY = t.transform.skX + u * a, t.update();
        }, t.updatePos = function(t, e) {
            this._sp && this._sp.pos(t, e);
        }, t._applyIk2 = function(t, e, a, r, s, n) {
            if (0 != n) {
                var h = t.resultTransform.x, l = t.resultTransform.y, o = t.transform.scX, u = t.transform.scY, p = e.transform.scX, c = 0, _ = 0, d = 0;
                o < 0 ? (o = -o, c = 180, d = -1) : (c = 0, d = 1), u < 0 && (u = -u, d = -d), p < 0 ? (p = -p, 
                _ = 180) : _ = 0;
                var f = e.resultTransform.x, m = NaN, y = NaN, x = NaN, D = t.resultMatrix.a, M = t.resultMatrix.c, v = t.resultMatrix.b, A = t.resultMatrix.d, I = Math.abs(o - u) <= 1e-4;
                I ? (y = D * f + M * (m = e.resultTransform.y) + t.resultMatrix.tx, x = v * f + A * m + t.resultMatrix.ty) : (m = 0, 
                y = D * f + t.resultMatrix.tx, x = v * f + t.resultMatrix.ty), this.isDebug && (this._sp || (this._sp = new g(), 
                i.stage.addChild(this._sp)), this._sp.graphics.clear(), this._sp.graphics.drawCircle(a, r, 15, "#ffff00"), 
                this._sp.graphics.drawCircle(y, x, 15, "#ff00ff")), t.setRotation(Math.atan2(x - t.resultMatrix.ty, y - t.resultMatrix.tx));
                var S = t.parentBone;
                D = S.resultMatrix.a, M = S.resultMatrix.c, v = S.resultMatrix.b;
                var T = 1 / (D * (A = S.resultMatrix.d) - M * v), b = a - S.resultMatrix.tx, N = r - S.resultMatrix.ty, C = (b * A - N * M) * T - h, k = (N * D - b * v) * T - l, P = ((b = y - S.resultMatrix.tx) * A - (N = x - S.resultMatrix.ty) * M) * T - h, F = (N * D - b * v) * T - l, w = Math.sqrt(P * P + F * F), B = e.length * p, U = NaN, L = NaN;
                if (I) {
                    var R = (C * C + k * k - w * w - (B *= o) * B) / (2 * w * B);
                    R < -1 ? R = -1 : R > 1 && (R = 1), L = Math.acos(R) * s, D = w + B * R, M = B * Math.sin(L), 
                    U = Math.atan2(k * D - C * M, C * D + k * M);
                } else {
                    var V = (D = o * B) * D, E = (M = u * B) * M, O = C * C + k * k, K = Math.atan2(k, C), Y = -2 * E * w, X = E - V;
                    if ((A = Y * Y - 4 * X * (v = E * w * w + V * O - V * E)) > 0) {
                        var G = Math.sqrt(A);
                        Y < 0 && (G = -G);
                        var z = (G = -(Y + G) / 2) / X, W = v / G, q = Math.abs(z) < Math.abs(W) ? z : W;
                        q * q <= O && (N = Math.sqrt(O - q * q) * s, U = K - Math.atan2(N, q), L = Math.atan2(N / u, (q - w) / o));
                    }
                    var H = 0, Q = Number.MAX_VALUE, Z = 0, $ = 0, j = 0, J = 0, tt = 0, et = 0;
                    (A = (b = w + D) * b) > J && (j = 0, J = A, tt = b), (A = (b = w - D) * b) < Q && (H = Math.PI, 
                    Q = A, Z = b);
                    var it = Math.acos(-D * w / (V - E));
                    (A = (b = D * Math.cos(it) + w) * b + (N = M * Math.sin(it)) * N) < Q && (H = it, 
                    Q = A, Z = b, $ = N), A > J && (j = it, J = A, tt = b, et = N), O <= (Q + J) / 2 ? (U = K - Math.atan2($ * s, Z), 
                    L = H * s) : (U = K - Math.atan2(et * s, tt), L = j * s);
                }
                var at = Math.atan2(m, f) * d, rt = t.resultTransform.skX;
                (U = (U - at) * IkConstraint.radDeg + c - rt) > 180 ? U -= 360 : U < -180 && (U += 360), 
                t.resultTransform.x = h, t.resultTransform.y = l, t.resultTransform.skX = t.resultTransform.skY = rt + U * n, 
                rt = e.resultTransform.skX, rt %= 360, (L = ((L + at) * IkConstraint.radDeg - 0) * d + _ - rt) > 180 ? L -= 360 : L < -180 && (L += 360), 
                e.resultTransform.x = f, e.resultTransform.y = m, e.resultTransform.skX = e.resultTransform.skY = e.resultTransform.skY + L * n, 
                t.update();
            }
        }, t._applyIk3 = function(t, e, a, r, s, n) {
            if (0 != n) {
                var h, l, o = e.resultMatrix.a * e.length, u = e.resultMatrix.b * e.length, p = o * o + u * u, c = Math.sqrt(p), _ = t.resultMatrix.tx, d = t.resultMatrix.ty, f = e.resultMatrix.tx, m = e.resultMatrix.ty, y = f - _, x = m - d, D = y * y + x * x, M = Math.sqrt(D), v = (y = a - t.resultMatrix.tx) * y + (x = r - t.resultMatrix.ty) * x, A = Math.sqrt(v);
                if (c + M <= A || A + c <= M || A + M <= c) {
                    var I = NaN;
                    f = _ + (I = c + M <= A ? 1 : -1) * (a - _) * M / A, m = d + I * (r - d) * M / A;
                } else {
                    var S = (D - p + v) / (2 * v), T = Math.sqrt(D - S * S * v) / A, b = _ + y * S, N = d + x * S, C = -x * T, k = y * T;
                    s > 0 ? (f = b - C, m = N - k) : (f = b + C, m = N + k);
                }
                h = f, l = m, this.isDebug && (this._sp || (this._sp = new g(), i.stage.addChild(this._sp)), 
                this._sp.graphics.clear(), this._sp.graphics.drawCircle(_, d, 15, "#ff00ff"), this._sp.graphics.drawCircle(a, r, 15, "#ffff00"), 
                this._sp.graphics.drawCircle(h, l, 15, "#ff00ff"));
                var P, F;
                P = Math.atan2(l - t.resultMatrix.ty, h - t.resultMatrix.tx), t.setRotation(P), 
                (F = IkConstraint._tempMatrix).identity(), F.rotate(P), F.scale(t.resultMatrix.getScaleX(), t.resultMatrix.getScaleY()), 
                F.translate(t.resultMatrix.tx, t.resultMatrix.ty), F.copyTo(t.resultMatrix), t.updateChild();
                var w, B;
                w = Math.atan2(r - l, a - h), e.setRotation(w), (B = IkConstraint._tempMatrix).identity(), 
                B.rotate(w), B.scale(e.resultMatrix.getScaleX(), e.resultMatrix.getScaleY()), B.translate(h, l), 
                F.copyTo(e.resultMatrix), e.updateChild();
            }
        }, a(IkConstraint, [ "radDeg", function() {
            return this.radDeg = 180 / Math.PI;
        }, "degRad", function() {
            return this.degRad = Math.PI / 180;
        }, "_tempMatrix", function() {
            return this._tempMatrix = new f();
        } ]), IkConstraint;
    }(), U = function() {
        function TfConstraintData() {
            this.name = null, this.targetIndex = 0, this.rotateMix = NaN, this.translateMix = NaN, 
            this.scaleMix = NaN, this.shearMix = NaN, this.offsetRotation = NaN, this.offsetX = NaN, 
            this.offsetY = NaN, this.offsetScaleX = NaN, this.offsetScaleY = NaN, this.offsetShearY = NaN, 
            this.boneIndexs = [];
        }
        return r(TfConstraintData, "laya.ani.bone.TfConstraintData"), TfConstraintData;
    }(), L = function() {
        function AnimationContent() {
            this.nodes = null, this.name = null, this.playTime = NaN, this.bone3DMap = null, 
            this.totalKeyframeDatasLength = 0;
        }
        return r(AnimationContent, "laya.ani.AnimationContent"), AnimationContent;
    }(), R = (function() {
        function AnimationState() {}
        r(AnimationState, "laya.ani.AnimationState"), AnimationState.stopped = 0, AnimationState.paused = 1, 
        AnimationState.playing = 2;
    }(), function() {
        function DeformAniData() {
            this.skinName = null, this.deformSlotDataList = [];
        }
        return r(DeformAniData, "laya.ani.bone.DeformAniData"), DeformAniData;
    }()), V = function() {
        function SkinSlotDisplayData() {
            this.name = null, this.attachmentName = null, this.type = 0, this.transform = null, 
            this.width = NaN, this.height = NaN, this.texture = null, this.bones = null, this.uvs = null, 
            this.weights = null, this.triangles = null, this.vertices = null, this.lengths = null, 
            this.verLen = 0;
        }
        r(SkinSlotDisplayData, "laya.ani.bone.SkinSlotDisplayData");
        var t = SkinSlotDisplayData.prototype;
        return t.createTexture = function(t) {
            return this.texture ? this.texture : (this.texture = new M(t.bitmap, this.uvs), 
            this.uvs[0] > this.uvs[4] && this.uvs[1] > this.uvs[5] ? (this.texture.width = t.height, 
            this.texture.height = t.width, this.texture.offsetX = -t.offsetX, this.texture.offsetY = -t.offsetY, 
            this.texture.sourceWidth = t.sourceHeight, this.texture.sourceHeight = t.sourceWidth) : (this.texture.width = t.width, 
            this.texture.height = t.height, this.texture.offsetX = -t.offsetX, this.texture.offsetY = -t.offsetY, 
            this.texture.sourceWidth = t.sourceWidth, this.texture.sourceHeight = t.sourceHeight), 
            this.texture);
        }, t.destory = function() {
            this.texture && this.texture.destroy();
        }, SkinSlotDisplayData;
    }(), E = function() {
        function DeformSlotDisplayData() {
            this.boneSlot = null, this.slotIndex = -1, this.attachment = null, this.deformData = null, 
            this.frameIndex = 0, this.timeList = [], this.vectices = [], this.tweenKeyList = [];
        }
        r(DeformSlotDisplayData, "laya.ani.bone.DeformSlotDisplayData");
        var t = DeformSlotDisplayData.prototype;
        return t.binarySearch1 = function(t, e) {
            var i = 0, a = t.length - 2;
            if (0 == a) return 1;
            for (var r = a >>> 1; ;) {
                if (t[Math.floor(r + 1)] <= e ? i = r + 1 : a = r, i == a) return i + 1;
                r = i + a >>> 1;
            }
            return 0;
        }, t.apply = function(t, e, i) {
            if (void 0 === i && (i = 1), t += .05, !(this.timeList.length <= 0)) {
                var a = 0;
                if (!(t < this.timeList[0])) {
                    var r = this.vectices[0].length, s = [], n = this.binarySearch1(this.timeList, t);
                    if (this.frameIndex = n, t >= this.timeList[this.timeList.length - 1]) {
                        var h = this.vectices[this.vectices.length - 1];
                        if (i < 1) for (a = 0; a < r; a++) s[a] += (h[a] - s[a]) * i; else for (a = 0; a < r; a++) s[a] = h[a];
                        this.deformData = s;
                    } else {
                        this.tweenKeyList[this.frameIndex];
                        var l = this.vectices[this.frameIndex - 1], o = this.vectices[this.frameIndex], u = this.timeList[this.frameIndex - 1], p = this.timeList[this.frameIndex];
                        i = this.tweenKeyList[n - 1] ? (t - u) / (p - u) : 0;
                        var c = NaN;
                        for (a = 0; a < r; a++) c = l[a], s[a] = c + (o[a] - c) * i;
                        this.deformData = s;
                    }
                }
            }
        }, DeformSlotDisplayData;
    }(), O = function() {
        function BoneSlot() {
            this.name = null, this.parent = null, this.attachmentName = null, this.srcDisplayIndex = -1, 
            this.type = "src", this.templet = null, this.currSlotData = null, this.currTexture = null, 
            this.currDisplayData = null, this.displayIndex = -1, this.originalIndex = -1, this._diyTexture = null, 
            this._parentMatrix = null, this._resultMatrix = null, this._replaceDic = {}, this._curDiyUV = null, 
            this._curDiyVS = null, this._skinSprite = null, this.deformData = null, this._mVerticleArr = null, 
            this._preGraphicVerticle = null, this._preGraphicMatrix = null;
        }
        r(BoneSlot, "laya.ani.bone.BoneSlot");
        var t = BoneSlot.prototype;
        return t.showSlotData = function(t, e) {
            void 0 === e && (e = !0), this.currSlotData = t, e && (this.displayIndex = this.srcDisplayIndex), 
            this.currDisplayData = null, this.currTexture = null;
        }, t.showDisplayByName = function(t) {
            this.currSlotData && this.showDisplayByIndex(this.currSlotData.getDisplayByName(t));
        }, t.replaceDisplayByName = function(t, e) {
            if (this.currSlotData) {
                var i;
                i = this.currSlotData.getDisplayByName(t);
                var a;
                a = this.currSlotData.getDisplayByName(e), this.replaceDisplayByIndex(i, a);
            }
        }, t.replaceDisplayByIndex = function(t, e) {
            this.currSlotData && (this._replaceDic[t] = e, this.originalIndex == t && this.showDisplayByIndex(t));
        }, t.showDisplayByIndex = function(t) {
            if (this.originalIndex = t, null != this._replaceDic[t] && (t = this._replaceDic[t]), 
            this.currSlotData && t > -1 && t < this.currSlotData.displayArr.length) {
                if (this.displayIndex = t, this.currDisplayData = this.currSlotData.displayArr[t], 
                this.currDisplayData) {
                    var e = this.currDisplayData.name;
                    this.currTexture = this.templet.getTexture(e), this.currTexture && 0 == this.currDisplayData.type && this.currDisplayData.uvs && (this.currTexture = this.currDisplayData.createTexture(this.currTexture));
                }
            } else this.displayIndex = -1, this.currDisplayData = null, this.currTexture = null;
        }, t.replaceSkin = function(t) {
            this._diyTexture = t, this._curDiyUV && (this._curDiyUV.length = 0), this.currDisplayData && this._diyTexture == this.currDisplayData.texture && (this._diyTexture = null);
        }, t.setParentMatrix = function(t) {
            this._parentMatrix = t;
        }, t.getSaveVerticle = function(t) {
            return BoneSlot.useSameMatrixAndVerticle && this._preGraphicVerticle && BoneSlot.isSameArr(t, this._preGraphicVerticle) ? t = this._preGraphicVerticle : (t = v.copyArray([], t), 
            this._preGraphicVerticle = t), t;
        }, t.getSaveMatrix = function(t) {
            if (BoneSlot.useSameMatrixAndVerticle && this._preGraphicMatrix && BoneSlot.isSameMatrix(t, this._preGraphicMatrix)) t = this._preGraphicMatrix; else {
                var e = t.clone();
                t = e, this._preGraphicMatrix = t;
            }
            return t;
        }, t.draw = function(t, e, i, a) {
            if (void 0 === i && (i = !1), void 0 === a && (a = 1), (null != this._diyTexture || null != this.currTexture) && null != this.currDisplayData || this.currDisplayData && 3 == this.currDisplayData.type) {
                var r, s = this.currTexture;
                switch (this._diyTexture && (s = this._diyTexture), this.currDisplayData.type) {
                  case 0:
                    if (t) {
                        var n = this.getDisplayMatrix();
                        if (this._parentMatrix) {
                            var h = !1;
                            if (n) {
                                var l;
                                if (f.mul(n, this._parentMatrix, f.TEMP), i ? (null == this._resultMatrix && (this._resultMatrix = new f()), 
                                l = this._resultMatrix) : l = BoneSlot._tempResultMatrix, this._diyTexture && this.currDisplayData.uvs) {
                                    var o = BoneSlot._tempMatrix;
                                    o.identity(), this.currDisplayData.uvs[1] > this.currDisplayData.uvs[5] && (o.d = -1), 
                                    this.currDisplayData.uvs[0] > this.currDisplayData.uvs[4] && this.currDisplayData.uvs[1] > this.currDisplayData.uvs[5] && (h = !0, 
                                    o.rotate(-Math.PI / 2)), f.mul(o, f.TEMP, l);
                                } else f.TEMP.copyTo(l);
                                i || (l = this.getSaveMatrix(l)), l._checkTransform(), h ? t.drawTexture(s, -this.currDisplayData.height / 2, -this.currDisplayData.width / 2, this.currDisplayData.height, this.currDisplayData.width, l, a) : t.drawTexture(s, -this.currDisplayData.width / 2, -this.currDisplayData.height / 2, this.currDisplayData.width, this.currDisplayData.height, l, a);
                            }
                        }
                    }
                    break;

                  case 1:
                    if (i ? (null == this._skinSprite && (this._skinSprite = BoneSlot.createSkinMesh()), 
                    r = this._skinSprite) : r = BoneSlot.createSkinMesh(), null == r) return;
                    var u;
                    if (null == this.currDisplayData.bones) {
                        var p, c = this.currDisplayData.weights;
                        this.deformData && (c = this.deformData), this._diyTexture ? (this._curDiyUV || (this._curDiyUV = []), 
                        0 == this._curDiyUV.length && (this._curDiyUV = C.getRelativeUV(this.currTexture.uv, this.currDisplayData.uvs, this._curDiyUV), 
                        this._curDiyUV = C.getAbsoluteUV(this._diyTexture.uv, this._curDiyUV, this._curDiyUV)), 
                        p = this._curDiyUV) : p = this.currDisplayData.uvs, this._mVerticleArr = c;
                        this.currDisplayData.triangles.length;
                        u = this.currDisplayData.triangles, this.deformData && (i || (this._mVerticleArr = this.getSaveVerticle(this._mVerticleArr))), 
                        r.init2(s, u, this._mVerticleArr, p);
                        var _, d = this.getDisplayMatrix();
                        if (this._parentMatrix) if (d) f.mul(d, this._parentMatrix, f.TEMP), i ? (null == this._resultMatrix && (this._resultMatrix = new f()), 
                        _ = this._resultMatrix) : _ = BoneSlot._tempResultMatrix, f.TEMP.copyTo(_), i || (_ = this.getSaveMatrix(_)), 
                        r.transform = _;
                    } else this.skinMesh(e, r);
                    t.drawSkin(r, a);
                    break;

                  case 2:
                    if (i ? (null == this._skinSprite && (this._skinSprite = BoneSlot.createSkinMesh()), 
                    r = this._skinSprite) : r = BoneSlot.createSkinMesh(), null == r) return;
                    this.skinMesh(e, r), t.drawSkin(r, a);
                }
            }
        }, t.skinMesh = function(t, e) {
            var i, a = this.currTexture, r = this.currDisplayData.bones;
            this._diyTexture ? (a = this._diyTexture, this._curDiyUV || (this._curDiyUV = []), 
            0 == this._curDiyUV.length && (this._curDiyUV = C.getRelativeUV(this.currTexture.uv, this.currDisplayData.uvs, this._curDiyUV), 
            this._curDiyUV = C.getAbsoluteUV(this._diyTexture.uv, this._curDiyUV, this._curDiyUV)), 
            i = this._curDiyUV) : i = this.currDisplayData.uvs;
            var s, n, h, l = this.currDisplayData.weights, o = this.currDisplayData.triangles, u = 0, p = 0, c = 0, _ = NaN, d = NaN, f = 0, m = 0, y = 0, x = 0;
            if (BoneSlot._tempVerticleArr.length = 0, h = BoneSlot._tempVerticleArr, this.deformData && this.deformData.length > 0) {
                var g = 0;
                for (y = 0, x = r.length; y < x; ) {
                    for (c = r[y++] + y, u = 0, p = 0; y < c; y++) n = t[r[y]], _ = l[f] + this.deformData[g++], 
                    d = l[f + 1] + this.deformData[g++], m = l[f + 2], u += (_ * n.a + d * n.c + n.tx) * m, 
                    p += (_ * n.b + d * n.d + n.ty) * m, f += 3;
                    h.push(u, p);
                }
            } else for (y = 0, x = r.length; y < x; ) {
                for (c = r[y++] + y, u = 0, p = 0; y < c; y++) n = t[r[y]], _ = l[f], d = l[f + 1], 
                m = l[f + 2], u += (_ * n.a + d * n.c + n.tx) * m, p += (_ * n.b + d * n.d + n.ty) * m, 
                f += 3;
                h.push(u, p);
            }
            this._mVerticleArr = h, s = o, this._mVerticleArr = this.getSaveVerticle(this._mVerticleArr), 
            e.init2(a, s, this._mVerticleArr, i);
        }, t.drawBonePoint = function(t) {
            t && this._parentMatrix && t.drawCircle(this._parentMatrix.tx, this._parentMatrix.ty, 5, "#ff0000");
        }, t.getDisplayMatrix = function() {
            return this.currDisplayData ? this.currDisplayData.transform.getMatrix() : null;
        }, t.getMatrix = function() {
            return this._resultMatrix;
        }, t.copy = function() {
            var t = new BoneSlot();
            return t.type = "copy", t.name = this.name, t.attachmentName = this.attachmentName, 
            t.srcDisplayIndex = this.srcDisplayIndex, t.parent = this.parent, t.displayIndex = this.displayIndex, 
            t.templet = this.templet, t.currSlotData = this.currSlotData, t.currTexture = this.currTexture, 
            t.currDisplayData = this.currDisplayData, t;
        }, BoneSlot.createSkinMesh = function() {
            return new Z();
        }, BoneSlot.isSameArr = function(t, e) {
            if (t.length != e.length) return !1;
            var i, a = 0;
            for (i = t.length, a = 0; a < i; a++) if (t[a] != e[a]) return !1;
            return !0;
        }, BoneSlot.isSameMatrix = function(t, e) {
            return t.a == e.a && t.b == e.b && t.c == e.c && t.d == e.d && Math.abs(t.tx - e.tx) < 1e-5 && Math.abs(t.ty - e.ty) < 1e-5;
        }, BoneSlot.useSameMatrixAndVerticle = !0, BoneSlot._tempVerticleArr = [], a(BoneSlot, [ "_tempMatrix", function() {
            return this._tempMatrix = new f();
        }, "_tempResultMatrix", function() {
            return this._tempResultMatrix = new f();
        } ]), BoneSlot;
    }(), K = function() {
        function PathConstraint(t, e) {
            this.target = null, this.data = null, this.bones = null, this.position = NaN, this.spacing = NaN, 
            this.rotateMix = NaN, this.translateMix = NaN, this._debugKey = !1, this._spaces = null, 
            this._segments = [], this._curves = [], this.data = t, this.position = t.position, 
            this.spacing = t.spacing, this.rotateMix = t.rotateMix, this.translateMix = t.translateMix, 
            this.bones = [];
            for (var i = this.data.bones, a = 0, r = i.length; a < r; a++) this.bones.push(e[i[a]]);
        }
        r(PathConstraint, "laya.ani.bone.PathConstraint");
        var t = PathConstraint.prototype;
        return t.apply = function(t, e) {
            if (this.target) {
                var i = this.translateMix, a = this.translateMix, r = a > 0, s = this.data.spacingMode, n = "length" == s, h = this.data.rotateMode, l = "tangent" == h, o = "chainScale" == h, u = [], p = this.bones.length, c = l ? p : p + 1, _ = [];
                this._spaces = _, _[0] = this.position;
                var d = this.spacing;
                if (o || n) for (var f = 0, m = c - 1; f < m; ) {
                    var y = this.bones[f], x = y.length, g = x * y.resultMatrix.a, D = x * y.resultMatrix.b;
                    x = Math.sqrt(g * g + D * D), o && (u[f] = x), _[++f] = n ? Math.max(0, x + d) : d;
                } else for (f = 1; f < c; f++) _[f] = d;
                var M = this.computeWorldPositions(this.target, t, e, c, l, "percent" == this.data.positionMode, "percent" == s);
                if (this._debugKey) {
                    for (f = 0; f < M.length; f++) e.drawCircle(M[f++], M[f++], 5, "#00ff00");
                    var v = [];
                    for (f = 0; f < M.length; f++) v.push(M[f++], M[f++]);
                    e.drawLines(0, 0, v, "#ff0000");
                }
                var A = M[0], I = M[1], S = this.data.offsetRotation, T = "chain" == h && 0 == S, b = NaN;
                for (f = 0, b = 3; f < p; f++, b += 3) {
                    (y = this.bones[f]).resultMatrix.tx += (A - y.resultMatrix.tx) * i, y.resultMatrix.ty += (I - y.resultMatrix.ty) * i;
                    var N = (g = M[b]) - A, C = (D = M[b + 1]) - I;
                    if (o && 0 != (x = u[f])) {
                        var k = (Math.sqrt(N * N + C * C) / x - 1) * a + 1;
                        y.resultMatrix.a *= k, y.resultMatrix.c *= k;
                    }
                    if (A = g, I = D, r) {
                        var P = y.resultMatrix.a, F = y.resultMatrix.c, w = y.resultMatrix.b, B = y.resultMatrix.d, U = NaN, L = NaN, R = NaN;
                        U = l ? M[b - 1] : 0 == _[f + 1] ? M[b + 2] : Math.atan2(C, N), U -= Math.atan2(w, P) - S / 180 * Math.PI, 
                        T && (L = Math.cos(U), R = Math.sin(U), A += ((x = y.length) * (L * P - R * w) - N) * a, 
                        I += (x * (R * P + L * w) - C) * a), U > Math.PI ? U -= 2 * Math.PI : U < -Math.PI && (U += 2 * Math.PI), 
                        U *= a, L = Math.cos(U), R = Math.sin(U), y.resultMatrix.a = L * P - R * w, y.resultMatrix.c = L * F - R * B, 
                        y.resultMatrix.b = R * P + L * w, y.resultMatrix.d = R * F + L * B;
                    }
                }
            }
        }, t.computeWorldVertices2 = function(t, e, i, a, r, s) {
            var n, h, l = t.currDisplayData.bones, o = t.currDisplayData.weights, u = t.currDisplayData.triangles, p = 0, c = 0, _ = 0, d = 0, f = 0, m = 0, y = 0, x = 0, g = 0, D = 0, M = 0;
            if (null != l) {
                for (p = 0; p < i; p += 2) c += (d = l[c]) + 1, _ += d;
                var v = e;
                for (f = s, m = 3 * _; f < a; f += 2) {
                    for (y = 0, x = 0, d = l[c++], d += c; c < d; c++, m += 3) {
                        n = v[l[c]].resultMatrix, g = o[m], D = o[m + 1];
                        var A = o[m + 2];
                        y += (g * n.a + D * n.c + n.tx) * A, x += (g * n.b + D * n.d + n.ty) * A;
                    }
                    r[f] = y, r[f + 1] = x;
                }
            } else {
                var I, S;
                if (u || (u = o), t.deformData && (u = t.deformData), I = t.parent, e) for (M = e.length, 
                p = 0; p < M; p++) if (e[p].name == I) {
                    h = e[p];
                    break;
                }
                h && (S = h.resultMatrix), S || (S = PathConstraint._tempMt);
                var T = S.tx, b = S.ty, N = S.a, C = S.b, k = S.c, P = S.d;
                for (h && (P *= h.d), c = i, f = s; f < a; c += 2, f += 2) g = u[c], D = u[c + 1], 
                r[f] = g * N + D * C + T, r[f + 1] = -(g * k + D * P + b);
            }
        }, t.computeWorldPositions = function(t, e, i, a, r, s, n) {
            t.currDisplayData.bones, t.currDisplayData.weights, t.currDisplayData.triangles;
            var h = [], l = 0, o = t.currDisplayData.verLen, u = this.position, p = this._spaces, c = [], _ = [], d = o / 6, f = -1, m = NaN, y = 0, x = 0, g = NaN, D = NaN, M = NaN, v = NaN;
            if (d--, o -= 4, this.computeWorldVertices2(t, e, 2, o, h, 0), this._debugKey) for (l = 0; l < h.length; ) i.drawCircle(h[l++], h[l++], 10, "#ff0000");
            c = h, this._curves.length = d;
            var A = this._curves;
            m = 0;
            var I = c[0], S = c[1], T = 0, b = 0, N = 0, C = 0, k = 0, P = 0, F = NaN, w = NaN, B = NaN, U = NaN, L = NaN, R = NaN, V = NaN, E = NaN, O = 0;
            for (l = 0, O = 2; l < d; l++, O += 6) T = c[O], b = c[O + 1], N = c[O + 2], C = c[O + 3], 
            L = 2 * (F = .1875 * (I - 2 * T + N)) + (B = .09375 * (3 * (T - N) - I + (k = c[O + 4]))), 
            R = 2 * (w = .1875 * (S - 2 * b + C)) + (U = .09375 * (3 * (b - C) - S + (P = c[O + 5]))), 
            V = .75 * (T - I) + F + .16666667 * B, E = .75 * (b - S) + w + .16666667 * U, m += Math.sqrt(V * V + E * E), 
            V += L, E += R, L += B, R += U, m += Math.sqrt(V * V + E * E), V += L, E += R, m += Math.sqrt(V * V + E * E), 
            V += L + B, E += R + U, m += Math.sqrt(V * V + E * E), A[l] = m, I = k, S = P;
            if (s && (u *= m), n) for (l = 0; l < a; l++) p[l] *= m;
            var K = this._segments, Y = 0, X = 0;
            for (l = 0, y = 0, x = 0, X = 0; l < a; l++, y += 3) if ((g = u += D = p[l]) < 0) this.addBeforePosition(g, c, 0, _, y); else if (g > m) this.addAfterPosition(g - m, c, o - 4, _, y); else {
                for (;;x++) if (!(g > (v = A[x]))) {
                    0 == x ? g /= v : g = (g - (M = A[x - 1])) / (v - M);
                    break;
                }
                if (x != f) {
                    f = x;
                    var G = 6 * x;
                    for (I = c[G], S = c[G + 1], T = c[G + 2], b = c[G + 3], N = c[G + 4], C = c[G + 5], 
                    L = 2 * (F = .03 * (I - 2 * T + N)) + (B = .006 * (3 * (T - N) - I + (k = c[G + 6]))), 
                    R = 2 * (w = .03 * (S - 2 * b + C)) + (U = .006 * (3 * (b - C) - S + (P = c[G + 7]))), 
                    V = .3 * (T - I) + F + .16666667 * B, E = .3 * (b - S) + w + .16666667 * U, Y = Math.sqrt(V * V + E * E), 
                    K[0] = Y, G = 1; G < 8; G++) V += L, E += R, L += B, R += U, Y += Math.sqrt(V * V + E * E), 
                    K[G] = Y;
                    V += L, E += R, Y += Math.sqrt(V * V + E * E), K[8] = Y, V += L + B, E += R + U, 
                    Y += Math.sqrt(V * V + E * E), K[9] = Y, X = 0;
                }
                for (g *= Y; ;X++) if (!(g > (v = K[X]))) {
                    0 == X ? g /= v : g = X + (g - (M = K[X - 1])) / (v - M);
                    break;
                }
                this.addCurvePosition(.1 * g, I, S, T, b, N, C, k, P, _, y, r || l > 0 && 0 == D);
            }
            return _;
        }, t.addBeforePosition = function(t, e, i, a, r) {
            var s = e[i], n = e[i + 1], h = e[i + 2] - s, l = e[i + 3] - n, o = Math.atan2(l, h);
            a[r] = s + t * Math.cos(o), a[r + 1] = n + t * Math.sin(o), a[r + 2] = o;
        }, t.addAfterPosition = function(t, e, i, a, r) {
            var s = e[i + 2], n = e[i + 3], h = s - e[i], l = n - e[i + 1], o = Math.atan2(l, h);
            a[r] = s + t * Math.cos(o), a[r + 1] = n + t * Math.sin(o), a[r + 2] = o;
        }, t.addCurvePosition = function(t, e, i, a, r, s, n, h, l, o, u, p) {
            0 == t && (t = 1e-4);
            var c = t * t, _ = c * t, d = 1 - t, f = d * d, m = f * d, y = d * t, x = 3 * y, g = d * x, D = x * t, M = e * m + a * g + s * D + h * _, v = i * m + r * g + n * D + l * _;
            o[u] = M, o[u + 1] = v, o[u + 2] = p ? Math.atan2(v - (i * f + r * y * 2 + n * c), M - (e * f + a * y * 2 + s * c)) : 0;
        }, PathConstraint.NONE = -1, PathConstraint.BEFORE = -2, PathConstraint.AFTER = -3, 
        a(PathConstraint, [ "_tempMt", function() {
            return this._tempMt = new f();
        } ]), PathConstraint;
    }(), Y = function() {
        function Transform() {
            this.skX = 0, this.skY = 0, this.scX = 1, this.scY = 1, this.x = 0, this.y = 0, 
            this.skewX = 0, this.skewY = 0, this.mMatrix = null;
        }
        r(Transform, "laya.ani.bone.Transform");
        var t = Transform.prototype;
        return t.initData = function(t) {
            null != t.x && (this.x = t.x), null != t.y && (this.y = t.y), null != t.skX && (this.skX = t.skX), 
            null != t.skY && (this.skY = t.skY), null != t.scX && (this.scX = t.scX), null != t.scY && (this.scY = t.scY);
        }, t.getMatrix = function() {
            var t;
            return (t = this.mMatrix ? this.mMatrix : this.mMatrix = new f()).identity(), t.scale(this.scX, this.scY), 
            (this.skewX || this.skewY) && this.skew(t, this.skewX * Math.PI / 180, this.skewY * Math.PI / 180), 
            t.rotate(this.skX * Math.PI / 180), t.translate(this.x, this.y), t;
        }, t.skew = function(t, e, i) {
            var a = Math.sin(i), r = Math.cos(i), s = Math.sin(e), n = Math.cos(e);
            return t.setTo(t.a * n - t.b * a, t.a * s + t.b * r, t.c * n - t.d * a, t.c * s + t.d * r, t.tx * n - t.ty * a, t.tx * s + t.ty * r), 
            t;
        }, Transform;
    }(), X = function() {
        function DrawOrderData() {
            this.time = NaN, this.drawOrder = [];
        }
        return r(DrawOrderData, "laya.ani.bone.DrawOrderData"), DrawOrderData;
    }(), G = function() {
        function BezierLerp() {}
        return r(BezierLerp, "laya.ani.math.BezierLerp"), BezierLerp.getBezierRate = function(t, e, i, a, r) {
            var s = BezierLerp._getBezierParamKey(e, i, a, r), n = 100 * s + t;
            if (BezierLerp._bezierResultCache[n]) return BezierLerp._bezierResultCache[n];
            var h, l = BezierLerp._getBezierPoints(e, i, a, r, s), o = 0;
            for (h = l.length, o = 0; o < h; o += 2) if (t <= l[o]) return BezierLerp._bezierResultCache[n] = l[o + 1], 
            l[o + 1];
            return BezierLerp._bezierResultCache[n] = 1, 1;
        }, BezierLerp._getBezierParamKey = function(t, e, i, a) {
            return 100 * (100 * (100 * (100 * t + e) + i) + a);
        }, BezierLerp._getBezierPoints = function(t, e, i, a, r) {
            return BezierLerp._bezierPointsCache[r] ? BezierLerp._bezierPointsCache[r] : (s = [ 0, 0, t, e, i, a, 1, 1 ], 
            n = new h().getBezierPoints(s, 100, 3), BezierLerp._bezierPointsCache[r] = n, n);
            var s, n;
        }, BezierLerp._bezierResultCache = {}, BezierLerp._bezierPointsCache = {}, BezierLerp;
    }(), z = function() {
        function Bone() {
            this.name = null, this.root = null, this.parentBone = null, this.length = 10, this.transform = null, 
            this.inheritScale = !0, this.inheritRotation = !0, this.rotation = NaN, this.resultRotation = NaN, 
            this.d = -1, this._tempMatrix = null, this._sprite = null, this.resultTransform = new Y(), 
            this.resultMatrix = new f(), this._children = [];
        }
        r(Bone, "laya.ani.bone.Bone");
        var t = Bone.prototype;
        return t.setTempMatrix = function(t) {
            this._tempMatrix = t;
            var e, i = 0;
            for (i = 0, e = this._children.length; i < e; i++) this._children[i].setTempMatrix(this._tempMatrix);
        }, t.update = function(t) {
            var e;
            if (this.rotation = this.transform.skX, t) e = this.resultTransform.getMatrix(), 
            f.mul(e, t, this.resultMatrix), this.resultRotation = this.rotation; else if (this.resultRotation = this.rotation + this.parentBone.resultRotation, 
            this.parentBone) if (this.inheritRotation && this.inheritScale) e = this.resultTransform.getMatrix(), 
            f.mul(e, this.parentBone.resultMatrix, this.resultMatrix); else {
                var i = this.parentBone, a = NaN, r = NaN, s = NaN, n = this.parentBone.resultMatrix;
                e = this.resultTransform.getMatrix();
                var h = n.a * e.tx + n.c * e.ty + n.tx, l = n.b * e.tx + n.d * e.ty + n.ty, o = new f();
                this.inheritRotation ? (a = Math.atan2(i.resultMatrix.b, i.resultMatrix.a), r = Math.cos(a), 
                s = Math.sin(a), o.setTo(r, s, -s, r, 0, 0), f.mul(this._tempMatrix, o, f.TEMP), 
                f.TEMP.copyTo(o), e = this.resultTransform.getMatrix(), f.mul(e, o, this.resultMatrix), 
                this.resultTransform.scX * this.resultTransform.scY < 0 && this.resultMatrix.rotate(.5 * Math.PI), 
                this.resultMatrix.tx = h, this.resultMatrix.ty = l) : (this.inheritScale, e = this.resultTransform.getMatrix(), 
                f.TEMP.identity(), f.TEMP.d = this.d, f.mul(e, f.TEMP, this.resultMatrix), this.resultMatrix.tx = h, 
                this.resultMatrix.ty = l);
            } else (e = this.resultTransform.getMatrix()).copyTo(this.resultMatrix);
            var u, p = 0;
            for (p = 0, u = this._children.length; p < u; p++) this._children[p].update();
        }, t.updateChild = function() {
            var t, e = 0;
            for (e = 0, t = this._children.length; e < t; e++) this._children[e].update();
        }, t.setRotation = function(t) {
            this._sprite && (this._sprite.rotation = 180 * t / Math.PI);
        }, t.updateDraw = function(t, e) {
            Bone.ShowBones && !Bone.ShowBones[this.name] || (this._sprite ? (this._sprite.x = t + this.resultMatrix.tx, 
            this._sprite.y = e + this.resultMatrix.ty) : (this._sprite = new g(), this._sprite.graphics.drawCircle(0, 0, 5, "#ff0000"), 
            this._sprite.graphics.drawLine(0, 0, this.length, 0, "#00ff00"), this._sprite.graphics.fillText(this.name, 0, 0, "20px Arial", "#00ff00", "center"), 
            i.stage.addChild(this._sprite), this._sprite.x = t + this.resultMatrix.tx, this._sprite.y = e + this.resultMatrix.ty));
            var a, r = 0;
            for (r = 0, a = this._children.length; r < a; r++) this._children[r].updateDraw(t, e);
        }, t.addChild = function(t) {
            this._children.push(t), t.parentBone = this;
        }, t.findBone = function(t) {
            if (this.name == t) return this;
            var e, i, a = 0;
            for (a = 0, e = this._children.length; a < e; a++) if (i = this._children[a].findBone(t)) return i;
            return null;
        }, t.localToWorld = function(t) {
            var e = t[0], i = t[1];
            t[0] = e * this.resultMatrix.a + i * this.resultMatrix.c + this.resultMatrix.tx, 
            t[1] = e * this.resultMatrix.b + i * this.resultMatrix.d + this.resultMatrix.ty;
        }, Bone.ShowBones = {}, Bone;
    }(), W = function() {
        function EventData() {
            this.name = null, this.intValue = 0, this.floatValue = NaN, this.stringValue = null, 
            this.audioValue = null, this.time = NaN;
        }
        return r(EventData, "laya.ani.bone.EventData"), EventData;
    }(), q = function() {
        function IkConstraintData() {
            this.name = null, this.targetBoneName = null, this.bendDirection = 1, this.mix = 1, 
            this.isSpine = !0, this.targetBoneIndex = -1, this.boneNames = [], this.boneIndexs = [];
        }
        return r(IkConstraintData, "laya.ani.bone.IkConstraintData"), IkConstraintData;
    }(), H = function(t) {
        function AnimationPlayer() {
            this._destroyed = !1, this._templet = null, this._currentTime = NaN, this._currentFrameTime = NaN, 
            this._playStart = NaN, this._playEnd = NaN, this._playDuration = NaN, this._overallDuration = NaN, 
            this._stopWhenCircleFinish = !1, this._elapsedPlaybackTime = NaN, this._startUpdateLoopCount = NaN, 
            this._currentAnimationClipIndex = 0, this._currentKeyframeIndex = 0, this._paused = !1, 
            this._cacheFrameRate = 0, this._cacheFrameRateInterval = NaN, this._cachePlayRate = NaN, 
            this.isCache = !0, this.playbackRate = 1, this.returnToZeroStopped = !1, AnimationPlayer.__super.call(this), 
            this._destroyed = !1, this._currentAnimationClipIndex = -1, this._currentKeyframeIndex = -1, 
            this._currentTime = 0, this._overallDuration = Number.MAX_VALUE, this._stopWhenCircleFinish = !1, 
            this._elapsedPlaybackTime = 0, this._startUpdateLoopCount = -1, this._cachePlayRate = 1, 
            this.cacheFrameRate = 60, this.returnToZeroStopped = !1;
        }
        r(AnimationPlayer, "laya.ani.AnimationPlayer", u);
        var e = AnimationPlayer.prototype;
        return i.imps(e, {
            "laya.resource.IDestroy": !0
        }), e._onTempletLoadedComputeFullKeyframeIndices = function(t, e, i) {
            this._templet === i && this._cachePlayRate === t && this._cacheFrameRate === e && this._computeFullKeyframeIndices();
        }, e._computeFullKeyframeIndices = function() {}, e._onAnimationTempletLoaded = function() {
            this.destroyed || this._calculatePlayDuration();
        }, e._calculatePlayDuration = function() {
            if (0 !== this.state) {
                var t = this._templet.getAniDuration(this._currentAnimationClipIndex);
                0 === this._playEnd && (this._playEnd = t), this._playEnd > t && (this._playEnd = t), 
                this._playDuration = this._playEnd - this._playStart;
            }
        }, e._setPlayParams = function(t, e) {
            this._currentTime = t, this._currentKeyframeIndex = Math.floor(this.currentPlayTime / e + .01), 
            this._currentFrameTime = this._currentKeyframeIndex * e;
        }, e._setPlayParamsWhenStop = function(t, e) {
            this._currentTime = t, this._currentKeyframeIndex = Math.floor(t / e + .01), this._currentFrameTime = this._currentKeyframeIndex * e, 
            this._currentAnimationClipIndex = -1;
        }, e._update = function(t) {
            if (-1 !== this._currentAnimationClipIndex && !this._paused && this._templet) {
                var e = this._cacheFrameRateInterval * this._cachePlayRate, i = 0;
                this._startUpdateLoopCount !== D.loopCount && (i = t * this.playbackRate, this._elapsedPlaybackTime += i);
                var a = this.playDuration;
                if (0 !== this._overallDuration && this._elapsedPlaybackTime >= this._overallDuration || 0 === this._overallDuration && this._elapsedPlaybackTime >= a) return this._setPlayParamsWhenStop(a, e), 
                void this.event("stopped");
                if (i += this._currentTime, a > 0) {
                    if (i >= a) return this._stopWhenCircleFinish ? (this._setPlayParamsWhenStop(a, e), 
                    this._stopWhenCircleFinish = !1, void this.event("stopped")) : (i %= a, this._setPlayParams(i, e), 
                    void this.event("complete"));
                    this._setPlayParams(i, e);
                } else {
                    if (this._stopWhenCircleFinish) return this._setPlayParamsWhenStop(a, e), this._stopWhenCircleFinish = !1, 
                    void this.event("stopped");
                    this._currentTime = this._currentFrameTime = this._currentKeyframeIndex = 0, this.event("complete");
                }
            }
        }, e._destroy = function() {
            this.offAll(), this._templet = null, this._destroyed = !0;
        }, e.play = function(t, e, i, a, r) {
            if (void 0 === t && (t = 0), void 0 === e && (e = 1), void 0 === i && (i = 2147483647), 
            void 0 === a && (a = 0), void 0 === r && (r = 0), !this._templet) throw new Error("AnimationPlayer:templet must not be null,maybe you need to set url.");
            if (i < 0 || a < 0 || r < 0) throw new Error("AnimationPlayer:overallDuration,playStart and playEnd must large than zero.");
            if (0 !== r && a > r) throw new Error("AnimationPlayer:start must less than end.");
            this._currentTime = 0, this._currentFrameTime = 0, this._elapsedPlaybackTime = 0, 
            this.playbackRate = e, this._overallDuration = i, this._playStart = a, this._playEnd = r, 
            this._paused = !1, this._currentAnimationClipIndex = t, this._currentKeyframeIndex = 0, 
            this._startUpdateLoopCount = D.loopCount, this.event("played"), this._calculatePlayDuration(), 
            this._update(0);
        }, e.playByFrame = function(t, e, i, a, r, s) {
            void 0 === t && (t = 0), void 0 === e && (e = 1), void 0 === i && (i = 2147483647), 
            void 0 === a && (a = 0), void 0 === r && (r = 0), void 0 === s && (s = 30);
            var n = 1e3 / s;
            this.play(t, e, i, a * n, r * n);
        }, e.stop = function(t) {
            void 0 === t && (t = !0), t ? (this._currentTime = this._currentFrameTime = this._currentKeyframeIndex = 0, 
            this._currentAnimationClipIndex = -1, this.event("stopped")) : this._stopWhenCircleFinish = !0;
        }, e.destroy = function() {}, s(0, e, "playEnd", function() {
            return this._playEnd;
        }), s(0, e, "templet", function() {
            return this._templet;
        }, function(t) {
            0 !== this.state && this.stop(!0), this._templet !== t && (this._templet = t, this._computeFullKeyframeIndices());
        }), s(0, e, "playStart", function() {
            return this._playStart;
        }), s(0, e, "playDuration", function() {
            return this._playDuration;
        }), s(0, e, "state", function() {
            return -1 === this._currentAnimationClipIndex ? 0 : this._paused ? 1 : 2;
        }), s(0, e, "currentKeyframeIndex", function() {
            return this._currentKeyframeIndex;
        }), s(0, e, "overallDuration", function() {
            return this._overallDuration;
        }), s(0, e, "currentFrameTime", function() {
            return this._currentFrameTime;
        }), s(0, e, "currentAnimationClipIndex", function() {
            return this._currentAnimationClipIndex;
        }), s(0, e, "currentPlayTime", function() {
            return this._currentTime + this._playStart;
        }), s(0, e, "cachePlayRate", function() {
            return this._cachePlayRate;
        }, function(t) {
            this._cachePlayRate !== t && (this._cachePlayRate = t, this._templet && this._computeFullKeyframeIndices());
        }), s(0, e, "cacheFrameRate", function() {
            return this._cacheFrameRate;
        }, function(t) {
            this._cacheFrameRate !== t && (this._cacheFrameRate = t, this._cacheFrameRateInterval = 1e3 / this._cacheFrameRate, 
            this._templet && this._computeFullKeyframeIndices());
        }), s(0, e, "currentTime", null, function(t) {
            if (-1 !== this._currentAnimationClipIndex && this._templet) {
                if (t < this._playStart || t > this._playEnd) throw new Error("AnimationPlayer:value must large than playStartTime,small than playEndTime.");
                this._startUpdateLoopCount = D.loopCount;
                var e = this._cacheFrameRateInterval * this._cachePlayRate;
                this._currentTime = t, this._currentKeyframeIndex = Math.floor(this.currentPlayTime / e), 
                this._currentFrameTime = this._currentKeyframeIndex * e;
            }
        }), s(0, e, "paused", function() {
            return this._paused;
        }, function(t) {
            this._paused = t, t && this.event("paused");
        }), s(0, e, "cacheFrameRateInterval", function() {
            return this._cacheFrameRateInterval;
        }), s(0, e, "destroyed", function() {
            return this._destroyed;
        }), AnimationPlayer;
    }(), Q = function(t) {
        function GraphicsAni() {
            GraphicsAni.__super.call(this);
        }
        return r(GraphicsAni, "laya.ani.GraphicsAni", p), GraphicsAni.prototype.drawSkin = function(t, e) {
            this.drawTriangles(t.texture, 0, 0, t.vertices, t.uvs, t.indexes, t.transform || f.EMPTY, e);
        }, GraphicsAni.create = function() {
            return GraphicsAni._caches.pop() || new GraphicsAni();
        }, GraphicsAni.recycle = function(t) {
            t.clear(), GraphicsAni._caches.push(t);
        }, GraphicsAni._caches = [], GraphicsAni;
    }(), Z = function(t) {
        function SkinMeshForGraphic() {
            this.transform = null, SkinMeshForGraphic.__super.call(this);
        }
        return r(SkinMeshForGraphic, "laya.ani.bone.canvasmesh.SkinMeshForGraphic", I), 
        SkinMeshForGraphic.prototype.init2 = function(t, e, i, a) {
            this.transform && (this.transform = null);
            var r = e || [ 0, 1, 3, 3, 1, 2 ];
            this.texture = t, this.indexes = new Uint16Array(r), this.vertices = new Float32Array(i), 
            this.uvs = new Float32Array(a);
        }, SkinMeshForGraphic;
    }(), $ = function(t) {
        function AnimationTemplet() {
            this._aniMap = {}, this.unfixedLastAniIndex = -1, this._fullFrames = null, this._boneCurKeyFrm = [], 
            AnimationTemplet.__super.call(this), this._anis = new Array();
        }
        r(AnimationTemplet, "laya.ani.AnimationTemplet", y);
        var e = AnimationTemplet.prototype;
        return e.parse = function(t) {
            var e = new o(t);
            this._aniVersion = e.readUTFString(), F.parse(this, e);
        }, e._calculateKeyFrame = function(t, e, i) {
            var a = t.keyFrame;
            a[e] = a[0];
            for (var r = 0; r < e; r++) for (var s = a[r], n = 0; n < i; n++) s.dData[n] = 0 === s.duration ? 0 : (a[r + 1].data[n] - s.data[n]) / s.duration, 
            s.nextData[n] = a[r + 1].data[n];
            a.length--;
        }, e._onAsynLoaded = function(t, e) {
            var i = new o(t);
            switch (this._aniVersion = i.readUTFString(), this._aniVersion) {
              case "LAYAANIMATION:02":
                P.parse(this, i);
                break;

              default:
                F.parse(this, i);
            }
        }, e.getAnimationCount = function() {
            return this._anis.length;
        }, e.getAnimation = function(t) {
            return this._anis[t];
        }, e.getAniDuration = function(t) {
            return this._anis[t].playTime;
        }, e.getNodes = function(t) {
            return this._anis[t].nodes;
        }, e.getNodeIndexWithName = function(t, e) {
            return this._anis[t].bone3DMap[e];
        }, e.getNodeCount = function(t) {
            return this._anis[t].nodes.length;
        }, e.getTotalkeyframesLength = function(t) {
            return this._anis[t].totalKeyframeDatasLength;
        }, e.getPublicExtData = function() {
            return this._publicExtData;
        }, e.getAnimationDataWithCache = function(t, e, i, a) {
            var r = e[i];
            if (r) {
                var s = r[t];
                return s ? s[a] : null;
            }
            return null;
        }, e.setAnimationDataWithCache = function(t, e, i, a, r) {
            var s = e[i] || (e[i] = {});
            (s[t] || (s[t] = []))[a] = r;
        }, e.getNodeKeyFrame = function(t, e, i) {
            var a = this._boneCurKeyFrm[e], r = t.length;
            (null == a || a >= r) && (a = this._boneCurKeyFrm[e] = 0);
            var s = t[a], n = i - s.startTime;
            if (0 == n || n > 0 && s.duration > n) return a;
            var h = 0;
            if (n > 0) {
                for (i += .01, h = a + 1; h < r; h++) if ((s = t[h]).startTime <= i && s.startTime + s.duration > i) return this._boneCurKeyFrm[e] = h, 
                h;
                return r - 1;
            }
            for (h = 0; h < a; h++) if ((s = t[h]).startTime <= i && s.startTime + s.duration > i) return this._boneCurKeyFrm[e] = h, 
            h;
            return a;
        }, e.getOriginalData = function(t, e, i, a, r) {
            var s = this._anis[t].nodes, n = this._boneCurKeyFrm;
            n.length < s.length && (n.length = s.length);
            for (var h = 0, l = 0, o = s.length, u = 0; l < o; l++) {
                var p, c = s[l], _ = c.keyFrame;
                p = _[this.getNodeKeyFrame(_, l, r)], c.dataOffset = u;
                var d = r - p.startTime, f = c.lerpType;
                if (f) switch (f) {
                  case 0:
                  case 1:
                    for (h = 0; h < c.keyframeWidth; ) h += c.interpolationMethod[h](c, h, e, u + h, p.data, d, p.dData, p.duration, p.nextData);
                    break;

                  case 2:
                    var m = p.interpolationData, y = m.length, x = 0;
                    for (h = 0; h < y; ) {
                        var g = m[h];
                        switch (g) {
                          case 6:
                          case 7:
                            h += AnimationTemplet.interpolation[g](c, x, e, u + x, p.data, d, p.dData, p.duration, p.nextData, m, h + 1);
                            break;

                          default:
                            h += AnimationTemplet.interpolation[g](c, x, e, u + x, p.data, d, p.dData, p.duration, p.nextData);
                        }
                        x++;
                    }
                } else for (h = 0; h < c.keyframeWidth; ) h += c.interpolationMethod[h](c, h, e, u + h, p.data, d, p.dData, p.duration, p.nextData);
                u += c.keyframeWidth;
            }
        }, e.getNodesCurrentFrameIndex = function(t, e) {
            var i = this._anis[t].nodes;
            t !== this.unfixedLastAniIndex && (this.unfixedCurrentFrameIndexes = new Uint32Array(i.length), 
            this.unfixedCurrentTimes = new Float32Array(i.length), this.unfixedLastAniIndex = t);
            for (var a = 0, r = i.length; a < r; a++) {
                var s = i[a];
                for (e < this.unfixedCurrentTimes[a] && (this.unfixedCurrentFrameIndexes[a] = 0), 
                this.unfixedCurrentTimes[a] = e; this.unfixedCurrentFrameIndexes[a] < s.keyFrame.length && !(s.keyFrame[this.unfixedCurrentFrameIndexes[a]].startTime > this.unfixedCurrentTimes[a]); ) this.unfixedCurrentFrameIndexes[a]++;
                this.unfixedCurrentFrameIndexes[a]--;
            }
            return this.unfixedCurrentFrameIndexes;
        }, e.getOriginalDataUnfixedRate = function(t, e, i) {
            var a = this._anis[t].nodes;
            t !== this.unfixedLastAniIndex && (this.unfixedCurrentFrameIndexes = new Uint32Array(a.length), 
            this.unfixedCurrentTimes = new Float32Array(a.length), this.unfixedKeyframes = n(a.length), 
            this.unfixedLastAniIndex = t);
            for (var r = 0, s = 0, h = a.length, l = 0; s < h; s++) {
                var o = a[s];
                for (i < this.unfixedCurrentTimes[s] && (this.unfixedCurrentFrameIndexes[s] = 0), 
                this.unfixedCurrentTimes[s] = i; this.unfixedCurrentFrameIndexes[s] < o.keyFrame.length && !(o.keyFrame[this.unfixedCurrentFrameIndexes[s]].startTime > this.unfixedCurrentTimes[s]); ) this.unfixedKeyframes[s] = o.keyFrame[this.unfixedCurrentFrameIndexes[s]], 
                this.unfixedCurrentFrameIndexes[s]++;
                var u = this.unfixedKeyframes[s];
                o.dataOffset = l;
                var p = i - u.startTime;
                if (o.lerpType) switch (o.lerpType) {
                  case 0:
                  case 1:
                    for (r = 0; r < o.keyframeWidth; ) r += o.interpolationMethod[r](o, r, e, l + r, u.data, p, u.dData, u.duration, u.nextData);
                    break;

                  case 2:
                    var c = u.interpolationData, _ = c.length, d = 0;
                    for (r = 0; r < _; ) {
                        var f = c[r];
                        switch (f) {
                          case 6:
                          case 7:
                            r += AnimationTemplet.interpolation[f](o, d, e, l + d, u.data, p, u.dData, u.duration, u.nextData, c, r + 1);
                            break;

                          default:
                            r += AnimationTemplet.interpolation[f](o, d, e, l + d, u.data, p, u.dData, u.duration, u.nextData);
                        }
                        d++;
                    }
                } else for (r = 0; r < o.keyframeWidth; ) r += o.interpolationMethod[r](o, r, e, l + r, u.data, p, u.dData, u.duration, u.nextData);
                l += o.keyframeWidth;
            }
        }, AnimationTemplet._LinearInterpolation_0 = function(t, e, i, a, r, s, n, h, l, o) {
            return i[a] = r[e] + s * n[e], 1;
        }, AnimationTemplet._QuaternionInterpolation_1 = function(t, e, i, a, r, s, n, h, l, o) {
            var u = 0 === h ? 0 : s / h;
            return d.slerpQuaternionArray(r, e, l, e, u, i, a), 4;
        }, AnimationTemplet._AngleInterpolation_2 = function(t, e, i, a, r, s, n, h, l, o) {
            return 0;
        }, AnimationTemplet._RadiansInterpolation_3 = function(t, e, i, a, r, s, n, h, l, o) {
            return 0;
        }, AnimationTemplet._Matrix4x4Interpolation_4 = function(t, e, i, a, r, s, n, h, l, o) {
            for (var u = 0; u < 16; u++, e++) i[a + u] = r[e] + s * n[e];
            return 16;
        }, AnimationTemplet._NoInterpolation_5 = function(t, e, i, a, r, s, n, h, l, o) {
            return i[a] = r[e], 1;
        }, AnimationTemplet._BezierInterpolation_6 = function(t, e, i, a, r, s, n, h, l, o, u) {
            return void 0 === u && (u = 0), i[a] = r[e] + (l[e] - r[e]) * G.getBezierRate(s / h, o[u], o[u + 1], o[u + 2], o[u + 3]), 
            5;
        }, AnimationTemplet._BezierInterpolation_7 = function(t, e, i, a, r, s, n, h, l, o, u) {
            return void 0 === u && (u = 0), i[a] = o[u + 4] + o[u + 5] * G.getBezierRate((.001 * s + o[u + 6]) / o[u + 7], o[u], o[u + 1], o[u + 2], o[u + 3]), 
            9;
        }, AnimationTemplet.interpolation = [ AnimationTemplet._LinearInterpolation_0, AnimationTemplet._QuaternionInterpolation_1, AnimationTemplet._AngleInterpolation_2, AnimationTemplet._RadiansInterpolation_3, AnimationTemplet._Matrix4x4Interpolation_4, AnimationTemplet._NoInterpolation_5, AnimationTemplet._BezierInterpolation_6, AnimationTemplet._BezierInterpolation_7 ], 
        AnimationTemplet;
    }(), j = (function(t) {
        function MovieClip(t) {
            this._start = 0, this._Pos = 0, this._data = null, this._curIndex = 0, this._preIndex = 0, 
            this._playIndex = 0, this._playing = !1, this._ended = !0, this._count = 0, this._ids = null, 
            this._loadedImage = {}, this._idOfSprite = null, this._parentMovieClip = null, this._movieClipList = null, 
            this._labels = null, this.basePath = null, this._atlasPath = null, this._url = null, 
            this._isRoot = !1, this._completeHandler = null, this._endFrame = -1, this.interval = 30, 
            this.loop = !1, MovieClip.__super.call(this), this._ids = {}, this._idOfSprite = [], 
            this._reset(), this._playing = !1, this._parentMovieClip = t, t ? (this._isRoot = !1, 
            this._movieClipList = t._movieClipList, this._movieClipList.push(this)) : (this._movieClipList = [ this ], 
            this._isRoot = !0, this._setBitUp(16));
        }
        r(MovieClip, "laya.ani.swf.MovieClip", t);
        var e = MovieClip.prototype;
        e.destroy = function(e) {
            void 0 === e && (e = !0), this._clear(), t.prototype.destroy.call(this, e);
        }, e._setDisplay = function(e) {
            t.prototype._setDisplay.call(this, e), this._isRoot && this._$3__onDisplay(e);
        }, e._$3__onDisplay = function(t) {
            t ? this.timer.loop(this.interval, this, this.updates, null, !0) : this.timer.clear(this, this.updates);
        }, e.updates = function() {
            if (!this._parentMovieClip) {
                var t, e = 0;
                for (t = this._movieClipList.length, e = 0; e < t; e++) this._movieClipList[e] && this._movieClipList[e]._update();
            }
        }, e.addLabel = function(t, e) {
            this._labels || (this._labels = {}), this._labels[e] = t;
        }, e.removeLabel = function(t) {
            if (t) {
                if (!this._labels) for (var e in this._labels) if (this._labels[e] === t) {
                    delete this._labels[e];
                    break;
                }
            } else this._labels = null;
        }, e._update = function() {
            if (this._data && this._playing) {
                if (this._playIndex++, this._playIndex >= this._count) {
                    if (!this.loop) return this._playIndex--, void this.stop();
                    this._playIndex = 0;
                }
                if (this._parseFrame(this._playIndex), this._labels && this._labels[this._playIndex] && this.event("label", this._labels[this._playIndex]), 
                -1 != this._endFrame && this._endFrame == this._playIndex) {
                    if (this._endFrame = -1, null != this._completeHandler) {
                        var t = this._completeHandler;
                        this._completeHandler = null, t.run();
                    }
                    this.stop();
                }
            }
        }, e.stop = function() {
            this._playing = !1;
        }, e.gotoAndStop = function(t) {
            this.index = t, this.stop();
        }, e._clear = function() {
            if (this.stop(), this._idOfSprite.length = 0, !this._parentMovieClip) {
                this.timer.clear(this, this.updates);
                var t, e = 0;
                for (t = this._movieClipList.length, e = 0; e < t; e++) this._movieClipList[e] != this && this._movieClipList[e]._clear();
                this._movieClipList.length = 0;
            }
            var i;
            for (i in this._atlasPath && _.clearRes(this._atlasPath), this._loadedImage) this._loadedImage[i] && (_.clearRes(i), 
            this._loadedImage[i] = !1);
            this.removeChildren(), this.graphics = null, this._parentMovieClip = null;
        }, e.play = function(t, e) {
            void 0 === t && (t = 0), void 0 === e && (e = !0), this.loop = e, this._playing = !0, 
            this._data && this._displayFrame(t);
        }, e._displayFrame = function(t) {
            void 0 === t && (t = -1), -1 != t && (this._curIndex > t && this._reset(), this._parseFrame(t));
        }, e._reset = function(t) {
            void 0 === t && (t = !0), t && 1 != this._curIndex && this.removeChildren(), this._preIndex = this._curIndex = -1, 
            this._Pos = this._start;
        }, e._parseFrame = function(t) {
            var e, i, a, r = 0, s = 0, n = 0, h = !1, l = this._idOfSprite, o = this._data;
            for (this._ended && this._reset(), o.pos = this._Pos, this._ended = !1, this._playIndex = t, 
            this._curIndex > t && t < this._preIndex && (this._reset(!0), o.pos = this._Pos); this._curIndex <= t && !this._ended; ) switch (o.getUint16()) {
              case 12:
                if (r = o.getUint16(), s = this._ids[o.getUint16()], this._Pos = o.pos, o.pos = s, 
                0 == (n = o.getUint8())) {
                    var u = o.getUint16();
                    if (!(i = l[r])) {
                        i = l[r] = new g();
                        var p = new g();
                        p.loadImage(this.basePath + u + ".png"), this._loadedImage[this.basePath + u + ".png"] = !0, 
                        i.addChild(p), p.size(o.getFloat32(), o.getFloat32());
                        var c = o._getMatrix();
                        p.transform = c;
                    }
                    i.alpha = 1;
                } else 1 == n && ((e = l[r]) || (l[r] = e = new MovieClip(this), e.interval = this.interval, 
                e._ids = this._ids, e.basePath = this.basePath, e._setData(o, s), e._initState(), 
                e.play(0)), e.alpha = 1);
                o.pos = this._Pos;
                break;

              case 3:
                var _ = l[o.getUint16()];
                _ && (this.addChild(_), _.zOrder = o.getUint16(), h = !0);
                break;

              case 4:
                (_ = l[o.getUint16()]) && _.removeSelf();
                break;

              case 5:
                l[o.getUint16()][MovieClip._ValueList[o.getUint16()]] = o.getFloat32();
                break;

              case 6:
                l[o.getUint16()].visible = o.getUint8() > 0;
                break;

              case 7:
                var d = (i = l[o.getUint16()]).transform || f.create();
                d.setTo(o.getFloat32(), o.getFloat32(), o.getFloat32(), o.getFloat32(), o.getFloat32(), o.getFloat32()), 
                i.transform = d;
                break;

              case 8:
                l[o.getUint16()].setPos(o.getFloat32(), o.getFloat32());
                break;

              case 9:
                l[o.getUint16()].setSize(o.getFloat32(), o.getFloat32());
                break;

              case 10:
                l[o.getUint16()].alpha = o.getFloat32();
                break;

              case 11:
                l[o.getUint16()].setScale(o.getFloat32(), o.getFloat32());
                break;

              case 98:
                a = o.getString(), this.event(a), "stop" == a && this.stop();
                break;

              case 99:
                this._curIndex = o.getUint16(), h && this.updateZOrder();
                break;

              case 100:
                this._count = this._curIndex + 1, this._ended = !0, this._playing && (this.event("enterframe"), 
                this.event("end"), this.event("complete")), this._reset(!1);
            }
            this._playing && !this._ended && this.event("enterframe"), this._Pos = o.pos;
        }, e._setData = function(t, e) {
            this._data = t, this._start = e + 3;
        }, e.load = function(t, e, a) {
            var r;
            void 0 === e && (e = !1), this._url = t, e && (this._atlasPath = a || t.split(".swf")[0] + ".json"), 
            this.stop(), this._clear(), this._movieClipList = [ this ], r = [ {
                url: t,
                type: "arraybuffer"
            } ], this._atlasPath && r.push({
                url: this._atlasPath,
                type: "atlas"
            }), i.loader.load(r, c.create(this, this._onLoaded));
        }, e._onLoaded = function() {
            var t;
            (t = _.getRes(this._url)) ? !this._atlasPath || _.getAtlas(this._atlasPath) ? (this.basePath = this._atlasPath ? _.getAtlas(this._atlasPath).dir : this._url.split(".swf")[0] + "/image/", 
            this._initData(t)) : this.event("error", "Atlas not find") : this.event("error", "file not find");
        }, e._initState = function() {
            this._reset(), this._ended = !1;
            var t = this._playing;
            for (this._playing = !1, this._curIndex = 0; !this._ended; ) this._parseFrame(++this._curIndex);
            this._playing = t;
        }, e._initData = function(t) {
            this._data = new o(t);
            var e = 0, i = this._data.getUint16();
            for (e = 0; e < i; e++) this._ids[this._data.getInt16()] = this._data.getInt32();
            this.interval = 1e3 / this._data.getUint16(), this._setData(this._data, this._ids[32767]), 
            this._initState(), this.play(0), this.event("loaded"), this._parentMovieClip || this.timer.loop(this.interval, this, this.updates, null, !0);
        }, e.playTo = function(t, e, i) {
            this._completeHandler = i, this._endFrame = e, this.play(t, !1);
        }, s(0, e, "index", function() {
            return this._playIndex;
        }, function(t) {
            this._playIndex = t, this._data && this._displayFrame(this._playIndex), this._labels && this._labels[t] && this.event("label", this._labels[t]);
        }), s(0, e, "count", function() {
            return this._count;
        }), s(0, e, "playing", function() {
            return this._playing;
        }), s(0, e, "url", null, function(t) {
            this.load(t);
        }), MovieClip._ValueList = [ "x", "y", "width", "height", "scaleX", "scaleY", "rotation", "alpha" ];
    }(g), function(t) {
        function Skeleton(t, e) {
            this._templet = null, this._player = null, this._curOriginalData = null, this._boneMatrixArray = [], 
            this._lastTime = 0, this._currAniName = null, this._currAniIndex = -1, this._pause = !0, 
            this._aniClipIndex = -1, this._clipIndex = -1, this._skinIndex = 0, this._skinName = "default", 
            this._aniMode = 0, this._graphicsCache = null, this._boneSlotDic = null, this._bindBoneBoneSlotDic = null, 
            this._boneSlotArray = null, this._index = -1, this._total = -1, this._indexControl = !1, 
            this._aniPath = null, this._texturePath = null, this._complete = null, this._loadAniMode = 0, 
            this._yReverseMatrix = null, this._ikArr = null, this._tfArr = null, this._pathDic = null, 
            this._rootBone = null, this._boneList = null, this._aniSectionDic = null, this._eventIndex = 0, 
            this._drawOrderIndex = 0, this._drawOrder = null, this._lastAniClipIndex = -1, this._lastUpdateAniClipIndex = -1, 
            this._playAudio = !0, this._soundChannelArr = [], Skeleton.__super.call(this), void 0 === e && (e = 0), 
            t && this.init(t, e);
        }
        r(Skeleton, "laya.ani.bone.Skeleton", t);
        var e = Skeleton.prototype;
        return e.init = function(t, e) {
            void 0 === e && (e = 0);
            var i, a, r, s = 0, n = 0;
            if (1 == e) for (this._graphicsCache = [], s = 0, n = t.getAnimationCount(); s < n; s++) this._graphicsCache.push([]);
            if (this._yReverseMatrix = t.yReverseMatrix, this._aniMode = e, this._templet = t, 
            this._templet._addReference(1), this._player = new H(), this._player.cacheFrameRate = t.rate, 
            this._player.templet = t, this._player.play(), this._parseSrcBoneMatrix(), this._boneList = t.mBoneArr, 
            this._rootBone = t.mRootBone, this._aniSectionDic = t.aniSectionDic, t.ikArr.length > 0) for (this._ikArr = [], 
            s = 0, n = t.ikArr.length; s < n; s++) this._ikArr.push(new B(t.ikArr[s], this._boneList));
            if (t.pathArr.length > 0) for (null == this._pathDic && (this._pathDic = {}), s = 0, 
            n = t.pathArr.length; s < n; s++) i = t.pathArr[s], a = new K(i, this._boneList), 
            (r = this._boneSlotDic[i.name]) && ((a = new K(i, this._boneList)).target = r), 
            this._pathDic[i.name] = a;
            if (t.tfArr.length > 0) for (this._tfArr = [], s = 0, n = t.tfArr.length; s < n; s++) this._tfArr.push(new b(t.tfArr[s], this._boneList));
            if (t.skinDataArray.length > 0) {
                var h = this._templet.skinDataArray[this._skinIndex];
                this._skinName = h.name;
            }
            this._player.on("played", this, this._onPlay), this._player.on("stopped", this, this._onStop), 
            this._player.on("paused", this, this._onPause);
        }, e.load = function(t, e, a) {
            void 0 === a && (a = 0), this._aniPath = t, this._complete = e, this._loadAniMode = a, 
            i.loader.load([ {
                url: t,
                type: "arraybuffer"
            } ], c.create(this, this._onLoaded));
        }, e._onLoaded = function() {
            var t, e = _.getRes(this._aniPath);
            null != e && (null == J.TEMPLET_DICTIONARY && (J.TEMPLET_DICTIONARY = {}), (t = J.TEMPLET_DICTIONARY[this._aniPath]) ? t.isParseFail ? this._parseFail() : t.isParserComplete ? this._parseComplete() : (t.on("complete", this, this._parseComplete), 
            t.on("error", this, this._parseFail)) : ((t = new J())._setCreateURL(this._aniPath), 
            J.TEMPLET_DICTIONARY[this._aniPath] = t, t.on("complete", this, this._parseComplete), 
            t.on("error", this, this._parseFail), t.isParserComplete = !1, t.parseData(null, e)));
        }, e._parseComplete = function() {
            var t = J.TEMPLET_DICTIONARY[this._aniPath];
            t && (this.init(t, this._loadAniMode), this.play(0, !0)), this._complete && this._complete.runWith(this);
        }, e._parseFail = function() {
            console.log("[Error]:" + this._aniPath + "解析失败");
        }, e._onPlay = function() {
            this.event("played");
        }, e._onStop = function() {
            var t, e = this._templet.eventAniArr[this._aniClipIndex];
            if (e && this._eventIndex < e.length) for (;this._eventIndex < e.length; this._eventIndex++) (t = e[this._eventIndex]).time >= this._player.playStart && t.time <= this._player.playEnd && this.event("label", t);
            this._drawOrder = null, this.event("stopped");
        }, e._onPause = function() {
            this.event("paused");
        }, e._parseSrcBoneMatrix = function() {
            var t = 0, e = 0;
            for (e = this._templet.srcBoneMatrixArr.length, t = 0; t < e; t++) this._boneMatrixArray.push(new f());
            if (0 == this._aniMode) this._boneSlotDic = this._templet.boneSlotDic, this._bindBoneBoneSlotDic = this._templet.bindBoneBoneSlotDic, 
            this._boneSlotArray = this._templet.boneSlotArray; else {
                null == this._boneSlotDic && (this._boneSlotDic = {}), null == this._bindBoneBoneSlotDic && (this._bindBoneBoneSlotDic = {}), 
                null == this._boneSlotArray && (this._boneSlotArray = []);
                var i, a, r = this._templet.boneSlotArray;
                for (t = 0, e = r.length; t < e; t++) i = r[t], null == (a = this._bindBoneBoneSlotDic[i.parent]) && (this._bindBoneBoneSlotDic[i.parent] = a = []), 
                this._boneSlotDic[i.name] = i = i.copy(), a.push(i), this._boneSlotArray.push(i);
            }
        }, e._emitMissedEvents = function(t, e, i) {
            void 0 === i && (i = 0);
            var a = this._templet.eventAniArr[this._player.currentAnimationClipIndex];
            if (a) {
                var r, s, n = 0;
                for (r = a.length, n = i; n < r; n++) (s = a[n]).time >= this._player.playStart && s.time <= this._player.playEnd && this.event("label", s);
            }
        }, e._update = function(t) {
            if (void 0 === t && (t = !0), !(this._pause || t && this._indexControl)) {
                var e = this.timer.currTimer, i = this._player.currentKeyframeIndex, a = e - this._lastTime;
                if (t ? this._player._update(a) : i = -1, this._lastTime = e, this._player && (this._index = this._clipIndex = this._player.currentKeyframeIndex, 
                !(this._index < 0 || a > 0 && this._clipIndex == i && this._lastUpdateAniClipIndex == this._aniClipIndex))) {
                    this._lastUpdateAniClipIndex = this._aniClipIndex, i > this._clipIndex && 0 != this._eventIndex && (this._emitMissedEvents(this._player.playStart, this._player.playEnd, this._eventIndex), 
                    this._eventIndex = 0);
                    var r, s, n = this._templet.eventAniArr[this._aniClipIndex];
                    if (n && this._eventIndex < n.length) {
                        var h = n[this._eventIndex];
                        h.time >= this._player.playStart && h.time <= this._player.playEnd ? this._player.currentPlayTime >= h.time && (this.event("label", h), 
                        this._eventIndex++, this._playAudio && h.audioValue && "null" !== h.audioValue && (r = x.playSound(this._player.templet._path + h.audioValue, 1, c.create(this, this._onAniSoundStoped)), 
                        x.playbackRate = this._player.playbackRate, r && this._soundChannelArr.push(r))) : h.time < this._player.playStart && this._playAudio && h.audioValue && "null" !== h.audioValue && this._player.playEnd - this._player.currentPlayTime > .1 ? (this._eventIndex++, 
                        r = x.playSound(this._player.templet._path + h.audioValue, 1, c.create(this, this._onAniSoundStoped), null, (this._player.currentPlayTime - h.time) / 1e3), 
                        x.playbackRate = this._player.playbackRate, r && this._soundChannelArr.push(r)) : this._eventIndex++;
                    }
                    0 == this._aniMode ? (s = this._templet.getGrahicsDataWithCache(this._aniClipIndex, this._clipIndex) || this._createGraphics()) && this.graphics != s && (this.graphics = s) : 1 == this._aniMode ? (s = this._getGrahicsDataWithCache(this._aniClipIndex, this._clipIndex) || this._createGraphics()) && this.graphics != s && (this.graphics = s) : this._createGraphics();
                }
            }
        }, e._onAniSoundStoped = function(t) {
            for (var e, i = this._soundChannelArr.length, a = 0; a < i; a++) ((e = this._soundChannelArr[a]).isStopped || t) && (!e.isStopped && e.stop(), 
            this._soundChannelArr.splice(a, 1), i--, a--);
        }, e._createGraphics = function(t) {
            void 0 === t && (t = -1), -1 == t && (t = this._clipIndex);
            var e, i = t * this._player.cacheFrameRateInterval, a = this._templet.drawOrderAniArr[this._aniClipIndex];
            if (a && a.length > 0) for (this._drawOrderIndex = 0, e = a[this._drawOrderIndex]; i >= e.time && (this._drawOrder = e.drawOrder, 
            this._drawOrderIndex++, !(this._drawOrderIndex >= a.length)); ) e = a[this._drawOrderIndex];
            0 == this._aniMode || 1 == this._aniMode ? this.graphics = Q.create() : this.graphics instanceof laya.ani.GraphicsAni ? this.graphics.clear() : this.graphics = Q.create();
            var r = this.graphics, s = this._templet.getNodes(this._aniClipIndex), n = 0 == this._player.state;
            this._templet.getOriginalData(this._aniClipIndex, this._curOriginalData, null, t, n ? i + this._player.cacheFrameRateInterval : i);
            var h, l, u, p, c = this._aniSectionDic[this._aniClipIndex], _ = 0, d = 0, m = 0, y = 0, x = 0, g = this._templet.srcBoneMatrixArr.length, D = this._curOriginalData;
            for (d = 0, x = c[0]; d < g; d++) {
                var M = (p = this._boneList[d]).resultTransform;
                u = this._templet.srcBoneMatrixArr[d], M.scX = u.scX * D[_++], M.skX = u.skX + D[_++], 
                M.skY = u.skY + D[_++], M.scY = u.scY * D[_++], M.x = u.x + D[_++], M.y = u.y + D[_++], 
                8 === this._templet.tMatrixDataLen && (M.skewX = u.skewX + D[_++], M.skewY = u.skewY + D[_++]);
            }
            var v, A = {}, I = {};
            for (x += c[1]; d < x; d++) A[(v = s[d]).name] = D[_++], I[v.name] = D[_++], _ += 4;
            var S, T, b = {}, N = {};
            for (x += c[2]; d < x; d++) b[(v = s[d]).name] = D[_++], N[v.name] = D[_++], _ += 4;
            if (this._pathDic) for (x += c[3]; d < x; d++) {
                if (v = s[d], S = this._pathDic[v.name]) switch (new o(v.extenData).getByte()) {
                  case 1:
                    S.position = D[_++];
                    break;

                  case 2:
                    S.spacing = D[_++];
                    break;

                  case 3:
                    S.rotateMix = D[_++], S.translateMix = D[_++];
                }
            }
            if (this._rootBone.update(this._yReverseMatrix || f.TEMP.identity()), this._ikArr) for (d = 0, 
            x = this._ikArr.length; d < x; d++) T = this._ikArr[d], b.hasOwnProperty(T.name) && (T.bendDirection = b[T.name]), 
            N.hasOwnProperty(T.name) && (T.mix = N[T.name]), T.apply();
            if (this._pathDic) for (var C in this._pathDic) (S = this._pathDic[C]).apply(this._boneList, r);
            if (this._tfArr) for (d = 0, y = this._tfArr.length; d < y; d++) this._tfArr[d].apply();
            for (d = 0, y = this._boneList.length; d < y; d++) if (p = this._boneList[d], l = this._bindBoneBoneSlotDic[p.name], 
            p.resultMatrix.copyTo(this._boneMatrixArray[d]), l) for (m = 0, x = l.length; m < x; m++) (h = l[m]) && h.setParentMatrix(p.resultMatrix);
            var k, P, F, w, B = {}, U = this._templet.deformAniArr;
            if (U && U.length > 0) {
                if (this._lastAniClipIndex != this._aniClipIndex) for (this._lastAniClipIndex = this._aniClipIndex, 
                d = 0, x = this._boneSlotArray.length; d < x; d++) (h = this._boneSlotArray[d]).deformData = null;
                var L, R = U[this._aniClipIndex];
                for (L in k = R.default, this._setDeform(k, B, this._boneSlotArray, i), R) "default" != L && L != this._skinName && (k = R[L], 
                this._setDeform(k, B, this._boneSlotArray, i));
                k = R[this._skinName], this._setDeform(k, B, this._boneSlotArray, i);
            }
            if (this._drawOrder) for (d = 0, x = this._drawOrder.length; d < x; d++) P = A[(h = this._boneSlotArray[this._drawOrder[d]]).name], 
            F = I[h.name], isNaN(F), isNaN(P) || -2 == P || (this._templet.attachmentNames ? h.showDisplayByName(this._templet.attachmentNames[P]) : h.showDisplayByIndex(P)), 
            B[this._drawOrder[d]] ? (w = B[this._drawOrder[d]], h.currDisplayData && w[h.currDisplayData.attachmentName] ? h.deformData = w[h.currDisplayData.attachmentName] : h.deformData = null) : h.deformData = null, 
            isNaN(F) ? h.draw(r, this._boneMatrixArray, 2 == this._aniMode) : h.draw(r, this._boneMatrixArray, 2 == this._aniMode, F), 
            isNaN(F); else for (d = 0, x = this._boneSlotArray.length; d < x; d++) P = A[(h = this._boneSlotArray[d]).name], 
            F = I[h.name], isNaN(F), isNaN(P) || -2 == P || (this._templet.attachmentNames ? h.showDisplayByName(this._templet.attachmentNames[P]) : h.showDisplayByIndex(P)), 
            B[d] ? (w = B[d], h.currDisplayData && w[h.currDisplayData.attachmentName] ? h.deformData = w[h.currDisplayData.attachmentName] : h.deformData = null) : h.deformData = null, 
            isNaN(F) ? h.draw(r, this._boneMatrixArray, 2 == this._aniMode) : h.draw(r, this._boneMatrixArray, 2 == this._aniMode, F), 
            isNaN(F);
            return 0 == this._aniMode ? (this._templet.setGrahicsDataWithCache(this._aniClipIndex, t, r), 
            this._checkIsAllParsed(this._aniClipIndex)) : 1 == this._aniMode && this._setGrahicsDataWithCache(this._aniClipIndex, t, r), 
            r;
        }, e._checkIsAllParsed = function(t) {
            var e, i = 0;
            for (e = Math.floor(.01 + this._templet.getAniDuration(t) / 1e3 * this._player.cacheFrameRate), 
            i = 0; i < e; i++) if (!this._templet.getGrahicsDataWithCache(t, i)) return;
            this._templet.getGrahicsDataWithCache(t, e) ? this._templet.deleteAniData(t) : this._createGraphics(e);
        }, e._setDeform = function(t, e, i, a) {
            if (t) {
                var r, s, n, h = 0, l = 0, o = 0;
                if (t) for (h = 0, l = t.deformSlotDataList.length; h < l; h++) for (r = t.deformSlotDataList[h], 
                o = 0; o < r.deformSlotDisplayList.length; o++) n = i[(s = r.deformSlotDisplayList[o]).slotIndex], 
                s.apply(a, n), e[s.slotIndex] || (e[s.slotIndex] = {}), e[s.slotIndex][s.attachment] = s.deformData;
            }
        }, e.getAnimNum = function() {
            return this._templet.getAnimationCount();
        }, e.getAniNameByIndex = function(t) {
            return this._templet.getAniNameByIndex(t);
        }, e.getSlotByName = function(t) {
            return this._boneSlotDic[t];
        }, e.showSkinByName = function(t, e) {
            void 0 === e && (e = !0), this.showSkinByIndex(this._templet.getSkinIndexByName(t), e);
        }, e.showSkinByIndex = function(t, e) {
            void 0 === e && (e = !0);
            for (var i = 0; i < this._boneSlotArray.length; i++) this._boneSlotArray[i].showSlotData(null, e);
            if (this._templet.showSkinByIndex(this._boneSlotDic, t, e)) {
                var a = this._templet.skinDataArray[t];
                this._skinIndex = t, this._skinName = a.name;
            }
            this._clearCache();
        }, e.showSlotSkinByIndex = function(t, e) {
            if (0 != this._aniMode) {
                var i = this.getSlotByName(t);
                i && i.showDisplayByIndex(e), this._clearCache();
            }
        }, e.showSlotSkinByName = function(t, e) {
            if (0 != this._aniMode) {
                var i = this.getSlotByName(t);
                i && i.showDisplayByName(e), this._clearCache();
            }
        }, e.replaceSlotSkinName = function(t, e, i) {
            if (0 != this._aniMode) {
                var a = this.getSlotByName(t);
                a && a.replaceDisplayByName(e, i), this._clearCache();
            }
        }, e.replaceSlotSkinByIndex = function(t, e, i) {
            if (0 != this._aniMode) {
                var a = this.getSlotByName(t);
                a && a.replaceDisplayByIndex(e, i), this._clearCache();
            }
        }, e.setSlotSkin = function(t, e) {
            if (0 != this._aniMode) {
                var i = this.getSlotByName(t);
                i && i.replaceSkin(e), this._clearCache();
            }
        }, e._clearCache = function() {
            if (1 == this._aniMode) for (var t = 0, e = this._graphicsCache.length; t < e; t++) {
                for (var i = 0, a = this._graphicsCache[t].length; i < a; i++) {
                    var r = this._graphicsCache[t][i];
                    r && r != this.graphics && Q.recycle(r);
                }
                this._graphicsCache[t].length = 0;
            }
        }, e.play = function(t, e, i, a, r, s, n) {
            void 0 === i && (i = !0), void 0 === a && (a = 0), void 0 === r && (r = 0), void 0 === s && (s = !0), 
            void 0 === n && (n = !0), this._playAudio = n, this._indexControl = !1;
            var h = -1, o = NaN;
            if (o = e ? 2147483647 : 0, "string" == typeof t) for (var u = 0, p = this._templet.getAnimationCount(); u < p; u++) {
                var c = this._templet.getAnimation(u);
                if (c && t == c.name) {
                    h = u;
                    break;
                }
            } else h = t;
            h > -1 && h < this.getAnimNum() && (this._aniClipIndex = h, (i || this._pause || this._currAniIndex != h) && (this._currAniIndex = h, 
            this._curOriginalData = new Float32Array(this._templet.getTotalkeyframesLength(h)), 
            this._drawOrder = null, this._eventIndex = 0, this._player.play(h, this._player.playbackRate, o, a, r), 
            s && this._templet.showSkinByIndex(this._boneSlotDic, this._skinIndex), this._pause && (this._pause = !1, 
            this._lastTime = l.now(), this.timer.frameLoop(1, this, this._update, null, !0)), 
            this._update()));
        }, e.stop = function() {
            this._pause || (this._pause = !0, this._player && this._player.stop(!0), this._soundChannelArr.length > 0 && this._onAniSoundStoped(!0), 
            this.timer.clear(this, this._update));
        }, e.playbackRate = function(t) {
            this._player && (this._player.playbackRate = t);
        }, e.paused = function() {
            if (!this._pause) {
                if (this._pause = !0, this._player && (this._player.paused = !0), this._soundChannelArr.length > 0) for (var t, e = this._soundChannelArr.length, i = 0; i < e; i++) (t = this._soundChannelArr[i]).isStopped || t.pause();
                this.timer.clear(this, this._update);
            }
        }, e.resume = function() {
            if (this._indexControl = !1, this._pause) {
                if (this._pause = !1, this._player && (this._player.paused = !1), this._soundChannelArr.length > 0) for (var t, e = this._soundChannelArr.length, i = 0; i < e; i++) (t = this._soundChannelArr[i]).audioBuffer && t.resume();
                this._lastTime = l.now(), this.timer.frameLoop(1, this, this._update, null, !0);
            }
        }, e._getGrahicsDataWithCache = function(t, e) {
            return this._graphicsCache[t][e];
        }, e._setGrahicsDataWithCache = function(t, e, i) {
            this._graphicsCache[t][e] = i;
        }, e.destroy = function(e) {
            void 0 === e && (e = !0), t.prototype.destroy.call(this, e), this._templet._removeReference(1), 
            this._templet = null, this._player && this._player.offAll(), this._player = null, 
            this._curOriginalData = null, this._boneMatrixArray.length = 0, this._lastTime = 0, 
            this.timer.clear(this, this._update), this._soundChannelArr.length > 0 && this._onAniSoundStoped(!0);
        }, s(0, e, "url", function() {
            return this._aniPath;
        }, function(t) {
            this.load(t);
        }), s(0, e, "index", function() {
            return this._index;
        }, function(t) {
            this.player && (this._index = t, this._player.currentTime = 1e3 * this._index / this._player.cacheFrameRate, 
            this._indexControl = !0, this._update(!1));
        }), s(0, e, "total", function() {
            return this._templet && this._player ? this._total = Math.floor(this._templet.getAniDuration(this._player.currentAnimationClipIndex) / 1e3 * this._player.cacheFrameRate) : this._total = -1, 
            this._total;
        }), s(0, e, "templet", function() {
            return this._templet;
        }), s(0, e, "player", function() {
            return this._player;
        }), Skeleton.useSimpleMeshInCanvas = !1, Skeleton;
    }(g)), J = function(t) {
        function Templet() {
            this._mainTexture = null, this._textureJson = null, this._graphicsCache = [], this.srcBoneMatrixArr = [], 
            this.ikArr = [], this.tfArr = [], this.pathArr = [], this.boneSlotDic = {}, this.bindBoneBoneSlotDic = {}, 
            this.boneSlotArray = [], this.skinDataArray = [], this.skinDic = {}, this.subTextureDic = {}, 
            this.isParseFail = !1, this.yReverseMatrix = null, this.drawOrderAniArr = [], this.eventAniArr = [], 
            this.attachmentNames = null, this.deformAniArr = [], this._isParseAudio = !1, this._isDestroyed = !1, 
            this._rate = 30, this.isParserComplete = !1, this.aniSectionDic = {}, this._skBufferUrl = null, 
            this._textureDic = {}, this._loadList = null, this._path = null, this._relativeUrl = null, 
            this.tMatrixDataLen = 0, this.mRootBone = null, Templet.__super.call(this), this.skinSlotDisplayDataArr = [], 
            this.mBoneArr = [];
        }
        r(Templet, "laya.ani.bone.Templet", t);
        var e = Templet.prototype;
        return e.loadAni = function(t) {
            this._skBufferUrl = t, i.loader.load(t, c.create(this, this.onComplete), null, "arraybuffer");
        }, e.onComplete = function(t) {
            if (this._isDestroyed) this.destroy(); else {
                var e = _.getRes(this._skBufferUrl);
                e ? (this._path = this._skBufferUrl.slice(0, this._skBufferUrl.lastIndexOf("/")) + "/", 
                this.parseData(null, e)) : this.event("error", "load failed:" + this._skBufferUrl);
            }
        }, e.parseData = function(t, e, i) {
            if (void 0 === i && (i = 30), !this._path) {
                var a = this._relativeUrl || this.url;
                if (a) {
                    var r = a.lastIndexOf("/");
                    this._path = r > 0 ? a.slice(0, r) + "/" : "";
                }
            }
            this._mainTexture = t, this._rate = i, this.parse(e);
        }, e.buildArmature = function(t) {
            return void 0 === t && (t = 0), new j(this, t);
        }, e.parse = function(e) {
            t.prototype.parse.call(this, e), this.event("loaded", this), this._aniVersion === Templet.LAYA_ANIMATION_VISION ? this._isParseAudio = !0 : this._aniVersion != Templet.LAYA_ANIMATION_160_VISION && console.log("[Error] 版本不一致，请使用IDE版本配套的重新导出" + this._aniVersion + "->" + Templet.LAYA_ANIMATION_VISION), 
            this._mainTexture ? this._parsePublicExtData() : this._parseTexturePath();
        }, e._parseTexturePath = function() {
            if (this._isDestroyed) this.destroy(); else {
                var t = 0;
                this._loadList = [];
                var e, a = new o(this.getPublicExtData()), r = 0, s = 0, n = 0, h = a.getInt32(), l = a.readUTFString(), u = l.split("\n");
                for (t = 0; t < h; t++) e = this._path + u[2 * t], l = u[2 * t + 1], a.getFloat32(), 
                a.getFloat32(), r = a.getFloat32(), s = a.getFloat32(), n = a.getFloat32(), isNaN(n) ? 0 : n, 
                n = a.getFloat32(), isNaN(n) ? 0 : n, n = a.getFloat32(), isNaN(n) ? r : n, n = a.getFloat32(), 
                isNaN(n) ? s : n, -1 == this._loadList.indexOf(e) && this._loadList.push(e);
                i.loader.load(this._loadList, c.create(this, this._textureComplete));
            }
        }, e._textureComplete = function() {
            for (var t, e = 0, i = this._loadList.length; e < i; e++) t = this._loadList[e], 
            this._textureDic[t] = _.getRes(t);
            this._parsePublicExtData();
        }, e._parsePublicExtData = function() {
            var t = 0, e = 0, i = 0, a = 0, r = 0;
            for (t = 0, r = this.getAnimationCount(); t < r; t++) this._graphicsCache.push([]);
            var s;
            s = "Dragon" != this._aniClassName;
            var n, h, l = new o(this.getPublicExtData()), u = 0, p = 0, c = 0, _ = 0, d = 0, m = 0, y = 0, x = 0, g = 0, D = l.getInt32(), v = l.readUTFString(), I = v.split("\n");
            for (t = 0; t < D; t++) {
                if (n = this._mainTexture, h = this._path + I[2 * t], v = I[2 * t + 1], null == this._mainTexture && (n = this._textureDic[h]), 
                !n) return this.event("error", this), void (this.isParseFail = !0);
                u = l.getFloat32(), p = l.getFloat32(), c = l.getFloat32(), _ = l.getFloat32(), 
                g = l.getFloat32(), d = isNaN(g) ? 0 : g, g = l.getFloat32(), m = isNaN(g) ? 0 : g, 
                g = l.getFloat32(), y = isNaN(g) ? c : g, g = l.getFloat32(), x = isNaN(g) ? _ : g, 
                this.subTextureDic[v] = M.create(n, u, p, c, _, -d, -m, y, x);
            }
            this._mainTexture = n;
            var S, T, b, C, P, F = l.getUint16();
            for (t = 0; t < F; t++) (S = []).push(l.getUint16()), S.push(l.getUint16()), S.push(l.getUint16()), 
            S.push(l.getUint16()), this.aniSectionDic[t] = S;
            var B, L = l.getInt16(), K = {};
            for (t = 0; t < L; t++) T = new z(), 0 == t ? B = T : T.root = B, T.d = s ? -1 : 1, 
            C = l.readUTFString(), P = l.readUTFString(), T.length = l.getFloat32(), 1 == l.getByte() && (T.inheritRotation = !1), 
            1 == l.getByte() && (T.inheritScale = !1), T.name = C, P && ((b = K[P]) ? b.addChild(T) : this.mRootBone = T), 
            K[C] = T, this.mBoneArr.push(T);
            this.tMatrixDataLen = l.getUint16();
            var G, H, Q = l.getUint16(), Z = Math.floor(Q / this.tMatrixDataLen), $ = this.srcBoneMatrixArr;
            for (t = 0; t < Z; t++) (G = new Y()).scX = l.getFloat32(), G.skX = l.getFloat32(), 
            G.skY = l.getFloat32(), G.scY = l.getFloat32(), G.x = l.getFloat32(), G.y = l.getFloat32(), 
            8 === this.tMatrixDataLen && (G.skewX = l.getFloat32(), G.skewY = l.getFloat32()), 
            $.push(G), (T = this.mBoneArr[t]).transform = G;
            var j, J = l.getUint16(), tt = 0;
            for (t = 0; t < J; t++) {
                for (H = new q(), tt = l.getUint16(), e = 0; e < tt; e++) H.boneNames.push(l.readUTFString()), 
                H.boneIndexs.push(l.getInt16());
                H.name = l.readUTFString(), H.targetBoneName = l.readUTFString(), H.targetBoneIndex = l.getInt16(), 
                H.bendDirection = l.getFloat32(), H.mix = l.getFloat32(), H.isSpine = s, this.ikArr.push(H);
            }
            var et, it = l.getUint16(), at = 0;
            for (t = 0; t < it; t++) {
                for (j = new U(), at = l.getUint16(), e = 0; e < at; e++) j.boneIndexs.push(l.getInt16());
                j.name = l.getUTFString(), j.targetIndex = l.getInt16(), j.rotateMix = l.getFloat32(), 
                j.translateMix = l.getFloat32(), j.scaleMix = l.getFloat32(), j.shearMix = l.getFloat32(), 
                j.offsetRotation = l.getFloat32(), j.offsetX = l.getFloat32(), j.offsetY = l.getFloat32(), 
                j.offsetScaleX = l.getFloat32(), j.offsetScaleY = l.getFloat32(), j.offsetShearY = l.getFloat32(), 
                this.tfArr.push(j);
            }
            var rt = l.getUint16(), st = 0;
            for (t = 0; t < rt; t++) {
                for ((et = new N()).name = l.readUTFString(), st = l.getUint16(), e = 0; e < st; e++) et.bones.push(l.getInt16());
                et.target = l.readUTFString(), et.positionMode = l.readUTFString(), et.spacingMode = l.readUTFString(), 
                et.rotateMode = l.readUTFString(), et.offsetRotation = l.getFloat32(), et.position = l.getFloat32(), 
                et.spacing = l.getFloat32(), et.rotateMix = l.getFloat32(), et.translateMix = l.getFloat32(), 
                this.pathArr.push(et);
            }
            var nt, ht, lt, ot, ut, pt = 0, ct = 0, _t = 0, dt = NaN, ft = 0, mt = l.getInt16();
            for (t = 0; t < mt; t++) {
                var yt = l.getUint8(), xt = {};
                this.deformAniArr.push(xt);
                for (var gt = 0; gt < yt; gt++) for ((nt = new R()).skinName = l.getUTFString(), 
                xt[nt.skinName] = nt, pt = l.getInt16(), e = 0; e < pt; e++) for (ht = new k(), 
                nt.deformSlotDataList.push(ht), ct = l.getInt16(), i = 0; i < ct; i++) for (lt = new E(), 
                ht.deformSlotDisplayList.push(lt), lt.slotIndex = l.getInt16(), lt.attachment = l.getUTFString(), 
                _t = l.getInt16(), a = 0; a < _t; a++) for (1 == l.getByte() ? lt.tweenKeyList.push(!0) : lt.tweenKeyList.push(!1), 
                dt = l.getFloat32(), lt.timeList.push(dt), ot = [], lt.vectices.push(ot), ft = l.getInt16(), 
                r = 0; r < ft; r++) ot.push(l.getFloat32());
            }
            var Dt, Mt, vt = l.getInt16(), At = 0, It = 0;
            for (t = 0; t < vt; t++) {
                for (At = l.getInt16(), ut = [], e = 0; e < At; e++) {
                    for ((Dt = new X()).time = l.getFloat32(), It = l.getInt16(), i = 0; i < It; i++) Dt.drawOrder.push(l.getInt16());
                    ut.push(Dt);
                }
                this.drawOrderAniArr.push(ut);
            }
            var St, Tt = l.getInt16(), bt = 0;
            for (t = 0; t < Tt; t++) {
                for (bt = l.getInt16(), Mt = [], e = 0; e < bt; e++) (St = new W()).name = l.getUTFString(), 
                this._isParseAudio && (St.audioValue = l.getUTFString()), St.intValue = l.getInt32(), 
                St.floatValue = l.getFloat32(), St.stringValue = l.getUTFString(), St.time = l.getFloat32(), 
                Mt.push(St);
                this.eventAniArr.push(Mt);
            }
            var Nt = l.getInt16();
            if (Nt > 0) for (this.attachmentNames = [], t = 0; t < Nt; t++) this.attachmentNames.push(l.getUTFString());
            var Ct, kt, Pt = l.getInt16();
            for (t = 0; t < Pt; t++) (Ct = new O()).name = l.readUTFString(), Ct.parent = l.readUTFString(), 
            Ct.attachmentName = l.readUTFString(), Ct.srcDisplayIndex = Ct.displayIndex = l.getInt16(), 
            Ct.templet = this, this.boneSlotDic[Ct.name] = Ct, null == (kt = this.bindBoneBoneSlotDic[Ct.parent]) && (this.bindBoneBoneSlotDic[Ct.parent] = kt = []), 
            kt.push(Ct), this.boneSlotArray.push(Ct);
            var Ft, wt, Bt, Ut = l.readUTFString().split("\n"), Lt = 0, Rt = l.getUint8(), Vt = 0, Et = 0, Ot = 0, Kt = 0, Yt = 0, Xt = 0, Gt = 0;
            for (t = 0; t < Rt; t++) {
                for ((Ft = new w()).name = Ut[Lt++], Vt = l.getUint8(), e = 0; e < Vt; e++) {
                    for ((wt = new A()).name = Ut[Lt++], Ct = this.boneSlotDic[wt.name], Et = l.getUint8(), 
                    i = 0; i < Et; i++) {
                        if (Bt = new V(), this.skinSlotDisplayDataArr.push(Bt), Bt.name = Ut[Lt++], Bt.attachmentName = Ut[Lt++], 
                        Bt.transform = new Y(), Bt.transform.scX = l.getFloat32(), Bt.transform.skX = l.getFloat32(), 
                        Bt.transform.skY = l.getFloat32(), Bt.transform.scY = l.getFloat32(), Bt.transform.x = l.getFloat32(), 
                        Bt.transform.y = l.getFloat32(), wt.displayArr.push(Bt), Bt.width = l.getFloat32(), 
                        Bt.height = l.getFloat32(), Bt.type = l.getUint8(), Bt.verLen = l.getUint16(), (L = l.getUint16()) > 0) for (Bt.bones = [], 
                        a = 0; a < L; a++) {
                            var zt = l.getUint16();
                            Bt.bones.push(zt);
                        }
                        if ((Ot = l.getUint16()) > 0) for (Bt.uvs = [], a = 0; a < Ot; a++) Bt.uvs.push(l.getFloat32());
                        if ((Kt = l.getUint16()) > 0) for (Bt.weights = [], a = 0; a < Kt; a++) Bt.weights.push(l.getFloat32());
                        if ((Yt = l.getUint16()) > 0) for (Bt.triangles = [], a = 0; a < Yt; a++) Bt.triangles.push(l.getUint16());
                        if ((Xt = l.getUint16()) > 0) for (Bt.vertices = [], a = 0; a < Xt; a++) Bt.vertices.push(l.getFloat32());
                        if ((Gt = l.getUint16()) > 0) for (Bt.lengths = [], a = 0; a < Gt; a++) Bt.lengths.push(l.getFloat32());
                    }
                    Ft.slotArr.push(wt);
                }
                this.skinDic[Ft.name] = Ft, this.skinDataArray.push(Ft);
            }
            1 == l.getUint8() ? (this.yReverseMatrix = new f(1, 0, 0, -1, 0, 0), B && B.setTempMatrix(this.yReverseMatrix)) : B && B.setTempMatrix(new f()), 
            this.showSkinByIndex(this.boneSlotDic, 0), this.isParserComplete = !0, this.event("complete", this);
        }, e.getTexture = function(t) {
            var e = this.subTextureDic[t];
            return e || (e = this.subTextureDic[t.substr(0, t.length - 1)]), null == e ? this._mainTexture : e;
        }, e.showSkinByIndex = function(t, e, i) {
            if (void 0 === i && (i = !0), e < 0 && e >= this.skinDataArray.length) return !1;
            var a, r, s = 0, n = 0, h = this.skinDataArray[e];
            if (h) {
                for (s = 0, n = h.slotArr.length; s < n; s++) (r = h.slotArr[s]) && (a = t[r.name]) && (a.showSlotData(r, i), 
                i && "undefined" != a.attachmentName && "null" != a.attachmentName ? a.showDisplayByName(a.attachmentName) : a.showDisplayByIndex(a.displayIndex));
                return !0;
            }
            return !1;
        }, e.getSkinIndexByName = function(t) {
            for (var e = 0, i = this.skinDataArray.length; e < i; e++) if (this.skinDataArray[e].name == t) return e;
            return -1;
        }, e.getGrahicsDataWithCache = function(t, e) {
            return this._graphicsCache[t] && this._graphicsCache[t][e] ? this._graphicsCache[t][e] : null;
        }, e._setCreateURL = function(t) {
            this._relativeUrl = t, laya.resource.Resource.prototype._setCreateURL.call(this, t);
        }, e.setGrahicsDataWithCache = function(t, e, i) {
            this._graphicsCache[t][e] = i;
        }, e.deleteAniData = function(t) {
            if (this._anis[t]) {
                var e = this._anis[t];
                e.bone3DMap = null, e.nodes = null;
            }
        }, e.destroy = function() {
            var t, e;
            for (e in this._isDestroyed = !0, this.subTextureDic) (t = this.subTextureDic[e]) && t.destroy();
            for (e in this._textureDic) (t = this._textureDic[e]) && t.destroy();
            for (var i = 0, a = this.skinSlotDisplayDataArr.length; i < a; i++) this.skinSlotDisplayDataArr[i].destory();
            this.skinSlotDisplayDataArr.length = 0, this.url && delete Templet.TEMPLET_DICTIONARY[this.url], 
            laya.resource.Resource.prototype.destroy.call(this);
        }, e.getAniNameByIndex = function(t) {
            var e = this.getAnimation(t);
            return e ? e.name : null;
        }, s(0, e, "rate", function() {
            return this._rate;
        }, function(t) {
            this._rate = t;
        }), Templet.LAYA_ANIMATION_160_VISION = "LAYAANIMATION:1.6.0", Templet.LAYA_ANIMATION_VISION = "LAYAANIMATION:1.7.0", 
        Templet.TEMPLET_DICTIONARY = null, Templet;
    }($);
}(window, document, Laya);