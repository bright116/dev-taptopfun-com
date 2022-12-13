!function(t, e, i) {
    var a = (i.un, i.uns, i["static"]), r = i["class"], s = i.getset, n = i.__newvec, h = laya.maths.Bezier, l = laya.utils.Browser, o = laya.utils.Byte, u = (laya.Const, 
    laya.events.Event, laya.events.EventDispatcher), c = laya.display.Graphics, _ = laya.utils.Handler, p = laya.net.Loader, d = laya.maths.MathUtil, f = laya.maths.Matrix, m = (laya.display.Node, 
    laya.maths.Rectangle), y = (laya.renders.Render, laya.resource.Resource), x = (laya.media.SoundChannel, 
    laya.media.SoundManager), g = laya.display.Sprite, v = laya.utils.Stat, M = laya.resource.Texture, D = (laya.resource.Texture2D, 
    laya.utils.Timer, laya.net.URL, laya.utils.Utils), I = function() {
        function t() {
            this.name = null, this.displayArr = [];
        }
        r(t, "laya.ani.bone.SlotData");
        var e = t.prototype;
        return e.getDisplayByName = function(t) {
            for (var e, i = 0, a = this.displayArr.length; a > i; i++) if (e = this.displayArr[i], 
            e.attachmentName == t) return i;
            return -1;
        }, t;
    }(), A = function() {
        function t() {
            this.texture = null, this.uvTransform = null, this.useUvTransform = !1, this.canvasPadding = 1, 
            this.uvs = new Float32Array([ 0, 0, 1, 0, 1, 1, 0, 1 ]), this.vertices = new Float32Array([ 0, 0, 100, 0, 100, 100, 0, 100 ]), 
            this.indexes = new Uint16Array([ 0, 1, 3, 3, 1, 2 ]);
        }
        r(t, "laya.ani.bone.canvasmesh.MeshData");
        var e = t.prototype;
        return e.getBounds = function() {
            return m._getWrapRec(this.vertices);
        }, t;
    }(), b = function() {
        function t() {
            this.name = null, this.parentIndex = 0, this.parent = null, this.keyframeWidth = 0, 
            this.lerpType = 0, this.interpolationMethod = null, this.childs = null, this.keyFrame = null, 
            this.playTime = NaN, this.extenData = null, this.dataOffset = 0;
        }
        return r(t, "laya.ani.AnimationNodeContent"), t;
    }(), N = function() {
        function t() {
            this.startTime = NaN, this.duration = NaN, this.interpolationData = null, this.data = null, 
            this.dData = null, this.nextData = null;
        }
        return r(t, "laya.ani.KeyFramesContent"), t;
    }(), T = function() {
        function t(t, e) {
            this._data = null, this._bones = null, this.target = null, this.rotateMix = NaN, 
            this.translateMix = NaN, this.scaleMix = NaN, this.shearMix = NaN, this._temp = n(2, 0), 
            this._data = t, null == this._bones && (this._bones = []), this.target = e[t.targetIndex];
            var i = 0, a = 0;
            for (i = 0, a = t.boneIndexs.length; a > i; i++) this._bones.push(e[t.boneIndexs[i]]);
            this.rotateMix = t.rotateMix, this.translateMix = t.translateMix, this.scaleMix = t.scaleMix, 
            this.shearMix = t.shearMix;
        }
        r(t, "laya.ani.bone.TfConstraint");
        var e = t.prototype;
        return e.apply = function() {
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
                    c = Math.atan2(r, i) - Math.atan2(a, e) - (y - Math.atan2(t.resultMatrix.c, t.resultMatrix.a)), 
                    c > Math.PI ? c -= 2 * Math.PI : c < -Math.PI && (c += 2 * Math.PI), c = y + (c + this._data.offsetShearY * Math.PI / 180) * this.shearMix, 
                    m = Math.sqrt(l * l + u * u), t.resultMatrix.b = Math.cos(c) * m, t.resultMatrix.d = Math.sin(c) * m;
                }
            }
        }, t;
    }(), S = function() {
        function t() {
            this.name = null, this.target = null, this.positionMode = null, this.spacingMode = null, 
            this.rotateMode = null, this.offsetRotation = NaN, this.position = NaN, this.spacing = NaN, 
            this.rotateMix = NaN, this.translateMix = NaN, this.bones = [];
        }
        return r(t, "laya.ani.bone.PathConstraintData"), t;
    }(), C = function() {
        function t() {}
        return r(t, "laya.ani.bone.UVTools"), t.getRelativeUV = function(t, e, i) {
            var a = t[0], r = t[2] - t[0], s = t[1], n = t[5] - t[1];
            i || (i = []), i.length = e.length;
            var h = 0, l = 0;
            l = i.length;
            var o = 1 / r, u = 1 / n;
            for (h = 0; l > h; h += 2) i[h] = (e[h] - a) * o, i[h + 1] = (e[h + 1] - s) * u;
            return i;
        }, t.getAbsoluteUV = function(t, e, i) {
            if (0 == t[0] && 0 == t[1] && 1 == t[4] && 1 == t[5]) return i ? (D.copyArray(i, e), 
            i) : e;
            var a = t[0], r = t[2] - t[0], s = t[1], n = t[5] - t[1];
            i || (i = []), i.length = e.length;
            var h = 0, l = 0;
            for (l = i.length, h = 0; l > h; h += 2) i[h] = e[h] * r + a, i[h + 1] = e[h + 1] * n + s;
            return i;
        }, t;
    }(), F = function() {
        function t() {
            this.deformSlotDisplayList = [];
        }
        return r(t, "laya.ani.bone.DeformSlotData"), t;
    }(), w = function() {
        function t() {}
        return r(t, "laya.ani.AnimationParser02"), t.READ_DATA = function() {
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
            t._templet = e, t._reader = i;
            i.__getBuffer();
            t.READ_DATA(), t.READ_BLOCK(), t.READ_STRINGS();
            for (var a = 0, r = t._BLOCK.count; r > a; a++) {
                var s = i.getUint16(), n = t._strings[s], h = t["READ_" + n];
                if (null == h) throw new Error("model file err,no this function:" + s + " " + n);
                h.call(null);
            }
        }, t.READ_ANIMATIONS = function() {
            var e = t._reader, i = e.__getBuffer(), a = 0, r = 0, s = 0, n = 0, h = e.getUint16(), l = [];
            for (l.length = h, a = 0; h > a; a++) l[a] = $.interpolation[e.getByte()];
            var o = e.getUint8();
            for (t._templet._anis.length = o, a = 0; o > a; a++) {
                var u = t._templet._anis[a] = new L();
                u.nodes = new Array();
                var c = u.name = t._strings[e.getUint16()];
                t._templet._aniMap[c] = a, u.bone3DMap = {}, u.playTime = e.getFloat32();
                var _ = u.nodes.length = e.getInt16();
                for (u.totalKeyframeDatasLength = 0, r = 0; _ > r; r++) {
                    var p = u.nodes[r] = new b();
                    p.keyframeWidth = h, p.childs = [];
                    var d = e.getUint16();
                    d >= 0 && (p.name = t._strings[d], u.bone3DMap[p.name] = r), p.keyFrame = new Array(), 
                    p.parentIndex = e.getInt16(), -1 == p.parentIndex ? p.parent = null : p.parent = u.nodes[p.parentIndex], 
                    u.totalKeyframeDatasLength += h, p.interpolationMethod = l, null != p.parent && p.parent.childs.push(p);
                    var f = e.getUint16();
                    p.keyFrame.length = f;
                    var m = null, y = null;
                    for (s = 0, n = f; n > s; s++) {
                        m = p.keyFrame[s] = new N(), m.startTime = e.getFloat32(), y && (y.duration = m.startTime - y.startTime), 
                        m.dData = new Float32Array(h), m.nextData = new Float32Array(h);
                        var x = t._DATA.offset, g = e.getUint32(), v = 4 * h, M = i.slice(x + g, x + g + v);
                        m.data = new Float32Array(M), y = m;
                    }
                    m.duration = 0, p.playTime = u.playTime, t._templet._calculateKeyFrame(p, f, h);
                }
            }
        }, t._templet = null, t._reader = null, t._strings = [], a(t, [ "_BLOCK", function() {
            return this._BLOCK = {
                count: 0
            };
        }, "_DATA", function() {
            return this._DATA = {
                offset: 0,
                size: 0
            };
        } ]), t;
    }(), k = function() {
        function t() {}
        return r(t, "laya.ani.AnimationParser01"), t.parse = function(t, e) {
            var i = e.__getBuffer(), a = 0, r = 0, s = 0, n = 0, h = 0, l = 0, u = 0, c = e.readUTFString();
            t._aniClassName = c;
            var _, p = e.readUTFString().split("\n"), d = e.getUint8(), f = e.getUint32(), m = e.getUint32();
            f > 0 && (_ = i.slice(f, m));
            var y = new o(_);
            for (m > 0 && (t._publicExtData = i.slice(m, i.byteLength)), t._useParent = !!e.getUint8(), 
            t._anis.length = d, a = 0; d > a; a++) {
                var x = t._anis[a] = new L();
                x.nodes = new Array();
                var g = x.name = p[e.getUint16()];
                t._aniMap[g] = a, x.bone3DMap = {}, x.playTime = e.getFloat32();
                var v = x.nodes.length = e.getUint8();
                for (x.totalKeyframeDatasLength = 0, r = 0; v > r; r++) {
                    var M = x.nodes[r] = new b();
                    M.childs = [];
                    var D = e.getInt16();
                    D >= 0 && (M.name = p[D], x.bone3DMap[M.name] = r), M.keyFrame = new Array(), M.parentIndex = e.getInt16(), 
                    -1 == M.parentIndex ? M.parent = null : M.parent = x.nodes[M.parentIndex], M.lerpType = e.getUint8();
                    var I = e.getUint32();
                    y.pos = I;
                    var A = M.keyframeWidth = y.getUint16();
                    if (x.totalKeyframeDatasLength += A, 0 === M.lerpType || 1 === M.lerpType) for (M.interpolationMethod = [], 
                    M.interpolationMethod.length = A, s = 0; A > s; s++) M.interpolationMethod[s] = $.interpolation[y.getUint8()];
                    null != M.parent && M.parent.childs.push(M);
                    var T = e.getUint16();
                    T > 0 && (M.extenData = i.slice(e.pos, e.pos + T), e.pos += T);
                    var S = e.getUint16();
                    M.keyFrame.length = S;
                    var C, F = 0;
                    for (s = 0, n = S; n > s; s++) {
                        if (C = M.keyFrame[s] = new N(), C.duration = e.getFloat32(), C.startTime = F, 2 === M.lerpType) {
                            C.interpolationData = [];
                            var w = e.getUint8(), k = 0;
                            switch (k = e.getFloat32()) {
                              case 254:
                                for (C.interpolationData.length = A, u = 0; A > u; u++) C.interpolationData[u] = 0;
                                break;

                              case 255:
                                for (C.interpolationData.length = A, u = 0; A > u; u++) C.interpolationData[u] = 5;
                                break;

                              default:
                                for (C.interpolationData.push(k), l = 1; w > l; l++) C.interpolationData.push(e.getFloat32());
                            }
                        }
                        for (C.data = new Float32Array(A), C.dData = new Float32Array(A), C.nextData = new Float32Array(A), 
                        h = 0; A > h; h++) C.data[h] = e.getFloat32(), C.data[h] > -1e-8 && C.data[h] < 1e-8 && (C.data[h] = 0);
                        F += C.duration;
                    }
                    C.startTime = x.playTime, M.playTime = x.playTime, t._calculateKeyFrame(M, S, A);
                }
            }
        }, t;
    }(), P = function() {
        function t() {
            this.name = null, this.slotArr = [];
        }
        return r(t, "laya.ani.bone.SkinData"), t;
    }(), U = function() {
        function t(t, e) {
            this._targetBone = null, this._bones = null, this._data = null, this.name = null, 
            this.mix = NaN, this.bendDirection = NaN, this.isSpine = !0, this._sp = null, this.isDebug = !1, 
            this._data = t, this._targetBone = e[t.targetBoneIndex], this.isSpine = t.isSpine, 
            null == this._bones && (this._bones = []), this._bones.length = 0;
            for (var i = 0, a = t.boneIndexs.length; a > i; i++) this._bones.push(e[t.boneIndexs[i]]);
            this.name = t.name, this.mix = t.mix, this.bendDirection = t.bendDirection;
        }
        r(t, "laya.ani.bone.IkConstraint");
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
        }, e._applyIk2 = function(e, a, r, s, n, h) {
            if (0 != h) {
                var l = e.resultTransform.x, o = e.resultTransform.y, u = e.transform.scX, c = e.transform.scY, _ = a.transform.scX, p = 0, d = 0, f = 0;
                0 > u ? (u = -u, p = 180, f = -1) : (p = 0, f = 1), 0 > c && (c = -c, f = -f), 0 > _ ? (_ = -_, 
                d = 180) : d = 0;
                var m = a.resultTransform.x, y = NaN, x = NaN, v = NaN, M = e.resultMatrix.a, D = e.resultMatrix.c, I = e.resultMatrix.b, A = e.resultMatrix.d, b = Math.abs(u - c) <= 1e-4;
                b ? (y = a.resultTransform.y, x = M * m + D * y + e.resultMatrix.tx, v = I * m + A * y + e.resultMatrix.ty) : (y = 0, 
                x = M * m + e.resultMatrix.tx, v = I * m + e.resultMatrix.ty), this.isDebug && (this._sp || (this._sp = new g(), 
                i.stage.addChild(this._sp)), this._sp.graphics.clear(), this._sp.graphics.drawCircle(r, s, 15, "#ffff00"), 
                this._sp.graphics.drawCircle(x, v, 15, "#ff00ff")), e.setRotation(Math.atan2(v - e.resultMatrix.ty, x - e.resultMatrix.tx));
                var N = e.parentBone;
                M = N.resultMatrix.a, D = N.resultMatrix.c, I = N.resultMatrix.b, A = N.resultMatrix.d;
                var T = 1 / (M * A - D * I), S = r - N.resultMatrix.tx, C = s - N.resultMatrix.ty, F = (S * A - C * D) * T - l, w = (C * M - S * I) * T - o;
                S = x - N.resultMatrix.tx, C = v - N.resultMatrix.ty;
                var k = (S * A - C * D) * T - l, P = (C * M - S * I) * T - o, U = Math.sqrt(k * k + P * P), B = a.length * _, L = NaN, R = NaN;
                if (b) {
                    B *= u;
                    var V = (F * F + w * w - U * U - B * B) / (2 * U * B);
                    -1 > V ? V = -1 : V > 1 && (V = 1), R = Math.acos(V) * n, M = U + B * V, D = B * Math.sin(R), 
                    L = Math.atan2(w * M - F * D, F * M + w * D);
                } else {
                    M = u * B, D = c * B;
                    var E = M * M, O = D * D, Y = F * F + w * w, K = Math.atan2(w, F);
                    I = O * U * U + E * Y - E * O;
                    var X = -2 * O * U, W = O - E;
                    if (A = X * X - 4 * W * I, A > 0) {
                        var G = Math.sqrt(A);
                        0 > X && (G = -G), G = -(X + G) / 2;
                        var z = G / W, q = I / G, H = Math.abs(z) < Math.abs(q) ? z : q;
                        Y >= H * H && (C = Math.sqrt(Y - H * H) * n, L = K - Math.atan2(C, H), R = Math.atan2(C / c, (H - U) / u));
                    }
                    var Q = 0, Z = Number.MAX_VALUE, $ = 0, j = 0, J = 0, tt = 0, et = 0, it = 0;
                    S = U + M, A = S * S, A > tt && (J = 0, tt = A, et = S), S = U - M, A = S * S, Z > A && (Q = Math.PI, 
                    Z = A, $ = S);
                    var at = Math.acos(-M * U / (E - O));
                    S = M * Math.cos(at) + U, C = D * Math.sin(at), A = S * S + C * C, Z > A && (Q = at, 
                    Z = A, $ = S, j = C), A > tt && (J = at, tt = A, et = S, it = C), (Z + tt) / 2 >= Y ? (L = K - Math.atan2(j * n, $), 
                    R = Q * n) : (L = K - Math.atan2(it * n, et), R = J * n);
                }
                var rt = Math.atan2(y, m) * f, st = e.resultTransform.skX;
                L = (L - rt) * t.radDeg + p - st, L > 180 ? L -= 360 : -180 > L && (L += 360), e.resultTransform.x = l, 
                e.resultTransform.y = o, e.resultTransform.skX = e.resultTransform.skY = st + L * h, 
                st = a.resultTransform.skX, st %= 360, R = ((R + rt) * t.radDeg - 0) * f + d - st, 
                R > 180 ? R -= 360 : -180 > R && (R += 360), a.resultTransform.x = m, a.resultTransform.y = y, 
                a.resultTransform.skX = a.resultTransform.skY = a.resultTransform.skY + R * h, e.update();
            }
        }, e._applyIk3 = function(e, a, r, s, n, h) {
            if (0 != h) {
                var l = NaN, o = NaN, u = a.resultMatrix.a * a.length, c = a.resultMatrix.b * a.length, _ = u * u + c * c, p = Math.sqrt(_), d = e.resultMatrix.tx, f = e.resultMatrix.ty, m = a.resultMatrix.tx, y = a.resultMatrix.ty, x = m - d, v = y - f, M = x * x + v * v, D = Math.sqrt(M);
                x = r - e.resultMatrix.tx, v = s - e.resultMatrix.ty;
                var I = x * x + v * v, A = Math.sqrt(I);
                if (A >= p + D || D >= A + p || p >= A + D) {
                    var b = NaN;
                    b = A >= p + D ? 1 : -1, m = d + b * (r - d) * D / A, y = f + b * (s - f) * D / A;
                } else {
                    var N = (M - _ + I) / (2 * I), T = Math.sqrt(M - N * N * I) / A, S = d + x * N, C = f + v * N, F = -v * T, w = x * T;
                    n > 0 ? (m = S - F, y = C - w) : (m = S + F, y = C + w);
                }
                l = m, o = y, this.isDebug && (this._sp || (this._sp = new g(), i.stage.addChild(this._sp)), 
                this._sp.graphics.clear(), this._sp.graphics.drawCircle(d, f, 15, "#ff00ff"), this._sp.graphics.drawCircle(r, s, 15, "#ffff00"), 
                this._sp.graphics.drawCircle(l, o, 15, "#ff00ff"));
                var k = NaN;
                k = Math.atan2(o - e.resultMatrix.ty, l - e.resultMatrix.tx), e.setRotation(k);
                var P;
                P = t._tempMatrix, P.identity(), P.rotate(k), P.scale(e.resultMatrix.getScaleX(), e.resultMatrix.getScaleY()), 
                P.translate(e.resultMatrix.tx, e.resultMatrix.ty), P.copyTo(e.resultMatrix), e.updateChild();
                var U = NaN;
                U = Math.atan2(s - o, r - l), a.setRotation(U);
                var B;
                B = t._tempMatrix, B.identity(), B.rotate(U), B.scale(a.resultMatrix.getScaleX(), a.resultMatrix.getScaleY()), 
                B.translate(l, o), P.copyTo(a.resultMatrix), a.updateChild();
            }
        }, a(t, [ "radDeg", function() {
            return this.radDeg = 180 / Math.PI;
        }, "degRad", function() {
            return this.degRad = Math.PI / 180;
        }, "_tempMatrix", function() {
            return this._tempMatrix = new f();
        } ]), t;
    }(), B = function() {
        function t() {
            this.name = null, this.targetIndex = 0, this.rotateMix = NaN, this.translateMix = NaN, 
            this.scaleMix = NaN, this.shearMix = NaN, this.offsetRotation = NaN, this.offsetX = NaN, 
            this.offsetY = NaN, this.offsetScaleX = NaN, this.offsetScaleY = NaN, this.offsetShearY = NaN, 
            this.boneIndexs = [];
        }
        return r(t, "laya.ani.bone.TfConstraintData"), t;
    }(), L = function() {
        function t() {
            this.nodes = null, this.name = null, this.playTime = NaN, this.bone3DMap = null, 
            this.totalKeyframeDatasLength = 0;
        }
        return r(t, "laya.ani.AnimationContent"), t;
    }(), R = (function() {
        function t() {}
        return r(t, "laya.ani.AnimationState"), t.stopped = 0, t.paused = 1, t.playing = 2, 
        t;
    }(), function() {
        function t() {
            this.skinName = null, this.deformSlotDataList = [];
        }
        return r(t, "laya.ani.bone.DeformAniData"), t;
    }()), V = function() {
        function t() {
            this.name = null, this.attachmentName = null, this.type = 0, this.transform = null, 
            this.width = NaN, this.height = NaN, this.texture = null, this.bones = null, this.uvs = null, 
            this.weights = null, this.triangles = null, this.vertices = null, this.lengths = null, 
            this.verLen = 0;
        }
        r(t, "laya.ani.bone.SkinSlotDisplayData");
        var e = t.prototype;
        return e.createTexture = function(t) {
            return this.texture ? this.texture : (this.texture = new M(t.bitmap, this.uvs), 
            this.uvs[0] > this.uvs[4] && this.uvs[1] > this.uvs[5] ? (this.texture.width = t.height, 
            this.texture.height = t.width, this.texture.offsetX = -t.offsetX, this.texture.offsetY = -t.offsetY, 
            this.texture.sourceWidth = t.sourceHeight, this.texture.sourceHeight = t.sourceWidth) : (this.texture.width = t.width, 
            this.texture.height = t.height, this.texture.offsetX = -t.offsetX, this.texture.offsetY = -t.offsetY, 
            this.texture.sourceWidth = t.sourceWidth, this.texture.sourceHeight = t.sourceHeight), 
            this.texture);
        }, e.destory = function() {
            this.texture && this.texture.destroy();
        }, t;
    }(), E = function() {
        function t() {
            this.boneSlot = null, this.slotIndex = -1, this.attachment = null, this.deformData = null, 
            this.frameIndex = 0, this.timeList = [], this.vectices = [], this.tweenKeyList = [];
        }
        r(t, "laya.ani.bone.DeformSlotDisplayData");
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
                var a = 0, r = this.timeList[0];
                if (!(r > t)) {
                    var s = this.vectices[0].length, n = [], h = this.binarySearch1(this.timeList, t);
                    if (this.frameIndex = h, t >= this.timeList[this.timeList.length - 1]) {
                        var l = this.vectices[this.vectices.length - 1];
                        if (1 > i) for (a = 0; s > a; a++) n[a] += (l[a] - n[a]) * i; else for (a = 0; s > a; a++) n[a] = l[a];
                        return void (this.deformData = n);
                    }
                    var o = (this.tweenKeyList[this.frameIndex], this.vectices[this.frameIndex - 1]), u = this.vectices[this.frameIndex], c = this.timeList[this.frameIndex - 1], _ = this.timeList[this.frameIndex];
                    i = this.tweenKeyList[h - 1] ? (t - c) / (_ - c) : 0;
                    var p = NaN;
                    for (a = 0; s > a; a++) p = o[a], n[a] = p + (u[a] - p) * i;
                    this.deformData = n;
                }
            }
        }, t;
    }(), O = function() {
        function t() {
            this.name = null, this.parent = null, this.attachmentName = null, this.srcDisplayIndex = -1, 
            this.type = "src", this.templet = null, this.currSlotData = null, this.currTexture = null, 
            this.currDisplayData = null, this.displayIndex = -1, this.originalIndex = -1, this._diyTexture = null, 
            this._parentMatrix = null, this._resultMatrix = null, this._replaceDic = {}, this._curDiyUV = null, 
            this._curDiyVS = null, this._skinSprite = null, this.deformData = null, this._mVerticleArr = null, 
            this._preGraphicVerticle = null, this._preGraphicMatrix = null;
        }
        r(t, "laya.ani.bone.BoneSlot");
        var e = t.prototype;
        return e.showSlotData = function(t, e) {
            void 0 === e && (e = !0), this.currSlotData = t, e && (this.displayIndex = this.srcDisplayIndex), 
            this.currDisplayData = null, this.currTexture = null;
        }, e.showDisplayByName = function(t) {
            this.currSlotData && this.showDisplayByIndex(this.currSlotData.getDisplayByName(t));
        }, e.replaceDisplayByName = function(t, e) {
            if (this.currSlotData) {
                var i = 0;
                i = this.currSlotData.getDisplayByName(t);
                var a = 0;
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
            return t.useSameMatrixAndVerticle && this._preGraphicVerticle && t.isSameArr(e, this._preGraphicVerticle) ? e = this._preGraphicVerticle : (e = D.copyArray([], e), 
            this._preGraphicVerticle = e), e;
        }, e.getSaveMatrix = function(e) {
            if (t.useSameMatrixAndVerticle && this._preGraphicMatrix && t.isSameMatrix(e, this._preGraphicMatrix)) e = this._preGraphicMatrix; else {
                var i = e.clone();
                e = i, this._preGraphicMatrix = e;
            }
            return e;
        }, e.draw = function(e, i, a, r) {
            if (void 0 === a && (a = !1), void 0 === r && (r = 1), (null != this._diyTexture || null != this.currTexture) && null != this.currDisplayData || this.currDisplayData && 3 == this.currDisplayData.type) {
                var s = this.currTexture;
                this._diyTexture && (s = this._diyTexture);
                var n;
                switch (this.currDisplayData.type) {
                  case 0:
                    if (e) {
                        var h = this.getDisplayMatrix();
                        if (this._parentMatrix) {
                            var l = !1;
                            if (h) {
                                f.mul(h, this._parentMatrix, f.TEMP);
                                var o;
                                if (a ? (null == this._resultMatrix && (this._resultMatrix = new f()), o = this._resultMatrix) : o = t._tempResultMatrix, 
                                this._diyTexture && this.currDisplayData.uvs) {
                                    var u = t._tempMatrix;
                                    u.identity(), this.currDisplayData.uvs[1] > this.currDisplayData.uvs[5] && (u.d = -1), 
                                    this.currDisplayData.uvs[0] > this.currDisplayData.uvs[4] && this.currDisplayData.uvs[1] > this.currDisplayData.uvs[5] && (l = !0, 
                                    u.rotate(-Math.PI / 2)), f.mul(u, f.TEMP, o);
                                } else f.TEMP.copyTo(o);
                                a || (o = this.getSaveMatrix(o)), o._checkTransform(), l ? e.drawTexture(s, -this.currDisplayData.height / 2, -this.currDisplayData.width / 2, this.currDisplayData.height, this.currDisplayData.width, o, r) : e.drawTexture(s, -this.currDisplayData.width / 2, -this.currDisplayData.height / 2, this.currDisplayData.width, this.currDisplayData.height, o, r);
                            }
                        }
                    }
                    break;

                  case 1:
                    if (a ? (null == this._skinSprite && (this._skinSprite = t.createSkinMesh()), n = this._skinSprite) : n = t.createSkinMesh(), 
                    null == n) return;
                    var c;
                    if (null == this.currDisplayData.bones) {
                        var _ = this.currDisplayData.weights;
                        this.deformData && (_ = this.deformData);
                        var p;
                        this._diyTexture ? (this._curDiyUV || (this._curDiyUV = []), 0 == this._curDiyUV.length && (this._curDiyUV = C.getRelativeUV(this.currTexture.uv, this.currDisplayData.uvs, this._curDiyUV), 
                        this._curDiyUV = C.getAbsoluteUV(this._diyTexture.uv, this._curDiyUV, this._curDiyUV)), 
                        p = this._curDiyUV) : p = this.currDisplayData.uvs, this._mVerticleArr = _;
                        this.currDisplayData.triangles.length / 3;
                        c = this.currDisplayData.triangles, this.deformData && (a || (this._mVerticleArr = this.getSaveVerticle(this._mVerticleArr))), 
                        n.init2(s, c, this._mVerticleArr, p);
                        var d = this.getDisplayMatrix();
                        if (this._parentMatrix && d) {
                            f.mul(d, this._parentMatrix, f.TEMP);
                            var m;
                            a ? (null == this._resultMatrix && (this._resultMatrix = new f()), m = this._resultMatrix) : m = t._tempResultMatrix, 
                            f.TEMP.copyTo(m), a || (m = this.getSaveMatrix(m)), n.transform = m;
                        }
                    } else this.skinMesh(i, n);
                    e.drawSkin(n, r);
                    break;

                  case 2:
                    if (a ? (null == this._skinSprite && (this._skinSprite = t.createSkinMesh()), n = this._skinSprite) : n = t.createSkinMesh(), 
                    null == n) return;
                    this.skinMesh(i, n), e.drawSkin(n, r);
                    break;

                  case 3:
                }
            }
        }, e.skinMesh = function(e, i) {
            var a, r = this.currTexture, s = this.currDisplayData.bones;
            this._diyTexture ? (r = this._diyTexture, this._curDiyUV || (this._curDiyUV = []), 
            0 == this._curDiyUV.length && (this._curDiyUV = C.getRelativeUV(this.currTexture.uv, this.currDisplayData.uvs, this._curDiyUV), 
            this._curDiyUV = C.getAbsoluteUV(this._diyTexture.uv, this._curDiyUV, this._curDiyUV)), 
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
            return new Z();
        }, t.isSameArr = function(t, e) {
            if (t.length != e.length) return !1;
            var i = 0, a = 0;
            for (a = t.length, i = 0; a > i; i++) if (t[i] != e[i]) return !1;
            return !0;
        }, t.isSameMatrix = function(t, e) {
            return t.a == e.a && t.b == e.b && t.c == e.c && t.d == e.d && Math.abs(t.tx - e.tx) < 1e-5 && Math.abs(t.ty - e.ty) < 1e-5;
        }, t.useSameMatrixAndVerticle = !0, t._tempVerticleArr = [], a(t, [ "_tempMatrix", function() {
            return this._tempMatrix = new f();
        }, "_tempResultMatrix", function() {
            return this._tempResultMatrix = new f();
        } ]), t;
    }(), Y = function() {
        function t(t, e) {
            this.target = null, this.data = null, this.bones = null, this.position = NaN, this.spacing = NaN, 
            this.rotateMix = NaN, this.translateMix = NaN, this._debugKey = !1, this._spaces = null, 
            this._segments = [], this._curves = [], this.data = t, this.position = t.position, 
            this.spacing = t.spacing, this.rotateMix = t.rotateMix, this.translateMix = t.translateMix, 
            this.bones = [];
            for (var i = this.data.bones, a = 0, r = i.length; r > a; a++) this.bones.push(e[i[a]]);
        }
        r(t, "laya.ani.bone.PathConstraint");
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
                    y = this.bones[f], y.resultMatrix.tx += (I - y.resultMatrix.tx) * i, y.resultMatrix.ty += (A - y.resultMatrix.ty) * i, 
                    g = M[T], v = M[T + 1];
                    var S = g - I, C = v - A;
                    if (o && (x = u[f], 0 != x)) {
                        var F = (Math.sqrt(S * S + C * C) / x - 1) * a + 1;
                        y.resultMatrix.a *= F, y.resultMatrix.c *= F;
                    }
                    if (I = g, A = v, r) {
                        var w = y.resultMatrix.a, k = y.resultMatrix.c, P = y.resultMatrix.b, U = y.resultMatrix.d, B = NaN, L = NaN, R = NaN;
                        B = l ? M[T - 1] : 0 == p[f + 1] ? M[T + 2] : Math.atan2(C, S), B -= Math.atan2(P, w) - b / 180 * Math.PI, 
                        N && (L = Math.cos(B), R = Math.sin(B), x = y.length, I += (x * (L * w - R * P) - S) * a, 
                        A += (x * (R * w + L * P) - C) * a), B > Math.PI ? B -= 2 * Math.PI : B < -Math.PI && (B += 2 * Math.PI), 
                        B *= a, L = Math.cos(B), R = Math.sin(B), y.resultMatrix.a = L * w - R * P, y.resultMatrix.c = L * k - R * U, 
                        y.resultMatrix.b = R * w + L * P, y.resultMatrix.d = R * k + L * U;
                    }
                }
            }
        }, e.computeWorldVertices2 = function(e, i, a, r, s, n) {
            var h, l, o = e.currDisplayData.bones, u = e.currDisplayData.weights, c = e.currDisplayData.triangles, _ = 0, p = 0, d = 0, f = 0, m = 0, y = 0, x = 0, g = 0, v = 0, M = 0, D = 0;
            if (null != o) {
                for (_ = 0; a > _; _ += 2) f = o[p], p += f + 1, d += f;
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
                c || (c = u), e.deformData && (c = e.deformData);
                var b;
                if (b = e.parent, i) for (D = i.length, _ = 0; D > _; _++) if (i[_].name == b) {
                    l = i[_];
                    break;
                }
                var N;
                l && (N = l.resultMatrix), N || (N = t._tempMt);
                var T = N.tx, S = N.ty, C = N.a, F = N.b, w = N.c, k = N.d;
                for (l && (k *= l.d), p = a, m = n; r > m; p += 2, m += 2) v = c[p], M = c[p + 1], 
                s[m] = v * C + M * F + T, s[m + 1] = -(v * w + M * k + S);
            }
        }, e.computeWorldPositions = function(t, e, i, a, r, s, n) {
            var h = (t.currDisplayData.bones, t.currDisplayData.weights, t.currDisplayData.triangles, 
            []), l = 0, o = t.currDisplayData.verLen, u = this.position, c = this._spaces, _ = [], p = [], d = !1, f = o / 6, m = -1, y = NaN, x = 0, g = 0, v = NaN, M = NaN, D = NaN, I = NaN;
            if (d) o += 2, _[o - 2] = _[0], _[o - 1] = _[1]; else {
                if (f--, o -= 4, this.computeWorldVertices2(t, e, 2, o, h, 0), this._debugKey) for (l = 0; l < h.length; ) i.drawCircle(h[l++], h[l++], 10, "#ff0000");
                _ = h;
            }
            this._curves.length = f;
            var A = this._curves;
            y = 0;
            var b = _[0], N = _[1], T = 0, S = 0, C = 0, F = 0, w = 0, k = 0, P = NaN, U = NaN, B = NaN, L = NaN, R = NaN, V = NaN, E = NaN, O = NaN, Y = 0;
            for (l = 0, Y = 2; f > l; l++, Y += 6) T = _[Y], S = _[Y + 1], C = _[Y + 2], F = _[Y + 3], 
            w = _[Y + 4], k = _[Y + 5], P = .1875 * (b - 2 * T + C), U = .1875 * (N - 2 * S + F), 
            B = .09375 * (3 * (T - C) - b + w), L = .09375 * (3 * (S - F) - N + k), R = 2 * P + B, 
            V = 2 * U + L, E = .75 * (T - b) + P + .16666667 * B, O = .75 * (S - N) + U + .16666667 * L, 
            y += Math.sqrt(E * E + O * O), E += R, O += V, R += B, V += L, y += Math.sqrt(E * E + O * O), 
            E += R, O += V, y += Math.sqrt(E * E + O * O), E += R + B, O += V + L, y += Math.sqrt(E * E + O * O), 
            A[l] = y, b = w, N = k;
            if (s && (u *= y), n) for (l = 0; a > l; l++) c[l] *= y;
            var K = this._segments, X = 0, W = 0;
            for (l = 0, x = 0, g = 0, W = 0; a > l; l++, x += 3) {
                if (M = c[l], u += M, v = u, d) v %= y, 0 > v && (v += y), g = 0; else {
                    if (0 > v) {
                        this.addBeforePosition(v, _, 0, p, x);
                        continue;
                    }
                    if (v > y) {
                        this.addAfterPosition(v - y, _, o - 4, p, x);
                        continue;
                    }
                }
                for (;;g++) if (I = A[g], !(v > I)) {
                    0 == g ? v /= I : (D = A[g - 1], v = (v - D) / (I - D));
                    break;
                }
                if (g != m) {
                    m = g;
                    var G = 6 * g;
                    for (b = _[G], N = _[G + 1], T = _[G + 2], S = _[G + 3], C = _[G + 4], F = _[G + 5], 
                    w = _[G + 6], k = _[G + 7], P = .03 * (b - 2 * T + C), U = .03 * (N - 2 * S + F), 
                    B = .006 * (3 * (T - C) - b + w), L = .006 * (3 * (S - F) - N + k), R = 2 * P + B, 
                    V = 2 * U + L, E = .3 * (T - b) + P + .16666667 * B, O = .3 * (S - N) + U + .16666667 * L, 
                    X = Math.sqrt(E * E + O * O), K[0] = X, G = 1; 8 > G; G++) E += R, O += V, R += B, 
                    V += L, X += Math.sqrt(E * E + O * O), K[G] = X;
                    E += R, O += V, X += Math.sqrt(E * E + O * O), K[8] = X, E += R + B, O += V + L, 
                    X += Math.sqrt(E * E + O * O), K[9] = X, W = 0;
                }
                for (v *= X; ;W++) if (I = K[W], !(v > I)) {
                    0 == W ? v /= I : (D = K[W - 1], v = W + (v - D) / (I - D));
                    break;
                }
                this.addCurvePosition(.1 * v, b, N, T, S, C, F, w, k, p, x, r || l > 0 && 0 == M);
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
            o[u] = M, o[u + 1] = D, c ? o[u + 2] = Math.atan2(D - (i * f + r * y * 2 + n * _), M - (e * f + a * y * 2 + s * _)) : o[u + 2] = 0;
        }, t.NONE = -1, t.BEFORE = -2, t.AFTER = -3, a(t, [ "_tempMt", function() {
            return this._tempMt = new f();
        } ]), t;
    }(), K = function() {
        function t() {
            this.skX = 0, this.skY = 0, this.scX = 1, this.scY = 1, this.x = 0, this.y = 0, 
            this.skewX = 0, this.skewY = 0, this.mMatrix = null;
        }
        r(t, "laya.ani.bone.Transform");
        var e = t.prototype;
        return e.initData = function(t) {
            void 0 != t.x && (this.x = t.x), void 0 != t.y && (this.y = t.y), void 0 != t.skX && (this.skX = t.skX), 
            void 0 != t.skY && (this.skY = t.skY), void 0 != t.scX && (this.scX = t.scX), void 0 != t.scY && (this.scY = t.scY);
        }, e.getMatrix = function() {
            var t;
            return t = this.mMatrix ? this.mMatrix : this.mMatrix = new f(), t.identity(), t.scale(this.scX, this.scY), 
            (this.skewX || this.skewY) && this.skew(t, this.skewX * Math.PI / 180, this.skewY * Math.PI / 180), 
            t.rotate(this.skX * Math.PI / 180), t.translate(this.x, this.y), t;
        }, e.skew = function(t, e, i) {
            var a = Math.sin(i), r = Math.cos(i), s = Math.sin(e), n = Math.cos(e);
            return t.setTo(t.a * n - t.b * a, t.a * s + t.b * r, t.c * n - t.d * a, t.c * s + t.d * r, t.tx * n - t.ty * a, t.tx * s + t.ty * r), 
            t;
        }, t;
    }(), X = function() {
        function t() {
            this.time = NaN, this.drawOrder = [];
        }
        return r(t, "laya.ani.bone.DrawOrderData"), t;
    }(), W = function() {
        function t() {}
        return r(t, "laya.ani.math.BezierLerp"), t.getBezierRate = function(e, i, a, r, s) {
            var n = t._getBezierParamKey(i, a, r, s), h = 100 * n + e;
            if (t._bezierResultCache[h]) return t._bezierResultCache[h];
            var l = t._getBezierPoints(i, a, r, s, n), o = 0, u = 0;
            for (u = l.length, o = 0; u > o; o += 2) if (e <= l[o]) return t._bezierResultCache[h] = l[o + 1], 
            l[o + 1];
            return t._bezierResultCache[h] = 1, 1;
        }, t._getBezierParamKey = function(t, e, i, a) {
            return 100 * (100 * (100 * (100 * t + e) + i) + a);
        }, t._getBezierPoints = function(e, i, a, r, s) {
            if (t._bezierPointsCache[s]) return t._bezierPointsCache[s];
            var n;
            n = [ 0, 0, e, i, a, r, 1, 1 ];
            var l;
            l = new h();
            var o;
            return o = l.getBezierPoints(n, 100, 3), t._bezierPointsCache[s] = o, o;
        }, t._bezierResultCache = {}, t._bezierPointsCache = {}, t;
    }(), G = function() {
        function t() {
            this.name = null, this.root = null, this.parentBone = null, this.length = 10, this.transform = null, 
            this.inheritScale = !0, this.inheritRotation = !0, this.rotation = NaN, this.resultRotation = NaN, 
            this.d = -1, this._tempMatrix = null, this._sprite = null, this.resultTransform = new K(), 
            this.resultMatrix = new f(), this._children = [];
        }
        r(t, "laya.ani.bone.Bone");
        var e = t.prototype;
        return e.setTempMatrix = function(t) {
            this._tempMatrix = t;
            var e, i = 0, a = 0;
            for (i = 0, a = this._children.length; a > i; i++) e = this._children[i], e.setTempMatrix(this._tempMatrix);
        }, e.update = function(t) {
            this.rotation = this.transform.skX;
            var e;
            if (t) e = this.resultTransform.getMatrix(), f.mul(e, t, this.resultMatrix), this.resultRotation = this.rotation; else if (this.resultRotation = this.rotation + this.parentBone.resultRotation, 
            this.parentBone) if (this.inheritRotation && this.inheritScale) e = this.resultTransform.getMatrix(), 
            f.mul(e, this.parentBone.resultMatrix, this.resultMatrix); else {
                var i = this.parentBone, a = NaN, r = NaN, s = NaN, n = this.parentBone.resultMatrix;
                e = this.resultTransform.getMatrix();
                var h = n.a * e.tx + n.c * e.ty + n.tx, l = n.b * e.tx + n.d * e.ty + n.ty, o = new f();
                this.inheritRotation ? (a = Math.atan2(i.resultMatrix.b, i.resultMatrix.a), r = Math.cos(a), 
                s = Math.sin(a), o.setTo(r, s, -s, r, 0, 0), f.mul(this._tempMatrix, o, f.TEMP), 
                f.TEMP.copyTo(o), e = this.resultTransform.getMatrix(), f.mul(e, o, this.resultMatrix), 
                this.resultTransform.scX * this.resultTransform.scY < 0 && this.resultMatrix.rotate(.5 * Math.PI), 
                this.resultMatrix.tx = h, this.resultMatrix.ty = l) : this.inheritScale ? (e = this.resultTransform.getMatrix(), 
                f.TEMP.identity(), f.TEMP.d = this.d, f.mul(e, f.TEMP, this.resultMatrix), this.resultMatrix.tx = h, 
                this.resultMatrix.ty = l) : (e = this.resultTransform.getMatrix(), f.TEMP.identity(), 
                f.TEMP.d = this.d, f.mul(e, f.TEMP, this.resultMatrix), this.resultMatrix.tx = h, 
                this.resultMatrix.ty = l);
            } else e = this.resultTransform.getMatrix(), e.copyTo(this.resultMatrix);
            var u, c = 0, _ = 0;
            for (c = 0, _ = this._children.length; _ > c; c++) u = this._children[c], u.update();
        }, e.updateChild = function() {
            var t, e = 0, i = 0;
            for (e = 0, i = this._children.length; i > e; e++) t = this._children[e], t.update();
        }, e.setRotation = function(t) {
            this._sprite && (this._sprite.rotation = 180 * t / Math.PI);
        }, e.updateDraw = function(e, a) {
            (!t.ShowBones || t.ShowBones[this.name]) && (this._sprite ? (this._sprite.x = e + this.resultMatrix.tx, 
            this._sprite.y = a + this.resultMatrix.ty) : (this._sprite = new g(), this._sprite.graphics.drawCircle(0, 0, 5, "#ff0000"), 
            this._sprite.graphics.drawLine(0, 0, this.length, 0, "#00ff00"), this._sprite.graphics.fillText(this.name, 0, 0, "20px Arial", "#00ff00", "center"), 
            i.stage.addChild(this._sprite), this._sprite.x = e + this.resultMatrix.tx, this._sprite.y = a + this.resultMatrix.ty));
            var r, s = 0, n = 0;
            for (s = 0, n = this._children.length; n > s; s++) r = this._children[s], r.updateDraw(e, a);
        }, e.addChild = function(t) {
            this._children.push(t), t.parentBone = this;
        }, e.findBone = function(t) {
            if (this.name == t) return this;
            var e, i, a = 0, r = 0;
            for (a = 0, r = this._children.length; r > a; a++) if (e = this._children[a], i = e.findBone(t)) return i;
            return null;
        }, e.localToWorld = function(t) {
            var e = t[0], i = t[1];
            t[0] = e * this.resultMatrix.a + i * this.resultMatrix.c + this.resultMatrix.tx, 
            t[1] = e * this.resultMatrix.b + i * this.resultMatrix.d + this.resultMatrix.ty;
        }, t.ShowBones = {}, t;
    }(), z = function() {
        function t() {
            this.name = null, this.intValue = 0, this.floatValue = NaN, this.stringValue = null, 
            this.audioValue = null, this.time = NaN;
        }
        return r(t, "laya.ani.bone.EventData"), t;
    }(), q = function() {
        function t() {
            this.name = null, this.targetBoneName = null, this.bendDirection = 1, this.mix = 1, 
            this.isSpine = !0, this.targetBoneIndex = -1, this.boneNames = [], this.boneIndexs = [];
        }
        return r(t, "laya.ani.bone.IkConstraintData"), t;
    }(), H = function(t) {
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
        r(e, "laya.ani.AnimationPlayer", t);
        var a = e.prototype;
        return i.imps(a, {
            "laya.resource.IDestroy": !0
        }), a._onTempletLoadedComputeFullKeyframeIndices = function(t, e, i) {
            this._templet === i && this._cachePlayRate === t && this._cacheFrameRate === e && this._computeFullKeyframeIndices();
        }, a._computeFullKeyframeIndices = function() {
            return;
        }, a._onAnimationTempletLoaded = function() {
            this.destroyed || this._calculatePlayDuration();
        }, a._calculatePlayDuration = function() {
            if (0 !== this.state) {
                var t = this._templet.getAniDuration(this._currentAnimationClipIndex);
                0 === this._playEnd && (this._playEnd = t), this._playEnd > t && (this._playEnd = t), 
                this._playDuration = this._playEnd - this._playStart;
            }
        }, a._setPlayParams = function(t, e) {
            this._currentTime = t, this._currentKeyframeIndex = Math.floor(this.currentPlayTime / e + .01), 
            this._currentFrameTime = this._currentKeyframeIndex * e;
        }, a._setPlayParamsWhenStop = function(t, e) {
            this._currentTime = t, this._currentKeyframeIndex = Math.floor(t / e + .01), this._currentFrameTime = this._currentKeyframeIndex * e, 
            this._currentAnimationClipIndex = -1;
        }, a._update = function(t) {
            if (-1 !== this._currentAnimationClipIndex && !this._paused && this._templet) {
                var e = this._cacheFrameRateInterval * this._cachePlayRate, i = 0;
                this._startUpdateLoopCount !== v.loopCount && (i = t * this.playbackRate, this._elapsedPlaybackTime += i);
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
        }, a._destroy = function() {
            this.offAll(), this._templet = null, this._destroyed = !0;
        }, a.play = function(t, e, i, a, r) {
            if (void 0 === t && (t = 0), void 0 === e && (e = 1), void 0 === i && (i = 2147483647), 
            void 0 === a && (a = 0), void 0 === r && (r = 0), !this._templet) throw new Error("AnimationPlayer:templet must not be null,maybe you need to set url.");
            if (0 > i || 0 > a || 0 > r) throw new Error("AnimationPlayer:overallDuration,playStart and playEnd must large than zero.");
            if (0 !== r && a > r) throw new Error("AnimationPlayer:start must less than end.");
            this._currentTime = 0, this._currentFrameTime = 0, this._elapsedPlaybackTime = 0, 
            this.playbackRate = e, this._overallDuration = i, this._playStart = a, this._playEnd = r, 
            this._paused = !1, this._currentAnimationClipIndex = t, this._currentKeyframeIndex = 0, 
            this._startUpdateLoopCount = v.loopCount, this.event("played"), this._calculatePlayDuration(), 
            this._update(0);
        }, a.playByFrame = function(t, e, i, a, r, s) {
            void 0 === t && (t = 0), void 0 === e && (e = 1), void 0 === i && (i = 2147483647), 
            void 0 === a && (a = 0), void 0 === r && (r = 0), void 0 === s && (s = 30);
            var n = 1e3 / s;
            this.play(t, e, i, a * n, r * n);
        }, a.stop = function(t) {
            void 0 === t && (t = !0), t ? (this._currentTime = this._currentFrameTime = this._currentKeyframeIndex = 0, 
            this._currentAnimationClipIndex = -1, this.event("stopped")) : this._stopWhenCircleFinish = !0;
        }, a.destroy = function() {}, s(0, a, "playEnd", function() {
            return this._playEnd;
        }), s(0, a, "templet", function() {
            return this._templet;
        }, function(t) {
            0 !== this.state && this.stop(!0), this._templet !== t && (this._templet = t, this._computeFullKeyframeIndices());
        }), s(0, a, "playStart", function() {
            return this._playStart;
        }), s(0, a, "playDuration", function() {
            return this._playDuration;
        }), s(0, a, "state", function() {
            return -1 === this._currentAnimationClipIndex ? 0 : this._paused ? 1 : 2;
        }), s(0, a, "currentKeyframeIndex", function() {
            return this._currentKeyframeIndex;
        }), s(0, a, "overallDuration", function() {
            return this._overallDuration;
        }), s(0, a, "currentFrameTime", function() {
            return this._currentFrameTime;
        }), s(0, a, "currentAnimationClipIndex", function() {
            return this._currentAnimationClipIndex;
        }), s(0, a, "currentPlayTime", function() {
            return this._currentTime + this._playStart;
        }), s(0, a, "cachePlayRate", function() {
            return this._cachePlayRate;
        }, function(t) {
            this._cachePlayRate !== t && (this._cachePlayRate = t, this._templet && this._computeFullKeyframeIndices());
        }), s(0, a, "cacheFrameRate", function() {
            return this._cacheFrameRate;
        }, function(t) {
            this._cacheFrameRate !== t && (this._cacheFrameRate = t, this._cacheFrameRateInterval = 1e3 / this._cacheFrameRate, 
            this._templet && this._computeFullKeyframeIndices());
        }), s(0, a, "currentTime", null, function(t) {
            if (-1 !== this._currentAnimationClipIndex && this._templet) {
                if (t < this._playStart || t > this._playEnd) throw new Error("AnimationPlayer:value must large than playStartTime,small than playEndTime.");
                this._startUpdateLoopCount = v.loopCount;
                var e = this._cacheFrameRateInterval * this._cachePlayRate;
                this._currentTime = t, this._currentKeyframeIndex = Math.floor(this.currentPlayTime / e), 
                this._currentFrameTime = this._currentKeyframeIndex * e;
            }
        }), s(0, a, "paused", function() {
            return this._paused;
        }, function(t) {
            this._paused = t, t && this.event("paused");
        }), s(0, a, "cacheFrameRateInterval", function() {
            return this._cacheFrameRateInterval;
        }), s(0, a, "destroyed", function() {
            return this._destroyed;
        }), e;
    }(u), Q = function(t) {
        function e() {
            e.__super.call(this);
        }
        r(e, "laya.ani.GraphicsAni", t);
        var i = e.prototype;
        return i.drawSkin = function(t, e) {
            this.drawTriangles(t.texture, 0, 0, t.vertices, t.uvs, t.indexes, t.transform || f.EMPTY, e);
        }, e.create = function() {
            var t = e._caches.pop();
            return t || new e();
        }, e.recycle = function(t) {
            t.clear(), e._caches.push(t);
        }, e._caches = [], e;
    }(c), Z = function(t) {
        function e() {
            this.transform = null, e.__super.call(this);
        }
        r(e, "laya.ani.bone.canvasmesh.SkinMeshForGraphic", t);
        var i = e.prototype;
        return i.init2 = function(t, e, i, a) {
            this.transform && (this.transform = null);
            var r = e || [ 0, 1, 3, 3, 1, 2 ];
            this.texture = t, this.indexes = new Uint16Array(r), this.vertices = new Float32Array(i), 
            this.uvs = new Float32Array(a);
        }, e;
    }(A), $ = function(t) {
        function e() {
            this._aniMap = {}, this.unfixedLastAniIndex = -1, this._fullFrames = null, this._boneCurKeyFrm = [], 
            e.__super.call(this), this._anis = new Array();
        }
        r(e, "laya.ani.AnimationTemplet", t);
        var i = e.prototype;
        return i.parse = function(t) {
            var e = new o(t);
            this._aniVersion = e.readUTFString(), k.parse(this, e);
        }, i._calculateKeyFrame = function(t, e, i) {
            var a = t.keyFrame;
            a[e] = a[0];
            for (var r = 0; e > r; r++) for (var s = a[r], n = 0; i > n; n++) s.dData[n] = 0 === s.duration ? 0 : (a[r + 1].data[n] - s.data[n]) / s.duration, 
            s.nextData[n] = a[r + 1].data[n];
            a.length--;
        }, i._onAsynLoaded = function(t, e) {
            var i = new o(t);
            switch (this._aniVersion = i.readUTFString(), this._aniVersion) {
              case "LAYAANIMATION:02":
                w.parse(this, i);
                break;

              default:
                k.parse(this, i);
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
            var s = e[i] || (e[i] = {}), n = s[t] || (s[t] = []);
            n[a] = r;
        }, i.getNodeKeyFrame = function(t, e, i) {
            var a = this._boneCurKeyFrm[e], r = t.length;
            (void 0 == a || a >= r) && (a = this._boneCurKeyFrm[e] = 0);
            var s = t[a], n = s.startTime, h = i - n;
            if (0 == h || h > 0 && s.duration > h) return a;
            var l = 0;
            if (h > 0) {
                for (i += .01, l = a + 1; r > l; l++) if (s = t[l], s.startTime <= i && s.startTime + s.duration > i) return this._boneCurKeyFrm[e] = l, 
                l;
                return r - 1;
            }
            for (l = 0; a > l; l++) if (s = t[l], s.startTime <= i && s.startTime + s.duration > i) return this._boneCurKeyFrm[e] = l, 
            l;
            return a;
        }, i.getOriginalData = function(t, i, a, r, s) {
            var n = this._anis[t], h = n.nodes, l = this._boneCurKeyFrm;
            l.length < h.length && (l.length = h.length);
            for (var o = 0, u = 0, c = h.length, _ = 0; c > u; u++) {
                var p, d = h[u], f = d.keyFrame;
                p = f[this.getNodeKeyFrame(f, u, s)], d.dataOffset = _;
                var m = s - p.startTime, y = d.lerpType;
                if (y) switch (y) {
                  case 0:
                  case 1:
                    for (o = 0; o < d.keyframeWidth; ) o += d.interpolationMethod[o](d, o, i, _ + o, p.data, m, p.dData, p.duration, p.nextData);
                    break;

                  case 2:
                    var x = p.interpolationData, g = x.length, v = 0;
                    for (o = 0; g > o; ) {
                        var M = x[o];
                        switch (M) {
                          case 6:
                            o += e.interpolation[M](d, v, i, _ + v, p.data, m, p.dData, p.duration, p.nextData, x, o + 1);
                            break;

                          case 7:
                            o += e.interpolation[M](d, v, i, _ + v, p.data, m, p.dData, p.duration, p.nextData, x, o + 1);
                            break;

                          default:
                            o += e.interpolation[M](d, v, i, _ + v, p.data, m, p.dData, p.duration, p.nextData);
                        }
                        v++;
                    }
                } else for (o = 0; o < d.keyframeWidth; ) o += d.interpolationMethod[o](d, o, i, _ + o, p.data, m, p.dData, p.duration, p.nextData);
                _ += d.keyframeWidth;
            }
        }, i.getNodesCurrentFrameIndex = function(t, e) {
            var i = this._anis[t], a = i.nodes;
            t !== this.unfixedLastAniIndex && (this.unfixedCurrentFrameIndexes = new Uint32Array(a.length), 
            this.unfixedCurrentTimes = new Float32Array(a.length), this.unfixedLastAniIndex = t);
            for (var r = 0, s = a.length; s > r; r++) {
                var n = a[r];
                for (e < this.unfixedCurrentTimes[r] && (this.unfixedCurrentFrameIndexes[r] = 0), 
                this.unfixedCurrentTimes[r] = e; this.unfixedCurrentFrameIndexes[r] < n.keyFrame.length && !(n.keyFrame[this.unfixedCurrentFrameIndexes[r]].startTime > this.unfixedCurrentTimes[r]); ) this.unfixedCurrentFrameIndexes[r]++;
                this.unfixedCurrentFrameIndexes[r]--;
            }
            return this.unfixedCurrentFrameIndexes;
        }, i.getOriginalDataUnfixedRate = function(t, i, a) {
            var r = this._anis[t], s = r.nodes;
            t !== this.unfixedLastAniIndex && (this.unfixedCurrentFrameIndexes = new Uint32Array(s.length), 
            this.unfixedCurrentTimes = new Float32Array(s.length), this.unfixedKeyframes = n(s.length), 
            this.unfixedLastAniIndex = t);
            for (var h = 0, l = 0, o = s.length, u = 0; o > l; l++) {
                var c = s[l];
                for (a < this.unfixedCurrentTimes[l] && (this.unfixedCurrentFrameIndexes[l] = 0), 
                this.unfixedCurrentTimes[l] = a; this.unfixedCurrentFrameIndexes[l] < c.keyFrame.length && !(c.keyFrame[this.unfixedCurrentFrameIndexes[l]].startTime > this.unfixedCurrentTimes[l]); ) this.unfixedKeyframes[l] = c.keyFrame[this.unfixedCurrentFrameIndexes[l]], 
                this.unfixedCurrentFrameIndexes[l]++;
                var _ = this.unfixedKeyframes[l];
                c.dataOffset = u;
                var p = a - _.startTime, d = c.lerpType;
                if (d) switch (c.lerpType) {
                  case 0:
                  case 1:
                    for (h = 0; h < c.keyframeWidth; ) h += c.interpolationMethod[h](c, h, i, u + h, _.data, p, _.dData, _.duration, _.nextData);
                    break;

                  case 2:
                    var f = _.interpolationData, m = f.length, y = 0;
                    for (h = 0; m > h; ) {
                        var x = f[h];
                        switch (x) {
                          case 6:
                            h += e.interpolation[x](c, y, i, u + y, _.data, p, _.dData, _.duration, _.nextData, f, h + 1);
                            break;

                          case 7:
                            h += e.interpolation[x](c, y, i, u + y, _.data, p, _.dData, _.duration, _.nextData, f, h + 1);
                            break;

                          default:
                            h += e.interpolation[x](c, y, i, u + y, _.data, p, _.dData, _.duration, _.nextData);
                        }
                        y++;
                    }
                } else for (h = 0; h < c.keyframeWidth; ) h += c.interpolationMethod[h](c, h, i, u + h, _.data, p, _.dData, _.duration, _.nextData);
                u += c.keyframeWidth;
            }
        }, e._LinearInterpolation_0 = function(t, e, i, a, r, s, n, h, l, o) {
            return i[a] = r[e] + s * n[e], 1;
        }, e._QuaternionInterpolation_1 = function(t, e, i, a, r, s, n, h, l, o) {
            var u = 0 === h ? 0 : s / h;
            return d.slerpQuaternionArray(r, e, l, e, u, i, a), 4;
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
            return void 0 === u && (u = 0), i[a] = r[e] + (l[e] - r[e]) * W.getBezierRate(s / h, o[u], o[u + 1], o[u + 2], o[u + 3]), 
            5;
        }, e._BezierInterpolation_7 = function(t, e, i, a, r, s, n, h, l, o, u) {
            return void 0 === u && (u = 0), i[a] = o[u + 4] + o[u + 5] * W.getBezierRate((.001 * s + o[u + 6]) / o[u + 7], o[u], o[u + 1], o[u + 2], o[u + 3]), 
            9;
        }, e.interpolation = [ e._LinearInterpolation_0, e._QuaternionInterpolation_1, e._AngleInterpolation_2, e._RadiansInterpolation_3, e._Matrix4x4Interpolation_4, e._NoInterpolation_5, e._BezierInterpolation_6, e._BezierInterpolation_7 ], 
        e;
    }(y), j = (function(t) {
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
        r(e, "laya.ani.swf.MovieClip", t);
        var a = e.prototype;
        return a.destroy = function(e) {
            void 0 === e && (e = !0), this._clear(), t.prototype.destroy.call(this, e);
        }, a._setDisplay = function(e) {
            t.prototype._setDisplay.call(this, e), this._isRoot && this._$3__onDisplay(e);
        }, a._$3__onDisplay = function(t) {
            t ? this.timer.loop(this.interval, this, this.updates, null, !0) : this.timer.clear(this, this.updates);
        }, a.updates = function() {
            if (!this._parentMovieClip) {
                var t = 0, e = 0;
                for (e = this._movieClipList.length, t = 0; e > t; t++) this._movieClipList[t] && this._movieClipList[t]._update();
            }
        }, a.addLabel = function(t, e) {
            this._labels || (this._labels = {}), this._labels[e] = t;
        }, a.removeLabel = function(t) {
            if (t) {
                if (!this._labels) for (var e in this._labels) if (this._labels[e] === t) {
                    delete this._labels[e];
                    break;
                }
            } else this._labels = null;
        }, a._update = function() {
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
        }, a.stop = function() {
            this._playing = !1;
        }, a.gotoAndStop = function(t) {
            this.index = t, this.stop();
        }, a._clear = function() {
            if (this.stop(), this._idOfSprite.length = 0, !this._parentMovieClip) {
                this.timer.clear(this, this.updates);
                var t = 0, e = 0;
                for (e = this._movieClipList.length, t = 0; e > t; t++) this._movieClipList[t] != this && this._movieClipList[t]._clear();
                this._movieClipList.length = 0;
            }
            this._atlasPath && p.clearRes(this._atlasPath);
            var i;
            for (i in this._loadedImage) this._loadedImage[i] && (p.clearRes(i), this._loadedImage[i] = !1);
            this.removeChildren(), this.graphics = null, this._parentMovieClip = null;
        }, a.play = function(t, e) {
            void 0 === t && (t = 0), void 0 === e && (e = !0), this.loop = e, this._playing = !0, 
            this._data && this._displayFrame(t);
        }, a._displayFrame = function(t) {
            void 0 === t && (t = -1), -1 != t && (this._curIndex > t && this._reset(), this._parseFrame(t));
        }, a._reset = function(t) {
            void 0 === t && (t = !0), t && 1 != this._curIndex && this.removeChildren(), this._preIndex = this._curIndex = -1, 
            this._Pos = this._start;
        }, a._parseFrame = function(t) {
            var i, a, r, s = 0, n = 0, h = 0, l = 0, o = !1, u = this._idOfSprite, c = this._data;
            for (this._ended && this._reset(), c.pos = this._Pos, this._ended = !1, this._playIndex = t, 
            this._curIndex > t && t < this._preIndex && (this._reset(!0), c.pos = this._Pos); this._curIndex <= t && !this._ended; ) switch (n = c.getUint16()) {
              case 12:
                if (s = c.getUint16(), h = this._ids[c.getUint16()], this._Pos = c.pos, c.pos = h, 
                0 == (l = c.getUint8())) {
                    var _ = c.getUint16();
                    if (a = u[s], !a) {
                        a = u[s] = new g();
                        var p = new g();
                        p.loadImage(this.basePath + _ + ".png"), this._loadedImage[this.basePath + _ + ".png"] = !0, 
                        a.addChild(p), p.size(c.getFloat32(), c.getFloat32());
                        var d = c._getMatrix();
                        p.transform = d;
                    }
                    a.alpha = 1;
                } else 1 == l && (i = u[s], i || (u[s] = i = new e(this), i.interval = this.interval, 
                i._ids = this._ids, i.basePath = this.basePath, i._setData(c, h), i._initState(), 
                i.play(0)), i.alpha = 1);
                c.pos = this._Pos;
                break;

              case 3:
                var m = u[c.getUint16()];
                m && (this.addChild(m), m.zOrder = c.getUint16(), o = !0);
                break;

              case 4:
                m = u[c.getUint16()], m && m.removeSelf();
                break;

              case 5:
                u[c.getUint16()][e._ValueList[c.getUint16()]] = c.getFloat32();
                break;

              case 6:
                u[c.getUint16()].visible = c.getUint8() > 0;
                break;

              case 7:
                a = u[c.getUint16()];
                var y = a.transform || f.create();
                y.setTo(c.getFloat32(), c.getFloat32(), c.getFloat32(), c.getFloat32(), c.getFloat32(), c.getFloat32()), 
                a.transform = y;
                break;

              case 8:
                u[c.getUint16()].setPos(c.getFloat32(), c.getFloat32());
                break;

              case 9:
                u[c.getUint16()].setSize(c.getFloat32(), c.getFloat32());
                break;

              case 10:
                u[c.getUint16()].alpha = c.getFloat32();
                break;

              case 11:
                u[c.getUint16()].setScale(c.getFloat32(), c.getFloat32());
                break;

              case 98:
                r = c.getString(), this.event(r), "stop" == r && this.stop();
                break;

              case 99:
                this._curIndex = c.getUint16(), o && this.updateZOrder();
                break;

              case 100:
                this._count = this._curIndex + 1, this._ended = !0, this._playing && (this.event("enterframe"), 
                this.event("end"), this.event("complete")), this._reset(!1);
            }
            this._playing && !this._ended && this.event("enterframe"), this._Pos = c.pos;
        }, a._setData = function(t, e) {
            this._data = t, this._start = e + 3;
        }, a.load = function(t, e, a) {
            void 0 === e && (e = !1), this._url = t, e && (this._atlasPath = a ? a : t.split(".swf")[0] + ".json"), 
            this.stop(), this._clear(), this._movieClipList = [ this ];
            var r;
            r = [ {
                url: t,
                type: "arraybuffer"
            } ], this._atlasPath && r.push({
                url: this._atlasPath,
                type: "atlas"
            }), i.loader.load(r, _.create(this, this._onLoaded));
        }, a._onLoaded = function() {
            var t;
            return (t = p.getRes(this._url)) ? this._atlasPath && !p.getAtlas(this._atlasPath) ? void this.event("error", "Atlas not find") : (this.basePath = this._atlasPath ? p.getAtlas(this._atlasPath).dir : this._url.split(".swf")[0] + "/image/", 
            void this._initData(t)) : void this.event("error", "file not find");
        }, a._initState = function() {
            this._reset(), this._ended = !1;
            var t = this._playing;
            for (this._playing = !1, this._curIndex = 0; !this._ended; ) this._parseFrame(++this._curIndex);
            this._playing = t;
        }, a._initData = function(t) {
            this._data = new o(t);
            var e = 0, i = this._data.getUint16();
            for (e = 0; i > e; e++) this._ids[this._data.getInt16()] = this._data.getInt32();
            this.interval = 1e3 / this._data.getUint16(), this._setData(this._data, this._ids[32767]), 
            this._initState(), this.play(0), this.event("loaded"), this._parentMovieClip || this.timer.loop(this.interval, this, this.updates, null, !0);
        }, a.playTo = function(t, e, i) {
            this._completeHandler = i, this._endFrame = e, this.play(t, !1);
        }, s(0, a, "index", function() {
            return this._playIndex;
        }, function(t) {
            this._playIndex = t, this._data && this._displayFrame(this._playIndex), this._labels && this._labels[t] && this.event("label", this._labels[t]);
        }), s(0, a, "count", function() {
            return this._count;
        }), s(0, a, "playing", function() {
            return this._playing;
        }), s(0, a, "url", null, function(t) {
            this.load(t);
        }), e._ValueList = [ "x", "y", "width", "height", "scaleX", "scaleY", "rotation", "alpha" ], 
        e;
    }(g), function(t) {
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
        r(e, "laya.ani.bone.Skeleton", t);
        var a = e.prototype;
        return a.init = function(t, e) {
            void 0 === e && (e = 0);
            var i = 0, a = 0;
            if (1 == e) for (this._graphicsCache = [], i = 0, a = t.getAnimationCount(); a > i; i++) this._graphicsCache.push([]);
            if (this._yReverseMatrix = t.yReverseMatrix, this._aniMode = e, this._templet = t, 
            this._templet._addReference(1), this._player = new H(), this._player.cacheFrameRate = t.rate, 
            this._player.templet = t, this._player.play(), this._parseSrcBoneMatrix(), this._boneList = t.mBoneArr, 
            this._rootBone = t.mRootBone, this._aniSectionDic = t.aniSectionDic, t.ikArr.length > 0) for (this._ikArr = [], 
            i = 0, a = t.ikArr.length; a > i; i++) this._ikArr.push(new U(t.ikArr[i], this._boneList));
            if (t.pathArr.length > 0) {
                var r, s;
                null == this._pathDic && (this._pathDic = {});
                var n;
                for (i = 0, a = t.pathArr.length; a > i; i++) r = t.pathArr[i], s = new Y(r, this._boneList), 
                n = this._boneSlotDic[r.name], n && (s = new Y(r, this._boneList), s.target = n), 
                this._pathDic[r.name] = s;
            }
            if (t.tfArr.length > 0) for (this._tfArr = [], i = 0, a = t.tfArr.length; a > i; i++) this._tfArr.push(new T(t.tfArr[i], this._boneList));
            if (t.skinDataArray.length > 0) {
                var h = this._templet.skinDataArray[this._skinIndex];
                this._skinName = h.name;
            }
            this._player.on("played", this, this._onPlay), this._player.on("stopped", this, this._onStop), 
            this._player.on("paused", this, this._onPause);
        }, a.load = function(t, e, a) {
            void 0 === a && (a = 0), this._aniPath = t, this._complete = e, this._loadAniMode = a, 
            i.loader.load([ {
                url: t,
                type: "arraybuffer"
            } ], _.create(this, this._onLoaded));
        }, a._onLoaded = function() {
            var t = p.getRes(this._aniPath);
            if (null != t) {
                null == J.TEMPLET_DICTIONARY && (J.TEMPLET_DICTIONARY = {});
                var e;
                e = J.TEMPLET_DICTIONARY[this._aniPath], e ? e.isParseFail ? this._parseFail() : e.isParserComplete ? this._parseComplete() : (e.on("complete", this, this._parseComplete), 
                e.on("error", this, this._parseFail)) : (e = new J(), e._setCreateURL(this._aniPath), 
                J.TEMPLET_DICTIONARY[this._aniPath] = e, e.on("complete", this, this._parseComplete), 
                e.on("error", this, this._parseFail), e.isParserComplete = !1, e.parseData(null, t));
            }
        }, a._parseComplete = function() {
            var t = J.TEMPLET_DICTIONARY[this._aniPath];
            t && (this.init(t, this._loadAniMode), this.play(0, !0)), this._complete && this._complete.runWith(this);
        }, a._parseFail = function() {
            console.log("[Error]:" + this._aniPath + "解析失败");
        }, a._onPlay = function() {
            this.event("played");
        }, a._onStop = function() {
            var t, e = this._templet.eventAniArr, i = e[this._aniClipIndex];
            if (i && this._eventIndex < i.length) for (;this._eventIndex < i.length; this._eventIndex++) t = i[this._eventIndex], 
            t.time >= this._player.playStart && t.time <= this._player.playEnd && this.event("label", t);
            this._drawOrder = null, this.event("stopped");
        }, a._onPause = function() {
            this.event("paused");
        }, a._parseSrcBoneMatrix = function() {
            var t = 0, e = 0;
            for (e = this._templet.srcBoneMatrixArr.length, t = 0; e > t; t++) this._boneMatrixArray.push(new f());
            if (0 == this._aniMode) this._boneSlotDic = this._templet.boneSlotDic, this._bindBoneBoneSlotDic = this._templet.bindBoneBoneSlotDic, 
            this._boneSlotArray = this._templet.boneSlotArray; else {
                null == this._boneSlotDic && (this._boneSlotDic = {}), null == this._bindBoneBoneSlotDic && (this._bindBoneBoneSlotDic = {}), 
                null == this._boneSlotArray && (this._boneSlotArray = []);
                var i, a, r = this._templet.boneSlotArray;
                for (t = 0, e = r.length; e > t; t++) i = r[t], a = this._bindBoneBoneSlotDic[i.parent], 
                null == a && (this._bindBoneBoneSlotDic[i.parent] = a = []), this._boneSlotDic[i.name] = i = i.copy(), 
                a.push(i), this._boneSlotArray.push(i);
            }
        }, a._emitMissedEvents = function(t, e, i) {
            void 0 === i && (i = 0);
            var a = this._templet.eventAniArr, r = a[this._player.currentAnimationClipIndex];
            if (r) {
                var s, n = 0, h = 0;
                for (h = r.length, n = i; h > n; n++) s = r[n], s.time >= this._player.playStart && s.time <= this._player.playEnd && this.event("label", s);
            }
        }, a._update = function(t) {
            if (void 0 === t && (t = !0), !(this._pause || t && this._indexControl)) {
                var e = this.timer.currTimer, i = this._player.currentKeyframeIndex, a = e - this._lastTime;
                if (t ? this._player._update(a) : i = -1, this._lastTime = e, this._player && (this._index = this._clipIndex = this._player.currentKeyframeIndex, 
                !(this._index < 0 || a > 0 && this._clipIndex == i && this._lastUpdateAniClipIndex == this._aniClipIndex))) {
                    this._lastUpdateAniClipIndex = this._aniClipIndex, i > this._clipIndex && 0 != this._eventIndex && (this._emitMissedEvents(this._player.playStart, this._player.playEnd, this._eventIndex), 
                    this._eventIndex = 0);
                    var r, s = this._templet.eventAniArr[this._aniClipIndex];
                    if (s && this._eventIndex < s.length) {
                        var n = s[this._eventIndex];
                        n.time >= this._player.playStart && n.time <= this._player.playEnd ? this._player.currentPlayTime >= n.time && (this.event("label", n), 
                        this._eventIndex++, this._playAudio && n.audioValue && "null" !== n.audioValue && (r = x.playSound(this._player.templet._path + n.audioValue, 1, _.create(this, this._onAniSoundStoped)), 
                        x.playbackRate = this._player.playbackRate, r && this._soundChannelArr.push(r))) : n.time < this._player.playStart && this._playAudio && n.audioValue && "null" !== n.audioValue && this._player.playEnd - this._player.currentPlayTime > .1 ? (this._eventIndex++, 
                        r = x.playSound(this._player.templet._path + n.audioValue, 1, _.create(this, this._onAniSoundStoped), null, (this._player.currentPlayTime - n.time) / 1e3), 
                        x.playbackRate = this._player.playbackRate, r && this._soundChannelArr.push(r)) : this._eventIndex++;
                    }
                    var h;
                    0 == this._aniMode ? (h = this._templet.getGrahicsDataWithCache(this._aniClipIndex, this._clipIndex) || this._createGraphics(), 
                    h && this.graphics != h && (this.graphics = h)) : 1 == this._aniMode ? (h = this._getGrahicsDataWithCache(this._aniClipIndex, this._clipIndex) || this._createGraphics(), 
                    h && this.graphics != h && (this.graphics = h)) : this._createGraphics();
                }
            }
        }, a._onAniSoundStoped = function(t) {
            for (var e, i = this._soundChannelArr.length, a = 0; i > a; a++) e = this._soundChannelArr[a], 
            (e.isStopped || t) && (!e.isStopped && e.stop(), this._soundChannelArr.splice(a, 1), 
            i--, a--);
        }, a._createGraphics = function(t) {
            void 0 === t && (t = -1), -1 == t && (t = this._clipIndex);
            var e, i = t * this._player.cacheFrameRateInterval, a = this._templet.drawOrderAniArr, r = a[this._aniClipIndex];
            if (r && r.length > 0) for (this._drawOrderIndex = 0, e = r[this._drawOrderIndex]; i >= e.time && (this._drawOrder = e.drawOrder, 
            this._drawOrderIndex++, !(this._drawOrderIndex >= r.length)); ) e = r[this._drawOrderIndex];
            0 == this._aniMode || 1 == this._aniMode ? this.graphics = Q.create() : this.graphics instanceof laya.ani.GraphicsAni ? this.graphics.clear() : this.graphics = Q.create();
            var s = this.graphics, n = this._templet.getNodes(this._aniClipIndex), h = 0 == this._player.state;
            this._templet.getOriginalData(this._aniClipIndex, this._curOriginalData, null, t, h ? i + this._player.cacheFrameRateInterval : i);
            var l, u, c, _, p = this._aniSectionDic[this._aniClipIndex], d = 0, m = 0, y = 0, x = 0, g = 0, v = this._templet.srcBoneMatrixArr.length, M = this._curOriginalData;
            for (m = 0, g = p[0]; v > m; m++) {
                _ = this._boneList[m];
                var D = _.resultTransform;
                c = this._templet.srcBoneMatrixArr[m], D.scX = c.scX * M[d++], D.skX = c.skX + M[d++], 
                D.skY = c.skY + M[d++], D.scY = c.scY * M[d++], D.x = c.x + M[d++], D.y = c.y + M[d++], 
                8 === this._templet.tMatrixDataLen && (D.skewX = c.skewX + M[d++], D.skewY = c.skewY + M[d++]);
            }
            var I, A = {}, b = {};
            for (g += p[1]; g > m; m++) I = n[m], A[I.name] = M[d++], b[I.name] = M[d++], d += 4;
            var N = {}, T = {};
            for (g += p[2]; g > m; m++) I = n[m], N[I.name] = M[d++], T[I.name] = M[d++], d += 4;
            if (this._pathDic) {
                var S;
                for (g += p[3]; g > m; m++) if (I = n[m], S = this._pathDic[I.name]) {
                    var C = new o(I.extenData);
                    switch (C.getByte()) {
                      case 1:
                        S.position = M[d++];
                        break;

                      case 2:
                        S.spacing = M[d++];
                        break;

                      case 3:
                        S.rotateMix = M[d++], S.translateMix = M[d++];
                    }
                }
            }
            if (this._rootBone.update(this._yReverseMatrix || f.TEMP.identity()), this._ikArr) {
                var F;
                for (m = 0, g = this._ikArr.length; g > m; m++) F = this._ikArr[m], N.hasOwnProperty(F.name) && (F.bendDirection = N[F.name]), 
                T.hasOwnProperty(F.name) && (F.mix = T[F.name]), F.apply();
            }
            if (this._pathDic) for (var w in this._pathDic) S = this._pathDic[w], S.apply(this._boneList, s);
            if (this._tfArr) {
                var k;
                for (m = 0, x = this._tfArr.length; x > m; m++) k = this._tfArr[m], k.apply();
            }
            for (m = 0, x = this._boneList.length; x > m; m++) if (_ = this._boneList[m], u = this._bindBoneBoneSlotDic[_.name], 
            _.resultMatrix.copyTo(this._boneMatrixArray[m]), u) for (y = 0, g = u.length; g > y; y++) l = u[y], 
            l && l.setParentMatrix(_.resultMatrix);
            var P, U = {}, B = this._templet.deformAniArr;
            if (B && B.length > 0) {
                if (this._lastAniClipIndex != this._aniClipIndex) for (this._lastAniClipIndex = this._aniClipIndex, 
                m = 0, g = this._boneSlotArray.length; g > m; m++) l = this._boneSlotArray[m], l.deformData = null;
                var L = B[this._aniClipIndex];
                P = L["default"], this._setDeform(P, U, this._boneSlotArray, i);
                var R;
                for (R in L) "default" != R && R != this._skinName && (P = L[R], this._setDeform(P, U, this._boneSlotArray, i));
                P = L[this._skinName], this._setDeform(P, U, this._boneSlotArray, i);
            }
            var V, E, O;
            if (this._drawOrder) for (m = 0, g = this._drawOrder.length; g > m; m++) l = this._boneSlotArray[this._drawOrder[m]], 
            V = A[l.name], E = b[l.name], !isNaN(E), isNaN(V) || -2 == V || (this._templet.attachmentNames ? l.showDisplayByName(this._templet.attachmentNames[V]) : l.showDisplayByIndex(V)), 
            U[this._drawOrder[m]] ? (O = U[this._drawOrder[m]], l.currDisplayData && O[l.currDisplayData.attachmentName] ? l.deformData = O[l.currDisplayData.attachmentName] : l.deformData = null) : l.deformData = null, 
            isNaN(E) ? l.draw(s, this._boneMatrixArray, 2 == this._aniMode) : l.draw(s, this._boneMatrixArray, 2 == this._aniMode, E), 
            !isNaN(E); else for (m = 0, g = this._boneSlotArray.length; g > m; m++) l = this._boneSlotArray[m], 
            V = A[l.name], E = b[l.name], !isNaN(E), isNaN(V) || -2 == V || (this._templet.attachmentNames ? l.showDisplayByName(this._templet.attachmentNames[V]) : l.showDisplayByIndex(V)), 
            U[m] ? (O = U[m], l.currDisplayData && O[l.currDisplayData.attachmentName] ? l.deformData = O[l.currDisplayData.attachmentName] : l.deformData = null) : l.deformData = null, 
            isNaN(E) ? l.draw(s, this._boneMatrixArray, 2 == this._aniMode) : l.draw(s, this._boneMatrixArray, 2 == this._aniMode, E), 
            !isNaN(E);
            return 0 == this._aniMode ? (this._templet.setGrahicsDataWithCache(this._aniClipIndex, t, s), 
            this._checkIsAllParsed(this._aniClipIndex)) : 1 == this._aniMode && this._setGrahicsDataWithCache(this._aniClipIndex, t, s), 
            s;
        }, a._checkIsAllParsed = function(t) {
            var e = 0, i = 0;
            for (i = Math.floor(.01 + this._templet.getAniDuration(t) / 1e3 * this._player.cacheFrameRate), 
            e = 0; i > e; e++) if (!this._templet.getGrahicsDataWithCache(t, e)) return;
            return this._templet.getGrahicsDataWithCache(t, i) ? void this._templet.deleteAniData(t) : void this._createGraphics(i);
        }, a._setDeform = function(t, e, i, a) {
            if (t) {
                var r, s, n, h = 0, l = 0, o = 0;
                if (t) for (h = 0, l = t.deformSlotDataList.length; l > h; h++) for (r = t.deformSlotDataList[h], 
                o = 0; o < r.deformSlotDisplayList.length; o++) s = r.deformSlotDisplayList[o], 
                n = i[s.slotIndex], s.apply(a, n), e[s.slotIndex] || (e[s.slotIndex] = {}), e[s.slotIndex][s.attachment] = s.deformData;
            }
        }, a.getAnimNum = function() {
            return this._templet.getAnimationCount();
        }, a.getAniNameByIndex = function(t) {
            return this._templet.getAniNameByIndex(t);
        }, a.getSlotByName = function(t) {
            return this._boneSlotDic[t];
        }, a.showSkinByName = function(t, e) {
            void 0 === e && (e = !0), this.showSkinByIndex(this._templet.getSkinIndexByName(t), e);
        }, a.showSkinByIndex = function(t, e) {
            void 0 === e && (e = !0);
            for (var i = 0; i < this._boneSlotArray.length; i++) this._boneSlotArray[i].showSlotData(null, e);
            if (this._templet.showSkinByIndex(this._boneSlotDic, t, e)) {
                var a = this._templet.skinDataArray[t];
                this._skinIndex = t, this._skinName = a.name;
            }
            this._clearCache();
        }, a.showSlotSkinByIndex = function(t, e) {
            if (0 != this._aniMode) {
                var i = this.getSlotByName(t);
                i && i.showDisplayByIndex(e), this._clearCache();
            }
        }, a.showSlotSkinByName = function(t, e) {
            if (0 != this._aniMode) {
                var i = this.getSlotByName(t);
                i && i.showDisplayByName(e), this._clearCache();
            }
        }, a.replaceSlotSkinName = function(t, e, i) {
            if (0 != this._aniMode) {
                var a = this.getSlotByName(t);
                a && a.replaceDisplayByName(e, i), this._clearCache();
            }
        }, a.replaceSlotSkinByIndex = function(t, e, i) {
            if (0 != this._aniMode) {
                var a = this.getSlotByName(t);
                a && a.replaceDisplayByIndex(e, i), this._clearCache();
            }
        }, a.setSlotSkin = function(t, e) {
            if (0 != this._aniMode) {
                var i = this.getSlotByName(t);
                i && i.replaceSkin(e), this._clearCache();
            }
        }, a._clearCache = function() {
            if (1 == this._aniMode) for (var t = 0, e = this._graphicsCache.length; e > t; t++) {
                for (var i = 0, a = this._graphicsCache[t].length; a > i; i++) {
                    var r = this._graphicsCache[t][i];
                    r && r != this.graphics && Q.recycle(r);
                }
                this._graphicsCache[t].length = 0;
            }
        }, a.play = function(t, e, i, a, r, s, n) {
            void 0 === i && (i = !0), void 0 === a && (a = 0), void 0 === r && (r = 0), void 0 === s && (s = !0), 
            void 0 === n && (n = !0), this._playAudio = n, this._indexControl = !1;
            var h = -1, o = NaN;
            if (o = e ? 2147483647 : 0, "string" == typeof t) for (var u = 0, c = this._templet.getAnimationCount(); c > u; u++) {
                var _ = this._templet.getAnimation(u);
                if (_ && t == _.name) {
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
        }, a.stop = function() {
            this._pause || (this._pause = !0, this._player && this._player.stop(!0), this._soundChannelArr.length > 0 && this._onAniSoundStoped(!0), 
            this.timer.clear(this, this._update));
        }, a.playbackRate = function(t) {
            this._player && (this._player.playbackRate = t);
        }, a.paused = function() {
            if (!this._pause) {
                if (this._pause = !0, this._player && (this._player.paused = !0), this._soundChannelArr.length > 0) for (var t, e = this._soundChannelArr.length, i = 0; e > i; i++) t = this._soundChannelArr[i], 
                t.isStopped || t.pause();
                this.timer.clear(this, this._update);
            }
        }, a.resume = function() {
            if (this._indexControl = !1, this._pause) {
                if (this._pause = !1, this._player && (this._player.paused = !1), this._soundChannelArr.length > 0) for (var t, e = this._soundChannelArr.length, i = 0; e > i; i++) t = this._soundChannelArr[i], 
                t.audioBuffer && t.resume();
                this._lastTime = l.now(), this.timer.frameLoop(1, this, this._update, null, !0);
            }
        }, a._getGrahicsDataWithCache = function(t, e) {
            return this._graphicsCache[t][e];
        }, a._setGrahicsDataWithCache = function(t, e, i) {
            this._graphicsCache[t][e] = i;
        }, a.destroy = function(e) {
            void 0 === e && (e = !0), t.prototype.destroy.call(this, e), this._templet._removeReference(1), 
            this._templet = null, this._player && this._player.offAll(), this._player = null, 
            this._curOriginalData = null, this._boneMatrixArray.length = 0, this._lastTime = 0, 
            this.timer.clear(this, this._update), this._soundChannelArr.length > 0 && this._onAniSoundStoped(!0);
        }, s(0, a, "url", function() {
            return this._aniPath;
        }, function(t) {
            this.load(t);
        }), s(0, a, "index", function() {
            return this._index;
        }, function(t) {
            this.player && (this._index = t, this._player.currentTime = 1e3 * this._index / this._player.cacheFrameRate, 
            this._indexControl = !0, this._update(!1));
        }), s(0, a, "total", function() {
            return this._templet && this._player ? this._total = Math.floor(this._templet.getAniDuration(this._player.currentAnimationClipIndex) / 1e3 * this._player.cacheFrameRate) : this._total = -1, 
            this._total;
        }), s(0, a, "templet", function() {
            return this._templet;
        }), s(0, a, "player", function() {
            return this._player;
        }), e.useSimpleMeshInCanvas = !1, e;
    }(g)), J = function(t) {
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
        r(e, "laya.ani.bone.Templet", t);
        var a = e.prototype;
        return a.loadAni = function(t) {
            this._skBufferUrl = t, i.loader.load(t, _.create(this, this.onComplete), null, "arraybuffer");
        }, a.onComplete = function(t) {
            if (this._isDestroyed) return void this.destroy();
            var e = p.getRes(this._skBufferUrl);
            return e ? (this._path = this._skBufferUrl.slice(0, this._skBufferUrl.lastIndexOf("/")) + "/", 
            void this.parseData(null, e)) : void this.event("error", "load failed:" + this._skBufferUrl);
        }, a.parseData = function(t, e, i) {
            if (void 0 === i && (i = 30), !this._path) {
                var a = this._relativeUrl || this.url;
                if (a) {
                    var r = a.lastIndexOf("/");
                    r > 0 ? this._path = a.slice(0, r) + "/" : this._path = "";
                }
            }
            this._mainTexture = t, this._rate = i, this.parse(e);
        }, a.buildArmature = function(t) {
            return void 0 === t && (t = 0), new j(this, t);
        }, a.parse = function(i) {
            t.prototype.parse.call(this, i), this.event("loaded", this), this._aniVersion === e.LAYA_ANIMATION_VISION ? this._isParseAudio = !0 : this._aniVersion != e.LAYA_ANIMATION_160_VISION && console.log("[Error] 版本不一致，请使用IDE版本配套的重新导出" + this._aniVersion + "->" + e.LAYA_ANIMATION_VISION), 
            this._mainTexture ? this._parsePublicExtData() : this._parseTexturePath();
        }, a._parseTexturePath = function() {
            if (this._isDestroyed) return void this.destroy();
            var t = 0;
            this._loadList = [];
            var e, a = new o(this.getPublicExtData()), r = 0, s = 0, n = 0, h = 0, l = 0, u = 0, c = 0, p = 0, d = 0, f = a.getInt32(), m = a.readUTFString(), y = m.split("\n");
            for (t = 0; f > t; t++) e = this._path + y[2 * t], m = y[2 * t + 1], r = a.getFloat32(), 
            s = a.getFloat32(), n = a.getFloat32(), h = a.getFloat32(), d = a.getFloat32(), 
            l = isNaN(d) ? 0 : d, d = a.getFloat32(), u = isNaN(d) ? 0 : d, d = a.getFloat32(), 
            c = isNaN(d) ? n : d, d = a.getFloat32(), p = isNaN(d) ? h : d, -1 == this._loadList.indexOf(e) && this._loadList.push(e);
            i.loader.load(this._loadList, _.create(this, this._textureComplete));
        }, a._textureComplete = function() {
            for (var t, e, i = 0, a = this._loadList.length; a > i; i++) e = this._loadList[i], 
            t = this._textureDic[e] = p.getRes(e);
            this._parsePublicExtData();
        }, a._parsePublicExtData = function() {
            var t = 0, e = 0, i = 0, a = 0, r = 0;
            for (t = 0, r = this.getAnimationCount(); r > t; t++) this._graphicsCache.push([]);
            var s = !1;
            s = "Dragon" != this._aniClassName;
            var n, h, l = new o(this.getPublicExtData()), u = 0, c = 0, _ = 0, p = 0, d = 0, m = 0, y = 0, x = 0, g = 0, v = l.getInt32(), D = l.readUTFString(), A = D.split("\n");
            for (t = 0; v > t; t++) {
                if (n = this._mainTexture, h = this._path + A[2 * t], D = A[2 * t + 1], null == this._mainTexture && (n = this._textureDic[h]), 
                !n) return this.event("error", this), void (this.isParseFail = !0);
                u = l.getFloat32(), c = l.getFloat32(), _ = l.getFloat32(), p = l.getFloat32(), 
                g = l.getFloat32(), d = isNaN(g) ? 0 : g, g = l.getFloat32(), m = isNaN(g) ? 0 : g, 
                g = l.getFloat32(), y = isNaN(g) ? _ : g, g = l.getFloat32(), x = isNaN(g) ? p : g, 
                this.subTextureDic[D] = M.create(n, u, c, _, p, -d, -m, y, x);
            }
            this._mainTexture = n;
            var b, N = l.getUint16();
            for (t = 0; N > t; t++) b = [], b.push(l.getUint16()), b.push(l.getUint16()), b.push(l.getUint16()), 
            b.push(l.getUint16()), this.aniSectionDic[t] = b;
            var T, C, w, k, U, L = l.getInt16(), Y = {};
            for (t = 0; L > t; t++) T = new G(), 0 == t ? U = T : T.root = U, T.d = s ? -1 : 1, 
            w = l.readUTFString(), k = l.readUTFString(), T.length = l.getFloat32(), 1 == l.getByte() && (T.inheritRotation = !1), 
            1 == l.getByte() && (T.inheritScale = !1), T.name = w, k && (C = Y[k], C ? C.addChild(T) : this.mRootBone = T), 
            Y[w] = T, this.mBoneArr.push(T);
            this.tMatrixDataLen = l.getUint16();
            var W, H = l.getUint16(), Q = Math.floor(H / this.tMatrixDataLen), Z = this.srcBoneMatrixArr;
            for (t = 0; Q > t; t++) W = new K(), W.scX = l.getFloat32(), W.skX = l.getFloat32(), 
            W.skY = l.getFloat32(), W.scY = l.getFloat32(), W.x = l.getFloat32(), W.y = l.getFloat32(), 
            8 === this.tMatrixDataLen && (W.skewX = l.getFloat32(), W.skewY = l.getFloat32()), 
            Z.push(W), T = this.mBoneArr[t], T.transform = W;
            var $, j = l.getUint16(), J = 0;
            for (t = 0; j > t; t++) {
                for ($ = new q(), J = l.getUint16(), e = 0; J > e; e++) $.boneNames.push(l.readUTFString()), 
                $.boneIndexs.push(l.getInt16());
                $.name = l.readUTFString(), $.targetBoneName = l.readUTFString(), $.targetBoneIndex = l.getInt16(), 
                $.bendDirection = l.getFloat32(), $.mix = l.getFloat32(), $.isSpine = s, this.ikArr.push($);
            }
            var tt, et = l.getUint16(), it = 0;
            for (t = 0; et > t; t++) {
                for (tt = new B(), it = l.getUint16(), e = 0; it > e; e++) tt.boneIndexs.push(l.getInt16());
                tt.name = l.getUTFString(), tt.targetIndex = l.getInt16(), tt.rotateMix = l.getFloat32(), 
                tt.translateMix = l.getFloat32(), tt.scaleMix = l.getFloat32(), tt.shearMix = l.getFloat32(), 
                tt.offsetRotation = l.getFloat32(), tt.offsetX = l.getFloat32(), tt.offsetY = l.getFloat32(), 
                tt.offsetScaleX = l.getFloat32(), tt.offsetScaleY = l.getFloat32(), tt.offsetShearY = l.getFloat32(), 
                this.tfArr.push(tt);
            }
            var at, rt = l.getUint16(), st = 0;
            for (t = 0; rt > t; t++) {
                for (at = new S(), at.name = l.readUTFString(), st = l.getUint16(), e = 0; st > e; e++) at.bones.push(l.getInt16());
                at.target = l.readUTFString(), at.positionMode = l.readUTFString(), at.spacingMode = l.readUTFString(), 
                at.rotateMode = l.readUTFString(), at.offsetRotation = l.getFloat32(), at.position = l.getFloat32(), 
                at.spacing = l.getFloat32(), at.rotateMix = l.getFloat32(), at.translateMix = l.getFloat32(), 
                this.pathArr.push(at);
            }
            var nt, ht, lt, ot, ut, ct = 0, _t = 0, pt = 0, dt = 0, ft = NaN, mt = 0, yt = l.getInt16();
            for (t = 0; yt > t; t++) {
                var xt = l.getUint8(), gt = {};
                this.deformAniArr.push(gt);
                for (var vt = 0; xt > vt; vt++) for (ht = new R(), ht.skinName = l.getUTFString(), 
                gt[ht.skinName] = ht, ct = l.getInt16(), e = 0; ct > e; e++) for (lt = new F(), 
                ht.deformSlotDataList.push(lt), _t = l.getInt16(), i = 0; _t > i; i++) for (ot = new E(), 
                lt.deformSlotDisplayList.push(ot), ot.slotIndex = pt = l.getInt16(), ot.attachment = nt = l.getUTFString(), 
                dt = l.getInt16(), a = 0; dt > a; a++) for (1 == l.getByte() ? ot.tweenKeyList.push(!0) : ot.tweenKeyList.push(!1), 
                ft = l.getFloat32(), ot.timeList.push(ft), ut = [], ot.vectices.push(ut), mt = l.getInt16(), 
                r = 0; mt > r; r++) ut.push(l.getFloat32());
            }
            var Mt, Dt, It = l.getInt16(), At = 0, bt = 0;
            for (t = 0; It > t; t++) {
                for (At = l.getInt16(), Mt = [], e = 0; At > e; e++) {
                    for (Dt = new X(), Dt.time = l.getFloat32(), bt = l.getInt16(), i = 0; bt > i; i++) Dt.drawOrder.push(l.getInt16());
                    Mt.push(Dt);
                }
                this.drawOrderAniArr.push(Mt);
            }
            var Nt, Tt, St = l.getInt16(), Ct = 0;
            for (t = 0; St > t; t++) {
                for (Ct = l.getInt16(), Nt = [], e = 0; Ct > e; e++) Tt = new z(), Tt.name = l.getUTFString(), 
                this._isParseAudio && (Tt.audioValue = l.getUTFString()), Tt.intValue = l.getInt32(), 
                Tt.floatValue = l.getFloat32(), Tt.stringValue = l.getUTFString(), Tt.time = l.getFloat32(), 
                Nt.push(Tt);
                this.eventAniArr.push(Nt);
            }
            var Ft = l.getInt16();
            if (Ft > 0) for (this.attachmentNames = [], t = 0; Ft > t; t++) this.attachmentNames.push(l.getUTFString());
            var wt, kt, Pt = l.getInt16();
            for (t = 0; Pt > t; t++) wt = new O(), wt.name = l.readUTFString(), wt.parent = l.readUTFString(), 
            wt.attachmentName = l.readUTFString(), wt.srcDisplayIndex = wt.displayIndex = l.getInt16(), 
            wt.templet = this, this.boneSlotDic[wt.name] = wt, kt = this.bindBoneBoneSlotDic[wt.parent], 
            null == kt && (this.bindBoneBoneSlotDic[wt.parent] = kt = []), kt.push(wt), this.boneSlotArray.push(wt);
            var Ut, Bt, Lt, Rt = l.readUTFString(), Vt = Rt.split("\n"), Et = 0, Ot = l.getUint8(), Yt = 0, Kt = 0, Xt = 0, Wt = 0, Gt = 0, zt = 0, qt = 0;
            for (t = 0; Ot > t; t++) {
                for (Ut = new P(), Ut.name = Vt[Et++], Yt = l.getUint8(), e = 0; Yt > e; e++) {
                    for (Bt = new I(), Bt.name = Vt[Et++], wt = this.boneSlotDic[Bt.name], Kt = l.getUint8(), 
                    i = 0; Kt > i; i++) {
                        if (Lt = new V(), this.skinSlotDisplayDataArr.push(Lt), Lt.name = Vt[Et++], Lt.attachmentName = Vt[Et++], 
                        Lt.transform = new K(), Lt.transform.scX = l.getFloat32(), Lt.transform.skX = l.getFloat32(), 
                        Lt.transform.skY = l.getFloat32(), Lt.transform.scY = l.getFloat32(), Lt.transform.x = l.getFloat32(), 
                        Lt.transform.y = l.getFloat32(), Bt.displayArr.push(Lt), Lt.width = l.getFloat32(), 
                        Lt.height = l.getFloat32(), Lt.type = l.getUint8(), Lt.verLen = l.getUint16(), L = l.getUint16(), 
                        L > 0) for (Lt.bones = [], a = 0; L > a; a++) {
                            var Ht = l.getUint16();
                            Lt.bones.push(Ht);
                        }
                        if (Xt = l.getUint16(), Xt > 0) for (Lt.uvs = [], a = 0; Xt > a; a++) Lt.uvs.push(l.getFloat32());
                        if (Wt = l.getUint16(), Wt > 0) for (Lt.weights = [], a = 0; Wt > a; a++) Lt.weights.push(l.getFloat32());
                        if (Gt = l.getUint16(), Gt > 0) for (Lt.triangles = [], a = 0; Gt > a; a++) Lt.triangles.push(l.getUint16());
                        if (zt = l.getUint16(), zt > 0) for (Lt.vertices = [], a = 0; zt > a; a++) Lt.vertices.push(l.getFloat32());
                        if (qt = l.getUint16(), qt > 0) for (Lt.lengths = [], a = 0; qt > a; a++) Lt.lengths.push(l.getFloat32());
                    }
                    Ut.slotArr.push(Bt);
                }
                this.skinDic[Ut.name] = Ut, this.skinDataArray.push(Ut);
            }
            var Qt = l.getUint8();
            1 == Qt ? (this.yReverseMatrix = new f(1, 0, 0, -1, 0, 0), U && U.setTempMatrix(this.yReverseMatrix)) : U && U.setTempMatrix(new f()), 
            this.showSkinByIndex(this.boneSlotDic, 0), this.isParserComplete = !0, this.event("complete", this);
        }, a.getTexture = function(t) {
            var e = this.subTextureDic[t];
            return e || (e = this.subTextureDic[t.substr(0, t.length - 1)]), null == e ? this._mainTexture : e;
        }, a.showSkinByIndex = function(t, e, i) {
            if (void 0 === i && (i = !0), 0 > e && e >= this.skinDataArray.length) return !1;
            var a, r, s = 0, n = 0, h = this.skinDataArray[e];
            if (h) {
                for (s = 0, n = h.slotArr.length; n > s; s++) r = h.slotArr[s], r && (a = t[r.name], 
                a && (a.showSlotData(r, i), i && "undefined" != a.attachmentName && "null" != a.attachmentName ? a.showDisplayByName(a.attachmentName) : a.showDisplayByIndex(a.displayIndex)));
                return !0;
            }
            return !1;
        }, a.getSkinIndexByName = function(t) {
            for (var e, i = 0, a = this.skinDataArray.length; a > i; i++) if (e = this.skinDataArray[i], 
            e.name == t) return i;
            return -1;
        }, a.getGrahicsDataWithCache = function(t, e) {
            return this._graphicsCache[t] && this._graphicsCache[t][e] ? this._graphicsCache[t][e] : null;
        }, a._setCreateURL = function(t) {
            this._relativeUrl = t, laya.resource.Resource.prototype._setCreateURL.call(this, t);
        }, a.setGrahicsDataWithCache = function(t, e, i) {
            this._graphicsCache[t][e] = i;
        }, a.deleteAniData = function(t) {
            if (this._anis[t]) {
                var e = this._anis[t];
                e.bone3DMap = null, e.nodes = null;
            }
        }, a.destroy = function() {
            this._isDestroyed = !0;
            var t, i;
            for (i in this.subTextureDic) t = this.subTextureDic[i], t && t.destroy();
            var i;
            for (i in this._textureDic) t = this._textureDic[i], t && t.destroy();
            for (var a, r = 0, s = this.skinSlotDisplayDataArr.length; s > r; r++) a = this.skinSlotDisplayDataArr[r], 
            a.destory();
            this.skinSlotDisplayDataArr.length = 0, this.url && delete e.TEMPLET_DICTIONARY[this.url], 
            laya.resource.Resource.prototype.destroy.call(this);
        }, a.getAniNameByIndex = function(t) {
            var e = this.getAnimation(t);
            return e ? e.name : null;
        }, s(0, a, "rate", function() {
            return this._rate;
        }, function(t) {
            this._rate = t;
        }), e.LAYA_ANIMATION_160_VISION = "LAYAANIMATION:1.6.0", e.LAYA_ANIMATION_VISION = "LAYAANIMATION:1.7.0", 
        e.TEMPLET_DICTIONARY = null, e;
    }($);
}(window, document, Laya);