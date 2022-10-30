! function(t, e, st) {
    st.un, st.uns;
    var i = st.static,
        a = st.class,
        r = st.getset,
        f = st.__newvec,
        h = laya.maths.Bezier,
        c = laya.utils.Browser,
        Ct = laya.utils.Byte,
        s = (laya.Const,
            laya.events.Event, laya.events.EventDispatcher),
        n = laya.display.Graphics,
        o = laya.utils.Handler,
        l = laya.net.Loader,
        _ = laya.maths.MathUtil,
        Ft = laya.maths.Matrix,
        u = (laya.display.Node,
            laya.maths.Rectangle),
        m = laya.renders.Render,
        p = laya.resource.Resource,
        rt = (laya.utils.RunDriver,
            laya.display.Sprite),
        d = laya.utils.Stat,
        wt = laya.resource.Texture,
        y = (laya.utils.Timer,
            laya.net.URL, laya.utils.Utils),
        kt = function() {
            function t() {
                this.name = null, this.displayArr = [];
            }
            return a(t, "laya.ani.bone.SlotData"), t.prototype.getDisplayByName = function(t) {
                for (var e = 0, i = this.displayArr.length; e < i; e++)
                    if (this.displayArr[e].attachmentName == t) return e;
                return -1;
            }, t;
        }(),
        x = function() {
            function t() {
                this.texture = null, this.uvs = [0, 0, 1, 0, 1, 1, 0, 1], this.vertices = [0, 0, 100, 0, 100, 100, 0, 100],
                    this.indexes = [0, 1, 3, 3, 1, 2], this.uvTransform = null, this.useUvTransform = !1,
                    this.canvasPadding = 1;
            }
            return a(t, "laya.ani.bone.canvasmesh.MeshData"), t.prototype.getBounds = function() {
                return u._getWrapRec(this.vertices);
            }, t;
        }(),
        F = function() {
            function t() {
                this.name = null, this.parentIndex = 0, this.parent = null, this.keyframeWidth = 0,
                    this.lerpType = 0, this.interpolationMethod = null, this.childs = null, this.keyFrame = null,
                    this.playTime = NaN, this.extenData = null, this.dataOffset = 0;
            }
            return a(t, "laya.ani.AnimationNodeContent"), t;
        }(),
        w = function() {
            function t() {
                this.startTime = NaN, this.duration = NaN, this.interpolationData = null, this.data = null,
                    this.dData = null, this.nextData = null;
            }
            return a(t, "laya.ani.KeyFramesContent"), t;
        }(),
        g = function() {
            function t(t, e) {
                this._data = null, this._bones = null, this.target = null, this.rotateMix = NaN,
                    this.translateMix = NaN, this.scaleMix = NaN, this.shearMix = NaN, this._temp = f(2, 0),
                    this._data = t, null == this._bones && (this._bones = []), this.target = e[t.targetIndex];
                var i, a = 0;
                for (a = 0, i = t.boneIndexs.length; a < i; a++) this._bones.push(e[t.boneIndexs[a]]);
                this.rotateMix = t.rotateMix, this.translateMix = t.translateMix, this.scaleMix = t.scaleMix,
                    this.shearMix = t.shearMix;
            }
            return a(t, "laya.ani.bone.TfConstraint"), t.prototype.apply = function() {
                for (var t, e = this.target.resultMatrix.a, i = this.target.resultMatrix.b, a = this.target.resultMatrix.c, s = this.target.resultMatrix.d, r = 0, n = this._bones.length; r < n; r++) {
                    if (t = this._bones[r], 0 < this.rotateMix) {
                        var h = t.resultMatrix.a,
                            l = t.resultMatrix.b,
                            o = t.resultMatrix.c,
                            u = t.resultMatrix.d,
                            c = Math.atan2(a, e) - Math.atan2(o, h) + this._data.offsetRotation * Math.PI / 180;
                        c > Math.PI ? c -= 2 * Math.PI : c < -Math.PI && (c += 2 * Math.PI), c *= this.rotateMix;
                        var _ = Math.cos(c),
                            p = Math.sin(c);
                        t.resultMatrix.a = _ * h - p * o, t.resultMatrix.b = _ * l - p * u, t.resultMatrix.c = p * h + _ * o,
                            t.resultMatrix.d = p * l + _ * u;
                    }
                    if (this.translateMix && (this._temp[0] = this._data.offsetX, this._temp[1] = this._data.offsetY,
                            this.target.localToWorld(this._temp), t.resultMatrix.tx += (this._temp[0] - t.resultMatrix.tx) * this.translateMix,
                            t.resultMatrix.ty += (this._temp[1] - t.resultMatrix.ty) * this.translateMix, t.updateChild()),
                        0 < this.scaleMix) {
                        var d = Math.sqrt(t.resultMatrix.a * t.resultMatrix.a + t.resultMatrix.c * t.resultMatrix.c),
                            f = Math.sqrt(e * e + a * a),
                            m = 1e-5 < d ? (d + (f - d + this._data.offsetScaleX) * this.scaleMix) / d : 0;
                        t.resultMatrix.a *= m, t.resultMatrix.c *= m, d = Math.sqrt(t.resultMatrix.b * t.resultMatrix.b + t.resultMatrix.d * t.resultMatrix.d),
                            f = Math.sqrt(i * i + s * s), m = 1e-5 < d ? (d + (f - d + this._data.offsetScaleY) * this.scaleMix) / d : 0,
                            t.resultMatrix.b *= m, t.resultMatrix.d *= m;
                    }
                    if (0 < this.shearMix) {
                        l = t.resultMatrix.b, u = t.resultMatrix.d;
                        var y = Math.atan2(u, l);
                        (c = Math.atan2(s, i) - Math.atan2(a, e) - (y - Math.atan2(t.resultMatrix.c, t.resultMatrix.a))) > Math.PI ? c -= 2 * Math.PI : c < -Math.PI && (c += 2 * Math.PI),
                            c = y + (c + this._data.offsetShearY * Math.PI / 180) * this.shearMix, m = Math.sqrt(l * l + u * u),
                            t.resultMatrix.b = Math.cos(c) * m, t.resultMatrix.d = Math.sin(c) * m;
                    }
                }
            }, t;
        }(),
        Pt = function() {
            function t() {
                this.name = null, this.target = null, this.positionMode = null, this.spacingMode = null,
                    this.rotateMode = null, this.offsetRotation = NaN, this.position = NaN, this.spacing = NaN,
                    this.rotateMix = NaN, this.translateMix = NaN, this.bones = [];
            }
            return a(t, "laya.ani.bone.PathConstraintData"), t;
        }(),
        v = function() {
            function t() {}
            return a(t, "laya.ani.bone.UVTools"), t.getRelativeUV = function(t, e, i) {
                var a = t[0],
                    s = t[2] - t[0],
                    r = t[1],
                    n = t[5] - t[1];
                i || (i = []), i.length = e.length;
                var h, l = 0;
                h = i.length;
                var o = 1 / s,
                    u = 1 / n;
                for (l = 0; l < h; l += 2) i[l] = (e[l] - a) * o, i[l + 1] = (e[l + 1] - r) * u;
                return i;
            }, t.getAbsoluteUV = function(t, e, i) {
                if (0 == t[0] && 0 == t[1] && 1 == t[4] && 1 == t[5]) return i ? (y.copyArray(i, e),
                    i) : e;
                var a = t[0],
                    s = t[2] - t[0],
                    r = t[1],
                    n = t[5] - t[1];
                i || (i = []), i.length = e.length;
                var h, l = 0;
                for (h = i.length, l = 0; l < h; l += 2) i[l] = e[l] * s + a, i[l + 1] = e[l + 1] * n + r;
                return i;
            }, t;
        }(),
        Ut = function() {
            function t() {
                this.deformSlotDisplayList = [];
            }
            return a(t, "laya.ani.bone.DeformSlotData"), t;
        }(),
        M = function() {
            function v() {}
            return a(v, "laya.ani.AnimationParser02"), v.READ_DATA = function() {
                v._DATA.offset = v._reader.getUint32(), v._DATA.size = v._reader.getUint32();
            }, v.READ_BLOCK = function() {
                for (var t = v._BLOCK.count = v._reader.getUint16(), e = v._BLOCK.blockStarts = [], i = v._BLOCK.blockLengths = [], a = 0; a < t; a++) e.push(v._reader.getUint32()),
                    i.push(v._reader.getUint32());
            }, v.READ_STRINGS = function() {
                var t = v._reader.getUint32(),
                    e = v._reader.getUint16(),
                    i = v._reader.pos;
                v._reader.pos = t + v._DATA.offset;
                for (var a = 0; a < e; a++) v._strings[a] = v._reader.readUTFString();
                v._reader.pos = i;
            }, v.parse = function(t, e) {
                v._templet = t;
                (v._reader = e).__getBuffer();
                v.READ_DATA(), v.READ_BLOCK(), v.READ_STRINGS();
                for (var i = 0, a = v._BLOCK.count; i < a; i++) {
                    var s = e.getUint16(),
                        r = v._strings[s],
                        n = v["READ_" + r];
                    if (null == n) throw new Error("model file err,no this function:" + s + " " + r);
                    n.call();
                }
            }, v.READ_ANIMATIONS = function() {
                var t = v._reader,
                    e = t.__getBuffer(),
                    i = 0,
                    a = 0,
                    s = 0,
                    r = 0,
                    n = t.getUint16(),
                    h = [];
                for (h.length = n, i = 0; i < n; i++) h[i] = P.interpolation[t.getByte()];
                var l = t.getUint8();
                for (v._templet._anis.length = l, i = 0; i < l; i++) {
                    var o = v._templet._anis[i] = {};
                    o.nodes = new Array();
                    var u = o.name = v._strings[t.getUint16()];
                    v._templet._aniMap[u] = i, o.bone3DMap = {}, o.playTime = t.getFloat32();
                    var c = o.nodes.length = t.getInt16();
                    for (a = o.totalKeyframeDatasLength = 0; a < c; a++) {
                        var _ = o.nodes[a] = {};
                        _.keyframeWidth = n, _.childs = [];
                        var p = t.getUint16();
                        0 <= p && (_.name = v._strings[p], o.bone3DMap[_.name] = a), _.keyFrame = new Array(),
                            _.parentIndex = t.getInt16(), -1 == _.parentIndex ? _.parent = null : _.parent = o.nodes[_.parentIndex],
                            o.totalKeyframeDatasLength += n, _.interpolationMethod = h, null != _.parent && _.parent.childs.push(_);
                        var d = t.getUint16(),
                            f = null,
                            m = null;
                        for (s = 0, r = _.keyFrame.length = d; s < r; s++) {
                            (f = _.keyFrame[s] = {}).startTime = t.getFloat32(), m && (m.duration = f.startTime - m.startTime),
                                f.dData = new Float32Array(n), f.nextData = new Float32Array(n);
                            var y = v._DATA.offset,
                                x = t.getUint32(),
                                g = 4 * n,
                                D = e.slice(y + x, y + x + g);
                            f.data = new Float32Array(D), m = f;
                        }
                        f.duration = 0, _.playTime = o.playTime, v._templet._calculateKeyFrame(_, d, n);
                    }
                }
            }, v._templet = null, v._reader = null, v._strings = [], i(v, ["_BLOCK", function() {
                return this._BLOCK = {
                    count: 0
                };
            }, "_DATA", function() {
                return this._DATA = {
                    offset: 0,
                    size: 0
                };
            }]), v;
        }(),
        I = function() {
            function t() {}
            return a(t, "laya.ani.AnimationParser01"), t.parse = function(t, e) {
                var i = e.__getBuffer(),
                    a = 0,
                    s = 0,
                    r = 0,
                    n = 0,
                    h = 0,
                    l = 0,
                    o = 0,
                    u = e.readUTFString();
                t._aniClassName = u;
                var c, _ = e.readUTFString().split("\n"),
                    p = e.getUint8(),
                    d = e.getUint32(),
                    f = e.getUint32();
                0 < d && (c = i.slice(d, f));
                var m = new Ct(c);
                for (0 < f && (t._publicExtData = i.slice(f, i.byteLength)), t._useParent = !!e.getUint8(),
                    t._anis.length = p, a = 0; a < p; a++) {
                    var y = t._anis[a] = new k();
                    y.nodes = new Array();
                    var x = y.name = _[e.getUint16()];
                    t._aniMap[x] = a, y.bone3DMap = {}, y.playTime = e.getFloat32();
                    var g = y.nodes.length = e.getUint8();
                    for (s = y.totalKeyframeDatasLength = 0; s < g; s++) {
                        var D = y.nodes[s] = new F();
                        D.childs = [];
                        var v = e.getInt16();
                        0 <= v && (D.name = _[v], y.bone3DMap[D.name] = s), D.keyFrame = new Array(), D.parentIndex = e.getInt16(), -1 == D.parentIndex ? D.parent = null : D.parent = y.nodes[D.parentIndex], D.lerpType = e.getUint8();
                        var M = e.getUint32();
                        m.pos = M;
                        var I = D.keyframeWidth = m.getUint16();
                        if (y.totalKeyframeDatasLength += I, 0 === D.lerpType || 1 === D.lerpType)
                            for (D.interpolationMethod = [],
                                D.interpolationMethod.length = I, r = 0; r < I; r++) D.interpolationMethod[r] = P.interpolation[m.getUint8()];
                        null != D.parent && D.parent.childs.push(D);
                        var b = e.getUint16();
                        0 < b && (D.extenData = i.slice(e.pos, e.pos + b), e.pos += b);
                        var A, N = e.getUint16(),
                            T = 0;
                        for (r = 0, n = D.keyFrame.length = N; r < n; r++) {
                            if ((A = D.keyFrame[r] = new w()).duration = e.getFloat32(), A.startTime = T, 2 === D.lerpType) {
                                A.interpolationData = [];
                                var S, C = e.getUint8();
                                switch (S = e.getFloat32()) {
                                    case 254:
                                        for (A.interpolationData.length = I, o = 0; o < I; o++) A.interpolationData[o] = 0;
                                        break;

                                    case 255:
                                        for (A.interpolationData.length = I, o = 0; o < I; o++) A.interpolationData[o] = 5;
                                        break;

                                    default:
                                        for (A.interpolationData.push(S), l = 1; l < C; l++) A.interpolationData.push(e.getFloat32());
                                }
                            }
                            for (A.data = new Float32Array(I), A.dData = new Float32Array(I), A.nextData = new Float32Array(I),
                                h = 0; h < I; h++) A.data[h] = e.getFloat32(), -1e-8 < A.data[h] && A.data[h] < 1e-8 && (A.data[h] = 0);
                            T += A.duration;
                        }
                        A.startTime = y.playTime, D.playTime = y.playTime, t._calculateKeyFrame(D, N, I);
                    }
                }
            }, t;
        }(),
        Bt = function() {
            function t() {
                this.name = null, this.slotArr = [];
            }
            return a(t, "laya.ani.bone.SkinData"), t;
        }(),
        D = function() {
            function at(t, e) {
                this._targetBone = null, this._bones = null, this._data = null, this.name = null,
                    this.mix = NaN, this.bendDirection = NaN, this.isSpine = !0, this._sp = null, this.isDebug = !1,
                    this._data = t, this._targetBone = e[t.targetBoneIndex], this.isSpine = t.isSpine,
                    null == this._bones && (this._bones = []);
                for (var i = this._bones.length = 0, a = t.boneIndexs.length; i < a; i++) this._bones.push(e[t.boneIndexs[i]]);
                this.name = t.name, this.mix = t.mix, this.bendDirection = t.bendDirection;
            }
            a(at, "laya.ani.bone.IkConstraint");
            var t = at.prototype;
            return t.apply = function() {
                switch (this._bones.length) {
                    case 1:
                        this._applyIk1(this._bones[0], this._targetBone.resultMatrix.tx, this._targetBone.resultMatrix.ty, this.mix);
                        break;

                    case 2:
                        this.isSpine ? this._applyIk2(this._bones[0], this._bones[1], this._targetBone.resultMatrix.tx, this._targetBone.resultMatrix.ty, this.bendDirection, this.mix) : this._applyIk3(this._bones[0], this._bones[1], this._targetBone.resultMatrix.tx, this._targetBone.resultMatrix.ty, this.bendDirection, this.mix);
                }
            }, t._applyIk1 = function(t, e, i, a) {
                var s = t.parentBone,
                    r = 1 / (s.resultMatrix.a * s.resultMatrix.d - s.resultMatrix.b * s.resultMatrix.c),
                    n = e - s.resultMatrix.tx,
                    h = i - s.resultMatrix.ty,
                    l = (n * s.resultMatrix.d - h * s.resultMatrix.c) * r - t.transform.x,
                    o = (h * s.resultMatrix.a - n * s.resultMatrix.b) * r - t.transform.y,
                    u = Math.atan2(o, l) * at.radDeg - 0 - t.transform.skX;
                t.transform.scX < 0 && (u += 180), 180 < u ? u -= 360 : u < -180 && (u += 360),
                    t.transform.skX = t.transform.skY = t.transform.skX + u * a, t.update();
            }, t.updatePos = function(t, e) {
                this._sp && this._sp.pos(t, e);
            }, t._applyIk2 = function(t, e, i, a, s, r) {
                if (0 != r) {
                    var n = t.resultTransform.x,
                        h = t.resultTransform.y,
                        l = t.transform.scX,
                        o = t.transform.scY,
                        u = e.transform.scX,
                        c = 0,
                        _ = 0,
                        p = 0;
                    p = l < 0 ? (l = -l, c = 180, -1) : (c = 0, 1), o < 0 && (o = -o, p = -p), _ = u < 0 ? (u = -u,
                        180) : 0;
                    var d = e.resultTransform.x,
                        f = NaN,
                        m = NaN,
                        y = NaN,
                        x = t.resultMatrix.a,
                        g = t.resultMatrix.c,
                        D = t.resultMatrix.b,
                        v = t.resultMatrix.d,
                        M = Math.abs(l - o) <= 1e-4;
                    y = M ? (m = x * d + g * (f = e.resultTransform.y) + t.resultMatrix.tx, D * d + v * f + t.resultMatrix.ty) : (f = 0,
                        m = x * d + t.resultMatrix.tx, D * d + t.resultMatrix.ty), this.isDebug && (this._sp || (this._sp = new rt(),
                            st.stage.addChild(this._sp)), this._sp.graphics.clear(), this._sp.graphics.drawCircle(i, a, 15, "#ffff00"),
                        this._sp.graphics.drawCircle(m, y, 15, "#ff00ff")), t.setRotation(Math.atan2(y - t.resultMatrix.ty, m - t.resultMatrix.tx));
                    var I = t.parentBone;
                    x = I.resultMatrix.a, g = I.resultMatrix.c, D = I.resultMatrix.b;
                    var b = 1 / (x * (v = I.resultMatrix.d) - g * D),
                        A = i - I.resultMatrix.tx,
                        N = a - I.resultMatrix.ty,
                        T = (A * v - N * g) * b - n,
                        S = (N * x - A * D) * b - h,
                        C = ((A = m - I.resultMatrix.tx) * v - (N = y - I.resultMatrix.ty) * g) * b - n,
                        F = (N * x - A * D) * b - h,
                        w = Math.sqrt(C * C + F * F),
                        k = e.length * u,
                        P = NaN,
                        U = NaN;
                    if (M) {
                        var B = (T * T + S * S - w * w - (k *= l) * k) / (2 * w * k);
                        B < -1 ? B = -1 : 1 < B && (B = 1), U = Math.acos(B) * s, x = w + k * B, g = k * Math.sin(U),
                            P = Math.atan2(S * x - T * g, T * x + S * g);
                    } else {
                        var L = (x = l * k) * x,
                            R = (g = o * k) * g,
                            E = T * T + S * S,
                            V = Math.atan2(S, T),
                            O = -2 * R * w,
                            K = R - L;
                        if (0 < (v = O * O - 4 * K * (D = R * w * w + L * E - L * R))) {
                            var Y = Math.sqrt(v);
                            O < 0 && (Y = -Y);
                            var W = (Y = -(O + Y) / 2) / K,
                                X = D / Y,
                                G = Math.abs(W) < Math.abs(X) ? W : X;
                            G * G <= E && (N = Math.sqrt(E - G * G) * s, P = V - Math.atan2(N, G), U = Math.atan2(N / o, (G - w) / l));
                        }
                        var z = 0,
                            q = Number.MAX_VALUE,
                            H = 0,
                            Z = 0,
                            Q = 0,
                            $ = 0,
                            j = 0,
                            J = 0;
                        $ < (v = (A = w + x) * A) && (Q = 0, $ = v, j = A), (v = (A = w - x) * A) < q && (z = Math.PI,
                            q = v, H = A);
                        var tt = Math.acos(-x * w / (L - R));
                        (v = (A = x * Math.cos(tt) + w) * A + (N = g * Math.sin(tt)) * N) < q && (z = tt,
                            q = v, H = A, Z = N), $ < v && (Q = tt, $ = v, j = A, J = N), U = E <= (q + $) / 2 ? (P = V - Math.atan2(Z * s, H),
                            z * s) : (P = V - Math.atan2(J * s, j), Q * s);
                    }
                    var et = Math.atan2(f, d) * p,
                        it = t.resultTransform.skX;
                    180 < (P = (P - et) * at.radDeg + c - it) ? P -= 360 : P < -180 && (P += 360), t.resultTransform.x = n,
                        t.resultTransform.y = h, t.resultTransform.skX = t.resultTransform.skY = it + P * r,
                        it = e.resultTransform.skX, 180 < (U = ((U + et) * at.radDeg - 0) * p + _ - (it %= 360)) ? U -= 360 : U < -180 && (U += 360),
                        e.resultTransform.x = d, e.resultTransform.y = f, e.resultTransform.skX = e.resultTransform.skY = e.resultTransform.skY + U * r,
                        t.update();
                }
            }, t._applyIk3 = function(t, e, i, a, s, r) {
                if (0 != r) {
                    var n, h, l = e.resultMatrix.a * e.length,
                        o = e.resultMatrix.b * e.length,
                        u = l * l + o * o,
                        c = Math.sqrt(u),
                        _ = t.resultMatrix.tx,
                        p = t.resultMatrix.ty,
                        d = e.resultMatrix.tx,
                        f = e.resultMatrix.ty,
                        m = d - _,
                        y = f - p,
                        x = m * m + y * y,
                        g = Math.sqrt(x),
                        D = (m = i - t.resultMatrix.tx) * m + (y = a - t.resultMatrix.ty) * y,
                        v = Math.sqrt(D);
                    if (c + g <= v || v + c <= g || v + g <= c) {
                        var M = NaN;
                        d = _ + (M = c + g <= v ? 1 : -1) * (i - _) * g / v, f = p + M * (a - p) * g / v;
                    } else {
                        var I = (x - u + D) / (2 * D),
                            b = Math.sqrt(x - I * I * D) / v,
                            A = _ + m * I,
                            N = p + y * I,
                            T = -y * b,
                            S = m * b;
                        f = 0 < s ? (d = A - T, N - S) : (d = A + T, N + S);
                    }
                    n = d, h = f, this.isDebug && (this._sp || (this._sp = new rt(), st.stage.addChild(this._sp)),
                        this._sp.graphics.clear(), this._sp.graphics.drawCircle(_, p, 15, "#ff00ff"), this._sp.graphics.drawCircle(i, a, 15, "#ffff00"),
                        this._sp.graphics.drawCircle(n, h, 15, "#ff00ff"));
                    var C, F;
                    C = Math.atan2(h - t.resultMatrix.ty, n - t.resultMatrix.tx), t.setRotation(C),
                        (F = at._tempMatrix).identity(), F.rotate(C), F.scale(t.resultMatrix.getScaleX(), t.resultMatrix.getScaleY()),
                        F.translate(t.resultMatrix.tx, t.resultMatrix.ty), F.copyTo(t.resultMatrix), t.updateChild();
                    var w, k;
                    w = Math.atan2(a - h, i - n), e.setRotation(w), (k = at._tempMatrix).identity(),
                        k.rotate(w), k.scale(e.resultMatrix.getScaleX(), e.resultMatrix.getScaleY()), k.translate(n, h),
                        F.copyTo(e.resultMatrix), e.updateChild();
                }
            }, i(at, ["radDeg", function() {
                return this.radDeg = 180 / Math.PI;
            }, "degRad", function() {
                return this.degRad = Math.PI / 180;
            }, "_tempMatrix", function() {
                return this._tempMatrix = new Ft();
            }]), at;
        }(),
        Lt = function() {
            function t() {
                this.name = null, this.targetIndex = 0, this.rotateMix = NaN, this.translateMix = NaN,
                    this.scaleMix = NaN, this.shearMix = NaN, this.offsetRotation = NaN, this.offsetX = NaN,
                    this.offsetY = NaN, this.offsetScaleX = NaN, this.offsetScaleY = NaN, this.offsetShearY = NaN,
                    this.boneIndexs = [];
            }
            return a(t, "laya.ani.bone.TfConstraintData"), t;
        }(),
        k = function() {
            function t() {
                this.nodes = null, this.name = null, this.playTime = NaN, this.bone3DMap = null,
                    this.totalKeyframeDatasLength = 0;
            }
            return a(t, "laya.ani.AnimationContent"), t;
        }(),
        Rt = (function() {
            function t() {}
            a(t, "laya.ani.AnimationState"), t.stopped = 0, t.paused = 1, t.playing = 2;
        }(), function() {
            function t() {
                this.skinName = null, this.deformSlotDataList = [];
            }
            return a(t, "laya.ani.bone.DeformAniData"), t;
        }()),
        Et = function() {
            function t() {
                this.name = null, this.attachmentName = null, this.type = 0, this.transform = null,
                    this.width = NaN, this.height = NaN, this.texture = null, this.bones = null, this.uvs = null,
                    this.weights = null, this.triangles = null, this.vertices = null, this.lengths = null,
                    this.verLen = 0;
            }
            a(t, "laya.ani.bone.SkinSlotDisplayData");
            var e = t.prototype;
            return e.createTexture = function(t) {
                return this.texture || (this.texture = new wt(t.bitmap, this.uvs), this.uvs[0] > this.uvs[4] && this.uvs[1] > this.uvs[5] ? (this.texture.width = t.height,
                            this.texture.height = t.width, this.texture.offsetX = -t.offsetX, this.texture.offsetY = -t.offsetY,
                            this.texture.sourceWidth = t.sourceHeight, this.texture.sourceHeight = t.sourceWidth) : (this.texture.width = t.width,
                            this.texture.height = t.height, this.texture.offsetX = -t.offsetX, this.texture.offsetY = -t.offsetY,
                            this.texture.sourceWidth = t.sourceWidth, this.texture.sourceHeight = t.sourceHeight),
                        m.isWebGL || this.uvs[1] > this.uvs[5] && (this.texture.offsetY = this.texture.sourceHeight - this.texture.height - this.texture.offsetY)),
                    this.texture;
            }, e.destory = function() {
                this.texture && this.texture.destroy();
            }, t;
        }(),
        Vt = function() {
            function t() {
                this.boneSlot = null, this.slotIndex = -1, this.attachment = null, this.deformData = null,
                    this.frameIndex = 0, this.timeList = [], this.vectices = [], this.tweenKeyList = [];
            }
            a(t, "laya.ani.bone.DeformSlotDisplayData");
            var e = t.prototype;
            return e.binarySearch1 = function(t, e) {
                var i = 0,
                    a = t.length - 2;
                if (0 == a) return 1;
                for (var s = a >>> 1;;) {
                    if (t[Math.floor(s + 1)] <= e ? i = s + 1 : a = s, i == a) return i + 1;
                    s = i + a >>> 1;
                }
                return 0;
            }, e.apply = function(t, e, i) {
                if (void 0 === i && (i = 1), t += .05, !(this.timeList.length <= 0)) {
                    var a = 0;
                    if (!(t < this.timeList[0])) {
                        var s = this.vectices[0].length,
                            r = [],
                            n = this.binarySearch1(this.timeList, t);
                        if (this.frameIndex = n, t >= this.timeList[this.timeList.length - 1]) {
                            var h = this.vectices[this.vectices.length - 1];
                            if (i < 1)
                                for (a = 0; a < s; a++) r[a] += (h[a] - r[a]) * i;
                            else
                                for (a = 0; a < s; a++) r[a] = h[a];
                            this.deformData = r;
                        } else {
                            this.tweenKeyList[this.frameIndex];
                            var l = this.vectices[this.frameIndex - 1],
                                o = this.vectices[this.frameIndex],
                                u = this.timeList[this.frameIndex - 1],
                                c = this.timeList[this.frameIndex];
                            i = this.tweenKeyList[n - 1] ? (t - u) / (c - u) : 0;
                            var _ = NaN;
                            for (a = 0; a < s; a++) _ = l[a], r[a] = _ + (o[a] - _) * i;
                            this.deformData = r;
                        }
                    }
                }
            }, t;
        }(),
        Ot = function() {
            function D() {
                this.name = null, this.parent = null, this.attachmentName = null, this.srcDisplayIndex = -1,
                    this.type = "src", this.templet = null, this.currSlotData = null, this.currTexture = null,
                    this.currDisplayData = null, this.displayIndex = -1, this.originalIndex = -1, this._diyTexture = null,
                    this._parentMatrix = null, this._resultMatrix = null, this._replaceDic = {}, this._curDiyUV = null,
                    this._curDiyVS = null, this._skinSprite = null, this.deformData = null, this._mVerticleArr = null,
                    this._preGraphicVerticle = null, this._preGraphicMatrix = null;
            }
            a(D, "laya.ani.bone.BoneSlot");
            var t = D.prototype;
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
                    this.currSlotData && -1 < t && t < this.currSlotData.displayArr.length) {
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
                return D.useSameMatrixAndVerticle && this._preGraphicVerticle && D.isSameArr(t, this._preGraphicVerticle) ? t = this._preGraphicVerticle : (t = y.copyArray([], t),
                    this._preGraphicVerticle = t), t;
            }, t.getSaveMatrix = function(t) {
                D.useSameMatrixAndVerticle && this._preGraphicMatrix && D.isSameMatrix(t, this._preGraphicMatrix) ? t = this._preGraphicMatrix : (t = t.clone(),
                    this._preGraphicMatrix = t);
                return t;
            }, t.draw = function(t, e, i, a) {
                if (void 0 === i && (i = !1), void 0 === a && (a = 1), (null != this._diyTexture || null != this.currTexture) && null != this.currDisplayData || this.currDisplayData && 3 == this.currDisplayData.type) {
                    var s, r = this.currTexture;
                    switch (this._diyTexture && (r = this._diyTexture), this.currDisplayData.type) {
                        case 0:
                            if (t) {
                                var n = this.getDisplayMatrix();
                                if (this._parentMatrix) {
                                    var h = !1;
                                    if (n) {
                                        var l;
                                        if (Ft.mul(n, this._parentMatrix, Ft.TEMP), l = i ? (null == this._resultMatrix && (this._resultMatrix = new Ft()),
                                                this._resultMatrix) : D._tempResultMatrix, !m.isWebGL && this.currDisplayData.uvs || m.isWebGL && this._diyTexture && this.currDisplayData.uvs) {
                                            var o = D._tempMatrix;
                                            o.identity(), this.currDisplayData.uvs[1] > this.currDisplayData.uvs[5] && (o.d = -1),
                                                this.currDisplayData.uvs[0] > this.currDisplayData.uvs[4] && this.currDisplayData.uvs[1] > this.currDisplayData.uvs[5] && (h = !0,
                                                    o.rotate(-Math.PI / 2)), Ft.mul(o, Ft.TEMP, l);
                                        } else Ft.TEMP.copyTo(l);
                                        i || (l = this.getSaveMatrix(l)), l._checkTransform(), h ? t.drawTexture(r, -this.currDisplayData.height / 2, -this.currDisplayData.width / 2, this.currDisplayData.height, this.currDisplayData.width, l, a) : t.drawTexture(r, -this.currDisplayData.width / 2, -this.currDisplayData.height / 2, this.currDisplayData.width, this.currDisplayData.height, l, a);
                                    }
                                }
                            }
                            break;

                        case 1:
                            if (null == (s = i ? (null == this._skinSprite && (this._skinSprite = D.createSkinMesh()),
                                    this._skinSprite) : D.createSkinMesh())) return;
                            var u;
                            if (null == this.currDisplayData.bones) {
                                var c, _ = this.currDisplayData.weights;
                                this.deformData && (_ = this.deformData), c = this._diyTexture ? (this._curDiyUV || (this._curDiyUV = []),
                                    0 == this._curDiyUV.length && (this._curDiyUV = v.getRelativeUV(this.currTexture.uv, this.currDisplayData.uvs, this._curDiyUV),
                                        this._curDiyUV = v.getAbsoluteUV(this._diyTexture.uv, this._curDiyUV, this._curDiyUV)),
                                    this._curDiyUV) : this.currDisplayData.uvs, this._mVerticleArr = _;
                                this.currDisplayData.triangles.length;
                                u = this.currDisplayData.triangles, this.deformData && (i || (this._mVerticleArr = this.getSaveVerticle(this._mVerticleArr))),
                                    s.init2(r, u, this._mVerticleArr, c);
                                var p, d = this.getDisplayMatrix();
                                if (this._parentMatrix)
                                    if (d) Ft.mul(d, this._parentMatrix, Ft.TEMP), p = i ? (null == this._resultMatrix && (this._resultMatrix = new Ft()),
                                            this._resultMatrix) : D._tempResultMatrix, Ft.TEMP.copyTo(p), i || (p = this.getSaveMatrix(p)),
                                        s.transform = p;
                            } else this.skinMesh(e, s);
                            t.drawSkin(s, a);
                            break;

                        case 2:
                            if (null == (s = i ? (null == this._skinSprite && (this._skinSprite = D.createSkinMesh()),
                                    this._skinSprite) : D.createSkinMesh())) return;
                            this.skinMesh(e, s), t.drawSkin(s, a);
                    }
                }
            }, t.skinMesh = function(t, e) {
                var i, a = this.currTexture,
                    s = this.currDisplayData.bones;
                i = this._diyTexture ? (a = this._diyTexture, this._curDiyUV || (this._curDiyUV = []),
                    0 == this._curDiyUV.length && (this._curDiyUV = v.getRelativeUV(this.currTexture.uv, this.currDisplayData.uvs, this._curDiyUV),
                        this._curDiyUV = v.getAbsoluteUV(this._diyTexture.uv, this._curDiyUV, this._curDiyUV)),
                    this._curDiyUV) : this.currDisplayData.uvs;
                var r, n, h, l = this.currDisplayData.weights,
                    o = this.currDisplayData.triangles,
                    u = 0,
                    c = 0,
                    _ = 0,
                    p = NaN,
                    d = NaN,
                    f = 0,
                    m = 0,
                    y = 0,
                    x = 0;
                if (D._tempVerticleArr.length = 0, h = D._tempVerticleArr, this.deformData && 0 < this.deformData.length) {
                    var g = 0;
                    for (y = 0, x = s.length; y < x;) {
                        for (_ = s[y++] + y, c = u = 0; y < _; y++) n = t[s[y]], p = l[f] + this.deformData[g++],
                            d = l[f + 1] + this.deformData[g++], m = l[f + 2], u += (p * n.a + d * n.c + n.tx) * m,
                            c += (p * n.b + d * n.d + n.ty) * m, f += 3;
                        h.push(u, c);
                    }
                } else
                    for (y = 0, x = s.length; y < x;) {
                        for (_ = s[y++] + y, c = u = 0; y < _; y++) n = t[s[y]], p = l[f], d = l[f + 1],
                            m = l[f + 2], u += (p * n.a + d * n.c + n.tx) * m, c += (p * n.b + d * n.d + n.ty) * m,
                            f += 3;
                        h.push(u, c);
                    }
                this._mVerticleArr = h, r = o, this._mVerticleArr = this.getSaveVerticle(this._mVerticleArr),
                    e.init2(a, r, this._mVerticleArr, i);
            }, t.drawBonePoint = function(t) {
                t && this._parentMatrix && t.drawCircle(this._parentMatrix.tx, this._parentMatrix.ty, 5, "#ff0000");
            }, t.getDisplayMatrix = function() {
                return this.currDisplayData ? this.currDisplayData.transform.getMatrix() : null;
            }, t.getMatrix = function() {
                return this._resultMatrix;
            }, t.copy = function() {
                var t = new D();
                return t.type = "copy", t.name = this.name, t.attachmentName = this.attachmentName,
                    t.srcDisplayIndex = this.srcDisplayIndex, t.parent = this.parent, t.displayIndex = this.displayIndex,
                    t.templet = this.templet, t.currSlotData = this.currSlotData, t.currTexture = this.currTexture,
                    t.currDisplayData = this.currDisplayData, t;
            }, D.createSkinMesh = function() {
                return new T();
            }, D.isSameArr = function(t, e) {
                if (t.length != e.length) return !1;
                var i, a = 0;
                for (i = t.length, a = 0; a < i; a++)
                    if (t[a] != e[a]) return !1;
                return !0;
            }, D.isSameMatrix = function(t, e) {
                return t.a == e.a && t.b == e.b && t.c == e.c && t.d == e.d && Math.abs(t.tx - e.tx) < 1e-5 && Math.abs(t.ty - e.ty) < 1e-5;
            }, D.useSameMatrixAndVerticle = !0, D._tempVerticleArr = [], i(D, ["_tempMatrix", function() {
                return this._tempMatrix = new Ft();
            }, "_tempResultMatrix", function() {
                return this._tempResultMatrix = new Ft();
            }]), D;
        }(),
        b = function() {
            function k(t, e) {
                this.target = null, this.data = null, this.bones = null, this.position = NaN, this.spacing = NaN,
                    this.rotateMix = NaN, this.translateMix = NaN, this._debugKey = !1, this._spaces = null,
                    this._segments = [], this._curves = [], this.data = t, this.position = t.position,
                    this.spacing = t.spacing, this.rotateMix = t.rotateMix, this.translateMix = t.translateMix,
                    this.bones = [];
                for (var i = this.data.bones, a = 0, s = i.length; a < s; a++) this.bones.push(e[i[a]]);
            }
            a(k, "laya.ani.bone.PathConstraint");
            var t = k.prototype;
            return t.apply = function(t, e) {
                if (this.target) {
                    var i = this.translateMix,
                        a = this.translateMix,
                        s = 0 < a,
                        r = this.data.spacingMode,
                        n = "length" == r,
                        h = this.data.rotateMode,
                        l = "tangent" == h,
                        o = "chainScale" == h,
                        u = [],
                        c = this.bones.length,
                        _ = l ? c : c + 1,
                        p = [];
                    (this._spaces = p)[0] = this.position;
                    var d = this.spacing;
                    if (o || n)
                        for (var f = 0, m = _ - 1; f < m;) {
                            var y = this.bones[f],
                                x = y.length,
                                g = x * y.resultMatrix.a,
                                D = x * y.resultMatrix.b;
                            x = Math.sqrt(g * g + D * D), o && (u[f] = x), p[++f] = n ? Math.max(0, x + d) : d;
                        } else
                            for (f = 1; f < _; f++) p[f] = d;
                    var v = this.computeWorldPositions(this.target, t, e, _, l, "percent" == this.data.positionMode, "percent" == r);
                    if (this._debugKey) {
                        for (f = 0; f < v.length; f++) e.drawCircle(v[f++], v[f++], 5, "#00ff00");
                        var M = [];
                        for (f = 0; f < v.length; f++) M.push(v[f++], v[f++]);
                        e.drawLines(0, 0, M, "#ff0000");
                    }
                    var I = v[0],
                        b = v[1],
                        A = this.data.offsetRotation,
                        N = "chain" == h && 0 == A,
                        T = NaN;
                    for (f = 0, T = 3; f < c; f++, T += 3) {
                        (y = this.bones[f]).resultMatrix.tx += (I - y.resultMatrix.tx) * i, y.resultMatrix.ty += (b - y.resultMatrix.ty) * i;
                        var S = (g = v[T]) - I,
                            C = (D = v[T + 1]) - b;
                        if (o && 0 != (x = u[f])) {
                            var F = (Math.sqrt(S * S + C * C) / x - 1) * a + 1;
                            y.resultMatrix.a *= F, y.resultMatrix.c *= F;
                        }
                        if (I = g, b = D, s) {
                            var w = y.resultMatrix.a,
                                k = y.resultMatrix.c,
                                P = y.resultMatrix.b,
                                U = y.resultMatrix.d,
                                B = NaN,
                                L = NaN,
                                R = NaN;
                            B = l ? v[T - 1] : 0 == p[f + 1] ? v[T + 2] : Math.atan2(C, S), B -= Math.atan2(P, w) - A / 180 * Math.PI,
                                N && (L = Math.cos(B), R = Math.sin(B), I += ((x = y.length) * (L * w - R * P) - S) * a,
                                    b += (x * (R * w + L * P) - C) * a), B > Math.PI ? B -= 2 * Math.PI : B < -Math.PI && (B += 2 * Math.PI),
                                B *= a, L = Math.cos(B), R = Math.sin(B), y.resultMatrix.a = L * w - R * P, y.resultMatrix.c = L * k - R * U,
                                y.resultMatrix.b = R * w + L * P, y.resultMatrix.d = R * k + L * U;
                        }
                    }
                }
            }, t.computeWorldVertices2 = function(t, e, i, a, s, r) {
                var n, h, l = t.currDisplayData.bones,
                    o = t.currDisplayData.weights,
                    u = t.currDisplayData.triangles,
                    c = 0,
                    _ = 0,
                    p = 0,
                    d = 0,
                    f = 0,
                    m = 0,
                    y = 0,
                    x = 0,
                    g = 0,
                    D = 0,
                    v = 0;
                if (null != l) {
                    for (c = 0; c < i; c += 2) _ += (d = l[_]) + 1, p += d;
                    var M = e;
                    for (f = r, m = 3 * p; f < a; f += 2) {
                        for (x = y = 0, d = l[_++], d += _; _ < d; _++, m += 3) {
                            n = M[l[_]].resultMatrix, g = o[m], D = o[m + 1];
                            var I = o[m + 2];
                            y += (g * n.a + D * n.c + n.tx) * I, x += (g * n.b + D * n.d + n.ty) * I;
                        }
                        s[f] = y, s[f + 1] = x;
                    }
                } else {
                    var b, A;
                    if (u || (u = o), t.deformData && (u = t.deformData), b = t.parent, e)
                        for (v = e.length,
                            c = 0; c < v; c++)
                            if (e[c].name == b) {
                                h = e[c];
                                break;
                            }
                    h && (A = h.resultMatrix), A || (A = k._tempMt);
                    var N = A.tx,
                        T = A.ty,
                        S = A.a,
                        C = A.b,
                        F = A.c,
                        w = A.d;
                    for (h && (w *= h.d), _ = i, f = r; f < a; _ += 2, f += 2) g = u[_], D = u[_ + 1],
                        s[f] = g * S + D * C + N, s[f + 1] = -(g * F + D * w + T);
                }
            }, t.computeWorldPositions = function(t, e, i, a, s, r, n) {
                t.currDisplayData.bones, t.currDisplayData.weights, t.currDisplayData.triangles;
                var h = [],
                    l = 0,
                    o = t.currDisplayData.verLen,
                    u = this.position,
                    c = this._spaces,
                    _ = [],
                    p = [],
                    d = o / 6,
                    f = -1,
                    m = NaN,
                    y = 0,
                    x = 0,
                    g = NaN,
                    D = NaN,
                    v = NaN,
                    M = NaN;
                if (d--, o -= 4, this.computeWorldVertices2(t, e, 2, o, h, 0), this._debugKey)
                    for (l = 0; l < h.length;) i.drawCircle(h[l++], h[l++], 10, "#ff0000");
                _ = h, this._curves.length = d;
                var I = this._curves,
                    b = _[m = 0],
                    A = _[1],
                    N = 0,
                    T = 0,
                    S = 0,
                    C = 0,
                    F = 0,
                    w = 0,
                    k = NaN,
                    P = NaN,
                    U = NaN,
                    B = NaN,
                    L = NaN,
                    R = NaN,
                    E = NaN,
                    V = NaN,
                    O = 0;
                for (l = 0, O = 2; l < d; l++, O += 6) N = _[O], T = _[O + 1], S = _[O + 2], C = _[O + 3],
                    L = 2 * (k = .1875 * (b - 2 * N + S)) + (U = .09375 * (3 * (N - S) - b + (F = _[O + 4]))),
                    R = 2 * (P = .1875 * (A - 2 * T + C)) + (B = .09375 * (3 * (T - C) - A + (w = _[O + 5]))),
                    E = .75 * (N - b) + k + .16666667 * U, V = .75 * (T - A) + P + .16666667 * B, m += Math.sqrt(E * E + V * V),
                    E += L, V += R, L += U, R += B, m += Math.sqrt(E * E + V * V), E += L, V += R, m += Math.sqrt(E * E + V * V),
                    E += L + U, V += R + B, m += Math.sqrt(E * E + V * V), I[l] = m, b = F, A = w;
                if (r && (u *= m), n)
                    for (l = 0; l < a; l++) c[l] *= m;
                var K = this._segments,
                    Y = 0,
                    W = 0;
                for (W = x = y = l = 0; l < a; l++, y += 3)
                    if ((g = u += D = c[l]) < 0) this.addBeforePosition(g, _, 0, p, y);
                    else if (m < g) this.addAfterPosition(g - m, _, o - 4, p, y);
                else {
                    for (;; x++)
                        if (!((M = I[x]) < g)) {
                            0 == x ? g /= M : g = (g - (v = I[x - 1])) / (M - v);
                            break;
                        }
                    if (x != f) {
                        var X = 6 * (f = x);
                        for (b = _[X], A = _[X + 1], N = _[X + 2], T = _[X + 3], S = _[X + 4], C = _[X + 5],
                            L = 2 * (k = .03 * (b - 2 * N + S)) + (U = .006 * (3 * (N - S) - b + (F = _[X + 6]))),
                            R = 2 * (P = .03 * (A - 2 * T + C)) + (B = .006 * (3 * (T - C) - A + (w = _[X + 7]))),
                            E = .3 * (N - b) + k + .16666667 * U, V = .3 * (T - A) + P + .16666667 * B, Y = Math.sqrt(E * E + V * V),
                            K[0] = Y, X = 1; X < 8; X++) E += L, V += R, L += U, R += B, Y += Math.sqrt(E * E + V * V),
                            K[X] = Y;
                        E += L, V += R, Y += Math.sqrt(E * E + V * V), K[8] = Y, E += L + U, V += R + B,
                            Y += Math.sqrt(E * E + V * V), K[9] = Y, W = 0;
                    }
                    for (g *= Y;; W++)
                        if (!((M = K[W]) < g)) {
                            0 == W ? g /= M : g = W + (g - (v = K[W - 1])) / (M - v);
                            break;
                        }
                    this.addCurvePosition(.1 * g, b, A, N, T, S, C, F, w, p, y, s || 0 < l && 0 == D);
                }
                return p;
            }, t.addBeforePosition = function(t, e, i, a, s) {
                var r = e[i],
                    n = e[i + 1],
                    h = e[i + 2] - r,
                    l = e[i + 3] - n,
                    o = Math.atan2(l, h);
                a[s] = r + t * Math.cos(o), a[s + 1] = n + t * Math.sin(o), a[s + 2] = o;
            }, t.addAfterPosition = function(t, e, i, a, s) {
                var r = e[i + 2],
                    n = e[i + 3],
                    h = r - e[i],
                    l = n - e[i + 1],
                    o = Math.atan2(l, h);
                a[s] = r + t * Math.cos(o), a[s + 1] = n + t * Math.sin(o), a[s + 2] = o;
            }, t.addCurvePosition = function(t, e, i, a, s, r, n, h, l, o, u, c) {
                0 == t && (t = 1e-4);
                var _ = t * t,
                    p = _ * t,
                    d = 1 - t,
                    f = d * d,
                    m = f * d,
                    y = d * t,
                    x = 3 * y,
                    g = d * x,
                    D = x * t,
                    v = e * m + a * g + r * D + h * p,
                    M = i * m + s * g + n * D + l * p;
                o[u] = v, o[u + 1] = M, o[u + 2] = c ? Math.atan2(M - (i * f + s * y * 2 + n * _), v - (e * f + a * y * 2 + r * _)) : 0;
            }, k.NONE = -1, k.BEFORE = -2, k.AFTER = -3, i(k, ["_tempMt", function() {
                return this._tempMt = new Ft();
            }]), k;
        }(),
        Kt = function() {
            function t() {
                this.skX = 0, this.skY = 0, this.scX = 1, this.scY = 1, this.x = 0, this.y = 0,
                    this.skewX = 0, this.skewY = 0, this.mMatrix = null;
            }
            a(t, "laya.ani.bone.Transform");
            var e = t.prototype;
            return e.initData = function(t) {
                null != t.x && (this.x = t.x), null != t.y && (this.y = t.y), null != t.skX && (this.skX = t.skX),
                    null != t.skY && (this.skY = t.skY), null != t.scX && (this.scX = t.scX), null != t.scY && (this.scY = t.scY);
            }, e.getMatrix = function() {
                var t;
                return (t = this.mMatrix ? this.mMatrix : this.mMatrix = new Ft()).identity(), t.scale(this.scX, this.scY),
                    (this.skewX || this.skewY) && this.skew(t, this.skewX * Math.PI / 180, this.skewY * Math.PI / 180),
                    t.rotate(this.skX * Math.PI / 180), t.translate(this.x, this.y), t;
            }, e.skew = function(t, e, i) {
                var a = Math.sin(i),
                    s = Math.cos(i),
                    r = Math.sin(e),
                    n = Math.cos(e);
                return t.setTo(t.a * n - t.b * a, t.a * r + t.b * s, t.c * n - t.d * a, t.c * r + t.d * s, t.tx * n - t.ty * a, t.tx * r + t.ty * s),
                    t;
            }, t;
        }(),
        Yt = function() {
            function t() {
                this.time = NaN, this.drawOrder = [];
            }
            return a(t, "laya.ani.bone.DrawOrderData"), t;
        }(),
        A = function() {
            function u() {}
            return a(u, "laya.ani.math.BezierLerp"), u.getBezierRate = function(t, e, i, a, s) {
                var r = u._getBezierParamKey(e, i, a, s),
                    n = 100 * r + t;
                if (u._bezierResultCache[n]) return u._bezierResultCache[n];
                var h, l = u._getBezierPoints(e, i, a, s, r),
                    o = 0;
                for (h = l.length, o = 0; o < h; o += 2)
                    if (t <= l[o]) return u._bezierResultCache[n] = l[o + 1],
                        l[o + 1];
                return u._bezierResultCache[n] = 1;
            }, u._getBezierParamKey = function(t, e, i, a) {
                return 100 * (100 * (100 * (100 * t + e) + i) + a);
            }, u._getBezierPoints = function(t, e, i, a, s) {
                return u._bezierPointsCache[s] ? u._bezierPointsCache[s] : (r = [0, 0, t, e, i, a, 1, 1],
                    n = new h().getBezierPoints(r, 100, 3), u._bezierPointsCache[s] = n);
                var r, n;
            }, u._bezierResultCache = {}, u._bezierPointsCache = {}, u;
        }(),
        Wt = function() {
            function s() {
                this.name = null, this.root = null, this.parentBone = null, this.length = 10, this.transform = null,
                    this.inheritScale = !0, this.inheritRotation = !0, this.rotation = NaN, this.resultRotation = NaN,
                    this.d = -1, this._tempMatrix = null, this._sprite = null, this.resultTransform = new Kt(),
                    this.resultMatrix = new Ft(), this._children = [];
            }
            a(s, "laya.ani.bone.Bone");
            var t = s.prototype;
            return t.setTempMatrix = function(t) {
                this._tempMatrix = t;
                var e, i = 0;
                for (i = 0, e = this._children.length; i < e; i++) this._children[i].setTempMatrix(this._tempMatrix);
            }, t.update = function(t) {
                var e;
                if (this.rotation = this.transform.skX, t) e = this.resultTransform.getMatrix(),
                    Ft.mul(e, t, this.resultMatrix), this.resultRotation = this.rotation;
                else if (this.resultRotation = this.rotation + this.parentBone.resultRotation,
                    this.parentBone)
                    if (this.inheritRotation && this.inheritScale) e = this.resultTransform.getMatrix(),
                        Ft.mul(e, this.parentBone.resultMatrix, this.resultMatrix);
                    else {
                        var i = this.parentBone,
                            a = NaN,
                            s = NaN,
                            r = NaN,
                            n = this.parentBone.resultMatrix;
                        e = this.resultTransform.getMatrix();
                        var h = n.a * e.tx + n.c * e.ty + n.tx,
                            l = n.b * e.tx + n.d * e.ty + n.ty,
                            o = new Ft();
                        this.inheritRotation ? (a = Math.atan2(i.resultMatrix.b, i.resultMatrix.a), s = Math.cos(a),
                                r = Math.sin(a), o.setTo(s, r, -r, s, 0, 0), Ft.mul(this._tempMatrix, o, Ft.TEMP),
                                Ft.TEMP.copyTo(o), e = this.resultTransform.getMatrix(), Ft.mul(e, o, this.resultMatrix),
                                this.resultTransform.scX * this.resultTransform.scY < 0 && this.resultMatrix.rotate(.5 * Math.PI)) : (this.inheritScale,
                                e = this.resultTransform.getMatrix(), Ft.TEMP.identity(), Ft.TEMP.d = this.d, Ft.mul(e, Ft.TEMP, this.resultMatrix)),
                            this.resultMatrix.tx = h, this.resultMatrix.ty = l;
                    }
                else(e = this.resultTransform.getMatrix()).copyTo(this.resultMatrix);
                var u, c = 0;
                for (c = 0, u = this._children.length; c < u; c++) this._children[c].update();
            }, t.updateChild = function() {
                var t, e = 0;
                for (e = 0, t = this._children.length; e < t; e++) this._children[e].update();
            }, t.setRotation = function(t) {
                this._sprite && (this._sprite.rotation = 180 * t / Math.PI);
            }, t.updateDraw = function(t, e) {
                s.ShowBones && !s.ShowBones[this.name] || (this._sprite || (this._sprite = new rt(),
                    this._sprite.graphics.drawCircle(0, 0, 5, "#ff0000"), this._sprite.graphics.drawLine(0, 0, this.length, 0, "#00ff00"),
                    this._sprite.graphics.fillText(this.name, 0, 0, "20px Arial", "#00ff00", "center"),
                    st.stage.addChild(this._sprite)), this._sprite.x = t + this.resultMatrix.tx, this._sprite.y = e + this.resultMatrix.ty);
                var i, a = 0;
                for (a = 0, i = this._children.length; a < i; a++) this._children[a].updateDraw(t, e);
            }, t.addChild = function(t) {
                this._children.push(t), t.parentBone = this;
            }, t.findBone = function(t) {
                if (this.name == t) return this;
                var e, i, a = 0;
                for (a = 0, e = this._children.length; a < e; a++)
                    if (i = this._children[a].findBone(t)) return i;
                return null;
            }, t.localToWorld = function(t) {
                var e = t[0],
                    i = t[1];
                t[0] = e * this.resultMatrix.a + i * this.resultMatrix.c + this.resultMatrix.tx,
                    t[1] = e * this.resultMatrix.b + i * this.resultMatrix.d + this.resultMatrix.ty;
            }, s.ShowBones = {}, s;
        }(),
        Xt = function() {
            function t() {
                this.name = null, this.intValue = 0, this.floatValue = NaN, this.stringValue = null,
                    this.time = NaN;
            }
            return a(t, "laya.ani.bone.EventData"), t;
        }(),
        Gt = function() {
            function t() {
                this.name = null, this.targetBoneName = null, this.bendDirection = 1, this.mix = 1,
                    this.isSpine = !0, this.targetBoneIndex = -1, this.boneNames = [], this.boneIndexs = [];
            }
            return a(t, "laya.ani.bone.IkConstraintData"), t;
        }(),
        N = function(t) {
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
            a(e, "laya.ani.AnimationPlayer", s);
            var i = e.prototype;
            return st.imps(i, {
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
                    var e = this._cacheFrameRateInterval * this._cachePlayRate,
                        i = 0;
                    this._startUpdateLoopCount !== d.loopCount && (i = t * this.playbackRate, this._elapsedPlaybackTime += i);
                    var a = this.playDuration;
                    if (0 !== this._overallDuration && this._elapsedPlaybackTime >= this._overallDuration || 0 === this._overallDuration && this._elapsedPlaybackTime >= a) return this._setPlayParamsWhenStop(a, e),
                        void this.event("stopped");
                    if (i += this._currentTime, 0 < a)
                        if (a <= i)
                            do {
                                if (i -= a, this._stopWhenCircleFinish) return this._setPlayParamsWhenStop(a, e),
                                    this._stopWhenCircleFinish = !1, void this.event("stopped");
                                i < a && (this._setPlayParams(i, e), this.event("complete"));
                            } while (a <= i);
                        else this._setPlayParams(i, e);
                    else {
                        if (this._stopWhenCircleFinish) return this._setPlayParamsWhenStop(a, e), this._stopWhenCircleFinish = !1,
                            void this.event("stopped");
                        this._currentTime = this._currentFrameTime = this._currentKeyframeIndex = 0, this.event("complete");
                    }
                }
            }, i._destroy = function() {
                this.offAll(), this._templet = null, this._destroyed = !0;
            }, i.play = function(t, e, i, a, s) {
                if (void 0 === t && (t = 0), void 0 === e && (e = 1), void 0 === i && (i = 2147483647),
                    void 0 === a && (a = 0), void 0 === s && (s = 0), !this._templet) throw new Error("AnimationPlayer:templet must not be null,maybe you need to set url.");
                if (i < 0 || a < 0 || s < 0) throw new Error("AnimationPlayer:overallDuration,playStart and playEnd must large than zero.");
                if (0 !== s && s < a) throw new Error("AnimationPlayer:start must less than end.");
                this._currentTime = 0, this._currentFrameTime = 0, this._elapsedPlaybackTime = 0,
                    this.playbackRate = e, this._overallDuration = i, this._playStart = a, this._playEnd = s,
                    this._paused = !1, this._currentAnimationClipIndex = t, this._currentKeyframeIndex = 0,
                    this._startUpdateLoopCount = d.loopCount, this.event("played"), this._calculatePlayDuration(),
                    this._update(0);
            }, i.playByFrame = function(t, e, i, a, s, r) {
                void 0 === t && (t = 0), void 0 === e && (e = 1), void 0 === i && (i = 2147483647),
                    void 0 === a && (a = 0), void 0 === s && (s = 0), void 0 === r && (r = 30);
                var n = 1e3 / r;
                this.play(t, e, i, a * n, s * n);
            }, i.stop = function(t) {
                void 0 === t && (t = !0), t ? (this._currentTime = this._currentFrameTime = this._currentKeyframeIndex = 0,
                    this._currentAnimationClipIndex = -1, this.event("stopped")) : this._stopWhenCircleFinish = !0;
            }, i.destroy = function() {}, r(0, i, "playEnd", function() {
                return this._playEnd;
            }), r(0, i, "templet", function() {
                return this._templet;
            }, function(t) {
                0 === !this.state && this.stop(!0), this._templet !== t && (this._templet = t, this._computeFullKeyframeIndices());
            }), r(0, i, "playStart", function() {
                return this._playStart;
            }), r(0, i, "playDuration", function() {
                return this._playDuration;
            }), r(0, i, "state", function() {
                return -1 === this._currentAnimationClipIndex ? 0 : this._paused ? 1 : 2;
            }), r(0, i, "currentKeyframeIndex", function() {
                return this._currentKeyframeIndex;
            }), r(0, i, "overallDuration", function() {
                return this._overallDuration;
            }), r(0, i, "currentFrameTime", function() {
                return this._currentFrameTime;
            }), r(0, i, "currentAnimationClipIndex", function() {
                return this._currentAnimationClipIndex;
            }), r(0, i, "currentPlayTime", function() {
                return this._currentTime + this._playStart;
            }), r(0, i, "cachePlayRate", function() {
                return this._cachePlayRate;
            }, function(t) {
                this._cachePlayRate !== t && (this._cachePlayRate = t, this._templet && this._computeFullKeyframeIndices());
            }), r(0, i, "cacheFrameRate", function() {
                return this._cacheFrameRate;
            }, function(t) {
                this._cacheFrameRate !== t && (this._cacheFrameRate = t, this._cacheFrameRateInterval = 1e3 / this._cacheFrameRate,
                    this._templet && this._computeFullKeyframeIndices());
            }), r(0, i, "currentTime", null, function(t) {
                if (-1 !== this._currentAnimationClipIndex && this._templet) {
                    if (t < this._playStart || t > this._playEnd) throw new Error("AnimationPlayer:value must large than playStartTime,small than playEndTime.");
                    this._startUpdateLoopCount = d.loopCount;
                    var e = this._cacheFrameRateInterval * this._cachePlayRate;
                    this._currentTime = t, this._currentKeyframeIndex = Math.floor(this.currentPlayTime / e),
                        this._currentFrameTime = this._currentKeyframeIndex * e;
                }
            }), r(0, i, "paused", function() {
                return this._paused;
            }, function(t) {
                (this._paused = t) && this.event("paused");
            }), r(0, i, "cacheFrameRateInterval", function() {
                return this._cacheFrameRateInterval;
            }), r(0, i, "destroyed", function() {
                return this._destroyed;
            }), e;
        }(),
        B = function(t) {
            function e() {
                e.__super.call(this);
            }
            return a(e, "laya.ani.GraphicsAni", n), e.prototype.drawSkin = function(t, e) {
                this.drawTriangles(t.texture, 0, 0, t.vertices, t.uvs, t.indexes, t.transform || Ft.EMPTY, e);
            }, e.create = function() {
                return e._caches.pop() || new e();
            }, e.recycle = function(t) {
                t.clear(), e._caches.push(t);
            }, e._caches = [], e;
        }(),
        T = function(t) {
            function e() {
                this.transform = null, e.__super.call(this);
            }
            return a(e, "laya.ani.bone.canvasmesh.SkinMeshForGraphic", x), e.prototype.init2 = function(t, e, i, a) {
                this.transform && (this.transform = null);
                var s = e || [0, 1, 3, 3, 1, 2];
                this.texture = t, m.isWebGL ? (this.indexes = new Uint16Array(s), this.vertices = new Float32Array(i),
                    this.uvs = new Float32Array(a)) : (this.indexes = s, this.vertices = i, this.uvs = a);
            }, e;
        }(),
        P = function(t) {
            function D() {
                this._aniMap = {}, this.unfixedLastAniIndex = -1, this._fullFrames = null, this._boneCurKeyFrm = [],
                    D.__super.call(this), this._anis = new Array();
            }
            a(D, "laya.ani.AnimationTemplet", p);
            var e = D.prototype;
            return e.parse = function(t) {
                var e = new Ct(t);
                this._aniVersion = e.readUTFString(), I.parse(this, e);
            }, e._calculateKeyFrame = function(t, e, i) {
                var a = t.keyFrame;
                a[e] = a[0];
                for (var s = 0; s < e; s++)
                    for (var r = a[s], n = 0; n < i; n++) r.dData[n] = 0 === r.duration ? 0 : (a[s + 1].data[n] - r.data[n]) / r.duration,
                        r.nextData[n] = a[s + 1].data[n];
                a.length--;
            }, e._onAsynLoaded = function(t, e) {
                var i = new Ct(t);
                switch (this._aniVersion = i.readUTFString(), this._aniVersion) {
                    case "LAYAANIMATION:02":
                        M.parse(this, i);
                        break;

                    default:
                        I.parse(this, i);
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
                var s = e[i];
                if (s) {
                    var r = s[t];
                    return r ? r[a] : null;
                }
                return null;
            }, e.setAnimationDataWithCache = function(t, e, i, a, s) {
                var r = e[i] || (e[i] = {});
                (r[t] || (r[t] = []))[a] = s;
            }, e.getNodeKeyFrame = function(t, e, i) {
                var a = this._boneCurKeyFrm[e],
                    s = t.length;
                (null == a || s <= a) && (a = this._boneCurKeyFrm[e] = 0);
                var r = t[a],
                    n = i - r.startTime;
                if (0 == n || 0 < n && r.duration > n) return a;
                var h = 0;
                if (0 < n) {
                    for (i += .01, h = a + 1; h < s; h++)
                        if ((r = t[h]).startTime <= i && r.startTime + r.duration > i) return this._boneCurKeyFrm[e] = h;
                    return s - 1;
                }
                for (h = 0; h < a; h++)
                    if ((r = t[h]).startTime <= i && r.startTime + r.duration > i) return this._boneCurKeyFrm[e] = h;
                return a;
            }, e.getOriginalData = function(t, e, i, a, s) {
                var r = this._anis[t].nodes,
                    n = this._boneCurKeyFrm;
                n.length < r.length && (n.length = r.length);
                for (var h = 0, l = 0, o = r.length, u = 0; l < o; l++) {
                    var c, _ = r[l],
                        p = _.keyFrame;
                    c = p[this.getNodeKeyFrame(p, l, s)], _.dataOffset = u;
                    var d = s - c.startTime,
                        f = _.lerpType;
                    if (f) switch (f) {
                        case 0:
                        case 1:
                            for (h = 0; h < _.keyframeWidth;) h += _.interpolationMethod[h](_, h, e, u + h, c.data, d, c.dData, c.duration, c.nextData);
                            break;

                        case 2:
                            var m = c.interpolationData,
                                y = m.length,
                                x = 0;
                            for (h = 0; h < y;) {
                                var g = m[h];
                                switch (g) {
                                    case 6:
                                    case 7:
                                        h += D.interpolation[g](_, x, e, u + x, c.data, d, c.dData, c.duration, c.nextData, m, h + 1);
                                        break;

                                    default:
                                        h += D.interpolation[g](_, x, e, u + x, c.data, d, c.dData, c.duration, c.nextData);
                                }
                                x++;
                            }
                    } else
                        for (h = 0; h < _.keyframeWidth;) h += _.interpolationMethod[h](_, h, e, u + h, c.data, d, c.dData, c.duration, c.nextData);
                    u += _.keyframeWidth;
                }
            }, e.getNodesCurrentFrameIndex = function(t, e) {
                var i = this._anis[t].nodes;
                t !== this.unfixedLastAniIndex && (this.unfixedCurrentFrameIndexes = new Uint32Array(i.length),
                    this.unfixedCurrentTimes = new Float32Array(i.length), this.unfixedLastAniIndex = t);
                for (var a = 0, s = i.length; a < s; a++) {
                    var r = i[a];
                    for (e < this.unfixedCurrentTimes[a] && (this.unfixedCurrentFrameIndexes[a] = 0),
                        this.unfixedCurrentTimes[a] = e; this.unfixedCurrentFrameIndexes[a] < r.keyFrame.length && !(r.keyFrame[this.unfixedCurrentFrameIndexes[a]].startTime > this.unfixedCurrentTimes[a]);) this.unfixedCurrentFrameIndexes[a]++;
                    this.unfixedCurrentFrameIndexes[a]--;
                }
                return this.unfixedCurrentFrameIndexes;
            }, e.getOriginalDataUnfixedRate = function(t, e, i) {
                var a = this._anis[t].nodes;
                t !== this.unfixedLastAniIndex && (this.unfixedCurrentFrameIndexes = new Uint32Array(a.length),
                    this.unfixedCurrentTimes = new Float32Array(a.length), this.unfixedKeyframes = f(a.length),
                    this.unfixedLastAniIndex = t);
                for (var s = 0, r = 0, n = a.length, h = 0; r < n; r++) {
                    var l = a[r];
                    for (i < this.unfixedCurrentTimes[r] && (this.unfixedCurrentFrameIndexes[r] = 0),
                        this.unfixedCurrentTimes[r] = i; this.unfixedCurrentFrameIndexes[r] < l.keyFrame.length && !(l.keyFrame[this.unfixedCurrentFrameIndexes[r]].startTime > this.unfixedCurrentTimes[r]);) this.unfixedKeyframes[r] = l.keyFrame[this.unfixedCurrentFrameIndexes[r]],
                        this.unfixedCurrentFrameIndexes[r]++;
                    var o = this.unfixedKeyframes[r];
                    l.dataOffset = h;
                    var u = i - o.startTime;
                    if (l.lerpType) switch (l.lerpType) {
                        case 0:
                        case 1:
                            for (s = 0; s < l.keyframeWidth;) s += l.interpolationMethod[s](l, s, e, h + s, o.data, u, o.dData, o.duration, o.nextData);
                            break;

                        case 2:
                            var c = o.interpolationData,
                                _ = c.length,
                                p = 0;
                            for (s = 0; s < _;) {
                                var d = c[s];
                                switch (d) {
                                    case 6:
                                    case 7:
                                        s += D.interpolation[d](l, p, e, h + p, o.data, u, o.dData, o.duration, o.nextData, c, s + 1);
                                        break;

                                    default:
                                        s += D.interpolation[d](l, p, e, h + p, o.data, u, o.dData, o.duration, o.nextData);
                                }
                                p++;
                            }
                    } else
                        for (s = 0; s < l.keyframeWidth;) s += l.interpolationMethod[s](l, s, e, h + s, o.data, u, o.dData, o.duration, o.nextData);
                    h += l.keyframeWidth;
                }
            }, D.interpolation = [D._LinearInterpolation_0 = function(t, e, i, a, s, r, n, h, l, o) {
                return i[a] = s[e] + r * n[e], 1;
            }, D._QuaternionInterpolation_1 = function(t, e, i, a, s, r, n, h, l, o) {
                var u = 0 === h ? 0 : r / h;
                return _.slerpQuaternionArray(s, e, l, e, u, i, a), 4;
            }, D._AngleInterpolation_2 = function(t, e, i, a, s, r, n, h, l, o) {
                return 0;
            }, D._RadiansInterpolation_3 = function(t, e, i, a, s, r, n, h, l, o) {
                return 0;
            }, D._Matrix4x4Interpolation_4 = function(t, e, i, a, s, r, n, h, l, o) {
                for (var u = 0; u < 16; u++, e++) i[a + u] = s[e] + r * n[e];
                return 16;
            }, D._NoInterpolation_5 = function(t, e, i, a, s, r, n, h, l, o) {
                return i[a] = s[e], 1;
            }, D._BezierInterpolation_6 = function(t, e, i, a, s, r, n, h, l, o, u) {
                return void 0 === u && (u = 0), i[a] = s[e] + (l[e] - s[e]) * A.getBezierRate(r / h, o[u], o[u + 1], o[u + 2], o[u + 3]),
                    5;
            }, D._BezierInterpolation_7 = function(t, e, i, a, s, r, n, h, l, o, u) {
                return void 0 === u && (u = 0), i[a] = o[u + 4] + o[u + 5] * A.getBezierRate((.001 * r + o[u + 6]) / o[u + 7], o[u], o[u + 1], o[u + 2], o[u + 3]),
                    9;
            }], D;
        }(),
        S = (function(e) {
            function f(t) {
                this._start = 0, this._Pos = 0, this._data = null, this._curIndex = 0, this._preIndex = 0,
                    this._playIndex = 0, this._playing = !1, this._ended = !0, this._count = 0, this._ids = null,
                    this._loadedImage = {}, this._idOfSprite = null, this._parentMovieClip = null, this._movieClipList = null,
                    this._labels = null, this.basePath = null, this._atlasPath = null, this._url = null,
                    this._isRoot = !1, this._completeHandler = null, this._endFrame = -1, this.interval = 30,
                    this.loop = !1, f.__super.call(this), this._ids = {}, this._idOfSprite = [], this._reset(),
                    this._playing = !1, (this._parentMovieClip = t) ? (this._isRoot = !1, this._movieClipList = t._movieClipList,
                        this._movieClipList.push(this)) : (this._movieClipList = [this], this._isRoot = !0,
                        this._setBitUp(16));
            }
            a(f, "laya.ani.swf.MovieClip", e);
            var t = f.prototype;
            t.destroy = function(t) {
                void 0 === t && (t = !0), this._clear(), e.prototype.destroy.call(this, t);
            }, t._setDisplay = function(t) {
                e.prototype._setDisplay.call(this, t), this._isRoot && this._$3__onDisplay(t);
            }, t._$3__onDisplay = function(t) {
                t ? this.timer.loop(this.interval, this, this.updates, null, !0) : this.timer.clear(this, this.updates);
            }, t.updates = function() {
                if (!this._parentMovieClip) {
                    var t, e = 0;
                    for (t = this._movieClipList.length, e = 0; e < t; e++) this._movieClipList[e] && this._movieClipList[e]._update();
                }
            }, t.addLabel = function(t, e) {
                this._labels || (this._labels = {}), this._labels[e] = t;
            }, t.removeLabel = function(t) {
                if (t) {
                    if (!this._labels)
                        for (var e in this._labels)
                            if (this._labels[e] === t) {
                                delete this._labels[e];
                                break;
                            }
                } else this._labels = null;
            }, t._update = function() {
                if (this._data && this._playing) {
                    if (this._playIndex++, this._playIndex >= this._count) {
                        if (!this.loop) return this._playIndex--, void this.stop();
                        this._playIndex = 0;
                    }
                    if (this._parseFrame(this._playIndex), this._labels && this._labels[this._playIndex] && this.event("label", this._labels[this._playIndex]), -1 != this._endFrame && this._endFrame == this._playIndex) {
                        if (this._endFrame = -1, null != this._completeHandler) {
                            var t = this._completeHandler;
                            this._completeHandler = null, t.run();
                        }
                        this.stop();
                    }
                }
            }, t.stop = function() {
                this._playing = !1;
            }, t.gotoAndStop = function(t) {
                this.index = t, this.stop();
            }, t._clear = function() {
                if (this.stop(), this._idOfSprite.length = 0, !this._parentMovieClip) {
                    this.timer.clear(this, this.updates);
                    var t, e = 0;
                    for (t = this._movieClipList.length, e = 0; e < t; e++) this._movieClipList[e] != this && this._movieClipList[e]._clear();
                    this._movieClipList.length = 0;
                }
                var i;
                for (i in this._atlasPath && l.clearRes(this._atlasPath), this._loadedImage) this._loadedImage[i] && (l.clearRes(i),
                    this._loadedImage[i] = !1);
                this.removeChildren(), this.graphics = null, this._parentMovieClip = null;
            }, t.play = function(t, e) {
                void 0 === t && (t = 0), void 0 === e && (e = !0), this.loop = e, this._playing = !0,
                    this._data && this._displayFrame(t);
            }, t._displayFrame = function(t) {
                void 0 === t && (t = -1), -1 != t && (this._curIndex > t && this._reset(), this._parseFrame(t));
            }, t._reset = function(t) {
                void 0 === t && (t = !0), t && 1 != this._curIndex && this.removeChildren(), this._preIndex = this._curIndex = -1,
                    this._Pos = this._start;
            }, t._parseFrame = function(t) {
                var e, i, a, s = 0,
                    r = 0,
                    n = 0,
                    h = !1,
                    l = this._idOfSprite,
                    o = this._data;
                for (this._ended && this._reset(), o.pos = this._Pos, this._ended = !1, this._playIndex = t,
                    this._curIndex > t && t < this._preIndex && (this._reset(!0), o.pos = this._Pos); this._curIndex <= t && !this._ended;) switch (o.getUint16()) {
                    case 12:
                        if (s = o.getUint16(), r = this._ids[o.getUint16()], this._Pos = o.pos, o.pos = r,
                            0 == (n = o.getUint8())) {
                            var u = o.getUint16();
                            if (!(i = l[s])) {
                                i = l[s] = new rt();
                                var c = new rt();
                                c.loadImage(this.basePath + u + ".png"), this._loadedImage[this.basePath + u + ".png"] = !0,
                                    i.addChild(c), c.size(o.getFloat32(), o.getFloat32());
                                var _ = o._getMatrix();
                                c.transform = _;
                            }
                            i.alpha = 1;
                        } else 1 == n && ((e = l[s]) || (l[s] = e = new f(this), e.interval = this.interval,
                            e._ids = this._ids, e.basePath = this.basePath, e._setData(o, r), e._initState(),
                            e.play(0)), e.alpha = 1);
                        o.pos = this._Pos;
                        break;

                    case 3:
                        var p = l[o.getUint16()];
                        p && (this.addChild(p), p.zOrder = o.getUint16(), h = !0);
                        break;

                    case 4:
                        (p = l[o.getUint16()]) && p.removeSelf();
                        break;

                    case 5:
                        l[o.getUint16()][f._ValueList[o.getUint16()]] = o.getFloat32();
                        break;

                    case 6:
                        l[o.getUint16()].visible = 0 < o.getUint8();
                        break;

                    case 7:
                        var d = (i = l[o.getUint16()]).transform || Ft.create();
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
            }, t._setData = function(t, e) {
                this._data = t, this._start = e + 3;
            }, t.load = function(t, e, i) {
                var a;
                void 0 === e && (e = !1), this._url = t, e && (this._atlasPath = i || t.split(".swf")[0] + ".json"),
                    this.stop(), this._clear(), this._movieClipList = [this], a = [{
                        url: t,
                        type: "arraybuffer"
                    }], this._atlasPath && a.push({
                        url: this._atlasPath,
                        type: "atlas"
                    }), st.loader.load(a, o.create(this, this._onLoaded));
            }, t._onLoaded = function() {
                var t;
                (t = l.getRes(this._url)) ? !this._atlasPath || l.getAtlas(this._atlasPath) ? (this.basePath = this._atlasPath ? l.getAtlas(this._atlasPath).dir : this._url.split(".swf")[0] + "/image/",
                    this._initData(t)) : this.event("error", "Atlas not find"): this.event("error", "file not find");
            }, t._initState = function() {
                this._reset(), this._ended = !1;
                var t = this._playing;
                for (this._playing = !1, this._curIndex = 0; !this._ended;) this._parseFrame(++this._curIndex);
                this._playing = t;
            }, t._initData = function(t) {
                this._data = new Ct(t);
                var e = 0,
                    i = this._data.getUint16();
                for (e = 0; e < i; e++) this._ids[this._data.getInt16()] = this._data.getInt32();
                this.interval = 1e3 / this._data.getUint16(), this._setData(this._data, this._ids[32767]),
                    this._initState(), this.play(0), this.event("loaded"), this._parentMovieClip || this.timer.loop(this.interval, this, this.updates, null, !0);
            }, t.playTo = function(t, e, i) {
                this._completeHandler = i, this._endFrame = e, this.play(t, !1);
            }, r(0, t, "index", function() {
                return this._playIndex;
            }, function(t) {
                this._playIndex = t, this._data && this._displayFrame(this._playIndex), this._labels && this._labels[t] && this.event("label", this._labels[t]);
            }), r(0, t, "count", function() {
                return this._count;
            }), r(0, t, "playing", function() {
                return this._playing;
            }), r(0, t, "url", null, function(t) {
                this.load(t);
            }), f._ValueList = ["x", "y", "width", "height", "scaleX", "scaleY", "rotation", "alpha"];
        }(rt), function(e) {
            function i(t, e) {
                this._templet = null, this._player = null, this._curOriginalData = null, this._boneMatrixArray = [],
                    this._lastTime = 0, this._currAniName = null, this._currAniIndex = -1, this._pause = !0,
                    this._aniClipIndex = -1, this._clipIndex = -1, this._skinIndex = 0, this._skinName = "default",
                    this._aniMode = 0, this._graphicsCache = null, this._boneSlotDic = null, this._bindBoneBoneSlotDic = null,
                    this._boneSlotArray = null, this._index = -1, this._total = -1, this._indexControl = !1,
                    this._aniPath = null, this._texturePath = null, this._complete = null, this._loadAniMode = 0,
                    this._yReverseMatrix = null, this._ikArr = null, this._tfArr = null, this._pathDic = null,
                    this._rootBone = null, this._boneList = null, this._aniSectionDic = null, this._eventIndex = 0,
                    this._drawOrderIndex = 0, this._drawOrder = null, this._lastAniClipIndex = -1, this._lastUpdateAniClipIndex = -1,
                    i.__super.call(this), void 0 === e && (e = 0), t && this.init(t, e);
            }
            a(i, "laya.ani.bone.Skeleton", e);
            var t = i.prototype;
            return t.init = function(t, e) {
                void 0 === e && (e = 0);
                var i, a, s, r = 0,
                    n = 0;
                if (1 == e)
                    for (this._graphicsCache = [], r = 0, n = t.getAnimationCount(); r < n; r++) this._graphicsCache.push([]);
                if (this._yReverseMatrix = t.yReverseMatrix, this._aniMode = e, this._templet = t,
                    this._player = new N(), this._player.cacheFrameRate = t.rate, this._player.templet = t,
                    this._player.play(), this._parseSrcBoneMatrix(), this._boneList = t.mBoneArr, this._rootBone = t.mRootBone,
                    this._aniSectionDic = t.aniSectionDic, 0 < t.ikArr.length)
                    for (this._ikArr = [],
                        r = 0, n = t.ikArr.length; r < n; r++) this._ikArr.push(new D(t.ikArr[r], this._boneList));
                if (0 < t.pathArr.length)
                    for (null == this._pathDic && (this._pathDic = {}), r = 0,
                        n = t.pathArr.length; r < n; r++) i = t.pathArr[r], a = new b(i, this._boneList),
                        (s = this._boneSlotDic[i.name]) && ((a = new b(i, this._boneList)).target = s),
                        this._pathDic[i.name] = a;
                if (0 < t.tfArr.length)
                    for (this._tfArr = [], r = 0, n = t.tfArr.length; r < n; r++) this._tfArr.push(new g(t.tfArr[r], this._boneList));
                if (0 < t.skinDataArray.length) {
                    var h = this._templet.skinDataArray[this._skinIndex];
                    this._skinName = h.name;
                }
                this._player.on("played", this, this._onPlay), this._player.on("stopped", this, this._onStop),
                    this._player.on("paused", this, this._onPause);
            }, t.load = function(t, e, i) {
                void 0 === i && (i = 0), this._aniPath = t, this._complete = e, this._loadAniMode = i,
                    st.loader.load([{
                        url: t,
                        type: "arraybuffer"
                    }], o.create(this, this._onLoaded));
            }, t._onLoaded = function() {
                var t, e = l.getRes(this._aniPath);
                null != e && (null == C.TEMPLET_DICTIONARY && (C.TEMPLET_DICTIONARY = {}), (t = C.TEMPLET_DICTIONARY[this._aniPath]) ? t.isParseFail ? this._parseFail() : t.isParserComplete ? this._parseComplete() : (t.on("complete", this, this._parseComplete),
                    t.on("error", this, this._parseFail)) : ((t = new C())._setCreateURL(this._aniPath),
                    (C.TEMPLET_DICTIONARY[this._aniPath] = t).on("complete", this, this._parseComplete),
                    t.on("error", this, this._parseFail), t.isParserComplete = !1, t.parseData(null, e)));
            }, t._parseComplete = function() {
                var t = C.TEMPLET_DICTIONARY[this._aniPath];
                t && (this.init(t, this._loadAniMode), this.play(0, !0)), this._complete && this._complete.runWith(this);
            }, t._parseFail = function() {
                console.log("[Error]:" + this._aniPath + "解析失败");
            }, t._onPlay = function() {
                this.event("played");
            }, t._onStop = function() {
                var t, e = this._templet.eventAniArr[this._aniClipIndex];
                if (e && this._eventIndex < e.length)
                    for (; this._eventIndex < e.length; this._eventIndex++)(t = e[this._eventIndex]).time >= this._player.playStart && t.time <= this._player.playEnd && this.event("label", t);
                this._drawOrder = null, this.event("stopped");
            }, t._onPause = function() {
                this.event("paused");
            }, t._parseSrcBoneMatrix = function() {
                var t = 0,
                    e = 0;
                for (e = this._templet.srcBoneMatrixArr.length, t = 0; t < e; t++) this._boneMatrixArray.push(new Ft());
                if (0 == this._aniMode) this._boneSlotDic = this._templet.boneSlotDic, this._bindBoneBoneSlotDic = this._templet.bindBoneBoneSlotDic,
                    this._boneSlotArray = this._templet.boneSlotArray;
                else {
                    null == this._boneSlotDic && (this._boneSlotDic = {}), null == this._bindBoneBoneSlotDic && (this._bindBoneBoneSlotDic = {}),
                        null == this._boneSlotArray && (this._boneSlotArray = []);
                    var i, a, s = this._templet.boneSlotArray;
                    for (t = 0, e = s.length; t < e; t++) i = s[t], null == (a = this._bindBoneBoneSlotDic[i.parent]) && (this._bindBoneBoneSlotDic[i.parent] = a = []),
                        this._boneSlotDic[i.name] = i = i.copy(), a.push(i), this._boneSlotArray.push(i);
                }
            }, t._emitMissedEvents = function(t, e, i) {
                void 0 === i && (i = 0);
                var a = this._templet.eventAniArr[this._player.currentAnimationClipIndex];
                if (a) {
                    var s, r, n = 0;
                    for (s = a.length, n = i; n < s; n++)(r = a[n]).time >= this._player.playStart && r.time <= this._player.playEnd && this.event("label", r);
                }
            }, t._update = function(t) {
                if (void 0 === t && (t = !0), !(this._pause || t && this._indexControl)) {
                    var e = this.timer.currTimer,
                        i = this._player.currentKeyframeIndex,
                        a = e - this._lastTime;
                    if (t ? this._player._update(a) : i = -1, this._lastTime = e, this._player && (this._index = this._clipIndex = this._player.currentKeyframeIndex, !(this._index < 0 || 0 < a && this._clipIndex == i && this._lastUpdateAniClipIndex == this._aniClipIndex))) {
                        this._lastUpdateAniClipIndex = this._aniClipIndex, i > this._clipIndex && 0 != this._eventIndex && (this._emitMissedEvents(this._player.playStart, this._player.playEnd, this._eventIndex),
                            this._eventIndex = 0);
                        var s, r = this._templet.eventAniArr[this._aniClipIndex];
                        if (r && this._eventIndex < r.length) {
                            var n = r[this._eventIndex];
                            n.time >= this._player.playStart && n.time <= this._player.playEnd ? this._player.currentPlayTime >= n.time && (this.event("label", n),
                                this._eventIndex++) : this._eventIndex++;
                        }
                        if (0 == this._aniMode) {
                            if (s = this._templet.getGrahicsDataWithCache(this._aniClipIndex, this._clipIndex)) return void(this.graphics != s && (this.graphics = s));
                            if (this._createGraphics(), s = this._templet.getGrahicsDataWithCache(this._aniClipIndex, this._clipIndex)) return void(this.graphics != s && (this.graphics = s));
                        } else if (1 == this._aniMode) {
                            if (s = this._getGrahicsDataWithCache(this._aniClipIndex, this._clipIndex)) return void(this.graphics != s && (this.graphics = s));
                            this._createGraphics();
                        }
                        this._createGraphics();
                    }
                }
            }, t._createGraphics = function(t) {
                void 0 === t && (t = -1), -1 == t && (t = this._clipIndex);
                var e, i = t * this._player.cacheFrameRateInterval,
                    a = this._templet.drawOrderAniArr[this._aniClipIndex];
                if (a && 0 < a.length)
                    for (this._drawOrderIndex = 0, e = a[this._drawOrderIndex]; i >= e.time && (this._drawOrder = e.drawOrder,
                            this._drawOrderIndex++, !(this._drawOrderIndex >= a.length));) e = a[this._drawOrderIndex];
                0 == this._aniMode || 1 == this._aniMode ? this.graphics = B.create() : this.graphics instanceof laya.ani.GraphicsAni ? this.graphics.clear() : this.graphics = B.create();
                var s = this.graphics,
                    r = this._templet.getNodes(this._aniClipIndex);
                this._templet.getOriginalData(this._aniClipIndex, this._curOriginalData, null, t, this._player._elapsedPlaybackTime);
                var n, h, l, o, u = this._aniSectionDic[this._aniClipIndex],
                    c = 0,
                    _ = 0,
                    p = 0,
                    d = 0,
                    f = 0,
                    m = this._templet.srcBoneMatrixArr.length,
                    y = this._curOriginalData;
                for (f = u[_ = 0]; _ < m; _++) {
                    var x = (o = this._boneList[_]).resultTransform;
                    l = this._templet.srcBoneMatrixArr[_], x.scX = l.scX * y[c++], x.skX = l.skX + y[c++],
                        x.skY = l.skY + y[c++], x.scY = l.scY * y[c++], x.x = l.x + y[c++], x.y = l.y + y[c++],
                        8 === this._templet.tMatrixDataLen && (x.skewX = l.skewX + y[c++], x.skewY = l.skewY + y[c++]);
                }
                var g, D = {},
                    v = {};
                for (f += u[1]; _ < f; _++) D[(g = r[_]).name] = y[c++], v[g.name] = y[c++], c += 4;
                var M, I, b = {},
                    A = {};
                for (f += u[2]; _ < f; _++) b[(g = r[_]).name] = y[c++], A[g.name] = y[c++], c += 4;
                if (this._pathDic)
                    for (f += u[3]; _ < f; _++) {
                        if (g = r[_], M = this._pathDic[g.name]) switch (new Ct(g.extenData).getByte()) {
                            case 1:
                                M.position = y[c++];
                                break;

                            case 2:
                                M.spacing = y[c++];
                                break;

                            case 3:
                                M.rotateMix = y[c++], M.translateMix = y[c++];
                        }
                    }
                if (this._rootBone.update(this._yReverseMatrix || Ft.TEMP.identity()), this._ikArr)
                    for (_ = 0,
                        f = this._ikArr.length; _ < f; _++) I = this._ikArr[_], b.hasOwnProperty(I.name) && (I.bendDirection = b[I.name]),
                        A.hasOwnProperty(I.name) && (I.mix = A[I.name]), I.apply();
                if (this._pathDic)
                    for (var N in this._pathDic)(M = this._pathDic[N]).apply(this._boneList, s);
                if (this._tfArr)
                    for (_ = 0, d = this._tfArr.length; _ < d; _++) this._tfArr[_].apply();
                for (_ = 0, d = this._boneList.length; _ < d; _++)
                    if (o = this._boneList[_], h = this._bindBoneBoneSlotDic[o.name],
                        o.resultMatrix.copyTo(this._boneMatrixArray[_]), h)
                        for (p = 0, f = h.length; p < f; p++)(n = h[p]) && n.setParentMatrix(o.resultMatrix);
                var T, S, C, F, w = {},
                    k = this._templet.deformAniArr;
                if (k && 0 < k.length) {
                    if (this._lastAniClipIndex != this._aniClipIndex)
                        for (this._lastAniClipIndex = this._aniClipIndex,
                            _ = 0, f = this._boneSlotArray.length; _ < f; _++)(n = this._boneSlotArray[_]).deformData = null;
                    var P, U = k[this._aniClipIndex];
                    for (P in T = U.default, this._setDeform(T, w, this._boneSlotArray, i), U) "default" != P && P != this._skinName && (T = U[P],
                        this._setDeform(T, w, this._boneSlotArray, i));
                    T = U[this._skinName], this._setDeform(T, w, this._boneSlotArray, i);
                }
                if (this._drawOrder)
                    for (_ = 0, f = this._drawOrder.length; _ < f; _++) S = D[(n = this._boneSlotArray[this._drawOrder[_]]).name],
                        C = v[n.name], isNaN(C), isNaN(S) || -2 == S || (this._templet.attachmentNames ? n.showDisplayByName(this._templet.attachmentNames[S]) : n.showDisplayByIndex(S)),
                        w[this._drawOrder[_]] ? (F = w[this._drawOrder[_]], n.currDisplayData && F[n.currDisplayData.attachmentName] ? n.deformData = F[n.currDisplayData.attachmentName] : n.deformData = null) : n.deformData = null,
                        isNaN(C) ? n.draw(s, this._boneMatrixArray, 2 == this._aniMode) : n.draw(s, this._boneMatrixArray, 2 == this._aniMode, C),
                        isNaN(C);
                else
                    for (_ = 0, f = this._boneSlotArray.length; _ < f; _++) S = D[(n = this._boneSlotArray[_]).name],
                        C = v[n.name], isNaN(C), isNaN(S) || -2 == S || (this._templet.attachmentNames ? n.showDisplayByName(this._templet.attachmentNames[S]) : n.showDisplayByIndex(S)),
                        w[_] ? (F = w[_], n.currDisplayData && F[n.currDisplayData.attachmentName] ? n.deformData = F[n.currDisplayData.attachmentName] : n.deformData = null) : n.deformData = null,
                        isNaN(C) ? n.draw(s, this._boneMatrixArray, 2 == this._aniMode) : n.draw(s, this._boneMatrixArray, 2 == this._aniMode, C),
                        isNaN(C);
                0 == this._aniMode ? (this._templet.setGrahicsDataWithCache(this._aniClipIndex, t, s),
                    this._checkIsAllParsed(this._aniClipIndex)) : 1 == this._aniMode && this._setGrahicsDataWithCache(this._aniClipIndex, t, s);
            }, t._checkIsAllParsed = function(t) {
                var e, i = 0;
                for (e = Math.floor(.01 + this._templet.getAniDuration(t) / 1e3 * this._player.cacheFrameRate),
                    i = 0; i < e; i++)
                    if (!this._templet.getGrahicsDataWithCache(t, i)) return;
                this._templet.getGrahicsDataWithCache(t, e) ? this._templet.deleteAniData(t) : this._createGraphics(e);
            }, t._setDeform = function(t, e, i, a) {
                if (t) {
                    var s, r, n, h = 0,
                        l = 0,
                        o = 0;
                    if (t)
                        for (h = 0, l = t.deformSlotDataList.length; h < l; h++)
                            for (s = t.deformSlotDataList[h],
                                o = 0; o < s.deformSlotDisplayList.length; o++) n = i[(r = s.deformSlotDisplayList[o]).slotIndex],
                                r.apply(a, n), e[r.slotIndex] || (e[r.slotIndex] = {}), e[r.slotIndex][r.attachment] = r.deformData;
                }
            }, t.getAnimNum = function() {
                return this._templet.getAnimationCount();
            }, t.getAniNameByIndex = function(t) {
                return this._templet.getAniNameByIndex(t);
            }, t.getSlotByName = function(t) {
                return this._boneSlotDic[t];
            }, t.showSkinByName = function(t, e) {
                void 0 === e && (e = !0), this.showSkinByIndex(this._templet.getSkinIndexByName(t), e);
            }, t.showSkinByIndex = function(t, e) {
                void 0 === e && (e = !0);
                for (var i = 0; i < this._boneSlotArray.length; i++) this._boneSlotArray[i].showSlotData(null, e);
                if (this._templet.showSkinByIndex(this._boneSlotDic, t, e)) {
                    var a = this._templet.skinDataArray[t];
                    this._skinIndex = t, this._skinName = a.name;
                }
                this._clearCache();
            }, t.showSlotSkinByIndex = function(t, e) {
                if (0 != this._aniMode) {
                    var i = this.getSlotByName(t);
                    i && i.showDisplayByIndex(e), this._clearCache();
                }
            }, t.showSlotSkinByName = function(t, e) {
                if (0 != this._aniMode) {
                    var i = this.getSlotByName(t);
                    i && i.showDisplayByName(e), this._clearCache();
                }
            }, t.replaceSlotSkinName = function(t, e, i) {
                if (0 != this._aniMode) {
                    var a = this.getSlotByName(t);
                    a && a.replaceDisplayByName(e, i), this._clearCache();
                }
            }, t.replaceSlotSkinByIndex = function(t, e, i) {
                if (0 != this._aniMode) {
                    var a = this.getSlotByName(t);
                    a && a.replaceDisplayByIndex(e, i), this._clearCache();
                }
            }, t.setSlotSkin = function(t, e) {
                if (0 != this._aniMode) {
                    var i = this.getSlotByName(t);
                    i && i.replaceSkin(e), this._clearCache();
                }
            }, t._clearCache = function() {
                if (1 == this._aniMode)
                    for (var t = 0, e = this._graphicsCache.length; t < e; t++) {
                        for (var i = 0, a = this._graphicsCache[t].length; i < a; i++) {
                            var s = this._graphicsCache[t][i];
                            s && s != this.graphics && B.recycle(s);
                        }
                        this._graphicsCache[t].length = 0;
                    }
            }, t.play = function(t, e, i, a, s, r) {
                void 0 === i && (i = !0), void 0 === a && (a = 0), void 0 === s && (s = 0), void 0 === r && (r = !0),
                    this._indexControl = !1;
                var n = -1,
                    h = NaN;
                if (h = e ? 2147483647 : 0, "string" == typeof t)
                    for (var l = 0, o = this._templet.getAnimationCount(); l < o; l++) {
                        var u = this._templet.getAnimation(l);
                        if (u && t == u.name) {
                            n = l;
                            break;
                        }
                    } else n = t; -
                1 < n && n < this.getAnimNum() && (this._aniClipIndex = n, (i || this._pause || this._currAniIndex != n) && (this._currAniIndex = n,
                    this._curOriginalData = new Float32Array(this._templet.getTotalkeyframesLength(n)),
                    this._drawOrder = null, this._eventIndex = 0, this._player.play(n, this._player.playbackRate, h, a, s),
                    r && this._templet.showSkinByIndex(this._boneSlotDic, this._skinIndex), this._pause && (this._pause = !1,
                        this._lastTime = c.now(), this.timer.frameLoop(1, this, this._update, null, !0)),
                    this._update()));
            }, t.stop = function() {
                this._pause || (this._pause = !0, this._player && this._player.stop(!0), this.timer.clear(this, this._update));
            }, t.playbackRate = function(t) {
                this._player && (this._player.playbackRate = t);
            }, t.paused = function() {
                this._pause || (this._pause = !0, this._player && (this._player.paused = !0), this.timer.clear(this, this._update));
            }, t.resume = function() {
                this._indexControl = !1, this._pause && (this._pause = !1, this._player && (this._player.paused = !1),
                    this._lastTime = c.now(), this.timer.frameLoop(1, this, this._update, null, !0));
            }, t._getGrahicsDataWithCache = function(t, e) {
                return this._graphicsCache[t][e];
            }, t._setGrahicsDataWithCache = function(t, e, i) {
                this._graphicsCache[t][e] = i;
            }, t.destroy = function(t) {
                void 0 === t && (t = !0), e.prototype.destroy.call(this, t), this._templet = null,
                    this._player && this._player.offAll(), this._player = null, this._curOriginalData = null,
                    this._boneMatrixArray.length = 0, this._lastTime = 0, this.timer.clear(this, this._update);
            }, r(0, t, "url", function() {
                return this._aniPath;
            }, function(t) {
                this.load(t);
            }), r(0, t, "index", function() {
                return this._index;
            }, function(t) {
                this.player && (this._index = t, this._player.currentTime = 1e3 * this._index / this._player.cacheFrameRate,
                    this._indexControl = !0, this._update(!1));
            }), r(0, t, "total", function() {
                return this._templet && this._player ? this._total = Math.floor(this._templet.getAniDuration(this._player.currentAnimationClipIndex) / 1e3 * this._player.cacheFrameRate) : this._total = -1,
                    this._total;
            }), r(0, t, "templet", function() {
                return this._templet;
            }), r(0, t, "player", function() {
                return this._player;
            }), i.useSimpleMeshInCanvas = !1, i;
        }(rt)),
        C = function(e) {
            function s() {
                this._mainTexture = null, this._textureJson = null, this._graphicsCache = [], this.srcBoneMatrixArr = [],
                    this.ikArr = [], this.tfArr = [], this.pathArr = [], this.boneSlotDic = {}, this.bindBoneBoneSlotDic = {},
                    this.boneSlotArray = [], this.skinDataArray = [], this.skinDic = {}, this.subTextureDic = {},
                    this.isParseFail = !1, this.yReverseMatrix = null, this.drawOrderAniArr = [], this.eventAniArr = [],
                    this.attachmentNames = null, this.deformAniArr = [], this._isDestroyed = !1, this._rate = 30,
                    this.isParserComplete = !1, this.aniSectionDic = {}, this._skBufferUrl = null, this._textureDic = {},
                    this._loadList = null, this._path = null, this._relativeUrl = null, this.tMatrixDataLen = 0,
                    this.mRootBone = null, s.__super.call(this), this.skinSlotDisplayDataArr = [], this.mBoneArr = [];
            }
            a(s, "laya.ani.bone.Templet", e);
            var t = s.prototype;
            return t.loadAni = function(t) {
                    this._skBufferUrl = t, st.loader.load(t, o.create(this, this.onComplete), null, "arraybuffer");
                }, t.onComplete = function(t) {
                    if (this._isDestroyed) this.destroy();
                    else {
                        var e = l.getRes(this._skBufferUrl);
                        e ? (this._path = this._skBufferUrl.slice(0, this._skBufferUrl.lastIndexOf("/")) + "/",
                            this.parseData(null, e)) : this.event("error", "load failed:" + this._skBufferUrl);
                    }
                }, t.parseData = function(t, e, i) {
                    void 0 === i && (i = 30), !this._path && this._relativeUrl && (this._path = this._relativeUrl.slice(0, this._relativeUrl.lastIndexOf("/")) + "/"), !this._path && this.url && (this._path = this.url.slice(0, this.url.lastIndexOf("/")) + "/"),
                        this._mainTexture = t, this._mainTexture && m.isWebGL && t.bitmap && (t.bitmap.enableMerageInAtlas = !1),
                        this._rate = i, this.parse(e);
                }, t.buildArmature = function(t) {
                    return void 0 === t && (t = 0), new S(this, t);
                }, t.parse = function(t) {
                    e.prototype.parse.call(this, t), this.event("loaded", this), this._aniVersion != s.LAYA_ANIMATION_VISION && console.log("[Error] 版本不一致，请使用IDE版本配套的重新导出" + this._aniVersion + "->" + s.LAYA_ANIMATION_VISION),
                        this._mainTexture ? this._parsePublicExtData() : this._parseTexturePath();
                }, t._parseTexturePath = function() {
                    if (this._isDestroyed) this.destroy();
                    else {
                        var t = 0;
                        this._loadList = [];
                        var e, i = new Ct(this.getPublicExtData()),
                            a = 0,
                            s = 0,
                            r = 0,
                            n = i.getInt32(),
                            h = i.readUTFString(),
                            l = h.split("\n");
                        for (t = 0; t < n; t++) e = this._path + l[2 * t], h = l[2 * t + 1], i.getFloat32(),
                            i.getFloat32(), a = i.getFloat32(), s = i.getFloat32(), r = i.getFloat32(), isNaN(r) ? 0 : r,
                            r = i.getFloat32(), isNaN(r) ? 0 : r, r = i.getFloat32(), isNaN(r) ? a : r, r = i.getFloat32(),
                            isNaN(r) ? s : r, -1 == this._loadList.indexOf(e) && this._loadList.push(e);
                        st.loader.load(this._loadList, o.create(this, this._textureComplete));
                    }
                }, t._textureComplete = function() {
                    for (var t, e, i = 0, a = this._loadList.length; i < a; i++) e = this._loadList[i],
                        t = this._textureDic[e] = l.getRes(e), m.isWebGL && t && t.bitmap && (t.bitmap.enableMerageInAtlas = !1);
                    this._parsePublicExtData();
                }, t._parsePublicExtData = function() {
                    var t = 0,
                        e = 0,
                        i = 0,
                        a = 0,
                        s = 0;
                    for (t = 0, s = this.getAnimationCount(); t < s; t++) this._graphicsCache.push([]);
                    var r;
                    r = "Dragon" != this._aniClassName;
                    var n, h, l = new Ct(this.getPublicExtData()),
                        o = 0,
                        u = 0,
                        c = 0,
                        _ = 0,
                        p = 0,
                        d = 0,
                        f = 0,
                        m = 0,
                        y = 0,
                        x = l.getInt32(),
                        g = l.readUTFString(),
                        D = g.split("\n");
                    for (t = 0; t < x; t++) {
                        if (n = this._mainTexture, h = this._path + D[2 * t], g = D[2 * t + 1], null == this._mainTexture && (n = this._textureDic[h]), !n) return this.event("error", this), void(this.isParseFail = !0);
                        o = l.getFloat32(), u = l.getFloat32(), c = l.getFloat32(), _ = l.getFloat32(),
                            y = l.getFloat32(), p = isNaN(y) ? 0 : y, y = l.getFloat32(), d = isNaN(y) ? 0 : y,
                            y = l.getFloat32(), f = isNaN(y) ? c : y, y = l.getFloat32(), m = isNaN(y) ? _ : y,
                            this.subTextureDic[g] = wt.create(n, o, u, c, _, -p, -d, f, m);
                    }
                    this._mainTexture = n;
                    var v, M, I, b, A, N = l.getUint16();
                    for (t = 0; t < N; t++)(v = []).push(l.getUint16()), v.push(l.getUint16()), v.push(l.getUint16()),
                        v.push(l.getUint16()), this.aniSectionDic[t] = v;
                    var T, S = l.getInt16(),
                        C = {};
                    for (t = 0; t < S; t++) M = new Wt(), 0 == t ? T = M : M.root = T, M.d = r ? -1 : 1,
                        b = l.readUTFString(), A = l.readUTFString(), M.length = l.getFloat32(), 1 == l.getByte() && (M.inheritRotation = !1),
                        1 == l.getByte() && (M.inheritScale = !1), M.name = b, A && ((I = C[A]) ? I.addChild(M) : this.mRootBone = M),
                        C[b] = M, this.mBoneArr.push(M);
                    this.tMatrixDataLen = l.getUint16();
                    var F, w, k = l.getUint16(),
                        P = Math.floor(k / this.tMatrixDataLen),
                        U = this.srcBoneMatrixArr;
                    for (t = 0; t < P; t++)(F = new Kt()).scX = l.getFloat32(), F.skX = l.getFloat32(),
                        F.skY = l.getFloat32(), F.scY = l.getFloat32(), F.x = l.getFloat32(), F.y = l.getFloat32(),
                        8 === this.tMatrixDataLen && (F.skewX = l.getFloat32(), F.skewY = l.getFloat32()),
                        U.push(F), (M = this.mBoneArr[t]).transform = F;
                    var B, L = l.getUint16(),
                        R = 0;
                    for (t = 0; t < L; t++) {
                        for (w = new Gt(), R = l.getUint16(), e = 0; e < R; e++) w.boneNames.push(l.readUTFString()),
                            w.boneIndexs.push(l.getInt16());
                        w.name = l.readUTFString(), w.targetBoneName = l.readUTFString(), w.targetBoneIndex = l.getInt16(),
                            w.bendDirection = l.getFloat32(), w.mix = l.getFloat32(), w.isSpine = r, this.ikArr.push(w);
                    }
                    var E, V = l.getUint16(),
                        O = 0;
                    for (t = 0; t < V; t++) {
                        for (B = new Lt(), O = l.getUint16(), e = 0; e < O; e++) B.boneIndexs.push(l.getInt16());
                        B.name = l.getUTFString(), B.targetIndex = l.getInt16(), B.rotateMix = l.getFloat32(),
                            B.translateMix = l.getFloat32(), B.scaleMix = l.getFloat32(), B.shearMix = l.getFloat32(),
                            B.offsetRotation = l.getFloat32(), B.offsetX = l.getFloat32(), B.offsetY = l.getFloat32(),
                            B.offsetScaleX = l.getFloat32(), B.offsetScaleY = l.getFloat32(), B.offsetShearY = l.getFloat32(),
                            this.tfArr.push(B);
                    }
                    var K = l.getUint16(),
                        Y = 0;
                    for (t = 0; t < K; t++) {
                        for ((E = new Pt()).name = l.readUTFString(), Y = l.getUint16(), e = 0; e < Y; e++) E.bones.push(l.getInt16());
                        E.target = l.readUTFString(), E.positionMode = l.readUTFString(), E.spacingMode = l.readUTFString(),
                            E.rotateMode = l.readUTFString(), E.offsetRotation = l.getFloat32(), E.position = l.getFloat32(),
                            E.spacing = l.getFloat32(), E.rotateMix = l.getFloat32(), E.translateMix = l.getFloat32(),
                            this.pathArr.push(E);
                    }
                    var W, X, G, z, q, H = 0,
                        Z = 0,
                        Q = 0,
                        $ = NaN,
                        j = 0,
                        J = l.getInt16();
                    for (t = 0; t < J; t++) {
                        var tt = l.getUint8(),
                            et = {};
                        this.deformAniArr.push(et);
                        for (var it = 0; it < tt; it++)
                            for ((W = new Rt()).skinName = l.getUTFString(),
                                et[W.skinName] = W, H = l.getInt16(), e = 0; e < H; e++)
                                for (X = new Ut(), W.deformSlotDataList.push(X),
                                    Z = l.getInt16(), i = 0; i < Z; i++)
                                    for (G = new Vt(), X.deformSlotDisplayList.push(G),
                                        G.slotIndex = l.getInt16(), G.attachment = l.getUTFString(), Q = l.getInt16(), a = 0; a < Q; a++)
                                        for (1 == l.getByte() ? G.tweenKeyList.push(!0) : G.tweenKeyList.push(!1),
                                            $ = l.getFloat32(), G.timeList.push($), z = [], G.vectices.push(z), j = l.getInt16(),
                                            s = 0; s < j; s++) z.push(l.getFloat32());
                    }
                    var at, st, rt = l.getInt16(),
                        nt = 0,
                        ht = 0;
                    for (t = 0; t < rt; t++) {
                        for (nt = l.getInt16(), q = [], e = 0; e < nt; e++) {
                            for ((at = new Yt()).time = l.getFloat32(), ht = l.getInt16(), i = 0; i < ht; i++) at.drawOrder.push(l.getInt16());
                            q.push(at);
                        }
                        this.drawOrderAniArr.push(q);
                    }
                    var lt, ot = l.getInt16(),
                        ut = 0;
                    for (t = 0; t < ot; t++) {
                        for (ut = l.getInt16(), st = [], e = 0; e < ut; e++)(lt = new Xt()).name = l.getUTFString(),
                            lt.intValue = l.getInt32(), lt.floatValue = l.getFloat32(), lt.stringValue = l.getUTFString(),
                            lt.time = l.getFloat32(), st.push(lt);
                        this.eventAniArr.push(st);
                    }
                    var ct = l.getInt16();
                    if (0 < ct)
                        for (this.attachmentNames = [], t = 0; t < ct; t++) this.attachmentNames.push(l.getUTFString());
                    var _t, pt, dt = l.getInt16();
                    for (t = 0; t < dt; t++)(_t = new Ot()).name = l.readUTFString(), _t.parent = l.readUTFString(),
                        _t.attachmentName = l.readUTFString(), _t.srcDisplayIndex = _t.displayIndex = l.getInt16(),
                        (_t.templet = this).boneSlotDic[_t.name] = _t, null == (pt = this.bindBoneBoneSlotDic[_t.parent]) && (this.bindBoneBoneSlotDic[_t.parent] = pt = []),
                        pt.push(_t), this.boneSlotArray.push(_t);
                    var ft, mt, yt, xt = l.readUTFString().split("\n"),
                        gt = 0,
                        Dt = l.getUint8(),
                        vt = 0,
                        Mt = 0,
                        It = 0,
                        bt = 0,
                        At = 0,
                        Nt = 0,
                        Tt = 0;
                    for (t = 0; t < Dt; t++) {
                        for ((ft = new Bt()).name = xt[gt++], vt = l.getUint8(), e = 0; e < vt; e++) {
                            for ((mt = new kt()).name = xt[gt++], _t = this.boneSlotDic[mt.name], Mt = l.getUint8(),
                                i = 0; i < Mt; i++) {
                                if (yt = new Et(), this.skinSlotDisplayDataArr.push(yt), yt.name = xt[gt++], yt.attachmentName = xt[gt++],
                                    yt.transform = new Kt(), yt.transform.scX = l.getFloat32(), yt.transform.skX = l.getFloat32(),
                                    yt.transform.skY = l.getFloat32(), yt.transform.scY = l.getFloat32(), yt.transform.x = l.getFloat32(),
                                    yt.transform.y = l.getFloat32(), mt.displayArr.push(yt), yt.width = l.getFloat32(),
                                    yt.height = l.getFloat32(), yt.type = l.getUint8(), yt.verLen = l.getUint16(), 0 < (S = l.getUint16()))
                                    for (yt.bones = [],
                                        a = 0; a < S; a++) {
                                        var St = l.getUint16();
                                        yt.bones.push(St);
                                    }
                                if (0 < (It = l.getUint16()))
                                    for (yt.uvs = [], a = 0; a < It; a++) yt.uvs.push(l.getFloat32());
                                if (0 < (bt = l.getUint16()))
                                    for (yt.weights = [], a = 0; a < bt; a++) yt.weights.push(l.getFloat32());
                                if (0 < (At = l.getUint16()))
                                    for (yt.triangles = [], a = 0; a < At; a++) yt.triangles.push(l.getUint16());
                                if (0 < (Nt = l.getUint16()))
                                    for (yt.vertices = [], a = 0; a < Nt; a++) yt.vertices.push(l.getFloat32());
                                if (0 < (Tt = l.getUint16()))
                                    for (yt.lengths = [], a = 0; a < Tt; a++) yt.lengths.push(l.getFloat32());
                            }
                            ft.slotArr.push(mt);
                        }
                        this.skinDic[ft.name] = ft, this.skinDataArray.push(ft);
                    }
                    1 == l.getUint8() ? (this.yReverseMatrix = new Ft(1, 0, 0, -1, 0, 0), T && T.setTempMatrix(this.yReverseMatrix)) : T && T.setTempMatrix(new Ft()),
                        this.showSkinByIndex(this.boneSlotDic, 0), this.isParserComplete = !0, this.event("complete", this);
                }, t.getTexture = function(t) {
                    var e = this.subTextureDic[t];
                    return e || (e = this.subTextureDic[t.substr(0, t.length - 1)]), null == e ? this._mainTexture : e;
                }, t.showSkinByIndex = function(t, e, i) {
                    if (void 0 === i && (i = !0), e < 0 && e >= this.skinDataArray.length) return !1;
                    var a, s, r = 0,
                        n = 0,
                        h = this.skinDataArray[e];
                    if (h) {
                        for (r = 0, n = h.slotArr.length; r < n; r++)(s = h.slotArr[r]) && (a = t[s.name]) && (a.showSlotData(s, i),
                            i && "undefined" != a.attachmentName && "null" != a.attachmentName ? a.showDisplayByName(a.attachmentName) : a.showDisplayByIndex(a.displayIndex));
                        return !0;
                    }
                    return !1;
                }, t.getSkinIndexByName = function(t) {
                    for (var e = 0, i = this.skinDataArray.length; e < i; e++)
                        if (this.skinDataArray[e].name == t) return e;
                    return -1;
                }, t.getGrahicsDataWithCache = function(t, e) {
                    return this._graphicsCache[t] && this._graphicsCache[t][e] ? this._graphicsCache[t][e] : null;
                }, t._setCreateURL = function(t) {
                    this._relativeUrl = t, laya.resource.Resource.prototype._setCreateURL.call(this, t);
                }, t.setGrahicsDataWithCache = function(t, e, i) {
                    this._graphicsCache[t][e] = i;
                }, t.deleteAniData = function(t) {
                    if (this._anis[t]) {
                        var e = this._anis[t];
                        e.bone3DMap = null, e.nodes = null;
                    }
                }, t.destroy = function() {
                    var t;
                    for (var e in this._isDestroyed = !0, this.subTextureDic)(t = this.subTextureDic[e]) && t.destroy();
                    for (e in this._textureDic)(t = this._textureDic[e]) && t.destroy();
                    for (var i = 0, a = this.skinSlotDisplayDataArr.length; i < a; i++) this.skinSlotDisplayDataArr[i].destory();
                    this.skinSlotDisplayDataArr.length = 0, this.url && delete s.TEMPLET_DICTIONARY[this.url],
                        laya.resource.Resource.prototype.destroy.call(this);
                }, t.getAniNameByIndex = function(t) {
                    var e = this.getAnimation(t);
                    return e ? e.name : null;
                }, r(0, t, "rate", function() {
                    return this._rate;
                }, function(t) {
                    this._rate = t;
                }), s.LAYA_ANIMATION_VISION = "LAYAANIMATION:1.6.0", s.TEMPLET_DICTIONARY = null,
                s;
        }(P);
}(window, document, Laya);