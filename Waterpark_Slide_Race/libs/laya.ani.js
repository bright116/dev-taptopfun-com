!function(i, a, r) {
    var s = (r.un, r.uns, r.static), n = r.class, h = r.getset, l = r.__newvec, o = laya.maths.Bezier, u = laya.utils.Browser, c = laya.utils.Byte, _ = (laya.Const, 
    laya.events.Event, laya.events.EventDispatcher), p = laya.display.Graphics, d = laya.utils.Handler, f = laya.net.Loader, m = laya.maths.MathUtil, y = laya.maths.Matrix, x = (laya.display.Node, 
    laya.maths.Rectangle), g = (laya.renders.Render, laya.resource.Resource), v = (laya.media.SoundChannel, 
    laya.media.SoundManager), M = laya.display.Sprite, D = laya.utils.Stat, I = laya.resource.Texture, A = (laya.resource.Texture2D, 
    laya.utils.Timer, laya.net.URL, laya.utils.Utils), b = function() {
        function t() {
            this.name = null, this.displayArr = [];
        }
        return n(t, "laya.ani.bone.SlotData"), t.prototype.getDisplayByName = function(t) {
            for (var e = 0, i = this.displayArr.length; i > e; e++) if (this.displayArr[e].attachmentName == t) return e;
            return -1;
        }, t;
    }(), N = function() {
        function t() {
            this.texture = null, this.uvTransform = null, this.useUvTransform = !1, this.canvasPadding = 1, 
            this.uvs = new Float32Array([ 0, 0, 1, 0, 1, 1, 0, 1 ]), this.vertices = new Float32Array([ 0, 0, 100, 0, 100, 100, 0, 100 ]), 
            this.indexes = new Uint16Array([ 0, 1, 3, 3, 1, 2 ]);
        }
        return n(t, "laya.ani.bone.canvasmesh.MeshData"), t.prototype.getBounds = function() {
            return x._getWrapRec(this.vertices);
        }, t;
    }(), T = function() {
        function t() {
            this.name = null, this.parentIndex = 0, this.parent = null, this.keyframeWidth = 0, 
            this.lerpType = 0, this.interpolationMethod = null, this.childs = null, this.keyFrame = null, 
            this.playTime = NaN, this.extenData = null, this.dataOffset = 0;
        }
        return n(t, "laya.ani.AnimationNodeContent"), t;
    }(), S = function() {
        function t() {
            this.startTime = NaN, this.duration = NaN, this.interpolationData = null, this.data = null, 
            this.dData = null, this.nextData = null;
        }
        return n(t, "laya.ani.KeyFramesContent"), t;
    }(), C = function() {
        function t(t, e) {
            this._data = null, this._bones = null, this.target = null, this.rotateMix = NaN, 
            this.translateMix = NaN, this.scaleMix = NaN, this.shearMix = NaN, this._temp = l(2, 0), 
            this._data = t, null == this._bones && (this._bones = []), this.target = e[t.targetIndex];
            var i, a = 0;
            for (a = 0, i = t.boneIndexs.length; i > a; a++) this._bones.push(e[t.boneIndexs[a]]);
            this.rotateMix = t.rotateMix, this.translateMix = t.translateMix, this.scaleMix = t.scaleMix, 
            this.shearMix = t.shearMix;
        }
        return n(t, "laya.ani.bone.TfConstraint"), t.prototype.apply = function() {
            for (var t, e = this.target.resultMatrix.a, i = this.target.resultMatrix.b, a = this.target.resultMatrix.c, r = this.target.resultMatrix.d, s = 0, n = this._bones.length; n > s; s++) {
                if (t = this._bones[s], this.rotateMix > 0) {
                    var h = t.resultMatrix.a, l = t.resultMatrix.b, o = t.resultMatrix.c, u = t.resultMatrix.d, c = Math.atan2(a, e) - Math.atan2(o, h) + this._data.offsetRotation * Math.PI / 180;
                    c > Math.PI ? c -= 2 * Math.PI : c < -Math.PI && (c += 2 * Math.PI), c *= this.rotateMix;
                    var _ = Math.cos(c), p = Math.sin(c);
                    t.resultMatrix.a = _ * h - p * o, t.resultMatrix.b = _ * l - p * u, t.resultMatrix.c = p * h + _ * o, 
                    t.resultMatrix.d = p * l + _ * u;
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
                    (c = Math.atan2(r, i) - Math.atan2(a, e) - (y - Math.atan2(t.resultMatrix.c, t.resultMatrix.a))) > Math.PI ? c -= 2 * Math.PI : c < -Math.PI && (c += 2 * Math.PI), 
                    c = y + (c + this._data.offsetShearY * Math.PI / 180) * this.shearMix, m = Math.sqrt(l * l + u * u), 
                    t.resultMatrix.b = Math.cos(c) * m, t.resultMatrix.d = Math.sin(c) * m;
                }
            }
        }, t;
    }(), F = function() {
        function t() {
            this.name = null, this.target = null, this.positionMode = null, this.spacingMode = null, 
            this.rotateMode = null, this.offsetRotation = NaN, this.position = NaN, this.spacing = NaN, 
            this.rotateMix = NaN, this.translateMix = NaN, this.bones = [];
        }
        return n(t, "laya.ani.bone.PathConstraintData"), t;
    }(), w = function() {
        function t() {}
        return n(t, "laya.ani.bone.UVTools"), t.getRelativeUV = function(t, e, i) {
            var a = t[0], r = t[2] - t[0], s = t[1], n = t[5] - t[1];
            i || (i = []), i.length = e.length;
            var h, l = 0;
            h = i.length;
            var o = 1 / r, u = 1 / n;
            for (l = 0; h > l; l += 2) i[l] = (e[l] - a) * o, i[l + 1] = (e[l + 1] - s) * u;
            return i;
        }, t.getAbsoluteUV = function(t, e, i) {
            if (0 == t[0] && 0 == t[1] && 1 == t[4] && 1 == t[5]) return i ? (A.copyArray(i, e), 
            i) : e;
            var a = t[0], r = t[2] - t[0], s = t[1], n = t[5] - t[1];
            i || (i = []), i.length = e.length;
            var h, l = 0;
            for (h = i.length, l = 0; h > l; l += 2) i[l] = e[l] * r + a, i[l + 1] = e[l + 1] * n + s;
            return i;
        }, t;
    }(), k = function() {
        function t() {
            this.deformSlotDisplayList = [];
        }
        return n(t, "laya.ani.bone.DeformSlotData"), t;
    }(), P = function() {
        function t() {}
        return n(t, "laya.ani.AnimationParser02"), t.READ_DATA = function() {
            t._DATA.offset = t._reader.getUint32(), t._DATA.size = t._reader.getUint32();
        }, t.READ_BLOCK = function() {
            for (var e = t._BLOCK.count = t._reader.getUint16(), i = t._BLOCK.blockStarts = [], a = t._BLOCK.blockLengths = [], r = 0; e > r; r++) i.push(t._reader.getUint32()), 
            a.push(t._reader.getUint32());
        }, t.READ_STRINGS = function() {
            var e = t._reader.getUint32(), i = t._reader.getUint16(), a = t._reader.pos;
            t._reader.pos = e + t._DATA.offset;
            for (var r = 0; i > r; r++) t._strings[r] = t._reader.readUTFString();
            t._reader.pos = a;
        }, t.parse = function(e, i) {
            t._templet = e, t._reader = i, i.__getBuffer(), t.READ_DATA(), t.READ_BLOCK(), t.READ_STRINGS();
            for (var a = 0, r = t._BLOCK.count; r > a; a++) {
                var s = i.getUint16(), n = t._strings[s], h = t["READ_" + n];
                if (null == h) throw new Error("model file err,no this function:" + s + " " + n);
                h.call(null);
            }
        }, t.READ_ANIMATIONS = function() {
            var e = t._reader, i = e.__getBuffer(), a = 0, r = 0, s = 0, n = 0, h = e.getUint16(), l = [];
            for (l.length = h, a = 0; h > a; a++) l[a] = J.interpolation[e.getByte()];
            var o = e.getUint8();
            for (t._templet._anis.length = o, a = 0; o > a; a++) {
                var u = t._templet._anis[a] = new V();
                u.nodes = new Array();
                var c = u.name = t._strings[e.getUint16()];
                t._templet._aniMap[c] = a, u.bone3DMap = {}, u.playTime = e.getFloat32();
                var _ = u.nodes.length = e.getInt16();
                for (u.totalKeyframeDatasLength = 0, r = 0; _ > r; r++) {
                    var p = u.nodes[r] = new T();
                    p.keyframeWidth = h, p.childs = [];
                    var d = e.getUint16();
                    d >= 0 && (p.name = t._strings[d], u.bone3DMap[p.name] = r), p.keyFrame = new Array(), 
                    p.parentIndex = e.getInt16(), -1 == p.parentIndex ? p.parent = null : p.parent = u.nodes[p.parentIndex], 
                    u.totalKeyframeDatasLength += h, p.interpolationMethod = l, null != p.parent && p.parent.childs.push(p);
                    var f = e.getUint16();
                    p.keyFrame.length = f;
                    var m = null, y = null;
                    for (s = 0, n = f; n > s; s++) {
                        (m = p.keyFrame[s] = new S()).startTime = e.getFloat32(), y && (y.duration = m.startTime - y.startTime), 
                        m.dData = new Float32Array(h), m.nextData = new Float32Array(h);
                        var x = t._DATA.offset, g = e.getUint32(), v = 4 * h, M = i.slice(x + g, x + g + v);
                        m.data = new Float32Array(M), y = m;
                    }
                    m.duration = 0, p.playTime = u.playTime, t._templet._calculateKeyFrame(p, f, h);
                }
            }
        }, t._templet = null, t._reader = null, t._strings = [], s(t, [ "_BLOCK", function() {
            return this._BLOCK = {
                count: 0
            };
        }, "_DATA", function() {
            return this._DATA = {
                offset: 0,
                size: 0
            };
        } ]), t;
    }(), U = function() {
        function t() {}
        return n(t, "laya.ani.AnimationParser01"), t.parse = function(t, e) {
            var i = e.__getBuffer(), a = 0, r = 0, s = 0, n = 0, h = 0, l = 0, o = 0, u = e.readUTFString();
            t._aniClassName = u;
            var _, p = e.readUTFString().split("\n"), d = e.getUint8(), f = e.getUint32(), m = e.getUint32();
            f > 0 && (_ = i.slice(f, m));
            var y = new c(_);
            for (m > 0 && (t._publicExtData = i.slice(m, i.byteLength)), t._useParent = !!e.getUint8(), 
            t._anis.length = d, a = 0; d > a; a++) {
                var x = t._anis[a] = new V();
                x.nodes = new Array();
                var g = x.name = p[e.getUint16()];
                t._aniMap[g] = a, x.bone3DMap = {}, x.playTime = e.getFloat32();
                var v = x.nodes.length = e.getUint8();
                for (x.totalKeyframeDatasLength = 0, r = 0; v > r; r++) {
                    var M = x.nodes[r] = new T();
                    M.childs = [];
                    var D = e.getInt16();
                    D >= 0 && (M.name = p[D], x.bone3DMap[M.name] = r), M.keyFrame = new Array(), M.parentIndex = e.getInt16(), 
                    -1 == M.parentIndex ? M.parent = null : M.parent = x.nodes[M.parentIndex], M.lerpType = e.getUint8();
                    var I = e.getUint32();
                    y.pos = I;
                    var A = M.keyframeWidth = y.getUint16();
                    if (x.totalKeyframeDatasLength += A, 0 === M.lerpType || 1 === M.lerpType) for (M.interpolationMethod = [], 
                    M.interpolationMethod.length = A, s = 0; A > s; s++) M.interpolationMethod[s] = J.interpolation[y.getUint8()];
                    null != M.parent && M.parent.childs.push(M);
                    var b = e.getUint16();
                    b > 0 && (M.extenData = i.slice(e.pos, e.pos + b), e.pos += b);
                    var N = e.getUint16();
                    M.keyFrame.length = N;
                    var C, F = 0;
                    for (s = 0, n = N; n > s; s++) {
                        if ((C = M.keyFrame[s] = new S()).duration = e.getFloat32(), C.startTime = F, 2 === M.lerpType) {
                            C.interpolationData = [];
                            var w, k = e.getUint8();
                            switch (w = e.getFloat32()) {
                              case 254:
                                for (C.interpolationData.length = A, o = 0; A > o; o++) C.interpolationData[o] = 0;
                                break;

                              case 255:
                                for (C.interpolationData.length = A, o = 0; A > o; o++) C.interpolationData[o] = 5;
                                break;

                              default:
                                for (C.interpolationData.push(w), l = 1; k > l; l++) C.interpolationData.push(e.getFloat32());
                            }
                        }
                        for (C.data = new Float32Array(A), C.dData = new Float32Array(A), C.nextData = new Float32Array(A), 
                        h = 0; A > h; h++) C.data[h] = e.getFloat32(), C.data[h] > -1e-8 && C.data[h] < 1e-8 && (C.data[h] = 0);
                        F += C.duration;
                    }
                    C.startTime = x.playTime, M.playTime = x.playTime, t._calculateKeyFrame(M, N, A);
                }
            }
        }, t;
    }(), B = function() {
        function t() {
            this.name = null, this.slotArr = [];
        }
        return n(t, "laya.ani.bone.SkinData"), t;
    }(), L = function() {
        function t(t, e) {
            this._targetBone = null, this._bones = null, this._data = null, this.name = null, 
            this.mix = NaN, this.bendDirection = NaN, this.isSpine = !0, this._sp = null, this.isDebug = !1, 
            this._data = t, this._targetBone = e[t.targetBoneIndex], this.isSpine = t.isSpine, 
            null == this._bones && (this._bones = []), this._bones.length = 0;
            for (var i = 0, a = t.boneIndexs.length; a > i; i++) this._bones.push(e[t.boneIndexs[i]]);
            this.name = t.name, this.mix = t.mix, this.bendDirection = t.bendDirection;
        }
        n(t, "laya.ani.bone.IkConstraint");
        var e = t.prototype;
        return e.apply = function() {
            switch (this._bones.length) {
              case 1:
                this._applyIk1(this._bones[0], this._targetBone.resultMatrix.tx, this._targetBone.resultMatrix.ty, this.mix);
                break;

              case 2:
                this.isSpine ? this._applyIk2(this._bones[0], this._bones[1], this._targetBone.resultMatrix.tx, this._targetBone.resultMatrix.ty, this.bendDirection, this.mix) : this._applyIk3(this._bones[0], this._bones[1], this._targetBone.resultMatrix.tx, this._targetBone.resultMatrix.ty, this.bendDirection, this.mix);
            }
        }, e._applyIk1 = function(e, i, a, r) {
            var s = e.parentBone, n = 1 / (s.resultMatrix.a * s.resultMatrix.d - s.resultMatrix.b * s.resultMatrix.c), h = i - s.resultMatrix.tx, l = a - s.resultMatrix.ty, o = (h * s.resultMatrix.d - l * s.resultMatrix.c) * n - e.transform.x, u = (l * s.resultMatrix.a - h * s.resultMatrix.b) * n - e.transform.y, c = Math.atan2(u, o) * t.radDeg - 0 - e.transform.skX;
            e.transform.scX < 0 && (c += 180), c > 180 ? c -= 360 : -180 > c && (c += 360), 
            e.transform.skX = e.transform.skY = e.transform.skX + c * r, e.update();
        }, e.updatePos = function(t, e) {
            this._sp && this._sp.pos(t, e);
        }, e._applyIk2 = function(e, i, a, s, n, h) {
            if (0 != h) {
                var l = e.resultTransform.x, o = e.resultTransform.y, u = e.transform.scX, c = e.transform.scY, _ = i.transform.scX, p = 0, d = 0, f = 0;
                0 > u ? (u = -u, p = 180, f = -1) : (p = 0, f = 1), 0 > c && (c = -c, f = -f), 0 > _ ? (_ = -_, 
                d = 180) : d = 0;
                var m = i.resultTransform.x, y = NaN, x = NaN, g = NaN, v = e.resultMatrix.a, D = e.resultMatrix.c, I = e.resultMatrix.b, A = e.resultMatrix.d, b = Math.abs(u - c) <= 1e-4;
                b ? (x = v * m + D * (y = i.resultTransform.y) + e.resultMatrix.tx, g = I * m + A * y + e.resultMatrix.ty) : (y = 0, 
                x = v * m + e.resultMatrix.tx, g = I * m + e.resultMatrix.ty), this.isDebug && (this._sp || (this._sp = new M(), 
                r.stage.addChild(this._sp)), this._sp.graphics.clear(), this._sp.graphics.drawCircle(a, s, 15, "#ffff00"), 
                this._sp.graphics.drawCircle(x, g, 15, "#ff00ff")), e.setRotation(Math.atan2(g - e.resultMatrix.ty, x - e.resultMatrix.tx));
                var N = e.parentBone;
                v = N.resultMatrix.a, D = N.resultMatrix.c, I = N.resultMatrix.b;
                var T = 1 / (v * (A = N.resultMatrix.d) - D * I), S = a - N.resultMatrix.tx, C = s - N.resultMatrix.ty, F = (S * A - C * D) * T - l, w = (C * v - S * I) * T - o, k = ((S = x - N.resultMatrix.tx) * A - (C = g - N.resultMatrix.ty) * D) * T - l, P = (C * v - S * I) * T - o, U = Math.sqrt(k * k + P * P), B = i.length * _, L = NaN, R = NaN;
                if (b) {
                    var V = (F * F + w * w - U * U - (B *= u) * B) / (2 * U * B);
                    -1 > V ? V = -1 : V > 1 && (V = 1), R = Math.acos(V) * n, v = U + B * V, D = B * Math.sin(R), 
                    L = Math.atan2(w * v - F * D, F * v + w * D);
                } else {
                    var E = (v = u * B) * v, O = (D = c * B) * D, Y = F * F + w * w, K = Math.atan2(w, F), X = -2 * O * U, W = O - E;
                    if ((A = X * X - 4 * W * (I = O * U * U + E * Y - E * O)) > 0) {
                        var G = Math.sqrt(A);
                        0 > X && (G = -G);
                        var z = (G = -(X + G) / 2) / W, q = I / G, H = Math.abs(z) < Math.abs(q) ? z : q;
                        Y >= H * H && (C = Math.sqrt(Y - H * H) * n, L = K - Math.atan2(C, H), R = Math.atan2(C / c, (H - U) / u));
                    }
                    var Q = 0, Z = Number.MAX_VALUE, $ = 0, j = 0, J = 0, tt = 0, et = 0, it = 0;
                    (A = (S = U + v) * S) > tt && (J = 0, tt = A, et = S), Z > (A = (S = U - v) * S) && (Q = Math.PI, 
                    Z = A, $ = S);
                    var at = Math.acos(-v * U / (E - O));
                    Z > (A = (S = v * Math.cos(at) + U) * S + (C = D * Math.sin(at)) * C) && (Q = at, 
                    Z = A, $ = S, j = C), A > tt && (J = at, tt = A, et = S, it = C), (Z + tt) / 2 >= Y ? (L = K - Math.atan2(j * n, $), 
                    R = Q * n) : (L = K - Math.atan2(it * n, et), R = J * n);
                }
                var rt = Math.atan2(y, m) * f, st = e.resultTransform.skX;
                (L = (L - rt) * t.radDeg + p - st) > 180 ? L -= 360 : -180 > L && (L += 360), e.resultTransform.x = l, 
                e.resultTransform.y = o, e.resultTransform.skX = e.resultTransform.skY = st + L * h, 
                st = i.resultTransform.skX, st %= 360, (R = ((R + rt) * t.radDeg - 0) * f + d - st) > 180 ? R -= 360 : -180 > R && (R += 360), 
                i.resultTransform.x = m, i.resultTransform.y = y, i.resultTransform.skX = i.resultTransform.skY = i.resultTransform.skY + R * h, 
                e.update();
            }
        }, e._applyIk3 = function(e, i, a, s, n, h) {
            if (0 != h) {
                var l, o, u = i.resultMatrix.a * i.length, c = i.resultMatrix.b * i.length, _ = u * u + c * c, p = Math.sqrt(_), d = e.resultMatrix.tx, f = e.resultMatrix.ty, m = i.resultMatrix.tx, y = i.resultMatrix.ty, x = m - d, g = y - f, v = x * x + g * g, D = Math.sqrt(v), I = (x = a - e.resultMatrix.tx) * x + (g = s - e.resultMatrix.ty) * g, A = Math.sqrt(I);
                if (A >= p + D || D >= A + p || p >= A + D) {
                    var b;
                    m = d + (b = A >= p + D ? 1 : -1) * (a - d) * D / A, y = f + b * (s - f) * D / A;
                } else {
                    var N = (v - _ + I) / (2 * I), T = Math.sqrt(v - N * N * I) / A, S = d + x * N, C = f + g * N, F = -g * T, w = x * T;
                    n > 0 ? (m = S - F, y = C - w) : (m = S + F, y = C + w);
                }
                l = m, o = y, this.isDebug && (this._sp || (this._sp = new M(), r.stage.addChild(this._sp)), 
                this._sp.graphics.clear(), this._sp.graphics.drawCircle(d, f, 15, "#ff00ff"), this._sp.graphics.drawCircle(a, s, 15, "#ffff00"), 
                this._sp.graphics.drawCircle(l, o, 15, "#ff00ff"));
                var k, P;
                k = Math.atan2(o - e.resultMatrix.ty, l - e.resultMatrix.tx), e.setRotation(k), 
                (P = t._tempMatrix).identity(), P.rotate(k), P.scale(e.resultMatrix.getScaleX(), e.resultMatrix.getScaleY()), 
                P.translate(e.resultMatrix.tx, e.resultMatrix.ty), P.copyTo(e.resultMatrix), e.updateChild();
                var U, B;
                U = Math.atan2(s - o, a - l), i.setRotation(U), (B = t._tempMatrix).identity(), 
                B.rotate(U), B.scale(i.resultMatrix.getScaleX(), i.resultMatrix.getScaleY()), B.translate(l, o), 
                P.copyTo(i.resultMatrix), i.updateChild();
            }
        }, s(t, [ "radDeg", function() {
            return this.radDeg = 180 / Math.PI;
        }, "degRad", function() {
            return this.degRad = Math.PI / 180;
        }, "_tempMatrix", function() {
            return this._tempMatrix = new y();
        } ]), t;
    }(), R = function() {
        function t() {
            this.name = null, this.targetIndex = 0, this.rotateMix = NaN, this.translateMix = NaN, 
            this.scaleMix = NaN, this.shearMix = NaN, this.offsetRotation = NaN, this.offsetX = NaN, 
            this.offsetY = NaN, this.offsetScaleX = NaN, this.offsetScaleY = NaN, this.offsetShearY = NaN, 
            this.boneIndexs = [];
        }
        return n(t, "laya.ani.bone.TfConstraintData"), t;
    }(), V = function() {
        function t() {
            this.nodes = null, this.name = null, this.playTime = NaN, this.bone3DMap = null, 
            this.totalKeyframeDatasLength = 0;
        }
        return n(t, "laya.ani.AnimationContent"), t;
    }(), E = (function() {
        function t() {}
        n(t, "laya.ani.AnimationState"), t.stopped = 0, t.paused = 1, t.playing = 2;
    }(), function() {
        function t() {
            this.skinName = null, this.deformSlotDataList = [];
        }
        return n(t, "laya.ani.bone.DeformAniData"), t;
    }()), O = function() {
        function t() {
            this.name = null, this.attachmentName = null, this.type = 0, this.transform = null, 
            this.width = NaN, this.height = NaN, this.texture = null, this.bones = null, this.uvs = null, 
            this.weights = null, this.triangles = null, this.vertices = null, this.lengths = null, 
            this.verLen = 0;
        }
        n(t, "laya.ani.bone.SkinSlotDisplayData");
        var e = t.prototype;
        return e.createTexture = function(t) {
            return this.texture ? this.texture : (this.texture = new I(t.bitmap, this.uvs), 
            this.uvs[0] > this.uvs[4] && this.uvs[1] > this.uvs[5] ? (this.texture.width = t.height, 
            this.texture.height = t.width, this.texture.offsetX = -t.offsetX, this.texture.offsetY = -t.offsetY, 
            this.texture.sourceWidth = t.sourceHeight, this.texture.sourceHeight = t.sourceWidth) : (this.texture.width = t.width, 
            this.texture.height = t.height, this.texture.offsetX = -t.offsetX, this.texture.offsetY = -t.offsetY, 
            this.texture.sourceWidth = t.sourceWidth, this.texture.sourceHeight = t.sourceHeight), 
            this.texture);
        }, e.destory = function() {
            this.texture && this.texture.destroy();
        }, t;
    }(), Y = function() {
        function t() {
            this.boneSlot = null, this.slotIndex = -1, this.attachment = null, this.deformData = null, 
            this.frameIndex = 0, this.timeList = [], this.vectices = [], this.tweenKeyList = [];
        }
        n(t, "laya.ani.bone.DeformSlotDisplayData");
        var e = t.prototype;
        return e.binarySearch1 = function(t, e) {
            var i = 0, a = t.length - 2;
            if (0 == a) return 1;
            for (var r = a >>> 1; ;) {
                if (t[Math.floor(r + 1)] <= e ? i = r + 1 : a = r, i == a) return i + 1;
                r = i + a >>> 1;
            }
            return 0;
        }, e.apply = function(t, e, i) {
            if (void 0 === i && (i = 1), t += .05, !(this.timeList.length <= 0)) {
                var a = 0;
                if (!(this.timeList[0] > t)) {
                    var r = this.vectices[0].length, s = [], n = this.binarySearch1(this.timeList, t);
                    if (this.frameIndex = n, t >= this.timeList[this.timeList.length - 1]) {
                        var h = this.vectices[this.vectices.length - 1];
                        if (1 > i) for (a = 0; r > a; a++) s[a] += (h[a] - s[a]) * i; else for (a = 0; r > a; a++) s[a] = h[a];
                        return void (this.deformData = s);
                    }
                    var l = (this.tweenKeyList[this.frameIndex], this.vectices[this.frameIndex - 1]), o = this.vectices[this.frameIndex], u = this.timeList[this.frameIndex - 1], c = this.timeList[this.frameIndex];
                    i = this.tweenKeyList[n - 1] ? (t - u) / (c - u) : 0;
                    var _ = NaN;
                    for (a = 0; r > a; a++) _ = l[a], s[a] = _ + (o[a] - _) * i;
                    this.deformData = s;
                }
            }
        }, t;
    }(), K = function() {
        function t() {
            this.name = null, this.parent = null, this.attachmentName = null, this.srcDisplayIndex = -1, 
            this.type = "src", this.templet = null, this.currSlotData = null, this.currTexture = null, 
            this.currDisplayData = null, this.displayIndex = -1, this.originalIndex = -1, this._diyTexture = null, 
            this._parentMatrix = null, this._resultMatrix = null, this._replaceDic = {}, this._curDiyUV = null, 
            this._curDiyVS = null, this._skinSprite = null, this.deformData = null, this._mVerticleArr = null, 
            this._preGraphicVerticle = null, this._preGraphicMatrix = null;
        }
        n(t, "laya.ani.bone.BoneSlot");
        var e = t.prototype;
        return e.showSlotData = function(t, e) {
            void 0 === e && (e = !0), this.currSlotData = t, e && (this.displayIndex = this.srcDisplayIndex), 
            this.currDisplayData = null, this.currTexture = null;
        }, e.showDisplayByName = function(t) {
            this.currSlotData && this.showDisplayByIndex(this.currSlotData.getDisplayByName(t));
        }, e.replaceDisplayByName = function(t, e) {
            if (this.currSlotData) {
                var i;
                i = this.currSlotData.getDisplayByName(t);
                var a;
                a = this.currSlotData.getDisplayByName(e), this.replaceDisplayByIndex(i, a);
            }
        }, e.replaceDisplayByIndex = function(t, e) {
            this.currSlotData && (this._replaceDic[t] = e, this.originalIndex == t && this.showDisplayByIndex(t));
        }, e.showDisplayByIndex = function(t) {
            if (this.originalIndex = t, null != this._replaceDic[t] && (t = this._replaceDic[t]), 
            this.currSlotData && t > -1 && t < this.currSlotData.displayArr.length) {
                if (this.displayIndex = t, this.currDisplayData = this.currSlotData.displayArr[t], 
                this.currDisplayData) {
                    var e = this.currDisplayData.name;
                    this.currTexture = this.templet.getTexture(e), this.currTexture && 0 == this.currDisplayData.type && this.currDisplayData.uvs && (this.currTexture = this.currDisplayData.createTexture(this.currTexture));
                }
            } else this.displayIndex = -1, this.currDisplayData = null, this.currTexture = null;
        }, e.replaceSkin = function(t) {
            this._diyTexture = t, this._curDiyUV && (this._curDiyUV.length = 0), this.currDisplayData && this._diyTexture == this.currDisplayData.texture && (this._diyTexture = null);
        }, e.setParentMatrix = function(t) {
            this._parentMatrix = t;
        }, e.getSaveVerticle = function(e) {
            return t.useSameMatrixAndVerticle && this._preGraphicVerticle && t.isSameArr(e, this._preGraphicVerticle) ? e = this._preGraphicVerticle : (e = A.copyArray([], e), 
            this._preGraphicVerticle = e), e;
        }, e.getSaveMatrix = function(e) {
            if (t.useSameMatrixAndVerticle && this._preGraphicMatrix && t.isSameMatrix(e, this._preGraphicMatrix)) e = this._preGraphicMatrix; else {
                var i = e.clone();
                e = i, this._preGraphicMatrix = e;
            }
            return e;
        }, e.draw = function(e, i, a, r) {
            if (void 0 === a && (a = !1), void 0 === r && (r = 1), (null != this._diyTexture || null != this.currTexture) && null != this.currDisplayData || this.currDisplayData && 3 == this.currDisplayData.type) {
                var s, n = this.currTexture;
                switch (this._diyTexture && (n = this._diyTexture), this.currDisplayData.type) {
                  case 0:
                    if (e) {
                        var h = this.getDisplayMatrix();
                        if (this._parentMatrix) {
                            var l = !1;
                            if (h) {
                                var o;
                                if (y.mul(h, this._parentMatrix, y.TEMP), a ? (null == this._resultMatrix && (this._resultMatrix = new y()), 
                                o = this._resultMatrix) : o = t._tempResultMatrix, this._diyTexture && this.currDisplayData.uvs) {
                                    var u = t._tempMatrix;
                                    u.identity(), this.currDisplayData.uvs[1] > this.currDisplayData.uvs[5] && (u.d = -1), 
                                    this.currDisplayData.uvs[0] > this.currDisplayData.uvs[4] && this.currDisplayData.uvs[1] > this.currDisplayData.uvs[5] && (l = !0, 
                                    u.rotate(-Math.PI / 2)), y.mul(u, y.TEMP, o);
                                } else y.TEMP.copyTo(o);
                                a || (o = this.getSaveMatrix(o)), o._checkTransform(), l ? e.drawTexture(n, -this.currDisplayData.height / 2, -this.currDisplayData.width / 2, this.currDisplayData.height, this.currDisplayData.width, o, r) : e.drawTexture(n, -this.currDisplayData.width / 2, -this.currDisplayData.height / 2, this.currDisplayData.width, this.currDisplayData.height, o, r);
                            }
                        }
                    }
                    break;

                  case 1:
                    if (a ? (null == this._skinSprite && (this._skinSprite = t.createSkinMesh()), s = this._skinSprite) : s = t.createSkinMesh(), 
                    null == s) return;
                    var c;
                    if (null == this.currDisplayData.bones) {
                        var _, p = this.currDisplayData.weights;
                        this.deformData && (p = this.deformData), this._diyTexture ? (this._curDiyUV || (this._curDiyUV = []), 
                        0 == this._curDiyUV.length && (this._curDiyUV = w.getRelativeUV(this.currTexture.uv, this.currDisplayData.uvs, this._curDiyUV), 
                        this._curDiyUV = w.getAbsoluteUV(this._diyTexture.uv, this._curDiyUV, this._curDiyUV)), 
                        _ = this._curDiyUV) : _ = this.currDisplayData.uvs, this._mVerticleArr = p, this.currDisplayData.triangles.length, 
                        c = this.currDisplayData.triangles, this.deformData && (a || (this._mVerticleArr = this.getSaveVerticle(this._mVerticleArr))), 
                        s.init2(n, c, this._mVerticleArr, _);
                        var d, f = this.getDisplayMatrix();
                        if (this._parentMatrix && f) y.mul(f, this._parentMatrix, y.TEMP), a ? (null == this._resultMatrix && (this._resultMatrix = new y()), 
                        d = this._resultMatrix) : d = t._tempResultMatrix, y.TEMP.copyTo(d), a || (d = this.getSaveMatrix(d)), 
                        s.transform = d;
                    } else this.skinMesh(i, s);
                    e.drawSkin(s, r);
                    break;

                  case 2:
                    if (a ? (null == this._skinSprite && (this._skinSprite = t.createSkinMesh()), s = this._skinSprite) : s = t.createSkinMesh(), 
                    null == s) return;
                    this.skinMesh(i, s), e.drawSkin(s, r);
                }
            }
        }, e.skinMesh = function(e, i) {
            var a, r = this.currTexture, s = this.currDisplayData.bones;
            this._diyTexture ? (r = this._diyTexture, this._curDiyUV || (this._curDiyUV = []), 
            0 == this._curDiyUV.length && (this._curDiyUV = w.getRelativeUV(this.currTexture.uv, this.currDisplayData.uvs, this._curDiyUV), 
            this._curDiyUV = w.getAbsoluteUV(this._diyTexture.uv, this._curDiyUV, this._curDiyUV)), 
            a = this._curDiyUV) : a = this.currDisplayData.uvs;
            var n, h, l, o = this.currDisplayData.weights, u = this.currDisplayData.triangles, c = 0, _ = 0, p = 0, d = NaN, f = NaN, m = 0, y = 0, x = 0, g = 0;
            if (t._tempVerticleArr.length = 0, l = t._tempVerticleArr, this.deformData && this.deformData.length > 0) {
                var v = 0;
                for (x = 0, g = s.length; g > x; ) {
                    for (p = s[x++] + x, c = 0, _ = 0; p > x; x++) h = e[s[x]], d = o[m] + this.deformData[v++], 
                    f = o[m + 1] + this.deformData[v++], y = o[m + 2], c += (d * h.a + f * h.c + h.tx) * y, 
                    _ += (d * h.b + f * h.d + h.ty) * y, m += 3;
                    l.push(c, _);
                }
            } else for (x = 0, g = s.length; g > x; ) {
                for (p = s[x++] + x, c = 0, _ = 0; p > x; x++) h = e[s[x]], d = o[m], f = o[m + 1], 
                y = o[m + 2], c += (d * h.a + f * h.c + h.tx) * y, _ += (d * h.b + f * h.d + h.ty) * y, 
                m += 3;
                l.push(c, _);
            }
            this._mVerticleArr = l, n = u, this._mVerticleArr = this.getSaveVerticle(this._mVerticleArr), 
            i.init2(r, n, this._mVerticleArr, a);
        }, e.drawBonePoint = function(t) {
            t && this._parentMatrix && t.drawCircle(this._parentMatrix.tx, this._parentMatrix.ty, 5, "#ff0000");
        }, e.getDisplayMatrix = function() {
            return this.currDisplayData ? this.currDisplayData.transform.getMatrix() : null;
        }, e.getMatrix = function() {
            return this._resultMatrix;
        }, e.copy = function() {
            var e = new t();
            return e.type = "copy", e.name = this.name, e.attachmentName = this.attachmentName, 
            e.srcDisplayIndex = this.srcDisplayIndex, e.parent = this.parent, e.displayIndex = this.displayIndex, 
            e.templet = this.templet, e.currSlotData = this.currSlotData, e.currTexture = this.currTexture, 
            e.currDisplayData = this.currDisplayData, e;
        }, t.createSkinMesh = function() {
            return new j();
        }, t.isSameArr = function(t, e) {
            if (t.length != e.length) return !1;
            var i, a = 0;
            for (i = t.length, a = 0; i > a; a++) if (t[a] != e[a]) return !1;
            return !0;
        }, t.isSameMatrix = function(t, e) {
            return t.a == e.a && t.b == e.b && t.c == e.c && t.d == e.d && Math.abs(t.tx - e.tx) < 1e-5 && Math.abs(t.ty - e.ty) < 1e-5;
        }, t.useSameMatrixAndVerticle = !0, t._tempVerticleArr = [], s(t, [ "_tempMatrix", function() {
            return this._tempMatrix = new y();
        }, "_tempResultMatrix", function() {
            return this._tempResultMatrix = new y();
        } ]), t;
    }(), X = function() {
        function t(t, e) {
            this.target = null, this.data = null, this.bones = null, this.position = NaN, this.spacing = NaN, 
            this.rotateMix = NaN, this.translateMix = NaN, this._debugKey = !1, this._spaces = null, 
            this._segments = [], this._curves = [], this.data = t, this.position = t.position, 
            this.spacing = t.spacing, this.rotateMix = t.rotateMix, this.translateMix = t.translateMix, 
            this.bones = [];
            for (var i = this.data.bones, a = 0, r = i.length; r > a; a++) this.bones.push(e[i[a]]);
        }
        n(t, "laya.ani.bone.PathConstraint");
        var e = t.prototype;
        return e.apply = function(t, e) {
            if (this.target) {
                var i = this.translateMix, a = this.translateMix, r = a > 0, s = this.data.spacingMode, n = "length" == s, h = this.data.rotateMode, l = "tangent" == h, o = "chainScale" == h, u = [], c = this.bones.length, _ = l ? c : c + 1, p = [];
                this._spaces = p, p[0] = this.position;
                var d = this.spacing;
                if (o || n) for (var f = 0, m = _ - 1; m > f; ) {
                    var y = this.bones[f], x = y.length, g = x * y.resultMatrix.a, v = x * y.resultMatrix.b;
                    x = Math.sqrt(g * g + v * v), o && (u[f] = x), p[++f] = n ? Math.max(0, x + d) : d;
                } else for (f = 1; _ > f; f++) p[f] = d;
                var M = this.computeWorldPositions(this.target, t, e, _, l, "percent" == this.data.positionMode, "percent" == s);
                if (this._debugKey) {
                    for (f = 0; f < M.length; f++) e.drawCircle(M[f++], M[f++], 5, "#00ff00");
                    var D = [];
                    for (f = 0; f < M.length; f++) D.push(M[f++], M[f++]);
                    e.drawLines(0, 0, D, "#ff0000");
                }
                var I = M[0], A = M[1], b = this.data.offsetRotation, N = "chain" == h && 0 == b, T = NaN;
                for (f = 0, T = 3; c > f; f++, T += 3) {
                    (y = this.bones[f]).resultMatrix.tx += (I - y.resultMatrix.tx) * i, y.resultMatrix.ty += (A - y.resultMatrix.ty) * i;
                    var S = (g = M[T]) - I, C = (v = M[T + 1]) - A;
                    if (o && 0 != (x = u[f])) {
                        var F = (Math.sqrt(S * S + C * C) / x - 1) * a + 1;
                        y.resultMatrix.a *= F, y.resultMatrix.c *= F;
                    }
                    if (I = g, A = v, r) {
                        var w = y.resultMatrix.a, k = y.resultMatrix.c, P = y.resultMatrix.b, U = y.resultMatrix.d, B = NaN, L = NaN, R = NaN;
                        B = l ? M[T - 1] : 0 == p[f + 1] ? M[T + 2] : Math.atan2(C, S), B -= Math.atan2(P, w) - b / 180 * Math.PI, 
                        N && (L = Math.cos(B), R = Math.sin(B), I += ((x = y.length) * (L * w - R * P) - S) * a, 
                        A += (x * (R * w + L * P) - C) * a), B > Math.PI ? B -= 2 * Math.PI : B < -Math.PI && (B += 2 * Math.PI), 
                        B *= a, L = Math.cos(B), R = Math.sin(B), y.resultMatrix.a = L * w - R * P, y.resultMatrix.c = L * k - R * U, 
                        y.resultMatrix.b = R * w + L * P, y.resultMatrix.d = R * k + L * U;
                    }
                }
            }
        }, e.computeWorldVertices2 = function(e, i, a, r, s, n) {
            var h, l, o = e.currDisplayData.bones, u = e.currDisplayData.weights, c = e.currDisplayData.triangles, _ = 0, p = 0, d = 0, f = 0, m = 0, y = 0, x = 0, g = 0, v = 0, M = 0, D = 0;
            if (null != o) {
                for (_ = 0; a > _; _ += 2) p += (f = o[p]) + 1, d += f;
                var I = i;
                for (m = n, y = 3 * d; r > m; m += 2) {
                    for (x = 0, g = 0, f = o[p++], f += p; f > p; p++, y += 3) {
                        h = I[o[p]].resultMatrix, v = u[y], M = u[y + 1];
                        var A = u[y + 2];
                        x += (v * h.a + M * h.c + h.tx) * A, g += (v * h.b + M * h.d + h.ty) * A;
                    }
                    s[m] = x, s[m + 1] = g;
                }
            } else {
                var b, N;
                if (c || (c = u), e.deformData && (c = e.deformData), b = e.parent, i) for (D = i.length, 
                _ = 0; D > _; _++) if (i[_].name == b) {
                    l = i[_];
                    break;
                }
                l && (N = l.resultMatrix), N || (N = t._tempMt);
                var T = N.tx, S = N.ty, C = N.a, F = N.b, w = N.c, k = N.d;
                for (l && (k *= l.d), p = a, m = n; r > m; p += 2, m += 2) v = c[p], M = c[p + 1], 
                s[m] = v * C + M * F + T, s[m + 1] = -(v * w + M * k + S);
            }
        }, e.computeWorldPositions = function(t, e, i, a, r, s, n) {
            var h = (t.currDisplayData.bones, t.currDisplayData.weights, t.currDisplayData.triangles, 
            []), l = 0, o = t.currDisplayData.verLen, u = this.position, c = this._spaces, _ = [], p = [], d = o / 6, f = -1, m = NaN, y = 0, x = 0, g = NaN, v = NaN, M = NaN, D = NaN;
            if (d--, o -= 4, this.computeWorldVertices2(t, e, 2, o, h, 0), this._debugKey) for (l = 0; l < h.length; ) i.drawCircle(h[l++], h[l++], 10, "#ff0000");
            _ = h, this._curves.length = d;
            var I = this._curves;
            m = 0;
            var A = _[0], b = _[1], N = 0, T = 0, S = 0, C = 0, F = 0, w = 0, k = NaN, P = NaN, U = NaN, B = NaN, L = NaN, R = NaN, V = NaN, E = NaN, O = 0;
            for (l = 0, O = 2; d > l; l++, O += 6) N = _[O], T = _[O + 1], S = _[O + 2], C = _[O + 3], 
            L = 2 * (k = .1875 * (A - 2 * N + S)) + (U = .09375 * (3 * (N - S) - A + (F = _[O + 4]))), 
            R = 2 * (P = .1875 * (b - 2 * T + C)) + (B = .09375 * (3 * (T - C) - b + (w = _[O + 5]))), 
            V = .75 * (N - A) + k + .16666667 * U, E = .75 * (T - b) + P + .16666667 * B, m += Math.sqrt(V * V + E * E), 
            V += L, E += R, L += U, R += B, m += Math.sqrt(V * V + E * E), V += L, E += R, m += Math.sqrt(V * V + E * E), 
            V += L + U, E += R + B, m += Math.sqrt(V * V + E * E), I[l] = m, A = F, b = w;
            if (s && (u *= m), n) for (l = 0; a > l; l++) c[l] *= m;
            var Y = this._segments, K = 0, X = 0;
            for (l = 0, y = 0, x = 0, X = 0; a > l; l++, y += 3) if (0 > (g = u += v = c[l])) this.addBeforePosition(g, _, 0, p, y); else if (g > m) this.addAfterPosition(g - m, _, o - 4, p, y); else {
                for (;;x++) if (!(g > (D = I[x]))) {
                    0 == x ? g /= D : g = (g - (M = I[x - 1])) / (D - M);
                    break;
                }
                if (x != f) {
                    f = x;
                    var W = 6 * x;
                    for (A = _[W], b = _[W + 1], N = _[W + 2], T = _[W + 3], S = _[W + 4], C = _[W + 5], 
                    L = 2 * (k = .03 * (A - 2 * N + S)) + (U = .006 * (3 * (N - S) - A + (F = _[W + 6]))), 
                    R = 2 * (P = .03 * (b - 2 * T + C)) + (B = .006 * (3 * (T - C) - b + (w = _[W + 7]))), 
                    V = .3 * (N - A) + k + .16666667 * U, E = .3 * (T - b) + P + .16666667 * B, K = Math.sqrt(V * V + E * E), 
                    Y[0] = K, W = 1; 8 > W; W++) V += L, E += R, L += U, R += B, K += Math.sqrt(V * V + E * E), 
                    Y[W] = K;
                    V += L, E += R, K += Math.sqrt(V * V + E * E), Y[8] = K, V += L + U, E += R + B, 
                    K += Math.sqrt(V * V + E * E), Y[9] = K, X = 0;
                }
                for (g *= K; ;X++) if (!(g > (D = Y[X]))) {
                    0 == X ? g /= D : g = X + (g - (M = Y[X - 1])) / (D - M);
                    break;
                }
                this.addCurvePosition(.1 * g, A, b, N, T, S, C, F, w, p, y, r || l > 0 && 0 == v);
            }
            return p;
        }, e.addBeforePosition = function(t, e, i, a, r) {
            var s = e[i], n = e[i + 1], h = e[i + 2] - s, l = e[i + 3] - n, o = Math.atan2(l, h);
            a[r] = s + t * Math.cos(o), a[r + 1] = n + t * Math.sin(o), a[r + 2] = o;
        }, e.addAfterPosition = function(t, e, i, a, r) {
            var s = e[i + 2], n = e[i + 3], h = s - e[i], l = n - e[i + 1], o = Math.atan2(l, h);
            a[r] = s + t * Math.cos(o), a[r + 1] = n + t * Math.sin(o), a[r + 2] = o;
        }, e.addCurvePosition = function(t, e, i, a, r, s, n, h, l, o, u, c) {
            0 == t && (t = 1e-4);
            var _ = t * t, p = _ * t, d = 1 - t, f = d * d, m = f * d, y = d * t, x = 3 * y, g = d * x, v = x * t, M = e * m + a * g + s * v + h * p, D = i * m + r * g + n * v + l * p;
            o[u] = M, o[u + 1] = D, o[u + 2] = c ? Math.atan2(D - (i * f + r * y * 2 + n * _), M - (e * f + a * y * 2 + s * _)) : 0;
        }, t.NONE = -1, t.BEFORE = -2, t.AFTER = -3, s(t, [ "_tempMt", function() {
            return this._tempMt = new y();
        } ]), t;
    }(), W = function() {
        function t() {
            this.skX = 0, this.skY = 0, this.scX = 1, this.scY = 1, this.x = 0, this.y = 0, 
            this.skewX = 0, this.skewY = 0, this.mMatrix = null;
        }
        n(t, "laya.ani.bone.Transform");
        var e = t.prototype;
        return e.initData = function(t) {
            null != t.x && (this.x = t.x), null != t.y && (this.y = t.y), null != t.skX && (this.skX = t.skX), 
            null != t.skY && (this.skY = t.skY), null != t.scX && (this.scX = t.scX), null != t.scY && (this.scY = t.scY);
        }, e.getMatrix = function() {
            var t;
            return (t = this.mMatrix ? this.mMatrix : this.mMatrix = new y()).identity(), t.scale(this.scX, this.scY), 
            (this.skewX || this.skewY) && this.skew(t, this.skewX * Math.PI / 180, this.skewY * Math.PI / 180), 
            t.rotate(this.skX * Math.PI / 180), t.translate(this.x, this.y), t;
        }, e.skew = function(t, e, i) {
            var a = Math.sin(i), r = Math.cos(i), s = Math.sin(e), n = Math.cos(e);
            return t.setTo(t.a * n - t.b * a, t.a * s + t.b * r, t.c * n - t.d * a, t.c * s + t.d * r, t.tx * n - t.ty * a, t.tx * s + t.ty * r), 
            t;
        }, t;
    }(), G = function() {
        function t() {
            this.time = NaN, this.drawOrder = [];
        }
        return n(t, "laya.ani.bone.DrawOrderData"), t;
    }(), z = function() {
        function t() {}
        return n(t, "laya.ani.math.BezierLerp"), t.getBezierRate = function(e, i, a, r, s) {
            var n = t._getBezierParamKey(i, a, r, s), h = 100 * n + e;
            if (t._bezierResultCache[h]) return t._bezierResultCache[h];
            var l, o = t._getBezierPoints(i, a, r, s, n), u = 0;
            for (l = o.length, u = 0; l > u; u += 2) if (e <= o[u]) return t._bezierResultCache[h] = o[u + 1], 
            o[u + 1];
            return t._bezierResultCache[h] = 1, 1;
        }, t._getBezierParamKey = function(t, e, i, a) {
            return 100 * (100 * (100 * (100 * t + e) + i) + a);
        }, t._getBezierPoints = function(e, i, a, r, s) {
            return t._bezierPointsCache[s] ? t._bezierPointsCache[s] : (n = [ 0, 0, e, i, a, r, 1, 1 ], 
            h = new o().getBezierPoints(n, 100, 3), t._bezierPointsCache[s] = h, h);
            var n, h;
        }, t._bezierResultCache = {}, t._bezierPointsCache = {}, t;
    }(), q = function() {
        function t() {
            this.name = null, this.root = null, this.parentBone = null, this.length = 10, this.transform = null, 
            this.inheritScale = !0, this.inheritRotation = !0, this.rotation = NaN, this.resultRotation = NaN, 
            this.d = -1, this._tempMatrix = null, this._sprite = null, this.resultTransform = new W(), 
            this.resultMatrix = new y(), this._children = [];
        }
        n(t, "laya.ani.bone.Bone");
        var e = t.prototype;
        return e.setTempMatrix = function(t) {
            this._tempMatrix = t;
            var e, i = 0;
            for (i = 0, e = this._children.length; e > i; i++) this._children[i].setTempMatrix(this._tempMatrix);
        }, e.update = function(t) {
            var e;
            if (this.rotation = this.transform.skX, t) e = this.resultTransform.getMatrix(), 
            y.mul(e, t, this.resultMatrix), this.resultRotation = this.rotation; else if (this.resultRotation = this.rotation + this.parentBone.resultRotation, 
            this.parentBone) if (this.inheritRotation && this.inheritScale) e = this.resultTransform.getMatrix(), 
            y.mul(e, this.parentBone.resultMatrix, this.resultMatrix); else {
                var i = this.parentBone, a = NaN, r = NaN, s = NaN, n = this.parentBone.resultMatrix;
                e = this.resultTransform.getMatrix();
                var h = n.a * e.tx + n.c * e.ty + n.tx, l = n.b * e.tx + n.d * e.ty + n.ty, o = new y();
                this.inheritRotation ? (a = Math.atan2(i.resultMatrix.b, i.resultMatrix.a), r = Math.cos(a), 
                s = Math.sin(a), o.setTo(r, s, -s, r, 0, 0), y.mul(this._tempMatrix, o, y.TEMP), 
                y.TEMP.copyTo(o), e = this.resultTransform.getMatrix(), y.mul(e, o, this.resultMatrix), 
                this.resultTransform.scX * this.resultTransform.scY < 0 && this.resultMatrix.rotate(.5 * Math.PI), 
                this.resultMatrix.tx = h, this.resultMatrix.ty = l) : (this.inheritScale, e = this.resultTransform.getMatrix(), 
                y.TEMP.identity(), y.TEMP.d = this.d, y.mul(e, y.TEMP, this.resultMatrix), this.resultMatrix.tx = h, 
                this.resultMatrix.ty = l);
            } else (e = this.resultTransform.getMatrix()).copyTo(this.resultMatrix);
            var u, c = 0;
            for (c = 0, u = this._children.length; u > c; c++) this._children[c].update();
        }, e.updateChild = function() {
            var t, e = 0;
            for (e = 0, t = this._children.length; t > e; e++) this._children[e].update();
        }, e.setRotation = function(t) {
            this._sprite && (this._sprite.rotation = 180 * t / Math.PI);
        }, e.updateDraw = function(e, i) {
            (!t.ShowBones || t.ShowBones[this.name]) && (this._sprite ? (this._sprite.x = e + this.resultMatrix.tx, 
            this._sprite.y = i + this.resultMatrix.ty) : (this._sprite = new M(), this._sprite.graphics.drawCircle(0, 0, 5, "#ff0000"), 
            this._sprite.graphics.drawLine(0, 0, this.length, 0, "#00ff00"), this._sprite.graphics.fillText(this.name, 0, 0, "20px Arial", "#00ff00", "center"), 
            r.stage.addChild(this._sprite), this._sprite.x = e + this.resultMatrix.tx, this._sprite.y = i + this.resultMatrix.ty));
            var a, s = 0;
            for (s = 0, a = this._children.length; a > s; s++) this._children[s].updateDraw(e, i);
        }, e.addChild = function(t) {
            this._children.push(t), t.parentBone = this;
        }, e.findBone = function(t) {
            if (this.name == t) return this;
            var e, i, a = 0;
            for (a = 0, i = this._children.length; i > a; a++) if (e = this._children[a].findBone(t)) return e;
            return null;
        }, e.localToWorld = function(t) {
            var e = t[0], i = t[1];
            t[0] = e * this.resultMatrix.a + i * this.resultMatrix.c + this.resultMatrix.tx, 
            t[1] = e * this.resultMatrix.b + i * this.resultMatrix.d + this.resultMatrix.ty;
        }, t.ShowBones = {}, t;
    }(), H = function() {
        function t() {
            this.name = null, this.intValue = 0, this.floatValue = NaN, this.stringValue = null, 
            this.audioValue = null, this.time = NaN;
        }
        return n(t, "laya.ani.bone.EventData"), t;
    }(), Q = function() {
        function t() {
            this.name = null, this.targetBoneName = null, this.bendDirection = 1, this.mix = 1, 
            this.isSpine = !0, this.targetBoneIndex = -1, this.boneNames = [], this.boneIndexs = [];
        }
        return n(t, "laya.ani.bone.IkConstraintData"), t;
    }(), Z = function(t) {
        function e() {
            this._destroyed = !1, this._templet = null, this._currentTime = NaN, this._currentFrameTime = NaN, 
            this._playStart = NaN, this._playEnd = NaN, this._playDuration = NaN, this._overallDuration = NaN, 
            this._stopWhenCircleFinish = !1, this._elapsedPlaybackTime = NaN, this._startUpdateLoopCount = NaN, 
            this._currentAnimationClipIndex = 0, this._currentKeyframeIndex = 0, this._paused = !1, 
            this._cacheFrameRate = 0, this._cacheFrameRateInterval = NaN, this._cachePlayRate = NaN, 
            this.isCache = !0, this.playbackRate = 1, this.returnToZeroStopped = !1, e.__super.call(this), 
            this._destroyed = !1, this._currentAnimationClipIndex = -1, this._currentKeyframeIndex = -1, 
            this._currentTime = 0, this._overallDuration = Number.MAX_VALUE, this._stopWhenCircleFinish = !1, 
            this._elapsedPlaybackTime = 0, this._startUpdateLoopCount = -1, this._cachePlayRate = 1, 
            this.cacheFrameRate = 60, this.returnToZeroStopped = !1;
        }
        n(e, "laya.ani.AnimationPlayer", _);
        var i = e.prototype;
        return r.imps(i, {
            "laya.resource.IDestroy": !0
        }), i._onTempletLoadedComputeFullKeyframeIndices = function(t, e, i) {
            this._templet === i && this._cachePlayRate === t && this._cacheFrameRate === e && this._computeFullKeyframeIndices();
        }, i._computeFullKeyframeIndices = function() {}, i._onAnimationTempletLoaded = function() {
            this.destroyed || this._calculatePlayDuration();
        }, i._calculatePlayDuration = function() {
            if (0 !== this.state) {
                var t = this._templet.getAniDuration(this._currentAnimationClipIndex);
                0 === this._playEnd && (this._playEnd = t), this._playEnd > t && (this._playEnd = t), 
                this._playDuration = this._playEnd - this._playStart;
            }
        }, i._setPlayParams = function(t, e) {
            this._currentTime = t, this._currentKeyframeIndex = Math.floor(this.currentPlayTime / e + .01), 
            this._currentFrameTime = this._currentKeyframeIndex * e;
        }, i._setPlayParamsWhenStop = function(t, e) {
            this._currentTime = t, this._currentKeyframeIndex = Math.floor(t / e + .01), this._currentFrameTime = this._currentKeyframeIndex * e, 
            this._currentAnimationClipIndex = -1;
        }, i._update = function(t) {
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
        }, i._destroy = function() {
            this.offAll(), this._templet = null, this._destroyed = !0;
        }, i.play = function(t, e, i, a, r) {
            if (void 0 === t && (t = 0), void 0 === e && (e = 1), void 0 === i && (i = 2147483647), 
            void 0 === a && (a = 0), void 0 === r && (r = 0), !this._templet) throw new Error("AnimationPlayer:templet must not be null,maybe you need to set url.");
            if (0 > i || 0 > a || 0 > r) throw new Error("AnimationPlayer:overallDuration,playStart and playEnd must large than zero.");
            if (0 !== r && a > r) throw new Error("AnimationPlayer:start must less than end.");
            this._currentTime = 0, this._currentFrameTime = 0, this._elapsedPlaybackTime = 0, 
            this.playbackRate = e, this._overallDuration = i, this._playStart = a, this._playEnd = r, 
            this._paused = !1, this._currentAnimationClipIndex = t, this._currentKeyframeIndex = 0, 
            this._startUpdateLoopCount = D.loopCount, this.event("played"), this._calculatePlayDuration(), 
            this._update(0);
        }, i.playByFrame = function(t, e, i, a, r, s) {
            void 0 === t && (t = 0), void 0 === e && (e = 1), void 0 === i && (i = 2147483647), 
            void 0 === a && (a = 0), void 0 === r && (r = 0), void 0 === s && (s = 30);
            var n = 1e3 / s;
            this.play(t, e, i, a * n, r * n);
        }, i.stop = function(t) {
            void 0 === t && (t = !0), t ? (this._currentTime = this._currentFrameTime = this._currentKeyframeIndex = 0, 
            this._currentAnimationClipIndex = -1, this.event("stopped")) : this._stopWhenCircleFinish = !0;
        }, i.destroy = function() {}, h(0, i, "playEnd", function() {
            return this._playEnd;
        }), h(0, i, "templet", function() {
            return this._templet;
        }, function(t) {
            0 !== this.state && this.stop(!0), this._templet !== t && (this._templet = t, this._computeFullKeyframeIndices());
        }), h(0, i, "playStart", function() {
            return this._playStart;
        }), h(0, i, "playDuration", function() {
            return this._playDuration;
        }), h(0, i, "state", function() {
            return -1 === this._currentAnimationClipIndex ? 0 : this._paused ? 1 : 2;
        }), h(0, i, "currentKeyframeIndex", function() {
            return this._currentKeyframeIndex;
        }), h(0, i, "overallDuration", function() {
            return this._overallDuration;
        }), h(0, i, "currentFrameTime", function() {
            return this._currentFrameTime;
        }), h(0, i, "currentAnimationClipIndex", function() {
            return this._currentAnimationClipIndex;
        }), h(0, i, "currentPlayTime", function() {
            return this._currentTime + this._playStart;
        }), h(0, i, "cachePlayRate", function() {
            return this._cachePlayRate;
        }, function(t) {
            this._cachePlayRate !== t && (this._cachePlayRate = t, this._templet && this._computeFullKeyframeIndices());
        }), h(0, i, "cacheFrameRate", function() {
            return this._cacheFrameRate;
        }, function(t) {
            this._cacheFrameRate !== t && (this._cacheFrameRate = t, this._cacheFrameRateInterval = 1e3 / this._cacheFrameRate, 
            this._templet && this._computeFullKeyframeIndices());
        }), h(0, i, "currentTime", null, function(t) {
            if (-1 !== this._currentAnimationClipIndex && this._templet) {
                if (t < this._playStart || t > this._playEnd) throw new Error("AnimationPlayer:value must large than playStartTime,small than playEndTime.");
                this._startUpdateLoopCount = D.loopCount;
                var e = this._cacheFrameRateInterval * this._cachePlayRate;
                this._currentTime = t, this._currentKeyframeIndex = Math.floor(this.currentPlayTime / e), 
                this._currentFrameTime = this._currentKeyframeIndex * e;
            }
        }), h(0, i, "paused", function() {
            return this._paused;
        }, function(t) {
            this._paused = t, t && this.event("paused");
        }), h(0, i, "cacheFrameRateInterval", function() {
            return this._cacheFrameRateInterval;
        }), h(0, i, "destroyed", function() {
            return this._destroyed;
        }), e;
    }(), $ = function(t) {
        function e() {
            e.__super.call(this);
        }
        return n(e, "laya.ani.GraphicsAni", p), e.prototype.drawSkin = function(t, e) {
            this.drawTriangles(t.texture, 0, 0, t.vertices, t.uvs, t.indexes, t.transform || y.EMPTY, e);
        }, e.create = function() {
            return e._caches.pop() || new e();
        }, e.recycle = function(t) {
            t.clear(), e._caches.push(t);
        }, e._caches = [], e;
    }(), j = function(t) {
        function e() {
            this.transform = null, e.__super.call(this);
        }
        return n(e, "laya.ani.bone.canvasmesh.SkinMeshForGraphic", N), e.prototype.init2 = function(t, e, i, a) {
            this.transform && (this.transform = null);
            var r = e || [ 0, 1, 3, 3, 1, 2 ];
            this.texture = t, this.indexes = new Uint16Array(r), this.vertices = new Float32Array(i), 
            this.uvs = new Float32Array(a);
        }, e;
    }(), J = function(t) {
        function e() {
            this._aniMap = {}, this.unfixedLastAniIndex = -1, this._fullFrames = null, this._boneCurKeyFrm = [], 
            e.__super.call(this), this._anis = new Array();
        }
        n(e, "laya.ani.AnimationTemplet", g);
        var i = e.prototype;
        return i.parse = function(t) {
            var e = new c(t);
            this._aniVersion = e.readUTFString(), U.parse(this, e);
        }, i._calculateKeyFrame = function(t, e, i) {
            var a = t.keyFrame;
            a[e] = a[0];
            for (var r = 0; e > r; r++) for (var s = a[r], n = 0; i > n; n++) s.dData[n] = 0 === s.duration ? 0 : (a[r + 1].data[n] - s.data[n]) / s.duration, 
            s.nextData[n] = a[r + 1].data[n];
            a.length--;
        }, i._onAsynLoaded = function(t, e) {
            var i = new c(t);
            switch (this._aniVersion = i.readUTFString(), this._aniVersion) {
              case "LAYAANIMATION:02":
                P.parse(this, i);
                break;

              default:
                U.parse(this, i);
            }
        }, i.getAnimationCount = function() {
            return this._anis.length;
        }, i.getAnimation = function(t) {
            return this._anis[t];
        }, i.getAniDuration = function(t) {
            return this._anis[t].playTime;
        }, i.getNodes = function(t) {
            return this._anis[t].nodes;
        }, i.getNodeIndexWithName = function(t, e) {
            return this._anis[t].bone3DMap[e];
        }, i.getNodeCount = function(t) {
            return this._anis[t].nodes.length;
        }, i.getTotalkeyframesLength = function(t) {
            return this._anis[t].totalKeyframeDatasLength;
        }, i.getPublicExtData = function() {
            return this._publicExtData;
        }, i.getAnimationDataWithCache = function(t, e, i, a) {
            var r = e[i];
            if (r) {
                var s = r[t];
                return s ? s[a] : null;
            }
            return null;
        }, i.setAnimationDataWithCache = function(t, e, i, a, r) {
            var s = e[i] || (e[i] = {});
            (s[t] || (s[t] = []))[a] = r;
        }, i.getNodeKeyFrame = function(t, e, i) {
            var a = this._boneCurKeyFrm[e], r = t.length;
            (null == a || a >= r) && (a = this._boneCurKeyFrm[e] = 0);
            var s = t[a], n = i - s.startTime;
            if (0 == n || n > 0 && s.duration > n) return a;
            var h = 0;
            if (n > 0) {
                for (i += .01, h = a + 1; r > h; h++) if ((s = t[h]).startTime <= i && s.startTime + s.duration > i) return this._boneCurKeyFrm[e] = h, 
                h;
                return r - 1;
            }
            for (h = 0; a > h; h++) if ((s = t[h]).startTime <= i && s.startTime + s.duration > i) return this._boneCurKeyFrm[e] = h, 
            h;
            return a;
        }, i.getOriginalData = function(t, i, a, r, s) {
            var n = this._anis[t].nodes, h = this._boneCurKeyFrm;
            h.length < n.length && (h.length = n.length);
            for (var l = 0, o = 0, u = n.length, c = 0; u > o; o++) {
                var _, p = n[o], d = p.keyFrame;
                _ = d[this.getNodeKeyFrame(d, o, s)], p.dataOffset = c;
                var f = s - _.startTime, m = p.lerpType;
                if (m) switch (m) {
                  case 0:
                  case 1:
                    for (l = 0; l < p.keyframeWidth; ) l += p.interpolationMethod[l](p, l, i, c + l, _.data, f, _.dData, _.duration, _.nextData);
                    break;

                  case 2:
                    var y = _.interpolationData, x = y.length, g = 0;
                    for (l = 0; x > l; ) {
                        var v = y[l];
                        switch (v) {
                          case 6:
                          case 7:
                            l += e.interpolation[v](p, g, i, c + g, _.data, f, _.dData, _.duration, _.nextData, y, l + 1);
                            break;

                          default:
                            l += e.interpolation[v](p, g, i, c + g, _.data, f, _.dData, _.duration, _.nextData);
                        }
                        g++;
                    }
                } else for (l = 0; l < p.keyframeWidth; ) l += p.interpolationMethod[l](p, l, i, c + l, _.data, f, _.dData, _.duration, _.nextData);
                c += p.keyframeWidth;
            }
        }, i.getNodesCurrentFrameIndex = function(t, e) {
            var i = this._anis[t].nodes;
            t !== this.unfixedLastAniIndex && (this.unfixedCurrentFrameIndexes = new Uint32Array(i.length), 
            this.unfixedCurrentTimes = new Float32Array(i.length), this.unfixedLastAniIndex = t);
            for (var a = 0, r = i.length; r > a; a++) {
                var s = i[a];
                for (e < this.unfixedCurrentTimes[a] && (this.unfixedCurrentFrameIndexes[a] = 0), 
                this.unfixedCurrentTimes[a] = e; this.unfixedCurrentFrameIndexes[a] < s.keyFrame.length && !(s.keyFrame[this.unfixedCurrentFrameIndexes[a]].startTime > this.unfixedCurrentTimes[a]); ) this.unfixedCurrentFrameIndexes[a]++;
                this.unfixedCurrentFrameIndexes[a]--;
            }
            return this.unfixedCurrentFrameIndexes;
        }, i.getOriginalDataUnfixedRate = function(t, i, a) {
            var r = this._anis[t].nodes;
            t !== this.unfixedLastAniIndex && (this.unfixedCurrentFrameIndexes = new Uint32Array(r.length), 
            this.unfixedCurrentTimes = new Float32Array(r.length), this.unfixedKeyframes = l(r.length), 
            this.unfixedLastAniIndex = t);
            for (var s = 0, n = 0, h = r.length, o = 0; h > n; n++) {
                var u = r[n];
                for (a < this.unfixedCurrentTimes[n] && (this.unfixedCurrentFrameIndexes[n] = 0), 
                this.unfixedCurrentTimes[n] = a; this.unfixedCurrentFrameIndexes[n] < u.keyFrame.length && !(u.keyFrame[this.unfixedCurrentFrameIndexes[n]].startTime > this.unfixedCurrentTimes[n]); ) this.unfixedKeyframes[n] = u.keyFrame[this.unfixedCurrentFrameIndexes[n]], 
                this.unfixedCurrentFrameIndexes[n]++;
                var c = this.unfixedKeyframes[n];
                u.dataOffset = o;
                var _ = a - c.startTime;
                if (u.lerpType) switch (u.lerpType) {
                  case 0:
                  case 1:
                    for (s = 0; s < u.keyframeWidth; ) s += u.interpolationMethod[s](u, s, i, o + s, c.data, _, c.dData, c.duration, c.nextData);
                    break;

                  case 2:
                    var p = c.interpolationData, d = p.length, f = 0;
                    for (s = 0; d > s; ) {
                        var m = p[s];
                        switch (m) {
                          case 6:
                          case 7:
                            s += e.interpolation[m](u, f, i, o + f, c.data, _, c.dData, c.duration, c.nextData, p, s + 1);
                            break;

                          default:
                            s += e.interpolation[m](u, f, i, o + f, c.data, _, c.dData, c.duration, c.nextData);
                        }
                        f++;
                    }
                } else for (s = 0; s < u.keyframeWidth; ) s += u.interpolationMethod[s](u, s, i, o + s, c.data, _, c.dData, c.duration, c.nextData);
                o += u.keyframeWidth;
            }
        }, e._LinearInterpolation_0 = function(t, e, i, a, r, s, n, h, l, o) {
            return i[a] = r[e] + s * n[e], 1;
        }, e._QuaternionInterpolation_1 = function(t, e, i, a, r, s, n, h, l, o) {
            var u = 0 === h ? 0 : s / h;
            return m.slerpQuaternionArray(r, e, l, e, u, i, a), 4;
        }, e._AngleInterpolation_2 = function(t, e, i, a, r, s, n, h, l, o) {
            return 0;
        }, e._RadiansInterpolation_3 = function(t, e, i, a, r, s, n, h, l, o) {
            return 0;
        }, e._Matrix4x4Interpolation_4 = function(t, e, i, a, r, s, n, h, l, o) {
            for (var u = 0; 16 > u; u++, e++) i[a + u] = r[e] + s * n[e];
            return 16;
        }, e._NoInterpolation_5 = function(t, e, i, a, r, s, n, h, l, o) {
            return i[a] = r[e], 1;
        }, e._BezierInterpolation_6 = function(t, e, i, a, r, s, n, h, l, o, u) {
            return void 0 === u && (u = 0), i[a] = r[e] + (l[e] - r[e]) * z.getBezierRate(s / h, o[u], o[u + 1], o[u + 2], o[u + 3]), 
            5;
        }, e._BezierInterpolation_7 = function(t, e, i, a, r, s, n, h, l, o, u) {
            return void 0 === u && (u = 0), i[a] = o[u + 4] + o[u + 5] * z.getBezierRate((.001 * s + o[u + 6]) / o[u + 7], o[u], o[u + 1], o[u + 2], o[u + 3]), 
            9;
        }, e.interpolation = [ e._LinearInterpolation_0, e._QuaternionInterpolation_1, e._AngleInterpolation_2, e._RadiansInterpolation_3, e._Matrix4x4Interpolation_4, e._NoInterpolation_5, e._BezierInterpolation_6, e._BezierInterpolation_7 ], 
        e;
    }(), tt = (function(t) {
        function e(t) {
            this._start = 0, this._Pos = 0, this._data = null, this._curIndex = 0, this._preIndex = 0, 
            this._playIndex = 0, this._playing = !1, this._ended = !0, this._count = 0, this._ids = null, 
            this._loadedImage = {}, this._idOfSprite = null, this._parentMovieClip = null, this._movieClipList = null, 
            this._labels = null, this.basePath = null, this._atlasPath = null, this._url = null, 
            this._isRoot = !1, this._completeHandler = null, this._endFrame = -1, this.interval = 30, 
            this.loop = !1, e.__super.call(this), this._ids = {}, this._idOfSprite = [], this._reset(), 
            this._playing = !1, this._parentMovieClip = t, t ? (this._isRoot = !1, this._movieClipList = t._movieClipList, 
            this._movieClipList.push(this)) : (this._movieClipList = [ this ], this._isRoot = !0, 
            this._setBitUp(16));
        }
        n(e, "laya.ani.swf.MovieClip", t);
        var i = e.prototype;
        i.destroy = function(e) {
            void 0 === e && (e = !0), this._clear(), t.prototype.destroy.call(this, e);
        }, i._setDisplay = function(e) {
            t.prototype._setDisplay.call(this, e), this._isRoot && this._$3__onDisplay(e);
        }, i._$3__onDisplay = function(t) {
            t ? this.timer.loop(this.interval, this, this.updates, null, !0) : this.timer.clear(this, this.updates);
        }, i.updates = function() {
            if (!this._parentMovieClip) {
                var t, e = 0;
                for (t = this._movieClipList.length, e = 0; t > e; e++) this._movieClipList[e] && this._movieClipList[e]._update();
            }
        }, i.addLabel = function(t, e) {
            this._labels || (this._labels = {}), this._labels[e] = t;
        }, i.removeLabel = function(t) {
            if (t) {
                if (!this._labels) for (var e in this._labels) if (this._labels[e] === t) {
                    delete this._labels[e];
                    break;
                }
            } else this._labels = null;
        }, i._update = function() {
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
        }, i.stop = function() {
            this._playing = !1;
        }, i.gotoAndStop = function(t) {
            this.index = t, this.stop();
        }, i._clear = function() {
            if (this.stop(), this._idOfSprite.length = 0, !this._parentMovieClip) {
                this.timer.clear(this, this.updates);
                var t, e = 0;
                for (t = this._movieClipList.length, e = 0; t > e; e++) this._movieClipList[e] != this && this._movieClipList[e]._clear();
                this._movieClipList.length = 0;
            }
            var i;
            for (i in this._atlasPath && f.clearRes(this._atlasPath), this._loadedImage) this._loadedImage[i] && (f.clearRes(i), 
            this._loadedImage[i] = !1);
            this.removeChildren(), this.graphics = null, this._parentMovieClip = null;
        }, i.play = function(t, e) {
            void 0 === t && (t = 0), void 0 === e && (e = !0), this.loop = e, this._playing = !0, 
            this._data && this._displayFrame(t);
        }, i._displayFrame = function(t) {
            void 0 === t && (t = -1), -1 != t && (this._curIndex > t && this._reset(), this._parseFrame(t));
        }, i._reset = function(t) {
            void 0 === t && (t = !0), t && 1 != this._curIndex && this.removeChildren(), this._preIndex = this._curIndex = -1, 
            this._Pos = this._start;
        }, i._parseFrame = function(t) {
            var i, a, r, s = 0, n = 0, h = 0, l = !1, o = this._idOfSprite, u = this._data;
            for (this._ended && this._reset(), u.pos = this._Pos, this._ended = !1, this._playIndex = t, 
            this._curIndex > t && t < this._preIndex && (this._reset(!0), u.pos = this._Pos); this._curIndex <= t && !this._ended; ) switch (u.getUint16()) {
              case 12:
                if (s = u.getUint16(), n = this._ids[u.getUint16()], this._Pos = u.pos, u.pos = n, 
                0 == (h = u.getUint8())) {
                    var c = u.getUint16();
                    if (!(a = o[s])) {
                        a = o[s] = new M();
                        var _ = new M();
                        _.loadImage(this.basePath + c + ".png"), this._loadedImage[this.basePath + c + ".png"] = !0, 
                        a.addChild(_), _.size(u.getFloat32(), u.getFloat32());
                        var p = u._getMatrix();
                        _.transform = p;
                    }
                    a.alpha = 1;
                } else 1 == h && ((i = o[s]) || (o[s] = i = new e(this), i.interval = this.interval, 
                i._ids = this._ids, i.basePath = this.basePath, i._setData(u, n), i._initState(), 
                i.play(0)), i.alpha = 1);
                u.pos = this._Pos;
                break;

              case 3:
                var d = o[u.getUint16()];
                d && (this.addChild(d), d.zOrder = u.getUint16(), l = !0);
                break;

              case 4:
                (d = o[u.getUint16()]) && d.removeSelf();
                break;

              case 5:
                o[u.getUint16()][e._ValueList[u.getUint16()]] = u.getFloat32();
                break;

              case 6:
                o[u.getUint16()].visible = u.getUint8() > 0;
                break;

              case 7:
                var f = (a = o[u.getUint16()]).transform || y.create();
                f.setTo(u.getFloat32(), u.getFloat32(), u.getFloat32(), u.getFloat32(), u.getFloat32(), u.getFloat32()), 
                a.transform = f;
                break;

              case 8:
                o[u.getUint16()].setPos(u.getFloat32(), u.getFloat32());
                break;

              case 9:
                o[u.getUint16()].setSize(u.getFloat32(), u.getFloat32());
                break;

              case 10:
                o[u.getUint16()].alpha = u.getFloat32();
                break;

              case 11:
                o[u.getUint16()].setScale(u.getFloat32(), u.getFloat32());
                break;

              case 98:
                r = u.getString(), this.event(r), "stop" == r && this.stop();
                break;

              case 99:
                this._curIndex = u.getUint16(), l && this.updateZOrder();
                break;

              case 100:
                this._count = this._curIndex + 1, this._ended = !0, this._playing && (this.event("enterframe"), 
                this.event("end"), this.event("complete")), this._reset(!1);
            }
            this._playing && !this._ended && this.event("enterframe"), this._Pos = u.pos;
        }, i._setData = function(t, e) {
            this._data = t, this._start = e + 3;
        }, i.load = function(t, e, i) {
            var a;
            void 0 === e && (e = !1), this._url = t, e && (this._atlasPath = i || t.split(".swf")[0] + ".json"), 
            this.stop(), this._clear(), this._movieClipList = [ this ], a = [ {
                url: t,
                type: "arraybuffer"
            } ], this._atlasPath && a.push({
                url: this._atlasPath,
                type: "atlas"
            }), r.loader.load(a, d.create(this, this._onLoaded));
        }, i._onLoaded = function() {
            var t;
            return (t = f.getRes(this._url)) ? this._atlasPath && !f.getAtlas(this._atlasPath) ? void this.event("error", "Atlas not find") : (this.basePath = this._atlasPath ? f.getAtlas(this._atlasPath).dir : this._url.split(".swf")[0] + "/image/", 
            void this._initData(t)) : void this.event("error", "file not find");
        }, i._initState = function() {
            this._reset(), this._ended = !1;
            var t = this._playing;
            for (this._playing = !1, this._curIndex = 0; !this._ended; ) this._parseFrame(++this._curIndex);
            this._playing = t;
        }, i._initData = function(t) {
            this._data = new c(t);
            var e = 0, i = this._data.getUint16();
            for (e = 0; i > e; e++) this._ids[this._data.getInt16()] = this._data.getInt32();
            this.interval = 1e3 / this._data.getUint16(), this._setData(this._data, this._ids[32767]), 
            this._initState(), this.play(0), this.event("loaded"), this._parentMovieClip || this.timer.loop(this.interval, this, this.updates, null, !0);
        }, i.playTo = function(t, e, i) {
            this._completeHandler = i, this._endFrame = e, this.play(t, !1);
        }, h(0, i, "index", function() {
            return this._playIndex;
        }, function(t) {
            this._playIndex = t, this._data && this._displayFrame(this._playIndex), this._labels && this._labels[t] && this.event("label", this._labels[t]);
        }), h(0, i, "count", function() {
            return this._count;
        }), h(0, i, "playing", function() {
            return this._playing;
        }), h(0, i, "url", null, function(t) {
            this.load(t);
        }), e._ValueList = [ "x", "y", "width", "height", "scaleX", "scaleY", "rotation", "alpha" ];
    }(M), function(t) {
        function e(t, i) {
            this._templet = null, this._player = null, this._curOriginalData = null, this._boneMatrixArray = [], 
            this._lastTime = 0, this._currAniName = null, this._currAniIndex = -1, this._pause = !0, 
            this._aniClipIndex = -1, this._clipIndex = -1, this._skinIndex = 0, this._skinName = "default", 
            this._aniMode = 0, this._graphicsCache = null, this._boneSlotDic = null, this._bindBoneBoneSlotDic = null, 
            this._boneSlotArray = null, this._index = -1, this._total = -1, this._indexControl = !1, 
            this._aniPath = null, this._texturePath = null, this._complete = null, this._loadAniMode = 0, 
            this._yReverseMatrix = null, this._ikArr = null, this._tfArr = null, this._pathDic = null, 
            this._rootBone = null, this._boneList = null, this._aniSectionDic = null, this._eventIndex = 0, 
            this._drawOrderIndex = 0, this._drawOrder = null, this._lastAniClipIndex = -1, this._lastUpdateAniClipIndex = -1, 
            this._playAudio = !0, this._soundChannelArr = [], e.__super.call(this), void 0 === i && (i = 0), 
            t && this.init(t, i);
        }
        n(e, "laya.ani.bone.Skeleton", t);
        var i = e.prototype;
        return i.init = function(t, e) {
            void 0 === e && (e = 0);
            var i, a, r, s = 0, n = 0;
            if (1 == e) for (this._graphicsCache = [], s = 0, n = t.getAnimationCount(); n > s; s++) this._graphicsCache.push([]);
            if (this._yReverseMatrix = t.yReverseMatrix, this._aniMode = e, this._templet = t, 
            this._templet._addReference(1), this._player = new Z(), this._player.cacheFrameRate = t.rate, 
            this._player.templet = t, this._player.play(), this._parseSrcBoneMatrix(), this._boneList = t.mBoneArr, 
            this._rootBone = t.mRootBone, this._aniSectionDic = t.aniSectionDic, t.ikArr.length > 0) for (this._ikArr = [], 
            s = 0, n = t.ikArr.length; n > s; s++) this._ikArr.push(new L(t.ikArr[s], this._boneList));
            if (t.pathArr.length > 0) for (null == this._pathDic && (this._pathDic = {}), s = 0, 
            n = t.pathArr.length; n > s; s++) i = t.pathArr[s], a = new X(i, this._boneList), 
            (r = this._boneSlotDic[i.name]) && ((a = new X(i, this._boneList)).target = r), 
            this._pathDic[i.name] = a;
            if (t.tfArr.length > 0) for (this._tfArr = [], s = 0, n = t.tfArr.length; n > s; s++) this._tfArr.push(new C(t.tfArr[s], this._boneList));
            if (t.skinDataArray.length > 0) {
                var h = this._templet.skinDataArray[this._skinIndex];
                this._skinName = h.name;
            }
            this._player.on("played", this, this._onPlay), this._player.on("stopped", this, this._onStop), 
            this._player.on("paused", this, this._onPause);
        }, i.load = function(t, e, i) {
            void 0 === i && (i = 0), this._aniPath = t, this._complete = e, this._loadAniMode = i, 
            r.loader.load([ {
                url: t,
                type: "arraybuffer"
            } ], d.create(this, this._onLoaded));
        }, i._onLoaded = function() {
            var t, e = f.getRes(this._aniPath);
            null != e && (null == et.TEMPLET_DICTIONARY && (et.TEMPLET_DICTIONARY = {}), (t = et.TEMPLET_DICTIONARY[this._aniPath]) ? t.isParseFail ? this._parseFail() : t.isParserComplete ? this._parseComplete() : (t.on("complete", this, this._parseComplete), 
            t.on("error", this, this._parseFail)) : ((t = new et())._setCreateURL(this._aniPath), 
            et.TEMPLET_DICTIONARY[this._aniPath] = t, t.on("complete", this, this._parseComplete), 
            t.on("error", this, this._parseFail), t.isParserComplete = !1, t.parseData(null, e)));
        }, i._parseComplete = function() {
            var t = et.TEMPLET_DICTIONARY[this._aniPath];
            t && (this.init(t, this._loadAniMode), this.play(0, !0)), this._complete && this._complete.runWith(this);
        }, i._parseFail = function() {
            console.log("[Error]:" + this._aniPath + "解析失败");
        }, i._onPlay = function() {
            this.event("played");
        }, i._onStop = function() {
            var t, e = this._templet.eventAniArr[this._aniClipIndex];
            if (e && this._eventIndex < e.length) for (;this._eventIndex < e.length; this._eventIndex++) (t = e[this._eventIndex]).time >= this._player.playStart && t.time <= this._player.playEnd && this.event("label", t);
            this._drawOrder = null, this.event("stopped");
        }, i._onPause = function() {
            this.event("paused");
        }, i._parseSrcBoneMatrix = function() {
            var t = 0, e = 0;
            for (e = this._templet.srcBoneMatrixArr.length, t = 0; e > t; t++) this._boneMatrixArray.push(new y());
            if (0 == this._aniMode) this._boneSlotDic = this._templet.boneSlotDic, this._bindBoneBoneSlotDic = this._templet.bindBoneBoneSlotDic, 
            this._boneSlotArray = this._templet.boneSlotArray; else {
                null == this._boneSlotDic && (this._boneSlotDic = {}), null == this._bindBoneBoneSlotDic && (this._bindBoneBoneSlotDic = {}), 
                null == this._boneSlotArray && (this._boneSlotArray = []);
                var i, a, r = this._templet.boneSlotArray;
                for (t = 0, e = r.length; e > t; t++) i = r[t], null == (a = this._bindBoneBoneSlotDic[i.parent]) && (this._bindBoneBoneSlotDic[i.parent] = a = []), 
                this._boneSlotDic[i.name] = i = i.copy(), a.push(i), this._boneSlotArray.push(i);
            }
        }, i._emitMissedEvents = function(t, e, i) {
            void 0 === i && (i = 0);
            var a = this._templet.eventAniArr[this._player.currentAnimationClipIndex];
            if (a) {
                var r, s, n = 0;
                for (s = a.length, n = i; s > n; n++) (r = a[n]).time >= this._player.playStart && r.time <= this._player.playEnd && this.event("label", r);
            }
        }, i._update = function(t) {
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
                        this._eventIndex++, this._playAudio && h.audioValue && "null" !== h.audioValue && (r = v.playSound(this._player.templet._path + h.audioValue, 1, d.create(this, this._onAniSoundStoped)), 
                        v.playbackRate = this._player.playbackRate, r && this._soundChannelArr.push(r))) : h.time < this._player.playStart && this._playAudio && h.audioValue && "null" !== h.audioValue && this._player.playEnd - this._player.currentPlayTime > .1 ? (this._eventIndex++, 
                        r = v.playSound(this._player.templet._path + h.audioValue, 1, d.create(this, this._onAniSoundStoped), null, (this._player.currentPlayTime - h.time) / 1e3), 
                        v.playbackRate = this._player.playbackRate, r && this._soundChannelArr.push(r)) : this._eventIndex++;
                    }
                    0 == this._aniMode ? (s = this._templet.getGrahicsDataWithCache(this._aniClipIndex, this._clipIndex) || this._createGraphics()) && this.graphics != s && (this.graphics = s) : 1 == this._aniMode ? (s = this._getGrahicsDataWithCache(this._aniClipIndex, this._clipIndex) || this._createGraphics()) && this.graphics != s && (this.graphics = s) : this._createGraphics();
                }
            }
        }, i._onAniSoundStoped = function(t) {
            for (var e, i = this._soundChannelArr.length, a = 0; i > a; a++) ((e = this._soundChannelArr[a]).isStopped || t) && (!e.isStopped && e.stop(), 
            this._soundChannelArr.splice(a, 1), i--, a--);
        }, i._createGraphics = function(t) {
            void 0 === t && (t = -1), -1 == t && (t = this._clipIndex);
            var e, i = t * this._player.cacheFrameRateInterval, a = this._templet.drawOrderAniArr[this._aniClipIndex];
            if (a && a.length > 0) for (this._drawOrderIndex = 0, e = a[this._drawOrderIndex]; i >= e.time && (this._drawOrder = e.drawOrder, 
            this._drawOrderIndex++, !(this._drawOrderIndex >= a.length)); ) e = a[this._drawOrderIndex];
            0 == this._aniMode || 1 == this._aniMode ? this.graphics = $.create() : this.graphics instanceof laya.ani.GraphicsAni ? this.graphics.clear() : this.graphics = $.create();
            var r = this.graphics, s = this._templet.getNodes(this._aniClipIndex), n = 0 == this._player.state;
            this._templet.getOriginalData(this._aniClipIndex, this._curOriginalData, null, t, n ? i + this._player.cacheFrameRateInterval : i);
            var h, l, o, u, _ = this._aniSectionDic[this._aniClipIndex], p = 0, d = 0, f = 0, m = 0, x = 0, g = this._templet.srcBoneMatrixArr.length, v = this._curOriginalData;
            for (d = 0, x = _[0]; g > d; d++) {
                var M = (u = this._boneList[d]).resultTransform;
                o = this._templet.srcBoneMatrixArr[d], M.scX = o.scX * v[p++], M.skX = o.skX + v[p++], 
                M.skY = o.skY + v[p++], M.scY = o.scY * v[p++], M.x = o.x + v[p++], M.y = o.y + v[p++], 
                8 === this._templet.tMatrixDataLen && (M.skewX = o.skewX + v[p++], M.skewY = o.skewY + v[p++]);
            }
            var D, I = {}, A = {};
            for (x += _[1]; x > d; d++) I[(D = s[d]).name] = v[p++], A[D.name] = v[p++], p += 4;
            var b, N, T = {}, S = {};
            for (x += _[2]; x > d; d++) T[(D = s[d]).name] = v[p++], S[D.name] = v[p++], p += 4;
            if (this._pathDic) for (x += _[3]; x > d; d++) if (D = s[d], b = this._pathDic[D.name]) {
                switch (new c(D.extenData).getByte()) {
                  case 1:
                    b.position = v[p++];
                    break;

                  case 2:
                    b.spacing = v[p++];
                    break;

                  case 3:
                    b.rotateMix = v[p++], b.translateMix = v[p++];
                }
            }
            if (this._rootBone.update(this._yReverseMatrix || y.TEMP.identity()), this._ikArr) for (d = 0, 
            x = this._ikArr.length; x > d; d++) N = this._ikArr[d], T.hasOwnProperty(N.name) && (N.bendDirection = T[N.name]), 
            S.hasOwnProperty(N.name) && (N.mix = S[N.name]), N.apply();
            if (this._pathDic) for (var C in this._pathDic) (b = this._pathDic[C]).apply(this._boneList, r);
            if (this._tfArr) for (d = 0, m = this._tfArr.length; m > d; d++) this._tfArr[d].apply();
            for (d = 0, m = this._boneList.length; m > d; d++) if (u = this._boneList[d], l = this._bindBoneBoneSlotDic[u.name], 
            u.resultMatrix.copyTo(this._boneMatrixArray[d]), l) for (f = 0, x = l.length; x > f; f++) (h = l[f]) && h.setParentMatrix(u.resultMatrix);
            var F, w, k, P, U = {}, B = this._templet.deformAniArr;
            if (B && B.length > 0) {
                if (this._lastAniClipIndex != this._aniClipIndex) for (this._lastAniClipIndex = this._aniClipIndex, 
                d = 0, x = this._boneSlotArray.length; x > d; d++) (h = this._boneSlotArray[d]).deformData = null;
                var L, R = B[this._aniClipIndex];
                for (L in F = R.default, this._setDeform(F, U, this._boneSlotArray, i), R) "default" != L && L != this._skinName && (F = R[L], 
                this._setDeform(F, U, this._boneSlotArray, i));
                F = R[this._skinName], this._setDeform(F, U, this._boneSlotArray, i);
            }
            if (this._drawOrder) for (d = 0, x = this._drawOrder.length; x > d; d++) w = I[(h = this._boneSlotArray[this._drawOrder[d]]).name], 
            k = A[h.name], isNaN(k), isNaN(w) || -2 == w || (this._templet.attachmentNames ? h.showDisplayByName(this._templet.attachmentNames[w]) : h.showDisplayByIndex(w)), 
            U[this._drawOrder[d]] ? (P = U[this._drawOrder[d]], h.currDisplayData && P[h.currDisplayData.attachmentName] ? h.deformData = P[h.currDisplayData.attachmentName] : h.deformData = null) : h.deformData = null, 
            isNaN(k) ? h.draw(r, this._boneMatrixArray, 2 == this._aniMode) : h.draw(r, this._boneMatrixArray, 2 == this._aniMode, k), 
            isNaN(k); else for (d = 0, x = this._boneSlotArray.length; x > d; d++) w = I[(h = this._boneSlotArray[d]).name], 
            k = A[h.name], isNaN(k), isNaN(w) || -2 == w || (this._templet.attachmentNames ? h.showDisplayByName(this._templet.attachmentNames[w]) : h.showDisplayByIndex(w)), 
            U[d] ? (P = U[d], h.currDisplayData && P[h.currDisplayData.attachmentName] ? h.deformData = P[h.currDisplayData.attachmentName] : h.deformData = null) : h.deformData = null, 
            isNaN(k) ? h.draw(r, this._boneMatrixArray, 2 == this._aniMode) : h.draw(r, this._boneMatrixArray, 2 == this._aniMode, k), 
            isNaN(k);
            return 0 == this._aniMode ? (this._templet.setGrahicsDataWithCache(this._aniClipIndex, t, r), 
            this._checkIsAllParsed(this._aniClipIndex)) : 1 == this._aniMode && this._setGrahicsDataWithCache(this._aniClipIndex, t, r), 
            r;
        }, i._checkIsAllParsed = function(t) {
            var e, i = 0;
            for (e = Math.floor(.01 + this._templet.getAniDuration(t) / 1e3 * this._player.cacheFrameRate), 
            i = 0; e > i; i++) if (!this._templet.getGrahicsDataWithCache(t, i)) return;
            return this._templet.getGrahicsDataWithCache(t, e) ? void this._templet.deleteAniData(t) : void this._createGraphics(e);
        }, i._setDeform = function(t, e, i, a) {
            if (t) {
                var r, s, n, h = 0, l = 0, o = 0;
                if (t) for (h = 0, l = t.deformSlotDataList.length; l > h; h++) for (r = t.deformSlotDataList[h], 
                o = 0; o < r.deformSlotDisplayList.length; o++) n = i[(s = r.deformSlotDisplayList[o]).slotIndex], 
                s.apply(a, n), e[s.slotIndex] || (e[s.slotIndex] = {}), e[s.slotIndex][s.attachment] = s.deformData;
            }
        }, i.getAnimNum = function() {
            return this._templet.getAnimationCount();
        }, i.getAniNameByIndex = function(t) {
            return this._templet.getAniNameByIndex(t);
        }, i.getSlotByName = function(t) {
            return this._boneSlotDic[t];
        }, i.showSkinByName = function(t, e) {
            void 0 === e && (e = !0), this.showSkinByIndex(this._templet.getSkinIndexByName(t), e);
        }, i.showSkinByIndex = function(t, e) {
            void 0 === e && (e = !0);
            for (var i = 0; i < this._boneSlotArray.length; i++) this._boneSlotArray[i].showSlotData(null, e);
            if (this._templet.showSkinByIndex(this._boneSlotDic, t, e)) {
                var a = this._templet.skinDataArray[t];
                this._skinIndex = t, this._skinName = a.name;
            }
            this._clearCache();
        }, i.showSlotSkinByIndex = function(t, e) {
            if (0 != this._aniMode) {
                var i = this.getSlotByName(t);
                i && i.showDisplayByIndex(e), this._clearCache();
            }
        }, i.showSlotSkinByName = function(t, e) {
            if (0 != this._aniMode) {
                var i = this.getSlotByName(t);
                i && i.showDisplayByName(e), this._clearCache();
            }
        }, i.replaceSlotSkinName = function(t, e, i) {
            if (0 != this._aniMode) {
                var a = this.getSlotByName(t);
                a && a.replaceDisplayByName(e, i), this._clearCache();
            }
        }, i.replaceSlotSkinByIndex = function(t, e, i) {
            if (0 != this._aniMode) {
                var a = this.getSlotByName(t);
                a && a.replaceDisplayByIndex(e, i), this._clearCache();
            }
        }, i.setSlotSkin = function(t, e) {
            if (0 != this._aniMode) {
                var i = this.getSlotByName(t);
                i && i.replaceSkin(e), this._clearCache();
            }
        }, i._clearCache = function() {
            if (1 == this._aniMode) for (var t = 0, e = this._graphicsCache.length; e > t; t++) {
                for (var i = 0, a = this._graphicsCache[t].length; a > i; i++) {
                    var r = this._graphicsCache[t][i];
                    r && r != this.graphics && $.recycle(r);
                }
                this._graphicsCache[t].length = 0;
            }
        }, i.play = function(t, e, i, a, r, s, n) {
            void 0 === i && (i = !0), void 0 === a && (a = 0), void 0 === r && (r = 0), void 0 === s && (s = !0), 
            void 0 === n && (n = !0), this._playAudio = n, this._indexControl = !1;
            var h, l = -1;
            if (h = e ? 2147483647 : 0, "string" == typeof t) for (var o = 0, c = this._templet.getAnimationCount(); c > o; o++) {
                var _ = this._templet.getAnimation(o);
                if (_ && t == _.name) {
                    l = o;
                    break;
                }
            } else l = t;
            l > -1 && l < this.getAnimNum() && (this._aniClipIndex = l, (i || this._pause || this._currAniIndex != l) && (this._currAniIndex = l, 
            this._curOriginalData = new Float32Array(this._templet.getTotalkeyframesLength(l)), 
            this._drawOrder = null, this._eventIndex = 0, this._player.play(l, this._player.playbackRate, h, a, r), 
            s && this._templet.showSkinByIndex(this._boneSlotDic, this._skinIndex), this._pause && (this._pause = !1, 
            this._lastTime = u.now(), this.timer.frameLoop(1, this, this._update, null, !0)), 
            this._update()));
        }, i.stop = function() {
            this._pause || (this._pause = !0, this._player && this._player.stop(!0), this._soundChannelArr.length > 0 && this._onAniSoundStoped(!0), 
            this.timer.clear(this, this._update));
        }, i.playbackRate = function(t) {
            this._player && (this._player.playbackRate = t);
        }, i.paused = function() {
            if (!this._pause) {
                if (this._pause = !0, this._player && (this._player.paused = !0), this._soundChannelArr.length > 0) for (var t, e = this._soundChannelArr.length, i = 0; e > i; i++) (t = this._soundChannelArr[i]).isStopped || t.pause();
                this.timer.clear(this, this._update);
            }
        }, i.resume = function() {
            if (this._indexControl = !1, this._pause) {
                if (this._pause = !1, this._player && (this._player.paused = !1), this._soundChannelArr.length > 0) for (var t, e = this._soundChannelArr.length, i = 0; e > i; i++) (t = this._soundChannelArr[i]).audioBuffer && t.resume();
                this._lastTime = u.now(), this.timer.frameLoop(1, this, this._update, null, !0);
            }
        }, i._getGrahicsDataWithCache = function(t, e) {
            return this._graphicsCache[t][e];
        }, i._setGrahicsDataWithCache = function(t, e, i) {
            this._graphicsCache[t][e] = i;
        }, i.destroy = function(e) {
            void 0 === e && (e = !0), t.prototype.destroy.call(this, e), this._templet._removeReference(1), 
            this._templet = null, this._player && this._player.offAll(), this._player = null, 
            this._curOriginalData = null, this._boneMatrixArray.length = 0, this._lastTime = 0, 
            this.timer.clear(this, this._update), this._soundChannelArr.length > 0 && this._onAniSoundStoped(!0);
        }, h(0, i, "url", function() {
            return this._aniPath;
        }, function(t) {
            this.load(t);
        }), h(0, i, "index", function() {
            return this._index;
        }, function(t) {
            this.player && (this._index = t, this._player.currentTime = 1e3 * this._index / this._player.cacheFrameRate, 
            this._indexControl = !0, this._update(!1));
        }), h(0, i, "total", function() {
            return this._templet && this._player ? this._total = Math.floor(this._templet.getAniDuration(this._player.currentAnimationClipIndex) / 1e3 * this._player.cacheFrameRate) : this._total = -1, 
            this._total;
        }), h(0, i, "templet", function() {
            return this._templet;
        }), h(0, i, "player", function() {
            return this._player;
        }), e.useSimpleMeshInCanvas = !1, e;
    }(M)), et = function(t) {
        function e() {
            this._mainTexture = null, this._textureJson = null, this._graphicsCache = [], this.srcBoneMatrixArr = [], 
            this.ikArr = [], this.tfArr = [], this.pathArr = [], this.boneSlotDic = {}, this.bindBoneBoneSlotDic = {}, 
            this.boneSlotArray = [], this.skinDataArray = [], this.skinDic = {}, this.subTextureDic = {}, 
            this.isParseFail = !1, this.yReverseMatrix = null, this.drawOrderAniArr = [], this.eventAniArr = [], 
            this.attachmentNames = null, this.deformAniArr = [], this._isParseAudio = !1, this._isDestroyed = !1, 
            this._rate = 30, this.isParserComplete = !1, this.aniSectionDic = {}, this._skBufferUrl = null, 
            this._textureDic = {}, this._loadList = null, this._path = null, this._relativeUrl = null, 
            this.tMatrixDataLen = 0, this.mRootBone = null, e.__super.call(this), this.skinSlotDisplayDataArr = [], 
            this.mBoneArr = [];
        }
        n(e, "laya.ani.bone.Templet", t);
        var i = e.prototype;
        return i.loadAni = function(t) {
            this._skBufferUrl = t, r.loader.load(t, d.create(this, this.onComplete), null, "arraybuffer");
        }, i.onComplete = function(t) {
            if (!this._isDestroyed) {
                var e = f.getRes(this._skBufferUrl);
                return e ? (this._path = this._skBufferUrl.slice(0, this._skBufferUrl.lastIndexOf("/")) + "/", 
                void this.parseData(null, e)) : void this.event("error", "load failed:" + this._skBufferUrl);
            }
            this.destroy();
        }, i.parseData = function(t, e, i) {
            if (void 0 === i && (i = 30), !this._path) {
                var a = this._relativeUrl || this.url;
                if (a) {
                    var r = a.lastIndexOf("/");
                    this._path = r > 0 ? a.slice(0, r) + "/" : "";
                }
            }
            this._mainTexture = t, this._rate = i, this.parse(e);
        }, i.buildArmature = function(t) {
            return void 0 === t && (t = 0), new tt(this, t);
        }, i.parse = function(i) {
            t.prototype.parse.call(this, i), this.event("loaded", this), this._aniVersion === e.LAYA_ANIMATION_VISION ? this._isParseAudio = !0 : this._aniVersion != e.LAYA_ANIMATION_160_VISION && console.log("[Error] 版本不一致，请使用IDE版本配套的重新导出" + this._aniVersion + "->" + e.LAYA_ANIMATION_VISION), 
            this._mainTexture ? this._parsePublicExtData() : this._parseTexturePath();
        }, i._parseTexturePath = function() {
            if (this._isDestroyed) this.destroy(); else {
                var t = 0;
                this._loadList = [];
                var e, i = new c(this.getPublicExtData()), a = 0, s = 0, n = 0, h = i.getInt32(), l = i.readUTFString(), o = l.split("\n");
                for (t = 0; h > t; t++) e = this._path + o[2 * t], l = o[2 * t + 1], i.getFloat32(), 
                i.getFloat32(), a = i.getFloat32(), s = i.getFloat32(), n = i.getFloat32(), isNaN(n) ? 0 : n, 
                n = i.getFloat32(), isNaN(n) ? 0 : n, n = i.getFloat32(), isNaN(n) ? a : n, n = i.getFloat32(), 
                isNaN(n) ? s : n, -1 == this._loadList.indexOf(e) && this._loadList.push(e);
                r.loader.load(this._loadList, d.create(this, this._textureComplete));
            }
        }, i._textureComplete = function() {
            for (var t, e = 0, i = this._loadList.length; i > e; e++) t = this._loadList[e], 
            this._textureDic[t] = f.getRes(t);
            this._parsePublicExtData();
        }, i._parsePublicExtData = function() {
            var t = 0, e = 0, i = 0, a = 0, r = 0;
            for (t = 0, r = this.getAnimationCount(); r > t; t++) this._graphicsCache.push([]);
            var s;
            s = "Dragon" != this._aniClassName;
            var n, h, l = new c(this.getPublicExtData()), o = 0, u = 0, _ = 0, p = 0, d = 0, f = 0, m = 0, x = 0, g = 0, v = l.getInt32(), M = l.readUTFString(), D = M.split("\n");
            for (t = 0; v > t; t++) {
                if (n = this._mainTexture, h = this._path + D[2 * t], M = D[2 * t + 1], null == this._mainTexture && (n = this._textureDic[h]), 
                !n) return this.event("error", this), void (this.isParseFail = !0);
                o = l.getFloat32(), u = l.getFloat32(), _ = l.getFloat32(), p = l.getFloat32(), 
                g = l.getFloat32(), d = isNaN(g) ? 0 : g, g = l.getFloat32(), f = isNaN(g) ? 0 : g, 
                g = l.getFloat32(), m = isNaN(g) ? _ : g, g = l.getFloat32(), x = isNaN(g) ? p : g, 
                this.subTextureDic[M] = I.create(n, o, u, _, p, -d, -f, m, x);
            }
            this._mainTexture = n;
            var A, N = l.getUint16();
            for (t = 0; N > t; t++) (A = []).push(l.getUint16()), A.push(l.getUint16()), A.push(l.getUint16()), 
            A.push(l.getUint16()), this.aniSectionDic[t] = A;
            var T, S, C, w, P, U = l.getInt16(), L = {};
            for (t = 0; U > t; t++) T = new q(), 0 == t ? P = T : T.root = P, T.d = s ? -1 : 1, 
            C = l.readUTFString(), w = l.readUTFString(), T.length = l.getFloat32(), 1 == l.getByte() && (T.inheritRotation = !1), 
            1 == l.getByte() && (T.inheritScale = !1), T.name = C, w && ((S = L[w]) ? S.addChild(T) : this.mRootBone = T), 
            L[C] = T, this.mBoneArr.push(T);
            this.tMatrixDataLen = l.getUint16();
            var V, X = l.getUint16(), z = Math.floor(X / this.tMatrixDataLen), Z = this.srcBoneMatrixArr;
            for (t = 0; z > t; t++) (V = new W()).scX = l.getFloat32(), V.skX = l.getFloat32(), 
            V.skY = l.getFloat32(), V.scY = l.getFloat32(), V.x = l.getFloat32(), V.y = l.getFloat32(), 
            8 === this.tMatrixDataLen && (V.skewX = l.getFloat32(), V.skewY = l.getFloat32()), 
            Z.push(V), (T = this.mBoneArr[t]).transform = V;
            var $, j = l.getUint16(), J = 0;
            for (t = 0; j > t; t++) {
                for ($ = new Q(), J = l.getUint16(), e = 0; J > e; e++) $.boneNames.push(l.readUTFString()), 
                $.boneIndexs.push(l.getInt16());
                $.name = l.readUTFString(), $.targetBoneName = l.readUTFString(), $.targetBoneIndex = l.getInt16(), 
                $.bendDirection = l.getFloat32(), $.mix = l.getFloat32(), $.isSpine = s, this.ikArr.push($);
            }
            var tt, et = l.getUint16(), it = 0;
            for (t = 0; et > t; t++) {
                for (tt = new R(), it = l.getUint16(), e = 0; it > e; e++) tt.boneIndexs.push(l.getInt16());
                tt.name = l.getUTFString(), tt.targetIndex = l.getInt16(), tt.rotateMix = l.getFloat32(), 
                tt.translateMix = l.getFloat32(), tt.scaleMix = l.getFloat32(), tt.shearMix = l.getFloat32(), 
                tt.offsetRotation = l.getFloat32(), tt.offsetX = l.getFloat32(), tt.offsetY = l.getFloat32(), 
                tt.offsetScaleX = l.getFloat32(), tt.offsetScaleY = l.getFloat32(), tt.offsetShearY = l.getFloat32(), 
                this.tfArr.push(tt);
            }
            var at, rt = l.getUint16(), st = 0;
            for (t = 0; rt > t; t++) {
                for ((at = new F()).name = l.readUTFString(), st = l.getUint16(), e = 0; st > e; e++) at.bones.push(l.getInt16());
                at.target = l.readUTFString(), at.positionMode = l.readUTFString(), at.spacingMode = l.readUTFString(), 
                at.rotateMode = l.readUTFString(), at.offsetRotation = l.getFloat32(), at.position = l.getFloat32(), 
                at.spacing = l.getFloat32(), at.rotateMix = l.getFloat32(), at.translateMix = l.getFloat32(), 
                this.pathArr.push(at);
            }
            var nt, ht, lt, ot, ut = 0, ct = 0, _t = 0, pt = NaN, dt = 0, ft = l.getInt16();
            for (t = 0; ft > t; t++) {
                var mt = l.getUint8(), yt = {};
                this.deformAniArr.push(yt);
                for (var xt = 0; mt > xt; xt++) for ((nt = new E()).skinName = l.getUTFString(), 
                yt[nt.skinName] = nt, ut = l.getInt16(), e = 0; ut > e; e++) for (ht = new k(), 
                nt.deformSlotDataList.push(ht), ct = l.getInt16(), i = 0; ct > i; i++) for (lt = new Y(), 
                ht.deformSlotDisplayList.push(lt), lt.slotIndex = l.getInt16(), lt.attachment = l.getUTFString(), 
                _t = l.getInt16(), a = 0; _t > a; a++) for (1 == l.getByte() ? lt.tweenKeyList.push(!0) : lt.tweenKeyList.push(!1), 
                pt = l.getFloat32(), lt.timeList.push(pt), ot = [], lt.vectices.push(ot), dt = l.getInt16(), 
                r = 0; dt > r; r++) ot.push(l.getFloat32());
            }
            var gt, vt, Mt = l.getInt16(), Dt = 0, It = 0;
            for (t = 0; Mt > t; t++) {
                for (Dt = l.getInt16(), gt = [], e = 0; Dt > e; e++) {
                    for ((vt = new G()).time = l.getFloat32(), It = l.getInt16(), i = 0; It > i; i++) vt.drawOrder.push(l.getInt16());
                    gt.push(vt);
                }
                this.drawOrderAniArr.push(gt);
            }
            var At, bt, Nt = l.getInt16(), Tt = 0;
            for (t = 0; Nt > t; t++) {
                for (Tt = l.getInt16(), At = [], e = 0; Tt > e; e++) (bt = new H()).name = l.getUTFString(), 
                this._isParseAudio && (bt.audioValue = l.getUTFString()), bt.intValue = l.getInt32(), 
                bt.floatValue = l.getFloat32(), bt.stringValue = l.getUTFString(), bt.time = l.getFloat32(), 
                At.push(bt);
                this.eventAniArr.push(At);
            }
            var St = l.getInt16();
            if (St > 0) for (this.attachmentNames = [], t = 0; St > t; t++) this.attachmentNames.push(l.getUTFString());
            var Ct, Ft, wt = l.getInt16();
            for (t = 0; wt > t; t++) (Ct = new K()).name = l.readUTFString(), Ct.parent = l.readUTFString(), 
            Ct.attachmentName = l.readUTFString(), Ct.srcDisplayIndex = Ct.displayIndex = l.getInt16(), 
            Ct.templet = this, this.boneSlotDic[Ct.name] = Ct, null == (Ft = this.bindBoneBoneSlotDic[Ct.parent]) && (this.bindBoneBoneSlotDic[Ct.parent] = Ft = []), 
            Ft.push(Ct), this.boneSlotArray.push(Ct);
            var kt, Pt, Ut, Bt = l.readUTFString().split("\n"), Lt = 0, Rt = l.getUint8(), Vt = 0, Et = 0, Ot = 0, Yt = 0, Kt = 0, Xt = 0, Wt = 0;
            for (t = 0; Rt > t; t++) {
                for ((kt = new B()).name = Bt[Lt++], Vt = l.getUint8(), e = 0; Vt > e; e++) {
                    for ((Pt = new b()).name = Bt[Lt++], Ct = this.boneSlotDic[Pt.name], Et = l.getUint8(), 
                    i = 0; Et > i; i++) {
                        if (Ut = new O(), this.skinSlotDisplayDataArr.push(Ut), Ut.name = Bt[Lt++], Ut.attachmentName = Bt[Lt++], 
                        Ut.transform = new W(), Ut.transform.scX = l.getFloat32(), Ut.transform.skX = l.getFloat32(), 
                        Ut.transform.skY = l.getFloat32(), Ut.transform.scY = l.getFloat32(), Ut.transform.x = l.getFloat32(), 
                        Ut.transform.y = l.getFloat32(), Pt.displayArr.push(Ut), Ut.width = l.getFloat32(), 
                        Ut.height = l.getFloat32(), Ut.type = l.getUint8(), Ut.verLen = l.getUint16(), (U = l.getUint16()) > 0) for (Ut.bones = [], 
                        a = 0; U > a; a++) {
                            var Gt = l.getUint16();
                            Ut.bones.push(Gt);
                        }
                        if ((Ot = l.getUint16()) > 0) for (Ut.uvs = [], a = 0; Ot > a; a++) Ut.uvs.push(l.getFloat32());
                        if ((Yt = l.getUint16()) > 0) for (Ut.weights = [], a = 0; Yt > a; a++) Ut.weights.push(l.getFloat32());
                        if ((Kt = l.getUint16()) > 0) for (Ut.triangles = [], a = 0; Kt > a; a++) Ut.triangles.push(l.getUint16());
                        if ((Xt = l.getUint16()) > 0) for (Ut.vertices = [], a = 0; Xt > a; a++) Ut.vertices.push(l.getFloat32());
                        if ((Wt = l.getUint16()) > 0) for (Ut.lengths = [], a = 0; Wt > a; a++) Ut.lengths.push(l.getFloat32());
                    }
                    kt.slotArr.push(Pt);
                }
                this.skinDic[kt.name] = kt, this.skinDataArray.push(kt);
            }
            1 == l.getUint8() ? (this.yReverseMatrix = new y(1, 0, 0, -1, 0, 0), P && P.setTempMatrix(this.yReverseMatrix)) : P && P.setTempMatrix(new y()), 
            this.showSkinByIndex(this.boneSlotDic, 0), this.isParserComplete = !0, this.event("complete", this);
        }, i.getTexture = function(t) {
            var e = this.subTextureDic[t];
            return e || (e = this.subTextureDic[t.substr(0, t.length - 1)]), null == e ? this._mainTexture : e;
        }, i.showSkinByIndex = function(t, e, i) {
            if (void 0 === i && (i = !0), 0 > e && e >= this.skinDataArray.length) return !1;
            var a, r, s = 0, n = 0, h = this.skinDataArray[e];
            if (h) {
                for (s = 0, n = h.slotArr.length; n > s; s++) (r = h.slotArr[s]) && ((a = t[r.name]) && (a.showSlotData(r, i), 
                i && "undefined" != a.attachmentName && "null" != a.attachmentName ? a.showDisplayByName(a.attachmentName) : a.showDisplayByIndex(a.displayIndex)));
                return !0;
            }
            return !1;
        }, i.getSkinIndexByName = function(t) {
            for (var e = 0, i = this.skinDataArray.length; i > e; e++) if (this.skinDataArray[e].name == t) return e;
            return -1;
        }, i.getGrahicsDataWithCache = function(t, e) {
            return this._graphicsCache[t] && this._graphicsCache[t][e] ? this._graphicsCache[t][e] : null;
        }, i._setCreateURL = function(t) {
            this._relativeUrl = t, laya.resource.Resource.prototype._setCreateURL.call(this, t);
        }, i.setGrahicsDataWithCache = function(t, e, i) {
            this._graphicsCache[t][e] = i;
        }, i.deleteAniData = function(t) {
            if (this._anis[t]) {
                var e = this._anis[t];
                e.bone3DMap = null, e.nodes = null;
            }
        }, i.destroy = function() {
            var t, i;
            for (i in this._isDestroyed = !0, this.subTextureDic) (t = this.subTextureDic[i]) && t.destroy();
            for (i in this._textureDic) (t = this._textureDic[i]) && t.destroy();
            for (var a = 0, r = this.skinSlotDisplayDataArr.length; r > a; a++) this.skinSlotDisplayDataArr[a].destory();
            this.skinSlotDisplayDataArr.length = 0, this.url && delete e.TEMPLET_DICTIONARY[this.url], 
            laya.resource.Resource.prototype.destroy.call(this);
        }, i.getAniNameByIndex = function(t) {
            var e = this.getAnimation(t);
            return e ? e.name : null;
        }, h(0, i, "rate", function() {
            return this._rate;
        }, function(t) {
            this._rate = t;
        }), e.LAYA_ANIMATION_160_VISION = "LAYAANIMATION:1.6.0", e.LAYA_ANIMATION_VISION = "LAYAANIMATION:1.7.0", 
        e.TEMPLET_DICTIONARY = null, e;
    }(J);
}(window, document, Laya);