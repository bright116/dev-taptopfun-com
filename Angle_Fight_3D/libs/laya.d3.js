!function(e, t) {
    "use strict";
    class r {
        constructor() {}
        static isZero(e) {
            return Math.abs(e) < r.zeroTolerance;
        }
        static nearEqual(e, t) {
            return !!r.isZero(e - t);
        }
        static fastInvSqrt(e) {
            return r.isZero(e) ? e : 1 / Math.sqrt(e);
        }
    }
    r.zeroTolerance = 1e-6, r.MaxValue = 3.40282347e38, r.MinValue = -3.40282347e38, 
    r.Deg2Rad = Math.PI / 180;
    class a {
        constructor(e = 0, t = 0) {
            this.x = e, this.y = t;
        }
        setValue(e, t) {
            this.x = e, this.y = t;
        }
        static scale(e, t, r) {
            r.x = e.x * t, r.y = e.y * t;
        }
        fromArray(e, t = 0) {
            this.x = e[t + 0], this.y = e[t + 1];
        }
        toArray(e, t = 0) {
            e[t + 0] = this.x, e[t + 1] = this.y;
        }
        cloneTo(e) {
            var t = e;
            t.x = this.x, t.y = this.y;
        }
        static dot(e, t) {
            return e.x * t.x + e.y * t.y;
        }
        static normalize(e, t) {
            var r = e.x, a = e.y, n = r * r + a * a;
            n > 0 && (n = 1 / Math.sqrt(n), t.x = r * n, t.y = a * n);
        }
        static scalarLength(e) {
            var t = e.x, r = e.y;
            return Math.sqrt(t * t + r * r);
        }
        clone() {
            var e = new a();
            return this.cloneTo(e), e;
        }
        forNativeElement(e = null) {
            e ? (this.elements = e, this.elements[0] = this.x, this.elements[1] = this.y) : this.elements = new Float32Array([ this.x, this.y ]), 
            a.rewriteNumProperty(this, "x", 0), a.rewriteNumProperty(this, "y", 1);
        }
        static rewriteNumProperty(e, t, r) {
            Object.defineProperty(e, t, {
                get: function() {
                    return this.elements[r];
                },
                set: function(e) {
                    this.elements[r] = e;
                }
            });
        }
    }
    a.ZERO = new a(0, 0), a.ONE = new a(1, 1);
    class n {
        constructor(e = 0, t = 0, r = 0, a = 0) {
            this.x = e, this.y = t, this.z = r, this.w = a;
        }
        setValue(e, t, r, a) {
            this.x = e, this.y = t, this.z = r, this.w = a;
        }
        fromArray(e, t = 0) {
            this.x = e[t + 0], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3];
        }
        toArray(e, t = 0) {
            e[t + 0] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w;
        }
        cloneTo(e) {
            var t = e;
            t.x = this.x, t.y = this.y, t.z = this.z, t.w = this.w;
        }
        clone() {
            var e = new n();
            return this.cloneTo(e), e;
        }
        static lerp(e, t, r, a) {
            var n = e.x, i = e.y, s = e.z, o = e.w;
            a.x = n + r * (t.x - n), a.y = i + r * (t.y - i), a.z = s + r * (t.z - s), a.w = o + r * (t.w - o);
        }
        static transformByM4x4(e, t, r) {
            var a = e.x, n = e.y, i = e.z, s = e.w, o = t.elements;
            r.x = a * o[0] + n * o[4] + i * o[8] + s * o[12], r.y = a * o[1] + n * o[5] + i * o[9] + s * o[13], 
            r.z = a * o[2] + n * o[6] + i * o[10] + s * o[14], r.w = a * o[3] + n * o[7] + i * o[11] + s * o[15];
        }
        static equals(e, t) {
            return r.nearEqual(Math.abs(e.x), Math.abs(t.x)) && r.nearEqual(Math.abs(e.y), Math.abs(t.y)) && r.nearEqual(Math.abs(e.z), Math.abs(t.z)) && r.nearEqual(Math.abs(e.w), Math.abs(t.w));
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
        }
        lengthSquared() {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
        }
        static normalize(e, t) {
            var r = e.length();
            if (r > 0) {
                var a = 1 / r;
                t.x = e.x * a, t.y = e.y * a, t.z = e.z * a, t.w = e.w * a;
            }
        }
        static add(e, t, r) {
            r.x = e.x + t.x, r.y = e.y + t.y, r.z = e.z + t.z, r.w = e.w + t.w;
        }
        static subtract(e, t, r) {
            r.x = e.x - t.x, r.y = e.y - t.y, r.z = e.z - t.z, r.w = e.w - t.w;
        }
        static multiply(e, t, r) {
            r.x = e.x * t.x, r.y = e.y * t.y, r.z = e.z * t.z, r.w = e.w * t.w;
        }
        static scale(e, t, r) {
            r.x = e.x * t, r.y = e.y * t, r.z = e.z * t, r.w = e.w * t;
        }
        static Clamp(e, t, r, a) {
            var n = e.x, i = e.y, s = e.z, o = e.w, l = t.x, h = t.y, _ = t.z, d = t.w, c = r.x, u = r.y, m = r.z, f = r.w;
            n = (n = n > c ? c : n) < l ? l : n, i = (i = i > u ? u : i) < h ? h : i, s = (s = s > m ? m : s) < _ ? _ : s, 
            o = (o = o > f ? f : o) < d ? d : o, a.x = n, a.y = i, a.z = s, a.w = o;
        }
        static distanceSquared(e, t) {
            var r = e.x - t.x, a = e.y - t.y, n = e.z - t.z, i = e.w - t.w;
            return r * r + a * a + n * n + i * i;
        }
        static distance(e, t) {
            var r = e.x - t.x, a = e.y - t.y, n = e.z - t.z, i = e.w - t.w;
            return Math.sqrt(r * r + a * a + n * n + i * i);
        }
        static dot(e, t) {
            return e.x * t.x + e.y * t.y + e.z * t.z + e.w * t.w;
        }
        static min(e, t, r) {
            r.x = Math.min(e.x, t.x), r.y = Math.min(e.y, t.y), r.z = Math.min(e.z, t.z), r.w = Math.min(e.w, t.w);
        }
        static max(e, t, r) {
            r.x = Math.max(e.x, t.x), r.y = Math.max(e.y, t.y), r.z = Math.max(e.z, t.z), r.w = Math.max(e.w, t.w);
        }
        forNativeElement(e = null) {
            e ? (this.elements = e, this.elements[0] = this.x, this.elements[1] = this.y, this.elements[2] = this.z, 
            this.elements[3] = this.w) : this.elements = new Float32Array([ this.x, this.y, this.z, this.w ]), 
            a.rewriteNumProperty(this, "x", 0), a.rewriteNumProperty(this, "y", 1), a.rewriteNumProperty(this, "z", 2), 
            a.rewriteNumProperty(this, "w", 3);
        }
    }
    n.ZERO = new n(), n.ONE = new n(1, 1, 1, 1), n.UnitX = new n(1, 0, 0, 0), n.UnitY = new n(0, 1, 0, 0), 
    n.UnitZ = new n(0, 0, 1, 0), n.UnitW = new n(0, 0, 0, 1);
    class i {
        constructor(e = 0, t = 0, r = 0) {
            this.x = e, this.y = t, this.z = r;
        }
        static distanceSquared(e, t) {
            var r = e.x - t.x, a = e.y - t.y, n = e.z - t.z;
            return r * r + a * a + n * n;
        }
        static distance(e, t) {
            var r = e.x - t.x, a = e.y - t.y, n = e.z - t.z;
            return Math.sqrt(r * r + a * a + n * n);
        }
        static min(e, t, r) {
            r.x = Math.min(e.x, t.x), r.y = Math.min(e.y, t.y), r.z = Math.min(e.z, t.z);
        }
        static max(e, t, r) {
            r.x = Math.max(e.x, t.x), r.y = Math.max(e.y, t.y), r.z = Math.max(e.z, t.z);
        }
        static transformQuat(e, t, r) {
            var a = e.x, n = e.y, i = e.z, s = t.x, o = t.y, l = t.z, h = t.w, _ = h * a + o * i - l * n, d = h * n + l * a - s * i, c = h * i + s * n - o * a, u = -s * a - o * n - l * i;
            r.x = _ * h + u * -s + d * -l - c * -o, r.y = d * h + u * -o + c * -s - _ * -l, 
            r.z = c * h + u * -l + _ * -o - d * -s;
        }
        static scalarLength(e) {
            var t = e.x, r = e.y, a = e.z;
            return Math.sqrt(t * t + r * r + a * a);
        }
        static scalarLengthSquared(e) {
            var t = e.x, r = e.y, a = e.z;
            return t * t + r * r + a * a;
        }
        static normalize(e, t) {
            var r = e.x, a = e.y, n = e.z, i = r * r + a * a + n * n;
            i > 0 && (i = 1 / Math.sqrt(i), t.x = r * i, t.y = a * i, t.z = n * i);
        }
        static multiply(e, t, r) {
            r.x = e.x * t.x, r.y = e.y * t.y, r.z = e.z * t.z;
        }
        static scale(e, t, r) {
            r.x = e.x * t, r.y = e.y * t, r.z = e.z * t;
        }
        static lerp(e, t, r, a) {
            var n = e.x, i = e.y, s = e.z;
            a.x = n + r * (t.x - n), a.y = i + r * (t.y - i), a.z = s + r * (t.z - s);
        }
        static transformV3ToV3(e, t, r) {
            var a = i._tempVector4;
            i.transformV3ToV4(e, t, a), r.x = a.x, r.y = a.y, r.z = a.z;
        }
        static transformV3ToV4(e, t, r) {
            var a = e.x, n = e.y, i = e.z, s = t.elements;
            r.x = a * s[0] + n * s[4] + i * s[8] + s[12], r.y = a * s[1] + n * s[5] + i * s[9] + s[13], 
            r.z = a * s[2] + n * s[6] + i * s[10] + s[14], r.w = a * s[3] + n * s[7] + i * s[11] + s[15];
        }
        static TransformNormal(e, t, r) {
            var a = e.x, n = e.y, i = e.z, s = t.elements;
            r.x = a * s[0] + n * s[4] + i * s[8], r.y = a * s[1] + n * s[5] + i * s[9], r.z = a * s[2] + n * s[6] + i * s[10];
        }
        static transformCoordinate(e, t, r) {
            var a = e.x, n = e.y, i = e.z, s = t.elements, o = a * s[3] + n * s[7] + i * s[11] + s[15];
            r.x = (a * s[0] + n * s[4] + i * s[8] + s[12]) / o, r.y = (a * s[1] + n * s[5] + i * s[9] + s[13]) / o, 
            r.z = (a * s[2] + n * s[6] + i * s[10] + s[14]) / o;
        }
        static Clamp(e, t, r, a) {
            var n = e.x, i = e.y, s = e.z, o = t.x, l = t.y, h = t.z, _ = r.x, d = r.y, c = r.z;
            n = (n = n > _ ? _ : n) < o ? o : n, i = (i = i > d ? d : i) < l ? l : i, s = (s = s > c ? c : s) < h ? h : s, 
            a.x = n, a.y = i, a.z = s;
        }
        static add(e, t, r) {
            r.x = e.x + t.x, r.y = e.y + t.y, r.z = e.z + t.z;
        }
        static subtract(e, t, r) {
            r.x = e.x - t.x, r.y = e.y - t.y, r.z = e.z - t.z;
        }
        static cross(e, t, r) {
            var a = e.x, n = e.y, i = e.z, s = t.x, o = t.y, l = t.z;
            r.x = n * l - i * o, r.y = i * s - a * l, r.z = a * o - n * s;
        }
        static dot(e, t) {
            return e.x * t.x + e.y * t.y + e.z * t.z;
        }
        static equals(e, t) {
            return r.nearEqual(e.x, t.x) && r.nearEqual(e.y, t.y) && r.nearEqual(e.z, t.z);
        }
        setValue(e, t, r) {
            this.x = e, this.y = t, this.z = r;
        }
        fromArray(e, t = 0) {
            this.x = e[t + 0], this.y = e[t + 1], this.z = e[t + 2];
        }
        toArray(e, t = 0) {
            e[t + 0] = this.x, e[t + 1] = this.y, e[t + 2] = this.z;
        }
        cloneTo(e) {
            var t = e;
            t.x = this.x, t.y = this.y, t.z = this.z;
        }
        clone() {
            var e = new i();
            return this.cloneTo(e), e;
        }
        toDefault() {
            this.x = 0, this.y = 0, this.z = 0;
        }
        forNativeElement(e = null) {
            e ? (this.elements = e, this.elements[0] = this.x, this.elements[1] = this.y, this.elements[2] = this.z) : this.elements = new Float32Array([ this.x, this.y, this.z ]), 
            a.rewriteNumProperty(this, "x", 0), a.rewriteNumProperty(this, "y", 1), a.rewriteNumProperty(this, "z", 2);
        }
    }
    var s, o, l;
    i._tempVector4 = new n(), i._ZERO = new i(0, 0, 0), i._ONE = new i(1, 1, 1), i._NegativeUnitX = new i(-1, 0, 0), 
    i._UnitX = new i(1, 0, 0), i._UnitY = new i(0, 1, 0), i._UnitZ = new i(0, 0, 1), 
    i._ForwardRH = new i(0, 0, -1), i._ForwardLH = new i(0, 0, 1), i._Up = new i(0, 1, 0), 
    (s = e.PBRRenderQuality || (e.PBRRenderQuality = {}))[s.High = 0] = "High", s[s.Low = 1] = "Low";
    class h {}
    h.Shader3D = null, h.Scene3D = null, h.MeshRenderStaticBatchManager = null, h.MeshRenderDynamicBatchManager = null, 
    h.SubMeshDynamicBatch = null, h.Laya3D = null, h.Matrix4x4 = null, h.Physics3D = null, 
    h.ShadowLightType = null, h.RenderElement = null, h.CommandBuffer = null, h.Camera = null, 
    h.SubMeshRenderElement = null;
    class _ {
        static __bulletinit__() {
            this._bullet = window.Physics3D, this._bullet && (t.StaticPlaneColliderShape.__init__(), 
            t.ColliderShape.__init__(), t.CompoundColliderShape.__init__(), t.PhysicsComponent.__init__(), 
            t.PhysicsSimulation.__init__(), t.BoxColliderShape.__init__(), t.CylinderColliderShape.__init__(), 
            t.CharacterController.__init__(), t.Rigidbody3D.__init__());
        }
        static __cannoninit__() {
            this._cannon = window.CANNON, this._cannon && (t.CannonColliderShape.__init__(), 
            t.CannonPhysicsComponent.__init__(), t.CannonPhysicsSimulation.__init__(), t.CannonBoxColliderShape.__init__(), 
            t.CannonRigidbody3D.__init__());
        }
    }
    _._bullet = null, _._cannon = null, _._enablePhysics = !1;
    class d {
        constructor() {
            this._defaultPhysicsMemory = 16, this._maxLightCount = 32, this._lightClusterCount = new i(12, 12, 12), 
            this._editerEnvironment = !1, this.isAntialias = !0, this.isAlpha = !1, this.premultipliedAlpha = !0, 
            this.isStencil = !0, this.enableMultiLight = !0, this.octreeCulling = !1, this.octreeInitialSize = 64, 
            this.octreeInitialCenter = new i(0, 0, 0), this.octreeMinNodeSize = 2, this.octreeLooseness = 1.25, 
            this.debugFrustumCulling = !1, this.pbrRenderQuality = e.PBRRenderQuality.High, 
            this.isUseCannonPhysicsEngine = !1, this._maxAreaLightCountPerClusterAverage = Math.min(4 * Math.floor(2048 / this._lightClusterCount.z - 1), this._maxLightCount);
        }
        static get useCannonPhysics() {
            return d._config.isUseCannonPhysicsEngine;
        }
        static set useCannonPhysics(e) {
            d._config.isUseCannonPhysicsEngine = e, e && (_.__cannoninit__(), h.Scene3D.cannonPhysicsSettings || (h.Scene3D.cannonPhysicsSettings = new t.CannonPhysicsSettings()));
        }
        static set enableDynamicManager(e) {
            h.SubMeshRenderElement.enableDynamicBatch = e;
        }
        static get enableDynamicManager() {
            return h.SubMeshRenderElement.enableDynamicBatch;
        }
        static set enableStaticManager(e) {
            h.SubMeshRenderElement.enableStaticBatch = e;
        }
        static get enableStaticManager() {
            return h.SubMeshRenderElement.enableStaticBatch;
        }
        get defaultPhysicsMemory() {
            return this._defaultPhysicsMemory;
        }
        set defaultPhysicsMemory(e) {
            if (e < 16) throw "defaultPhysicsMemory must large than 16M";
            this._defaultPhysicsMemory = e;
        }
        get maxLightCount() {
            return this._maxLightCount;
        }
        set maxLightCount(e) {
            e > 2048 ? (this._maxLightCount = 2048, console.warn("Config3D: maxLightCount must less equal 2048.")) : this._maxLightCount = e;
        }
        get lightClusterCount() {
            return this._lightClusterCount;
        }
        set lightClusterCount(e) {
            e.x > 128 || e.y > 128 || e.z > 128 ? (this._lightClusterCount.setValue(Math.min(e.x, 128), Math.min(e.y, 128), Math.min(e.z, 128)), 
            console.warn("Config3D: lightClusterCount X and Y、Z must less equal 128.")) : e.cloneTo(this._lightClusterCount);
            var t = 4 * Math.floor(2048 / this._lightClusterCount.z - 1);
            t < this._maxLightCount && console.warn("Config3D: if the area light(PointLight、SpotLight) count is large than " + t + ",maybe the far away culster will ingonre some light."), 
            this._maxAreaLightCountPerClusterAverage = Math.min(t, this._maxLightCount);
        }
        cloneTo(e) {
            var t = e;
            t._defaultPhysicsMemory = this._defaultPhysicsMemory, t._editerEnvironment = this._editerEnvironment, 
            t.isAntialias = this.isAntialias, t.isAlpha = this.isAlpha, t.premultipliedAlpha = this.premultipliedAlpha, 
            t.isStencil = this.isStencil, t.octreeCulling = this.octreeCulling, this.octreeInitialCenter.cloneTo(t.octreeInitialCenter), 
            t.octreeInitialSize = this.octreeInitialSize, t.octreeMinNodeSize = this.octreeMinNodeSize, 
            t.octreeLooseness = this.octreeLooseness, t.debugFrustumCulling = this.debugFrustumCulling, 
            t.maxLightCount = this.maxLightCount, t.enableMultiLight = this.enableMultiLight;
            var r = t.lightClusterCount;
            this.lightClusterCount.cloneTo(r), t.lightClusterCount = r, t.pbrRenderQuality = this.pbrRenderQuality;
        }
        clone() {
            var e = new d();
            return this.cloneTo(e), e;
        }
    }
    d._config = new d(), window.Config3D = d;
    class c {
        constructor() {
            this._ownerPath = [], this._propertys = [], this._keyFrames = [];
        }
        get ownerPathCount() {
            return this._ownerPath.length;
        }
        get propertyCount() {
            return this._propertys.length;
        }
        get keyFramesCount() {
            return this._keyFrames.length;
        }
        _setOwnerPathCount(e) {
            this._ownerPath.length = e;
        }
        _setOwnerPathByIndex(e, t) {
            this._ownerPath[e] = t;
        }
        _joinOwnerPath(e) {
            return this._ownerPath.join(e);
        }
        _setPropertyCount(e) {
            this._propertys.length = e;
        }
        _setPropertyByIndex(e, t) {
            this._propertys[e] = t;
        }
        _joinProperty(e) {
            return this._propertys.join(e);
        }
        _setKeyframeCount(e) {
            this._keyFrames.length = e;
        }
        _setKeyframeByIndex(e, t) {
            this._keyFrames[e] = t;
        }
        getOwnerPathByIndex(e) {
            return this._ownerPath[e];
        }
        getPropertyByIndex(e) {
            return this._propertys[e];
        }
        getKeyframeByIndex(e) {
            return this._keyFrames[e];
        }
    }
    class u {
        constructor() {}
    }
    class m {
        constructor() {}
        cloneTo(e) {
            e.time = this.time;
        }
        clone() {
            var e = new m();
            return this.cloneTo(e), e;
        }
    }
    class f extends m {
        constructor() {
            super();
        }
        cloneTo(e) {
            super.cloneTo(e);
            var t = e;
            t.inTangent = this.inTangent, t.outTangent = this.outTangent, t.value = this.value;
        }
    }
    class E {
        constructor() {
            var e = this.elements = new Float32Array(9);
            e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 1, e[5] = 0, e[6] = 0, e[7] = 0, 
            e[8] = 1;
        }
        static createRotationQuaternion(e, t) {
            var r = e.x, a = e.y, n = e.z, i = e.w, s = r * r, o = a * a, l = n * n, h = r * a, _ = n * i, d = n * r, c = a * i, u = a * n, m = r * i, f = t.elements;
            f[0] = 1 - 2 * (o + l), f[1] = 2 * (h + _), f[2] = 2 * (d - c), f[3] = 2 * (h - _), 
            f[4] = 1 - 2 * (l + s), f[5] = 2 * (u + m), f[6] = 2 * (d + c), f[7] = 2 * (u - m), 
            f[8] = 1 - 2 * (o + s);
        }
        static createFromTranslation(e, t) {
            var r = t.elements;
            r[0] = 1, r[1] = 0, r[2] = 0, r[3] = 0, r[4] = 1, r[5] = 0, r[6] = e.x, r[7] = e.y, 
            r[8] = 1;
        }
        static createFromRotation(e, t) {
            var r = t.elements, a = Math.sin(e), n = Math.cos(e);
            r[0] = n, r[1] = a, r[2] = 0, r[3] = -a, r[4] = n, r[5] = 0, r[6] = 0, r[7] = 0, 
            r[8] = 1;
        }
        static createFromScaling(e, t) {
            var r = t.elements;
            r[0] = e.x, r[1] = 0, r[2] = 0, r[3] = 0, r[4] = e.y, r[5] = 0, r[6] = 0, r[7] = 0, 
            r[8] = e.z;
        }
        static createFromMatrix4x4(e, t) {
            var r = e.elements, a = t.elements;
            a[0] = r[0], a[1] = r[1], a[2] = r[2], a[3] = r[4], a[4] = r[5], a[5] = r[6], a[6] = r[8], 
            a[7] = r[9], a[8] = r[10];
        }
        static multiply(e, t, r) {
            var a = e.elements, n = t.elements, i = r.elements, s = a[0], o = a[1], l = a[2], h = a[3], _ = a[4], d = a[5], c = a[6], u = a[7], m = a[8], f = n[0], E = n[1], T = n[2], p = n[3], g = n[4], S = n[5], R = n[6], v = n[7], x = n[8];
            i[0] = f * s + E * h + T * c, i[1] = f * o + E * _ + T * v, i[2] = f * l + E * d + T * m, 
            i[3] = p * s + g * h + S * c, i[4] = p * o + g * _ + S * u, i[5] = p * l + g * d + S * m, 
            i[6] = R * s + v * h + x * c, i[7] = R * o + v * _ + x * u, i[8] = R * l + v * d + x * m;
        }
        determinant() {
            var e = this.elements, t = e[0], r = e[1], a = e[2], n = e[3], i = e[4], s = e[5], o = e[6], l = e[7], h = e[8];
            return t * (h * i - s * l) + r * (-h * n + s * o) + a * (l * n - i * o);
        }
        translate(e, t) {
            var r = t.elements, a = this.elements, n = a[0], i = a[1], s = a[2], o = a[3], l = a[4], h = a[5], _ = a[6], d = a[7], c = a[8], u = e.x, m = e.y;
            r[0] = n, r[1] = i, r[2] = s, r[3] = o, r[4] = l, r[5] = h, r[6] = u * n + m * o + _, 
            r[7] = u * i + m * l + d, r[8] = u * s + m * h + c;
        }
        rotate(e, t) {
            var r = t.elements, a = this.elements, n = a[0], i = a[1], s = a[2], o = a[3], l = a[4], h = a[5], _ = a[6], d = a[7], c = a[8], u = Math.sin(e), m = Math.cos(e);
            r[0] = m * n + u * o, r[1] = m * i + u * l, r[2] = m * s + u * h, r[3] = m * o - u * n, 
            r[4] = m * l - u * i, r[5] = m * h - u * s, r[6] = _, r[7] = d, r[8] = c;
        }
        scale(e, t) {
            var r = t.elements, a = this.elements, n = e.x, i = e.y;
            r[0] = n * a[0], r[1] = n * a[1], r[2] = n * a[2], r[3] = i * a[3], r[4] = i * a[4], 
            r[5] = i * a[5], r[6] = a[6], r[7] = a[7], r[8] = a[8];
        }
        invert(e) {
            var t = e.elements, r = this.elements, a = r[0], n = r[1], i = r[2], s = r[3], o = r[4], l = r[5], h = r[6], _ = r[7], d = r[8], c = d * o - l * _, u = -d * s + l * h, m = _ * s - o * h, f = a * c + n * u + i * m;
            f && (f = 1 / f, t[0] = c * f, t[1] = (-d * n + i * _) * f, t[2] = (l * n - i * o) * f, 
            t[3] = u * f, t[4] = (d * a - i * h) * f, t[5] = (-l * a + i * s) * f, t[6] = m * f, 
            t[7] = (-_ * a + n * h) * f, t[8] = (o * a - n * s) * f);
        }
        transpose(e) {
            var t = e.elements, r = this.elements;
            if (e === this) {
                var a = r[1], n = r[2], i = r[5];
                t[1] = r[3], t[2] = r[6], t[3] = a, t[5] = r[7], t[6] = n, t[7] = i;
            } else t[0] = r[0], t[1] = r[3], t[2] = r[6], t[3] = r[1], t[4] = r[4], t[5] = r[7], 
            t[6] = r[2], t[7] = r[5], t[8] = r[8];
        }
        identity() {
            var e = this.elements;
            e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 1, e[5] = 0, e[6] = 0, e[7] = 0, 
            e[8] = 1;
        }
        cloneTo(e) {
            var t, r, a;
            if ((r = this.elements) !== (a = e.elements)) for (t = 0; t < 9; ++t) a[t] = r[t];
        }
        clone() {
            var e = new E();
            return this.cloneTo(e), e;
        }
        static lookAt(e, t, r, a) {
            i.subtract(e, t, E._tempV30), i.normalize(E._tempV30, E._tempV30), i.cross(r, E._tempV30, E._tempV31), 
            i.normalize(E._tempV31, E._tempV31), i.cross(E._tempV30, E._tempV31, E._tempV32);
            var n = E._tempV30, s = E._tempV31, o = E._tempV32, l = a.elements;
            l[0] = s.x, l[3] = s.y, l[6] = s.z, l[1] = o.x, l[4] = o.y, l[7] = o.z, l[2] = n.x, 
            l[5] = n.y, l[8] = n.z;
        }
    }
    E.DEFAULT = new E(), E._tempV30 = new i(), E._tempV31 = new i(), E._tempV32 = new i();
    class T {
        constructor(e = 0, t = 0, r = 0, a = 1) {
            this.x = e, this.y = t, this.z = r, this.w = a;
        }
        static createFromYawPitchRoll(e, t, r, a) {
            var n = .5 * r, i = .5 * t, s = .5 * e, o = Math.sin(n), l = Math.cos(n), h = Math.sin(i), _ = Math.cos(i), d = Math.sin(s), c = Math.cos(s);
            a.x = c * h * l + d * _ * o, a.y = d * _ * l - c * h * o, a.z = c * _ * o - d * h * l, 
            a.w = c * _ * l + d * h * o;
        }
        static multiply(e, t, r) {
            var a = e.x, n = e.y, i = e.z, s = e.w, o = t.x, l = t.y, h = t.z, _ = t.w, d = n * h - i * l, c = i * o - a * h, u = a * l - n * o, m = a * o + n * l + i * h;
            r.x = a * _ + o * s + d, r.y = n * _ + l * s + c, r.z = i * _ + h * s + u, r.w = s * _ - m;
        }
        static arcTanAngle(e, t) {
            return 0 == e ? 1 == t ? Math.PI / 2 : -Math.PI / 2 : e > 0 ? Math.atan(t / e) : e < 0 ? t > 0 ? Math.atan(t / e) + Math.PI : Math.atan(t / e) - Math.PI : 0;
        }
        static angleTo(e, t, r) {
            i.subtract(t, e, T.TEMPVector30), i.normalize(T.TEMPVector30, T.TEMPVector30), r.x = Math.asin(T.TEMPVector30.y), 
            r.y = T.arcTanAngle(-T.TEMPVector30.z, -T.TEMPVector30.x);
        }
        static createFromAxisAngle(e, t, r) {
            t *= .5;
            var a = Math.sin(t);
            r.x = a * e.x, r.y = a * e.y, r.z = a * e.z, r.w = Math.cos(t);
        }
        static createFromMatrix4x4(e, t) {
            var r, a, n = e.elements, i = n[0] + n[5] + n[10];
            i > 0 ? (r = Math.sqrt(i + 1), t.w = .5 * r, r = .5 / r, t.x = (n[6] - n[9]) * r, 
            t.y = (n[8] - n[2]) * r, t.z = (n[1] - n[4]) * r) : n[0] >= n[5] && n[0] >= n[10] ? (a = .5 / (r = Math.sqrt(1 + n[0] - n[5] - n[10])), 
            t.x = .5 * r, t.y = (n[1] + n[4]) * a, t.z = (n[2] + n[8]) * a, t.w = (n[6] - n[9]) * a) : n[5] > n[10] ? (a = .5 / (r = Math.sqrt(1 + n[5] - n[0] - n[10])), 
            t.x = (n[4] + n[1]) * a, t.y = .5 * r, t.z = (n[9] + n[6]) * a, t.w = (n[8] - n[2]) * a) : (a = .5 / (r = Math.sqrt(1 + n[10] - n[0] - n[5])), 
            t.x = (n[8] + n[2]) * a, t.y = (n[9] + n[6]) * a, t.z = .5 * r, t.w = (n[1] - n[4]) * a);
        }
        static slerp(e, t, r, a) {
            var n, i, s, o, l, h = e.x, _ = e.y, d = e.z, c = e.w, u = t.x, m = t.y, f = t.z, E = t.w;
            return (i = h * u + _ * m + d * f + c * E) < 0 && (i = -i, u = -u, m = -m, f = -f, 
            E = -E), 1 - i > 1e-6 ? (n = Math.acos(i), s = Math.sin(n), o = Math.sin((1 - r) * n) / s, 
            l = Math.sin(r * n) / s) : (o = 1 - r, l = r), a.x = o * h + l * u, a.y = o * _ + l * m, 
            a.z = o * d + l * f, a.w = o * c + l * E, a;
        }
        static lerp(e, t, r, a) {
            var n = 1 - r;
            T.dot(e, t) >= 0 ? (a.x = n * e.x + r * t.x, a.y = n * e.y + r * t.y, a.z = n * e.z + r * t.z, 
            a.w = n * e.w + r * t.w) : (a.x = n * e.x - r * t.x, a.y = n * e.y - r * t.y, a.z = n * e.z - r * t.z, 
            a.w = n * e.w - r * t.w), a.normalize(a);
        }
        static add(e, t, r) {
            r.x = e.x + t.x, r.y = e.y + t.y, r.z = e.z + t.z, r.w = e.w + t.w;
        }
        static dot(e, t) {
            return e.x * t.x + e.y * t.y + e.z * t.z + e.w * t.w;
        }
        scaling(e, t) {
            t.x = this.x * e, t.y = this.y * e, t.z = this.z * e, t.w = this.w * e;
        }
        normalize(e) {
            var t = this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
            t > 0 && (t = 1 / Math.sqrt(t), e.x = this.x * t, e.y = this.y * t, e.z = this.z * t, 
            e.w = this.w * t);
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
        }
        rotateX(e, t) {
            e *= .5;
            var r = Math.sin(e), a = Math.cos(e);
            t.x = this.x * a + this.w * r, t.y = this.y * a + this.z * r, t.z = this.z * a - this.y * r, 
            t.w = this.w * a - this.x * r;
        }
        rotateY(e, t) {
            e *= .5;
            var r = Math.sin(e), a = Math.cos(e);
            t.x = this.x * a - this.z * r, t.y = this.y * a + this.w * r, t.z = this.z * a + this.x * r, 
            t.w = this.w * a - this.y * r;
        }
        rotateZ(e, t) {
            e *= .5;
            var r = Math.sin(e), a = Math.cos(e);
            t.x = this.x * a + this.y * r, t.y = this.y * a - this.x * r, t.z = this.z * a + this.w * r, 
            t.w = this.w * a - this.z * r;
        }
        getYawPitchRoll(e) {
            i.transformQuat(i._ForwardRH, this, T.TEMPVector31), i.transformQuat(i._Up, this, T.TEMPVector32);
            var t = T.TEMPVector32;
            T.angleTo(i._ZERO, T.TEMPVector31, T.TEMPVector33);
            var r = T.TEMPVector33;
            r.x == Math.PI / 2 ? (r.y = T.arcTanAngle(t.z, t.x), r.z = 0) : r.x == -Math.PI / 2 ? (r.y = T.arcTanAngle(-t.z, -t.x), 
            r.z = 0) : (h.Matrix4x4.createRotationY(-r.y, h.Matrix4x4.TEMPMatrix0), h.Matrix4x4.createRotationX(-r.x, h.Matrix4x4.TEMPMatrix1), 
            i.transformCoordinate(T.TEMPVector32, h.Matrix4x4.TEMPMatrix0, T.TEMPVector32), 
            i.transformCoordinate(T.TEMPVector32, h.Matrix4x4.TEMPMatrix1, T.TEMPVector32), 
            r.z = T.arcTanAngle(t.y, -t.x)), r.y <= -Math.PI && (r.y = Math.PI), r.z <= -Math.PI && (r.z = Math.PI), 
            r.y >= Math.PI && r.z >= Math.PI && (r.y = 0, r.z = 0, r.x = Math.PI - r.x);
            var a = e;
            a.x = r.y, a.y = r.x, a.z = r.z;
        }
        invert(e) {
            var t = this.x, r = this.y, a = this.z, n = this.w, i = t * t + r * r + a * a + n * n, s = i ? 1 / i : 0;
            e.x = -t * s, e.y = -r * s, e.z = -a * s, e.w = n * s;
        }
        identity() {
            this.x = 0, this.y = 0, this.z = 0, this.w = 1;
        }
        fromArray(e, t = 0) {
            this.x = e[t + 0], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3];
        }
        cloneTo(e) {
            this !== e && (e.x = this.x, e.y = this.y, e.z = this.z, e.w = this.w);
        }
        clone() {
            var e = new T();
            return this.cloneTo(e), e;
        }
        equals(e) {
            return r.nearEqual(this.x, e.x) && r.nearEqual(this.y, e.y) && r.nearEqual(this.z, e.z) && r.nearEqual(this.w, e.w);
        }
        static rotationLookAt(e, t, r) {
            T.lookAt(i._ZERO, e, t, r);
        }
        static lookAt(e, t, r, a) {
            E.lookAt(e, t, r, T._tempMatrix3x3), T.rotationMatrix(T._tempMatrix3x3, a);
        }
        lengthSquared() {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
        }
        static invert(e, t) {
            var a = e.lengthSquared();
            r.isZero(a) || (a = 1 / a, t.x = -e.x * a, t.y = -e.y * a, t.z = -e.z * a, t.w = e.w * a);
        }
        static rotationMatrix(e, t) {
            var r, a, n = e.elements, i = n[0], s = n[1], o = n[2], l = n[3], h = n[4], _ = n[5], d = n[6], c = n[7], u = n[8], m = i + h + u;
            m > 0 ? (r = Math.sqrt(m + 1), t.w = .5 * r, r = .5 / r, t.x = (_ - c) * r, t.y = (d - o) * r, 
            t.z = (s - l) * r) : i >= h && i >= u ? (a = .5 / (r = Math.sqrt(1 + i - h - u)), 
            t.x = .5 * r, t.y = (s + l) * a, t.z = (o + d) * a, t.w = (_ - c) * a) : h > u ? (a = .5 / (r = Math.sqrt(1 + h - i - u)), 
            t.x = (l + s) * a, t.y = .5 * r, t.z = (c + _) * a, t.w = (d - o) * a) : (a = .5 / (r = Math.sqrt(1 + u - i - h)), 
            t.x = (d + o) * a, t.y = (c + _) * a, t.z = .5 * r, t.w = (s - l) * a);
        }
        forNativeElement(e = null) {
            e ? (this.elements = e, this.elements[0] = this.x, this.elements[1] = this.y, this.elements[2] = this.z, 
            this.elements[3] = this.w) : this.elements = new Float32Array([ this.x, this.y, this.z, this.w ]), 
            a.rewriteNumProperty(this, "x", 0), a.rewriteNumProperty(this, "y", 1), a.rewriteNumProperty(this, "z", 2), 
            a.rewriteNumProperty(this, "w", 3);
        }
    }
    T.TEMPVector30 = new i(), T.TEMPVector31 = new i(), T.TEMPVector32 = new i(), T.TEMPVector33 = new i(), 
    T._tempMatrix3x3 = new E(), T.DEFAULT = new T(), T.NAN = new T(NaN, NaN, NaN, NaN);
    class p extends m {
        constructor() {
            super(), this.inTangent = new n(), this.outTangent = new n(), this.value = new T();
        }
        cloneTo(e) {
            super.cloneTo(e);
            var t = e;
            this.inTangent.cloneTo(t.inTangent), this.outTangent.cloneTo(t.outTangent), this.value.cloneTo(t.value);
        }
    }
    class g extends m {
        constructor() {
            super(), this.inTangent = new i(), this.outTangent = new i(), this.value = new i();
        }
        cloneTo(e) {
            super.cloneTo(e);
            var t = e;
            this.inTangent.cloneTo(t.inTangent), this.outTangent.cloneTo(t.outTangent), this.value.cloneTo(t.value);
        }
    }
    class S {
        static READ_DATA() {
            S._DATA.offset = S._reader.getUint32(), S._DATA.size = S._reader.getUint32();
        }
        static READ_BLOCK() {
            for (var e = S._BLOCK.count = S._reader.getUint16(), t = S._BLOCK.blockStarts = [], r = S._BLOCK.blockLengths = [], a = 0; a < e; a++) t.push(S._reader.getUint32()), 
            r.push(S._reader.getUint32());
        }
        static READ_STRINGS() {
            var e = S._reader.getUint32(), t = S._reader.getUint16(), r = S._reader.pos;
            S._reader.pos = e + S._DATA.offset;
            for (var a = 0; a < t; a++) S._strings[a] = S._reader.readUTFString();
            S._reader.pos = r;
        }
        static parse(e, t) {
            S._animationClip = e, S._reader = t, S.READ_DATA(), S.READ_BLOCK(), S.READ_STRINGS();
            for (var r = 0, a = S._BLOCK.count; r < a; r++) {
                var n = t.getUint16(), i = S._strings[n], s = S["READ_" + i];
                if (null == s) throw new Error("model file err,no this function:" + n + " " + i);
                s.call(null);
            }
        }
        static READ_ANIMATIONS() {
            var e, t, r, a = S._reader, n = [], i = a.getUint16();
            for (n.length = i, e = 0; e < i; e++) n[e] = a.getFloat32();
            var s = S._animationClip;
            s.name = S._strings[a.getUint16()];
            var o = s._duration = a.getFloat32();
            s.islooping = !!a.getByte(), s._frameRate = a.getInt16();
            var l = a.getInt16(), h = s._nodes;
            h.count = l;
            var _ = s._nodesMap = {}, d = s._nodesDic = {};
            for (e = 0; e < l; e++) {
                r = new c(), h.setNodeByIndex(e, r), r._indexInList = e;
                var m = r.type = a.getUint8(), E = a.getUint16();
                for (r._setOwnerPathCount(E), t = 0; t < E; t++) r._setOwnerPathByIndex(t, S._strings[a.getUint16()]);
                var T = r._joinOwnerPath("/"), R = _[T];
                R || (_[T] = R = []), R.push(r), r.propertyOwner = S._strings[a.getUint16()];
                var v = a.getUint16();
                for (r._setPropertyCount(v), t = 0; t < v; t++) r._setPropertyByIndex(t, S._strings[a.getUint16()]);
                var x = T + "." + r.propertyOwner + "." + r._joinProperty(".");
                d[x] = r, r.fullPath = x;
                var A = a.getUint16();
                for (r._setKeyframeCount(A), t = 0; t < A; t++) switch (m) {
                  case 0:
                    var I = new f();
                    r._setKeyframeByIndex(t, I), I.time = n[a.getUint16()], I.inTangent = a.getFloat32(), 
                    I.outTangent = a.getFloat32(), I.value = a.getFloat32();
                    break;

                  case 1:
                  case 3:
                  case 4:
                    var M = new g();
                    r._setKeyframeByIndex(t, M), M.time = n[a.getUint16()];
                    var D = M.inTangent, L = M.outTangent, y = M.value;
                    D.x = a.getFloat32(), D.y = a.getFloat32(), D.z = a.getFloat32(), L.x = a.getFloat32(), 
                    L.y = a.getFloat32(), L.z = a.getFloat32(), y.x = a.getFloat32(), y.y = a.getFloat32(), 
                    y.z = a.getFloat32();
                    break;

                  case 2:
                    var C = new p();
                    r._setKeyframeByIndex(t, C), C.time = n[a.getUint16()];
                    var O = C.inTangent, N = C.outTangent, P = C.value;
                    O.x = a.getFloat32(), O.y = a.getFloat32(), O.z = a.getFloat32(), O.w = a.getFloat32(), 
                    N.x = a.getFloat32(), N.y = a.getFloat32(), N.z = a.getFloat32(), N.w = a.getFloat32(), 
                    P.x = a.getFloat32(), P.y = a.getFloat32(), P.z = a.getFloat32(), P.w = a.getFloat32();
                    break;

                  default:
                    throw "AnimationClipParser03:unknown type.";
                }
            }
            var w = a.getUint16();
            for (e = 0; e < w; e++) {
                var V = new u();
                V.time = Math.min(o, a.getFloat32()), V.eventName = S._strings[a.getUint16()];
                var B = [], b = a.getUint16();
                for (b > 0 && (V.params = B = []), t = 0; t < b; t++) {
                    switch (a.getByte()) {
                      case 0:
                        B.push(!!a.getByte());
                        break;

                      case 1:
                        B.push(a.getInt32());
                        break;

                      case 2:
                        B.push(a.getFloat32());
                        break;

                      case 3:
                        B.push(S._strings[a.getUint16()]);
                        break;

                      default:
                        throw new Error("unknown type.");
                    }
                }
                s.addEvent(V);
            }
        }
    }
    S._strings = [], S._BLOCK = {
        count: 0
    }, S._DATA = {
        offset: 0,
        size: 0
    };
    class R {
        static READ_DATA() {
            R._DATA.offset = R._reader.getUint32(), R._DATA.size = R._reader.getUint32();
        }
        static READ_BLOCK() {
            for (var e = R._BLOCK.count = R._reader.getUint16(), t = R._BLOCK.blockStarts = [], r = R._BLOCK.blockLengths = [], a = 0; a < e; a++) t.push(R._reader.getUint32()), 
            r.push(R._reader.getUint32());
        }
        static READ_STRINGS() {
            var e = R._reader.getUint32(), t = R._reader.getUint16(), r = R._reader.pos;
            R._reader.pos = e + R._DATA.offset;
            for (var a = 0; a < t; a++) R._strings[a] = R._reader.readUTFString();
            R._reader.pos = r;
        }
        static parse(e, t, r) {
            R._animationClip = e, R._reader = t, R._version = r, R.READ_DATA(), R.READ_BLOCK(), 
            R.READ_STRINGS();
            for (var a = 0, n = R._BLOCK.count; a < n; a++) {
                var i = t.getUint16(), s = R._strings[i], o = R["READ_" + s];
                if (null == o) throw new Error("model file err,no this function:" + i + " " + s);
                o.call(null);
            }
            R._version = null, R._reader = null, R._animationClip = null;
        }
        static READ_ANIMATIONS() {
            var e, r, a, n = R._reader, i = [], s = n.getUint16();
            for (i.length = s, e = 0; e < s; e++) i[e] = n.getFloat32();
            var o = R._animationClip;
            o.name = R._strings[n.getUint16()];
            var l = o._duration = n.getFloat32();
            o.islooping = !!n.getByte(), o._frameRate = n.getInt16();
            var h = n.getInt16(), _ = o._nodes;
            _.count = h;
            var d = o._nodesMap = {}, m = o._nodesDic = {};
            for (e = 0; e < h; e++) {
                a = new c(), _.setNodeByIndex(e, a), a._indexInList = e;
                var E = a.type = n.getUint8(), T = n.getUint16();
                for (a._setOwnerPathCount(T), r = 0; r < T; r++) a._setOwnerPathByIndex(r, R._strings[n.getUint16()]);
                var S = a._joinOwnerPath("/"), v = d[S];
                v || (d[S] = v = []), v.push(a), a.propertyOwner = R._strings[n.getUint16()];
                var x = n.getUint16();
                for (a._setPropertyCount(x), r = 0; r < x; r++) a._setPropertyByIndex(r, R._strings[n.getUint16()]);
                var A = S + "." + a.propertyOwner + "." + a._joinProperty(".");
                m[A] = a, a.fullPath = A, a.nodePath = S;
                var I = n.getUint16();
                switch (a._setKeyframeCount(I), R._version) {
                  case "LAYAANIMATION:04":
                    for (r = 0; r < I; r++) switch (E) {
                      case 0:
                        var M = new f();
                        a._setKeyframeByIndex(r, M), M.time = i[n.getUint16()], M.inTangent = n.getFloat32(), 
                        M.outTangent = n.getFloat32(), M.value = n.getFloat32();
                        break;

                      case 1:
                      case 3:
                      case 4:
                        var D = new g();
                        a._setKeyframeByIndex(r, D), D.time = i[n.getUint16()];
                        var L = D.inTangent, y = D.outTangent, C = D.value;
                        L.x = n.getFloat32(), L.y = n.getFloat32(), L.z = n.getFloat32(), y.x = n.getFloat32(), 
                        y.y = n.getFloat32(), y.z = n.getFloat32(), C.x = n.getFloat32(), C.y = n.getFloat32(), 
                        C.z = n.getFloat32();
                        break;

                      case 2:
                        var O = new p();
                        a._setKeyframeByIndex(r, O), O.time = i[n.getUint16()];
                        var N = O.inTangent, P = O.outTangent, w = O.value;
                        N.x = n.getFloat32(), N.y = n.getFloat32(), N.z = n.getFloat32(), N.w = n.getFloat32(), 
                        P.x = n.getFloat32(), P.y = n.getFloat32(), P.z = n.getFloat32(), P.w = n.getFloat32(), 
                        w.x = n.getFloat32(), w.y = n.getFloat32(), w.z = n.getFloat32(), w.w = n.getFloat32();
                        break;

                      default:
                        throw "AnimationClipParser04:unknown type.";
                    }
                    break;

                  case "LAYAANIMATION:COMPRESSION_04":
                    for (r = 0; r < I; r++) switch (E) {
                      case 0:
                        M = new f(), a._setKeyframeByIndex(r, M), M.time = i[n.getUint16()], M.inTangent = t.HalfFloatUtils.convertToNumber(n.getUint16()), 
                        M.outTangent = t.HalfFloatUtils.convertToNumber(n.getUint16()), M.value = t.HalfFloatUtils.convertToNumber(n.getUint16());
                        break;

                      case 1:
                      case 3:
                      case 4:
                        D = new g(), a._setKeyframeByIndex(r, D), D.time = i[n.getUint16()], L = D.inTangent, 
                        y = D.outTangent, C = D.value, L.x = t.HalfFloatUtils.convertToNumber(n.getUint16()), 
                        L.y = t.HalfFloatUtils.convertToNumber(n.getUint16()), L.z = t.HalfFloatUtils.convertToNumber(n.getUint16()), 
                        y.x = t.HalfFloatUtils.convertToNumber(n.getUint16()), y.y = t.HalfFloatUtils.convertToNumber(n.getUint16()), 
                        y.z = t.HalfFloatUtils.convertToNumber(n.getUint16()), C.x = t.HalfFloatUtils.convertToNumber(n.getUint16()), 
                        C.y = t.HalfFloatUtils.convertToNumber(n.getUint16()), C.z = t.HalfFloatUtils.convertToNumber(n.getUint16());
                        break;

                      case 2:
                        O = new p(), a._setKeyframeByIndex(r, O), O.time = i[n.getUint16()], N = O.inTangent, 
                        P = O.outTangent, w = O.value, N.x = t.HalfFloatUtils.convertToNumber(n.getUint16()), 
                        N.y = t.HalfFloatUtils.convertToNumber(n.getUint16()), N.z = t.HalfFloatUtils.convertToNumber(n.getUint16()), 
                        N.w = t.HalfFloatUtils.convertToNumber(n.getUint16()), P.x = t.HalfFloatUtils.convertToNumber(n.getUint16()), 
                        P.y = t.HalfFloatUtils.convertToNumber(n.getUint16()), P.z = t.HalfFloatUtils.convertToNumber(n.getUint16()), 
                        P.w = t.HalfFloatUtils.convertToNumber(n.getUint16()), w.x = t.HalfFloatUtils.convertToNumber(n.getUint16()), 
                        w.y = t.HalfFloatUtils.convertToNumber(n.getUint16()), w.z = t.HalfFloatUtils.convertToNumber(n.getUint16()), 
                        w.w = t.HalfFloatUtils.convertToNumber(n.getUint16());
                        break;

                      default:
                        throw "AnimationClipParser04:unknown type.";
                    }
                }
            }
            var V = n.getUint16();
            for (e = 0; e < V; e++) {
                var B = new u();
                B.time = Math.min(l, n.getFloat32()), B.eventName = R._strings[n.getUint16()];
                var b = [], F = n.getUint16();
                for (F > 0 && (B.params = b = []), r = 0; r < F; r++) {
                    switch (n.getByte()) {
                      case 0:
                        b.push(!!n.getByte());
                        break;

                      case 1:
                        b.push(n.getInt32());
                        break;

                      case 2:
                        b.push(n.getFloat32());
                        break;

                      case 3:
                        b.push(R._strings[n.getUint16()]);
                        break;

                      default:
                        throw new Error("unknown type.");
                    }
                }
                o.addEvent(B);
            }
        }
    }
    R._strings = [], R._BLOCK = {
        count: 0
    }, R._DATA = {
        offset: 0,
        size: 0
    };
    class v {
        constructor() {
            this._nodes = [];
        }
        get count() {
            return this._nodes.length;
        }
        set count(e) {
            this._nodes.length = e;
        }
        getNodeByIndex(e) {
            return this._nodes[e];
        }
        setNodeByIndex(e, t) {
            this._nodes[e] = t;
        }
    }
    class x {
        constructor() {}
        static lightAttenTexture(e, t, r, a, n, i) {
            var s = e / r, o = 1 / (1 + 25 * s);
            s >= .64 && (s > 1 ? o = 0 : o *= 1 - (s - .64) / .36), i[n] = Math.floor(255 * o + .5);
        }
        static haloTexture(e, t, r, a, n, i) {
            var s = (e - (r >>= 1)) / r, o = (t - (a >>= 1)) / a, l = s * s + o * o;
            l > 1 && (l = 1), i[n] = Math.floor(255 * (1 - l) + .5);
        }
        static _generateTexture2D(e, r, a, n) {
            var i = 0, s = 0;
            switch (e.format) {
              case t.TextureFormat.R8G8B8:
                s = 3;
                break;

              case t.TextureFormat.R8G8B8A8:
                s = 4;
                break;

              case t.TextureFormat.Alpha8:
                s = 1;
                break;

              default:
                throw "GeneratedTexture._generateTexture: unkonw texture format.";
            }
            for (var o = new Uint8Array(r * a * s), l = 0; l < a; l++) for (var h = 0; h < r; h++) n(h, l, r, a, i, o), 
            i += s;
            e.setPixels(o);
        }
    }
    class A {
        static _createFloatTextureBuffer(e, r) {
            var a = new t.Texture2D(e, r, t.TextureFormat.R32G32B32A32, !1, !1);
            return a.filterMode = t.FilterMode.Point, a.wrapModeU = t.WarpMode.Clamp, a.wrapModeV = t.WarpMode.Clamp, 
            a.anisoLevel = 0, a;
        }
        static _convertToLayaVec3(e, t, r) {
            var a = h.Physics3D._bullet;
            t.x = r ? -a.btVector3_x(e) : a.btVector3_x(e), t.y = a.btVector3_y(e), t.z = a.btVector3_z(e);
        }
        static _convertToBulletVec3(e, t, r) {
            h.Physics3D._bullet.btVector3_setValue(t, r ? -e.x : e.x, e.y, e.z);
        }
        static _rotationTransformScaleSkinAnimation(e, t, r, a, n, i, s, o, l, h, _, d) {
            var c, u, m, f, E, T = A._tempArray16_0, p = A._tempArray16_1, g = A._tempArray16_2, S = a + a, R = n + n, v = i + i, x = a * S, I = n * S, M = n * R, D = i * S, L = i * R, y = i * v, C = s * S, O = s * R, N = s * v;
            for (T[15] = 1, T[0] = 1 - M - y, T[1] = I + N, T[2] = D - O, T[4] = I - N, T[5] = 1 - x - y, 
            T[6] = L + C, T[8] = D + O, T[9] = L - C, T[10] = 1 - x - M, p[15] = 1, p[0] = o, 
            p[5] = l, p[10] = h, c = 0; c < 4; c++) u = T[c], m = T[c + 4], f = T[c + 8], E = T[c + 12], 
            g[c] = u, g[c + 4] = m, g[c + 8] = f, g[c + 12] = u * e + m * t + f * r + E;
            for (c = 0; c < 4; c++) u = g[c], m = g[c + 4], f = g[c + 8], E = g[c + 12], _[c + d] = u * p[0] + m * p[1] + f * p[2] + E * p[3], 
            _[c + d + 4] = u * p[4] + m * p[5] + f * p[6] + E * p[7], _[c + d + 8] = u * p[8] + m * p[9] + f * p[10] + E * p[11], 
            _[c + d + 12] = u * p[12] + m * p[13] + f * p[14] + E * p[15];
        }
        static _computeBoneAndAnimationDatasByBindPoseMatrxix(e, t, r, a, n, i) {
            var s, o, l = 0, h = 0, _ = e.length;
            for (s = 0; s < _; l += e[s].keyframeWidth, h += 16, s++) A._rotationTransformScaleSkinAnimation(t[l + 0], t[l + 1], t[l + 2], t[l + 3], t[l + 4], t[l + 5], t[l + 6], t[l + 7], t[l + 8], t[l + 9], a, h), 
            0 != s && (o = 16 * e[s].parentIndex, A.mulMatrixByArray(a, o, a, h, a, h));
            var d = r.length;
            for (s = 0; s < d; s++) A.mulMatrixByArrayAndMatrixFast(a, 16 * i[s], r[s], n, 16 * s);
        }
        static _computeAnimationDatasByArrayAndMatrixFast(e, t, r, a) {
            for (var n = 0, i = e.length; n < i; n++) A.mulMatrixByArrayAndMatrixFast(t, 16 * a[n], e[n], r, 16 * n);
        }
        static _computeBoneAndAnimationDatasByBindPoseMatrxixOld(e, t, r, a, n) {
            var i, s, o = 0, l = 0, h = e.length;
            for (i = 0; i < h; o += e[i].keyframeWidth, l += 16, i++) A._rotationTransformScaleSkinAnimation(t[o + 7], t[o + 8], t[o + 9], t[o + 3], t[o + 4], t[o + 5], t[o + 6], t[o + 0], t[o + 1], t[o + 2], a, l), 
            0 != i && (s = 16 * e[i].parentIndex, A.mulMatrixByArray(a, s, a, l, a, l));
            var _ = r.length;
            for (i = 0; i < _; i++) {
                var d = 16 * i;
                A.mulMatrixByArrayAndMatrixFast(a, d, r[i], n, d);
            }
        }
        static _computeAnimationDatasByArrayAndMatrixFastOld(e, t, r) {
            for (var a = e.length, n = 0; n < a; n++) {
                var i = 16 * n;
                A.mulMatrixByArrayAndMatrixFast(t, i, e[n], r, i);
            }
        }
        static _computeRootAnimationData(e, t, r) {
            for (var a = 0, n = 0, i = 0, s = e.length; a < s; n += e[a].keyframeWidth, i += 16, 
            a++) A.createAffineTransformationArray(t[n + 0], t[n + 1], t[n + 2], t[n + 3], t[n + 4], t[n + 5], t[n + 6], t[n + 7], t[n + 8], t[n + 9], r, i);
        }
        static transformVector3ArrayByQuat(e, t, r, a, n) {
            var i = e[t], s = e[t + 1], o = e[t + 2], l = r.x, h = r.y, _ = r.z, d = r.w, c = d * i + h * o - _ * s, u = d * s + _ * i - l * o, m = d * o + l * s - h * i, f = -l * i - h * s - _ * o;
            a[n] = c * d + f * -l + u * -_ - m * -h, a[n + 1] = u * d + f * -h + m * -l - c * -_, 
            a[n + 2] = m * d + f * -_ + c * -h - u * -l;
        }
        static mulMatrixByArray(e, t, r, a, n, i) {
            var s, o, l, h, _;
            if (n === r) {
                for (r = A._tempArray16_3, s = 0; s < 16; ++s) r[s] = n[i + s];
                a = 0;
            }
            for (s = 0; s < 4; s++) o = e[t + s], l = e[t + s + 4], h = e[t + s + 8], _ = e[t + s + 12], 
            n[i + s] = o * r[a + 0] + l * r[a + 1] + h * r[a + 2] + _ * r[a + 3], n[i + s + 4] = o * r[a + 4] + l * r[a + 5] + h * r[a + 6] + _ * r[a + 7], 
            n[i + s + 8] = o * r[a + 8] + l * r[a + 9] + h * r[a + 10] + _ * r[a + 11], n[i + s + 12] = o * r[a + 12] + l * r[a + 13] + h * r[a + 14] + _ * r[a + 15];
        }
        static mulMatrixByArrayFast(e, t, r, a, n, i) {
            var s, o, l, h, _;
            for (s = 0; s < 4; s++) o = e[t + s], l = e[t + s + 4], h = e[t + s + 8], _ = e[t + s + 12], 
            n[i + s] = o * r[a + 0] + l * r[a + 1] + h * r[a + 2] + _ * r[a + 3], n[i + s + 4] = o * r[a + 4] + l * r[a + 5] + h * r[a + 6] + _ * r[a + 7], 
            n[i + s + 8] = o * r[a + 8] + l * r[a + 9] + h * r[a + 10] + _ * r[a + 11], n[i + s + 12] = o * r[a + 12] + l * r[a + 13] + h * r[a + 14] + _ * r[a + 15];
        }
        static mulMatrixByArrayAndMatrixFast(e, t, r, a, n) {
            var i, s, o, l, h, _ = r.elements, d = _[0], c = _[1], u = _[2], m = _[3], f = _[4], E = _[5], T = _[6], p = _[7], g = _[8], S = _[9], R = _[10], v = _[11], x = _[12], A = _[13], I = _[14], M = _[15], D = t, L = t + 4, y = t + 8, C = t + 12, O = n, N = n + 4, P = n + 8, w = n + 12;
            for (i = 0; i < 4; i++) s = e[D + i], o = e[L + i], l = e[y + i], h = e[C + i], 
            a[O + i] = s * d + o * c + l * u + h * m, a[N + i] = s * f + o * E + l * T + h * p, 
            a[P + i] = s * g + o * S + l * R + h * v, a[w + i] = s * x + o * A + l * I + h * M;
        }
        static createAffineTransformationArray(e, t, r, a, n, i, s, o, l, h, _, d) {
            var c = a + a, u = n + n, m = i + i, f = a * c, E = a * u, T = a * m, p = n * u, g = n * m, S = i * m, R = s * c, v = s * u, x = s * m;
            _[d + 0] = (1 - (p + S)) * o, _[d + 1] = (E + x) * o, _[d + 2] = (T - v) * o, _[d + 3] = 0, 
            _[d + 4] = (E - x) * l, _[d + 5] = (1 - (f + S)) * l, _[d + 6] = (g + R) * l, _[d + 7] = 0, 
            _[d + 8] = (T + v) * h, _[d + 9] = (g - R) * h, _[d + 10] = (1 - (f + p)) * h, _[d + 11] = 0, 
            _[d + 12] = e, _[d + 13] = t, _[d + 14] = r, _[d + 15] = 1;
        }
        static transformVector3ArrayToVector3ArrayCoordinate(e, t, r, a, n) {
            var i = e[t + 0], s = e[t + 1], o = e[t + 2], l = r.elements, h = i * l[3] + s * l[7] + o * l[11] + l[15];
            a[n] = i * l[0] + s * l[4] + o * l[8] + l[12] / h, a[n + 1] = i * l[1] + s * l[5] + o * l[9] + l[13] / h, 
            a[n + 2] = i * l[2] + s * l[6] + o * l[10] + l[14] / h;
        }
        static transformVector3ArrayToVector3ArrayNormal(e, t, r, a, n) {
            var i = e[t + 0], s = e[t + 1], o = e[t + 2], l = r.elements;
            a[n] = i * l[0] + s * l[4] + o * l[8], a[n + 1] = i * l[1] + s * l[5] + o * l[9], 
            a[n + 2] = i * l[2] + s * l[6] + o * l[10];
        }
        static transformLightingMapTexcoordArray(e, t, r, a, n) {
            a[n + 0] = e[t + 0] * r.x + r.z, a[n + 1] = 1 - ((1 - e[t + 1]) * r.y + r.w);
        }
        static getURLVerion(e) {
            var t = e.indexOf("?");
            return t >= 0 ? e.substr(t) : null;
        }
        static _createAffineTransformationArray(e, t, r, a) {
            var n = t.x, i = t.y, s = t.z, o = t.w, l = n + n, h = i + i, _ = s + s, d = n * l, c = n * h, u = n * _, m = i * h, f = i * _, E = s * _, T = o * l, p = o * h, g = o * _, S = r.x, R = r.y, v = r.z;
            a[0] = (1 - (m + E)) * S, a[1] = (c + g) * S, a[2] = (u - p) * S, a[3] = 0, a[4] = (c - g) * R, 
            a[5] = (1 - (d + E)) * R, a[6] = (f + T) * R, a[7] = 0, a[8] = (u + p) * v, a[9] = (f - T) * v, 
            a[10] = (1 - (d + m)) * v, a[11] = 0, a[12] = e.x, a[13] = e.y, a[14] = e.z, a[15] = 1;
        }
        static _mulMatrixArray(e, t, r, a, n) {
            var i = t, s = e, o = a, l = i[r], h = i[r + 1], _ = i[r + 2], d = i[r + 3], c = i[r + 4], u = i[r + 5], m = i[r + 6], f = i[r + 7], E = i[r + 8], T = i[r + 9], p = i[r + 10], g = i[r + 11], S = i[r + 12], R = i[r + 13], v = i[r + 14], x = i[r + 15], A = s[0], I = s[1], M = s[2], D = s[3], L = s[4], y = s[5], C = s[6], O = s[7], N = s[8], P = s[9], w = s[10], V = s[11], B = s[12], b = s[13], F = s[14], U = s[15];
            o[n] = l * A + h * L + _ * N + d * B, o[n + 1] = l * I + h * y + _ * P + d * b, 
            o[n + 2] = l * M + h * C + _ * w + d * F, o[n + 3] = l * D + h * O + _ * V + d * U, 
            o[n + 4] = c * A + u * L + m * N + f * B, o[n + 5] = c * I + u * y + m * P + f * b, 
            o[n + 6] = c * M + u * C + m * w + f * F, o[n + 7] = c * D + u * O + m * V + f * U, 
            o[n + 8] = E * A + T * L + p * N + g * B, o[n + 9] = E * I + T * y + p * P + g * b, 
            o[n + 10] = E * M + T * C + p * w + g * F, o[n + 11] = E * D + T * O + p * V + g * U, 
            o[n + 12] = S * A + R * L + v * N + x * B, o[n + 13] = S * I + R * y + v * P + x * b, 
            o[n + 14] = S * M + R * C + v * w + x * F, o[n + 15] = S * D + R * O + v * V + x * U;
        }
        static arcTanAngle(e, t) {
            return 0 == e ? 1 == t ? Math.PI / 2 : -Math.PI / 2 : e > 0 ? Math.atan(t / e) : e < 0 ? t > 0 ? Math.atan(t / e) + Math.PI : Math.atan(t / e) - Math.PI : 0;
        }
        static angleTo(e, t, r) {
            i.subtract(t, e, T.TEMPVector30), i.normalize(T.TEMPVector30, T.TEMPVector30), r.x = Math.asin(T.TEMPVector30.y), 
            r.y = A.arcTanAngle(-T.TEMPVector30.z, -T.TEMPVector30.x);
        }
        static transformQuat(e, t, r) {
            var a = t, n = e.x, i = e.y, s = e.z, o = a[0], l = a[1], h = a[2], _ = a[3], d = _ * n + l * s - h * i, c = _ * i + h * n - o * s, u = _ * s + o * i - l * n, m = -o * n - l * i - h * s;
            r.x = d * _ + m * -o + c * -h - u * -l, r.y = c * _ + m * -l + u * -o - d * -h, 
            r.z = u * _ + m * -h + d * -l - c * -o;
        }
        static quaternionWeight(e, t, r) {
            r.x = e.x * t, r.y = e.y * t, r.z = e.z * t, r.w = e.w;
        }
        static quaternionConjugate(e, t) {
            t.x = -e.x, t.y = -e.y, t.z = -e.z, t.w = e.w;
        }
        static scaleWeight(e, t, r) {
            var a = e.x, n = e.y, i = e.z;
            r.x = a > 0 ? Math.pow(Math.abs(a), t) : -Math.pow(Math.abs(a), t), r.y = n > 0 ? Math.pow(Math.abs(n), t) : -Math.pow(Math.abs(n), t), 
            r.z = i > 0 ? Math.pow(Math.abs(i), t) : -Math.pow(Math.abs(i), t);
        }
        static scaleBlend(e, t, r, a) {
            var n = A._tempVector3_0, i = A._tempVector3_1;
            A.scaleWeight(e, 1 - r, n), A.scaleWeight(t, r, i);
            var s = r > .5 ? t : e;
            a.x = s.x > 0 ? Math.abs(n.x * i.x) : -Math.abs(n.x * i.x), a.y = s.y > 0 ? Math.abs(n.y * i.y) : -Math.abs(n.y * i.y), 
            a.z = s.z > 0 ? Math.abs(n.z * i.z) : -Math.abs(n.z * i.z);
        }
        static matrix4x4MultiplyFFF(e, t, r) {
            var a, n, i, s, o;
            if (r === t) for (t = new Float32Array(16), a = 0; a < 16; ++a) t[a] = r[a];
            var l = t[0], h = t[1], _ = t[2], d = t[3], c = t[4], u = t[5], m = t[6], f = t[7], E = t[8], T = t[9], p = t[10], g = t[11], S = t[12], R = t[13], v = t[14], x = t[15];
            for (a = 0; a < 4; a++) n = e[a], i = e[a + 4], s = e[a + 8], o = e[a + 12], r[a] = n * l + i * h + s * _ + o * d, 
            r[a + 4] = n * c + i * u + s * m + o * f, r[a + 8] = n * E + i * T + s * p + o * g, 
            r[a + 12] = n * S + i * R + s * v + o * x;
        }
        static matrix4x4MultiplyFFFForNative(e, r, a) {
            t.LayaGL.instance.matrix4x4Multiply(e, r, a);
        }
        static matrix4x4MultiplyMFM(e, t, r) {
            A.matrix4x4MultiplyFFF(e.elements, t, r.elements);
        }
        static _buildTexture2D(e, r, a, n, i = !1) {
            var s = new t.Texture2D(e, r, a, i, !0);
            return s.anisoLevel = 1, s.filterMode = t.FilterMode.Point, x._generateTexture2D(s, e, r, n), 
            s;
        }
        static _drawBound(e, t, r) {
            e.lineCount + 12 > e.maxLineCount && (e.maxLineCount += 12);
            var a = A._tempVector3_0, n = A._tempVector3_1, i = t.min, s = t.max;
            a.setValue(i.x, i.y, i.z), n.setValue(s.x, i.y, i.z), e.addLine(a, n, r, r), a.setValue(i.x, i.y, i.z), 
            n.setValue(i.x, i.y, s.z), e.addLine(a, n, r, r), a.setValue(s.x, i.y, i.z), n.setValue(s.x, i.y, s.z), 
            e.addLine(a, n, r, r), a.setValue(i.x, i.y, s.z), n.setValue(s.x, i.y, s.z), e.addLine(a, n, r, r), 
            a.setValue(i.x, i.y, i.z), n.setValue(i.x, s.y, i.z), e.addLine(a, n, r, r), a.setValue(i.x, i.y, s.z), 
            n.setValue(i.x, s.y, s.z), e.addLine(a, n, r, r), a.setValue(s.x, i.y, i.z), n.setValue(s.x, s.y, i.z), 
            e.addLine(a, n, r, r), a.setValue(s.x, i.y, s.z), n.setValue(s.x, s.y, s.z), e.addLine(a, n, r, r), 
            a.setValue(i.x, s.y, i.z), n.setValue(s.x, s.y, i.z), e.addLine(a, n, r, r), a.setValue(i.x, s.y, i.z), 
            n.setValue(i.x, s.y, s.z), e.addLine(a, n, r, r), a.setValue(s.x, s.y, i.z), n.setValue(s.x, s.y, s.z), 
            e.addLine(a, n, r, r), a.setValue(i.x, s.y, s.z), n.setValue(s.x, s.y, s.z), e.addLine(a, n, r, r);
        }
        static _getHierarchyPath(e, t, r) {
            r.length = 0;
            for (var a = t; a !== e; ) {
                var n = a._parent;
                if (!n) return null;
                r.push(n.getChildIndex(a)), a = n;
            }
            return r;
        }
        static _getNodeByHierarchyPath(e, t) {
            for (var r = e, a = t.length - 1; a >= 0; a--) r = r.getChildAt(t[a]);
            return r;
        }
        static uint8ArrayToArrayBuffer(e) {
            let r, a = e.width, n = e.height;
            switch (e.format) {
              case t.RenderTextureFormat.R8G8B8:
              case t.RenderTextureFormat.R8G8B8A8:
                r = new Uint8Array(a * n * 4);
                break;

              case t.RenderTextureFormat.R16G16B16A16:
                r = new Float32Array(a * n * 4);
                break;

              default:
                throw "this function is not surpprt " + e.format.toString() + "format Material";
            }
            switch (e.getData(0, 0, e.width, e.height, r), e.format) {
              case t.RenderTextureFormat.R16G16B16A16:
                let i = r, s = new Uint8Array(a * n * 4);
                for (let e = 0, t = i.length; e < t; e++) s[e] = Math.min(Math.floor(255 * i[e]), 255);
                r = s;
            }
            let i = r;
            var s;
            if (t.Render.isConchApp) ; else {
                var o = new t.HTMLCanvas(!0);
                o.lock = !0, o.size(a, n);
                var l = o.getContext("2d"), h = l.createImageData(a, n);
                h.data.set(new Uint8ClampedArray(i)), l.putImageData(h, 0, 0), s = o.source.toDataURL(), 
                o.destroy();
            }
            return s;
        }
    }
    A._tempVector3_0 = new i(), A._tempVector3_1 = new i(), A._tempArray16_0 = new Float32Array(16), 
    A._tempArray16_1 = new Float32Array(16), A._tempArray16_2 = new Float32Array(16), 
    A._tempArray16_3 = new Float32Array(16), A._compIdToNode = new Object();
    class I extends t.Resource {
        constructor() {
            super(), this._duration = 0, this._frameRate = 0, this._nodes = new v(), this.islooping = !1, 
            this._animationEvents = [];
        }
        static _parse(e) {
            var r = new I(), a = new t.Byte(e), n = a.readUTFString();
            switch (n) {
              case "LAYAANIMATION:03":
                S.parse(r, a);
                break;

              case "LAYAANIMATION:04":
              case "LAYAANIMATION:COMPRESSION_04":
                R.parse(r, a, n);
                break;

              default:
                throw "unknown animationClip version.";
            }
            return r;
        }
        static load(e, r) {
            t.ILaya.loader.create(e, r, null, I.ANIMATIONCLIP);
        }
        duration() {
            return this._duration;
        }
        _hermiteInterpolate(e, t, r, a) {
            var n = e.outTangent, i = t.inTangent;
            if (Number.isFinite(n) && Number.isFinite(i)) {
                var s = r * r, o = s * r, l = o - 2 * s + r, h = o - s, _ = -2 * o + 3 * s;
                return (2 * o - 3 * s + 1) * e.value + l * n * a + h * i * a + _ * t.value;
            }
            return e.value;
        }
        _hermiteInterpolateVector3(e, t, r, a, n) {
            var i = e.value, s = e.outTangent, o = t.value, l = t.inTangent, h = r * r, _ = h * r, d = 2 * _ - 3 * h + 1, c = _ - 2 * h + r, u = _ - h, m = -2 * _ + 3 * h, f = s.x, E = l.x;
            Number.isFinite(f) && Number.isFinite(E) ? n.x = d * i.x + c * f * a + u * E * a + m * o.x : n.x = i.x, 
            f = s.y, E = l.y, Number.isFinite(f) && Number.isFinite(E) ? n.y = d * i.y + c * f * a + u * E * a + m * o.y : n.y = i.y, 
            f = s.z, E = l.z, Number.isFinite(f) && Number.isFinite(E) ? n.z = d * i.z + c * f * a + u * E * a + m * o.z : n.z = i.z;
        }
        _hermiteInterpolateQuaternion(e, t, r, a, n) {
            var i = e.value, s = e.outTangent, o = t.value, l = t.inTangent, h = r * r, _ = h * r, d = 2 * _ - 3 * h + 1, c = _ - 2 * h + r, u = _ - h, m = -2 * _ + 3 * h, f = s.x, E = l.x;
            Number.isFinite(f) && Number.isFinite(E) ? n.x = d * i.x + c * f * a + u * E * a + m * o.x : n.x = i.x, 
            f = s.y, E = l.y, Number.isFinite(f) && Number.isFinite(E) ? n.y = d * i.y + c * f * a + u * E * a + m * o.y : n.y = i.y, 
            f = s.z, E = l.z, Number.isFinite(f) && Number.isFinite(E) ? n.z = d * i.z + c * f * a + u * E * a + m * o.z : n.z = i.z, 
            f = s.w, E = l.w, Number.isFinite(f) && Number.isFinite(E) ? n.w = d * i.w + c * f * a + u * E * a + m * o.w : n.w = i.w;
        }
        _evaluateClipDatasRealTime(e, t, r, a, n, i, s) {
            for (var o = 0, l = e.count; o < l; o++) {
                var h, _ = e.getNodeByIndex(o), d = _.type, c = _._keyFrames, u = c.length, m = r[o];
                if (!s || s.getTransformActive(_.nodePath)) {
                    if (n) for (-1 !== m && t < c[m].time && (m = -1, r[o] = m), h = m + 1; h < u && !(c[h].time > t); ) m++, 
                    h++, r[o] = m; else for ((h = m + 1) !== u && t > c[h].time && (m = u - 1, r[o] = m), 
                    h = m + 1; m > -1 && !(c[m].time < t); ) m--, h--, r[o] = m;
                    var f = h === u;
                    switch (d) {
                      case 0:
                        if (-1 !== m) {
                            var E = c[m];
                            if (f) i[o] = E.value; else {
                                var p, g = c[h], S = g.time - E.time;
                                p = 0 !== S ? (t - E.time) / S : 0, i[o] = this._hermiteInterpolate(E, g, p, S);
                            }
                        } else i[o] = c[0].value;
                        a && (i[o] = i[o] - c[0].value);
                        break;

                      case 1:
                      case 4:
                        var R = i[o];
                        if (this._evaluateFrameNodeVector3DatasRealTime(c, m, f, t, R), a) {
                            var v = c[0].value;
                            R.x -= v.x, R.y -= v.y, R.z -= v.z;
                        }
                        break;

                      case 2:
                        var x = i[o];
                        if (this._evaluateFrameNodeQuaternionDatasRealTime(c, m, f, t, x), a) {
                            var M = I._tempQuaternion0, D = c[0].value;
                            A.quaternionConjugate(D, M), T.multiply(M, x, x);
                        }
                        break;

                      case 3:
                        R = i[o], this._evaluateFrameNodeVector3DatasRealTime(c, m, f, t, R), a && (v = c[0].value, 
                        R.x /= v.x, R.y /= v.y, R.z /= v.z);
                        break;

                      default:
                        throw "AnimationClip:unknown node type.";
                    }
                }
            }
        }
        _evaluateClipDatasRealTimeForNative(e, r, a, n) {
            t.LayaGL.instance.evaluateClipDatasRealTime(e._nativeObj, r, a, n);
        }
        _evaluateFrameNodeVector3DatasRealTime(e, t, r, a, n) {
            if (-1 !== t) {
                var i = e[t];
                if (r) {
                    var s = i.value;
                    n.x = s.x, n.y = s.y, n.z = s.z;
                } else {
                    var o, l = e[t + 1], h = i.time, _ = l.time - h;
                    o = 0 !== _ ? (a - h) / _ : 0, this._hermiteInterpolateVector3(i, l, o, _, n);
                }
            } else {
                var d = e[0].value;
                n.x = d.x, n.y = d.y, n.z = d.z;
            }
        }
        _evaluateFrameNodeQuaternionDatasRealTime(e, t, r, a, n) {
            if (-1 !== t) {
                var i = e[t];
                if (r) {
                    var s = i.value;
                    n.x = s.x, n.y = s.y, n.z = s.z, n.w = s.w;
                } else {
                    var o, l = e[t + 1], h = i.time, _ = l.time - h;
                    o = 0 !== _ ? (a - h) / _ : 0, this._hermiteInterpolateQuaternion(i, l, o, _, n);
                }
            } else {
                var d = e[0].value;
                n.x = d.x, n.y = d.y, n.z = d.z, n.w = d.w;
            }
        }
        _binarySearchEventIndex(e) {
            for (var t, r = 0, a = this._animationEvents.length - 1; r <= a; ) {
                t = Math.floor((r + a) / 2);
                var n = this._animationEvents[t].time;
                if (n == e) return t;
                n > e ? a = t - 1 : r = t + 1;
            }
            return r;
        }
        addEvent(e) {
            var t = this._binarySearchEventIndex(e.time);
            this._animationEvents.splice(t, 0, e);
        }
        _disposeResource() {
            this._nodes = null, this._nodesMap = null;
        }
    }
    I.ANIMATIONCLIP = "ANIMATIONCLIP", I._tempQuaternion0 = new T();
    class M {
        constructor() {
            this._currentState = null;
        }
        get normalizedTime() {
            return this._normalizedTime;
        }
        get duration() {
            return this._duration;
        }
        get animatorState() {
            return this._currentState;
        }
        _resetPlayState(e, t) {
            this._finish = !1, this._startPlayTime = e, this._elapsedTime = e, this._playEventIndex = 0, 
            this._lastIsFront = !0, this._normalizedTime = this._elapsedTime / t;
            var r = this._normalizedTime % 1;
            this._normalizedPlayTime = r < 0 ? r + 1 : r;
        }
        _cloneTo(e) {
            e._finish = this._finish, e._startPlayTime = this._startPlayTime, e._elapsedTime = this._elapsedTime, 
            e._normalizedTime = this._normalizedTime, e._normalizedPlayTime = this._normalizedPlayTime, 
            e._playEventIndex = this._playEventIndex, e._lastIsFront = this._lastIsFront;
        }
    }
    class D {
        constructor(e) {
            this._referenceCount = 0, this._playType = -1, this._crossDuration = -1, this._crossMark = 0, 
            this._crossNodesOwnersCount = 0, this._crossNodesOwners = [], this._crossNodesOwnersIndicesMap = {}, 
            this._srcCrossClipNodeIndices = [], this._destCrossClipNodeIndices = [], this._statesMap = {}, 
            this._states = [], this._playStateInfo = new M(), this._crossPlayStateInfo = new M(), 
            this.blendingMode = D.BLENDINGMODE_OVERRIDE, this.defaultWeight = 1, this.playOnWake = !0, 
            this.name = e;
        }
        get defaultState() {
            return this._defaultState;
        }
        set defaultState(e) {
            this._defaultState = e, this._statesMap[e.name] = e;
        }
        get avatarMask() {
            return this._avatarMask;
        }
        set avatarMask(e) {
            this._avatarMask = e;
        }
        _removeClip(e, t, r, a) {
            var n = a._clip, i = e[r];
            if (e.splice(r, 1), delete t[a.name], this._animator) {
                var s = n._nodes, o = i._nodeOwners;
                n._removeReference();
                for (var l = 0, h = s.count; l < h; l++) this._animator._removeKeyframeNodeOwner(o, s.getNodeByIndex(l));
            }
        }
        _getReferenceCount() {
            return this._referenceCount;
        }
        _addReference(e = 1) {
            for (var t = 0, r = this._states.length; t < r; t++) this._states[t]._addReference(e);
            this._referenceCount += e;
        }
        _removeReference(e = 1) {
            for (var t = 0, r = this._states.length; t < r; t++) this._states[t]._removeReference(e);
            this._referenceCount -= e;
        }
        _clearReference() {
            this._removeReference(-this._referenceCount);
        }
        getCurrentPlayState() {
            return this._playStateInfo;
        }
        getAnimatorState(e) {
            var t = this._statesMap[e];
            return t || null;
        }
        addState(e) {
            var t = e.name;
            if (this._statesMap[t]) throw "AnimatorControllerLayer:this stat's name has exist.";
            this._statesMap[t] = e, this._states.push(e), this._animator && (e._clip._addReference(), 
            this._animator._getOwnersByClip(e));
        }
        removeState(e) {
            for (var t = this._states, r = -1, a = 0, n = t.length; a < n; a++) if (t[a] === e) {
                r = a;
                break;
            }
            -1 !== r && this._removeClip(t, this._statesMap, r, e);
        }
        destroy() {
            this._clearReference(), this._statesMap = null, this._states = [], this._playStateInfo = null, 
            this._crossPlayStateInfo = null, this._defaultState = null;
        }
        cloneTo(e) {
            var t = e;
            t.name = this.name, t.blendingMode = this.blendingMode, t.defaultWeight = this.defaultWeight, 
            t.playOnWake = this.playOnWake;
        }
        clone() {
            var e = new D(this.name);
            return this.cloneTo(e), e;
        }
    }
    D.BLENDINGMODE_OVERRIDE = 0, D.BLENDINGMODE_ADDTIVE = 1;
    class L {
        constructor() {
            this._referenceCount = 0, this._clip = null, this._nodeOwners = [], this._currentFrameIndices = null, 
            this._realtimeDatas = [], this._scripts = null, this.speed = 1, this.clipStart = 0, 
            this.clipEnd = 1;
        }
        get clip() {
            return this._clip;
        }
        set clip(e) {
            if (this._clip !== e) {
                if (this._clip && this._referenceCount > 0 && this._clip._removeReference(this._referenceCount), 
                e) {
                    var t = this._realtimeDatas, r = e._nodes, a = r.count;
                    this._currentFrameIndices = new Int16Array(a), this._resetFrameIndices(), this._referenceCount > 0 && e._addReference(this._referenceCount), 
                    this._realtimeDatas.length = a;
                    for (var n = 0; n < a; n++) switch (r.getNodeByIndex(n).type) {
                      case 0:
                        break;

                      case 1:
                      case 3:
                      case 4:
                        t[n] = new i();
                        break;

                      case 2:
                        t[n] = new T();
                        break;

                      default:
                        throw "AnimationClipParser04:unknown type.";
                    }
                }
                this._clip = e;
            }
        }
        _getReferenceCount() {
            return this._referenceCount;
        }
        _addReference(e = 1) {
            this._clip && this._clip._addReference(e), this._referenceCount += e;
        }
        _removeReference(e = 1) {
            this._clip && this._clip._removeReference(e), this._referenceCount -= e;
        }
        _clearReference() {
            this._removeReference(-this._referenceCount);
        }
        _resetFrameIndices() {
            for (var e = 0, t = this._currentFrameIndices.length; e < t; e++) this._currentFrameIndices[e] = -1;
        }
        addScript(e) {
            var t = new e();
            return this._scripts = this._scripts || [], this._scripts.push(t), t;
        }
        getScript(e) {
            if (this._scripts) for (var t = 0, r = this._scripts.length; t < r; t++) {
                var a = this._scripts[t];
                if (a instanceof e) return a;
            }
            return null;
        }
        getScripts(e) {
            var t = null;
            if (this._scripts) for (var r = 0, a = this._scripts.length; r < a; r++) {
                var n = this._scripts[r];
                n instanceof e && (t = t || []).push(n);
            }
            return t;
        }
        cloneTo(e) {
            var t = e;
            t.name = this.name, t.speed = this.speed, t.clipStart = this.clipStart, t.clipEnd = this.clipEnd, 
            t.clip = this._clip;
        }
        clone() {
            var e = new L();
            return this.cloneTo(e), e;
        }
    }
    class y {
        constructor() {
            this.indexInList = -1, this.referenceCount = 0, this.updateMark = -1, this.type = -1, 
            this.fullPath = null, this.propertyOwner = null, this.property = null, this.defaultValue = null, 
            this.value = null, this.crossFixedValue = null;
        }
        saveCrossFixedValue() {
            if (this.propertyOwner) switch (this.type) {
              case 0:
                this.crossFixedValue = this.value;
                break;

              case 1:
              case 3:
              case 4:
              case 2:
                this.value.cloneTo(this.crossFixedValue);
                break;

              default:
                throw "Animator:unknown type.";
            }
        }
    }
    class C {
        constructor(e) {
            this._avatarPathMap = {}, this._catchAnimator = e;
        }
        get getCatchAnimator() {
            return this._catchAnimator;
        }
        getTransformActive(e) {
            return this._avatarPathMap[e];
        }
        setTransformActive(e, t) {
            this._avatarPathMap[e] = t;
        }
        getAllTranfromPath() {
            return this._avatarPathMap;
        }
    }
    class O extends t.Component {
        constructor() {
            super(), this._keyframeNodeOwners = [], this._linkAvatarSpritesData = {}, this._linkAvatarSprites = [], 
            this._renderableSprites = [], this.cullingMode = O.CULLINGMODE_CULLCOMPLETELY, this._controllerLayers = [], 
            this._linkSprites = {}, this._speed = 1, this._keyframeNodeOwnerMap = {}, this._updateMark = 0;
        }
        static _update(e) {
            for (var t = e._animatorPool, r = t.elements, a = 0, n = t.length; a < n; a++) {
                var i = r[a];
                i && i.enabled && i._update();
            }
        }
        get speed() {
            return this._speed;
        }
        set speed(e) {
            this._speed = e;
        }
        get controllerLayerCount() {
            return this._controllerLayers.length;
        }
        _linkToSprites(e) {
            for (var t in e) {
                for (var r = this.owner, a = e[t], n = 0, i = a.length; n < i; n++) {
                    var s = a[n];
                    if ("" === s) break;
                    if (!(r = r.getChildByName(s))) break;
                }
                r && this.linkSprite3DToAvatarNode(t, r);
            }
        }
        _addKeyframeNodeOwner(e, t, r) {
            var a = t._indexInList, n = t.fullPath, i = this._keyframeNodeOwnerMap[n];
            if (i) i.referenceCount++, e[a] = i; else {
                for (var s = r, o = 0, l = t.propertyCount; o < l && (s = s[t.getPropertyByIndex(o)]); o++) ;
                (i = this._keyframeNodeOwnerMap[n] = new y()).fullPath = n, i.indexInList = this._keyframeNodeOwners.length, 
                i.referenceCount = 1, i.propertyOwner = r;
                var h = t.propertyCount, _ = [];
                for (o = 0; o < h; o++) _[o] = t.getPropertyByIndex(o);
                if (i.property = _, i.type = t.type, s) if (0 === t.type) i.defaultValue = s; else {
                    var d = new s.constructor();
                    s.cloneTo(d), i.defaultValue = d, i.value = new s.constructor(), i.crossFixedValue = new s.constructor();
                }
                this._keyframeNodeOwners.push(i), e[a] = i;
            }
        }
        _removeKeyframeNodeOwner(e, t) {
            var r = t.fullPath, a = this._keyframeNodeOwnerMap[r];
            a && (a.referenceCount--, 0 === a.referenceCount && (delete this._keyframeNodeOwnerMap[r], 
            this._keyframeNodeOwners.splice(this._keyframeNodeOwners.indexOf(a), 1)), e[t._indexInList] = null);
        }
        _getOwnersByClip(e) {
            var t = e._clip._nodes, r = t.count, a = e._nodeOwners;
            a.length = r;
            for (var n = 0; n < r; n++) {
                for (var i = t.getNodeByIndex(n), s = this._avatar ? this._avatarNodeMap[this._avatar._rootNode.name] : this.owner, o = 0, l = i.ownerPathCount; o < l; o++) {
                    var h = i.getOwnerPathByIndex(o);
                    if ("" === h) break;
                    if (!(s = s.getChildByName(h))) break;
                }
                if (s) {
                    var _ = i.propertyOwner;
                    _ && (s = s[_]), s && this._addKeyframeNodeOwner(a, i, s);
                }
            }
        }
        _updatePlayer(e, t, r, a) {
            var n = e._clip._duration * (e.clipEnd - e.clipStart), i = t._elapsedTime, s = i + r;
            t._lastElapsedTime = i, t._elapsedTime = s;
            var o = s / n;
            t._normalizedTime = o;
            var l = o % 1;
            t._normalizedPlayTime = l < 0 ? l + 1 : l, t._duration = n;
            var h = e._scripts;
            if (!a && s >= n) {
                if (t._finish = !0, t._elapsedTime = n, t._normalizedPlayTime = 1, h) for (var _ = 0, d = h.length; _ < d; _++) h[_].onStateExit();
            } else if (h) for (_ = 0, d = h.length; _ < d; _++) h[_].onStateUpdate();
        }
        _eventScript(e, t, r, a, n) {
            if (n) for (var i = t.length; r < i; r++) {
                var s = t[r];
                if (!(s.time <= a)) break;
                for (var o = 0, l = e.length; o < l; o++) {
                    var h = e[o], _ = h[s.eventName];
                    _ && _.apply(h, s.params);
                }
            } else for (;r >= 0 && (s = t[r]).time >= a; r--) for (o = 0, l = e.length; o < l; o++) (_ = (h = e[o])[s.eventName]) && _.apply(h, s.params);
            return r;
        }
        _updateEventScript(e, t) {
            var r = this.owner._scripts;
            if (r) {
                var a = e._clip, n = a._animationEvents, i = a._duration, s = t._elapsedTime, o = s % i, l = Math.abs(Math.floor(s / i) - Math.floor(t._lastElapsedTime / i)), h = t._elapsedTime >= t._lastElapsedTime;
                t._lastIsFront !== h && (h ? t._playEventIndex++ : t._playEventIndex--, t._lastIsFront = h);
                var _ = t._playEventIndex;
                if (h) {
                    var d = this._eventScript(r, n, t._playEventIndex, l > 0 ? i : o, !0);
                    _ === t._playEventIndex && (t._playEventIndex = d);
                    for (var c = 0, u = l - 1; c < u; c++) this._eventScript(r, n, 0, i, !0);
                    l > 0 && o > 0 && (t._playEventIndex = this._eventScript(r, n, 0, o, !0));
                } else {
                    d = this._eventScript(r, n, t._playEventIndex, l > 0 ? 0 : o, !1);
                    _ === t._playEventIndex && (t._playEventIndex = d);
                    var m = n.length - 1;
                    for (c = 0, u = l - 1; c < u; c++) this._eventScript(r, n, m, 0, !1);
                    l > 0 && o > 0 && (t._playEventIndex = this._eventScript(r, n, m, o, !1));
                }
            }
        }
        _updateClipDatas(e, t, r, a = null) {
            var n = e._clip, i = n._duration, s = e.clipStart * i + r._normalizedPlayTime * r._duration, o = e._currentFrameIndices, l = r._elapsedTime > r._lastElapsedTime;
            n._evaluateClipDatasRealTime(n._nodes, s, o, t, l, e._realtimeDatas, a);
        }
        _applyFloat(e, t, r, a, n, i, s) {
            if (r.updateMark === this._updateMark) if (a) e[t] += n * s; else {
                var o = e[t];
                e[t] = o + n * (s - o);
            } else if (i) e[t] = a ? r.defaultValue + s : s; else if (a) e[t] = r.defaultValue + n * s; else {
                var l = r.defaultValue;
                e[t] = l + n * (s - l);
            }
        }
        _applyPositionAndRotationEuler(e, t, r, a, n, i) {
            if (e.updateMark === this._updateMark) if (t) i.x += r * n.x, i.y += r * n.y, i.z += r * n.z; else {
                var s = i.x, o = i.y, l = i.z;
                i.x = s + r * (n.x - s), i.y = o + r * (n.y - o), i.z = l + r * (n.z - l);
            } else if (a) if (t) {
                var h = e.defaultValue;
                i.x = h.x + n.x, i.y = h.y + n.y, i.z = h.z + n.z;
            } else i.x = n.x, i.y = n.y, i.z = n.z; else if (h = e.defaultValue, t) i.x = h.x + r * n.x, 
            i.y = h.y + r * n.y, i.z = h.z + r * n.z; else {
                var _ = h.x, d = h.y, c = h.z;
                i.x = _ + r * (n.x - _), i.y = d + r * (n.y - d), i.z = c + r * (n.z - c);
            }
        }
        _applyRotation(e, t, r, a, n, i) {
            if (e.updateMark === this._updateMark) if (t) {
                var s = O._tempQuaternion1;
                A.quaternionWeight(n, r, s), s.normalize(s), T.multiply(i, s, i);
            } else T.lerp(i, n, r, i); else if (a) if (t) {
                var o = e.defaultValue;
                T.multiply(o, n, i);
            } else i.x = n.x, i.y = n.y, i.z = n.z, i.w = n.w; else o = e.defaultValue, t ? (s = O._tempQuaternion1, 
            A.quaternionWeight(n, r, s), s.normalize(s), T.multiply(o, s, i)) : T.lerp(o, n, r, i);
        }
        _applyScale(e, t, r, a, n, i) {
            if (e.updateMark === this._updateMark) if (t) {
                var s = O._tempVector31;
                A.scaleWeight(n, r, s), i.x = i.x * s.x, i.y = i.y * s.y, i.z = i.z * s.z;
            } else A.scaleBlend(i, n, r, i); else if (a) if (t) {
                var o = e.defaultValue;
                i.x = o.x * n.x, i.y = o.y * n.y, i.z = o.z * n.z;
            } else i.x = n.x, i.y = n.y, i.z = n.z; else o = e.defaultValue, t ? (s = O._tempVector31, 
            A.scaleWeight(n, r, s), i.x = o.x * s.x, i.y = o.y * s.y, i.z = o.z * s.z) : A.scaleBlend(o, n, r, i);
        }
        _applyCrossData(e, t, r, a, n, i, s) {
            var o = e.propertyOwner;
            if (o) {
                switch (e.type) {
                  case 0:
                    for (var l = e.property, h = l.length - 1, _ = 0; _ < h && (o = o[l[_]]); _++) ;
                    var d = n + s * (i - n);
                    e.value = d, o && this._applyFloat(o, l[h], e, t, r, a, d);
                    break;

                  case 1:
                    var c = o.localPosition, u = e.value, m = n.x, f = n.y, E = n.z;
                    u.x = m + s * (i.x - m), u.y = f + s * (i.y - f), u.z = E + s * (i.z - E), this._applyPositionAndRotationEuler(e, t, r, a, u, c), 
                    o.localPosition = c;
                    break;

                  case 2:
                    var p = o.localRotation, g = e.value;
                    T.lerp(n, i, s, g), this._applyRotation(e, t, r, a, g, p), o.localRotation = p;
                    break;

                  case 3:
                    var S = o.localScale, R = e.value;
                    A.scaleBlend(n, i, s, R), this._applyScale(e, t, r, a, R, S), o.localScale = S;
                    break;

                  case 4:
                    var v = o.localRotationEuler, x = e.value;
                    m = n.x, f = n.y, E = n.z, x.x = m + s * (i.x - m), x.y = f + s * (i.y - f), x.z = E + s * (i.z - E), 
                    this._applyPositionAndRotationEuler(e, t, r, a, x, v), o.localRotationEuler = v;
                }
                e.updateMark = this._updateMark;
            }
        }
        _setClipDatasToNode(e, t, r, a, n = null) {
            for (var i = e._realtimeDatas, s = e._clip._nodes, o = e._nodeOwners, l = 0, h = s.count; l < h; l++) {
                var _ = o[l];
                if (_) {
                    var d = s.getNodeByIndex(l);
                    if (n.avatarMask && !n.avatarMask.getTransformActive(d.nodePath)) continue;
                    var c = _.propertyOwner;
                    if (c) {
                        switch (_.type) {
                          case 0:
                            for (var u = _.property, m = u.length - 1, f = 0; f < m && (c = c[u[f]]); f++) ;
                            c && this._applyFloat(c, u[m], _, t, r, a, i[l]);
                            break;

                          case 1:
                            var E = c.localPosition;
                            this._applyPositionAndRotationEuler(_, t, r, a, i[l], E), c.localPosition = E;
                            break;

                          case 2:
                            var T = c.localRotation;
                            this._applyRotation(_, t, r, a, i[l], T), c.localRotation = T;
                            break;

                          case 3:
                            var p = c.localScale;
                            this._applyScale(_, t, r, a, i[l], p), c.localScale = p;
                            break;

                          case 4:
                            var g = c.localRotationEuler;
                            this._applyPositionAndRotationEuler(_, t, r, a, i[l], g), c.localRotationEuler = g;
                        }
                        _.updateMark = this._updateMark;
                    }
                }
            }
        }
        _setCrossClipDatasToNode(e, t, r, a, n) {
            for (var i = e._crossNodesOwners, s = e._crossNodesOwnersCount, o = e.blendingMode !== D.BLENDINGMODE_OVERRIDE, l = e.defaultWeight, h = r._realtimeDatas, _ = e._destCrossClipNodeIndices, d = r._nodeOwners, c = t._realtimeDatas, u = e._srcCrossClipNodeIndices, m = t._nodeOwners, f = 0; f < s; f++) {
                var E = i[f];
                if (E) {
                    var T = u[f], p = _[f], g = -1 !== T ? c[T] : d[p].defaultValue, S = -1 !== p ? h[p] : m[T].defaultValue;
                    this._applyCrossData(E, o, l, n, g, S, a);
                }
            }
        }
        _setFixedCrossClipDatasToNode(e, t, r, a) {
            for (var n = e._crossNodesOwners, i = e._crossNodesOwnersCount, s = e.blendingMode !== D.BLENDINGMODE_OVERRIDE, o = e.defaultWeight, l = t._realtimeDatas, h = e._destCrossClipNodeIndices, _ = 0; _ < i; _++) {
                var d = n[_];
                if (d) {
                    var c = h[_], u = d.crossFixedValue, m = -1 !== c ? l[c] : d.defaultValue;
                    this._applyCrossData(d, s, o, a, u, m, r);
                }
            }
        }
        _revertDefaultKeyframeNodes(e) {
            for (var t = e._nodeOwners, r = 0, a = t.length; r < a; r++) {
                var n = t[r];
                if (n) {
                    var i = n.propertyOwner;
                    if (i) switch (n.type) {
                      case 0:
                        for (var s = n.property, o = s.length - 1, l = 0; l < o && (i = i[s[l]]); l++) ;
                        i[s[o]] = n.defaultValue;
                        break;

                      case 1:
                        var h = i.localPosition, _ = n.defaultValue;
                        h.x = _.x, h.y = _.y, h.z = _.z, i.localPosition = h;
                        break;

                      case 2:
                        var d = i.localRotation, c = n.defaultValue;
                        d.x = c.x, d.y = c.y, d.z = c.z, d.w = c.w, i.localRotation = d;
                        break;

                      case 3:
                        var u = i.localScale;
                        _ = n.defaultValue, u.x = _.x, u.y = _.y, u.z = _.z, i.localScale = u;
                        break;

                      case 4:
                        var m = i.localRotationEuler;
                        _ = n.defaultValue, m.x = _.x, m.y = _.y, m.z = _.z, i.localRotationEuler = m;
                        break;

                      default:
                        throw "Animator:unknown type.";
                    }
                }
            }
        }
        _onAdded() {
            var e = this.owner._parent;
            this.owner._setHierarchyAnimator(this, e ? e._hierarchyAnimator : null), this.owner._changeAnimatorToLinkSprite3DNoAvatar(this, !0, []);
        }
        _onDestroy() {
            for (var e = 0, t = this._controllerLayers.length; e < t; e++) this._controllerLayers[e]._removeReference();
            var r = this.owner._parent;
            this.owner._clearHierarchyAnimator(this, r ? r._hierarchyAnimator : null);
        }
        _onEnable() {
            this.owner._scene._animatorPool.add(this);
            for (var e = 0, t = this._controllerLayers.length; e < t; e++) {
                if (this._controllerLayers[e].playOnWake) this.getDefaultState(e) && this.play(null, e, 0);
            }
        }
        _onDisable() {
            this.owner._scene._animatorPool.remove(this);
        }
        _handleSpriteOwnersBySprite(e, t, r) {
            for (var a = 0, n = this._controllerLayers.length; a < n; a++) for (var i = this._controllerLayers[a]._states, s = 0, o = i.length; s < o; s++) {
                var l = i[s], h = l._clip, _ = t.join("/"), d = h._nodesMap[_];
                if (d) for (var c = l._nodeOwners, u = 0, m = d.length; u < m; u++) e ? this._addKeyframeNodeOwner(c, d[u], r) : this._removeKeyframeNodeOwner(c, d[u]);
            }
        }
        _parse(e) {
            var r = e.avatar;
            if (r) {
                this.avatar = t.Loader.getRes(r.path);
                var a = r.linkSprites;
                this._linkSprites = a, this._linkToSprites(a);
            }
            for (var n = e.playOnWake, i = e.layers, s = 0; s < i.length; s++) {
                var o = i[s], l = new D(o.name);
                l.defaultWeight = 0 === s ? 1 : o.weight;
                var h = o.blendingMode;
                h && (l.blendingMode = h), this.addControllerLayer(l);
                for (var _ = o.states, d = 0, c = _.length; d < c; d++) {
                    var u = _[d], m = u.clipPath;
                    if (m) {
                        var f, E = u.name;
                        if (f = t.Loader.getRes(m)) {
                            var T = new L();
                            T.name = E, T.clip = f, l.addState(T), 0 === d && (this.getControllerLayer(s).defaultState = T);
                        }
                    }
                }
                void 0 !== n && (l.playOnWake = n);
                let e = o.avatarMask;
                if (e) {
                    let t = new C(this);
                    for (var p in l.avatarMask = t, e) t.setTransformActive(p, e[p]);
                }
            }
            var g = e.cullingMode;
            void 0 !== g && (this.cullingMode = g);
        }
        _update() {
            var e = this.owner._scene.timer._delta / 1e3;
            if (0 !== this._speed && 0 !== e) {
                var t;
                if (this.cullingMode === O.CULLINGMODE_CULLCOMPLETELY) {
                    t = !1;
                    for (var r = 0, a = this._renderableSprites.length; r < a; r++) if (this._renderableSprites[r]._render.isRender) {
                        t = !0;
                        break;
                    }
                } else t = !0;
                for (this._updateMark++, r = 0, a = this._controllerLayers.length; r < a; r++) {
                    var n = this._controllerLayers[r], i = n._playStateInfo, s = n._crossPlayStateInfo;
                    switch (d = n.blendingMode !== D.BLENDINGMODE_OVERRIDE, n._playType) {
                      case 0:
                        var o = i._currentState, l = o._clip, h = this._speed * o.speed, _ = i._finish;
                        if (_ || this._updatePlayer(o, i, e * h, l.islooping), t) {
                            var d = n.blendingMode !== D.BLENDINGMODE_OVERRIDE;
                            this._updateClipDatas(o, d, i, n.avatarMask), this._setClipDatasToNode(o, d, n.defaultWeight, 0 === r, n), 
                            _ || this._updateEventScript(o, i);
                        }
                        break;

                      case 1:
                        l = (o = i._currentState)._clip;
                        var c = n._crossPlayState, u = c._clip, m = n._crossDuration, f = s._startPlayTime, E = u._duration - f, T = m > E ? E / m : 1, p = this._speed * c.speed;
                        this._updatePlayer(c, s, e * T * p, u.islooping);
                        var g = (s._elapsedTime - f) / T / m;
                        g >= 1 ? t && (this._updateClipDatas(c, d, s, n.avatarMask), this._setClipDatasToNode(c, d, n.defaultWeight, 0 === r, n), 
                        n._playType = 0, i._currentState = c, s._cloneTo(i)) : (i._finish || (h = this._speed * o.speed, 
                        this._updatePlayer(o, i, e * h, l.islooping), t && this._updateClipDatas(o, d, i, n.avatarMask)), 
                        t && (this._updateClipDatas(c, d, s, n.avatarMask), this._setCrossClipDatasToNode(n, o, c, g, 0 === r))), 
                        t && (this._updateEventScript(o, i), this._updateEventScript(c, s));
                        break;

                      case 2:
                        u = (c = n._crossPlayState)._clip, m = n._crossDuration, f = s._startPlayTime, T = m > (E = u._duration - f) ? E / m : 1, 
                        p = this._speed * c.speed, this._updatePlayer(c, s, e * T * p, u.islooping), t && ((g = (s._elapsedTime - f) / T / m) >= 1 ? (this._updateClipDatas(c, d, s, n.avatarMask), 
                        this._setClipDatasToNode(c, d, 1, 0 === r, n), n._playType = 0, i._currentState = c, 
                        s._cloneTo(i)) : (this._updateClipDatas(c, d, s, n.avatarMask), this._setFixedCrossClipDatasToNode(n, c, g, 0 === r)), 
                        this._updateEventScript(c, s));
                    }
                }
                t && this._avatar && this._updateAvatarNodesToSprite();
            }
        }
        _cloneTo(e) {
            var t = e;
            t.avatar = this.avatar, t.cullingMode = this.cullingMode;
            for (var r = 0, a = this._controllerLayers.length; r < a; r++) {
                var n = this._controllerLayers[r];
                t.addControllerLayer(n.clone());
                for (var i = n._states, s = 0, o = i.length; s < o; s++) {
                    var l = i[s].clone(), h = t.getControllerLayer(r);
                    h.addState(l), 0 == s && (h.defaultState = l);
                }
            }
            t._linkSprites = this._linkSprites, t._linkToSprites(this._linkSprites);
        }
        getDefaultState(e = 0) {
            return this._controllerLayers[e].defaultState;
        }
        addState(e, t = 0) {
            this._controllerLayers[t].addState(e), console.warn("Animator:this function is discard,please use animatorControllerLayer.addState() instead.");
        }
        removeState(e, t = 0) {
            this._controllerLayers[t].removeState(e), console.warn("Animator:this function is discard,please use animatorControllerLayer.removeState() instead.");
        }
        addControllerLayer(e) {
            this._controllerLayers.push(e), e._animator = this, e._addReference();
            for (var t = e._states, r = 0, a = t.length; r < a; r++) this._getOwnersByClip(t[r]);
        }
        getControllerLayer(e = 0) {
            return this._controllerLayers[e];
        }
        play(e = null, t = 0, r = Number.NEGATIVE_INFINITY) {
            var a = this._controllerLayers[t];
            if (a) {
                var n = a.defaultState;
                if (!e && !n) throw new Error("Animator:must have default clip value,please set clip property.");
                var i = a._playStateInfo, s = i._currentState, o = e ? a._statesMap[e] : n, l = o._clip._duration, h = o._clip._duration * (o.clipEnd - o.clipStart);
                s !== o ? (r !== Number.NEGATIVE_INFINITY ? i._resetPlayState(l * r, h) : i._resetPlayState(0, h), 
                null !== s && s !== o && this._revertDefaultKeyframeNodes(s), a._playType = 0, i._currentState = o) : r !== Number.NEGATIVE_INFINITY && (i._resetPlayState(l * r, h), 
                a._playType = 0);
                var _ = o._scripts;
                if (_) for (var d = 0, c = _.length; d < c; d++) _[d].onStateEnter();
            } else console.warn("Invalid layerIndex " + t + ".");
        }
        crossFade(e, t, r = 0, a = Number.NEGATIVE_INFINITY) {
            var n = this._controllerLayers[r];
            if (n) {
                var i = n._statesMap[e];
                if (i) {
                    var s = n._playType;
                    if (-1 === s) return void this.play(e, r, a);
                    var o = n._crossPlayStateInfo, l = n._crossNodesOwners, h = n._crossNodesOwnersIndicesMap, _ = n._playStateInfo._currentState, d = i._nodeOwners, c = n._destCrossClipNodeIndices, u = i._clip, m = u._nodes, f = u._nodesDic, E = 0;
                    switch (s) {
                      case 0:
                        var T = _._nodeOwners, p = n._srcCrossClipNodeIndices, g = _._clip, S = g._nodes, R = g._nodesDic;
                        n._playType = 1;
                        var v = ++n._crossMark;
                        E = n._crossNodesOwnersCount = 0;
                        for (var x = 0, A = S.count; x < A; x++) {
                            var I = S.getNodeByIndex(x), M = I._indexInList, D = T[M];
                            if (D) {
                                var L = I.fullPath;
                                p[E] = M;
                                var y = f[L];
                                c[E] = y ? y._indexInList : -1, h[L] = v, l[E] = D, E++;
                            }
                        }
                        for (x = 0, A = m.count; x < A; x++) {
                            var C = (y = m.getNodeByIndex(x))._indexInList, O = d[C];
                            if (O) {
                                var N = y.fullPath;
                                R[N] || (p[E] = -1, c[E] = C, h[N] = v, l[E] = O, E++);
                            }
                        }
                        break;

                      case 1:
                      case 2:
                        for (n._playType = 2, x = 0, A = l.length; x < A; x++) {
                            var P = l[x];
                            P.saveCrossFixedValue(), y = f[P.fullPath], c[x] = y ? y._indexInList : -1;
                        }
                        for (E = n._crossNodesOwnersCount, v = n._crossMark, x = 0, A = m.count; x < A; x++) (O = d[C = (y = m.getNodeByIndex(x))._indexInList]) && h[N = y.fullPath] !== v && (c[E] = C, 
                        h[N] = v, P = d[C], l[E] = P, P.saveCrossFixedValue(), E++);
                    }
                    n._crossNodesOwnersCount = E, n._crossPlayState = i, n._crossDuration = _._clip._duration * t, 
                    a !== Number.NEGATIVE_INFINITY ? o._resetPlayState(u._duration * a, n._crossDuration) : o._resetPlayState(0, n._crossDuration);
                    var w = i._scripts;
                    if (w) for (x = 0, A = w.length; x < A; x++) w[x].onStateEnter();
                } else console.warn("Invalid name " + r + ".");
            } else console.warn("Invalid layerIndex " + r + ".");
        }
        getCurrentAnimatorPlayState(e = 0) {
            return this._controllerLayers[e]._playStateInfo;
        }
        get avatar() {
            return this._avatar;
        }
        set avatar(e) {
            if (this._avatar !== e) if (this._avatar = e, e) this._getAvatarOwnersAndInitDatasAsync(), 
            this.owner._changeHierarchyAnimatorAvatar(this, e); else {
                var t = this.owner._parent;
                this.owner._changeHierarchyAnimatorAvatar(this, t ? t._hierarchyAnimator._avatar : null);
            }
        }
        _isLinkSpriteToAnimationNodeData(e, t, r) {
            var a = this._linkAvatarSpritesData[t];
            if (r) a || (this._linkAvatarSpritesData[t] = a = []), a.push(e); else {
                var n = a.indexOf(e);
                a.splice(n, 1);
            }
        }
        _getAvatarOwnersAndInitDatasAsync() {
            for (var e = 0, t = this._controllerLayers.length; e < t; e++) for (var r = this._controllerLayers[e]._states, a = 0, n = r.length; a < n; a++) this._getOwnersByClip(r[a]);
            for (var i in this._avatar._cloneDatasToAnimator(this), this._linkAvatarSpritesData) {
                var s = this._linkAvatarSpritesData[i];
                if (s) for (var o = 0, l = s.length; o < l; o++) this._isLinkSpriteToAnimationNode(s[o], i, !0);
            }
        }
        _isLinkSpriteToAnimationNode(e, t, r) {
            if (this._avatar) {
                var a = this._avatarNodeMap[t];
                if (a) if (r) {
                    e._transform._dummy = a.transform, this._linkAvatarSprites.push(e);
                    var n = a.transform, i = e.transform;
                    if (!i.owner.isStatic && n) {
                        var s = i.worldMatrix, o = this.owner._transform._parent;
                        if (o) A.matrix4x4MultiplyMFM(o.worldMatrix, n.getWorldMatrix(), s); else for (var l = s.elements, h = n.getWorldMatrix(), _ = 0; _ < 16; _++) l[_] = h[_];
                        i.worldMatrix = s;
                    }
                } else e._transform._dummy = null, this._linkAvatarSprites.splice(this._linkAvatarSprites.indexOf(e), 1);
            }
        }
        _updateAvatarNodesToSprite() {
            for (var e = 0, t = this._linkAvatarSprites.length; e < t; e++) {
                var r = this._linkAvatarSprites[e], a = r.transform._dummy, n = r.transform;
                if (!n.owner.isStatic && a) {
                    var i = n.worldMatrix, s = this.owner._transform;
                    A.matrix4x4MultiplyMFM(s.worldMatrix, a.getWorldMatrix(), i), n.worldMatrix = i;
                }
            }
        }
        linkSprite3DToAvatarNode(e, t) {
            return this._isLinkSpriteToAnimationNodeData(t, e, !0), this._isLinkSpriteToAnimationNode(t, e, !0), 
            !0;
        }
        unLinkSprite3DToAvatarNode(e) {
            var t = e.transform._dummy;
            if (t) {
                var r = t._owner.name;
                return this._isLinkSpriteToAnimationNodeData(e, r, !1), this._isLinkSpriteToAnimationNode(e, r, !1), 
                !0;
            }
            return !1;
        }
        _updateAnimationNodeWorldMatix(e, r, a, n, i) {
            t.LayaGL.instance.updateAnimationNodeWorldMatix(e, r, a, i, n);
        }
    }
    O._tempVector31 = new i(), O._tempQuaternion1 = new T(), O.CULLINGMODE_ALWAYSANIMATE = 0, 
    O.CULLINGMODE_CULLCOMPLETELY = 2;
    class N {
        constructor() {
            this.invertY = !1, this.configPipeLineMode = "Forward";
        }
    }
    N._instance = new N();
    class P extends t.BaseTexture {
        constructor(e, r, a = t.RenderTextureFormat.R8G8B8, n = t.RenderTextureDepthFormat.DEPTH_16, i = 1) {
            super(a, !1), this._inPool = !1, this._mulSampler = 1, this._mulSamplerRT = !1, 
            this._isCameraTarget = !1, this._glTextureType = t.LayaGL.instance.TEXTURE_2D, this._width = e, 
            this._height = r, this._depthStencilFormat = n, this._mipmapCount = 1, this._mulSampler = i, 
            this._create(e, r);
        }
        static get currentActive() {
            return P._currentActive;
        }
        static createFromPool(e, r, a = t.RenderTextureFormat.R8G8B8, n = t.RenderTextureDepthFormat.DEPTH_16, i = 1) {
            for (var s, o = 0, l = P._pool.length; o < l; o++) if ((s = P._pool[o])._width == e && s._height == r && s._format == a && s._depthStencilFormat == n && s._mulSampler == i) {
                s._inPool = !1;
                var h = P._pool[l - 1];
                return P._pool[o] = h, P._pool.length -= 1, s;
            }
            return (s = new P(e, r, a, n, i)).lock = !0, s;
        }
        static recoverToPool(e) {
            e._inPool || (P._pool.push(e), e._inPool = !0);
        }
        get depthStencilFormat() {
            return this._depthStencilFormat;
        }
        get defaulteTexture() {
            return t.Texture2D.grayTexture;
        }
        get mulSampler() {
            return this._mulSampler;
        }
        _create(e, r) {
            var a = t.LayaGL.instance, n = a, i = this._glTextureType, s = t.LayaGL.layaGPUInstance, o = s._isWebGL2, l = this._format;
            if (this._frameBuffer = a.createFramebuffer(), a.bindFramebuffer(a.FRAMEBUFFER, this._frameBuffer), 
            this._mulSamplerRT = o && this._mulSampler > 1, l !== t.RenderTextureFormat.Depth && l !== t.RenderTextureFormat.ShadowMap) {
                if (this._mulSamplerRT) {
                    switch (this._mulRenderBuffer = n.createRenderbuffer(), n.bindRenderbuffer(n.RENDERBUFFER, this._mulRenderBuffer), 
                    l) {
                      case t.RenderTextureFormat.R8G8B8:
                        n.renderbufferStorageMultisample(n.RENDERBUFFER, this._mulSampler, n.RGB8, e, r);
                        break;

                      case t.RenderTextureFormat.R8G8B8A8:
                        n.renderbufferStorageMultisample(n.RENDERBUFFER, this._mulSampler, n.RGBA8, e, r);
                        break;

                      case t.RenderTextureFormat.Alpha8:
                        n.renderbufferStorageMultisample(n.RENDERBUFFER, this._mulSampler, n.ALPHA, e, r);
                        break;

                      case t.RenderTextureFormat.R16G16B16A16:
                        n.renderbufferStorageMultisample(n.RENDERBUFFER, this._mulSampler, n.RGBA16F, e, r);
                    }
                    n.framebufferRenderbuffer(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.RENDERBUFFER, this._mulRenderBuffer);
                }
                switch (t.WebGLContext.bindTexture(a, i, this._glTexture), l) {
                  case t.RenderTextureFormat.R8G8B8:
                    o ? n.texStorage2D(i, this._mipmapCount, n.RGB8, e, r) : a.texImage2D(i, 0, a.RGB, e, r, 0, a.RGB, a.UNSIGNED_BYTE, null);
                    break;

                  case t.RenderTextureFormat.R8G8B8A8:
                    o ? n.texStorage2D(i, this._mipmapCount, n.RGBA8, e, r) : a.texImage2D(i, 0, a.RGBA, e, r, 0, a.RGBA, a.UNSIGNED_BYTE, null);
                    break;

                  case t.RenderTextureFormat.Alpha8:
                    o ? n.texStorage2D(i, this.mipmapCount, n.R8, e, r) : a.texImage2D(i, 0, a.ALPHA, e, r, 0, a.ALPHA, a.UNSIGNED_BYTE, null);
                    break;

                  case t.RenderTextureFormat.R16G16B16A16:
                    o ? n.texStorage2D(i, this._mipmapCount, n.RGBA16F, e, r) : a.texImage2D(i, 0, a.RGBA, e, r, 0, a.RGBA, s._oesTextureHalfFloat.HALF_FLOAT_OES, null);
                }
                this._mulSamplerRT ? (this._mulFrameBuffer = n.createFramebuffer(), a.bindFramebuffer(a.FRAMEBUFFER, this._mulFrameBuffer), 
                a.framebufferTexture2D(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, this._glTexture, 0)) : a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, this._glTexture, 0);
            }
            if (l == t.RenderTextureFormat.Depth || l == t.RenderTextureFormat.ShadowMap) {
                switch (a.bindFramebuffer(a.FRAMEBUFFER, this._frameBuffer), t.WebGLContext.bindTexture(a, i, this._glTexture), 
                this.filterMode = t.FilterMode.Point, this._depthStencilFormat) {
                  case t.RenderTextureDepthFormat.DEPTH_16:
                    o ? n.texStorage2D(i, this._mipmapCount, n.DEPTH_COMPONENT16, e, r) : a.texImage2D(i, 0, a.DEPTH_COMPONENT, e, r, 0, a.DEPTH_COMPONENT, a.UNSIGNED_SHORT, null), 
                    a.framebufferTexture2D(a.FRAMEBUFFER, a.DEPTH_ATTACHMENT, a.TEXTURE_2D, this._glTexture, 0);
                    break;

                  case t.RenderTextureDepthFormat.DEPTHSTENCIL_24_8:
                    o ? n.texStorage2D(i, this._mipmapCount, n.DEPTH24_STENCIL8, e, r) : a.texImage2D(i, 0, a.DEPTH_STENCIL, e, r, 0, a.DEPTH_STENCIL, s._webgl_depth_texture.UNSIGNED_INT_24_8_WEBGL, null), 
                    a.framebufferTexture2D(a.FRAMEBUFFER, a.DEPTH_STENCIL_ATTACHMENT, a.TEXTURE_2D, this._glTexture, 0);
                    break;

                  default:
                    throw "RenderTexture: depth format RenderTexture must use depthFormat with DEPTH_16 and DEPTHSTENCIL_16_8.";
                }
                o && l == t.RenderTextureFormat.ShadowMap && n.texParameteri(i, n.TEXTURE_COMPARE_MODE, n.COMPARE_REF_TO_TEXTURE);
            } else if (a.bindFramebuffer(a.FRAMEBUFFER, this._frameBuffer), this._depthStencilFormat !== t.RenderTextureDepthFormat.DEPTHSTENCIL_NONE) {
                if (this._depthStencilBuffer = a.createRenderbuffer(), a.bindRenderbuffer(a.RENDERBUFFER, this._depthStencilBuffer), 
                this._mulSamplerRT) switch (this._depthStencilFormat) {
                  case t.RenderTextureDepthFormat.DEPTH_16:
                    n.renderbufferStorageMultisample(a.RENDERBUFFER, this._mulSampler, n.DEPTH_COMPONENT16, e, r), 
                    n.framebufferRenderbuffer(a.FRAMEBUFFER, n.DEPTH_ATTACHMENT, a.RENDERBUFFER, this._depthStencilBuffer);
                    break;

                  case t.RenderTextureDepthFormat.STENCIL_8:
                    n.renderbufferStorageMultisample(a.RENDERBUFFER, this._mulSampler, n.STENCIL_INDEX8, e, r), 
                    n.framebufferRenderbuffer(a.FRAMEBUFFER, n.STENCIL_ATTACHMENT, a.RENDERBUFFER, this._depthStencilBuffer);
                    break;

                  case t.RenderTextureDepthFormat.DEPTHSTENCIL_24_8:
                    n.renderbufferStorageMultisample(a.RENDERBUFFER, this._mulSampler, n.DEPTH_STENCIL, e, r), 
                    n.framebufferRenderbuffer(a.FRAMEBUFFER, n.DEPTH_STENCIL_ATTACHMENT, a.RENDERBUFFER, this._depthStencilBuffer);
                    break;

                  default:
                    throw "RenderTexture: unkonw depth format.";
                } else switch (this._depthStencilFormat) {
                  case t.RenderTextureDepthFormat.DEPTH_16:
                    a.renderbufferStorage(a.RENDERBUFFER, a.DEPTH_COMPONENT16, e, r), a.framebufferRenderbuffer(a.FRAMEBUFFER, n.DEPTH_ATTACHMENT, a.RENDERBUFFER, this._depthStencilBuffer);
                    break;

                  case t.RenderTextureDepthFormat.STENCIL_8:
                    a.renderbufferStorage(a.RENDERBUFFER, a.STENCIL_INDEX8, e, r), a.framebufferRenderbuffer(a.FRAMEBUFFER, a.STENCIL_ATTACHMENT, a.RENDERBUFFER, this._depthStencilBuffer);
                    break;

                  case t.RenderTextureDepthFormat.DEPTHSTENCIL_24_8:
                    a.renderbufferStorage(a.RENDERBUFFER, a.DEPTH_STENCIL, e, r), a.framebufferRenderbuffer(a.FRAMEBUFFER, a.DEPTH_STENCIL_ATTACHMENT, a.RENDERBUFFER, this._depthStencilBuffer);
                    break;

                  default:
                    throw "RenderTexture: unkonw depth format.";
                }
                a.bindRenderbuffer(a.RENDERBUFFER, null);
            }
            a.bindFramebuffer(a.FRAMEBUFFER, null), this._setWarpMode(a.TEXTURE_WRAP_S, this._wrapModeU), 
            this._setWarpMode(a.TEXTURE_WRAP_T, this._wrapModeV), this._setFilterMode(this._filterMode), 
            this._setAnisotropy(this._anisoLevel), this._readyed = !0, this._activeResource(), 
            this._setGPUMemory(e * r * 4);
        }
        _start() {
            var e = t.LayaGL.instance;
            e.bindFramebuffer(e.FRAMEBUFFER, this._frameBuffer), P._currentActive = this, this._isCameraTarget && (N._instance.invertY = !0), 
            this._readyed = !1;
        }
        _end() {
            var e = t.LayaGL.instance, r = e;
            this._mulSamplerRT && (r.bindFramebuffer(r.READ_FRAMEBUFFER, this._frameBuffer), 
            r.bindFramebuffer(r.DRAW_FRAMEBUFFER, this._mulFrameBuffer), r.clearBufferfv(r.COLOR, 0, [ 0, 0, 0, 0 ]), 
            r.blitFramebuffer(0, 0, this.width, this.height, 0, 0, this._width, this._height, r.COLOR_BUFFER_BIT, e.NEAREST)), 
            e.bindFramebuffer(e.FRAMEBUFFER, null), P._currentActive = null, this._isCameraTarget && (N._instance.invertY = !1), 
            this._readyed = !0;
        }
        getData(e, r, a, n, i) {
            if (t.Render.isConchApp && 2 == window.conchConfig.threadMode) throw "native 2 thread mode use getDataAsync";
            var s = t.LayaGL.instance;
            if (s.bindFramebuffer(s.FRAMEBUFFER, this._frameBuffer), !(s.checkFramebufferStatus(s.FRAMEBUFFER) === s.FRAMEBUFFER_COMPLETE)) return s.bindFramebuffer(s.FRAMEBUFFER, null), 
            null;
            switch (this.format) {
              case t.RenderTextureFormat.R8G8B8:
              case t.RenderTextureFormat.R8G8B8A8:
                s.readPixels(e, r, a, n, s.RGBA, s.UNSIGNED_BYTE, i);
                break;

              case t.RenderTextureFormat.R16G16B16A16:
                s.readPixels(e, r, a, n, s.RGBA, s.FLOAT, i);
            }
            return s.bindFramebuffer(s.FRAMEBUFFER, null), i;
        }
        _disposeResource() {
            if (this._frameBuffer) {
                var e = t.LayaGL.instance;
                e.deleteTexture(this._glTexture), e.deleteFramebuffer(this._frameBuffer), e.deleteRenderbuffer(this._depthStencilBuffer), 
                this._glTexture = null, this._frameBuffer = null, this._depthStencilBuffer = null, 
                this._setGPUMemory(0);
            }
        }
        getDataAsync(e, r, a, n, i) {
            var s = t.LayaGL.instance;
            s.bindFramebuffer(s.FRAMEBUFFER, this._frameBuffer), s.readPixelsAsync(e, r, a, n, s.RGBA, s.UNSIGNED_BYTE, function(e) {
                i(new Uint8Array(e));
            }), s.bindFramebuffer(s.FRAMEBUFFER, null);
        }
    }
    P._pool = [];
    class w {
        constructor() {
            this._mask = [], this._length = 0;
        }
        _intersectionDefineDatas(e) {
            for (var t = e._mask, r = this._mask, a = this._length - 1; a >= 0; a--) {
                var n = r[a] & t[a];
                0 == n && a == this._length - 1 ? this._length-- : r[a] = n;
            }
        }
        add(e) {
            var t = e._index, r = t + 1, a = this._mask, n = this._length;
            if (n < r) {
                for (a.length < r && (a.length = r); n < t; n++) a[n] = 0;
                a[t] = e._value, this._length = r;
            } else a[t] |= e._value;
        }
        remove(e) {
            var t = e._index, r = this._mask, a = this._length - 1;
            if (!(t > a)) {
                var n = r[t] & ~e._value;
                t == a && 0 === n ? this._length-- : r[t] = n;
            }
        }
        addDefineDatas(e) {
            var t = e._mask, r = e._length, a = this._mask, n = this._length;
            if (n < r) {
                a.length = r;
                for (var i = 0; i < n; i++) a[i] |= t[i];
                for (;i < r; i++) a[i] = t[i];
                this._length = r;
            } else for (i = 0; i < r; i++) a[i] |= t[i];
        }
        removeDefineDatas(e) {
            for (var t = e._mask, r = this._mask, a = this._length - 1, n = Math.min(e._length, a); n >= 0; n--) {
                var i = r[n] & ~t[n];
                n == a && 0 === i ? (a--, this._length--) : r[n] = i;
            }
        }
        has(e) {
            var t = e._index;
            return !(t >= this._length) && 0 != (this._mask[t] & e._value);
        }
        clear() {
            this._length = 0;
        }
        cloneTo(e) {
            var t = e, r = t._mask, a = this._mask, n = this._length;
            r.length = n;
            for (var i = 0; i < n; i++) r[i] = a[i];
            t._length = n;
        }
        clone() {
            var e = new w();
            return this.cloneTo(e), e;
        }
    }
    class V extends t.Buffer {
        constructor(e, r, a = !1) {
            super(), this._vertexDeclaration = null, this._float32Reader = null;
            var n = t.LayaGL.instance;
            this._bufferUsage = r, this._bufferType = n.ARRAY_BUFFER, this._canRead = a, this._byteLength = e, 
            this.bind(), n.bufferData(this._bufferType, this._byteLength, this._bufferUsage), 
            a && (this._buffer = new Uint8Array(e), this._float32Reader = new Float32Array(this._buffer.buffer));
        }
        get vertexDeclaration() {
            return this._vertexDeclaration;
        }
        set vertexDeclaration(e) {
            this._vertexDeclaration = e;
        }
        get canRead() {
            return this._canRead;
        }
        bind() {
            if (t.Buffer._bindedVertexBuffer !== this._glBuffer) {
                var e = t.LayaGL.instance;
                return e.bindBuffer(e.ARRAY_BUFFER, this._glBuffer), t.Buffer._bindedVertexBuffer = this._glBuffer, 
                !0;
            }
            return !1;
        }
        orphanStorage() {
            this.bind(), t.LayaGL.instance.bufferData(this._bufferType, this._byteLength, this._bufferUsage);
        }
        setData(e, r = 0, a = 0, n = Number.MAX_SAFE_INTEGER) {
            if (this.bind(), 0 !== a || n !== Number.MAX_SAFE_INTEGER) {
                var i = new Uint8Array(e, a, n);
                t.LayaGL.instance.bufferSubData(this._bufferType, r, i), this._canRead && this._buffer.set(i, r);
            } else t.LayaGL.instance.bufferSubData(this._bufferType, r, e), this._canRead && this._buffer.set(new Uint8Array(e), r);
        }
        getUint8Data() {
            if (this._canRead) return this._buffer;
            throw new Error("Can't read data from VertexBuffer with only write flag!");
        }
        getFloat32Data() {
            if (this._canRead) return this._float32Reader;
            throw new Error("Can't read data from VertexBuffer with only write flag!");
        }
        markAsUnreadbale() {
            this._canRead = !1, this._buffer = null, this._float32Reader = null;
        }
        destroy() {
            super.destroy(), this._buffer = null, this._float32Reader = null, this._vertexDeclaration = null, 
            this._byteLength = 0;
        }
    }
    V.DATATYPE_FLOAT32ARRAY = 0, V.DATATYPE_UINT8ARRAY = 1;
    class B {
        static __init__() {
            var e = t.LayaGL.instance;
            B._elementInfos = {
                single: [ 1, e.FLOAT, 0 ],
                vector2: [ 2, e.FLOAT, 0 ],
                vector3: [ 3, e.FLOAT, 0 ],
                vector4: [ 4, e.FLOAT, 0 ],
                color: [ 4, e.FLOAT, 0 ],
                byte4: [ 4, e.UNSIGNED_BYTE, 0 ],
                short2: [ 2, e.FLOAT, 0 ],
                short4: [ 4, e.FLOAT, 0 ],
                normalizedshort2: [ 2, e.FLOAT, 0 ],
                normalizedshort4: [ 4, e.FLOAT, 0 ],
                halfvector2: [ 2, e.FLOAT, 0 ],
                halfvector4: [ 4, e.FLOAT, 0 ]
            };
        }
        static getElementInfos(e) {
            var t = B._elementInfos[e];
            if (t) return t;
            throw "VertexElementFormat: this vertexElementFormat is not implement.";
        }
    }
    B.Single = "single", B.Vector2 = "vector2", B.Vector3 = "vector3", B.Vector4 = "vector4", 
    B.Color = "color", B.Byte4 = "byte4", B.Short2 = "short2", B.Short4 = "short4", 
    B.NormalizedShort2 = "normalizedshort2", B.NormalizedShort4 = "normalizedshort4", 
    B.HalfVector2 = "halfvector2", B.HalfVector4 = "halfvector4";
    class b {
        constructor(e = 1, t = 0, r = 0, a = 0, n = 0, i = 1, s = 0, o = 0, l = 0, h = 0, _ = 1, d = 0, c = 0, u = 0, m = 0, f = 1, E = null) {
            var T = this.elements = E || new Float32Array(16);
            T[0] = e, T[1] = t, T[2] = r, T[3] = a, T[4] = n, T[5] = i, T[6] = s, T[7] = o, 
            T[8] = l, T[9] = h, T[10] = _, T[11] = d, T[12] = c, T[13] = u, T[14] = m, T[15] = f;
        }
        static createRotationX(e, t) {
            var r = t.elements, a = Math.sin(e), n = Math.cos(e);
            r[1] = r[2] = r[3] = r[4] = r[7] = r[8] = r[11] = r[12] = r[13] = r[14] = 0, r[0] = r[15] = 1, 
            r[5] = r[10] = n, r[6] = a, r[9] = -a;
        }
        static createRotationY(e, t) {
            var r = t.elements, a = Math.sin(e), n = Math.cos(e);
            r[1] = r[3] = r[4] = r[6] = r[7] = r[9] = r[11] = r[12] = r[13] = r[14] = 0, r[5] = r[15] = 1, 
            r[0] = r[10] = n, r[2] = -a, r[8] = a;
        }
        static createRotationZ(e, t) {
            var r = t.elements, a = Math.sin(e), n = Math.cos(e);
            r[2] = r[3] = r[6] = r[7] = r[8] = r[9] = r[11] = r[12] = r[13] = r[14] = 0, r[10] = r[15] = 1, 
            r[0] = r[5] = n, r[1] = a, r[4] = -a;
        }
        static createRotationYawPitchRoll(e, t, r, a) {
            T.createFromYawPitchRoll(e, t, r, b._tempQuaternion), b.createRotationQuaternion(b._tempQuaternion, a);
        }
        static createRotationAxis(e, t, r) {
            var a = e.x, n = e.y, i = e.z, s = Math.cos(t), o = Math.sin(t), l = a * a, h = n * n, _ = i * i, d = a * n, c = a * i, u = n * i, m = r.elements;
            m[3] = m[7] = m[11] = m[12] = m[13] = m[14] = 0, m[15] = 1, m[0] = l + s * (1 - l), 
            m[1] = d - s * d + o * i, m[2] = c - s * c - o * n, m[4] = d - s * d - o * i, m[5] = h + s * (1 - h), 
            m[6] = u - s * u + o * a, m[8] = c - s * c + o * n, m[9] = u - s * u - o * a, m[10] = _ + s * (1 - _);
        }
        setRotation(e) {
            var t = e.x, r = e.y, a = e.z, n = e.w, i = t * t, s = r * r, o = a * a, l = t * r, h = a * n, _ = a * t, d = r * n, c = r * a, u = t * n, m = this.elements;
            m[0] = 1 - 2 * (s + o), m[1] = 2 * (l + h), m[2] = 2 * (_ - d), m[4] = 2 * (l - h), 
            m[5] = 1 - 2 * (o + i), m[6] = 2 * (c + u), m[8] = 2 * (_ + d), m[9] = 2 * (c - u), 
            m[10] = 1 - 2 * (s + i);
        }
        setPosition(e) {
            var t = this.elements;
            t[12] = e.x, t[13] = e.y, t[14] = e.z;
        }
        static createRotationQuaternion(e, t) {
            var r = t.elements, a = e.x, n = e.y, i = e.z, s = e.w, o = a * a, l = n * n, h = i * i, _ = a * n, d = i * s, c = i * a, u = n * s, m = n * i, f = a * s;
            r[3] = r[7] = r[11] = r[12] = r[13] = r[14] = 0, r[15] = 1, r[0] = 1 - 2 * (l + h), 
            r[1] = 2 * (_ + d), r[2] = 2 * (c - u), r[4] = 2 * (_ - d), r[5] = 1 - 2 * (h + o), 
            r[6] = 2 * (m + f), r[8] = 2 * (c + u), r[9] = 2 * (m - f), r[10] = 1 - 2 * (l + o);
        }
        static createTranslate(e, t) {
            var r = t.elements;
            r[4] = r[8] = r[1] = r[9] = r[2] = r[6] = r[3] = r[7] = r[11] = 0, r[0] = r[5] = r[10] = r[15] = 1, 
            r[12] = e.x, r[13] = e.y, r[14] = e.z;
        }
        static createScaling(e, t) {
            var r = t.elements;
            r[0] = e.x, r[5] = e.y, r[10] = e.z, r[1] = r[4] = r[8] = r[12] = r[9] = r[13] = r[2] = r[6] = r[14] = r[3] = r[7] = r[11] = 0, 
            r[15] = 1;
        }
        static multiply(e, t, r) {
            var a = t.elements, n = e.elements, i = r.elements, s = a[0], o = a[1], l = a[2], h = a[3], _ = a[4], d = a[5], c = a[6], u = a[7], m = a[8], f = a[9], E = a[10], T = a[11], p = a[12], g = a[13], S = a[14], R = a[15], v = n[0], x = n[1], A = n[2], I = n[3], M = n[4], D = n[5], L = n[6], y = n[7], C = n[8], O = n[9], N = n[10], P = n[11], w = n[12], V = n[13], B = n[14], b = n[15];
            i[0] = s * v + o * M + l * C + h * w, i[1] = s * x + o * D + l * O + h * V, i[2] = s * A + o * L + l * N + h * B, 
            i[3] = s * I + o * y + l * P + h * b, i[4] = _ * v + d * M + c * C + u * w, i[5] = _ * x + d * D + c * O + u * V, 
            i[6] = _ * A + d * L + c * N + u * B, i[7] = _ * I + d * y + c * P + u * b, i[8] = m * v + f * M + E * C + T * w, 
            i[9] = m * x + f * D + E * O + T * V, i[10] = m * A + f * L + E * N + T * B, i[11] = m * I + f * y + E * P + T * b, 
            i[12] = p * v + g * M + S * C + R * w, i[13] = p * x + g * D + S * O + R * V, i[14] = p * A + g * L + S * N + R * B, 
            i[15] = p * I + g * y + S * P + R * b;
        }
        static multiplyForNative(e, r, a) {
            t.LayaGL.instance.matrix4x4Multiply(e.elements, r.elements, a.elements);
        }
        static createFromQuaternion(e, t) {
            var r = t.elements, a = e.x, n = e.y, i = e.z, s = e.w, o = a + a, l = n + n, h = i + i, _ = a * o, d = n * o, c = n * l, u = i * o, m = i * l, f = i * h, E = s * o, T = s * l, p = s * h;
            r[0] = 1 - c - f, r[1] = d + p, r[2] = u - T, r[3] = 0, r[4] = d - p, r[5] = 1 - _ - f, 
            r[6] = m + E, r[7] = 0, r[8] = u + T, r[9] = m - E, r[10] = 1 - _ - c, r[11] = 0, 
            r[12] = 0, r[13] = 0, r[14] = 0, r[15] = 1;
        }
        static createAffineTransformation(e, t, r, a) {
            var n = a.elements, i = t.x, s = t.y, o = t.z, l = t.w, h = i + i, _ = s + s, d = o + o, c = i * h, u = i * _, m = i * d, f = s * _, E = s * d, T = o * d, p = l * h, g = l * _, S = l * d, R = r.x, v = r.y, x = r.z;
            n[0] = (1 - (f + T)) * R, n[1] = (u + S) * R, n[2] = (m - g) * R, n[3] = 0, n[4] = (u - S) * v, 
            n[5] = (1 - (c + T)) * v, n[6] = (E + p) * v, n[7] = 0, n[8] = (m + g) * x, n[9] = (E - p) * x, 
            n[10] = (1 - (c + f)) * x, n[11] = 0, n[12] = e.x, n[13] = e.y, n[14] = e.z, n[15] = 1;
        }
        static createLookAt(e, t, r, a) {
            var n = a.elements, s = b._tempVector0, o = b._tempVector1, l = b._tempVector2;
            i.subtract(e, t, l), i.normalize(l, l), i.cross(r, l, s), i.normalize(s, s), i.cross(l, s, o), 
            n[3] = n[7] = n[11] = 0, n[15] = 1, n[0] = s.x, n[4] = s.y, n[8] = s.z, n[1] = o.x, 
            n[5] = o.y, n[9] = o.z, n[2] = l.x, n[6] = l.y, n[10] = l.z, n[12] = -i.dot(s, e), 
            n[13] = -i.dot(o, e), n[14] = -i.dot(l, e);
        }
        static createPerspective(e, t, r, a, n) {
            var i = 1 / Math.tan(.5 * e), s = r / (i / t), o = r / i;
            b.createPerspectiveOffCenter(-s, s, -o, o, r, a, n);
        }
        static createPerspectiveOffCenter(e, t, r, a, n, i, s) {
            var o = s.elements, l = i / (i - n);
            o[1] = o[2] = o[3] = o[4] = o[6] = o[7] = o[12] = o[13] = o[15] = 0, o[0] = 2 * n / (t - e), 
            o[5] = 2 * n / (a - r), o[8] = (e + t) / (t - e), o[9] = (a + r) / (a - r), o[10] = -l, 
            o[11] = -1, o[14] = -n * l;
        }
        static createOrthoOffCenter(e, t, r, a, n, i, s) {
            var o = s.elements, l = 1 / (i - n);
            o[1] = o[2] = o[3] = o[4] = o[6] = o[8] = o[7] = o[9] = o[11] = 0, o[15] = 1, o[0] = 2 / (t - e), 
            o[5] = 2 / (a - r), o[10] = -l, o[12] = (e + t) / (e - t), o[13] = (a + r) / (r - a), 
            o[14] = -n * l;
        }
        getElementByRowColumn(e, t) {
            if (e < 0 || e > 3) throw new Error("row Rows and columns for matrices run from 0 to 3, inclusive.");
            if (t < 0 || t > 3) throw new Error("column Rows and columns for matrices run from 0 to 3, inclusive.");
            return this.elements[4 * e + t];
        }
        setElementByRowColumn(e, t, r) {
            if (e < 0 || e > 3) throw new Error("row Rows and columns for matrices run from 0 to 3, inclusive.");
            if (t < 0 || t > 3) throw new Error("column Rows and columns for matrices run from 0 to 3, inclusive.");
            this.elements[4 * e + t] = r;
        }
        equalsOtherMatrix(e) {
            var t = this.elements, a = e.elements;
            return r.nearEqual(t[0], a[0]) && r.nearEqual(t[1], a[1]) && r.nearEqual(t[2], a[2]) && r.nearEqual(t[3], a[3]) && r.nearEqual(t[4], a[4]) && r.nearEqual(t[5], a[5]) && r.nearEqual(t[6], a[6]) && r.nearEqual(t[7], a[7]) && r.nearEqual(t[8], a[8]) && r.nearEqual(t[9], a[9]) && r.nearEqual(t[10], a[10]) && r.nearEqual(t[11], a[11]) && r.nearEqual(t[12], a[12]) && r.nearEqual(t[13], a[13]) && r.nearEqual(t[14], a[14]) && r.nearEqual(t[15], a[15]);
        }
        decomposeTransRotScale(e, t, r) {
            var a = b._tempMatrix4x4;
            return this.decomposeTransRotMatScale(e, a, r) ? (T.createFromMatrix4x4(a, t), !0) : (t.identity(), 
            !1);
        }
        decomposeTransRotMatScale(e, t, a) {
            var n = this.elements, s = e, o = t.elements, l = a;
            s.x = n[12], s.y = n[13], s.z = n[14];
            var h = n[0], _ = n[1], d = n[2], c = n[4], u = n[5], m = n[6], f = n[8], E = n[9], T = n[10], p = l.x = Math.sqrt(h * h + _ * _ + d * d), g = l.y = Math.sqrt(c * c + u * u + m * m), S = l.z = Math.sqrt(f * f + E * E + T * T);
            if (r.isZero(p) || r.isZero(g) || r.isZero(S)) return o[1] = o[2] = o[3] = o[4] = o[6] = o[7] = o[8] = o[9] = o[11] = o[12] = o[13] = o[14] = 0, 
            o[0] = o[5] = o[10] = o[15] = 1, !1;
            var R = b._tempVector0;
            R.x = f / S, R.y = E / S, R.z = T / S;
            var v = b._tempVector1;
            v.x = h / p, v.y = _ / p, v.z = d / p;
            var x = b._tempVector2;
            i.cross(R, v, x);
            var A = b._tempVector1;
            return i.cross(x, R, A), o[3] = o[7] = o[11] = o[12] = o[13] = o[14] = 0, o[15] = 1, 
            o[0] = A.x, o[1] = A.y, o[2] = A.z, o[4] = x.x, o[5] = x.y, o[6] = x.z, o[8] = R.x, 
            o[9] = R.y, o[10] = R.z, o[0] * h + o[1] * _ + o[2] * d < 0 && (l.x = -p), o[4] * c + o[5] * u + o[6] * m < 0 && (l.y = -g), 
            o[8] * f + o[9] * E + o[10] * T < 0 && (l.z = -S), !0;
        }
        decomposeYawPitchRoll(e) {
            var t = Math.asin(-this.elements[9]);
            e.y = t, Math.cos(t) > r.zeroTolerance ? (e.z = Math.atan2(this.elements[1], this.elements[5]), 
            e.x = Math.atan2(this.elements[8], this.elements[10])) : (e.z = Math.atan2(-this.elements[4], this.elements[0]), 
            e.x = 0);
        }
        normalize() {
            var e = this.elements, t = e[0], r = e[1], a = e[2], n = Math.sqrt(t * t + r * r + a * a);
            if (!n) return e[0] = 0, e[1] = 0, void (e[2] = 0);
            1 != n && (n = 1 / n, e[0] = t * n, e[1] = r * n, e[2] = a * n);
        }
        transpose() {
            var e, t;
            return t = (e = this.elements)[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], 
            e[8] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[7], 
            e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
        }
        invert(e) {
            var t = this.elements, r = e.elements, a = t[0], n = t[1], i = t[2], s = t[3], o = t[4], l = t[5], h = t[6], _ = t[7], d = t[8], c = t[9], u = t[10], m = t[11], f = t[12], E = t[13], T = t[14], p = t[15], g = a * l - n * o, S = a * h - i * o, R = a * _ - s * o, v = n * h - i * l, x = n * _ - s * l, A = i * _ - s * h, I = d * E - c * f, M = d * T - u * f, D = d * p - m * f, L = c * T - u * E, y = c * p - m * E, C = u * p - m * T, O = g * C - S * y + R * L + v * D - x * M + A * I;
            0 !== Math.abs(O) && (O = 1 / O, r[0] = (l * C - h * y + _ * L) * O, r[1] = (i * y - n * C - s * L) * O, 
            r[2] = (E * A - T * x + p * v) * O, r[3] = (u * x - c * A - m * v) * O, r[4] = (h * D - o * C - _ * M) * O, 
            r[5] = (a * C - i * D + s * M) * O, r[6] = (T * R - f * A - p * S) * O, r[7] = (d * A - u * R + m * S) * O, 
            r[8] = (o * y - l * D + _ * I) * O, r[9] = (n * D - a * y - s * I) * O, r[10] = (f * x - E * R + p * g) * O, 
            r[11] = (c * R - d * x - m * g) * O, r[12] = (l * M - o * L - h * I) * O, r[13] = (a * L - n * M + i * I) * O, 
            r[14] = (E * S - f * v - T * g) * O, r[15] = (d * v - c * S + u * g) * O);
        }
        static billboard(e, t, a, n, s) {
            i.subtract(e, t, b._tempVector0);
            var o = i.scalarLengthSquared(b._tempVector0);
            r.isZero(o) ? (i.scale(n, -1, b._tempVector1), b._tempVector1.cloneTo(b._tempVector0)) : i.scale(b._tempVector0, 1 / Math.sqrt(o), b._tempVector0), 
            i.cross(a, b._tempVector0, b._tempVector2), i.normalize(b._tempVector2, b._tempVector2), 
            i.cross(b._tempVector0, b._tempVector2, b._tempVector3);
            var l = b._tempVector2, h = b._tempVector3, _ = b._tempVector0, d = e, c = s.elements;
            c[0] = l.x, c[1] = l.y, c[2] = l.z, c[3] = 0, c[4] = h.x, c[5] = h.y, c[6] = h.z, 
            c[7] = 0, c[8] = _.x, c[9] = _.y, c[10] = _.z, c[11] = 0, c[12] = d.x, c[13] = d.y, 
            c[14] = d.z, c[15] = 1;
        }
        identity() {
            var e = this.elements;
            e[1] = e[2] = e[3] = e[4] = e[6] = e[7] = e[8] = e[9] = e[11] = e[12] = e[13] = e[14] = 0, 
            e[0] = e[5] = e[10] = e[15] = 1;
        }
        cloneTo(e) {
            var t, r, a;
            if ((r = this.elements) !== (a = e.elements)) for (t = 0; t < 16; ++t) a[t] = r[t];
        }
        clone() {
            var e = new b();
            return this.cloneTo(e), e;
        }
        static translation(e, t) {
            var r = t.elements;
            r[0] = r[5] = r[10] = r[15] = 1, r[12] = e.x, r[13] = e.y, r[14] = e.z;
        }
        getTranslationVector(e) {
            var t = this.elements;
            e.x = t[12], e.y = t[13], e.z = t[14];
        }
        setTranslationVector(e) {
            var t = this.elements, r = e;
            t[12] = r.x, t[13] = r.y, t[14] = r.z;
        }
        getForward(e) {
            var t = this.elements;
            e.x = -t[8], e.y = -t[9], e.z = -t[10];
        }
        setForward(e) {
            var t = this.elements;
            t[8] = -e.x, t[9] = -e.y, t[10] = -e.z;
        }
        getInvertFront() {
            this.decomposeTransRotScale(b._tempVector0, b._tempQuaternion, b._tempVector1);
            var e = b._tempVector1, t = e.x < 0;
            return e.y < 0 && (t = !t), e.z < 0 && (t = !t), t;
        }
    }
    b._tempMatrix4x4 = new b(), b.TEMPMatrix0 = new b(), b.TEMPMatrix1 = new b(), b._tempVector0 = new i(), 
    b._tempVector1 = new i(), b._tempVector2 = new i(), b._tempVector3 = new i(), b._tempQuaternion = new T(), 
    b.DEFAULT = new b(), b.ZERO = new b(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    class F {
        constructor(e = null) {
            this._ownerResource = null, this._data = null, this._defineDatas = new w(), this._runtimeCopyValues = [], 
            this._ownerResource = e, this._initData();
        }
        _initData() {
            this._data = {};
        }
        getData() {
            return this._data;
        }
        addDefine(e) {
            this._defineDatas.add(e);
        }
        removeDefine(e) {
            this._defineDatas.remove(e);
        }
        hasDefine(e) {
            return this._defineDatas.has(e);
        }
        clearDefine() {
            this._defineDatas.clear();
        }
        getBool(e) {
            return this._data[e];
        }
        setBool(e, t) {
            this._data[e] = t;
        }
        getInt(e) {
            return this._data[e];
        }
        setInt(e, t) {
            this._data[e] = t;
        }
        getNumber(e) {
            return this._data[e];
        }
        setNumber(e, t) {
            this._data[e] = t;
        }
        getVector2(e) {
            return this._data[e];
        }
        setVector2(e, t) {
            this._data[e] = t;
        }
        getVector3(e) {
            return this._data[e];
        }
        setVector3(e, t) {
            this._data[e] = t;
        }
        getVector(e) {
            return this._data[e];
        }
        setVector(e, t) {
            this._data[e] = t;
        }
        getQuaternion(e) {
            return this._data[e];
        }
        setQuaternion(e, t) {
            this._data[e] = t;
        }
        getMatrix4x4(e) {
            return this._data[e];
        }
        setMatrix4x4(e, t) {
            this._data[e] = t;
        }
        getBuffer(e) {
            return this._data[e];
        }
        setBuffer(e, t) {
            this._data[e] = t;
        }
        setTexture(e, r) {
            var a = this._data[e];
            this._data[e] = r || t.Texture2D.erroTextur, this._ownerResource && this._ownerResource.referenceCount > 0 && (a && a._removeReference(), 
            r && r._addReference());
        }
        getTexture(e) {
            return this._data[e];
        }
        setValueData(e, t) {
            this._data[e] = t;
        }
        getValueData(e) {
            return this._data[e];
        }
        setAttribute(e, t) {
            this._data[e] = t;
        }
        getAttribute(e) {
            return this._data[e];
        }
        getLength() {
            return this._data.length;
        }
        setLength(e) {
            this._data.length = e;
        }
        cloneTo(e) {
            var r = e, s = r._data;
            for (var o in this._data) {
                var l = this._data[o];
                if (null != l) if ("number" == typeof l) s[o] = l; else if ("number" == typeof l) s[o] = l; else if ("boolean" == typeof l) s[o] = l; else if (l instanceof a) {
                    var h = s[o] || (s[o] = new a());
                    l.cloneTo(h), s[o] = h;
                } else if (l instanceof i) {
                    var _ = s[o] || (s[o] = new i());
                    l.cloneTo(_), s[o] = _;
                } else if (l instanceof n) {
                    var d = s[o] || (s[o] = new n());
                    l.cloneTo(d), s[o] = d;
                } else if (l instanceof b) {
                    var c = s[o] || (s[o] = new b());
                    l.cloneTo(c), s[o] = c;
                } else l instanceof t.BaseTexture && (s[o] = l);
            }
            this._defineDatas.cloneTo(r._defineDatas);
        }
        clone() {
            var e = new F();
            return this.cloneTo(e), e;
        }
        cloneToForNative(e) {
            var r = e;
            this._int32Data.length - r._int32Data.length > 0 && r.needRenewArrayBufferForNative(this._int32Data.length), 
            r._int32Data.set(this._int32Data, 0);
            var s = r._nativeArray, o = this._nativeArray.length;
            s.length = o;
            for (var l = 0; l < o; l++) {
                var h = this._nativeArray[l];
                if (h) if ("number" == typeof h) s[l] = h, r.setNumber(l, h); else if ("number" == typeof h) s[l] = h, 
                r.setInt(l, h); else if ("boolean" == typeof h) s[l] = h, r.setBool(l, h); else if (h instanceof a) {
                    var _ = s[l] || (s[l] = new a());
                    h.cloneTo(_), s[l] = _, r.setVector2(l, _);
                } else if (h instanceof i) {
                    var d = s[l] || (s[l] = new i());
                    h.cloneTo(d), s[l] = d, r.setVector3(l, d);
                } else if (h instanceof n) {
                    var c = s[l] || (s[l] = new n());
                    h.cloneTo(c), s[l] = c, r.setVector(l, c);
                } else if (h instanceof b) {
                    var u = s[l] || (s[l] = new b());
                    h.cloneTo(u), s[l] = u, r.setMatrix4x4(l, u);
                } else h instanceof t.BaseTexture && (s[l] = h, r.setTexture(l, h));
            }
            this._defineDatas.cloneTo(r._defineDatas);
        }
        _initDataForNative() {
            this._frameCount = -1, this._runtimeCopyValues.length = 0, this._nativeArray = [], 
            this._data = new ArrayBuffer(32), this._int32Data = new Int32Array(this._data), 
            this._float32Data = new Float32Array(this._data), t.LayaGL.instance.createArrayBufferRef(this._data, t.LayaGL.ARRAY_BUFFER_TYPE_DATA, !0);
        }
        needRenewArrayBufferForNative(e) {
            if (e >= this._int32Data.length) {
                var r = 4 * (e + 1), a = this._int32Data, n = this._data.conchRef, i = this._data._ptrID;
                this._data = new ArrayBuffer(r), this._int32Data = new Int32Array(this._data), this._float32Data = new Float32Array(this._data), 
                this._data.conchRef = n, this._data._ptrID = i, a && this._int32Data.set(a, 0);
                var s = t.LayaGL.instance;
                s.updateArrayBufferRef ? s.updateArrayBufferRef(this._data._ptrID, n.isSyncToRender(), this._data) : window.conch.updateArrayBufferRef(this._data._ptrID, n.isSyncToRender(), this._data);
            }
        }
        getDataForNative() {
            return this._nativeArray;
        }
        getIntForNative(e) {
            return this._int32Data[e];
        }
        setIntForNative(e, t) {
            this.needRenewArrayBufferForNative(e), this._int32Data[e] = t, this._nativeArray[e] = t;
        }
        getBoolForNative(e) {
            return 1 == this._int32Data[e];
        }
        setBoolForNative(e, t) {
            this.needRenewArrayBufferForNative(e), this._int32Data[e] = t ? 1 : 0, this._nativeArray[e] = t;
        }
        getNumberForNative(e) {
            return this._float32Data[e];
        }
        setNumberForNative(e, t) {
            this.needRenewArrayBufferForNative(e), this._float32Data[e] = t, this._nativeArray[e] = t;
        }
        getMatrix4x4ForNative(e) {
            return this._nativeArray[e];
        }
        setMatrix4x4ForNative(e, t) {
            this.needRenewArrayBufferForNative(e), this._nativeArray[e] = t;
            var r = this.setReferenceForNative(t.elements);
            this._int32Data[e] = r;
        }
        getVectorForNative(e) {
            return this._nativeArray[e];
        }
        setVectorForNative(e, t) {
            this.needRenewArrayBufferForNative(e), this._nativeArray[e] = t, t.elements || t.forNativeElement();
            var r = this.setReferenceForNative(t.elements);
            this._int32Data[e] = r;
        }
        getVector2ForNative(e) {
            return this._nativeArray[e];
        }
        setVector2ForNative(e, t) {
            this.needRenewArrayBufferForNative(e), this._nativeArray[e] = t, t.elements || t.forNativeElement();
            var r = this.setReferenceForNative(t.elements);
            this._int32Data[e] = r;
        }
        getVector3ForNative(e) {
            return this._nativeArray[e];
        }
        setVector3ForNative(e, t) {
            this.needRenewArrayBufferForNative(e), this._nativeArray[e] = t, t.elements || t.forNativeElement();
            var r = this.setReferenceForNative(t.elements);
            this._int32Data[e] = r;
        }
        getQuaternionForNative(e) {
            return this._nativeArray[e];
        }
        setQuaternionForNative(e, t) {
            this.needRenewArrayBufferForNative(e), this._nativeArray[e] = t, t.elements || t.forNativeElement();
            var r = this.setReferenceForNative(t.elements);
            this._int32Data[e] = r;
        }
        getBufferForNative(e) {
            return this._nativeArray[e];
        }
        setBufferForNative(e, t) {
            this.needRenewArrayBufferForNative(e), this._nativeArray[e] = t;
            var r = this.setReferenceForNative(t);
            this._int32Data[e] = r;
        }
        getAttributeForNative(e) {
            return this._nativeArray[e];
        }
        setAttributeForNative(e, r) {
            this._nativeArray[e] = r, r._ptrID || t.LayaGL.instance.createArrayBufferRef(r, t.LayaGL.ARRAY_BUFFER_TYPE_DATA, !0), 
            t.LayaGL.instance.syncBufferToRenderThread(r), this._int32Data[e] = r._ptrID;
        }
        getTextureForNative(e) {
            return this._nativeArray[e];
        }
        setTextureForNative(e, t) {
            if (t) {
                this.needRenewArrayBufferForNative(e);
                var r = this._nativeArray[e];
                this._nativeArray[e] = t;
                var a = t._getSource() || t.defaulteTexture._getSource();
                this._int32Data[e] = a.id, this._ownerResource && this._ownerResource.referenceCount > 0 && (r && r._removeReference(), 
                t && t._addReference());
            }
        }
        setReferenceForNative(e) {
            this.clearRuntimeCopyArray();
            var r = 0, a = 0;
            return F._SET_RUNTIME_VALUE_MODE_REFERENCE_ ? (t.LayaGL.instance.createArrayBufferRefs(e, t.LayaGL.ARRAY_BUFFER_TYPE_DATA, !0, t.LayaGL.ARRAY_BUFFER_REF_REFERENCE), 
            r = 0, a = e.getPtrID(r)) : (t.LayaGL.instance.createArrayBufferRefs(e, t.LayaGL.ARRAY_BUFFER_TYPE_DATA, !0, t.LayaGL.ARRAY_BUFFER_REF_COPY), 
            r = e.getRefNum() - 1, a = e.getPtrID(r), this._runtimeCopyValues.push({
                obj: e,
                refID: r,
                ptrID: a
            })), t.LayaGL.instance.syncBufferToRenderThread(e, r), a;
        }
        static setRuntimeValueMode(e) {
            F._SET_RUNTIME_VALUE_MODE_REFERENCE_ = e;
        }
        clearRuntimeCopyArray() {
            var e = t.Stat.loopCount;
            if (this._frameCount != e) {
                this._frameCount = e;
                for (var r = 0, a = this._runtimeCopyValues.length; r < a; r++) {
                    this._runtimeCopyValues[r].obj.clearRefNum();
                }
                this._runtimeCopyValues.length = 0;
            }
        }
    }
    F._SET_RUNTIME_VALUE_MODE_REFERENCE_ = !0;
    class U {
        constructor(e, t) {
            this._id = ++U._uniqueIDCounter, this._vertexElementsDic = {}, this._vertexStride = e, 
            this._vertexElements = t;
            var r = t.length;
            this._shaderValues = new F(null);
            for (var a = 0; a < r; a++) {
                var n = t[a], i = n._elementUsage;
                this._vertexElementsDic[i] = n;
                var s = new Int32Array(5), o = B.getElementInfos(n._elementFormat);
                s[0] = o[0], s[1] = o[1], s[2] = o[2], s[3] = this._vertexStride, s[4] = n._offset, 
                this._shaderValues.setAttribute(i, s);
            }
        }
        get id() {
            return this._id;
        }
        get vertexStride() {
            return this._vertexStride;
        }
        get vertexElementCount() {
            return this._vertexElements.length;
        }
        getVertexElementByIndex(e) {
            return this._vertexElements[e];
        }
        getVertexElementByUsage(e) {
            return this._vertexElementsDic[e];
        }
    }
    U._uniqueIDCounter = 1;
    class H {
        constructor(e, t, r) {
            this._offset = e, this._elementFormat = t, this._elementUsage = r;
        }
        get offset() {
            return this._offset;
        }
        get elementFormat() {
            return this._elementFormat;
        }
        get elementUsage() {
            return this._elementUsage;
        }
    }
    class G extends t.BufferStateBase {
        constructor() {
            super();
        }
        applyVertexBuffer(e) {
            if (t.BufferStateBase._curBindedBufferState !== this) throw "BufferState: must call bind() function first.";
            var r = t.LayaGL.instance, a = e.vertexDeclaration, n = a._shaderValues.getData();
            for (var i in this.vertexDeclaration = a, e.bind(), n) {
                var s = parseInt(i), o = n[i];
                r.enableVertexAttribArray(s), r.vertexAttribPointer(s, o[0], o[1], !!o[2], o[3], o[4]);
            }
        }
        applyVertexBuffers(e) {
            if (t.BufferStateBase._curBindedBufferState !== this) throw "BufferState: must call bind() function first.";
            for (var r = t.LayaGL.instance, a = 0, n = e.length; a < n; a++) {
                var i = e[a], s = i.vertexDeclaration._shaderValues.getData();
                for (var o in i.bind(), s) {
                    var l = parseInt(o), h = s[o];
                    r.enableVertexAttribArray(l), r.vertexAttribPointer(l, h[0], h[1], !!h[2], h[3], h[4]);
                }
            }
        }
        applyInstanceVertexBuffer(e) {
            if (t.LayaGL.layaGPUInstance.supportInstance()) {
                if (t.BufferStateBase._curBindedBufferState !== this) throw "BufferState: must call bind() function first.";
                var r = t.LayaGL.instance, a = e.vertexDeclaration._shaderValues.getData();
                for (var n in e.bind(), a) {
                    var i = parseInt(n), s = a[n];
                    r.enableVertexAttribArray(i), r.vertexAttribPointer(i, s[0], s[1], !!s[2], s[3], s[4]), 
                    t.LayaGL.layaGPUInstance.vertexAttribDivisor(i, 1);
                }
            }
        }
        applyIndexBuffer(e) {
            if (t.BufferStateBase._curBindedBufferState !== this) throw "BufferState: must call bind() function first.";
            this._bindedIndexBuffer !== e && (e._bindForVAO(), this._bindedIndexBuffer = e);
        }
    }
    class z extends t.Resource {
        constructor() {
            super(), this._bufferState = new G(), this._bufferStateInvertUV = new G();
            var e = t.LayaGL.instance;
            this._vertexBuffer = new V(64, e.STATIC_DRAW, !1), this._vertexBuffer.vertexDeclaration = z._vertexDeclaration, 
            this._vertexBuffer.setData(z._vertices.buffer), this._bufferState.bind(), this._bufferState.applyVertexBuffer(this._vertexBuffer), 
            this._bufferState.unBind(), this._vertexBufferInvertUV = new V(64, e.STATIC_DRAW, !1), 
            this._vertexBufferInvertUV.vertexDeclaration = z._vertexDeclaration, this._vertexBufferInvertUV.setData(z._verticesInvertUV.buffer), 
            this._bufferStateInvertUV.bind(), this._bufferStateInvertUV.applyVertexBuffer(this._vertexBufferInvertUV), 
            this._bufferStateInvertUV.unBind(), this._setGPUMemory(this._vertexBuffer._byteLength + this._vertexBufferInvertUV._byteLength);
        }
        static __init__() {
            z._vertexDeclaration = new U(16, [ new H(0, B.Vector4, z.SCREENQUAD_POSITION_UV) ]), 
            z.instance = new z(), z.instance.lock = !0;
        }
        render() {
            var e = t.LayaGL.instance;
            this._bufferState.bind(), e.drawArrays(e.TRIANGLE_STRIP, 0, 4), t.Stat.renderBatches++;
        }
        renderInvertUV() {
            var e = t.LayaGL.instance;
            this._bufferStateInvertUV.bind(), e.drawArrays(e.TRIANGLE_STRIP, 0, 4), t.Stat.renderBatches++;
        }
        destroy() {
            super.destroy(), this._bufferState.destroy(), this._vertexBuffer.destroy(), this._bufferStateInvertUV.destroy(), 
            this._vertexBufferInvertUV.destroy(), this._setGPUMemory(0);
        }
    }
    z.SCREENQUAD_POSITION_UV = 0, z._vertices = new Float32Array([ 1, 1, 1, 1, 1, -1, 1, 0, -1, 1, 0, 1, -1, -1, 0, 0 ]), 
    z._verticesInvertUV = new Float32Array([ 1, 1, 1, 0, 1, -1, 1, 1, -1, 1, 0, 0, -1, -1, 0, 1 ]);
    class k extends t.Resource {
        constructor() {
            super(), this._bufferState = new G(), this._bufferStateInvertUV = new G();
            var e = t.LayaGL.instance;
            this._vertexBuffer = new V(48, e.STATIC_DRAW, !1), this._vertexBuffer.vertexDeclaration = k._vertexDeclaration, 
            this._vertexBuffer.setData(k._vertices.buffer), this._bufferState.bind(), this._bufferState.applyVertexBuffer(this._vertexBuffer), 
            this._bufferState.unBind(), this._vertexBufferInvertUV = new V(48, e.STATIC_DRAW, !1), 
            this._vertexBufferInvertUV.vertexDeclaration = k._vertexDeclaration, this._vertexBufferInvertUV.setData(k._verticesInvertUV.buffer), 
            this._bufferStateInvertUV.bind(), this._bufferStateInvertUV.applyVertexBuffer(this._vertexBufferInvertUV), 
            this._bufferStateInvertUV.unBind(), this._setGPUMemory(this._vertexBuffer._byteLength + this._vertexBufferInvertUV._byteLength);
        }
        static __init__() {
            k._vertexDeclaration = new U(16, [ new H(0, B.Vector4, k.SCREENTRIANGLE_POSITION_UV) ]), 
            k.instance = new k(), k.instance.lock = !0;
        }
        render() {
            var e = t.LayaGL.instance;
            this._bufferState.bind(), e.drawArrays(e.TRIANGLES, 0, 3), t.Stat.renderBatches++;
        }
        renderInvertUV() {
            var e = t.LayaGL.instance;
            this._bufferStateInvertUV.bind(), e.drawArrays(e.TRIANGLES, 0, 3), t.Stat.renderBatches++;
        }
        destroy() {
            super.destroy(), this._bufferState.destroy(), this._vertexBuffer.destroy(), this._bufferStateInvertUV.destroy(), 
            this._vertexBufferInvertUV.destroy(), this._setGPUMemory(0);
        }
    }
    k.SCREENTRIANGLE_POSITION_UV = 0, k._vertices = new Float32Array([ -1, -1, 0, 0, -1, 3, 0, 2, 3, -1, 2, 0 ]), 
    k._verticesInvertUV = new Float32Array([ -1, -1, 0, 1, -1, 3, 0, -1, 3, -1, 2, 1 ]);
    class W {
        constructor(e, t) {
            this._index = e, this._value = t;
        }
    }
    class X {
        constructor(e, t, r, a) {
            this._subShaderIndex = 0, this._passIndex = 0, this.setValue(e, t, r, a);
        }
        get shader() {
            return this._shader;
        }
        get subShaderIndex() {
            return this._subShaderIndex;
        }
        get passIndex() {
            return this._passIndex;
        }
        get defineNames() {
            return this._defineNames;
        }
        setValue(e, t, r, a) {
            if (!e) throw "ShaderVariantInfo:Shader can't be null.";
            var n = e.getSubShaderAt(t);
            if (!n) throw `ShaderVariantInfo:Shader don't have subShaderIndex of ${t}.`;
            var i = n._passes[r];
            if (!i) throw `ShaderVariantInfo:Shader don't have passIndex of ${r}.`;
            for (var s = i._validDefine, o = 0, l = a.length; o < l; o++) {
                var _ = a[o];
                if (!s.has(h.Shader3D.getDefineByName(_))) throw `ShaderVariantInfo:Invalid defineName ${_} in ${e._name} subShaderIndex of ${t} passIndex of ${r}.`;
            }
            this._shader = e, this._subShaderIndex = t, this._passIndex = r, this._defineNames = a;
        }
        equal(e) {
            if (this._shader !== e._shader || this._subShaderIndex !== e._subShaderIndex || this._passIndex !== e._passIndex) return !1;
            var t = this._defineNames, r = e._defineNames;
            if (t.length !== r.length) return !1;
            for (var a = 0, n = this._defineNames.length; a < n; a++) if (t[a] !== r[a]) return !1;
            return !0;
        }
        clone() {
            return new X(this._shader, this._subShaderIndex, this._passIndex, this._defineNames.slice());
        }
    }
    class Y {
        constructor() {
            this._allCompiled = !1, this._variants = [];
        }
        get allCompiled() {
            return this._allCompiled;
        }
        get variantCount() {
            return this._variants.length;
        }
        add(e) {
            for (var t = 0, r = this._variants.length; t < r; t++) if (this._variants[t].equal(e)) return !1;
            return this._variants.push(e.clone()), this._allCompiled = !1, !0;
        }
        remove(e) {
            for (var t = 0, r = this._variants.length; t < r; t++) if (this._variants[t].equal(e)) return this._variants.splice(t, 1), 
            !0;
            return !1;
        }
        contatins(e) {
            for (var t = 0, r = this._variants.length; t < r; t++) if (this._variants[t].equal(e)) return !0;
            return !1;
        }
        getByIndex(e) {
            return this._variants[e];
        }
        clear() {
            this._variants.length = 0;
        }
        compile() {
            if (!this._allCompiled) {
                for (var e = this._variants, t = 0, r = e.length; t < r; t++) {
                    var a = e[t];
                    h.Shader3D.compileShaderByDefineNames(a._shader._name, a._subShaderIndex, a._passIndex, a._defineNames);
                }
                this._allCompiled = !0;
            }
        }
    }
    class Z {
        constructor(e, t, r, a, n) {
            this._attributeMap = null, this._uniformMap = null, this._enableInstancing = !1, 
            this._supportReflectionProbe = !1, this._subShaders = [], this._name = e, this._attributeMap = t, 
            this._uniformMap = r, this._enableInstancing = a, this._supportReflectionProbe = n;
        }
        static _getNamesByDefineData(e, t) {
            var r = Z._maskMap, a = e._mask;
            t.length = 0;
            for (var n = 0, i = e._length; n < i; n++) for (var s = r[n], o = a[n], l = 0; l < 32; l++) {
                var h = 1 << l;
                if (o > 0 && h > o) break;
                o & h && t.push(s[h]);
            }
        }
        static getDefineByName(e) {
            var t = Z._defineMap[e];
            if (!t) {
                var r = Z._maskMap, a = Z._defineCounter, n = Math.floor(a / 32), i = 1 << a % 32;
                t = new W(n, i), Z._defineMap[e] = t, n == r.length && (r.length++, r[n] = {}), 
                r[n][i] = e, Z._defineCounter++;
            }
            return t;
        }
        static propertyNameToID(e) {
            if (null != Z._propertyNameMap[e]) return Z._propertyNameMap[e];
            var t = Z._propertyNameCounter++;
            return Z._propertyNameMap[e] = t, Z._propertyNameMap[t] = e, t;
        }
        static addInclude(e, r) {
            r = r.replace(t.ShaderCompile._clearCR, ""), t.ShaderCompile.addInclude(e, r);
        }
        static compileShaderByDefineNames(e, t, r, a) {
            var n = Z.find(e);
            if (n) {
                var i = n.getSubShaderAt(t);
                if (i) {
                    var s = i._passes[r];
                    if (s) {
                        var o = Z._compileDefineDatas;
                        o.clear();
                        for (var l = 0, h = a.length; l < h; l++) o.add(Z.getDefineByName(a[l]));
                        s.withCompile(o);
                    } else console.warn("Shader3D: unknown passIndex.");
                } else console.warn("Shader3D: unknown subShaderIndex.");
            } else console.warn("Shader3D: unknown shader name.");
        }
        static add(e, t = null, r = null, a = !1, n = !1) {
            return Z._preCompileShader[e] = new Z(e, t, r, a, n);
        }
        static find(e) {
            return Z._preCompileShader[e];
        }
        get name() {
            return this._name;
        }
        addSubShader(e) {
            this._subShaders.push(e), e._owner = this;
        }
        getSubShaderAt(e) {
            return this._subShaders[e];
        }
        static compileShader(e, t, r, ...a) {
            var n = Z.find(e);
            if (n) {
                var i = n.getSubShaderAt(t);
                if (i) {
                    var s = i._passes[r];
                    if (s) {
                        var o = Z._compileDefineDatas, l = o._mask;
                        l.length = 0;
                        for (var h = 0, _ = a.length; h < _; h++) l.push(a[h]);
                        o._length = a.length, s.withCompile(o);
                    } else console.warn("Shader3D: unknown passIndex.");
                } else console.warn("Shader3D: unknown subShaderIndex.");
            } else console.warn("Shader3D: unknown shader name.");
        }
    }
    Z._compileDefineDatas = new w(), Z.RENDER_STATE_CULL = 0, Z.RENDER_STATE_BLEND = 1, 
    Z.RENDER_STATE_BLEND_SRC = 2, Z.RENDER_STATE_BLEND_DST = 3, Z.RENDER_STATE_BLEND_SRC_RGB = 4, 
    Z.RENDER_STATE_BLEND_DST_RGB = 5, Z.RENDER_STATE_BLEND_SRC_ALPHA = 6, Z.RENDER_STATE_BLEND_DST_ALPHA = 7, 
    Z.RENDER_STATE_BLEND_CONST_COLOR = 8, Z.RENDER_STATE_BLEND_EQUATION = 9, Z.RENDER_STATE_BLEND_EQUATION_RGB = 10, 
    Z.RENDER_STATE_BLEND_EQUATION_ALPHA = 11, Z.RENDER_STATE_DEPTH_TEST = 12, Z.RENDER_STATE_DEPTH_WRITE = 13, 
    Z.PERIOD_CUSTOM = 0, Z.PERIOD_MATERIAL = 1, Z.PERIOD_SPRITE = 2, Z.PERIOD_CAMERA = 3, 
    Z.PERIOD_SCENE = 4, Z._propertyNameMap = {}, Z._propertyNameCounter = 0, Z._defineCounter = 0, 
    Z._defineMap = {}, Z._preCompileShader = {}, Z._maskMap = [], Z.debugMode = !1, 
    Z.debugShaderVariantCollection = new Y();
    class j {
        constructor() {
            this._commandBuffer = null;
        }
        static __init__() {
            j._screenShaderData = new F(), j._screenShader = Z.find("BlitScreen");
        }
        run() {}
        recover() {
            this._commandBuffer = null;
        }
        setContext(e) {
            this._context = e;
        }
    }
    j.SCREENTEXTURE_NAME = "u_MainTex", j.SCREENTEXTUREOFFSETSCALE_NAME = "u_OffsetScale", 
    j.MAINTEXTURE_TEXELSIZE_NAME = "u_MainTex_TexelSize", j.SCREENTEXTURE_ID = Z.propertyNameToID(j.SCREENTEXTURE_NAME), 
    j.SCREENTEXTUREOFFSETSCALE_ID = Z.propertyNameToID(j.SCREENTEXTUREOFFSETSCALE_NAME), 
    j.MAINTEXTURE_TEXELSIZE_ID = Z.propertyNameToID(j.MAINTEXTURE_TEXELSIZE_NAME);
    class q extends j {
        constructor() {
            super(...arguments), this._source = null, this._dest = null, this._offsetScale = null, 
            this._shader = null, this._shaderData = null, this._subShader = 0, this._sourceTexelSize = new n(), 
            this._screenType = 0, this._drawDefineCavans = !1;
        }
        static create(e, t, r = null, a = null, n = null, i = 0, s = q._SCREENTYPE_QUAD, o = null, l = !1) {
            var h;
            return (h = q._pool.length > 0 ? q._pool.pop() : new q())._source = e, h._dest = t, 
            h._offsetScale = r, h._shader = a, h._shaderData = n, h._subShader = i, h._screenType = s, 
            h._commandBuffer = o, h._drawDefineCavans = l, h;
        }
        run() {
            var e;
            if (this._source) e = this._source; else {
                if (!this._commandBuffer._camera._internalRenderTexture) throw "camera internalRenderTexture is null,please set camera enableBuiltInRenderTexture";
                e = this._commandBuffer._camera._internalRenderTexture;
            }
            var r = this._shader || j._screenShader, a = this._shaderData || j._screenShaderData, n = this._dest ? this._dest : this._drawDefineCavans ? this._dest : this._commandBuffer._camera._internalRenderTexture;
            if (n) t.LayaGL.instance.viewport(0, 0, n.width, n.height); else {
                let e = this._commandBuffer._camera.viewport, r = e.height, a = N.clientHeight - e.y - r;
                t.LayaGL.instance.viewport(e.x, a, e.width, r);
            }
            a.setTexture(j.SCREENTEXTURE_ID, e), a.setVector(j.SCREENTEXTUREOFFSETSCALE_ID, this._offsetScale || q._defaultOffsetScale), 
            this._sourceTexelSize.setValue(1 / e.width, 1 / e.height, e.width, e.height), a.setVector(j.MAINTEXTURE_TEXELSIZE_ID, this._sourceTexelSize), 
            P.currentActive && P.currentActive._end(), n && n._start();
            for (var i = r.getSubShaderAt(this._subShader)._passes, s = 0, o = i.length; s < o; s++) {
                var l = q._compileDefine;
                a._defineDatas.cloneTo(l);
                var h = i[s].withCompile(l);
                switch (h.bind(), h.uploadUniforms(h._materialUniformParamsMap, a, !0), h.uploadRenderStateBlendDepth(a), 
                h.uploadRenderStateFrontFace(a, !1, null), this._screenType) {
                  case q._SCREENTYPE_QUAD:
                    N._instance.invertY ? z.instance.renderInvertUV() : z.instance.render();
                    break;

                  case q._SCREENTYPE_TRIANGLE:
                    N._instance.invertY ? k.instance.renderInvertUV() : k.instance.render();
                    break;

                  default:
                    throw "BlitScreenQuadCMD:unknown screen Type.";
                }
            }
            n && n._end();
        }
        recover() {
            q._pool.push(this), this._source = null, this._dest = null, this._offsetScale = null, 
            this._shader = null, this._shaderData = null, this._drawDefineCavans = !1, super.recover();
        }
    }
    q._SCREENTYPE_QUAD = 0, q._SCREENTYPE_TRIANGLE = 1, q._compileDefine = new w(), 
    q._pool = [], q._defaultOffsetScale = new n(0, 0, 1, 1);
    class Q extends j {
        constructor() {
            super(...arguments), this._renderTexture = null;
        }
        static create(e) {
            var t;
            return (t = Q._pool.length > 0 ? Q._pool.pop() : new Q())._renderTexture = e, t;
        }
        run() {
            P.currentActive && P.currentActive._end(), t.LayaGL.instance.viewport(0, 0, this._renderTexture.width, this._renderTexture.height), 
            this._renderTexture._start();
        }
        recover() {
            Q._pool.push(this), this._renderTexture = null;
        }
    }
    Q._pool = [], (o = e.ShaderDataType || (e.ShaderDataType = {}))[o.Int = 0] = "Int", 
    o[o.Bool = 1] = "Bool", o[o.Number = 2] = "Number", o[o.Vector2 = 3] = "Vector2", 
    o[o.Vector3 = 4] = "Vector3", o[o.Vector4 = 5] = "Vector4", o[o.Quaternion = 6] = "Quaternion", 
    o[o.Matrix4x4 = 7] = "Matrix4x4", o[o.Buffer = 8] = "Buffer", o[o.Texture = 9] = "Texture";
    class K extends j {
        constructor() {
            super(...arguments), this._shaderData = null, this._nameID = 0, this._value = null, 
            this._dataType = -1;
        }
        static create(e, t, r, a, n) {
            var i;
            return (i = K._pool.length > 0 ? K._pool.pop() : new K())._shaderData = e, i._nameID = t, 
            i._value = r, i._dataType = a, i._commandBuffer = n, i;
        }
        run() {
            switch (this._dataType) {
              case e.ShaderDataType.Int:
                this._shaderData.setInt(this._nameID, this._value);
                break;

              case e.ShaderDataType.Number:
                this._shaderData.setNumber(this._nameID, this._value);
                break;

              case e.ShaderDataType.Bool:
                this._shaderData.setBool(this._nameID, this._value);
                break;

              case e.ShaderDataType.Matrix4x4:
                this._shaderData.setMatrix4x4(this._nameID, this._value);
                break;

              case e.ShaderDataType.Quaternion:
                this._shaderData.setQuaternion(this._nameID, this._value);
                break;

              case e.ShaderDataType.Texture:
                this._shaderData.setTexture(this._nameID, this._value);
                break;

              case e.ShaderDataType.Vector4:
                this._shaderData.setVector(this._nameID, this._value);
                break;

              case e.ShaderDataType.Vector2:
                this._shaderData.setVector2(this._nameID, this._value);
                break;

              case e.ShaderDataType.Vector3:
                this._shaderData.setVector3(this._nameID, this._value);
                break;

              case e.ShaderDataType.Buffer:
                this._shaderData.setBuffer(this._nameID, this._value);
                break;

              default:
                throw "no type shaderValue on this CommendBuffer";
            }
        }
        recover() {
            K._pool.push(this), this._shaderData = null, this._nameID = 0, this._value = null, 
            this._dataType = -1;
        }
    }
    K._pool = [];
    class J extends t.EventDispatcher {
        constructor(e) {
            super(), this._localPosition = new i(0, 0, 0), this._localRotation = new T(0, 0, 0, 1), 
            this._localScale = new i(1, 1, 1), this._localRotationEuler = new i(0, 0, 0), this._localMatrix = new b(), 
            this._position = new i(0, 0, 0), this._rotation = new T(0, 0, 0, 1), this._scale = new i(1, 1, 1), 
            this._rotationEuler = new i(0, 0, 0), this._worldMatrix = new b(), this._children = null, 
            this._parent = null, this._dummy = null, this._transformFlag = 0, this._owner = e, 
            this._children = [], this._setTransformFlag(J.TRANSFORM_LOCALQUATERNION | J.TRANSFORM_LOCALEULER | J.TRANSFORM_LOCALMATRIX, !1), 
            this._setTransformFlag(J.TRANSFORM_WORLDPOSITION | J.TRANSFORM_WORLDQUATERNION | J.TRANSFORM_WORLDEULER | J.TRANSFORM_WORLDSCALE | J.TRANSFORM_WORLDMATRIX, !0);
        }
        get _isFrontFaceInvert() {
            var e = this.getWorldLossyScale(), t = e.x < 0;
            return e.y < 0 && (t = !t), e.z < 0 && (t = !t), t;
        }
        get owner() {
            return this._owner;
        }
        get worldNeedUpdate() {
            return this._getTransformFlag(J.TRANSFORM_WORLDMATRIX);
        }
        get localPositionX() {
            return this._localPosition.x;
        }
        set localPositionX(e) {
            this._localPosition.x = e, this.localPosition = this._localPosition;
        }
        get localPositionY() {
            return this._localPosition.y;
        }
        set localPositionY(e) {
            this._localPosition.y = e, this.localPosition = this._localPosition;
        }
        get localPositionZ() {
            return this._localPosition.z;
        }
        set localPositionZ(e) {
            this._localPosition.z = e, this.localPosition = this._localPosition;
        }
        get localPosition() {
            return this._localPosition;
        }
        set localPosition(e) {
            this._localPosition !== e && e.cloneTo(this._localPosition), this._setTransformFlag(J.TRANSFORM_LOCALMATRIX, !0), 
            this._onWorldPositionTransform();
        }
        get localRotationX() {
            return this.localRotation.x;
        }
        set localRotationX(e) {
            this._localRotation.x = e, this.localRotation = this._localRotation;
        }
        get localRotationY() {
            return this.localRotation.y;
        }
        set localRotationY(e) {
            this._localRotation.y = e, this.localRotation = this._localRotation;
        }
        get localRotationZ() {
            return this.localRotation.z;
        }
        set localRotationZ(e) {
            this._localRotation.z = e, this.localRotation = this._localRotation;
        }
        get localRotationW() {
            return this.localRotation.w;
        }
        set localRotationW(e) {
            this._localRotation.w = e, this.localRotation = this._localRotation;
        }
        get localRotation() {
            if (this._getTransformFlag(J.TRANSFORM_LOCALQUATERNION)) {
                var e = this._localRotationEuler;
                T.createFromYawPitchRoll(e.y / J._angleToRandin, e.x / J._angleToRandin, e.z / J._angleToRandin, this._localRotation), 
                this._setTransformFlag(J.TRANSFORM_LOCALQUATERNION, !1);
            }
            return this._localRotation;
        }
        set localRotation(e) {
            this._localRotation !== e && e.cloneTo(this._localRotation), this._localRotation.normalize(this._localRotation), 
            this._setTransformFlag(J.TRANSFORM_LOCALEULER | J.TRANSFORM_LOCALMATRIX, !0), this._setTransformFlag(J.TRANSFORM_LOCALQUATERNION, !1), 
            this._onWorldRotationTransform();
        }
        get localScaleX() {
            return this._localScale.x;
        }
        set localScaleX(e) {
            this._localScale.x = e, this.localScale = this._localScale;
        }
        get localScaleY() {
            return this._localScale.y;
        }
        set localScaleY(e) {
            this._localScale.y = e, this.localScale = this._localScale;
        }
        get localScaleZ() {
            return this._localScale.z;
        }
        set localScaleZ(e) {
            this._localScale.z = e, this.localScale = this._localScale;
        }
        get localScale() {
            return this._localScale;
        }
        set localScale(e) {
            this._localScale !== e && e.cloneTo(this._localScale), this._setTransformFlag(J.TRANSFORM_LOCALMATRIX, !0), 
            this._onWorldScaleTransform();
        }
        get localRotationEulerX() {
            return this.localRotationEuler.x;
        }
        set localRotationEulerX(e) {
            this._localRotationEuler.x = e, this.localRotationEuler = this._localRotationEuler;
        }
        get localRotationEulerY() {
            return this.localRotationEuler.y;
        }
        set localRotationEulerY(e) {
            this._localRotationEuler.y = e, this.localRotationEuler = this._localRotationEuler;
        }
        get localRotationEulerZ() {
            return this.localRotationEuler.z;
        }
        set localRotationEulerZ(e) {
            this._localRotationEuler.z = e, this.localRotationEuler = this._localRotationEuler;
        }
        get localRotationEuler() {
            if (this._getTransformFlag(J.TRANSFORM_LOCALEULER)) {
                this._localRotation.getYawPitchRoll(J._tempVector30);
                var e = J._tempVector30, t = this._localRotationEuler;
                t.x = e.y * J._angleToRandin, t.y = e.x * J._angleToRandin, t.z = e.z * J._angleToRandin, 
                this._setTransformFlag(J.TRANSFORM_LOCALEULER, !1);
            }
            return this._localRotationEuler;
        }
        set localRotationEuler(e) {
            this._localRotationEuler !== e && e.cloneTo(this._localRotationEuler), this._setTransformFlag(J.TRANSFORM_LOCALEULER, !1), 
            this._setTransformFlag(J.TRANSFORM_LOCALQUATERNION | J.TRANSFORM_LOCALMATRIX, !0), 
            this._onWorldRotationTransform();
        }
        get localMatrix() {
            return this._getTransformFlag(J.TRANSFORM_LOCALMATRIX) && (b.createAffineTransformation(this._localPosition, this.localRotation, this._localScale, this._localMatrix), 
            this._setTransformFlag(J.TRANSFORM_LOCALMATRIX, !1)), this._localMatrix;
        }
        set localMatrix(e) {
            this._localMatrix !== e && e.cloneTo(this._localMatrix), this._localMatrix.decomposeTransRotScale(this._localPosition, this._localRotation, this._localScale), 
            this._setTransformFlag(J.TRANSFORM_LOCALEULER, !0), this._setTransformFlag(J.TRANSFORM_LOCALMATRIX, !1), 
            this._onWorldTransform();
        }
        get position() {
            if (this._getTransformFlag(J.TRANSFORM_WORLDPOSITION)) {
                if (null != this._parent) {
                    var e = this.worldMatrix.elements;
                    this._position.x = e[12], this._position.y = e[13], this._position.z = e[14];
                } else this._localPosition.cloneTo(this._position);
                this._setTransformFlag(J.TRANSFORM_WORLDPOSITION, !1);
            }
            return this._position;
        }
        set position(e) {
            if (null != this._parent) {
                var t = J._tempMatrix0;
                this._parent.worldMatrix.invert(t), i.transformCoordinate(e, t, this._localPosition);
            } else e.cloneTo(this._localPosition);
            this.localPosition = this._localPosition, this._position !== e && e.cloneTo(this._position), 
            this._setTransformFlag(J.TRANSFORM_WORLDPOSITION, !1);
        }
        get rotation() {
            return this._getTransformFlag(J.TRANSFORM_WORLDQUATERNION) && (null != this._parent ? T.multiply(this._parent.rotation, this.localRotation, this._rotation) : this.localRotation.cloneTo(this._rotation), 
            this._setTransformFlag(J.TRANSFORM_WORLDQUATERNION, !1)), this._rotation;
        }
        set rotation(e) {
            null != this._parent ? (this._parent.rotation.invert(J._tempQuaternion0), T.multiply(J._tempQuaternion0, e, this._localRotation)) : e.cloneTo(this._localRotation), 
            this.localRotation = this._localRotation, e !== this._rotation && e.cloneTo(this._rotation), 
            this._setTransformFlag(J.TRANSFORM_WORLDQUATERNION, !1);
        }
        get rotationEuler() {
            if (this._getTransformFlag(J.TRANSFORM_WORLDEULER)) {
                this.rotation.getYawPitchRoll(J._tempVector30);
                var e = J._tempVector30, t = this._rotationEuler;
                t.x = e.y * J._angleToRandin, t.y = e.x * J._angleToRandin, t.z = e.z * J._angleToRandin, 
                this._setTransformFlag(J.TRANSFORM_WORLDEULER, !1);
            }
            return this._rotationEuler;
        }
        set rotationEuler(e) {
            T.createFromYawPitchRoll(e.y / J._angleToRandin, e.x / J._angleToRandin, e.z / J._angleToRandin, this._rotation), 
            this.rotation = this._rotation, this._rotationEuler !== e && e.cloneTo(this._rotationEuler), 
            this._setTransformFlag(J.TRANSFORM_WORLDEULER, !1);
        }
        get worldMatrix() {
            return this._getTransformFlag(J.TRANSFORM_WORLDMATRIX) && (null != this._parent ? b.multiply(this._parent.worldMatrix, this.localMatrix, this._worldMatrix) : this.localMatrix.cloneTo(this._worldMatrix), 
            this._setTransformFlag(J.TRANSFORM_WORLDMATRIX, !1)), this._worldMatrix;
        }
        set worldMatrix(e) {
            null === this._parent ? e.cloneTo(this._localMatrix) : (this._parent.worldMatrix.invert(this._localMatrix), 
            b.multiply(this._localMatrix, e, this._localMatrix)), this.localMatrix = this._localMatrix, 
            this._worldMatrix !== e && e.cloneTo(this._worldMatrix), this._setTransformFlag(J.TRANSFORM_WORLDMATRIX, !1);
        }
        _getScaleMatrix() {
            var e = J._tempQuaternion0, t = J._tempMatrix3x30, r = J._tempMatrix3x31, a = J._tempMatrix3x32;
            return E.createFromMatrix4x4(this.worldMatrix, r), this.rotation.invert(e), E.createRotationQuaternion(e, t), 
            E.multiply(t, r, a), a;
        }
        _setTransformFlag(e, t) {
            t ? this._transformFlag |= e : this._transformFlag &= ~e;
        }
        _getTransformFlag(e) {
            return 0 != (this._transformFlag & e);
        }
        _setParent(e) {
            if (this._parent !== e) {
                if (this._parent) {
                    var t = this._parent._children, r = t.indexOf(this);
                    t.splice(r, 1);
                }
                e && (e._children.push(this), e && this._onWorldTransform()), this._parent = e;
            }
        }
        _onWorldPositionRotationTransform() {
            this._getTransformFlag(J.TRANSFORM_WORLDMATRIX) && this._getTransformFlag(J.TRANSFORM_WORLDPOSITION) && this._getTransformFlag(J.TRANSFORM_WORLDQUATERNION) && this._getTransformFlag(J.TRANSFORM_WORLDEULER) || (this._setTransformFlag(J.TRANSFORM_WORLDMATRIX | J.TRANSFORM_WORLDPOSITION | J.TRANSFORM_WORLDQUATERNION | J.TRANSFORM_WORLDEULER, !0), 
            this.event(t.Event.TRANSFORM_CHANGED, this._transformFlag));
            for (var e = 0, r = this._children.length; e < r; e++) this._children[e]._onWorldPositionRotationTransform();
        }
        _onWorldPositionScaleTransform() {
            this._getTransformFlag(J.TRANSFORM_WORLDMATRIX) && this._getTransformFlag(J.TRANSFORM_WORLDPOSITION) && this._getTransformFlag(J.TRANSFORM_WORLDSCALE) || (this._setTransformFlag(J.TRANSFORM_WORLDMATRIX | J.TRANSFORM_WORLDPOSITION | J.TRANSFORM_WORLDSCALE, !0), 
            this.event(t.Event.TRANSFORM_CHANGED, this._transformFlag));
            for (var e = 0, r = this._children.length; e < r; e++) this._children[e]._onWorldPositionScaleTransform();
        }
        _onWorldPositionTransform() {
            this._getTransformFlag(J.TRANSFORM_WORLDMATRIX) && this._getTransformFlag(J.TRANSFORM_WORLDPOSITION) || (this._setTransformFlag(J.TRANSFORM_WORLDMATRIX | J.TRANSFORM_WORLDPOSITION, !0), 
            this.event(t.Event.TRANSFORM_CHANGED, this._transformFlag));
            for (var e = 0, r = this._children.length; e < r; e++) this._children[e]._onWorldPositionTransform();
        }
        _onWorldRotationTransform() {
            this._getTransformFlag(J.TRANSFORM_WORLDMATRIX) && this._getTransformFlag(J.TRANSFORM_WORLDQUATERNION) && this._getTransformFlag(J.TRANSFORM_WORLDEULER) || (this._setTransformFlag(J.TRANSFORM_WORLDMATRIX | J.TRANSFORM_WORLDQUATERNION | J.TRANSFORM_WORLDEULER, !0), 
            this.event(t.Event.TRANSFORM_CHANGED, this._transformFlag));
            for (var e = 0, r = this._children.length; e < r; e++) this._children[e]._onWorldPositionRotationTransform();
        }
        _onWorldScaleTransform() {
            this._getTransformFlag(J.TRANSFORM_WORLDMATRIX) && this._getTransformFlag(J.TRANSFORM_WORLDSCALE) || (this._setTransformFlag(J.TRANSFORM_WORLDMATRIX | J.TRANSFORM_WORLDSCALE, !0), 
            this.event(t.Event.TRANSFORM_CHANGED, this._transformFlag));
            for (var e = 0, r = this._children.length; e < r; e++) this._children[e]._onWorldPositionScaleTransform();
        }
        _onWorldTransform() {
            this._getTransformFlag(J.TRANSFORM_WORLDMATRIX) && this._getTransformFlag(J.TRANSFORM_WORLDPOSITION) && this._getTransformFlag(J.TRANSFORM_WORLDQUATERNION) && this._getTransformFlag(J.TRANSFORM_WORLDEULER) && this._getTransformFlag(J.TRANSFORM_WORLDSCALE) || (this._setTransformFlag(J.TRANSFORM_WORLDMATRIX | J.TRANSFORM_WORLDPOSITION | J.TRANSFORM_WORLDQUATERNION | J.TRANSFORM_WORLDEULER | J.TRANSFORM_WORLDSCALE, !0), 
            this.event(t.Event.TRANSFORM_CHANGED, this._transformFlag));
            for (var e = 0, r = this._children.length; e < r; e++) this._children[e]._onWorldTransform();
        }
        translate(e, t = !0) {
            t ? (b.createFromQuaternion(this.localRotation, J._tempMatrix0), i.transformCoordinate(e, J._tempMatrix0, J._tempVector30), 
            i.add(this.localPosition, J._tempVector30, this._localPosition), this.localPosition = this._localPosition) : (i.add(this.position, e, this._position), 
            this.position = this._position);
        }
        rotate(e, t = !0, r = !0) {
            var a;
            r ? a = e : (i.scale(e, Math.PI / 180, J._tempVector30), a = J._tempVector30), T.createFromYawPitchRoll(a.y, a.x, a.z, J._tempQuaternion0), 
            t ? (T.multiply(this._localRotation, J._tempQuaternion0, this._localRotation), this.localRotation = this._localRotation) : (T.multiply(J._tempQuaternion0, this.rotation, this._rotation), 
            this.rotation = this._rotation);
        }
        getForward(e) {
            var t = this.worldMatrix.elements;
            e.x = -t[8], e.y = -t[9], e.z = -t[10];
        }
        getUp(e) {
            var t = this.worldMatrix.elements;
            e.x = t[4], e.y = t[5], e.z = t[6];
        }
        getRight(e) {
            var t = this.worldMatrix.elements;
            e.x = t[0], e.y = t[1], e.z = t[2];
        }
        lookAt(e, t, a = !1) {
            var n;
            if (a) {
                if (n = this._localPosition, Math.abs(n.x - e.x) < r.zeroTolerance && Math.abs(n.y - e.y) < r.zeroTolerance && Math.abs(n.z - e.z) < r.zeroTolerance) return;
                T.lookAt(this._localPosition, e, t, this._localRotation), this._localRotation.invert(this._localRotation), 
                this.localRotation = this._localRotation;
            } else {
                var i = this.position;
                if (n = i, Math.abs(n.x - e.x) < r.zeroTolerance && Math.abs(n.y - e.y) < r.zeroTolerance && Math.abs(n.z - e.z) < r.zeroTolerance) return;
                T.lookAt(i, e, t, this._rotation), this._rotation.invert(this._rotation), this.rotation = this._rotation;
            }
        }
        getWorldLossyScale() {
            if (this._getTransformFlag(J.TRANSFORM_WORLDSCALE)) {
                if (null !== this._parent) {
                    var e = this._getScaleMatrix().elements;
                    this._scale.x = e[0], this._scale.y = e[4], this._scale.z = e[8];
                } else this._localScale.cloneTo(this._scale);
                this._setTransformFlag(J.TRANSFORM_WORLDSCALE, !1);
            }
            return this._scale;
        }
        setWorldLossyScale(e) {
            if (null !== this._parent) {
                var t = J._tempMatrix3x33, r = J._tempMatrix3x33, a = r.elements, n = this._parent._getScaleMatrix();
                n.invert(n), E.createFromScaling(e, t), E.multiply(n, t, r), this._localScale.x = a[0], 
                this._localScale.y = a[4], this._localScale.z = a[8];
            } else e.cloneTo(this._localScale);
            this.localScale = this._localScale, this._scale !== e && e.cloneTo(this._scale), 
            this._setTransformFlag(J.TRANSFORM_WORLDSCALE, !1);
        }
        get scale() {
            return console.warn("Transfrm3D: discard function,please use getWorldLossyScale instead."), 
            this.getWorldLossyScale();
        }
        set scale(e) {
            console.warn("Transfrm3D: discard function,please use setWorldLossyScale instead."), 
            this.setWorldLossyScale(e);
        }
    }
    J._tempVector30 = new i(), J._tempQuaternion0 = new T(), J._tempMatrix0 = new b(), 
    J._tempMatrix3x30 = new E(), J._tempMatrix3x31 = new E(), J._tempMatrix3x32 = new E(), 
    J._tempMatrix3x33 = new E(), J.TRANSFORM_LOCALQUATERNION = 1, J.TRANSFORM_LOCALEULER = 2, 
    J.TRANSFORM_LOCALMATRIX = 4, J.TRANSFORM_WORLDPOSITION = 8, J.TRANSFORM_WORLDQUATERNION = 16, 
    J.TRANSFORM_WORLDSCALE = 32, J.TRANSFORM_WORLDMATRIX = 64, J.TRANSFORM_WORLDEULER = 128, 
    J._angleToRandin = 180 / Math.PI;
    class $ extends t.Node {
        constructor(e = null, t = !1) {
            super(), this._needProcessCollisions = !1, this._needProcessTriggers = !1, this._id = ++$._uniqueIDCounter, 
            this._transform = new J(this), this._isStatic = t, this.layer = 0, this.name = e || "New Sprite3D";
        }
        static __init__() {}
        static instantiate(e, t = null, r = !0, a = null, n = null) {
            var i = e.clone();
            t && t.addChild(i);
            var s = i.transform;
            if (r) {
                var o = s.worldMatrix;
                e.transform.worldMatrix.cloneTo(o), s.worldMatrix = o;
            } else a && (s.position = a), n && (s.rotation = n);
            return i;
        }
        static load(e, r) {
            t.Laya.loader.create(e, r, null, $.HIERARCHY);
        }
        get id() {
            return this._id;
        }
        get layer() {
            return this._layer;
        }
        set layer(e) {
            if (this._layer !== e) {
                if (!(e >= 0 && e <= 30)) throw new Error("Layer value must be 0-30.");
                this._layer = e;
            }
        }
        get url() {
            return this._url;
        }
        get isStatic() {
            return this._isStatic;
        }
        get transform() {
            return this._transform;
        }
        _setCreateURL(e) {
            this._url = t.URL.formatURL(e);
        }
        _changeAnimatorsToLinkSprite3D(e, t, r) {
            var a = this.getComponent(O);
            if (a && (a.avatar || e._changeAnimatorToLinkSprite3DNoAvatar(a, t, r)), this._parent && this._parent instanceof $) {
                r.unshift(this._parent.name);
                var n = this._parent;
                n._hierarchyAnimator && n._changeAnimatorsToLinkSprite3D(e, t, r);
            }
        }
        _setHierarchyAnimator(e, t) {
            this._changeHierarchyAnimator(e), this._changeAnimatorAvatar(e.avatar);
            for (var r = 0, a = this._children.length; r < a; r++) {
                var n = this._children[r];
                n._hierarchyAnimator == t && n._setHierarchyAnimator(e, t);
            }
        }
        _clearHierarchyAnimator(e, t) {
            this._changeHierarchyAnimator(t), this._changeAnimatorAvatar(t ? t.avatar : null);
            for (var r = 0, a = this._children.length; r < a; r++) {
                var n = this._children[r];
                n._hierarchyAnimator == e && n._clearHierarchyAnimator(e, t);
            }
        }
        _changeHierarchyAnimatorAvatar(e, t) {
            this._changeAnimatorAvatar(t);
            for (var r = 0, a = this._children.length; r < a; r++) {
                var n = this._children[r];
                n._hierarchyAnimator == e && n._changeHierarchyAnimatorAvatar(e, t);
            }
        }
        _changeAnimatorToLinkSprite3DNoAvatar(e, t, r) {
            e._handleSpriteOwnersBySprite(t, r, this);
            for (var a = 0, n = this._children.length; a < n; a++) {
                var i = this._children[a], s = r.length;
                r.push(i.name), i._changeAnimatorToLinkSprite3DNoAvatar(e, t, r), r.splice(s, 1);
            }
        }
        _changeHierarchyAnimator(e) {
            this._hierarchyAnimator = e;
        }
        _changeAnimatorAvatar(e) {}
        _onInActiveInScene() {
            if (super._onInActiveInScene(), this._scripts) for (let e = 0, t = this._scripts.length; e < t; e++) this.scene._removeScript(this._scripts[e]);
        }
        _onAdded() {
            if (this._parent instanceof $) {
                var e = this._parent;
                this.transform._setParent(e.transform), e._hierarchyAnimator && (!this._hierarchyAnimator && this._setHierarchyAnimator(e._hierarchyAnimator, null), 
                e._changeAnimatorsToLinkSprite3D(this, !0, [ this.name ]));
            }
            super._onAdded();
        }
        _onRemoved() {
            if (super._onRemoved(), this._parent instanceof $) {
                var e = this._parent;
                this.transform._setParent(null), e._hierarchyAnimator && (this._hierarchyAnimator == e._hierarchyAnimator && this._clearHierarchyAnimator(e._hierarchyAnimator, null), 
                e._changeAnimatorsToLinkSprite3D(this, !1, [ this.name ]));
            }
        }
        _parse(e, t) {
            if (void 0 !== e.isStatic && (this._isStatic = e.isStatic), void 0 !== e.active && (this.active = e.active), 
            null != e.name && (this.name = e.name), void 0 !== e.position) {
                var r = this.transform.localPosition;
                r.fromArray(e.position), this.transform.localPosition = r;
            }
            if (void 0 !== e.rotationEuler) {
                var a = this.transform.localRotationEuler;
                a.fromArray(e.rotationEuler), this.transform.localRotationEuler = a;
            }
            if (void 0 !== e.rotation) {
                var n = this.transform.localRotation;
                n.fromArray(e.rotation), this.transform.localRotation = n;
            }
            if (void 0 !== e.scale) {
                var i = this.transform.localScale;
                i.fromArray(e.scale), this.transform.localScale = i;
            }
            null != e.layer && (this.layer = e.layer);
        }
        _cloneTo(e, t, r) {
            if (this.destroyed) throw new Error("Sprite3D: Can't be cloned if the Sprite3D has destroyed.");
            var a = e, n = this._transform, i = a._transform;
            a.name = this.name, a.destroyed = this.destroyed, a.active = this.active, i.localPosition = n.localPosition, 
            i.localRotation = n.localRotation, i.localScale = n.localScale, a._isStatic = this._isStatic, 
            a.layer = this.layer, super._cloneTo(a, t, r);
        }
        static _createSprite3DInstance(e) {
            for (var t = e._create(), r = e._children, a = 0, n = r.length; a < n; a++) {
                var i = $._createSprite3DInstance(r[a]);
                t.addChild(i);
            }
            return t;
        }
        static _parseSprite3DInstance(e, t, r, a) {
            for (var n = r._children, i = a._children, s = 0, o = n.length; s < o; s++) $._parseSprite3DInstance(e, t, n[s], i[s]);
            r._cloneTo(a, e, t);
        }
        clone() {
            var e = $._createSprite3DInstance(this);
            return $._parseSprite3DInstance(this, e, this, e), e;
        }
        destroy(e = !0) {
            this.destroyed || (super.destroy(e), this._transform = null, this._scripts = null, 
            this._url && t.Loader.clearRes(this._url));
        }
        _create() {
            return new $();
        }
    }
    $.HIERARCHY = "HIERARCHY", $.WORLDMATRIX = Z.propertyNameToID("u_WorldMat"), $.MVPMATRIX = Z.propertyNameToID("u_MvpMatrix"), 
    $._uniqueIDCounter = 0;
    class ee extends j {
        constructor() {
            super(), this._projectionViewWorldMatrix = new b(), this._renderShaderValue = new F(), 
            this._renderShaderValue = new F(null);
        }
        static create(e, t, r, a, n, i) {
            var s;
            return (s = ee._pool.length > 0 ? ee._pool.pop() : new ee())._mesh = e, s._matrix = t, 
            s._material = r, s._subMeshIndex = a, s._subShaderIndex = n, s._commandBuffer = i, 
            s;
        }
        run() {
            var e = this._material._shader.getSubShaderAt(this._subShaderIndex);
            this.setContext(this._commandBuffer._context);
            var t = this._context, r = t.invertY, a = t.scene, n = t.cameraShaderValue, i = t.projectionViewMatrix;
            b.multiply(i, this._matrix, this._projectionViewWorldMatrix), this._renderShaderValue.setMatrix4x4($.WORLDMATRIX, this._matrix), 
            this._renderShaderValue.setMatrix4x4($.MVPMATRIX, this._projectionViewWorldMatrix);
            for (var s = t.pipelineMode, o = e._passes, l = 0, h = o.length; l < h; l++) {
                var _ = o[l];
                if (_._pipelineMode === s) {
                    var d = ee._compileDefine;
                    a._shaderValues._defineDatas.cloneTo(d), d.addDefineDatas(this._renderShaderValue._defineDatas), 
                    d.addDefineDatas(this._material._shaderValues._defineDatas);
                    var c = t.shader = _.withCompile(d);
                    c.bind(), c.uploadUniforms(c._sceneUniformParamsMap, a._shaderValues, !0), c.uploadUniforms(c._spriteUniformParamsMap, this._renderShaderValue, !0), 
                    c.uploadUniforms(c._cameraUniformParamsMap, n, !0);
                    var u = this._material._shaderValues;
                    c.uploadUniforms(c._materialUniformParamsMap, u, !0), c.uploadRenderStateBlendDepth(u), 
                    c.uploadRenderStateFrontFace(u, r, this._matrix.getInvertFront());
                }
            }
            var m, f = this._mesh._subMeshes;
            if (-1 == this._subMeshIndex) for (var E = 0, T = f.length; E < T; E++) (m = f[E])._prepareRender(t) && m._render(t); else (m = (f = this._mesh._subMeshes)[this._subMeshIndex])._prepareRender(t) && m._render(t);
        }
        recover() {
            ee._pool.push(this), this._renderShaderValue.clearDefine(), this._renderShaderValue._initData();
        }
    }
    ee._pool = [], ee._compileDefine = new w();
    class te extends j {
        constructor() {
            super(...arguments), this._clearColor = !1, this._clearDepth = !1, this._backgroundColor = new n(), 
            this._depth = 1;
        }
        static create(e, t, r, a = 1, n) {
            var i;
            return (i = te._pool.length > 0 ? te._pool.pop() : new te())._clearColor = e, i._clearDepth = t, 
            r.cloneTo(i._backgroundColor), i._depth = a, i._commandBuffer = n, i;
        }
        run() {
            var e, r = t.LayaGL.instance, a = this._backgroundColor;
            this._clearColor && (r.clearColor(a.x, a.y, a.z, a.w), e |= r.COLOR_BUFFER_BIT), 
            this._clearDepth && (r.clearDepth(this._depth), e |= r.DEPTH_BUFFER_BIT), (this._clearColor || this._clearDepth) && r.clear(e);
        }
        recover() {}
    }
    te._pool = [];
    class re extends j {
        static create(e, t, r, a) {
            var n;
            return (n = re._pool.length > 0 ? re._pool.pop() : new re())._render = e, n._material = t, 
            n._subShaderIndex = r, n._commandBuffer = a, n;
        }
        _elementRender(e, t) {
            var r, a, n, i = t.invertY, s = h.Camera._updateMark, o = t.scene;
            this._render._scene = t.scene;
            var l = t.cameraShaderValue, _ = e._transform, d = e._geometry;
            t.renderElement = e, s !== e.render._updateMark || e.renderType !== e.render._updateRenderType ? (e.render._renderUpdate(t, _), 
            e.render._renderUpdateWithCamera(t, _), e.render._updateMark = s, e.render._updateRenderType = e.renderType) : e.renderType == h.RenderElement.RENDERTYPE_INSTANCEBATCH && (e.render._renderUpdate(t, _), 
            e.render._renderUpdateWithCamera(t, _));
            var c = t.pipelineMode;
            if (d._prepareRender(t)) for (var u = e.renderSubShader._passes, m = 0, f = u.length; m < f; m++) {
                var E = u[m];
                if (E._pipelineMode === c) {
                    var T = re._compileDefine;
                    o._shaderValues._defineDatas.cloneTo(T), T.addDefineDatas(e.render._shaderValues._defineDatas), 
                    T.addDefineDatas(this._material._shaderValues._defineDatas);
                    var p = t.shader = E.withCompile(T), g = p.bind(), S = s !== p._uploadMark, R = p._uploadScene !== o || S;
                    (R || g) && (p.uploadUniforms(p._sceneUniformParamsMap, o._shaderValues, R), p._uploadScene = o);
                    var v = p._uploadRender !== e.render || p._uploadRenderType !== e.renderType || S;
                    (v || g) && (p.uploadUniforms(p._spriteUniformParamsMap, e.render._shaderValues, v), 
                    p._uploadRender = e.render, p._uploadRenderType = e.renderType);
                    var x = p._uploadCameraShaderValue !== l || S;
                    (x || g) && (p.uploadUniforms(p._cameraUniformParamsMap, l, x), p._uploadCameraShaderValue = l);
                    var A = p._uploadMaterial !== this._material || S;
                    (A || g) && (p.uploadUniforms(p._materialUniformParamsMap, this._material._shaderValues, A), 
                    p._uploadMaterial = this._material);
                    var I = this._material._shaderValues;
                    r !== this._material || a !== p ? (p.uploadRenderStateBlendDepth(I), p.uploadRenderStateFrontFace(I, i, e.getInvertFront()), 
                    r = this._material, a = p, n = e.render) : n !== e.render && (p.uploadRenderStateFrontFace(I, i, e.getInvertFront()), 
                    n = e.render), d._render(t), p._uploadMark = s;
                }
            }
            e.renderType !== h.RenderElement.RENDERTYPE_NORMAL && e.render._revertBatchRenderUpdate(t);
        }
        run() {
            if (!this._material) throw "This render command material cannot be empty";
            this.setContext(this._commandBuffer._context);
            for (var e = this._context, t = (e.scene, this._render._renderElements), r = 0, a = t.length; r < a; r++) {
                var n = t[r];
                this._renderElementUpdate(n), this._elementRender(n, e);
            }
        }
        _renderElementUpdate(e) {
            this._material && (e.renderSubShader = this._material._shader.getSubShaderAt(this._subShaderIndex));
        }
        recover() {
            re._pool.push(this);
        }
    }
    re._pool = [], re._compileDefine = new w();
    class ae extends j {
        constructor() {
            super(...arguments), this._nameID = 0, this._value = null, this._dataType = -1;
        }
        static create(e, t, r, a) {
            var n;
            return (n = ae._pool.length > 0 ? ae._pool.pop() : new ae())._nameID = e, n._value = t, 
            n._dataType = r, n._commandBuffer = a, n;
        }
        run() {
            var t = this._commandBuffer._camera.scene._shaderValues;
            switch (this._dataType) {
              case e.ShaderDataType.Int:
                t.setInt(this._nameID, this._value);
                break;

              case e.ShaderDataType.Number:
                t.setNumber(this._nameID, this._value);
                break;

              case e.ShaderDataType.Bool:
                t.setBool(this._nameID, this._value);
                break;

              case e.ShaderDataType.Matrix4x4:
                t.setMatrix4x4(this._nameID, this._value);
                break;

              case e.ShaderDataType.Quaternion:
                t.setQuaternion(this._nameID, this._value);
                break;

              case e.ShaderDataType.Texture:
                t.setTexture(this._nameID, this._value);
                break;

              case e.ShaderDataType.Vector4:
                t.setVector(this._nameID, this._value);
                break;

              case e.ShaderDataType.Vector2:
                t.setVector2(this._nameID, this._value);
                break;

              case e.ShaderDataType.Vector3:
                t.setVector3(this._nameID, this._value);
                break;

              case e.ShaderDataType.Buffer:
                t.setBuffer(this._nameID, this._value);
                break;

              default:
                throw "no type shaderValue on this CommendBuffer";
            }
        }
        recover() {
            ae._pool.push(this), this._nameID = 0, this._value = null, this._dataType = -1;
        }
    }
    ae._pool = [];
    class ne {}
    class ie {
        static __init__() {
            ie.instanceWorldMatrixDeclaration = new U(64, [ new H(0, B.Vector4, ie.MESH_WORLDMATRIX_ROW0), new H(16, B.Vector4, ie.MESH_WORLDMATRIX_ROW1), new H(32, B.Vector4, ie.MESH_WORLDMATRIX_ROW2), new H(48, B.Vector4, ie.MESH_WORLDMATRIX_ROW3) ]), 
            ie.instanceSimpleAnimatorDeclaration = new U(16, [ new H(0, B.Vector4, ie.MESH_SIMPLEANIMATOR) ]);
        }
        static getVertexDeclaration(e, t = !0) {
            var r = ie._vertexDeclarationMap[e + (t ? "_0" : "_1")];
            if (!r) {
                for (var a = e.split(","), n = 0, i = [], s = 0, o = a.length; s < o; s++) {
                    var l;
                    switch (a[s]) {
                      case "POSITION":
                        l = new H(n, B.Vector3, ie.MESH_POSITION0), n += 12;
                        break;

                      case "NORMAL":
                        l = new H(n, B.Vector3, ie.MESH_NORMAL0), n += 12;
                        break;

                      case "COLOR":
                        l = new H(n, B.Vector4, ie.MESH_COLOR0), n += 16;
                        break;

                      case "UV":
                        l = new H(n, B.Vector2, ie.MESH_TEXTURECOORDINATE0), n += 8;
                        break;

                      case "UV1":
                        l = new H(n, B.Vector2, ie.MESH_TEXTURECOORDINATE1), n += 8;
                        break;

                      case "BLENDWEIGHT":
                        l = new H(n, B.Vector4, ie.MESH_BLENDWEIGHT0), n += 16;
                        break;

                      case "BLENDINDICES":
                        t ? (l = new H(n, B.Vector4, ie.MESH_BLENDINDICES0), n += 16) : (l = new H(n, B.Byte4, ie.MESH_BLENDINDICES0), 
                        n += 4);
                        break;

                      case "TANGENT":
                        l = new H(n, B.Vector4, ie.MESH_TANGENT0), n += 16;
                        break;

                      default:
                        throw "VertexMesh: unknown vertex flag.";
                    }
                    i.push(l);
                }
                r = new U(n, i), ie._vertexDeclarationMap[e + (t ? "_0" : "_1")] = r;
            }
            return r;
        }
    }
    ie.MESH_POSITION0 = 0, ie.MESH_COLOR0 = 1, ie.MESH_TEXTURECOORDINATE0 = 2, ie.MESH_NORMAL0 = 3, 
    ie.MESH_TANGENT0 = 4, ie.MESH_BLENDINDICES0 = 5, ie.MESH_BLENDWEIGHT0 = 6, ie.MESH_TEXTURECOORDINATE1 = 7, 
    ie.MESH_WORLDMATRIX_ROW0 = 8, ie.MESH_WORLDMATRIX_ROW1 = 9, ie.MESH_WORLDMATRIX_ROW2 = 10, 
    ie.MESH_WORLDMATRIX_ROW3 = 11, ie.MESH_SIMPLEANIMATOR = 12, ie.MESH_CUSTOME0 = 12, 
    ie.MESH_CUSTOME1 = 13, ie.MESH_CUSTOME2 = 14, ie.MESH_CUSTOME3 = 15, ie._vertexDeclarationMap = {};
    class se extends j {
        constructor() {
            super(), this._renderShaderValue = new F(null);
            let e = t.LayaGL.instance;
            this._instanceWorldMatrixData = new Float32Array(16 * se.maxInstanceCount), this._instanceWorldMatrixBuffer = new V(4 * this._instanceWorldMatrixData.length, e.DYNAMIC_DRAW), 
            this._instanceWorldMatrixBuffer.vertexDeclaration = ie.instanceWorldMatrixDeclaration;
        }
        static create(e, t, r, a, n, i, s, o) {
            var l;
            if (r && r.length > 1024 || s > se.maxInstanceCount) throw "the number of renderings exceeds the maximum number of merges";
            return (l = se._pool.length > 0 ? se._pool.pop() : new se())._mesh = e, l._matrixs = r, 
            l._material = a, l._subMeshIndex = t, l._subShaderIndex = n, l._commandBuffer = o, 
            l._instanceProperty = i, l._drawnums = s, r || l._updateWorldMatrixBuffer(), l._setInstanceBuffer(), 
            l;
        }
        _setInstanceBuffer() {
            let e = this._instanceBufferState = new G();
            e.bind(), e.applyVertexBuffer(this._mesh._vertexBuffer), e.applyInstanceVertexBuffer(this._instanceWorldMatrixBuffer);
            let t = this._instanceProperty._propertyMap;
            for (let r in t) e.applyInstanceVertexBuffer(t[r]._vertexBuffer);
            e.applyIndexBuffer(this._mesh._indexBuffer), e.unBind();
        }
        _updateWorldMatrixBuffer() {
            let e = this._instanceWorldMatrixData, t = this._drawnums;
            for (let r = 0; r < t; r++) e.set(this._matrixs[r].elements, 16 * r);
            let r = this._instanceWorldMatrixBuffer;
            r.orphanStorage(), r.setData(e.buffer, 0, 0, 64 * t);
        }
        _render(e) {
            let r = t.LayaGL.instance;
            var a = this._drawnums, n = e._indexCount;
            this._instanceBufferState.bind(), t.LayaGL.layaGPUInstance.drawElementsInstanced(r.TRIANGLES, n, r.UNSIGNED_SHORT, 2 * e._indexStart, a), 
            t.Stat.renderBatches++, t.Stat.trianglesFaces += n * a / 3;
        }
        run() {
            let e = this._material._shader.getSubShaderAt(this._subShaderIndex);
            this.setContext(this._commandBuffer._context);
            let t = this._context, r = t.invertY, a = t.scene, n = t.cameraShaderValue, i = t.pipelineMode;
            this._renderShaderValue.addDefine(ne.SHADERDEFINE_GPU_INSTANCE);
            let s = e._passes;
            for (let e = 0, o = s.length; e < o; e++) {
                let o = s[e];
                if (o._pipelineMode !== i) continue;
                let l = se._compileDefine;
                a._shaderValues._defineDatas.cloneTo(l), l.addDefineDatas(this._renderShaderValue._defineDatas), 
                l.addDefineDatas(this._material._shaderValues._defineDatas);
                let h = t.shader = o.withCompile(l);
                h.bind(), h.uploadUniforms(h._sceneUniformParamsMap, a._shaderValues, !0), h.uploadUniforms(h._spriteUniformParamsMap, this._renderShaderValue, !0), 
                h.uploadUniforms(h._cameraUniformParamsMap, n, !0);
                let _ = this._material._shaderValues;
                h.uploadUniforms(h._materialUniformParamsMap, _, !0), h.uploadRenderStateBlendDepth(_), 
                h.uploadRenderStateFrontFace(_, r, !1);
            }
            let o = this._instanceProperty._propertyMap;
            for (let e in o) o[e].updateVertexBufferData(this._drawnums);
            let l, h = this._mesh._subMeshes;
            if (-1 == this._subMeshIndex) for (let e = 0, r = h.length; e < r; e++) (l = h[e])._prepareRender(t) && this._render(l); else {
                (l = this._mesh._subMeshes[this._subMeshIndex])._prepareRender(t) && this._render(l);
            }
        }
        setWorldMatrix(e) {
            if (e.length < this._drawnums) throw "worldMatrixArray length is less then drawnums";
            this._matrixs = e, this._matrixs && this._updateWorldMatrixBuffer();
        }
        setDrawNums(e) {
            if (this._matrixs && this._matrixs.length < e) throw "worldMatrixArray length is less then drawnums";
            this._drawnums = e, this._matrixs && this._updateWorldMatrixBuffer();
        }
        recover() {
            se._pool.push(this), this._renderShaderValue.clearDefine(), this._renderShaderValue._initData(), 
            this._instanceBufferState.destroy(), this._instanceBufferState = null;
        }
    }
    se._pool = [], se._compileDefine = new w(), se.maxInstanceCount = 1024;
    class oe {
        constructor() {
            this._camera = null, this._commands = [];
        }
        _apply() {
            for (var e = 0, t = this._commands.length; e < t; e++) this._commands[e].run();
        }
        setShaderDataTexture(t, r, a) {
            this._commands.push(K.create(t, r, a, e.ShaderDataType.Texture, this));
        }
        setGlobalTexture(t, r) {
            this._commands.push(ae.create(t, r, e.ShaderDataType.Texture, this));
        }
        setShaderDataVector(t, r, a) {
            this._commands.push(K.create(t, r, a, e.ShaderDataType.Vector4, this));
        }
        setGlobalVector(t, r) {
            this._commands.push(ae.create(t, r, e.ShaderDataType.Vector4, this));
        }
        setShaderDataVector3(t, r, a) {
            this._commands.push(K.create(t, r, a, e.ShaderDataType.Vector3, this));
        }
        setGlobalVector3(t, r) {
            this._commands.push(ae.create(t, r, e.ShaderDataType.Vector3, this));
        }
        setShaderDataVector2(t, r, a) {
            this._commands.push(K.create(t, r, a, e.ShaderDataType.Vector2, this));
        }
        setGlobalVector2(t, r) {
            this._commands.push(ae.create(t, r, e.ShaderDataType.Vector2, this));
        }
        setShaderDataNumber(t, r, a) {
            this._commands.push(K.create(t, r, a, e.ShaderDataType.Number, this));
        }
        setGlobalNumber(t, r) {
            this._commands.push(ae.create(t, r, e.ShaderDataType.Number, this));
        }
        setShaderDataInt(t, r, a) {
            this._commands.push(K.create(t, r, a, e.ShaderDataType.Int, this));
        }
        setGlobalInt(t, r) {
            this._commands.push(ae.create(t, r, e.ShaderDataType.Int, this));
        }
        setShaderDataMatrix(t, r, a) {
            this._commands.push(K.create(t, r, a, e.ShaderDataType.Matrix4x4, this));
        }
        setGlobalMatrix(t, r) {
            this._commands.push(ae.create(t, r, e.ShaderDataType.Matrix4x4, this));
        }
        blitScreenQuad(e, t, r = null, a = null, n = null, i = 0, s = !1) {
            this._commands.push(q.create(e, t, r, a, n, i, q._SCREENTYPE_QUAD, this, s));
        }
        blitScreenQuadByMaterial(e, t, r = null, a = null, n = 0) {
            var i, s;
            a && (i = a._shader, s = a.shaderData), this._commands.push(q.create(e, t, r, i, s, n, q._SCREENTYPE_QUAD, this));
        }
        blitScreenTriangle(e, t, r = null, a = null, n = null, i = 0, s = !1) {
            this._commands.push(q.create(e, t, r, a, n, i, q._SCREENTYPE_TRIANGLE, this, s));
        }
        setRenderTarget(e) {
            this._commands.push(Q.create(e));
        }
        clearRenderTarget(e, t, r, a = 1) {
            this._commands.push(te.create(e, t, r, a, this));
        }
        drawMesh(e, t, r, a, n) {
            this._commands.push(ee.create(e, t, r, a, n, this));
        }
        drawRender(e, t, r) {
            this._commands.push(re.create(e, t, r, this));
        }
        drawMeshInstance(e, r, a, n, i, s, o) {
            if (!t.LayaGL.layaGPUInstance.supportInstance()) return null;
            var l = se.create(e, r, a, n, i, s, o, this);
            return this._commands.push(l), l;
        }
        clear() {
            for (var e = 0, t = this._commands.length; e < t; e++) this._commands[e].recover();
            this._commands.length = 0;
        }
    }
    class le {
        constructor() {
            this.source = null, this.destination = null, this.camera = null, this.compositeShaderData = null, 
            this.command = null, this.deferredReleaseTextures = [];
        }
    }
    class he {
        constructor() {
            this._compositeShader = Z.find("PostProcessComposite"), this._compositeShaderData = new F(), 
            this._effects = [], this._enable = !0, this._context = null, this._context = new le(), 
            this._context.compositeShaderData = this._compositeShaderData, this._context.command = new oe();
        }
        static __init__() {
            he.SHADERDEFINE_BLOOM_LOW = Z.getDefineByName("BLOOM_LOW"), he.SHADERDEFINE_BLOOM = Z.getDefineByName("BLOOM"), 
            he.SHADERDEFINE_FINALPASS = Z.getDefineByName("FINALPASS");
        }
        get enable() {
            return this._enable;
        }
        set enable(e) {
            this._enable = e;
        }
        _init(e) {
            this._context.camera = e, this._context.command._camera = e;
        }
        _render() {
            var e = F._SET_RUNTIME_VALUE_MODE_REFERENCE_;
            t.ILaya.Render.supportWebGLPlusRendering && F.setRuntimeValueMode(!1);
            var r = this._context.camera, a = r.viewport, n = r._internalRenderTexture, i = n;
            this._context.command.clear(), this._context.source = i, this._context.destination = n, 
            this._context.compositeShaderData.clearDefine(), this._context.compositeShaderData.setTexture(he.SHADERVALUE_AUTOEXPOSURETEX, t.Texture2D.whiteTexture);
            for (var s = 0, o = this._effects.length; s < o; s++) this._effects[s].render(this._context);
            this._compositeShaderData.addDefine(he.SHADERDEFINE_FINALPASS);
            var l = r._offScreenRenderTexture, h = l || null;
            this._context.destination = h;
            var _ = r._getCanvasWidth(), d = r._getCanvasHeight();
            r._screenOffsetScale.setValue(a.x / _, a.y / d, a.width / _, a.height / d), this._context.command.blitScreenTriangle(this._context.source, h, r._screenOffsetScale, this._compositeShader, this._compositeShaderData, 0, !0), 
            P.recoverToPool(i);
            var c = this._context.deferredReleaseTextures;
            for (s = 0, o = c.length; s < o; s++) P.recoverToPool(c[s]);
            c.length = 0, t.ILaya.Render.supportWebGLPlusRendering && F.setRuntimeValueMode(e);
        }
        addEffect(e) {
            this._effects.push(e);
        }
        removeEffect(e) {
            var t = this._effects.indexOf(e);
            -1 !== t && this._effects.splice(t, 1);
        }
        _applyPostProcessCommandBuffers() {
            this._context.command._apply();
        }
    }
    he.SHADERVALUE_MAINTEX = Z.propertyNameToID("u_MainTex"), he.SHADERVALUE_BLOOMTEX = Z.propertyNameToID("u_BloomTex"), 
    he.SHADERVALUE_AUTOEXPOSURETEX = Z.propertyNameToID("u_AutoExposureTex"), he.SHADERVALUE_BLOOM_DIRTTEX = Z.propertyNameToID("u_Bloom_DirtTex"), 
    he.SHADERVALUE_BLOOMTEX_TEXELSIZE = Z.propertyNameToID("u_BloomTex_TexelSize"), 
    he.SHADERVALUE_BLOOM_DIRTTILEOFFSET = Z.propertyNameToID("u_Bloom_DirtTileOffset"), 
    he.SHADERVALUE_BLOOM_SETTINGS = Z.propertyNameToID("u_Bloom_Settings"), he.SHADERVALUE_BLOOM_COLOR = Z.propertyNameToID("u_Bloom_Color");
    class _e extends t.EventDispatcher {
        constructor(e) {
            super(), this._owner = e, this._children = [], this._localMatrix = new Float32Array(16), 
            this._localPosition = new i(), this._localRotation = new T(), this._localScale = new i(), 
            this._worldMatrix = new Float32Array(16), this._localQuaternionUpdate = !1, this._locaEulerlUpdate = !1, 
            this._localUpdate = !1, this._worldUpdate = !0;
        }
        _getlocalMatrix() {
            return this._localUpdate && (A._createAffineTransformationArray(this._localPosition, this._localRotation, this._localScale, this._localMatrix), 
            this._localUpdate = !1), this._localMatrix;
        }
        _onWorldTransform() {
            if (!this._worldUpdate) {
                this._worldUpdate = !0, this.event(t.Event.TRANSFORM_CHANGED);
                for (var e = 0, r = this._children.length; e < r; e++) this._children[e]._onWorldTransform();
            }
        }
        get localPosition() {
            return this._localPosition;
        }
        set localPosition(e) {
            this._localPosition = e, this._localUpdate = !0, this._onWorldTransform();
        }
        get localRotation() {
            if (this._localQuaternionUpdate) {
                var e = this._localRotationEuler;
                T.createFromYawPitchRoll(e.y / _e._angleToRandin, e.x / _e._angleToRandin, e.z / _e._angleToRandin, this._localRotation), 
                this._localQuaternionUpdate = !1;
            }
            return this._localRotation;
        }
        set localRotation(e) {
            this._localRotation = e, this._locaEulerlUpdate = !0, this._localQuaternionUpdate = !1, 
            this._localUpdate = !0, this._onWorldTransform();
        }
        get localScale() {
            return this._localScale;
        }
        set localScale(e) {
            this._localScale = e, this._localUpdate = !0, this._onWorldTransform();
        }
        get localRotationEuler() {
            if (this._locaEulerlUpdate) {
                this._localRotation.getYawPitchRoll(_e._tempVector3);
                var e = _e._tempVector3, t = this._localRotationEuler;
                t.x = e.y * _e._angleToRandin, t.y = e.x * _e._angleToRandin, t.z = e.z * _e._angleToRandin, 
                this._locaEulerlUpdate = !1;
            }
            return this._localRotationEuler;
        }
        set localRotationEuler(e) {
            this._localRotationEuler = e, this._locaEulerlUpdate = !1, this._localQuaternionUpdate = !0, 
            this._localUpdate = !0, this._onWorldTransform();
        }
        getWorldMatrix() {
            if (this._worldUpdate) {
                if (null != this._parent) A.matrix4x4MultiplyFFF(this._parent.getWorldMatrix(), this._getlocalMatrix(), this._worldMatrix); else {
                    var e = this._worldMatrix;
                    e[1] = e[2] = e[3] = e[4] = e[6] = e[7] = e[8] = e[9] = e[11] = e[12] = e[13] = e[14] = 0, 
                    e[0] = e[5] = e[10] = e[15] = 1;
                }
                this._worldUpdate = !1;
            }
            return this._worldMatrix;
        }
        setParent(e) {
            if (this._parent !== e) {
                if (this._parent) {
                    var t = this._parent._children, r = t.indexOf(this);
                    t.splice(r, 1);
                }
                e && (e._children.push(this), e && this._onWorldTransform()), this._parent = e;
            }
        }
    }
    _e._tempVector3 = new i(), _e._angleToRandin = 180 / Math.PI;
    class de {
        constructor() {
            this._parent = null, this.name = null, this._worldMatrixIndex = 0, this._children = [], 
            this.transform = new _e(this);
        }
        addChild(e) {
            e._parent = this, e.transform.setParent(this.transform), this._children.push(e);
        }
        removeChild(e) {
            var t = this._children.indexOf(e);
            -1 !== t && this._children.splice(t, 1);
        }
        getChildByName(e) {
            for (var t = 0, r = this._children.length; t < r; t++) {
                var a = this._children[t];
                if (a.name === e) return a;
            }
            return null;
        }
        getChildByIndex(e) {
            return this._children[e];
        }
        getChildCount() {
            return this._children.length;
        }
        cloneTo(e) {
            var t = e;
            t.name = this.name;
            for (var r = 0, a = this._children.length; r < a; r++) {
                var n = this._children[r], i = n.clone();
                t.addChild(i);
                var s = n.transform, o = i.transform, l = o.localPosition, h = o.localRotation, _ = o.localScale;
                s.localPosition.cloneTo(l), s.localRotation.cloneTo(h), s.localScale.cloneTo(_), 
                o.localPosition = l, o.localRotation = h, o.localScale = _;
            }
        }
        clone() {
            var e = new de();
            return this.cloneTo(e), e;
        }
        _cloneNative(e, t, r, a, n, i, s) {
            var o = s._nativeCurCloneCount;
            n[o] = i;
            var l = new de();
            return l._worldMatrixIndex = o, this._cloneToNative(l, e, t, r, a, n, o, s), l;
        }
        _cloneToNative(e, t, r, a, n, i, s, o) {
            var l = e;
            l.name = this.name;
            for (var h = 0, _ = this._children.length; h < _; h++) {
                var d = this._children[h];
                o._nativeCurCloneCount++;
                var c = d._cloneNative(t, r, a, n, i, s, o);
                l.addChild(c);
                var u = d.transform, m = c.transform, f = m.localPosition, E = m.localRotation, T = m.localScale;
                u.localPosition.cloneTo(f), u.localRotation.cloneTo(E), u.localScale.cloneTo(T), 
                m.localPosition = f, m.localRotation = E, m.localScale = T;
            }
        }
    }
    class ce extends t.Resource {
        constructor() {
            super(), this._nativeNodeCount = 0, this._nativeCurCloneCount = 0;
        }
        static _parse(e, t = null, r = null) {
            var a = new ce();
            if (a._rootNode = new de(), e.version) {
                var n = e.rootNode;
                n && a._parseNode(n, a._rootNode);
            }
            return a;
        }
        static load(e, r) {
            t.ILaya.loader.create(e, r, null, ce.AVATAR);
        }
        _initCloneToAnimator(e, t) {
            t._avatarNodeMap[e.name] = e;
            for (var r = 0, a = e.getChildCount(); r < a; r++) this._initCloneToAnimator(e.getChildByIndex(r), t);
        }
        _parseNode(e, t) {
            var r = e.props.name;
            t.name = r;
            var a = e.props, n = t.transform, i = n.localPosition, s = n.localRotation, o = n.localScale;
            i.fromArray(a.translate), s.fromArray(a.rotation), o.fromArray(a.scale), n.localPosition = i, 
            n.localRotation = s, n.localScale = o;
            for (var l = e.child, h = 0, _ = l.length; h < _; h++) {
                var d = l[h], c = new de();
                t.addChild(c), this._parseNode(d, c);
            }
        }
        _cloneDatasToAnimator(e) {
            var t;
            t = this._rootNode.clone();
            var r = this._rootNode.transform, a = t.transform, n = a.localPosition, i = a.localRotation, s = a.localScale;
            r.localPosition.cloneTo(n), r.localRotation.cloneTo(i), r.localScale.cloneTo(s), 
            a.localPosition = n, a.localRotation = i, a.localScale = s, e._avatarNodeMap = {}, 
            this._initCloneToAnimator(t, e);
        }
        cloneTo(e) {
            var t = e, r = this._rootNode.clone();
            t._rootNode = r;
        }
        clone() {
            var e = new ce();
            return this.cloneTo(e), e;
        }
        _cloneDatasToAnimatorNative(e) {
            var t = new Float32Array(3 * this._nativeNodeCount), r = new Float32Array(4 * this._nativeNodeCount), a = new Float32Array(3 * this._nativeNodeCount), n = new Float32Array(16 * this._nativeNodeCount), i = new Int16Array(this._nativeNodeCount);
            e._animationNodeLocalPositions = t, e._animationNodeLocalRotations = r, e._animationNodeLocalScales = a, 
            e._animationNodeWorldMatrixs = n, e._animationNodeParentIndices = i, this._nativeCurCloneCount = 0;
            var s = this._rootNode._cloneNative(t, r, a, n, i, -1, this), o = this._rootNode.transform, l = s.transform, h = l.localPosition, _ = l.localRotation, d = l.localScale;
            o.localPosition.cloneTo(h), o.localRotation.cloneTo(_), o.localScale.cloneTo(d), 
            l.localPosition = h, l.localRotation = _, l.localScale = d, e._avatarNodeMap = {}, 
            this._initCloneToAnimator(s, e);
        }
    }
    ce.AVATAR = "AVATAR";
    class ue extends t.Resource {
        constructor() {
            super(), this._shaderValues = new F(this), this.renderQueue = ue.RENDERQUEUE_OPAQUE, 
            this.alphaTest = !1;
        }
        static load(e, r) {
            t.Laya.loader.create(e, r, null, ue.MATERIAL);
        }
        static __initDefine__() {
            ue.SHADERDEFINE_ALPHATEST = Z.getDefineByName("ALPHATEST");
        }
        static _parse(e, r = null, s = null) {
            var o, l = e, h = l.props, _ = h.type, d = t.ClassUtils.getRegClass(_);
            switch (d ? o = new d() : (o = new ue()).setShaderName(_), l.version) {
              case "LAYAMATERIAL:01":
              case "LAYAMATERIAL:02":
                for (var c in h) switch (c) {
                  case "type":
                    break;

                  case "vectors":
                    var u = h[c];
                    for (p = 0, g = u.length; p < g; p++) {
                        var m = u[p];
                        switch ((A = m.value).length) {
                          case 2:
                            o[m.name] = new a(A[0], A[1]);
                            break;

                          case 3:
                            o[m.name] = new i(A[0], A[1], A[2]);
                            break;

                          case 4:
                            o[m.name] = new n(A[0], A[1], A[2], A[3]);
                            break;

                          default:
                            throw new Error("BaseMaterial:unkonwn color length.");
                        }
                    }
                    break;

                  case "textures":
                    for (p = 0, g = (R = h[c]).length; p < g; p++) {
                        (x = (v = R[p]).path) && (o[v.name] = t.Loader.getRes(x));
                    }
                    break;

                  case "defines":
                    for (p = 0, g = (S = h[c]).length; p < g; p++) {
                        var f = Z.getDefineByName(S[p]);
                        o._shaderValues.addDefine(f);
                    }
                    break;

                  case "renderStates":
                    var E = h[c][0], T = o;
                    T.blend = E.blend, T.cull = E.cull, T.depthTest = E.depthTest, T.depthWrite = E.depthWrite, 
                    T.blendSrc = E.srcBlend, T.blendDst = E.dstBlend;
                    break;

                  case "cull":
                    o.cull = h[c];
                    break;

                  case "blend":
                    o.blend = h[c];
                    break;

                  case "depthWrite":
                    o.depthWrite = h[c];
                    break;

                  case "srcBlend":
                    o.blendSrc = h[c];
                    break;

                  case "dstBlend":
                    o.blendDst = h[c];
                    break;

                  default:
                    o[c] = h[c];
                }
                break;

              case "LAYAMATERIAL:03":
                var p, g;
                for (var c in h) switch (c) {
                  case "type":
                  case "name":
                    break;

                  case "defines":
                    var S;
                    for (p = 0, g = (S = h[c]).length; p < g; p++) {
                        f = Z.getDefineByName(S[p]);
                        o._shaderValues.addDefine(f);
                    }
                    break;

                  case "textures":
                    var R;
                    for (p = 0, g = (R = h[c]).length; p < g; p++) {
                        var v, x;
                        (x = (v = R[p]).path) && o._shaderValues.setTexture(Z.propertyNameToID(v.name), t.Loader.getRes(x));
                    }
                    break;

                  default:
                    var A, I = h[c], M = Z.propertyNameToID(c);
                    if (I.length) switch ((A = I).length) {
                      case 2:
                        o._shaderValues.setVector2(M, new a(A[0], A[1]));
                        break;

                      case 3:
                        o._shaderValues.setVector3(M, new i(A[0], A[1], A[2]));
                        break;

                      case 4:
                        o._shaderValues.setVector(M, new n(A[0], A[1], A[2], A[3]));
                        break;

                      default:
                        throw new Error("BaseMaterial:unkonwn color length.");
                    } else o._shaderValues.setNumber(M, h[c]);
                }
                break;

              default:
                throw new Error("BaseMaterial:unkonwn version.");
            }
            return o;
        }
        get shaderData() {
            return this._shaderValues;
        }
        get alphaTestValue() {
            return this._shaderValues.getNumber(ue.ALPHATESTVALUE);
        }
        set alphaTestValue(e) {
            this._shaderValues.setNumber(ue.ALPHATESTVALUE, e);
        }
        get alphaTest() {
            return this.shaderData.hasDefine(ue.SHADERDEFINE_ALPHATEST);
        }
        set alphaTest(e) {
            e ? this._shaderValues.addDefine(ue.SHADERDEFINE_ALPHATEST) : this._shaderValues.removeDefine(ue.SHADERDEFINE_ALPHATEST);
        }
        get depthWrite() {
            return this._shaderValues.getBool(ue.DEPTH_WRITE);
        }
        set depthWrite(e) {
            this._shaderValues.setBool(ue.DEPTH_WRITE, e);
        }
        get cull() {
            return this._shaderValues.getInt(ue.CULL);
        }
        set cull(e) {
            this._shaderValues.setInt(ue.CULL, e);
        }
        get blend() {
            return this._shaderValues.getInt(ue.BLEND);
        }
        set blend(e) {
            this._shaderValues.setInt(ue.BLEND, e);
        }
        get blendSrc() {
            return this._shaderValues.getInt(ue.BLEND_SRC);
        }
        set blendSrc(e) {
            this._shaderValues.setInt(ue.BLEND_SRC, e);
        }
        get blendDst() {
            return this._shaderValues.getInt(ue.BLEND_DST);
        }
        set blendDst(e) {
            this._shaderValues.setInt(ue.BLEND_DST, e);
        }
        get depthTest() {
            return this._shaderValues.getInt(ue.DEPTH_TEST);
        }
        set depthTest(e) {
            this._shaderValues.setInt(ue.DEPTH_TEST, e);
        }
        get MaterialProperty() {
            let e = {};
            var t = this._shaderValues.getData();
            for (let r in t) e[Z._propertyNameMap[parseInt(r)]] = t[r];
            return e;
        }
        get MaterialDefine() {
            let e = new Array(), t = this._shaderValues._defineDatas;
            return Z._getNamesByDefineData(t, e), e;
        }
        _removeTetxureReference() {
            var e = this._shaderValues.getData();
            for (var r in e) {
                var a = e[r];
                a && a instanceof t.BaseTexture && a._removeReference();
            }
        }
        _disposeResource() {
            this._referenceCount > 0 && this._removeTetxureReference(), this._shaderValues = null;
        }
        _addReference(e = 1) {
            super._addReference(e);
            var r = this._shaderValues.getData();
            for (var a in r) {
                var n = r[a];
                n && n instanceof t.BaseTexture && n._addReference();
            }
        }
        _removeReference(e = 1) {
            super._removeReference(e), this._removeTetxureReference();
        }
        setShaderName(e) {
            if (this._shader = Z.find(e), !this._shader) throw new Error("BaseMaterial: unknown shader name.");
        }
        setShaderPropertyValue(e, t) {
            this.shaderData.setValueData(Z.propertyNameToID(e), t);
        }
        getShaderPropertyValue(e) {
            return this.shaderData.getValueData(Z.propertyNameToID(e));
        }
        cloneTo(e) {
            var t = e;
            t.name = this.name, t.renderQueue = this.renderQueue, this._shaderValues.cloneTo(t._shaderValues);
        }
        clone() {
            var e = new ue();
            return this.cloneTo(e), e;
        }
        get _defineDatas() {
            return this._shaderValues._defineDatas;
        }
    }
    ue.MATERIAL = "MATERIAL", ue.RENDERQUEUE_OPAQUE = 2e3, ue.RENDERQUEUE_ALPHATEST = 2450, 
    ue.RENDERQUEUE_TRANSPARENT = 3e3, ue.ALPHATESTVALUE = Z.propertyNameToID("u_AlphaTestValue"), 
    ue.CULL = Z.propertyNameToID("s_Cull"), ue.BLEND = Z.propertyNameToID("s_Blend"), 
    ue.BLEND_SRC = Z.propertyNameToID("s_BlendSrc"), ue.BLEND_DST = Z.propertyNameToID("s_BlendDst"), 
    ue.DEPTH_TEST = Z.propertyNameToID("s_DepthTest"), ue.DEPTH_WRITE = Z.propertyNameToID("s_DepthWrite");
    class me {
        static load(e, r) {
            t.Laya.loader.create(e, r, null, ue.MATERIAL);
        }
        static __initDefine__() {
            me.SHADERDEFINE_ALPHATEST = ue.SHADERDEFINE_ALPHATEST;
        }
    }
    me.MATERIAL = "MATERIAL", me.RENDERQUEUE_OPAQUE = 2e3, me.RENDERQUEUE_ALPHATEST = 2450, 
    me.RENDERQUEUE_TRANSPARENT = 3e3, me.ALPHATESTVALUE = Z.propertyNameToID("u_AlphaTestValue");
    class fe {
        constructor() {
            this.cull = fe.CULL_BACK, this.blend = fe.BLEND_DISABLE, this.srcBlend = fe.BLENDPARAM_ONE, 
            this.dstBlend = fe.BLENDPARAM_ZERO, this.srcBlendRGB = fe.BLENDPARAM_ONE, this.dstBlendRGB = fe.BLENDPARAM_ZERO, 
            this.srcBlendAlpha = fe.BLENDPARAM_ONE, this.dstBlendAlpha = fe.BLENDPARAM_ZERO, 
            this.blendConstColor = new n(1, 1, 1, 1), this.blendEquation = fe.BLENDEQUATION_ADD, 
            this.blendEquationRGB = fe.BLENDEQUATION_ADD, this.blendEquationAlpha = fe.BLENDEQUATION_ADD, 
            this.depthTest = fe.DEPTHTEST_LEQUAL, this.depthWrite = !0;
        }
        cloneTo(e) {
            var t = e;
            t.cull = this.cull, t.blend = this.blend, t.srcBlend = this.srcBlend, t.dstBlend = this.dstBlend, 
            t.srcBlendRGB = this.srcBlendRGB, t.dstBlendRGB = this.dstBlendRGB, t.srcBlendAlpha = this.srcBlendAlpha, 
            t.dstBlendAlpha = this.dstBlendAlpha, this.blendConstColor.cloneTo(t.blendConstColor), 
            t.blendEquation = this.blendEquation, t.blendEquationRGB = this.blendEquationRGB, 
            t.blendEquationAlpha = this.blendEquationAlpha, t.depthTest = this.depthTest, t.depthWrite = this.depthWrite;
        }
        clone() {
            var e = new fe();
            return this.cloneTo(e), e;
        }
    }
    fe.CULL_NONE = 0, fe.CULL_FRONT = 1, fe.CULL_BACK = 2, fe.BLEND_DISABLE = 0, fe.BLEND_ENABLE_ALL = 1, 
    fe.BLEND_ENABLE_SEPERATE = 2, fe.BLENDPARAM_ZERO = 0, fe.BLENDPARAM_ONE = 1, fe.BLENDPARAM_SRC_COLOR = 768, 
    fe.BLENDPARAM_ONE_MINUS_SRC_COLOR = 769, fe.BLENDPARAM_DST_COLOR = 774, fe.BLENDPARAM_ONE_MINUS_DST_COLOR = 775, 
    fe.BLENDPARAM_SRC_ALPHA = 770, fe.BLENDPARAM_ONE_MINUS_SRC_ALPHA = 771, fe.BLENDPARAM_DST_ALPHA = 772, 
    fe.BLENDPARAM_ONE_MINUS_DST_ALPHA = 773, fe.BLENDPARAM_SRC_ALPHA_SATURATE = 776, 
    fe.BLENDEQUATION_ADD = 32774, fe.BLENDEQUATION_SUBTRACT = 32778, fe.BLENDEQUATION_REVERSE_SUBTRACT = 32779, 
    fe.DEPTHTEST_OFF = 0, fe.DEPTHTEST_NEVER = 512, fe.DEPTHTEST_LESS = 513, fe.DEPTHTEST_EQUAL = 514, 
    fe.DEPTHTEST_LEQUAL = 515, fe.DEPTHTEST_GREATER = 516, fe.DEPTHTEST_NOTEQUAL = 517, 
    fe.DEPTHTEST_GEQUAL = 518, fe.DEPTHTEST_ALWAYS = 519;
    class Ee extends ue {
        constructor() {
            super(), this.setShaderName("BLINNPHONG"), this.albedoIntensity = 1;
            var e = this._shaderValues;
            e.setVector(Ee.ALBEDOCOLOR, new n(1, 1, 1, 1)), e.setVector(Ee.MATERIALSPECULAR, new n(1, 1, 1, 1)), 
            e.setNumber(Ee.SHININESS, .078125), e.setNumber(ue.ALPHATESTVALUE, .5), e.setVector(Ee.TILINGOFFSET, new n(1, 1, 0, 0)), 
            this.albedoIntensity = 1, this.renderMode = Ee.RENDERMODE_OPAQUE;
        }
        static __initDefine__() {
            Ee.SHADERDEFINE_DIFFUSEMAP = Z.getDefineByName("DIFFUSEMAP"), Ee.SHADERDEFINE_NORMALMAP = Z.getDefineByName("NORMALMAP"), 
            Ee.SHADERDEFINE_SPECULARMAP = Z.getDefineByName("SPECULARMAP"), Ee.SHADERDEFINE_ENABLEVERTEXCOLOR = Z.getDefineByName("ENABLEVERTEXCOLOR"), 
            Ee.SHADERDEFINE_ENABLETRANSMISSION = Z.getDefineByName("ENABLETRANSMISSION"), Ee.SHADERDEFINE_THICKNESSMAP = Z.getDefineByName("THICKNESSMAP");
        }
        get _ColorR() {
            return this.albedoColor.x;
        }
        set _ColorR(e) {
            let t = this.albedoColor;
            t.x = e, this.albedoColor = t;
        }
        get _ColorG() {
            return this.albedoColor.y;
        }
        set _ColorG(e) {
            let t = this.albedoColor;
            t.y = e, this.albedoColor = t;
        }
        get _ColorB() {
            return this.albedoColor.z;
        }
        set _ColorB(e) {
            let t = this.albedoColor;
            t.z = e, this.albedoColor = t;
        }
        get _ColorA() {
            return this.albedoColor.w;
        }
        set _ColorA(e) {
            let t = this.albedoColor;
            t.w = e, this.albedoColor = t;
        }
        get _Color() {
            return this._shaderValues.getVector(Ee.ALBEDOCOLOR);
        }
        set _Color(e) {
            this.albedoColor = e;
        }
        get _SpecColorR() {
            return this._shaderValues.getVector(Ee.MATERIALSPECULAR).x;
        }
        set _SpecColorR(e) {
            this._shaderValues.getVector(Ee.MATERIALSPECULAR).x = e;
        }
        get _SpecColorG() {
            return this._shaderValues.getVector(Ee.MATERIALSPECULAR).y;
        }
        set _SpecColorG(e) {
            this._shaderValues.getVector(Ee.MATERIALSPECULAR).y = e;
        }
        get _SpecColorB() {
            return this._shaderValues.getVector(Ee.MATERIALSPECULAR).z;
        }
        set _SpecColorB(e) {
            this._shaderValues.getVector(Ee.MATERIALSPECULAR).z = e;
        }
        get _SpecColorA() {
            return this._shaderValues.getVector(Ee.MATERIALSPECULAR).w;
        }
        set _SpecColorA(e) {
            this._shaderValues.getVector(Ee.MATERIALSPECULAR).w = e;
        }
        get _SpecColor() {
            return this._shaderValues.getVector(Ee.MATERIALSPECULAR);
        }
        set _SpecColor(e) {
            this.specularColor = e;
        }
        get _Shininess() {
            return this._shaderValues.getNumber(Ee.SHININESS);
        }
        set _Shininess(e) {
            e = Math.max(0, Math.min(1, e)), this._shaderValues.setNumber(Ee.SHININESS, e);
        }
        get _MainTex_STX() {
            return this._shaderValues.getVector(Ee.TILINGOFFSET).x;
        }
        set _MainTex_STX(e) {
            var t = this._shaderValues.getVector(Ee.TILINGOFFSET);
            t.x = e, this.tilingOffset = t;
        }
        get _MainTex_STY() {
            return this._shaderValues.getVector(Ee.TILINGOFFSET).y;
        }
        set _MainTex_STY(e) {
            var t = this._shaderValues.getVector(Ee.TILINGOFFSET);
            t.y = e, this.tilingOffset = t;
        }
        get _MainTex_STZ() {
            return this._shaderValues.getVector(Ee.TILINGOFFSET).z;
        }
        set _MainTex_STZ(e) {
            var t = this._shaderValues.getVector(Ee.TILINGOFFSET);
            t.z = e, this.tilingOffset = t;
        }
        get _MainTex_STW() {
            return this._shaderValues.getVector(Ee.TILINGOFFSET).w;
        }
        set _MainTex_STW(e) {
            var t = this._shaderValues.getVector(Ee.TILINGOFFSET);
            t.w = e, this.tilingOffset = t;
        }
        get _MainTex_ST() {
            return this._shaderValues.getVector(Ee.TILINGOFFSET);
        }
        set _MainTex_ST(e) {
            this.tilingOffset = e;
        }
        get _Cutoff() {
            return this.alphaTestValue;
        }
        set _Cutoff(e) {
            this.alphaTestValue = e;
        }
        set renderMode(e) {
            switch (e) {
              case Ee.RENDERMODE_OPAQUE:
                this.alphaTest = !1, this.renderQueue = ue.RENDERQUEUE_OPAQUE, this.depthWrite = !0, 
                this.cull = fe.CULL_BACK, this.blend = fe.BLEND_DISABLE, this.depthTest = fe.DEPTHTEST_LESS;
                break;

              case Ee.RENDERMODE_CUTOUT:
                this.renderQueue = ue.RENDERQUEUE_ALPHATEST, this.alphaTest = !0, this.depthWrite = !0, 
                this.cull = fe.CULL_BACK, this.blend = fe.BLEND_DISABLE, this.depthTest = fe.DEPTHTEST_LESS;
                break;

              case Ee.RENDERMODE_TRANSPARENT:
                this.renderQueue = ue.RENDERQUEUE_TRANSPARENT, this.alphaTest = !1, this.depthWrite = !1, 
                this.cull = fe.CULL_BACK, this.blend = fe.BLEND_ENABLE_ALL, this.blendSrc = fe.BLENDPARAM_SRC_ALPHA, 
                this.blendDst = fe.BLENDPARAM_ONE_MINUS_SRC_ALPHA, this.depthTest = fe.DEPTHTEST_LESS;
                break;

              default:
                throw new Error("Material:renderMode value error.");
            }
        }
        get enableVertexColor() {
            return this._shaderValues.hasDefine(Ee.SHADERDEFINE_ENABLEVERTEXCOLOR);
        }
        set enableVertexColor(e) {
            e ? this._shaderValues.addDefine(Ee.SHADERDEFINE_ENABLEVERTEXCOLOR) : this._shaderValues.removeDefine(Ee.SHADERDEFINE_ENABLEVERTEXCOLOR);
        }
        get tilingOffsetX() {
            return this._MainTex_STX;
        }
        set tilingOffsetX(e) {
            this._MainTex_STX = e;
        }
        get tilingOffsetY() {
            return this._MainTex_STY;
        }
        set tilingOffsetY(e) {
            this._MainTex_STY = e;
        }
        get tilingOffsetZ() {
            return this._MainTex_STZ;
        }
        set tilingOffsetZ(e) {
            this._MainTex_STZ = e;
        }
        get tilingOffsetW() {
            return this._MainTex_STW;
        }
        set tilingOffsetW(e) {
            this._MainTex_STW = e;
        }
        get tilingOffset() {
            return this._shaderValues.getVector(Ee.TILINGOFFSET);
        }
        set tilingOffset(e) {
            e ? this._shaderValues.setVector(Ee.TILINGOFFSET, e) : this._shaderValues.getVector(Ee.TILINGOFFSET).setValue(1, 1, 0, 0);
        }
        get albedoColorR() {
            return this._ColorR;
        }
        set albedoColorR(e) {
            this._ColorR = e;
        }
        get albedoColorG() {
            return this._ColorG;
        }
        set albedoColorG(e) {
            this._ColorG = e;
        }
        get albedoColorB() {
            return this._ColorB;
        }
        set albedoColorB(e) {
            this._ColorB = e;
        }
        get albedoColorA() {
            return this._ColorA;
        }
        set albedoColorA(e) {
            this._ColorA = e;
        }
        get albedoColor() {
            return this._shaderValues.getVector(Ee.ALBEDOCOLOR);
        }
        set albedoColor(e) {
            this._shaderValues.setVector(Ee.ALBEDOCOLOR, e);
        }
        get albedoIntensity() {
            return this._shaderValues.getNumber(Ee.AlbedoIntensity);
        }
        set albedoIntensity(e) {
            this._shaderValues.setNumber(Ee.AlbedoIntensity, e);
        }
        get specularColorR() {
            return this._SpecColorR;
        }
        set specularColorR(e) {
            this._SpecColorR = e;
        }
        get specularColorG() {
            return this._SpecColorG;
        }
        set specularColorG(e) {
            this._SpecColorG = e;
        }
        get specularColorB() {
            return this._SpecColorB;
        }
        set specularColorB(e) {
            this._SpecColorB = e;
        }
        get specularColorA() {
            return this._SpecColorA;
        }
        set specularColorA(e) {
            this._SpecColorA = e;
        }
        get specularColor() {
            return this._shaderValues.getVector(Ee.MATERIALSPECULAR);
        }
        set specularColor(e) {
            this._shaderValues.setVector(Ee.MATERIALSPECULAR, e);
        }
        get shininess() {
            return this._Shininess;
        }
        set shininess(e) {
            this._Shininess = e;
        }
        get albedoTexture() {
            return this._shaderValues.getTexture(Ee.ALBEDOTEXTURE);
        }
        set albedoTexture(e) {
            e ? this._shaderValues.addDefine(Ee.SHADERDEFINE_DIFFUSEMAP) : this._shaderValues.removeDefine(Ee.SHADERDEFINE_DIFFUSEMAP), 
            this._shaderValues.setTexture(Ee.ALBEDOTEXTURE, e);
        }
        get normalTexture() {
            return this._shaderValues.getTexture(Ee.NORMALTEXTURE);
        }
        set normalTexture(e) {
            e ? this._shaderValues.addDefine(Ee.SHADERDEFINE_NORMALMAP) : this._shaderValues.removeDefine(Ee.SHADERDEFINE_NORMALMAP), 
            this._shaderValues.setTexture(Ee.NORMALTEXTURE, e);
        }
        get specularTexture() {
            return this._shaderValues.getTexture(Ee.SPECULARTEXTURE);
        }
        set specularTexture(e) {
            e ? this._shaderValues.addDefine(Ee.SHADERDEFINE_SPECULARMAP) : this._shaderValues.removeDefine(Ee.SHADERDEFINE_SPECULARMAP), 
            this._shaderValues.setTexture(Ee.SPECULARTEXTURE, e);
        }
        get enableTransmission() {
            return this._shaderValues.hasDefine(Ee.SHADERDEFINE_ENABLETRANSMISSION);
        }
        set enableTransmission(e) {
            e ? this._shaderValues.addDefine(Ee.SHADERDEFINE_ENABLETRANSMISSION) : this._shaderValues.removeDefine(Ee.SHADERDEFINE_ENABLETRANSMISSION);
        }
        get transmissionRate() {
            return this._shaderValues.getNumber(Ee.TRANSMISSIONRATE);
        }
        set transmissionRata(e) {
            this._shaderValues.setNumber(Ee.TRANSMISSIONRATE, e);
        }
        get backDiffuse() {
            return this._shaderValues.getNumber(Ee.IBACKDIFFUSE);
        }
        set backDiffuse(e) {
            this._shaderValues.setNumber(Ee.IBACKDIFFUSE, Math.max(e, 1));
        }
        get backScale() {
            return this._shaderValues.getNumber(Ee.IBACKSCALE);
        }
        set backScale(e) {
            this._shaderValues.setNumber(Ee.IBACKSCALE, e);
        }
        get thinknessTexture() {
            return this._shaderValues.getTexture(Ee.THINKNESSTEXTURE);
        }
        set thinknessTexture(e) {
            e ? this._shaderValues.addDefine(Ee.SHADERDEFINE_THICKNESSMAP) : this._shaderValues.removeDefine(Ee.SHADERDEFINE_THICKNESSMAP), 
            this._shaderValues.setTexture(Ee.THINKNESSTEXTURE, e);
        }
        get transmissionColor() {
            return this._shaderValues.getVector(Ee.TRANSMISSIONCOLOR);
        }
        set transmissionColor(e) {
            this._shaderValues.setVector(Ee.TRANSMISSIONCOLOR, e);
        }
        clone() {
            var e = new Ee();
            return this.cloneTo(e), e;
        }
        cloneTo(e) {
            super.cloneTo(e);
            var t = e;
            t.albedoIntensity = this.albedoIntensity, t.enableVertexColor = this.enableVertexColor, 
            this.albedoColor.cloneTo(t.albedoColor);
        }
    }
    Ee.RENDERMODE_OPAQUE = 0, Ee.RENDERMODE_CUTOUT = 1, Ee.RENDERMODE_TRANSPARENT = 2, 
    Ee.ALBEDOTEXTURE = Z.propertyNameToID("u_DiffuseTexture"), Ee.NORMALTEXTURE = Z.propertyNameToID("u_NormalTexture"), 
    Ee.SPECULARTEXTURE = Z.propertyNameToID("u_SpecularTexture"), Ee.ALBEDOCOLOR = Z.propertyNameToID("u_DiffuseColor"), 
    Ee.MATERIALSPECULAR = Z.propertyNameToID("u_MaterialSpecular"), Ee.SHININESS = Z.propertyNameToID("u_Shininess"), 
    Ee.TILINGOFFSET = Z.propertyNameToID("u_TilingOffset"), Ee.TRANSMISSIONRATE = Z.propertyNameToID("u_TransmissionRate"), 
    Ee.IBACKDIFFUSE = Z.propertyNameToID("u_BackDiffuse"), Ee.IBACKSCALE = Z.propertyNameToID("u_BackScale"), 
    Ee.THINKNESSTEXTURE = Z.propertyNameToID("u_ThinknessTexture"), Ee.TRANSMISSIONCOLOR = Z.propertyNameToID("u_TransmissionColor"), 
    Ee.AlbedoIntensity = Z.propertyNameToID("u_AlbedoIntensity");
    class Te extends ue {
        constructor() {
            super(), this.setShaderName("Effect"), this._shaderValues.setVector(Te.TILINGOFFSET, new n(1, 1, 0, 0)), 
            this._shaderValues.setVector(Te.TINTCOLOR, new n(1, 1, 1, 1)), this.renderMode = Te.RENDERMODE_ADDTIVE;
        }
        static __initDefine__() {
            Te.SHADERDEFINE_MAINTEXTURE = Z.getDefineByName("MAINTEXTURE"), Te.SHADERDEFINE_ADDTIVEFOG = Z.getDefineByName("ADDTIVEFOG");
        }
        get _TintColorR() {
            return this.color.x;
        }
        set _TintColorR(e) {
            let t = this.color;
            t.x = e, this.color = t;
        }
        get _TintColorG() {
            return this.color.y;
        }
        set _TintColorG(e) {
            let t = this.color;
            t.y = e, this.color = t;
        }
        get _TintColorB() {
            return this.color.z;
        }
        set _TintColorB(e) {
            let t = this.color;
            t.z = e, this.color = t;
        }
        get _TintColorA() {
            return this.color.w;
        }
        set _TintColorA(e) {
            let t = this.color;
            t.w = e, this.color = t;
        }
        get _TintColor() {
            return this._shaderValues.getVector(Te.TINTCOLOR);
        }
        set _TintColor(e) {
            this.color = e;
        }
        get _MainTex_STX() {
            return this._shaderValues.getVector(Te.TILINGOFFSET).x;
        }
        set _MainTex_STX(e) {
            var t = this._shaderValues.getVector(Te.TILINGOFFSET);
            t.x = e, this.tilingOffset = t;
        }
        get _MainTex_STY() {
            return this._shaderValues.getVector(Te.TILINGOFFSET).y;
        }
        set _MainTex_STY(e) {
            var t = this._shaderValues.getVector(Te.TILINGOFFSET);
            t.y = e, this.tilingOffset = t;
        }
        get _MainTex_STZ() {
            return this._shaderValues.getVector(Te.TILINGOFFSET).z;
        }
        set _MainTex_STZ(e) {
            var t = this._shaderValues.getVector(Te.TILINGOFFSET);
            t.z = e, this.tilingOffset = t;
        }
        get _MainTex_STW() {
            return this._shaderValues.getVector(Te.TILINGOFFSET).w;
        }
        set _MainTex_STW(e) {
            var t = this._shaderValues.getVector(Te.TILINGOFFSET);
            t.w = e, this.tilingOffset = t;
        }
        get _MainTex_ST() {
            return this._shaderValues.getVector(Te.TILINGOFFSET);
        }
        set _MainTex_ST(e) {
            this.tilingOffset = e;
        }
        set renderMode(e) {
            switch (e) {
              case Te.RENDERMODE_ADDTIVE:
                this.renderQueue = ue.RENDERQUEUE_TRANSPARENT, this.alphaTest = !1, this.depthWrite = !1, 
                this.cull = fe.CULL_NONE, this.blend = fe.BLEND_ENABLE_ALL, this.blendSrc = fe.BLENDPARAM_SRC_ALPHA, 
                this.blendDst = fe.BLENDPARAM_ONE, this.depthTest = fe.DEPTHTEST_LESS, this._shaderValues.addDefine(Te.SHADERDEFINE_ADDTIVEFOG);
                break;

              case Te.RENDERMODE_ALPHABLENDED:
                this.renderQueue = ue.RENDERQUEUE_TRANSPARENT, this.alphaTest = !1, this.depthWrite = !1, 
                this.cull = fe.CULL_NONE, this.blend = fe.BLEND_ENABLE_ALL, this.blendSrc = fe.BLENDPARAM_SRC_ALPHA, 
                this.blendDst = fe.BLENDPARAM_ONE_MINUS_SRC_ALPHA, this.depthTest = fe.DEPTHTEST_LESS, 
                this._shaderValues.removeDefine(Te.SHADERDEFINE_ADDTIVEFOG);
                break;

              default:
                throw new Error("MeshEffectMaterial : renderMode value error.");
            }
        }
        get colorR() {
            return this._TintColorR;
        }
        set colorR(e) {
            this._TintColorR = e;
        }
        get colorG() {
            return this._TintColorG;
        }
        set colorG(e) {
            this._TintColorG = e;
        }
        get colorB() {
            return this._TintColorB;
        }
        set colorB(e) {
            this._TintColorB = e;
        }
        get colorA() {
            return this._TintColorA;
        }
        set colorA(e) {
            this._TintColorA = e;
        }
        get color() {
            return this._shaderValues.getVector(Te.TINTCOLOR);
        }
        set color(e) {
            this._shaderValues.setVector(Te.TINTCOLOR, e);
        }
        get texture() {
            return this._shaderValues.getTexture(Te.MAINTEXTURE);
        }
        set texture(e) {
            e ? this._shaderValues.addDefine(Te.SHADERDEFINE_MAINTEXTURE) : this._shaderValues.removeDefine(Te.SHADERDEFINE_MAINTEXTURE), 
            this._shaderValues.setTexture(Te.MAINTEXTURE, e);
        }
        get tilingOffsetX() {
            return this._MainTex_STX;
        }
        set tilingOffsetX(e) {
            this._MainTex_STX = e;
        }
        get tilingOffsetY() {
            return this._MainTex_STY;
        }
        set tilingOffsetY(e) {
            this._MainTex_STY = e;
        }
        get tilingOffsetZ() {
            return this._MainTex_STZ;
        }
        set tilingOffsetZ(e) {
            this._MainTex_STZ = e;
        }
        get tilingOffsetW() {
            return this._MainTex_STW;
        }
        set tilingOffsetW(e) {
            this._MainTex_STW = e;
        }
        get tilingOffset() {
            return this._shaderValues.getVector(Te.TILINGOFFSET);
        }
        set tilingOffset(e) {
            e ? this._shaderValues.setVector(Te.TILINGOFFSET, e) : this._shaderValues.getVector(Te.TILINGOFFSET).setValue(1, 1, 0, 0);
        }
        clone() {
            var e = new Te();
            return this.cloneTo(e), e;
        }
    }
    Te.RENDERMODE_ADDTIVE = 0, Te.RENDERMODE_ALPHABLENDED = 1, Te.MAINTEXTURE = Z.propertyNameToID("u_AlbedoTexture"), 
    Te.TINTCOLOR = Z.propertyNameToID("u_AlbedoColor"), Te.TILINGOFFSET = Z.propertyNameToID("u_TilingOffset");
    class pe extends ue {
        constructor() {
            super(), this.setShaderName("ExtendTerrain"), this.renderMode = pe.RENDERMODE_OPAQUE;
        }
        static __initDefine__() {
            pe.SHADERDEFINE_DETAIL_NUM1 = Z.getDefineByName("ExtendTerrain_DETAIL_NUM1"), pe.SHADERDEFINE_DETAIL_NUM2 = Z.getDefineByName("ExtendTerrain_DETAIL_NUM2"), 
            pe.SHADERDEFINE_DETAIL_NUM3 = Z.getDefineByName("ExtendTerrain_DETAIL_NUM3"), pe.SHADERDEFINE_DETAIL_NUM4 = Z.getDefineByName("ExtendTerrain_DETAIL_NUM4"), 
            pe.SHADERDEFINE_DETAIL_NUM5 = Z.getDefineByName("ExtendTerrain_DETAIL_NUM5");
        }
        get splatAlphaTexture() {
            return this._shaderValues.getTexture(pe.SPLATALPHATEXTURE);
        }
        set splatAlphaTexture(e) {
            this._shaderValues.setTexture(pe.SPLATALPHATEXTURE, e);
        }
        get diffuseTexture1() {
            return this._shaderValues.getTexture(pe.DIFFUSETEXTURE1);
        }
        set diffuseTexture1(e) {
            this._shaderValues.setTexture(pe.DIFFUSETEXTURE1, e), this._setDetailNum(1);
        }
        get diffuseTexture2() {
            return this._shaderValues.getTexture(pe.DIFFUSETEXTURE2);
        }
        set diffuseTexture2(e) {
            this._shaderValues.setTexture(pe.DIFFUSETEXTURE2, e), this._setDetailNum(2);
        }
        get diffuseTexture3() {
            return this._shaderValues.getTexture(pe.DIFFUSETEXTURE3);
        }
        set diffuseTexture3(e) {
            this._shaderValues.setTexture(pe.DIFFUSETEXTURE3, e), this._setDetailNum(3);
        }
        get diffuseTexture4() {
            return this._shaderValues.getTexture(pe.DIFFUSETEXTURE4);
        }
        set diffuseTexture4(e) {
            this._shaderValues.setTexture(pe.DIFFUSETEXTURE4, e), this._setDetailNum(4);
        }
        get diffuseTexture5() {
            return this._shaderValues.getTexture(pe.DIFFUSETEXTURE5);
        }
        set diffuseTexture5(e) {
            this._shaderValues.setTexture(pe.DIFFUSETEXTURE5, e), this._setDetailNum(5);
        }
        set diffuseScaleOffset1(e) {
            this._shaderValues.setVector(pe.DIFFUSESCALEOFFSET1, e);
        }
        set diffuseScaleOffset2(e) {
            this._shaderValues.setVector(pe.DIFFUSESCALEOFFSET2, e);
        }
        set diffuseScaleOffset3(e) {
            this._shaderValues.setVector(pe.DIFFUSESCALEOFFSET3, e);
        }
        set diffuseScaleOffset4(e) {
            this._shaderValues.setVector(pe.DIFFUSESCALEOFFSET4, e);
        }
        set diffuseScaleOffset5(e) {
            this._shaderValues.setVector(pe.DIFFUSESCALEOFFSET5, e);
        }
        set renderMode(e) {
            switch (e) {
              case pe.RENDERMODE_OPAQUE:
                this.renderQueue = ue.RENDERQUEUE_OPAQUE, this.depthWrite = !0, this.cull = fe.CULL_BACK, 
                this.blend = fe.BLEND_DISABLE, this.depthTest = fe.DEPTHTEST_LESS;
                break;

              case pe.RENDERMODE_TRANSPARENT:
                this.renderQueue = ue.RENDERQUEUE_OPAQUE, this.depthWrite = !1, this.cull = fe.CULL_BACK, 
                this.blend = fe.BLEND_ENABLE_ALL, this.blendSrc = fe.BLENDPARAM_SRC_ALPHA, this.blendDst = fe.BLENDPARAM_ONE_MINUS_SRC_ALPHA, 
                this.depthTest = fe.DEPTHTEST_LEQUAL;
                break;

              default:
                throw new Error("ExtendTerrainMaterial:renderMode value error.");
            }
        }
        _setDetailNum(e) {
            switch (e) {
              case 1:
                this._shaderValues.addDefine(pe.SHADERDEFINE_DETAIL_NUM1), this._shaderValues.removeDefine(pe.SHADERDEFINE_DETAIL_NUM2), 
                this._shaderValues.removeDefine(pe.SHADERDEFINE_DETAIL_NUM3), this._shaderValues.removeDefine(pe.SHADERDEFINE_DETAIL_NUM4), 
                this._shaderValues.removeDefine(pe.SHADERDEFINE_DETAIL_NUM5);
                break;

              case 2:
                this._shaderValues.addDefine(pe.SHADERDEFINE_DETAIL_NUM2), this._shaderValues.removeDefine(pe.SHADERDEFINE_DETAIL_NUM1), 
                this._shaderValues.removeDefine(pe.SHADERDEFINE_DETAIL_NUM3), this._shaderValues.removeDefine(pe.SHADERDEFINE_DETAIL_NUM4), 
                this._shaderValues.removeDefine(pe.SHADERDEFINE_DETAIL_NUM5);
                break;

              case 3:
                this._shaderValues.addDefine(pe.SHADERDEFINE_DETAIL_NUM3), this._shaderValues.removeDefine(pe.SHADERDEFINE_DETAIL_NUM1), 
                this._shaderValues.removeDefine(pe.SHADERDEFINE_DETAIL_NUM2), this._shaderValues.removeDefine(pe.SHADERDEFINE_DETAIL_NUM4), 
                this._shaderValues.removeDefine(pe.SHADERDEFINE_DETAIL_NUM5);
                break;

              case 4:
                this._shaderValues.addDefine(pe.SHADERDEFINE_DETAIL_NUM4), this._shaderValues.removeDefine(pe.SHADERDEFINE_DETAIL_NUM1), 
                this._shaderValues.removeDefine(pe.SHADERDEFINE_DETAIL_NUM2), this._shaderValues.removeDefine(pe.SHADERDEFINE_DETAIL_NUM3), 
                this._shaderValues.removeDefine(pe.SHADERDEFINE_DETAIL_NUM5);
                break;

              case 5:
                this._shaderValues.addDefine(pe.SHADERDEFINE_DETAIL_NUM5), this._shaderValues.removeDefine(pe.SHADERDEFINE_DETAIL_NUM1), 
                this._shaderValues.removeDefine(pe.SHADERDEFINE_DETAIL_NUM2), this._shaderValues.removeDefine(pe.SHADERDEFINE_DETAIL_NUM3), 
                this._shaderValues.removeDefine(pe.SHADERDEFINE_DETAIL_NUM4);
            }
        }
        clone() {
            var e = new pe();
            return this.cloneTo(e), e;
        }
    }
    pe.RENDERMODE_OPAQUE = 1, pe.RENDERMODE_TRANSPARENT = 2, pe.SPLATALPHATEXTURE = Z.propertyNameToID("u_SplatAlphaTexture"), 
    pe.DIFFUSETEXTURE1 = Z.propertyNameToID("u_DiffuseTexture1"), pe.DIFFUSETEXTURE2 = Z.propertyNameToID("u_DiffuseTexture2"), 
    pe.DIFFUSETEXTURE3 = Z.propertyNameToID("u_DiffuseTexture3"), pe.DIFFUSETEXTURE4 = Z.propertyNameToID("u_DiffuseTexture4"), 
    pe.DIFFUSETEXTURE5 = Z.propertyNameToID("u_DiffuseTexture5"), pe.DIFFUSESCALEOFFSET1 = Z.propertyNameToID("u_DiffuseScaleOffset1"), 
    pe.DIFFUSESCALEOFFSET2 = Z.propertyNameToID("u_DiffuseScaleOffset2"), pe.DIFFUSESCALEOFFSET3 = Z.propertyNameToID("u_DiffuseScaleOffset3"), 
    pe.DIFFUSESCALEOFFSET4 = Z.propertyNameToID("u_DiffuseScaleOffset4"), pe.DIFFUSESCALEOFFSET5 = Z.propertyNameToID("u_DiffuseScaleOffset5"), 
    (l = e.PBRRenderMode || (e.PBRRenderMode = {}))[l.Opaque = 0] = "Opaque", l[l.Cutout = 1] = "Cutout", 
    l[l.Fade = 2] = "Fade", l[l.Transparent = 3] = "Transparent";
    class ge extends ue {
        constructor() {
            super(), this._shaderValues.setVector(ge.ALBEDOCOLOR, new n(1, 1, 1, 1)), this._shaderValues.setVector(ge.EMISSIONCOLOR, new n(1, 1, 1, 1)), 
            this._shaderValues.setVector(ge.TILINGOFFSET, new n(1, 1, 0, 0)), this._shaderValues.setNumber(ge.SMOOTHNESS, .5), 
            this._shaderValues.setNumber(ge.SMOOTHNESSSCALE, 1), this._shaderValues.setNumber(ge.OCCLUSIONSTRENGTH, 1), 
            this._shaderValues.setNumber(ge.NORMALSCALE, 1), this._shaderValues.setNumber(ge.PARALLAXSCALE, .001), 
            this._shaderValues.setNumber(ue.ALPHATESTVALUE, .5), this.renderMode = e.PBRRenderMode.Opaque;
        }
        static __init__() {
            ge.SHADERDEFINE_ALBEDOTEXTURE = Z.getDefineByName("ALBEDOTEXTURE"), ge.SHADERDEFINE_NORMALTEXTURE = Z.getDefineByName("NORMALTEXTURE"), 
            ge.SHADERDEFINE_PARALLAXTEXTURE = Z.getDefineByName("PARALLAXTEXTURE"), ge.SHADERDEFINE_OCCLUSIONTEXTURE = Z.getDefineByName("OCCLUSIONTEXTURE"), 
            ge.SHADERDEFINE_EMISSION = Z.getDefineByName("EMISSION"), ge.SHADERDEFINE_EMISSIONTEXTURE = Z.getDefineByName("EMISSIONTEXTURE"), 
            ge.SHADERDEFINE_TRANSPARENTBLEND = Z.getDefineByName("TRANSPARENTBLEND"), ge.SHADERDEFINE_LAYA_PBR_BRDF_HIGH = Z.getDefineByName("LAYA_PBR_BRDF_HIGH"), 
            ge.SHADERDEFINE_LAYA_PBR_BRDF_LOW = Z.getDefineByName("LAYA_PBR_BRDF_LOW");
        }
        get albedoColor() {
            return this._shaderValues.getVector(ge.ALBEDOCOLOR);
        }
        set albedoColor(e) {
            this._shaderValues.setVector(ge.ALBEDOCOLOR, e);
        }
        get albedoTexture() {
            return this._shaderValues.getTexture(ge.ALBEDOTEXTURE);
        }
        set albedoTexture(e) {
            e ? this._shaderValues.addDefine(ge.SHADERDEFINE_ALBEDOTEXTURE) : this._shaderValues.removeDefine(ge.SHADERDEFINE_ALBEDOTEXTURE), 
            this._shaderValues.setTexture(ge.ALBEDOTEXTURE, e);
        }
        get normalTexture() {
            return this._shaderValues.getTexture(ge.NORMALTEXTURE);
        }
        set normalTexture(e) {
            e ? this._shaderValues.addDefine(ge.SHADERDEFINE_NORMALTEXTURE) : this._shaderValues.removeDefine(ge.SHADERDEFINE_NORMALTEXTURE), 
            this._shaderValues.setTexture(ge.NORMALTEXTURE, e);
        }
        get normalTextureScale() {
            return this._shaderValues.getNumber(ge.NORMALSCALE);
        }
        set normalTextureScale(e) {
            this._shaderValues.setNumber(ge.NORMALSCALE, e);
        }
        get parallaxTexture() {
            return this._shaderValues.getTexture(ge.PARALLAXTEXTURE);
        }
        set parallaxTexture(e) {
            e ? this._shaderValues.addDefine(ge.SHADERDEFINE_PARALLAXTEXTURE) : this._shaderValues.removeDefine(ge.SHADERDEFINE_PARALLAXTEXTURE), 
            this._shaderValues.setTexture(ge.PARALLAXTEXTURE, e);
        }
        get parallaxTextureScale() {
            return this._shaderValues.getNumber(ge.PARALLAXSCALE);
        }
        set parallaxTextureScale(e) {
            this._shaderValues.setNumber(ge.PARALLAXSCALE, Math.max(.005, Math.min(.08, e)));
        }
        get occlusionTexture() {
            return this._shaderValues.getTexture(ge.OCCLUSIONTEXTURE);
        }
        set occlusionTexture(e) {
            e ? this._shaderValues.addDefine(ge.SHADERDEFINE_OCCLUSIONTEXTURE) : this._shaderValues.removeDefine(ge.SHADERDEFINE_OCCLUSIONTEXTURE), 
            this._shaderValues.setTexture(ge.OCCLUSIONTEXTURE, e);
        }
        get occlusionTextureStrength() {
            return this._shaderValues.getNumber(ge.OCCLUSIONSTRENGTH);
        }
        set occlusionTextureStrength(e) {
            this._shaderValues.setNumber(ge.OCCLUSIONSTRENGTH, Math.max(0, Math.min(1, e)));
        }
        get smoothness() {
            return this._shaderValues.getNumber(ge.SMOOTHNESS);
        }
        set smoothness(e) {
            this._shaderValues.setNumber(ge.SMOOTHNESS, Math.max(0, Math.min(1, e)));
        }
        get smoothnessTextureScale() {
            return this._shaderValues.getNumber(ge.SMOOTHNESSSCALE);
        }
        set smoothnessTextureScale(e) {
            this._shaderValues.setNumber(ge.SMOOTHNESSSCALE, Math.max(0, Math.min(1, e)));
        }
        get enableEmission() {
            return this._shaderValues.hasDefine(ge.SHADERDEFINE_EMISSION);
        }
        set enableEmission(e) {
            e ? this._shaderValues.addDefine(ge.SHADERDEFINE_EMISSION) : this._shaderValues.removeDefine(ge.SHADERDEFINE_EMISSION);
        }
        get emissionColor() {
            return this._shaderValues.getVector(ge.EMISSIONCOLOR);
        }
        set emissionColor(e) {
            this._shaderValues.setVector(ge.EMISSIONCOLOR, e);
        }
        get emissionTexture() {
            return this._shaderValues.getTexture(ge.EMISSIONTEXTURE);
        }
        set emissionTexture(e) {
            e ? this._shaderValues.addDefine(ge.SHADERDEFINE_EMISSIONTEXTURE) : this._shaderValues.removeDefine(ge.SHADERDEFINE_EMISSIONTEXTURE), 
            this._shaderValues.setTexture(ge.EMISSIONTEXTURE, e);
        }
        get tilingOffset() {
            return this._shaderValues.getVector(ge.TILINGOFFSET);
        }
        set tilingOffset(e) {
            e ? this._shaderValues.setVector(ge.TILINGOFFSET, e) : this._shaderValues.getVector(ge.TILINGOFFSET).setValue(1, 1, 0, 0);
        }
        set renderMode(t) {
            switch (t) {
              case e.PBRRenderMode.Opaque:
                this.alphaTest = !1, this.renderQueue = ue.RENDERQUEUE_OPAQUE, this.depthWrite = !0, 
                this.cull = fe.CULL_BACK, this.blend = fe.BLEND_DISABLE, this.depthTest = fe.DEPTHTEST_LESS, 
                this._shaderValues.removeDefine(ge.SHADERDEFINE_TRANSPARENTBLEND);
                break;

              case e.PBRRenderMode.Cutout:
                this.renderQueue = ue.RENDERQUEUE_ALPHATEST, this.alphaTest = !0, this.depthWrite = !0, 
                this.cull = fe.CULL_BACK, this.blend = fe.BLEND_DISABLE, this.depthTest = fe.DEPTHTEST_LESS, 
                this._shaderValues.removeDefine(ge.SHADERDEFINE_TRANSPARENTBLEND);
                break;

              case e.PBRRenderMode.Fade:
                this.renderQueue = ue.RENDERQUEUE_TRANSPARENT, this.alphaTest = !1, this.depthWrite = !1, 
                this.cull = fe.CULL_BACK, this.blend = fe.BLEND_ENABLE_ALL, this.blendSrc = fe.BLENDPARAM_SRC_ALPHA, 
                this.blendDst = fe.BLENDPARAM_ONE_MINUS_SRC_ALPHA, this.depthTest = fe.DEPTHTEST_LESS, 
                this._shaderValues.removeDefine(ge.SHADERDEFINE_TRANSPARENTBLEND);
                break;

              case e.PBRRenderMode.Transparent:
                this.renderQueue = ue.RENDERQUEUE_TRANSPARENT, this.alphaTest = !1, this.depthWrite = !1, 
                this.cull = fe.CULL_BACK, this.blend = fe.BLEND_ENABLE_ALL, this.blendSrc = fe.BLENDPARAM_ONE, 
                this.blendDst = fe.BLENDPARAM_ONE_MINUS_SRC_ALPHA, this.depthTest = fe.DEPTHTEST_LESS, 
                this._shaderValues.addDefine(ge.SHADERDEFINE_TRANSPARENTBLEND);
                break;

              default:
                throw new Error("PBRMaterial:unknown renderMode value.");
            }
        }
    }
    ge.ALBEDOTEXTURE = Z.propertyNameToID("u_AlbedoTexture"), ge.ALBEDOCOLOR = Z.propertyNameToID("u_AlbedoColor"), 
    ge.TILINGOFFSET = Z.propertyNameToID("u_TilingOffset"), ge.NORMALTEXTURE = Z.propertyNameToID("u_NormalTexture"), 
    ge.NORMALSCALE = Z.propertyNameToID("u_NormalScale"), ge.SMOOTHNESS = Z.propertyNameToID("u_Smoothness"), 
    ge.SMOOTHNESSSCALE = Z.propertyNameToID("u_SmoothnessScale"), ge.OCCLUSIONTEXTURE = Z.propertyNameToID("u_OcclusionTexture"), 
    ge.OCCLUSIONSTRENGTH = Z.propertyNameToID("u_occlusionStrength"), ge.PARALLAXTEXTURE = Z.propertyNameToID("u_ParallaxTexture"), 
    ge.PARALLAXSCALE = Z.propertyNameToID("u_ParallaxScale"), ge.EMISSIONTEXTURE = Z.propertyNameToID("u_EmissionTexture"), 
    ge.EMISSIONCOLOR = Z.propertyNameToID("u_EmissionColor"), ge.renderQuality = e.PBRRenderQuality.High;
    var Se, Re, ve, xe, Ae, Ie, Me, De, Le, ye, Ce, Oe, Ne, Pe, we = '#if defined(GL_FRAGMENT_PRECISION_HIGH)// 原来的写法会被我们自己的解析流程处理，而我们的解析是不认内置宏的，导致被删掉，所以改成 if defined 了\r\n\tprecision highp float;\r\n\tprecision highp int;\r\n#else\r\n\tprecision mediump float;\r\n\tprecision mediump int;\r\n#endif\r\n\r\n#define SETUP_BRDF_INPUT specularSetup\r\n\r\n#include "Lighting.glsl";\r\n#include "PBRFSInput.glsl";\r\n#include "LayaPBRBRDF.glsl";\r\n#include "GlobalIllumination.glsl";\r\n#include "Shadow.glsl"\r\n#include "PBRCore.glsl";\r\n\r\nvoid main()\r\n{\r\n\tfragmentForward();\r\n}', Ve = '#include "PBRVSInput.glsl";\n#include "Lighting.glsl";\n#include "PBRVertex.glsl";\n\nvoid main()\n{\n\tvertexForward();\n\tgl_Position=remapGLPositionZ(gl_Position);\n}', Be = '#if defined(GL_FRAGMENT_PRECISION_HIGH)// 原来的写法会被我们自己的解析流程处理，而我们的解析是不认内置宏的，导致被删掉，所以改成 if defined 了\r\n\tprecision highp float;\r\n\tprecision highp int;\r\n#else\r\n\tprecision mediump float;\r\n\tprecision mediump int;\r\n#endif\r\n\r\n#include "ShadowCasterFS.glsl"\r\n\r\nvoid main()\r\n{\r\n\tgl_FragColor=shadowCasterFragment();\r\n}', be = '#include "ShadowCasterVS.glsl"\n\nvoid main()\n{\n\tvec4 positionCS =  shadowCasterVertex();\n\tgl_Position=remapGLPositionZ(positionCS);\n}', Fe = '#if defined(GL_FRAGMENT_PRECISION_HIGH)// 原来的写法会被我们自己的解析流程处理，而我们的解析是不认内置宏的，导致被删掉，所以改成 if defined 了\r\n\tprecision highp float;\r\n\tprecision highp int;\r\n#else\r\n\tprecision mediump float;\r\n\tprecision mediump int;\r\n#endif\r\n\r\n#include "Lighting.glsl";\r\n\r\nattribute vec4 a_Position;\r\nattribute vec3 a_Normal;\r\n\r\n#ifdef BONE\r\n\tconst int c_MaxBoneCount = 24;\r\n\tattribute vec4 a_BoneIndices;\r\n\tattribute vec4 a_BoneWeights;\r\n\tuniform mat4 u_Bones[c_MaxBoneCount];\r\n#endif\r\n\r\n#ifdef GPU_INSTANCE\r\n\tattribute mat4 a_WorldMat;\r\n#else\r\n\tuniform mat4 u_WorldMat;\r\n#endif\r\n\r\nuniform mat4 u_ViewProjection;\r\nuniform vec4 u_ProjectionParams;\r\n\r\n//传入法线\r\nvarying vec4 depthNormals;\r\n\r\n\r\nvec4 depthNormalsVertex()\r\n{\r\n\tmat4 worldMat;\r\n\t#ifdef GPU_INSTANCE\r\n\t\tworldMat = a_WorldMat;\r\n\t#else\r\n\t\tworldMat = u_WorldMat;\r\n\t#endif\r\n\t\r\n\t#ifdef BONE\r\n\t\tmat4 skinTransform;\r\n\t \t#ifdef SIMPLEBONE\r\n\t\t\tfloat currentPixelPos;\r\n\t\t\t#ifdef GPU_INSTANCE\r\n\t\t\t\tcurrentPixelPos = a_SimpleTextureParams.x+a_SimpleTextureParams.y;\r\n\t\t\t#else\r\n\t\t\t\tcurrentPixelPos = u_SimpleAnimatorParams.x+u_SimpleAnimatorParams.y;\r\n\t\t\t#endif\r\n\t\t\tfloat offset = 1.0/u_SimpleAnimatorTextureSize;\r\n\t\t\tskinTransform =  loadMatFromTexture(currentPixelPos,int(a_BoneIndices.x),offset) * a_BoneWeights.x;\r\n\t\t\tskinTransform += loadMatFromTexture(currentPixelPos,int(a_BoneIndices.y),offset) * a_BoneWeights.y;\r\n\t\t\tskinTransform += loadMatFromTexture(currentPixelPos,int(a_BoneIndices.z),offset) * a_BoneWeights.z;\r\n\t\t\tskinTransform += loadMatFromTexture(currentPixelPos,int(a_BoneIndices.w),offset) * a_BoneWeights.w;\r\n\t\t#else\r\n\t\t\tskinTransform =  u_Bones[int(a_BoneIndices.x)] * a_BoneWeights.x;\r\n\t\t\tskinTransform += u_Bones[int(a_BoneIndices.y)] * a_BoneWeights.y;\r\n\t\t\tskinTransform += u_Bones[int(a_BoneIndices.z)] * a_BoneWeights.z;\r\n\t\t\tskinTransform += u_Bones[int(a_BoneIndices.w)] * a_BoneWeights.w;\r\n\t\t#endif\r\n\t\tworldMat = worldMat * skinTransform;\r\n\t#endif\r\n\r\n\tvec4 positionWS = worldMat * a_Position;\r\n\r\n\tmat3 worldInvMat;\r\n\t#ifdef BONE\r\n\t\tworldInvMat=INVERSE_MAT(mat3(worldMat*skinTransform));\r\n\t#else\r\n\t\tworldInvMat=INVERSE_MAT(mat3(worldMat));\r\n\t#endif  \r\n\r\n\tvec3 normalWS = normalize(a_Normal*worldInvMat);//if no normalize will cause precision problem\r\n\r\n\tdepthNormals.xyz = normalWS;\r\n\tvec4 positionCS = u_ViewProjection * positionWS;\r\n\tdepthNormals.w = (positionCS.z * 2.0 - positionCS.w)*u_ProjectionParams.w;\r\n\t\r\n    return positionCS;\r\n}\r\n\r\nvoid main()\r\n{\r\n\tvec4 positionCS =  depthNormalsVertex();\r\n\tgl_Position=remapGLPositionZ(positionCS);\r\n}', Ue = '#if defined(GL_FRAGMENT_PRECISION_HIGH)// 原来的写法会被我们自己的解析流程处理，而我们的解析是不认内置宏的，导致被删掉，所以改成 if defined 了\r\n\tprecision highp float;\r\n\tprecision highp int;\r\n#else\r\n\tprecision mediump float;\r\n\tprecision mediump int;\r\n#endif\r\n#include "DepthNormalUtil.glsl";\r\n\r\nvarying vec4 depthNormals;\r\n\r\nvoid main()\r\n{\r\n\tgl_FragColor=depthNormalsFragment(depthNormals);\r\n}';
    class He {
        constructor() {
            this.textureID = -1;
        }
    }
    class Ge extends t.Resource {
        constructor(e, t, r, a, n) {
            super(), this._stateParamsMap = [], this._uploadMark = -1, this._uploadRenderType = -1, 
            this._vs = e, this._ps = t, this._attributeMap = r, this._uniformMap = a, this._shaderPass = n, 
            this._globaluniformMap = {}, this._create(), this.lock = !0;
        }
        _create() {
            var e = t.LayaGL.instance;
            for (var r in this._program = e.createProgram(), this._vshader = this._createShader(e, this._vs, e.VERTEX_SHADER), 
            this._pshader = this._createShader(e, this._ps, e.FRAGMENT_SHADER), e.attachShader(this._program, this._vshader), 
            e.attachShader(this._program, this._pshader), this._attributeMap) e.bindAttribLocation(this._program, this._attributeMap[r], r);
            if (e.linkProgram(this._program), !t.Render.isConchApp && Z.debugMode && !e.getProgramParameter(this._program, e.LINK_STATUS)) throw e.getProgramInfoLog(this._program);
            var a = [], n = [], i = [], s = [], o = [];
            this._customUniformParamsMap = [];
            var l, h, _, d = e.getProgramParameter(this._program, e.ACTIVE_UNIFORMS);
            for (t.WebGLContext.useProgram(e, this._program), this._curActTexIndex = 0, h = 0; h < d; h++) {
                var c = e.getActiveUniform(this._program, h), u = c.name;
                (l = new He()).location = e.getUniformLocation(this._program, u), u.indexOf("[0]") > 0 ? (l.name = u = u.substr(0, u.length - 3), 
                l.isArray = !0) : (l.name = u, l.isArray = !1), l.type = c.type, this._addShaderUnifiormFun(l);
                var m = this._uniformMap[u];
                if (null != m) switch (l.dataOffset = Z.propertyNameToID(u), m) {
                  case Z.PERIOD_CUSTOM:
                    o.push(l);
                    break;

                  case Z.PERIOD_MATERIAL:
                    s.push(l);
                    break;

                  case Z.PERIOD_SPRITE:
                    i.push(l);
                    break;

                  case Z.PERIOD_CAMERA:
                    n.push(l);
                    break;

                  case Z.PERIOD_SCENE:
                    a.push(l);
                    break;

                  default:
                    throw new Error("Shader3D: period is unkonw.");
                } else l.dataOffset = Z.propertyNameToID(u), this._globaluniformMap[u] = Z.PERIOD_SCENE, 
                a.push(l);
            }
            for (this._sceneUniformParamsMap = t.LayaGL.instance.createCommandEncoder(4 * a.length * 5 + 4, 64, !0), 
            h = 0, _ = a.length; h < _; h++) this._sceneUniformParamsMap.addShaderUniform(a[h]);
            for (this._cameraUniformParamsMap = t.LayaGL.instance.createCommandEncoder(4 * n.length * 5 + 4, 64, !0), 
            h = 0, _ = n.length; h < _; h++) this._cameraUniformParamsMap.addShaderUniform(n[h]);
            for (this._spriteUniformParamsMap = t.LayaGL.instance.createCommandEncoder(4 * i.length * 5 + 4, 64, !0), 
            h = 0, _ = i.length; h < _; h++) this._spriteUniformParamsMap.addShaderUniform(i[h]);
            for (this._materialUniformParamsMap = t.LayaGL.instance.createCommandEncoder(4 * s.length * 5 + 4, 64, !0), 
            h = 0, _ = s.length; h < _; h++) this._materialUniformParamsMap.addShaderUniform(s[h]);
            for (this._customUniformParamsMap.length = o.length, h = 0, _ = o.length; h < _; h++) {
                var f = o[h];
                this._customUniformParamsMap[f.dataOffset] = f;
            }
            var E = this._shaderPass._stateMap;
            for (var T in E) this._stateParamsMap[E[T]] = Z.propertyNameToID(T);
        }
        _getRenderState(e, t) {
            var r = this._stateParamsMap[t];
            return null == r ? null : e[r];
        }
        _disposeResource() {
            t.LayaGL.instance.deleteShader(this._vshader), t.LayaGL.instance.deleteShader(this._pshader), 
            t.LayaGL.instance.deleteProgram(this._program), this._vshader = this._pshader = this._program = null, 
            this._setGPUMemory(0), this._curActTexIndex = 0;
        }
        _addShaderUnifiormFun(e) {
            var r = t.LayaGL.instance;
            e.caller = this;
            var a = e.isArray;
            switch (e.type) {
              case r.BOOL:
                e.fun = this._uniform1i, e.uploadedValue = new Array(1);
                break;

              case r.INT:
                e.fun = a ? this._uniform1iv : this._uniform1i, e.uploadedValue = new Array(1);
                break;

              case r.FLOAT:
                e.fun = a ? this._uniform1fv : this._uniform1f, e.uploadedValue = new Array(1);
                break;

              case r.FLOAT_VEC2:
                e.fun = a ? this._uniform_vec2v : this._uniform_vec2, e.uploadedValue = new Array(2);
                break;

              case r.FLOAT_VEC3:
                e.fun = a ? this._uniform_vec3v : this._uniform_vec3, e.uploadedValue = new Array(3);
                break;

              case r.FLOAT_VEC4:
                e.fun = a ? this._uniform_vec4v : this._uniform_vec4, e.uploadedValue = new Array(4);
                break;

              case r.FLOAT_MAT2:
                e.fun = this._uniformMatrix2fv;
                break;

              case r.FLOAT_MAT3:
                e.fun = this._uniformMatrix3fv;
                break;

              case r.FLOAT_MAT4:
                e.fun = a ? this._uniformMatrix4fv : this._uniformMatrix4f;
                break;

              case r.SAMPLER_2D:
              case r.SAMPLER_2D_SHADOW:
                r.uniform1i(e.location, this._curActTexIndex), e.textureID = t.WebGLContext._glTextureIDs[this._curActTexIndex++], 
                e.fun = this._uniform_sampler2D;
                break;

              case 35679:
                r.uniform1i(e.location, this._curActTexIndex), e.textureID = t.WebGLContext._glTextureIDs[this._curActTexIndex++], 
                e.fun = this._uniform_sampler3D;
                break;

              case r.SAMPLER_CUBE:
                r.uniform1i(e.location, this._curActTexIndex), e.textureID = t.WebGLContext._glTextureIDs[this._curActTexIndex++], 
                e.fun = this._uniform_samplerCube;
                break;

              default:
                throw new Error("compile shader err!");
            }
        }
        _createShader(e, t, r) {
            var a = e.createShader(r);
            if (e.shaderSource(a, t), e.compileShader(a), Z.debugMode && !e.getShaderParameter(a, e.COMPILE_STATUS)) throw e.getShaderInfoLog(a);
            return a;
        }
        _uniform1f(e, r) {
            var a = e.uploadedValue;
            return a[0] !== r ? (t.LayaGL.instance.uniform1f(e.location, a[0] = r), 1) : 0;
        }
        _uniform1fv(e, r) {
            if (r.length < 4) {
                var a = e.uploadedValue;
                return a[0] !== r[0] || a[1] !== r[1] || a[2] !== r[2] || a[3] !== r[3] ? (t.LayaGL.instance.uniform1fv(e.location, r), 
                a[0] = r[0], a[1] = r[1], a[2] = r[2], a[3] = r[3], 1) : 0;
            }
            return t.LayaGL.instance.uniform1fv(e.location, r), 1;
        }
        _uniform_vec2(e, r) {
            var a = e.uploadedValue;
            return a[0] !== r.x || a[1] !== r.y ? (t.LayaGL.instance.uniform2f(e.location, a[0] = r.x, a[1] = r.y), 
            1) : 0;
        }
        _uniform_vec2v(e, r) {
            if (r.length < 2) {
                var a = e.uploadedValue;
                return a[0] !== r[0] || a[1] !== r[1] || a[2] !== r[2] || a[3] !== r[3] ? (t.LayaGL.instance.uniform2fv(e.location, r), 
                a[0] = r[0], a[1] = r[1], a[2] = r[2], a[3] = r[3], 1) : 0;
            }
            return t.LayaGL.instance.uniform2fv(e.location, r), 1;
        }
        _uniform_vec3(e, r) {
            var a = e.uploadedValue;
            return a[0] !== r.x || a[1] !== r.y || a[2] !== r.z ? (t.LayaGL.instance.uniform3f(e.location, a[0] = r.x, a[1] = r.y, a[2] = r.z), 
            1) : 0;
        }
        _uniform_vec3v(e, r) {
            return t.LayaGL.instance.uniform3fv(e.location, r), 1;
        }
        _uniform_vec4(e, r) {
            var a = e.uploadedValue;
            return a[0] !== r.x || a[1] !== r.y || a[2] !== r.z || a[3] !== r.w ? (t.LayaGL.instance.uniform4f(e.location, a[0] = r.x, a[1] = r.y, a[2] = r.z, a[3] = r.w), 
            1) : 0;
        }
        _uniform_vec4v(e, r) {
            return t.LayaGL.instance.uniform4fv(e.location, r), 1;
        }
        _uniformMatrix2fv(e, r) {
            return t.LayaGL.instance.uniformMatrix2fv(e.location, !1, r), 1;
        }
        _uniformMatrix3fv(e, r) {
            return t.LayaGL.instance.uniformMatrix3fv(e.location, !1, r), 1;
        }
        _uniformMatrix4f(e, r) {
            var a = r.elements;
            return t.LayaGL.instance.uniformMatrix4fv(e.location, !1, a), 1;
        }
        _uniformMatrix4fv(e, r) {
            return t.LayaGL.instance.uniformMatrix4fv(e.location, !1, r), 1;
        }
        _uniform1i(e, r) {
            var a = e.uploadedValue;
            return a[0] !== r ? (t.LayaGL.instance.uniform1i(e.location, a[0] = r), 1) : 0;
        }
        _uniform1iv(e, r) {
            return t.LayaGL.instance.uniform1iv(e.location, r), 1;
        }
        _uniform_ivec2(e, r) {
            var a = e.uploadedValue;
            return a[0] !== r[0] || a[1] !== r[1] ? (t.LayaGL.instance.uniform2i(e.location, a[0] = r[0], a[1] = r[1]), 
            1) : 0;
        }
        _uniform_ivec2v(e, r) {
            return t.LayaGL.instance.uniform2iv(e.location, r), 1;
        }
        _uniform_vec3i(e, r) {
            var a = e.uploadedValue;
            return a[0] !== r[0] || a[1] !== r[1] || a[2] !== r[2] ? (t.LayaGL.instance.uniform3i(e.location, a[0] = r[0], a[1] = r[1], a[2] = r[2]), 
            1) : 0;
        }
        _uniform_vec3vi(e, r) {
            return t.LayaGL.instance.uniform3iv(e.location, r), 1;
        }
        _uniform_vec4i(e, r) {
            var a = e.uploadedValue;
            return a[0] !== r[0] || a[1] !== r[1] || a[2] !== r[2] || a[3] !== r[3] ? (t.LayaGL.instance.uniform4i(e.location, a[0] = r[0], a[1] = r[1], a[2] = r[2], a[3] = r[3]), 
            1) : 0;
        }
        _uniform_vec4vi(e, r) {
            return t.LayaGL.instance.uniform4iv(e.location, r), 1;
        }
        _uniform_sampler2D(e, r) {
            var a = r._getSource() || r.defaulteTexture._getSource(), n = t.LayaGL.instance;
            return t.WebGLContext.activeTexture(n, e.textureID), t.WebGLContext.bindTexture(n, n.TEXTURE_2D, a), 
            0;
        }
        _uniform_sampler3D(e, r) {
            var a = r._getSource() || r.defaulteTexture._getSource(), n = t.LayaGL.instance;
            return t.WebGLContext.activeTexture(n, e.textureID), t.WebGLContext.bindTexture(n, WebGL2RenderingContext.TEXTURE_3D, a), 
            0;
        }
        _uniform_samplerCube(e, r) {
            var a = r._getSource() || r.defaulteTexture._getSource(), n = t.LayaGL.instance;
            return t.WebGLContext.activeTexture(n, e.textureID), t.WebGLContext.bindTexture(n, n.TEXTURE_CUBE_MAP, a), 
            0;
        }
        bind() {
            return t.WebGLContext.useProgram(t.LayaGL.instance, this._program);
        }
        uploadUniforms(e, r, a) {
            t.Stat.shaderCall += t.LayaGLRunner.uploadShaderUniforms(t.LayaGL.instance, e, r, a);
        }
        uploadRenderStateBlendDepth(e) {
            var r = t.LayaGL.instance, a = this._shaderPass.renderState, n = e.getData(), i = this._getRenderState(n, Z.RENDER_STATE_DEPTH_WRITE), s = this._getRenderState(n, Z.RENDER_STATE_DEPTH_TEST), o = this._getRenderState(n, Z.RENDER_STATE_BLEND);
            switch (null == i && (i = a.depthWrite), null == s && (s = a.depthTest), null == o && (o = a.blend), 
            t.WebGLContext.setDepthMask(r, i), s === fe.DEPTHTEST_OFF ? t.WebGLContext.setDepthTest(r, !1) : (t.WebGLContext.setDepthTest(r, !0), 
            t.WebGLContext.setDepthFunc(r, s)), o) {
              case fe.BLEND_DISABLE:
                t.WebGLContext.setBlend(r, !1);
                break;

              case fe.BLEND_ENABLE_ALL:
                var l = this._getRenderState(n, Z.RENDER_STATE_BLEND_EQUATION), h = this._getRenderState(n, Z.RENDER_STATE_BLEND_SRC), _ = this._getRenderState(n, Z.RENDER_STATE_BLEND_DST);
                null == l && (l = a.blendEquation), null == h && (h = a.srcBlend), null == _ && (_ = a.dstBlend), 
                t.WebGLContext.setBlend(r, !0), t.WebGLContext.setBlendEquation(r, l), t.WebGLContext.setBlendFunc(r, h, _);
                break;

              case fe.BLEND_ENABLE_SEPERATE:
                var d = this._getRenderState(n, Z.RENDER_STATE_BLEND_EQUATION_RGB), c = this._getRenderState(n, Z.RENDER_STATE_BLEND_EQUATION_ALPHA), u = this._getRenderState(n, Z.RENDER_STATE_BLEND_SRC_RGB), m = this._getRenderState(n, Z.RENDER_STATE_BLEND_DST_RGB), f = this._getRenderState(n, Z.RENDER_STATE_BLEND_SRC_ALPHA), E = this._getRenderState(n, Z.RENDER_STATE_BLEND_DST_ALPHA);
                null == d && (d = a.blendEquationRGB), null == c && (c = a.blendEquationAlpha), 
                null == u && (u = a.srcBlendRGB), null == m && (m = a.dstBlendRGB), null == f && (f = a.srcBlendAlpha), 
                null == E && (E = a.dstBlendAlpha), t.WebGLContext.setBlend(r, !0), t.WebGLContext.setBlendEquationSeparate(r, d, c), 
                t.WebGLContext.setBlendFuncSeperate(r, u, m, f, E);
            }
        }
        uploadRenderStateFrontFace(e, r, a) {
            var n, i = t.LayaGL.instance, s = this._shaderPass.renderState, o = e.getData(), l = this._getRenderState(o, Z.RENDER_STATE_CULL);
            switch (null == l && (l = s.cull), l) {
              case fe.CULL_NONE:
                t.WebGLContext.setCullFace(i, !1);
                break;

              case fe.CULL_FRONT:
                t.WebGLContext.setCullFace(i, !0), n = r ? a ? i.CCW : i.CW : a ? i.CW : i.CCW, 
                t.WebGLContext.setFrontFace(i, n);
                break;

              case fe.CULL_BACK:
                t.WebGLContext.setCullFace(i, !0), n = r ? a ? i.CW : i.CCW : a ? i.CCW : i.CW, 
                t.WebGLContext.setFrontFace(i, n);
            }
        }
        uploadCustomUniform(e, r) {
            t.Stat.shaderCall += t.LayaGLRunner.uploadCustomUniform(t.LayaGL.instance, this._customUniformParamsMap, e, r);
        }
        _uniformMatrix2fvForNative(e, r) {
            return t.LayaGL.instance.uniformMatrix2fvEx(e.location, !1, r), 1;
        }
        _uniformMatrix3fvForNative(e, r) {
            return t.LayaGL.instance.uniformMatrix3fvEx(e.location, !1, r), 1;
        }
        _uniformMatrix4fvForNative(e, r) {
            return t.LayaGL.instance.uniformMatrix4fvEx(e.location, !1, r), 1;
        }
    }
    class ze {
        constructor() {
            this.elements = [], this.length = 0;
        }
        _add(e) {
            this.length === this.elements.length ? this.elements.push(e) : this.elements[this.length] = e;
        }
        add(e) {
            this.length === this.elements.length ? this.elements.push(e) : this.elements[this.length] = e, 
            this.length++;
        }
    }
    class ke extends ze {
        constructor() {
            super();
        }
        add(e) {
            if (-1 !== e._getIndexInList()) throw "SimpleSingletonList:" + e + " has  in  SingletonList.";
            this._add(e), e._setIndexInList(this.length++);
        }
        remove(e) {
            var t = e._getIndexInList();
            if (this.length--, t !== this.length) {
                var r = this.elements[this.length];
                this.elements[t] = r, r._setIndexInList(t);
            }
            e._setIndexInList(-1);
        }
        clear() {
            for (var e = this.elements, t = 0, r = this.length; t < r; t++) e[t]._setIndexInList(-1);
            this.length = 0;
        }
        clearElement() {
            this.elements = null, this.length = 0;
        }
    }
    class We {
        constructor(e = 1, t = 1, r = 1, a = 1) {
            this.r = e, this.g = t, this.b = r, this.a = a;
        }
        static gammaToLinearSpace(e) {
            return e <= .04045 ? e / 12.92 : e < 1 ? Math.pow((e + .055) / 1.055, 2.4) : Math.pow(e, 2.4);
        }
        static linearToGammaSpace(e) {
            return e <= 0 ? 0 : e <= .0031308 ? 12.92 * e : e <= 1 ? 1.055 * Math.pow(e, .41666) - .055 : Math.pow(e, .41666);
        }
        toLinear(e) {
            e.r = We.gammaToLinearSpace(this.r), e.g = We.gammaToLinearSpace(this.g), e.b = We.gammaToLinearSpace(this.b);
        }
        toGamma(e) {
            e.r = We.linearToGammaSpace(this.r), e.g = We.linearToGammaSpace(this.g), e.b = We.linearToGammaSpace(this.b);
        }
        cloneTo(e) {
            var t = e;
            t.r = this.r, t.g = this.g, t.b = this.b, t.a = this.a;
        }
        clone() {
            var e = new We();
            return this.cloneTo(e), e;
        }
        forNativeElement() {}
    }
    We.RED = new We(1, 0, 0, 1), We.GREEN = new We(0, 1, 0, 1), We.BLUE = new We(0, 0, 1, 1), 
    We.CYAN = new We(0, 1, 1, 1), We.YELLOW = new We(1, .92, .016, 1), We.MAGENTA = new We(1, 0, 1, 1), 
    We.GRAY = new We(.5, .5, .5, 1), We.WHITE = new We(1, 1, 1, 1), We.BLACK = new We(0, 0, 0, 1);
    class Xe {}
    class Ye {}
    class Ze {
        static __init__() {}
        static _drawTraversalCullingBound(e, t) {
            for (var r = e.elements, a = 0, n = e.length; a < n; a++) {
                var i = Ze._tempColor0;
                i.r = 0, i.g = 1, i.b = 0, i.a = 1, A._drawBound(t, r[a].bounds._getBoundBox(), i);
            }
        }
        static _traversalCulling(e, r, a, n, s, o, l) {
            for (var h = n.elements, _ = e.boundFrustum, d = e.position, c = e.cullingMask, u = t.Stat.loopCount, m = 0, f = n.length; m < f; m++) {
                var E = h[m];
                if ((l ? E._castShadow && E._enable : 0 != (Math.pow(2, E._owner._layer) & c) && E._enable) && (t.Stat.frustumCulling++, 
                !e.useOcclusionCulling || E._needRender(_, a))) {
                    E._renderMark = u, E._distanceForSort = i.distance(E.bounds.getCenter(), d);
                    for (var T = E._renderElements, p = 0, g = T.length; p < g; p++) T[p]._update(r, a, s, o);
                }
            }
        }
        static renderObjectCulling(e, t, r, a, n, i) {
            var s = t._opaqueQueue, o = t._transparentQueue, l = t._renders;
            t._clearRenderQueue();
            var h = t._octree;
            if (h && (h.updateMotionObjects(), h.shrinkRootIfPossible(), h.getCollidingWithFrustum(e, r, a, n, i)), 
            Ze._traversalCulling(e, t, r, l, a, n, i), Ze.debugFrustumCulling) {
                var _ = t._debugTool;
                _.clear(), h && (h.drawAllBounds(_), h.drawAllObjects(_)), Ze._drawTraversalCullingBound(l, _);
            }
            var d = s.elements.length;
            d > 0 && s._quickSort(0, d - 1), (d = o.elements.length) > 0 && o._quickSort(0, d - 1);
        }
        static cullingShadow(e, r, a) {
            r._clearRenderQueue();
            var n = r._opaqueQueue;
            if (r._octree) {
                let t = r._octree;
                t.updateMotionObjects(), t.shrinkRootIfPossible(), t._rootNode.getCollidingWithCastShadowFrustum(e, a);
            } else for (var s = r._renders, o = e.position, l = s.elements, h = t.Stat.loopCount, _ = 0, d = s.length; _ < d; _++) {
                var c = l[_];
                if (c._castShadow && c._enable) {
                    if (t.Stat.frustumCulling++, Ze.cullingRenderBounds(c.bounds, e)) {
                        c._renderMark = h, c._distanceForSort = i.distance(c.bounds.getCenter(), o);
                        for (var u = c._renderElements, m = 0, f = u.length; m < f; m++) u[m]._update(r, a, null, null);
                    }
                }
            }
            return n.elements.length > 0;
        }
        static cullingRenderBounds(e, t) {
            for (var r = t.cullPlaneCount, a = t.cullPlanes, n = e.getMin(), i = e.getMax(), s = n.x, o = n.y, l = n.z, h = i.x, _ = i.y, d = i.z, c = !0, u = 0; u < r; u++) {
                var m = a[u], f = m.normal;
                if (m.distance + f.x * (f.x < 0 ? s : h) + f.y * (f.y < 0 ? o : _) + f.z * (f.z < 0 ? l : d) < 0) {
                    c = !1;
                    break;
                }
            }
            return c;
        }
        static cullingSpotShadow(e, r, a) {
            var n = r._opaqueQueue;
            if (r._clearRenderQueue(), r._octree) {
                let t = r._octree;
                t.updateMotionObjects(), t.shrinkRootIfPossible(), t.getCollidingWithFrustum(e, a, null, null, !0);
            } else for (var s = r._renders, o = s.elements, l = t.Stat.loopCount, h = 0, _ = s.length; h < _; h++) {
                var d = o[h];
                if (d._castShadow && d._enable && d._needRender(e.boundFrustum, a)) {
                    var c = d.bounds;
                    d._renderMark = l, d._distanceForSort = i.distance(c.getCenter(), e.position);
                    for (var u = d._renderElements, m = 0, f = u.length; m < f; m++) u[m]._update(r, a, null, null);
                }
            }
            return n.elements.length > 0;
        }
        static renderObjectCullingNative(e, r, a, n, s, o) {
            var l, h, _, d = r._opaqueQueue, c = r._transparentQueue;
            r._clearRenderQueue();
            var u = n.length, m = n.elements;
            for (l = 0; l < u; l++) m[l].bounds, m[l]._updateForNative && m[l]._updateForNative(a);
            Ze.cullingNative(e._boundFrustumBuffer, Ze._cullingBuffer, r._cullingBufferIndices, u, r._cullingBufferResult);
            var f = t.Stat.loopCount, E = a.camera._transform.position;
            for (l = 0; l < u; l++) {
                var T = m[l];
                if (!e.useOcclusionCulling || e._isLayerVisible(T._owner._layer) && T._enable && r._cullingBufferResult[l]) {
                    T._renderMark = f, T._distanceForSort = i.distance(T.bounds.getCenter(), E);
                    var p = T._renderElements;
                    for (h = 0, _ = p.length; h < _; h++) {
                        p[h]._update(r, a, s, o);
                    }
                }
            }
            var g = d.elements.length;
            g > 0 && d._quickSort(0, g - 1), (g = c.elements.length) > 0 && c._quickSort(0, g - 1);
        }
        static cullingNative(e, r, a, n, i) {
            return t.LayaGL.instance.culling(e, r, a, n, i);
        }
    }
    Ze._tempColor0 = new We(), Ze._cameraCullInfo = new Xe(), Ze._shadowCullInfo = new Ye(), 
    Ze.debugFrustumCulling = !1;
    class je {
        constructor() {
            this.updateMark = -1, this.pointLightCount = 0, this.spotLightCount = 0, this.indices = [];
        }
    }
    class qe {
        constructor(e, t, r, n) {
            this._updateMark = 0, this._depthSliceParam = new a(), this._xSlices = e, this._ySlices = t, 
            this._zSlices = r;
            var i = e * t, s = r * (1 + Math.ceil(n / 4));
            this._clusterTexture = A._createFloatTextureBuffer(i, s), this._clusterTexture.lock = !0, 
            this._clusterPixels = new Float32Array(i * s * 4);
            for (var o = new Array(this._zSlices), l = 0; l < this._zSlices; l++) {
                o[l] = new Array(this._ySlices);
                for (var h = 0; h < this._ySlices; h++) {
                    o[l][h] = new Array(this._xSlices);
                    for (var _ = 0; _ < this._xSlices; _++) o[l][h][_] = new je();
                }
            }
            this._clusterDatas = o;
        }
        _placePointLightToClusters(e, t) {
            for (var r = this._clusterDatas, a = this._updateMark, n = t.zMin, i = t.zMax; n < i; n++) for (var s = t.yMin, o = t.yMax; s < o; s++) for (var l = t.xMin, h = t.xMax; l < h; l++) {
                var _ = r[n][s][l];
                _.updateMark != a && (_.pointLightCount = 0, _.spotLightCount = 0, _.updateMark = a);
                var d = _.indices, c = _.pointLightCount++;
                c < d.length ? d[c] = e : d.push(e);
            }
        }
        _placeSpotLightToClusters(e, t) {
            for (var r = this._clusterDatas, a = this._updateMark, n = t.zMin, i = t.zMax; n < i; n++) for (var s = t.yMin, o = t.yMax; s < o; s++) for (var l = t.xMin, h = t.xMax; l < h; l++) {
                var _ = r[n][s][l];
                _.updateMark != a && (_.pointLightCount = 0, _.spotLightCount = 0, _.updateMark = a);
                var d = _.indices, c = _.pointLightCount + _.spotLightCount++;
                c < d.length ? d[c] = e : d.push(e);
            }
        }
        _insertConePlane(e, t, r, a, n) {
            var s = qe._tempVector36, o = qe._tempVector37;
            i.cross(n, t, s), i.cross(s, t, o), i.normalize(o, o);
            var l = r * Math.tan(a), h = e.x + r * t.x + l * o.x, _ = e.y + r * t.y + l * o.y, d = e.z + r * t.z + l * o.z;
            return h * n.x + _ * n.y + d * n.z <= 0 || e.x * n.x + e.y * n.y + e.z * n.z <= 0;
        }
        _shrinkSphereLightZPerspective(e, t, r, a, n) {
            var i = r.z, s = i - a, o = i + a;
            if (s > t || o <= e) return !1;
            var l = this._depthSliceParam;
            return n.zMin = Math.floor(Math.log2(Math.max(s, e)) * l.x - l.y), n.zMax = Math.min(Math.ceil(Math.log2(o) * l.x - l.y), this._zSlices), 
            !0;
        }
        _shrinkSpotLightZPerspective(e, t, r, a, n, i, s) {
            var o = a.x, l = a.y, h = a.z, _ = Math.tan(i) * n, d = r.x, c = r.y, u = r.z, m = o - d, f = l - c, E = h - u, T = m * m + f * f + E * E, p = Math.sqrt(1 - E * E / T), g = Math.max(Math.min(u, h - p * _), r.z - n), S = Math.min(Math.max(u, h + p * _), r.z + n);
            if (g > t || S <= e) return !1;
            var R = this._depthSliceParam;
            return s.zMin = Math.floor(Math.log2(Math.max(g, e)) * R.x - R.y), s.zMax = Math.min(Math.ceil(Math.log2(S) * R.x - R.y), this._zSlices), 
            !0;
        }
        _shrinkSphereLightByBoundOrth(e, t, r, a, n, i, s) {
            var o = n.z, l = o - i, h = o + i;
            if (l > a || h <= r) return !1;
            var _ = n.x, d = _ - i, c = _ + i;
            if (d > e || c <= -e) return !1;
            var u = n.y, m = u - i, f = u + i;
            if (m > t || f <= -t) return !1;
            var E = this._xSlices, T = this._ySlices, p = this._depthSliceParam, g = 2 * e / E, S = 2 * t / T;
            return s.xMin = Math.max(Math.floor((d + e) / g), 0), s.xMax = Math.min(Math.ceil((c + e) / g), E), 
            s.yMin = Math.max(Math.floor((t - f) / S), 0), s.yMax = Math.min(Math.ceil((t - m) / S), T), 
            s.zMin = Math.floor(Math.log2(Math.max(l, r)) * p.x - p.y), s.zMax = Math.min(Math.ceil(Math.log2(h) * p.x - p.y), this._zSlices), 
            !0;
        }
        _shrinkSpotLightByBoundOrth(e, t, r, a, n, i, s, o, l) {
            var h = i.x, _ = i.y, d = i.z, c = Math.tan(o) * s, u = n.x, m = n.y, f = n.z, E = h - u, T = _ - m, p = d - f, g = E * E + T * T + p * p, S = Math.sqrt(1 - p * p / g), R = Math.max(Math.min(f, d - S * c), n.z - s), v = Math.min(Math.max(f, d + S * c), n.z + s);
            if (R > a || v <= r) return !1;
            var x = Math.sqrt(1 - E * E / g), A = Math.max(Math.min(u, h - x * c), n.x - s), I = Math.min(Math.max(u, h + x * c), n.x + s);
            if (A > e || I <= -e) return !1;
            var M = Math.sqrt(1 - T * T / g), D = Math.max(Math.min(m, _ - M * c), n.y - s), L = Math.min(Math.max(m, _ + M * c), n.y + s);
            if (D > t || L <= -t) return !1;
            var y = this._xSlices, C = this._ySlices, O = this._depthSliceParam, N = 2 * e / y, P = 2 * t / C;
            return l.xMin = Math.max(Math.floor((A + e) / N), 0), l.xMax = Math.min(Math.ceil((I + e) / N), y), 
            l.yMin = Math.max(Math.floor((t - L) / P), 0), l.yMax = Math.min(Math.ceil((t - D) / P), C), 
            l.zMin = Math.floor(Math.log2(Math.max(R, r)) * O.x - O.y), l.zMax = Math.min(Math.ceil(Math.log2(v) * O.x - O.y), this._zSlices), 
            !0;
        }
        _shrinkXYByRadiusPerspective(e, t, r, a, n) {
            var i, s, o, l, h, _ = e.x, d = e.y, c = e.z, u = this._ySlices + 1;
            for (h = 0; h < u; h++) {
                if (d * (m = n[h]).y + c * m.z < t) {
                    s = Math.max(0, h - 1);
                    break;
                }
            }
            if (h == u) return !1;
            for (l = this._ySlices, h = s + 1; h < u; h++) {
                if (d * (m = n[h]).y + c * m.z <= -t) {
                    l = Math.max(0, h);
                    break;
                }
            }
            for (u = this._xSlices + 1, h = 0; h < u; h++) {
                if (_ * (m = a[h]).x + c * m.z < t) {
                    i = Math.max(0, h - 1);
                    break;
                }
            }
            for (o = this._xSlices, h = i + 1; h < u; h++) {
                var m;
                if (_ * (m = a[h]).x + c * m.z <= -t) {
                    o = Math.max(0, h);
                    break;
                }
            }
            return r.xMin = i, r.xMax = o, r.yMin = s, r.yMax = l, !0;
        }
        _shrinkSpotXYByConePerspective(e, t, r, a, n, i, s) {
            for (var o, l, h, _, d = qe._tempVector32, c = n.yMax + 1, u = n.yMin + 1; u < c; u++) if (this._insertConePlane(e, t, r, a, s[u])) {
                l = Math.max(0, u - 1);
                break;
            }
            _ = n.yMax;
            for (u = l + 1; u < c; u++) {
                var m = s[u];
                if (d.setValue(0, -m.y, -m.z), !this._insertConePlane(e, t, r, a, d)) {
                    _ = Math.max(0, u);
                    break;
                }
            }
            c = n.xMax + 1;
            for (u = n.xMin + 1; u < c; u++) if (this._insertConePlane(e, t, r, a, i[u])) {
                o = Math.max(0, u - 1);
                break;
            }
            h = n.xMax;
            for (u = o + 1; u < c; u++) {
                m = i[u];
                if (d.setValue(-m.x, 0, -m.z), !this._insertConePlane(e, t, r, a, d)) {
                    h = Math.max(0, u);
                    break;
                }
            }
            n.xMin = o, n.xMax = h, n.yMin = l, n.yMax = _;
        }
        _updatePointLightPerspective(e, t, r, a, n, s, o) {
            var l = qe._tempLightBound, h = qe._tempVector30;
            i.transformV3ToV3(a._transform.position, r, h), h.z *= -1, this._shrinkSphereLightZPerspective(e, t, h, a.range, l) && this._shrinkXYByRadiusPerspective(h, a.range, l, s, o) && this._placePointLightToClusters(n, l);
        }
        _updateSpotLightPerspective(e, t, r, a, n, s, o) {
            var l = qe._tempLightBound, h = qe._tempVector30, _ = qe._tempVector31, d = qe._tempVector34, c = a._transform.position, u = a.range;
            a._transform.worldMatrix.getForward(_), i.normalize(_, _), i.scale(_, u, d), i.add(c, d, d), 
            i.transformV3ToV3(c, r, h), i.transformV3ToV3(d, r, d), h.z *= -1, d.z *= -1;
            var m = a.spotAngle / 2 * Math.PI / 180;
            if (this._shrinkSpotLightZPerspective(e, t, h, d, u, m, l) && this._shrinkXYByRadiusPerspective(h, u, l, s, o)) {
                var f = qe._tempVector33;
                f.x = d.x - h.x, f.y = d.y - h.y, f.z = d.z - h.z, i.normalize(f, f), this._shrinkSpotXYByConePerspective(h, f, u, m, l, s, o), 
                this._placeSpotLightToClusters(n, l);
            }
        }
        _updatePointLightOrth(e, t, r, a, n, s, o) {
            var l = qe._tempLightBound, h = qe._tempVector30;
            i.transformV3ToV3(s._transform.position, n, h), h.z *= -1, this._shrinkSphereLightByBoundOrth(e, t, r, a, h, s.range, l) && this._placePointLightToClusters(o, l);
        }
        _updateSpotLightOrth(e, t, r, a, n, s, o) {
            var l = qe._tempLightBound, h = qe._tempVector30, _ = qe._tempVector31, d = qe._tempVector34, c = s._transform.position, u = s.range;
            s._transform.worldMatrix.getForward(_), i.normalize(_, _), i.scale(_, u, d), i.add(c, d, d), 
            i.transformV3ToV3(c, n, h), i.transformV3ToV3(d, n, d), h.z *= -1, d.z *= -1;
            var m = s.spotAngle / 2 * Math.PI / 180;
            this._shrinkSpotLightByBoundOrth(e, t, r, a, h, d, u, m, l) && this._placeSpotLightToClusters(o, l);
        }
        update(e, t) {
            this._updateMark++;
            var r = e.nearPlane;
            this._depthSliceParam.x = d._config.lightClusterCount.z / Math.log2(e.farPlane / r), 
            this._depthSliceParam.y = Math.log2(r) * this._depthSliceParam.x;
            var a = e.nearPlane, n = e.farPlane, i = e.viewMatrix, s = t._directionLights._length, o = t._pointLights, l = o._length, h = o._elements, _ = t._spotLights, c = _._length, u = _._elements;
            if (e.orthographic) {
                for (var m = e.orthographicVerticalSize / 2, f = m * e.aspectRatio, E = 0; E < l; E++, 
                s++) this._updatePointLightOrth(f, m, a, n, i, h[E], s);
                for (E = 0; E < c; E++, s++) this._updateSpotLightOrth(f, m, a, n, i, u[E], s);
            } else {
                e._updateClusterPlaneXY();
                var T = e._clusterXPlanes, p = e._clusterYPlanes;
                for (E = 0; E < l; E++, s++) this._updatePointLightPerspective(a, n, i, h[E], s, T, p);
                for (E = 0; E < c; E++, s++) this._updateSpotLightPerspective(a, n, i, u[E], s, T, p);
            }
            if (l + c > 0) {
                for (var g = this._xSlices, S = this._ySlices, R = this._zSlices, v = g * S * 4, x = v * R, A = this._clusterPixels, I = A.length, M = this._clusterDatas, D = this._updateMark, L = !0, y = 0; y < R; y++) for (var C = 0; C < S; C++) for (var O = 0; O < g; O++) {
                    var N = M[y][C][O], P = 4 * (O + C * g + y * g * S);
                    if (N.updateMark !== D) A[P] = 0, A[P + 1] = 0; else if (L) {
                        var w = N.indices, V = N.pointLightCount, B = N.spotLightCount, b = V + B;
                        if (x + b < I) {
                            A[P] = V, A[P + 1] = B, A[P + 2] = Math.floor(x / v), A[P + 3] = x % v;
                            for (E = 0; E < b; E++) A[x++] = w[E];
                        } else {
                            b = I - (x + b), V = Math.min(V, b), A[P] = V, A[P + 1] = Math.min(B, b - V), A[P + 2] = Math.floor(x / v), 
                            A[P + 3] = x % v;
                            for (E = 0; E < b; E++) A[x++] = w[E];
                            L = !1;
                        }
                    }
                }
                var F = this._clusterTexture.width;
                this._clusterTexture.setSubPixels(0, 0, F, Math.ceil(x / (4 * F)), A);
            }
        }
    }
    qe._tempVector30 = new i(), qe._tempVector31 = new i(), qe._tempVector32 = new i(), 
    qe._tempVector33 = new i(), qe._tempVector34 = new i(), qe._tempVector35 = new i(), 
    qe._tempVector36 = new i(), qe._tempVector37 = new i(), qe._tempLightBound = new class {}();
    class Qe {
        constructor() {
            this._coefficients = new Float32Array(27);
        }
        getCoefficient(e, t) {
            return this._coefficients[9 * e + t];
        }
        setCoefficient(e, t, r) {
            this._coefficients[9 * e + t] = r;
        }
        setCoefficients(e, t, r, a, n, i, s, o, l, h) {
            var _ = 9 * e;
            this._coefficients[_] = t, this._coefficients[++_] = r, this._coefficients[++_] = a, 
            this._coefficients[++_] = n, this._coefficients[++_] = i, this._coefficients[++_] = s, 
            this._coefficients[++_] = o, this._coefficients[++_] = l, this._coefficients[++_] = h;
        }
        cloneTo(e) {
            if (this !== e) for (var t = this._coefficients, r = e._coefficients, a = 0; a < 27; a++) r[a] = t[a];
        }
    }
    Qe._default = new Qe();
    class Ke {
        constructor() {
            this._pressedSprite = null, this._pressedLoopCount = -1, this.sprite = null, this.mousePositionX = 0, 
            this.mousePositionY = 0;
        }
    }
    class Je {
        constructor() {
            this._indexInList = -1, this._identifier = -1, this._position = new a();
        }
        get identifier() {
            return this._identifier;
        }
        get position() {
            return this._position;
        }
        _getIndexInList() {
            return this._indexInList;
        }
        _setIndexInList(e) {
            this._indexInList = e;
        }
    }
    class $e {
        constructor(e, t = 0) {
            this.normal = e, this.distance = t;
        }
        static createPlaneBy3P(e, t, r, a) {
            var n = t.x - e.x, i = t.y - e.y, s = t.z - e.z, o = r.x - e.x, l = r.y - e.y, h = r.z - e.z, _ = i * h - s * l, d = s * o - n * h, c = n * l - i * o, u = 1 / Math.sqrt(_ * _ + d * d + c * c), m = _ * u, f = d * u, E = c * u, T = a.normal;
            T.x = m, T.y = f, T.z = E, a.distance = -(m * e.x + f * e.y + E * e.z);
        }
        normalize() {
            var e = this.normal.x, t = this.normal.y, r = this.normal.z, a = 1 / Math.sqrt(e * e + t * t + r * r);
            this.normal.x = e * a, this.normal.y = t * a, this.normal.z = r * a, this.distance *= a;
        }
        cloneTo(e) {
            var t = e;
            this.normal.cloneTo(t.normal), t.distance = this.distance;
        }
        clone() {
            var e = new $e(new i());
            return this.cloneTo(e), e;
        }
    }
    $e.PlaneIntersectionType_Back = 0, $e.PlaneIntersectionType_Front = 1, $e.PlaneIntersectionType_Intersecting = 2;
    class et {
        constructor(e, t) {
            this.origin = e, this.direction = t;
        }
    }
    class tt {}
    tt.Disjoint = 0, tt.Contains = 1, tt.Intersects = 2;
    class rt {
        constructor() {}
        static distancePlaneToPoint(e, t) {
            return i.dot(e.normal, t) - e.distance;
        }
        static distanceBoxToPoint(e, t) {
            var r = e.min, a = r.x, n = r.y, i = r.z, s = e.max, o = s.x, l = s.y, h = s.z, _ = t.x, d = t.y, c = t.z, u = 0;
            return _ < a && (u += (a - _) * (a - _)), _ > o && (u += (o - _) * (o - _)), d < n && (u += (n - d) * (n - d)), 
            d > l && (u += (l - d) * (l - d)), c < i && (u += (i - c) * (i - c)), c > h && (u += (h - c) * (h - c)), 
            Math.sqrt(u);
        }
        static distanceBoxToBox(e, t) {
            var r, a = e.min, n = a.x, i = a.y, s = a.z, o = e.max, l = o.x, h = o.y, _ = o.z, d = t.min, c = d.x, u = d.y, m = d.z, f = t.max, E = f.x, T = f.y, p = f.z, g = 0;
            return n > E ? g += (r = n - E) * r : c > l && (g += (r = c - l) * r), i > T ? g += (r = i - T) * r : u > h && (g += (r = u - h) * r), 
            s > p ? g += (r = s - p) * r : m > _ && (g += (r = m - _) * r), Math.sqrt(g);
        }
        static distanceSphereToPoint(e, t) {
            var r = Math.sqrt(i.distanceSquared(e.center, t));
            return r -= e.radius, Math.max(r, 0);
        }
        static distanceSphereToSphere(e, t) {
            var r = Math.sqrt(i.distanceSquared(e.center, t.center));
            return r -= e.radius + t.radius, Math.max(r, 0);
        }
        static intersectsRayAndTriangleRD(e, t, a, n, i) {
            var s = e.origin, o = s.x, l = s.y, h = s.z, _ = e.direction, d = _.x, c = _.y, u = _.z, m = t.x, f = t.y, E = t.z, T = a.x, p = a.y, g = a.z, S = n.x, R = n.y, v = n.z, x = rt._tempV30.x, A = rt._tempV30.y, I = rt._tempV30.z;
            x = T - m, A = p - f, I = g - E;
            var M = rt._tempV31.x, D = rt._tempV31.y, L = rt._tempV31.z;
            M = S - m, D = R - f, L = v - E;
            var y = rt._tempV32.x, C = rt._tempV32.y, O = rt._tempV32.z, N = x * (y = c * L - u * D) + A * (C = u * M - d * L) + I * (O = d * D - c * M);
            if (r.isZero(N)) return !1;
            var P = 1 / N, w = rt._tempV33.x, V = rt._tempV33.y, B = rt._tempV33.z, b = (w = o - m) * y + (V = l - f) * C + (B = h - E) * O;
            if ((b *= P) < 0 || b > 1) return !1;
            var F = rt._tempV34.x, U = rt._tempV34.y, H = rt._tempV34.z, G = d * (F = V * I - B * A) + c * (U = B * x - w * I) + u * (H = w * A - V * x);
            if ((G *= P) < 0 || b + G > 1) return !1;
            var z = M * F + D * U + L * H;
            return !((z *= P) < 0);
        }
        static intersectsRayAndTriangleRP(e, t, r, a, n) {
            return rt.intersectsRayAndTriangleRD(e, t, r, a, void 0) ? (i.scale(e.direction, void 0, rt._tempV30), 
            i.add(e.origin, rt._tempV30, n), !0) : (n = i._ZERO, !1);
        }
        static intersectsRayAndPoint(e, t) {
            i.subtract(e.origin, t, rt._tempV30);
            var a = i.dot(rt._tempV30, e.direction), n = i.dot(rt._tempV30, rt._tempV30) - r.zeroTolerance;
            return !(n > 0 && a > 0) && !(a * a - n < 0);
        }
        static intersectsRayAndRay(e, t, a) {
            var n = e.origin, s = n.x, o = n.y, l = n.z, h = e.direction, _ = h.x, d = h.y, c = h.z, u = t.origin, m = u.x, f = u.y, E = u.z, T = t.direction, p = T.x, g = T.y, S = T.z;
            i.cross(h, T, rt._tempV30);
            var R = rt._tempV30, v = i.scalarLength(rt._tempV30);
            if (r.isZero(v) && r.nearEqual(m, s) && r.nearEqual(f, o) && r.nearEqual(E, l)) return !0;
            v *= v;
            var x = m - s, A = f - o, I = E - l, M = p, D = g, L = S, y = R.x, C = R.y, O = R.z, N = x * D * O + A * L * y + I * M * C - x * L * C - A * M * O - I * D * y;
            M = _, D = d, L = c;
            var P = N / v;
            i.scale(h, P, rt._tempV30), i.scale(T, P, rt._tempV31), i.add(n, rt._tempV30, rt._tempV32), 
            i.add(u, rt._tempV31, rt._tempV33);
            var w = rt._tempV32, V = rt._tempV33;
            return !!(r.nearEqual(V.x, w.x) && r.nearEqual(V.y, w.y) && r.nearEqual(V.z, w.z));
        }
        static intersectsPlaneAndTriangle(e, t, r, a) {
            var n = rt.intersectsPlaneAndPoint(e, t), i = rt.intersectsPlaneAndPoint(e, r), s = rt.intersectsPlaneAndPoint(e, a);
            return n == $e.PlaneIntersectionType_Front && i == $e.PlaneIntersectionType_Front && s == $e.PlaneIntersectionType_Front ? $e.PlaneIntersectionType_Front : n == $e.PlaneIntersectionType_Back && i == $e.PlaneIntersectionType_Back && s == $e.PlaneIntersectionType_Back ? $e.PlaneIntersectionType_Back : $e.PlaneIntersectionType_Intersecting;
        }
        static intersectsRayAndPlaneRD(e, t) {
            var a = t.normal, n = i.dot(a, e.direction);
            if (Math.abs(n) < r.zeroTolerance) return -1;
            var s = i.dot(a, e.origin), o = (-t.distance - s) / n;
            if (o < 0) {
                if (o < -r.zeroTolerance) return -1;
                o = 0;
            }
            return o;
        }
        static intersectsRayAndPlaneRP(e, t, r) {
            var a = rt.intersectsRayAndPlaneRD(e, t);
            if (-1 == a) return r.setValue(0, 0, 0), !1;
            var n = rt._tempV30;
            return i.scale(e.direction, a, n), i.add(e.origin, n, r), !0;
        }
        static intersectsRayAndBoxRD(e, t) {
            var a = e.origin, n = a.x, i = a.y, s = a.z, o = e.direction, l = o.x, h = o.y, _ = o.z, d = t.min, c = d.x, u = d.y, m = d.z, f = t.max, E = f.x, T = f.y, p = f.z, g = 0, S = r.MaxValue;
            if (r.isZero(l)) {
                if (n < c || n > E) return -1;
            } else {
                var R = 1 / l, v = (c - n) * R, x = (E - n) * R;
                if (v > x) {
                    var A = v;
                    v = x, x = A;
                }
                if ((g = Math.max(v, g)) > (S = Math.min(x, S))) return -1;
            }
            if (r.isZero(h)) {
                if (i < u || i > T) return -1;
            } else {
                var I = 1 / h, M = (u - i) * I, D = (T - i) * I;
                if (M > D) {
                    var L = M;
                    M = D, D = L;
                }
                if ((g = Math.max(M, g)) > (S = Math.min(D, S))) return -1;
            }
            if (r.isZero(_)) {
                if (s < m || s > p) return -1;
            } else {
                var y = 1 / _, C = (m - s) * y, O = (p - s) * y;
                if (C > O) {
                    var N = C;
                    C = O, O = N;
                }
                if ((g = Math.max(C, g)) > (S = Math.min(O, S))) return -1;
            }
            return g;
        }
        static intersectsRayAndBoxRP(e, t, r) {
            var a = rt.intersectsRayAndBoxRD(e, t);
            return -1 === a ? (i._ZERO.cloneTo(r), a) : (i.scale(e.direction, a, rt._tempV30), 
            i.add(e.origin, rt._tempV30, rt._tempV31), rt._tempV31.cloneTo(r), a);
        }
        static intersectsRayAndSphereRD(e, t) {
            var r = t.radius;
            i.subtract(e.origin, t.center, rt._tempV30);
            var a = i.dot(rt._tempV30, e.direction), n = i.dot(rt._tempV30, rt._tempV30) - r * r;
            if (n > 0 && a > 0) return -1;
            var s = a * a - n;
            if (s < 0) return -1;
            var o = -a - Math.sqrt(s);
            return o < 0 && (o = 0), o;
        }
        static intersectsRayAndSphereRP(e, t, r) {
            var a = rt.intersectsRayAndSphereRD(e, t);
            return -1 === a ? (i._ZERO.cloneTo(r), a) : (i.scale(e.direction, a, rt._tempV30), 
            i.add(e.origin, rt._tempV30, rt._tempV31), rt._tempV31.cloneTo(r), a);
        }
        static intersectsSphereAndTriangle(e, t, r, a) {
            var n = e.center, s = e.radius;
            return rt.closestPointPointTriangle(n, t, r, a, rt._tempV30), i.subtract(rt._tempV30, n, rt._tempV31), 
            i.dot(rt._tempV31, rt._tempV31) <= s * s;
        }
        static intersectsPlaneAndPoint(e, t) {
            var r = i.dot(e.normal, t) + e.distance;
            return r > 0 ? $e.PlaneIntersectionType_Front : r < 0 ? $e.PlaneIntersectionType_Back : $e.PlaneIntersectionType_Intersecting;
        }
        static intersectsPlaneAndPlane(e, t) {
            i.cross(e.normal, t.normal, rt._tempV30);
            var a = i.dot(rt._tempV30, rt._tempV30);
            return !r.isZero(a);
        }
        static intersectsPlaneAndPlaneRL(e, t, a) {
            var n = e.normal, s = t.normal;
            i.cross(n, s, rt._tempV34);
            var o = i.dot(rt._tempV34, rt._tempV34);
            return !r.isZero(o) && (i.scale(s, e.distance, rt._tempV30), i.scale(n, t.distance, rt._tempV31), 
            i.subtract(rt._tempV30, rt._tempV31, rt._tempV32), i.cross(rt._tempV32, rt._tempV34, rt._tempV33), 
            i.normalize(rt._tempV34, rt._tempV34), !0);
        }
        static intersectsPlaneAndBox(e, t) {
            var r = e.distance, a = e.normal, n = a.x, s = a.y, o = a.z, l = t.min, h = l.x, _ = l.y, d = l.z, c = t.max, u = c.x, m = c.y, f = c.z;
            rt._tempV30.x = n > 0 ? h : u, rt._tempV30.y = s > 0 ? _ : m, rt._tempV30.z = o > 0 ? d : f, 
            rt._tempV31.x = n > 0 ? u : h, rt._tempV31.y = s > 0 ? m : _, rt._tempV31.z = o > 0 ? f : d;
            var E = i.dot(a, rt._tempV30);
            return E + r > 0 ? $e.PlaneIntersectionType_Front : (E = i.dot(a, rt._tempV31)) + r < 0 ? $e.PlaneIntersectionType_Back : $e.PlaneIntersectionType_Intersecting;
        }
        static intersectsPlaneAndSphere(e, t) {
            var r = t.radius, a = i.dot(e.normal, t.center) + e.distance;
            return a > r ? $e.PlaneIntersectionType_Front : a < -r ? $e.PlaneIntersectionType_Back : $e.PlaneIntersectionType_Intersecting;
        }
        static intersectsBoxAndBox(e, t) {
            var r = e.min, a = e.max, n = t.min, i = t.max;
            return !(r.x > i.x || n.x > a.x) && (!(r.y > i.y || n.y > a.y) && !(r.z > i.z || n.z > a.z));
        }
        static intersectsBoxAndSphere(e, t) {
            var r = t.center, a = t.radius, n = rt._tempV30;
            return i.Clamp(r, e.min, e.max, n), i.distanceSquared(r, n) <= a * a;
        }
        static intersectsSphereAndSphere(e, t) {
            var r = e.radius + t.radius;
            return i.distanceSquared(e.center, t.center) <= r * r;
        }
        static boxContainsPoint(e, t) {
            var r = e.min, a = e.max;
            return r.x <= t.x && a.x >= t.x && r.y <= t.y && a.y >= t.y && r.z <= t.z && a.z >= t.z ? tt.Contains : tt.Disjoint;
        }
        static boxContainsBox(e, t) {
            var r = e.min, a = r.x, n = r.y, i = r.z, s = e.max, o = s.x, l = s.y, h = s.z, _ = t.min, d = _.x, c = _.y, u = _.z, m = t.max, f = m.x, E = m.y, T = m.z;
            return o < d || a > f ? tt.Disjoint : l < c || n > E ? tt.Disjoint : h < u || i > T ? tt.Disjoint : a <= d && f <= o && n <= c && E <= l && i <= u && T <= h ? tt.Contains : tt.Intersects;
        }
        static boxContainsSphere(e, t) {
            var r = e.min, a = r.x, n = r.y, s = r.z, o = e.max, l = o.x, h = o.y, _ = o.z, d = t.center, c = d.x, u = d.y, m = d.z, f = t.radius;
            return i.Clamp(d, r, o, rt._tempV30), i.distanceSquared(d, rt._tempV30) > f * f ? tt.Disjoint : a + f <= c && c <= l - f && l - a > f && n + f <= u && u <= h - f && h - n > f && s + f <= m && m <= _ - f && _ - s > f ? tt.Contains : tt.Intersects;
        }
        static sphereContainsPoint(e, t) {
            return i.distanceSquared(t, e.center) <= e.radius * e.radius ? tt.Contains : tt.Disjoint;
        }
        static sphereContainsTriangle(e, t, r, a) {
            var n = rt.sphereContainsPoint(e, t), i = rt.sphereContainsPoint(e, r), s = rt.sphereContainsPoint(e, a);
            return n == tt.Contains && i == tt.Contains && s == tt.Contains ? tt.Contains : rt.intersectsSphereAndTriangle(e, t, r, a) ? tt.Intersects : tt.Disjoint;
        }
        static sphereContainsBox(e, t) {
            var r = e.center, a = r.x, n = r.y, s = r.z, o = e.radius, l = t.min, h = l.x, _ = l.y, d = l.z, c = t.max, u = c.x, m = c.y, f = c.z, E = rt._tempV30;
            E.x, E.y, E.z;
            if (!rt.intersectsBoxAndSphere(t, e)) return tt.Disjoint;
            var T = o * o;
            return a - h, n - m, s - f, i.scalarLengthSquared(rt._tempV30) > T ? tt.Intersects : (a - u, 
            n - m, s - f, i.scalarLengthSquared(rt._tempV30) > T ? tt.Intersects : (a - u, n - _, 
            s - f, i.scalarLengthSquared(rt._tempV30) > T ? tt.Intersects : (a - h, n - _, s - f, 
            i.scalarLengthSquared(rt._tempV30) > T ? tt.Intersects : (a - h, n - m, s - d, i.scalarLengthSquared(rt._tempV30) > T ? tt.Intersects : (a - u, 
            n - m, s - d, i.scalarLengthSquared(rt._tempV30) > T ? tt.Intersects : (a - u, n - _, 
            s - d, i.scalarLengthSquared(rt._tempV30) > T ? tt.Intersects : (a - h, n - _, s - d, 
            i.scalarLengthSquared(rt._tempV30) > T ? tt.Intersects : tt.Contains)))))));
        }
        static sphereContainsSphere(e, t) {
            var r = e.radius, a = t.radius, n = i.distance(e.center, t.center);
            return r + a < n ? tt.Disjoint : r - a < n ? tt.Intersects : tt.Contains;
        }
        static closestPointPointTriangle(e, t, r, a, n) {
            i.subtract(r, t, rt._tempV30), i.subtract(a, t, rt._tempV31), i.subtract(e, t, rt._tempV32), 
            i.subtract(e, r, rt._tempV33), i.subtract(e, a, rt._tempV34);
            var s = i.dot(rt._tempV30, rt._tempV32), o = i.dot(rt._tempV31, rt._tempV32), l = i.dot(rt._tempV30, rt._tempV33), h = i.dot(rt._tempV31, rt._tempV33), _ = i.dot(rt._tempV30, rt._tempV34), d = i.dot(rt._tempV31, rt._tempV34);
            if (s <= 0 && o <= 0) t.cloneTo(n); else if (l >= 0 && h <= l) r.cloneTo(n); else {
                var c = s * h - l * o;
                if (c <= 0 && s >= 0 && l <= 0) {
                    var u = s / (s - l);
                    return i.scale(rt._tempV30, u, n), void i.add(t, n, n);
                }
                if (d >= 0 && _ <= d) a.cloneTo(n); else {
                    var m = _ * o - s * d;
                    if (m <= 0 && o >= 0 && d <= 0) {
                        var f = o / (o - d);
                        return i.scale(rt._tempV31, f, n), void i.add(t, n, n);
                    }
                    var E = l * d - _ * h;
                    if (E <= 0 && h - l >= 0 && _ - d >= 0) {
                        var T = (h - l) / (h - l + (_ - d));
                        return i.subtract(a, r, n), i.scale(n, T, n), void i.add(r, n, n);
                    }
                    var p = 1 / (E + m + c), g = m * p, S = c * p;
                    i.scale(rt._tempV30, g, rt._tempV35), i.scale(rt._tempV31, S, rt._tempV36), i.add(rt._tempV35, rt._tempV36, n), 
                    i.add(t, n, n);
                }
            }
        }
        static closestPointPlanePoint(e, t, r) {
            var a = e.normal, n = i.dot(a, t) - e.distance;
            i.scale(a, n, rt._tempV30), i.subtract(t, rt._tempV30, r);
        }
        static closestPointBoxPoint(e, t, r) {
            i.max(t, e.min, rt._tempV30), i.min(rt._tempV30, e.max, r);
        }
        static closestPointSpherePoint(e, t, r) {
            var a = e.center;
            i.subtract(t, a, r), i.normalize(r, r), i.scale(r, e.radius, r), i.add(r, a, r);
        }
        static closestPointSphereSphere(e, t, r) {
            var a = e.center;
            i.subtract(t.center, a, r), i.normalize(r, r), i.scale(r, e.radius, r), i.add(r, a, r);
        }
    }
    rt._tempV30 = new i(), rt._tempV31 = new i(), rt._tempV32 = new i(), rt._tempV33 = new i(), 
    rt._tempV34 = new i(), rt._tempV35 = new i(), rt._tempV36 = new i(), (Se = e.FrustumCorner || (e.FrustumCorner = {}))[Se.FarBottomLeft = 0] = "FarBottomLeft", 
    Se[Se.FarTopLeft = 1] = "FarTopLeft", Se[Se.FarTopRight = 2] = "FarTopRight", Se[Se.FarBottomRight = 3] = "FarBottomRight", 
    Se[Se.nearBottomLeft = 4] = "nearBottomLeft", Se[Se.nearTopLeft = 5] = "nearTopLeft", 
    Se[Se.nearTopRight = 6] = "nearTopRight", Se[Se.nearBottomRight = 7] = "nearBottomRight", 
    Se[Se.unknown = 8] = "unknown";
    class at {
        constructor(e) {
            this._matrix = e, this._near = new $e(new i()), this._far = new $e(new i()), this._left = new $e(new i()), 
            this._right = new $e(new i()), this._top = new $e(new i()), this._bottom = new $e(new i()), 
            at.getPlanesFromMatrix(this._matrix, this._near, this._far, this._left, this._right, this._top, this._bottom);
        }
        static getPlanesFromMatrix(e, t, r, a, n, i, s) {
            var o = e.elements, l = o[0], h = o[1], _ = o[2], d = o[3], c = o[4], u = o[5], m = o[6], f = o[7], E = o[8], T = o[9], p = o[10], g = o[11], S = o[12], R = o[13], v = o[14], x = o[15], A = t.normal;
            A.x = _, A.y = m, A.z = p, t.distance = v, t.normalize();
            var I = r.normal;
            I.x = d - _, I.y = f - m, I.z = g - p, r.distance = x - v, r.normalize();
            var M = a.normal;
            M.x = d + l, M.y = f + c, M.z = g + E, a.distance = x + S, a.normalize();
            var D = n.normal;
            D.x = d - l, D.y = f - c, D.z = g - E, n.distance = x - S, n.normalize();
            var L = i.normal;
            L.x = d - h, L.y = f - u, L.z = g - T, i.distance = x - R, i.normalize();
            var y = s.normal;
            y.x = d + h, y.y = f + u, y.z = g + T, s.distance = x + R, s.normalize();
        }
        get matrix() {
            return this._matrix;
        }
        set matrix(e) {
            e.cloneTo(this._matrix), at.getPlanesFromMatrix(this._matrix, this._near, this._far, this._left, this._right, this._top, this._bottom);
        }
        get near() {
            return this._near;
        }
        get far() {
            return this._far;
        }
        get left() {
            return this._left;
        }
        get right() {
            return this._right;
        }
        get top() {
            return this._top;
        }
        get bottom() {
            return this._bottom;
        }
        equalsBoundFrustum(e) {
            return this._matrix.equalsOtherMatrix(e.matrix);
        }
        equalsObj(e) {
            if (e instanceof at) {
                var t = e;
                return this.equalsBoundFrustum(t);
            }
            return !1;
        }
        getPlane(e) {
            switch (e) {
              case 0:
                return this._near;

              case 1:
                return this._far;

              case 2:
                return this._left;

              case 3:
                return this._right;

              case 4:
                return this._top;

              case 5:
                return this._bottom;

              default:
                return null;
            }
        }
        static get3PlaneInterPoint(e, t, r, a) {
            var n = e.normal, s = t.normal, o = r.normal;
            i.cross(s, o, at._tempV30), i.cross(o, n, at._tempV31), i.cross(n, s, at._tempV32);
            var l = i.dot(n, at._tempV30), h = i.dot(s, at._tempV31), _ = i.dot(o, at._tempV32);
            i.scale(at._tempV30, -e.distance / l, at._tempV33), i.scale(at._tempV31, -t.distance / h, at._tempV34), 
            i.scale(at._tempV32, -r.distance / _, at._tempV35), i.add(at._tempV33, at._tempV34, at._tempV36), 
            i.add(at._tempV35, at._tempV36, a);
        }
        getCorners(t) {
            at.get3PlaneInterPoint(this._near, this._bottom, this._right, t[e.FrustumCorner.nearBottomRight]), 
            at.get3PlaneInterPoint(this._near, this._top, this._right, t[e.FrustumCorner.nearTopRight]), 
            at.get3PlaneInterPoint(this._near, this._top, this._left, t[e.FrustumCorner.nearTopLeft]), 
            at.get3PlaneInterPoint(this._near, this._bottom, this._left, t[e.FrustumCorner.nearBottomLeft]), 
            at.get3PlaneInterPoint(this._far, this._bottom, this._right, t[e.FrustumCorner.FarBottomRight]), 
            at.get3PlaneInterPoint(this._far, this._top, this._right, t[e.FrustumCorner.FarTopRight]), 
            at.get3PlaneInterPoint(this._far, this._top, this._left, t[e.FrustumCorner.FarTopLeft]), 
            at.get3PlaneInterPoint(this._far, this._bottom, this._left, t[e.FrustumCorner.FarBottomLeft]);
        }
        containsPoint(e) {
            for (var t = $e.PlaneIntersectionType_Front, r = $e.PlaneIntersectionType_Front, a = 0; a < 6; a++) {
                switch (a) {
                  case 0:
                    r = rt.intersectsPlaneAndPoint(this._near, e);
                    break;

                  case 1:
                    r = rt.intersectsPlaneAndPoint(this._far, e);
                    break;

                  case 2:
                    r = rt.intersectsPlaneAndPoint(this._left, e);
                    break;

                  case 3:
                    r = rt.intersectsPlaneAndPoint(this._right, e);
                    break;

                  case 4:
                    r = rt.intersectsPlaneAndPoint(this._top, e);
                    break;

                  case 5:
                    r = rt.intersectsPlaneAndPoint(this._bottom, e);
                }
                switch (r) {
                  case $e.PlaneIntersectionType_Back:
                    return tt.Disjoint;

                  case $e.PlaneIntersectionType_Intersecting:
                    t = $e.PlaneIntersectionType_Intersecting;
                }
            }
            switch (t) {
              case $e.PlaneIntersectionType_Intersecting:
                return tt.Intersects;

              default:
                return tt.Contains;
            }
        }
        intersects(e) {
            var t = e.min, r = e.max, a = t.x, n = t.y, i = t.z, s = r.x, o = r.y, l = r.z, h = this._near.normal;
            if (this._near.distance + h.x * (h.x < 0 ? a : s) + h.y * (h.y < 0 ? n : o) + h.z * (h.z < 0 ? i : l) < 0) return !1;
            var _ = this._left.normal;
            if (this._left.distance + _.x * (_.x < 0 ? a : s) + _.y * (_.y < 0 ? n : o) + _.z * (_.z < 0 ? i : l) < 0) return !1;
            var d = this._right.normal;
            if (this._right.distance + d.x * (d.x < 0 ? a : s) + d.y * (d.y < 0 ? n : o) + d.z * (d.z < 0 ? i : l) < 0) return !1;
            var c = this._bottom.normal;
            if (this._bottom.distance + c.x * (c.x < 0 ? a : s) + c.y * (c.y < 0 ? n : o) + c.z * (c.z < 0 ? i : l) < 0) return !1;
            var u = this._top.normal;
            if (this._top.distance + u.x * (u.x < 0 ? a : s) + u.y * (u.y < 0 ? n : o) + u.z * (u.z < 0 ? i : l) < 0) return !1;
            var m = this._far.normal;
            return !(this._far.distance + m.x * (m.x < 0 ? a : s) + m.y * (m.y < 0 ? n : o) + m.z * (m.z < 0 ? i : l) < 0);
        }
        containsBoundBox(e) {
            for (var t = at._tempV30, r = at._tempV31, a = e.min, n = e.max, i = tt.Contains, s = 0; s < 6; s++) {
                var o = this.getPlane(s), l = o.normal;
                if (l.x >= 0 ? (t.x = n.x, r.x = a.x) : (t.x = a.x, r.x = n.x), l.y >= 0 ? (t.y = n.y, 
                r.y = a.y) : (t.y = a.y, r.y = n.y), l.z >= 0 ? (t.z = n.z, r.z = a.z) : (t.z = a.z, 
                r.z = n.z), rt.intersectsPlaneAndPoint(o, t) === $e.PlaneIntersectionType_Back) return tt.Disjoint;
                rt.intersectsPlaneAndPoint(o, r) === $e.PlaneIntersectionType_Back && (i = tt.Intersects);
            }
            return i;
        }
        containsBoundSphere(e) {
            for (var t = $e.PlaneIntersectionType_Front, r = $e.PlaneIntersectionType_Front, a = 0; a < 6; a++) {
                switch (a) {
                  case 0:
                    r = rt.intersectsPlaneAndSphere(this._near, e);
                    break;

                  case 1:
                    r = rt.intersectsPlaneAndSphere(this._far, e);
                    break;

                  case 2:
                    r = rt.intersectsPlaneAndSphere(this._left, e);
                    break;

                  case 3:
                    r = rt.intersectsPlaneAndSphere(this._right, e);
                    break;

                  case 4:
                    r = rt.intersectsPlaneAndSphere(this._top, e);
                    break;

                  case 5:
                    r = rt.intersectsPlaneAndSphere(this._bottom, e);
                }
                switch (r) {
                  case $e.PlaneIntersectionType_Back:
                    return tt.Disjoint;

                  case $e.PlaneIntersectionType_Intersecting:
                    t = $e.PlaneIntersectionType_Intersecting;
                }
            }
            switch (t) {
              case $e.PlaneIntersectionType_Intersecting:
                return tt.Intersects;

              default:
                return tt.Contains;
            }
        }
    }
    at._tempV30 = new i(), at._tempV31 = new i(), at._tempV32 = new i(), at._tempV33 = new i(), 
    at._tempV34 = new i(), at._tempV35 = new i(), at._tempV36 = new i();
    class nt {
        constructor(e, t, r, a) {
            this.minDepth = 0, this.maxDepth = 1, this.x = e, this.y = t, this.width = r, this.height = a;
        }
        project(e, t, r) {
            i.transformV3ToV4(e, t, r);
            var a = r.x, n = r.y, s = r.z, o = r.w;
            1 !== o && (a /= o, n /= o, s /= o), r.x = .5 * (a + 1) * this.width + this.x, r.y = .5 * (1 - n) * this.height + this.y, 
            r.z = s * (this.maxDepth - this.minDepth) + this.minDepth;
        }
        unprojectFromMat(e, t, r) {
            var a = t.elements;
            r.x = (e.x - this.x) / this.width * 2 - 1, r.y = -((e.y - this.y) / this.height * 2 - 1), 
            r.z = (e.z - this.minDepth) / (this.maxDepth - this.minDepth);
            var n = r.x * a[3] + r.y * a[7] + r.z * a[11] + a[15];
            i.transformV3ToV3(r, t, r), 1 !== n && (r.x = r.x / n, r.y = r.y / n, r.z = r.z / n);
        }
        unprojectFromWVP(e, t, r, a, n) {
            b.multiply(t, r, nt._tempMatrix4x4), a && b.multiply(nt._tempMatrix4x4, a, nt._tempMatrix4x4), 
            nt._tempMatrix4x4.invert(nt._tempMatrix4x4), this.unprojectFromMat(e, nt._tempMatrix4x4, n);
        }
        cloneTo(e) {
            e.x = this.x, e.y = this.y, e.width = this.width, e.height = this.height, e.minDepth = this.minDepth, 
            e.maxDepth = this.maxDepth;
        }
    }
    nt._tempMatrix4x4 = new b();
    class it {
        constructor() {}
        static calculateCursorRay(e, t, r, a, n, s) {
            var o = e.x, l = e.y, h = it._tempVector30, _ = h;
            _.x = o, _.y = l, _.z = t.minDepth;
            var d = it._tempVector31, c = d;
            c.x = o, c.y = l, c.z = t.maxDepth;
            var u = s.origin, m = it._tempVector32;
            t.unprojectFromWVP(h, r, a, n, u), t.unprojectFromWVP(d, r, a, n, m);
            var f = s.direction;
            f.x = m.x - u.x, f.y = m.y - u.y, f.z = m.z - u.z, i.normalize(s.direction, s.direction);
        }
        static rayIntersectsTriangle(e, t, r, a) {
            var n = it._tempVector30, s = it._tempVector31;
            i.subtract(r, t, n), i.subtract(a, t, s);
            var o, l = it._tempVector32;
            if (i.cross(e.direction, s, l), (o = i.dot(n, l)) > -Number.MIN_VALUE && o < Number.MIN_VALUE) return Number.NaN;
            var h, _ = 1 / o, d = it._tempVector33;
            if (i.subtract(e.origin, t, d), h = i.dot(d, l), (h *= _) < 0 || h > 1) return Number.NaN;
            var c, u, m = it._tempVector34;
            return i.cross(d, n, m), c = i.dot(e.direction, m), (c *= _) < 0 || h + c > 1 ? Number.NaN : (u = i.dot(s, m), 
            (u *= _) < 0 ? Number.NaN : u);
        }
    }
    it._tempVector30 = new i(), it._tempVector31 = new i(), it._tempVector32 = new i(), 
    it._tempVector33 = new i(), it._tempVector34 = new i(), (Re = e.IndexFormat || (e.IndexFormat = {}))[Re.UInt8 = 0] = "UInt8", 
    Re[Re.UInt16 = 1] = "UInt16", Re[Re.UInt32 = 2] = "UInt32";
    class st extends t.Buffer {
        constructor(r, a, n = 35044, i = !1) {
            switch (super(), this._indexType = r, this._indexCount = a, this._bufferUsage = n, 
            this._bufferType = t.LayaGL.instance.ELEMENT_ARRAY_BUFFER, this._canRead = i, r) {
              case e.IndexFormat.UInt32:
                this._indexTypeByteCount = 4;
                break;

              case e.IndexFormat.UInt16:
                this._indexTypeByteCount = 2;
                break;

              case e.IndexFormat.UInt8:
                this._indexTypeByteCount = 1;
                break;

              default:
                throw new Error("unidentification index type.");
            }
            var s = this._indexTypeByteCount * a, o = t.BufferStateBase._curBindedBufferState;
            if (this._byteLength = s, o ? o._bindedIndexBuffer === this ? t.LayaGL.instance.bufferData(this._bufferType, s, this._bufferUsage) : (o.unBind(), 
            this.bind(), t.LayaGL.instance.bufferData(this._bufferType, s, this._bufferUsage), 
            o.bind()) : (this.bind(), t.LayaGL.instance.bufferData(this._bufferType, s, this._bufferUsage)), 
            i) switch (r) {
              case e.IndexFormat.UInt32:
                this._buffer = new Uint32Array(a);
                break;

              case e.IndexFormat.UInt16:
                this._buffer = new Uint16Array(a);
                break;

              case e.IndexFormat.UInt8:
                this._buffer = new Uint8Array(a);
            }
        }
        get indexType() {
            return this._indexType;
        }
        get indexTypeByteCount() {
            return this._indexTypeByteCount;
        }
        get indexCount() {
            return this._indexCount;
        }
        get canRead() {
            return this._canRead;
        }
        _bindForVAO() {
            if (!t.BufferStateBase._curBindedBufferState) throw "IndexBuffer3D: must bind current BufferState.";
            var e = t.LayaGL.instance;
            e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this._glBuffer);
        }
        bind() {
            if (t.BufferStateBase._curBindedBufferState) throw "IndexBuffer3D: must unbind current BufferState.";
            if (t.Buffer._bindedIndexBuffer !== this._glBuffer) {
                var e = t.LayaGL.instance;
                return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this._glBuffer), t.Buffer._bindedIndexBuffer = this._glBuffer, 
                !0;
            }
            return !1;
        }
        setData(r, a = 0, n = 0, i = 4294967295) {
            var s = this._indexTypeByteCount;
            if (0 !== n || 4294967295 !== i) switch (this._indexType) {
              case e.IndexFormat.UInt32:
                r = new Uint32Array(r.buffer, n * s, i);
                break;

              case e.IndexFormat.UInt16:
                r = new Uint16Array(r.buffer, n * s, i);
                break;

              case e.IndexFormat.UInt8:
                r = new Uint8Array(r.buffer, n * s, i);
            }
            var o = t.BufferStateBase._curBindedBufferState;
            if (o ? o._bindedIndexBuffer === this ? t.LayaGL.instance.bufferSubData(this._bufferType, a * s, r) : (o.unBind(), 
            this.bind(), t.LayaGL.instance.bufferSubData(this._bufferType, a * s, r), o.bind()) : (this.bind(), 
            t.LayaGL.instance.bufferSubData(this._bufferType, a * s, r)), this._canRead) if (0 !== a || 0 !== n || 4294967295 !== i) {
                var l = this._buffer.length - a;
                i > l && (i = l);
                for (var h = 0; h < i; h++) this._buffer[a + h] = r[h];
            } else this._buffer = r;
        }
        getData() {
            if (this._canRead) return this._buffer;
            throw new Error("Can't read data from VertexBuffer with only write flag!");
        }
        destroy() {
            super.destroy(), this._buffer = null, this._byteLength = 0, this._indexCount = 0;
        }
    }
    class ot {
        constructor() {}
        _render(e) {}
    }
    class lt extends ot {
        constructor() {
            super();
            var r = t.LayaGL.instance, a = new Float32Array([ -1, 1, -1, 1, 1, -1, 1, 1, 1, -1, 1, 1, -1, -1, -1, 1, -1, -1, 1, -1, 1, -1, -1, 1 ]), n = new Uint8Array([ 0, 1, 2, 2, 3, 0, 4, 7, 6, 6, 5, 4, 0, 3, 7, 7, 4, 0, 1, 5, 6, 6, 2, 1, 3, 2, 6, 6, 7, 3, 0, 4, 5, 5, 1, 0 ]), i = ie.getVertexDeclaration("POSITION");
            this._vertexBuffer = new V(8 * i.vertexStride, r.STATIC_DRAW, !1), this._vertexBuffer.vertexDeclaration = i, 
            this._indexBuffer = new st(e.IndexFormat.UInt8, 36, r.STATIC_DRAW, !1), this._vertexBuffer.setData(a.buffer), 
            this._indexBuffer.setData(n);
            var s = new G();
            s.bind(), s.applyVertexBuffer(this._vertexBuffer), s.applyIndexBuffer(this._indexBuffer), 
            s.unBind(), this._bufferState = s;
        }
        static __init__() {
            lt.instance = new lt();
        }
        _render(e) {
            var r = t.LayaGL.instance;
            r.drawElements(r.TRIANGLES, 36, r.UNSIGNED_BYTE, 0), t.Stat.trianglesFaces += 12, 
            t.Stat.renderBatches++;
        }
    }
    class ht {
        constructor() {
            this._mesh = lt.instance;
        }
        get material() {
            return this._material;
        }
        set material(e) {
            this._material !== e && (this._material && this._material._removeReference(), e && e._addReference(), 
            this._material = e);
        }
        get mesh() {
            return this._mesh;
        }
        set mesh(e) {
            this._mesh !== e && (this._mesh = e);
        }
        _isAvailable() {
            return !(!this._material || !this._mesh);
        }
        _render(e) {
            if (this._material && this._mesh) {
                var r = t.LayaGL.instance, a = e.scene, n = e.cameraShaderValue, s = e.camera, o = F._SET_RUNTIME_VALUE_MODE_REFERENCE_;
                t.ILaya.Render.supportWebGLPlusRendering && F.setRuntimeValueMode(!1), t.WebGLContext.setCullFace(r, !1), 
                t.WebGLContext.setDepthFunc(r, r.LEQUAL), t.WebGLContext.setDepthMask(r, !1);
                var l = ht._compileDefine;
                this._material._shaderValues._defineDatas.cloneTo(l);
                var h = e.shader = this._material._shader.getSubShaderAt(0)._passes[0].withCompile(l), _ = h.bind(), d = t.Stat.loopCount !== h._uploadMark, c = h._uploadScene !== a || d;
                (c || _) && (h.uploadUniforms(h._sceneUniformParamsMap, a._shaderValues, c), h._uploadScene = a);
                var u = h._uploadCameraShaderValue !== n || d;
                if (u || _) {
                    var m = ht._tempMatrix0, f = ht._tempMatrix1;
                    s.viewMatrix.cloneTo(m), s.projectionMatrix.cloneTo(f), m.setTranslationVector(i._ZERO), 
                    s.orthographic && b.createPerspective(s.fieldOfView, s.aspectRatio, s.nearPlane, s.farPlane, f);
                    var E = 1 / Math.tan(3.1416 * s.fieldOfView / 180 * .5);
                    f.elements[0] = E / s.aspectRatio, f.elements[5] = E, f.elements[10] = 1e-6 - 1, 
                    f.elements[11] = -1, f.elements[14] = -0, s._applyViewProject(e, m, f), h.uploadUniforms(h._cameraUniformParamsMap, n, u), 
                    h._uploadCameraShaderValue = n;
                }
                var T = h._uploadMaterial !== this._material || d;
                (T || _) && (h.uploadUniforms(h._materialUniformParamsMap, this._material._shaderValues, T), 
                h._uploadMaterial = this._material), this._mesh._bufferState.bind(), this._mesh._render(e), 
                t.ILaya.Render.supportWebGLPlusRendering && F.setRuntimeValueMode(o), t.WebGLContext.setDepthFunc(r, r.LESS), 
                t.WebGLContext.setDepthMask(r, !0), s._applyViewProject(e, s.viewMatrix, s.projectionMatrix);
            }
        }
        destroy() {
            this._material && (this._material._removeReference(), this._material = null);
        }
    }
    ht._tempMatrix0 = new b(), ht._tempMatrix1 = new b(), ht._compileDefine = new w();
    class _t extends $ {
        constructor(e = .3, t = 1e3) {
            super(), this._skyRenderer = new ht(), this._forward = new i(), this._up = new i(), 
            this.clearColor = new n(100 / 255, 149 / 255, 237 / 255, 1), this._shaderValues = new F(null), 
            this._fieldOfView = 60, this._useUserProjectionMatrix = !1, this._orthographic = !1, 
            this._orthographicVerticalSize = 10, this.renderingOrder = 0, this._nearPlane = e, 
            this._farPlane = t, this.cullingMask = 2147483647, this.useOcclusionCulling = !0;
        }
        get skyRenderer() {
            return this._skyRenderer;
        }
        get fieldOfView() {
            return this._fieldOfView;
        }
        set fieldOfView(e) {
            this._fieldOfView = e, this._calculateProjectionMatrix();
        }
        get nearPlane() {
            return this._nearPlane;
        }
        set nearPlane(e) {
            this._nearPlane = e, this._calculateProjectionMatrix();
        }
        get farPlane() {
            return this._farPlane;
        }
        set farPlane(e) {
            this._farPlane = e, this._calculateProjectionMatrix();
        }
        get orthographic() {
            return this._orthographic;
        }
        set orthographic(e) {
            this._orthographic = e, this._calculateProjectionMatrix();
        }
        get orthographicVerticalSize() {
            return this._orthographicVerticalSize;
        }
        set orthographicVerticalSize(e) {
            this._orthographicVerticalSize = e, this._calculateProjectionMatrix();
        }
        get renderingOrder() {
            return this._renderingOrder;
        }
        set renderingOrder(e) {
            this._renderingOrder = e, this._sortCamerasByRenderingOrder();
        }
        _sortCamerasByRenderingOrder() {
            if (this.displayedInStage) for (var e = this.scene._cameraPool, t = e.length - 1, r = 0; r < t; r++) if (e[r].renderingOrder > e[t].renderingOrder) {
                var a = e[r];
                e[r] = e[t], e[t] = a;
            }
        }
        _calculateProjectionMatrix() {}
        _onScreenSizeChanged() {
            this._calculateProjectionMatrix();
        }
        _prepareCameraToRender() {
            var e = this._shaderValues;
            this.transform.getForward(this._forward), this.transform.getUp(this._up), e.setVector3(_t.CAMERAPOS, this.transform.position), 
            e.setVector3(_t.CAMERADIRECTION, this._forward), e.setVector3(_t.CAMERAUP, this._up);
        }
        render(e = null, t = null) {}
        addLayer(e) {
            this.cullingMask |= Math.pow(2, e);
        }
        removeLayer(e) {
            this.cullingMask &= ~Math.pow(2, e);
        }
        addAllLayers() {
            this.cullingMask = 2147483647;
        }
        removeAllLayers() {
            this.cullingMask = 0;
        }
        resetProjectionMatrix() {
            this._useUserProjectionMatrix = !1, this._calculateProjectionMatrix();
        }
        _onActive() {
            this._scene._addCamera(this), super._onActive();
        }
        _onInActive() {
            this._scene._removeCamera(this), super._onInActive();
        }
        _parse(e, r) {
            super._parse(e, r), this.orthographic = e.orthographic, void 0 !== e.orthographicVerticalSize && (this.orthographicVerticalSize = e.orthographicVerticalSize), 
            void 0 !== e.fieldOfView && (this.fieldOfView = e.fieldOfView), this.nearPlane = e.nearPlane, 
            this.farPlane = e.farPlane;
            var a = e.clearColor;
            this.clearColor = new n(a[0], a[1], a[2], a[3]);
            var i = e.skyboxMaterial;
            i && (this._skyRenderer.material = t.Loader.getRes(i.path));
        }
        destroy(e = !0) {
            this._skyRenderer.destroy(), this._skyRenderer = null, t.Laya.stage.off(t.Event.RESIZE, this, this._onScreenSizeChanged), 
            super.destroy(e);
        }
        _create() {
            return new _t();
        }
    }
    _t._tempMatrix4x40 = new b(), _t.CAMERAPOS = Z.propertyNameToID("u_CameraPos"), 
    _t.VIEWMATRIX = Z.propertyNameToID("u_View"), _t.PROJECTMATRIX = Z.propertyNameToID("u_Projection"), 
    _t.VIEWPROJECTMATRIX = Z.propertyNameToID("u_ViewProjection"), _t.CAMERADIRECTION = Z.propertyNameToID("u_CameraDirection"), 
    _t.CAMERAUP = Z.propertyNameToID("u_CameraUp"), _t.VIEWPORT = Z.propertyNameToID("u_Viewport"), 
    _t.PROJECTION_PARAMS = Z.propertyNameToID("u_ProjectionParams"), _t.DEPTHTEXTURE = Z.propertyNameToID("u_CameraDepthTexture"), 
    _t.DEPTHNORMALSTEXTURE = Z.propertyNameToID("u_CameraDepthNormalsTexture"), _t.DEPTHZBUFFERPARAMS = Z.propertyNameToID("u_ZBufferParams"), 
    _t.SHADERDEFINE_DEPTH = Z.getDefineByName("DEPTHMAP"), _t.SHADERDEFINE_DEPTHNORMALS = Z.getDefineByName("DEPTHNORMALSMAP"), 
    _t.RENDERINGTYPE_DEFERREDLIGHTING = "DEFERREDLIGHTING", _t.RENDERINGTYPE_FORWARDRENDERING = "FORWARDRENDERING", 
    _t._invertYScaleMatrix = new b(1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), 
    _t._invertYProjectionMatrix = new b(), _t._invertYProjectionViewMatrix = new b(), 
    _t.CLEARFLAG_SOLIDCOLOR = 0, _t.CLEARFLAG_SKY = 1, _t.CLEARFLAG_DEPTHONLY = 2, _t.CLEARFLAG_NONE = 3, 
    (ve = e.ShadowMode || (e.ShadowMode = {}))[ve.None = 0] = "None", ve[ve.Hard = 1] = "Hard", 
    ve[ve.SoftLow = 2] = "SoftLow", ve[ve.SoftHigh = 3] = "SoftHigh";
    class dt {}
    (xe = e.LightType || (e.LightType = {}))[xe.Directional = 0] = "Directional", xe[xe.Spot = 1] = "Spot", 
    xe[xe.Point = 2] = "Point";
    class ct extends $ {
        constructor() {
            super(), this._shadowMode = e.ShadowMode.None, this._isAlternate = !1, this._shadowResolution = 2048, 
            this._shadowDistance = 50, this._shadowDepthBias = 1, this._shadowNormalBias = 1, 
            this._shadowNearPlane = .1, this._shadowStrength = 1, this._lightWoldMatrix = new b(), 
            this._intensity = 1, this._intensityColor = new i(), this.color = new i(1, 1, 1), 
            this._lightmapBakedType = ct.LIGHTMAPBAKEDTYPE_REALTIME;
        }
        get intensity() {
            return this._intensity;
        }
        set intensity(e) {
            this._intensity = e;
        }
        get shadowMode() {
            return this._shadowMode;
        }
        set shadowMode(e) {
            this._shadowMode = e;
        }
        get shadowDistance() {
            return this._shadowDistance;
        }
        set shadowDistance(e) {
            this._shadowDistance = e;
        }
        get shadowResolution() {
            return this._shadowResolution;
        }
        set shadowResolution(e) {
            this._shadowResolution = e;
        }
        get shadowDepthBias() {
            return this._shadowDepthBias;
        }
        set shadowDepthBias(e) {
            this._shadowDepthBias = e;
        }
        get shadowNormalBias() {
            return this._shadowNormalBias;
        }
        set shadowNormalBias(e) {
            this._shadowNormalBias = e;
        }
        get shadowStrength() {
            return this._shadowStrength;
        }
        set shadowStrength(e) {
            this._shadowStrength = e;
        }
        get shadowNearPlane() {
            return this._shadowNearPlane;
        }
        set shadowNearPlane(e) {
            this._shadowNearPlane = e;
        }
        get lightmapBakedType() {
            return this._lightmapBakedType;
        }
        set lightmapBakedType(e) {
            this._lightmapBakedType !== e && (this._lightmapBakedType = e, this.activeInHierarchy && (e !== ct.LIGHTMAPBAKEDTYPE_BAKED ? this._addToScene() : this._removeFromScene()));
        }
        get lightWorldMatrix() {
            var e = this.transform.position, t = this.transform.rotation;
            return b.createAffineTransformation(e, t, i._ONE, this._lightWoldMatrix), this._lightWoldMatrix;
        }
        _parse(e, t) {
            super._parse(e, t);
            var r = e.color;
            this.color.fromArray(r), this.intensity = e.intensity, this.lightmapBakedType = e.lightmapBakedType;
        }
        _cloneTo(e, t, r) {
            super._cloneTo(e, t, r);
            var a = e;
            a.color = this.color.clone(), a.intensity = this.intensity, a.lightmapBakedType = this.lightmapBakedType;
        }
        _addToScene() {
            var e = this._scene, t = d._config.maxLightCount;
            e._lightCount < t ? (e._lightCount++, this._addToLightQueue(), this._isAlternate = !1) : (e._alternateLights.add(this), 
            this._isAlternate = !0, console.warn("LightSprite:light count has large than maxLightCount,the latest added light will be ignore."));
        }
        _removeFromScene() {
            var e = this._scene;
            if (this._isAlternate) e._alternateLights.remove(this); else if (e._lightCount--, 
            this._removeFromLightQueue(), e._alternateLights._length > 0) {
                var t = e._alternateLights.shift();
                t._addToLightQueue(), t._isAlternate = !1, e._lightCount++;
            }
        }
        _addToLightQueue() {}
        _removeFromLightQueue() {}
        _onActive() {
            super._onActive(), this.lightmapBakedType !== ct.LIGHTMAPBAKEDTYPE_BAKED && this._addToScene();
        }
        _onInActive() {
            super._onInActive(), this.lightmapBakedType !== ct.LIGHTMAPBAKEDTYPE_BAKED && this._removeFromScene();
        }
        _create() {
            return new ct();
        }
        get diffuseColor() {
            return console.log("LightSprite: discard property,please use color property instead."), 
            this.color;
        }
        set diffuseColor(e) {
            console.log("LightSprite: discard property,please use color property instead."), 
            this.color = e;
        }
    }
    ct.LIGHTMAPBAKEDTYPE_REALTIME = 0, ct.LIGHTMAPBAKEDTYPE_MIXED = 1, ct.LIGHTMAPBAKEDTYPE_BAKED = 2, 
    (Ae = e.ShadowCascadesMode || (e.ShadowCascadesMode = {}))[Ae.NoCascades = 0] = "NoCascades", 
    Ae[Ae.TwoCascades = 1] = "TwoCascades", Ae[Ae.FourCascades = 2] = "FourCascades", 
    function(e) {
        e[e.Near = 0] = "Near", e[e.Far = 1] = "Far", e[e.Left = 2] = "Left", e[e.Right = 3] = "Right", 
        e[e.Bottom = 4] = "Bottom", e[e.Top = 5] = "Top";
    }(Ie || (Ie = {}));
    class ut {
        static supportShadow() {
            return t.LayaGL.layaGPUInstance._isWebGL2 || t.SystemUtils.supportRenderTextureFormat(t.RenderTextureFormat.Depth);
        }
        static init() {
            t.LayaGL.layaGPUInstance._isWebGL2 ? ut._shadowTextureFormat = t.RenderTextureFormat.ShadowMap : ut._shadowTextureFormat = t.RenderTextureFormat.Depth;
        }
        static getTemporaryShadowTexture(e, r, a) {
            var n = P.createFromPool(e, r, ut._shadowTextureFormat, a);
            return n.filterMode = t.FilterMode.Bilinear, n.wrapModeU = t.WarpMode.Clamp, n.wrapModeV = t.WarpMode.Clamp, 
            n;
        }
        static getShadowBias(t, a, n, i) {
            var s;
            t._lightType == e.LightType.Directional ? s = 2 / a.elements[0] : t._lightType == e.LightType.Spot ? s = Math.tan(.5 * t.spotAngle * r.Deg2Rad) * t.range : (console.warn("ShadowUtils:Only spot and directional shadow casters are supported now."), 
            s = 0);
            var o = s / n, l = -t._shadowDepthBias * o, h = -t._shadowNormalBias * o;
            if (t.shadowMode == e.ShadowMode.SoftHigh) {
                const e = 2.5;
                l *= e, h *= e;
            }
            i.setValue(l, h, 0, 0);
        }
        static getCameraFrustumPlanes(e, t) {
            at.getPlanesFromMatrix(e, t[Ie.Near], t[Ie.Far], t[Ie.Left], t[Ie.Right], t[Ie.Top], t[Ie.Bottom]);
        }
        static getFarWithRadius(e, t) {
            return Math.sqrt(e * e / t);
        }
        static getCascadesSplitDistance(t, r, a, n, i, s, o, l) {
            l[0] = a;
            var h = n - a, _ = Math.tan(.5 * i), d = 1 + _ * _ * (s * s + 1);
            switch (o) {
              case e.ShadowCascadesMode.NoCascades:
                l[1] = ut.getFarWithRadius(n, d);
                break;

              case e.ShadowCascadesMode.TwoCascades:
                l[1] = ut.getFarWithRadius(a + h * t, d), l[2] = ut.getFarWithRadius(n, d);
                break;

              case e.ShadowCascadesMode.FourCascades:
                l[1] = ut.getFarWithRadius(a + h * r.x, d), l[2] = ut.getFarWithRadius(a + h * r.y, d), 
                l[3] = ut.getFarWithRadius(a + h * r.z, d), l[4] = ut.getFarWithRadius(n, d);
            }
        }
        static applySliceTransform(e, t, r, a, n) {
            var i = ut._tempMatrix0.elements, s = 1 / t, o = 1 / r;
            i[0] = e.resolution * s, i[5] = e.resolution * o, i[12] = e.offsetX * s, i[13] = e.offsetY * o, 
            i[1] = i[2] = i[2] = i[4] = i[6] = i[7] = i[8] = i[9] = i[11] = i[14] = 0, i[10] = i[15] = 1;
            var l = 16 * a;
            A._mulMatrixArray(i, n, l, n, l);
        }
        static getDirectionLightShadowCullPlanes(t, r, a, n, s, o) {
            var l = ut._frustumCorners, h = ut._backPlaneFaces, _ = ut._frustumPlaneNeighbors, d = ut._frustumTwoPlaneCorners, c = ut._edgePlanePoint2, u = o.cullPlanes, m = t[Ie.Near], f = t[Ie.Far], E = t[Ie.Left], T = t[Ie.Right], p = t[Ie.Bottom], g = t[Ie.Top], S = a[r] - n, R = ut._adjustNearPlane, v = ut._adjustFarPlane;
            m.normal.cloneTo(R.normal), f.normal.cloneTo(v.normal), R.distance = m.distance - S, 
            v.distance = Math.min(-m.distance + o.sphereCenterZ + o.splitBoundSphere.radius, f.distance), 
            at.get3PlaneInterPoint(R, p, T, l[e.FrustumCorner.nearBottomRight]), at.get3PlaneInterPoint(R, g, T, l[e.FrustumCorner.nearTopRight]), 
            at.get3PlaneInterPoint(R, g, E, l[e.FrustumCorner.nearTopLeft]), at.get3PlaneInterPoint(R, p, E, l[e.FrustumCorner.nearBottomLeft]), 
            at.get3PlaneInterPoint(v, p, T, l[e.FrustumCorner.FarBottomRight]), at.get3PlaneInterPoint(v, g, T, l[e.FrustumCorner.FarTopRight]), 
            at.get3PlaneInterPoint(v, g, E, l[e.FrustumCorner.FarTopLeft]), at.get3PlaneInterPoint(v, p, E, l[e.FrustumCorner.FarBottomLeft]);
            for (var x = 0, A = 0; A < 6; A++) {
                var I;
                switch (A) {
                  case Ie.Near:
                    I = R;
                    break;

                  case Ie.Far:
                    I = v;
                    break;

                  default:
                    I = t[A];
                }
                i.dot(I.normal, s) < 0 && (I.cloneTo(u[x]), h[x] = A, x++);
            }
            var M = x;
            for (A = 0; A < x; A++) for (var D = h[A], L = _[D], y = 0; y < 4; y++) {
                for (var C = L[y], O = !0, N = 0; N < x; N++) if (C == h[N]) {
                    O = !1;
                    break;
                }
                if (O) {
                    var P = d[D][C], w = l[P[0]], V = l[P[1]];
                    i.add(w, s, c), $e.createPlaneBy3P(w, V, c, u[M++]);
                }
            }
            o.cullPlaneCount = M;
        }
        static getBoundSphereByFrustum(e, t, r, a, n, s, o) {
            var l, h, _ = Math.sqrt(1 + a * a) * Math.tan(r / 2), d = _ * _, c = t - e, u = t + e;
            d > c / u ? (l = t, h = t * _) : (l = .5 * u * (1 + d), h = .5 * Math.sqrt(c * c + 2 * (t * t + e * e) * d + u * u * d * d));
            var m = o.center;
            return o.radius = h, i.scale(s, l, m), i.add(n, m, m), l;
        }
        static getMaxTileResolutionInAtlas(e, t, r) {
            for (var a = Math.min(e, t), n = Math.floor(e / a) * Math.floor(t / a); n < r; ) a = Math.floor(a >> 1), 
            n = Math.floor(e / a) * Math.floor(t / a);
            return a;
        }
        static getDirectionalLightMatrices(e, t, r, a, n, s, o, l) {
            var h = o.splitBoundSphere, _ = h.center, d = h.radius, c = s / 2, u = d * c / (c - ut.atlasBorderSize), m = 2 * u, f = s / m, E = m / s, T = Math.ceil(i.dot(_, e) * f) * E, p = Math.ceil(i.dot(_, t) * f) * E, g = i.dot(_, r);
            _.x = e.x * T + t.x * p + r.x * g, _.y = e.y * T + t.y * p + r.y * g, _.z = e.z * T + t.z * p + r.z * g;
            var S = o.position, R = o.viewMatrix, v = o.projectionMatrix, x = o.viewProjectMatrix;
            o.resolution = s, o.offsetX = a % 2 * s, o.offsetY = Math.floor(a / 2) * s, i.scale(r, d + n, S), 
            i.subtract(_, S, S), b.createLookAt(S, _, e, R), b.createOrthoOffCenter(-u, u, -u, u, 0, 2 * d + n, v), 
            b.multiply(v, R, x), A._mulMatrixArray(ut._shadowMapScaleOffsetMatrix.elements, x.elements, 0, l, 16 * a);
        }
        static getSpotLightShadowData(e, t, r, a, n, i) {
            var s = e.position = t.transform.position;
            e.resolution = r, i.setValue(1 / r, 1 / r, r, r), e.offsetX = 0, e.offsetY = 0;
            var o = t.lightWorldMatrix, l = e.viewMatrix, h = e.projectionMatrix, _ = e.viewProjectMatrix, d = e.cameraCullInfo.boundFrustum;
            o.invert(l), b.createPerspective(3.1416 * t.spotAngle / 180, 1, .1, t.range, h), 
            a.y = t.shadowStrength, b.multiply(h, l, _), d.matrix = _, _.cloneTo(n), e.cameraCullInfo.position = s;
        }
        static prepareShadowReceiverShaderValues(e, t, r, a, n, i, s, o, l) {
            if (i.setValue(1 / t, 1 / r, t, r), s.setValue(e._shadowStrength, 0, 0, 0), n > 1) {
                const e = 16;
                for (var h = n * e, _ = 4 * e; h < _; h++) o[h] = 0;
                for (h = 0; h < n; h++) {
                    var d = a[h].splitBoundSphere, c = d.center, u = d.radius, m = 4 * h;
                    l[m] = c.x, l[m + 1] = c.y, l[m + 2] = c.z, l[m + 3] = u * u;
                }
                const t = 4;
                for (h = n * t, _ = 4 * t; h < _; h++) l[h] = 0;
            }
        }
    }
    ut._tempMatrix0 = new b(), ut._shadowMapScaleOffsetMatrix = new b(.5, 0, 0, 0, 0, .5, 0, 0, 0, 0, 1, 0, .5, .5, 0, 1), 
    ut._frustumCorners = [ new i(), new i(), new i(), new i(), new i(), new i(), new i(), new i() ], 
    ut._adjustNearPlane = new $e(new i()), ut._adjustFarPlane = new $e(new i()), ut._backPlaneFaces = new Array(5), 
    ut._edgePlanePoint2 = new i(), ut._frustumPlaneNeighbors = [ [ Ie.Left, Ie.Right, Ie.Top, Ie.Bottom ], [ Ie.Left, Ie.Right, Ie.Top, Ie.Bottom ], [ Ie.Near, Ie.Far, Ie.Top, Ie.Bottom ], [ Ie.Near, Ie.Far, Ie.Top, Ie.Bottom ], [ Ie.Near, Ie.Far, Ie.Left, Ie.Right ], [ Ie.Near, Ie.Far, Ie.Left, Ie.Right ] ], 
    ut._frustumTwoPlaneCorners = [ [ [ e.FrustumCorner.unknown, e.FrustumCorner.unknown ], [ e.FrustumCorner.unknown, e.FrustumCorner.unknown ], [ e.FrustumCorner.nearBottomLeft, e.FrustumCorner.nearTopLeft ], [ e.FrustumCorner.nearTopRight, e.FrustumCorner.nearBottomRight ], [ e.FrustumCorner.nearBottomRight, e.FrustumCorner.nearBottomLeft ], [ e.FrustumCorner.nearTopLeft, e.FrustumCorner.nearTopRight ] ], [ [ e.FrustumCorner.unknown, e.FrustumCorner.unknown ], [ e.FrustumCorner.unknown, e.FrustumCorner.unknown ], [ e.FrustumCorner.FarTopLeft, e.FrustumCorner.FarBottomLeft ], [ e.FrustumCorner.FarBottomRight, e.FrustumCorner.FarTopRight ], [ e.FrustumCorner.FarBottomLeft, e.FrustumCorner.FarBottomRight ], [ e.FrustumCorner.FarTopRight, e.FrustumCorner.FarTopLeft ] ], [ [ e.FrustumCorner.nearTopLeft, e.FrustumCorner.nearBottomLeft ], [ e.FrustumCorner.FarBottomLeft, e.FrustumCorner.FarTopLeft ], [ e.FrustumCorner.unknown, e.FrustumCorner.unknown ], [ e.FrustumCorner.unknown, e.FrustumCorner.unknown ], [ e.FrustumCorner.nearBottomLeft, e.FrustumCorner.FarBottomLeft ], [ e.FrustumCorner.FarTopLeft, e.FrustumCorner.nearTopLeft ] ], [ [ e.FrustumCorner.nearBottomRight, e.FrustumCorner.nearTopRight ], [ e.FrustumCorner.FarTopRight, e.FrustumCorner.FarBottomRight ], [ e.FrustumCorner.unknown, e.FrustumCorner.unknown ], [ e.FrustumCorner.unknown, e.FrustumCorner.unknown ], [ e.FrustumCorner.FarBottomRight, e.FrustumCorner.nearBottomRight ], [ e.FrustumCorner.nearTopRight, e.FrustumCorner.FarTopRight ] ], [ [ e.FrustumCorner.nearBottomLeft, e.FrustumCorner.nearBottomRight ], [ e.FrustumCorner.FarBottomRight, e.FrustumCorner.FarBottomLeft ], [ e.FrustumCorner.FarBottomLeft, e.FrustumCorner.nearBottomLeft ], [ e.FrustumCorner.nearBottomRight, e.FrustumCorner.FarBottomRight ], [ e.FrustumCorner.unknown, e.FrustumCorner.unknown ], [ e.FrustumCorner.unknown, e.FrustumCorner.unknown ] ], [ [ e.FrustumCorner.nearTopRight, e.FrustumCorner.nearTopLeft ], [ e.FrustumCorner.FarTopLeft, e.FrustumCorner.FarTopRight ], [ e.FrustumCorner.nearTopLeft, e.FrustumCorner.FarTopLeft ], [ e.FrustumCorner.FarTopRight, e.FrustumCorner.nearTopRight ], [ e.FrustumCorner.unknown, e.FrustumCorner.unknown ], [ e.FrustumCorner.unknown, e.FrustumCorner.unknown ] ] ], 
    ut.atlasBorderSize = 4, (Me = e.DepthTextureMode || (e.DepthTextureMode = {}))[Me.None = 0] = "None", 
    Me[Me.Depth = 1] = "Depth", Me[Me.DepthNormals = 2] = "DepthNormals", Me[Me.MotionVectors = 4] = "MotionVectors";
    class mt {
        constructor() {
            this._zBufferParams = new n();
        }
        update(r, a) {
            switch (this._viewPort = r.viewport, this._camera = r, a) {
              case e.DepthTextureMode.Depth:
                r.depthTexture = this._depthTexture = P.createFromPool(this._viewPort.width, this._viewPort.height, t.RenderTextureFormat.Depth, t.RenderTextureDepthFormat.DEPTH_16);
                break;

              case e.DepthTextureMode.DepthNormals:
                r.depthNormalTexture = this._depthNormalsTexture = P.createFromPool(this._viewPort.width, this._viewPort.height, t.RenderTextureFormat.R8G8B8A8, t.RenderTextureDepthFormat.DEPTH_16);
                break;

              case e.DepthTextureMode.MotionVectors:
                break;

              default:
                throw "there is UnDefined type of DepthTextureMode";
            }
        }
        render(r, a) {
            var n = r.scene;
            switch (a) {
              case e.DepthTextureMode.Depth:
                var i = n._shaderValues;
                r.pipelineMode = "ShadowCaster", F.setRuntimeValueMode(!1), this._depthTexture._start(), 
                i.setVector(mt.DEFINE_SHADOW_BIAS, mt.SHADOW_BIAS);
                var s = t.LayaGL.instance, o = this._viewPort.x, l = this._viewPort.y;
                s.enable(s.SCISSOR_TEST), s.viewport(o, l, this._viewPort.width, this._viewPort.height), 
                s.scissor(o, l, this._viewPort.width, this._viewPort.height), s.clear(s.DEPTH_BUFFER_BIT), 
                n._opaqueQueue._render(r), this._depthTexture._end(), F.setRuntimeValueMode(!0), 
                this._setupDepthModeShaderValue(a, this._camera), r.pipelineMode = r.configPipeLineMode;
                break;

              case e.DepthTextureMode.DepthNormals:
                i = n._shaderValues;
                r.pipelineMode = "DepthNormal", F.setRuntimeValueMode(!1), this._depthNormalsTexture._start();
                s = t.LayaGL.instance, o = this._viewPort.x, l = this._viewPort.y;
                s.enable(s.SCISSOR_TEST), s.viewport(o, l, this._viewPort.width, this._viewPort.height), 
                s.scissor(o, l, this._viewPort.width, this._viewPort.height), s.clearColor(0, 0, 1, 0), 
                s.clear(s.DEPTH_BUFFER_BIT | s.COLOR_BUFFER_BIT), n._opaqueQueue._render(r), this._depthNormalsTexture._end(), 
                F.setRuntimeValueMode(!0), this._setupDepthModeShaderValue(a, this._camera), r.pipelineMode = r.configPipeLineMode;
                break;

              case e.DepthTextureMode.MotionVectors:
                break;

              default:
                throw "there is UnDefined type of DepthTextureMode";
            }
        }
        _setupDepthModeShaderValue(t, r) {
            switch (t) {
              case e.DepthTextureMode.Depth:
                var a = r.farPlane, n = r.nearPlane;
                this._zBufferParams.setValue(1 - a / n, a / n, (n - a) / (n * a), 1 / n), r._shaderValues.setVector(mt.DEFINE_SHADOW_BIAS, mt.SHADOW_BIAS), 
                r._shaderValues.setTexture(mt.DEPTHTEXTURE, this._depthTexture), r._shaderValues.setVector(mt.DEPTHZBUFFERPARAMS, this._zBufferParams);
                break;

              case e.DepthTextureMode.DepthNormals:
                r._shaderValues.setTexture(mt.DEPTHNORMALSTEXTURE, this._depthNormalsTexture);
                break;

              case e.DepthTextureMode.MotionVectors:
                break;

              default:
                throw "there is UnDefined type of DepthTextureMode";
            }
        }
        cleanUp() {
            this._depthTexture && P.recoverToPool(this._depthTexture), this._depthNormalsTexture && P.recoverToPool(this._depthNormalsTexture), 
            this._depthTexture = null, this._depthNormalsTexture = null;
        }
    }
    mt.SHADOW_BIAS = new n(), mt.DEFINE_SHADOW_BIAS = Z.propertyNameToID("u_ShadowBias"), 
    mt.DEPTHTEXTURE = Z.propertyNameToID("u_CameraDepthTexture"), mt.DEPTHNORMALSTEXTURE = Z.propertyNameToID("u_CameraDepthNormalsTexture"), 
    mt.DEPTHZBUFFERPARAMS = Z.propertyNameToID("u_ZBufferParams"), (De = e.CameraClearFlags || (e.CameraClearFlags = {}))[De.SolidColor = 0] = "SolidColor", 
    De[De.Sky = 1] = "Sky", De[De.DepthOnly = 2] = "DepthOnly", De[De.Nothing = 3] = "Nothing", 
    (Le = e.CameraEventFlags || (e.CameraEventFlags = {}))[Le.BeforeForwardOpaque = 0] = "BeforeForwardOpaque", 
    Le[Le.BeforeSkyBox = 2] = "BeforeSkyBox", Le[Le.BeforeTransparent = 4] = "BeforeTransparent", 
    Le[Le.BeforeImageEffect = 6] = "BeforeImageEffect", Le[Le.AfterEveryThing = 8] = "AfterEveryThing";
    class ft extends _t {
        constructor(r = 0, i = .3, s = 1e3) {
            super(i, s), this._updateViewMatrix = !0, this._postProcess = null, this._enableHDR = !1, 
            this._viewportParams = new n(), this._projectionParams = new n(), this._needBuiltInRenderTexture = !1, 
            this._offScreenRenderTexture = null, this._internalRenderTexture = null, this._internalCommandBuffer = new oe(), 
            this._cameraEventCommandBuffer = {}, this._clusterPlaneCacheFlag = new a(-1, -1), 
            this._screenOffsetScale = new n(), this.enableRender = !0, this.clearFlag = e.CameraClearFlags.SolidColor, 
            this._viewMatrix = new b(), this._projectionMatrix = new b(), this._projectionViewMatrix = new b(), 
            this._viewport = new nt(0, 0, 0, 0), this._normalizedViewport = new nt(0, 0, 1, 1), 
            this._rayViewport = new nt(0, 0, 0, 0), this._aspectRatio = r, this._boundFrustum = new at(new b()), 
            this._calculateProjectionMatrix(), t.Laya.stage.on(t.Event.RESIZE, this, this._onScreenSizeChanged), 
            this.transform.on(t.Event.TRANSFORM_CHANGED, this, this._onTransformChanged);
        }
        static drawRenderTextureByScene(e, r, a, n = null, i = null) {
            e.renderTarget != a && (e.renderTarget && P.recoverToPool(e.renderTarget), e.renderTarget = a);
            var s = e.viewport, o = e._needInternalRenderTexture(), l = N._instance;
            r = l.scene = r;
            l.pipelineMode = l.configPipeLineMode, o ? (e._internalRenderTexture = P.createFromPool(s.width, s.height, e._getRenderTextureFormat(), t.RenderTextureDepthFormat.DEPTH_16), 
            e._internalRenderTexture.filterMode = t.FilterMode.Bilinear) : e._internalRenderTexture = null;
            var h = e._renderShadowMap(r, l);
            return e._preRenderMainPass(l, r, o, s), e._renderMainPass(l, s, r, n, i, o), e._aftRenderMainPass(h), 
            e.renderTarget;
        }
        get aspectRatio() {
            if (0 === this._aspectRatio) {
                var e = this.viewport;
                return e.width / e.height;
            }
            return this._aspectRatio;
        }
        set aspectRatio(e) {
            if (e < 0) throw new Error("Camera: the aspect ratio has to be a positive real number.");
            this._aspectRatio = e, this._calculateProjectionMatrix();
        }
        get viewport() {
            return this._offScreenRenderTexture ? this._calculationViewport(this._normalizedViewport, this._offScreenRenderTexture.width, this._offScreenRenderTexture.height) : this._calculationViewport(this._normalizedViewport, N.clientWidth, N.clientHeight), 
            this._viewport;
        }
        set viewport(e) {
            var t, r;
            this._offScreenRenderTexture ? (t = this._offScreenRenderTexture.width, r = this._offScreenRenderTexture.height) : (t = N.clientWidth, 
            r = N.clientHeight), this._normalizedViewport.x = e.x / t, this._normalizedViewport.y = e.y / r, 
            this._normalizedViewport.width = e.width / t, this._normalizedViewport.height = e.height / r, 
            this._calculationViewport(this._normalizedViewport, t, r), this._calculateProjectionMatrix();
        }
        get normalizedViewport() {
            return this._normalizedViewport;
        }
        set normalizedViewport(e) {
            var t, r;
            this._offScreenRenderTexture ? (t = this._offScreenRenderTexture.width, r = this._offScreenRenderTexture.height) : (t = N.clientWidth, 
            r = N.clientHeight), this._normalizedViewport !== e && e.cloneTo(this._normalizedViewport), 
            this._calculationViewport(e, t, r), this._calculateProjectionMatrix();
        }
        get viewMatrix() {
            if (this._updateViewMatrix) {
                var e = this.transform.getWorldLossyScale(), t = e.x, r = e.y, a = e.z, n = this._viewMatrix.elements;
                this.transform.worldMatrix.cloneTo(this._viewMatrix), n[0] /= t, n[1] /= t, n[2] /= t, 
                n[4] /= r, n[5] /= r, n[6] /= r, n[8] /= a, n[9] /= a, n[10] /= a, this._viewMatrix.invert(this._viewMatrix), 
                this._updateViewMatrix = !1;
            }
            return this._viewMatrix;
        }
        get projectionMatrix() {
            return this._projectionMatrix;
        }
        set projectionMatrix(e) {
            this._projectionMatrix = e, this._useUserProjectionMatrix = !0;
        }
        get projectionViewMatrix() {
            return b.multiply(this.projectionMatrix, this.viewMatrix, this._projectionViewMatrix), 
            this._projectionViewMatrix;
        }
        get boundFrustum() {
            return this._boundFrustum.matrix = this.projectionViewMatrix, this._boundFrustum;
        }
        get renderTarget() {
            return this._offScreenRenderTexture;
        }
        set renderTarget(e) {
            var t = this._offScreenRenderTexture;
            t !== e && (t && (t._isCameraTarget = !1), e && (e._isCameraTarget = !0), this._offScreenRenderTexture = e, 
            this._calculateProjectionMatrix());
        }
        get postProcess() {
            return this._postProcess;
        }
        set postProcess(e) {
            this._postProcess = e, e && e && e._init(this);
        }
        get enableHDR() {
            return this._enableHDR;
        }
        set enableHDR(e) {
            !e || t.SystemUtils.supportRenderTextureFormat(t.RenderTextureFormat.R16G16B16A16) ? this._enableHDR = e : console.warn("Camera:can't enable HDR in this device.");
        }
        get enableBuiltInRenderTexture() {
            return this._needBuiltInRenderTexture;
        }
        set enableBuiltInRenderTexture(e) {
            this._needBuiltInRenderTexture = e;
        }
        get depthTextureMode() {
            return this._depthTextureMode;
        }
        set depthTextureMode(e) {
            this._depthTextureMode = e;
        }
        _calculationViewport(e, t, r) {
            var a = e.x * t, n = e.y * r, i = a + Math.max(e.width * t, 0), s = n + Math.max(e.height * r, 0), o = Math.ceil(a), l = Math.ceil(n), h = Math.floor(i), _ = Math.floor(s), d = o - a >= .5 ? Math.floor(a) : o, c = l - n >= .5 ? Math.floor(n) : l, u = i - h >= .5 ? Math.ceil(i) : h, m = s - _ >= .5 ? Math.ceil(s) : _;
            this._viewport.x = d, this._viewport.y = c, this._viewport.width = u - d, this._viewport.height = m - c;
        }
        _calculateProjectionMatrix() {
            if (!this._useUserProjectionMatrix) if (this._orthographic) {
                var e = .5 * this.orthographicVerticalSize, t = e * this.aspectRatio;
                b.createOrthoOffCenter(-t, t, -e, e, this.nearPlane, this.farPlane, this._projectionMatrix);
            } else b.createPerspective(3.1416 * this.fieldOfView / 180, this.aspectRatio, this.nearPlane, this.farPlane, this._projectionMatrix);
        }
        _isLayerVisible(e) {
            return 0 != (Math.pow(2, e) & this.cullingMask);
        }
        _onTransformChanged(e) {
            (e &= J.TRANSFORM_WORLDMATRIX) && (this._updateViewMatrix = !0);
        }
        _parse(e, t) {
            super._parse(e, t);
            var r = e.clearFlag;
            void 0 !== r && (this.clearFlag = r);
            var a = e.viewport;
            this.normalizedViewport = new nt(a[0], a[1], a[2], a[3]);
            var n = e.enableHDR;
            void 0 !== n && (this.enableHDR = n);
        }
        clone() {
            let e = super.clone();
            return e.clearFlag = this.clearFlag, e.viewport = this.viewport, this.normalizedViewport.cloneTo(e.normalizedViewport), 
            e.enableHDR = this.enableHDR, e.farPlane = this.farPlane, e.nearPlane = this.nearPlane, 
            e.fieldOfView = this.fieldOfView, e.orthographic = this.orthographic, e;
        }
        _getCanvasWidth() {
            return this._offScreenRenderTexture ? this._offScreenRenderTexture.width : N.clientWidth;
        }
        _getCanvasHeight() {
            return this._offScreenRenderTexture ? this._offScreenRenderTexture.height : N.clientHeight;
        }
        _getRenderTexture() {
            return this._internalRenderTexture || this._offScreenRenderTexture;
        }
        _needInternalRenderTexture() {
            return !!(this._postProcess && this._postProcess.enable || this._enableHDR || this._needBuiltInRenderTexture);
        }
        _getRenderTextureFormat() {
            return this._enableHDR ? t.RenderTextureFormat.R16G16B16A16 : t.RenderTextureFormat.R8G8B8;
        }
        _prepareCameraToRender() {
            super._prepareCameraToRender();
            var e = this.viewport;
            this._viewportParams.setValue(e.x, e.y, e.width, e.height), this._projectionParams.setValue(this._nearPlane, this._farPlane, N._instance.invertY ? -1 : 1, 1 / this.farPlane), 
            this._shaderValues.setVector(_t.VIEWPORT, this._viewportParams), this._shaderValues.setVector(_t.PROJECTION_PARAMS, this._projectionParams);
        }
        _applyViewProject(e, t, r) {
            var a, n = this._shaderValues;
            e.invertY ? (b.multiply(_t._invertYScaleMatrix, r, _t._invertYProjectionMatrix), 
            b.multiply(_t._invertYProjectionMatrix, t, _t._invertYProjectionViewMatrix), r = _t._invertYProjectionMatrix, 
            a = _t._invertYProjectionViewMatrix) : (b.multiply(r, t, this._projectionViewMatrix), 
            a = this._projectionViewMatrix), e.viewMatrix = t, e.projectionMatrix = r, e.projectionViewMatrix = a, 
            n.setMatrix4x4(_t.VIEWMATRIX, t), n.setMatrix4x4(_t.PROJECTMATRIX, r), n.setMatrix4x4(_t.VIEWPROJECTMATRIX, a);
        }
        _updateClusterPlaneXY() {
            var e = this.fieldOfView, t = this.aspectRatio;
            if (this._clusterPlaneCacheFlag.x !== e || this._clusterPlaneCacheFlag.y !== t) {
                var r = d._config.lightClusterCount, a = r.x, n = r.y, s = a + 1, o = n + 1, l = this._clusterXPlanes, h = this._clusterYPlanes;
                if (!l) {
                    l = this._clusterXPlanes = new Array(s), h = this._clusterYPlanes = new Array(o);
                    for (var _ = 0; _ < s; _++) l[_] = new i();
                    for (_ = 0; _ < o; _++) h[_] = new i();
                }
                var c = Math.tan(this.fieldOfView / 2 * Math.PI / 180), u = this.aspectRatio * c, m = 2 * c / a, f = 2 * u / n;
                for (_ = 0; _ < s; _++) {
                    var E = f * _ - u, T = 1 / Math.sqrt(1 + E * E);
                    l[_].setValue(T, 0, -E * T);
                }
                for (_ = 0; _ < o; _++) {
                    E = c - m * _;
                    var p = -1 / Math.sqrt(1 + E * E);
                    h[_].setValue(0, p, -E * p);
                }
                this._clusterPlaneCacheFlag.x = e, this._clusterPlaneCacheFlag.y = t;
            }
        }
        _applyCommandBuffer(e, r) {
            t.PerformancePlugin.begainSample(t.PerformancePlugin.PERFORMANCE_LAYA_3D_RENDER_RENDERCOMMANDBUFFER);
            var a = t.LayaGL.instance, n = this._cameraEventCommandBuffer[e];
            n && 0 != n.length && (n.forEach(function(e) {
                e._context = r, e._apply();
            }), P.currentActive && P.currentActive._end(), this._internalRenderTexture || this._offScreenRenderTexture ? this._getRenderTexture()._start() : a.bindFramebuffer(a.FRAMEBUFFER, null), 
            a.viewport(0, 0, r.viewport.width, r.viewport.height), t.PerformancePlugin.endSample(t.PerformancePlugin.PERFORMANCE_LAYA_3D_RENDER_RENDERCOMMANDBUFFER));
        }
        _renderShadowMap(r, a) {
            var n;
            t.PerformancePlugin.begainSample(t.PerformancePlugin.PERFORMANCE_LAYA_3D_RENDER_SHADOWMAP);
            var i = r._mainDirectionLight, s = i && i.shadowMode !== e.ShadowMode.None && ut.supportShadow();
            s ? (r._shaderValues.removeDefine(dt.SHADERDEFINE_SHADOW_SPOT), r._shaderValues.addDefine(dt.SHADERDEFINE_SHADOW), 
            (n = h.Scene3D._shadowCasterPass).update(this, i, h.ShadowLightType.DirectionLight), 
            n.render(a, r, h.ShadowLightType.DirectionLight)) : r._shaderValues.removeDefine(dt.SHADERDEFINE_SHADOW);
            var o = r._mainSpotLight, l = o && o.shadowMode !== e.ShadowMode.None && ut.supportShadow();
            return l ? (r._shaderValues.removeDefine(dt.SHADERDEFINE_SHADOW), r._shaderValues.addDefine(dt.SHADERDEFINE_SHADOW_SPOT), 
            (n = h.Scene3D._shadowCasterPass).update(this, o, h.ShadowLightType.SpotLight), 
            n.render(a, r, h.ShadowLightType.SpotLight)) : r._shaderValues.removeDefine(dt.SHADERDEFINE_SHADOW_SPOT), 
            s && r._shaderValues.addDefine(dt.SHADERDEFINE_SHADOW), l && r._shaderValues.addDefine(dt.SHADERDEFINE_SHADOW_SPOT), 
            t.PerformancePlugin.endSample(t.PerformancePlugin.PERFORMANCE_LAYA_3D_RENDER_SHADOWMAP), 
            s || l;
        }
        _preRenderMainPass(r, a, n, i) {
            r.camera = this, r.cameraShaderValue = this._shaderValues, ft._updateMark++, a._preRenderScript();
            var s = t.LayaGL.instance;
            if (n && !this._offScreenRenderTexture && (this.clearFlag == e.CameraClearFlags.DepthOnly || this.clearFlag == e.CameraClearFlags.Nothing)) if (this._enableHDR) {
                var o = P.createFromPool(i.width, i.height, t.RenderTextureFormat.R8G8B8, t.RenderTextureDepthFormat.DEPTH_16);
                o.filterMode = t.FilterMode.Bilinear, t.WebGLContext.bindTexture(s, s.TEXTURE_2D, o._getSource()), 
                s.copyTexSubImage2D(s.TEXTURE_2D, 0, 0, 0, i.x, N.clientHeight - (i.y + i.height), i.width, i.height);
                var l = q.create(o, this._internalRenderTexture);
                l.run(), l.recover(), P.recoverToPool(o);
            } else t.WebGLContext.bindTexture(s, s.TEXTURE_2D, this._internalRenderTexture._getSource()), 
            s.copyTexSubImage2D(s.TEXTURE_2D, 0, 0, 0, i.x, N.clientHeight - (i.y + i.height), i.width, i.height);
        }
        _renderMainPass(r, a, n, i, s, o) {
            var l = t.LayaGL.instance, _ = this._getRenderTexture();
            r.viewport = a, this._prepareCameraToRender();
            var c = d._config._multiLighting;
            if (t.PerformancePlugin.begainSample(t.PerformancePlugin.PERFORMANCE_LAYA_3D_RENDER_CLUSTER), 
            c && qe.instance.update(this, n), t.PerformancePlugin.endSample(t.PerformancePlugin.PERFORMANCE_LAYA_3D_RENDER_CLUSTER), 
            t.PerformancePlugin.begainSample(t.PerformancePlugin.PERFORMANCE_LAYA_3D_RENDER_CULLING), 
            n._preCulling(r, this, i, s), t.PerformancePlugin.endSample(t.PerformancePlugin.PERFORMANCE_LAYA_3D_RENDER_CULLING), 
            0 != this.depthTextureMode && (this._applyViewProject(r, this.viewMatrix, this._projectionMatrix), 
            this._renderDepthMode(r)), _ && _._start(), this._applyViewProject(r, this.viewMatrix, this._projectionMatrix), 
            n._clear(l, r), this._applyCommandBuffer(e.CameraEventFlags.BeforeForwardOpaque, r), 
            t.PerformancePlugin.begainSample(t.PerformancePlugin.PERFORMANCE_LAYA_3D_RENDER_RENDEROPAQUE), 
            n._renderScene(r, h.Scene3D.SCENERENDERFLAG_RENDERQPAQUE), t.PerformancePlugin.endSample(t.PerformancePlugin.PERFORMANCE_LAYA_3D_RENDER_RENDEROPAQUE), 
            this._applyCommandBuffer(e.CameraEventFlags.BeforeSkyBox, r), n._renderScene(r, h.Scene3D.SCENERENDERFLAG_SKYBOX), 
            this._applyCommandBuffer(e.CameraEventFlags.BeforeTransparent, r), t.PerformancePlugin.begainSample(t.PerformancePlugin.PERFORMANCE_LAYA_3D_RENDER_RENDERTRANSPARENT), 
            n._renderScene(r, h.Scene3D.SCENERENDERFLAG_RENDERTRANSPARENT), t.PerformancePlugin.endSample(t.PerformancePlugin.PERFORMANCE_LAYA_3D_RENDER_RENDERTRANSPARENT), 
            n._postRenderScript(), this._applyCommandBuffer(e.CameraEventFlags.BeforeImageEffect, r), 
            _ && _._end(), o) {
                if (this._postProcess && this._postProcess.enable) t.PerformancePlugin.begainSample(t.PerformancePlugin.PERFORMANCE_LAYA_3D_RENDER_POSTPROCESS), 
                this._postProcess._render(), this._postProcess._applyPostProcessCommandBuffers(), 
                t.PerformancePlugin.endSample(t.PerformancePlugin.PERFORMANCE_LAYA_3D_RENDER_POSTPROCESS); else if (this._enableHDR || this._needBuiltInRenderTexture) {
                    var u = this._getCanvasWidth(), m = this._getCanvasHeight();
                    this._screenOffsetScale.setValue(a.x / u, a.y / m, a.width / u, a.height / m), this._internalCommandBuffer._camera = this, 
                    this._internalCommandBuffer.blitScreenQuad(this._internalRenderTexture, this._offScreenRenderTexture ? this._offScreenRenderTexture : null, this._screenOffsetScale, null, null, 0, !0), 
                    this._internalCommandBuffer._apply(), this._internalCommandBuffer.clear();
                }
                P.recoverToPool(this._internalRenderTexture);
            }
            this._applyCommandBuffer(e.CameraEventFlags.AfterEveryThing, r);
        }
        _renderDepthMode(r) {
            t.PerformancePlugin.begainSample(t.PerformancePlugin.PERFORMANCE_LAYA_3D_RENDER_RENDERDEPTHMDOE);
            var a = this._depthTextureMode;
            0 != (a & e.DepthTextureMode.Depth) && (ft.depthPass.update(this, e.DepthTextureMode.Depth), 
            ft.depthPass.render(r, e.DepthTextureMode.Depth)), 0 != (a & e.DepthTextureMode.DepthNormals) && (ft.depthPass.update(this, e.DepthTextureMode.DepthNormals), 
            ft.depthPass.render(r, e.DepthTextureMode.DepthNormals)), t.PerformancePlugin.endSample(t.PerformancePlugin.PERFORMANCE_LAYA_3D_RENDER_RENDERDEPTHMDOE);
        }
        get depthTexture() {
            return this._depthTexture;
        }
        set depthTexture(e) {
            this._depthTexture = e;
        }
        get depthNormalTexture() {
            return this._depthNormalsTexture;
        }
        set depthNormalTexture(e) {
            this._depthNormalsTexture = e;
        }
        _aftRenderMainPass(e) {
            e && h.Scene3D._shadowCasterPass.cleanUp(), ft.depthPass.cleanUp();
        }
        render(e = null, r = null) {
            if (this.activeInHierarchy) {
                var a = this.viewport, n = this._needInternalRenderTexture(), i = N._instance, s = i.scene = this._scene;
                i.pipelineMode = i.configPipeLineMode, n ? (this._internalRenderTexture = P.createFromPool(a.width, a.height, this._getRenderTextureFormat(), t.RenderTextureDepthFormat.DEPTH_16, 4), 
                this._internalRenderTexture.filterMode = t.FilterMode.Bilinear) : this._internalRenderTexture = null;
                var o = this._renderShadowMap(s, i);
                this._preRenderMainPass(i, s, n, a), this._renderMainPass(i, a, s, e, r, n), this._aftRenderMainPass(o);
            }
        }
        viewportPointToRay(e, r) {
            this._rayViewport.x = this.viewport.x, this._rayViewport.y = this.viewport.y, this._rayViewport.width = t.Laya.stage._width, 
            this._rayViewport.height = t.Laya.stage._height, it.calculateCursorRay(e, this._rayViewport, this._projectionMatrix, this.viewMatrix, null, r);
        }
        normalizedViewportPointToRay(e, t) {
            var r = ft._tempVector20, a = this.viewport;
            r.x = e.x * a.width, r.y = e.y * a.height, it.calculateCursorRay(r, this.viewport, this._projectionMatrix, this.viewMatrix, null, t);
        }
        worldToViewportPoint(e, r) {
            b.multiply(this._projectionMatrix, this._viewMatrix, this._projectionViewMatrix), 
            this.viewport.project(e, this._projectionViewMatrix, r), r.x = r.x / t.Laya.stage.clientScaleX, 
            r.y = r.y / t.Laya.stage.clientScaleY;
        }
        worldToNormalizedViewportPoint(e, r) {
            b.multiply(this._projectionMatrix, this._viewMatrix, this._projectionViewMatrix), 
            this.normalizedViewport.project(e, this._projectionViewMatrix, r), r.x = r.x / t.Laya.stage.clientScaleX, 
            r.y = r.y / t.Laya.stage.clientScaleY;
        }
        convertScreenCoordToOrthographicCoord(e, r) {
            if (this._orthographic) {
                var a = N.clientWidth, n = N.clientHeight, s = this.orthographicVerticalSize * this.aspectRatio / a, o = this.orthographicVerticalSize / n;
                return r.x = (-a / 2 + e.x * t.Laya.stage.clientScaleX) * s, r.y = (n / 2 - e.y * t.Laya.stage.clientScaleY) * o, 
                r.z = (this.nearPlane - this.farPlane) * (e.z + 1) / 2 - this.nearPlane, i.transformCoordinate(r, this.transform.worldMatrix, r), 
                !0;
            }
            return !1;
        }
        destroy(e = !0) {
            this._offScreenRenderTexture = null, this.transform.off(t.Event.TRANSFORM_CHANGED, this, this._onTransformChanged), 
            super.destroy(e);
        }
        addCommandBuffer(e, t) {
            var r = this._cameraEventCommandBuffer[e];
            r || (r = this._cameraEventCommandBuffer[e] = []), r.indexOf(t) < 0 && r.push(t), 
            t._camera = this;
        }
        removeCommandBuffer(e, t) {
            var r = this._cameraEventCommandBuffer[e];
            if (!r) throw "Camera:unknown event.";
            var a = r.indexOf(t);
            -1 != a && r.splice(a, 1);
        }
        removeCommandBuffers(e) {
            this._cameraEventCommandBuffer[e] && (this._cameraEventCommandBuffer[e].length = 0);
        }
        _create() {
            return new ft();
        }
    }
    ft._tempVector20 = new a(), ft._updateMark = 0, ft.depthPass = new mt();
    class Et {
        constructor() {
            this._eventList = [], this._mouseTouch = new Ke(), this._touchPool = [], this._touches = new ke(), 
            this._multiTouchEnabled = !0, this._pushEventList = (e => {
                e.cancelable && e.preventDefault(), this._eventList.push(e);
            }).bind(this);
        }
        __init__(e, r) {
            this._scene = r, _._bullet && (Et._tempHitResult0 = new t.HitResult()), e.oncontextmenu = function(e) {
                return !1;
            };
        }
        _onCanvasEvent(e) {
            e.addEventListener("mousedown", this._pushEventList), e.addEventListener("mouseup", this._pushEventList, !0), 
            e.addEventListener("mousemove", this._pushEventList, !0), e.addEventListener("touchstart", this._pushEventList), 
            e.addEventListener("touchend", this._pushEventList, !0), e.addEventListener("touchmove", this._pushEventList, !0), 
            e.addEventListener("touchcancel", this._pushEventList, !0);
        }
        _offCanvasEvent(e) {
            e.removeEventListener("mousedown", this._pushEventList), e.removeEventListener("mouseup", this._pushEventList, !0), 
            e.removeEventListener("mousemove", this._pushEventList, !0), e.removeEventListener("touchstart", this._pushEventList), 
            e.removeEventListener("touchend", this._pushEventList, !0), e.removeEventListener("touchmove", this._pushEventList, !0), 
            e.removeEventListener("touchcancel", this._pushEventList, !0), this._eventList.length = 0, 
            this._touches.clear();
        }
        touchCount() {
            return this._touches.length;
        }
        get multiTouchEnabled() {
            return this._multiTouchEnabled;
        }
        set multiTouchEnabled(e) {
            this._multiTouchEnabled = e;
        }
        _getTouch(e, t) {
            var r = this._touchPool[e];
            return 0 == t && r && -1 != r._getIndexInList() ? null : 1 == t && r && -1 == r._getIndexInList() ? null : (r || (r = new Je(), 
            this._touchPool[e] = r, r._identifier = e), r);
        }
        _mouseTouchDown() {
            var e = this._mouseTouch, r = e.sprite;
            if (e._pressedSprite = r, e._pressedLoopCount = t.Stat.loopCount, r) {
                var a = r._scripts;
                if (a) for (var n = 0, i = a.length; n < i; n++) a[n].onMouseDown();
            }
        }
        _mouseTouchUp() {
            var e, t, r = this._mouseTouch, a = r._pressedSprite;
            r._pressedSprite = null, r._pressedLoopCount = -1;
            var n = r.sprite;
            if (n && n === a) {
                var i = n._scripts;
                if (i) for (e = 0, t = i.length; e < t; e++) i[e].onMouseClick();
            }
            if (a) {
                var s = a._scripts;
                if (s) for (e = 0, t = s.length; e < t; e++) s[e].onMouseUp();
            }
        }
        _mouseTouchRayCast(t) {
            if (_._bullet || _._cannon) {
                var r = Et._tempHitResult0, a = Et._tempVector20, n = Et._tempRay0;
                r.succeeded = !1;
                var i = this._mouseTouch.mousePositionX, s = this._mouseTouch.mousePositionY;
                a.x = i, a.y = s;
                for (var o = t.length - 1; o >= 0; o--) {
                    var l = t[o], h = l.viewport;
                    if (a.x >= h.x && a.y >= h.y && a.x <= h.width && a.y <= h.height) if (l.viewportPointToRay(a, n), 
                    this._scene._physicsSimulation.rayCast(n, r) || l.clearFlag === e.CameraClearFlags.SolidColor || l.clearFlag === e.CameraClearFlags.Sky) break;
                }
                var d = this._mouseTouch, c = d.sprite;
                if (r.succeeded) {
                    var u = r.collider.owner;
                    d.sprite = u;
                    var m = u._scripts;
                    if (c !== u && m) for (var f = 0, E = m.length; f < E; f++) m[f].onMouseEnter();
                } else d.sprite = null;
                if (c && c !== u) {
                    var T = c._scripts;
                    if (T) for (f = 0, E = T.length; f < E; f++) T[f].onMouseOut();
                }
            }
        }
        _changeTouches(e, r) {
            for (var a = 0, n = 0, i = this._touches.length, s = 0, o = e.length; s < o; s++) {
                var l = e[s], h = l.identifier;
                if (this._multiTouchEnabled || 0 === this._touches.length || 0 != r) {
                    var _ = this._getTouch(h, r);
                    if (1 != r || _) {
                        var d = this._touchPool[h]._position, c = Et._tempPoint;
                        c.setTo(l.pageX, l.pageY), t.ILaya.stage._canvasTransform.invertTransformPoint(c);
                        var u = c.x, m = c.y;
                        switch (r) {
                          case 0:
                            _ && this._touches.add(_), a += u, n += m;
                            break;

                          case 1:
                            _ && this._touches.remove(_), a -= u, n -= m;
                            break;

                          case 2:
                            a = u - d.x, n = m - d.y;
                        }
                        d.x = u, d.y = m;
                    }
                }
            }
            var f = this._touches.length;
            0 === f ? (this._mouseTouch.mousePositionX = 0, this._mouseTouch.mousePositionY = 0) : (this._mouseTouch.mousePositionX = (this._mouseTouch.mousePositionX * i + a) / f, 
            this._mouseTouch.mousePositionY = (this._mouseTouch.mousePositionY * i + n) / f);
        }
        _update() {
            var e, r, a, n, i = _._enablePhysics && !t.PhysicsSimulation.disableSimulation;
            r = this._eventList.length;
            var s = this._scene._cameraPool;
            if (r > 0) {
                var o = !1;
                for (e = 0; e < r; e++) {
                    var l = this._eventList[e];
                    switch (l.type) {
                      case "mousedown":
                        i && this._mouseTouchDown();
                        break;

                      case "mouseup":
                        i && this._mouseTouchUp();
                        break;

                      case "mousemove":
                        var h = Et._tempPoint;
                        h.setTo(l.pageX, l.pageY), t.ILaya.stage._canvasTransform.invertTransformPoint(h), 
                        this._mouseTouch.mousePositionX = h.x, this._mouseTouch.mousePositionY = h.y, i && (o = !0);
                        break;

                      case "touchstart":
                        var c = this._touches.length;
                        this._changeTouches(l.changedTouches, 0), i && (!d._config.isUseCannonPhysicsEngine && this._mouseTouchRayCast(s), 
                        0 === c && this._mouseTouchDown());
                        break;

                      case "touchend":
                      case "touchcancel":
                        this._changeTouches(l.changedTouches, 1), i && 0 === this._touches.length && this._mouseTouchUp();
                        break;

                      case "touchmove":
                        this._changeTouches(l.changedTouches, 2), i && (o = !0);
                        break;

                      default:
                        throw "Input3D:unkonwn event type.";
                    }
                }
                o && !d._config.isUseCannonPhysicsEngine && this._mouseTouchRayCast(s), this._eventList.length = 0;
            }
            if (i) {
                var u = this._mouseTouch, m = u._pressedSprite;
                if (m && t.Stat.loopCount > u._pressedLoopCount) {
                    var f = m._scripts;
                    if (f) for (a = 0, n = f.length; a < n; a++) f[a].onMouseDrag();
                }
                var E = u.sprite;
                if (E) {
                    var T = E._scripts;
                    if (T) for (a = 0, n = T.length; a < n; a++) T[a].onMouseOver();
                }
            }
        }
        getTouch(e) {
            return e < this._touches.length ? this._touches.elements[e] : null;
        }
    }
    Et._tempPoint = new t.Point(), Et._tempVector20 = new a(), Et._tempRay0 = new et(new i(), new i());
    class Tt {
        constructor(e, t) {
            this._position = e, this._textureCoordinate0 = t;
        }
        static get vertexDeclaration() {
            return Tt._vertexDeclaration;
        }
        static __init__() {
            Tt._vertexDeclaration = new U(20, [ new H(0, B.Vector3, ie.MESH_POSITION0), new H(12, B.Vector2, ie.MESH_TEXTURECOORDINATE0) ]);
        }
        get position() {
            return this._position;
        }
        get textureCoordinate0() {
            return this._textureCoordinate0;
        }
        get vertexDeclaration() {
            return Tt._vertexDeclaration;
        }
    }
    class pt extends ot {
        constructor(r = 48, a = 48) {
            super();
            var n = t.LayaGL.instance;
            this._stacks = r, this._slices = a;
            for (var i = Tt.vertexDeclaration, s = i.vertexStride / 4, o = (this._stacks + 1) * (this._slices + 1), l = 3 * this._stacks * (this._slices + 1) * 2, h = new Float32Array(o * s), _ = new Uint16Array(l), d = Math.PI / this._stacks, c = 2 * Math.PI / this._slices, u = 0, m = 0, f = 0, E = 0; E < this._stacks + 1; E++) for (var T = Math.sin(E * d), p = Math.cos(E * d), g = 0; g < this._slices + 1; g++) {
                var S = T * Math.sin(g * c), R = T * Math.cos(g * c);
                h[m + 0] = S * pt._radius, h[m + 1] = p * pt._radius, h[m + 2] = R * pt._radius, 
                h[m + 3] = -g / this._slices + .75, h[m + 4] = E / this._stacks, m += s, E != this._stacks - 1 && (_[f++] = u + 1, 
                _[f++] = u, _[f++] = u + (this._slices + 1), _[f++] = u + (this._slices + 1), _[f++] = u, 
                _[f++] = u + this._slices, u++);
            }
            this._vertexBuffer = new V(4 * h.length, n.STATIC_DRAW, !1), this._vertexBuffer.vertexDeclaration = i, 
            this._indexBuffer = new st(e.IndexFormat.UInt16, _.length, n.STATIC_DRAW, !1), this._vertexBuffer.setData(h.buffer), 
            this._indexBuffer.setData(_);
            var v = new G();
            v.bind(), v.applyVertexBuffer(this._vertexBuffer), v.applyIndexBuffer(this._indexBuffer), 
            v.unBind(), this._bufferState = v;
        }
        static __init__() {
            pt.instance = new pt();
        }
        get stacks() {
            return this._stacks;
        }
        get slices() {
            return this._slices;
        }
        _render(e) {
            var r = t.LayaGL.instance, a = this._indexBuffer.indexCount;
            r.drawElements(r.TRIANGLES, a, r.UNSIGNED_SHORT, 0), t.Stat.trianglesFaces += a / 3, 
            t.Stat.renderBatches++;
        }
    }
    pt._radius = 1, (ye = e.TextureCubeFace || (e.TextureCubeFace = {}))[ye.PositiveX = 0] = "PositiveX", 
    ye[ye.NegativeX = 1] = "NegativeX", ye[ye.PositiveY = 2] = "PositiveY", ye[ye.NegativeY = 3] = "NegativeY", 
    ye[ye.PositiveZ = 4] = "PositiveZ", ye[ye.NegativeZ = 5] = "NegativeZ";
    class gt extends t.BaseTexture {
        constructor(e, r = t.TextureFormat.R8G8B8, a = !1) {
            super(r, a), this._glTextureType = t.LayaGL.instance.TEXTURE_CUBE_MAP, this._width = e, 
            this._height = e;
            var n = t.LayaGL.instance;
            if (this._setWarpMode(n.TEXTURE_WRAP_S, this._wrapModeU), this._setWarpMode(n.TEXTURE_WRAP_T, this._wrapModeV), 
            this._setFilterMode(this._filterMode), this._setAnisotropy(this._anisoLevel), this._mipmap) {
                this._mipmapCount = Math.ceil(Math.log2(e)) + 1;
                for (var i = 0; i < this._mipmapCount; i++) this._setPixels([], i, Math.max(e >> i, 1), Math.max(e >> i, 1));
                this._setGPUMemory(e * e * 4 * (1 + 1 / 3) * 6);
            } else this._mipmapCount = 1, this._setGPUMemory(e * e * 4 * 6);
        }
        static get blackTexture() {
            return gt._blackTexture;
        }
        static get grayTexture() {
            return gt._grayTexture;
        }
        static __init__() {
            var e = new gt(1, t.TextureFormat.R8G8B8, !1), r = new gt(1, t.TextureFormat.R8G8B8, !1), a = new Uint8Array(3);
            a[0] = 0, a[1] = 0, a[2] = 0, e.setSixSidePixels([ a, a, a, a, a, a ]), e.lock = !0, 
            a[0] = 128, a[1] = 128, a[2] = 128, r.setSixSidePixels([ a, a, a, a, a, a ]), r.lock = !0, 
            gt._grayTexture = r, gt._blackTexture = e;
        }
        static _parse(e, t = null, r = null) {
            var a = r ? new gt(0, r[0], r[1]) : new gt(0);
            return a.setSixSideImageSources(e), a;
        }
        static _parseBin(e, t = null, r = null) {
            var a = r ? new gt(0, r[0], r[1]) : new gt(0);
            return a.setSixSideImageSources(e), a;
        }
        static load(e, r) {
            var a = t.LoaderManager.createMap[t.Utils.getFilecompatibleExtension(e)] ? t.Utils.getFilecompatibleExtension(e) : t.Utils.getFileExtension(e), n = t.LoaderManager.createMap[a] ? t.LoaderManager.createMap[a][0] : null;
            t.ILaya.loader.create(e, r, null, n);
        }
        get defaulteTexture() {
            return gt.grayTexture;
        }
        _setPixels(e, r, a, n) {
            var i = t.LayaGL.instance, s = this._getGLFormat();
            t.WebGLContext.bindTexture(i, this._glTextureType, this._glTexture), this.format === t.TextureFormat.R8G8B8 ? (i.pixelStorei(i.UNPACK_ALIGNMENT, 1), 
            i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_Z, r, s, a, n, 0, s, i.UNSIGNED_BYTE, e[0]), 
            i.texImage2D(i.TEXTURE_CUBE_MAP_NEGATIVE_Z, r, s, a, n, 0, s, i.UNSIGNED_BYTE, e[1]), 
            i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X, r, s, a, n, 0, s, i.UNSIGNED_BYTE, e[2]), 
            i.texImage2D(i.TEXTURE_CUBE_MAP_NEGATIVE_X, r, s, a, n, 0, s, i.UNSIGNED_BYTE, e[3]), 
            i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_Y, r, s, a, n, 0, s, i.UNSIGNED_BYTE, e[4]), 
            i.texImage2D(i.TEXTURE_CUBE_MAP_NEGATIVE_Y, r, s, a, n, 0, s, i.UNSIGNED_BYTE, e[5]), 
            i.pixelStorei(i.UNPACK_ALIGNMENT, 4)) : (i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_Z, r, s, a, n, 0, s, i.UNSIGNED_BYTE, e[0]), 
            i.texImage2D(i.TEXTURE_CUBE_MAP_NEGATIVE_Z, r, s, a, n, 0, s, i.UNSIGNED_BYTE, e[1]), 
            i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X, r, s, a, n, 0, s, i.UNSIGNED_BYTE, e[2]), 
            i.texImage2D(i.TEXTURE_CUBE_MAP_NEGATIVE_X, r, s, a, n, 0, s, i.UNSIGNED_BYTE, e[3]), 
            i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_Y, r, s, a, n, 0, s, i.UNSIGNED_BYTE, e[4]), 
            i.texImage2D(i.TEXTURE_CUBE_MAP_NEGATIVE_Y, r, s, a, n, 0, s, i.UNSIGNED_BYTE, e[5]));
        }
        setSixSideImageSources(e, r = !1) {
            for (var a, n, i = 0; i < 6; i++) {
                var s = e[i];
                if (!s) return void console.log("TextureCube: image Source can't be null.");
                var o = s.width, l = s.height;
                if (i > 0 && a !== o) return void console.log("TextureCube: each side image's width and height must same.");
                if ((a = o) !== (n = l)) return void console.log("TextureCube: each side image's width and height must same.");
            }
            this._width = a, this._height = n;
            var h = t.LayaGL.instance;
            t.WebGLContext.bindTexture(h, this._glTextureType, this._glTexture);
            var _ = this._getGLFormat();
            if (t.Render.isConchApp) {
                if (1 == r) for (var d = 0; d < 6; d++) e[d].setPremultiplyAlpha(r);
                h.texImage2D(h.TEXTURE_CUBE_MAP_POSITIVE_Z, 0, h.RGBA, h.RGBA, h.UNSIGNED_BYTE, e[0]), 
                h.texImage2D(h.TEXTURE_CUBE_MAP_NEGATIVE_Z, 0, h.RGBA, h.RGBA, h.UNSIGNED_BYTE, e[1]), 
                h.texImage2D(h.TEXTURE_CUBE_MAP_POSITIVE_X, 0, h.RGBA, h.RGBA, h.UNSIGNED_BYTE, e[2]), 
                h.texImage2D(h.TEXTURE_CUBE_MAP_NEGATIVE_X, 0, h.RGBA, h.RGBA, h.UNSIGNED_BYTE, e[3]), 
                h.texImage2D(h.TEXTURE_CUBE_MAP_POSITIVE_Y, 0, h.RGBA, h.RGBA, h.UNSIGNED_BYTE, e[4]), 
                h.texImage2D(h.TEXTURE_CUBE_MAP_NEGATIVE_Y, 0, h.RGBA, h.RGBA, h.UNSIGNED_BYTE, e[5]);
            } else r && h.pixelStorei(h.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0), h.texImage2D(h.TEXTURE_CUBE_MAP_POSITIVE_Z, 0, _, _, h.UNSIGNED_BYTE, e[0]), 
            h.texImage2D(h.TEXTURE_CUBE_MAP_NEGATIVE_Z, 0, _, _, h.UNSIGNED_BYTE, e[1]), h.texImage2D(h.TEXTURE_CUBE_MAP_POSITIVE_X, 0, _, _, h.UNSIGNED_BYTE, e[2]), 
            h.texImage2D(h.TEXTURE_CUBE_MAP_NEGATIVE_X, 0, _, _, h.UNSIGNED_BYTE, e[3]), h.texImage2D(h.TEXTURE_CUBE_MAP_POSITIVE_Y, 0, _, _, h.UNSIGNED_BYTE, e[4]), 
            h.texImage2D(h.TEXTURE_CUBE_MAP_NEGATIVE_Y, 0, _, _, h.UNSIGNED_BYTE, e[5]), r && h.pixelStorei(h.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1);
            this._mipmap && this._isPot(a) && this._isPot(n) ? (h.generateMipmap(this._glTextureType), 
            this._setGPUMemory(a * n * 4 * (1 + 1 / 3) * 6)) : this._setGPUMemory(a * n * 4 * 6), 
            this._setWarpMode(h.TEXTURE_WRAP_S, this._wrapModeU), this._setWarpMode(h.TEXTURE_WRAP_T, this._wrapModeV), 
            this._setFilterMode(this._filterMode), this._readyed = !0, this._activeResource();
        }
        setSixSidePixels(e, r = 0) {
            if (!e) throw new Error("TextureCube:pixels can't be null.");
            var a = Math.max(this._width >> r, 1), n = Math.max(this._height >> r, 1), i = a * n * this._getFormatByteCount();
            if (e[0].length < i) throw "TextureCube:pixels length should at least " + i + ".";
            if (this._setPixels(e, r, a, n), 0 === r) {
                var s = t.LayaGL.instance;
                this._setWarpMode(s.TEXTURE_WRAP_S, this._wrapModeU), this._setWarpMode(s.TEXTURE_WRAP_T, this._wrapModeV);
            }
            this._readyed = !0, this._activeResource();
        }
        setImageSource(r, a, n = 0) {
            var i = this._width, s = this._height;
            if (!a || i === a.width && s === a.height) {
                var o = t.LayaGL.instance;
                t.WebGLContext.bindTexture(o, this._glTextureType, this._glTexture);
                var l = this._getGLFormat();
                switch (r) {
                  case e.TextureCubeFace.NegativeX:
                    o.texImage2D(o.TEXTURE_CUBE_MAP_NEGATIVE_X, n, l, l, o.UNSIGNED_BYTE, a);
                    break;

                  case e.TextureCubeFace.PositiveX:
                    o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X, n, l, l, o.UNSIGNED_BYTE, a);
                    break;

                  case e.TextureCubeFace.NegativeY:
                    o.texImage2D(o.TEXTURE_CUBE_MAP_NEGATIVE_Y, n, l, l, o.UNSIGNED_BYTE, a);
                    break;

                  case e.TextureCubeFace.PositiveY:
                    o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_Y, n, l, l, o.UNSIGNED_BYTE, a);
                    break;

                  case e.TextureCubeFace.NegativeZ:
                    o.texImage2D(o.TEXTURE_CUBE_MAP_NEGATIVE_Z, n, l, l, o.UNSIGNED_BYTE, a);
                    break;

                  case e.TextureCubeFace.PositiveZ:
                    o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_Z, n, l, l, o.UNSIGNED_BYTE, a);
                }
                this._mipmap && this._isPot(i) && this._isPot(s) ? (o.generateMipmap(this._glTextureType), 
                this._setGPUMemory(i * s * 4 * (1 + 1 / 3) * 6)) : this._setGPUMemory(i * s * 4 * 6), 
                this._setWarpMode(o.TEXTURE_WRAP_S, this._wrapModeU), this._setWarpMode(o.TEXTURE_WRAP_T, this._wrapModeV), 
                this._setFilterMode(this._filterMode), this._readyed = !0;
            } else console.log("TextureCube: imageSource's width and height must same.");
        }
    }
    gt.TEXTURECUBE = "TEXTURECUBE", gt.TEXTURECUBEBIN = "TEXTURECUBEBIN";
    class St {
        constructor() {
            this._length = 0, this._elements = [];
        }
        add(e) {
            this._length === this._elements.length ? this._elements.push(e) : this._elements[this._length] = e, 
            this._length++;
        }
        remove(e) {
            var t = this._elements.indexOf(e);
            if (this._length--, t !== this._length) {
                var r = this._elements[this._length];
                this._elements[t] = r;
            }
        }
        shift() {
            return this._length--, this._elements.shift();
        }
        getBrightestLight() {
            for (var e, t = -1, r = this._elements, a = 0; a < this._length; a++) {
                var n = r[a]._intensity;
                t < n && (t = n, e = a);
            }
            return e;
        }
        normalLightOrdering(e) {
            var t = this._elements[0];
            this._elements[0] = this._elements[e], this._elements[e] = t;
        }
    }
    class Rt extends St {
        remove(e) {
            var t = this._elements.indexOf(e);
            this._elements.splice(t, 1), this._length--;
        }
    }
    class vt extends ue {
        constructor() {
            super(), this.setShaderName("LineShader"), this._shaderValues.setVector(vt.COLOR, new n(1, 1, 1, 1));
        }
        static __initDefine__() {}
        get color() {
            return this._shaderValues.getVector(vt.COLOR);
        }
        set color(e) {
            this._shaderValues.setVector(vt.COLOR, e);
        }
        clone() {
            var e = new vt();
            return this.cloneTo(e), e;
        }
    }
    vt.COLOR = Z.propertyNameToID("u_Color");
    class xt {
        constructor(e, t) {
            this.min = e, this.max = t;
        }
        _rotateExtents(e, t, r) {
            var a = e.x, n = e.y, i = e.z, s = t.elements;
            r.x = Math.abs(s[0] * a) + Math.abs(s[4] * n) + Math.abs(s[8] * i), r.y = Math.abs(s[1] * a) + Math.abs(s[5] * n) + Math.abs(s[9] * i), 
            r.z = Math.abs(s[2] * a) + Math.abs(s[6] * n) + Math.abs(s[10] * i);
        }
        getCorners(e) {
            e.length = 8;
            var t = this.min.x, r = this.min.y, a = this.min.z, n = this.max.x, s = this.max.y, o = this.max.z;
            e[0] = new i(t, s, o), e[1] = new i(n, s, o), e[2] = new i(n, r, o), e[3] = new i(t, r, o), 
            e[4] = new i(t, s, a), e[5] = new i(n, s, a), e[6] = new i(n, r, a), e[7] = new i(t, r, a);
        }
        getCenter(e) {
            i.add(this.min, this.max, e), i.scale(e, .5, e);
        }
        getExtent(e) {
            i.subtract(this.max, this.min, e), i.scale(e, .5, e);
        }
        setCenterAndExtent(e, t) {
            i.subtract(e, t, this.min), i.add(e, t, this.max);
        }
        tranform(e, t) {
            var r = xt._tempVector30, a = xt._tempVector31;
            this.getCenter(r), this.getExtent(a), i.transformCoordinate(r, e, r), this._rotateExtents(a, e, a), 
            t.setCenterAndExtent(r, a);
        }
        toDefault() {
            this.min.toDefault(), this.max.toDefault();
        }
        static createfromPoints(e, t) {
            if (null == e) throw new Error("points");
            var r = t.min, a = t.max;
            r.x = Number.MAX_VALUE, r.y = Number.MAX_VALUE, r.z = Number.MAX_VALUE, a.x = -Number.MAX_VALUE, 
            a.y = -Number.MAX_VALUE, a.z = -Number.MAX_VALUE;
            for (var n = 0, s = e.length; n < s; ++n) i.min(r, e[n], r), i.max(a, e[n], a);
        }
        static merge(e, t, r) {
            i.min(e.min, t.min, r.min), i.max(e.max, t.max, r.max);
        }
        cloneTo(e) {
            var t = e;
            this.min.cloneTo(t.min), this.max.cloneTo(t.max);
        }
        clone() {
            var e = new xt(new i(), new i());
            return this.cloneTo(e), e;
        }
    }
    xt._tempVector30 = new i(), xt._tempVector31 = new i();
    class At {
        constructor(e, t) {
            this._updateFlag = 0, this._center = new i(), this._extent = new i(), this._boundBox = new xt(new i(), new i()), 
            e.cloneTo(this._boundBox.min), t.cloneTo(this._boundBox.max), this._setUpdateFlag(At._UPDATE_CENTER | At._UPDATE_EXTENT, !0);
        }
        setMin(e) {
            var t = this._boundBox.min;
            e !== t && e.cloneTo(t), this._setUpdateFlag(At._UPDATE_CENTER | At._UPDATE_EXTENT, !0), 
            this._setUpdateFlag(At._UPDATE_MIN, !1);
        }
        getMin() {
            var e = this._boundBox.min;
            return this._getUpdateFlag(At._UPDATE_MIN) && (this._getMin(this.getCenter(), this.getExtent(), e), 
            this._setUpdateFlag(At._UPDATE_MIN, !1)), e;
        }
        setMax(e) {
            var t = this._boundBox.max;
            e !== t && e.cloneTo(t), this._setUpdateFlag(At._UPDATE_CENTER | At._UPDATE_EXTENT, !0), 
            this._setUpdateFlag(At._UPDATE_MAX, !1);
        }
        getMax() {
            var e = this._boundBox.max;
            return this._getUpdateFlag(At._UPDATE_MAX) && (this._getMax(this.getCenter(), this.getExtent(), e), 
            this._setUpdateFlag(At._UPDATE_MAX, !1)), e;
        }
        setCenter(e) {
            e !== this._center && e.cloneTo(this._center), this._setUpdateFlag(At._UPDATE_MIN | At._UPDATE_MAX, !0), 
            this._setUpdateFlag(At._UPDATE_CENTER, !1);
        }
        getCenter() {
            return this._getUpdateFlag(At._UPDATE_CENTER) && (this._getCenter(this.getMin(), this.getMax(), this._center), 
            this._setUpdateFlag(At._UPDATE_CENTER, !1)), this._center;
        }
        setExtent(e) {
            e !== this._extent && e.cloneTo(this._extent), this._setUpdateFlag(At._UPDATE_MIN | At._UPDATE_MAX, !0), 
            this._setUpdateFlag(At._UPDATE_EXTENT, !1);
        }
        getExtent() {
            return this._getUpdateFlag(At._UPDATE_EXTENT) && (this._getExtent(this.getMin(), this.getMax(), this._extent), 
            this._setUpdateFlag(At._UPDATE_EXTENT, !1)), this._extent;
        }
        _getUpdateFlag(e) {
            return 0 != (this._updateFlag & e);
        }
        _setUpdateFlag(e, t) {
            t ? this._updateFlag |= e : this._updateFlag &= ~e;
        }
        _getCenter(e, t, r) {
            i.add(e, t, r), i.scale(r, .5, r);
        }
        _getExtent(e, t, r) {
            i.subtract(t, e, r), i.scale(r, .5, r);
        }
        _getMin(e, t, r) {
            i.subtract(e, t, r);
        }
        _getMax(e, t, r) {
            i.add(e, t, r);
        }
        _rotateExtents(e, t, r) {
            var a = e.x, n = e.y, i = e.z, s = t.elements;
            r.x = Math.abs(s[0] * a) + Math.abs(s[4] * n) + Math.abs(s[8] * i), r.y = Math.abs(s[1] * a) + Math.abs(s[5] * n) + Math.abs(s[9] * i), 
            r.z = Math.abs(s[2] * a) + Math.abs(s[6] * n) + Math.abs(s[10] * i);
        }
        _tranform(e, t) {
            var r = t._center, a = t._extent;
            i.transformCoordinate(this.getCenter(), e, r), this._rotateExtents(this.getExtent(), e, a), 
            t._boundBox.setCenterAndExtent(r, a), t._updateFlag = 0;
        }
        _getBoundBox() {
            if (this._updateFlag & At._UPDATE_MIN) {
                var e = this._boundBox.min;
                this._getMin(this.getCenter(), this.getExtent(), e), this._setUpdateFlag(At._UPDATE_MIN, !1);
            }
            if (this._updateFlag & At._UPDATE_MAX) {
                var t = this._boundBox.max;
                this._getMax(this.getCenter(), this.getExtent(), t), this._setUpdateFlag(At._UPDATE_MAX, !1);
            }
            return this._boundBox;
        }
        calculateBoundsintersection(e) {
            var t = this.getMax(), r = this.getMin(), a = e.getMax(), n = e.getMin(), i = At.TEMP_VECTOR3_MAX0, s = At.TEMP_VECTOR3_MAX1, o = this.getExtent(), l = e.getExtent();
            return i.setValue(Math.max(t.x, a.x) - Math.min(r.x, n.x), Math.max(t.y, a.y) - Math.min(r.y, n.y), Math.max(t.z, a.z) - Math.min(r.z, n.z)), 
            s.setValue(2 * (o.x + l.x), 2 * (o.y + l.y), 2 * (o.z + l.z)), i.x > s.x ? -1 : i.y > s.y ? -1 : i.z > s.z ? -1 : (s.x - i.x) * (s.y - i.y) * (s.z - i.z);
        }
        cloneTo(e) {
            var t = e;
            this.getMin().cloneTo(t._boundBox.min), this.getMax().cloneTo(t._boundBox.max), 
            this.getCenter().cloneTo(t._center), this.getExtent().cloneTo(t._extent), t._updateFlag = 0;
        }
        clone() {
            var e = new At(new i(), new i());
            return this.cloneTo(e), e;
        }
    }
    At._UPDATE_MIN = 1, At._UPDATE_MAX = 2, At._UPDATE_CENTER = 4, At._UPDATE_EXTENT = 8, 
    At.TEMP_VECTOR3_MAX0 = new i(), At.TEMP_VECTOR3_MAX1 = new i();
    class It {
        constructor() {
            this._destroyed = !1;
        }
        get destroyed() {
            return this._destroyed;
        }
        _getType() {
            throw "GeometryElement:must override it.";
        }
        _prepareRender(e) {
            return !0;
        }
        _render(e) {
            throw "GeometryElement:must override it.";
        }
        destroy() {
            this._destroyed || (this._destroyed = !0);
        }
    }
    It._typeCounter = 0;
    class Mt {
        constructor() {}
        static get vertexDeclaration() {
            return Mt._vertexDeclaration;
        }
        static __init__() {
            Mt._vertexDeclaration = new U(28, [ new H(0, B.Vector3, ie.MESH_POSITION0), new H(12, B.Vector4, ie.MESH_COLOR0) ]);
        }
        get vertexDeclaration() {
            return Mt._vertexDeclaration;
        }
    }
    class Dt extends It {
        constructor(e, r) {
            super(), this._floatCountPerVertices = 7, this._minUpdate = Number.MAX_VALUE, this._maxUpdate = Number.MIN_VALUE, 
            this._bufferState = new G(), this._floatBound = new Float32Array(6), this._calculateBound = !1, 
            this._maxLineCount = 0, this._lineCount = 0;
            var a = 2 * r;
            this._owner = e, this._maxLineCount = r, this._vertices = new Float32Array(a * this._floatCountPerVertices), 
            this._vertexBuffer = new V(Mt.vertexDeclaration.vertexStride * a, t.LayaGL.instance.STATIC_DRAW, !1), 
            this._vertexBuffer.vertexDeclaration = Mt.vertexDeclaration, this._bufferState.bind(), 
            this._bufferState.applyVertexBuffer(this._vertexBuffer), this._bufferState.unBind();
            var n = Dt._tempVector0, i = Dt._tempVector1;
            n.setValue(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), i.setValue(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE), 
            this._bounds = new At(n, i);
        }
        _getType() {
            return Dt._type;
        }
        _resizeLineData(e) {
            var r = 2 * e, a = this._vertices;
            this._vertexBuffer.destroy(), this._maxLineCount = e;
            var n = r * this._floatCountPerVertices;
            this._vertices = new Float32Array(n), this._vertexBuffer = new V(Mt.vertexDeclaration.vertexStride * r, t.LayaGL.instance.STATIC_DRAW, !1), 
            this._vertexBuffer.vertexDeclaration = Mt.vertexDeclaration, n < a.length ? (this._vertices.set(new Float32Array(a.buffer, 0, n)), 
            this._vertexBuffer.setData(this._vertices.buffer, 0, 0, 4 * n)) : (this._vertices.set(a), 
            this._vertexBuffer.setData(this._vertices.buffer, 0, 0, 4 * a.length)), this._bufferState.bind(), 
            this._bufferState.applyVertexBuffer(this._vertexBuffer), this._bufferState.unBind();
        }
        _updateLineVertices(e, t, r, a, n) {
            t && (this._vertices[e + 0] = t.x, this._vertices[e + 1] = t.y, this._vertices[e + 2] = t.z), 
            a && (this._vertices[e + 3] = a.r, this._vertices[e + 4] = a.g, this._vertices[e + 5] = a.b, 
            this._vertices[e + 6] = a.a), r && (this._vertices[e + 7] = r.x, this._vertices[e + 8] = r.y, 
            this._vertices[e + 9] = r.z), n && (this._vertices[e + 10] = n.r, this._vertices[e + 11] = n.g, 
            this._vertices[e + 12] = n.b, this._vertices[e + 13] = n.a), this._minUpdate = Math.min(this._minUpdate, e), 
            this._maxUpdate = Math.max(this._maxUpdate, e + 2 * this._floatCountPerVertices);
            var s = this._bounds, o = this._floatBound, l = s.getMin(), h = s.getMax();
            i.min(l, t, l), i.min(l, r, l), i.max(h, t, h), i.max(h, r, h), s.setMin(l), s.setMax(h), 
            o[0] = l.x, o[1] = l.y, o[2] = l.z, o[3] = h.x, o[4] = h.y, o[5] = h.z;
        }
        _reCalculateBound() {
            if (this._calculateBound) {
                var e = this._vertices, t = Dt._tempVector0, r = Dt._tempVector1;
                t.setValue(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), r.setValue(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
                for (var a = 0; a < 2 * this._lineCount; ++a) {
                    var n = this._floatCountPerVertices * a, i = e[n + 0], s = e[n + 1], o = e[n + 2];
                    t.x = Math.min(i, t.x), t.y = Math.min(s, t.y), t.z = Math.min(o, t.z), r.x = Math.max(i, r.x), 
                    r.y = Math.max(s, r.y), r.z = Math.max(o, r.z);
                }
                this._bounds.setMin(t), this._bounds.setMax(r);
                var l = this._floatBound;
                l[0] = t.x, l[1] = t.y, l[2] = t.z, l[3] = r.x, l[4] = r.y, l[5] = r.z, this._calculateBound = !1;
            }
        }
        _removeLineData(e) {
            var t = 2 * this._floatCountPerVertices, r = e + 1, a = e * t, n = this._vertices, i = new Float32Array(n.buffer, r * t * 4, (this._lineCount - r) * t);
            n.set(i, a), this._minUpdate = Math.min(this._minUpdate, a), this._maxUpdate = Math.max(this._maxUpdate, a + i.length), 
            this._lineCount--;
            var s = this._floatBound, o = n[a], l = n[a + 1], h = n[a + 2], _ = n[a + 7], d = n[a + 8], c = n[a + 9], u = s[0], m = s[1], f = s[2], E = s[3], T = s[4], p = s[5];
            o !== u && o !== E && l !== m && l !== T && h !== f && h !== p && _ !== u && _ !== E && d !== m && d !== T && c !== f && c !== p || (this._calculateBound = !0);
        }
        _updateLineData(e, t, r, a, n) {
            var i = 2 * this._floatCountPerVertices;
            this._updateLineVertices(e * i, t, r, a, n);
        }
        _updateLineDatas(e, t) {
            for (var r = 2 * this._floatCountPerVertices, a = t.length, n = 0; n < a; n++) {
                var i = t[n];
                this._updateLineVertices((e + n) * r, i.startPosition, i.endPosition, i.startColor, i.endColor);
            }
        }
        _getLineData(e, t) {
            var r = t.startPosition, a = t.startColor, n = t.endPosition, i = t.endColor, s = this._vertices, o = e * this._floatCountPerVertices * 2;
            r.x = s[o + 0], r.y = s[o + 1], r.z = s[o + 2], a.r = s[o + 3], a.g = s[o + 4], 
            a.b = s[o + 5], a.a = s[o + 6], n.x = s[o + 7], n.y = s[o + 8], n.z = s[o + 9], 
            i.r = s[o + 10], i.g = s[o + 11], i.b = s[o + 12], i.a = s[o + 13];
        }
        _prepareRender(e) {
            return !0;
        }
        _render(e) {
            if (this._minUpdate !== Number.MAX_VALUE && this._maxUpdate !== Number.MIN_VALUE && (this._vertexBuffer.setData(this._vertices.buffer, 4 * this._minUpdate, 4 * this._minUpdate, 4 * (this._maxUpdate - this._minUpdate)), 
            this._minUpdate = Number.MAX_VALUE, this._maxUpdate = Number.MIN_VALUE), this._lineCount > 0) {
                this._bufferState.bind();
                var r = t.LayaGL.instance;
                r.drawArrays(r.LINES, 0, 2 * this._lineCount), t.Stat.renderBatches++;
            }
        }
        destroy() {
            this._destroyed || (super.destroy(), this._bufferState.destroy(), this._vertexBuffer.destroy(), 
            this._bufferState = null, this._vertexBuffer = null, this._vertices = null);
        }
    }
    Dt._tempVector0 = new i(), Dt._tempVector1 = new i(), Dt._type = It._typeCounter++;
    class Lt extends $ {
        constructor(e) {
            super(e);
        }
        static __init__() {
            Lt.SHADERDEFINE_RECEIVE_SHADOW = Z.getDefineByName("RECEIVESHADOW"), Lt.SAHDERDEFINE_LIGHTMAP = Z.getDefineByName("LIGHTMAP"), 
            Lt.SHADERDEFINE_LIGHTMAP_DIRECTIONAL = Z.getDefineByName("LIGHTMAP_DIRECTIONAL");
        }
        _onInActive() {
            super._onInActive(), this._scene._removeRenderObject(this._render);
        }
        _onActive() {
            super._onActive(), this._scene._addRenderObject(this._render);
        }
        _onActiveInScene() {
            if (super._onActiveInScene(), h.Laya3D._editerEnvironment) {
                var e = this._scene, t = new n();
                e._allotPickColorByID(this.id, t), e._pickIdToSprite[this.id] = this, this._render._shaderValues.setVector(Lt.PICKCOLOR, t);
            }
        }
        _addToInitStaticBatchManager() {}
        _setBelongScene(e) {
            super._setBelongScene(e), this._render._setBelongScene(e);
        }
        _setUnBelongScene() {
            this.destroyed || (this._render._shaderValues.removeDefine(Lt.SAHDERDEFINE_LIGHTMAP), 
            this._render._setUnBelongScene(), super._setUnBelongScene());
        }
        _changeHierarchyAnimator(e) {
            if (this._hierarchyAnimator) {
                var t = this._hierarchyAnimator._renderableSprites;
                t.splice(t.indexOf(this), 1);
            }
            e && e._renderableSprites.push(this), super._changeHierarchyAnimator(e);
        }
        destroy(e = !0) {
            super.destroy(e), this._render._destroy(), this._render = null;
        }
        _create() {
            return new Lt(this.name);
        }
    }
    Lt.LIGHTMAPSCALEOFFSET = Z.propertyNameToID("u_LightmapScaleOffset"), Lt.LIGHTMAP = Z.propertyNameToID("u_LightMap"), 
    Lt.LIGHTMAP_DIRECTION = Z.propertyNameToID("u_LightMapDirection"), Lt.PICKCOLOR = Z.propertyNameToID("u_PickColor"), 
    Lt.REFLECTIONTEXTURE = Z.propertyNameToID("u_ReflectTexture"), Lt.REFLECTIONCUBE_HDR_PARAMS = Z.propertyNameToID("u_ReflectCubeHDRParams"), 
    Lt.REFLECTIONCUBE_PROBEPOSITION = Z.propertyNameToID("u_SpecCubeProbePosition"), 
    Lt.REFLECTIONCUBE_PROBEBOXMAX = Z.propertyNameToID("u_SpecCubeBoxMax"), Lt.REFLECTIONCUBE_PROBEBOXMIN = Z.propertyNameToID("u_SpecCubeBoxMin");
    class yt {
        constructor() {
            this.updateMark = -1, this.indexInList = -1, this.batched = !1;
        }
    }
    class Ct extends It {
        constructor() {
            super(), this.instanceWorldMatrixData = new Float32Array(16 * Ct.maxInstanceCount), 
            this.instanceSimpleAnimatorData = new Float32Array(4 * Ct.maxInstanceCount);
            var e = t.LayaGL.instance;
            this.instanceWorldMatrixBuffer = new V(4 * this.instanceWorldMatrixData.length, e.DYNAMIC_DRAW), 
            this.instanceWorldMatrixBuffer.vertexDeclaration = ie.instanceWorldMatrixDeclaration, 
            this.instanceSimpleAnimatorBuffer = new V(4 * this.instanceSimpleAnimatorData.length, e.DYNAMIC_DRAW), 
            this.instanceSimpleAnimatorBuffer.vertexDeclaration = ie.instanceSimpleAnimatorDeclaration;
        }
        static __init__() {
            Ct.instance = new Ct();
        }
        _render(e) {
            var r = t.LayaGL.instance, a = e.renderElement, n = a.instanceSubMesh, i = a.instanceBatchElementList.length, s = n._indexCount;
            n._mesh._instanceBufferState.bind(), t.LayaGL.layaGPUInstance.drawElementsInstanced(r.TRIANGLES, s, r.UNSIGNED_SHORT, 2 * n._indexStart, i), 
            t.Stat.renderBatches++, t.Stat.savedRenderBatches += i - 1, t.Stat.trianglesFaces += s * i / 3;
        }
    }
    Ct.maxInstanceCount = 1024;
    class Ot {
        constructor() {
            this.renderSubShader = null, this.renderType = Ot.RENDERTYPE_NORMAL;
        }
        getInvertFront() {
            return this._transform._isFrontFaceInvert;
        }
        setTransform(e) {
            this._transform = e;
        }
        setGeometry(e) {
            this._geometry = e;
        }
        addToOpaqueRenderQueue(e, t) {
            t.elements.add(this);
        }
        addToTransparentRenderQueue(e, t) {
            t.elements.add(this), t.lastTransparentBatched = !1, t.lastTransparentRenderElement = this;
        }
        _update(e, t, r, a, n = 0) {
            if (this.material) {
                var i = this.material._shader.getSubShaderAt(0);
                if (this.renderSubShader = null, r) if (a) {
                    var s = i.getFlag(a);
                    if (!s) return;
                    for (var o = r._subShaders, l = 0, h = o.length; l < h; l++) {
                        var _ = o[l];
                        if (s === _.getFlag(a)) {
                            this.renderSubShader = _;
                            break;
                        }
                    }
                    if (!this.renderSubShader) return;
                } else this.renderSubShader = r.getSubShaderAt(n); else this.renderSubShader = i;
                var d = e._getRenderQueue(this.material.renderQueue);
                d.isTransparent ? this.addToTransparentRenderQueue(t, d) : this.addToOpaqueRenderQueue(t, d);
            }
        }
        _render(e) {
            var t, r, a, n = e.invertY, i = ft._updateMark, s = e.scene, o = e.cameraShaderValue, l = this._transform, h = this._geometry;
            e.renderElement = this, i !== this.render._updateMark || this.renderType !== this.render._updateRenderType ? (this.render._renderUpdate(e, l), 
            this.render._renderUpdateWithCamera(e, l), this.render._updateMark = i, this.render._updateRenderType = this.renderType) : this.renderType == Ot.RENDERTYPE_INSTANCEBATCH && (this.render._renderUpdate(e, l), 
            this.render._renderUpdateWithCamera(e, l));
            var _ = e.pipelineMode;
            if (h._prepareRender(e)) for (var d = this.renderSubShader._passes, c = 0, u = d.length; c < u; c++) {
                var m = d[c];
                if (m._pipelineMode === _) {
                    var f = Ot._compileDefine;
                    s._shaderValues._defineDatas.cloneTo(f), f.addDefineDatas(this.render._shaderValues._defineDatas), 
                    f.addDefineDatas(this.material._shaderValues._defineDatas);
                    var E = e.shader = m.withCompile(f), T = E.bind(), p = i !== E._uploadMark, g = E._uploadScene !== s || p;
                    (g || T) && (E.uploadUniforms(E._sceneUniformParamsMap, s._shaderValues, g), E._uploadScene = s);
                    var S = E._uploadRender !== this.render || E._uploadRenderType !== this.renderType || p;
                    (S || T) && (E.uploadUniforms(E._spriteUniformParamsMap, this.render._shaderValues, S), 
                    E._uploadRender = this.render, E._uploadRenderType = this.renderType);
                    var R = E._uploadCameraShaderValue !== o || p;
                    (R || T) && (E.uploadUniforms(E._cameraUniformParamsMap, o, R), E._uploadCameraShaderValue = o);
                    var v = E._uploadMaterial !== this.material || p;
                    (v || T) && (E.uploadUniforms(E._materialUniformParamsMap, this.material._shaderValues, v), 
                    E._uploadMaterial = this.material);
                    var x = this.material._shaderValues;
                    t !== this.material || r !== E ? (E.uploadRenderStateBlendDepth(x), E.uploadRenderStateFrontFace(x, n, this.getInvertFront()), 
                    t = this.material, r = E, a = this.render) : a !== this.render && (E.uploadRenderStateFrontFace(x, n, this.getInvertFront()), 
                    a = this.render), h._render(e), E._uploadMark = i;
                }
            }
            this.renderType !== Ot.RENDERTYPE_NORMAL && this.render._revertBatchRenderUpdate(e);
        }
        destroy() {
            this._transform = null, this._geometry = null, this.material = null, this.render = null;
        }
    }
    Ot.RENDERTYPE_NORMAL = 0, Ot.RENDERTYPE_STATICBATCH = 1, Ot.RENDERTYPE_INSTANCEBATCH = 2, 
    Ot.RENDERTYPE_VERTEXBATCH = 3, Ot._compileDefine = new w();
    class Nt extends Ot {
        constructor() {
            super(), this._dynamicWorldPositionNormalNeedUpdate = !0;
        }
        _onWorldMatrixChanged() {
            this._dynamicWorldPositionNormalNeedUpdate = !0;
        }
        _computeWorldPositionsAndNormals(e, t, r, a) {
            if (this._dynamicWorldPositionNormalNeedUpdate) {
                for (var n = this._geometry, i = n._vertexBuffer, s = i.vertexDeclaration.vertexStride / 4, o = i.getFloat32Data(), l = this._transform.worldMatrix, h = this._transform.rotation, _ = n._indices, d = 0; d < a; d++) {
                    var c = (r ? _[d] : d) * s, u = 3 * d;
                    A.transformVector3ArrayToVector3ArrayCoordinate(o, c + e, l, this._dynamicWorldPositions, u), 
                    -1 !== t && A.transformVector3ArrayByQuat(o, c + t, h, this._dynamicWorldNormals, u);
                }
                this._dynamicWorldPositionNormalNeedUpdate = !1;
            }
        }
        setTransform(e) {
            this._transform !== e && (this._transform && this._transform.off(t.Event.TRANSFORM_CHANGED, this, this._onWorldMatrixChanged), 
            e && e.on(t.Event.TRANSFORM_CHANGED, this, this._onWorldMatrixChanged), this._dynamicWorldPositionNormalNeedUpdate = !0, 
            this._transform = e);
        }
        setGeometry(e) {
            if (this._geometry !== e) {
                var t = e, r = t._mesh;
                if (r) {
                    var a = r._subMeshes.length > 1, n = a ? t._indexCount : r._vertexCount;
                    if (n <= h.SubMeshDynamicBatch.maxAllowVertexCount) {
                        var i = 3 * n;
                        this._dynamicVertexBatch = !0, this._dynamicWorldPositions = new Float32Array(i), 
                        this._dynamicWorldNormals = new Float32Array(i), this._dynamicVertexCount = n, this._dynamicMultiSubMesh = a;
                    } else this._dynamicVertexBatch = !1;
                }
                this._geometry = e;
            }
        }
        addToOpaqueRenderQueue(e, r) {
            var a = this.staticBatch, n = r.elements, i = n.elements;
            if (a && (!this.render._probReflection || this.render._probReflection._isScene) && Nt.enableStaticBatch) {
                var s = h.MeshRenderStaticBatchManager.instance, o = s.getBatchOpaquaMark(this.render.lightmapIndex + 1, this.render.receiveShadow, this.material.id, a._batchID);
                if (s._updateCountMark === o.updateMark) {
                    var l = o.indexInList;
                    if (o.batched) i[l].staticBatchElementList.add(this); else {
                        var _ = i[l], d = _.render, c = s._getBatchRenderElementFromPool();
                        c.renderType = Ot.RENDERTYPE_STATICBATCH, c.setGeometry(a), c.material = _.material;
                        var u = a.batchOwner, m = u ? u._transform : null;
                        c.setTransform(m), c.render = d, c.renderSubShader = _.renderSubShader;
                        var f = c.staticBatchElementList;
                        f.length = 0, f.add(_), f.add(this), i[l] = c, o.batched = !0;
                    }
                } else o.updateMark = s._updateCountMark, o.indexInList = n.length, o.batched = !1, 
                n.add(this);
            } else if (Nt.enableDynamicBatch && this.renderSubShader._owner._enableInstancing && t.LayaGL.layaGPUInstance.supportInstance() && this.render.lightmapIndex < 0 && (!this.render._probReflection || this.render._probReflection._isScene)) {
                var E = this._geometry, T = h.MeshRenderDynamicBatchManager.instance, p = T.getInstanceBatchOpaquaMark(this.render.receiveShadow, this.material.id, E._id, this._transform._isFrontFaceInvert);
                if (T._updateCountMark === p.updateMark) {
                    var g = p.indexInList;
                    if (p.batched) {
                        var S = i[g].instanceBatchElementList;
                        S.length === Ct.maxInstanceCount ? (p.updateMark = T._updateCountMark, p.indexInList = n.length, 
                        p.batched = !1, n.add(this)) : S.add(this);
                    } else {
                        var R = i[g], v = R.render, x = T._getBatchRenderElementFromPool();
                        x.renderType = Ot.RENDERTYPE_INSTANCEBATCH, x.setGeometry(Ct.instance), x.material = R.material, 
                        x.setTransform(null), x.render = v, x.instanceSubMesh = E, x.renderSubShader = R.renderSubShader;
                        var A = x.instanceBatchElementList;
                        A.length = 0, A.add(R), A.add(this), i[g] = x, p.batched = !0;
                    }
                } else p.updateMark = T._updateCountMark, p.indexInList = n.length, p.batched = !1, 
                n.add(this);
            } else if (this._dynamicVertexBatch && Nt.enableDynamicBatch) {
                var I = this._geometry._vertexBuffer.vertexDeclaration, M = h.MeshRenderDynamicBatchManager.instance, D = M.getVertexBatchOpaquaMark(this.render.lightmapIndex + 1, this.render.receiveShadow, this.material.id, I.id);
                if (M._updateCountMark === D.updateMark) {
                    var L = D.indexInList;
                    if (D.batched) i[L].vertexBatchElementList.add(this); else {
                        var y = i[L], C = y.render, O = M._getBatchRenderElementFromPool();
                        O.renderType = Ot.RENDERTYPE_VERTEXBATCH, O.setGeometry(h.SubMeshDynamicBatch.instance), 
                        O.material = y.material, O.setTransform(null), O.render = C, O.vertexBatchVertexDeclaration = I, 
                        O.renderSubShader = y.renderSubShader;
                        var N = O.vertexBatchElementList;
                        N.length = 0, N.add(y), N.add(this), i[L] = O, D.batched = !0;
                    }
                } else D.updateMark = M._updateCountMark, D.indexInList = n.length, D.batched = !1, 
                n.add(this);
            } else n.add(this);
        }
        addToTransparentRenderQueue(e, r) {
            var a = this.staticBatch, n = r.elements, i = n.elements;
            if (a && Nt.enableStaticBatch) {
                var s = h.MeshRenderStaticBatchManager.instance, o = r.lastTransparentRenderElement;
                if (o) {
                    var l = o.render;
                    if (o._geometry._getType() !== this._geometry._getType() || o.staticBatch !== a || o.material !== this.material || l.receiveShadow !== this.render.receiveShadow || l.lightmapIndex !== this.render.lightmapIndex) n.add(this), 
                    r.lastTransparentBatched = !1; else {
                        if (r.lastTransparentBatched) i[n.length - 1].staticBatchElementList.add(this); else {
                            var _ = s._getBatchRenderElementFromPool();
                            _.renderType = Ot.RENDERTYPE_STATICBATCH, _.setGeometry(a), _.material = o.material;
                            var d = a.batchOwner, c = d ? d._transform : null;
                            _.setTransform(c), _.render = this.render, _.renderSubShader = o.renderSubShader;
                            var u = _.staticBatchElementList;
                            u.length = 0, u.add(o), u.add(this), i[n.length - 1] = _;
                        }
                        r.lastTransparentBatched = !0;
                    }
                } else n.add(this), r.lastTransparentBatched = !1;
            } else if (Nt.enableDynamicBatch && this.renderSubShader._owner._enableInstancing && t.LayaGL.layaGPUInstance.supportInstance() && this.render.lightmapIndex < 0 && (!this.render._probReflection || this.render._probReflection._isScene)) {
                var m = this._geometry, f = h.MeshRenderDynamicBatchManager.instance, E = r.lastTransparentRenderElement;
                if (E) {
                    var T = E.render;
                    if (E._geometry._getType() !== this._geometry._getType() || E._geometry !== m || E.material !== this.material || T.receiveShadow !== this.render.receiveShadow) n.add(this), 
                    r.lastTransparentBatched = !1; else if (r.lastTransparentBatched) {
                        var p = i[n.length - 1].instanceBatchElementList;
                        p.length === Ct.maxInstanceCount ? (n.add(this), r.lastTransparentBatched = !1) : (p.add(this), 
                        r.lastTransparentBatched = !0);
                    } else {
                        var g = f._getBatchRenderElementFromPool();
                        g.renderType = Ot.RENDERTYPE_INSTANCEBATCH, g.setGeometry(Ct.instance), g.material = E.material, 
                        g.setTransform(null), g.render = this.render, g.instanceSubMesh = m, g.renderSubShader = E.renderSubShader;
                        var S = g.instanceBatchElementList;
                        S.length = 0, S.add(E), S.add(this), i[n.length - 1] = g, r.lastTransparentBatched = !0;
                    }
                } else n.add(this), r.lastTransparentBatched = !1;
            } else if (this._dynamicVertexBatch && Nt.enableDynamicBatch) {
                var R = this._geometry._vertexBuffer.vertexDeclaration, v = h.MeshRenderDynamicBatchManager.instance, x = r.lastTransparentRenderElement;
                if (x) {
                    var A = x.render;
                    if (x._dynamicVertexBatch && x._geometry._getType() === this._geometry._getType() && x._geometry._vertexBuffer._vertexDeclaration === R && x.material === this.material && A.receiveShadow === this.render.receiveShadow && A.lightmapIndex === this.render.lightmapIndex) {
                        if (r.lastTransparentBatched) i[n.length - 1].vertexBatchElementList.add(this); else {
                            var I = v._getBatchRenderElementFromPool();
                            I.renderType = Ot.RENDERTYPE_VERTEXBATCH, I.setGeometry(h.SubMeshDynamicBatch.instance), 
                            I.material = x.material, I.setTransform(null), I.render = this.render, I.vertexBatchVertexDeclaration = R, 
                            I.renderSubShader = x.renderSubShader;
                            var M = I.vertexBatchElementList;
                            M.length = 0, M.add(x), M.add(this), i[n.length - 1] = I;
                        }
                        r.lastTransparentBatched = !0;
                    } else n.add(this), r.lastTransparentBatched = !1;
                } else n.add(this), r.lastTransparentBatched = !1;
            } else n.add(this);
            r.lastTransparentRenderElement = this;
        }
        getInvertFront() {
            switch (this.renderType) {
              case Ot.RENDERTYPE_NORMAL:
                return this._transform._isFrontFaceInvert;

              case Ot.RENDERTYPE_STATICBATCH:
              case Ot.RENDERTYPE_VERTEXBATCH:
                return !1;

              case Ot.RENDERTYPE_INSTANCEBATCH:
                return this.instanceBatchElementList.elements[0]._transform._isFrontFaceInvert;

              default:
                throw "SubMeshRenderElement: unknown renderType";
            }
        }
        destroy() {
            super.destroy(), this._dynamicWorldPositions = null, this._dynamicWorldNormals = null, 
            this.staticBatch = null, this.staticBatchElementList = null, this.vertexBatchElementList = null, 
            this.vertexBatchVertexDeclaration = null;
        }
    }
    Nt.enableDynamicBatch = !0, Nt.enableStaticBatch = !0;
    class Pt {
        constructor() {
            this._initBatchSprites = [], this._staticBatches = {}, this._batchRenderElementPoolIndex = 0, 
            this._batchRenderElementPool = [];
        }
        static _addToStaticBatchQueue(e, t) {
            e instanceof Lt && t.push(e);
            for (var r = 0, a = e.numChildren; r < a; r++) Pt._addToStaticBatchQueue(e._children[r], t);
        }
        static _registerManager(e) {
            Pt._managers.push(e);
        }
        static combine(e, t = null) {
            t || (t = [], e && Pt._addToStaticBatchQueue(e, t));
            var r = t.length;
            if (r > 0) {
                for (var a = 0; a < r; a++) {
                    var n = t[a];
                    n.destroyed || (n._render._isPartOfStaticBatch ? console.warn("StaticBatchManager: Sprite " + n.name + " has a part of Static Batch,it will be ignore.") : n._addToInitStaticBatchManager());
                }
                for (var i = 0, s = Pt._managers.length; i < s; i++) {
                    Pt._managers[i]._initStaticBatchs(e);
                }
            }
        }
        _partition(e, t, r) {
            for (var a = e[Math.floor((r + t) / 2)]; t <= r; ) {
                for (;this._compare(e[t], a) < 0; ) t++;
                for (;this._compare(e[r], a) > 0; ) r--;
                if (t < r) {
                    var n = e[t];
                    e[t] = e[r], e[r] = n, t++, r--;
                } else if (t === r) {
                    t++;
                    break;
                }
            }
            return t;
        }
        _quickSort(e, t, r) {
            if (e.length > 1) {
                var a = this._partition(e, t, r), n = a - 1;
                t < n && this._quickSort(e, t, n), a < r && this._quickSort(e, a, r);
            }
        }
        _compare(e, t) {
            throw "StaticBatch:must override this function.";
        }
        _initStaticBatchs(e) {
            throw "StaticBatch:must override this function.";
        }
        _getBatchRenderElementFromPool() {
            throw "StaticBatch:must override this function.";
        }
        _addBatchSprite(e) {
            this._initBatchSprites.push(e);
        }
        _clear() {
            this._batchRenderElementPoolIndex = 0;
        }
        _garbageCollection() {
            throw "StaticBatchManager: must override it.";
        }
        dispose() {
            this._staticBatches = null;
        }
    }
    Pt._managers = [];
    class wt extends It {
        constructor(e, t) {
            super(), this._bufferState = new G(), this._batchID = wt._batchIDCounter++, this._batchElements = [], 
            this._currentBatchVertexCount = 0, this._currentBatchIndexCount = 0, this._vertexDeclaration = t, 
            this.batchOwner = e;
        }
        _getStaticBatchBakedVertexs(e, t, r, a, n, i) {
            var s, o = i._vertexBuffer, l = o.vertexDeclaration, h = l.getVertexElementByUsage(ie.MESH_POSITION0)._offset / 4, _ = l.getVertexElementByUsage(ie.MESH_NORMAL0), d = _ ? _._offset / 4 : -1, c = l.getVertexElementByUsage(ie.MESH_COLOR0), u = c ? c._offset / 4 : -1, m = l.getVertexElementByUsage(ie.MESH_TEXTURECOORDINATE0), f = m ? m._offset / 4 : -1, E = l.getVertexElementByUsage(ie.MESH_TEXTURECOORDINATE1), T = E ? E._offset / 4 : -1, p = l.getVertexElementByUsage(ie.MESH_TANGENT0), g = p ? p._offset / 4 : -1, S = l.vertexStride / 4, R = o.getFloat32Data();
            r ? (r.worldMatrix.invert(wt._tempMatrix4x40), s = wt._tempMatrix4x41, b.multiply(wt._tempMatrix4x40, a.worldMatrix, s)) : s = a.worldMatrix;
            var v = wt._tempMatrix4x42;
            s.invert(v), v.transpose();
            var x = wt._tempQuaternion0;
            s.decomposeTransRotScale(wt._tempVector30, x, wt._tempVector31);
            for (var I = n.lightmapScaleOffset, M = i.vertexCount, D = 0; D < M; D++) {
                var L, y, C = D * S, O = 18 * (D + t);
                A.transformVector3ArrayToVector3ArrayCoordinate(R, C + h, s, e, O + 0), -1 !== d && A.transformVector3ArrayToVector3ArrayNormal(R, C + d, v, e, O + 3);
                var N = O + 6;
                if (-1 !== u) {
                    var P = C + u;
                    for (L = 0, y = 4; L < y; L++) e[N + L] = R[P + L];
                } else for (L = 0, y = 4; L < y; L++) e[N + L] = 1;
                if (-1 !== f) {
                    var w = C + f;
                    e[O + 10] = R[w], e[O + 11] = R[w + 1];
                }
                if (I && (-1 !== T ? A.transformLightingMapTexcoordArray(R, C + T, I, e, O + 12) : A.transformLightingMapTexcoordArray(R, C + f, I, e, O + 12)), 
                -1 !== g) {
                    var V = C + g;
                    A.transformVector3ArrayToVector3ArrayNormal(R, V, v, e, O + 14), e[O + 17] = R[V + 3];
                }
            }
            return M;
        }
        addTest(e) {
            var t = e.meshFilter.sharedMesh.vertexCount;
            return !(this._currentBatchVertexCount + t > wt.maxBatchVertexCount);
        }
        add(e) {
            var t = e.meshFilter.sharedMesh, r = t.vertexCount;
            this._batchElements.push(e);
            var a = e._render;
            a._isPartOfStaticBatch = !0, a._staticBatch = this;
            for (var n = a._renderElements, i = 0, s = n.length; i < s; i++) n[i].staticBatch = this;
            this._currentBatchIndexCount += t._indexBuffer.indexCount, this._currentBatchVertexCount += r;
        }
        remove(e) {
            var t = e.meshFilter.sharedMesh, r = this._batchElements.indexOf(e);
            if (-1 !== r) {
                this._batchElements.splice(r, 1);
                for (var a = e._render._renderElements, n = 0, i = a.length; n < i; n++) a[n].staticBatch = null;
                this._currentBatchIndexCount = this._currentBatchIndexCount - t._indexBuffer.indexCount, 
                this._currentBatchVertexCount = this._currentBatchVertexCount - t.vertexCount, e._render._isPartOfStaticBatch = !1;
            }
        }
        finishInit() {
            this._vertexBuffer && (this._vertexBuffer.destroy(), this._indexBuffer.destroy(), 
            t.Resource._addGPUMemory(-(this._vertexBuffer._byteLength + this._indexBuffer._byteLength)));
            var r = t.LayaGL.instance, a = 0, n = 0, i = this.batchOwner, s = this._vertexDeclaration.vertexStride / 4, o = new Float32Array(s * this._currentBatchVertexCount), l = new Uint16Array(this._currentBatchIndexCount);
            this._vertexBuffer = new V(this._vertexDeclaration.vertexStride * this._currentBatchVertexCount, r.STATIC_DRAW), 
            this._vertexBuffer.vertexDeclaration = this._vertexDeclaration, this._indexBuffer = new st(e.IndexFormat.UInt16, this._currentBatchIndexCount, r.STATIC_DRAW);
            for (var h = 0, _ = this._batchElements.length; h < _; h++) {
                for (var d, c = this._batchElements[h], u = c.meshFilter.sharedMesh, m = this._getStaticBatchBakedVertexs(o, a, i ? i._transform : null, c._transform, c._render, u), f = u._indexBuffer.getData(), E = a, T = n + f.length, p = c._render._renderElements, g = 0, S = u.subMeshCount; g < S; g++) {
                    var R = u._subMeshes[g], v = n + R._indexStart, x = p[g];
                    x.staticBatchIndexStart = v, x.staticBatchIndexEnd = v + R._indexCount;
                }
                if (l.set(f, n), i ? c._transform._isFrontFaceInvert !== i.transform._isFrontFaceInvert : c._transform._isFrontFaceInvert) for (d = n; d < T; d += 3) {
                    l[d] = E + l[d];
                    var A = l[d + 1], I = l[d + 2];
                    l[d + 1] = E + I, l[d + 2] = E + A;
                } else for (d = n; d < T; d += 3) l[d] = E + l[d], l[d + 1] = E + l[d + 1], l[d + 2] = E + l[d + 2];
                n += f.length, a += m;
            }
            this._vertexBuffer.setData(o.buffer), this._indexBuffer.setData(l);
            var M = this._vertexBuffer._byteLength + this._indexBuffer._byteLength;
            t.Resource._addGPUMemory(M), this._bufferState.bind(), this._bufferState.applyVertexBuffer(this._vertexBuffer), 
            this._bufferState.applyIndexBuffer(this._indexBuffer), this._bufferState.unBind();
        }
        _render(e) {
            this._bufferState.bind();
            for (var r = t.LayaGL.instance, a = e.renderElement.staticBatchElementList, n = a.elements, i = 0, s = 0, o = a.length, l = 1; l < o; l++) {
                if (n[l - 1].staticBatchIndexEnd !== n[l].staticBatchIndexStart) {
                    var h = n[i].staticBatchIndexStart, _ = n[s].staticBatchIndexEnd - h;
                    r.drawElements(r.TRIANGLES, _, r.UNSIGNED_SHORT, 2 * h), i = ++s, t.Stat.trianglesFaces += _ / 3;
                } else s++;
            }
            h = n[i].staticBatchIndexStart, _ = n[s].staticBatchIndexEnd - h, r.drawElements(r.TRIANGLES, _, r.UNSIGNED_SHORT, 2 * h), 
            t.Stat.renderBatches++, t.Stat.savedRenderBatches += o - 1, t.Stat.trianglesFaces += _ / 3;
        }
        dispose() {
            var e = this._vertexBuffer._byteLength + this._indexBuffer._byteLength;
            t.Resource._addGPUMemory(-e), this._batchElements = null, this.batchOwner = null, 
            this._vertexDeclaration = null, this._bufferState.destroy(), this._vertexBuffer.destroy(), 
            this._indexBuffer.destroy(), this._vertexBuffer = null, this._indexBuffer = null, 
            this._bufferState = null;
        }
    }
    wt._tempVector30 = new i(), wt._tempVector31 = new i(), wt._tempQuaternion0 = new T(), 
    wt._tempMatrix4x40 = new b(), wt._tempMatrix4x41 = new b(), wt._tempMatrix4x42 = new b(), 
    wt.maxBatchVertexCount = 65535, wt._batchIDCounter = 0;
    class Vt extends Pt {
        constructor() {
            super(), this._opaqueBatchMarks = [], this._updateCountMark = 0;
        }
        static __init__() {
            Vt._verDec = ie.getVertexDeclaration("POSITION,NORMAL,COLOR,UV,UV1,TANGENT");
        }
        _compare(e, t) {
            var r = e._render, a = t._render, n = e.meshFilter.sharedMesh, i = t.meshFilter.sharedMesh, s = r.lightmapIndex - a.lightmapIndex;
            if (0 === s) {
                var o = (r.receiveShadow ? 1 : 0) - (a.receiveShadow ? 1 : 0);
                if (0 === o) {
                    var l = r.sharedMaterial && a.sharedMaterial ? r.sharedMaterial.id - a.sharedMaterial.id : 0;
                    if (0 === l) {
                        var h = n._vertexBuffer.vertexDeclaration.id - i._vertexBuffer.vertexDeclaration.id;
                        return 0 === h ? i._indexBuffer.indexCount - n._indexBuffer.indexCount : h;
                    }
                    return l;
                }
                return o;
            }
            return s;
        }
        _getBatchRenderElementFromPool() {
            var e = this._batchRenderElementPool[this._batchRenderElementPoolIndex++];
            return e || (e = new Nt(), this._batchRenderElementPool[this._batchRenderElementPoolIndex - 1] = e, 
            e.staticBatchElementList = new ze()), e;
        }
        _getStaticBatch(e, t, r) {
            var a = e[r];
            return a || (a = e[r] = new wt(t, Vt._verDec), this._staticBatches[a._batchID] = a), 
            a;
        }
        _initStaticBatchs(e) {
            var t = this._initBatchSprites;
            this._quickSort(t, 0, t.length - 1);
            for (var r, a = [], n = !1, i = 0, s = 0, o = t.length; s < o; s++) {
                var l = t[s];
                if (n) r.addTest(l) ? r.add(l) : (n = !1, i++); else s !== o - 1 && ((r = this._getStaticBatch(a, e, i)).add(l), 
                n = !0);
            }
            for (s = 0, o = a.length; s < o; s++) {
                var h = a[s];
                h && h.finishInit();
            }
            this._initBatchSprites.length = 0;
        }
        _removeRenderSprite(e) {
            var t = e._render, r = t._staticBatch, a = r._batchElements, n = a.indexOf(e);
            if (-1 !== n) {
                a.splice(n, 1), t._staticBatch = null;
                for (var i = t._renderElements, s = 0, o = i.length; s < o; s++) i[s].staticBatch = null;
            }
            0 === a.length && (delete this._staticBatches[r._batchID], r.dispose());
        }
        _clear() {
            super._clear(), this._updateCountMark++;
        }
        _garbageCollection() {
            for (var e in this._staticBatches) {
                var t = this._staticBatches[e];
                0 === t._batchElements.length && (t.dispose(), delete this._staticBatches[e]);
            }
        }
        getBatchOpaquaMark(e, t, r, a) {
            var n = t ? 1 : 0, i = this._opaqueBatchMarks[e] || (this._opaqueBatchMarks[e] = []), s = i[n] || (i[n] = []), o = s[r] || (s[r] = []);
            return o[a] || (o[a] = new yt());
        }
    }
    Vt.instance = new Vt(), (Ce = e.ReflectionProbeMode || (e.ReflectionProbeMode = {}))[Ce.off = 0] = "off", 
    Ce[Ce.simple = 1] = "simple";
    class Bt extends $ {
        constructor() {
            super(), this._boxProjection = !1, this._size = new i(), this._offset = new i(), 
            this._reflectionHDRParams = new n(), this._reflectionDecodeFormat = t.TextureDecodeFormat.Normal, 
            this._isScene = !1;
        }
        get boxProjection() {
            return this._boxProjection;
        }
        set boxProjection(e) {
            this._boxProjection = e;
        }
        get importance() {
            return this._importance;
        }
        set importance(e) {
            this._importance = e;
        }
        get intensity() {
            return this._intensity;
        }
        set intensity(e) {
            e = Math.max(Math.min(e, 1), 0), this._reflectionHDRParams.x = e, this._reflectionDecodeFormat == t.TextureDecodeFormat.RGBM && (this._reflectionHDRParams.x *= 5), 
            this._intensity = e;
        }
        get reflectionTexture() {
            return this._reflectionTexture;
        }
        set reflectionTexture(e) {
            this._reflectionTexture = e, this._reflectionTexture._addReference();
        }
        get bounds() {
            return this._bounds;
        }
        set bounds(e) {
            this._bounds = e;
        }
        get boundsMax() {
            return this._bounds.getMax();
        }
        get boundsMin() {
            return this._bounds.getMin();
        }
        get probePosition() {
            return this.transform.position;
        }
        get reflectionHDRParams() {
            return this._reflectionHDRParams;
        }
        set reflectionHDRParams(e) {
            this._reflectionHDRParams = e;
        }
        _parse(e, r) {
            super._parse(e, r), this._boxProjection = e.boxProjection, this._importance = e.importance, 
            this._reflectionTexture = t.Loader.getRes(e.reflection);
            var a = this.transform.position;
            this._size.fromArray(e.boxSize), i.scale(this._size, .5, Bt.TEMPVECTOR3), this._offset.fromArray(e.boxOffset);
            var n = new i(), s = new i();
            i.add(a, Bt.TEMPVECTOR3, s), i.add(s, this._offset, s), i.subtract(a, Bt.TEMPVECTOR3, n), 
            i.add(n, this._offset, n), this._reflectionDecodeFormat = e.reflectionDecodingFormat, 
            this.intensity = e.intensity, this._bounds ? (this._bounds.setMin(n), this._bounds.setMax(s)) : this.bounds = new At(n, s);
        }
        _setIndexInReflectionList(e) {
            this._indexInReflectProbList = e;
        }
        _getIndexInReflectionList() {
            return this._indexInReflectProbList;
        }
        _onActive() {
            super._onActive(), this._reflectionTexture && this.scene._reflectionProbeManager.add(this);
        }
        _onInActive() {
            super._onInActive(), this.reflectionTexture && this.scene._reflectionProbeManager.remove(this);
        }
        destroy(e = !0) {
            this.destroyed || (super.destroy(e), this._reflectionTexture && this._reflectionTexture._removeReference(), 
            this._reflectionTexture = null, this._bounds = null);
        }
        _cloneTo(e, t, r) {
            var a = e;
            a.bounds = this.bounds, a.boxProjection = this.boxProjection, a.importance = this.importance, 
            a._size = this._size, a._offset = this._offset, a.intensity = this.intensity, a.reflectionHDRParams = this.reflectionHDRParams, 
            super._cloneTo(e, t, r);
        }
    }
    Bt.TEMPVECTOR3 = new i(), Bt.defaultTextureHDRDecodeValues = new n(1, 1, 0, 0);
    class bt extends t.EventDispatcher {
        constructor(r) {
            super(), this._lightmapScaleOffset = new n(1, 1, 0, 0), this._indexInList = -1, 
            this._indexInCastShadowList = -1, this._boundsChange = !0, this._castShadow = !1, 
            this._supportOctree = !0, this._sharedMaterials = [], this._renderMark = -1, this._indexInOctreeMotionList = -1, 
            this._reflectionMode = e.ReflectionProbeMode.simple, this._updateMark = -1, this._updateRenderType = -1, 
            this._isPartOfStaticBatch = !1, this._staticBatch = null, this._id = ++bt._uniqueIDCounter, 
            this._indexInCastShadowList = -1, this._bounds = new At(i._ZERO, i._ZERO), this._renderElements = [], 
            this._owner = r, this._enable = !0, this._materialsInstance = [], this._shaderValues = new F(null), 
            this.lightmapIndex = -1, this.receiveShadow = !1, this.sortingFudge = 0, r && this._owner.transform.on(t.Event.TRANSFORM_CHANGED, this, this._onWorldMatNeedChange);
        }
        get id() {
            return this._id;
        }
        get lightmapIndex() {
            return this._lightmapIndex;
        }
        set lightmapIndex(e) {
            this._lightmapIndex = e;
        }
        get lightmapScaleOffset() {
            return this._lightmapScaleOffset;
        }
        set lightmapScaleOffset(e) {
            if (!e) throw "BaseRender: lightmapScaleOffset can't be null.";
            this._lightmapScaleOffset = e, this._shaderValues.setVector(Lt.LIGHTMAPSCALEOFFSET, e);
        }
        get enable() {
            return this._enable;
        }
        set enable(e) {
            this._enable = !!e;
        }
        get material() {
            var e = this._sharedMaterials[0];
            if (e && !this._materialsInstance[0]) {
                var t = this._getInstanceMaterial(e, 0), r = this._renderElements[0];
                r && (r.material = t);
            }
            return this._sharedMaterials[0];
        }
        set material(e) {
            this.sharedMaterial = e, this._isSupportReflection();
        }
        get materials() {
            for (var e = 0, t = this._sharedMaterials.length; e < t; e++) if (!this._materialsInstance[e]) {
                var r = this._getInstanceMaterial(this._sharedMaterials[e], e), a = this._renderElements[e];
                a && (a.material = r);
            }
            return this._sharedMaterials.slice();
        }
        set materials(e) {
            this.sharedMaterials = e, this._isSupportReflection();
        }
        get sharedMaterial() {
            return this._sharedMaterials[0];
        }
        set sharedMaterial(e) {
            var t = this._sharedMaterials[0];
            if (t !== e) {
                this._sharedMaterials[0] = e, this._materialsInstance[0] = !1, this._changeMaterialReference(t, e);
                var r = this._renderElements[0];
                r && (r.material = e);
            }
            this._isSupportReflection();
        }
        get sharedMaterials() {
            return this._sharedMaterials.slice();
        }
        set sharedMaterials(e) {
            for (var t = this._materialsInstance, r = this._sharedMaterials, a = 0, n = r.length; a < n; a++) {
                var i = r[a];
                i && i._removeReference();
            }
            if (!e) throw new Error("BaseRender: shadredMaterials value can't be null.");
            var s = e.length;
            for (t.length = s, r.length = s, a = 0; a < s; a++) {
                i = r[a];
                var o = e[a];
                if (i !== o) {
                    t[a] = !1;
                    var l = this._renderElements[a];
                    l && (l.material = o);
                }
                o && o._addReference(), r[a] = o;
            }
            this._isSupportReflection();
        }
        get bounds() {
            return this._boundsChange && (this._calculateBoundingBox(), this._boundsChange = !1), 
            this._bounds;
        }
        set receiveShadow(e) {
            this._receiveShadow !== e && (this._receiveShadow = e, e ? this._shaderValues.addDefine(Lt.SHADERDEFINE_RECEIVE_SHADOW) : this._shaderValues.removeDefine(Lt.SHADERDEFINE_RECEIVE_SHADOW));
        }
        get receiveShadow() {
            return this._receiveShadow;
        }
        get castShadow() {
            return this._castShadow;
        }
        set castShadow(e) {
            this._castShadow = e;
        }
        get isPartOfStaticBatch() {
            return this._isPartOfStaticBatch;
        }
        get isRender() {
            return -1 == this._renderMark || this._renderMark == t.Stat.loopCount - 1;
        }
        set reflectionMode(e) {
            this._reflectionMode = e;
        }
        get reflectionMode() {
            return this._reflectionMode;
        }
        _getOctreeNode() {
            return this._octreeNode;
        }
        _setOctreeNode(e) {
            e || -1 !== this._indexInOctreeMotionList && this._octreeNode._octree.removeMotionObject(this), 
            this._octreeNode = e;
        }
        _getIndexInMotionList() {
            return this._indexInOctreeMotionList;
        }
        _setIndexInMotionList(e) {
            this._indexInOctreeMotionList = e;
        }
        _changeMaterialReference(e, t) {
            e && e._removeReference(), t._addReference();
        }
        _getInstanceMaterial(e, t) {
            var r = e.clone();
            return r.name = r.name + "(Instance)", this._materialsInstance[t] = !0, this._changeMaterialReference(this._sharedMaterials[t], r), 
            this._sharedMaterials[t] = r, r;
        }
        _isSupportReflection() {
            this._surportReflectionProbe = !1;
            for (var e = this._sharedMaterials, t = 0, r = e.length; t < r; t++) {
                var a = e[t];
                this._surportReflectionProbe = this._surportReflectionProbe || a && a._shader._supportReflectionProbe;
            }
        }
        _addReflectionProbeUpdate() {
            this._surportReflectionProbe && 1 == this._reflectionMode && this._scene && this._scene._reflectionProbeManager.addMotionObject(this);
        }
        _applyLightMapParams() {
            var e = this._scene.lightmaps, t = this._shaderValues, r = this._lightmapIndex;
            if (r >= 0 && r < e.length) {
                var a = e[r];
                t.setTexture(Lt.LIGHTMAP, a.lightmapColor), t.addDefine(Lt.SAHDERDEFINE_LIGHTMAP), 
                a.lightmapDirection ? (t.setTexture(Lt.LIGHTMAP_DIRECTION, a.lightmapDirection), 
                t.addDefine(Lt.SHADERDEFINE_LIGHTMAP_DIRECTIONAL)) : t.removeDefine(Lt.SHADERDEFINE_LIGHTMAP_DIRECTIONAL);
            } else t.removeDefine(Lt.SAHDERDEFINE_LIGHTMAP), t.removeDefine(Lt.SHADERDEFINE_LIGHTMAP_DIRECTIONAL);
        }
        _onWorldMatNeedChange(e) {
            this._boundsChange = !0, this._octreeNode && (e &= J.TRANSFORM_WORLDPOSITION | J.TRANSFORM_WORLDQUATERNION | J.TRANSFORM_WORLDSCALE) && -1 === this._indexInOctreeMotionList && this._octreeNode._octree.addMotionObject(this), 
            this._addReflectionProbeUpdate();
        }
        _calculateBoundingBox() {
            throw "BaseRender: must override it.";
        }
        _getIndexInList() {
            return this._indexInList;
        }
        _setIndexInList(e) {
            this._indexInList = e;
        }
        _setBelongScene(e) {
            this._scene = e;
        }
        _setUnBelongScene() {
            this._scene = null;
        }
        _needRender(e, t) {
            return !0;
        }
        _OctreeNoRender() {}
        _renderUpdate(e, t) {}
        _renderUpdateWithCamera(e, t) {}
        _revertBatchRenderUpdate(e) {}
        _destroy() {
            -1 !== this._indexInOctreeMotionList && this._octreeNode._octree.removeMotionObject(this), 
            this.offAll();
            var e = 0, t = 0;
            for (e = 0, t = this._renderElements.length; e < t; e++) this._renderElements[e].destroy();
            for (e = 0, t = this._sharedMaterials.length; e < t; e++) this._sharedMaterials[e].destroyed || this._sharedMaterials[e]._removeReference();
            this._renderElements = null, this._owner = null, this._sharedMaterials = null, this._bounds = null, 
            this._lightmapScaleOffset = null, this._scene = null;
        }
        markAsUnStatic() {
            this._isPartOfStaticBatch && (Vt.instance._removeRenderSprite(this._owner), this._isPartOfStaticBatch = !1);
        }
    }
    bt._tempBoundBoxCorners = [ new i(), new i(), new i(), new i(), new i(), new i(), new i(), new i() ], 
    bt._uniqueIDCounter = 0, bt._defaultLightmapScaleOffset = new n(1, 1, 0, 0);
    class Ft extends bt {
        constructor(e) {
            super(e), this._projectionViewWorldMatrix = new b();
        }
        _calculateBoundingBox() {
            var e = this._owner.transform.worldMatrix, t = this._owner._geometryFilter;
            t._reCalculateBound(), t._bounds._tranform(e, this._bounds);
        }
        _renderUpdateWithCamera(e, t) {
            var r = e.projectionViewMatrix, a = this._shaderValues;
            if (t) {
                var n = t.worldMatrix;
                a.setMatrix4x4($.WORLDMATRIX, n), b.multiply(r, n, this._projectionViewWorldMatrix), 
                a.setMatrix4x4($.MVPMATRIX, this._projectionViewWorldMatrix);
            } else a.setMatrix4x4($.WORLDMATRIX, b.DEFAULT), a.setMatrix4x4($.MVPMATRIX, r);
        }
    }
    class Ut extends Lt {
        constructor(e = 2, t = null) {
            super(t), this._isRenderActive = !1, this._isInRenders = !1, this._geometryFilter = new Dt(this, e), 
            this._render = new Ft(this), this._changeRenderObjects(0, vt.defaultMaterial);
        }
        get maxLineCount() {
            return this._geometryFilter._maxLineCount;
        }
        set maxLineCount(e) {
            this._geometryFilter._resizeLineData(e), this._geometryFilter._lineCount = Math.min(this._geometryFilter._lineCount, e);
        }
        get lineCount() {
            return this._geometryFilter._lineCount;
        }
        set lineCount(e) {
            if (e > this.maxLineCount) throw "PixelLineSprite3D: lineCount can't large than maxLineCount";
            this._geometryFilter._lineCount = e;
        }
        get pixelLineRenderer() {
            return this._render;
        }
        _onInActive() {
            t.Stat.spriteCount--, 0 != this._geometryFilter._lineCount && this._isRenderActive && (this._scene._removeRenderObject(this._render), 
            this._isInRenders = !1), this._isRenderActive = !1;
        }
        _onActive() {
            t.Stat.spriteCount++, this._isRenderActive = !0, 0 != this._geometryFilter._lineCount && (this._scene._addRenderObject(this._render), 
            this._isInRenders = !0);
        }
        _changeRenderObjects(e, t) {
            var r = this._render._renderElements;
            t || (t = vt.defaultMaterial);
            var a = r[e];
            a || (a = r[e] = new Ot()), a.setTransform(this._transform), a.setGeometry(this._geometryFilter), 
            a.render = this._render, a.material = t;
        }
        addLine(e, t, r, a) {
            if (this._geometryFilter._lineCount === this._geometryFilter._maxLineCount) throw "PixelLineSprite3D: lineCount has equal with maxLineCount.";
            this._geometryFilter._updateLineData(this._geometryFilter._lineCount++, e, t, r, a), 
            this._isRenderActive && !this._isInRenders && this._geometryFilter._lineCount > 0 && (this._scene._addRenderObject(this._render), 
            this._isInRenders = !0);
        }
        addLines(e) {
            var t = this._geometryFilter._lineCount, r = e.length;
            if (t + r > this._geometryFilter._maxLineCount) throw "PixelLineSprite3D: lineCount plus lines count must less than maxLineCount.";
            this._geometryFilter._updateLineDatas(t, e), this._geometryFilter._lineCount += r, 
            this._isRenderActive && !this._isInRenders && this._geometryFilter._lineCount > 0 && (this._scene._addRenderObject(this._render), 
            this._isInRenders = !0);
        }
        removeLine(e) {
            if (!(e < this._geometryFilter._lineCount)) throw "PixelLineSprite3D: index must less than lineCount.";
            this._geometryFilter._removeLineData(e), this._isRenderActive && this._isInRenders && 0 == this._geometryFilter._lineCount && (this._scene._removeRenderObject(this._render), 
            this._isInRenders = !1);
        }
        setLine(e, t, r, a, n) {
            if (!(e < this._geometryFilter._lineCount)) throw "PixelLineSprite3D: index must less than lineCount.";
            this._geometryFilter._updateLineData(e, t, r, a, n);
        }
        getLine(e, t) {
            if (!(e < this.lineCount)) throw "PixelLineSprite3D: index must less than lineCount.";
            this._geometryFilter._getLineData(e, t);
        }
        clear() {
            this._geometryFilter._lineCount = 0, this._isRenderActive && this._isInRenders && (this._scene._removeRenderObject(this._render), 
            this._isInRenders = !1);
        }
        _create() {
            return new Ut();
        }
    }
    class Ht {
        constructor(e = !1) {
            this.isTransparent = !1, this.elements = new ze(), this.lastTransparentRenderElement = null, 
            this.lastTransparentBatched = !1, this.isTransparent = e;
        }
        _compare(e, t) {
            var r = e.material.renderQueue - t.material.renderQueue;
            return 0 === r ? (this.isTransparent ? t.render._distanceForSort - e.render._distanceForSort : e.render._distanceForSort - t.render._distanceForSort) + t.render.sortingFudge - e.render.sortingFudge : r;
        }
        _partitionRenderObject(e, t) {
            for (var r = this.elements.elements, a = r[Math.floor((t + e) / 2)]; e <= t; ) {
                for (;this._compare(r[e], a) < 0; ) e++;
                for (;this._compare(r[t], a) > 0; ) t--;
                if (e < t) {
                    var n = r[e];
                    r[e] = r[t], r[t] = n, e++, t--;
                } else if (e === t) {
                    e++;
                    break;
                }
            }
            return e;
        }
        _quickSort(e, t) {
            if (this.elements.length > 1) {
                var r = this._partitionRenderObject(e, t), a = r - 1;
                e < a && this._quickSort(e, a), r < t && this._quickSort(r, t);
            }
        }
        _render(e) {
            for (var t = this.elements.elements, r = 0, a = this.elements.length; r < a; r++) t[r]._render(e);
        }
        clear() {
            this.elements.length = 0, this.lastTransparentRenderElement = null, this.lastTransparentBatched = !1;
        }
    }
    class Gt {
        constructor(e, t, r, a) {
            this._bounds = new xt(new i(), new i()), this._objects = [], this._isContaion = !1, 
            this.center = new i(), this.baseLength = 0, this._setValues(e, t, r, a);
        }
        static _encapsulates(e, t) {
            return rt.boxContainsBox(e, t) == tt.Contains;
        }
        _setValues(e, t, r, a) {
            this._octree = e, this._parent = t, this.baseLength = r, a.cloneTo(this.center);
            var n = this._bounds.min, i = this._bounds.max, s = e._looseness * r / 2;
            n.setValue(a.x - s, a.y - s, a.z - s), i.setValue(a.x + s, a.y + s, a.z + s);
        }
        _getChildBound(e) {
            if (null != this._children && this._children[e]) return this._children[e]._bounds;
            var t = this.baseLength / 4, r = this.baseLength / 2 * this._octree._looseness / 2, a = Gt._tempBoundBox, n = a.min, i = a.max;
            switch (e) {
              case 0:
                n.x = this.center.x - t - r, n.y = this.center.y + t - r, n.z = this.center.z - t - r, 
                i.x = this.center.x - t + r, i.y = this.center.y + t + r, i.z = this.center.z - t + r;
                break;

              case 1:
                n.x = this.center.x + t - r, n.y = this.center.y + t - r, n.z = this.center.z - t - r, 
                i.x = this.center.x + t + r, i.y = this.center.y + t + r, i.z = this.center.z - t + r;
                break;

              case 2:
                n.x = this.center.x - t - r, n.y = this.center.y + t - r, n.z = this.center.z + t - r, 
                i.x = this.center.x - t + r, i.y = this.center.y + t + r, i.z = this.center.z + t + r;
                break;

              case 3:
                n.x = this.center.x + t - r, n.y = this.center.y + t - r, n.z = this.center.z + t - r, 
                i.x = this.center.x + t + r, i.y = this.center.y + t + r, i.z = this.center.z + t + r;
                break;

              case 4:
                n.x = this.center.x - t - r, n.y = this.center.y - t - r, n.z = this.center.z - t - r, 
                i.x = this.center.x - t + r, i.y = this.center.y - t + r, i.z = this.center.z - t + r;
                break;

              case 5:
                n.x = this.center.x + t - r, n.y = this.center.y - t - r, n.z = this.center.z - t - r, 
                i.x = this.center.x + t + r, i.y = this.center.y - t + r, i.z = this.center.z - t + r;
                break;

              case 6:
                n.x = this.center.x - t - r, n.y = this.center.y - t - r, n.z = this.center.z + t - r, 
                i.x = this.center.x - t + r, i.y = this.center.y - t + r, i.z = this.center.z + t + r;
                break;

              case 7:
                n.x = this.center.x + t - r, n.y = this.center.y - t - r, n.z = this.center.z + t - r, 
                i.x = this.center.x + t + r, i.y = this.center.y - t + r, i.z = this.center.z + t + r;
            }
            return a;
        }
        _getChildCenter(e) {
            if (null != this._children) return this._children[e].center;
            var t = this.baseLength / 4, r = Gt._tempVector30;
            switch (e) {
              case 0:
                r.x = this.center.x - t, r.y = this.center.y + t, r.z = this.center.z - t;
                break;

              case 1:
                r.x = this.center.x + t, r.y = this.center.y + t, r.z = this.center.z - t;
                break;

              case 2:
                r.x = this.center.x - t, r.y = this.center.y + t, r.z = this.center.z + t;
                break;

              case 3:
                r.x = this.center.x + t, r.y = this.center.y + t, r.z = this.center.z + t;
                break;

              case 4:
                r.x = this.center.x - t, r.y = this.center.y - t, r.z = this.center.z - t;
                break;

              case 5:
                r.x = this.center.x + t, r.y = this.center.y - t, r.z = this.center.z - t;
                break;

              case 6:
                r.x = this.center.x - t, r.y = this.center.y - t, r.z = this.center.z + t;
                break;

              case 7:
                r.x = this.center.x + t, r.y = this.center.y - t, r.z = this.center.z + t;
            }
            return r;
        }
        _getChild(e) {
            var t = this.baseLength / 4;
            switch (this._children || (this._children = []), e) {
              case 0:
                return this._children[0] || (this._children[0] = new Gt(this._octree, this, this.baseLength / 2, new i(this.center.x + -t, this.center.y + t, this.center.z - t)));

              case 1:
                return this._children[1] || (this._children[1] = new Gt(this._octree, this, this.baseLength / 2, new i(this.center.x + t, this.center.y + t, this.center.z - t)));

              case 2:
                return this._children[2] || (this._children[2] = new Gt(this._octree, this, this.baseLength / 2, new i(this.center.x - t, this.center.y + t, this.center.z + t)));

              case 3:
                return this._children[3] || (this._children[3] = new Gt(this._octree, this, this.baseLength / 2, new i(this.center.x + t, this.center.y + t, this.center.z + t)));

              case 4:
                return this._children[4] || (this._children[4] = new Gt(this._octree, this, this.baseLength / 2, new i(this.center.x - t, this.center.y - t, this.center.z - t)));

              case 5:
                return this._children[5] || (this._children[5] = new Gt(this._octree, this, this.baseLength / 2, new i(this.center.x + t, this.center.y - t, this.center.z - t)));

              case 6:
                return this._children[6] || (this._children[6] = new Gt(this._octree, this, this.baseLength / 2, new i(this.center.x - t, this.center.y - t, this.center.z + t)));

              case 7:
                return this._children[7] || (this._children[7] = new Gt(this._octree, this, this.baseLength / 2, new i(this.center.x + t, this.center.y - t, this.center.z + t)));

              default:
                throw "BoundsOctreeNode: unknown index.";
            }
        }
        _shouldMerge() {
            for (var e = this._objects.length, t = 0; t < 8; t++) {
                var r = this._children[t];
                if (r) {
                    if (null != r._children) return !1;
                    e += r._objects.length;
                }
            }
            return e <= Gt._NUM_OBJECTS_ALLOWED;
        }
        _mergeChildren() {
            for (var e = 0; e < 8; e++) {
                var t = this._children[e];
                if (t) {
                    t._parent = null;
                    for (var r = t._objects, a = r.length - 1; a >= 0; a--) {
                        var n = r[a];
                        this._objects.push(n), n._setOctreeNode(this);
                    }
                }
            }
            this._children = null;
        }
        _merge() {
            if (null === this._children) {
                var e = this._parent;
                e && e._shouldMerge() && (e._mergeChildren(), e._merge());
            }
        }
        _checkAddNode(e) {
            if (null == this._children) {
                if (this._objects.length < Gt._NUM_OBJECTS_ALLOWED || this.baseLength / 2 < this._octree._minSize) return this;
                for (var t = this._objects.length - 1; t >= 0; t--) {
                    var r = this._objects[t], a = this._bestFitChild(r.bounds.getCenter());
                    Gt._encapsulates(this._getChildBound(a), r.bounds._getBoundBox()) && (this._objects.splice(this._objects.indexOf(r), 1), 
                    this._getChild(a)._add(r));
                }
            }
            var n = this._bestFitChild(e.bounds.getCenter());
            return Gt._encapsulates(this._getChildBound(n), e.bounds._getBoundBox()) ? this._getChild(n)._checkAddNode(e) : this;
        }
        _add(e) {
            var t = this._checkAddNode(e);
            t._objects.push(e), e._setOctreeNode(t);
        }
        _remove(e) {
            var t = this._objects.indexOf(e);
            this._objects.splice(t, 1), e._setOctreeNode(null), this._merge();
        }
        _addUp(e) {
            return rt.boxContainsBox(this._bounds, e.bounds._getBoundBox()) === tt.Contains ? (this._add(e), 
            !0) : !!this._parent && this._parent._addUp(e);
        }
        _getCollidingWithFrustum(e, r, a, n, s, o) {
            var l = e.boundFrustum, h = e.position, _ = e.cullingMask;
            if (a) {
                var d = l.containsBoundBox(this._bounds);
                if (t.Stat.octreeNodeCulling++, d === tt.Disjoint) {
                    for (var c = 0, u = this._objects.length; c < u; c++) this._objects[c]._OctreeNoRender();
                    return;
                }
                a = d === tt.Intersects;
            }
            this._isContaion = !a;
            var m = r.scene, f = t.Stat.loopCount;
            for (c = 0, u = this._objects.length; c < u; c++) {
                var E = this._objects[c];
                if (o ? E._castShadow && E._enable : 0 != (Math.pow(2, E._owner._layer) & _) && E._enable) {
                    if (a && (t.Stat.frustumCulling++, !E._needRender(l, r))) continue;
                    E._renderMark = f, E._distanceForSort = i.distance(E.bounds.getCenter(), h);
                    for (var T = E._renderElements, p = 0, g = T.length; p < g; p++) {
                        T[p]._update(m, r, n, s);
                    }
                }
            }
            if (null != this._children) for (c = 0; c < 8; c++) {
                var S = this._children[c];
                S && S._getCollidingWithFrustum(e, r, a, n, s, o);
            }
        }
        _getCollidingWithCastShadowFrustum(e, r) {
            for (var a = e.cullPlaneCount, n = e.cullPlanes, s = this._bounds.min, o = this._bounds.max, l = s.x, h = s.y, _ = s.z, d = o.x, c = o.y, u = o.z, m = !0, f = 0; f < a; f++) {
                var E = (x = n[f]).normal;
                if (x.distance + E.x * (E.x < 0 ? l : d) + E.y * (E.y < 0 ? h : c) + E.z * (E.z < 0 ? _ : u) < 0) {
                    m = !1;
                    break;
                }
            }
            if (m) {
                for (var T = r.scene, p = t.Stat.loopCount, g = 0, S = this._objects.length; g < S; g++) {
                    var R, v = this._objects[g];
                    let t = !0;
                    if (R = v._castShadow && v._enable) for (f = 0; f < a; f++) {
                        var x;
                        E = (x = n[f]).normal;
                        if (x.distance + E.x * (E.x < 0 ? l : d) + E.y * (E.y < 0 ? h : c) + E.z * (E.z < 0 ? _ : u) < 0) {
                            t = !1;
                            break;
                        }
                    }
                    if (t && R) {
                        v._renderMark = p, v._distanceForSort = i.distance(v.bounds.getCenter(), e.position);
                        for (var A = v._renderElements, I = (f = 0, A.length); f < I; f++) {
                            A[f]._update(T, r, null, null);
                        }
                    }
                }
                if (null != this._children) for (g = 0; g < 8; g++) {
                    var M = this._children[g];
                    M && M._getCollidingWithCastShadowFrustum(e, r);
                }
            }
        }
        _getCollidingWithBoundBox(e, t, r) {
            if (t) {
                var a = rt.boxContainsBox(this._bounds, e);
                if (a === tt.Disjoint) return;
                t = a === tt.Intersects;
            }
            if (t) for (var n = 0, i = this._objects.length; n < i; n++) {
                var s = this._objects[n];
                rt.intersectsBoxAndBox(s.bounds._getBoundBox(), e) && r.push(s);
            }
            if (null != this._children) for (n = 0; n < 8; n++) {
                this._children[n]._getCollidingWithBoundBox(e, t, r);
            }
        }
        _bestFitChild(e) {
            return (e.x <= this.center.x ? 0 : 1) + (e.y >= this.center.y ? 0 : 4) + (e.z <= this.center.z ? 0 : 2);
        }
        _update(e) {
            if (rt.boxContainsBox(this._bounds, e.bounds._getBoundBox()) === tt.Contains) {
                var t = this._checkAddNode(e);
                if (t !== e._getOctreeNode()) {
                    t._objects.push(e), e._setOctreeNode(t);
                    var r = this._objects.indexOf(e);
                    this._objects.splice(r, 1), this._merge();
                }
                return !0;
            }
            if (this._parent) {
                var a = this._parent._addUp(e);
                return a && (r = this._objects.indexOf(e), this._objects.splice(r, 1), this._merge()), 
                a;
            }
            return !1;
        }
        add(e) {
            return !!Gt._encapsulates(this._bounds, e.bounds._getBoundBox()) && (this._add(e), 
            !0);
        }
        remove(e) {
            return e._getOctreeNode() === this && (this._remove(e), !0);
        }
        update(e) {
            return e._getOctreeNode() === this && this._update(e);
        }
        shrinkIfPossible(e) {
            if (this.baseLength < 2 * e) return this;
            for (var t = -1, r = 0, a = this._objects.length; r < a; r++) {
                var n = this._objects[r], i = this._bestFitChild(n.bounds.getCenter());
                if (0 != r && i != t) return this;
                var s = this._getChildBound(i);
                if (!Gt._encapsulates(s, n.bounds._getBoundBox())) return this;
                0 == r && (t = i);
            }
            if (null == this._children) {
                if (-1 != t) {
                    var o = this._getChildCenter(t);
                    this._setValues(this._octree, null, this.baseLength / 2, o);
                }
                return this;
            }
            var l = !1;
            for (r = 0, a = this._children.length; r < a; r++) {
                var h = this._children[r];
                if (h && h.hasAnyObjects()) {
                    if (l) return this;
                    if (t >= 0 && t != r) return this;
                    l = !0, t = r;
                }
            }
            if (-1 != t) {
                var _ = this._children[t];
                return _._parent = null, _;
            }
            return this;
        }
        hasAnyObjects() {
            if (this._objects.length > 0) return !0;
            if (null != this._children) for (var e = 0; e < 8; e++) {
                var t = this._children[e];
                if (t && t.hasAnyObjects()) return !0;
            }
            return !1;
        }
        getCollidingWithBoundBox(e, t) {
            this._getCollidingWithBoundBox(e, !0, t);
        }
        getCollidingWithRay(e, t, r = Number.MAX_VALUE) {
            var a = rt.intersectsRayAndBoxRD(e, this._bounds);
            if (!(-1 == a || a > r)) {
                for (var n = 0, i = this._objects.length; n < i; n++) {
                    var s = this._objects[n];
                    -1 !== (a = rt.intersectsRayAndBoxRD(e, s.bounds._getBoundBox())) && a <= r && t.push(s);
                }
                if (null != this._children) for (n = 0; n < 8; n++) {
                    this._children[n].getCollidingWithRay(e, t, r);
                }
            }
        }
        getCollidingWithFrustum(e, t, r, a, n) {
            this._getCollidingWithFrustum(e, t, !0, r, a, n);
        }
        getCollidingWithCastShadowFrustum(e, t) {
            this._getCollidingWithCastShadowFrustum(e, t);
        }
        isCollidingWithBoundBox(e) {
            if (!rt.intersectsBoxAndBox(this._bounds, e)) return !1;
            for (var t = 0, r = this._objects.length; t < r; t++) {
                var a = this._objects[t];
                if (rt.intersectsBoxAndBox(a.bounds._getBoundBox(), e)) return !0;
            }
            if (null != this._children) for (t = 0; t < 8; t++) {
                if (this._children[t].isCollidingWithBoundBox(e)) return !0;
            }
            return !1;
        }
        isCollidingWithRay(e, t = Number.MAX_VALUE) {
            var r = rt.intersectsRayAndBoxRD(e, this._bounds);
            if (-1 == r || r > t) return !1;
            for (var a = 0, n = this._objects.length; a < n; a++) {
                var i = this._objects[a];
                if (-1 !== (r = rt.intersectsRayAndBoxRD(e, i.bounds._getBoundBox())) && r <= t) return !0;
            }
            if (null != this._children) for (a = 0; a < 8; a++) {
                if (this._children[a].isCollidingWithRay(e, t)) return !0;
            }
            return !1;
        }
        getBound() {
            return this._bounds;
        }
        drawAllBounds(e, t, r) {
            if (null !== this._children || 0 != this._objects.length) {
                t++;
                var a = Gt._tempColor0;
                if (this._isContaion) a.r = 0, a.g = 0, a.b = 1; else {
                    var n = r ? t / r : 0;
                    a.r = 1 - n, a.g = n, a.b = 0;
                }
                if (a.a = .3, A._drawBound(e, this._bounds, a), null != this._children) for (var i = 0; i < 8; i++) {
                    var s = this._children[i];
                    s && s.drawAllBounds(e, t, r);
                }
            }
        }
        drawAllObjects(e, t, r) {
            t++;
            var a = Gt._tempColor0;
            if (this._isContaion) a.r = 0, a.g = 0, a.b = 1; else {
                var n = r ? t / r : 0;
                a.r = 1 - n, a.g = n, a.b = 0;
            }
            a.a = 1;
            for (var i = 0, s = this._objects.length; i < s; i++) A._drawBound(e, this._objects[i].bounds._getBoundBox(), a);
            if (null != this._children) for (i = 0; i < 8; i++) {
                var o = this._children[i];
                o && o.drawAllObjects(e, t, r);
            }
        }
    }
    Gt._tempVector30 = new i(), Gt._tempColor0 = new We(), Gt._tempBoundBox = new xt(new i(), new i()), 
    Gt._NUM_OBJECTS_ALLOWED = 8;
    class zt extends ze {
        constructor() {
            super();
        }
        add(e) {
            if (-1 !== e._getIndexInMotionList()) throw "OctreeMotionList:element has  in  PhysicsUpdateList.";
            this._add(e), e._setIndexInMotionList(this.length++);
        }
        remove(e) {
            var t = e._getIndexInMotionList();
            if (this.length--, t !== this.length) {
                var r = this.elements[this.length];
                this.elements[t] = r, r._setIndexInMotionList(t);
            }
            e._setIndexInMotionList(-1);
        }
    }
    class kt {
        constructor(e, t, r, a) {
            this._motionObjects = new zt(), this.count = 0, r > e && (console.warn("Minimum node size must be at least as big as the initial world size. Was: " + r + " Adjusted to: " + e), 
            r = e), this._initialSize = e, this._minSize = r, this._looseness = Math.min(Math.max(a, 1), 2), 
            this._rootNode = new Gt(this, null, e, t);
        }
        _getMaxDepth(e, t) {
            t++;
            var r = e._children;
            if (null != r) for (var a = t, n = 0, i = r.length; n < i; n++) {
                var s = r[n];
                s && (t = Math.max(this._getMaxDepth(s, a), t));
            }
            return t;
        }
        _grow(e) {
            var t = e.x >= 0 ? 1 : -1, r = e.y >= 0 ? 1 : -1, a = e.z >= 0 ? 1 : -1, n = this._rootNode, s = this._rootNode.baseLength / 2, o = 2 * this._rootNode.baseLength, l = this._rootNode.center, h = new i(l.x + t * s, l.y + r * s, l.z + a * s);
            if (this._rootNode = new Gt(this, null, o, h), n.hasAnyObjects()) {
                for (var _ = this._rootNode._bestFitChild(n.center), d = [], c = 0; c < 8; c++) c == _ && (n._parent = this._rootNode, 
                d[c] = n);
                this._rootNode._children = d;
            }
        }
        add(e) {
            for (var t = 0; !this._rootNode.add(e); ) {
                var r = kt._tempVector30;
                if (i.subtract(e.bounds.getCenter(), this._rootNode.center, r), this._grow(r), ++t > 20) throw "Aborted Add operation as it seemed to be going on forever (" + (t - 1) + ") attempts at growing the octree.";
            }
            this.count++;
        }
        remove(e) {
            var t = e._getOctreeNode().remove(e);
            return t && this.count--, t;
        }
        update(e) {
            var t = 0, r = e._getOctreeNode();
            if (r) {
                for (;!r._update(e); ) {
                    var a = kt._tempVector30;
                    if (i.subtract(e.bounds.getCenter(), this._rootNode.center, a), this._grow(a), ++t > 20) throw "Aborted Add operation as it seemed to be going on forever (" + (t - 1) + ") attempts at growing the octree.";
                }
                return !0;
            }
            return !1;
        }
        shrinkRootIfPossible() {
            this._rootNode = this._rootNode.shrinkIfPossible(this._initialSize);
        }
        addMotionObject(e) {
            this._motionObjects.add(e);
        }
        removeMotionObject(e) {
            this._motionObjects.remove(e);
        }
        updateMotionObjects() {
            for (var e = this._motionObjects.elements, t = 0, r = this._motionObjects.length; t < r; t++) {
                var a = e[t];
                this.update(a), a._setIndexInMotionList(-1);
            }
            this._motionObjects.length = 0;
        }
        isCollidingWithBoundBox(e) {
            return this._rootNode.isCollidingWithBoundBox(e);
        }
        isCollidingWithRay(e, t = Number.MAX_VALUE) {
            return this._rootNode.isCollidingWithRay(e, t);
        }
        getCollidingWithBoundBox(e, t) {
            this._rootNode.getCollidingWithBoundBox(e, t);
        }
        getCollidingWithRay(e, t, r = Number.MAX_VALUE) {
            this._rootNode.getCollidingWithRay(e, t, r);
        }
        getCollidingWithFrustum(e, t, r, a, n) {
            this._rootNode.getCollidingWithFrustum(e, t, r, a, n);
        }
        getMaxBounds() {
            return this._rootNode.getBound();
        }
        drawAllBounds(e) {
            var t = this._getMaxDepth(this._rootNode, -1);
            this._rootNode.drawAllBounds(e, -1, t);
        }
        drawAllObjects(e) {
            var t = this._getMaxDepth(this._rootNode, -1);
            this._rootNode.drawAllObjects(e, -1, t);
        }
    }
    kt._tempVector30 = new i();
    class Wt {}
    class Xt {
        constructor(e, t) {
            this.center = e, this.radius = t;
        }
        toDefault() {
            this.center.toDefault(), this.radius = 0;
        }
        static createFromSubPoints(e, t, r, a) {
            if (null == e) throw new Error("points");
            if (t < 0 || t >= e.length) throw new Error("start" + t + "Must be in the range [0, " + (e.length - 1) + "]");
            if (r < 0 || t + r > e.length) throw new Error("count" + r + "Must be in the range <= " + e.length + "}");
            var n = t + r, s = Xt._tempVector3;
            s.x = 0, s.y = 0, s.z = 0;
            for (var o = t; o < n; ++o) i.add(e[o], s, s);
            var l = a.center;
            i.scale(s, 1 / r, l);
            var h = 0;
            for (o = t; o < n; ++o) {
                var _ = i.distanceSquared(l, e[o]);
                _ > h && (h = _);
            }
            a.radius = Math.sqrt(h);
        }
        static createfromPoints(e, t) {
            if (null == e) throw new Error("points");
            Xt.createFromSubPoints(e, 0, e.length, t);
        }
        intersectsRayDistance(e) {
            return rt.intersectsRayAndSphereRD(e, this);
        }
        intersectsRayPoint(e, t) {
            return rt.intersectsRayAndSphereRP(e, this, t);
        }
        cloneTo(e) {
            var t = e;
            this.center.cloneTo(t.center), t.radius = this.radius;
        }
        clone() {
            var e = new Xt(new i(), 0);
            return this.cloneTo(e), e;
        }
    }
    Xt._tempVector3 = new i();
    class Yt {
        constructor() {
            this.cameraShaderValue = new F(), this.position = new i(), this.viewMatrix = new b(), 
            this.projectionMatrix = new b(), this.viewProjectMatrix = new b(), this.cullPlanes = [ new $e(new i()), new $e(new i()), new $e(new i()), new $e(new i()), new $e(new i()), new $e(new i()), new $e(new i()), new $e(new i()), new $e(new i()), new $e(new i()) ], 
            this.splitBoundSphere = new Xt(new i(), 0);
        }
    }
    class Zt {
        constructor() {
            this.cameraShaderValue = new F(), this.position = new i(), this.viewMatrix = new b(), 
            this.projectionMatrix = new b(), this.viewProjectMatrix = new b(), this.cameraCullInfo = new Xe();
        }
    }
    (Oe = e.ShadowLightType || (e.ShadowLightType = {}))[Oe.DirectionLight = 0] = "DirectionLight", 
    Oe[Oe.SpotLight = 1] = "SpotLight", Oe[Oe.PointLight = 2] = "PointLight";
    class jt {
        constructor() {
            this._shadowBias = new n(), this._shadowParams = new n(), this._shadowMapSize = new n(), 
            this._shadowSpotMapSize = new n(), this._shadowMatrices = new Float32Array(16 * jt._maxCascades), 
            this._shadowSpotMatrices = new b(), this._splitBoundSpheres = new Float32Array(4 * jt._maxCascades), 
            this._cascadeCount = 0, this._shadowMapWidth = 0, this._shadowMapHeight = 0, this._shadowSliceDatas = [ new Yt(), new Yt(), new Yt(), new Yt() ], 
            this._shadowSpotData = new Zt(), this._lightUp = new i(), this._lightSide = new i(), 
            this._lightForward = new i(), this._shadowSpotData.cameraCullInfo.boundFrustum = new at(new b());
        }
        _setupShadowCasterShaderValues(t, r, a, n, i, s, o) {
            switch (r.setVector(jt.SHADOW_BIAS, s), o) {
              case e.LightType.Directional:
                r.setVector3(jt.SHADOW_LIGHT_DIRECTION, n);
                break;

              case e.LightType.Spot:
                r.setVector(jt.SHADOW_PARAMS, i);
                break;

              case e.LightType.Point:
            }
            var l = a.cameraShaderValue;
            l.setMatrix4x4(_t.VIEWMATRIX, a.viewMatrix), l.setMatrix4x4(_t.PROJECTMATRIX, a.projectionMatrix), 
            l.setMatrix4x4(_t.VIEWPROJECTMATRIX, a.viewProjectMatrix), t.viewMatrix = a.viewMatrix, 
            t.projectionMatrix = a.projectionMatrix, t.projectionViewMatrix = a.viewProjectMatrix;
        }
        _setupShadowReceiverShaderValues(t) {
            var r = this._light;
            switch (r.shadowCascadesMode !== e.ShadowCascadesMode.NoCascades ? t.addDefine(dt.SHADERDEFINE_SHADOW_CASCADE) : t.removeDefine(dt.SHADERDEFINE_SHADOW_CASCADE), 
            r.shadowMode) {
              case e.ShadowMode.Hard:
                t.removeDefine(dt.SHADERDEFINE_SHADOW_SOFT_SHADOW_LOW), t.removeDefine(dt.SHADERDEFINE_SHADOW_SOFT_SHADOW_HIGH);
                break;

              case e.ShadowMode.SoftLow:
                t.addDefine(dt.SHADERDEFINE_SHADOW_SOFT_SHADOW_LOW), t.removeDefine(dt.SHADERDEFINE_SHADOW_SOFT_SHADOW_HIGH);
                break;

              case e.ShadowMode.SoftHigh:
                t.addDefine(dt.SHADERDEFINE_SHADOW_SOFT_SHADOW_HIGH), t.removeDefine(dt.SHADERDEFINE_SHADOW_SOFT_SHADOW_LOW);
            }
            t.setTexture(jt.SHADOW_MAP, this._shadowDirectLightMap), t.setBuffer(jt.SHADOW_MATRICES, this._shadowMatrices), 
            t.setVector(jt.SHADOW_MAP_SIZE, this._shadowMapSize), t.setVector(jt.SHADOW_PARAMS, this._shadowParams), 
            t.setBuffer(jt.SHADOW_SPLIT_SPHERES, this._splitBoundSpheres);
        }
        _setupSpotShadowReceiverShaderValues(t) {
            switch (this._light.shadowMode) {
              case e.ShadowMode.Hard:
                t.removeDefine(dt.SHADERDEFINE_SHADOW_SPOT_SOFT_SHADOW_HIGH), t.removeDefine(dt.SHADERDEFINE_SHADOW_SPOT_SOFT_SHADOW_LOW);
                break;

              case e.ShadowMode.SoftLow:
                t.addDefine(dt.SHADERDEFINE_SHADOW_SPOT_SOFT_SHADOW_LOW), t.removeDefine(dt.SHADERDEFINE_SHADOW_SPOT_SOFT_SHADOW_HIGH);
                break;

              case e.ShadowMode.SoftHigh:
                t.addDefine(dt.SHADERDEFINE_SHADOW_SPOT_SOFT_SHADOW_HIGH), t.removeDefine(dt.SHADERDEFINE_SHADOW_SPOT_SOFT_SHADOW_LOW);
            }
            t.setTexture(jt.SHADOW_SPOTMAP, this._shadowSpotLightMap), t.setMatrix4x4(jt.SHADOW_SPOTMATRICES, this._shadowSpotMatrices), 
            t.setVector(jt.SHADOW_SPOTMAP_SIZE, this._shadowSpotMapSize), t.setVector(jt.SHADOW_PARAMS, this._shadowParams);
        }
        update(t, a, n) {
            switch (n) {
              case e.ShadowLightType.DirectionLight:
                this._light = a;
                var s = (I = jt._tempMatrix0).elements, o = this._lightUp, l = this._lightSide, h = this._lightForward;
                b.createFromQuaternion(a._transform.rotation, I), l.setValue(s[0], s[1], s[2]), 
                o.setValue(s[4], s[5], s[6]), h.setValue(-s[8], -s[9], -s[10]);
                var _, d, c, u, m = a._shadowResolution, f = a._shadowCascadesMode;
                f == e.ShadowCascadesMode.NoCascades ? (_ = 1, d = m, c = m, u = m) : (_ = f == e.ShadowCascadesMode.TwoCascades ? 2 : 4, 
                c = 2 * (d = ut.getMaxTileResolutionInAtlas(m, m, _)), u = f == e.ShadowCascadesMode.TwoCascades ? d : 2 * d), 
                this._cascadeCount = _, this._shadowMapWidth = c, this._shadowMapHeight = u;
                var E = jt._cascadesSplitDistance, T = jt._frustumPlanes, p = t.nearPlane, g = Math.min(t.farPlane, a._shadowDistance), S = this._shadowMatrices, R = this._splitBoundSpheres;
                ut.getCascadesSplitDistance(a._shadowTwoCascadeSplits, a._shadowFourCascadeSplits, p, g, t.fieldOfView * r.Deg2Rad, t.aspectRatio, f, E), 
                ut.getCameraFrustumPlanes(t.projectionViewMatrix, T);
                var v = jt._tempVector30;
                t._transform.getForward(v), i.normalize(v, v);
                for (var x = 0; x < _; x++) {
                    var A = this._shadowSliceDatas[x];
                    A.sphereCenterZ = ut.getBoundSphereByFrustum(E[x], E[x + 1], t.fieldOfView * r.Deg2Rad, t.aspectRatio, t._transform.position, v, A.splitBoundSphere), 
                    ut.getDirectionLightShadowCullPlanes(T, x, E, p, h, A), ut.getDirectionalLightMatrices(o, l, h, x, a._shadowNearPlane, d, A, S), 
                    _ > 1 && ut.applySliceTransform(A, c, u, x, S);
                }
                ut.prepareShadowReceiverShaderValues(a, c, u, this._shadowSliceDatas, _, this._shadowMapSize, this._shadowParams, S, R);
                break;

              case e.ShadowLightType.SpotLight:
                this._light = a;
                var I = jt._tempMatrix0, M = (h = this._lightForward, this._light._shadowResolution);
                this._shadowMapWidth = M, this._shadowMapHeight = M;
                var D = this._shadowSpotData;
                ut.getSpotLightShadowData(D, this._light, M, this._shadowParams, this._shadowSpotMatrices, this._shadowSpotMapSize);
                break;

              case e.ShadowLightType.PointLight:
                break;

              default:
                throw "There is no shadow of this type";
            }
        }
        render(r, a, n) {
            switch (n) {
              case e.ShadowLightType.DirectionLight:
                var i = a._shaderValues;
                r.pipelineMode = "ShadowCaster", F.setRuntimeValueMode(!1), (E = this._shadowDirectLightMap = ut.getTemporaryShadowTexture(this._shadowMapWidth, this._shadowMapHeight, t.RenderTextureDepthFormat.DEPTH_16))._start();
                for (var s = this._light, o = 0, l = this._cascadeCount; o < l; o++) {
                    var h = this._shadowSliceDatas[o];
                    ut.getShadowBias(s, h.projectionMatrix, h.resolution, this._shadowBias), this._setupShadowCasterShaderValues(r, i, h, this._lightForward, this._shadowParams, this._shadowBias, e.LightType.Directional);
                    var _ = Ze._shadowCullInfo;
                    _.position = h.position, _.cullPlanes = h.cullPlanes, _.cullPlaneCount = h.cullPlaneCount, 
                    _.cullSphere = h.splitBoundSphere, _.direction = this._lightForward;
                    var d = Ze.cullingShadow(_, a, r);
                    r.cameraShaderValue = h.cameraShaderValue, ft._updateMark++;
                    var c = t.LayaGL.instance, u = h.resolution, m = h.offsetX, f = h.offsetY;
                    c.enable(c.SCISSOR_TEST), c.viewport(m, f, u, u), c.scissor(m, f, u, u), c.clear(c.DEPTH_BUFFER_BIT), 
                    d && (c.scissor(m + 1, f + 1, u - 2, u - 2), a._opaqueQueue._render(r));
                }
                E._end(), this._setupShadowReceiverShaderValues(i), F.setRuntimeValueMode(!0), r.pipelineMode = r.configPipeLineMode;
                break;

              case e.ShadowLightType.SpotLight:
                i = a._shaderValues;
                r.pipelineMode = "ShadowCaster", F.setRuntimeValueMode(!1);
                var E, T = this._light;
                (E = this._shadowSpotLightMap = ut.getTemporaryShadowTexture(this._shadowMapWidth, this._shadowMapHeight, t.RenderTextureDepthFormat.DEPTH_16))._start();
                var p = this._shadowSpotData;
                ut.getShadowBias(T, p.projectionMatrix, p.resolution, this._shadowBias), this._setupShadowCasterShaderValues(r, i, p, this._light.transform.position, this._shadowParams, this._shadowBias, e.LightType.Spot);
                d = Ze.cullingSpotShadow(p.cameraCullInfo, a, r);
                r.cameraShaderValue = p.cameraShaderValue, ft._updateMark++, (c = t.LayaGL.instance).enable(c.SCISSOR_TEST), 
                c.viewport(p.offsetX, p.offsetY, p.resolution, p.resolution), c.scissor(p.offsetX, p.offsetY, p.resolution, p.resolution), 
                c.clear(c.DEPTH_BUFFER_BIT), d && (c.scissor(p.offsetX, p.offsetY, p.resolution, p.resolution), 
                a._opaqueQueue._render(r)), E._end(), this._setupSpotShadowReceiverShaderValues(i), 
                F.setRuntimeValueMode(!0), r.pipelineMode = r.configPipeLineMode;
                break;

              case e.ShadowLightType.PointLight:
                break;

              default:
                throw "There is no shadow of this type";
            }
        }
        cleanUp() {
            this._shadowDirectLightMap && P.recoverToPool(this._shadowDirectLightMap), this._shadowSpotLightMap && P.recoverToPool(this._shadowSpotLightMap), 
            this._shadowDirectLightMap = null, this._shadowSpotLightMap = null, this._light = null;
        }
    }
    jt._tempVector30 = new i(), jt._tempMatrix0 = new b(), jt.SHADOW_BIAS = Z.propertyNameToID("u_ShadowBias"), 
    jt.SHADOW_LIGHT_DIRECTION = Z.propertyNameToID("u_ShadowLightDirection"), jt.SHADOW_SPLIT_SPHERES = Z.propertyNameToID("u_ShadowSplitSpheres"), 
    jt.SHADOW_MATRICES = Z.propertyNameToID("u_ShadowMatrices"), jt.SHADOW_MAP_SIZE = Z.propertyNameToID("u_ShadowMapSize"), 
    jt.SHADOW_MAP = Z.propertyNameToID("u_ShadowMap"), jt.SHADOW_PARAMS = Z.propertyNameToID("u_ShadowParams"), 
    jt.SHADOW_SPOTMAP_SIZE = Z.propertyNameToID("u_SpotShadowMapSize"), jt.SHADOW_SPOTMAP = Z.propertyNameToID("u_SpotShadowMap"), 
    jt.SHADOW_SPOTMATRICES = Z.propertyNameToID("u_SpotViewProjectMatrix"), jt._maxCascades = 4, 
    jt._cascadesSplitDistance = new Array(jt._maxCascades + 1), jt._frustumPlanes = new Array(new $e(new i()), new $e(new i()), new $e(new i()), new $e(new i()), new $e(new i()), new $e(new i()));
    class qt {
        constructor() {
            this._batchRenderElementPool = [];
        }
        static _registerManager(e) {
            qt._managers.push(e);
        }
        _clear() {
            this._batchRenderElementPoolIndex = 0;
        }
        _getBatchRenderElementFromPool() {
            throw "StaticBatch:must override this function.";
        }
        dispose() {}
    }
    qt._managers = [];
    class Qt extends ze {
        constructor() {
            super();
        }
        add(e) {
            this._add(e), e._setIndexInReflectionList(this.length++);
        }
        remove(e) {
            var t = e._getIndexInReflectionList();
            if (this.length--, t !== this.length) {
                var r = this.elements[this.length];
                this.elements[t] = r, r._setIndexInReflectionList(t);
            }
            e._setIndexInReflectionList(-1);
        }
    }
    class Kt {
        constructor() {
            this._reflectionProbes = new Qt(), this._motionObjects = new ze(), this._needUpdateAllRender = !1, 
            this._sceneReflectionProbe = new Bt(), this._sceneReflectionProbe.bounds = new At(new i(0, 0, 0), new i(0, 0, 0)), 
            this._sceneReflectionProbe.boxProjection = !1, this._sceneReflectionProbe._isScene = !0;
        }
        set sceneReflectionProbe(e) {
            this._sceneReflectionProbe.reflectionTexture = e;
        }
        set sceneReflectionCubeHDRParam(e) {
            this._sceneReflectionProbe.reflectionHDRParams = e;
        }
        _updateMotionObjects(e) {
            if (0 != this._reflectionProbes.length) {
                for (var t, r, a = this._reflectionProbes.elements, n = 0, i = e.bounds, s = 0, o = this._reflectionProbes.length; s < o; s++) {
                    var l = a[s];
                    if (t) {
                        if (t.importance > l.importance) continue;
                        if ((r = i.calculateBoundsintersection(l.bounds)) < n && t.importance == l.importance) continue;
                    } else if ((r = i.calculateBoundsintersection(l.bounds)) < n) continue;
                    t = l, n = r;
                }
                !t && this._sceneReflectionProbe && (t = this._sceneReflectionProbe), e._probReflection = t;
            } else e._probReflection = this._sceneReflectionProbe;
        }
        add(e) {
            this._reflectionProbes.add(e), this._needUpdateAllRender = !0;
        }
        remove(e) {
            this._reflectionProbes.remove(e), this._needUpdateAllRender = !0;
        }
        addMotionObject(e) {
            this._motionObjects.add(e);
        }
        update() {
            for (var e = this._motionObjects.elements, t = 0, r = this._motionObjects.length; t < r; t++) this._updateMotionObjects(e[t]);
            this.clearMotionObjects();
        }
        updateAllRenderObjects(e) {
            for (var t = e.elements, r = 0, a = e.length; r < a; r++) this._updateMotionObjects(t[r]);
            this._needUpdateAllRender = !1;
        }
        clearMotionObjects() {
            this._motionObjects.length = 0;
        }
        destroy() {}
    }
    (Ne = e.AmbientMode || (e.AmbientMode = {}))[Ne.SolidColor = 0] = "SolidColor", 
    Ne[Ne.SphericalHarmonics = 1] = "SphericalHarmonics";
    class Jt extends t.Sprite {
        constructor() {
            super(), this._lightCount = 0, this._pointLights = new St(), this._spotLights = new St(), 
            this._directionLights = new St(), this._alternateLights = new Rt(), this._lightmaps = [], 
            this._skyRenderer = new ht(), this._input = new Et(), this._timer = t.ILaya.timer, 
            this._time = 0, this._shCoefficients = new Array(7), this._ambientMode = e.AmbientMode.SolidColor, 
            this._ambientSphericalHarmonics = new Qe(), this._ambientSphericalHarmonicsIntensity = 1, 
            this._reflectionDecodeFormat = t.TextureDecodeFormat.Normal, this._reflectionIntensity = 1, 
            this._collsionTestList = [], this._renders = new ke(), this._opaqueQueue = new Ht(!1), 
            this._transparentQueue = new Ht(!0), this._cameraPool = [], this._animatorPool = new ke(), 
            this._scriptPool = new Array(), this._tempScriptPool = new Array(), this._needClearScriptPool = !1, 
            this._reflectionCubeHDRParams = new n(), this._reflectionProbeManager = new Kt(), 
            this.currentCreationLayer = Math.pow(2, 0), this.enableLight = !0, this._key = new t.SubmitKey(), 
            this._pickIdToSprite = new Object(), this._reflectionMode = 0, !d._config.isUseCannonPhysicsEngine && _._bullet ? this._physicsSimulation = new t.PhysicsSimulation(Jt.physicsSettings) : _._cannon && (this._cannonPhysicsSimulation = new t.CannonPhysicsSimulation(Jt.cannonPhysicsSettings)), 
            this._shaderValues = new F(null), this.enableFog = !1, this.fogStart = 300, this.fogRange = 1e3, 
            this.fogColor = new i(.7, .7, .7), this.ambientColor = new i(.212, .227, .259), 
            this.reflectionIntensity = 1, this.reflection = gt.blackTexture;
            for (var r = 0; r < 7; r++) this._shCoefficients[r] = new n();
            if (this._reflectionProbeManager.sceneReflectionCubeHDRParam = this._reflectionCubeHDRParams, 
            this._scene = this, this._input.__init__(t.Render.canvas, this), Jt.octreeCulling && (this._octree = new kt(Jt.octreeInitialSize, Jt.octreeInitialCenter, Jt.octreeMinNodeSize, Jt.octreeLooseness)), 
            Ze.debugFrustumCulling) {
                this._debugTool = new Ut();
                var a = new vt();
                a.renderQueue = ue.RENDERQUEUE_TRANSPARENT, a.alphaTest = !1, a.depthWrite = !1, 
                a.cull = fe.CULL_BACK, a.blend = fe.BLEND_ENABLE_ALL, a.blendSrc = fe.BLENDPARAM_SRC_ALPHA, 
                a.blendDst = fe.BLENDPARAM_ONE_MINUS_SRC_ALPHA, a.depthTest = fe.DEPTHTEST_LESS, 
                this._debugTool.pixelLineRenderer.sharedMaterial = a;
            }
        }
        static __init__() {
            var r = d._config;
            if (r._multiLighting) {
                const e = 4;
                var a = r.maxLightCount, n = r.lightClusterCount;
                qe.instance = new qe(n.x, n.y, n.z, Math.min(r.maxLightCount, r._maxAreaLightCountPerClusterAverage)), 
                Jt._lightTexture = A._createFloatTextureBuffer(e, a), Jt._lightTexture.lock = !0, 
                Jt._lightPixles = new Float32Array(a * e * 4);
            }
            dt.SHADERDEFINE_FOG = Z.getDefineByName("FOG"), dt.SHADERDEFINE_DIRECTIONLIGHT = Z.getDefineByName("DIRECTIONLIGHT"), 
            dt.SHADERDEFINE_POINTLIGHT = Z.getDefineByName("POINTLIGHT"), dt.SHADERDEFINE_SPOTLIGHT = Z.getDefineByName("SPOTLIGHT"), 
            dt.SHADERDEFINE_SHADOW = Z.getDefineByName("SHADOW"), dt.SHADERDEFINE_SHADOW_CASCADE = Z.getDefineByName("SHADOW_CASCADE"), 
            dt.SHADERDEFINE_SHADOW_SOFT_SHADOW_LOW = Z.getDefineByName("SHADOW_SOFT_SHADOW_LOW"), 
            dt.SHADERDEFINE_SHADOW_SOFT_SHADOW_HIGH = Z.getDefineByName("SHADOW_SOFT_SHADOW_HIGH"), 
            dt.SHADERDEFINE_GI_AMBIENT_SH = Z.getDefineByName("GI_AMBIENT_SH"), dt.SHADERDEFINE_SHADOW_SPOT = Z.getDefineByName("SHADOW_SPOT"), 
            dt.SHADERDEFINE_SHADOW_SPOT_SOFT_SHADOW_LOW = Z.getDefineByName("SHADOW_SPOT_SOFT_SHADOW_LOW"), 
            dt.SHADERDEFINE_SHADOW_SPOT_SOFT_SHADOW_HIGH = Z.getDefineByName("SHADOW_SPOT_SOFT_SHADOW_HIGH");
            var i = d._config, s = Jt._configDefineValues;
            switch (i._multiLighting || s.add(Z.SHADERDEFINE_LEGACYSINGALLIGHTING), t.LayaGL.layaGPUInstance._isWebGL2 ? s.add(Z.SHADERDEFINE_GRAPHICS_API_GLES3) : s.add(Z.SHADERDEFINE_GRAPHICS_API_GLES2), 
            i.pbrRenderQuality) {
              case e.PBRRenderQuality.High:
                s.add(ge.SHADERDEFINE_LAYA_PBR_BRDF_HIGH);
                break;

              case e.PBRRenderQuality.Low:
                s.add(ge.SHADERDEFINE_LAYA_PBR_BRDF_LOW);
                break;

              default:
                throw "Scene3D:unknown shader quality.";
            }
            i.isUseCannonPhysicsEngine ? _._cannon && (Jt.cannonPhysicsSettings = new t.CannonPhysicsSettings()) : _._bullet && (Jt.physicsSettings = new t.PhysicsSettings());
        }
        static load(e, r) {
            t.ILaya.loader.create(e, r, null, Jt.HIERARCHY);
        }
        get url() {
            return this._url;
        }
        get enableFog() {
            return this._enableFog;
        }
        set enableFog(e) {
            this._enableFog !== e && (this._enableFog = e, e ? this._shaderValues.addDefine(dt.SHADERDEFINE_FOG) : this._shaderValues.removeDefine(dt.SHADERDEFINE_FOG));
        }
        get fogColor() {
            return this._shaderValues.getVector3(Jt.FOGCOLOR);
        }
        set fogColor(e) {
            this._shaderValues.setVector3(Jt.FOGCOLOR, e);
        }
        get fogStart() {
            return this._shaderValues.getNumber(Jt.FOGSTART);
        }
        set fogStart(e) {
            this._shaderValues.setNumber(Jt.FOGSTART, e);
        }
        get fogRange() {
            return this._shaderValues.getNumber(Jt.FOGRANGE);
        }
        set fogRange(e) {
            this._shaderValues.setNumber(Jt.FOGRANGE, e);
        }
        get ambientMode() {
            return this._ambientMode;
        }
        set ambientMode(t) {
            if (this._ambientMode !== t) {
                switch (t) {
                  case e.AmbientMode.SolidColor:
                    this._shaderValues.removeDefine(dt.SHADERDEFINE_GI_AMBIENT_SH);
                    break;

                  case e.AmbientMode.SphericalHarmonics:
                    this._shaderValues.addDefine(dt.SHADERDEFINE_GI_AMBIENT_SH);
                    break;

                  default:
                    throw "Scene3D: unknown ambientMode.";
                }
                this._ambientMode = t;
            }
        }
        get ambientColor() {
            return this._shaderValues.getVector3(Jt.AMBIENTCOLOR);
        }
        set ambientColor(e) {
            this._shaderValues.setVector3(Jt.AMBIENTCOLOR, e);
        }
        get ambientSphericalHarmonics() {
            return this._ambientSphericalHarmonics;
        }
        set ambientSphericalHarmonics(e) {
            var t = e || Qe._default;
            this._applySHCoefficients(t, Math.pow(this._ambientSphericalHarmonicsIntensity, 2.2)), 
            this._ambientSphericalHarmonics != e && e.cloneTo(this._ambientSphericalHarmonics);
        }
        get ambientSphericalHarmonicsIntensity() {
            return this._ambientSphericalHarmonicsIntensity;
        }
        set ambientSphericalHarmonicsIntensity(e) {
            if (e = Math.max(Math.min(e, 8), 0), this._ambientSphericalHarmonicsIntensity !== e) {
                var t = this._ambientSphericalHarmonics || Qe._default;
                this._applySHCoefficients(t, Math.pow(e, 2.2)), this._ambientSphericalHarmonicsIntensity = e;
            }
        }
        get reflection() {
            return this._reflection;
        }
        set reflection(e) {
            e = e || gt.blackTexture, this._reflection != e && (e._addReference(), this._reflectionProbeManager.sceneReflectionProbe = e, 
            this._reflection = e, this._reflectionProbeManager._needUpdateAllRender = !0);
        }
        get reflectionDecodingFormat() {
            return this._reflectionDecodeFormat;
        }
        set reflectionDecodingFormat(e) {
            this._reflectionDecodeFormat != e && (this._reflectionCubeHDRParams.x = this._reflectionIntensity, 
            this._reflectionDecodeFormat == t.TextureDecodeFormat.RGBM && (this._reflectionCubeHDRParams.x *= 5), 
            this._reflectionDecodeFormat = e, this._reflectionProbeManager.sceneReflectionCubeHDRParam = this._reflectionCubeHDRParams);
        }
        get reflectionIntensity() {
            return this._reflectionIntensity;
        }
        set reflectionIntensity(e) {
            e = Math.max(Math.min(e, 1), 0), this._reflectionCubeHDRParams.x = e, this._reflectionDecodeFormat == t.TextureDecodeFormat.RGBM && (this._reflectionCubeHDRParams.x *= 5), 
            this._reflectionIntensity = e, this._reflectionProbeManager.sceneReflectionCubeHDRParam = this._reflectionCubeHDRParams;
        }
        get skyRenderer() {
            return this._skyRenderer;
        }
        get physicsSimulation() {
            return this._physicsSimulation;
        }
        get cannonPhysicsSimulation() {
            return this._cannonPhysicsSimulation;
        }
        get timer() {
            return this._timer;
        }
        set timer(e) {
            this._timer = e;
        }
        get input() {
            return this._input;
        }
        get lightmaps() {
            return this._lightmaps.slice();
        }
        set lightmaps(e) {
            var t = this._lightmaps;
            if (t) for (var r = 0, a = t.length; r < a; r++) {
                (i = t[r]).lightmapColor._removeReference(), i.lightmapDirection._removeReference();
            }
            if (e) {
                var n = e.length;
                for (t.length = n, r = 0; r < n; r++) {
                    var i;
                    (i = e[r]).lightmapColor && i.lightmapColor._addReference(), i.lightmapDirection && i.lightmapDirection._addReference(), 
                    t[r] = i;
                }
            } else t.length = 0;
        }
        _applySHCoefficients(e, t) {
            for (var r = this._shCoefficients, a = 0; a < 3; a++) {
                var n = r[a], i = r[a + 3];
                n.setValue(e.getCoefficient(a, 3) * t, e.getCoefficient(a, 1) * t, e.getCoefficient(a, 2) * t, (e.getCoefficient(a, 0) - e.getCoefficient(a, 6)) * t), 
                i.setValue(e.getCoefficient(a, 4) * t, e.getCoefficient(a, 5) * t, 3 * e.getCoefficient(a, 6) * t, e.getCoefficient(a, 7) * t);
            }
            r[6].setValue(e.getCoefficient(0, 8) * t, e.getCoefficient(1, 8) * t, e.getCoefficient(2, 8) * t, 1);
            var s = this._shaderValues;
            s.setVector(Jt.AMBIENTSHAR, r[0]), s.setVector(Jt.AMBIENTSHAG, r[1]), s.setVector(Jt.AMBIENTSHAB, r[2]), 
            s.setVector(Jt.AMBIENTSHBR, r[3]), s.setVector(Jt.AMBIENTSHBG, r[4]), s.setVector(Jt.AMBIENTSHBB, r[5]), 
            s.setVector(Jt.AMBIENTSHC, r[6]);
        }
        _update() {
            t.PerformancePlugin.begainSample(t.PerformancePlugin.PERFORMANCE_LAYA_3D);
            var e = this.timer._delta / 1e3;
            this._time += e, this._shaderValues.setNumber(Jt.TIME, this._time), t.PerformancePlugin.begainSample(t.PerformancePlugin.PERFORMANCE_LAYA_3D_PHYSICS);
            var r = this._physicsSimulation;
            if (!_._enablePhysics || t.PhysicsSimulation.disableSimulation || d._config.isUseCannonPhysicsEngine || (r._updatePhysicsTransformFromRender(), 
            t.PhysicsComponent._addUpdateList = !1, t.PerformancePlugin.begainSample(t.PerformancePlugin.PERFORMANCE_LAYA_3D_PHYSICS_SIMULATE), 
            r._simulate(e), t.PerformancePlugin.endSample(t.PerformancePlugin.PERFORMANCE_LAYA_3D_PHYSICS_SIMULATE), 
            t.PerformancePlugin.begainSample(t.PerformancePlugin.PERFORMANCE_LAYA_3D_PHYSICS_CHARACTORCOLLISION), 
            r._updateCharacters(), t.PhysicsComponent._addUpdateList = !0, r._updateCollisions(), 
            t.PerformancePlugin.endSample(t.PerformancePlugin.PERFORMANCE_LAYA_3D_PHYSICS_CHARACTORCOLLISION), 
            t.PerformancePlugin.begainSample(t.PerformancePlugin.PERFORMANCE_LAYA_3D_PHYSICS_EVENTSCRIPTS), 
            r._eventScripts(), t.PerformancePlugin.endSample(t.PerformancePlugin.PERFORMANCE_LAYA_3D_PHYSICS_EVENTSCRIPTS)), 
            _._cannon && d._config.isUseCannonPhysicsEngine) {
                var a = this._cannonPhysicsSimulation;
                a._updatePhysicsTransformFromRender(), t.CannonPhysicsComponent._addUpdateList = !1, 
                a._simulate(e), t.CannonPhysicsComponent._addUpdateList = !0, a._updateCollisions(), 
                a._eventScripts();
            }
            t.PerformancePlugin.endSample(t.PerformancePlugin.PERFORMANCE_LAYA_3D_PHYSICS), 
            t.PerformancePlugin.begainSample(t.PerformancePlugin.PERFORMANCE_LAYA_3D_UPDATESCRIPT), 
            this._input._update(), this._clearScript(), this._updateScript(), O._update(this), 
            t.VideoTexture._update(), this._reflectionProbeManager._needUpdateAllRender ? this._reflectionProbeManager.updateAllRenderObjects(this._renders) : this._reflectionProbeManager.update(), 
            this._lateUpdateScript(), t.PerformancePlugin.endSample(t.PerformancePlugin.PERFORMANCE_LAYA_3D_UPDATESCRIPT), 
            t.PerformancePlugin.endSample(t.PerformancePlugin.PERFORMANCE_LAYA_3D);
        }
        _binarySearchIndexInCameraPool(e) {
            for (var t, r = 0, a = this._cameraPool.length - 1; r <= a; ) {
                t = Math.floor((r + a) / 2);
                var n = this._cameraPool[t]._renderingOrder;
                if (n == e._renderingOrder) return t;
                n > e._renderingOrder ? a = t - 1 : r = t + 1;
            }
            return r;
        }
        _allotPickColorByID(e, t) {
            var r = Math.floor(e / 65025);
            e -= 255 * r * 255;
            var a = Math.floor(e / 255), n = e -= 255 * a;
            t.x = r / 255, t.y = a / 255, t.z = n / 255, t.w = 1;
        }
        _searchIDByPickColor(e) {
            return 255 * e.x * 255 + 255 * e.y + e.z;
        }
        onEnable() {
            this._input._onCanvasEvent(t.Render.canvas);
        }
        onDisable() {
            this._input._offCanvasEvent(t.Render.canvas);
        }
        _setCreateURL(e) {
            this._url = t.URL.formatURL(e);
        }
        _getGroup() {
            return this._group;
        }
        _setGroup(e) {
            this._group = e;
        }
        _clearScript() {
            if (this._needClearScriptPool) {
                for (var e = this._scriptPool, t = 0, r = e.length; t < r; t++) {
                    var a = e[t];
                    a && (a._indexInPool = this._tempScriptPool.length, this._tempScriptPool.push(a));
                }
                this._scriptPool = this._tempScriptPool, e.length = 0, this._tempScriptPool = e, 
                this._needClearScriptPool = !1;
            }
        }
        _updateScript() {
            for (var e = this._scriptPool, t = 0, r = e.length; t < r; t++) {
                var a = e[t];
                a && a.enabled && a.onUpdate();
            }
        }
        _lateUpdateScript() {
            for (var e = this._scriptPool, t = 0, r = e.length; t < r; t++) {
                var a = e[t];
                a && a.enabled && a.onLateUpdate();
            }
        }
        _onActive() {
            super._onActive(), t.ILaya.stage._scene3Ds.push(this);
        }
        _onInActive() {
            super._onInActive();
            var e = t.ILaya.stage._scene3Ds;
            e.splice(e.indexOf(this), 1);
        }
        _prepareSceneToRender() {
            var e = this._shaderValues;
            if (d._config._multiLighting) {
                var t = Jt._lightTexture, r = Jt._lightPixles;
                const d = t.width, x = 4 * d;
                var a = 0, n = this._directionLights._length, s = this._directionLights._elements;
                if (n > 0) {
                    var o = this._directionLights.getBrightestLight();
                    this._mainDirectionLight = s[o], this._directionLights.normalLightOrdering(o);
                    for (var l = 0; l < n; l++, a++) {
                        var h = (R = s[l])._direction, _ = R._intensityColor, c = x * a;
                        i.scale(R.color, R._intensity, _), R.transform.worldMatrix.getForward(h), i.normalize(h, h), 
                        r[c] = _.x, r[c + 1] = _.y, r[c + 2] = _.z, r[c + 4] = h.x, r[c + 5] = h.y, r[c + 6] = h.z, 
                        0 == l && (e.setVector3(Jt.SUNLIGHTDIRCOLOR, _), e.setVector3(Jt.SUNLIGHTDIRECTION, h));
                    }
                    e.addDefine(dt.SHADERDEFINE_DIRECTIONLIGHT);
                } else e.removeDefine(dt.SHADERDEFINE_DIRECTIONLIGHT);
                var u = this._pointLights._length;
                if (u > 0) {
                    var m = this._pointLights._elements, f = this._pointLights.getBrightestLight();
                    this._mainPointLight = m[f], this._pointLights.normalLightOrdering(f);
                    for (l = 0; l < u; l++, a++) {
                        var E = (v = m[l]).transform.position;
                        _ = v._intensityColor, c = x * a;
                        i.scale(v.color, v._intensity, _), r[c] = _.x, r[c + 1] = _.y, r[c + 2] = _.z, r[c + 3] = v.range, 
                        r[c + 4] = E.x, r[c + 5] = E.y, r[c + 6] = E.z;
                    }
                    e.addDefine(dt.SHADERDEFINE_POINTLIGHT);
                } else e.removeDefine(dt.SHADERDEFINE_POINTLIGHT);
                var T = this._spotLights._length;
                if (T > 0) {
                    var p = this._spotLights._elements, g = this._spotLights.getBrightestLight();
                    this._mainSpotLight = p[g], this._spotLights.normalLightOrdering(g);
                    for (l = 0; l < T; l++, a++) {
                        var S = p[l];
                        h = S._direction, E = S.transform.position, _ = S._intensityColor, c = x * a;
                        i.scale(S.color, S._intensity, _), S.transform.worldMatrix.getForward(h), i.normalize(h, h), 
                        r[c] = _.x, r[c + 1] = _.y, r[c + 2] = _.z, r[c + 3] = S.range, r[c + 4] = E.x, 
                        r[c + 5] = E.y, r[c + 6] = E.z, r[c + 7] = S.spotAngle * Math.PI / 180, r[c + 8] = h.x, 
                        r[c + 9] = h.y, r[c + 10] = h.z;
                    }
                    e.addDefine(dt.SHADERDEFINE_SPOTLIGHT);
                } else e.removeDefine(dt.SHADERDEFINE_SPOTLIGHT);
                a > 0 && t.setSubPixels(0, 0, d, a, r, 0), e.setTexture(Jt.LIGHTBUFFER, t), e.setInt(Jt.DIRECTIONLIGHTCOUNT, this._directionLights._length), 
                e.setTexture(Jt.CLUSTERBUFFER, qe.instance._clusterTexture);
            } else {
                if (this._directionLights._length > 0) {
                    var R = this._directionLights._elements[0];
                    this._mainDirectionLight = R, i.scale(R.color, R._intensity, R._intensityColor), 
                    R.transform.worldMatrix.getForward(R._direction), i.normalize(R._direction, R._direction), 
                    e.setVector3(Jt.LIGHTDIRCOLOR, R._intensityColor), e.setVector3(Jt.LIGHTDIRECTION, R._direction), 
                    e.setVector3(Jt.SUNLIGHTDIRCOLOR, R._intensityColor), e.setVector3(Jt.SUNLIGHTDIRECTION, R._direction), 
                    e.addDefine(dt.SHADERDEFINE_DIRECTIONLIGHT);
                } else e.removeDefine(dt.SHADERDEFINE_DIRECTIONLIGHT);
                if (this._pointLights._length > 0) {
                    var v = this._pointLights._elements[0];
                    this._mainPointLight = v, i.scale(v.color, v._intensity, v._intensityColor), e.setVector3(Jt.POINTLIGHTCOLOR, v._intensityColor), 
                    e.setVector3(Jt.POINTLIGHTPOS, v.transform.position), e.setNumber(Jt.POINTLIGHTRANGE, v.range), 
                    e.addDefine(dt.SHADERDEFINE_POINTLIGHT);
                } else e.removeDefine(dt.SHADERDEFINE_POINTLIGHT);
                if (this._spotLights._length > 0) {
                    var x = this._spotLights._elements[0];
                    this._mainSpotLight = x, i.scale(x.color, x._intensity, x._intensityColor), e.setVector3(Jt.SPOTLIGHTCOLOR, x._intensityColor), 
                    e.setVector3(Jt.SPOTLIGHTPOS, x.transform.position), x.transform.worldMatrix.getForward(x._direction), 
                    i.normalize(x._direction, x._direction), e.setVector3(Jt.SPOTLIGHTDIRECTION, x._direction), 
                    e.setNumber(Jt.SPOTLIGHTRANGE, x.range), e.setNumber(Jt.SPOTLIGHTSPOTANGLE, x.spotAngle * Math.PI / 180), 
                    e.addDefine(dt.SHADERDEFINE_SPOTLIGHT);
                } else e.removeDefine(dt.SHADERDEFINE_SPOTLIGHT);
            }
        }
        _addScript(e) {
            if (-1 == e._indexInPool) {
                var t = this._scriptPool;
                e._indexInPool = t.length, t.push(e);
            }
        }
        _removeScript(e) {
            -1 != e._indexInPool && (this._scriptPool[e._indexInPool] = null, e._indexInPool = -1, 
            this._needClearScriptPool = !0);
        }
        _preRenderScript() {
            for (var e = this._scriptPool, t = 0, r = e.length; t < r; t++) {
                var a = e[t];
                a && a.enabled && a.onPreRender();
            }
        }
        _postRenderScript() {
            for (var e = this._scriptPool, t = 0, r = e.length; t < r; t++) {
                var a = e[t];
                a && a.enabled && a.onPostRender();
            }
        }
        _addCamera(e) {
            for (var t = this._binarySearchIndexInCameraPool(e), r = e._renderingOrder, a = this._cameraPool.length; t < a && this._cameraPool[t]._renderingOrder <= r; ) t++;
            this._cameraPool.splice(t, 0, e);
        }
        _removeCamera(e) {
            this._cameraPool.splice(this._cameraPool.indexOf(e), 1);
        }
        _preCulling(e, t, r, a) {
            var n = Ze._cameraCullInfo;
            n.position = t._transform.position, n.cullingMask = t.cullingMask, n.boundFrustum = t.boundFrustum, 
            n.useOcclusionCulling = t.useOcclusionCulling, Ze.renderObjectCulling(n, this, e, r, a, !1);
        }
        _clear(r, a) {
            var n, i, s, o = a.viewport, l = a.camera, h = l._getRenderTexture(), _ = o.width, d = o.height;
            l._needInternalRenderTexture() ? (n = 0, i = 0) : (n = o.x, i = l._getCanvasHeight() - o.y - d), 
            r.viewport(n, i, _, d);
            var c = l.clearFlag;
            switch (c !== e.CameraClearFlags.Sky || l.skyRenderer._isAvailable() || this._skyRenderer._isAvailable() || (c = e.CameraClearFlags.SolidColor), 
            c) {
              case e.CameraClearFlags.SolidColor:
                var u = l.clearColor;
                if (r.enable(r.SCISSOR_TEST), r.scissor(n, i, _, d), u ? r.clearColor(u.x, u.y, u.z, u.w) : r.clearColor(0, 0, 0, 0), 
                h) switch (s = r.COLOR_BUFFER_BIT, h.depthStencilFormat) {
                  case t.RenderTextureDepthFormat.DEPTH_16:
                    s |= r.DEPTH_BUFFER_BIT;
                    break;

                  case t.RenderTextureDepthFormat.STENCIL_8:
                    s |= r.STENCIL_BUFFER_BIT;
                    break;

                  case t.RenderTextureDepthFormat.DEPTHSTENCIL_24_8:
                    s |= r.DEPTH_BUFFER_BIT, s |= r.STENCIL_BUFFER_BIT;
                } else s = r.COLOR_BUFFER_BIT | r.DEPTH_BUFFER_BIT;
                t.WebGLContext.setDepthMask(r, !0), r.clear(s), r.disable(r.SCISSOR_TEST);
                break;

              case e.CameraClearFlags.Sky:
              case e.CameraClearFlags.DepthOnly:
                if (r.enable(r.SCISSOR_TEST), r.scissor(n, i, _, d), h) switch (h.depthStencilFormat) {
                  case t.RenderTextureDepthFormat.DEPTH_16:
                    s = r.DEPTH_BUFFER_BIT;
                    break;

                  case t.RenderTextureDepthFormat.STENCIL_8:
                    s = r.STENCIL_BUFFER_BIT;
                    break;

                  case t.RenderTextureDepthFormat.DEPTHSTENCIL_24_8:
                    s = r.DEPTH_BUFFER_BIT | r.STENCIL_BUFFER_BIT;
                } else s = r.DEPTH_BUFFER_BIT;
                t.WebGLContext.setDepthMask(r, !0), r.clear(s), r.disable(r.SCISSOR_TEST);
                break;

              case e.CameraClearFlags.Nothing:
                break;

              default:
                throw new Error("Scene3D:camera clearFlag invalid.");
            }
        }
        _renderScene(t, r) {
            var a = t.camera;
            switch (r) {
              case Jt.SCENERENDERFLAG_RENDERQPAQUE:
                this._opaqueQueue._render(t);
                break;

              case Jt.SCENERENDERFLAG_SKYBOX:
                a.clearFlag === e.CameraClearFlags.Sky && (a.skyRenderer._isAvailable() ? a.skyRenderer._render(t) : this._skyRenderer._isAvailable() && this._skyRenderer._render(t));
                break;

              case Jt.SCENERENDERFLAG_RENDERTRANSPARENT:
                if (this._transparentQueue._render(t), Ze.debugFrustumCulling) for (var n = this._debugTool._render._renderElements, i = 0, s = n.length; i < s; i++) n[i]._update(this, t, null, null), 
                n[i]._render(t);
            }
        }
        _parse(e, r) {
            var a = e.lightmaps;
            if (a) {
                for (var n = a.length, i = new Array(n), s = 0; s < n; s++) {
                    var o = new Wt(), l = a[s];
                    l.path ? o.lightmapColor = t.Loader.getRes(l.path) : (o.lightmapColor = t.Loader.getRes(l.color.path), 
                    l.direction && (o.lightmapDirection = t.Loader.getRes(l.direction.path))), i[s] = o;
                }
                this.lightmaps = i;
            }
            var h = e.ambientColor;
            if (h) {
                var _ = this.ambientColor;
                _.fromArray(h), this.ambientColor = _;
            }
            var d = e.sky;
            if (d) switch (this._skyRenderer.material = t.Loader.getRes(d.material.path), d.mesh) {
              case "SkyBox":
                this._skyRenderer.mesh = lt.instance;
                break;

              case "SkyDome":
                this._skyRenderer.mesh = pt.instance;
                break;

              default:
                this.skyRenderer.mesh = lt.instance;
            }
            this.enableFog = e.enableFog, this.fogStart = e.fogStart, this.fogRange = e.fogRange;
            var c = e.fogColor;
            if (c) {
                var u = this.fogColor;
                u.fromArray(c), this.fogColor = u;
            }
            var m = e.ambientSphericalHarmonics;
            if (m) {
                var f = this.ambientSphericalHarmonics;
                for (s = 0; s < 3; s++) {
                    var E = 9 * s;
                    f.setCoefficients(s, m[E], m[E + 1], m[E + 2], m[E + 3], m[E + 4], m[E + 5], m[E + 6], m[E + 7], m[E + 8]);
                }
                this.ambientSphericalHarmonics = f;
            }
            var T = e.reflection;
            null != T && (this.reflection = t.Loader.getRes(T));
            var p = e.reflectionDecodingFormat;
            null != p && (this.reflectionDecodingFormat = p);
            var g = e.ambientMode;
            null != g && (this.ambientMode = g);
            var S = e.ambientSphericalHarmonicsIntensity;
            null != S && (this.ambientSphericalHarmonicsIntensity = S);
            var R = e.reflectionIntensity;
            null != R && (this.reflectionIntensity = R);
        }
        _addRenderObject(e) {
            this._octree && e._supportOctree ? this._octree.add(e) : this._renders.add(e), e._addReflectionProbeUpdate();
        }
        _removeRenderObject(e) {
            this._octree && e._supportOctree ? this._octree.remove(e) : this._renders.remove(e);
        }
        _getRenderQueue(e) {
            return e <= 2500 ? this._opaqueQueue : this._transparentQueue;
        }
        _clearRenderQueue() {
            this._opaqueQueue.clear(), this._transparentQueue.clear();
            for (var e = Pt._managers, t = 0, r = e.length; t < r; t++) e[t]._clear();
            var a = qt._managers;
            for (t = 0, r = a.length; t < r; t++) a[t]._clear();
        }
        destroy(e = !0) {
            if (!this.destroyed) {
                super.destroy(e), this._skyRenderer.destroy(), this._skyRenderer = null, this._directionLights = null, 
                this._pointLights = null, this._spotLights = null, this._alternateLights = null, 
                this._shaderValues = null, this._renders.clearElement(), this._animatorPool.clearElement(), 
                this._renders = null, this._animatorPool = null, this._cameraPool = null, this._octree = null, 
                this._physicsSimulation && this._physicsSimulation._destroy(), this._reflection._removeReference(), 
                this._reflection = null;
                var r = this._lightmaps;
                if (r) for (var a = 0, n = r.length; a < n; a++) {
                    var i = r[a];
                    i.lightmapColor && i.lightmapColor._removeReference(), i.lightmapDirection && i.lightmapDirection._removeReference();
                }
                this._lightmaps = null, this._reflectionProbeManager.destroy(), t.Loader.clearRes(this.url);
            }
        }
        render(e) {
            e._curSubmit = t.SubmitBase.RENDERBASE, this._children.length > 0 && e.addRenderObject(this);
        }
        renderSubmit() {
            var e, r, a;
            for (t.PerformancePlugin.begainSample(t.PerformancePlugin.PERFORMANCE_LAYA_3D), 
            this._prepareSceneToRender(), t.PerformancePlugin.begainSample(t.PerformancePlugin.PERFORMANCE_LAYA_3D_RENDER), 
            e = 0, a = (r = this._cameraPool.length) - 1; e < r; e++) {
                t.Render.supportWebGLPlusRendering && F.setRuntimeValueMode(e == a);
                var n = this._cameraPool[e];
                n.enableRender && n.render();
            }
            return t.PerformancePlugin.endSample(t.PerformancePlugin.PERFORMANCE_LAYA_3D_RENDER), 
            t.Context.set2DRenderConfig(), t.PerformancePlugin.endSample(t.PerformancePlugin.PERFORMANCE_LAYA_3D), 
            1;
        }
        getRenderType() {
            return 0;
        }
        releaseRender() {}
        reUse(e, t) {
            return 0;
        }
        setGlobalShaderValue(t, r, a) {
            var n = Z.propertyNameToID(t);
            switch (r) {
              case e.ShaderDataType.Int:
                this._shaderValues.setInt(n, a);
                break;

              case e.ShaderDataType.Number:
                this._shaderValues.setNumber(n, a);
                break;

              case e.ShaderDataType.Bool:
                this._shaderValues.setBool(n, a);
                break;

              case e.ShaderDataType.Matrix4x4:
                this._shaderValues.setMatrix4x4(n, a);
                break;

              case e.ShaderDataType.Quaternion:
                this._shaderValues.setQuaternion(n, a);
                break;

              case e.ShaderDataType.Texture:
                this._shaderValues.setTexture(n, a);
                break;

              case e.ShaderDataType.Vector4:
                this._shaderValues.setVector(n, a);
                break;

              case e.ShaderDataType.Vector2:
                this._shaderValues.setVector2(n, a);
                break;

              case e.ShaderDataType.Vector3:
                this._shaderValues.setVector3(n, a);
                break;

              case e.ShaderDataType.Buffer:
                this._shaderValues.setBuffer(n, a);
            }
        }
        get customReflection() {
            return this._reflection;
        }
        set customReflection(e) {
            this._reflection != e && (e._addReference(), this._reflectionProbeManager.sceneReflectionProbe = e, 
            this._reflection = e);
        }
        get reflectionMode() {
            return this._reflectionMode;
        }
        set reflectionMode(e) {
            this._reflectionMode = e;
        }
        setlightmaps(e) {
            for (var t = this._lightmaps, r = 0, a = t.length; r < a; r++) t[r].lightmapColor._removeReference();
            if (!e) throw new Error("Scene3D: value value can't be null.");
            var n = e.length;
            for (t.length = n, r = 0; r < n; r++) {
                var i = e[r];
                i._addReference(), t[r] || (t[r] = new Wt()), t[r].lightmapColor = i;
            }
        }
        getlightmaps() {
            for (var e = new Array(this._lightmaps.length), t = 0; t < this._lightmaps.length; t++) e[t] = this._lightmaps[t].lightmapColor;
            return e;
        }
    }
    Jt._shadowCasterPass = new jt(), Jt.HIERARCHY = "HIERARCHY", Jt.octreeCulling = !1, 
    Jt.octreeInitialSize = 64, Jt.octreeInitialCenter = new i(0, 0, 0), Jt.octreeMinNodeSize = 2, 
    Jt.octreeLooseness = 1.25, Jt.REFLECTIONMODE_SKYBOX = 0, Jt.REFLECTIONMODE_CUSTOM = 1, 
    Jt.SCENERENDERFLAG_RENDERQPAQUE = 0, Jt.SCENERENDERFLAG_SKYBOX = 1, Jt.SCENERENDERFLAG_RENDERTRANSPARENT = 2, 
    Jt.FOGCOLOR = Z.propertyNameToID("u_FogColor"), Jt.FOGSTART = Z.propertyNameToID("u_FogStart"), 
    Jt.FOGRANGE = Z.propertyNameToID("u_FogRange"), Jt.DIRECTIONLIGHTCOUNT = Z.propertyNameToID("u_DirationLightCount"), 
    Jt.LIGHTBUFFER = Z.propertyNameToID("u_LightBuffer"), Jt.CLUSTERBUFFER = Z.propertyNameToID("u_LightClusterBuffer"), 
    Jt.SUNLIGHTDIRECTION = Z.propertyNameToID("u_SunLight.direction"), Jt.SUNLIGHTDIRCOLOR = Z.propertyNameToID("u_SunLight.color"), 
    Jt.AMBIENTSHAR = Z.propertyNameToID("u_AmbientSHAr"), Jt.AMBIENTSHAG = Z.propertyNameToID("u_AmbientSHAg"), 
    Jt.AMBIENTSHAB = Z.propertyNameToID("u_AmbientSHAb"), Jt.AMBIENTSHBR = Z.propertyNameToID("u_AmbientSHBr"), 
    Jt.AMBIENTSHBG = Z.propertyNameToID("u_AmbientSHBg"), Jt.AMBIENTSHBB = Z.propertyNameToID("u_AmbientSHBb"), 
    Jt.AMBIENTSHC = Z.propertyNameToID("u_AmbientSHC"), Jt.LIGHTDIRECTION = Z.propertyNameToID("u_DirectionLight.direction"), 
    Jt.LIGHTDIRCOLOR = Z.propertyNameToID("u_DirectionLight.color"), Jt.POINTLIGHTPOS = Z.propertyNameToID("u_PointLight.position"), 
    Jt.POINTLIGHTRANGE = Z.propertyNameToID("u_PointLight.range"), Jt.POINTLIGHTATTENUATION = Z.propertyNameToID("u_PointLight.attenuation"), 
    Jt.POINTLIGHTCOLOR = Z.propertyNameToID("u_PointLight.color"), Jt.SPOTLIGHTPOS = Z.propertyNameToID("u_SpotLight.position"), 
    Jt.SPOTLIGHTDIRECTION = Z.propertyNameToID("u_SpotLight.direction"), Jt.SPOTLIGHTSPOTANGLE = Z.propertyNameToID("u_SpotLight.spot"), 
    Jt.SPOTLIGHTRANGE = Z.propertyNameToID("u_SpotLight.range"), Jt.SPOTLIGHTCOLOR = Z.propertyNameToID("u_SpotLight.color"), 
    Jt.AMBIENTCOLOR = Z.propertyNameToID("u_AmbientColor"), Jt.TIME = Z.propertyNameToID("u_Time"), 
    Jt._configDefineValues = new w();
    class $t extends t.ShaderCompile {
        constructor(e, t, r, a) {
            for (var n in super(t, r, null), this._cacheSharders = {}, this._cacheShaderHierarchy = 1, 
            this._renderState = new fe(), this._validDefine = new w(), this._tags = {}, this._owner = e, 
            this._stateMap = a, this.defs) this._validDefine.add(Z.getDefineByName(n));
        }
        get renderState() {
            return this._renderState;
        }
        _compileToTree(e, r, a, n, i) {
            var s, o, l, h, _, d, c, u, m, f, E;
            for (m = a; m < r.length; m++) if (!((l = r[m]).length < 1) && 0 !== (d = l.indexOf("//"))) {
                if (d >= 0 && (l = l.substr(0, d)), s = u || new t.ShaderNode(n), u = null, s.text = l, 
                s.noCompile = !0, (d = l.indexOf("#")) >= 0) {
                    for (h = "#", E = d + 1, f = l.length; E < f; E++) {
                        var T = l.charAt(E);
                        if (" " === T || "\t" === T || "?" === T) break;
                        h += T;
                    }
                    switch (s.name = h, h) {
                      case "#ifdef":
                      case "#ifndef":
                        if (s.src = l, s.noCompile = null != l.match(/[!&|()=<>]/), s.noCompile ? console.log("function():Boolean{return " + l.substr(d + s.name.length) + "}") : (c = l.replace(/^\s*/, "").split(/\s+/), 
                        s.setCondition(c[1], "#ifdef" === h ? t.ShaderCompile.IFDEF_YES : t.ShaderCompile.IFDEF_ELSE), 
                        s.text = "//" + s.text), s.setParent(e), e = s, i) for (c = l.substr(E).split(t.ShaderCompile._splitToWordExps3), 
                        E = 0; E < c.length; E++) (l = c[E]).length && (i[l] = !0);
                        continue;

                      case "#if":
                      case "#elif":
                        if (s.src = l, s.noCompile = !0, "#elif" == h && ((o = (e = e.parent).childs[e.childs.length - 1]).text = o.src, 
                        o.noCompile = !0, o.condition = null), s.setParent(e), e = s, i) for (c = l.substr(E).split(t.ShaderCompile._splitToWordExps3), 
                        E = 0; E < c.length; E++) (l = c[E]).length && "defined" != l && (i[l] = !0);
                        continue;

                      case "#else":
                        s.src = l, o = (e = e.parent).childs[e.childs.length - 1], s.noCompile = o.noCompile, 
                        s.noCompile || (s.condition = o.condition, s.conditionType = o.conditionType == t.ShaderCompile.IFDEF_YES ? t.ShaderCompile.IFDEF_ELSE : t.ShaderCompile.IFDEF_YES, 
                        s.text = "//" + s.text + " " + o.text + " " + s.conditionType), s.setParent(e), 
                        e = s;
                        continue;

                      case "#endif":
                        o = (e = e.parent).childs[e.childs.length - 1], s.noCompile = o.noCompile, s.noCompile || (s.text = "//" + s.text), 
                        s.setParent(e);
                        continue;

                      case "#include":
                        c = t.ShaderCompile.splitToWords(l, null);
                        var p = t.ShaderCompile.includes[c[1]];
                        if (!p) throw "ShaderCompile error no this include file:" + c[1];
                        if ((d = c[0].indexOf("?")) < 0) {
                            s.setParent(e), l = p.getWith("with" == c[2] ? c[3] : null), this._compileToTree(s, l.split("\n"), 0, n, i), 
                            s.text = "";
                            continue;
                        }
                        s.setCondition(c[0].substr(d + 1), t.ShaderCompile.IFDEF_YES), s.text = p.getWith("with" == c[2] ? c[3] : null);
                        break;

                      case "#import":
                        _ = (c = t.ShaderCompile.splitToWords(l, null))[1], n.push({
                            node: s,
                            file: t.ShaderCompile.includes[_],
                            ofs: s.text.length
                        });
                        continue;
                    }
                } else {
                    if ((o = e.childs[e.childs.length - 1]) && !o.name) {
                        n.length > 0 && t.ShaderCompile.splitToWords(l, o), u = s, o.text += "\n" + l;
                        continue;
                    }
                    n.length > 0 && t.ShaderCompile.splitToWords(l, s);
                }
                s.setParent(e);
            }
        }
        _resizeCacheShaderMap(e, t, r) {
            var a = this._cacheShaderHierarchy - 1;
            if (t == a) {
                for (var n in e) for (var i = e[n], s = 0, o = r - a; s < o; s++) s == o - 1 ? e[0] = i : e = e[0 == s ? n : 0] = {};
                this._cacheShaderHierarchy = r;
            } else for (var n in e) this._resizeCacheShaderMap(e[n], ++t, r);
        }
        _addDebugShaderVariantCollection(e, t, r) {
            var a = Z._debugShaderVariantInfo, n = this._owner, i = n._owner, s = e._mask;
            Z._getNamesByDefineData(e, t), r.length = s.length;
            for (var o = 0, l = s.length; o < l; o++) r[o] = s[o];
            a ? a.setValue(i, i._subShaders.indexOf(n), n._passes.indexOf(this), t) : Z._debugShaderVariantInfo = a = new X(i, i._subShaders.indexOf(n), n._passes.indexOf(this), t), 
            Z.debugShaderVariantCollection.add(a);
        }
        withCompile(e) {
            var r, a = $t._debugDefineString, n = $t._debugDefineMask;
            e._intersectionDefineDatas(this._validDefine), Z.debugMode && (r = e._length, this._addDebugShaderVariantCollection(e, a, n)), 
            e.addDefineDatas(Jt._configDefineValues);
            var i = this._cacheSharders, s = e._length;
            s > this._cacheShaderHierarchy && (this._resizeCacheShaderMap(i, 0, s), this._cacheShaderHierarchy = s);
            for (var o = e._mask, l = e._length - 1, h = this._cacheShaderHierarchy - 1, _ = 0; _ < h; _++) {
                var c = l < _ ? 0 : o[_], u = i[c];
                u || (i[c] = u = {}), i = u;
            }
            var m = l < h ? 0 : o[h], f = i[m];
            if (f) return f;
            var E = $t._defineString;
            Z._getNamesByDefineData(e, E);
            var T, p, g = d._config, S = g.lightClusterCount, R = {}, v = "";
            t.WebGL._isWebGL2 ? (T = "#version 300 es\n\n\t\t\t\t#define attribute in\n\t\t\t\t#define varying out\n\t\t\t\t#define texture2D texture\n", 
            p = "#version 300 es\n\n\t\t\t\t#define varying in\n\t\t\t\tout highp vec4 pc_fragColor;\n\t\t\t\t#define gl_FragColor pc_fragColor\n\t\t\t\t#define gl_FragDepthEXT gl_FragDepth\n\t\t\t\t#define texture2D texture\n\t\t\t\t#define textureCube texture\n\t\t\t\t#define texture2DProj textureProj\n\t\t\t\t#define texture2DLodEXT textureLod\n\t\t\t\t#define texture2DProjLodEXT textureProjLod\n\t\t\t\t#define textureCubeLodEXT textureLod\n\t\t\t\t#define texture2DGradEXT textureGrad\n\t\t\t\t#define texture2DProjGradEXT textureProjGrad\n\t\t\t\t#define textureCubeGradEXT textureGrad\n") : (T = "", 
            p = "#ifdef GL_EXT_shader_texture_lod\n\t\t\t\t\t#extension GL_EXT_shader_texture_lod : enable\n\t\t\t\t#endif\n\t\t\t\t#if !defined(GL_EXT_shader_texture_lod)\n\t\t\t\t\t#define texture1DLodEXT texture1D\n\t\t\t\t\t#define texture2DLodEXT texture2D\n\t\t\t\t\t#define texture2DProjLodEXT texture2DProj\n\t\t\t\t\t#define texture3DLodEXT texture3D\n\t\t\t\t\t#define textureCubeLodEXT textureCube\n\t\t\t\t#endif\n"), 
            v += "#define MAX_LIGHT_COUNT " + g.maxLightCount + "\n", v += "#define MAX_LIGHT_COUNT_PER_CLUSTER " + g._maxAreaLightCountPerClusterAverage + "\n", 
            v += "#define CLUSTER_X_COUNT " + S.x + "\n", v += "#define CLUSTER_Y_COUNT " + S.y + "\n", 
            v += "#define CLUSTER_Z_COUNT " + S.z + "\n", v += "#define SHADER_CAPAILITY_LEVEL " + t.SystemUtils._shaderCapailityLevel + "\n";
            _ = 0;
            for (var x = E.length; _ < x; _++) {
                var A = E[_];
                v += "#define " + A + "\n", R[A] = !0;
            }
            var I = this._VS.toscript(R, []), M = "";
            0 == I[0].indexOf("#version") && (M = I[0] + "\n", I.shift());
            var D = this._PS.toscript(R, []), L = "";
            if (0 == D[0].indexOf("#version") && (L = D[0] + "\n", D.shift()), f = new Ge(M + T + v + I.join("\n"), L + p + v + D.join("\n"), this._owner._attributeMap, this._owner._uniformMap || this._owner._owner._uniformMap, this), 
            i[m] = f, Z.debugMode) {
                var y = "", C = "";
                for (_ = 0, x = r; _ < x; _++) C += _ == x - 1 ? n[_] : n[_] + ",";
                for (_ = 0, x = a.length; _ < x; _++) y += _ == x - 1 ? a[_] : a[_] + ",";
                console.log("%cLayaAir: Shader Compile Information---ShaderName:" + this._owner._owner._name + " SubShaderIndex:" + this._owner._owner._subShaders.indexOf(this._owner) + " PassIndex:" + this._owner._passes.indexOf(this) + " DefineMask:[" + C + "] DefineNames:[" + y + "]", "color:green");
            }
            return f;
        }
        setTag(e, t) {
            t ? this._tags[e] = t : delete this._tags[e];
        }
        getTag(e) {
            return this._tags[e];
        }
    }
    $t._defineString = [], $t._debugDefineString = [], $t._debugDefineMask = [];
    class er {
        constructor(e, t) {
            this._flags = {}, this._passes = [], this._attributeMap = e, this._uniformMap = t;
        }
        setFlag(e, t) {
            t ? this._flags[e] = t : delete this._flags[e];
        }
        getFlag(e) {
            return this._flags[e];
        }
        addShaderPass(e, t, r = null, a = "Forward") {
            var n = new $t(this, e, t, r);
            return n._pipelineMode = a, this._passes.push(n), n;
        }
    }
    (Pe = e.PBRSpecularSmoothnessSource || (e.PBRSpecularSmoothnessSource = {}))[Pe.SpecularTextureAlpha = 0] = "SpecularTextureAlpha", 
    Pe[Pe.AlbedoTextureAlpha = 1] = "AlbedoTextureAlpha";
    class tr extends ge {
        constructor() {
            super(), this.setShaderName("PBRSpecular"), this._shaderValues.setVector(tr.SPECULARCOLOR, new n(.2, .2, .2, 1));
        }
        static __init__() {
            tr.SHADERDEFINE_SPECULARGLOSSTEXTURE = Z.getDefineByName("SPECULARGLOSSTEXTURE"), 
            tr.SHADERDEFINE_SMOOTHNESSSOURCE_ALBEDOTEXTURE_ALPHA = Z.getDefineByName("SMOOTHNESSSOURCE_ALBEDOTEXTURE_ALPHA");
            var e = {
                a_Position: ie.MESH_POSITION0,
                a_Normal: ie.MESH_NORMAL0,
                a_Tangent0: ie.MESH_TANGENT0,
                a_Texcoord0: ie.MESH_TEXTURECOORDINATE0,
                a_Texcoord1: ie.MESH_TEXTURECOORDINATE1,
                a_BoneWeights: ie.MESH_BLENDWEIGHT0,
                a_BoneIndices: ie.MESH_BLENDINDICES0,
                a_WorldMat: ie.MESH_WORLDMATRIX_ROW0,
                a_SimpleTextureParams: ie.MESH_SIMPLEANIMATOR
            }, t = {
                u_Bones: Z.PERIOD_CUSTOM,
                u_MvpMatrix: Z.PERIOD_SPRITE,
                u_WorldMat: Z.PERIOD_SPRITE,
                u_LightmapScaleOffset: Z.PERIOD_SPRITE,
                u_LightMap: Z.PERIOD_SPRITE,
                u_LightMapDirection: Z.PERIOD_SPRITE,
                u_SimpleAnimatorTexture: Z.PERIOD_SPRITE,
                u_SimpleAnimatorParams: Z.PERIOD_SPRITE,
                u_SimpleAnimatorTextureSize: Z.PERIOD_SPRITE,
                u_ReflectCubeHDRParams: Z.PERIOD_SPRITE,
                u_ReflectTexture: Z.PERIOD_SPRITE,
                u_SpecCubeProbePosition: Z.PERIOD_SPRITE,
                u_SpecCubeBoxMax: Z.PERIOD_SPRITE,
                u_SpecCubeBoxMin: Z.PERIOD_SPRITE,
                u_CameraPos: Z.PERIOD_CAMERA,
                u_View: Z.PERIOD_CAMERA,
                u_ProjectionParams: Z.PERIOD_CAMERA,
                u_Viewport: Z.PERIOD_CAMERA,
                u_ViewProjection: Z.PERIOD_CAMERA,
                u_AlphaTestValue: Z.PERIOD_MATERIAL,
                u_AlbedoColor: Z.PERIOD_MATERIAL,
                u_EmissionColor: Z.PERIOD_MATERIAL,
                u_AlbedoTexture: Z.PERIOD_MATERIAL,
                u_NormalTexture: Z.PERIOD_MATERIAL,
                u_ParallaxTexture: Z.PERIOD_MATERIAL,
                u_OcclusionTexture: Z.PERIOD_MATERIAL,
                u_EmissionTexture: Z.PERIOD_MATERIAL,
                u_Smoothness: Z.PERIOD_MATERIAL,
                u_SmoothnessScale: Z.PERIOD_MATERIAL,
                u_occlusionStrength: Z.PERIOD_MATERIAL,
                u_NormalScale: Z.PERIOD_MATERIAL,
                u_ParallaxScale: Z.PERIOD_MATERIAL,
                u_TilingOffset: Z.PERIOD_MATERIAL,
                u_SpecGlossTexture: Z.PERIOD_MATERIAL,
                u_SpecularColor: Z.PERIOD_MATERIAL,
                u_AmbientColor: Z.PERIOD_SCENE,
                u_FogStart: Z.PERIOD_SCENE,
                u_FogRange: Z.PERIOD_SCENE,
                u_FogColor: Z.PERIOD_SCENE,
                u_DirationLightCount: Z.PERIOD_SCENE,
                u_LightBuffer: Z.PERIOD_SCENE,
                u_LightClusterBuffer: Z.PERIOD_SCENE,
                u_ShadowBias: Z.PERIOD_SCENE,
                u_ShadowLightDirection: Z.PERIOD_SCENE,
                u_ShadowMap: Z.PERIOD_SCENE,
                u_ShadowParams: Z.PERIOD_SCENE,
                u_ShadowSplitSpheres: Z.PERIOD_SCENE,
                u_ShadowMatrices: Z.PERIOD_SCENE,
                u_ShadowMapSize: Z.PERIOD_SCENE,
                u_SpotShadowMap: Z.PERIOD_SCENE,
                u_SpotViewProjectMatrix: Z.PERIOD_SCENE,
                u_ShadowLightPosition: Z.PERIOD_SCENE,
                u_AmbientSHAr: Z.PERIOD_SCENE,
                u_AmbientSHAg: Z.PERIOD_SCENE,
                u_AmbientSHAb: Z.PERIOD_SCENE,
                u_AmbientSHBr: Z.PERIOD_SCENE,
                u_AmbientSHBg: Z.PERIOD_SCENE,
                u_AmbientSHBb: Z.PERIOD_SCENE,
                u_AmbientSHC: Z.PERIOD_SCENE,
                "u_DirectionLight.direction": Z.PERIOD_SCENE,
                "u_DirectionLight.color": Z.PERIOD_SCENE,
                "u_PointLight.position": Z.PERIOD_SCENE,
                "u_PointLight.range": Z.PERIOD_SCENE,
                "u_PointLight.color": Z.PERIOD_SCENE,
                "u_SpotLight.position": Z.PERIOD_SCENE,
                "u_SpotLight.direction": Z.PERIOD_SCENE,
                "u_SpotLight.range": Z.PERIOD_SCENE,
                "u_SpotLight.spot": Z.PERIOD_SCENE,
                "u_SpotLight.color": Z.PERIOD_SCENE
            }, r = {
                s_Cull: Z.RENDER_STATE_CULL,
                s_Blend: Z.RENDER_STATE_BLEND,
                s_BlendSrc: Z.RENDER_STATE_BLEND_SRC,
                s_BlendDst: Z.RENDER_STATE_BLEND_DST,
                s_DepthTest: Z.RENDER_STATE_DEPTH_TEST,
                s_DepthWrite: Z.RENDER_STATE_DEPTH_WRITE
            }, a = Z.add("PBRSpecular", e, t, !0, !0), n = new er(e, t);
            a.addSubShader(n), n.addShaderPass(Ve, we, r, "Forward"), n.addShaderPass(be, Be, r, "ShadowCaster"), 
            n.addShaderPass(Fe, Ue, r, "DepthNormal");
        }
        get specularTexture() {
            return this._shaderValues.getTexture(tr.SPECULARTEXTURE);
        }
        set specularTexture(e) {
            e ? this._shaderValues.addDefine(tr.SHADERDEFINE_SPECULARGLOSSTEXTURE) : this._shaderValues.removeDefine(tr.SHADERDEFINE_SPECULARGLOSSTEXTURE), 
            this._shaderValues.setTexture(tr.SPECULARTEXTURE, e);
        }
        get specularColor() {
            return this._shaderValues.getVector(tr.SPECULARCOLOR);
        }
        set specularColor(e) {
            this._shaderValues.setVector(tr.SPECULARCOLOR, e);
        }
        clone() {
            var e = new tr();
            return this.cloneTo(e), e;
        }
    }
    tr.SPECULARTEXTURE = Z.propertyNameToID("u_SpecGlossTexture"), tr.SPECULARCOLOR = Z.propertyNameToID("u_SpecularColor");
    var rr, ar, nr, ir = '#if defined(GL_FRAGMENT_PRECISION_HIGH)// 原来的写法会被我们自己的解析流程处理，而我们的解析是不认内置宏的，导致被删掉，所以改成 if defined 了\r\n\tprecision highp float;\r\n\tprecision highp int;\r\n#else\r\n\tprecision mediump float;\r\n\tprecision mediump int;\r\n#endif\r\n\r\n#include "Lighting.glsl";\r\n#include "Shadow.glsl"\r\n#include "PBRFSInput.glsl";\r\n#include "LayaPBRBRDF.glsl";\r\n#include "GlobalIllumination.glsl";\r\n#include "PBRCore.glsl";\r\n\r\nvoid main()\r\n{\r\n\tfragmentForward();\r\n}', sr = '#if defined(GL_FRAGMENT_PRECISION_HIGH)// 原来的写法会被我们自己的解析流程处理，而我们的解析是不认内置宏的，导致被删掉，所以改成 if defined 了\r\n\tprecision highp float;\r\n\tprecision highp int;\r\n#else\r\n\tprecision mediump float;\r\n\tprecision mediump int;\r\n#endif\r\n#include "Lighting.glsl";\r\n#include "LayaUtile.glsl"\r\n#include "Shadow.glsl"\r\n#include "PBRVSInput.glsl";\r\n#include "PBRVertex.glsl";\r\n\r\nvoid main()\r\n{\r\n\tvertexForward();\r\n\tgl_Position=remapGLPositionZ(gl_Position);\r\n}', or = '#if defined(GL_FRAGMENT_PRECISION_HIGH)// 原来的写法会被我们自己的解析流程处理，而我们的解析是不认内置宏的，导致被删掉，所以改成 if defined 了\r\n\tprecision highp float;\r\n\tprecision highp int;\r\n#else\r\n\tprecision mediump float;\r\n\tprecision mediump int;\r\n#endif\r\n\r\n#include "ShadowCasterFS.glsl"\r\n\r\nvoid main()\r\n{\r\n\tgl_FragColor=shadowCasterFragment();\r\n}', lr = '#include "ShadowCasterVS.glsl"\n\nvoid main()\n{\n\tvec4 positionCS =  shadowCasterVertex();\n\tgl_Position=remapGLPositionZ(positionCS);\n}';
    (rr = e.PBRMetallicSmoothnessSource || (e.PBRMetallicSmoothnessSource = {}))[rr.MetallicGlossTextureAlpha = 0] = "MetallicGlossTextureAlpha", 
    rr[rr.AlbedoTextureAlpha = 1] = "AlbedoTextureAlpha";
    class hr extends ge {
        constructor() {
            super(), this._smoothnessSource = 0, this.setShaderName("PBR"), this._shaderValues.setNumber(hr.METALLIC, 0);
        }
        static __init__() {
            hr.SHADERDEFINE_METALLICGLOSSTEXTURE = Z.getDefineByName("METALLICGLOSSTEXTURE"), 
            hr.SHADERDEFINE_SMOOTHNESSSOURCE_ALBEDOTEXTURE_ALPHA = Z.getDefineByName("SMOOTHNESSSOURCE_ALBEDOTEXTURE_ALPHA");
            var e = {
                a_Position: ie.MESH_POSITION0,
                a_Normal: ie.MESH_NORMAL0,
                a_Tangent0: ie.MESH_TANGENT0,
                a_Texcoord0: ie.MESH_TEXTURECOORDINATE0,
                a_Texcoord1: ie.MESH_TEXTURECOORDINATE1,
                a_BoneWeights: ie.MESH_BLENDWEIGHT0,
                a_BoneIndices: ie.MESH_BLENDINDICES0,
                a_WorldMat: ie.MESH_WORLDMATRIX_ROW0,
                a_SimpleTextureParams: ie.MESH_SIMPLEANIMATOR
            }, t = {
                u_Bones: Z.PERIOD_CUSTOM,
                u_MvpMatrix: Z.PERIOD_SPRITE,
                u_WorldMat: Z.PERIOD_SPRITE,
                u_LightmapScaleOffset: Z.PERIOD_SPRITE,
                u_LightMap: Z.PERIOD_SPRITE,
                u_LightMapDirection: Z.PERIOD_SPRITE,
                u_SimpleAnimatorTexture: Z.PERIOD_SPRITE,
                u_SimpleAnimatorParams: Z.PERIOD_SPRITE,
                u_SimpleAnimatorTextureSize: Z.PERIOD_SPRITE,
                u_ReflectCubeHDRParams: Z.PERIOD_SPRITE,
                u_ReflectTexture: Z.PERIOD_SPRITE,
                u_SpecCubeProbePosition: Z.PERIOD_SPRITE,
                u_SpecCubeBoxMax: Z.PERIOD_SPRITE,
                u_SpecCubeBoxMin: Z.PERIOD_SPRITE,
                u_CameraPos: Z.PERIOD_CAMERA,
                u_View: Z.PERIOD_CAMERA,
                u_ProjectionParams: Z.PERIOD_CAMERA,
                u_Viewport: Z.PERIOD_CAMERA,
                u_ViewProjection: Z.PERIOD_CAMERA,
                u_AlphaTestValue: Z.PERIOD_MATERIAL,
                u_AlbedoColor: Z.PERIOD_MATERIAL,
                u_EmissionColor: Z.PERIOD_MATERIAL,
                u_AlbedoTexture: Z.PERIOD_MATERIAL,
                u_NormalTexture: Z.PERIOD_MATERIAL,
                u_ParallaxTexture: Z.PERIOD_MATERIAL,
                u_OcclusionTexture: Z.PERIOD_MATERIAL,
                u_EmissionTexture: Z.PERIOD_MATERIAL,
                u_Smoothness: Z.PERIOD_MATERIAL,
                u_SmoothnessScale: Z.PERIOD_MATERIAL,
                u_occlusionStrength: Z.PERIOD_MATERIAL,
                u_NormalScale: Z.PERIOD_MATERIAL,
                u_ParallaxScale: Z.PERIOD_MATERIAL,
                u_TilingOffset: Z.PERIOD_MATERIAL,
                u_MetallicGlossTexture: Z.PERIOD_MATERIAL,
                u_Metallic: Z.PERIOD_MATERIAL,
                u_AmbientColor: Z.PERIOD_SCENE,
                u_FogStart: Z.PERIOD_SCENE,
                u_FogRange: Z.PERIOD_SCENE,
                u_FogColor: Z.PERIOD_SCENE,
                u_DirationLightCount: Z.PERIOD_SCENE,
                u_LightBuffer: Z.PERIOD_SCENE,
                u_LightClusterBuffer: Z.PERIOD_SCENE,
                u_ShadowBias: Z.PERIOD_SCENE,
                u_ShadowLightDirection: Z.PERIOD_SCENE,
                u_ShadowMap: Z.PERIOD_SCENE,
                u_ShadowParams: Z.PERIOD_SCENE,
                u_ShadowSplitSpheres: Z.PERIOD_SCENE,
                u_ShadowMatrices: Z.PERIOD_SCENE,
                u_ShadowMapSize: Z.PERIOD_SCENE,
                u_SpotShadowMap: Z.PERIOD_SCENE,
                u_SpotViewProjectMatrix: Z.PERIOD_SCENE,
                u_ShadowLightPosition: Z.PERIOD_SCENE,
                u_AmbientSHAr: Z.PERIOD_SCENE,
                u_AmbientSHAg: Z.PERIOD_SCENE,
                u_AmbientSHAb: Z.PERIOD_SCENE,
                u_AmbientSHBr: Z.PERIOD_SCENE,
                u_AmbientSHBg: Z.PERIOD_SCENE,
                u_AmbientSHBb: Z.PERIOD_SCENE,
                u_AmbientSHC: Z.PERIOD_SCENE,
                "u_DirectionLight.direction": Z.PERIOD_SCENE,
                "u_DirectionLight.color": Z.PERIOD_SCENE,
                "u_PointLight.position": Z.PERIOD_SCENE,
                "u_PointLight.range": Z.PERIOD_SCENE,
                "u_PointLight.color": Z.PERIOD_SCENE,
                "u_SpotLight.position": Z.PERIOD_SCENE,
                "u_SpotLight.direction": Z.PERIOD_SCENE,
                "u_SpotLight.range": Z.PERIOD_SCENE,
                "u_SpotLight.spot": Z.PERIOD_SCENE,
                "u_SpotLight.color": Z.PERIOD_SCENE
            }, r = {
                s_Cull: Z.RENDER_STATE_CULL,
                s_Blend: Z.RENDER_STATE_BLEND,
                s_BlendSrc: Z.RENDER_STATE_BLEND_SRC,
                s_BlendDst: Z.RENDER_STATE_BLEND_DST,
                s_DepthTest: Z.RENDER_STATE_DEPTH_TEST,
                s_DepthWrite: Z.RENDER_STATE_DEPTH_WRITE
            }, a = Z.add("PBR", e, t, !0, !0), n = new er(e, t);
            a.addSubShader(n), n.addShaderPass(sr, ir, r, "Forward"), n.addShaderPass(lr, or, r, "ShadowCaster"), 
            n.addShaderPass(Fe, Ue, r, "DepthNormal");
        }
        get metallicGlossTexture() {
            return this._shaderValues.getTexture(hr.METALLICGLOSSTEXTURE);
        }
        set metallicGlossTexture(e) {
            e ? this._shaderValues.addDefine(hr.SHADERDEFINE_METALLICGLOSSTEXTURE) : this._shaderValues.removeDefine(hr.SHADERDEFINE_METALLICGLOSSTEXTURE), 
            this._shaderValues.setTexture(hr.METALLICGLOSSTEXTURE, e);
        }
        get metallic() {
            return this._shaderValues.getNumber(hr.METALLIC);
        }
        set metallic(e) {
            this._shaderValues.setNumber(hr.METALLIC, Math.max(0, Math.min(1, e)));
        }
        get smoothnessSource() {
            return this._smoothnessSource;
        }
        set smoothnessSource(e) {
            e ? this._shaderValues.addDefine(hr.SHADERDEFINE_SMOOTHNESSSOURCE_ALBEDOTEXTURE_ALPHA) : this._shaderValues.removeDefine(hr.SHADERDEFINE_SMOOTHNESSSOURCE_ALBEDOTEXTURE_ALPHA), 
            this._smoothnessSource = e;
        }
        clone() {
            var e = new hr();
            return this.cloneTo(e), e;
        }
    }
    hr.METALLICGLOSSTEXTURE = Z.propertyNameToID("u_MetallicGlossTexture"), hr.METALLIC = Z.propertyNameToID("u_Metallic");
    class _r extends ue {
        constructor() {
            super(), this.setShaderName("SkyBox"), this.tintColor = new n(.5, .5, .5, .5), this.exposure = 1, 
            this.rotation = 0;
        }
        static __initDefine__() {}
        get tintColor() {
            return this._shaderValues.getVector(_r.TINTCOLOR);
        }
        set tintColor(e) {
            this._shaderValues.setVector(_r.TINTCOLOR, e);
        }
        get exposure() {
            return this._shaderValues.getNumber(_r.EXPOSURE);
        }
        set exposure(e) {
            this._shaderValues.setNumber(_r.EXPOSURE, e);
        }
        get rotation() {
            return this._shaderValues.getNumber(_r.ROTATION);
        }
        set rotation(e) {
            this._shaderValues.setNumber(_r.ROTATION, e);
        }
        get textureCube() {
            return this._shaderValues.getTexture(_r.TEXTURECUBE);
        }
        set textureCube(e) {
            this._shaderValues.setTexture(_r.TEXTURECUBE, e);
        }
        clone() {
            var e = new _r();
            return this.cloneTo(e), e;
        }
    }
    _r.TINTCOLOR = Z.propertyNameToID("u_TintColor"), _r.EXPOSURE = Z.propertyNameToID("u_Exposure"), 
    _r.ROTATION = Z.propertyNameToID("u_Rotation"), _r.TEXTURECUBE = Z.propertyNameToID("u_CubeTexture");
    class dr extends ue {
        constructor() {
            super(), this.setShaderName("SkyBoxProcedural"), this.sunDisk = dr.SUN_HIGH_QUALITY, 
            this.sunSize = .04, this.sunSizeConvergence = 5, this.atmosphereThickness = 1, this.skyTint = new n(.5, .5, .5, 1), 
            this.groundTint = new n(.369, .349, .341, 1), this.exposure = 1.3;
        }
        static __initDefine__() {
            dr.SHADERDEFINE_SUN_HIGH_QUALITY = Z.getDefineByName("SUN_HIGH_QUALITY"), dr.SHADERDEFINE_SUN_SIMPLE = Z.getDefineByName("SUN_SIMPLE");
        }
        get sunDisk() {
            return this._sunDisk;
        }
        set sunDisk(e) {
            switch (e) {
              case dr.SUN_HIGH_QUALITY:
                this._shaderValues.removeDefine(dr.SHADERDEFINE_SUN_SIMPLE), this._shaderValues.addDefine(dr.SHADERDEFINE_SUN_HIGH_QUALITY);
                break;

              case dr.SUN_SIMPLE:
                this._shaderValues.removeDefine(dr.SHADERDEFINE_SUN_HIGH_QUALITY), this._shaderValues.addDefine(dr.SHADERDEFINE_SUN_SIMPLE);
                break;

              case dr.SUN_NODE:
                this._shaderValues.removeDefine(dr.SHADERDEFINE_SUN_HIGH_QUALITY), this._shaderValues.removeDefine(dr.SHADERDEFINE_SUN_SIMPLE);
                break;

              default:
                throw "SkyBoxProceduralMaterial: unknown sun value.";
            }
            this._sunDisk = e;
        }
        get sunSize() {
            return this._shaderValues.getNumber(dr.SUNSIZE);
        }
        set sunSize(e) {
            e = Math.min(Math.max(0, e), 1), this._shaderValues.setNumber(dr.SUNSIZE, e);
        }
        get sunSizeConvergence() {
            return this._shaderValues.getNumber(dr.SUNSIZECONVERGENCE);
        }
        set sunSizeConvergence(e) {
            e = Math.min(Math.max(0, e), 20), this._shaderValues.setNumber(dr.SUNSIZECONVERGENCE, e);
        }
        get atmosphereThickness() {
            return this._shaderValues.getNumber(dr.ATMOSPHERETHICKNESS);
        }
        set atmosphereThickness(e) {
            e = Math.min(Math.max(0, e), 5), this._shaderValues.setNumber(dr.ATMOSPHERETHICKNESS, e);
        }
        get skyTint() {
            return this._shaderValues.getVector(dr.SKYTINT);
        }
        set skyTint(e) {
            this._shaderValues.setVector(dr.SKYTINT, e);
        }
        get groundTint() {
            return this._shaderValues.getVector(dr.GROUNDTINT);
        }
        set groundTint(e) {
            this._shaderValues.setVector(dr.GROUNDTINT, e);
        }
        get exposure() {
            return this._shaderValues.getNumber(dr.EXPOSURE);
        }
        set exposure(e) {
            e = Math.min(Math.max(0, e), 8), this._shaderValues.setNumber(dr.EXPOSURE, e);
        }
        clone() {
            var e = new dr();
            return this.cloneTo(e), e;
        }
    }
    dr.SUN_NODE = 0, dr.SUN_SIMPLE = 1, dr.SUN_HIGH_QUALITY = 2, dr.SUNSIZE = Z.propertyNameToID("u_SunSize"), 
    dr.SUNSIZECONVERGENCE = Z.propertyNameToID("u_SunSizeConvergence"), dr.ATMOSPHERETHICKNESS = Z.propertyNameToID("u_AtmosphereThickness"), 
    dr.SKYTINT = Z.propertyNameToID("u_SkyTint"), dr.GROUNDTINT = Z.propertyNameToID("u_GroundTint"), 
    dr.EXPOSURE = Z.propertyNameToID("u_Exposure");
    class cr extends ue {
        constructor() {
            super(), this.setShaderName("Unlit"), this._shaderValues.setVector(cr.ALBEDOCOLOR, new n(1, 1, 1, 1)), 
            this._shaderValues.setVector(cr.TILINGOFFSET, new n(1, 1, 0, 0)), this.renderMode = cr.RENDERMODE_OPAQUE, 
            this.albedoIntensity = 1;
        }
        static __initDefine__() {
            cr.SHADERDEFINE_ALBEDOTEXTURE = Z.getDefineByName("ALBEDOTEXTURE"), cr.SHADERDEFINE_ENABLEVERTEXCOLOR = Z.getDefineByName("ENABLEVERTEXCOLOR");
        }
        get _ColorR() {
            return this.albedoColor.x;
        }
        set _ColorR(e) {
            let t = this.albedoColor;
            t.x = e, this.albedoColor = t;
        }
        get _ColorG() {
            return this.albedoColor.y;
        }
        set _ColorG(e) {
            let t = this.albedoColor;
            t.y = e, this.albedoColor = t;
        }
        get _ColorB() {
            return this.albedoColor.z;
        }
        set _ColorB(e) {
            let t = this.albedoColor;
            t.z = e, this.albedoColor = t;
        }
        get _ColorA() {
            return this.albedoColor.w;
        }
        set _ColorA(e) {
            let t = this.albedoColor;
            t.w = e, this.albedoColor = t;
        }
        get _Color() {
            return this._shaderValues.getVector(cr.ALBEDOCOLOR);
        }
        set _Color(e) {
            this.albedoColor = e;
        }
        get _AlbedoIntensity() {
            return this._albedoIntensity;
        }
        set _AlbedoIntensity(e) {
            if (this._albedoIntensity !== e) {
                var t = this._shaderValues.getVector(cr.ALBEDOCOLOR);
                n.scale(this.albedoColor, e, t), this._albedoIntensity = e, this._shaderValues.setVector(cr.ALBEDOCOLOR, t);
            }
        }
        get _MainTex_STX() {
            return this._shaderValues.getVector(cr.TILINGOFFSET).x;
        }
        set _MainTex_STX(e) {
            var t = this._shaderValues.getVector(cr.TILINGOFFSET);
            t.x = e, this.tilingOffset = t;
        }
        get _MainTex_STY() {
            return this._shaderValues.getVector(cr.TILINGOFFSET).y;
        }
        set _MainTex_STY(e) {
            var t = this._shaderValues.getVector(cr.TILINGOFFSET);
            t.y = e, this.tilingOffset = t;
        }
        get _MainTex_STZ() {
            return this._shaderValues.getVector(cr.TILINGOFFSET).z;
        }
        set _MainTex_STZ(e) {
            var t = this._shaderValues.getVector(cr.TILINGOFFSET);
            t.z = e, this.tilingOffset = t;
        }
        get _MainTex_STW() {
            return this._shaderValues.getVector(cr.TILINGOFFSET).w;
        }
        set _MainTex_STW(e) {
            var t = this._shaderValues.getVector(cr.TILINGOFFSET);
            t.w = e, this.tilingOffset = t;
        }
        get _MainTex_ST() {
            return this._shaderValues.getVector(cr.TILINGOFFSET);
        }
        set _MainTex_ST(e) {
            this.tilingOffset = e;
        }
        get _Cutoff() {
            return this.alphaTestValue;
        }
        set _Cutoff(e) {
            this.alphaTestValue = e;
        }
        get albedoColorR() {
            return this._ColorR;
        }
        set albedoColorR(e) {
            this._ColorR = e;
        }
        get albedoColorG() {
            return this._ColorG;
        }
        set albedoColorG(e) {
            this._ColorG = e;
        }
        get albedoColorB() {
            return this._ColorB;
        }
        set albedoColorB(e) {
            this._ColorB = e;
        }
        get albedoColorA() {
            return this._ColorA;
        }
        set albedoColorA(e) {
            this._ColorA = e;
        }
        get albedoColor() {
            return this._shaderValues.getVector(cr.ALBEDOCOLOR);
        }
        set albedoColor(e) {
            var t = this._shaderValues.getVector(cr.ALBEDOCOLOR);
            n.scale(e, this._albedoIntensity, t), this._shaderValues.setVector(cr.ALBEDOCOLOR, t);
        }
        get albedoIntensity() {
            return this._albedoIntensity;
        }
        set albedoIntensity(e) {
            this._AlbedoIntensity = e;
        }
        get albedoTexture() {
            return this._shaderValues.getTexture(cr.ALBEDOTEXTURE);
        }
        set albedoTexture(e) {
            e ? this._shaderValues.addDefine(cr.SHADERDEFINE_ALBEDOTEXTURE) : this._shaderValues.removeDefine(cr.SHADERDEFINE_ALBEDOTEXTURE), 
            this._shaderValues.setTexture(cr.ALBEDOTEXTURE, e);
        }
        get tilingOffsetX() {
            return this._MainTex_STX;
        }
        set tilingOffsetX(e) {
            this._MainTex_STX = e;
        }
        get tilingOffsetY() {
            return this._MainTex_STY;
        }
        set tilingOffsetY(e) {
            this._MainTex_STY = e;
        }
        get tilingOffsetZ() {
            return this._MainTex_STZ;
        }
        set tilingOffsetZ(e) {
            this._MainTex_STZ = e;
        }
        get tilingOffsetW() {
            return this._MainTex_STW;
        }
        set tilingOffsetW(e) {
            this._MainTex_STW = e;
        }
        get tilingOffset() {
            return this._shaderValues.getVector(cr.TILINGOFFSET);
        }
        set tilingOffset(e) {
            e ? this._shaderValues.setVector(cr.TILINGOFFSET, e) : this._shaderValues.getVector(cr.TILINGOFFSET).setValue(1, 1, 0, 0);
        }
        get enableVertexColor() {
            return this._shaderValues.hasDefine(cr.SHADERDEFINE_ENABLEVERTEXCOLOR);
        }
        set enableVertexColor(e) {
            e ? this._shaderValues.addDefine(cr.SHADERDEFINE_ENABLEVERTEXCOLOR) : this._shaderValues.removeDefine(cr.SHADERDEFINE_ENABLEVERTEXCOLOR);
        }
        set renderMode(e) {
            switch (e) {
              case cr.RENDERMODE_OPAQUE:
                this.alphaTest = !1, this.renderQueue = ue.RENDERQUEUE_OPAQUE, this.depthWrite = !0, 
                this.cull = fe.CULL_BACK, this.blend = fe.BLEND_DISABLE, this.depthTest = fe.DEPTHTEST_LESS;
                break;

              case cr.RENDERMODE_CUTOUT:
                this.renderQueue = ue.RENDERQUEUE_ALPHATEST, this.alphaTest = !0, this.depthWrite = !0, 
                this.cull = fe.CULL_BACK, this.blend = fe.BLEND_DISABLE, this.depthTest = fe.DEPTHTEST_LESS;
                break;

              case cr.RENDERMODE_TRANSPARENT:
                this.renderQueue = ue.RENDERQUEUE_TRANSPARENT, this.alphaTest = !1, this.depthWrite = !1, 
                this.cull = fe.CULL_BACK, this.blend = fe.BLEND_ENABLE_ALL, this.blendSrc = fe.BLENDPARAM_SRC_ALPHA, 
                this.blendDst = fe.BLENDPARAM_ONE_MINUS_SRC_ALPHA, this.depthTest = fe.DEPTHTEST_LESS;
                break;

              default:
                throw new Error("UnlitMaterial : renderMode value error.");
            }
        }
        clone() {
            var e = new cr();
            return this.cloneTo(e), e;
        }
    }
    cr.RENDERMODE_OPAQUE = 0, cr.RENDERMODE_CUTOUT = 1, cr.RENDERMODE_TRANSPARENT = 2, 
    cr.RENDERMODE_ADDTIVE = 3, cr.ALBEDOTEXTURE = Z.propertyNameToID("u_AlbedoTexture"), 
    cr.ALBEDOCOLOR = Z.propertyNameToID("u_AlbedoColor"), cr.TILINGOFFSET = Z.propertyNameToID("u_TilingOffset");
    class ur extends ue {
        constructor() {
            super(), this.setShaderName("WaterPrimary"), this._shaderValues.setVector(ur.HORIZONCOLOR, new n(.172, .463, .435, 0)), 
            this._shaderValues.setNumber(ur.WAVESCALE, .15), this._shaderValues.setVector(ur.WAVESPEED, new n(19, 9, -16, -7));
        }
        static __initDefine__() {
            ur.SHADERDEFINE_MAINTEXTURE = Z.getDefineByName("MAINTEXTURE"), ur.SHADERDEFINE_NORMALTEXTURE = Z.getDefineByName("NORMALTEXTURE");
        }
        get horizonColor() {
            return this._shaderValues.getVector(ur.HORIZONCOLOR);
        }
        set horizonColor(e) {
            this._shaderValues.setVector(ur.HORIZONCOLOR, e);
        }
        get mainTexture() {
            return this._shaderValues.getTexture(ur.MAINTEXTURE);
        }
        set mainTexture(e) {
            e ? this._shaderValues.addDefine(ur.SHADERDEFINE_MAINTEXTURE) : this._shaderValues.removeDefine(ur.SHADERDEFINE_MAINTEXTURE), 
            this._shaderValues.setTexture(ur.MAINTEXTURE, e);
        }
        get normalTexture() {
            return this._shaderValues.getTexture(ur.NORMALTEXTURE);
        }
        set normalTexture(e) {
            e ? this._shaderValues.addDefine(ur.SHADERDEFINE_NORMALTEXTURE) : this._shaderValues.removeDefine(ur.SHADERDEFINE_NORMALTEXTURE), 
            this._shaderValues.setTexture(ur.NORMALTEXTURE, e);
        }
        get waveScale() {
            return this._shaderValues.getNumber(ur.WAVESCALE);
        }
        set waveScale(e) {
            this._shaderValues.setNumber(ur.WAVESCALE, e);
        }
        get waveSpeed() {
            return this._shaderValues.getVector(ur.WAVESPEED);
        }
        set waveSpeed(e) {
            this._shaderValues.setVector(ur.WAVESPEED, e);
        }
        clone() {
            var e = new ur();
            return this.cloneTo(e), e;
        }
    }
    ur.HORIZONCOLOR = Z.propertyNameToID("u_HorizonColor"), ur.MAINTEXTURE = Z.propertyNameToID("u_MainTexture"), 
    ur.NORMALTEXTURE = Z.propertyNameToID("u_NormalTexture"), ur.WAVESCALE = Z.propertyNameToID("u_WaveScale"), 
    ur.WAVESPEED = Z.propertyNameToID("u_WaveSpeed");
    class mr extends bt {
        constructor(e) {
            super(e), this._revertStaticBatchDefineUV1 = !1, this._projectionViewWorldMatrix = new b();
        }
        _createRenderElement() {
            return new Nt();
        }
        _onMeshChange(e) {
            if (e) {
                var t = e.subMeshCount;
                this._renderElements.length = t;
                for (var r = 0; r < t; r++) {
                    var a = this._renderElements[r];
                    if (!a) {
                        var n = this.sharedMaterials[r];
                        (a = this._renderElements[r] = this._createRenderElement()).setTransform(this._owner._transform), 
                        a.render = this, a.material = n || Ee.defaultMaterial;
                    }
                    a.setGeometry(e.getSubMesh(r));
                }
            } else this._renderElements.length = 0;
            this._boundsChange = !0;
        }
        _calculateBoundingBox() {
            var e = this._owner.meshFilter.sharedMesh;
            if (e) {
                var t = this._owner.transform.worldMatrix;
                e.bounds._tranform(t, this._bounds);
            }
        }
        _needRender(e, t) {
            return !e || e.intersects(this.bounds._getBoundBox());
        }
        _renderUpdate(t, r) {
            this._applyLightMapParams();
            var a = t.renderElement;
            switch (a.renderType) {
              case Ot.RENDERTYPE_NORMAL:
                this._shaderValues.setMatrix4x4($.WORLDMATRIX, r.worldMatrix);
                break;

              case Ot.RENDERTYPE_STATICBATCH:
                r ? this._shaderValues.setMatrix4x4($.WORLDMATRIX, r.worldMatrix) : this._shaderValues.setMatrix4x4($.WORLDMATRIX, b.DEFAULT), 
                this._shaderValues.hasDefine(ne.SHADERDEFINE_UV1) ? this._revertStaticBatchDefineUV1 = !1 : (this._shaderValues.addDefine(ne.SHADERDEFINE_UV1), 
                this._revertStaticBatchDefineUV1 = !0), this._shaderValues.setVector(Lt.LIGHTMAPSCALEOFFSET, bt._defaultLightmapScaleOffset);
                break;

              case Ot.RENDERTYPE_VERTEXBATCH:
                this._shaderValues.setMatrix4x4($.WORLDMATRIX, b.DEFAULT);
                break;

              case Ot.RENDERTYPE_INSTANCEBATCH:
                for (var n = Ct.instance.instanceWorldMatrixData, i = a.instanceBatchElementList, s = i.elements, o = i.length, l = 0; l < o; l++) n.set(s[l]._transform.worldMatrix.elements, 16 * l);
                var h = Ct.instance.instanceWorldMatrixBuffer;
                h.orphanStorage(), h.setData(n.buffer, 0, 0, 16 * o * 4), this._shaderValues.addDefine(ne.SHADERDEFINE_GPU_INSTANCE);
            }
            this._probReflection && (this._reflectionMode == e.ReflectionProbeMode.off ? (this._shaderValues.removeDefine(ne.SHADERDEFINE_SPECCUBE_BOX_PROJECTION), 
            this._shaderValues.setVector(Lt.REFLECTIONCUBE_HDR_PARAMS, Bt.defaultTextureHDRDecodeValues), 
            this._shaderValues.setTexture(Lt.REFLECTIONTEXTURE, gt.blackTexture)) : (this._probReflection.boxProjection ? (this._shaderValues.addDefine(ne.SHADERDEFINE_SPECCUBE_BOX_PROJECTION), 
            this._shaderValues.setVector3(Lt.REFLECTIONCUBE_PROBEPOSITION, this._probReflection.probePosition), 
            this._shaderValues.setVector3(Lt.REFLECTIONCUBE_PROBEBOXMAX, this._probReflection.boundsMax), 
            this._shaderValues.setVector3(Lt.REFLECTIONCUBE_PROBEBOXMIN, this._probReflection.boundsMin)) : this._shaderValues.removeDefine(ne.SHADERDEFINE_SPECCUBE_BOX_PROJECTION), 
            this._shaderValues.setTexture(Lt.REFLECTIONTEXTURE, this._probReflection.reflectionTexture), 
            this._shaderValues.setVector(Lt.REFLECTIONCUBE_HDR_PARAMS, this._probReflection.reflectionHDRParams)));
        }
        _renderUpdateWithCamera(e, t) {
            var r = e.projectionViewMatrix;
            if (r) switch (e.renderElement.renderType) {
              case Ot.RENDERTYPE_NORMAL:
              case Ot.RENDERTYPE_STATICBATCH:
              case Ot.RENDERTYPE_VERTEXBATCH:
                t ? (b.multiply(r, t.worldMatrix, this._projectionViewWorldMatrix), this._shaderValues.setMatrix4x4($.MVPMATRIX, this._projectionViewWorldMatrix)) : this._shaderValues.setMatrix4x4($.MVPMATRIX, r);
            }
        }
        _revertBatchRenderUpdate(e) {
            switch (e.renderElement.renderType) {
              case Ot.RENDERTYPE_STATICBATCH:
                this._revertStaticBatchDefineUV1 && this._shaderValues.removeDefine(ne.SHADERDEFINE_UV1), 
                this._shaderValues.setVector(Lt.LIGHTMAPSCALEOFFSET, this.lightmapScaleOffset);
                break;

              case Ot.RENDERTYPE_INSTANCEBATCH:
                this._shaderValues.removeDefine(ne.SHADERDEFINE_GPU_INSTANCE);
            }
        }
        _destroy() {
            this._isPartOfStaticBatch && Vt.instance._removeRenderSprite(this._owner), super._destroy();
        }
    }
    class fr {
        constructor(e) {
            this._owner = e;
        }
        get sharedMesh() {
            return this._sharedMesh;
        }
        set sharedMesh(e) {
            if (this._sharedMesh !== e) {
                var t = this._owner._render._shaderValues, r = this._sharedMesh;
                if (r) {
                    r._removeReference(), this._getMeshDefine(r, fr._meshVerticeDefine);
                    for (var a = 0, n = fr._meshVerticeDefine.length; a < n; a++) t.removeDefine(fr._meshVerticeDefine[a]);
                }
                if (e) {
                    e._addReference(), this._getMeshDefine(e, fr._meshVerticeDefine);
                    for (a = 0, n = fr._meshVerticeDefine.length; a < n; a++) t.addDefine(fr._meshVerticeDefine[a]);
                }
                this._owner._render._onMeshChange(e), this._sharedMesh = e;
            }
        }
        _getMeshDefine(e, t) {
            t.length = 0;
            for (var r = 0, a = e._subMeshes.length; r < a; r++) for (var n = e.getSubMesh(r)._vertexBuffer._vertexDeclaration._vertexElements, i = 0, s = n.length; i < s; i++) {
                switch (n[i]._elementUsage) {
                  case ie.MESH_COLOR0:
                    t.push(ne.SHADERDEFINE_COLOR);
                    break;

                  case ie.MESH_TEXTURECOORDINATE0:
                    t.push(ne.SHADERDEFINE_UV0);
                    break;

                  case ie.MESH_TEXTURECOORDINATE1:
                    t.push(ne.SHADERDEFINE_UV1);
                }
            }
        }
        destroy() {
            this._owner = null, this._sharedMesh && (this._sharedMesh._removeReference(), this._sharedMesh = null);
        }
    }
    fr._meshVerticeDefine = [];
    class Er extends It {
        constructor() {
            super(), this._bufferState = new G();
            var r = t.LayaGL.instance, a = ie.getVertexDeclaration("POSITION,NORMAL,COLOR,UV,UV1,TANGENT").vertexStride * Er.maxIndicesCount;
            this._vertices = new Float32Array(a / 4), this._vertexBuffer = new V(a, r.DYNAMIC_DRAW), 
            this._indices = new Int16Array(Er.maxIndicesCount), this._indexBuffer = new st(e.IndexFormat.UInt16, this._indices.length, r.DYNAMIC_DRAW);
            var n = this._vertexBuffer._byteLength + this._indexBuffer._byteLength;
            t.Resource._addMemory(n, n);
        }
        static __init__() {
            Er.instance = new Er();
        }
        _getBatchVertices(e, t, r, a, n) {
            var i = e.vertexStride / 4, s = n._vertexBuffer.getFloat32Data(), o = a._dynamicMultiSubMesh, l = a._dynamicVertexCount;
            a._computeWorldPositionsAndNormals(this._positionOffset, this._normalOffset, o, l);
            for (var h = a._dynamicWorldPositions, _ = a._dynamicWorldNormals, d = n._indices, c = 0; c < l; c++) {
                var u = (o ? d[c] : c) * i, m = (c + r) * i, f = 3 * c, E = m + this._positionOffset;
                t[E] = h[f], t[E + 1] = h[f + 1], t[E + 2] = h[f + 2], -1 !== this._normalOffset && (t[E = m + this._normalOffset] = _[f], 
                t[E + 1] = _[f + 1], t[E + 2] = _[f + 2]), -1 !== this._colorOffset && (E = m + this._colorOffset, 
                f = u + this._colorOffset, t[E] = s[f], t[E + 1] = s[f + 1], t[E + 2] = s[f + 2], 
                t[E + 3] = s[f + 3]), -1 !== this._uv0Offset && (E = m + this._uv0Offset, f = u + this._uv0Offset, 
                t[E] = s[f], t[E + 1] = s[f + 1]), -1 !== this._sTangentOffset && (E = m + this._sTangentOffset, 
                f = u + this._sTangentOffset, t[E] = s[f], t[E + 1] = s[f + 1], t[E + 2] = s[f + 2], 
                t[E + 3] = s[f + 3], E = m + this._sTangentOffset, f = u + this._sTangentOffset, 
                t[E] = s[f], t[E + 1] = s[f + 1], t[E + 2] = s[f + 2], t[E + 3] = s[f + 3]);
            }
        }
        _getBatchIndices(e, t, r, a, n, i) {
            var s, o, l, h = n._indices, _ = a._isFrontFaceInvert;
            if (i) if (_) for (s = 0, o = h.length; s < o; s += 3) {
                var d = r + s;
                e[l = t + s] = d, e[l + 1] = d + 2, e[l + 2] = d + 1;
            } else for (s = 0, o = h.length; s < o; s += 3) d = r + s, e[l = t + s] = d, e[l + 1] = d + 1, 
            e[l + 2] = d + 2; else if (_) for (s = 0, o = h.length; s < o; s += 3) e[l = t + s] = r + h[s], 
            e[l + 1] = r + h[s + 2], e[l + 2] = r + h[s + 1]; else for (s = 0, o = h.length; s < o; s += 3) e[l = t + s] = r + h[s], 
            e[l + 1] = r + h[s + 1], e[l + 2] = r + h[s + 2];
        }
        _flush(e, r) {
            var a = t.LayaGL.instance;
            this._vertexBuffer.setData(this._vertices.buffer, 0, 0, e * this._bufferState.vertexDeclaration.vertexStride), 
            this._indexBuffer.setData(this._indices, 0, 0, r), a.drawElements(a.TRIANGLES, r, a.UNSIGNED_SHORT, 0);
        }
        _prepareRender(e) {
            var t = e.renderElement.vertexBatchVertexDeclaration;
            this._bufferState = h.MeshRenderDynamicBatchManager.instance._getBufferState(t), 
            this._positionOffset = t.getVertexElementByUsage(ie.MESH_POSITION0)._offset / 4;
            var r = t.getVertexElementByUsage(ie.MESH_NORMAL0);
            this._normalOffset = r ? r._offset / 4 : -1;
            var a = t.getVertexElementByUsage(ie.MESH_COLOR0);
            this._colorOffset = a ? a._offset / 4 : -1;
            var n = t.getVertexElementByUsage(ie.MESH_TEXTURECOORDINATE0);
            this._uv0Offset = n ? n._offset / 4 : -1;
            var i = t.getVertexElementByUsage(ie.MESH_TEXTURECOORDINATE1);
            this._uv1Offset = i ? i._offset / 4 : -1;
            var s = t.getVertexElementByUsage(ie.MESH_TANGENT0);
            return this._sTangentOffset = s ? s._offset / 4 : -1, !0;
        }
        _render(e) {
            this._bufferState.bind();
            for (var r = e.renderElement, a = r.vertexBatchVertexDeclaration, n = r.vertexBatchElementList, i = 0, s = 0, o = 0, l = n.length, h = n.elements, _ = 0; _ < l; _++) {
                var d = h[_], c = d._geometry, u = c._indexCount;
                s + u > Er.maxIndicesCount && (this._flush(i, s), o++, t.Stat.trianglesFaces += s / 3, 
                i = s = 0);
                var m = d._transform;
                this._getBatchVertices(a, this._vertices, i, d, c), this._getBatchIndices(this._indices, s, i, m, c, d._dynamicMultiSubMesh), 
                i += d._dynamicVertexCount, s += u;
            }
            this._flush(i, s), o++, t.Stat.renderBatches += o, t.Stat.savedRenderBatches += l - o, 
            t.Stat.trianglesFaces += s / 3;
        }
    }
    Er.maxAllowVertexCount = 10, Er.maxAllowAttribueCount = 900, Er.maxIndicesCount = 32e3;
    class Tr extends qt {
        constructor() {
            super(), this._instanceBatchOpaqueMarks = [], this._vertexBatchOpaqueMarks = [], 
            this._cacheBufferStates = [], this._updateCountMark = 0;
        }
        getInstanceBatchOpaquaMark(e, t, r, a) {
            var n = this._instanceBatchOpaqueMarks[e ? 0 : 1] || (this._instanceBatchOpaqueMarks[e ? 0 : 1] = []), i = n[t] || (n[t] = []), s = i[r] || (i[r] = []);
            return s[a ? 1 : 0] || (s[a ? 1 : 0] = new yt());
        }
        getVertexBatchOpaquaMark(e, t, r, a) {
            var n = this._vertexBatchOpaqueMarks[e] || (this._vertexBatchOpaqueMarks[e] = []), i = n[t ? 0 : 1] || (n[t ? 0 : 1] = []), s = i[r] || (i[r] = []);
            return s[a] || (s[a] = new yt());
        }
        _getBufferState(e) {
            var t = this._cacheBufferStates[e.id];
            if (!t) {
                var r = Er.instance;
                (t = new G()).bind();
                var a = r._vertexBuffer;
                a.vertexDeclaration = e, t.applyVertexBuffer(a), t.applyIndexBuffer(r._indexBuffer), 
                t.unBind(), this._cacheBufferStates[e.id] = t;
            }
            return t;
        }
        _getBatchRenderElementFromPool() {
            var e = this._batchRenderElementPool[this._batchRenderElementPoolIndex++];
            return e || (e = new Nt(), this._batchRenderElementPool[this._batchRenderElementPoolIndex - 1] = e, 
            e.vertexBatchElementList = new ze(), e.instanceBatchElementList = new ze()), e;
        }
        _clear() {
            super._clear(), this._updateCountMark++;
        }
    }
    Tr.instance = new Tr();
    class pr extends Lt {
        constructor(e = null, t = null) {
            super(t), this._meshFilter = new fr(this), this._render = new mr(this), e && (this._meshFilter.sharedMesh = e);
        }
        static __init__() {
            ne.SHADERDEFINE_UV0 = Z.getDefineByName("UV"), ne.SHADERDEFINE_COLOR = Z.getDefineByName("COLOR"), 
            ne.SHADERDEFINE_UV1 = Z.getDefineByName("UV1"), ne.SHADERDEFINE_GPU_INSTANCE = Z.getDefineByName("GPU_INSTANCE"), 
            ne.SHADERDEFINE_SPECCUBE_BOX_PROJECTION = Z.getDefineByName("SPECCUBE_BOX_PROJECTION"), 
            Pt._registerManager(Vt.instance), qt._registerManager(Tr.instance);
        }
        get meshFilter() {
            return this._meshFilter;
        }
        get meshRenderer() {
            return this._render;
        }
        _parse(e, r) {
            super._parse(e, r);
            var a = this.meshRenderer, i = e.lightmapIndex;
            null != i && (a.lightmapIndex = i);
            var s = e.lightmapScaleOffset;
            s && (a.lightmapScaleOffset = new n(s[0], s[1], s[2], s[3])), null != e.meshPath && (this.meshFilter.sharedMesh = t.Loader.getRes(e.meshPath)), 
            null != e.enableRender && (a.enable = e.enableRender), null != e.receiveShadows && (a.receiveShadow = e.receiveShadows), 
            null != e.castShadow && (a.castShadow = e.castShadow);
            var o = e.materials;
            if (o) {
                var l = a.sharedMaterials, h = o.length;
                l.length = h;
                for (var _ = 0; _ < h; _++) l[_] = t.Loader.getRes(o[_].path);
                a.sharedMaterials = l;
            }
        }
        _addToInitStaticBatchManager() {
            this.meshFilter.sharedMesh && Vt.instance._addBatchSprite(this);
        }
        _cloneTo(e, t, r) {
            var a = e;
            a._meshFilter.sharedMesh = this._meshFilter.sharedMesh;
            var n = this._render, i = a._render;
            i.enable = n.enable, i.sharedMaterials = n.sharedMaterials, i.castShadow = n.castShadow;
            var s = n.lightmapScaleOffset;
            s && (i.lightmapScaleOffset = s.clone()), i.lightmapIndex = n.lightmapIndex, i.receiveShadow = n.receiveShadow, 
            i.sortingFudge = n.sortingFudge, super._cloneTo(e, t, r);
        }
        destroy(e = !0) {
            this.destroyed || (super.destroy(e), this._meshFilter.destroy());
        }
        _create() {
            return new pr();
        }
    }
    class gr {}
    gr.Blend = 0, gr.Fixed = 1;
    class Sr {
        constructor(e, t) {
            this._mode = 0, this._maxColorRGBKeysCount = 0, this._maxColorAlphaKeysCount = 0, 
            this._colorRGBKeysCount = 0, this._colorAlphaKeysCount = 0, this._alphaElements = null, 
            this._rgbElements = null, this._maxColorRGBKeysCount = e, this._maxColorAlphaKeysCount = t, 
            this._rgbElements = new Float32Array(4 * e), this._alphaElements = new Float32Array(2 * t);
        }
        get mode() {
            return this._mode;
        }
        set mode(e) {
            this._mode = e;
        }
        get colorRGBKeysCount() {
            return this._colorRGBKeysCount;
        }
        get colorAlphaKeysCount() {
            return this._colorAlphaKeysCount;
        }
        get maxColorRGBKeysCount() {
            return this._maxColorRGBKeysCount;
        }
        get maxColorAlphaKeysCount() {
            return this._maxColorAlphaKeysCount;
        }
        addColorRGB(e, t) {
            if (this._colorRGBKeysCount < this._maxColorRGBKeysCount) {
                var r = 4 * this._colorRGBKeysCount;
                this._rgbElements[r] = e, this._rgbElements[r + 1] = t.r, this._rgbElements[r + 2] = t.g, 
                this._rgbElements[r + 3] = t.b, this._colorRGBKeysCount++;
            } else console.warn("Gradient:warning:data count must lessEqual than " + this._maxColorRGBKeysCount);
        }
        addColorAlpha(e, t) {
            if (this._colorAlphaKeysCount < this._maxColorAlphaKeysCount) {
                var r = 2 * this._colorAlphaKeysCount;
                this._alphaElements[r] = e, this._alphaElements[r + 1] = t, this._colorAlphaKeysCount++;
            } else console.warn("Gradient:warning:data count must lessEqual than " + this._maxColorAlphaKeysCount);
        }
        updateColorRGB(e, t, r) {
            if (e < this._colorRGBKeysCount) {
                var a = 4 * e;
                this._rgbElements[a] = t, this._rgbElements[a + 1] = r.r, this._rgbElements[a + 2] = r.g, 
                this._rgbElements[a + 3] = r.b;
            } else console.warn("Gradient:warning:index must lessEqual than colorRGBKeysCount:" + this._colorRGBKeysCount);
        }
        updateColorAlpha(e, t, r) {
            if (e < this._colorAlphaKeysCount) {
                var a = 2 * e;
                this._alphaElements[a] = t, this._alphaElements[a + 1] = r;
            } else console.warn("Gradient:warning:index must lessEqual than colorAlphaKeysCount:" + this._colorAlphaKeysCount);
        }
        evaluateColorRGB(e, t, r = 0, a = !1) {
            e = Math.min(Math.max(e, 0), 1);
            var n = this._rgbElements, i = r;
            if (a) for (var s = i; s >= 0; s--) {
                var o = 4 * s;
                if (e === (u = n[o])) return t.r = n[o + 1], t.g = n[o + 2], t.b = n[o + 3], i;
                switch (this._mode) {
                  case gr.Blend:
                    if (e > u) {
                        if (e > (c = n[o + 4])) throw "Gradient:wrong startSearchIndex.";
                        var l = c - u, h = c - e, _ = e - u;
                        return t.r = (h * n[o + 1] + _ * n[o + 5]) / l, t.g = (h * n[o + 2] + _ * n[o + 6]) / l, 
                        t.b = (h * n[o + 3] + _ * n[o + 7]) / l, i;
                    }
                    i--;
                    continue;

                  case gr.Fixed:
                    if (e > u) {
                        if (e > n[o + 4]) throw "Gradient:wrong startSearchIndex.";
                        return t.r = n[o + 5], t.g = n[o + 6], t.b = n[o + 7], i;
                    }
                    i--;
                    continue;

                  default:
                    throw "Gradient:unknown mode.";
                }
            } else {
                s = 0;
                for (var d = this._rgbElements.length; s < d; s++) {
                    var c;
                    if (e === (c = n[o = 4 * s])) return t.r = n[o + 1], t.g = n[o + 2], t.b = n[o + 3], 
                    i;
                    switch (this._mode) {
                      case gr.Blend:
                        if (e < c) {
                            var u;
                            if (e < (u = n[o - 4])) throw "Gradient:wrong startSearchIndex.";
                            l = c - u, h = c - e, _ = e - u;
                            return t.r = (h * n[o - 3] + _ * n[o + 1]) / l, t.g = (h * n[o - 2] + _ * n[o + 2]) / l, 
                            t.b = (h * n[o - 1] + _ * n[o + 3]) / l, i;
                        }
                        i++;
                        continue;

                      case gr.Fixed:
                        if (e < c) {
                            if (e < n[o - 4]) throw "Gradient:wrong startSearchIndex.";
                            return t.r = n[o + 1], t.g = n[o + 2], t.b = n[o + 3], i;
                        }
                        i++;
                        continue;

                      default:
                        throw "Gradient:unknown mode.";
                    }
                }
            }
            return i;
        }
        evaluateColorAlpha(e, t, r = 0, a = !1) {
            e = Math.min(Math.max(e, 0), 1);
            var n = this._alphaElements, i = r;
            if (a) for (var s = i; s >= 0; s--) {
                if (e === (u = n[d = 2 * s])) return t.a = n[d + 1], i;
                switch (this._mode) {
                  case gr.Blend:
                    if (e > u) {
                        if (e > (c = n[d + 2])) throw "Gradient:wrong startSearchIndex.";
                        var o = c - u, l = c - e, h = e - u;
                        return t.a = (l * n[d + 1] + h * n[d + 3]) / o, i;
                    }
                    i--;
                    continue;

                  case gr.Fixed:
                    if (e > u) {
                        if (e > n[d + 2]) throw "Gradient:wrong startSearchIndex.";
                        return t.a = n[d + 3], i;
                    }
                    i--;
                    continue;

                  default:
                    throw "Gradient:unknown mode.";
                }
            } else {
                s = i;
                for (var _ = this._alphaElements.length; s < _; s++) {
                    var d, c;
                    if (e === (c = n[d = 2 * s])) return t.a = n[d + 1], i;
                    switch (this._mode) {
                      case gr.Blend:
                        if (e < c) {
                            var u;
                            if (e < (u = n[d - 2])) throw "Gradient:wrong startSearchIndex.";
                            o = c - u, l = c - e, h = e - u;
                            return t.a = (l * n[d - 1] + h * n[d + 1]) / o, i;
                        }
                        i++;
                        continue;

                      case gr.Fixed:
                        if (e < c) {
                            if (e < n[d - 2]) throw "Gradient:wrong startSearchIndex.";
                            return t.a = n[d + 1], i;
                        }
                        i++;
                        continue;

                      default:
                        throw "Gradient:unknown mode.";
                    }
                }
            }
            return i;
        }
        cloneTo(e) {
            var t, r, a = e;
            a._colorAlphaKeysCount = this._colorAlphaKeysCount;
            var n = a._alphaElements;
            for (t = 0, r = this._alphaElements.length; t < r; t++) n[t] = this._alphaElements[t];
            a._colorRGBKeysCount = this._colorRGBKeysCount;
            var i = a._rgbElements;
            for (t = 0, r = this._rgbElements.length; t < r; t++) i[t] = this._rgbElements[t];
        }
        clone() {
            var e = new Sr(this._maxColorRGBKeysCount, this._maxColorAlphaKeysCount);
            return this.cloneTo(e), e;
        }
    }
    class Rr {
        constructor(e, t, r) {
            this._time = e, this._minCount = t, this._maxCount = r;
        }
        get time() {
            return this._time;
        }
        get minCount() {
            return this._minCount;
        }
        get maxCount() {
            return this._maxCount;
        }
        cloneTo(e) {
            var t = e;
            t._time = this._time, t._minCount = this._minCount, t._maxCount = this._maxCount;
        }
        clone() {
            var e = new Rr(this._time, this._minCount, this._maxCount);
            return this.cloneTo(e), e;
        }
    }
    class vr {
        constructor() {
            this._type = 0, this._constant = null, this._constantMin = null, this._constantMax = null, 
            this._gradient = null, this._gradientMin = null, this._gradientMax = null;
        }
        static createByConstant(e) {
            var t = new vr();
            return t._type = 0, t._constant = e, t;
        }
        static createByGradient(e) {
            var t = new vr();
            return t._type = 1, t._gradient = e, t;
        }
        static createByRandomTwoConstant(e, t) {
            var r = new vr();
            return r._type = 2, r._constantMin = e, r._constantMax = t, r;
        }
        static createByRandomTwoGradient(e, t) {
            var r = new vr();
            return r._type = 3, r._gradientMin = e, r._gradientMax = t, r;
        }
        get type() {
            return this._type;
        }
        get constant() {
            return this._constant;
        }
        get constantMin() {
            return this._constantMin;
        }
        get constantMax() {
            return this._constantMax;
        }
        get gradient() {
            return this._gradient;
        }
        get gradientMin() {
            return this._gradientMin;
        }
        get gradientMax() {
            return this._gradientMax;
        }
        cloneTo(e) {
            var t = e;
            t._type = this._type, this._constant.cloneTo(t._constant), this._constantMin.cloneTo(t._constantMin), 
            this._constantMax.cloneTo(t._constantMax), this._gradient.cloneTo(t._gradient), 
            this._gradientMin.cloneTo(t._gradientMin), this._gradientMax.cloneTo(t._gradientMax);
        }
        clone() {
            var e = new vr();
            return this.cloneTo(e), e;
        }
    }
    class xr {
        constructor(e) {
            this._color = e;
        }
        get color() {
            return this._color;
        }
        cloneTo(e) {
            var t = e;
            this._color.cloneTo(t._color), t.enable = this.enable;
        }
        clone() {
            var e;
            switch (this._color.type) {
              case 0:
                e = vr.createByConstant(this._color.constant.clone());
                break;

              case 1:
                e = vr.createByGradient(this._color.gradient.clone());
                break;

              case 2:
                e = vr.createByRandomTwoConstant(this._color.constantMin.clone(), this._color.constantMax.clone());
                break;

              case 3:
                e = vr.createByRandomTwoGradient(this._color.gradientMin.clone(), this._color.gradientMax.clone());
            }
            var t = new xr(e);
            return t.enable = this.enable, t;
        }
    }
    class Ar {
        constructor() {
            this._type = 0, this._constant = 0, this._overTime = null, this._constantMin = 0, 
            this._constantMax = 0, this._overTimeMin = null, this._overTimeMax = null;
        }
        static createByConstant(e = 0) {
            var t = new Ar();
            return t._type = 0, t._constant = e, t;
        }
        static createByOverTime(e) {
            var t = new Ar();
            return t._type = 1, t._overTime = e, t;
        }
        static createByRandomTwoConstant(e = 0, t = 0) {
            var r = new Ar();
            return r._type = 2, r._constantMin = e, r._constantMax = t, r;
        }
        static createByRandomTwoOverTime(e, t) {
            var r = new Ar();
            return r._type = 3, r._overTimeMin = e, r._overTimeMax = t, r;
        }
        get type() {
            return this._type;
        }
        get constant() {
            return this._constant;
        }
        get frameOverTimeData() {
            return this._overTime;
        }
        get constantMin() {
            return this._constantMin;
        }
        get constantMax() {
            return this._constantMax;
        }
        get frameOverTimeDataMin() {
            return this._overTimeMin;
        }
        get frameOverTimeDataMax() {
            return this._overTimeMax;
        }
        cloneTo(e) {
            var t = e;
            t._type = this._type, t._constant = this._constant, this._overTime && this._overTime.cloneTo(t._overTime), 
            t._constantMin = this._constantMin, t._constantMax = this._constantMax, this._overTimeMin && this._overTimeMin.cloneTo(t._overTimeMin), 
            this._overTimeMax && this._overTimeMax.cloneTo(t._overTimeMax);
        }
        clone() {
            var e = new Ar();
            return this.cloneTo(e), e;
        }
    }
    class Ir {
        constructor() {
            this._type = 0, this._separateAxes = !1, this._constant = 0, this._constantSeparate = null, 
            this._gradient = null, this._gradientX = null, this._gradientY = null, this._gradientZ = null, 
            this._gradientW = null, this._constantMin = 0, this._constantMax = 0, this._constantMinSeparate = null, 
            this._constantMaxSeparate = null, this._gradientMin = null, this._gradientMax = null, 
            this._gradientXMin = null, this._gradientXMax = null, this._gradientYMin = null, 
            this._gradientYMax = null, this._gradientZMin = null, this._gradientZMax = null, 
            this._gradientWMin = null, this._gradientWMax = null;
        }
        static createByConstant(e) {
            var t = new Ir();
            return t._type = 0, t._separateAxes = !1, t._constant = e, t;
        }
        static createByConstantSeparate(e) {
            var t = new Ir();
            return t._type = 0, t._separateAxes = !0, t._constantSeparate = e, t;
        }
        static createByGradient(e) {
            var t = new Ir();
            return t._type = 1, t._separateAxes = !1, t._gradient = e, t;
        }
        static createByGradientSeparate(e, t, r) {
            var a = new Ir();
            return a._type = 1, a._separateAxes = !0, a._gradientX = e, a._gradientY = t, a._gradientZ = r, 
            a;
        }
        static createByRandomTwoConstant(e, t) {
            var r = new Ir();
            return r._type = 2, r._separateAxes = !1, r._constantMin = e, r._constantMax = t, 
            r;
        }
        static createByRandomTwoConstantSeparate(e, t) {
            var r = new Ir();
            return r._type = 2, r._separateAxes = !0, r._constantMinSeparate = e, r._constantMaxSeparate = t, 
            r;
        }
        static createByRandomTwoGradient(e, t) {
            var r = new Ir();
            return r._type = 3, r._separateAxes = !1, r._gradientMin = e, r._gradientMax = t, 
            r;
        }
        static createByRandomTwoGradientSeparate(e, t, r, a, n, i, s, o) {
            var l = new Ir();
            return l._type = 3, l._separateAxes = !0, l._gradientXMin = e, l._gradientXMax = t, 
            l._gradientYMin = r, l._gradientYMax = a, l._gradientZMin = n, l._gradientZMax = i, 
            l._gradientWMin = s, l._gradientWMax = o, l;
        }
        get type() {
            return this._type;
        }
        get separateAxes() {
            return this._separateAxes;
        }
        get constant() {
            return this._constant;
        }
        get constantSeparate() {
            return this._constantSeparate;
        }
        get gradient() {
            return this._gradient;
        }
        get gradientX() {
            return this._gradientX;
        }
        get gradientY() {
            return this._gradientY;
        }
        get gradientZ() {
            return this._gradientZ;
        }
        get gradientW() {
            return this._gradientW;
        }
        get constantMin() {
            return this._constantMin;
        }
        get constantMax() {
            return this._constantMax;
        }
        get constantMinSeparate() {
            return this._constantMinSeparate;
        }
        get constantMaxSeparate() {
            return this._constantMaxSeparate;
        }
        get gradientMin() {
            return this._gradientMin;
        }
        get gradientMax() {
            return this._gradientMax;
        }
        get gradientXMin() {
            return this._gradientXMin;
        }
        get gradientXMax() {
            return this._gradientXMax;
        }
        get gradientYMin() {
            return this._gradientYMin;
        }
        get gradientYMax() {
            return this._gradientYMax;
        }
        get gradientZMin() {
            return this._gradientZMin;
        }
        get gradientZMax() {
            return this._gradientZMax;
        }
        get gradientWMin() {
            return this._gradientWMin;
        }
        get gradientWMax() {
            return this._gradientWMax;
        }
        cloneTo(e) {
            var t = e;
            t._type = this._type, t._separateAxes = this._separateAxes, t._constant = this._constant, 
            this._constantSeparate.cloneTo(t._constantSeparate), this._gradient.cloneTo(t._gradient), 
            this._gradientX.cloneTo(t._gradientX), this._gradientY.cloneTo(t._gradientY), this._gradientZ.cloneTo(t._gradientZ), 
            t._constantMin = this._constantMin, t._constantMax = this._constantMax, this._constantMinSeparate.cloneTo(t._constantMinSeparate), 
            this._constantMaxSeparate.cloneTo(t._constantMaxSeparate), this._gradientMin.cloneTo(t._gradientMin), 
            this._gradientMax.cloneTo(t._gradientMax), this._gradientXMin.cloneTo(t._gradientXMin), 
            this._gradientXMax.cloneTo(t._gradientXMax), this._gradientYMin.cloneTo(t._gradientYMin), 
            this._gradientYMax.cloneTo(t._gradientYMax), this._gradientZMin.cloneTo(t._gradientZMin), 
            this._gradientZMax.cloneTo(t._gradientZMax);
        }
        clone() {
            var e = new Ir();
            return this.cloneTo(e), e;
        }
    }
    class Mr {
        constructor() {
            this._currentLength = 0, this._elements = new Float32Array(8);
        }
        get gradientCount() {
            return this._currentLength / 2;
        }
        add(e, t) {
            this._currentLength < 8 ? (6 === this._currentLength && 1 !== e && (e = 1, console.log("Warning:the forth key is  be force set to 1.")), 
            this._elements[this._currentLength++] = e, this._elements[this._currentLength++] = t) : console.log("Warning:data count must lessEqual than 4");
        }
        cloneTo(e) {
            var t = e;
            t._currentLength = this._currentLength;
            for (var r = t._elements, a = 0, n = this._elements.length; a < n; a++) r[a] = this._elements[a];
        }
        clone() {
            var e = new Mr();
            return this.cloneTo(e), e;
        }
    }
    class Dr {
        constructor() {
            this._currentLength = 0, this._elements = new Float32Array(8);
        }
        get gradientCount() {
            return this._currentLength / 2;
        }
        add(e, t) {
            this._currentLength < 8 ? (6 === this._currentLength && 1 !== e && (e = 1, console.log("GradientDataNumber warning:the forth key is  be force set to 1.")), 
            this._elements[this._currentLength++] = e, this._elements[this._currentLength++] = t) : console.log("GradientDataNumber warning:data count must lessEqual than 4");
        }
        getKeyByIndex(e) {
            return this._elements[2 * e];
        }
        getValueByIndex(e) {
            return this._elements[2 * e + 1];
        }
        getAverageValue() {
            for (var e = 0, t = 0, r = 0, a = this._currentLength - 2; r < a; r += 2) {
                var n = this._elements[r + 1];
                n += this._elements[r + 3], e += n *= this._elements[r + 2] - this._elements[r], 
                t++;
            }
            return e / t;
        }
        cloneTo(e) {
            var t = e;
            t._currentLength = this._currentLength;
            for (var r = t._elements, a = 0, n = this._elements.length; a < n; a++) r[a] = this._elements[a];
        }
        clone() {
            var e = new Dr();
            return this.cloneTo(e), e;
        }
    }
    class Lr {
        constructor() {
            this._type = 0, this._separateAxes = !1, this._gradient = null, this._gradientX = null, 
            this._gradientY = null, this._gradientZ = null, this._constantMin = 0, this._constantMax = 0, 
            this._constantMinSeparate = null, this._constantMaxSeparate = null, this._gradientMin = null, 
            this._gradientMax = null, this._gradientXMin = null, this._gradientXMax = null, 
            this._gradientYMin = null, this._gradientYMax = null, this._gradientZMin = null, 
            this._gradientZMax = null;
        }
        static createByGradient(e) {
            var t = new Lr();
            return t._type = 0, t._separateAxes = !1, t._gradient = e, t;
        }
        static createByGradientSeparate(e, t, r) {
            var a = new Lr();
            return a._type = 0, a._separateAxes = !0, a._gradientX = e, a._gradientY = t, a._gradientZ = r, 
            a;
        }
        static createByRandomTwoConstant(e, t) {
            var r = new Lr();
            return r._type = 1, r._separateAxes = !1, r._constantMin = e, r._constantMax = t, 
            r;
        }
        static createByRandomTwoConstantSeparate(e, t) {
            var r = new Lr();
            return r._type = 1, r._separateAxes = !0, r._constantMinSeparate = e, r._constantMaxSeparate = t, 
            r;
        }
        static createByRandomTwoGradient(e, t) {
            var r = new Lr();
            return r._type = 2, r._separateAxes = !1, r._gradientMin = e, r._gradientMax = t, 
            r;
        }
        static createByRandomTwoGradientSeparate(e, t, r, a, n, i) {
            var s = new Lr();
            return s._type = 2, s._separateAxes = !0, s._gradientXMin = e, s._gradientXMax = t, 
            s._gradientYMin = r, s._gradientYMax = a, s._gradientZMin = n, s._gradientZMax = i, 
            s;
        }
        get type() {
            return this._type;
        }
        get separateAxes() {
            return this._separateAxes;
        }
        get gradient() {
            return this._gradient;
        }
        get gradientX() {
            return this._gradientX;
        }
        get gradientY() {
            return this._gradientY;
        }
        get gradientZ() {
            return this._gradientZ;
        }
        get constantMin() {
            return this._constantMin;
        }
        get constantMax() {
            return this._constantMax;
        }
        get constantMinSeparate() {
            return this._constantMinSeparate;
        }
        get constantMaxSeparate() {
            return this._constantMaxSeparate;
        }
        get gradientMin() {
            return this._gradientMin;
        }
        get gradientMax() {
            return this._gradientMax;
        }
        get gradientXMin() {
            return this._gradientXMin;
        }
        get gradientXMax() {
            return this._gradientXMax;
        }
        get gradientYMin() {
            return this._gradientYMin;
        }
        get gradientYMax() {
            return this._gradientYMax;
        }
        get gradientZMin() {
            return this._gradientZMin;
        }
        get gradientZMax() {
            return this._gradientZMax;
        }
        getMaxSizeInGradient(e = !1) {
            var t, r, a = -Number.MAX_VALUE;
            switch (this._type) {
              case 0:
                if (this._separateAxes) {
                    for (t = 0, r = this._gradientX.gradientCount; t < r; t++) a = Math.max(a, this._gradientX.getValueByIndex(t));
                    for (t = 0, r = this._gradientY.gradientCount; t < r; t++) a = Math.max(a, this._gradientY.getValueByIndex(t));
                    if (e) for (t = 0, r = this._gradientZ.gradientCount; t < r; t++) a = Math.max(a, this._gradientZ.getValueByIndex(t));
                } else for (t = 0, r = this._gradient.gradientCount; t < r; t++) a = Math.max(a, this._gradient.getValueByIndex(t));
                break;

              case 1:
                this._separateAxes ? (a = Math.max(this._constantMinSeparate.x, this._constantMaxSeparate.x), 
                a = Math.max(a, this._constantMinSeparate.y), e && (a = a = Math.max(a, this._constantMaxSeparate.z))) : a = Math.max(this._constantMin, this._constantMax);
                break;

              case 2:
                if (this._separateAxes) {
                    for (t = 0, r = this._gradientXMin.gradientCount; t < r; t++) a = Math.max(a, this._gradientXMin.getValueByIndex(t));
                    for (t = 0, r = this._gradientXMax.gradientCount; t < r; t++) a = Math.max(a, this._gradientXMax.getValueByIndex(t));
                    for (t = 0, r = this._gradientYMin.gradientCount; t < r; t++) a = Math.max(a, this._gradientYMin.getValueByIndex(t));
                    for (t = 0, r = this._gradientZMax.gradientCount; t < r; t++) a = Math.max(a, this._gradientZMax.getValueByIndex(t));
                    if (e) {
                        for (t = 0, r = this._gradientZMin.gradientCount; t < r; t++) a = Math.max(a, this._gradientZMin.getValueByIndex(t));
                        for (t = 0, r = this._gradientZMax.gradientCount; t < r; t++) a = Math.max(a, this._gradientZMax.getValueByIndex(t));
                    }
                } else {
                    for (t = 0, r = this._gradientMin.gradientCount; t < r; t++) a = Math.max(a, this._gradientMin.getValueByIndex(t));
                    for (t = 0, r = this._gradientMax.gradientCount; t < r; t++) a = Math.max(a, this._gradientMax.getValueByIndex(t));
                }
            }
            return a;
        }
        cloneTo(e) {
            var t = e;
            t._type = this._type, t._separateAxes = this._separateAxes, this._gradient.cloneTo(t._gradient), 
            this._gradientX.cloneTo(t._gradientX), this._gradientY.cloneTo(t._gradientY), this._gradientZ.cloneTo(t._gradientZ), 
            t._constantMin = this._constantMin, t._constantMax = this._constantMax, this._constantMinSeparate.cloneTo(t._constantMinSeparate), 
            this._constantMaxSeparate.cloneTo(t._constantMaxSeparate), this._gradientMin.cloneTo(t._gradientMin), 
            this._gradientMax.cloneTo(t._gradientMax), this._gradientXMin.cloneTo(t._gradientXMin), 
            this._gradientXMax.cloneTo(t._gradientXMax), this._gradientYMin.cloneTo(t._gradientYMin), 
            this._gradientYMax.cloneTo(t._gradientYMax), this._gradientZMin.cloneTo(t._gradientZMin), 
            this._gradientZMax.cloneTo(t._gradientZMax);
        }
        clone() {
            var e = new Lr();
            return this.cloneTo(e), e;
        }
    }
    class yr {
        constructor() {
            this._type = 0, this._constant = null, this._gradientX = null, this._gradientY = null, 
            this._gradientZ = null, this._constantMin = null, this._constantMax = null, this._gradientXMin = null, 
            this._gradientXMax = null, this._gradientYMin = null, this._gradientYMax = null, 
            this._gradientZMin = null, this._gradientZMax = null;
        }
        static createByConstant(e) {
            var t = new yr();
            return t._type = 0, t._constant = e, t;
        }
        static createByGradient(e, t, r) {
            var a = new yr();
            return a._type = 1, a._gradientX = e, a._gradientY = t, a._gradientZ = r, a;
        }
        static createByRandomTwoConstant(e, t) {
            var r = new yr();
            return r._type = 2, r._constantMin = e, r._constantMax = t, r;
        }
        static createByRandomTwoGradient(e, t, r, a, n, i) {
            var s = new yr();
            return s._type = 3, s._gradientXMin = e, s._gradientXMax = t, s._gradientYMin = r, 
            s._gradientYMax = a, s._gradientZMin = n, s._gradientZMax = i, s;
        }
        get type() {
            return this._type;
        }
        get constant() {
            return this._constant;
        }
        get gradientX() {
            return this._gradientX;
        }
        get gradientY() {
            return this._gradientY;
        }
        get gradientZ() {
            return this._gradientZ;
        }
        get constantMin() {
            return this._constantMin;
        }
        get constantMax() {
            return this._constantMax;
        }
        get gradientXMin() {
            return this._gradientXMin;
        }
        get gradientXMax() {
            return this._gradientXMax;
        }
        get gradientYMin() {
            return this._gradientYMin;
        }
        get gradientYMax() {
            return this._gradientYMax;
        }
        get gradientZMin() {
            return this._gradientZMin;
        }
        get gradientZMax() {
            return this._gradientZMax;
        }
        cloneTo(e) {
            var t = e;
            t._type = this._type, this._constant.cloneTo(t._constant), this._gradientX.cloneTo(t._gradientX), 
            this._gradientY.cloneTo(t._gradientY), this._gradientZ.cloneTo(t._gradientZ), this._constantMin.cloneTo(t._constantMin), 
            this._constantMax.cloneTo(t._constantMax), this._gradientXMin.cloneTo(t._gradientXMin), 
            this._gradientXMax.cloneTo(t._gradientXMax), this._gradientYMin.cloneTo(t._gradientYMin), 
            this._gradientYMax.cloneTo(t._gradientYMax), this._gradientZMin.cloneTo(t._gradientZMin), 
            this._gradientZMax.cloneTo(t._gradientZMax);
        }
        clone() {
            var e = new yr();
            return this.cloneTo(e), e;
        }
    }
    class Cr {
        constructor(e) {
            this._angularVelocity = e;
        }
        get angularVelocity() {
            return this._angularVelocity;
        }
        cloneTo(e) {
            var t = e;
            this._angularVelocity.cloneTo(t._angularVelocity), t.enable = this.enable;
        }
        clone() {
            var e;
            switch (this._angularVelocity.type) {
              case 0:
                e = this._angularVelocity.separateAxes ? Ir.createByConstantSeparate(this._angularVelocity.constantSeparate.clone()) : Ir.createByConstant(this._angularVelocity.constant);
                break;

              case 1:
                e = this._angularVelocity.separateAxes ? Ir.createByGradientSeparate(this._angularVelocity.gradientX.clone(), this._angularVelocity.gradientY.clone(), this._angularVelocity.gradientZ.clone()) : Ir.createByGradient(this._angularVelocity.gradient.clone());
                break;

              case 2:
                e = this._angularVelocity.separateAxes ? Ir.createByRandomTwoConstantSeparate(this._angularVelocity.constantMinSeparate.clone(), this._angularVelocity.constantMaxSeparate.clone()) : Ir.createByRandomTwoConstant(this._angularVelocity.constantMin, this._angularVelocity.constantMax);
                break;

              case 3:
                e = this._angularVelocity.separateAxes ? Ir.createByRandomTwoGradientSeparate(this._angularVelocity.gradientXMin.clone(), this._angularVelocity.gradientYMin.clone(), this._angularVelocity.gradientZMin.clone(), this._angularVelocity.gradientWMin.clone(), this._angularVelocity.gradientXMax.clone(), this._angularVelocity.gradientYMax.clone(), this._angularVelocity.gradientZMax.clone(), this._angularVelocity.gradientWMax.clone()) : Ir.createByRandomTwoGradient(this._angularVelocity.gradientMin.clone(), this._angularVelocity.gradientMax.clone());
            }
            var t = new Cr(e);
            return t.enable = this.enable, t;
        }
    }
    (ar = e.ParticleSystemShapeType || (e.ParticleSystemShapeType = {}))[ar.Box = 0] = "Box", 
    ar[ar.Circle = 1] = "Circle", ar[ar.Cone = 2] = "Cone", ar[ar.Hemisphere = 3] = "Hemisphere", 
    ar[ar.Sphere = 4] = "Sphere";
    class Or {
        constructor() {
            this.enable = !0, this.randomDirection = 0;
        }
        _getShapeBoundBox(e) {
            throw new Error("BaseShape: must override it.");
        }
        _getSpeedBoundBox(e) {
            throw new Error("BaseShape: must override it.");
        }
        generatePositionAndDirection(e, t, r = null, a = null) {
            throw new Error("BaseShape: must override it.");
        }
        _calculateProceduralBounds(e, t, r) {
            this._getShapeBoundBox(e);
            var a = e.min, n = e.max;
            i.multiply(a, t, a), i.multiply(n, t, n);
            var s = new xt(new i(), new i());
            this.randomDirection ? (s.min = new i(-1, -1, -1), s.max = new i(1, 1, 1)) : this._getSpeedBoundBox(s);
            var o = new xt(new i(), new i()), l = o.min, h = o.max;
            i.scale(s.min, r.y, l), i.scale(s.max, r.y, h), i.add(e.min, l, l), i.add(e.max, h, h), 
            i.min(e.min, l, e.min), i.max(e.max, l, e.max);
            var _ = new xt(new i(), new i()), d = _.min, c = _.max;
            i.scale(s.min, r.x, d), i.scale(s.max, r.x, c), i.min(_.min, c, l), i.max(_.min, c, h), 
            i.min(e.min, l, e.min), i.max(e.max, l, e.max);
        }
        cloneTo(e) {
            e.enable = this.enable;
        }
        clone() {
            var e = new Or();
            return this.cloneTo(e), e;
        }
    }
    class Nr {
        static _randomPointUnitArcCircle(e, t, r = null) {
            var a;
            a = r ? r.getFloat() * e : Math.random() * e, t.x = Math.cos(a), t.y = Math.sin(a);
        }
        static _randomPointInsideUnitArcCircle(e, t, r = null) {
            var a;
            Nr._randomPointUnitArcCircle(e, t, r), a = r ? Math.pow(r.getFloat(), .5) : Math.pow(Math.random(), .5), 
            t.x = t.x * a, t.y = t.y * a;
        }
        static _randomPointUnitCircle(e, t = null) {
            var r;
            r = t ? t.getFloat() * Math.PI * 2 : Math.random() * Math.PI * 2, e.x = Math.cos(r), 
            e.y = Math.sin(r);
        }
        static _randomPointInsideUnitCircle(e, t = null) {
            var r;
            Nr._randomPointUnitCircle(e), r = t ? Math.pow(t.getFloat(), .5) : Math.pow(Math.random(), .5), 
            e.x = e.x * r, e.y = e.y * r;
        }
        static _randomPointUnitSphere(e, t = null) {
            var r, a;
            t ? (r = e.z = 2 * t.getFloat() - 1, a = t.getFloat() * Math.PI * 2) : (r = e.z = 2 * Math.random() - 1, 
            a = Math.random() * Math.PI * 2);
            var n = Math.sqrt(1 - r * r);
            e.x = n * Math.cos(a), e.y = n * Math.sin(a);
        }
        static _randomPointInsideUnitSphere(e, t = null) {
            var r;
            Nr._randomPointUnitSphere(e), r = t ? Math.pow(t.getFloat(), 1 / 3) : Math.pow(Math.random(), 1 / 3), 
            e.x = e.x * r, e.y = e.y * r, e.z = e.z * r;
        }
        static _randomPointInsideHalfUnitBox(e, t = null) {
            t ? (e.x = t.getFloat() - .5, e.y = t.getFloat() - .5, e.z = t.getFloat() - .5) : (e.x = Math.random() - .5, 
            e.y = Math.random() - .5, e.z = Math.random() - .5);
        }
        constructor() {}
    }
    class Pr extends Or {
        constructor() {
            super(), this.shapeType = e.ParticleSystemShapeType.Box, this.x = 1, this.y = 1, 
            this.z = 1;
        }
        _getShapeBoundBox(e) {
            var t = e.min;
            t.x = .5 * -this.x, t.y = .5 * -this.y, t.z = .5 * -this.z;
            var r = e.max;
            r.x = .5 * this.x, r.y = .5 * this.y, r.z = .5 * this.z;
        }
        _getSpeedBoundBox(e) {
            var t = e.min;
            t.x = 0, t.y = 0, t.z = 0;
            var r = e.max;
            r.x = 0, r.y = 1, r.z = 0;
        }
        generatePositionAndDirection(e, t, r = null, a = null) {
            r ? (r.seed = a[16], Nr._randomPointInsideHalfUnitBox(e, r), a[16] = r.seed) : Nr._randomPointInsideHalfUnitBox(e), 
            e.x = this.x * e.x, e.y = this.y * e.y, e.z = this.z * e.z, this.randomDirection ? r ? (r.seed = a[17], 
            Nr._randomPointUnitSphere(t, r), a[17] = r.seed) : Nr._randomPointUnitSphere(t) : (t.x = 0, 
            t.y = 0, t.z = 1);
        }
        cloneTo(e) {
            super.cloneTo(e);
            var t = e;
            t.x = this.x, t.y = this.y, t.z = this.z, t.randomDirection = this.randomDirection;
        }
        clone() {
            var e = new Pr();
            return this.cloneTo(e), e;
        }
    }
    class wr extends Or {
        constructor() {
            super(), this.shapeType = e.ParticleSystemShapeType.Circle, this.radius = 1, this.arc = 2 * Math.PI, 
            this.emitFromEdge = !1;
        }
        _getShapeBoundBox(e) {
            var t = e.min;
            t.x = t.z = -this.radius, t.y = 0;
            var r = e.max;
            r.x = r.z = this.radius, r.y = 0;
        }
        _getSpeedBoundBox(e) {
            var t = e.min;
            t.x = t.y = -1, t.z = 0;
            var r = e.max;
            r.x = r.y = 1, r.z = 0;
        }
        generatePositionAndDirection(e, t, r = null, a = null) {
            var n = wr._tempPositionPoint;
            r ? (r.seed = a[16], this.emitFromEdge ? Nr._randomPointUnitArcCircle(this.arc, wr._tempPositionPoint, r) : Nr._randomPointInsideUnitArcCircle(this.arc, wr._tempPositionPoint, r), 
            a[16] = r.seed) : this.emitFromEdge ? Nr._randomPointUnitArcCircle(this.arc, wr._tempPositionPoint) : Nr._randomPointInsideUnitArcCircle(this.arc, wr._tempPositionPoint), 
            e.x = -n.x, e.y = n.y, e.z = 0, i.scale(e, this.radius, e), this.randomDirection ? r ? (r.seed = a[17], 
            Nr._randomPointUnitSphere(t, r), a[17] = r.seed) : Nr._randomPointUnitSphere(t) : e.cloneTo(t);
        }
        cloneTo(e) {
            super.cloneTo(e);
            var t = e;
            t.radius = this.radius, t.arc = this.arc, t.emitFromEdge = this.emitFromEdge, t.randomDirection = this.randomDirection;
        }
        clone() {
            var e = new wr();
            return this.cloneTo(e), e;
        }
    }
    wr._tempPositionPoint = new a();
    class Vr extends Or {
        constructor() {
            super(), this.shapeType = e.ParticleSystemShapeType.Cone, this.angle = 25 / 180 * Math.PI, 
            this.radius = 1, this.length = 5, this.emitType = 0;
        }
        _getShapeBoundBox(e) {
            const t = this.radius + this.length * Math.sin(this.angle), r = this.length * Math.cos(this.angle);
            var a = e.min;
            a.x = a.y = -t, a.z = 0;
            var n = e.max;
            n.x = n.y = t, n.z = r;
        }
        _getSpeedBoundBox(e) {
            const t = Math.sin(this.angle);
            var r = e.min;
            r.x = r.y = -t, r.z = 0;
            var a = e.max;
            a.x = a.y = t, a.z = 1;
        }
        generatePositionAndDirection(e, t, r = null, a = null) {
            var n, s, o, l = Vr._tempPositionPoint, h = Math.cos(this.angle), _ = Math.sin(this.angle);
            switch (this.emitType) {
              case 0:
                r ? (r.seed = a[16], Nr._randomPointInsideUnitCircle(Vr._tempPositionPoint, r), 
                a[16] = r.seed) : Nr._randomPointInsideUnitCircle(Vr._tempPositionPoint), n = l.x, 
                s = l.y, e.x = n * this.radius, e.y = s * this.radius, e.z = 0, this.randomDirection ? (r ? (r.seed = a[17], 
                Nr._randomPointInsideUnitCircle(Vr._tempDirectionPoint, r), a[17] = r.seed) : Nr._randomPointInsideUnitCircle(Vr._tempDirectionPoint), 
                o = Vr._tempDirectionPoint, t.x = o.x * _, t.y = o.y * _) : (t.x = n * _, t.y = s * _), 
                t.z = h;
                break;

              case 1:
                r ? (r.seed = a[16], Nr._randomPointUnitCircle(Vr._tempPositionPoint, r), a[16] = r.seed) : Nr._randomPointUnitCircle(Vr._tempPositionPoint), 
                n = l.x, s = l.y, e.x = n * this.radius, e.y = s * this.radius, e.z = 0, this.randomDirection ? (r ? (r.seed = a[17], 
                Nr._randomPointInsideUnitCircle(Vr._tempDirectionPoint, r), a[17] = r.seed) : Nr._randomPointInsideUnitCircle(Vr._tempDirectionPoint), 
                o = Vr._tempDirectionPoint, t.x = o.x * _, t.y = o.y * _) : (t.x = n * _, t.y = s * _), 
                t.z = h;
                break;

              case 2:
                r ? (r.seed = a[16], Nr._randomPointInsideUnitCircle(Vr._tempPositionPoint, r)) : Nr._randomPointInsideUnitCircle(Vr._tempPositionPoint), 
                n = l.x, s = l.y, e.x = n * this.radius, e.y = s * this.radius, e.z = 0, t.x = n * _, 
                t.y = s * _, t.z = h, i.normalize(t, t), r ? (i.scale(t, this.length * r.getFloat(), t), 
                a[16] = r.seed) : i.scale(t, this.length * Math.random(), t), i.add(e, t, e), this.randomDirection && (r ? (r.seed = a[17], 
                Nr._randomPointUnitSphere(t, r), a[17] = r.seed) : Nr._randomPointUnitSphere(t));
                break;

              case 3:
                r ? (r.seed = a[16], Nr._randomPointUnitCircle(Vr._tempPositionPoint, r)) : Nr._randomPointUnitCircle(Vr._tempPositionPoint), 
                n = l.x, s = l.y, e.x = n * this.radius, e.y = s * this.radius, e.z = 0, t.x = n * _, 
                t.y = s * _, t.z = h, i.normalize(t, t), r ? (i.scale(t, this.length * r.getFloat(), t), 
                a[16] = r.seed) : i.scale(t, this.length * Math.random(), t), i.add(e, t, e), this.randomDirection && (r ? (r.seed = a[17], 
                Nr._randomPointUnitSphere(t, r), a[17] = r.seed) : Nr._randomPointUnitSphere(t));
                break;

              default:
                throw new Error("ConeShape:emitType is invalid.");
            }
        }
        cloneTo(e) {
            super.cloneTo(e);
            var t = e;
            t.angle = this.angle, t.radius = this.radius, t.length = this.length, t.emitType = this.emitType, 
            t.randomDirection = this.randomDirection;
        }
        clone() {
            var e = new Vr();
            return this.cloneTo(e), e;
        }
    }
    Vr._tempPositionPoint = new a(), Vr._tempDirectionPoint = new a();
    class Br extends Or {
        constructor() {
            super(), this.shapeType = e.ParticleSystemShapeType.Hemisphere, this.radius = 1, 
            this.emitFromShell = !1;
        }
        _getShapeBoundBox(e) {
            var t = e.min;
            t.x = t.y = t.z = -this.radius;
            var r = e.max;
            r.x = r.y = this.radius, r.z = 0;
        }
        _getSpeedBoundBox(e) {
            var t = e.min;
            t.x = t.y = -1, t.z = 0;
            var r = e.max;
            r.x = r.y = r.z = 1;
        }
        generatePositionAndDirection(e, t, r = null, a = null) {
            r ? (r.seed = a[16], this.emitFromShell ? Nr._randomPointUnitSphere(e, r) : Nr._randomPointInsideUnitSphere(e, r), 
            a[16] = r.seed) : this.emitFromShell ? Nr._randomPointUnitSphere(e) : Nr._randomPointInsideUnitSphere(e), 
            i.scale(e, this.radius, e);
            var n = e.z;
            n < 0 && (e.z = -1 * n), this.randomDirection ? r ? (r.seed = a[17], Nr._randomPointUnitSphere(t, r), 
            a[17] = r.seed) : Nr._randomPointUnitSphere(t) : e.cloneTo(t);
        }
        cloneTo(e) {
            super.cloneTo(e);
            var t = e;
            t.radius = this.radius, t.emitFromShell = this.emitFromShell, t.randomDirection = this.randomDirection;
        }
        clone() {
            var e = new Br();
            return this.cloneTo(e), e;
        }
    }
    class br extends Or {
        constructor() {
            super(), this.shapeType = e.ParticleSystemShapeType.Sphere, this.radius = 1, this.emitFromShell = !1;
        }
        _getShapeBoundBox(e) {
            var t = e.min;
            t.x = t.y = t.z = -this.radius;
            var r = e.max;
            r.x = r.y = r.z = this.radius;
        }
        _getSpeedBoundBox(e) {
            var t = e.min;
            t.x = t.y = t.z = -1;
            var r = e.max;
            r.x = r.y = r.z = 1;
        }
        generatePositionAndDirection(e, t, r = null, a = null) {
            r ? (r.seed = a[16], this.emitFromShell ? Nr._randomPointUnitSphere(e, r) : Nr._randomPointInsideUnitSphere(e, r), 
            a[16] = r.seed) : this.emitFromShell ? Nr._randomPointUnitSphere(e) : Nr._randomPointInsideUnitSphere(e), 
            i.scale(e, this.radius, e), this.randomDirection ? r ? (r.seed = a[17], Nr._randomPointUnitSphere(t, r), 
            a[17] = r.seed) : Nr._randomPointUnitSphere(t) : e.cloneTo(t);
        }
        cloneTo(e) {
            super.cloneTo(e);
            var t = e;
            t.radius = this.radius, t.emitFromShell = this.emitFromShell, t.randomDirection = this.randomDirection;
        }
        clone() {
            var e = new br();
            return this.cloneTo(e), e;
        }
    }
    class Fr {
        constructor(e) {
            this._size = e;
        }
        get size() {
            return this._size;
        }
        cloneTo(e) {
            var t = e;
            this._size.cloneTo(t._size), t.enable = this.enable;
        }
        clone() {
            var e;
            switch (this._size.type) {
              case 0:
                e = this._size.separateAxes ? Lr.createByGradientSeparate(this._size.gradientX.clone(), this._size.gradientY.clone(), this._size.gradientZ.clone()) : Lr.createByGradient(this._size.gradient.clone());
                break;

              case 1:
                e = this._size.separateAxes ? Lr.createByRandomTwoConstantSeparate(this._size.constantMinSeparate.clone(), this._size.constantMaxSeparate.clone()) : Lr.createByRandomTwoConstant(this._size.constantMin, this._size.constantMax);
                break;

              case 2:
                e = this._size.separateAxes ? Lr.createByRandomTwoGradientSeparate(this._size.gradientXMin.clone(), this._size.gradientYMin.clone(), this._size.gradientZMin.clone(), this._size.gradientXMax.clone(), this._size.gradientYMax.clone(), this._size.gradientZMax.clone()) : Lr.createByRandomTwoGradient(this._size.gradientMin.clone(), this._size.gradientMax.clone());
            }
            var t = new Fr(e);
            return t.enable = this.enable, t;
        }
    }
    class Ur {
        constructor() {
            this._type = 0, this._constant = 0, this._constantMin = 0, this._constantMax = 0;
        }
        static createByConstant(e = 0) {
            var t = new Ur();
            return t._type = 0, t._constant = e, t;
        }
        static createByRandomTwoConstant(e = 0, t = 0) {
            var r = new Ur();
            return r._type = 1, r._constantMin = e, r._constantMax = t, r;
        }
        get type() {
            return this._type;
        }
        get constant() {
            return this._constant;
        }
        get constantMin() {
            return this._constantMin;
        }
        get constantMax() {
            return this._constantMax;
        }
        cloneTo(e) {
            var t = e;
            t._type = this._type, t._constant = this._constant, t._constantMin = this._constantMin, 
            t._constantMax = this._constantMax;
        }
        clone() {
            var e = new Ur();
            return this.cloneTo(e), e;
        }
    }
    class Hr {
        constructor(e, t) {
            this.type = 0, this.randomRow = !1, this.rowIndex = 0, this.cycles = 0, this.enableUVChannels = 0, 
            this.enable = !1, this.tiles = new a(1, 1), this.type = 0, this.randomRow = !0, 
            this.rowIndex = 0, this.cycles = 1, this.enableUVChannels = 1, this._frame = e, 
            this._startFrame = t;
        }
        get frame() {
            return this._frame;
        }
        get startFrame() {
            return this._startFrame;
        }
        cloneTo(e) {
            var t = e;
            this.tiles.cloneTo(t.tiles), t.type = this.type, t.randomRow = this.randomRow, t.rowIndex = this.rowIndex, 
            t.cycles = this.cycles, t.enableUVChannels = this.enableUVChannels, t.enable = this.enable, 
            this._frame.cloneTo(t._frame), this._startFrame.cloneTo(t._startFrame);
        }
        clone() {
            var e, t;
            switch (this._frame.type) {
              case 0:
                e = Ar.createByConstant(this._frame.constant);
                break;

              case 1:
                e = Ar.createByOverTime(this._frame.frameOverTimeData.clone());
                break;

              case 2:
                e = Ar.createByRandomTwoConstant(this._frame.constantMin, this._frame.constantMax);
                break;

              case 3:
                e = Ar.createByRandomTwoOverTime(this._frame.frameOverTimeDataMin.clone(), this._frame.frameOverTimeDataMax.clone());
            }
            switch (this._startFrame.type) {
              case 0:
                t = Ur.createByConstant(this._startFrame.constant);
                break;

              case 1:
                t = Ur.createByRandomTwoConstant(this._startFrame.constantMin, this._startFrame.constantMax);
            }
            var r = new Hr(e, t);
            return this.cloneTo(r), r;
        }
    }
    class Gr {
        constructor(e) {
            this.enable = !1, this.space = 0, this._velocity = e;
        }
        get velocity() {
            return this._velocity;
        }
        cloneTo(e) {
            var t = e;
            this._velocity.cloneTo(t._velocity), t.enable = this.enable, t.space = this.space;
        }
        clone() {
            var e;
            switch (this._velocity.type) {
              case 0:
                e = yr.createByConstant(this._velocity.constant.clone());
                break;

              case 1:
                e = yr.createByGradient(this._velocity.gradientX.clone(), this._velocity.gradientY.clone(), this._velocity.gradientZ.clone());
                break;

              case 2:
                e = yr.createByRandomTwoConstant(this._velocity.constantMin.clone(), this._velocity.constantMax.clone());
                break;

              case 3:
                e = yr.createByRandomTwoGradient(this._velocity.gradientXMin.clone(), this._velocity.gradientXMax.clone(), this._velocity.gradientYMin.clone(), this._velocity.gradientYMax.clone(), this._velocity.gradientZMin.clone(), this._velocity.gradientZMax.clone());
            }
            var t = new Gr(e);
            return t.enable = this.enable, t.space = this.space, t;
        }
    }
    class zr {}
    zr.WORLDPOSITION = Z.propertyNameToID("u_WorldPosition"), zr.WORLDROTATION = Z.propertyNameToID("u_WorldRotation"), 
    zr.POSITIONSCALE = Z.propertyNameToID("u_PositionScale"), zr.SIZESCALE = Z.propertyNameToID("u_SizeScale"), 
    zr.SCALINGMODE = Z.propertyNameToID("u_ScalingMode"), zr.GRAVITY = Z.propertyNameToID("u_Gravity"), 
    zr.THREEDSTARTROTATION = Z.propertyNameToID("u_ThreeDStartRotation"), zr.STRETCHEDBILLBOARDLENGTHSCALE = Z.propertyNameToID("u_StretchedBillboardLengthScale"), 
    zr.STRETCHEDBILLBOARDSPEEDSCALE = Z.propertyNameToID("u_StretchedBillboardSpeedScale"), 
    zr.SIMULATIONSPACE = Z.propertyNameToID("u_SimulationSpace"), zr.CURRENTTIME = Z.propertyNameToID("u_CurrentTime"), 
    zr.VOLVELOCITYCONST = Z.propertyNameToID("u_VOLVelocityConst"), zr.VOLVELOCITYGRADIENTX = Z.propertyNameToID("u_VOLVelocityGradientX"), 
    zr.VOLVELOCITYGRADIENTY = Z.propertyNameToID("u_VOLVelocityGradientY"), zr.VOLVELOCITYGRADIENTZ = Z.propertyNameToID("u_VOLVelocityGradientZ"), 
    zr.VOLVELOCITYCONSTMAX = Z.propertyNameToID("u_VOLVelocityConstMax"), zr.VOLVELOCITYGRADIENTXMAX = Z.propertyNameToID("u_VOLVelocityGradientMaxX"), 
    zr.VOLVELOCITYGRADIENTYMAX = Z.propertyNameToID("u_VOLVelocityGradientMaxY"), zr.VOLVELOCITYGRADIENTZMAX = Z.propertyNameToID("u_VOLVelocityGradientMaxZ"), 
    zr.VOLSPACETYPE = Z.propertyNameToID("u_VOLSpaceType"), zr.COLOROVERLIFEGRADIENTALPHAS = Z.propertyNameToID("u_ColorOverLifeGradientAlphas"), 
    zr.COLOROVERLIFEGRADIENTCOLORS = Z.propertyNameToID("u_ColorOverLifeGradientColors"), 
    zr.MAXCOLOROVERLIFEGRADIENTALPHAS = Z.propertyNameToID("u_MaxColorOverLifeGradientAlphas"), 
    zr.MAXCOLOROVERLIFEGRADIENTCOLORS = Z.propertyNameToID("u_MaxColorOverLifeGradientColors"), 
    zr.SOLSIZEGRADIENT = Z.propertyNameToID("u_SOLSizeGradient"), zr.SOLSIZEGRADIENTX = Z.propertyNameToID("u_SOLSizeGradientX"), 
    zr.SOLSIZEGRADIENTY = Z.propertyNameToID("u_SOLSizeGradientY"), zr.SOLSizeGradientZ = Z.propertyNameToID("u_SOLSizeGradientZ"), 
    zr.SOLSizeGradientMax = Z.propertyNameToID("u_SOLSizeGradientMax"), zr.SOLSIZEGRADIENTXMAX = Z.propertyNameToID("u_SOLSizeGradientMaxX"), 
    zr.SOLSIZEGRADIENTYMAX = Z.propertyNameToID("u_SOLSizeGradientMaxY"), zr.SOLSizeGradientZMAX = Z.propertyNameToID("u_SOLSizeGradientMaxZ"), 
    zr.ROLANGULARVELOCITYCONST = Z.propertyNameToID("u_ROLAngularVelocityConst"), zr.ROLANGULARVELOCITYCONSTSEPRARATE = Z.propertyNameToID("u_ROLAngularVelocityConstSeprarate"), 
    zr.ROLANGULARVELOCITYGRADIENT = Z.propertyNameToID("u_ROLAngularVelocityGradient"), 
    zr.ROLANGULARVELOCITYGRADIENTX = Z.propertyNameToID("u_ROLAngularVelocityGradientX"), 
    zr.ROLANGULARVELOCITYGRADIENTY = Z.propertyNameToID("u_ROLAngularVelocityGradientY"), 
    zr.ROLANGULARVELOCITYGRADIENTZ = Z.propertyNameToID("u_ROLAngularVelocityGradientZ"), 
    zr.ROLANGULARVELOCITYCONSTMAX = Z.propertyNameToID("u_ROLAngularVelocityConstMax"), 
    zr.ROLANGULARVELOCITYCONSTMAXSEPRARATE = Z.propertyNameToID("u_ROLAngularVelocityConstMaxSeprarate"), 
    zr.ROLANGULARVELOCITYGRADIENTMAX = Z.propertyNameToID("u_ROLAngularVelocityGradientMax"), 
    zr.ROLANGULARVELOCITYGRADIENTXMAX = Z.propertyNameToID("u_ROLAngularVelocityGradientMaxX"), 
    zr.ROLANGULARVELOCITYGRADIENTYMAX = Z.propertyNameToID("u_ROLAngularVelocityGradientMaxY"), 
    zr.ROLANGULARVELOCITYGRADIENTZMAX = Z.propertyNameToID("u_ROLAngularVelocityGradientMaxZ"), 
    zr.ROLANGULARVELOCITYGRADIENTWMAX = Z.propertyNameToID("u_ROLAngularVelocityGradientMaxW"), 
    zr.TEXTURESHEETANIMATIONCYCLES = Z.propertyNameToID("u_TSACycles"), zr.TEXTURESHEETANIMATIONSUBUVLENGTH = Z.propertyNameToID("u_TSASubUVLength"), 
    zr.TEXTURESHEETANIMATIONGRADIENTUVS = Z.propertyNameToID("u_TSAGradientUVs"), zr.TEXTURESHEETANIMATIONGRADIENTMAXUVS = Z.propertyNameToID("u_TSAMaxGradientUVs");
    class kr extends ue {
        constructor() {
            super(), this.setShaderName("PARTICLESHURIKEN"), this._color = new n(1, 1, 1, 1), 
            this._shaderValues.setVector(kr.TILINGOFFSET, new n(1, 1, 0, 0)), this.renderMode = kr.RENDERMODE_ALPHABLENDED;
        }
        static __initDefine__() {
            kr.SHADERDEFINE_DIFFUSEMAP = Z.getDefineByName("DIFFUSEMAP"), kr.SHADERDEFINE_TINTCOLOR = Z.getDefineByName("TINTCOLOR"), 
            kr.SHADERDEFINE_ADDTIVEFOG = Z.getDefineByName("ADDTIVEFOG");
        }
        get _TintColor() {
            return this.color;
        }
        set _TintColor(e) {
            this.color = e;
        }
        get _TintColorR() {
            return this._color.x;
        }
        set _TintColorR(e) {
            this._color.x = e, this.color = this._color;
        }
        get _TintColorG() {
            return this._color.y;
        }
        set _TintColorG(e) {
            this._color.y = e, this.color = this._color;
        }
        get _TintColorB() {
            return this._color.z;
        }
        set _TintColorB(e) {
            this._color.z = e, this.color = this._color;
        }
        get _TintColorA() {
            return this._color.w;
        }
        set _TintColorA(e) {
            this._color.w = e, this.color = this._color;
        }
        get _MainTex_ST() {
            return this._shaderValues.getVector(kr.TILINGOFFSET);
        }
        set _MainTex_ST(e) {
            var t = this._shaderValues.getVector(kr.TILINGOFFSET);
            t.setValue(e.x, e.y, e.z, e.w), this.tilingOffset = t;
        }
        get _MainTex_STX() {
            return this._shaderValues.getVector(kr.TILINGOFFSET).x;
        }
        set _MainTex_STX(e) {
            var t = this._shaderValues.getVector(kr.TILINGOFFSET);
            t.x = e, this.tilingOffset = t;
        }
        get _MainTex_STY() {
            return this._shaderValues.getVector(kr.TILINGOFFSET).y;
        }
        set _MainTex_STY(e) {
            var t = this._shaderValues.getVector(kr.TILINGOFFSET);
            t.y = e, this.tilingOffset = t;
        }
        get _MainTex_STZ() {
            return this._shaderValues.getVector(kr.TILINGOFFSET).z;
        }
        set _MainTex_STZ(e) {
            var t = this._shaderValues.getVector(kr.TILINGOFFSET);
            t.z = e, this.tilingOffset = t;
        }
        get _MainTex_STW() {
            return this._shaderValues.getVector(kr.TILINGOFFSET).w;
        }
        set _MainTex_STW(e) {
            var t = this._shaderValues.getVector(kr.TILINGOFFSET);
            t.w = e, this.tilingOffset = t;
        }
        set renderMode(e) {
            switch (e) {
              case kr.RENDERMODE_ADDTIVE:
                this.renderQueue = ue.RENDERQUEUE_TRANSPARENT, this.depthWrite = !1, this.cull = fe.CULL_NONE, 
                this.blend = fe.BLEND_ENABLE_ALL, this.blendSrc = fe.BLENDPARAM_SRC_ALPHA, this.blendDst = fe.BLENDPARAM_ONE, 
                this.alphaTest = !1, this._shaderValues.addDefine(kr.SHADERDEFINE_ADDTIVEFOG);
                break;

              case kr.RENDERMODE_ALPHABLENDED:
                this.renderQueue = ue.RENDERQUEUE_TRANSPARENT, this.depthWrite = !1, this.cull = fe.CULL_NONE, 
                this.blend = fe.BLEND_ENABLE_ALL, this.blendSrc = fe.BLENDPARAM_SRC_ALPHA, this.blendDst = fe.BLENDPARAM_ONE_MINUS_SRC_ALPHA, 
                this.alphaTest = !1, this._shaderValues.removeDefine(kr.SHADERDEFINE_ADDTIVEFOG);
                break;

              default:
                throw new Error("ShurikenParticleMaterial : renderMode value error.");
            }
        }
        get colorR() {
            return this._TintColorR;
        }
        set colorR(e) {
            this._TintColorR = e;
        }
        get colorG() {
            return this._TintColorG;
        }
        set colorG(e) {
            this._TintColorG = e;
        }
        get colorB() {
            return this._TintColorB;
        }
        set colorB(e) {
            this._TintColorB = e;
        }
        get colorA() {
            return this._TintColorA;
        }
        set colorA(e) {
            this._TintColorA = e;
        }
        get color() {
            return this._shaderValues.getVector(kr.TINTCOLOR);
        }
        set color(e) {
            e ? this._shaderValues.addDefine(kr.SHADERDEFINE_TINTCOLOR) : this._shaderValues.removeDefine(kr.SHADERDEFINE_TINTCOLOR), 
            this._shaderValues.setVector(kr.TINTCOLOR, e);
        }
        get tilingOffsetX() {
            return this._MainTex_STX;
        }
        set tilingOffsetX(e) {
            this._MainTex_STX = e;
        }
        get tilingOffsetY() {
            return this._MainTex_STY;
        }
        set tilingOffsetY(e) {
            this._MainTex_STY = e;
        }
        get tilingOffsetZ() {
            return this._MainTex_STZ;
        }
        set tilingOffsetZ(e) {
            this._MainTex_STZ = e;
        }
        get tilingOffsetW() {
            return this._MainTex_STW;
        }
        set tilingOffsetW(e) {
            this._MainTex_STW = e;
        }
        get tilingOffset() {
            return this._shaderValues.getVector(kr.TILINGOFFSET);
        }
        set tilingOffset(e) {
            e ? this._shaderValues.setVector(kr.TILINGOFFSET, e) : this._shaderValues.getVector(kr.TILINGOFFSET).setValue(1, 1, 0, 0);
        }
        get texture() {
            return this._shaderValues.getTexture(kr.DIFFUSETEXTURE);
        }
        set texture(e) {
            e ? this._shaderValues.addDefine(kr.SHADERDEFINE_DIFFUSEMAP) : this._shaderValues.removeDefine(kr.SHADERDEFINE_DIFFUSEMAP), 
            this._shaderValues.setTexture(kr.DIFFUSETEXTURE, e);
        }
        clone() {
            var e = new kr();
            return this.cloneTo(e), e;
        }
    }
    kr.RENDERMODE_ALPHABLENDED = 0, kr.RENDERMODE_ADDTIVE = 1, kr.DIFFUSETEXTURE = Z.propertyNameToID("u_texture"), 
    kr.TINTCOLOR = Z.propertyNameToID("u_Tintcolor"), kr.TILINGOFFSET = Z.propertyNameToID("u_TilingOffset");
    class Wr {
        constructor() {}
        static setColliderCollision(e, t, r) {}
        static getIColliderCollision(e, t) {
            return !1;
        }
    }
    Wr.COLLISIONFILTERGROUP_DEFAULTFILTER = 1, Wr.COLLISIONFILTERGROUP_STATICFILTER = 2, 
    Wr.COLLISIONFILTERGROUP_KINEMATICFILTER = 4, Wr.COLLISIONFILTERGROUP_DEBRISFILTER = 8, 
    Wr.COLLISIONFILTERGROUP_SENSORTRIGGER = 16, Wr.COLLISIONFILTERGROUP_CHARACTERFILTER = 32, 
    Wr.COLLISIONFILTERGROUP_CUSTOMFILTER1 = 64, Wr.COLLISIONFILTERGROUP_CUSTOMFILTER2 = 128, 
    Wr.COLLISIONFILTERGROUP_CUSTOMFILTER3 = 256, Wr.COLLISIONFILTERGROUP_CUSTOMFILTER4 = 512, 
    Wr.COLLISIONFILTERGROUP_CUSTOMFILTER5 = 1024, Wr.COLLISIONFILTERGROUP_CUSTOMFILTER6 = 2048, 
    Wr.COLLISIONFILTERGROUP_CUSTOMFILTER7 = 4096, Wr.COLLISIONFILTERGROUP_CUSTOMFILTER8 = 8192, 
    Wr.COLLISIONFILTERGROUP_CUSTOMFILTER9 = 16384, Wr.COLLISIONFILTERGROUP_CUSTOMFILTER10 = 32768, 
    Wr.COLLISIONFILTERGROUP_ALLFILTER = -1, Wr.gravity = new i(0, -9.81, 0);
    class Xr extends bt {
        constructor(e) {
            super(e), this._finalGravity = new i(), this._mesh = null, this.stretchedBillboardCameraSpeedScale = 0, 
            this.stretchedBillboardSpeedScale = 0, this.stretchedBillboardLengthScale = 2, this.renderMode = 0, 
            this._supportOctree = !1;
        }
        get renderMode() {
            return this._renderMode;
        }
        set renderMode(e) {
            if (this._renderMode !== e) {
                var t = this._shaderValues;
                switch (this._renderMode) {
                  case 0:
                    t.removeDefine(zr.SHADERDEFINE_RENDERMODE_BILLBOARD);
                    break;

                  case 1:
                    t.removeDefine(zr.SHADERDEFINE_RENDERMODE_STRETCHEDBILLBOARD);
                    break;

                  case 2:
                    t.removeDefine(zr.SHADERDEFINE_RENDERMODE_HORIZONTALBILLBOARD);
                    break;

                  case 3:
                    t.removeDefine(zr.SHADERDEFINE_RENDERMODE_VERTICALBILLBOARD);
                    break;

                  case 4:
                    t.removeDefine(zr.SHADERDEFINE_RENDERMODE_MESH);
                }
                switch (this._renderMode = e, e) {
                  case 0:
                    t.addDefine(zr.SHADERDEFINE_RENDERMODE_BILLBOARD);
                    break;

                  case 1:
                    t.addDefine(zr.SHADERDEFINE_RENDERMODE_STRETCHEDBILLBOARD);
                    break;

                  case 2:
                    t.addDefine(zr.SHADERDEFINE_RENDERMODE_HORIZONTALBILLBOARD);
                    break;

                  case 3:
                    t.addDefine(zr.SHADERDEFINE_RENDERMODE_VERTICALBILLBOARD);
                    break;

                  case 4:
                    t.addDefine(zr.SHADERDEFINE_RENDERMODE_MESH);
                    break;

                  default:
                    throw new Error("ShurikenParticleRender: unknown renderMode Value.");
                }
                var r = this._owner.particleSystem;
                r && r._initBufferDatas();
            }
        }
        get mesh() {
            return this._mesh;
        }
        set mesh(e) {
            this._mesh !== e && (this._mesh && this._mesh._removeReference(), this._mesh = e, 
            e && e._addReference(), this._owner.particleSystem._initBufferDatas());
        }
        _calculateBoundingBox() {
            var e = this._owner.particleSystem;
            if (e._useCustomBounds) e.customBounds._tranform(this._owner.transform.worldMatrix, this._bounds); else if (e._simulationSupported()) {
                if (e._generateBounds(), e._bounds._tranform(this._owner.transform.worldMatrix, this._bounds), 
                0 != e.gravityModifier) {
                    var t = this._bounds.getMax(), r = this._bounds.getMin(), a = e._gravityOffset;
                    t.y -= a.x, r.y -= a.y, this._bounds.setMax(t), this._bounds.setMin(r);
                }
            } else {
                (r = this._bounds.getMin()).setValue(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE), 
                this._bounds.setMin(r), (t = this._bounds.getMax()).setValue(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), 
                this._bounds.setMax(t);
            }
        }
        _needRender(e, t) {
            return !e || !!e.intersects(this.bounds._getBoundBox()) && !!this._owner.particleSystem.isAlive;
        }
        _renderUpdate(e, t) {
            var r = this._owner.particleSystem, a = this._shaderValues, n = this._owner.transform;
            switch (r.simulationSpace) {
              case 0:
                break;

              case 1:
                a.setVector3(zr.WORLDPOSITION, n.position), a.setQuaternion(zr.WORLDROTATION, n.rotation);
                break;

              default:
                throw new Error("ShurikenParticleMaterial: SimulationSpace value is invalid.");
            }
            switch (r.scaleMode) {
              case 0:
                var s = n.getWorldLossyScale();
                a.setVector3(zr.POSITIONSCALE, s), a.setVector3(zr.SIZESCALE, s);
                break;

              case 1:
                var o = n.localScale;
                a.setVector3(zr.POSITIONSCALE, o), a.setVector3(zr.SIZESCALE, o);
                break;

              case 2:
                a.setVector3(zr.POSITIONSCALE, n.getWorldLossyScale()), a.setVector3(zr.SIZESCALE, i._ONE);
            }
            i.scale(Wr.gravity, r.gravityModifier, this._finalGravity), a.setVector3(zr.GRAVITY, this._finalGravity), 
            a.setInt(zr.SIMULATIONSPACE, r.simulationSpace), a.setBool(zr.THREEDSTARTROTATION, r.threeDStartRotation), 
            a.setInt(zr.SCALINGMODE, r.scaleMode), a.setNumber(zr.STRETCHEDBILLBOARDLENGTHSCALE, this.stretchedBillboardLengthScale), 
            a.setNumber(zr.STRETCHEDBILLBOARDSPEEDSCALE, this.stretchedBillboardSpeedScale), 
            a.setNumber(zr.CURRENTTIME, r._currentTime);
        }
        get bounds() {
            return this._boundsChange && (this._calculateBoundingBox(), this._boundsChange = !1), 
            this._bounds;
        }
        _destroy() {
            super._destroy(), this._mesh && (this._mesh._removeReference(), this._mesh = null);
        }
    }
    class Yr {
        constructor() {}
    }
    Yr.PARTICLE_CORNERTEXTURECOORDINATE0 = 5, Yr.PARTICLE_POSITION0 = 1, Yr.PARTICLE_COLOR0 = 2, 
    Yr.PARTICLE_TEXTURECOORDINATE0 = 3, Yr.PARTICLE_SHAPEPOSITIONSTARTLIFETIME = 4, 
    Yr.PARTICLE_DIRECTIONTIME = 0, Yr.PARTICLE_STARTCOLOR0 = 6, Yr.PARTICLE_ENDCOLOR0 = 7, 
    Yr.PARTICLE_STARTSIZE = 8, Yr.PARTICLE_STARTROTATION = 9, Yr.PARTICLE_STARTSPEED = 10, 
    Yr.PARTICLE_RANDOM0 = 11, Yr.PARTICLE_RANDOM1 = 12, Yr.PARTICLE_SIMULATIONWORLDPOSTION = 13, 
    Yr.PARTICLE_SIMULATIONWORLDROTATION = 14;
    class Zr extends Yr {
        constructor(e, t, r, a, n, i, s, o, l, h, _, d, c, u) {
            super(), this._cornerTextureCoordinate = e, this._positionStartLifeTime = t, this._velocity = r, 
            this._startColor = a, this._startSize = n, this._startRotation0 = i, this._startRotation1 = s, 
            this._startRotation2 = o, this._startLifeTime = l, this._time = h, this._startSpeed = _, 
            this._randoms0 = d, this._randoms1 = c, this._simulationWorldPostion = u;
        }
        static get vertexDeclaration() {
            return Zr._vertexDeclaration;
        }
        static __init__() {
            Zr._vertexDeclaration = new U(152, [ new H(0, B.Vector4, Yr.PARTICLE_CORNERTEXTURECOORDINATE0), new H(16, B.Vector4, Yr.PARTICLE_SHAPEPOSITIONSTARTLIFETIME), new H(32, B.Vector4, Yr.PARTICLE_DIRECTIONTIME), new H(48, B.Vector4, Yr.PARTICLE_STARTCOLOR0), new H(64, B.Vector3, Yr.PARTICLE_STARTSIZE), new H(76, B.Vector3, Yr.PARTICLE_STARTROTATION), new H(88, B.Single, Yr.PARTICLE_STARTSPEED), new H(92, B.Vector4, Yr.PARTICLE_RANDOM0), new H(108, B.Vector4, Yr.PARTICLE_RANDOM1), new H(124, B.Vector3, Yr.PARTICLE_SIMULATIONWORLDPOSTION), new H(136, B.Vector4, Yr.PARTICLE_SIMULATIONWORLDROTATION) ]);
        }
        get cornerTextureCoordinate() {
            return this._cornerTextureCoordinate;
        }
        get positionStartLifeTime() {
            return this._positionStartLifeTime;
        }
        get velocity() {
            return this._velocity;
        }
        get startColor() {
            return this._startColor;
        }
        get startSize() {
            return this._startSize;
        }
        get startRotation0() {
            return this._startRotation0;
        }
        get startRotation1() {
            return this._startRotation1;
        }
        get startRotation2() {
            return this._startRotation2;
        }
        get startLifeTime() {
            return this._startLifeTime;
        }
        get time() {
            return this._time;
        }
        get startSpeed() {
            return this._startSpeed;
        }
        get random0() {
            return this._randoms0;
        }
        get random1() {
            return this._randoms1;
        }
        get simulationWorldPostion() {
            return this._simulationWorldPostion;
        }
    }
    class jr extends Yr {
        constructor(e, t, r, a, n, i, s, o, l, h, _, d, c, u) {
            super(), this._cornerTextureCoordinate = e, this._positionStartLifeTime = t, this._velocity = r, 
            this._startColor = a, this._startSize = n, this._startRotation0 = i, this._startRotation1 = s, 
            this._startRotation2 = o, this._startLifeTime = l, this._time = h, this._startSpeed = _, 
            this._randoms0 = d, this._randoms1 = c, this._simulationWorldPostion = u;
        }
        static __init__() {
            jr._vertexDeclaration = new U(172, [ new H(0, B.Vector3, Yr.PARTICLE_POSITION0), new H(12, B.Vector4, Yr.PARTICLE_COLOR0), new H(28, B.Vector2, Yr.PARTICLE_TEXTURECOORDINATE0), new H(36, B.Vector4, Yr.PARTICLE_SHAPEPOSITIONSTARTLIFETIME), new H(52, B.Vector4, Yr.PARTICLE_DIRECTIONTIME), new H(68, B.Vector4, Yr.PARTICLE_STARTCOLOR0), new H(84, B.Vector3, Yr.PARTICLE_STARTSIZE), new H(96, B.Vector3, Yr.PARTICLE_STARTROTATION), new H(108, B.Single, Yr.PARTICLE_STARTSPEED), new H(112, B.Vector4, Yr.PARTICLE_RANDOM0), new H(128, B.Vector4, Yr.PARTICLE_RANDOM1), new H(144, B.Vector3, Yr.PARTICLE_SIMULATIONWORLDPOSTION), new H(156, B.Vector4, Yr.PARTICLE_SIMULATIONWORLDROTATION) ]);
        }
        static get vertexDeclaration() {
            return jr._vertexDeclaration;
        }
        get cornerTextureCoordinate() {
            return this._cornerTextureCoordinate;
        }
        get position() {
            return this._positionStartLifeTime;
        }
        get velocity() {
            return this._velocity;
        }
        get startColor() {
            return this._startColor;
        }
        get startSize() {
            return this._startSize;
        }
        get startRotation0() {
            return this._startRotation0;
        }
        get startRotation1() {
            return this._startRotation1;
        }
        get startRotation2() {
            return this._startRotation2;
        }
        get startLifeTime() {
            return this._startLifeTime;
        }
        get time() {
            return this._time;
        }
        get startSpeed() {
            return this._startSpeed;
        }
        get random0() {
            return this._randoms0;
        }
        get random1() {
            return this._randoms1;
        }
        get simulationWorldPostion() {
            return this._simulationWorldPostion;
        }
    }
    class qr {
        constructor(e) {
            this._temp = new Uint32Array(1), this.seeds = new Uint32Array(4), this.seeds[0] = e, 
            this.seeds[1] = 1812433253 * this.seeds[0] + 1, this.seeds[2] = 1812433253 * this.seeds[1] + 1, 
            this.seeds[3] = 1812433253 * this.seeds[2] + 1;
        }
        static getFloatFromInt(e) {
            return 1 / 8388607 * (8388607 & e);
        }
        static getByteFromInt(e) {
            return (8388607 & e) >>> 15;
        }
        get seed() {
            return this.seeds[0];
        }
        set seed(e) {
            this.seeds[0] = e, this.seeds[1] = 1812433253 * this.seeds[0] + 1, this.seeds[2] = 1812433253 * this.seeds[1] + 1, 
            this.seeds[3] = 1812433253 * this.seeds[2] + 1;
        }
        getUint() {
            return this._temp[0] = this.seeds[0] ^ this.seeds[0] << 11, this.seeds[0] = this.seeds[1], 
            this.seeds[1] = this.seeds[2], this.seeds[2] = this.seeds[3], this.seeds[3] = this.seeds[3] ^ this.seeds[3] >>> 19 ^ this._temp[0] ^ this._temp[0] >>> 8, 
            this.seeds[3];
        }
        getFloat() {
            return this.getUint(), (8388607 & this.seeds[3]) * (1 / 8388607);
        }
        getSignedFloat() {
            return 2 * this.getFloat() - 1;
        }
    }
    class Qr {
        constructor() {
            this._emissionRate = 10, this._destroyed = !1, this._bursts = [];
        }
        set emissionRate(e) {
            if (e < 0) throw new Error("ParticleBaseShape:emissionRate value must large or equal than 0.");
            this._emissionRate = e;
        }
        get emissionRate() {
            return this._emissionRate;
        }
        get destroyed() {
            return this._destroyed;
        }
        destroy() {
            this._bursts = null, this._destroyed = !0;
        }
        getBurstsCount() {
            return this._bursts.length;
        }
        getBurstByIndex(e) {
            return this._bursts[e];
        }
        addBurst(e) {
            var t = this._bursts.length;
            if (t > 0) for (var r = 0; r < t; r++) this._bursts[r].time > e.time && this._bursts.splice(r, 0, e);
            this._bursts.push(e);
        }
        removeBurst(e) {
            var t = this._bursts.indexOf(e);
            -1 !== t && this._bursts.splice(t, 1);
        }
        removeBurstByIndex(e) {
            this._bursts.splice(e, 1);
        }
        clearBurst() {
            this._bursts.length = 0;
        }
        cloneTo(e) {
            var t = e, r = t._bursts;
            r.length = this._bursts.length;
            for (var a = 0, n = this._bursts.length; a < n; a++) {
                var i = r[a];
                i ? this._bursts[a].cloneTo(i) : r[a] = this._bursts[a].clone();
            }
            t._emissionRate = this._emissionRate, t.enable = this.enable;
        }
        clone() {
            var e = new Qr();
            return this.cloneTo(e), e;
        }
    }
    class Kr {
        constructor() {}
        static _getStartLifetimeFromGradient(e, r) {
            for (var a = 1, n = e.gradientCount; a < n; a++) {
                var i = e.getKeyByIndex(a);
                if (i >= r) {
                    var s = e.getKeyByIndex(a - 1), o = (r - s) / (i - s);
                    return t.MathUtil.lerp(e.getValueByIndex(a - 1), e.getValueByIndex(a), o);
                }
            }
            throw new Error("ShurikenParticleData: can't get value foam startLifeTimeGradient.");
        }
        static _randomInvertRoationArray(e, t, r, a, n) {
            var i;
            a ? (a.seed = n[6], i = a.getFloat(), n[6] = a.seed) : i = Math.random(), i < r ? (t.x = -e.x, 
            t.y = -e.y, t.z = -e.z) : (t.x = e.x, t.y = e.y, t.z = e.z);
        }
        static _randomInvertRoation(e, t, r, a) {
            var n;
            return r ? (r.seed = a[6], n = r.getFloat(), a[6] = r.seed) : n = Math.random(), 
            n < t && (e = -e), e;
        }
        static create(e, r) {
            var a = e.autoRandomSeed, i = e._rand, s = e._randomSeeds;
            switch (e.startColorType) {
              case 0:
                var o = e.startColorConstant;
                Kr.startColor.x = o.x, Kr.startColor.y = o.y, Kr.startColor.z = o.z, Kr.startColor.w = o.w;
                break;

              case 2:
                a ? n.lerp(e.startColorConstantMin, e.startColorConstantMax, Math.random(), Kr.startColor) : (i.seed = s[3], 
                n.lerp(e.startColorConstantMin, e.startColorConstantMax, i.getFloat(), Kr.startColor), 
                s[3] = i.seed);
            }
            var l = e.colorOverLifetime;
            if (l && l.enable) {
                var h = l.color;
                switch (h.type) {
                  case 0:
                    Kr.startColor.x = Kr.startColor.x * h.constant.x, Kr.startColor.y = Kr.startColor.y * h.constant.y, 
                    Kr.startColor.z = Kr.startColor.z * h.constant.z, Kr.startColor.w = Kr.startColor.w * h.constant.w;
                    break;

                  case 2:
                    var _;
                    a ? _ = Math.random() : (i.seed = s[10], _ = i.getFloat(), s[10] = i.seed);
                    var d = h.constantMin, c = h.constantMax;
                    Kr.startColor.x = Kr.startColor.x * t.MathUtil.lerp(d.x, c.x, _), Kr.startColor.y = Kr.startColor.y * t.MathUtil.lerp(d.y, c.y, _), 
                    Kr.startColor.z = Kr.startColor.z * t.MathUtil.lerp(d.z, c.z, _), Kr.startColor.w = Kr.startColor.w * t.MathUtil.lerp(d.w, c.w, _);
                }
            }
            var u = Kr.startSize;
            switch (e.startSizeType) {
              case 0:
                if (e.threeDStartSize) {
                    var m = e.startSizeConstantSeparate;
                    u[0] = m.x, u[1] = m.y, u[2] = m.z;
                } else u[0] = u[1] = u[2] = e.startSizeConstant;
                break;

              case 2:
                if (e.threeDStartSize) {
                    var f = e.startSizeConstantMinSeparate, E = e.startSizeConstantMaxSeparate;
                    a ? (u[0] = t.MathUtil.lerp(f.x, E.x, Math.random()), u[1] = t.MathUtil.lerp(f.y, E.y, Math.random()), 
                    u[2] = t.MathUtil.lerp(f.z, E.z, Math.random())) : (i.seed = s[4], u[0] = t.MathUtil.lerp(f.x, E.x, i.getFloat()), 
                    u[1] = t.MathUtil.lerp(f.y, E.y, i.getFloat()), u[2] = t.MathUtil.lerp(f.z, E.z, i.getFloat()), 
                    s[4] = i.seed);
                } else a ? u[0] = u[1] = u[2] = t.MathUtil.lerp(e.startSizeConstantMin, e.startSizeConstantMax, Math.random()) : (i.seed = s[4], 
                u[0] = u[1] = u[2] = t.MathUtil.lerp(e.startSizeConstantMin, e.startSizeConstantMax, i.getFloat()), 
                s[4] = i.seed);
            }
            var T = e.sizeOverLifetime;
            if (T && T.enable && 1 === T.size.type) {
                var p, g = T.size;
                if (g.separateAxes) a ? (u[0] = u[0] * t.MathUtil.lerp(g.constantMinSeparate.x, g.constantMaxSeparate.x, Math.random()), 
                u[1] = u[1] * t.MathUtil.lerp(g.constantMinSeparate.y, g.constantMaxSeparate.y, Math.random()), 
                u[2] = u[2] * t.MathUtil.lerp(g.constantMinSeparate.z, g.constantMaxSeparate.z, Math.random())) : (i.seed = s[11], 
                u[0] = u[0] * t.MathUtil.lerp(g.constantMinSeparate.x, g.constantMaxSeparate.x, i.getFloat()), 
                u[1] = u[1] * t.MathUtil.lerp(g.constantMinSeparate.y, g.constantMaxSeparate.y, i.getFloat()), 
                u[2] = u[2] * t.MathUtil.lerp(g.constantMinSeparate.z, g.constantMaxSeparate.z, i.getFloat()), 
                s[11] = i.seed); else a ? p = t.MathUtil.lerp(g.constantMin, g.constantMax, Math.random()) : (i.seed = s[11], 
                p = t.MathUtil.lerp(g.constantMin, g.constantMax, i.getFloat()), s[11] = i.seed), 
                u[0] = u[0] * p, u[1] = u[1] * p, u[2] = u[2] * p;
            }
            var S = r.renderMode;
            if (1 !== S) switch (e.startRotationType) {
              case 0:
                if (e.threeDStartRotation) {
                    var R = e.startRotationConstantSeparate, v = Kr._tempVector30;
                    Kr._randomInvertRoationArray(R, v, e.randomizeRotationDirection, a ? null : i, s), 
                    Kr.startRotation[0] = v.x, Kr.startRotation[1] = v.y, Kr.startRotation[2] = 4 !== S ? -v.z : v.z;
                } else Kr.startRotation[0] = Kr._randomInvertRoation(e.startRotationConstant, e.randomizeRotationDirection, a ? null : i, s), 
                Kr.startRotation[1] = 0, Kr.startRotation[2] = 0;
                break;

              case 2:
                if (e.threeDStartRotation) {
                    var x = e.startRotationConstantMinSeparate, A = e.startRotationConstantMaxSeparate, I = Kr._tempVector30;
                    a ? (I.x = t.MathUtil.lerp(x.x, A.x, Math.random()), I.y = t.MathUtil.lerp(x.y, A.y, Math.random()), 
                    I.z = t.MathUtil.lerp(x.z, A.z, Math.random())) : (i.seed = s[5], I.x = t.MathUtil.lerp(x.x, A.x, i.getFloat()), 
                    I.y = t.MathUtil.lerp(x.y, A.y, i.getFloat()), I.z = t.MathUtil.lerp(x.z, A.z, i.getFloat()), 
                    s[5] = i.seed), Kr._randomInvertRoationArray(I, I, e.randomizeRotationDirection, a ? null : i, s), 
                    Kr.startRotation[0] = I.x, Kr.startRotation[1] = I.y, Kr.startRotation[2] = 4 !== S ? -I.z : I.z;
                } else a ? Kr.startRotation[0] = Kr._randomInvertRoation(t.MathUtil.lerp(e.startRotationConstantMin, e.startRotationConstantMax, Math.random()), e.randomizeRotationDirection, a ? null : i, s) : (i.seed = s[5], 
                Kr.startRotation[0] = Kr._randomInvertRoation(t.MathUtil.lerp(e.startRotationConstantMin, e.startRotationConstantMax, i.getFloat()), e.randomizeRotationDirection, a ? null : i, s), 
                s[5] = i.seed);
            }
            switch (e.startLifetimeType) {
              case 0:
                Kr.startLifeTime = e.startLifetimeConstant;
                break;

              case 1:
                Kr.startLifeTime = Kr._getStartLifetimeFromGradient(e.startLifeTimeGradient, e.emissionTime);
                break;

              case 2:
                a ? Kr.startLifeTime = t.MathUtil.lerp(e.startLifetimeConstantMin, e.startLifetimeConstantMax, Math.random()) : (i.seed = s[7], 
                Kr.startLifeTime = t.MathUtil.lerp(e.startLifetimeConstantMin, e.startLifetimeConstantMax, i.getFloat()), 
                s[7] = i.seed);
                break;

              case 3:
                var M = e.emissionTime;
                a ? Kr.startLifeTime = t.MathUtil.lerp(Kr._getStartLifetimeFromGradient(e.startLifeTimeGradientMin, M), Kr._getStartLifetimeFromGradient(e.startLifeTimeGradientMax, M), Math.random()) : (i.seed = s[7], 
                Kr.startLifeTime = t.MathUtil.lerp(Kr._getStartLifetimeFromGradient(e.startLifeTimeGradientMin, M), Kr._getStartLifetimeFromGradient(e.startLifeTimeGradientMax, M), i.getFloat()), 
                s[7] = i.seed);
            }
            var D = e.textureSheetAnimation;
            if (D && D.enable) {
                var L, y = D.tiles, C = y.x, O = y.y, N = 1 / C, P = 1 / O, w = D.startFrame;
                switch (w.type) {
                  case 0:
                    L = w.constant;
                    break;

                  case 1:
                    a ? L = t.MathUtil.lerp(w.constantMin, w.constantMax, Math.random()) : (i.seed = s[14], 
                    L = t.MathUtil.lerp(w.constantMin, w.constantMax, i.getFloat()), s[14] = i.seed);
                }
                var V = D.frame, B = D.cycles;
                switch (V.type) {
                  case 0:
                    L += V.constant * B;
                    break;

                  case 2:
                    a ? L += t.MathUtil.lerp(V.constantMin, V.constantMax, Math.random()) * B : (i.seed = s[15], 
                    L += t.MathUtil.lerp(V.constantMin, V.constantMax, i.getFloat()) * B, s[15] = i.seed);
                }
                var b = 0;
                switch (D.type) {
                  case 0:
                    b = Math.floor(L / C);
                    break;

                  case 1:
                    D.randomRow ? a ? b = Math.floor(Math.random() * O) : (i.seed = s[13], b = Math.floor(i.getFloat() * O), 
                    s[13] = i.seed) : b = D.rowIndex;
                }
                var F = Math.floor(L % C);
                Kr.startUVInfo = Kr.startUVInfo, Kr.startUVInfo[0] = N, Kr.startUVInfo[1] = P, Kr.startUVInfo[2] = F * N, 
                Kr.startUVInfo[3] = b * P;
            } else Kr.startUVInfo = Kr.startUVInfo, Kr.startUVInfo[0] = 1, Kr.startUVInfo[1] = 1, 
            Kr.startUVInfo[2] = 0, Kr.startUVInfo[3] = 0;
        }
    }
    Kr._tempVector30 = new i(), Kr.startColor = new n(), Kr.startSize = new Float32Array(3), 
    Kr.startRotation = new Float32Array(3), Kr.startUVInfo = new Float32Array(4);
    class Jr extends It {
        constructor(e) {
            super(), this._boundingSphere = null, this._boundingBox = null, this._boundingBoxCorners = null, 
            this._bounds = null, this._gravityOffset = new a(), this._customBounds = null, this._useCustomBounds = !1, 
            this._owner = null, this._ownerRender = null, this._vertices = null, this._floatCountPerVertex = 0, 
            this._startLifeTimeIndex = 0, this._timeIndex = 0, this._simulateUpdate = !1, this._firstActiveElement = 0, 
            this._firstNewElement = 0, this._firstFreeElement = 0, this._firstRetiredElement = 0, 
            this._drawCounter = 0, this._bufferMaxParticles = 0, this._emission = null, this._shape = null, 
            this._isEmitting = !1, this._isPlaying = !1, this._isPaused = !1, this._playStartDelay = 0, 
            this._frameRateTime = 0, this._emissionTime = 0, this._totalDelayTime = 0, this._burstsIndex = 0, 
            this._velocityOverLifetime = null, this._colorOverLifetime = null, this._sizeOverLifetime = null, 
            this._rotationOverLifetime = null, this._textureSheetAnimation = null, this._startLifetimeType = 0, 
            this._startLifetimeConstant = 0, this._startLifeTimeGradient = null, this._startLifetimeConstantMin = 0, 
            this._startLifetimeConstantMax = 0, this._startLifeTimeGradientMin = null, this._startLifeTimeGradientMax = null, 
            this._maxStartLifetime = 0, this._uvLength = new a(), this._vertexStride = 0, this._indexStride = 0, 
            this._vertexBuffer = null, this._indexBuffer = null, this._bufferState = new G(), 
            this._updateMask = 0, this._currentTime = 0, this._startUpdateLoopCount = 0, this._rand = null, 
            this._randomSeeds = null, this.duration = 0, this.looping = !1, this.prewarm = !1, 
            this.startDelayType = 0, this.startDelay = 0, this.startDelayMin = 0, this.startDelayMax = 0, 
            this.startSpeedType = 0, this.startSpeedConstant = 0, this.startSpeedConstantMin = 0, 
            this.startSpeedConstantMax = 0, this.threeDStartSize = !1, this.startSizeType = 0, 
            this.startSizeConstant = 0, this.startSizeConstantSeparate = null, this.startSizeConstantMin = 0, 
            this.startSizeConstantMax = 0, this.startSizeConstantMinSeparate = null, this.startSizeConstantMaxSeparate = null, 
            this.threeDStartRotation = !1, this.startRotationType = 0, this.startRotationConstant = 0, 
            this.startRotationConstantSeparate = null, this.startRotationConstantMin = 0, this.startRotationConstantMax = 0, 
            this.startRotationConstantMinSeparate = null, this.startRotationConstantMaxSeparate = null, 
            this.randomizeRotationDirection = 0, this.startColorType = 0, this.startColorConstant = new n(1, 1, 1, 1), 
            this.startColorConstantMin = new n(0, 0, 0, 0), this.startColorConstantMax = new n(1, 1, 1, 1), 
            this.gravityModifier = 0, this.simulationSpace = 0, this.simulationSpeed = 1, this.scaleMode = 1, 
            this.playOnAwake = !1, this.randomSeed = null, this.autoRandomSeed = !1, this.isPerformanceMode = !1, 
            this._firstActiveElement = 0, this._firstNewElement = 0, this._firstFreeElement = 0, 
            this._firstRetiredElement = 0, this._owner = e, this._ownerRender = e.particleRenderer, 
            this._boundingBoxCorners = [], this._boundingSphere = new Xt(new i(), Number.MAX_VALUE), 
            this._boundingBox = new xt(new i(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE), new i(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)), 
            this._bounds = new At(this._boundingBox.min, this._boundingBox.max), this._useCustomBounds = !1, 
            this._currentTime = 0, this._isEmitting = !1, this._isPlaying = !1, this._isPaused = !1, 
            this._burstsIndex = 0, this._frameRateTime = 0, this._emissionTime = 0, this._totalDelayTime = 0, 
            this._simulateUpdate = !1, this._bufferMaxParticles = 1, this.duration = 5, this.looping = !0, 
            this.prewarm = !1, this.startDelayType = 0, this.startDelay = 0, this.startDelayMin = 0, 
            this.startDelayMax = 0, this._startLifetimeType = 0, this._startLifetimeConstant = 5, 
            this._startLifeTimeGradient = new Dr(), this._startLifetimeConstantMin = 0, this._startLifetimeConstantMax = 5, 
            this._startLifeTimeGradientMin = new Dr(), this._startLifeTimeGradientMax = new Dr(), 
            this._maxStartLifetime = 5, this.startSpeedType = 0, this.startSpeedConstant = 5, 
            this.startSpeedConstantMin = 0, this.startSpeedConstantMax = 5, this.threeDStartSize = !1, 
            this.startSizeType = 0, this.startSizeConstant = 1, this.startSizeConstantSeparate = new i(1, 1, 1), 
            this.startSizeConstantMin = 0, this.startSizeConstantMax = 1, this.startSizeConstantMinSeparate = new i(0, 0, 0), 
            this.startSizeConstantMaxSeparate = new i(1, 1, 1), this.threeDStartRotation = !1, 
            this.startRotationType = 0, this.startRotationConstant = 0, this.startRotationConstantSeparate = new i(0, 0, 0), 
            this.startRotationConstantMin = 0, this.startRotationConstantMax = 0, this.startRotationConstantMinSeparate = new i(0, 0, 0), 
            this.startRotationConstantMaxSeparate = new i(0, 0, 0), this.gravityModifier = 0, 
            this.simulationSpace = 1, this.scaleMode = 1, this.playOnAwake = !0, this._rand = new qr(0), 
            this.autoRandomSeed = !0, this.randomSeed = new Uint32Array(1), this._randomSeeds = new Uint32Array(Jr._RANDOMOFFSET.length), 
            this.isPerformanceMode = !0, this._emission = new Qr(), this._emission.enable = !0;
        }
        get maxParticles() {
            return this._bufferMaxParticles - 1;
        }
        set maxParticles(e) {
            var t = e + 1;
            t !== this._bufferMaxParticles && (this._bufferMaxParticles = t, this._initBufferDatas());
        }
        get emission() {
            return this._emission;
        }
        get aliveParticleCount() {
            return this._firstNewElement >= this._firstRetiredElement ? this._firstNewElement - this._firstRetiredElement : this._bufferMaxParticles - this._firstRetiredElement + this._firstNewElement;
        }
        get emissionTime() {
            return this._emissionTime > this.duration ? this.duration : this._emissionTime;
        }
        get shape() {
            return this._shape;
        }
        set shape(e) {
            this._shape !== e && (e && e.enable ? this._owner._render._shaderValues.addDefine(zr.SHADERDEFINE_SHAPE) : this._owner._render._shaderValues.removeDefine(zr.SHADERDEFINE_SHAPE), 
            this._shape = e);
        }
        get isAlive() {
            return !!(this._isPlaying || this.aliveParticleCount > 0);
        }
        get isEmitting() {
            return this._isEmitting;
        }
        get isPlaying() {
            return this._isPlaying;
        }
        get isPaused() {
            return this._isPaused;
        }
        get startLifetimeType() {
            return this._startLifetimeType;
        }
        set startLifetimeType(e) {
            var t, r;
            switch (this.startLifetimeType) {
              case 0:
                this._maxStartLifetime = this.startLifetimeConstant;
                break;

              case 1:
                this._maxStartLifetime = -Number.MAX_VALUE;
                var a = a;
                for (t = 0, r = a.gradientCount; t < r; t++) this._maxStartLifetime = Math.max(this._maxStartLifetime, a.getValueByIndex(t));
                break;

              case 2:
                this._maxStartLifetime = Math.max(this.startLifetimeConstantMin, this.startLifetimeConstantMax);
                break;

              case 3:
                this._maxStartLifetime = -Number.MAX_VALUE;
                var n = n;
                for (t = 0, r = n.gradientCount; t < r; t++) this._maxStartLifetime = Math.max(this._maxStartLifetime, n.getValueByIndex(t));
                var i = i;
                for (t = 0, r = i.gradientCount; t < r; t++) this._maxStartLifetime = Math.max(this._maxStartLifetime, i.getValueByIndex(t));
            }
            this._startLifetimeType = e;
        }
        get startLifetimeConstant() {
            return this._startLifetimeConstant;
        }
        set startLifetimeConstant(e) {
            0 === this._startLifetimeType && (this._maxStartLifetime = e), this._startLifetimeConstant = e;
        }
        get startLifeTimeGradient() {
            return this._startLifeTimeGradient;
        }
        set startLifeTimeGradient(e) {
            if (1 === this._startLifetimeType) {
                this._maxStartLifetime = -Number.MAX_VALUE;
                for (var t = 0, r = e.gradientCount; t < r; t++) this._maxStartLifetime = Math.max(this._maxStartLifetime, e.getValueByIndex(t));
            }
            this._startLifeTimeGradient = e;
        }
        get startLifetimeConstantMin() {
            return this._startLifetimeConstantMin;
        }
        set startLifetimeConstantMin(e) {
            2 === this._startLifetimeType && (this._maxStartLifetime = Math.max(e, this._startLifetimeConstantMax)), 
            this._startLifetimeConstantMin = e;
        }
        get startLifetimeConstantMax() {
            return this._startLifetimeConstantMax;
        }
        set startLifetimeConstantMax(e) {
            2 === this._startLifetimeType && (this._maxStartLifetime = Math.max(this._startLifetimeConstantMin, e)), 
            this._startLifetimeConstantMax = e;
        }
        get startLifeTimeGradientMin() {
            return this._startLifeTimeGradientMin;
        }
        set startLifeTimeGradientMin(e) {
            if (3 === this._startLifetimeType) {
                var t, r;
                for (this._maxStartLifetime = -Number.MAX_VALUE, t = 0, r = e.gradientCount; t < r; t++) this._maxStartLifetime = Math.max(this._maxStartLifetime, e.getValueByIndex(t));
                for (t = 0, r = this._startLifeTimeGradientMax.gradientCount; t < r; t++) this._maxStartLifetime = Math.max(this._maxStartLifetime, this._startLifeTimeGradientMax.getValueByIndex(t));
            }
            this._startLifeTimeGradientMin = e;
        }
        get startLifeTimeGradientMax() {
            return this._startLifeTimeGradientMax;
        }
        set startLifeTimeGradientMax(e) {
            if (3 === this._startLifetimeType) {
                var t, r;
                for (this._maxStartLifetime = -Number.MAX_VALUE, t = 0, r = this._startLifeTimeGradientMin.gradientCount; t < r; t++) this._maxStartLifetime = Math.max(this._maxStartLifetime, this._startLifeTimeGradientMin.getValueByIndex(t));
                for (t = 0, r = e.gradientCount; t < r; t++) this._maxStartLifetime = Math.max(this._maxStartLifetime, e.getValueByIndex(t));
            }
            this._startLifeTimeGradientMax = e;
        }
        get velocityOverLifetime() {
            return this._velocityOverLifetime;
        }
        set velocityOverLifetime(e) {
            var t = this._owner._render._shaderValues;
            if (e) {
                var r = e.velocity, a = r.type;
                if (e.enable) switch (a) {
                  case 0:
                    t.addDefine(zr.SHADERDEFINE_VELOCITYOVERLIFETIMECONSTANT);
                    break;

                  case 1:
                    t.addDefine(zr.SHADERDEFINE_VELOCITYOVERLIFETIMECURVE);
                    break;

                  case 2:
                    t.addDefine(zr.SHADERDEFINE_VELOCITYOVERLIFETIMERANDOMCONSTANT);
                    break;

                  case 3:
                    t.addDefine(zr.SHADERDEFINE_VELOCITYOVERLIFETIMERANDOMCURVE);
                } else t.removeDefine(zr.SHADERDEFINE_VELOCITYOVERLIFETIMECONSTANT), t.removeDefine(zr.SHADERDEFINE_VELOCITYOVERLIFETIMECURVE), 
                t.removeDefine(zr.SHADERDEFINE_VELOCITYOVERLIFETIMERANDOMCONSTANT), t.removeDefine(zr.SHADERDEFINE_VELOCITYOVERLIFETIMERANDOMCURVE);
                switch (a) {
                  case 0:
                    t.setVector3(zr.VOLVELOCITYCONST, r.constant);
                    break;

                  case 1:
                    t.setBuffer(zr.VOLVELOCITYGRADIENTX, r.gradientX._elements), t.setBuffer(zr.VOLVELOCITYGRADIENTY, r.gradientY._elements), 
                    t.setBuffer(zr.VOLVELOCITYGRADIENTZ, r.gradientZ._elements);
                    break;

                  case 2:
                    t.setVector3(zr.VOLVELOCITYCONST, r.constantMin), t.setVector3(zr.VOLVELOCITYCONSTMAX, r.constantMax);
                    break;

                  case 3:
                    t.setBuffer(zr.VOLVELOCITYGRADIENTX, r.gradientXMin._elements), t.setBuffer(zr.VOLVELOCITYGRADIENTXMAX, r.gradientXMax._elements), 
                    t.setBuffer(zr.VOLVELOCITYGRADIENTY, r.gradientYMin._elements), t.setBuffer(zr.VOLVELOCITYGRADIENTYMAX, r.gradientYMax._elements), 
                    t.setBuffer(zr.VOLVELOCITYGRADIENTZ, r.gradientZMin._elements), t.setBuffer(zr.VOLVELOCITYGRADIENTZMAX, r.gradientZMax._elements);
                }
                t.setInt(zr.VOLSPACETYPE, e.space);
            } else t.removeDefine(zr.SHADERDEFINE_VELOCITYOVERLIFETIMECONSTANT), t.removeDefine(zr.SHADERDEFINE_VELOCITYOVERLIFETIMECURVE), 
            t.removeDefine(zr.SHADERDEFINE_VELOCITYOVERLIFETIMERANDOMCONSTANT), t.removeDefine(zr.SHADERDEFINE_VELOCITYOVERLIFETIMERANDOMCURVE);
            this._velocityOverLifetime = e;
        }
        get colorOverLifetime() {
            return this._colorOverLifetime;
        }
        set colorOverLifetime(e) {
            var t = this._owner._render._shaderValues;
            if (e) {
                var r = e.color;
                if (e.enable) switch (r.type) {
                  case 1:
                    t.addDefine(zr.SHADERDEFINE_COLOROVERLIFETIME);
                    break;

                  case 3:
                    t.addDefine(zr.SHADERDEFINE_RANDOMCOLOROVERLIFETIME);
                } else t.removeDefine(zr.SHADERDEFINE_COLOROVERLIFETIME), t.removeDefine(zr.SHADERDEFINE_RANDOMCOLOROVERLIFETIME);
                switch (r.type) {
                  case 1:
                    var a = r.gradient;
                    t.setBuffer(zr.COLOROVERLIFEGRADIENTALPHAS, a._alphaElements), t.setBuffer(zr.COLOROVERLIFEGRADIENTCOLORS, a._rgbElements);
                    break;

                  case 3:
                    var n = r.gradientMin, i = r.gradientMax;
                    t.setBuffer(zr.COLOROVERLIFEGRADIENTALPHAS, n._alphaElements), t.setBuffer(zr.COLOROVERLIFEGRADIENTCOLORS, n._rgbElements), 
                    t.setBuffer(zr.MAXCOLOROVERLIFEGRADIENTALPHAS, i._alphaElements), t.setBuffer(zr.MAXCOLOROVERLIFEGRADIENTCOLORS, i._rgbElements);
                }
            } else t.removeDefine(zr.SHADERDEFINE_COLOROVERLIFETIME), t.removeDefine(zr.SHADERDEFINE_RANDOMCOLOROVERLIFETIME), 
            t.setBuffer(zr.COLOROVERLIFEGRADIENTALPHAS, a._alphaElements), t.setBuffer(zr.COLOROVERLIFEGRADIENTCOLORS, a._rgbElements), 
            t.setBuffer(zr.COLOROVERLIFEGRADIENTALPHAS, n._alphaElements), t.setBuffer(zr.COLOROVERLIFEGRADIENTCOLORS, n._rgbElements), 
            t.setBuffer(zr.MAXCOLOROVERLIFEGRADIENTALPHAS, i._alphaElements), t.setBuffer(zr.MAXCOLOROVERLIFEGRADIENTCOLORS, i._rgbElements);
            this._colorOverLifetime = e;
        }
        get sizeOverLifetime() {
            return this._sizeOverLifetime;
        }
        set sizeOverLifetime(e) {
            var t = this._owner._render._shaderValues;
            if (e) {
                var r = e.size, a = r.separateAxes, n = r.type;
                if (e.enable) switch (n) {
                  case 0:
                    a ? t.addDefine(zr.SHADERDEFINE_SIZEOVERLIFETIMECURVESEPERATE) : t.addDefine(zr.SHADERDEFINE_SIZEOVERLIFETIMECURVE);
                    break;

                  case 2:
                    a ? t.addDefine(zr.SHADERDEFINE_SIZEOVERLIFETIMERANDOMCURVESSEPERATE) : t.addDefine(zr.SHADERDEFINE_SIZEOVERLIFETIMERANDOMCURVES);
                } else t.removeDefine(zr.SHADERDEFINE_SIZEOVERLIFETIMECURVE), t.removeDefine(zr.SHADERDEFINE_SIZEOVERLIFETIMECURVESEPERATE), 
                t.removeDefine(zr.SHADERDEFINE_SIZEOVERLIFETIMERANDOMCURVES), t.removeDefine(zr.SHADERDEFINE_SIZEOVERLIFETIMERANDOMCURVESSEPERATE);
                switch (n) {
                  case 0:
                    a ? (t.setBuffer(zr.SOLSIZEGRADIENTX, r.gradientX._elements), t.setBuffer(zr.SOLSIZEGRADIENTY, r.gradientY._elements), 
                    t.setBuffer(zr.SOLSizeGradientZ, r.gradientZ._elements)) : t.setBuffer(zr.SOLSIZEGRADIENT, r.gradient._elements);
                    break;

                  case 2:
                    a ? (t.setBuffer(zr.SOLSIZEGRADIENTX, r.gradientXMin._elements), t.setBuffer(zr.SOLSIZEGRADIENTXMAX, r.gradientXMax._elements), 
                    t.setBuffer(zr.SOLSIZEGRADIENTY, r.gradientYMin._elements), t.setBuffer(zr.SOLSIZEGRADIENTYMAX, r.gradientYMax._elements), 
                    t.setBuffer(zr.SOLSizeGradientZ, r.gradientZMin._elements), t.setBuffer(zr.SOLSizeGradientZMAX, r.gradientZMax._elements)) : (t.setBuffer(zr.SOLSIZEGRADIENT, r.gradientMin._elements), 
                    t.setBuffer(zr.SOLSizeGradientMax, r.gradientMax._elements));
                }
            } else t.removeDefine(zr.SHADERDEFINE_SIZEOVERLIFETIMECURVE), t.removeDefine(zr.SHADERDEFINE_SIZEOVERLIFETIMECURVESEPERATE), 
            t.removeDefine(zr.SHADERDEFINE_SIZEOVERLIFETIMERANDOMCURVES), t.removeDefine(zr.SHADERDEFINE_SIZEOVERLIFETIMERANDOMCURVESSEPERATE);
            this._sizeOverLifetime = e;
        }
        get rotationOverLifetime() {
            return this._rotationOverLifetime;
        }
        set rotationOverLifetime(e) {
            var t = this._owner._render._shaderValues;
            if (e) {
                var r = e.angularVelocity;
                if (!r) return;
                var a = r.separateAxes, n = r.type;
                if (e.enable) switch (a ? t.addDefine(zr.SHADERDEFINE_ROTATIONOVERLIFETIMESEPERATE) : t.addDefine(zr.SHADERDEFINE_ROTATIONOVERLIFETIME), 
                n) {
                  case 0:
                    t.addDefine(zr.SHADERDEFINE_ROTATIONOVERLIFETIMECONSTANT);
                    break;

                  case 1:
                    t.addDefine(zr.SHADERDEFINE_ROTATIONOVERLIFETIMECURVE);
                    break;

                  case 2:
                    t.addDefine(zr.SHADERDEFINE_ROTATIONOVERLIFETIMERANDOMCONSTANTS);
                    break;

                  case 3:
                    t.addDefine(zr.SHADERDEFINE_ROTATIONOVERLIFETIMERANDOMCURVES);
                } else t.removeDefine(zr.SHADERDEFINE_ROTATIONOVERLIFETIME), t.removeDefine(zr.SHADERDEFINE_ROTATIONOVERLIFETIMESEPERATE), 
                t.removeDefine(zr.SHADERDEFINE_ROTATIONOVERLIFETIMECONSTANT), t.removeDefine(zr.SHADERDEFINE_ROTATIONOVERLIFETIMECURVE), 
                t.removeDefine(zr.SHADERDEFINE_ROTATIONOVERLIFETIMERANDOMCONSTANTS), t.removeDefine(zr.SHADERDEFINE_ROTATIONOVERLIFETIMERANDOMCURVES);
                switch (n) {
                  case 0:
                    a ? t.setVector3(zr.ROLANGULARVELOCITYCONSTSEPRARATE, r.constantSeparate) : t.setNumber(zr.ROLANGULARVELOCITYCONST, r.constant);
                    break;

                  case 1:
                    a ? (t.setBuffer(zr.ROLANGULARVELOCITYGRADIENTX, r.gradientX._elements), t.setBuffer(zr.ROLANGULARVELOCITYGRADIENTY, r.gradientY._elements), 
                    t.setBuffer(zr.ROLANGULARVELOCITYGRADIENTZ, r.gradientZ._elements)) : t.setBuffer(zr.ROLANGULARVELOCITYGRADIENT, r.gradient._elements);
                    break;

                  case 2:
                    a ? (t.setVector3(zr.ROLANGULARVELOCITYCONSTSEPRARATE, r.constantMinSeparate), t.setVector3(zr.ROLANGULARVELOCITYCONSTMAXSEPRARATE, r.constantMaxSeparate)) : (t.setNumber(zr.ROLANGULARVELOCITYCONST, r.constantMin), 
                    t.setNumber(zr.ROLANGULARVELOCITYCONSTMAX, r.constantMax));
                    break;

                  case 3:
                    a ? (t.setBuffer(zr.ROLANGULARVELOCITYGRADIENTX, r.gradientXMin._elements), t.setBuffer(zr.ROLANGULARVELOCITYGRADIENTXMAX, r.gradientXMax._elements), 
                    t.setBuffer(zr.ROLANGULARVELOCITYGRADIENTY, r.gradientYMin._elements), t.setBuffer(zr.ROLANGULARVELOCITYGRADIENTYMAX, r.gradientYMax._elements), 
                    t.setBuffer(zr.ROLANGULARVELOCITYGRADIENTZ, r.gradientZMin._elements), t.setBuffer(zr.ROLANGULARVELOCITYGRADIENTZMAX, r.gradientZMax._elements)) : (t.setBuffer(zr.ROLANGULARVELOCITYGRADIENT, r.gradientMin._elements), 
                    t.setBuffer(zr.ROLANGULARVELOCITYGRADIENTMAX, r.gradientMax._elements));
                }
            } else t.removeDefine(zr.SHADERDEFINE_ROTATIONOVERLIFETIME), t.removeDefine(zr.SHADERDEFINE_ROTATIONOVERLIFETIMESEPERATE), 
            t.removeDefine(zr.SHADERDEFINE_ROTATIONOVERLIFETIMECONSTANT), t.removeDefine(zr.SHADERDEFINE_ROTATIONOVERLIFETIMECURVE), 
            t.removeDefine(zr.SHADERDEFINE_ROTATIONOVERLIFETIMERANDOMCONSTANTS), t.removeDefine(zr.SHADERDEFINE_ROTATIONOVERLIFETIMERANDOMCURVES);
            this._rotationOverLifetime = e;
        }
        get textureSheetAnimation() {
            return this._textureSheetAnimation;
        }
        set textureSheetAnimation(e) {
            var t = this._owner._render._shaderValues;
            if (e) {
                var r = e.frame, a = r.type;
                if (e.enable) switch (a) {
                  case 1:
                    t.addDefine(zr.SHADERDEFINE_TEXTURESHEETANIMATIONCURVE);
                    break;

                  case 3:
                    t.addDefine(zr.SHADERDEFINE_TEXTURESHEETANIMATIONRANDOMCURVE);
                } else t.removeDefine(zr.SHADERDEFINE_TEXTURESHEETANIMATIONCURVE), t.removeDefine(zr.SHADERDEFINE_TEXTURESHEETANIMATIONRANDOMCURVE);
                if (1 === a || 3 === a) {
                    t.setNumber(zr.TEXTURESHEETANIMATIONCYCLES, e.cycles);
                    var n = e.tiles, i = this._uvLength;
                    i.x = 1 / n.x, i.y = 1 / n.y, t.setVector2(zr.TEXTURESHEETANIMATIONSUBUVLENGTH, this._uvLength);
                }
                switch (a) {
                  case 1:
                    t.setBuffer(zr.TEXTURESHEETANIMATIONGRADIENTUVS, r.frameOverTimeData._elements);
                    break;

                  case 3:
                    t.setBuffer(zr.TEXTURESHEETANIMATIONGRADIENTUVS, r.frameOverTimeDataMin._elements), 
                    t.setBuffer(zr.TEXTURESHEETANIMATIONGRADIENTMAXUVS, r.frameOverTimeDataMax._elements);
                }
            } else t.removeDefine(zr.SHADERDEFINE_TEXTURESHEETANIMATIONCURVE), t.removeDefine(zr.SHADERDEFINE_TEXTURESHEETANIMATIONRANDOMCURVE);
            this._textureSheetAnimation = e;
        }
        _getVertexBuffer(e = 0) {
            return 0 === e ? this._vertexBuffer : null;
        }
        _getIndexBuffer() {
            return this._indexBuffer;
        }
        _generateBoundingSphere() {
            var e = this._boundingSphere.center;
            e.x = 0, e.y = 0, e.z = 0, this._boundingSphere.radius = Number.MAX_VALUE;
        }
        _generateBounds() {
            var t = this._owner.particleRenderer, r = this._bounds.getMin(), a = this._bounds.getMax(), n = 0;
            switch (this.startLifetimeType) {
              case 0:
                n = this._startLifetimeConstant;
                break;

              case 2:
                n = this._startLifetimeConstantMax;
            }
            var s = 0;
            switch (this.startSpeedType) {
              case 0:
                s = this.startSpeedConstant;
                break;

              case 2:
                s = this.startSpeedConstantMax;
            }
            var o = 0;
            if (this.threeDStartSize) switch (this.startSizeType) {
              case 0:
                o = Math.max(this.startSizeConstantSeparate.x, this.startSizeConstantSeparate.y, this.startSizeConstantSeparate.z);
                break;

              case 2:
                o = Math.max(this.startSizeConstantMaxSeparate.x, this.startSizeConstantMaxSeparate.y, this.startSizeConstantMaxSeparate.z);
            } else switch (this.startSizeType) {
              case 0:
                o = this.startSizeConstant;
                break;

              case 2:
                o = this.startSizeConstantMax;
            }
            var l = Jr._tempVector30, h = Jr._tempVector31, _ = Jr._tempVector32, d = Jr._tempVector33;
            if (l.setValue(0, 0, 1), h.setValue(0, 0, 0), _.setValue(0, 0, 0), d.setValue(0, 0, 0), 
            this.shape && this.shape.enable) switch (this.shape.shapeType) {
              case e.ParticleSystemShapeType.Sphere:
                var c = this.shape;
                l.setValue(1, 1, 1), h.setValue(1, 1, 1), _.setValue(c.radius, c.radius, c.radius), 
                d.setValue(c.radius, c.radius, c.radius);
                break;

              case e.ParticleSystemShapeType.Hemisphere:
                var u = this.shape;
                l.setValue(1, 1, 1), h.setValue(1, 1, 1), _.setValue(u.radius, u.radius, u.radius), 
                d.setValue(u.radius, u.radius, 0);
                break;

              case e.ParticleSystemShapeType.Cone:
                var m = this.shape;
                if (0 == m.emitType || 1 == m.emitType) {
                    var f = m.angle, E = Math.sin(f);
                    l.setValue(E, E, 1), h.setValue(E, E, 0), _.setValue(m.radius, m.radius, 0), d.setValue(m.radius, m.radius, 0);
                    break;
                }
                if (2 == m.emitType || 3 == m.emitType) {
                    f = m.angle, E = Math.sin(f);
                    var T = m.length;
                    l.setValue(E, E, 1), h.setValue(E, E, 0);
                    var p = Math.tan(f), g = m.radius + T * p;
                    _.setValue(g, g, T), d.setValue(g, g, 0);
                }
                break;

              case e.ParticleSystemShapeType.Box:
                var S = this.shape;
                0 != this.shape.randomDirection && (l.setValue(1, 1, 1), h.setValue(1, 1, 1)), _.setValue(S.x / 2, S.y / 2, S.z / 2), 
                d.setValue(S.x / 2, S.y / 2, S.z / 2);
                break;

              case e.ParticleSystemShapeType.Circle:
                var R = this.shape;
                l.setValue(1, 1, 1), h.setValue(1, 1, 1), _.setValue(R.radius, R.radius, 0), d.setValue(R.radius, R.radius, 0);
            }
            var v = 0, x = 4 == t.renderMode;
            switch (t.renderMode) {
              case 0:
              case 1:
              case 2:
              case 3:
                v = Jr.halfKSqrtOf2;
                break;

              case 4:
                var A = t.mesh.bounds;
                v = Math.sqrt(Math.pow(A.getExtent().x, 2) + Math.pow(A.getExtent().y, 2) + Math.pow(A.getExtent().z, 2));
            }
            var I = Jr._tempVector36;
            if (I.setValue(1, 1, 1), this.sizeOverLifetime && this.sizeOverLifetime.enable) {
                var M = this.sizeOverLifetime.size.getMaxSizeInGradient(x);
                I.setValue(M, M, M);
            }
            var D = v * o;
            i.scale(I, D, I);
            var L = Jr._tempVector34, y = Jr._tempVector35;
            if (s > 0 ? (i.scale(l, s, L), i.scale(h, s, y)) : (i.scale(l, -s, y), i.scale(h, -s, L)), 
            this.velocityOverLifetime && this.velocityOverLifetime.enable) {
                var C = this.velocityOverLifetime.velocity, O = Jr._tempVector37;
                switch (O.setValue(0, 0, 0), C.type) {
                  case 0:
                    C.constant.cloneTo(O);
                    break;

                  case 2:
                    C.constantMax.cloneTo(O);
                    break;

                  case 1:
                    var N = C.gradientX.getAverageValue(), P = C.gradientY.getAverageValue(), w = C.gradientZ.getAverageValue();
                    O.setValue(N, P, w);
                    break;

                  case 3:
                    var V = C.gradientXMax.getAverageValue(), B = C.gradientYMax.getAverageValue(), b = C.gradientZMax.getAverageValue();
                    O.setValue(V, B, b);
                }
                1 == this.velocityOverLifetime.space && i.transformV3ToV3(O, this._owner.transform.worldMatrix, O), 
                i.add(L, O, L), i.subtract(y, O, y), i.max(L, i._ZERO, L), i.max(y, i._ZERO, y);
            }
            i.scale(L, n, L), i.scale(y, n, y);
            var F = this.gravityModifier;
            if (0 != F) {
                var U = .5 * Jr.g * F * n * n, H = L.y - U, G = y.y + U;
                H = H > 0 ? H : 0, G = G > 0 ? G : 0, this._gravityOffset.setValue(L.y - H, G - y.y);
            }
            i.add(L, I, a), i.add(a, _, a), i.add(y, I, r), i.add(r, d, r), i.scale(r, -1, r), 
            this._bounds.setMin(r), this._bounds.setMax(a);
        }
        get customBounds() {
            return this._customBounds;
        }
        set customBounds(e) {
            this._useCustomBounds = !!e, this._customBounds = e;
        }
        _simulationSupported() {
            return 0 != this.simulationSpace;
        }
        _updateEmission() {
            if (this.isAlive) if (this._simulateUpdate) this._simulateUpdate = !1; else {
                var e = this._startUpdateLoopCount === t.Stat.loopCount || this._isPaused ? 0 : this._owner._scene.timer._delta / 1e3;
                e = Math.min(Jr._maxElapsedTime, e * this.simulationSpeed), this._updateParticles(e);
            }
        }
        _updateParticles(e) {
            (4 !== this._ownerRender.renderMode || this._ownerRender.mesh) && (this._currentTime += e, 
            this._retireActiveParticles(), this._freeRetiredParticles(), this._totalDelayTime += e, 
            this._totalDelayTime < this._playStartDelay || this._emission.enable && this._isEmitting && !this._isPaused && this._advanceTime(e, this._currentTime));
        }
        _updateParticlesSimulationRestart(e) {
            this._firstActiveElement = 0, this._firstNewElement = 0, this._firstFreeElement = 0, 
            this._firstRetiredElement = 0, this._burstsIndex = 0, this._frameRateTime = e, this._emissionTime = 0, 
            this._totalDelayTime = 0, this._currentTime = e;
            var t = e;
            t < this._playStartDelay ? this._totalDelayTime = t : this._emission.enable && this._advanceTime(e, e);
        }
        _retireActiveParticles() {
            for (;this._firstActiveElement != this._firstNewElement; ) {
                var e = this._firstActiveElement * this._floatCountPerVertex * this._vertexStride, t = e + this._timeIndex;
                if (this._currentTime - this._vertices[t] + 1e-4 < this._vertices[e + this._startLifeTimeIndex]) break;
                this._vertices[t] = this._drawCounter, this._firstActiveElement++, this._firstActiveElement >= this._bufferMaxParticles && (this._firstActiveElement = 0);
            }
        }
        _freeRetiredParticles() {
            for (;this._firstRetiredElement != this._firstActiveElement; ) {
                this._drawCounter, this._vertices[this._firstRetiredElement * this._floatCountPerVertex * this._vertexStride + this._timeIndex];
                this._firstRetiredElement++, this._firstRetiredElement >= this._bufferMaxParticles && (this._firstRetiredElement = 0);
            }
        }
        _burst(e, r) {
            for (var a = 0, n = this._emission._bursts, i = n.length; this._burstsIndex < i; this._burstsIndex++) {
                var s, o = n[this._burstsIndex], l = o.time;
                if (!(e <= l && l < r)) break;
                this.autoRandomSeed ? s = t.MathUtil.lerp(o.minCount, o.maxCount, Math.random()) : (this._rand.seed = this._randomSeeds[0], 
                s = t.MathUtil.lerp(o.minCount, o.maxCount, this._rand.getFloat()), this._randomSeeds[0] = this._rand.seed), 
                a += s;
            }
            return a;
        }
        _advanceTime(e, t) {
            var r, a = this._emissionTime;
            this._emissionTime += e;
            var n = 0;
            if (this._emissionTime > this.duration) {
                if (!this.looping) {
                    for (n = Math.min(this.maxParticles - this.aliveParticleCount, n), r = 0; r < n; r++) this.emit(t);
                    return this._isPlaying = !1, void this.stop();
                }
                n += this._burst(a, this._emissionTime), this._emissionTime -= this.duration, this._burstsIndex = 0, 
                n += this._burst(0, this._emissionTime);
            } else n += this._burst(a, this._emissionTime);
            for (n = Math.min(this.maxParticles - this.aliveParticleCount, n), r = 0; r < n; r++) this.emit(t);
            var i = this.emission.emissionRate;
            if (i > 0) {
                var s = 1 / i;
                for (this._frameRateTime += s, this._frameRateTime = this._currentTime - (this._currentTime - this._frameRateTime) % this._maxStartLifetime; this._frameRateTime <= t && this.emit(this._frameRateTime); ) this._frameRateTime += s;
                this._frameRateTime = Math.floor(t / s) * s;
            }
        }
        _initBufferDatas() {
            if (this._vertexBuffer) {
                var r = this._vertexBuffer._byteLength + 2 * this._indexBuffer.indexCount;
                this._vertexBuffer.destroy(), this._indexBuffer.destroy(), t.Resource._addMemory(-r, -r);
            }
            var a = t.LayaGL.instance, n = this._ownerRender, i = n.renderMode;
            if (-1 !== i && this.maxParticles > 0) {
                var s, o, l, h, _, d, c, u = 0, m = (r = 0, n.mesh);
                if (4 === i) {
                    if (m) {
                        c = jr.vertexDeclaration, this._floatCountPerVertex = c.vertexStride / 4, this._startLifeTimeIndex = 12, 
                        this._timeIndex = 16, this._vertexStride = m._vertexCount;
                        var f = this._bufferMaxParticles * this._vertexStride, E = f % 65535;
                        if (Math.floor(f / 65535) + 1 > 1) throw new Error("ShurikenParticleSystem:the maxParticleCount multiply mesh vertexCount is large than 65535.");
                        u = c.vertexStride * E, this._vertexBuffer = new V(u, a.DYNAMIC_DRAW), this._vertexBuffer.vertexDeclaration = c, 
                        this._vertices = new Float32Array(this._floatCountPerVertex * E), this._indexStride = m._indexBuffer.indexCount;
                        var T = m._indexBuffer.getData(), p = this._bufferMaxParticles * this._indexStride;
                        for (this._indexBuffer = new st(e.IndexFormat.UInt16, p, a.STATIC_DRAW), s = new Uint16Array(p), 
                        r = u + 2 * p, _ = 0, o = 0; o < this._bufferMaxParticles; o++) {
                            var g = o * this._vertexStride;
                            for (l = 0, h = T.length; l < h; l++) s[_++] = g + T[l];
                        }
                        this._indexBuffer.setData(s), this._bufferState.bind(), this._bufferState.applyVertexBuffer(this._vertexBuffer), 
                        this._bufferState.applyIndexBuffer(this._indexBuffer), this._bufferState.unBind();
                    }
                } else {
                    for (c = Zr.vertexDeclaration, this._floatCountPerVertex = c.vertexStride / 4, this._startLifeTimeIndex = 7, 
                    this._timeIndex = 11, this._vertexStride = 4, u = c.vertexStride * this._bufferMaxParticles * this._vertexStride, 
                    this._vertexBuffer = new V(u, a.DYNAMIC_DRAW), this._vertexBuffer.vertexDeclaration = c, 
                    this._vertices = new Float32Array(this._floatCountPerVertex * this._bufferMaxParticles * this._vertexStride), 
                    o = 0; o < this._bufferMaxParticles; o++) d = o * this._floatCountPerVertex * this._vertexStride, 
                    this._vertices[d] = -.5, this._vertices[d + 1] = -.5, this._vertices[d + 2] = 0, 
                    this._vertices[d + 3] = 1, d += this._floatCountPerVertex, this._vertices[d] = .5, 
                    this._vertices[d + 1] = -.5, this._vertices[d + 2] = 1, this._vertices[d + 3] = 1, 
                    d += this._floatCountPerVertex, this._vertices[d] = .5, this._vertices[d + 1] = .5, 
                    this._vertices[d + 2] = 1, this._vertices[d + 3] = 0, d += this._floatCountPerVertex, 
                    this._vertices[d] = -.5, this._vertices[d + 1] = .5, this._vertices[d + 2] = 0, 
                    this._vertices[d + 3] = 0;
                    for (this._indexStride = 6, this._indexBuffer = new st(e.IndexFormat.UInt16, 6 * this._bufferMaxParticles, a.STATIC_DRAW), 
                    s = new Uint16Array(6 * this._bufferMaxParticles), o = 0; o < this._bufferMaxParticles; o++) {
                        _ = 6 * o;
                        var S = o * this._vertexStride, R = S + 2;
                        s[_++] = S, s[_++] = R, s[_++] = S + 1, s[_++] = S, s[_++] = S + 3, s[_++] = R;
                    }
                    this._indexBuffer.setData(s), r = u + 6 * this._bufferMaxParticles * 2, this._bufferState.bind(), 
                    this._bufferState.applyVertexBuffer(this._vertexBuffer), this._bufferState.applyIndexBuffer(this._indexBuffer), 
                    this._bufferState.unBind();
                }
                t.Resource._addMemory(r, r);
            }
        }
        destroy() {
            super.destroy();
            var e = this._vertexBuffer._byteLength + 2 * this._indexBuffer.indexCount;
            t.Resource._addMemory(-e, -e), this._bufferState.destroy(), this._vertexBuffer.destroy(), 
            this._indexBuffer.destroy(), this._emission.destroy(), this._boundingBox = null, 
            this._boundingSphere = null, this._boundingBoxCorners = null, this._bounds = null, 
            this._customBounds = null, this._bufferState = null, this._vertexBuffer = null, 
            this._indexBuffer = null, this._owner = null, this._vertices = null, this._indexBuffer = null, 
            this._emission = null, this._shape = null, this.startLifeTimeGradient = null, this.startLifeTimeGradientMin = null, 
            this.startLifeTimeGradientMax = null, this.startSizeConstantSeparate = null, this.startSizeConstantMinSeparate = null, 
            this.startSizeConstantMaxSeparate = null, this.startRotationConstantSeparate = null, 
            this.startRotationConstantMinSeparate = null, this.startRotationConstantMaxSeparate = null, 
            this.startColorConstant = null, this.startColorConstantMin = null, this.startColorConstantMax = null, 
            this._velocityOverLifetime = null, this._colorOverLifetime = null, this._sizeOverLifetime = null, 
            this._rotationOverLifetime = null, this._textureSheetAnimation = null;
        }
        emit(e) {
            var t = Jr._tempPosition, r = Jr._tempDirection;
            return this._shape && this._shape.enable ? this.autoRandomSeed ? this._shape.generatePositionAndDirection(t, r) : this._shape.generatePositionAndDirection(t, r, this._rand, this._randomSeeds) : (t.x = t.y = t.z = 0, 
            r.x = r.y = 0, r.z = 1), this.addParticle(t, r, e);
        }
        addParticle(e, r, a) {
            i.normalize(r, r);
            var n = this._firstFreeElement + 1;
            if (n >= this._bufferMaxParticles && (n = 0), n === this._firstRetiredElement) return !1;
            var s, o, l, h, _, d, c, u, m, f, E = this._owner.transform;
            if (Kr.create(this, this._ownerRender), this._currentTime - a >= Kr.startLifeTime) return !0;
            switch (0 == this.simulationSpace && (s = E.position, o = E.rotation), this.startSpeedType) {
              case 0:
                l = this.startSpeedConstant;
                break;

              case 2:
                this.autoRandomSeed ? l = t.MathUtil.lerp(this.startSpeedConstantMin, this.startSpeedConstantMax, Math.random()) : (this._rand.seed = this._randomSeeds[8], 
                l = t.MathUtil.lerp(this.startSpeedConstantMin, this.startSpeedConstantMax, this._rand.getFloat()), 
                this._randomSeeds[8] = this._rand.seed);
            }
            var T = this._velocityOverLifetime && this._velocityOverLifetime.enable;
            if (T) {
                var p = this._velocityOverLifetime.velocity.type;
                2 === p || 3 === p ? this.autoRandomSeed ? (h = Math.random(), _ = Math.random(), 
                d = Math.random()) : (this._rand.seed = this._randomSeeds[9], h = this._rand.getFloat(), 
                _ = this._rand.getFloat(), d = this._rand.getFloat(), this._randomSeeds[9] = this._rand.seed) : T = !1;
            } else T = !1;
            var g = this._colorOverLifetime && this._colorOverLifetime.enable;
            g ? 3 === this._colorOverLifetime.color.type ? this.autoRandomSeed ? c = Math.random() : (this._rand.seed = this._randomSeeds[10], 
            c = this._rand.getFloat(), this._randomSeeds[10] = this._rand.seed) : g = !1 : g = !1;
            var S = this._sizeOverLifetime && this._sizeOverLifetime.enable;
            S ? 3 === this._sizeOverLifetime.size.type ? this.autoRandomSeed ? u = Math.random() : (this._rand.seed = this._randomSeeds[11], 
            u = this._rand.getFloat(), this._randomSeeds[11] = this._rand.seed) : S = !1 : S = !1;
            var R = this._rotationOverLifetime && this._rotationOverLifetime.enable;
            if (R) {
                var v = this._rotationOverLifetime.angularVelocity.type;
                2 === v || 3 === v ? this.autoRandomSeed ? m = Math.random() : (this._rand.seed = this._randomSeeds[12], 
                m = this._rand.getFloat(), this._randomSeeds[12] = this._rand.seed) : R = !1;
            } else R = !1;
            var x = this._textureSheetAnimation && this._textureSheetAnimation.enable;
            x ? 3 === this._textureSheetAnimation.frame.type ? this.autoRandomSeed ? f = Math.random() : (this._rand.seed = this._randomSeeds[15], 
            f = this._rand.getFloat(), this._randomSeeds[15] = this._rand.seed) : x = !1 : x = !1;
            var A, I, M, D, L, y, C = this._firstFreeElement * this._floatCountPerVertex * this._vertexStride, O = Kr.startUVInfo[0], N = Kr.startUVInfo[1], P = Kr.startUVInfo[2], w = Kr.startUVInfo[3], V = this._ownerRender;
            if (4 === V.renderMode) {
                var B = V.mesh._vertexBuffer;
                A = B.getFloat32Data();
                var b = B.vertexDeclaration;
                M = b.getVertexElementByUsage(ie.MESH_POSITION0)._offset / 4;
                var F = b.getVertexElementByUsage(ie.MESH_COLOR0);
                D = F ? F._offset / 4 : -1;
                var U = b.getVertexElementByUsage(ie.MESH_TEXTURECOORDINATE0);
                L = U ? U._offset / 4 : -1, I = b.vertexStride / 4, y = 0;
            } else {
                this._vertices[C + 2] = P, this._vertices[C + 3] = w + N;
                var H = C + this._floatCountPerVertex;
                this._vertices[H + 2] = P + O, this._vertices[H + 3] = w + N;
                var G = H + this._floatCountPerVertex;
                this._vertices[G + 2] = P + O, this._vertices[G + 3] = w;
                var z = G + this._floatCountPerVertex;
                this._vertices[z + 2] = P, this._vertices[z + 3] = w;
            }
            for (var k = C, W = C + this._floatCountPerVertex * this._vertexStride; k < W; k += this._floatCountPerVertex) {
                var X;
                if (4 === V.renderMode) {
                    X = k;
                    var Y = I * y++, Z = Y + M;
                    this._vertices[X++] = A[Z++], this._vertices[X++] = A[Z++], this._vertices[X++] = A[Z], 
                    -1 === D ? (this._vertices[X++] = 1, this._vertices[X++] = 1, this._vertices[X++] = 1, 
                    this._vertices[X++] = 1) : (Z = Y + D, this._vertices[X++] = A[Z++], this._vertices[X++] = A[Z++], 
                    this._vertices[X++] = A[Z++], this._vertices[X++] = A[Z]), -1 === L ? (this._vertices[X++] = 0, 
                    this._vertices[X++] = 0) : (Z = Y + L, this._vertices[X++] = P + A[Z++] * O, this._vertices[X++] = w + A[Z] * N);
                } else X = k + 4;
                switch (this._vertices[X++] = e.x, this._vertices[X++] = e.y, this._vertices[X++] = e.z, 
                this._vertices[X++] = Kr.startLifeTime, this._vertices[X++] = r.x, this._vertices[X++] = r.y, 
                this._vertices[X++] = r.z, this._vertices[X++] = a, this._vertices[X++] = Kr.startColor.x, 
                this._vertices[X++] = Kr.startColor.y, this._vertices[X++] = Kr.startColor.z, this._vertices[X++] = Kr.startColor.w, 
                this._vertices[X++] = Kr.startSize[0], this._vertices[X++] = Kr.startSize[1], this._vertices[X++] = Kr.startSize[2], 
                this._vertices[X++] = Kr.startRotation[0], this._vertices[X++] = Kr.startRotation[1], 
                this._vertices[X++] = Kr.startRotation[2], this._vertices[X++] = l, g && (this._vertices[X + 1] = c), 
                S && (this._vertices[X + 2] = u), R && (this._vertices[X + 3] = m), x && (this._vertices[X + 4] = f), 
                T && (this._vertices[X + 5] = h, this._vertices[X + 6] = _, this._vertices[X + 7] = d), 
                this.simulationSpace) {
                  case 0:
                    X += 8, this._vertices[X++] = s.x, this._vertices[X++] = s.y, this._vertices[X++] = s.z, 
                    this._vertices[X++] = o.x, this._vertices[X++] = o.y, this._vertices[X++] = o.z, 
                    this._vertices[X++] = o.w;
                    break;

                  case 1:
                    break;

                  default:
                    throw new Error("ShurikenParticleMaterial: SimulationSpace value is invalid.");
                }
            }
            return this._firstFreeElement = n, !0;
        }
        addNewParticlesToVertexBuffer() {
            var e, t = this._vertexStride * this._floatCountPerVertex * 4;
            this._firstNewElement < this._firstFreeElement ? (e = this._firstNewElement * t, 
            this._vertexBuffer.setData(this._vertices.buffer, e, e, (this._firstFreeElement - this._firstNewElement) * t)) : (e = this._firstNewElement * t, 
            this._vertexBuffer.setData(this._vertices.buffer, e, e, (this._bufferMaxParticles - this._firstNewElement) * t), 
            this._firstFreeElement > 0 && this._vertexBuffer.setData(this._vertices.buffer, 0, 0, this._firstFreeElement * t)), 
            this._firstNewElement = this._firstFreeElement;
        }
        _getType() {
            return Jr._type;
        }
        _prepareRender(e) {
            return this._updateMask != t.Stat.loopCount && (this._updateMask = t.Stat.loopCount, 
            this._updateEmission(), this._firstNewElement != this._firstFreeElement && this.addNewParticlesToVertexBuffer(), 
            this._drawCounter++), this._firstActiveElement != this._firstFreeElement;
        }
        _render(e) {
            var r;
            this._bufferState.bind();
            var a = t.LayaGL.instance;
            this._firstActiveElement < this._firstFreeElement ? (r = (this._firstFreeElement - this._firstActiveElement) * this._indexStride, 
            a.drawElements(a.TRIANGLES, r, a.UNSIGNED_SHORT, 2 * this._firstActiveElement * this._indexStride), 
            t.Stat.trianglesFaces += r / 3, t.Stat.renderBatches++) : (r = (this._bufferMaxParticles - this._firstActiveElement) * this._indexStride, 
            a.drawElements(a.TRIANGLES, r, a.UNSIGNED_SHORT, 2 * this._firstActiveElement * this._indexStride), 
            t.Stat.trianglesFaces += r / 3, t.Stat.renderBatches++, this._firstFreeElement > 0 && (r = this._firstFreeElement * this._indexStride, 
            a.drawElements(a.TRIANGLES, r, a.UNSIGNED_SHORT, 0), t.Stat.trianglesFaces += r / 3, 
            t.Stat.renderBatches++));
        }
        play() {
            if (this._burstsIndex = 0, this._isEmitting = !0, this._isPlaying = !0, this._isPaused = !1, 
            this._emissionTime = 0, this._totalDelayTime = 0, !this.autoRandomSeed) for (var e = 0, r = this._randomSeeds.length; e < r; e++) this._randomSeeds[e] = this.randomSeed[0] + Jr._RANDOMOFFSET[e];
            switch (this.startDelayType) {
              case 0:
                this._playStartDelay = this.startDelay;
                break;

              case 1:
                this.autoRandomSeed ? this._playStartDelay = t.MathUtil.lerp(this.startDelayMin, this.startDelayMax, Math.random()) : (this._rand.seed = this._randomSeeds[2], 
                this._playStartDelay = t.MathUtil.lerp(this.startDelayMin, this.startDelayMax, this._rand.getFloat()), 
                this._randomSeeds[2] = this._rand.seed);
                break;

              default:
                throw new Error("Utils3D: startDelayType is invalid.");
            }
            this._frameRateTime = this._currentTime + this._playStartDelay, this._startUpdateLoopCount = t.Stat.loopCount;
        }
        pause() {
            this._isPaused = !0;
        }
        simulate(e, t = !0) {
            this._simulateUpdate = !0, t ? this._updateParticlesSimulationRestart(e) : (this._isPaused = !1, 
            this._updateParticles(e)), this.pause();
        }
        stop() {
            this._burstsIndex = 0, this._isEmitting = !1, this._emissionTime = 0;
        }
        cloneTo(e) {
            var t = e;
            t._useCustomBounds = this._useCustomBounds, this._customBounds && this._customBounds.cloneTo(t._customBounds), 
            t.duration = this.duration, t.looping = this.looping, t.prewarm = this.prewarm, 
            t.startDelayType = this.startDelayType, t.startDelay = this.startDelay, t.startDelayMin = this.startDelayMin, 
            t.startDelayMax = this.startDelayMax, t._maxStartLifetime = this._maxStartLifetime, 
            t.startLifetimeType = this.startLifetimeType, t.startLifetimeConstant = this.startLifetimeConstant, 
            this.startLifeTimeGradient.cloneTo(t.startLifeTimeGradient), t.startLifetimeConstantMin = this.startLifetimeConstantMin, 
            t.startLifetimeConstantMax = this.startLifetimeConstantMax, this.startLifeTimeGradientMin.cloneTo(t.startLifeTimeGradientMin), 
            this.startLifeTimeGradientMax.cloneTo(t.startLifeTimeGradientMax), t.startSpeedType = this.startSpeedType, 
            t.startSpeedConstant = this.startSpeedConstant, t.startSpeedConstantMin = this.startSpeedConstantMin, 
            t.startSpeedConstantMax = this.startSpeedConstantMax, t.threeDStartSize = this.threeDStartSize, 
            t.startSizeType = this.startSizeType, t.startSizeConstant = this.startSizeConstant, 
            this.startSizeConstantSeparate.cloneTo(t.startSizeConstantSeparate), t.startSizeConstantMin = this.startSizeConstantMin, 
            t.startSizeConstantMax = this.startSizeConstantMax, this.startSizeConstantMinSeparate.cloneTo(t.startSizeConstantMinSeparate), 
            this.startSizeConstantMaxSeparate.cloneTo(t.startSizeConstantMaxSeparate), t.threeDStartRotation = this.threeDStartRotation, 
            t.startRotationType = this.startRotationType, t.startRotationConstant = this.startRotationConstant, 
            this.startRotationConstantSeparate.cloneTo(t.startRotationConstantSeparate), t.startRotationConstantMin = this.startRotationConstantMin, 
            t.startRotationConstantMax = this.startRotationConstantMax, this.startRotationConstantMinSeparate.cloneTo(t.startRotationConstantMinSeparate), 
            this.startRotationConstantMaxSeparate.cloneTo(t.startRotationConstantMaxSeparate), 
            t.randomizeRotationDirection = this.randomizeRotationDirection, t.startColorType = this.startColorType, 
            this.startColorConstant.cloneTo(t.startColorConstant), this.startColorConstantMin.cloneTo(t.startColorConstantMin), 
            this.startColorConstantMax.cloneTo(t.startColorConstantMax), t.gravityModifier = this.gravityModifier, 
            t.simulationSpace = this.simulationSpace, t.scaleMode = this.scaleMode, t.playOnAwake = this.playOnAwake, 
            t.autoRandomSeed = this.autoRandomSeed, t.randomSeed[0] = this.randomSeed[0], t.maxParticles = this.maxParticles, 
            this._emission && (t._emission = this._emission.clone()), this.shape && (t.shape = this.shape.clone()), 
            this.velocityOverLifetime && (t.velocityOverLifetime = this.velocityOverLifetime.clone()), 
            this.colorOverLifetime && (t.colorOverLifetime = this.colorOverLifetime.clone()), 
            this.sizeOverLifetime && (t.sizeOverLifetime = this.sizeOverLifetime.clone()), this.rotationOverLifetime && (t.rotationOverLifetime = this.rotationOverLifetime.clone()), 
            this.textureSheetAnimation && (t.textureSheetAnimation = this.textureSheetAnimation.clone()), 
            t.isPerformanceMode = this.isPerformanceMode, t._isEmitting = this._isEmitting, 
            t._isPlaying = this._isPlaying, t._isPaused = this._isPaused, t._playStartDelay = this._playStartDelay, 
            t._frameRateTime = this._frameRateTime, t._emissionTime = this._emissionTime, t._totalDelayTime = this._totalDelayTime, 
            t._burstsIndex = this._burstsIndex;
        }
        clone() {
            var e = new Jr(null);
            return this.cloneTo(e), e;
        }
    }
    Jr._RANDOMOFFSET = new Uint32Array([ 592910910, 3276756734, 322376503, 306581307, 1793934638, 3737431713, 2527743459, 2368504881, 4085612399, 3774601268, 326370691, 1494990940, 1089181156, 3159510623, 2941263940, 2786374529, 271901988, 4233252447 ]), 
    Jr.halfKSqrtOf2 = .71, Jr.g = 9.8, Jr._maxElapsedTime = 1 / 3, Jr._tempVector30 = new i(), 
    Jr._tempVector31 = new i(), Jr._tempVector32 = new i(), Jr._tempVector33 = new i(), 
    Jr._tempVector34 = new i(), Jr._tempVector35 = new i(), Jr._tempVector36 = new i(), 
    Jr._tempVector37 = new i(), Jr._tempPosition = new i(), Jr._tempDirection = new i(), 
    Jr._type = It._typeCounter++;
    class $r extends Lt {
        constructor() {
            super(null), this._render = new Xr(this), this._particleSystem = new Jr(this);
            var e = this._render._renderElements[0] = new Ot();
            e.setTransform(this._transform), e.render = this._render, e.setGeometry(this._particleSystem), 
            e.material = kr.defaultMaterial;
        }
        static __init__() {
            zr.SHADERDEFINE_RENDERMODE_BILLBOARD = Z.getDefineByName("SPHERHBILLBOARD"), zr.SHADERDEFINE_RENDERMODE_STRETCHEDBILLBOARD = Z.getDefineByName("STRETCHEDBILLBOARD"), 
            zr.SHADERDEFINE_RENDERMODE_HORIZONTALBILLBOARD = Z.getDefineByName("HORIZONTALBILLBOARD"), 
            zr.SHADERDEFINE_RENDERMODE_VERTICALBILLBOARD = Z.getDefineByName("VERTICALBILLBOARD"), 
            zr.SHADERDEFINE_COLOROVERLIFETIME = Z.getDefineByName("COLOROVERLIFETIME"), zr.SHADERDEFINE_RANDOMCOLOROVERLIFETIME = Z.getDefineByName("RANDOMCOLOROVERLIFETIME"), 
            zr.SHADERDEFINE_VELOCITYOVERLIFETIMECONSTANT = Z.getDefineByName("VELOCITYOVERLIFETIMECONSTANT"), 
            zr.SHADERDEFINE_VELOCITYOVERLIFETIMECURVE = Z.getDefineByName("VELOCITYOVERLIFETIMECURVE"), 
            zr.SHADERDEFINE_VELOCITYOVERLIFETIMERANDOMCONSTANT = Z.getDefineByName("VELOCITYOVERLIFETIMERANDOMCONSTANT"), 
            zr.SHADERDEFINE_VELOCITYOVERLIFETIMERANDOMCURVE = Z.getDefineByName("VELOCITYOVERLIFETIMERANDOMCURVE"), 
            zr.SHADERDEFINE_TEXTURESHEETANIMATIONCURVE = Z.getDefineByName("TEXTURESHEETANIMATIONCURVE"), 
            zr.SHADERDEFINE_TEXTURESHEETANIMATIONRANDOMCURVE = Z.getDefineByName("TEXTURESHEETANIMATIONRANDOMCURVE"), 
            zr.SHADERDEFINE_ROTATIONOVERLIFETIME = Z.getDefineByName("ROTATIONOVERLIFETIME"), 
            zr.SHADERDEFINE_ROTATIONOVERLIFETIMESEPERATE = Z.getDefineByName("ROTATIONOVERLIFETIMESEPERATE"), 
            zr.SHADERDEFINE_ROTATIONOVERLIFETIMECONSTANT = Z.getDefineByName("ROTATIONOVERLIFETIMECONSTANT"), 
            zr.SHADERDEFINE_ROTATIONOVERLIFETIMECURVE = Z.getDefineByName("ROTATIONOVERLIFETIMECURVE"), 
            zr.SHADERDEFINE_ROTATIONOVERLIFETIMERANDOMCONSTANTS = Z.getDefineByName("ROTATIONOVERLIFETIMERANDOMCONSTANTS"), 
            zr.SHADERDEFINE_ROTATIONOVERLIFETIMERANDOMCURVES = Z.getDefineByName("ROTATIONOVERLIFETIMERANDOMCURVES"), 
            zr.SHADERDEFINE_SIZEOVERLIFETIMECURVE = Z.getDefineByName("SIZEOVERLIFETIMECURVE"), 
            zr.SHADERDEFINE_SIZEOVERLIFETIMECURVESEPERATE = Z.getDefineByName("SIZEOVERLIFETIMECURVESEPERATE"), 
            zr.SHADERDEFINE_SIZEOVERLIFETIMERANDOMCURVES = Z.getDefineByName("SIZEOVERLIFETIMERANDOMCURVES"), 
            zr.SHADERDEFINE_SIZEOVERLIFETIMERANDOMCURVESSEPERATE = Z.getDefineByName("SIZEOVERLIFETIMERANDOMCURVESSEPERATE"), 
            zr.SHADERDEFINE_RENDERMODE_MESH = Z.getDefineByName("RENDERMODE_MESH"), zr.SHADERDEFINE_SHAPE = Z.getDefineByName("SHAPE");
        }
        get particleSystem() {
            return this._particleSystem;
        }
        get particleRenderer() {
            return this._render;
        }
        _parseModule(e, r) {
            for (var a in r) switch (a) {
              case "bases":
                var n = r.bases;
                for (var i in n) e[i] = n[i];
                break;

              case "vector2s":
                var s = r.vector2s;
                for (var i in s) {
                    var o = e[i], l = s[i];
                    o.setValue(l[0], l[1]), e[i] = o;
                }
                break;

              case "vector3s":
                var h = r.vector3s;
                for (var i in h) {
                    var _ = e[i], d = h[i];
                    _.setValue(d[0], d[1], d[2]), e[i] = _;
                }
                break;

              case "vector4s":
                var c = r.vector4s;
                for (var i in c) {
                    var u = e[i], m = c[i];
                    u.setValue(m[0], m[1], m[2], m[3]), e[i] = u;
                }
                break;

              case "gradientDataNumbers":
                var f = r.gradientDataNumbers;
                for (var i in f) {
                    for (var E = e[i], T = r[i], p = 0, g = T.length; p < g; p++) {
                        var S = T[p];
                        E.add(S.key, S.value);
                    }
                    e[i] = E;
                }
                break;

              case "resources":
                var R = r.resources;
                for (var i in R) e[i] = t.Loader.getRes(R[i]);
                break;

              case "bursts":
                var v = r.bursts;
                for (p = 0, g = v.length; p < g; p++) {
                    var x = v[p];
                    e.addBurst(new Rr(x.time, x.min, x.max));
                }
                break;

              case "randomSeed":
                e.randomSeed[0] = r.randomSeed;
                break;

              case "shapeType":
              case "type":
              case "color":
              case "size":
              case "frame":
              case "startFrame":
              case "angularVelocity":
              case "velocity":
                break;

              default:
                throw "ShurikenParticle3D:unknown type.";
            }
        }
        _parse(e, t) {
            if (super._parse(e, t), e.main) {
                var r = this.particleSystem, a = this.particleRenderer;
                this._parseModule(a, e.renderer), this._parseModule(r, e.main), this._parseModule(r.emission, e.emission);
                var s = e.shape;
                if (s) {
                    var o;
                    switch (s.shapeType) {
                      case 0:
                        o = new br();
                        break;

                      case 1:
                        o = new Br();
                        break;

                      case 2:
                        o = new Vr();
                        break;

                      case 3:
                        o = new Pr();
                        break;

                      case 7:
                        o = new wr();
                        break;

                      default:
                        throw "ShuriKenParticle3D:unknown shape type.";
                    }
                    this._parseModule(o, s), r.shape = o;
                }
                var l = e.velocityOverLifetime;
                if (l) {
                    var h, _ = l.velocity;
                    switch (_.type) {
                      case 0:
                        var d = _.constant;
                        h = yr.createByConstant(d ? new i(d[0], d[1], d[2]) : new i(0, 0, 0));
                        break;

                      case 1:
                        h = yr.createByGradient(this._initParticleVelocity(_.gradientX), this._initParticleVelocity(_.gradientY), this._initParticleVelocity(_.gradientZ));
                        break;

                      case 2:
                        var c = _.constantMin, u = _.constantMax;
                        h = yr.createByRandomTwoConstant(c ? new i(c[0], c[1], c[2]) : new i(0, 0, 0), u ? new i(u[0], u[1], u[2]) : new i(0, 0, 0));
                        break;

                      case 3:
                        h = yr.createByRandomTwoGradient(this._initParticleVelocity(_.gradientXMin), this._initParticleVelocity(_.gradientXMax), this._initParticleVelocity(_.gradientYMin), this._initParticleVelocity(_.gradientYMax), this._initParticleVelocity(_.gradientZMin), this._initParticleVelocity(_.gradientZMax));
                    }
                    var m = new Gr(h);
                    this._parseModule(m, l), r.velocityOverLifetime = m;
                }
                var f = e.colorOverLifetime;
                if (f) {
                    var E, T = f.color;
                    switch (T.type) {
                      case 0:
                        var p = T.constant;
                        E = vr.createByConstant(p ? new n(p[0], p[1], p[2], p[3]) : new n(0, 0, 0, 0));
                        break;

                      case 1:
                        E = vr.createByGradient(this._initParticleColor(T.gradient));
                        break;

                      case 2:
                        var g = T.constantMin, S = T.constantMax;
                        E = vr.createByRandomTwoConstant(g ? new n(g[0], g[1], g[2], g[3]) : new n(0, 0, 0, 0), g ? new n(S[0], S[1], S[2], S[3]) : new n(0, 0, 0, 0));
                        break;

                      case 3:
                        E = vr.createByRandomTwoGradient(this._initParticleColor(T.gradientMin), this._initParticleColor(T.gradientMax));
                    }
                    var R = new xr(E);
                    this._parseModule(R, f), r.colorOverLifetime = R;
                }
                var v = e.sizeOverLifetime;
                if (v) {
                    var x, A = v.size;
                    switch (A.type) {
                      case 0:
                        x = A.separateAxes ? Lr.createByGradientSeparate(this._initParticleSize(A.gradientX), this._initParticleSize(A.gradientY), this._initParticleSize(A.gradientZ)) : Lr.createByGradient(this._initParticleSize(A.gradient));
                        break;

                      case 1:
                        if (A.separateAxes) {
                            var I = A.constantMinSeparate, M = A.constantMaxSeparate;
                            x = Lr.createByRandomTwoConstantSeparate(I ? new i(I[0], I[1], I[2]) : new i(0, 0, 0), M ? new i(M[0], M[1], M[2]) : new i(0, 0, 0));
                        } else x = Lr.createByRandomTwoConstant(A.constantMin || 0, A.constantMax || 0);
                        break;

                      case 2:
                        x = A.separateAxes ? Lr.createByRandomTwoGradientSeparate(this._initParticleSize(A.gradientXMin), this._initParticleSize(A.gradientYMin), this._initParticleSize(A.gradientZMin), this._initParticleSize(A.gradientXMax), this._initParticleSize(A.gradientYMax), this._initParticleSize(A.gradientZMax)) : Lr.createByRandomTwoGradient(this._initParticleSize(A.gradientMin), this._initParticleSize(A.gradientMax));
                    }
                    var D = new Fr(x);
                    this._parseModule(D, v), r.sizeOverLifetime = D;
                }
                var L = e.rotationOverLifetime;
                if (L) {
                    var y, C = L.angularVelocity;
                    switch (C.type) {
                      case 0:
                        if (C.separateAxes) {
                            var O = C.constantSeparate;
                            y = Ir.createByConstantSeparate(O ? new i(O[0], O[1], O[2]) : new i(0, 0, Math.PI / 4));
                        } else y = Ir.createByConstant(C.constant || Math.PI / 4);
                        break;

                      case 1:
                        y = C.separateAxes ? Ir.createByGradientSeparate(this._initParticleRotation(C.gradientX), this._initParticleRotation(C.gradientY), this._initParticleRotation(C.gradientZ)) : Ir.createByGradient(this._initParticleRotation(C.gradient));
                        break;

                      case 2:
                        if (C.separateAxes) {
                            var N = C.constantMinSeparate, P = C.constantMaxSeparate;
                            y = Ir.createByRandomTwoConstantSeparate(N ? new i(N[0], N[1], N[2]) : new i(0, 0, 0), P ? new i(P[0], P[1], P[2]) : new i(0, 0, Math.PI / 4));
                        } else y = Ir.createByRandomTwoConstant(C.constantMin || 0, C.constantMax || Math.PI / 4);
                        break;

                      case 3:
                        C.separateAxes || (y = Ir.createByRandomTwoGradient(this._initParticleRotation(C.gradientMin), this._initParticleRotation(C.gradientMax)));
                    }
                    var w = new Cr(y);
                    this._parseModule(w, L), r.rotationOverLifetime = w;
                }
                var V = e.textureSheetAnimation;
                if (V) {
                    var B, b = V.frame;
                    switch (b.type) {
                      case 0:
                        B = Ar.createByConstant(b.constant);
                        break;

                      case 1:
                        B = Ar.createByOverTime(this._initParticleFrame(b.overTime));
                        break;

                      case 2:
                        B = Ar.createByRandomTwoConstant(b.constantMin, b.constantMax);
                        break;

                      case 3:
                        B = Ar.createByRandomTwoOverTime(this._initParticleFrame(b.overTimeMin), this._initParticleFrame(b.overTimeMax));
                    }
                    var F, U = V.startFrame;
                    switch (U.type) {
                      case 0:
                        F = Ur.createByConstant(U.constant);
                        break;

                      case 1:
                        F = Ur.createByRandomTwoConstant(U.constantMin, U.constantMax);
                    }
                    var H = new Hr(B, F);
                    this._parseModule(H, V), r.textureSheetAnimation = H;
                }
            } else this._parseOld(e);
        }
        _activeHierarchy(e) {
            super._activeHierarchy(e), this.particleSystem.playOnAwake && this.particleSystem.play();
        }
        _inActiveHierarchy(e) {
            super._inActiveHierarchy(e), this.particleSystem.isAlive && this.particleSystem.simulate(0, !0);
        }
        _cloneTo(e, t, r) {
            var a = e, n = a._particleSystem;
            this._particleSystem.cloneTo(n);
            var i = a._render, s = this._render;
            i.sharedMaterials = s.sharedMaterials, i.enable = s.enable, i.renderMode = s.renderMode, 
            i.mesh = s.mesh, i.stretchedBillboardCameraSpeedScale = s.stretchedBillboardCameraSpeedScale, 
            i.stretchedBillboardSpeedScale = s.stretchedBillboardSpeedScale, i.stretchedBillboardLengthScale = s.stretchedBillboardLengthScale, 
            i.sortingFudge = s.sortingFudge, super._cloneTo(e, t, r);
        }
        destroy(e = !0) {
            this.destroyed || (super.destroy(e), this._particleSystem.destroy(), this._particleSystem = null);
        }
        _create() {
            return new $r();
        }
        _parseOld(e) {
            const r = Math.PI / 180;
            var s, o, l, h = this.particleRenderer, _ = e.material;
            _ && (l = t.Loader.getRes(_.path)), h.sharedMaterial = l;
            var d = e.meshPath;
            d && (h.mesh = t.Loader.getRes(d)), h.renderMode = e.renderMode, h.stretchedBillboardCameraSpeedScale = e.stretchedBillboardCameraSpeedScale, 
            h.stretchedBillboardSpeedScale = e.stretchedBillboardSpeedScale, h.stretchedBillboardLengthScale = e.stretchedBillboardLengthScale, 
            h.sortingFudge = e.sortingFudge ? e.sortingFudge : 0;
            var c = this.particleSystem;
            c.isPerformanceMode = e.isPerformanceMode, c.duration = e.duration, c.looping = e.looping, 
            c.prewarm = e.prewarm, c.startDelayType = e.startDelayType, c.startDelay = e.startDelay, 
            c.startDelayMin = e.startDelayMin, c.startDelayMax = e.startDelayMax, c.startLifetimeType = e.startLifetimeType, 
            c.startLifetimeConstant = e.startLifetimeConstant, c.startLifeTimeGradient = $r._initStartLife(e.startLifetimeGradient), 
            c.startLifetimeConstantMin = e.startLifetimeConstantMin, c.startLifetimeConstantMax = e.startLifetimeConstantMax, 
            c.startLifeTimeGradientMin = $r._initStartLife(e.startLifetimeGradientMin), c.startLifeTimeGradientMax = $r._initStartLife(e.startLifetimeGradientMax), 
            c.startSpeedType = e.startSpeedType, c.startSpeedConstant = e.startSpeedConstant, 
            c.startSpeedConstantMin = e.startSpeedConstantMin, c.startSpeedConstantMax = e.startSpeedConstantMax, 
            c.threeDStartSize = e.threeDStartSize, c.startSizeType = e.startSizeType, c.startSizeConstant = e.startSizeConstant;
            var u = e.startSizeConstantSeparate, m = c.startSizeConstantSeparate;
            m.x = u[0], m.y = u[1], m.z = u[2], c.startSizeConstantMin = e.startSizeConstantMin, 
            c.startSizeConstantMax = e.startSizeConstantMax;
            var f = e.startSizeConstantMinSeparate, E = c.startSizeConstantMinSeparate;
            E.x = f[0], E.y = f[1], E.z = f[2];
            var T = e.startSizeConstantMaxSeparate, p = c.startSizeConstantMaxSeparate;
            p.x = T[0], p.y = T[1], p.z = T[2], c.threeDStartRotation = e.threeDStartRotation, 
            c.startRotationType = e.startRotationType, c.startRotationConstant = e.startRotationConstant * r;
            var g = e.startRotationConstantSeparate, S = c.startRotationConstantSeparate;
            S.x = g[0] * r, S.y = g[1] * r, S.z = g[2] * r, c.startRotationConstantMin = e.startRotationConstantMin * r, 
            c.startRotationConstantMax = e.startRotationConstantMax * r;
            var R = e.startRotationConstantMinSeparate, v = c.startRotationConstantMinSeparate;
            v.x = R[0] * r, v.y = R[1] * r, v.z = R[2] * r;
            var x = e.startRotationConstantMaxSeparate, A = c.startRotationConstantMaxSeparate;
            A.x = x[0] * r, A.y = x[1] * r, A.z = x[2] * r, c.randomizeRotationDirection = e.randomizeRotationDirection, 
            c.startColorType = e.startColorType;
            var I = e.startColorConstant, M = c.startColorConstant;
            M.x = I[0], M.y = I[1], M.z = I[2], M.w = I[3];
            var D = e.startColorConstantMin, L = c.startColorConstantMin;
            L.x = D[0], L.y = D[1], L.z = D[2], L.w = D[3];
            var y = e.startColorConstantMax, C = c.startColorConstantMax;
            C.x = y[0], C.y = y[1], C.z = y[2], C.w = y[3], c.gravityModifier = e.gravityModifier, 
            c.simulationSpace = e.simulationSpace, void 0 !== e.simulationSpeed && (c.simulationSpeed = e.simulationSpeed), 
            c.scaleMode = e.scaleMode, c.playOnAwake = e.playOnAwake, c.maxParticles = e.maxParticles;
            var O = e.autoRandomSeed;
            null != O && (c.autoRandomSeed = O);
            var N = e.randomSeed;
            null != N && (c.randomSeed[0] = N);
            var P = e.emission, w = c.emission;
            if (P) {
                w.emissionRate = P.emissionRate;
                var V = P.bursts;
                if (V) for (s = 0, o = V.length; s < o; s++) {
                    var B = V[s];
                    w.addBurst(new Rr(B.time, B.min, B.max));
                }
                w.enable = P.enable;
            } else w.enable = !1;
            var b = e.shape;
            if (b) {
                var F;
                switch (b.shapeType) {
                  case 0:
                    var U;
                    F = U = new br(), U.radius = b.sphereRadius, U.emitFromShell = b.sphereEmitFromShell, 
                    U.randomDirection = b.sphereRandomDirection;
                    break;

                  case 1:
                    var H;
                    F = H = new Br(), H.radius = b.hemiSphereRadius, H.emitFromShell = b.hemiSphereEmitFromShell, 
                    H.randomDirection = b.hemiSphereRandomDirection;
                    break;

                  case 2:
                    var G;
                    F = G = new Vr(), G.angle = b.coneAngle * r, G.radius = b.coneRadius, G.length = b.coneLength, 
                    G.emitType = b.coneEmitType, G.randomDirection = b.coneRandomDirection;
                    break;

                  case 3:
                    var z;
                    F = z = new Pr(), z.x = b.boxX, z.y = b.boxY, z.z = b.boxZ, z.randomDirection = b.boxRandomDirection;
                    break;

                  case 7:
                    var k;
                    F = k = new wr(), k.radius = b.circleRadius, k.arc = b.circleArc * r, k.emitFromEdge = b.circleEmitFromEdge, 
                    k.randomDirection = b.circleRandomDirection;
                    break;

                  default:
                    var W;
                    F = W = new wr(), W.radius = b.circleRadius, W.arc = b.circleArc * r, W.emitFromEdge = b.circleEmitFromEdge, 
                    W.randomDirection = b.circleRandomDirection;
                }
                F.enable = b.enable, c.shape = F;
            }
            var X = e.velocityOverLifetime;
            if (X) {
                var Y, Z = X.velocity;
                switch (Z.type) {
                  case 0:
                    var j = Z.constant;
                    Y = yr.createByConstant(new i(j[0], j[1], j[2]));
                    break;

                  case 1:
                    Y = yr.createByGradient(this._initParticleVelocity(Z.gradientX), this._initParticleVelocity(Z.gradientY), this._initParticleVelocity(Z.gradientZ));
                    break;

                  case 2:
                    var q = Z.constantMin, Q = Z.constantMax;
                    Y = yr.createByRandomTwoConstant(new i(q[0], q[1], q[2]), new i(Q[0], Q[1], Q[2]));
                    break;

                  case 3:
                    Y = yr.createByRandomTwoGradient(this._initParticleVelocity(Z.gradientXMin), this._initParticleVelocity(Z.gradientXMax), this._initParticleVelocity(Z.gradientYMin), this._initParticleVelocity(Z.gradientYMax), this._initParticleVelocity(Z.gradientZMin), this._initParticleVelocity(Z.gradientZMax));
                }
                var K = new Gr(Y);
                K.space = X.space, K.enable = X.enable, c.velocityOverLifetime = K;
            }
            var J = e.colorOverLifetime;
            if (J) {
                var $, ee = J.color;
                switch (ee.type) {
                  case 0:
                    var te = ee.constant;
                    $ = vr.createByConstant(new n(te[0], te[1], te[2], te[3]));
                    break;

                  case 1:
                    $ = vr.createByGradient(this._initParticleColor(ee.gradient));
                    break;

                  case 2:
                    var re = ee.constantMin, ae = ee.constantMax;
                    $ = vr.createByRandomTwoConstant(new n(re[0], re[1], re[2], re[3]), new n(ae[0], ae[1], ae[2], ae[3]));
                    break;

                  case 3:
                    $ = vr.createByRandomTwoGradient(this._initParticleColor(ee.gradientMin), this._initParticleColor(ee.gradientMax));
                }
                var ne = new xr($);
                ne.enable = J.enable, c.colorOverLifetime = ne;
            }
            var ie = e.sizeOverLifetime;
            if (ie) {
                var se, oe = ie.size;
                switch (oe.type) {
                  case 0:
                    se = oe.separateAxes ? Lr.createByGradientSeparate(this._initParticleSize(oe.gradientX), this._initParticleSize(oe.gradientY), this._initParticleSize(oe.gradientZ)) : Lr.createByGradient(this._initParticleSize(oe.gradient));
                    break;

                  case 1:
                    if (oe.separateAxes) {
                        var le = oe.constantMinSeparate, he = oe.constantMaxSeparate;
                        se = Lr.createByRandomTwoConstantSeparate(new i(le[0], le[1], le[2]), new i(he[0], he[1], he[2]));
                    } else se = Lr.createByRandomTwoConstant(oe.constantMin, oe.constantMax);
                    break;

                  case 2:
                    se = oe.separateAxes ? Lr.createByRandomTwoGradientSeparate(this._initParticleSize(oe.gradientXMin), this._initParticleSize(oe.gradientYMin), this._initParticleSize(oe.gradientZMin), this._initParticleSize(oe.gradientXMax), this._initParticleSize(oe.gradientYMax), this._initParticleSize(oe.gradientZMax)) : Lr.createByRandomTwoGradient(this._initParticleSize(oe.gradientMin), this._initParticleSize(oe.gradientMax));
                }
                var _e = new Fr(se);
                _e.enable = ie.enable, c.sizeOverLifetime = _e;
            }
            var de = e.rotationOverLifetime;
            if (de) {
                var ce, ue = de.angularVelocity;
                switch (ue.type) {
                  case 0:
                    if (ue.separateAxes) {
                        var me = ue.constantSeparate;
                        ce = Ir.createByConstantSeparate(new i(me[0] * r, me[1] * r, me[2] * r));
                    } else ce = Ir.createByConstant(ue.constant * r);
                    break;

                  case 1:
                    ce = ue.separateAxes ? Ir.createByGradientSeparate(this._initParticleRotation(ue.gradientX), this._initParticleRotation(ue.gradientY), this._initParticleRotation(ue.gradientZ)) : Ir.createByGradient(this._initParticleRotation(ue.gradient));
                    break;

                  case 2:
                    if (ue.separateAxes) {
                        var fe = ue.constantMinSeparate, Ee = ue.constantMaxSeparate;
                        ce = Ir.createByRandomTwoConstantSeparate(new i(fe[0] * r, fe[1] * r, fe[2] * r), new i(Ee[0] * r, Ee[1] * r, Ee[2] * r));
                    } else ce = Ir.createByRandomTwoConstant(ue.constantMin * r, ue.constantMax * r);
                    break;

                  case 3:
                    ue.separateAxes || (ce = Ir.createByRandomTwoGradient(this._initParticleRotation(ue.gradientMin), this._initParticleRotation(ue.gradientMax)));
                }
                var Te = new Cr(ce);
                Te.enable = de.enable, c.rotationOverLifetime = Te;
            }
            var pe = e.textureSheetAnimation;
            if (pe) {
                var ge, Se = pe.frame;
                switch (Se.type) {
                  case 0:
                    ge = Ar.createByConstant(Se.constant);
                    break;

                  case 1:
                    ge = Ar.createByOverTime(this._initParticleFrame(Se.overTime));
                    break;

                  case 2:
                    ge = Ar.createByRandomTwoConstant(Se.constantMin, Se.constantMax);
                    break;

                  case 3:
                    ge = Ar.createByRandomTwoOverTime(this._initParticleFrame(Se.overTimeMin), this._initParticleFrame(Se.overTimeMax));
                }
                var Re, ve = pe.startFrame;
                switch (ve.type) {
                  case 0:
                    Re = Ur.createByConstant(ve.constant);
                    break;

                  case 1:
                    Re = Ur.createByRandomTwoConstant(ve.constantMin, ve.constantMax);
                }
                var xe = new Hr(ge, Re);
                xe.enable = pe.enable;
                var Ae = pe.tiles;
                xe.tiles = new a(Ae[0], Ae[1]), xe.type = pe.type, xe.randomRow = pe.randomRow;
                var Ie = pe.rowIndex;
                void 0 !== Ie && (xe.rowIndex = Ie), xe.cycles = pe.cycles, c.textureSheetAnimation = xe;
            }
        }
        _initParticleColor(e) {
            var t = new Sr(4, 4);
            if (e) {
                var r, a, n = e.alphas;
                if (n) for (r = 0, a = n.length; r < a; r++) {
                    3 == r && a > 4 && (r = a - 1, console.warn("GradientDataColor warning:alpha data length is large than 4, will ignore the middle data."));
                    var i = n[r];
                    t.addColorAlpha(i.key, i.value);
                } else t.addColorAlpha(0, 1), t.addColorAlpha(1, 1);
                var s = e.rgbs;
                if (s) for (r = 0, a = s.length; r < a; r++) {
                    3 == r && a > 4 && (r = a - 1, console.warn("GradientDataColor warning:rgb data length is large than 4, will ignore the middle data."));
                    var o = s[r], l = o.value;
                    t.addColorRGB(o.key, new We(l[0], l[1], l[2], 1));
                } else t.addColorRGB(0, new We(1, 1, 1, 1)), t.addColorRGB(1, new We(1, 1, 1, 1));
            } else t.addColorAlpha(0, 1), t.addColorAlpha(1, 1), t.addColorRGB(0, new We(1, 1, 1, 1)), 
            t.addColorRGB(1, new We(1, 1, 1, 1));
            return t;
        }
        _initParticleFrame(e) {
            var t = new Mr();
            if (e) for (var r = e.frames, a = 0, n = r.length; a < n; a++) {
                var i = r[a];
                t.add(i.key, i.value);
            } else t.add(0, 0), t.add(1, 1);
            return t;
        }
        static _initStartLife(e) {
            for (var t = new Dr(), r = e.startLifetimes, a = 0, n = r.length; a < n; a++) {
                var i = r[a];
                t.add(i.key, i.value);
            }
            return t;
        }
        _initParticleVelocity(e) {
            for (var t = new Dr(), r = e.velocitys, a = 0, n = r.length; a < n; a++) {
                var i = r[a];
                t.add(i.key, i.value);
            }
            return t;
        }
        _initParticleSize(e) {
            var t = new Dr();
            if (e) for (var r = e.sizes, a = 0, n = r.length; a < n; a++) {
                var i = r[a];
                t.add(i.key, i.value);
            } else t.add(0, 0), t.add(1, 1);
            return t;
        }
        _initParticleRotation(e) {
            for (var t = new Dr(), r = e.angularVelocitys, a = 0, n = r.length; a < n; a++) {
                var i = r[a];
                t.add(i.key, i.value / 180 * Math.PI);
            }
            return t;
        }
    }
    class ea {}
    class ta extends mr {
        constructor(e) {
            super(e), this._bones = [], this._skinnedDataLoopMarks = [], this._localBounds = new At(i._ZERO, i._ZERO), 
            this._cacheAnimationNode = [];
        }
        get localBounds() {
            return this._localBounds;
        }
        set localBounds(e) {
            this._localBounds = e;
        }
        get rootBone() {
            return this._cacheRootBone;
        }
        set rootBone(e) {
            this._cacheRootBone != e && (this._cacheRootBone ? this._cacheRootBone.transform.off(t.Event.TRANSFORM_CHANGED, this, this._onWorldMatNeedChange) : this._owner.transform.off(t.Event.TRANSFORM_CHANGED, this, this._onWorldMatNeedChange), 
            e ? e.transform.on(t.Event.TRANSFORM_CHANGED, this, this._onWorldMatNeedChange) : this._owner.transform.on(t.Event.TRANSFORM_CHANGED, this, this._onWorldMatNeedChange), 
            this._cacheRootBone = e, this._onWorldMatNeedChange(J.TRANSFORM_WORLDPOSITION | J.TRANSFORM_WORLDQUATERNION | J.TRANSFORM_WORLDSCALE));
        }
        get bones() {
            return this._bones;
        }
        _computeSkinnedData() {
            if (this._cacheMesh && this._cacheAvatar || this._cacheMesh && !this._cacheAvatar) for (var e = this._cacheMesh._inverseBindPoses, t = this._cacheMesh._skinnedMatrixCaches, r = 0, a = this._cacheMesh.subMeshCount; r < a; r++) for (var n = this._cacheMesh.getSubMesh(r)._boneIndicesList, i = this._skinnedData[r], s = 0, o = n.length; s < o; s++) {
                var l = n[s];
                this._computeSubSkinnedData(e, l, i[s], t);
            }
        }
        _computeSubSkinnedData(e, r, a, n) {
            for (var i = 0, s = r.length; i < s; i++) {
                var o = r[i];
                if (this._skinnedDataLoopMarks[o] === t.Stat.loopCount) for (var l = n[o], h = this._skinnedData[l.subMeshIndex][l.batchIndex], _ = 16 * l.batchBoneIndex, d = 16 * i, c = 0; c < 16; c++) a[d + c] = h[_ + c]; else this._cacheAvatar ? A._mulMatrixArray(this._cacheAnimationNode[o].transform.getWorldMatrix(), e[o].elements, 0, a, 16 * i) : A._mulMatrixArray(this._bones[o].transform.worldMatrix.elements, e[o].elements, 0, a, 16 * i), 
                this._skinnedDataLoopMarks[o] = t.Stat.loopCount;
            }
        }
        _onWorldMatNeedChange(e) {
            this._boundsChange = !0, this._octreeNode && (this._cacheAvatar ? -1 === this._indexInOctreeMotionList && this._octreeNode._octree.addMotionObject(this) : (e &= J.TRANSFORM_WORLDPOSITION | J.TRANSFORM_WORLDQUATERNION | J.TRANSFORM_WORLDSCALE) && -1 === this._indexInOctreeMotionList && this._octreeNode._octree.addMotionObject(this));
        }
        _createRenderElement() {
            return new Ot();
        }
        _onMeshChange(e) {
            super._onMeshChange(e), this._cacheMesh = e;
            var t = e.subMeshCount;
            this._skinnedData = [], this._skinnedDataLoopMarks.length = e._inverseBindPoses.length;
            for (var r = 0; r < t; r++) for (var a = e.getSubMesh(r)._boneIndicesList, n = a.length, i = this._skinnedData[r] = [], s = 0; s < n; s++) i[s] = new Float32Array(16 * a[s].length);
            this._cacheAvatar && e && this._getCacheAnimationNodes();
        }
        _setCacheAnimator(e) {
            this._cacheAnimator = e, this._shaderValues.addDefine(ea.SHADERDEFINE_BONE), this._setRootNode();
        }
        _calculateBoundingBox() {
            if (this._cacheAvatar) if (this._cacheAnimator && this._rootBone) {
                var e = ta._tempMatrix4x4;
                A.matrix4x4MultiplyMFM(this._cacheAnimator.owner.transform.worldMatrix, this._cacheRootAnimationNode.transform.getWorldMatrix(), e), 
                this._localBounds._tranform(e, this._bounds);
            } else super._calculateBoundingBox(); else this._cacheRootBone ? this._localBounds._tranform(this._cacheRootBone.transform.worldMatrix, this._bounds) : this._localBounds._tranform(this._owner.transform.worldMatrix, this._bounds);
        }
        _renderUpdate(t, r) {
            if (this._cacheAnimator) if (this._computeSkinnedData(), this._cacheAvatar) {
                var a = this._cacheAnimator.owner._transform;
                this._shaderValues.setMatrix4x4($.WORLDMATRIX, a.worldMatrix);
            } else this._shaderValues.setMatrix4x4($.WORLDMATRIX, b.DEFAULT); else this._shaderValues.setMatrix4x4($.WORLDMATRIX, r.worldMatrix);
            this._probReflection && (this._reflectionMode == e.ReflectionProbeMode.off ? (this._shaderValues.removeDefine(ne.SHADERDEFINE_SPECCUBE_BOX_PROJECTION), 
            this._shaderValues.setVector(Lt.REFLECTIONCUBE_HDR_PARAMS, Bt.defaultTextureHDRDecodeValues), 
            this._shaderValues.setTexture(Lt.REFLECTIONTEXTURE, gt.blackTexture)) : (this._probReflection.boxProjection ? (this._shaderValues.addDefine(ne.SHADERDEFINE_SPECCUBE_BOX_PROJECTION), 
            this._shaderValues.setVector3(Lt.REFLECTIONCUBE_PROBEPOSITION, this._probReflection.probePosition), 
            this._shaderValues.setVector3(Lt.REFLECTIONCUBE_PROBEBOXMAX, this._probReflection.boundsMax), 
            this._shaderValues.setVector3(Lt.REFLECTIONCUBE_PROBEBOXMIN, this._probReflection.boundsMin)) : this._shaderValues.removeDefine(ne.SHADERDEFINE_SPECCUBE_BOX_PROJECTION), 
            this._shaderValues.setTexture(Lt.REFLECTIONTEXTURE, this._probReflection.reflectionTexture), 
            this._shaderValues.setVector(Lt.REFLECTIONCUBE_HDR_PARAMS, this._probReflection.reflectionHDRParams)));
        }
        _renderUpdateWithCamera(e, t) {
            var r = e.projectionViewMatrix;
            if (this._cacheAnimator) if (this._cacheAvatar) {
                var a = this._cacheAnimator.owner._transform;
                b.multiply(r, a.worldMatrix, this._projectionViewWorldMatrix), this._shaderValues.setMatrix4x4($.MVPMATRIX, this._projectionViewWorldMatrix);
            } else this._shaderValues.setMatrix4x4($.MVPMATRIX, r); else b.multiply(r, t.worldMatrix, this._projectionViewWorldMatrix), 
            this._shaderValues.setMatrix4x4($.MVPMATRIX, this._projectionViewWorldMatrix);
        }
        _destroy() {
            super._destroy(), this._cacheAvatar ? this._cacheRootAnimationNode && this._cacheRootAnimationNode.transform.off(t.Event.TRANSFORM_CHANGED, this, this._onWorldMatNeedChange) : this._cacheRootBone ? !this._cacheRootBone.destroyed && this._cacheRootBone.transform.off(t.Event.TRANSFORM_CHANGED, this, this._onWorldMatNeedChange) : this._owner && !this._owner.destroyed && this._owner.transform.off(t.Event.TRANSFORM_CHANGED, this, this._onWorldMatNeedChange);
        }
        get bounds() {
            return (this._boundsChange || this._cacheAvatar) && (this._calculateBoundingBox(), 
            this._boundsChange = !1), this._bounds;
        }
        _setRootBone(e) {
            this._rootBone = e, this._setRootNode();
        }
        _setRootNode() {
            var e;
            e = this._cacheAnimator && this._rootBone && this._cacheAvatar ? this._cacheAnimator._avatarNodeMap[this._rootBone] : null, 
            this._cacheRootAnimationNode != e && (this._onWorldMatNeedChange(J.TRANSFORM_WORLDPOSITION | J.TRANSFORM_WORLDQUATERNION | J.TRANSFORM_WORLDSCALE), 
            this._owner.transform.off(t.Event.TRANSFORM_CHANGED, this, this._onWorldMatNeedChange), 
            this._cacheRootAnimationNode && this._cacheRootAnimationNode.transform.off(t.Event.TRANSFORM_CHANGED, this, this._onWorldMatNeedChange), 
            e && e.transform.on(t.Event.TRANSFORM_CHANGED, this, this._onWorldMatNeedChange), 
            this._cacheRootAnimationNode = e);
        }
        _getCacheAnimationNodes() {
            var e = this._cacheMesh._boneNames, t = this._cacheMesh._inverseBindPoses.length;
            this._cacheAnimationNode.length = t;
            for (var r = this._cacheAnimator._avatarNodeMap, a = 0; a < t; a++) {
                var n = r[e[a]];
                this._cacheAnimationNode[a] = n;
            }
        }
        _setCacheAvatar(e) {
            this._cacheAvatar !== e && (this._cacheMesh ? (this._cacheAvatar = e, e && (this._shaderValues.addDefine(ea.SHADERDEFINE_BONE), 
            this._getCacheAnimationNodes())) : this._cacheAvatar = e, this._setRootNode());
        }
    }
    ta._tempMatrix4x4 = new b();
    class ra extends Lt {
        constructor(e = null, t = null) {
            super(t), this._meshFilter = new fr(this), this._render = new ta(this), e && (this._meshFilter.sharedMesh = e);
        }
        static __init__() {
            ea.SHADERDEFINE_BONE = Z.getDefineByName("BONE"), ea.SHADERDEFINE_SIMPLEBONE = Z.getDefineByName("SIMPLEBONE");
        }
        get meshFilter() {
            return this._meshFilter;
        }
        get skinnedMeshRenderer() {
            return this._render;
        }
        _parse(e, r) {
            super._parse(e, r);
            var a = this.skinnedMeshRenderer, s = e.lightmapIndex;
            null != s && (a.lightmapIndex = s);
            var o, l = e.lightmapScaleOffset;
            if (l && (a.lightmapScaleOffset = new n(l[0], l[1], l[2], l[3])), null != e.enableRender && (a.enable = e.enableRender), 
            null != e.receiveShadows && (a.receiveShadow = e.receiveShadows), null != e.castShadow && (a.castShadow = e.castShadow), 
            o = e.meshPath) {
                var h = t.Loader.getRes(o);
                h && (this.meshFilter.sharedMesh = h);
            }
            var _ = e.materials;
            if (_) {
                var d = a.sharedMaterials, c = _.length;
                d.length = c;
                for (var u = 0; u < c; u++) d[u] = t.Loader.getRes(_[u].path);
                a.sharedMaterials = d;
            }
            var m = e.boundBox, f = m.min, E = m.max;
            if (a.localBounds.setMin(new i(f[0], f[1], f[2])), a.localBounds.setMax(new i(E[0], E[1], E[2])), 
            r) {
                var T = e.rootBone;
                a.rootBone = r[T];
                var p, g = e.bones;
                for (u = 0, p = g.length; u < p; u++) a.bones.push(r[g[u]]);
            } else e.rootBone && a._setRootBone(e.rootBone);
        }
        _changeHierarchyAnimator(e) {
            super._changeHierarchyAnimator(e), this.skinnedMeshRenderer._setCacheAnimator(e);
        }
        _changeAnimatorAvatar(e) {
            this.skinnedMeshRenderer._setCacheAvatar(e);
        }
        _cloneTo(e, t, r) {
            var a = e;
            a.meshFilter.sharedMesh = this.meshFilter.sharedMesh;
            var n = this._render, i = a._render;
            i.enable = n.enable, i.sharedMaterials = n.sharedMaterials, i.castShadow = n.castShadow;
            var s = n.lightmapScaleOffset;
            s && (i.lightmapScaleOffset = s.clone()), i.receiveShadow = n.receiveShadow, i.sortingFudge = n.sortingFudge, 
            i._rootBone = n._rootBone;
            var o = n.bones, l = i.bones, h = o.length;
            l.length = h;
            var _ = n.rootBone;
            if (_) {
                var d = A._getHierarchyPath(t, _, ra._tempArray0);
                i.rootBone = d ? A._getNodeByHierarchyPath(r, d) : _;
            }
            for (var c = 0; c < o.length; c++) d = A._getHierarchyPath(t, o[c], ra._tempArray0), 
            l[c] = d ? A._getNodeByHierarchyPath(r, d) : o[c];
            var u = n.localBounds;
            u && u.cloneTo(i.localBounds), super._cloneTo(e, t, r);
        }
        destroy(e = !0) {
            this.destroyed || (super.destroy(e), this._meshFilter.destroy());
        }
        _create() {
            return new ra();
        }
    }
    ra._tempArray0 = [], ra.BONES = Z.propertyNameToID("u_Bones"), ra.SIMPLE_SIMPLEANIMATORTEXTURE = Z.propertyNameToID("u_SimpleAnimatorTexture"), 
    ra.SIMPLE_SIMPLEANIMATORPARAMS = Z.propertyNameToID("u_SimpleAnimatorParams"), ra.SIMPLE_SIMPLEANIMATORTEXTURESIZE = Z.propertyNameToID("u_SimpleAnimatorTextureSize");
    class aa extends ue {
        constructor() {
            super(), this.setShaderName("Trail"), this._color = new n(1, 1, 1, 1), this._shaderValues.setVector(aa.TILINGOFFSET, new n(1, 1, 0, 0)), 
            this._shaderValues.setVector(aa.TINTCOLOR, new n(1, 1, 1, 1)), this.renderMode = aa.RENDERMODE_ALPHABLENDED;
        }
        static __initDefine__() {
            aa.SHADERDEFINE_MAINTEXTURE = Z.getDefineByName("MAINTEXTURE"), aa.SHADERDEFINE_ADDTIVEFOG = Z.getDefineByName("ADDTIVEFOG");
        }
        get _TintColorR() {
            return this._color.x;
        }
        set _TintColorR(e) {
            this._color.x = e, this.color = this._color;
        }
        get _TintColorG() {
            return this._color.y;
        }
        set _TintColorG(e) {
            this._color.y = e, this.color = this._color;
        }
        get _TintColorB() {
            return this._color.z;
        }
        set _TintColorB(e) {
            this._color.z = e, this.color = this._color;
        }
        get _TintColorA() {
            return this._color.w;
        }
        set _TintColorA(e) {
            this._color.w = e, this.color = this._color;
        }
        get _MainTex_STX() {
            return this._shaderValues.getVector(aa.TILINGOFFSET).x;
        }
        set _MainTex_STX(e) {
            var t = this._shaderValues.getVector(aa.TILINGOFFSET);
            t.x = e, this.tilingOffset = t;
        }
        get _MainTex_STY() {
            return this._shaderValues.getVector(aa.TILINGOFFSET).y;
        }
        set _MainTex_STY(e) {
            var t = this._shaderValues.getVector(aa.TILINGOFFSET);
            t.y = e, this.tilingOffset = t;
        }
        get _MainTex_STZ() {
            return this._shaderValues.getVector(aa.TILINGOFFSET).z;
        }
        set _MainTex_STZ(e) {
            var t = this._shaderValues.getVector(aa.TILINGOFFSET);
            t.z = e, this.tilingOffset = t;
        }
        get _MainTex_STW() {
            return this._shaderValues.getVector(aa.TILINGOFFSET).w;
        }
        set _MainTex_STW(e) {
            var t = this._shaderValues.getVector(aa.TILINGOFFSET);
            t.w = e, this.tilingOffset = t;
        }
        set renderMode(e) {
            switch (e) {
              case aa.RENDERMODE_ADDTIVE:
                this.renderQueue = ue.RENDERQUEUE_TRANSPARENT, this.alphaTest = !1, this.depthWrite = !1, 
                this.cull = fe.CULL_NONE, this.blend = fe.BLEND_ENABLE_ALL, this.blendSrc = fe.BLENDPARAM_SRC_ALPHA, 
                this.blendDst = fe.BLENDPARAM_ONE, this.depthTest = fe.DEPTHTEST_LESS, this._shaderValues.addDefine(aa.SHADERDEFINE_ADDTIVEFOG);
                break;

              case aa.RENDERMODE_ALPHABLENDED:
                this.renderQueue = ue.RENDERQUEUE_TRANSPARENT, this.alphaTest = !1, this.depthWrite = !1, 
                this.cull = fe.CULL_NONE, this.blend = fe.BLEND_ENABLE_ALL, this.blendSrc = fe.BLENDPARAM_SRC_ALPHA, 
                this.blendDst = fe.BLENDPARAM_ONE_MINUS_SRC_ALPHA, this.depthTest = fe.DEPTHTEST_LESS, 
                this._shaderValues.removeDefine(aa.SHADERDEFINE_ADDTIVEFOG);
                break;

              default:
                throw new Error("TrailMaterial : renderMode value error.");
            }
        }
        get colorR() {
            return this._TintColorR;
        }
        set colorR(e) {
            this._TintColorR = e;
        }
        get colorG() {
            return this._TintColorG;
        }
        set colorG(e) {
            this._TintColorG = e;
        }
        get colorB() {
            return this._TintColorB;
        }
        set colorB(e) {
            this._TintColorB = e;
        }
        get colorA() {
            return this._TintColorA;
        }
        set colorA(e) {
            this._TintColorA = e;
        }
        get color() {
            return this._shaderValues.getVector(aa.TINTCOLOR);
        }
        set color(e) {
            this._shaderValues.setVector(aa.TINTCOLOR, e);
        }
        get texture() {
            return this._shaderValues.getTexture(aa.MAINTEXTURE);
        }
        set texture(e) {
            e ? this._shaderValues.addDefine(aa.SHADERDEFINE_MAINTEXTURE) : this._shaderValues.removeDefine(aa.SHADERDEFINE_MAINTEXTURE), 
            this._shaderValues.setTexture(aa.MAINTEXTURE, e);
        }
        get tilingOffsetX() {
            return this._MainTex_STX;
        }
        set tilingOffsetX(e) {
            this._MainTex_STX = e;
        }
        get tilingOffsetY() {
            return this._MainTex_STY;
        }
        set tilingOffsetY(e) {
            this._MainTex_STY = e;
        }
        get tilingOffsetZ() {
            return this._MainTex_STZ;
        }
        set tilingOffsetZ(e) {
            this._MainTex_STZ = e;
        }
        get tilingOffsetW() {
            return this._MainTex_STW;
        }
        set tilingOffsetW(e) {
            this._MainTex_STW = e;
        }
        get tilingOffset() {
            return this._shaderValues.getVector(aa.TILINGOFFSET);
        }
        set tilingOffset(e) {
            e ? this._shaderValues.setVector(aa.TILINGOFFSET, e) : this._shaderValues.getVector(aa.TILINGOFFSET).setValue(1, 1, 0, 0);
        }
        clone() {
            var e = new aa();
            return this.cloneTo(e), e;
        }
    }
    aa.RENDERMODE_ALPHABLENDED = 0, aa.RENDERMODE_ADDTIVE = 1, aa.MAINTEXTURE = Z.propertyNameToID("u_MainTexture"), 
    aa.TINTCOLOR = Z.propertyNameToID("u_MainColor"), aa.TILINGOFFSET = Z.propertyNameToID("u_TilingOffset");
    class na {}
    na.Stretch = 0, na.Tile = 1, (nr = e.TrailAlignment || (e.TrailAlignment = {}))[nr.View = 0] = "View", 
    nr[nr.TransformZ = 1] = "TransformZ";
    class ia {
        static get vertexDeclaration1() {
            return ia._vertexDeclaration1;
        }
        static get vertexDeclaration2() {
            return ia._vertexDeclaration2;
        }
        get vertexDeclaration() {
            return ia._vertexDeclaration1;
        }
        static __init__() {
            ia._vertexDeclaration1 = new U(32, [ new H(0, B.Vector3, ia.TRAIL_POSITION0), new H(12, B.Vector3, ia.TRAIL_OFFSETVECTOR), new H(24, B.Single, ia.TRAIL_TIME0), new H(28, B.Single, ia.TRAIL_TEXTURECOORDINATE0Y) ]), 
            ia._vertexDeclaration2 = new U(20, [ new H(0, B.Single, ia.TRAIL_TEXTURECOORDINATE0X), new H(4, B.Color, ia.TRAIL_COLOR) ]);
        }
    }
    ia.TRAIL_POSITION0 = 0, ia.TRAIL_OFFSETVECTOR = 1, ia.TRAIL_TIME0 = 2, ia.TRAIL_TEXTURECOORDINATE0Y = 3, 
    ia.TRAIL_TEXTURECOORDINATE0X = 4, ia.TRAIL_COLOR = 5;
    class sa extends It {
        constructor(e) {
            super(), this._floatCountPerVertices1 = 8, this._floatCountPerVertices2 = 5, this._increaseSegementCount = 16, 
            this._activeIndex = 0, this._endIndex = 0, this._needAddFirstVertex = !1, this._isTempEndVertex = !1, 
            this._vertices1 = null, this._vertices2 = null, this._lastFixedVertexPosition = new i(), 
            this._bufferState = new G(), this.tmpColor = new We(), this._disappearBoundsMode = !1, 
            this._owner = e, this._segementCount = this._increaseSegementCount, this._resizeData(this._segementCount, this._bufferState);
            var t = this._owner._owner.trailRenderer.bounds, r = this._owner._owner.transform.position;
            t.setMin(r), t.setMax(r);
        }
        _resizeData(e, r) {
            this._subBirthTime = new Float32Array(e), this._subDistance = new Float64Array(e);
            var a = t.LayaGL.instance, n = 2 * e, i = ia.vertexDeclaration1, s = ia.vertexDeclaration2, o = [], l = n * i.vertexStride, h = n * s.vertexStride, _ = l + h;
            this._vertices1 = new Float32Array(n * this._floatCountPerVertices1), this._vertices2 = new Float32Array(n * this._floatCountPerVertices2), 
            this._vertexBuffer1 = new V(l, a.STATIC_DRAW, !1), this._vertexBuffer1.vertexDeclaration = i, 
            this._vertexBuffer2 = new V(h, a.DYNAMIC_DRAW, !1), this._vertexBuffer2.vertexDeclaration = s, 
            o.push(this._vertexBuffer1), o.push(this._vertexBuffer2), r.bind(), r.applyVertexBuffers(o), 
            r.unBind(), t.Resource._addMemory(_, _);
        }
        _resetData() {
            var e = this._endIndex - this._activeIndex, r = new Float32Array(this._vertices1.buffer, 2 * this._floatCountPerVertices1 * this._activeIndex * 4, 2 * this._floatCountPerVertices1 * e), a = new Float32Array(this._vertices2.buffer, 2 * this._floatCountPerVertices2 * this._activeIndex * 4, 2 * this._floatCountPerVertices2 * e), n = new Float64Array(this._subDistance.buffer, 8 * this._activeIndex, e), i = new Float32Array(this._subBirthTime.buffer, 4 * this._activeIndex, e);
            if (e === this._segementCount) {
                var s = this._vertexBuffer1._byteLength + this._vertexBuffer2._byteLength;
                t.Resource._addMemory(-s, -s), this._vertexBuffer1.destroy(), this._vertexBuffer2.destroy(), 
                this._segementCount += this._increaseSegementCount, this._resizeData(this._segementCount, this._bufferState);
            }
            this._vertices1.set(r, 0), this._vertices2.set(a, 0), this._subDistance.set(n, 0), 
            this._subBirthTime.set(i, 0), this._endIndex = e, this._activeIndex = 0, this._vertexBuffer1.setData(this._vertices1.buffer, 0, 2 * this._floatCountPerVertices1 * this._activeIndex * 4, 2 * this._floatCountPerVertices1 * e * 4), 
            this._vertexBuffer2.setData(this._vertices2.buffer, 0, 2 * this._floatCountPerVertices2 * this._activeIndex * 4, 2 * this._floatCountPerVertices2 * e * 4);
        }
        _updateTrail(e, t, r) {
            i.equals(t, r) || (this._endIndex - this._activeIndex == 0 ? this._addTrailByFirstPosition(e, r) : this._addTrailByNextPosition(e, r));
        }
        _addTrailByFirstPosition(e, t) {
            this._endIndex === this._segementCount && this._resetData(), this._subDistance[this._endIndex] = 0, 
            this._subBirthTime[this._endIndex] = this._owner._curtime, this._endIndex++, t.cloneTo(this._lastFixedVertexPosition), 
            this._needAddFirstVertex = !0;
        }
        _addTrailByNextPosition(t, a) {
            var n = sa._tempVector30, s = sa._tempVector31;
            switch (this._owner.alignment) {
              case e.TrailAlignment.View:
                var o = t.viewMatrix;
                i.transformCoordinate(a, o, sa._tempVector33), i.transformCoordinate(this._lastFixedVertexPosition, o, sa._tempVector34), 
                i.subtract(sa._tempVector33, sa._tempVector34, n), i.cross(sa._tempVector33, n, s);
                break;

              case e.TrailAlignment.TransformZ:
                i.subtract(a, this._lastFixedVertexPosition, n);
                var l = sa._tempVector32;
                this._owner._owner.transform.getForward(l), i.cross(n, l, s);
            }
            i.normalize(s, s), i.scale(s, this._owner.widthMultiplier / 2, s);
            var h, _, d = i.scalarLength(n);
            this._needAddFirstVertex && (this._updateVerticesByPositionData(a, s, this._endIndex - 1), 
            this._needAddFirstVertex = !1), d - this._owner.minVertexDistance >= r.zeroTolerance ? (this._isTempEndVertex ? (h = this._endIndex - 1, 
            _ = d - this._subDistance[h], this._updateVerticesByPosition(a, s, d, h), this._owner._totalLength += _) : (this._endIndex === this._segementCount && this._resetData(), 
            this._updateVerticesByPosition(a, s, d, this._endIndex), this._owner._totalLength += d, 
            this._endIndex++), a.cloneTo(this._lastFixedVertexPosition), this._isTempEndVertex = !1) : (this._isTempEndVertex ? (h = this._endIndex - 1, 
            _ = d - this._subDistance[h], this._updateVerticesByPosition(a, s, d, h), this._owner._totalLength += _) : (this._endIndex === this._segementCount && this._resetData(), 
            this._updateVerticesByPosition(a, s, d, this._endIndex), this._owner._totalLength += d, 
            this._endIndex++), this._isTempEndVertex = !0);
        }
        _updateVerticesByPositionData(e, t, r) {
            var a = 2 * this._floatCountPerVertices1 * r, n = this._owner._curtime;
            this._vertices1[a] = e.x, this._vertices1[a + 1] = e.y, this._vertices1[a + 2] = e.z, 
            this._vertices1[a + 3] = -t.x, this._vertices1[a + 4] = -t.y, this._vertices1[a + 5] = -t.z, 
            this._vertices1[a + 6] = n, this._vertices1[a + 7] = 1, this._vertices1[a + 8] = e.x, 
            this._vertices1[a + 9] = e.y, this._vertices1[a + 10] = e.z, this._vertices1[a + 11] = t.x, 
            this._vertices1[a + 12] = t.y, this._vertices1[a + 13] = t.z, this._vertices1[a + 14] = n, 
            this._vertices1[a + 15] = 0;
            var s = this._owner._owner.trailRenderer.bounds, o = s.getMin(), l = s.getMax(), h = sa._tempVector35, _ = sa._tempVector36, d = sa._tempVector32;
            i.add(e, t, h), i.subtract(e, t, _), i.min(_, h, d), i.min(o, d, o), s.setMin(o), 
            i.max(h, _, d), i.max(l, d, l), s.setMax(l);
            var c = 2 * this._floatCountPerVertices1;
            this._vertexBuffer1.setData(this._vertices1.buffer, 4 * a, 4 * a, 4 * c);
        }
        _updateVerticesByPosition(e, t, r, a) {
            this._updateVerticesByPositionData(e, t, a), this._subDistance[a] = r, this._subBirthTime[a] = this._owner._curtime;
        }
        _updateVertexBufferUV() {
            var e, t, r;
            if (this._disappearBoundsMode) {
                e = this._owner._owner.trailRenderer.bounds;
                var a = this._owner._owner.transform.position;
                e.setMin(a), e.setMax(a), t = e.getMin(), r = e.getMax();
            }
            for (var n = this._endIndex, s = 0, o = this._owner.colorGradient, l = o.colorAlphaKeysCount - 1, h = o.colorRGBKeysCount - 1, _ = this._owner._totalLength, d = 2 * this._floatCountPerVertices2, c = this._activeIndex; c < n; c++) {
                var u, m;
                c !== this._activeIndex && (s += this._subDistance[c]), this._owner.textureMode == na.Stretch ? m = u = 1 - s / _ : (m = 1 - s / _, 
                u = 1 - (_ - s)), h = o.evaluateColorRGB(m, this.tmpColor, h, !0), l = o.evaluateColorAlpha(m, this.tmpColor, l, !0);
                var f = c * d;
                if (this._vertices2[f + 0] = u, this._vertices2[f + 1] = this.tmpColor.r, this._vertices2[f + 2] = this.tmpColor.g, 
                this._vertices2[f + 3] = this.tmpColor.b, this._vertices2[f + 4] = this.tmpColor.a, 
                this._vertices2[f + 5] = u, this._vertices2[f + 6] = this.tmpColor.r, this._vertices2[f + 7] = this.tmpColor.g, 
                this._vertices2[f + 8] = this.tmpColor.b, this._vertices2[f + 9] = this.tmpColor.a, 
                this._disappearBoundsMode) {
                    var E = 2 * this._floatCountPerVertices1 * c, T = sa._tempVector32, p = sa._tempVector33, g = sa._tempVector34;
                    T.setValue(this._vertices1[E + 0], this._vertices1[E + 1], this._vertices1[E + 2]), 
                    p.setValue(this._vertices1[E + 3], this._vertices1[E + 4], this._vertices1[E + 5]), 
                    i.add(T, p, g), i.min(g, t, t), i.max(g, r, r), i.subtract(T, p, g), i.min(g, t, t), 
                    i.max(g, r, r);
                }
            }
            this._disappearBoundsMode && (e.setMin(t), e.setMax(r), this._disappearBoundsMode = !1);
            var S = this._activeIndex * d;
            this._vertexBuffer2.setData(this._vertices2.buffer, 4 * S, 4 * S, 4 * (n * d - S));
        }
        _updateDisappear() {
            for (var e = this._endIndex, t = this._activeIndex; t < e && this._owner._curtime - this._subBirthTime[t] >= this._owner.time + r.zeroTolerance; t++) {
                var a = t + 1;
                if (a !== e && (this._owner._totalLength -= this._subDistance[a]), this._isTempEndVertex && a === e - 1) {
                    var n = this._lastFixedVertexPosition;
                    n.x = this._vertices1[0], n.y = this._vertices1[1], n.z = this._vertices1[2], this._isTempEndVertex = !1;
                }
                this._activeIndex++, this._disappearBoundsMode = !0;
            }
        }
        _getType() {
            return sa._type;
        }
        _prepareRender(e) {
            return this._endIndex - this._activeIndex > 1;
        }
        _render(e) {
            this._bufferState.bind();
            var r = t.LayaGL.instance, a = 2 * this._activeIndex, n = 2 * this._endIndex - a;
            r.drawArrays(r.TRIANGLE_STRIP, a, n), t.Stat.renderBatches++, t.Stat.trianglesFaces += n - 2;
        }
        destroy() {
            super.destroy();
            var e = this._vertexBuffer1._byteLength + this._vertexBuffer2._byteLength;
            t.Resource._addMemory(-e, -e), this._bufferState.destroy(), this._vertexBuffer1.destroy(), 
            this._vertexBuffer2.destroy(), this._bufferState = null, this._vertices1 = null, 
            this._vertexBuffer1 = null, this._vertices2 = null, this._vertexBuffer2 = null, 
            this._subBirthTime = null, this._subDistance = null, this._lastFixedVertexPosition = null, 
            this._disappearBoundsMode = !1;
        }
        clear() {
            this._activeIndex = 0, this._endIndex = 0, this._disappearBoundsMode = !1, this._subBirthTime.fill(0), 
            this._subDistance.fill(0), this._segementCount = 0, this._isTempEndVertex = !1, 
            this._needAddFirstVertex = !1, this._lastFixedVertexPosition.setValue(0, 0, 0);
        }
    }
    sa.ALIGNMENT_VIEW = 0, sa.ALIGNMENT_TRANSFORM_Z = 1, sa._tempVector30 = new i(), 
    sa._tempVector31 = new i(), sa._tempVector32 = new i(), sa._tempVector33 = new i(), 
    sa._tempVector34 = new i(), sa._tempVector35 = new i(), sa._tempVector36 = new i(), 
    sa._type = It._typeCounter++;
    class oa {
        constructor(e) {
            this._totalLength = 0, this._lastPosition = new i(), this._curtime = 0, this.alignment = oa.ALIGNMENT_VIEW, 
            this._owner = e, this._initDefaultData(), this.addRenderElement();
        }
        get time() {
            return this._time;
        }
        set time(e) {
            this._time = e, this._owner._render._shaderValues.setNumber(oa.LIFETIME, e);
        }
        get minVertexDistance() {
            return this._minVertexDistance;
        }
        set minVertexDistance(e) {
            this._minVertexDistance = e;
        }
        get widthMultiplier() {
            return this._widthMultiplier;
        }
        set widthMultiplier(e) {
            this._widthMultiplier = e;
        }
        get widthCurve() {
            return this._widthCurve;
        }
        set widthCurve(e) {
            this._widthCurve = e;
            var t, r, a = new Float32Array(4 * e.length), n = 0;
            for (t = 0, r = e.length; t < r; t++) a[n++] = e[t].time, a[n++] = e[t].inTangent, 
            a[n++] = e[t].outTangent, a[n++] = e[t].value;
            this._owner._render._shaderValues.setBuffer(oa.WIDTHCURVE, a), this._owner._render._shaderValues.setInt(oa.WIDTHCURVEKEYLENGTH, e.length);
        }
        get colorGradient() {
            return this._colorGradient;
        }
        set colorGradient(e) {
            this._colorGradient = e;
        }
        get textureMode() {
            return this._textureMode;
        }
        set textureMode(e) {
            this._textureMode = e;
        }
        addRenderElement() {
            var e = this._owner._render, t = e._renderElements, r = e.sharedMaterials[0];
            r || (r = aa.defaultMaterial);
            var a = new Ot();
            a.setTransform(this._owner._transform), a.render = e, a.material = r, this._trialGeometry = new sa(this), 
            a.setGeometry(this._trialGeometry), t.push(a);
        }
        _update(e) {
            var t = this._owner._render;
            this._curtime += e.scene.timer._delta / 1e3, t._shaderValues.setNumber(oa.CURTIME, this._curtime);
            var r = this._owner.transform.position, a = t._renderElements[0]._geometry;
            a._updateDisappear(), a._updateTrail(e.camera, this._lastPosition, r), a._updateVertexBufferUV(), 
            r.cloneTo(this._lastPosition);
        }
        _initDefaultData() {
            this.time = 5, this.minVertexDistance = .1, this.widthMultiplier = 1, this.textureMode = na.Stretch;
            var e = [], t = new f();
            t.time = 0, t.inTangent = 0, t.outTangent = 0, t.value = 1, e.push(t);
            var r = new f();
            r.time = 1, r.inTangent = 0, r.outTangent = 0, r.value = 1, e.push(r), this.widthCurve = e;
            var a = new Sr(2, 2);
            a.mode = gr.Blend, a.addColorRGB(0, We.WHITE), a.addColorRGB(1, We.WHITE), a.addColorAlpha(0, 1), 
            a.addColorAlpha(1, 1), this.colorGradient = a;
        }
        destroy() {
            this._trialGeometry.destroy(), this._trialGeometry = null, this._widthCurve = null, 
            this._colorGradient = null;
        }
        clear() {
            this._trialGeometry.clear(), this._lastPosition.setValue(0, 0, 0), this._curtime = 0, 
            this._totalLength = 0;
        }
    }
    oa.CURTIME = Z.propertyNameToID("u_CurTime"), oa.LIFETIME = Z.propertyNameToID("u_LifeTime"), 
    oa.WIDTHCURVE = Z.propertyNameToID("u_WidthCurve"), oa.WIDTHCURVEKEYLENGTH = Z.propertyNameToID("u_WidthCurveKeyLength"), 
    oa.ALIGNMENT_VIEW = 0, oa.ALIGNMENT_TRANSFORM_Z = 1;
    class la extends bt {
        constructor(e) {
            super(e), this._projectionViewWorldMatrix = new b();
        }
        _calculateBoundingBox() {}
        _needRender(e, t) {
            return this._owner.trailFilter._update(t), !e || e.intersects(this.bounds._getBoundBox());
        }
        _updateForNative(e) {
            this._owner.trailFilter._update(e);
        }
        _renderUpdate(e, t) {
            super._renderUpdate(e, t);
        }
        _renderUpdateWithCamera(e, t) {
            var r = e.projectionViewMatrix;
            t ? (b.multiply(r, t.worldMatrix, this._projectionViewWorldMatrix), this._shaderValues.setMatrix4x4($.MVPMATRIX, this._projectionViewWorldMatrix)) : this._shaderValues.setMatrix4x4($.MVPMATRIX, r);
        }
    }
    class ha extends Lt {
        constructor(e = null) {
            super(e), this._render = new la(this), this._geometryFilter = new oa(this);
        }
        static __init__() {}
        get trailFilter() {
            return this._geometryFilter;
        }
        get trailRenderer() {
            return this._render;
        }
        _parse(e, r) {
            super._parse(e, r);
            var a, n, i = this._render, s = this._geometryFilter, o = e.materials;
            if (o) {
                var l = i.sharedMaterials, h = o.length;
                for (l.length = h, a = 0; a < h; a++) l[a] = t.Loader.getRes(o[a].path);
                i.sharedMaterials = l;
            }
            s.time = e.time, s.minVertexDistance = e.minVertexDistance, s.widthMultiplier = e.widthMultiplier, 
            s.textureMode = e.textureMode, null != e.alignment && (s.alignment = e.alignment);
            var _ = [], d = e.widthCurve;
            for (a = 0, n = d.length; a < n; a++) {
                var c = new f();
                c.time = d[a].time, c.inTangent = d[a].inTangent, c.outTangent = d[a].outTangent, 
                c.value = d[a].value, _.push(c);
            }
            s.widthCurve = _;
            var u = e.colorGradient, m = u.colorKeys, E = u.alphaKeys, T = new Sr(m.length, E.length);
            for (T.mode = u.mode, a = 0, n = m.length; a < n; a++) {
                var p = m[a];
                T.addColorRGB(p.time, new We(p.value[0], p.value[1], p.value[2], 1));
            }
            for (a = 0, n = E.length; a < n; a++) {
                var g = E[a];
                T.addColorAlpha(g.time, g.value);
            }
            s.colorGradient = T;
        }
        _onActive() {
            super._onActive(), this._transform.position.cloneTo(this._geometryFilter._lastPosition);
        }
        _cloneTo(e, t, r) {
            var a, n;
            super._cloneTo(e, t, r);
            var i = e, s = i.trailFilter;
            s.time = this.trailFilter.time, s.minVertexDistance = this.trailFilter.minVertexDistance, 
            s.widthMultiplier = this.trailFilter.widthMultiplier, s.textureMode = this.trailFilter.textureMode, 
            s.alignment = this.trailFilter.alignment;
            var o = this.trailFilter.widthCurve, l = [];
            for (a = 0, n = o.length; a < n; a++) {
                var h = new f();
                o[a].cloneTo(h), l.push(h);
            }
            s.widthCurve = l;
            var _ = new Sr(this.trailFilter.colorGradient.maxColorRGBKeysCount, this.trailFilter.colorGradient.maxColorAlphaKeysCount);
            this.trailFilter.colorGradient.cloneTo(_), s.colorGradient = _, i.trailRenderer.sharedMaterial = this.trailRenderer.sharedMaterial;
        }
        destroy(e = !0) {
            this.destroyed || (super.destroy(e), this._geometryFilter.destroy(), this._geometryFilter = null);
        }
        clear() {
            this._geometryFilter.clear();
        }
        _create() {
            return new ha();
        }
    }
    class _a {
        constructor(e, t, r, a) {
            this._position = e, this._normal = t, this._textureCoord0 = r, this._textureCoord1 = a;
        }
        static __init__() {
            _a._vertexDeclaration = new U(40, [ new H(0, B.Vector3, _a.TERRAIN_POSITION0), new H(12, B.Vector3, _a.TERRAIN_NORMAL0), new H(24, B.Vector2, _a.TERRAIN_TEXTURECOORDINATE0), new H(32, B.Vector2, _a.TERRAIN_TEXTURECOORDINATE1) ]);
        }
        static get vertexDeclaration() {
            return _a._vertexDeclaration;
        }
        get position() {
            return this._position;
        }
        get normal() {
            return this._normal;
        }
        get textureCoord0() {
            return this._textureCoord0;
        }
        get textureCoord1() {
            return this._textureCoord1;
        }
        get vertexDeclaration() {
            return _a._vertexDeclaration;
        }
    }
    _a.TERRAIN_POSITION0 = 0, _a.TERRAIN_NORMAL0 = 1, _a.TERRAIN_TEXTURECOORDINATE0 = 2, 
    _a.TERRAIN_TEXTURECOORDINATE1 = 3;
    class da extends It {
        constructor(e) {
            super(), this._id = ++da._uniqueIDCounter, this._mesh = e, this._boneIndicesList = [], 
            this._subIndexBufferStart = [], this._subIndexBufferCount = [];
        }
        get indexCount() {
            return this._indexCount;
        }
        _setIndexRange(t, r, a = e.IndexFormat.UInt16) {
            this._indexStart = t, this._indexCount = r, a == e.IndexFormat.UInt16 ? this._indices = new Uint16Array(this._indexBuffer.getData().buffer, 2 * t, r) : this._indices = new Uint32Array(this._indexBuffer.getData().buffer, 4 * t, r);
        }
        _getType() {
            return da._type;
        }
        _prepareRender(e) {
            return this._mesh._uploadVerticesData(), !0;
        }
        _render(r) {
            var a = this._mesh;
            if (a.indexFormat !== e.IndexFormat.UInt32 || t.LayaGL.layaGPUInstance.supportElementIndexUint32()) {
                var n, i, s = t.LayaGL.instance, o = r.renderElement ? r.renderElement.render._skinnedData : null;
                switch (a.indexFormat) {
                  case e.IndexFormat.UInt32:
                    n = s.UNSIGNED_INT, i = 4;
                    break;

                  case e.IndexFormat.UInt16:
                    n = s.UNSIGNED_SHORT, i = 2;
                    break;

                  case e.IndexFormat.UInt8:
                    n = s.UNSIGNED_BYTE, i = 1;
                }
                if (a._bufferState.bind(), o) for (var l = o[this._indexInMesh], h = 0, _ = this._boneIndicesList.length; h < _; h++) r.shader.uploadCustomUniform(ra.BONES, l[h]), 
                s.drawElements(s.TRIANGLES, this._subIndexBufferCount[h], n, this._subIndexBufferStart[h] * i); else s.drawElements(s.TRIANGLES, this._indexCount, n, this._indexStart * i);
                t.Stat.trianglesFaces += this._indexCount / 3, t.Stat.renderBatches++;
            } else console.warn("SubMesh:this device do not support IndexFormat.UInt32.");
        }
        getIndices() {
            if (this._mesh._isReadable) return this._indices.slice();
            throw "SubMesh:can't get indices on subMesh,mesh's isReadable must be true.";
        }
        setIndices(e) {
            this._indexBuffer.setData(e, this._indexStart, 0, this._indexCount);
        }
        destroy() {
            this._destroyed || (super.destroy(), this._indexBuffer.destroy(), this._indexBuffer = null, 
            this._mesh = null, this._boneIndicesList = null, this._subIndexBufferStart = null, 
            this._subIndexBufferCount = null, this._skinAnimationDatas = null);
        }
    }
    da._uniqueIDCounter = 0, da._type = It._typeCounter++;
    class ca {
        constructor(e, t, r) {
            this.subMeshIndex = e, this.batchIndex = t, this.batchBoneIndex = r;
        }
    }
    class ua extends t.Resource {
        constructor(t = !0) {
            super(), this._tempVector30 = new i(), this._tempVector31 = new i(), this._tempVector32 = new i(), 
            this._minVerticesUpdate = -1, this._maxVerticesUpdate = -1, this._needUpdateBounds = !0, 
            this._bounds = new At(new i(), new i()), this._bufferState = new G(), this._instanceBufferState = new G(), 
            this._instanceBufferStateType = 0, this._vertexBuffer = null, this._indexBuffer = null, 
            this._skinnedMatrixCaches = [], this._vertexCount = 0, this._indexFormat = e.IndexFormat.UInt16, 
            this._isReadable = t, this._subMeshes = [];
        }
        static __init__() {
            var e = _._bullet;
            e && (ua._nativeTempVector30 = e.btVector3_create(0, 0, 0), ua._nativeTempVector31 = e.btVector3_create(0, 0, 0), 
            ua._nativeTempVector32 = e.btVector3_create(0, 0, 0));
        }
        static load(e, r) {
            t.ILaya.loader.create(e, r, null, ua.MESH);
        }
        get inverseAbsoluteBindPoses() {
            return this._inverseBindPoses;
        }
        get vertexCount() {
            return this._vertexCount;
        }
        get indexCount() {
            return this._indexBuffer.indexCount;
        }
        get subMeshCount() {
            return this._subMeshes.length;
        }
        get bounds() {
            return this._bounds;
        }
        set bounds(e) {
            this._bounds !== e && e.cloneTo(this._bounds);
        }
        get indexFormat() {
            return this._indexFormat;
        }
        _getPositionElement(e) {
            for (var t = e.vertexDeclaration._vertexElements, r = 0, a = t.length; r < a; r++) {
                var n = t[r];
                if (n._elementFormat === B.Vector3 && n._elementUsage === ie.MESH_POSITION0) return n;
            }
            return null;
        }
        _getVerticeElementData(e, t) {
            e.length = this._vertexCount;
            var r = this._vertexBuffer.vertexDeclaration, s = r.getVertexElementByUsage(t);
            if (s) {
                var o = this._vertexBuffer.getUint8Data(), l = this._vertexBuffer.getFloat32Data(), h = r.vertexStride, _ = h / 4, d = s._offset, c = d / 4;
                switch (t) {
                  case ie.MESH_TEXTURECOORDINATE0:
                  case ie.MESH_TEXTURECOORDINATE1:
                    for (var u = 0; u < this._vertexCount; u++) {
                        var m = _ * u + c;
                        e[u] = new a(l[m], l[m + 1]);
                    }
                    break;

                  case ie.MESH_POSITION0:
                  case ie.MESH_NORMAL0:
                    for (u = 0; u < this._vertexCount; u++) {
                        m = _ * u + c;
                        e[u] = new i(l[m], l[m + 1], l[m + 2]);
                    }
                    break;

                  case ie.MESH_TANGENT0:
                  case ie.MESH_BLENDWEIGHT0:
                    for (u = 0; u < this._vertexCount; u++) {
                        m = _ * u + c;
                        e[u] = new n(l[m], l[m + 1], l[m + 2], l[m + 3]);
                    }
                    break;

                  case ie.MESH_COLOR0:
                    for (u = 0; u < this._vertexCount; u++) {
                        m = _ * u + c;
                        e[u] = new We(l[m], l[m + 1], l[m + 2], l[m + 3]);
                    }
                    break;

                  case ie.MESH_BLENDINDICES0:
                    for (u = 0; u < this._vertexCount; u++) {
                        m = h * u + d;
                        e[u] = new n(o[m], o[m + 1], o[m + 2], o[m + 3]);
                    }
                    break;

                  default:
                    throw "Mesh:Unknown elementUsage.";
                }
            }
        }
        _setVerticeElementData(e, t) {
            var r = this._vertexBuffer.vertexDeclaration, a = r.getVertexElementByUsage(t);
            if (a) {
                var n = this._vertexBuffer.getUint8Data(), i = this._vertexBuffer.getFloat32Data(), s = r.vertexStride, o = s / 4, l = a._offset, h = l / 4;
                switch (t) {
                  case ie.MESH_TEXTURECOORDINATE0:
                  case ie.MESH_TEXTURECOORDINATE1:
                    for (var _ = 0, d = e.length; _ < d; _++) {
                        var c = o * _ + h, u = e[_];
                        i[c] = u.x, i[c + 1] = u.y;
                    }
                    break;

                  case ie.MESH_POSITION0:
                  case ie.MESH_NORMAL0:
                    for (_ = 0, d = e.length; _ < d; _++) {
                        c = o * _ + h;
                        var m = e[_];
                        i[c] = m.x, i[c + 1] = m.y, i[c + 2] = m.z;
                    }
                    break;

                  case ie.MESH_TANGENT0:
                  case ie.MESH_BLENDWEIGHT0:
                    for (_ = 0, d = e.length; _ < d; _++) {
                        c = o * _ + h;
                        var f = e[_];
                        i[c] = f.x, i[c + 1] = f.y, i[c + 2] = f.z, i[c + 3] = f.w;
                    }
                    break;

                  case ie.MESH_COLOR0:
                    for (_ = 0, d = e.length; _ < d; _++) {
                        c = o * _ + h;
                        var E = e[_];
                        i[c] = E.r, i[c + 1] = E.g, i[c + 2] = E.b, i[c + 3] = E.a;
                    }
                    break;

                  case ie.MESH_BLENDINDICES0:
                    for (_ = 0, d = e.length; _ < d; _++) {
                        c = s * _ + l, f = e[_];
                        n[c] = f.x, n[c + 1] = f.y, n[c + 2] = f.z, n[c + 3] = f.w;
                    }
                    break;

                  default:
                    throw "Mesh:Unknown elementUsage.";
                }
                this._minVerticesUpdate = 0, this._maxVerticesUpdate = Number.MAX_SAFE_INTEGER;
            } else console.warn("Mesh: the mesh don't have  this VertexElement.");
        }
        _disposeResource() {
            for (var e = 0, t = this._subMeshes.length; e < t; e++) this._subMeshes[e].destroy();
            this._btTriangleMesh && _._bullet.btStridingMeshInterface_destroy(this._btTriangleMesh), 
            this._vertexBuffer.destroy(), this._indexBuffer.destroy(), this._bufferState.destroy(), 
            this._instanceBufferState.destroy(), this._setCPUMemory(0), this._setGPUMemory(0), 
            this._bufferState = null, this._instanceBufferState = null, this._vertexBuffer = null, 
            this._indexBuffer = null, this._subMeshes = null, this._btTriangleMesh = null, this._indexBuffer = null, 
            this._boneNames = null, this._inverseBindPoses = null;
        }
        _setSubMeshes(e) {
            this._subMeshes = e;
            for (var t = 0, r = e.length; t < r; t++) e[t]._indexInMesh = t;
        }
        _setBuffer(e, t) {
            var r = this._bufferState;
            r.bind(), r.applyVertexBuffer(e), r.applyIndexBuffer(t), r.unBind();
        }
        _setInstanceBuffer(e) {
            var t = this._instanceBufferState;
            switch (t.bind(), t.applyVertexBuffer(this._vertexBuffer), t.applyInstanceVertexBuffer(Ct.instance.instanceWorldMatrixBuffer), 
            e) {
              case ua.MESH_INSTANCEBUFFER_TYPE_SIMPLEANIMATOR:
                t.applyInstanceVertexBuffer(Ct.instance.instanceSimpleAnimatorBuffer);
            }
            t.applyIndexBuffer(this._indexBuffer), t.unBind();
        }
        _getPhysicMesh() {
            if (!this._btTriangleMesh) {
                for (var e = _._bullet, t = e.btTriangleMesh_create(), r = ua._nativeTempVector30, a = ua._nativeTempVector31, n = ua._nativeTempVector32, i = this._tempVector30, s = this._tempVector31, o = this._tempVector32, l = this._vertexBuffer, h = this._getPositionElement(l), d = l.getFloat32Data(), c = l.vertexDeclaration.vertexStride / 4, u = h._offset / 4, m = this._indexBuffer.getData(), f = 0, E = m.length; f < E; f += 3) {
                    var T = m[f] * c + u, p = m[f + 1] * c + u, g = m[f + 2] * c + u;
                    i.setValue(d[T], d[T + 1], d[T + 2]), s.setValue(d[p], d[p + 1], d[p + 2]), o.setValue(d[g], d[g + 1], d[g + 2]), 
                    A._convertToBulletVec3(i, r, !0), A._convertToBulletVec3(s, a, !0), A._convertToBulletVec3(o, n, !0), 
                    e.btTriangleMesh_addTriangle(t, r, a, n, !0);
                }
                this._btTriangleMesh = t;
            }
            return this._btTriangleMesh;
        }
        _uploadVerticesData() {
            var e = this._minVerticesUpdate, t = this._maxVerticesUpdate;
            if (-1 !== e && -1 !== t) {
                var r = e;
                this._vertexBuffer.setData(this._vertexBuffer.getUint8Data().buffer, r, r, t - e), 
                this._minVerticesUpdate = -1, this._maxVerticesUpdate = -1;
            }
        }
        getSubMesh(e) {
            return this._subMeshes[e];
        }
        getPositions(e) {
            if (!this._isReadable) throw "Mesh:can't get positions on mesh,isReadable must be true.";
            this._getVerticeElementData(e, ie.MESH_POSITION0);
        }
        setPositions(e) {
            if (!this._isReadable) throw "Mesh:setPosition() need isReadable must be true or use setVertices().";
            this._setVerticeElementData(e, ie.MESH_POSITION0), this._needUpdateBounds = !0;
        }
        getColors(e) {
            if (!this._isReadable) throw "Mesh:can't get colors on mesh,isReadable must be true.";
            this._getVerticeElementData(e, ie.MESH_COLOR0);
        }
        setColors(e) {
            if (!this._isReadable) throw "Mesh:setColors() need isReadable must be true or use setVertices().";
            this._setVerticeElementData(e, ie.MESH_COLOR0);
        }
        getUVs(e, t = 0) {
            if (!this._isReadable) throw "Mesh:can't get uvs on mesh,isReadable must be true.";
            switch (t) {
              case 0:
                this._getVerticeElementData(e, ie.MESH_TEXTURECOORDINATE0);
                break;

              case 1:
                this._getVerticeElementData(e, ie.MESH_TEXTURECOORDINATE1);
                break;

              default:
                throw "Mesh:Invalid channel.";
            }
        }
        setUVs(e, t = 0) {
            if (!this._isReadable) throw "Mesh:setUVs() need isReadable must be true or use setVertices().";
            switch (t) {
              case 0:
                this._setVerticeElementData(e, ie.MESH_TEXTURECOORDINATE0);
                break;

              case 1:
                this._setVerticeElementData(e, ie.MESH_TEXTURECOORDINATE1);
                break;

              default:
                throw "Mesh:Invalid channel.";
            }
        }
        getNormals(e) {
            if (!this._isReadable) throw "Mesh:can't get colors on mesh,isReadable must be true.";
            this._getVerticeElementData(e, ie.MESH_NORMAL0);
        }
        setNormals(e) {
            if (!this._isReadable) throw "Mesh:setNormals() need must be true or use setVertices().";
            this._setVerticeElementData(e, ie.MESH_NORMAL0);
        }
        getTangents(e) {
            if (!this._isReadable) throw "Mesh:can't get colors on mesh,isReadable must be true.";
            this._getVerticeElementData(e, ie.MESH_TANGENT0);
        }
        setTangents(e) {
            if (!this._isReadable) throw "Mesh:setTangents() need isReadable must be true or use setVertices().";
            this._setVerticeElementData(e, ie.MESH_TANGENT0);
        }
        getBoneWeights(e) {
            if (!this._isReadable) throw "Mesh:can't get boneWeights on mesh,isReadable must be true.";
            this._getVerticeElementData(e, ie.MESH_BLENDWEIGHT0);
        }
        setBoneWeights(e) {
            if (!this._isReadable) throw "Mesh:setBoneWeights() need isReadable must be true or use setVertices().";
            this._setVerticeElementData(e, ie.MESH_BLENDWEIGHT0);
        }
        getBoneIndices(e) {
            if (!this._isReadable) throw "Mesh:can't get boneIndices on mesh,isReadable must be true.";
            this._getVerticeElementData(e, ie.MESH_BLENDINDICES0);
        }
        setBoneIndices(e) {
            if (!this._isReadable) throw "Mesh:setBoneIndices() need isReadable must be true or use setVertices().";
            this._setVerticeElementData(e, ie.MESH_BLENDINDICES0);
        }
        markAsUnreadbale() {
            this._uploadVerticesData(), this._vertexBuffer.markAsUnreadbale(), this._isReadable = !1;
        }
        getVertexDeclaration() {
            return this._vertexBuffer._vertexDeclaration;
        }
        getVertices() {
            if (this._isReadable) return this._vertexBuffer.getUint8Data().buffer.slice(0);
            throw "Mesh:can't get vertices on mesh,isReadable must be true.";
        }
        setVertices(e) {
            this._vertexBuffer.setData(e), this._needUpdateBounds = !0;
        }
        getIndices() {
            if (this._isReadable) return this._indexBuffer.getData().slice();
            throw "Mesh:can't get indices on subMesh,mesh's isReadable must be true.";
        }
        setIndices(r) {
            var a;
            r instanceof Uint32Array ? a = e.IndexFormat.UInt32 : r instanceof Uint16Array ? a = e.IndexFormat.UInt16 : r instanceof Uint8Array && (a = e.IndexFormat.UInt8);
            var n = this._indexBuffer;
            this._indexFormat === a && n.indexCount === r.length || (n.destroy(), this._indexBuffer = n = new st(a, r.length, t.LayaGL.instance.STATIC_DRAW, this._isReadable)), 
            n.setData(r), this._indexFormat = a;
        }
        calculateBounds() {
            if (!this._isReadable) throw "Mesh:can't calculate bounds on subMesh,mesh's isReadable must be true.";
            if (this._needUpdateBounds) {
                var e = this._tempVector30, t = this._tempVector31;
                e.x = e.y = e.z = Number.MAX_VALUE, t.x = t.y = t.z = -Number.MAX_VALUE;
                for (var r = this._vertexBuffer, a = this._getPositionElement(r), n = r.getFloat32Data(), i = r.vertexDeclaration.vertexStride / 4, s = a._offset / 4, o = 0, l = n.length; o < l; o += i) {
                    var h = o + s, _ = n[h], d = n[h + 1], c = n[h + 2];
                    e.x = Math.min(e.x, _), e.y = Math.min(e.y, d), e.z = Math.min(e.z, c), t.x = Math.max(t.x, _), 
                    t.y = Math.max(t.y, d), t.z = Math.max(t.z, c);
                }
                this._bounds.setMin(e), this._bounds.setMax(t), this._needUpdateBounds = !1;
            }
        }
        cloneTo(t) {
            var r = t, a = this._vertexBuffer, n = new V(a._byteLength, a.bufferUsage, a.canRead);
            n.vertexDeclaration = a.vertexDeclaration, n.setData(a.getUint8Data().slice().buffer), 
            r._vertexBuffer = n, r._vertexCount = this._vertexCount;
            var i, s = this._indexBuffer, o = new st(e.IndexFormat.UInt16, s.indexCount, s.bufferUsage, s.canRead);
            o.setData(s.getData().slice()), r._indexBuffer = o, r._setBuffer(r._vertexBuffer, o), 
            r._setInstanceBuffer(this._instanceBufferStateType), r._setCPUMemory(this.cpuMemory), 
            r._setGPUMemory(this.gpuMemory);
            var l = this._boneNames;
            if (l) {
                var h = r._boneNames = [];
                for (i = 0; i < l.length; i++) h[i] = l[i];
            }
            var _ = this._inverseBindPoses;
            if (_) {
                var d = r._inverseBindPoses = [];
                for (i = 0; i < _.length; i++) d[i] = _[i];
            }
            var c = this._skinnedMatrixCaches.length;
            for (r._skinnedMatrixCaches.length = c, i = 0; i < c; i++) {
                var u = this._skinnedMatrixCaches[i];
                r._skinnedMatrixCaches[i] = new ca(u.subMeshIndex, u.batchIndex, u.batchBoneIndex);
            }
            for (i = 0; i < this.subMeshCount; i++) {
                var m = this._subMeshes[i], f = m._subIndexBufferStart, E = m._subIndexBufferCount, T = m._boneIndicesList, p = new da(r);
                p._subIndexBufferStart.length = f.length, p._subIndexBufferCount.length = E.length, 
                p._boneIndicesList.length = T.length;
                for (var g = 0; g < f.length; g++) p._subIndexBufferStart[g] = f[g];
                for (g = 0; g < E.length; g++) p._subIndexBufferCount[g] = E[g];
                for (g = 0; g < T.length; g++) p._boneIndicesList[g] = new Uint16Array(T[g]);
                p._indexBuffer = o, p._indexStart = m._indexStart, p._indexCount = m._indexCount, 
                p._indices = new Uint16Array(o.getData().buffer, 2 * m._indexStart, m._indexCount);
                var S = r._vertexBuffer;
                p._vertexBuffer = S, r._subMeshes.push(p);
            }
            r._setSubMeshes(r._subMeshes);
        }
        clone() {
            var e = new ua();
            return this.cloneTo(e), e;
        }
    }
    ua.MESH = "MESH", ua.MESH_INSTANCEBUFFER_TYPE_NORMAL = 0, ua.MESH_INSTANCEBUFFER_TYPE_SIMPLEANIMATOR = 1;
    class ma {
        static __init__() {}
        static _createMesh(r, a, n) {
            var i = t.LayaGL.instance, s = new ua(), o = new da(s), l = new V(4 * a.length, i.STATIC_DRAW, !0);
            l.vertexDeclaration = r, l.setData(a.buffer), s._vertexBuffer = l, s._vertexCount = l._byteLength / r.vertexStride;
            var h = new st(e.IndexFormat.UInt16, n.length, i.STATIC_DRAW, !0);
            h.setData(n), s._indexBuffer = h, s._setBuffer(l, h), s._setInstanceBuffer(s._instanceBufferStateType), 
            o._vertexBuffer = l, o._indexBuffer = h, o._setIndexRange(0, h.indexCount);
            var _ = o._subIndexBufferStart, d = o._subIndexBufferCount, c = o._boneIndicesList;
            _.length = 1, d.length = 1, c.length = 1, _[0] = 0, d[0] = h.indexCount;
            var u = [];
            u.push(o), s._setSubMeshes(u), s.calculateBounds();
            var m = l._byteLength + h._byteLength;
            return s._setCPUMemory(m), s._setGPUMemory(m), s;
        }
        static createBox(e = 1, t = 1, r = 1) {
            var a = ie.getVertexDeclaration("POSITION,NORMAL,UV"), n = e / 2, i = t / 2, s = r / 2, o = new Float32Array([ -n, i, -s, 0, 1, 0, 0, 0, n, i, -s, 0, 1, 0, 1, 0, n, i, s, 0, 1, 0, 1, 1, -n, i, s, 0, 1, 0, 0, 1, -n, -i, -s, 0, -1, 0, 0, 1, n, -i, -s, 0, -1, 0, 1, 1, n, -i, s, 0, -1, 0, 1, 0, -n, -i, s, 0, -1, 0, 0, 0, -n, i, -s, -1, 0, 0, 0, 0, -n, i, s, -1, 0, 0, 1, 0, -n, -i, s, -1, 0, 0, 1, 1, -n, -i, -s, -1, 0, 0, 0, 1, n, i, -s, 1, 0, 0, 1, 0, n, i, s, 1, 0, 0, 0, 0, n, -i, s, 1, 0, 0, 0, 1, n, -i, -s, 1, 0, 0, 1, 1, -n, i, s, 0, 0, 1, 0, 0, n, i, s, 0, 0, 1, 1, 0, n, -i, s, 0, 0, 1, 1, 1, -n, -i, s, 0, 0, 1, 0, 1, -n, i, -s, 0, 0, -1, 1, 0, n, i, -s, 0, 0, -1, 0, 0, n, -i, -s, 0, 0, -1, 0, 1, -n, -i, -s, 0, 0, -1, 1, 1 ]), l = new Uint16Array([ 0, 1, 2, 2, 3, 0, 4, 7, 6, 6, 5, 4, 8, 9, 10, 10, 11, 8, 12, 15, 14, 14, 13, 12, 16, 17, 18, 18, 19, 16, 20, 23, 22, 22, 21, 20 ]);
            return ma._createMesh(a, o, l);
        }
        static createCapsule(e = .5, t = 2, r = 16, a = 32) {
            var n, i, s = (r + 1) * (a + 1) * 2 + 2 * (a + 1), o = 3 * r * (a + 1) * 2 * 2 + 2 * a * 3, l = ie.getVertexDeclaration("POSITION,NORMAL,UV"), h = l.vertexStride / 4, _ = new Float32Array(s * h), d = new Uint16Array(o), c = Math.PI / 2 / r, u = 2 * Math.PI / a, m = t / 2 - e, f = 0, E = 0, T = 0, p = 0, g = 0, S = 0;
            for (n = 0; n <= r; n++) for (i = 0; i <= a; i++) f = e * Math.cos(n * c) * Math.cos(i * u + Math.PI), 
            E = e * Math.sin(n * c), T = e * Math.cos(n * c) * Math.sin(i * u + Math.PI), _[p++] = f, 
            _[p++] = E + m, _[p++] = T, _[p++] = f, _[p++] = E, _[p++] = T, _[p++] = 1 - i / a, 
            _[p++] = (1 - n / r) * (Math.PI * e / 2 / (t + Math.PI * e)), n < r && (d[g++] = n * (a + 1) + i + (a + 1), 
            d[g++] = n * (a + 1) + i, d[g++] = n * (a + 1) + i + 1, d[g++] = n * (a + 1) + i + a, 
            d[g++] = n * (a + 1) + i, d[g++] = n * (a + 1) + i + (a + 1));
            for (S += (r + 1) * (a + 1), n = 0; n <= r; n++) for (i = 0; i <= a; i++) f = e * Math.cos(n * c) * Math.cos(i * u + Math.PI), 
            E = e * Math.sin(-n * c), T = e * Math.cos(n * c) * Math.sin(i * u + Math.PI), _[p++] = f, 
            _[p++] = E - m, _[p++] = T, _[p++] = f, _[p++] = E, _[p++] = T, _[p++] = 1 - i / a, 
            _[p++] = (n / r * (Math.PI * e / 2) + (t + Math.PI * e / 2)) / (t + Math.PI * e), 
            n < r && (d[g++] = S + n * (a + 1) + i, d[g++] = S + n * (a + 1) + i + (a + 1), 
            d[g++] = S + n * (a + 1) + i + 1, d[g++] = S + n * (a + 1) + i, d[g++] = S + n * (a + 1) + i + a, 
            d[g++] = S + n * (a + 1) + i + (a + 1));
            for (S += (r + 1) * (a + 1), i = 0; i <= a; i++) f = e * Math.cos(i * u + Math.PI), 
            E = m, T = e * Math.sin(i * u + Math.PI), _[p++] = f, _[p + 8 * (a + 1) - 1] = f, 
            _[p++] = E, _[p + 8 * (a + 1) - 1] = -E, _[p++] = T, _[p + 8 * (a + 1) - 1] = T, 
            _[p++] = f, _[p + 8 * (a + 1) - 1] = f, _[p++] = 0, _[p + 8 * (a + 1) - 1] = 0, 
            _[p++] = T, _[p + 8 * (a + 1) - 1] = T, _[p++] = 1 - 1 * i / a, _[p + 8 * (a + 1) - 1] = 1 - 1 * i / a, 
            _[p++] = Math.PI * e / 2 / (t + Math.PI * e), _[p + 8 * (a + 1) - 1] = (Math.PI * e / 2 + t) / (t + Math.PI * e);
            for (i = 0; i < a; i++) d[g++] = i + S + (a + 1), d[g++] = i + S + 1, d[g++] = i + S, 
            d[g++] = i + S + (a + 1), d[g++] = i + S + (a + 1) + 1, d[g++] = i + S + 1;
            return S += 2 * (a + 1), ma._createMesh(l, _, d);
        }
        static createCone(e = .5, t = 1, r = 32) {
            for (var a, n = r + 1 + 1 + 2 * (r + 1), s = 6 * r + 3 * r, o = ie.getVertexDeclaration("POSITION,NORMAL,UV"), l = o.vertexStride / 4, h = new Float32Array(n * l), _ = new Uint16Array(s), d = 2 * Math.PI / r, c = t / 2, u = 0, m = 0, f = 0, E = 0, p = 0, g = new i(), S = new i(0, -1, 0), R = new i(0, c, 0), v = new i(), x = new i(), A = new T(), I = new i(), M = 0, D = 0, L = 0; L <= r; L++) u = L * d, 
            f = Math.cos(u + Math.PI) * e, E = c, p = Math.sin(u + Math.PI) * e, h[M++] = 0, 
            h[M + 8 * (r + 1) - 1] = f, h[M++] = E, h[M + 8 * (r + 1) - 1] = -E, h[M++] = 0, 
            h[M + 8 * (r + 1) - 1] = p, g.x = f, g.y = 0, g.z = p, v.x = f, v.y = -E, v.z = p, 
            i.subtract(v, R, x), i.normalize(x, x), a = Math.acos(i.dot(S, x)), i.cross(S, x, I), 
            i.normalize(I, I), T.createFromAxisAngle(I, a, A), i.normalize(g, g), i.transformQuat(g, A, g), 
            i.normalize(g, g), h[M++] = g.x, h[M + 8 * (r + 1) - 1] = g.x, h[M++] = g.y, h[M + 8 * (r + 1) - 1] = g.y, 
            h[M++] = g.z, h[M + 8 * (r + 1) - 1] = g.z, h[M++] = 1 - 1 * L / r, h[M + 8 * (r + 1) - 1] = 1 - 1 * L / r, 
            h[M++] = 0, h[M + 8 * (r + 1) - 1] = 1;
            M += 8 * (r + 1);
            for (var y = 0; y < r; y++) _[D++] = y + m + (r + 1), _[D++] = y + m + 1, _[D++] = y + m, 
            _[D++] = y + m + (r + 1), _[D++] = y + m + (r + 1) + 1, _[D++] = y + m + 1;
            m += 2 * (r + 1);
            for (var C = 0; C <= r; C++) 0 === C && (h[M++] = 0, h[M++] = -c, h[M++] = 0, h[M++] = 0, 
            h[M++] = -1, h[M++] = 0, h[M++] = .5, h[M++] = .5), u = C * d, f = Math.cos(u + Math.PI) * e, 
            E = -c, p = Math.sin(u + Math.PI) * e, h[M++] = f, h[M++] = E, h[M++] = p, h[M++] = 0, 
            h[M++] = -1, h[M++] = 0, h[M++] = .5 + .5 * Math.cos(u), h[M++] = .5 + .5 * Math.sin(u);
            for (var O = 0; O < r; O++) _[D++] = 0 + m, _[D++] = O + 2 + m, _[D++] = O + 1 + m;
            return m += r + 1 + 1, ma._createMesh(o, h, _);
        }
        static createCylinder(e = .5, t = 2, r = 32) {
            for (var a = r + 1 + 1 + 2 * (r + 1) + (r + 1 + 1), n = 3 * r + 6 * r + 3 * r, i = ie.getVertexDeclaration("POSITION,NORMAL,UV"), s = i.vertexStride / 4, o = new Float32Array(a * s), l = new Uint16Array(n), h = 2 * Math.PI / r, _ = t / 2, d = 0, c = 0, u = 0, m = 0, f = 0, E = 0, T = 0, p = 0; p <= r; p++) 0 === p && (o[E++] = 0, 
            o[E++] = _, o[E++] = 0, o[E++] = 0, o[E++] = 1, o[E++] = 0, o[E++] = .5, o[E++] = .5), 
            d = p * h, u = Math.cos(d) * e, m = _, f = Math.sin(d) * e, o[E++] = u, o[E++] = m, 
            o[E++] = f, o[E++] = 0, o[E++] = 1, o[E++] = 0, o[E++] = .5 + .5 * Math.cos(d), 
            o[E++] = .5 + .5 * Math.sin(d);
            for (var g = 0; g < r; g++) l[T++] = 0, l[T++] = g + 1, l[T++] = g + 2;
            c += r + 1 + 1;
            for (var S = 0; S <= r; S++) d = S * h, u = Math.cos(d + Math.PI) * e, m = _, f = Math.sin(d + Math.PI) * e, 
            o[E++] = u, o[E + 8 * (r + 1) - 1] = u, o[E++] = m, o[E + 8 * (r + 1) - 1] = -m, 
            o[E++] = f, o[E + 8 * (r + 1) - 1] = f, o[E++] = u, o[E + 8 * (r + 1) - 1] = u, 
            o[E++] = 0, o[E + 8 * (r + 1) - 1] = 0, o[E++] = f, o[E + 8 * (r + 1) - 1] = f, 
            o[E++] = 1 - 1 * S / r, o[E + 8 * (r + 1) - 1] = 1 - 1 * S / r, o[E++] = 0, o[E + 8 * (r + 1) - 1] = 1;
            E += 8 * (r + 1);
            for (var R = 0; R < r; R++) l[T++] = R + c + (r + 1), l[T++] = R + c + 1, l[T++] = R + c, 
            l[T++] = R + c + (r + 1), l[T++] = R + c + (r + 1) + 1, l[T++] = R + c + 1;
            c += 2 * (r + 1);
            for (var v = 0; v <= r; v++) 0 === v && (o[E++] = 0, o[E++] = -_, o[E++] = 0, o[E++] = 0, 
            o[E++] = -1, o[E++] = 0, o[E++] = .5, o[E++] = .5), d = v * h, u = Math.cos(d + Math.PI) * e, 
            m = -_, f = Math.sin(d + Math.PI) * e, o[E++] = u, o[E++] = m, o[E++] = f, o[E++] = 0, 
            o[E++] = -1, o[E++] = 0, o[E++] = .5 + .5 * Math.cos(d), o[E++] = .5 + .5 * Math.sin(d);
            for (var x = 0; x < r; x++) l[T++] = 0 + c, l[T++] = x + 2 + c, l[T++] = x + 1 + c;
            return c += r + 1 + 1, ma._createMesh(i, o, l);
        }
        static createPlane(e = 10, t = 10, r = 10, a = 10) {
            for (var n = (r + 1) * (a + 1), i = new Uint16Array(r * a * 2 * 3), s = ie.getVertexDeclaration("POSITION,NORMAL,UV"), o = s.vertexStride / 4, l = new Float32Array(n * o), h = e / 2, _ = t / 2, d = e / r, c = t / a, u = 0, m = 0; m <= a; m++) for (var f = 0; f <= r; f++) l[u++] = f * d - h, 
            l[u++] = 0, l[u++] = m * c - _, l[u++] = 0, l[u++] = 1, l[u++] = 0, l[u++] = 1 * f / r, 
            l[u++] = 1 * m / a;
            var E = 0;
            for (m = 0; m < a; m++) for (f = 0; f < r; f++) i[E++] = (m + 1) * (r + 1) + f, 
            i[E++] = m * (r + 1) + f, i[E++] = (m + 1) * (r + 1) + f + 1, i[E++] = m * (r + 1) + f, 
            i[E++] = m * (r + 1) + f + 1, i[E++] = (m + 1) * (r + 1) + f + 1;
            return ma._createMesh(s, l, i);
        }
        static createQuad(e = 1, t = 1) {
            var r = ie.getVertexDeclaration("POSITION,NORMAL,UV"), a = e / 2, n = t / 2, i = new Float32Array([ -a, n, 0, 0, 0, 1, 0, 0, a, n, 0, 0, 0, 1, 1, 0, -a, -n, 0, 0, 0, 1, 0, 1, a, -n, 0, 0, 0, 1, 1, 1 ]), s = new Uint16Array([ 0, 1, 2, 3, 2, 1 ]);
            return ma._createMesh(r, i, s);
        }
        static createSphere(e = .5, t = 32, r = 32) {
            var a = (t + 1) * (r + 1), n = 3 * t * (r + 1) * 2, i = new Uint16Array(n), s = ie.getVertexDeclaration("POSITION,NORMAL,UV"), o = s.vertexStride / 4, l = new Float32Array(a * o), h = Math.PI / t, _ = 2 * Math.PI / r, d = 0;
            a = 0, n = 0;
            for (var c = 0; c < t + 1; c++) for (var u = Math.sin(c * h), m = Math.cos(c * h), f = 0; f < r + 1; f++) {
                var E = u * Math.sin(f * _ + 1 * Math.PI / 2), T = u * Math.cos(f * _ + 1 * Math.PI / 2);
                l[a + 0] = E * e, l[a + 1] = m * e, l[a + 2] = T * e, l[a + 3] = E, l[a + 4] = m, 
                l[a + 5] = T, l[a + 6] = f / r, l[a + 7] = c / t, a += o, c != t - 1 && (i[n++] = d + (r + 1), 
                i[n++] = d, i[n++] = d + 1, i[n++] = d + r, i[n++] = d, i[n++] = d + (r + 1), d++);
            }
            return ma._createMesh(s, l, i);
        }
    }
    class dn {
        constructor() {}
        static __init__() {
            Z.SHADERDEFINE_LEGACYSINGALLIGHTING = Z.getDefineByName("LEGACYSINGLELIGHTING"), 
            Z.SHADERDEFINE_GRAPHICS_API_GLES2 = Z.getDefineByName("GRAPHICS_API_GLES2"), Z.SHADERDEFINE_GRAPHICS_API_GLES3 = Z.getDefineByName("GRAPHICS_API_GLES3"), 
            Z.addInclude("Lighting.glsl", va), Z.addInclude("ShadowSampleTent.glsl", xa), Z.addInclude("GlobalIllumination.glsl", Ra), 
            Z.addInclude("Shadow.glsl", Qa), Z.addInclude("ShadowCasterVS.glsl", Ka), Z.addInclude("ShadowCasterFS.glsl", Ja), 
            Z.addInclude("Colors.glsl", Xa), Z.addInclude("Sampling.glsl", ja), Z.addInclude("StdLib.glsl", qa), 
            Z.addInclude("PBRVSInput.glsl", Va), Z.addInclude("PBRFSInput.glsl", Ba), Z.addInclude("LayaPBRBRDF.glsl", Pa), 
            Z.addInclude("PBRCore.glsl", wa), Z.addInclude("PBRVertex.glsl", ba), Z.addInclude("LayaUtile.glsl", Aa), 
            Z.addInclude("DepthNormalUtil.glsl", _n);
            var e = {
                a_Position: ie.MESH_POSITION0,
                a_Color: ie.MESH_COLOR0,
                a_Normal: ie.MESH_NORMAL0,
                a_Texcoord0: ie.MESH_TEXTURECOORDINATE0,
                a_Texcoord1: ie.MESH_TEXTURECOORDINATE1,
                a_BoneWeights: ie.MESH_BLENDWEIGHT0,
                a_BoneIndices: ie.MESH_BLENDINDICES0,
                a_Tangent0: ie.MESH_TANGENT0,
                a_WorldMat: ie.MESH_WORLDMATRIX_ROW0,
                a_SimpleTextureParams: ie.MESH_SIMPLEANIMATOR
            }, t = {
                u_Bones: Z.PERIOD_CUSTOM,
                u_DiffuseTexture: Z.PERIOD_MATERIAL,
                u_SpecularTexture: Z.PERIOD_MATERIAL,
                u_NormalTexture: Z.PERIOD_MATERIAL,
                u_AlphaTestValue: Z.PERIOD_MATERIAL,
                u_DiffuseColor: Z.PERIOD_MATERIAL,
                u_AlbedoIntensity: Z.PERIOD_MATERIAL,
                u_MaterialSpecular: Z.PERIOD_MATERIAL,
                u_Shininess: Z.PERIOD_MATERIAL,
                u_TilingOffset: Z.PERIOD_MATERIAL,
                u_TransmissionRate: Z.PERIOD_MATERIAL,
                u_BackDiffuse: Z.PERIOD_MATERIAL,
                u_BackScale: Z.PERIOD_MATERIAL,
                u_ThinknessTexture: Z.PERIOD_MATERIAL,
                u_TransmissionColor: Z.PERIOD_MATERIAL,
                u_WorldMat: Z.PERIOD_SPRITE,
                u_MvpMatrix: Z.PERIOD_SPRITE,
                u_LightmapScaleOffset: Z.PERIOD_SPRITE,
                u_LightMap: Z.PERIOD_SPRITE,
                u_LightMapDirection: Z.PERIOD_SPRITE,
                u_SimpleAnimatorTexture: Z.PERIOD_SPRITE,
                u_SimpleAnimatorParams: Z.PERIOD_SPRITE,
                u_SimpleAnimatorTextureSize: Z.PERIOD_SPRITE,
                u_CameraPos: Z.PERIOD_CAMERA,
                u_Viewport: Z.PERIOD_CAMERA,
                u_ProjectionParams: Z.PERIOD_CAMERA,
                u_View: Z.PERIOD_CAMERA,
                u_ViewProjection: Z.PERIOD_CAMERA,
                u_ReflectTexture: Z.PERIOD_SCENE,
                u_FogStart: Z.PERIOD_SCENE,
                u_FogRange: Z.PERIOD_SCENE,
                u_FogColor: Z.PERIOD_SCENE,
                u_DirationLightCount: Z.PERIOD_SCENE,
                u_LightBuffer: Z.PERIOD_SCENE,
                u_LightClusterBuffer: Z.PERIOD_SCENE,
                u_AmbientColor: Z.PERIOD_SCENE,
                u_ShadowBias: Z.PERIOD_SCENE,
                u_ShadowLightDirection: Z.PERIOD_SCENE,
                u_ShadowMap: Z.PERIOD_SCENE,
                u_ShadowParams: Z.PERIOD_SCENE,
                u_ShadowSplitSpheres: Z.PERIOD_SCENE,
                u_ShadowMatrices: Z.PERIOD_SCENE,
                u_ShadowMapSize: Z.PERIOD_SCENE,
                u_SpotShadowMap: Z.PERIOD_SCENE,
                u_SpotViewProjectMatrix: Z.PERIOD_SCENE,
                u_ShadowLightPosition: Z.PERIOD_SCENE,
                u_AmbientSHAr: Z.PERIOD_SCENE,
                u_AmbientSHAg: Z.PERIOD_SCENE,
                u_AmbientSHAb: Z.PERIOD_SCENE,
                u_AmbientSHBr: Z.PERIOD_SCENE,
                u_AmbientSHBg: Z.PERIOD_SCENE,
                u_AmbientSHBb: Z.PERIOD_SCENE,
                u_AmbientSHC: Z.PERIOD_SCENE,
                "u_DirectionLight.color": Z.PERIOD_SCENE,
                "u_DirectionLight.direction": Z.PERIOD_SCENE,
                "u_PointLight.position": Z.PERIOD_SCENE,
                "u_PointLight.range": Z.PERIOD_SCENE,
                "u_PointLight.color": Z.PERIOD_SCENE,
                "u_SpotLight.position": Z.PERIOD_SCENE,
                "u_SpotLight.direction": Z.PERIOD_SCENE,
                "u_SpotLight.range": Z.PERIOD_SCENE,
                "u_SpotLight.spot": Z.PERIOD_SCENE,
                "u_SpotLight.color": Z.PERIOD_SCENE
            }, r = {
                s_Cull: Z.RENDER_STATE_CULL,
                s_Blend: Z.RENDER_STATE_BLEND,
                s_BlendSrc: Z.RENDER_STATE_BLEND_SRC,
                s_BlendDst: Z.RENDER_STATE_BLEND_DST,
                s_DepthTest: Z.RENDER_STATE_DEPTH_TEST,
                s_DepthWrite: Z.RENDER_STATE_DEPTH_WRITE
            }, a = Z.add("BLINNPHONG", null, null, !0), n = new er(e, t);
            a.addSubShader(n), n.addShaderPass(La, Da, r, "Forward");
            n.addShaderPass(Ca, ya, r, "ShadowCaster");
            n.addShaderPass(Fe, Ue, r, "DepthNormal"), e = {
                a_Position: ie.MESH_POSITION0,
                a_Color: ie.MESH_COLOR0
            }, t = {
                u_MvpMatrix: Z.PERIOD_SPRITE,
                u_Color: Z.PERIOD_MATERIAL
            }, r = {
                s_Cull: Z.RENDER_STATE_CULL,
                s_Blend: Z.RENDER_STATE_BLEND,
                s_BlendSrc: Z.RENDER_STATE_BLEND_SRC,
                s_BlendDst: Z.RENDER_STATE_BLEND_DST,
                s_DepthTest: Z.RENDER_STATE_DEPTH_TEST,
                s_DepthWrite: Z.RENDER_STATE_DEPTH_WRITE
            }, a = Z.add("LineShader"), n = new er(e, t), a.addSubShader(n), n.addShaderPass(Ma, Ia, r), 
            e = {
                a_Position: ie.MESH_POSITION0,
                a_Color: ie.MESH_COLOR0,
                a_Texcoord0: ie.MESH_TEXTURECOORDINATE0,
                a_BoneWeights: ie.MESH_BLENDWEIGHT0,
                a_BoneIndices: ie.MESH_BLENDINDICES0,
                a_WorldMat: ie.MESH_WORLDMATRIX_ROW0,
                a_SimpleTextureParams: ie.MESH_SIMPLEANIMATOR
            }, t = {
                u_Bones: Z.PERIOD_CUSTOM,
                u_AlbedoTexture: Z.PERIOD_MATERIAL,
                u_AlbedoColor: Z.PERIOD_MATERIAL,
                u_TilingOffset: Z.PERIOD_MATERIAL,
                u_AlphaTestValue: Z.PERIOD_MATERIAL,
                u_MvpMatrix: Z.PERIOD_SPRITE,
                u_ViewProjection: Z.PERIOD_CAMERA,
                u_SimpleAnimatorTexture: Z.PERIOD_SPRITE,
                u_SimpleAnimatorParams: Z.PERIOD_SPRITE,
                u_SimpleAnimatorTextureSize: Z.PERIOD_SPRITE,
                u_FogStart: Z.PERIOD_SCENE,
                u_FogRange: Z.PERIOD_SCENE,
                u_FogColor: Z.PERIOD_SCENE
            }, r = {
                s_Cull: Z.RENDER_STATE_CULL,
                s_Blend: Z.RENDER_STATE_BLEND,
                s_BlendSrc: Z.RENDER_STATE_BLEND_SRC,
                s_BlendDst: Z.RENDER_STATE_BLEND_DST,
                s_DepthTest: Z.RENDER_STATE_DEPTH_TEST,
                s_DepthWrite: Z.RENDER_STATE_DEPTH_WRITE
            }, a = Z.add("Unlit", null, null, !0), n = new er(e, t), a.addSubShader(n), n.addShaderPass(on, sn, r), 
            e = {
                a_Position: ie.MESH_POSITION0,
                a_Texcoord0: ie.MESH_TEXTURECOORDINATE0,
                a_BoneWeights: ie.MESH_BLENDWEIGHT0,
                a_BoneIndices: ie.MESH_BLENDINDICES0,
                a_WorldMat: ie.MESH_WORLDMATRIX_ROW0,
                a_SimpleTextureParams: ie.MESH_SIMPLEANIMATOR
            }, t = {
                u_Bones: Z.PERIOD_CUSTOM,
                u_AlbedoTexture: Z.PERIOD_MATERIAL,
                u_AlbedoColor: Z.PERIOD_MATERIAL,
                u_TilingOffset: Z.PERIOD_MATERIAL,
                u_AlphaTestValue: Z.PERIOD_MATERIAL,
                u_ViewProjection: Z.PERIOD_CAMERA,
                u_MvpMatrix: Z.PERIOD_SPRITE,
                u_SimpleAnimatorTexture: Z.PERIOD_SPRITE,
                u_SimpleAnimatorParams: Z.PERIOD_SPRITE,
                u_SimpleAnimatorTextureSize: Z.PERIOD_SPRITE,
                u_FogStart: Z.PERIOD_SCENE,
                u_FogRange: Z.PERIOD_SCENE,
                u_FogColor: Z.PERIOD_SCENE
            }, r = {
                s_Cull: Z.RENDER_STATE_CULL,
                s_Blend: Z.RENDER_STATE_BLEND,
                s_BlendSrc: Z.RENDER_STATE_BLEND_SRC,
                s_BlendDst: Z.RENDER_STATE_BLEND_DST,
                s_DepthTest: Z.RENDER_STATE_DEPTH_TEST,
                s_DepthWrite: Z.RENDER_STATE_DEPTH_WRITE
            }, a = Z.add("Effect", null, null, !0), n = new er(e, t), a.addSubShader(n), n.addShaderPass(pa, Ta, r), 
            e = {
                a_CornerTextureCoordinate: Yr.PARTICLE_CORNERTEXTURECOORDINATE0,
                a_MeshPosition: Yr.PARTICLE_POSITION0,
                a_MeshColor: Yr.PARTICLE_COLOR0,
                a_MeshTextureCoordinate: Yr.PARTICLE_TEXTURECOORDINATE0,
                a_ShapePositionStartLifeTime: Yr.PARTICLE_SHAPEPOSITIONSTARTLIFETIME,
                a_DirectionTime: Yr.PARTICLE_DIRECTIONTIME,
                a_StartColor: Yr.PARTICLE_STARTCOLOR0,
                a_EndColor: Yr.PARTICLE_ENDCOLOR0,
                a_StartSize: Yr.PARTICLE_STARTSIZE,
                a_StartRotation0: Yr.PARTICLE_STARTROTATION,
                a_StartSpeed: Yr.PARTICLE_STARTSPEED,
                a_Random0: Yr.PARTICLE_RANDOM0,
                a_Random1: Yr.PARTICLE_RANDOM1,
                a_SimulationWorldPostion: Yr.PARTICLE_SIMULATIONWORLDPOSTION,
                a_SimulationWorldRotation: Yr.PARTICLE_SIMULATIONWORLDROTATION
            }, t = {
                u_Tintcolor: Z.PERIOD_MATERIAL,
                u_TilingOffset: Z.PERIOD_MATERIAL,
                u_texture: Z.PERIOD_MATERIAL,
                u_WorldPosition: Z.PERIOD_SPRITE,
                u_WorldRotation: Z.PERIOD_SPRITE,
                u_PositionScale: Z.PERIOD_SPRITE,
                u_SizeScale: Z.PERIOD_SPRITE,
                u_ScalingMode: Z.PERIOD_SPRITE,
                u_Gravity: Z.PERIOD_SPRITE,
                u_ThreeDStartRotation: Z.PERIOD_SPRITE,
                u_StretchedBillboardLengthScale: Z.PERIOD_SPRITE,
                u_StretchedBillboardSpeedScale: Z.PERIOD_SPRITE,
                u_SimulationSpace: Z.PERIOD_SPRITE,
                u_CurrentTime: Z.PERIOD_SPRITE,
                u_ColorOverLifeGradientAlphas: Z.PERIOD_SPRITE,
                u_ColorOverLifeGradientColors: Z.PERIOD_SPRITE,
                u_MaxColorOverLifeGradientAlphas: Z.PERIOD_SPRITE,
                u_MaxColorOverLifeGradientColors: Z.PERIOD_SPRITE,
                u_VOLVelocityConst: Z.PERIOD_SPRITE,
                u_VOLVelocityGradientX: Z.PERIOD_SPRITE,
                u_VOLVelocityGradientY: Z.PERIOD_SPRITE,
                u_VOLVelocityGradientZ: Z.PERIOD_SPRITE,
                u_VOLVelocityConstMax: Z.PERIOD_SPRITE,
                u_VOLVelocityGradientMaxX: Z.PERIOD_SPRITE,
                u_VOLVelocityGradientMaxY: Z.PERIOD_SPRITE,
                u_VOLVelocityGradientMaxZ: Z.PERIOD_SPRITE,
                u_VOLSpaceType: Z.PERIOD_SPRITE,
                u_SOLSizeGradient: Z.PERIOD_SPRITE,
                u_SOLSizeGradientX: Z.PERIOD_SPRITE,
                u_SOLSizeGradientY: Z.PERIOD_SPRITE,
                u_SOLSizeGradientZ: Z.PERIOD_SPRITE,
                u_SOLSizeGradientMax: Z.PERIOD_SPRITE,
                u_SOLSizeGradientMaxX: Z.PERIOD_SPRITE,
                u_SOLSizeGradientMaxY: Z.PERIOD_SPRITE,
                u_SOLSizeGradientMaxZ: Z.PERIOD_SPRITE,
                u_ROLAngularVelocityConst: Z.PERIOD_SPRITE,
                u_ROLAngularVelocityConstSeprarate: Z.PERIOD_SPRITE,
                u_ROLAngularVelocityGradient: Z.PERIOD_SPRITE,
                u_ROLAngularVelocityGradientX: Z.PERIOD_SPRITE,
                u_ROLAngularVelocityGradientY: Z.PERIOD_SPRITE,
                u_ROLAngularVelocityGradientZ: Z.PERIOD_SPRITE,
                u_ROLAngularVelocityConstMax: Z.PERIOD_SPRITE,
                u_ROLAngularVelocityConstMaxSeprarate: Z.PERIOD_SPRITE,
                u_ROLAngularVelocityGradientMax: Z.PERIOD_SPRITE,
                u_ROLAngularVelocityGradientMaxX: Z.PERIOD_SPRITE,
                u_ROLAngularVelocityGradientMaxY: Z.PERIOD_SPRITE,
                u_ROLAngularVelocityGradientMaxZ: Z.PERIOD_SPRITE,
                u_ROLAngularVelocityGradientMaxW: Z.PERIOD_SPRITE,
                u_TSACycles: Z.PERIOD_SPRITE,
                u_TSASubUVLength: Z.PERIOD_SPRITE,
                u_TSAGradientUVs: Z.PERIOD_SPRITE,
                u_TSAMaxGradientUVs: Z.PERIOD_SPRITE,
                u_CameraPos: Z.PERIOD_CAMERA,
                u_CameraDirection: Z.PERIOD_CAMERA,
                u_CameraUp: Z.PERIOD_CAMERA,
                u_View: Z.PERIOD_CAMERA,
                u_Projection: Z.PERIOD_CAMERA,
                u_FogStart: Z.PERIOD_SCENE,
                u_FogRange: Z.PERIOD_SCENE,
                u_FogColor: Z.PERIOD_SCENE
            }, r = {
                s_Cull: Z.RENDER_STATE_CULL,
                s_Blend: Z.RENDER_STATE_BLEND,
                s_BlendSrc: Z.RENDER_STATE_BLEND_SRC,
                s_BlendDst: Z.RENDER_STATE_BLEND_DST,
                s_DepthTest: Z.RENDER_STATE_DEPTH_TEST,
                s_DepthWrite: Z.RENDER_STATE_DEPTH_WRITE
            }, a = Z.add("PARTICLESHURIKEN"), n = new er(e, t), a.addSubShader(n), n.addShaderPass(Na, Oa, r), 
            e = {
                a_Position: ie.MESH_POSITION0
            }, t = {
                u_TintColor: Z.PERIOD_MATERIAL,
                u_Exposure: Z.PERIOD_MATERIAL,
                u_Rotation: Z.PERIOD_MATERIAL,
                u_CubeTexture: Z.PERIOD_MATERIAL,
                u_ViewProjection: Z.PERIOD_CAMERA
            }, a = Z.add("SkyBox"), n = new er(e, t), a.addSubShader(n), n.addShaderPass(en, $a), 
            e = {
                a_Position: ie.MESH_POSITION0
            }, t = {
                u_SunSize: Z.PERIOD_MATERIAL,
                u_SunSizeConvergence: Z.PERIOD_MATERIAL,
                u_AtmosphereThickness: Z.PERIOD_MATERIAL,
                u_SkyTint: Z.PERIOD_MATERIAL,
                u_GroundTint: Z.PERIOD_MATERIAL,
                u_Exposure: Z.PERIOD_MATERIAL,
                u_ViewProjection: Z.PERIOD_CAMERA,
                "u_SunLight.direction": Z.PERIOD_SCENE,
                "u_SunLight.color": Z.PERIOD_SCENE
            }, a = Z.add("SkyBoxProcedural"), n = new er(e, t), a.addSubShader(n), n.addShaderPass(rn, tn), 
            e = {
                a_Position: ie.MESH_POSITION0,
                a_Normal: ie.MESH_NORMAL0,
                a_Texcoord0: ie.MESH_TEXTURECOORDINATE0
            }, t = {
                u_MvpMatrix: Z.PERIOD_SPRITE,
                u_WorldMat: Z.PERIOD_SPRITE,
                u_CameraPos: Z.PERIOD_CAMERA,
                u_Viewport: Z.PERIOD_CAMERA,
                u_ProjectionParams: Z.PERIOD_CAMERA,
                u_View: Z.PERIOD_CAMERA,
                u_LightmapScaleOffset: Z.PERIOD_SPRITE,
                u_LightMap: Z.PERIOD_SPRITE,
                u_SplatAlphaTexture: Z.PERIOD_MATERIAL,
                u_DiffuseTexture1: Z.PERIOD_MATERIAL,
                u_DiffuseTexture2: Z.PERIOD_MATERIAL,
                u_DiffuseTexture3: Z.PERIOD_MATERIAL,
                u_DiffuseTexture4: Z.PERIOD_MATERIAL,
                u_DiffuseTexture5: Z.PERIOD_MATERIAL,
                u_DiffuseScaleOffset1: Z.PERIOD_MATERIAL,
                u_DiffuseScaleOffset2: Z.PERIOD_MATERIAL,
                u_DiffuseScaleOffset3: Z.PERIOD_MATERIAL,
                u_DiffuseScaleOffset4: Z.PERIOD_MATERIAL,
                u_DiffuseScaleOffset5: Z.PERIOD_MATERIAL,
                u_FogStart: Z.PERIOD_SCENE,
                u_FogRange: Z.PERIOD_SCENE,
                u_FogColor: Z.PERIOD_SCENE,
                u_DirationLightCount: Z.PERIOD_SCENE,
                u_LightBuffer: Z.PERIOD_SCENE,
                u_LightClusterBuffer: Z.PERIOD_SCENE,
                u_AmbientColor: Z.PERIOD_SCENE,
                u_ShadowMap: Z.PERIOD_SCENE,
                u_shadowMap2: Z.PERIOD_SCENE,
                u_shadowMap3: Z.PERIOD_SCENE,
                u_ShadowSplitSpheres: Z.PERIOD_SCENE,
                u_ShadowMatrices: Z.PERIOD_SCENE,
                u_ShadowMapSize: Z.PERIOD_SCENE,
                "u_DirectionLight.color": Z.PERIOD_SCENE,
                "u_DirectionLight.direction": Z.PERIOD_SCENE,
                "u_PointLight.position": Z.PERIOD_SCENE,
                "u_PointLight.range": Z.PERIOD_SCENE,
                "u_PointLight.color": Z.PERIOD_SCENE,
                "u_SpotLight.position": Z.PERIOD_SCENE,
                "u_SpotLight.direction": Z.PERIOD_SCENE,
                "u_SpotLight.range": Z.PERIOD_SCENE,
                "u_SpotLight.spot": Z.PERIOD_SCENE,
                "u_SpotLight.color": Z.PERIOD_SCENE
            }, r = {
                s_Cull: Z.RENDER_STATE_CULL,
                s_Blend: Z.RENDER_STATE_BLEND,
                s_BlendSrc: Z.RENDER_STATE_BLEND_SRC,
                s_BlendDst: Z.RENDER_STATE_BLEND_DST,
                s_DepthTest: Z.RENDER_STATE_DEPTH_TEST,
                s_DepthWrite: Z.RENDER_STATE_DEPTH_WRITE
            }, a = Z.add("ExtendTerrain"), n = new er(e, t), a.addSubShader(n), n.addShaderPass(Sa, ga, r), 
            e = {
                a_Position: ia.TRAIL_POSITION0,
                a_OffsetVector: ia.TRAIL_OFFSETVECTOR,
                a_Texcoord0X: ia.TRAIL_TEXTURECOORDINATE0X,
                a_Texcoord0Y: ia.TRAIL_TEXTURECOORDINATE0Y,
                a_BirthTime: ia.TRAIL_TIME0,
                a_Color: ia.TRAIL_COLOR
            }, t = {
                u_MvpMatrix: Z.PERIOD_SPRITE,
                u_View: Z.PERIOD_CAMERA,
                u_Projection: Z.PERIOD_CAMERA,
                u_TilingOffset: Z.PERIOD_MATERIAL,
                u_MainTexture: Z.PERIOD_MATERIAL,
                u_MainColor: Z.PERIOD_MATERIAL,
                u_CurTime: Z.PERIOD_SPRITE,
                u_LifeTime: Z.PERIOD_SPRITE,
                u_WidthCurve: Z.PERIOD_SPRITE,
                u_WidthCurveKeyLength: Z.PERIOD_SPRITE,
                u_GradientColorkey: Z.PERIOD_SPRITE,
                u_GradientAlphakey: Z.PERIOD_SPRITE
            }, r = {
                s_Cull: Z.RENDER_STATE_CULL,
                s_Blend: Z.RENDER_STATE_BLEND,
                s_BlendSrc: Z.RENDER_STATE_BLEND_SRC,
                s_BlendDst: Z.RENDER_STATE_BLEND_DST,
                s_DepthTest: Z.RENDER_STATE_DEPTH_TEST,
                s_DepthWrite: Z.RENDER_STATE_DEPTH_WRITE
            }, a = Z.add("Trail"), n = new er(e, t), a.addSubShader(n), n.addShaderPass(nn, an, r), 
            e = {
                a_Position: ie.MESH_POSITION0,
                a_Normal: ie.MESH_NORMAL0,
                a_Tangent0: ie.MESH_TANGENT0
            }, t = {
                u_MvpMatrix: Z.PERIOD_SPRITE,
                u_WorldMat: Z.PERIOD_SPRITE,
                u_CameraPos: Z.PERIOD_CAMERA,
                u_Time: Z.PERIOD_SCENE,
                u_MainTexture: Z.PERIOD_MATERIAL,
                u_NormalTexture: Z.PERIOD_MATERIAL,
                u_HorizonColor: Z.PERIOD_MATERIAL,
                u_WaveScale: Z.PERIOD_MATERIAL,
                u_WaveSpeed: Z.PERIOD_MATERIAL
            }, a = Z.add("WaterPrimary"), n = new er(e, t), a.addSubShader(n), n.addShaderPass(hn, ln), 
            e = {
                a_PositionTexcoord: ie.MESH_POSITION0
            }, t = {
                u_MainTex: Z.PERIOD_MATERIAL,
                u_OffsetScale: Z.PERIOD_MATERIAL
            }, a = Z.add("BlitScreen"), n = new er(e, t), a.addSubShader(n);
            var i = n.addShaderPass(Ea, fa).renderState;
            i.depthTest = fe.DEPTHTEST_ALWAYS, i.depthWrite = !1, i.cull = fe.CULL_NONE, i.blend = fe.BLEND_DISABLE, 
            e = {
                a_PositionTexcoord: ie.MESH_POSITION0
            }, t = {
                u_MainTex: Z.PERIOD_MATERIAL,
                u_BloomTex: Z.PERIOD_MATERIAL,
                u_AutoExposureTex: Z.PERIOD_MATERIAL,
                u_MainTex_TexelSize: Z.PERIOD_MATERIAL,
                u_SampleScale: Z.PERIOD_MATERIAL,
                u_Threshold: Z.PERIOD_MATERIAL,
                u_Params: Z.PERIOD_MATERIAL
            }, a = Z.add("PostProcessBloom"), n = new er(e, t), a.addSubShader(n), (i = n.addShaderPass(Fa, Ga).renderState).depthTest = fe.DEPTHTEST_ALWAYS, 
            i.depthWrite = !1, i.cull = fe.CULL_NONE, i.blend = fe.BLEND_DISABLE, n = new er(e, t), 
            a.addSubShader(n), (i = n.addShaderPass(Fa, za).renderState).depthTest = fe.DEPTHTEST_ALWAYS, 
            i.depthWrite = !1, i.cull = fe.CULL_NONE, i.blend = fe.BLEND_DISABLE, n = new er(e, t), 
            a.addSubShader(n), (i = n.addShaderPass(Fa, Ua).renderState).depthTest = fe.DEPTHTEST_ALWAYS, 
            i.depthWrite = !1, i.cull = fe.CULL_NONE, i.blend = fe.BLEND_DISABLE, n = new er(e, t), 
            a.addSubShader(n), (i = n.addShaderPass(Fa, Ha).renderState).depthTest = fe.DEPTHTEST_ALWAYS, 
            i.depthWrite = !1, i.cull = fe.CULL_NONE, i.blend = fe.BLEND_DISABLE, n = new er(e, t), 
            a.addSubShader(n), (i = n.addShaderPass(Fa, Wa).renderState).depthTest = fe.DEPTHTEST_ALWAYS, 
            i.depthWrite = !1, i.cull = fe.CULL_NONE, i.blend = fe.BLEND_DISABLE, n = new er(e, t), 
            a.addSubShader(n), (i = n.addShaderPass(Fa, ka).renderState).depthTest = fe.DEPTHTEST_ALWAYS, 
            i.depthWrite = !1, i.cull = fe.CULL_NONE, i.blend = fe.BLEND_DISABLE, e = {
                a_PositionTexcoord: ie.MESH_POSITION0
            }, t = {
                u_MainTex: Z.PERIOD_MATERIAL,
                u_BloomTex: Z.PERIOD_MATERIAL,
                u_AutoExposureTex: Z.PERIOD_MATERIAL,
                u_Bloom_DirtTileOffset: Z.PERIOD_MATERIAL,
                u_Bloom_DirtTex: Z.PERIOD_MATERIAL,
                u_BloomTex_TexelSize: Z.PERIOD_MATERIAL,
                u_Bloom_Settings: Z.PERIOD_MATERIAL,
                u_Bloom_Color: Z.PERIOD_MATERIAL
            }, a = Z.add("PostProcessComposite"), n = new er(e, t), a.addSubShader(n), (i = n.addShaderPass(Za, Ya).renderState).depthTest = fe.DEPTHTEST_ALWAYS, 
            i.depthWrite = !1, i.cull = fe.CULL_NONE, i.blend = fe.BLEND_DISABLE;
        }
    }
    class cn extends ct {
        constructor() {
            super(), this._direction = new i(), this._shadowCascadesMode = e.ShadowCascadesMode.NoCascades, 
            this._shadowTwoCascadeSplits = 1 / 3, this._shadowFourCascadeSplits = new i(1 / 15, .2, 7 / 15), 
            this._lightType = e.LightType.Directional;
        }
        get shadowCascadesMode() {
            return this._shadowCascadesMode;
        }
        set shadowCascadesMode(e) {
            this._shadowCascadesMode = e;
        }
        get shadowTwoCascadeSplits() {
            return this._shadowTwoCascadeSplits;
        }
        set shadowTwoCascadeSplits(e) {
            this._shadowTwoCascadeSplits = e;
        }
        get shadowFourCascadeSplits() {
            return this._shadowFourCascadeSplits;
        }
        set shadowFourCascadeSplits(e) {
            if (e.x > e.y || e.y > e.z || e.z > 1) throw "DiretionLight:Invalid value.";
            e.cloneTo(this._shadowFourCascadeSplits);
        }
        _addToLightQueue() {
            this._scene._directionLights.add(this);
        }
        _removeFromLightQueue() {
            this._scene._directionLights.remove(this);
        }
        _create() {
            return new cn();
        }
    }
    class un extends ct {
        constructor() {
            super(), this._range = 6, this._lightType = e.LightType.Point;
        }
        get range() {
            return this._range;
        }
        set range(e) {
            this._range = e;
        }
        _addToLightQueue() {
            this._scene._pointLights.add(this);
        }
        _removeFromLightQueue() {
            this._scene._pointLights.remove(this);
        }
        _parse(e, t) {
            super._parse(e, t), this.range = e.range;
        }
        _cloneTo(t, r, a) {
            super._cloneTo(t, r, a);
            var n = t;
            n.range = this.range, n._lightType = e.LightType.Point;
        }
        _create() {
            return new un();
        }
    }
    class mn extends ct {
        constructor() {
            super(), this._spotAngle = 30, this._range = 10, this._direction = new i(), this._lightType = e.LightType.Spot;
        }
        get spotAngle() {
            return this._spotAngle;
        }
        set spotAngle(e) {
            this._spotAngle = Math.max(Math.min(e, 179), 0);
        }
        get range() {
            return this._range;
        }
        set range(e) {
            this._range = e;
        }
        _addToLightQueue() {
            this._scene._spotLights.add(this);
        }
        _removeFromLightQueue() {
            this._scene._spotLights.remove(this);
        }
        _parse(e, t) {
            super._parse(e, t), this.range = e.range, this.spotAngle = e.spotAngle;
        }
        _cloneTo(e, t, r) {
            super._cloneTo(e, t, r);
            var a = e;
            a.range = this.range, a.spotAngle = this.spotAngle;
        }
        _create() {
            return new mn();
        }
    }
    class fn extends ta {
        constructor(e) {
            super(e), this._simpleAnimatorParams = new n(), this._simpleAnimatorOffset = new a(), 
            this._shaderValues.addDefine(ea.SHADERDEFINE_SIMPLEBONE), this._shaderValues.addDefine(ea.SHADERDEFINE_BONE);
        }
        get simpleAnimatorTexture() {
            return this._simpleAnimatorTexture;
        }
        set simpleAnimatorTexture(e) {
            this._simpleAnimatorTexture = e, this._simpleAnimatorTextureSize = e.width, this._shaderValues.setTexture(fn.SIMPLE_SIMPLEANIMATORTEXTURE, e), 
            e._addReference(), this._shaderValues.setNumber(fn.SIMPLE_SIMPLEANIMATORTEXTURESIZE, this._simpleAnimatorTextureSize);
        }
        get simpleAnimatorOffset() {
            return this._simpleAnimatorOffset;
        }
        set simpleAnimatorOffset(e) {
            e.cloneTo(this._simpleAnimatorOffset);
        }
        _computeAnimatorParamsData() {
            this._cacheMesh && (this._simpleAnimatorParams.x = this._simpleAnimatorOffset.x, 
            this._simpleAnimatorParams.y = Math.round(this._simpleAnimatorOffset.y) * this._bonesNums * 4);
        }
        _createRenderElement() {
            return new Nt();
        }
        _setCacheAnimator(e) {
            this._cacheAnimator = e, this._shaderValues.addDefine(ea.SHADERDEFINE_SIMPLEBONE);
        }
        _onMeshChange(e) {
            super._onMeshChange(e), this._cacheMesh = e;
        }
        _renderUpdate(e, t) {
            var r = e.renderElement;
            switch (r.renderType) {
              case Ot.RENDERTYPE_NORMAL:
                if (this._cacheAnimator) {
                    var a = this._cacheAnimator.owner.transform.worldMatrix;
                    this._shaderValues.setMatrix4x4($.WORLDMATRIX, a);
                } else this._shaderValues.setMatrix4x4($.WORLDMATRIX, t.worldMatrix);
                this._computeAnimatorParamsData(), this._shaderValues.setVector(fn.SIMPLE_SIMPLEANIMATORPARAMS, this._simpleAnimatorParams);
                break;

              case Ot.RENDERTYPE_INSTANCEBATCH:
                var n = Ct.instance.instanceWorldMatrixData, i = r.instanceBatchElementList, s = i.elements, o = i.length;
                if (this._cacheAnimator) for (var l = 0; l < o; l++) {
                    var h = s[l].render._cacheAnimator.owner._transform.worldMatrix;
                    n.set(h.elements, 16 * l);
                } else for (l = 0; l < o; l++) n.set(s[l]._transform.worldMatrix.elements, 16 * l);
                var _ = Ct.instance.instanceWorldMatrixBuffer;
                _.orphanStorage(), _.setData(n.buffer, 0, 0, 16 * o * 4), this._shaderValues.addDefine(ne.SHADERDEFINE_GPU_INSTANCE);
                var d = Ct.instance.instanceSimpleAnimatorData;
                if (this._cacheAnimator) for (l = 0; l < o; l++) {
                    var c = s[l].render;
                    c._computeAnimatorParamsData();
                    var u = c._simpleAnimatorParams, m = 4 * l;
                    d[m] = u.x, d[m + 1] = u.y;
                } else for (l = 0; l < o; l++) d[m] = 0, d[m + 1] = 0;
                var f = Ct.instance.instanceSimpleAnimatorBuffer;
                f.orphanStorage(), f.setData(d.buffer, 0, 0, 4 * o * 4);
            }
        }
        _renderUpdateWithCamera(e, t) {
            var r = e.projectionViewMatrix;
            if (r) switch (e.renderElement.renderType) {
              case Ot.RENDERTYPE_NORMAL:
                if (this._cacheAnimator) {
                    var a = this._cacheAnimator.owner._transform.worldMatrix;
                    b.multiply(r, a, this._projectionViewWorldMatrix), this._shaderValues.setMatrix4x4($.MVPMATRIX, this._projectionViewWorldMatrix);
                } else b.multiply(r, t.worldMatrix, this._projectionViewWorldMatrix), this._shaderValues.setMatrix4x4($.MVPMATRIX, this._projectionViewWorldMatrix);
            }
        }
        _destroy() {
            this._cacheRootBone && !this._cacheRootBone.destroyed && this._cacheRootBone.transform.off(t.Event.TRANSFORM_CHANGED, this, this._onWorldMatNeedChange), 
            this._simpleAnimatorTexture && this._simpleAnimatorTexture._removeReference(), this._simpleAnimatorTexture = null;
        }
    }
    class En extends Lt {
        constructor(e = null, t = null) {
            super(t), this._meshFilter = new fr(this), this._render = new fn(this), e && (this._meshFilter.sharedMesh = e);
        }
        static __init__() {
            fn.SIMPLE_SIMPLEANIMATORPARAMS = En.SIMPLE_SIMPLEANIMATORPARAMS, fn.SIMPLE_SIMPLEANIMATORTEXTURE = En.SIMPLE_SIMPLEANIMATORTEXTURE, 
            fn.SIMPLE_SIMPLEANIMATORTEXTURESIZE = En.SIMPLE_SIMPLEANIMATORTEXTURESIZE;
        }
        get meshFilter() {
            return this._meshFilter;
        }
        get simpleSkinnedMeshRenderer() {
            return this._render;
        }
        _parse(e, r) {
            super._parse(e, r);
            var a = this.simpleSkinnedMeshRenderer, s = e.lightmapIndex;
            null != s && (a.lightmapIndex = s);
            var o, l = e.lightmapScaleOffset;
            if (l && (a.lightmapScaleOffset = new n(l[0], l[1], l[2], l[3])), null != e.enableRender && (a.enable = e.enableRender), 
            null != e.receiveShadows && (a.receiveShadow = e.receiveShadows), null != e.castShadow && (a.castShadow = e.castShadow), 
            o = e.meshPath) {
                var h = t.Loader.getRes(o);
                h && (this.meshFilter.sharedMesh = h);
            }
            var _ = e.materials;
            if (_) {
                var d = a.sharedMaterials, c = _.length;
                d.length = c;
                for (var u = 0; u < c; u++) d[u] = t.Loader.getRes(_[u].path);
                a.sharedMaterials = d;
            }
            var m = e.boundBox, f = m.min, E = m.max;
            if (a.localBounds.setMin(new i(f[0], f[1], f[2])), a.localBounds.setMax(new i(E[0], E[1], E[2])), 
            r) {
                var T = e.rootBone;
                a.rootBone = r[T];
                var p, g = e.bones;
                for (u = 0, p = g.length; u < p; u++) a.bones.push(r[g[u]]);
                a._bonesNums = e.bonesNums ? e.bonesNums : a.bones.length;
            } else e.rootBone && a._setRootBone(e.rootBone);
            var S = e.animatorTexture;
            if (S) {
                var R = t.Loader.getRes(S);
                a.simpleAnimatorTexture = R;
            }
        }
        _changeHierarchyAnimator(e) {
            super._changeHierarchyAnimator(e), this.simpleSkinnedMeshRenderer._setCacheAnimator(e);
        }
        _cloneTo(e, t, r) {
            var a = e;
            a.meshFilter.sharedMesh = this.meshFilter.sharedMesh;
            var n = this._render, i = a._render;
            i.enable = n.enable, i.sharedMaterials = n.sharedMaterials, i.castShadow = n.castShadow;
            var s = n.lightmapScaleOffset;
            s && (i.lightmapScaleOffset = s.clone()), i.receiveShadow = n.receiveShadow, i.sortingFudge = n.sortingFudge, 
            i._rootBone = n._rootBone;
            var o = n.bones, l = i.bones, h = o.length;
            l.length = h;
            var _ = n.rootBone;
            if (_) {
                var d = A._getHierarchyPath(t, _, En._tempArray0);
                i.rootBone = d ? A._getNodeByHierarchyPath(r, d) : _;
            }
            for (var c = 0; c < o.length; c++) d = A._getHierarchyPath(t, o[c], En._tempArray0), 
            l[c] = d ? A._getNodeByHierarchyPath(r, d) : o[c];
            var u = n.localBounds;
            u && u.cloneTo(i.localBounds), i.simpleAnimatorOffset = n.simpleAnimatorOffset, 
            i.simpleAnimatorTexture = n.simpleAnimatorTexture, i._bonesNums = n._bonesNums, 
            super._cloneTo(e, t, r);
        }
        destroy(e = !0) {
            this.destroyed || (super.destroy(e), this._meshFilter.destroy());
        }
        _create() {
            return new En();
        }
    }
    En._tempArray0 = [], En.SIMPLE_SIMPLEANIMATORTEXTURE = Z.propertyNameToID("u_SimpleAnimatorTexture"), 
    En.SIMPLE_SIMPLEANIMATORPARAMS = Z.propertyNameToID("u_SimpleAnimatorParams"), En.SIMPLE_SIMPLEANIMATORTEXTURESIZE = Z.propertyNameToID("u_SimpleAnimatorTextureSize");
    class Tn {
        static _createSprite3DInstance(e, t, r) {
            var a;
            switch (e.type) {
              case "Scene3D":
                a = new Jt();
                break;

              case "Sprite3D":
                a = new $();
                break;

              case "MeshSprite3D":
                a = new pr(), r && e.props.isStatic && r.push(a);
                break;

              case "SkinnedMeshSprite3D":
                a = new ra();
                break;

              case "SimpleSkinnedMeshSprite3D":
                a = new En();
                break;

              case "ShuriKenParticle3D":
                a = new $r();
                break;

              case "Camera":
                a = new ft();
                break;

              case "DirectionLight":
                a = new cn();
                break;

              case "PointLight":
                a = new un();
                break;

              case "SpotLight":
                a = new mn();
                break;

              case "TrailSprite3D":
                a = new ha();
                break;

              case "ReflectionProbe":
                a = new Bt();
                break;

              default:
                throw new Error("Utils3D:unidentified class type in (.lh) file.");
            }
            var n = e.child;
            if (n) for (var i = 0, s = n.length; i < s; i++) {
                var o = Tn._createSprite3DInstance(n[i], t, r);
                a.addChild(o);
            }
            return t[e.instanceID] = a, a;
        }
        static _createComponentInstance(e, r, a) {
            var n = r[e.instanceID];
            n._parse(e.props, r);
            var i = e.child;
            if (i) for (var s = 0, o = i.length; s < o; s++) Tn._createComponentInstance(i[s], r, a);
            var l = e.components;
            if (l) for (var h = 0, _ = l.length; h < _; h++) {
                var d = l[h], c = t.ClassUtils.getRegClass(d.type);
                if (c) n.addComponent(c)._parse(d, a); else console.warn("Unkown component type.");
            }
        }
        static _createNodeByJson02(e, t) {
            var r = {}, a = {
                component: [],
                data: []
            }, n = Tn._createSprite3DInstance(e, r, t);
            return Tn._createComponentInstance(e, r, a), Tn._createInteractInstance(a, r), n;
        }
        static _createInteractInstance(e, t) {
            for (var r = e.component, a = e.data, n = 0, i = r.length; n < i; n++) r[n]._parseInteractive(a[n], t);
        }
        static _parse(e, t = null, r = null) {
            var a, n = e.data, i = [];
            switch (e.version) {
              case "LAYAHIERARCHY:02":
                a = Tn._createNodeByJson02(n, i);
                break;

              default:
                a = Tn._createNodeByJson(n, i);
            }
            return Pt.combine(a, i), a;
        }
        static _parseScene(e, t = null, r = null) {
            var a, n = e.data, i = [];
            switch (e.version) {
              case "LAYASCENE3D:02":
                a = Tn._createNodeByJson02(n, i);
                break;

              default:
                a = Tn._createNodeByJson(n, i);
            }
            return Pt.combine(null, i), a;
        }
        static _createNodeByJson(e, r) {
            var a;
            switch (e.type) {
              case "Scene3D":
                a = new Jt();
                break;

              case "Sprite3D":
                a = new $();
                break;

              case "MeshSprite3D":
                a = new pr(), r && e.props.isStatic && r.push(a);
                break;

              case "SkinnedMeshSprite3D":
                a = new ra();
                break;

              case "ShuriKenParticle3D":
                a = new $r();
                break;

              case "Camera":
                a = new ft();
                break;

              case "DirectionLight":
                a = new cn();
                break;

              case "PointLight":
                a = new un();
                break;

              case "SpotLight":
                a = new mn();
                break;

              case "TrailSprite3D":
                a = new ha();
                break;

              default:
                throw new Error("Utils3D:unidentified class type in (.lh) file.");
            }
            var n = e.child;
            if (n) for (var i = 0, s = n.length; i < s; i++) {
                var o = Tn._createNodeByJson(n[i], r);
                a.addChild(o);
            }
            var l = e.components;
            if (l) for (var h = 0, _ = l.length; h < _; h++) {
                var d = l[h], c = t.ClassUtils.getRegClass(d.type);
                if (c) a.addComponent(c)._parse(d); else console.warn("Unkown component type.");
            }
            return a._parse(e.props, null), a;
        }
    }
    class pn {
        static parse(e, t, r, a) {
            pn._mesh = r, pn._subMeshes = a, pn._version = t, pn._readData = e, pn.READ_DATA(), 
            pn.READ_BLOCK(), pn.READ_STRINGS();
            for (var n = 0, i = pn._BLOCK.count; n < i; n++) {
                pn._readData.pos = pn._BLOCK.blockStarts[n];
                var s = pn._readData.getUint16(), o = pn._strings[s], l = pn["READ_" + o];
                if (null == l) throw new Error("model file err,no this function:" + s + " " + o);
                l.call(null);
            }
            pn._strings.length = 0, pn._readData = null, pn._version = null, pn._mesh = null, 
            pn._subMeshes = null;
        }
        static _readString() {
            return pn._strings[pn._readData.getUint16()];
        }
        static READ_DATA() {
            pn._DATA.offset = pn._readData.getUint32(), pn._DATA.size = pn._readData.getUint32();
        }
        static READ_BLOCK() {
            for (var e = pn._BLOCK.count = pn._readData.getUint16(), t = pn._BLOCK.blockStarts = [], r = pn._BLOCK.blockLengths = [], a = 0; a < e; a++) t.push(pn._readData.getUint32()), 
            r.push(pn._readData.getUint32());
        }
        static READ_STRINGS() {
            var e = pn._readData.getUint32(), t = pn._readData.getUint16(), r = pn._readData.pos;
            pn._readData.pos = e + pn._DATA.offset;
            for (var a = 0; a < t; a++) pn._strings[a] = pn._readData.readUTFString();
            pn._readData.pos = r;
        }
        static READ_MESH() {
            var r, a = t.LayaGL.instance, n = (pn._readString(), pn._readData.__getBuffer()), i = 0, s = pn._readData.getInt16(), o = pn._DATA.offset;
            for (r = 0; r < s; r++) {
                var l, h = o + pn._readData.getUint32(), _ = pn._readData.getUint32(), d = n.slice(h, h + _), c = new Float32Array(d), u = pn._readString();
                switch (pn._version) {
                  case "LAYAMODEL:0301":
                  case "LAYAMODEL:0400":
                    l = ie.getVertexDeclaration(u);
                    break;

                  case "LAYAMODEL:0401":
                    l = ie.getVertexDeclaration(u, !1);
                    break;

                  default:
                    throw new Error("LoadModelV03: unknown version.");
                }
                if (!l) throw new Error("LoadModelV03: unknown vertexDeclaration.");
                var m = new V(4 * c.length, a.STATIC_DRAW, !0);
                m.vertexDeclaration = l, m.setData(c.buffer), pn._mesh._vertexBuffer = m, pn._mesh._vertexCount += m._byteLength / l.vertexStride, 
                i += 4 * c.length;
            }
            var f = o + pn._readData.getUint32(), E = pn._readData.getUint32(), T = new Uint16Array(n.slice(f, f + E)), p = new st(e.IndexFormat.UInt16, E / 2, a.STATIC_DRAW, !0);
            p.setData(T), pn._mesh._indexBuffer = p, i += 2 * p.indexCount, pn._mesh._setBuffer(pn._mesh._vertexBuffer, p), 
            pn._mesh._setCPUMemory(i), pn._mesh._setGPUMemory(i);
            var g = pn._mesh._boneNames = [], S = pn._readData.getUint16();
            for (g.length = S, r = 0; r < S; r++) g[r] = pn._strings[pn._readData.getUint16()];
            pn._readData.pos += 8;
            var R = pn._readData.getUint32(), v = pn._readData.getUint32(), x = new Float32Array(n.slice(o + R, o + R + v)), A = x.length, I = pn._mesh._inverseBindPosesBuffer = new ArrayBuffer(4 * A);
            for (pn._mesh._inverseBindPoses = [], pn._mesh._instanceBufferStateType = 0 != A ? ua.MESH_INSTANCEBUFFER_TYPE_SIMPLEANIMATOR : ua.MESH_INSTANCEBUFFER_TYPE_NORMAL, 
            pn._mesh._setInstanceBuffer(pn._mesh._instanceBufferStateType), r = 0; r < A; r += 16) {
                var M = new b(x[r + 0], x[r + 1], x[r + 2], x[r + 3], x[r + 4], x[r + 5], x[r + 6], x[r + 7], x[r + 8], x[r + 9], x[r + 10], x[r + 11], x[r + 12], x[r + 13], x[r + 14], x[r + 15], new Float32Array(I, 4 * r, 16));
                pn._mesh._inverseBindPoses[r / 16] = M;
            }
            return !0;
        }
        static READ_SUBMESH() {
            var e = pn._readData.__getBuffer(), t = new da(pn._mesh);
            pn._readData.getInt16(), pn._readData.getUint32(), pn._readData.getUint32();
            var r = pn._readData.getUint32(), a = pn._readData.getUint32(), n = pn._mesh._indexBuffer;
            t._indexBuffer = n, t._setIndexRange(r, a);
            var i = pn._mesh._vertexBuffer;
            t._vertexBuffer = i;
            var s = pn._DATA.offset, o = t._subIndexBufferStart, l = t._subIndexBufferCount, h = t._boneIndicesList, _ = pn._readData.getUint16();
            o.length = _, l.length = _, h.length = _;
            var d = pn._mesh._skinnedMatrixCaches, c = pn._subMeshes.length;
            d.length = pn._mesh._inverseBindPoses.length;
            for (var u = 0; u < _; u++) {
                o[u] = pn._readData.getUint32(), l[u] = pn._readData.getUint32();
                for (var m = pn._readData.getUint32(), f = pn._readData.getUint32(), E = h[u] = new Uint16Array(e.slice(s + m, s + m + f)), T = E.length, p = 0; p < T; p++) {
                    var g = E[p];
                    d[g] || (d[g] = new ca(c, u, p));
                }
            }
            return pn._subMeshes.push(t), !0;
        }
    }
    pn._BLOCK = {
        count: 0
    }, pn._DATA = {
        offset: 0,
        size: 0
    }, pn._strings = [];
    class gn {
        static parse(e, t, r, a) {
            gn._mesh = r, gn._subMeshes = a, gn._version = t, gn._readData = e, gn.READ_DATA(), 
            gn.READ_BLOCK(), gn.READ_STRINGS();
            for (var n = 0, i = gn._BLOCK.count; n < i; n++) {
                gn._readData.pos = gn._BLOCK.blockStarts[n];
                var s = gn._readData.getUint16(), o = gn._strings[s], l = gn["READ_" + o];
                if (null == l) throw new Error("model file err,no this function:" + s + " " + o);
                l.call(null);
            }
            gn._strings.length = 0, gn._readData = null, gn._version = null, gn._mesh = null, 
            gn._subMeshes = null;
        }
        static _readString() {
            return gn._strings[gn._readData.getUint16()];
        }
        static READ_DATA() {
            gn._DATA.offset = gn._readData.getUint32(), gn._DATA.size = gn._readData.getUint32();
        }
        static READ_BLOCK() {
            for (var e = gn._BLOCK.count = gn._readData.getUint16(), t = gn._BLOCK.blockStarts = [], r = gn._BLOCK.blockLengths = [], a = 0; a < e; a++) t.push(gn._readData.getUint32()), 
            r.push(gn._readData.getUint32());
        }
        static READ_STRINGS() {
            var e = gn._readData.getUint32(), t = gn._readData.getUint16(), r = gn._readData.pos;
            gn._readData.pos = e + gn._DATA.offset;
            for (var a = 0; a < t; a++) gn._strings[a] = gn._readData.readUTFString();
            gn._readData.pos = r;
        }
        static READ_MESH() {
            var r, a = t.LayaGL.instance, n = 0, i = (gn._readString(), gn._readData), s = i.__getBuffer(), o = i.getInt16(), l = gn._DATA.offset;
            for (r = 0; r < o; r++) {
                var h, _, d, c = l + i.getUint32(), u = i.getUint32(), m = gn._readString(), f = ie.getVertexDeclaration(m, !1), E = f.vertexStride, T = m.split(","), p = T.length, g = gn._mesh;
                switch (gn._version) {
                  case "LAYAMODEL:05":
                  case "LAYAMODEL:0501":
                    h = s.slice(c, c + u * E), _ = new Float32Array(h), d = new Uint8Array(h);
                    break;

                  case "LAYAMODEL:COMPRESSION_05":
                  case "LAYAMODEL:COMPRESSION_0501":
                    h = new ArrayBuffer(E * u), _ = new Float32Array(h), d = new Uint8Array(h);
                    var S = i.pos;
                    i.pos = c;
                    for (var R = 0; R < u; R++) for (var v, x = R * E, A = 0; A < p; A++) switch (T[A]) {
                      case "POSITION":
                        _[v = x / 4] = t.HalfFloatUtils.convertToNumber(i.getUint16()), _[v + 1] = t.HalfFloatUtils.convertToNumber(i.getUint16()), 
                        _[v + 2] = t.HalfFloatUtils.convertToNumber(i.getUint16()), x += 12;
                        break;

                      case "NORMAL":
                        _[v = x / 4] = i.getUint8() / 127.5 - 1, _[v + 1] = i.getUint8() / 127.5 - 1, _[v + 2] = i.getUint8() / 127.5 - 1, 
                        x += 12;
                        break;

                      case "COLOR":
                        _[v = x / 4] = i.getUint8() / 255, _[v + 1] = i.getUint8() / 255, _[v + 2] = i.getUint8() / 255, 
                        _[v + 3] = i.getUint8() / 255, x += 16;
                        break;

                      case "UV":
                      case "UV1":
                        _[v = x / 4] = t.HalfFloatUtils.convertToNumber(i.getUint16()), _[v + 1] = t.HalfFloatUtils.convertToNumber(i.getUint16()), 
                        x += 8;
                        break;

                      case "BLENDWEIGHT":
                        _[v = x / 4] = i.getUint8() / 255, _[v + 1] = i.getUint8() / 255, _[v + 2] = i.getUint8() / 255, 
                        _[v + 3] = i.getUint8() / 255, x += 16;
                        break;

                      case "BLENDINDICES":
                        d[x] = i.getUint8(), d[x + 1] = i.getUint8(), d[x + 2] = i.getUint8(), d[x + 3] = i.getUint8(), 
                        x += 4;
                        break;

                      case "TANGENT":
                        _[v = x / 4] = i.getUint8() / 127.5 - 1, _[v + 1] = i.getUint8() / 127.5 - 1, _[v + 2] = i.getUint8() / 127.5 - 1, 
                        _[v + 3] = i.getUint8() / 127.5 - 1, x += 16;
                    }
                    i.pos = S;
                }
                var I = new V(h.byteLength, a.STATIC_DRAW, !0);
                I.vertexDeclaration = f, I.setData(h);
                u = I._byteLength / f.vertexStride;
                g._indexFormat = u > 65535 ? e.IndexFormat.UInt32 : e.IndexFormat.UInt16, g._vertexBuffer = I, 
                g._vertexCount += u, n += 4 * _.length;
            }
            var M, D = l + i.getUint32(), L = i.getUint32();
            M = g.indexFormat == e.IndexFormat.UInt32 ? new Uint32Array(s.slice(D, D + L)) : new Uint16Array(s.slice(D, D + L));
            var y = new st(g.indexFormat, M.length, a.STATIC_DRAW, !0);
            if (y.setData(M), g._indexBuffer = y, g._setBuffer(g._vertexBuffer, y), n += 2 * y.indexCount, 
            g._setCPUMemory(n), g._setGPUMemory(n), "LAYAMODEL:0501" == gn._version || "LAYAMODEL:COMPRESSION_0501" == gn._version) {
                var C = g.bounds, O = C.getMin(), N = C.getMax();
                O.setValue(i.getFloat32(), i.getFloat32(), i.getFloat32()), N.setValue(i.getFloat32(), i.getFloat32(), i.getFloat32()), 
                C.setMin(O), C.setMax(N), g.bounds = C;
            }
            var P = g._boneNames = [], w = i.getUint16();
            for (P.length = w, r = 0; r < w; r++) P[r] = gn._strings[i.getUint16()];
            var B = i.getUint32(), F = i.getUint32(), U = new Float32Array(s.slice(l + B, l + B + F)), H = U.length, G = g._inverseBindPosesBuffer = new ArrayBuffer(4 * H);
            for (g._inverseBindPoses = [], g._instanceBufferStateType = 0 != H ? ua.MESH_INSTANCEBUFFER_TYPE_SIMPLEANIMATOR : ua.MESH_INSTANCEBUFFER_TYPE_NORMAL, 
            g._setInstanceBuffer(g._instanceBufferStateType), r = 0; r < H; r += 16) {
                var z = new b(U[r + 0], U[r + 1], U[r + 2], U[r + 3], U[r + 4], U[r + 5], U[r + 6], U[r + 7], U[r + 8], U[r + 9], U[r + 10], U[r + 11], U[r + 12], U[r + 13], U[r + 14], U[r + 15], new Float32Array(G, 4 * r, 16));
                g._inverseBindPoses[r / 16] = z;
            }
            return !0;
        }
        static READ_SUBMESH() {
            var e = gn._readData, t = e.__getBuffer(), r = new da(gn._mesh);
            e.getInt16();
            var a = e.getUint32(), n = e.getUint32(), i = gn._mesh._indexBuffer;
            r._indexBuffer = i, r._setIndexRange(a, n);
            var s = gn._mesh._vertexBuffer;
            r._vertexBuffer = s;
            var o = gn._DATA.offset, l = r._subIndexBufferStart, h = r._subIndexBufferCount, _ = r._boneIndicesList, d = e.getUint16();
            l.length = d, h.length = d, _.length = d;
            var c = gn._mesh._skinnedMatrixCaches, u = gn._subMeshes.length;
            c.length = gn._mesh._inverseBindPoses.length;
            for (var m = 0; m < d; m++) {
                l[m] = e.getUint32(), h[m] = e.getUint32();
                for (var f = e.getUint32(), E = e.getUint32(), T = _[m] = new Uint16Array(t.slice(o + f, o + f + E)), p = 0, g = T.length; p < g; p++) {
                    var S = T[p];
                    c[S] || (c[S] = new ca(u, m, p));
                }
            }
            return gn._subMeshes.push(r), !0;
        }
    }
    gn._BLOCK = {
        count: 0
    }, gn._DATA = {
        offset: 0,
        size: 0
    }, gn._strings = [];
    class Sn {
        static _parse(e, t = null, r = null) {
            var a = new ua();
            return Sn.read(e, a, a._subMeshes), a;
        }
        static read(e, r, a) {
            var n = new t.Byte(e);
            n.pos = 0;
            var i = n.readUTFString();
            switch (i) {
              case "LAYAMODEL:0301":
              case "LAYAMODEL:0400":
              case "LAYAMODEL:0401":
                pn.parse(n, i, r, a);
                break;

              case "LAYAMODEL:05":
              case "LAYAMODEL:COMPRESSION_05":
              case "LAYAMODEL:0501":
              case "LAYAMODEL:COMPRESSION_0501":
                gn.parse(n, i, r, a);
                break;

              default:
                throw new Error("MeshReader: unknown mesh version.");
            }
            r._setSubMeshes(a), "LAYAMODEL:0501" != i && "LAYAMODEL:COMPRESSION_0501" != i && r.calculateBounds();
        }
    }
    var Rn, vn = '#if defined(GL_FRAGMENT_PRECISION_HIGH)// 原来的写法会被我们自己的解析流程处理，而我们的解析是不认内置宏的，导致被删掉，所以改成 if defined 了\r\n\tprecision highp float;\r\n#else\r\n\tprecision mediump float;\r\n#endif\r\n\r\n#define PI 3.14159265359\r\n#include "Lighting.glsl";\r\n\r\nuniform sampler2D u_Texture;\r\nuniform vec4 u_TextureHDRParams;\r\nuniform vec4 u_TintColor;\r\n\r\nvarying vec3 v_Texcoord;\r\nvarying vec2 v_Image180ScaleAndCutoff;\r\nvarying vec4 v_Layout3DScaleAndOffset;\r\n\r\nvec2 ToRadialCoords(vec3 coords)\r\n{\r\n\tvec3 normalizedCoords = normalize(coords);\r\n\tfloat latitude = acos(normalizedCoords.y);\r\n\tfloat longitude = atan(normalizedCoords.z,normalizedCoords.x);\r\n\tvec2 sphereCoords = vec2(longitude, latitude) * vec2(0.5/PI, 1.0/PI);\r\n\treturn vec2(0.5,1.0) - sphereCoords;\r\n}\r\n\r\n\r\nvoid main()\r\n{\t\r\n\tvec2 tc = ToRadialCoords(v_Texcoord);\r\n\tif (tc.x > v_Image180ScaleAndCutoff.y)\r\n\t\tgl_FragColor=vec4(0,0,0,1);\r\n\ttc.x = mod(tc.x*v_Image180ScaleAndCutoff.x, 1.0);\r\n\ttc = (tc + v_Layout3DScaleAndOffset.xy) * v_Layout3DScaleAndOffset.zw;\r\n\r\n\tmediump vec4 tex = texture2D (u_Texture, tc);\r\n\tmediump vec3 c = decodeHDR (tex, u_TextureHDRParams.x);\r\n\tc = c * u_TintColor.rgb * 2.0;//Gamma Space is 2.0,linear space is 4.59479380\r\n\tgl_FragColor=vec4(c, 1.0);\r\n}\r\n\r\n', xn = '#include "Lighting.glsl";\n\n#define PI 3.14159265359\n\nattribute vec4 a_Position;\n\nuniform mat4 u_ViewProjection;\nuniform float u_Rotation;\n\nvarying vec3 v_Texcoord;\nvarying vec2 v_Image180ScaleAndCutoff;\nvarying vec4 v_Layout3DScaleAndOffset;\n\nvec4 rotateAroundYInDegrees (vec4 vertex, float degrees)\n{\n\tfloat angle = degrees * PI / 180.0;\n\tfloat sina=sin(angle);\n\tfloat cosa=cos(angle);\n\tmat2 m = mat2(cosa, -sina, sina, cosa);\n\treturn vec4(m*vertex.xz, vertex.yw).xzyw;\n}\n\n\t\t\nvoid main()\n{\n\tvec4 position = rotateAroundYInDegrees(a_Position, u_Rotation);\n\tgl_Position = u_ViewProjection*position;\n\n\tv_Texcoord=vec3(-a_Position.x,-a_Position.y,a_Position.z);// NOTE: -a_Position.x convert coords system\n\n\t// Calculate constant horizontal scale and cutoff for 180 (vs 360) image type\n\tv_Image180ScaleAndCutoff = vec2(1.0, 1.0);// 360 degree mode\n\n\t// Calculate constant scale and offset for 3D layouts\n\tv_Layout3DScaleAndOffset = vec4(0,0,1,1);\n}\n';
    class An extends ue {
        constructor() {
            super(), this._exposure = 1, this._textureDecodeFormat = t.TextureDecodeFormat.Normal, 
            this._textureHDRParams = new n(1, 0, 0, 1), this.setShaderName("SkyPanoramic");
            var e = this._shaderValues;
            e.setVector(An.TINTCOLOR, new n(.5, .5, .5, .5)), e.setNumber(An.ROTATION, 0), e.setVector(An.TEXTURE_HDR_PARAMS, this._textureHDRParams);
        }
        static __init__() {
            var e = {
                a_Position: ie.MESH_POSITION0
            }, t = {
                u_TintColor: Z.PERIOD_MATERIAL,
                u_TextureHDRParams: Z.PERIOD_MATERIAL,
                u_Rotation: Z.PERIOD_MATERIAL,
                u_Texture: Z.PERIOD_MATERIAL,
                u_ViewProjection: Z.PERIOD_CAMERA
            }, r = Z.add("SkyPanoramic"), a = new er(e, t);
            r.addSubShader(a), a.addShaderPass(xn, vn);
        }
        get tintColor() {
            return this._shaderValues.getVector(An.TINTCOLOR);
        }
        set tintColor(e) {
            this._shaderValues.setVector(An.TINTCOLOR, e);
        }
        get exposure() {
            return this._exposure;
        }
        set exposure(e) {
            this._exposure !== e && (this._exposure = e, this._textureDecodeFormat == t.TextureDecodeFormat.RGBM ? this._textureHDRParams.x = e * t.BaseTexture._rgbmRange : this._textureHDRParams.x = e);
        }
        get rotation() {
            return this._shaderValues.getNumber(An.ROTATION);
        }
        set rotation(e) {
            this._shaderValues.setNumber(An.ROTATION, e);
        }
        get panoramicTexture() {
            return this._shaderValues.getTexture(An.TEXTURE);
        }
        set panoramicTexture(e) {
            this._shaderValues.setTexture(An.TEXTURE, e);
        }
        get panoramicTextureDecodeFormat() {
            return this._textureDecodeFormat;
        }
        set panoramicTextureDecodeFormat(e) {
            this._textureDecodeFormat !== e && (this._textureDecodeFormat = e, e == t.TextureDecodeFormat.RGBM ? this._textureHDRParams.x = this._exposure * t.BaseTexture._rgbmRange : this._textureHDRParams.x = this._exposure);
        }
    }
    An.TINTCOLOR = Z.propertyNameToID("u_TintColor"), An.EXPOSURE = Z.propertyNameToID("u_Exposure"), 
    An.ROTATION = Z.propertyNameToID("u_Rotation"), An.TEXTURE = Z.propertyNameToID("u_Texture"), 
    An.TEXTURE_HDR_PARAMS = Z.propertyNameToID("u_TextureHDRParams");
    class In {
        constructor() {}
        static get enablePhysics() {
            return _._enablePhysics;
        }
        static _cancelLoadByUrl(e) {
            t.Laya.loader.cancelLoadByUrl(e), In._innerFirstLevelLoaderManager.cancelLoadByUrl(e), 
            In._innerSecondLevelLoaderManager.cancelLoadByUrl(e), In._innerThirdLevelLoaderManager.cancelLoadByUrl(e), 
            In._innerFourthLevelLoaderManager.cancelLoadByUrl(e);
        }
        static _changeWebGLSize(e, r) {
            t.WebGL.onStageResize(e, r), N.clientWidth = e, N.clientHeight = r;
        }
        static __init__(r, a, n) {
            if (t.Config.isAntialias = n.isAntialias, t.Config.isAlpha = n.isAlpha, t.Config.premultipliedAlpha = n.premultipliedAlpha, 
            t.Config.isStencil = n.isStencil, t.WebGL.enable()) {
                t.RunDriver.changeWebGLSize = In._changeWebGLSize, t.Render.is3DMode = !0, t.Laya.init(r, a), 
                t.Render.supportWebGLPlusRendering || (t.LayaGL.instance = t.WebGLContext.mainContext, 
                t.LayaGL.instance.createCommandEncoder = function(e = 128, r = 64, a = !1) {
                    return new t.CommandEncoder(this, e, r, a);
                }), n._multiLighting = n.enableMultiLight && t.SystemUtils.supportTextureFormat(t.TextureFormat.R32G32B32A32), 
                h.Shader3D = Z, h.Scene3D = Jt, h.MeshRenderStaticBatchManager = Vt, h.MeshRenderDynamicBatchManager = Tr, 
                h.SubMeshDynamicBatch = Er, h.Laya3D = In, h.Matrix4x4 = b, h.Physics3D = _, h.ShadowLightType = e.ShadowLightType, 
                h.Camera = ft, h.CommandBuffer = oe, h.RenderElement = Ot, h.SubMeshRenderElement = Nt, 
                In.enableNative3D(), n.isUseCannonPhysicsEngine && _.__cannoninit__(), _.__bulletinit__(), 
                B.__init__(), ie.__init__(), Zr.__init__(), jr.__init__(), Tt.__init__(), ia.__init__(), 
                _a.__init__(), Mt.__init__(), Ct.__init__(), Er.__init__(), dn.__init__(), ut.init(), 
                ge.__init__(), hr.__init__(), tr.__init__(), An.__init__(), ua.__init__(), ma.__init__(), 
                $.__init__(), Lt.__init__(), pr.__init__(), ra.__init__(), En.__init__(), $r.__init__(), 
                ha.__init__(), he.__init__(), Jt.__init__(), Vt.__init__(), ue.__initDefine__(), 
                me.__initDefine__(), Ee.__initDefine__(), dr.__initDefine__(), cr.__initDefine__(), 
                aa.__initDefine__(), Te.__initDefine__(), ur.__initDefine__(), kr.__initDefine__(), 
                pe.__initDefine__(), vt.__initDefine__(), _r.__initDefine__(), j.__init__(), t.ClassUtils.regClass("Laya.SkyPanoramicMaterial", An), 
                t.ClassUtils.regClass("Laya.EffectMaterial", Te), t.ClassUtils.regClass("Laya.UnlitMaterial", cr), 
                t.ClassUtils.regClass("Laya.BlinnPhongMaterial", Ee), t.ClassUtils.regClass("Laya.SkyProceduralMaterial", dr), 
                t.ClassUtils.regClass("Laya.PBRStandardMaterial", hr), t.ClassUtils.regClass("Laya.PBRSpecularMaterial", tr), 
                t.ClassUtils.regClass("Laya.SkyBoxMaterial", _r), t.ClassUtils.regClass("Laya.WaterPrimaryMaterial", ur), 
                t.ClassUtils.regClass("Laya.ExtendTerrainMaterial", pe), t.ClassUtils.regClass("Laya.ShurikenParticleMaterial", kr), 
                t.ClassUtils.regClass("Laya.TrailMaterial", aa), t.ClassUtils.regClass("Laya.PhysicsCollider", t.PhysicsCollider), 
                t.ClassUtils.regClass("Laya.Rigidbody3D", t.Rigidbody3D), t.ClassUtils.regClass("Laya.CharacterController", t.CharacterController), 
                t.ClassUtils.regClass("Laya.Animator", O), t.ClassUtils.regClass("PhysicsCollider", t.PhysicsCollider), 
                t.ClassUtils.regClass("CharacterController", t.CharacterController), t.ClassUtils.regClass("Animator", O), 
                t.ClassUtils.regClass("Rigidbody3D", t.Rigidbody3D), t.ClassUtils.regClass("FixedConstraint", t.FixedConstraint), 
                t.ClassUtils.regClass("ConfigurableConstraint", t.ConfigurableConstraint), vt.defaultMaterial = new vt(), 
                Ee.defaultMaterial = new Ee(), Te.defaultMaterial = new Te(), cr.defaultMaterial = new cr(), 
                kr.defaultMaterial = new kr(), aa.defaultMaterial = new aa(), dr.defaultMaterial = new dr(), 
                _r.defaultMaterial = new _r(), ur.defaultMaterial = new ur(), vt.defaultMaterial.lock = !0, 
                Ee.defaultMaterial.lock = !0, Te.defaultMaterial.lock = !0, cr.defaultMaterial.lock = !0, 
                kr.defaultMaterial.lock = !0, aa.defaultMaterial.lock = !0, dr.defaultMaterial.lock = !0, 
                _r.defaultMaterial.lock = !0, ur.defaultMaterial.lock = !0, t.Texture2D.__init__(), 
                gt.__init__(), lt.__init__(), pt.__init__(), z.__init__(), k.__init__(), Ze.__init__(), 
                t.HalfFloatUtils.__init__();
                var i = t.LoaderManager.createMap;
                i.lh = [ In.HIERARCHY, Tn._parse ], i.ls = [ In.HIERARCHY, Tn._parseScene ], i.lm = [ In.MESH, Sn._parse ], 
                i.lmat = [ In.MATERIAL, ue._parse ], i.jpg = [ In.TEXTURE2D, t.Texture2D._parse ], 
                i.jpeg = [ In.TEXTURE2D, t.Texture2D._parse ], i.bmp = [ In.TEXTURE2D, t.Texture2D._parse ], 
                i.gif = [ In.TEXTURE2D, t.Texture2D._parse ], i.png = [ In.TEXTURE2D, t.Texture2D._parse ], 
                i.dds = [ In.TEXTURE2D, t.Texture2D._parse ], i.ktx = [ In.TEXTURE2D, t.Texture2D._parse ], 
                i.pvr = [ In.TEXTURE2D, t.Texture2D._parse ], i.lani = [ In.ANIMATIONCLIP, I._parse ], 
                i.lav = [ In.AVATAR, ce._parse ], i.ltc = [ In.TEXTURECUBE, gt._parse ], i.ltcb = [ In.TEXTURECUBEBIN, gt._parseBin ], 
                i["ltcb.ls"] = [ In.TEXTURECUBEBIN, gt._parseBin ], i["lanit.ls"] = [ In.TEXTURE2D, t.Texture2D._SimpleAnimatorTextureParse ];
                var s = t.Loader.parserMap;
                s[In.HIERARCHY] = In._loadHierarchy, s[In.MESH] = In._loadMesh, s[In.MATERIAL] = In._loadMaterial, 
                s[In.TEXTURECUBE] = In._loadTextureCube, s[In.TEXTURECUBEBIN] = In._loadTextureCubeBin, 
                s[In.TEXTURE2D] = In._loadTexture2D, s[In.ANIMATIONCLIP] = In._loadAnimationClip, 
                s[In.AVATAR] = In._loadAvatar, s[In.SIMPLEANIMATORBIN] = In._loadSimpleAnimator, 
                In._innerFirstLevelLoaderManager.on(t.Event.ERROR, null, In._eventLoadManagerError), 
                In._innerSecondLevelLoaderManager.on(t.Event.ERROR, null, In._eventLoadManagerError), 
                In._innerThirdLevelLoaderManager.on(t.Event.ERROR, null, In._eventLoadManagerError), 
                In._innerFourthLevelLoaderManager.on(t.Event.ERROR, null, In._eventLoadManagerError);
            } else alert("Laya3D init error,must support webGL!");
        }
        static enableNative3D() {
            var e = F, r = Ge;
            t.Render.supportWebGLPlusRendering && (e.prototype._initData = e.prototype._initDataForNative, 
            e.prototype.setBool = e.prototype.setBoolForNative, e.prototype.getBool = e.prototype.getBoolForNative, 
            e.prototype.setInt = e.prototype.setIntForNative, e.prototype.getInt = e.prototype.getIntForNative, 
            e.prototype.setNumber = e.prototype.setNumberForNative, e.prototype.getNumber = e.prototype.getNumberForNative, 
            e.prototype.setVector = e.prototype.setVectorForNative, e.prototype.getVector = e.prototype.getVectorForNative, 
            e.prototype.setVector2 = e.prototype.setVector2ForNative, e.prototype.getVector2 = e.prototype.getVector2ForNative, 
            e.prototype.setVector3 = e.prototype.setVector3ForNative, e.prototype.getVector3 = e.prototype.getVector3ForNative, 
            e.prototype.setQuaternion = e.prototype.setQuaternionForNative, e.prototype.getQuaternion = e.prototype.getQuaternionForNative, 
            e.prototype.setMatrix4x4 = e.prototype.setMatrix4x4ForNative, e.prototype.getMatrix4x4 = e.prototype.getMatrix4x4ForNative, 
            e.prototype.setBuffer = e.prototype.setBufferForNative, e.prototype.getBuffer = e.prototype.getBufferForNative, 
            e.prototype.setTexture = e.prototype.setTextureForNative, e.prototype.getTexture = e.prototype.getTextureForNative, 
            e.prototype.setAttribute = e.prototype.setAttributeForNative, e.prototype.getAttribute = e.prototype.getAttributeForNative, 
            e.prototype.cloneTo = e.prototype.cloneToForNative, e.prototype.getData = e.prototype.getDataForNative, 
            r.prototype._uniformMatrix2fv = r.prototype._uniformMatrix2fvForNative, r.prototype._uniformMatrix3fv = r.prototype._uniformMatrix3fvForNative, 
            r.prototype._uniformMatrix4fv = r.prototype._uniformMatrix4fvForNative, t.LayaGLRunner.uploadShaderUniforms = t.LayaGLRunner.uploadShaderUniformsForNative);
        }
        static formatRelativePath(e, t) {
            var r;
            if (r = e + t, "." === t.charAt(0)) {
                for (var a = r.split("/"), n = 0, i = a.length; n < i; n++) if (".." == a[n]) {
                    var s = n - 1;
                    s > 0 && ".." !== a[s] && (a.splice(s, 2), n -= 2);
                }
                r = a.join("/");
            }
            return r;
        }
        static _endLoad(e, r = null, a = null) {
            if (a) for (var n = 0, i = a.length; n < i; n++) {
                var s = t.Loader.getRes(a[n]);
                s && s._removeReference();
            }
            e.endLoad(r);
        }
        static _eventLoadManagerError(e) {
            t.Laya.loader.event(t.Event.ERROR, e);
        }
        static _addHierarchyInnerUrls(e, t, r, a, n, i, s = null, o = null) {
            var l = In.formatRelativePath(a, n);
            return r && (l += r), e.push({
                url: l,
                type: i,
                constructParams: s,
                propertyParams: o
            }), t.push(l), l;
        }
        static _getSprite3DHierarchyInnerUrls(e, t, r, a, n, i, s, o) {
            var l, h, _ = e.props;
            switch (e.type) {
              case "Scene3D":
                var d = _.lightmaps;
                for (l = 0, h = d.length; l < h; l++) {
                    var c = d[l];
                    if (c.path) c.path = In._addHierarchyInnerUrls(n, i, s, o, c.path, In.TEXTURE2D, c.constructParams, c.propertyParams); else {
                        var u = c.color;
                        u.path = In._addHierarchyInnerUrls(n, i, s, o, u.path, In.TEXTURE2D, u.constructParams, u.propertyParams);
                        var m = c.direction;
                        m && (m.path = In._addHierarchyInnerUrls(n, i, s, o, m.path, In.TEXTURE2D, m.constructParams, m.propertyParams));
                    }
                }
                var f = _.reflectionTexture;
                f && (_.reflection = In._addHierarchyInnerUrls(a, i, s, o, f, In.TEXTURECUBE));
                var E = _.reflection;
                if (E && (_.reflection = In._addHierarchyInnerUrls(n, i, s, o, E, In.TEXTURECUBEBIN)), 
                _.sky) {
                    var T = _.sky.material;
                    T && (T.path = In._addHierarchyInnerUrls(r, i, s, o, T.path, In.MATERIAL));
                }
                break;

              case "Camera":
                var p = _.skyboxMaterial;
                p && (p.path = In._addHierarchyInnerUrls(r, i, s, o, p.path, In.MATERIAL));
                break;

              case "TrailSprite3D":
              case "MeshSprite3D":
              case "SkinnedMeshSprite3D":
              case "SimpleSkinnedMeshSprite3D":
                var g = _.meshPath;
                g && (_.meshPath = In._addHierarchyInnerUrls(t, i, s, o, g, In.MESH));
                var S = _.materials;
                if (S) for (l = 0, h = S.length; l < h; l++) S[l].path = In._addHierarchyInnerUrls(r, i, s, o, S[l].path, In.MATERIAL);
                "SimpleSkinnedMeshSprite3D" == e.type && _.animatorTexture && (_.animatorTexture = In._addHierarchyInnerUrls(n, i, s, o, _.animatorTexture, In.SIMPLEANIMATORBIN));
                break;

              case "ShuriKenParticle3D":
                if (_.main) {
                    var R = _.renderer.resources, v = R.mesh, x = R.material;
                    v && (R.mesh = In._addHierarchyInnerUrls(t, i, s, o, v, In.MESH)), x && (R.material = In._addHierarchyInnerUrls(r, i, s, o, x, In.MATERIAL));
                } else {
                    var A = _.meshPath;
                    A && (_.meshPath = In._addHierarchyInnerUrls(t, i, s, o, A, In.MESH)), _.material.path = In._addHierarchyInnerUrls(r, i, s, o, _.material.path, In.MATERIAL);
                }
                break;

              case "Terrain":
                In._addHierarchyInnerUrls(n, i, s, o, _.dataPath, In.TERRAINRES);
                break;

              case "ReflectionProbe":
                var I = _.reflection;
                I && (_.reflection = In._addHierarchyInnerUrls(t, i, s, o, I, In.TEXTURECUBEBIN));
            }
            var M = e.components;
            if (M) for (var D = 0, L = M.length; D < L; D++) {
                var y = M[D];
                switch (y.type) {
                  case "Animator":
                    y.avatarPath;
                    var C = y.avatar;
                    C && (C.path = In._addHierarchyInnerUrls(n, i, s, o, C.path, In.AVATAR));
                    var O = y.clipPaths;
                    if (O) for (l = 0, h = O.length; l < h; l++) O[l] = In._addHierarchyInnerUrls(n, i, s, o, O[l], In.ANIMATIONCLIP); else {
                        var N = y.layers;
                        for (l = 0; l < N.length; l++) for (var P = N[l].states, w = 0, V = P.length; w < V; w++) {
                            var B = P[w].clipPath;
                            B && (P[w].clipPath = In._addHierarchyInnerUrls(n, i, s, o, B, In.ANIMATIONCLIP));
                        }
                    }
                    break;

                  case "PhysicsCollider":
                  case "Rigidbody3D":
                  case "CharacterController":
                    var b = y.shapes;
                    for (l = 0; l < b.length; l++) {
                        var F = b[l];
                        if ("MeshColliderShape" === F.type) (v = F.mesh) && (F.mesh = In._addHierarchyInnerUrls(t, i, s, o, v, In.MESH));
                    }
                }
            }
            var U = e.child;
            for (l = 0, h = U.length; l < h; l++) In._getSprite3DHierarchyInnerUrls(U[l], t, r, a, n, i, s, o);
        }
        static _loadHierarchy(e) {
            e._originType = e.type, e.on(t.Event.LOADED, null, In._onHierarchylhLoaded, [ e ]), 
            e.load(e.url, t.Loader.JSON, !1, null, !0);
        }
        static _onHierarchylhLoaded(e, r) {
            var a = e.url, n = A.getURLVerion(a), i = t.URL.getPath(a), s = [], o = [], l = [], h = [], _ = [];
            In._getSprite3DHierarchyInnerUrls(r.data, s, o, l, h, _, n, i);
            var d = s.length + o.length + h.length, c = d + 1, u = 1 / c;
            if (In._onProcessChange(e, 0, u, 1), h.length > 0) {
                var m = d / c, f = t.Handler.create(null, In._onProcessChange, [ e, u, m ], !1);
                In._innerFourthLevelLoaderManager._create(h, !1, t.Handler.create(null, In._onHierarchyInnerForthLevResouLoaded, [ e, f, r, _, s, o, l, u + m * h.length, m ]), f, null, null, null, 1, !0);
            } else In._onHierarchyInnerForthLevResouLoaded(e, null, r, _, s, o, l, u, m);
        }
        static _onHierarchyInnerForthLevResouLoaded(e, r, a, n, i, s, o, l, h) {
            if (r && r.recover(), o.length > 0) {
                var _ = t.Handler.create(null, In._onProcessChange, [ e, l, h ], !1);
                In._innerThirdLevelLoaderManager._create(o, !1, t.Handler.create(null, In._onHierarchyInnerThirdLevResouLoaded, [ e, _, a, n, i, s, l + h * s.length, h ]), r, null, null, null, 1, !0);
            } else In._onHierarchyInnerThirdLevResouLoaded(e, null, a, n, i, s, l, h);
        }
        static _onHierarchyInnerThirdLevResouLoaded(e, r, a, n, i, s, o, l) {
            if (r && r.recover(), s.length > 0) {
                var h = t.Handler.create(null, In._onProcessChange, [ e, o, l ], !1);
                In._innerSecondLevelLoaderManager._create(s, !1, t.Handler.create(null, In._onHierarchyInnerSecondLevResouLoaded, [ e, h, a, n, i, o + l * s.length, l ]), r, null, null, null, 1, !0);
            } else In._onHierarchyInnerSecondLevResouLoaded(e, null, a, n, i, o, l);
        }
        static _onHierarchyInnerSecondLevResouLoaded(e, r, a, n, i, s, o) {
            if (r && r.recover(), i.length > 0) {
                var l = t.Handler.create(null, In._onProcessChange, [ e, s, o ], !1);
                In._innerFirstLevelLoaderManager._create(i, !1, t.Handler.create(null, In._onHierarchyInnerFirstLevResouLoaded, [ e, l, a, n ]), r, null, null, null, 1, !0);
            } else In._onHierarchyInnerFirstLevResouLoaded(e, null, a, n);
        }
        static _onHierarchyInnerFirstLevResouLoaded(e, t, r, a) {
            t && t.recover(), e._cache = e._createCache;
            var n = "Scene3D" === r.data.type ? Tn._parseScene(r, e._propertyParams, e._constructParams) : Tn._parse(r, e._propertyParams, e._constructParams);
            In._endLoad(e, n, a);
        }
        static _loadMesh(e) {
            e.on(t.Event.LOADED, null, In._onMeshLmLoaded, [ e ]), e.load(e.url, t.Loader.BUFFER, !1, null, !0);
        }
        static _onMeshLmLoaded(e, t) {
            e._cache = e._createCache;
            var r = Sn._parse(t, e._propertyParams, e._constructParams);
            In._endLoad(e, r);
        }
        static _loadMaterial(e) {
            e.on(t.Event.LOADED, null, In._onMaterilLmatLoaded, [ e ]), e.load(e.url, t.Loader.JSON, !1, null, !0);
        }
        static _onMaterilLmatLoaded(e, r) {
            var a, n = e.url, i = A.getURLVerion(n), s = t.URL.getPath(n), o = [], l = [];
            r.customProps;
            switch (r.version) {
              case "LAYAMATERIAL:01":
              case "LAYAMATERIAL:02":
              case "LAYAMATERIAL:03":
                var h, _, d = r.props.textures;
                if (d) for (h = 0, _ = d.length; h < _; h++) {
                    var c = d[h], u = c.path;
                    u && (a = In.formatRelativePath(s, u), i && (a += i), o.push({
                        url: a,
                        constructParams: c.constructParams,
                        propertyParams: c.propertyParams
                    }), l.push(a), c.path = a);
                }
                break;

              default:
                throw new Error("Laya3D:unkonwn version.");
            }
            var m = o.length, f = m + 1, E = 1 / f;
            if (In._onProcessChange(e, 0, E, 1), m > 0) {
                var T = t.Handler.create(null, In._onProcessChange, [ e, E, m / f ], !1);
                In._innerFourthLevelLoaderManager._create(o, !1, t.Handler.create(null, In._onMateialTexturesLoaded, [ e, T, r, l ]), T, null, null, null, 1, !0);
            } else In._onMateialTexturesLoaded(e, null, r, null);
        }
        static _onMateialTexturesLoaded(e, t, r, a) {
            e._cache = e._createCache;
            var n = ue._parse(r, e._propertyParams, e._constructParams);
            In._endLoad(e, n, a), t && t.recover();
        }
        static _loadAvatar(e) {
            e.on(t.Event.LOADED, null, function(t) {
                e._cache = e._createCache;
                var r = ce._parse(t, e._propertyParams, e._constructParams);
                In._endLoad(e, r);
            }), e.load(e.url, t.Loader.JSON, !1, null, !0);
        }
        static _loadSimpleAnimator(e) {
            e.on(t.Event.LOADED, null, function(r) {
                e._cache = e._createCache;
                var a = t.Texture2D._SimpleAnimatorTextureParse(r, e._propertyParams, e._constructParams);
                In._endLoad(e, a);
            }), e.load(e.url, t.Loader.BUFFER, !1, null, !0);
        }
        static _loadAnimationClip(e) {
            e.on(t.Event.LOADED, null, function(t) {
                e._cache = e._createCache;
                var r = I._parse(t);
                In._endLoad(e, r);
            }), e.load(e.url, t.Loader.BUFFER, !1, null, !0);
        }
        static _loadTexture2D(e) {
            var r, a = e.url, n = a.lastIndexOf(".") + 1, i = a.indexOf("?"), s = -1 == i ? a.length : i;
            switch (a.substr(n, s - n)) {
              case "jpg":
              case "jpeg":
              case "bmp":
              case "gif":
              case "png":
                r = "nativeimage";
                break;

              case "dds":
                r = t.Loader.BUFFER;
                break;

              case "ktx":
                r = t.Loader.BUFFER, !e._constructParams && (e._constructParams = []), e._constructParams[2] = t.TextureFormat.KTXTEXTURE;
                break;

              case "pvr":
                r = t.Loader.BUFFER, !e._constructParams && (e._constructParams = []), e._propertyParams[2] = t.TextureFormat.PVRTEXTURE;
            }
            e.on(t.Event.LOADED, null, function(r) {
                e._cache = e._createCache;
                var a = t.Texture2D._parse(r, e._propertyParams, e._constructParams);
                In._endLoad(e, a);
            }), e.load(e.url, r, !1, null, !0);
        }
        static _loadTextureCube(e) {
            e.on(t.Event.LOADED, null, In._onTextureCubeLtcLoaded, [ e ]), e.load(e.url, t.Loader.JSON, !1, null, !0);
        }
        static _loadTextureCubeBin(e) {
            e.on(t.Event.LOADED, null, r => {
                e._cache = e._createCache;
                var a = new t.Byte(r);
                if ("LAYATEXTURECUBE:0000" !== a.readUTFString()) throw "Laya3D:unknow version.";
                var n = a.readUint8(), i = a.getUint8(), s = a.readUint16(), o = a.getUint8(), l = a.getUint8(), h = a.getUint8(), _ = a.getUint8(), d = new gt(s, n, i > 1);
                d.filterMode = o, d.wrapModeU = l, d.wrapModeV = h, d.anisoLevel = _;
                for (var c = a.pos, u = s, m = 0; m < i; m++) {
                    for (var f = new Array(6), E = u * u * d._getFormatByteCount(), T = 0; T < 6; T++) f[T] = new Uint8Array(r, c, E), 
                    c += E;
                    d.setSixSidePixels(f, m), u /= 2;
                }
                In._endLoad(e, d);
            }), e.load(e.url, t.Loader.BUFFER, !1, null, !0);
        }
        static _onTextureCubeLtcLoaded(e, r) {
            var a = t.URL.getPath(e.url), n = [ In.formatRelativePath(a, r.front), In.formatRelativePath(a, r.back), In.formatRelativePath(a, r.left), In.formatRelativePath(a, r.right), In.formatRelativePath(a, r.up), In.formatRelativePath(a, r.down) ];
            In._onProcessChange(e, 0, 1 / 7, 1);
            var i = t.Handler.create(null, In._onProcessChange, [ e, 1 / 7, 6 / 7 ], !1);
            In._innerFourthLevelLoaderManager.load(n, t.Handler.create(null, In._onTextureCubeImagesLoaded, [ e, n, i ]), i, "nativeimage");
        }
        static _onTextureCubeImagesLoaded(e, r, a) {
            for (var n = new Array(6), i = 0; i < 6; i++) n[i] = t.Loader.getRes(r[i]);
            e._cache = e._createCache;
            var s = gt._parse(n, e._propertyParams, e._constructParams);
            for (a.recover(), i = 0; i < 6; i++) t.Loader.clearRes(r[i]);
            In._endLoad(e, s);
        }
        static _onProcessChange(e, r, a, n) {
            (n = r + n * a) < 1 && e.event(t.Event.PROGRESS, 2 * n / 3 + 1 / 3);
        }
        static init(e, r, a = null, n = null) {
            if (In._isInit) n && n.run(); else {
                In._isInit = !0, a && a.cloneTo(d._config), a = d._config, Ze.debugFrustumCulling = a.debugFrustumCulling, 
                In._editerEnvironment = a._editerEnvironment, Jt.octreeCulling = a.octreeCulling, 
                Jt.octreeInitialSize = a.octreeInitialSize, Jt.octreeInitialCenter = a.octreeInitialCenter, 
                Jt.octreeMinNodeSize = a.octreeMinNodeSize, Jt.octreeLooseness = a.octreeLooseness;
                var i = window.Physics3D;
                null == i || a.isUseCannonPhysicsEngine ? (_._enablePhysics = !1, In.__init__(e, r, a), 
                n && n.run()) : (_._enablePhysics = !0, i(16 * a.defaultPhysicsMemory, t.BulletInteractive._interactive).then(function() {
                    In.__init__(e, r, a), n && n.run();
                }));
            }
        }
    }
    In.HIERARCHY = "HIERARCHY", In.MESH = "MESH", In.MATERIAL = "MATERIAL", In.TEXTURE2D = "TEXTURE2D", 
    In.TEXTURECUBE = "TEXTURECUBE", In.TEXTURECUBEBIN = "TEXTURECUBEBIN", In.ANIMATIONCLIP = "ANIMATIONCLIP", 
    In.AVATAR = "AVATAR", In.TERRAINHEIGHTDATA = "TERRAINHEIGHTDATA", In.TERRAINRES = "TERRAIN", 
    In.SIMPLEANIMATORBIN = "SIMPLEANIMATOR", In._innerFirstLevelLoaderManager = new t.LoaderManager(), 
    In._innerSecondLevelLoaderManager = new t.LoaderManager(), In._innerThirdLevelLoaderManager = new t.LoaderManager(), 
    In._innerFourthLevelLoaderManager = new t.LoaderManager(), In._isInit = !1, In._editerEnvironment = !1, 
    window.Laya3D = In;
    class Mn extends t.Component {
        constructor() {
            super(...arguments), this._indexInPool = -1, this._enableState = !1;
        }
        get isSingleton() {
            return !1;
        }
        _checkProcessTriggers() {
            var e = Mn.prototype;
            return this.onTriggerEnter !== e.onTriggerEnter || (this.onTriggerStay !== e.onTriggerStay || this.onTriggerExit !== e.onTriggerExit);
        }
        _checkProcessCollisions() {
            var e = Mn.prototype;
            return this.onCollisionEnter !== e.onCollisionEnter || (this.onCollisionStay !== e.onCollisionStay || this.onCollisionExit !== e.onCollisionExit);
        }
        _onAwake() {
            this.onAwake(), this.onStart !== Mn.prototype.onStart && t.Laya.startTimer.callLater(this, this.onStart);
        }
        _onEnable() {
            this._enableState || (this.owner._scene._addScript(this), this._enableState = !0, 
            this.onEnable());
        }
        _onDisable() {
            this._enableState && -1 != this._indexInPool && (this.owner._scene._removeScript(this), 
            this.owner.offAllCaller(this), this._enableState = !1, this.onDisable());
        }
        _onDestroy() {
            var e = this.owner._scripts;
            e.splice(e.indexOf(this), 1);
            var t = this.owner;
            t._needProcessTriggers = !1;
            for (var r = 0, a = e.length; r < a; r++) if (e[r]._checkProcessTriggers()) {
                t._needProcessTriggers = !0;
                break;
            }
            for (t._needProcessCollisions = !1, r = 0, a = e.length; r < a; r++) if (e[r]._checkProcessCollisions()) {
                t._needProcessCollisions = !0;
                break;
            }
            this.onDestroy();
        }
        _isScript() {
            return !0;
        }
        _onAdded() {
            var e = this.owner, t = e._scripts;
            t || (e._scripts = t = []), t.push(this), e._needProcessCollisions || (e._needProcessCollisions = this._checkProcessCollisions()), 
            e._needProcessTriggers || (e._needProcessTriggers = this._checkProcessTriggers());
        }
        onAwake() {}
        onEnable() {}
        onStart() {}
        onTriggerEnter(e) {}
        onTriggerStay(e) {}
        onTriggerExit(e) {}
        onCollisionEnter(e) {}
        onCollisionStay(e) {}
        onCollisionExit(e) {}
        onJointBreak() {}
        onMouseDown() {}
        onMouseDrag() {}
        onMouseClick() {}
        onMouseUp() {}
        onMouseEnter() {}
        onMouseOver() {}
        onMouseOut() {}
        onUpdate() {}
        onLateUpdate() {}
        onPreRender() {}
        onPostRender() {}
        onDisable() {}
        onDestroy() {}
    }
    class Dn {
        constructor(e, t, r, a) {
            this._datas = [], this._w = e, this._h = t, this._minHeight = r, this._maxHeight = a;
        }
        static creatFromMesh(e, t, r, a) {
            for (var n = [], s = [], o = e.subMeshCount, l = 0; l < o; l++) {
                for (var h = e.getSubMesh(l), _ = h._vertexBuffer, d = _.getFloat32Data(), c = [], u = 0; u < d.length; u += _.vertexDeclaration.vertexStride / 4) {
                    var m = new i(d[u + 0], d[u + 1], d[u + 2]);
                    c.push(m);
                }
                n.push(c);
                var f = h._indexBuffer;
                s.push(f.getData());
            }
            var E = e.bounds, T = E.getMin().x, p = E.getMin().z, g = E.getMax().x, S = E.getMax().z, R = E.getMin().y, v = E.getMax().y, x = g - T, A = S - p, I = a.x = x / (t - 1), M = a.y = A / (r - 1), D = new Dn(t, r, R, v), L = Dn._tempRay, y = L.direction;
            y.x = 0, y.y = -1, y.z = 0;
            var C = v + .1;
            L.origin.y = C;
            for (var O = 0; O < r; O++) {
                var N = p + O * M;
                D._datas[O] = [];
                for (var P = 0; P < t; P++) {
                    var w = T + P * I, V = L.origin;
                    V.x = w, V.z = N;
                    var B = Dn._getPosition(L, n, s);
                    D._datas[O][P] = B === Number.MAX_VALUE ? NaN : C - B;
                }
            }
            return D;
        }
        static createFromImage(e, t, r) {
            for (var a = e.width, n = e.height, i = new Dn(a, n, t, r), s = (r - t) / 254, o = e.getPixels(), l = 0, h = 0; h < n; h++) for (var _ = i._datas[h] = [], d = 0; d < a; d++) {
                var c = o[l++], u = o[l++], m = o[l++], f = o[l++];
                _[d] = 255 == c && 255 == u && 255 == m && 255 == f ? NaN : (c + u + m) / 3 * s + t;
            }
            return i;
        }
        static _getPosition(e, t, r) {
            for (var a = Number.MAX_VALUE, n = 0; n < t.length; n++) for (var i = t[n], s = r[n], o = 0; o < s.length; o += 3) {
                var l = i[s[o + 0]], h = i[s[o + 1]], _ = i[s[o + 2]], d = it.rayIntersectsTriangle(e, l, h, _);
                !isNaN(d) && d < a && (a = d);
            }
            return a;
        }
        get width() {
            return this._w;
        }
        get height() {
            return this._h;
        }
        get maxHeight() {
            return this._maxHeight;
        }
        get minHeight() {
            return this._minHeight;
        }
        _inBounds(e, t) {
            return e >= 0 && e < this._h && t >= 0 && t < this._w;
        }
        getHeight(e, t) {
            return this._inBounds(e, t) ? this._datas[e][t] : NaN;
        }
    }
    Dn._tempRay = new et(new i(), new i());
    class Ln extends pr {
        constructor(e, t, r = null) {
            super(e, r), this._heightMap = t, this._cellSize = new a();
        }
        static createFromMesh(e, t, r, a = null) {
            var n = new Ln(e, null, a);
            return n._initCreateFromMesh(t, r), n;
        }
        static createFromMeshAndHeightMap(e, t, r, a, n = null) {
            var i = new Ln(e, null, n);
            return i._initCreateFromMeshHeightMap(t, r, a), i;
        }
        get minX() {
            var e = this.transform.worldMatrix.elements;
            return this._minX * this._getScaleX() + e[12];
        }
        get minZ() {
            var e = this.transform.worldMatrix.elements;
            return this._minZ * this._getScaleZ() + e[14];
        }
        get width() {
            return (this._heightMap.width - 1) * this._cellSize.x * this._getScaleX();
        }
        get depth() {
            return (this._heightMap.height - 1) * this._cellSize.y * this._getScaleZ();
        }
        _disableRotation() {
            var e = this.transform.rotation;
            e.x = 0, e.y = 0, e.z = 0, e.w = 1, this.transform.rotation = e;
        }
        _getScaleX() {
            var e = this.transform.worldMatrix.elements, t = e[0], r = e[1], a = e[2];
            return Math.sqrt(t * t + r * r + a * a);
        }
        _getScaleZ() {
            var e = this.transform.worldMatrix.elements, t = e[8], r = e[9], a = e[10];
            return Math.sqrt(t * t + r * r + a * a);
        }
        _initCreateFromMesh(e, t) {
            this._heightMap = Dn.creatFromMesh(this.meshFilter.sharedMesh, e, t, this._cellSize);
            var r = this.meshFilter.sharedMesh.bounds.getMin();
            this._minX = r.x, this._minZ = r.z;
        }
        _initCreateFromMeshHeightMap(e, t, r) {
            var a = this.meshFilter.sharedMesh.bounds;
            this._heightMap = Dn.createFromImage(e, t, r), this._computeCellSize(a);
            var n = a.getMin();
            this._minX = n.x, this._minZ = n.z;
        }
        _computeCellSize(e) {
            var t = e.getMin(), r = e.getMax(), a = t.x, n = t.z, i = r.x - a, s = r.z - n;
            this._cellSize.x = i / (this._heightMap.width - 1), this._cellSize.y = s / (this._heightMap.height - 1);
        }
        _update(e) {
            this._disableRotation();
        }
        getHeight(e, t) {
            Ln._tempVector3.x = e, Ln._tempVector3.y = 0, Ln._tempVector3.z = t, this._disableRotation();
            var r = this.transform.worldMatrix;
            r.invert(Ln._tempMatrix4x4), i.transformCoordinate(Ln._tempVector3, Ln._tempMatrix4x4, Ln._tempVector3), 
            e = Ln._tempVector3.x, t = Ln._tempVector3.z;
            var a = (e - this._minX) / this._cellSize.x, n = (t - this._minZ) / this._cellSize.y, s = Math.floor(n), o = Math.floor(a), l = a - o, h = n - s, _ = r.elements, d = _[4], c = _[5], u = _[6], m = Math.sqrt(d * d + c * c + u * u), f = _[13], E = this._heightMap.getHeight(s, o + 1), T = this._heightMap.getHeight(s + 1, o);
            if (isNaN(E) || isNaN(T)) return NaN;
            if (l + h <= 1) {
                var p = this._heightMap.getHeight(s, o);
                return isNaN(p) ? NaN : (p + l * (E - p) + h * (T - p)) * m + f;
            }
            var g = this._heightMap.getHeight(s + 1, o + 1);
            return isNaN(g) ? NaN : (g + (1 - l) * (T - g) + (1 - h) * (E - g)) * m + f;
        }
    }
    Ln._tempVector3 = new i(), Ln._tempMatrix4x4 = new b();
    class yn {
        constructor() {
            this._currentLength = 0, this._elements = new Float32Array(12);
        }
        get gradientCount() {
            return this._currentLength / 3;
        }
        add(e, t) {
            this._currentLength < 8 ? (6 === this._currentLength && 1 !== e && (e = 1, console.log("GradientDataVector2 warning:the forth key is  be force set to 1.")), 
            this._elements[this._currentLength++] = e, this._elements[this._currentLength++] = t.x, 
            this._elements[this._currentLength++] = t.y) : console.log("GradientDataVector2 warning:data count must lessEqual than 4");
        }
        cloneTo(e) {
            var t = e;
            t._currentLength = this._currentLength;
            for (var r = t._elements, a = 0, n = this._elements.length; a < n; a++) r[a] = this._elements[a];
        }
        clone() {
            var e = new yn();
            return this.cloneTo(e), e;
        }
    }
    class Cn {
        constructor() {}
        render(e) {}
    }
    class On extends Cn {
        constructor() {
            super(), this._shader = null, this._shaderData = new F(), this._linearColor = new We(), 
            this._bloomTextureTexelSize = new n(), this._shaderThreshold = new n(), this._shaderParams = new n(), 
            this._pyramid = null, this._intensity = 0, this._threshold = 1, this._softKnee = .5, 
            this._diffusion = 7, this._anamorphicRatio = 0, this._dirtIntensity = 0, this._shaderSetting = new n(), 
            this._dirtTileOffset = new n(), this.clamp = 65472, this.color = new We(1, 1, 1, 1), 
            this.fastMode = !1, this.dirtTexture = null, this._shader = Z.find("PostProcessBloom"), 
            this._pyramid = new Array(2 * On.MAXPYRAMIDSIZE);
        }
        get intensity() {
            return this._intensity;
        }
        set intensity(e) {
            this._intensity = Math.max(e, 0);
        }
        get threshold() {
            return this._threshold;
        }
        set threshold(e) {
            this._threshold = Math.max(e, 0);
        }
        get softKnee() {
            return this._softKnee;
        }
        set softKnee(e) {
            this._softKnee = Math.min(Math.max(e, 0), 1);
        }
        get diffusion() {
            return this._diffusion;
        }
        set diffusion(e) {
            this._diffusion = Math.min(Math.max(e, 1), 10);
        }
        get anamorphicRatio() {
            return this._anamorphicRatio;
        }
        set anamorphicRatio(e) {
            this._anamorphicRatio = Math.min(Math.max(e, -1), 1);
        }
        get dirtIntensity() {
            return this._dirtIntensity;
        }
        set dirtIntensity(e) {
            this._dirtIntensity = Math.max(e, 0);
        }
        render(e) {
            var r = e.command, a = e.camera.viewport;
            this._shaderData.setTexture(On.SHADERVALUE_AUTOEXPOSURETEX, t.Texture2D.whiteTexture);
            var i, s = this._anamorphicRatio, o = s < 0 ? -s : 0, l = s > 0 ? s : 0, h = Math.floor(a.width / (2 - o)), _ = Math.floor(a.height / (2 - l)), d = Math.max(h, _);
            i = Math.log2(d) + this._diffusion - 10;
            var c = Math.floor(i), u = Math.min(Math.max(c, 1), On.MAXPYRAMIDSIZE), m = .5 + i - c;
            this._shaderData.setNumber(On.SHADERVALUE_SAMPLESCALE, m);
            var f = We.gammaToLinearSpace(this.threshold), E = f * this._softKnee + 1e-5;
            this._shaderThreshold.setValue(f, f - E, 2 * E, .25 / E), this._shaderData.setVector(On.SHADERVALUE_THRESHOLD, this._shaderThreshold);
            var T = We.gammaToLinearSpace(this.clamp);
            this._shaderParams.setValue(T, 0, 0, 0), this._shaderData.setVector(On.SHADERVALUE_PARAMS, this._shaderParams);
            for (var p = this.fastMode ? 1 : 0, g = e.source, S = 0; S < u; S++) {
                var R = 2 * S, v = R + 1, x = 0 == S ? On.SUBSHADER_PREFILTER13 + p : On.SUBSHADER_DOWNSAMPLE13 + p, A = P.createFromPool(h, _, t.RenderTextureFormat.R8G8B8, t.RenderTextureDepthFormat.DEPTHSTENCIL_NONE);
                if (A.filterMode = t.FilterMode.Bilinear, this._pyramid[R] = A, S !== u - 1) {
                    var I = P.createFromPool(h, _, t.RenderTextureFormat.R8G8B8, t.RenderTextureDepthFormat.DEPTHSTENCIL_NONE);
                    I.filterMode = t.FilterMode.Bilinear, this._pyramid[v] = I;
                }
                r.blitScreenTriangle(g, A, null, this._shader, this._shaderData, x), g = A, h = Math.max(Math.floor(h / 2), 1), 
                _ = Math.max(Math.floor(_ / 2), 1);
            }
            var M = this._pyramid[2 * (u - 1)];
            for (S = u - 2; S >= 0; S--) v = (R = 2 * S) + 1, A = this._pyramid[R], I = this._pyramid[v], 
            r.setShaderDataTexture(this._shaderData, On.SHADERVALUE_BLOOMTEX, A), r.blitScreenTriangle(M, I, null, this._shader, this._shaderData, On.SUBSHADER_UPSAMPLETENT + p), 
            M = I;
            var D = this._linearColor;
            this.color.toLinear(D);
            var L = Math.pow(2, this._intensity / 10) - 1, y = this._shaderSetting;
            this._shaderSetting.setValue(m, L, this._dirtIntensity, u);
            var C = this.dirtTexture ? this.dirtTexture : t.Texture2D.blackTexture, O = C.width / C.height, N = a.width / a.height, w = this._dirtTileOffset;
            O > N ? w.setValue(N / O, 1, .5 * (1 - w.x), 0) : O < N && w.setValue(1, O / N, 0, .5 * (1 - w.y));
            var V = e.compositeShaderData;
            for (this.fastMode ? V.addDefine(he.SHADERDEFINE_BLOOM_LOW) : V.addDefine(he.SHADERDEFINE_BLOOM), 
            this._bloomTextureTexelSize.setValue(1 / M.width, 1 / M.height, M.width, M.height), 
            V.setVector(he.SHADERVALUE_BLOOM_DIRTTILEOFFSET, w), V.setVector(he.SHADERVALUE_BLOOM_SETTINGS, y), 
            V.setVector(he.SHADERVALUE_BLOOM_COLOR, new n(D.r, D.g, D.b, D.a)), V.setTexture(he.SHADERVALUE_BLOOM_DIRTTEX, C), 
            V.setTexture(he.SHADERVALUE_BLOOMTEX, M), V.setVector(he.SHADERVALUE_BLOOMTEX_TEXELSIZE, this._bloomTextureTexelSize), 
            S = 0; S < u; S++) v = (R = 2 * S) + 1, P.recoverToPool(this._pyramid[R]), 0 !== S && S !== u - 1 && P.recoverToPool(this._pyramid[v]);
            e.deferredReleaseTextures.push(M);
        }
    }
    On.SHADERVALUE_MAINTEX = Z.propertyNameToID("u_MainTex"), On.SHADERVALUE_AUTOEXPOSURETEX = Z.propertyNameToID("u_AutoExposureTex"), 
    On.SHADERVALUE_SAMPLESCALE = Z.propertyNameToID("u_SampleScale"), On.SHADERVALUE_THRESHOLD = Z.propertyNameToID("u_Threshold"), 
    On.SHADERVALUE_PARAMS = Z.propertyNameToID("u_Params"), On.SHADERVALUE_BLOOMTEX = Z.propertyNameToID("u_BloomTex"), 
    On.SUBSHADER_PREFILTER13 = 0, On.SUBSHADER_PREFILTER4 = 1, On.SUBSHADER_DOWNSAMPLE13 = 2, 
    On.SUBSHADER_DOWNSAMPLE4 = 3, On.SUBSHADER_UPSAMPLETENT = 4, On.SUBSHADER_UPSAMPLEBOX = 5, 
    On.MAXPYRAMIDSIZE = 16;
    class Nn {
        constructor() {
            this._isNeedUpdate = !1;
        }
        createInstanceVertexBuffer3D() {
            var e = t.LayaGL.instance;
            this._instanceData = new Float32Array(se.maxInstanceCount * this._vertexStride), 
            this._vertexBuffer = new V(4 * this._instanceData.length, e.DYNAMIC_DRAW), this._vertexBuffer.vertexDeclaration = this._vertexDeclaration;
        }
        updateVertexBufferData(e) {
            if (!this._isNeedUpdate) return;
            let t, r = this._instanceData, a = this._value, n = this._value.length, i = this._vertexStride, s = 0;
            switch (this._value instanceof Float32Array || (s = 1), s) {
              case 0:
                r.set(a, 0);
                break;

              case 1:
                for (let e = 0; e < n; e++) (t = a[e]).toArray(r, e * i);
            }
            this._vertexBuffer.orphanStorage(), this._vertexBuffer.setData(r.buffer, 0, 0, 4 * e * i);
        }
    }
    (Rn = e.InstanceLocation || (e.InstanceLocation = {}))[Rn.CUSTOME0 = 12] = "CUSTOME0", 
    Rn[Rn.CUSTOME1 = 13] = "CUSTOME1", Rn[Rn.CUSTOME2 = 14] = "CUSTOME2", Rn[Rn.CUSTOME3 = 15] = "CUSTOME3";
    class Pn {
        constructor() {
            this._type = 0, this._propertyMap = {};
        }
        _checkPropertyLegal(e, t, r, a) {
            if (a._vertexDeclaration._vertexElements[0]._elementFormat !== e) throw "Data exists and format does not match";
            if (a._name !== t) throw "You cannot add a new property to an existing attributeLocation,Please use another attributeLocation";
        }
        _creatProperty(e, t, r, a, n) {
            var i = this._propertyMap[n] = new Nn();
            i._name = e, i._value = t, i._vertexDeclaration = new U(r, [ new H(0, a, n) ]), 
            i._isNeedUpdate = !0, i._vertexStride = r / 4, i.createInstanceVertexBuffer3D();
        }
        setVectorArray(e, t, r) {
            var a = this._propertyMap[r];
            a ? (this._checkPropertyLegal(B.Vector4, e, r, a), a._value = t, a._isNeedUpdate = !0) : this._creatProperty(e, t, 16, B.Vector4, r);
        }
        setVector3Array(e, t, r) {
            var a = this._propertyMap[r];
            a ? (this._checkPropertyLegal(B.Vector3, e, r, a), a._value = t, a._isNeedUpdate = !0) : this._creatProperty(e, t, 12, B.Vector3, r);
        }
        setVector2Array(e, t, r) {
            var a = this._propertyMap[r];
            a ? (this._checkPropertyLegal(B.Vector2, e, r, a), a._value = t, a._isNeedUpdate = !0) : this._creatProperty(e, t, 8, B.Vector2, r);
        }
        setNumberArray(e, t, r) {
            var a = this._propertyMap[r];
            a ? (this._checkPropertyLegal(B.Single, e, r, a), a._value = t, a._isNeedUpdate = !0) : this._creatProperty(e, t, 4, B.Single, r);
        }
        getPropertyArray(e) {
            var t = this._propertyMap[e];
            return t ? t._value : null;
        }
        clear() {
            this._propertyMap = {};
        }
    }
    Pn.INSTANCETYPE_ATTRIBUTE = 0, Pn.INSTANCETYPE_UNIFORMBUFFER = 1;
    class wn {
        constructor(e = 0, t = 0, r = 0, a = 0) {
            var n = this.elements = new Float32Array(4);
            n[0] = e, n[1] = t, n[2] = r, n[3] = a;
        }
        get x() {
            return this.elements[0];
        }
        set x(e) {
            this.elements[0] = e;
        }
        get y() {
            return this.elements[1];
        }
        set y(e) {
            this.elements[1] = e;
        }
        get z() {
            return this.elements[2];
        }
        set z(e) {
            this.elements[2] = e;
        }
        get w() {
            return this.elements[3];
        }
        set w(e) {
            this.elements[3] = e;
        }
        fromArray(e, t = 0) {
            this.elements[0] = e[t + 0], this.elements[1] = e[t + 1], this.elements[2] = e[t + 2], 
            this.elements[3] = e[t + 3];
        }
        cloneTo(e) {
            var t = e.elements, r = this.elements;
            t[0] = r[0], t[1] = r[1], t[2] = r[2], t[3] = r[3];
        }
        clone() {
            var e = new wn();
            return this.cloneTo(e), e;
        }
        static lerp(e, t, r, a) {
            var n = a.elements, i = e.elements, s = t.elements, o = i[0], l = i[1], h = i[2], _ = i[3];
            n[0] = o + r * (s[0] - o), n[1] = l + r * (s[1] - l), n[2] = h + r * (s[2] - h), 
            n[3] = _ + r * (s[3] - _);
        }
        static transformByM4x4(e, t, r) {
            var a = e.elements, n = a[0], i = a[1], s = a[2], o = a[3], l = t.elements, h = r.elements;
            h[0] = n * l[0] + i * l[4] + s * l[8] + o * l[12], h[1] = n * l[1] + i * l[5] + s * l[9] + o * l[13], 
            h[2] = n * l[2] + i * l[6] + s * l[10] + o * l[14], h[3] = n * l[3] + i * l[7] + s * l[11] + o * l[15];
        }
        static equals(e, t) {
            var a = e.elements, n = t.elements;
            return r.nearEqual(Math.abs(a[0]), Math.abs(n[0])) && r.nearEqual(Math.abs(a[1]), Math.abs(n[1])) && r.nearEqual(Math.abs(a[2]), Math.abs(n[2])) && r.nearEqual(Math.abs(a[3]), Math.abs(n[3]));
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
        }
        lengthSquared() {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
        }
        static normalize(e, t) {
            var r = e.elements, a = t.elements, n = e.length();
            n > 0 && (a[0] = r[0] * n, a[1] = r[1] * n, a[2] = r[2] * n, a[3] = r[3] * n);
        }
        static add(e, t, r) {
            var a = r.elements, n = e.elements, i = t.elements;
            a[0] = n[0] + i[0], a[1] = n[1] + i[1], a[2] = n[2] + i[2], a[3] = n[3] + i[3];
        }
        static subtract(e, t, r) {
            var a = r.elements, n = e.elements, i = t.elements;
            a[0] = n[0] - i[0], a[1] = n[1] - i[1], a[2] = n[2] - i[2], a[3] = n[3] - i[3];
        }
        static multiply(e, t, r) {
            var a = r.elements, n = e.elements, i = t.elements;
            a[0] = n[0] * i[0], a[1] = n[1] * i[1], a[2] = n[2] * i[2], a[3] = n[3] * i[3];
        }
        static scale(e, t, r) {
            var a = r.elements, n = e.elements;
            a[0] = n[0] * t, a[1] = n[1] * t, a[2] = n[2] * t, a[3] = n[3] * t;
        }
        static Clamp(e, t, r, a) {
            var n = e.elements, i = n[0], s = n[1], o = n[2], l = n[3], h = t.elements, _ = h[0], d = h[1], c = h[2], u = h[3], m = r.elements, f = m[0], E = m[1], T = m[2], p = m[3], g = a.elements;
            i = (i = i > f ? f : i) < _ ? _ : i, s = (s = s > E ? E : s) < d ? d : s, o = (o = o > T ? T : o) < c ? c : o, 
            l = (l = l > p ? p : l) < u ? u : l, g[0] = i, g[1] = s, g[2] = o, g[3] = l;
        }
        static distanceSquared(e, t) {
            var r = e.elements, a = t.elements, n = r[0] - a[0], i = r[1] - a[1], s = r[2] - a[2], o = r[3] - a[3];
            return n * n + i * i + s * s + o * o;
        }
        static distance(e, t) {
            var r = e.elements, a = t.elements, n = r[0] - a[0], i = r[1] - a[1], s = r[2] - a[2], o = r[3] - a[3];
            return Math.sqrt(n * n + i * i + s * s + o * o);
        }
        static dot(e, t) {
            var r = e.elements, a = t.elements;
            return r[0] * a[0] + r[1] * a[1] + r[2] * a[2] + r[3] * a[3];
        }
        static min(e, t, r) {
            var a = r.elements, n = e.elements, i = t.elements;
            a[0] = Math.min(n[0], i[0]), a[1] = Math.min(n[1], i[1]), a[2] = Math.min(n[2], i[2]), 
            a[3] = Math.min(n[3], i[3]);
        }
        static max(e, t, r) {
            var a = r.elements, n = e.elements, i = t.elements;
            a[0] = Math.max(n[0], i[0]), a[1] = Math.max(n[1], i[1]), a[2] = Math.max(n[2], i[2]), 
            a[3] = Math.max(n[3], i[3]);
        }
    }
    wn.ZERO = new wn(), wn.ONE = new wn(1, 1, 1, 1), wn.UnitX = new wn(1, 0, 0, 0), 
    wn.UnitY = new wn(0, 1, 0, 0), wn.UnitZ = new wn(0, 0, 1, 0), wn.UnitW = new wn(0, 0, 0, 1);
    class Vn {
        constructor(e = 0, t = 0, r = 0, a = null) {
            var n;
            n = a || new Float32Array(3), this.elements = n, n[0] = e, n[1] = t, n[2] = r;
        }
        static distanceSquared(e, t) {
            var r = e.elements, a = t.elements, n = r[0] - a[0], i = r[1] - a[1], s = r[2] - a[2];
            return n * n + i * i + s * s;
        }
        static distance(e, t) {
            var r = e.elements, a = t.elements, n = r[0] - a[0], i = r[1] - a[1], s = r[2] - a[2];
            return Math.sqrt(n * n + i * i + s * s);
        }
        static min(e, t, r) {
            var a = r.elements, n = e.elements, i = t.elements;
            a[0] = Math.min(n[0], i[0]), a[1] = Math.min(n[1], i[1]), a[2] = Math.min(n[2], i[2]);
        }
        static max(e, t, r) {
            var a = r.elements, n = e.elements, i = t.elements;
            a[0] = Math.max(n[0], i[0]), a[1] = Math.max(n[1], i[1]), a[2] = Math.max(n[2], i[2]);
        }
        static transformQuat(e, t, r) {
            var a = r.elements, n = e.elements, i = t.elements, s = n[0], o = n[1], l = n[2], h = i[0], _ = i[1], d = i[2], c = i[3], u = c * s + _ * l - d * o, m = c * o + d * s - h * l, f = c * l + h * o - _ * s, E = -h * s - _ * o - d * l;
            a[0] = u * c + E * -h + m * -d - f * -_, a[1] = m * c + E * -_ + f * -h - u * -d, 
            a[2] = f * c + E * -d + u * -_ - m * -h;
        }
        static scalarLength(e) {
            var t = e.elements, r = t[0], a = t[1], n = t[2];
            return Math.sqrt(r * r + a * a + n * n);
        }
        static scalarLengthSquared(e) {
            var t = e.elements, r = t[0], a = t[1], n = t[2];
            return r * r + a * a + n * n;
        }
        static normalize(e, t) {
            var r = e.elements, a = t.elements, n = r[0], i = r[1], s = r[2], o = n * n + i * i + s * s;
            o > 0 && (o = 1 / Math.sqrt(o), a[0] = r[0] * o, a[1] = r[1] * o, a[2] = r[2] * o);
        }
        static multiply(e, t, r) {
            var a = r.elements, n = e.elements, i = t.elements;
            a[0] = n[0] * i[0], a[1] = n[1] * i[1], a[2] = n[2] * i[2];
        }
        static scale(e, t, r) {
            var a = r.elements, n = e.elements;
            a[0] = n[0] * t, a[1] = n[1] * t, a[2] = n[2] * t;
        }
        static lerp(e, t, r, a) {
            var n = a.elements, i = e.elements, s = t.elements, o = i[0], l = i[1], h = i[2];
            n[0] = o + r * (s[0] - o), n[1] = l + r * (s[1] - l), n[2] = h + r * (s[2] - h);
        }
        static transformV3ToV3(e, t, r) {
            var a = Vn._tempVector4;
            Vn.transformV3ToV4(e, t, a);
            var n = a.elements, i = r.elements;
            i[0] = n[0], i[1] = n[1], i[2] = n[2];
        }
        static transformV3ToV4(e, t, r) {
            var a = e.elements, n = a[0], i = a[1], s = a[2], o = t.elements, l = r.elements;
            l[0] = n * o[0] + i * o[4] + s * o[8] + o[12], l[1] = n * o[1] + i * o[5] + s * o[9] + o[13], 
            l[2] = n * o[2] + i * o[6] + s * o[10] + o[14], l[3] = n * o[3] + i * o[7] + s * o[11] + o[15];
        }
        static TransformNormal(e, t, r) {
            var a = e.elements, n = a[0], i = a[1], s = a[2], o = t.elements, l = r.elements;
            l[0] = n * o[0] + i * o[4] + s * o[8], l[1] = n * o[1] + i * o[5] + s * o[9], l[2] = n * o[2] + i * o[6] + s * o[10];
        }
        static transformCoordinate(e, t, r) {
            var a = e.elements, n = a[0], i = a[1], s = a[2], o = t.elements, l = n * o[3] + i * o[7] + s * o[11] + o[15], h = r.elements;
            h[0] = n * o[0] + i * o[4] + s * o[8] + o[12] / l, h[1] = n * o[1] + i * o[5] + s * o[9] + o[13] / l, 
            h[2] = n * o[2] + i * o[6] + s * o[10] + o[14] / l;
        }
        static Clamp(e, t, r, a) {
            var n = e.elements, i = n[0], s = n[1], o = n[2], l = t.elements, h = l[0], _ = l[1], d = l[2], c = r.elements, u = c[0], m = c[1], f = c[2], E = a.elements;
            i = (i = i > u ? u : i) < h ? h : i, s = (s = s > m ? m : s) < _ ? _ : s, o = (o = o > f ? f : o) < d ? d : o, 
            E[0] = i, E[1] = s, E[2] = o;
        }
        static add(e, t, r) {
            var a = r.elements, n = e.elements, i = t.elements;
            a[0] = n[0] + i[0], a[1] = n[1] + i[1], a[2] = n[2] + i[2];
        }
        static subtract(e, t, r) {
            var a = r.elements, n = e.elements, i = t.elements;
            a[0] = n[0] - i[0], a[1] = n[1] - i[1], a[2] = n[2] - i[2];
        }
        static cross(e, t, r) {
            var a = e.elements, n = t.elements, i = r.elements, s = a[0], o = a[1], l = a[2], h = n[0], _ = n[1], d = n[2];
            i[0] = o * d - l * _, i[1] = l * h - s * d, i[2] = s * _ - o * h;
        }
        static dot(e, t) {
            var r = e.elements, a = t.elements;
            return r[0] * a[0] + r[1] * a[1] + r[2] * a[2];
        }
        static equals(e, t) {
            var a = e.elements, n = t.elements;
            return r.nearEqual(a[0], n[0]) && r.nearEqual(a[1], n[1]) && r.nearEqual(a[2], n[2]);
        }
        get x() {
            return this.elements[0];
        }
        set x(e) {
            this.elements[0] = e;
        }
        get y() {
            return this.elements[1];
        }
        set y(e) {
            this.elements[1] = e;
        }
        get z() {
            return this.elements[2];
        }
        set z(e) {
            this.elements[2] = e;
        }
        setValue(e, t, r) {
            this.elements[0] = e, this.elements[1] = t, this.elements[2] = r;
        }
        fromArray(e, t = 0) {
            this.elements[0] = e[t + 0], this.elements[1] = e[t + 1], this.elements[2] = e[t + 2];
        }
        cloneTo(e) {
            var t = e.elements, r = this.elements;
            t[0] = r[0], t[1] = r[1], t[2] = r[2];
        }
        clone() {
            var e = new Vn();
            return this.cloneTo(e), e;
        }
        toDefault() {
            this.elements[0] = 0, this.elements[1] = 0, this.elements[2] = 0;
        }
    }
    Vn._tempVector4 = new wn(), Vn.ZERO = new Vn(0, 0, 0), Vn.ONE = new Vn(1, 1, 1), 
    Vn.NegativeUnitX = new Vn(-1, 0, 0), Vn.UnitX = new Vn(1, 0, 0), Vn.UnitY = new Vn(0, 1, 0), 
    Vn.UnitZ = new Vn(0, 0, 1), Vn.ForwardRH = new Vn(0, 0, -1), Vn.ForwardLH = new Vn(0, 0, 1), 
    Vn.Up = new Vn(0, 1, 0), Vn.NAN = new Vn(NaN, NaN, NaN);
    class Bn {
        constructor(e = 0, t = 0, r = 0, a = 1, n = null) {
            var i;
            (i = n || new Float32Array(4))[0] = e, i[1] = t, i[2] = r, i[3] = a, this.elements = i;
        }
        static _dotArray(e, t) {
            return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
        }
        static _normalizeArray(e, t) {
            var r = e[0], a = e[1], n = e[2], i = e[3], s = r * r + a * a + n * n + i * i;
            s > 0 && (s = 1 / Math.sqrt(s), t[0] = r * s, t[1] = a * s, t[2] = n * s, t[3] = i * s);
        }
        static _lerpArray(e, t, r, a) {
            var n = 1 - r;
            Bn._dotArray(e, t) >= 0 ? (a[0] = n * e[0] + r * t[0], a[1] = n * e[1] + r * t[1], 
            a[2] = n * e[2] + r * t[2], a[3] = n * e[3] + r * t[3]) : (a[0] = n * e[0] - r * t[0], 
            a[1] = n * e[1] - r * t[1], a[2] = n * e[2] - r * t[2], a[3] = n * e[3] - r * t[3]), 
            Bn._normalizeArray(a, a);
        }
        static createFromYawPitchRoll(e, t, r, a) {
            var n = .5 * r, i = .5 * t, s = .5 * e, o = Math.sin(n), l = Math.cos(n), h = Math.sin(i), _ = Math.cos(i), d = Math.sin(s), c = Math.cos(s), u = a.elements;
            u[0] = c * h * l + d * _ * o, u[1] = d * _ * l - c * h * o, u[2] = c * _ * o - d * h * l, 
            u[3] = c * _ * l + d * h * o;
        }
        static multiply(e, t, r) {
            var a = e.elements, n = t.elements, i = r.elements, s = a[0], o = a[1], l = a[2], h = a[3], _ = n[0], d = n[1], c = n[2], u = n[3], m = o * c - l * d, f = l * _ - s * c, E = s * d - o * _, T = s * _ + o * d + l * c;
            i[0] = s * u + _ * h + m, i[1] = o * u + d * h + f, i[2] = l * u + c * h + E, i[3] = h * u - T;
        }
        static arcTanAngle(e, t) {
            return 0 == e ? 1 == t ? Math.PI / 2 : -Math.PI / 2 : e > 0 ? Math.atan(t / e) : e < 0 ? t > 0 ? Math.atan(t / e) + Math.PI : Math.atan(t / e) - Math.PI : 0;
        }
        static angleTo(e, t, r) {
            Vn.subtract(t, e, Bn.TEMPVector30), Vn.normalize(Bn.TEMPVector30, Bn.TEMPVector30), 
            r.elements[0] = Math.asin(Bn.TEMPVector30.y), r.elements[1] = Bn.arcTanAngle(-Bn.TEMPVector30.z, -Bn.TEMPVector30.x);
        }
        static createFromAxisAngle(e, t, r) {
            var a = r.elements, n = e.elements;
            t *= .5;
            var i = Math.sin(t);
            a[0] = i * n[0], a[1] = i * n[1], a[2] = i * n[2], a[3] = Math.cos(t);
        }
        static createFromMatrix3x3(e, t) {
            var r, a = t.elements, n = e.elements, i = n[0] + n[4] + n[8];
            if (i > 0) r = Math.sqrt(i + 1), a[3] = .5 * r, r = .5 / r, a[0] = (n[5] - n[7]) * r, 
            a[1] = (n[6] - n[2]) * r, a[2] = (n[1] - n[3]) * r; else {
                var s = 0;
                n[4] > n[0] && (s = 1), n[8] > n[3 * s + s] && (s = 2);
                var o = (s + 1) % 3, l = (s + 2) % 3;
                r = Math.sqrt(n[3 * s + s] - n[3 * o + o] - n[3 * l + l] + 1), a[s] = .5 * r, r = .5 / r, 
                a[3] = (n[3 * o + l] - n[3 * l + o]) * r, a[o] = (n[3 * o + s] + n[3 * s + o]) * r, 
                a[l] = (n[3 * l + s] + n[3 * s + l]) * r;
            }
        }
        static createFromMatrix4x4(e, t) {
            var r, a, n = e.elements, i = t.elements, s = n[0] + n[5] + n[10];
            s > 0 ? (r = Math.sqrt(s + 1), i[3] = .5 * r, r = .5 / r, i[0] = (n[6] - n[9]) * r, 
            i[1] = (n[8] - n[2]) * r, i[2] = (n[1] - n[4]) * r) : n[0] >= n[5] && n[0] >= n[10] ? (a = .5 / (r = Math.sqrt(1 + n[0] - n[5] - n[10])), 
            i[0] = .5 * r, i[1] = (n[1] + n[4]) * a, i[2] = (n[2] + n[8]) * a, i[3] = (n[6] - n[9]) * a) : n[5] > n[10] ? (a = .5 / (r = Math.sqrt(1 + n[5] - n[0] - n[10])), 
            i[0] = (n[4] + n[1]) * a, i[1] = .5 * r, i[2] = (n[9] + n[6]) * a, i[3] = (n[8] - n[2]) * a) : (a = .5 / (r = Math.sqrt(1 + n[10] - n[0] - n[5])), 
            i[0] = (n[8] + n[2]) * a, i[1] = (n[9] + n[6]) * a, i[2] = .5 * r, i[3] = (n[1] - n[4]) * a);
        }
        static slerp(e, t, r, a) {
            var n, i, s, o, l, h = e.elements, _ = t.elements, d = a.elements, c = h[0], u = h[1], m = h[2], f = h[3], E = _[0], T = _[1], p = _[2], g = _[3];
            return (i = c * E + u * T + m * p + f * g) < 0 && (i = -i, E = -E, T = -T, p = -p, 
            g = -g), 1 - i > 1e-6 ? (n = Math.acos(i), s = Math.sin(n), o = Math.sin((1 - r) * n) / s, 
            l = Math.sin(r * n) / s) : (o = 1 - r, l = r), d[0] = o * c + l * E, d[1] = o * u + l * T, 
            d[2] = o * m + l * p, d[3] = o * f + l * g, d;
        }
        static lerp(e, t, r, a) {
            Bn._lerpArray(e.elements, t.elements, r, a.elements);
        }
        static add(e, t, r) {
            var a = r.elements, n = e.elements, i = t.elements;
            a[0] = n[0] + i[0], a[1] = n[1] + i[1], a[2] = n[2] + i[2], a[3] = n[3] + i[3];
        }
        static dot(e, t) {
            return Bn._dotArray(e.elements, t.elements);
        }
        get x() {
            return this.elements[0];
        }
        set x(e) {
            this.elements[0] = e;
        }
        get y() {
            return this.elements[1];
        }
        set y(e) {
            this.elements[1] = e;
        }
        get z() {
            return this.elements[2];
        }
        set z(e) {
            this.elements[2] = e;
        }
        get w() {
            return this.elements[3];
        }
        set w(e) {
            this.elements[3] = e;
        }
        scaling(e, t) {
            var r = t.elements, a = this.elements;
            r[0] = a[0] * e, r[1] = a[1] * e, r[2] = a[2] * e, r[3] = a[3] * e;
        }
        normalize(e) {
            Bn._normalizeArray(this.elements, e.elements);
        }
        length() {
            var e = this.elements, t = e[0], r = e[1], a = e[2], n = e[3];
            return Math.sqrt(t * t + r * r + a * a + n * n);
        }
        rotateX(e, t) {
            var r = t.elements, a = this.elements;
            e *= .5;
            var n = a[0], i = a[1], s = a[2], o = a[3], l = Math.sin(e), h = Math.cos(e);
            r[0] = n * h + o * l, r[1] = i * h + s * l, r[2] = s * h - i * l, r[3] = o * h - n * l;
        }
        rotateY(e, t) {
            var r = t.elements, a = this.elements;
            e *= .5;
            var n = a[0], i = a[1], s = a[2], o = a[3], l = Math.sin(e), h = Math.cos(e);
            r[0] = n * h - s * l, r[1] = i * h + o * l, r[2] = s * h + n * l, r[3] = o * h - i * l;
        }
        rotateZ(e, t) {
            var r = t.elements, a = this.elements;
            e *= .5;
            var n = a[0], i = a[1], s = a[2], o = a[3], l = Math.sin(e), h = Math.cos(e);
            r[0] = n * h + i * l, r[1] = i * h - n * l, r[2] = s * h + o * l, r[3] = o * h - s * l;
        }
        getYawPitchRoll(e) {
            Vn.transformQuat(Vn.ForwardRH, this, Bn.TEMPVector31), Vn.transformQuat(Vn.Up, this, Bn.TEMPVector32);
            var t = Bn.TEMPVector32.elements;
            Bn.angleTo(Vn.ZERO, Bn.TEMPVector31, Bn.TEMPVector33);
            var r = Bn.TEMPVector33.elements;
            r[0] == Math.PI / 2 ? (r[1] = Bn.arcTanAngle(t[2], t[0]), r[2] = 0) : r[0] == -Math.PI / 2 ? (r[1] = Bn.arcTanAngle(-t[2], -t[0]), 
            r[2] = 0) : (b.createRotationY(-r[1], Bn.TEMPMatrix0), b.createRotationX(-r[0], Bn.TEMPMatrix1), 
            Vn.transformCoordinate(Bn.TEMPVector32, Bn.TEMPMatrix0, Bn.TEMPVector32), Vn.transformCoordinate(Bn.TEMPVector32, Bn.TEMPMatrix1, Bn.TEMPVector32), 
            r[2] = Bn.arcTanAngle(t[1], -t[0])), r[1] <= -Math.PI && (r[1] = Math.PI), r[2] <= -Math.PI && (r[2] = Math.PI), 
            r[1] >= Math.PI && r[2] >= Math.PI && (r[1] = 0, r[2] = 0, r[0] = Math.PI - r[0]);
            var a = e.elements;
            a[0] = r[1], a[1] = r[0], a[2] = r[2];
        }
        invert(e) {
            var t = e.elements, r = this.elements, a = r[0], n = r[1], i = r[2], s = r[3], o = a * a + n * n + i * i + s * s, l = o ? 1 / o : 0;
            t[0] = -a * l, t[1] = -n * l, t[2] = -i * l, t[3] = s * l;
        }
        identity() {
            var e = this.elements;
            e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 1;
        }
        fromArray(e, t = 0) {
            this.elements[0] = e[t + 0], this.elements[1] = e[t + 1], this.elements[2] = e[t + 2], 
            this.elements[3] = e[t + 3];
        }
        cloneTo(e) {
            var t, r, a;
            if ((r = this.elements) !== (a = e.elements)) for (t = 0; t < 4; ++t) a[t] = r[t];
        }
        clone() {
            var e = new Bn();
            return this.cloneTo(e), e;
        }
        equals(e) {
            var t = this.elements, a = e.elements;
            return r.nearEqual(t[0], a[0]) && r.nearEqual(t[1], a[1]) && r.nearEqual(t[2], a[2]) && r.nearEqual(t[3], a[3]);
        }
        static rotationLookAt(e, t, r) {
            Bn.lookAt(Vn.ZERO, e, t, r);
        }
        static lookAt(e, t, r, a) {
            E.lookAt(e, t, r, Bn._tempMatrix3x3), Bn.rotationMatrix(Bn._tempMatrix3x3, a);
        }
        lengthSquared() {
            var e = this.elements[0], t = this.elements[1], r = this.elements[2], a = this.elements[3];
            return e * e + t * t + r * r + a * a;
        }
        static invert(e, t) {
            var a = e.elements, n = t.elements, i = e.lengthSquared();
            r.isZero(i) || (i = 1 / i, n[0] = -a[0] * i, n[1] = -a[1] * i, n[2] = -a[2] * i, 
            n[3] = a[3] * i);
        }
        static rotationMatrix(e, t) {
            var r, a, n = e.elements, i = n[0], s = n[1], o = n[2], l = n[3], h = n[4], _ = n[5], d = n[6], c = n[7], u = n[8], m = t.elements, f = i + h + u;
            f > 0 ? (r = Math.sqrt(f + 1), m[3] = .5 * r, r = .5 / r, m[0] = (_ - c) * r, m[1] = (d - o) * r, 
            m[2] = (s - l) * r) : i >= h && i >= u ? (a = .5 / (r = Math.sqrt(1 + i - h - u)), 
            m[0] = .5 * r, m[1] = (s + l) * a, m[2] = (o + d) * a, m[3] = (_ - c) * a) : h > u ? (a = .5 / (r = Math.sqrt(1 + h - i - u)), 
            m[0] = (l + s) * a, m[1] = .5 * r, m[2] = (c + _) * a, m[3] = (d - o) * a) : (a = .5 / (r = Math.sqrt(1 + u - i - h)), 
            m[0] = (d + o) * a, m[1] = (c + _) * a, m[2] = .5 * r, m[3] = (s - l) * a);
        }
    }
    Bn.TEMPVector30 = new Vn(), Bn.TEMPVector31 = new Vn(), Bn.TEMPVector32 = new Vn(), 
    Bn.TEMPVector33 = new Vn(), Bn.TEMPMatrix0 = new b(), Bn.TEMPMatrix1 = new b(), 
    Bn._tempMatrix3x3 = new E(), Bn.DEFAULT = new Bn(), Bn.NAN = new Bn(NaN, NaN, NaN, NaN);
    class bn {
        constructor(e) {
            if (!(e instanceof Array) || 4 !== e.length) throw new Error("Rand:Seed must be an array with 4 numbers");
            this._state0U = 0 | e[0], this._state0L = 0 | e[1], this._state1U = 0 | e[2], this._state1L = 0 | e[3];
        }
        randomint() {
            var e = this._state0U, t = this._state0L, r = this._state1U, a = this._state1L, n = (a >>> 0) + (t >>> 0), i = r + e + (n / 2 >>> 31) >>> 0, s = n >>> 0;
            this._state0U = r, this._state0L = a;
            var o = 0, l = 0;
            o = (e ^= o = e << 23 | (-512 & t) >>> 9) ^ r, l = (t ^= l = t << 23) ^ a;
            o ^= e >>> 18, l ^= t >>> 18 | (262143 & e) << 14;
            return o ^= r >>> 5, l ^= a >>> 5 | (31 & r) << 27, this._state1U = o, this._state1L = l, 
            [ i, s ];
        }
        random() {
            var e = this.randomint(), t = e[0], r = 1023 << 20 | t >>> 12, a = 0 | (e[1] >>> 12 | (4095 & t) << 20);
            return bn._CONVERTION_BUFFER.setUint32(0, r, !1), bn._CONVERTION_BUFFER.setUint32(4, a, !1), 
            bn._CONVERTION_BUFFER.getFloat64(0, !1) - 1;
        }
    }
    bn._CONVERTION_BUFFER = new DataView(new ArrayBuffer(8)), bn.defaultRand = new bn([ 0, Date.now() / 65536, 0, Date.now() % 65536 ]);
    class Fn {
        constructor(e, t) {
            this._width = 0, this._height = 0, this._width = e, this._height = t;
        }
        static get fullScreen() {
            return new Fn(-1, -1);
        }
        get width() {
            return -1 === this._width ? N.clientWidth : this._width;
        }
        get height() {
            return -1 === this._height ? N.clientHeight : this._height;
        }
    }
    e.AlternateLightQueue = Rt, e.AnimationClip = I, e.AnimationClipParser03 = S, e.AnimationClipParser04 = R, 
    e.AnimationEvent = u, e.AnimationNode = de, e.AnimationTransform3D = _e, e.Animator = O, 
    e.AnimatorControllerLayer = D, e.AnimatorPlayState = M, e.AnimatorState = L, e.AnimatorStateScript = class {
        constructor() {}
        onStateEnter() {}
        onStateUpdate() {}
        onStateExit() {}
    }, e.Avatar = ce, e.AvatarMask = C, e.BaseCamera = _t, e.BaseMaterial = me, e.BaseRender = bt, 
    e.BaseShape = Or, e.BatchMark = yt, e.BlinnPhongMaterial = Ee, e.BlitScreenQuadCMD = q, 
    e.BloomEffect = On, e.BoundBox = xt, e.BoundFrustum = at, e.BoundSphere = Xt, e.Bounds = At, 
    e.BoundsOctree = kt, e.BoundsOctreeNode = Gt, e.BoxShape = Pr, e.BufferState = G, 
    e.Burst = Rr, e.Camera = ft, e.CameraCullInfo = Xe, e.CastShadowList = class extends ze {
        constructor() {
            super();
        }
        add(e) {
            if (-1 !== e._indexInCastShadowList) throw "CastShadowList:element has  in  CastShadowList.";
            this._add(e), e._indexInCastShadowList = this.length++;
        }
        remove(e) {
            var t = e._indexInCastShadowList;
            if (this.length--, t !== this.length) {
                var r = this.elements[this.length];
                this.elements[t] = r, r._indexInCastShadowList = t;
            }
            e._indexInCastShadowList = -1;
        }
    }, e.CircleShape = wr, e.ClearRenderTextureCMD = te, e.Cluster = qe, e.CollisionUtils = rt, 
    e.Color = We, e.ColorOverLifetime = xr, e.Command = j, e.CommandBuffer = oe, e.ConchQuaternion = Bn, 
    e.ConchVector3 = Vn, e.ConchVector4 = wn, e.ConeShape = Vr, e.Config3D = d, e.ContainmentType = tt, 
    e.DefineDatas = w, e.DepthPass = mt, e.DirectionLight = cn, e.DrawMeshCMD = ee, 
    e.DrawMeshInstancedCMD = se, e.DrawRenderCMD = re, e.DynamicBatchManager = qt, e.EffectMaterial = Te, 
    e.Emission = Qr, e.ExtendTerrainMaterial = pe, e.FloatKeyframe = f, e.FrameOverTime = Ar, 
    e.FrustumCulling = Ze, e.GeometryElement = It, e.Gradient = Sr, e.GradientAngularVelocity = Ir, 
    e.GradientColor = vr, e.GradientDataInt = Mr, e.GradientDataNumber = Dr, e.GradientDataVector2 = yn, 
    e.GradientMode = gr, e.GradientSize = Lr, e.GradientVelocity = yr, e.HeightMap = Dn, 
    e.HemisphereShape = Br, e.ILaya3D = h, e.IndexBuffer3D = st, e.Input3D = Et, e.Keyframe = m, 
    e.KeyframeNode = c, e.KeyframeNodeList = v, e.KeyframeNodeOwner = y, e.Laya3D = In, 
    e.LightQueue = St, e.LightSprite = ct, e.Lightmap = Wt, e.LoadModelV04 = pn, e.LoadModelV05 = gn, 
    e.Material = ue, e.MaterialInstanceProperty = Nn, e.MaterialInstancePropertyBlock = Pn, 
    e.MathUtils3D = r, e.Matrix3x3 = E, e.Matrix4x4 = b, e.Mesh = ua, e.MeshFilter = fr, 
    e.MeshReader = Sn, e.MeshRenderDynamicBatchManager = Tr, e.MeshRenderStaticBatchManager = Vt, 
    e.MeshRenderer = mr, e.MeshSprite3D = pr, e.MeshSprite3DShaderDeclaration = ne, 
    e.MeshTerrainSprite3D = Ln, e.MouseTouch = Ke, e.OctreeMotionList = zt, e.PBRMaterial = ge, 
    e.PBRSpecularMaterial = tr, e.PBRStandardMaterial = hr, e.Physics3D = _, e.Physics3DUtils = Wr, 
    e.Picker = it, e.PixelLineData = class {
        constructor() {
            this.startPosition = new i(), this.endPosition = new i(), this.startColor = new We(), 
            this.endColor = new We();
        }
        cloneTo(e) {
            this.startPosition.cloneTo(e.startPosition), this.endPosition.cloneTo(e.endPosition), 
            this.startColor.cloneTo(e.startColor), this.endColor.cloneTo(e.endColor);
        }
    }, e.PixelLineFilter = Dt, e.PixelLineMaterial = vt, e.PixelLineRenderer = Ft, e.PixelLineSprite3D = Ut, 
    e.PixelLineVertex = Mt, e.Plane = $e, e.PointLight = un, e.PostProcess = he, e.PostProcessEffect = Cn, 
    e.PostProcessRenderContext = le, e.PrimitiveMesh = ma, e.Quaternion = T, e.QuaternionKeyframe = p, 
    e.Rand = qr, e.RandX = bn, e.Ray = et, e.ReflectionProbe = Bt, e.ReflectionProbeList = Qt, 
    e.ReflectionProbeManager = Kt, e.RenderContext3D = N, e.RenderElement = Ot, e.RenderQueue = Ht, 
    e.RenderState = fe, e.RenderTexture = P, e.RenderableSprite3D = Lt, e.RotationOverLifetime = Cr, 
    e.Scene3D = Jt, e.Scene3DShaderDeclaration = dt, e.Scene3DUtils = Tn, e.ScreenQuad = z, 
    e.ScreenTriangle = k, e.Script3D = Mn, e.SetGlobalShaderDataCMD = ae, e.SetRenderTargetCMD = Q, 
    e.SetShaderDataCMD = K, e.Shader3D = Z, e.ShaderData = F, e.ShaderDefine = W, e.ShaderInit3D = dn, 
    e.ShaderInstance = Ge, e.ShaderPass = $t, e.ShaderVariable = He, e.ShaderVariant = X, 
    e.ShaderVariantCollection = Y, e.ShadowCasterPass = jt, e.ShadowCullInfo = Ye, e.ShadowSliceData = Yt, 
    e.ShadowSpotData = Zt, e.ShadowUtils = ut, e.ShapeUtils = Nr, e.ShuriKenParticle3D = $r, 
    e.ShuriKenParticle3DShaderDeclaration = zr, e.ShurikenParticleData = Kr, e.ShurikenParticleMaterial = kr, 
    e.ShurikenParticleRenderer = Xr, e.ShurikenParticleSystem = Jr, e.SimpleSingletonList = ke, 
    e.SimpleSkinnedMeshRenderer = fn, e.SimpleSkinnedMeshSprite3D = En, e.SingletonList = ze, 
    e.Size = Fn, e.SizeOverLifetime = Fr, e.SkinnedMeshRenderer = ta, e.SkinnedMeshSprite3D = ra, 
    e.SkinnedMeshSprite3DShaderDeclaration = ea, e.SkyBox = lt, e.SkyBoxMaterial = _r, 
    e.SkyDome = pt, e.SkyMesh = ot, e.SkyPanoramicMaterial = An, e.SkyProceduralMaterial = dr, 
    e.SkyRenderer = ht, e.SphereShape = br, e.SphericalHarmonicsL2 = Qe, e.SpotLight = mn, 
    e.Sprite3D = $, e.StartFrame = Ur, e.StaticBatchManager = Pt, e.SubMesh = da, e.SubMeshDynamicBatch = Er, 
    e.SubMeshInstanceBatch = Ct, e.SubMeshRenderElement = Nt, e.SubMeshStaticBatch = wt, 
    e.SubShader = er, e.TextMesh = class {
        constructor() {}
        get text() {
            return this._text;
        }
        set text(e) {
            this._text = e;
        }
        get fontSize() {
            return this._fontSize;
        }
        set fontSize(e) {
            this._fontSize = e;
        }
        get color() {
            return this._color;
        }
        set color(e) {
            this._color = e;
        }
    }, e.TextureCube = gt, e.TextureGenerator = x, e.TextureMode = na, e.TextureSheetAnimation = Hr, 
    e.Touch = Je, e.TrailFilter = oa, e.TrailGeometry = sa, e.TrailMaterial = aa, e.TrailRenderer = la, 
    e.TrailSprite3D = ha, e.Transform3D = J, e.UnlitMaterial = cr, e.Utils3D = A, e.Vector2 = a, 
    e.Vector3 = i, e.Vector3Keyframe = g, e.Vector4 = n, e.VelocityOverLifetime = Gr, 
    e.VertexBuffer3D = V, e.VertexDeclaration = U, e.VertexElement = H, e.VertexElementFormat = B, 
    e.VertexMesh = ie, e.VertexPositionTerrain = _a, e.VertexPositionTexture0 = Tt, 
    e.VertexShuriKenParticle = Yr, e.VertexShurikenParticleBillboard = Zr, e.VertexShurikenParticleMesh = jr, 
    e.VertexTrail = ia, e.Viewport = nt, e.WaterPrimaryMaterial = ur, e.skinnedMatrixCache = ca;
}(window.Laya = window.Laya || {}, Laya);