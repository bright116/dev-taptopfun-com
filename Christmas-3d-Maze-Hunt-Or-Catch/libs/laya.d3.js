! function(e, t) {
	"use strict";
	class r {
		constructor() {}
		static isZero(e) {
			return Math.abs(e) < r.zeroTolerance
		}
		static nearEqual(e, t) {
			return !!r.isZero(e - t)
		}
		static fastInvSqrt(e) {
			return r.isZero(e) ? e : 1 / Math.sqrt(e)
		}
	}
	r.zeroTolerance = 1e-6, r.MaxValue = 3.40282347e38, r.MinValue = -3.40282347e38;
	class i {
		constructor(e = 0, t = 0) {
			this.x = e, this.y = t
		}
		setValue(e, t) {
			this.x = e, this.y = t
		}
		static scale(e, t, r) {
			r.x = e.x * t, r.y = e.y * t
		}
		fromArray(e, t = 0) {
			this.x = e[t + 0], this.y = e[t + 1]
		}
		cloneTo(e) {
			var t = e;
			t.x = this.x, t.y = this.y
		}
		static dot(e, t) {
			return e.x * t.x + e.y * t.y
		}
		static normalize(e, t) {
			var r = e.x,
				i = e.y,
				a = r * r + i * i;
			a > 0 && (a = 1 / Math.sqrt(a), t.x = r * a, t.y = i * a)
		}
		static scalarLength(e) {
			var t = e.x,
				r = e.y;
			return Math.sqrt(t * t + r * r)
		}
		clone() {
			var e = new i;
			return this.cloneTo(e), e
		}
		forNativeElement(e = null) {
			e ? (this.elements = e, this.elements[0] = this.x, this.elements[1] = this.y) : this.elements =
				new Float32Array([this.x, this.y]), i.rewriteNumProperty(this, "x", 0), i.rewriteNumProperty(this,
					"y", 1)
		}
		static rewriteNumProperty(e, t, r) {
			Object.defineProperty(e, t, {
				get: function() {
					return this.elements[r]
				},
				set: function(e) {
					this.elements[r] = e
				}
			})
		}
	}
	i.ZERO = new i(0, 0), i.ONE = new i(1, 1);
	class a {
		constructor(e = 0, t = 0, r = 0, i = 0) {
			this.x = e, this.y = t, this.z = r, this.w = i
		}
		setValue(e, t, r, i) {
			this.x = e, this.y = t, this.z = r, this.w = i
		}
		fromArray(e, t = 0) {
			this.x = e[t + 0], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3]
		}
		cloneTo(e) {
			var t = e;
			t.x = this.x, t.y = this.y, t.z = this.z, t.w = this.w
		}
		clone() {
			var e = new a;
			return this.cloneTo(e), e
		}
		static lerp(e, t, r, i) {
			var a = e.x,
				n = e.y,
				s = e.z,
				o = e.w;
			i.x = a + r * (t.x - a), i.y = n + r * (t.y - n), i.z = s + r * (t.z - s), i.w = o + r * (t.w - o)
		}
		static transformByM4x4(e, t, r) {
			var i = e.x,
				a = e.y,
				n = e.z,
				s = e.w,
				o = t.elements;
			r.x = i * o[0] + a * o[4] + n * o[8] + s * o[12], r.y = i * o[1] + a * o[5] + n * o[9] + s * o[13], r
				.z = i * o[2] + a * o[6] + n * o[10] + s * o[14], r.w = i * o[3] + a * o[7] + n * o[11] + s * o[15]
		}
		static equals(e, t) {
			return r.nearEqual(Math.abs(e.x), Math.abs(t.x)) && r.nearEqual(Math.abs(e.y), Math.abs(t.y)) && r
				.nearEqual(Math.abs(e.z), Math.abs(t.z)) && r.nearEqual(Math.abs(e.w), Math.abs(t.w))
		}
		length() {
			return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
		}
		lengthSquared() {
			return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
		}
		static normalize(e, t) {
			var r = e.length();
			r > 0 && (t.x = e.x * r, t.y = e.y * r, t.z = e.z * r, t.w = e.w * r)
		}
		static add(e, t, r) {
			r.x = e.x + t.x, r.y = e.y + t.y, r.z = e.z + t.z, r.w = e.w + t.w
		}
		static subtract(e, t, r) {
			r.x = e.x - t.x, r.y = e.y - t.y, r.z = e.z - t.z, r.w = e.w - t.w
		}
		static multiply(e, t, r) {
			r.x = e.x * t.x, r.y = e.y * t.y, r.z = e.z * t.z, r.w = e.w * t.w
		}
		static scale(e, t, r) {
			r.x = e.x * t, r.y = e.y * t, r.z = e.z * t, r.w = e.w * t
		}
		static Clamp(e, t, r, i) {
			var a = e.x,
				n = e.y,
				s = e.z,
				o = e.w,
				l = t.x,
				_ = t.y,
				h = t.z,
				c = t.w,
				d = r.x,
				u = r.y,
				f = r.z,
				m = r.w;
			a = (a = a > d ? d : a) < l ? l : a, n = (n = n > u ? u : n) < _ ? _ : n, s = (s = s > f ? f : s) < h ?
				h : s, o = (o = o > m ? m : o) < c ? c : o, i.x = a, i.y = n, i.z = s, i.w = o
		}
		static distanceSquared(e, t) {
			var r = e.x - t.x,
				i = e.y - t.y,
				a = e.z - t.z,
				n = e.w - t.w;
			return r * r + i * i + a * a + n * n
		}
		static distance(e, t) {
			var r = e.x - t.x,
				i = e.y - t.y,
				a = e.z - t.z,
				n = e.w - t.w;
			return Math.sqrt(r * r + i * i + a * a + n * n)
		}
		static dot(e, t) {
			return e.x * t.x + e.y * t.y + e.z * t.z + e.w * t.w
		}
		static min(e, t, r) {
			r.x = Math.min(e.x, t.x), r.y = Math.min(e.y, t.y), r.z = Math.min(e.z, t.z), r.w = Math.min(e.w, t.w)
		}
		static max(e, t, r) {
			r.x = Math.max(e.x, t.x), r.y = Math.max(e.y, t.y), r.z = Math.max(e.z, t.z), r.w = Math.max(e.w, t.w)
		}
		forNativeElement(e = null) {
			e ? (this.elements = e, this.elements[0] = this.x, this.elements[1] = this.y, this.elements[2] = this.z,
					this.elements[3] = this.w) : this.elements = new Float32Array([this.x, this.y, this.z, this.w]),
				i.rewriteNumProperty(this, "x", 0), i.rewriteNumProperty(this, "y", 1), i.rewriteNumProperty(this,
					"z", 2), i.rewriteNumProperty(this, "w", 3)
		}
	}
	a.ZERO = new a, a.ONE = new a(1, 1, 1, 1), a.UnitX = new a(1, 0, 0, 0), a.UnitY = new a(0, 1, 0, 0), a.UnitZ =
		new a(0, 0, 1, 0), a.UnitW = new a(0, 0, 0, 1);
	class n {
		constructor(e = 0, t = 0, r = 0, i = null) {
			this.x = e, this.y = t, this.z = r
		}
		static distanceSquared(e, t) {
			var r = e.x - t.x,
				i = e.y - t.y,
				a = e.z - t.z;
			return r * r + i * i + a * a
		}
		static distance(e, t) {
			var r = e.x - t.x,
				i = e.y - t.y,
				a = e.z - t.z;
			return Math.sqrt(r * r + i * i + a * a)
		}
		static min(e, t, r) {
			r.x = Math.min(e.x, t.x), r.y = Math.min(e.y, t.y), r.z = Math.min(e.z, t.z)
		}
		static max(e, t, r) {
			r.x = Math.max(e.x, t.x), r.y = Math.max(e.y, t.y), r.z = Math.max(e.z, t.z)
		}
		static transformQuat(e, t, r) {
			var i = e.x,
				a = e.y,
				n = e.z,
				s = t.x,
				o = t.y,
				l = t.z,
				_ = t.w,
				h = _ * i + o * n - l * a,
				c = _ * a + l * i - s * n,
				d = _ * n + s * a - o * i,
				u = -s * i - o * a - l * n;
			r.x = h * _ + u * -s + c * -l - d * -o, r.y = c * _ + u * -o + d * -s - h * -l, r.z = d * _ + u * -l +
				h * -o - c * -s
		}
		static scalarLength(e) {
			var t = e.x,
				r = e.y,
				i = e.z;
			return Math.sqrt(t * t + r * r + i * i)
		}
		static scalarLengthSquared(e) {
			var t = e.x,
				r = e.y,
				i = e.z;
			return t * t + r * r + i * i
		}
		static normalize(e, t) {
			var r = e.x,
				i = e.y,
				a = e.z,
				n = r * r + i * i + a * a;
			n > 0 && (n = 1 / Math.sqrt(n), t.x = r * n, t.y = i * n, t.z = a * n)
		}
		static multiply(e, t, r) {
			r.x = e.x * t.x, r.y = e.y * t.y, r.z = e.z * t.z
		}
		static scale(e, t, r) {
			r.x = e.x * t, r.y = e.y * t, r.z = e.z * t
		}
		static lerp(e, t, r, i) {
			var a = e.x,
				n = e.y,
				s = e.z;
			i.x = a + r * (t.x - a), i.y = n + r * (t.y - n), i.z = s + r * (t.z - s)
		}
		static transformV3ToV3(e, t, r) {
			var i = n._tempVector4;
			n.transformV3ToV4(e, t, i), r.x = i.x, r.y = i.y, r.z = i.z
		}
		static transformV3ToV4(e, t, r) {
			var i = e.x,
				a = e.y,
				n = e.z,
				s = t.elements;
			r.x = i * s[0] + a * s[4] + n * s[8] + s[12], r.y = i * s[1] + a * s[5] + n * s[9] + s[13], r.z = i * s[
				2] + a * s[6] + n * s[10] + s[14], r.w = i * s[3] + a * s[7] + n * s[11] + s[15]
		}
		static TransformNormal(e, t, r) {
			var i = e.x,
				a = e.y,
				n = e.z,
				s = t.elements;
			r.x = i * s[0] + a * s[4] + n * s[8], r.y = i * s[1] + a * s[5] + n * s[9], r.z = i * s[2] + a * s[6] +
				n * s[10]
		}
		static transformCoordinate(e, t, r) {
			var i = e.x,
				a = e.y,
				n = e.z,
				s = t.elements,
				o = i * s[3] + a * s[7] + n * s[11] + s[15];
			r.x = i * s[0] + a * s[4] + n * s[8] + s[12] / o, r.y = i * s[1] + a * s[5] + n * s[9] + s[13] / o, r
				.z = i * s[2] + a * s[6] + n * s[10] + s[14] / o
		}
		static Clamp(e, t, r, i) {
			var a = e.x,
				n = e.y,
				s = e.z,
				o = t.x,
				l = t.y,
				_ = t.z,
				h = r.x,
				c = r.y,
				d = r.z;
			a = (a = a > h ? h : a) < o ? o : a, n = (n = n > c ? c : n) < l ? l : n, s = (s = s > d ? d : s) < _ ?
				_ : s, i.x = a, i.y = n, i.z = s
		}
		static add(e, t, r) {
			r.x = e.x + t.x, r.y = e.y + t.y, r.z = e.z + t.z
		}
		static subtract(e, t, r) {
			r.x = e.x - t.x, r.y = e.y - t.y, r.z = e.z - t.z
		}
		static cross(e, t, r) {
			var i = e.x,
				a = e.y,
				n = e.z,
				s = t.x,
				o = t.y,
				l = t.z;
			r.x = a * l - n * o, r.y = n * s - i * l, r.z = i * o - a * s
		}
		static dot(e, t) {
			return e.x * t.x + e.y * t.y + e.z * t.z
		}
		static equals(e, t) {
			return r.nearEqual(e.x, t.x) && r.nearEqual(e.y, t.y) && r.nearEqual(e.z, t.z)
		}
		setValue(e, t, r) {
			this.x = e, this.y = t, this.z = r
		}
		fromArray(e, t = 0) {
			this.x = e[t + 0], this.y = e[t + 1], this.z = e[t + 2]
		}
		cloneTo(e) {
			var t = e;
			t.x = this.x, t.y = this.y, t.z = this.z
		}
		clone() {
			var e = new n;
			return this.cloneTo(e), e
		}
		toDefault() {
			this.x = 0, this.y = 0, this.z = 0
		}
		forNativeElement(e = null) {
			e ? (this.elements = e, this.elements[0] = this.x, this.elements[1] = this.y, this.elements[2] = this
				.z) : this.elements = new Float32Array([this.x, this.y, this.z]), i.rewriteNumProperty(this, "x",
				0), i.rewriteNumProperty(this, "y", 1), i.rewriteNumProperty(this, "z", 2)
		}
	}
	n._tempVector4 = new a, n._ZERO = new n(0, 0, 0), n._ONE = new n(1, 1, 1), n._NegativeUnitX = new n(-1, 0, 0), n
		._UnitX = new n(1, 0, 0), n._UnitY = new n(0, 1, 0), n._UnitZ = new n(0, 0, 1), n._ForwardRH = new n(0, 0, -1),
		n._ForwardLH = new n(0, 0, 1), n._Up = new n(0, 1, 0);
	class s {
		constructor() {
			this._defaultPhysicsMemory = 16, this._maxLightCount = 32, this._lightClusterCount = new n(12, 12, 12),
				this._editerEnvironment = !1, this.isAntialias = !0, this.isAlpha = !1, this.premultipliedAlpha = !
				0, this.isStencil = !0, this.enbaleMultiLight = !0, this.octreeCulling = !1, this
				.octreeInitialSize = 64, this.octreeInitialCenter = new n(0, 0, 0), this.octreeMinNodeSize = 2, this
				.octreeLooseness = 1.25, this.debugFrustumCulling = !1, this._maxAreaLightCountPerClusterAverage =
				Math.min(4 * Math.floor(2048 / this._lightClusterCount.z - 1), this._maxLightCount)
		}
		get defaultPhysicsMemory() {
			return this._defaultPhysicsMemory
		}
		set defaultPhysicsMemory(e) {
			if (e < 16) throw "defaultPhysicsMemory must large than 16M";
			this._defaultPhysicsMemory = e
		}
		get maxLightCount() {
			return this._maxLightCount
		}
		set maxLightCount(e) {
			e > 2048 ? (this._maxLightCount = 2048, console.warn("Config3D: maxLightCount must less equal 2048.")) :
				this._maxLightCount = e
		}
		get lightClusterCount() {
			return this._lightClusterCount
		}
		set lightClusterCount(e) {
			e.x > 128 || e.y > 128 || e.z > 128 ? (this._lightClusterCount.setValue(Math.min(e.x, 128), Math.min(e
				.y, 128), Math.min(e.z, 128)), console.warn(
				"Config3D: lightClusterCount X and Y、Z must less equal 128.")) : e.cloneTo(this
				._lightClusterCount);
			var t = 4 * Math.floor(2048 / this._lightClusterCount.z - 1);
			t < this._maxLightCount && console.warn(
					"Config3D: if the area light(PointLight、SpotLight) count is large than " + t +
					",maybe the far away culster will ingonre some light."), this
				._maxAreaLightCountPerClusterAverage = Math.min(t, this._maxLightCount)
		}
		_checkMaxLightCountPerCluster(e, t) {
			return Math.ceil(e / 4 + 1) * t < 2048
		}
		cloneTo(e) {
			var t = e;
			t._defaultPhysicsMemory = this._defaultPhysicsMemory, t._editerEnvironment = this._editerEnvironment, t
				.isAntialias = this.isAntialias, t.isAlpha = this.isAlpha, t.premultipliedAlpha = this
				.premultipliedAlpha, t.isStencil = this.isStencil, t.octreeCulling = this.octreeCulling, this
				.octreeInitialCenter.cloneTo(t.octreeInitialCenter), t.octreeInitialSize = this.octreeInitialSize, t
				.octreeMinNodeSize = this.octreeMinNodeSize, t.octreeLooseness = this.octreeLooseness, t
				.debugFrustumCulling = this.debugFrustumCulling, t.maxLightCount = this.maxLightCount, t
				.enbaleMultiLight = this.enbaleMultiLight;
			var r = t.lightClusterCount;
			this.lightClusterCount.cloneTo(r), t.lightClusterCount = r
		}
		clone() {
			var e = new s;
			return this.cloneTo(e), e
		}
	}
	s._config = new s, window.Config3D = s;
	class o {}
	o.Scene3D = null, o.MeshRenderStaticBatchManager = null, o.MeshRenderDynamicBatchManager = null, o
		.SubMeshDynamicBatch = null, o.Laya3D = null, o.Matrix4x4 = null;
	class l {
		constructor() {
			this._ownerPath = [], this._propertys = [], this._keyFrames = []
		}
		get ownerPathCount() {
			return this._ownerPath.length
		}
		get propertyCount() {
			return this._propertys.length
		}
		get keyFramesCount() {
			return this._keyFrames.length
		}
		_setOwnerPathCount(e) {
			this._ownerPath.length = e
		}
		_setOwnerPathByIndex(e, t) {
			this._ownerPath[e] = t
		}
		_joinOwnerPath(e) {
			return this._ownerPath.join(e)
		}
		_setPropertyCount(e) {
			this._propertys.length = e
		}
		_setPropertyByIndex(e, t) {
			this._propertys[e] = t
		}
		_joinProperty(e) {
			return this._propertys.join(e)
		}
		_setKeyframeCount(e) {
			this._keyFrames.length = e
		}
		_setKeyframeByIndex(e, t) {
			this._keyFrames[e] = t
		}
		getOwnerPathByIndex(e) {
			return this._ownerPath[e]
		}
		getPropertyByIndex(e) {
			return this._propertys[e]
		}
		getKeyframeByIndex(e) {
			return this._keyFrames[e]
		}
	}
	window.conch && window.conchKeyframeNode && (l = window.conchKeyframeNode), window.qq && window.qq.webglPlus && (l =
		window.qq.webglPlus.conchKeyframeNode);
	class _ {
		constructor() {}
	}
	class h {
		constructor() {}
		cloneTo(e) {
			e.time = this.time
		}
		clone() {
			var e = new h;
			return this.cloneTo(e), e
		}
	}
	class c extends h {
		constructor() {
			super()
		}
		cloneTo(e) {
			super.cloneTo(e);
			var t = e;
			t.inTangent = this.inTangent, t.outTangent = this.outTangent, t.value = this.value
		}
	}
	window.conch && window.conchFloatKeyframe && (c = window.conchFloatKeyframe), window.qq && window.qq.webglPlus && (
		c = window.qq.webglPlus.conchFloatKeyframe);
	class d {
		constructor() {
			var e = this.elements = new Float32Array(9);
			e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 1, e[5] = 0, e[6] = 0, e[7] = 0, e[8] = 1
		}
		static createRotationQuaternion(e, t) {
			var r = e.x,
				i = e.y,
				a = e.z,
				n = e.w,
				s = r * r,
				o = i * i,
				l = a * a,
				_ = r * i,
				h = a * n,
				c = a * r,
				d = i * n,
				u = i * a,
				f = r * n,
				m = t.elements;
			m[0] = 1 - 2 * (o + l), m[1] = 2 * (_ + h), m[2] = 2 * (c - d), m[3] = 2 * (_ - h), m[4] = 1 - 2 * (l +
				s), m[5] = 2 * (u + f), m[6] = 2 * (c + d), m[7] = 2 * (u - f), m[8] = 1 - 2 * (o + s)
		}
		static createFromTranslation(e, t) {
			t.elements;
			t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = e.x, t[7] = e.y, t[8] = 1
		}
		static createFromRotation(e, t) {
			var r = t.elements,
				i = Math.sin(e),
				a = Math.cos(e);
			r[0] = a, r[1] = i, r[2] = 0, r[3] = -i, r[4] = a, r[5] = 0, r[6] = 0, r[7] = 0, r[8] = 1
		}
		static createFromScaling(e, t) {
			var r = t.elements;
			r[0] = e.x, r[1] = 0, r[2] = 0, r[3] = 0, r[4] = e.y, r[5] = 0, r[6] = 0, r[7] = 0, r[8] = e.z
		}
		static createFromMatrix4x4(e, t) {
			var r = e.elements,
				i = t.elements;
			i[0] = r[0], i[1] = r[1], i[2] = r[2], i[3] = r[4], i[4] = r[5], i[5] = r[6], i[6] = r[8], i[7] = r[9],
				i[8] = r[10]
		}
		static multiply(e, t, r) {
			var i = e.elements,
				a = t.elements,
				n = r.elements,
				s = i[0],
				o = i[1],
				l = i[2],
				_ = i[3],
				h = i[4],
				c = i[5],
				d = i[6],
				u = i[7],
				f = i[8],
				m = a[0],
				E = a[1],
				T = a[2],
				p = a[3],
				g = a[4],
				S = a[5],
				v = a[6],
				R = a[7],
				I = a[8];
			n[0] = m * s + E * _ + T * d, n[1] = m * o + E * h + T * R, n[2] = m * l + E * c + T * f, n[3] = p * s +
				g * _ + S * d, n[4] = p * o + g * h + S * u, n[5] = p * l + g * c + S * f, n[6] = v * s + R * _ +
				I * d, n[7] = v * o + R * h + I * u, n[8] = v * l + R * c + I * f
		}
		determinant() {
			var e = this.elements,
				t = e[0],
				r = e[1],
				i = e[2],
				a = e[3],
				n = e[4],
				s = e[5],
				o = e[6],
				l = e[7],
				_ = e[8];
			return t * (_ * n - s * l) + r * (-_ * a + s * o) + i * (l * a - n * o)
		}
		translate(e, t) {
			var r = t.elements,
				i = this.elements,
				a = i[0],
				n = i[1],
				s = i[2],
				o = i[3],
				l = i[4],
				_ = i[5],
				h = i[6],
				c = i[7],
				d = i[8],
				u = e.x,
				f = e.y;
			r[0] = a, r[1] = n, r[2] = s, r[3] = o, r[4] = l, r[5] = _, r[6] = u * a + f * o + h, r[7] = u * n + f *
				l + c, r[8] = u * s + f * _ + d
		}
		rotate(e, t) {
			var r = t.elements,
				i = this.elements,
				a = i[0],
				n = i[1],
				s = i[2],
				o = i[3],
				l = i[4],
				_ = i[5],
				h = i[6],
				c = i[7],
				d = i[8],
				u = Math.sin(e),
				f = Math.cos(e);
			r[0] = f * a + u * o, r[1] = f * n + u * l, r[2] = f * s + u * _, r[3] = f * o - u * a, r[4] = f * l -
				u * n, r[5] = f * _ - u * s, r[6] = h, r[7] = c, r[8] = d
		}
		scale(e, t) {
			var r = t.elements,
				i = this.elements,
				a = e.x,
				n = e.y;
			r[0] = a * i[0], r[1] = a * i[1], r[2] = a * i[2], r[3] = n * i[3], r[4] = n * i[4], r[5] = n * i[5], r[
				6] = i[6], r[7] = i[7], r[8] = i[8]
		}
		invert(e) {
			var t = e.elements,
				r = this.elements,
				i = r[0],
				a = r[1],
				n = r[2],
				s = r[3],
				o = r[4],
				l = r[5],
				_ = r[6],
				h = r[7],
				c = r[8],
				d = c * o - l * h,
				u = -c * s + l * _,
				f = h * s - o * _,
				m = i * d + a * u + n * f;
			m || (e = null), m = 1 / m, t[0] = d * m, t[1] = (-c * a + n * h) * m, t[2] = (l * a - n * o) * m, t[
				3] = u * m, t[4] = (c * i - n * _) * m, t[5] = (-l * i + n * s) * m, t[6] = f * m, t[7] = (-h * i +
					a * _) * m, t[8] = (o * i - a * s) * m
		}
		transpose(e) {
			var t = e.elements,
				r = this.elements;
			if (e === this) {
				var i = r[1],
					a = r[2],
					n = r[5];
				t[1] = r[3], t[2] = r[6], t[3] = i, t[5] = r[7], t[6] = a, t[7] = n
			} else t[0] = r[0], t[1] = r[3], t[2] = r[6], t[3] = r[1], t[4] = r[4], t[5] = r[7], t[6] = r[2], t[7] =
				r[5], t[8] = r[8]
		}
		identity() {
			var e = this.elements;
			e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 1, e[5] = 0, e[6] = 0, e[7] = 0, e[8] = 1
		}
		cloneTo(e) {
			var t, r, i;
			if ((r = this.elements) !== (i = e.elements))
				for (t = 0; t < 9; ++t) i[t] = r[t]
		}
		clone() {
			var e = new d;
			return this.cloneTo(e), e
		}
		static lookAt(e, t, r, i) {
			n.subtract(e, t, d._tempV30), n.normalize(d._tempV30, d._tempV30), n.cross(r, d._tempV30, d._tempV31), n
				.normalize(d._tempV31, d._tempV31), n.cross(d._tempV30, d._tempV31, d._tempV32);
			var a = d._tempV30,
				s = d._tempV31,
				o = d._tempV32,
				l = i.elements;
			l[0] = s.x, l[3] = s.y, l[6] = s.z, l[1] = o.x, l[4] = o.y, l[7] = o.z, l[2] = a.x, l[5] = a.y, l[8] = a
				.z
		}
	}
	d.DEFAULT = new d, d._tempV30 = new n, d._tempV31 = new n, d._tempV32 = new n;
	class u {
		constructor(e = 0, t = 0, r = 0, i = 1, a = null) {
			this.x = e, this.y = t, this.z = r, this.w = i
		}
		static createFromYawPitchRoll(e, t, r, i) {
			var a = .5 * r,
				n = .5 * t,
				s = .5 * e,
				o = Math.sin(a),
				l = Math.cos(a),
				_ = Math.sin(n),
				h = Math.cos(n),
				c = Math.sin(s),
				d = Math.cos(s);
			i.x = d * _ * l + c * h * o, i.y = c * h * l - d * _ * o, i.z = d * h * o - c * _ * l, i.w = d * h * l +
				c * _ * o
		}
		static multiply(e, t, r) {
			var i = e.x,
				a = e.y,
				n = e.z,
				s = e.w,
				o = t.x,
				l = t.y,
				_ = t.z,
				h = t.w,
				c = a * _ - n * l,
				d = n * o - i * _,
				u = i * l - a * o,
				f = i * o + a * l + n * _;
			r.x = i * h + o * s + c, r.y = a * h + l * s + d, r.z = n * h + _ * s + u, r.w = s * h - f
		}
		static arcTanAngle(e, t) {
			return 0 == e ? 1 == t ? Math.PI / 2 : -Math.PI / 2 : e > 0 ? Math.atan(t / e) : e < 0 ? t > 0 ? Math
				.atan(t / e) + Math.PI : Math.atan(t / e) - Math.PI : 0
		}
		static angleTo(e, t, r) {
			n.subtract(t, e, u.TEMPVector30), n.normalize(u.TEMPVector30, u.TEMPVector30), r.x = Math.asin(u
				.TEMPVector30.y), r.y = u.arcTanAngle(-u.TEMPVector30.z, -u.TEMPVector30.x)
		}
		static createFromAxisAngle(e, t, r) {
			t *= .5;
			var i = Math.sin(t);
			r.x = i * e.x, r.y = i * e.y, r.z = i * e.z, r.w = Math.cos(t)
		}
		static createFromMatrix4x4(e, t) {
			var r, i, a = e.elements,
				n = a[0] + a[5] + a[10];
			n > 0 ? (r = Math.sqrt(n + 1), t.w = .5 * r, r = .5 / r, t.x = (a[6] - a[9]) * r, t.y = (a[8] - a[2]) *
				r, t.z = (a[1] - a[4]) * r) : a[0] >= a[5] && a[0] >= a[10] ? (i = .5 / (r = Math.sqrt(1 + a[
				0] - a[5] - a[10])), t.x = .5 * r, t.y = (a[1] + a[4]) * i, t.z = (a[2] + a[8]) * i, t.w = (
				a[6] - a[9]) * i) : a[5] > a[10] ? (i = .5 / (r = Math.sqrt(1 + a[5] - a[0] - a[10])), t.x = (a[
				4] + a[1]) * i, t.y = .5 * r, t.z = (a[9] + a[6]) * i, t.w = (a[8] - a[2]) * i) : (i = .5 / (r =
					Math.sqrt(1 + a[10] - a[0] - a[5])), t.x = (a[8] + a[2]) * i, t.y = (a[9] + a[6]) * i, t.z =
				.5 * r, t.w = (a[1] - a[4]) * i)
		}
		static slerp(e, t, r, i) {
			var a, n, s, o, l, _ = e.x,
				h = e.y,
				c = e.z,
				d = e.w,
				u = t.x,
				f = t.y,
				m = t.z,
				E = t.w;
			return (n = _ * u + h * f + c * m + d * E) < 0 && (n = -n, u = -u, f = -f, m = -m, E = -E), 1 - n >
				1e-6 ? (a = Math.acos(n), s = Math.sin(a), o = Math.sin((1 - r) * a) / s, l = Math.sin(r * a) / s) :
				(o = 1 - r, l = r), i.x = o * _ + l * u, i.y = o * h + l * f, i.z = o * c + l * m, i.w = o * d + l *
				E, i
		}
		static lerp(e, t, r, i) {
			var a = 1 - r;
			u.dot(e, t) >= 0 ? (i.x = a * e.x + r * t.x, i.y = a * e.y + r * t.y, i.z = a * e.z + r * t.z, i.w = a *
				e.w + r * t.w) : (i.x = a * e.x - r * t.x, i.y = a * e.y - r * t.y, i.z = a * e.z - r * t.z, i
				.w = a * e.w - r * t.w), i.normalize(i)
		}
		static add(e, t, r) {
			r.x = e.x + t.x, r.y = e.y + t.y, r.z = e.z + t.z, r.w = e.w + t.w
		}
		static dot(e, t) {
			return e.x * t.x + e.y * t.y + e.z * t.z + e.w * t.w
		}
		scaling(e, t) {
			t.x = this.x * e, t.y = this.y * e, t.z = this.z * e, t.w = this.w * e
		}
		normalize(e) {
			var t = this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
			t > 0 && (t = 1 / Math.sqrt(t), e.x = this.x * t, e.y = this.y * t, e.z = this.z * t, e.w = this.w * t)
		}
		length() {
			return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
		}
		rotateX(e, t) {
			e *= .5;
			var r = Math.sin(e),
				i = Math.cos(e);
			t.x = this.x * i + this.w * r, t.y = this.y * i + this.z * r, t.z = this.z * i - this.y * r, t.w = this
				.w * i - this.x * r
		}
		rotateY(e, t) {
			e *= .5;
			var r = Math.sin(e),
				i = Math.cos(e);
			t.x = this.x * i - this.z * r, t.y = this.y * i + this.w * r, t.z = this.z * i + this.x * r, t.w = this
				.w * i - this.y * r
		}
		rotateZ(e, t) {
			e *= .5;
			var r = Math.sin(e),
				i = Math.cos(e);
			t.x = this.x * i + this.y * r, t.y = this.y * i - this.x * r, t.z = this.z * i + this.w * r, t.w = this
				.w * i - this.z * r
		}
		getYawPitchRoll(e) {
			n.transformQuat(n._ForwardRH, this, u.TEMPVector31), n.transformQuat(n._Up, this, u.TEMPVector32);
			var t = u.TEMPVector32;
			u.angleTo(n._ZERO, u.TEMPVector31, u.TEMPVector33);
			var r = u.TEMPVector33;
			r.x == Math.PI / 2 ? (r.y = u.arcTanAngle(t.z, t.x), r.z = 0) : r.x == -Math.PI / 2 ? (r.y = u
					.arcTanAngle(-t.z, -t.x), r.z = 0) : (o.Matrix4x4.createRotationY(-r.y, o.Matrix4x4
					.TEMPMatrix0), o.Matrix4x4.createRotationX(-r.x, o.Matrix4x4.TEMPMatrix1), n
					.transformCoordinate(u.TEMPVector32, o.Matrix4x4.TEMPMatrix0, u.TEMPVector32), n
					.transformCoordinate(u.TEMPVector32, o.Matrix4x4.TEMPMatrix1, u.TEMPVector32), r.z = u
					.arcTanAngle(t.y, -t.x)), r.y <= -Math.PI && (r.y = Math.PI), r.z <= -Math.PI && (r.z = Math
				.PI), r.y >= Math.PI && r.z >= Math.PI && (r.y = 0, r.z = 0, r.x = Math.PI - r.x);
			var i = e;
			i.x = r.y, i.y = r.x, i.z = r.z
		}
		invert(e) {
			var t = this.x,
				r = this.y,
				i = this.z,
				a = this.w,
				n = t * t + r * r + i * i + a * a,
				s = n ? 1 / n : 0;
			e.x = -t * s, e.y = -r * s, e.z = -i * s, e.w = a * s
		}
		identity() {
			this.x = 0, this.y = 0, this.z = 0, this.w = 1
		}
		fromArray(e, t = 0) {
			this.x = e[t + 0], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3]
		}
		cloneTo(e) {
			this !== e && (e.x = this.x, e.y = this.y, e.z = this.z, e.w = this.w)
		}
		clone() {
			var e = new u;
			return this.cloneTo(e), e
		}
		equals(e) {
			return r.nearEqual(this.x, e.x) && r.nearEqual(this.y, e.y) && r.nearEqual(this.z, e.z) && r.nearEqual(
				this.w, e.w)
		}
		static rotationLookAt(e, t, r) {
			u.lookAt(n._ZERO, e, t, r)
		}
		static lookAt(e, t, r, i) {
			d.lookAt(e, t, r, u._tempMatrix3x3), u.rotationMatrix(u._tempMatrix3x3, i)
		}
		lengthSquared() {
			return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
		}
		static invert(e, t) {
			var i = e.lengthSquared();
			r.isZero(i) || (i = 1 / i, t.x = -e.x * i, t.y = -e.y * i, t.z = -e.z * i, t.w = e.w * i)
		}
		static rotationMatrix(e, t) {
			var r, i, a = e.elements,
				n = a[0],
				s = a[1],
				o = a[2],
				l = a[3],
				_ = a[4],
				h = a[5],
				c = a[6],
				d = a[7],
				u = a[8],
				f = n + _ + u;
			f > 0 ? (r = Math.sqrt(f + 1), t.w = .5 * r, r = .5 / r, t.x = (h - d) * r, t.y = (c - o) * r, t.z = (
				s - l) * r) : n >= _ && n >= u ? (i = .5 / (r = Math.sqrt(1 + n - _ - u)), t.x = .5 * r, t.y = (
				s + l) * i, t.z = (o + c) * i, t.w = (h - d) * i) : _ > u ? (i = .5 / (r = Math.sqrt(1 + _ - n -
				u)), t.x = (l + s) * i, t.y = .5 * r, t.z = (d + h) * i, t.w = (c - o) * i) : (i = .5 / (r =
					Math.sqrt(1 + u - n - _)), t.x = (c + o) * i, t.y = (d + h) * i, t.z = .5 * r, t.w = (s -
				l) * i)
		}
		forNativeElement(e = null) {
			e ? (this.elements = e, this.elements[0] = this.x, this.elements[1] = this.y, this.elements[2] = this.z,
					this.elements[3] = this.w) : this.elements = new Float32Array([this.x, this.y, this.z, this.w]),
				i.rewriteNumProperty(this, "x", 0), i.rewriteNumProperty(this, "y", 1), i.rewriteNumProperty(this,
					"z", 2), i.rewriteNumProperty(this, "w", 3)
		}
	}
	u.TEMPVector30 = new n, u.TEMPVector31 = new n, u.TEMPVector32 = new n, u.TEMPVector33 = new n, u._tempMatrix3x3 =
		new d, u.DEFAULT = new u, u.NAN = new u(NaN, NaN, NaN, NaN);
	class f extends h {
		constructor() {
			super(), this.inTangent = new a, this.outTangent = new a, this.value = new u
		}
		cloneTo(e) {
			super.cloneTo(e);
			var t = e;
			this.inTangent.cloneTo(t.inTangent), this.outTangent.cloneTo(t.outTangent), this.value.cloneTo(t.value)
		}
	}
	window.conch && window.conchFloatArrayKeyframe && (f = window.conchFloatArrayKeyframe), window.qq && window.qq
		.webglPlus && (f = window.qq.webglPlus.conchFloatArrayKeyframe);
	class m extends h {
		constructor() {
			super(), this.inTangent = new n, this.outTangent = new n, this.value = new n
		}
		cloneTo(e) {
			super.cloneTo(e);
			var t = e;
			this.inTangent.cloneTo(t.inTangent), this.outTangent.cloneTo(t.outTangent), this.value.cloneTo(t.value)
		}
	}
	window.conch && window.conchFloatArrayKeyframe && (m = window.conchFloatArrayKeyframe), window.qq && window.qq
		.webglPlus && (m = window.qq.webglPlus.conchFloatArrayKeyframe);
	class E {
		constructor(e = 0, t = 0, r = 0, i = 0) {
			var a = this.elements = new Float32Array(4);
			a[0] = e, a[1] = t, a[2] = r, a[3] = i
		}
		get x() {
			return this.elements[0]
		}
		set x(e) {
			this.elements[0] = e
		}
		get y() {
			return this.elements[1]
		}
		set y(e) {
			this.elements[1] = e
		}
		get z() {
			return this.elements[2]
		}
		set z(e) {
			this.elements[2] = e
		}
		get w() {
			return this.elements[3]
		}
		set w(e) {
			this.elements[3] = e
		}
		fromArray(e, t = 0) {
			this.elements[0] = e[t + 0], this.elements[1] = e[t + 1], this.elements[2] = e[t + 2], this.elements[
				3] = e[t + 3]
		}
		cloneTo(e) {
			var t = e.elements,
				r = this.elements;
			t[0] = r[0], t[1] = r[1], t[2] = r[2], t[3] = r[3]
		}
		clone() {
			var e = new E;
			return this.cloneTo(e), e
		}
		static lerp(e, t, r, i) {
			var a = i.elements,
				n = e.elements,
				s = t.elements,
				o = n[0],
				l = n[1],
				_ = n[2],
				h = n[3];
			a[0] = o + r * (s[0] - o), a[1] = l + r * (s[1] - l), a[2] = _ + r * (s[2] - _), a[3] = h + r * (s[3] -
				h)
		}
		static transformByM4x4(e, t, r) {
			var i = e.elements,
				a = i[0],
				n = i[1],
				s = i[2],
				o = i[3],
				l = t.elements,
				_ = r.elements;
			_[0] = a * l[0] + n * l[4] + s * l[8] + o * l[12], _[1] = a * l[1] + n * l[5] + s * l[9] + o * l[13], _[
					2] = a * l[2] + n * l[6] + s * l[10] + o * l[14], _[3] = a * l[3] + n * l[7] + s * l[11] + o *
				l[15]
		}
		static equals(e, t) {
			var i = e.elements,
				a = t.elements;
			return r.nearEqual(Math.abs(i[0]), Math.abs(a[0])) && r.nearEqual(Math.abs(i[1]), Math.abs(a[1])) && r
				.nearEqual(Math.abs(i[2]), Math.abs(a[2])) && r.nearEqual(Math.abs(i[3]), Math.abs(a[3]))
		}
		length() {
			return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
		}
		lengthSquared() {
			return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
		}
		static normalize(e, t) {
			var r = e.elements,
				i = t.elements,
				a = e.length();
			a > 0 && (i[0] = r[0] * a, i[1] = r[1] * a, i[2] = r[2] * a, i[3] = r[3] * a)
		}
		static add(e, t, r) {
			var i = r.elements,
				a = e.elements,
				n = t.elements;
			i[0] = a[0] + n[0], i[1] = a[1] + n[1], i[2] = a[2] + n[2], i[3] = a[3] + n[3]
		}
		static subtract(e, t, r) {
			var i = r.elements,
				a = e.elements,
				n = t.elements;
			i[0] = a[0] - n[0], i[1] = a[1] - n[1], i[2] = a[2] - n[2], i[3] = a[3] - n[3]
		}
		static multiply(e, t, r) {
			var i = r.elements,
				a = e.elements,
				n = t.elements;
			i[0] = a[0] * n[0], i[1] = a[1] * n[1], i[2] = a[2] * n[2], i[3] = a[3] * n[3]
		}
		static scale(e, t, r) {
			var i = r.elements,
				a = e.elements;
			i[0] = a[0] * t, i[1] = a[1] * t, i[2] = a[2] * t, i[3] = a[3] * t
		}
		static Clamp(e, t, r, i) {
			var a = e.elements,
				n = a[0],
				s = a[1],
				o = a[2],
				l = a[3],
				_ = t.elements,
				h = _[0],
				c = _[1],
				d = _[2],
				u = _[3],
				f = r.elements,
				m = f[0],
				E = f[1],
				T = f[2],
				p = f[3],
				g = i.elements;
			n = (n = n > m ? m : n) < h ? h : n, s = (s = s > E ? E : s) < c ? c : s, o = (o = o > T ? T : o) < d ?
				d : o, l = (l = l > p ? p : l) < u ? u : l, g[0] = n, g[1] = s, g[2] = o, g[3] = l
		}
		static distanceSquared(e, t) {
			var r = e.elements,
				i = t.elements,
				a = r[0] - i[0],
				n = r[1] - i[1],
				s = r[2] - i[2],
				o = r[3] - i[3];
			return a * a + n * n + s * s + o * o
		}
		static distance(e, t) {
			var r = e.elements,
				i = t.elements,
				a = r[0] - i[0],
				n = r[1] - i[1],
				s = r[2] - i[2],
				o = r[3] - i[3];
			return Math.sqrt(a * a + n * n + s * s + o * o)
		}
		static dot(e, t) {
			var r = e.elements,
				i = t.elements;
			return r[0] * i[0] + r[1] * i[1] + r[2] * i[2] + r[3] * i[3]
		}
		static min(e, t, r) {
			var i = r.elements,
				a = e.elements,
				n = t.elements;
			i[0] = Math.min(a[0], n[0]), i[1] = Math.min(a[1], n[1]), i[2] = Math.min(a[2], n[2]), i[3] = Math.min(
				a[3], n[3])
		}
		static max(e, t, r) {
			var i = r.elements,
				a = e.elements,
				n = t.elements;
			i[0] = Math.max(a[0], n[0]), i[1] = Math.max(a[1], n[1]), i[2] = Math.max(a[2], n[2]), i[3] = Math.max(
				a[3], n[3])
		}
	}
	E.ZERO = new E, E.ONE = new E(1, 1, 1, 1), E.UnitX = new E(1, 0, 0, 0), E.UnitY = new E(0, 1, 0, 0), E.UnitZ =
		new E(0, 0, 1, 0), E.UnitW = new E(0, 0, 0, 1);
	class T {
		constructor(e = 0, t = 0, r = 0, i = null) {
			var a;
			a = i || new Float32Array(3), this.elements = a, a[0] = e, a[1] = t, a[2] = r
		}
		static distanceSquared(e, t) {
			var r = e.elements,
				i = t.elements,
				a = r[0] - i[0],
				n = r[1] - i[1],
				s = r[2] - i[2];
			return a * a + n * n + s * s
		}
		static distance(e, t) {
			var r = e.elements,
				i = t.elements,
				a = r[0] - i[0],
				n = r[1] - i[1],
				s = r[2] - i[2];
			return Math.sqrt(a * a + n * n + s * s)
		}
		static min(e, t, r) {
			var i = r.elements,
				a = e.elements,
				n = t.elements;
			i[0] = Math.min(a[0], n[0]), i[1] = Math.min(a[1], n[1]), i[2] = Math.min(a[2], n[2])
		}
		static max(e, t, r) {
			var i = r.elements,
				a = e.elements,
				n = t.elements;
			i[0] = Math.max(a[0], n[0]), i[1] = Math.max(a[1], n[1]), i[2] = Math.max(a[2], n[2])
		}
		static transformQuat(e, t, r) {
			var i = r.elements,
				a = e.elements,
				n = t.elements,
				s = a[0],
				o = a[1],
				l = a[2],
				_ = n[0],
				h = n[1],
				c = n[2],
				d = n[3],
				u = d * s + h * l - c * o,
				f = d * o + c * s - _ * l,
				m = d * l + _ * o - h * s,
				E = -_ * s - h * o - c * l;
			i[0] = u * d + E * -_ + f * -c - m * -h, i[1] = f * d + E * -h + m * -_ - u * -c, i[2] = m * d + E * -
				c + u * -h - f * -_
		}
		static scalarLength(e) {
			var t = e.elements,
				r = t[0],
				i = t[1],
				a = t[2];
			return Math.sqrt(r * r + i * i + a * a)
		}
		static scalarLengthSquared(e) {
			var t = e.elements,
				r = t[0],
				i = t[1],
				a = t[2];
			return r * r + i * i + a * a
		}
		static normalize(e, t) {
			var r = e.elements,
				i = t.elements,
				a = r[0],
				n = r[1],
				s = r[2],
				o = a * a + n * n + s * s;
			o > 0 && (o = 1 / Math.sqrt(o), i[0] = r[0] * o, i[1] = r[1] * o, i[2] = r[2] * o)
		}
		static multiply(e, t, r) {
			var i = r.elements,
				a = e.elements,
				n = t.elements;
			i[0] = a[0] * n[0], i[1] = a[1] * n[1], i[2] = a[2] * n[2]
		}
		static scale(e, t, r) {
			var i = r.elements,
				a = e.elements;
			i[0] = a[0] * t, i[1] = a[1] * t, i[2] = a[2] * t
		}
		static lerp(e, t, r, i) {
			var a = i.elements,
				n = e.elements,
				s = t.elements,
				o = n[0],
				l = n[1],
				_ = n[2];
			a[0] = o + r * (s[0] - o), a[1] = l + r * (s[1] - l), a[2] = _ + r * (s[2] - _)
		}
		static transformV3ToV3(e, t, r) {
			var i = T._tempVector4;
			T.transformV3ToV4(e, t, i);
			var a = i.elements,
				n = r.elements;
			n[0] = a[0], n[1] = a[1], n[2] = a[2]
		}
		static transformV3ToV4(e, t, r) {
			var i = e.elements,
				a = i[0],
				n = i[1],
				s = i[2],
				o = t.elements,
				l = r.elements;
			l[0] = a * o[0] + n * o[4] + s * o[8] + o[12], l[1] = a * o[1] + n * o[5] + s * o[9] + o[13], l[2] = a *
				o[2] + n * o[6] + s * o[10] + o[14], l[3] = a * o[3] + n * o[7] + s * o[11] + o[15]
		}
		static TransformNormal(e, t, r) {
			var i = e.elements,
				a = i[0],
				n = i[1],
				s = i[2],
				o = t.elements,
				l = r.elements;
			l[0] = a * o[0] + n * o[4] + s * o[8], l[1] = a * o[1] + n * o[5] + s * o[9], l[2] = a * o[2] + n * o[
				6] + s * o[10]
		}
		static transformCoordinate(e, t, r) {
			var i = e.elements,
				a = i[0],
				n = i[1],
				s = i[2],
				o = t.elements,
				l = a * o[3] + n * o[7] + s * o[11] + o[15],
				_ = r.elements;
			_[0] = a * o[0] + n * o[4] + s * o[8] + o[12] / l, _[1] = a * o[1] + n * o[5] + s * o[9] + o[13] / l, _[
				2] = a * o[2] + n * o[6] + s * o[10] + o[14] / l
		}
		static Clamp(e, t, r, i) {
			var a = e.elements,
				n = a[0],
				s = a[1],
				o = a[2],
				l = t.elements,
				_ = l[0],
				h = l[1],
				c = l[2],
				d = r.elements,
				u = d[0],
				f = d[1],
				m = d[2],
				E = i.elements;
			n = (n = n > u ? u : n) < _ ? _ : n, s = (s = s > f ? f : s) < h ? h : s, o = (o = o > m ? m : o) < c ?
				c : o, E[0] = n, E[1] = s, E[2] = o
		}
		static add(e, t, r) {
			var i = r.elements,
				a = e.elements,
				n = t.elements;
			i[0] = a[0] + n[0], i[1] = a[1] + n[1], i[2] = a[2] + n[2]
		}
		static subtract(e, t, r) {
			var i = r.elements,
				a = e.elements,
				n = t.elements;
			i[0] = a[0] - n[0], i[1] = a[1] - n[1], i[2] = a[2] - n[2]
		}
		static cross(e, t, r) {
			var i = e.elements,
				a = t.elements,
				n = r.elements,
				s = i[0],
				o = i[1],
				l = i[2],
				_ = a[0],
				h = a[1],
				c = a[2];
			n[0] = o * c - l * h, n[1] = l * _ - s * c, n[2] = s * h - o * _
		}
		static dot(e, t) {
			var r = e.elements,
				i = t.elements;
			return r[0] * i[0] + r[1] * i[1] + r[2] * i[2]
		}
		static equals(e, t) {
			var i = e.elements,
				a = t.elements;
			return r.nearEqual(i[0], a[0]) && r.nearEqual(i[1], a[1]) && r.nearEqual(i[2], a[2])
		}
		get x() {
			return this.elements[0]
		}
		set x(e) {
			this.elements[0] = e
		}
		get y() {
			return this.elements[1]
		}
		set y(e) {
			this.elements[1] = e
		}
		get z() {
			return this.elements[2]
		}
		set z(e) {
			this.elements[2] = e
		}
		setValue(e, t, r) {
			this.elements[0] = e, this.elements[1] = t, this.elements[2] = r
		}
		fromArray(e, t = 0) {
			this.elements[0] = e[t + 0], this.elements[1] = e[t + 1], this.elements[2] = e[t + 2]
		}
		cloneTo(e) {
			var t = e.elements,
				r = this.elements;
			t[0] = r[0], t[1] = r[1], t[2] = r[2]
		}
		clone() {
			var e = new T;
			return this.cloneTo(e), e
		}
		toDefault() {
			this.elements[0] = 0, this.elements[1] = 0, this.elements[2] = 0
		}
	}
	T._tempVector4 = new E, T.ZERO = new T(0, 0, 0), T.ONE = new T(1, 1, 1), T.NegativeUnitX = new T(-1, 0, 0), T
		.UnitX = new T(1, 0, 0), T.UnitY = new T(0, 1, 0), T.UnitZ = new T(0, 0, 1), T.ForwardRH = new T(0, 0, -1), T
		.ForwardLH = new T(0, 0, 1), T.Up = new T(0, 1, 0), T.NAN = new T(NaN, NaN, NaN);
	class p {
		constructor(e = 1, t = 0, r = 0, i = 0, a = 0, n = 1, s = 0, o = 0, l = 0, _ = 0, h = 1, c = 0, d = 0, u = 0,
			f = 0, m = 1, E = null) {
			var T = this.elements = E || new Float32Array(16);
			T[0] = e, T[1] = t, T[2] = r, T[3] = i, T[4] = a, T[5] = n, T[6] = s, T[7] = o, T[8] = l, T[9] = _, T[
				10] = h, T[11] = c, T[12] = d, T[13] = u, T[14] = f, T[15] = m
		}
		static createRotationX(e, t) {
			var r = t.elements,
				i = Math.sin(e),
				a = Math.cos(e);
			r[1] = r[2] = r[3] = r[4] = r[7] = r[8] = r[11] = r[12] = r[13] = r[14] = 0, r[0] = r[15] = 1, r[5] = r[
				10] = a, r[6] = i, r[9] = -i
		}
		static createRotationY(e, t) {
			var r = t.elements,
				i = Math.sin(e),
				a = Math.cos(e);
			r[1] = r[3] = r[4] = r[6] = r[7] = r[9] = r[11] = r[12] = r[13] = r[14] = 0, r[5] = r[15] = 1, r[0] = r[
				10] = a, r[2] = -i, r[8] = i
		}
		static createRotationZ(e, t) {
			var r = t.elements,
				i = Math.sin(e),
				a = Math.cos(e);
			r[2] = r[3] = r[6] = r[7] = r[8] = r[9] = r[11] = r[12] = r[13] = r[14] = 0, r[10] = r[15] = 1, r[0] =
				r[5] = a, r[1] = i, r[4] = -i
		}
		static createRotationYawPitchRoll(e, t, r, i) {
			u.createFromYawPitchRoll(e, t, r, p._tempQuaternion), p.createRotationQuaternion(p._tempQuaternion, i)
		}
		static createRotationAxis(e, t, r) {
			var i = e.x,
				a = e.y,
				n = e.z,
				s = Math.cos(t),
				o = Math.sin(t),
				l = i * i,
				_ = a * a,
				h = n * n,
				c = i * a,
				d = i * n,
				u = a * n,
				f = r.elements;
			f[3] = f[7] = f[11] = f[12] = f[13] = f[14] = 0, f[15] = 1, f[0] = l + s * (1 - l), f[1] = c - s * c +
				o * n, f[2] = d - s * d - o * a, f[4] = c - s * c - o * n, f[5] = _ + s * (1 - _), f[6] = u - s *
				u + o * i, f[8] = d - s * d + o * a, f[9] = u - s * u - o * i, f[10] = h + s * (1 - h)
		}
		setRotation(e) {
			var t = e.x,
				r = e.y,
				i = e.z,
				a = e.w,
				n = t * t,
				s = r * r,
				o = i * i,
				l = t * r,
				_ = i * a,
				h = i * t,
				c = r * a,
				d = r * i,
				u = t * a,
				f = this.elements;
			f[0] = 1 - 2 * (s + o), f[1] = 2 * (l + _), f[2] = 2 * (h - c), f[4] = 2 * (l - _), f[5] = 1 - 2 * (o +
				n), f[6] = 2 * (d + u), f[8] = 2 * (h + c), f[9] = 2 * (d - u), f[10] = 1 - 2 * (s + n)
		}
		setPosition(e) {
			var t = this.elements;
			t[12] = e.x, t[13] = e.y, t[14] = e.z
		}
		static createRotationQuaternion(e, t) {
			var r = t.elements,
				i = e.x,
				a = e.y,
				n = e.z,
				s = e.w,
				o = i * i,
				l = a * a,
				_ = n * n,
				h = i * a,
				c = n * s,
				d = n * i,
				u = a * s,
				f = a * n,
				m = i * s;
			r[3] = r[7] = r[11] = r[12] = r[13] = r[14] = 0, r[15] = 1, r[0] = 1 - 2 * (l + _), r[1] = 2 * (h + c),
				r[2] = 2 * (d - u), r[4] = 2 * (h - c), r[5] = 1 - 2 * (_ + o), r[6] = 2 * (f + m), r[8] = 2 * (d +
					u), r[9] = 2 * (f - m), r[10] = 1 - 2 * (l + o)
		}
		static createTranslate(e, t) {
			var r = t.elements;
			r[4] = r[8] = r[1] = r[9] = r[2] = r[6] = r[3] = r[7] = r[11] = 0, r[0] = r[5] = r[10] = r[15] = 1, r[
				12] = e.x, r[13] = e.y, r[14] = e.z
		}
		static createScaling(e, t) {
			var r = t.elements;
			r[0] = e.x, r[5] = e.y, r[10] = e.z, r[1] = r[4] = r[8] = r[12] = r[9] = r[13] = r[2] = r[6] = r[14] =
				r[3] = r[7] = r[11] = 0, r[15] = 1
		}
		static multiply(e, t, r) {
			var i = t.elements,
				a = e.elements,
				n = r.elements,
				s = i[0],
				o = i[1],
				l = i[2],
				_ = i[3],
				h = i[4],
				c = i[5],
				d = i[6],
				u = i[7],
				f = i[8],
				m = i[9],
				E = i[10],
				T = i[11],
				p = i[12],
				g = i[13],
				S = i[14],
				v = i[15],
				R = a[0],
				I = a[1],
				x = a[2],
				A = a[3],
				D = a[4],
				M = a[5],
				L = a[6],
				C = a[7],
				y = a[8],
				O = a[9],
				N = a[10],
				P = a[11],
				w = a[12],
				V = a[13],
				b = a[14],
				F = a[15];
			n[0] = s * R + o * D + l * y + _ * w, n[1] = s * I + o * M + l * O + _ * V, n[2] = s * x + o * L + l *
				N + _ * b, n[3] = s * A + o * C + l * P + _ * F, n[4] = h * R + c * D + d * y + u * w, n[5] = h *
				I + c * M + d * O + u * V, n[6] = h * x + c * L + d * N + u * b, n[7] = h * A + c * C + d * P + u *
				F, n[8] = f * R + m * D + E * y + T * w, n[9] = f * I + m * M + E * O + T * V, n[10] = f * x + m *
				L + E * N + T * b, n[11] = f * A + m * C + E * P + T * F, n[12] = p * R + g * D + S * y + v * w, n[
					13] = p * I + g * M + S * O + v * V, n[14] = p * x + g * L + S * N + v * b, n[15] = p * A + g *
				C + S * P + v * F
		}
		static multiplyForNative(e, r, i) {
			t.LayaGL.instance.matrix4x4Multiply(e.elements, r.elements, i.elements)
		}
		static createFromQuaternion(e, t) {
			var r = t.elements,
				i = e.x,
				a = e.y,
				n = e.z,
				s = e.w,
				o = i + i,
				l = a + a,
				_ = n + n,
				h = i * o,
				c = a * o,
				d = a * l,
				u = n * o,
				f = n * l,
				m = n * _,
				E = s * o,
				T = s * l,
				p = s * _;
			r[0] = 1 - d - m, r[1] = c + p, r[2] = u - T, r[3] = 0, r[4] = c - p, r[5] = 1 - h - m, r[6] = f + E, r[
					7] = 0, r[8] = u + T, r[9] = f - E, r[10] = 1 - h - d, r[11] = 0, r[12] = 0, r[13] = 0, r[14] =
				0, r[15] = 1
		}
		static createAffineTransformation(e, t, r, i) {
			var a = i.elements,
				n = t.x,
				s = t.y,
				o = t.z,
				l = t.w,
				_ = n + n,
				h = s + s,
				c = o + o,
				d = n * _,
				u = n * h,
				f = n * c,
				m = s * h,
				E = s * c,
				T = o * c,
				p = l * _,
				g = l * h,
				S = l * c,
				v = r.x,
				R = r.y,
				I = r.z;
			a[0] = (1 - (m + T)) * v, a[1] = (u + S) * v, a[2] = (f - g) * v, a[3] = 0, a[4] = (u - S) * R, a[5] = (
					1 - (d + T)) * R, a[6] = (E + p) * R, a[7] = 0, a[8] = (f + g) * I, a[9] = (E - p) * I, a[10] =
				(1 - (d + m)) * I, a[11] = 0, a[12] = e.x, a[13] = e.y, a[14] = e.z, a[15] = 1
		}
		static createLookAt(e, t, r, i) {
			var a = i.elements,
				s = p._tempVector0,
				o = p._tempVector1,
				l = p._tempVector2;
			n.subtract(e, t, l), n.normalize(l, l), n.cross(r, l, s), n.normalize(s, s), n.cross(l, s, o), i
				.identity(), a[0] = s.x, a[4] = s.y, a[8] = s.z, a[1] = o.x, a[5] = o.y, a[9] = o.z, a[2] = l.x, a[
					6] = l.y, a[10] = l.z, a[12] = -n.dot(s, e), a[13] = -n.dot(o, e), a[14] = -n.dot(l, e)
		}
		static createPerspective(e, t, r, i, a) {
			var n = 1 / Math.tan(.5 * e),
				s = r / (n / t),
				o = r / n;
			p.createPerspectiveOffCenter(-s, s, -o, o, r, i, a)
		}
		static createPerspectiveOffCenter(e, t, r, i, a, n, s) {
			var o = s.elements,
				l = n / (n - a);
			o[1] = o[2] = o[3] = o[4] = o[6] = o[7] = o[12] = o[13] = o[15] = 0, o[0] = 2 * a / (t - e), o[5] = 2 *
				a / (i - r), o[8] = (e + t) / (t - e), o[9] = (i + r) / (i - r), o[10] = -l, o[11] = -1, o[14] = -
				a * l
		}
		static createOrthoOffCenter(e, t, r, i, a, n, s) {
			var o = s.elements,
				l = 1 / (n - a);
			o[1] = o[2] = o[3] = o[4] = o[6] = o[8] = o[7] = o[9] = o[11] = 0, o[15] = 1, o[0] = 2 / (t - e), o[5] =
				2 / (i - r), o[10] = -l, o[12] = (e + t) / (e - t), o[13] = (i + r) / (r - i), o[14] = -a * l
		}
		getElementByRowColumn(e, t) {
			if (e < 0 || e > 3) throw new Error("row Rows and columns for matrices run from 0 to 3, inclusive.");
			if (t < 0 || t > 3) throw new Error("column Rows and columns for matrices run from 0 to 3, inclusive.");
			return this.elements[4 * e + t]
		}
		setElementByRowColumn(e, t, r) {
			if (e < 0 || e > 3) throw new Error("row Rows and columns for matrices run from 0 to 3, inclusive.");
			if (t < 0 || t > 3) throw new Error("column Rows and columns for matrices run from 0 to 3, inclusive.");
			this.elements[4 * e + t] = r
		}
		equalsOtherMatrix(e) {
			var t = this.elements,
				i = e.elements;
			return r.nearEqual(t[0], i[0]) && r.nearEqual(t[1], i[1]) && r.nearEqual(t[2], i[2]) && r.nearEqual(t[
					3], i[3]) && r.nearEqual(t[4], i[4]) && r.nearEqual(t[5], i[5]) && r.nearEqual(t[6], i[6]) && r
				.nearEqual(t[7], i[7]) && r.nearEqual(t[8], i[8]) && r.nearEqual(t[9], i[9]) && r.nearEqual(t[10],
					i[10]) && r.nearEqual(t[11], i[11]) && r.nearEqual(t[12], i[12]) && r.nearEqual(t[13], i[13]) &&
				r.nearEqual(t[14], i[14]) && r.nearEqual(t[15], i[15])
		}
		decomposeTransRotScale(e, t, r) {
			var i = p._tempMatrix4x4;
			return this.decomposeTransRotMatScale(e, i, r) ? (u.createFromMatrix4x4(i, t), !0) : (t.identity(), !1)
		}
		decomposeTransRotMatScale(e, t, i) {
			var a = this.elements,
				s = e,
				o = t.elements,
				l = i;
			s.x = a[12], s.y = a[13], s.z = a[14];
			var _ = a[0],
				h = a[1],
				c = a[2],
				d = a[4],
				u = a[5],
				f = a[6],
				m = a[8],
				E = a[9],
				T = a[10],
				g = l.x = Math.sqrt(_ * _ + h * h + c * c),
				S = l.y = Math.sqrt(d * d + u * u + f * f),
				v = l.z = Math.sqrt(m * m + E * E + T * T);
			if (r.isZero(g) || r.isZero(S) || r.isZero(v)) return o[1] = o[2] = o[3] = o[4] = o[6] = o[7] = o[8] =
				o[9] = o[11] = o[12] = o[13] = o[14] = 0, o[0] = o[5] = o[10] = o[15] = 1, !1;
			var R = p._tempVector0;
			R.x = m / v, R.y = E / v, R.z = T / v;
			var I = p._tempVector1;
			I.x = _ / g, I.y = h / g, I.z = c / g;
			var x = p._tempVector2;
			n.cross(R, I, x);
			var A = p._tempVector1;
			return n.cross(x, R, A), o[3] = o[7] = o[11] = o[12] = o[13] = o[14] = 0, o[15] = 1, o[0] = A.x, o[1] =
				A.y, o[2] = A.z, o[4] = x.x, o[5] = x.y, o[6] = x.z, o[8] = R.x, o[9] = R.y, o[10] = R.z, o[0] * _ +
				o[1] * h + o[2] * c < 0 && (l.x = -g), o[4] * d + o[5] * u + o[6] * f < 0 && (l.y = -S), o[8] * m +
				o[9] * E + o[10] * T < 0 && (l.z = -v), !0
		}
		decomposeYawPitchRoll(e) {
			var t = Math.asin(-this.elements[9]);
			e.y = t, Math.cos(t) > r.zeroTolerance ? (e.z = Math.atan2(this.elements[1], this.elements[5]), e.x =
				Math.atan2(this.elements[8], this.elements[10])) : (e.z = Math.atan2(-this.elements[4], this
				.elements[0]), e.x = 0)
		}
		normalize() {
			var e = this.elements,
				t = e[0],
				r = e[1],
				i = e[2],
				a = Math.sqrt(t * t + r * r + i * i);
			if (!a) return e[0] = 0, e[1] = 0, void(e[2] = 0);
			1 != a && (a = 1 / a, e[0] = t * a, e[1] = r * a, e[2] = i * a)
		}
		transpose() {
			var e, t;
			return t = (e = this.elements)[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[3], e[
					3] = e[12], e[12] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[7], e[7] = e[13], e[13] = t, t =
				e[11], e[11] = e[14], e[14] = t, this
		}
		invert(e) {
			var t = this.elements,
				r = e.elements,
				i = t[0],
				a = t[1],
				n = t[2],
				s = t[3],
				o = t[4],
				l = t[5],
				_ = t[6],
				h = t[7],
				c = t[8],
				d = t[9],
				u = t[10],
				f = t[11],
				m = t[12],
				E = t[13],
				T = t[14],
				p = t[15],
				g = i * l - a * o,
				S = i * _ - n * o,
				v = i * h - s * o,
				R = a * _ - n * l,
				I = a * h - s * l,
				x = n * h - s * _,
				A = c * E - d * m,
				D = c * T - u * m,
				M = c * p - f * m,
				L = d * T - u * E,
				C = d * p - f * E,
				y = u * p - f * T,
				O = g * y - S * C + v * L + R * M - I * D + x * A;
			0 !== Math.abs(O) && (O = 1 / O, r[0] = (l * y - _ * C + h * L) * O, r[1] = (n * C - a * y - s * L) * O,
				r[2] = (E * x - T * I + p * R) * O, r[3] = (u * I - d * x - f * R) * O, r[4] = (_ * M - o * y -
					h * D) * O, r[5] = (i * y - n * M + s * D) * O, r[6] = (T * v - m * x - p * S) * O, r[7] = (
					c * x - u * v + f * S) * O, r[8] = (o * C - l * M + h * A) * O, r[9] = (a * M - i * C - s *
					A) * O, r[10] = (m * I - E * v + p * g) * O, r[11] = (d * v - c * I - f * g) * O, r[12] = (
					l * D - o * L - _ * A) * O, r[13] = (i * L - a * D + n * A) * O, r[14] = (E * S - m * R -
					T * g) * O, r[15] = (c * R - d * S + u * g) * O)
		}
		static billboard(e, t, i, a, s, o) {
			n.subtract(e, t, p._tempVector0);
			var l = n.scalarLengthSquared(p._tempVector0);
			r.isZero(l) ? (n.scale(s, -1, p._tempVector1), p._tempVector1.cloneTo(p._tempVector0)) : n.scale(p
					._tempVector0, 1 / Math.sqrt(l), p._tempVector0), n.cross(a, p._tempVector0, p._tempVector2), n
				.normalize(p._tempVector2, p._tempVector2), n.cross(p._tempVector0, p._tempVector2, p._tempVector3);
			var _ = p._tempVector2,
				h = p._tempVector3,
				c = p._tempVector0,
				d = e,
				u = o.elements;
			u[0] = _.x, u[1] = _.y, u[2] = _.z, u[3] = 0, u[4] = h.x, u[5] = h.y, u[6] = h.z, u[7] = 0, u[8] = c.x,
				u[9] = c.y, u[10] = c.z, u[11] = 0, u[12] = d.x, u[13] = d.y, u[14] = d.z, u[15] = 1
		}
		identity() {
			var e = this.elements;
			e[1] = e[2] = e[3] = e[4] = e[6] = e[7] = e[8] = e[9] = e[11] = e[12] = e[13] = e[14] = 0, e[0] = e[5] =
				e[10] = e[15] = 1
		}
		cloneTo(e) {
			var t, r, i;
			if ((r = this.elements) !== (i = e.elements))
				for (t = 0; t < 16; ++t) i[t] = r[t]
		}
		clone() {
			var e = new p;
			return this.cloneTo(e), e
		}
		static translation(e, t) {
			var r = t.elements;
			r[0] = r[5] = r[10] = r[15] = 1, r[12] = e.x, r[13] = e.y, r[14] = e.z
		}
		getTranslationVector(e) {
			var t = this.elements;
			e.x = t[12], e.y = t[13], e.z = t[14]
		}
		setTranslationVector(e) {
			var t = this.elements,
				r = e;
			t[12] = r.x, t[13] = r.y, t[14] = r.z
		}
		getForward(e) {
			var t = this.elements;
			e.x = -t[8], e.y = -t[9], e.z = -t[10]
		}
		setForward(e) {
			var t = this.elements;
			t[8] = -e.x, t[9] = -e.y, t[10] = -e.z
		}
	}
	p._tempMatrix4x4 = new p, p.TEMPMatrix0 = new p, p.TEMPMatrix1 = new p, p._tempVector0 = new n, p._tempVector1 =
		new n, p._tempVector2 = new n, p._tempVector3 = new n, p._tempQuaternion = new u, p.DEFAULT = new p, p.ZERO =
		new p(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
	class g {
		constructor(e = 0, t = 0, r = 0, i = 1, a = null) {
			var n;
			(n = a || new Float32Array(4))[0] = e, n[1] = t, n[2] = r, n[3] = i, this.elements = n
		}
		static _dotArray(e, t) {
			return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3]
		}
		static _normalizeArray(e, t) {
			var r = e[0],
				i = e[1],
				a = e[2],
				n = e[3],
				s = r * r + i * i + a * a + n * n;
			s > 0 && (s = 1 / Math.sqrt(s), t[0] = r * s, t[1] = i * s, t[2] = a * s, t[3] = n * s)
		}
		static _lerpArray(e, t, r, i) {
			var a = 1 - r;
			g._dotArray(e, t) >= 0 ? (i[0] = a * e[0] + r * t[0], i[1] = a * e[1] + r * t[1], i[2] = a * e[2] + r *
				t[2], i[3] = a * e[3] + r * t[3]) : (i[0] = a * e[0] - r * t[0], i[1] = a * e[1] - r * t[1], i[
				2] = a * e[2] - r * t[2], i[3] = a * e[3] - r * t[3]), g._normalizeArray(i, i)
		}
		static createFromYawPitchRoll(e, t, r, i) {
			var a = .5 * r,
				n = .5 * t,
				s = .5 * e,
				o = Math.sin(a),
				l = Math.cos(a),
				_ = Math.sin(n),
				h = Math.cos(n),
				c = Math.sin(s),
				d = Math.cos(s),
				u = i.elements;
			u[0] = d * _ * l + c * h * o, u[1] = c * h * l - d * _ * o, u[2] = d * h * o - c * _ * l, u[3] = d * h *
				l + c * _ * o
		}
		static multiply(e, t, r) {
			var i = e.elements,
				a = t.elements,
				n = r.elements,
				s = i[0],
				o = i[1],
				l = i[2],
				_ = i[3],
				h = a[0],
				c = a[1],
				d = a[2],
				u = a[3],
				f = o * d - l * c,
				m = l * h - s * d,
				E = s * c - o * h,
				T = s * h + o * c + l * d;
			n[0] = s * u + h * _ + f, n[1] = o * u + c * _ + m, n[2] = l * u + d * _ + E, n[3] = _ * u - T
		}
		static arcTanAngle(e, t) {
			return 0 == e ? 1 == t ? Math.PI / 2 : -Math.PI / 2 : e > 0 ? Math.atan(t / e) : e < 0 ? t > 0 ? Math
				.atan(t / e) + Math.PI : Math.atan(t / e) - Math.PI : 0
		}
		static angleTo(e, t, r) {
			T.subtract(t, e, g.TEMPVector30), T.normalize(g.TEMPVector30, g.TEMPVector30), r.elements[0] = Math
				.asin(g.TEMPVector30.y), r.elements[1] = g.arcTanAngle(-g.TEMPVector30.z, -g.TEMPVector30.x)
		}
		static createFromAxisAngle(e, t, r) {
			var i = r.elements,
				a = e.elements;
			t *= .5;
			var n = Math.sin(t);
			i[0] = n * a[0], i[1] = n * a[1], i[2] = n * a[2], i[3] = Math.cos(t)
		}
		static createFromMatrix3x3(e, t) {
			var r, i = t.elements,
				a = e.elements,
				n = a[0] + a[4] + a[8];
			if (n > 0) r = Math.sqrt(n + 1), i[3] = .5 * r, r = .5 / r, i[0] = (a[5] - a[7]) * r, i[1] = (a[6] - a[
				2]) * r, i[2] = (a[1] - a[3]) * r;
			else {
				var s = 0;
				a[4] > a[0] && (s = 1), a[8] > a[3 * s + s] && (s = 2);
				var o = (s + 1) % 3,
					l = (s + 2) % 3;
				r = Math.sqrt(a[3 * s + s] - a[3 * o + o] - a[3 * l + l] + 1), i[s] = .5 * r, r = .5 / r, i[3] = (a[
					3 * o + l] - a[3 * l + o]) * r, i[o] = (a[3 * o + s] + a[3 * s + o]) * r, i[l] = (a[3 * l +
					s] + a[3 * s + l]) * r
			}
		}
		static createFromMatrix4x4(e, t) {
			var r, i, a = e.elements,
				n = t.elements,
				s = a[0] + a[5] + a[10];
			s > 0 ? (r = Math.sqrt(s + 1), n[3] = .5 * r, r = .5 / r, n[0] = (a[6] - a[9]) * r, n[1] = (a[8] - a[
				2]) * r, n[2] = (a[1] - a[4]) * r) : a[0] >= a[5] && a[0] >= a[10] ? (i = .5 / (r = Math.sqrt(
					1 + a[0] - a[5] - a[10])), n[0] = .5 * r, n[1] = (a[1] + a[4]) * i, n[2] = (a[2] + a[8]) *
				i, n[3] = (a[6] - a[9]) * i) : a[5] > a[10] ? (i = .5 / (r = Math.sqrt(1 + a[5] - a[0] - a[
				10])), n[0] = (a[4] + a[1]) * i, n[1] = .5 * r, n[2] = (a[9] + a[6]) * i, n[3] = (a[8] - a[2]) *
				i) : (i = .5 / (r = Math.sqrt(1 + a[10] - a[0] - a[5])), n[0] = (a[8] + a[2]) * i, n[1] = (a[
				9] + a[6]) * i, n[2] = .5 * r, n[3] = (a[1] - a[4]) * i)
		}
		static slerp(e, t, r, i) {
			var a, n, s, o, l, _ = e.elements,
				h = t.elements,
				c = i.elements,
				d = _[0],
				u = _[1],
				f = _[2],
				m = _[3],
				E = h[0],
				T = h[1],
				p = h[2],
				g = h[3];
			return (n = d * E + u * T + f * p + m * g) < 0 && (n = -n, E = -E, T = -T, p = -p, g = -g), 1 - n >
				1e-6 ? (a = Math.acos(n), s = Math.sin(a), o = Math.sin((1 - r) * a) / s, l = Math.sin(r * a) / s) :
				(o = 1 - r, l = r), c[0] = o * d + l * E, c[1] = o * u + l * T, c[2] = o * f + l * p, c[3] = o * m +
				l * g, c
		}
		static lerp(e, t, r, i) {
			g._lerpArray(e.elements, t.elements, r, i.elements)
		}
		static add(e, t, r) {
			var i = r.elements,
				a = e.elements,
				n = t.elements;
			i[0] = a[0] + n[0], i[1] = a[1] + n[1], i[2] = a[2] + n[2], i[3] = a[3] + n[3]
		}
		static dot(e, t) {
			return g._dotArray(e.elements, t.elements)
		}
		get x() {
			return this.elements[0]
		}
		set x(e) {
			this.elements[0] = e
		}
		get y() {
			return this.elements[1]
		}
		set y(e) {
			this.elements[1] = e
		}
		get z() {
			return this.elements[2]
		}
		set z(e) {
			this.elements[2] = e
		}
		get w() {
			return this.elements[3]
		}
		set w(e) {
			this.elements[3] = e
		}
		scaling(e, t) {
			var r = t.elements,
				i = this.elements;
			r[0] = i[0] * e, r[1] = i[1] * e, r[2] = i[2] * e, r[3] = i[3] * e
		}
		normalize(e) {
			g._normalizeArray(this.elements, e.elements)
		}
		length() {
			var e = this.elements,
				t = e[0],
				r = e[1],
				i = e[2],
				a = e[3];
			return Math.sqrt(t * t + r * r + i * i + a * a)
		}
		rotateX(e, t) {
			var r = t.elements,
				i = this.elements;
			e *= .5;
			var a = i[0],
				n = i[1],
				s = i[2],
				o = i[3],
				l = Math.sin(e),
				_ = Math.cos(e);
			r[0] = a * _ + o * l, r[1] = n * _ + s * l, r[2] = s * _ - n * l, r[3] = o * _ - a * l
		}
		rotateY(e, t) {
			var r = t.elements,
				i = this.elements;
			e *= .5;
			var a = i[0],
				n = i[1],
				s = i[2],
				o = i[3],
				l = Math.sin(e),
				_ = Math.cos(e);
			r[0] = a * _ - s * l, r[1] = n * _ + o * l, r[2] = s * _ + a * l, r[3] = o * _ - n * l
		}
		rotateZ(e, t) {
			var r = t.elements,
				i = this.elements;
			e *= .5;
			var a = i[0],
				n = i[1],
				s = i[2],
				o = i[3],
				l = Math.sin(e),
				_ = Math.cos(e);
			r[0] = a * _ + n * l, r[1] = n * _ - a * l, r[2] = s * _ + o * l, r[3] = o * _ - s * l
		}
		getYawPitchRoll(e) {
			T.transformQuat(T.ForwardRH, this, g.TEMPVector31), T.transformQuat(T.Up, this, g.TEMPVector32);
			var t = g.TEMPVector32.elements;
			g.angleTo(T.ZERO, g.TEMPVector31, g.TEMPVector33);
			var r = g.TEMPVector33.elements;
			r[0] == Math.PI / 2 ? (r[1] = g.arcTanAngle(t[2], t[0]), r[2] = 0) : r[0] == -Math.PI / 2 ? (r[1] = g
				.arcTanAngle(-t[2], -t[0]), r[2] = 0) : (p.createRotationY(-r[1], g.TEMPMatrix0), p
				.createRotationX(-r[0], g.TEMPMatrix1), T.transformCoordinate(g.TEMPVector32, g.TEMPMatrix0, g
					.TEMPVector32), T.transformCoordinate(g.TEMPVector32, g.TEMPMatrix1, g.TEMPVector32), r[2] =
				g.arcTanAngle(t[1], -t[0])), r[1] <= -Math.PI && (r[1] = Math.PI), r[2] <= -Math.PI && (r[2] =
				Math.PI), r[1] >= Math.PI && r[2] >= Math.PI && (r[1] = 0, r[2] = 0, r[0] = Math.PI - r[0]);
			var i = e.elements;
			i[0] = r[1], i[1] = r[0], i[2] = r[2]
		}
		invert(e) {
			var t = e.elements,
				r = this.elements,
				i = r[0],
				a = r[1],
				n = r[2],
				s = r[3],
				o = i * i + a * a + n * n + s * s,
				l = o ? 1 / o : 0;
			t[0] = -i * l, t[1] = -a * l, t[2] = -n * l, t[3] = s * l
		}
		identity() {
			var e = this.elements;
			e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 1
		}
		fromArray(e, t = 0) {
			this.elements[0] = e[t + 0], this.elements[1] = e[t + 1], this.elements[2] = e[t + 2], this.elements[
				3] = e[t + 3]
		}
		cloneTo(e) {
			var t, r, i;
			if ((r = this.elements) !== (i = e.elements))
				for (t = 0; t < 4; ++t) i[t] = r[t]
		}
		clone() {
			var e = new g;
			return this.cloneTo(e), e
		}
		equals(e) {
			var t = this.elements,
				i = e.elements;
			return r.nearEqual(t[0], i[0]) && r.nearEqual(t[1], i[1]) && r.nearEqual(t[2], i[2]) && r.nearEqual(t[
				3], i[3])
		}
		static rotationLookAt(e, t, r) {
			g.lookAt(T.ZERO, e, t, r)
		}
		static lookAt(e, t, r, i) {
			d.lookAt(e, t, r, g._tempMatrix3x3), g.rotationMatrix(g._tempMatrix3x3, i)
		}
		lengthSquared() {
			var e = this.elements[0],
				t = this.elements[1],
				r = this.elements[2],
				i = this.elements[3];
			return e * e + t * t + r * r + i * i
		}
		static invert(e, t) {
			var i = e.elements,
				a = t.elements,
				n = e.lengthSquared();
			r.isZero(n) || (n = 1 / n, a[0] = -i[0] * n, a[1] = -i[1] * n, a[2] = -i[2] * n, a[3] = i[3] * n)
		}
		static rotationMatrix(e, t) {
			var r, i, a = e.elements,
				n = a[0],
				s = a[1],
				o = a[2],
				l = a[3],
				_ = a[4],
				h = a[5],
				c = a[6],
				d = a[7],
				u = a[8],
				f = t.elements,
				m = n + _ + u;
			m > 0 ? (r = Math.sqrt(m + 1), f[3] = .5 * r, r = .5 / r, f[0] = (h - d) * r, f[1] = (c - o) * r, f[2] =
				(s - l) * r) : n >= _ && n >= u ? (i = .5 / (r = Math.sqrt(1 + n - _ - u)), f[0] = .5 * r, f[
				1] = (s + l) * i, f[2] = (o + c) * i, f[3] = (h - d) * i) : _ > u ? (i = .5 / (r = Math.sqrt(1 +
				_ - n - u)), f[0] = (l + s) * i, f[1] = .5 * r, f[2] = (d + h) * i, f[3] = (c - o) * i) : (i =
				.5 / (r = Math.sqrt(1 + u - n - _)), f[0] = (c + o) * i, f[1] = (d + h) * i, f[2] = .5 * r, f[
				3] = (s - l) * i)
		}
	}
	g.TEMPVector30 = new T, g.TEMPVector31 = new T, g.TEMPVector32 = new T, g.TEMPVector33 = new T, g.TEMPMatrix0 =
		new p, g.TEMPMatrix1 = new p, g._tempMatrix3x3 = new d, g.DEFAULT = new g, g.NAN = new g(NaN, NaN, NaN, NaN);
	class S {
		static READ_DATA() {
			S._DATA.offset = S._reader.getUint32(), S._DATA.size = S._reader.getUint32()
		}
		static READ_BLOCK() {
			for (var e = S._BLOCK.count = S._reader.getUint16(), t = S._BLOCK.blockStarts = [], r = S._BLOCK
					.blockLengths = [], i = 0; i < e; i++) t.push(S._reader.getUint32()), r.push(S._reader
				.getUint32())
		}
		static READ_STRINGS() {
			var e = S._reader.getUint32(),
				t = S._reader.getUint16(),
				r = S._reader.pos;
			S._reader.pos = e + S._DATA.offset;
			for (var i = 0; i < t; i++) S._strings[i] = S._reader.readUTFString();
			S._reader.pos = r
		}
		static parse(e, t) {
			S._animationClip = e, S._reader = t;
			t.__getBuffer();
			S.READ_DATA(), S.READ_BLOCK(), S.READ_STRINGS();
			for (var r = 0, i = S._BLOCK.count; r < i; r++) {
				var a = t.getUint16(),
					n = S._strings[a],
					s = S["READ_" + n];
				if (null == s) throw new Error("model file err,no this function:" + a + " " + n);
				s.call(null)
			}
		}
		static READ_ANIMATIONS() {
			var e, r, i, a = S._reader,
				s = (a.__getBuffer(), []),
				o = a.getUint16();
			for (s.length = o, e = 0; e < o; e++) s[e] = a.getFloat32();
			var h = S._animationClip;
			h.name = S._strings[a.getUint16()];
			var d = h._duration = a.getFloat32();
			h.islooping = !!a.getByte(), h._frameRate = a.getInt16();
			var E = a.getInt16(),
				p = h._nodes;
			p.count = E;
			var v = h._nodesMap = {},
				R = h._nodesDic = {};
			for (e = 0; e < E; e++) {
				i = new l, p.setNodeByIndex(e, i), i._indexInList = e;
				var I = i.type = a.getUint8(),
					x = a.getUint16();
				for (i._setOwnerPathCount(x), r = 0; r < x; r++) i._setOwnerPathByIndex(r, S._strings[a
				.getUint16()]);
				var A = i._joinOwnerPath("/"),
					D = v[A];
				D || (v[A] = D = []), D.push(i), i.propertyOwner = S._strings[a.getUint16()];
				var M = a.getUint16();
				for (i._setPropertyCount(M), r = 0; r < M; r++) i._setPropertyByIndex(r, S._strings[a.getUint16()]);
				var L = A + "." + i.propertyOwner + "." + i._joinProperty(".");
				R[L] = i, i.fullPath = L;
				var C = a.getUint16();
				switch (i._setKeyframeCount(C), I) {
					case 0:
						break;
					case 1:
					case 3:
					case 4:
						i.data = t.Render.supportWebGLPlusAnimation ? new T : new n;
						break;
					case 2:
						i.data = t.Render.supportWebGLPlusAnimation ? new g : new u;
						break;
					default:
						throw "AnimationClipParser03:unknown type."
				}
				for (r = 0; r < C; r++) switch (I) {
					case 0:
						var y = new c;
						i._setKeyframeByIndex(r, y), y.time = s[a.getUint16()], y.inTangent = a.getFloat32(), y
							.outTangent = a.getFloat32(), y.value = a.getFloat32();
						break;
					case 1:
					case 3:
					case 4:
						var O = new m;
						if (i._setKeyframeByIndex(r, O), O.time = s[a.getUint16()], t.Render
							.supportWebGLPlusAnimation) {
							for (var N = O.data = new Float32Array(9), P = 0; P < 3; P++) N[P] = a.getFloat32();
							for (P = 0; P < 3; P++) N[3 + P] = a.getFloat32();
							for (P = 0; P < 3; P++) N[6 + P] = a.getFloat32()
						} else {
							var w = O.inTangent,
								V = O.outTangent,
								b = O.value;
							w.x = a.getFloat32(), w.y = a.getFloat32(), w.z = a.getFloat32(), V.x = a
								.getFloat32(), V.y = a.getFloat32(), V.z = a.getFloat32(), b.x = a.getFloat32(),
								b.y = a.getFloat32(), b.z = a.getFloat32()
						}
						break;
					case 2:
						var F = new f;
						if (i._setKeyframeByIndex(r, F), F.time = s[a.getUint16()], t.Render
							.supportWebGLPlusAnimation) {
							for (N = F.data = new Float32Array(12), P = 0; P < 4; P++) N[P] = a.getFloat32();
							for (P = 0; P < 4; P++) N[4 + P] = a.getFloat32();
							for (P = 0; P < 4; P++) N[8 + P] = a.getFloat32()
						} else {
							var B = F.inTangent,
								U = F.outTangent,
								G = F.value;
							B.x = a.getFloat32(), B.y = a.getFloat32(), B.z = a.getFloat32(), B.w = a
								.getFloat32(), U.x = a.getFloat32(), U.y = a.getFloat32(), U.z = a.getFloat32(),
								U.w = a.getFloat32(), G.x = a.getFloat32(), G.y = a.getFloat32(), G.z = a
								.getFloat32(), G.w = a.getFloat32()
						}
						break;
					default:
						throw "AnimationClipParser03:unknown type."
				}
			}
			var z = a.getUint16();
			for (e = 0; e < z; e++) {
				var H, W = new _;
				W.time = Math.min(d, a.getFloat32()), W.eventName = S._strings[a.getUint16()];
				var k = a.getUint16();
				for (k > 0 && (W.params = H = []), r = 0; r < k; r++) {
					switch (a.getByte()) {
						case 0:
							H.push(!!a.getByte());
							break;
						case 1:
							H.push(a.getInt32());
							break;
						case 2:
							H.push(a.getFloat32());
							break;
						case 3:
							H.push(S._strings[a.getUint16()]);
							break;
						default:
							throw new Error("unknown type.")
					}
				}
				h.addEvent(W)
			}
		}
	}
	S._strings = [], S._BLOCK = {
		count: 0
	}, S._DATA = {
		offset: 0,
		size: 0
	};
	class v {
		static __init__() {
			for (var e = 0; e < 256; ++e) {
				var t = e - 127;
				t < -27 ? (v._baseTable[0 | e] = 0, v._baseTable[256 | e] = 32768, v._shiftTable[0 | e] = 24, v
					._shiftTable[256 | e] = 24) : t < -14 ? (v._baseTable[0 | e] = 1024 >> -t - 14, v
					._baseTable[256 | e] = 1024 >> -t - 14 | 32768, v._shiftTable[0 | e] = -t - 1, v
					._shiftTable[256 | e] = -t - 1) : t <= 15 ? (v._baseTable[0 | e] = t + 15 << 10, v
					._baseTable[256 | e] = t + 15 << 10 | 32768, v._shiftTable[0 | e] = 13, v._shiftTable[256 |
						e] = 13) : t < 128 ? (v._baseTable[0 | e] = 31744, v._baseTable[256 | e] = 64512, v
					._shiftTable[0 | e] = 24, v._shiftTable[256 | e] = 24) : (v._baseTable[0 | e] = 31744, v
					._baseTable[256 | e] = 64512, v._shiftTable[0 | e] = 13, v._shiftTable[256 | e] = 13)
			}
			for (v._mantissaTable[0] = 0, e = 1; e < 1024; ++e) {
				var r = e << 13;
				for (t = 0; 0 == (8388608 & r);) t -= 8388608, r <<= 1;
				r &= -8388609, t += 947912704, v._mantissaTable[e] = r | t
			}
			for (e = 1024; e < 2048; ++e) v._mantissaTable[e] = 939524096 + (e - 1024 << 13);
			for (v._exponentTable[0] = 0, e = 1; e < 31; ++e) v._exponentTable[e] = e << 23;
			for (v._exponentTable[31] = 1199570944, v._exponentTable[32] = 2147483648, e = 33; e < 63; ++e) v
				._exponentTable[e] = 2147483648 + (e - 32 << 23);
			for (v._exponentTable[63] = 3347054592, v._offsetTable[0] = 0, e = 1; e < 64; ++e) v._offsetTable[e] =
				32 === e ? 0 : 1024
		}
		static roundToFloat16Bits(e) {
			v._floatView[0] = e;
			var t = v._uint32View[0],
				r = t >> 23 & 511;
			return v._baseTable[r] + ((8388607 & t) >> v._shiftTable[r])
		}
		static convertToNumber(e) {
			var t = e >> 10;
			return v._uint32View[0] = v._mantissaTable[v._offsetTable[t] + (1023 & e)] + v._exponentTable[t], v
				._floatView[0]
		}
	}
	v._buffer = new ArrayBuffer(4), v._floatView = new Float32Array(v._buffer), v._uint32View = new Uint32Array(v
			._buffer), v._baseTable = new Uint32Array(512), v._shiftTable = new Uint32Array(512), v._mantissaTable =
		new Uint32Array(2048), v._exponentTable = new Uint32Array(64), v._offsetTable = new Uint32Array(64);
	class R {
		static READ_DATA() {
			R._DATA.offset = R._reader.getUint32(), R._DATA.size = R._reader.getUint32()
		}
		static READ_BLOCK() {
			for (var e = R._BLOCK.count = R._reader.getUint16(), t = R._BLOCK.blockStarts = [], r = R._BLOCK
					.blockLengths = [], i = 0; i < e; i++) t.push(R._reader.getUint32()), r.push(R._reader
				.getUint32())
		}
		static READ_STRINGS() {
			var e = R._reader.getUint32(),
				t = R._reader.getUint16(),
				r = R._reader.pos;
			R._reader.pos = e + R._DATA.offset;
			for (var i = 0; i < t; i++) R._strings[i] = R._reader.readUTFString();
			R._reader.pos = r
		}
		static parse(e, t, r) {
			R._animationClip = e, R._reader = t, R._version = r, R.READ_DATA(), R.READ_BLOCK(), R.READ_STRINGS();
			for (var i = 0, a = R._BLOCK.count; i < a; i++) {
				var n = t.getUint16(),
					s = R._strings[n],
					o = R["READ_" + s];
				if (null == o) throw new Error("model file err,no this function:" + n + " " + s);
				o.call(null)
			}
			R._version = null, R._reader = null, R._animationClip = null
		}
		static READ_ANIMATIONS() {
			var e, r, i, a = R._reader,
				s = (a.__getBuffer(), []),
				o = a.getUint16();
			for (s.length = o, e = 0; e < o; e++) s[e] = a.getFloat32();
			var h = R._animationClip;
			h.name = R._strings[a.getUint16()];
			var d = h._duration = a.getFloat32();
			h.islooping = !!a.getByte(), h._frameRate = a.getInt16();
			var E = a.getInt16(),
				p = h._nodes;
			p.count = E;
			var S = h._nodesMap = {},
				I = h._nodesDic = {};
			for (e = 0; e < E; e++) {
				i = new l, p.setNodeByIndex(e, i), i._indexInList = e;
				var x = i.type = a.getUint8(),
					A = a.getUint16();
				for (i._setOwnerPathCount(A), r = 0; r < A; r++) i._setOwnerPathByIndex(r, R._strings[a
				.getUint16()]);
				var D = i._joinOwnerPath("/"),
					M = S[D];
				M || (S[D] = M = []), M.push(i), i.propertyOwner = R._strings[a.getUint16()];
				var L = a.getUint16();
				for (i._setPropertyCount(L), r = 0; r < L; r++) i._setPropertyByIndex(r, R._strings[a.getUint16()]);
				var C = D + "." + i.propertyOwner + "." + i._joinProperty(".");
				I[C] = i, i.fullPath = C;
				var y = a.getUint16();
				switch (i._setKeyframeCount(y), x) {
					case 0:
						break;
					case 1:
					case 3:
					case 4:
						i.data = t.Render.supportWebGLPlusAnimation ? new T : new n;
						break;
					case 2:
						i.data = t.Render.supportWebGLPlusAnimation ? new g : new u;
						break;
					default:
						throw "AnimationClipParser04:unknown type."
				}
				switch (R._version) {
					case "LAYAANIMATION:04":
						for (r = 0; r < y; r++) switch (x) {
							case 0:
								var O = new c;
								i._setKeyframeByIndex(r, O), O.time = s[a.getUint16()], O.inTangent = a
									.getFloat32(), O.outTangent = a.getFloat32(), O.value = a.getFloat32();
								break;
							case 1:
							case 3:
							case 4:
								var N = new m;
								if (i._setKeyframeByIndex(r, N), N.time = s[a.getUint16()], t.Render
									.supportWebGLPlusAnimation) {
									for (var P = N.data = new Float32Array(9), w = 0; w < 3; w++) P[w] = a
										.getFloat32();
									for (w = 0; w < 3; w++) P[3 + w] = a.getFloat32();
									for (w = 0; w < 3; w++) P[6 + w] = a.getFloat32()
								} else {
									var V = N.inTangent,
										b = N.outTangent,
										F = N.value;
									V.x = a.getFloat32(), V.y = a.getFloat32(), V.z = a.getFloat32(), b.x = a
										.getFloat32(), b.y = a.getFloat32(), b.z = a.getFloat32(), F.x = a
										.getFloat32(), F.y = a.getFloat32(), F.z = a.getFloat32()
								}
								break;
							case 2:
								var B = new f;
								if (i._setKeyframeByIndex(r, B), B.time = s[a.getUint16()], t.Render
									.supportWebGLPlusAnimation) {
									for (P = B.data = new Float32Array(12), w = 0; w < 4; w++) P[w] = a
										.getFloat32();
									for (w = 0; w < 4; w++) P[4 + w] = a.getFloat32();
									for (w = 0; w < 4; w++) P[8 + w] = a.getFloat32()
								} else {
									var U = B.inTangent,
										G = B.outTangent,
										z = B.value;
									U.x = a.getFloat32(), U.y = a.getFloat32(), U.z = a.getFloat32(), U.w = a
										.getFloat32(), G.x = a.getFloat32(), G.y = a.getFloat32(), G.z = a
										.getFloat32(), G.w = a.getFloat32(), z.x = a.getFloat32(), z.y = a
										.getFloat32(), z.z = a.getFloat32(), z.w = a.getFloat32()
								}
								break;
							default:
								throw "AnimationClipParser04:unknown type."
						}
						break;
					case "LAYAANIMATION:COMPRESSION_04":
						for (r = 0; r < y; r++) switch (x) {
							case 0:
								O = new c, i._setKeyframeByIndex(r, O), O.time = s[a.getUint16()], O.inTangent =
									v.convertToNumber(a.getUint16()), O.outTangent = v.convertToNumber(a
										.getUint16()), O.value = v.convertToNumber(a.getUint16());
								break;
							case 1:
							case 3:
							case 4:
								if (N = new m, i._setKeyframeByIndex(r, N), N.time = s[a.getUint16()], t.Render
									.supportWebGLPlusAnimation) {
									for (P = N.data = new Float32Array(9), w = 0; w < 3; w++) P[w] = v
										.convertToNumber(a.getUint16());
									for (w = 0; w < 3; w++) P[3 + w] = v.convertToNumber(a.getUint16());
									for (w = 0; w < 3; w++) P[6 + w] = v.convertToNumber(a.getUint16())
								} else V = N.inTangent, b = N.outTangent, F = N.value, V.x = v.convertToNumber(a
										.getUint16()), V.y = v.convertToNumber(a.getUint16()), V.z = v
									.convertToNumber(a.getUint16()), b.x = v.convertToNumber(a.getUint16()), b
									.y = v.convertToNumber(a.getUint16()), b.z = v.convertToNumber(a
									.getUint16()), F.x = v.convertToNumber(a.getUint16()), F.y = v
									.convertToNumber(a.getUint16()), F.z = v.convertToNumber(a.getUint16());
								break;
							case 2:
								if (B = new f, i._setKeyframeByIndex(r, B), B.time = s[a.getUint16()], t.Render
									.supportWebGLPlusAnimation) {
									for (P = B.data = new Float32Array(12), w = 0; w < 4; w++) P[w] = v
										.convertToNumber(a.getUint16());
									for (w = 0; w < 4; w++) P[4 + w] = v.convertToNumber(a.getUint16());
									for (w = 0; w < 4; w++) P[8 + w] = v.convertToNumber(a.getUint16())
								} else U = B.inTangent, G = B.outTangent, z = B.value, U.x = v.convertToNumber(a
										.getUint16()), U.y = v.convertToNumber(a.getUint16()), U.z = v
									.convertToNumber(a.getUint16()), U.w = v.convertToNumber(a.getUint16()), G
									.x = v.convertToNumber(a.getUint16()), G.y = v.convertToNumber(a
									.getUint16()), G.z = v.convertToNumber(a.getUint16()), G.w = v
									.convertToNumber(a.getUint16()), z.x = v.convertToNumber(a.getUint16()), z
									.y = v.convertToNumber(a.getUint16()), z.z = v.convertToNumber(a
									.getUint16()), z.w = v.convertToNumber(a.getUint16());
								break;
							default:
								throw "AnimationClipParser04:unknown type."
						}
				}
			}
			var H = a.getUint16();
			for (e = 0; e < H; e++) {
				var W, k = new _;
				k.time = Math.min(d, a.getFloat32()), k.eventName = R._strings[a.getUint16()];
				var X = a.getUint16();
				for (X > 0 && (k.params = W = []), r = 0; r < X; r++) {
					switch (a.getByte()) {
						case 0:
							W.push(!!a.getByte());
							break;
						case 1:
							W.push(a.getInt32());
							break;
						case 2:
							W.push(a.getFloat32());
							break;
						case 3:
							W.push(R._strings[a.getUint16()]);
							break;
						default:
							throw new Error("unknown type.")
					}
				}
				h.addEvent(k)
			}
		}
	}
	R._strings = [], R._BLOCK = {
		count: 0
	}, R._DATA = {
		offset: 0,
		size: 0
	};
	class I {
		constructor() {
			this._nodes = []
		}
		get count() {
			return this._nodes.length
		}
		set count(e) {
			this._nodes.length = e
		}
		getNodeByIndex(e) {
			return this._nodes[e]
		}
		setNodeByIndex(e, t) {
			this._nodes[e] = t
		}
	}
	window.conch && window.conchKeyframeNodeList && (I = window.conchKeyframeNodeList), window.qq && window.qq
		.webglPlus && (I = window.qq.webglPlus.conchKeyframeNodeList);
	class x {
		constructor() {}
		static lightAttenTexture(e, t, r, i, a, n) {
			var s = e / r,
				o = 1 / (1 + 25 * s);
			s >= .64 && (s > 1 ? o = 0 : o *= 1 - (s - .64) / .36), n[a] = Math.floor(255 * o + .5)
		}
		static haloTexture(e, t, r, i, a, n) {
			var s = (e - (r >>= 1)) / r,
				o = (t - (i >>= 1)) / i,
				l = s * s + o * o;
			l > 1 && (l = 1), n[a] = Math.floor(255 * (1 - l) + .5)
		}
		static _generateTexture2D(e, r, i, a) {
			var n = 0,
				s = 0;
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
					throw "GeneratedTexture._generateTexture: unkonw texture format."
			}
			for (var o = new Uint8Array(r * i * s), l = 0; l < i; l++)
				for (var _ = 0; _ < r; _++) a(_, l, r, i, n, o), n += s;
			e.setPixels(o)
		}
	}
	class A {
		static _createFloatTextureBuffer(e, r) {
			var i = new t.Texture2D(e, r, t.TextureFormat.R32G32B32A32, !1, !1);
			return i.filterMode = t.BaseTexture.FILTERMODE_POINT, i.wrapModeU = t.BaseTexture.WARPMODE_CLAMP, i
				.wrapModeV = t.BaseTexture.WARPMODE_CLAMP, i.anisoLevel = 0, i
		}
		static _convertToLayaVec3(e, t, r) {
			t.x = r ? -e.x() : e.x(), t.y = e.y(), t.z = e.z()
		}
		static _convertToBulletVec3(e, t, r) {
			t.setValue(r ? -e.x : e.x, e.y, e.z)
		}
		static _rotationTransformScaleSkinAnimation(e, t, r, i, a, n, s, o, l, _, h, c) {
			var d, u, f, m, E, T = A._tempArray16_0,
				p = A._tempArray16_1,
				g = A._tempArray16_2,
				S = i + i,
				v = a + a,
				R = n + n,
				I = i * S,
				x = a * S,
				D = a * v,
				M = n * S,
				L = n * v,
				C = n * R,
				y = s * S,
				O = s * v,
				N = s * R;
			for (T[15] = 1, T[0] = 1 - D - C, T[1] = x + N, T[2] = M - O, T[4] = x - N, T[5] = 1 - I - C, T[6] = L +
				y, T[8] = M + O, T[9] = L - y, T[10] = 1 - I - D, p[15] = 1, p[0] = o, p[5] = l, p[10] = _, d =
				0; d < 4; d++) u = T[d], f = T[d + 4], m = T[d + 8], E = T[d + 12], g[d] = u, g[d + 4] = f, g[d +
				8] = m, g[d + 12] = u * e + f * t + m * r + E;
			for (d = 0; d < 4; d++) u = g[d], f = g[d + 4], m = g[d + 8], E = g[d + 12], h[d + c] = u * p[0] + f *
				p[1] + m * p[2] + E * p[3], h[d + c + 4] = u * p[4] + f * p[5] + m * p[6] + E * p[7], h[d + c + 8] =
				u * p[8] + f * p[9] + m * p[10] + E * p[11], h[d + c + 12] = u * p[12] + f * p[13] + m * p[14] + E *
				p[15]
		}
		static _computeBoneAndAnimationDatasByBindPoseMatrxix(e, t, r, i, a, n) {
			var s, o, l = 0,
				_ = 0,
				h = e.length;
			for (s = 0; s < h; l += e[s].keyframeWidth, _ += 16, s++) A._rotationTransformScaleSkinAnimation(t[l +
					0], t[l + 1], t[l + 2], t[l + 3], t[l + 4], t[l + 5], t[l + 6], t[l + 7], t[l + 8], t[l +
				9], i, _), 0 != s && (o = 16 * e[s].parentIndex, A.mulMatrixByArray(i, o, i, _, i, _));
			var c = r.length;
			for (s = 0; s < c; s++) A.mulMatrixByArrayAndMatrixFast(i, 16 * n[s], r[s], a, 16 * s)
		}
		static _computeAnimationDatasByArrayAndMatrixFast(e, t, r, i) {
			for (var a = 0, n = e.length; a < n; a++) A.mulMatrixByArrayAndMatrixFast(t, 16 * i[a], e[a], r, 16 * a)
		}
		static _computeBoneAndAnimationDatasByBindPoseMatrxixOld(e, t, r, i, a) {
			var n, s, o = 0,
				l = 0,
				_ = e.length;
			for (n = 0; n < _; o += e[n].keyframeWidth, l += 16, n++) A._rotationTransformScaleSkinAnimation(t[o +
					7], t[o + 8], t[o + 9], t[o + 3], t[o + 4], t[o + 5], t[o + 6], t[o + 0], t[o + 1], t[o +
				2], i, l), 0 != n && (s = 16 * e[n].parentIndex, A.mulMatrixByArray(i, s, i, l, i, l));
			var h = r.length;
			for (n = 0; n < h; n++) {
				var c = 16 * n;
				A.mulMatrixByArrayAndMatrixFast(i, c, r[n], a, c)
			}
		}
		static _computeAnimationDatasByArrayAndMatrixFastOld(e, t, r) {
			for (var i = e.length, a = 0; a < i; a++) {
				var n = 16 * a;
				A.mulMatrixByArrayAndMatrixFast(t, n, e[a], r, n)
			}
		}
		static _computeRootAnimationData(e, t, r) {
			for (var i = 0, a = 0, n = 0, s = e.length; i < s; a += e[i].keyframeWidth, n += 16, i++) A
				.createAffineTransformationArray(t[a + 0], t[a + 1], t[a + 2], t[a + 3], t[a + 4], t[a + 5], t[a +
					6], t[a + 7], t[a + 8], t[a + 9], r, n)
		}
		static transformVector3ArrayByQuat(e, t, r, i, a) {
			var n = e[t],
				s = e[t + 1],
				o = e[t + 2],
				l = r.x,
				_ = r.y,
				h = r.z,
				c = r.w,
				d = c * n + _ * o - h * s,
				u = c * s + h * n - l * o,
				f = c * o + l * s - _ * n,
				m = -l * n - _ * s - h * o;
			i[a] = d * c + m * -l + u * -h - f * -_, i[a + 1] = u * c + m * -_ + f * -l - d * -h, i[a + 2] = f * c +
				m * -h + d * -_ - u * -l
		}
		static mulMatrixByArray(e, t, r, i, a, n) {
			var s, o, l, _, h;
			if (a === r) {
				for (r = A._tempArray16_3, s = 0; s < 16; ++s) r[s] = a[n + s];
				i = 0
			}
			for (s = 0; s < 4; s++) o = e[t + s], l = e[t + s + 4], _ = e[t + s + 8], h = e[t + s + 12], a[n + s] =
				o * r[i + 0] + l * r[i + 1] + _ * r[i + 2] + h * r[i + 3], a[n + s + 4] = o * r[i + 4] + l * r[i +
					5] + _ * r[i + 6] + h * r[i + 7], a[n + s + 8] = o * r[i + 8] + l * r[i + 9] + _ * r[i + 10] +
				h * r[i + 11], a[n + s + 12] = o * r[i + 12] + l * r[i + 13] + _ * r[i + 14] + h * r[i + 15]
		}
		static mulMatrixByArrayFast(e, t, r, i, a, n) {
			var s, o, l, _, h;
			for (s = 0; s < 4; s++) o = e[t + s], l = e[t + s + 4], _ = e[t + s + 8], h = e[t + s + 12], a[n + s] =
				o * r[i + 0] + l * r[i + 1] + _ * r[i + 2] + h * r[i + 3], a[n + s + 4] = o * r[i + 4] + l * r[i +
					5] + _ * r[i + 6] + h * r[i + 7], a[n + s + 8] = o * r[i + 8] + l * r[i + 9] + _ * r[i + 10] +
				h * r[i + 11], a[n + s + 12] = o * r[i + 12] + l * r[i + 13] + _ * r[i + 14] + h * r[i + 15]
		}
		static mulMatrixByArrayAndMatrixFast(e, t, r, i, a) {
			var n, s, o, l, _, h = r.elements,
				c = h[0],
				d = h[1],
				u = h[2],
				f = h[3],
				m = h[4],
				E = h[5],
				T = h[6],
				p = h[7],
				g = h[8],
				S = h[9],
				v = h[10],
				R = h[11],
				I = h[12],
				x = h[13],
				A = h[14],
				D = h[15],
				M = t,
				L = t + 4,
				C = t + 8,
				y = t + 12,
				O = a,
				N = a + 4,
				P = a + 8,
				w = a + 12;
			for (n = 0; n < 4; n++) s = e[M + n], o = e[L + n], l = e[C + n], _ = e[y + n], i[O + n] = s * c + o *
				d + l * u + _ * f, i[N + n] = s * m + o * E + l * T + _ * p, i[P + n] = s * g + o * S + l * v + _ *
				R, i[w + n] = s * I + o * x + l * A + _ * D
		}
		static createAffineTransformationArray(e, t, r, i, a, n, s, o, l, _, h, c) {
			var d = i + i,
				u = a + a,
				f = n + n,
				m = i * d,
				E = i * u,
				T = i * f,
				p = a * u,
				g = a * f,
				S = n * f,
				v = s * d,
				R = s * u,
				I = s * f;
			h[c + 0] = (1 - (p + S)) * o, h[c + 1] = (E + I) * o, h[c + 2] = (T - R) * o, h[c + 3] = 0, h[c + 4] = (
				E - I) * l, h[c + 5] = (1 - (m + S)) * l, h[c + 6] = (g + v) * l, h[c + 7] = 0, h[c + 8] = (T +
				R) * _, h[c + 9] = (g - v) * _, h[c + 10] = (1 - (m + p)) * _, h[c + 11] = 0, h[c + 12] = e, h[
				c + 13] = t, h[c + 14] = r, h[c + 15] = 1
		}
		static transformVector3ArrayToVector3ArrayCoordinate(e, t, r, i, a) {
			var n = e[t + 0],
				s = e[t + 1],
				o = e[t + 2],
				l = r.elements,
				_ = n * l[3] + s * l[7] + o * l[11] + l[15];
			i[a] = n * l[0] + s * l[4] + o * l[8] + l[12] / _, i[a + 1] = n * l[1] + s * l[5] + o * l[9] + l[13] /
				_, i[a + 2] = n * l[2] + s * l[6] + o * l[10] + l[14] / _
		}
		static transformLightingMapTexcoordArray(e, t, r, i, a) {
			i[a + 0] = e[t + 0] * r.x + r.z, i[a + 1] = 1 - ((1 - e[t + 1]) * r.y + r.w)
		}
		static getURLVerion(e) {
			var t = e.indexOf("?");
			return t >= 0 ? e.substr(t) : null
		}
		static _createAffineTransformationArray(e, t, r, i) {
			var a = t.x,
				n = t.y,
				s = t.z,
				o = t.w,
				l = a + a,
				_ = n + n,
				h = s + s,
				c = a * l,
				d = a * _,
				u = a * h,
				f = n * _,
				m = n * h,
				E = s * h,
				T = o * l,
				p = o * _,
				g = o * h,
				S = r.x,
				v = r.y,
				R = r.z;
			i[0] = (1 - (f + E)) * S, i[1] = (d + g) * S, i[2] = (u - p) * S, i[3] = 0, i[4] = (d - g) * v, i[5] = (
					1 - (c + E)) * v, i[6] = (m + T) * v, i[7] = 0, i[8] = (u + p) * R, i[9] = (m - T) * R, i[10] =
				(1 - (c + f)) * R, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1
		}
		static _mulMatrixArray(e, t, r, i) {
			var a, n, s, o, l, _ = t.elements,
				h = _[0],
				c = _[1],
				d = _[2],
				u = _[3],
				f = _[4],
				m = _[5],
				E = _[6],
				T = _[7],
				p = _[8],
				g = _[9],
				S = _[10],
				v = _[11],
				R = _[12],
				I = _[13],
				x = _[14],
				A = _[15],
				D = i,
				M = i + 4,
				L = i + 8,
				C = i + 12;
			for (a = 0; a < 4; a++) n = e[a], s = e[a + 4], o = e[a + 8], l = e[a + 12], r[D + a] = n * h + s * c +
				o * d + l * u, r[M + a] = n * f + s * m + o * E + l * T, r[L + a] = n * p + s * g + o * S + l * v,
				r[C + a] = n * R + s * I + o * x + l * A
		}
		static arcTanAngle(e, t) {
			return 0 == e ? 1 == t ? Math.PI / 2 : -Math.PI / 2 : e > 0 ? Math.atan(t / e) : e < 0 ? t > 0 ? Math
				.atan(t / e) + Math.PI : Math.atan(t / e) - Math.PI : 0
		}
		static angleTo(e, t, r) {
			n.subtract(t, e, u.TEMPVector30), n.normalize(u.TEMPVector30, u.TEMPVector30), r.x = Math.asin(u
				.TEMPVector30.y), r.y = A.arcTanAngle(-u.TEMPVector30.z, -u.TEMPVector30.x)
		}
		static transformQuat(e, t, r) {
			var i = t,
				a = e.x,
				n = e.y,
				s = e.z,
				o = i[0],
				l = i[1],
				_ = i[2],
				h = i[3],
				c = h * a + l * s - _ * n,
				d = h * n + _ * a - o * s,
				u = h * s + o * n - l * a,
				f = -o * a - l * n - _ * s;
			r.x = c * h + f * -o + d * -_ - u * -l, r.y = d * h + f * -l + u * -o - c * -_, r.z = u * h + f * -_ +
				c * -l - d * -o
		}
		static quaternionWeight(e, t, r) {
			r.x = e.x * t, r.y = e.y * t, r.z = e.z * t, r.w = e.w
		}
		static quaternionConjugate(e, t) {
			t.x = -e.x, t.y = -e.y, t.z = -e.z, t.w = e.w
		}
		static scaleWeight(e, t, r) {
			var i = e.x,
				a = e.y,
				n = e.z;
			r.x = i > 0 ? Math.pow(Math.abs(i), t) : -Math.pow(Math.abs(i), t), r.y = a > 0 ? Math.pow(Math.abs(a),
				t) : -Math.pow(Math.abs(a), t), r.z = n > 0 ? Math.pow(Math.abs(n), t) : -Math.pow(Math.abs(n),
				t)
		}
		static scaleBlend(e, t, r, i) {
			var a = A._tempVector3_0,
				n = A._tempVector3_1;
			A.scaleWeight(e, 1 - r, a), A.scaleWeight(t, r, n);
			var s = r > .5 ? t : e;
			i.x = s.x > 0 ? Math.abs(a.x * n.x) : -Math.abs(a.x * n.x), i.y = s.y > 0 ? Math.abs(a.y * n.y) : -Math
				.abs(a.y * n.y), i.z = s.z > 0 ? Math.abs(a.z * n.z) : -Math.abs(a.z * n.z)
		}
		static matrix4x4MultiplyFFF(e, t, r) {
			var i, a, n, s, o;
			if (r === t)
				for (t = new Float32Array(16), i = 0; i < 16; ++i) t[i] = r[i];
			var l = t[0],
				_ = t[1],
				h = t[2],
				c = t[3],
				d = t[4],
				u = t[5],
				f = t[6],
				m = t[7],
				E = t[8],
				T = t[9],
				p = t[10],
				g = t[11],
				S = t[12],
				v = t[13],
				R = t[14],
				I = t[15];
			for (i = 0; i < 4; i++) a = e[i], n = e[i + 4], s = e[i + 8], o = e[i + 12], r[i] = a * l + n * _ + s *
				h + o * c, r[i + 4] = a * d + n * u + s * f + o * m, r[i + 8] = a * E + n * T + s * p + o * g, r[i +
					12] = a * S + n * v + s * R + o * I
		}
		static matrix4x4MultiplyFFFForNative(e, r, i) {
			t.LayaGL.instance.matrix4x4Multiply(e, r, i)
		}
		static matrix4x4MultiplyMFM(e, t, r) {
			A.matrix4x4MultiplyFFF(e.elements, t, r.elements)
		}
		static _buildTexture2D(e, r, i, a, n = !1) {
			var s = new t.Texture2D(e, r, i, n, !0);
			return s.anisoLevel = 1, s.filterMode = t.BaseTexture.FILTERMODE_POINT, x._generateTexture2D(s, e, r,
				a), s
		}
		static _drawBound(e, t, r) {
			e.lineCount + 12 > e.maxLineCount && (e.maxLineCount += 12);
			var i = A._tempVector3_0,
				a = A._tempVector3_1,
				n = t.min,
				s = t.max;
			i.setValue(n.x, n.y, n.z), a.setValue(s.x, n.y, n.z), e.addLine(i, a, r, r), i.setValue(n.x, n.y, n.z),
				a.setValue(n.x, n.y, s.z), e.addLine(i, a, r, r), i.setValue(s.x, n.y, n.z), a.setValue(s.x, n.y, s
					.z), e.addLine(i, a, r, r), i.setValue(n.x, n.y, s.z), a.setValue(s.x, n.y, s.z), e.addLine(i,
					a, r, r), i.setValue(n.x, n.y, n.z), a.setValue(n.x, s.y, n.z), e.addLine(i, a, r, r), i
				.setValue(n.x, n.y, s.z), a.setValue(n.x, s.y, s.z), e.addLine(i, a, r, r), i.setValue(s.x, n.y, n
					.z), a.setValue(s.x, s.y, n.z), e.addLine(i, a, r, r), i.setValue(s.x, n.y, s.z), a.setValue(s
					.x, s.y, s.z), e.addLine(i, a, r, r), i.setValue(n.x, s.y, n.z), a.setValue(s.x, s.y, n.z), e
				.addLine(i, a, r, r), i.setValue(n.x, s.y, n.z), a.setValue(n.x, s.y, s.z), e.addLine(i, a, r, r), i
				.setValue(s.x, s.y, n.z), a.setValue(s.x, s.y, s.z), e.addLine(i, a, r, r), i.setValue(n.x, s.y, s
					.z), a.setValue(s.x, s.y, s.z), e.addLine(i, a, r, r)
		}
		static _getHierarchyPath(e, t, r) {
			r.length = 0;
			for (var i = t; i !== e;) {
				var a = i._parent;
				if (!a) return null;
				r.push(a.getChildIndex(i)), i = a
			}
			return r
		}
		static _getNodeByHierarchyPath(e, t) {
			for (var r = e, i = t.length - 1; i >= 0; i--) r = r.getChildAt(t[i]);
			return r
		}
	}
	A._tempVector3_0 = new n, A._tempVector3_1 = new n, A._tempArray16_0 = new Float32Array(16), A._tempArray16_1 =
		new Float32Array(16), A._tempArray16_2 = new Float32Array(16), A._tempArray16_3 = new Float32Array(16), A
		._compIdToNode = new Object;
	class D extends t.Resource {
		constructor() {
			super(), this._nodes = new I, this._animationEvents = []
		}
		static _parse(e, r = null, i = null) {
			var a = new D,
				n = new t.Byte(e),
				s = n.readUTFString();
			switch (s) {
				case "LAYAANIMATION:03":
					S.parse(a, n);
					break;
				case "LAYAANIMATION:04":
				case "LAYAANIMATION:COMPRESSION_04":
					R.parse(a, n, s);
					break;
				default:
					throw "unknown animationClip version."
			}
			return a
		}
		static load(e, r) {
			t.ILaya.loader.create(e, r, null, D.ANIMATIONCLIP)
		}
		duration() {
			return this._duration
		}
		_hermiteInterpolate(e, t, r, i) {
			var a = e.outTangent,
				n = t.inTangent;
			if (Number.isFinite(a) && Number.isFinite(n)) {
				var s = r * r,
					o = s * r,
					l = o - 2 * s + r,
					_ = o - s,
					h = -2 * o + 3 * s;
				return (2 * o - 3 * s + 1) * e.value + l * a * i + _ * n * i + h * t.value
			}
			return e.value
		}
		_hermiteInterpolateVector3(e, t, r, i, a) {
			var n = e.value,
				s = e.outTangent,
				o = t.value,
				l = t.inTangent,
				_ = r * r,
				h = _ * r,
				c = 2 * h - 3 * _ + 1,
				d = h - 2 * _ + r,
				u = h - _,
				f = -2 * h + 3 * _,
				m = s.x,
				E = l.x;
			Number.isFinite(m) && Number.isFinite(E) ? a.x = c * n.x + d * m * i + u * E * i + f * o.x : a.x = n
				.x, m = s.y, E = l.y, Number.isFinite(m) && Number.isFinite(E) ? a.y = c * n.y + d * m * i + u *
				E * i + f * o.y : a.y = n.y, m = s.z, E = l.z, Number.isFinite(m) && Number.isFinite(E) ? a.z =
				c * n.z + d * m * i + u * E * i + f * o.z : a.z = n.z
		}
		_hermiteInterpolateQuaternion(e, t, r, i, a) {
			var n = e.value,
				s = e.outTangent,
				o = t.value,
				l = t.inTangent,
				_ = r * r,
				h = _ * r,
				c = 2 * h - 3 * _ + 1,
				d = h - 2 * _ + r,
				u = h - _,
				f = -2 * h + 3 * _,
				m = s.x,
				E = l.x;
			Number.isFinite(m) && Number.isFinite(E) ? a.x = c * n.x + d * m * i + u * E * i + f * o.x : a.x = n
				.x, m = s.y, E = l.y, Number.isFinite(m) && Number.isFinite(E) ? a.y = c * n.y + d * m * i + u *
				E * i + f * o.y : a.y = n.y, m = s.z, E = l.z, Number.isFinite(m) && Number.isFinite(E) ? a.z =
				c * n.z + d * m * i + u * E * i + f * o.z : a.z = n.z, m = s.w, E = l.w, Number.isFinite(m) &&
				Number.isFinite(E) ? a.w = c * n.w + d * m * i + u * E * i + f * o.w : a.w = n.w
		}
		_evaluateClipDatasRealTime(e, t, r, i, a) {
			for (var n = 0, s = e.count; n < s; n++) {
				var o, l = e.getNodeByIndex(n),
					_ = l.type,
					h = l._keyFrames,
					c = h.length,
					d = r[n];
				if (a)
					for (-1 !== d && t < h[d].time && (d = -1, r[n] = d), o = d + 1; o < c && !(h[o].time > t);)
						d++, o++, r[n] = d;
				else
					for ((o = d + 1) !== c && t > h[o].time && (d = c - 1, r[n] = d), o = d + 1; d > -1 && !(h[
							d].time < t);) d--, o--, r[n] = d;
				var f = o === c;
				switch (_) {
					case 0:
						if (-1 !== d) {
							var m = h[d];
							if (f) l.data = m.value;
							else {
								var E, T = h[o],
									p = T.time - m.time;
								E = 0 !== p ? (t - m.time) / p : 0, l.data = this._hermiteInterpolate(m, T, E,
									p)
							}
						} else l.data = h[0].value;
						i && (l.data -= h[0].value);
						break;
					case 1:
					case 4:
						var g = l.data;
						if (this._evaluateFrameNodeVector3DatasRealTime(h, d, f, t, g), i) {
							var S = h[0].value;
							g.x -= S.x, g.y -= S.y, g.z -= S.z
						}
						break;
					case 2:
						var v = l.data;
						if (this._evaluateFrameNodeQuaternionDatasRealTime(h, d, f, t, v), i) {
							var R = D._tempQuaternion0,
								I = h[0].value;
							A.quaternionConjugate(I, R), u.multiply(R, v, v)
						}
						break;
					case 3:
						g = l.data, this._evaluateFrameNodeVector3DatasRealTime(h, d, f, t, g), i && (S = h[0]
							.value, g.x /= S.x, g.y /= S.y, g.z /= S.z);
						break;
					default:
						throw "AnimationClip:unknown node type."
				}
			}
		}
		_evaluateClipDatasRealTimeForNative(e, r, i, a) {
			t.LayaGL.instance.evaluateClipDatasRealTime(e._nativeObj, r, i, a)
		}
		_evaluateFrameNodeVector3DatasRealTime(e, t, r, i, a) {
			if (-1 !== t) {
				var n = e[t];
				if (r) {
					var s = n.value;
					a.x = s.x, a.y = s.y, a.z = s.z
				} else {
					var o, l = e[t + 1],
						_ = n.time,
						h = l.time - _;
					o = 0 !== h ? (i - _) / h : 0, this._hermiteInterpolateVector3(n, l, o, h, a)
				}
			} else {
				var c = e[0].value;
				a.x = c.x, a.y = c.y, a.z = c.z
			}
		}
		_evaluateFrameNodeQuaternionDatasRealTime(e, t, r, i, a) {
			if (-1 !== t) {
				var n = e[t];
				if (r) {
					var s = n.value;
					a.x = s.x, a.y = s.y, a.z = s.z, a.w = s.w
				} else {
					var o, l = e[t + 1],
						_ = n.time,
						h = l.time - _;
					o = 0 !== h ? (i - _) / h : 0, this._hermiteInterpolateQuaternion(n, l, o, h, a)
				}
			} else {
				var c = e[0].value;
				a.x = c.x, a.y = c.y, a.z = c.z, a.w = c.w
			}
		}
		_binarySearchEventIndex(e) {
			for (var t, r = 0, i = this._animationEvents.length - 1; r <= i;) {
				t = Math.floor((r + i) / 2);
				var a = this._animationEvents[t].time;
				if (a == e) return t;
				a > e ? i = t - 1 : r = t + 1
			}
			return r
		}
		addEvent(e) {
			var t = this._binarySearchEventIndex(e.time);
			this._animationEvents.splice(t, 0, e)
		}
		_disposeResource() {
			this._nodes = null, this._nodesMap = null
		}
	}
	D.ANIMATIONCLIP = "ANIMATIONCLIP", D._tempQuaternion0 = new u;
	class M {
		get normalizedTime() {
			return this._normalizedTime
		}
		get duration() {
			return this._duration
		}
		constructor() {}
		_resetPlayState(e) {
			this._finish = !1, this._startPlayTime = e, this._elapsedTime = e, this._playEventIndex = 0, this
				._lastIsFront = !0
		}
		_cloneTo(e) {
			e._finish = this._finish, e._startPlayTime = this._startPlayTime, e._elapsedTime = this._elapsedTime, e
				._playEventIndex = this._playEventIndex, e._lastIsFront = this._lastIsFront
		}
	}
	class L {
		constructor(e) {
			this._defaultState = null, this._referenceCount = 0, this._statesMap = {}, this.playOnWake = !0, this
				._playType = -1, this._crossMark = 0, this._crossDuration = -1, this
				._crossNodesOwnersIndicesMap = {}, this._crossNodesOwnersCount = 0, this._crossNodesOwners = [],
				this._currentPlayState = null, this._states = [], this._playStateInfo = new M, this
				._crossPlayStateInfo = new M, this._srcCrossClipNodeIndices = [], this
				._destCrossClipNodeIndices = [], this.name = e, this.defaultWeight = 1, this.blendingMode = L
				.BLENDINGMODE_OVERRIDE
		}
		get defaultState() {
			return this._defaultState
		}
		set defaultState(e) {
			this._defaultState = e, this._statesMap[e.name] = e
		}
		_removeClip(e, t, r, i) {
			var a = i._clip,
				n = e[r];
			if (e.splice(r, 1), delete t[i.name], this._animator) {
				var s = a._nodes,
					o = n._nodeOwners;
				a._removeReference();
				for (var l = 0, _ = s.count; l < _; l++) this._animator._removeKeyframeNodeOwner(o, s
					.getNodeByIndex(l))
			}
		}
		_getReferenceCount() {
			return this._referenceCount
		}
		_addReference(e = 1) {
			for (var t = 0, r = this._states.length; t < r; t++) this._states[t]._addReference(e);
			this._referenceCount += e
		}
		_removeReference(e = 1) {
			for (var t = 0, r = this._states.length; t < r; t++) this._states[t]._removeReference(e);
			this._referenceCount -= e
		}
		_clearReference() {
			this._removeReference(-this._referenceCount)
		}
		getAnimatorState(e) {
			var t = this._statesMap[e];
			return t || null
		}
		addState(e) {
			var t = e.name;
			if (this._statesMap[t]) throw "AnimatorControllerLayer:this stat's name has exist.";
			this._statesMap[t] = e, this._states.push(e), this._animator && (e._clip._addReference(), this._animator
				._getOwnersByClip(e))
		}
		removeState(e) {
			for (var t = this._states, r = -1, i = 0, a = t.length; i < a; i++)
				if (t[i] === e) {
					r = i;
					break
				} - 1 !== r && this._removeClip(t, this._statesMap, r, e)
		}
		destroy() {
			this._clearReference(), this._statesMap = null, this._states = null, this._playStateInfo = null, this
				._crossPlayStateInfo = null, this._defaultState = null
		}
		cloneTo(e) {
			var t = e;
			t.name = this.name, t.blendingMode = this.blendingMode, t.defaultWeight = this.defaultWeight, t
				.playOnWake = this.playOnWake
		}
		clone() {
			var e = new L(this.name);
			return this.cloneTo(e), e
		}
	}
	L.BLENDINGMODE_OVERRIDE = 0, L.BLENDINGMODE_ADDTIVE = 1;
	class C {
		constructor() {
			this._referenceCount = 0, this._clip = null, this._nodeOwners = [], this._currentFrameIndices = null,
				this._scripts = null, this.speed = 1, this.clipStart = 0, this.clipEnd = 1
		}
		get clip() {
			return this._clip
		}
		set clip(e) {
			this._clip !== e && (this._clip && this._referenceCount > 0 && this._clip._removeReference(this
				._referenceCount), e && (this._currentFrameIndices = new Int16Array(e._nodes.count), this
				._resetFrameIndices(), this._referenceCount > 0 && this._clip._addReference(this
					._referenceCount)), this._clip = e)
		}
		_getReferenceCount() {
			return this._referenceCount
		}
		_addReference(e = 1) {
			this._clip && this._clip._addReference(e), this._referenceCount += e
		}
		_removeReference(e = 1) {
			this._clip && this._clip._removeReference(e), this._referenceCount -= e
		}
		_clearReference() {
			this._removeReference(-this._referenceCount)
		}
		_resetFrameIndices() {
			for (var e = 0, t = this._currentFrameIndices.length; e < t; e++) this._currentFrameIndices[e] = -1
		}
		addScript(e) {
			var t = new e;
			return this._scripts = this._scripts || [], this._scripts.push(t), t
		}
		getScript(e) {
			if (this._scripts)
				for (var t = 0, r = this._scripts.length; t < r; t++) {
					var i = this._scripts[t];
					if (i instanceof e) return i
				}
			return null
		}
		getScripts(e) {
			var t;
			if (this._scripts)
				for (var r = 0, i = this._scripts.length; r < i; r++) {
					var a = this._scripts[r];
					a instanceof e && (t = t || []).push(a)
				}
			return t
		}
		cloneTo(e) {
			var t = e;
			t.name = this.name, t.speed = this.speed, t.clipStart = this.clipStart, t.clipEnd = this.clipEnd, t
				.clip = this._clip
		}
		clone() {
			var e = new C;
			return this.cloneTo(e), e
		}
	}
	class y {
		constructor() {
			this.indexInList = -1, this.referenceCount = 0, this.updateMark = -1, this.type = -1, this.fullPath =
				null, this.propertyOwner = null, this.property = null, this.defaultValue = null, this
				.crossFixedValue = null
		}
		saveCrossFixedValue() {
			var e = this.propertyOwner;
			if (e) switch (this.type) {
				case 0:
					for (var t = this.property, r = t.length - 1, i = 0; i < r && (e = e[t[i]]); i++);
					this.crossFixedValue = e[t[r]];
					break;
				case 1:
					var a = e.localPosition;
					this.crossFixedValue || (this.crossFixedValue = new n), this.crossFixedValue.x = a.x, this
						.crossFixedValue.y = a.y, this.crossFixedValue.z = a.z;
					break;
				case 2:
					var s = e.localRotation;
					this.crossFixedValue || (this.crossFixedValue = new u), this.crossFixedValue.x = s.x, this
						.crossFixedValue.y = s.y, this.crossFixedValue.z = s.z, this.crossFixedValue.w = s.w;
					break;
				case 3:
					var o = e.localScale;
					this.crossFixedValue || (this.crossFixedValue = new n), this.crossFixedValue.x = o.x, this
						.crossFixedValue.y = o.y, this.crossFixedValue.z = o.z;
					break;
				case 4:
					var l = e.localRotationEuler;
					this.crossFixedValue || (this.crossFixedValue = new n), this.crossFixedValue.x = l.x, this
						.crossFixedValue.y = l.y, this.crossFixedValue.z = l.z;
					break;
				default:
					throw "Animator:unknown type."
			}
		}
	}
	class O extends t.Component {
		constructor() {
			super(), this._keyframeNodeOwners = [], this._linkAvatarSpritesData = {}, this
				._linkAvatarSprites = [], this._renderableSprites = [], this.cullingMode = O
				.CULLINGMODE_CULLCOMPLETELY, this._controllerLayers = [], this._linkSprites = {}, this._speed =
				1, this._keyframeNodeOwnerMap = {}, this._updateMark = 0
		}
		static _update(e) {
			for (var t = e._animatorPool, r = t.elements, i = 0, a = t.length; i < a; i++) {
				var n = r[i];
				n && n.enabled && n._update()
			}
		}
		get speed() {
			return this._speed
		}
		set speed(e) {
			this._speed = e
		}
		_linkToSprites(e) {
			for (var t in e) {
				for (var r = this.owner, i = e[t], a = 0, n = i.length; a < n; a++) {
					var s = i[a];
					if ("" === s) break;
					if (!(r = r.getChildByName(s))) break
				}
				r && this.linkSprite3DToAvatarNode(t, r)
			}
		}
		_addKeyframeNodeOwner(e, t, r) {
			var i = t._indexInList,
				a = t.fullPath,
				n = this._keyframeNodeOwnerMap[a];
			if (n) n.referenceCount++, e[i] = n;
			else {
				for (var s = r, o = 0, l = t.propertyCount; o < l && (s = s[t.getPropertyByIndex(o)]); o++);
				(n = this._keyframeNodeOwnerMap[a] = new y).fullPath = a, n.indexInList = this
					._keyframeNodeOwners.length, n.referenceCount = 1, n.propertyOwner = r;
				var _ = t.propertyCount,
					h = [];
				for (o = 0; o < _; o++) h[o] = t.getPropertyByIndex(o);
				if (n.property = h, n.type = t.type, s)
					if (0 === t.type) n.defaultValue = s;
					else {
						var c = new s.constructor;
						s.cloneTo(c), n.defaultValue = c
					} this._keyframeNodeOwners.push(n), e[i] = n
			}
		}
		_removeKeyframeNodeOwner(e, t) {
			var r = t.fullPath,
				i = this._keyframeNodeOwnerMap[r];
			i && (i.referenceCount--, 0 === i.referenceCount && (delete this._keyframeNodeOwnerMap[r], this
					._keyframeNodeOwners.splice(this._keyframeNodeOwners.indexOf(i), 1)), e[t
				._indexInList] = null)
		}
		_getOwnersByClip(e) {
			var t = e._clip._nodes,
				r = t.count,
				i = e._nodeOwners;
			i.length = r;
			for (var a = 0; a < r; a++) {
				for (var n = t.getNodeByIndex(a), s = this._avatar ? this._avatarNodeMap[this._avatar._rootNode
						.name] : this.owner, o = 0, l = n.ownerPathCount; o < l; o++) {
					var _ = n.getOwnerPathByIndex(o);
					if ("" === _) break;
					if (!(s = s.getChildByName(_))) break
				}
				if (s) {
					var h = n.propertyOwner;
					h && (s = s[h]), s && this._addKeyframeNodeOwner(i, n, s)
				}
			}
		}
		_updatePlayer(e, t, r, i) {
			var a = e._clip._duration * (e.clipEnd - e.clipStart),
				n = t._elapsedTime,
				s = n + r;
			t._lastElapsedTime = n, t._elapsedTime = s;
			var o = s / a;
			t._normalizedTime = o;
			var l = o % 1;
			t._normalizedPlayTime = l < 0 ? l + 1 : l, t._duration = a;
			var _ = e._scripts;
			if (!i && s >= a) {
				if (t._finish = !0, t._elapsedTime = a, t._normalizedPlayTime = 1, _)
					for (var h = 0, c = _.length; h < c; h++) _[h].onStateExit()
			} else if (_)
				for (h = 0, c = _.length; h < c; h++) _[h].onStateUpdate()
		}
		_eventScript(e, t, r, i, a) {
			if (a)
				for (var n = t.length; r < n; r++) {
					var s = t[r];
					if (!(s.time <= i)) break;
					for (var o = 0, l = e.length; o < l; o++) {
						var _ = e[o],
							h = _[s.eventName];
						h && h.apply(_, s.params)
					}
				} else
					for (; r >= 0 && (s = t[r]).time >= i; r--)
						for (o = 0, l = e.length; o < l; o++)(h = (_ = e[o])[s.eventName]) && h.apply(_, s
							.params);
			return r
		}
		_updateEventScript(e, t) {
			var r = this.owner._scripts;
			if (r) {
				var i = e._clip,
					a = i._animationEvents,
					n = i._duration,
					s = t._elapsedTime,
					o = s % n,
					l = Math.abs(Math.floor(s / n) - Math.floor(t._lastElapsedTime / n)),
					_ = t._elapsedTime >= t._lastElapsedTime;
				if (t._lastIsFront !== _ && (_ ? t._playEventIndex++ : t._playEventIndex--, t._lastIsFront = _),
					0 == l) t._playEventIndex = this._eventScript(r, a, t._playEventIndex, o, _);
				else if (_) {
					this._eventScript(r, a, t._playEventIndex, n, !0);
					for (var h = 0, c = l - 1; h < c; h++) this._eventScript(r, a, 0, n, !0);
					t._playEventIndex = this._eventScript(r, a, 0, o, !0)
				} else {
					this._eventScript(r, a, t._playEventIndex, 0, !1);
					var d = a.length - 1;
					for (h = 0, c = l - 1; h < c; h++) this._eventScript(r, a, d, 0, !1);
					t._playEventIndex = this._eventScript(r, a, d, o, !1)
				}
			}
		}
		_updateClipDatas(e, t, r, i) {
			var a = e._clip,
				n = a._duration,
				s = e.clipStart * n + r._normalizedPlayTime * r._duration,
				o = e._currentFrameIndices,
				l = r._elapsedTime > r._lastElapsedTime;
			a._evaluateClipDatasRealTime(a._nodes, s, o, t, l)
		}
		_applyFloat(e, t, r, i, a, n, s) {
			if (r.updateMark === this._updateMark)
				if (i) e[t] += a * s;
				else {
					var o = e[t];
					e[t] = o + a * (s - o)
				}
			else if (n) e[t] = i ? r.defaultValue + s : s;
			else if (i) e[t] = r.defaultValue + a * s;
			else {
				var l = r.defaultValue;
				e[t] = l + a * (s - l)
			}
		}
		_applyPositionAndRotationEuler(e, t, r, i, a, n) {
			if (e.updateMark === this._updateMark)
				if (t) n.x += r * a.x, n.y += r * a.y, n.z += r * a.z;
				else {
					var s = n.x,
						o = n.y,
						l = n.z;
					n.x = s + r * (a.x - s), n.y = o + r * (a.y - o), n.z = l + r * (a.z - l)
				}
			else if (i)
				if (t) {
					var _ = e.defaultValue;
					n.x = _.x + a.x, n.y = _.y + a.y, n.z = _.z + a.z
				} else n.x = a.x, n.y = a.y, n.z = a.z;
			else if (_ = e.defaultValue, t) n.x = _.x + r * a.x, n.y = _.y + r * a.y, n.z = _.z + r * a.z;
			else {
				var h = _.x,
					c = _.y,
					d = _.z;
				n.x = h + r * (a.x - h), n.y = c + r * (a.y - c), n.z = d + r * (a.z - d)
			}
		}
		_applyRotation(e, t, r, i, a, n) {
			if (e.updateMark === this._updateMark)
				if (t) {
					var s = O._tempQuaternion1;
					A.quaternionWeight(a, r, s), s.normalize(s), u.multiply(n, s, n)
				} else u.lerp(n, a, r, n);
			else if (i)
				if (t) {
					var o = e.defaultValue;
					u.multiply(o, a, n)
				} else n.x = a.x, n.y = a.y, n.z = a.z, n.w = a.w;
			else o = e.defaultValue, t ? (s = O._tempQuaternion1, A.quaternionWeight(a, r, s), s.normalize(s), u
				.multiply(o, s, n)) : u.lerp(o, a, r, n)
		}
		_applyScale(e, t, r, i, a, n) {
			if (e.updateMark === this._updateMark)
				if (t) {
					var s = O._tempVector31;
					A.scaleWeight(a, r, s), n.x = n.x * s.x, n.y = n.y * s.y, n.z = n.z * s.z
				} else A.scaleBlend(n, a, r, n);
			else if (i)
				if (t) {
					var o = e.defaultValue;
					n.x = o.x * a.x, n.y = o.y * a.y, n.z = o.z * a.z
				} else n.x = a.x, n.y = a.y, n.z = a.z;
			else o = e.defaultValue, t ? (s = O._tempVector31, A.scaleWeight(a, r, s), n.x = o.x * s.x, n.y = o
				.y * s.y, n.z = o.z * s.z) : A.scaleBlend(o, a, r, n)
		}
		_applyCrossData(e, t, r, i, a, n, s) {
			var o = e.propertyOwner;
			if (o) {
				switch (e.type) {
					case 0:
						for (var l = e.property, _ = l.length - 1, h = 0; h < _ && (o = o[l[h]]); h++);
						var c = a + s * (n - a);
						this._applyFloat(o, l[_], e, t, r, i, c);
						break;
					case 1:
						var d = o.localPosition,
							f = O._tempVector30,
							m = a.x,
							E = a.y,
							T = a.z;
						f.x = m + s * (n.x - m), f.y = E + s * (n.y - E), f.z = T + s * (n.z - T), this
							._applyPositionAndRotationEuler(e, t, r, i, f, d), o.localPosition = d;
						break;
					case 2:
						var p = o.localRotation,
							g = O._tempQuaternion0;
						u.lerp(a, n, s, g), this._applyRotation(e, t, r, i, g, p), o.localRotation = p;
						break;
					case 3:
						var S = o.localScale,
							v = O._tempVector30;
						A.scaleBlend(a, n, s, v), this._applyScale(e, t, r, i, v, S), o.localScale = S;
						break;
					case 4:
						var R = o.localRotationEuler,
							I = O._tempVector30;
						m = a.x, E = a.y, T = a.z, I.x = m + s * (n.x - m), I.y = E + s * (n.y - E), I.z = T +
							s * (n.z - T), this._applyPositionAndRotationEuler(e, t, r, i, I, R), o
							.localRotationEuler = R
				}
				e.updateMark = this._updateMark
			}
		}
		_setClipDatasToNode(e, t, r, i) {
			for (var a = e._clip._nodes, n = e._nodeOwners, s = 0, o = a.count; s < o; s++) {
				var l = n[s];
				if (l) {
					var _ = l.propertyOwner;
					if (_) {
						switch (l.type) {
							case 0:
								for (var h = l.property, c = h.length - 1, d = 0; d < c && (_ = _[h[d]]); d++);
								this._applyFloat(_, h[c], l, t, r, i, a.getNodeByIndex(s).data);
								break;
							case 1:
								var u = _.localPosition;
								this._applyPositionAndRotationEuler(l, t, r, i, a.getNodeByIndex(s).data, u), _
									.localPosition = u;
								break;
							case 2:
								var f = _.localRotation;
								this._applyRotation(l, t, r, i, a.getNodeByIndex(s).data, f), _.localRotation =
									f;
								break;
							case 3:
								var m = _.localScale;
								this._applyScale(l, t, r, i, a.getNodeByIndex(s).data, m), _.localScale = m;
								break;
							case 4:
								var E = _.localRotationEuler;
								this._applyPositionAndRotationEuler(l, t, r, i, a.getNodeByIndex(s).data, E), _
									.localRotationEuler = E
						}
						l.updateMark = this._updateMark
					}
				}
			}
		}
		_setCrossClipDatasToNode(e, t, r, i, a) {
			for (var n = e._crossNodesOwners, s = e._crossNodesOwnersCount, o = e.blendingMode !== L
					.BLENDINGMODE_OVERRIDE, l = e.defaultWeight, _ = e._destCrossClipNodeIndices, h = r._clip
					._nodes, c = r._nodeOwners, d = e._srcCrossClipNodeIndices, u = t._nodeOwners, f = t._clip
					._nodes, m = 0; m < s; m++) {
				var E = n[m];
				if (E) {
					var T = d[m],
						p = _[m],
						g = -1 !== T ? f.getNodeByIndex(T).data : c[p].defaultValue,
						S = -1 !== p ? h.getNodeByIndex(p).data : u[T].defaultValue;
					this._applyCrossData(E, o, l, a, g, S, i)
				}
			}
		}
		_setFixedCrossClipDatasToNode(e, t, r, i) {
			for (var a = e._crossNodesOwners, n = e._crossNodesOwnersCount, s = e.blendingMode !== L
					.BLENDINGMODE_OVERRIDE, o = e.defaultWeight, l = e._destCrossClipNodeIndices, _ = t._clip
					._nodes, h = 0; h < n; h++) {
				var c = a[h];
				if (c) {
					var d = l[h],
						u = c.crossFixedValue,
						f = -1 !== d ? _.getNodeByIndex(d).data : c.defaultValue;
					this._applyCrossData(c, s, o, i, u, f, r)
				}
			}
		}
		_revertDefaultKeyframeNodes(e) {
			for (var t = e._nodeOwners, r = 0, i = t.length; r < i; r++) {
				var a = t[r];
				if (a) {
					var n = a.propertyOwner;
					if (n) switch (a.type) {
						case 0:
							for (var s = a.property, o = s.length - 1, l = 0; l < o && (n = n[s[l]]); l++);
							n[s[o]] = a.defaultValue;
							break;
						case 1:
							var _ = n.localPosition,
								h = a.defaultValue;
							_.x = h.x, _.y = h.y, _.z = h.z, n.localPosition = _;
							break;
						case 2:
							var c = n.localRotation,
								d = a.defaultValue;
							c.x = d.x, c.y = d.y, c.z = d.z, c.w = d.w, n.localRotation = c;
							break;
						case 3:
							var u = n.localScale;
							h = a.defaultValue, u.x = h.x, u.y = h.y, u.z = h.z, n.localScale = u;
							break;
						case 4:
							var f = n.localRotationEuler;
							h = a.defaultValue, f.x = h.x, f.y = h.y, f.z = h.z, n.localRotationEuler = f;
							break;
						default:
							throw "Animator:unknown type."
					}
				}
			}
		}
		_onAdded() {
			var e = this.owner._parent;
			this.owner._setHierarchyAnimator(this, e ? e._hierarchyAnimator : null), this.owner
				._changeAnimatorToLinkSprite3DNoAvatar(this, !0, [])
		}
		_onDestroy() {
			for (var e = 0, t = this._controllerLayers.length; e < t; e++) this._controllerLayers[e]
				._removeReference();
			var r = this.owner._parent;
			this.owner._clearHierarchyAnimator(this, r ? r._hierarchyAnimator : null)
		}
		_onEnable() {
			this.owner._scene._animatorPool.add(this);
			for (var e = 0, t = this._controllerLayers.length; e < t; e++) {
				if (this._controllerLayers[e].playOnWake) this.getDefaultState(e) && this.play(null, e, 0)
			}
		}
		_onDisable() {
			this.owner._scene._animatorPool.remove(this)
		}
		_handleSpriteOwnersBySprite(e, t, r) {
			for (var i = 0, a = this._controllerLayers.length; i < a; i++)
				for (var n = this._controllerLayers[i]._states, s = 0, o = n.length; s < o; s++) {
					var l = n[s],
						_ = l._clip,
						h = t.join("/"),
						c = _._nodesMap[h];
					if (c)
						for (var d = l._nodeOwners, u = 0, f = c.length; u < f; u++) e ? this
							._addKeyframeNodeOwner(d, c[u], r) : this._removeKeyframeNodeOwner(d, c[u])
				}
		}
		_parse(e) {
			var r = e.avatar;
			if (r) {
				this.avatar = t.Loader.getRes(r.path);
				var i = r.linkSprites;
				this._linkSprites = i, this._linkToSprites(i)
			}
			e.clipPaths;
			for (var a = e.playOnWake, n = e.layers, s = 0; s < n.length; s++) {
				var o = n[s],
					l = new L(o.name);
				l.defaultWeight = 0 === s ? 1 : o.weight;
				var _ = o.blendingMode;
				_ && (l.blendingMode = _), this.addControllerLayer(l);
				for (var h = o.states, c = 0, d = h.length; c < d; c++) {
					var u = h[c],
						f = u.clipPath;
					if (f) {
						var m, E = u.name;
						if (m = t.Loader.getRes(f)) {
							var T = new C;
							T.name = E, T.clip = m, l.addState(T), 0 === c && (this.getControllerLayer(s)
								.defaultState = T)
						}
					}
				}
				void 0 !== a && (l.playOnWake = a)
			}
			var p = e.cullingMode;
			void 0 !== p && (this.cullingMode = p)
		}
		_update() {
			var e = this.owner._scene.timer,
				r = e._delta / 1e3;
			if (0 !== this._speed && 0 !== r) {
				var i;
				if (this.cullingMode === O.CULLINGMODE_CULLCOMPLETELY) {
					i = !1;
					for (var a = 0, n = this._renderableSprites.length; a < n; a++)
						if (this._renderableSprites[a]._render._visible) {
							i = !0;
							break
						}
				} else i = !0;
				this._updateMark++;
				var s = e.scale;
				for (a = 0, n = this._controllerLayers.length; a < n; a++) {
					var o = this._controllerLayers[a],
						l = o._playStateInfo,
						_ = o._crossPlayStateInfo;
					switch (f = o.blendingMode !== L.BLENDINGMODE_OVERRIDE, o._playType) {
						case 0:
							var h = o._currentPlayState,
								c = h._clip,
								d = this._speed * h.speed,
								u = l._finish;
							if (u || this._updatePlayer(h, l, r * d, c.islooping), i) {
								var f = o.blendingMode !== L.BLENDINGMODE_OVERRIDE;
								this._updateClipDatas(h, f, l, s * d), this._setClipDatasToNode(h, f, o
									.defaultWeight, 0 === a), u || this._updateEventScript(h, l)
							}
							break;
						case 1:
							c = (h = o._currentPlayState)._clip;
							var m = o._crossPlayState,
								E = m._clip,
								T = o._crossDuration,
								p = _._startPlayTime,
								g = E._duration - p,
								S = T > g ? g / T : 1,
								v = this._speed * m.speed;
							this._updatePlayer(m, _, r * S * v, E.islooping);
							var R = (_._elapsedTime - p) / S / T;
							R >= 1 ? i && (this._updateClipDatas(m, f, _, s * v), this._setClipDatasToNode(m, f,
									o.defaultWeight, 0 === a), o._playType = 0, o._currentPlayState = m, _
								._cloneTo(l)) : (l._finish || (d = this._speed * h.speed, this
								._updatePlayer(h, l, r * d, c.islooping)), i && (this._updateClipDatas(
									h, f, l, s * d), this._updateClipDatas(m, f, _, s * S * v), this
								._setCrossClipDatasToNode(o, h, m, R, 0 === a))), i && (this
								._updateEventScript(h, l), this._updateEventScript(m, _));
							break;
						case 2:
							E = (m = o._crossPlayState)._clip, T = o._crossDuration, p = _._startPlayTime, S =
								T > (g = E._duration - p) ? g / T : 1, v = this._speed * m.speed, this
								._updatePlayer(m, _, r * S * v, E.islooping), i && ((R = (_._elapsedTime - p) /
										S / T) >= 1 ? (this._updateClipDatas(m, f, _, s * v), this
										._setClipDatasToNode(m, f, 1, 0 === a), o._playType = 0, o
										._currentPlayState = m, _._cloneTo(l)) : (this._updateClipDatas(m, f, _,
										s * S * v), this._setFixedCrossClipDatasToNode(o, m, R, 0 === a)), this
									._updateEventScript(m, _))
					}
				}
				i && this._avatar && (t.Render.supportWebGLPlusAnimation && this._updateAnimationNodeWorldMatix(
					this._animationNodeLocalPositions, this._animationNodeLocalRotations, this
					._animationNodeLocalScales, this._animationNodeWorldMatrixs, this
					._animationNodeParentIndices), this._updateAvatarNodesToSprite())
			}
		}
		_cloneTo(e) {
			var t = e;
			t.avatar = this.avatar, t.cullingMode = this.cullingMode;
			for (var r = 0, i = this._controllerLayers.length; r < i; r++) {
				var a = this._controllerLayers[r];
				t.addControllerLayer(a.clone());
				for (var n = a._states, s = 0, o = n.length; s < o; s++) {
					var l = n[s].clone(),
						_ = t.getControllerLayer(r);
					_.addState(l), 0 == s && (_.defaultState = l)
				}
			}
			t._linkSprites = this._linkSprites, t._linkToSprites(this._linkSprites)
		}
		getDefaultState(e = 0) {
			return this._controllerLayers[e].defaultState
		}
		addState(e, t = 0) {
			this._controllerLayers[t].addState(e), console.warn(
				"Animator:this function is discard,please use animatorControllerLayer.addState() instead.")
		}
		removeState(e, t = 0) {
			this._controllerLayers[t].removeState(e), console.warn(
				"Animator:this function is discard,please use animatorControllerLayer.removeState() instead."
				)
		}
		addControllerLayer(e) {
			this._controllerLayers.push(e), e._animator = this, e._addReference();
			for (var t = e._states, r = 0, i = t.length; r < i; r++) this._getOwnersByClip(t[r])
		}
		getControllerLayer(e = 0) {
			return this._controllerLayers[e]
		}
		getCurrentAnimatorPlayState(e = 0) {
			return this._controllerLayers[e]._playStateInfo
		}
		play(e = null, t = 0, r = Number.NEGATIVE_INFINITY) {
			var i = this._controllerLayers[t];
			if (i) {
				var a = i.defaultState;
				if (!e && !a) throw new Error(
					"Animator:must have  default clip value,please set clip property.");
				var n = i._currentPlayState,
					s = i._playStateInfo,
					o = e ? i._statesMap[e] : a,
					l = o._clip._duration;
				n !== o ? (r !== Number.NEGATIVE_INFINITY ? s._resetPlayState(l * r) : s._resetPlayState(0),
					null !== n && n !== o && this._revertDefaultKeyframeNodes(n), i._playType = 0, i
					._currentPlayState = o) : r !== Number.NEGATIVE_INFINITY && (s._resetPlayState(l * r), i
					._playType = 0);
				var _ = o._scripts;
				if (_)
					for (var h = 0, c = _.length; h < c; h++) _[h].onStateEnter()
			} else console.warn("Invalid layerIndex " + t + ".")
		}
		crossFade(e, t, r = 0, i = Number.NEGATIVE_INFINITY) {
			var a = this._controllerLayers[r];
			if (a) {
				var n = a._statesMap[e];
				if (n) {
					var s = a._playType;
					if (-1 === s) return void this.play(e, r, i);
					var o = a._crossPlayStateInfo,
						l = a._crossNodesOwners,
						_ = a._crossNodesOwnersIndicesMap,
						h = a._currentPlayState,
						c = n._nodeOwners,
						d = a._destCrossClipNodeIndices,
						u = n._clip,
						f = u._nodes,
						m = u._nodesDic;
					switch (s) {
						case 0:
							var E = h._nodeOwners,
								T = a._srcCrossClipNodeIndices,
								p = h._clip,
								g = p._nodes,
								S = p._nodesDic;
							a._playType = 1;
							for (var v = ++a._crossMark, R = a._crossNodesOwnersCount = 0, I = 0, x = g
								.count; I < x; I++) {
								var A = g.getNodeByIndex(I),
									D = A._indexInList,
									M = E[D];
								if (M) {
									var L = A.fullPath;
									T[R] = D;
									var C = m[L];
									d[R] = C ? C._indexInList : -1, _[L] = v, l[R] = M, R++
								}
							}
							for (I = 0, x = f.count; I < x; I++) {
								var y = (C = f.getNodeByIndex(I))._indexInList,
									O = c[y];
								if (O) {
									var N = C.fullPath;
									S[N] || (T[R] = -1, d[R] = y, _[N] = v, l[R] = O, R++)
								}
							}
							break;
						case 1:
						case 2:
							for (a._playType = 2, I = 0, x = l.length; I < x; I++) {
								var P = l[I];
								P.saveCrossFixedValue(), C = m[P.fullPath], d[I] = C ? C._indexInList : -1
							}
							for (R = a._crossNodesOwnersCount, v = a._crossMark, I = 0, x = f.count; I < x; I++)
								(O = c[y = (C = f.getNodeByIndex(I))._indexInList]) && _[N = C.fullPath] !==
								v && (d[R] = y, _[N] = v, P = c[y], l[R] = P, P.saveCrossFixedValue(), R++)
					}
					a._crossNodesOwnersCount = R, a._crossPlayState = n, a._crossDuration = h._clip._duration *
						t, i !== Number.NEGATIVE_INFINITY ? o._resetPlayState(u._duration * i) : o
						._resetPlayState(0);
					var w = n._scripts;
					if (w)
						for (I = 0, x = w.length; I < x; I++) w[I].onStateEnter()
				} else console.warn("Invalid name " + r + ".")
			} else console.warn("Invalid layerIndex " + r + ".")
		}
		get avatar() {
			return this._avatar
		}
		set avatar(e) {
			if (this._avatar !== e)
				if (this._avatar = e, e) this._getAvatarOwnersAndInitDatasAsync(), this.owner
					._changeHierarchyAnimatorAvatar(this, e);
				else {
					var t = this.owner._parent;
					this.owner._changeHierarchyAnimatorAvatar(this, t ? t._hierarchyAnimator._avatar : null)
				}
		}
		_getAvatarOwnersAndInitDatasAsync() {
			for (var e = 0, t = this._controllerLayers.length; e < t; e++)
				for (var r = this._controllerLayers[e]._states, i = 0, a = r.length; i < a; i++) this
					._getOwnersByClip(r[i]);
			for (var n in this._avatar._cloneDatasToAnimator(this), this._linkAvatarSpritesData) {
				var s = this._linkAvatarSpritesData[n];
				if (s)
					for (var o = 0, l = s.length; o < l; o++) this._isLinkSpriteToAnimationNode(s[o], n, !0)
			}
		}
		_isLinkSpriteToAnimationNode(e, t, r) {
			if (this._avatar) {
				var i = this._avatarNodeMap[t];
				if (i)
					if (r) {
						e._transform._dummy = i.transform, this._linkAvatarSprites.push(e);
						var a = i.transform,
							n = e.transform;
						if (!n.owner.isStatic && a) {
							var s = n.worldMatrix,
								o = this.owner._transform._parent;
							if (o) A.matrix4x4MultiplyMFM(o.worldMatrix, a.getWorldMatrix(), s);
							else
								for (var l = s.elements, _ = a.getWorldMatrix(), h = 0; h < 16; h++) l[h] = _[
								h];
							n.worldMatrix = s
						}
					} else e._transform._dummy = null, this._linkAvatarSprites.splice(this._linkAvatarSprites
						.indexOf(e), 1)
			}
		}
		_isLinkSpriteToAnimationNodeData(e, t, r) {
			var i = this._linkAvatarSpritesData[t];
			if (r) i || (this._linkAvatarSpritesData[t] = i = []), i.push(e);
			else {
				var a = i.indexOf(e);
				i.splice(a, 1)
			}
		}
		_updateAvatarNodesToSprite() {
			for (var e = 0, t = this._linkAvatarSprites.length; e < t; e++) {
				var r = this._linkAvatarSprites[e],
					i = r.transform._dummy,
					a = r.transform;
				if (!a.owner.isStatic && i) {
					var n = a.worldMatrix,
						s = this.owner._transform;
					A.matrix4x4MultiplyMFM(s.worldMatrix, i.getWorldMatrix(), n), a.worldMatrix = n
				}
			}
		}
		linkSprite3DToAvatarNode(e, t) {
			return this._isLinkSpriteToAnimationNodeData(t, e, !0), this._isLinkSpriteToAnimationNode(t, e, !0),
				!0
		}
		unLinkSprite3DToAvatarNode(e) {
			if (e._hierarchyAnimator === this) {
				var t = e.transform._dummy;
				if (t) {
					var r = t._owner.name;
					return this._isLinkSpriteToAnimationNodeData(e, r, !1), this._isLinkSpriteToAnimationNode(e,
						r, !1), !0
				}
				return !1
			}
			throw "Animator:sprite3D must belong to this Animator"
		}
		_updateAnimationNodeWorldMatix(e, r, i, a, n) {
			t.LayaGL.instance.updateAnimationNodeWorldMatix(e, r, i, n, a)
		}
	}
	O._tempVector30 = new n, O._tempVector31 = new n, O._tempQuaternion0 = new u, O._tempQuaternion1 = new u, O
		.CULLINGMODE_ALWAYSANIMATE = 0, O.CULLINGMODE_CULLCOMPLETELY = 2;
	class N {
		constructor() {
			this.source = null, this.destination = null, this.camera = null, this.compositeShaderData = null, this
				.command = null, this.deferredReleaseTextures = []
		}
	}
	class P {
		constructor() {}
	}
	P._instance = new P;
	class w extends t.BaseTexture {
		constructor(e, r, i = t.RenderTextureFormat.R8G8B8, a = t.RenderTextureDepthFormat.DEPTH_16) {
			super(i, !1), this._inPool = !1, this._glTextureType = t.LayaGL.instance.TEXTURE_2D, this._width =
				e, this._height = r, this._depthStencilFormat = a, this._create(e, r)
		}
		static get currentActive() {
			return w._currentActive
		}
		static createFromPool(e, r, i = t.RenderTextureFormat.R8G8B8, a = t.RenderTextureDepthFormat.DEPTH_16, n = t
			.BaseTexture.FILTERMODE_BILINEAR) {
			for (var s, o = 0, l = w._pool.length; o < l; o++)
				if ((s = w._pool[o])._width == e && s._height == r && s._format == i && s._depthStencilFormat ==
					a && s._filterMode == n) {
					s._inPool = !1;
					var _ = w._pool[l - 1];
					return w._pool[o] = _, w._pool.length -= 1, s
				} return (s = new w(e, r, i, a)).filterMode = n, s.lock = !0, s
		}
		static recoverToPool(e) {
			e._inPool || (w._pool.push(e), e._inPool = !0)
		}
		get depthStencilFormat() {
			return this._depthStencilFormat
		}
		get defaulteTexture() {
			return t.Texture2D.grayTexture
		}
		_texImage2D(e, r, i, a) {
			switch (this._format) {
				case t.RenderTextureFormat.R8G8B8:
					e.texImage2D(r, 0, e.RGB, i, a, 0, e.RGB, e.UNSIGNED_BYTE, null);
					break;
				case t.RenderTextureFormat.R8G8B8A8:
					e.texImage2D(r, 0, e.RGBA, i, a, 0, e.RGBA, e.UNSIGNED_BYTE, null);
					break;
				case t.RenderTextureFormat.Alpha8:
					e.texImage2D(r, 0, e.ALPHA, i, a, 0, e.ALPHA, e.UNSIGNED_BYTE, null);
					break;
				case t.RenderTextureFormat.R16G16B16A16:
					t.LayaGL.layaGPUInstance._isWebGL2 ? e.texImage2D(this._glTextureType, 0, e.RGBA16F, i, a,
						0, e.RGBA, e.HALF_FLOAT, null) : e.texImage2D(this._glTextureType, 0, e.RGBA, i, a,
						0, e.RGBA, t.LayaGL.layaGPUInstance._oesTextureHalfFloat.HALF_FLOAT_OES, null)
			}
		}
		_create(e, r) {
			var i = t.LayaGL.instance;
			if (this._frameBuffer = i.createFramebuffer(), t.WebGLContext.bindTexture(i, this._glTextureType,
					this._glTexture), this._texImage2D(i, this._glTextureType, e, r), this._setGPUMemory(e * r *
					4), i.bindFramebuffer(i.FRAMEBUFFER, this._frameBuffer), i.framebufferTexture2D(i
					.FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, this._glTexture, 0), this
				._depthStencilFormat !== t.RenderTextureDepthFormat.DEPTHSTENCIL_NONE) switch (this
				._depthStencilBuffer = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, this
					._depthStencilBuffer), this._depthStencilFormat) {
				case t.RenderTextureDepthFormat.DEPTH_16:
					i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_COMPONENT16, e, r), i
						.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.RENDERBUFFER, this
							._depthStencilBuffer);
					break;
				case t.RenderTextureDepthFormat.STENCIL_8:
					i.renderbufferStorage(i.RENDERBUFFER, i.STENCIL_INDEX8, e, r), i
						.framebufferRenderbuffer(i.FRAMEBUFFER, i.STENCIL_ATTACHMENT, i.RENDERBUFFER, this
							._depthStencilBuffer);
					break;
				case t.RenderTextureDepthFormat.DEPTHSTENCIL_16_8:
					i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_STENCIL, e, r), i.framebufferRenderbuffer(
						i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.RENDERBUFFER, this
						._depthStencilBuffer);
					break;
				default:
					throw "RenderTexture: unkonw depth format."
			}
			i.bindFramebuffer(i.FRAMEBUFFER, null), i.bindRenderbuffer(i.RENDERBUFFER, null), this._setWarpMode(
					i.TEXTURE_WRAP_S, this._wrapModeU), this._setWarpMode(i.TEXTURE_WRAP_T, this._wrapModeV),
				this._setFilterMode(this._filterMode), this._setAnisotropy(this._anisoLevel), this._readyed = !
				0, this._activeResource()
		}
		_start() {
			var e = t.LayaGL.instance;
			e.bindFramebuffer(e.FRAMEBUFFER, this._frameBuffer), w._currentActive = this, this._readyed = !1
		}
		_end() {
			var e = t.LayaGL.instance;
			e.bindFramebuffer(e.FRAMEBUFFER, null), w._currentActive = null, this._readyed = !0
		}
		getData(e, r, i, a, n) {
			if (t.Render.isConchApp && 2 == window.conchConfig.threadMode)
			throw "native 2 thread mode use getDataAsync";
			var s = t.LayaGL.instance;
			return s.bindFramebuffer(s.FRAMEBUFFER, this._frameBuffer), s.checkFramebufferStatus(s
				.FRAMEBUFFER) === s.FRAMEBUFFER_COMPLETE ? (s.readPixels(e, r, i, a, s.RGBA, s.UNSIGNED_BYTE,
					n), s.bindFramebuffer(s.FRAMEBUFFER, null), n) : (s.bindFramebuffer(s.FRAMEBUFFER, null),
					null)
		}
		getDataAsync(e, r, i, a, n) {
			var s = t.LayaGL.instance;
			s.bindFramebuffer(s.FRAMEBUFFER, this._frameBuffer), s.readPixelsAsync(e, r, i, a, s.RGBA, s
				.UNSIGNED_BYTE,
				function(e) {
					n(new Uint8Array(e))
				}), s.bindFramebuffer(s.FRAMEBUFFER, null)
		}
		_disposeResource() {
			if (this._frameBuffer) {
				var e = t.LayaGL.instance;
				e.deleteTexture(this._glTexture), e.deleteFramebuffer(this._frameBuffer), e.deleteRenderbuffer(
						this._depthStencilBuffer), this._glTexture = null, this._frameBuffer = null, this
					._depthStencilBuffer = null, this._setGPUMemory(0)
			}
		}
	}
	w._pool = [];
	class V {
		constructor() {
			this._mask = [], this._length = 0
		}
		_intersectionDefineDatas(e) {
			for (var t = e._mask, r = this._mask, i = this._length - 1; i >= 0; i--) {
				var a = r[i] & t[i];
				0 == a && i == this._length - 1 ? this._length-- : r[i] = a
			}
		}
		add(e) {
			var t = e._index,
				r = t + 1,
				i = this._mask,
				a = i.length;
			if (a < r) {
				for (i.length = r; a < t; a++) i[a] = 0;
				i[t] = e._value, this._length = r
			} else r > this._length ? (i[t] = e._value, this._length = r) : i[t] |= e._value
		}
		remove(e) {
			var t = e._index,
				r = this._mask,
				i = this._length - 1;
			if (!(t > i)) {
				var a = r[t] & ~e._value;
				t == i && 0 === a ? this._length-- : r[t] = a
			}
		}
		addDefineDatas(e) {
			var t = e._mask,
				r = e._length,
				i = this._mask,
				a = i.length;
			if (a < r) {
				i.length = r;
				for (var n = 0; n < a; n++) i[n] |= t[n];
				for (; a < r; a++) i[a] = t[a];
				this._length = r
			} else {
				for (n = 0; n < r; n++) i[n] |= t[n];
				this._length = Math.max(this._length, r)
			}
		}
		removeDefineDatas(e) {
			for (var t = e._mask, r = this._mask, i = this._length - 1, a = e._length - 1; a >= 0; a--)
				if (!(a > i)) {
					var n = r[a] & ~t[a];
					a == i && 0 === n ? (i--, this._length--) : r[a] = n
				}
		}
		has(e) {
			var t = e._index;
			return !(t >= this._length) && 0 != (this._mask[t] & e._value)
		}
		clear() {
			this._length = 0
		}
		cloneTo(e) {
			var t = e,
				r = t._mask,
				i = this._mask,
				a = this._length;
			r.length = a;
			for (var n = 0; n < a; n++) r[n] = i[n];
			t._length = a
		}
		clone() {
			var e = new V;
			return this.cloneTo(e), e
		}
	}
	class b {
		constructor(e, t) {
			this._index = e, this._value = t
		}
	}
	class F {
		constructor(e, t, r, i) {
			this._attributeMap = null, this._uniformMap = null, this._enableInstancing = !1, this._subShaders = [],
				this._name = e, this._attributeMap = t, this._uniformMap = r, this._enableInstancing = i
		}
		static _getNamesByDefineData(e, t) {
			var r = F._maskMap,
				i = e._mask;
			t.length = 0;
			for (var a = 0, n = e._length; a < n; a++)
				for (var s = r[a], o = i[a], l = 0; l < 32; l++) {
					var _ = 1 << l;
					if (o > 0 && _ > o) break;
					o & _ && t.push(s[_])
				}
		}
		static getDefineByName(e) {
			var t = F._defineMap[e];
			if (!t) {
				var r = F._maskMap,
					i = F._defineCounter,
					a = Math.floor(i / 32),
					n = 1 << i % 32;
				t = new b(a, n), F._defineMap[e] = t, a == r.length && (r.length++, r[a] = {}), r[a][n] = e, F
					._defineCounter++
			}
			return t
		}
		static propertyNameToID(e) {
			if (null != F._propertyNameMap[e]) return F._propertyNameMap[e];
			var t = F._propertyNameCounter++;
			return F._propertyNameMap[e] = t, t
		}
		static addInclude(e, r) {
			r = r.replace(t.ShaderCompile._clearCR, ""), t.ShaderCompile.addInclude(e, r)
		}
		static compileShaderByDefineNames(e, r, i, a) {
			var n = F.find(e);
			if (n) {
				var o = n.getSubShaderAt(r);
				if (o) {
					var l = o._passes[i];
					if (l) {
						var _ = F._compileDefineDatas;
						_.clear();
						for (var h = 0, c = a.length; h < c; h++) _.add(F.getDefineByName(a[h]));
						t.WebGL.shaderHighPrecision && _.add(F.SHADERDEFINE_HIGHPRECISION), s._config
							._multiLighting || _.add(F.SHADERDEFINE_LEGACYSINGALLIGHTING), l.withCompile(_)
					} else console.warn("Shader3D: unknown passIndex.")
				} else console.warn("Shader3D: unknown subShaderIndex.")
			} else console.warn("Shader3D: unknown shader name.")
		}
		static compileShader(e, r, i, ...a) {
			var n = F.find(e);
			if (n) {
				var o = n.getSubShaderAt(r);
				if (o) {
					var l = o._passes[i];
					if (l) {
						var _ = F._compileDefineDatas,
							h = _._mask;
						h.length = 0;
						for (var c = 0, d = a.length; c < d; c++) h.push(a[c]);
						_._length = a.length, t.WebGL.shaderHighPrecision && _.add(F.SHADERDEFINE_HIGHPRECISION), s
							._config._multiLighting || _.add(F.SHADERDEFINE_LEGACYSINGALLIGHTING), l.withCompile(_)
					} else console.warn("Shader3D: unknown passIndex.")
				} else console.warn("Shader3D: unknown subShaderIndex.")
			} else console.warn("Shader3D: unknown shader name.")
		}
		static add(e, t = null, r = null, i = !1) {
			return F._preCompileShader[e] = new F(e, t, r, i)
		}
		static find(e) {
			return F._preCompileShader[e]
		}
		addSubShader(e) {
			this._subShaders.push(e), e._owner = this
		}
		getSubShaderAt(e) {
			return this._subShaders[e]
		}
	}
	F._compileDefineDatas = new V, F.RENDER_STATE_CULL = 0, F.RENDER_STATE_BLEND = 1, F.RENDER_STATE_BLEND_SRC = 2, F
		.RENDER_STATE_BLEND_DST = 3, F.RENDER_STATE_BLEND_SRC_RGB = 4, F.RENDER_STATE_BLEND_DST_RGB = 5, F
		.RENDER_STATE_BLEND_SRC_ALPHA = 6, F.RENDER_STATE_BLEND_DST_ALPHA = 7, F.RENDER_STATE_BLEND_CONST_COLOR = 8, F
		.RENDER_STATE_BLEND_EQUATION = 9, F.RENDER_STATE_BLEND_EQUATION_RGB = 10, F.RENDER_STATE_BLEND_EQUATION_ALPHA =
		11, F.RENDER_STATE_DEPTH_TEST = 12, F.RENDER_STATE_DEPTH_WRITE = 13, F.PERIOD_CUSTOM = 0, F.PERIOD_MATERIAL = 1,
		F.PERIOD_SPRITE = 2, F.PERIOD_CAMERA = 3, F.PERIOD_SCENE = 4, F._propertyNameCounter = 0, F
		._propertyNameMap = {}, F._defineCounter = 0, F._defineMap = {}, F._preCompileShader = {}, F._maskMap = [], F
		.debugMode = !0;
	class B {
		constructor(e = null) {
			this._ownerResource = null, this._data = null, this._defineDatas = new V, this._runtimeCopyValues = [],
				this._ownerResource = e, this._initData()
		}
		_initData() {
			this._data = new Object
		}
		getData() {
			return this._data
		}
		addDefine(e) {
			this._defineDatas.add(e)
		}
		removeDefine(e) {
			this._defineDatas.remove(e)
		}
		hasDefine(e) {
			return this._defineDatas.has(e)
		}
		clearDefine() {
			this._defineDatas.clear()
		}
		getBool(e) {
			return this._data[e]
		}
		setBool(e, t) {
			this._data[e] = t
		}
		getInt(e) {
			return this._data[e]
		}
		setInt(e, t) {
			this._data[e] = t
		}
		getNumber(e) {
			return this._data[e]
		}
		setNumber(e, t) {
			this._data[e] = t
		}
		getVector2(e) {
			return this._data[e]
		}
		setVector2(e, t) {
			this._data[e] = t
		}
		getVector3(e) {
			return this._data[e]
		}
		setVector3(e, t) {
			this._data[e] = t
		}
		getVector(e) {
			return this._data[e]
		}
		setVector(e, t) {
			this._data[e] = t
		}
		getQuaternion(e) {
			return this._data[e]
		}
		setQuaternion(e, t) {
			this._data[e] = t
		}
		getMatrix4x4(e) {
			return this._data[e]
		}
		setMatrix4x4(e, t) {
			this._data[e] = t
		}
		getBuffer(e) {
			return this._data[e]
		}
		setBuffer(e, t) {
			this._data[e] = t
		}
		setTexture(e, t) {
			var r = this._data[e];
			this._data[e] = t, this._ownerResource && this._ownerResource.referenceCount > 0 && (r && r
				._removeReference(), t && t._addReference())
		}
		getTexture(e) {
			return this._data[e]
		}
		setAttribute(e, t) {
			this._data[e] = t
		}
		getAttribute(e) {
			return this._data[e]
		}
		getLength() {
			return this._data.length
		}
		setLength(e) {
			this._data.length = e
		}
		cloneTo(e) {
			var r = e,
				s = r._data;
			for (var o in this._data) {
				var l = this._data[o];
				if (null != l)
					if ("number" == typeof l) s[o] = l;
					else if ("number" == typeof l) s[o] = l;
				else if ("boolean" == typeof l) s[o] = l;
				else if (l instanceof i) {
					var _ = s[o] || (s[o] = new i);
					l.cloneTo(_), s[o] = _
				} else if (l instanceof n) {
					var h = s[o] || (s[o] = new n);
					l.cloneTo(h), s[o] = h
				} else if (l instanceof a) {
					var c = s[o] || (s[o] = new a);
					l.cloneTo(c), s[o] = c
				} else if (l instanceof p) {
					var d = s[o] || (s[o] = new p);
					l.cloneTo(d), s[o] = d
				} else l instanceof t.BaseTexture && (s[o] = l)
			}
			this._defineDatas.cloneTo(r._defineDatas)
		}
		clone() {
			var e = new B;
			return this.cloneTo(e), e
		}
		cloneToForNative(e) {
			var r = e;
			this._int32Data.length - r._int32Data.length > 0 && r.needRenewArrayBufferForNative(this._int32Data
				.length), r._int32Data.set(this._int32Data, 0);
			var s = r._nativeArray,
				o = this._nativeArray.length;
			s.length = o;
			for (var l = 0; l < o; l++) {
				var _ = this._nativeArray[l];
				if (_)
					if ("number" == typeof _) s[l] = _, r.setNumber(l, _);
					else if ("number" == typeof _) s[l] = _, r.setInt(l, _);
				else if ("boolean" == typeof _) s[l] = _, r.setBool(l, _);
				else if (_ instanceof i) {
					var h = s[l] || (s[l] = new i);
					_.cloneTo(h), s[l] = h, r.setVector2(l, h)
				} else if (_ instanceof n) {
					var c = s[l] || (s[l] = new n);
					_.cloneTo(c), s[l] = c, r.setVector3(l, c)
				} else if (_ instanceof a) {
					var d = s[l] || (s[l] = new a);
					_.cloneTo(d), s[l] = d, r.setVector(l, d)
				} else if (_ instanceof p) {
					var u = s[l] || (s[l] = new p);
					_.cloneTo(u), s[l] = u, r.setMatrix4x4(l, u)
				} else _ instanceof t.BaseTexture && (s[l] = _, r.setTexture(l, _))
			}
			this._defineDatas.cloneTo(r._defineDatas)
		}
		_initDataForNative() {
			this._frameCount = -1, this._runtimeCopyValues.length = 0, this._nativeArray = [], this._data =
				new ArrayBuffer(32), this._int32Data = new Int32Array(this._data), this._float32Data =
				new Float32Array(this._data), t.LayaGL.instance.createArrayBufferRef(this._data, t.LayaGL
					.ARRAY_BUFFER_TYPE_DATA, !0)
		}
		needRenewArrayBufferForNative(e) {
			if (e >= this._int32Data.length) {
				var r = 4 * (e + 1),
					i = this._int32Data,
					a = this._data.conchRef,
					n = this._data._ptrID;
				this._data = new ArrayBuffer(r), this._int32Data = new Int32Array(this._data), this._float32Data =
					new Float32Array(this._data), this._data.conchRef = a, this._data._ptrID = n, i && this
					._int32Data.set(i, 0);
				var s = t.LayaGL.instance;
				s.updateArrayBufferRef ? s.updateArrayBufferRef(this._data._ptrID, a.isSyncToRender(), this._data) :
					window.conch.updateArrayBufferRef(this._data._ptrID, a.isSyncToRender(), this._data)
			}
		}
		getDataForNative() {
			return this._nativeArray
		}
		getIntForNative(e) {
			return this._int32Data[e]
		}
		setIntForNative(e, t) {
			this.needRenewArrayBufferForNative(e), this._int32Data[e] = t, this._nativeArray[e] = t
		}
		getBoolForNative(e) {
			return 1 == this._int32Data[e]
		}
		setBoolForNative(e, t) {
			this.needRenewArrayBufferForNative(e), this._int32Data[e] = t ? 1 : 0, this._nativeArray[e] = t
		}
		getNumberForNative(e) {
			return this._float32Data[e]
		}
		setNumberForNative(e, t) {
			this.needRenewArrayBufferForNative(e), this._float32Data[e] = t, this._nativeArray[e] = t
		}
		getMatrix4x4ForNative(e) {
			return this._nativeArray[e]
		}
		setMatrix4x4ForNative(e, t) {
			this.needRenewArrayBufferForNative(e), this._nativeArray[e] = t;
			var r = this.setReferenceForNative(t.elements);
			this._int32Data[e] = r
		}
		getVectorForNative(e) {
			return this._nativeArray[e]
		}
		setVectorForNative(e, t) {
			this.needRenewArrayBufferForNative(e), this._nativeArray[e] = t, t.elements || t.forNativeElement();
			var r = this.setReferenceForNative(t.elements);
			this._int32Data[e] = r
		}
		getVector2ForNative(e) {
			return this._nativeArray[e]
		}
		setVector2ForNative(e, t) {
			this.needRenewArrayBufferForNative(e), this._nativeArray[e] = t, t.elements || t.forNativeElement();
			var r = this.setReferenceForNative(t.elements);
			this._int32Data[e] = r
		}
		getVector3ForNative(e) {
			return this._nativeArray[e]
		}
		setVector3ForNative(e, t) {
			this.needRenewArrayBufferForNative(e), this._nativeArray[e] = t, t.elements || t.forNativeElement();
			var r = this.setReferenceForNative(t.elements);
			this._int32Data[e] = r
		}
		getQuaternionForNative(e) {
			return this._nativeArray[e]
		}
		setQuaternionForNative(e, t) {
			this.needRenewArrayBufferForNative(e), this._nativeArray[e] = t, t.elements || t.forNativeElement();
			var r = this.setReferenceForNative(t.elements);
			this._int32Data[e] = r
		}
		getBufferForNative(e) {
			return this._nativeArray[e]
		}
		setBufferForNative(e, t) {
			this.needRenewArrayBufferForNative(e), this._nativeArray[e] = t;
			var r = this.setReferenceForNative(t);
			this._int32Data[e] = r
		}
		getAttributeForNative(e) {
			return this._nativeArray[e]
		}
		setAttributeForNative(e, r) {
			this._nativeArray[e] = r, r._ptrID || t.LayaGL.instance.createArrayBufferRef(r, t.LayaGL
					.ARRAY_BUFFER_TYPE_DATA, !0), t.LayaGL.instance.syncBufferToRenderThread(r), this._int32Data[
				e] = r._ptrID
		}
		getTextureForNative(e) {
			return this._nativeArray[e]
		}
		setTextureForNative(e, t) {
			if (t) {
				this.needRenewArrayBufferForNative(e);
				var r = this._nativeArray[e];
				this._nativeArray[e] = t;
				var i = t._getSource() || t.defaulteTexture._getSource();
				this._int32Data[e] = i.id, this._ownerResource && this._ownerResource.referenceCount > 0 && (r && r
					._removeReference(), t && t._addReference())
			}
		}
		setReferenceForNative(e) {
			this.clearRuntimeCopyArray();
			var r = 0,
				i = 0;
			return B._SET_RUNTIME_VALUE_MODE_REFERENCE_ ? (t.LayaGL.instance.createArrayBufferRefs(e, t.LayaGL
				.ARRAY_BUFFER_TYPE_DATA, !0, t.LayaGL.ARRAY_BUFFER_REF_REFERENCE), r = 0, i = e.getPtrID(r)) : (
				t.LayaGL.instance.createArrayBufferRefs(e, t.LayaGL.ARRAY_BUFFER_TYPE_DATA, !0, t.LayaGL
					.ARRAY_BUFFER_REF_COPY), r = e.getRefNum() - 1, i = e.getPtrID(r), this._runtimeCopyValues
				.push({
					obj: e,
					refID: r,
					ptrID: i
				})), t.LayaGL.instance.syncBufferToRenderThread(e, r), i
		}
		static setRuntimeValueMode(e) {
			B._SET_RUNTIME_VALUE_MODE_REFERENCE_ = e
		}
		clearRuntimeCopyArray() {
			var e = t.Stat.loopCount;
			if (this._frameCount != e) {
				this._frameCount = e;
				for (var r = 0, i = this._runtimeCopyValues.length; r < i; r++) {
					this._runtimeCopyValues[r].obj.clearRefNum()
				}
				this._runtimeCopyValues.length = 0
			}
		}
	}
	B._SET_RUNTIME_VALUE_MODE_REFERENCE_ = !0;
	class U {
		constructor() {
			this._compositeShader = F.find("PostProcessComposite"), this._compositeShaderData = new B, this
				._context = null, this._effects = [], this._context = new N, this._context.compositeShaderData =
				this._compositeShaderData
		}
		static __init__() {
			U.SHADERDEFINE_BLOOM_LOW = F.getDefineByName("BLOOM_LOW"), U.SHADERDEFINE_BLOOM = F.getDefineByName(
				"BLOOM"), U.SHADERDEFINE_FINALPASS = F.getDefineByName("FINALPASS")
		}
		_init(e, t) {
			this._context.camera = e, this._context.command = t
		}
		_render() {
			var e = B._SET_RUNTIME_VALUE_MODE_REFERENCE_;
			t.ILaya.Render.supportWebGLPlusRendering && B.setRuntimeValueMode(!1);
			var r = this._context.camera,
				i = w.createFromPool(P.clientWidth, P.clientHeight, r._getRenderTextureFormat(), t
					.RenderTextureDepthFormat.DEPTHSTENCIL_NONE),
				a = r._renderTexture;
			this._context.command.clear(), this._context.source = i, this._context.destination = a, this._context
				.compositeShaderData.clearDefine(), this._context.command.blitScreenTriangle(a, i), this._context
				.compositeShaderData.setTexture(U.SHADERVALUE_AUTOEXPOSURETEX, t.Texture2D.whiteTexture);
			for (var n = 0, s = this._effects.length; n < s; n++) this._effects[n].render(this._context);
			this._compositeShaderData.addDefine(U.SHADERDEFINE_FINALPASS);
			var o = r.renderTarget,
				l = o || null;
			this._context.destination = l, this._context.command.blitScreenTriangle(this._context.source, l, this
				._compositeShader, this._compositeShaderData), w.recoverToPool(i);
			var _ = this._context.deferredReleaseTextures;
			for (n = 0, s = _.length; n < s; n++) w.recoverToPool(_[n]);
			_.length = 0, t.ILaya.Render.supportWebGLPlusRendering && B.setRuntimeValueMode(e)
		}
		addEffect(e) {
			this._effects.push(e)
		}
		removeEffect(e) {
			var t = this._effects.indexOf(e); - 1 !== t && this._effects.splice(t, 1)
		}
	}
	U.SHADERVALUE_MAINTEX = F.propertyNameToID("u_MainTex"), U.SHADERVALUE_BLOOMTEX = F.propertyNameToID("u_BloomTex"),
		U.SHADERVALUE_AUTOEXPOSURETEX = F.propertyNameToID("u_AutoExposureTex"), U.SHADERVALUE_BLOOM_DIRTTEX = F
		.propertyNameToID("u_Bloom_DirtTex"), U.SHADERVALUE_BLOOMTEX_TEXELSIZE = F.propertyNameToID(
			"u_BloomTex_TexelSize"), U.SHADERVALUE_BLOOM_DIRTTILEOFFSET = F.propertyNameToID("u_Bloom_DirtTileOffset"),
		U.SHADERVALUE_BLOOM_SETTINGS = F.propertyNameToID("u_Bloom_Settings"), U.SHADERVALUE_BLOOM_COLOR = F
		.propertyNameToID("u_Bloom_Color");
	class G extends t.EventDispatcher {
		constructor(e, r = null, i = null, a = null, s = null) {
			super(), this._owner = e, this._children = [], this._localMatrix = new Float32Array(16), t.Render
				.supportWebGLPlusAnimation ? (this._localPosition = new T(0, 0, 0, r), this._localRotation =
					new g(0, 0, 0, 1, i), this._localScale = new T(0, 0, 0, a), this._worldMatrix = s) : (this
					._localPosition = new n, this._localRotation = new u, this._localScale = new n, this
					._worldMatrix = new Float32Array(16)), this._localQuaternionUpdate = !1, this
				._locaEulerlUpdate = !1, this._localUpdate = !1, this._worldUpdate = !0
		}
		_getlocalMatrix() {
			return this._localUpdate && (A._createAffineTransformationArray(this._localPosition, this
					._localRotation, this._localScale, this._localMatrix), this._localUpdate = !1), this
				._localMatrix
		}
		_onWorldTransform() {
			if (!this._worldUpdate) {
				this._worldUpdate = !0, this.event(t.Event.TRANSFORM_CHANGED);
				for (var e = 0, r = this._children.length; e < r; e++) this._children[e]._onWorldTransform()
			}
		}
		get localPosition() {
			return this._localPosition
		}
		set localPosition(e) {
			this._localPosition = e, this._localUpdate = !0, this._onWorldTransform()
		}
		get localRotation() {
			if (this._localQuaternionUpdate) {
				var e = this._localRotationEuler;
				u.createFromYawPitchRoll(e.y / G._angleToRandin, e.x / G._angleToRandin, e.z / G._angleToRandin,
					this._localRotation), this._localQuaternionUpdate = !1
			}
			return this._localRotation
		}
		set localRotation(e) {
			this._localRotation = e, this._locaEulerlUpdate = !0, this._localQuaternionUpdate = !1, this
				._localUpdate = !0, this._onWorldTransform()
		}
		get localScale() {
			return this._localScale
		}
		set localScale(e) {
			this._localScale = e, this._localUpdate = !0, this._onWorldTransform()
		}
		get localRotationEuler() {
			if (this._locaEulerlUpdate) {
				this._localRotation.getYawPitchRoll(G._tempVector3);
				var e = G._tempVector3,
					t = this._localRotationEuler;
				t.x = e.y * G._angleToRandin, t.y = e.x * G._angleToRandin, t.z = e.z * G._angleToRandin, this
					._locaEulerlUpdate = !1
			}
			return this._localRotationEuler
		}
		set localRotationEuler(e) {
			this._localRotationEuler = e, this._locaEulerlUpdate = !1, this._localQuaternionUpdate = !0, this
				._localUpdate = !0, this._onWorldTransform()
		}
		getWorldMatrix() {
			if (!t.Render.supportWebGLPlusAnimation && this._worldUpdate) {
				if (null != this._parent) A.matrix4x4MultiplyFFF(this._parent.getWorldMatrix(), this
					._getlocalMatrix(), this._worldMatrix);
				else {
					var e = this._worldMatrix;
					e[1] = e[2] = e[3] = e[4] = e[6] = e[7] = e[8] = e[9] = e[11] = e[12] = e[13] = e[14] = 0,
						e[0] = e[5] = e[10] = e[15] = 1
				}
				this._worldUpdate = !1
			}
			return t.Render.supportWebGLPlusAnimation && this._worldUpdate && (this._worldUpdate = !1), this
				._worldMatrix
		}
		setParent(e) {
			if (this._parent !== e) {
				if (this._parent) {
					var t = this._parent._children,
						r = t.indexOf(this);
					t.splice(r, 1)
				}
				e && (e._children.push(this), e && this._onWorldTransform()), this._parent = e
			}
		}
	}
	G._tempVector3 = new n, G._angleToRandin = 180 / Math.PI;
	class z {
		constructor(e = null, t = null, r = null, i = null) {
			this._children = [], this.transform = new G(this, e, t, r, i)
		}
		addChild(e) {
			e._parent = this, e.transform.setParent(this.transform), this._children.push(e)
		}
		removeChild(e) {
			var t = this._children.indexOf(e); - 1 !== t && this._children.splice(t, 1)
		}
		getChildByName(e) {
			for (var t = 0, r = this._children.length; t < r; t++) {
				var i = this._children[t];
				if (i.name === e) return i
			}
			return null
		}
		getChildByIndex(e) {
			return this._children[e]
		}
		getChildCount() {
			return this._children.length
		}
		cloneTo(e) {
			var t = e;
			t.name = this.name;
			for (var r = 0, i = this._children.length; r < i; r++) {
				var a = this._children[r],
					n = a.clone();
				t.addChild(n);
				var s = a.transform,
					o = n.transform,
					l = o.localPosition,
					_ = o.localRotation,
					h = o.localScale;
				s.localPosition.cloneTo(l), s.localRotation.cloneTo(_), s.localScale.cloneTo(h), o.localPosition =
					l, o.localRotation = _, o.localScale = h
			}
		}
		clone() {
			var e = new z;
			return this.cloneTo(e), e
		}
		_cloneNative(e, t, r, i, a, n, s) {
			var o = s._nativeCurCloneCount;
			a[o] = n;
			var l = new Float32Array(e.buffer, 3 * o * 4, 3),
				_ = new Float32Array(t.buffer, 4 * o * 4, 4),
				h = new Float32Array(r.buffer, 3 * o * 4, 3),
				c = new Float32Array(i.buffer, 16 * o * 4, 16),
				d = new z(l, _, h, c);
			return d._worldMatrixIndex = o, this._cloneToNative(d, e, t, r, i, a, o, s), d
		}
		_cloneToNative(e, t, r, i, a, n, s, o) {
			var l = e;
			l.name = this.name;
			for (var _ = 0, h = this._children.length; _ < h; _++) {
				var c = this._children[_];
				o._nativeCurCloneCount++;
				var d = c._cloneNative(t, r, i, a, n, s, o);
				l.addChild(d);
				var u = c.transform,
					f = d.transform,
					m = f.localPosition,
					E = f.localRotation,
					T = f.localScale;
				u.localPosition.cloneTo(m), u.localRotation.cloneTo(E), u.localScale.cloneTo(T), f.localPosition =
					m, f.localRotation = E, f.localScale = T
			}
		}
	}
	class H extends t.Resource {
		constructor() {
			super(), this._nativeNodeCount = 0, this._nativeCurCloneCount = 0
		}
		static _parse(e, r = null, i = null) {
			var a = new H;
			if (a._rootNode = new z(new Float32Array(3), new Float32Array(4), new Float32Array(3),
					new Float32Array(16)), t.Render.supportWebGLPlusAnimation && a._nativeNodeCount++, e
				.version) {
				var n = e.rootNode;
				n && a._parseNode(n, a._rootNode)
			}
			return a
		}
		static load(e, r) {
			t.ILaya.loader.create(e, r, null, H.AVATAR)
		}
		_initCloneToAnimator(e, t) {
			t._avatarNodeMap[e.name] = e;
			for (var r = 0, i = e.getChildCount(); r < i; r++) this._initCloneToAnimator(e.getChildByIndex(r),
				t)
		}
		_parseNode(e, r) {
			var i = e.props.name;
			r.name = i;
			var a = e.props,
				n = r.transform,
				s = n.localPosition,
				o = n.localRotation,
				l = n.localScale;
			s.fromArray(a.translate), o.fromArray(a.rotation), l.fromArray(a.scale), n.localPosition = s, n
				.localRotation = o, n.localScale = l;
			for (var _ = e.child, h = 0, c = _.length; h < c; h++) {
				var d = _[h],
					u = new z(new Float32Array(3), new Float32Array(4), new Float32Array(3), new Float32Array(
						16));
				r.addChild(u), t.Render.supportWebGLPlusAnimation && this._nativeNodeCount++, this._parseNode(d,
					u)
			}
		}
		_cloneDatasToAnimator(e) {
			var t;
			t = this._rootNode.clone();
			var r = this._rootNode.transform,
				i = t.transform,
				a = i.localPosition,
				n = i.localRotation,
				s = i.localScale;
			r.localPosition.cloneTo(a), r.localRotation.cloneTo(n), r.localScale.cloneTo(s), i.localPosition =
				a, i.localRotation = n, i.localScale = s, e._avatarNodeMap = {}, this._initCloneToAnimator(t, e)
		}
		cloneTo(e) {
			var t = e,
				r = this._rootNode.clone();
			t._rootNode = r
		}
		clone() {
			var e = new H;
			return this.cloneTo(e), e
		}
		_cloneDatasToAnimatorNative(e) {
			var t = new Float32Array(3 * this._nativeNodeCount),
				r = new Float32Array(4 * this._nativeNodeCount),
				i = new Float32Array(3 * this._nativeNodeCount),
				a = new Float32Array(16 * this._nativeNodeCount),
				n = new Int16Array(this._nativeNodeCount);
			e._animationNodeLocalPositions = t, e._animationNodeLocalRotations = r, e
				._animationNodeLocalScales = i, e._animationNodeWorldMatrixs = a, e
				._animationNodeParentIndices = n, this._nativeCurCloneCount = 0;
			var s = this._rootNode._cloneNative(t, r, i, a, n, -1, this),
				o = this._rootNode.transform,
				l = s.transform,
				_ = l.localPosition,
				h = l.localRotation,
				c = l.localScale;
			o.localPosition.cloneTo(_), o.localRotation.cloneTo(h), o.localScale.cloneTo(c), l.localPosition =
				_, l.localRotation = h, l.localScale = c, e._avatarNodeMap = {}, this._initCloneToAnimator(s, e)
		}
	}
	H.AVATAR = "AVATAR";
	class W extends t.Resource {
		constructor() {
			super(), this._shaderValues = null, this._disablePublicDefineDatas = new V, this._shaderValues =
				new B(this), this.renderQueue = W.RENDERQUEUE_OPAQUE, this._alphaTest = !1
		}
		static load(e, r) {
			t.Laya.loader.create(e, r, null, W.MATERIAL)
		}
		static __initDefine__() {
			W.SHADERDEFINE_ALPHATEST = F.getDefineByName("ALPHATEST")
		}
		static _parse(e, r = null, s = null) {
			var o, l = e,
				_ = l.props,
				h = _.type,
				c = t.ClassUtils.getRegClass(h);
			if (!c) throw "_getSprite3DHierarchyInnerUrls 错误: " + e.type + " 不是类";
			switch (o = new c, l.version) {
				case "LAYAMATERIAL:01":
				case "LAYAMATERIAL:02":
					var d, u;
					for (var f in _) switch (f) {
						case "vectors":
							var m = _[f];
							for (d = 0, u = m.length; d < u; d++) {
								var E = m[d],
									T = E.value;
								switch (T.length) {
									case 2:
										o[E.name] = new i(T[0], T[1]);
										break;
									case 3:
										o[E.name] = new n(T[0], T[1], T[2]);
										break;
									case 4:
										o[E.name] = new a(T[0], T[1], T[2], T[3]);
										break;
									default:
										throw new Error("BaseMaterial:unkonwn color length.")
								}
							}
							break;
						case "textures":
							var p = _[f];
							for (d = 0, u = p.length; d < u; d++) {
								var g = p[d],
									S = g.path;
								S && (o[g.name] = t.Loader.getRes(S))
							}
							break;
						case "defines":
							var v = _[f];
							for (d = 0, u = v.length; d < u; d++) {
								var R = F.getDefineByName(v[d]);
								o._shaderValues.addDefine(R)
							}
							break;
						case "renderStates":
							var I = _[f][0],
								x = o;
							x.blend = I.blend, x.cull = I.cull, x.depthTest = I.depthTest, x.depthWrite = I
								.depthWrite, x.blendSrc = I.srcBlend, x.blendDst = I.dstBlend;
							break;
						case "cull":
							o.cull = _[f];
							break;
						case "blend":
							o.blend = _[f];
							break;
						case "depthWrite":
							o.depthWrite = _[f];
							break;
						case "srcBlend":
							o.blendSrc = _[f];
							break;
						case "dstBlend":
							o.blendDst = _[f];
							break;
						default:
							o[f] = _[f]
					}
					break;
				default:
					throw new Error("BaseMaterial:unkonwn version.")
			}
			return o
		}
		get alphaTestValue() {
			return this._shaderValues.getNumber(W.ALPHATESTVALUE)
		}
		set alphaTestValue(e) {
			this._shaderValues.setNumber(W.ALPHATESTVALUE, e)
		}
		get alphaTest() {
			return this._alphaTest
		}
		set alphaTest(e) {
			this._alphaTest = e, e ? this._shaderValues.addDefine(W.SHADERDEFINE_ALPHATEST) : this._shaderValues
				.removeDefine(W.SHADERDEFINE_ALPHATEST)
		}
		_removeTetxureReference() {
			var e = this._shaderValues.getData();
			for (var r in e) {
				var i = e[r];
				i && i instanceof t.BaseTexture && i._removeReference()
			}
		}
		_addReference(e = 1) {
			super._addReference(e);
			var r = this._shaderValues.getData();
			for (var i in r) {
				var a = r[i];
				a && a instanceof t.BaseTexture && a._addReference()
			}
		}
		_removeReference(e = 1) {
			super._removeReference(e), this._removeTetxureReference()
		}
		_disposeResource() {
			this._referenceCount > 0 && this._removeTetxureReference(), this._shaderValues = null
		}
		setShaderName(e) {
			if (this._shader = F.find(e), !this._shader) throw new Error("BaseMaterial: unknown shader name.")
		}
		cloneTo(e) {
			var t = e;
			t.name = this.name, t.renderQueue = this.renderQueue, this._disablePublicDefineDatas.cloneTo(t
				._disablePublicDefineDatas), this._shaderValues.cloneTo(t._shaderValues)
		}
		clone() {
			var e = new W;
			return this.cloneTo(e), e
		}
		get _defineDatas() {
			return this._shaderValues._defineDatas
		}
	}
	W.MATERIAL = "MATERIAL", W.RENDERQUEUE_OPAQUE = 2e3, W.RENDERQUEUE_ALPHATEST = 2450, W.RENDERQUEUE_TRANSPARENT =
		3e3, W.ALPHATESTVALUE = F.propertyNameToID("u_AlphaTestValue"), W.SHADERDEFINE_ALPHATEST = null;
	class k {}
	class X {
		constructor() {
			this.cull = X.CULL_BACK, this.blend = X.BLEND_DISABLE, this.srcBlend = X.BLENDPARAM_ONE, this.dstBlend =
				X.BLENDPARAM_ZERO, this.srcBlendRGB = X.BLENDPARAM_ONE, this.dstBlendRGB = X.BLENDPARAM_ZERO, this
				.srcBlendAlpha = X.BLENDPARAM_ONE, this.dstBlendAlpha = X.BLENDPARAM_ZERO, this.blendConstColor =
				new a(1, 1, 1, 1), this.blendEquation = X.BLENDEQUATION_ADD, this.blendEquationRGB = X
				.BLENDEQUATION_ADD, this.blendEquationAlpha = X.BLENDEQUATION_ADD, this.depthTest = X
				.DEPTHTEST_LEQUAL, this.depthWrite = !0
		}
		cloneTo(e) {
			var t = e;
			t.cull = this.cull, t.blend = this.blend, t.srcBlend = this.srcBlend, t.dstBlend = this.dstBlend, t
				.srcBlendRGB = this.srcBlendRGB, t.dstBlendRGB = this.dstBlendRGB, t.srcBlendAlpha = this
				.srcBlendAlpha, t.dstBlendAlpha = this.dstBlendAlpha, this.blendConstColor.cloneTo(t
					.blendConstColor), t.blendEquation = this.blendEquation, t.blendEquationRGB = this
				.blendEquationRGB, t.blendEquationAlpha = this.blendEquationAlpha, t.depthTest = this.depthTest, t
				.depthWrite = this.depthWrite
		}
		clone() {
			var e = new X;
			return this.cloneTo(e), e
		}
	}
	X.CULL_NONE = 0, X.CULL_FRONT = 1, X.CULL_BACK = 2, X.BLEND_DISABLE = 0, X.BLEND_ENABLE_ALL = 1, X
		.BLEND_ENABLE_SEPERATE = 2, X.BLENDPARAM_ZERO = 0, X.BLENDPARAM_ONE = 1, X.BLENDPARAM_SRC_COLOR = 768, X
		.BLENDPARAM_ONE_MINUS_SRC_COLOR = 769, X.BLENDPARAM_DST_COLOR = 774, X.BLENDPARAM_ONE_MINUS_DST_COLOR = 775, X
		.BLENDPARAM_SRC_ALPHA = 770, X.BLENDPARAM_ONE_MINUS_SRC_ALPHA = 771, X.BLENDPARAM_DST_ALPHA = 772, X
		.BLENDPARAM_ONE_MINUS_DST_ALPHA = 773, X.BLENDPARAM_SRC_ALPHA_SATURATE = 776, X.BLENDEQUATION_ADD = 32774, X
		.BLENDEQUATION_SUBTRACT = 32778, X.BLENDEQUATION_REVERSE_SUBTRACT = 32779, X.DEPTHTEST_OFF = 0, X
		.DEPTHTEST_NEVER = 512, X.DEPTHTEST_LESS = 513, X.DEPTHTEST_EQUAL = 514, X.DEPTHTEST_LEQUAL = 515, X
		.DEPTHTEST_GREATER = 516, X.DEPTHTEST_NOTEQUAL = 517, X.DEPTHTEST_GEQUAL = 518, X.DEPTHTEST_ALWAYS = 519;
	class Y extends W {
		constructor() {
			super(), this._enableVertexColor = !1, this.setShaderName("BLINNPHONG"), this._albedoIntensity = 1, this
				._albedoColor = new a(1, 1, 1, 1);
			var e = this._shaderValues;
			e.setVector(Y.ALBEDOCOLOR, new a(1, 1, 1, 1)), e.setVector(Y.MATERIALSPECULAR, new a(1, 1, 1, 1)), e
				.setNumber(Y.SHININESS, .078125), e.setNumber(W.ALPHATESTVALUE, .5), e.setVector(Y.TILINGOFFSET,
					new a(1, 1, 0, 0)), this._enableLighting = !0, this.renderMode = Y.RENDERMODE_OPAQUE
		}
		static __initDefine__() {
			Y.SHADERDEFINE_DIFFUSEMAP = F.getDefineByName("DIFFUSEMAP"), Y.SHADERDEFINE_NORMALMAP = F
				.getDefineByName("NORMALMAP"), Y.SHADERDEFINE_SPECULARMAP = F.getDefineByName("SPECULARMAP"), Y
				.SHADERDEFINE_TILINGOFFSET = F.getDefineByName("TILINGOFFSET"), Y.SHADERDEFINE_ENABLEVERTEXCOLOR = F
				.getDefineByName("ENABLEVERTEXCOLOR")
		}
		get _ColorR() {
			return this._albedoColor.x
		}
		set _ColorR(e) {
			this._albedoColor.x = e, this.albedoColor = this._albedoColor
		}
		get _ColorG() {
			return this._albedoColor.y
		}
		set _ColorG(e) {
			this._albedoColor.y = e, this.albedoColor = this._albedoColor
		}
		get _ColorB() {
			return this._albedoColor.z
		}
		set _ColorB(e) {
			this._albedoColor.z = e, this.albedoColor = this._albedoColor
		}
		get _ColorA() {
			return this._albedoColor.w
		}
		set _ColorA(e) {
			this._albedoColor.w = e, this.albedoColor = this._albedoColor
		}
		get _SpecColorR() {
			return this._shaderValues.getVector(Y.MATERIALSPECULAR).x
		}
		set _SpecColorR(e) {
			this._shaderValues.getVector(Y.MATERIALSPECULAR).x = e
		}
		get _SpecColorG() {
			return this._shaderValues.getVector(Y.MATERIALSPECULAR).y
		}
		set _SpecColorG(e) {
			this._shaderValues.getVector(Y.MATERIALSPECULAR).y = e
		}
		get _SpecColorB() {
			return this._shaderValues.getVector(Y.MATERIALSPECULAR).z
		}
		set _SpecColorB(e) {
			this._shaderValues.getVector(Y.MATERIALSPECULAR).z = e
		}
		get _SpecColorA() {
			return this._shaderValues.getVector(Y.MATERIALSPECULAR).w
		}
		set _SpecColorA(e) {
			this._shaderValues.getVector(Y.MATERIALSPECULAR).w = e
		}
		get _AlbedoIntensity() {
			return this._albedoIntensity
		}
		set _AlbedoIntensity(e) {
			if (this._albedoIntensity !== e) {
				var t = this._shaderValues.getVector(Y.ALBEDOCOLOR);
				a.scale(this._albedoColor, e, t), this._albedoIntensity = e, this._shaderValues.setVector(Y
					.ALBEDOCOLOR, t)
			}
		}
		get _Shininess() {
			return this._shaderValues.getNumber(Y.SHININESS)
		}
		set _Shininess(e) {
			e = Math.max(0, Math.min(1, e)), this._shaderValues.setNumber(Y.SHININESS, e)
		}
		get _MainTex_STX() {
			return this._shaderValues.getVector(Y.TILINGOFFSET).x
		}
		set _MainTex_STX(e) {
			var t = this._shaderValues.getVector(Y.TILINGOFFSET);
			t.x = e, this.tilingOffset = t
		}
		get _MainTex_STY() {
			return this._shaderValues.getVector(Y.TILINGOFFSET).y
		}
		set _MainTex_STY(e) {
			var t = this._shaderValues.getVector(Y.TILINGOFFSET);
			t.y = e, this.tilingOffset = t
		}
		get _MainTex_STZ() {
			return this._shaderValues.getVector(Y.TILINGOFFSET).z
		}
		set _MainTex_STZ(e) {
			var t = this._shaderValues.getVector(Y.TILINGOFFSET);
			t.z = e, this.tilingOffset = t
		}
		get _MainTex_STW() {
			return this._shaderValues.getVector(Y.TILINGOFFSET).w
		}
		set _MainTex_STW(e) {
			var t = this._shaderValues.getVector(Y.TILINGOFFSET);
			t.w = e, this.tilingOffset = t
		}
		get _Cutoff() {
			return this.alphaTestValue
		}
		set _Cutoff(e) {
			this.alphaTestValue = e
		}
		set renderMode(e) {
			switch (e) {
				case Y.RENDERMODE_OPAQUE:
					this.alphaTest = !1, this.renderQueue = W.RENDERQUEUE_OPAQUE, this.depthWrite = !0, this.cull =
						X.CULL_BACK, this.blend = X.BLEND_DISABLE, this.depthTest = X.DEPTHTEST_LESS;
					break;
				case Y.RENDERMODE_CUTOUT:
					this.renderQueue = W.RENDERQUEUE_ALPHATEST, this.alphaTest = !0, this.depthWrite = !0, this
						.cull = X.CULL_BACK, this.blend = X.BLEND_DISABLE, this.depthTest = X.DEPTHTEST_LESS;
					break;
				case Y.RENDERMODE_TRANSPARENT:
					this.renderQueue = W.RENDERQUEUE_TRANSPARENT, this.alphaTest = !1, this.depthWrite = !1, this
						.cull = X.CULL_BACK, this.blend = X.BLEND_ENABLE_ALL, this.blendSrc = X
						.BLENDPARAM_SRC_ALPHA, this.blendDst = X.BLENDPARAM_ONE_MINUS_SRC_ALPHA, this.depthTest = X
						.DEPTHTEST_LESS;
					break;
				default:
					throw new Error("Material:renderMode value error.")
			}
		}
		get enableVertexColor() {
			return this._enableVertexColor
		}
		set enableVertexColor(e) {
			this._enableVertexColor = e, e ? this._shaderValues.addDefine(Y.SHADERDEFINE_ENABLEVERTEXCOLOR) : this
				._shaderValues.removeDefine(Y.SHADERDEFINE_ENABLEVERTEXCOLOR)
		}
		get tilingOffsetX() {
			return this._MainTex_STX
		}
		set tilingOffsetX(e) {
			this._MainTex_STX = e
		}
		get tilingOffsetY() {
			return this._MainTex_STY
		}
		set tilingOffsetY(e) {
			this._MainTex_STY = e
		}
		get tilingOffsetZ() {
			return this._MainTex_STZ
		}
		set tilingOffsetZ(e) {
			this._MainTex_STZ = e
		}
		get tilingOffsetW() {
			return this._MainTex_STW
		}
		set tilingOffsetW(e) {
			this._MainTex_STW = e
		}
		get tilingOffset() {
			return this._shaderValues.getVector(Y.TILINGOFFSET)
		}
		set tilingOffset(e) {
			e && (1 != e.x || 1 != e.y || 0 != e.z || 0 != e.w) ? this._shaderValues.addDefine(Y
					.SHADERDEFINE_TILINGOFFSET) : this._shaderValues.removeDefine(Y.SHADERDEFINE_TILINGOFFSET), this
				._shaderValues.setVector(Y.TILINGOFFSET, e)
		}
		get albedoColorR() {
			return this._ColorR
		}
		set albedoColorR(e) {
			this._ColorR = e
		}
		get albedoColorG() {
			return this._ColorG
		}
		set albedoColorG(e) {
			this._ColorG = e
		}
		get albedoColorB() {
			return this._ColorB
		}
		set albedoColorB(e) {
			this._ColorB = e
		}
		get albedoColorA() {
			return this._ColorA
		}
		set albedoColorA(e) {
			this._ColorA = e
		}
		get albedoColor() {
			return this._albedoColor
		}
		set albedoColor(e) {
			var t = this._shaderValues.getVector(Y.ALBEDOCOLOR);
			a.scale(e, this._albedoIntensity, t), this._albedoColor = e, this._shaderValues.setVector(Y.ALBEDOCOLOR,
				t)
		}
		get albedoIntensity() {
			return this._albedoIntensity
		}
		set albedoIntensity(e) {
			this._AlbedoIntensity = e
		}
		get specularColorR() {
			return this._SpecColorR
		}
		set specularColorR(e) {
			this._SpecColorR = e
		}
		get specularColorG() {
			return this._SpecColorG
		}
		set specularColorG(e) {
			this._SpecColorG = e
		}
		get specularColorB() {
			return this._SpecColorB
		}
		set specularColorB(e) {
			this._SpecColorB = e
		}
		get specularColorA() {
			return this._SpecColorA
		}
		set specularColorA(e) {
			this._SpecColorA = e
		}
		get specularColor() {
			return this._shaderValues.getVector(Y.MATERIALSPECULAR)
		}
		set specularColor(e) {
			this._shaderValues.setVector(Y.MATERIALSPECULAR, e)
		}
		get shininess() {
			return this._Shininess
		}
		set shininess(e) {
			this._Shininess = e
		}
		get albedoTexture() {
			return this._shaderValues.getTexture(Y.ALBEDOTEXTURE)
		}
		set albedoTexture(e) {
			e ? this._shaderValues.addDefine(Y.SHADERDEFINE_DIFFUSEMAP) : this._shaderValues.removeDefine(Y
				.SHADERDEFINE_DIFFUSEMAP), this._shaderValues.setTexture(Y.ALBEDOTEXTURE, e)
		}
		get normalTexture() {
			return this._shaderValues.getTexture(Y.NORMALTEXTURE)
		}
		set normalTexture(e) {
			e ? this._shaderValues.addDefine(Y.SHADERDEFINE_NORMALMAP) : this._shaderValues.removeDefine(Y
				.SHADERDEFINE_NORMALMAP), this._shaderValues.setTexture(Y.NORMALTEXTURE, e)
		}
		get specularTexture() {
			return this._shaderValues.getTexture(Y.SPECULARTEXTURE)
		}
		set specularTexture(e) {
			e ? this._shaderValues.addDefine(Y.SHADERDEFINE_SPECULARMAP) : this._shaderValues.removeDefine(Y
				.SHADERDEFINE_SPECULARMAP), this._shaderValues.setTexture(Y.SPECULARTEXTURE, e)
		}
		get enableLighting() {
			return this._enableLighting
		}
		set enableLighting(e) {
			this._enableLighting !== e && (e ? (this._disablePublicDefineDatas.remove(k.SHADERDEFINE_POINTLIGHT),
				this._disablePublicDefineDatas.remove(k.SHADERDEFINE_SPOTLIGHT), this
				._disablePublicDefineDatas.remove(k.SHADERDEFINE_DIRECTIONLIGHT)) : (this
				._disablePublicDefineDatas.add(k.SHADERDEFINE_POINTLIGHT), this._disablePublicDefineDatas
				.add(k.SHADERDEFINE_SPOTLIGHT), this._disablePublicDefineDatas.add(k
					.SHADERDEFINE_DIRECTIONLIGHT)), this._enableLighting = e)
		}
		get depthWrite() {
			return this._shaderValues.getBool(Y.DEPTH_WRITE)
		}
		set depthWrite(e) {
			this._shaderValues.setBool(Y.DEPTH_WRITE, e)
		}
		get cull() {
			return this._shaderValues.getInt(Y.CULL)
		}
		set cull(e) {
			this._shaderValues.setInt(Y.CULL, e)
		}
		get blend() {
			return this._shaderValues.getInt(Y.BLEND)
		}
		set blend(e) {
			this._shaderValues.setInt(Y.BLEND, e)
		}
		get blendSrc() {
			return this._shaderValues.getInt(Y.BLEND_SRC)
		}
		set blendSrc(e) {
			this._shaderValues.setInt(Y.BLEND_SRC, e)
		}
		get blendDst() {
			return this._shaderValues.getInt(Y.BLEND_DST)
		}
		set blendDst(e) {
			this._shaderValues.setInt(Y.BLEND_DST, e)
		}
		get depthTest() {
			return this._shaderValues.getInt(Y.DEPTH_TEST)
		}
		set depthTest(e) {
			this._shaderValues.setInt(Y.DEPTH_TEST, e)
		}
		clone() {
			var e = new Y;
			return this.cloneTo(e), e
		}
		cloneTo(e) {
			super.cloneTo(e);
			var t = e;
			t._enableLighting = this._enableLighting, t._albedoIntensity = this._albedoIntensity, t
				._enableVertexColor = this._enableVertexColor, this._albedoColor.cloneTo(t._albedoColor)
		}
	}
	Y.RENDERMODE_OPAQUE = 0, Y.RENDERMODE_CUTOUT = 1, Y.RENDERMODE_TRANSPARENT = 2, Y.ALBEDOTEXTURE = F
		.propertyNameToID("u_DiffuseTexture"), Y.NORMALTEXTURE = F.propertyNameToID("u_NormalTexture"), Y
		.SPECULARTEXTURE = F.propertyNameToID("u_SpecularTexture"), Y.ALBEDOCOLOR = F.propertyNameToID(
		"u_DiffuseColor"), Y.MATERIALSPECULAR = F.propertyNameToID("u_MaterialSpecular"), Y.SHININESS = F
		.propertyNameToID("u_Shininess"), Y.TILINGOFFSET = F.propertyNameToID("u_TilingOffset"), Y.CULL = F
		.propertyNameToID("s_Cull"), Y.BLEND = F.propertyNameToID("s_Blend"), Y.BLEND_SRC = F.propertyNameToID(
			"s_BlendSrc"), Y.BLEND_DST = F.propertyNameToID("s_BlendDst"), Y.DEPTH_TEST = F.propertyNameToID(
			"s_DepthTest"), Y.DEPTH_WRITE = F.propertyNameToID("s_DepthWrite");
	class Z extends W {
		constructor() {
			super(), this.setShaderName("Effect"), this._color = new a(1, 1, 1, 1), this._shaderValues.setVector(Z
				.TINTCOLOR, new a(1, 1, 1, 1)), this.renderMode = Z.RENDERMODE_ADDTIVE
		}
		static __initDefine__() {
			Z.SHADERDEFINE_MAINTEXTURE = F.getDefineByName("MAINTEXTURE"), Z.SHADERDEFINE_TILINGOFFSET = F
				.getDefineByName("TILINGOFFSET"), Z.SHADERDEFINE_ADDTIVEFOG = F.getDefineByName("ADDTIVEFOG")
		}
		get _TintColorR() {
			return this._color.x
		}
		set _TintColorR(e) {
			this._color.x = e, this.color = this._color
		}
		get _TintColorG() {
			return this._color.y
		}
		set _TintColorG(e) {
			this._color.y = e, this.color = this._color
		}
		get _TintColorB() {
			return this._color.z
		}
		set _TintColorB(e) {
			this._color.z = e, this.color = this._color
		}
		get _TintColorA() {
			return this._color.w
		}
		set _TintColorA(e) {
			this._color.w = e, this.color = this._color
		}
		get _MainTex_STX() {
			return this._shaderValues.getVector(Z.TILINGOFFSET).x
		}
		set _MainTex_STX(e) {
			var t = this._shaderValues.getVector(Z.TILINGOFFSET);
			t.x = e, this.tilingOffset = t
		}
		get _MainTex_STY() {
			return this._shaderValues.getVector(Z.TILINGOFFSET).y
		}
		set _MainTex_STY(e) {
			var t = this._shaderValues.getVector(Z.TILINGOFFSET);
			t.y = e, this.tilingOffset = t
		}
		get _MainTex_STZ() {
			return this._shaderValues.getVector(Z.TILINGOFFSET).z
		}
		set _MainTex_STZ(e) {
			var t = this._shaderValues.getVector(Z.TILINGOFFSET);
			t.z = e, this.tilingOffset = t
		}
		get _MainTex_STW() {
			return this._shaderValues.getVector(Z.TILINGOFFSET).w
		}
		set _MainTex_STW(e) {
			var t = this._shaderValues.getVector(Z.TILINGOFFSET);
			t.w = e, this.tilingOffset = t
		}
		set renderMode(e) {
			switch (e) {
				case Z.RENDERMODE_ADDTIVE:
					this.renderQueue = W.RENDERQUEUE_TRANSPARENT, this.alphaTest = !1, this.depthWrite = !1, this
						.cull = X.CULL_NONE, this.blend = X.BLEND_ENABLE_ALL, this.blendSrc = X
						.BLENDPARAM_SRC_ALPHA, this.blendDst = X.BLENDPARAM_ONE, this.depthTest = X.DEPTHTEST_LESS,
						this._shaderValues.addDefine(Z.SHADERDEFINE_ADDTIVEFOG);
					break;
				case Z.RENDERMODE_ALPHABLENDED:
					this.renderQueue = W.RENDERQUEUE_TRANSPARENT, this.alphaTest = !1, this.depthWrite = !1, this
						.cull = X.CULL_NONE, this.blend = X.BLEND_ENABLE_ALL, this.blendSrc = X
						.BLENDPARAM_SRC_ALPHA, this.blendDst = X.BLENDPARAM_ONE_MINUS_SRC_ALPHA, this.depthTest = X
						.DEPTHTEST_LESS, this._shaderValues.removeDefine(Z.SHADERDEFINE_ADDTIVEFOG);
					break;
				default:
					throw new Error("MeshEffectMaterial : renderMode value error.")
			}
		}
		get colorR() {
			return this._TintColorR
		}
		set colorR(e) {
			this._TintColorR = e
		}
		get colorG() {
			return this._TintColorG
		}
		set colorG(e) {
			this._TintColorG = e
		}
		get colorB() {
			return this._TintColorB
		}
		set colorB(e) {
			this._TintColorB = e
		}
		get colorA() {
			return this._TintColorA
		}
		set colorA(e) {
			this._TintColorA = e
		}
		get color() {
			return this._shaderValues.getVector(Z.TINTCOLOR)
		}
		set color(e) {
			this._shaderValues.setVector(Z.TINTCOLOR, e)
		}
		get texture() {
			return this._shaderValues.getTexture(Z.MAINTEXTURE)
		}
		set texture(e) {
			e ? this._shaderValues.addDefine(Z.SHADERDEFINE_MAINTEXTURE) : this._shaderValues.removeDefine(Z
				.SHADERDEFINE_MAINTEXTURE), this._shaderValues.setTexture(Z.MAINTEXTURE, e)
		}
		get tilingOffsetX() {
			return this._MainTex_STX
		}
		set tilingOffsetX(e) {
			this._MainTex_STX = e
		}
		get tilingOffsetY() {
			return this._MainTex_STY
		}
		set tilingOffsetY(e) {
			this._MainTex_STY = e
		}
		get tilingOffsetZ() {
			return this._MainTex_STZ
		}
		set tilingOffsetZ(e) {
			this._MainTex_STZ = e
		}
		get tilingOffsetW() {
			return this._MainTex_STW
		}
		set tilingOffsetW(e) {
			this._MainTex_STW = e
		}
		get tilingOffset() {
			return this._shaderValues.getVector(Z.TILINGOFFSET)
		}
		set tilingOffset(e) {
			e && (1 != e.x || 1 != e.y || 0 != e.z || 0 != e.w) ? this._shaderValues.addDefine(Z
					.SHADERDEFINE_TILINGOFFSET) : this._shaderValues.removeDefine(Z.SHADERDEFINE_TILINGOFFSET), this
				._shaderValues.setVector(Z.TILINGOFFSET, e)
		}
		set depthWrite(e) {
			this._shaderValues.setBool(Z.DEPTH_WRITE, e)
		}
		get depthWrite() {
			return this._shaderValues.getBool(Z.DEPTH_WRITE)
		}
		set cull(e) {
			this._shaderValues.setInt(Z.CULL, e)
		}
		get cull() {
			return this._shaderValues.getInt(Z.CULL)
		}
		set blend(e) {
			this._shaderValues.setInt(Z.BLEND, e)
		}
		get blend() {
			return this._shaderValues.getInt(Z.BLEND)
		}
		set blendSrc(e) {
			this._shaderValues.setInt(Z.BLEND_SRC, e)
		}
		get blendSrc() {
			return this._shaderValues.getInt(Z.BLEND_SRC)
		}
		set blendDst(e) {
			this._shaderValues.setInt(Z.BLEND_DST, e)
		}
		get blendDst() {
			return this._shaderValues.getInt(Z.BLEND_DST)
		}
		set depthTest(e) {
			this._shaderValues.setInt(Z.DEPTH_TEST, e)
		}
		get depthTest() {
			return this._shaderValues.getInt(Z.DEPTH_TEST)
		}
		clone() {
			var e = new Z;
			return this.cloneTo(e), e
		}
	}
	Z.RENDERMODE_ADDTIVE = 0, Z.RENDERMODE_ALPHABLENDED = 1, Z.MAINTEXTURE = F.propertyNameToID("u_AlbedoTexture"), Z
		.TINTCOLOR = F.propertyNameToID("u_AlbedoColor"), Z.TILINGOFFSET = F.propertyNameToID("u_TilingOffset"), Z
		.CULL = F.propertyNameToID("s_Cull"), Z.BLEND = F.propertyNameToID("s_Blend"), Z.BLEND_SRC = F.propertyNameToID(
			"s_BlendSrc"), Z.BLEND_DST = F.propertyNameToID("s_BlendDst"), Z.DEPTH_TEST = F.propertyNameToID(
			"s_DepthTest"), Z.DEPTH_WRITE = F.propertyNameToID("s_DepthWrite");
	class j extends W {
		constructor() {
			super(), this._enableLighting = !0, this.setShaderName("ExtendTerrain"), this.renderMode = j
				.RENDERMODE_OPAQUE
		}
		static __initDefine__() {
			j.SHADERDEFINE_DETAIL_NUM1 = F.getDefineByName("ExtendTerrain_DETAIL_NUM1"), j
				.SHADERDEFINE_DETAIL_NUM2 = F.getDefineByName("ExtendTerrain_DETAIL_NUM2"), j
				.SHADERDEFINE_DETAIL_NUM3 = F.getDefineByName("ExtendTerrain_DETAIL_NUM3"), j
				.SHADERDEFINE_DETAIL_NUM4 = F.getDefineByName("ExtendTerrain_DETAIL_NUM4"), j
				.SHADERDEFINE_DETAIL_NUM5 = F.getDefineByName("ExtendTerrain_DETAIL_NUM5")
		}
		get splatAlphaTexture() {
			return this._shaderValues.getTexture(j.SPLATALPHATEXTURE)
		}
		set splatAlphaTexture(e) {
			this._shaderValues.setTexture(j.SPLATALPHATEXTURE, e)
		}
		set diffuseTexture1(e) {
			this._shaderValues.setTexture(j.DIFFUSETEXTURE1, e), this._setDetailNum(1)
		}
		get diffuseTexture2() {
			return this._shaderValues.getTexture(j.DIFFUSETEXTURE2)
		}
		set diffuseTexture2(e) {
			this._shaderValues.setTexture(j.DIFFUSETEXTURE2, e), this._setDetailNum(2)
		}
		get diffuseTexture3() {
			return this._shaderValues.getTexture(j.DIFFUSETEXTURE3)
		}
		set diffuseTexture3(e) {
			this._shaderValues.setTexture(j.DIFFUSETEXTURE3, e), this._setDetailNum(3)
		}
		get diffuseTexture4() {
			return this._shaderValues.getTexture(j.DIFFUSETEXTURE4)
		}
		set diffuseTexture4(e) {
			this._shaderValues.setTexture(j.DIFFUSETEXTURE4, e), this._setDetailNum(4)
		}
		get diffuseTexture5() {
			return this._shaderValues.getTexture(j.DIFFUSETEXTURE5)
		}
		set diffuseTexture5(e) {
			this._shaderValues.setTexture(j.DIFFUSETEXTURE5, e), this._setDetailNum(5)
		}
		_setDetailNum(e) {
			switch (e) {
				case 1:
					this._shaderValues.addDefine(j.SHADERDEFINE_DETAIL_NUM1), this._shaderValues.removeDefine(j
							.SHADERDEFINE_DETAIL_NUM2), this._shaderValues.removeDefine(j.SHADERDEFINE_DETAIL_NUM3),
						this._shaderValues.removeDefine(j.SHADERDEFINE_DETAIL_NUM4), this._shaderValues
						.removeDefine(j.SHADERDEFINE_DETAIL_NUM5);
					break;
				case 2:
					this._shaderValues.addDefine(j.SHADERDEFINE_DETAIL_NUM2), this._shaderValues.removeDefine(j
							.SHADERDEFINE_DETAIL_NUM1), this._shaderValues.removeDefine(j.SHADERDEFINE_DETAIL_NUM3),
						this._shaderValues.removeDefine(j.SHADERDEFINE_DETAIL_NUM4), this._shaderValues
						.removeDefine(j.SHADERDEFINE_DETAIL_NUM5);
					break;
				case 3:
					this._shaderValues.addDefine(j.SHADERDEFINE_DETAIL_NUM3), this._shaderValues.removeDefine(j
							.SHADERDEFINE_DETAIL_NUM1), this._shaderValues.removeDefine(j.SHADERDEFINE_DETAIL_NUM2),
						this._shaderValues.removeDefine(j.SHADERDEFINE_DETAIL_NUM4), this._shaderValues
						.removeDefine(j.SHADERDEFINE_DETAIL_NUM5);
					break;
				case 4:
					this._shaderValues.addDefine(j.SHADERDEFINE_DETAIL_NUM4), this._shaderValues.removeDefine(j
							.SHADERDEFINE_DETAIL_NUM1), this._shaderValues.removeDefine(j.SHADERDEFINE_DETAIL_NUM2),
						this._shaderValues.removeDefine(j.SHADERDEFINE_DETAIL_NUM3), this._shaderValues
						.removeDefine(j.SHADERDEFINE_DETAIL_NUM5);
					break;
				case 5:
					this._shaderValues.addDefine(j.SHADERDEFINE_DETAIL_NUM5), this._shaderValues.removeDefine(j
							.SHADERDEFINE_DETAIL_NUM1), this._shaderValues.removeDefine(j.SHADERDEFINE_DETAIL_NUM2),
						this._shaderValues.removeDefine(j.SHADERDEFINE_DETAIL_NUM3), this._shaderValues
						.removeDefine(j.SHADERDEFINE_DETAIL_NUM4)
			}
		}
		set diffuseScaleOffset1(e) {
			this._shaderValues.setVector(j.DIFFUSESCALEOFFSET1, e)
		}
		set diffuseScaleOffset2(e) {
			this._shaderValues.setVector(j.DIFFUSESCALEOFFSET2, e)
		}
		set diffuseScaleOffset3(e) {
			this._shaderValues.setVector(j.DIFFUSESCALEOFFSET3, e)
		}
		set diffuseScaleOffset4(e) {
			this._shaderValues.setVector(j.DIFFUSESCALEOFFSET4, e)
		}
		set diffuseScaleOffset5(e) {
			this._shaderValues.setVector(j.DIFFUSESCALEOFFSET5, e)
		}
		get enableLighting() {
			return this._enableLighting
		}
		set enableLighting(e) {
			this._enableLighting !== e && (e ? (this._disablePublicDefineDatas.remove(k.SHADERDEFINE_POINTLIGHT),
				this._disablePublicDefineDatas.remove(k.SHADERDEFINE_SPOTLIGHT), this
				._disablePublicDefineDatas.remove(k.SHADERDEFINE_DIRECTIONLIGHT)) : (this
				._disablePublicDefineDatas.add(k.SHADERDEFINE_POINTLIGHT), this._disablePublicDefineDatas
				.add(k.SHADERDEFINE_SPOTLIGHT), this._disablePublicDefineDatas.add(k
					.SHADERDEFINE_DIRECTIONLIGHT)), this._enableLighting = e)
		}
		set renderMode(e) {
			switch (e) {
				case j.RENDERMODE_OPAQUE:
					this.renderQueue = W.RENDERQUEUE_OPAQUE, this.depthWrite = !0, this.cull = X.CULL_BACK, this
						.blend = X.BLEND_DISABLE, this.depthTest = X.DEPTHTEST_LESS;
					break;
				case j.RENDERMODE_TRANSPARENT:
					this.renderQueue = W.RENDERQUEUE_OPAQUE, this.depthWrite = !1, this.cull = X.CULL_BACK, this
						.blend = X.BLEND_ENABLE_ALL, this.blendSrc = X.BLENDPARAM_SRC_ALPHA, this.blendDst = X
						.BLENDPARAM_ONE_MINUS_SRC_ALPHA, this.depthTest = X.DEPTHTEST_LEQUAL;
					break;
				default:
					throw new Error("ExtendTerrainMaterial:renderMode value error.")
			}
		}
		set depthWrite(e) {
			this._shaderValues.setBool(j.DEPTH_WRITE, e)
		}
		get depthWrite() {
			return this._shaderValues.getBool(j.DEPTH_WRITE)
		}
		set cull(e) {
			this._shaderValues.setInt(j.CULL, e)
		}
		get cull() {
			return this._shaderValues.getInt(j.CULL)
		}
		set blend(e) {
			this._shaderValues.setInt(j.BLEND, e)
		}
		get blend() {
			return this._shaderValues.getInt(j.BLEND)
		}
		set blendSrc(e) {
			this._shaderValues.setInt(j.BLEND_SRC, e)
		}
		get blendSrc() {
			return this._shaderValues.getInt(j.BLEND_SRC)
		}
		set blendDst(e) {
			this._shaderValues.setInt(j.BLEND_DST, e)
		}
		get blendDst() {
			return this._shaderValues.getInt(j.BLEND_DST)
		}
		set depthTest(e) {
			this._shaderValues.setInt(j.DEPTH_TEST, e)
		}
		get depthTest() {
			return this._shaderValues.getInt(j.DEPTH_TEST)
		}
		clone() {
			var e = new j;
			return this.cloneTo(e), e
		}
	}
	j.RENDERMODE_OPAQUE = 1, j.RENDERMODE_TRANSPARENT = 2, j.SPLATALPHATEXTURE = F.propertyNameToID(
			"u_SplatAlphaTexture"), j.DIFFUSETEXTURE1 = F.propertyNameToID("u_DiffuseTexture1"), j.DIFFUSETEXTURE2 = F
		.propertyNameToID("u_DiffuseTexture2"), j.DIFFUSETEXTURE3 = F.propertyNameToID("u_DiffuseTexture3"), j
		.DIFFUSETEXTURE4 = F.propertyNameToID("u_DiffuseTexture4"), j.DIFFUSETEXTURE5 = F.propertyNameToID(
			"u_DiffuseTexture5"), j.DIFFUSESCALEOFFSET1 = F.propertyNameToID("u_DiffuseScaleOffset1"), j
		.DIFFUSESCALEOFFSET2 = F.propertyNameToID("u_DiffuseScaleOffset2"), j.DIFFUSESCALEOFFSET3 = F.propertyNameToID(
			"u_DiffuseScaleOffset3"), j.DIFFUSESCALEOFFSET4 = F.propertyNameToID("u_DiffuseScaleOffset4"), j
		.DIFFUSESCALEOFFSET5 = F.propertyNameToID("u_DiffuseScaleOffset5"), j.CULL = F.propertyNameToID("s_Cull"), j
		.BLEND = F.propertyNameToID("s_Blend"), j.BLEND_SRC = F.propertyNameToID("s_BlendSrc"), j.BLEND_DST = F
		.propertyNameToID("s_BlendDst"), j.DEPTH_TEST = F.propertyNameToID("s_DepthTest"), j.DEPTH_WRITE = F
		.propertyNameToID("s_DepthWrite");
	class q extends W {
		constructor() {
			super(), this.setShaderName("PBRSpecular"), this._albedoColor = new a(1, 1, 1, 1), this._shaderValues
				.setVector(q.ALBEDOCOLOR, new a(1, 1, 1, 1)), this._emissionColor = new a(0, 0, 0, 0), this
				._shaderValues.setVector(q.EMISSIONCOLOR, new a(0, 0, 0, 0)), this._specularColor = new a(.2, .2,
					.2, .2), this._shaderValues.setVector(q.SPECULARCOLOR, new a(.2, .2, .2, .2)), this
				._shaderValues.setNumber(q.SMOOTHNESS, .5), this._shaderValues.setNumber(q.SMOOTHNESSSCALE, 1), this
				._shaderValues.setNumber(q.SMOOTHNESSSOURCE, 0), this._shaderValues.setNumber(q.OCCLUSIONSTRENGTH,
					1), this._shaderValues.setNumber(q.NORMALSCALE, 1), this._shaderValues.setNumber(q
					.PARALLAXSCALE, .001), this._shaderValues.setBool(q.ENABLEEMISSION, !1), this._shaderValues
				.setNumber(W.ALPHATESTVALUE, .5), this.renderMode = q.RENDERMODE_OPAQUE
		}
		static __initDefine__() {
			q.SHADERDEFINE_ALBEDOTEXTURE = F.getDefineByName("ALBEDOTEXTURE"), q.SHADERDEFINE_SPECULARTEXTURE = F
				.getDefineByName("SPECULARTEXTURE"), q.SHADERDEFINE_SMOOTHNESSSOURCE_ALBEDOTEXTURE_ALPHA = F
				.getDefineByName("SMOOTHNESSSOURCE_ALBEDOTEXTURE_ALPHA"), q.SHADERDEFINE_NORMALTEXTURE = F
				.getDefineByName("NORMALTEXTURE"), q.SHADERDEFINE_PARALLAXTEXTURE = F.getDefineByName(
					"PARALLAXTEXTURE"), q.SHADERDEFINE_OCCLUSIONTEXTURE = F.getDefineByName("OCCLUSIONTEXTURE"), q
				.SHADERDEFINE_EMISSION = F.getDefineByName("EMISSION"), q.SHADERDEFINE_EMISSIONTEXTURE = F
				.getDefineByName("EMISSIONTEXTURE"), q.SHADERDEFINE_TILINGOFFSET = F.getDefineByName(
				"TILINGOFFSET"), q.SHADERDEFINE_ALPHAPREMULTIPLY = F.getDefineByName("ALPHAPREMULTIPLY")
		}
		get _ColorR() {
			return this._albedoColor.x
		}
		set _ColorR(e) {
			this._albedoColor.x = e, this.albedoColor = this._albedoColor
		}
		get _ColorG() {
			return this._albedoColor.y
		}
		set _ColorG(e) {
			this._albedoColor.y = e, this.albedoColor = this._albedoColor
		}
		get _ColorB() {
			return this._albedoColor.z
		}
		set _ColorB(e) {
			this._albedoColor.z = e, this.albedoColor = this._albedoColor
		}
		get _ColorA() {
			return this._albedoColor.w
		}
		set _ColorA(e) {
			this._albedoColor.w = e, this.albedoColor = this._albedoColor
		}
		get _SpecColorR() {
			return this._specularColor.x
		}
		set _SpecColorR(e) {
			this._specularColor.x = e, this.specularColor = this._specularColor
		}
		get _SpecColorG() {
			return this._specularColor.y
		}
		set _SpecColorG(e) {
			this._specularColor.y = e, this.specularColor = this._specularColor
		}
		get _SpecColorB() {
			return this._specularColor.z
		}
		set _SpecColorB(e) {
			this._specularColor.z = e, this.specularColor = this._specularColor
		}
		get _SpecColorA() {
			return this._specularColor.w
		}
		set _SpecColorA(e) {
			this._specularColor.w = e, this.specularColor = this._specularColor
		}
		get _Glossiness() {
			return this._shaderValues.getNumber(q.SMOOTHNESS)
		}
		set _Glossiness(e) {
			this._shaderValues.setNumber(q.SMOOTHNESS, e)
		}
		get _GlossMapScale() {
			return this._shaderValues.getNumber(q.SMOOTHNESSSCALE)
		}
		set _GlossMapScale(e) {
			this._shaderValues.setNumber(q.SMOOTHNESSSCALE, e)
		}
		get _BumpScale() {
			return this._shaderValues.getNumber(q.NORMALSCALE)
		}
		set _BumpScale(e) {
			this._shaderValues.setNumber(q.NORMALSCALE, e)
		}
		get _Parallax() {
			return this._shaderValues.getNumber(q.PARALLAXSCALE)
		}
		set _Parallax(e) {
			this._shaderValues.setNumber(q.PARALLAXSCALE, e)
		}
		get _OcclusionStrength() {
			return this._shaderValues.getNumber(q.OCCLUSIONSTRENGTH)
		}
		set _OcclusionStrength(e) {
			this._shaderValues.setNumber(q.OCCLUSIONSTRENGTH, e)
		}
		get _EmissionColorR() {
			return this._emissionColor.x
		}
		set _EmissionColorR(e) {
			this._emissionColor.x = e, this.emissionColor = this._emissionColor
		}
		get _EmissionColorG() {
			return this._emissionColor.y
		}
		set _EmissionColorG(e) {
			this._emissionColor.y = e, this.emissionColor = this._emissionColor
		}
		get _EmissionColorB() {
			return this._emissionColor.z
		}
		set _EmissionColorB(e) {
			this._emissionColor.z = e, this.emissionColor = this._emissionColor
		}
		get _EmissionColorA() {
			return this._emissionColor.w
		}
		set _EmissionColorA(e) {
			this._emissionColor.w = e, this.emissionColor = this._emissionColor
		}
		get _MainTex_STX() {
			return this._shaderValues.getVector(q.TILINGOFFSET).x
		}
		set _MainTex_STX(e) {
			var t = this._shaderValues.getVector(q.TILINGOFFSET);
			t.x = e, this.tilingOffset = t
		}
		get _MainTex_STY() {
			return this._shaderValues.getVector(q.TILINGOFFSET).y
		}
		set _MainTex_STY(e) {
			var t = this._shaderValues.getVector(q.TILINGOFFSET);
			t.y = e, this.tilingOffset = t
		}
		get _MainTex_STZ() {
			return this._shaderValues.getVector(q.TILINGOFFSET).z
		}
		set _MainTex_STZ(e) {
			var t = this._shaderValues.getVector(q.TILINGOFFSET);
			t.z = e, this.tilingOffset = t
		}
		get _MainTex_STW() {
			return this._shaderValues.getVector(q.TILINGOFFSET).w
		}
		set _MainTex_STW(e) {
			var t = this._shaderValues.getVector(q.TILINGOFFSET);
			t.w = e, this.tilingOffset = t
		}
		get _Cutoff() {
			return this.alphaTestValue
		}
		set _Cutoff(e) {
			this.alphaTestValue = e
		}
		get albedoColorR() {
			return this._ColorR
		}
		set albedoColorR(e) {
			this._ColorR = e
		}
		get albedoColorG() {
			return this._ColorG
		}
		set albedoColorG(e) {
			this._ColorG = e
		}
		get albedoColorB() {
			return this._ColorB
		}
		set albedoColorB(e) {
			this._ColorB = e
		}
		get albedoColorA() {
			return this._ColorA
		}
		set albedoColorA(e) {
			this._ColorA = e
		}
		get albedoColor() {
			return this._albedoColor
		}
		set albedoColor(e) {
			this._albedoColor = e, this._shaderValues.setVector(q.ALBEDOCOLOR, e)
		}
		get albedoTexture() {
			return this._shaderValues.getTexture(q.ALBEDOTEXTURE)
		}
		set albedoTexture(e) {
			e ? this._shaderValues.addDefine(q.SHADERDEFINE_ALBEDOTEXTURE) : this._shaderValues.removeDefine(q
				.SHADERDEFINE_ALBEDOTEXTURE), this._shaderValues.setTexture(q.ALBEDOTEXTURE, e)
		}
		get normalTexture() {
			return this._shaderValues.getTexture(q.NORMALTEXTURE)
		}
		set normalTexture(e) {
			e ? this._shaderValues.addDefine(q.SHADERDEFINE_NORMALTEXTURE) : this._shaderValues.removeDefine(q
				.SHADERDEFINE_NORMALTEXTURE), this._shaderValues.setTexture(q.NORMALTEXTURE, e)
		}
		get normalTextureScale() {
			return this._BumpScale
		}
		set normalTextureScale(e) {
			this._BumpScale = e
		}
		get parallaxTexture() {
			return this._shaderValues.getTexture(q.PARALLAXTEXTURE)
		}
		set parallaxTexture(e) {
			e ? this._shaderValues.addDefine(q.SHADERDEFINE_PARALLAXTEXTURE) : this._shaderValues.removeDefine(q
				.SHADERDEFINE_PARALLAXTEXTURE), this._shaderValues.setTexture(q.PARALLAXTEXTURE, e)
		}
		get parallaxTextureScale() {
			return this._Parallax
		}
		set parallaxTextureScale(e) {
			this._Parallax = Math.max(.005, Math.min(.08, e))
		}
		get occlusionTexture() {
			return this._shaderValues.getTexture(q.OCCLUSIONTEXTURE)
		}
		set occlusionTexture(e) {
			e ? this._shaderValues.addDefine(q.SHADERDEFINE_OCCLUSIONTEXTURE) : this._shaderValues.removeDefine(q
				.SHADERDEFINE_OCCLUSIONTEXTURE), this._shaderValues.setTexture(q.OCCLUSIONTEXTURE, e)
		}
		get occlusionTextureStrength() {
			return this._OcclusionStrength
		}
		set occlusionTextureStrength(e) {
			this._OcclusionStrength = Math.max(0, Math.min(1, e))
		}
		get specularTexture() {
			return this._shaderValues.getTexture(q.SPECULARTEXTURE)
		}
		set specularTexture(e) {
			e ? this._shaderValues.addDefine(q.SHADERDEFINE_SPECULARTEXTURE) : this._shaderValues.removeDefine(q
				.SHADERDEFINE_SPECULARTEXTURE), this._shaderValues.setTexture(q.SPECULARTEXTURE, e)
		}
		get specularColorR() {
			return this._SpecColorR
		}
		set specularColorR(e) {
			this._SpecColorR = e
		}
		get specularColorG() {
			return this._SpecColorG
		}
		set specularColorG(e) {
			this._SpecColorG = e
		}
		get specularColorB() {
			return this._SpecColorB
		}
		set specularColorB(e) {
			this._SpecColorB = e
		}
		get specularColorA() {
			return this._SpecColorA
		}
		set specularColorA(e) {
			this._SpecColorA = e
		}
		get specularColor() {
			return this._shaderValues.getVector(q.SPECULARCOLOR)
		}
		set specularColor(e) {
			this._shaderValues.setVector(q.SPECULARCOLOR, e)
		}
		get smoothness() {
			return this._Glossiness
		}
		set smoothness(e) {
			this._Glossiness = Math.max(0, Math.min(1, e))
		}
		get smoothnessTextureScale() {
			return this._GlossMapScale
		}
		set smoothnessTextureScale(e) {
			this._GlossMapScale = Math.max(0, Math.min(1, e))
		}
		get smoothnessSource() {
			return this._shaderValues.getInt(q.SMOOTHNESSSOURCE)
		}
		set smoothnessSource(e) {
			e ? (this._shaderValues.addDefine(q.SHADERDEFINE_SMOOTHNESSSOURCE_ALBEDOTEXTURE_ALPHA), this
				._shaderValues.setInt(q.SMOOTHNESSSOURCE, 1)) : (this._shaderValues.removeDefine(q
				.SHADERDEFINE_SMOOTHNESSSOURCE_ALBEDOTEXTURE_ALPHA), this._shaderValues.setInt(q
				.SMOOTHNESSSOURCE, 0))
		}
		get enableEmission() {
			return this._shaderValues.getBool(q.ENABLEEMISSION)
		}
		set enableEmission(e) {
			e ? this._shaderValues.addDefine(q.SHADERDEFINE_EMISSION) : this._shaderValues.removeDefine(q
				.SHADERDEFINE_EMISSION), this._shaderValues.setBool(q.ENABLEEMISSION, e)
		}
		get emissionColor() {
			return this._shaderValues.getVector(q.EMISSIONCOLOR)
		}
		set emissionColor(e) {
			this._shaderValues.setVector(q.EMISSIONCOLOR, e)
		}
		get emissionTexture() {
			return this._shaderValues.getTexture(q.EMISSIONTEXTURE)
		}
		set emissionTexture(e) {
			e ? this._shaderValues.addDefine(q.SHADERDEFINE_EMISSIONTEXTURE) : this._shaderValues.removeDefine(q
				.SHADERDEFINE_EMISSIONTEXTURE), this._shaderValues.setTexture(q.EMISSIONTEXTURE, e)
		}
		get enableReflection() {
			return this._shaderValues.getBool(q.ENABLEREFLECT)
		}
		set enableReflection(e) {
			this._shaderValues.setBool(q.ENABLEREFLECT, !0), e ? this._disablePublicDefineDatas.remove(k
				.SHADERDEFINE_REFLECTMAP) : this._disablePublicDefineDatas.add(k.SHADERDEFINE_REFLECTMAP)
		}
		get tilingOffsetX() {
			return this._MainTex_STX
		}
		set tilingOffsetX(e) {
			this._MainTex_STX = e
		}
		get tilingOffsetY() {
			return this._MainTex_STY
		}
		set tilingOffsetY(e) {
			this._MainTex_STY = e
		}
		get tilingOffsetZ() {
			return this._MainTex_STZ
		}
		set tilingOffsetZ(e) {
			this._MainTex_STZ = e
		}
		get tilingOffsetW() {
			return this._MainTex_STW
		}
		set tilingOffsetW(e) {
			this._MainTex_STW = e
		}
		get tilingOffset() {
			return this._shaderValues.getVector(q.TILINGOFFSET)
		}
		set tilingOffset(e) {
			e && (1 != e.x || 1 != e.y || 0 != e.z || 0 != e.w) ? this._shaderValues.addDefine(q
					.SHADERDEFINE_TILINGOFFSET) : this._shaderValues.removeDefine(q.SHADERDEFINE_TILINGOFFSET), this
				._shaderValues.setVector(q.TILINGOFFSET, e)
		}
		set renderMode(e) {
			switch (e) {
				case q.RENDERMODE_OPAQUE:
					this.alphaTest = !1, this.renderQueue = W.RENDERQUEUE_OPAQUE, this.depthWrite = !0, this.cull =
						X.CULL_BACK, this.blend = X.BLEND_DISABLE, this.depthTest = X.DEPTHTEST_LESS, this
						._shaderValues.removeDefine(q.SHADERDEFINE_ALPHAPREMULTIPLY);
					break;
				case q.RENDERMODE_CUTOUT:
					this.renderQueue = W.RENDERQUEUE_ALPHATEST, this.alphaTest = !0, this.depthWrite = !0, this
						.cull = X.CULL_BACK, this.blend = X.BLEND_DISABLE, this.depthTest = X.DEPTHTEST_LESS, this
						._shaderValues.removeDefine(q.SHADERDEFINE_ALPHAPREMULTIPLY);
					break;
				case q.RENDERMODE_FADE:
					this.renderQueue = W.RENDERQUEUE_TRANSPARENT, this.alphaTest = !1, this.depthWrite = !1, this
						.cull = X.CULL_BACK, this.blend = X.BLEND_ENABLE_ALL, this.blendSrc = X
						.BLENDPARAM_SRC_ALPHA, this.blendDst = X.BLENDPARAM_ONE_MINUS_SRC_ALPHA, this.depthTest = X
						.DEPTHTEST_LESS, this._shaderValues.removeDefine(q.SHADERDEFINE_ALPHAPREMULTIPLY);
					break;
				case q.RENDERMODE_TRANSPARENT:
					this.renderQueue = W.RENDERQUEUE_TRANSPARENT, this.alphaTest = !1, this.depthWrite = !1, this
						.cull = X.CULL_BACK, this.blend = X.BLEND_ENABLE_ALL, this.blendSrc = X.BLENDPARAM_ONE, this
						.blendDst = X.BLENDPARAM_ONE_MINUS_SRC_ALPHA, this.depthTest = X.DEPTHTEST_LESS, this
						._shaderValues.addDefine(q.SHADERDEFINE_ALPHAPREMULTIPLY);
					break;
				default:
					throw new Error("PBRSpecularMaterial : renderMode value error.")
			}
		}
		get depthWrite() {
			return this._shaderValues.getBool(q.DEPTH_WRITE)
		}
		set depthWrite(e) {
			this._shaderValues.setBool(q.DEPTH_WRITE, e)
		}
		get cull() {
			return this._shaderValues.getInt(q.CULL)
		}
		set cull(e) {
			this._shaderValues.setInt(q.CULL, e)
		}
		get blend() {
			return this._shaderValues.getInt(q.BLEND)
		}
		set blend(e) {
			this._shaderValues.setInt(q.BLEND, e)
		}
		get blendSrc() {
			return this._shaderValues.getInt(q.BLEND_SRC)
		}
		set blendSrc(e) {
			this._shaderValues.setInt(q.BLEND_SRC, e)
		}
		get blendDst() {
			return this._shaderValues.getInt(q.BLEND_DST)
		}
		set blendDst(e) {
			this._shaderValues.setInt(q.BLEND_DST, e)
		}
		get depthTest() {
			return this._shaderValues.getInt(q.DEPTH_TEST)
		}
		set depthTest(e) {
			this._shaderValues.setInt(q.DEPTH_TEST, e)
		}
		clone() {
			var e = new q;
			return this.cloneTo(e), e
		}
		cloneTo(e) {
			super.cloneTo(e);
			var t = e;
			this._albedoColor.cloneTo(t._albedoColor), this._specularColor.cloneTo(t._specularColor), this
				._emissionColor.cloneTo(t._emissionColor)
		}
	}
	q.SmoothnessSource_SpecularTexture_Alpha = 0, q.SmoothnessSource_AlbedoTexture_Alpha = 1, q.RENDERMODE_OPAQUE = 0, q
		.RENDERMODE_CUTOUT = 1, q.RENDERMODE_FADE = 2, q.RENDERMODE_TRANSPARENT = 3, q.ALBEDOTEXTURE = F
		.propertyNameToID("u_AlbedoTexture"), q.SPECULARTEXTURE = F.propertyNameToID("u_SpecularTexture"), q
		.NORMALTEXTURE = F.propertyNameToID("u_NormalTexture"), q.PARALLAXTEXTURE = F.propertyNameToID(
			"u_ParallaxTexture"), q.OCCLUSIONTEXTURE = F.propertyNameToID("u_OcclusionTexture"), q.EMISSIONTEXTURE = F
		.propertyNameToID("u_EmissionTexture"), q.ALBEDOCOLOR = F.propertyNameToID("u_AlbedoColor"), q.SPECULARCOLOR = F
		.propertyNameToID("u_SpecularColor"), q.EMISSIONCOLOR = F.propertyNameToID("u_EmissionColor"), q.SMOOTHNESS = F
		.propertyNameToID("u_smoothness"), q.SMOOTHNESSSCALE = F.propertyNameToID("u_smoothnessScale"), q
		.SMOOTHNESSSOURCE = -1, q.OCCLUSIONSTRENGTH = F.propertyNameToID("u_occlusionStrength"), q.NORMALSCALE = F
		.propertyNameToID("u_normalScale"), q.PARALLAXSCALE = F.propertyNameToID("u_parallaxScale"), q
		.ENABLEEMISSION = -1, q.ENABLEREFLECT = -1, q.TILINGOFFSET = F.propertyNameToID("u_TilingOffset"), q.CULL = F
		.propertyNameToID("s_Cull"), q.BLEND = F.propertyNameToID("s_Blend"), q.BLEND_SRC = F.propertyNameToID(
			"s_BlendSrc"), q.BLEND_DST = F.propertyNameToID("s_BlendDst"), q.DEPTH_TEST = F.propertyNameToID(
			"s_DepthTest"), q.DEPTH_WRITE = F.propertyNameToID("s_DepthWrite");
	class Q extends W {
		constructor() {
			super(), this.setShaderName("PBRStandard"), this._albedoColor = new a(1, 1, 1, 1), this._shaderValues
				.setVector(Q.ALBEDOCOLOR, new a(1, 1, 1, 1)), this._emissionColor = new a(0, 0, 0, 0), this
				._shaderValues.setVector(Q.EMISSIONCOLOR, new a(0, 0, 0, 0)), this._shaderValues.setNumber(Q
					.METALLIC, 0), this._shaderValues.setNumber(Q.SMOOTHNESS, .5), this._shaderValues.setNumber(Q
					.SMOOTHNESSSCALE, 1), this._shaderValues.setNumber(Q.SMOOTHNESSSOURCE, 0), this._shaderValues
				.setNumber(Q.OCCLUSIONSTRENGTH, 1), this._shaderValues.setNumber(Q.NORMALSCALE, 1), this
				._shaderValues.setNumber(Q.PARALLAXSCALE, .001), this._shaderValues.setBool(Q.ENABLEEMISSION, !1),
				this._shaderValues.setBool(Q.ENABLEREFLECT, !0), this._shaderValues.setNumber(W.ALPHATESTVALUE, .5),
				this._disablePublicDefineDatas.remove(k.SHADERDEFINE_REFLECTMAP), this.renderMode = Q
				.RENDERMODE_OPAQUE
		}
		static __initDefine__() {
			Q.SHADERDEFINE_ALBEDOTEXTURE = F.getDefineByName("ALBEDOTEXTURE"), Q.SHADERDEFINE_METALLICGLOSSTEXTURE =
				F.getDefineByName("METALLICGLOSSTEXTURE"), Q.SHADERDEFINE_SMOOTHNESSSOURCE_ALBEDOTEXTURE_ALPHA = F
				.getDefineByName("SMOOTHNESSSOURCE_ALBEDOTEXTURE_ALPHA"), Q.SHADERDEFINE_NORMALTEXTURE = F
				.getDefineByName("NORMALTEXTURE"), Q.SHADERDEFINE_PARALLAXTEXTURE = F.getDefineByName(
					"PARALLAXTEXTURE"), Q.SHADERDEFINE_OCCLUSIONTEXTURE = F.getDefineByName("OCCLUSIONTEXTURE"), Q
				.SHADERDEFINE_EMISSION = F.getDefineByName("EMISSION"), Q.SHADERDEFINE_EMISSIONTEXTURE = F
				.getDefineByName("EMISSIONTEXTURE"), Q.SHADERDEFINE_REFLECTMAP = F.getDefineByName("REFLECTMAP"), Q
				.SHADERDEFINE_TILINGOFFSET = F.getDefineByName("TILINGOFFSET"), Q.SHADERDEFINE_ALPHAPREMULTIPLY = F
				.getDefineByName("ALPHAPREMULTIPLY")
		}
		get _ColorR() {
			return this._albedoColor.x
		}
		set _ColorR(e) {
			this._albedoColor.x = e, this.albedoColor = this._albedoColor
		}
		get _ColorG() {
			return this._albedoColor.y
		}
		set _ColorG(e) {
			this._albedoColor.y = e, this.albedoColor = this._albedoColor
		}
		get _ColorB() {
			return this._albedoColor.z
		}
		set _ColorB(e) {
			this._albedoColor.z = e, this.albedoColor = this._albedoColor
		}
		get _ColorA() {
			return this._albedoColor.w
		}
		set _ColorA(e) {
			this._albedoColor.w = e, this.albedoColor = this._albedoColor
		}
		get _Metallic() {
			return this._shaderValues.getNumber(Q.METALLIC)
		}
		set _Metallic(e) {
			this._shaderValues.setNumber(Q.METALLIC, e)
		}
		get _Glossiness() {
			return this._shaderValues.getNumber(Q.SMOOTHNESS)
		}
		set _Glossiness(e) {
			this._shaderValues.setNumber(Q.SMOOTHNESS, e)
		}
		get _GlossMapScale() {
			return this._shaderValues.getNumber(Q.SMOOTHNESSSCALE)
		}
		set _GlossMapScale(e) {
			this._shaderValues.setNumber(Q.SMOOTHNESSSCALE, e)
		}
		get _BumpScale() {
			return this._shaderValues.getNumber(Q.NORMALSCALE)
		}
		set _BumpScale(e) {
			this._shaderValues.setNumber(Q.NORMALSCALE, e)
		}
		get _Parallax() {
			return this._shaderValues.getNumber(Q.PARALLAXSCALE)
		}
		set _Parallax(e) {
			this._shaderValues.setNumber(Q.PARALLAXSCALE, e)
		}
		get _OcclusionStrength() {
			return this._shaderValues.getNumber(Q.OCCLUSIONSTRENGTH)
		}
		set _OcclusionStrength(e) {
			this._shaderValues.setNumber(Q.OCCLUSIONSTRENGTH, e)
		}
		get _EmissionColorR() {
			return this._emissionColor.x
		}
		set _EmissionColorR(e) {
			this._emissionColor.x = e, this.emissionColor = this._emissionColor
		}
		get _EmissionColorG() {
			return this._emissionColor.y
		}
		set _EmissionColorG(e) {
			this._emissionColor.y = e, this.emissionColor = this._emissionColor
		}
		get _EmissionColorB() {
			return this._emissionColor.z
		}
		set _EmissionColorB(e) {
			this._emissionColor.z = e, this.emissionColor = this._emissionColor
		}
		get _EmissionColorA() {
			return this._emissionColor.w
		}
		set _EmissionColorA(e) {
			this._emissionColor.w = e, this.emissionColor = this._emissionColor
		}
		get _MainTex_STX() {
			return this._shaderValues.getVector(Q.TILINGOFFSET).x
		}
		set _MainTex_STX(e) {
			var t = this._shaderValues.getVector(Q.TILINGOFFSET);
			t.x = e, this.tilingOffset = t
		}
		get _MainTex_STY() {
			return this._shaderValues.getVector(Q.TILINGOFFSET).y
		}
		set _MainTex_STY(e) {
			var t = this._shaderValues.getVector(Q.TILINGOFFSET);
			t.y = e, this.tilingOffset = t
		}
		get _MainTex_STZ() {
			return this._shaderValues.getVector(Q.TILINGOFFSET).z
		}
		set _MainTex_STZ(e) {
			var t = this._shaderValues.getVector(Q.TILINGOFFSET);
			t.z = e, this.tilingOffset = t
		}
		get _MainTex_STW() {
			return this._shaderValues.getVector(Q.TILINGOFFSET).w
		}
		set _MainTex_STW(e) {
			var t = this._shaderValues.getVector(Q.TILINGOFFSET);
			t.w = e, this.tilingOffset = t
		}
		get _Cutoff() {
			return this.alphaTestValue
		}
		set _Cutoff(e) {
			this.alphaTestValue = e
		}
		get albedoColorR() {
			return this._ColorR
		}
		set albedoColorR(e) {
			this._ColorR = e
		}
		get albedoColorG() {
			return this._ColorG
		}
		set albedoColorG(e) {
			this._ColorG = e
		}
		get albedoColorB() {
			return this._ColorB
		}
		set albedoColorB(e) {
			this._ColorB = e
		}
		get albedoColorA() {
			return this._ColorA
		}
		set albedoColorA(e) {
			this._ColorA = e
		}
		get albedoColor() {
			return this._albedoColor
		}
		set albedoColor(e) {
			this._albedoColor = e, this._shaderValues.setVector(Q.ALBEDOCOLOR, e)
		}
		get albedoTexture() {
			return this._shaderValues.getTexture(Q.ALBEDOTEXTURE)
		}
		set albedoTexture(e) {
			e ? this._shaderValues.addDefine(Q.SHADERDEFINE_ALBEDOTEXTURE) : this._shaderValues.removeDefine(Q
				.SHADERDEFINE_ALBEDOTEXTURE), this._shaderValues.setTexture(Q.ALBEDOTEXTURE, e)
		}
		get normalTexture() {
			return this._shaderValues.getTexture(Q.NORMALTEXTURE)
		}
		set normalTexture(e) {
			e ? this._shaderValues.addDefine(Q.SHADERDEFINE_NORMALTEXTURE) : this._shaderValues.removeDefine(Q
				.SHADERDEFINE_NORMALTEXTURE), this._shaderValues.setTexture(Q.NORMALTEXTURE, e)
		}
		get normalTextureScale() {
			return this._BumpScale
		}
		set normalTextureScale(e) {
			this._BumpScale = e
		}
		get parallaxTexture() {
			return this._shaderValues.getTexture(Q.PARALLAXTEXTURE)
		}
		set parallaxTexture(e) {
			e ? this._shaderValues.addDefine(Q.SHADERDEFINE_PARALLAXTEXTURE) : this._shaderValues.removeDefine(Q
				.SHADERDEFINE_PARALLAXTEXTURE), this._shaderValues.setTexture(Q.PARALLAXTEXTURE, e)
		}
		get parallaxTextureScale() {
			return this._Parallax
		}
		set parallaxTextureScale(e) {
			this._Parallax = Math.max(.005, Math.min(.08, e))
		}
		get occlusionTexture() {
			return this._shaderValues.getTexture(Q.OCCLUSIONTEXTURE)
		}
		set occlusionTexture(e) {
			e ? this._shaderValues.addDefine(Q.SHADERDEFINE_OCCLUSIONTEXTURE) : this._shaderValues.removeDefine(Q
				.SHADERDEFINE_OCCLUSIONTEXTURE), this._shaderValues.setTexture(Q.OCCLUSIONTEXTURE, e)
		}
		get occlusionTextureStrength() {
			return this._OcclusionStrength
		}
		set occlusionTextureStrength(e) {
			this._OcclusionStrength = Math.max(0, Math.min(1, e))
		}
		get metallicGlossTexture() {
			return this._shaderValues.getTexture(Q.METALLICGLOSSTEXTURE)
		}
		set metallicGlossTexture(e) {
			e ? this._shaderValues.addDefine(Q.SHADERDEFINE_METALLICGLOSSTEXTURE) : this._shaderValues.removeDefine(
				Q.SHADERDEFINE_METALLICGLOSSTEXTURE), this._shaderValues.setTexture(Q.METALLICGLOSSTEXTURE, e)
		}
		get metallic() {
			return this._Metallic
		}
		set metallic(e) {
			this._Metallic = Math.max(0, Math.min(1, e))
		}
		get smoothness() {
			return this._Glossiness
		}
		set smoothness(e) {
			this._Glossiness = Math.max(0, Math.min(1, e))
		}
		get smoothnessTextureScale() {
			return this._GlossMapScale
		}
		set smoothnessTextureScale(e) {
			this._GlossMapScale = Math.max(0, Math.min(1, e))
		}
		get smoothnessSource() {
			return this._shaderValues.getInt(Q.SMOOTHNESSSOURCE)
		}
		set smoothnessSource(e) {
			e ? (this._shaderValues.addDefine(Q.SHADERDEFINE_SMOOTHNESSSOURCE_ALBEDOTEXTURE_ALPHA), this
				._shaderValues.setInt(Q.SMOOTHNESSSOURCE, 1)) : (this._shaderValues.removeDefine(Q
				.SHADERDEFINE_SMOOTHNESSSOURCE_ALBEDOTEXTURE_ALPHA), this._shaderValues.setInt(Q
				.SMOOTHNESSSOURCE, 0))
		}
		get enableEmission() {
			return this._shaderValues.getBool(Q.ENABLEEMISSION)
		}
		set enableEmission(e) {
			e ? this._shaderValues.addDefine(Q.SHADERDEFINE_EMISSION) : this._shaderValues.removeDefine(Q
				.SHADERDEFINE_EMISSION), this._shaderValues.setBool(Q.ENABLEEMISSION, e)
		}
		get emissionColorR() {
			return this._EmissionColorR
		}
		set emissionColorR(e) {
			this._EmissionColorR = e
		}
		get emissionColorG() {
			return this._EmissionColorG
		}
		set emissionColorG(e) {
			this._EmissionColorG = e
		}
		get emissionColorB() {
			return this._EmissionColorB
		}
		set emissionColorB(e) {
			this._EmissionColorB = e
		}
		get emissionColorA() {
			return this._EmissionColorA
		}
		set emissionColorA(e) {
			this._EmissionColorA = e
		}
		get emissionColor() {
			return this._shaderValues.getVector(Q.EMISSIONCOLOR)
		}
		set emissionColor(e) {
			this._shaderValues.setVector(Q.EMISSIONCOLOR, e)
		}
		get emissionTexture() {
			return this._shaderValues.getTexture(Q.EMISSIONTEXTURE)
		}
		set emissionTexture(e) {
			e ? this._shaderValues.addDefine(Q.SHADERDEFINE_EMISSIONTEXTURE) : this._shaderValues.removeDefine(Q
				.SHADERDEFINE_EMISSIONTEXTURE), this._shaderValues.setTexture(Q.EMISSIONTEXTURE, e)
		}
		get enableReflection() {
			return this._shaderValues.getBool(Q.ENABLEREFLECT)
		}
		set enableReflection(e) {
			this._shaderValues.setBool(Q.ENABLEREFLECT, !0), e ? this._disablePublicDefineDatas.remove(k
				.SHADERDEFINE_REFLECTMAP) : this._disablePublicDefineDatas.add(k.SHADERDEFINE_REFLECTMAP)
		}
		get tilingOffsetX() {
			return this._MainTex_STX
		}
		set tilingOffsetX(e) {
			this._MainTex_STX = e
		}
		get tilingOffsetY() {
			return this._MainTex_STY
		}
		set tilingOffsetY(e) {
			this._MainTex_STY = e
		}
		get tilingOffsetZ() {
			return this._MainTex_STZ
		}
		set tilingOffsetZ(e) {
			this._MainTex_STZ = e
		}
		get tilingOffsetW() {
			return this._MainTex_STW
		}
		set tilingOffsetW(e) {
			this._MainTex_STW = e
		}
		get tilingOffset() {
			return this._shaderValues.getVector(Q.TILINGOFFSET)
		}
		set tilingOffset(e) {
			e && (1 != e.x || 1 != e.y || 0 != e.z || 0 != e.w) ? this._shaderValues.addDefine(Q
					.SHADERDEFINE_TILINGOFFSET) : this._shaderValues.removeDefine(Q.SHADERDEFINE_TILINGOFFSET), this
				._shaderValues.setVector(Q.TILINGOFFSET, e)
		}
		set renderMode(e) {
			switch (e) {
				case Q.RENDERMODE_OPAQUE:
					this.alphaTest = !1, this.renderQueue = W.RENDERQUEUE_OPAQUE, this.depthWrite = !0, this.cull =
						X.CULL_BACK, this.blend = X.BLEND_DISABLE, this.depthTest = X.DEPTHTEST_LESS, this
						._shaderValues.removeDefine(Q.SHADERDEFINE_ALPHAPREMULTIPLY);
					break;
				case Q.RENDERMODE_CUTOUT:
					this.renderQueue = W.RENDERQUEUE_ALPHATEST, this.alphaTest = !0, this.depthWrite = !0, this
						.cull = X.CULL_BACK, this.blend = X.BLEND_DISABLE, this.depthTest = X.DEPTHTEST_LESS, this
						._shaderValues.removeDefine(Q.SHADERDEFINE_ALPHAPREMULTIPLY);
					break;
				case Q.RENDERMODE_FADE:
					this.renderQueue = W.RENDERQUEUE_TRANSPARENT, this.alphaTest = !1, this.depthWrite = !1, this
						.cull = X.CULL_BACK, this.blend = X.BLEND_ENABLE_ALL, this.blendSrc = X
						.BLENDPARAM_SRC_ALPHA, this.blendDst = X.BLENDPARAM_ONE_MINUS_SRC_ALPHA, this.depthTest = X
						.DEPTHTEST_LESS, this._shaderValues.removeDefine(Q.SHADERDEFINE_ALPHAPREMULTIPLY);
					break;
				case Q.RENDERMODE_TRANSPARENT:
					this.renderQueue = W.RENDERQUEUE_TRANSPARENT, this.alphaTest = !1, this.depthWrite = !1, this
						.cull = X.CULL_BACK, this.blend = X.BLEND_ENABLE_ALL, this.blendSrc = X.BLENDPARAM_ONE, this
						.blendDst = X.BLENDPARAM_ONE_MINUS_SRC_ALPHA, this.depthTest = X.DEPTHTEST_LESS, this
						._shaderValues.addDefine(Q.SHADERDEFINE_ALPHAPREMULTIPLY);
					break;
				default:
					throw new Error("PBRSpecularMaterial : renderMode value error.")
			}
		}
		get depthWrite() {
			return this._shaderValues.getBool(Q.DEPTH_WRITE)
		}
		set depthWrite(e) {
			this._shaderValues.setBool(Q.DEPTH_WRITE, e)
		}
		get cull() {
			return this._shaderValues.getInt(Q.CULL)
		}
		set cull(e) {
			this._shaderValues.setInt(Q.CULL, e)
		}
		get blend() {
			return this._shaderValues.getInt(Q.BLEND)
		}
		set blend(e) {
			this._shaderValues.setInt(Q.BLEND, e)
		}
		get blendSrc() {
			return this._shaderValues.getInt(Q.BLEND_SRC)
		}
		set blendSrc(e) {
			this._shaderValues.setInt(Q.BLEND_SRC, e)
		}
		get blendDst() {
			return this._shaderValues.getInt(Q.BLEND_DST)
		}
		set blendDst(e) {
			this._shaderValues.setInt(Q.BLEND_DST, e)
		}
		get depthTest() {
			return this._shaderValues.getInt(Q.DEPTH_TEST)
		}
		set depthTest(e) {
			this._shaderValues.setInt(Q.DEPTH_TEST, e)
		}
		clone() {
			var e = new Q;
			return this.cloneTo(e), e
		}
		cloneTo(e) {
			super.cloneTo(e);
			var t = e;
			this._albedoColor.cloneTo(t._albedoColor), this._emissionColor.cloneTo(t._emissionColor)
		}
	}
	Q.SmoothnessSource_MetallicGlossTexture_Alpha = 0, Q.SmoothnessSource_AlbedoTexture_Alpha = 1, Q.RENDERMODE_OPAQUE =
		0, Q.RENDERMODE_CUTOUT = 1, Q.RENDERMODE_FADE = 2, Q.RENDERMODE_TRANSPARENT = 3, Q.ALBEDOTEXTURE = F
		.propertyNameToID("u_AlbedoTexture"), Q.METALLICGLOSSTEXTURE = F.propertyNameToID("u_MetallicGlossTexture"), Q
		.NORMALTEXTURE = F.propertyNameToID("u_NormalTexture"), Q.PARALLAXTEXTURE = F.propertyNameToID(
			"u_ParallaxTexture"), Q.OCCLUSIONTEXTURE = F.propertyNameToID("u_OcclusionTexture"), Q.EMISSIONTEXTURE = F
		.propertyNameToID("u_EmissionTexture"), Q.ALBEDOCOLOR = F.propertyNameToID("u_AlbedoColor"), Q.EMISSIONCOLOR = F
		.propertyNameToID("u_EmissionColor"), Q.METALLIC = F.propertyNameToID("u_metallic"), Q.SMOOTHNESS = F
		.propertyNameToID("u_smoothness"), Q.SMOOTHNESSSCALE = F.propertyNameToID("u_smoothnessScale"), Q
		.SMOOTHNESSSOURCE = -1, Q.OCCLUSIONSTRENGTH = F.propertyNameToID("u_occlusionStrength"), Q.NORMALSCALE = F
		.propertyNameToID("u_normalScale"), Q.PARALLAXSCALE = F.propertyNameToID("u_parallaxScale"), Q
		.ENABLEEMISSION = -1, Q.ENABLEREFLECT = -1, Q.TILINGOFFSET = F.propertyNameToID("u_TilingOffset"), Q.CULL = F
		.propertyNameToID("s_Cull"), Q.BLEND = F.propertyNameToID("s_Blend"), Q.BLEND_SRC = F.propertyNameToID(
			"s_BlendSrc"), Q.BLEND_DST = F.propertyNameToID("s_BlendDst"), Q.DEPTH_TEST = F.propertyNameToID(
			"s_DepthTest"), Q.DEPTH_WRITE = F.propertyNameToID("s_DepthWrite");
	class K extends W {
		constructor() {
			super(), this.setShaderName("SkyBox"), this.tintColor = new a(.5, .5, .5, .5), this.exposure = 1, this
				.rotation = 0
		}
		static __initDefine__() {}
		get tintColor() {
			return this._shaderValues.getVector(K.TINTCOLOR)
		}
		set tintColor(e) {
			this._shaderValues.setVector(K.TINTCOLOR, e)
		}
		get exposure() {
			return this._shaderValues.getNumber(K.EXPOSURE)
		}
		set exposure(e) {
			this._shaderValues.setNumber(K.EXPOSURE, e)
		}
		get rotation() {
			return this._shaderValues.getNumber(K.ROTATION)
		}
		set rotation(e) {
			this._shaderValues.setNumber(K.ROTATION, e)
		}
		get textureCube() {
			return this._shaderValues.getTexture(K.TEXTURECUBE)
		}
		set textureCube(e) {
			this._shaderValues.setTexture(K.TEXTURECUBE, e)
		}
		clone() {
			var e = new K;
			return this.cloneTo(e), e
		}
	}
	K.TINTCOLOR = F.propertyNameToID("u_TintColor"), K.EXPOSURE = F.propertyNameToID("u_Exposure"), K.ROTATION = F
		.propertyNameToID("u_Rotation"), K.TEXTURECUBE = F.propertyNameToID("u_CubeTexture");
	class J extends W {
		constructor() {
			super(), this.setShaderName("SkyBoxProcedural"), this.sunDisk = J.SUN_HIGH_QUALITY, this.sunSize = .04,
				this.sunSizeConvergence = 5, this.atmosphereThickness = 1, this.skyTint = new a(.5, .5, .5, 1), this
				.groundTint = new a(.369, .349, .341, 1), this.exposure = 1.3
		}
		static __initDefine__() {
			J.SHADERDEFINE_SUN_HIGH_QUALITY = F.getDefineByName("SUN_HIGH_QUALITY"), J.SHADERDEFINE_SUN_SIMPLE = F
				.getDefineByName("SUN_SIMPLE")
		}
		get sunDisk() {
			return this._sunDisk
		}
		set sunDisk(e) {
			switch (e) {
				case J.SUN_HIGH_QUALITY:
					this._shaderValues.removeDefine(J.SHADERDEFINE_SUN_SIMPLE), this._shaderValues.addDefine(J
						.SHADERDEFINE_SUN_HIGH_QUALITY);
					break;
				case J.SUN_SIMPLE:
					this._shaderValues.removeDefine(J.SHADERDEFINE_SUN_HIGH_QUALITY), this._shaderValues.addDefine(J
						.SHADERDEFINE_SUN_SIMPLE);
					break;
				case J.SUN_NODE:
					this._shaderValues.removeDefine(J.SHADERDEFINE_SUN_HIGH_QUALITY), this._shaderValues
						.removeDefine(J.SHADERDEFINE_SUN_SIMPLE);
					break;
				default:
					throw "SkyBoxProceduralMaterial: unknown sun value."
			}
			this._sunDisk = e
		}
		get sunSize() {
			return this._shaderValues.getNumber(J.SUNSIZE)
		}
		set sunSize(e) {
			e = Math.min(Math.max(0, e), 1), this._shaderValues.setNumber(J.SUNSIZE, e)
		}
		get sunSizeConvergence() {
			return this._shaderValues.getNumber(J.SUNSIZECONVERGENCE)
		}
		set sunSizeConvergence(e) {
			e = Math.min(Math.max(0, e), 20), this._shaderValues.setNumber(J.SUNSIZECONVERGENCE, e)
		}
		get atmosphereThickness() {
			return this._shaderValues.getNumber(J.ATMOSPHERETHICKNESS)
		}
		set atmosphereThickness(e) {
			e = Math.min(Math.max(0, e), 5), this._shaderValues.setNumber(J.ATMOSPHERETHICKNESS, e)
		}
		get skyTint() {
			return this._shaderValues.getVector(J.SKYTINT)
		}
		set skyTint(e) {
			this._shaderValues.setVector(J.SKYTINT, e)
		}
		get groundTint() {
			return this._shaderValues.getVector(J.GROUNDTINT)
		}
		set groundTint(e) {
			this._shaderValues.setVector(J.GROUNDTINT, e)
		}
		get exposure() {
			return this._shaderValues.getNumber(J.EXPOSURE)
		}
		set exposure(e) {
			e = Math.min(Math.max(0, e), 8), this._shaderValues.setNumber(J.EXPOSURE, e)
		}
		clone() {
			var e = new J;
			return this.cloneTo(e), e
		}
	}
	J.SUN_NODE = 0, J.SUN_SIMPLE = 1, J.SUN_HIGH_QUALITY = 2, J.SUNSIZE = F.propertyNameToID("u_SunSize"), J
		.SUNSIZECONVERGENCE = F.propertyNameToID("u_SunSizeConvergence"), J.ATMOSPHERETHICKNESS = F.propertyNameToID(
			"u_AtmosphereThickness"), J.SKYTINT = F.propertyNameToID("u_SkyTint"), J.GROUNDTINT = F.propertyNameToID(
			"u_GroundTint"), J.EXPOSURE = F.propertyNameToID("u_Exposure");
	class $ extends W {
		constructor() {
			super(), this._albedoColor = new a(1, 1, 1, 1), this._albedoIntensity = 1, this._enableVertexColor = !1,
				this.setShaderName("Unlit"), this._shaderValues.setVector($.ALBEDOCOLOR, new a(1, 1, 1, 1)), this
				.renderMode = $.RENDERMODE_OPAQUE
		}
		static __initDefine__() {
			$.SHADERDEFINE_ALBEDOTEXTURE = F.getDefineByName("ALBEDOTEXTURE"), $.SHADERDEFINE_TILINGOFFSET = F
				.getDefineByName("TILINGOFFSET"), $.SHADERDEFINE_ENABLEVERTEXCOLOR = F.getDefineByName(
					"ENABLEVERTEXCOLOR")
		}
		get _ColorR() {
			return this._albedoColor.x
		}
		set _ColorR(e) {
			this._albedoColor.x = e, this.albedoColor = this._albedoColor
		}
		get _ColorG() {
			return this._albedoColor.y
		}
		set _ColorG(e) {
			this._albedoColor.y = e, this.albedoColor = this._albedoColor
		}
		get _ColorB() {
			return this._albedoColor.z
		}
		set _ColorB(e) {
			this._albedoColor.z = e, this.albedoColor = this._albedoColor
		}
		get _ColorA() {
			return this._albedoColor.w
		}
		set _ColorA(e) {
			this._albedoColor.w = e, this.albedoColor = this._albedoColor
		}
		get _AlbedoIntensity() {
			return this._albedoIntensity
		}
		set _AlbedoIntensity(e) {
			if (this._albedoIntensity !== e) {
				var t = this._shaderValues.getVector($.ALBEDOCOLOR);
				a.scale(this._albedoColor, e, t), this._albedoIntensity = e, this._shaderValues.setVector($
					.ALBEDOCOLOR, t)
			}
		}
		get _MainTex_STX() {
			return this._shaderValues.getVector($.TILINGOFFSET).x
		}
		set _MainTex_STX(e) {
			var t = this._shaderValues.getVector($.TILINGOFFSET);
			t.x = e, this.tilingOffset = t
		}
		get _MainTex_STY() {
			return this._shaderValues.getVector($.TILINGOFFSET).y
		}
		set _MainTex_STY(e) {
			var t = this._shaderValues.getVector($.TILINGOFFSET);
			t.y = e, this.tilingOffset = t
		}
		get _MainTex_STZ() {
			return this._shaderValues.getVector($.TILINGOFFSET).z
		}
		set _MainTex_STZ(e) {
			var t = this._shaderValues.getVector($.TILINGOFFSET);
			t.z = e, this.tilingOffset = t
		}
		get _MainTex_STW() {
			return this._shaderValues.getVector($.TILINGOFFSET).w
		}
		set _MainTex_STW(e) {
			var t = this._shaderValues.getVector($.TILINGOFFSET);
			t.w = e, this.tilingOffset = t
		}
		get _Cutoff() {
			return this.alphaTestValue
		}
		set _Cutoff(e) {
			this.alphaTestValue = e
		}
		get albedoColorR() {
			return this._ColorR
		}
		set albedoColorR(e) {
			this._ColorR = e
		}
		get albedoColorG() {
			return this._ColorG
		}
		set albedoColorG(e) {
			this._ColorG = e
		}
		get albedoColorB() {
			return this._ColorB
		}
		set albedoColorB(e) {
			this._ColorB = e
		}
		get albedoColorA() {
			return this._ColorA
		}
		set albedoColorA(e) {
			this._ColorA = e
		}
		get albedoColor() {
			return this._albedoColor
		}
		set albedoColor(e) {
			var t = this._shaderValues.getVector($.ALBEDOCOLOR);
			a.scale(e, this._albedoIntensity, t), this._albedoColor = e, this._shaderValues.setVector($.ALBEDOCOLOR,
				t)
		}
		get albedoIntensity() {
			return this._albedoIntensity
		}
		set albedoIntensity(e) {
			this._AlbedoIntensity = e
		}
		get albedoTexture() {
			return this._shaderValues.getTexture($.ALBEDOTEXTURE)
		}
		set albedoTexture(e) {
			e ? this._shaderValues.addDefine($.SHADERDEFINE_ALBEDOTEXTURE) : this._shaderValues.removeDefine($
				.SHADERDEFINE_ALBEDOTEXTURE), this._shaderValues.setTexture($.ALBEDOTEXTURE, e)
		}
		get tilingOffsetX() {
			return this._MainTex_STX
		}
		set tilingOffsetX(e) {
			this._MainTex_STX = e
		}
		get tilingOffsetY() {
			return this._MainTex_STY
		}
		set tilingOffsetY(e) {
			this._MainTex_STY = e
		}
		get tilingOffsetZ() {
			return this._MainTex_STZ
		}
		set tilingOffsetZ(e) {
			this._MainTex_STZ = e
		}
		get tilingOffsetW() {
			return this._MainTex_STW
		}
		set tilingOffsetW(e) {
			this._MainTex_STW = e
		}
		get tilingOffset() {
			return this._shaderValues.getVector($.TILINGOFFSET)
		}
		set tilingOffset(e) {
			e && (1 != e.x || 1 != e.y || 0 != e.z || 0 != e.w) ? this._shaderValues.addDefine($
					.SHADERDEFINE_TILINGOFFSET) : this._shaderValues.removeDefine($.SHADERDEFINE_TILINGOFFSET), this
				._shaderValues.setVector($.TILINGOFFSET, e)
		}
		get enableVertexColor() {
			return this._enableVertexColor
		}
		set enableVertexColor(e) {
			this._enableVertexColor = e, e ? this._shaderValues.addDefine($.SHADERDEFINE_ENABLEVERTEXCOLOR) : this
				._shaderValues.removeDefine($.SHADERDEFINE_ENABLEVERTEXCOLOR)
		}
		set renderMode(e) {
			switch (e) {
				case $.RENDERMODE_OPAQUE:
					this.alphaTest = !1, this.renderQueue = W.RENDERQUEUE_OPAQUE, this.depthWrite = !0, this.cull =
						X.CULL_BACK, this.blend = X.BLEND_DISABLE, this.depthTest = X.DEPTHTEST_LESS;
					break;
				case $.RENDERMODE_CUTOUT:
					this.renderQueue = W.RENDERQUEUE_ALPHATEST, this.alphaTest = !0, this.depthWrite = !0, this
						.cull = X.CULL_BACK, this.blend = X.BLEND_DISABLE, this.depthTest = X.DEPTHTEST_LESS;
					break;
				case $.RENDERMODE_TRANSPARENT:
					this.renderQueue = W.RENDERQUEUE_TRANSPARENT, this.alphaTest = !1, this.depthWrite = !1, this
						.cull = X.CULL_BACK, this.blend = X.BLEND_ENABLE_ALL, this.blendSrc = X
						.BLENDPARAM_SRC_ALPHA, this.blendDst = X.BLENDPARAM_ONE_MINUS_SRC_ALPHA, this.depthTest = X
						.DEPTHTEST_LESS;
					break;
				default:
					throw new Error("UnlitMaterial : renderMode value error.")
			}
		}
		get depthWrite() {
			return this._shaderValues.getBool($.DEPTH_WRITE)
		}
		set depthWrite(e) {
			this._shaderValues.setBool($.DEPTH_WRITE, e)
		}
		get cull() {
			return this._shaderValues.getInt($.CULL)
		}
		set cull(e) {
			this._shaderValues.setInt($.CULL, e)
		}
		get blend() {
			return this._shaderValues.getInt($.BLEND)
		}
		set blend(e) {
			this._shaderValues.setInt($.BLEND, e)
		}
		get blendSrc() {
			return this._shaderValues.getInt($.BLEND_SRC)
		}
		set blendSrc(e) {
			this._shaderValues.setInt($.BLEND_SRC, e)
		}
		get blendDst() {
			return this._shaderValues.getInt($.BLEND_DST)
		}
		set blendDst(e) {
			this._shaderValues.setInt($.BLEND_DST, e)
		}
		get depthTest() {
			return this._shaderValues.getInt($.DEPTH_TEST)
		}
		set depthTest(e) {
			this._shaderValues.setInt($.DEPTH_TEST, e)
		}
		clone() {
			var e = new $;
			return this.cloneTo(e), e
		}
	}
	$.RENDERMODE_OPAQUE = 0, $.RENDERMODE_CUTOUT = 1, $.RENDERMODE_TRANSPARENT = 2, $.RENDERMODE_ADDTIVE = 3, $
		.ALBEDOTEXTURE = F.propertyNameToID("u_AlbedoTexture"), $.ALBEDOCOLOR = F.propertyNameToID("u_AlbedoColor"), $
		.TILINGOFFSET = F.propertyNameToID("u_TilingOffset"), $.CULL = F.propertyNameToID("s_Cull"), $.BLEND = F
		.propertyNameToID("s_Blend"), $.BLEND_SRC = F.propertyNameToID("s_BlendSrc"), $.BLEND_DST = F.propertyNameToID(
			"s_BlendDst"), $.DEPTH_TEST = F.propertyNameToID("s_DepthTest"), $.DEPTH_WRITE = F.propertyNameToID(
			"s_DepthWrite");
	class ee extends W {
		constructor() {
			super(), this.setShaderName("WaterPrimary"), this._shaderValues.setVector(ee.HORIZONCOLOR, new a(.172,
				.463, .435, 0)), this._shaderValues.setNumber(ee.WAVESCALE, .15), this._shaderValues.setVector(
				ee.WAVESPEED, new a(19, 9, -16, -7))
		}
		static __initDefine__() {
			ee.SHADERDEFINE_MAINTEXTURE = F.getDefineByName("MAINTEXTURE"), ee.SHADERDEFINE_NORMALTEXTURE = F
				.getDefineByName("NORMALTEXTURE")
		}
		get horizonColor() {
			return this._shaderValues.getVector(ee.HORIZONCOLOR)
		}
		set horizonColor(e) {
			this._shaderValues.setVector(ee.HORIZONCOLOR, e)
		}
		get mainTexture() {
			return this._shaderValues.getTexture(ee.MAINTEXTURE)
		}
		set mainTexture(e) {
			e ? this._shaderValues.addDefine(ee.SHADERDEFINE_MAINTEXTURE) : this._shaderValues.removeDefine(ee
				.SHADERDEFINE_MAINTEXTURE), this._shaderValues.setTexture(ee.MAINTEXTURE, e)
		}
		get normalTexture() {
			return this._shaderValues.getTexture(ee.NORMALTEXTURE)
		}
		set normalTexture(e) {
			e ? this._shaderValues.addDefine(ee.SHADERDEFINE_NORMALTEXTURE) : this._shaderValues.removeDefine(ee
				.SHADERDEFINE_NORMALTEXTURE), this._shaderValues.setTexture(ee.NORMALTEXTURE, e)
		}
		get waveScale() {
			return this._shaderValues.getNumber(ee.WAVESCALE)
		}
		set waveScale(e) {
			this._shaderValues.setNumber(ee.WAVESCALE, e)
		}
		get waveSpeed() {
			return this._shaderValues.getVector(ee.WAVESPEED)
		}
		set waveSpeed(e) {
			this._shaderValues.setVector(ee.WAVESPEED, e)
		}
		clone() {
			var e = new ee;
			return this.cloneTo(e), e
		}
	}
	ee.HORIZONCOLOR = F.propertyNameToID("u_HorizonColor"), ee.MAINTEXTURE = F.propertyNameToID("u_MainTexture"), ee
		.NORMALTEXTURE = F.propertyNameToID("u_NormalTexture"), ee.WAVESCALE = F.propertyNameToID("u_WaveScale"), ee
		.WAVESPEED = F.propertyNameToID("u_WaveSpeed");
	class te {
		constructor(e = 1, t = 1, r = 1, i = 1) {
			this.r = e, this.g = t, this.b = r, this.a = i
		}
		static gammaToLinearSpace(e) {
			return e <= .04045 ? e / 12.92 : e < 1 ? Math.pow((e + .055) / 1.055, 2.4) : Math.pow(e, 2.4)
		}
		static linearToGammaSpace(e) {
			return e <= 0 ? 0 : e <= .0031308 ? 12.92 * e : e <= 1 ? 1.055 * Math.pow(e, .41666) - .055 : Math.pow(
				e, .41666)
		}
		toLinear(e) {
			e.r = te.gammaToLinearSpace(this.r), e.g = te.gammaToLinearSpace(this.g), e.b = te.gammaToLinearSpace(
				this.b)
		}
		toGamma(e) {
			e.r = te.linearToGammaSpace(this.r), e.g = te.linearToGammaSpace(this.g), e.b = te.linearToGammaSpace(
				this.b)
		}
		cloneTo(e) {
			var t = e;
			t.r = this.r, t.g = this.g, t.b = this.b, t.a = this.a
		}
		clone() {
			var e = new te;
			return this.cloneTo(e), e
		}
		forNativeElement() {}
	}
	te.RED = new te(1, 0, 0, 1), te.GREEN = new te(0, 1, 0, 1), te.BLUE = new te(0, 0, 1, 1), te.CYAN = new te(0, 1, 1,
			1), te.YELLOW = new te(1, .92, .016, 1), te.MAGENTA = new te(1, 0, 1, 1), te.GRAY = new te(.5, .5, .5, 1),
		te.WHITE = new te(1, 1, 1, 1), te.BLACK = new te(0, 0, 0, 1);
	class re {
		constructor() {
			this._batchRenderElementPool = []
		}
		static _registerManager(e) {
			re._managers.push(e)
		}
		_clear() {
			this._batchRenderElementPoolIndex = 0
		}
		_getBatchRenderElementFromPool() {
			throw "StaticBatch:must override this function."
		}
		dispose() {}
	}
	re._managers = [];
	class ie extends t.EventDispatcher {
		constructor(e) {
			super(), this._localPosition = new n(0, 0, 0), this._localRotation = new u(0, 0, 0, 1), this
				._localScale = new n(1, 1, 1), this._localRotationEuler = new n(0, 0, 0), this._localMatrix =
				new p, this._position = new n(0, 0, 0), this._rotation = new u(0, 0, 0, 1), this._scale = new n(
					1, 1, 1), this._rotationEuler = new n(0, 0, 0), this._worldMatrix = new p, this._children =
				null, this._parent = null, this._dummy = null, this._transformFlag = 0, this._owner = e, this
				._children = [], this._setTransformFlag(ie.TRANSFORM_LOCALQUATERNION | ie.TRANSFORM_LOCALEULER |
					ie.TRANSFORM_LOCALMATRIX, !1), this._setTransformFlag(ie.TRANSFORM_WORLDPOSITION | ie
					.TRANSFORM_WORLDQUATERNION | ie.TRANSFORM_WORLDEULER | ie.TRANSFORM_WORLDSCALE | ie
					.TRANSFORM_WORLDMATRIX, !0)
		}
		get _isFrontFaceInvert() {
			var e = this.getWorldLossyScale(),
				t = e.x < 0;
			return e.y < 0 && (t = !t), e.z < 0 && (t = !t), t
		}
		get owner() {
			return this._owner
		}
		get worldNeedUpdate() {
			return this._getTransformFlag(ie.TRANSFORM_WORLDMATRIX)
		}
		get localPositionX() {
			return this._localPosition.x
		}
		set localPositionX(e) {
			this._localPosition.x = e, this.localPosition = this._localPosition
		}
		get localPositionY() {
			return this._localPosition.y
		}
		set localPositionY(e) {
			this._localPosition.y = e, this.localPosition = this._localPosition
		}
		get localPositionZ() {
			return this._localPosition.z
		}
		set localPositionZ(e) {
			this._localPosition.z = e, this.localPosition = this._localPosition
		}
		get localPosition() {
			return this._localPosition
		}
		set localPosition(e) {
			this._localPosition !== e && e.cloneTo(this._localPosition), this._setTransformFlag(ie
				.TRANSFORM_LOCALMATRIX, !0), this._onWorldPositionTransform()
		}
		get localRotationX() {
			return this.localRotation.x
		}
		set localRotationX(e) {
			this._localRotation.x = e, this.localRotation = this._localRotation
		}
		get localRotationY() {
			return this.localRotation.y
		}
		set localRotationY(e) {
			this._localRotation.y = e, this.localRotation = this._localRotation
		}
		get localRotationZ() {
			return this.localRotation.z
		}
		set localRotationZ(e) {
			this._localRotation.z = e, this.localRotation = this._localRotation
		}
		get localRotationW() {
			return this.localRotation.w
		}
		set localRotationW(e) {
			this._localRotation.w = e, this.localRotation = this._localRotation
		}
		get localRotation() {
			if (this._getTransformFlag(ie.TRANSFORM_LOCALQUATERNION)) {
				var e = this._localRotationEuler;
				u.createFromYawPitchRoll(e.y / ie._angleToRandin, e.x / ie._angleToRandin, e.z / ie
					._angleToRandin, this._localRotation), this._setTransformFlag(ie
					.TRANSFORM_LOCALQUATERNION, !1)
			}
			return this._localRotation
		}
		set localRotation(e) {
			this._localRotation !== e && e.cloneTo(this._localRotation), this._localRotation.normalize(this
					._localRotation), this._setTransformFlag(ie.TRANSFORM_LOCALEULER | ie.TRANSFORM_LOCALMATRIX,
					!0), this._setTransformFlag(ie.TRANSFORM_LOCALQUATERNION, !1), this
				._onWorldRotationTransform()
		}
		get localScaleX() {
			return this._localScale.x
		}
		set localScaleX(e) {
			this._localScale.x = e, this.localScale = this._localScale
		}
		get localScaleY() {
			return this._localScale.y
		}
		set localScaleY(e) {
			this._localScale.y = e, this.localScale = this._localScale
		}
		get localScaleZ() {
			return this._localScale.z
		}
		set localScaleZ(e) {
			this._localScale.z = e, this.localScale = this._localScale
		}
		get localScale() {
			return this._localScale
		}
		set localScale(e) {
			this._localScale !== e && e.cloneTo(this._localScale), this._setTransformFlag(ie
				.TRANSFORM_LOCALMATRIX, !0), this._onWorldScaleTransform()
		}
		get localRotationEulerX() {
			return this.localRotationEuler.x
		}
		set localRotationEulerX(e) {
			this._localRotationEuler.x = e, this.localRotationEuler = this._localRotationEuler
		}
		get localRotationEulerY() {
			return this.localRotationEuler.y
		}
		set localRotationEulerY(e) {
			this._localRotationEuler.y = e, this.localRotationEuler = this._localRotationEuler
		}
		get localRotationEulerZ() {
			return this.localRotationEuler.z
		}
		set localRotationEulerZ(e) {
			this._localRotationEuler.z = e, this.localRotationEuler = this._localRotationEuler
		}
		get localRotationEuler() {
			if (this._getTransformFlag(ie.TRANSFORM_LOCALEULER)) {
				this._localRotation.getYawPitchRoll(ie._tempVector30);
				var e = ie._tempVector30,
					t = this._localRotationEuler;
				t.x = e.y * ie._angleToRandin, t.y = e.x * ie._angleToRandin, t.z = e.z * ie._angleToRandin,
					this._setTransformFlag(ie.TRANSFORM_LOCALEULER, !1)
			}
			return this._localRotationEuler
		}
		set localRotationEuler(e) {
			this._localRotationEuler !== e && e.cloneTo(this._localRotationEuler), this._setTransformFlag(ie
				.TRANSFORM_LOCALEULER, !1), this._setTransformFlag(ie.TRANSFORM_LOCALQUATERNION | ie
				.TRANSFORM_LOCALMATRIX, !0), this._onWorldRotationTransform()
		}
		get localMatrix() {
			return this._getTransformFlag(ie.TRANSFORM_LOCALMATRIX) && (p.createAffineTransformation(this
					._localPosition, this.localRotation, this._localScale, this._localMatrix), this
				._setTransformFlag(ie.TRANSFORM_LOCALMATRIX, !1)), this._localMatrix
		}
		set localMatrix(e) {
			this._localMatrix !== e && e.cloneTo(this._localMatrix), this._localMatrix.decomposeTransRotScale(
					this._localPosition, this._localRotation, this._localScale), this._setTransformFlag(ie
					.TRANSFORM_LOCALEULER, !0), this._setTransformFlag(ie.TRANSFORM_LOCALMATRIX, !1), this
				._onWorldTransform()
		}
		get position() {
			if (this._getTransformFlag(ie.TRANSFORM_WORLDPOSITION)) {
				if (null != this._parent) {
					var e = this.worldMatrix.elements;
					this._position.x = e[12], this._position.y = e[13], this._position.z = e[14]
				} else this._localPosition.cloneTo(this._position);
				this._setTransformFlag(ie.TRANSFORM_WORLDPOSITION, !1)
			}
			return this._position
		}
		set position(e) {
			if (null != this._parent) {
				var t = ie._tempMatrix0;
				this._parent.worldMatrix.invert(t), n.transformCoordinate(e, t, this._localPosition)
			} else e.cloneTo(this._localPosition);
			this.localPosition = this._localPosition, this._position !== e && e.cloneTo(this._position), this
				._setTransformFlag(ie.TRANSFORM_WORLDPOSITION, !1)
		}
		get rotation() {
			return this._getTransformFlag(ie.TRANSFORM_WORLDQUATERNION) && (null != this._parent ? u.multiply(
				this._parent.rotation, this.localRotation, this._rotation) : this.localRotation.cloneTo(
				this._rotation), this._setTransformFlag(ie.TRANSFORM_WORLDQUATERNION, !1)), this._rotation
		}
		set rotation(e) {
			null != this._parent ? (this._parent.rotation.invert(ie._tempQuaternion0), u.multiply(ie
					._tempQuaternion0, e, this._localRotation)) : e.cloneTo(this._localRotation), this
				.localRotation = this._localRotation, e !== this._rotation && e.cloneTo(this._rotation), this
				._setTransformFlag(ie.TRANSFORM_WORLDQUATERNION, !1)
		}
		get rotationEuler() {
			if (this._getTransformFlag(ie.TRANSFORM_WORLDEULER)) {
				this.rotation.getYawPitchRoll(ie._tempVector30);
				var e = ie._tempVector30,
					t = this._rotationEuler;
				t.x = e.y * ie._angleToRandin, t.y = e.x * ie._angleToRandin, t.z = e.z * ie._angleToRandin,
					this._setTransformFlag(ie.TRANSFORM_WORLDEULER, !1)
			}
			return this._rotationEuler
		}
		set rotationEuler(e) {
			u.createFromYawPitchRoll(e.y / ie._angleToRandin, e.x / ie._angleToRandin, e.z / ie._angleToRandin,
				this._rotation), this.rotation = this._rotation, this._rotationEuler !== e && e.cloneTo(this
				._rotationEuler), this._setTransformFlag(ie.TRANSFORM_WORLDEULER, !1)
		}
		get worldMatrix() {
			return this._getTransformFlag(ie.TRANSFORM_WORLDMATRIX) && (null != this._parent ? p.multiply(this
				._parent.worldMatrix, this.localMatrix, this._worldMatrix) : this.localMatrix.cloneTo(
				this._worldMatrix), this._setTransformFlag(ie.TRANSFORM_WORLDMATRIX, !1)), this._worldMatrix
		}
		set worldMatrix(e) {
			null === this._parent ? e.cloneTo(this._localMatrix) : (this._parent.worldMatrix.invert(this
					._localMatrix), p.multiply(this._localMatrix, e, this._localMatrix)), this.localMatrix =
				this._localMatrix, this._worldMatrix !== e && e.cloneTo(this._worldMatrix), this
				._setTransformFlag(ie.TRANSFORM_WORLDMATRIX, !1)
		}
		_getScaleMatrix() {
			var e = ie._tempQuaternion0,
				t = ie._tempMatrix3x30,
				r = ie._tempMatrix3x31,
				i = ie._tempMatrix3x32;
			return d.createFromMatrix4x4(this.worldMatrix, r), this.rotation.invert(e), d
				.createRotationQuaternion(e, t), d.multiply(t, r, i), i
		}
		_setTransformFlag(e, t) {
			t ? this._transformFlag |= e : this._transformFlag &= ~e
		}
		_getTransformFlag(e) {
			return 0 != (this._transformFlag & e)
		}
		_setParent(e) {
			if (this._parent !== e) {
				if (this._parent) {
					var t = this._parent._children,
						r = t.indexOf(this);
					t.splice(r, 1)
				}
				e && (e._children.push(this), e && this._onWorldTransform()), this._parent = e
			}
		}
		_onWorldPositionRotationTransform() {
			if (!(this._getTransformFlag(ie.TRANSFORM_WORLDMATRIX) && this._getTransformFlag(ie
						.TRANSFORM_WORLDPOSITION) && this._getTransformFlag(ie.TRANSFORM_WORLDQUATERNION) &&
					this._getTransformFlag(ie.TRANSFORM_WORLDEULER))) {
				this._setTransformFlag(ie.TRANSFORM_WORLDMATRIX | ie.TRANSFORM_WORLDPOSITION | ie
					.TRANSFORM_WORLDQUATERNION | ie.TRANSFORM_WORLDEULER, !0), this.event(t.Event
					.TRANSFORM_CHANGED, this._transformFlag);
				for (var e = 0, r = this._children.length; e < r; e++) this._children[e]
					._onWorldPositionRotationTransform()
			}
		}
		_onWorldPositionScaleTransform() {
			if (!this._getTransformFlag(ie.TRANSFORM_WORLDMATRIX) || !this._getTransformFlag(ie
					.TRANSFORM_WORLDPOSITION) || !this._getTransformFlag(ie.TRANSFORM_WORLDSCALE)) {
				this._setTransformFlag(ie.TRANSFORM_WORLDMATRIX | ie.TRANSFORM_WORLDPOSITION | ie
					.TRANSFORM_WORLDSCALE, !0), this.event(t.Event.TRANSFORM_CHANGED, this._transformFlag);
				for (var e = 0, r = this._children.length; e < r; e++) this._children[e]
					._onWorldPositionScaleTransform()
			}
		}
		_onWorldPositionTransform() {
			if (!this._getTransformFlag(ie.TRANSFORM_WORLDMATRIX) || !this._getTransformFlag(ie
					.TRANSFORM_WORLDPOSITION)) {
				this._setTransformFlag(ie.TRANSFORM_WORLDMATRIX | ie.TRANSFORM_WORLDPOSITION, !0), this.event(t
					.Event.TRANSFORM_CHANGED, this._transformFlag);
				for (var e = 0, r = this._children.length; e < r; e++) this._children[e]
					._onWorldPositionTransform()
			}
		}
		_onWorldRotationTransform() {
			if (!this._getTransformFlag(ie.TRANSFORM_WORLDMATRIX) || !this._getTransformFlag(ie
					.TRANSFORM_WORLDQUATERNION) || !this._getTransformFlag(ie.TRANSFORM_WORLDEULER)) {
				this._setTransformFlag(ie.TRANSFORM_WORLDMATRIX | ie.TRANSFORM_WORLDQUATERNION | ie
					.TRANSFORM_WORLDEULER, !0), this.event(t.Event.TRANSFORM_CHANGED, this._transformFlag);
				for (var e = 0, r = this._children.length; e < r; e++) this._children[e]
					._onWorldPositionRotationTransform()
			}
		}
		_onWorldScaleTransform() {
			if (!this._getTransformFlag(ie.TRANSFORM_WORLDMATRIX) || !this._getTransformFlag(ie
					.TRANSFORM_WORLDSCALE)) {
				this._setTransformFlag(ie.TRANSFORM_WORLDMATRIX | ie.TRANSFORM_WORLDSCALE, !0), this.event(t
					.Event.TRANSFORM_CHANGED, this._transformFlag);
				for (var e = 0, r = this._children.length; e < r; e++) this._children[e]
					._onWorldPositionScaleTransform()
			}
		}
		_onWorldTransform() {
			if (!(this._getTransformFlag(ie.TRANSFORM_WORLDMATRIX) && this._getTransformFlag(ie
						.TRANSFORM_WORLDPOSITION) && this._getTransformFlag(ie.TRANSFORM_WORLDQUATERNION) &&
					this._getTransformFlag(ie.TRANSFORM_WORLDEULER) && this._getTransformFlag(ie
						.TRANSFORM_WORLDSCALE))) {
				this._setTransformFlag(ie.TRANSFORM_WORLDMATRIX | ie.TRANSFORM_WORLDPOSITION | ie
						.TRANSFORM_WORLDQUATERNION | ie.TRANSFORM_WORLDEULER | ie.TRANSFORM_WORLDSCALE, !0),
					this.event(t.Event.TRANSFORM_CHANGED, this._transformFlag);
				for (var e = 0, r = this._children.length; e < r; e++) this._children[e]._onWorldTransform()
			}
		}
		translate(e, t = !0) {
			t ? (p.createFromQuaternion(this.localRotation, ie._tempMatrix0), n.transformCoordinate(e, ie
				._tempMatrix0, ie._tempVector30), n.add(this.localPosition, ie._tempVector30, this
				._localPosition), this.localPosition = this._localPosition) : (n.add(this.position, e, this
				._position), this.position = this._position)
		}
		rotate(e, t = !0, r = !0) {
			var i;
			r ? i = e : (n.scale(e, Math.PI / 180, ie._tempVector30), i = ie._tempVector30), u
				.createFromYawPitchRoll(i.y, i.x, i.z, ie._tempQuaternion0), t ? (u.multiply(this
						._localRotation, ie._tempQuaternion0, this._localRotation), this.localRotation = this
					._localRotation) : (u.multiply(ie._tempQuaternion0, this.rotation, this._rotation), this
					.rotation = this._rotation)
		}
		getForward(e) {
			var t = this.worldMatrix.elements;
			e.x = -t[8], e.y = -t[9], e.z = -t[10]
		}
		getUp(e) {
			var t = this.worldMatrix.elements;
			e.x = t[4], e.y = t[5], e.z = t[6]
		}
		getRight(e) {
			var t = this.worldMatrix.elements;
			e.x = t[0], e.y = t[1], e.z = t[2]
		}
		lookAt(e, t, i = !1) {
			var a;
			if (i) {
				if (a = this._localPosition, Math.abs(a.x - e.x) < r.zeroTolerance && Math.abs(a.y - e.y) < r
					.zeroTolerance && Math.abs(a.z - e.z) < r.zeroTolerance) return;
				u.lookAt(this._localPosition, e, t, this._localRotation), this._localRotation.invert(this
					._localRotation), this.localRotation = this._localRotation
			} else {
				var n = this.position;
				if (a = n, Math.abs(a.x - e.x) < r.zeroTolerance && Math.abs(a.y - e.y) < r.zeroTolerance &&
					Math.abs(a.z - e.z) < r.zeroTolerance) return;
				u.lookAt(n, e, t, this._rotation), this._rotation.invert(this._rotation), this.rotation = this
					._rotation
			}
		}
		getWorldLossyScale() {
			if (this._getTransformFlag(ie.TRANSFORM_WORLDSCALE)) {
				if (null !== this._parent) {
					var e = this._getScaleMatrix().elements;
					this._scale.x = e[0], this._scale.y = e[4], this._scale.z = e[8]
				} else this._localScale.cloneTo(this._scale);
				this._setTransformFlag(ie.TRANSFORM_WORLDSCALE, !1)
			}
			return this._scale
		}
		setWorldLossyScale(e) {
			if (null !== this._parent) {
				var t = ie._tempMatrix3x33,
					r = ie._tempMatrix3x33,
					i = r.elements,
					a = this._parent._getScaleMatrix();
				a.invert(a), d.createFromScaling(e, t), d.multiply(a, t, r), this._localScale.x = i[0], this
					._localScale.y = i[4], this._localScale.z = i[8]
			} else e.cloneTo(this._localScale);
			this.localScale = this._localScale, this._scale !== e && e.cloneTo(this._scale), this
				._setTransformFlag(ie.TRANSFORM_WORLDSCALE, !1)
		}
		get scale() {
			return this.getWorldLossyScale()
		}
		set scale(e) {
			this.setWorldLossyScale(e)
		}
	}
	ie._tempVector30 = new n, ie._tempQuaternion0 = new u, ie._tempMatrix0 = new p, ie._tempMatrix3x30 = new d, ie
		._tempMatrix3x31 = new d, ie._tempMatrix3x32 = new d, ie._tempMatrix3x33 = new d, ie.TRANSFORM_LOCALQUATERNION =
		1, ie.TRANSFORM_LOCALEULER = 2, ie.TRANSFORM_LOCALMATRIX = 4, ie.TRANSFORM_WORLDPOSITION = 8, ie
		.TRANSFORM_WORLDQUATERNION = 16, ie.TRANSFORM_WORLDSCALE = 32, ie.TRANSFORM_WORLDMATRIX = 64, ie
		.TRANSFORM_WORLDEULER = 128, ie._angleToRandin = 180 / Math.PI;
	class ae extends t.Node {
		constructor(e = null, t = !1) {
			super(), this._needProcessCollisions = !1, this._needProcessTriggers = !1, this._id = ++ae
				._uniqueIDCounter, this._transform = new ie(this), this._isStatic = t, this.layer = 0, this
				.name = e || "New Sprite3D"
		}
		static __init__() {}
		static instantiate(e, t = null, r = !0, i = null, a = null) {
			var n = e.clone();
			t && t.addChild(n);
			var s = n.transform;
			if (r) {
				var o = s.worldMatrix;
				e.transform.worldMatrix.cloneTo(o), s.worldMatrix = o
			} else i && (s.position = i), a && (s.rotation = a);
			return n
		}
		static load(e, r) {
			t.Laya.loader.create(e, r, null, ae.HIERARCHY)
		}
		get id() {
			return this._id
		}
		get layer() {
			return this._layer
		}
		set layer(e) {
			if (this._layer !== e) {
				if (!(e >= 0 && e <= 30)) throw new Error("Layer value must be 0-30.");
				this._layer = e
			}
		}
		get url() {
			return this._url
		}
		get isStatic() {
			return this._isStatic
		}
		get transform() {
			return this._transform
		}
		_setCreateURL(e) {
			this._url = t.URL.formatURL(e)
		}
		_changeAnimatorsToLinkSprite3D(e, t, r) {
			var i = this.getComponent(O);
			if (i && (i.avatar || e._changeAnimatorToLinkSprite3DNoAvatar(i, t, r)), this._parent && this
				._parent instanceof ae) {
				r.unshift(this._parent.name);
				var a = this._parent;
				a._hierarchyAnimator && a._changeAnimatorsToLinkSprite3D(e, t, r)
			}
		}
		_setHierarchyAnimator(e, t) {
			this._changeHierarchyAnimator(e), this._changeAnimatorAvatar(e.avatar);
			for (var r = 0, i = this._children.length; r < i; r++) {
				var a = this._children[r];
				a._hierarchyAnimator == t && a._setHierarchyAnimator(e, t)
			}
		}
		_clearHierarchyAnimator(e, t) {
			this._changeHierarchyAnimator(t), this._changeAnimatorAvatar(t ? t.avatar : null);
			for (var r = 0, i = this._children.length; r < i; r++) {
				var a = this._children[r];
				a._hierarchyAnimator == e && a._clearHierarchyAnimator(e, t)
			}
		}
		_changeHierarchyAnimatorAvatar(e, t) {
			this._changeAnimatorAvatar(t);
			for (var r = 0, i = this._children.length; r < i; r++) {
				var a = this._children[r];
				a._hierarchyAnimator == e && a._changeHierarchyAnimatorAvatar(e, t)
			}
		}
		_changeAnimatorToLinkSprite3DNoAvatar(e, t, r) {
			e._handleSpriteOwnersBySprite(t, r, this);
			for (var i = 0, a = this._children.length; i < a; i++) {
				var n = this._children[i],
					s = r.length;
				r.push(n.name), n._changeAnimatorToLinkSprite3DNoAvatar(e, t, r), r.splice(s, 1)
			}
		}
		_changeHierarchyAnimator(e) {
			this._hierarchyAnimator = e
		}
		_changeAnimatorAvatar(e) {}
		_onAdded() {
			if (this._parent instanceof ae) {
				var e = this._parent;
				this.transform._setParent(e.transform), e._hierarchyAnimator && (!this._hierarchyAnimator &&
					this._setHierarchyAnimator(e._hierarchyAnimator, null), e
					._changeAnimatorsToLinkSprite3D(this, !0, [this.name]))
			}
			super._onAdded()
		}
		_onRemoved() {
			if (super._onRemoved(), this._parent instanceof ae) {
				var e = this._parent;
				this.transform._setParent(null), e._hierarchyAnimator && (this._hierarchyAnimator == e
					._hierarchyAnimator && this._clearHierarchyAnimator(e._hierarchyAnimator, null), e
					._changeAnimatorsToLinkSprite3D(this, !1, [this.name]))
			}
		}
		_parse(e, t) {
			if (void 0 !== e.isStatic && (this._isStatic = e.isStatic), void 0 !== e.active && (this.active = e
					.active), null != e.name && (this.name = e.name), void 0 !== e.position) {
				var r = this.transform.localPosition;
				r.fromArray(e.position), this.transform.localPosition = r
			}
			if (void 0 !== e.rotationEuler) {
				var i = this.transform.localRotationEuler;
				i.fromArray(e.rotationEuler), this.transform.localRotationEuler = i
			}
			if (void 0 !== e.rotation) {
				var a = this.transform.localRotation;
				a.fromArray(e.rotation), this.transform.localRotation = a
			}
			if (void 0 !== e.scale) {
				var n = this.transform.localScale;
				n.fromArray(e.scale), this.transform.localScale = n
			}
			null != e.layer && (this.layer = e.layer)
		}
		_cloneTo(e, t, r) {
			if (this.destroyed) throw new Error("Sprite3D: Can't be cloned if the Sprite3D has destroyed.");
			var i = e;
			i.name = this.name, i.destroyed = this.destroyed, i.active = this.active;
			var a = i.transform.localPosition;
			this.transform.localPosition.cloneTo(a), i.transform.localPosition = a;
			var n = i.transform.localRotation;
			this.transform.localRotation.cloneTo(n), i.transform.localRotation = n;
			var s = i.transform.localScale;
			this.transform.localScale.cloneTo(s), i.transform.localScale = s, i._isStatic = this._isStatic, i
				.layer = this.layer, super._cloneTo(i, t, r)
		}
		static _createSprite3DInstance(e) {
			for (var t = e._create(), r = e._children, i = 0, a = r.length; i < a; i++) {
				var n = ae._createSprite3DInstance(r[i]);
				t.addChild(n)
			}
			return t
		}
		static _parseSprite3DInstance(e, t, r, i) {
			for (var a = r._children, n = i._children, s = 0, o = a.length; s < o; s++) ae
				._parseSprite3DInstance(e, t, a[s], n[s]);
			r._cloneTo(i, e, t)
		}
		clone() {
			var e = ae._createSprite3DInstance(this);
			return ae._parseSprite3DInstance(this, e, this, e), e
		}
		destroy(e = !0) {
			this.destroyed || (super.destroy(e), this._transform = null, this._scripts = null, this._url && t
				.Loader.clearRes(this._url))
		}
		_create() {
			return new ae
		}
	}
	ae.HIERARCHY = "HIERARCHY", ae.WORLDMATRIX = F.propertyNameToID("u_WorldMat"), ae.MVPMATRIX = F.propertyNameToID(
		"u_MvpMatrix"), ae._uniqueIDCounter = 0;
	class ne extends ae {
		constructor(e) {
			super(e)
		}
		static __init__() {
			ne.SHADERDEFINE_RECEIVE_SHADOW = F.getDefineByName("RECEIVESHADOW"), ne
				.SHADERDEFINE_SCALEOFFSETLIGHTINGMAPUV = F.getDefineByName("SCALEOFFSETLIGHTINGMAPUV"), ne
				.SAHDERDEFINE_LIGHTMAP = F.getDefineByName("LIGHTMAP")
		}
		_onInActive() {
			super._onInActive();
			var e = this._scene;
			e._removeRenderObject(this._render), this._render.castShadow && e._removeShadowCastRenderObject(this
				._render)
		}
		_onActive() {
			super._onActive();
			var e = this._scene;
			e._addRenderObject(this._render), this._render.castShadow && e._addShadowCastRenderObject(this._render)
		}
		_onActiveInScene() {
			if (super._onActiveInScene(), o.Laya3D._editerEnvironment) {
				var e = this._scene,
					t = new a;
				e._allotPickColorByID(this.id, t), e._pickIdToSprite[this.id] = this, this._render._shaderValues
					.setVector(ne.PICKCOLOR, t)
			}
		}
		_addToInitStaticBatchManager() {}
		_setBelongScene(e) {
			super._setBelongScene(e), this._render._setBelongScene(e)
		}
		_setUnBelongScene() {
			this._render._shaderValues.removeDefine(ne.SAHDERDEFINE_LIGHTMAP), super._setUnBelongScene()
		}
		_changeHierarchyAnimator(e) {
			if (this._hierarchyAnimator) {
				var t = this._hierarchyAnimator._renderableSprites;
				t.splice(t.indexOf(this), 1)
			}
			e && e._renderableSprites.push(this), super._changeHierarchyAnimator(e)
		}
		destroy(e = !0) {
			super.destroy(e), this._render._destroy(), this._render = null
		}
		_create() {
			return new ne(this.name)
		}
	}
	ne.LIGHTMAPSCALEOFFSET = F.propertyNameToID("u_LightmapScaleOffset"), ne.LIGHTMAP = F.propertyNameToID(
		"u_LightMap"), ne.PICKCOLOR = F.propertyNameToID("u_PickColor");
	class se {
		constructor() {
			this._initBatchSprites = [], this._staticBatches = {}, this._batchRenderElementPoolIndex = 0, this
				._batchRenderElementPool = []
		}
		static _addToStaticBatchQueue(e, t) {
			e instanceof ne && t.push(e);
			for (var r = 0, i = e.numChildren; r < i; r++) se._addToStaticBatchQueue(e._children[r], t)
		}
		static _registerManager(e) {
			se._managers.push(e)
		}
		static combine(e, t = null) {
			t || (t = [], e && se._addToStaticBatchQueue(e, t));
			var r = t.length;
			if (r > 0) {
				for (var i = 0; i < r; i++) {
					var a = t[i];
					a.destroyed || (a._render._isPartOfStaticBatch ? console.warn("StaticBatchManager: Sprite " + a
							.name + " has a part of Static Batch,it will be ignore.") : a
						._addToInitStaticBatchManager())
				}
				for (var n = 0, s = se._managers.length; n < s; n++) {
					se._managers[n]._initStaticBatchs(e)
				}
			}
		}
		_partition(e, t, r) {
			for (var i = e[Math.floor((r + t) / 2)]; t <= r;) {
				for (; this._compare(e[t], i) < 0;) t++;
				for (; this._compare(e[r], i) > 0;) r--;
				if (t < r) {
					var a = e[t];
					e[t] = e[r], e[r] = a, t++, r--
				} else if (t === r) {
					t++;
					break
				}
			}
			return t
		}
		_quickSort(e, t, r) {
			if (e.length > 1) {
				var i = this._partition(e, t, r),
					a = i - 1;
				t < a && this._quickSort(e, t, a), i < r && this._quickSort(e, i, r)
			}
		}
		_compare(e, t) {
			throw "StaticBatch:must override this function."
		}
		_initStaticBatchs(e) {
			throw "StaticBatch:must override this function."
		}
		_getBatchRenderElementFromPool() {
			throw "StaticBatch:must override this function."
		}
		_addBatchSprite(e) {
			this._initBatchSprites.push(e)
		}
		_clear() {
			this._batchRenderElementPoolIndex = 0
		}
		_garbageCollection() {
			throw "StaticBatchManager: must override it."
		}
		dispose() {
			this._staticBatches = null
		}
	}
	se._managers = [];
	class oe {
		constructor() {}
		static __init__() {
			t.Render.supportWebGLPlusCulling && (oe._cullingBufferLength = 0, oe._cullingBuffer = new Float32Array(
				4096))
		}
		static _drawTraversalCullingBound(e, t) {
			e.length;
			for (var r = e.elements, i = 0, a = e.length; i < a; i++) {
				var n = oe._tempColor0;
				n.r = 0, n.g = 1, n.b = 0, n.a = 1, A._drawBound(t, r[i].bounds._getBoundBox(), n)
			}
		}
		static _traversalCulling(e, r, i, a, s, o) {
			for (var l = a.length, _ = a.elements, h = e.boundFrustum, c = e._transform.position, d = 0; d <
				l; d++) {
				var u = _[d];
				if (e._isLayerVisible(u._owner._layer) && u._enable)
					if (t.Stat.frustumCulling++, !e.useOcclusionCulling || u._needRender(h, i)) {
						u._visible = !0, u._distanceForSort = n.distance(u.bounds.getCenter(), c);
						for (var f = u._renderElements, m = 0, E = f.length; m < E; m++) f[m]._update(r, i, s, o)
					} else u._visible = !1;
				else u._visible = !1
			}
		}
		static renderObjectCulling(e, t, r, i, a, n) {
			var s, o, l = t._opaqueQueue,
				_ = t._transparentQueue;
			l.clear(), _.clear();
			var h = se._managers;
			for (s = 0, o = h.length; s < o; s++) h[s]._clear();
			var c = re._managers;
			for (s = 0, o = c.length; s < o; s++) c[s]._clear();
			var d = t._octree;
			if (d && (d.updateMotionObjects(), d.shrinkRootIfPossible(), d.getCollidingWithFrustum(r, a, n)), oe
				._traversalCulling(e, t, r, i, a, n), oe.debugFrustumCulling) {
				var u = t._debugTool;
				u.clear(), d && (d.drawAllBounds(u), d.drawAllObjects(u)), oe._drawTraversalCullingBound(i, u)
			}
			var f = l.elements.length;
			f > 0 && l._quickSort(0, f - 1), (f = _.elements.length) > 0 && _._quickSort(0, f - 1)
		}
		static renderObjectCullingNative(e, t, r, i, a, s) {
			var o, l, _, h, c = t._opaqueQueue,
				d = t._transparentQueue;
			c.clear(), d.clear();
			var u = se._managers;
			for (o = 0, l = u.length; o < l; o++) u[o]._clear();
			var f = re._managers;
			for (o = 0, l = f.length; o < l; o++) f[o]._clear();
			var m = i.length,
				E = i.elements;
			for (o = 0; o < m; o++) E[o].bounds, E[o]._updateForNative && E[o]._updateForNative(r);
			e.boundFrustum;
			oe.cullingNative(e._boundFrustumBuffer, oe._cullingBuffer, t._cullingBufferIndices, m, t
				._cullingBufferResult);
			var T = r.camera._transform.position;
			for (o = 0; o < m; o++) {
				var p = E[o];
				if (!e.useOcclusionCulling || e._isLayerVisible(p._owner._layer) && p._enable && t
					._cullingBufferResult[o]) {
					p._visible = !0, p._distanceForSort = n.distance(p.bounds.getCenter(), T);
					var g = p._renderElements;
					for (_ = 0, h = g.length; _ < h; _++) {
						g[_]._update(t, r, a, s)
					}
				} else p._visible = !1
			}
			var S = c.elements.length;
			S > 0 && c._quickSort(0, S - 1), (S = d.elements.length) > 0 && d._quickSort(0, S - 1)
		}
		static cullingNative(e, r, i, a, n) {
			return t.LayaGL.instance.culling(e, r, i, a, n)
		}
	}
	oe._tempVector3 = new n, oe._tempColor0 = new te, oe.debugFrustumCulling = !1;
	class le {
		constructor() {
			this.updateMark = -1, this.indexInList = -1, this.batched = !1
		}
	}
	class _e {
		constructor() {
			this._destroyed = !1
		}
		get destroyed() {
			return this._destroyed
		}
		_getType() {
			throw "GeometryElement:must override it."
		}
		_prepareRender(e) {
			return !0
		}
		_render(e) {
			throw "GeometryElement:must override it."
		}
		destroy() {
			this._destroyed || (this._destroyed = !0)
		}
	}
	_e._typeCounter = 0;
	class he extends t.Buffer {
		constructor(e, r, i = !1) {
			super(), this._vertexDeclaration = null, this._float32Reader = null;
			var a = t.LayaGL.instance;
			this._bufferUsage = r, this._bufferType = a.ARRAY_BUFFER, this._canRead = i, this._byteLength = e,
				this.bind(), a.bufferData(this._bufferType, this._byteLength, this._bufferUsage), i && (this
					._buffer = new Uint8Array(e), this._float32Reader = new Float32Array(this._buffer.buffer))
		}
		get vertexDeclaration() {
			return this._vertexDeclaration
		}
		set vertexDeclaration(e) {
			this._vertexDeclaration = e
		}
		get canRead() {
			return this._canRead
		}
		bind() {
			if (t.Buffer._bindedVertexBuffer !== this._glBuffer) {
				var e = t.LayaGL.instance;
				return e.bindBuffer(e.ARRAY_BUFFER, this._glBuffer), t.Buffer._bindedVertexBuffer = this
					._glBuffer, !0
			}
			return !1
		}
		setData(e, r = 0, i = 0, a = Number.MAX_SAFE_INTEGER) {
			if (this.bind(), 0 !== i || a !== Number.MAX_SAFE_INTEGER) {
				var n = new Uint8Array(e, i, a);
				t.LayaGL.instance.bufferSubData(this._bufferType, r, n), this._canRead && this._buffer.set(n, r)
			} else t.LayaGL.instance.bufferSubData(this._bufferType, r, e), this._canRead && this._buffer.set(
				new Uint8Array(e), r)
		}
		getUint8Data() {
			if (this._canRead) return this._buffer;
			throw new Error("Can't read data from VertexBuffer with only write flag!")
		}
		getFloat32Data() {
			if (this._canRead) return this._float32Reader;
			throw new Error("Can't read data from VertexBuffer with only write flag!")
		}
		markAsUnreadbale() {
			this._canRead = !1, this._buffer = null, this._float32Reader = null
		}
		destroy() {
			super.destroy(), this._buffer = null, this._float32Reader = null, this._vertexDeclaration = null
		}
	}
	he.DATATYPE_FLOAT32ARRAY = 0, he.DATATYPE_UINT8ARRAY = 1;
	class ce {
		static __init__() {
			var e = t.LayaGL.instance;
			ce._elementInfos = {
				single: [1, e.FLOAT, 0],
				vector2: [2, e.FLOAT, 0],
				vector3: [3, e.FLOAT, 0],
				vector4: [4, e.FLOAT, 0],
				color: [4, e.FLOAT, 0],
				byte4: [4, e.UNSIGNED_BYTE, 0],
				short2: [2, e.FLOAT, 0],
				short4: [4, e.FLOAT, 0],
				normalizedshort2: [2, e.FLOAT, 0],
				normalizedshort4: [4, e.FLOAT, 0],
				halfvector2: [2, e.FLOAT, 0],
				halfvector4: [4, e.FLOAT, 0]
			}
		}
		static getElementInfos(e) {
			var t = ce._elementInfos[e];
			if (t) return t;
			throw "VertexElementFormat: this vertexElementFormat is not implement."
		}
	}
	ce.Single = "single", ce.Vector2 = "vector2", ce.Vector3 = "vector3", ce.Vector4 = "vector4", ce.Color = "color", ce
		.Byte4 = "byte4", ce.Short2 = "short2", ce.Short4 = "short4", ce.NormalizedShort2 = "normalizedshort2", ce
		.NormalizedShort4 = "normalizedshort4", ce.HalfVector2 = "halfvector2", ce.HalfVector4 = "halfvector4";
	class de {
		constructor(e, t) {
			this._id = ++de._uniqueIDCounter, this._vertexElementsDic = {}, this._vertexStride = e, this
				._vertexElements = t;
			var r = t.length;
			this._shaderValues = new B(null);
			for (var i = 0; i < r; i++) {
				var a = t[i],
					n = a._elementUsage;
				this._vertexElementsDic[n] = a;
				var s = new Int32Array(5),
					o = ce.getElementInfos(a._elementFormat);
				s[0] = o[0], s[1] = o[1], s[2] = o[2], s[3] = this._vertexStride, s[4] = a._offset, this
					._shaderValues.setAttribute(n, s)
			}
		}
		get id() {
			return this._id
		}
		get vertexStride() {
			return this._vertexStride
		}
		get vertexElementCount() {
			return this._vertexElements.length
		}
		getVertexElementByIndex(e) {
			return this._vertexElements[e]
		}
		getVertexElementByUsage(e) {
			return this._vertexElementsDic[e]
		}
	}
	de._uniqueIDCounter = 1;
	class ue {
		get offset() {
			return this._offset
		}
		get elementFormat() {
			return this._elementFormat
		}
		get elementUsage() {
			return this._elementUsage
		}
		constructor(e, t, r) {
			this._offset = e, this._elementFormat = t, this._elementUsage = r
		}
	}
	class fe {
		static __init__() {
			fe.instanceWorldMatrixDeclaration = new de(64, [new ue(0, ce.Vector4, fe.MESH_WORLDMATRIX_ROW0), new ue(
					16, ce.Vector4, fe.MESH_WORLDMATRIX_ROW1), new ue(32, ce.Vector4, fe
					.MESH_WORLDMATRIX_ROW2), new ue(48, ce.Vector4, fe.MESH_WORLDMATRIX_ROW3)]), fe
				.instanceMVPMatrixDeclaration = new de(64, [new ue(0, ce.Vector4, fe.MESH_MVPMATRIX_ROW0), new ue(
						16, ce.Vector4, fe.MESH_MVPMATRIX_ROW1), new ue(32, ce.Vector4, fe.MESH_MVPMATRIX_ROW2),
					new ue(48, ce.Vector4, fe.MESH_MVPMATRIX_ROW3)
				])
		}
		static getVertexDeclaration(e, t = !0) {
			var r = fe._vertexDeclarationMap[e + (t ? "_0" : "_1")];
			if (!r) {
				for (var i = e.split(","), a = 0, n = [], s = 0, o = i.length; s < o; s++) {
					var l;
					switch (i[s]) {
						case "POSITION":
							l = new ue(a, ce.Vector3, fe.MESH_POSITION0), a += 12;
							break;
						case "NORMAL":
							l = new ue(a, ce.Vector3, fe.MESH_NORMAL0), a += 12;
							break;
						case "COLOR":
							l = new ue(a, ce.Vector4, fe.MESH_COLOR0), a += 16;
							break;
						case "UV":
							l = new ue(a, ce.Vector2, fe.MESH_TEXTURECOORDINATE0), a += 8;
							break;
						case "UV1":
							l = new ue(a, ce.Vector2, fe.MESH_TEXTURECOORDINATE1), a += 8;
							break;
						case "BLENDWEIGHT":
							l = new ue(a, ce.Vector4, fe.MESH_BLENDWEIGHT0), a += 16;
							break;
						case "BLENDINDICES":
							t ? (l = new ue(a, ce.Vector4, fe.MESH_BLENDINDICES0), a += 16) : (l = new ue(a, ce
								.Byte4, fe.MESH_BLENDINDICES0), a += 4);
							break;
						case "TANGENT":
							l = new ue(a, ce.Vector4, fe.MESH_TANGENT0), a += 16;
							break;
						default:
							throw "VertexMesh: unknown vertex flag."
					}
					n.push(l)
				}
				r = new de(a, n), fe._vertexDeclarationMap[e + (t ? "_0" : "_1")] = r
			}
			return r
		}
	}
	fe.MESH_POSITION0 = 0, fe.MESH_COLOR0 = 1, fe.MESH_TEXTURECOORDINATE0 = 2, fe.MESH_NORMAL0 = 3, fe.MESH_TANGENT0 =
		4, fe.MESH_BLENDINDICES0 = 5, fe.MESH_BLENDWEIGHT0 = 6, fe.MESH_TEXTURECOORDINATE1 = 7, fe
		.MESH_WORLDMATRIX_ROW0 = 8, fe.MESH_WORLDMATRIX_ROW1 = 9, fe.MESH_WORLDMATRIX_ROW2 = 10, fe
		.MESH_WORLDMATRIX_ROW3 = 11, fe.MESH_MVPMATRIX_ROW0 = 12, fe.MESH_MVPMATRIX_ROW1 = 13, fe.MESH_MVPMATRIX_ROW2 =
		14, fe.MESH_MVPMATRIX_ROW3 = 15, fe._vertexDeclarationMap = {};
	class me extends _e {
		constructor() {
			super(), this.maxInstanceCount = 1024, this.instanceWorldMatrixData = new Float32Array(16 * this
				.maxInstanceCount), this.instanceMVPMatrixData = new Float32Array(16 * this.maxInstanceCount);
			var e = t.LayaGL.instance;
			this.instanceWorldMatrixBuffer = new he(4 * this.instanceWorldMatrixData.length, e.DYNAMIC_DRAW), this
				.instanceMVPMatrixBuffer = new he(4 * this.instanceMVPMatrixData.length, e.DYNAMIC_DRAW), this
				.instanceWorldMatrixBuffer.vertexDeclaration = fe.instanceWorldMatrixDeclaration, this
				.instanceMVPMatrixBuffer.vertexDeclaration = fe.instanceMVPMatrixDeclaration
		}
		static __init__() {
			me.instance = new me
		}
		_render(e) {
			var r = t.LayaGL.instance,
				i = e.renderElement,
				a = i.instanceSubMesh,
				n = i.instanceBatchElementList.length,
				s = a._indexCount;
			a._mesh._instanceBufferState.bind(), t.LayaGL.layaGPUInstance.drawElementsInstanced(r.TRIANGLES, s, r
					.UNSIGNED_SHORT, 2 * a._indexStart, n), t.Stat.renderBatches++, t.Stat.savedRenderBatches += n -
				1, t.Stat.trianglesFaces += s * n / 3
		}
	}
	class Ee {
		constructor() {
			this.updateMark = -1, this.pointLightCount = 0, this.spotLightCount = 0, this.indices = []
		}
	}
	class Te {
		constructor(e, t, r, a) {
			this._updateMark = 0, this._depthSliceParam = new i, this._xSlices = e, this._ySlices = t, this
				._zSlices = r;
			var n = e * t,
				s = r * (1 + Math.ceil(a / 4));
			this._clusterTexture = A._createFloatTextureBuffer(n, s), this._clusterTexture.lock = !0, this
				._clusterPixels = new Float32Array(n * s * 4);
			for (var o = new Array(this._zSlices), l = 0; l < this._zSlices; l++) {
				o[l] = new Array(this._ySlices);
				for (var _ = 0; _ < this._ySlices; _++) {
					o[l][_] = new Array(this._xSlices);
					for (var h = 0; h < this._xSlices; h++) o[l][_][h] = new Ee
				}
			}
			this._clusterDatas = o
		}
		_insertSpotLightSphere(e, t, r, i, a) {
			var s = Te._tempVector35;
			s.x = a.x - e.x, s.y = a.y - e.y, s.z = a.z - e.z;
			var o = n.dot(s, s),
				l = a.w;
			if (!(o > l * l)) return !1;
			var _ = n.dot(s, t);
			return !(Math.cos(i) * Math.sqrt(o - _ * _) - _ * Math.sin(i) > l || _ > l + r || _ < -l)
		}
		_placePointLightToClusters(e, t) {
			for (var r = this._clusterDatas, i = this._updateMark, a = t.zMin, n = t.zMax; a < n; a++)
				for (var s = t.yMin, o = t.yMax; s < o; s++)
					for (var l = t.xMin, _ = t.xMax; l < _; l++) {
						var h = r[a][s][l];
						h.updateMark != i && (h.pointLightCount = 0, h.spotLightCount = 0, h.updateMark = i);
						var c = h.indices,
							d = h.pointLightCount++;
						d < c.length ? c[d] = e : c.push(e)
					}
		}
		_placeSpotLightToClusters(e, t) {
			for (var r = this._clusterDatas, i = this._updateMark, a = t.zMin, n = t.zMax; a < n; a++)
				for (var s = t.yMin, o = t.yMax; s < o; s++)
					for (var l = t.xMin, _ = t.xMax; l < _; l++) {
						var h = r[a][s][l];
						h.updateMark != i && (h.pointLightCount = 0, h.spotLightCount = 0, h.updateMark = i);
						var c = h.indices,
							d = h.pointLightCount + h.spotLightCount++;
						d < c.length ? c[d] = e : c.push(e)
					}
		}
		_insertConePlane(e, t, r, i, a) {
			var s = Te._tempVector36,
				o = Te._tempVector37;
			n.cross(a, t, s), n.cross(s, t, o), n.normalize(o, o);
			var l = r * Math.tan(i),
				_ = e.x + r * t.x + l * o.x,
				h = e.y + r * t.y + l * o.y,
				c = e.z + r * t.z + l * o.z;
			return _ * a.x + h * a.y + c * a.z <= 0 || e.x * a.x + e.y * a.y + e.z * a.z <= 0
		}
		_shrinkSphereLightZPerspective(e, t, r, i, a) {
			var n = r.z,
				s = n - i,
				o = n + i;
			if (s > t || o <= e) return !1;
			var l = this._depthSliceParam;
			return a.zMin = Math.floor(Math.log2(Math.max(s, e)) * l.x - l.y), a.zMax = Math.min(Math.ceil(Math
				.log2(o) * l.x - l.y), this._zSlices), !0
		}
		_shrinkSpotLightZPerspective(e, t, r, i, a, n, s) {
			var o = i.x,
				l = i.y,
				_ = i.z,
				h = Math.tan(n) * a,
				c = r.x,
				d = r.y,
				u = r.z,
				f = o - c,
				m = l - d,
				E = _ - u,
				T = f * f + m * m + E * E,
				p = Math.sqrt(1 - E * E / T),
				g = Math.max(Math.min(u, _ - p * h), r.z - a),
				S = Math.min(Math.max(u, _ + p * h), r.z + a);
			if (g > t || S <= e) return !1;
			var v = this._depthSliceParam;
			return s.zMin = Math.floor(Math.log2(Math.max(g, e)) * v.x - v.y), s.zMax = Math.min(Math.ceil(Math
				.log2(S) * v.x - v.y), this._zSlices), !0
		}
		_shrinkSphereLightByBoundOrth(e, t, r, i, a, n, s) {
			var o = a.z,
				l = o - n,
				_ = o + n;
			if (l > i || _ <= r) return !1;
			var h = a.x,
				c = h - n,
				d = h + n;
			if (c > e || d <= -e) return !1;
			var u = a.y,
				f = u - n,
				m = u + n;
			if (f > t || m <= -t) return !1;
			var E = this._xSlices,
				T = this._ySlices,
				p = this._depthSliceParam,
				g = 2 * e / E,
				S = 2 * t / T;
			return s.xMin = Math.max(Math.floor((c + e) / g), 0), s.xMax = Math.min(Math.ceil((d + e) / g), E), s
				.yMin = Math.max(Math.floor((t - m) / S), 0), s.yMax = Math.min(Math.ceil((t - f) / S), T), s.zMin =
				Math.floor(Math.log2(Math.max(l, r)) * p.x - p.y), s.zMax = Math.min(Math.ceil(Math.log2(_) * p.x -
					p.y), this._zSlices), !0
		}
		_shrinkSpotLightByBoundOrth(e, t, r, i, a, n, s, o, l) {
			var _ = n.x,
				h = n.y,
				c = n.z,
				d = Math.tan(o) * s,
				u = a.x,
				f = a.y,
				m = a.z,
				E = _ - u,
				T = h - f,
				p = c - m,
				g = E * E + T * T + p * p,
				S = Math.sqrt(1 - p * p / g),
				v = Math.max(Math.min(m, c - S * d), a.z - s),
				R = Math.min(Math.max(m, c + S * d), a.z + s);
			if (v > i || R <= r) return !1;
			var I = Math.sqrt(1 - E * E / g),
				x = Math.max(Math.min(u, _ - I * d), a.x - s),
				A = Math.min(Math.max(u, _ + I * d), a.x + s);
			if (x > e || A <= -e) return !1;
			var D = Math.sqrt(1 - T * T / g),
				M = Math.max(Math.min(f, h - D * d), a.y - s),
				L = Math.min(Math.max(f, h + D * d), a.y + s);
			if (M > t || L <= -t) return !1;
			var C = this._xSlices,
				y = this._ySlices,
				O = this._depthSliceParam,
				N = 2 * e / C,
				P = 2 * t / y;
			return l.xMin = Math.max(Math.floor((x + e) / N), 0), l.xMax = Math.min(Math.ceil((A + e) / N), C), l
				.yMin = Math.max(Math.floor((t - L) / P), 0), l.yMax = Math.min(Math.ceil((t - M) / P), y), l.zMin =
				Math.floor(Math.log2(Math.max(v, r)) * O.x - O.y), l.zMax = Math.min(Math.ceil(Math.log2(R) * O.x -
					O.y), this._zSlices), !0
		}
		_shrinkXYByRadiusPerspective(e, t, r, i, a) {
			var n, s, o, l, _, h = e.x,
				c = e.y,
				d = e.z,
				u = this._ySlices + 1;
			for (_ = 0; _ < u; _++) {
				if (c * (f = a[_]).y + d * f.z < t) {
					s = Math.max(0, _ - 1);
					break
				}
			}
			if (_ == u) return !1;
			for (l = this._ySlices, _ = s + 1; _ < u; _++) {
				if (c * (f = a[_]).y + d * f.z <= -t) {
					l = Math.max(0, _);
					break
				}
			}
			for (u = this._xSlices + 1, _ = 0; _ < u; _++) {
				if (h * (f = i[_]).x + d * f.z < t) {
					n = Math.max(0, _ - 1);
					break
				}
			}
			for (o = this._xSlices, _ = n + 1; _ < u; _++) {
				var f;
				if (h * (f = i[_]).x + d * f.z <= -t) {
					o = Math.max(0, _);
					break
				}
			}
			return r.xMin = n, r.xMax = o, r.yMin = s, r.yMax = l, !0
		}
		_shrinkSpotXYByConePerspective(e, t, r, i, a, n, s) {
			for (var o, l, _, h, c = Te._tempVector32, d = a.yMax + 1, u = a.yMin + 1; u < d; u++)
				if (this._insertConePlane(e, t, r, i, s[u])) {
					l = Math.max(0, u - 1);
					break
				} h = a.yMax;
			for (u = l + 1; u < d; u++) {
				var f = s[u];
				if (c.setValue(0, -f.y, -f.z), !this._insertConePlane(e, t, r, i, c)) {
					h = Math.max(0, u);
					break
				}
			}
			d = a.xMax + 1;
			for (u = a.xMin + 1; u < d; u++)
				if (this._insertConePlane(e, t, r, i, n[u])) {
					o = Math.max(0, u - 1);
					break
				} _ = a.xMax;
			for (u = o + 1; u < d; u++) {
				f = n[u];
				if (c.setValue(-f.x, 0, -f.z), !this._insertConePlane(e, t, r, i, c)) {
					_ = Math.max(0, u);
					break
				}
			}
			a.xMin = o, a.xMax = _, a.yMin = l, a.yMax = h
		}
		_updatePointLightPerspective(e, t, r, i, a, s, o) {
			var l = Te._tempLightBound,
				_ = Te._tempVector30;
			n.transformV3ToV3(i._transform.position, r, _), _.z *= -1, this._shrinkSphereLightZPerspective(e, t, _,
					i.range, l) && this._shrinkXYByRadiusPerspective(_, i.range, l, s, o) && this
				._placePointLightToClusters(a, l)
		}
		_updateSpotLightPerspective(e, t, r, i, a, s, o) {
			var l = Te._tempLightBound,
				_ = Te._tempVector30,
				h = Te._tempVector31,
				c = Te._tempVector34,
				d = i._transform.position,
				u = i.range;
			i._transform.worldMatrix.getForward(h), n.normalize(h, h), n.scale(h, u, c), n.add(d, c, c), n
				.transformV3ToV3(d, r, _), n.transformV3ToV3(c, r, c), _.z *= -1, c.z *= -1;
			var f = i.spotAngle / 2 * Math.PI / 180;
			if (this._shrinkSpotLightZPerspective(e, t, _, c, u, f, l) && this._shrinkXYByRadiusPerspective(_, u, l,
					s, o)) {
				var m = Te._tempVector33;
				m.x = c.x - _.x, m.y = c.y - _.y, m.z = c.z - _.z, n.normalize(m, m), this
					._shrinkSpotXYByConePerspective(_, m, u, f, l, s, o), this._placeSpotLightToClusters(a, l)
			}
		}
		_updatePointLightOrth(e, t, r, i, a, s, o) {
			var l = Te._tempLightBound,
				_ = Te._tempVector30;
			n.transformV3ToV3(s._transform.position, a, _), _.z *= -1, this._shrinkSphereLightByBoundOrth(e, t, r,
				i, _, s.range, l) && this._placePointLightToClusters(o, l)
		}
		_updateSpotLightOrth(e, t, r, i, a, s, o) {
			var l = Te._tempLightBound,
				_ = Te._tempVector30,
				h = Te._tempVector31,
				c = Te._tempVector34,
				d = s._transform.position,
				u = s.range;
			s._transform.worldMatrix.getForward(h), n.normalize(h, h), n.scale(h, u, c), n.add(d, c, c), n
				.transformV3ToV3(d, a, _), n.transformV3ToV3(c, a, c), _.z *= -1, c.z *= -1;
			var f = s.spotAngle / 2 * Math.PI / 180;
			this._shrinkSpotLightByBoundOrth(e, t, r, i, _, c, u, f, l) && this._placeSpotLightToClusters(o, l)
		}
		update(e, t) {
			this._updateMark++;
			var r = e.nearPlane;
			this._depthSliceParam.x = s._config.lightClusterCount.z / Math.log2(e.farPlane / r), this
				._depthSliceParam.y = Math.log2(r) * this._depthSliceParam.x;
			var i = e.nearPlane,
				a = e.farPlane,
				n = e.viewMatrix,
				o = t._directionLights._length,
				l = t._pointLights,
				_ = l._length,
				h = l._elements,
				c = t._spotLights,
				d = c._length,
				u = c._elements;
			if (e.orthographic) {
				for (var f = e.orthographicVerticalSize / 2, m = f * e.aspectRatio, E = 0; E < _; E++, o++) this
					._updatePointLightOrth(m, f, i, a, n, h[E], o);
				for (E = 0; E < d; E++, o++) this._updateSpotLightOrth(m, f, i, a, n, u[E], o)
			} else {
				e._updateClusterPlaneXY();
				var T = e._clusterXPlanes,
					p = e._clusterYPlanes;
				for (E = 0; E < _; E++, o++) this._updatePointLightPerspective(i, a, n, h[E], o, T, p);
				for (E = 0; E < d; E++, o++) this._updateSpotLightPerspective(i, a, n, u[E], o, T, p)
			}
			if (_ + d > 0) {
				for (var g = this._xSlices, S = this._ySlices, v = this._zSlices, R = g * S * 4, I = R * v, x = this
						._clusterPixels, A = x.length, D = this._clusterDatas, M = this._updateMark, L = !0, C =
						0; C < v; C++)
					for (var y = 0; y < S; y++)
						for (var O = 0; O < g; O++) {
							var N = D[C][y][O],
								P = 4 * (O + y * g + C * g * S);
							if (N.updateMark !== M) x[P] = 0, x[P + 1] = 0;
							else if (L) {
								var w = N.indices,
									V = N.pointLightCount,
									b = N.spotLightCount,
									F = V + b;
								if (I + F < A) {
									x[P] = V, x[P + 1] = b, x[P + 2] = Math.floor(I / R), x[P + 3] = I % R;
									for (E = 0; E < F; E++) x[I++] = w[E]
								} else {
									F = A - (I + F), V = Math.min(V, F), x[P] = V, x[P + 1] = Math.min(b, F - V), x[
										P + 2] = Math.floor(I / R), x[P + 3] = I % R;
									for (E = 0; E < F; E++) x[I++] = w[E];
									L = !1
								}
							}
						}
				var B = this._clusterTexture.width;
				this._clusterTexture.setSubPixels(0, 0, B, Math.ceil(I / (4 * B)), x)
			}
		}
	}
	Te._tempVector30 = new n, Te._tempVector31 = new n, Te._tempVector32 = new n, Te._tempVector33 = new n, Te
		._tempVector34 = new n, Te._tempVector35 = new n, Te._tempVector36 = new n, Te._tempVector37 = new n, Te
		._tempLightBound = new class {};
	class pe {
		constructor(e, t = 0) {
			this.normal = e, this.distance = t
		}
		static createPlaneBy3P(e, t, r) {
			var i = t.x - e.x,
				a = t.y - e.y,
				n = t.z - e.z,
				s = r.x - e.x,
				o = r.y - e.y,
				l = r.z - e.z,
				_ = a * l - n * o,
				h = n * s - i * l,
				c = i * o - a * s,
				d = 1 / Math.sqrt(_ * _ + h * h + c * c),
				u = _ * d,
				f = h * d,
				m = c * d;
			pe._TEMPVec3.x = u, pe._TEMPVec3.y = f, pe._TEMPVec3.z = m;
			var E = -(u * e.x + f * e.y + m * e.z);
			return new pe(pe._TEMPVec3, E)
		}
		normalize() {
			var e = this.normal.x,
				t = this.normal.y,
				r = this.normal.z,
				i = 1 / Math.sqrt(e * e + t * t + r * r);
			this.normal.x = e * i, this.normal.y = t * i, this.normal.z = r * i, this.distance *= i
		}
	}
	pe._TEMPVec3 = new n, pe.PlaneIntersectionType_Back = 0, pe.PlaneIntersectionType_Front = 1, pe
		.PlaneIntersectionType_Intersecting = 2;
	class ge {
		constructor(e, t) {
			this.origin = e, this.direction = t
		}
	}
	class Se {}
	Se.Disjoint = 0, Se.Contains = 1, Se.Intersects = 2;
	class ve {
		constructor() {}
		static distancePlaneToPoint(e, t) {
			return n.dot(e.normal, t) - e.distance
		}
		static distanceBoxToPoint(e, t) {
			var r = e.min,
				i = r.x,
				a = r.y,
				n = r.z,
				s = e.max,
				o = s.x,
				l = s.y,
				_ = s.z,
				h = t.x,
				c = t.y,
				d = t.z,
				u = 0;
			return h < i && (u += (i - h) * (i - h)), h > o && (u += (o - h) * (o - h)), c < a && (u += (a - c) * (
				a - c)), c > l && (u += (l - c) * (l - c)), d < n && (u += (n - d) * (n - d)), d > _ && (u += (
				_ - d) * (_ - d)), Math.sqrt(u)
		}
		static distanceBoxToBox(e, t) {
			var r, i = e.min,
				a = i.x,
				n = i.y,
				s = i.z,
				o = e.max,
				l = o.x,
				_ = o.y,
				h = o.z,
				c = t.min,
				d = c.x,
				u = c.y,
				f = c.z,
				m = t.max,
				E = m.x,
				T = m.y,
				p = m.z,
				g = 0;
			return a > E ? g += (r = a - E) * r : d > l && (g += (r = d - l) * r), n > T ? g += (r = n - T) * r :
				u > _ && (g += (r = u - _) * r), s > p ? g += (r = s - p) * r : f > h && (g += (r = f - h) * r),
				Math.sqrt(g)
		}
		static distanceSphereToPoint(e, t) {
			var r = Math.sqrt(n.distanceSquared(e.center, t));
			return r -= e.radius, Math.max(r, 0)
		}
		static distanceSphereToSphere(e, t) {
			var r = Math.sqrt(n.distanceSquared(e.center, t.center));
			return r -= e.radius + t.radius, Math.max(r, 0)
		}
		static intersectsRayAndTriangleRD(e, t, i, a, n) {
			var s = e.origin,
				o = s.x,
				l = s.y,
				_ = s.z,
				h = e.direction,
				c = h.x,
				d = h.y,
				u = h.z,
				f = t.x,
				m = t.y,
				E = t.z,
				T = i.x,
				p = i.y,
				g = i.z,
				S = a.x,
				v = a.y,
				R = a.z,
				I = ve._tempV30.x,
				x = ve._tempV30.y,
				A = ve._tempV30.z;
			I = T - f, x = p - m, A = g - E;
			var D = ve._tempV31.x,
				M = ve._tempV31.y,
				L = ve._tempV31.z;
			D = S - f, M = v - m, L = R - E;
			var C = ve._tempV32.x,
				y = ve._tempV32.y,
				O = ve._tempV32.z,
				N = I * (C = d * L - u * M) + x * (y = u * D - c * L) + A * (O = c * M - d * D);
			if (r.isZero(N)) return !1;
			var P = 1 / N,
				w = ve._tempV33.x,
				V = ve._tempV33.y,
				b = ve._tempV33.z,
				F = (w = o - f) * C + (V = l - m) * y + (b = _ - E) * O;
			if ((F *= P) < 0 || F > 1) return !1;
			var B = ve._tempV34.x,
				U = ve._tempV34.y,
				G = ve._tempV34.z,
				z = c * (B = V * A - b * x) + d * (U = b * I - w * A) + u * (G = w * x - V * I);
			if ((z *= P) < 0 || F + z > 1) return !1;
			var H = D * B + M * U + L * G;
			return !((H *= P) < 0)
		}
		static intersectsRayAndTriangleRP(e, t, r, i, a) {
			return ve.intersectsRayAndTriangleRD(e, t, r, i, void 0) ? (n.scale(e.direction, void 0, ve._tempV30), n
				.add(e.origin, ve._tempV30, a), !0) : (a = n._ZERO, !1)
		}
		static intersectsRayAndPoint(e, t) {
			n.subtract(e.origin, t, ve._tempV30);
			var i = n.dot(ve._tempV30, e.direction),
				a = n.dot(ve._tempV30, ve._tempV30) - r.zeroTolerance;
			return !(a > 0 && i > 0) && !(i * i - a < 0)
		}
		static intersectsRayAndRay(e, t, i) {
			var a = e.origin,
				s = a.x,
				o = a.y,
				l = a.z,
				_ = e.direction,
				h = _.x,
				c = _.y,
				d = _.z,
				u = t.origin,
				f = u.x,
				m = u.y,
				E = u.z,
				T = t.direction,
				p = T.x,
				g = T.y,
				S = T.z;
			n.cross(_, T, ve._tempV30);
			var v = ve._tempV30,
				R = n.scalarLength(ve._tempV30);
			if (r.isZero(R) && r.nearEqual(f, s) && r.nearEqual(m, o) && r.nearEqual(E, l)) return !0;
			R *= R;
			var I = f - s,
				x = m - o,
				A = E - l,
				D = p,
				M = g,
				L = S,
				C = v.x,
				y = v.y,
				O = v.z,
				N = I * M * O + x * L * C + A * D * y - I * L * y - x * D * O - A * M * C;
			D = h, M = c, L = d;
			var P = N / R;
			n.scale(_, P, ve._tempV30), n.scale(T, P, ve._tempV31), n.add(a, ve._tempV30, ve._tempV32), n.add(u, ve
				._tempV31, ve._tempV33);
			var w = ve._tempV32,
				V = ve._tempV33;
			return !!(r.nearEqual(V.x, w.x) && r.nearEqual(V.y, w.y) && r.nearEqual(V.z, w.z))
		}
		static intersectsPlaneAndTriangle(e, t, r, i) {
			var a = ve.intersectsPlaneAndPoint(e, t),
				n = ve.intersectsPlaneAndPoint(e, r),
				s = ve.intersectsPlaneAndPoint(e, i);
			return a == pe.PlaneIntersectionType_Front && n == pe.PlaneIntersectionType_Front && s == pe
				.PlaneIntersectionType_Front ? pe.PlaneIntersectionType_Front : a == pe
				.PlaneIntersectionType_Back && n == pe.PlaneIntersectionType_Back && s == pe
				.PlaneIntersectionType_Back ? pe.PlaneIntersectionType_Back : pe.PlaneIntersectionType_Intersecting
		}
		static intersectsRayAndPlaneRD(e, t, i) {
			var a = t.normal,
				s = n.dot(a, e.direction);
			if (r.isZero(s)) return 0, !1;
			var o = n.dot(a, e.origin);
			return !((-t.distance - o) / s < 0) || (0, !1)
		}
		static intersectsRayAndPlaneRP(e, t, r) {
			return !!ve.intersectsRayAndPlaneRD(e, t, void 0) && (n.scale(e.direction, void 0, ve._tempV30), n.add(e
				.origin, ve._tempV30, ve._tempV31), !0)
		}
		static intersectsRayAndBoxRD(e, t) {
			var i = e.origin,
				a = i.x,
				n = i.y,
				s = i.z,
				o = e.direction,
				l = o.x,
				_ = o.y,
				h = o.z,
				c = t.min,
				d = c.x,
				u = c.y,
				f = c.z,
				m = t.max,
				E = m.x,
				T = m.y,
				p = m.z,
				g = 0,
				S = r.MaxValue;
			if (r.isZero(l)) {
				if (a < d || a > E) return -1
			} else {
				var v = 1 / l,
					R = (d - a) * v,
					I = (E - a) * v;
				if (R > I) {
					var x = R;
					R = I, I = x
				}
				if ((g = Math.max(R, g)) > (S = Math.min(I, S))) return -1
			}
			if (r.isZero(_)) {
				if (n < u || n > T) return -1
			} else {
				var A = 1 / _,
					D = (u - n) * A,
					M = (T - n) * A;
				if (D > M) {
					var L = D;
					D = M, M = L
				}
				if ((g = Math.max(D, g)) > (S = Math.min(M, S))) return -1
			}
			if (r.isZero(h)) {
				if (s < f || s > p) return -1
			} else {
				var C = 1 / h,
					y = (f - s) * C,
					O = (p - s) * C;
				if (y > O) {
					var N = y;
					y = O, O = N
				}
				if ((g = Math.max(y, g)) > (S = Math.min(O, S))) return -1
			}
			return g
		}
		static intersectsRayAndBoxRP(e, t, r) {
			var i = ve.intersectsRayAndBoxRD(e, t);
			return -1 === i ? (n._ZERO.cloneTo(r), i) : (n.scale(e.direction, i, ve._tempV30), n.add(e.origin, ve
				._tempV30, ve._tempV31), ve._tempV31.cloneTo(r), i)
		}
		static intersectsRayAndSphereRD(e, t) {
			var r = t.radius;
			n.subtract(e.origin, t.center, ve._tempV30);
			var i = n.dot(ve._tempV30, e.direction),
				a = n.dot(ve._tempV30, ve._tempV30) - r * r;
			if (a > 0 && i > 0) return -1;
			var s = i * i - a;
			if (s < 0) return -1;
			var o = -i - Math.sqrt(s);
			return o < 0 && (o = 0), o
		}
		static intersectsRayAndSphereRP(e, t, r) {
			var i = ve.intersectsRayAndSphereRD(e, t);
			return -1 === i ? (n._ZERO.cloneTo(r), i) : (n.scale(e.direction, i, ve._tempV30), n.add(e.origin, ve
				._tempV30, ve._tempV31), ve._tempV31.cloneTo(r), i)
		}
		static intersectsSphereAndTriangle(e, t, r, i) {
			var a = e.center,
				s = e.radius;
			return ve.closestPointPointTriangle(a, t, r, i, ve._tempV30), n.subtract(ve._tempV30, a, ve._tempV31), n
				.dot(ve._tempV31, ve._tempV31) <= s * s
		}
		static intersectsPlaneAndPoint(e, t) {
			var r = n.dot(e.normal, t) + e.distance;
			return r > 0 ? pe.PlaneIntersectionType_Front : r < 0 ? pe.PlaneIntersectionType_Back : pe
				.PlaneIntersectionType_Intersecting
		}
		static intersectsPlaneAndPlane(e, t) {
			n.cross(e.normal, t.normal, ve._tempV30);
			var i = n.dot(ve._tempV30, ve._tempV30);
			return !r.isZero(i)
		}
		static intersectsPlaneAndPlaneRL(e, t, i) {
			var a = e.normal,
				s = t.normal;
			n.cross(a, s, ve._tempV34);
			var o = n.dot(ve._tempV34, ve._tempV34);
			return !r.isZero(o) && (n.scale(s, e.distance, ve._tempV30), n.scale(a, t.distance, ve._tempV31), n
				.subtract(ve._tempV30, ve._tempV31, ve._tempV32), n.cross(ve._tempV32, ve._tempV34, ve
				._tempV33), n.normalize(ve._tempV34, ve._tempV34), !0)
		}
		static intersectsPlaneAndBox(e, t) {
			var r = e.distance,
				i = e.normal,
				a = i.x,
				s = i.y,
				o = i.z,
				l = t.min,
				_ = l.x,
				h = l.y,
				c = l.z,
				d = t.max,
				u = d.x,
				f = d.y,
				m = d.z;
			ve._tempV30.x = a > 0 ? _ : u, ve._tempV30.y = s > 0 ? h : f, ve._tempV30.z = o > 0 ? c : m, ve._tempV31
				.x = a > 0 ? u : _, ve._tempV31.y = s > 0 ? f : h, ve._tempV31.z = o > 0 ? m : c;
			var E = n.dot(i, ve._tempV30);
			return E + r > 0 ? pe.PlaneIntersectionType_Front : (E = n.dot(i, ve._tempV31)) + r < 0 ? pe
				.PlaneIntersectionType_Back : pe.PlaneIntersectionType_Intersecting
		}
		static intersectsPlaneAndSphere(e, t) {
			var r = t.radius,
				i = n.dot(e.normal, t.center) + e.distance;
			return i > r ? pe.PlaneIntersectionType_Front : i < -r ? pe.PlaneIntersectionType_Back : pe
				.PlaneIntersectionType_Intersecting
		}
		static intersectsBoxAndBox(e, t) {
			var r = e.min,
				i = e.max,
				a = t.min,
				n = t.max;
			return !(r.x > n.x || a.x > i.x) && (!(r.y > n.y || a.y > i.y) && !(r.z > n.z || a.z > i.z))
		}
		static intersectsBoxAndSphere(e, t) {
			var r = t.center,
				i = t.radius;
			return n.Clamp(r, e.min, e.max, ve._tempV30), n.distanceSquared(r, ve._tempV30) <= i * i
		}
		static intersectsSphereAndSphere(e, t) {
			var r = e.radius + t.radius;
			return n.distanceSquared(e.center, t.center) <= r * r
		}
		static boxContainsPoint(e, t) {
			var r = e.min,
				i = e.max;
			return r.x <= t.x && i.x >= t.x && r.y <= t.y && i.y >= t.y && r.z <= t.z && i.z >= t.z ? Se.Contains :
				Se.Disjoint
		}
		static boxContainsBox(e, t) {
			var r = e.min,
				i = r.x,
				a = r.y,
				n = r.z,
				s = e.max,
				o = s.x,
				l = s.y,
				_ = s.z,
				h = t.min,
				c = h.x,
				d = h.y,
				u = h.z,
				f = t.max,
				m = f.x,
				E = f.y,
				T = f.z;
			return o < c || i > m ? Se.Disjoint : l < d || a > E ? Se.Disjoint : _ < u || n > T ? Se.Disjoint : i <=
				c && m <= o && a <= d && E <= l && n <= u && T <= _ ? Se.Contains : Se.Intersects
		}
		static boxContainsSphere(e, t) {
			var r = e.min,
				i = r.x,
				a = r.y,
				s = r.z,
				o = e.max,
				l = o.x,
				_ = o.y,
				h = o.z,
				c = t.center,
				d = c.x,
				u = c.y,
				f = c.z,
				m = t.radius;
			return n.Clamp(c, r, o, ve._tempV30), n.distanceSquared(c, ve._tempV30) > m * m ? Se.Disjoint : i + m <=
				d && d <= l - m && l - i > m && a + m <= u && u <= _ - m && _ - a > m && s + m <= f && f <= h - m &&
				h - s > m ? Se.Contains : Se.Intersects
		}
		static sphereContainsPoint(e, t) {
			return n.distanceSquared(t, e.center) <= e.radius * e.radius ? Se.Contains : Se.Disjoint
		}
		static sphereContainsTriangle(e, t, r, i) {
			var a = ve.sphereContainsPoint(e, t),
				n = ve.sphereContainsPoint(e, r),
				s = ve.sphereContainsPoint(e, i);
			return a == Se.Contains && n == Se.Contains && s == Se.Contains ? Se.Contains : ve
				.intersectsSphereAndTriangle(e, t, r, i) ? Se.Intersects : Se.Disjoint
		}
		static sphereContainsBox(e, t) {
			var r = e.center,
				i = r.x,
				a = r.y,
				s = r.z,
				o = e.radius,
				l = t.min,
				_ = l.x,
				h = l.y,
				c = l.z,
				d = t.max,
				u = d.x,
				f = d.y,
				m = d.z,
				E = ve._tempV30;
			E.x, E.y, E.z;
			if (!ve.intersectsBoxAndSphere(t, e)) return Se.Disjoint;
			var T = o * o;
			return i - _, a - f, s - m, n.scalarLengthSquared(ve._tempV30) > T ? Se.Intersects : (i - u, a - f, s -
				m, n.scalarLengthSquared(ve._tempV30) > T ? Se.Intersects : (i - u, a - h, s - m, n
					.scalarLengthSquared(ve._tempV30) > T ? Se.Intersects : (i - _, a - h, s - m, n
						.scalarLengthSquared(ve._tempV30) > T ? Se.Intersects : (i - _, a - f, s - c, n
							.scalarLengthSquared(ve._tempV30) > T ? Se.Intersects : (i - u, a - f, s - c, n
								.scalarLengthSquared(ve._tempV30) > T ? Se.Intersects : (i - u, a - h, s - c, n
									.scalarLengthSquared(ve._tempV30) > T ? Se.Intersects : (i - _, a - h, s -
										c, n.scalarLengthSquared(ve._tempV30) > T ? Se.Intersects : Se.Contains)
									))))))
		}
		static sphereContainsSphere(e, t) {
			var r = e.radius,
				i = t.radius,
				a = n.distance(e.center, t.center);
			return r + i < a ? Se.Disjoint : r - i < a ? Se.Intersects : Se.Contains
		}
		static closestPointPointTriangle(e, t, r, i, a) {
			n.subtract(r, t, ve._tempV30), n.subtract(i, t, ve._tempV31), n.subtract(e, t, ve._tempV32), n.subtract(
				e, r, ve._tempV33), n.subtract(e, i, ve._tempV34);
			var s = n.dot(ve._tempV30, ve._tempV32),
				o = n.dot(ve._tempV31, ve._tempV32),
				l = n.dot(ve._tempV30, ve._tempV33),
				_ = n.dot(ve._tempV31, ve._tempV33),
				h = n.dot(ve._tempV30, ve._tempV34),
				c = n.dot(ve._tempV31, ve._tempV34);
			if (s <= 0 && o <= 0) t.cloneTo(a);
			else if (l >= 0 && _ <= l) r.cloneTo(a);
			else {
				var d = s * _ - l * o;
				if (d <= 0 && s >= 0 && l <= 0) {
					var u = s / (s - l);
					return n.scale(ve._tempV30, u, a), void n.add(t, a, a)
				}
				if (c >= 0 && h <= c) i.cloneTo(a);
				else {
					var f = h * o - s * c;
					if (f <= 0 && o >= 0 && c <= 0) {
						var m = o / (o - c);
						return n.scale(ve._tempV31, m, a), void n.add(t, a, a)
					}
					var E = l * c - h * _;
					if (E <= 0 && _ - l >= 0 && h - c >= 0) {
						var T = (_ - l) / (_ - l + (h - c));
						return n.subtract(i, r, a), n.scale(a, T, a), void n.add(r, a, a)
					}
					var p = 1 / (E + f + d),
						g = f * p,
						S = d * p;
					n.scale(ve._tempV30, g, ve._tempV35), n.scale(ve._tempV31, S, ve._tempV36), n.add(ve._tempV35,
						ve._tempV36, a), n.add(t, a, a)
				}
			}
		}
		static closestPointPlanePoint(e, t, r) {
			var i = e.normal,
				a = n.dot(i, t) - e.distance;
			n.scale(i, a, ve._tempV30), n.subtract(t, ve._tempV30, r)
		}
		static closestPointBoxPoint(e, t, r) {
			n.max(t, e.min, ve._tempV30), n.min(ve._tempV30, e.max, r)
		}
		static closestPointSpherePoint(e, t, r) {
			var i = e.center;
			n.subtract(t, i, r), n.normalize(r, r), n.scale(r, e.radius, r), n.add(r, i, r)
		}
		static closestPointSphereSphere(e, t, r) {
			var i = e.center;
			n.subtract(t.center, i, r), n.normalize(r, r), n.scale(r, e.radius, r), n.add(r, i, r)
		}
	}
	ve._tempV30 = new n, ve._tempV31 = new n, ve._tempV32 = new n, ve._tempV33 = new n, ve._tempV34 = new n, ve
		._tempV35 = new n, ve._tempV36 = new n;
	class Re {
		constructor(e) {
			this._matrix = e, this._near = new pe(new n), this._far = new pe(new n), this._left = new pe(new n),
				this._right = new pe(new n), this._top = new pe(new n), this._bottom = new pe(new n), Re
				._getPlanesFromMatrix(this._matrix, this._near, this._far, this._left, this._right, this._top, this
					._bottom)
		}
		get matrix() {
			return this._matrix
		}
		set matrix(e) {
			this._matrix = e, Re._getPlanesFromMatrix(this._matrix, this._near, this._far, this._left, this._right,
				this._top, this._bottom)
		}
		get near() {
			return this._near
		}
		get far() {
			return this._far
		}
		get left() {
			return this._left
		}
		get right() {
			return this._right
		}
		get top() {
			return this._top
		}
		get bottom() {
			return this._bottom
		}
		equalsBoundFrustum(e) {
			return this._matrix.equalsOtherMatrix(e.matrix)
		}
		equalsObj(e) {
			if (e instanceof Re) {
				var t = e;
				return this.equalsBoundFrustum(t)
			}
			return !1
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
					return null
			}
		}
		static _getPlanesFromMatrix(e, t, r, i, a, n, s) {
			var o = e.elements,
				l = o[0],
				_ = o[1],
				h = o[2],
				c = o[3],
				d = o[4],
				u = o[5],
				f = o[6],
				m = o[7],
				E = o[8],
				T = o[9],
				p = o[10],
				g = o[11],
				S = o[12],
				v = o[13],
				R = o[14],
				I = o[15],
				x = t.normal;
			x.x = c + h, x.y = m + f, x.z = g + p, t.distance = I + R, t.normalize();
			var A = r.normal;
			A.x = c - h, A.y = m - f, A.z = g - p, r.distance = I - R, r.normalize();
			var D = i.normal;
			D.x = c + l, D.y = m + d, D.z = g + E, i.distance = I + S, i.normalize();
			var M = a.normal;
			M.x = c - l, M.y = m - d, M.z = g - E, a.distance = I - S, a.normalize();
			var L = n.normal;
			L.x = c - _, L.y = m - u, L.z = g - T, n.distance = I - v, n.normalize();
			var C = s.normal;
			C.x = c + _, C.y = m + u, C.z = g + T, s.distance = I + v, s.normalize()
		}
		static _get3PlaneInterPoint(e, t, r) {
			var i = e.normal,
				a = t.normal,
				s = r.normal;
			n.cross(a, s, Re._tempV30), n.cross(s, i, Re._tempV31), n.cross(i, a, Re._tempV32);
			var o = n.dot(i, Re._tempV30),
				l = n.dot(a, Re._tempV31),
				_ = n.dot(s, Re._tempV32);
			return n.scale(Re._tempV30, -e.distance / o, Re._tempV33), n.scale(Re._tempV31, -t.distance / l, Re
				._tempV34), n.scale(Re._tempV32, -r.distance / _, Re._tempV35), n.add(Re._tempV33, Re._tempV34,
				Re._tempV36), n.add(Re._tempV35, Re._tempV36, Re._tempV37), Re._tempV37
		}
		getCorners(e) {
			Re._get3PlaneInterPoint(this._near, this._bottom, this._right).cloneTo(e[0]), Re._get3PlaneInterPoint(
					this._near, this._top, this._right).cloneTo(e[1]), Re._get3PlaneInterPoint(this._near, this
					._top, this._left).cloneTo(e[2]), Re._get3PlaneInterPoint(this._near, this._bottom, this._left)
				.cloneTo(e[3]), Re._get3PlaneInterPoint(this._far, this._bottom, this._right).cloneTo(e[4]), Re
				._get3PlaneInterPoint(this._far, this._top, this._right).cloneTo(e[5]), Re._get3PlaneInterPoint(this
					._far, this._top, this._left).cloneTo(e[6]), Re._get3PlaneInterPoint(this._far, this._bottom,
					this._left).cloneTo(e[7])
		}
		containsPoint(e) {
			for (var t = pe.PlaneIntersectionType_Front, r = pe.PlaneIntersectionType_Front, i = 0; i < 6; i++) {
				switch (i) {
					case 0:
						r = ve.intersectsPlaneAndPoint(this._near, e);
						break;
					case 1:
						r = ve.intersectsPlaneAndPoint(this._far, e);
						break;
					case 2:
						r = ve.intersectsPlaneAndPoint(this._left, e);
						break;
					case 3:
						r = ve.intersectsPlaneAndPoint(this._right, e);
						break;
					case 4:
						r = ve.intersectsPlaneAndPoint(this._top, e);
						break;
					case 5:
						r = ve.intersectsPlaneAndPoint(this._bottom, e)
				}
				switch (r) {
					case pe.PlaneIntersectionType_Back:
						return Se.Disjoint;
					case pe.PlaneIntersectionType_Intersecting:
						t = pe.PlaneIntersectionType_Intersecting
				}
			}
			switch (t) {
				case pe.PlaneIntersectionType_Intersecting:
					return Se.Intersects;
				default:
					return Se.Contains
			}
		}
		intersects(e) {
			var t = e.min,
				r = e.max,
				i = t.x,
				a = t.y,
				n = t.z,
				s = r.x,
				o = r.y,
				l = r.z,
				_ = this._near.normal;
			if (this._near.distance + _.x * (_.x < 0 ? i : s) + _.y * (_.y < 0 ? a : o) + _.z * (_.z < 0 ? n : l) <
				0) return !1;
			var h = this._left.normal;
			if (this._left.distance + h.x * (h.x < 0 ? i : s) + h.y * (h.y < 0 ? a : o) + h.z * (h.z < 0 ? n : l) <
				0) return !1;
			var c = this._right.normal;
			if (this._right.distance + c.x * (c.x < 0 ? i : s) + c.y * (c.y < 0 ? a : o) + c.z * (c.z < 0 ? n : l) <
				0) return !1;
			var d = this._bottom.normal;
			if (this._bottom.distance + d.x * (d.x < 0 ? i : s) + d.y * (d.y < 0 ? a : o) + d.z * (d.z < 0 ? n :
				l) < 0) return !1;
			var u = this._top.normal;
			if (this._top.distance + u.x * (u.x < 0 ? i : s) + u.y * (u.y < 0 ? a : o) + u.z * (u.z < 0 ? n : l) <
				0) return !1;
			var f = this._far.normal;
			return !(this._far.distance + f.x * (f.x < 0 ? i : s) + f.y * (f.y < 0 ? a : o) + f.z * (f.z < 0 ? n :
				l) < 0)
		}
		containsBoundBox(e) {
			for (var t = Re._tempV30, r = Re._tempV31, i = e.min, a = e.max, n = Se.Contains, s = 0; s < 6; s++) {
				var o = this.getPlane(s),
					l = o.normal;
				if (l.x >= 0 ? (t.x = a.x, r.x = i.x) : (t.x = i.x, r.x = a.x), l.y >= 0 ? (t.y = a.y, r.y = i.y) :
					(t.y = i.y, r.y = a.y), l.z >= 0 ? (t.z = a.z, r.z = i.z) : (t.z = i.z, r.z = a.z), ve
					.intersectsPlaneAndPoint(o, t) === pe.PlaneIntersectionType_Back) return Se.Disjoint;
				ve.intersectsPlaneAndPoint(o, r) === pe.PlaneIntersectionType_Back && (n = Se.Intersects)
			}
			return n
		}
		containsBoundSphere(e) {
			for (var t = pe.PlaneIntersectionType_Front, r = pe.PlaneIntersectionType_Front, i = 0; i < 6; i++) {
				switch (i) {
					case 0:
						r = ve.intersectsPlaneAndSphere(this._near, e);
						break;
					case 1:
						r = ve.intersectsPlaneAndSphere(this._far, e);
						break;
					case 2:
						r = ve.intersectsPlaneAndSphere(this._left, e);
						break;
					case 3:
						r = ve.intersectsPlaneAndSphere(this._right, e);
						break;
					case 4:
						r = ve.intersectsPlaneAndSphere(this._top, e);
						break;
					case 5:
						r = ve.intersectsPlaneAndSphere(this._bottom, e)
				}
				switch (r) {
					case pe.PlaneIntersectionType_Back:
						return Se.Disjoint;
					case pe.PlaneIntersectionType_Intersecting:
						t = pe.PlaneIntersectionType_Intersecting
				}
			}
			switch (t) {
				case pe.PlaneIntersectionType_Intersecting:
					return Se.Intersects;
				default:
					return Se.Contains
			}
		}
	}
	Re._tempV30 = new n, Re._tempV31 = new n, Re._tempV32 = new n, Re._tempV33 = new n, Re._tempV34 = new n, Re
		._tempV35 = new n, Re._tempV36 = new n, Re._tempV37 = new n;
	class Ie {
		constructor(e, t, r, i) {
			this.minDepth = 0, this.maxDepth = 1, this.x = e, this.y = t, this.width = r, this.height = i
		}
		project(e, t, r) {
			var i = e.x,
				a = e.y,
				s = e.z;
			n.transformV3ToV3(e, t, r);
			var o = t.elements,
				l = i * o[3] + a * o[7] + s * o[11] + o[15];
			1 !== l && (r.x = r.x / l, r.y = r.y / l, r.z = r.z / l), r.x = .5 * (r.x + 1) * this.width + this.x, r
				.y = .5 * (1 - r.y) * this.height + this.y, r.z = r.z * (this.maxDepth - this.minDepth) + this
				.minDepth
		}
		unprojectFromMat(e, t, r) {
			var i = t.elements;
			r.x = (e.x - this.x) / this.width * 2 - 1, r.y = -((e.y - this.y) / this.height * 2 - 1);
			var a = (this.maxDepth - this.minDepth) / 2;
			r.z = (e.z - this.minDepth - a) / a;
			var s = r.x * i[3] + r.y * i[7] + r.z * i[11] + i[15];
			n.transformV3ToV3(r, t, r), 1 !== s && (r.x = r.x / s, r.y = r.y / s, r.z = r.z / s)
		}
		unprojectFromWVP(e, t, r, i, a) {
			p.multiply(t, r, Ie._tempMatrix4x4), i && p.multiply(Ie._tempMatrix4x4, i, Ie._tempMatrix4x4), Ie
				._tempMatrix4x4.invert(Ie._tempMatrix4x4), this.unprojectFromMat(e, Ie._tempMatrix4x4, a)
		}
		cloneTo(e) {
			e.x = this.x, e.y = this.y, e.width = this.width, e.height = this.height, e.minDepth = this.minDepth, e
				.maxDepth = this.maxDepth
		}
	}
	Ie._tempMatrix4x4 = new p;
	class xe {
		constructor() {}
		static calculateCursorRay(e, t, r, i, a, s) {
			var o = e.x,
				l = e.y,
				_ = xe._tempVector30,
				h = _;
			h.x = o, h.y = l, h.z = t.minDepth;
			var c = xe._tempVector31,
				d = c;
			d.x = o, d.y = l, d.z = t.maxDepth;
			var u = s.origin,
				f = xe._tempVector32;
			t.unprojectFromWVP(_, r, i, a, u), t.unprojectFromWVP(c, r, i, a, f);
			var m = s.direction;
			m.x = f.x - u.x, m.y = f.y - u.y, m.z = f.z - u.z, n.normalize(s.direction, s.direction)
		}
		static rayIntersectsTriangle(e, t, r, i) {
			var a = xe._tempVector30,
				s = xe._tempVector31;
			n.subtract(r, t, a), n.subtract(i, t, s);
			var o, l = xe._tempVector32;
			if (n.cross(e.direction, s, l), (o = n.dot(a, l)) > -Number.MIN_VALUE && o < Number.MIN_VALUE)
			return Number.NaN;
			var _, h = 1 / o,
				c = xe._tempVector33;
			if (n.subtract(e.origin, t, c), _ = n.dot(c, l), (_ *= h) < 0 || _ > 1) return Number.NaN;
			var d, u, f = xe._tempVector34;
			return n.cross(c, a, f), d = n.dot(e.direction, f), (d *= h) < 0 || _ + d > 1 ? Number.NaN : (u = n.dot(
				s, f), (u *= h) < 0 ? Number.NaN : u)
		}
	}
	xe._tempVector30 = new n, xe._tempVector31 = new n, xe._tempVector32 = new n, xe._tempVector33 = new n, xe
		._tempVector34 = new n;
	class Ae {
		static supportTextureFormat(e) {
			switch (e) {
				case t.TextureFormat.R32G32B32A32:
					return !(!t.LayaGL.layaGPUInstance._isWebGL2 && !t.LayaGL.layaGPUInstance._oesTextureFloat);
				default:
					return !0
			}
		}
		static supportRenderTextureFormat(e) {
			switch (e) {
				case t.RenderTextureFormat.R16G16B16A16:
					return !!(t.LayaGL.layaGPUInstance._isWebGL2 || t.LayaGL.layaGPUInstance._oesTextureHalfFloat &&
						t.LayaGL.layaGPUInstance._oesTextureHalfFloatLinear);
				default:
					return !0
			}
		}
	}
	class De extends t.BufferStateBase {
		constructor() {
			super()
		}
		applyVertexBuffer(e) {
			if (t.BufferStateBase._curBindedBufferState !== this)
			throw "BufferState: must call bind() function first.";
			var r = t.LayaGL.instance,
				i = e.vertexDeclaration,
				a = i._shaderValues.getData();
			for (var n in this.vertexDeclaration = i, e.bind(), a) {
				var s = parseInt(n),
					o = a[n];
				r.enableVertexAttribArray(s), r.vertexAttribPointer(s, o[0], o[1], !!o[2], o[3], o[4])
			}
		}
		applyVertexBuffers(e) {
			if (t.BufferStateBase._curBindedBufferState !== this)
			throw "BufferState: must call bind() function first.";
			for (var r = t.LayaGL.instance, i = 0, a = e.length; i < a; i++) {
				var n = e[i],
					s = n.vertexDeclaration._shaderValues.getData();
				for (var o in n.bind(), s) {
					var l = parseInt(o),
						_ = s[o];
					r.enableVertexAttribArray(l), r.vertexAttribPointer(l, _[0], _[1], !!_[2], _[3], _[4])
				}
			}
		}
		applyInstanceVertexBuffer(e) {
			if (t.LayaGL.layaGPUInstance.supportInstance()) {
				if (t.BufferStateBase._curBindedBufferState !== this)
				throw "BufferState: must call bind() function first.";
				var r = t.LayaGL.instance,
					i = e.vertexDeclaration._shaderValues.getData();
				for (var a in e.bind(), i) {
					var n = parseInt(a),
						s = i[a];
					r.enableVertexAttribArray(n), r.vertexAttribPointer(n, s[0], s[1], !!s[2], s[3], s[4]), t
						.LayaGL.layaGPUInstance.vertexAttribDivisor(n, 1)
				}
			}
		}
		applyIndexBuffer(e) {
			if (t.BufferStateBase._curBindedBufferState !== this)
			throw "BufferState: must call bind() function first.";
			this._bindedIndexBuffer !== e && (e._bindForVAO(), this._bindedIndexBuffer = e)
		}
	}
	class Me extends t.Buffer {
		constructor(e, r, i = 35044, a = !1) {
			var n;
			if (super(), this._indexType = e, this._indexCount = r, this._bufferUsage = i, this._bufferType = t
				.LayaGL.instance.ELEMENT_ARRAY_BUFFER, this._canRead = a, e == Me.INDEXTYPE_USHORT) this
				._indexTypeByteCount = 2;
			else {
				if (e != Me.INDEXTYPE_UBYTE) throw new Error("unidentification index type.");
				this._indexTypeByteCount = 1
			}
			n = this._indexTypeByteCount * r, this._byteLength = n;
			var s = t.BufferStateBase._curBindedBufferState;
			s ? s._bindedIndexBuffer === this ? t.LayaGL.instance.bufferData(this._bufferType, n, this
				._bufferUsage) : (s.unBind(), this.bind(), t.LayaGL.instance.bufferData(this._bufferType, n,
				this._bufferUsage), s.bind()) : (this.bind(), t.LayaGL.instance.bufferData(this._bufferType,
				n, this._bufferUsage)), a && (e == Me.INDEXTYPE_USHORT ? this._buffer = new Uint16Array(r) :
				e == Me.INDEXTYPE_UBYTE && (this._buffer = new Uint8Array(r)))
		}
		get indexType() {
			return this._indexType
		}
		get indexTypeByteCount() {
			return this._indexTypeByteCount
		}
		get indexCount() {
			return this._indexCount
		}
		get canRead() {
			return this._canRead
		}
		_bindForVAO() {
			if (!t.BufferStateBase._curBindedBufferState) throw "IndexBuffer3D: must bind current BufferState.";
			var e = t.LayaGL.instance;
			e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this._glBuffer)
		}
		bind() {
			if (t.BufferStateBase._curBindedBufferState)
		throw "IndexBuffer3D: must unbind current BufferState.";
			if (t.Buffer._bindedIndexBuffer !== this._glBuffer) {
				var e = t.LayaGL.instance;
				return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this._glBuffer), t.Buffer._bindedIndexBuffer = this
					._glBuffer, !0
			}
			return !1
		}
		setData(e, r = 0, i = 0, a = 4294967295) {
			var n;
			this._indexType == Me.INDEXTYPE_USHORT ? (n = 2, 0 === i && 4294967295 === a || (e =
				new Uint16Array(e.buffer, i * n, a))) : this._indexType == Me.INDEXTYPE_UBYTE && (n = 1,
				0 === i && 4294967295 === a || (e = new Uint8Array(e.buffer, i * n, a)));
			var s = t.BufferStateBase._curBindedBufferState;
			if (s ? s._bindedIndexBuffer === this ? t.LayaGL.instance.bufferSubData(this._bufferType, r * n,
				e) : (s.unBind(), this.bind(), t.LayaGL.instance.bufferSubData(this._bufferType, r * n, e), s
					.bind()) : (this.bind(), t.LayaGL.instance.bufferSubData(this._bufferType, r * n, e)), this
				._canRead)
				if (0 !== r || 0 !== i || 4294967295 !== a) {
					var o = this._buffer.length - r;
					a > o && (a = o);
					for (var l = 0; l < a; l++) this._buffer[r + l] = e[l]
				} else this._buffer = e
		}
		getData() {
			if (this._canRead) return this._buffer;
			throw new Error("Can't read data from VertexBuffer with only write flag!")
		}
		destroy() {
			super.destroy(), this._buffer = null
		}
	}
	Me.INDEXTYPE_UBYTE = "ubyte", Me.INDEXTYPE_USHORT = "ushort";
	class Le {
		constructor() {}
		_render(e) {}
	}
	class Ce extends Le {
		static __init__() {
			Ce.instance = new Ce
		}
		constructor() {
			super();
			var e = t.LayaGL.instance,
				r = new Float32Array([-1, 1, -1, 1, 1, -1, 1, 1, 1, -1, 1, 1, -1, -1, -1, 1, -1, -1, 1, -1, 1, -1, -
					1, 1
				]),
				i = new Uint8Array([0, 1, 2, 2, 3, 0, 4, 7, 6, 6, 5, 4, 0, 3, 7, 7, 4, 0, 1, 5, 6, 6, 2, 1, 3, 2, 6,
					6, 7, 3, 0, 4, 5, 5, 1, 0
				]),
				a = fe.getVertexDeclaration("POSITION");
			this._vertexBuffer = new he(8 * a.vertexStride, e.STATIC_DRAW, !1), this._vertexBuffer
				.vertexDeclaration = a, this._indexBuffer = new Me(Me.INDEXTYPE_UBYTE, 36, e.STATIC_DRAW, !1), this
				._vertexBuffer.setData(r.buffer), this._indexBuffer.setData(i);
			var n = new De;
			n.bind(), n.applyVertexBuffer(this._vertexBuffer), n.applyIndexBuffer(this._indexBuffer), n.unBind(),
				this._bufferState = n
		}
		_render(e) {
			var r = t.LayaGL.instance;
			r.drawElements(r.TRIANGLES, 36, r.UNSIGNED_BYTE, 0), t.Stat.trianglesFaces += 12, t.Stat.renderBatches++
		}
	}
	class ye {
		constructor() {
			this._mesh = Ce.instance
		}
		get material() {
			return this._material
		}
		set material(e) {
			this._material !== e && (this._material && this._material._removeReference(), e && e._addReference(),
				this._material = e)
		}
		get mesh() {
			return this._mesh
		}
		set mesh(e) {
			this._mesh !== e && (this._mesh = e)
		}
		_isAvailable() {
			return !(!this._material || !this._mesh)
		}
		_render(e) {
			if (this._material && this._mesh) {
				var r = t.LayaGL.instance,
					i = e.scene,
					a = e.camera,
					s = B._SET_RUNTIME_VALUE_MODE_REFERENCE_;
				t.ILaya.Render.supportWebGLPlusRendering && B.setRuntimeValueMode(!1), t.WebGLContext.setCullFace(r,
					!1), t.WebGLContext.setDepthFunc(r, r.LEQUAL), t.WebGLContext.setDepthMask(r, !1);
				var o = ye._compileDefine;
				this._material._shaderValues._defineDatas.cloneTo(o);
				var l = e.shader = this._material._shader.getSubShaderAt(0)._passes[0].withCompile(o),
					_ = l.bind(),
					h = t.Stat.loopCount !== l._uploadMark,
					c = l._uploadScene !== i || h;
				(c || _) && (l.uploadUniforms(l._sceneUniformParamsMap, i._shaderValues, c), l._uploadScene = i);
				var d = a._getInternalRenderTexture(),
					u = l._uploadCamera !== a || h;
				if (u || _) {
					var f = ye._tempMatrix0,
						m = ye._tempMatrix1;
					a.viewMatrix.cloneTo(f), a.projectionMatrix.cloneTo(m), f.setTranslationVector(n._ZERO), a
						.orthographic && p.createPerspective(a.fieldOfView, a.aspectRatio, a.nearPlane, a.farPlane,
							m);
					var E = 1 / Math.tan(3.1416 * a.fieldOfView / 180 * .5);
					m.elements[0] = E / a.aspectRatio, m.elements[5] = E, m.elements[10] = 1e-6 - 1, m.elements[
						11] = -1, m.elements[14] = -0, a._applyViewProject(e, f, m, !!d), l.uploadUniforms(l
							._cameraUniformParamsMap, a._shaderValues, u), l._uploadCamera = a
				}
				var T = l._uploadMaterial !== this._material || h;
				(T || _) && (l.uploadUniforms(l._materialUniformParamsMap, this._material._shaderValues, T), l
					._uploadMaterial = this._material), this._mesh._bufferState.bind(), this._mesh._render(e), t
					.ILaya.Render.supportWebGLPlusRendering && B.setRuntimeValueMode(s), t.WebGLContext
					.setDepthFunc(r, r.LESS), t.WebGLContext.setDepthMask(r, !0), a._applyViewProject(e, a
						.viewMatrix, a.projectionMatrix, !!d)
			}
		}
		destroy() {
			this._material && (this._material._removeReference(), this._material = null)
		}
	}
	ye._tempMatrix0 = new p, ye._tempMatrix1 = new p, ye._compileDefine = new V;
	class Oe extends ae {
		constructor(e = .3, t = 1e3) {
			super(), this._skyRenderer = new ye, this._forward = new n, this._up = new n, this.clearColor = new a(
					100 / 255, 149 / 255, 237 / 255, 1), this._shaderValues = new B(null), this._fieldOfView = 60,
				this._useUserProjectionMatrix = !1, this._orthographic = !1, this._orthographicVerticalSize = 10,
				this.renderingOrder = 0, this._nearPlane = e, this._farPlane = t, this.cullingMask = 2147483647,
				this.clearFlag = Oe.CLEARFLAG_SOLIDCOLOR, this.useOcclusionCulling = !0
		}
		get skyRenderer() {
			return this._skyRenderer
		}
		get fieldOfView() {
			return this._fieldOfView
		}
		set fieldOfView(e) {
			this._fieldOfView = e, this._calculateProjectionMatrix()
		}
		get nearPlane() {
			return this._nearPlane
		}
		set nearPlane(e) {
			this._nearPlane = e, this._calculateProjectionMatrix()
		}
		get farPlane() {
			return this._farPlane
		}
		set farPlane(e) {
			this._farPlane = e, this._calculateProjectionMatrix()
		}
		get orthographic() {
			return this._orthographic
		}
		set orthographic(e) {
			this._orthographic = e, this._calculateProjectionMatrix()
		}
		get orthographicVerticalSize() {
			return this._orthographicVerticalSize
		}
		set orthographicVerticalSize(e) {
			this._orthographicVerticalSize = e, this._calculateProjectionMatrix()
		}
		get renderingOrder() {
			return this._renderingOrder
		}
		set renderingOrder(e) {
			this._renderingOrder = e, this._sortCamerasByRenderingOrder()
		}
		_sortCamerasByRenderingOrder() {
			if (this.displayedInStage)
				for (var e = this.scene._cameraPool, t = e.length - 1, r = 0; r < t; r++)
					if (e[r].renderingOrder > e[t].renderingOrder) {
						var i = e[r];
						e[r] = e[t], e[t] = i
					}
		}
		_calculateProjectionMatrix() {}
		_onScreenSizeChanged() {
			this._calculateProjectionMatrix()
		}
		_prepareCameraToRender() {
			var e = this._shaderValues;
			this.transform.getForward(this._forward), this.transform.getUp(this._up), e.setVector3(Oe.CAMERAPOS,
				this.transform.position), e.setVector3(Oe.CAMERADIRECTION, this._forward), e.setVector3(Oe
				.CAMERAUP, this._up)
		}
		render(e = null, t = null) {}
		addLayer(e) {
			this.cullingMask |= Math.pow(2, e)
		}
		removeLayer(e) {
			this.cullingMask &= ~Math.pow(2, e)
		}
		addAllLayers() {
			this.cullingMask = 2147483647
		}
		removeAllLayers() {
			this.cullingMask = 0
		}
		resetProjectionMatrix() {
			this._useUserProjectionMatrix = !1, this._calculateProjectionMatrix()
		}
		_onActive() {
			this._scene._addCamera(this), super._onActive()
		}
		_onInActive() {
			this._scene._removeCamera(this), super._onInActive()
		}
		_parse(e, r) {
			super._parse(e, r);
			var i = e.clearFlag;
			void 0 !== i && (this.clearFlag = i), this.orthographic = e.orthographic, void 0 !== e
				.orthographicVerticalSize && (this.orthographicVerticalSize = e.orthographicVerticalSize),
				void 0 !== e.fieldOfView && (this.fieldOfView = e.fieldOfView), this.nearPlane = e.nearPlane, this
				.farPlane = e.farPlane;
			var n = e.clearColor;
			this.clearColor = new a(n[0], n[1], n[2], n[3]);
			var s = e.skyboxMaterial;
			s && (this._skyRenderer.material = t.Loader.getRes(s.path))
		}
		destroy(e = !0) {
			this._skyRenderer.destroy(), this._skyRenderer = null, t.Laya.stage.off(t.Event.RESIZE, this, this
				._onScreenSizeChanged), super.destroy(e)
		}
		_create() {
			return new Oe
		}
	}
	Oe._tempMatrix4x40 = new p, Oe.CAMERAPOS = F.propertyNameToID("u_CameraPos"), Oe.VIEWMATRIX = F.propertyNameToID(
			"u_View"), Oe.PROJECTMATRIX = F.propertyNameToID("u_Projection"), Oe.VIEWPROJECTMATRIX = F.propertyNameToID(
			"u_ViewProjection"), Oe.CAMERADIRECTION = F.propertyNameToID("u_CameraDirection"), Oe.CAMERAUP = F
		.propertyNameToID("u_CameraUp"), Oe.VIEWPORT = F.propertyNameToID("u_Viewport"), Oe.PROJECTION_PARAMS = F
		.propertyNameToID("u_ProjectionParams"), Oe.RENDERINGTYPE_DEFERREDLIGHTING = "DEFERREDLIGHTING", Oe
		.RENDERINGTYPE_FORWARDRENDERING = "FORWARDRENDERING", Oe.CLEARFLAG_SOLIDCOLOR = 0, Oe.CLEARFLAG_SKY = 1, Oe
		.CLEARFLAG_DEPTHONLY = 2, Oe.CLEARFLAG_NONE = 3, Oe._invertYScaleMatrix = new p(1, 0, 0, 0, 0, -1, 0, 0, 0, 0,
			1, 0, 0, 0, 0, 1), Oe._invertYProjectionMatrix = new p, Oe._invertYProjectionViewMatrix = new p;
	class Ne extends t.Resource {
		constructor() {
			super(), this._bufferState = new De, this._bufferStateInvertUV = new De;
			var e = t.LayaGL.instance;
			this._vertexBuffer = new he(64, e.STATIC_DRAW, !1), this._vertexBuffer.vertexDeclaration = Ne
				._vertexDeclaration, this._vertexBuffer.setData(Ne._vertices.buffer), this._bufferState.bind(),
				this._bufferState.applyVertexBuffer(this._vertexBuffer), this._bufferState.unBind(), this
				._vertexBufferInvertUV = new he(64, e.STATIC_DRAW, !1), this._vertexBufferInvertUV
				.vertexDeclaration = Ne._vertexDeclaration, this._vertexBufferInvertUV.setData(Ne
					._verticesInvertUV.buffer), this._bufferStateInvertUV.bind(), this._bufferStateInvertUV
				.applyVertexBuffer(this._vertexBufferInvertUV), this._bufferStateInvertUV.unBind(), this
				._setGPUMemory(this._vertexBuffer._byteLength + this._vertexBufferInvertUV._byteLength)
		}
		static __init__() {
			Ne._vertexDeclaration = new de(16, [new ue(0, ce.Vector4, Ne.SCREENQUAD_POSITION_UV)]), Ne
				.instance = new Ne, Ne.instance.lock = !0
		}
		render() {
			var e = t.LayaGL.instance;
			this._bufferState.bind(), e.drawArrays(e.TRIANGLE_STRIP, 0, 4), t.Stat.renderBatches++
		}
		renderInvertUV() {
			var e = t.LayaGL.instance;
			this._bufferStateInvertUV.bind(), e.drawArrays(e.TRIANGLE_STRIP, 0, 4), t.Stat.renderBatches++
		}
		destroy() {
			super.destroy(), this._bufferState.destroy(), this._vertexBuffer.destroy(), this
				._bufferStateInvertUV.destroy(), this._vertexBufferInvertUV.destroy(), this._setGPUMemory(0)
		}
	}
	Ne.SCREENQUAD_POSITION_UV = 0, Ne._vertices = new Float32Array([1, 1, 1, 0, 1, -1, 1, 1, -1, 1, 0, 0, -1, -1, 0,
		1]), Ne._verticesInvertUV = new Float32Array([1, 1, 1, 1, 1, -1, 1, 0, -1, 1, 0, 1, -1, -1, 0, 0]);
	class Pe extends t.Resource {
		constructor() {
			super(), this._bufferState = new De, this._bufferStateInvertUV = new De;
			var e = t.LayaGL.instance;
			this._vertexBuffer = new he(48, e.STATIC_DRAW, !1), this._vertexBuffer.vertexDeclaration = Pe
				._vertexDeclaration, this._vertexBuffer.setData(Pe._vertices.buffer), this._bufferState.bind(),
				this._bufferState.applyVertexBuffer(this._vertexBuffer), this._bufferState.unBind(), this
				._vertexBufferInvertUV = new he(48, e.STATIC_DRAW, !1), this._vertexBufferInvertUV
				.vertexDeclaration = Pe._vertexDeclaration, this._vertexBufferInvertUV.setData(Pe
					._verticesInvertUV.buffer), this._bufferStateInvertUV.bind(), this._bufferStateInvertUV
				.applyVertexBuffer(this._vertexBufferInvertUV), this._bufferStateInvertUV.unBind(), this
				._setGPUMemory(this._vertexBuffer._byteLength + this._vertexBufferInvertUV._byteLength)
		}
		static __init__() {
			Pe._vertexDeclaration = new de(16, [new ue(0, ce.Vector4, Pe.SCREENTRIANGLE_POSITION_UV)]), Pe
				.instance = new Pe, Pe.instance.lock = !0
		}
		render() {
			var e = t.LayaGL.instance;
			this._bufferState.bind(), e.drawArrays(e.TRIANGLES, 0, 3), t.Stat.renderBatches++
		}
		renderInvertUV() {
			var e = t.LayaGL.instance;
			this._bufferStateInvertUV.bind(), e.drawArrays(e.TRIANGLES, 0, 3), t.Stat.renderBatches++
		}
		destroy() {
			super.destroy(), this._bufferState.destroy(), this._vertexBuffer.destroy(), this
				._bufferStateInvertUV.destroy(), this._vertexBufferInvertUV.destroy(), this._setGPUMemory(0)
		}
	}
	Pe.SCREENTRIANGLE_POSITION_UV = 0, Pe._vertices = new Float32Array([-1, -1, 0, 1, -1, 3, 0, -1, 3, -1, 2, 1]), Pe
		._verticesInvertUV = new Float32Array([-1, -1, 0, 0, -1, 3, 0, 2, 3, -1, 2, 0]);
	class we {
		constructor() {
			this._commandBuffer = null
		}
		static __init__() {
			we._screenShaderData = new B, we._screenShader = F.find("BlitScreen")
		}
		run() {}
		recover() {
			this._commandBuffer = null
		}
	}
	we.SCREENTEXTURE_NAME = "u_MainTex", we.MAINTEXTURE_TEXELSIZE_NAME = "u_MainTex_TexelSize", we.SCREENTEXTURE_ID = F
		.propertyNameToID(we.SCREENTEXTURE_NAME), we.MAINTEXTURE_TEXELSIZE_ID = F.propertyNameToID(we
			.MAINTEXTURE_TEXELSIZE_NAME);
	class Ve extends we {
		constructor() {
			super(...arguments), this._source = null, this._dest = null, this._shader = null, this._shaderData =
				null, this._subShader = 0, this._sourceTexelSize = new a, this._screenType = 0
		}
		static create(e, t, r = null, i = null, a = 0, n = Ve._SCREENTYPE_QUAD) {
			var s;
			return (s = Ve._pool.length > 0 ? Ve._pool.pop() : new Ve)._source = e, s._dest = t, s._shader = r, s
				._shaderData = i, s._subShader = a, s._screenType = n, s
		}
		run() {
			var e = this._shader || we._screenShader,
				r = this._shaderData || we._screenShaderData,
				i = this._dest;
			t.LayaGL.instance.viewport(0, 0, i ? i.width : P.clientWidth, i ? i.height : P.clientHeight), r
				.setTexture(we.SCREENTEXTURE_ID, this._source), this._sourceTexelSize.setValue(1 / this._source
					.width, 1 / this._source.height, this._source.width, this._source.height), r.setVector(we
					.MAINTEXTURE_TEXELSIZE_ID, this._sourceTexelSize), i && i._start();
			for (var a = e.getSubShaderAt(this._subShader)._passes, n = 0, s = a.length; n < s; n++) {
				var o = Ve._compileDefine;
				r._defineDatas.cloneTo(o);
				var l = a[n].withCompile(o);
				switch (l.bind(), l.uploadUniforms(l._materialUniformParamsMap, r, !0), l
					.uploadRenderStateBlendDepth(r), l.uploadRenderStateFrontFace(r, !1, null), this._screenType) {
					case Ve._SCREENTYPE_QUAD:
						i ? Ne.instance.renderInvertUV() : Ne.instance.render();
						break;
					case Ve._SCREENTYPE_TRIANGLE:
						i ? Pe.instance.renderInvertUV() : Pe.instance.render()
				}
			}
			i && i._end()
		}
		recover() {
			Ve._pool.push(this), this._dest = null, this._shader = null, this._shaderData = null, super.recover()
		}
	}
	Ve._SCREENTYPE_QUAD = 0, Ve._SCREENTYPE_TRIANGLE = 1, Ve._compileDefine = new V, Ve._pool = [];
	class be extends we {
		constructor() {
			super(...arguments), this._renderTexture = null
		}
		static create(e) {
			var t;
			return (t = be._pool.length > 0 ? be._pool.pop() : new be)._renderTexture = e, t
		}
		run() {
			this._renderTexture._start()
		}
		recover() {
			be._pool.push(this), this._renderTexture = null
		}
	}
	be._pool = [];
	class Fe extends we {
		constructor() {
			super(...arguments), this._shaderData = null, this._nameID = 0, this._texture = null
		}
		static create(e, t, r) {
			var i;
			return (i = Fe._pool.length > 0 ? Fe._pool.pop() : new Fe)._shaderData = e, i._nameID = t, i._texture =
				r, i
		}
		run() {
			this._shaderData.setTexture(this._nameID, this._texture)
		}
		recover() {
			Fe._pool.push(this), this._shaderData = null, this._nameID = 0, this._texture = null
		}
	}
	Fe._pool = [];
	class Be {
		constructor() {
			this._camera = null, this._commands = []
		}
		_apply() {
			for (var e = 0, t = this._commands.length; e < t; e++) this._commands[e].run()
		}
		setShaderDataTexture(e, t, r) {
			this._commands.push(Fe.create(e, t, r))
		}
		blitScreenQuad(e, t, r = null, i = null, a = 0) {
			this._commands.push(Ve.create(e, t, r, i, a, Ve._SCREENTYPE_QUAD))
		}
		blitScreenTriangle(e, t, r = null, i = null, a = 0) {
			this._commands.push(Ve.create(e, t, r, i, a, Ve._SCREENTYPE_TRIANGLE))
		}
		setRenderTarget(e) {
			this._commands.push(be.create(e))
		}
		clear() {
			for (var e = 0, t = this._commands.length; e < t; e++) this._commands[e].recover();
			this._commands.length = 0
		}
	}
	class Ue extends Oe {
		constructor(e = 0, r = .3, n = 1e3) {
			super(r, n), this._updateViewMatrix = !0, this._postProcess = null, this._enableHDR = !1, this
				._viewportParams = new a, this._projectionParams = new a, this._offScreenRenderTexture = null, this
				._renderTexture = null, this._postProcessCommandBuffers = [], this._clusterPlaneCacheFlag = new i(-
					1, -1), this.enableRender = !0, this._viewMatrix = new p, this._projectionMatrix = new p, this
				._projectionViewMatrix = new p, this._viewport = new Ie(0, 0, 0, 0), this._normalizedViewport =
				new Ie(0, 0, 1, 1), this._aspectRatio = e, this._boundFrustum = new Re(p.DEFAULT), t.Render
				.supportWebGLPlusCulling && (this._boundFrustumBuffer = new Float32Array(24)), this
				._calculateProjectionMatrix(), t.Laya.stage.on(t.Event.RESIZE, this, this._onScreenSizeChanged),
				this.transform.on(t.Event.TRANSFORM_CHANGED, this, this._onTransformChanged)
		}
		get aspectRatio() {
			if (0 === this._aspectRatio) {
				var e = this.viewport;
				return e.width / e.height
			}
			return this._aspectRatio
		}
		set aspectRatio(e) {
			if (e < 0) throw new Error("Camera: the aspect ratio has to be a positive real number.");
			this._aspectRatio = e, this._calculateProjectionMatrix()
		}
		get viewport() {
			return this._offScreenRenderTexture ? this._calculationViewport(this._normalizedViewport, this
					._offScreenRenderTexture.width, this._offScreenRenderTexture.height) : this
				._calculationViewport(this._normalizedViewport, P.clientWidth, P.clientHeight), this._viewport
		}
		set viewport(e) {
			var t, r;
			this._offScreenRenderTexture ? (t = this._offScreenRenderTexture.width, r = this._offScreenRenderTexture
					.height) : (t = P.clientWidth, r = P.clientHeight), this._normalizedViewport.x = e.x / t, this
				._normalizedViewport.y = e.y / r, this._normalizedViewport.width = e.width / t, this
				._normalizedViewport.height = e.height / r, this._calculationViewport(this._normalizedViewport, t,
					r), this._calculateProjectionMatrix()
		}
		get normalizedViewport() {
			return this._normalizedViewport
		}
		set normalizedViewport(e) {
			var t, r;
			this._offScreenRenderTexture ? (t = this._offScreenRenderTexture.width, r = this._offScreenRenderTexture
				.height) : (t = P.clientWidth, r = P.clientHeight), this._normalizedViewport !== e && e.cloneTo(
				this._normalizedViewport), this._calculationViewport(e, t, r), this._calculateProjectionMatrix()
		}
		get viewMatrix() {
			if (this._updateViewMatrix) {
				var e = this.transform.getWorldLossyScale(),
					t = e.x,
					r = e.y,
					i = e.z,
					a = this._viewMatrix.elements;
				this.transform.worldMatrix.cloneTo(this._viewMatrix), a[0] /= t, a[1] /= t, a[2] /= t, a[4] /= r, a[
					5] /= r, a[6] /= r, a[8] /= i, a[9] /= i, a[10] /= i, this._viewMatrix.invert(this
					._viewMatrix), this._updateViewMatrix = !1
			}
			return this._viewMatrix
		}
		get projectionMatrix() {
			return this._projectionMatrix
		}
		set projectionMatrix(e) {
			this._projectionMatrix = e, this._useUserProjectionMatrix = !0
		}
		get projectionViewMatrix() {
			return p.multiply(this.projectionMatrix, this.viewMatrix, this._projectionViewMatrix), this
				._projectionViewMatrix
		}
		get boundFrustum() {
			if (this._boundFrustum.matrix = this.projectionViewMatrix, t.Render.supportWebGLPlusCulling) {
				var e = this._boundFrustum.near,
					r = this._boundFrustum.far,
					i = this._boundFrustum.left,
					a = this._boundFrustum.right,
					n = this._boundFrustum.top,
					s = this._boundFrustum.bottom,
					o = e.normal,
					l = r.normal,
					_ = i.normal,
					h = a.normal,
					c = n.normal,
					d = s.normal,
					u = this._boundFrustumBuffer;
				u[0] = o.x, u[1] = o.y, u[2] = o.z, u[3] = e.distance, u[4] = l.x, u[5] = l.y, u[6] = l.z, u[7] = r
					.distance, u[8] = _.x, u[9] = _.y, u[10] = _.z, u[11] = i.distance, u[12] = h.x, u[13] = h.y, u[
						14] = h.z, u[15] = a.distance, u[16] = c.x, u[17] = c.y, u[18] = c.z, u[19] = n.distance, u[
						20] = d.x, u[21] = d.y, u[22] = d.z, u[23] = s.distance
			}
			return this._boundFrustum
		}
		get renderTarget() {
			return this._offScreenRenderTexture
		}
		set renderTarget(e) {
			this._offScreenRenderTexture !== e && (this._offScreenRenderTexture = e, this
				._calculateProjectionMatrix())
		}
		get postProcess() {
			return this._postProcess
		}
		set postProcess(e) {
			this._postProcess = e;
			var t = new Be;
			this.addCommandBuffer(Ue.CAMERAEVENT_POSTPROCESS, t), e._init(this, t)
		}
		get enableHDR() {
			return this._enableHDR
		}
		set enableHDR(e) {
			e ? Ae.supportRenderTextureFormat(t.RenderTextureFormat.R16G16B16A16) ? this._enableHDR = !0 : console
				.warn("Camera:can't enable HDR in this device.") : this._enableHDR = !1
		}
		_calculationViewport(e, t, r) {
			var i = e.x * t,
				a = e.y * r,
				n = i + Math.max(e.width * t, 0),
				s = a + Math.max(e.height * r, 0),
				o = Math.ceil(i),
				l = Math.ceil(a),
				_ = Math.floor(n),
				h = Math.floor(s),
				c = o - i >= .5 ? Math.floor(i) : o,
				d = l - a >= .5 ? Math.floor(a) : l,
				u = n - _ >= .5 ? Math.ceil(n) : _,
				f = s - h >= .5 ? Math.ceil(s) : h;
			this._viewport.x = c, this._viewport.y = d, this._viewport.width = u - c, this._viewport.height = f - d
		}
		_calculateProjectionMatrix() {
			if (!this._useUserProjectionMatrix)
				if (this._orthographic) {
					var e = .5 * this.orthographicVerticalSize,
						t = e * this.aspectRatio;
					p.createOrthoOffCenter(-t, t, -e, e, this.nearPlane, this.farPlane, this._projectionMatrix)
				} else p.createPerspective(3.1416 * this.fieldOfView / 180, this.aspectRatio, this.nearPlane, this
					.farPlane, this._projectionMatrix)
		}
		_isLayerVisible(e) {
			return 0 != (Math.pow(2, e) & this.cullingMask)
		}
		_onTransformChanged(e) {
			(e &= ie.TRANSFORM_WORLDMATRIX) && (this._updateViewMatrix = !0)
		}
		_parse(e, t) {
			super._parse(e, t);
			var r = e.viewport;
			this.normalizedViewport = new Ie(r[0], r[1], r[2], r[3]);
			var i = e.enableHDR;
			void 0 !== i && (this.enableHDR = i)
		}
		_getCanvasHeight() {
			return this._offScreenRenderTexture ? this._offScreenRenderTexture.height : P.clientHeight
		}
		_getInternalRenderTexture() {
			return this._renderTexture || this._offScreenRenderTexture
		}
		_applyPostProcessCommandBuffers() {
			for (var e = 0, t = this._postProcessCommandBuffers.length; e < t; e++) this._postProcessCommandBuffers[
				e]._apply()
		}
		_getRenderTextureFormat() {
			return this._enableHDR ? t.RenderTextureFormat.R16G16B16A16 : t.RenderTextureFormat.R8G8B8
		}
		_prepareCameraToRender() {
			super._prepareCameraToRender();
			var e = this.viewport;
			this._viewportParams.setValue(e.x, e.y, e.width, e.height), this._projectionParams.setValue(this
					._nearPlane, this._farPlane, this._getInternalRenderTexture() ? -1 : 1, 0), this._shaderValues
				.setVector(Oe.VIEWPORT, this._viewportParams), this._shaderValues.setVector(Oe.PROJECTION_PARAMS,
					this._projectionParams)
		}
		_applyViewProject(e, t, r, i) {
			var a, n = this._shaderValues;
			i ? (p.multiply(Oe._invertYScaleMatrix, r, Oe._invertYProjectionMatrix), p.multiply(Oe
						._invertYProjectionMatrix, t, Oe._invertYProjectionViewMatrix), r = Oe
					._invertYProjectionMatrix, a = Oe._invertYProjectionViewMatrix) : (p.multiply(r, t, this
					._projectionViewMatrix), a = this._projectionViewMatrix), e.viewMatrix = t, e.projectionMatrix =
				r, e.projectionViewMatrix = a, n.setMatrix4x4(Oe.VIEWMATRIX, t), n.setMatrix4x4(Oe.PROJECTMATRIX,
				r), n.setMatrix4x4(Oe.VIEWPROJECTMATRIX, a)
		}
		_updateClusterPlaneXY() {
			var e = this.fieldOfView,
				t = this.aspectRatio;
			if (this._clusterPlaneCacheFlag.x !== e || this._clusterPlaneCacheFlag.y !== t) {
				var r = s._config.lightClusterCount,
					i = r.x,
					a = r.y,
					o = i + 1,
					l = a + 1,
					_ = this._clusterXPlanes,
					h = this._clusterYPlanes;
				if (!_) {
					_ = this._clusterXPlanes = new Array(o), h = this._clusterYPlanes = new Array(l);
					for (var c = 0; c < o; c++) _[c] = new n;
					for (c = 0; c < l; c++) h[c] = new n
				}
				var d = Math.tan(this.fieldOfView / 2 * Math.PI / 180),
					u = this.aspectRatio * d,
					f = 2 * d / i,
					m = 2 * u / a;
				for (c = 0; c < o; c++) {
					var E = m * c - u,
						T = 1 / Math.sqrt(1 + E * E);
					_[c].setValue(T, 0, -E * T)
				}
				for (c = 0; c < l; c++) {
					E = d - f * c;
					var p = -1 / Math.sqrt(1 + E * E);
					h[c].setValue(0, p, -E * p)
				}
				this._clusterPlaneCacheFlag.x = e, this._clusterPlaneCacheFlag.y = t
			}
		}
		render(e = null, r = null) {
			if (this._scene) {
				var i = !(!this._postProcess && !this._enableHDR);
				i && (this._renderTexture = w.createFromPool(P.clientWidth, P.clientHeight, this
					._getRenderTextureFormat(), t.RenderTextureDepthFormat.DEPTH_16, t.BaseTexture
					.FILTERMODE_BILINEAR));
				var a = t.LayaGL.instance,
					n = P._instance,
					o = n.scene = this._scene;
				if (o.parallelSplitShadowMaps[0]) {
					B.setRuntimeValueMode(!1);
					var l = o.parallelSplitShadowMaps[0];
					l._calcAllLightCameraInfo(this), o._shaderValues.addDefine(k.SHADERDEFINE_CAST_SHADOW);
					for (var _ = 0, h = l.shadowMapCount; _ < h; _++) {
						var c = l.cameras[_];
						n.camera = c, oe.renderObjectCulling(c, o, n, o._castShadowRenders, e, r);
						var d = l.cameras[_ + 1].renderTarget;
						d._start(), n.camera = c, Ue._updateMark++, n.viewport = c.viewport, c
							._prepareCameraToRender(), c._applyViewProject(n, c.viewMatrix, c.projectionMatrix, !1),
							o._clear(a, n), o._opaqueQueue._render(n, !1), d._end()
					}
					o._shaderValues.removeDefine(k.SHADERDEFINE_CAST_SHADOW), B.setRuntimeValueMode(!0)
				}
				n.camera = this, Ue._updateMark++, o._preRenderScript();
				var u = this._getInternalRenderTexture();
				if (u && u._start(), n.viewport = this.viewport, this._prepareCameraToRender(), s._config
					._multiLighting && Te.instance.update(this, this._scene), this._applyViewProject(n, this
						.viewMatrix, this._projectionMatrix, !!u), o._preCulling(n, this, e, r), o._clear(a, n), o
					._renderScene(n), o._postRenderScript(), u && u._end(), i) {
					if (this._postProcess) this._postProcess._render(), this._applyPostProcessCommandBuffers();
					else if (this._enableHDR) {
						var f = Ve.create(this._renderTexture, this._offScreenRenderTexture ? this
							._offScreenRenderTexture : null);
						f.run(), f.recover()
					}
					w.recoverToPool(this._renderTexture)
				}
			}
		}
		viewportPointToRay(e, t) {
			xe.calculateCursorRay(e, this.viewport, this._projectionMatrix, this.viewMatrix, null, t)
		}
		normalizedViewportPointToRay(e, t) {
			var r = Ue._tempVector20,
				i = this.viewport;
			r.x = e.x * i.width, r.y = e.y * i.height, xe.calculateCursorRay(r, this.viewport, this
				._projectionMatrix, this.viewMatrix, null, t)
		}
		worldToViewportPoint(e, r) {
			p.multiply(this._projectionMatrix, this._viewMatrix, this._projectionViewMatrix), this.viewport.project(
					e, this._projectionViewMatrix, r), r.x = r.x / t.Laya.stage.clientScaleX, r.y = r.y / t.Laya
				.stage.clientScaleY
		}
		worldToNormalizedViewportPoint(e, r) {
			p.multiply(this._projectionMatrix, this._viewMatrix, this._projectionViewMatrix), this
				.normalizedViewport.project(e, this._projectionViewMatrix, r), r.x = r.x / t.Laya.stage
				.clientScaleX, r.y = r.y / t.Laya.stage.clientScaleY
		}
		convertScreenCoordToOrthographicCoord(e, r) {
			if (this._orthographic) {
				var i = P.clientWidth,
					a = P.clientHeight,
					s = this.orthographicVerticalSize * this.aspectRatio / i,
					o = this.orthographicVerticalSize / a;
				return r.x = (-i / 2 + e.x * t.Laya.stage.clientScaleX) * s, r.y = (a / 2 - e.y * t.Laya.stage
						.clientScaleY) * o, r.z = (this.nearPlane - this.farPlane) * (e.z + 1) / 2 - this.nearPlane,
					n.transformCoordinate(r, this.transform.worldMatrix, r), !0
			}
			return !1
		}
		destroy(e = !0) {
			this._offScreenRenderTexture = null, this.transform.off(t.Event.TRANSFORM_CHANGED, this, this
				._onTransformChanged), super.destroy(e)
		}
		addCommandBuffer(e, t) {
			switch (e) {
				case Ue.CAMERAEVENT_POSTPROCESS:
					this._postProcessCommandBuffers.push(t), t._camera = this;
					break;
				default:
					throw "Camera:unknown event."
			}
		}
		removeCommandBuffer(e, t) {
			switch (e) {
				case Ue.CAMERAEVENT_POSTPROCESS:
					var r = this._postProcessCommandBuffers.indexOf(t); - 1 !== r && this._postProcessCommandBuffers
						.splice(r, 1);
					break;
				default:
					throw "Camera:unknown event."
			}
		}
		removeCommandBuffers(e) {
			switch (e) {
				case Ue.CAMERAEVENT_POSTPROCESS:
					this._postProcessCommandBuffers.length = 0;
					break;
				default:
					throw "Camera:unknown event."
			}
		}
		_create() {
			return new Ue
		}
	}
	Ue.CAMERAEVENT_POSTPROCESS = 0, Ue._tempVector20 = new i, Ue._updateMark = 0;
	class Ge {
		constructor() {
			this.renderSubShader = null, this.renderType = Ge.RENDERTYPE_NORMAL
		}
		getInvertFront() {
			return this._transform._isFrontFaceInvert
		}
		setTransform(e) {
			this._transform = e
		}
		setGeometry(e) {
			this._geometry = e
		}
		addToOpaqueRenderQueue(e, t) {
			t.elements.add(this)
		}
		addToTransparentRenderQueue(e, t) {
			t.elements.add(this), t.lastTransparentBatched = !1, t.lastTransparentRenderElement = this
		}
		_update(e, t, r, i) {
			if (this.material) {
				var a = this.material._shader.getSubShaderAt(0);
				if (this.renderSubShader = null, r)
					if (i) {
						var n = a.getFlag(i);
						if (!n) return;
						for (var s = r._subShaders, o = 0, l = s.length; o < l; o++) {
							var _ = s[o];
							if (n === _.getFlag(i)) {
								this.renderSubShader = _;
								break
							}
						}
						if (!this.renderSubShader) return
					} else this.renderSubShader = r.getSubShaderAt(0);
				else this.renderSubShader = a;
				var h = e._getRenderQueue(this.material.renderQueue);
				h.isTransparent ? this.addToTransparentRenderQueue(t, h) : this.addToOpaqueRenderQueue(t, h)
			}
		}
		_render(e, t) {
			var r, i, a, n = Ue._updateMark,
				s = e.scene,
				o = e.camera,
				l = this._transform,
				_ = this._geometry;
			e.renderElement = this;
			var h = n !== this.render._updateMark || this.renderType !== this.render._updateRenderType;
			if (h ? (this.render._renderUpdate(e, l), this.render._renderUpdateWithCamera(e, l), this.render
					._updateMark = n, this.render._updateRenderType = this.renderType) : this.renderType == Ge
				.RENDERTYPE_INSTANCEBATCH && (this.render._renderUpdate(e, l), this.render._renderUpdateWithCamera(
					e, l)), _._prepareRender(e))
				for (var c = this.renderSubShader._passes, d = 0, u = c.length; d < u; d++) {
					var f = Ge._compileDefine;
					s._shaderValues._defineDatas.cloneTo(f), f.removeDefineDatas(this.material
							._disablePublicDefineDatas), f.addDefineDatas(this.render._shaderValues._defineDatas), f
						.addDefineDatas(this.material._shaderValues._defineDatas);
					var m = e.shader = c[d].withCompile(f),
						E = m.bind(),
						T = n !== m._uploadMark,
						p = m._uploadScene !== s || T;
					(p || E) && (m.uploadUniforms(m._sceneUniformParamsMap, s._shaderValues, p), m._uploadScene =
					s);
					var g = m._uploadRender !== this.render || m._uploadRenderType !== this.renderType || T;
					(g || E) && (m.uploadUniforms(m._spriteUniformParamsMap, this.render._shaderValues, g), m
						._uploadRender = this.render, m._uploadRenderType = this.renderType);
					var S = m._uploadCamera !== o || T;
					(S || E) && (m.uploadUniforms(m._cameraUniformParamsMap, o._shaderValues, S), m._uploadCamera =
						o);
					var v = m._uploadMaterial !== this.material || T;
					(v || E) && (m.uploadUniforms(m._materialUniformParamsMap, this.material._shaderValues, v), m
						._uploadMaterial = this.material);
					var R = this.material._shaderValues;
					r !== this.material || i !== m ? (m.uploadRenderStateBlendDepth(R), m
						.uploadRenderStateFrontFace(R, t, this.getInvertFront()), r = this.material, i = m, a =
						this.render) : a !== this.render && (m.uploadRenderStateFrontFace(R, t, this
						.getInvertFront()), a = this.render), _._render(e), m._uploadMark = n
				}
			h && this.renderType !== Ge.RENDERTYPE_NORMAL && this.render._revertBatchRenderUpdate(e)
		}
		destroy() {
			this._transform = null, this._geometry = null, this.material = null, this.render = null
		}
	}
	Ge.RENDERTYPE_NORMAL = 0, Ge.RENDERTYPE_STATICBATCH = 1, Ge.RENDERTYPE_INSTANCEBATCH = 2, Ge
		.RENDERTYPE_VERTEXBATCH = 3, Ge._compileDefine = new V;
	class ze extends Ge {
		constructor() {
			super(), this._dynamicWorldPositionNormalNeedUpdate = !0
		}
		_onWorldMatrixChanged() {
			this._dynamicWorldPositionNormalNeedUpdate = !0
		}
		_computeWorldPositionsAndNormals(e, t, r, i) {
			if (this._dynamicWorldPositionNormalNeedUpdate) {
				for (var a = this._geometry, n = a._vertexBuffer, s = n.vertexDeclaration.vertexStride / 4, o = n
						.getFloat32Data(), l = this._transform.worldMatrix, _ = this._transform.rotation, h = a
						._indices, c = 0; c < i; c++) {
					var d = (r ? h[c] : c) * s,
						u = 3 * c;
					A.transformVector3ArrayToVector3ArrayCoordinate(o, d + e, l, this._dynamicWorldPositions, u), -
						1 !== t && A.transformVector3ArrayByQuat(o, d + t, _, this._dynamicWorldNormals, u)
				}
				this._dynamicWorldPositionNormalNeedUpdate = !1
			}
		}
		setTransform(e) {
			this._transform !== e && (this._transform && this._transform.off(t.Event.TRANSFORM_CHANGED, this, this
					._onWorldMatrixChanged), e && e.on(t.Event.TRANSFORM_CHANGED, this, this
					._onWorldMatrixChanged), this._dynamicWorldPositionNormalNeedUpdate = !0, this._transform =
				e)
		}
		setGeometry(e) {
			if (this._geometry !== e) {
				var t = e,
					r = t._mesh;
				if (r) {
					var i = r._subMeshes.length > 1,
						a = i ? t._indexCount : r._vertexCount;
					if (a <= o.SubMeshDynamicBatch.maxAllowVertexCount) {
						var n = 3 * a;
						this._dynamicVertexBatch = !0, this._dynamicWorldPositions = new Float32Array(n), this
							._dynamicWorldNormals = new Float32Array(n), this._dynamicVertexCount = a, this
							._dynamicMultiSubMesh = i
					} else this._dynamicVertexBatch = !1
				}
				this._geometry = e
			}
		}
		addToOpaqueRenderQueue(e, r) {
			var i = this.staticBatch,
				a = r.elements,
				n = a.elements;
			if (i) {
				var s = o.MeshRenderStaticBatchManager.instance,
					l = s.getBatchOpaquaMark(this.render.lightmapIndex + 1, this.render.receiveShadow, this.material
						.id, i._batchID);
				if (s._updateCountMark === l.updateMark) {
					var _ = l.indexInList;
					if (l.batched) n[_].staticBatchElementList.add(this);
					else {
						var h = n[_],
							c = h.render,
							d = s._getBatchRenderElementFromPool();
						d.renderType = Ge.RENDERTYPE_STATICBATCH, d.setGeometry(i), d.material = h.material;
						var u = i.batchOwner,
							f = u ? u._transform : null;
						d.setTransform(f), d.render = c, d.renderSubShader = h.renderSubShader;
						var m = d.staticBatchElementList;
						m.length = 0, m.add(h), m.add(this), n[_] = d, l.batched = !0
					}
				} else l.updateMark = s._updateCountMark, l.indexInList = a.length, l.batched = !1, a.add(this)
			} else if (this.renderSubShader._owner._enableInstancing && t.LayaGL.layaGPUInstance
			.supportInstance() && this.render.lightmapIndex < 0) {
				var E = this._geometry,
					T = o.MeshRenderDynamicBatchManager.instance,
					p = T.getInstanceBatchOpaquaMark(this.render.receiveShadow, this.material.id, E._id, this
						._transform._isFrontFaceInvert);
				if (T._updateCountMark === p.updateMark) {
					var g = p.indexInList;
					if (p.batched) {
						var S = n[g].instanceBatchElementList;
						S.length === me.instance.maxInstanceCount ? (p.updateMark = T._updateCountMark, p
							.indexInList = a.length, p.batched = !1, a.add(this)) : S.add(this)
					} else {
						var v = n[g],
							R = v.render,
							I = T._getBatchRenderElementFromPool();
						I.renderType = Ge.RENDERTYPE_INSTANCEBATCH, I.setGeometry(me.instance), I.material = v
							.material, I.setTransform(null), I.render = R, I.instanceSubMesh = E, I
							.renderSubShader = v.renderSubShader;
						var x = I.instanceBatchElementList;
						x.length = 0, x.add(v), x.add(this), n[g] = I, p.batched = !0
					}
				} else p.updateMark = T._updateCountMark, p.indexInList = a.length, p.batched = !1, a.add(this)
			} else if (this._dynamicVertexBatch) {
				var A = this._geometry._vertexBuffer.vertexDeclaration,
					D = o.MeshRenderDynamicBatchManager.instance,
					M = D.getVertexBatchOpaquaMark(this.render.lightmapIndex + 1, this.render.receiveShadow, this
						.material.id, A.id);
				if (D._updateCountMark === M.updateMark) {
					var L = M.indexInList;
					if (M.batched) n[L].vertexBatchElementList.add(this);
					else {
						var C = n[L],
							y = C.render,
							O = D._getBatchRenderElementFromPool();
						O.renderType = Ge.RENDERTYPE_VERTEXBATCH, O.setGeometry(o.SubMeshDynamicBatch.instance), O
							.material = C.material, O.setTransform(null), O.render = y, O
							.vertexBatchVertexDeclaration = A, O.renderSubShader = C.renderSubShader;
						var N = O.vertexBatchElementList;
						N.length = 0, N.add(C), N.add(this), n[L] = O, M.batched = !0
					}
				} else M.updateMark = D._updateCountMark, M.indexInList = a.length, M.batched = !1, a.add(this)
			} else a.add(this)
		}
		addToTransparentRenderQueue(e, r) {
			var i = this.staticBatch,
				a = r.elements,
				n = a.elements;
			if (i) {
				var s = o.MeshRenderStaticBatchManager.instance,
					l = r.lastTransparentRenderElement;
				if (l) {
					var _ = l.render;
					if (l._geometry._getType() !== this._geometry._getType() || l.staticBatch !== i || l
						.material !== this.material || _.receiveShadow !== this.render.receiveShadow || _
						.lightmapIndex !== this.render.lightmapIndex) a.add(this), r.lastTransparentBatched = !1;
					else {
						if (r.lastTransparentBatched) n[a.length - 1].staticBatchElementList.add(this);
						else {
							var h = s._getBatchRenderElementFromPool();
							h.renderType = Ge.RENDERTYPE_STATICBATCH, h.setGeometry(i), h.material = l.material;
							var c = i.batchOwner,
								d = c ? c._transform : null;
							h.setTransform(d), h.render = this.render, h.renderSubShader = l.renderSubShader;
							var u = h.staticBatchElementList;
							u.length = 0, u.add(l), u.add(this), n[a.length - 1] = h
						}
						r.lastTransparentBatched = !0
					}
				} else a.add(this), r.lastTransparentBatched = !1
			} else if (this.renderSubShader._owner._enableInstancing && t.LayaGL.layaGPUInstance
			.supportInstance() && this.render.lightmapIndex < 0) {
				var f = this._geometry,
					m = o.MeshRenderDynamicBatchManager.instance,
					E = r.lastTransparentRenderElement;
				if (E) {
					var T = E.render;
					if (E._geometry._getType() !== this._geometry._getType() || E._geometry !== f || E.material !==
						this.material || T.receiveShadow !== this.render.receiveShadow) a.add(this), r
						.lastTransparentBatched = !1;
					else if (r.lastTransparentBatched) {
						var p = n[a.length - 1].instanceBatchElementList;
						p.length === me.instance.maxInstanceCount ? (a.add(this), r.lastTransparentBatched = !1) : (
							p.add(this), r.lastTransparentBatched = !0)
					} else {
						var g = m._getBatchRenderElementFromPool();
						g.renderType = Ge.RENDERTYPE_INSTANCEBATCH, g.setGeometry(me.instance), g.material = E
							.material, g.setTransform(null), g.render = this.render, g.instanceSubMesh = f, g
							.renderSubShader = E.renderSubShader;
						var S = g.instanceBatchElementList;
						S.length = 0, S.add(E), S.add(this), n[a.length - 1] = g, r.lastTransparentBatched = !0
					}
				} else a.add(this), r.lastTransparentBatched = !1
			} else if (this._dynamicVertexBatch) {
				var v = this._geometry._vertexBuffer.vertexDeclaration,
					R = o.MeshRenderDynamicBatchManager.instance,
					I = r.lastTransparentRenderElement;
				if (I) {
					var x = I.render;
					if (I._geometry._getType() !== this._geometry._getType() || I._geometry._vertexBuffer
						._vertexDeclaration !== v || I.material !== this.material || x.receiveShadow !== this.render
						.receiveShadow || x.lightmapIndex !== this.render.lightmapIndex) a.add(this), r
						.lastTransparentBatched = !1;
					else {
						if (r.lastTransparentBatched) n[a.length - 1].vertexBatchElementList.add(this);
						else {
							var A = R._getBatchRenderElementFromPool();
							A.renderType = Ge.RENDERTYPE_VERTEXBATCH, A.setGeometry(o.SubMeshDynamicBatch.instance),
								A.material = I.material, A.setTransform(null), A.render = this.render, A
								.vertexBatchVertexDeclaration = v, A.renderSubShader = I.renderSubShader;
							var D = A.vertexBatchElementList;
							D.length = 0, D.add(I), D.add(this), n[a.length - 1] = A
						}
						r.lastTransparentBatched = !0
					}
				} else a.add(this), r.lastTransparentBatched = !1
			} else a.add(this);
			r.lastTransparentRenderElement = this
		}
		getInvertFront() {
			switch (this.renderType) {
				case Ge.RENDERTYPE_NORMAL:
					return this._transform._isFrontFaceInvert;
				case Ge.RENDERTYPE_STATICBATCH:
				case Ge.RENDERTYPE_VERTEXBATCH:
					return !1;
				case Ge.RENDERTYPE_INSTANCEBATCH:
					return this.instanceBatchElementList.elements[0]._transform._isFrontFaceInvert;
				default:
					throw "SubMeshRenderElement: unknown renderType"
			}
		}
		destroy() {
			super.destroy(), this._dynamicWorldPositions = null, this._dynamicWorldNormals = null, this
				.staticBatch = null, this.staticBatchElementList = null, this.vertexBatchElementList = null, this
				.vertexBatchVertexDeclaration = null
		}
	}
	class He extends _e {
		constructor(e, t) {
			super(), this._bufferState = new De, this._batchID = He._batchIDCounter++, this._batchElements = [],
				this._currentBatchVertexCount = 0, this._currentBatchIndexCount = 0, this._vertexDeclaration = t,
				this.batchOwner = e
		}
		_getStaticBatchBakedVertexs(e, t, r, i, a, n) {
			var s, o = n._vertexBuffer,
				l = o.vertexDeclaration,
				_ = l.getVertexElementByUsage(fe.MESH_POSITION0)._offset / 4,
				h = l.getVertexElementByUsage(fe.MESH_NORMAL0),
				c = h ? h._offset / 4 : -1,
				d = l.getVertexElementByUsage(fe.MESH_COLOR0),
				u = d ? d._offset / 4 : -1,
				f = l.getVertexElementByUsage(fe.MESH_TEXTURECOORDINATE0),
				m = f ? f._offset / 4 : -1,
				E = l.getVertexElementByUsage(fe.MESH_TEXTURECOORDINATE1),
				T = E ? E._offset / 4 : -1,
				g = l.getVertexElementByUsage(fe.MESH_TANGENT0),
				S = g ? g._offset / 4 : -1,
				v = l.vertexStride / 4,
				R = o.getFloat32Data();
			r ? (r.worldMatrix.invert(He._tempMatrix4x40), s = He._tempMatrix4x41, p.multiply(He._tempMatrix4x40, i
				.worldMatrix, s)) : s = i.worldMatrix;
			var I = He._tempQuaternion0;
			s.decomposeTransRotScale(He._tempVector30, I, He._tempVector31);
			for (var x = a.lightmapScaleOffset, D = n.vertexCount, M = 0; M < D; M++) {
				var L, C, y = M * v,
					O = 18 * (M + t);
				A.transformVector3ArrayToVector3ArrayCoordinate(R, y + _, s, e, O + 0), -1 !== c && A
					.transformVector3ArrayByQuat(R, y + c, I, e, O + 3);
				var N = O + 6;
				if (-1 !== u) {
					var P = y + u;
					for (L = 0, C = 4; L < C; L++) e[N + L] = R[P + L]
				} else
					for (L = 0, C = 4; L < C; L++) e[N + L] = 1;
				if (-1 !== m) {
					var w = y + m;
					e[O + 10] = R[w], e[O + 11] = R[w + 1]
				}
				if (x && (-1 !== T ? A.transformLightingMapTexcoordArray(R, y + T, x, e, O + 12) : A
						.transformLightingMapTexcoordArray(R, y + m, x, e, O + 12)), -1 !== S) {
					var V = y + S;
					e[O + 14] = R[V], e[O + 15] = R[V + 1], e[O + 16] = R[V + 2], e[O + 17] = R[V + 3]
				}
			}
			return D
		}
		addTest(e) {
			var t = e.meshFilter.sharedMesh.vertexCount;
			return !(this._currentBatchVertexCount + t > He.maxBatchVertexCount)
		}
		add(e) {
			var t = e.meshFilter.sharedMesh,
				r = t.vertexCount;
			this._batchElements.push(e);
			var i = e._render;
			i._isPartOfStaticBatch = !0, i._staticBatch = this;
			for (var a = i._renderElements, n = 0, s = a.length; n < s; n++) a[n].staticBatch = this;
			this._currentBatchIndexCount += t._indexBuffer.indexCount, this._currentBatchVertexCount += r
		}
		remove(e) {
			var t = e.meshFilter.sharedMesh,
				r = this._batchElements.indexOf(e);
			if (-1 !== r) {
				this._batchElements.splice(r, 1);
				for (var i = e._render._renderElements, a = 0, n = i.length; a < n; a++) i[a].staticBatch = null;
				this._currentBatchIndexCount = this._currentBatchIndexCount - t._indexBuffer.indexCount, this
					._currentBatchVertexCount = this._currentBatchVertexCount - t.vertexCount, e._render
					._isPartOfStaticBatch = !1
			}
		}
		finishInit() {
			this._vertexBuffer && (this._vertexBuffer.destroy(), this._indexBuffer.destroy(), t.Resource
				._addGPUMemory(-(this._vertexBuffer._byteLength + this._indexBuffer._byteLength)));
			var e = t.LayaGL.instance,
				r = 0,
				i = 0,
				a = this.batchOwner,
				n = this._vertexDeclaration.vertexStride / 4,
				s = new Float32Array(n * this._currentBatchVertexCount),
				o = new Uint16Array(this._currentBatchIndexCount);
			this._vertexBuffer = new he(this._vertexDeclaration.vertexStride * this._currentBatchVertexCount, e
					.STATIC_DRAW), this._vertexBuffer.vertexDeclaration = this._vertexDeclaration, this
				._indexBuffer = new Me(Me.INDEXTYPE_USHORT, this._currentBatchIndexCount, e.STATIC_DRAW);
			for (var l = 0, _ = this._batchElements.length; l < _; l++) {
				for (var h, c = this._batchElements[l], d = c.meshFilter.sharedMesh, u = this
						._getStaticBatchBakedVertexs(s, r, a ? a._transform : null, c._transform, c._render, d), f =
						d._indexBuffer.getData(), m = r, E = i + f.length, T = c._render._renderElements, p = 0, g =
						d.subMeshCount; p < g; p++) {
					var S = d._subMeshes[p],
						v = i + S._indexStart,
						R = T[p];
					R.staticBatchIndexStart = v, R.staticBatchIndexEnd = v + S._indexCount
				}
				if (o.set(f, i), a ? c._transform._isFrontFaceInvert !== a.transform._isFrontFaceInvert : c
					._transform._isFrontFaceInvert)
					for (h = i; h < E; h += 3) {
						o[h] = m + o[h];
						var I = o[h + 1],
							x = o[h + 2];
						o[h + 1] = m + x, o[h + 2] = m + I
					} else
						for (h = i; h < E; h += 3) o[h] = m + o[h], o[h + 1] = m + o[h + 1], o[h + 2] = m + o[h +
						2];
				i += f.length, r += u
			}
			this._vertexBuffer.setData(s.buffer), this._indexBuffer.setData(o);
			var A = this._vertexBuffer._byteLength + this._indexBuffer._byteLength;
			t.Resource._addGPUMemory(A), this._bufferState.bind(), this._bufferState.applyVertexBuffer(this
					._vertexBuffer), this._bufferState.applyIndexBuffer(this._indexBuffer), this._bufferState
				.unBind()
		}
		_render(e) {
			this._bufferState.bind();
			for (var r = t.LayaGL.instance, i = e.renderElement.staticBatchElementList, a = i.elements, n = 0, s =
					0, o = i.length, l = 1; l < o; l++) {
				if (a[l - 1].staticBatchIndexEnd !== a[l].staticBatchIndexStart) {
					var _ = a[n].staticBatchIndexStart,
						h = a[s].staticBatchIndexEnd - _;
					r.drawElements(r.TRIANGLES, h, r.UNSIGNED_SHORT, 2 * _), n = ++s, t.Stat.trianglesFaces += h / 3
				} else s++
			}
			_ = a[n].staticBatchIndexStart, h = a[s].staticBatchIndexEnd - _, r.drawElements(r.TRIANGLES, h, r
					.UNSIGNED_SHORT, 2 * _), t.Stat.renderBatches++, t.Stat.savedRenderBatches += o - 1, t.Stat
				.trianglesFaces += h / 3
		}
		dispose() {
			var e = this._vertexBuffer._byteLength + this._indexBuffer._byteLength;
			t.Resource._addGPUMemory(-e), this._batchElements = null, this.batchOwner = null, this
				._vertexDeclaration = null, this._bufferState.destroy(), this._vertexBuffer.destroy(), this
				._indexBuffer.destroy(), this._vertexBuffer = null, this._indexBuffer = null, this._bufferState =
				null
		}
	}
	He._tempVector30 = new n, He._tempVector31 = new n, He._tempQuaternion0 = new u, He._tempMatrix4x40 = new p, He
		._tempMatrix4x41 = new p, He.maxBatchVertexCount = 65535, He._batchIDCounter = 0;
	class We {
		constructor() {
			this.elements = [], this.length = 0
		}
		_add(e) {
			this.length === this.elements.length ? this.elements.push(e) : this.elements[this.length] = e
		}
		add(e) {
			this.length === this.elements.length ? this.elements.push(e) : this.elements[this.length] = e, this
				.length++
		}
	}
	class ke extends se {
		constructor() {
			super(), this._opaqueBatchMarks = [], this._updateCountMark = 0
		}
		static __init__() {
			ke._verDec = fe.getVertexDeclaration("POSITION,NORMAL,COLOR,UV,UV1,TANGENT")
		}
		_compare(e, t) {
			var r = e._render,
				i = t._render,
				a = e.meshFilter.sharedMesh,
				n = t.meshFilter.sharedMesh,
				s = r.lightmapIndex - i.lightmapIndex;
			if (0 === s) {
				var o = (r.receiveShadow ? 1 : 0) - (i.receiveShadow ? 1 : 0);
				if (0 === o) {
					var l = r.sharedMaterial && i.sharedMaterial ? r.sharedMaterial.id - i.sharedMaterial.id : 0;
					if (0 === l) {
						var _ = a._vertexBuffer.vertexDeclaration.id - n._vertexBuffer.vertexDeclaration.id;
						return 0 === _ ? n._indexBuffer.indexCount - a._indexBuffer.indexCount : _
					}
					return l
				}
				return o
			}
			return s
		}
		_getBatchRenderElementFromPool() {
			var e = this._batchRenderElementPool[this._batchRenderElementPoolIndex++];
			return e || (e = new ze, this._batchRenderElementPool[this._batchRenderElementPoolIndex - 1] = e, e
				.staticBatchElementList = new We), e
		}
		_getStaticBatch(e, t, r) {
			var i = e[r];
			return i || (i = e[r] = new He(t, ke._verDec), this._staticBatches[i._batchID] = i), i
		}
		_initStaticBatchs(e) {
			var t = this._initBatchSprites;
			this._quickSort(t, 0, t.length - 1);
			for (var r, i = [], a = !1, n = 0, s = 0, o = t.length; s < o; s++) {
				var l = t[s];
				if (a) r.addTest(l) ? r.add(l) : (a = !1, n++);
				else s !== o - 1 && ((r = this._getStaticBatch(i, e, n)).add(l), a = !0)
			}
			for (s = 0, o = i.length; s < o; s++) {
				var _ = i[s];
				_ && _.finishInit()
			}
			this._initBatchSprites.length = 0
		}
		_removeRenderSprite(e) {
			var t = e._render,
				r = t._staticBatch,
				i = r._batchElements,
				a = i.indexOf(e);
			if (-1 !== a) {
				i.splice(a, 1), t._staticBatch = null;
				for (var n = t._renderElements, s = 0, o = n.length; s < o; s++) n[s].staticBatch = null
			}
			0 === i.length && (delete this._staticBatches[r._batchID], r.dispose())
		}
		_clear() {
			super._clear(), this._updateCountMark++
		}
		_garbageCollection() {
			for (var e in this._staticBatches) {
				var t = this._staticBatches[e];
				0 === t._batchElements.length && (t.dispose(), delete this._staticBatches[e])
			}
		}
		getBatchOpaquaMark(e, t, r, i) {
			var a = t ? 1 : 0,
				n = this._opaqueBatchMarks[e] || (this._opaqueBatchMarks[e] = []),
				s = n[a] || (n[a] = []),
				o = s[r] || (s[r] = []);
			return o[i] || (o[i] = new le)
		}
	}
	ke.instance = new ke;
	class Xe {}
	class Ye {
		constructor(e, t) {
			this.min = e, this.max = t
		}
		_rotateExtents(e, t, r) {
			var i = e.x,
				a = e.y,
				n = e.z,
				s = t.elements;
			r.x = Math.abs(s[0] * i) + Math.abs(s[4] * a) + Math.abs(s[8] * n), r.y = Math.abs(s[1] * i) + Math.abs(
				s[5] * a) + Math.abs(s[9] * n), r.z = Math.abs(s[2] * i) + Math.abs(s[6] * a) + Math.abs(s[10] *
				n)
		}
		getCorners(e) {
			e.length = 8;
			var t = this.min.x,
				r = this.min.y,
				i = this.min.z,
				a = this.max.x,
				s = this.max.y,
				o = this.max.z;
			e[0] = new n(t, s, o), e[1] = new n(a, s, o), e[2] = new n(a, r, o), e[3] = new n(t, r, o), e[4] =
				new n(t, s, i), e[5] = new n(a, s, i), e[6] = new n(a, r, i), e[7] = new n(t, r, i)
		}
		getCenter(e) {
			n.add(this.min, this.max, e), n.scale(e, .5, e)
		}
		getExtent(e) {
			n.subtract(this.max, this.min, e), n.scale(e, .5, e)
		}
		setCenterAndExtent(e, t) {
			n.subtract(e, t, this.min), n.add(e, t, this.max)
		}
		tranform(e, t) {
			var r = Ye._tempVector30,
				i = Ye._tempVector31;
			this.getCenter(r), this.getExtent(i), n.transformCoordinate(r, e, r), this._rotateExtents(i, e, i), t
				.setCenterAndExtent(r, i)
		}
		toDefault() {
			this.min.toDefault(), this.max.toDefault()
		}
		static createfromPoints(e, t) {
			if (null == e) throw new Error("points");
			var r = t.min,
				i = t.max;
			r.x = Number.MAX_VALUE, r.y = Number.MAX_VALUE, r.z = Number.MAX_VALUE, i.x = -Number.MAX_VALUE, i.y = -
				Number.MAX_VALUE, i.z = -Number.MAX_VALUE;
			for (var a = 0, s = e.length; a < s; ++a) n.min(r, e[a], r), n.max(i, e[a], i)
		}
		static merge(e, t, r) {
			n.min(e.min, t.min, r.min), n.max(e.max, t.max, r.max)
		}
		cloneTo(e) {
			var t = e;
			this.min.cloneTo(t.min), this.max.cloneTo(t.max)
		}
		clone() {
			var e = new Ye(new n, new n);
			return this.cloneTo(e), e
		}
	}
	Ye._tempVector30 = new n, Ye._tempVector31 = new n;
	class Ze {
		constructor(e, t) {
			this._updateFlag = 0, this._center = new n, this._extent = new n, this._boundBox = new Ye(new n, new n),
				e.cloneTo(this._boundBox.min), t.cloneTo(this._boundBox.max), this._setUpdateFlag(Ze
					._UPDATE_CENTER | Ze._UPDATE_EXTENT, !0)
		}
		setMin(e) {
			var t = this._boundBox.min;
			e !== t && e.cloneTo(t), this._setUpdateFlag(Ze._UPDATE_CENTER | Ze._UPDATE_EXTENT, !0), this
				._setUpdateFlag(Ze._UPDATE_MIN, !1)
		}
		getMin() {
			var e = this._boundBox.min;
			return this._getUpdateFlag(Ze._UPDATE_MIN) && (this._getMin(this.getCenter(), this.getExtent(), e), this
				._setUpdateFlag(Ze._UPDATE_MIN, !1)), e
		}
		setMax(e) {
			var t = this._boundBox.max;
			e !== t && e.cloneTo(t), this._setUpdateFlag(Ze._UPDATE_CENTER | Ze._UPDATE_EXTENT, !0), this
				._setUpdateFlag(Ze._UPDATE_MAX, !1)
		}
		getMax() {
			var e = this._boundBox.max;
			return this._getUpdateFlag(Ze._UPDATE_MAX) && (this._getMax(this.getCenter(), this.getExtent(), e), this
				._setUpdateFlag(Ze._UPDATE_MAX, !1)), e
		}
		setCenter(e) {
			e !== this._center && e.cloneTo(this._center), this._setUpdateFlag(Ze._UPDATE_MIN | Ze._UPDATE_MAX, !0),
				this._setUpdateFlag(Ze._UPDATE_CENTER, !1)
		}
		getCenter() {
			return this._getUpdateFlag(Ze._UPDATE_CENTER) && (this._getCenter(this.getMin(), this.getMax(), this
				._center), this._setUpdateFlag(Ze._UPDATE_CENTER, !1)), this._center
		}
		setExtent(e) {
			e !== this._extent && e.cloneTo(this._extent), this._setUpdateFlag(Ze._UPDATE_MIN | Ze._UPDATE_MAX, !0),
				this._setUpdateFlag(Ze._UPDATE_EXTENT, !1)
		}
		getExtent() {
			return this._getUpdateFlag(Ze._UPDATE_EXTENT) && (this._getExtent(this.getMin(), this.getMax(), this
				._extent), this._setUpdateFlag(Ze._UPDATE_EXTENT, !1)), this._extent
		}
		_getUpdateFlag(e) {
			return 0 != (this._updateFlag & e)
		}
		_setUpdateFlag(e, t) {
			t ? this._updateFlag |= e : this._updateFlag &= ~e
		}
		_getCenter(e, t, r) {
			n.add(e, t, r), n.scale(r, .5, r)
		}
		_getExtent(e, t, r) {
			n.subtract(t, e, r), n.scale(r, .5, r)
		}
		_getMin(e, t, r) {
			n.subtract(e, t, r)
		}
		_getMax(e, t, r) {
			n.add(e, t, r)
		}
		_rotateExtents(e, t, r) {
			var i = e.x,
				a = e.y,
				n = e.z,
				s = t.elements;
			r.x = Math.abs(s[0] * i) + Math.abs(s[4] * a) + Math.abs(s[8] * n), r.y = Math.abs(s[1] * i) + Math.abs(
				s[5] * a) + Math.abs(s[9] * n), r.z = Math.abs(s[2] * i) + Math.abs(s[6] * a) + Math.abs(s[10] *
				n)
		}
		_tranform(e, t) {
			var r = t._center,
				i = t._extent;
			n.transformCoordinate(this.getCenter(), e, r), this._rotateExtents(this.getExtent(), e, i), t._boundBox
				.setCenterAndExtent(r, i), t._updateFlag = 0
		}
		_getBoundBox() {
			if (this._updateFlag & Ze._UPDATE_MIN) {
				var e = this._boundBox.min;
				this._getMin(this.getCenter(), this.getExtent(), e), this._setUpdateFlag(Ze._UPDATE_MIN, !1)
			}
			if (this._updateFlag & Ze._UPDATE_MAX) {
				var t = this._boundBox.max;
				this._getMax(this.getCenter(), this.getExtent(), t), this._setUpdateFlag(Ze._UPDATE_MAX, !1)
			}
			return this._boundBox
		}
		cloneTo(e) {
			var t = e;
			this.getMin().cloneTo(t._boundBox.min), this.getMax().cloneTo(t._boundBox.max), this.getCenter()
				.cloneTo(t._center), this.getExtent().cloneTo(t._extent), t._updateFlag = 0
		}
		clone() {
			var e = new Ze(new n, new n);
			return this.cloneTo(e), e
		}
	}
	Ze._UPDATE_MIN = 1, Ze._UPDATE_MAX = 2, Ze._UPDATE_CENTER = 4, Ze._UPDATE_EXTENT = 8;
	class je extends t.EventDispatcher {
		constructor(e) {
			if (super(), this._indexInList = -1, this._indexInCastShadowList = -1, this._boundsChange = !0, this
				._supportOctree = !0, this._sharedMaterials = [], this._visible = !0, this
				._indexInOctreeMotionList = -1, this._updateMark = -1, this._updateRenderType = -1, this
				._isPartOfStaticBatch = !1, this._staticBatch = null, this._id = ++je._uniqueIDCounter, this
				._indexInCastShadowList = -1, this._bounds = new Ze(n._ZERO, n._ZERO), t.Render
				.supportWebGLPlusCulling) {
				var r = oe._cullingBufferLength;
				this._cullingBufferIndex = r;
				var i = oe._cullingBuffer,
					a = r + 7;
				if (a >= i.length) {
					var s = i;
					(i = oe._cullingBuffer = new Float32Array(i.length + 4096)).set(s, 0)
				}
				i[r] = 2, oe._cullingBufferLength = a
			}
			this._renderElements = [], this._owner = e, this._enable = !0, this._materialsInstance = [], this
				._shaderValues = new B(null), this.lightmapIndex = -1, this._castShadow = !1, this
				.receiveShadow = !1, this.sortingFudge = 0, e && this._owner.transform.on(t.Event
					.TRANSFORM_CHANGED, this, this._onWorldMatNeedChange)
		}
		get id() {
			return this._id
		}
		get lightmapIndex() {
			return this._lightmapIndex
		}
		set lightmapIndex(e) {
			this._lightmapIndex !== e && (this._lightmapIndex = e, this._applyLightMapParams())
		}
		get lightmapScaleOffset() {
			return this._lightmapScaleOffset
		}
		set lightmapScaleOffset(e) {
			this._lightmapScaleOffset = e, this._shaderValues.setVector(ne.LIGHTMAPSCALEOFFSET, e), this
				._shaderValues.addDefine(ne.SHADERDEFINE_SCALEOFFSETLIGHTINGMAPUV)
		}
		get enable() {
			return this._enable
		}
		set enable(e) {
			this._enable = !!e
		}
		get material() {
			var e = this._sharedMaterials[0];
			if (e && !this._materialsInstance[0]) {
				var t = this._getInstanceMaterial(e, 0),
					r = this._renderElements[0];
				r && (r.material = t)
			}
			return this._sharedMaterials[0]
		}
		set material(e) {
			this.sharedMaterial = e
		}
		get materials() {
			for (var e = 0, t = this._sharedMaterials.length; e < t; e++)
				if (!this._materialsInstance[e]) {
					var r = this._getInstanceMaterial(this._sharedMaterials[e], e),
						i = this._renderElements[e];
					i && (i.material = r)
				} return this._sharedMaterials.slice()
		}
		set materials(e) {
			this.sharedMaterials = e
		}
		get sharedMaterial() {
			return this._sharedMaterials[0]
		}
		set sharedMaterial(e) {
			var t = this._sharedMaterials[0];
			if (t !== e) {
				this._sharedMaterials[0] = e, this._materialsInstance[0] = !1, this._changeMaterialReference(t,
					e);
				var r = this._renderElements[0];
				r && (r.material = e)
			}
		}
		get sharedMaterials() {
			return this._sharedMaterials.slice()
		}
		set sharedMaterials(e) {
			for (var t = this._materialsInstance, r = this._sharedMaterials, i = 0, a = r.length; i < a; i++) {
				var n = r[i];
				n && n._removeReference()
			}
			if (!e) throw new Error("BaseRender: shadredMaterials value can't be null.");
			var s = e.length;
			for (t.length = s, r.length = s, i = 0; i < s; i++) {
				n = r[i];
				var o = e[i];
				if (n !== o) {
					t[i] = !1;
					var l = this._renderElements[i];
					l && (l.material = o)
				}
				o && o._addReference(), r[i] = o
			}
		}
		get bounds() {
			return this._boundsChange && (this._calculateBoundingBox(), this._boundsChange = !1), this._bounds
		}
		set receiveShadow(e) {
			this._receiveShadow !== e && (this._receiveShadow = e, e ? this._shaderValues.addDefine(ne
				.SHADERDEFINE_RECEIVE_SHADOW) : this._shaderValues.removeDefine(ne
				.SHADERDEFINE_RECEIVE_SHADOW))
		}
		get receiveShadow() {
			return this._receiveShadow
		}
		get castShadow() {
			return this._castShadow
		}
		set castShadow(e) {
			this._castShadow !== e && (this._owner.activeInHierarchy && (e ? this._scene
					._addShadowCastRenderObject(this) : this._scene._removeShadowCastRenderObject(this)),
				this._castShadow = e)
		}
		get isPartOfStaticBatch() {
			return this._isPartOfStaticBatch
		}
		_getOctreeNode() {
			return this._octreeNode
		}
		_setOctreeNode(e) {
			this._octreeNode = e
		}
		_getIndexInMotionList() {
			return this._indexInOctreeMotionList
		}
		_setIndexInMotionList(e) {
			this._indexInOctreeMotionList = e
		}
		_changeMaterialReference(e, t) {
			e && e._removeReference(), t._addReference()
		}
		_getInstanceMaterial(e, t) {
			var r = e.clone();
			return r.name = r.name + "(Instance)", this._materialsInstance[t] = !0, this
				._changeMaterialReference(this._sharedMaterials[t], r), this._sharedMaterials[t] = r, r
		}
		_applyLightMapParams() {
			if (this._scene && this._lightmapIndex >= 0) {
				var e = this._scene.getlightmaps();
				this._lightmapIndex < e.length ? (this._shaderValues.addDefine(ne.SAHDERDEFINE_LIGHTMAP), this
						._shaderValues.setTexture(ne.LIGHTMAP, e[this._lightmapIndex])) : this._shaderValues
					.removeDefine(ne.SAHDERDEFINE_LIGHTMAP)
			} else this._shaderValues.removeDefine(ne.SAHDERDEFINE_LIGHTMAP)
		}
		_onWorldMatNeedChange(e) {
			this._boundsChange = !0, this._octreeNode && (e &= ie.TRANSFORM_WORLDPOSITION | ie
					.TRANSFORM_WORLDQUATERNION | ie.TRANSFORM_WORLDSCALE) && -1 === this
				._indexInOctreeMotionList && this._octreeNode._octree.addMotionObject(this)
		}
		_calculateBoundingBox() {
			throw "BaseRender: must override it."
		}
		_getIndexInList() {
			return this._indexInList
		}
		_setIndexInList(e) {
			this._indexInList = e
		}
		_setBelongScene(e) {
			this._scene !== e && (this._scene = e, this._applyLightMapParams())
		}
		_needRender(e, t) {
			return !0
		}
		_renderUpdate(e, t) {}
		_renderUpdateWithCamera(e, t) {}
		_revertBatchRenderUpdate(e) {}
		_destroy() {
			-1 !== this._indexInOctreeMotionList && this._octreeNode._octree.removeMotionObject(this), this
				.offAll();
			var e = 0,
				t = 0;
			for (e = 0, t = this._renderElements.length; e < t; e++) this._renderElements[e].destroy();
			for (e = 0, t = this._sharedMaterials.length; e < t; e++) this._sharedMaterials[e].destroyed || this
				._sharedMaterials[e]._removeReference();
			this._renderElements = null, this._owner = null, this._sharedMaterials = null, this._bounds = null,
				this._lightmapScaleOffset = null
		}
		markAsUnStatic() {
			this._isPartOfStaticBatch && (ke.instance._removeRenderSprite(this._owner), this
				._isPartOfStaticBatch = !1)
		}
	}
	je._tempBoundBoxCorners = [new n, new n, new n, new n, new n, new n, new n, new n], je._uniqueIDCounter = 0;
	class qe extends je {
		constructor(e) {
			super(e), this._revertStaticBatchDefineUV1 = !1, this._revertStaticBatchDefineLightMapUV = !1, this
				._projectionViewWorldMatrix = new p
		}
		_createRenderElement() {
			return new ze
		}
		_onMeshChange(e) {
			if (e) {
				var t = e.subMeshCount;
				this._renderElements.length = t;
				for (var r = 0; r < t; r++) {
					var i = this._renderElements[r];
					if (!i) {
						var a = this.sharedMaterials[r];
						(i = this._renderElements[r] = this._createRenderElement()).setTransform(this._owner
							._transform), i.render = this, i.material = a || Y.defaultMaterial
					}
					i.setGeometry(e.getSubMesh(r))
				}
			} else this._renderElements.length = 0;
			this._boundsChange = !0
		}
		_calculateBoundingBox() {
			var e = this._owner.meshFilter.sharedMesh;
			if (e) {
				var r = this._owner.transform.worldMatrix;
				e.bounds._tranform(r, this._bounds)
			}
			if (t.Render.supportWebGLPlusCulling) {
				var i = this._bounds.getMin(),
					a = this._bounds.getMax(),
					n = oe._cullingBuffer;
				n[this._cullingBufferIndex + 1] = i.x, n[this._cullingBufferIndex + 2] = i.y, n[this
					._cullingBufferIndex + 3] = i.z, n[this._cullingBufferIndex + 4] = a.x, n[this
					._cullingBufferIndex + 5] = a.y, n[this._cullingBufferIndex + 6] = a.z
			}
		}
		_needRender(e, t) {
			return !e || e.intersects(this.bounds._getBoundBox())
		}
		_renderUpdate(e, t) {
			var r = e.renderElement;
			switch (r.renderType) {
				case Ge.RENDERTYPE_NORMAL:
					this._shaderValues.setMatrix4x4(ae.WORLDMATRIX, t.worldMatrix);
					break;
				case Ge.RENDERTYPE_STATICBATCH:
					t ? this._shaderValues.setMatrix4x4(ae.WORLDMATRIX, t.worldMatrix) : this._shaderValues
						.setMatrix4x4(ae.WORLDMATRIX, p.DEFAULT), this._shaderValues.hasDefine(Xe
						.SHADERDEFINE_UV1) ? this._revertStaticBatchDefineUV1 = !1 : (this._shaderValues.addDefine(
							Xe.SHADERDEFINE_UV1), this._revertStaticBatchDefineUV1 = !0), this._shaderValues
						.hasDefine(ne.SHADERDEFINE_SCALEOFFSETLIGHTINGMAPUV) ? (this._shaderValues.removeDefine(ne
								.SHADERDEFINE_SCALEOFFSETLIGHTINGMAPUV), this._revertStaticBatchDefineLightMapUV = !
							0) : this._revertStaticBatchDefineLightMapUV = !1;
					break;
				case Ge.RENDERTYPE_VERTEXBATCH:
					this._shaderValues.setMatrix4x4(ae.WORLDMATRIX, p.DEFAULT);
					break;
				case Ge.RENDERTYPE_INSTANCEBATCH:
					for (var i = me.instance.instanceWorldMatrixData, a = r.instanceBatchElementList, n = a
							.elements, s = a.length, o = 0; o < s; o++) i.set(n[o]._transform.worldMatrix.elements,
						16 * o);
					me.instance.instanceWorldMatrixBuffer.setData(i.buffer, 0, 0, 16 * s * 4), this._shaderValues
						.addDefine(Xe.SHADERDEFINE_GPU_INSTANCE)
			}
		}
		_renderUpdateWithCamera(e, t) {
			var r = e.projectionViewMatrix,
				i = e.renderElement;
			switch (i.renderType) {
				case Ge.RENDERTYPE_NORMAL:
				case Ge.RENDERTYPE_STATICBATCH:
				case Ge.RENDERTYPE_VERTEXBATCH:
					t ? (p.multiply(r, t.worldMatrix, this._projectionViewWorldMatrix), this._shaderValues
							.setMatrix4x4(ae.MVPMATRIX, this._projectionViewWorldMatrix)) : this._shaderValues
						.setMatrix4x4(ae.MVPMATRIX, r);
					break;
				case Ge.RENDERTYPE_INSTANCEBATCH:
					for (var a = me.instance.instanceMVPMatrixData, n = i.instanceBatchElementList, s = n.elements,
							o = n.length, l = 0; l < o; l++) {
						var _ = s[l]._transform.worldMatrix;
						A.mulMatrixByArray(r.elements, 0, _.elements, 0, a, 16 * l)
					}
					me.instance.instanceMVPMatrixBuffer.setData(a.buffer, 0, 0, 16 * o * 4)
			}
		}
		_revertBatchRenderUpdate(e) {
			switch (e.renderElement.renderType) {
				case Ge.RENDERTYPE_STATICBATCH:
					this._revertStaticBatchDefineUV1 && this._shaderValues.removeDefine(Xe.SHADERDEFINE_UV1), this
						._revertStaticBatchDefineLightMapUV && this._shaderValues.addDefine(ne
							.SHADERDEFINE_SCALEOFFSETLIGHTINGMAPUV);
					break;
				case Ge.RENDERTYPE_INSTANCEBATCH:
					this._shaderValues.removeDefine(Xe.SHADERDEFINE_GPU_INSTANCE)
			}
		}
		_destroy() {
			this._isPartOfStaticBatch && ke.instance._removeRenderSprite(this._owner), super._destroy()
		}
	}
	class Qe {
		constructor(e) {
			this._owner = e
		}
		get sharedMesh() {
			return this._sharedMesh
		}
		set sharedMesh(e) {
			if (this._sharedMesh !== e) {
				var t = this._owner._render._shaderValues,
					r = this._sharedMesh;
				if (r) {
					r._removeReference(), this._getMeshDefine(r, Qe._meshVerticeDefine);
					for (var i = 0, a = Qe._meshVerticeDefine.length; i < a; i++) t.removeDefine(Qe
						._meshVerticeDefine[i])
				}
				if (e) {
					e._addReference(), this._getMeshDefine(e, Qe._meshVerticeDefine);
					for (i = 0, a = Qe._meshVerticeDefine.length; i < a; i++) t.addDefine(Qe._meshVerticeDefine[i])
				}
				this._owner._render._onMeshChange(e), this._sharedMesh = e
			}
		}
		_getMeshDefine(e, t) {
			t.length = 0;
			for (var r = 0, i = e._subMeshes.length; r < i; r++)
				for (var a = e.getSubMesh(r)._vertexBuffer._vertexDeclaration._vertexElements, n = 0, s = a
					.length; n < s; n++) {
					switch (a[n]._elementUsage) {
						case fe.MESH_COLOR0:
							t.push(Xe.SHADERDEFINE_COLOR);
							break;
						case fe.MESH_TEXTURECOORDINATE0:
							t.push(Xe.SHADERDEFINE_UV0);
							break;
						case fe.MESH_TEXTURECOORDINATE1:
							t.push(Xe.SHADERDEFINE_UV1)
					}
				}
		}
		destroy() {
			this._owner = null, this._sharedMesh && (this._sharedMesh._removeReference(), this._sharedMesh = null)
		}
	}
	Qe._meshVerticeDefine = [];
	class Ke extends _e {
		constructor() {
			super(), this._bufferState = new De;
			var e = t.LayaGL.instance,
				r = fe.getVertexDeclaration("POSITION,NORMAL,COLOR,UV,UV1,TANGENT").vertexStride * Ke
				.maxIndicesCount;
			this._vertices = new Float32Array(r / 4), this._vertexBuffer = new he(r, e.DYNAMIC_DRAW), this
				._indices = new Int16Array(Ke.maxIndicesCount), this._indexBuffer = new Me(Me.INDEXTYPE_USHORT, this
					._indices.length, e.DYNAMIC_DRAW);
			var i = this._vertexBuffer._byteLength + this._indexBuffer._byteLength;
			t.Resource._addMemory(i, i)
		}
		static __init__() {
			Ke.instance = new Ke
		}
		_getBatchVertices(e, t, r, i, a, n) {
			var s = e.vertexStride / 4,
				o = n._vertexBuffer.getFloat32Data(),
				l = (a.render.lightmapScaleOffset, a._dynamicMultiSubMesh),
				_ = a._dynamicVertexCount;
			a._computeWorldPositionsAndNormals(this._positionOffset, this._normalOffset, l, _);
			for (var h = a._dynamicWorldPositions, c = a._dynamicWorldNormals, d = n._indices, u = 0; u < _; u++) {
				var f = (l ? d[u] : u) * s,
					m = (u + r) * s,
					E = 3 * u,
					T = m + this._positionOffset;
				t[T] = h[E], t[T + 1] = h[E + 1], t[T + 2] = h[E + 2], -1 !== this._normalOffset && (t[T = m + this
						._normalOffset] = c[E], t[T + 1] = c[E + 1], t[T + 2] = c[E + 2]), -1 !== this
					._colorOffset && (T = m + this._colorOffset, E = f + this._colorOffset, t[T] = o[E], t[T + 1] =
						o[E + 1], t[T + 2] = o[E + 2], t[T + 3] = o[E + 3]), -1 !== this._uv0Offset && (T = m + this
						._uv0Offset, E = f + this._uv0Offset, t[T] = o[E], t[T + 1] = o[E + 1]), -1 !== this
					._sTangentOffset && (T = m + this._sTangentOffset, E = f + this._sTangentOffset, t[T] = o[E], t[
							T + 1] = o[E + 1], t[T + 2] = o[E + 2], t[T + 3] = o[E + 3], T = m + this
						._sTangentOffset, E = f + this._sTangentOffset, t[T] = o[E], t[T + 1] = o[E + 1], t[T + 2] =
						o[E + 2], t[T + 3] = o[E + 3])
			}
		}
		_getBatchIndices(e, t, r, i, a, n) {
			var s, o, l, _ = a._indices,
				h = i._isFrontFaceInvert;
			if (n)
				if (h)
					for (s = 0, o = _.length; s < o; s += 3) {
						var c = r + s;
						e[l = t + s] = c, e[l + 1] = c + 2, e[l + 2] = c + 1
					} else
						for (s = 0, o = _.length; s < o; s += 3) c = r + s, e[l = t + s] = c, e[l + 1] = c + 1, e[
							l + 2] = c + 2;
				else if (h)
				for (s = 0, o = _.length; s < o; s += 3) e[l = t + s] = r + _[s], e[l + 1] = r + _[s + 2], e[l +
					2] = r + _[s + 1];
			else
				for (s = 0, o = _.length; s < o; s += 3) e[l = t + s] = r + _[s], e[l + 1] = r + _[s + 1], e[l +
					2] = r + _[s + 2]
		}
		_flush(e, r) {
			var i = t.LayaGL.instance;
			this._vertexBuffer.setData(this._vertices.buffer, 0, 0, e * this._bufferState.vertexDeclaration
				.vertexStride), this._indexBuffer.setData(this._indices, 0, 0, r), i.drawElements(i.TRIANGLES,
				r, i.UNSIGNED_SHORT, 0)
		}
		_prepareRender(e) {
			var t = e.renderElement.vertexBatchVertexDeclaration;
			this._bufferState = o.MeshRenderDynamicBatchManager.instance._getBufferState(t), this._positionOffset =
				t.getVertexElementByUsage(fe.MESH_POSITION0)._offset / 4;
			var r = t.getVertexElementByUsage(fe.MESH_NORMAL0);
			this._normalOffset = r ? r._offset / 4 : -1;
			var i = t.getVertexElementByUsage(fe.MESH_COLOR0);
			this._colorOffset = i ? i._offset / 4 : -1;
			var a = t.getVertexElementByUsage(fe.MESH_TEXTURECOORDINATE0);
			this._uv0Offset = a ? a._offset / 4 : -1;
			var n = t.getVertexElementByUsage(fe.MESH_TEXTURECOORDINATE1);
			this._uv1Offset = n ? n._offset / 4 : -1;
			var s = t.getVertexElementByUsage(fe.MESH_TANGENT0);
			return this._sTangentOffset = s ? s._offset / 4 : -1, !0
		}
		_render(e) {
			this._bufferState.bind();
			for (var r = e.renderElement, i = r.vertexBatchVertexDeclaration, a = r.vertexBatchElementList, n = 0,
					s = 0, o = (i.vertexStride, 0), l = a.length, _ = a.elements, h = 0; h < l; h++) {
				var c = _[h],
					d = c._geometry,
					u = d._indexCount;
				s + u > Ke.maxIndicesCount && (this._flush(n, s), o++, t.Stat.trianglesFaces += s / 3, n = s = 0);
				var f = c._transform;
				this._getBatchVertices(i, this._vertices, n, f, c, d), this._getBatchIndices(this._indices, s, n, f,
					d, c._dynamicMultiSubMesh), n += c._dynamicVertexCount, s += u
			}
			this._flush(n, s), o++, t.Stat.renderBatches += o, t.Stat.savedRenderBatches += l - o, t.Stat
				.trianglesFaces += s / 3
		}
	}
	Ke.maxAllowVertexCount = 10, Ke.maxAllowAttribueCount = 900, Ke.maxIndicesCount = 32e3;
	class Je extends re {
		constructor() {
			super(), this._instanceBatchOpaqueMarks = [], this._vertexBatchOpaqueMarks = [], this
				._cacheBufferStates = [], this._updateCountMark = 0
		}
		getInstanceBatchOpaquaMark(e, t, r, i) {
			var a = this._instanceBatchOpaqueMarks[e ? 0 : 1] || (this._instanceBatchOpaqueMarks[e ? 0 : 1] = []),
				n = a[t] || (a[t] = []),
				s = n[r] || (n[r] = []);
			return s[i ? 1 : 0] || (s[i ? 1 : 0] = new le)
		}
		getVertexBatchOpaquaMark(e, t, r, i) {
			var a = this._vertexBatchOpaqueMarks[e] || (this._vertexBatchOpaqueMarks[e] = []),
				n = a[t ? 0 : 1] || (a[t ? 0 : 1] = []),
				s = n[r] || (n[r] = []);
			return s[i] || (s[i] = new le)
		}
		_getBufferState(e) {
			var t = this._cacheBufferStates[e.id];
			if (!t) {
				var r = Ke.instance;
				(t = new De).bind();
				var i = r._vertexBuffer;
				i.vertexDeclaration = e, t.applyVertexBuffer(i), t.applyIndexBuffer(r._indexBuffer), t.unBind(),
					this._cacheBufferStates[e.id] = t
			}
			return t
		}
		_getBatchRenderElementFromPool() {
			var e = this._batchRenderElementPool[this._batchRenderElementPoolIndex++];
			return e || (e = new ze, this._batchRenderElementPool[this._batchRenderElementPoolIndex - 1] = e, e
				.vertexBatchElementList = new We, e.instanceBatchElementList = new We), e
		}
		_clear() {
			super._clear(), this._updateCountMark++
		}
	}
	Je.instance = new Je;
	class $e extends ne {
		static __init__() {
			Xe.SHADERDEFINE_UV0 = F.getDefineByName("UV"), Xe.SHADERDEFINE_COLOR = F.getDefineByName("COLOR"), Xe
				.SHADERDEFINE_UV1 = F.getDefineByName("UV1"), Xe.SHADERDEFINE_GPU_INSTANCE = F.getDefineByName(
					"GPU_INSTANCE"), se._registerManager(ke.instance), re._registerManager(Je.instance)
		}
		get meshFilter() {
			return this._meshFilter
		}
		get meshRenderer() {
			return this._render
		}
		constructor(e = null, t = null) {
			super(t), this._meshFilter = new Qe(this), this._render = new qe(this), e && (this._meshFilter
				.sharedMesh = e)
		}
		_parse(e, r) {
			super._parse(e, r);
			var i = this.meshRenderer,
				n = e.lightmapIndex;
			null != n && (i.lightmapIndex = n);
			var s = e.lightmapScaleOffset;
			s && (i.lightmapScaleOffset = new a(s[0], s[1], s[2], s[3])), null != e.meshPath && (this.meshFilter
				.sharedMesh = t.Loader.getRes(e.meshPath)), null != e.enableRender && (this.meshRenderer
				.enable = e.enableRender);
			var o = e.materials;
			if (o) {
				var l = i.sharedMaterials,
					_ = o.length;
				l.length = _;
				for (var h = 0; h < _; h++) l[h] = t.Loader.getRes(o[h].path);
				i.sharedMaterials = l
			}
		}
		_addToInitStaticBatchManager() {
			this.meshFilter.sharedMesh && ke.instance._addBatchSprite(this)
		}
		_cloneTo(e, t, r) {
			var i = e;
			i._meshFilter.sharedMesh = this._meshFilter.sharedMesh;
			var a = this._render,
				n = i._render;
			n.enable = a.enable, n.sharedMaterials = a.sharedMaterials, n.castShadow = a.castShadow;
			var s = a.lightmapScaleOffset;
			s && (n.lightmapScaleOffset = s.clone()), n.lightmapIndex = a.lightmapIndex, n.receiveShadow = a
				.receiveShadow, n.sortingFudge = a.sortingFudge, super._cloneTo(e, t, r)
		}
		destroy(e = !0) {
			this.destroyed || (super.destroy(e), this._meshFilter.destroy())
		}
		_create() {
			return new $e
		}
	}
	class et {}
	et.Blend = 0, et.Fixed = 1;
	class tt {
		constructor(e, t) {
			this._mode = 0, this._maxColorRGBKeysCount = 0, this._maxColorAlphaKeysCount = 0, this
				._colorRGBKeysCount = 0, this._colorAlphaKeysCount = 0, this._alphaElements = null, this
				._rgbElements = null, this._maxColorRGBKeysCount = e, this._maxColorAlphaKeysCount = t, this
				._rgbElements = new Float32Array(4 * e), this._alphaElements = new Float32Array(2 * t)
		}
		get mode() {
			return this._mode
		}
		set mode(e) {
			this._mode = e
		}
		get colorRGBKeysCount() {
			return this._colorRGBKeysCount
		}
		get colorAlphaKeysCount() {
			return this._colorAlphaKeysCount
		}
		get maxColorRGBKeysCount() {
			return this._maxColorRGBKeysCount
		}
		get maxColorAlphaKeysCount() {
			return this._maxColorAlphaKeysCount
		}
		addColorRGB(e, t) {
			if (this._colorRGBKeysCount < this._maxColorRGBKeysCount) {
				var r = 4 * this._colorRGBKeysCount;
				this._rgbElements[r] = e, this._rgbElements[r + 1] = t.r, this._rgbElements[r + 2] = t.g, this
					._rgbElements[r + 3] = t.b, this._colorRGBKeysCount++
			} else console.warn("Gradient:warning:data count must lessEqual than " + this._maxColorRGBKeysCount)
		}
		addColorAlpha(e, t) {
			if (this._colorAlphaKeysCount < this._maxColorAlphaKeysCount) {
				var r = 2 * this._colorAlphaKeysCount;
				this._alphaElements[r] = e, this._alphaElements[r + 1] = t, this._colorAlphaKeysCount++
			} else console.warn("Gradient:warning:data count must lessEqual than " + this._maxColorAlphaKeysCount)
		}
		updateColorRGB(e, t, r) {
			if (e < this._colorRGBKeysCount) {
				var i = 4 * e;
				this._rgbElements[i] = t, this._rgbElements[i + 1] = r.r, this._rgbElements[i + 2] = r.g, this
					._rgbElements[i + 3] = r.b
			} else console.warn("Gradient:warning:index must lessEqual than colorRGBKeysCount:" + this
				._colorRGBKeysCount)
		}
		updateColorAlpha(e, t, r) {
			if (e < this._colorAlphaKeysCount) {
				var i = 2 * e;
				this._alphaElements[i] = t, this._alphaElements[i + 1] = r
			} else console.warn("Gradient:warning:index must lessEqual than colorAlphaKeysCount:" + this
				._colorAlphaKeysCount)
		}
		evaluateColorRGB(e, t, r = 0, i = !1) {
			e = Math.min(Math.max(e, 0), 1);
			var a = this._rgbElements,
				n = r;
			if (i)
				for (var s = n; s >= 0; s--) {
					var o = 4 * s;
					if (e === (u = a[o])) return t.r = a[o + 1], t.g = a[o + 2], t.b = a[o + 3], n;
					switch (this._mode) {
						case et.Blend:
							if (e > u) {
								if (e > (d = a[o + 4])) throw "Gradient:wrong startSearchIndex.";
								var l = d - u,
									_ = d - e,
									h = e - u;
								return t.r = (_ * a[o + 1] + h * a[o + 5]) / l, t.g = (_ * a[o + 2] + h * a[o +
									6]) / l, t.b = (_ * a[o + 3] + h * a[o + 7]) / l, n
							}
							n--;
							continue;
						case et.Fixed:
							if (e > u) {
								if (e > a[o + 4]) throw "Gradient:wrong startSearchIndex.";
								return t.r = a[o + 5], t.g = a[o + 6], t.b = a[o + 7], n
							}
							n--;
							continue;
						default:
							throw "Gradient:unknown mode."
					}
				} else {
					s = 0;
					for (var c = this._rgbElements.length; s < c; s++) {
						var d;
						if (e === (d = a[o = 4 * s])) return t.r = a[o + 1], t.g = a[o + 2], t.b = a[o + 3], n;
						switch (this._mode) {
							case et.Blend:
								if (e < d) {
									var u;
									if (e < (u = a[o - 4])) throw "Gradient:wrong startSearchIndex.";
									l = d - u, _ = d - e, h = e - u;
									return t.r = (_ * a[o - 3] + h * a[o + 1]) / l, t.g = (_ * a[o - 2] + h * a[o +
										2]) / l, t.b = (_ * a[o - 1] + h * a[o + 3]) / l, n
								}
								n++;
								continue;
							case et.Fixed:
								if (e < d) {
									if (e < a[o - 4]) throw "Gradient:wrong startSearchIndex.";
									return t.r = a[o + 1], t.g = a[o + 2], t.b = a[o + 3], n
								}
								n++;
								continue;
							default:
								throw "Gradient:unknown mode."
						}
					}
				}
			return n
		}
		evaluateColorAlpha(e, t, r = 0, i = !1) {
			e = Math.min(Math.max(e, 0), 1);
			var a = this._alphaElements,
				n = r;
			if (i)
				for (var s = n; s >= 0; s--) {
					if (e === (u = a[c = 2 * s])) return t.a = a[c + 1], n;
					switch (this._mode) {
						case et.Blend:
							if (e > u) {
								if (e > (d = a[c + 2])) throw "Gradient:wrong startSearchIndex.";
								var o = d - u,
									l = d - e,
									_ = e - u;
								return t.a = (l * a[c + 1] + _ * a[c + 3]) / o, n
							}
							n--;
							continue;
						case et.Fixed:
							if (e > u) {
								if (e > a[c + 2]) throw "Gradient:wrong startSearchIndex.";
								return t.a = a[c + 3], n
							}
							n--;
							continue;
						default:
							throw "Gradient:unknown mode."
					}
				} else {
					s = n;
					for (var h = this._alphaElements.length; s < h; s++) {
						var c, d;
						if (e === (d = a[c = 2 * s])) return t.a = a[c + 1], n;
						switch (this._mode) {
							case et.Blend:
								if (e < d) {
									var u;
									if (e < (u = a[c - 2])) throw "Gradient:wrong startSearchIndex.";
									o = d - u, l = d - e, _ = e - u;
									return t.a = (l * a[c - 1] + _ * a[c + 1]) / o, n
								}
								n++;
								continue;
							case et.Fixed:
								if (e < d) {
									if (e < a[c - 2]) throw "Gradient:wrong startSearchIndex.";
									return t.a = a[c + 1], n
								}
								n++;
								continue;
							default:
								throw "Gradient:unknown mode."
						}
					}
				}
			return n
		}
		cloneTo(e) {
			var t, r, i = e;
			i._colorAlphaKeysCount = this._colorAlphaKeysCount;
			var a = i._alphaElements;
			for (t = 0, r = this._alphaElements.length; t < r; t++) a[t] = this._alphaElements[t];
			i._colorRGBKeysCount = this._colorRGBKeysCount;
			var n = i._rgbElements;
			for (t = 0, r = this._rgbElements.length; t < r; t++) n[t] = this._rgbElements[t]
		}
		clone() {
			var e = new tt(this._maxColorRGBKeysCount, this._maxColorAlphaKeysCount);
			return this.cloneTo(e), e
		}
	}
	class rt extends W {
		constructor() {
			super(), this.setShaderName("PARTICLESHURIKEN"), this._color = new a(1, 1, 1, 1), this.renderMode = rt
				.RENDERMODE_ALPHABLENDED
		}
		static __initDefine__() {
			rt.SHADERDEFINE_DIFFUSEMAP = F.getDefineByName("DIFFUSEMAP"), rt.SHADERDEFINE_TINTCOLOR = F
				.getDefineByName("TINTCOLOR"), rt.SHADERDEFINE_ADDTIVEFOG = F.getDefineByName("ADDTIVEFOG"), rt
				.SHADERDEFINE_TILINGOFFSET = F.getDefineByName("TILINGOFFSET")
		}
		get _TintColorR() {
			return this._color.x
		}
		set _TintColorR(e) {
			this._color.x = e, this.color = this._color
		}
		get _TintColorG() {
			return this._color.y
		}
		set _TintColorG(e) {
			this._color.y = e, this.color = this._color
		}
		get _TintColorB() {
			return this._color.z
		}
		set _TintColorB(e) {
			this._color.z = e, this.color = this._color
		}
		get _TintColorA() {
			return this._color.w
		}
		set _TintColorA(e) {
			this._color.w = e, this.color = this._color
		}
		get _MainTex_STX() {
			return this._shaderValues.getVector(rt.TILINGOFFSET).x
		}
		set _MainTex_STX(e) {
			var t = this._shaderValues.getVector(rt.TILINGOFFSET);
			t.x = e, this.tilingOffset = t
		}
		get _MainTex_STY() {
			return this._shaderValues.getVector(rt.TILINGOFFSET).y
		}
		set _MainTex_STY(e) {
			var t = this._shaderValues.getVector(rt.TILINGOFFSET);
			t.y = e, this.tilingOffset = t
		}
		get _MainTex_STZ() {
			return this._shaderValues.getVector(rt.TILINGOFFSET).z
		}
		set _MainTex_STZ(e) {
			var t = this._shaderValues.getVector(rt.TILINGOFFSET);
			t.z = e, this.tilingOffset = t
		}
		get _MainTex_STW() {
			return this._shaderValues.getVector(rt.TILINGOFFSET).w
		}
		set _MainTex_STW(e) {
			var t = this._shaderValues.getVector(rt.TILINGOFFSET);
			t.w = e, this.tilingOffset = t
		}
		set renderMode(e) {
			switch (e) {
				case rt.RENDERMODE_ADDTIVE:
					this.renderQueue = W.RENDERQUEUE_TRANSPARENT, this.depthWrite = !1, this.cull = X.CULL_NONE,
						this.blend = X.BLEND_ENABLE_ALL, this.blendSrc = X.BLENDPARAM_SRC_ALPHA, this.blendDst = X
						.BLENDPARAM_ONE, this.alphaTest = !1, this._shaderValues.addDefine(rt
							.SHADERDEFINE_ADDTIVEFOG);
					break;
				case rt.RENDERMODE_ALPHABLENDED:
					this.renderQueue = W.RENDERQUEUE_TRANSPARENT, this.depthWrite = !1, this.cull = X.CULL_NONE,
						this.blend = X.BLEND_ENABLE_ALL, this.blendSrc = X.BLENDPARAM_SRC_ALPHA, this.blendDst = X
						.BLENDPARAM_ONE_MINUS_SRC_ALPHA, this.alphaTest = !1, this._shaderValues.removeDefine(rt
							.SHADERDEFINE_ADDTIVEFOG);
					break;
				default:
					throw new Error("ShurikenParticleMaterial : renderMode value error.")
			}
		}
		get colorR() {
			return this._TintColorR
		}
		set colorR(e) {
			this._TintColorR = e
		}
		get colorG() {
			return this._TintColorG
		}
		set colorG(e) {
			this._TintColorG = e
		}
		get colorB() {
			return this._TintColorB
		}
		set colorB(e) {
			this._TintColorB = e
		}
		get colorA() {
			return this._TintColorA
		}
		set colorA(e) {
			this._TintColorA = e
		}
		get color() {
			return this._shaderValues.getVector(rt.TINTCOLOR)
		}
		set color(e) {
			e ? this._shaderValues.addDefine(rt.SHADERDEFINE_TINTCOLOR) : this._shaderValues.removeDefine(rt
				.SHADERDEFINE_TINTCOLOR), this._shaderValues.setVector(rt.TINTCOLOR, e)
		}
		get tilingOffsetX() {
			return this._MainTex_STX
		}
		set tilingOffsetX(e) {
			this._MainTex_STX = e
		}
		get tilingOffsetY() {
			return this._MainTex_STY
		}
		set tilingOffsetY(e) {
			this._MainTex_STY = e
		}
		get tilingOffsetZ() {
			return this._MainTex_STZ
		}
		set tilingOffsetZ(e) {
			this._MainTex_STZ = e
		}
		get tilingOffsetW() {
			return this._MainTex_STW
		}
		set tilingOffsetW(e) {
			this._MainTex_STW = e
		}
		get tilingOffset() {
			return this._shaderValues.getVector(rt.TILINGOFFSET)
		}
		set tilingOffset(e) {
			e && (1 != e.x || 1 != e.y || 0 != e.z || 0 != e.w) ? this._shaderValues.addDefine(rt
					.SHADERDEFINE_TILINGOFFSET) : this._shaderValues.removeDefine(rt.SHADERDEFINE_TILINGOFFSET),
				this._shaderValues.setVector(rt.TILINGOFFSET, e)
		}
		get texture() {
			return this._shaderValues.getTexture(rt.DIFFUSETEXTURE)
		}
		set texture(e) {
			e ? this._shaderValues.addDefine(rt.SHADERDEFINE_DIFFUSEMAP) : this._shaderValues.removeDefine(rt
				.SHADERDEFINE_DIFFUSEMAP), this._shaderValues.setTexture(rt.DIFFUSETEXTURE, e)
		}
		get depthWrite() {
			return this._shaderValues.getBool(rt.DEPTH_WRITE)
		}
		set depthWrite(e) {
			this._shaderValues.setBool(rt.DEPTH_WRITE, e)
		}
		get cull() {
			return this._shaderValues.getInt(rt.CULL)
		}
		set cull(e) {
			this._shaderValues.setInt(rt.CULL, e)
		}
		get blend() {
			return this._shaderValues.getInt(rt.BLEND)
		}
		set blend(e) {
			this._shaderValues.setInt(rt.BLEND, e)
		}
		get blendSrc() {
			return this._shaderValues.getInt(rt.BLEND_SRC)
		}
		set blendSrc(e) {
			this._shaderValues.setInt(rt.BLEND_SRC, e)
		}
		get blendDst() {
			return this._shaderValues.getInt(rt.BLEND_DST)
		}
		set blendDst(e) {
			this._shaderValues.setInt(rt.BLEND_DST, e)
		}
		get depthTest() {
			return this._shaderValues.getInt(rt.DEPTH_TEST)
		}
		set depthTest(e) {
			this._shaderValues.setInt(rt.DEPTH_TEST, e)
		}
		clone() {
			var e = new rt;
			return this.cloneTo(e), e
		}
	}
	rt.RENDERMODE_ALPHABLENDED = 0, rt.RENDERMODE_ADDTIVE = 1, rt.DIFFUSETEXTURE = F.propertyNameToID("u_texture"), rt
		.TINTCOLOR = F.propertyNameToID("u_Tintcolor"), rt.TILINGOFFSET = F.propertyNameToID("u_TilingOffset"), rt
		.CULL = F.propertyNameToID("s_Cull"), rt.BLEND = F.propertyNameToID("s_Blend"), rt.BLEND_SRC = F
		.propertyNameToID("s_BlendSrc"), rt.BLEND_DST = F.propertyNameToID("s_BlendDst"), rt.DEPTH_TEST = F
		.propertyNameToID("s_DepthTest"), rt.DEPTH_WRITE = F.propertyNameToID("s_DepthWrite");
	class it {
		constructor() {}
		static setColliderCollision(e, t, r) {}
		static getIColliderCollision(e, t) {
			return !1
		}
	}
	it.COLLISIONFILTERGROUP_DEFAULTFILTER = 1, it.COLLISIONFILTERGROUP_STATICFILTER = 2, it
		.COLLISIONFILTERGROUP_KINEMATICFILTER = 4, it.COLLISIONFILTERGROUP_DEBRISFILTER = 8, it
		.COLLISIONFILTERGROUP_SENSORTRIGGER = 16, it.COLLISIONFILTERGROUP_CHARACTERFILTER = 32, it
		.COLLISIONFILTERGROUP_CUSTOMFILTER1 = 64, it.COLLISIONFILTERGROUP_CUSTOMFILTER2 = 128, it
		.COLLISIONFILTERGROUP_CUSTOMFILTER3 = 256, it.COLLISIONFILTERGROUP_CUSTOMFILTER4 = 512, it
		.COLLISIONFILTERGROUP_CUSTOMFILTER5 = 1024, it.COLLISIONFILTERGROUP_CUSTOMFILTER6 = 2048, it
		.COLLISIONFILTERGROUP_CUSTOMFILTER7 = 4096, it.COLLISIONFILTERGROUP_CUSTOMFILTER8 = 8192, it
		.COLLISIONFILTERGROUP_CUSTOMFILTER9 = 16384, it.COLLISIONFILTERGROUP_CUSTOMFILTER10 = 32768, it
		.COLLISIONFILTERGROUP_ALLFILTER = -1, it.gravity = new n(0, -9.81, 0);
	class at {}
	at.WORLDPOSITION = F.propertyNameToID("u_WorldPosition"), at.WORLDROTATION = F.propertyNameToID("u_WorldRotation"),
		at.POSITIONSCALE = F.propertyNameToID("u_PositionScale"), at.SIZESCALE = F.propertyNameToID("u_SizeScale"), at
		.SCALINGMODE = F.propertyNameToID("u_ScalingMode"), at.GRAVITY = F.propertyNameToID("u_Gravity"), at
		.THREEDSTARTROTATION = F.propertyNameToID("u_ThreeDStartRotation"), at.STRETCHEDBILLBOARDLENGTHSCALE = F
		.propertyNameToID("u_StretchedBillboardLengthScale"), at.STRETCHEDBILLBOARDSPEEDSCALE = F.propertyNameToID(
			"u_StretchedBillboardSpeedScale"), at.SIMULATIONSPACE = F.propertyNameToID("u_SimulationSpace"), at
		.CURRENTTIME = F.propertyNameToID("u_CurrentTime"), at.VOLVELOCITYCONST = F.propertyNameToID(
			"u_VOLVelocityConst"), at.VOLVELOCITYGRADIENTX = F.propertyNameToID("u_VOLVelocityGradientX"), at
		.VOLVELOCITYGRADIENTY = F.propertyNameToID("u_VOLVelocityGradientY"), at.VOLVELOCITYGRADIENTZ = F
		.propertyNameToID("u_VOLVelocityGradientZ"), at.VOLVELOCITYCONSTMAX = F.propertyNameToID(
			"u_VOLVelocityConstMax"), at.VOLVELOCITYGRADIENTXMAX = F.propertyNameToID("u_VOLVelocityGradientMaxX"), at
		.VOLVELOCITYGRADIENTYMAX = F.propertyNameToID("u_VOLVelocityGradientMaxY"), at.VOLVELOCITYGRADIENTZMAX = F
		.propertyNameToID("u_VOLVelocityGradientMaxZ"), at.VOLSPACETYPE = F.propertyNameToID("u_VOLSpaceType"), at
		.COLOROVERLIFEGRADIENTALPHAS = F.propertyNameToID("u_ColorOverLifeGradientAlphas"), at
		.COLOROVERLIFEGRADIENTCOLORS = F.propertyNameToID("u_ColorOverLifeGradientColors"), at
		.MAXCOLOROVERLIFEGRADIENTALPHAS = F.propertyNameToID("u_MaxColorOverLifeGradientAlphas"), at
		.MAXCOLOROVERLIFEGRADIENTCOLORS = F.propertyNameToID("u_MaxColorOverLifeGradientColors"), at.SOLSIZEGRADIENT = F
		.propertyNameToID("u_SOLSizeGradient"), at.SOLSIZEGRADIENTX = F.propertyNameToID("u_SOLSizeGradientX"), at
		.SOLSIZEGRADIENTY = F.propertyNameToID("u_SOLSizeGradientY"), at.SOLSizeGradientZ = F.propertyNameToID(
			"u_SOLSizeGradientZ"), at.SOLSizeGradientMax = F.propertyNameToID("u_SOLSizeGradientMax"), at
		.SOLSIZEGRADIENTXMAX = F.propertyNameToID("u_SOLSizeGradientMaxX"), at.SOLSIZEGRADIENTYMAX = F.propertyNameToID(
			"u_SOLSizeGradientMaxY"), at.SOLSizeGradientZMAX = F.propertyNameToID("u_SOLSizeGradientMaxZ"), at
		.ROLANGULARVELOCITYCONST = F.propertyNameToID("u_ROLAngularVelocityConst"), at
		.ROLANGULARVELOCITYCONSTSEPRARATE = F.propertyNameToID("u_ROLAngularVelocityConstSeprarate"), at
		.ROLANGULARVELOCITYGRADIENT = F.propertyNameToID("u_ROLAngularVelocityGradient"), at
		.ROLANGULARVELOCITYGRADIENTX = F.propertyNameToID("u_ROLAngularVelocityGradientX"), at
		.ROLANGULARVELOCITYGRADIENTY = F.propertyNameToID("u_ROLAngularVelocityGradientY"), at
		.ROLANGULARVELOCITYGRADIENTZ = F.propertyNameToID("u_ROLAngularVelocityGradientZ"), at
		.ROLANGULARVELOCITYCONSTMAX = F.propertyNameToID("u_ROLAngularVelocityConstMax"), at
		.ROLANGULARVELOCITYCONSTMAXSEPRARATE = F.propertyNameToID("u_ROLAngularVelocityConstMaxSeprarate"), at
		.ROLANGULARVELOCITYGRADIENTMAX = F.propertyNameToID("u_ROLAngularVelocityGradientMax"), at
		.ROLANGULARVELOCITYGRADIENTXMAX = F.propertyNameToID("u_ROLAngularVelocityGradientMaxX"), at
		.ROLANGULARVELOCITYGRADIENTYMAX = F.propertyNameToID("u_ROLAngularVelocityGradientMaxY"), at
		.ROLANGULARVELOCITYGRADIENTZMAX = F.propertyNameToID("u_ROLAngularVelocityGradientMaxZ"), at
		.ROLANGULARVELOCITYGRADIENTWMAX = F.propertyNameToID("u_ROLAngularVelocityGradientMaxW"), at
		.TEXTURESHEETANIMATIONCYCLES = F.propertyNameToID("u_TSACycles"), at.TEXTURESHEETANIMATIONSUBUVLENGTH = F
		.propertyNameToID("u_TSASubUVLength"), at.TEXTURESHEETANIMATIONGRADIENTUVS = F.propertyNameToID(
			"u_TSAGradientUVs"), at.TEXTURESHEETANIMATIONGRADIENTMAXUVS = F.propertyNameToID("u_TSAMaxGradientUVs");
	class nt extends je {
		constructor(e) {
			super(e), this._finalGravity = new n, this._tempRotationMatrix = new p, this._renderMode = 0, this
				._mesh = null, this.stretchedBillboardCameraSpeedScale = 0, this.stretchedBillboardSpeedScale = 0,
				this.stretchedBillboardLengthScale = 0, this._defaultBoundBox = new Ye(new n, new n), this
				._renderMode = -1, this.stretchedBillboardCameraSpeedScale = 0, this.stretchedBillboardSpeedScale =
				0, this.stretchedBillboardLengthScale = 1, this._supportOctree = !1
		}
		get renderMode() {
			return this._renderMode
		}
		get mesh() {
			return this._mesh
		}
		set mesh(e) {
			this._mesh !== e && (this._mesh && this._mesh._removeReference(), this._mesh = e, e && e
			._addReference(), this._owner.particleSystem._initBufferDatas())
		}
		set renderMode(e) {
			if (this._renderMode !== e) {
				var t = this._shaderValues;
				switch (this._renderMode) {
					case 0:
						t.removeDefine(at.SHADERDEFINE_RENDERMODE_BILLBOARD);
						break;
					case 1:
						t.removeDefine(at.SHADERDEFINE_RENDERMODE_STRETCHEDBILLBOARD);
						break;
					case 2:
						t.removeDefine(at.SHADERDEFINE_RENDERMODE_HORIZONTALBILLBOARD);
						break;
					case 3:
						t.removeDefine(at.SHADERDEFINE_RENDERMODE_VERTICALBILLBOARD);
						break;
					case 4:
						t.removeDefine(at.SHADERDEFINE_RENDERMODE_MESH)
				}
				switch (this._renderMode = e, e) {
					case 0:
						t.addDefine(at.SHADERDEFINE_RENDERMODE_BILLBOARD);
						break;
					case 1:
						t.addDefine(at.SHADERDEFINE_RENDERMODE_STRETCHEDBILLBOARD);
						break;
					case 2:
						t.addDefine(at.SHADERDEFINE_RENDERMODE_HORIZONTALBILLBOARD);
						break;
					case 3:
						t.addDefine(at.SHADERDEFINE_RENDERMODE_VERTICALBILLBOARD);
						break;
					case 4:
						t.addDefine(at.SHADERDEFINE_RENDERMODE_MESH);
						break;
					default:
						throw new Error("ShurikenParticleRender: unknown renderMode Value.")
				}
				this._owner.particleSystem._initBufferDatas()
			}
		}
		_calculateBoundingBox() {
			if ((e = this._bounds.getMin()).x = -Number.MAX_VALUE, e.y = -Number.MAX_VALUE, e.z = -Number.MAX_VALUE,
				this._bounds.setMin(e), (r = this._bounds.getMax()).x = Number.MAX_VALUE, r.y = Number.MAX_VALUE, r
				.z = Number.MAX_VALUE, this._bounds.setMax(r), t.Render.supportWebGLPlusCulling) {
				var e = this._bounds.getMin(),
					r = this._bounds.getMax(),
					i = oe._cullingBuffer;
				i[this._cullingBufferIndex + 1] = e.x, i[this._cullingBufferIndex + 2] = e.y, i[this
					._cullingBufferIndex + 3] = e.z, i[this._cullingBufferIndex + 4] = r.x, i[this
					._cullingBufferIndex + 5] = r.y, i[this._cullingBufferIndex + 6] = r.z
			}
		}
		_needRender(e, t) {
			return !e || !!e.intersects(this.bounds._getBoundBox()) && !!this._owner.particleSystem.isAlive
		}
		_renderUpdate(e, t) {
			var r = this._owner.particleSystem,
				i = this._shaderValues,
				a = this._owner.transform;
			switch (r.simulationSpace) {
				case 0:
					break;
				case 1:
					i.setVector3(at.WORLDPOSITION, a.position), i.setQuaternion(at.WORLDROTATION, a.rotation);
					break;
				default:
					throw new Error("ShurikenParticleMaterial: SimulationSpace value is invalid.")
			}
			switch (r.scaleMode) {
				case 0:
					var s = a.getWorldLossyScale();
					i.setVector3(at.POSITIONSCALE, s), i.setVector3(at.SIZESCALE, s);
					break;
				case 1:
					var o = a.localScale;
					i.setVector3(at.POSITIONSCALE, o), i.setVector3(at.SIZESCALE, o);
					break;
				case 2:
					i.setVector3(at.POSITIONSCALE, a.getWorldLossyScale()), i.setVector3(at.SIZESCALE, n._ONE)
			}
			n.scale(it.gravity, r.gravityModifier, this._finalGravity), i.setVector3(at.GRAVITY, this
				._finalGravity), i.setInt(at.SIMULATIONSPACE, r.simulationSpace), i.setBool(at.THREEDSTARTROTATION,
					r.threeDStartRotation), i.setInt(at.SCALINGMODE, r.scaleMode), i.setNumber(at
					.STRETCHEDBILLBOARDLENGTHSCALE, this.stretchedBillboardLengthScale), i.setNumber(at
					.STRETCHEDBILLBOARDSPEEDSCALE, this.stretchedBillboardSpeedScale), i.setNumber(at.CURRENTTIME, r
					._currentTime)
		}
		get bounds() {
			return this._boundsChange && (this._calculateBoundingBox(), this._boundsChange = !1), this._bounds
		}
		_destroy() {
			super._destroy(), this._mesh && (this._mesh._removeReference(), this._mesh = null)
		}
	}
	class st {
		constructor() {}
	}
	st.PARTICLE_CORNERTEXTURECOORDINATE0 = 0, st.PARTICLE_POSITION0 = 1, st.PARTICLE_COLOR0 = 2, st
		.PARTICLE_TEXTURECOORDINATE0 = 3, st.PARTICLE_SHAPEPOSITIONSTARTLIFETIME = 4, st.PARTICLE_DIRECTIONTIME = 5, st
		.PARTICLE_STARTCOLOR0 = 6, st.PARTICLE_ENDCOLOR0 = 7, st.PARTICLE_STARTSIZE = 8, st.PARTICLE_STARTROTATION = 9,
		st.PARTICLE_STARTSPEED = 10, st.PARTICLE_RANDOM0 = 11, st.PARTICLE_RANDOM1 = 12, st
		.PARTICLE_SIMULATIONWORLDPOSTION = 13, st.PARTICLE_SIMULATIONWORLDROTATION = 14;
	class ot extends st {
		static get vertexDeclaration() {
			return ot._vertexDeclaration
		}
		static __init__() {
			ot._vertexDeclaration = new de(152, [new ue(0, ce.Vector4, st.PARTICLE_CORNERTEXTURECOORDINATE0),
				new ue(16, ce.Vector4, st.PARTICLE_SHAPEPOSITIONSTARTLIFETIME), new ue(32, ce.Vector4, st
					.PARTICLE_DIRECTIONTIME), new ue(48, ce.Vector4, st.PARTICLE_STARTCOLOR0), new ue(64, ce
					.Vector3, st.PARTICLE_STARTSIZE), new ue(76, ce.Vector3, st.PARTICLE_STARTROTATION),
				new ue(88, ce.Single, st.PARTICLE_STARTSPEED), new ue(92, ce.Vector4, st.PARTICLE_RANDOM0),
				new ue(108, ce.Vector4, st.PARTICLE_RANDOM1), new ue(124, ce.Vector3, st
					.PARTICLE_SIMULATIONWORLDPOSTION), new ue(136, ce.Vector4, st
					.PARTICLE_SIMULATIONWORLDROTATION)
			])
		}
		get cornerTextureCoordinate() {
			return this._cornerTextureCoordinate
		}
		get positionStartLifeTime() {
			return this._positionStartLifeTime
		}
		get velocity() {
			return this._velocity
		}
		get startColor() {
			return this._startColor
		}
		get startSize() {
			return this._startSize
		}
		get startRotation0() {
			return this._startRotation0
		}
		get startRotation1() {
			return this._startRotation1
		}
		get startRotation2() {
			return this._startRotation2
		}
		get startLifeTime() {
			return this._startLifeTime
		}
		get time() {
			return this._time
		}
		get startSpeed() {
			return this._startSpeed
		}
		get random0() {
			return this._randoms0
		}
		get random1() {
			return this._randoms1
		}
		get simulationWorldPostion() {
			return this._simulationWorldPostion
		}
		constructor(e, t, r, i, a, n, s, o, l, _, h, c, d, u) {
			super(), this._cornerTextureCoordinate = e, this._positionStartLifeTime = t, this._velocity = r, this
				._startColor = i, this._startSize = a, this._startRotation0 = n, this._startRotation1 = s, this
				._startRotation2 = o, this._startLifeTime = l, this._time = _, this._startSpeed = h, this
				._randoms0 = this.random0, this._randoms1 = this.random1, this._simulationWorldPostion = u
		}
	}
	class lt extends st {
		static __init__() {
			lt._vertexDeclaration = new de(172, [new ue(0, ce.Vector3, st.PARTICLE_POSITION0), new ue(12, ce
					.Vector4, st.PARTICLE_COLOR0), new ue(28, ce.Vector2, st.PARTICLE_TEXTURECOORDINATE0),
				new ue(36, ce.Vector4, st.PARTICLE_SHAPEPOSITIONSTARTLIFETIME), new ue(52, ce.Vector4, st
					.PARTICLE_DIRECTIONTIME), new ue(68, ce.Vector4, st.PARTICLE_STARTCOLOR0), new ue(84, ce
					.Vector3, st.PARTICLE_STARTSIZE), new ue(96, ce.Vector3, st.PARTICLE_STARTROTATION),
				new ue(108, ce.Single, st.PARTICLE_STARTSPEED), new ue(112, ce.Vector4, st
				.PARTICLE_RANDOM0), new ue(128, ce.Vector4, st.PARTICLE_RANDOM1), new ue(144, ce.Vector3, st
					.PARTICLE_SIMULATIONWORLDPOSTION), new ue(156, ce.Vector4, st
					.PARTICLE_SIMULATIONWORLDROTATION)
			])
		}
		static get vertexDeclaration() {
			return lt._vertexDeclaration
		}
		get cornerTextureCoordinate() {
			return this._cornerTextureCoordinate
		}
		get position() {
			return this._positionStartLifeTime
		}
		get velocity() {
			return this._velocity
		}
		get startColor() {
			return this._startColor
		}
		get startSize() {
			return this._startSize
		}
		get startRotation0() {
			return this._startRotation0
		}
		get startRotation1() {
			return this._startRotation1
		}
		get startRotation2() {
			return this._startRotation2
		}
		get startLifeTime() {
			return this._startLifeTime
		}
		get time() {
			return this._time
		}
		get startSpeed() {
			return this._startSpeed
		}
		get random0() {
			return this._randoms0
		}
		get random1() {
			return this._randoms1
		}
		get simulationWorldPostion() {
			return this._simulationWorldPostion
		}
		constructor(e, t, r, i, a, n, s, o, l, _, h, c, d, u) {
			super(), this._cornerTextureCoordinate = e, this._positionStartLifeTime = t, this._velocity = r, this
				._startColor = i, this._startSize = a, this._startRotation0 = n, this._startRotation1 = s, this
				._startRotation2 = o, this._startLifeTime = l, this._time = _, this._startSpeed = h, this
				._randoms0 = this.random0, this._randoms1 = this.random1, this._simulationWorldPostion = u
		}
	}
	class _t {
		constructor(e, t) {
			this.center = e, this.radius = t
		}
		toDefault() {
			this.center.toDefault(), this.radius = 0
		}
		static createFromSubPoints(e, t, r, i) {
			if (null == e) throw new Error("points");
			if (t < 0 || t >= e.length) throw new Error("start" + t + "Must be in the range [0, " + (e.length - 1) +
				"]");
			if (r < 0 || t + r > e.length) throw new Error("count" + r + "Must be in the range <= " + e.length +
				"}");
			var a = t + r,
				s = _t._tempVector3;
			s.x = 0, s.y = 0, s.z = 0;
			for (var o = t; o < a; ++o) n.add(e[o], s, s);
			var l = i.center;
			n.scale(s, 1 / r, l);
			var _ = 0;
			for (o = t; o < a; ++o) {
				var h = n.distanceSquared(l, e[o]);
				h > _ && (_ = h)
			}
			i.radius = Math.sqrt(_)
		}
		static createfromPoints(e, t) {
			if (null == e) throw new Error("points");
			_t.createFromSubPoints(e, 0, e.length, t)
		}
		intersectsRayDistance(e) {
			return ve.intersectsRayAndSphereRD(e, this)
		}
		intersectsRayPoint(e, t) {
			return ve.intersectsRayAndSphereRP(e, this, t)
		}
		cloneTo(e) {
			var t = e;
			this.center.cloneTo(t.center), t.radius = this.radius
		}
		clone() {
			var e = new _t(new n, 0);
			return this.cloneTo(e), e
		}
	}
	_t._tempVector3 = new n;
	class ht {
		constructor(e) {
			this._temp = new Uint32Array(1), this.seeds = new Uint32Array(4), this.seeds[0] = e, this.seeds[1] =
				1812433253 * this.seeds[0] + 1, this.seeds[2] = 1812433253 * this.seeds[1] + 1, this.seeds[3] =
				1812433253 * this.seeds[2] + 1
		}
		static getFloatFromInt(e) {
			return 1 / 8388607 * (8388607 & e)
		}
		static getByteFromInt(e) {
			return (8388607 & e) >>> 15
		}
		get seed() {
			return this.seeds[0]
		}
		set seed(e) {
			this.seeds[0] = e, this.seeds[1] = 1812433253 * this.seeds[0] + 1, this.seeds[2] = 1812433253 * this
				.seeds[1] + 1, this.seeds[3] = 1812433253 * this.seeds[2] + 1
		}
		getUint() {
			return this._temp[0] = this.seeds[0] ^ this.seeds[0] << 11, this.seeds[0] = this.seeds[1], this.seeds[
				1] = this.seeds[2], this.seeds[2] = this.seeds[3], this.seeds[3] = this.seeds[3] ^ this.seeds[3] >>>
				19 ^ this._temp[0] ^ this._temp[0] >>> 8, this.seeds[3]
		}
		getFloat() {
			return this.getUint(), (8388607 & this.seeds[3]) * (1 / 8388607)
		}
		getSignedFloat() {
			return 2 * this.getFloat() - 1
		}
	}
	class ct {
		set emissionRate(e) {
			if (e < 0) throw new Error("ParticleBaseShape:emissionRate value must large or equal than 0.");
			this._emissionRate = e
		}
		get emissionRate() {
			return this._emissionRate
		}
		get destroyed() {
			return this._destroyed
		}
		constructor() {
			this._destroyed = !1, this.emissionRate = 10, this._bursts = []
		}
		destroy() {
			this._bursts = null, this._destroyed = !0
		}
		getBurstsCount() {
			return this._bursts.length
		}
		getBurstByIndex(e) {
			return this._bursts[e]
		}
		addBurst(e) {
			var t = this._bursts.length;
			if (t > 0)
				for (var r = 0; r < t; r++) this._bursts[r].time > e.time && this._bursts.splice(r, 0, e);
			this._bursts.push(e)
		}
		removeBurst(e) {
			var t = this._bursts.indexOf(e); - 1 !== t && this._bursts.splice(t, 1)
		}
		removeBurstByIndex(e) {
			this._bursts.splice(e, 1)
		}
		clearBurst() {
			this._bursts.length = 0
		}
		cloneTo(e) {
			var t = e,
				r = t._bursts;
			r.length = this._bursts.length;
			for (var i = 0, a = this._bursts.length; i < a; i++) {
				var n = r[i];
				n ? this._bursts[i].cloneTo(n) : r[i] = this._bursts[i].clone()
			}
			t._emissionRate = this._emissionRate, t.enbale = this.enbale
		}
		clone() {
			var e = new ct;
			return this.cloneTo(e), e
		}
	}
	class dt {
		constructor() {
			this._currentLength = 0, this._elements = new Float32Array(8)
		}
		get gradientCount() {
			return this._currentLength / 2
		}
		add(e, t) {
			this._currentLength < 8 && (6 === this._currentLength && 1 !== e && (e = 1), this._elements[this
				._currentLength++] = e, this._elements[this._currentLength++] = t)
		}
		getKeyByIndex(e) {
			return this._elements[2 * e]
		}
		getValueByIndex(e) {
			return this._elements[2 * e + 1]
		}
		getAverageValue() {
			for (var e = 0, t = this._currentLength - 2; e < t; e += 2) {
				this._elements[e + 1];
				this._elements[e + 3], this._elements[e + 2] - this._elements[e]
			}
			return 0
		}
		cloneTo(e) {
			var t = e;
			t._currentLength = this._currentLength;
			for (var r = t._elements, i = 0, a = this._elements.length; i < a; i++) r[i] = this._elements[i]
		}
		clone() {
			var e = new dt;
			return this.cloneTo(e), e
		}
	}
	class ut {
		constructor() {}
		static _getStartLifetimeFromGradient(e, r) {
			for (var i = 1, a = e.gradientCount; i < a; i++) {
				var n = e.getKeyByIndex(i);
				if (n >= r) {
					var s = e.getKeyByIndex(i - 1),
						o = (r - s) / (n - s);
					return t.MathUtil.lerp(e.getValueByIndex(i - 1), e.getValueByIndex(i), o)
				}
			}
			throw new Error("ShurikenParticleData: can't get value foam startLifeTimeGradient.")
		}
		static _randomInvertRoationArray(e, t, r, i, a) {
			var n;
			i ? (i.seed = a[6], n = i.getFloat(), a[6] = i.seed) : n = Math.random(), n < r ? (t.x = -e.x, t.y = -e
				.y, t.z = -e.z) : (t.x = e.x, t.y = e.y, t.z = e.z)
		}
		static _randomInvertRoation(e, t, r, i) {
			var a;
			return r ? (r.seed = i[6], a = r.getFloat(), i[6] = r.seed) : a = Math.random(), a < t && (e = -e), e
		}
		static create(e, r, i) {
			var n = e.autoRandomSeed,
				s = e._rand,
				o = e._randomSeeds;
			switch (e.startColorType) {
				case 0:
					var l = e.startColorConstant;
					ut.startColor.x = l.x, ut.startColor.y = l.y, ut.startColor.z = l.z, ut.startColor.w = l.w;
					break;
				case 2:
					n ? a.lerp(e.startColorConstantMin, e.startColorConstantMax, Math.random(), ut.startColor) : (s
						.seed = o[3], a.lerp(e.startColorConstantMin, e.startColorConstantMax, s.getFloat(), ut
							.startColor), o[3] = s.seed)
			}
			var _ = e.colorOverLifetime;
			if (_ && _.enbale) {
				var h = _.color;
				switch (h.type) {
					case 0:
						ut.startColor.x = ut.startColor.x * h.constant.x, ut.startColor.y = ut.startColor.y * h
							.constant.y, ut.startColor.z = ut.startColor.z * h.constant.z, ut.startColor.w = ut
							.startColor.w * h.constant.w;
						break;
					case 2:
						var c;
						n ? c = Math.random() : (s.seed = o[10], c = s.getFloat(), o[10] = s.seed);
						var d = h.constantMin,
							u = h.constantMax;
						ut.startColor.x = ut.startColor.x * t.MathUtil.lerp(d.x, u.x, c), ut.startColor.y = ut
							.startColor.y * t.MathUtil.lerp(d.y, u.y, c), ut.startColor.z = ut.startColor.z * t
							.MathUtil.lerp(d.z, u.z, c), ut.startColor.w = ut.startColor.w * t.MathUtil.lerp(d.w, u
								.w, c)
				}
			}
			var f = ut.startSize;
			switch (e.startSizeType) {
				case 0:
					if (e.threeDStartSize) {
						var m = e.startSizeConstantSeparate;
						f[0] = m.x, f[1] = m.y, f[2] = m.z
					} else f[0] = f[1] = f[2] = e.startSizeConstant;
					break;
				case 2:
					if (e.threeDStartSize) {
						var E = e.startSizeConstantMinSeparate,
							T = e.startSizeConstantMaxSeparate;
						n ? (f[0] = t.MathUtil.lerp(E.x, T.x, Math.random()), f[1] = t.MathUtil.lerp(E.y, T.y, Math
							.random()), f[2] = t.MathUtil.lerp(E.z, T.z, Math.random())) : (s.seed = o[4], f[
							0] = t.MathUtil.lerp(E.x, T.x, s.getFloat()), f[1] = t.MathUtil.lerp(E.y, T.y, s
								.getFloat()), f[2] = t.MathUtil.lerp(E.z, T.z, s.getFloat()), o[4] = s.seed)
					} else n ? f[0] = f[1] = f[2] = t.MathUtil.lerp(e.startSizeConstantMin, e.startSizeConstantMax,
						Math.random()) : (s.seed = o[4], f[0] = f[1] = f[2] = t.MathUtil.lerp(e
						.startSizeConstantMin, e.startSizeConstantMax, s.getFloat()), o[4] = s.seed)
			}
			var p = e.sizeOverLifetime;
			if (p && p.enbale && 1 === p.size.type) {
				var g, S = p.size;
				if (S.separateAxes) n ? (f[0] = f[0] * t.MathUtil.lerp(S.constantMinSeparate.x, S
						.constantMaxSeparate.x, Math.random()), f[1] = f[1] * t.MathUtil.lerp(S
						.constantMinSeparate.y, S.constantMaxSeparate.y, Math.random()), f[2] = f[2] * t
					.MathUtil.lerp(S.constantMinSeparate.z, S.constantMaxSeparate.z, Math.random())) : (s.seed =
					o[11], f[0] = f[0] * t.MathUtil.lerp(S.constantMinSeparate.x, S.constantMaxSeparate.x, s
						.getFloat()), f[1] = f[1] * t.MathUtil.lerp(S.constantMinSeparate.y, S
						.constantMaxSeparate.y, s.getFloat()), f[2] = f[2] * t.MathUtil.lerp(S
						.constantMinSeparate.z, S.constantMaxSeparate.z, s.getFloat()), o[11] = s.seed);
				else n ? g = t.MathUtil.lerp(S.constantMin, S.constantMax, Math.random()) : (s.seed = o[11], g = t
						.MathUtil.lerp(S.constantMin, S.constantMax, s.getFloat()), o[11] = s.seed), f[0] = f[0] *
					g, f[1] = f[1] * g, f[2] = f[2] * g
			}
			var v = r.renderMode;
			if (1 !== v) switch (e.startRotationType) {
				case 0:
					if (e.threeDStartRotation) {
						var R = e.startRotationConstantSeparate,
							I = ut._tempVector30;
						ut._randomInvertRoationArray(R, I, e.randomizeRotationDirection, n ? null : s, o), ut
							.startRotation[0] = I.x, ut.startRotation[1] = I.y, ut.startRotation[2] = 4 !== v ?
							-I.z : I.z
					} else ut.startRotation[0] = ut._randomInvertRoation(e.startRotationConstant, e
							.randomizeRotationDirection, n ? null : s, o), ut.startRotation[1] = 0, ut
						.startRotation[2] = 0;
					break;
				case 2:
					if (e.threeDStartRotation) {
						var x = e.startRotationConstantMinSeparate,
							A = e.startRotationConstantMaxSeparate,
							D = ut._tempVector30;
						n ? (D.x = t.MathUtil.lerp(x.x, A.x, Math.random()), D.y = t.MathUtil.lerp(x.y, A.y,
								Math.random()), D.z = t.MathUtil.lerp(x.z, A.z, Math.random())) : (s.seed = o[
								5], D.x = t.MathUtil.lerp(x.x, A.x, s.getFloat()), D.y = t.MathUtil.lerp(x.y, A
									.y, s.getFloat()), D.z = t.MathUtil.lerp(x.z, A.z, s.getFloat()), o[5] = s
								.seed), ut._randomInvertRoationArray(D, D, e.randomizeRotationDirection, n ?
								null : s, o), ut.startRotation[0] = D.x, ut.startRotation[1] = D.y, ut
							.startRotation[2] = 4 !== v ? -D.z : D.z
					} else n ? ut.startRotation[0] = ut._randomInvertRoation(t.MathUtil.lerp(e
							.startRotationConstantMin, e.startRotationConstantMax, Math.random()), e
						.randomizeRotationDirection, n ? null : s, o) : (s.seed = o[5], ut.startRotation[
						0] = ut._randomInvertRoation(t.MathUtil.lerp(e.startRotationConstantMin, e
								.startRotationConstantMax, s.getFloat()), e.randomizeRotationDirection, n ?
							null : s, o), o[5] = s.seed)
			}
			switch (e.startLifetimeType) {
				case 0:
					ut.startLifeTime = e.startLifetimeConstant;
					break;
				case 1:
					ut.startLifeTime = ut._getStartLifetimeFromGradient(e.startLifeTimeGradient, e.emissionTime);
					break;
				case 2:
					n ? ut.startLifeTime = t.MathUtil.lerp(e.startLifetimeConstantMin, e.startLifetimeConstantMax,
						Math.random()) : (s.seed = o[7], ut.startLifeTime = t.MathUtil.lerp(e
						.startLifetimeConstantMin, e.startLifetimeConstantMax, s.getFloat()), o[7] = s.seed);
					break;
				case 3:
					var M = e.emissionTime;
					n ? ut.startLifeTime = t.MathUtil.lerp(ut._getStartLifetimeFromGradient(e
						.startLifeTimeGradientMin, M), ut._getStartLifetimeFromGradient(e
						.startLifeTimeGradientMax, M), Math.random()) : (s.seed = o[7], ut.startLifeTime = t
						.MathUtil.lerp(ut._getStartLifetimeFromGradient(e.startLifeTimeGradientMin, M), ut
							._getStartLifetimeFromGradient(e.startLifeTimeGradientMax, M), s.getFloat()), o[7] =
						s.seed)
			}
			var L = e.textureSheetAnimation;
			if (L && L.enable) {
				var C, y = L.tiles,
					O = y.x,
					N = y.y,
					P = 1 / O,
					w = 1 / N,
					V = L.startFrame;
				switch (V.type) {
					case 0:
						C = V.constant;
						break;
					case 1:
						n ? C = t.MathUtil.lerp(V.constantMin, V.constantMax, Math.random()) : (s.seed = o[14], C =
							t.MathUtil.lerp(V.constantMin, V.constantMax, s.getFloat()), o[14] = s.seed)
				}
				var b = L.frame,
					F = L.cycles;
				switch (b.type) {
					case 0:
						C += b.constant * F;
						break;
					case 2:
						n ? C += t.MathUtil.lerp(b.constantMin, b.constantMax, Math.random()) * F : (s.seed = o[15],
							C += t.MathUtil.lerp(b.constantMin, b.constantMax, s.getFloat()) * F, o[15] = s.seed
							)
				}
				var B = 0;
				switch (L.type) {
					case 0:
						B = Math.floor(C / O);
						break;
					case 1:
						L.randomRow ? n ? B = Math.floor(Math.random() * N) : (s.seed = o[13], B = Math.floor(s
							.getFloat() * N), o[13] = s.seed) : B = L.rowIndex
				}
				var U = Math.floor(C % O);
				ut.startUVInfo = ut.startUVInfo, ut.startUVInfo[0] = P, ut.startUVInfo[1] = w, ut.startUVInfo[2] =
					U * P, ut.startUVInfo[3] = B * w
			} else ut.startUVInfo = ut.startUVInfo, ut.startUVInfo[0] = 1, ut.startUVInfo[1] = 1, ut.startUVInfo[
				2] = 0, ut.startUVInfo[3] = 0
		}
	}
	ut._tempVector30 = new n, ut.startColor = new a, ut.startSize = new Float32Array(3), ut.startRotation =
		new Float32Array(3), ut.startUVInfo = new Float32Array(4);
	class ft extends _e {
		constructor(e) {
			super(), this._tempRotationMatrix = new p, this._boundingSphere = null, this._boundingBox = null, this
				._boundingBoxCorners = null, this._owner = null, this._ownerRender = null, this._vertices = null,
				this._floatCountPerVertex = 0, this._startLifeTimeIndex = 0, this._timeIndex = 0, this
				._simulateUpdate = !1, this._firstActiveElement = 0, this._firstNewElement = 0, this
				._firstFreeElement = 0, this._firstRetiredElement = 0, this._drawCounter = 0, this
				._bufferMaxParticles = 0, this._emission = null, this._shape = null, this._isEmitting = !1, this
				._isPlaying = !1, this._isPaused = !1, this._playStartDelay = 0, this._frameRateTime = 0, this
				._emissionTime = 0, this._totalDelayTime = 0, this._burstsIndex = 0, this._velocityOverLifetime =
				null, this._colorOverLifetime = null, this._sizeOverLifetime = null, this._rotationOverLifetime =
				null, this._textureSheetAnimation = null, this._startLifetimeType = 0, this._startLifetimeConstant =
				0, this._startLifeTimeGradient = null, this._startLifetimeConstantMin = 0, this
				._startLifetimeConstantMax = 0, this._startLifeTimeGradientMin = null, this
				._startLifeTimeGradientMax = null, this._maxStartLifetime = 0, this._uvLength = new i, this
				._vertexStride = 0, this._indexStride = 0, this._vertexBuffer = null, this._indexBuffer = null, this
				._bufferState = new De, this._currentTime = 0, this._startUpdateLoopCount = 0, this._rand = null,
				this._randomSeeds = null, this.duration = 0, this.looping = !1, this.prewarm = !1, this
				.startDelayType = 0, this.startDelay = 0, this.startDelayMin = 0, this.startDelayMax = 0, this
				.startSpeedType = 0, this.startSpeedConstant = 0, this.startSpeedConstantMin = 0, this
				.startSpeedConstantMax = 0, this.threeDStartSize = !1, this.startSizeType = 0, this
				.startSizeConstant = 0, this.startSizeConstantSeparate = null, this.startSizeConstantMin = 0, this
				.startSizeConstantMax = 0, this.startSizeConstantMinSeparate = null, this
				.startSizeConstantMaxSeparate = null, this.threeDStartRotation = !1, this.startRotationType = 0,
				this.startRotationConstant = 0, this.startRotationConstantSeparate = null, this
				.startRotationConstantMin = 0, this.startRotationConstantMax = 0, this
				.startRotationConstantMinSeparate = null, this.startRotationConstantMaxSeparate = null, this
				.randomizeRotationDirection = 0, this.startColorType = 0, this.startColorConstant = null, this
				.startColorConstantMin = null, this.startColorConstantMax = null, this.gravityModifier = 0, this
				.simulationSpace = 0, this.simulationSpeed = 1, this.scaleMode = 0, this.playOnAwake = !1, this
				.randomSeed = null, this.autoRandomSeed = !1, this.isPerformanceMode = !1, this
				._firstActiveElement = 0, this._firstNewElement = 0, this._firstFreeElement = 0, this
				._firstRetiredElement = 0, this._owner = e, this._ownerRender = e.particleRenderer, this
				._boundingBoxCorners = [], this._boundingSphere = new _t(new n, Number.MAX_VALUE), this
				._boundingBox = new Ye(new n(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE), new n(Number
					.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)), this._currentTime = 0, this._isEmitting = !1,
				this._isPlaying = !1, this._isPaused = !1, this._burstsIndex = 0, this._frameRateTime = 0, this
				._emissionTime = 0, this._totalDelayTime = 0, this._simulateUpdate = !1, this._bufferMaxParticles =
				1, this.duration = 5, this.looping = !0, this.prewarm = !1, this.startDelayType = 0, this
				.startDelay = 0, this.startDelayMin = 0, this.startDelayMax = 0, this._startLifetimeType = 0, this
				._startLifetimeConstant = 5, this._startLifeTimeGradient = new dt, this._startLifetimeConstantMin =
				0, this._startLifetimeConstantMax = 5, this._startLifeTimeGradientMin = new dt, this
				._startLifeTimeGradientMax = new dt, this._maxStartLifetime = 5, this.startSpeedType = 0, this
				.startSpeedConstant = 5, this.startSpeedConstantMin = 0, this.startSpeedConstantMax = 5, this
				.threeDStartSize = !1, this.startSizeType = 0, this.startSizeConstant = 1, this
				.startSizeConstantSeparate = new n(1, 1, 1), this.startSizeConstantMin = 0, this
				.startSizeConstantMax = 1, this.startSizeConstantMinSeparate = new n(0, 0, 0), this
				.startSizeConstantMaxSeparate = new n(1, 1, 1), this.threeDStartRotation = !1, this
				.startRotationType = 0, this.startRotationConstant = 0, this.startRotationConstantSeparate = new n(
					0, 0, 0), this.startRotationConstantMin = 0, this.startRotationConstantMax = 0, this
				.startRotationConstantMinSeparate = new n(0, 0, 0), this.startRotationConstantMaxSeparate = new n(0,
					0, 0), this.randomizeRotationDirection = 0, this.startColorType = 0, this.startColorConstant =
				new a(1, 1, 1, 1), this.startColorConstantMin = new a(1, 1, 1, 1), this.startColorConstantMax =
				new a(1, 1, 1, 1), this.gravityModifier = 0, this.simulationSpace = 1, this.scaleMode = 0, this
				.playOnAwake = !0, this._rand = new ht(0), this.autoRandomSeed = !0, this.randomSeed =
				new Uint32Array(1), this._randomSeeds = new Uint32Array(ft._RANDOMOFFSET.length), this
				.isPerformanceMode = !0, this._emission = new ct, this._emission.enbale = !0
		}
		get maxParticles() {
			return this._bufferMaxParticles - 1
		}
		set maxParticles(e) {
			var t = e + 1;
			t !== this._bufferMaxParticles && (this._bufferMaxParticles = t, this._initBufferDatas())
		}
		get emission() {
			return this._emission
		}
		get aliveParticleCount() {
			return this._firstNewElement >= this._firstRetiredElement ? this._firstNewElement - this
				._firstRetiredElement : this._bufferMaxParticles - this._firstRetiredElement + this._firstNewElement
		}
		get emissionTime() {
			return this._emissionTime > this.duration ? this.duration : this._emissionTime
		}
		get shape() {
			return this._shape
		}
		set shape(e) {
			this._shape !== e && (e && e.enable ? this._owner._render._shaderValues.addDefine(at
				.SHADERDEFINE_SHAPE) : this._owner._render._shaderValues.removeDefine(at.SHADERDEFINE_SHAPE),
				this._shape = e)
		}
		get isAlive() {
			return !!(this._isPlaying || this.aliveParticleCount > 0)
		}
		get isEmitting() {
			return this._isEmitting
		}
		get isPlaying() {
			return this._isPlaying
		}
		get isPaused() {
			return this._isPaused
		}
		get startLifetimeType() {
			return this._startLifetimeType
		}
		set startLifetimeType(e) {
			var t, r;
			switch (this.startLifetimeType) {
				case 0:
					this._maxStartLifetime = this.startLifetimeConstant;
					break;
				case 1:
					this._maxStartLifetime = -Number.MAX_VALUE;
					var i = i;
					for (t = 0, r = i.gradientCount; t < r; t++) this._maxStartLifetime = Math.max(this
						._maxStartLifetime, i.getValueByIndex(t));
					break;
				case 2:
					this._maxStartLifetime = Math.max(this.startLifetimeConstantMin, this.startLifetimeConstantMax);
					break;
				case 3:
					this._maxStartLifetime = -Number.MAX_VALUE;
					var a = a;
					for (t = 0, r = a.gradientCount; t < r; t++) this._maxStartLifetime = Math.max(this
						._maxStartLifetime, a.getValueByIndex(t));
					var n = n;
					for (t = 0, r = n.gradientCount; t < r; t++) this._maxStartLifetime = Math.max(this
						._maxStartLifetime, n.getValueByIndex(t))
			}
			this._startLifetimeType = e
		}
		get startLifetimeConstant() {
			return this._startLifetimeConstant
		}
		set startLifetimeConstant(e) {
			0 === this._startLifetimeType && (this._maxStartLifetime = e), this._startLifetimeConstant = e
		}
		get startLifeTimeGradient() {
			return this._startLifeTimeGradient
		}
		set startLifeTimeGradient(e) {
			if (1 === this._startLifetimeType) {
				this._maxStartLifetime = -Number.MAX_VALUE;
				for (var t = 0, r = e.gradientCount; t < r; t++) this._maxStartLifetime = Math.max(this
					._maxStartLifetime, e.getValueByIndex(t))
			}
			this._startLifeTimeGradient = e
		}
		get startLifetimeConstantMin() {
			return this._startLifetimeConstantMin
		}
		set startLifetimeConstantMin(e) {
			2 === this._startLifetimeType && (this._maxStartLifetime = Math.max(e, this._startLifetimeConstantMax)),
				this._startLifetimeConstantMin = e
		}
		get startLifetimeConstantMax() {
			return this._startLifetimeConstantMax
		}
		set startLifetimeConstantMax(e) {
			2 === this._startLifetimeType && (this._maxStartLifetime = Math.max(this._startLifetimeConstantMin, e)),
				this._startLifetimeConstantMax = e
		}
		get startLifeTimeGradientMin() {
			return this._startLifeTimeGradientMin
		}
		set startLifeTimeGradientMin(e) {
			if (3 === this._startLifetimeType) {
				var t, r;
				for (this._maxStartLifetime = -Number.MAX_VALUE, t = 0, r = e.gradientCount; t < r; t++) this
					._maxStartLifetime = Math.max(this._maxStartLifetime, e.getValueByIndex(t));
				for (t = 0, r = this._startLifeTimeGradientMax.gradientCount; t < r; t++) this._maxStartLifetime =
					Math.max(this._maxStartLifetime, this._startLifeTimeGradientMax.getValueByIndex(t))
			}
			this._startLifeTimeGradientMin = e
		}
		get startLifeTimeGradientMax() {
			return this._startLifeTimeGradientMax
		}
		set startLifeTimeGradientMax(e) {
			if (3 === this._startLifetimeType) {
				var t, r;
				for (this._maxStartLifetime = -Number.MAX_VALUE, t = 0, r = this._startLifeTimeGradientMin
					.gradientCount; t < r; t++) this._maxStartLifetime = Math.max(this._maxStartLifetime, this
					._startLifeTimeGradientMin.getValueByIndex(t));
				for (t = 0, r = e.gradientCount; t < r; t++) this._maxStartLifetime = Math.max(this
					._maxStartLifetime, e.getValueByIndex(t))
			}
			this._startLifeTimeGradientMax = e
		}
		get velocityOverLifetime() {
			return this._velocityOverLifetime
		}
		set velocityOverLifetime(e) {
			var t = this._owner._render._shaderValues;
			if (e) {
				var r = e.velocity,
					i = r.type;
				if (e.enbale) switch (i) {
					case 0:
						t.addDefine(at.SHADERDEFINE_VELOCITYOVERLIFETIMECONSTANT);
						break;
					case 1:
						t.addDefine(at.SHADERDEFINE_VELOCITYOVERLIFETIMECURVE);
						break;
					case 2:
						t.addDefine(at.SHADERDEFINE_VELOCITYOVERLIFETIMERANDOMCONSTANT);
						break;
					case 3:
						t.addDefine(at.SHADERDEFINE_VELOCITYOVERLIFETIMERANDOMCURVE)
				} else t.removeDefine(at.SHADERDEFINE_VELOCITYOVERLIFETIMECONSTANT), t.removeDefine(at
					.SHADERDEFINE_VELOCITYOVERLIFETIMECURVE), t.removeDefine(at
					.SHADERDEFINE_VELOCITYOVERLIFETIMERANDOMCONSTANT), t.removeDefine(at
					.SHADERDEFINE_VELOCITYOVERLIFETIMERANDOMCURVE);
				switch (i) {
					case 0:
						t.setVector3(at.VOLVELOCITYCONST, r.constant);
						break;
					case 1:
						t.setBuffer(at.VOLVELOCITYGRADIENTX, r.gradientX._elements), t.setBuffer(at
							.VOLVELOCITYGRADIENTY, r.gradientY._elements), t.setBuffer(at.VOLVELOCITYGRADIENTZ,
							r.gradientZ._elements);
						break;
					case 2:
						t.setVector3(at.VOLVELOCITYCONST, r.constantMin), t.setVector3(at.VOLVELOCITYCONSTMAX, r
							.constantMax);
						break;
					case 3:
						t.setBuffer(at.VOLVELOCITYGRADIENTX, r.gradientXMin._elements), t.setBuffer(at
							.VOLVELOCITYGRADIENTXMAX, r.gradientXMax._elements), t.setBuffer(at
							.VOLVELOCITYGRADIENTY, r.gradientYMin._elements), t.setBuffer(at
							.VOLVELOCITYGRADIENTYMAX, r.gradientYMax._elements), t.setBuffer(at
							.VOLVELOCITYGRADIENTZ, r.gradientZMin._elements), t.setBuffer(at
							.VOLVELOCITYGRADIENTZMAX, r.gradientZMax._elements)
				}
				t.setInt(at.VOLSPACETYPE, e.space)
			} else t.removeDefine(at.SHADERDEFINE_VELOCITYOVERLIFETIMECONSTANT), t.removeDefine(at
				.SHADERDEFINE_VELOCITYOVERLIFETIMECURVE), t.removeDefine(at
				.SHADERDEFINE_VELOCITYOVERLIFETIMERANDOMCONSTANT), t.removeDefine(at
				.SHADERDEFINE_VELOCITYOVERLIFETIMERANDOMCURVE);
			this._velocityOverLifetime = e
		}
		get colorOverLifetime() {
			return this._colorOverLifetime
		}
		set colorOverLifetime(e) {
			var t = this._owner._render._shaderValues;
			if (e) {
				var r = e.color;
				if (e.enbale) switch (r.type) {
					case 1:
						t.addDefine(at.SHADERDEFINE_COLOROVERLIFETIME);
						break;
					case 3:
						t.addDefine(at.SHADERDEFINE_RANDOMCOLOROVERLIFETIME)
				} else t.removeDefine(at.SHADERDEFINE_COLOROVERLIFETIME), t.removeDefine(at
					.SHADERDEFINE_RANDOMCOLOROVERLIFETIME);
				switch (r.type) {
					case 1:
						var i = r.gradient;
						t.setBuffer(at.COLOROVERLIFEGRADIENTALPHAS, i._alphaElements), t.setBuffer(at
							.COLOROVERLIFEGRADIENTCOLORS, i._rgbElements);
						break;
					case 3:
						var a = r.gradientMin,
							n = r.gradientMax;
						t.setBuffer(at.COLOROVERLIFEGRADIENTALPHAS, a._alphaElements), t.setBuffer(at
							.COLOROVERLIFEGRADIENTCOLORS, a._rgbElements), t.setBuffer(at
							.MAXCOLOROVERLIFEGRADIENTALPHAS, n._alphaElements), t.setBuffer(at
							.MAXCOLOROVERLIFEGRADIENTCOLORS, n._rgbElements)
				}
			} else t.removeDefine(at.SHADERDEFINE_COLOROVERLIFETIME), t.removeDefine(at
				.SHADERDEFINE_RANDOMCOLOROVERLIFETIME), t.setBuffer(at.COLOROVERLIFEGRADIENTALPHAS, i
				._alphaElements), t.setBuffer(at.COLOROVERLIFEGRADIENTCOLORS, i._rgbElements), t.setBuffer(at
				.COLOROVERLIFEGRADIENTALPHAS, a._alphaElements), t.setBuffer(at.COLOROVERLIFEGRADIENTCOLORS, a
				._rgbElements), t.setBuffer(at.MAXCOLOROVERLIFEGRADIENTALPHAS, n._alphaElements), t.setBuffer(at
				.MAXCOLOROVERLIFEGRADIENTCOLORS, n._rgbElements);
			this._colorOverLifetime = e
		}
		get sizeOverLifetime() {
			return this._sizeOverLifetime
		}
		set sizeOverLifetime(e) {
			var t = this._owner._render._shaderValues;
			if (e) {
				var r = e.size,
					i = r.separateAxes,
					a = r.type;
				if (e.enbale) switch (a) {
					case 0:
						i ? t.addDefine(at.SHADERDEFINE_SIZEOVERLIFETIMECURVESEPERATE) : t.addDefine(at
							.SHADERDEFINE_SIZEOVERLIFETIMECURVE);
						break;
					case 2:
						i ? t.addDefine(at.SHADERDEFINE_SIZEOVERLIFETIMERANDOMCURVESSEPERATE) : t.addDefine(at
							.SHADERDEFINE_SIZEOVERLIFETIMERANDOMCURVES)
				} else t.removeDefine(at.SHADERDEFINE_SIZEOVERLIFETIMECURVE), t.removeDefine(at
					.SHADERDEFINE_SIZEOVERLIFETIMECURVESEPERATE), t.removeDefine(at
					.SHADERDEFINE_SIZEOVERLIFETIMERANDOMCURVES), t.removeDefine(at
					.SHADERDEFINE_SIZEOVERLIFETIMERANDOMCURVESSEPERATE);
				switch (a) {
					case 0:
						i ? (t.setBuffer(at.SOLSIZEGRADIENTX, r.gradientX._elements), t.setBuffer(at
							.SOLSIZEGRADIENTY, r.gradientY._elements), t.setBuffer(at.SOLSizeGradientZ, r
							.gradientZ._elements)) : t.setBuffer(at.SOLSIZEGRADIENT, r.gradient._elements);
						break;
					case 2:
						i ? (t.setBuffer(at.SOLSIZEGRADIENTX, r.gradientXMin._elements), t.setBuffer(at
							.SOLSIZEGRADIENTXMAX, r.gradientXMax._elements), t.setBuffer(at
							.SOLSIZEGRADIENTY, r.gradientYMin._elements), t.setBuffer(at
							.SOLSIZEGRADIENTYMAX, r.gradientYMax._elements), t.setBuffer(at
							.SOLSizeGradientZ, r.gradientZMin._elements), t.setBuffer(at
							.SOLSizeGradientZMAX, r.gradientZMax._elements)) : (t.setBuffer(at.SOLSIZEGRADIENT,
							r.gradientMin._elements), t.setBuffer(at.SOLSizeGradientMax, r.gradientMax
							._elements))
				}
			} else t.removeDefine(at.SHADERDEFINE_SIZEOVERLIFETIMECURVE), t.removeDefine(at
				.SHADERDEFINE_SIZEOVERLIFETIMECURVESEPERATE), t.removeDefine(at
				.SHADERDEFINE_SIZEOVERLIFETIMERANDOMCURVES), t.removeDefine(at
				.SHADERDEFINE_SIZEOVERLIFETIMERANDOMCURVESSEPERATE);
			this._sizeOverLifetime = e
		}
		get rotationOverLifetime() {
			return this._rotationOverLifetime
		}
		set rotationOverLifetime(e) {
			var t = this._owner._render._shaderValues;
			if (e) {
				var r = e.angularVelocity;
				if (!r) return;
				var i = r.separateAxes,
					a = r.type;
				if (e.enbale) switch (i ? t.addDefine(at.SHADERDEFINE_ROTATIONOVERLIFETIMESEPERATE) : t.addDefine(at
					.SHADERDEFINE_ROTATIONOVERLIFETIME), a) {
					case 0:
						t.addDefine(at.SHADERDEFINE_ROTATIONOVERLIFETIMECONSTANT);
						break;
					case 1:
						t.addDefine(at.SHADERDEFINE_ROTATIONOVERLIFETIMECURVE);
						break;
					case 2:
						t.addDefine(at.SHADERDEFINE_ROTATIONOVERLIFETIMERANDOMCONSTANTS);
						break;
					case 3:
						t.addDefine(at.SHADERDEFINE_ROTATIONOVERLIFETIMERANDOMCURVES)
				} else t.removeDefine(at.SHADERDEFINE_ROTATIONOVERLIFETIME), t.removeDefine(at
					.SHADERDEFINE_ROTATIONOVERLIFETIMESEPERATE), t.removeDefine(at
					.SHADERDEFINE_ROTATIONOVERLIFETIMECONSTANT), t.removeDefine(at
					.SHADERDEFINE_ROTATIONOVERLIFETIMECURVE), t.removeDefine(at
					.SHADERDEFINE_ROTATIONOVERLIFETIMERANDOMCONSTANTS), t.removeDefine(at
					.SHADERDEFINE_ROTATIONOVERLIFETIMERANDOMCURVES);
				switch (a) {
					case 0:
						i ? t.setVector3(at.ROLANGULARVELOCITYCONSTSEPRARATE, r.constantSeparate) : t.setNumber(at
							.ROLANGULARVELOCITYCONST, r.constant);
						break;
					case 1:
						i ? (t.setBuffer(at.ROLANGULARVELOCITYGRADIENTX, r.gradientX._elements), t.setBuffer(at
							.ROLANGULARVELOCITYGRADIENTY, r.gradientY._elements), t.setBuffer(at
							.ROLANGULARVELOCITYGRADIENTZ, r.gradientZ._elements)) : t.setBuffer(at
							.ROLANGULARVELOCITYGRADIENT, r.gradient._elements);
						break;
					case 2:
						i ? (t.setVector3(at.ROLANGULARVELOCITYCONSTSEPRARATE, r.constantMinSeparate), t.setVector3(
							at.ROLANGULARVELOCITYCONSTMAXSEPRARATE, r.constantMaxSeparate)) : (t.setNumber(at
							.ROLANGULARVELOCITYCONST, r.constantMin), t.setNumber(at
							.ROLANGULARVELOCITYCONSTMAX, r.constantMax));
						break;
					case 3:
						i ? (t.setBuffer(at.ROLANGULARVELOCITYGRADIENTX, r.gradientXMin._elements), t.setBuffer(at
							.ROLANGULARVELOCITYGRADIENTXMAX, r.gradientXMax._elements), t.setBuffer(at
							.ROLANGULARVELOCITYGRADIENTY, r.gradientYMin._elements), t.setBuffer(at
							.ROLANGULARVELOCITYGRADIENTYMAX, r.gradientYMax._elements), t.setBuffer(at
							.ROLANGULARVELOCITYGRADIENTZ, r.gradientZMin._elements), t.setBuffer(at
							.ROLANGULARVELOCITYGRADIENTZMAX, r.gradientZMax._elements)) : (t.setBuffer(at
							.ROLANGULARVELOCITYGRADIENT, r.gradientMin._elements), t.setBuffer(at
							.ROLANGULARVELOCITYGRADIENTMAX, r.gradientMax._elements))
				}
			} else t.removeDefine(at.SHADERDEFINE_ROTATIONOVERLIFETIME), t.removeDefine(at
				.SHADERDEFINE_ROTATIONOVERLIFETIMESEPERATE), t.removeDefine(at
				.SHADERDEFINE_ROTATIONOVERLIFETIMECONSTANT), t.removeDefine(at
				.SHADERDEFINE_ROTATIONOVERLIFETIMECURVE), t.removeDefine(at
				.SHADERDEFINE_ROTATIONOVERLIFETIMERANDOMCONSTANTS), t.removeDefine(at
				.SHADERDEFINE_ROTATIONOVERLIFETIMERANDOMCURVES);
			this._rotationOverLifetime = e
		}
		get textureSheetAnimation() {
			return this._textureSheetAnimation
		}
		set textureSheetAnimation(e) {
			var t = this._owner._render._shaderValues;
			if (e) {
				var r = e.frame,
					i = r.type;
				if (e.enable) switch (i) {
					case 1:
						t.addDefine(at.SHADERDEFINE_TEXTURESHEETANIMATIONCURVE);
						break;
					case 3:
						t.addDefine(at.SHADERDEFINE_TEXTURESHEETANIMATIONRANDOMCURVE)
				} else t.removeDefine(at.SHADERDEFINE_TEXTURESHEETANIMATIONCURVE), t.removeDefine(at
					.SHADERDEFINE_TEXTURESHEETANIMATIONRANDOMCURVE);
				if (1 === i || 3 === i) {
					t.setNumber(at.TEXTURESHEETANIMATIONCYCLES, e.cycles);
					var a = e.tiles,
						n = this._uvLength;
					n.x = 1 / a.x, n.y = 1 / a.y, t.setVector2(at.TEXTURESHEETANIMATIONSUBUVLENGTH, this._uvLength)
				}
				switch (i) {
					case 1:
						t.setBuffer(at.TEXTURESHEETANIMATIONGRADIENTUVS, r.frameOverTimeData._elements);
						break;
					case 3:
						t.setBuffer(at.TEXTURESHEETANIMATIONGRADIENTUVS, r.frameOverTimeDataMin._elements), t
							.setBuffer(at.TEXTURESHEETANIMATIONGRADIENTMAXUVS, r.frameOverTimeDataMax._elements)
				}
			} else t.removeDefine(at.SHADERDEFINE_TEXTURESHEETANIMATIONCURVE), t.removeDefine(at
				.SHADERDEFINE_TEXTURESHEETANIMATIONRANDOMCURVE);
			this._textureSheetAnimation = e
		}
		_getVertexBuffer(e = 0) {
			return 0 === e ? this._vertexBuffer : null
		}
		_getIndexBuffer() {
			return this._indexBuffer
		}
		_generateBoundingSphere() {
			var e = this._boundingSphere.center;
			e.x = 0, e.y = 0, e.z = 0, this._boundingSphere.radius = Number.MAX_VALUE
		}
		_generateBoundingBox() {
			var e, t, r, i, a, s, o, l, _, h = this._owner.particleRenderer,
				c = this._boundingBox.min,
				d = this._boundingBox.max;
			switch (this.startLifetimeType) {
				case 0:
					r = this.startLifetimeConstant;
					break;
				case 1:
					r = -Number.MAX_VALUE;
					var u = u;
					for (e = 0, t = u.gradientCount; e < t; e++) r = Math.max(r, u.getValueByIndex(e));
					break;
				case 2:
					r = Math.max(this.startLifetimeConstantMin, this.startLifetimeConstantMax);
					break;
				case 3:
					r = -Number.MAX_VALUE;
					var f = f;
					for (e = 0, t = f.gradientCount; e < t; e++) r = Math.max(r, f.getValueByIndex(e));
					var m = m;
					for (e = 0, t = m.gradientCount; e < t; e++) r = Math.max(r, m.getValueByIndex(e))
			}
			switch (this.startSpeedType) {
				case 0:
					i = a = this.startSpeedConstant;
					break;
				case 1:
					break;
				case 2:
					i = this.startLifetimeConstantMin, a = this.startLifetimeConstantMax
			}
			this._shape && this._shape.enable || (s = o = n._ZERO, l = n._ZERO, _ = n._UnitZ);
			var E, T, p = new n(l.x * i, l.y * i, l.z * i),
				g = new n(_.x * a, _.y * a, _.z * a);
			if (this._velocityOverLifetime && this._velocityOverLifetime.enbale) {
				var S = this._velocityOverLifetime.velocity;
				switch (S.type) {
					case 0:
						S.constant;
						break;
					case 1:
						new n(S.gradientX.getAverageValue(), S.gradientY.getAverageValue(), S.gradientZ
							.getAverageValue());
						break;
					case 2:
						S.constantMin, S.constantMax;
						break;
					case 3:
						new n(S.gradientXMin.getAverageValue(), S.gradientYMin.getAverageValue(), S.gradientZMin
							.getAverageValue()), new n(S.gradientXMax.getAverageValue(), S.gradientYMax
							.getAverageValue(), S.gradientZMax.getAverageValue())
				}
			}
			var v, R, I, x, A = this._owner.transform,
				D = A.position,
				M = ft._tempVector39,
				L = h.renderMode;
			switch (this.scaleMode) {
				case 0:
					var C = A.getWorldLossyScale();
					E = C, M.x = C.x, M.y = C.z, M.z = C.y, 1 === L && (T = C);
					break;
				case 1:
					var y = A.localScale;
					E = y, M.x = y.x, M.y = y.z, M.z = y.y, 1 === L && (T = y);
					break;
				case 2:
					E = A.getWorldLossyScale(), M.x = M.y = M.z = 1, 1 === L && (T = n._ONE)
			}
			switch (this._velocityOverLifetime && this._velocityOverLifetime.enbale || (v = new n(p.x * r, p.y * r,
				p.z * r), R = new n(g.x * r, g.y * r, g.z * r), 2 != this.scaleMode ? (n.add(s, v, c), n
				.multiply(E, c, c), n.add(o, R, d), n.multiply(E, d, d)) : (n.multiply(E, s, c), n.add(c, v,
				c), n.multiply(E, o, d), n.add(d, R, d))), this.simulationSpace) {
				case 0:
					break;
				case 1:
					n.add(c, D, c), n.add(d, D, d)
			}
			switch (this.startSizeType) {
				case 0:
					if (this.threeDStartSize) {
						var O = O;
						I = Math.max(O.x, O.y), 1 === L && (x = O.y)
					} else I = this.startSizeConstant, 1 === L && (x = this.startSizeConstant);
					break;
				case 1:
					break;
				case 2:
					if (this.threeDStartSize) {
						var N = N;
						I = Math.max(N.x, N.y), 1 === L && (x = N.y)
					} else I = this.startSizeConstantMax, 1 === L && (x = this.startSizeConstantMax)
			}
			if (this._sizeOverLifetime && this._sizeOverLifetime.enbale) {
				this._sizeOverLifetime.size;
				I *= this._sizeOverLifetime.size.getMaxSizeInGradient()
			}
			var P, w, V = ft._tempVector30;
			switch (L) {
				case 0:
					P = I * ft.halfKSqrtOf2, n.scale(M, I, V), n.subtract(c, V, c), n.add(d, V, d);
					break;
				case 1:
					var b = ft._tempVector31,
						F = ft._tempVector32,
						B = ft._tempVector33,
						U = ft._tempVector34;
					this._velocityOverLifetime && this._velocityOverLifetime.enbale || (n.multiply(T, g, F), n
						.multiply(T, p, B));
					var G = x * h.stretchedBillboardLengthScale,
						z = n.scalarLength(F) * h.stretchedBillboardSpeedScale + G,
						H = n.scalarLength(B) * h.stretchedBillboardSpeedScale + G,
						W = ft._tempVector35,
						k = ft._tempVector36;
					n.normalize(F, W), n.scale(W, z, U), n.subtract(R, U, U), n.normalize(B, k), n.scale(k, H, b), n
						.add(v, b, b), P = I * ft.halfKSqrtOf2, n.scale(M, P, V);
					var X = ft._tempVector37,
						Y = ft._tempVector38;
					n.scale(W, .5, X), n.scale(k, .5, Y), n.multiply(X, M, X), n.multiply(Y, M, Y), n.add(c, Y, c),
						n.min(c, U, c), n.subtract(c, V, c), n.subtract(d, X, d), n.max(d, b, d), n.add(d, V, d);
					break;
				case 2:
					w = .5 * (I *= Math.cos(.7853981633974483)), V.x = M.x * w, V.y = M.z * w, n.subtract(c, V, c),
						n.add(d, V, d);
					break;
				case 3:
					w = .5 * (I *= Math.cos(.7853981633974483)), n.scale(M, w, V), n.subtract(c, V, c), n.add(d, V,
						d)
			}
			this._boundingBox.getCorners(this._boundingBoxCorners)
		}
		_updateEmission() {
			if (this.isAlive)
				if (this._simulateUpdate) this._simulateUpdate = !1;
				else {
					var e = this._startUpdateLoopCount === t.Stat.loopCount || this._isPaused ? 0 : this._owner
						._scene.timer._delta / 1e3;
					e = Math.min(ft._maxElapsedTime, e * this.simulationSpeed), this._updateParticles(e)
				}
		}
		_updateParticles(e) {
			(4 !== this._ownerRender.renderMode || this._ownerRender.mesh) && (this._currentTime += e, this
				._retireActiveParticles(), this._freeRetiredParticles(), this._totalDelayTime += e, this
				._totalDelayTime < this._playStartDelay || this._emission.enbale && this._isEmitting && !this
				._isPaused && this._advanceTime(e, this._currentTime))
		}
		_updateParticlesSimulationRestart(e) {
			this._firstActiveElement = 0, this._firstNewElement = 0, this._firstFreeElement = 0, this
				._firstRetiredElement = 0, this._burstsIndex = 0, this._frameRateTime = e, this._emissionTime = 0,
				this._totalDelayTime = 0, this._currentTime = e;
			var t = e;
			t < this._playStartDelay ? this._totalDelayTime = t : this._emission.enbale && this._advanceTime(e, e)
		}
		_retireActiveParticles() {
			for (; this._firstActiveElement != this._firstNewElement;) {
				var e = this._firstActiveElement * this._floatCountPerVertex * this._vertexStride,
					t = e + this._timeIndex;
				if (this._currentTime - this._vertices[t] + 1e-4 < this._vertices[e + this._startLifeTimeIndex])
					break;
				this._vertices[t] = this._drawCounter, this._firstActiveElement++, this._firstActiveElement >= this
					._bufferMaxParticles && (this._firstActiveElement = 0)
			}
		}
		_freeRetiredParticles() {
			for (; this._firstRetiredElement != this._firstActiveElement;) {
				var e = this._drawCounter - this._vertices[this._firstRetiredElement * this._floatCountPerVertex *
					this._vertexStride + this._timeIndex];
				if (this.isPerformanceMode && e < 3) break;
				this._firstRetiredElement++, this._firstRetiredElement >= this._bufferMaxParticles && (this
					._firstRetiredElement = 0)
			}
		}
		_burst(e, r) {
			for (var i = 0, a = this._emission._bursts, n = a.length; this._burstsIndex < n; this._burstsIndex++) {
				var s, o = a[this._burstsIndex],
					l = o.time;
				if (!(e <= l && l < r)) break;
				this.autoRandomSeed ? s = t.MathUtil.lerp(o.minCount, o.maxCount, Math.random()) : (this._rand
					.seed = this._randomSeeds[0], s = t.MathUtil.lerp(o.minCount, o.maxCount, this._rand
						.getFloat()), this._randomSeeds[0] = this._rand.seed), i += s
			}
			return i
		}
		_advanceTime(e, t) {
			var r, i = this._emissionTime;
			this._emissionTime += e;
			var a = 0;
			if (this._emissionTime > this.duration) {
				if (!this.looping) {
					for (a = Math.min(this.maxParticles - this.aliveParticleCount, a), r = 0; r < a; r++) this.emit(
						t);
					return this._isPlaying = !1, void this.stop()
				}
				a += this._burst(i, this._emissionTime), this._emissionTime -= this.duration, this._burstsIndex = 0,
					a += this._burst(0, this._emissionTime)
			} else a += this._burst(i, this._emissionTime);
			for (a = Math.min(this.maxParticles - this.aliveParticleCount, a), r = 0; r < a; r++) this.emit(t);
			var n = this.emission.emissionRate;
			if (n > 0) {
				var s = 1 / n;
				for (this._frameRateTime += s, this._frameRateTime = this._currentTime - (this._currentTime - this
						._frameRateTime) % this._maxStartLifetime; this._frameRateTime <= t && this.emit(this
						._frameRateTime);) this._frameRateTime += s;
				this._frameRateTime = Math.floor(t / s) * s
			}
		}
		_initBufferDatas() {
			this._vertexBuffer && (this._vertexBuffer.destroy(), this._indexBuffer.destroy());
			var e = t.LayaGL.instance,
				r = this._ownerRender,
				i = r.renderMode;
			if (-1 !== i && this.maxParticles > 0) {
				var a, n, s, o, l, _, h, c = 0,
					d = 0,
					u = r.mesh;
				if (4 === i) {
					if (u) {
						h = lt.vertexDeclaration, this._floatCountPerVertex = h.vertexStride / 4, this
							._startLifeTimeIndex = 12, this._timeIndex = 16, this._vertexStride = u._vertexCount;
						var f = this._bufferMaxParticles * this._vertexStride,
							m = f % 65535;
						if (Math.floor(f / 65535) + 1 > 1) throw new Error(
							"ShurikenParticleSystem:the maxParticleCount multiply mesh vertexCount is large than 65535."
							);
						c = h.vertexStride * m, this._vertexBuffer = new he(c, e.DYNAMIC_DRAW), this._vertexBuffer
							.vertexDeclaration = h, this._vertices = new Float32Array(this._floatCountPerVertex *
							m), this._indexStride = u._indexBuffer.indexCount;
						var E = u._indexBuffer.getData(),
							T = this._bufferMaxParticles * this._indexStride;
						for (this._indexBuffer = new Me(Me.INDEXTYPE_USHORT, T, e.STATIC_DRAW), a = new Uint16Array(
								T), d = c + 2 * T, l = 0, n = 0; n < this._bufferMaxParticles; n++) {
							var p = n * this._vertexStride;
							for (s = 0, o = E.length; s < o; s++) a[l++] = p + E[s]
						}
						this._indexBuffer.setData(a), this._bufferState.bind(), this._bufferState.applyVertexBuffer(
								this._vertexBuffer), this._bufferState.applyIndexBuffer(this._indexBuffer), this
							._bufferState.unBind()
					}
				} else {
					for (h = ot.vertexDeclaration, this._floatCountPerVertex = h.vertexStride / 4, this
						._startLifeTimeIndex = 7, this._timeIndex = 11, this._vertexStride = 4, c = h.vertexStride *
						this._bufferMaxParticles * this._vertexStride, this._vertexBuffer = new he(c, e
							.DYNAMIC_DRAW), this._vertexBuffer.vertexDeclaration = h, this._vertices =
						new Float32Array(this._floatCountPerVertex * this._bufferMaxParticles * this._vertexStride),
						n = 0; n < this._bufferMaxParticles; n++) _ = n * this._floatCountPerVertex * this
						._vertexStride, this._vertices[_] = -.5, this._vertices[_ + 1] = -.5, this._vertices[_ +
						2] = 0, this._vertices[_ + 3] = 1, _ += this._floatCountPerVertex, this._vertices[_] = .5,
						this._vertices[_ + 1] = -.5, this._vertices[_ + 2] = 1, this._vertices[_ + 3] = 1, _ += this
						._floatCountPerVertex, this._vertices[_] = .5, this._vertices[_ + 1] = .5, this._vertices[
							_ + 2] = 1, this._vertices[_ + 3] = 0, _ += this._floatCountPerVertex, this._vertices[
						_] = -.5, this._vertices[_ + 1] = .5, this._vertices[_ + 2] = 0, this._vertices[_ + 3] = 0;
					for (this._indexStride = 6, this._indexBuffer = new Me(Me.INDEXTYPE_USHORT, 6 * this
							._bufferMaxParticles, e.STATIC_DRAW), a = new Uint16Array(6 * this._bufferMaxParticles),
						n = 0; n < this._bufferMaxParticles; n++) {
						l = 6 * n;
						var g = n * this._vertexStride,
							S = g + 2;
						a[l++] = g, a[l++] = S, a[l++] = g + 1, a[l++] = g, a[l++] = g + 3, a[l++] = S
					}
					this._indexBuffer.setData(a), d = c + 6 * this._bufferMaxParticles * 2, this._bufferState
					.bind(), this._bufferState.applyVertexBuffer(this._vertexBuffer), this._bufferState
						.applyIndexBuffer(this._indexBuffer), this._bufferState.unBind()
				}
				t.Resource._addMemory(d, d)
			}
		}
		destroy() {
			super.destroy();
			var e = this._vertexBuffer._byteLength + 2 * this._indexBuffer.indexCount;
			t.Resource._addMemory(-e, -e), this._bufferState.destroy(), this._vertexBuffer.destroy(), this
				._indexBuffer.destroy(), this._emission.destroy(), this._bufferState = null, this._vertexBuffer =
				null, this._indexBuffer = null, this._owner = null, this._vertices = null, this._indexBuffer = null,
				this._emission = null, this._shape = null, this.startLifeTimeGradient = null, this
				.startLifeTimeGradientMin = null, this.startLifeTimeGradientMax = null, this
				.startSizeConstantSeparate = null, this.startSizeConstantMinSeparate = null, this
				.startSizeConstantMaxSeparate = null, this.startRotationConstantSeparate = null, this
				.startRotationConstantMinSeparate = null, this.startRotationConstantMaxSeparate = null, this
				.startColorConstant = null, this.startColorConstantMin = null, this.startColorConstantMax = null,
				this._velocityOverLifetime = null, this._colorOverLifetime = null, this._sizeOverLifetime = null,
				this._rotationOverLifetime = null, this._textureSheetAnimation = null
		}
		emit(e) {
			var t = ft._tempPosition,
				r = ft._tempDirection;
			return this._shape && this._shape.enable ? this.autoRandomSeed ? this._shape
				.generatePositionAndDirection(t, r) : this._shape.generatePositionAndDirection(t, r, this._rand,
					this._randomSeeds) : (t.x = t.y = t.z = 0, r.x = r.y = 0, r.z = 1), this.addParticle(t, r, e)
		}
		addParticle(e, r, i) {
			n.normalize(r, r);
			var a = this._firstFreeElement + 1;
			if (a >= this._bufferMaxParticles && (a = 0), a === this._firstRetiredElement) return !1;
			var s, o, l, _, h, c, d, u, f, m, E = this._owner.transform;
			if (ut.create(this, this._ownerRender, E), this._currentTime - i >= ut.startLifeTime) return !0;
			switch (0 == this.simulationSpace && (s = E.position, o = E.rotation), this.startSpeedType) {
				case 0:
					l = this.startSpeedConstant;
					break;
				case 2:
					this.autoRandomSeed ? l = t.MathUtil.lerp(this.startSpeedConstantMin, this
						.startSpeedConstantMax, Math.random()) : (this._rand.seed = this._randomSeeds[8], l = t
						.MathUtil.lerp(this.startSpeedConstantMin, this.startSpeedConstantMax, this._rand
							.getFloat()), this._randomSeeds[8] = this._rand.seed)
			}
			var T = this._velocityOverLifetime && this._velocityOverLifetime.enbale;
			if (T) {
				var p = this._velocityOverLifetime.velocity.type;
				2 === p || 3 === p ? this.autoRandomSeed ? (_ = Math.random(), h = Math.random(), c = Math
				.random()) : (this._rand.seed = this._randomSeeds[9], _ = this._rand.getFloat(), h = this._rand
						.getFloat(), c = this._rand.getFloat(), this._randomSeeds[9] = this._rand.seed) : T = !1
			} else T = !1;
			var g = this._colorOverLifetime && this._colorOverLifetime.enbale;
			g ? 3 === this._colorOverLifetime.color.type ? this.autoRandomSeed ? d = Math.random() : (this._rand
				.seed = this._randomSeeds[10], d = this._rand.getFloat(), this._randomSeeds[10] = this._rand
				.seed) : g = !1 : g = !1;
			var S = this._sizeOverLifetime && this._sizeOverLifetime.enbale;
			S ? 3 === this._sizeOverLifetime.size.type ? this.autoRandomSeed ? u = Math.random() : (this._rand
				.seed = this._randomSeeds[11], u = this._rand.getFloat(), this._randomSeeds[11] = this._rand
				.seed) : S = !1 : S = !1;
			var v = this._rotationOverLifetime && this._rotationOverLifetime.enbale;
			if (v) {
				var R = this._rotationOverLifetime.angularVelocity.type;
				2 === R || 3 === R ? this.autoRandomSeed ? f = Math.random() : (this._rand.seed = this._randomSeeds[
					12], f = this._rand.getFloat(), this._randomSeeds[12] = this._rand.seed) : v = !1
			} else v = !1;
			var I = this._textureSheetAnimation && this._textureSheetAnimation.enable;
			I ? 3 === this._textureSheetAnimation.frame.type ? this.autoRandomSeed ? m = Math.random() : (this._rand
				.seed = this._randomSeeds[15], m = this._rand.getFloat(), this._randomSeeds[15] = this._rand
				.seed) : I = !1 : I = !1;
			var x, A, D, M, L, C, y = this._firstFreeElement * this._floatCountPerVertex * this._vertexStride,
				O = ut.startUVInfo[0],
				N = ut.startUVInfo[1],
				P = ut.startUVInfo[2],
				w = ut.startUVInfo[3],
				V = this._ownerRender;
			if (4 === V.renderMode) {
				var b = V.mesh._vertexBuffer;
				x = b.getFloat32Data();
				var F = b.vertexDeclaration;
				D = F.getVertexElementByUsage(fe.MESH_POSITION0)._offset / 4;
				var B = F.getVertexElementByUsage(fe.MESH_COLOR0);
				M = B ? B._offset / 4 : -1;
				var U = F.getVertexElementByUsage(fe.MESH_TEXTURECOORDINATE0);
				L = U ? U._offset / 4 : -1, A = F.vertexStride / 4, C = 0
			} else {
				this._vertices[y + 2] = P, this._vertices[y + 3] = w + N;
				var G = y + this._floatCountPerVertex;
				this._vertices[G + 2] = P + O, this._vertices[G + 3] = w + N;
				var z = G + this._floatCountPerVertex;
				this._vertices[z + 2] = P + O, this._vertices[z + 3] = w;
				var H = z + this._floatCountPerVertex;
				this._vertices[H + 2] = P, this._vertices[H + 3] = w
			}
			for (var W = y, k = y + this._floatCountPerVertex * this._vertexStride; W < k; W += this
				._floatCountPerVertex) {
				var X;
				if (4 === V.renderMode) {
					X = W;
					var Y = A * C++,
						Z = Y + D;
					this._vertices[X++] = x[Z++], this._vertices[X++] = x[Z++], this._vertices[X++] = x[Z], -1 ===
						M ? (this._vertices[X++] = 1, this._vertices[X++] = 1, this._vertices[X++] = 1, this
							._vertices[X++] = 1) : (Z = Y + M, this._vertices[X++] = x[Z++], this._vertices[X++] =
							x[Z++], this._vertices[X++] = x[Z++], this._vertices[X++] = x[Z]), -1 === L ? (this
							._vertices[X++] = 0, this._vertices[X++] = 0) : (Z = Y + L, this._vertices[X++] = P + x[
							Z++] * O, this._vertices[X++] = w + x[Z] * N)
				} else X = W + 4;
				switch (this._vertices[X++] = e.x, this._vertices[X++] = e.y, this._vertices[X++] = e.z, this
					._vertices[X++] = ut.startLifeTime, this._vertices[X++] = r.x, this._vertices[X++] = r.y, this
					._vertices[X++] = r.z, this._vertices[X++] = i, this._vertices[X++] = ut.startColor.x, this
					._vertices[X++] = ut.startColor.y, this._vertices[X++] = ut.startColor.z, this._vertices[X++] =
					ut.startColor.w, this._vertices[X++] = ut.startSize[0], this._vertices[X++] = ut.startSize[1],
					this._vertices[X++] = ut.startSize[2], this._vertices[X++] = ut.startRotation[0], this
					._vertices[X++] = ut.startRotation[1], this._vertices[X++] = ut.startRotation[2], this
					._vertices[X++] = l, g && (this._vertices[X + 1] = d), S && (this._vertices[X + 2] = u), v && (
						this._vertices[X + 3] = f), I && (this._vertices[X + 4] = m), T && (this._vertices[X + 5] =
						_, this._vertices[X + 6] = h, this._vertices[X + 7] = c), this.simulationSpace) {
					case 0:
						X += 8, this._vertices[X++] = s.x, this._vertices[X++] = s.y, this._vertices[X++] = s.z,
							this._vertices[X++] = o.x, this._vertices[X++] = o.y, this._vertices[X++] = o.z, this
							._vertices[X++] = o.w;
						break;
					case 1:
						break;
					default:
						throw new Error("ShurikenParticleMaterial: SimulationSpace value is invalid.")
				}
			}
			return this._firstFreeElement = a, !0
		}
		addNewParticlesToVertexBuffer() {
			var e, t = this._vertexStride * this._floatCountPerVertex * 4;
			this._firstNewElement < this._firstFreeElement ? (e = this._firstNewElement * t, this._vertexBuffer
					.setData(this._vertices.buffer, e, e, (this._firstFreeElement - this._firstNewElement) * t)) : (
					e = this._firstNewElement * t, this._vertexBuffer.setData(this._vertices.buffer, e, e, (this
						._bufferMaxParticles - this._firstNewElement) * t), this._firstFreeElement > 0 && this
					._vertexBuffer.setData(this._vertices.buffer, 0, 0, this._firstFreeElement * t)), this
				._firstNewElement = this._firstFreeElement
		}
		_getType() {
			return ft._type
		}
		_prepareRender(e) {
			return this._updateEmission(), this._firstNewElement != this._firstFreeElement && this
				.addNewParticlesToVertexBuffer(), this._drawCounter++, this._firstActiveElement != this
				._firstFreeElement
		}
		_render(e) {
			var r;
			this._bufferState.bind();
			var i = t.LayaGL.instance;
			this._firstActiveElement < this._firstFreeElement ? (r = (this._firstFreeElement - this
					._firstActiveElement) * this._indexStride, i.drawElements(i.TRIANGLES, r, i.UNSIGNED_SHORT,
					2 * this._firstActiveElement * this._indexStride), t.Stat.trianglesFaces += r / 3, t.Stat
				.renderBatches++) : (r = (this._bufferMaxParticles - this._firstActiveElement) * this
				._indexStride, i.drawElements(i.TRIANGLES, r, i.UNSIGNED_SHORT, 2 * this._firstActiveElement *
					this._indexStride), t.Stat.trianglesFaces += r / 3, t.Stat.renderBatches++, this
				._firstFreeElement > 0 && (r = this._firstFreeElement * this._indexStride, i.drawElements(i
						.TRIANGLES, r, i.UNSIGNED_SHORT, 0), t.Stat.trianglesFaces += r / 3, t.Stat
					.renderBatches++))
		}
		play() {
			if (this._burstsIndex = 0, this._isEmitting = !0, this._isPlaying = !0, this._isPaused = !1, this
				._emissionTime = 0, this._totalDelayTime = 0, !this.autoRandomSeed)
				for (var e = 0, r = this._randomSeeds.length; e < r; e++) this._randomSeeds[e] = this.randomSeed[
					0] + ft._RANDOMOFFSET[e];
			switch (this.startDelayType) {
				case 0:
					this._playStartDelay = this.startDelay;
					break;
				case 1:
					this.autoRandomSeed ? this._playStartDelay = t.MathUtil.lerp(this.startDelayMin, this
						.startDelayMax, Math.random()) : (this._rand.seed = this._randomSeeds[2], this
						._playStartDelay = t.MathUtil.lerp(this.startDelayMin, this.startDelayMax, this._rand
							.getFloat()), this._randomSeeds[2] = this._rand.seed);
					break;
				default:
					throw new Error("Utils3D: startDelayType is invalid.")
			}
			this._frameRateTime = this._currentTime + this._playStartDelay, this._startUpdateLoopCount = t.Stat
				.loopCount
		}
		pause() {
			this._isPaused = !0
		}
		simulate(e, t = !0) {
			this._simulateUpdate = !0, t ? this._updateParticlesSimulationRestart(e) : (this._isPaused = !1, this
				._updateParticles(e)), this.pause()
		}
		stop() {
			this._burstsIndex = 0, this._isEmitting = !1, this._emissionTime = 0
		}
		cloneTo(e) {
			var t = e;
			t.duration = this.duration, t.looping = this.looping, t.prewarm = this.prewarm, t.startDelayType = this
				.startDelayType, t.startDelay = this.startDelay, t.startDelayMin = this.startDelayMin, t
				.startDelayMax = this.startDelayMax, t._maxStartLifetime = this._maxStartLifetime, t
				.startLifetimeType = this.startLifetimeType, t.startLifetimeConstant = this.startLifetimeConstant,
				this.startLifeTimeGradient.cloneTo(t.startLifeTimeGradient), t.startLifetimeConstantMin = this
				.startLifetimeConstantMin, t.startLifetimeConstantMax = this.startLifetimeConstantMax, this
				.startLifeTimeGradientMin.cloneTo(t.startLifeTimeGradientMin), this.startLifeTimeGradientMax
				.cloneTo(t.startLifeTimeGradientMax), t.startSpeedType = this.startSpeedType, t.startSpeedConstant =
				this.startSpeedConstant, t.startSpeedConstantMin = this.startSpeedConstantMin, t
				.startSpeedConstantMax = this.startSpeedConstantMax, t.threeDStartSize = this.threeDStartSize, t
				.startSizeType = this.startSizeType, t.startSizeConstant = this.startSizeConstant, this
				.startSizeConstantSeparate.cloneTo(t.startSizeConstantSeparate), t.startSizeConstantMin = this
				.startSizeConstantMin, t.startSizeConstantMax = this.startSizeConstantMax, this
				.startSizeConstantMinSeparate.cloneTo(t.startSizeConstantMinSeparate), this
				.startSizeConstantMaxSeparate.cloneTo(t.startSizeConstantMaxSeparate), t.threeDStartRotation = this
				.threeDStartRotation, t.startRotationType = this.startRotationType, t.startRotationConstant = this
				.startRotationConstant, this.startRotationConstantSeparate.cloneTo(t.startRotationConstantSeparate),
				t.startRotationConstantMin = this.startRotationConstantMin, t.startRotationConstantMax = this
				.startRotationConstantMax, this.startRotationConstantMinSeparate.cloneTo(t
					.startRotationConstantMinSeparate), this.startRotationConstantMaxSeparate.cloneTo(t
					.startRotationConstantMaxSeparate), t.randomizeRotationDirection = this
				.randomizeRotationDirection, t.startColorType = this.startColorType, this.startColorConstant
				.cloneTo(t.startColorConstant), this.startColorConstantMin.cloneTo(t.startColorConstantMin), this
				.startColorConstantMax.cloneTo(t.startColorConstantMax), t.gravityModifier = this.gravityModifier, t
				.simulationSpace = this.simulationSpace, t.scaleMode = this.scaleMode, t.playOnAwake = this
				.playOnAwake, t.autoRandomSeed = this.autoRandomSeed, t.randomSeed[0] = this.randomSeed[0], t
				.maxParticles = this.maxParticles, this._emission && (t._emission = this._emission.clone()), this
				.shape && (t.shape = this.shape.clone()), this.velocityOverLifetime && (t.velocityOverLifetime =
					this.velocityOverLifetime.clone()), this.colorOverLifetime && (t.colorOverLifetime = this
					.colorOverLifetime.clone()), this.sizeOverLifetime && (t.sizeOverLifetime = this
					.sizeOverLifetime.clone()), this.rotationOverLifetime && (t.rotationOverLifetime = this
					.rotationOverLifetime.clone()), this.textureSheetAnimation && (t.textureSheetAnimation = this
					.textureSheetAnimation.clone()), t.isPerformanceMode = this.isPerformanceMode, t._isEmitting =
				this._isEmitting, t._isPlaying = this._isPlaying, t._isPaused = this._isPaused, t._playStartDelay =
				this._playStartDelay, t._frameRateTime = this._frameRateTime, t._emissionTime = this._emissionTime,
				t._totalDelayTime = this._totalDelayTime, t._burstsIndex = this._burstsIndex
		}
		clone() {
			var e = new ft(null);
			return this.cloneTo(e), e
		}
	}
	ft._RANDOMOFFSET = new Uint32Array([592910910, 3276756734, 322376503, 306581307, 1793934638, 3737431713, 2527743459,
			2368504881, 4085612399, 3774601268, 326370691, 1494990940, 1089181156, 3159510623, 2941263940,
			2786374529, 271901988, 4233252447
		]), ft.halfKSqrtOf2 = .71, ft._maxElapsedTime = 1 / 3, ft._tempVector30 = new n, ft._tempVector31 = new n, ft
		._tempVector32 = new n, ft._tempVector33 = new n, ft._tempVector34 = new n, ft._tempVector35 = new n, ft
		._tempVector36 = new n, ft._tempVector37 = new n, ft._tempVector38 = new n, ft._tempVector39 = new n, ft
		._tempPosition = new n, ft._tempDirection = new n, ft._type = _e._typeCounter++;
	class mt {
		get time() {
			return this._time
		}
		get minCount() {
			return this._minCount
		}
		get maxCount() {
			return this._maxCount
		}
		constructor(e, t, r) {
			this._time = e, this._minCount = t, this._maxCount = r
		}
		cloneTo(e) {
			var t = e;
			t._time = this._time, t._minCount = this._minCount, t._maxCount = this._maxCount
		}
		clone() {
			var e = new mt(this._time, this._minCount, this._maxCount);
			return this.cloneTo(e), e
		}
	}
	class Et {
		constructor() {
			this._type = 0, this._constant = null, this._constantMin = null, this._constantMax = null, this
				._gradient = null, this._gradientMin = null, this._gradientMax = null
		}
		static createByConstant(e) {
			var t = new Et;
			return t._type = 0, t._constant = e, t
		}
		static createByGradient(e) {
			var t = new Et;
			return t._type = 1, t._gradient = e, t
		}
		static createByRandomTwoConstant(e, t) {
			var r = new Et;
			return r._type = 2, r._constantMin = e, r._constantMax = t, r
		}
		static createByRandomTwoGradient(e, t) {
			var r = new Et;
			return r._type = 3, r._gradientMin = e, r._gradientMax = t, r
		}
		get type() {
			return this._type
		}
		get constant() {
			return this._constant
		}
		get constantMin() {
			return this._constantMin
		}
		get constantMax() {
			return this._constantMax
		}
		get gradient() {
			return this._gradient
		}
		get gradientMin() {
			return this._gradientMin
		}
		get gradientMax() {
			return this._gradientMax
		}
		cloneTo(e) {
			var t = e;
			t._type = this._type, this._constant.cloneTo(t._constant), this._constantMin.cloneTo(t._constantMin),
				this._constantMax.cloneTo(t._constantMax), this._gradient.cloneTo(t._gradient), this._gradientMin
				.cloneTo(t._gradientMin), this._gradientMax.cloneTo(t._gradientMax)
		}
		clone() {
			var e = new Et;
			return this.cloneTo(e), e
		}
	}
	class Tt {
		get color() {
			return this._color
		}
		constructor(e) {
			this._color = e
		}
		cloneTo(e) {
			var t = e;
			this._color.cloneTo(t._color), t.enbale = this.enbale
		}
		clone() {
			var e;
			switch (this._color.type) {
				case 0:
					e = Et.createByConstant(this._color.constant.clone());
					break;
				case 1:
					e = Et.createByGradient(this._color.gradient.clone());
					break;
				case 2:
					e = Et.createByRandomTwoConstant(this._color.constantMin.clone(), this._color.constantMax
					.clone());
					break;
				case 3:
					e = Et.createByRandomTwoGradient(this._color.gradientMin.clone(), this._color.gradientMax
					.clone())
			}
			var t = new Tt(e);
			return t.enbale = this.enbale, t
		}
	}
	class pt {
		constructor() {
			this._type = 0, this._constant = 0, this._overTime = null, this._constantMin = 0, this._constantMax = 0,
				this._overTimeMin = null, this._overTimeMax = null
		}
		static createByConstant(e) {
			var t = new pt;
			return t._type = 0, t._constant = e, t
		}
		static createByOverTime(e) {
			var t = new pt;
			return t._type = 1, t._overTime = e, t
		}
		static createByRandomTwoConstant(e, t) {
			var r = new pt;
			return r._type = 2, r._constantMin = e, r._constantMax = t, r
		}
		static createByRandomTwoOverTime(e, t) {
			var r = new pt;
			return r._type = 3, r._overTimeMin = e, r._overTimeMax = t, r
		}
		get type() {
			return this._type
		}
		get constant() {
			return this._constant
		}
		get frameOverTimeData() {
			return this._overTime
		}
		get constantMin() {
			return this._constantMin
		}
		get constantMax() {
			return this._constantMax
		}
		get frameOverTimeDataMin() {
			return this._overTimeMin
		}
		get frameOverTimeDataMax() {
			return this._overTimeMax
		}
		cloneTo(e) {
			var t = e;
			t._type = this._type, t._constant = this._constant, this._overTime && this._overTime.cloneTo(t
					._overTime), t._constantMin = this._constantMin, t._constantMax = this._constantMax, this
				._overTimeMin && this._overTimeMin.cloneTo(t._overTimeMin), this._overTimeMax && this._overTimeMax
				.cloneTo(t._overTimeMax)
		}
		clone() {
			var e = new pt;
			return this.cloneTo(e), e
		}
	}
	class gt {
		constructor() {
			this._type = 0, this._separateAxes = !1, this._constant = 0, this._constantSeparate = null, this
				._gradient = null, this._gradientX = null, this._gradientY = null, this._gradientZ = null, this
				._gradientW = null, this._constantMin = 0, this._constantMax = 0, this._constantMinSeparate = null,
				this._constantMaxSeparate = null, this._gradientMin = null, this._gradientMax = null, this
				._gradientXMin = null, this._gradientXMax = null, this._gradientYMin = null, this._gradientYMax =
				null, this._gradientZMin = null, this._gradientZMax = null, this._gradientWMin = null, this
				._gradientWMax = null
		}
		static createByConstant(e) {
			var t = new gt;
			return t._type = 0, t._separateAxes = !1, t._constant = e, t
		}
		static createByConstantSeparate(e) {
			var t = new gt;
			return t._type = 0, t._separateAxes = !0, t._constantSeparate = e, t
		}
		static createByGradient(e) {
			var t = new gt;
			return t._type = 1, t._separateAxes = !1, t._gradient = e, t
		}
		static createByGradientSeparate(e, t, r) {
			var i = new gt;
			return i._type = 1, i._separateAxes = !0, i._gradientX = e, i._gradientY = t, i._gradientZ = r, i
		}
		static createByRandomTwoConstant(e, t) {
			var r = new gt;
			return r._type = 2, r._separateAxes = !1, r._constantMin = e, r._constantMax = t, r
		}
		static createByRandomTwoConstantSeparate(e, t) {
			var r = new gt;
			return r._type = 2, r._separateAxes = !0, r._constantMinSeparate = e, r._constantMaxSeparate = t, r
		}
		static createByRandomTwoGradient(e, t) {
			var r = new gt;
			return r._type = 3, r._separateAxes = !1, r._gradientMin = e, r._gradientMax = t, r
		}
		static createByRandomTwoGradientSeparate(e, t, r, i, a, n, s, o) {
			var l = new gt;
			return l._type = 3, l._separateAxes = !0, l._gradientXMin = e, l._gradientXMax = t, l._gradientYMin = r,
				l._gradientYMax = i, l._gradientZMin = a, l._gradientZMax = n, l._gradientWMin = s, l
				._gradientWMax = o, l
		}
		get type() {
			return this._type
		}
		get separateAxes() {
			return this._separateAxes
		}
		get constant() {
			return this._constant
		}
		get constantSeparate() {
			return this._constantSeparate
		}
		get gradient() {
			return this._gradient
		}
		get gradientX() {
			return this._gradientX
		}
		get gradientY() {
			return this._gradientY
		}
		get gradientZ() {
			return this._gradientZ
		}
		get gradientW() {
			return this._gradientW
		}
		get constantMin() {
			return this._constantMin
		}
		get constantMax() {
			return this._constantMax
		}
		get constantMinSeparate() {
			return this._constantMinSeparate
		}
		get constantMaxSeparate() {
			return this._constantMaxSeparate
		}
		get gradientMin() {
			return this._gradientMin
		}
		get gradientMax() {
			return this._gradientMax
		}
		get gradientXMin() {
			return this._gradientXMin
		}
		get gradientXMax() {
			return this._gradientXMax
		}
		get gradientYMin() {
			return this._gradientYMin
		}
		get gradientYMax() {
			return this._gradientYMax
		}
		get gradientZMin() {
			return this._gradientZMin
		}
		get gradientZMax() {
			return this._gradientZMax
		}
		get gradientWMin() {
			return this._gradientWMin
		}
		get gradientWMax() {
			return this._gradientWMax
		}
		cloneTo(e) {
			var t = e;
			t._type = this._type, t._separateAxes = this._separateAxes, t._constant = this._constant, this
				._constantSeparate.cloneTo(t._constantSeparate), this._gradient.cloneTo(t._gradient), this
				._gradientX.cloneTo(t._gradientX), this._gradientY.cloneTo(t._gradientY), this._gradientZ.cloneTo(t
					._gradientZ), t._constantMin = this._constantMin, t._constantMax = this._constantMax, this
				._constantMinSeparate.cloneTo(t._constantMinSeparate), this._constantMaxSeparate.cloneTo(t
					._constantMaxSeparate), this._gradientMin.cloneTo(t._gradientMin), this._gradientMax.cloneTo(t
					._gradientMax), this._gradientXMin.cloneTo(t._gradientXMin), this._gradientXMax.cloneTo(t
					._gradientXMax), this._gradientYMin.cloneTo(t._gradientYMin), this._gradientYMax.cloneTo(t
					._gradientYMax), this._gradientZMin.cloneTo(t._gradientZMin), this._gradientZMax.cloneTo(t
					._gradientZMax)
		}
		clone() {
			var e = new gt;
			return this.cloneTo(e), e
		}
	}
	class St {
		constructor() {
			this._currentLength = 0, this._elements = new Float32Array(8)
		}
		get gradientCount() {
			return this._currentLength / 2
		}
		add(e, t) {
			this._currentLength < 8 ? (6 === this._currentLength && 1 !== e && (e = 1, console.log(
					"Warning:the forth key is  be force set to 1.")), this._elements[this._currentLength++] = e,
				this._elements[this._currentLength++] = t) : console.log(
				"Warning:data count must lessEqual than 4")
		}
		cloneTo(e) {
			var t = e;
			t._currentLength = this._currentLength;
			for (var r = t._elements, i = 0, a = this._elements.length; i < a; i++) r[i] = this._elements[i]
		}
		clone() {
			var e = new St;
			return this.cloneTo(e), e
		}
	}
	class vt {
		constructor() {
			this._type = 0, this._separateAxes = !1, this._gradient = null, this._gradientX = null, this
				._gradientY = null, this._gradientZ = null, this._constantMin = 0, this._constantMax = 0, this
				._constantMinSeparate = null, this._constantMaxSeparate = null, this._gradientMin = null, this
				._gradientMax = null, this._gradientXMin = null, this._gradientXMax = null, this._gradientYMin =
				null, this._gradientYMax = null, this._gradientZMin = null, this._gradientZMax = null
		}
		static createByGradient(e) {
			var t = new vt;
			return t._type = 0, t._separateAxes = !1, t._gradient = e, t
		}
		static createByGradientSeparate(e, t, r) {
			var i = new vt;
			return i._type = 0, i._separateAxes = !0, i._gradientX = e, i._gradientY = t, i._gradientZ = r, i
		}
		static createByRandomTwoConstant(e, t) {
			var r = new vt;
			return r._type = 1, r._separateAxes = !1, r._constantMin = e, r._constantMax = t, r
		}
		static createByRandomTwoConstantSeparate(e, t) {
			var r = new vt;
			return r._type = 1, r._separateAxes = !0, r._constantMinSeparate = e, r._constantMaxSeparate = t, r
		}
		static createByRandomTwoGradient(e, t) {
			var r = new vt;
			return r._type = 2, r._separateAxes = !1, r._gradientMin = e, r._gradientMax = t, r
		}
		static createByRandomTwoGradientSeparate(e, t, r, i, a, n) {
			var s = new vt;
			return s._type = 2, s._separateAxes = !0, s._gradientXMin = e, s._gradientXMax = t, s._gradientYMin = r,
				s._gradientYMax = i, s._gradientZMin = a, s._gradientZMax = n, s
		}
		get type() {
			return this._type
		}
		get separateAxes() {
			return this._separateAxes
		}
		get gradient() {
			return this._gradient
		}
		get gradientX() {
			return this._gradientX
		}
		get gradientY() {
			return this._gradientY
		}
		get gradientZ() {
			return this._gradientZ
		}
		get constantMin() {
			return this._constantMin
		}
		get constantMax() {
			return this._constantMax
		}
		get constantMinSeparate() {
			return this._constantMinSeparate
		}
		get constantMaxSeparate() {
			return this._constantMaxSeparate
		}
		get gradientMin() {
			return this._gradientMin
		}
		get gradientMax() {
			return this._gradientMax
		}
		get gradientXMin() {
			return this._gradientXMin
		}
		get gradientXMax() {
			return this._gradientXMax
		}
		get gradientYMin() {
			return this._gradientYMin
		}
		get gradientYMax() {
			return this._gradientYMax
		}
		get gradientZMin() {
			return this._gradientZMin
		}
		get gradientZMax() {
			return this._gradientZMax
		}
		getMaxSizeInGradient() {
			var e, t, r = -Number.MAX_VALUE;
			switch (this._type) {
				case 0:
					if (this._separateAxes) {
						for (e = 0, t = this._gradientX.gradientCount; e < t; e++) r = Math.max(r, this._gradientX
							.getValueByIndex(e));
						for (e = 0, t = this._gradientY.gradientCount; e < t; e++) r = Math.max(r, this._gradientY
							.getValueByIndex(e))
					} else
						for (e = 0, t = this._gradient.gradientCount; e < t; e++) r = Math.max(r, this._gradient
							.getValueByIndex(e));
					break;
				case 1:
					this._separateAxes ? (r = Math.max(this._constantMinSeparate.x, this._constantMaxSeparate.x),
						r = Math.max(r, this._constantMinSeparate.y), r = Math.max(r, this._constantMaxSeparate
							.y)) : r = Math.max(this._constantMin, this._constantMax);
					break;
				case 2:
					if (this._separateAxes) {
						for (e = 0, t = this._gradientXMin.gradientCount; e < t; e++) r = Math.max(r, this
							._gradientXMin.getValueByIndex(e));
						for (e = 0, t = this._gradientXMax.gradientCount; e < t; e++) r = Math.max(r, this
							._gradientXMax.getValueByIndex(e));
						for (e = 0, t = this._gradientYMin.gradientCount; e < t; e++) r = Math.max(r, this
							._gradientYMin.getValueByIndex(e));
						for (e = 0, t = this._gradientZMax.gradientCount; e < t; e++) r = Math.max(r, this
							._gradientZMax.getValueByIndex(e))
					} else {
						for (e = 0, t = this._gradientMin.gradientCount; e < t; e++) r = Math.max(r, this
							._gradientMin.getValueByIndex(e));
						for (e = 0, t = this._gradientMax.gradientCount; e < t; e++) r = Math.max(r, this
							._gradientMax.getValueByIndex(e))
					}
			}
			return r
		}
		cloneTo(e) {
			var t = e;
			t._type = this._type, t._separateAxes = this._separateAxes, this._gradient.cloneTo(t._gradient), this
				._gradientX.cloneTo(t._gradientX), this._gradientY.cloneTo(t._gradientY), this._gradientZ.cloneTo(t
					._gradientZ), t._constantMin = this._constantMin, t._constantMax = this._constantMax, this
				._constantMinSeparate.cloneTo(t._constantMinSeparate), this._constantMaxSeparate.cloneTo(t
					._constantMaxSeparate), this._gradientMin.cloneTo(t._gradientMin), this._gradientMax.cloneTo(t
					._gradientMax), this._gradientXMin.cloneTo(t._gradientXMin), this._gradientXMax.cloneTo(t
					._gradientXMax), this._gradientYMin.cloneTo(t._gradientYMin), this._gradientYMax.cloneTo(t
					._gradientYMax), this._gradientZMin.cloneTo(t._gradientZMin), this._gradientZMax.cloneTo(t
					._gradientZMax)
		}
		clone() {
			var e = new vt;
			return this.cloneTo(e), e
		}
	}
	class Rt {
		constructor() {
			this._type = 0, this._constant = null, this._gradientX = null, this._gradientY = null, this._gradientZ =
				null, this._constantMin = null, this._constantMax = null, this._gradientXMin = null, this
				._gradientXMax = null, this._gradientYMin = null, this._gradientYMax = null, this._gradientZMin =
				null, this._gradientZMax = null
		}
		static createByConstant(e) {
			var t = new Rt;
			return t._type = 0, t._constant = e, t
		}
		static createByGradient(e, t, r) {
			var i = new Rt;
			return i._type = 1, i._gradientX = e, i._gradientY = t, i._gradientZ = r, i
		}
		static createByRandomTwoConstant(e, t) {
			var r = new Rt;
			return r._type = 2, r._constantMin = e, r._constantMax = t, r
		}
		static createByRandomTwoGradient(e, t, r, i, a, n) {
			var s = new Rt;
			return s._type = 3, s._gradientXMin = e, s._gradientXMax = t, s._gradientYMin = r, s._gradientYMax = i,
				s._gradientZMin = a, s._gradientZMax = n, s
		}
		get type() {
			return this._type
		}
		get constant() {
			return this._constant
		}
		get gradientX() {
			return this._gradientX
		}
		get gradientY() {
			return this._gradientY
		}
		get gradientZ() {
			return this._gradientZ
		}
		get constantMin() {
			return this._constantMin
		}
		get constantMax() {
			return this._constantMax
		}
		get gradientXMin() {
			return this._gradientXMin
		}
		get gradientXMax() {
			return this._gradientXMax
		}
		get gradientYMin() {
			return this._gradientYMin
		}
		get gradientYMax() {
			return this._gradientYMax
		}
		get gradientZMin() {
			return this._gradientZMin
		}
		get gradientZMax() {
			return this._gradientZMax
		}
		cloneTo(e) {
			var t = e;
			t._type = this._type, this._constant.cloneTo(t._constant), this._gradientX.cloneTo(t._gradientX), this
				._gradientY.cloneTo(t._gradientY), this._gradientZ.cloneTo(t._gradientZ), this._constantMin.cloneTo(
					t._constantMin), this._constantMax.cloneTo(t._constantMax), this._gradientXMin.cloneTo(t
					._gradientXMin), this._gradientXMax.cloneTo(t._gradientXMax), this._gradientYMin.cloneTo(t
					._gradientYMin), this._gradientYMax.cloneTo(t._gradientYMax), this._gradientZMin.cloneTo(t
					._gradientZMin), this._gradientZMax.cloneTo(t._gradientZMax)
		}
		clone() {
			var e = new Rt;
			return this.cloneTo(e), e
		}
	}
	class It {
		get angularVelocity() {
			return this._angularVelocity
		}
		constructor(e) {
			this._angularVelocity = e
		}
		cloneTo(e) {
			var t = e;
			this._angularVelocity.cloneTo(t._angularVelocity), t.enbale = this.enbale
		}
		clone() {
			var e;
			switch (this._angularVelocity.type) {
				case 0:
					e = this._angularVelocity.separateAxes ? gt.createByConstantSeparate(this._angularVelocity
						.constantSeparate.clone()) : gt.createByConstant(this._angularVelocity.constant);
					break;
				case 1:
					e = this._angularVelocity.separateAxes ? gt.createByGradientSeparate(this._angularVelocity
						.gradientX.clone(), this._angularVelocity.gradientY.clone(), this._angularVelocity
						.gradientZ.clone()) : gt.createByGradient(this._angularVelocity.gradient.clone());
					break;
				case 2:
					e = this._angularVelocity.separateAxes ? gt.createByRandomTwoConstantSeparate(this
						._angularVelocity.constantMinSeparate.clone(), this._angularVelocity.constantMaxSeparate
						.clone()) : gt.createByRandomTwoConstant(this._angularVelocity.constantMin, this
						._angularVelocity.constantMax);
					break;
				case 3:
					e = this._angularVelocity.separateAxes ? gt.createByRandomTwoGradientSeparate(this
							._angularVelocity.gradientXMin.clone(), this._angularVelocity.gradientYMin.clone(), this
							._angularVelocity.gradientZMin.clone(), this._angularVelocity.gradientWMin.clone(), this
							._angularVelocity.gradientXMax.clone(), this._angularVelocity.gradientYMax.clone(), this
							._angularVelocity.gradientZMax.clone(), this._angularVelocity.gradientWMax.clone()) : gt
						.createByRandomTwoGradient(this._angularVelocity.gradientMin.clone(), this._angularVelocity
							.gradientMax.clone())
			}
			var t = new It(e);
			return t.enbale = this.enbale, t
		}
	}
	class xt {
		constructor() {}
		_getShapeBoundBox(e) {
			throw new Error("BaseShape: must override it.")
		}
		_getSpeedBoundBox(e) {
			throw new Error("BaseShape: must override it.")
		}
		generatePositionAndDirection(e, t, r = null, i = null) {
			throw new Error("BaseShape: must override it.")
		}
		_calculateProceduralBounds(e, t, r) {
			this._getShapeBoundBox(e);
			var i = e.min,
				a = e.max;
			n.multiply(i, t, i), n.multiply(a, t, a);
			var s = new Ye(new n, new n);
			this.randomDirection ? (s.min = new n(-1, -1, -1), s.max = new n(1, 1, 1)) : this._getSpeedBoundBox(s);
			var o = new Ye(new n, new n),
				l = o.min,
				_ = o.max;
			n.scale(s.min, r.y, l), n.scale(s.max, r.y, _), n.add(e.min, l, l), n.add(e.max, _, _), n.min(e.min, l,
				e.min), n.max(e.max, l, e.max);
			var h = new Ye(new n, new n),
				c = h.min,
				d = h.max;
			n.scale(s.min, r.x, c), n.scale(s.max, r.x, d), n.min(h.min, d, l), n.max(h.min, d, _), n.min(e.min, l,
				e.min), n.max(e.max, l, e.max)
		}
		cloneTo(e) {
			e.enable = this.enable
		}
		clone() {
			var e = new xt;
			return this.cloneTo(e), e
		}
	}
	class At {
		static _randomPointUnitArcCircle(e, t, r = null) {
			var i;
			i = r ? r.getFloat() * e : Math.random() * e, t.x = Math.cos(i), t.y = Math.sin(i)
		}
		static _randomPointInsideUnitArcCircle(e, t, r = null) {
			var i;
			At._randomPointUnitArcCircle(e, t, r), i = r ? Math.pow(r.getFloat(), .5) : Math.pow(Math.random(), .5),
				t.x = t.x * i, t.y = t.y * i
		}
		static _randomPointUnitCircle(e, t = null) {
			var r;
			r = t ? t.getFloat() * Math.PI * 2 : Math.random() * Math.PI * 2, e.x = Math.cos(r), e.y = Math.sin(r)
		}
		static _randomPointInsideUnitCircle(e, t = null) {
			var r;
			At._randomPointUnitCircle(e), r = t ? Math.pow(t.getFloat(), .5) : Math.pow(Math.random(), .5), e.x = e
				.x * r, e.y = e.y * r
		}
		static _randomPointUnitSphere(e, t = null) {
			var r, i;
			t ? (r = e.z = 2 * t.getFloat() - 1, i = t.getFloat() * Math.PI * 2) : (r = e.z = 2 * Math.random() - 1,
				i = Math.random() * Math.PI * 2);
			var a = Math.sqrt(1 - r * r);
			e.x = a * Math.cos(i), e.y = a * Math.sin(i)
		}
		static _randomPointInsideUnitSphere(e, t = null) {
			var r;
			At._randomPointUnitSphere(e), r = t ? Math.pow(t.getFloat(), 1 / 3) : Math.pow(Math.random(), 1 / 3), e
				.x = e.x * r, e.y = e.y * r, e.z = e.z * r
		}
		static _randomPointInsideHalfUnitBox(e, t = null) {
			t ? (e.x = t.getFloat() - .5, e.y = t.getFloat() - .5, e.z = t.getFloat() - .5) : (e.x = Math.random() -
				.5, e.y = Math.random() - .5, e.z = Math.random() - .5)
		}
		constructor() {}
	}
	class Dt extends xt {
		constructor() {
			super(), this.x = 1, this.y = 1, this.z = 1, this.randomDirection = !1
		}
		_getShapeBoundBox(e) {
			var t = e.min;
			t.x = .5 * -this.x, t.y = .5 * -this.y, t.z = .5 * -this.z;
			var r = e.max;
			r.x = .5 * this.x, r.y = .5 * this.y, r.z = .5 * this.z
		}
		_getSpeedBoundBox(e) {
			var t = e.min;
			t.x = 0, t.y = 0, t.z = 0;
			var r = e.max;
			r.x = 0, r.y = 1, r.z = 0
		}
		generatePositionAndDirection(e, t, r = null, i = null) {
			r ? (r.seed = i[16], At._randomPointInsideHalfUnitBox(e, r), i[16] = r.seed) : At
				._randomPointInsideHalfUnitBox(e), e.x = this.x * e.x, e.y = this.y * e.y, e.z = this.z * e.z, this
				.randomDirection ? r ? (r.seed = i[17], At._randomPointUnitSphere(t, r), i[17] = r.seed) : At
				._randomPointUnitSphere(t) : (t.x = 0, t.y = 0, t.z = 1)
		}
		cloneTo(e) {
			super.cloneTo(e);
			var t = e;
			t.x = this.x, t.y = this.y, t.z = this.z, t.randomDirection = this.randomDirection
		}
		clone() {
			var e = new Dt;
			return this.cloneTo(e), e
		}
	}
	class Mt extends xt {
		constructor() {
			super(), this.radius = 1, this.arc = 2 * Math.PI, this.emitFromEdge = !1, this.randomDirection = !1
		}
		_getShapeBoundBox(e) {
			var t = e.min;
			t.x = t.z = -this.radius, t.y = 0;
			var r = e.max;
			r.x = r.z = this.radius, r.y = 0
		}
		_getSpeedBoundBox(e) {
			var t = e.min;
			t.x = t.y = -1, t.z = 0;
			var r = e.max;
			r.x = r.y = 1, r.z = 0
		}
		generatePositionAndDirection(e, t, r = null, i = null) {
			var a = Mt._tempPositionPoint;
			r ? (r.seed = i[16], this.emitFromEdge ? At._randomPointUnitArcCircle(this.arc, Mt._tempPositionPoint,
					r) : At._randomPointInsideUnitArcCircle(this.arc, Mt._tempPositionPoint, r), i[16] = r.seed) :
				this.emitFromEdge ? At._randomPointUnitArcCircle(this.arc, Mt._tempPositionPoint) : At
				._randomPointInsideUnitArcCircle(this.arc, Mt._tempPositionPoint), e.x = -a.x, e.y = a.y, e.z = 0, n
				.scale(e, this.radius, e), this.randomDirection ? r ? (r.seed = i[17], At._randomPointUnitSphere(t,
					r), i[17] = r.seed) : At._randomPointUnitSphere(t) : e.cloneTo(t)
		}
		cloneTo(e) {
			super.cloneTo(e);
			var t = e;
			t.radius = this.radius, t.arc = this.arc, t.emitFromEdge = this.emitFromEdge, t.randomDirection = this
				.randomDirection
		}
		clone() {
			var e = new Mt;
			return this.cloneTo(e), e
		}
	}
	Mt._tempPositionPoint = new i;
	class Lt extends xt {
		constructor() {
			super(), this.angle = 25 / 180 * Math.PI, this.radius = 1, this.length = 5, this.emitType = 0, this
				.randomDirection = !1
		}
		_getShapeBoundBox(e) {
			const t = this.radius + this.length * Math.sin(this.angle),
				r = this.length * Math.cos(this.angle);
			var i = e.min;
			i.x = i.y = -t, i.z = 0;
			var a = e.max;
			a.x = a.y = t, a.z = r
		}
		_getSpeedBoundBox(e) {
			const t = Math.sin(this.angle);
			var r = e.min;
			r.x = r.y = -t, r.z = 0;
			var i = e.max;
			i.x = i.y = t, i.z = 1
		}
		generatePositionAndDirection(e, t, r = null, i = null) {
			var a, s, o, l = Lt._tempPositionPoint,
				_ = Math.cos(this.angle),
				h = Math.sin(this.angle);
			switch (this.emitType) {
				case 0:
					r ? (r.seed = i[16], At._randomPointInsideUnitCircle(Lt._tempPositionPoint, r), i[16] = r
						.seed) : At._randomPointInsideUnitCircle(Lt._tempPositionPoint), a = l.x, s = l.y, e.x = a *
						this.radius, e.y = s * this.radius, e.z = 0, this.randomDirection ? (r ? (r.seed = i[17], At
								._randomPointInsideUnitCircle(Lt._tempDirectionPoint, r), i[17] = r.seed) : At
							._randomPointInsideUnitCircle(Lt._tempDirectionPoint), o = Lt._tempDirectionPoint, t.x =
							o.x * h, t.y = o.y * h) : (t.x = a * h, t.y = s * h), t.z = _;
					break;
				case 1:
					r ? (r.seed = i[16], At._randomPointUnitCircle(Lt._tempPositionPoint, r), i[16] = r.seed) : At
						._randomPointUnitCircle(Lt._tempPositionPoint), a = l.x, s = l.y, e.x = a * this.radius, e
						.y = s * this.radius, e.z = 0, this.randomDirection ? (r ? (r.seed = i[17], At
								._randomPointInsideUnitCircle(Lt._tempDirectionPoint, r), i[17] = r.seed) : At
							._randomPointInsideUnitCircle(Lt._tempDirectionPoint), o = Lt._tempDirectionPoint, t.x =
							o.x * h, t.y = o.y * h) : (t.x = a * h, t.y = s * h), t.z = _;
					break;
				case 2:
					r ? (r.seed = i[16], At._randomPointInsideUnitCircle(Lt._tempPositionPoint, r)) : At
						._randomPointInsideUnitCircle(Lt._tempPositionPoint), a = l.x, s = l.y, e.x = a * this
						.radius, e.y = s * this.radius, e.z = 0, t.x = a * h, t.y = s * h, t.z = _, n.normalize(t,
							t), r ? (n.scale(t, this.length * r.getFloat(), t), i[16] = r.seed) : n.scale(t, this
							.length * Math.random(), t), n.add(e, t, e), this.randomDirection && (r ? (r.seed = i[
								17], At._randomPointUnitSphere(t, r), i[17] = r.seed) : At._randomPointUnitSphere(
							t));
					break;
				case 3:
					r ? (r.seed = i[16], At._randomPointUnitCircle(Lt._tempPositionPoint, r)) : At
						._randomPointUnitCircle(Lt._tempPositionPoint), a = l.x, s = l.y, e.x = a * this.radius, e
						.y = s * this.radius, e.z = 0, t.x = a * h, t.y = s * h, t.z = _, n.normalize(t, t), r ? (n
							.scale(t, this.length * r.getFloat(), t), i[16] = r.seed) : n.scale(t, this.length *
							Math.random(), t), n.add(e, t, e), this.randomDirection && (r ? (r.seed = i[17], At
							._randomPointUnitSphere(t, r), i[17] = r.seed) : At._randomPointUnitSphere(t));
					break;
				default:
					throw new Error("ConeShape:emitType is invalid.")
			}
		}
		cloneTo(e) {
			super.cloneTo(e);
			var t = e;
			t.angle = this.angle, t.radius = this.radius, t.length = this.length, t.emitType = this.emitType, t
				.randomDirection = this.randomDirection
		}
		clone() {
			var e = new Lt;
			return this.cloneTo(e), e
		}
	}
	Lt._tempPositionPoint = new i, Lt._tempDirectionPoint = new i;
	class Ct extends xt {
		constructor() {
			super(), this.radius = 1, this.emitFromShell = !1, this.randomDirection = !1
		}
		_getShapeBoundBox(e) {
			var t = e.min;
			t.x = t.y = t.z = -this.radius;
			var r = e.max;
			r.x = r.y = this.radius, r.z = 0
		}
		_getSpeedBoundBox(e) {
			var t = e.min;
			t.x = t.y = -1, t.z = 0;
			var r = e.max;
			r.x = r.y = r.z = 1
		}
		generatePositionAndDirection(e, t, r = null, i = null) {
			r ? (r.seed = i[16], this.emitFromShell ? At._randomPointUnitSphere(e, r) : At
					._randomPointInsideUnitSphere(e, r), i[16] = r.seed) : this.emitFromShell ? At
				._randomPointUnitSphere(e) : At._randomPointInsideUnitSphere(e), n.scale(e, this.radius, e);
			var a = e.z;
			a < 0 && (e.z = -1 * a), this.randomDirection ? r ? (r.seed = i[17], At._randomPointUnitSphere(t, r), i[
				17] = r.seed) : At._randomPointUnitSphere(t) : e.cloneTo(t)
		}
		cloneTo(e) {
			super.cloneTo(e);
			var t = e;
			t.radius = this.radius, t.emitFromShell = this.emitFromShell, t.randomDirection = this.randomDirection
		}
		clone() {
			var e = new Ct;
			return this.cloneTo(e), e
		}
	}
	class yt extends xt {
		constructor() {
			super(), this.radius = 1, this.emitFromShell = !1, this.randomDirection = !1
		}
		_getShapeBoundBox(e) {
			var t = e.min;
			t.x = t.y = t.z = -this.radius;
			var r = e.max;
			r.x = r.y = r.z = this.radius
		}
		_getSpeedBoundBox(e) {
			var t = e.min;
			t.x = t.y = t.z = -1;
			var r = e.max;
			r.x = r.y = r.z = 1
		}
		generatePositionAndDirection(e, t, r = null, i = null) {
			r ? (r.seed = i[16], this.emitFromShell ? At._randomPointUnitSphere(e, r) : At
					._randomPointInsideUnitSphere(e, r), i[16] = r.seed) : this.emitFromShell ? At
				._randomPointUnitSphere(e) : At._randomPointInsideUnitSphere(e), n.scale(e, this.radius, e), this
				.randomDirection ? r ? (r.seed = i[17], At._randomPointUnitSphere(t, r), i[17] = r.seed) : At
				._randomPointUnitSphere(t) : e.cloneTo(t)
		}
		cloneTo(e) {
			super.cloneTo(e);
			var t = e;
			t.radius = this.radius, t.emitFromShell = this.emitFromShell, t.randomDirection = this.randomDirection
		}
		clone() {
			var e = new yt;
			return this.cloneTo(e), e
		}
	}
	class Ot {
		get size() {
			return this._size
		}
		constructor(e) {
			this._size = e
		}
		cloneTo(e) {
			var t = e;
			this._size.cloneTo(t._size), t.enbale = this.enbale
		}
		clone() {
			var e;
			switch (this._size.type) {
				case 0:
					e = this._size.separateAxes ? vt.createByGradientSeparate(this._size.gradientX.clone(), this
						._size.gradientY.clone(), this._size.gradientZ.clone()) : vt.createByGradient(this._size
						.gradient.clone());
					break;
				case 1:
					e = this._size.separateAxes ? vt.createByRandomTwoConstantSeparate(this._size
							.constantMinSeparate.clone(), this._size.constantMaxSeparate.clone()) : vt
						.createByRandomTwoConstant(this._size.constantMin, this._size.constantMax);
					break;
				case 2:
					e = this._size.separateAxes ? vt.createByRandomTwoGradientSeparate(this._size.gradientXMin
							.clone(), this._size.gradientYMin.clone(), this._size.gradientZMin.clone(), this._size
							.gradientXMax.clone(), this._size.gradientYMax.clone(), this._size.gradientZMax.clone()
							) : vt.createByRandomTwoGradient(this._size.gradientMin.clone(), this._size.gradientMax
							.clone())
			}
			var t = new Ot(e);
			return t.enbale = this.enbale, t
		}
	}
	class Nt {
		constructor() {
			this._type = 0, this._constant = 0, this._constantMin = 0, this._constantMax = 0
		}
		static createByConstant(e) {
			var t = new Nt;
			return t._type = 0, t._constant = e, t
		}
		static createByRandomTwoConstant(e, t) {
			var r = new Nt;
			return r._type = 1, r._constantMin = e, r._constantMax = t, r
		}
		get type() {
			return this._type
		}
		get constant() {
			return this._constant
		}
		get constantMin() {
			return this._constantMin
		}
		get constantMax() {
			return this._constantMax
		}
		cloneTo(e) {
			var t = e;
			t._type = this._type, t._constant = this._constant, t._constantMin = this._constantMin, t._constantMax =
				this._constantMax
		}
		clone() {
			var e = new Nt;
			return this.cloneTo(e), e
		}
	}
	class Pt {
		constructor(e, t) {
			this.type = 0, this.randomRow = !1, this.rowIndex = 0, this.cycles = 0, this.enableUVChannels = 0, this
				.enable = !1, this.tiles = new i(1, 1), this.type = 0, this.randomRow = !0, this.rowIndex = 0, this
				.cycles = 1, this.enableUVChannels = 1, this._frame = e, this._startFrame = t
		}
		get frame() {
			return this._frame
		}
		get startFrame() {
			return this._startFrame
		}
		cloneTo(e) {
			var t = e;
			this.tiles.cloneTo(t.tiles), t.type = this.type, t.randomRow = this.randomRow, t.rowIndex = this
				.rowIndex, t.cycles = this.cycles, t.enableUVChannels = this.enableUVChannels, t.enable = this
				.enable, this._frame.cloneTo(t._frame), this._startFrame.cloneTo(t._startFrame)
		}
		clone() {
			var e, t;
			switch (this._frame.type) {
				case 0:
					e = pt.createByConstant(this._frame.constant);
					break;
				case 1:
					e = pt.createByOverTime(this._frame.frameOverTimeData.clone());
					break;
				case 2:
					e = pt.createByRandomTwoConstant(this._frame.constantMin, this._frame.constantMax);
					break;
				case 3:
					e = pt.createByRandomTwoOverTime(this._frame.frameOverTimeDataMin.clone(), this._frame
						.frameOverTimeDataMax.clone())
			}
			switch (this._startFrame.type) {
				case 0:
					t = Nt.createByConstant(this._startFrame.constant);
					break;
				case 1:
					t = Nt.createByRandomTwoConstant(this._startFrame.constantMin, this._startFrame.constantMax)
			}
			var r = new Pt(e, t);
			return this.cloneTo(r), r
		}
	}
	class wt {
		constructor(e) {
			this.enbale = !1, this.space = 0, this._velocity = e
		}
		get velocity() {
			return this._velocity
		}
		cloneTo(e) {
			var t = e;
			this._velocity.cloneTo(t._velocity), t.enbale = this.enbale, t.space = this.space
		}
		clone() {
			var e;
			switch (this._velocity.type) {
				case 0:
					e = Rt.createByConstant(this._velocity.constant.clone());
					break;
				case 1:
					e = Rt.createByGradient(this._velocity.gradientX.clone(), this._velocity.gradientY.clone(), this
						._velocity.gradientZ.clone());
					break;
				case 2:
					e = Rt.createByRandomTwoConstant(this._velocity.constantMin.clone(), this._velocity.constantMax
						.clone());
					break;
				case 3:
					e = Rt.createByRandomTwoGradient(this._velocity.gradientXMin.clone(), this._velocity
						.gradientYMin.clone(), this._velocity.gradientZMin.clone(), this._velocity.gradientXMax
						.clone(), this._velocity.gradientYMax.clone(), this._velocity.gradientZMax.clone())
			}
			var t = new wt(e);
			return t.enbale = this.enbale, t.space = this.space, t
		}
	}
	class Vt extends ne {
		static __init__() {
			at.SHADERDEFINE_RENDERMODE_BILLBOARD = F.getDefineByName("SPHERHBILLBOARD"), at
				.SHADERDEFINE_RENDERMODE_STRETCHEDBILLBOARD = F.getDefineByName("STRETCHEDBILLBOARD"), at
				.SHADERDEFINE_RENDERMODE_HORIZONTALBILLBOARD = F.getDefineByName("HORIZONTALBILLBOARD"), at
				.SHADERDEFINE_RENDERMODE_VERTICALBILLBOARD = F.getDefineByName("VERTICALBILLBOARD"), at
				.SHADERDEFINE_COLOROVERLIFETIME = F.getDefineByName("COLOROVERLIFETIME"), at
				.SHADERDEFINE_RANDOMCOLOROVERLIFETIME = F.getDefineByName("RANDOMCOLOROVERLIFETIME"), at
				.SHADERDEFINE_VELOCITYOVERLIFETIMECONSTANT = F.getDefineByName("VELOCITYOVERLIFETIMECONSTANT"), at
				.SHADERDEFINE_VELOCITYOVERLIFETIMECURVE = F.getDefineByName("VELOCITYOVERLIFETIMECURVE"), at
				.SHADERDEFINE_VELOCITYOVERLIFETIMERANDOMCONSTANT = F.getDefineByName(
					"VELOCITYOVERLIFETIMERANDOMCONSTANT"), at.SHADERDEFINE_VELOCITYOVERLIFETIMERANDOMCURVE = F
				.getDefineByName("VELOCITYOVERLIFETIMERANDOMCURVE"), at.SHADERDEFINE_TEXTURESHEETANIMATIONCURVE = F
				.getDefineByName("TEXTURESHEETANIMATIONCURVE"), at.SHADERDEFINE_TEXTURESHEETANIMATIONRANDOMCURVE = F
				.getDefineByName("TEXTURESHEETANIMATIONRANDOMCURVE"), at.SHADERDEFINE_ROTATIONOVERLIFETIME = F
				.getDefineByName("ROTATIONOVERLIFETIME"), at.SHADERDEFINE_ROTATIONOVERLIFETIMESEPERATE = F
				.getDefineByName("ROTATIONOVERLIFETIMESEPERATE"), at.SHADERDEFINE_ROTATIONOVERLIFETIMECONSTANT = F
				.getDefineByName("ROTATIONOVERLIFETIMECONSTANT"), at.SHADERDEFINE_ROTATIONOVERLIFETIMECURVE = F
				.getDefineByName("ROTATIONOVERLIFETIMECURVE"), at.SHADERDEFINE_ROTATIONOVERLIFETIMERANDOMCONSTANTS =
				F.getDefineByName("ROTATIONOVERLIFETIMERANDOMCONSTANTS"), at
				.SHADERDEFINE_ROTATIONOVERLIFETIMERANDOMCURVES = F.getDefineByName(
					"ROTATIONOVERLIFETIMERANDOMCURVES"), at.SHADERDEFINE_SIZEOVERLIFETIMECURVE = F.getDefineByName(
					"SIZEOVERLIFETIMECURVE"), at.SHADERDEFINE_SIZEOVERLIFETIMECURVESEPERATE = F.getDefineByName(
					"SIZEOVERLIFETIMECURVESEPERATE"), at.SHADERDEFINE_SIZEOVERLIFETIMERANDOMCURVES = F
				.getDefineByName("SIZEOVERLIFETIMERANDOMCURVES"), at
				.SHADERDEFINE_SIZEOVERLIFETIMERANDOMCURVESSEPERATE = F.getDefineByName(
					"SIZEOVERLIFETIMERANDOMCURVESSEPERATE"), at.SHADERDEFINE_RENDERMODE_MESH = F.getDefineByName(
					"RENDERMODE_MESH"), at.SHADERDEFINE_SHAPE = F.getDefineByName("SHAPE")
		}
		get particleSystem() {
			return this._particleSystem
		}
		get particleRenderer() {
			return this._render
		}
		constructor() {
			super(null), this._render = new nt(this), this._particleSystem = new ft(this);
			var e = this._render._renderElements[0] = new Ge;
			e.setTransform(this._transform), e.render = this._render, e.setGeometry(this._particleSystem), e
				.material = rt.defaultMaterial
		}
		static _initStartLife(e) {
			for (var t = new dt, r = e.startLifetimes, i = 0, a = r.length; i < a; i++) {
				var n = r[i];
				t.add(n.key, n.value)
			}
			return t
		}
		_initParticleVelocity(e) {
			for (var t = new dt, r = e.velocitys, i = 0, a = r.length; i < a; i++) {
				var n = r[i];
				t.add(n.key, n.value)
			}
			return t
		}
		_initParticleColor(e) {
			var t, r, i = new tt(4, 4),
				a = e.alphas;
			for (t = 0, r = a.length; t < r; t++) {
				var n = a[t];
				3 === t && 1 !== n.key && (n.key = 1, console.log(
					"GradientDataColor warning:the forth key is  be force set to 1.")), i.addColorAlpha(n.key, n
					.value)
			}
			var s = e.rgbs;
			for (t = 0, r = s.length; t < r; t++) {
				var o = s[t],
					l = o.value;
				3 === t && 1 !== o.key && (o.key = 1, console.log(
					"GradientDataColor warning:the forth key is  be force set to 1.")), i.addColorRGB(o.key,
					new te(l[0], l[1], l[2], 1))
			}
			return i
		}
		_initParticleSize(e) {
			for (var t = new dt, r = e.sizes, i = 0, a = r.length; i < a; i++) {
				var n = r[i];
				t.add(n.key, n.value)
			}
			return t
		}
		_initParticleRotation(e) {
			for (var t = new dt, r = e.angularVelocitys, i = 0, a = r.length; i < a; i++) {
				var n = r[i];
				t.add(n.key, n.value / 180 * Math.PI)
			}
			return t
		}
		_initParticleFrame(e) {
			for (var t = new St, r = e.frames, i = 0, a = r.length; i < a; i++) {
				var n = r[i];
				t.add(n.key, n.value)
			}
			return t
		}
		_parse(e, r) {
			super._parse(e, r);
			const s = Math.PI / 180;
			var o, l, _, h = this.particleRenderer,
				c = e.material;
			c && (_ = t.Loader.getRes(c.path)), h.sharedMaterial = _;
			var d = e.meshPath;
			d && (h.mesh = t.Loader.getRes(d)), h.renderMode = e.renderMode, h.stretchedBillboardCameraSpeedScale =
				e.stretchedBillboardCameraSpeedScale, h.stretchedBillboardSpeedScale = e
				.stretchedBillboardSpeedScale, h.stretchedBillboardLengthScale = e.stretchedBillboardLengthScale, h
				.sortingFudge = e.sortingFudge ? e.sortingFudge : 0;
			var u = this.particleSystem;
			u.isPerformanceMode = e.isPerformanceMode, u.duration = e.duration, u.looping = e.looping, u.prewarm = e
				.prewarm, u.startDelayType = e.startDelayType, u.startDelay = e.startDelay, u.startDelayMin = e
				.startDelayMin, u.startDelayMax = e.startDelayMax, u.startLifetimeType = e.startLifetimeType, u
				.startLifetimeConstant = e.startLifetimeConstant, u.startLifeTimeGradient = Vt._initStartLife(e
					.startLifetimeGradient), u.startLifetimeConstantMin = e.startLifetimeConstantMin, u
				.startLifetimeConstantMax = e.startLifetimeConstantMax, u.startLifeTimeGradientMin = Vt
				._initStartLife(e.startLifetimeGradientMin), u.startLifeTimeGradientMax = Vt._initStartLife(e
					.startLifetimeGradientMax), u.startSpeedType = e.startSpeedType, u.startSpeedConstant = e
				.startSpeedConstant, u.startSpeedConstantMin = e.startSpeedConstantMin, u.startSpeedConstantMax = e
				.startSpeedConstantMax, u.threeDStartSize = e.threeDStartSize, u.startSizeType = e.startSizeType, u
				.startSizeConstant = e.startSizeConstant;
			var f = e.startSizeConstantSeparate,
				m = u.startSizeConstantSeparate;
			m.x = f[0], m.y = f[1], m.z = f[2], u.startSizeConstantMin = e.startSizeConstantMin, u
				.startSizeConstantMax = e.startSizeConstantMax;
			var E = e.startSizeConstantMinSeparate,
				T = u.startSizeConstantMinSeparate;
			T.x = E[0], T.y = E[1], T.z = E[2];
			var p = e.startSizeConstantMaxSeparate,
				g = u.startSizeConstantMaxSeparate;
			g.x = p[0], g.y = p[1], g.z = p[2], u.threeDStartRotation = e.threeDStartRotation, u.startRotationType =
				e.startRotationType, u.startRotationConstant = e.startRotationConstant * s;
			var S = e.startRotationConstantSeparate,
				v = u.startRotationConstantSeparate;
			v.x = S[0] * s, v.y = S[1] * s, v.z = S[2] * s, u.startRotationConstantMin = e
				.startRotationConstantMin * s, u.startRotationConstantMax = e.startRotationConstantMax * s;
			var R = e.startRotationConstantMinSeparate,
				I = u.startRotationConstantMinSeparate;
			I.x = R[0] * s, I.y = R[1] * s, I.z = R[2] * s;
			var x = e.startRotationConstantMaxSeparate,
				A = u.startRotationConstantMaxSeparate;
			A.x = x[0] * s, A.y = x[1] * s, A.z = x[2] * s, u.randomizeRotationDirection = e
				.randomizeRotationDirection, u.startColorType = e.startColorType;
			var D = e.startColorConstant,
				M = u.startColorConstant;
			M.x = D[0], M.y = D[1], M.z = D[2], M.w = D[3];
			var L = e.startColorConstantMin,
				C = u.startColorConstantMin;
			C.x = L[0], C.y = L[1], C.z = L[2], C.w = L[3];
			var y = e.startColorConstantMax,
				O = u.startColorConstantMax;
			O.x = y[0], O.y = y[1], O.z = y[2], O.w = y[3], u.gravityModifier = e.gravityModifier, u
				.simulationSpace = e.simulationSpace, void 0 !== e.simulationSpeed && (u.simulationSpeed = e
					.simulationSpeed), u.scaleMode = e.scaleMode, u.playOnAwake = e.playOnAwake, u.maxParticles = e
				.maxParticles;
			var N = e.autoRandomSeed;
			null != N && (u.autoRandomSeed = N);
			var P = e.randomSeed;
			null != P && (u.randomSeed[0] = P);
			var w = e.emission,
				V = u.emission;
			if (w) {
				V.emissionRate = w.emissionRate;
				var b = w.bursts;
				if (b)
					for (o = 0, l = b.length; o < l; o++) {
						var F = b[o];
						V.addBurst(new mt(F.time, F.min, F.max))
					}
				V.enbale = w.enable
			} else V.enbale = !1;
			var B = e.shape;
			if (B) {
				var U;
				switch (B.shapeType) {
					case 0:
						var G;
						U = G = new yt, G.radius = B.sphereRadius, G.emitFromShell = B.sphereEmitFromShell, G
							.randomDirection = B.sphereRandomDirection;
						break;
					case 1:
						var z;
						U = z = new Ct, z.radius = B.hemiSphereRadius, z.emitFromShell = B.hemiSphereEmitFromShell,
							z.randomDirection = B.hemiSphereRandomDirection;
						break;
					case 2:
						var H;
						U = H = new Lt, H.angle = B.coneAngle * s, H.radius = B.coneRadius, H.length = B.coneLength,
							H.emitType = B.coneEmitType, H.randomDirection = B.coneRandomDirection;
						break;
					case 3:
						var W;
						U = W = new Dt, W.x = B.boxX, W.y = B.boxY, W.z = B.boxZ, W.randomDirection = B
							.boxRandomDirection;
						break;
					case 7:
						var k;
						U = k = new Mt, k.radius = B.circleRadius, k.arc = B.circleArc * s, k.emitFromEdge = B
							.circleEmitFromEdge, k.randomDirection = B.circleRandomDirection;
						break;
					default:
						var X;
						U = X = new Mt, X.radius = B.circleRadius, X.arc = B.circleArc * s, X.emitFromEdge = B
							.circleEmitFromEdge, X.randomDirection = B.circleRandomDirection
				}
				U.enable = B.enable, u.shape = U
			}
			var Y = e.velocityOverLifetime;
			if (Y) {
				var Z, j = Y.velocity;
				switch (j.type) {
					case 0:
						var q = j.constant;
						Z = Rt.createByConstant(new n(q[0], q[1], q[2]));
						break;
					case 1:
						Z = Rt.createByGradient(this._initParticleVelocity(j.gradientX), this._initParticleVelocity(
							j.gradientY), this._initParticleVelocity(j.gradientZ));
						break;
					case 2:
						var Q = j.constantMin,
							K = j.constantMax;
						Z = Rt.createByRandomTwoConstant(new n(Q[0], Q[1], Q[2]), new n(K[0], K[1], K[2]));
						break;
					case 3:
						Z = Rt.createByRandomTwoGradient(this._initParticleVelocity(j.gradientXMin), this
							._initParticleVelocity(j.gradientXMax), this._initParticleVelocity(j.gradientYMin),
							this._initParticleVelocity(j.gradientYMax), this._initParticleVelocity(j
								.gradientZMin), this._initParticleVelocity(j.gradientZMax))
				}
				var J = new wt(Z);
				J.space = Y.space, J.enbale = Y.enable, u.velocityOverLifetime = J
			}
			var $ = e.colorOverLifetime;
			if ($) {
				var ee, te = $.color;
				switch (te.type) {
					case 0:
						var re = te.constant;
						ee = Et.createByConstant(new a(re[0], re[1], re[2], re[3]));
						break;
					case 1:
						ee = Et.createByGradient(this._initParticleColor(te.gradient));
						break;
					case 2:
						var ie = te.constantMin,
							ae = te.constantMax;
						ee = Et.createByRandomTwoConstant(new a(ie[0], ie[1], ie[2], ie[3]), new a(ae[0], ae[1], ae[
							2], ae[3]));
						break;
					case 3:
						ee = Et.createByRandomTwoGradient(this._initParticleColor(te.gradientMin), this
							._initParticleColor(te.gradientMax))
				}
				var ne = new Tt(ee);
				ne.enbale = $.enable, u.colorOverLifetime = ne
			}
			var se = e.sizeOverLifetime;
			if (se) {
				var oe, le = se.size;
				switch (le.type) {
					case 0:
						oe = le.separateAxes ? vt.createByGradientSeparate(this._initParticleSize(le.gradientX),
								this._initParticleSize(le.gradientY), this._initParticleSize(le.gradientZ)) : vt
							.createByGradient(this._initParticleSize(le.gradient));
						break;
					case 1:
						if (le.separateAxes) {
							var _e = le.constantMinSeparate,
								he = le.constantMaxSeparate;
							oe = vt.createByRandomTwoConstantSeparate(new n(_e[0], _e[1], _e[2]), new n(he[0], he[
								1], he[2]))
						} else oe = vt.createByRandomTwoConstant(le.constantMin, le.constantMax);
						break;
					case 2:
						oe = le.separateAxes ? vt.createByRandomTwoGradientSeparate(this._initParticleSize(le
									.gradientXMin), this._initParticleSize(le.gradientYMin), this._initParticleSize(
									le.gradientZMin), this._initParticleSize(le.gradientXMax), this
								._initParticleSize(le.gradientYMax), this._initParticleSize(le.gradientZMax)) : vt
							.createByRandomTwoGradient(this._initParticleSize(le.gradientMin), this
								._initParticleSize(le.gradientMax))
				}
				var ce = new Ot(oe);
				ce.enbale = se.enable, u.sizeOverLifetime = ce
			}
			var de = e.rotationOverLifetime;
			if (de) {
				var ue, fe = de.angularVelocity;
				switch (fe.type) {
					case 0:
						if (fe.separateAxes) {
							var me = fe.constantSeparate;
							ue = gt.createByConstantSeparate(new n(me[0] * s, me[1] * s, me[2] * s))
						} else ue = gt.createByConstant(fe.constant * s);
						break;
					case 1:
						ue = fe.separateAxes ? gt.createByGradientSeparate(this._initParticleRotation(fe.gradientX),
								this._initParticleRotation(fe.gradientY), this._initParticleRotation(fe.gradientZ)
								) : gt.createByGradient(this._initParticleRotation(fe.gradient));
						break;
					case 2:
						if (fe.separateAxes) {
							var Ee = fe.constantMinSeparate,
								Te = fe.constantMaxSeparate;
							ue = gt.createByRandomTwoConstantSeparate(new n(Ee[0] * s, Ee[1] * s, Ee[2] * s), new n(
								Te[0] * s, Te[1] * s, Te[2] * s))
						} else ue = gt.createByRandomTwoConstant(fe.constantMin * s, fe.constantMax * s);
						break;
					case 3:
						fe.separateAxes || (ue = gt.createByRandomTwoGradient(this._initParticleRotation(fe
							.gradientMin), this._initParticleRotation(fe.gradientMax)))
				}
				var pe = new It(ue);
				pe.enbale = de.enable, u.rotationOverLifetime = pe
			}
			var ge = e.textureSheetAnimation;
			if (ge) {
				var Se, ve = ge.frame;
				switch (ve.type) {
					case 0:
						Se = pt.createByConstant(ve.constant);
						break;
					case 1:
						Se = pt.createByOverTime(this._initParticleFrame(ve.overTime));
						break;
					case 2:
						Se = pt.createByRandomTwoConstant(ve.constantMin, ve.constantMax);
						break;
					case 3:
						Se = pt.createByRandomTwoOverTime(this._initParticleFrame(ve.overTimeMin), this
							._initParticleFrame(ve.overTimeMax))
				}
				var Re, Ie = ge.startFrame;
				switch (Ie.type) {
					case 0:
						Re = Nt.createByConstant(Ie.constant);
						break;
					case 1:
						Re = Nt.createByRandomTwoConstant(Ie.constantMin, Ie.constantMax)
				}
				var xe = new Pt(Se, Re);
				xe.enable = ge.enable;
				var Ae = ge.tiles;
				xe.tiles = new i(Ae[0], Ae[1]), xe.type = ge.type, xe.randomRow = ge.randomRow;
				var De = ge.rowIndex;
				void 0 !== De && (xe.rowIndex = De), xe.cycles = ge.cycles, u.textureSheetAnimation = xe
			}
		}
		_activeHierarchy(e) {
			super._activeHierarchy(e), this.particleSystem.playOnAwake && this.particleSystem.play()
		}
		_inActiveHierarchy(e) {
			super._inActiveHierarchy(e), this.particleSystem.isAlive && this.particleSystem.simulate(0, !0)
		}
		_cloneTo(e, t, r) {
			var i = e,
				a = i._particleSystem;
			this._particleSystem.cloneTo(a);
			var n = i._render,
				s = this._render;
			n.sharedMaterials = s.sharedMaterials, n.enable = s.enable, n.renderMode = s.renderMode, n.mesh = s
				.mesh, n.stretchedBillboardCameraSpeedScale = s.stretchedBillboardCameraSpeedScale, n
				.stretchedBillboardSpeedScale = s.stretchedBillboardSpeedScale, n.stretchedBillboardLengthScale = s
				.stretchedBillboardLengthScale, n.sortingFudge = s.sortingFudge, super._cloneTo(e, t, r)
		}
		destroy(e = !0) {
			this.destroyed || (super.destroy(e), this._particleSystem.destroy(), this._particleSystem = null)
		}
		_create() {
			return new Vt
		}
	}
	class bt extends W {
		constructor() {
			super(), this.setShaderName("LineShader"), this._shaderValues.setVector(bt.COLOR, new a(1, 1, 1, 1))
		}
		static __initDefine__() {}
		get color() {
			return this._shaderValues.getVector(bt.COLOR)
		}
		set color(e) {
			this._shaderValues.setVector(bt.COLOR, e)
		}
		set depthWrite(e) {
			this._shaderValues.setBool(bt.DEPTH_WRITE, e)
		}
		get depthWrite() {
			return this._shaderValues.getBool(bt.DEPTH_WRITE)
		}
		set cull(e) {
			this._shaderValues.setInt(bt.CULL, e)
		}
		get cull() {
			return this._shaderValues.getInt(bt.CULL)
		}
		set blend(e) {
			this._shaderValues.setInt(bt.BLEND, e)
		}
		get blend() {
			return this._shaderValues.getInt(bt.BLEND)
		}
		set blendSrc(e) {
			this._shaderValues.setInt(bt.BLEND_SRC, e)
		}
		get blendSrc() {
			return this._shaderValues.getInt(bt.BLEND_SRC)
		}
		set blendDst(e) {
			this._shaderValues.setInt(bt.BLEND_DST, e)
		}
		get blendDst() {
			return this._shaderValues.getInt(bt.BLEND_DST)
		}
		set depthTest(e) {
			this._shaderValues.setInt(bt.DEPTH_TEST, e)
		}
		get depthTest() {
			return this._shaderValues.getInt(bt.DEPTH_TEST)
		}
		clone() {
			var e = new bt;
			return this.cloneTo(e), e
		}
	}
	bt.COLOR = F.propertyNameToID("u_Color"), bt.CULL = F.propertyNameToID("s_Cull"), bt.BLEND = F.propertyNameToID(
			"s_Blend"), bt.BLEND_SRC = F.propertyNameToID("s_BlendSrc"), bt.BLEND_DST = F.propertyNameToID(
		"s_BlendDst"), bt.DEPTH_TEST = F.propertyNameToID("s_DepthTest"), bt.DEPTH_WRITE = F.propertyNameToID(
			"s_DepthWrite");
	class Ft {
		static get vertexDeclaration() {
			return Ft._vertexDeclaration
		}
		static __init__() {
			Ft._vertexDeclaration = new de(28, [new ue(0, ce.Vector3, fe.MESH_POSITION0), new ue(12, ce.Vector4, fe
				.MESH_COLOR0)])
		}
		get vertexDeclaration() {
			return Ft._vertexDeclaration
		}
		constructor() {}
	}
	class Bt extends We {
		constructor() {
			super()
		}
		add(e) {
			if (-1 !== e._indexInCastShadowList) throw "CastShadowList:element has  in  CastShadowList.";
			this._add(e), e._indexInCastShadowList = this.length++
		}
		remove(e) {
			var t = e._indexInCastShadowList;
			if (this.length--, t !== this.length) {
				var r = this.elements[this.length];
				this.elements[t] = r, r._indexInCastShadowList = t
			}
			e._indexInCastShadowList = -1
		}
	}
	class Ut extends We {
		constructor() {
			super()
		}
		add(e) {
			e._getIndexInList();
			this._add(e), e._setIndexInList(this.length++)
		}
		remove(e) {
			var t = e._getIndexInList();
			if (this.length--, t !== this.length) {
				var r = this.elements[this.length];
				this.elements[t] = r, null != r && r._setIndexInList(t)
			}
			null != e && e._setIndexInList(-1)
		}
	}
	class Gt {
		constructor() {
			this._pressedSprite = null, this._pressedLoopCount = -1, this.sprite = null, this.mousePositionX = 0,
				this.mousePositionY = 0
		}
	}
	class zt {
		constructor() {
			this._indexInList = -1, this._identifier = -1, this._position = new i
		}
		get identifier() {
			return this._identifier
		}
		get position() {
			return this._position
		}
		_getIndexInList() {
			return this._indexInList
		}
		_setIndexInList(e) {
			this._indexInList = e
		}
	}
	class Ht {
		constructor() {
			this.succeeded = !1, this.collider = null, this.point = new n, this.normal = new n, this.hitFraction = 0
		}
	}
	class Wt extends We {
		constructor() {
			super()
		}
		add(e) {
			if (-1 !== e._inPhysicUpdateListIndex) throw "PhysicsUpdateList:element has  in  PhysicsUpdateList.";
			this._add(e), e._inPhysicUpdateListIndex = this.length++
		}
		remove(e) {
			var t = e._inPhysicUpdateListIndex;
			if (this.length--, t !== this.length) {
				var r = this.elements[this.length];
				this.elements[t] = r, r._inPhysicUpdateListIndex = t
			}
			e._inPhysicUpdateListIndex = -1
		}
	}
	class kt {
		constructor() {
			this._idCounter = 0, this.colliderA = null, this.colliderB = null, this.distance = 0, this.normal =
				new n, this.positionOnA = new n, this.positionOnB = new n, this._id = ++this._idCounter
		}
	}
	class Xt {
		constructor() {
			this._lastUpdateFrame = -2147483648, this._updateFrame = -2147483648, this._isTrigger = !1, this
				.contacts = []
		}
		_setUpdateFrame(e) {
			this._lastUpdateFrame = this._updateFrame, this._updateFrame = e
		}
	}
	class Yt {
		constructor() {
			this._hitResultsPoolIndex = 0, this._hitResultsPool = [], this._contactPonintsPoolIndex = 0, this
				._contactPointsPool = [], this._collisionsPool = [], this._collisions = {}
		}
		getHitResult() {
			var e = this._hitResultsPool[this._hitResultsPoolIndex++];
			return e || (e = new Ht, this._hitResultsPool.push(e)), e
		}
		recoverAllHitResultsPool() {
			this._hitResultsPoolIndex = 0
		}
		getContactPoints() {
			var e = this._contactPointsPool[this._contactPonintsPoolIndex++];
			return e || (e = new kt, this._contactPointsPool.push(e)), e
		}
		recoverAllContactPointsPool() {
			this._contactPonintsPoolIndex = 0
		}
		getCollision(e, t) {
			var r, i = e.id,
				a = t.id,
				n = this._collisions[i];
			return n && (r = n[a]), r || (n || (n = {}, this._collisions[i] = n), (r = 0 === this._collisionsPool
				.length ? new Xt : this._collisionsPool.pop())._colliderA = e, r._colliderB = t, n[a] = r), r
		}
		recoverCollision(e) {
			var t = e._colliderA.id,
				r = e._colliderB.id;
			this._collisions[t][r] = null, this._collisionsPool.push(e)
		}
		garbageCollection() {
			for (var e in this._hitResultsPoolIndex = 0, this._hitResultsPool.length = 0, this
					._contactPonintsPoolIndex = 0, this._contactPointsPool.length = 0, this._collisionsPool.length =
					0, this._collisionsPool) {
				var t = this._collisionsPool[e],
					r = !0;
				for (var i in t) t[i] ? r = !1 : delete t[i];
				r && delete this._collisionsPool[e]
			}
		}
	}
	class Zt {}
	Zt._physics3D = null, Zt._enbalePhysics = !1;
	class jt {
		constructor() {
			this._scale = new n(1, 1, 1), this._centerMatrix = new p, this._attatched = !1, this
				._indexInCompound = -1, this._compoundParent = null, this._attatchedCollisionObject = null, this
				._referenceCount = 0, this._localOffset = new n(0, 0, 0), this._localRotation = new u(0, 0, 0, 1),
				this.needsCustomCollisionCallback = !1
		}
		static __init__() {
			jt._nativeScale = new Zt._physics3D.btVector3(1, 1, 1), jt._nativeVector30 = new Zt._physics3D
				.btVector3(0, 0, 0), jt._nativQuaternion0 = new Zt._physics3D.btQuaternion(0, 0, 0, 1), jt
				._nativeTransform0 = new Zt._physics3D.btTransform
		}
		static _createAffineTransformation(e, t, r) {
			var i = t.x,
				a = t.y,
				n = t.z,
				s = t.w,
				o = i + i,
				l = a + a,
				_ = n + n,
				h = i * o,
				c = i * l,
				d = i * _,
				u = a * l,
				f = a * _,
				m = n * _,
				E = s * o,
				T = s * l,
				p = s * _;
			r[0] = 1 - (u + m), r[1] = c + p, r[2] = d - T, r[3] = 0, r[4] = c - p, r[5] = 1 - (h + m), r[6] = f +
				E, r[7] = 0, r[8] = d + T, r[9] = f - E, r[10] = 1 - (h + u), r[11] = 0, r[12] = e.x, r[13] = e.y,
				r[14] = e.z, r[15] = 1
		}
		get type() {
			return this._type
		}
		get localOffset() {
			return this._localOffset
		}
		set localOffset(e) {
			this._localOffset = e, this._compoundParent && this._compoundParent._updateChildTransform(this)
		}
		get localRotation() {
			return this._localRotation
		}
		set localRotation(e) {
			this._localRotation = e, this._compoundParent && this._compoundParent._updateChildTransform(this)
		}
		_setScale(e) {
			this._compoundParent ? this.updateLocalTransformations() : (jt._nativeScale.setValue(e.x, e.y, e.z),
				this._nativeShape.setLocalScaling(jt._nativeScale))
		}
		_addReference() {
			this._referenceCount++
		}
		_removeReference() {
			this._referenceCount--
		}
		updateLocalTransformations() {
			if (this._compoundParent) {
				var e = jt._tempVector30;
				n.multiply(this.localOffset, this._scale, e), jt._createAffineTransformation(e, this.localRotation,
					this._centerMatrix.elements)
			} else jt._createAffineTransformation(this.localOffset, this.localRotation, this._centerMatrix.elements)
		}
		cloneTo(e) {
			var t = e;
			this._localOffset.cloneTo(t.localOffset), this._localRotation.cloneTo(t.localRotation), t.localOffset =
				t.localOffset, t.localRotation = t.localRotation
		}
		clone() {
			return null
		}
		destroy() {
			this._nativeShape && (Zt._physics3D.destroy(this._nativeShape), this._nativeShape = null)
		}
	}
	jt.SHAPEORIENTATION_UPX = 0, jt.SHAPEORIENTATION_UPY = 1, jt.SHAPEORIENTATION_UPZ = 2, jt.SHAPETYPES_BOX = 0, jt
		.SHAPETYPES_SPHERE = 1, jt.SHAPETYPES_CYLINDER = 2, jt.SHAPETYPES_CAPSULE = 3, jt.SHAPETYPES_CONVEXHULL = 4, jt
		.SHAPETYPES_COMPOUND = 5, jt.SHAPETYPES_STATICPLANE = 6, jt.SHAPETYPES_CONE = 7, jt._tempVector30 = new n;
	class qt extends jt {
		static __init__() {
			qt._nativeSize = new Zt._physics3D.btVector3(0, 0, 0)
		}
		get sizeX() {
			return this._sizeX
		}
		get sizeY() {
			return this._sizeY
		}
		get sizeZ() {
			return this._sizeZ
		}
		constructor(e = 1, t = 1, r = 1) {
			super(), this._sizeX = e, this._sizeY = t, this._sizeZ = r, this._type = jt.SHAPETYPES_BOX, qt
				._nativeSize.setValue(e / 2, t / 2, r / 2), this._nativeShape = new Zt._physics3D.btBoxShape(qt
					._nativeSize)
		}
		clone() {
			var e = new qt(this._sizeX, this._sizeY, this._sizeZ);
			return this.cloneTo(e), e
		}
	}
	class Qt extends jt {
		constructor(e = .5, t = 1.25, r = jt.SHAPEORIENTATION_UPY) {
			switch (super(), this._radius = e, this._length = t, this._orientation = r, this._type = jt
				.SHAPETYPES_CAPSULE, r) {
				case jt.SHAPEORIENTATION_UPX:
					this._nativeShape = new Zt._physics3D.btCapsuleShapeX(e, t - 2 * e);
					break;
				case jt.SHAPEORIENTATION_UPY:
					this._nativeShape = new Zt._physics3D.btCapsuleShape(e, t - 2 * e);
					break;
				case jt.SHAPEORIENTATION_UPZ:
					this._nativeShape = new Zt._physics3D.btCapsuleShapeZ(e, t - 2 * e);
					break;
				default:
					throw "CapsuleColliderShape:unknown orientation."
			}
		}
		get radius() {
			return this._radius
		}
		get length() {
			return this._length
		}
		get orientation() {
			return this._orientation
		}
		_setScale(e) {
			var t = Qt._tempVector30;
			switch (this.orientation) {
				case jt.SHAPEORIENTATION_UPX:
					t.x = e.x, t.y = t.z = Math.max(e.y, e.z);
					break;
				case jt.SHAPEORIENTATION_UPY:
					t.y = e.y, t.x = t.z = Math.max(e.x, e.z);
					break;
				case jt.SHAPEORIENTATION_UPZ:
					t.z = e.z, t.x = t.y = Math.max(e.x, e.y);
					break;
				default:
					throw "CapsuleColliderShape:unknown orientation."
			}
			super._setScale(t)
		}
		clone() {
			var e = new Qt(this._radius, this._length, this._orientation);
			return this.cloneTo(e), e
		}
	}
	Qt._tempVector30 = new n;
	class Kt extends jt {
		constructor() {
			super(), this._childColliderShapes = [], this._type = jt.SHAPETYPES_COMPOUND, this._nativeShape = new Zt
				._physics3D.btCompoundShape
		}
		static __init__() {
			Kt._nativeVector3One = new Zt._physics3D.btVector3(1, 1, 1), Kt._nativeTransform = new Zt._physics3D
				.btTransform, Kt._nativeOffset = new Zt._physics3D.btVector3(0, 0, 0), Kt._nativRotation = new Zt
				._physics3D.btQuaternion(0, 0, 0, 1)
		}
		_clearChildShape(e) {
			e._attatched = !1, e._compoundParent = null, e._indexInCompound = -1
		}
		_addReference() {}
		_removeReference() {}
		_updateChildTransform(e) {
			var t = e.localOffset,
				r = e.localRotation,
				i = jt._nativeVector30,
				a = jt._nativQuaternion0,
				n = jt._nativeTransform0;
			i.setValue(-t.x, t.y, t.z), a.setValue(-r.x, r.y, r.z, -r.w), n.setOrigin(i), n.setRotation(a), this
				._nativeShape.updateChildTransform(e._indexInCompound, n, !0)
		}
		addChildShape(e) {
			if (e._attatched) throw "CompoundColliderShape: this shape has attatched to other entity.";
			e._attatched = !0, e._compoundParent = this, e._indexInCompound = this._childColliderShapes.length, this
				._childColliderShapes.push(e);
			var t = e.localOffset,
				r = e.localRotation;
			Kt._nativeOffset.setValue(-t.x, t.y, t.z), Kt._nativRotation.setValue(-r.x, r.y, r.z, -r.w), Kt
				._nativeTransform.setOrigin(Kt._nativeOffset), Kt._nativeTransform.setRotation(Kt._nativRotation);
			var i = this._nativeShape.getLocalScaling();
			this._nativeShape.setLocalScaling(Kt._nativeVector3One), this._nativeShape.addChildShape(Kt
					._nativeTransform, e._nativeShape), this._nativeShape.setLocalScaling(i), this
				._attatchedCollisionObject && (this._attatchedCollisionObject.colliderShape = this)
		}
		removeChildShape(e) {
			if (e._compoundParent === this) {
				var t = e._indexInCompound;
				this._clearChildShape(e);
				var r = this._childColliderShapes[this._childColliderShapes.length - 1];
				r._indexInCompound = t, this._childColliderShapes[t] = r, this._childColliderShapes.pop(), this
					._nativeShape.removeChildShapeByIndex(t)
			}
		}
		clearChildShape() {
			for (var e = 0, t = this._childColliderShapes.length; e < t; e++) this._clearChildShape(this
				._childColliderShapes[e]), this._nativeShape.removeChildShapeByIndex(0);
			this._childColliderShapes.length = 0
		}
		getChildShapeCount() {
			return this._childColliderShapes.length
		}
		cloneTo(e) {
			var t = e;
			t.clearChildShape();
			for (var r = 0, i = this._childColliderShapes.length; r < i; r++) t.addChildShape(this
				._childColliderShapes[r].clone())
		}
		clone() {
			var e = new Kt;
			return this.cloneTo(e), e
		}
		destroy() {
			super.destroy();
			for (var e = 0, t = this._childColliderShapes.length; e < t; e++) {
				var r = this._childColliderShapes[e];
				0 === r._referenceCount && r.destroy()
			}
		}
	}
	class Jt extends jt {
		constructor(e = .5, t = 1, r = jt.SHAPEORIENTATION_UPY) {
			switch (super(), this._radius = 1, this._height = .5, this._radius = e, this._height = t, this
				._orientation = r, this._type = jt.SHAPETYPES_CYLINDER, r) {
				case jt.SHAPEORIENTATION_UPX:
					this._nativeShape = new Zt._physics3D.btConeShapeX(e, t);
					break;
				case jt.SHAPEORIENTATION_UPY:
					this._nativeShape = new Zt._physics3D.btConeShape(e, t);
					break;
				case jt.SHAPEORIENTATION_UPZ:
					this._nativeShape = new Zt._physics3D.btConeShapeZ(e, t);
					break;
				default:
					throw "ConeColliderShape:unknown orientation."
			}
		}
		get radius() {
			return this._radius
		}
		get height() {
			return this._height
		}
		get orientation() {
			return this._orientation
		}
		clone() {
			var e = new Jt(this._radius, this._height, this._orientation);
			return this.cloneTo(e), e
		}
	}
	class $t extends jt {
		constructor(e = .5, t = 1, r = jt.SHAPEORIENTATION_UPY) {
			switch (super(), this._radius = 1, this._height = .5, this._radius = e, this._height = t, this
				._orientation = r, this._type = jt.SHAPETYPES_CYLINDER, r) {
				case jt.SHAPEORIENTATION_UPX:
					$t._nativeSize.setValue(t / 2, e, e), this._nativeShape = new Zt._physics3D.btCylinderShapeX($t
						._nativeSize);
					break;
				case jt.SHAPEORIENTATION_UPY:
					$t._nativeSize.setValue(e, t / 2, e), this._nativeShape = new Zt._physics3D.btCylinderShape($t
						._nativeSize);
					break;
				case jt.SHAPEORIENTATION_UPZ:
					$t._nativeSize.setValue(e, e, t / 2), this._nativeShape = new Zt._physics3D.btCylinderShapeZ($t
						._nativeSize);
					break;
				default:
					throw "CapsuleColliderShape:unknown orientation."
			}
		}
		static __init__() {
			$t._nativeSize = new Zt._physics3D.btVector3(0, 0, 0)
		}
		get radius() {
			return this._radius
		}
		get height() {
			return this._height
		}
		get orientation() {
			return this._orientation
		}
		clone() {
			var e = new $t(this._radius, this._height, this._orientation);
			return this.cloneTo(e), e
		}
	}
	class er extends jt {
		constructor() {
			super(), this._mesh = null, this._convex = !1
		}
		get mesh() {
			return this._mesh
		}
		set mesh(e) {
			if (this._mesh !== e) {
				var t = Zt._physics3D;
				this._mesh && t.destroy(this._nativeShape), e && (this._nativeShape = new Zt._physics3D
					.btGImpactMeshShape(e._getPhysicMesh()), this._nativeShape.updateBound()), this._mesh = e
			}
		}
		get convex() {
			return this._convex
		}
		set convex(e) {
			this._convex = e
		}
		_setScale(e) {
			this._compoundParent ? this.updateLocalTransformations() : (jt._nativeScale.setValue(e.x, e.y, e.z),
				this._nativeShape.setLocalScaling(jt._nativeScale), this._nativeShape.updateBound())
		}
		cloneTo(e) {
			var t = e;
			t.convex = this._convex, t.mesh = this._mesh, super.cloneTo(e)
		}
		clone() {
			var e = new er;
			return this.cloneTo(e), e
		}
		destroy() {
			this._nativeShape && (Zt._physics3D.destroy(this._nativeShape), this._nativeShape = null)
		}
	}
	class tr extends jt {
		get radius() {
			return this._radius
		}
		constructor(e = .5) {
			super(), this._radius = e, this._type = jt.SHAPETYPES_SPHERE, this._nativeShape = new Zt._physics3D
				.btSphereShape(e)
		}
		clone() {
			var e = new tr(this._radius);
			return this.cloneTo(e), e
		}
	}
	class rr extends t.Component {
		constructor(e, t) {
			super(), this._restitution = 0, this._friction = .5, this._rollingFriction = 0, this
				._ccdMotionThreshold = 0, this._ccdSweptSphereRadius = 0, this._collisionGroup = it
				.COLLISIONFILTERGROUP_DEFAULTFILTER, this._canCollideWith = it.COLLISIONFILTERGROUP_ALLFILTER,
				this._colliderShape = null, this._transformFlag = 2147483647, this._enableProcessCollisions = !
				0, this._inPhysicUpdateListIndex = -1, this.canScaleShape = !0, this._collisionGroup = e, this
				._canCollideWith = t, rr._physicObjectsMap[this.id] = this
		}
		static __init__() {
			rr._nativeVector30 = new Zt._physics3D.btVector3(0, 0, 0), rr._nativeQuaternion0 = new Zt._physics3D
				.btQuaternion(0, 0, 0, 1)
		}
		static _createAffineTransformationArray(e, t, r, i, a, n, s, o, l) {
			var _ = i + i,
				h = a + a,
				c = n + n,
				d = i * _,
				u = i * h,
				f = i * c,
				m = a * h,
				E = a * c,
				T = n * c,
				p = s * _,
				g = s * h,
				S = s * c,
				v = o[0],
				R = o[1],
				I = o[2];
			l[0] = (1 - (m + T)) * v, l[1] = (u + S) * v, l[2] = (f - g) * v, l[3] = 0, l[4] = (u - S) * R, l[
				5] = (1 - (d + T)) * R, l[6] = (E + p) * R, l[7] = 0, l[8] = (f + g) * I, l[9] = (E - p) * I, l[
					10] = (1 - (d + m)) * I, l[11] = 0, l[12] = e, l[13] = t, l[14] = r, l[15] = 1
		}
		static _creatShape(e) {
			var r;
			switch (e.type) {
				case "BoxColliderShape":
					var i = e.size;
					r = i ? new qt(i[0], i[1], i[2]) : new qt;
					break;
				case "SphereColliderShape":
					r = new tr(e.radius);
					break;
				case "CapsuleColliderShape":
					r = new Qt(e.radius, e.height, e.orientation);
					break;
				case "MeshColliderShape":
					var a = new er;
					e.mesh && (a.mesh = t.Loader.getRes(e.mesh)), r = a;
					break;
				case "ConeColliderShape":
					r = new Jt(e.radius, e.height, e.orientation);
					break;
				case "CylinderColliderShape":
					r = new $t(e.radius, e.height, e.orientation);
					break;
				default:
					throw "unknown shape type."
			}
			if (e.center) {
				var n = r.localOffset;
				n.fromArray(e.center), r.localOffset = n
			}
			return r
		}
		static physicVector3TransformQuat(e, t, r, i, a, n) {
			var s = e.x,
				o = e.y,
				l = e.z,
				_ = a * s + r * l - i * o,
				h = a * o + i * s - t * l,
				c = a * l + t * o - r * s,
				d = -t * s - r * o - i * l;
			n.x = _ * a + d * -t + h * -i - c * -r, n.y = h * a + d * -r + c * -t - _ * -i, n.z = c * a + d * -
				i + _ * -r - h * -t
		}
		static physicQuaternionMultiply(e, t, r, i, a, n) {
			var s = a.x,
				o = a.y,
				l = a.z,
				_ = a.w,
				h = t * l - r * o,
				c = r * s - e * l,
				d = e * o - t * s,
				u = e * s + t * o + r * l;
			n.x = e * _ + s * i + h, n.y = t * _ + o * i + c, n.z = r * _ + l * i + d, n.w = i * _ - u
		}
		get restitution() {
			return this._restitution
		}
		set restitution(e) {
			this._restitution = e, this._nativeColliderObject && this._nativeColliderObject.setRestitution(e)
		}
		get friction() {
			return this._friction
		}
		set friction(e) {
			this._friction = e, this._nativeColliderObject && this._nativeColliderObject.setFriction(e)
		}
		get rollingFriction() {
			return this._nativeColliderObject.getRollingFriction()
		}
		set rollingFriction(e) {
			this._rollingFriction = e, this._nativeColliderObject && this._nativeColliderObject
				.setRollingFriction(e)
		}
		get ccdMotionThreshold() {
			return this._ccdMotionThreshold
		}
		set ccdMotionThreshold(e) {
			this._ccdMotionThreshold = e, this._nativeColliderObject && this._nativeColliderObject
				.setCcdMotionThreshold(e)
		}
		get ccdSweptSphereRadius() {
			return this._ccdSweptSphereRadius
		}
		set ccdSweptSphereRadius(e) {
			this._ccdSweptSphereRadius = e, this._nativeColliderObject && this._nativeColliderObject
				.setCcdSweptSphereRadius(e)
		}
		get isActive() {
			return !!this._nativeColliderObject && this._nativeColliderObject.isActive()
		}
		get enabled() {
			return super.enabled
		}
		set enabled(e) {
			this._enabled != e && (this._simulation && this._colliderShape && (e ? (this
					._derivePhysicsTransformation(!0), this._addToSimulation()) : this
				._removeFromSimulation()), super.enabled = e)
		}
		get colliderShape() {
			return this._colliderShape
		}
		set colliderShape(e) {
			var t = this._colliderShape;
			if (t && (t._attatched = !1, t._attatchedCollisionObject = null), this._colliderShape = e, e) {
				if (e._attatched) throw "PhysicsComponent: this shape has attatched to other entity.";
				if (e._attatched = !0, e._attatchedCollisionObject = this, this._nativeColliderObject) {
					this._nativeColliderObject.setCollisionShape(e._nativeShape);
					var r = this._simulation && this._enabled;
					r && t && this._removeFromSimulation(), this._onShapeChange(e), r && (this
						._derivePhysicsTransformation(!0), this._addToSimulation())
				}
			} else this._simulation && this._enabled && t && this._removeFromSimulation()
		}
		get simulation() {
			return this._simulation
		}
		get collisionGroup() {
			return this._collisionGroup
		}
		set collisionGroup(e) {
			this._collisionGroup !== e && (this._collisionGroup = e, this._simulation && this._colliderShape &&
				this._enabled && (this._removeFromSimulation(), this._addToSimulation()))
		}
		get canCollideWith() {
			return this._canCollideWith
		}
		set canCollideWith(e) {
			this._canCollideWith !== e && (this._canCollideWith = e, this._simulation && this._colliderShape &&
				this._enabled && (this._removeFromSimulation(), this._addToSimulation()))
		}
		_isValid() {
			return this._simulation && this._colliderShape && this._enabled
		}
		_parse(e) {
			null != e.collisionGroup && (this.collisionGroup = e.collisionGroup), null != e.canCollideWith && (
				this.canCollideWith = e.canCollideWith), null != e.ccdMotionThreshold && (this
				.ccdMotionThreshold = e.ccdMotionThreshold), null != e.ccdSweptSphereRadius && (this
				.ccdSweptSphereRadius = e.ccdSweptSphereRadius)
		}
		_parseShape(e) {
			var t = e.length;
			if (1 === t) {
				var r = rr._creatShape(e[0]);
				this.colliderShape = r
			} else {
				for (var i = new Kt, a = 0; a < t; a++) r = rr._creatShape(e[a]), i.addChildShape(r);
				this.colliderShape = i
			}
		}
		_onScaleChange(e) {
			this._colliderShape._setScale(e)
		}
		_setTransformFlag(e, t) {
			t ? this._transformFlag |= e : this._transformFlag &= ~e
		}
		_getTransformFlag(e) {
			return 0 != (this._transformFlag & e)
		}
		_addToSimulation() {}
		_removeFromSimulation() {}
		_derivePhysicsTransformation(e) {
			this._innerDerivePhysicsTransformation(this._nativeColliderObject.getWorldTransform(), e)
		}
		_innerDerivePhysicsTransformation(e, t) {
			var r = this.owner._transform,
				i = r.rotation;
			if (t || this._getTransformFlag(ie.TRANSFORM_WORLDPOSITION)) {
				var a = this._colliderShape.localOffset,
					s = r.position,
					o = rr._nativeVector30;
				if (0 !== a.x || 0 !== a.y || 0 !== a.z) {
					var l = rr._tempVector30;
					rr.physicVector3TransformQuat(a, i.x, i.y, i.z, i.w, l), n.add(s, l, l), o.setValue(-l.x, l
						.y, l.z)
				} else o.setValue(-s.x, s.y, s.z);
				e.setOrigin(o), this._setTransformFlag(ie.TRANSFORM_WORLDPOSITION, !1)
			}
			if (t || this._getTransformFlag(ie.TRANSFORM_WORLDQUATERNION)) {
				var _ = this._colliderShape.localRotation,
					h = rr._nativeQuaternion0;
				if (0 !== _.x || 0 !== _.y || 0 !== _.z || 1 !== _.w) {
					var c = rr._tempQuaternion0;
					rr.physicQuaternionMultiply(i.x, i.y, i.z, i.w, _, c), h.setValue(-c.x, c.y, c.z, -c.w)
				} else h.setValue(-i.x, i.y, i.z, -i.w);
				e.setRotation(h), this._setTransformFlag(ie.TRANSFORM_WORLDQUATERNION, !1)
			}(t || this._getTransformFlag(ie.TRANSFORM_WORLDSCALE)) && (this._onScaleChange(r
				.getWorldLossyScale()), this._setTransformFlag(ie.TRANSFORM_WORLDSCALE, !1))
		}
		_updateTransformComponent(e) {
			var t = this._colliderShape.localOffset,
				r = this._colliderShape.localRotation,
				i = this.owner._transform,
				a = i.position,
				n = i.rotation,
				s = e.getOrigin(),
				o = e.getRotation(),
				l = -o.x(),
				_ = o.y(),
				h = o.z(),
				c = -o.w();
			if (0 !== t.x || 0 !== t.y || 0 !== t.z) {
				var d = rr._tempVector30;
				rr.physicVector3TransformQuat(t, l, _, h, c, d), a.x = -s.x() - d.x, a.y = s.y() - d.y, a.z = s
					.z() - d.z
			} else a.x = -s.x(), a.y = s.y(), a.z = s.z();
			if (i.position = a, 0 !== r.x || 0 !== r.y || 0 !== r.z || 1 !== r.w) {
				var u = rr._tempQuaternion0;
				r.invert(u), rr.physicQuaternionMultiply(l, _, h, c, u, n)
			} else n.x = l, n.y = _, n.z = h, n.w = c;
			i.rotation = n
		}
		_onEnable() {
			this._simulation = this.owner._scene.physicsSimulation, this._nativeColliderObject
				.setContactProcessingThreshold(1e30), this._colliderShape && this._enabled && (this
					._derivePhysicsTransformation(!0), this._addToSimulation())
		}
		_onDisable() {
			this._colliderShape && this._enabled && (this._removeFromSimulation(), -1 !== this
					._inPhysicUpdateListIndex && this._simulation._physicsUpdateList.remove(this)), this
				._simulation = null
		}
		_onShapeChange(e) {
			var t = this._nativeColliderObject,
				r = t.getCollisionFlags();
			e.needsCustomCollisionCallback ? 0 == (r & rr.COLLISIONFLAGS_CUSTOM_MATERIAL_CALLBACK) && t
				.setCollisionFlags(r | rr.COLLISIONFLAGS_CUSTOM_MATERIAL_CALLBACK) : (r & rr
					.COLLISIONFLAGS_CUSTOM_MATERIAL_CALLBACK) > 0 && t.setCollisionFlags(r ^ rr
					.COLLISIONFLAGS_CUSTOM_MATERIAL_CALLBACK)
		}
		_onAdded() {
			this.enabled = this._enabled, this.restitution = this._restitution, this.friction = this._friction,
				this.rollingFriction = this._rollingFriction, this.ccdMotionThreshold = this
				._ccdMotionThreshold, this.ccdSweptSphereRadius = this._ccdSweptSphereRadius, this.owner
				.transform.on(t.Event.TRANSFORM_CHANGED, this, this._onTransformChanged)
		}
		_onDestroy() {
			var e = Zt._physics3D;
			delete rr._physicObjectsMap[this.id], e.destroy(this._nativeColliderObject), this._colliderShape
				.destroy(), super._onDestroy(), this._nativeColliderObject = null, this._colliderShape = null,
				this._simulation = null, this.owner.transform.off(t.Event.TRANSFORM_CHANGED, this, this
					._onTransformChanged)
		}
		_onTransformChanged(e) {
			rr._addUpdateList && (e &= ie.TRANSFORM_WORLDPOSITION | ie.TRANSFORM_WORLDQUATERNION | ie
				.TRANSFORM_WORLDSCALE) && (this._transformFlag |= e, this._isValid() && -1 === this
				._inPhysicUpdateListIndex && this._simulation._physicsUpdateList.add(this))
		}
		_cloneTo(e) {
			var t = e;
			t.restitution = this._restitution, t.friction = this._friction, t.rollingFriction = this
				._rollingFriction, t.ccdMotionThreshold = this._ccdMotionThreshold, t.ccdSweptSphereRadius =
				this._ccdSweptSphereRadius, t.collisionGroup = this._collisionGroup, t.canCollideWith = this
				._canCollideWith, t.canScaleShape = this.canScaleShape, this._colliderShape && (t
					.colliderShape = this._colliderShape.clone())
		}
	}
	rr.ACTIVATIONSTATE_ACTIVE_TAG = 1, rr.ACTIVATIONSTATE_ISLAND_SLEEPING = 2, rr.ACTIVATIONSTATE_WANTS_DEACTIVATION =
		3, rr.ACTIVATIONSTATE_DISABLE_DEACTIVATION = 4, rr.ACTIVATIONSTATE_DISABLE_SIMULATION = 5, rr
		.COLLISIONFLAGS_STATIC_OBJECT = 1, rr.COLLISIONFLAGS_KINEMATIC_OBJECT = 2, rr
		.COLLISIONFLAGS_NO_CONTACT_RESPONSE = 4, rr.COLLISIONFLAGS_CUSTOM_MATERIAL_CALLBACK = 8, rr
		.COLLISIONFLAGS_CHARACTER_OBJECT = 16, rr.COLLISIONFLAGS_DISABLE_VISUALIZE_OBJECT = 32, rr
		.COLLISIONFLAGS_DISABLE_SPU_COLLISION_PROCESSING = 64, rr._tempVector30 = new n, rr._tempQuaternion0 = new u, rr
		._tempQuaternion1 = new u, rr._tempMatrix4x40 = new p, rr._physicObjectsMap = {}, rr._addUpdateList = !0;
	class ir {
		constructor(e, t = 0) {
			this._gravity = new n(0, -10, 0), this._nativeVector3Zero = new Zt._physics3D.btVector3(0, 0, 0), this
				._nativeDefaultQuaternion = new Zt._physics3D.btQuaternion(0, 0, 0, -1), this._collisionsUtils =
				new Yt, this._previousFrameCollisions = [], this._currentFrameCollisions = [], this
				._physicsUpdateList = new Wt, this._characters = [], this._updatedRigidbodies = 0, this
				.maxSubSteps = 1, this.fixedTimeStep = 1 / 60, this.maxSubSteps = e.maxSubSteps, this
				.fixedTimeStep = e.fixedTimeStep;
			var r = Zt._physics3D;
			this._nativeCollisionConfiguration = new r.btDefaultCollisionConfiguration, this._nativeDispatcher =
				new r.btCollisionDispatcher(this._nativeCollisionConfiguration), this._nativeBroadphase = new r
				.btDbvtBroadphase, this._nativeBroadphase.getOverlappingPairCache().setInternalGhostPairCallback(
					new r.btGhostPairCallback);
			var i = e.flags;
			if (i & ir.PHYSICSENGINEFLAGS_COLLISIONSONLY) this._nativeCollisionWorld = new r.btCollisionWorld(this
				._nativeDispatcher, this._nativeBroadphase, this._nativeCollisionConfiguration);
			else {
				if (i & ir.PHYSICSENGINEFLAGS_SOFTBODYSUPPORT)
				throw "PhysicsSimulation:SoftBody processing is not yet available";
				var a = new r.btSequentialImpulseConstraintSolver;
				this._nativeDiscreteDynamicsWorld = new r.btDiscreteDynamicsWorld(this._nativeDispatcher, this
						._nativeBroadphase, a, this._nativeCollisionConfiguration), this._nativeCollisionWorld =
					this._nativeDiscreteDynamicsWorld
			}
			this._nativeDiscreteDynamicsWorld && (this._nativeSolverInfo = this._nativeDiscreteDynamicsWorld
					.getSolverInfo(), this._nativeDispatchInfo = this._nativeDiscreteDynamicsWorld.getDispatchInfo()
					), this._nativeClosestRayResultCallback = new r.ClosestRayResultCallback(this
					._nativeVector3Zero, this._nativeVector3Zero), this._nativeAllHitsRayResultCallback = new r
				.AllHitsRayResultCallback(this._nativeVector3Zero, this._nativeVector3Zero), this
				._nativeClosestConvexResultCallback = new r.ClosestConvexResultCallback(this._nativeVector3Zero,
					this._nativeVector3Zero), this._nativeAllConvexResultCallback = new r.AllConvexResultCallback(
					this._nativeVector3Zero, this._nativeVector3Zero), r
				._btGImpactCollisionAlgorithm_RegisterAlgorithm(this._nativeDispatcher.a)
		}
		static __init__() {
			ir._nativeTempVector30 = new Zt._physics3D.btVector3(0, 0, 0), ir._nativeTempVector31 = new Zt
				._physics3D.btVector3(0, 0, 0), ir._nativeTempQuaternion0 = new Zt._physics3D.btQuaternion(0, 0, 0,
					1), ir._nativeTempQuaternion1 = new Zt._physics3D.btQuaternion(0, 0, 0, 1), ir
				._nativeTempTransform0 = new Zt._physics3D.btTransform, ir._nativeTempTransform1 = new Zt._physics3D
				.btTransform
		}
		static createConstraint() {}
		get continuousCollisionDetection() {
			return this._nativeDispatchInfo.get_m_useContinuous()
		}
		set continuousCollisionDetection(e) {
			this._nativeDispatchInfo.set_m_useContinuous(e)
		}
		get gravity() {
			if (!this._nativeDiscreteDynamicsWorld)
			throw "Simulation:Cannot perform this action when the physics engine is set to CollisionsOnly";
			return this._gravity
		}
		set gravity(e) {
			if (!this._nativeDiscreteDynamicsWorld)
			throw "Simulation:Cannot perform this action when the physics engine is set to CollisionsOnly";
			this._gravity = e;
			var t = ir._nativeTempVector30;
			t.setValue(-e.x, e.y, e.z), this._nativeDiscreteDynamicsWorld.setGravity(t)
		}
		get speculativeContactRestitution() {
			if (!this._nativeDiscreteDynamicsWorld)
			throw "Simulation:Cannot Cannot perform this action when the physics engine is set to CollisionsOnly";
			return this._nativeDiscreteDynamicsWorld.getApplySpeculativeContactRestitution()
		}
		set speculativeContactRestitution(e) {
			if (!this._nativeDiscreteDynamicsWorld)
			throw "Simulation:Cannot Cannot perform this action when the physics engine is set to CollisionsOnly";
			this._nativeDiscreteDynamicsWorld.setApplySpeculativeContactRestitution(e)
		}
		_simulate(e) {
			this._updatedRigidbodies = 0, this._nativeDiscreteDynamicsWorld ? this._nativeDiscreteDynamicsWorld
				.stepSimulation(e, this.maxSubSteps, this.fixedTimeStep) : this._nativeCollisionWorld
				.PerformDiscreteCollisionDetection()
		}
		_destroy() {
			var e = Zt._physics3D;
			this._nativeDiscreteDynamicsWorld ? (e.destroy(this._nativeDiscreteDynamicsWorld), this
					._nativeDiscreteDynamicsWorld = null) : (e.destroy(this._nativeCollisionWorld), this
					._nativeCollisionWorld = null), e.destroy(this._nativeBroadphase), this._nativeBroadphase =
				null, e.destroy(this._nativeDispatcher), this._nativeDispatcher = null, e.destroy(this
					._nativeCollisionConfiguration), this._nativeCollisionConfiguration = null
		}
		_addPhysicsCollider(e, t, r) {
			this._nativeCollisionWorld.addCollisionObject(e._nativeColliderObject, t, r)
		}
		_removePhysicsCollider(e) {
			this._nativeCollisionWorld.removeCollisionObject(e._nativeColliderObject)
		}
		_addRigidBody(e, t, r) {
			if (!this._nativeDiscreteDynamicsWorld)
			throw "Simulation:Cannot perform this action when the physics engine is set to CollisionsOnly";
			this._nativeCollisionWorld.addRigidBody(e._nativeColliderObject, t, r)
		}
		_removeRigidBody(e) {
			if (!this._nativeDiscreteDynamicsWorld)
			throw "Simulation:Cannot perform this action when the physics engine is set to CollisionsOnly";
			this._nativeCollisionWorld.removeRigidBody(e._nativeColliderObject)
		}
		_addCharacter(e, t, r) {
			if (!this._nativeDiscreteDynamicsWorld)
			throw "Simulation:Cannot perform this action when the physics engine is set to CollisionsOnly";
			this._nativeCollisionWorld.addCollisionObject(e._nativeColliderObject, t, r), this._nativeCollisionWorld
				.addAction(e._nativeKinematicCharacter)
		}
		_removeCharacter(e) {
			if (!this._nativeDiscreteDynamicsWorld)
			throw "Simulation:Cannot perform this action when the physics engine is set to CollisionsOnly";
			this._nativeCollisionWorld.removeCollisionObject(e._nativeColliderObject), this._nativeCollisionWorld
				.removeAction(e._nativeKinematicCharacter)
		}
		raycastFromTo(e, t, r = null, i = it.COLLISIONFILTERGROUP_ALLFILTER, a = it.COLLISIONFILTERGROUP_ALLFILTER) {
			var n = this._nativeClosestRayResultCallback,
				s = ir._nativeTempVector30,
				o = ir._nativeTempVector31;
			if (s.setValue(-e.x, e.y, e.z), o.setValue(-t.x, t.y, t.z), n.set_m_rayFromWorld(s), n.set_m_rayToWorld(
					o), n.set_m_collisionFilterGroup(i), n.set_m_collisionFilterMask(a), n.set_m_collisionObject(
					null), n.set_m_closestHitFraction(1), this._nativeCollisionWorld.rayTest(s, o, n), n.hasHit()) {
				if (r) {
					r.succeeded = !0, r.collider = rr._physicObjectsMap[n.get_m_collisionObject().getUserIndex()], r
						.hitFraction = n.get_m_closestHitFraction();
					var l = n.get_m_hitPointWorld(),
						_ = r.point;
					_.x = -l.x(), _.y = l.y(), _.z = l.z();
					var h = n.get_m_hitNormalWorld(),
						c = r.normal;
					c.x = -h.x(), c.y = h.y(), c.z = h.z()
				}
				return !0
			}
			return r && (r.succeeded = !1), !1
		}
		raycastAllFromTo(e, t, r, i = it.COLLISIONFILTERGROUP_ALLFILTER, a = it.COLLISIONFILTERGROUP_ALLFILTER) {
			var n = this._nativeAllHitsRayResultCallback,
				s = ir._nativeTempVector30,
				o = ir._nativeTempVector31;
			r.length = 0, s.setValue(-e.x, e.y, e.z), o.setValue(-t.x, t.y, t.z), n.set_m_rayFromWorld(s), n
				.set_m_rayToWorld(o), n.set_m_collisionFilterGroup(i), n.set_m_collisionFilterMask(a);
			var l = n.get_m_collisionObjects(),
				_ = n.get_m_hitPointWorld(),
				h = n.get_m_hitNormalWorld(),
				c = n.get_m_hitFractions();
			l.clear(), _.clear(), h.clear(), c.clear(), this._nativeCollisionWorld.rayTest(s, o, n);
			var d = l.size();
			if (d > 0) {
				this._collisionsUtils.recoverAllHitResultsPool();
				for (var u = 0; u < d; u++) {
					var f = this._collisionsUtils.getHitResult();
					r.push(f), f.succeeded = !0, f.collider = rr._physicObjectsMap[l.at(u).getUserIndex()], f
						.hitFraction = c.at(u);
					var m = _.at(u),
						E = f.point;
					E.x = -m.x(), E.y = m.y(), E.z = m.z();
					var T = h.at(u),
						p = f.normal;
					p.x = -T.x(), p.y = T.y(), p.z = T.z()
				}
				return !0
			}
			return !1
		}
		rayCast(e, t = null, r = 2147483647, i = it.COLLISIONFILTERGROUP_ALLFILTER, a = it
			.COLLISIONFILTERGROUP_ALLFILTER) {
			var s = e.origin,
				o = ir._tempVector30;
			return n.normalize(e.direction, o), n.scale(o, r, o), n.add(s, o, o), this.raycastFromTo(s, o, t, i, a)
		}
		rayCastAll(e, t, r = 2147483647, i = it.COLLISIONFILTERGROUP_ALLFILTER, a = it.COLLISIONFILTERGROUP_ALLFILTER) {
			var s = e.origin,
				o = ir._tempVector30;
			return n.normalize(e.direction, o), n.scale(o, r, o), n.add(s, o, o), this.raycastAllFromTo(s, o, t, i,
				a)
		}
		shapeCast(e, t, r, i = null, a = null, n = null, s = it.COLLISIONFILTERGROUP_ALLFILTER, o = it
			.COLLISIONFILTERGROUP_ALLFILTER, l = 0) {
			var _ = this._nativeClosestConvexResultCallback,
				h = ir._nativeTempVector30,
				c = ir._nativeTempVector31,
				d = ir._nativeTempQuaternion0,
				u = ir._nativeTempQuaternion1,
				f = ir._nativeTempTransform0,
				m = ir._nativeTempTransform1,
				E = e._nativeShape;
			if (h.setValue(-t.x, t.y, t.z), c.setValue(-r.x, r.y, r.z), _.set_m_collisionFilterGroup(s), _
				.set_m_collisionFilterMask(o), f.setOrigin(h), m.setOrigin(c), a ? (d.setValue(-a.x, a.y, a.z, -a
					.w), f.setRotation(d)) : f.setRotation(this._nativeDefaultQuaternion), n ? (u.setValue(-n.x, n
					.y, n.z, -n.w), m.setRotation(u)) : m.setRotation(this._nativeDefaultQuaternion), _
				.set_m_hitCollisionObject(null), _.set_m_closestHitFraction(1), this._nativeCollisionWorld
				.convexSweepTest(E, f, m, _, l), _.hasHit()) {
				if (i) {
					i.succeeded = !0, i.collider = rr._physicObjectsMap[_.get_m_hitCollisionObject()
					.getUserIndex()], i.hitFraction = _.get_m_closestHitFraction();
					var T = _.get_m_hitPointWorld(),
						p = _.get_m_hitNormalWorld(),
						g = i.point,
						S = i.normal;
					g.x = -T.x(), g.y = T.y(), g.z = T.z(), S.x = -p.x(), S.y = p.y(), S.z = p.z()
				}
				return !0
			}
			return i && (i.succeeded = !1), !1
		}
		shapeCastAll(e, t, r, i, a = null, n = null, s = it.COLLISIONFILTERGROUP_ALLFILTER, o = it
			.COLLISIONFILTERGROUP_ALLFILTER, l = 0) {
			var _ = this._nativeAllConvexResultCallback,
				h = ir._nativeTempVector30,
				c = ir._nativeTempVector31,
				d = ir._nativeTempQuaternion0,
				u = ir._nativeTempQuaternion1,
				f = ir._nativeTempTransform0,
				m = ir._nativeTempTransform1,
				E = e._nativeShape;
			i.length = 0, h.setValue(-t.x, t.y, t.z), c.setValue(-r.x, r.y, r.z), _.set_m_collisionFilterGroup(s), _
				.set_m_collisionFilterMask(o), f.setOrigin(h), m.setOrigin(c), a ? (d.setValue(-a.x, a.y, a.z, -a
					.w), f.setRotation(d)) : f.setRotation(this._nativeDefaultQuaternion), n ? (u.setValue(-n.x, n
					.y, n.z, -n.w), m.setRotation(u)) : m.setRotation(this._nativeDefaultQuaternion);
			var T = _.get_m_collisionObjects();
			T.clear(), this._nativeCollisionWorld.convexSweepTest(E, f, m, _, l);
			var p = T.size();
			if (p > 0) {
				for (var g = _.get_m_hitPointWorld(), S = _.get_m_hitNormalWorld(), v = _.get_m_hitFractions(), R =
						0; R < p; R++) {
					var I = this._collisionsUtils.getHitResult();
					i.push(I), I.succeeded = !0, I.collider = rr._physicObjectsMap[T.at(R).getUserIndex()], I
						.hitFraction = v.at(R);
					var x = g.at(R),
						A = I.point;
					A.x = -x.x(), A.y = x.y(), A.z = x.z();
					var D = S.at(R),
						M = I.normal;
					M.x = -D.x(), M.y = D.y(), M.z = D.z()
				}
				return !0
			}
			return !1
		}
		addConstraint(e, t = !1) {
			if (!this._nativeDiscreteDynamicsWorld)
			throw "Cannot perform this action when the physics engine is set to CollisionsOnly";
			this._nativeDiscreteDynamicsWorld.addConstraint(e._nativeConstraint, t), e._simulation = this
		}
		removeConstraint(e) {
			if (!this._nativeDiscreteDynamicsWorld)
			throw "Cannot perform this action when the physics engine is set to CollisionsOnly";
			this._nativeDiscreteDynamicsWorld.removeConstraint(e._nativeConstraint)
		}
		_updatePhysicsTransformFromRender() {
			for (var e = this._physicsUpdateList.elements, t = 0, r = this._physicsUpdateList.length; t < r; t++) {
				var i = e[t];
				i._derivePhysicsTransformation(!1), i._inPhysicUpdateListIndex = -1
			}
			this._physicsUpdateList.length = 0
		}
		_updateCharacters() {
			for (var e = 0, t = this._characters.length; e < t; e++) {
				var r = this._characters[e];
				r._updateTransformComponent(r._nativeColliderObject.getWorldTransform())
			}
		}
		_updateCollisions() {
			this._collisionsUtils.recoverAllContactPointsPool();
			var e = this._currentFrameCollisions;
			this._currentFrameCollisions = this._previousFrameCollisions, this._currentFrameCollisions.length = 0,
				this._previousFrameCollisions = e;
			for (var r = t.Stat.loopCount, i = this._nativeDispatcher.getNumManifolds(), a = 0; a < i; a++) {
				var n, s = this._nativeDispatcher.getManifoldByIndexInternal(a),
					o = rr._physicObjectsMap[s.getBody0().getUserIndex()],
					l = rr._physicObjectsMap[s.getBody1().getUserIndex()],
					_ = null,
					h = null;
				if ((o.isTrigger || l.isTrigger) && (o.owner._needProcessTriggers || l.owner._needProcessTriggers))
					for (var c = s.getNumContacts(), d = 0; d < c; d++) {
						var u = s.getContactPoint(d),
							f = u.getDistance();
						if (f <= 0) {
							h = (_ = this._collisionsUtils.getCollision(o, l)).contacts, (n = _._updateFrame !==
								r) && (_._isTrigger = !0, h.length = 0);
							break
						}
					} else if ((o.owner._needProcessCollisions || l.owner._needProcessCollisions) && (o
							._enableProcessCollisions || l._enableProcessCollisions))
						for (c = s.getNumContacts(), d = 0; d < c; d++)
							if ((f = (u = s.getContactPoint(d)).getDistance()) <= 0) {
								var m = this._collisionsUtils.getContactPoints();
								m.colliderA = o, m.colliderB = l, m.distance = f;
								var E = u.get_m_normalWorldOnB(),
									T = m.normal;
								T.x = -E.x(), T.y = E.y(), T.z = E.z();
								var p = u.get_m_positionWorldOnA(),
									g = m.positionOnA;
								g.x = -p.x(), g.y = p.y(), g.z = p.z();
								var S = u.get_m_positionWorldOnB(),
									v = m.positionOnB;
								v.x = -S.x(), v.y = S.y(), v.z = S.z(), _ || (h = (_ = this._collisionsUtils
									.getCollision(o, l)).contacts, (n = _._updateFrame !== r) && (_
									._isTrigger = !1, h.length = 0)), h.push(m)
							} _ && n && (this._currentFrameCollisions.push(_), _._setUpdateFrame(r))
			}
		}
		_eventScripts() {
			for (var e = t.Stat.loopCount, r = 0, i = this._currentFrameCollisions.length; r < i; r++) {
				var a = this._currentFrameCollisions[r],
					n = a._colliderA,
					s = a._colliderB;
				if (!n.destroyed && !s.destroyed)
					if (e - a._lastUpdateFrame == 1) {
						var o = n.owner,
							l = o._scripts;
						if (l)
							if (a._isTrigger) {
								if (o._needProcessTriggers)
									for (var _ = 0, h = l.length; _ < h; _++) l[_].onTriggerStay(s)
							} else if (o._needProcessCollisions)
							for (_ = 0, h = l.length; _ < h; _++) a.other = s, l[_].onCollisionStay(a);
						var c = s.owner,
							d = c._scripts;
						if (d)
							if (a._isTrigger) {
								if (c._needProcessTriggers)
									for (_ = 0, h = d.length; _ < h; _++) d[_].onTriggerStay(n)
							} else if (c._needProcessCollisions)
							for (_ = 0, h = d.length; _ < h; _++) a.other = n, d[_].onCollisionStay(a)
					} else {
						if (l = (o = n.owner)._scripts)
							if (a._isTrigger) {
								if (o._needProcessTriggers)
									for (_ = 0, h = l.length; _ < h; _++) l[_].onTriggerEnter(s)
							} else if (o._needProcessCollisions)
							for (_ = 0, h = l.length; _ < h; _++) a.other = s, l[_].onCollisionEnter(a);
						if (d = (c = s.owner)._scripts)
							if (a._isTrigger) {
								if (c._needProcessTriggers)
									for (_ = 0, h = d.length; _ < h; _++) d[_].onTriggerEnter(n)
							} else if (c._needProcessCollisions)
							for (_ = 0, h = d.length; _ < h; _++) a.other = n, d[_].onCollisionEnter(a)
					}
			}
			for (r = 0, i = this._previousFrameCollisions.length; r < i; r++) {
				var u = this._previousFrameCollisions[r],
					f = u._colliderA,
					m = u._colliderB;
				if (!f.destroyed && !m.destroyed && e - u._updateFrame == 1) {
					if (this._collisionsUtils.recoverCollision(u), l = (o = f.owner)._scripts)
						if (u._isTrigger) {
							if (o._needProcessTriggers)
								for (_ = 0, h = l.length; _ < h; _++) l[_].onTriggerExit(m)
						} else if (o._needProcessCollisions)
						for (_ = 0, h = l.length; _ < h; _++) u.other = m, l[_].onCollisionExit(u);
					if (d = (c = m.owner)._scripts)
						if (u._isTrigger) {
							if (c._needProcessTriggers)
								for (_ = 0, h = d.length; _ < h; _++) d[_].onTriggerExit(f)
						} else if (c._needProcessCollisions)
						for (_ = 0, h = d.length; _ < h; _++) u.other = f, d[_].onCollisionExit(u)
				}
			}
		}
		clearForces() {
			if (!this._nativeDiscreteDynamicsWorld)
			throw "Cannot perform this action when the physics engine is set to CollisionsOnly";
			this._nativeDiscreteDynamicsWorld.clearForces()
		}
	}
	ir.PHYSICSENGINEFLAGS_NONE = 0, ir.PHYSICSENGINEFLAGS_COLLISIONSONLY = 1, ir.PHYSICSENGINEFLAGS_SOFTBODYSUPPORT = 2,
		ir.PHYSICSENGINEFLAGS_MULTITHREADED = 4, ir.PHYSICSENGINEFLAGS_USEHARDWAREWHENPOSSIBLE = 8, ir
		.SOLVERMODE_RANDMIZE_ORDER = 1, ir.SOLVERMODE_FRICTION_SEPARATE = 2, ir.SOLVERMODE_USE_WARMSTARTING = 4, ir
		.SOLVERMODE_USE_2_FRICTION_DIRECTIONS = 16, ir.SOLVERMODE_ENABLE_FRICTION_DIRECTION_CACHING = 32, ir
		.SOLVERMODE_DISABLE_VELOCITY_DEPENDENT_FRICTION_DIRECTION = 64, ir.SOLVERMODE_CACHE_FRIENDLY = 128, ir
		.SOLVERMODE_SIMD = 256, ir.SOLVERMODE_INTERLEAVE_CONTACT_AND_FRICTION_CONSTRAINTS = 512, ir
		.SOLVERMODE_ALLOW_ZERO_LENGTH_FRICTION_DIRECTIONS = 1024, ir._tempVector30 = new n, ir.disableSimulation = !1;
	class ar {
		constructor() {
			this._eventList = [], this._mouseTouch = new Gt, this._touchPool = [], this._touches = new Ut, this
				._multiTouchEnabled = !0, this._pushEventList = (e => {
					e.cancelable && e.preventDefault(), this._eventList.push(e)
				}).bind(this)
		}
		__init__(e, t) {
			this._scene = t, e.oncontextmenu = function(e) {
				return !1
			}
		}
		_onCanvasEvent(e) {
			e.addEventListener("mousedown", this._pushEventList), e.addEventListener("mouseup", this._pushEventList,
					!0), e.addEventListener("mousemove", this._pushEventList, !0), e.addEventListener("touchstart",
					this._pushEventList), e.addEventListener("touchend", this._pushEventList, !0), e
				.addEventListener("touchmove", this._pushEventList, !0), e.addEventListener("touchcancel", this
					._pushEventList, !0)
		}
		_offCanvasEvent(e) {
			e.removeEventListener("mousedown", this._pushEventList), e.removeEventListener("mouseup", this
					._pushEventList, !0), e.removeEventListener("mousemove", this._pushEventList, !0), e
				.removeEventListener("touchstart", this._pushEventList), e.removeEventListener("touchend", this
					._pushEventList, !0), e.removeEventListener("touchmove", this._pushEventList, !0), e
				.removeEventListener("touchcancel", this._pushEventList, !0), this._eventList.length = 0, this
				._touches.length = 0
		}
		touchCount() {
			return this._touches.length
		}
		get multiTouchEnabled() {
			return this._multiTouchEnabled
		}
		set multiTouchEnabled(e) {
			this._multiTouchEnabled = e
		}
		_getTouch(e) {
			var t = this._touchPool[e];
			return t || (t = new zt, this._touchPool[e] = t, t._identifier = e), t
		}
		_mouseTouchDown() {
			var e = this._mouseTouch,
				r = e.sprite;
			if (e._pressedSprite = r, e._pressedLoopCount = t.Stat.loopCount, r) {
				var i = r._scripts;
				if (i)
					for (var a = 0, n = i.length; a < n; a++) i[a].onMouseDown()
			}
		}
		_mouseTouchUp() {
			var e, t, r = this._mouseTouch,
				i = r._pressedSprite;
			r._pressedSprite = null, r._pressedLoopCount = -1;
			var a = r.sprite;
			if (a && a === i) {
				var n = a._scripts;
				if (n)
					for (e = 0, t = n.length; e < t; e++) n[e].onMouseClick()
			}
			if (i) {
				var s = i._scripts;
				if (s)
					for (e = 0, t = s.length; e < t; e++) s[e].onMouseUp()
			}
		}
		_mouseTouchRayCast(e) {
			var t = ar._tempHitResult0,
				r = ar._tempVector20,
				i = ar._tempRay0;
			t.succeeded = !1;
			var a = this._mouseTouch.mousePositionX,
				n = this._mouseTouch.mousePositionY;
			r.x = a, r.y = n;
			for (var s = e.length - 1; s >= 0; s--) {
				var o = e[s],
					l = o.viewport;
				if (r.x >= l.x && r.y >= l.y && r.x <= l.width && r.y <= l.height)
					if (o.viewportPointToRay(r, i), this._scene._physicsSimulation.rayCast(i, t) || o.clearFlag ===
						Oe.CLEARFLAG_SOLIDCOLOR || o.clearFlag === Oe.CLEARFLAG_SKY) break
			}
			var _ = this._mouseTouch,
				h = _.sprite;
			if (t.succeeded) {
				var c = t.collider.owner;
				_.sprite = c;
				var d = c._scripts;
				if (h !== c && d)
					for (var u = 0, f = d.length; u < f; u++) d[u].onMouseEnter()
			} else _.sprite = null;
			if (h && h !== c) {
				var m = h._scripts;
				if (m)
					for (u = 0, f = m.length; u < f; u++) m[u].onMouseOut()
			}
		}
		_changeTouches(e, r) {
			for (var i = 0, a = 0, n = this._touches.length, s = 0, o = e.length; s < o; s++) {
				var l = e[s],
					_ = l.identifier;
				if (this._multiTouchEnabled || 0 === _) {
					var h = this._getTouch(_),
						c = h._position,
						d = ar._tempPoint;
					d.setTo(l.pageX, l.pageY), t.ILaya.stage._canvasTransform.invertTransformPoint(d);
					var u = d.x,
						f = d.y;
					switch (r) {
						case 0:
							this._touches.add(h), i += u, a += f;
							break;
						case 1:
							this._touches.remove(h), i -= u, a -= f;
							break;
						case 2:
							i = u - c.x, a = f - c.y
					}
					c.x = u, c.y = f
				}
			}
			var m = this._touches.length;
			0 === m ? (this._mouseTouch.mousePositionX = 0, this._mouseTouch.mousePositionY = 0) : (this._mouseTouch
				.mousePositionX = (this._mouseTouch.mousePositionX * n + i) / m, this._mouseTouch
				.mousePositionY = (this._mouseTouch.mousePositionY * n + a) / m)
		}
		_update() {
			var e, r, i, a, n = Zt._enbalePhysics && !ir.disableSimulation;
			r = this._eventList.length;
			var s = this._scene._cameraPool;
			if (r > 0) {
				var o = !1;
				for (e = 0; e < r; e++) {
					var l = this._eventList[e];
					switch (l.type) {
						case "mousedown":
							n && this._mouseTouchDown();
							break;
						case "mouseup":
							n && this._mouseTouchUp();
							break;
						case "mousemove":
							var _ = ar._tempPoint;
							_.setTo(l.pageX, l.pageY), t.ILaya.stage._canvasTransform.invertTransformPoint(_), this
								._mouseTouch.mousePositionX = _.x, this._mouseTouch.mousePositionY = _.y, n && (
									o = !0);
							break;
						case "touchstart":
							var h = this._touches.length;
							this._changeTouches(l.changedTouches, 0), n && (o = !0, 0 === h && this
							._mouseTouchDown());
							break;
						case "touchend":
						case "touchcancel":
							this._changeTouches(l.changedTouches, 1), n && 0 === this._touches.length && this
								._mouseTouchUp();
							break;
						case "touchmove":
							this._changeTouches(l.changedTouches, 2), n && (o = !0);
							break;
						default:
							throw "Input3D:unkonwn event type."
					}
				}
				o && this._mouseTouchRayCast(s), this._eventList.length = 0
			}
			if (n) {
				var c = this._mouseTouch,
					d = c._pressedSprite;
				if (d && t.Stat.loopCount > c._pressedLoopCount) {
					var u = d._scripts;
					if (u)
						for (i = 0, a = u.length; i < a; i++) u[i].onMouseDrag()
				}
				var f = c.sprite;
				if (f) {
					var m = f._scripts;
					if (m)
						for (i = 0, a = m.length; i < a; i++) m[i].onMouseOver()
				}
			}
		}
		getTouch(e) {
			return e < this._touches.length ? this._touches.elements[e] : null
		}
	}
	ar._tempPoint = new t.Point, ar._tempVector20 = new i, ar._tempRay0 = new ge(new n, new n), ar._tempHitResult0 =
		new Ht;
	class nr {
		constructor() {
			this.flags = 0, this.maxSubSteps = 1, this.fixedTimeStep = 1 / 60
		}
	}
	class sr {
		static get vertexDeclaration() {
			return sr._vertexDeclaration
		}
		static __init__() {
			sr._vertexDeclaration = new de(20, [new ue(0, ce.Vector3, fe.MESH_POSITION0), new ue(12, ce.Vector2, fe
				.MESH_TEXTURECOORDINATE0)])
		}
		get position() {
			return this._position
		}
		get textureCoordinate0() {
			return this._textureCoordinate0
		}
		get vertexDeclaration() {
			return sr._vertexDeclaration
		}
		constructor(e, t) {
			this._position = e, this._textureCoordinate0 = t
		}
	}
	class or extends Le {
		constructor(e = 48, r = 48) {
			super();
			var i = t.LayaGL.instance;
			this._stacks = e, this._slices = r;
			for (var a = sr.vertexDeclaration, n = a.vertexStride / 4, s = (this._stacks + 1) * (this._slices + 1),
					o = 3 * this._stacks * (this._slices + 1) * 2, l = new Float32Array(s * n), _ = new Uint16Array(
						o), h = Math.PI / this._stacks, c = 2 * Math.PI / this._slices, d = 0, u = 0, f = 0, m =
					0; m < this._stacks + 1; m++)
				for (var E = Math.sin(m * h), T = Math.cos(m * h), p = 0; p < this._slices + 1; p++) {
					var g = E * Math.sin(p * c),
						S = E * Math.cos(p * c);
					l[u + 0] = g * or._radius, l[u + 1] = T * or._radius, l[u + 2] = S * or._radius, l[u + 3] = -p /
						this._slices + .75, l[u + 4] = m / this._stacks, u += n, m != this._stacks - 1 && (_[f++] =
							d + 1, _[f++] = d, _[f++] = d + (this._slices + 1), _[f++] = d + (this._slices + 1), _[
								f++] = d, _[f++] = d + this._slices, d++)
				}
			this._vertexBuffer = new he(4 * l.length, i.STATIC_DRAW, !1), this._vertexBuffer.vertexDeclaration = a,
				this._indexBuffer = new Me(Me.INDEXTYPE_USHORT, _.length, i.STATIC_DRAW, !1), this._vertexBuffer
				.setData(l.buffer), this._indexBuffer.setData(_);
			var v = new De;
			v.bind(), v.applyVertexBuffer(this._vertexBuffer), v.applyIndexBuffer(this._indexBuffer), v.unBind(),
				this._bufferState = v
		}
		static __init__() {
			or.instance = new or
		}
		get stacks() {
			return this._stacks
		}
		get slices() {
			return this._slices
		}
		_render(e) {
			var r = t.LayaGL.instance,
				i = this._indexBuffer.indexCount;
			r.drawElements(r.TRIANGLES, i, r.UNSIGNED_SHORT, 0), t.Stat.trianglesFaces += i / 3, t.Stat
				.renderBatches++
		}
	}
	or._radius = 1;
	class lr {
		constructor() {
			this._length = 0, this._elements = []
		}
		add(e) {
			this._length === this._elements.length ? this._elements.push(e) : this._elements[this._length] = e, this
				._length++
		}
		remove(e) {
			var t = this._elements.indexOf(e);
			if (this._length--, t !== this._length) {
				var r = this._elements[this._length];
				this._elements[t] = r
			}
		}
		shift() {
			return this._length--, this._elements.shift()
		}
	}
	class _r extends lr {
		getSunLight() {
			for (var e, t = -1, r = this._elements, i = 0; i < this._length; i++) {
				var a = r[i]._intensity;
				t < a && (t = a, e = i)
			}
			return e
		}
	}
	class hr extends lr {
		remove(e) {
			var t = this._elements.indexOf(e);
			this._elements.splice(t, 1), this._length--
		}
	}
	class cr extends _e {
		constructor(e, r) {
			super(), this._floatCountPerVertices = 7, this._minUpdate = Number.MAX_VALUE, this._maxUpdate = Number
				.MIN_VALUE, this._bufferState = new De, this._floatBound = new Float32Array(6), this
				._calculateBound = !1, this._maxLineCount = 0, this._lineCount = 0;
			var i = 2 * r;
			this._owner = e, this._maxLineCount = r, this._vertices = new Float32Array(i * this
					._floatCountPerVertices), this._vertexBuffer = new he(Ft.vertexDeclaration.vertexStride * i, t
					.LayaGL.instance.STATIC_DRAW, !1), this._vertexBuffer.vertexDeclaration = Ft.vertexDeclaration,
				this._bufferState.bind(), this._bufferState.applyVertexBuffer(this._vertexBuffer), this._bufferState
				.unBind();
			var a = cr._tempVector0,
				n = cr._tempVector1;
			a.setValue(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), n.setValue(-Number.MAX_VALUE, -Number
				.MAX_VALUE, -Number.MAX_VALUE), this._bounds = new Ze(a, n)
		}
		_getType() {
			return cr._type
		}
		_resizeLineData(e) {
			var r = 2 * e,
				i = this._vertices;
			this._vertexBuffer.destroy(), this._maxLineCount = e;
			var a = r * this._floatCountPerVertices;
			this._vertices = new Float32Array(a), this._vertexBuffer = new he(Ft.vertexDeclaration.vertexStride * r,
					t.LayaGL.instance.STATIC_DRAW, !1), this._vertexBuffer.vertexDeclaration = Ft.vertexDeclaration,
				a < i.length ? (this._vertices.set(new Float32Array(i.buffer, 0, a)), this._vertexBuffer.setData(
					this._vertices.buffer, 0, 0, 4 * a)) : (this._vertices.set(i), this._vertexBuffer.setData(this
					._vertices.buffer, 0, 0, 4 * i.length)), this._bufferState.bind(), this._bufferState
				.applyVertexBuffer(this._vertexBuffer), this._bufferState.unBind()
		}
		_updateLineVertices(e, t, r, i, a) {
			t && (this._vertices[e + 0] = t.x, this._vertices[e + 1] = t.y, this._vertices[e + 2] = t.z), i && (this
				._vertices[e + 3] = i.r, this._vertices[e + 4] = i.g, this._vertices[e + 5] = i.b, this
				._vertices[e + 6] = i.a), r && (this._vertices[e + 7] = r.x, this._vertices[e + 8] = r.y, this
				._vertices[e + 9] = r.z), a && (this._vertices[e + 10] = a.r, this._vertices[e + 11] = a.g, this
				._vertices[e + 12] = a.b, this._vertices[e + 13] = a.a), this._minUpdate = Math.min(this
				._minUpdate, e), this._maxUpdate = Math.max(this._maxUpdate, e + 2 * this
				._floatCountPerVertices);
			var s = this._bounds,
				o = this._floatBound,
				l = s.getMin(),
				_ = s.getMax();
			n.min(l, t, l), n.min(l, r, l), n.max(_, t, _), n.max(_, r, _), s.setMin(l), s.setMax(_), o[0] = l.x, o[
				1] = l.y, o[2] = l.z, o[3] = _.x, o[4] = _.y, o[5] = _.z
		}
		_reCalculateBound() {
			if (this._calculateBound) {
				var e = this._vertices,
					t = cr._tempVector0,
					r = cr._tempVector1;
				t.setValue(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), r.setValue(-Number.MAX_VALUE, -
					Number.MAX_VALUE, -Number.MAX_VALUE);
				for (var i = 0; i < 2 * this._lineCount; ++i) {
					var a = this._floatCountPerVertices * i,
						n = e[a + 0],
						s = e[a + 1],
						o = e[a + 2];
					t.x = Math.min(n, t.x), t.y = Math.min(s, t.y), t.z = Math.min(o, t.z), r.x = Math.max(n, r.x),
						r.y = Math.max(s, r.y), r.z = Math.max(o, r.z)
				}
				this._bounds.setMin(t), this._bounds.setMax(r);
				var l = this._floatBound;
				l[0] = t.x, l[1] = t.y, l[2] = t.z, l[3] = r.x, l[4] = r.y, l[5] = r.z, this._calculateBound = !1
			}
		}
		_removeLineData(e) {
			var t = 2 * this._floatCountPerVertices,
				r = e + 1,
				i = e * t,
				a = this._vertices,
				n = new Float32Array(a.buffer, r * t * 4, (this._lineCount - r) * t);
			a.set(n, i), this._minUpdate = Math.min(this._minUpdate, i), this._maxUpdate = Math.max(this._maxUpdate,
				i + n.length), this._lineCount--;
			var s = this._floatBound,
				o = a[i],
				l = a[i + 1],
				_ = a[i + 2],
				h = a[i + 7],
				c = a[i + 8],
				d = a[i + 9],
				u = s[0],
				f = s[1],
				m = s[2],
				E = s[3],
				T = s[4],
				p = s[5];
			o !== u && o !== E && l !== f && l !== T && _ !== m && _ !== p && h !== u && h !== E && c !== f && c !==
				T && d !== m && d !== p || (this._calculateBound = !0)
		}
		_updateLineData(e, t, r, i, a) {
			var n = 2 * this._floatCountPerVertices;
			this._updateLineVertices(e * n, t, r, i, a)
		}
		_updateLineDatas(e, t) {
			for (var r = 2 * this._floatCountPerVertices, i = t.length, a = 0; a < i; a++) {
				var n = t[a];
				this._updateLineVertices((e + a) * r, n.startPosition, n.endPosition, n.startColor, n.endColor)
			}
		}
		_getLineData(e, t) {
			var r = t.startPosition,
				i = t.startColor,
				a = t.endPosition,
				n = t.endColor,
				s = this._vertices,
				o = e * this._floatCountPerVertices * 2;
			r.x = s[o + 0], r.y = s[o + 1], r.z = s[o + 2], i.r = s[o + 3], i.g = s[o + 4], i.b = s[o + 5], i.a = s[
					o + 6], a.x = s[o + 7], a.y = s[o + 8], a.z = s[o + 9], n.r = s[o + 10], n.g = s[o + 11], n.b =
				s[o + 12], n.a = s[o + 13]
		}
		_prepareRender(e) {
			return !0
		}
		_render(e) {
			if (this._minUpdate !== Number.MAX_VALUE && this._maxUpdate !== Number.MIN_VALUE && (this._vertexBuffer
					.setData(this._vertices.buffer, 4 * this._minUpdate, 4 * this._minUpdate, 4 * (this._maxUpdate -
						this._minUpdate)), this._minUpdate = Number.MAX_VALUE, this._maxUpdate = Number.MIN_VALUE),
				this._lineCount > 0) {
				this._bufferState.bind();
				var r = t.LayaGL.instance;
				r.drawArrays(r.LINES, 0, 2 * this._lineCount), t.Stat.renderBatches++
			}
		}
		destroy() {
			this._destroyed || (super.destroy(), this._bufferState.destroy(), this._vertexBuffer.destroy(), this
				._bufferState = null, this._vertexBuffer = null, this._vertices = null)
		}
	}
	cr._tempVector0 = new n, cr._tempVector1 = new n, cr._type = _e._typeCounter++;
	class dr extends je {
		constructor(e) {
			super(e), this._projectionViewWorldMatrix = new p
		}
		_calculateBoundingBox() {
			var e = this._owner.transform.worldMatrix,
				r = this._owner._geometryFilter;
			if (r._reCalculateBound(), r._bounds._tranform(e, this._bounds), t.Render.supportWebGLPlusCulling) {
				var i = this._bounds.getMin(),
					a = this._bounds.getMax(),
					n = oe._cullingBuffer;
				n[this._cullingBufferIndex + 1] = i.x, n[this._cullingBufferIndex + 2] = i.y, n[this
					._cullingBufferIndex + 3] = i.z, n[this._cullingBufferIndex + 4] = a.x, n[this
					._cullingBufferIndex + 5] = a.y, n[this._cullingBufferIndex + 6] = a.z
			}
		}
		_renderUpdateWithCamera(e, t) {
			var r = e.projectionViewMatrix,
				i = this._shaderValues;
			if (t) {
				var a = t.worldMatrix;
				i.setMatrix4x4(ae.WORLDMATRIX, a), p.multiply(r, a, this._projectionViewWorldMatrix), i
					.setMatrix4x4(ae.MVPMATRIX, this._projectionViewWorldMatrix)
			} else i.setMatrix4x4(ae.WORLDMATRIX, p.DEFAULT), i.setMatrix4x4(ae.MVPMATRIX, r)
		}
	}
	class ur extends ne {
		get maxLineCount() {
			return this._geometryFilter._maxLineCount
		}
		set maxLineCount(e) {
			this._geometryFilter._resizeLineData(e), this._geometryFilter._lineCount = Math.min(this._geometryFilter
				._lineCount, e)
		}
		get lineCount() {
			return this._geometryFilter._lineCount
		}
		set lineCount(e) {
			if (e > this.maxLineCount) throw "PixelLineSprite3D: lineCount can't large than maxLineCount";
			this._geometryFilter._lineCount = e
		}
		get pixelLineRenderer() {
			return this._render
		}
		constructor(e = 2, t = null) {
			super(t), this._geometryFilter = new cr(this, e), this._render = new dr(this), this._changeRenderObjects(
				this._render, 0, bt.defaultMaterial)
		}
		_changeRenderObjects(e, t, r) {
			var i = this._render._renderElements;
			r || (r = bt.defaultMaterial);
			var a = i[t];
			a || (a = i[t] = new Ge), a.setTransform(this._transform), a.setGeometry(this._geometryFilter), a.render =
				this._render, a.material = r
		}
		addLine(e, t, r, i) {
			if (this._geometryFilter._lineCount === this._geometryFilter._maxLineCount)
			throw "PixelLineSprite3D: lineCount has equal with maxLineCount.";
			this._geometryFilter._updateLineData(this._geometryFilter._lineCount++, e, t, r, i)
		}
		addLines(e) {
			var t = this._geometryFilter._lineCount,
				r = e.length;
			if (t + r > this._geometryFilter._maxLineCount)
			throw "PixelLineSprite3D: lineCount plus lines count must less than maxLineCount.";
			this._geometryFilter._updateLineDatas(t, e), this._geometryFilter._lineCount += r
		}
		removeLine(e) {
			if (!(e < this._geometryFilter._lineCount)) throw "PixelLineSprite3D: index must less than lineCount.";
			this._geometryFilter._removeLineData(e)
		}
		setLine(e, t, r, i, a) {
			if (!(e < this._geometryFilter._lineCount)) throw "PixelLineSprite3D: index must less than lineCount.";
			this._geometryFilter._updateLineData(e, t, r, i, a)
		}
		getLine(e, t) {
			if (!(e < this.lineCount)) throw "PixelLineSprite3D: index must less than lineCount.";
			this._geometryFilter._getLineData(e, t)
		}
		clear() {
			this._geometryFilter._lineCount = 0
		}
		_create() {
			return new ur
		}
	}
	class fr {
		constructor(e = !1) {
			this.isTransparent = !1, this.elements = new We, this.lastTransparentRenderElement = null, this
				.lastTransparentBatched = !1, this.isTransparent = e
		}
		_compare(e, t) {
			var r = e.material.renderQueue - t.material.renderQueue;
			return 0 === r ? (this.isTransparent ? t.render._distanceForSort - e.render._distanceForSort : e.render
					._distanceForSort - t.render._distanceForSort) + t.render.sortingFudge - e.render.sortingFudge :
				r
		}
		_partitionRenderObject(e, t) {
			for (var r = this.elements.elements, i = r[Math.floor((t + e) / 2)]; e <= t;) {
				for (; this._compare(r[e], i) < 0;) e++;
				for (; this._compare(r[t], i) > 0;) t--;
				if (e < t) {
					var a = r[e];
					r[e] = r[t], r[t] = a, e++, t--
				} else if (e === t) {
					e++;
					break
				}
			}
			return e
		}
		_quickSort(e, t) {
			if (this.elements.length > 1) {
				var r = this._partitionRenderObject(e, t),
					i = r - 1;
				e < i && this._quickSort(e, i), r < t && this._quickSort(r, t)
			}
		}
		_render(e, t) {
			for (var r = this.elements.elements, i = 0, a = this.elements.length; i < a; i++) r[i]._render(e, t)
		}
		clear() {
			this.elements.length = 0, this.lastTransparentRenderElement = null, this.lastTransparentBatched = !1
		}
	}
	class mr {
		constructor(e, t, r, i) {
			this._bounds = new Ye(new n, new n), this._objects = [], this._isContaion = !1, this.center = new n,
				this.baseLength = 0, this._setValues(e, t, r, i)
		}
		static _encapsulates(e, t) {
			return ve.boxContainsBox(e, t) == Se.Contains
		}
		_setValues(e, t, r, i) {
			this._octree = e, this._parent = t, this.baseLength = r, i.cloneTo(this.center);
			var a = this._bounds.min,
				n = this._bounds.max,
				s = e._looseness * r / 2;
			a.setValue(i.x - s, i.y - s, i.z - s), n.setValue(i.x + s, i.y + s, i.z + s)
		}
		_getChildBound(e) {
			if (null != this._children && this._children[e]) return this._children[e]._bounds;
			var t = this.baseLength / 4,
				r = this.baseLength / 2 * this._octree._looseness / 2,
				i = mr._tempBoundBox,
				a = i.min,
				n = i.max;
			switch (e) {
				case 0:
					a.x = this.center.x - t - r, a.y = this.center.y + t - r, a.z = this.center.z - t - r, n.x =
						this.center.x - t + r, n.y = this.center.y + t + r, n.z = this.center.z - t + r;
					break;
				case 1:
					a.x = this.center.x + t - r, a.y = this.center.y + t - r, a.z = this.center.z - t - r, n.x =
						this.center.x + t + r, n.y = this.center.y + t + r, n.z = this.center.z - t + r;
					break;
				case 2:
					a.x = this.center.x - t - r, a.y = this.center.y + t - r, a.z = this.center.z + t - r, n.x =
						this.center.x - t + r, n.y = this.center.y + t + r, n.z = this.center.z + t + r;
					break;
				case 3:
					a.x = this.center.x + t - r, a.y = this.center.y + t - r, a.z = this.center.z + t - r, n.x =
						this.center.x + t + r, n.y = this.center.y + t + r, n.z = this.center.z + t + r;
					break;
				case 4:
					a.x = this.center.x - t - r, a.y = this.center.y - t - r, a.z = this.center.z - t - r, n.x =
						this.center.x - t + r, n.y = this.center.y - t + r, n.z = this.center.z - t + r;
					break;
				case 5:
					a.x = this.center.x + t - r, a.y = this.center.y - t - r, a.z = this.center.z - t - r, n.x =
						this.center.x + t + r, n.y = this.center.y - t + r, n.z = this.center.z - t + r;
					break;
				case 6:
					a.x = this.center.x - t - r, a.y = this.center.y - t - r, a.z = this.center.z + t - r, n.x =
						this.center.x - t + r, n.y = this.center.y - t + r, n.z = this.center.z + t + r;
					break;
				case 7:
					a.x = this.center.x + t - r, a.y = this.center.y - t - r, a.z = this.center.z + t - r, n.x =
						this.center.x + t + r, n.y = this.center.y - t + r, n.z = this.center.z + t + r
			}
			return i
		}
		_getChildCenter(e) {
			if (null != this._children) return this._children[e].center;
			var t = this.baseLength / 4,
				r = mr._tempVector30;
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
					r.x = this.center.x + t, r.y = this.center.y - t, r.z = this.center.z + t
			}
			return r
		}
		_getChild(e) {
			var t = this.baseLength / 4;
			switch (this._children || (this._children = []), e) {
				case 0:
					return this._children[0] || (this._children[0] = new mr(this._octree, this, this.baseLength / 2,
						new n(this.center.x + -t, this.center.y + t, this.center.z - t)));
				case 1:
					return this._children[1] || (this._children[1] = new mr(this._octree, this, this.baseLength / 2,
						new n(this.center.x + t, this.center.y + t, this.center.z - t)));
				case 2:
					return this._children[2] || (this._children[2] = new mr(this._octree, this, this.baseLength / 2,
						new n(this.center.x - t, this.center.y + t, this.center.z + t)));
				case 3:
					return this._children[3] || (this._children[3] = new mr(this._octree, this, this.baseLength / 2,
						new n(this.center.x + t, this.center.y + t, this.center.z + t)));
				case 4:
					return this._children[4] || (this._children[4] = new mr(this._octree, this, this.baseLength / 2,
						new n(this.center.x - t, this.center.y - t, this.center.z - t)));
				case 5:
					return this._children[5] || (this._children[5] = new mr(this._octree, this, this.baseLength / 2,
						new n(this.center.x + t, this.center.y - t, this.center.z - t)));
				case 6:
					return this._children[6] || (this._children[6] = new mr(this._octree, this, this.baseLength / 2,
						new n(this.center.x - t, this.center.y - t, this.center.z + t)));
				case 7:
					return this._children[7] || (this._children[7] = new mr(this._octree, this, this.baseLength / 2,
						new n(this.center.x + t, this.center.y - t, this.center.z + t)));
				default:
					throw "BoundsOctreeNode: unknown index."
			}
		}
		_shouldMerge() {
			for (var e = this._objects.length, t = 0; t < 8; t++) {
				var r = this._children[t];
				if (r) {
					if (null != r._children) return !1;
					e += r._objects.length
				}
			}
			return e <= mr._NUM_OBJECTS_ALLOWED
		}
		_mergeChildren() {
			for (var e = 0; e < 8; e++) {
				var t = this._children[e];
				if (t) {
					t._parent = null;
					for (var r = t._objects, i = r.length - 1; i >= 0; i--) {
						var a = r[i];
						this._objects.push(a), a._setOctreeNode(this)
					}
				}
			}
			this._children = null
		}
		_merge() {
			if (null === this._children) {
				var e = this._parent;
				e && e._shouldMerge() && (e._mergeChildren(), e._merge())
			}
		}
		_checkAddNode(e) {
			if (null == this._children) {
				if (this._objects.length < mr._NUM_OBJECTS_ALLOWED || this.baseLength / 2 < this._octree._minSize)
					return this;
				for (var t = this._objects.length - 1; t >= 0; t--) {
					var r = this._objects[t],
						i = this._bestFitChild(r.bounds.getCenter());
					mr._encapsulates(this._getChildBound(i), r.bounds._getBoundBox()) && (this._objects.splice(this
						._objects.indexOf(r), 1), this._getChild(i)._add(r))
				}
			}
			var a = this._bestFitChild(e.bounds.getCenter());
			return mr._encapsulates(this._getChildBound(a), e.bounds._getBoundBox()) ? this._getChild(a)
				._checkAddNode(e) : this
		}
		_add(e) {
			var t = this._checkAddNode(e);
			t._objects.push(e), e._setOctreeNode(t)
		}
		_remove(e) {
			var t = this._objects.indexOf(e);
			this._objects.splice(t, 1), e._setOctreeNode(null), this._merge()
		}
		_addUp(e) {
			return ve.boxContainsBox(this._bounds, e.bounds._getBoundBox()) === Se.Contains ? (this._add(e), !0) : !
				!this._parent && this._parent._addUp(e)
		}
		_getCollidingWithFrustum(e, r, i, a, s, o) {
			if (i) {
				var l = r.containsBoundBox(this._bounds);
				if (t.Stat.octreeNodeCulling++, l === Se.Disjoint) return;
				i = l === Se.Intersects
			}
			this._isContaion = !i;
			for (var _ = e.camera, h = e.scene, c = 0, d = this._objects.length; c < d; c++) {
				var u = this._objects[c];
				if (_._isLayerVisible(u._owner.layer) && u._enable) {
					if (i && (t.Stat.frustumCulling++, !u._needRender(r, e))) continue;
					u._distanceForSort = n.distance(u.bounds.getCenter(), a);
					for (var f = u._renderElements, m = 0, E = f.length; m < E; m++) {
						f[m]._update(h, e, s, o)
					}
				}
			}
			if (null != this._children)
				for (c = 0; c < 8; c++) {
					var T = this._children[c];
					T && T._getCollidingWithFrustum(e, r, i, a, s, o)
				}
		}
		_getCollidingWithBoundBox(e, t, r) {
			if (t) {
				var i = ve.boxContainsBox(this._bounds, e);
				if (i === Se.Disjoint) return;
				t = i === Se.Intersects
			}
			if (t)
				for (var a = 0, n = this._objects.length; a < n; a++) {
					var s = this._objects[a];
					ve.intersectsBoxAndBox(s.bounds._getBoundBox(), e) && r.push(s)
				}
			if (null != this._children)
				for (a = 0; a < 8; a++) {
					this._children[a]._getCollidingWithBoundBox(e, t, r)
				}
		}
		_bestFitChild(e) {
			return (e.x <= this.center.x ? 0 : 1) + (e.y >= this.center.y ? 0 : 4) + (e.z <= this.center.z ? 0 : 2)
		}
		_update(e) {
			if (ve.boxContainsBox(this._bounds, e.bounds._getBoundBox()) === Se.Contains) {
				var t = this._checkAddNode(e);
				if (t !== e._getOctreeNode()) {
					t._objects.push(e), e._setOctreeNode(t);
					var r = this._objects.indexOf(e);
					this._objects.splice(r, 1), this._merge()
				}
				return !0
			}
			if (this._parent) {
				var i = this._parent._addUp(e);
				return i && (r = this._objects.indexOf(e), this._objects.splice(r, 1), this._merge()), i
			}
			return !1
		}
		add(e) {
			return !!mr._encapsulates(this._bounds, e.bounds._getBoundBox()) && (this._add(e), !0)
		}
		remove(e) {
			return e._getOctreeNode() === this && (this._remove(e), !0)
		}
		update(e) {
			return e._getOctreeNode() === this && this._update(e)
		}
		shrinkIfPossible(e) {
			if (this.baseLength < 2 * e) return this;
			for (var t = -1, r = 0, i = this._objects.length; r < i; r++) {
				var a = this._objects[r],
					n = this._bestFitChild(a.bounds.getCenter());
				if (0 != r && n != t) return this;
				var s = this._getChildBound(n);
				if (!mr._encapsulates(s, a.bounds._getBoundBox())) return this;
				0 == r && (t = n)
			}
			if (null == this._children) {
				if (-1 != t) {
					var o = this._getChildCenter(t);
					this._setValues(this._octree, null, this.baseLength / 2, o)
				}
				return this
			}
			var l = !1;
			for (r = 0, i = this._children.length; r < i; r++) {
				var _ = this._children[r];
				if (_ && _.hasAnyObjects()) {
					if (l) return this;
					if (t >= 0 && t != r) return this;
					l = !0, t = r
				}
			}
			if (-1 != t) {
				var h = this._children[t];
				return h._parent = null, h
			}
			return this
		}
		hasAnyObjects() {
			if (this._objects.length > 0) return !0;
			if (null != this._children)
				for (var e = 0; e < 8; e++) {
					var t = this._children[e];
					if (t && t.hasAnyObjects()) return !0
				}
			return !1
		}
		getCollidingWithBoundBox(e, t) {
			this._getCollidingWithBoundBox(e, !0, t)
		}
		getCollidingWithRay(e, t, r = Number.MAX_VALUE) {
			var i = ve.intersectsRayAndBoxRD(e, this._bounds);
			if (!(-1 == i || i > r)) {
				for (var a = 0, n = this._objects.length; a < n; a++) {
					var s = this._objects[a]; - 1 !== (i = ve.intersectsRayAndBoxRD(e, s.bounds._getBoundBox())) &&
						i <= r && t.push(s)
				}
				if (null != this._children)
					for (a = 0; a < 8; a++) {
						this._children[a].getCollidingWithRay(e, t, r)
					}
			}
		}
		getCollidingWithFrustum(e, t, r) {
			var i = e.camera.transform.position,
				a = e.camera.boundFrustum;
			this._getCollidingWithFrustum(e, a, !0, i, t, r)
		}
		isCollidingWithBoundBox(e) {
			if (!ve.intersectsBoxAndBox(this._bounds, e)) return !1;
			for (var t = 0, r = this._objects.length; t < r; t++) {
				var i = this._objects[t];
				if (ve.intersectsBoxAndBox(i.bounds._getBoundBox(), e)) return !0
			}
			if (null != this._children)
				for (t = 0; t < 8; t++) {
					if (this._children[t].isCollidingWithBoundBox(e)) return !0
				}
			return !1
		}
		isCollidingWithRay(e, t = Number.MAX_VALUE) {
			var r = ve.intersectsRayAndBoxRD(e, this._bounds);
			if (-1 == r || r > t) return !1;
			for (var i = 0, a = this._objects.length; i < a; i++) {
				var n = this._objects[i];
				if (-1 !== (r = ve.intersectsRayAndBoxRD(e, n.bounds._getBoundBox())) && r <= t) return !0
			}
			if (null != this._children)
				for (i = 0; i < 8; i++) {
					if (this._children[i].isCollidingWithRay(e, t)) return !0
				}
			return !1
		}
		getBound() {
			return this._bounds
		}
		drawAllBounds(e, t, r) {
			if (null !== this._children || 0 != this._objects.length) {
				t++;
				var i = mr._tempColor0;
				if (this._isContaion) i.r = 0, i.g = 0, i.b = 1;
				else {
					var a = r ? t / r : 0;
					i.r = 1 - a, i.g = a, i.b = 0
				}
				if (i.a = .3, A._drawBound(e, this._bounds, i), null != this._children)
					for (var n = 0; n < 8; n++) {
						var s = this._children[n];
						s && s.drawAllBounds(e, t, r)
					}
			}
		}
		drawAllObjects(e, t, r) {
			t++;
			var i = mr._tempColor0;
			if (this._isContaion) i.r = 0, i.g = 0, i.b = 1;
			else {
				var a = r ? t / r : 0;
				i.r = 1 - a, i.g = a, i.b = 0
			}
			i.a = 1;
			for (var n = 0, s = this._objects.length; n < s; n++) A._drawBound(e, this._objects[n].bounds
				._getBoundBox(), i);
			if (null != this._children)
				for (n = 0; n < 8; n++) {
					var o = this._children[n];
					o && o.drawAllObjects(e, t, r)
				}
		}
	}
	mr._tempVector3 = new n, mr._tempVector30 = new n, mr._tempVector31 = new n, mr._tempColor0 = new te, mr
		._tempBoundBox = new Ye(new n, new n), mr._NUM_OBJECTS_ALLOWED = 8;
	class Er extends We {
		constructor() {
			super()
		}
		add(e) {
			if (-1 !== e._getIndexInMotionList()) throw "OctreeMotionList:element has  in  PhysicsUpdateList.";
			this._add(e), e._setIndexInMotionList(this.length++)
		}
		remove(e) {
			var t = e._getIndexInMotionList();
			if (this.length--, t !== this.length) {
				var r = this.elements[this.length];
				this.elements[t] = r, r._setIndexInMotionList(t)
			}
			e._setIndexInMotionList(-1)
		}
	}
	class Tr {
		constructor(e, t, r, i) {
			this._motionObjects = new Er, this.count = 0, r > e && (console.warn(
					"Minimum node size must be at least as big as the initial world size. Was: " + r +
					" Adjusted to: " + e), r = e), this._initialSize = e, this._minSize = r, this._looseness = Math
				.min(Math.max(i, 1), 2), this._rootNode = new mr(this, null, e, t)
		}
		_getMaxDepth(e, t) {
			t++;
			var r = e._children;
			if (null != r)
				for (var i = t, a = 0, n = r.length; a < n; a++) {
					var s = r[a];
					s && (t = Math.max(this._getMaxDepth(s, i), t))
				}
			return t
		}
		_grow(e) {
			var t = e.x >= 0 ? 1 : -1,
				r = e.y >= 0 ? 1 : -1,
				i = e.z >= 0 ? 1 : -1,
				a = this._rootNode,
				s = this._rootNode.baseLength / 2,
				o = 2 * this._rootNode.baseLength,
				l = this._rootNode.center,
				_ = new n(l.x + t * s, l.y + r * s, l.z + i * s);
			if (this._rootNode = new mr(this, null, o, _), a.hasAnyObjects()) {
				for (var h = this._rootNode._bestFitChild(a.center), c = [], d = 0; d < 8; d++) d == h && (a
					._parent = this._rootNode, c[d] = a);
				this._rootNode._children = c
			}
		}
		add(e) {
			for (var t = 0; !this._rootNode.add(e);) {
				var r = Tr._tempVector30;
				if (n.subtract(e.bounds.getCenter(), this._rootNode.center, r), this._grow(r), ++t > 20)
				throw "Aborted Add operation as it seemed to be going on forever (" + (t - 1) +
					") attempts at growing the octree."
			}
			this.count++
		}
		remove(e) {
			var t = e._getOctreeNode().remove(e);
			return t && this.count--, t
		}
		update(e) {
			var t = 0,
				r = e._getOctreeNode();
			if (r) {
				for (; !r._update(e);) {
					var i = Tr._tempVector30;
					if (n.subtract(e.bounds.getCenter(), this._rootNode.center, i), this._grow(i), ++t > 20)
					throw "Aborted Add operation as it seemed to be going on forever (" + (t - 1) +
						") attempts at growing the octree."
				}
				return !0
			}
			return !1
		}
		shrinkRootIfPossible() {
			this._rootNode = this._rootNode.shrinkIfPossible(this._initialSize)
		}
		addMotionObject(e) {
			this._motionObjects.add(e)
		}
		removeMotionObject(e) {
			this._motionObjects.remove(e)
		}
		updateMotionObjects() {
			for (var e = this._motionObjects.elements, t = 0, r = this._motionObjects.length; t < r; t++) {
				var i = e[t];
				this.update(i), i._setIndexInMotionList(-1)
			}
			this._motionObjects.length = 0
		}
		isCollidingWithBoundBox(e) {
			return this._rootNode.isCollidingWithBoundBox(e)
		}
		isCollidingWithRay(e, t = Number.MAX_VALUE) {
			return this._rootNode.isCollidingWithRay(e, t)
		}
		getCollidingWithBoundBox(e, t) {
			this._rootNode.getCollidingWithBoundBox(e, t)
		}
		getCollidingWithRay(e, t, r = Number.MAX_VALUE) {
			this._rootNode.getCollidingWithRay(e, t, r)
		}
		getCollidingWithFrustum(e, t, r) {
			this._rootNode.getCollidingWithFrustum(e, t, r)
		}
		getMaxBounds() {
			return this._rootNode.getBound()
		}
		drawAllBounds(e) {
			var t = this._getMaxDepth(this._rootNode, -1);
			this._rootNode.drawAllBounds(e, -1, t)
		}
		drawAllObjects(e) {
			var t = this._getMaxDepth(this._rootNode, -1);
			this._rootNode.drawAllObjects(e, -1, t)
		}
	}
	Tr._tempVector30 = new n;
	class pr extends t.Sprite {
		constructor() {
			if (super(), this._lightCount = 0, this._pointLights = new lr, this._spotLights = new lr, this
				._directionLights = new _r, this._alternateLights = new hr, this._lightmaps = [], this
				._skyRenderer = new ye, this._reflectionMode = 1, this._input = new ar, this._timer = t.ILaya
				.timer, this._collsionTestList = [], this._renders = new Ut, this._opaqueQueue = new fr(!1),
				this._transparentQueue = new fr(!0), this._cameraPool = [], this._animatorPool = new Ut, this
				._scriptPool = new Array, this._tempScriptPool = new Array, this._needClearScriptPool = !1, this
				._castShadowRenders = new Bt, this.currentCreationLayer = Math.pow(2, 0), this.enableLight = !0,
				this._key = new t.SubmitKey, this._time = 0, this._pickIdToSprite = new Object, Zt
				._enbalePhysics && (this._physicsSimulation = new ir(pr.physicsSettings)), this._shaderValues =
				new B(null), this.parallelSplitShadowMaps = [], this.enableFog = !1, this.fogStart = 300, this
				.fogRange = 1e3, this.fogColor = new n(.7, .7, .7), this.ambientColor = new n(.212, .227, .259),
				this.reflectionIntensity = 1, t.WebGL.shaderHighPrecision && this._shaderValues.addDefine(F
					.SHADERDEFINE_HIGHPRECISION), s._config._multiLighting || this._shaderValues.addDefine(F
					.SHADERDEFINE_LEGACYSINGALLIGHTING), t.Render.supportWebGLPlusCulling && (this
					._cullingBufferIndices = new Int32Array(1024), this._cullingBufferResult = new Int32Array(
						1024)), this._scene = this, this._input.__init__(t.Render.canvas, this), pr
				.octreeCulling && (this._octree = new Tr(pr.octreeInitialSize, pr.octreeInitialCenter, pr
					.octreeMinNodeSize, pr.octreeLooseness)), oe.debugFrustumCulling) {
				this._debugTool = new ur;
				var e = new bt;
				e.renderQueue = W.RENDERQUEUE_TRANSPARENT, e.alphaTest = !1, e.depthWrite = !1, e.cull = X
					.CULL_BACK, e.blend = X.BLEND_ENABLE_ALL, e.blendSrc = X.BLENDPARAM_SRC_ALPHA, e.blendDst =
					X.BLENDPARAM_ONE_MINUS_SRC_ALPHA, e.depthTest = X.DEPTHTEST_LESS, this._debugTool
					.pixelLineRenderer.sharedMaterial = e
			}
		}
		static __init__() {
			var e = s._config;
			if (e._multiLighting) {
				const i = 4;
				var t = e.maxLightCount,
					r = e.lightClusterCount;
				Te.instance = new Te(r.x, r.y, r.z, Math.min(e.maxLightCount, e
					._maxAreaLightCountPerClusterAverage)), pr._lightTexture = A._createFloatTextureBuffer(
					i, t), pr._lightTexture.lock = !0, pr._lightPixles = new Float32Array(t * i * 4)
			}
			k.SHADERDEFINE_FOG = F.getDefineByName("FOG"), k.SHADERDEFINE_DIRECTIONLIGHT = F.getDefineByName(
					"DIRECTIONLIGHT"), k.SHADERDEFINE_POINTLIGHT = F.getDefineByName("POINTLIGHT"), k
				.SHADERDEFINE_SPOTLIGHT = F.getDefineByName("SPOTLIGHT"), k.SHADERDEFINE_CAST_SHADOW = F
				.getDefineByName("CASTSHADOW"), k.SHADERDEFINE_SHADOW_PSSM1 = F.getDefineByName(
					"SHADOWMAP_PSSM1"), k.SHADERDEFINE_SHADOW_PSSM2 = F.getDefineByName("SHADOWMAP_PSSM2"), k
				.SHADERDEFINE_SHADOW_PSSM3 = F.getDefineByName("SHADOWMAP_PSSM3"), k
				.SHADERDEFINE_SHADOW_PCF_NO = F.getDefineByName("SHADOWMAP_PCF_NO"), k
				.SHADERDEFINE_SHADOW_PCF1 = F.getDefineByName("SHADOWMAP_PCF1"), k.SHADERDEFINE_SHADOW_PCF2 = F
				.getDefineByName("SHADOWMAP_PCF2"), k.SHADERDEFINE_SHADOW_PCF3 = F.getDefineByName(
					"SHADOWMAP_PCF3"), k.SHADERDEFINE_REFLECTMAP = F.getDefineByName("REFLECTMAP")
		}
		static load(e, r) {
			t.ILaya.loader.create(e, r, null, pr.HIERARCHY)
		}
		_allotPickColorByID(e, t) {
			var r = Math.floor(e / 65025);
			e -= 255 * r * 255;
			var i = Math.floor(e / 255),
				a = e -= 255 * i;
			t.x = r / 255, t.y = i / 255, t.z = a / 255, t.w = 1
		}
		_searchIDByPickColor(e) {
			return 255 * e.x * 255 + 255 * e.y + e.z
		}
		get url() {
			return this._url
		}
		get enableFog() {
			return this._enableFog
		}
		set enableFog(e) {
			this._enableFog !== e && (this._enableFog = e, e ? this._shaderValues.addDefine(k
				.SHADERDEFINE_FOG) : this._shaderValues.removeDefine(k.SHADERDEFINE_FOG))
		}
		get fogColor() {
			return this._shaderValues.getVector3(pr.FOGCOLOR)
		}
		set fogColor(e) {
			this._shaderValues.setVector3(pr.FOGCOLOR, e)
		}
		get fogStart() {
			return this._shaderValues.getNumber(pr.FOGSTART)
		}
		set fogStart(e) {
			this._shaderValues.setNumber(pr.FOGSTART, e)
		}
		get fogRange() {
			return this._shaderValues.getNumber(pr.FOGRANGE)
		}
		set fogRange(e) {
			this._shaderValues.setNumber(pr.FOGRANGE, e)
		}
		get ambientColor() {
			return this._shaderValues.getVector3(pr.AMBIENTCOLOR)
		}
		set ambientColor(e) {
			this._shaderValues.setVector3(pr.AMBIENTCOLOR, e)
		}
		get skyRenderer() {
			return this._skyRenderer
		}
		get customReflection() {
			return this._shaderValues.getTexture(pr.REFLECTIONTEXTURE)
		}
		set customReflection(e) {
			this._shaderValues.setTexture(pr.REFLECTIONTEXTURE, e), e ? this._shaderValues.addDefine(k
				.SHADERDEFINE_REFLECTMAP) : this._shaderValues.removeDefine(k.SHADERDEFINE_REFLECTMAP)
		}
		get reflectionIntensity() {
			return this._shaderValues.getNumber(pr.REFLETIONINTENSITY)
		}
		set reflectionIntensity(e) {
			e = Math.max(Math.min(e, 1), 0), this._shaderValues.setNumber(pr.REFLETIONINTENSITY, e)
		}
		get physicsSimulation() {
			return this._physicsSimulation
		}
		get reflectionMode() {
			return this._reflectionMode
		}
		set reflectionMode(e) {
			this._reflectionMode = e
		}
		get timer() {
			return this._timer
		}
		set timer(e) {
			this._timer = e
		}
		get input() {
			return this._input
		}
		_setLightmapToChildNode(e) {
			e instanceof ne && e._render._applyLightMapParams();
			for (var t = e._children, r = 0, i = t.length; r < i; r++) this._setLightmapToChildNode(t[r])
		}
		_update() {
			var e = this.timer._delta / 1e3;
			this._time += e, this._shaderValues.setNumber(pr.TIME, this._time);
			var t = this._physicsSimulation;
			Zt._enbalePhysics && !ir.disableSimulation && (t._updatePhysicsTransformFromRender(), rr
					._addUpdateList = !1, t._simulate(e), t._updateCharacters(), rr._addUpdateList = !0, t
					._updateCollisions(), t._eventScripts()), this._input._update(), this._clearScript(), this
				._updateScript(), O._update(this), this._lateUpdateScript()
		}
		_binarySearchIndexInCameraPool(e) {
			for (var t, r = 0, i = this._cameraPool.length - 1; r <= i;) {
				t = Math.floor((r + i) / 2);
				var a = this._cameraPool[t]._renderingOrder;
				if (a == e._renderingOrder) return t;
				a > e._renderingOrder ? i = t - 1 : r = t + 1
			}
			return r
		}
		onEnable() {
			this._input._onCanvasEvent(t.Render.canvas)
		}
		onDisable() {
			this._input._offCanvasEvent(t.Render.canvas)
		}
		_setCreateURL(e) {
			this._url = t.URL.formatURL(e)
		}
		_getGroup() {
			return this._group
		}
		_setGroup(e) {
			this._group = e
		}
		_clearScript() {
			if (this._needClearScriptPool) {
				for (var e = this._scriptPool, t = 0, r = e.length; t < r; t++) {
					var i = e[t];
					i && (i._indexInPool = this._tempScriptPool.length, this._tempScriptPool.push(i))
				}
				this._scriptPool = this._tempScriptPool, e.length = 0, this._tempScriptPool = e, this
					._needClearScriptPool = !1
			}
		}
		_updateScript() {
			for (var e = this._scriptPool, t = 0, r = e.length; t < r; t++) {
				var i = e[t];
				i && i.enabled && i.onUpdate()
			}
		}
		_lateUpdateScript() {
			for (var e = this._scriptPool, t = 0, r = e.length; t < r; t++) {
				var i = e[t];
				i && i.enabled && i.onLateUpdate()
			}
		}
		_addScript(e) {
			var t = this._scriptPool;
			e._indexInPool = t.length, t.push(e)
		}
		_removeScript(e) {
			this._scriptPool[e._indexInPool] = null, e._indexInPool = -1, this._needClearScriptPool = !0
		}
		_preRenderScript() {
			for (var e = this._scriptPool, t = 0, r = e.length; t < r; t++) {
				var i = e[t];
				i && i.enabled && i.onPreRender()
			}
		}
		_postRenderScript() {
			for (var e = this._scriptPool, t = 0, r = e.length; t < r; t++) {
				var i = e[t];
				i && i.enabled && i.onPostRender()
			}
		}
		_prepareSceneToRender() {
			var e = this._shaderValues;
			if (s._config._multiLighting) {
				var t = pr._lightTexture,
					r = pr._lightPixles;
				const s = t.width,
					v = 4 * s;
				var i = 0,
					a = this._directionLights._length,
					o = this._directionLights._elements;
				if (a > 0) {
					for (var l = this._directionLights.getSunLight(), _ = 0; _ < a; _++, i++) {
						var h = (g = o[_])._direction,
							c = g._intensityColor,
							d = v * i;
						n.scale(g.color, g._intensity, c), g.transform.worldMatrix.getForward(h), n.normalize(h,
								h), r[d] = c.x, r[d + 1] = c.y, r[d + 2] = c.z, r[d + 4] = h.x, r[d + 5] = h.y,
							r[d + 6] = h.z, _ == l && (e.setVector3(pr.SUNLIGHTDIRCOLOR, c), e.setVector3(pr
								.SUNLIGHTDIRECTION, h))
					}
					e.addDefine(k.SHADERDEFINE_DIRECTIONLIGHT)
				} else e.removeDefine(k.SHADERDEFINE_DIRECTIONLIGHT);
				var u = this._pointLights._length;
				if (u > 0) {
					var f = this._pointLights._elements;
					for (_ = 0; _ < u; _++, i++) {
						var m = (S = f[_]).transform.position;
						c = S._intensityColor, d = v * i;
						n.scale(S.color, S._intensity, c), r[d] = c.x, r[d + 1] = c.y, r[d + 2] = c.z, r[d +
							3] = S.range, r[d + 4] = m.x, r[d + 5] = m.y, r[d + 6] = m.z
					}
					e.addDefine(k.SHADERDEFINE_POINTLIGHT)
				} else e.removeDefine(k.SHADERDEFINE_POINTLIGHT);
				var E = this._spotLights._length;
				if (E > 0) {
					var T = this._spotLights._elements;
					for (_ = 0; _ < E; _++, i++) {
						var p = T[_];
						h = p._direction, m = p.transform.position, c = p._intensityColor, d = v * i;
						n.scale(p.color, p._intensity, c), p.transform.worldMatrix.getForward(h), n.normalize(h,
								h), r[d] = c.x, r[d + 1] = c.y, r[d + 2] = c.z, r[d + 3] = p.range, r[d + 4] = m
							.x, r[d + 5] = m.y, r[d + 6] = m.z, r[d + 7] = p.spotAngle * Math.PI / 180, r[d +
							8] = h.x, r[d + 9] = h.y, r[d + 10] = h.z
					}
					e.addDefine(k.SHADERDEFINE_SPOTLIGHT)
				} else e.removeDefine(k.SHADERDEFINE_SPOTLIGHT);
				i > 0 && t.setSubPixels(0, 0, s, i, r, 0), e.setTexture(pr.LIGHTBUFFER, t), e.setInt(pr
					.DIRECTIONLIGHTCOUNT, this._directionLights._length), e.setTexture(pr.CLUSTERBUFFER, Te
					.instance._clusterTexture)
			} else {
				if (this._directionLights._length > 0) {
					var g = this._directionLights._elements[0];
					n.scale(g.color, g._intensity, g._intensityColor), g.transform.worldMatrix.getForward(g
							._direction), n.normalize(g._direction, g._direction), e.setVector3(pr
							.LIGHTDIRCOLOR, g._intensityColor), e.setVector3(pr.LIGHTDIRECTION, g._direction), e
						.setVector3(pr.SUNLIGHTDIRCOLOR, g._intensityColor), e.setVector3(pr.SUNLIGHTDIRECTION,
							g._direction), e.addDefine(k.SHADERDEFINE_DIRECTIONLIGHT)
				} else e.removeDefine(k.SHADERDEFINE_DIRECTIONLIGHT);
				if (this._pointLights._length > 0) {
					var S = this._pointLights._elements[0];
					n.scale(S.color, S._intensity, S._intensityColor), e.setVector3(pr.POINTLIGHTCOLOR, S
							._intensityColor), e.setVector3(pr.POINTLIGHTPOS, S.transform.position), e
						.setNumber(pr.POINTLIGHTRANGE, S.range), e.addDefine(k.SHADERDEFINE_POINTLIGHT)
				} else e.removeDefine(k.SHADERDEFINE_POINTLIGHT);
				if (this._spotLights._length > 0) {
					var v = this._spotLights._elements[0];
					n.scale(v.color, v._intensity, v._intensityColor), e.setVector3(pr.SPOTLIGHTCOLOR, v
							._intensityColor), e.setVector3(pr.SPOTLIGHTPOS, v.transform.position), v.transform
						.worldMatrix.getForward(v._direction), n.normalize(v._direction, v._direction), e
						.setVector3(pr.SPOTLIGHTDIRECTION, v._direction), e.setNumber(pr.SPOTLIGHTRANGE, v
							.range), e.setNumber(pr.SPOTLIGHTSPOTANGLE, v.spotAngle * Math.PI / 180), e
						.addDefine(k.SHADERDEFINE_SPOTLIGHT)
				} else e.removeDefine(k.SHADERDEFINE_SPOTLIGHT)
			}
		}
		_addCamera(e) {
			for (var t = this._binarySearchIndexInCameraPool(e), r = e._renderingOrder, i = this._cameraPool
					.length; t < i && this._cameraPool[t]._renderingOrder <= r;) t++;
			this._cameraPool.splice(t, 0, e)
		}
		_removeCamera(e) {
			this._cameraPool.splice(this._cameraPool.indexOf(e), 1)
		}
		_preCulling(e, t, r, i) {
			oe.renderObjectCulling(t, this, e, this._renders, r, i)
		}
		_clear(e, r) {
			var i, a = r.viewport,
				n = r.camera,
				s = n._getInternalRenderTexture(),
				o = a.width,
				l = a.height,
				_ = a.x,
				h = n._getCanvasHeight() - a.y - l;
			e.viewport(_, h, o, l);
			var c = n.clearFlag;
			switch (c !== Oe.CLEARFLAG_SKY || n.skyRenderer._isAvailable() || this._skyRenderer
			._isAvailable() || (c = Oe.CLEARFLAG_SOLIDCOLOR), c) {
				case Oe.CLEARFLAG_SOLIDCOLOR:
					var d = n.clearColor;
					if (e.enable(e.SCISSOR_TEST), e.scissor(_, h, o, l), d ? e.clearColor(d.x, d.y, d.z, d.w) :
						e.clearColor(0, 0, 0, 0), s) switch (i = e.COLOR_BUFFER_BIT, s.depthStencilFormat) {
						case t.RenderTextureDepthFormat.DEPTH_16:
							i |= e.DEPTH_BUFFER_BIT;
							break;
						case t.RenderTextureDepthFormat.STENCIL_8:
							i |= e.STENCIL_BUFFER_BIT;
							break;
						case t.RenderTextureDepthFormat.DEPTHSTENCIL_16_8:
							i |= e.DEPTH_BUFFER_BIT, i |= e.STENCIL_BUFFER_BIT
					} else i = e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT;
					t.WebGLContext.setDepthMask(e, !0), e.clear(i), e.disable(e.SCISSOR_TEST);
					break;
				case Oe.CLEARFLAG_SKY:
				case Oe.CLEARFLAG_DEPTHONLY:
					if (e.enable(e.SCISSOR_TEST), e.scissor(_, h, o, l), s) switch (s.depthStencilFormat) {
						case t.RenderTextureDepthFormat.DEPTH_16:
							i = e.DEPTH_BUFFER_BIT;
							break;
						case t.RenderTextureDepthFormat.STENCIL_8:
							i = e.STENCIL_BUFFER_BIT;
							break;
						case t.RenderTextureDepthFormat.DEPTHSTENCIL_16_8:
							i = e.DEPTH_BUFFER_BIT | e.STENCIL_BUFFER_BIT
					} else i = e.DEPTH_BUFFER_BIT;
					t.WebGLContext.setDepthMask(e, !0), e.clear(i), e.disable(e.SCISSOR_TEST);
					break;
				case Oe.CLEARFLAG_NONE:
					break;
				default:
					throw new Error("BaseScene:camera clearFlag invalid.")
			}
		}
		_renderScene(e) {
			var t = e.camera,
				r = t._getInternalRenderTexture();
			if (r ? this._opaqueQueue._render(e, !0) : this._opaqueQueue._render(e, !1), t.clearFlag === Oe
				.CLEARFLAG_SKY && (t.skyRenderer._isAvailable() ? t.skyRenderer._render(e) : this._skyRenderer
					._isAvailable() && this._skyRenderer._render(e)), r ? this._transparentQueue._render(e, !
				0) : this._transparentQueue._render(e, !1), oe.debugFrustumCulling)
				for (var i = this._debugTool._render._renderElements, a = 0, n = i.length; a < n; a++) i[a]
					._update(this, e, null, null), i[a]._render(e, !1)
		}
		_parse(e, r) {
			var i = e.lightmaps;
			if (i) {
				for (var a = i.length, n = [], s = 0; s < a; s++) n[s] = t.Loader.getRes(i[s].path);
				this.setlightmaps(n)
			}
			var o = e.ambientColor;
			if (o) {
				var l = this.ambientColor;
				l.fromArray(o), this.ambientColor = l
			}
			var _ = e.sky;
			if (_) switch (this._skyRenderer.material = t.Loader.getRes(_.material.path), _.mesh) {
				case "SkyBox":
					this._skyRenderer.mesh = Ce.instance;
					break;
				case "SkyDome":
					this._skyRenderer.mesh = or.instance;
					break;
				default:
					this.skyRenderer.mesh = Ce.instance
			}
			var h = e.reflectionTexture;
			h && (this.customReflection = t.Loader.getRes(h)), this.enableFog = e.enableFog, this.fogStart = e
				.fogStart, this.fogRange = e.fogRange;
			var c = e.fogColor;
			if (c) {
				var d = this.fogColor;
				d.fromArray(c), this.fogColor = d
			}
		}
		_onActive() {
			super._onActive(), t.ILaya.stage._scene3Ds.push(this)
		}
		_onInActive() {
			super._onInActive();
			var e = t.ILaya.stage._scene3Ds;
			e.splice(e.indexOf(this), 1)
		}
		_addRenderObject(e) {
			if (this._octree && e._supportOctree) this._octree.add(e);
			else if (this._renders.add(e), t.Render.supportWebGLPlusCulling) {
				var r = e._getIndexInList(),
					i = this._cullingBufferIndices.length;
				if (r >= i) {
					var a = this._cullingBufferIndices,
						n = this._cullingBufferResult;
					this._cullingBufferIndices = new Int32Array(i + 1024), this._cullingBufferResult =
						new Int32Array(i + 1024), this._cullingBufferIndices.set(a, 0), this
						._cullingBufferResult.set(n, 0)
				}
				this._cullingBufferIndices[r] = e._cullingBufferIndex
			}
		}
		_removeRenderObject(e) {
			var r;
			this._octree && e._supportOctree ? this._octree.remove(e) : (t.Render.supportWebGLPlusCulling && (
					r = this._renders.elements[this._renders.length - 1]), this._renders.remove(e), t.Render
				.supportWebGLPlusCulling && (this._cullingBufferIndices[r._getIndexInList()] = r
					._cullingBufferIndex))
		}
		_addShadowCastRenderObject(e) {
			this._octree || this._castShadowRenders.add(e)
		}
		_removeShadowCastRenderObject(e) {
			this._octree || this._castShadowRenders.remove(e)
		}
		_getRenderQueue(e) {
			return e <= 2500 ? this._opaqueQueue : this._transparentQueue
		}
		setlightmaps(e) {
			for (var t = this._lightmaps, r = 0, i = t.length; r < i; r++) t[r]._removeReference();
			if (!e) throw new Error("Scene3D: value value can't be null.");
			var a = e.length;
			for (t.length = a, r = 0; r < a; r++) {
				var n = e[r];
				n._addReference(), t[r] = n
			}
			for (r = 0, i = this._children.length; r < i; r++) this._setLightmapToChildNode(this._children[r])
		}
		getlightmaps() {
			return this._lightmaps.slice()
		}
		destroy(e = !0) {
			this.destroyed || (super.destroy(e), this._skyRenderer.destroy(), this._skyRenderer = null, this
				._directionLights = null, this._pointLights = null, this._spotLights = null, this
				._alternateLights = null, this._lightmaps = null, this._shaderValues = null, this._renders =
				null, this._castShadowRenders = null, this._cameraPool = null, this._octree = null, this
				.parallelSplitShadowMaps = null, this._physicsSimulation && this._physicsSimulation
				._destroy(), t.Loader.clearRes(this.url))
		}
		render(e, r, i) {
			e._curSubmit = t.SubmitBase.RENDERBASE, this._children.length > 0 && e.addRenderObject(this)
		}
		renderSubmit() {
			var e, r, i;
			t.LayaGL.instance;
			for (this._prepareSceneToRender(), e = 0, i = (r = this._cameraPool.length) - 1; e < r; e++) {
				t.Render.supportWebGLPlusRendering && B.setRuntimeValueMode(e == i);
				var a = this._cameraPool[e];
				a.enableRender && a.render()
			}
			return t.Context.set2DRenderConfig(), 1
		}
		getRenderType() {
			return 0
		}
		releaseRender() {}
		reUse(e, t) {
			return 0
		}
	}
	pr.HIERARCHY = "HIERARCHY", pr.physicsSettings = new nr, pr.octreeCulling = !1, pr.octreeInitialSize = 64, pr
		.octreeInitialCenter = new n(0, 0, 0), pr.octreeMinNodeSize = 2, pr.octreeLooseness = 1.25, pr
		.REFLECTIONMODE_SKYBOX = 0, pr.REFLECTIONMODE_CUSTOM = 1, pr.FOGCOLOR = F.propertyNameToID("u_FogColor"), pr
		.FOGSTART = F.propertyNameToID("u_FogStart"), pr.FOGRANGE = F.propertyNameToID("u_FogRange"), pr
		.DIRECTIONLIGHTCOUNT = F.propertyNameToID("u_DirationLightCount"), pr.LIGHTBUFFER = F.propertyNameToID(
			"u_LightBuffer"), pr.CLUSTERBUFFER = F.propertyNameToID("u_LightClusterBuffer"), pr.SUNLIGHTDIRECTION = F
		.propertyNameToID("u_SunLight.direction"), pr.SUNLIGHTDIRCOLOR = F.propertyNameToID("u_SunLight.color"), pr
		.LIGHTDIRECTION = F.propertyNameToID("u_DirectionLight.direction"), pr.LIGHTDIRCOLOR = F.propertyNameToID(
			"u_DirectionLight.color"), pr.POINTLIGHTPOS = F.propertyNameToID("u_PointLight.position"), pr
		.POINTLIGHTRANGE = F.propertyNameToID("u_PointLight.range"), pr.POINTLIGHTATTENUATION = F.propertyNameToID(
			"u_PointLight.attenuation"), pr.POINTLIGHTCOLOR = F.propertyNameToID("u_PointLight.color"), pr
		.SPOTLIGHTPOS = F.propertyNameToID("u_SpotLight.position"), pr.SPOTLIGHTDIRECTION = F.propertyNameToID(
			"u_SpotLight.direction"), pr.SPOTLIGHTSPOTANGLE = F.propertyNameToID("u_SpotLight.spot"), pr
		.SPOTLIGHTRANGE = F.propertyNameToID("u_SpotLight.range"), pr.SPOTLIGHTCOLOR = F.propertyNameToID(
			"u_SpotLight.color"), pr.SHADOWDISTANCE = F.propertyNameToID("u_shadowPSSMDistance"), pr
		.SHADOWLIGHTVIEWPROJECT = F.propertyNameToID("u_lightShadowVP"), pr.SHADOWMAPPCFOFFSET = F.propertyNameToID(
			"u_shadowPCFoffset"), pr.SHADOWMAPTEXTURE1 = F.propertyNameToID("u_shadowMap1"), pr.SHADOWMAPTEXTURE2 = F
		.propertyNameToID("u_shadowMap2"), pr.SHADOWMAPTEXTURE3 = F.propertyNameToID("u_shadowMap3"), pr.AMBIENTCOLOR =
		F.propertyNameToID("u_AmbientColor"), pr.REFLECTIONTEXTURE = F.propertyNameToID("u_ReflectTexture"), pr
		.REFLETIONINTENSITY = F.propertyNameToID("u_ReflectIntensity"), pr.TIME = F.propertyNameToID("u_Time");
	class gr {}
	class Sr extends qe {
		constructor(e) {
			super(e), this._bones = [], this._skinnedDataLoopMarks = [], this._localBounds = new Ze(n._ZERO, n
				._ZERO), this._cacheAnimationNode = []
		}
		get localBounds() {
			return this._localBounds
		}
		set localBounds(e) {
			this._localBounds = e
		}
		get rootBone() {
			return this._cacheRootBone
		}
		set rootBone(e) {
			this._cacheRootBone != e && (this._cacheRootBone ? this._cacheRootBone.transform.off(t.Event
					.TRANSFORM_CHANGED, this, this._onWorldMatNeedChange) : this._owner.transform.off(t.Event
					.TRANSFORM_CHANGED, this, this._onWorldMatNeedChange), e ? e.transform.on(t.Event
					.TRANSFORM_CHANGED, this, this._onWorldMatNeedChange) : this._owner.transform.on(t.Event
					.TRANSFORM_CHANGED, this, this._onWorldMatNeedChange), this._cacheRootBone = e, this
				._onWorldMatNeedChange(ie.TRANSFORM_WORLDPOSITION | ie.TRANSFORM_WORLDQUATERNION | ie
					.TRANSFORM_WORLDSCALE))
		}
		get bones() {
			return this._bones
		}
		_computeSkinnedData() {
			if (this._cacheMesh && this._cacheAvatar || this._cacheMesh && !this._cacheAvatar)
				for (var e = this._cacheMesh._inverseBindPoses, t = this._cacheMesh._bindPoseIndices, r = this
						._cacheMesh._skinDataPathMarks, i = 0, a = this._cacheMesh.subMeshCount; i < a; i++)
					for (var n = this._cacheMesh.getSubMesh(i)._boneIndicesList, s = this._skinnedData[i], o = 0,
							l = n.length; o < l; o++) {
						var _ = n[o];
						this._computeSubSkinnedData(e, _, t, s[o], r)
					}
		}
		_computeSubSkinnedData(e, r, i, a, n) {
			for (var s = 0, o = r.length; s < o; s++) {
				var l = r[s];
				if (this._skinnedDataLoopMarks[l] === t.Stat.loopCount)
					for (var _ = n[l], h = this._skinnedData[_[0]][_[1]], c = 16 * _[2], d = 16 * s, u = 0; u <
						16; u++) a[d + u] = h[c + u];
				else {
					if (this._cacheAvatar) A._mulMatrixArray(this._cacheAnimationNode[l].transform.getWorldMatrix(),
						e[i[l]], a, 16 * s);
					else {
						var f = i[l];
						A._mulMatrixArray(this._bones[f].transform.worldMatrix.elements, e[f], a, 16 * s)
					}
					this._skinnedDataLoopMarks[l] = t.Stat.loopCount
				}
			}
		}
		_onWorldMatNeedChange(e) {
			this._boundsChange = !0, this._octreeNode && (this._cacheAvatar ? -1 === this
				._indexInOctreeMotionList && this._octreeNode._octree.addMotionObject(this) : (e &= ie
					.TRANSFORM_WORLDPOSITION | ie.TRANSFORM_WORLDQUATERNION | ie.TRANSFORM_WORLDSCALE) && -1 ===
				this._indexInOctreeMotionList && this._octreeNode._octree.addMotionObject(this))
		}
		_createRenderElement() {
			return new Ge
		}
		_onMeshChange(e) {
			super._onMeshChange(e), this._cacheMesh = e;
			var t = e.subMeshCount;
			this._skinnedData = [], this._skinnedDataLoopMarks.length = e._bindPoseIndices.length;
			for (var r = 0; r < t; r++)
				for (var i = e.getSubMesh(r)._boneIndicesList, a = i.length, n = this._skinnedData[r] = [], s =
					0; s < a; s++) n[s] = new Float32Array(16 * i[s].length);
			this._cacheAvatar && e && this._getCacheAnimationNodes()
		}
		_setCacheAnimator(e) {
			this._cacheAnimator = e, this._shaderValues.addDefine(gr.SHADERDEFINE_BONE), this._setRootNode()
		}
		_calculateBoundingBox() {
			if (this._cacheAvatar)
				if (this._cacheAnimator && this._rootBone) {
					var e = Sr._tempMatrix4x4;
					A.matrix4x4MultiplyMFM(this._cacheAnimator.owner.transform.worldMatrix, this
						._cacheRootAnimationNode.transform.getWorldMatrix(), e), this._localBounds._tranform(e,
						this._bounds)
				} else super._calculateBoundingBox();
			else this._cacheRootBone ? this._localBounds._tranform(this._cacheRootBone.transform.worldMatrix, this
				._bounds) : this._localBounds._tranform(this._owner.transform.worldMatrix, this._bounds);
			if (t.Render.supportWebGLPlusCulling) {
				var r = this._bounds.getMin(),
					i = this._bounds.getMax(),
					a = oe._cullingBuffer;
				a[this._cullingBufferIndex + 1] = r.x, a[this._cullingBufferIndex + 2] = r.y, a[this
					._cullingBufferIndex + 3] = r.z, a[this._cullingBufferIndex + 4] = i.x, a[this
					._cullingBufferIndex + 5] = i.y, a[this._cullingBufferIndex + 6] = i.z
			}
		}
		_renderUpdate(e, t) {
			if (this._cacheAnimator)
				if (this._computeSkinnedData(), this._cacheAvatar) {
					var r = this._cacheAnimator.owner._transform;
					this._shaderValues.setMatrix4x4(ae.WORLDMATRIX, r.worldMatrix)
				} else this._shaderValues.setMatrix4x4(ae.WORLDMATRIX, p.DEFAULT);
			else this._shaderValues.setMatrix4x4(ae.WORLDMATRIX, t.worldMatrix)
		}
		_renderUpdateWithCamera(e, t) {
			var r = e.projectionViewMatrix;
			if (this._cacheAnimator)
				if (this._cacheAvatar) {
					var i = this._cacheAnimator.owner._transform;
					p.multiply(r, i.worldMatrix, this._projectionViewWorldMatrix), this._shaderValues.setMatrix4x4(
						ae.MVPMATRIX, this._projectionViewWorldMatrix)
				} else this._shaderValues.setMatrix4x4(ae.MVPMATRIX, r);
			else p.multiply(r, t.worldMatrix, this._projectionViewWorldMatrix), this._shaderValues.setMatrix4x4(ae
				.MVPMATRIX, this._projectionViewWorldMatrix)
		}
		_destroy() {
			super._destroy(), this._cacheAvatar ? this._cacheRootAnimationNode && this._cacheRootAnimationNode
				.transform.off(t.Event.TRANSFORM_CHANGED, this, this._onWorldMatNeedChange) : this._cacheRootBone ?
				!this._cacheRootBone.destroyed && this._cacheRootBone.transform.off(t.Event.TRANSFORM_CHANGED, this,
					this._onWorldMatNeedChange) : this._owner && !this._owner.destroyed && this._owner.transform
				.off(t.Event.TRANSFORM_CHANGED, this, this._onWorldMatNeedChange)
		}
		get bounds() {
			return (this._boundsChange || this._cacheAvatar) && (this._calculateBoundingBox(), this
				._boundsChange = !1), this._bounds
		}
		_setRootBone(e) {
			this._rootBone = e, this._setRootNode()
		}
		_setRootNode() {
			var e;
			e = this._cacheAnimator && this._rootBone && this._cacheAvatar ? this._cacheAnimator._avatarNodeMap[this
				._rootBone] : null, this._cacheRootAnimationNode != e && (this._onWorldMatNeedChange(ie
					.TRANSFORM_WORLDPOSITION | ie.TRANSFORM_WORLDQUATERNION | ie.TRANSFORM_WORLDSCALE), this
				._owner.transform.off(t.Event.TRANSFORM_CHANGED, this, this._onWorldMatNeedChange), this
				._cacheRootAnimationNode && this._cacheRootAnimationNode.transform.off(t.Event
					.TRANSFORM_CHANGED, this, this._onWorldMatNeedChange), e && e.transform.on(t.Event
					.TRANSFORM_CHANGED, this, this._onWorldMatNeedChange), this._cacheRootAnimationNode = e)
		}
		_getCacheAnimationNodes() {
			var e = this._cacheMesh._boneNames,
				r = this._cacheMesh._bindPoseIndices,
				i = r.length;
			if (t.Render.supportWebGLPlusAnimation) {
				this._cacheAnimationNodeIndices = new Uint16Array(i);
				var a = this._cacheAnimator._avatarNodeMap;
				for (o = 0; o < i; o++) {
					var n = a[e[r[o]]];
					this._cacheAnimationNodeIndices[o] = n ? n._worldMatrixIndex : 0
				}
			} else {
				this._cacheAnimationNode.length = i;
				for (var s = this._cacheAnimator._avatarNodeMap, o = 0; o < i; o++) {
					var l = s[e[r[o]]];
					this._cacheAnimationNode[o] = l
				}
			}
		}
		_setCacheAvatar(e) {
			this._cacheAvatar !== e && (this._cacheMesh ? (this._cacheAvatar = e, e && (this._shaderValues
					.addDefine(gr.SHADERDEFINE_BONE), this._getCacheAnimationNodes())) : this._cacheAvatar = e,
				this._setRootNode())
		}
		_computeSubSkinnedDataNative(e, r, i, a, n, s) {
			t.LayaGL.instance.computeSubSkinnedData(e, r, i, a, n, s)
		}
		_computeSkinnedDataForNative() {
			if (this._cacheMesh && this._cacheAvatar || this._cacheMesh && !this._cacheAvatar)
				for (var e = this._cacheMesh._inverseBindPoses, r = this._cacheMesh._bindPoseIndices, i = this
						._cacheMesh._skinDataPathMarks, a = 0, n = this._cacheMesh.subMeshCount; a < n; a++)
					for (var s = this._cacheMesh.getSubMesh(a)._boneIndicesList, o = this._skinnedData[a], l = 0,
							_ = s.length; l < _; l++) {
						var h = s[l];
						this._cacheAvatar && t.Render.supportWebGLPlusAnimation ? this._computeSubSkinnedDataNative(
							this._cacheAnimator._animationNodeWorldMatrixs, this._cacheAnimationNodeIndices,
							this._cacheMesh._inverseBindPosesBuffer, h, r, o[l]) : this._computeSubSkinnedData(
							e, h, r, o[l], i)
					}
		}
	}
	Sr._tempMatrix4x4 = new p;
	class vr extends ne {
		constructor(e = null, t = null) {
			super(t), this._meshFilter = new Qe(this), this._render = new Sr(this), e && (this._meshFilter
				.sharedMesh = e)
		}
		static __init__() {
			gr.SHADERDEFINE_BONE = F.getDefineByName("BONE")
		}
		get meshFilter() {
			return this._meshFilter
		}
		get skinnedMeshRenderer() {
			return this._render
		}
		_parse(e, r) {
			super._parse(e, r);
			var i = this.skinnedMeshRenderer,
				s = e.lightmapIndex;
			null != s && (i.lightmapIndex = s);
			var o, l = e.lightmapScaleOffset;
			if (l && (i.lightmapScaleOffset = new a(l[0], l[1], l[2], l[3])), o = e.meshPath) {
				var _ = t.Loader.getRes(o);
				_ && (this.meshFilter.sharedMesh = _)
			}
			var h = e.materials;
			if (h) {
				var c = i.sharedMaterials,
					d = h.length;
				c.length = d;
				for (var u = 0; u < d; u++) c[u] = t.Loader.getRes(h[u].path);
				i.sharedMaterials = c
			}
			var f = e.boundBox,
				m = f.min,
				E = f.max;
			if (i.localBounds.setMin(new n(m[0], m[1], m[2])), i.localBounds.setMax(new n(E[0], E[1], E[2])), r) {
				var T = e.rootBone;
				i.rootBone = r[T];
				var p, g = e.bones;
				for (u = 0, p = g.length; u < p; u++) i.bones.push(r[g[u]])
			} else e.rootBone && i._setRootBone(e.rootBone)
		}
		_changeHierarchyAnimator(e) {
			super._changeHierarchyAnimator(e), this.skinnedMeshRenderer._setCacheAnimator(e)
		}
		_changeAnimatorAvatar(e) {
			this.skinnedMeshRenderer._setCacheAvatar(e)
		}
		_cloneTo(e, t, r) {
			var i = e;
			i.meshFilter.sharedMesh = this.meshFilter.sharedMesh;
			var a = this._render,
				n = i._render;
			n.enable = a.enable, n.sharedMaterials = a.sharedMaterials, n.castShadow = a.castShadow;
			var s = a.lightmapScaleOffset;
			s && (n.lightmapScaleOffset = s.clone()), n.receiveShadow = a.receiveShadow, n.sortingFudge = a
				.sortingFudge, n._rootBone = a._rootBone;
			var o = a.bones,
				l = n.bones,
				_ = o.length;
			l.length = _;
			var h = a.rootBone;
			if (h) {
				var c = A._getHierarchyPath(t, h, vr._tempArray0);
				n.rootBone = c ? A._getNodeByHierarchyPath(r, c) : h
			}
			for (var d = 0; d < o.length; d++) c = A._getHierarchyPath(t, o[d], vr._tempArray0), l[d] = c ? A
				._getNodeByHierarchyPath(r, c) : o[d];
			var u = a.localBounds;
			u && u.cloneTo(n.localBounds), super._cloneTo(e, t, r)
		}
		destroy(e = !0) {
			this.destroyed || (super.destroy(e), this._meshFilter.destroy())
		}
		_create() {
			return new vr
		}
	}
	vr._tempArray0 = [], vr.BONES = F.propertyNameToID("u_Bones");
	class Rr extends W {
		constructor() {
			super(), this.setShaderName("Trail"), this._color = new a(1, 1, 1, 1), this._shaderValues.setVector(Rr
				.TINTCOLOR, new a(1, 1, 1, 1)), this.renderMode = Rr.RENDERMODE_ALPHABLENDED
		}
		static __initDefine__() {
			Rr.SHADERDEFINE_MAINTEXTURE = F.getDefineByName("MAINTEXTURE"), Rr.SHADERDEFINE_TILINGOFFSET = F
				.getDefineByName("TILINGOFFSET"), Rr.SHADERDEFINE_ADDTIVEFOG = F.getDefineByName("ADDTIVEFOG")
		}
		get _TintColorR() {
			return this._color.x
		}
		set _TintColorR(e) {
			this._color.x = e, this.color = this._color
		}
		get _TintColorG() {
			return this._color.y
		}
		set _TintColorG(e) {
			this._color.y = e, this.color = this._color
		}
		get _TintColorB() {
			return this._color.z
		}
		set _TintColorB(e) {
			this._color.z = e, this.color = this._color
		}
		get _TintColorA() {
			return this._color.w
		}
		set _TintColorA(e) {
			this._color.w = e, this.color = this._color
		}
		get _MainTex_STX() {
			return this._shaderValues.getVector(Rr.TILINGOFFSET).x
		}
		set _MainTex_STX(e) {
			var t = this._shaderValues.getVector(Rr.TILINGOFFSET);
			t.x = e, this.tilingOffset = t
		}
		get _MainTex_STY() {
			return this._shaderValues.getVector(Rr.TILINGOFFSET).y
		}
		set _MainTex_STY(e) {
			var t = this._shaderValues.getVector(Rr.TILINGOFFSET);
			t.y = e, this.tilingOffset = t
		}
		get _MainTex_STZ() {
			return this._shaderValues.getVector(Rr.TILINGOFFSET).z
		}
		set _MainTex_STZ(e) {
			var t = this._shaderValues.getVector(Rr.TILINGOFFSET);
			t.z = e, this.tilingOffset = t
		}
		get _MainTex_STW() {
			return this._shaderValues.getVector(Rr.TILINGOFFSET).w
		}
		set _MainTex_STW(e) {
			var t = this._shaderValues.getVector(Rr.TILINGOFFSET);
			t.w = e, this.tilingOffset = t
		}
		set renderMode(e) {
			switch (e) {
				case Rr.RENDERMODE_ADDTIVE:
					this.renderQueue = W.RENDERQUEUE_TRANSPARENT, this.alphaTest = !1, this.depthWrite = !1, this
						.cull = X.CULL_NONE, this.blend = X.BLEND_ENABLE_ALL, this.blendSrc = X
						.BLENDPARAM_SRC_ALPHA, this.blendDst = X.BLENDPARAM_ONE, this.depthTest = X.DEPTHTEST_LESS,
						this._shaderValues.addDefine(Rr.SHADERDEFINE_ADDTIVEFOG);
					break;
				case Rr.RENDERMODE_ALPHABLENDED:
					this.renderQueue = W.RENDERQUEUE_TRANSPARENT, this.alphaTest = !1, this.depthWrite = !1, this
						.cull = X.CULL_NONE, this.blend = X.BLEND_ENABLE_ALL, this.blendSrc = X
						.BLENDPARAM_SRC_ALPHA, this.blendDst = X.BLENDPARAM_ONE_MINUS_SRC_ALPHA, this.depthTest = X
						.DEPTHTEST_LESS, this._shaderValues.removeDefine(Rr.SHADERDEFINE_ADDTIVEFOG);
					break;
				default:
					throw new Error("TrailMaterial : renderMode value error.")
			}
		}
		get colorR() {
			return this._TintColorR
		}
		set colorR(e) {
			this._TintColorR = e
		}
		get colorG() {
			return this._TintColorG
		}
		set colorG(e) {
			this._TintColorG = e
		}
		get colorB() {
			return this._TintColorB
		}
		set colorB(e) {
			this._TintColorB = e
		}
		get colorA() {
			return this._TintColorA
		}
		set colorA(e) {
			this._TintColorA = e
		}
		get color() {
			return this._shaderValues.getVector(Rr.TINTCOLOR)
		}
		set color(e) {
			this._shaderValues.setVector(Rr.TINTCOLOR, e)
		}
		get texture() {
			return this._shaderValues.getTexture(Rr.MAINTEXTURE)
		}
		set texture(e) {
			e ? this._shaderValues.addDefine(Rr.SHADERDEFINE_MAINTEXTURE) : this._shaderValues.removeDefine(Rr
				.SHADERDEFINE_MAINTEXTURE), this._shaderValues.setTexture(Rr.MAINTEXTURE, e)
		}
		get tilingOffsetX() {
			return this._MainTex_STX
		}
		set tilingOffsetX(e) {
			this._MainTex_STX = e
		}
		get tilingOffsetY() {
			return this._MainTex_STY
		}
		set tilingOffsetY(e) {
			this._MainTex_STY = e
		}
		get tilingOffsetZ() {
			return this._MainTex_STZ
		}
		set tilingOffsetZ(e) {
			this._MainTex_STZ = e
		}
		get tilingOffsetW() {
			return this._MainTex_STW
		}
		set tilingOffsetW(e) {
			this._MainTex_STW = e
		}
		get tilingOffset() {
			return this._shaderValues.getVector(Rr.TILINGOFFSET)
		}
		set tilingOffset(e) {
			e && (1 != e.x || 1 != e.y || 0 != e.z || 0 != e.w) ? this._shaderValues.addDefine(Rr
					.SHADERDEFINE_TILINGOFFSET) : this._shaderValues.removeDefine(Rr.SHADERDEFINE_TILINGOFFSET),
				this._shaderValues.setVector(Rr.TILINGOFFSET, e)
		}
		set depthWrite(e) {
			this._shaderValues.setBool(Rr.DEPTH_WRITE, e)
		}
		get depthWrite() {
			return this._shaderValues.getBool(Rr.DEPTH_WRITE)
		}
		set cull(e) {
			this._shaderValues.setInt(Rr.CULL, e)
		}
		get cull() {
			return this._shaderValues.getInt(Rr.CULL)
		}
		set blend(e) {
			this._shaderValues.setInt(Rr.BLEND, e)
		}
		get blend() {
			return this._shaderValues.getInt(Rr.BLEND)
		}
		set blendSrc(e) {
			this._shaderValues.setInt(Rr.BLEND_SRC, e)
		}
		get blendSrc() {
			return this._shaderValues.getInt(Rr.BLEND_SRC)
		}
		set blendDst(e) {
			this._shaderValues.setInt(Rr.BLEND_DST, e)
		}
		get blendDst() {
			return this._shaderValues.getInt(Rr.BLEND_DST)
		}
		set depthTest(e) {
			this._shaderValues.setInt(Rr.DEPTH_TEST, e)
		}
		get depthTest() {
			return this._shaderValues.getInt(Rr.DEPTH_TEST)
		}
		clone() {
			var e = new Rr;
			return this.cloneTo(e), e
		}
	}
	Rr.RENDERMODE_ALPHABLENDED = 0, Rr.RENDERMODE_ADDTIVE = 1, Rr.MAINTEXTURE = F.propertyNameToID("u_MainTexture"), Rr
		.TINTCOLOR = F.propertyNameToID("u_MainColor"), Rr.TILINGOFFSET = F.propertyNameToID("u_TilingOffset"), Rr
		.CULL = F.propertyNameToID("s_Cull"), Rr.BLEND = F.propertyNameToID("s_Blend"), Rr.BLEND_SRC = F
		.propertyNameToID("s_BlendSrc"), Rr.BLEND_DST = F.propertyNameToID("s_BlendDst"), Rr.DEPTH_TEST = F
		.propertyNameToID("s_DepthTest"), Rr.DEPTH_WRITE = F.propertyNameToID("s_DepthWrite");
	class Ir {}
	var xr;
	Ir.Stretch = 0, Ir.Tile = 1, (xr = e.TrailAlignment || (e.TrailAlignment = {}))[xr.View = 0] = "View", xr[xr
		.TransformZ = 1] = "TransformZ";
	class Ar {
		constructor() {}
		static get vertexDeclaration1() {
			return Ar._vertexDeclaration1
		}
		static get vertexDeclaration2() {
			return Ar._vertexDeclaration2
		}
		get vertexDeclaration() {
			return Ar._vertexDeclaration1
		}
		static __init__() {
			Ar._vertexDeclaration1 = new de(32, [new ue(0, ce.Vector3, Ar.TRAIL_POSITION0), new ue(12, ce.Vector3,
				Ar.TRAIL_OFFSETVECTOR), new ue(24, ce.Single, Ar.TRAIL_TIME0), new ue(28, ce.Single, Ar
				.TRAIL_TEXTURECOORDINATE0Y)]), Ar._vertexDeclaration2 = new de(20, [new ue(0, ce.Single, Ar
				.TRAIL_TEXTURECOORDINATE0X), new ue(4, ce.Color, Ar.TRAIL_COLOR)])
		}
	}
	Ar.TRAIL_POSITION0 = 0, Ar.TRAIL_OFFSETVECTOR = 1, Ar.TRAIL_TIME0 = 2, Ar.TRAIL_TEXTURECOORDINATE0Y = 3, Ar
		.TRAIL_TEXTURECOORDINATE0X = 4, Ar.TRAIL_COLOR = 5;
	class Dr extends _e {
		constructor(e) {
			super(), this._floatCountPerVertices1 = 8, this._floatCountPerVertices2 = 5, this
				._increaseSegementCount = 16, this._activeIndex = 0, this._endIndex = 0, this
				._needAddFirstVertex = !1, this._isTempEndVertex = !1, this._vertices1 = null, this._vertices2 =
				null, this._lastFixedVertexPosition = new n, this._bufferState = new De, this.tmpColor = new te,
				this._disappearBoundsMode = !1, this._owner = e, this._segementCount = this._increaseSegementCount,
				this._resizeData(this._segementCount, this._bufferState);
			var r = this._owner._owner.trailRenderer.bounds,
				i = this._owner._owner.transform.position;
			r.setMin(i), r.setMax(i), t.Render.supportWebGLPlusCulling && this._calculateBoundingBoxForNative()
		}
		_resizeData(e, r) {
			this._subBirthTime = new Float32Array(e), this._subDistance = new Float64Array(e);
			var i = t.LayaGL.instance,
				a = 2 * e,
				n = Ar.vertexDeclaration1,
				s = Ar.vertexDeclaration2,
				o = [],
				l = a * n.vertexStride,
				_ = a * s.vertexStride,
				h = l + _;
			this._vertices1 = new Float32Array(a * this._floatCountPerVertices1), this._vertices2 =
				new Float32Array(a * this._floatCountPerVertices2), this._vertexBuffer1 = new he(l, i.STATIC_DRAW, !
					1), this._vertexBuffer1.vertexDeclaration = n, this._vertexBuffer2 = new he(_, i.DYNAMIC_DRAW, !
					1), this._vertexBuffer2.vertexDeclaration = s, o.push(this._vertexBuffer1), o.push(this
					._vertexBuffer2), r.bind(), r.applyVertexBuffers(o), r.unBind(), t.Resource._addMemory(h, h)
		}
		_resetData() {
			var e = this._endIndex - this._activeIndex,
				t = new Float32Array(this._vertices1.buffer, 2 * this._floatCountPerVertices1 * this._activeIndex *
					4, 2 * this._floatCountPerVertices1 * e),
				r = new Float32Array(this._vertices2.buffer, 2 * this._floatCountPerVertices2 * this._activeIndex *
					4, 2 * this._floatCountPerVertices2 * e),
				i = new Float64Array(this._subDistance.buffer, 8 * this._activeIndex, e),
				a = new Float32Array(this._subBirthTime.buffer, 4 * this._activeIndex, e);
			e === this._segementCount && (this._vertexBuffer1.destroy(), this._vertexBuffer2.destroy(), this
					._segementCount += this._increaseSegementCount, this._resizeData(this._segementCount, this
						._bufferState)), this._vertices1.set(t, 0), this._vertices2.set(r, 0), this._subDistance
				.set(i, 0), this._subBirthTime.set(a, 0), this._endIndex = e, this._activeIndex = 0, this
				._vertexBuffer1.setData(this._vertices1.buffer, 0, 2 * this._floatCountPerVertices1 * this
					._activeIndex * 4, 2 * this._floatCountPerVertices1 * e * 4), this._vertexBuffer2.setData(this
					._vertices2.buffer, 0, 2 * this._floatCountPerVertices2 * this._activeIndex * 4, 2 * this
					._floatCountPerVertices2 * e * 4)
		}
		_updateTrail(e, t, r) {
			n.equals(t, r) || (this._endIndex - this._activeIndex == 0 ? this._addTrailByFirstPosition(e, r) : this
				._addTrailByNextPosition(e, r))
		}
		_addTrailByFirstPosition(e, t) {
			this._endIndex === this._segementCount && this._resetData(), this._subDistance[this._endIndex] = 0, this
				._subBirthTime[this._endIndex] = this._owner._curtime, this._endIndex++, t.cloneTo(this
					._lastFixedVertexPosition), this._needAddFirstVertex = !0
		}
		_addTrailByNextPosition(t, i) {
			var a = Dr._tempVector30,
				s = Dr._tempVector31;
			switch (this._owner.alignment) {
				case e.TrailAlignment.View:
					var o = t.viewMatrix;
					n.transformCoordinate(i, o, Dr._tempVector33), n.transformCoordinate(this
						._lastFixedVertexPosition, o, Dr._tempVector34), n.subtract(Dr._tempVector33, Dr
						._tempVector34, a), n.cross(Dr._tempVector33, a, s);
					break;
				case e.TrailAlignment.TransformZ:
					n.subtract(i, this._lastFixedVertexPosition, a);
					var l = Dr._tempVector32;
					this._owner._owner.transform.localMatrix.getForward(l), n.cross(a, l, s)
			}
			n.normalize(s, s), n.scale(s, this._owner.widthMultiplier / 2, s);
			var _, h, c = n.scalarLength(a);
			this._needAddFirstVertex && (this._updateVerticesByPositionData(i, s, this._endIndex - 1), this
				._needAddFirstVertex = !1), c - this._owner.minVertexDistance >= r.zeroTolerance ? (this
				._isTempEndVertex ? (_ = this._endIndex - 1, h = c - this._subDistance[_], this
					._updateVerticesByPosition(i, s, c, _), this._owner._totalLength += h) : (this._endIndex ===
					this._segementCount && this._resetData(), this._updateVerticesByPosition(i, s, c, this
						._endIndex), this._owner._totalLength += c, this._endIndex++), i.cloneTo(this
					._lastFixedVertexPosition), this._isTempEndVertex = !1) : (this._isTempEndVertex ? (_ = this
				._endIndex - 1, h = c - this._subDistance[_], this._updateVerticesByPosition(i, s, c, _),
				this._owner._totalLength += h) : (this._endIndex === this._segementCount && this
				._resetData(), this._updateVerticesByPosition(i, s, c, this._endIndex), this._owner
				._totalLength += c, this._endIndex++), this._isTempEndVertex = !0)
		}
		_updateVerticesByPositionData(e, r, i) {
			var a = 2 * this._floatCountPerVertices1 * i,
				s = this._owner._curtime;
			this._vertices1[a] = e.x, this._vertices1[a + 1] = e.y, this._vertices1[a + 2] = e.z, this._vertices1[
					a + 3] = -r.x, this._vertices1[a + 4] = -r.y, this._vertices1[a + 5] = -r.z, this._vertices1[a +
					6] = s, this._vertices1[a + 7] = 1, this._vertices1[a + 8] = e.x, this._vertices1[a + 9] = e.y,
				this._vertices1[a + 10] = e.z, this._vertices1[a + 11] = r.x, this._vertices1[a + 12] = r.y, this
				._vertices1[a + 13] = r.z, this._vertices1[a + 14] = s, this._vertices1[a + 15] = 0;
			var o = this._owner._owner.trailRenderer.bounds,
				l = o.getMin(),
				_ = o.getMax(),
				h = Dr._tempVector35,
				c = Dr._tempVector36,
				d = Dr._tempVector32;
			n.add(e, r, h), n.subtract(e, r, c), n.min(c, h, d), n.min(l, d, l), o.setMin(l), n.max(h, c, d), n.max(
				_, d, _), o.setMax(_), t.Render.supportWebGLPlusCulling && this._calculateBoundingBoxForNative();
			var u = 2 * this._floatCountPerVertices1;
			this._vertexBuffer1.setData(this._vertices1.buffer, 4 * a, 4 * a, 4 * u)
		}
		_updateVerticesByPosition(e, t, r, i) {
			this._updateVerticesByPositionData(e, t, i), this._subDistance[i] = r, this._subBirthTime[i] = this
				._owner._curtime
		}
		_updateVertexBufferUV() {
			var e, r, i;
			this._disappearBoundsMode && (r = (e = this._owner._owner.trailRenderer.bounds).getMin(), i = e
			.getMax(), r.setValue(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), i.setValue(-Number
					.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE), t.Render.supportWebGLPlusCulling && this
				._calculateBoundingBoxForNative());
			for (var a = this._endIndex, s = 0, o = this._owner.colorGradient, l = o.colorAlphaKeysCount - 1, _ = o
					.colorRGBKeysCount - 1, h = this._owner._totalLength, c = 2 * this._floatCountPerVertices2, d =
					this._activeIndex; d < a; d++) {
				var u, f;
				d !== this._activeIndex && (s += this._subDistance[d]), this._owner.textureMode == Ir.Stretch ? f =
					u = 1 - s / h : (f = 1 - s / h, u = 1 - (h - s)), _ = o.evaluateColorRGB(f, this.tmpColor, _, !
						0), l = o.evaluateColorAlpha(f, this.tmpColor, l, !0);
				var m = d * c;
				if (this._vertices2[m + 0] = u, this._vertices2[m + 1] = this.tmpColor.r, this._vertices2[m + 2] =
					this.tmpColor.g, this._vertices2[m + 3] = this.tmpColor.b, this._vertices2[m + 4] = this
					.tmpColor.a, this._vertices2[m + 5] = u, this._vertices2[m + 6] = this.tmpColor.r, this
					._vertices2[m + 7] = this.tmpColor.g, this._vertices2[m + 8] = this.tmpColor.b, this._vertices2[
						m + 9] = this.tmpColor.a, this._disappearBoundsMode) {
					var E = 2 * this._floatCountPerVertices1 * d,
						T = Dr._tempVector32,
						p = Dr._tempVector33,
						g = Dr._tempVector34;
					T.setValue(this._vertices1[E + 0], this._vertices1[E + 1], this._vertices1[E + 2]), p.setValue(
							this._vertices1[E + 3], this._vertices1[E + 4], this._vertices1[E + 5]), n.add(T, p, g),
						n.min(g, r, r), n.max(g, i, i), n.subtract(T, p, g), n.min(g, r, r), n.max(g, i, i)
				}
			}
			this._disappearBoundsMode && (e.setMin(r), e.setMax(i), this._disappearBoundsMode = !1, t.Render
				.supportWebGLPlusCulling && this._calculateBoundingBoxForNative());
			var S = this._activeIndex * c;
			this._vertexBuffer2.setData(this._vertices2.buffer, 4 * S, 4 * S, 4 * (a * c - S))
		}
		_updateDisappear() {
			for (var e = this._endIndex, t = this._activeIndex; t < e && this._owner._curtime - this._subBirthTime[
					t] >= this._owner.time + r.zeroTolerance; t++) {
				var i = t + 1;
				if (i !== e && (this._owner._totalLength -= this._subDistance[i]), this._isTempEndVertex && i ===
					e - 1) {
					this._floatCountPerVertices1;
					var a = this._lastFixedVertexPosition;
					a.x = this._vertices1[0], a.y = this._vertices1[1], a.z = this._vertices1[2], this
						._isTempEndVertex = !1
				}
				this._activeIndex++, this._disappearBoundsMode = !0
			}
		}
		_getType() {
			return Dr._type
		}
		_prepareRender(e) {
			return this._endIndex - this._activeIndex > 1
		}
		_render(e) {
			this._bufferState.bind();
			var r = t.LayaGL.instance,
				i = 2 * this._activeIndex,
				a = 2 * this._endIndex - i;
			r.drawArrays(r.TRIANGLE_STRIP, i, a), t.Stat.renderBatches++, t.Stat.trianglesFaces += a - 2
		}
		destroy() {
			super.destroy();
			var e = this._vertexBuffer1._byteLength + this._vertexBuffer2._byteLength;
			t.Resource._addMemory(-e, -e), this._bufferState.destroy(), this._vertexBuffer1.destroy(), this
				._vertexBuffer2.destroy(), this._bufferState = null, this._vertices1 = null, this._vertexBuffer1 =
				null, this._vertices2 = null, this._vertexBuffer2 = null, this._subBirthTime = null, this
				._subDistance = null, this._lastFixedVertexPosition = null, this._disappearBoundsMode = !1
		}
		_calculateBoundingBoxForNative() {
			var e = this._owner._owner.trailRenderer,
				t = e.bounds,
				r = t.getMin(),
				i = t.getMax(),
				a = oe._cullingBuffer;
			a[e._cullingBufferIndex + 1] = r.x, a[e._cullingBufferIndex + 2] = r.y, a[e._cullingBufferIndex + 3] = r
				.z, a[e._cullingBufferIndex + 4] = i.x, a[e._cullingBufferIndex + 5] = i.y, a[e
					._cullingBufferIndex + 6] = i.z
		}
	}
	Dr.ALIGNMENT_VIEW = 0, Dr.ALIGNMENT_TRANSFORM_Z = 1, Dr._tempVector30 = new n, Dr._tempVector31 = new n, Dr
		._tempVector32 = new n, Dr._tempVector33 = new n, Dr._tempVector34 = new n, Dr._tempVector35 = new n, Dr
		._tempVector36 = new n, Dr._type = _e._typeCounter++;
	class Mr {
		constructor(e) {
			this._totalLength = 0, this._lastPosition = new n, this._curtime = 0, this.alignment = Mr
				.ALIGNMENT_VIEW, this._owner = e, this._initDefaultData(), this.addRenderElement()
		}
		get time() {
			return this._time
		}
		set time(e) {
			this._time = e, this._owner._render._shaderValues.setNumber(Mr.LIFETIME, e)
		}
		get minVertexDistance() {
			return this._minVertexDistance
		}
		set minVertexDistance(e) {
			this._minVertexDistance = e
		}
		get widthMultiplier() {
			return this._widthMultiplier
		}
		set widthMultiplier(e) {
			this._widthMultiplier = e
		}
		get widthCurve() {
			return this._widthCurve
		}
		set widthCurve(e) {
			this._widthCurve = e;
			var t, r, i = new Float32Array(4 * e.length),
				a = 0;
			for (t = 0, r = e.length; t < r; t++) i[a++] = e[t].time, i[a++] = e[t].inTangent, i[a++] = e[t]
				.outTangent, i[a++] = e[t].value;
			this._owner._render._shaderValues.setBuffer(Mr.WIDTHCURVE, i), this._owner._render._shaderValues.setInt(
				Mr.WIDTHCURVEKEYLENGTH, e.length)
		}
		get colorGradient() {
			return this._colorGradient
		}
		set colorGradient(e) {
			this._colorGradient = e
		}
		get textureMode() {
			return this._textureMode
		}
		set textureMode(e) {
			this._textureMode = e
		}
		addRenderElement() {
			var e = this._owner._render,
				t = e._renderElements,
				r = e.sharedMaterials[0];
			r || (r = Rr.defaultMaterial);
			var i = new Ge;
			i.setTransform(this._owner._transform), i.render = e, i.material = r, this._trialGeometry = new Dr(
				this), i.setGeometry(this._trialGeometry), t.push(i)
		}
		_update(e) {
			var t = this._owner._render;
			this._curtime += e.scene.timer._delta / 1e3, t._shaderValues.setNumber(Mr.CURTIME, this._curtime);
			var r = this._owner.transform.position,
				i = t._renderElements[0]._geometry;
			i._updateDisappear(), i._updateTrail(e.camera, this._lastPosition, r), i._updateVertexBufferUV(), r
				.cloneTo(this._lastPosition)
		}
		_initDefaultData() {
			this.time = 5, this.minVertexDistance = .1, this.widthMultiplier = 1, this.textureMode = Ir.Stretch;
			var e = [],
				t = new c;
			t.time = 0, t.inTangent = 0, t.outTangent = 0, t.value = 1, e.push(t);
			var r = new c;
			r.time = 1, r.inTangent = 0, r.outTangent = 0, r.value = 1, e.push(r), this.widthCurve = e;
			var i = new tt(2, 2);
			i.mode = et.Blend, i.addColorRGB(0, te.WHITE), i.addColorRGB(1, te.WHITE), i.addColorAlpha(0, 1), i
				.addColorAlpha(1, 1), this.colorGradient = i
		}
		destroy() {
			this._trialGeometry.destroy(), this._trialGeometry = null, this._widthCurve = null, this
				._colorGradient = null
		}
	}
	Mr.CURTIME = F.propertyNameToID("u_CurTime"), Mr.LIFETIME = F.propertyNameToID("u_LifeTime"), Mr.WIDTHCURVE = F
		.propertyNameToID("u_WidthCurve"), Mr.WIDTHCURVEKEYLENGTH = F.propertyNameToID("u_WidthCurveKeyLength"), Mr
		.ALIGNMENT_VIEW = 0, Mr.ALIGNMENT_TRANSFORM_Z = 1;
	class Lr extends je {
		constructor(e) {
			super(e), this._projectionViewWorldMatrix = new p
		}
		_calculateBoundingBox() {}
		_needRender(e, t) {
			return this._owner.trailFilter._update(t), !e || e.intersects(this.bounds._getBoundBox())
		}
		_updateForNative(e) {
			this._owner.trailFilter._update(e)
		}
		_renderUpdate(e, t) {
			super._renderUpdate(e, t)
		}
		_renderUpdateWithCamera(e, t) {
			var r = e.projectionViewMatrix;
			t ? (p.multiply(r, t.worldMatrix, this._projectionViewWorldMatrix), this._shaderValues.setMatrix4x4(ae
				.MVPMATRIX, this._projectionViewWorldMatrix)) : this._shaderValues.setMatrix4x4(ae.MVPMATRIX, r)
		}
	}
	class Cr extends ne {
		static __init__() {}
		get trailFilter() {
			return this._geometryFilter
		}
		get trailRenderer() {
			return this._render
		}
		constructor(e = null) {
			super(e), this._render = new Lr(this), this._geometryFilter = new Mr(this)
		}
		_parse(e, r) {
			super._parse(e, r);
			var i, a, n = this._render,
				s = this._geometryFilter,
				o = e.materials;
			if (o) {
				var l = n.sharedMaterials,
					_ = o.length;
				for (l.length = _, i = 0; i < _; i++) l[i] = t.Loader.getRes(o[i].path);
				n.sharedMaterials = l
			}
			s.time = e.time, s.minVertexDistance = e.minVertexDistance, s.widthMultiplier = e.widthMultiplier, s
				.textureMode = e.textureMode, null != e.alignment && (s.alignment = e.alignment);
			var h = [],
				d = e.widthCurve;
			for (i = 0, a = d.length; i < a; i++) {
				var u = new c;
				u.time = d[i].time, u.inTangent = d[i].inTangent, u.outTangent = d[i].outTangent, u.value = d[i]
					.value, h.push(u)
			}
			s.widthCurve = h;
			var f = e.colorGradient,
				m = f.colorKeys,
				E = f.alphaKeys,
				T = new tt(m.length, E.length);
			for (T.mode = f.mode, i = 0, a = m.length; i < a; i++) {
				var p = m[i];
				T.addColorRGB(p.time, new te(p.value[0], p.value[1], p.value[2], 1))
			}
			for (i = 0, a = E.length; i < a; i++) {
				var g = E[i];
				T.addColorAlpha(g.time, g.value)
			}
			s.colorGradient = T
		}
		_onActive() {
			super._onActive(), this._transform.position.cloneTo(this._geometryFilter._lastPosition)
		}
		_cloneTo(e, t, r) {
			var i, a;
			super._cloneTo(e, t, r);
			var n = e,
				s = n.trailFilter;
			s.time = this.trailFilter.time, s.minVertexDistance = this.trailFilter.minVertexDistance, s
				.widthMultiplier = this.trailFilter.widthMultiplier, s.textureMode = this.trailFilter.textureMode, s
				.alignment = this.trailFilter.alignment;
			var o = this.trailFilter.widthCurve,
				l = [];
			for (i = 0, a = o.length; i < a; i++) {
				var _ = new c;
				o[i].cloneTo(_), l.push(_)
			}
			s.widthCurve = l;
			var h = new tt(this.trailFilter.colorGradient.maxColorRGBKeysCount, this.trailFilter.colorGradient
				.maxColorAlphaKeysCount);
			this.trailFilter.colorGradient.cloneTo(h), s.colorGradient = h, n.trailRenderer.sharedMaterial = this
				.trailRenderer.sharedMaterial
		}
		destroy(e = !0) {
			this.destroyed || (super.destroy(e), this._geometryFilter.destroy(), this._geometryFilter = null)
		}
		_create() {
			return new Cr
		}
	}
	class yr {
		constructor(e, t, r, i) {
			this._position = e, this._normal = t, this._textureCoord0 = r, this._textureCoord1 = i
		}
		static __init__() {
			yr._vertexDeclaration = new de(40, [new ue(0, ce.Vector3, yr.TERRAIN_POSITION0), new ue(12, ce.Vector3,
				yr.TERRAIN_NORMAL0), new ue(24, ce.Vector2, yr.TERRAIN_TEXTURECOORDINATE0), new ue(32,
				ce.Vector2, yr.TERRAIN_TEXTURECOORDINATE1)])
		}
		static get vertexDeclaration() {
			return yr._vertexDeclaration
		}
		get position() {
			return this._position
		}
		get normal() {
			return this._normal
		}
		get textureCoord0() {
			return this._textureCoord0
		}
		get textureCoord1() {
			return this._textureCoord1
		}
		get vertexDeclaration() {
			return yr._vertexDeclaration
		}
	}
	yr.TERRAIN_POSITION0 = 0, yr.TERRAIN_NORMAL0 = 1, yr.TERRAIN_TEXTURECOORDINATE0 = 2, yr.TERRAIN_TEXTURECOORDINATE1 =
		3;
	class Or extends rr {
		constructor(e = .1, t = null, r = it.COLLISIONFILTERGROUP_DEFAULTFILTER, i = it
		.COLLISIONFILTERGROUP_ALLFILTER) {
			super(r, i), this._upAxis = new n(0, 1, 0), this._maxSlope = 45, this._jumpSpeed = 10, this._fallSpeed =
				55, this._gravity = new n(0, 3 * -9.8, 0), this._nativeKinematicCharacter = null, this._stepHeight =
				e, t && (this._upAxis = t)
		}
		static __init__() {
			Or._nativeTempVector30 = new Zt._physics3D.btVector3(0, 0, 0)
		}
		get fallSpeed() {
			return this._fallSpeed
		}
		set fallSpeed(e) {
			this._fallSpeed = e, this._nativeKinematicCharacter.setFallSpeed(e)
		}
		get jumpSpeed() {
			return this._jumpSpeed
		}
		set jumpSpeed(e) {
			this._jumpSpeed = e, this._nativeKinematicCharacter.setJumpSpeed(e)
		}
		get gravity() {
			return this._gravity
		}
		set gravity(e) {
			this._gravity = e;
			var t = Or._nativeTempVector30;
			t.setValue(-e.x, e.y, e.z), this._nativeKinematicCharacter.setGravity(t)
		}
		get maxSlope() {
			return this._maxSlope
		}
		set maxSlope(e) {
			this._maxSlope = e, this._nativeKinematicCharacter.setMaxSlope(e / 180 * Math.PI)
		}
		get isGrounded() {
			return this._nativeKinematicCharacter.onGround()
		}
		get stepHeight() {
			return this._stepHeight
		}
		set stepHeight(e) {
			this._stepHeight = e, this._constructCharacter()
		}
		get upAxis() {
			return this._upAxis
		}
		set upAxis(e) {
			this._upAxis = e, this._constructCharacter()
		}
		_constructCharacter() {
			var e = Zt._physics3D;
			this._nativeKinematicCharacter && e.destroy(this._nativeKinematicCharacter);
			var t = Or._nativeTempVector30;
			t.setValue(this._upAxis.x, this._upAxis.y, this._upAxis.z), this._nativeKinematicCharacter = new e
				.btKinematicCharacterController(this._nativeColliderObject, this._colliderShape._nativeShape, this
					._stepHeight, t), this.fallSpeed = this._fallSpeed, this.maxSlope = this._maxSlope, this
				.jumpSpeed = this._jumpSpeed, this.gravity = this._gravity
		}
		_onShapeChange(e) {
			super._onShapeChange(e), this._constructCharacter()
		}
		_onAdded() {
			var e = new Zt._physics3D.btPairCachingGhostObject;
			e.setUserIndex(this.id), e.setCollisionFlags(rr.COLLISIONFLAGS_CHARACTER_OBJECT), this
				._nativeColliderObject = e, this._colliderShape && this._constructCharacter(), super._onAdded()
		}
		_addToSimulation() {
			this._simulation._characters.push(this), this._simulation._addCharacter(this, this._collisionGroup, this
				._canCollideWith)
		}
		_removeFromSimulation() {
			this._simulation._removeCharacter(this);
			var e = this._simulation._characters;
			e.splice(e.indexOf(this), 1)
		}
		_cloneTo(e) {
			super._cloneTo(e);
			var t = e;
			t.stepHeight = this._stepHeight, t.upAxis = this._upAxis, t.maxSlope = this._maxSlope, t.jumpSpeed =
				this._jumpSpeed, t.fallSpeed = this._fallSpeed, t.gravity = this._gravity
		}
		_onDestroy() {
			Zt._physics3D.destroy(this._nativeKinematicCharacter), super._onDestroy(), this
				._nativeKinematicCharacter = null
		}
		move(e) {
			var t = Or._nativeVector30;
			t.setValue(-e.x, e.y, e.z), this._nativeKinematicCharacter.setWalkDirection(t)
		}
		jump(e = null) {
			if (e) {
				var t = Or._nativeVector30;
				A._convertToBulletVec3(e, t, !0), this._nativeKinematicCharacter.jump(t)
			} else this._nativeKinematicCharacter.jump()
		}
	}
	Or.UPAXIS_X = 0, Or.UPAXIS_Y = 1, Or.UPAXIS_Z = 2;
	class Nr extends rr {
		constructor(e, t) {
			super(e, t), this._isTrigger = !1
		}
		get isTrigger() {
			return this._isTrigger
		}
		set isTrigger(e) {
			if (this._isTrigger = e, this._nativeColliderObject) {
				var t = this._nativeColliderObject.getCollisionFlags();
				e ? 0 == (t & rr.COLLISIONFLAGS_NO_CONTACT_RESPONSE) && this._nativeColliderObject
					.setCollisionFlags(t | rr.COLLISIONFLAGS_NO_CONTACT_RESPONSE) : 0 != (t & rr
						.COLLISIONFLAGS_NO_CONTACT_RESPONSE) && this._nativeColliderObject.setCollisionFlags(t ^ rr
						.COLLISIONFLAGS_NO_CONTACT_RESPONSE)
			}
		}
		_onAdded() {
			super._onAdded(), this.isTrigger = this._isTrigger
		}
		_cloneTo(e) {
			super._cloneTo(e), e.isTrigger = this._isTrigger
		}
	}
	class Pr extends Nr {
		constructor(e = it.COLLISIONFILTERGROUP_DEFAULTFILTER, t = it.COLLISIONFILTERGROUP_ALLFILTER) {
			super(e, t), this._enableProcessCollisions = !1
		}
		_addToSimulation() {
			this._simulation._addPhysicsCollider(this, this._collisionGroup, this._canCollideWith)
		}
		_removeFromSimulation() {
			this._simulation._removePhysicsCollider(this)
		}
		_onTransformChanged(e) {
			(e &= ie.TRANSFORM_WORLDPOSITION | ie.TRANSFORM_WORLDQUATERNION | ie.TRANSFORM_WORLDSCALE) && (this
				._transformFlag |= e, this._isValid() && -1 === this._inPhysicUpdateListIndex && this._simulation
				._physicsUpdateList.add(this))
		}
		_parse(e) {
			null != e.friction && (this.friction = e.friction), null != e.rollingFriction && (this.rollingFriction =
					e.rollingFriction), null != e.restitution && (this.restitution = e.restitution), null != e
				.isTrigger && (this.isTrigger = e.isTrigger), super._parse(e), this._parseShape(e.shapes)
		}
		_onAdded() {
			var e = new Zt._physics3D.btCollisionObject;
			e.setUserIndex(this.id), e.forceActivationState(rr.ACTIVATIONSTATE_DISABLE_SIMULATION);
			var t = e.getCollisionFlags();
			this.owner.isStatic ? ((t & rr.COLLISIONFLAGS_KINEMATIC_OBJECT) > 0 && (t ^= rr
					.COLLISIONFLAGS_KINEMATIC_OBJECT), t |= rr.COLLISIONFLAGS_STATIC_OBJECT) : ((t & rr
						.COLLISIONFLAGS_STATIC_OBJECT) > 0 && (t ^= rr.COLLISIONFLAGS_STATIC_OBJECT), t |= rr
					.COLLISIONFLAGS_KINEMATIC_OBJECT), e.setCollisionFlags(t), this._nativeColliderObject = e, super
				._onAdded()
		}
	}
	class wr extends Nr {
		constructor(e = it.COLLISIONFILTERGROUP_DEFAULTFILTER, t = it.COLLISIONFILTERGROUP_ALLFILTER) {
			super(e, t), this._isKinematic = !1, this._mass = 1, this._gravity = new n(0, -10, 0), this
				._angularDamping = 0, this._linearDamping = 0, this._overrideGravity = !1, this._totalTorque =
				new n(0, 0, 0), this._totalForce = new n(0, 0, 0), this._linearVelocity = new n, this
				._angularVelocity = new n, this._linearFactor = new n(1, 1, 1), this._angularFactor = new n(1, 1,
				1), this._detectCollisions = !0
		}
		static __init__() {
			wr._nativeTempVector30 = new Zt._physics3D.btVector3(0, 0, 0), wr._nativeTempVector31 = new Zt
				._physics3D.btVector3(0, 0, 0), wr._nativeVector3Zero = new Zt._physics3D.btVector3(0, 0, 0), wr
				._nativeInertia = new Zt._physics3D.btVector3(0, 0, 0), wr._nativeImpulse = new Zt._physics3D
				.btVector3(0, 0, 0), wr._nativeImpulseOffset = new Zt._physics3D.btVector3(0, 0, 0), wr
				._nativeGravity = new Zt._physics3D.btVector3(0, 0, 0)
		}
		get mass() {
			return this._mass
		}
		set mass(e) {
			e = Math.max(e, 1e-7), this._mass = e, this._isKinematic || this._updateMass(e)
		}
		get isKinematic() {
			return this._isKinematic
		}
		set isKinematic(e) {
			this._isKinematic = e;
			var t = !!(this._simulation && this._enabled && this._colliderShape);
			t && this._removeFromSimulation();
			var r = this._nativeColliderObject,
				i = r.getCollisionFlags();
			e ? (i |= rr.COLLISIONFLAGS_KINEMATIC_OBJECT, r.setCollisionFlags(i), this._nativeColliderObject
				.forceActivationState(rr.ACTIVATIONSTATE_DISABLE_DEACTIVATION), this
				._enableProcessCollisions = !1, this._updateMass(0)) : ((i & rr
				.COLLISIONFLAGS_KINEMATIC_OBJECT) > 0 && (i ^= rr.COLLISIONFLAGS_KINEMATIC_OBJECT), r
				.setCollisionFlags(i), this._nativeColliderObject.setActivationState(rr
					.ACTIVATIONSTATE_ACTIVE_TAG), this._enableProcessCollisions = !0, this._updateMass(this
					._mass));
			var a = wr._nativeVector3Zero;
			r.setInterpolationLinearVelocity(a), r.setLinearVelocity(a), r.setInterpolationAngularVelocity(a), r
				.setAngularVelocity(a), t && this._addToSimulation()
		}
		get linearDamping() {
			return this._linearDamping
		}
		set linearDamping(e) {
			this._linearDamping = e, this._nativeColliderObject && this._nativeColliderObject.setDamping(e, this
				._angularDamping)
		}
		get angularDamping() {
			return this._angularDamping
		}
		set angularDamping(e) {
			this._angularDamping = e, this._nativeColliderObject && this._nativeColliderObject.setDamping(this
				._linearDamping, e)
		}
		get overrideGravity() {
			return this._overrideGravity
		}
		set overrideGravity(e) {
			if (this._overrideGravity = e, this._nativeColliderObject) {
				var t = this._nativeColliderObject.getFlags();
				e ? 0 == (t & wr._BT_DISABLE_WORLD_GRAVITY) && this._nativeColliderObject.setFlags(t | wr
						._BT_DISABLE_WORLD_GRAVITY) : (t & wr._BT_DISABLE_WORLD_GRAVITY) > 0 && this
					._nativeColliderObject.setFlags(t ^ wr._BT_DISABLE_WORLD_GRAVITY)
			}
		}
		get gravity() {
			return this._gravity
		}
		set gravity(e) {
			this._gravity = e, wr._nativeGravity.setValue(-e.x, e.y, e.z), this._nativeColliderObject.setGravity(wr
				._nativeGravity)
		}
		get totalForce() {
			if (this._nativeColliderObject) {
				var e = this._nativeColliderObject.getTotalForce();
				return A._convertToLayaVec3(e, this._totalForce, !0), this._totalForce
			}
			return null
		}
		get linearFactor() {
			return this._nativeColliderObject ? this._linearFactor : null
		}
		set linearFactor(e) {
			if (this._linearFactor = e, this._nativeColliderObject) {
				var t = wr._nativeTempVector30;
				A._convertToBulletVec3(e, t, !1), this._nativeColliderObject.setLinearFactor(t)
			}
		}
		get linearVelocity() {
			return this._nativeColliderObject && A._convertToLayaVec3(this._nativeColliderObject
			.getLinearVelocity(), this._linearVelocity, !0), this._linearVelocity
		}
		set linearVelocity(e) {
			if (this._linearVelocity = e, this._nativeColliderObject) {
				var t = wr._nativeTempVector30;
				A._convertToBulletVec3(e, t, !0), this.isSleeping && this.wakeUp(), this._nativeColliderObject
					.setLinearVelocity(t)
			}
		}
		get angularFactor() {
			return this._nativeColliderObject ? this._angularFactor : null
		}
		set angularFactor(e) {
			if (this._angularFactor = e, this._nativeColliderObject) {
				var t = wr._nativeTempVector30;
				A._convertToBulletVec3(e, t, !1), this._nativeColliderObject.setAngularFactor(t)
			}
		}
		get angularVelocity() {
			return this._nativeColliderObject && A._convertToLayaVec3(this._nativeColliderObject
			.getAngularVelocity(), this._angularVelocity, !0), this._angularVelocity
		}
		set angularVelocity(e) {
			if (this._angularVelocity = e, this._nativeColliderObject) {
				var t = wr._nativeTempVector30;
				A._convertToBulletVec3(e, t, !0), this.isSleeping && this.wakeUp(), this._nativeColliderObject
					.setAngularVelocity(t)
			}
		}
		get totalTorque() {
			if (this._nativeColliderObject) {
				var e = this._nativeColliderObject.getTotalTorque();
				return A._convertToLayaVec3(e, this._totalTorque, !0), this._totalTorque
			}
			return null
		}
		get detectCollisions() {
			return this._detectCollisions
		}
		set detectCollisions(e) {
			this._detectCollisions !== e && (this._detectCollisions = e, this._colliderShape && this._enabled &&
				this._simulation && (this._simulation._removeRigidBody(this), this._simulation._addRigidBody(
					this, this._collisionGroup, e ? this._canCollideWith : 0)))
		}
		get isSleeping() {
			return !!this._nativeColliderObject && this._nativeColliderObject.getActivationState() === rr
				.ACTIVATIONSTATE_ISLAND_SLEEPING
		}
		get sleepLinearVelocity() {
			return this._nativeColliderObject.getLinearSleepingThreshold()
		}
		set sleepLinearVelocity(e) {
			this._nativeColliderObject.setSleepingThresholds(e, this._nativeColliderObject
				.getAngularSleepingThreshold())
		}
		get sleepAngularVelocity() {
			return this._nativeColliderObject.getAngularSleepingThreshold()
		}
		set sleepAngularVelocity(e) {
			this._nativeColliderObject.setSleepingThresholds(this._nativeColliderObject
			.getLinearSleepingThreshold(), e)
		}
		_updateMass(e) {
			this._nativeColliderObject && this._colliderShape && (this._colliderShape._nativeShape
				.calculateLocalInertia(e, wr._nativeInertia), this._nativeColliderObject.setMassProps(e, wr
					._nativeInertia), this._nativeColliderObject.updateInertiaTensor())
		}
		_delegateMotionStateGetWorldTransform(e) {}
		_delegateMotionStateSetWorldTransform(e) {
			var t = this._rigidbody;
			t._simulation._updatedRigidbodies++;
			var r = Zt._physics3D,
				i = r.wrapPointer(e, r.btTransform);
			t._updateTransformComponent(i)
		}
		_delegateMotionStateGetWorldTransformNative(e, t) {}
		_delegateMotionStateSetWorldTransformNative(e, t) {
			var r = e;
			r._simulation._updatedRigidbodies++;
			var i = Zt._physics3D,
				a = i.wrapPointer(t, i.btTransform);
			r._updateTransformComponent(a)
		}
		_onScaleChange(e) {
			super._onScaleChange(e), this._updateMass(this._isKinematic ? 0 : this._mass)
		}
		_delegateMotionStateClear() {
			this._rigidbody = null
		}
		_onAdded() {
			var e = Zt._physics3D,
				t = new e.LayaMotionState;
			null != window.conch && e.LayaMotionState.prototype.setRigidbody ? (t.setRigidbody(this), t
					.setNativeGetWorldTransform(this._delegateMotionStateGetWorldTransformNative), t
					.setNativeSetWorldTransform(this._delegateMotionStateSetWorldTransformNative)) : (t
					.getWorldTransform = this._delegateMotionStateGetWorldTransform, t.setWorldTransform = this
					._delegateMotionStateSetWorldTransform), t.clear = this._delegateMotionStateClear, t
				._rigidbody = this, this._nativeMotionState = t;
			var r = new e.btRigidBodyConstructionInfo(0, t, null, wr._nativeVector3Zero),
				i = new e.btRigidBody(r);
			i.setUserIndex(this.id), this._nativeColliderObject = i, super._onAdded(), this.mass = this._mass, this
				.linearFactor = this._linearFactor, this.angularFactor = this._angularFactor, this.linearDamping =
				this._linearDamping, this.angularDamping = this._angularDamping, this.overrideGravity = this
				._overrideGravity, this.gravity = this._gravity, this.isKinematic = this._isKinematic, e.destroy(r)
		}
		_onShapeChange(e) {
			super._onShapeChange(e), this._isKinematic ? this._updateMass(0) : (this._nativeColliderObject
				.setCenterOfMassTransform(this._nativeColliderObject.getWorldTransform()), this._updateMass(this
					._mass))
		}
		_parse(e) {
			null != e.friction && (this.friction = e.friction), null != e.rollingFriction && (this.rollingFriction =
					e.rollingFriction), null != e.restitution && (this.restitution = e.restitution), null != e
				.isTrigger && (this.isTrigger = e.isTrigger), null != e.mass && (this.mass = e.mass), null != e
				.isKinematic && (this.isKinematic = e.isKinematic), null != e.linearDamping && (this.linearDamping =
					e.linearDamping), null != e.angularDamping && (this.angularDamping = e.angularDamping), null !=
				e.overrideGravity && (this.overrideGravity = e.overrideGravity), e.gravity && (this.gravity
					.fromArray(e.gravity), this.gravity = this.gravity), super._parse(e), this._parseShape(e.shapes)
		}
		_onDestroy() {
			var e = Zt._physics3D;
			this._nativeMotionState.clear(), e.destroy(this._nativeMotionState), super._onDestroy(), this
				._nativeMotionState = null, this._gravity = null, this._totalTorque = null, this._linearVelocity =
				null, this._angularVelocity = null, this._linearFactor = null, this._angularFactor = null
		}
		_addToSimulation() {
			this._simulation._addRigidBody(this, this._collisionGroup, this._detectCollisions ? this
				._canCollideWith : 0)
		}
		_removeFromSimulation() {
			this._simulation._removeRigidBody(this)
		}
		_cloneTo(e) {
			super._cloneTo(e);
			var t = e;
			t.isKinematic = this._isKinematic, t.mass = this._mass, t.gravity = this._gravity, t.angularDamping =
				this._angularDamping, t.linearDamping = this._linearDamping, t.overrideGravity = this
				._overrideGravity, t.linearVelocity = this._linearVelocity, t.angularVelocity = this
				._angularVelocity, t.linearFactor = this._linearFactor, t.angularFactor = this._angularFactor, t
				.detectCollisions = this._detectCollisions
		}
		applyForce(e, t = null) {
			if (null == this._nativeColliderObject)
			throw "Attempted to call a Physics function that is avaliable only when the Entity has been already added to the Scene.";
			var r = wr._nativeTempVector30;
			if (r.setValue(-e.x, e.y, e.z), t) {
				var i = wr._nativeTempVector31;
				i.setValue(-t.x, t.y, t.z), this._nativeColliderObject.applyForce(r, i)
			} else this._nativeColliderObject.applyCentralForce(r)
		}
		applyTorque(e) {
			if (null == this._nativeColliderObject)
			throw "Attempted to call a Physics function that is avaliable only when the Entity has been already added to the Scene.";
			var t = wr._nativeTempVector30;
			t.setValue(-e.x, e.y, e.z), this._nativeColliderObject.applyTorque(t)
		}
		applyImpulse(e, t = null) {
			if (null == this._nativeColliderObject)
			throw "Attempted to call a Physics function that is avaliable only when the Entity has been already added to the Scene.";
			wr._nativeImpulse.setValue(-e.x, e.y, e.z), t ? (wr._nativeImpulseOffset.setValue(-t.x, t.y, t.z), this
					._nativeColliderObject.applyImpulse(wr._nativeImpulse, wr._nativeImpulseOffset)) : this
				._nativeColliderObject.applyCentralImpulse(wr._nativeImpulse)
		}
		applyTorqueImpulse(e) {
			if (null == this._nativeColliderObject)
			throw "Attempted to call a Physics function that is avaliable only when the Entity has been already added to the Scene.";
			var t = wr._nativeTempVector30;
			t.setValue(-e.x, e.y, e.z), this._nativeColliderObject.applyTorqueImpulse(t)
		}
		wakeUp() {
			this._nativeColliderObject && this._nativeColliderObject.activate(!1)
		}
		clearForces() {
			var e = this._nativeColliderObject;
			if (null == e)
			throw "Attempted to call a Physics function that is avaliable only when the Entity has been already added to the Scene.";
			e.clearForces();
			var t = wr._nativeVector3Zero;
			e.setInterpolationLinearVelocity(t), e.setLinearVelocity(t), e.setInterpolationAngularVelocity(t), e
				.setAngularVelocity(t)
		}
	}
	wr.TYPE_STATIC = 0, wr.TYPE_DYNAMIC = 1, wr.TYPE_KINEMATIC = 2, wr._BT_DISABLE_WORLD_GRAVITY = 1, wr
		._BT_ENABLE_GYROPSCOPIC_FORCE = 2;
	class Vr extends jt {
		static __init__() {
			Vr._nativeNormal = new Zt._physics3D.btVector3(0, 0, 0)
		}
		constructor(e, t) {
			super(), this._normal = e, this._offset = t, this._type = jt.SHAPETYPES_STATICPLANE, Vr._nativeNormal
				.setValue(-e.x, e.y, e.z), this._nativeShape = new Zt._physics3D.btStaticPlaneShape(Vr
					._nativeNormal, t)
		}
		clone() {
			var e = new Vr(this._normal, this._offset);
			return this.cloneTo(e), e
		}
	}
	class br extends _e {
		constructor(e) {
			super(), this._id = ++br._uniqueIDCounter, this._mesh = e, this._boneIndicesList = [], this
				._subIndexBufferStart = [], this._subIndexBufferCount = []
		}
		get indexCount() {
			return this._indexCount
		}
		_setIndexRange(e, t) {
			this._indexStart = e, this._indexCount = t, this._indices = new Uint16Array(this._indexBuffer.getData()
				.buffer, 2 * e, t)
		}
		_getType() {
			return br._type
		}
		_prepareRender(e) {
			return this._mesh._uploadVerticesData(), !0
		}
		_render(e) {
			var r = t.LayaGL.instance;
			this._mesh._bufferState.bind();
			var i = e.renderElement.render._skinnedData;
			if (i)
				for (var a = i[this._indexInMesh], n = this._boneIndicesList.length, s = 0; s < n; s++) e.shader
					.uploadCustomUniform(vr.BONES, a[s]), r.drawElements(r.TRIANGLES, this._subIndexBufferCount[s],
						r.UNSIGNED_SHORT, 2 * this._subIndexBufferStart[s]);
			else r.drawElements(r.TRIANGLES, this._indexCount, r.UNSIGNED_SHORT, 2 * this._indexStart);
			t.Stat.trianglesFaces += this._indexCount / 3, t.Stat.renderBatches++
		}
		getIndices() {
			if (this._mesh._isReadable) return this._indices.slice();
			throw "SubMesh:can't get indices on subMesh,mesh's isReadable must be true."
		}
		setIndices(e) {
			this._indexBuffer.setData(e, this._indexStart, 0, this._indexCount)
		}
		destroy() {
			this._destroyed || (super.destroy(), this._indexBuffer.destroy(), this._indexBuffer = null, this._mesh =
				null, this._boneIndicesList = null, this._subIndexBufferStart = null, this
				._subIndexBufferCount = null, this._skinAnimationDatas = null)
		}
	}
	br._uniqueIDCounter = 0, br._type = _e._typeCounter++;
	class Fr {
		static parse(e, t, r, i) {
			Fr._mesh = r, Fr._subMeshes = i, Fr._version = t, Fr._readData = e, Fr.READ_DATA(), Fr.READ_BLOCK(), Fr
				.READ_STRINGS();
			for (var a = 0, n = Fr._BLOCK.count; a < n; a++) {
				Fr._readData.pos = Fr._BLOCK.blockStarts[a];
				var s = Fr._readData.getUint16(),
					o = Fr._strings[s],
					l = Fr["READ_" + o];
				if (null == l) throw new Error("model file err,no this function:" + s + " " + o);
				l.call(null)
			}
			Fr._mesh._bindPoseIndices = new Uint16Array(Fr._bindPoseIndices), Fr._bindPoseIndices.length = 0, Fr
				._strings.length = 0, Fr._readData = null, Fr._version = null, Fr._mesh = null, Fr._subMeshes = null
		}
		static _readString() {
			return Fr._strings[Fr._readData.getUint16()]
		}
		static READ_DATA() {
			Fr._DATA.offset = Fr._readData.getUint32(), Fr._DATA.size = Fr._readData.getUint32()
		}
		static READ_BLOCK() {
			for (var e = Fr._BLOCK.count = Fr._readData.getUint16(), t = Fr._BLOCK.blockStarts = [], r = Fr._BLOCK
					.blockLengths = [], i = 0; i < e; i++) t.push(Fr._readData.getUint32()), r.push(Fr._readData
				.getUint32())
		}
		static READ_STRINGS() {
			var e = Fr._readData.getUint32(),
				t = Fr._readData.getUint16(),
				r = Fr._readData.pos;
			Fr._readData.pos = e + Fr._DATA.offset;
			for (var i = 0; i < t; i++) Fr._strings[i] = Fr._readData.readUTFString();
			Fr._readData.pos = r
		}
		static READ_MESH() {
			var e, r = t.LayaGL.instance,
				i = (Fr._readString(), Fr._readData.__getBuffer()),
				a = 0,
				n = Fr._readData.getInt16(),
				s = Fr._DATA.offset;
			for (e = 0; e < n; e++) {
				var o, l = s + Fr._readData.getUint32(),
					_ = Fr._readData.getUint32(),
					h = i.slice(l, l + _),
					c = new Float32Array(h),
					d = Fr._readString();
				switch (Fr._version) {
					case "LAYAMODEL:0301":
					case "LAYAMODEL:0400":
						o = fe.getVertexDeclaration(d);
						break;
					case "LAYAMODEL:0401":
						o = fe.getVertexDeclaration(d, !1);
						break;
					default:
						throw new Error("LoadModelV03: unknown version.")
				}
				if (!o) throw new Error("LoadModelV03: unknown vertexDeclaration.");
				var u = new he(4 * c.length, r.STATIC_DRAW, !0);
				u.vertexDeclaration = o, u.setData(c.buffer), Fr._mesh._vertexBuffer = u, Fr._mesh._vertexCount += u
					._byteLength / o.vertexStride, a += 4 * c.length
			}
			var f = s + Fr._readData.getUint32(),
				m = Fr._readData.getUint32(),
				E = new Uint16Array(i.slice(f, f + m)),
				T = new Me(Me.INDEXTYPE_USHORT, m / 2, r.STATIC_DRAW, !0);
			T.setData(E), Fr._mesh._indexBuffer = T, a += 2 * T.indexCount, Fr._mesh._setBuffer(Fr._mesh
				._vertexBuffer, T), Fr._mesh._setCPUMemory(a), Fr._mesh._setGPUMemory(a);
			var g = Fr._mesh._boneNames = [],
				S = Fr._readData.getUint16();
			for (g.length = S, e = 0; e < S; e++) g[e] = Fr._strings[Fr._readData.getUint16()];
			Fr._readData.pos += 8;
			var v = Fr._readData.getUint32(),
				R = Fr._readData.getUint32(),
				I = new Float32Array(i.slice(s + v, s + v + R)),
				x = I.length,
				A = Fr._mesh._inverseBindPosesBuffer = new ArrayBuffer(4 * x);
			for (Fr._mesh._inverseBindPoses = [], e = 0; e < x; e += 16) {
				var D = new p(I[e + 0], I[e + 1], I[e + 2], I[e + 3], I[e + 4], I[e + 5], I[e + 6], I[e + 7], I[e +
						8], I[e + 9], I[e + 10], I[e + 11], I[e + 12], I[e + 13], I[e + 14], I[e + 15],
					new Float32Array(A, 4 * e, 16));
				Fr._mesh._inverseBindPoses[e / 16] = D
			}
			return !0
		}
		static READ_SUBMESH() {
			var e = Fr._readData.__getBuffer(),
				t = new br(Fr._mesh);
			Fr._readData.getInt16(), Fr._readData.getUint32(), Fr._readData.getUint32();
			var r = Fr._readData.getUint32(),
				i = Fr._readData.getUint32(),
				a = Fr._mesh._indexBuffer;
			t._indexBuffer = a, t._setIndexRange(r, i);
			var n = Fr._mesh._vertexBuffer;
			t._vertexBuffer = n;
			var s = Fr._DATA.offset,
				o = t._subIndexBufferStart,
				l = t._subIndexBufferCount,
				_ = t._boneIndicesList,
				h = Fr._readData.getUint16();
			o.length = h, l.length = h, _.length = h;
			for (var c = Fr._mesh._skinDataPathMarks, d = Fr._bindPoseIndices, u = Fr._subMeshes.length, f = 0; f <
				h; f++) {
				o[f] = Fr._readData.getUint32(), l[f] = Fr._readData.getUint32();
				for (var m = Fr._readData.getUint32(), E = Fr._readData.getUint32(), T = _[f] = new Uint16Array(e
						.slice(s + m, s + m + E)), p = 0, g = T.length; p < g; p++) {
					var S = T[p],
						v = d.indexOf(S); - 1 === v ? (T[p] = d.length, d.push(S), c.push([u, f, p])) : T[p] = v
				}
			}
			return Fr._subMeshes.push(t), !0
		}
	}
	Fr._BLOCK = {
		count: 0
	}, Fr._DATA = {
		offset: 0,
		size: 0
	}, Fr._strings = [], Fr._bindPoseIndices = [];
	class Br {
		static parse(e, t, r, i) {
			Br._mesh = r, Br._subMeshes = i, Br._version = t, Br._readData = e, Br.READ_DATA(), Br.READ_BLOCK(), Br
				.READ_STRINGS();
			for (var a = 0, n = Br._BLOCK.count; a < n; a++) {
				Br._readData.pos = Br._BLOCK.blockStarts[a];
				var s = Br._readData.getUint16(),
					o = Br._strings[s],
					l = Br["READ_" + o];
				if (null == l) throw new Error("model file err,no this function:" + s + " " + o);
				l.call(null)
			}
			Br._mesh._bindPoseIndices = new Uint16Array(Br._bindPoseIndices), Br._bindPoseIndices.length = 0, Br
				._strings.length = 0, Br._readData = null, Br._version = null, Br._mesh = null, Br._subMeshes = null
		}
		static _readString() {
			return Br._strings[Br._readData.getUint16()]
		}
		static READ_DATA() {
			Br._DATA.offset = Br._readData.getUint32(), Br._DATA.size = Br._readData.getUint32()
		}
		static READ_BLOCK() {
			for (var e = Br._BLOCK.count = Br._readData.getUint16(), t = Br._BLOCK.blockStarts = [], r = Br._BLOCK
					.blockLengths = [], i = 0; i < e; i++) t.push(Br._readData.getUint32()), r.push(Br._readData
				.getUint32())
		}
		static READ_STRINGS() {
			var e = Br._readData.getUint32(),
				t = Br._readData.getUint16(),
				r = Br._readData.pos;
			Br._readData.pos = e + Br._DATA.offset;
			for (var i = 0; i < t; i++) Br._strings[i] = Br._readData.readUTFString();
			Br._readData.pos = r
		}
		static READ_MESH() {
			var e, r = t.LayaGL.instance,
				i = 0,
				a = (Br._readString(), Br._readData.__getBuffer()),
				n = Br._readData.getInt16(),
				s = Br._DATA.offset;
			for (e = 0; e < n; e++) {
				var o, l, _, h = s + Br._readData.getUint32(),
					c = Br._readData.getUint32(),
					d = Br._readString(),
					u = fe.getVertexDeclaration(d, !1),
					f = u.vertexStride,
					m = d.split(","),
					E = m.length;
				switch (Br._version) {
					case "LAYAMODEL:05":
						o = a.slice(h, h + c * f), l = new Float32Array(o), _ = new Uint8Array(o);
						break;
					case "LAYAMODEL:COMPRESSION_05":
						o = new ArrayBuffer(f * c), l = new Float32Array(o), _ = new Uint8Array(o);
						var T = Br._readData.pos;
						Br._readData.pos = h;
						for (var g = 0; g < c; g++)
							for (var S, R = g * f, I = 0; I < E; I++) switch (m[I]) {
								case "POSITION":
									l[S = R / 4] = v.convertToNumber(Br._readData.getUint16()), l[S + 1] = v
										.convertToNumber(Br._readData.getUint16()), l[S + 2] = v
										.convertToNumber(Br._readData.getUint16()), R += 12;
									break;
								case "NORMAL":
									l[S = R / 4] = Br._readData.getUint8() / 127.5 - 1, l[S + 1] = Br._readData
										.getUint8() / 127.5 - 1, l[S + 2] = Br._readData.getUint8() / 127.5 - 1,
										R += 12;
									break;
								case "COLOR":
									l[S = R / 4] = Br._readData.getUint8() / 255, l[S + 1] = Br._readData
										.getUint8() / 255, l[S + 2] = Br._readData.getUint8() / 255, l[S + 3] =
										Br._readData.getUint8() / 255, R += 16;
									break;
								case "UV":
								case "UV1":
									l[S = R / 4] = v.convertToNumber(Br._readData.getUint16()), l[S + 1] = v
										.convertToNumber(Br._readData.getUint16()), R += 8;
									break;
								case "BLENDWEIGHT":
									l[S = R / 4] = Br._readData.getUint8() / 255, l[S + 1] = Br._readData
										.getUint8() / 255, l[S + 2] = Br._readData.getUint8() / 255, l[S + 3] =
										Br._readData.getUint8() / 255, R += 16;
									break;
								case "BLENDINDICES":
									_[R] = Br._readData.getUint8(), _[R + 1] = Br._readData.getUint8(), _[R +
										2] = Br._readData.getUint8(), _[R + 3] = Br._readData.getUint8(), R +=
										4;
									break;
								case "TANGENT":
									l[S = R / 4] = Br._readData.getUint8() / 127.5 - 1, l[S + 1] = Br._readData
										.getUint8() / 127.5 - 1, l[S + 2] = Br._readData.getUint8() / 127.5 - 1,
										l[S + 3] = Br._readData.getUint8() / 127.5 - 1, R += 16
							}
						Br._readData.pos = T
				}
				var x = new he(o.byteLength, r.STATIC_DRAW, !0);
				x.vertexDeclaration = u, x.setData(o), Br._mesh._vertexBuffer = x, Br._mesh._vertexCount += x
					._byteLength / u.vertexStride, i += 4 * l.length
			}
			var A = s + Br._readData.getUint32(),
				D = Br._readData.getUint32(),
				M = new Uint16Array(a.slice(A, A + D)),
				L = new Me(Me.INDEXTYPE_USHORT, D / 2, r.STATIC_DRAW, !0);
			L.setData(M), Br._mesh._indexBuffer = L, Br._mesh._setBuffer(Br._mesh._vertexBuffer, L), i += 2 * L
				.indexCount, Br._mesh._setCPUMemory(i), Br._mesh._setGPUMemory(i);
			var C = Br._mesh._boneNames = [],
				y = Br._readData.getUint16();
			for (C.length = y, e = 0; e < y; e++) C[e] = Br._strings[Br._readData.getUint16()];
			var O = Br._readData.getUint32(),
				N = Br._readData.getUint32(),
				P = new Float32Array(a.slice(s + O, s + O + N)),
				w = P.length,
				V = Br._mesh._inverseBindPosesBuffer = new ArrayBuffer(4 * w);
			for (Br._mesh._inverseBindPoses = [], e = 0; e < w; e += 16) {
				var b = new p(P[e + 0], P[e + 1], P[e + 2], P[e + 3], P[e + 4], P[e + 5], P[e + 6], P[e + 7], P[e +
						8], P[e + 9], P[e + 10], P[e + 11], P[e + 12], P[e + 13], P[e + 14], P[e + 15],
					new Float32Array(V, 4 * e, 16));
				Br._mesh._inverseBindPoses[e / 16] = b
			}
			return !0
		}
		static READ_SUBMESH() {
			var e = Br._readData.__getBuffer(),
				t = new br(Br._mesh);
			Br._readData.getInt16();
			var r = Br._readData.getUint32(),
				i = Br._readData.getUint32(),
				a = Br._mesh._indexBuffer;
			t._indexBuffer = a, t._setIndexRange(r, i);
			var n = Br._mesh._vertexBuffer;
			t._vertexBuffer = n;
			var s = Br._DATA.offset,
				o = t._subIndexBufferStart,
				l = t._subIndexBufferCount,
				_ = t._boneIndicesList,
				h = Br._readData.getUint16();
			o.length = h, l.length = h, _.length = h;
			for (var c = Br._mesh._skinDataPathMarks, d = Br._bindPoseIndices, u = Br._subMeshes.length, f = 0; f <
				h; f++) {
				o[f] = Br._readData.getUint32(), l[f] = Br._readData.getUint32();
				for (var m = Br._readData.getUint32(), E = Br._readData.getUint32(), T = _[f] = new Uint16Array(e
						.slice(s + m, s + m + E)), p = 0, g = T.length; p < g; p++) {
					var S = T[p],
						v = d.indexOf(S); - 1 === v ? (T[p] = d.length, d.push(S), c.push([u, f, p])) : T[p] = v
				}
			}
			return Br._subMeshes.push(t), !0
		}
	}
	Br._BLOCK = {
		count: 0
	}, Br._DATA = {
		offset: 0,
		size: 0
	}, Br._strings = [], Br._bindPoseIndices = [];
	class Ur {
		constructor() {}
		static read(e, r, i) {
			var a = new t.Byte(e);
			a.pos = 0;
			var n = a.readUTFString();
			switch (n) {
				case "LAYAMODEL:0301":
				case "LAYAMODEL:0400":
				case "LAYAMODEL:0401":
					Fr.parse(a, n, r, i);
					break;
				case "LAYAMODEL:05":
				case "LAYAMODEL:COMPRESSION_05":
					Br.parse(a, n, r, i);
					break;
				default:
					throw new Error("MeshReader: unknown mesh version.")
			}
			r._setSubMeshes(i)
		}
	}
	class Gr extends t.Resource {
		constructor(e = !0) {
			super(), this._tempVector30 = new n, this._tempVector31 = new n, this._tempVector32 = new n, this
				._minVerticesUpdate = -1, this._maxVerticesUpdate = -1, this._needUpdateBounds = !0, this
				._bounds = new Ze(new n, new n), this._bufferState = new De, this._instanceBufferState = new De,
				this._vertexBuffer = null, this._indexBuffer = null, this._vertexCount = 0, this._isReadable =
				e, this._subMeshes = [], this._skinDataPathMarks = []
		}
		static __init__() {
			var e = Zt._physics3D;
			e && (Gr._nativeTempVector30 = new e.btVector3(0, 0, 0), Gr._nativeTempVector31 = new e.btVector3(0,
				0, 0), Gr._nativeTempVector32 = new e.btVector3(0, 0, 0))
		}
		static _parse(e, t = null, r = null) {
			var i = new Gr;
			return Ur.read(e, i, i._subMeshes), i
		}
		static load(e, r) {
			t.ILaya.loader.create(e, r, null, Gr.MESH)
		}
		get inverseAbsoluteBindPoses() {
			return this._inverseBindPoses
		}
		get vertexCount() {
			return this._vertexCount
		}
		get indexCount() {
			return this._indexBuffer.indexCount
		}
		get subMeshCount() {
			return this._subMeshes.length
		}
		get bounds() {
			return this._bounds
		}
		set bounds(e) {
			this._bounds !== e && e.cloneTo(this._bounds)
		}
		_getPositionElement(e) {
			for (var t = e.vertexDeclaration._vertexElements, r = 0, i = t.length; r < i; r++) {
				var a = t[r];
				if (a._elementFormat === ce.Vector3 && a._elementUsage === fe.MESH_POSITION0) return a
			}
			return null
		}
		_getVerticeElementData(e, t) {
			e.length = this._vertexCount;
			var r = this._vertexBuffer.vertexDeclaration,
				s = r.getVertexElementByUsage(t);
			if (s) {
				var o = this._vertexBuffer.getUint8Data(),
					l = this._vertexBuffer.getFloat32Data(),
					_ = r.vertexStride,
					h = _ / 4,
					c = s._offset,
					d = c / 4;
				switch (t) {
					case fe.MESH_TEXTURECOORDINATE0:
					case fe.MESH_TEXTURECOORDINATE1:
						for (var u = 0; u < this._vertexCount; u++) {
							var f = h * u + d;
							e[u] = new i(l[f], l[f + 1])
						}
						break;
					case fe.MESH_POSITION0:
					case fe.MESH_NORMAL0:
						for (u = 0; u < this._vertexCount; u++) {
							f = h * u + d;
							e[u] = new n(l[f], l[f + 1], l[f + 2])
						}
						break;
					case fe.MESH_TANGENT0:
					case fe.MESH_BLENDWEIGHT0:
						for (u = 0; u < this._vertexCount; u++) {
							f = h * u + d;
							e[u] = new a(l[f], l[f + 1], l[f + 2], l[f + 3])
						}
						break;
					case fe.MESH_COLOR0:
						for (u = 0; u < this._vertexCount; u++) {
							f = h * u + d;
							e[u] = new te(l[f], l[f + 1], l[f + 2], l[f + 3])
						}
						break;
					case fe.MESH_BLENDINDICES0:
						for (u = 0; u < this._vertexCount; u++) {
							f = _ * u + c;
							e[u] = new a(o[f], o[f + 1], o[f + 2], o[f + 3])
						}
						break;
					default:
						throw "Mesh:Unknown elementUsage."
				}
			}
		}
		_setVerticeElementData(e, t) {
			var r = this._vertexBuffer.vertexDeclaration,
				i = r.getVertexElementByUsage(t);
			if (i) {
				var a = this._vertexBuffer.getUint8Data(),
					n = this._vertexBuffer.getFloat32Data(),
					s = r.vertexStride,
					o = s / 4,
					l = i._offset,
					_ = l / 4;
				switch (t) {
					case fe.MESH_TEXTURECOORDINATE0:
					case fe.MESH_TEXTURECOORDINATE1:
						for (var h = 0, c = e.length; h < c; h++) {
							var d = o * h + _,
								u = e[h];
							n[d] = u.x, n[d + 1] = u.y
						}
						break;
					case fe.MESH_POSITION0:
					case fe.MESH_NORMAL0:
						for (h = 0, c = e.length; h < c; h++) {
							d = o * h + _;
							var f = e[h];
							n[d] = f.x, n[d + 1] = f.y, n[d + 2] = f.z
						}
						break;
					case fe.MESH_TANGENT0:
					case fe.MESH_BLENDWEIGHT0:
						for (h = 0, c = e.length; h < c; h++) {
							d = o * h + _;
							var m = e[h];
							n[d] = m.x, n[d + 1] = m.y, n[d + 2] = m.z, n[d + 3] = m.w
						}
						break;
					case fe.MESH_COLOR0:
						for (h = 0, c = e.length; h < c; h++) {
							d = o * h + _;
							var E = e[h];
							n[d] = E.r, n[d + 1] = E.g, n[d + 2] = E.b, n[d + 2] = E.a
						}
						break;
					case fe.MESH_BLENDINDICES0:
						for (h = 0, c = e.length; h < c; h++) {
							d = s * h + l, m = e[h];
							a[d] = m.x, a[d + 1] = m.y, a[d + 2] = m.z, a[d + 3] = m.w
						}
						break;
					default:
						throw "Mesh:Unknown elementUsage."
				}
				this._minVerticesUpdate = 0, this._maxVerticesUpdate = Number.MAX_SAFE_INTEGER
			} else console.warn("Mesh: the mesh don't have  this VertexElement.")
		}
		_disposeResource() {
			for (var e = 0, t = this._subMeshes.length; e < t; e++) this._subMeshes[e].destroy();
			this._nativeTriangleMesh && window.Physics3D.destroy(this._nativeTriangleMesh), this._vertexBuffer
				.destroy(), this._indexBuffer.destroy(), this._setCPUMemory(0), this._setGPUMemory(0), this
				._bufferState.destroy(), this._instanceBufferState.destroy(), this._bufferState = null, this
				._instanceBufferState = null, this._vertexBuffer = null, this._indexBuffer = null, this
				._subMeshes = null, this._nativeTriangleMesh = null, this._indexBuffer = null, this._boneNames =
				null, this._inverseBindPoses = null
		}
		_setSubMeshes(e) {
			this._subMeshes = e;
			for (var t = 0, r = e.length; t < r; t++) e[t]._indexInMesh = t;
			this.calculateBounds()
		}
		_setBuffer(e, t) {
			var r = this._bufferState;
			r.bind(), r.applyVertexBuffer(e), r.applyIndexBuffer(t), r.unBind();
			var i = this._instanceBufferState;
			i.bind(), i.applyVertexBuffer(e), i.applyInstanceVertexBuffer(me.instance
				.instanceWorldMatrixBuffer), i.applyInstanceVertexBuffer(me.instance.instanceMVPMatrixBuffer), i
				.applyIndexBuffer(t), i.unBind()
		}
		_getPhysicMesh() {
			if (!this._nativeTriangleMesh) {
				for (var e = new window.Physics3D.btTriangleMesh, t = Gr._nativeTempVector30, r = Gr
						._nativeTempVector31, i = Gr._nativeTempVector32, a = this._tempVector30, n = this
						._tempVector31, s = this._tempVector32, o = this._vertexBuffer, l = this
						._getPositionElement(o), _ = o.getFloat32Data(), h = o.vertexDeclaration.vertexStride /
						4, c = l._offset / 4, d = this._indexBuffer.getData(), u = 0, f = d.length; u < f; u +=
					3) {
					var m = d[u] * h + c,
						E = d[u + 1] * h + c,
						T = d[u + 2] * h + c;
					a.setValue(_[m], _[m + 1], _[m + 2]), n.setValue(_[E], _[E + 1], _[E + 2]), s.setValue(_[T],
						_[T + 1], _[T + 2]), A._convertToBulletVec3(a, t, !0), A._convertToBulletVec3(n, r,
						!0), A._convertToBulletVec3(s, i, !0), e.addTriangle(t, r, i, !0)
				}
				this._nativeTriangleMesh = e
			}
			return this._nativeTriangleMesh
		}
		_uploadVerticesData() {
			var e = this._minVerticesUpdate,
				t = this._maxVerticesUpdate;
			if (-1 !== e && -1 !== t) {
				var r = e;
				this._vertexBuffer.setData(this._vertexBuffer.getUint8Data().buffer, r, r, t - e), this
					._minVerticesUpdate = -1, this._maxVerticesUpdate = -1
			}
		}
		getSubMesh(e) {
			return this._subMeshes[e]
		}
		getPositions(e) {
			if (!this._isReadable) throw "Mesh:can't get positions on mesh,isReadable must be true.";
			this._getVerticeElementData(e, fe.MESH_POSITION0)
		}
		setPositions(e) {
			if (!this._isReadable)
		throw "Mesh:setPosition() need isReadable must be true or use setVertices().";
			this._setVerticeElementData(e, fe.MESH_POSITION0), this._needUpdateBounds = !0
		}
		getColors(e) {
			if (!this._isReadable) throw "Mesh:can't get colors on mesh,isReadable must be true.";
			this._getVerticeElementData(e, fe.MESH_COLOR0)
		}
		setColors(e) {
			if (!this._isReadable) throw "Mesh:setColors() need isReadable must be true or use setVertices().";
			this._setVerticeElementData(e, fe.MESH_COLOR0)
		}
		getUVs(e, t = 0) {
			if (!this._isReadable) throw "Mesh:can't get uvs on mesh,isReadable must be true.";
			switch (t) {
				case 0:
					this._getVerticeElementData(e, fe.MESH_TEXTURECOORDINATE0);
					break;
				case 1:
					this._getVerticeElementData(e, fe.MESH_TEXTURECOORDINATE1);
					break;
				default:
					throw "Mesh:Invalid channel."
			}
		}
		setUVs(e, t = 0) {
			if (!this._isReadable) throw "Mesh:setUVs() need isReadable must be true or use setVertices().";
			switch (t) {
				case 0:
					this._setVerticeElementData(e, fe.MESH_TEXTURECOORDINATE0);
					break;
				case 1:
					this._setVerticeElementData(e, fe.MESH_TEXTURECOORDINATE1);
					break;
				default:
					throw "Mesh:Invalid channel."
			}
		}
		getNormals(e) {
			if (!this._isReadable) throw "Mesh:can't get colors on mesh,isReadable must be true.";
			this._getVerticeElementData(e, fe.MESH_NORMAL0)
		}
		setNormals(e) {
			if (!this._isReadable) throw "Mesh:setNormals() need must be true or use setVertices().";
			this._setVerticeElementData(e, fe.MESH_NORMAL0)
		}
		getTangents(e) {
			if (!this._isReadable) throw "Mesh:can't get colors on mesh,isReadable must be true.";
			this._getVerticeElementData(e, fe.MESH_TANGENT0)
		}
		setTangents(e) {
			if (!this._isReadable)
		throw "Mesh:setTangents() need isReadable must be true or use setVertices().";
			this._setVerticeElementData(e, fe.MESH_TANGENT0)
		}
		getBoneWeights(e) {
			if (!this._isReadable) throw "Mesh:can't get boneWeights on mesh,isReadable must be true.";
			this._getVerticeElementData(e, fe.MESH_BLENDWEIGHT0)
		}
		setBoneWeights(e) {
			if (!this._isReadable)
			throw "Mesh:setBoneWeights() need isReadable must be true or use setVertices().";
			this._setVerticeElementData(e, fe.MESH_BLENDWEIGHT0)
		}
		getBoneIndices(e) {
			if (!this._isReadable) throw "Mesh:can't get boneIndices on mesh,isReadable must be true.";
			this._getVerticeElementData(e, fe.MESH_BLENDINDICES0)
		}
		setBoneIndices(e) {
			if (!this._isReadable)
			throw "Mesh:setBoneIndices() need isReadable must be true or use setVertices().";
			this._setVerticeElementData(e, fe.MESH_BLENDINDICES0)
		}
		markAsUnreadbale() {
			this._uploadVerticesData(), this._vertexBuffer.markAsUnreadbale(), this._isReadable = !1
		}
		getVertexDeclaration() {
			return this._vertexBuffer._vertexDeclaration
		}
		getVertices() {
			if (this._isReadable) return this._vertexBuffer.getUint8Data().buffer.slice(0);
			throw "Mesh:can't get vertices on mesh,isReadable must be true."
		}
		setVertices(e) {
			this._vertexBuffer.setData(e), this._needUpdateBounds = !0
		}
		getIndices() {
			if (this._isReadable) return this._indexBuffer.getData().slice();
			throw "Mesh:can't get indices on subMesh,mesh's isReadable must be true."
		}
		setIndices(e) {
			this._indexBuffer.setData(e)
		}
		calculateBounds() {
			if (!this._isReadable)
			throw "Mesh:can't calculate bounds on subMesh,mesh's isReadable must be true.";
			if (this._needUpdateBounds) {
				var e = this._tempVector30,
					t = this._tempVector31;
				e.x = e.y = e.z = Number.MAX_VALUE, t.x = t.y = t.z = -Number.MAX_VALUE;
				for (var r = this._vertexBuffer, i = this._getPositionElement(r), a = r.getFloat32Data(), n = r
						.vertexDeclaration.vertexStride / 4, s = i._offset / 4, o = 0, l = a.length; o < l; o +=
					n) {
					var _ = o + s,
						h = a[_],
						c = a[_ + 1],
						d = a[_ + 2];
					e.x = Math.min(e.x, h), e.y = Math.min(e.y, c), e.z = Math.min(e.z, d), t.x = Math.max(t.x,
						h), t.y = Math.max(t.y, c), t.z = Math.max(t.z, d)
				}
				this._bounds.setMin(e), this._bounds.setMax(t), this._needUpdateBounds = !1
			}
		}
		cloneTo(e) {
			var t = e,
				r = this._vertexBuffer,
				i = new he(r._byteLength, r.bufferUsage, r.canRead);
			i.vertexDeclaration = r.vertexDeclaration, i.setData(r.getUint8Data().slice().buffer), t
				._vertexBuffer = i, t._vertexCount = this._vertexCount;
			var a, n = this._indexBuffer,
				s = new Me(Me.INDEXTYPE_USHORT, n.indexCount, n.bufferUsage, n.canRead);
			s.setData(n.getData().slice()), t._indexBuffer = s, t._setBuffer(t._vertexBuffer, s), t
				._setCPUMemory(this.cpuMemory), t._setGPUMemory(this.gpuMemory);
			var o = this._boneNames,
				l = t._boneNames = [];
			for (a = 0; a < o.length; a++) l[a] = o[a];
			var _ = this._inverseBindPoses,
				h = t._inverseBindPoses = [];
			for (a = 0; a < _.length; a++) h[a] = _[a];
			for (t._bindPoseIndices = new Uint16Array(this._bindPoseIndices), a = 0; a < this._skinDataPathMarks
				.length; a++) t._skinDataPathMarks[a] = this._skinDataPathMarks[a].slice();
			for (a = 0; a < this.subMeshCount; a++) {
				var c = this._subMeshes[a],
					d = c._subIndexBufferStart,
					u = c._subIndexBufferCount,
					f = c._boneIndicesList,
					m = new br(t);
				m._subIndexBufferStart.length = d.length, m._subIndexBufferCount.length = u.length, m
					._boneIndicesList.length = f.length;
				for (var E = 0; E < d.length; E++) m._subIndexBufferStart[E] = d[E];
				for (E = 0; E < u.length; E++) m._subIndexBufferCount[E] = u[E];
				for (E = 0; E < f.length; E++) m._boneIndicesList[E] = new Uint16Array(f[E]);
				m._indexBuffer = s, m._indexStart = c._indexStart, m._indexCount = c._indexCount, m._indices =
					new Uint16Array(s.getData().buffer, 2 * c._indexStart, c._indexCount);
				var T = t._vertexBuffer;
				m._vertexBuffer = T, t._subMeshes.push(m)
			}
			t._setSubMeshes(t._subMeshes)
		}
		clone() {
			var e = new Gr;
			return this.cloneTo(e), e
		}
	}
	Gr.MESH = "MESH";
	class zr {
		static __init__() {}
		static _createMesh(e, r, i) {
			var a = t.LayaGL.instance,
				n = new Gr,
				s = new br(n),
				o = new he(4 * r.length, a.STATIC_DRAW, !0);
			o.vertexDeclaration = e, o.setData(r.buffer), n._vertexBuffer = o, n._vertexCount = o._byteLength / e
				.vertexStride;
			var l = new Me(Me.INDEXTYPE_USHORT, i.length, a.STATIC_DRAW, !0);
			l.setData(i), n._indexBuffer = l, n._setBuffer(o, l), s._vertexBuffer = o, s._indexBuffer = l, s
				._setIndexRange(0, l.indexCount);
			var _ = s._subIndexBufferStart,
				h = s._subIndexBufferCount,
				c = s._boneIndicesList;
			_.length = 1, h.length = 1, c.length = 1, _[0] = 0, h[0] = l.indexCount;
			var d = [];
			d.push(s), n._setSubMeshes(d);
			var u = o._byteLength + l._byteLength;
			return n._setCPUMemory(u), n._setGPUMemory(u), n
		}
		static createBox(e = 1, t = 1, r = 1) {
			var i = fe.getVertexDeclaration("POSITION,NORMAL,UV"),
				a = e / 2,
				n = t / 2,
				s = r / 2,
				o = new Float32Array([-a, n, -s, 0, 1, 0, 0, 0, a, n, -s, 0, 1, 0, 1, 0, a, n, s, 0, 1, 0, 1, 1, -a,
					n, s, 0, 1, 0, 0, 1, -a, -n, -s, 0, -1, 0, 0, 1, a, -n, -s, 0, -1, 0, 1, 1, a, -n, s, 0, -1,
					0, 1, 0, -a, -n, s, 0, -1, 0, 0, 0, -a, n, -s, -1, 0, 0, 0, 0, -a, n, s, -1, 0, 0, 1, 0, -a,
					-n, s, -1, 0, 0, 1, 1, -a, -n, -s, -1, 0, 0, 0, 1, a, n, -s, 1, 0, 0, 1, 0, a, n, s, 1, 0,
					0, 0, 0, a, -n, s, 1, 0, 0, 0, 1, a, -n, -s, 1, 0, 0, 1, 1, -a, n, s, 0, 0, 1, 0, 0, a, n,
					s, 0, 0, 1, 1, 0, a, -n, s, 0, 0, 1, 1, 1, -a, -n, s, 0, 0, 1, 0, 1, -a, n, -s, 0, 0, -1, 1,
					0, a, n, -s, 0, 0, -1, 0, 0, a, -n, -s, 0, 0, -1, 0, 1, -a, -n, -s, 0, 0, -1, 1, 1
				]),
				l = new Uint16Array([0, 1, 2, 2, 3, 0, 4, 7, 6, 6, 5, 4, 8, 9, 10, 10, 11, 8, 12, 15, 14, 14, 13,
					12, 16, 17, 18, 18, 19, 16, 20, 23, 22, 22, 21, 20
				]);
			return zr._createMesh(i, o, l)
		}
		static createCapsule(e = .5, t = 2, r = 16, i = 32) {
			var a, n, s = (r + 1) * (i + 1) * 2 + 2 * (i + 1),
				o = 3 * r * (i + 1) * 2 * 2 + 2 * i * 3,
				l = fe.getVertexDeclaration("POSITION,NORMAL,UV"),
				_ = l.vertexStride / 4,
				h = new Float32Array(s * _),
				c = new Uint16Array(o),
				d = Math.PI / 2 / r,
				u = 2 * Math.PI / i,
				f = t / 2 - e,
				m = 0,
				E = 0,
				T = 0,
				p = 0,
				g = 0,
				S = 0;
			for (a = 0; a <= r; a++)
				for (n = 0; n <= i; n++) m = e * Math.cos(a * d) * Math.cos(n * u + Math.PI), E = e * Math.sin(a *
						d), T = e * Math.cos(a * d) * Math.sin(n * u + Math.PI), h[p++] = m, h[p++] = E + f, h[
					p++] = T, h[p++] = m, h[p++] = E, h[p++] = T, h[p++] = 1 - n / i, h[p++] = (1 - a / r) * (Math
						.PI * e / 2 / (t + Math.PI * e)), a < r && (c[g++] = a * (i + 1) + n + (i + 1), c[g++] = a *
						(i + 1) + n, c[g++] = a * (i + 1) + n + 1, c[g++] = a * (i + 1) + n + i, c[g++] = a * (i +
							1) + n, c[g++] = a * (i + 1) + n + (i + 1));
			for (S += (r + 1) * (i + 1), a = 0; a <= r; a++)
				for (n = 0; n <= i; n++) m = e * Math.cos(a * d) * Math.cos(n * u + Math.PI), E = e * Math.sin(-a *
						d), T = e * Math.cos(a * d) * Math.sin(n * u + Math.PI), h[p++] = m, h[p++] = E - f, h[
					p++] = T, h[p++] = m, h[p++] = E, h[p++] = T, h[p++] = 1 - n / i, h[p++] = (a / r * (Math.PI *
						e / 2) + (t + Math.PI * e / 2)) / (t + Math.PI * e), a < r && (c[g++] = S + a * (i + 1) + n,
						c[g++] = S + a * (i + 1) + n + (i + 1), c[g++] = S + a * (i + 1) + n + 1, c[g++] = S + a * (
							i + 1) + n, c[g++] = S + a * (i + 1) + n + i, c[g++] = S + a * (i + 1) + n + (i + 1));
			for (S += (r + 1) * (i + 1), n = 0; n <= i; n++) m = e * Math.cos(n * u + Math.PI), E = f, T = e * Math
				.sin(n * u + Math.PI), h[p++] = m, h[p + 8 * (i + 1) - 1] = m, h[p++] = E, h[p + 8 * (i + 1) -
				1] = -E, h[p++] = T, h[p + 8 * (i + 1) - 1] = T, h[p++] = m, h[p + 8 * (i + 1) - 1] = m, h[p++] = 0,
				h[p + 8 * (i + 1) - 1] = 0, h[p++] = T, h[p + 8 * (i + 1) - 1] = T, h[p++] = 1 - 1 * n / i, h[p +
					8 * (i + 1) - 1] = 1 - 1 * n / i, h[p++] = Math.PI * e / 2 / (t + Math.PI * e), h[p + 8 * (i +
					1) - 1] = (Math.PI * e / 2 + t) / (t + Math.PI * e);
			for (n = 0; n < i; n++) c[g++] = n + S + (i + 1), c[g++] = n + S + 1, c[g++] = n + S, c[g++] = n + S + (
				i + 1), c[g++] = n + S + (i + 1) + 1, c[g++] = n + S + 1;
			return S += 2 * (i + 1), zr._createMesh(l, h, c)
		}
		static createCone(e = .5, t = 1, r = 32) {
			for (var i, a = r + 1 + 1 + 2 * (r + 1), s = 6 * r + 3 * r, o = fe.getVertexDeclaration(
						"POSITION,NORMAL,UV"), l = o.vertexStride / 4, _ = new Float32Array(a * l), h =
					new Uint16Array(s), c = 2 * Math.PI / r, d = t / 2, f = 0, m = 0, E = 0, T = 0, p = 0, g =
					new n, S = new n(0, -1, 0), v = new n(0, d, 0), R = new n, I = new n, x = new u, A = new n, D =
					0, M = 0, L = 0; L <= r; L++) f = L * c, E = Math.cos(f + Math.PI) * e, T = d, p = Math.sin(f +
					Math.PI) * e, _[D++] = 0, _[D + 8 * (r + 1) - 1] = E, _[D++] = T, _[D + 8 * (r + 1) - 1] = -T,
				_[D++] = 0, _[D + 8 * (r + 1) - 1] = p, g.x = E, g.y = 0, g.z = p, R.x = E, R.y = -T, R.z = p, n
				.subtract(R, v, I), n.normalize(I, I), i = Math.acos(n.dot(S, I)), n.cross(S, I, A), n.normalize(A,
					A), u.createFromAxisAngle(A, i, x), n.normalize(g, g), n.transformQuat(g, x, g), n.normalize(g,
					g), _[D++] = g.x, _[D + 8 * (r + 1) - 1] = g.x, _[D++] = g.y, _[D + 8 * (r + 1) - 1] = g.y, _[
					D++] = g.z, _[D + 8 * (r + 1) - 1] = g.z, _[D++] = 1 - 1 * L / r, _[D + 8 * (r + 1) - 1] = 1 -
				1 * L / r, _[D++] = 0, _[D + 8 * (r + 1) - 1] = 1;
			D += 8 * (r + 1);
			for (var C = 0; C < r; C++) h[M++] = C + m + (r + 1), h[M++] = C + m + 1, h[M++] = C + m, h[M++] = C +
				m + (r + 1), h[M++] = C + m + (r + 1) + 1, h[M++] = C + m + 1;
			m += 2 * (r + 1);
			for (var y = 0; y <= r; y++) 0 === y && (_[D++] = 0, _[D++] = -d, _[D++] = 0, _[D++] = 0, _[D++] = -1,
					_[D++] = 0, _[D++] = .5, _[D++] = .5), f = y * c, E = Math.cos(f + Math.PI) * e, T = -d, p =
				Math.sin(f + Math.PI) * e, _[D++] = E, _[D++] = T, _[D++] = p, _[D++] = 0, _[D++] = -1, _[D++] = 0,
				_[D++] = .5 + .5 * Math.cos(f), _[D++] = .5 + .5 * Math.sin(f);
			for (var O = 0; O < r; O++) h[M++] = 0 + m, h[M++] = O + 2 + m, h[M++] = O + 1 + m;
			return m += r + 1 + 1, zr._createMesh(o, _, h)
		}
		static createCylinder(e = .5, t = 2, r = 32) {
			for (var i = r + 1 + 1 + 2 * (r + 1) + (r + 1 + 1), a = 3 * r + 6 * r + 3 * r, n = fe
					.getVertexDeclaration("POSITION,NORMAL,UV"), s = n.vertexStride / 4, o = new Float32Array(i *
					s), l = new Uint16Array(a), _ = 2 * Math.PI / r, h = t / 2, c = 0, d = 0, u = 0, f = 0, m = 0,
					E = 0, T = 0, p = 0; p <= r; p++) 0 === p && (o[E++] = 0, o[E++] = h, o[E++] = 0, o[E++] = 0, o[
					E++] = 1, o[E++] = 0, o[E++] = .5, o[E++] = .5), c = p * _, u = Math.cos(c) * e, f = h, m = Math
				.sin(c) * e, o[E++] = u, o[E++] = f, o[E++] = m, o[E++] = 0, o[E++] = 1, o[E++] = 0, o[E++] = .5 +
				.5 * Math.cos(c), o[E++] = .5 + .5 * Math.sin(c);
			for (var g = 0; g < r; g++) l[T++] = 0, l[T++] = g + 1, l[T++] = g + 2;
			d += r + 1 + 1;
			for (var S = 0; S <= r; S++) c = S * _, u = Math.cos(c + Math.PI) * e, f = h, m = Math.sin(c + Math
				.PI) * e, o[E++] = u, o[E + 8 * (r + 1) - 1] = u, o[E++] = f, o[E + 8 * (r + 1) - 1] = -f, o[E++] =
				m, o[E + 8 * (r + 1) - 1] = m, o[E++] = u, o[E + 8 * (r + 1) - 1] = u, o[E++] = 0, o[E + 8 * (r +
					1) - 1] = 0, o[E++] = m, o[E + 8 * (r + 1) - 1] = m, o[E++] = 1 - 1 * S / r, o[E + 8 * (r + 1) -
					1] = 1 - 1 * S / r, o[E++] = 0, o[E + 8 * (r + 1) - 1] = 1;
			E += 8 * (r + 1);
			for (var v = 0; v < r; v++) l[T++] = v + d + (r + 1), l[T++] = v + d + 1, l[T++] = v + d, l[T++] = v +
				d + (r + 1), l[T++] = v + d + (r + 1) + 1, l[T++] = v + d + 1;
			d += 2 * (r + 1);
			for (var R = 0; R <= r; R++) 0 === R && (o[E++] = 0, o[E++] = -h, o[E++] = 0, o[E++] = 0, o[E++] = -1,
					o[E++] = 0, o[E++] = .5, o[E++] = .5), c = R * _, u = Math.cos(c + Math.PI) * e, f = -h, m =
				Math.sin(c + Math.PI) * e, o[E++] = u, o[E++] = f, o[E++] = m, o[E++] = 0, o[E++] = -1, o[E++] = 0,
				o[E++] = .5 + .5 * Math.cos(c), o[E++] = .5 + .5 * Math.sin(c);
			for (var I = 0; I < r; I++) l[T++] = 0 + d, l[T++] = I + 2 + d, l[T++] = I + 1 + d;
			return d += r + 1 + 1, zr._createMesh(n, o, l)
		}
		static createPlane(e = 10, t = 10, r = 10, i = 10) {
			for (var a = (r + 1) * (i + 1), n = new Uint16Array(r * i * 2 * 3), s = fe.getVertexDeclaration(
						"POSITION,NORMAL,UV"), o = s.vertexStride / 4, l = new Float32Array(a * o), _ = e / 2, h =
					t / 2, c = e / r, d = t / i, u = 0, f = 0; f <= i; f++)
				for (var m = 0; m <= r; m++) l[u++] = m * c - _, l[u++] = 0, l[u++] = f * d - h, l[u++] = 0, l[
					u++] = 1, l[u++] = 0, l[u++] = 1 * m / r, l[u++] = 1 * f / i;
			var E = 0;
			for (f = 0; f < i; f++)
				for (m = 0; m < r; m++) n[E++] = (f + 1) * (r + 1) + m, n[E++] = f * (r + 1) + m, n[E++] = (f + 1) *
					(r + 1) + m + 1, n[E++] = f * (r + 1) + m, n[E++] = f * (r + 1) + m + 1, n[E++] = (f + 1) * (r +
						1) + m + 1;
			return zr._createMesh(s, l, n)
		}
		static createQuad(e = 1, t = 1) {
			var r = fe.getVertexDeclaration("POSITION,NORMAL,UV"),
				i = e / 2,
				a = t / 2,
				n = new Float32Array([-i, a, 0, 0, 0, 1, 0, 0, i, a, 0, 0, 0, 1, 1, 0, -i, -a, 0, 0, 0, 1, 0, 1, i,
					-a, 0, 0, 0, 1, 1, 1
				]),
				s = new Uint16Array([0, 1, 2, 3, 2, 1]);
			return zr._createMesh(r, n, s)
		}
		static createSphere(e = .5, t = 32, r = 32) {
			var i = (t + 1) * (r + 1),
				a = 3 * t * (r + 1) * 2,
				n = new Uint16Array(a),
				s = fe.getVertexDeclaration("POSITION,NORMAL,UV"),
				o = s.vertexStride / 4,
				l = new Float32Array(i * o),
				_ = Math.PI / t,
				h = 2 * Math.PI / r,
				c = 0;
			i = 0, a = 0;
			for (var d = 0; d < t + 1; d++)
				for (var u = Math.sin(d * _), f = Math.cos(d * _), m = 0; m < r + 1; m++) {
					var E = u * Math.sin(m * h + 1 * Math.PI / 2),
						T = u * Math.cos(m * h + 1 * Math.PI / 2);
					l[i + 0] = E * e, l[i + 1] = f * e, l[i + 2] = T * e, l[i + 3] = E, l[i + 4] = f, l[i + 5] = T,
						l[i + 6] = m / r, l[i + 7] = d / t, i += o, d != t - 1 && (n[a++] = c + (r + 1), n[a++] = c,
							n[a++] = c + 1, n[a++] = c + r, n[a++] = c, n[a++] = c + (r + 1), c++)
				}
			return zr._createMesh(s, l, n)
		}
	}
	class Hr extends t.BaseTexture {
		constructor(e, r = t.TextureFormat.R8G8B8, i = !1) {
			super(r, i), this._glTextureType = t.LayaGL.instance.TEXTURE_CUBE_MAP, this._width = e, this
				._height = e;
			var a = t.LayaGL.instance;
			if (this._setWarpMode(a.TEXTURE_WRAP_S, this._wrapModeU), this._setWarpMode(a.TEXTURE_WRAP_T, this
					._wrapModeV), this._setFilterMode(this._filterMode), this._setAnisotropy(this._anisoLevel),
				this._mipmap) {
				this._mipmapCount = Math.ceil(Math.log2(e));
				for (var n = 0; n < this._mipmapCount; n++) this._setPixels([], n, Math.max(e >> n, 1), Math
					.max(e >> n, 1));
				this._setGPUMemory(e * e * 4 * (1 + 1 / 3) * 6)
			} else this._mipmapCount = 1, this._setGPUMemory(e * e * 4 * 6)
		}
		static __init__() {
			var e = new Uint8Array(3);
			e[0] = 128, e[1] = 128, e[2] = 128, Hr.grayTexture = new Hr(1, t.TextureFormat.R8G8B8, !1), Hr
				.grayTexture.setSixSidePixels([e, e, e, e, e, e]), Hr.grayTexture.lock = !0
		}
		static _parse(e, t = null, r = null) {
			var i = r ? new Hr(0, r[0], r[1]) : new Hr(0);
			return i.setSixSideImageSources(e), i
		}
		static load(e, r) {
			t.ILaya.loader.create(e, r, null, Hr.TEXTURECUBE)
		}
		get defaulteTexture() {
			return Hr.grayTexture
		}
		_setPixels(e, r, i, a) {
			var n = t.LayaGL.instance,
				s = this._getGLFormat();
			t.WebGLContext.bindTexture(n, this._glTextureType, this._glTexture), this.format === t.TextureFormat
				.R8G8B8 ? (n.pixelStorei(n.UNPACK_ALIGNMENT, 1), n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_Z, r,
					s, i, a, 0, s, n.UNSIGNED_BYTE, e[0]), n.texImage2D(n.TEXTURE_CUBE_MAP_NEGATIVE_Z, r, s,
					i, a, 0, s, n.UNSIGNED_BYTE, e[1]), n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X, r, s, i,
					a, 0, s, n.UNSIGNED_BYTE, e[2]), n.texImage2D(n.TEXTURE_CUBE_MAP_NEGATIVE_X, r, s, i, a,
					0, s, n.UNSIGNED_BYTE, e[3]), n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_Y, r, s, i, a, 0,
					s, n.UNSIGNED_BYTE, e[4]), n.texImage2D(n.TEXTURE_CUBE_MAP_NEGATIVE_Y, r, s, i, a, 0, s,
					n.UNSIGNED_BYTE, e[5]), n.pixelStorei(n.UNPACK_ALIGNMENT, 4)) : (n.texImage2D(n
					.TEXTURE_CUBE_MAP_POSITIVE_Z, r, s, i, a, 0, s, n.UNSIGNED_BYTE, e[0]), n.texImage2D(n
					.TEXTURE_CUBE_MAP_NEGATIVE_Z, r, s, i, a, 0, s, n.UNSIGNED_BYTE, e[1]), n.texImage2D(n
					.TEXTURE_CUBE_MAP_POSITIVE_X, r, s, i, a, 0, s, n.UNSIGNED_BYTE, e[2]), n.texImage2D(n
					.TEXTURE_CUBE_MAP_NEGATIVE_X, r, s, i, a, 0, s, n.UNSIGNED_BYTE, e[3]), n.texImage2D(n
					.TEXTURE_CUBE_MAP_POSITIVE_Y, r, s, i, a, 0, s, n.UNSIGNED_BYTE, e[4]), n.texImage2D(n
					.TEXTURE_CUBE_MAP_NEGATIVE_Y, r, s, i, a, 0, s, n.UNSIGNED_BYTE, e[5]))
		}
		setSixSideImageSources(e, r = !1) {
			for (var i, a, n = 0; n < 6; n++) {
				var s = e[n];
				if (!s) return void console.log("TextureCube: image Source can't be null.");
				var o = s.width,
					l = s.height;
				if (n > 0 && i !== o) return void console.log(
					"TextureCube: each side image's width and height must same.");
				if ((i = o) !== (a = l)) return void console.log(
					"TextureCube: each side image's width and height must same.")
			}
			this._width = i, this._height = a;
			var _ = t.LayaGL.instance;
			t.WebGLContext.bindTexture(_, this._glTextureType, this._glTexture);
			var h = this._getGLFormat();
			if (t.Render.isConchApp) {
				if (1 == r)
					for (var c = 0; c < 6; c++) e[c].setPremultiplyAlpha(r);
				_.texImage2D(_.TEXTURE_CUBE_MAP_POSITIVE_Z, 0, _.RGBA, _.RGBA, _.UNSIGNED_BYTE, e[0]), _
					.texImage2D(_.TEXTURE_CUBE_MAP_NEGATIVE_Z, 0, _.RGBA, _.RGBA, _.UNSIGNED_BYTE, e[1]), _
					.texImage2D(_.TEXTURE_CUBE_MAP_POSITIVE_X, 0, _.RGBA, _.RGBA, _.UNSIGNED_BYTE, e[2]), _
					.texImage2D(_.TEXTURE_CUBE_MAP_NEGATIVE_X, 0, _.RGBA, _.RGBA, _.UNSIGNED_BYTE, e[3]), _
					.texImage2D(_.TEXTURE_CUBE_MAP_POSITIVE_Y, 0, _.RGBA, _.RGBA, _.UNSIGNED_BYTE, e[4]), _
					.texImage2D(_.TEXTURE_CUBE_MAP_NEGATIVE_Y, 0, _.RGBA, _.RGBA, _.UNSIGNED_BYTE, e[5])
			} else r && _.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0), _.texImage2D(_
				.TEXTURE_CUBE_MAP_POSITIVE_Z, 0, h, h, _.UNSIGNED_BYTE, e[0]), _.texImage2D(_
				.TEXTURE_CUBE_MAP_NEGATIVE_Z, 0, h, h, _.UNSIGNED_BYTE, e[1]), _.texImage2D(_
				.TEXTURE_CUBE_MAP_POSITIVE_X, 0, h, h, _.UNSIGNED_BYTE, e[2]), _.texImage2D(_
				.TEXTURE_CUBE_MAP_NEGATIVE_X, 0, h, h, _.UNSIGNED_BYTE, e[3]), _.texImage2D(_
				.TEXTURE_CUBE_MAP_POSITIVE_Y, 0, h, h, _.UNSIGNED_BYTE, e[4]), _.texImage2D(_
				.TEXTURE_CUBE_MAP_NEGATIVE_Y, 0, h, h, _.UNSIGNED_BYTE, e[5]), r && _.pixelStorei(_
				.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1);
			this._mipmap && this._isPot(i) && this._isPot(a) ? (_.generateMipmap(this._glTextureType), this
					._setGPUMemory(i * a * 4 * (1 + 1 / 3) * 6)) : this._setGPUMemory(i * a * 4 * 6), this
				._setWarpMode(_.TEXTURE_WRAP_S, this._wrapModeU), this._setWarpMode(_.TEXTURE_WRAP_T, this
					._wrapModeV), this._setFilterMode(this._filterMode), this._readyed = !0, this
				._activeResource()
		}
		setSixSidePixels(e, r = 0) {
			if (!e) throw new Error("TextureCube:pixels can't be null.");
			var i = Math.max(this._width >> r, 1),
				a = Math.max(this._height >> r, 1),
				n = i * a * this._getFormatByteCount();
			if (e[0].length < n) throw "TextureCube:pixels length should at least " + n + ".";
			if (this._setPixels(e, r, i, a), 0 === r) {
				var s = t.LayaGL.instance;
				this._setWarpMode(s.TEXTURE_WRAP_S, this._wrapModeU), this._setWarpMode(s.TEXTURE_WRAP_T, this
					._wrapModeV)
			}
			this._readyed = !0, this._activeResource()
		}
		_recoverResource() {}
	}
	Hr.TEXTURECUBE = "TEXTURECUBE";
	var Wr =
		"#ifdef FSHIGHPRECISION\r\n\tprecision highp float;\r\n#else\r\n\tprecision mediump float;\r\n#endif\r\n\r\nuniform sampler2D u_MainTex;\r\nvarying vec2 v_Texcoord0;\r\n\r\nvoid main() {\r\n\tgl_FragColor = texture2D(u_MainTex, v_Texcoord0);\r\n}\r\n\r\n",
		kr =
		'#include "Lighting.glsl";\r\n\r\nattribute vec4 a_PositionTexcoord;\r\nvarying vec2 v_Texcoord0;\r\n\r\nvoid main() {\r\n\tgl_Position = vec4(a_PositionTexcoord.xy, 0.0, 1.0);\r\n\tv_Texcoord0 = a_PositionTexcoord.zw;\r\n\tgl_Position = remapGLPositionZ(gl_Position);\r\n}',
		Xr =
		"#ifdef HIGHPRECISION\r\n\tprecision highp float;\r\n#else\r\n\tprecision mediump float;\r\n#endif\r\n\r\n#ifdef COLOR\r\n\tvarying vec4 v_Color;\r\n#endif\r\nvarying vec2 v_Texcoord0;\r\n\r\n#ifdef MAINTEXTURE\r\n\tuniform sampler2D u_AlbedoTexture;\r\n#endif\r\n\r\nuniform vec4 u_AlbedoColor;\r\n\r\n#ifdef FOG\r\n\tuniform float u_FogStart;\r\n\tuniform float u_FogRange;\r\n\t#ifdef ADDTIVEFOG\r\n\t#else\r\n\t\tuniform vec3 u_FogColor;\r\n\t#endif\r\n#endif\r\n\r\nvoid main()\r\n{\r\n\tvec4 color =  2.0 * u_AlbedoColor;\r\n\t#ifdef COLOR\r\n\t\tcolor *= v_Color;\r\n\t#endif\r\n\t#ifdef MAINTEXTURE\r\n\t\tcolor *= texture2D(u_AlbedoTexture, v_Texcoord0);\r\n\t#endif\r\n\t\r\n\tgl_FragColor = color;\r\n\t\r\n\t#ifdef FOG\r\n\t\tfloat lerpFact = clamp((1.0 / gl_FragCoord.w - u_FogStart) / u_FogRange, 0.0, 1.0);\r\n\t\t#ifdef ADDTIVEFOG\r\n\t\t\tgl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.0), lerpFact);\r\n\t\t#else\r\n\t\t\tgl_FragColor.rgb = mix(gl_FragColor.rgb, u_FogColor, lerpFact);\r\n\t\t#endif\r\n\t#endif\r\n}\r\n\r\n",
		Yr =
		'#include "Lighting.glsl";\r\n\r\nattribute vec4 a_Position;\r\nattribute vec4 a_Color;\r\nattribute vec2 a_Texcoord0;\r\n\r\n#ifdef GPU_INSTANCE\r\n\tattribute mat4 a_MvpMatrix;\r\n#else\r\n\tuniform mat4 u_MvpMatrix;\r\n#endif\r\n\r\n#ifdef COLOR\r\n\tvarying vec4 v_Color;\r\n#endif\r\nvarying vec2 v_Texcoord0;\r\n\r\n#ifdef TILINGOFFSET\r\n\tuniform vec4 u_TilingOffset;\r\n#endif\r\n\r\n#ifdef BONE\r\n\tconst int c_MaxBoneCount = 24;\r\n\tattribute vec4 a_BoneIndices;\r\n\tattribute vec4 a_BoneWeights;\r\n\tuniform mat4 u_Bones[c_MaxBoneCount];\r\n#endif\r\n\r\nvoid main()\r\n{\r\n\tvec4 position;\r\n\t#ifdef BONE\r\n\t\tmat4 skinTransform = u_Bones[int(a_BoneIndices.x)] * a_BoneWeights.x;\r\n\t\tskinTransform += u_Bones[int(a_BoneIndices.y)] * a_BoneWeights.y;\r\n\t\tskinTransform += u_Bones[int(a_BoneIndices.z)] * a_BoneWeights.z;\r\n\t\tskinTransform += u_Bones[int(a_BoneIndices.w)] * a_BoneWeights.w;\r\n\t\tposition=skinTransform*a_Position;\r\n\t#else\r\n\t\tposition=a_Position;\r\n\t#endif\r\n\t#ifdef GPU_INSTANCE\r\n\t\tgl_Position = a_MvpMatrix * position;\r\n\t#else\r\n\t\tgl_Position = u_MvpMatrix * position;\r\n\t#endif\r\n\t\r\n\t#ifdef TILINGOFFSET\r\n\t\tv_Texcoord0=TransformUV(a_Texcoord0,u_TilingOffset);\r\n\t#else\r\n\t\tv_Texcoord0=a_Texcoord0;\r\n\t#endif\r\n\t\t\r\n\t#ifdef COLOR\r\n\t\tv_Color = a_Color;\r\n\t#endif\r\n\tgl_Position=remapGLPositionZ(gl_Position);\r\n}',
		Zr =
		'#ifdef HIGHPRECISION\r\n\tprecision highp float;\r\n#else\r\n\tprecision mediump float;\r\n#endif\r\n\r\n#include "Lighting.glsl";\r\n\r\n#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)||defined(FOG)\r\n\tuniform vec3 u_CameraPos;\r\n\tvarying vec3 v_Normal;\r\n\tvarying vec3 v_PositionWorld;\r\n#endif\r\n\r\n#ifdef FOG\r\n\tuniform float u_FogStart;\r\n\tuniform float u_FogRange;\r\n\tuniform vec3 u_FogColor;\r\n#endif\r\n\r\n\r\n#ifdef DIRECTIONLIGHT\r\n\tuniform DirectionLight u_DirectionLight;\r\n#endif\r\n\r\n#ifdef POINTLIGHT\r\n\tuniform PointLight u_PointLight;\r\n#endif\r\n\r\n#ifdef SPOTLIGHT\r\n\tuniform SpotLight u_SpotLight;\r\n#endif\r\n\r\n#include "ShadowHelper.glsl"\r\n#ifdef RECEIVESHADOW\r\n\t#if defined(SHADOWMAP_PSSM2)||defined(SHADOWMAP_PSSM3)\r\n\tuniform mat4 u_lightShadowVP[4];\r\n\t#endif\r\n\t#ifdef SHADOWMAP_PSSM1 \r\n\tvarying vec4 v_lightMVPPos;\r\n\t#endif\r\n#endif\r\nvarying float v_posViewZ;\r\n\r\nuniform vec3 u_AmbientColor;\r\n\r\nuniform sampler2D u_SplatAlphaTexture;\r\n\r\nuniform sampler2D u_DiffuseTexture1;\r\nuniform sampler2D u_DiffuseTexture2;\r\nuniform sampler2D u_DiffuseTexture3;\r\nuniform sampler2D u_DiffuseTexture4;\r\nuniform sampler2D u_DiffuseTexture5;\r\n\r\nuniform vec4 u_DiffuseScaleOffset1;\r\nuniform vec4 u_DiffuseScaleOffset2;\r\nuniform vec4 u_DiffuseScaleOffset3;\r\nuniform vec4 u_DiffuseScaleOffset4;\r\nuniform vec4 u_DiffuseScaleOffset5;\r\n\r\nvarying vec2 v_Texcoord0;\r\n\r\n#ifdef LIGHTMAP\r\n\tuniform sampler2D u_LightMap;\r\n\tvarying vec2 v_LightMapUV;\r\n#endif\r\n\r\nvoid main()\r\n{\r\n\tvec4 splatAlpha = vec4(1.0);\r\n\t#ifdef ExtendTerrain_DETAIL_NUM1\r\n\t\tsplatAlpha = texture2D(u_SplatAlphaTexture, v_Texcoord0);\r\n\t\tvec4 color1 = texture2D(u_DiffuseTexture1, v_Texcoord0 * u_DiffuseScaleOffset1.xy);\r\n\t\tgl_FragColor.xyz = color1.xyz * splatAlpha.r;\r\n\t#endif\r\n\t#ifdef ExtendTerrain_DETAIL_NUM2\r\n\t\tsplatAlpha = texture2D(u_SplatAlphaTexture, v_Texcoord0);\r\n\t\tvec4 color1 = texture2D(u_DiffuseTexture1, v_Texcoord0 * u_DiffuseScaleOffset1.xy);\r\n\t\tvec4 color2 = texture2D(u_DiffuseTexture2, v_Texcoord0 * u_DiffuseScaleOffset2.xy);\r\n\t\tgl_FragColor.xyz = color1.xyz * splatAlpha.r + color2.xyz * (1.0 - splatAlpha.r);\r\n\t#endif\r\n\t#ifdef ExtendTerrain_DETAIL_NUM3\r\n\t\tsplatAlpha = texture2D(u_SplatAlphaTexture, v_Texcoord0);\r\n\t\tvec4 color1 = texture2D(u_DiffuseTexture1, v_Texcoord0 * u_DiffuseScaleOffset1.xy);\r\n\t\tvec4 color2 = texture2D(u_DiffuseTexture2, v_Texcoord0 * u_DiffuseScaleOffset2.xy);\r\n\t\tvec4 color3 = texture2D(u_DiffuseTexture3, v_Texcoord0 * u_DiffuseScaleOffset3.xy);\r\n\t\tgl_FragColor.xyz = color1.xyz * splatAlpha.r  + color2.xyz * splatAlpha.g + color3.xyz * (1.0 - splatAlpha.r - splatAlpha.g);\r\n\t#endif\r\n\t#ifdef ExtendTerrain_DETAIL_NUM4\r\n\t\tsplatAlpha = texture2D(u_SplatAlphaTexture, v_Texcoord0);\r\n\t\tvec4 color1 = texture2D(u_DiffuseTexture1, v_Texcoord0 * u_DiffuseScaleOffset1.xy);\r\n\t\tvec4 color2 = texture2D(u_DiffuseTexture2, v_Texcoord0 * u_DiffuseScaleOffset2.xy);\r\n\t\tvec4 color3 = texture2D(u_DiffuseTexture3, v_Texcoord0 * u_DiffuseScaleOffset3.xy);\r\n\t\tvec4 color4 = texture2D(u_DiffuseTexture4, v_Texcoord0 * u_DiffuseScaleOffset4.xy);\r\n\t\tgl_FragColor.xyz = color1.xyz * splatAlpha.r  + color2.xyz * splatAlpha.g + color3.xyz * splatAlpha.b + color4.xyz * (1.0 - splatAlpha.r - splatAlpha.g - splatAlpha.b);\r\n\t#endif\r\n\t#ifdef ExtendTerrain_DETAIL_NUM5\r\n\t\tsplatAlpha = texture2D(u_SplatAlphaTexture, v_Texcoord0);\r\n\t\tvec4 color1 = texture2D(u_DiffuseTexture1, v_Texcoord0 * u_DiffuseScaleOffset1.xy);\r\n\t\tvec4 color2 = texture2D(u_DiffuseTexture2, v_Texcoord0 * u_DiffuseScaleOffset2.xy);\r\n\t\tvec4 color3 = texture2D(u_DiffuseTexture3, v_Texcoord0 * u_DiffuseScaleOffset3.xy);\r\n\t\tvec4 color4 = texture2D(u_DiffuseTexture4, v_Texcoord0 * u_DiffuseScaleOffset4.xy);\r\n\t\tvec4 color5 = texture2D(u_DiffuseTexture5, v_Texcoord0 * u_DiffuseScaleOffset5.xy);\r\n\t\tgl_FragColor.xyz = color1.xyz * splatAlpha.r  + color2.xyz * splatAlpha.g + color3.xyz * splatAlpha.b + color4.xyz * splatAlpha.a + color5.xyz * (1.0 - splatAlpha.r - splatAlpha.g - splatAlpha.b - splatAlpha.a);\r\n\t#endif\r\n\t\tgl_FragColor.w = splatAlpha.a;\r\n\t\t\r\n#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n    vec3 normal = v_Normal;\r\n\tvec3 dif, spe;\r\n#endif\r\n\r\nvec3 diffuse = vec3(0.0);\r\nvec3 specular= vec3(0.0);\r\n#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)||defined(FOG)\r\n\tvec3 toEye;\r\n\t#ifdef FOG\r\n\t\ttoEye=u_CameraPos-v_PositionWorld;\r\n\t\tfloat toEyeLength=length(toEye);\r\n\t\ttoEye/=toEyeLength;\r\n\t#else\r\n\t\ttoEye=normalize(u_CameraPos-v_PositionWorld);\r\n\t#endif\r\n#endif\r\n\r\n#ifdef DIRECTIONLIGHT\r\n\tLayaAirBlinnPhongDiectionLight(vec3(0.0), 1.0, normal, vec3(1.0), toEye,u_DirectionLight, dif, spe);\r\n\tdiffuse+=dif;\r\n\tspecular+=spe;\r\n#endif\r\n \r\n#ifdef POINTLIGHT\r\n\tLayaAirBlinnPhongPointLight(v_PositionWorld, vec3(0.0), 1.0, normal, vec3(1.0), toEye, u_PointLight, dif, spe);\r\n\tdiffuse+=dif;\r\n\tspecular+=spe;\r\n#endif\r\n\r\n#ifdef SPOTLIGHT\r\n\tLayaAirBlinnPhongSpotLight(v_PositionWorld, vec3(0.0), 1.0, normal, vec3(1.0), toEye, u_SpotLight, dif, spe);\r\n\tdiffuse+=dif;\r\n\tspecular+=spe;\r\n#endif\r\n\r\nvec3 globalDiffuse = u_AmbientColor;\r\n#ifdef LIGHTMAP\r\n\tglobalDiffuse += DecodeLightmap(texture2D(u_LightMap, v_LightMapUV));\r\n#endif\r\n\r\n#ifdef RECEIVESHADOW\r\n\tfloat shadowValue = 1.0;\r\n\t#ifdef SHADOWMAP_PSSM3\r\n\t\tshadowValue = getShadowPSSM3( u_shadowMap1,u_shadowMap2,u_shadowMap3,u_lightShadowVP,u_shadowPSSMDistance,u_shadowPCFoffset,v_PositionWorld,v_posViewZ,0.001);\r\n\t#endif\r\n\t#ifdef SHADOWMAP_PSSM2\r\n\t\tshadowValue = getShadowPSSM2( u_shadowMap1,u_shadowMap2,u_lightShadowVP,u_shadowPSSMDistance,u_shadowPCFoffset,v_PositionWorld,v_posViewZ,0.001);\r\n\t#endif \r\n\t#ifdef SHADOWMAP_PSSM1\r\n\t\tshadowValue = getShadowPSSM1( u_shadowMap1,v_lightMVPPos,u_shadowPSSMDistance,u_shadowPCFoffset,v_posViewZ,0.001);\r\n\t#endif\r\n\tgl_FragColor = vec4(gl_FragColor.rgb * (globalDiffuse + diffuse) * shadowValue, gl_FragColor.a);\r\n#else\r\n\tgl_FragColor = vec4(gl_FragColor.rgb * (globalDiffuse + diffuse), gl_FragColor.a);\r\n#endif\r\n\r\n#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n\t#ifdef RECEIVESHADOW\r\n\t\tgl_FragColor.rgb += specular * shadowValue;\r\n\t#else\r\n\t\tgl_FragColor.rgb += specular;\r\n\t#endif\r\n#endif\r\n\r\n#ifdef FOG\r\n\tfloat lerpFact=clamp((toEyeLength-u_FogStart)/u_FogRange,0.0,1.0);\r\n\tgl_FragColor.rgb=mix(gl_FragColor.rgb,u_FogColor,lerpFact);\r\n#endif\r\n}\r\n\r\n\r\n\r\n\r\n\r\n',
		jr =
		'#include "Lighting.glsl";\r\n\r\nattribute vec4 a_Position;\r\nattribute vec2 a_Texcoord0;\r\n\r\nuniform mat4 u_MvpMatrix;\r\n\r\nvarying vec2 v_Texcoord0;\r\n\r\n#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)||defined(LIGHTMAP)\r\n\tattribute vec3 a_Normal;\r\n\tvarying vec3 v_Normal;\r\n#endif\r\n\r\n#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)||defined(FOG)||(defined(RECEIVESHADOW)&&defined(SHADOWMAP_PSSM1))\r\n\tuniform mat4 u_WorldMat;\r\n\tvarying vec3 v_PositionWorld;\r\n#endif\r\n\r\n#ifdef LIGHTMAP\r\n\tvarying vec2 v_LightMapUV;\r\n\tuniform vec4 u_LightmapScaleOffset;\r\n#endif\r\n\r\n#ifdef RECEIVESHADOW\r\n\tvarying float v_posViewZ;\r\n\t#ifdef SHADOWMAP_PSSM1 \r\n\t\tvarying vec4 v_lightMVPPos;\r\n\t\tuniform mat4 u_lightShadowVP[4];\r\n\t#endif\r\n#endif\r\n\r\nvoid main()\r\n{\r\n\tgl_Position = u_MvpMatrix * a_Position;\r\n  \r\n\tv_Texcoord0 = a_Texcoord0;\r\n  \r\n\t#ifdef LIGHTMAP\r\n\t\tv_LightMapUV = vec2(a_Texcoord0.x, 1.0 - a_Texcoord0.y) * u_LightmapScaleOffset.xy + u_LightmapScaleOffset.zw;\r\n\t\tv_LightMapUV.y = 1.0 - v_LightMapUV.y;\r\n\t#endif\r\n  \r\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n\t\tv_Normal = a_Normal;\r\n\t#endif\r\n\r\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)||defined(FOG)||(defined(RECEIVESHADOW)&&defined(SHADOWMAP_PSSM1))\r\n\t\tv_PositionWorld=(u_WorldMat*a_Position).xyz;\r\n\t#endif\r\n\r\n\t#ifdef RECEIVESHADOW\r\n\t\tv_posViewZ = gl_Position.w;\r\n\t\t#ifdef SHADOWMAP_PSSM1\r\n\t\t\tv_lightMVPPos = u_lightShadowVP[0] * vec4(v_PositionWorld,1.0);\r\n\t\t#endif\r\n\t#endif\r\n\tgl_Position=remapGLPositionZ(gl_Position);\r\n}',
		qr =
		"struct DirectionLight {\r\n\tvec3 color;\r\n\tvec3 direction;\r\n};\r\n\r\nstruct PointLight {\r\n\tvec3 color;\r\n\tvec3 position;\r\n\tfloat range;\r\n};\r\n\r\nstruct SpotLight {\r\n\tvec3 color;\r\n\tvec3 position;\r\n\tfloat range;\r\n\tvec3 direction;\r\n\tfloat spot;\r\n};\r\n\r\n\r\n\r\nconst int c_ClusterBufferWidth = CLUSTER_X_COUNT*CLUSTER_Y_COUNT;\r\nconst int c_ClusterBufferHeight = CLUSTER_Z_COUNT*(1+int(ceil(float(MAX_LIGHT_COUNT_PER_CLUSTER)/4.0)));\r\nconst int c_ClusterBufferFloatWidth = c_ClusterBufferWidth*4;\r\n\r\nivec4 getClusterInfo(sampler2D clusterBuffer,mat4 viewMatrix,vec4 viewport,vec3 position,vec4 fragCoord,vec4 projectParams)\r\n{\r\n\tvec3 viewPos = vec3(viewMatrix*vec4(position, 1.0)); //position in viewspace\r\n\r\n\tint clusterXIndex = int(floor(fragCoord.x/ (float(viewport.z)/float(CLUSTER_X_COUNT))));\r\n    int clusterYIndex = int(floor((viewport.w * (projectParams.z <0.0? 0.0 : 1.0) - fragCoord.y * projectParams.z)/ (float(viewport.w)/float(CLUSTER_Y_COUNT))));//Maybe Flipped ProjectMatrix\r\n\tfloat zSliceParam =float(CLUSTER_Z_COUNT)/log2(projectParams.y / projectParams.x);\r\n \tint clusterZIndex = int(floor(log2(-viewPos.z) * zSliceParam- log2(projectParams.x) * zSliceParam));//projectParams x:cameraNear y:cameraFar\r\n\r\n\tvec2 uv= vec2((float(clusterXIndex + clusterYIndex * CLUSTER_X_COUNT)+0.5)/float(c_ClusterBufferWidth),\r\n\t\t\t\t(float(clusterZIndex)+0.5)/float(c_ClusterBufferHeight));\r\n\tvec4 clusterPixel=texture2D(clusterBuffer, uv);\r\n\treturn ivec4(clusterPixel);//X:Point Count Y:Spot Count Z、W:Light Offset\r\n}\r\n\r\n\r\nint getLightIndex(sampler2D clusterBuffer,int offset,int index) \r\n{\r\n\tint totalOffset=offset+index;\r\n\tint row=totalOffset/c_ClusterBufferFloatWidth;\r\n\tint lastRowFloat=totalOffset-row*c_ClusterBufferFloatWidth;\r\n\tint col=lastRowFloat/4;\r\n\tvec2 uv=vec2((float(col)+0.5)/float(c_ClusterBufferWidth),\r\n\t\t\t\t(float(row)+0.5)/float(c_ClusterBufferHeight));\r\n\tvec4 texel = texture2D(clusterBuffer, uv);\r\n    int pixelComponent = lastRowFloat-col*4;\r\n    if (pixelComponent == 0) \r\n      return int(texel.x);\r\n    else if (pixelComponent == 1) \r\n      return int(texel.y);\r\n    else if (pixelComponent == 2) \r\n      return int(texel.z);\r\n    else if (pixelComponent == 3) \r\n      return int(texel.w);\r\n}\r\n\r\nDirectionLight getDirectionLight(sampler2D lightBuffer,int index) \r\n{\r\n    DirectionLight light;\r\n    float v = (float(index)+0.5)/ float(MAX_LIGHT_COUNT);\r\n    vec4 p1 = texture2D(lightBuffer, vec2(0.125,v));\r\n    vec4 p2 = texture2D(lightBuffer, vec2(0.375,v));\r\n\tlight.color=p1.rgb;\r\n    light.direction = p2.rgb;\r\n    return light;\r\n}\r\n\r\nPointLight getPointLight(sampler2D lightBuffer,sampler2D clusterBuffer,ivec4 clusterInfo,int index) \r\n{\r\n    PointLight light;\r\n\tint pointIndex=getLightIndex(clusterBuffer,clusterInfo.z*c_ClusterBufferFloatWidth+clusterInfo.w,index);\r\n    float v = (float(pointIndex)+0.5)/ float(MAX_LIGHT_COUNT);\r\n    vec4 p1 = texture2D(lightBuffer, vec2(0.125,v));\r\n    vec4 p2 = texture2D(lightBuffer, vec2(0.375,v));\r\n\tlight.color=p1.rgb;\r\n\tlight.range = p1.a;\r\n    light.position = p2.rgb;\r\n    return light;\r\n}\r\n\r\nSpotLight getSpotLight(sampler2D lightBuffer,sampler2D clusterBuffer,ivec4 clusterInfo,int index) \r\n{\r\n    SpotLight light;\r\n\tint spoIndex=getLightIndex(clusterBuffer,clusterInfo.z*c_ClusterBufferFloatWidth+clusterInfo.w,clusterInfo.x+index);\r\n    float v = (float(spoIndex)+0.5)/ float(MAX_LIGHT_COUNT);\r\n    vec4 p1 = texture2D(lightBuffer, vec2(0.125,v));\r\n    vec4 p2 = texture2D(lightBuffer, vec2(0.375,v));\r\n\tvec4 p3 = texture2D(lightBuffer, vec2(0.625,v));\r\n    light.color = p1.rgb;\r\n\tlight.range=p1.a;\r\n    light.position = p2.rgb;\r\n\tlight.spot = p2.a;\r\n\tlight.direction = p3.rgb;\r\n    return light;\r\n}\r\n\r\n\r\n\r\n// Laya中使用衰减纹理\r\nfloat LayaAttenuation(in vec3 L,in float invLightRadius) {\r\n\tfloat fRatio = clamp(length(L) * invLightRadius,0.0,1.0);\r\n\tfRatio *= fRatio;\r\n\treturn 1.0 / (1.0 + 25.0 * fRatio)* clamp(4.0*(1.0 - fRatio),0.0,1.0); //fade to black as if 4 pixel texture\r\n}\r\n\r\n// Same as Just Cause 2 and Crysis 2 (you can read GPU Pro 1 book for more information)\r\nfloat BasicAttenuation(in vec3 L,in float invLightRadius) {\r\n\tvec3 distance = L * invLightRadius;\r\n\tfloat attenuation = clamp(1.0 - dot(distance, distance),0.0,1.0); // Equals float attenuation = saturate(1.0f - dot(L, L) / (lightRadius *  lightRadius));\r\n\treturn attenuation * attenuation;\r\n}\r\n\r\n// Inspired on http://fools.slindev.com/viewtopic.php?f=11&t=21&view=unread#unread\r\nfloat NaturalAttenuation(in vec3 L,in float invLightRadius) {\r\n\tfloat attenuationFactor = 30.0;\r\n\tvec3 distance = L * invLightRadius;\r\n\tfloat attenuation = dot(distance, distance); // Equals float attenuation = dot(L, L) / (lightRadius *  lightRadius);\r\n\tattenuation = 1.0 / (attenuation * attenuationFactor + 1.0);\r\n\t// Second we move down the function therewith it reaches zero at abscissa 1:\r\n\tattenuationFactor = 1.0 / (attenuationFactor + 1.0); //attenuationFactor contains now the value we have to subtract\r\n\tattenuation = max(attenuation - attenuationFactor, 0.0); // The max fixes a bug.\r\n\t// Finally we expand the equation along the y-axis so that it starts with a function value of 1 again.\r\n\tattenuation /= 1.0 - attenuationFactor;\r\n\treturn attenuation;\r\n}\r\n\r\nvoid LayaAirBlinnPhongLight (in vec3 specColor,in float specColorIntensity,in vec3 normal,in vec3 gloss, in vec3 viewDir,in vec3 lightColor, in vec3 lightVec,out vec3 diffuseColor,out vec3 specularColor) {\r\n\tmediump vec3 h = normalize(viewDir-lightVec);\r\n\tlowp float ln = max (0.0, dot (-lightVec,normal));\r\n\tfloat nh = max (0.0, dot (h,normal));\r\n\tdiffuseColor=lightColor * ln;\r\n\tspecularColor=lightColor *specColor*pow (nh, specColorIntensity*128.0) * gloss;\r\n}\r\n\r\nvoid LayaAirBlinnPhongDiectionLight (in vec3 specColor,in float specColorIntensity,in vec3 normal,in vec3 gloss, in vec3 viewDir, in DirectionLight light,out vec3 diffuseColor,out vec3 specularColor) {\r\n\tvec3 lightVec=normalize(light.direction);\r\n\tLayaAirBlinnPhongLight(specColor,specColorIntensity,normal,gloss,viewDir,light.color,lightVec,diffuseColor,specularColor);\r\n}\r\n\r\nvoid LayaAirBlinnPhongPointLight (in vec3 pos,in vec3 specColor,in float specColorIntensity,in vec3 normal,in vec3 gloss, in vec3 viewDir, in PointLight light,out vec3 diffuseColor,out vec3 specularColor) {\r\n\tvec3 lightVec =  pos-light.position;\r\n\tLayaAirBlinnPhongLight(specColor,specColorIntensity,normal,gloss,viewDir,light.color,lightVec/length(lightVec),diffuseColor,specularColor);\r\n\tfloat attenuate = LayaAttenuation(lightVec, 1.0/light.range);\r\n\tdiffuseColor *= attenuate;\r\n\tspecularColor*= attenuate;\r\n}\r\n\r\nvoid LayaAirBlinnPhongSpotLight (in vec3 pos,in vec3 specColor,in float specColorIntensity,in vec3 normal,in vec3 gloss, in vec3 viewDir, in SpotLight light,out vec3 diffuseColor,out vec3 specularColor) {\r\n\tvec3 lightVec =  pos-light.position;\r\n\tvec3 normalLightVec=lightVec/length(lightVec);\r\n\tLayaAirBlinnPhongLight(specColor,specColorIntensity,normal,gloss,viewDir,light.color,normalLightVec,diffuseColor,specularColor);\r\n\tvec2 cosAngles=cos(vec2(light.spot,light.spot*0.5)*0.5);//ConeAttenuation\r\n\tfloat dl=dot(normalize(light.direction),normalLightVec);\r\n\tdl*=smoothstep(cosAngles[0],cosAngles[1],dl);\r\n\tfloat attenuate = LayaAttenuation(lightVec, 1.0/light.range)*dl;\r\n\tdiffuseColor *=attenuate;\r\n\tspecularColor *=attenuate;\r\n}\r\n\r\nvec3 NormalSampleToWorldSpace(vec3 normalMapSample, vec3 unitNormal, vec3 tangent,vec3 binormal) {\r\n\tvec3 normalT =vec3(2.0*normalMapSample.x - 1.0,1.0-2.0*normalMapSample.y,2.0*normalMapSample.z - 1.0);\r\n\r\n\t// Build orthonormal basis.\r\n\tvec3 N = normalize(unitNormal);\r\n\tvec3 T = normalize(tangent);\r\n\tvec3 B = normalize(binormal);\r\n\tmat3 TBN = mat3(T, B, N);\r\n\r\n\t// Transform from tangent space to world space.\r\n\tvec3 bumpedNormal = TBN*normalT;\r\n\r\n\treturn bumpedNormal;\r\n}\r\n\r\nvec3 NormalSampleToWorldSpace1(vec4 normalMapSample, vec3 tangent, vec3 binormal, vec3 unitNormal) {\r\n\tvec3 normalT;\r\n\tnormalT.x = 2.0 * normalMapSample.x - 1.0;\r\n\tnormalT.y = 1.0 - 2.0 * normalMapSample.y;\r\n\tnormalT.z = sqrt(1.0 - clamp(dot(normalT.xy, normalT.xy), 0.0, 1.0));\r\n\r\n\tvec3 T = normalize(tangent);\r\n\tvec3 B = normalize(binormal);\r\n\tvec3 N = normalize(unitNormal);\r\n\tmat3 TBN = mat3(T, B, N);\r\n\r\n\t// Transform from tangent space to world space.\r\n\tvec3 bumpedNormal = TBN * normalize(normalT);\r\n\r\n\treturn bumpedNormal;\r\n}\r\n\r\nvec3 DecodeLightmap(vec4 color) {\r\n\treturn color.rgb*color.a*5.0;\r\n}\r\n\r\nvec2 TransformUV(vec2 texcoord,vec4 tilingOffset) {\r\n\tvec2 transTexcoord=vec2(texcoord.x,texcoord.y-1.0)*tilingOffset.xy+vec2(tilingOffset.z,-tilingOffset.w);\r\n\ttransTexcoord.y+=1.0;\r\n\treturn transTexcoord;\r\n}\r\n\r\nvec4 remapGLPositionZ(vec4 position) {\r\n\tposition.z=position.z * 2.0 - position.w;\r\n\treturn position;\r\n}\r\n\r\nmat3 inverse(mat3 m) {\r\n  float a00 = m[0][0], a01 = m[0][1], a02 = m[0][2];\r\n  float a10 = m[1][0], a11 = m[1][1], a12 = m[1][2];\r\n  float a20 = m[2][0], a21 = m[2][1], a22 = m[2][2];\r\n\r\n  float b01 = a22 * a11 - a12 * a21;\r\n  float b11 = -a22 * a10 + a12 * a20;\r\n  float b21 = a21 * a10 - a11 * a20;\r\n\r\n  float det = a00 * b01 + a01 * b11 + a02 * b21;\r\n\r\n  return mat3(b01, (-a22 * a01 + a02 * a21), (a12 * a01 - a02 * a11),\r\n              b11, (a22 * a00 - a02 * a20), (-a12 * a00 + a02 * a10),\r\n              b21, (-a21 * a00 + a01 * a20), (a11 * a00 - a01 * a10)) / det;\r\n}\r\n\r\n",
		Qr =
		"#ifdef HIGHPRECISION\r\nprecision highp float;\r\n#else\r\nprecision mediump float;\r\n#endif\r\n\r\nvarying vec4 v_Color;\r\nuniform vec4 u_Color;\r\n\r\nvoid main()\r\n{\r\n  gl_FragColor = v_Color * u_Color; \r\n}\r\n\r\n",
		Kr =
		'#include "Lighting.glsl";\r\n\r\nattribute vec4 a_Position;\r\nuniform mat4 u_MvpMatrix;\r\nuniform vec4 u_Color;\r\nattribute vec4 a_Color;\r\nvarying vec4 v_Color;\r\n\r\n\r\nvoid main()\r\n{\r\n\tgl_Position = u_MvpMatrix * a_Position;\r\n\tv_Color=a_Color*u_Color;\r\n\tgl_Position=remapGLPositionZ(gl_Position);\r\n}',
		Jr =
		'#ifdef HIGHPRECISION\r\n\tprecision highp float;\r\n\tprecision highp int;\r\n#else\r\n\tprecision mediump float;\r\n\tprecision mediump int;\r\n#endif\r\n\r\n#include "Lighting.glsl";\r\n\r\nuniform vec4 u_DiffuseColor;\r\n\r\n#if defined(COLOR)&&defined(ENABLEVERTEXCOLOR)\r\n\tvarying vec4 v_Color;\r\n#endif\r\n\r\n#ifdef ALPHATEST\r\n\tuniform float u_AlphaTestValue;\r\n#endif\r\n\r\n#ifdef DIFFUSEMAP\r\n\tuniform sampler2D u_DiffuseTexture;\r\n#endif\r\n\r\n\r\n#if defined(DIFFUSEMAP)||((defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))&&(defined(SPECULARMAP)||defined(NORMALMAP)))\r\n\tvarying vec2 v_Texcoord0;\r\n#endif\r\n\r\n#ifdef LIGHTMAP\r\n\tvarying vec2 v_LightMapUV;\r\n\tuniform sampler2D u_LightMap;\r\n#endif\r\n\r\n#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n\tvarying vec3 v_Normal;\r\n\tvarying vec3 v_ViewDir; \r\n\r\n\tuniform vec3 u_MaterialSpecular;\r\n\tuniform float u_Shininess;\r\n\r\n\t#ifdef LEGACYSINGLELIGHTING\r\n\t\t#ifdef DIRECTIONLIGHT\r\n\t\t\tuniform DirectionLight u_DirectionLight;\r\n\t\t#endif\r\n\t\t#ifdef POINTLIGHT\r\n\t\t\tuniform PointLight u_PointLight;\r\n\t\t#endif\r\n\t\t#ifdef SPOTLIGHT\r\n\t\t\tuniform SpotLight u_SpotLight;\r\n\t\t#endif\r\n\t#else\r\n\t\tuniform mat4 u_View;\r\n\t\tuniform vec4 u_ProjectionParams;\r\n\t\tuniform vec4 u_Viewport;\r\n\t\tuniform int u_DirationLightCount;\r\n\t\tuniform sampler2D u_LightBuffer;\r\n\t\tuniform sampler2D u_LightClusterBuffer;\r\n\t#endif\r\n\r\n\t#ifdef SPECULARMAP \r\n\t\tuniform sampler2D u_SpecularTexture;\r\n\t#endif\r\n\t#ifdef NORMALMAP \r\n\t\tuniform sampler2D u_NormalTexture;\r\n\t\tvarying vec3 v_Tangent;\r\n\t\tvarying vec3 v_Binormal;\r\n\t#endif\r\n#endif\r\n\r\n#ifdef FOG\r\n\tuniform float u_FogStart;\r\n\tuniform float u_FogRange;\r\n\tuniform vec3 u_FogColor;\r\n#endif\r\n\r\n\r\nuniform vec3 u_AmbientColor;\r\n\r\n#if defined(POINTLIGHT)||defined(SPOTLIGHT)||defined(RECEIVESHADOW)\r\n\tvarying vec3 v_PositionWorld;\r\n#endif\r\n\r\n#include "ShadowHelper.glsl"\r\nvarying float v_posViewZ;\r\n#ifdef RECEIVESHADOW\r\n\t#if defined(SHADOWMAP_PSSM2)||defined(SHADOWMAP_PSSM3)\r\n\t\tuniform mat4 u_lightShadowVP[4];\r\n\t#endif\r\n\t#ifdef SHADOWMAP_PSSM1 \r\n\t\tvarying vec4 v_lightMVPPos;\r\n\t#endif\r\n#endif\r\n\r\nvoid main_castShadow()\r\n{\r\n\t//gl_FragColor=vec4(v_posViewZ,0.0,0.0,1.0);\r\n\tgl_FragColor=packDepth(v_posViewZ);\r\n\t#if defined(DIFFUSEMAP)&&defined(ALPHATEST)\r\n\t\tfloat alpha = texture2D(u_DiffuseTexture,v_Texcoord0).w;\r\n\t\tif( alpha < u_AlphaTestValue )\r\n\t\t{\r\n\t\t\tdiscard;\r\n\t\t}\r\n\t#endif\r\n}\r\nvoid main_normal()\r\n{\r\n\tvec3 globalDiffuse=u_AmbientColor;\r\n\t#ifdef LIGHTMAP\t\r\n\t\tglobalDiffuse += DecodeLightmap(texture2D(u_LightMap, v_LightMapUV));\r\n\t#endif\r\n\t\r\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n\t\tvec3 normal;\r\n\t\t#if (defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))&&defined(NORMALMAP)\r\n\t\t\tvec3 normalMapSample = texture2D(u_NormalTexture, v_Texcoord0).rgb;\r\n\t\t\tnormal = normalize(NormalSampleToWorldSpace(normalMapSample, v_Normal, v_Tangent,v_Binormal));\r\n\t\t#else\r\n\t\t\tnormal = normalize(v_Normal);\r\n\t\t#endif\r\n\t\tvec3 viewDir= normalize(v_ViewDir);\r\n\t#endif\r\n\t\r\n\tvec4 mainColor=u_DiffuseColor;\r\n\t#ifdef DIFFUSEMAP\r\n\t\tvec4 difTexColor=texture2D(u_DiffuseTexture, v_Texcoord0);\r\n\t\tmainColor=mainColor*difTexColor;\r\n\t#endif \r\n\t#if defined(COLOR)&&defined(ENABLEVERTEXCOLOR)\r\n\t\tmainColor=mainColor*v_Color;\r\n\t#endif \r\n    \r\n\t#ifdef ALPHATEST\r\n\t\tif(mainColor.a<u_AlphaTestValue)\r\n\t\t\tdiscard;\r\n\t#endif\r\n  \r\n\t\r\n\tvec3 diffuse = vec3(0.0);\r\n\tvec3 specular= vec3(0.0);\r\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n\t\tvec3 dif,spe;\r\n\t\t#ifdef SPECULARMAP\r\n\t\t\tvec3 gloss=texture2D(u_SpecularTexture, v_Texcoord0).rgb;\r\n\t\t#else\r\n\t\t\t#ifdef DIFFUSEMAP\r\n\t\t\t\tvec3 gloss=vec3(difTexColor.a);\r\n\t\t\t#else\r\n\t\t\t\tvec3 gloss=vec3(1.0);\r\n\t\t\t#endif\r\n\t\t#endif\r\n\t#endif\r\n\r\n\t#ifdef LEGACYSINGLELIGHTING\r\n\t\t#ifdef DIRECTIONLIGHT\r\n\t\t\tLayaAirBlinnPhongDiectionLight(u_MaterialSpecular,u_Shininess,normal,gloss,viewDir,u_DirectionLight,dif,spe);\r\n\t\t\tdiffuse+=dif;\r\n\t\t\tspecular+=spe;\r\n\t\t#endif\r\n\t\r\n\t\t#ifdef POINTLIGHT\r\n\t\t\tLayaAirBlinnPhongPointLight(v_PositionWorld,u_MaterialSpecular,u_Shininess,normal,gloss,viewDir,u_PointLight,dif,spe);\r\n\t\t\tdiffuse+=dif;\r\n\t\t\tspecular+=spe;\r\n\t\t#endif\r\n\r\n\t\t#ifdef SPOTLIGHT\r\n\t\t\tLayaAirBlinnPhongSpotLight(v_PositionWorld,u_MaterialSpecular,u_Shininess,normal,gloss,viewDir,u_SpotLight,dif,spe);\r\n\t\t\tdiffuse+=dif;\r\n\t\t\tspecular+=spe;\r\n\t\t#endif\r\n\t#else\r\n\t\t#ifdef DIRECTIONLIGHT\r\n\t\t\tfor (int i = 0; i < MAX_LIGHT_COUNT; i++) \r\n\t\t\t{\r\n\t\t\t\tif(i >= u_DirationLightCount)\r\n\t\t\t\t\tbreak;\r\n\t\t\t\tDirectionLight directionLight = getDirectionLight(u_LightBuffer,i);\r\n\t\t\t\tLayaAirBlinnPhongDiectionLight(u_MaterialSpecular,u_Shininess,normal,gloss,viewDir,directionLight,dif,spe);\r\n\t\t\t\tdiffuse+=dif;\r\n\t\t\t\tspecular+=spe;\r\n\t\t\t}\r\n\t\t#endif\r\n\t\t#if defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n\t\t\tivec4 clusterInfo =getClusterInfo(u_LightClusterBuffer,u_View,u_Viewport, v_PositionWorld,gl_FragCoord,u_ProjectionParams);\r\n\t\t\t#ifdef POINTLIGHT\r\n\t\t\t\tfor (int i = 0; i < MAX_LIGHT_COUNT; i++) \r\n\t\t\t\t{\r\n\t\t\t\t\tif(i >= clusterInfo.x)//PointLightCount\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tPointLight pointLight = getPointLight(u_LightBuffer,u_LightClusterBuffer,clusterInfo,i);\r\n\t\t\t\t\tLayaAirBlinnPhongPointLight(v_PositionWorld,u_MaterialSpecular,u_Shininess,normal,gloss,viewDir,pointLight,dif,spe);\r\n\t\t\t\t\tdiffuse+=dif;\r\n\t\t\t\t\tspecular+=spe;\r\n\t\t\t\t}\r\n\t\t\t#endif\r\n\t\t\t#ifdef SPOTLIGHT\r\n\t\t\t\tfor (int i = 0; i < MAX_LIGHT_COUNT; i++) \r\n\t\t\t\t{\r\n\t\t\t\t\tif(i >= clusterInfo.y)//SpotLightCount\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tSpotLight spotLight = getSpotLight(u_LightBuffer,u_LightClusterBuffer,clusterInfo,i);\r\n\t\t\t\t\tLayaAirBlinnPhongSpotLight(v_PositionWorld,u_MaterialSpecular,u_Shininess,normal,gloss,viewDir,spotLight,dif,spe);\r\n\t\t\t\t\tdiffuse+=dif;\r\n\t\t\t\t\tspecular+=spe;\r\n\t\t\t\t}\r\n\t\t\t#endif\r\n\t\t#endif\r\n\t#endif\r\n\r\n\t#ifdef RECEIVESHADOW\r\n\t\tfloat shadowValue = 1.0;\r\n\t\t#ifdef SHADOWMAP_PSSM3\r\n\t\t\tshadowValue = getShadowPSSM3(u_shadowMap1,u_shadowMap2,u_shadowMap3,u_lightShadowVP,u_shadowPSSMDistance,u_shadowPCFoffset,v_PositionWorld,v_posViewZ,0.001);\r\n\t\t#endif\r\n\t\t#ifdef SHADOWMAP_PSSM2\r\n\t\t\tshadowValue = getShadowPSSM2(u_shadowMap1,u_shadowMap2,u_lightShadowVP,u_shadowPSSMDistance,u_shadowPCFoffset,v_PositionWorld,v_posViewZ,0.001);\r\n\t\t#endif \r\n\t\t#ifdef SHADOWMAP_PSSM1\r\n\t\t\tshadowValue = getShadowPSSM1(u_shadowMap1,v_lightMVPPos,u_shadowPSSMDistance,u_shadowPCFoffset,v_posViewZ,0.001);\r\n\t\t#endif\r\n\t\tgl_FragColor =vec4(mainColor.rgb*(globalDiffuse + diffuse*shadowValue),mainColor.a);\r\n\t#else\r\n\t\tgl_FragColor =vec4(mainColor.rgb*(globalDiffuse + diffuse),mainColor.a);\r\n\t#endif\r\n\r\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n\t\t#ifdef RECEIVESHADOW\r\n\t\t\tgl_FragColor.rgb+=specular*shadowValue;\r\n\t\t#else\r\n\t\t\tgl_FragColor.rgb+=specular;\r\n\t\t#endif\r\n\t#endif\r\n\t  \r\n\t#ifdef FOG\r\n\t\tfloat lerpFact=clamp((1.0/gl_FragCoord.w-u_FogStart)/u_FogRange,0.0,1.0);\r\n\t\tgl_FragColor.rgb=mix(gl_FragColor.rgb,u_FogColor,lerpFact);\r\n\t#endif\r\n}\r\n\r\nvoid main()\r\n{\r\n\t#ifdef CASTSHADOW\t\t\r\n\t\tmain_castShadow();\r\n\t#else\r\n\t\tmain_normal();\r\n\t#endif  \r\n}\r\n\r\n',
		$r =
		'#include "Lighting.glsl";\r\n\r\nattribute vec4 a_Position;\r\n\r\n#ifdef GPU_INSTANCE\r\n\tattribute mat4 a_MvpMatrix;\r\n#else\r\n\tuniform mat4 u_MvpMatrix;\r\n#endif\r\n\r\n\r\n#if defined(DIFFUSEMAP)||((defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))&&(defined(SPECULARMAP)||defined(NORMALMAP)))||(defined(LIGHTMAP)&&defined(UV))\r\n\tattribute vec2 a_Texcoord0;\r\n\tvarying vec2 v_Texcoord0;\r\n#endif\r\n\r\n#if defined(LIGHTMAP)&&defined(UV1)\r\n\tattribute vec2 a_Texcoord1;\r\n#endif\r\n\r\n#ifdef LIGHTMAP\r\n\tuniform vec4 u_LightmapScaleOffset;\r\n\tvarying vec2 v_LightMapUV;\r\n#endif\r\n\r\n#ifdef COLOR\r\n\tattribute vec4 a_Color;\r\n\tvarying vec4 v_Color;\r\n#endif\r\n\r\n#ifdef BONE\r\n\tconst int c_MaxBoneCount = 24;\r\n\tattribute vec4 a_BoneIndices;\r\n\tattribute vec4 a_BoneWeights;\r\n\tuniform mat4 u_Bones[c_MaxBoneCount];\r\n#endif\r\n\r\n#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n\tattribute vec3 a_Normal;\r\n\tvarying vec3 v_Normal; \r\n\tuniform vec3 u_CameraPos;\r\n\tvarying vec3 v_ViewDir; \r\n#endif\r\n\r\n#if (defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))&&defined(NORMALMAP)\r\n\tattribute vec4 a_Tangent0;\r\n\tvarying vec3 v_Tangent;\r\n\tvarying vec3 v_Binormal;\r\n#endif\r\n\r\n#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)||defined(RECEIVESHADOW)\r\n\t#ifdef GPU_INSTANCE\r\n\t\tattribute mat4 a_WorldMat;\r\n\t#else\r\n\t\tuniform mat4 u_WorldMat;\r\n\t#endif\r\n\tvarying vec3 v_PositionWorld;\r\n#endif\r\n\r\nvarying float v_posViewZ;\r\n#ifdef RECEIVESHADOW\r\n  #ifdef SHADOWMAP_PSSM1 \r\n  varying vec4 v_lightMVPPos;\r\n  uniform mat4 u_lightShadowVP[4];\r\n  #endif\r\n#endif\r\n\r\n#ifdef TILINGOFFSET\r\n\tuniform vec4 u_TilingOffset;\r\n#endif\r\n\r\nvoid main_castShadow()\r\n{\r\n\tvec4 position;\r\n\t#ifdef BONE\r\n\t\tmat4 skinTransform = u_Bones[int(a_BoneIndices.x)] * a_BoneWeights.x;\r\n\t\tskinTransform += u_Bones[int(a_BoneIndices.y)] * a_BoneWeights.y;\r\n\t\tskinTransform += u_Bones[int(a_BoneIndices.z)] * a_BoneWeights.z;\r\n\t\tskinTransform += u_Bones[int(a_BoneIndices.w)] * a_BoneWeights.w;\r\n\t\tposition=skinTransform*a_Position;\r\n\t#else\r\n\t\tposition=a_Position;\r\n\t#endif\r\n\t#ifdef GPU_INSTANCE\r\n\t\tgl_Position = a_MvpMatrix * position;\r\n\t#else\r\n\t\tgl_Position = u_MvpMatrix * position;\r\n\t#endif\r\n\t\r\n\t//TODO没考虑UV动画呢\r\n\t#if defined(DIFFUSEMAP)&&defined(ALPHATEST)\r\n\t\tv_Texcoord0=a_Texcoord0;\r\n\t#endif\r\n\tgl_Position=remapGLPositionZ(gl_Position);\r\n\tv_posViewZ = gl_Position.z;\r\n}\r\n\r\nvoid main_normal()\r\n{\r\n\tvec4 position;\r\n\t#ifdef BONE\r\n\t\tmat4 skinTransform = u_Bones[int(a_BoneIndices.x)] * a_BoneWeights.x;\r\n\t\tskinTransform += u_Bones[int(a_BoneIndices.y)] * a_BoneWeights.y;\r\n\t\tskinTransform += u_Bones[int(a_BoneIndices.z)] * a_BoneWeights.z;\r\n\t\tskinTransform += u_Bones[int(a_BoneIndices.w)] * a_BoneWeights.w;\r\n\t\tposition=skinTransform*a_Position;\r\n\t#else\r\n\t\tposition=a_Position;\r\n\t#endif\r\n\t#ifdef GPU_INSTANCE\r\n\t\tgl_Position = a_MvpMatrix * position;\r\n\t#else\r\n\t\tgl_Position = u_MvpMatrix * position;\r\n\t#endif\r\n\t\r\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)||defined(RECEIVESHADOW)\r\n\t\tmat4 worldMat;\r\n\t\t#ifdef GPU_INSTANCE\r\n\t\t\tworldMat = a_WorldMat;\r\n\t\t#else\r\n\t\t\tworldMat = u_WorldMat;\r\n\t\t#endif\r\n\t#endif\r\n\t\r\n\r\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n\t\tmat3 worldInvMat;\r\n\t\t#ifdef BONE\r\n\t\t\tworldInvMat=inverse(mat3(worldMat*skinTransform));\r\n\t\t#else\r\n\t\t\tworldInvMat=inverse(mat3(worldMat));\r\n\t\t#endif  \r\n\t\tv_Normal=a_Normal*worldInvMat;\r\n\t\t#if (defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))&&defined(NORMALMAP)\r\n\t\t\tv_Tangent=a_Tangent0.xyz*worldInvMat;\r\n\t\t\tv_Binormal=cross(v_Normal,v_Tangent)*a_Tangent0.w;\r\n\t\t#endif\r\n\t#endif\r\n\r\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)||defined(RECEIVESHADOW)\r\n\t\tv_PositionWorld=(worldMat*position).xyz;\r\n\t#endif\r\n\t\r\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n\t\tv_ViewDir=u_CameraPos-v_PositionWorld;\r\n\t#endif\r\n\r\n\t#if defined(DIFFUSEMAP)||((defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))&&(defined(SPECULARMAP)||defined(NORMALMAP)))\r\n\t\t#ifdef TILINGOFFSET\r\n\t\t\tv_Texcoord0=TransformUV(a_Texcoord0,u_TilingOffset);\r\n\t\t#else\r\n\t\t\tv_Texcoord0=a_Texcoord0;\r\n\t\t#endif\r\n\t#endif\r\n\r\n\t#ifdef LIGHTMAP\r\n\t\t#ifdef SCALEOFFSETLIGHTINGMAPUV\r\n\t\t\t#ifdef UV1\r\n\t\t\t\tv_LightMapUV=vec2(a_Texcoord1.x,1.0-a_Texcoord1.y)*u_LightmapScaleOffset.xy+u_LightmapScaleOffset.zw;\r\n\t\t\t#else\r\n\t\t\t\tv_LightMapUV=vec2(a_Texcoord0.x,1.0-a_Texcoord0.y)*u_LightmapScaleOffset.xy+u_LightmapScaleOffset.zw;\r\n\t\t\t#endif \r\n\t\t\tv_LightMapUV.y=1.0-v_LightMapUV.y;\r\n\t\t#else\r\n\t\t\t#ifdef UV1\r\n\t\t\t\tv_LightMapUV=a_Texcoord1;\r\n\t\t\t#else\r\n\t\t\t\tv_LightMapUV=a_Texcoord0;\r\n\t\t\t#endif \r\n\t\t#endif \r\n\t#endif\r\n\r\n\t#if defined(COLOR)&&defined(ENABLEVERTEXCOLOR)\r\n\t\tv_Color=a_Color;\r\n\t#endif\r\n\r\n\t#ifdef RECEIVESHADOW\r\n\t\tv_posViewZ = gl_Position.w;\r\n\t\t#ifdef SHADOWMAP_PSSM1 \r\n\t\t\tv_lightMVPPos = u_lightShadowVP[0] * vec4(v_PositionWorld,1.0);\r\n\t\t#endif\r\n\t#endif\r\n\tgl_Position=remapGLPositionZ(gl_Position);\r\n}\r\n\r\nvoid main()\r\n{\r\n\t#ifdef CASTSHADOW\r\n\t\tmain_castShadow();\r\n\t#else\r\n\t\tmain_normal();\r\n\t#endif\r\n}',
		ei =
		"#ifdef HIGHPRECISION\r\n  precision highp float;\r\n#else\r\n  precision mediump float;\r\n#endif\r\n\r\nvarying vec4 v_Color;\r\nvarying vec2 v_TextureCoordinate;\r\nuniform sampler2D u_texture;\r\nuniform vec4 u_Tintcolor;\r\n\r\n#ifdef RENDERMODE_MESH\r\n\tvarying vec4 v_MeshColor;\r\n#endif\r\n\r\n#ifdef FOG\r\n\tuniform float u_FogStart;\r\n\tuniform float u_FogRange;\r\n\t#ifdef ADDTIVEFOG\r\n\t#else\r\n\t\tuniform vec3 u_FogColor;\r\n\t#endif\r\n#endif\r\n\r\n\r\nvoid main()\r\n{\t\r\n\t#ifdef RENDERMODE_MESH\r\n\t\tgl_FragColor=v_MeshColor;\r\n\t#else\r\n\t\tgl_FragColor=vec4(1.0);\t\r\n\t#endif\r\n\t\t\r\n\t#ifdef DIFFUSEMAP\r\n\t\t#ifdef TINTCOLOR\r\n\t\t\tgl_FragColor*=texture2D(u_texture,v_TextureCoordinate)*u_Tintcolor*2.0*v_Color;\r\n\t\t#else\r\n\t\t\tgl_FragColor*=texture2D(u_texture,v_TextureCoordinate)*v_Color;\r\n\t\t#endif\r\n\t#else\r\n\t\t#ifdef TINTCOLOR\r\n\t\t\tgl_FragColor*=u_Tintcolor*2.0*v_Color;\r\n\t\t#else\r\n\t\t\tgl_FragColor*=v_Color;\r\n\t\t#endif\r\n\t#endif\r\n\t\r\n\t#ifdef FOG\r\n\t\tfloat lerpFact=clamp((1.0/gl_FragCoord.w-u_FogStart)/u_FogRange,0.0,1.0);\r\n\t\t#ifdef ADDTIVEFOG\r\n\t\t\tgl_FragColor.rgb=mix(gl_FragColor.rgb,vec3(0.0,0.0,0.0),lerpFact);\r\n\t\t#else\r\n\t\t\tgl_FragColor.rgb=mix(gl_FragColor.rgb,u_FogColor,lerpFact);\r\n\t\t#endif\r\n\t#endif\r\n}",
		ti =
		'#include "Lighting.glsl";\r\n\r\n#ifdef HIGHPRECISION\r\n  precision highp float;\r\n#else\r\n  precision mediump float;\r\n#endif\r\n\r\n#if defined(SPHERHBILLBOARD)||defined(STRETCHEDBILLBOARD)||defined(HORIZONTALBILLBOARD)||defined(VERTICALBILLBOARD)\r\n\tattribute vec4 a_CornerTextureCoordinate;\r\n#endif\r\n#ifdef RENDERMODE_MESH\r\n\tattribute vec3 a_MeshPosition;\r\n\tattribute vec4 a_MeshColor;\r\n\tattribute vec2 a_MeshTextureCoordinate;\r\n\tvarying vec4 v_MeshColor;\r\n#endif\r\n\r\nattribute vec4 a_ShapePositionStartLifeTime;\r\nattribute vec4 a_DirectionTime;\r\nattribute vec4 a_StartColor;\r\nattribute vec3 a_StartSize;\r\nattribute vec3 a_StartRotation0;\r\nattribute float a_StartSpeed;\r\n#if defined(COLOROVERLIFETIME)||defined(RANDOMCOLOROVERLIFETIME)||defined(SIZEOVERLIFETIMERANDOMCURVES)||defined(SIZEOVERLIFETIMERANDOMCURVESSEPERATE)||defined(ROTATIONOVERLIFETIMERANDOMCONSTANTS)||defined(ROTATIONOVERLIFETIMERANDOMCURVES)\r\n  attribute vec4 a_Random0;\r\n#endif\r\n#if defined(TEXTURESHEETANIMATIONRANDOMCURVE)||defined(VELOCITYOVERLIFETIMERANDOMCONSTANT)||defined(VELOCITYOVERLIFETIMERANDOMCURVE)\r\n  attribute vec4 a_Random1;\r\n#endif\r\nattribute vec3 a_SimulationWorldPostion;\r\nattribute vec4 a_SimulationWorldRotation;\r\n\r\nvarying vec4 v_Color;\r\n#ifdef DIFFUSEMAP\r\n\tvarying vec2 v_TextureCoordinate;\r\n#endif\r\n\r\nuniform float u_CurrentTime;\r\nuniform vec3 u_Gravity;\r\n\r\nuniform vec3 u_WorldPosition;\r\nuniform vec4 u_WorldRotation;\r\nuniform bool u_ThreeDStartRotation;\r\nuniform int u_ScalingMode;\r\nuniform vec3 u_PositionScale;\r\nuniform vec3 u_SizeScale;\r\nuniform mat4 u_View;\r\nuniform mat4 u_Projection;\r\n\r\n#ifdef STRETCHEDBILLBOARD\r\n\tuniform vec3 u_CameraPos;\r\n#endif\r\nuniform vec3 u_CameraDirection;//TODO:只有几种广告牌模式需要用\r\nuniform vec3 u_CameraUp;\r\n\r\nuniform  float u_StretchedBillboardLengthScale;\r\nuniform  float u_StretchedBillboardSpeedScale;\r\nuniform int u_SimulationSpace;\r\n\r\n#if defined(VELOCITYOVERLIFETIMECONSTANT)||defined(VELOCITYOVERLIFETIMECURVE)||defined(VELOCITYOVERLIFETIMERANDOMCONSTANT)||defined(VELOCITYOVERLIFETIMERANDOMCURVE)\r\n  uniform  int  u_VOLSpaceType;\r\n#endif\r\n#if defined(VELOCITYOVERLIFETIMECONSTANT)||defined(VELOCITYOVERLIFETIMERANDOMCONSTANT)\r\n  uniform  vec3 u_VOLVelocityConst;\r\n#endif\r\n#if defined(VELOCITYOVERLIFETIMECURVE)||defined(VELOCITYOVERLIFETIMERANDOMCURVE)\r\n  uniform  vec2 u_VOLVelocityGradientX[4];//x为key,y为速度\r\n  uniform  vec2 u_VOLVelocityGradientY[4];//x为key,y为速度\r\n  uniform  vec2 u_VOLVelocityGradientZ[4];//x为key,y为速度\r\n#endif\r\n#ifdef VELOCITYOVERLIFETIMERANDOMCONSTANT\r\n  uniform  vec3 u_VOLVelocityConstMax;\r\n#endif\r\n#ifdef VELOCITYOVERLIFETIMERANDOMCURVE\r\n  uniform  vec2 u_VOLVelocityGradientMaxX[4];//x为key,y为速度\r\n  uniform  vec2 u_VOLVelocityGradientMaxY[4];//x为key,y为速度\r\n  uniform  vec2 u_VOLVelocityGradientMaxZ[4];//x为key,y为速度\r\n#endif\r\n\r\n#ifdef COLOROVERLIFETIME\r\n  uniform  vec4 u_ColorOverLifeGradientColors[4];//x为key,yzw为Color\r\n  uniform  vec2 u_ColorOverLifeGradientAlphas[4];//x为key,y为Alpha\r\n#endif\r\n#ifdef RANDOMCOLOROVERLIFETIME\r\n  uniform  vec4 u_ColorOverLifeGradientColors[4];//x为key,yzw为Color\r\n  uniform  vec2 u_ColorOverLifeGradientAlphas[4];//x为key,y为Alpha\r\n  uniform  vec4 u_MaxColorOverLifeGradientColors[4];//x为key,yzw为Color\r\n  uniform  vec2 u_MaxColorOverLifeGradientAlphas[4];//x为key,y为Alpha\r\n#endif\r\n\r\n\r\n#if defined(SIZEOVERLIFETIMECURVE)||defined(SIZEOVERLIFETIMERANDOMCURVES)\r\n  uniform  vec2 u_SOLSizeGradient[4];//x为key,y为尺寸\r\n#endif\r\n#ifdef SIZEOVERLIFETIMERANDOMCURVES\r\n  uniform  vec2 u_SOLSizeGradientMax[4];//x为key,y为尺寸\r\n#endif\r\n#if defined(SIZEOVERLIFETIMECURVESEPERATE)||defined(SIZEOVERLIFETIMERANDOMCURVESSEPERATE)\r\n  uniform  vec2 u_SOLSizeGradientX[4];//x为key,y为尺寸\r\n  uniform  vec2 u_SOLSizeGradientY[4];//x为key,y为尺寸\r\n  uniform  vec2 u_SOLSizeGradientZ[4];//x为key,y为尺寸\r\n#endif\r\n#ifdef SIZEOVERLIFETIMERANDOMCURVESSEPERATE\r\n  uniform  vec2 u_SOLSizeGradientMaxX[4];//x为key,y为尺寸\r\n  uniform  vec2 u_SOLSizeGradientMaxY[4];//x为key,y为尺寸\r\n  uniform  vec2 u_SOLSizeGradientMaxZ[4];//x为key,y为尺寸\r\n#endif\r\n\r\n\r\n#ifdef ROTATIONOVERLIFETIME\r\n  #if defined(ROTATIONOVERLIFETIMECONSTANT)||defined(ROTATIONOVERLIFETIMERANDOMCONSTANTS)\r\n    uniform  float u_ROLAngularVelocityConst;\r\n  #endif\r\n  #ifdef ROTATIONOVERLIFETIMERANDOMCONSTANTS\r\n    uniform  float u_ROLAngularVelocityConstMax;\r\n  #endif\r\n  #if defined(ROTATIONOVERLIFETIMECURVE)||defined(ROTATIONOVERLIFETIMERANDOMCURVES)\r\n    uniform  vec2 u_ROLAngularVelocityGradient[4];//x为key,y为旋转\r\n  #endif\r\n  #ifdef ROTATIONOVERLIFETIMERANDOMCURVES\r\n    uniform  vec2 u_ROLAngularVelocityGradientMax[4];//x为key,y为旋转\r\n  #endif\r\n#endif\r\n#ifdef ROTATIONOVERLIFETIMESEPERATE\r\n  #if defined(ROTATIONOVERLIFETIMECONSTANT)||defined(ROTATIONOVERLIFETIMERANDOMCONSTANTS)\r\n    uniform  vec3 u_ROLAngularVelocityConstSeprarate;\r\n  #endif\r\n  #ifdef ROTATIONOVERLIFETIMERANDOMCONSTANTS\r\n    uniform  vec3 u_ROLAngularVelocityConstMaxSeprarate;\r\n  #endif\r\n  #if defined(ROTATIONOVERLIFETIMECURVE)||defined(ROTATIONOVERLIFETIMERANDOMCURVES)\r\n    uniform  vec2 u_ROLAngularVelocityGradientX[4];\r\n    uniform  vec2 u_ROLAngularVelocityGradientY[4];\r\n    uniform  vec2 u_ROLAngularVelocityGradientZ[4];\r\n  #endif\r\n  #ifdef ROTATIONOVERLIFETIMERANDOMCURVES\r\n    uniform  vec2 u_ROLAngularVelocityGradientMaxX[4];\r\n    uniform  vec2 u_ROLAngularVelocityGradientMaxY[4];\r\n    uniform  vec2 u_ROLAngularVelocityGradientMaxZ[4];\r\n\tuniform  vec2 u_ROLAngularVelocityGradientMaxW[4];\r\n  #endif\r\n#endif\r\n\r\n#if defined(TEXTURESHEETANIMATIONCURVE)||defined(TEXTURESHEETANIMATIONRANDOMCURVE)\r\n  uniform  float u_TSACycles;\r\n  uniform  vec2 u_TSASubUVLength;\r\n  uniform  vec2 u_TSAGradientUVs[4];//x为key,y为frame\r\n#endif\r\n#ifdef TEXTURESHEETANIMATIONRANDOMCURVE\r\n  uniform  vec2 u_TSAMaxGradientUVs[4];//x为key,y为frame\r\n#endif\r\n\r\n#ifdef TILINGOFFSET\r\n\tuniform vec4 u_TilingOffset;\r\n#endif\r\n\r\nvec3 rotationByEuler(in vec3 vector,in vec3 rot)\r\n{\r\n\tfloat halfRoll = rot.z * 0.5;\r\n    float halfPitch = rot.x * 0.5;\r\n\tfloat halfYaw = rot.y * 0.5;\r\n\r\n\tfloat sinRoll = sin(halfRoll);\r\n\tfloat cosRoll = cos(halfRoll);\r\n\tfloat sinPitch = sin(halfPitch);\r\n\tfloat cosPitch = cos(halfPitch);\r\n\tfloat sinYaw = sin(halfYaw);\r\n\tfloat cosYaw = cos(halfYaw);\r\n\r\n\tfloat quaX = (cosYaw * sinPitch * cosRoll) + (sinYaw * cosPitch * sinRoll);\r\n\tfloat quaY = (sinYaw * cosPitch * cosRoll) - (cosYaw * sinPitch * sinRoll);\r\n\tfloat quaZ = (cosYaw * cosPitch * sinRoll) - (sinYaw * sinPitch * cosRoll);\r\n\tfloat quaW = (cosYaw * cosPitch * cosRoll) + (sinYaw * sinPitch * sinRoll);\r\n\t\r\n\t//vec4 q=vec4(quaX,quaY,quaZ,quaW);\r\n\t//vec3 temp = cross(q.xyz, vector) + q.w * vector;\r\n\t//return (cross(temp, -q.xyz) + dot(q.xyz,vector) * q.xyz + q.w * temp);\r\n\t\r\n\tfloat x = quaX + quaX;\r\n    float y = quaY + quaY;\r\n    float z = quaZ + quaZ;\r\n    float wx = quaW * x;\r\n    float wy = quaW * y;\r\n    float wz = quaW * z;\r\n\tfloat xx = quaX * x;\r\n    float xy = quaX * y;\r\n\tfloat xz = quaX * z;\r\n    float yy = quaY * y;\r\n    float yz = quaY * z;\r\n    float zz = quaZ * z;\r\n\r\n    return vec3(((vector.x * ((1.0 - yy) - zz)) + (vector.y * (xy - wz))) + (vector.z * (xz + wy)),\r\n                ((vector.x * (xy + wz)) + (vector.y * ((1.0 - xx) - zz))) + (vector.z * (yz - wx)),\r\n                ((vector.x * (xz - wy)) + (vector.y * (yz + wx))) + (vector.z * ((1.0 - xx) - yy)));\r\n\t\r\n}\r\n\r\n//假定axis已经归一化\r\nvec3 rotationByAxis(in vec3 vector,in vec3 axis, in float angle)\r\n{\r\n\tfloat halfAngle = angle * 0.5;\r\n\tfloat sin = sin(halfAngle);\r\n\t\r\n\tfloat quaX = axis.x * sin;\r\n\tfloat quaY = axis.y * sin;\r\n\tfloat quaZ = axis.z * sin;\r\n\tfloat quaW = cos(halfAngle);\r\n\t\r\n\t//vec4 q=vec4(quaX,quaY,quaZ,quaW);\r\n\t//vec3 temp = cross(q.xyz, vector) + q.w * vector;\r\n\t//return (cross(temp, -q.xyz) + dot(q.xyz,vector) * q.xyz + q.w * temp);\r\n\t\r\n\tfloat x = quaX + quaX;\r\n    float y = quaY + quaY;\r\n    float z = quaZ + quaZ;\r\n    float wx = quaW * x;\r\n    float wy = quaW * y;\r\n    float wz = quaW * z;\r\n\tfloat xx = quaX * x;\r\n    float xy = quaX * y;\r\n\tfloat xz = quaX * z;\r\n    float yy = quaY * y;\r\n    float yz = quaY * z;\r\n    float zz = quaZ * z;\r\n\r\n    return vec3(((vector.x * ((1.0 - yy) - zz)) + (vector.y * (xy - wz))) + (vector.z * (xz + wy)),\r\n                ((vector.x * (xy + wz)) + (vector.y * ((1.0 - xx) - zz))) + (vector.z * (yz - wx)),\r\n                ((vector.x * (xz - wy)) + (vector.y * (yz + wx))) + (vector.z * ((1.0 - xx) - yy)));\r\n\t\r\n}\r\n\r\nvec3 rotationByQuaternions(in vec3 v,in vec4 q) \r\n{\r\n\treturn v + 2.0 * cross(q.xyz, cross(q.xyz, v) + q.w * v);\r\n}\r\n\r\n \r\n#if defined(VELOCITYOVERLIFETIMECURVE)||defined(VELOCITYOVERLIFETIMERANDOMCURVE)||defined(SIZEOVERLIFETIMECURVE)||defined(SIZEOVERLIFETIMECURVESEPERATE)||defined(SIZEOVERLIFETIMERANDOMCURVES)||defined(SIZEOVERLIFETIMERANDOMCURVESSEPERATE)\r\nfloat getCurValueFromGradientFloat(in vec2 gradientNumbers[4],in float normalizedAge)\r\n{\r\n\tfloat curValue;\r\n\tfor(int i=1;i<4;i++)\r\n\t{\r\n\t\tvec2 gradientNumber=gradientNumbers[i];\r\n\t\tfloat key=gradientNumber.x;\r\n\t\tif(key>=normalizedAge)\r\n\t\t{\r\n\t\t\tvec2 lastGradientNumber=gradientNumbers[i-1];\r\n\t\t\tfloat lastKey=lastGradientNumber.x;\r\n\t\t\tfloat age=(normalizedAge-lastKey)/(key-lastKey);\r\n\t\t\tcurValue=mix(lastGradientNumber.y,gradientNumber.y,age);\r\n\t\t\tbreak;\r\n\t\t}\r\n\t}\r\n\treturn curValue;\r\n}\r\n#endif\r\n\r\n#if defined(VELOCITYOVERLIFETIMECURVE)||defined(VELOCITYOVERLIFETIMERANDOMCURVE)||defined(ROTATIONOVERLIFETIMECURVE)||defined(ROTATIONOVERLIFETIMERANDOMCURVES)\r\nfloat getTotalValueFromGradientFloat(in vec2 gradientNumbers[4],in float normalizedAge)\r\n{\r\n\tfloat totalValue=0.0;\r\n\tfor(int i=1;i<4;i++)\r\n\t{\r\n\t\tvec2 gradientNumber=gradientNumbers[i];\r\n\t\tfloat key=gradientNumber.x;\r\n\t\tvec2 lastGradientNumber=gradientNumbers[i-1];\r\n\t\tfloat lastValue=lastGradientNumber.y;\r\n\t\t\r\n\t\tif(key>=normalizedAge){\r\n\t\t\tfloat lastKey=lastGradientNumber.x;\r\n\t\t\tfloat age=(normalizedAge-lastKey)/(key-lastKey);\r\n\t\t\ttotalValue+=(lastValue+mix(lastValue,gradientNumber.y,age))/2.0*a_ShapePositionStartLifeTime.w*(normalizedAge-lastKey);\r\n\t\t\tbreak;\r\n\t\t}\r\n\t\telse{\r\n\t\t\ttotalValue+=(lastValue+gradientNumber.y)/2.0*a_ShapePositionStartLifeTime.w*(key-lastGradientNumber.x);\r\n\t\t}\r\n\t}\r\n\treturn totalValue;\r\n}\r\n#endif\r\n\r\n#if defined(COLOROVERLIFETIME)||defined(RANDOMCOLOROVERLIFETIME)\r\nvec4 getColorFromGradient(in vec2 gradientAlphas[4],in vec4 gradientColors[4],in float normalizedAge)\r\n{\r\n\tvec4 overTimeColor;\r\n\tfor(int i=1;i<4;i++)\r\n\t{\r\n\t\tvec2 gradientAlpha=gradientAlphas[i];\r\n\t\tfloat alphaKey=gradientAlpha.x;\r\n\t\tif(alphaKey>=normalizedAge)\r\n\t\t{\r\n\t\t\tvec2 lastGradientAlpha=gradientAlphas[i-1];\r\n\t\t\tfloat lastAlphaKey=lastGradientAlpha.x;\r\n\t\t\tfloat age=(normalizedAge-lastAlphaKey)/(alphaKey-lastAlphaKey);\r\n\t\t\toverTimeColor.a=mix(lastGradientAlpha.y,gradientAlpha.y,age);\r\n\t\t\tbreak;\r\n\t\t}\r\n\t}\r\n\t\r\n\tfor(int i=1;i<4;i++)\r\n\t{\r\n\t\tvec4 gradientColor=gradientColors[i];\r\n\t\tfloat colorKey=gradientColor.x;\r\n\t\tif(colorKey>=normalizedAge)\r\n\t\t{\r\n\t\t\tvec4 lastGradientColor=gradientColors[i-1];\r\n\t\t\tfloat lastColorKey=lastGradientColor.x;\r\n\t\t\tfloat age=(normalizedAge-lastColorKey)/(colorKey-lastColorKey);\r\n\t\t\toverTimeColor.rgb=mix(gradientColors[i-1].yzw,gradientColor.yzw,age);\r\n\t\t\tbreak;\r\n\t\t}\r\n\t}\r\n\treturn overTimeColor;\r\n}\r\n#endif\r\n\r\n\r\n#if defined(TEXTURESHEETANIMATIONCURVE)||defined(TEXTURESHEETANIMATIONRANDOMCURVE)\r\nfloat getFrameFromGradient(in vec2 gradientFrames[4],in float normalizedAge)\r\n{\r\n\tfloat overTimeFrame;\r\n\tfor(int i=1;i<4;i++)\r\n\t{\r\n\t\tvec2 gradientFrame=gradientFrames[i];\r\n\t\tfloat key=gradientFrame.x;\r\n\t\tif(key>=normalizedAge)\r\n\t\t{\r\n\t\t\tvec2 lastGradientFrame=gradientFrames[i-1];\r\n\t\t\tfloat lastKey=lastGradientFrame.x;\r\n\t\t\tfloat age=(normalizedAge-lastKey)/(key-lastKey);\r\n\t\t\toverTimeFrame=mix(lastGradientFrame.y,gradientFrame.y,age);\r\n\t\t\tbreak;\r\n\t\t}\r\n\t}\r\n\treturn floor(overTimeFrame);\r\n}\r\n#endif\r\n\r\n#if defined(VELOCITYOVERLIFETIMECONSTANT)||defined(VELOCITYOVERLIFETIMECURVE)||defined(VELOCITYOVERLIFETIMERANDOMCONSTANT)||defined(VELOCITYOVERLIFETIMERANDOMCURVE)\r\nvec3 computeParticleLifeVelocity(in float normalizedAge)\r\n{\r\n  vec3 outLifeVelocity;\r\n  #ifdef VELOCITYOVERLIFETIMECONSTANT\r\n\t outLifeVelocity=u_VOLVelocityConst; \r\n  #endif\r\n  #ifdef VELOCITYOVERLIFETIMECURVE\r\n     outLifeVelocity= vec3(getCurValueFromGradientFloat(u_VOLVelocityGradientX,normalizedAge),getCurValueFromGradientFloat(u_VOLVelocityGradientY,normalizedAge),getCurValueFromGradientFloat(u_VOLVelocityGradientZ,normalizedAge));\r\n  #endif\r\n  #ifdef VELOCITYOVERLIFETIMERANDOMCONSTANT\r\n\t outLifeVelocity=mix(u_VOLVelocityConst,u_VOLVelocityConstMax,vec3(a_Random1.y,a_Random1.z,a_Random1.w)); \r\n  #endif\r\n  #ifdef VELOCITYOVERLIFETIMERANDOMCURVE\r\n     outLifeVelocity=vec3(mix(getCurValueFromGradientFloat(u_VOLVelocityGradientX,normalizedAge),getCurValueFromGradientFloat(u_VOLVelocityGradientMaxX,normalizedAge),a_Random1.y),\r\n\t                 mix(getCurValueFromGradientFloat(u_VOLVelocityGradientY,normalizedAge),getCurValueFromGradientFloat(u_VOLVelocityGradientMaxY,normalizedAge),a_Random1.z),\r\n\t\t\t\t\t mix(getCurValueFromGradientFloat(u_VOLVelocityGradientZ,normalizedAge),getCurValueFromGradientFloat(u_VOLVelocityGradientMaxZ,normalizedAge),a_Random1.w));\r\n  #endif\r\n\t\t\t\t\t\r\n  return outLifeVelocity;\r\n} \r\n#endif\r\n\r\nvec3 computeParticlePosition(in vec3 startVelocity, in vec3 lifeVelocity,in float age,in float normalizedAge,vec3 gravityVelocity,vec4 worldRotation)\r\n{\r\n   vec3 startPosition;\r\n   vec3 lifePosition;\r\n   #if defined(VELOCITYOVERLIFETIMECONSTANT)||defined(VELOCITYOVERLIFETIMECURVE)||defined(VELOCITYOVERLIFETIMERANDOMCONSTANT)||defined(VELOCITYOVERLIFETIMERANDOMCURVE)\r\n\t#ifdef VELOCITYOVERLIFETIMECONSTANT\r\n\t\t  startPosition=startVelocity*age;\r\n\t\t  lifePosition=lifeVelocity*age;\r\n\t#endif\r\n\t#ifdef VELOCITYOVERLIFETIMECURVE\r\n\t\t  startPosition=startVelocity*age;\r\n\t\t  lifePosition=vec3(getTotalValueFromGradientFloat(u_VOLVelocityGradientX,normalizedAge),getTotalValueFromGradientFloat(u_VOLVelocityGradientY,normalizedAge),getTotalValueFromGradientFloat(u_VOLVelocityGradientZ,normalizedAge));\r\n\t#endif\r\n\t#ifdef VELOCITYOVERLIFETIMERANDOMCONSTANT\r\n\t\t  startPosition=startVelocity*age;\r\n\t\t  lifePosition=lifeVelocity*age;\r\n\t#endif\r\n\t#ifdef VELOCITYOVERLIFETIMERANDOMCURVE\r\n\t\t  startPosition=startVelocity*age;\r\n\t\t  lifePosition=vec3(mix(getTotalValueFromGradientFloat(u_VOLVelocityGradientX,normalizedAge),getTotalValueFromGradientFloat(u_VOLVelocityGradientMaxX,normalizedAge),a_Random1.y)\r\n\t      ,mix(getTotalValueFromGradientFloat(u_VOLVelocityGradientY,normalizedAge),getTotalValueFromGradientFloat(u_VOLVelocityGradientMaxY,normalizedAge),a_Random1.z)\r\n\t      ,mix(getTotalValueFromGradientFloat(u_VOLVelocityGradientZ,normalizedAge),getTotalValueFromGradientFloat(u_VOLVelocityGradientMaxZ,normalizedAge),a_Random1.w));\r\n\t#endif\r\n\t\r\n\tvec3 finalPosition;\r\n\tif(u_VOLSpaceType==0){\r\n\t  if(u_ScalingMode!=2)\r\n\t   finalPosition =rotationByQuaternions(u_PositionScale*(a_ShapePositionStartLifeTime.xyz+startPosition+lifePosition),worldRotation);\r\n\t  else\r\n\t   finalPosition =rotationByQuaternions(u_PositionScale*a_ShapePositionStartLifeTime.xyz+startPosition+lifePosition,worldRotation);\r\n\t}\r\n\telse{\r\n\t  if(u_ScalingMode!=2)\r\n\t    finalPosition = rotationByQuaternions(u_PositionScale*(a_ShapePositionStartLifeTime.xyz+startPosition),worldRotation)+lifePosition;\r\n\t  else\r\n\t    finalPosition = rotationByQuaternions(u_PositionScale*a_ShapePositionStartLifeTime.xyz+startPosition,worldRotation)+lifePosition;\r\n\t}\r\n  #else\r\n\t startPosition=startVelocity*age;\r\n\t vec3 finalPosition;\r\n\t if(u_ScalingMode!=2)\r\n\t\t\tfinalPosition = rotationByQuaternions(u_PositionScale*(a_ShapePositionStartLifeTime.xyz+startPosition),worldRotation);\r\n\t else\r\n\t   \tfinalPosition = rotationByQuaternions(u_PositionScale*a_ShapePositionStartLifeTime.xyz+startPosition,worldRotation);\r\n  #endif\r\n  \r\n  if(u_SimulationSpace==0)\r\n    finalPosition=finalPosition+a_SimulationWorldPostion;\r\n  else if(u_SimulationSpace==1) \r\n    finalPosition=finalPosition+u_WorldPosition;\r\n  \r\n  finalPosition+=0.5*gravityVelocity*age;\r\n \r\n  return  finalPosition;\r\n}\r\n\r\n\r\nvec4 computeParticleColor(in vec4 color,in float normalizedAge)\r\n{\r\n\t#ifdef COLOROVERLIFETIME\r\n\t  color*=getColorFromGradient(u_ColorOverLifeGradientAlphas,u_ColorOverLifeGradientColors,normalizedAge);\r\n\t#endif\r\n\t\r\n\t#ifdef RANDOMCOLOROVERLIFETIME\r\n\t  color*=mix(getColorFromGradient(u_ColorOverLifeGradientAlphas,u_ColorOverLifeGradientColors,normalizedAge),getColorFromGradient(u_MaxColorOverLifeGradientAlphas,u_MaxColorOverLifeGradientColors,normalizedAge),a_Random0.y);\r\n\t#endif\r\n\r\n    return color;\r\n}\r\n\r\nvec2 computeParticleSizeBillbard(in vec2 size,in float normalizedAge)\r\n{\r\n\t#ifdef SIZEOVERLIFETIMECURVE\r\n\t\tsize*=getCurValueFromGradientFloat(u_SOLSizeGradient,normalizedAge);\r\n\t#endif\r\n\t#ifdef SIZEOVERLIFETIMERANDOMCURVES\r\n\t    size*=mix(getCurValueFromGradientFloat(u_SOLSizeGradient,normalizedAge),getCurValueFromGradientFloat(u_SOLSizeGradientMax,normalizedAge),a_Random0.z); \r\n\t#endif\r\n\t#ifdef SIZEOVERLIFETIMECURVESEPERATE\r\n\t\tsize*=vec2(getCurValueFromGradientFloat(u_SOLSizeGradientX,normalizedAge),getCurValueFromGradientFloat(u_SOLSizeGradientY,normalizedAge));\r\n\t#endif\r\n\t#ifdef SIZEOVERLIFETIMERANDOMCURVESSEPERATE\r\n\t    size*=vec2(mix(getCurValueFromGradientFloat(u_SOLSizeGradientX,normalizedAge),getCurValueFromGradientFloat(u_SOLSizeGradientMaxX,normalizedAge),a_Random0.z)\r\n\t    ,mix(getCurValueFromGradientFloat(u_SOLSizeGradientY,normalizedAge),getCurValueFromGradientFloat(u_SOLSizeGradientMaxY,normalizedAge),a_Random0.z));\r\n\t#endif\r\n\treturn size;\r\n}\r\n\r\n#ifdef RENDERMODE_MESH\r\nvec3 computeParticleSizeMesh(in vec3 size,in float normalizedAge)\r\n{\r\n\t#ifdef SIZEOVERLIFETIMECURVE\r\n\t\tsize*=getCurValueFromGradientFloat(u_SOLSizeGradient,normalizedAge);\r\n\t#endif\r\n\t#ifdef SIZEOVERLIFETIMERANDOMCURVES\r\n\t    size*=mix(getCurValueFromGradientFloat(u_SOLSizeGradient,normalizedAge),getCurValueFromGradientFloat(u_SOLSizeGradientMax,normalizedAge),a_Random0.z); \r\n\t#endif\r\n\t#ifdef SIZEOVERLIFETIMECURVESEPERATE\r\n\t\tsize*=vec3(getCurValueFromGradientFloat(u_SOLSizeGradientX,normalizedAge),getCurValueFromGradientFloat(u_SOLSizeGradientY,normalizedAge),getCurValueFromGradientFloat(u_SOLSizeGradientZ,normalizedAge));\r\n\t#endif\r\n\t#ifdef SIZEOVERLIFETIMERANDOMCURVESSEPERATE\r\n\t    size*=vec3(mix(getCurValueFromGradientFloat(u_SOLSizeGradientX,normalizedAge),getCurValueFromGradientFloat(u_SOLSizeGradientMaxX,normalizedAge),a_Random0.z)\r\n\t    ,mix(getCurValueFromGradientFloat(u_SOLSizeGradientY,normalizedAge),getCurValueFromGradientFloat(u_SOLSizeGradientMaxY,normalizedAge),a_Random0.z)\r\n\t\t,mix(getCurValueFromGradientFloat(u_SOLSizeGradientZ,normalizedAge),getCurValueFromGradientFloat(u_SOLSizeGradientMaxZ,normalizedAge),a_Random0.z));\r\n\t#endif\r\n\treturn size;\r\n}\r\n#endif\r\n\r\nfloat computeParticleRotationFloat(in float rotation,in float age,in float normalizedAge)\r\n{ \r\n\t#ifdef ROTATIONOVERLIFETIME\r\n\t\t#ifdef ROTATIONOVERLIFETIMECONSTANT\r\n\t\t\tfloat ageRot=u_ROLAngularVelocityConst*age;\r\n\t        rotation+=ageRot;\r\n\t\t#endif\r\n\t\t#ifdef ROTATIONOVERLIFETIMECURVE\r\n\t\t\trotation+=getTotalValueFromGradientFloat(u_ROLAngularVelocityGradient,normalizedAge);\r\n\t\t#endif\r\n\t\t#ifdef ROTATIONOVERLIFETIMERANDOMCONSTANTS\r\n\t\t\tfloat ageRot=mix(u_ROLAngularVelocityConst,u_ROLAngularVelocityConstMax,a_Random0.w)*age;\r\n\t        rotation+=ageRot;\r\n\t    #endif\r\n\t\t#ifdef ROTATIONOVERLIFETIMERANDOMCURVES\r\n\t\t\trotation+=mix(getTotalValueFromGradientFloat(u_ROLAngularVelocityGradient,normalizedAge),getTotalValueFromGradientFloat(u_ROLAngularVelocityGradientMax,normalizedAge),a_Random0.w);\r\n\t\t#endif\r\n\t#endif\r\n\t#ifdef ROTATIONOVERLIFETIMESEPERATE\r\n\t\t#ifdef ROTATIONOVERLIFETIMECONSTANT\r\n\t\t\tfloat ageRot=u_ROLAngularVelocityConstSeprarate.z*age;\r\n\t        rotation+=ageRot;\r\n\t\t#endif\r\n\t\t#ifdef ROTATIONOVERLIFETIMECURVE\r\n\t\t\trotation+=getTotalValueFromGradientFloat(u_ROLAngularVelocityGradientZ,normalizedAge);\r\n\t\t#endif\r\n\t\t#ifdef ROTATIONOVERLIFETIMERANDOMCONSTANTS\r\n\t\t\tfloat ageRot=mix(u_ROLAngularVelocityConstSeprarate.z,u_ROLAngularVelocityConstMaxSeprarate.z,a_Random0.w)*age;\r\n\t        rotation+=ageRot;\r\n\t    #endif\r\n\t\t#ifdef ROTATIONOVERLIFETIMERANDOMCURVES\r\n\t\t\trotation+=mix(getTotalValueFromGradientFloat(u_ROLAngularVelocityGradientZ,normalizedAge),getTotalValueFromGradientFloat(u_ROLAngularVelocityGradientMaxZ,normalizedAge),a_Random0.w));\r\n\t\t#endif\r\n\t#endif\r\n\treturn rotation;\r\n}\r\n\r\n#if defined(RENDERMODE_MESH)&&(defined(ROTATIONOVERLIFETIME)||defined(ROTATIONOVERLIFETIMESEPERATE))\r\nvec3 computeParticleRotationVec3(in vec3 rotation,in float age,in float normalizedAge)\r\n{ \r\n\t#ifdef ROTATIONOVERLIFETIME\r\n\t#ifdef ROTATIONOVERLIFETIMECONSTANT\r\n\t\t\tfloat ageRot=u_ROLAngularVelocityConst*age;\r\n\t        rotation+=ageRot;\r\n\t\t#endif\r\n\t\t#ifdef ROTATIONOVERLIFETIMECURVE\r\n\t\t\trotation+=getTotalValueFromGradientFloat(u_ROLAngularVelocityGradient,normalizedAge);\r\n\t\t#endif\r\n\t\t#ifdef ROTATIONOVERLIFETIMERANDOMCONSTANTS\r\n\t\t\tfloat ageRot=mix(u_ROLAngularVelocityConst,u_ROLAngularVelocityConstMax,a_Random0.w)*age;\r\n\t        rotation+=ageRot;\r\n\t    #endif\r\n\t\t#ifdef ROTATIONOVERLIFETIMERANDOMCURVES\r\n\t\t\trotation+=mix(getTotalValueFromGradientFloat(u_ROLAngularVelocityGradient,normalizedAge),getTotalValueFromGradientFloat(u_ROLAngularVelocityGradientMax,normalizedAge),a_Random0.w);\r\n\t\t#endif\r\n\t#endif\r\n\t#ifdef ROTATIONOVERLIFETIMESEPERATE\r\n\t\t#ifdef ROTATIONOVERLIFETIMECONSTANT\r\n\t\t\tvec3 ageRot=u_ROLAngularVelocityConstSeprarate*age;\r\n\t        rotation+=ageRot;\r\n\t\t#endif\r\n\t\t#ifdef ROTATIONOVERLIFETIMECURVE\r\n\t\t\trotation+=vec3(getTotalValueFromGradientFloat(u_ROLAngularVelocityGradientX,normalizedAge),getTotalValueFromGradientFloat(u_ROLAngularVelocityGradientY,normalizedAge),getTotalValueFromGradientFloat(u_ROLAngularVelocityGradientZ,normalizedAge));\r\n\t\t#endif\r\n\t\t#ifdef ROTATIONOVERLIFETIMERANDOMCONSTANTS\r\n\t\t\tvec3 ageRot=mix(u_ROLAngularVelocityConstSeprarate,u_ROLAngularVelocityConstMaxSeprarate,a_Random0.w)*age;\r\n\t        rotation+=ageRot;\r\n\t    #endif\r\n\t\t#ifdef ROTATIONOVERLIFETIMERANDOMCURVES\r\n\t\t\trotation+=vec3(mix(getTotalValueFromGradientFloat(u_ROLAngularVelocityGradientX,normalizedAge),getTotalValueFromGradientFloat(u_ROLAngularVelocityGradientMaxX,normalizedAge),a_Random0.w)\r\n\t        ,mix(getTotalValueFromGradientFloat(u_ROLAngularVelocityGradientY,normalizedAge),getTotalValueFromGradientFloat(u_ROLAngularVelocityGradientMaxY,normalizedAge),a_Random0.w)\r\n\t        ,mix(getTotalValueFromGradientFloat(u_ROLAngularVelocityGradientZ,normalizedAge),getTotalValueFromGradientFloat(u_ROLAngularVelocityGradientMaxZ,normalizedAge),a_Random0.w));\r\n\t\t#endif\r\n\t#endif\r\n\treturn rotation;\r\n}\r\n#endif\r\n\r\nvec2 computeParticleUV(in vec2 uv,in float normalizedAge)\r\n{ \r\n\t#ifdef TEXTURESHEETANIMATIONCURVE\r\n\t\tfloat cycleNormalizedAge=normalizedAge*u_TSACycles;\r\n\t\tfloat frame=getFrameFromGradient(u_TSAGradientUVs,cycleNormalizedAge-floor(cycleNormalizedAge));\r\n\t\tfloat totalULength=frame*u_TSASubUVLength.x;\r\n\t\tfloat floorTotalULength=floor(totalULength);\r\n\t    uv.x+=totalULength-floorTotalULength;\r\n\t\tuv.y+=floorTotalULength*u_TSASubUVLength.y;\r\n    #endif\r\n\t#ifdef TEXTURESHEETANIMATIONRANDOMCURVE\r\n\t\tfloat cycleNormalizedAge=normalizedAge*u_TSACycles;\r\n\t\tfloat uvNormalizedAge=cycleNormalizedAge-floor(cycleNormalizedAge);\r\n\t    float frame=floor(mix(getFrameFromGradient(u_TSAGradientUVs,uvNormalizedAge),getFrameFromGradient(u_TSAMaxGradientUVs,uvNormalizedAge),a_Random1.x));\r\n\t\tfloat totalULength=frame*u_TSASubUVLength.x;\r\n\t\tfloat floorTotalULength=floor(totalULength);\r\n\t    uv.x+=totalULength-floorTotalULength;\r\n\t\tuv.y+=floorTotalULength*u_TSASubUVLength.y;\r\n    #endif\r\n\treturn uv;\r\n}\r\n\r\nvoid main()\r\n{\r\n\tfloat age = u_CurrentTime - a_DirectionTime.w;\r\n\tfloat normalizedAge = age/a_ShapePositionStartLifeTime.w;\r\n\tvec3 lifeVelocity;\r\n\tif(normalizedAge<1.0)\r\n\t{ \r\n\t\tvec3 startVelocity=a_DirectionTime.xyz*a_StartSpeed;\r\n\t\t#if defined(VELOCITYOVERLIFETIMECONSTANT)||defined(VELOCITYOVERLIFETIMECURVE)||defined(VELOCITYOVERLIFETIMERANDOMCONSTANT)||defined(VELOCITYOVERLIFETIMERANDOMCURVE)\r\n\t\t\tlifeVelocity= computeParticleLifeVelocity(normalizedAge);//计算粒子生命周期速度\r\n\t\t#endif \r\n\t\tvec3 gravityVelocity=u_Gravity*age;\r\n\t\t\r\n\t\tvec4 worldRotation;\r\n\t\tif(u_SimulationSpace==0)\r\n\t\t\tworldRotation=a_SimulationWorldRotation;\r\n\t\telse\r\n\t\t\tworldRotation=u_WorldRotation;\r\n\t\t\r\n\t\tvec3 center=computeParticlePosition(startVelocity, lifeVelocity, age, normalizedAge,gravityVelocity,worldRotation);//计算粒子位置\r\n\t\r\n\t\r\n\t\t#ifdef SPHERHBILLBOARD\r\n\t\t\tvec2 corner=a_CornerTextureCoordinate.xy;//Billboard模式z轴无效\r\n\t\t\tvec3 cameraUpVector =normalize(u_CameraUp);//TODO:是否外面归一化\r\n\t\t\tvec3 sideVector = normalize(cross(u_CameraDirection,cameraUpVector));\r\n\t\t\tvec3 upVector = normalize(cross(sideVector,u_CameraDirection));\r\n\t\t\tcorner*=computeParticleSizeBillbard(a_StartSize.xy,normalizedAge);\r\n\t\t\t#if defined(ROTATIONOVERLIFETIME)||defined(ROTATIONOVERLIFETIMESEPERATE)\r\n\t\t\t\tif(u_ThreeDStartRotation){\r\n\t\t\t\t\tvec3 rotation=vec3(a_StartRotation0.xy,computeParticleRotationFloat(a_StartRotation0.z,age,normalizedAge));\r\n\t\t\t\t\tcenter += u_SizeScale.xzy*rotationByEuler(corner.x*sideVector+corner.y*upVector,rotation);\r\n\t\t\t\t}\r\n\t\t\t\telse{\r\n\t\t\t\t\tfloat rot = computeParticleRotationFloat(a_StartRotation0.x, age,normalizedAge);\r\n\t\t\t\t\tfloat c = cos(rot);\r\n\t\t\t\t\tfloat s = sin(rot);\r\n\t\t\t\t\tmat2 rotation= mat2(c, -s, s, c);\r\n\t\t\t\t\tcorner=rotation*corner;\r\n\t\t\t\t\tcenter += u_SizeScale.xzy*(corner.x*sideVector+corner.y*upVector);\r\n\t\t\t\t}\r\n\t\t\t#else\r\n\t\t\t\tif(u_ThreeDStartRotation){\r\n\t\t\t\t\tcenter += u_SizeScale.xzy*rotationByEuler(corner.x*sideVector+corner.y*upVector,a_StartRotation0);\r\n\t\t\t\t}\r\n\t\t\t\telse{\r\n\t\t\t\t\tfloat c = cos(a_StartRotation0.x);\r\n\t\t\t\t\tfloat s = sin(a_StartRotation0.x);\r\n\t\t\t\t\tmat2 rotation= mat2(c, -s, s, c);\r\n\t\t\t\t\tcorner=rotation*corner;\r\n\t\t\t\t\tcenter += u_SizeScale.xzy*(corner.x*sideVector+corner.y*upVector);\r\n\t\t\t\t}\r\n\t\t\t#endif\r\n\t\t#endif\r\n\t\r\n\t\t#ifdef STRETCHEDBILLBOARD\r\n\t\tvec2 corner=a_CornerTextureCoordinate.xy;//Billboard模式z轴无效\r\n\t\tvec3 velocity;\r\n\t\t#if defined(VELOCITYOVERLIFETIMECONSTANT)||defined(VELOCITYOVERLIFETIMECURVE)||defined(VELOCITYOVERLIFETIMERANDOMCONSTANT)||defined(VELOCITYOVERLIFETIMERANDOMCURVE)\r\n\t\t\tif(u_VOLSpaceType==0)\r\n\t\t\tvelocity=rotationByQuaternions(u_SizeScale*(startVelocity+lifeVelocity),worldRotation)+gravityVelocity;\r\n\t\t\telse\r\n\t\t\tvelocity=rotationByQuaternions(u_SizeScale*startVelocity,worldRotation)+lifeVelocity+gravityVelocity;\r\n\t\t#else\r\n\t\t\tvelocity= rotationByQuaternions(u_SizeScale*startVelocity,worldRotation)+gravityVelocity;\r\n\t\t#endif\t\r\n\t\t\tvec3 cameraUpVector = normalize(velocity);\r\n\t\t\tvec3 direction = normalize(center-u_CameraPos);\r\n\t\t\tvec3 sideVector = normalize(cross(direction,normalize(velocity)));\r\n\t\t\t\r\n\t\t\tsideVector=u_SizeScale.xzy*sideVector;\r\n\t\t\tcameraUpVector=length(vec3(u_SizeScale.x,0.0,0.0))*cameraUpVector;\r\n\t\t\t\r\n\t\t\tvec2 size=computeParticleSizeBillbard(a_StartSize.xy,normalizedAge);\r\n\t\t\t\r\n\t\t\tconst mat2 rotaionZHalfPI=mat2(0.0, -1.0, 1.0, 0.0);\r\n\t\t\tcorner=rotaionZHalfPI*corner;\r\n\t\t\tcorner.y=corner.y-abs(corner.y);\r\n\t\t\t\r\n\t\t\tfloat speed=length(velocity);//TODO:\r\n\t\t\tcenter +=sign(u_SizeScale.x)*(sign(u_StretchedBillboardLengthScale)*size.x*corner.x*sideVector+(speed*u_StretchedBillboardSpeedScale+size.y*u_StretchedBillboardLengthScale)*corner.y*cameraUpVector);\r\n\t\t#endif\r\n\t\r\n\t\t#ifdef HORIZONTALBILLBOARD\r\n\t\t\tvec2 corner=a_CornerTextureCoordinate.xy;//Billboard模式z轴无效\r\n\t\t\tconst vec3 cameraUpVector=vec3(0.0,0.0,1.0);\r\n\t\t\tconst vec3 sideVector = vec3(-1.0,0.0,0.0);\r\n\t\t\t\r\n\t\t\tfloat rot = computeParticleRotationFloat(a_StartRotation0.x, age,normalizedAge);\r\n\t\t\tfloat c = cos(rot);\r\n\t\t\tfloat s = sin(rot);\r\n\t\t\tmat2 rotation= mat2(c, -s, s, c);\r\n\t\t\tcorner=rotation*corner*cos(0.78539816339744830961566084581988);//TODO:临时缩小cos45,不确定U3D原因\r\n\t\t\tcorner*=computeParticleSizeBillbard(a_StartSize.xy,normalizedAge);\r\n\t\t\tcenter +=u_SizeScale.xzy*(corner.x*sideVector+ corner.y*cameraUpVector);\r\n\t\t#endif\r\n\t\r\n\t\t#ifdef VERTICALBILLBOARD\r\n\t\t\tvec2 corner=a_CornerTextureCoordinate.xy;//Billboard模式z轴无效\r\n\t\t\tconst vec3 cameraUpVector =vec3(0.0,1.0,0.0);\r\n\t\t\tvec3 sideVector = normalize(cross(u_CameraDirection,cameraUpVector));\r\n\t\t\t\r\n\t\t\tfloat rot = computeParticleRotationFloat(a_StartRotation0.x, age,normalizedAge);\r\n\t\t\tfloat c = cos(rot);\r\n\t\t\tfloat s = sin(rot);\r\n\t\t\tmat2 rotation= mat2(c, -s, s, c);\r\n\t\t\tcorner=rotation*corner*cos(0.78539816339744830961566084581988);//TODO:临时缩小cos45,不确定U3D原因\r\n\t\t\tcorner*=computeParticleSizeBillbard(a_StartSize.xy,normalizedAge);\r\n\t\t\tcenter +=u_SizeScale.xzy*(corner.x*sideVector+ corner.y*cameraUpVector);\r\n\t\t#endif\r\n\t\r\n\t\t#ifdef RENDERMODE_MESH\r\n\t\t\tvec3 size=computeParticleSizeMesh(a_StartSize,normalizedAge);\r\n\t\t\t#if defined(ROTATIONOVERLIFETIME)||defined(ROTATIONOVERLIFETIMESEPERATE)\r\n\t\t\t\tif(u_ThreeDStartRotation){\r\n\t\t\t\t\tvec3 rotation=vec3(a_StartRotation0.xy,computeParticleRotationFloat(a_StartRotation0.z, age,normalizedAge));\r\n\t\t\t\t\tcenter+= rotationByQuaternions(u_SizeScale*rotationByEuler(a_MeshPosition*size,rotation),worldRotation);\r\n\t\t\t\t}\r\n\t\t\t\telse{\r\n\t\t\t\t\t#ifdef ROTATIONOVERLIFETIME\r\n\t\t\t\t\t\tfloat angle=computeParticleRotationFloat(a_StartRotation0.x, age,normalizedAge);\r\n\t\t\t\t\t\tif(a_ShapePositionStartLifeTime.x!=0.0||a_ShapePositionStartLifeTime.y!=0.0){\r\n\t\t\t\t\t\t\tcenter+= (rotationByQuaternions(rotationByAxis(u_SizeScale*a_MeshPosition*size,normalize(cross(vec3(0.0,0.0,1.0),vec3(a_ShapePositionStartLifeTime.xy,0.0))),angle),worldRotation));//已验证\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\telse{\r\n\t\t\t\t\t\t\t#ifdef SHAPE\r\n\t\t\t\t\t\t\t\tcenter+= u_SizeScale.xzy*(rotationByQuaternions(rotationByAxis(a_MeshPosition*size,vec3(0.0,-1.0,0.0),angle),worldRotation));\r\n\t\t\t\t\t\t\t#else\r\n\t\t\t\t\t\t\t\tif(u_SimulationSpace==0)\r\n\t\t\t\t\t\t\t\t\tcenter+=rotationByAxis(u_SizeScale*a_MeshPosition*size,vec3(0.0,0.0,-1.0),angle);//已验证\r\n\t\t\t\t\t\t\t\telse if(u_SimulationSpace==1)\r\n\t\t\t\t\t\t\t\t\tcenter+=rotationByQuaternions(u_SizeScale*rotationByAxis(a_MeshPosition*size,vec3(0.0,0.0,-1.0),angle),worldRotation);//已验证\r\n\t\t\t\t\t\t\t#endif\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t#endif\r\n\t\t\t\t\t#ifdef ROTATIONOVERLIFETIMESEPERATE\r\n\t\t\t\t\t\t//TODO:是否应合并if(u_ThreeDStartRotation)分支代码,待测试\r\n\t\t\t\t\t\tvec3 angle=computeParticleRotationVec3(vec3(0.0,0.0,-a_StartRotation0.x), age,normalizedAge);\r\n\t\t\t\t\t\tcenter+= (rotationByQuaternions(rotationByEuler(u_SizeScale*a_MeshPosition*size,vec3(angle.x,angle.y,angle.z)),worldRotation));//已验证\r\n\t\t\t\t\t#endif\t\t\r\n\t\t\t\t}\r\n\t\t\t#else\r\n\t\t\t\tif(u_ThreeDStartRotation){\r\n\t\t\t\t\tcenter+= rotationByQuaternions(u_SizeScale*rotationByEuler(a_MeshPosition*size,a_StartRotation0),worldRotation);//已验证\r\n\t\t\t\t}\r\n\t\t\t\telse{\r\n\t\t\t\t\tif(a_ShapePositionStartLifeTime.x!=0.0||a_ShapePositionStartLifeTime.y!=0.0){\r\n\t\t\t\t\t\tif(u_SimulationSpace==0)\r\n\t\t\t\t\t\t\tcenter+= rotationByAxis(u_SizeScale*a_MeshPosition*size,normalize(cross(vec3(0.0,0.0,1.0),vec3(a_ShapePositionStartLifeTime.xy,0.0))),a_StartRotation0.x);\r\n\t\t\t\t\t\telse if(u_SimulationSpace==1)\r\n\t\t\t\t\t\t\tcenter+= (rotationByQuaternions(u_SizeScale*rotationByAxis(a_MeshPosition*size,normalize(cross(vec3(0.0,0.0,1.0),vec3(a_ShapePositionStartLifeTime.xy,0.0))),a_StartRotation0.x),worldRotation));//已验证\r\n\t\t\t\t\t}\r\n\t\t\t\t\telse{\r\n\t\t\t\t\t\t#ifdef SHAPE\r\n\t\t\t\t\t\t\tif(u_SimulationSpace==0)\r\n\t\t\t\t\t\t\t\tcenter+= u_SizeScale*rotationByAxis(a_MeshPosition*size,vec3(0.0,-1.0,0.0),a_StartRotation0.x);\r\n\t\t\t\t\t\t\telse if(u_SimulationSpace==1)\r\n\t\t\t\t\t\t\t\tcenter+= rotationByQuaternions(u_SizeScale*rotationByAxis(a_MeshPosition*size,vec3(0.0,-1.0,0.0),a_StartRotation0.x),worldRotation);\t\r\n\t\t\t\t\t\t#else\r\n\t\t\t\t\t\t\tif(u_SimulationSpace==0)\r\n\t\t\t\t\t\t\t\tcenter+= rotationByAxis(u_SizeScale*a_MeshPosition*size,vec3(0.0,0.0,-1.0),a_StartRotation0.x);\r\n\t\t\t\t\t\t\telse if(u_SimulationSpace==1)\r\n\t\t\t\t\t\t\t\tcenter+= rotationByQuaternions(u_SizeScale*rotationByAxis(a_MeshPosition*size,vec3(0.0,0.0,-1.0),a_StartRotation0.x),worldRotation);//已验证\r\n\t\t\t\t\t\t#endif\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t#endif\r\n\t\t\tv_MeshColor=a_MeshColor;\r\n\t\t#endif\r\n\t\r\n\t\tgl_Position=u_Projection*u_View*vec4(center,1.0);\r\n\t\tv_Color = computeParticleColor(a_StartColor, normalizedAge);\r\n\t\t#ifdef DIFFUSEMAP\r\n\t\t\t#if defined(SPHERHBILLBOARD)||defined(STRETCHEDBILLBOARD)||defined(HORIZONTALBILLBOARD)||defined(VERTICALBILLBOARD)\r\n\t\t\t\tv_TextureCoordinate =computeParticleUV(a_CornerTextureCoordinate.zw, normalizedAge);\r\n\t\t\t#endif\r\n\t\t\t#ifdef RENDERMODE_MESH\r\n\t\t\t\tv_TextureCoordinate =computeParticleUV(a_MeshTextureCoordinate, normalizedAge);\r\n\t\t\t#endif\r\n\t\t\t\r\n\t\t\t#ifdef TILINGOFFSET\r\n\t\t\t\tv_TextureCoordinate=TransformUV(v_TextureCoordinate,u_TilingOffset);\r\n\t\t\t#endif\r\n\t\t#endif\r\n   \t}\r\n   \telse\r\n\t{\r\n\t\tgl_Position=vec4(2.0,2.0,2.0,1.0);//Discard use out of X(-1,1),Y(-1,1),Z(0,1)\r\n\t}\r\n\tgl_Position=remapGLPositionZ(gl_Position);\r\n}\r\n\r\n',
		ri =
		"struct LayaGI\r\n{\r\n\tvec3 diffuse;\r\n\tvec3 specular;\r\n};\r\n\r\nvec4 LayaAirBRDF(in vec3 diffuseColor, in vec3 specularColor, in float oneMinusReflectivity, in float smoothness, in vec3 normal, in vec3 viewDir, in vec3 lightDir, in vec3 lightColor, in LayaGI gi)\r\n{\r\n\tfloat perceptualRoughness = SmoothnessToPerceptualRoughness(smoothness);\r\n\tvec3 halfDir = SafeNormalize(viewDir - lightDir);\r\n\t\r\n\tfloat nv = abs(dot(normal, viewDir));\r\n\t\r\n\tfloat nl = clamp(dot(normal,   -lightDir),  0.0, 1.0);\r\n\tfloat nh = clamp(dot(normal,     halfDir),  0.0, 1.0);\r\n\tfloat lv = clamp(dot(lightDir,   viewDir),  0.0, 1.0);\r\n\tfloat lh = clamp(dot(lightDir,  -halfDir),  0.0, 1.0);\r\n\t\r\n\tfloat diffuseTerm = DisneyDiffuse(nv, nl, lh, perceptualRoughness) * nl;\r\n\t\r\n\tfloat roughness = PerceptualRoughnessToRoughness(perceptualRoughness);\r\n\t\r\n\t//#if UNITY_BRDF_GGX\r\n\t // GGX with roughtness to 0 would mean no specular at all, using max(roughness, 0.002) here to match HDrenderloop roughtness remapping.\r\n\troughness = max(roughness,0.014);\r\n\tfloat V = SmithJointGGXVisibilityTerm(nl, nv, roughness);\r\n\tfloat D = GGXTerm(nh, roughness);\r\n\t\r\n\tfloat specularTerm = V * D * PI;\r\n\t\r\n\tspecularTerm = sqrt(max(0.0001, specularTerm));\r\n\tspecularTerm = max(0.0, specularTerm * nl);\r\n\t\r\n\tfloat surfaceReduction = 1.0 - 0.28 * roughness * perceptualRoughness;\r\n\tfloat grazingTerm = clamp(smoothness + (1.0 - oneMinusReflectivity), 0.0, 1.0);\r\n\t\r\n\tvec4 color;\r\n\tcolor.rgb = diffuseColor * (gi.diffuse+lightColor * diffuseTerm) \r\n\t\t\t  + specularTerm * lightColor * FresnelTerm (specularColor, lh);\r\n\t\t\t  //+ surfaceReduction * gi.specular * FresnelLerp(specularColor, vec3(grazingTerm), nv);\r\n\t\r\n\treturn color;\r\n}\r\nvec4 LayaAirStandardReflect(in vec4 albedoColor,in float metallic,in float smoothness,in LayaGI gi)\r\n{\r\n\tvec3 diffuseColor;\r\n\tvec3 specularColor;\r\n\tfloat alpha;\r\n\tfloat oneMinusReflectivity;\r\n\tdiffuseColor = DiffuseAndSpecularFromMetallic (albedoColor.rgb, metallic, specularColor, oneMinusReflectivity);\r\n\tdiffuseColor = LayaPreMultiplyAlpha(diffuseColor, albedoColor.a, oneMinusReflectivity, alpha);\r\n\tfloat perceptualRoughness = SmoothnessToPerceptualRoughness(smoothness);\r\n\tfloat roughness = PerceptualRoughnessToRoughness(perceptualRoughness);\r\n\tfloat surfaceReduction = 1.0 - 0.28 * roughness * perceptualRoughness;\r\n\tvec4 color;\r\n\tcolor.rgb = surfaceReduction * gi.specular;\r\n\tcolor.a = alpha;\r\n\treturn color;\r\n\r\n}\r\n\r\nvec4 LayaAirSpecularReflect(in vec4 albedoColor,in vec3 specularColor,in float smoothness,in LayaGI gi)\r\n{\r\n\tfloat oneMinusReflectivity;\r\n\tvec3 diffuseColor;\r\n\tfloat alpha;\r\n\t\r\n\tdiffuseColor = EnergyConservationBetweenDiffuseAndSpecular (albedoColor.rgb, specularColor, oneMinusReflectivity);\r\n\t\r\n\tdiffuseColor = LayaPreMultiplyAlpha(diffuseColor, albedoColor.a, oneMinusReflectivity, alpha);\r\n\r\n\tfloat perceptualRoughness = SmoothnessToPerceptualRoughness(smoothness);\r\n\tfloat roughness = PerceptualRoughnessToRoughness(perceptualRoughness);\r\n\tfloat surfaceReduction = 1.0 - 0.28 * roughness * perceptualRoughness;\r\n\tvec4 color;\r\n\tcolor.rgb = surfaceReduction * gi.specular;\r\n\tcolor.a = alpha;\r\n\treturn color;\r\n}",
		ii =
		'#include "PBRUtils.glsl"\r\n#include "BRDF.glsl"\r\n\r\nvec4 PBRSpecularLight(in vec4 albedoColor, in vec3 specularColor, in float smoothness, in vec3 normal, in vec3 viewDir, in vec3 lightDir, in vec3 lightColor, in LayaGI gi)\r\n{\r\n\tfloat oneMinusReflectivity;\r\n\tvec3 diffuseColor;\r\n\tfloat alpha;\r\n\t\r\n\tdiffuseColor = EnergyConservationBetweenDiffuseAndSpecular (albedoColor.rgb, specularColor, oneMinusReflectivity);\r\n\t\r\n\tdiffuseColor = LayaPreMultiplyAlpha(diffuseColor, albedoColor.a, oneMinusReflectivity, alpha);\r\n\t\r\n\tvec4 color = LayaAirBRDF(diffuseColor, specularColor, oneMinusReflectivity, smoothness, normal, viewDir, lightDir, lightColor, gi);\r\n\tcolor.a = alpha;\r\n\treturn color;\r\n}\r\n\r\nvec4 PBRSpecularDiectionLight (in vec4 albedoColor, in vec3 specularColor, in float smoothness, in vec3 normal, in vec3 viewDir, in DirectionLight light, in LayaGI gi)\r\n{\r\n\tvec3 lightVec = normalize(light.direction);\r\n\treturn PBRSpecularLight(albedoColor, specularColor, smoothness, normal, viewDir, lightVec, light.color, gi);\r\n}\r\n#ifdef POINTLIGHT\r\nvec4 PBRSpecularPointLight (in vec4 albedoColor, in vec3 specularColor, in float smoothness, in vec3 normal, in vec3 viewDir, in PointLight light, in vec3 pos, in LayaGI gi)\r\n{\r\n\tvec3 lightVec = pos-light.position;\r\n\tfloat attenuate = LayaAttenuation(lightVec, 1.0/light.range);\r\n\treturn PBRSpecularLight(albedoColor, specularColor, smoothness, normal, viewDir, lightVec, light.color, gi) * attenuate;\r\n}\r\n#endif\r\nvec4 PBRSpecularSpotLight (in vec4 albedoColor, in vec3 specularColor, in float smoothness, in vec3 normal, in vec3 viewDir, in SpotLight light, in vec3 pos, in LayaGI gi)\r\n{\r\n\tvec3 lightVec =  pos - light.position;\r\n\tvec3 normalLightVec = normalize(lightVec);\r\n\tvec2 cosAngles = cos(vec2(light.spot, light.spot*0.5) * 0.5);//ConeAttenuation\r\n\tfloat dl = dot(normalize(light.direction), normalLightVec);\r\n\tdl *= smoothstep(cosAngles[0], cosAngles[1], dl);\r\n\tfloat attenuate = LayaAttenuation(lightVec, 1.0/light.range) * dl;\r\n\treturn PBRSpecularLight(albedoColor, specularColor, smoothness, normal, viewDir, lightVec, light.color, gi) * attenuate;\r\n}\r\n\r\n//vec4 PBRStandardSpotLight1 (in vec4 albedoColor, in float metallic, in float smoothness, in vec3 normal, in vec3 viewDir, in SpotLight light, in vec3 pos, in LayaGI gi)\r\n//{\r\n//\tvec4 lightCoord = u_SpotLightMatrix * vec4(pos, 1.0);\r\n//\t\r\n//\tfloat distance = dot(lightCoord, lightCoord);\r\n//\tfloat attenuate = (lightCoord.z < 0.0) ? texture2D(u_RangeTexture, vec2(distance)).w : 0.0;\r\n//\t//float attenuate = (lightCoord.z < 0.0) ? texture2D(u_AngleTexture, vec2(lightCoord.x / lightCoord.w + 0.5, lightCoord.y / lightCoord.w + 0.5)).r * texture2D(u_RangeTexture, vec2(distance)).w : 0.0;\r\n//\t//vec2 _uv = vec2(pos.x * 180.0/(2.0 * pos.z) + 0.5, pos.y * 180.0/(2.0 * pos.z) + 0.5);\r\n//\tvec3 lightVec = normalize(pos - light.cosition);\r\n//\treturn PBRStandardLight(albedoColor, metallic, smoothness, normal, viewDir, lightVec, light.color, gi) * attenuate;\r\n//}\r\n\r\nvec4 SpecularGloss(float albedoTextureAlpha, in vec2 uv0)\r\n{\r\n    vec4 sg;\r\n\t\r\n\t#ifdef SPECULARTEXTURE\r\n\t\tvec4 specularTextureColor = texture2D(u_SpecularTexture, uv0);\r\n\t\t#ifdef SMOOTHNESSSOURCE_ALBEDOTEXTURE_ALPHA\r\n\t\t\tsg.rgb = specularTextureColor.rgb;\r\n\t\t\tsg.a = albedoTextureAlpha;\r\n\t\t#else\r\n\t\t\tsg = specularTextureColor;\r\n\t\t#endif\r\n\t\tsg.a *= u_smoothnessScale;\r\n\t#else\r\n\t\tsg.rgb = u_SpecularColor.rgb;\r\n\t\t#ifdef SMOOTHNESSSOURCE_ALBEDOTEXTURE_ALPHA\r\n\t\t\tsg.a = albedoTextureAlpha * u_smoothnessScale;\r\n\t\t#else\r\n\t\t\tsg.a = u_smoothness;\r\n\t\t#endif\r\n\t#endif\r\n\t\r\n    return sg;\r\n}\r\n\r\n',
		ai =
		'#include "PBRUtils.glsl"\r\n#include "BRDF.glsl"\r\n\r\nvec4 PBRStandardLight(in vec4 albedoColor, in float metallic, in float smoothness, in vec3 normal, in vec3 viewDir, in vec3 lightDir, in vec3 lightColor, in LayaGI gi)\r\n{\r\n\tfloat oneMinusReflectivity;\r\n\tvec3 diffuseColor;\r\n\tvec3 specularColor;\r\n\tfloat alpha;\r\n\t\r\n\tdiffuseColor = DiffuseAndSpecularFromMetallic (albedoColor.rgb, metallic, specularColor, oneMinusReflectivity);\r\n\t\r\n\tdiffuseColor = LayaPreMultiplyAlpha(diffuseColor, albedoColor.a, oneMinusReflectivity, alpha);\r\n\t\r\n\tvec4 color = LayaAirBRDF(diffuseColor, specularColor, oneMinusReflectivity, smoothness, normal, viewDir, lightDir, lightColor, gi);\r\n\tcolor.a = alpha;\r\n\treturn color;\r\n}\r\n\r\nvec4 PBRStandardDiectionLight (in vec4 albedoColor, in float metallic, in float smoothness, in vec3 normal, in vec3 viewDir, in DirectionLight light, in LayaGI gi)\r\n{\r\n\tvec3 lightVec = normalize(light.direction);\r\n\treturn PBRStandardLight(albedoColor, metallic, smoothness, normal, viewDir, lightVec, light.color, gi);\r\n}\r\n#ifdef POINTLIGHT\r\nvec4 PBRStandardPointLight (in vec4 albedoColor, in float metallic, in float smoothness, in vec3 normal, in vec3 viewDir, in PointLight light, in vec3 pos, in LayaGI gi)\r\n{\r\n\tvec3 lightVec = pos-light.position;\r\n\tfloat attenuate = LayaAttenuation(lightVec, 1.0/light.range);\r\n\treturn PBRStandardLight(albedoColor, metallic, smoothness, normal, viewDir, lightVec, light.color, gi) * attenuate;\r\n}\r\n#endif\r\nvec4 PBRStandardSpotLight (in vec4 albedoColor, in float metallic, in float smoothness, in vec3 normal, in vec3 viewDir, in SpotLight light, in vec3 pos, in LayaGI gi)\r\n{\r\n\tvec3 lightVec =  pos - light.position;\r\n\tvec3 normalLightVec = normalize(lightVec);\r\n\tvec2 cosAngles = cos(vec2(light.spot, light.spot*0.5) * 0.5);//ConeAttenuation\r\n\tfloat dl = dot(normalize(light.direction), normalLightVec);\r\n\tdl *= smoothstep(cosAngles[0], cosAngles[1], dl);\r\n\tfloat attenuate = LayaAttenuation(lightVec, 1.0/light.range) * dl;\r\n\treturn PBRStandardLight(albedoColor, metallic, smoothness, normal, viewDir, lightVec, light.color, gi) * attenuate;\r\n\t\r\n}\r\n\r\n//vec4 PBRStandardSpotLight1 (in vec4 albedoColor, in float metallic, in float smoothness, in vec3 normal, in vec3 viewDir, in SpotLight light, in vec3 pos, in LayaGI gi)\r\n//{\r\n//\tvec4 lightCoord = u_SpotLightMatrix * vec4(pos, 1.0);\r\n//\t\r\n//\tfloat distance = dot(lightCoord, lightCoord);\r\n//\tfloat attenuate = (lightCoord.z < 0.0) ? texture2D(u_RangeTexture, vec2(distance)).w : 0.0;\r\n//\t//float attenuate = (lightCoord.z < 0.0) ? texture2D(u_AngleTexture, vec2(lightCoord.x / lightCoord.w + 0.5, lightCoord.y / lightCoord.w + 0.5)).r * texture2D(u_RangeTexture, vec2(distance)).w : 0.0;\r\n//\t//vec2 _uv = vec2(pos.x * 180.0/(2.0 * pos.z) + 0.5, pos.y * 180.0/(2.0 * pos.z) + 0.5);\r\n//\tvec3 lightVec = normalize(pos - light.position);\r\n//\treturn PBRStandardLight(albedoColor, metallic, smoothness, normal, viewDir, lightVec, light.color, gi) * attenuate;\r\n//}\r\n\r\nvec2 MetallicGloss(in float albedoTextureAlpha, in vec2 uv0)\r\n{\r\n\tvec2 mg;\r\n\t\r\n\t#ifdef METALLICGLOSSTEXTURE\r\n\t\tvec4 metallicGlossTextureColor = texture2D(u_MetallicGlossTexture, uv0);\r\n\t\t#ifdef SMOOTHNESSSOURCE_ALBEDOTEXTURE_ALPHA\r\n\t\t\tmg.r = metallicGlossTextureColor.r;\r\n\t\t\tmg.g = albedoTextureAlpha;\r\n\t\t#else\r\n\t\t    mg = metallicGlossTextureColor.ra;\r\n\t\t#endif\r\n\t\tmg.g *= u_smoothnessScale;\r\n\t#else\r\n\t\tmg.r = u_metallic;\r\n\t\t#ifdef SMOOTHNESSSOURCE_ALBEDOTEXTURE_ALPHA\r\n\t\t\tmg.g = albedoTextureAlpha * u_smoothnessScale;\r\n\t\t#else\r\n\t\t\tmg.g = u_smoothness;\r\n\t\t#endif\r\n\t#endif\r\n\t\r\n\treturn mg;\r\n}\r\n\r\n',
		ni =
		"\r\nvec3 UnpackScaleNormal(in vec2 uv0)\r\n{\r\n\t#ifdef NORMALTEXTURE\r\n\t\tvec3 normalT;\r\n\t\tvec4 normalMapSample = texture2D(u_NormalTexture, uv0);\r\n\t\tnormalT.x = 2.0 * normalMapSample.x - 1.0;\r\n\t\tnormalT.y = 1.0 - 2.0 * normalMapSample.y;\r\n\t\tnormalT.xy *= u_normalScale;\r\n\t\tnormalT.z = sqrt(1.0 - clamp(dot(normalT.xy, normalT.xy), 0.0, 1.0));\r\n\t\t\r\n\t\tvec3 T = normalize(v_Tangent);\r\n\t\tvec3 B = normalize(v_Binormal);\r\n\t\tvec3 N = normalize(v_Normal);\r\n\t\tmat3 TBN = mat3(T, B, N);\r\n\t\t\r\n\t\tvec3 bumpedNormal = TBN * normalize(normalT);\r\n\t\treturn bumpedNormal;\r\n\t#else\r\n\t\treturn normalize(v_Normal);\r\n\t#endif\r\n}\r\n\r\nvec4 DielectricSpecularColor = vec4(0.220916301, 0.220916301, 0.220916301, 1.0 - 0.220916301);\r\n\r\nfloat PI = 3.14159265359;\r\n\r\nvec3 FresnelTerm (in vec3 F0, in float cosA)\r\n{\r\n\treturn F0 + (vec3(1.0) - F0) * pow(1.0 - cosA, 5.0);\r\n}\r\n\r\nvec3 FresnelLerp (in vec3 F0, in vec3 F90, float cosA)\r\n{\r\n    float t = pow(1.0 - cosA, 5.0);\r\n    return mix(F0, F90, t);\r\n}\r\n\r\nfloat PerceptualRoughnessToRoughness(in float perceptualRoughness)\r\n{\r\n\treturn perceptualRoughness * perceptualRoughness;\r\n}\r\n\r\nfloat PerceptualRoughnessToSpecularPower(in float perceptualRoughness)\r\n{\r\n\tfloat m = PerceptualRoughnessToRoughness(perceptualRoughness);\r\n\tfloat sq = max(0.0001, m * m);\r\n\tfloat n = (2.0 / sq) - 2.0;\r\n\tn = max(n, 0.0001);\r\n\treturn n;\r\n}\r\n\r\nfloat RoughnessToPerceptualRoughness(in float roughness)\r\n{\r\n\treturn sqrt(roughness);\r\n}\r\n\r\nfloat SmoothnessToRoughness(in float smoothness)\r\n{\r\n\treturn (1.0 - smoothness) * (1.0 - smoothness);\r\n}\r\n\r\nfloat SmoothnessToPerceptualRoughness(in float smoothness)\r\n{\r\n\treturn (1.0 - smoothness);\r\n}\r\n\r\nvec3 SafeNormalize(in vec3 inVec)\r\n{\r\n\tfloat dp3 = max(0.001,dot(inVec,inVec));\r\n\treturn inVec * (1.0 / sqrt(dp3));\r\n}\r\n\r\nfloat DisneyDiffuse(in float NdotV, in float NdotL, in float LdotH, in float perceptualRoughness)\r\n{\r\n\tfloat fd90 = 0.5 + 2.0 * LdotH * LdotH * perceptualRoughness;\r\n\tfloat lightScatter\t= (1.0 + (fd90 - 1.0) * pow(1.0 - NdotL,5.0));\r\n\tfloat viewScatter\t= (1.0 + (fd90 - 1.0) * pow(1.0 - NdotV,5.0));\r\n\r\n\treturn lightScatter * viewScatter;\r\n}\r\n\r\nfloat SmithJointGGXVisibilityTerm (float NdotL, float NdotV, float roughness)\r\n{\r\n\tfloat a = roughness;\r\n\tfloat lambdaV = NdotL * (NdotV * (1.0 - a) + a);\r\n\tfloat lambdaL = NdotV * (NdotL * (1.0 - a) + a);\r\n\r\n\treturn 0.5 / (lambdaV + lambdaL + 0.00001);\r\n}\r\n\r\nfloat GGXTerm (float NdotH, float roughness)\r\n{\r\n\tfloat a2 = roughness * roughness;\r\n\tfloat d = (NdotH * a2 - NdotH) * NdotH + 1.0;\r\n\treturn 0.31830988618 * a2 / (d * d + 0.0000001);\r\n}\r\n\r\nfloat OneMinusReflectivityFromMetallic(in float metallic)\r\n{\r\n\tfloat oneMinusDielectricSpec = DielectricSpecularColor.a;\r\n\treturn oneMinusDielectricSpec - metallic * oneMinusDielectricSpec;\r\n}\r\n\r\nfloat SpecularStrength(vec3 specular)\r\n{\r\n    //(SHADER_TARGET < 30)return specular.r; \r\n    return max (max (specular.r, specular.g), specular.b);\r\n}\r\n\r\nvec3 DiffuseAndSpecularFromMetallic(in vec3 diffuseColor, in float metallic, out vec3 specularColor, out float oneMinusReflectivity)\r\n{\r\n\tspecularColor = mix(DielectricSpecularColor.rgb, diffuseColor, metallic);\r\n\toneMinusReflectivity = OneMinusReflectivityFromMetallic(metallic);\r\n\treturn diffuseColor * oneMinusReflectivity;\r\n}\r\n\r\nvec3 EnergyConservationBetweenDiffuseAndSpecular(in vec3 diffuseColor, in vec3 specularColor, out float oneMinusReflectivity)\r\n{\r\n\toneMinusReflectivity = 1.0 - SpecularStrength(specularColor);\r\n\treturn diffuseColor * oneMinusReflectivity;\r\n}\r\n\r\nvec4 Occlusion(in vec2 uv0){\r\n\t#ifdef OCCLUSIONTEXTURE\r\n\t\tvec4 occlusionTextureColor = texture2D(u_OcclusionTexture, uv0);\r\n\t\tfloat occ = occlusionTextureColor.g;\r\n\t\tfloat oneMinusT = 1.0 - u_occlusionStrength;\r\n\t\tfloat lerpOneTo = oneMinusT + occ * u_occlusionStrength;\r\n\t\treturn occlusionTextureColor * lerpOneTo;\r\n\t#else\r\n\t\treturn vec4(1.0);\r\n\t#endif\r\n}\r\n\r\nvec2 ParallaxOffset(in vec3 viewDir){\r\n\t#ifdef PARALLAXTEXTURE\r\n\t\tfloat h = texture2D(u_ParallaxTexture, v_Texcoord0).g;\r\n\t\th = h * u_parallaxScale - u_parallaxScale / 2.0;\r\n\t\tvec3 v = viewDir;\r\n\t\tv.z += 0.42;\r\n\t\tvec2 offset = h * (v.xy / v.z);\r\n\t\treturn v_Texcoord0 + offset;\r\n\t#else\r\n\t\treturn v_Texcoord0;\r\n\t#endif\r\n}\r\n\r\nvec3 ReflectCubeMap(in vec3 viewDir, in vec3 normal){\r\n\t#ifdef REFLECTMAP\r\n\t\tvec3 incident = -viewDir;\r\n\t\tvec3 reflectionVector = reflect(incident, normal);\r\n\t\tvec3 reflectionColor = textureCube(u_ReflectTexture, vec3(-reflectionVector.x, reflectionVector.yz)).rgb;\r\n\t\treturn reflectionColor * u_ReflectIntensity;\r\n\t#else\r\n\t\treturn vec3(0.0);\r\n\t#endif\r\n}\r\n\r\n\r\n\r\nvec3 LayaPreMultiplyAlpha(vec3 diffColor, float alpha, float oneMinusReflectivity, out float outModifiedAlpha)\r\n{\r\n\t#ifdef ALPHAPREMULTIPLY\r\n\t\tdiffColor *= alpha;\r\n\t\toutModifiedAlpha = 1.0 - oneMinusReflectivity + alpha * oneMinusReflectivity;\r\n\t#else\r\n\t\toutModifiedAlpha = alpha;\r\n\t#endif\r\n\treturn diffColor;\r\n}\r\n\r\n",
		si =
		'#ifdef HIGHPRECISION\r\n\tprecision highp float;\r\n#else\r\n\tprecision mediump float;\r\n#endif\r\n\r\nvarying vec2 v_Texcoord0;\r\nvarying vec3 v_Normal;\r\nvarying vec3 v_Tangent;\r\nvarying vec3 v_Binormal;\r\nvarying vec3 v_ViewDir;\r\nvarying vec3 v_PositionWorld;\r\n\r\nuniform vec3 u_AmbientColor;\r\nuniform vec4 u_AlbedoColor;\r\nuniform vec4 u_SpecularColor;\r\n\r\n#ifdef ALBEDOTEXTURE\r\n\tuniform sampler2D u_AlbedoTexture;\r\n#endif\r\n#ifdef SPECULARTEXTURE\r\n\tuniform sampler2D u_SpecularTexture;\r\n#endif\r\n#ifdef NORMALTEXTURE\r\n\tuniform sampler2D u_NormalTexture;\r\n\tuniform float u_normalScale;\r\n#endif\r\n#ifdef PARALLAXTEXTURE\r\n\tuniform sampler2D u_ParallaxTexture;\r\n\tuniform float u_parallaxScale;\r\n#endif\r\n#ifdef OCCLUSIONTEXTURE\r\n\tuniform sampler2D u_OcclusionTexture;\r\n\tuniform float u_occlusionStrength;\r\n#endif\r\n#ifdef EMISSION\r\n\t#ifdef EMISSIONTEXTURE\r\n\t\tuniform sampler2D u_EmissionTexture;\r\n\t#endif\r\n\tuniform vec4 u_EmissionColor;\r\n#endif\r\n#ifdef REFLECTMAP\r\n\tuniform samplerCube u_ReflectTexture;\r\n\tuniform float u_ReflectIntensity;\r\n#endif\r\n\r\nuniform float u_AlphaTestValue;\r\nuniform float u_metallic;\r\nuniform float u_smoothness;\r\nuniform float u_smoothnessScale;\r\n\r\n\r\n\r\n#include "Lighting.glsl";\r\n#include "PBRSpecularLighting.glsl"\r\n#include "ShadowHelper.glsl"\r\n\r\nvarying float v_posViewZ;\r\n#ifdef RECEIVESHADOW\r\n\t#if defined(SHADOWMAP_PSSM2)||defined(SHADOWMAP_PSSM3)\r\n\t\tuniform mat4 u_lightShadowVP[4];\r\n\t#endif\r\n\t#ifdef SHADOWMAP_PSSM1 \r\n\t\tvarying vec4 v_lightMVPPos;\r\n\t#endif\r\n#endif\r\n\r\n#ifdef LEGACYSINGLELIGHTING\r\n\t#ifdef DIRECTIONLIGHT\r\n\t\tuniform DirectionLight u_DirectionLight;\r\n\t#endif\r\n\t#ifdef POINTLIGHT\r\n\t\tuniform PointLight u_PointLight;\r\n\t#endif\r\n\t#ifdef SPOTLIGHT\r\n\t\tuniform SpotLight u_SpotLight;\r\n\t#endif\r\n#else\r\n\t\tuniform mat4 u_View;\r\n\t\tuniform vec4 u_ProjectionParams;\r\n\t\tuniform vec4 u_Viewport;\r\n\t\tuniform int u_DirationLightCount;\r\n\t\tuniform sampler2D u_LightBuffer;\r\n\t\tuniform sampler2D u_LightClusterBuffer;\r\n#endif\r\n\r\n#ifdef FOG\r\n\tuniform float u_FogStart;\r\n\tuniform float u_FogRange;\r\n\tuniform vec3 u_FogColor;\r\n#endif\r\n\r\nvoid main_castShadow()\r\n{\r\n\tgl_FragColor=packDepth(v_posViewZ);\r\n\t#if defined(DIFFUSEMAP)&&defined(ALPHATEST)\r\n\t\tfloat alpha = texture2D(u_AlbedoTexture,v_Texcoord0).w;\r\n\t\tif( alpha < u_AlphaTestValue )\r\n\t\t{\r\n\t\t\tdiscard;\r\n\t\t}\r\n\t#endif\r\n}\r\n\r\nvoid main_normal()\r\n{\t\r\n\tvec3 viewDir = normalize(v_ViewDir);\r\n\t\r\n\tvec2 uv0 = ParallaxOffset(viewDir);\r\n\t\r\n\tvec4 sg;\r\n\tvec4 albedoColor;\r\n\t#ifdef ALBEDOTEXTURE\r\n\t\tvec4 albedoTextureColor = texture2D(u_AlbedoTexture, uv0);\r\n\t\talbedoColor = albedoTextureColor * u_AlbedoColor;\r\n\t\tsg = SpecularGloss(albedoTextureColor.a, uv0);\r\n\t#else\r\n\t\talbedoColor = u_AlbedoColor;\r\n\t\tsg = SpecularGloss(1.0, uv0);\r\n\t#endif\r\n\t\r\n\t#ifdef ALPHATEST\r\n\t\tif(albedoColor.a < u_AlphaTestValue)\r\n\t\t\tdiscard;\r\n\t#endif\r\n  \r\n\tvec3 normal = UnpackScaleNormal(uv0);\r\n\t\r\n\tLayaGI gi;\r\n\tgi.diffuse = u_AmbientColor * Occlusion(uv0).rgb;\r\n\tgi.specular = ReflectCubeMap(viewDir, normal);\r\n\t\r\n\t//float a = (sg.r+sg.g+sg.b) / 3.0;\r\n  \r\n\tvec4 color = vec4(0.0);\r\n\t#ifdef LEGACYSINGLELIGHTING\r\n\t\t#ifdef DIRECTIONLIGHT\r\n\t\t\tcolor += PBRSpecularDiectionLight(albedoColor, sg.rgb, sg.a, normal, viewDir, u_DirectionLight, gi);\r\n\t\t#endif\r\n\t\r\n\t\t#ifdef POINTLIGHT\r\n\t\t\tcolor.a = 0.0;\r\n\t\t\tcolor += PBRSpecularPointLight(albedoColor, sg.rgb, sg.a, normal, viewDir, u_PointLight, v_PositionWorld, gi);\r\n\t\t#endif\r\n\t\t\r\n\t\t#ifdef SPOTLIGHT\r\n\t\t\tcolor.a = 0.0;\r\n\t\t\tcolor += PBRSpecularSpotLight(albedoColor, sg.rgb, sg.a, normal, viewDir, u_SpotLight, v_PositionWorld, gi);\r\n\t\t#endif\r\n\t#else\r\n\t\t#ifdef DIRECTIONLIGHT\r\n\t\t\tfor (int i = 0; i < MAX_LIGHT_COUNT; i++) \r\n\t\t\t{\r\n\t\t\t\tif(i >= u_DirationLightCount)\r\n\t\t\t\t\tbreak;\r\n\t\t\t\tDirectionLight directionLight = getDirectionLight(u_LightBuffer,i);\r\n\t\t\t\tcolor.a = 0.0;\r\n\t\t\t\tcolor +=PBRSpecularDiectionLight(albedoColor, sg.rgb, sg.a, normal, viewDir, directionLight, gi);\r\n\t\t\t}\r\n\t\t#endif\r\n\t\t#if defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n\t\t\tivec4 clusterInfo =getClusterInfo(u_LightClusterBuffer,u_View,u_Viewport, v_PositionWorld,gl_FragCoord,u_ProjectionParams);\r\n\t\t\t#ifdef POINTLIGHT\r\n\t\t\t\tfor (int i = 0; i < MAX_LIGHT_COUNT; i++) \r\n\t\t\t\t{\r\n\t\t\t\t\tif(i >= clusterInfo.x)//PointLightCount\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tPointLight pointLight = getPointLight(u_LightBuffer,u_LightClusterBuffer,clusterInfo,i);\r\n\t\t\t\t\tcolor.a = 0.0;\r\n\t\t\t\t\tcolor +=PBRSpecularPointLight(albedoColor, sg.rgb, sg.a, normal, viewDir, pointLight, v_PositionWorld, gi);\r\n\t\t\t\t}\r\n\t\t\t#endif\r\n\t\t\t#ifdef SPOTLIGHT\r\n\t\t\t\tfor (int i = 0; i < MAX_LIGHT_COUNT; i++) \r\n\t\t\t\t{\r\n\t\t\t\t\tif(i >= clusterInfo.y)//SpotLightCount\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tSpotLight spotLight = getSpotLight(u_LightBuffer,u_LightClusterBuffer,clusterInfo,i);\r\n\t\t\t\t\tcolor.a = 0.0;\r\n\t\t\t\t\tcolor += PBRSpecularSpotLight(albedoColor, sg.rgb, sg.a, normal, viewDir, spotLight, v_PositionWorld, gi);\r\n\t\t\t\t}\r\n\t\t\t#endif\r\n\t\t#endif\r\n\t#endif\r\n\t\r\n\t#ifdef REFLECTMAP\r\n\t \tcolor += LayaAirSpecularReflect(albedoColor,sg.rgb,sg.a,gi);\r\n\t#endif\r\n\r\n\t#ifdef EMISSION\r\n\t\tvec4 emissionColor = u_EmissionColor;\r\n\t\t#ifdef EMISSIONTEXTURE\r\n\t\t\temissionColor *=  texture2D(u_EmissionTexture, uv0);\r\n\t\t#endif\r\n\t\tcolor.rgb += emissionColor.rgb;\r\n\t#endif\r\n\t\r\n\t#ifdef RECEIVESHADOW\r\n\t\tfloat shadowValue = 1.0;\r\n\t\t#ifdef SHADOWMAP_PSSM3\r\n\t\t\tshadowValue = getShadowPSSM3( u_shadowMap1,u_shadowMap2,u_shadowMap3,u_lightShadowVP,u_shadowPSSMDistance,u_shadowPCFoffset,v_PositionWorld,v_posViewZ,0.001);\r\n\t\t#endif\r\n\t\t#ifdef SHADOWMAP_PSSM2\r\n\t\t\tshadowValue = getShadowPSSM2( u_shadowMap1,u_shadowMap2,u_lightShadowVP,u_shadowPSSMDistance,u_shadowPCFoffset,v_PositionWorld,v_posViewZ,0.001);\r\n\t\t#endif \r\n\t\t#ifdef SHADOWMAP_PSSM1\r\n\t\t\tshadowValue = getShadowPSSM1( u_shadowMap1,v_lightMVPPos,u_shadowPSSMDistance,u_shadowPCFoffset,v_posViewZ,0.001);\r\n\t\t#endif\r\n\t\tgl_FragColor = vec4(color.rgb * shadowValue, color.a);\r\n\t#else\r\n\t\tgl_FragColor = color;\r\n\t#endif\r\n\t\r\n\t#ifdef FOG\r\n\t\tfloat lerpFact = clamp((1.0 / gl_FragCoord.w - u_FogStart) / u_FogRange, 0.0, 1.0);\r\n\t\tgl_FragColor.rgb = mix(gl_FragColor.rgb, u_FogColor, lerpFact);\r\n\t#endif\r\n}\r\n\r\nvoid main()\r\n{\r\n\t#ifdef CASTSHADOW\t\t\r\n\t\tmain_castShadow();\r\n\t#else\r\n\t\tmain_normal();\r\n\t#endif  \r\n}\r\n\r\n',
		oi =
		'#include "Lighting.glsl";\r\n\r\nattribute vec4 a_Position;\r\nattribute vec3 a_Normal;\r\nattribute vec4 a_Tangent0;\r\nattribute vec2 a_Texcoord0;\r\n\r\n#ifdef GPU_INSTANCE\r\n\tattribute mat4 a_MvpMatrix;\r\n#else\r\n\tuniform mat4 u_MvpMatrix;\r\n#endif\r\n\r\n#ifdef GPU_INSTANCE\r\n\tattribute mat4 a_WorldMat;\r\n#else\r\n\tuniform mat4 u_WorldMat;\r\n#endif\r\nuniform vec3 u_CameraPos;\r\n\r\nvarying vec2 v_Texcoord0;\r\nvarying vec3 v_Normal;\r\nvarying vec3 v_Tangent;\r\nvarying vec3 v_Binormal;\r\nvarying vec3 v_ViewDir;\r\nvarying vec3 v_PositionWorld;\r\n\r\n#ifdef TILINGOFFSET\r\n\tuniform vec4 u_TilingOffset;\r\n#endif\r\n\r\nvarying float v_posViewZ;\r\n#ifdef RECEIVESHADOW\r\n  #ifdef SHADOWMAP_PSSM1 \r\n\t  varying vec4 v_lightMVPPos;\r\n\t  uniform mat4 u_lightShadowVP[4];\r\n  #endif\r\n#endif\r\n\r\n#ifdef BONE\r\n\tconst int c_MaxBoneCount = 24;\r\n\tattribute vec4 a_BoneIndices;\r\n\tattribute vec4 a_BoneWeights;\r\n\tuniform mat4 u_Bones[c_MaxBoneCount];\r\n#endif\r\n\r\nvoid main_castShadow()\r\n{\r\n\tvec4 position;\r\n\t#ifdef BONE\r\n\t\tmat4 skinTransform = u_Bones[int(a_BoneIndices.x)] * a_BoneWeights.x;\r\n\t\tskinTransform += u_Bones[int(a_BoneIndices.y)] * a_BoneWeights.y;\r\n\t\tskinTransform += u_Bones[int(a_BoneIndices.z)] * a_BoneWeights.z;\r\n\t\tskinTransform += u_Bones[int(a_BoneIndices.w)] * a_BoneWeights.w;\r\n\t\tposition=skinTransform*a_Position;\r\n\t#else\r\n\t\tposition=a_Position;\r\n\t#endif\r\n\t#ifdef GPU_INSTANCE\r\n\t\tgl_Position = a_MvpMatrix * position;\r\n\t#else\r\n\t\tgl_Position = u_MvpMatrix * position;\r\n\t#endif\r\n\t \r\n\t//TODO没考虑UV动画呢\r\n\t#if defined(DIFFUSEMAP)&&defined(ALPHATEST)\r\n\t\tv_Texcoord0 = a_Texcoord0;\r\n\t#endif\r\n\tgl_Position=remapGLPositionZ(gl_Position);\r\n\tv_posViewZ = gl_Position.z;\r\n}\r\n\r\nvoid main_normal()\r\n{\r\n\tvec4 position;\r\n\t#ifdef BONE\r\n\t\tmat4 skinTransform = u_Bones[int(a_BoneIndices.x)] * a_BoneWeights.x;\r\n\t\tskinTransform += u_Bones[int(a_BoneIndices.y)] * a_BoneWeights.y;\r\n\t\tskinTransform += u_Bones[int(a_BoneIndices.z)] * a_BoneWeights.z;\r\n\t\tskinTransform += u_Bones[int(a_BoneIndices.w)] * a_BoneWeights.w;\r\n\t\tposition=skinTransform*a_Position;\r\n\t#else\r\n\t\tposition=a_Position;\r\n\t#endif\r\n\t#ifdef GPU_INSTANCE\r\n\t\tgl_Position = a_MvpMatrix * position;\r\n\t#else\r\n\t\tgl_Position = u_MvpMatrix * position;\r\n\t#endif\r\n\t\r\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)||defined(RECEIVESHADOW)||defined(REFLECTMAP)\r\n\t\tmat4 worldMat;\r\n\t\t#ifdef GPU_INSTANCE\r\n\t\t\tworldMat = a_WorldMat;\r\n\t\t#else\r\n\t\t\tworldMat = u_WorldMat;\r\n\t\t#endif\r\n\t#endif\r\n\t\r\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)||defined(REFLECTMAP)\r\n\t\tmat3 worldInvMat;\r\n\t\t#ifdef BONE\r\n\t\t\tworldInvMat=inverse(mat3(worldMat*skinTransform));\r\n\t\t#else\r\n\t\t\tworldInvMat=inverse(mat3(worldMat));\r\n\t\t#endif  \r\n\t\tv_Normal=a_Normal*worldInvMat;\r\n\t\t#if (defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))\r\n\t\t\tv_Tangent=a_Tangent0.xyz*worldInvMat;\r\n\t\t\tv_Binormal=cross(v_Normal,v_Tangent)*a_Tangent0.w;\r\n\t\t#endif\r\n\t#endif\r\n\t\r\n\t\r\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)||defined(RECEIVESHADOW)||defined(REFLECTMAP)\r\n\t\tv_PositionWorld=(worldMat*position).xyz;\r\n\t#endif\r\n\t\r\n  \r\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)||defined(REFLECTMAP)\r\n\t\tv_ViewDir=u_CameraPos-v_PositionWorld;\r\n\t#endif\r\n\r\n\t#ifdef TILINGOFFSET\r\n\t\tv_Texcoord0=TransformUV(a_Texcoord0,u_TilingOffset);\r\n\t#else\r\n\t\tv_Texcoord0=a_Texcoord0;\r\n\t#endif\r\n  \r\n\t#ifdef RECEIVESHADOW\r\n\t\tv_posViewZ = gl_Position.w;\r\n\t\t#ifdef SHADOWMAP_PSSM1 \r\n\t\t\tv_lightMVPPos = u_lightShadowVP[0] * vec4(v_PositionWorld,1.0);\r\n\t\t#endif\r\n\t#endif\r\n\tgl_Position=remapGLPositionZ(gl_Position);\r\n}\r\n\r\nvoid main()\r\n{\r\n\t#ifdef CASTSHADOW\r\n\t\tmain_castShadow();\r\n\t#else\r\n\t\tmain_normal();\r\n\t#endif\r\n}',
		li =
		'#ifdef HIGHPRECISION\r\n\tprecision highp float;\r\n#else\r\n\tprecision mediump float;\r\n#endif\r\n\r\nvarying vec2 v_Texcoord0;\r\nvarying vec3 v_Normal;\r\nvarying vec3 v_Tangent;\r\nvarying vec3 v_Binormal;\r\nvarying vec3 v_ViewDir;\r\nvarying vec3 v_PositionWorld;\r\n\r\nuniform vec3 u_AmbientColor;\r\nuniform vec4 u_AlbedoColor;\r\n\r\n#ifdef ALBEDOTEXTURE\r\n\tuniform sampler2D u_AlbedoTexture;\r\n#endif\r\n#ifdef METALLICGLOSSTEXTURE\r\n\tuniform sampler2D u_MetallicGlossTexture;\r\n#endif\r\n#ifdef NORMALTEXTURE\r\n\tuniform sampler2D u_NormalTexture;\r\n\tuniform float u_normalScale;\r\n#endif\r\n#ifdef PARALLAXTEXTURE\r\n\tuniform sampler2D u_ParallaxTexture;\r\n\tuniform float u_parallaxScale;\r\n#endif\r\n#ifdef OCCLUSIONTEXTURE\r\n\tuniform sampler2D u_OcclusionTexture;\r\n\tuniform float u_occlusionStrength;\r\n#endif\r\n#ifdef EMISSION\r\n\t#ifdef EMISSIONTEXTURE\r\n\t\tuniform sampler2D u_EmissionTexture;\r\n\t#endif\r\n\tuniform vec4 u_EmissionColor;\r\n#endif\r\n#ifdef REFLECTMAP\r\n\tuniform samplerCube u_ReflectTexture;\r\n\tuniform float u_ReflectIntensity;\r\n#endif\r\n\r\nuniform float u_AlphaTestValue;\r\nuniform float u_metallic;\r\nuniform float u_smoothness;\r\nuniform float u_smoothnessScale;\r\n\r\n\r\n\r\n\r\n#include "Lighting.glsl";\r\n#include "PBRStandardLighting.glsl"\r\n#include "ShadowHelper.glsl"\r\n\r\nvarying float v_posViewZ;\r\n#ifdef RECEIVESHADOW\r\n\t#if defined(SHADOWMAP_PSSM2)||defined(SHADOWMAP_PSSM3)\r\n\t\tuniform mat4 u_lightShadowVP[4];\r\n\t#endif\r\n\t#ifdef SHADOWMAP_PSSM1 \r\n\t\tvarying vec4 v_lightMVPPos;\r\n\t#endif\r\n#endif\r\n\r\n#ifdef LEGACYSINGLELIGHTING\r\n\t#ifdef DIRECTIONLIGHT\r\n\t\tuniform DirectionLight u_DirectionLight;\r\n\t#endif\r\n\t#ifdef POINTLIGHT\r\n\t\tuniform PointLight u_PointLight;\r\n\t#endif\r\n\t#ifdef SPOTLIGHT\r\n\t\tuniform SpotLight u_SpotLight;\r\n\t#endif\r\n#else\r\n\t\tuniform mat4 u_View;\r\n\t\tuniform vec4 u_ProjectionParams;\r\n\t\tuniform vec4 u_Viewport;\r\n\t\tuniform int u_DirationLightCount;\r\n\t\tuniform sampler2D u_LightBuffer;\r\n\t\tuniform sampler2D u_LightClusterBuffer;\r\n#endif\r\n\r\n#ifdef FOG\r\n\tuniform float u_FogStart;\r\n\tuniform float u_FogRange;\r\n\tuniform vec3 u_FogColor;\r\n#endif\r\n\r\nvoid main_castShadow()\r\n{\r\n\tgl_FragColor=packDepth(v_posViewZ);\r\n\t#if defined(DIFFUSEMAP)&&defined(ALPHATEST)\r\n\t\tfloat alpha = texture2D(u_AlbedoTexture,v_Texcoord0).w;\r\n\t\tif( alpha < u_AlphaTestValue )\r\n\t\t{\r\n\t\t\tdiscard;\r\n\t\t}\r\n\t#endif\r\n}\r\n\r\nvoid main_normal()\r\n{\t\r\n\tvec3 viewDir = normalize(v_ViewDir);\r\n\t\r\n\tvec2 uv0 = ParallaxOffset(viewDir);\r\n\t\r\n\tvec2 mg;\r\n\tvec4 albedoColor;\r\n\t#ifdef ALBEDOTEXTURE\r\n\t\tvec4 abledoTextureColor = texture2D(u_AlbedoTexture, uv0);\r\n\t\talbedoColor = abledoTextureColor * u_AlbedoColor;\r\n\t\tmg = MetallicGloss(abledoTextureColor.a, uv0);\r\n\t#else\r\n\t\talbedoColor = u_AlbedoColor;\r\n\t\tmg = MetallicGloss(1.0, uv0);\r\n\t#endif\r\n\t\r\n\t#ifdef ALPHATEST\r\n\t\tif(albedoColor.a < u_AlphaTestValue)\r\n\t\t\tdiscard;\r\n\t#endif\r\n\t\r\n\tvec3 normal = UnpackScaleNormal(uv0);\r\n  \r\n\tLayaGI gi;\r\n\tgi.diffuse = u_AmbientColor * Occlusion(uv0).rgb;\r\n\tgi.specular = ReflectCubeMap(viewDir, normal);\r\n  \r\n\tvec4 color = vec4(0.0);\r\n\t#ifdef LEGACYSINGLELIGHTING\r\n\t\t#ifdef DIRECTIONLIGHT\r\n\t\t\tcolor += PBRStandardDiectionLight(albedoColor, mg.r, mg.g, normal, viewDir, u_DirectionLight, gi);\r\n\t\t#endif\r\n\t\r\n\t\t#ifdef POINTLIGHT\r\n\t\t\tcolor.a = 0.0;\r\n\t\t\tcolor += PBRStandardPointLight(albedoColor, mg.r, mg.g, normal, viewDir, u_PointLight, v_PositionWorld, gi);\r\n\t\t#endif\r\n\t\t\r\n\t\t#ifdef SPOTLIGHT\r\n\t\t\tcolor.a = 0.0;\r\n\t\t\tcolor += PBRStandardSpotLight(albedoColor, mg.r, mg.g, normal, viewDir, u_SpotLight, v_PositionWorld, gi);\r\n\t\t#endif\r\n\t#else\r\n\t\t#ifdef DIRECTIONLIGHT\r\n\t\t\tfor (int i = 0; i < MAX_LIGHT_COUNT; i++) \r\n\t\t\t{\r\n\t\t\t\tif(i >= u_DirationLightCount)\r\n\t\t\t\t\tbreak;\r\n\t\t\t\tDirectionLight directionLight = getDirectionLight(u_LightBuffer,i);\r\n\t\t\t\tcolor.a = 0.0;\r\n\t\t\t\tcolor += PBRStandardDiectionLight(albedoColor, mg.r, mg.g, normal, viewDir, directionLight, gi);\r\n\t\t\t}\r\n\t\t#endif\r\n\t\t#if defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n\t\t\tivec4 clusterInfo =getClusterInfo(u_LightClusterBuffer,u_View,u_Viewport, v_PositionWorld,gl_FragCoord,u_ProjectionParams);\r\n\t\t\t#ifdef POINTLIGHT\r\n\t\t\t\tfor (int i = 0; i < MAX_LIGHT_COUNT; i++) \r\n\t\t\t\t{\r\n\t\t\t\t\tif(i >= clusterInfo.x)//PointLightCount\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tPointLight pointLight = getPointLight(u_LightBuffer,u_LightClusterBuffer,clusterInfo,i);\r\n\t\t\t\t\tcolor.a = 0.0;\r\n\t\t\t\t\tcolor += PBRStandardPointLight(albedoColor, mg.r, mg.g, normal, viewDir, pointLight, v_PositionWorld, gi);\r\n\t\t\t\t}\r\n\t\t\t#endif\r\n\t\t\t#ifdef SPOTLIGHT\r\n\t\t\t\tfor (int i = 0; i < MAX_LIGHT_COUNT; i++) \r\n\t\t\t\t{\r\n\t\t\t\t\tif(i >= clusterInfo.y)//SpotLightCount\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tSpotLight spotLight = getSpotLight(u_LightBuffer,u_LightClusterBuffer,clusterInfo,i);\r\n\t\t\t\t\tcolor.a = 0.0;\r\n\t\t\t\t\tcolor += PBRStandardSpotLight(albedoColor, mg.r, mg.g, normal, viewDir, spotLight, v_PositionWorld, gi);\r\n\t\t\t\t\t\r\n\t\t\t\t}\r\n\t\t\t#endif\r\n\t\t#endif\r\n\t#endif\r\n\r\n\t\r\n\t#ifdef REFLECTMAP\r\n\t \tcolor += LayaAirStandardReflect(albedoColor,mg.r,mg.g,gi);\r\n\t#endif\r\n\r\n\t#ifdef EMISSION\r\n\t\tvec4 emissionColor = u_EmissionColor;\r\n\t\t#ifdef EMISSIONTEXTURE\r\n\t\t\temissionColor *=  texture2D(u_EmissionTexture, uv0);\r\n\t\t#endif\r\n\t\tcolor.rgb += emissionColor.rgb;\r\n\t#endif\r\n\t\r\n\t#ifdef RECEIVESHADOW\r\n\t\tfloat shadowValue = 1.0;\r\n\t\t#ifdef SHADOWMAP_PSSM3\r\n\t\t\tshadowValue = getShadowPSSM3( u_shadowMap1,u_shadowMap2,u_shadowMap3,u_lightShadowVP,u_shadowPSSMDistance,u_shadowPCFoffset,v_PositionWorld,v_posViewZ,0.001);\r\n\t\t#endif\r\n\t\t#ifdef SHADOWMAP_PSSM2\r\n\t\t\tshadowValue = getShadowPSSM2( u_shadowMap1,u_shadowMap2,u_lightShadowVP,u_shadowPSSMDistance,u_shadowPCFoffset,v_PositionWorld,v_posViewZ,0.001);\r\n\t\t#endif \r\n\t\t#ifdef SHADOWMAP_PSSM1\r\n\t\t\tshadowValue = getShadowPSSM1( u_shadowMap1,v_lightMVPPos,u_shadowPSSMDistance,u_shadowPCFoffset,v_posViewZ,0.001);\r\n\t\t#endif\r\n\t\tgl_FragColor = vec4(color.rgb * shadowValue, color.a);\r\n\t#else\r\n\t\tgl_FragColor = color;\r\n\t#endif\r\n\t\r\n\t#ifdef FOG\r\n\t\tfloat lerpFact = clamp((1.0 / gl_FragCoord.w - u_FogStart) / u_FogRange, 0.0, 1.0);\r\n\t\tgl_FragColor.rgb = mix(gl_FragColor.rgb, u_FogColor, lerpFact);\r\n\t#endif\r\n}\r\n\r\nvoid main()\r\n{\r\n\t#ifdef CASTSHADOW\t\t\r\n\t\tmain_castShadow();\r\n\t#else\r\n\t\tmain_normal();\r\n\t#endif  \r\n}',
		_i =
		'#include "Lighting.glsl";\r\n\r\nattribute vec4 a_Position;\r\nattribute vec3 a_Normal;\r\nattribute vec4 a_Tangent0;\r\nattribute vec2 a_Texcoord0;\r\n\r\n#ifdef GPU_INSTANCE\r\n\tattribute mat4 a_MvpMatrix;\r\n#else\r\n\tuniform mat4 u_MvpMatrix;\r\n#endif\r\n\r\n#ifdef GPU_INSTANCE\r\n\tattribute mat4 a_WorldMat;\r\n#else\r\n\tuniform mat4 u_WorldMat;\r\n#endif\r\n\r\nuniform vec3 u_CameraPos;\r\n\r\nvarying vec2 v_Texcoord0;\r\nvarying vec3 v_Normal;\r\nvarying vec3 v_Tangent;\r\nvarying vec3 v_Binormal;\r\nvarying vec3 v_ViewDir;\r\nvarying vec3 v_PositionWorld;\r\n\r\n#ifdef TILINGOFFSET\r\n\tuniform vec4 u_TilingOffset;\r\n#endif\r\n\r\nvarying float v_posViewZ;\r\n#ifdef RECEIVESHADOW\r\n  #ifdef SHADOWMAP_PSSM1 \r\n\t  varying vec4 v_lightMVPPos;\r\n\t  uniform mat4 u_lightShadowVP[4];\r\n  #endif\r\n#endif\r\n\r\n#ifdef BONE\r\n\tconst int c_MaxBoneCount = 24;\r\n\tattribute vec4 a_BoneIndices;\r\n\tattribute vec4 a_BoneWeights;\r\n\tuniform mat4 u_Bones[c_MaxBoneCount];\r\n#endif\r\n\r\nvoid main_castShadow()\r\n{\r\n\tvec4 position;\r\n\t#ifdef BONE\r\n\t\tmat4 skinTransform = u_Bones[int(a_BoneIndices.x)] * a_BoneWeights.x;\r\n\t\tskinTransform += u_Bones[int(a_BoneIndices.y)] * a_BoneWeights.y;\r\n\t\tskinTransform += u_Bones[int(a_BoneIndices.z)] * a_BoneWeights.z;\r\n\t\tskinTransform += u_Bones[int(a_BoneIndices.w)] * a_BoneWeights.w;\r\n\t\tposition=skinTransform*a_Position;\r\n\t#else\r\n\t\tposition=a_Position;\r\n\t#endif\r\n\t#ifdef GPU_INSTANCE\r\n\t\tgl_Position = a_MvpMatrix * position;\r\n\t#else\r\n\t\tgl_Position = u_MvpMatrix * position;\r\n\t#endif\r\n\t \r\n\t//TODO没考虑UV动画呢\r\n\t#if defined(DIFFUSEMAP)&&defined(ALPHATEST)\r\n\t\tv_Texcoord0 = a_Texcoord0;\r\n\t#endif\r\n\tgl_Position=remapGLPositionZ(gl_Position);\r\n\tv_posViewZ = gl_Position.z;\r\n}\r\n\r\nvoid main_normal()\r\n{\r\n\tvec4 position;\r\n\t#ifdef BONE\r\n\t\tmat4 skinTransform = u_Bones[int(a_BoneIndices.x)] * a_BoneWeights.x;\r\n\t\tskinTransform += u_Bones[int(a_BoneIndices.y)] * a_BoneWeights.y;\r\n\t\tskinTransform += u_Bones[int(a_BoneIndices.z)] * a_BoneWeights.z;\r\n\t\tskinTransform += u_Bones[int(a_BoneIndices.w)] * a_BoneWeights.w;\r\n\t\tposition=skinTransform*a_Position;\r\n\t#else\r\n\t\tposition=a_Position;\r\n\t#endif\r\n\t#ifdef GPU_INSTANCE\r\n\t\tgl_Position = a_MvpMatrix * position;\r\n\t#else\r\n\t\tgl_Position = u_MvpMatrix * position;\r\n\t#endif\r\n\t\r\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)||defined(RECEIVESHADOW)||defined(REFLECTMAP)\r\n\t\tmat4 worldMat;\r\n\t\t#ifdef GPU_INSTANCE\r\n\t\t\tworldMat = a_WorldMat;\r\n\t\t#else\r\n\t\t\tworldMat = u_WorldMat;\r\n\t\t#endif\r\n\t#endif\r\n\t\r\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)||defined(REFLECTMAP)\r\n\t\tmat3 worldInvMat;\r\n\t\t#ifdef BONE\r\n\t\t\tworldInvMat=inverse(mat3(worldMat*skinTransform));\r\n\t\t#else\r\n\t\t\tworldInvMat=inverse(mat3(worldMat));\r\n\t\t#endif  \r\n\t\tv_Normal=a_Normal*worldInvMat;\r\n\t\t#if (defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))\r\n\t\t\tv_Tangent=a_Tangent0.xyz*worldInvMat;\r\n\t\t\tv_Binormal=cross(v_Normal,v_Tangent)*a_Tangent0.w;\r\n\t\t#endif\r\n\t#endif\r\n\t\r\n\t\r\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)||defined(RECEIVESHADOW)||defined(REFLECTMAP)\r\n\t\tv_PositionWorld=(worldMat*position).xyz;\r\n\t#endif\r\n\t\r\n  \r\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)||defined(REFLECTMAP)||defined(REFLECTMAP)\r\n\t\tv_ViewDir=u_CameraPos-v_PositionWorld;\r\n\t#endif\r\n\r\n\t#ifdef TILINGOFFSET\r\n\t\tv_Texcoord0=TransformUV(a_Texcoord0,u_TilingOffset);\r\n\t#else\r\n\t\tv_Texcoord0=a_Texcoord0;\r\n\t#endif\r\n  \r\n\t#ifdef RECEIVESHADOW\r\n\t\tv_posViewZ = gl_Position.w;\r\n\t\t#ifdef SHADOWMAP_PSSM1 \r\n\t\t\tv_lightMVPPos = u_lightShadowVP[0] * vec4(v_PositionWorld,1.0);\r\n\t\t#endif\r\n\t#endif\r\n\tgl_Position=remapGLPositionZ(gl_Position);\r\n}\r\n\r\nvoid main()\r\n{\r\n\t#ifdef CASTSHADOW\r\n\t\tmain_castShadow();\r\n\t#else\r\n\t\tmain_normal();\r\n\t#endif\r\n}',
		hi =
		'#include "Lighting.glsl";\r\n\r\nattribute vec4 a_PositionTexcoord;\r\nvarying vec2 v_Texcoord0;\r\n\r\nvoid main() {\r\n\tgl_Position = vec4(a_PositionTexcoord.xy, 0.0, 1.0);\r\n\tv_Texcoord0 = a_PositionTexcoord.zw;\r\n\tgl_Position = remapGLPositionZ(gl_Position);\r\n}',
		ci =
		'#ifdef HIGHPRECISION\r\n\tprecision highp float;\r\n#else\r\n\tprecision mediump float;\r\n#endif\r\n\r\n#include "Colors.glsl";\r\n#include "Sampling.glsl";\r\n\r\nvarying vec2 v_Texcoord0;\r\n\r\nuniform sampler2D u_MainTex;\r\nuniform vec4 u_MainTex_TexelSize;\r\n\r\nvoid fragDownsample13() {\r\n\tmediump vec4 color = downsampleBox13Tap(u_MainTex, v_Texcoord0, u_MainTex_TexelSize.xy);\r\n\tgl_FragColor = color;\r\n}\r\n\r\nvoid main() {\r\n\tfragDownsample13();\r\n}',
		di =
		'#ifdef HIGHPRECISION\r\n\tprecision highp float;\r\n#else\r\n\tprecision mediump float;\r\n#endif\r\n\r\n#include "Colors.glsl";\r\n#include "Sampling.glsl";\r\n\r\nvarying vec2 v_Texcoord0;\r\n\r\nuniform sampler2D u_MainTex;\r\nuniform vec4 u_MainTex_TexelSize;\r\n\r\nvoid fragDownsample4() {\r\n\tmediump vec4 color = downsampleBox4Tap(u_MainTex, v_Texcoord0, u_MainTex_TexelSize.xy);\r\n\tgl_FragColor = color;\r\n}\r\n\r\nvoid main() {\r\n\tfragDownsample4();\r\n}',
		ui =
		'#ifdef HIGHPRECISION\r\n\tprecision highp float;\r\n#else\r\n\tprecision mediump float;\r\n#endif\r\n\r\n#include "Colors.glsl";\r\n#include "Sampling.glsl";\r\n\r\nvarying vec2 v_Texcoord0;\r\n\r\nuniform sampler2D u_MainTex;\r\nuniform sampler2D u_AutoExposureTex;\r\nuniform vec4 u_MainTex_TexelSize;\r\nuniform vec4 u_Threshold; // x: threshold value (linear), y: threshold - knee, z: knee * 2, w: 0.25 / knee\r\nuniform vec4 u_Params; // x: clamp, yzw: unused\r\n\r\nmediump vec4 prefilter(mediump vec4 color, vec2 uv) {\r\n\tmediump float autoExposure = texture2D(u_AutoExposureTex, uv).r;\r\n\tcolor *= autoExposure;\r\n\tcolor = min(vec4(u_Params.x), color); // clamp to max\r\n\tcolor = quadraticThreshold(color, u_Threshold.x, u_Threshold.yzw);\r\n\treturn color;\r\n}\r\n\r\nvoid fragPrefilter13() {\r\n\tmediump vec4 color = downsampleBox13Tap(u_MainTex, v_Texcoord0, u_MainTex_TexelSize.xy);\r\n\tgl_FragColor = prefilter(safeHDR(color), v_Texcoord0);\r\n}\r\n\r\nvoid main() {\r\n\tfragPrefilter13();\r\n}',
		fi =
		'#ifdef HIGHPRECISION\r\n\tprecision highp float;\r\n#else\r\n\tprecision mediump float;\r\n#endif\r\n\r\n#include "Colors.glsl";\r\n#include "Sampling.glsl";\r\n\r\nvarying vec2 v_Texcoord0;\r\n\r\nuniform sampler2D u_MainTex;\r\nuniform sampler2D u_AutoExposureTex;\r\nuniform vec4 u_MainTex_TexelSize;\r\nuniform vec4 u_Threshold; // x: threshold value (linear), y: threshold - knee, z: knee * 2, w: 0.25 / knee\r\nuniform vec4 u_Params; // x: clamp, yzw: unused\r\n\r\nmediump vec4 prefilter(mediump vec4 color, vec2 uv) {\r\n\tmediump float autoExposure = texture2D(u_AutoExposureTex, uv).r;\r\n\tcolor *= autoExposure;\r\n\tcolor = min(vec4(u_Params.x), color); // clamp to max\r\n\tcolor = quadraticThreshold(color, u_Threshold.x, u_Threshold.yzw);\r\n\treturn color;\r\n}\r\n\r\nvoid fragPrefilter4() {\r\n\tmediump vec4 color = downsampleBox4Tap(u_MainTex, v_Texcoord0, u_MainTex_TexelSize.xy);\r\n\tgl_FragColor = prefilter(safeHDR(color), v_Texcoord0);\r\n}\r\n\r\nvoid main() {\r\n\tfragPrefilter4();\r\n}',
		mi =
		'#ifdef HIGHPRECISION\r\n\tprecision highp float;\r\n#else\r\n\tprecision mediump float;\r\n#endif\r\n\r\n#include "Colors.glsl";\r\n#include "Sampling.glsl";\r\n\r\nvarying vec2 v_Texcoord0;\r\n\r\nuniform sampler2D u_MainTex;\r\nuniform sampler2D u_BloomTex;\r\n\r\nuniform vec4 u_MainTex_TexelSize;\r\nuniform float u_SampleScale;\r\n\r\nmediump vec4 combine(mediump vec4 bloom, vec2 uv) {\r\n\tmediump vec4 color = texture2D(u_BloomTex, uv);\r\n\treturn bloom + color;\r\n}\r\n\r\nvoid fragUpsampleBox() {\r\n\tmediump vec4 bloom = upsampleBox(u_MainTex, v_Texcoord0, u_MainTex_TexelSize.xy, vec4(u_SampleScale));\r\n\tgl_FragColor = combine(bloom, v_Texcoord0);\r\n}\r\n\r\nvoid main() {\r\n\tfragUpsampleBox();\r\n}',
		Ei =
		'#ifdef HIGHPRECISION\r\n\tprecision highp float;\r\n#else\r\n\tprecision mediump float;\r\n#endif\r\n\r\n#include "Colors.glsl";\r\n#include "Sampling.glsl";\r\n\r\nvarying vec2 v_Texcoord0;\r\n\r\nuniform sampler2D u_MainTex;\r\nuniform sampler2D u_BloomTex;\r\n\r\nuniform vec4 u_MainTex_TexelSize;\r\nuniform float u_SampleScale;\r\n\r\nmediump vec4 combine(mediump vec4 bloom, vec2 uv) {\r\n\tmediump vec4 color = texture2D(u_BloomTex, uv);\r\n\treturn bloom + color;\r\n}\r\n\r\nvoid fragUpsampleTent() {\r\n\tmediump vec4 bloom = upsampleTent(u_MainTex, v_Texcoord0, u_MainTex_TexelSize.xy, vec4(u_SampleScale));\r\n\tgl_FragColor = combine(bloom, v_Texcoord0);\r\n}\r\n\r\nvoid main() {\r\n\tfragUpsampleTent();\r\n}',
		Ti =
		'#include "StdLib.glsl";\r\n\r\n#define EPSILON 1.0e-4\r\n\r\n// Quadratic color thresholding\r\n// curve = (threshold - knee, knee * 2, 0.25 / knee)\r\nmediump vec4 quadraticThreshold(mediump vec4 color, mediump float threshold, mediump vec3 curve) {\r\n\t// Pixel brightness\r\n\tmediump float br = max3(color.r, color.g, color.b);\r\n\r\n\t// Under-threshold part: quadratic curve\r\n\tmediump float rq = clamp(br - curve.x, 0.0, curve.y);\r\n\trq = curve.z * rq * rq;\r\n\r\n\t// Combine and apply the brightness response curve.\r\n\tcolor *= max(rq, br - threshold) / max(br, EPSILON);\r\n\r\n\treturn color;\r\n}\r\n\r\n\r\n\r\n//\r\n// sRGB transfer functions\r\n// Fast path ref: http://chilliant.blogspot.com.au/2012/08/srgb-approximations-for-hlsl.html?m=1\r\n//\r\nmediump vec3 sRGBToLinear(mediump vec3 c) {\r\n\t#ifdef USE_VERY_FAST_SRGB\r\n\t\treturn c * c;\r\n\t#elif defined(USE_FAST_SRGB)\r\n\t\treturn c * (c * (c * 0.305306011 + 0.682171111) + 0.012522878);\r\n\t#else\r\n\t\tmediump vec3 linearRGBLo = c / 12.92;\r\n\t\tmediump vec3 power=vec3(2.4, 2.4, 2.4);\r\n\t\tmediump vec3 linearRGBHi = positivePow((c + 0.055) / 1.055, power);\r\n\t\tmediump vec3 linearRGB =vec3((c.r<=0.04045) ? linearRGBLo.r : linearRGBHi.r,(c.g<=0.04045) ? linearRGBLo.g : linearRGBHi.g,(c.b<=0.04045) ? linearRGBLo.b : linearRGBHi.b);\r\n\t\treturn linearRGB;\r\n\t#endif\r\n}\r\n\r\nmediump vec4 sRGBToLinear(mediump vec4 c){\r\n    return vec4(sRGBToLinear(c.rgb), c.a);\r\n}\r\n\r\n\r\n\r\nmediump vec3 linearToSRGB(mediump vec3 c) {\r\n\t#ifdef USE_VERY_FAST_SRGB\r\n\t\treturn sqrt(c);\r\n\t#elif defined(USE_FAST_SRGB)\r\n\t\treturn max(1.055 * PositivePow(c, 0.416666667) - 0.055, 0.0);\r\n\t#else\r\n\t\tmediump vec3 sRGBLo = c * 12.92;\r\n\t\tmediump vec3 power=vec3(1.0 / 2.4, 1.0 / 2.4, 1.0 / 2.4);\r\n\t\tmediump vec3 sRGBHi = (positivePow(c, power) * 1.055) - 0.055;\r\n\t\tmediump vec3 sRGB =vec3((c.r<=0.0031308) ? sRGBLo.r : sRGBHi.r,(c.g<=0.0031308) ? sRGBLo.g : sRGBHi.g,(c.b<=0.0031308) ? sRGBLo.b : sRGBHi.b);\r\n\t\treturn sRGB;\r\n\t#endif\r\n}\r\n\r\nmediump vec4 linearToSRGB(mediump vec4 c){\r\n    return vec4(linearToSRGB(c.rgb), c.a);\r\n}',
		pi =
		'#ifdef HIGHPRECISION\r\n\tprecision highp float;\r\n#else\r\n\tprecision mediump float;\r\n#endif\r\n\r\n#include "Colors.glsl";\r\n#include "Sampling.glsl";\r\n\r\nvarying vec2 v_Texcoord0;\r\n\r\nuniform sampler2D u_MainTex;\r\nuniform sampler2D u_BloomTex;\r\n\r\nuniform sampler2D u_AutoExposureTex;\r\nuniform sampler2D u_Bloom_DirtTex;\r\nuniform vec4 u_BloomTex_TexelSize;\r\nuniform vec4 u_Bloom_DirtTileOffset; // xy: tiling, zw: offset\r\nuniform mediump vec3 u_Bloom_Settings;// x: sampleScale, y: intensity, z: dirt intensity\r\nuniform mediump vec3 u_Bloom_Color;\r\n\r\nvoid main() {\r\n\tmediump float autoExposure = texture2D(u_AutoExposureTex, v_Texcoord0).r;\r\n\tmediump vec4 color=vec4(0.0);\r\n\tcolor = texture2D(u_MainTex, v_Texcoord0);\r\n\t\r\n\tcolor = sRGBToLinear(color);\r\n\tcolor.rgb *= autoExposure;\r\n\t\r\n\t#if defined(BLOOM)||defined(BLOOM_LOW)\r\n\t\t#ifdef BLOOM\r\n\t\t\tmediump vec4 bloom = upsampleTent(u_BloomTex, v_Texcoord0, u_BloomTex_TexelSize.xy, vec4(u_Bloom_Settings.x));\r\n\t\t#else\r\n\t\t\tmediump vec4 bloom = upsampleBox(u_BloomTex, v_Texcoord0, u_BloomTex_TexelSize.xy, vec4(u_Bloom_Settings.x));\r\n\t\t#endif\r\n\r\n\t\t// UVs should be Distort(uv * u_Bloom_DirtTileOffset.xy + u_Bloom_DirtTileOffset.zw)\r\n\t\t// but considering we use a cover-style scale on the dirt texture the difference\r\n\t\t// isn\'t massive so we chose to save a few ALUs here instead in case lens distortion\r\n\t\t// is active\r\n\t\tmediump vec4 dirt =vec4(texture2D(u_Bloom_DirtTex, v_Texcoord0 * u_Bloom_DirtTileOffset.xy + u_Bloom_DirtTileOffset.zw).rgb, 0.0);\r\n\r\n\t\t// Additive bloom (artist friendly)\r\n\t\tbloom *= u_Bloom_Settings.y;\r\n\t\tdirt *= u_Bloom_Settings.z;\r\n\t\tmediump vec4 bloomColor=vec4(u_Bloom_Color, 1.0);\r\n\t\tcolor += bloom * bloomColor;\r\n\t\tcolor += dirt * bloom;\r\n\t#endif\r\n\t\r\n\tmediump vec4 finalColor = color;\r\n\tfinalColor = linearToSRGB(finalColor);\r\n\t//finalColor.rgb = Dither(finalColor.rgb, v_Texcoord0);//TODO:抖动\r\n\tgl_FragColor = finalColor;\r\n}',
		gi =
		'#include "Lighting.glsl";\r\n\r\nattribute vec4 a_PositionTexcoord;\r\nvarying vec2 v_Texcoord0;\r\n\r\nvoid main() {\r\n\tgl_Position = vec4(a_PositionTexcoord.xy, 0.0, 1.0);\r\n\tv_Texcoord0 = a_PositionTexcoord.zw;\r\n\tgl_Position = remapGLPositionZ(gl_Position);\r\n}',
		Si =
		"// Better, temporally stable box filtering\r\n// [Jimenez14] http://goo.gl/eomGso\r\n// . . . . . . .\r\n// . A . B . C .\r\n// . . D . E . .\r\n// . F . G . H .\r\n// . . I . J . .\r\n// . K . L . M .\r\n// . . . . . . .\r\nmediump vec4 downsampleBox13Tap(sampler2D tex, vec2 uv, vec2 texelSize)\r\n{\r\n    mediump vec4 A = texture2D(tex, uv + texelSize * vec2(-1.0, -1.0));\r\n    mediump vec4 B = texture2D(tex, uv + texelSize * vec2( 0.0, -1.0));\r\n    mediump vec4 C = texture2D(tex, uv + texelSize * vec2( 1.0, -1.0));\r\n    mediump vec4 D = texture2D(tex, uv + texelSize * vec2(-0.5, -0.5));\r\n    mediump vec4 E = texture2D(tex, uv + texelSize * vec2( 0.5, -0.5));\r\n    mediump vec4 F = texture2D(tex, uv + texelSize * vec2(-1.0,  0.0));\r\n    mediump vec4 G = texture2D(tex, uv);\r\n    mediump vec4 H = texture2D(tex, uv + texelSize * vec2( 1.0,  0.0));\r\n    mediump vec4 I = texture2D(tex, uv + texelSize * vec2(-0.5,  0.5));\r\n    mediump vec4 J = texture2D(tex, uv + texelSize * vec2( 0.5,  0.5));\r\n    mediump vec4 K = texture2D(tex, uv + texelSize * vec2(-1.0,  1.0));\r\n    mediump vec4 L = texture2D(tex, uv + texelSize * vec2( 0.0,  1.0));\r\n    mediump vec4 M = texture2D(tex, uv + texelSize * vec2( 1.0,  1.0));\r\n\r\n\tmediump vec2 scale= vec2(0.5, 0.125);\r\n    mediump vec2 div = (1.0 / 4.0) * scale;\r\n\r\n    mediump vec4 o = (D + E + I + J) * div.x;\r\n    o += (A + B + G + F) * div.y;\r\n    o += (B + C + H + G) * div.y;\r\n    o += (F + G + L + K) * div.y;\r\n    o += (G + H + M + L) * div.y;\r\n\r\n    return o;\r\n}\r\n\r\n// Standard box filtering\r\nmediump vec4 downsampleBox4Tap(sampler2D tex, vec2 uv, vec2 texelSize)\r\n{\r\n    vec4 d = texelSize.xyxy * vec4(-1.0, -1.0, 1.0, 1.0);\r\n\r\n    mediump vec4 s =  texture2D(tex, uv + d.xy);\r\n    s += texture2D(tex, uv + d.zy);\r\n    s += texture2D(tex, uv + d.xw);\r\n    s += texture2D(tex, uv + d.zw);\r\n\r\n    return s * (1.0 / 4.0);\r\n}\r\n\r\n// 9-tap bilinear upsampler (tent filter)\r\n// . . . . . . .\r\n// . 1 . 2 . 1 .\r\n// . . . . . . .\r\n// . 2 . 4 . 2 .\r\n// . . . . . . .\r\n// . 1 . 2 . 1 .\r\n// . . . . . . .\r\nmediump vec4 upsampleTent(sampler2D tex, vec2 uv, vec2 texelSize, vec4 sampleScale)\r\n{\r\n    vec4 d = texelSize.xyxy * vec4(1.0, 1.0, -1.0, 0.0) * sampleScale;\r\n\r\n    mediump vec4 s =  texture2D(tex, uv - d.xy);\r\n    s += texture2D(tex, uv - d.wy) * 2.0;\r\n    s += texture2D(tex, uv - d.zy);\r\n\r\n    s += texture2D(tex, uv + d.zw) * 2.0;\r\n    s += texture2D(tex, uv) * 4.0;\r\n    s += texture2D(tex,\tuv + d.xw) * 2.0;\r\n\r\n    s += texture2D(tex, uv + d.zy);\r\n    s += texture2D(tex, uv + d.wy) * 2.0;\r\n    s += texture2D(tex, uv + d.xy);\r\n\r\n    return s * (1.0 / 16.0);\r\n}\r\n\r\n// Standard box filtering\r\nmediump vec4 upsampleBox(sampler2D tex, vec2 uv, vec2 texelSize, vec4 sampleScale)\r\n{\r\n    vec4 d = texelSize.xyxy * vec4(-1.0, -1.0, 1.0, 1.0) * 0.5 * sampleScale;\r\n\r\n    mediump vec4 s =  texture2D(tex, uv + d.xy);\r\n    s += texture2D(tex, uv + d.zy);\r\n    s += texture2D(tex, uv + d.xw);\r\n    s += texture2D(tex, uv + d.zw);\r\n\r\n    return s * (1.0 / 4.0);\r\n}",
		vi =
		"#define HALF_MAX       65504.0 // (2 - 2^-10) * 2^15\r\n\r\n#define FLT_EPSILON    1.192092896e-07 // Smallest positive number, such that 1.0 + FLT_EPSILON != 1.0\r\n\r\nmediump vec4 safeHDR(mediump vec4 c)\r\n{\r\n    return min(c, HALF_MAX);\r\n}\r\n\r\nfloat max3(float a, float b, float c)\r\n{\r\n    return max(max(a, b), c);\r\n}\r\n\r\nvec3 positivePow(vec3 base, vec3 power)\r\n{\r\n    return pow(max(abs(base), vec3(FLT_EPSILON, FLT_EPSILON, FLT_EPSILON)), power);\r\n}",
		Ri =
		"uniform sampler2D u_shadowMap1;\r\nuniform sampler2D u_shadowMap2;\r\nuniform sampler2D u_shadowMap3;\r\nuniform vec2\t  u_shadowPCFoffset;\r\nuniform vec4     u_shadowPSSMDistance;\r\nvec4 packDepth(const in float depth)\r\n{\r\n\tconst vec4 bitShift = vec4(256.0*256.0*256.0, 256.0*256.0, 256.0, 1.0);\r\n\tconst vec4 bitMask\t= vec4(0.0, 1.0/256.0, 1.0/256.0, 1.0/256.0);\r\n\tvec4 res = mod(depth*bitShift*vec4(255), vec4(256))/vec4(255);\r\n\tres -= res.xxyz * bitMask;\r\n\treturn res;\r\n}\r\nfloat unpackDepth(const in vec4 rgbaDepth)\r\n{\r\n\tconst vec4 bitShift = vec4(1.0/(256.0*256.0*256.0), 1.0/(256.0*256.0), 1.0/256.0, 1.0);\r\n\tfloat depth = dot(rgbaDepth, bitShift);\r\n\treturn depth;\r\n}\r\nfloat tex2DPCF( sampler2D shadowMap,vec2 texcoord,vec2 invsize,float zRef )\r\n{\r\n\tvec2 texelpos =texcoord / invsize;\r\n\tvec2 lerps = fract( texelpos );\r\n\tfloat sourcevals[4];\r\n\tsourcevals[0] = float( unpackDepth(texture2D(shadowMap,texcoord)) > zRef );\r\n\tsourcevals[1] = float( unpackDepth(texture2D(shadowMap,texcoord + vec2(invsize.x,0))) > zRef );\r\n\tsourcevals[2] = float( unpackDepth(texture2D(shadowMap,texcoord + vec2(0,invsize.y))) > zRef );\r\n\tsourcevals[3] = float( unpackDepth(texture2D(shadowMap,texcoord + vec2(invsize.x, invsize.y) )) > zRef );\r\n\treturn mix( mix(sourcevals[0],sourcevals[2],lerps.y),mix(sourcevals[1],sourcevals[3],lerps.y),lerps.x );\r\n}\r\nfloat getShadowPSSM3( sampler2D shadowMap1,sampler2D shadowMap2,sampler2D shadowMap3,mat4 lightShadowVP[4],vec4 pssmDistance,vec2 shadowPCFOffset,vec3 worldPos,float posViewZ,float zBias )\r\n{\r\n\tfloat value = 1.0;\r\n\tint nPSNum = int(posViewZ>pssmDistance.x);\r\n\tnPSNum += int(posViewZ>pssmDistance.y);\r\n\tnPSNum += int(posViewZ>pssmDistance.z);\r\n\t//真SB,webgl不支持在PS中直接访问数组\r\n\tmat4 lightVP;\r\n\tif( nPSNum == 0 )\r\n\t{\r\n\t\tlightVP = lightShadowVP[1];\r\n\t}\r\n\telse if( nPSNum == 1 )\r\n\t{\r\n\t\tlightVP = lightShadowVP[2];\r\n\t}\r\n\telse if( nPSNum == 2 )\r\n\t{\r\n\t\tlightVP = lightShadowVP[3];\r\n\t}\r\n\tvec4 vLightMVPPos = lightVP * vec4(worldPos,1.0);\r\n\t//为了效率，在CPU计算/2.0 + 0.5\r\n\t//vec3 vText = (vLightMVPPos.xyz / vLightMVPPos.w)/2.0 + 0.5;\r\n\tvec3 vText = vLightMVPPos.xyz / vLightMVPPos.w;\r\n\tfloat fMyZ = vText.z - zBias;\r\n\t/*\r\n\tbvec4 bInFrustumVec = bvec4 ( vText.x >= 0.0, vText.x <= 1.0, vText.y >= 0.0, vText.y <= 1.0 );\r\n\tbool bInFrustum = all( bInFrustumVec );\r\n\tbvec2 bFrustumTestVec = bvec2( bInFrustum, fMyZ <= 1.0 );\r\n\tbool bFrustumTest = all( bFrustumTestVec );\r\n\tif ( bFrustumTest ) \r\n\t*/\r\n\tif( fMyZ <= 1.0 )\r\n\t{\r\n\t\tfloat zdepth=0.0;\r\n#ifdef SHADOWMAP_PCF3\r\n\t\tif ( nPSNum == 0 )\r\n\t\t{\r\n\t\t\tvalue =  tex2DPCF( shadowMap1, vText.xy,shadowPCFOffset,fMyZ );\r\n\t\t\tvalue += tex2DPCF( shadowMap1, vText.xy+vec2(shadowPCFOffset.xy),shadowPCFOffset,\tfMyZ );\r\n\t\t\tvalue += tex2DPCF( shadowMap1, vText.xy+vec2(shadowPCFOffset.x,0),shadowPCFOffset,\tfMyZ );\r\n\t\t\tvalue += tex2DPCF( shadowMap1, vText.xy+vec2(0,shadowPCFOffset.y),shadowPCFOffset,\tfMyZ );\r\n\t\t\tvalue = value/4.0;\r\n\t\t} \r\n\t\telse if( nPSNum == 1 )\r\n\t\t{\r\n\t\t\tvalue = tex2DPCF( shadowMap2,vText.xy,shadowPCFOffset,fMyZ);\r\n\t\t}\r\n\t\telse if( nPSNum == 2 )\r\n\t\t{\r\n\t\t\tvec4 color = texture2D( shadowMap3,vText.xy );\r\n\t\t\tzdepth = unpackDepth(color);\r\n\t\t\tvalue = float(fMyZ < zdepth);\r\n\t\t}\r\n#endif\r\n#ifdef SHADOWMAP_PCF2\r\n\t\tif ( nPSNum == 0 )\r\n\t\t{\r\n\t\t\tvalue = tex2DPCF( shadowMap1,vText.xy,shadowPCFOffset,fMyZ);\r\n\t\t}\r\n\t\telse if( nPSNum == 1 )\r\n\t\t{\r\n\t\t\tvalue = tex2DPCF( shadowMap2,vText.xy,shadowPCFOffset,fMyZ);\r\n\t\t}\r\n\t\telse if( nPSNum == 2 )\r\n\t\t{\r\n\t\t\tvec4 color = texture2D( shadowMap3,vText.xy );\r\n\t\t\tzdepth = unpackDepth(color);\r\n\t\t\tvalue = float(fMyZ < zdepth);\r\n\t\t}\r\n\r\n#endif\r\n#ifdef SHADOWMAP_PCF1\r\n\t\tif ( nPSNum == 0 )\r\n\t\t{\r\n\t\t\tvalue = tex2DPCF( shadowMap1,vText.xy,shadowPCFOffset,fMyZ);\r\n\t\t}\r\n\t\telse if( nPSNum == 1 )\r\n\t\t{\r\n\t\t\tvec4 color = texture2D( shadowMap2,vText.xy );\r\n\t\t\tzdepth = unpackDepth(color);\r\n\t\t\tvalue = float(fMyZ < zdepth);\r\n\t\t}\r\n\t\telse if( nPSNum == 2 )\r\n\t\t{\r\n\t\t\tvec4 color = texture2D( shadowMap3,vText.xy );\r\n\t\t\tzdepth = unpackDepth(color);\r\n\t\t\tvalue = float(fMyZ < zdepth);\r\n\t\t}\r\n#endif\r\n#ifdef SHADOWMAP_PCF_NO\r\n\t\tvec4 color;\r\n\t\tif ( nPSNum == 0 )\r\n\t\t{\r\n\t\t\tcolor = texture2D( shadowMap1,vText.xy );\r\n\t\t}\r\n\t\telse if( nPSNum == 1 )\r\n\t\t{\r\n\t\t\tcolor = texture2D( shadowMap2,vText.xy );\r\n\t\t}\r\n\t\telse if( nPSNum == 2 )\r\n\t\t{\r\n\t\t\tcolor = texture2D( shadowMap3,vText.xy );\r\n\t\t}\r\n\t\tzdepth = unpackDepth(color);\r\n\t\tvalue = float(fMyZ < zdepth);\r\n#endif\r\n\t}\r\n\treturn value;\r\n}\r\nfloat getShadowPSSM2( sampler2D shadowMap1,sampler2D shadowMap2,mat4 lightShadowVP[4],vec4 pssmDistance,vec2 shadowPCFOffset,vec3 worldPos,float posViewZ,float zBias )\r\n{\r\n\tfloat value = 1.0;\r\n\tint nPSNum = int(posViewZ>pssmDistance.x);\r\n\tnPSNum += int(posViewZ>pssmDistance.y);\r\n\t//真SB,webgl不支持在PS中直接访问数组\r\n\tmat4 lightVP;\r\n\tif( nPSNum == 0 )\r\n\t{\r\n\t\tlightVP = lightShadowVP[1];\r\n\t}\r\n\telse if( nPSNum == 1 )\r\n\t{\r\n\t\tlightVP = lightShadowVP[2];\r\n\t}\r\n\tvec4 vLightMVPPos = lightVP * vec4(worldPos,1.0);\r\n\t//为了效率，在CPU计算/2.0 + 0.5\r\n\t//vec3 vText = (vLightMVPPos.xyz / vLightMVPPos.w)/2.0 + 0.5;\r\n\tvec3 vText = vLightMVPPos.xyz / vLightMVPPos.w;\r\n\tfloat fMyZ = vText.z - zBias;\r\n\t/*\r\n\tbvec4 bInFrustumVec = bvec4 ( vText.x >= 0.0, vText.x <= 1.0, vText.y >= 0.0, vText.y <= 1.0 );\r\n\tbool bInFrustum = all( bInFrustumVec );\r\n\tbvec2 bFrustumTestVec = bvec2( bInFrustum, fMyZ <= 1.0 );\r\n\tbool bFrustumTest = all( bFrustumTestVec );\r\n\tif ( bFrustumTest ) \r\n\t*/\r\n\tif( fMyZ <= 1.0 )\r\n\t{\r\n\t\tfloat zdepth=0.0;\r\n#ifdef SHADOWMAP_PCF3\r\n\t\tif ( nPSNum == 0 )\r\n\t\t{\r\n\t\t\tvalue =  tex2DPCF( shadowMap1, vText.xy,shadowPCFOffset,fMyZ );\r\n\t\t\tvalue += tex2DPCF( shadowMap1, vText.xy+vec2(shadowPCFOffset.xy),shadowPCFOffset,\tfMyZ );\r\n\t\t\tvalue += tex2DPCF( shadowMap1, vText.xy+vec2(shadowPCFOffset.x,0),shadowPCFOffset,\tfMyZ );\r\n\t\t\tvalue += tex2DPCF( shadowMap1, vText.xy+vec2(0,shadowPCFOffset.y),shadowPCFOffset,\tfMyZ );\r\n\t\t\tvalue = value/4.0;\r\n\t\t}\r\n\t\telse if( nPSNum == 1 )\r\n\t\t{\r\n\t\t\tvalue = tex2DPCF( shadowMap2,vText.xy,shadowPCFOffset,fMyZ);\r\n\t\t}\r\n#endif\r\n#ifdef SHADOWMAP_PCF2\r\n\t\tif ( nPSNum == 0 )\r\n\t\t{\r\n\t\t\tvalue = tex2DPCF( shadowMap1,vText.xy,shadowPCFOffset,fMyZ);\r\n\t\t}\r\n\t\telse if( nPSNum == 1 )\r\n\t\t{\r\n\t\t\tvalue = tex2DPCF( shadowMap2,vText.xy,shadowPCFOffset,fMyZ);\r\n\t\t}\r\n#endif\r\n#ifdef SHADOWMAP_PCF1\r\n\t\tif ( nPSNum == 0 )\r\n\t\t{\r\n\t\t\tvalue = tex2DPCF( shadowMap1,vText.xy,shadowPCFOffset,fMyZ);\r\n\t\t}\r\n\t\telse if( nPSNum == 1 )\r\n\t\t{\r\n\t\t\tvec4 color = texture2D( shadowMap2,vText.xy );\r\n\t\t\tzdepth = unpackDepth(color);\r\n\t\t\tvalue = float(fMyZ < zdepth);\r\n\t\t}\r\n#endif\r\n#ifdef SHADOWMAP_PCF_NO\r\n\t\tvec4 color;\r\n\t\tif ( nPSNum == 0 )\r\n\t\t{\r\n\t\t\tcolor = texture2D( shadowMap1,vText.xy );\r\n\t\t}\r\n\t\telse if( nPSNum == 1 )\r\n\t\t{\r\n\t\t\tcolor = texture2D( shadowMap2,vText.xy );\r\n\t\t}\r\n\t\tzdepth = unpackDepth(color);\r\n\t\tvalue = float(fMyZ < zdepth);\r\n#endif\r\n\t}\r\n\treturn value;\r\n}\r\nfloat getShadowPSSM1( sampler2D shadowMap1,vec4 lightMVPPos,vec4 pssmDistance,vec2 shadowPCFOffset,float posViewZ,float zBias )\r\n{\r\n\tfloat value = 1.0;\r\n\tif( posViewZ < pssmDistance.x )\r\n\t{\r\n\t\tvec3 vText = lightMVPPos.xyz / lightMVPPos.w;\r\n\t\tfloat fMyZ = vText.z - zBias;\r\n\t\t/*\r\n\t\tbvec4 bInFrustumVec = bvec4 ( vText.x >= 0.0, vText.x <= 1.0, vText.y >= 0.0, vText.y <= 1.0 );\r\n\t\tbool bInFrustum = all( bInFrustumVec );\r\n\t\tbvec2 bFrustumTestVec = bvec2( bInFrustum, fMyZ <= 1.0 );\r\n\t\tbool bFrustumTest = all( bFrustumTestVec );\r\n\t\t*/\r\n\t\tif ( fMyZ <= 1.0 ) \r\n\t\t{\r\n\t\t\tfloat zdepth=0.0;\r\n#ifdef SHADOWMAP_PCF3\r\n\t\t\tvalue =  tex2DPCF( shadowMap1, vText.xy,shadowPCFOffset,fMyZ );\r\n\t\t\tvalue += tex2DPCF( shadowMap1, vText.xy+vec2(shadowPCFOffset.xy),shadowPCFOffset,fMyZ );\r\n\t\t\tvalue += tex2DPCF( shadowMap1, vText.xy+vec2(shadowPCFOffset.x,0),shadowPCFOffset,fMyZ );\r\n\t\t\tvalue += tex2DPCF( shadowMap1, vText.xy+vec2(0,shadowPCFOffset.y),shadowPCFOffset,fMyZ );\r\n\t\t\tvalue = value/4.0;\r\n#endif\r\n#ifdef SHADOWMAP_PCF2\t\t\r\n\t\t\tvalue = tex2DPCF( shadowMap1,vText.xy,shadowPCFOffset,fMyZ);\r\n#endif\r\n#ifdef SHADOWMAP_PCF1\r\n\t\t\tvalue = tex2DPCF( shadowMap1,vText.xy,shadowPCFOffset,fMyZ);\r\n#endif\r\n#ifdef SHADOWMAP_PCF_NO\t\t\r\n\t\t\tvec4 color = texture2D( shadowMap1,vText.xy );\r\n\t\t\tzdepth = unpackDepth(color);\r\n\t\t\tvalue = float(fMyZ < zdepth);\r\n#endif\r\n\t\t}\r\n\t}\r\n\treturn value;\r\n}",
		Ii =
		"#ifdef HIGHPRECISION\r\nprecision highp float;\r\n#else\r\nprecision mediump float;\r\n#endif\r\n\r\nvarying vec3 v_Texcoord;\r\n\r\nuniform samplerCube u_CubeTexture;\r\nuniform float u_Exposure;\r\nuniform vec4 u_TintColor;\r\n\r\n\r\nvoid main()\r\n{\t\r\n\tvec3 color=textureCube(u_CubeTexture, v_Texcoord).rgb*u_TintColor.rgb*u_Exposure*2.0;\r\n\tgl_FragColor=vec4(color,1.0);\r\n}\r\n\r\n",
		xi =
		'#include "Lighting.glsl";\r\n\r\nattribute vec4 a_Position;\r\nuniform mat4 u_ViewProjection;\r\nuniform float u_Rotation;\r\nvarying vec3 v_Texcoord;\r\n\r\n\r\nvec4 rotateAroundYInDegrees (vec4 vertex, float degrees)\r\n{\r\n\tfloat angle = degrees * 3.141593 / 180.0;\r\n\tfloat sina=sin(angle);\r\n\tfloat cosa=cos(angle);\r\n\tmat2 m = mat2(cosa, -sina, sina, cosa);\r\n\treturn vec4(m*vertex.xz, vertex.yw).xzyw;\r\n}\r\n\t\t\r\nvoid main()\r\n{\r\n\tvec4 position=rotateAroundYInDegrees(a_Position,u_Rotation);\r\n\tgl_Position = u_ViewProjection*position;\r\n\tv_Texcoord=vec3(-a_Position.x,a_Position.yz);//转换坐标系\r\n\tgl_Position=remapGLPositionZ(gl_Position);\r\n}\r\n',
		Ai =
		'#ifdef HIGHPRECISION\r\n\tprecision highp float;\r\n#else\r\n\tprecision mediump float;\r\n#endif\r\n\r\n#include "Lighting.glsl";\r\n\r\nconst float MIE_G = -0.990;\r\nconst float MIE_G2 = 0.9801;\r\nconst float SKY_GROUND_THRESHOLD = 0.02;\r\n\r\nuniform float u_SunSize;\r\nuniform float u_SunSizeConvergence;\r\nuniform DirectionLight u_SunLight;\r\n\r\n\r\nvarying vec3 v_GroundColor;\r\nvarying vec3 v_SkyColor;\r\n\r\n\r\n#ifdef SUN_HIGH_QUALITY\r\n\tvarying vec3 v_Vertex;\r\n#elif defined(SUN_SIMPLE)\r\n\tvarying vec3 v_RayDir;\r\n#else\r\n\tvarying float v_SkyGroundFactor;\r\n#endif\r\n\r\n#if defined(SUN_HIGH_QUALITY)||defined(SUN_SIMPLE)\r\n\tvarying vec3 v_SunColor;\r\n#endif\r\n\r\n// Calculates the Mie phase function\r\nfloat getMiePhase(float eyeCos, float eyeCos2) {\r\n\tfloat temp = 1.0 + MIE_G2 - 2.0 * MIE_G * eyeCos;\r\n\ttemp = pow(temp, pow(u_SunSize,0.65) * 10.0);\r\n\ttemp = max(temp,1.0e-4); // prevent division by zero, esp. in half precision\r\n\ttemp = 1.5 * ((1.0 - MIE_G2) / (2.0 + MIE_G2)) * (1.0 + eyeCos2) / temp;\r\n\treturn temp;\r\n}\r\n\r\n// Calculates the sun shape\r\nfloat calcSunAttenuation(vec3 lightPos, vec3 ray) {\r\n\t#ifdef SUN_HIGH_QUALITY\r\n\t\tfloat focusedEyeCos = pow(clamp(dot(lightPos, ray),0.0,1.0), u_SunSizeConvergence);\r\n\t\treturn getMiePhase(-focusedEyeCos, focusedEyeCos * focusedEyeCos);\r\n\t#else //SUN_SIMPLE\r\n\t\tvec3 delta = lightPos - ray;\r\n\t\tfloat dist = length(delta);\r\n\t\tfloat spot = 1.0 - smoothstep(0.0, u_SunSize, dist);\r\n\t\treturn spot * spot;\r\n\t#endif\r\n}\r\n\r\nvoid main() {\r\n\t// if y > 1 [eyeRay.y < -SKY_GROUND_THRESHOLD] - ground\r\n\t// if y >= 0 and < 1 [eyeRay.y <= 0 and > -SKY_GROUND_THRESHOLD] - horizon\r\n\t// if y < 0 [eyeRay.y > 0] - sky\r\n\tvec3 col = vec3(0.0, 0.0, 0.0);\r\n\r\n\t#ifdef SUN_HIGH_QUALITY\r\n\t\tvec3 ray = normalize(v_Vertex);\r\n\t\tfloat y = ray.y / SKY_GROUND_THRESHOLD;\r\n\t#elif defined(SUN_SIMPLE) \r\n\t\tvec3 ray = v_RayDir;\r\n\t\tfloat y = ray.y / SKY_GROUND_THRESHOLD;\t\r\n\t#else\r\n\t\tfloat y = v_SkyGroundFactor;\r\n\t#endif\r\n\r\n\t// if we did precalculate color in vprog: just do lerp between them\r\n\tcol = mix(v_SkyColor, v_GroundColor, clamp(y,0.0,1.0));\r\n\r\n\t#if defined(SUN_HIGH_QUALITY)||defined(SUN_SIMPLE)\r\n\t\tif (y < 0.0)\r\n\t\t\tcol += v_SunColor * calcSunAttenuation(-u_SunLight.direction, -ray);\r\n\t#endif\r\n\r\n\tcol = sqrt(col);//linear space convert to gamma space\r\n\tgl_FragColor=vec4(col,1.0);\r\n}\r\n\r\n',
		Di =
		"#ifdef HIGHPRECISION\r\n\tprecision highp float;\r\n#else\r\n\tprecision mediump float;\r\n#endif\r\n\r\n#include \"Lighting.glsl\";\r\n\r\n#define OUTER_RADIUS 1.025\r\n#define RAYLEIGH (mix(0.0, 0.0025, pow(u_AtmosphereThickness,2.5)))// Rayleigh constant Rayleigh为夜空光和极光亮度单位\r\n#define MIE 0.0010             // Mie constant 米氏散射\r\n#define SUN_BRIGHTNESS 20.0    // Sun brightness\r\n#define MAX_SCATTER 50.0 // Maximum scattering value, to prevent math overflows on Adrenos\r\n\r\nconst float SKY_GROUND_THRESHOLD = 0.02;\r\nconst float outerRadius = OUTER_RADIUS;\r\nconst float outerRadius2 = OUTER_RADIUS*OUTER_RADIUS;\r\nconst float innerRadius = 1.0;\r\nconst float innerRadius2 = 1.0;\r\nconst float cameraHeight = 0.0001;\r\n\r\nconst float HDSundiskIntensityFactor = 15.0;\r\nconst float simpleSundiskIntensityFactor = 27.0;\r\n\r\nconst float sunScale = 400.0 * SUN_BRIGHTNESS;\r\nconst float kmESun = MIE * SUN_BRIGHTNESS;\r\nconst float km4PI = MIE * 4.0 * 3.14159265;\r\nconst float scale = 1.0 / (OUTER_RADIUS - 1.0);\r\nconst float scaleDepth = 0.25;\r\nconst float scaleOverScaleDepth = (1.0 / (OUTER_RADIUS - 1.0)) / 0.25;\r\nconst float samples = 2.0; // THIS IS UNROLLED MANUALLY, DON'T TOUCH\r\n\r\n// RGB wavelengths        .35 (.62=158), .43 (.68=174), .525 (.75=190)\r\nconst vec3 c_DefaultScatteringWavelength = vec3(0.65, 0.57, 0.475);//默认散射波长\r\nconst vec3 c_VariableRangeForScatteringWavelength = vec3(0.15, 0.15, 0.15);//散射播放的可变范围\r\n\r\nattribute vec4 a_Position;\r\n\r\nuniform mat4 u_ViewProjection;\r\nuniform vec3 u_SkyTint;\r\nuniform vec3 u_GroundTint;\r\nuniform float u_Exposure;\r\nuniform float u_AtmosphereThickness;\r\nuniform DirectionLight u_SunLight;\r\n\r\nvarying vec3 v_GroundColor;\r\nvarying vec3 v_SkyColor;\r\n\r\n#ifdef SUN_HIGH_QUALITY\r\n\tvarying vec3 v_Vertex;\r\n#elif defined(SUN_SIMPLE)\r\n\tvarying vec3 v_RayDir;\r\n#else\r\n\tvarying float v_SkyGroundFactor;\r\n#endif\r\n\r\n#if defined(SUN_HIGH_QUALITY)||defined(SUN_SIMPLE)\r\n\tvarying vec3 v_SunColor;\r\n#endif\r\n\r\n// Calculates the Rayleigh phase function\r\nfloat getRayleighPhase(vec3 light, vec3 ray) \r\n{\r\n\tfloat eyeCos = dot(light, ray);\r\n\treturn 0.75 + 0.75*eyeCos*eyeCos;\r\n}\r\n\r\nfloat scaleAngle(float inCos)\r\n{\r\n\tfloat x = 1.0 - inCos;\r\n\treturn 0.25 * exp(-0.00287 + x*(0.459 + x*(3.83 + x*(-6.80 + x*5.25))));\r\n}\r\n\r\n\r\nvoid main () {\r\n\tgl_Position = u_ViewProjection*a_Position;\r\n\r\n\tvec3 skyTintInGammaSpace = u_SkyTint;//支持非GAMMA空间后要调整\r\n\tvec3 scatteringWavelength = mix(c_DefaultScatteringWavelength-c_VariableRangeForScatteringWavelength,c_DefaultScatteringWavelength+c_VariableRangeForScatteringWavelength,vec3(1.0) - skyTintInGammaSpace); // using Tint in sRGB+ gamma allows for more visually linear interpolation and to keep (0.5) at (128, gray in sRGB) point\r\n\tvec3 invWavelength = 1.0 / pow(scatteringWavelength, vec3(4.0));\r\n\r\n\tfloat krESun = RAYLEIGH * SUN_BRIGHTNESS;\r\n\tfloat kr4PI = RAYLEIGH * 4.0 * 3.14159265;\r\n\r\n\tvec3 cameraPos = vec3(0.0,innerRadius + cameraHeight,0.0); // The camera's current position\r\n\r\n\t// Get the ray from the camera to the vertex and its length (which is the far point of the ray passing through the atmosphere)\r\n\tvec3 eyeRay = normalize(a_Position.xyz);\r\n\r\n\tfloat far = 0.0;\r\n\tvec3 cIn, cOut;\r\n\tif (eyeRay.y >= 0.0) {// Sky\r\n\t\t// Calculate the length of the \"atmosphere\"\r\n\t\tfar = sqrt(outerRadius2 + innerRadius2 * eyeRay.y * eyeRay.y - innerRadius2) - innerRadius * eyeRay.y;\r\n\r\n\t\t// Calculate the ray's starting position, then calculate its scattering offset\r\n\t\tfloat height = innerRadius + cameraHeight;\r\n\t\tfloat depth = exp(scaleOverScaleDepth * -cameraHeight);\r\n\t\tfloat startAngle = dot(eyeRay, cameraPos) / height;\r\n\t\tfloat startOffset = depth*scaleAngle(startAngle);\r\n\r\n\t\t// Initialize the scattering loop variables\r\n\t\tfloat sampleLength = far / samples;\r\n\t\tfloat scaledLength = sampleLength * scale;\r\n\t\tvec3 sampleRay = eyeRay * sampleLength;\r\n\t\tvec3 samplePoint = cameraPos + sampleRay * 0.5;\r\n\r\n\t\tvec3 frontColor = vec3(0.0);\r\n\t\t//unrolling this manually to avoid some platform for loop slow\r\n\t\t{\r\n\t\t\tfloat height = length(samplePoint);\r\n\t\t\tfloat depth = exp(scaleOverScaleDepth * (innerRadius - height));\r\n\t\t\tfloat lightAngle = dot(-u_SunLight.direction, samplePoint) / height;\r\n\t\t\tfloat cameraAngle = dot(eyeRay, samplePoint) / height;\r\n\t\t\tfloat scatter = (startOffset + depth*(scaleAngle(lightAngle) - scaleAngle(cameraAngle)));\r\n\t\t\tvec3 attenuate = exp(-clamp(scatter, 0.0, MAX_SCATTER) * (invWavelength * kr4PI + km4PI));\r\n\r\n\t\t\tfrontColor += attenuate * (depth * scaledLength);\r\n\t\t\tsamplePoint += sampleRay;\r\n\t\t}\r\n\t\t{\r\n\t\t\tfloat height = length(samplePoint);\r\n\t\t\tfloat depth = exp(scaleOverScaleDepth * (innerRadius - height));\r\n\t\t\tfloat lightAngle = dot(-u_SunLight.direction, samplePoint) / height;\r\n\t\t\tfloat cameraAngle = dot(eyeRay, samplePoint) / height;\r\n\t\t\tfloat scatter = (startOffset + depth*(scaleAngle(lightAngle) - scaleAngle(cameraAngle)));\r\n\t\t\tvec3 attenuate = exp(-clamp(scatter, 0.0, MAX_SCATTER) * (invWavelength * kr4PI + km4PI));\r\n\r\n\t\t\tfrontColor += attenuate * (depth * scaledLength);\r\n\t\t\tsamplePoint += sampleRay;\r\n\t\t}\r\n\r\n\t\t// Finally, scale the Mie and Rayleigh colors and set up the varying variables for the pixel shader\r\n\t\tcIn = frontColor * (invWavelength * krESun);\r\n\t\tcOut = frontColor * kmESun;\r\n\t} else {// Ground\r\n\t\tfar = (-cameraHeight) / (min(-0.001, eyeRay.y));\r\n\t\tvec3 pos = cameraPos + far * eyeRay;\r\n\r\n\t\t// Calculate the ray's starting position, then calculate its scattering offset\r\n\t\tfloat depth = exp((-cameraHeight) * (1.0/scaleDepth));\r\n\t\tfloat cameraAngle = dot(-eyeRay, pos);\r\n\t\tfloat lightAngle = dot(-u_SunLight.direction, pos);\r\n\t\tfloat cameraScale = scaleAngle(cameraAngle);\r\n\t\tfloat lightScale = scaleAngle(lightAngle);\r\n\t\tfloat cameraOffset = depth*cameraScale;\r\n\t\tfloat temp = lightScale + cameraScale;\r\n\r\n\t\t// Initialize the scattering loop variables\r\n\t\tfloat sampleLength = far / samples;\r\n\t\tfloat scaledLength = sampleLength * scale;\r\n\t\tvec3 sampleRay = eyeRay * sampleLength;\r\n\t\tvec3 samplePoint = cameraPos + sampleRay * 0.5;\r\n\r\n\t\t// Now loop through the sample rays\r\n\t\tvec3 frontColor = vec3(0.0, 0.0, 0.0);\r\n\t\tvec3 attenuate;\r\n\r\n\t\t// Loop removed because we kept hitting SM2.0 temp variable limits. Doesn't affect the image too much.\r\n\t\t{\r\n\t\t\tfloat height = length(samplePoint);\r\n\t\t\tfloat depth = exp(scaleOverScaleDepth * (innerRadius - height));\r\n\t\t\tfloat scatter = depth*temp - cameraOffset;\r\n\t\t\tattenuate = exp(-clamp(scatter, 0.0, MAX_SCATTER) * (invWavelength * kr4PI + km4PI));\r\n\t\t\tfrontColor += attenuate * (depth * scaledLength);\r\n\t\t\tsamplePoint += sampleRay;\r\n\t\t}\r\n\r\n\t\tcIn = frontColor * (invWavelength * krESun + kmESun);\r\n\t\tcOut = clamp(attenuate, 0.0, 1.0);\r\n\t}\r\n\r\n\t#ifdef SUN_HIGH_QUALITY\r\n\t\tv_Vertex = -a_Position.xyz;\r\n\t#elif defined(SUN_SIMPLE) \r\n\t\tv_RayDir = -eyeRay;\r\n\t#else\r\n\t\tv_SkyGroundFactor = -eyeRay.y / SKY_GROUND_THRESHOLD;\r\n\t#endif\r\n\r\n\t// if we want to calculate color in vprog:\r\n\t// in case of linear: multiply by _Exposure in here (even in case of lerp it will be common multiplier, so we can skip mul in fshader)\r\n\tv_GroundColor = u_Exposure * (cIn + u_GroundTint*u_GroundTint * cOut);//u_GroundColor*u_GroundColor is gamma space convert to linear space\r\n\tv_SkyColor    = u_Exposure * (cIn * getRayleighPhase(-u_SunLight.direction, -eyeRay));\r\n\r\n\t\r\n\t// The sun should have a stable intensity in its course in the sky. Moreover it should match the highlight of a purely specular material.\r\n\t// This matching was done using the Unity3D standard shader BRDF1 on the 5/31/2017\r\n\t// Finally we want the sun to be always bright even in LDR thus the normalization of the lightColor for low intensity.\r\n\tfloat lightColorIntensity = clamp(length(u_SunLight.color), 0.25, 1.0);\r\n\r\n\t#ifdef SUN_HIGH_QUALITY \r\n\t\tv_SunColor = HDSundiskIntensityFactor * clamp(cOut,0.0,1.0) * u_SunLight.color / lightColorIntensity;\r\n\t#elif defined(SUN_SIMPLE) \r\n\t\tv_SunColor = simpleSundiskIntensityFactor * clamp(cOut * sunScale,0.0,1.0) * u_SunLight.color / lightColorIntensity;\r\n\t#endif\r\n\tgl_Position=remapGLPositionZ(gl_Position);\r\n}\r\n",
		Mi =
		"#ifdef HIGHPRECISION\r\n\tprecision highp float;\r\n#else\r\n\tprecision mediump float;\r\n#endif\r\n\r\nuniform sampler2D u_MainTexture;\r\nuniform vec4 u_MainColor;\r\n\r\nvarying vec2 v_Texcoord0;\r\nvarying vec4 v_Color;\r\n\r\nvoid main()\r\n{\r\n\tvec4 color = 2.0 * u_MainColor * v_Color;\r\n\t#ifdef MAINTEXTURE\r\n\t\tvec4 mainTextureColor = texture2D(u_MainTexture, v_Texcoord0);\r\n\t\tcolor *= mainTextureColor;\r\n\t#endif\r\n\tgl_FragColor = color;\r\n}\r\n\r\n     ",
		Li =
		'#include "Lighting.glsl";\r\n\r\nattribute vec3 a_Position;\r\nattribute vec3 a_OffsetVector;\r\nattribute vec4 a_Color;\r\nattribute float a_Texcoord0X;\r\nattribute float a_Texcoord0Y;\r\nattribute float a_BirthTime;\r\n\r\nuniform mat4 u_View;\r\nuniform mat4 u_Projection;\r\n\r\nuniform vec4 u_TilingOffset;\r\n\r\nuniform float u_CurTime;\r\nuniform float u_LifeTime;\r\nuniform vec4 u_WidthCurve[10];\r\nuniform int u_WidthCurveKeyLength;\r\n\r\nvarying vec2 v_Texcoord0;\r\nvarying vec4 v_Color;\r\n\r\nfloat hermiteInterpolate(float t, float outTangent, float inTangent, float duration, float value1, float value2)\r\n{\r\n\tfloat t2 = t * t;\r\n\tfloat t3 = t2 * t;\r\n\tfloat a = 2.0 * t3 - 3.0 * t2 + 1.0;\r\n\tfloat b = t3 - 2.0 * t2 + t;\r\n\tfloat c = t3 - t2;\r\n\tfloat d = -2.0 * t3 + 3.0 * t2;\r\n\treturn a * value1 + b * outTangent * duration + c * inTangent * duration + d * value2;\r\n}\r\n\r\nfloat getCurWidth(in float normalizeTime)\r\n{\r\n\tfloat width;\r\n\tif(normalizeTime == 0.0){\r\n\t\twidth=u_WidthCurve[0].w;\r\n\t}\r\n\telse if(normalizeTime >= 1.0){\r\n\t\twidth=u_WidthCurve[u_WidthCurveKeyLength - 1].w;\r\n\t}\r\n\telse{\r\n\t\tfor(int i = 0; i < 10; i ++ )\r\n\t\t{\r\n\t\t\tif(normalizeTime == u_WidthCurve[i].x){\r\n\t\t\t\twidth=u_WidthCurve[i].w;\r\n\t\t\t\tbreak;\r\n\t\t\t}\r\n\t\t\t\r\n\t\t\tvec4 lastFrame = u_WidthCurve[i];\r\n\t\t\tvec4 nextFrame = u_WidthCurve[i + 1];\r\n\t\t\tif(normalizeTime > lastFrame.x && normalizeTime < nextFrame.x)\r\n\t\t\t{\r\n\t\t\t\tfloat duration = nextFrame.x - lastFrame.x;\r\n\t\t\t\tfloat t = (normalizeTime - lastFrame.x) / duration;\r\n\t\t\t\tfloat outTangent = lastFrame.z;\r\n\t\t\t\tfloat inTangent = nextFrame.y;\r\n\t\t\t\tfloat value1 = lastFrame.w;\r\n\t\t\t\tfloat value2 = nextFrame.w;\r\n\t\t\t\twidth=hermiteInterpolate(t, outTangent, inTangent, duration, value1, value2);\r\n\t\t\t\tbreak;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\treturn width;\r\n}\t\r\n\r\nvoid main()\r\n{\r\n\tfloat normalizeTime = (u_CurTime - a_BirthTime) / u_LifeTime;\r\n\t\r\n\t#ifdef TILINGOFFSET\r\n\t\tv_Texcoord0 = vec2(a_Texcoord0X, 1.0 - a_Texcoord0Y) * u_TilingOffset.xy + u_TilingOffset.zw;\r\n\t#else\r\n\t\tv_Texcoord0 = vec2(a_Texcoord0X, a_Texcoord0Y);\r\n\t#endif\r\n\t\r\n\tv_Color = a_Color;\r\n\t\r\n\tgl_Position = u_Projection * u_View * vec4(a_Position + a_OffsetVector * getCurWidth(normalizeTime),1.0);\r\n\tgl_Position=remapGLPositionZ(gl_Position);\r\n}\r\n',
		Ci =
		"#ifdef HIGHPRECISION\r\n\tprecision highp float;\r\n#else\r\n\tprecision mediump float;\r\n#endif\r\n\r\n#if defined(COLOR)&&defined(ENABLEVERTEXCOLOR)\r\n\tvarying vec4 v_Color;\r\n#endif\r\n\r\n#ifdef ALBEDOTEXTURE\r\n\tuniform sampler2D u_AlbedoTexture;\r\n\tvarying vec2 v_Texcoord0;\r\n#endif\r\n\r\nuniform vec4 u_AlbedoColor;\r\n\r\n#ifdef ALPHATEST\r\n\tuniform float u_AlphaTestValue;\r\n#endif\r\n\r\n#ifdef FOG\r\n\tuniform float u_FogStart;\r\n\tuniform float u_FogRange;\r\n\t#ifdef ADDTIVEFOG\r\n\t#else\r\n\t\tuniform vec3 u_FogColor;\r\n\t#endif\r\n#endif\r\n\r\nvoid main()\r\n{\r\n\tvec4 color =  u_AlbedoColor;\r\n\t#ifdef ALBEDOTEXTURE\r\n\t\tcolor *= texture2D(u_AlbedoTexture, v_Texcoord0);\r\n\t#endif\r\n\t#if defined(COLOR)&&defined(ENABLEVERTEXCOLOR)\r\n\t\tcolor *= v_Color;\r\n\t#endif\r\n\t\r\n\t#ifdef ALPHATEST\r\n\t\tif(color.a < u_AlphaTestValue)\r\n\t\t\tdiscard;\r\n\t#endif\r\n\t\r\n\tgl_FragColor = color;\r\n\t\r\n\t#ifdef FOG\r\n\t\tfloat lerpFact = clamp((1.0 / gl_FragCoord.w - u_FogStart) / u_FogRange, 0.0, 1.0);\r\n\t\t#ifdef ADDTIVEFOG\r\n\t\t\tgl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.0), lerpFact);\r\n\t\t#else\r\n\t\t\tgl_FragColor.rgb = mix(gl_FragColor.rgb, u_FogColor, lerpFact);\r\n\t\t#endif\r\n\t#endif\r\n\t\r\n}\r\n\r\n",
		yi =
		'#include "Lighting.glsl";\r\n\r\nattribute vec4 a_Position;\r\n\r\nattribute vec2 a_Texcoord0;\r\n\r\n#ifdef GPU_INSTANCE\r\n\tattribute mat4 a_MvpMatrix;\r\n#else\r\n\tuniform mat4 u_MvpMatrix;\r\n#endif\r\n\r\nattribute vec4 a_Color;\r\nvarying vec4 v_Color;\r\nvarying vec2 v_Texcoord0;\r\n\r\n#ifdef TILINGOFFSET\r\n\tuniform vec4 u_TilingOffset;\r\n#endif\r\n\r\n#ifdef BONE\r\n\tconst int c_MaxBoneCount = 24;\r\n\tattribute vec4 a_BoneIndices;\r\n\tattribute vec4 a_BoneWeights;\r\n\tuniform mat4 u_Bones[c_MaxBoneCount];\r\n#endif\r\n\r\nvoid main() {\r\n\tvec4 position;\r\n\t#ifdef BONE\r\n\t\tmat4 skinTransform = u_Bones[int(a_BoneIndices.x)] * a_BoneWeights.x;\r\n\t\tskinTransform += u_Bones[int(a_BoneIndices.y)] * a_BoneWeights.y;\r\n\t\tskinTransform += u_Bones[int(a_BoneIndices.z)] * a_BoneWeights.z;\r\n\t\tskinTransform += u_Bones[int(a_BoneIndices.w)] * a_BoneWeights.w;\r\n\t\tposition=skinTransform*a_Position;\r\n\t#else\r\n\t\tposition=a_Position;\r\n\t#endif\r\n\t#ifdef GPU_INSTANCE\r\n\t\tgl_Position = a_MvpMatrix * position;\r\n\t#else\r\n\t\tgl_Position = u_MvpMatrix * position;\r\n\t#endif\r\n\r\n\t#ifdef TILINGOFFSET\r\n\t\tv_Texcoord0=TransformUV(a_Texcoord0,u_TilingOffset);\r\n\t#else\r\n\t\tv_Texcoord0=a_Texcoord0;\r\n\t#endif\r\n\r\n\t#if defined(COLOR)&&defined(ENABLEVERTEXCOLOR)\r\n\t\tv_Color = a_Color;\r\n\t#endif\r\n\tgl_Position=remapGLPositionZ(gl_Position);\r\n}',
		Oi =
		'#ifdef HIGHPRECISION\r\n\tprecision highp float;\r\n#else\r\n\tprecision mediump float;\r\n#endif\r\n\r\n#ifdef MAINTEXTURE\r\n\tuniform sampler2D u_MainTexture;\r\n#endif\r\n\r\n#ifdef NORMALTEXTURE\r\n\tuniform sampler2D u_NormalTexture;\r\n#endif\r\n\r\nuniform vec4 u_HorizonColor;\r\n\r\nvarying vec3 v_Normal;\r\nvarying vec3 v_Tangent;\r\nvarying vec3 v_Binormal;\r\nvarying vec3 v_ViewDir;\r\nvarying vec2 v_Texcoord0;\r\nvarying vec2 v_Texcoord1;\r\n\r\n#include "Lighting.glsl"\r\n\r\nvoid main()\r\n{\r\n\tvec4 bumpColor1 = texture2D(u_NormalTexture, v_Texcoord0);\r\n\tvec4 bumpColor2 = texture2D(u_NormalTexture, v_Texcoord1);\r\n\t\r\n\tvec3 normal1 = NormalSampleToWorldSpace1(bumpColor1, v_Tangent, v_Binormal, v_Normal);\r\n\tvec3 normal2 = NormalSampleToWorldSpace1(bumpColor2, v_Tangent, v_Binormal, v_Normal);\r\n\t\r\n\tvec3 normal = normalize((normal1 + normal2) * 0.5);\r\n\tvec3 viewDir = normalize(v_ViewDir);\r\n\tfloat fresnel = dot(viewDir, normal);\r\n\t\r\n\tvec4 waterColor = texture2D(u_MainTexture, vec2(fresnel, fresnel));\r\n\t\r\n\tvec4 color;\r\n\tcolor.rgb = mix(waterColor.rgb, u_HorizonColor.rgb, vec3(waterColor.a));\r\n\tcolor.a = u_HorizonColor.a;\r\n\t\r\n\tgl_FragColor = color;\r\n}\r\n\r\n',
		Ni =
		'#include "Lighting.glsl";\r\n\r\nattribute vec4 a_Position;\r\nattribute vec3 a_Normal;\r\nattribute vec4 a_Tangent0;\r\n\r\nuniform mat4 u_MvpMatrix;\r\nuniform mat4 u_WorldMat;\r\nuniform vec3 u_CameraPos;\r\nuniform float u_WaveScale;\r\nuniform vec4 u_WaveSpeed;\r\nuniform float u_Time;\r\n\r\nvarying vec3 v_Normal;\r\nvarying vec3 v_Tangent;\r\nvarying vec3 v_Binormal;\r\nvarying vec3 v_ViewDir;\r\nvarying vec2 v_Texcoord0;\r\nvarying vec2 v_Texcoord1;\r\n\r\nvoid main()\r\n{\r\n\tvec4 positionWorld = u_WorldMat * a_Position;\r\n\tvec4 position = u_MvpMatrix * a_Position;\r\n\t\r\n\tvec4 temp = vec4(positionWorld.x, positionWorld.z, positionWorld.x, positionWorld.z) * u_WaveScale + u_WaveSpeed * u_WaveScale * u_Time;\r\n\t\r\n\tv_Texcoord0 = temp.xy * vec2(0.4, 0.45);\r\n\tv_Texcoord1 = temp.wz;\r\n\t\r\n\tmat3 worldMat = mat3(u_WorldMat);\r\n\tv_Normal = worldMat * a_Normal;\r\n\tv_Tangent = worldMat * a_Tangent0.xyz;\r\n\tv_Binormal = cross(v_Normal, v_Tangent) * a_Tangent0.w;\r\n\t\r\n\tv_ViewDir = u_CameraPos - positionWorld.xyz;\r\n\tgl_Position = position;\r\n\tgl_Position=remapGLPositionZ(gl_Position);\r\n}';
	class Pi {
		constructor() {
			this.textureID = -1
		}
	}
	class wi extends t.Resource {
		constructor(e, t, r, i, a) {
			super(), this._stateParamsMap = [], this._uploadMark = -1, this._uploadRenderType = -1, this._vs =
				e, this._ps = t, this._attributeMap = r, this._uniformMap = i, this._shaderPass = a, this
				._create(), this.lock = !0
		}
		_create() {
			var e = t.LayaGL.instance;
			for (var r in this._program = e.createProgram(), this._vshader = this._createShader(e, this._vs, e
						.VERTEX_SHADER), this._pshader = this._createShader(e, this._ps, e.FRAGMENT_SHADER), e
					.attachShader(this._program, this._vshader), e.attachShader(this._program, this._pshader),
					this._attributeMap) e.bindAttribLocation(this._program, this._attributeMap[r], r);
			if (e.linkProgram(this._program), !t.Render.isConchApp && F.debugMode && !e.getProgramParameter(this
					._program, e.LINK_STATUS)) throw e.getProgramInfoLog(this._program);
			var i = [],
				a = [],
				n = [],
				s = [],
				o = [];
			this._customUniformParamsMap = [];
			var l, _, h, c = e.getProgramParameter(this._program, e.ACTIVE_UNIFORMS);
			for (t.WebGLContext.useProgram(e, this._program), this._curActTexIndex = 0, _ = 0; _ < c; _++) {
				var d = e.getActiveUniform(this._program, _),
					u = d.name;
				(l = new Pi).location = e.getUniformLocation(this._program, u), u.indexOf("[0]") > 0 ? (l.name =
						u = u.substr(0, u.length - 3), l.isArray = !0) : (l.name = u, l.isArray = !1), l.type =
					d.type, this._addShaderUnifiormFun(l);
				var f = this._uniformMap[u];
				if (null != f) switch (l.dataOffset = F.propertyNameToID(u), f) {
					case F.PERIOD_CUSTOM:
						o.push(l);
						break;
					case F.PERIOD_MATERIAL:
						s.push(l);
						break;
					case F.PERIOD_SPRITE:
						n.push(l);
						break;
					case F.PERIOD_CAMERA:
						a.push(l);
						break;
					case F.PERIOD_SCENE:
						i.push(l);
						break;
					default:
						throw new Error("Shader3D: period is unkonw.")
				}
			}
			for (this._sceneUniformParamsMap = t.LayaGL.instance.createCommandEncoder(4 * i.length * 5 + 4, 64,
					!0), _ = 0, h = i.length; _ < h; _++) this._sceneUniformParamsMap.addShaderUniform(i[_]);
			for (this._cameraUniformParamsMap = t.LayaGL.instance.createCommandEncoder(4 * a.length * 5 + 4, 64,
					!0), _ = 0, h = a.length; _ < h; _++) this._cameraUniformParamsMap.addShaderUniform(a[_]);
			for (this._spriteUniformParamsMap = t.LayaGL.instance.createCommandEncoder(4 * n.length * 5 + 4, 64,
					!0), _ = 0, h = n.length; _ < h; _++) this._spriteUniformParamsMap.addShaderUniform(n[_]);
			for (this._materialUniformParamsMap = t.LayaGL.instance.createCommandEncoder(4 * s.length * 5 + 4,
					64, !0), _ = 0, h = s.length; _ < h; _++) this._materialUniformParamsMap.addShaderUniform(s[
				_]);
			for (this._customUniformParamsMap.length = o.length, _ = 0, h = o.length; _ < h; _++) {
				var m = o[_];
				this._customUniformParamsMap[m.dataOffset] = m
			}
			var E = this._shaderPass._stateMap;
			for (var T in E) this._stateParamsMap[E[T]] = F.propertyNameToID(T)
		}
		_getRenderState(e, t) {
			var r = this._stateParamsMap[t];
			return null == r ? null : e[r]
		}
		_disposeResource() {
			t.LayaGL.instance.deleteShader(this._vshader), t.LayaGL.instance.deleteShader(this._pshader), t
				.LayaGL.instance.deleteProgram(this._program), this._vshader = this._pshader = this._program =
				null, this._setGPUMemory(0), this._curActTexIndex = 0
		}
		_addShaderUnifiormFun(e) {
			var r = t.LayaGL.instance;
			e.caller = this;
			var i = e.isArray;
			switch (e.type) {
				case r.BOOL:
					e.fun = this._uniform1i, e.uploadedValue = new Array(1);
					break;
				case r.INT:
					e.fun = i ? this._uniform1iv : this._uniform1i, e.uploadedValue = new Array(1);
					break;
				case r.FLOAT:
					e.fun = i ? this._uniform1fv : this._uniform1f, e.uploadedValue = new Array(1);
					break;
				case r.FLOAT_VEC2:
					e.fun = i ? this._uniform_vec2v : this._uniform_vec2, e.uploadedValue = new Array(2);
					break;
				case r.FLOAT_VEC3:
					e.fun = i ? this._uniform_vec3v : this._uniform_vec3, e.uploadedValue = new Array(3);
					break;
				case r.FLOAT_VEC4:
					e.fun = i ? this._uniform_vec4v : this._uniform_vec4, e.uploadedValue = new Array(4);
					break;
				case r.FLOAT_MAT2:
					e.fun = this._uniformMatrix2fv;
					break;
				case r.FLOAT_MAT3:
					e.fun = this._uniformMatrix3fv;
					break;
				case r.FLOAT_MAT4:
					e.fun = i ? this._uniformMatrix4fv : this._uniformMatrix4f;
					break;
				case r.SAMPLER_2D:
					r.uniform1i(e.location, this._curActTexIndex), e.textureID = t.WebGLContext._glTextureIDs[
						this._curActTexIndex++], e.fun = this._uniform_sampler2D;
					break;
				case 35679:
					r.uniform1i(e.location, this._curActTexIndex), e.textureID = t.WebGLContext._glTextureIDs[
						this._curActTexIndex++], e.fun = this._uniform_sampler3D;
					break;
				case r.SAMPLER_CUBE:
					r.uniform1i(e.location, this._curActTexIndex), e.textureID = t.WebGLContext._glTextureIDs[
						this._curActTexIndex++], e.fun = this._uniform_samplerCube;
					break;
				default:
					throw new Error("compile shader err!")
			}
		}
		_createShader(e, t, r) {
			var i = e.createShader(r);
			if (e.shaderSource(i, t), e.compileShader(i), F.debugMode && !e.getShaderParameter(i, e
					.COMPILE_STATUS)) throw e.getShaderInfoLog(i);
			return i
		}
		_uniform1f(e, r) {
			var i = e.uploadedValue;
			return i[0] !== r ? (t.LayaGL.instance.uniform1f(e.location, i[0] = r), 1) : 0
		}
		_uniform1fv(e, r) {
			if (r.length < 4) {
				var i = e.uploadedValue;
				return i[0] !== r[0] || i[1] !== r[1] || i[2] !== r[2] || i[3] !== r[3] ? (t.LayaGL.instance
					.uniform1fv(e.location, r), i[0] = r[0], i[1] = r[1], i[2] = r[2], i[3] = r[3], 1) : 0
			}
			return t.LayaGL.instance.uniform1fv(e.location, r), 1
		}
		_uniform_vec2(e, r) {
			var i = e.uploadedValue;
			return i[0] !== r.x || i[1] !== r.y ? (t.LayaGL.instance.uniform2f(e.location, i[0] = r.x, i[1] = r
				.y), 1) : 0
		}
		_uniform_vec2v(e, r) {
			if (r.length < 2) {
				var i = e.uploadedValue;
				return i[0] !== r[0] || i[1] !== r[1] || i[2] !== r[2] || i[3] !== r[3] ? (t.LayaGL.instance
					.uniform2fv(e.location, r), i[0] = r[0], i[1] = r[1], i[2] = r[2], i[3] = r[3], 1) : 0
			}
			return t.LayaGL.instance.uniform2fv(e.location, r), 1
		}
		_uniform_vec3(e, r) {
			var i = e.uploadedValue;
			return i[0] !== r.x || i[1] !== r.y || i[2] !== r.z ? (t.LayaGL.instance.uniform3f(e.location, i[
				0] = r.x, i[1] = r.y, i[2] = r.z), 1) : 0
		}
		_uniform_vec3v(e, r) {
			return t.LayaGL.instance.uniform3fv(e.location, r), 1
		}
		_uniform_vec4(e, r) {
			var i = e.uploadedValue;
			return i[0] !== r.x || i[1] !== r.y || i[2] !== r.z || i[3] !== r.w ? (t.LayaGL.instance.uniform4f(e
				.location, i[0] = r.x, i[1] = r.y, i[2] = r.z, i[3] = r.w), 1) : 0
		}
		_uniform_vec4v(e, r) {
			return t.LayaGL.instance.uniform4fv(e.location, r), 1
		}
		_uniformMatrix2fv(e, r) {
			return t.LayaGL.instance.uniformMatrix2fv(e.location, !1, r), 1
		}
		_uniformMatrix3fv(e, r) {
			return t.LayaGL.instance.uniformMatrix3fv(e.location, !1, r), 1
		}
		_uniformMatrix4f(e, r) {
			var i = r.elements;
			return t.LayaGL.instance.uniformMatrix4fv(e.location, !1, i), 1
		}
		_uniformMatrix4fv(e, r) {
			return t.LayaGL.instance.uniformMatrix4fv(e.location, !1, r), 1
		}
		_uniform1i(e, r) {
			var i = e.uploadedValue;
			return i[0] !== r ? (t.LayaGL.instance.uniform1i(e.location, i[0] = r), 1) : 0
		}
		_uniform1iv(e, r) {
			return t.LayaGL.instance.uniform1iv(e.location, r), 1
		}
		_uniform_ivec2(e, r) {
			var i = e.uploadedValue;
			return i[0] !== r[0] || i[1] !== r[1] ? (t.LayaGL.instance.uniform2i(e.location, i[0] = r[0], i[1] =
				r[1]), 1) : 0
		}
		_uniform_ivec2v(e, r) {
			return t.LayaGL.instance.uniform2iv(e.location, r), 1
		}
		_uniform_vec3i(e, r) {
			var i = e.uploadedValue;
			return i[0] !== r[0] || i[1] !== r[1] || i[2] !== r[2] ? (t.LayaGL.instance.uniform3i(e.location, i[
				0] = r[0], i[1] = r[1], i[2] = r[2]), 1) : 0
		}
		_uniform_vec3vi(e, r) {
			return t.LayaGL.instance.uniform3iv(e.location, r), 1
		}
		_uniform_vec4i(e, r) {
			var i = e.uploadedValue;
			return i[0] !== r[0] || i[1] !== r[1] || i[2] !== r[2] || i[3] !== r[3] ? (t.LayaGL.instance
				.uniform4i(e.location, i[0] = r[0], i[1] = r[1], i[2] = r[2], i[3] = r[3]), 1) : 0
		}
		_uniform_vec4vi(e, r) {
			return t.LayaGL.instance.uniform4iv(e.location, r), 1
		}
		_uniform_sampler2D(e, r) {
			var i = r._getSource() || r.defaulteTexture._getSource(),
				a = t.LayaGL.instance;
			return t.WebGLContext.activeTexture(a, e.textureID), t.WebGLContext.bindTexture(a, a.TEXTURE_2D, i),
				0
		}
		_uniform_sampler3D(e, r) {
			var i = r._getSource() || r.defaulteTexture._getSource(),
				a = t.LayaGL.instance;
			return t.WebGLContext.activeTexture(a, e.textureID), t.WebGLContext.bindTexture(a,
				WebGL2RenderingContext.TEXTURE_3D, i), 0
		}
		_uniform_samplerCube(e, r) {
			var i = r._getSource() || r.defaulteTexture._getSource(),
				a = t.LayaGL.instance;
			return t.WebGLContext.activeTexture(a, e.textureID), t.WebGLContext.bindTexture(a, a
				.TEXTURE_CUBE_MAP, i), 0
		}
		bind() {
			return t.WebGLContext.useProgram(t.LayaGL.instance, this._program)
		}
		uploadUniforms(e, r, i) {
			t.Stat.shaderCall += t.LayaGLRunner.uploadShaderUniforms(t.LayaGL.instance, e, r, i)
		}
		uploadRenderStateBlendDepth(e) {
			var r = t.LayaGL.instance,
				i = this._shaderPass.renderState,
				a = e.getData(),
				n = this._getRenderState(a, F.RENDER_STATE_DEPTH_WRITE),
				s = this._getRenderState(a, F.RENDER_STATE_DEPTH_TEST),
				o = this._getRenderState(a, F.RENDER_STATE_BLEND);
			switch (null == n && (n = i.depthWrite), null == s && (s = i.depthTest), null == o && (o = i.blend),
				t.WebGLContext.setDepthMask(r, n), s === X.DEPTHTEST_OFF ? t.WebGLContext.setDepthTest(r, !1) :
				(t.WebGLContext.setDepthTest(r, !0), t.WebGLContext.setDepthFunc(r, s)), o) {
				case X.BLEND_DISABLE:
					t.WebGLContext.setBlend(r, !1);
					break;
				case X.BLEND_ENABLE_ALL:
					var l = this._getRenderState(a, F.RENDER_STATE_BLEND_EQUATION),
						_ = this._getRenderState(a, F.RENDER_STATE_BLEND_SRC),
						h = this._getRenderState(a, F.RENDER_STATE_BLEND_DST);
					null == l && (l = i.blendEquation), null == _ && (_ = i.srcBlend), null == h && (h = i
							.dstBlend), t.WebGLContext.setBlend(r, !0), t.WebGLContext.setBlendEquation(r, l), t
						.WebGLContext.setBlendFunc(r, _, h);
					break;
				case X.BLEND_ENABLE_SEPERATE:
					var c = this._getRenderState(a, F.RENDER_STATE_BLEND_EQUATION_RGB),
						d = this._getRenderState(a, F.RENDER_STATE_BLEND_EQUATION_ALPHA),
						u = this._getRenderState(a, F.RENDER_STATE_BLEND_SRC_RGB),
						f = this._getRenderState(a, F.RENDER_STATE_BLEND_DST_RGB),
						m = this._getRenderState(a, F.RENDER_STATE_BLEND_SRC_ALPHA),
						E = this._getRenderState(a, F.RENDER_STATE_BLEND_DST_ALPHA);
					null == c && (c = i.blendEquationRGB), null == d && (d = i.blendEquationAlpha), null == u &&
						(u = i.srcBlendRGB), null == f && (f = i.dstBlendRGB), null == m && (m = i
							.srcBlendAlpha), null == E && (E = i.dstBlendAlpha), t.WebGLContext.setBlend(r, !0),
						t.WebGLContext.setBlendEquationSeparate(r, c, d), t.WebGLContext.setBlendFuncSeperate(r,
							u, f, m, E)
			}
		}
		uploadRenderStateFrontFace(e, r, i) {
			var a, n = t.LayaGL.instance,
				s = this._shaderPass.renderState,
				o = e.getData(),
				l = this._getRenderState(o, F.RENDER_STATE_CULL);
			switch (null == l && (l = s.cull), l) {
				case X.CULL_NONE:
					t.WebGLContext.setCullFace(n, !1);
					break;
				case X.CULL_FRONT:
					t.WebGLContext.setCullFace(n, !0), a = r ? i ? n.CCW : n.CW : i ? n.CW : n.CCW, t
						.WebGLContext.setFrontFace(n, a);
					break;
				case X.CULL_BACK:
					t.WebGLContext.setCullFace(n, !0), a = r ? i ? n.CW : n.CCW : i ? n.CCW : n.CW, t
						.WebGLContext.setFrontFace(n, a)
			}
		}
		uploadCustomUniform(e, r) {
			t.Stat.shaderCall += t.LayaGLRunner.uploadCustomUniform(t.LayaGL.instance, this
				._customUniformParamsMap, e, r)
		}
		_uniformMatrix2fvForNative(e, r) {
			return t.LayaGL.instance.uniformMatrix2fvEx(e.location, !1, r), 1
		}
		_uniformMatrix3fvForNative(e, r) {
			return t.LayaGL.instance.uniformMatrix3fvEx(e.location, !1, r), 1
		}
		_uniformMatrix4fvForNative(e, r) {
			return t.LayaGL.instance.uniformMatrix4fvEx(e.location, !1, r), 1
		}
	}
	class Vi extends t.ShaderCompile {
		constructor(e, t, r, i) {
			for (var a in super(t, r, null), this._cacheSharders = {}, this._cacheShaderHierarchy = 1, this
					._renderState = new X, this._validDefine = new V, this._owner = e, this._stateMap = i, this
					.defs) this._validDefine.add(F.getDefineByName(a))
		}
		get renderState() {
			return this._renderState
		}
		_compileToTree(e, r, i, a, n) {
			var s, o, l, _, h, c, d, u, f, m, E;
			for (f = i; f < r.length; f++)
				if (!((l = r[f]).length < 1) && 0 !== (c = l.indexOf("//"))) {
					if (c >= 0 && (l = l.substr(0, c)), s = u || new t.ShaderNode(a), u = null, s.text = l, (c =
							l.indexOf("#")) >= 0) {
						for (_ = "#", E = c + 1, m = l.length; E < m; E++) {
							var T = l.charAt(E);
							if (" " === T || "\t" === T || "?" === T) break;
							_ += T
						}
						switch (s.name = _, _) {
							case "#ifdef":
							case "#ifndef":
								if (s.setParent(e), e = s, n)
									for (d = l.substr(E).split(t.ShaderCompile._splitToWordExps3), E = 0; E < d
										.length; E++)(l = d[E]).length && (n[l] = !0);
								continue;
							case "#if":
							case "#elif":
								if (s.setParent(e), e = s, n)
									for (d = l.substr(E).split(t.ShaderCompile._splitToWordExps3), E = 0; E < d
										.length; E++)(l = d[E]).length && "defined" != l && (n[l] = !0);
								continue;
							case "#else":
								o = (e = e.parent).childs[e.childs.length - 1], s.setParent(e), e = s;
								continue;
							case "#endif":
								o = (e = e.parent).childs[e.childs.length - 1], s.setParent(e);
								continue;
							case "#include":
								d = t.ShaderCompile.splitToWords(l, null);
								var p = t.ShaderCompile.includes[d[1]];
								if (!p) throw "ShaderCompile error no this include file:" + d[1];
								if ((c = d[0].indexOf("?")) < 0) {
									s.setParent(e), l = p.getWith("with" == d[2] ? d[3] : null), this
										._compileToTree(s, l.split("\n"), 0, a, n), s.text = "";
									continue
								}
								s.setCondition(d[0].substr(c + 1), t.ShaderCompile.IFDEF_YES), s.text = p
									.getWith("with" == d[2] ? d[3] : null);
								break;
							case "#import":
								h = (d = t.ShaderCompile.splitToWords(l, null))[1], a.push({
									node: s,
									file: t.ShaderCompile.includes[h],
									ofs: s.text.length
								});
								continue
						}
					} else {
						if ((o = e.childs[e.childs.length - 1]) && !o.name) {
							a.length > 0 && t.ShaderCompile.splitToWords(l, o), u = s, o.text += "\n" + l;
							continue
						}
						a.length > 0 && t.ShaderCompile.splitToWords(l, s)
					}
					s.setParent(e)
				}
		}
		_resizeCacheShaderMap(e, t, r) {
			var i = this._cacheShaderHierarchy - 1;
			if (t == i) {
				for (var a in e)
					for (var n = e[a], s = 0, o = r - i; s < o; s++) s == o - 1 ? e[0] = n : e = e[0 == s ? a :
						0] = {};
				this._cacheShaderHierarchy = r
			} else
				for (var a in e) this._resizeCacheShaderMap(e[a], ++t, r)
		}
		withCompile(e) {
			e._intersectionDefineDatas(this._validDefine);
			var r = this._cacheSharders,
				i = e._length;
			i > this._cacheShaderHierarchy && (this._resizeCacheShaderMap(r, 0, i), this._cacheShaderHierarchy =
				i);
			for (var a = e._mask, n = e._length - 1, o = this._cacheShaderHierarchy - 1, l = 0; l < o; l++) {
				var _ = n < l ? 0 : a[l],
					h = r[_];
				h || (r[_] = h = {}), r = h
			}
			var c = n < o ? 0 : a[o],
				d = r[c];
			if (d) return d;
			var u = Vi._defineString;
			F._getNamesByDefineData(e, u);
			var f = s._config,
				m = f.lightClusterCount,
				E = {},
				T = "#define MAX_LIGHT_COUNT " + f.maxLightCount + "\n";
			T += "#define MAX_LIGHT_COUNT_PER_CLUSTER " + f._maxAreaLightCountPerClusterAverage + "\n", T +=
				"#define CLUSTER_X_COUNT " + m.x + "\n", T += "#define CLUSTER_Y_COUNT " + m.y + "\n", T +=
				"#define CLUSTER_Z_COUNT " + m.z + "\n";
			l = 0;
			for (var p = u.length; l < p; l++) {
				var g = u[l];
				T += "#define " + g + "\n", E[g] = !0
			}
			var S = this._VS.toscript(E, []),
				v = "";
			0 == S[0].indexOf("#version") && (v = S[0] + "\n", S.shift());
			var R = this._PS.toscript(E, []),
				I = "";
			if (0 == R[0].indexOf("#version") && (I = R[0] + "\n", R.shift()), d = new wi(v + T + S.join("\n"),
					I + T + R.join("\n"), this._owner._attributeMap || this._owner._owner._attributeMap, this
					._owner._uniformMap || this._owner._owner._uniformMap, this), r[c] = d, F.debugMode) {
				var x;
				if (t.WebGL.shaderHighPrecision) e.remove(F.SHADERDEFINE_HIGHPRECISION), -1 !== (x = u.indexOf(
					"HIGHPRECISION")) && u.splice(x, 1);
				if (!f._multiLighting) e.remove(F.SHADERDEFINE_LEGACYSINGALLIGHTING), -1 !== (x = u.indexOf(
					"LEGACYSINGLELIGHTING")) && u.splice(x, 1);
				for (l = 0, p = e._length; l < p; l++) l == p - 1 ? a[l] : a[l] + ",";
				for (l = 0, p = u.length; l < p; l++) l == p - 1 ? u[l] : u[l] + ","
			}
			return d
		}
	}
	Vi._defineString = [];
	class bi {
		constructor(e, t) {
			this._flags = {}, this._passes = [], this._attributeMap = e, this._uniformMap = t
		}
		setFlag(e, t) {
			t ? this._flags[e] = t : delete this._flags[e]
		}
		getFlag(e) {
			return this._flags[e]
		}
		addShaderPass(e, t, r = null) {
			var i = new Vi(this, e, t, r);
			return this._passes.push(i), i
		}
	}
	class Fi {
		constructor() {}
		static __init__() {
			F.SHADERDEFINE_HIGHPRECISION = F.getDefineByName("HIGHPRECISION"), F.SHADERDEFINE_LEGACYSINGALLIGHTING =
				F.getDefineByName("LEGACYSINGLELIGHTING"), F.addInclude("Lighting.glsl", qr), F.addInclude(
					"ShadowHelper.glsl", Ri), F.addInclude("BRDF.glsl", ri), F.addInclude("PBRUtils.glsl", ni), F
				.addInclude("PBRStandardLighting.glsl", ai), F.addInclude("PBRSpecularLighting.glsl", ii), F
				.addInclude("Colors.glsl", Ti), F.addInclude("Sampling.glsl", Si), F.addInclude("StdLib.glsl", vi);
			var e = {
					a_Position: fe.MESH_POSITION0,
					a_Color: fe.MESH_COLOR0,
					a_Normal: fe.MESH_NORMAL0,
					a_Texcoord0: fe.MESH_TEXTURECOORDINATE0,
					a_Texcoord1: fe.MESH_TEXTURECOORDINATE1,
					a_BoneWeights: fe.MESH_BLENDWEIGHT0,
					a_BoneIndices: fe.MESH_BLENDINDICES0,
					a_Tangent0: fe.MESH_TANGENT0,
					a_MvpMatrix: fe.MESH_MVPMATRIX_ROW0,
					a_WorldMat: fe.MESH_WORLDMATRIX_ROW0
				},
				t = {
					u_Bones: F.PERIOD_CUSTOM,
					u_DiffuseTexture: F.PERIOD_MATERIAL,
					u_SpecularTexture: F.PERIOD_MATERIAL,
					u_NormalTexture: F.PERIOD_MATERIAL,
					u_AlphaTestValue: F.PERIOD_MATERIAL,
					u_DiffuseColor: F.PERIOD_MATERIAL,
					u_MaterialSpecular: F.PERIOD_MATERIAL,
					u_Shininess: F.PERIOD_MATERIAL,
					u_TilingOffset: F.PERIOD_MATERIAL,
					u_WorldMat: F.PERIOD_SPRITE,
					u_MvpMatrix: F.PERIOD_SPRITE,
					u_LightmapScaleOffset: F.PERIOD_SPRITE,
					u_LightMap: F.PERIOD_SPRITE,
					u_CameraPos: F.PERIOD_CAMERA,
					u_Viewport: F.PERIOD_CAMERA,
					u_ProjectionParams: F.PERIOD_CAMERA,
					u_View: F.PERIOD_CAMERA,
					u_ReflectTexture: F.PERIOD_SCENE,
					u_ReflectIntensity: F.PERIOD_SCENE,
					u_FogStart: F.PERIOD_SCENE,
					u_FogRange: F.PERIOD_SCENE,
					u_FogColor: F.PERIOD_SCENE,
					u_DirationLightCount: F.PERIOD_SCENE,
					u_LightBuffer: F.PERIOD_SCENE,
					u_LightClusterBuffer: F.PERIOD_SCENE,
					u_AmbientColor: F.PERIOD_SCENE,
					u_shadowMap1: F.PERIOD_SCENE,
					u_shadowMap2: F.PERIOD_SCENE,
					u_shadowMap3: F.PERIOD_SCENE,
					u_shadowPSSMDistance: F.PERIOD_SCENE,
					u_lightShadowVP: F.PERIOD_SCENE,
					u_shadowPCFoffset: F.PERIOD_SCENE,
					"u_DirectionLight.color": F.PERIOD_SCENE,
					"u_DirectionLight.direction": F.PERIOD_SCENE,
					"u_PointLight.position": F.PERIOD_SCENE,
					"u_PointLight.range": F.PERIOD_SCENE,
					"u_PointLight.color": F.PERIOD_SCENE,
					"u_SpotLight.position": F.PERIOD_SCENE,
					"u_SpotLight.direction": F.PERIOD_SCENE,
					"u_SpotLight.range": F.PERIOD_SCENE,
					"u_SpotLight.spot": F.PERIOD_SCENE,
					"u_SpotLight.color": F.PERIOD_SCENE
				},
				r = {
					s_Cull: F.RENDER_STATE_CULL,
					s_Blend: F.RENDER_STATE_BLEND,
					s_BlendSrc: F.RENDER_STATE_BLEND_SRC,
					s_BlendDst: F.RENDER_STATE_BLEND_DST,
					s_DepthTest: F.RENDER_STATE_DEPTH_TEST,
					s_DepthWrite: F.RENDER_STATE_DEPTH_WRITE
				},
				i = F.add("BLINNPHONG", null, null, !0),
				a = new bi(e, t);
			i.addSubShader(a), a.addShaderPass($r, Jr, r), e = {
					a_Position: fe.MESH_POSITION0,
					a_Color: fe.MESH_COLOR0
				}, t = {
					u_MvpMatrix: F.PERIOD_SPRITE,
					u_Color: F.PERIOD_MATERIAL
				}, r = {
					s_Cull: F.RENDER_STATE_CULL,
					s_Blend: F.RENDER_STATE_BLEND,
					s_BlendSrc: F.RENDER_STATE_BLEND_SRC,
					s_BlendDst: F.RENDER_STATE_BLEND_DST,
					s_DepthTest: F.RENDER_STATE_DEPTH_TEST,
					s_DepthWrite: F.RENDER_STATE_DEPTH_WRITE
				}, i = F.add("LineShader"), a = new bi(e, t), i.addSubShader(a), a.addShaderPass(Kr, Qr, r), e = {
					a_Position: fe.MESH_POSITION0,
					a_Normal: fe.MESH_NORMAL0,
					a_Tangent0: fe.MESH_TANGENT0,
					a_Texcoord0: fe.MESH_TEXTURECOORDINATE0,
					a_BoneWeights: fe.MESH_BLENDWEIGHT0,
					a_BoneIndices: fe.MESH_BLENDINDICES0,
					a_MvpMatrix: fe.MESH_MVPMATRIX_ROW0,
					a_WorldMat: fe.MESH_WORLDMATRIX_ROW0
				}, t = {
					u_Bones: F.PERIOD_CUSTOM,
					u_MvpMatrix: F.PERIOD_SPRITE,
					u_WorldMat: F.PERIOD_SPRITE,
					u_CameraPos: F.PERIOD_CAMERA,
					u_View: F.PERIOD_CAMERA,
					u_ProjectionParams: F.PERIOD_CAMERA,
					u_Viewport: F.PERIOD_CAMERA,
					u_AlphaTestValue: F.PERIOD_MATERIAL,
					u_AlbedoColor: F.PERIOD_MATERIAL,
					u_EmissionColor: F.PERIOD_MATERIAL,
					u_AlbedoTexture: F.PERIOD_MATERIAL,
					u_NormalTexture: F.PERIOD_MATERIAL,
					u_ParallaxTexture: F.PERIOD_MATERIAL,
					u_MetallicGlossTexture: F.PERIOD_MATERIAL,
					u_OcclusionTexture: F.PERIOD_MATERIAL,
					u_EmissionTexture: F.PERIOD_MATERIAL,
					u_metallic: F.PERIOD_MATERIAL,
					u_smoothness: F.PERIOD_MATERIAL,
					u_smoothnessScale: F.PERIOD_MATERIAL,
					u_occlusionStrength: F.PERIOD_MATERIAL,
					u_normalScale: F.PERIOD_MATERIAL,
					u_parallaxScale: F.PERIOD_MATERIAL,
					u_TilingOffset: F.PERIOD_MATERIAL,
					u_ReflectTexture: F.PERIOD_SCENE,
					u_ReflectIntensity: F.PERIOD_SCENE,
					u_AmbientColor: F.PERIOD_SCENE,
					u_shadowMap1: F.PERIOD_SCENE,
					u_shadowMap2: F.PERIOD_SCENE,
					u_shadowMap3: F.PERIOD_SCENE,
					u_shadowPSSMDistance: F.PERIOD_SCENE,
					u_lightShadowVP: F.PERIOD_SCENE,
					u_shadowPCFoffset: F.PERIOD_SCENE,
					u_FogStart: F.PERIOD_SCENE,
					u_FogRange: F.PERIOD_SCENE,
					u_FogColor: F.PERIOD_SCENE,
					u_DirationLightCount: F.PERIOD_SCENE,
					u_LightBuffer: F.PERIOD_SCENE,
					u_LightClusterBuffer: F.PERIOD_SCENE,
					"u_DirectionLight.direction": F.PERIOD_SCENE,
					"u_DirectionLight.color": F.PERIOD_SCENE,
					"u_PointLight.position": F.PERIOD_SCENE,
					"u_PointLight.range": F.PERIOD_SCENE,
					"u_PointLight.color": F.PERIOD_SCENE,
					"u_SpotLight.position": F.PERIOD_SCENE,
					"u_SpotLight.direction": F.PERIOD_SCENE,
					"u_SpotLight.range": F.PERIOD_SCENE,
					"u_SpotLight.spot": F.PERIOD_SCENE,
					"u_SpotLight.color": F.PERIOD_SCENE
				}, r = {
					s_Cull: F.RENDER_STATE_CULL,
					s_Blend: F.RENDER_STATE_BLEND,
					s_BlendSrc: F.RENDER_STATE_BLEND_SRC,
					s_BlendDst: F.RENDER_STATE_BLEND_DST,
					s_DepthTest: F.RENDER_STATE_DEPTH_TEST,
					s_DepthWrite: F.RENDER_STATE_DEPTH_WRITE
				}, i = F.add("PBRStandard", null, null, !0), a = new bi(e, t), i.addSubShader(a), a.addShaderPass(
					_i, li, r), e = {
					a_Position: fe.MESH_POSITION0,
					a_Normal: fe.MESH_NORMAL0,
					a_Tangent0: fe.MESH_TANGENT0,
					a_Texcoord0: fe.MESH_TEXTURECOORDINATE0,
					a_BoneWeights: fe.MESH_BLENDWEIGHT0,
					a_BoneIndices: fe.MESH_BLENDINDICES0,
					a_MvpMatrix: fe.MESH_MVPMATRIX_ROW0,
					a_WorldMat: fe.MESH_WORLDMATRIX_ROW0
				}, t = {
					u_Bones: F.PERIOD_CUSTOM,
					u_MvpMatrix: F.PERIOD_SPRITE,
					u_WorldMat: F.PERIOD_SPRITE,
					u_CameraPos: F.PERIOD_CAMERA,
					u_View: F.PERIOD_CAMERA,
					u_ProjectionParams: F.PERIOD_CAMERA,
					u_Viewport: F.PERIOD_CAMERA,
					u_AlphaTestValue: F.PERIOD_MATERIAL,
					u_AlbedoColor: F.PERIOD_MATERIAL,
					u_SpecularColor: F.PERIOD_MATERIAL,
					u_EmissionColor: F.PERIOD_MATERIAL,
					u_AlbedoTexture: F.PERIOD_MATERIAL,
					u_NormalTexture: F.PERIOD_MATERIAL,
					u_ParallaxTexture: F.PERIOD_MATERIAL,
					u_SpecularTexture: F.PERIOD_MATERIAL,
					u_OcclusionTexture: F.PERIOD_MATERIAL,
					u_EmissionTexture: F.PERIOD_MATERIAL,
					u_smoothness: F.PERIOD_MATERIAL,
					u_smoothnessScale: F.PERIOD_MATERIAL,
					u_occlusionStrength: F.PERIOD_MATERIAL,
					u_normalScale: F.PERIOD_MATERIAL,
					u_parallaxScale: F.PERIOD_MATERIAL,
					u_TilingOffset: F.PERIOD_MATERIAL,
					u_ReflectTexture: F.PERIOD_SCENE,
					u_ReflectIntensity: F.PERIOD_SCENE,
					u_AmbientColor: F.PERIOD_SCENE,
					u_shadowMap1: F.PERIOD_SCENE,
					u_shadowMap2: F.PERIOD_SCENE,
					u_shadowMap3: F.PERIOD_SCENE,
					u_shadowPSSMDistance: F.PERIOD_SCENE,
					u_lightShadowVP: F.PERIOD_SCENE,
					u_shadowPCFoffset: F.PERIOD_SCENE,
					u_FogStart: F.PERIOD_SCENE,
					u_FogRange: F.PERIOD_SCENE,
					u_FogColor: F.PERIOD_SCENE,
					u_DirationLightCount: F.PERIOD_SCENE,
					u_LightBuffer: F.PERIOD_SCENE,
					u_LightClusterBuffer: F.PERIOD_SCENE,
					"u_DirectionLight.direction": F.PERIOD_SCENE,
					"u_DirectionLight.color": F.PERIOD_SCENE,
					"u_PointLight.position": F.PERIOD_SCENE,
					"u_PointLight.range": F.PERIOD_SCENE,
					"u_PointLight.color": F.PERIOD_SCENE,
					"u_SpotLight.position": F.PERIOD_SCENE,
					"u_SpotLight.direction": F.PERIOD_SCENE,
					"u_SpotLight.range": F.PERIOD_SCENE,
					"u_SpotLight.spot": F.PERIOD_SCENE,
					"u_SpotLight.color": F.PERIOD_SCENE
				}, r = {
					s_Cull: F.RENDER_STATE_CULL,
					s_Blend: F.RENDER_STATE_BLEND,
					s_BlendSrc: F.RENDER_STATE_BLEND_SRC,
					s_BlendDst: F.RENDER_STATE_BLEND_DST,
					s_DepthTest: F.RENDER_STATE_DEPTH_TEST,
					s_DepthWrite: F.RENDER_STATE_DEPTH_WRITE
				}, i = F.add("PBRSpecular", null, null, !0), a = new bi(e, t), i.addSubShader(a), a.addShaderPass(
					oi, si, r), e = {
					a_Position: fe.MESH_POSITION0,
					a_Color: fe.MESH_COLOR0,
					a_Texcoord0: fe.MESH_TEXTURECOORDINATE0,
					a_BoneWeights: fe.MESH_BLENDWEIGHT0,
					a_BoneIndices: fe.MESH_BLENDINDICES0,
					a_MvpMatrix: fe.MESH_MVPMATRIX_ROW0
				}, t = {
					u_Bones: F.PERIOD_CUSTOM,
					u_AlbedoTexture: F.PERIOD_MATERIAL,
					u_AlbedoColor: F.PERIOD_MATERIAL,
					u_TilingOffset: F.PERIOD_MATERIAL,
					u_AlphaTestValue: F.PERIOD_MATERIAL,
					u_MvpMatrix: F.PERIOD_SPRITE,
					u_FogStart: F.PERIOD_SCENE,
					u_FogRange: F.PERIOD_SCENE,
					u_FogColor: F.PERIOD_SCENE
				}, r = {
					s_Cull: F.RENDER_STATE_CULL,
					s_Blend: F.RENDER_STATE_BLEND,
					s_BlendSrc: F.RENDER_STATE_BLEND_SRC,
					s_BlendDst: F.RENDER_STATE_BLEND_DST,
					s_DepthTest: F.RENDER_STATE_DEPTH_TEST,
					s_DepthWrite: F.RENDER_STATE_DEPTH_WRITE
				}, i = F.add("Unlit", null, null, !0), a = new bi(e, t), i.addSubShader(a), a.addShaderPass(yi, Ci,
					r), e = {
					a_Position: fe.MESH_POSITION0,
					a_Texcoord0: fe.MESH_TEXTURECOORDINATE0,
					a_BoneWeights: fe.MESH_BLENDWEIGHT0,
					a_BoneIndices: fe.MESH_BLENDINDICES0,
					a_MvpMatrix: fe.MESH_MVPMATRIX_ROW0
				}, t = {
					u_Bones: F.PERIOD_CUSTOM,
					u_AlbedoTexture: F.PERIOD_MATERIAL,
					u_AlbedoColor: F.PERIOD_MATERIAL,
					u_TilingOffset: F.PERIOD_MATERIAL,
					u_AlphaTestValue: F.PERIOD_MATERIAL,
					u_MvpMatrix: F.PERIOD_SPRITE,
					u_FogStart: F.PERIOD_SCENE,
					u_FogRange: F.PERIOD_SCENE,
					u_FogColor: F.PERIOD_SCENE
				}, r = {
					s_Cull: F.RENDER_STATE_CULL,
					s_Blend: F.RENDER_STATE_BLEND,
					s_BlendSrc: F.RENDER_STATE_BLEND_SRC,
					s_BlendDst: F.RENDER_STATE_BLEND_DST,
					s_DepthTest: F.RENDER_STATE_DEPTH_TEST,
					s_DepthWrite: F.RENDER_STATE_DEPTH_WRITE
				}, i = F.add("Effect", null, null, !0), a = new bi(e, t), i.addSubShader(a), a.addShaderPass(Yr, Xr,
					r), e = {
					a_CornerTextureCoordinate: st.PARTICLE_CORNERTEXTURECOORDINATE0,
					a_MeshPosition: st.PARTICLE_POSITION0,
					a_MeshColor: st.PARTICLE_COLOR0,
					a_MeshTextureCoordinate: st.PARTICLE_TEXTURECOORDINATE0,
					a_ShapePositionStartLifeTime: st.PARTICLE_SHAPEPOSITIONSTARTLIFETIME,
					a_DirectionTime: st.PARTICLE_DIRECTIONTIME,
					a_StartColor: st.PARTICLE_STARTCOLOR0,
					a_EndColor: st.PARTICLE_ENDCOLOR0,
					a_StartSize: st.PARTICLE_STARTSIZE,
					a_StartRotation0: st.PARTICLE_STARTROTATION,
					a_StartSpeed: st.PARTICLE_STARTSPEED,
					a_Random0: st.PARTICLE_RANDOM0,
					a_Random1: st.PARTICLE_RANDOM1,
					a_SimulationWorldPostion: st.PARTICLE_SIMULATIONWORLDPOSTION,
					a_SimulationWorldRotation: st.PARTICLE_SIMULATIONWORLDROTATION
				}, t = {
					u_Tintcolor: F.PERIOD_MATERIAL,
					u_TilingOffset: F.PERIOD_MATERIAL,
					u_texture: F.PERIOD_MATERIAL,
					u_WorldPosition: F.PERIOD_SPRITE,
					u_WorldRotation: F.PERIOD_SPRITE,
					u_PositionScale: F.PERIOD_SPRITE,
					u_SizeScale: F.PERIOD_SPRITE,
					u_ScalingMode: F.PERIOD_SPRITE,
					u_Gravity: F.PERIOD_SPRITE,
					u_ThreeDStartRotation: F.PERIOD_SPRITE,
					u_StretchedBillboardLengthScale: F.PERIOD_SPRITE,
					u_StretchedBillboardSpeedScale: F.PERIOD_SPRITE,
					u_SimulationSpace: F.PERIOD_SPRITE,
					u_CurrentTime: F.PERIOD_SPRITE,
					u_ColorOverLifeGradientAlphas: F.PERIOD_SPRITE,
					u_ColorOverLifeGradientColors: F.PERIOD_SPRITE,
					u_MaxColorOverLifeGradientAlphas: F.PERIOD_SPRITE,
					u_MaxColorOverLifeGradientColors: F.PERIOD_SPRITE,
					u_VOLVelocityConst: F.PERIOD_SPRITE,
					u_VOLVelocityGradientX: F.PERIOD_SPRITE,
					u_VOLVelocityGradientY: F.PERIOD_SPRITE,
					u_VOLVelocityGradientZ: F.PERIOD_SPRITE,
					u_VOLVelocityConstMax: F.PERIOD_SPRITE,
					u_VOLVelocityGradientMaxX: F.PERIOD_SPRITE,
					u_VOLVelocityGradientMaxY: F.PERIOD_SPRITE,
					u_VOLVelocityGradientMaxZ: F.PERIOD_SPRITE,
					u_VOLSpaceType: F.PERIOD_SPRITE,
					u_SOLSizeGradient: F.PERIOD_SPRITE,
					u_SOLSizeGradientX: F.PERIOD_SPRITE,
					u_SOLSizeGradientY: F.PERIOD_SPRITE,
					u_SOLSizeGradientZ: F.PERIOD_SPRITE,
					u_SOLSizeGradientMax: F.PERIOD_SPRITE,
					u_SOLSizeGradientMaxX: F.PERIOD_SPRITE,
					u_SOLSizeGradientMaxY: F.PERIOD_SPRITE,
					u_SOLSizeGradientMaxZ: F.PERIOD_SPRITE,
					u_ROLAngularVelocityConst: F.PERIOD_SPRITE,
					u_ROLAngularVelocityConstSeprarate: F.PERIOD_SPRITE,
					u_ROLAngularVelocityGradient: F.PERIOD_SPRITE,
					u_ROLAngularVelocityGradientX: F.PERIOD_SPRITE,
					u_ROLAngularVelocityGradientY: F.PERIOD_SPRITE,
					u_ROLAngularVelocityGradientZ: F.PERIOD_SPRITE,
					u_ROLAngularVelocityConstMax: F.PERIOD_SPRITE,
					u_ROLAngularVelocityConstMaxSeprarate: F.PERIOD_SPRITE,
					u_ROLAngularVelocityGradientMax: F.PERIOD_SPRITE,
					u_ROLAngularVelocityGradientMaxX: F.PERIOD_SPRITE,
					u_ROLAngularVelocityGradientMaxY: F.PERIOD_SPRITE,
					u_ROLAngularVelocityGradientMaxZ: F.PERIOD_SPRITE,
					u_ROLAngularVelocityGradientMaxW: F.PERIOD_SPRITE,
					u_TSACycles: F.PERIOD_SPRITE,
					u_TSASubUVLength: F.PERIOD_SPRITE,
					u_TSAGradientUVs: F.PERIOD_SPRITE,
					u_TSAMaxGradientUVs: F.PERIOD_SPRITE,
					u_CameraPos: F.PERIOD_CAMERA,
					u_CameraDirection: F.PERIOD_CAMERA,
					u_CameraUp: F.PERIOD_CAMERA,
					u_View: F.PERIOD_CAMERA,
					u_Projection: F.PERIOD_CAMERA,
					u_FogStart: F.PERIOD_SCENE,
					u_FogRange: F.PERIOD_SCENE,
					u_FogColor: F.PERIOD_SCENE
				}, r = {
					s_Cull: F.RENDER_STATE_CULL,
					s_Blend: F.RENDER_STATE_BLEND,
					s_BlendSrc: F.RENDER_STATE_BLEND_SRC,
					s_BlendDst: F.RENDER_STATE_BLEND_DST,
					s_DepthTest: F.RENDER_STATE_DEPTH_TEST,
					s_DepthWrite: F.RENDER_STATE_DEPTH_WRITE
				}, i = F.add("PARTICLESHURIKEN"), a = new bi(e, t), i.addSubShader(a), a.addShaderPass(ti, ei, r),
				e = {
					a_Position: fe.MESH_POSITION0
				}, t = {
					u_TintColor: F.PERIOD_MATERIAL,
					u_Exposure: F.PERIOD_MATERIAL,
					u_Rotation: F.PERIOD_MATERIAL,
					u_CubeTexture: F.PERIOD_MATERIAL,
					u_ViewProjection: F.PERIOD_CAMERA
				}, i = F.add("SkyBox"), a = new bi(e, t), i.addSubShader(a), a.addShaderPass(xi, Ii), e = {
					a_Position: fe.MESH_POSITION0
				}, t = {
					u_SunSize: F.PERIOD_MATERIAL,
					u_SunSizeConvergence: F.PERIOD_MATERIAL,
					u_AtmosphereThickness: F.PERIOD_MATERIAL,
					u_SkyTint: F.PERIOD_MATERIAL,
					u_GroundTint: F.PERIOD_MATERIAL,
					u_Exposure: F.PERIOD_MATERIAL,
					u_ViewProjection: F.PERIOD_CAMERA,
					"u_SunLight.direction": F.PERIOD_SCENE,
					"u_SunLight.color": F.PERIOD_SCENE
				}, i = F.add("SkyBoxProcedural"), a = new bi(e, t), i.addSubShader(a), a.addShaderPass(Di, Ai),
				e = {
					a_Position: fe.MESH_POSITION0,
					a_Normal: fe.MESH_NORMAL0,
					a_Texcoord0: fe.MESH_TEXTURECOORDINATE0
				}, t = {
					u_MvpMatrix: F.PERIOD_SPRITE,
					u_WorldMat: F.PERIOD_SPRITE,
					u_CameraPos: F.PERIOD_CAMERA,
					u_LightmapScaleOffset: F.PERIOD_SPRITE,
					u_LightMap: F.PERIOD_SPRITE,
					u_SplatAlphaTexture: F.PERIOD_MATERIAL,
					u_DiffuseTexture1: F.PERIOD_MATERIAL,
					u_DiffuseTexture2: F.PERIOD_MATERIAL,
					u_DiffuseTexture3: F.PERIOD_MATERIAL,
					u_DiffuseTexture4: F.PERIOD_MATERIAL,
					u_DiffuseTexture5: F.PERIOD_MATERIAL,
					u_DiffuseScaleOffset1: F.PERIOD_MATERIAL,
					u_DiffuseScaleOffset2: F.PERIOD_MATERIAL,
					u_DiffuseScaleOffset3: F.PERIOD_MATERIAL,
					u_DiffuseScaleOffset4: F.PERIOD_MATERIAL,
					u_DiffuseScaleOffset5: F.PERIOD_MATERIAL,
					u_FogStart: F.PERIOD_SCENE,
					u_FogRange: F.PERIOD_SCENE,
					u_FogColor: F.PERIOD_SCENE,
					"u_DirectionLight.Direction": F.PERIOD_SCENE,
					"u_DirectionLight.Color": F.PERIOD_SCENE,
					"u_PointLight.Position": F.PERIOD_SCENE,
					"u_PointLight.Range": F.PERIOD_SCENE,
					"u_PointLight.Attenuation": F.PERIOD_SCENE,
					"u_PointLight.Color": F.PERIOD_SCENE,
					"u_SpotLight.Position": F.PERIOD_SCENE,
					"u_SpotLight.Direction": F.PERIOD_SCENE,
					"u_SpotLight.Range": F.PERIOD_SCENE,
					"u_SpotLight.Spot": F.PERIOD_SCENE,
					"u_SpotLight.Color": F.PERIOD_SCENE,
					u_AmbientColor: F.PERIOD_SCENE,
					u_shadowMap1: F.PERIOD_SCENE,
					u_shadowMap2: F.PERIOD_SCENE,
					u_shadowMap3: F.PERIOD_SCENE,
					u_shadowPSSMDistance: F.PERIOD_SCENE,
					u_lightShadowVP: F.PERIOD_SCENE,
					u_shadowPCFoffset: F.PERIOD_SCENE
				}, r = {
					s_Cull: F.RENDER_STATE_CULL,
					s_Blend: F.RENDER_STATE_BLEND,
					s_BlendSrc: F.RENDER_STATE_BLEND_SRC,
					s_BlendDst: F.RENDER_STATE_BLEND_DST,
					s_DepthTest: F.RENDER_STATE_DEPTH_TEST,
					s_DepthWrite: F.RENDER_STATE_DEPTH_WRITE
				}, i = F.add("ExtendTerrain"), a = new bi(e, t), i.addSubShader(a), a.addShaderPass(jr, Zr, r),
				e = {
					a_Position: Ar.TRAIL_POSITION0,
					a_OffsetVector: Ar.TRAIL_OFFSETVECTOR,
					a_Texcoord0X: Ar.TRAIL_TEXTURECOORDINATE0X,
					a_Texcoord0Y: Ar.TRAIL_TEXTURECOORDINATE0Y,
					a_BirthTime: Ar.TRAIL_TIME0,
					a_Color: Ar.TRAIL_COLOR
				}, t = {
					u_MvpMatrix: F.PERIOD_SPRITE,
					u_View: F.PERIOD_CAMERA,
					u_Projection: F.PERIOD_CAMERA,
					u_TilingOffset: F.PERIOD_MATERIAL,
					u_MainTexture: F.PERIOD_MATERIAL,
					u_MainColor: F.PERIOD_MATERIAL,
					u_CurTime: F.PERIOD_SPRITE,
					u_LifeTime: F.PERIOD_SPRITE,
					u_WidthCurve: F.PERIOD_SPRITE,
					u_WidthCurveKeyLength: F.PERIOD_SPRITE,
					u_GradientColorkey: F.PERIOD_SPRITE,
					u_GradientAlphakey: F.PERIOD_SPRITE
				}, r = {
					s_Cull: F.RENDER_STATE_CULL,
					s_Blend: F.RENDER_STATE_BLEND,
					s_BlendSrc: F.RENDER_STATE_BLEND_SRC,
					s_BlendDst: F.RENDER_STATE_BLEND_DST,
					s_DepthTest: F.RENDER_STATE_DEPTH_TEST,
					s_DepthWrite: F.RENDER_STATE_DEPTH_WRITE
				}, i = F.add("Trail"), a = new bi(e, t), i.addSubShader(a), a.addShaderPass(Li, Mi, r), e = {
					a_Position: fe.MESH_POSITION0,
					a_Normal: fe.MESH_NORMAL0,
					a_Tangent0: fe.MESH_TANGENT0
				}, t = {
					u_MvpMatrix: F.PERIOD_SPRITE,
					u_WorldMat: F.PERIOD_SPRITE,
					u_CameraPos: F.PERIOD_CAMERA,
					u_Time: F.PERIOD_SCENE,
					u_MainTexture: F.PERIOD_MATERIAL,
					u_NormalTexture: F.PERIOD_MATERIAL,
					u_HorizonColor: F.PERIOD_MATERIAL,
					u_WaveScale: F.PERIOD_MATERIAL,
					u_WaveSpeed: F.PERIOD_MATERIAL
				}, i = F.add("WaterPrimary"), a = new bi(e, t), i.addSubShader(a), a.addShaderPass(Ni, Oi), e = {
					a_PositionTexcoord: fe.MESH_POSITION0
				}, t = {
					u_MainTex: F.PERIOD_MATERIAL
				}, i = F.add("BlitScreen"), a = new bi(e, t), i.addSubShader(a);
			var n = a.addShaderPass(kr, Wr),
				s = n.renderState;
			s.depthTest = X.DEPTHTEST_ALWAYS, s.depthWrite = !1, s.cull = X.CULL_NONE, s.blend = X.BLEND_DISABLE,
				e = {
					a_PositionTexcoord: fe.MESH_POSITION0
				}, t = {
					u_MainTex: F.PERIOD_MATERIAL,
					u_BloomTex: F.PERIOD_MATERIAL,
					u_AutoExposureTex: F.PERIOD_MATERIAL,
					u_MainTex_TexelSize: F.PERIOD_MATERIAL,
					u_SampleScale: F.PERIOD_MATERIAL,
					u_Threshold: F.PERIOD_MATERIAL,
					u_Params: F.PERIOD_MATERIAL
				}, i = F.add("PostProcessBloom"), a = new bi(e, t), i.addSubShader(a), (s = (n = a.addShaderPass(hi,
					ui)).renderState).depthTest = X.DEPTHTEST_ALWAYS, s.depthWrite = !1, s.cull = X.CULL_NONE, s
				.blend = X.BLEND_DISABLE, a = new bi(e, t), i.addSubShader(a), (s = (n = a.addShaderPass(hi, fi))
					.renderState).depthTest = X.DEPTHTEST_ALWAYS, s.depthWrite = !1, s.cull = X.CULL_NONE, s.blend =
				X.BLEND_DISABLE, a = new bi(e, t), i.addSubShader(a), (s = (n = a.addShaderPass(hi, ci))
					.renderState).depthTest = X.DEPTHTEST_ALWAYS, s.depthWrite = !1, s.cull = X.CULL_NONE, s.blend =
				X.BLEND_DISABLE, a = new bi(e, t), i.addSubShader(a), (s = (n = a.addShaderPass(hi, di))
					.renderState).depthTest = X.DEPTHTEST_ALWAYS, s.depthWrite = !1, s.cull = X.CULL_NONE, s.blend =
				X.BLEND_DISABLE, a = new bi(e, t), i.addSubShader(a), (s = (n = a.addShaderPass(hi, Ei))
					.renderState).depthTest = X.DEPTHTEST_ALWAYS, s.depthWrite = !1, s.cull = X.CULL_NONE, s.blend =
				X.BLEND_DISABLE, a = new bi(e, t), i.addSubShader(a), (s = (n = a.addShaderPass(hi, mi))
					.renderState).depthTest = X.DEPTHTEST_ALWAYS, s.depthWrite = !1, s.cull = X.CULL_NONE, s.blend =
				X.BLEND_DISABLE, e = {
					a_PositionTexcoord: fe.MESH_POSITION0
				}, t = {
					u_MainTex: F.PERIOD_MATERIAL,
					u_BloomTex: F.PERIOD_MATERIAL,
					u_AutoExposureTex: F.PERIOD_MATERIAL,
					u_Bloom_DirtTileOffset: F.PERIOD_MATERIAL,
					u_Bloom_DirtTex: F.PERIOD_MATERIAL,
					u_BloomTex_TexelSize: F.PERIOD_MATERIAL,
					u_Bloom_Settings: F.PERIOD_MATERIAL,
					u_Bloom_Color: F.PERIOD_MATERIAL
				}, i = F.add("PostProcessComposite"), a = new bi(e, t), i.addSubShader(a), (s = (n = a
					.addShaderPass(gi, pi)).renderState).depthTest = X.DEPTHTEST_ALWAYS, s.depthWrite = !1, s.cull =
				X.CULL_NONE, s.blend = X.BLEND_DISABLE
		}
	}
	class Bi {
		constructor() {
			var e;
			for (this._spiltDistance = [], this._currentPSSM = -1, this._shadowMapCount = 3, this._maxDistance =
				200, this._ratioOfDistance = 1 / this._shadowMapCount, this._globalParallelLightDir = new n(0, -1,
					0), this._statesDirty = !0, this._shadowMapTextureSize = 1024, this._scene = null, this
				._boundingSphere = new Array(Bi.MAX_PSSM_COUNT + 1), this._boundingBox = new Array(Bi
					.MAX_PSSM_COUNT + 1), this._frustumPos = new Array(4 * (Bi.MAX_PSSM_COUNT + 1)), this
				._uniformDistance = new Array(Bi.MAX_PSSM_COUNT + 1), this._logDistance = new Array(Bi
					.MAX_PSSM_COUNT + 1), this._dimension = new Array(Bi.MAX_PSSM_COUNT + 1), this._PCFType = 0,
				this._tempLookAt3 = new n, this._tempLookAt4 = new a, this._tempValue = new a, this._tempPos =
				new n, this._tempLightUp = new n, this._tempMin = new a, this._tempMax = new a, this._tempMatrix44 =
				new p, this._splitFrustumCulling = new Re(p.DEFAULT), this._tempScaleMatrix44 = new p, this
				._shadowPCFOffset = new i(1 / 1024, 1 / 1024), this._shaderValueDistance = new a, this
				._shaderValueLightVP = null, this.cameras = [], this._shaderValueVPs = [], e = 0; e < this
				._spiltDistance.length; e++) this._spiltDistance[e] = 0;
			for (e = 0; e < this._dimension.length; e++) this._dimension[e] = new i;
			for (e = 0; e < this._frustumPos.length; e++) this._frustumPos[e] = new n;
			for (e = 0; e < this._boundingBox.length; e++) this._boundingBox[e] = new Ye(new n, new n);
			for (e = 0; e < this._boundingSphere.length; e++) this._boundingSphere[e] = new _t(new n, 0);
			p.createScaling(new n(.5, .5, 1), this._tempScaleMatrix44), this._tempScaleMatrix44.elements[12] = .5,
				this._tempScaleMatrix44.elements[13] = .5
		}
		setInfo(e, t, r, i, a, n) {
			a > Bi.MAX_PSSM_COUNT && (this._shadowMapCount = Bi.MAX_PSSM_COUNT), this._scene = e, this
				._maxDistance = t, this.shadowMapCount = a, this._globalParallelLightDir = r, this
				._ratioOfDistance = 1 / this._shadowMapCount;
			for (var s = 0; s < this._spiltDistance.length; s++) this._spiltDistance[s] = 0;
			this._shadowMapTextureSize = i, this._shadowPCFOffset.x = 1 / this._shadowMapTextureSize, this
				._shadowPCFOffset.y = 1 / this._shadowMapTextureSize, this.setPCFType(n), this._statesDirty = !0
		}
		setPCFType(e) {
			this._PCFType = e;
			var t = this._scene._shaderValues;
			switch (this._PCFType) {
				case 0:
					t.addDefine(k.SHADERDEFINE_SHADOW_PCF_NO), t.removeDefine(k.SHADERDEFINE_SHADOW_PCF1), t
						.removeDefine(k.SHADERDEFINE_SHADOW_PCF2), t.removeDefine(k.SHADERDEFINE_SHADOW_PCF3);
					break;
				case 1:
					t.addDefine(k.SHADERDEFINE_SHADOW_PCF1), t.removeDefine(k.SHADERDEFINE_SHADOW_PCF_NO), t
						.removeDefine(k.SHADERDEFINE_SHADOW_PCF2), t.removeDefine(k.SHADERDEFINE_SHADOW_PCF3);
					break;
				case 2:
					t.addDefine(k.SHADERDEFINE_SHADOW_PCF2), t.removeDefine(k.SHADERDEFINE_SHADOW_PCF_NO), t
						.removeDefine(k.SHADERDEFINE_SHADOW_PCF1), t.removeDefine(k.SHADERDEFINE_SHADOW_PCF3);
					break;
				case 3:
					t.addDefine(k.SHADERDEFINE_SHADOW_PCF3), t.removeDefine(k.SHADERDEFINE_SHADOW_PCF_NO), t
						.removeDefine(k.SHADERDEFINE_SHADOW_PCF1), t.removeDefine(k.SHADERDEFINE_SHADOW_PCF2)
			}
		}
		getPCFType() {
			return this._PCFType
		}
		setFarDistance(e) {
			this._maxDistance != e && (this._maxDistance = e, this._statesDirty = !0)
		}
		getFarDistance() {
			return this._maxDistance
		}
		set shadowMapCount(e) {
			if (e = (e = e > 0 ? e : 1) <= Bi.MAX_PSSM_COUNT ? e : Bi.MAX_PSSM_COUNT, this._shadowMapCount != e) {
				this._shadowMapCount = e, this._ratioOfDistance = 1 / this._shadowMapCount, this._statesDirty = !0,
					this._shaderValueLightVP = new Float32Array(16 * e), this._shaderValueVPs.length = e;
				for (var t = 0; t < e; t++) this._shaderValueVPs[t] = new Float32Array(this._shaderValueLightVP
					.buffer, 64 * t)
			}
		}
		get shadowMapCount() {
			return this._shadowMapCount
		}
		_beginSampler(e, t) {
			if (e < 0 || e > this._shadowMapCount) throw new Error(
				"ParallelSplitShadowMap: beginSample invalid index");
			this._currentPSSM = e, this._update(t)
		}
		endSampler(e) {
			this._currentPSSM = -1
		}
		_calcAllLightCameraInfo(e) {
			if (1 === this._shadowMapCount) this._beginSampler(0, e), this.endSampler(e);
			else
				for (var t = 0, r = this._shadowMapCount + 1; t < r; t++) this._beginSampler(t, e), this.endSampler(
					e)
		}
		_recalculate(e, t, r) {
			this._calcSplitDistance(e), this._calcBoundingBox(t, r), this._rebuildRenderInfo()
		}
		_update(e) {
			var t = e.nearPlane,
				r = e.fieldOfView,
				i = e.aspectRatio;
			(this._statesDirty || this.lastNearPlane !== t || this.lastFieldOfView !== r || this.lastAspectRatio !==
				i) && (this._recalculate(t, r, i), this._uploadShaderValue(), this._statesDirty = !1, this
				.lastNearPlane = t, this.lastFieldOfView = r, this.lastAspectRatio = i), this._calcLightViewProject(
				e)
		}
		_uploadShaderValue() {
			var e = this._scene._shaderValues;
			switch (this._shadowMapCount) {
				case 1:
					e.addDefine(k.SHADERDEFINE_SHADOW_PSSM1), e.removeDefine(k.SHADERDEFINE_SHADOW_PSSM2), e
						.removeDefine(k.SHADERDEFINE_SHADOW_PSSM3);
					break;
				case 2:
					e.addDefine(k.SHADERDEFINE_SHADOW_PSSM2), e.removeDefine(k.SHADERDEFINE_SHADOW_PSSM1), e
						.removeDefine(k.SHADERDEFINE_SHADOW_PSSM3);
					break;
				case 3:
					e.addDefine(k.SHADERDEFINE_SHADOW_PSSM3), e.removeDefine(k.SHADERDEFINE_SHADOW_PSSM1), e
						.removeDefine(k.SHADERDEFINE_SHADOW_PSSM2)
			}
			switch (e.setVector(o.Scene3D.SHADOWDISTANCE, this._shaderValueDistance), e.setBuffer(o.Scene3D
				.SHADOWLIGHTVIEWPROJECT, this._shaderValueLightVP), e.setVector2(o.Scene3D.SHADOWMAPPCFOFFSET,
				this._shadowPCFOffset), this._shadowMapCount) {
				case 3:
					e.setTexture(o.Scene3D.SHADOWMAPTEXTURE1, this.cameras[1].renderTarget), e.setTexture(o.Scene3D
						.SHADOWMAPTEXTURE2, this.cameras[2].renderTarget), e.setTexture(o.Scene3D
						.SHADOWMAPTEXTURE3, this.cameras[3].renderTarget);
					break;
				case 2:
					e.setTexture(o.Scene3D.SHADOWMAPTEXTURE1, this.cameras[1].renderTarget), e.setTexture(o.Scene3D
						.SHADOWMAPTEXTURE2, this.cameras[2].renderTarget);
					break;
				case 1:
					e.setTexture(o.Scene3D.SHADOWMAPTEXTURE1, this.cameras[1].renderTarget)
			}
		}
		_calcSplitDistance(e) {
			var t, r = this._maxDistance,
				i = 1 / this._shadowMapCount;
			for (t = 0; t <= this._shadowMapCount; t++) this._uniformDistance[t] = e + (r - e) * t * i;
			var a = r / e;
			for (t = 0; t <= this._shadowMapCount; t++) {
				var n = Math.pow(a, t * i);
				this._logDistance[t] = e * n
			}
			for (t = 0; t <= this._shadowMapCount; t++) this._spiltDistance[t] = this._uniformDistance[t] * this
				._ratioOfDistance + this._logDistance[t] * (1 - this._ratioOfDistance);
			this._shaderValueDistance.x = null != this._spiltDistance[1] && this._spiltDistance[1], this
				._shaderValueDistance.y = null != this._spiltDistance[2] && this._spiltDistance[2], this
				._shaderValueDistance.z = null != this._spiltDistance[3] && this._spiltDistance[3], this
				._shaderValueDistance.w = null != this._spiltDistance[4] && this._spiltDistance[4]
		}
		_calcBoundingBox(e, t) {
			var r, i, a, n, s, o, l, _, h = 3.1415926 * e / 180,
				c = Math.tan(h / 2);
			for (n = 0; n <= this._shadowMapCount; n++) {
				i = (r = (a = this._spiltDistance[n]) * c) * t;
				var d = this._frustumPos[4 * n + 0];
				d.x = -i, d.y = -r, d.z = -a, (d = this._frustumPos[4 * n + 1]).x = i, d.y = -r, d.z = -a, (d = this
						._frustumPos[4 * n + 2]).x = -i, d.y = r, d.z = -a, (d = this._frustumPos[4 * n + 3]).x = i,
					d.y = r, d.z = -a, (d = this._dimension[n]).x = i, d.y = r
			}
			for (n = 1; n <= this._shadowMapCount; n++) s = this._dimension[n], (o = this._boundingBox[n].min).x = -
				s.x, o.y = -s.y, o.z = -this._spiltDistance[n], (l = this._boundingBox[n].max).x = s.x, l.y = s.y, l
				.z = -this._spiltDistance[n - 1], (_ = this._boundingSphere[n].center).x = .5 * (o.x + l.x), _.y =
				.5 * (o.y + l.y), _.z = .5 * (o.z + l.z), this._boundingSphere[n].radius = .5 * Math.sqrt(Math.pow(l
					.x - o.x, 2) + Math.pow(l.y - o.y, 2) + Math.pow(l.z - o.z, 2));
			o = this._boundingBox[0].min, s = this._dimension[this._shadowMapCount], o.x = -s.x, o.y = -s.y, o.z = -
				this._spiltDistance[this._shadowMapCount], (l = this._boundingBox[0].max).x = s.x, l.y = s.y, l
				.z = -this._spiltDistance[0], (_ = this._boundingSphere[0].center).x = .5 * (o.x + l.x), _.y = .5 *
				(o.y + l.y), _.z = .5 * (o.z + l.z), this._boundingSphere[0].radius = .5 * Math.sqrt(Math.pow(l.x -
					o.x, 2) + Math.pow(l.y - o.y, 2) + Math.pow(l.z - o.z, 2))
		}
		calcSplitFrustum(e) {
			this._currentPSSM > 0 ? p.createPerspective(3.1416 * e.fieldOfView / 180, e.aspectRatio, this
					._spiltDistance[this._currentPSSM - 1], this._spiltDistance[this._currentPSSM], this
					._tempMatrix44) : p.createPerspective(3.1416 * e.fieldOfView / 180, e.aspectRatio, this
					._spiltDistance[0], this._spiltDistance[this._shadowMapCount], this._tempMatrix44), p.multiply(
					this._tempMatrix44, e.viewMatrix, this._tempMatrix44), this._splitFrustumCulling.matrix = this
				._tempMatrix44
		}
		_rebuildRenderInfo() {
			var e, r = this._shadowMapCount + 1;
			for (this.cameras.length = r, e = 0; e < r; e++) {
				if (!this.cameras[e]) {
					var i = new Ue;
					i.name = "lightCamera" + e, i.clearColor = new a(1, 1, 1, 1), this.cameras[e] = i
				}
				var n = this.cameras[e].renderTarget;
				null != n && n.width == this._shadowMapTextureSize && n.height == this._shadowMapTextureSize || (
					n && n.destroy(), (n = new w(this._shadowMapTextureSize, this._shadowMapTextureSize, t
						.RenderTextureFormat.R8G8B8A8, t.RenderTextureDepthFormat.DEPTH_16)).filterMode = t
					.BaseTexture.FILTERMODE_POINT, this.cameras[e].renderTarget = n)
			}
		}
		_calcLightViewProject(e) {
			var t = this._boundingSphere[this._currentPSSM],
				r = e.transform.worldMatrix;
			t.radius;
			t.center.cloneTo(this._tempLookAt3), n.transformV3ToV4(this._tempLookAt3, r, this._tempLookAt4);
			var i = this._tempLookAt3,
				s = this._tempLookAt4;
			i.x = s.x, i.y = s.y, i.z = s.z;
			var l = this._tempLightUp;
			e.transform.worldMatrix.getForward(Bi._tempVector30);
			var _ = Bi._tempVector30;
			l.x = _.x, l.y = 1, l.z = _.z, n.normalize(this._tempLightUp, this._tempLightUp), n.scale(this
				._globalParallelLightDir, 4 * t.radius, this._tempPos), n.subtract(this._tempLookAt3, this
				._tempPos, this._tempPos);
			var h = this.cameras[this._currentPSSM];
			h.transform.position = this._tempPos, h.transform.lookAt(this._tempLookAt3, this._tempLightUp, !1);
			var c = this._tempMax,
				d = this._tempMin;
			c.x = c.y = c.z = -1e5, c.w = 1, d.x = d.y = d.z = 1e5, d.w = 1, p.multiply(h.viewMatrix, r, this
				._tempMatrix44);
			var u = this._tempValue,
				f = [];
			f.length = 8, this._boundingBox[this._currentPSSM].getCorners(f);
			for (var m = 0; m < 8; m++) {
				var E = f[m];
				u.x = E.x, u.y = E.y, u.z = E.z, u.w = 1, a.transformByM4x4(this._tempValue, this._tempMatrix44,
						this._tempValue), d.x = u.x < d.x ? u.x : d.x, d.y = u.y < d.y ? u.y : d.y, d.z = u.z < d
					.z ? u.z : d.z, c.x = u.x > c.x ? u.x : c.x, c.y = u.y > c.y ? u.y : c.y, c.z = u.z > c.z ? u
					.z : c.z
			}
			a.add(this._tempMax, this._tempMin, this._tempValue), u.x *= .5, u.y *= .5, u.z *= .5, u.w = 1, a
				.transformByM4x4(this._tempValue, h.transform.worldMatrix, this._tempValue);
			var T = Math.abs(-this._tempMax.z),
				g = T > this._maxDistance ? T : this._maxDistance;
			n.scale(this._globalParallelLightDir, g, this._tempPos);
			var S = this._tempPos;
			S.x = u.x - S.x, S.y = u.y - S.y, S.z = u.z - S.z, h.transform.position = this._tempPos, h.transform
				.lookAt(this._tempLookAt3, this._tempLightUp, !1), p.createOrthoOffCenter(d.x, c.x, d.y, c.y, 1, g +
					.5 * (c.z - d.z), h.projectionMatrix);
			var v = h.projectionViewMatrix;
			Bi.multiplyMatrixOutFloat32Array(this._tempScaleMatrix44, v, this._shaderValueVPs[this._currentPSSM]),
				this._scene._shaderValues.setBuffer(o.Scene3D.SHADOWLIGHTVIEWPROJECT, this._shaderValueLightVP)
		}
		static multiplyMatrixOutFloat32Array(e, t, r) {
			var i, a, n, s, o, l, _;
			for (a = e.elements, n = t.elements, i = 0; i < 4; i++) s = a[i], o = a[i + 4], l = a[i + 8], _ = a[i +
					12], r[i] = s * n[0] + o * n[1] + l * n[2] + _ * n[3], r[i + 4] = s * n[4] + o * n[5] + l * n[
				6] + _ * n[7], r[i + 8] = s * n[8] + o * n[9] + l * n[10] + _ * n[11], r[i + 12] = s * n[12] + o *
				n[13] + l * n[14] + _ * n[15]
		}
		setShadowMapTextureSize(e) {
			e !== this._shadowMapTextureSize && (this._shadowMapTextureSize = e, this._shadowPCFOffset.x = 1 / this
				._shadowMapTextureSize, this._shadowPCFOffset.y = 1 / this._shadowMapTextureSize, this
				._statesDirty = !0)
		}
		disposeAllRenderTarget() {
			for (var e = 0, t = this._shadowMapCount + 1; e < t; e++) this.cameras[e].renderTarget && (this.cameras[
				e].renderTarget.destroy(), this.cameras[e].renderTarget = null)
		}
	}
	Bi.MAX_PSSM_COUNT = 3, Bi._tempVector30 = new n;
	class Ui extends ae {
		constructor() {
			super(), this._isAlternate = !1, this._intensity = 1, this._intensityColor = new n, this.color = new n(
					1, 1, 1), this._shadow = !1, this._shadowFarPlane = 8, this._shadowMapSize = 512, this
				._shadowMapCount = 1, this._shadowMapPCFType = 0, this._lightmapBakedType = Ui
				.LIGHTMAPBAKEDTYPE_REALTIME
		}
		get intensity() {
			return this._intensity
		}
		set intensity(e) {
			this._intensity = e
		}
		get shadow() {
			return this._shadow
		}
		set shadow(e) {
			throw new Error("LightSprite: must override it.")
		}
		get shadowDistance() {
			return this._shadowFarPlane
		}
		set shadowDistance(e) {
			this._shadowFarPlane = e, this._parallelSplitShadowMap && this._parallelSplitShadowMap.setFarDistance(e)
		}
		get shadowResolution() {
			return this._shadowMapSize
		}
		set shadowResolution(e) {
			this._shadowMapSize = e, this._parallelSplitShadowMap && this._parallelSplitShadowMap
				.setShadowMapTextureSize(e)
		}
		get shadowPSSMCount() {
			return this._shadowMapCount
		}
		set shadowPSSMCount(e) {
			this._shadowMapCount = e, this._parallelSplitShadowMap && (this._parallelSplitShadowMap.shadowMapCount =
				e)
		}
		get shadowPCFType() {
			return this._shadowMapPCFType
		}
		set shadowPCFType(e) {
			this._shadowMapPCFType = e, this._parallelSplitShadowMap && this._parallelSplitShadowMap.setPCFType(e)
		}
		get lightmapBakedType() {
			return this._lightmapBakedType
		}
		set lightmapBakedType(e) {
			this._lightmapBakedType !== e && (this._lightmapBakedType = e, this.activeInHierarchy && (e !== Ui
				.LIGHTMAPBAKEDTYPE_BAKED ? this._addToScene() : this._removeFromScene()))
		}
		_parse(e, t) {
			super._parse(e, t);
			var r = e.color;
			this.color.fromArray(r), this.intensity = e.intensity, this.lightmapBakedType = e.lightmapBakedType
		}
		_addToScene() {
			var e = this._scene,
				t = s._config.maxLightCount;
			e._lightCount < t ? (e._lightCount++, this._addToLightQueue(), this._isAlternate = !1) : (e
				._alternateLights.add(this), this._isAlternate = !0, console.warn(
					"LightSprite:light count has large than maxLightCount,the latest added light will be ignore."
					))
		}
		_removeFromScene() {
			var e = this._scene;
			if (this._isAlternate) e._alternateLights.remove(this);
			else if (e._lightCount--, this._removeFromLightQueue(), e._alternateLights._length > 0) {
				var t = e._alternateLights.shift();
				t._addToLightQueue(), t._isAlternate = !1, e._lightCount++
			}
		}
		_addToLightQueue() {}
		_removeFromLightQueue() {}
		_onActive() {
			super._onActive(), this.lightmapBakedType !== Ui.LIGHTMAPBAKEDTYPE_BAKED && this._addToScene()
		}
		_onInActive() {
			super._onInActive(), this.lightmapBakedType !== Ui.LIGHTMAPBAKEDTYPE_BAKED && this._removeFromScene()
		}
		_create() {
			return new Ui
		}
		get diffuseColor() {
			return console.log("LightSprite: discard property,please use color property instead."), this.color
		}
		set diffuseColor(e) {
			console.log("LightSprite: discard property,please use color property instead."), this.color = e
		}
	}
	Ui.LIGHTMAPBAKEDTYPE_REALTIME = 0, Ui.LIGHTMAPBAKEDTYPE_MIXED = 1, Ui.LIGHTMAPBAKEDTYPE_BAKED = 2;
	class Gi extends Ui {
		set shadow(e) {
			this._shadow !== e && (this._shadow = e, this.scene && this._initShadow())
		}
		constructor() {
			super(), this._direction = new n
		}
		_initShadow() {
			if (this._shadow) this._parallelSplitShadowMap = new Bi, this.scene.parallelSplitShadowMaps.push(this
				._parallelSplitShadowMap), this.transform.worldMatrix.getForward(this._direction), n.normalize(this
				._direction, this._direction), this._parallelSplitShadowMap.setInfo(this.scene, this
				._shadowFarPlane, this._direction, this._shadowMapSize, this._shadowMapCount, this._shadowMapPCFType
				);
			else {
				var e = this._scene._shaderValues,
					t = this.scene.parallelSplitShadowMaps;
				t.splice(t.indexOf(this._parallelSplitShadowMap), 1), this._parallelSplitShadowMap
					.disposeAllRenderTarget(), this._parallelSplitShadowMap = null, e.removeDefine(k
						.SHADERDEFINE_SHADOW_PSSM1), e.removeDefine(k.SHADERDEFINE_SHADOW_PSSM2), e.removeDefine(k
						.SHADERDEFINE_SHADOW_PSSM3)
			}
		}
		_addToLightQueue() {
			this._scene._directionLights.add(this)
		}
		_removeFromLightQueue() {
			this._scene._directionLights.remove(this)
		}
	}
	class zi extends Ui {
		get range() {
			return this._range
		}
		set range(e) {
			this._range = e
		}
		constructor() {
			super(), this._range = 6
		}
		_addToLightQueue() {
			this._scene._pointLights.add(this)
		}
		_removeFromLightQueue() {
			this._scene._pointLights.remove(this)
		}
		_parse(e, t) {
			super._parse(e, t), this.range = e.range
		}
	}
	class Hi extends Ui {
		get spotAngle() {
			return this._spotAngle
		}
		set spotAngle(e) {
			this._spotAngle = Math.max(Math.min(e, 179), 0)
		}
		get range() {
			return this._range
		}
		set range(e) {
			this._range = e
		}
		constructor() {
			super(), this._spotAngle = 30, this._range = 10, this._direction = new n
		}
		_addToLightQueue() {
			this._scene._spotLights.add(this)
		}
		_removeFromLightQueue() {
			this._scene._spotLights.remove(this)
		}
		_parse(e, t) {
			super._parse(e, t), this.range = e.range, this.spotAngle = e.spotAngle
		}
	}
	class Wi {
		static _createSprite3DInstance(e, t, r) {
			var i;
			switch (e.type) {
				case "Scene3D":
					i = new pr;
					break;
				case "Sprite3D":
					i = new ae;
					break;
				case "MeshSprite3D":
					i = new $e, r && e.props.isStatic && r.push(i);
					break;
				case "SkinnedMeshSprite3D":
					i = new vr;
					break;
				case "ShuriKenParticle3D":
					i = new Vt;
					break;
				case "Camera":
					i = new Ue;
					break;
				case "DirectionLight":
					i = new Gi;
					break;
				case "PointLight":
					i = new zi;
					break;
				case "SpotLight":
					i = new Hi;
					break;
				case "TrailSprite3D":
					i = new Cr;
					break;
				default:
					throw new Error("Utils3D:unidentified class type in (.lh) file.")
			}
			var a = e.child;
			if (a)
				for (var n = 0, s = a.length; n < s; n++) {
					var o = Wi._createSprite3DInstance(a[n], t, r);
					i.addChild(o)
				}
			return t[e.instanceID] = i, i
		}
		static _createComponentInstance(e, r) {
			var i = r[e.instanceID];
			i._parse(e.props, r);
			var a = e.child;
			if (a)
				for (var n = 0, s = a.length; n < s; n++) Wi._createComponentInstance(a[n], r);
			var o = e.components;
			if (o)
				for (var l = 0, _ = o.length; l < _; l++) {
					var h = o[l],
						c = t.ClassUtils.getRegClass(h.type);
					if (c) i.addComponent(c)._parse(h);
					else console.warn("Unkown component type.")
				}
		}
		static _createNodeByJson02(e, t) {
			var r = {},
				i = Wi._createSprite3DInstance(e, r, t);
			return Wi._createComponentInstance(e, r), i
		}
		static _parse(e, t = null, r = null) {
			var i, a = e.data,
				n = [];
			switch (e.version) {
				case "LAYAHIERARCHY:02":
					i = Wi._createNodeByJson02(a, n);
					break;
				default:
					i = Wi._createNodeByJson(a, n)
			}
			return se.combine(i, n), i
		}
		static _parseScene(e, t = null, r = null) {
			var i, a = e.data,
				n = [];
			switch (e.version) {
				case "LAYASCENE3D:02":
					i = Wi._createNodeByJson02(a, n);
					break;
				default:
					i = Wi._createNodeByJson(a, n)
			}
			return se.combine(null, n), i
		}
		static _createNodeByJson(e, r) {
			var i;
			switch (e.type) {
				case "Scene3D":
					i = new pr;
					break;
				case "Sprite3D":
					i = new ae;
					break;
				case "MeshSprite3D":
					i = new $e, r && e.props.isStatic && r.push(i);
					break;
				case "SkinnedMeshSprite3D":
					i = new vr;
					break;
				case "ShuriKenParticle3D":
					i = new Vt;
					break;
				case "Camera":
					i = new Ue;
					break;
				case "DirectionLight":
					i = new Gi;
					break;
				case "PointLight":
					i = new zi;
					break;
				case "SpotLight":
					i = new Hi;
					break;
				case "TrailSprite3D":
					i = new Cr;
					break;
				default:
					throw new Error("Utils3D:unidentified class type in (.lh) file.")
			}
			var a = e.child;
			if (a)
				for (var n = 0, s = a.length; n < s; n++) {
					var o = Wi._createNodeByJson(a[n], r);
					i.addChild(o)
				}
			var l = e.components;
			if (l)
				for (var _ = 0, h = l.length; _ < h; _++) {
					var c = l[_],
						d = t.ClassUtils.getRegClass(c.type);
					if (d) i.addComponent(d)._parse(c);
					else console.warn("Unkown component type.")
				}
			return i._parse(e.props, null), i
		}
	}
	class ki {
		constructor() {}
		static get enbalePhysics() {
			return Zt._enbalePhysics
		}
		static _cancelLoadByUrl(e) {
			t.Laya.loader.cancelLoadByUrl(e), ki._innerFirstLevelLoaderManager.cancelLoadByUrl(e), ki
				._innerSecondLevelLoaderManager.cancelLoadByUrl(e), ki._innerThirdLevelLoaderManager
				.cancelLoadByUrl(e), ki._innerFourthLevelLoaderManager.cancelLoadByUrl(e)
		}
		static _changeWebGLSize(e, r) {
			t.WebGL.onStageResize(e, r), P.clientWidth = e, P.clientHeight = r
		}
		static __init__(e, r, i) {
			if (t.Config.isAntialias = i.isAntialias, t.Config.isAlpha = i.isAlpha, t.Config.premultipliedAlpha = i
				.premultipliedAlpha, t.Config.isStencil = i.isStencil, t.WebGL.enable()) {
				t.RunDriver.changeWebGLSize = ki._changeWebGLSize, t.Render.is3DMode = !0, t.Laya.init(e, r), t
					.Render.supportWebGLPlusRendering || (t.LayaGL.instance = t.WebGLContext.mainContext, t.LayaGL
						.instance.createCommandEncoder = function(e = 128, r = 64, i = !1) {
							return new t.CommandEncoder(this, e, r, i)
						}), i._multiLighting = i.enbaleMultiLight && Ae.supportTextureFormat(t.TextureFormat
						.R32G32B32A32), o.Scene3D = pr, o.MeshRenderStaticBatchManager = ke, o
					.MeshRenderDynamicBatchManager = Je, o.SubMeshDynamicBatch = Ke, o.Laya3D = ki, o.Matrix4x4 = p,
					ki.enableNative3D(), ce.__init__(), fe.__init__(), ot.__init__(), lt.__init__(), sr.__init__(),
					Ar.__init__(), yr.__init__(), Ft.__init__(), me.__init__(), Ke.__init__(), Zt._physics3D =
					window.Physics3D, Zt._physics3D && (Vr.__init__(), jt.__init__(), Kt.__init__(), rr.__init__(),
						ir.__init__(), qt.__init__(), $t.__init__(), Or.__init__(), wr.__init__()), Fi.__init__(),
					Gr.__init__(), zr.__init__(), ae.__init__(), ne.__init__(), $e.__init__(), vr.__init__(), Vt
					.__init__(), Cr.__init__(), U.__init__(), pr.__init__(), ke.__init__(), W.__initDefine__(), Y
					.__initDefine__(), Q.__initDefine__(), q.__initDefine__(), J.__initDefine__(), $
					.__initDefine__(), Rr.__initDefine__(), Z.__initDefine__(), ee.__initDefine__(), rt
					.__initDefine__(), j.__initDefine__(), bt.__initDefine__(), K.__initDefine__(), we.__init__(), t
					.ClassUtils.regClass("Laya.EffectMaterial", Z), t.ClassUtils.regClass("Laya.UnlitMaterial", $),
					t.ClassUtils.regClass("Laya.BlinnPhongMaterial", Y), t.ClassUtils.regClass(
						"Laya.SkyProceduralMaterial", J), t.ClassUtils.regClass("Laya.PBRStandardMaterial", Q), t
					.ClassUtils.regClass("Laya.PBRSpecularMaterial", q), t.ClassUtils.regClass(
						"Laya.SkyBoxMaterial", K), t.ClassUtils.regClass("Laya.WaterPrimaryMaterial", ee), t
					.ClassUtils.regClass("Laya.ExtendTerrainMaterial", j), t.ClassUtils.regClass(
						"Laya.ShurikenParticleMaterial", rt), t.ClassUtils.regClass("Laya.TrailMaterial", Rr), t
					.ClassUtils.regClass("Laya.PhysicsCollider", Pr), t.ClassUtils.regClass("Laya.Rigidbody3D", wr),
					t.ClassUtils.regClass("Laya.CharacterController", Or), t.ClassUtils.regClass("Laya.Animator",
					O), t.ClassUtils.regClass("PhysicsCollider", Pr), t.ClassUtils.regClass("CharacterController",
						Or), t.ClassUtils.regClass("Animator", O), t.ClassUtils.regClass("Rigidbody3D", wr), bt
					.defaultMaterial = new bt, Y.defaultMaterial = new Y, Z.defaultMaterial = new Z, Q
					.defaultMaterial = new Q, q.defaultMaterial = new q, $.defaultMaterial = new $, rt
					.defaultMaterial = new rt, Rr.defaultMaterial = new Rr, J.defaultMaterial = new J, K
					.defaultMaterial = new K, ee.defaultMaterial = new ee, bt.defaultMaterial.lock = !0, Y
					.defaultMaterial.lock = !0, Z.defaultMaterial.lock = !0, Q.defaultMaterial.lock = !0, q
					.defaultMaterial.lock = !0, $.defaultMaterial.lock = !0, rt.defaultMaterial.lock = !0, Rr
					.defaultMaterial.lock = !0, J.defaultMaterial.lock = !0, K.defaultMaterial.lock = !0, ee
					.defaultMaterial.lock = !0, t.Texture2D.__init__(), Hr.__init__(), Ce.__init__(), or.__init__(),
					Ne.__init__(), Pe.__init__(), oe.__init__(), v.__init__();
				var a = t.LoaderManager.createMap;
				a.lh = [ki.HIERARCHY, Wi._parse], a.ls = [ki.HIERARCHY, Wi._parseScene], a.lm = [ki.MESH, Gr
					._parse], a.lmat = [ki.MATERIAL, W._parse], a.ltc = [ki.TEXTURECUBE, Hr._parse], a.jpg = [ki
						.TEXTURE2D, t.Texture2D._parse
					], a.jpeg = [ki.TEXTURE2D, t.Texture2D._parse], a.bmp = [ki.TEXTURE2D, t.Texture2D._parse], a
					.gif = [ki.TEXTURE2D, t.Texture2D._parse], a.png = [ki.TEXTURE2D, t.Texture2D._parse], a.dds = [
						ki.TEXTURE2D, t.Texture2D._parse
					], a.ktx = [ki.TEXTURE2D, t.Texture2D._parse], a.pvr = [ki.TEXTURE2D, t.Texture2D._parse], a
					.lani = [ki.ANIMATIONCLIP, D._parse], a.lav = [ki.AVATAR, H._parse];
				var n = t.Loader.parserMap;
				n[ki.HIERARCHY] = ki._loadHierarchy, n[ki.MESH] = ki._loadMesh, n[ki.MATERIAL] = ki._loadMaterial,
					n[ki.TEXTURECUBE] = ki._loadTextureCube, n[ki.TEXTURE2D] = ki._loadTexture2D, n[ki
						.ANIMATIONCLIP] = ki._loadAnimationClip, n[ki.AVATAR] = ki._loadAvatar, ki
					._innerFirstLevelLoaderManager.on(t.Event.ERROR, null, ki._eventLoadManagerError), ki
					._innerSecondLevelLoaderManager.on(t.Event.ERROR, null, ki._eventLoadManagerError), ki
					._innerThirdLevelLoaderManager.on(t.Event.ERROR, null, ki._eventLoadManagerError), ki
					._innerFourthLevelLoaderManager.on(t.Event.ERROR, null, ki._eventLoadManagerError)
			} else alert("Laya3D init error,must support webGL!")
		}
		static enableNative3D() {
			var e = B,
				r = wi,
				i = Sr,
				a = H,
				n = oe;
			if (t.Render.supportWebGLPlusRendering && (e.prototype._initData = e.prototype._initDataForNative, e
					.prototype.setBool = e.prototype.setBoolForNative, e.prototype.getBool = e.prototype
					.getBoolForNative, e.prototype.setInt = e.prototype.setIntForNative, e.prototype.getInt = e
					.prototype.getIntForNative, e.prototype.setNumber = e.prototype.setNumberForNative, e.prototype
					.getNumber = e.prototype.getNumberForNative, e.prototype.setVector = e.prototype
					.setVectorForNative, e.prototype.getVector = e.prototype.getVectorForNative, e.prototype
					.setVector2 = e.prototype.setVector2ForNative, e.prototype.getVector2 = e.prototype
					.getVector2ForNative, e.prototype.setVector3 = e.prototype.setVector3ForNative, e.prototype
					.getVector3 = e.prototype.getVector3ForNative, e.prototype.setQuaternion = e.prototype
					.setQuaternionForNative, e.prototype.getQuaternion = e.prototype.getQuaternionForNative, e
					.prototype.setMatrix4x4 = e.prototype.setMatrix4x4ForNative, e.prototype.getMatrix4x4 = e
					.prototype.getMatrix4x4ForNative, e.prototype.setBuffer = e.prototype.setBufferForNative, e
					.prototype.getBuffer = e.prototype.getBufferForNative, e.prototype.setTexture = e.prototype
					.setTextureForNative, e.prototype.getTexture = e.prototype.getTextureForNative, e.prototype
					.setAttribute = e.prototype.setAttributeForNative, e.prototype.getAttribute = e.prototype
					.getAttributeForNative, e.prototype.cloneTo = e.prototype.cloneToForNative, e.prototype
					.getData = e.prototype.getDataForNative, r.prototype._uniformMatrix2fv = r.prototype
					._uniformMatrix2fvForNative, r.prototype._uniformMatrix3fv = r.prototype
					._uniformMatrix3fvForNative, r.prototype._uniformMatrix4fv = r.prototype
					._uniformMatrix4fvForNative, t.LayaGLRunner.uploadShaderUniforms = t.LayaGLRunner
					.uploadShaderUniformsForNative), t.Render.supportWebGLPlusCulling && (n.renderObjectCulling = oe
					.renderObjectCullingNative), t.Render.supportWebGLPlusAnimation) {
				a.prototype._cloneDatasToAnimator = a.prototype._cloneDatasToAnimatorNative;
				var s = D;
				s.prototype._evaluateClipDatasRealTime = s.prototype._evaluateClipDatasRealTimeForNative, i
					.prototype._computeSkinnedData = i.prototype._computeSkinnedDataForNative
			}
			if (t.Render.isConchApp) {
				t.WebGL.shaderHighPrecision = !1;
				var o = t.LayaGL.instance;
				o.getShaderPrecisionFormat(o.FRAGMENT_SHADER, o.HIGH_FLOAT).precision ? t.WebGL
					.shaderHighPrecision = !0 : t.WebGL.shaderHighPrecision = !1
			}
		}
		static formatRelativePath(e, t) {
			var r;
			if (r = e + t, "." === t.charAt(0)) {
				for (var i = r.split("/"), a = 0, n = i.length; a < n; a++)
					if (".." == i[a]) {
						var s = a - 1;
						s > 0 && ".." !== i[s] && (i.splice(s, 2), a -= 2)
					} r = i.join("/")
			}
			return r
		}
		static _endLoad(e, r = null, i = null) {
			if (i)
				for (var a = 0, n = i.length; a < n; a++) {
					var s = t.Loader.getRes(i[a]);
					s && s._removeReference()
				}
			e.endLoad(r)
		}
		static _eventLoadManagerError(e) {
			t.Laya.loader.event(t.Event.ERROR, e)
		}
		static _addHierarchyInnerUrls(e, t, r, i, a, n, s = null, o = null) {
			var l = ki.formatRelativePath(i, a);
			return r && (l += r), e.push({
				url: l,
				type: n,
				constructParams: s,
				propertyParams: o
			}), t.push(l), l
		}
		static _getSprite3DHierarchyInnerUrls(e, t, r, i, a, n, s, o) {
			var l, _, h = e.props;
			switch (e.type) {
				case "Scene3D":
					var c = h.lightmaps;
					for (l = 0, _ = c.length; l < _; l++) {
						var d = c[l];
						d.path = ki._addHierarchyInnerUrls(a, n, s, o, d.path, ki.TEXTURE2D, d.constructParams, d
							.propertyParams)
					}
					var u = h.reflectionTexture;
					if (u && (h.reflectionTexture = ki._addHierarchyInnerUrls(i, n, s, o, u, ki.TEXTURECUBE)), h
						.sky) {
						var f = h.sky.material;
						f && (f.path = ki._addHierarchyInnerUrls(r, n, s, o, f.path, ki.MATERIAL))
					}
					break;
				case "Camera":
					var m = h.skyboxMaterial;
					m && (m.path = ki._addHierarchyInnerUrls(r, n, s, o, m.path, ki.MATERIAL));
					break;
				case "TrailSprite3D":
				case "MeshSprite3D":
				case "SkinnedMeshSprite3D":
					var E = h.meshPath;
					E && (h.meshPath = ki._addHierarchyInnerUrls(t, n, s, o, E, ki.MESH));
					var T = h.materials;
					if (T)
						for (l = 0, _ = T.length; l < _; l++) T[l].path = ki._addHierarchyInnerUrls(r, n, s, o, T[l]
							.path, ki.MATERIAL);
					break;
				case "ShuriKenParticle3D":
					var p = h.meshPath;
					p && (h.meshPath = ki._addHierarchyInnerUrls(t, n, s, o, p, ki.MESH)), h.material.path = ki
						._addHierarchyInnerUrls(r, n, s, o, h.material.path, ki.MATERIAL);
					break;
				case "Terrain":
					ki._addHierarchyInnerUrls(a, n, s, o, h.dataPath, ki.TERRAINRES)
			}
			var g = e.components;
			if (g)
				for (var S = 0, v = g.length; S < v; S++) {
					var R = g[S];
					switch (R.type) {
						case "Animator":
							R.avatarPath;
							var I = R.avatar;
							I && (I.path = ki._addHierarchyInnerUrls(a, n, s, o, I.path, ki.AVATAR));
							var x = R.clipPaths;
							if (x)
								for (l = 0, _ = x.length; l < _; l++) x[l] = ki._addHierarchyInnerUrls(a, n, s, o,
									x[l], ki.ANIMATIONCLIP);
							else {
								var A = R.layers;
								for (l = 0; l < A.length; l++)
									for (var D = A[l].states, M = 0, L = D.length; M < L; M++) {
										var C = D[M].clipPath;
										C && (D[M].clipPath = ki._addHierarchyInnerUrls(a, n, s, o, C, ki
											.ANIMATIONCLIP))
									}
							}
							break;
						case "PhysicsCollider":
						case "Rigidbody3D":
						case "CharacterController":
							var y = R.shapes;
							for (l = 0; l < y.length; l++) {
								var O = y[l];
								if ("MeshColliderShape" === O.type) {
									var N = O.mesh;
									N && (O.mesh = ki._addHierarchyInnerUrls(t, n, s, o, N, ki.MESH))
								}
							}
					}
				}
			var P = e.child;
			for (l = 0, _ = P.length; l < _; l++) ki._getSprite3DHierarchyInnerUrls(P[l], t, r, i, a, n, s, o)
		}
		static _loadHierarchy(e) {
			e.on(t.Event.LOADED, null, ki._onHierarchylhLoaded, [e]), e.load(e.url, t.Loader.JSON, !1, null, !0)
		}
		static _onHierarchylhLoaded(e, r) {
			var i = e.url,
				a = A.getURLVerion(i),
				n = t.URL.getPath(i),
				s = [],
				o = [],
				l = [],
				_ = [],
				h = [];
			ki._getSprite3DHierarchyInnerUrls(r.data, s, o, l, _, h, a, n);
			var c = s.length + o.length + _.length,
				d = c + 1,
				u = 1 / d;
			if (ki._onProcessChange(e, 0, u, 1), _.length > 0) {
				var f = c / d,
					m = t.Handler.create(null, ki._onProcessChange, [e, u, f], !1);
				ki._innerFourthLevelLoaderManager._create(_, !1, t.Handler.create(null, ki
						._onHierarchyInnerForthLevResouLoaded, [e, m, r, h, s, o, l, u + f * _.length, f]), m,
					null, null, null, 1, !0)
			} else ki._onHierarchyInnerForthLevResouLoaded(e, null, r, h, s, o, l, u, f)
		}
		static _onHierarchyInnerForthLevResouLoaded(e, r, i, a, n, s, o, l, _) {
			if (r && r.recover(), o.length > 0) {
				var h = t.Handler.create(null, ki._onProcessChange, [e, l, _], !1);
				ki._innerThirdLevelLoaderManager._create(o, !1, t.Handler.create(null, ki
						._onHierarchyInnerThirdLevResouLoaded, [e, h, i, a, n, s, l + _ * s.length, _]), r,
					null, null, null, 1, !0)
			} else ki._onHierarchyInnerThirdLevResouLoaded(e, null, i, a, n, s, l, _)
		}
		static _onHierarchyInnerThirdLevResouLoaded(e, r, i, a, n, s, o, l) {
			if (r && r.recover(), s.length > 0) {
				var _ = t.Handler.create(null, ki._onProcessChange, [e, o, l], !1);
				ki._innerSecondLevelLoaderManager._create(s, !1, t.Handler.create(null, ki
						._onHierarchyInnerSecondLevResouLoaded, [e, _, i, a, n, o + l * s.length, l]), r, null,
					null, null, 1, !0)
			} else ki._onHierarchyInnerSecondLevResouLoaded(e, null, i, a, n, o, l)
		}
		static _onHierarchyInnerSecondLevResouLoaded(e, r, i, a, n, s, o) {
			if (r && r.recover(), n.length > 0) {
				var l = t.Handler.create(null, ki._onProcessChange, [e, s, o], !1);
				ki._innerFirstLevelLoaderManager._create(n, !1, t.Handler.create(null, ki
					._onHierarchyInnerFirstLevResouLoaded, [e, l, i, a]), r, null, null, null, 1, !0)
			} else ki._onHierarchyInnerFirstLevResouLoaded(e, null, i, a)
		}
		static _onHierarchyInnerFirstLevResouLoaded(e, t, r, i) {
			t && t.recover(), e._cache = e._createCache;
			var a = "Scene3D" === r.data.type ? Wi._parseScene(r, e._propertyParams, e._constructParams) : Wi
				._parse(r, e._propertyParams, e._constructParams);
			ki._endLoad(e, a, i)
		}
		static _loadMesh(e) {
			e.on(t.Event.LOADED, null, ki._onMeshLmLoaded, [e]), e.load(e.url, t.Loader.BUFFER, !1, null, !0)
		}
		static _onMeshLmLoaded(e, t) {
			e._cache = e._createCache;
			var r = Gr._parse(t, e._propertyParams, e._constructParams);
			ki._endLoad(e, r)
		}
		static _loadMaterial(e) {
			e.on(t.Event.LOADED, null, ki._onMaterilLmatLoaded, [e]), e.load(e.url, t.Loader.JSON, !1, null, !0)
		}
		static _onMaterilLmatLoaded(e, r) {
			var i, a = e.url,
				n = A.getURLVerion(a),
				s = t.URL.getPath(a),
				o = [],
				l = [];
			r.customProps;
			switch (r.version) {
				case "LAYAMATERIAL:01":
				case "LAYAMATERIAL:02":
					var _, h, c = r.props.textures;
					if (c)
						for (_ = 0, h = c.length; _ < h; _++) {
							var d = c[_],
								u = d.path;
							u && (i = ki.formatRelativePath(s, u), n && (i += n), o.push({
								url: i,
								constructParams: d.constructParams,
								propertyParams: d.propertyParams
							}), l.push(i), d.path = i)
						}
					break;
				default:
					throw new Error("Laya3D:unkonwn version.")
			}
			var f = o.length,
				m = f + 1,
				E = 1 / m;
			if (ki._onProcessChange(e, 0, E, 1), f > 0) {
				var T = t.Handler.create(null, ki._onProcessChange, [e, E, f / m], !1);
				ki._innerFourthLevelLoaderManager._create(o, !1, t.Handler.create(null, ki._onMateialTexturesLoaded,
					[e, T, r, l]), T, null, null, null, 1, !0)
			} else ki._onMateialTexturesLoaded(e, null, r, null)
		}
		static _onMateialTexturesLoaded(e, t, r, i) {
			e._cache = e._createCache;
			var a = W._parse(r, e._propertyParams, e._constructParams);
			ki._endLoad(e, a, i), t && t.recover()
		}
		static _loadAvatar(e) {
			e.on(t.Event.LOADED, null, function(t) {
				e._cache = e._createCache;
				var r = H._parse(t, e._propertyParams, e._constructParams);
				ki._endLoad(e, r)
			}), e.load(e.url, t.Loader.JSON, !1, null, !0)
		}
		static _loadAnimationClip(e) {
			e.on(t.Event.LOADED, null, function(t) {
				e._cache = e._createCache;
				var r = D._parse(t, e._propertyParams, e._constructParams);
				ki._endLoad(e, r)
			}), e.load(e.url, t.Loader.BUFFER, !1, null, !0)
		}
		static _loadTexture2D(e) {
			var r, i = e.url,
				a = i.lastIndexOf(".") + 1,
				n = i.indexOf("?"),
				s = -1 == n ? i.length : n;
			switch (i.substr(a, s - a)) {
				case "jpg":
				case "jpeg":
				case "bmp":
				case "gif":
				case "png":
					r = "nativeimage";
					break;
				case "dds":
				case "ktx":
				case "pvr":
					r = t.Loader.BUFFER
			}
			e.on(t.Event.LOADED, null, function(r) {
				e._cache = e._createCache;
				var i = t.Texture2D._parse(r, e._propertyParams, e._constructParams);
				ki._endLoad(e, i)
			}), e.load(e.url, r, !1, null, !0)
		}
		static _loadTextureCube(e) {
			e.on(t.Event.LOADED, null, ki._onTextureCubeLtcLoaded, [e]), e.load(e.url, t.Loader.JSON, !1, null, !0)
		}
		static _onTextureCubeLtcLoaded(e, r) {
			var i = t.URL.getPath(e.url),
				a = [ki.formatRelativePath(i, r.front), ki.formatRelativePath(i, r.back), ki.formatRelativePath(i, r
						.left), ki.formatRelativePath(i, r.right), ki.formatRelativePath(i, r.up), ki
					.formatRelativePath(i, r.down)
				];
			ki._onProcessChange(e, 0, 1 / 7, 1);
			var n = t.Handler.create(null, ki._onProcessChange, [e, 1 / 7, 6 / 7], !1);
			ki._innerFourthLevelLoaderManager.load(a, t.Handler.create(null, ki._onTextureCubeImagesLoaded, [e, a,
				n]), n, "nativeimage")
		}
		static _onTextureCubeImagesLoaded(e, r, i) {
			for (var a = new Array(6), n = 0; n < 6; n++) a[n] = t.Loader.getRes(r[n]);
			e._cache = e._createCache;
			var s = Hr._parse(a, e._propertyParams, e._constructParams);
			for (i.recover(), n = 0; n < 6; n++) t.Loader.clearRes(r[n]);
			ki._endLoad(e, s)
		}
		static _onProcessChange(e, r, i, a) {
			(a = r + a * i) < 1 && e.event(t.Event.PROGRESS, a)
		}
		static init(e, t, r = null, i = null) {
			if (!ki._isInit) {
				ki._isInit = !0, r && r.cloneTo(s._config), r = s._config, oe.debugFrustumCulling = r
					.debugFrustumCulling, ki._editerEnvironment = r._editerEnvironment, pr.octreeCulling = r
					.octreeCulling, pr.octreeInitialSize = r.octreeInitialSize, pr.octreeInitialCenter = r
					.octreeInitialCenter, pr.octreeMinNodeSize = r.octreeMinNodeSize, pr.octreeLooseness = r
					.octreeLooseness;
				var a = window.Physics3D;
				null == a ? (Zt._enbalePhysics = !1, ki.__init__(e, t, r), i && i.run()) : (Zt._enbalePhysics = !0,
					a(1024 * r.defaultPhysicsMemory * 1024).then(function() {
						ki.__init__(e, t, r), i && i.run()
					}))
			}
		}
	}
	ki.HIERARCHY = "HIERARCHY", ki.MESH = "MESH", ki.MATERIAL = "MATERIAL", ki.TEXTURE2D = "TEXTURE2D", ki.TEXTURECUBE =
		"TEXTURECUBE", ki.ANIMATIONCLIP = "ANIMATIONCLIP", ki.AVATAR = "AVATAR", ki.TERRAINHEIGHTDATA =
		"TERRAINHEIGHTDATA", ki.TERRAINRES = "TERRAIN", ki._innerFirstLevelLoaderManager = new t.LoaderManager, ki
		._innerSecondLevelLoaderManager = new t.LoaderManager, ki._innerThirdLevelLoaderManager = new t.LoaderManager,
		ki._innerFourthLevelLoaderManager = new t.LoaderManager, ki._isInit = !1, ki._editerEnvironment = !1, ki
		.physicsSettings = new nr, window.Laya3D = ki;
	class Xi extends t.Component {
		constructor() {
			super(...arguments), this._indexInPool = -1
		}
		get isSingleton() {
			return !1
		}
		_checkProcessTriggers() {
			var e = Xi.prototype;
			return this.onTriggerEnter !== e.onTriggerEnter || (this.onTriggerStay !== e.onTriggerStay || this
				.onTriggerExit !== e.onTriggerExit)
		}
		_checkProcessCollisions() {
			var e = Xi.prototype;
			return this.onCollisionEnter !== e.onCollisionEnter || (this.onCollisionStay !== e
				.onCollisionStay || this.onCollisionExit !== e.onCollisionExit)
		}
		_onAwake() {
			this.onAwake(), this.onStart !== Xi.prototype.onStart && t.Laya.startTimer.callLater(this, this
				.onStart)
		}
		_onEnable() {
			this.owner._scene._addScript(this);
			var e = Xi.prototype;
			this.onKeyDown !== e.onKeyDown && t.Laya.stage.on(t.Event.KEY_DOWN, this, this.onKeyDown), this
				.onKeyPress !== e.onKeyPress && t.Laya.stage.on(t.Event.KEY_PRESS, this, this.onKeyUp), this
				.onKeyUp !== e.onKeyUp && t.Laya.stage.on(t.Event.KEY_UP, this, this.onKeyUp)
		}
		_onDisable() {
			this.owner._scene._removeScript(this), this.owner.offAllCaller(this), t.Laya.stage.offAllCaller(
				this)
		}
		_isScript() {
			return !0
		}
		_onAdded() {
			var e = this.owner,
				t = e._scripts;
			t || (e._scripts = t = []), t.push(this), e._needProcessCollisions || (e._needProcessCollisions =
				this._checkProcessCollisions()), e._needProcessTriggers || (e._needProcessTriggers = this
				._checkProcessTriggers())
		}
		_onDestroy() {
			var e = this.owner._scripts;
			e.splice(e.indexOf(this), 1);
			var t = this.owner;
			t._needProcessTriggers = !1;
			for (var r = 0, i = e.length; r < i; r++)
				if (e[r]._checkProcessTriggers()) {
					t._needProcessTriggers = !0;
					break
				} for (t._needProcessCollisions = !1, r = 0, i = e.length; r < i; r++)
				if (e[r]._checkProcessCollisions()) {
					t._needProcessCollisions = !0;
					break
				} this.onDestroy()
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
		onMouseDown() {}
		onMouseDrag() {}
		onMouseClick() {}
		onMouseUp() {}
		onMouseEnter() {}
		onMouseOver() {}
		onMouseOut() {}
		onKeyDown(e) {}
		onKeyPress(e) {}
		onKeyUp(e) {}
		onUpdate() {}
		onLateUpdate() {}
		onPreRender() {}
		onPostRender() {}
		onDisable() {}
		onDestroy() {}
	}
	class Yi {
		constructor(e, t, r, i) {
			this._datas = [], this._w = e, this._h = t, this._minHeight = r, this._maxHeight = i
		}
		static creatFromMesh(e, t, r, i) {
			for (var a = [], s = [], o = e.subMeshCount, l = 0; l < o; l++) {
				for (var _ = e.getSubMesh(l), h = _._vertexBuffer, c = h.getFloat32Data(), d = [], u = 0; u < c
					.length; u += h.vertexDeclaration.vertexStride / 4) {
					var f = new n(c[u + 0], c[u + 1], c[u + 2]);
					d.push(f)
				}
				a.push(d);
				var m = _._indexBuffer;
				s.push(m.getData())
			}
			var E = e.bounds,
				T = E.getMin().x,
				p = E.getMin().z,
				g = E.getMax().x,
				S = E.getMax().z,
				v = E.getMin().y,
				R = E.getMax().y,
				I = g - T,
				x = S - p,
				A = i.x = I / (t - 1),
				D = i.y = x / (r - 1),
				M = new Yi(t, r, v, R),
				L = Yi._tempRay,
				C = L.direction;
			C.x = 0, C.y = -1, C.z = 0;
			var y = R + .1;
			L.origin.y = y;
			for (var O = 0; O < r; O++) {
				var N = p + O * D;
				M._datas[O] = [];
				for (var P = 0; P < t; P++) {
					var w = T + P * A,
						V = L.origin;
					V.x = w, V.z = N;
					var b = Yi._getPosition(L, a, s);
					M._datas[O][P] = b === Number.MAX_VALUE ? NaN : y - b
				}
			}
			return M
		}
		static createFromImage(e, t, r) {
			for (var i = e.width, a = e.height, n = new Yi(i, a, t, r), s = (r - t) / 254, o = e.getPixels(), l = 0,
					_ = 0; _ < a; _++)
				for (var h = n._datas[_] = [], c = 0; c < i; c++) {
					var d = o[l++],
						u = o[l++],
						f = o[l++],
						m = o[l++];
					h[c] = 255 == d && 255 == u && 255 == f && 255 == m ? NaN : (d + u + f) / 3 * s + t
				}
			return n
		}
		static _getPosition(e, t, r) {
			for (var i = Number.MAX_VALUE, a = 0; a < t.length; a++)
				for (var n = t[a], s = r[a], o = 0; o < s.length; o += 3) {
					var l = n[s[o + 0]],
						_ = n[s[o + 1]],
						h = n[s[o + 2]],
						c = xe.rayIntersectsTriangle(e, l, _, h);
					!isNaN(c) && c < i && (i = c)
				}
			return i
		}
		get width() {
			return this._w
		}
		get height() {
			return this._h
		}
		get maxHeight() {
			return this._maxHeight
		}
		get minHeight() {
			return this._minHeight
		}
		_inBounds(e, t) {
			return e >= 0 && e < this._h && t >= 0 && t < this._w
		}
		getHeight(e, t) {
			return this._inBounds(e, t) ? this._datas[e][t] : NaN
		}
	}
	Yi._tempRay = new ge(new n, new n);
	class Zi extends $e {
		constructor(e, t, r = null) {
			super(e, r), this._heightMap = t, this._cellSize = new i
		}
		static createFromMesh(e, t, r, i = null) {
			var a = new Zi(e, null, i);
			return a._initCreateFromMesh(t, r), a
		}
		static createFromMeshAndHeightMap(e, t, r, i, a = null) {
			var n = new Zi(e, null, a);
			return n._initCreateFromMeshHeightMap(t, r, i), n
		}
		get minX() {
			var e = this.transform.worldMatrix.elements;
			return this._minX * this._getScaleX() + e[12]
		}
		get minZ() {
			var e = this.transform.worldMatrix.elements;
			return this._minZ * this._getScaleZ() + e[14]
		}
		get width() {
			return (this._heightMap.width - 1) * this._cellSize.x * this._getScaleX()
		}
		get depth() {
			return (this._heightMap.height - 1) * this._cellSize.y * this._getScaleZ()
		}
		_disableRotation() {
			var e = this.transform.rotation;
			e.x = 0, e.y = 0, e.z = 0, e.w = 1, this.transform.rotation = e
		}
		_getScaleX() {
			var e = this.transform.worldMatrix.elements,
				t = e[0],
				r = e[1],
				i = e[2];
			return Math.sqrt(t * t + r * r + i * i)
		}
		_getScaleZ() {
			var e = this.transform.worldMatrix.elements,
				t = e[8],
				r = e[9],
				i = e[10];
			return Math.sqrt(t * t + r * r + i * i)
		}
		_initCreateFromMesh(e, t) {
			this._heightMap = Yi.creatFromMesh(this.meshFilter.sharedMesh, e, t, this._cellSize);
			var r = this.meshFilter.sharedMesh.bounds,
				i = r.getMin();
			r.getMax();
			this._minX = i.x, this._minZ = i.z
		}
		_initCreateFromMeshHeightMap(e, t, r) {
			var i = this.meshFilter.sharedMesh.bounds;
			this._heightMap = Yi.createFromImage(e, t, r), this._computeCellSize(i);
			var a = i.getMin();
			i.getMax();
			this._minX = a.x, this._minZ = a.z
		}
		_computeCellSize(e) {
			var t = e.getMin(),
				r = e.getMax(),
				i = t.x,
				a = t.z,
				n = r.x - i,
				s = r.z - a;
			this._cellSize.x = n / (this._heightMap.width - 1), this._cellSize.y = s / (this._heightMap.height - 1)
		}
		_update(e) {
			this._disableRotation()
		}
		getHeight(e, t) {
			Zi._tempVector3.x = e, Zi._tempVector3.y = 0, Zi._tempVector3.z = t, this._disableRotation();
			var r = this.transform.worldMatrix;
			r.invert(Zi._tempMatrix4x4), n.transformCoordinate(Zi._tempVector3, Zi._tempMatrix4x4, Zi._tempVector3),
				e = Zi._tempVector3.x, t = Zi._tempVector3.z;
			var i = (e - this._minX) / this._cellSize.x,
				a = (t - this._minZ) / this._cellSize.y,
				s = Math.floor(a),
				o = Math.floor(i),
				l = i - o,
				_ = a - s,
				h = r.elements,
				c = h[4],
				d = h[5],
				u = h[6],
				f = Math.sqrt(c * c + d * d + u * u),
				m = h[13],
				E = this._heightMap.getHeight(s, o + 1),
				T = this._heightMap.getHeight(s + 1, o);
			if (isNaN(E) || isNaN(T)) return NaN;
			if (l + _ <= 1) {
				var p = this._heightMap.getHeight(s, o);
				return isNaN(p) ? NaN : (p + l * (E - p) + _ * (T - p)) * f + m
			}
			var g = this._heightMap.getHeight(s + 1, o + 1);
			return isNaN(g) ? NaN : (g + (1 - l) * (T - g) + (1 - _) * (E - g)) * f + m
		}
	}
	Zi._tempVector3 = new n, Zi._tempMatrix4x4 = new p;
	class ji {
		constructor() {
			this._currentLength = 0, this._elements = new Float32Array(12)
		}
		get gradientCount() {
			return this._currentLength / 3
		}
		add(e, t) {
			this._currentLength < 8 ? (6 === this._currentLength && 1 !== e && (e = 1, console.log(
				"GradientDataVector2 warning:the forth key is  be force set to 1.")), this._elements[this
				._currentLength++] = e, this._elements[this._currentLength++] = t.x, this._elements[this
				._currentLength++] = t.y) : console.log(
				"GradientDataVector2 warning:data count must lessEqual than 4")
		}
		cloneTo(e) {
			var t = e;
			t._currentLength = this._currentLength;
			for (var r = t._elements, i = 0, a = this._elements.length; i < a; i++) r[i] = this._elements[i]
		}
		clone() {
			var e = new ji;
			return this.cloneTo(e), e
		}
	}
	class qi {
		constructor() {}
		render(e) {}
	}
	class Qi extends qi {
		constructor() {
			super(), this._shader = null, this._shaderData = new B, this._linearColor = new te, this
				._bloomTextureTexelSize = new a, this._shaderThreshold = new a, this._shaderParams = new a, this
				._pyramid = null, this._intensity = 0, this._threshold = 1, this._softKnee = .5, this._diffusion =
				7, this._anamorphicRatio = 0, this._dirtIntensity = 0, this._shaderSetting = new a, this
				._dirtTileOffset = new a, this.clamp = 65472, this.color = new te(1, 1, 1, 1), this.fastMode = !1,
				this.dirtTexture = null, this._shader = F.find("PostProcessBloom"), this._pyramid = new Array(2 * Qi
					.MAXPYRAMIDSIZE)
		}
		get intensity() {
			return this._intensity
		}
		set intensity(e) {
			this._intensity = Math.max(e, 0)
		}
		get threshold() {
			return this._threshold
		}
		set threshold(e) {
			this._threshold = Math.max(e, 0)
		}
		get softKnee() {
			return this._softKnee
		}
		set softKnee(e) {
			this._softKnee = Math.min(Math.max(e, 0), 1)
		}
		get diffusion() {
			return this._diffusion
		}
		set diffusion(e) {
			this._diffusion = Math.min(Math.max(e, 1), 10)
		}
		get anamorphicRatio() {
			return this._anamorphicRatio
		}
		set anamorphicRatio(e) {
			this._anamorphicRatio = Math.min(Math.max(e, -1), 1)
		}
		get dirtIntensity() {
			return this._dirtIntensity
		}
		set dirtIntensity(e) {
			this._dirtIntensity = Math.max(e, 0)
		}
		render(e) {
			var r = e.command,
				i = e.camera.viewport;
			this._shaderData.setTexture(Qi.SHADERVALUE_AUTOEXPOSURETEX, t.Texture2D.whiteTexture);
			var n, s = this._anamorphicRatio,
				o = s < 0 ? -s : 0,
				l = s > 0 ? s : 0,
				_ = Math.floor(i.width / (2 - o)),
				h = Math.floor(i.height / (2 - l)),
				c = Math.max(_, h);
			n = Math.log2(c) + this._diffusion - 10;
			var d = Math.floor(n),
				u = Math.min(Math.max(d, 1), Qi.MAXPYRAMIDSIZE),
				f = .5 + n - d;
			this._shaderData.setNumber(Qi.SHADERVALUE_SAMPLESCALE, f);
			var m = te.gammaToLinearSpace(this.threshold),
				E = m * this._softKnee + 1e-5;
			this._shaderThreshold.setValue(m, m - E, 2 * E, .25 / E), this._shaderData.setVector(Qi
				.SHADERVALUE_THRESHOLD, this._shaderThreshold);
			var T = te.gammaToLinearSpace(this.clamp);
			this._shaderParams.setValue(T, 0, 0, 0), this._shaderData.setVector(Qi.SHADERVALUE_PARAMS, this
				._shaderParams);
			for (var p = this.fastMode ? 1 : 0, g = e.source, S = 0; S < u; S++) {
				var v = 2 * S,
					R = v + 1,
					I = 0 == S ? Qi.SUBSHADER_PREFILTER13 + p : Qi.SUBSHADER_DOWNSAMPLE13 + p,
					x = w.createFromPool(_, h, t.RenderTextureFormat.R8G8B8, t.RenderTextureDepthFormat
						.DEPTHSTENCIL_NONE, t.BaseTexture.FILTERMODE_BILINEAR);
				if (this._pyramid[v] = x, S !== u - 1) {
					var A = w.createFromPool(_, h, t.RenderTextureFormat.R8G8B8, t.RenderTextureDepthFormat
						.DEPTHSTENCIL_NONE, t.BaseTexture.FILTERMODE_BILINEAR);
					this._pyramid[R] = A
				}
				r.blitScreenTriangle(g, x, this._shader, this._shaderData, I), g = x, _ = Math.max(Math.floor(_ /
					2), 1), h = Math.max(Math.floor(h / 2), 1)
			}
			var D = this._pyramid[2 * (u - 1)];
			for (S = u - 2; S >= 0; S--) R = (v = 2 * S) + 1, x = this._pyramid[v], A = this._pyramid[R], r
				.setShaderDataTexture(this._shaderData, Qi.SHADERVALUE_BLOOMTEX, x), r.blitScreenTriangle(D, A, this
					._shader, this._shaderData, Qi.SUBSHADER_UPSAMPLETENT + p), D = A;
			var M = this._linearColor;
			this.color.toLinear(M);
			var L = Math.pow(2, this._intensity / 10) - 1,
				C = this._shaderSetting;
			this._shaderSetting.setValue(f, L, this._dirtIntensity, u);
			var y = this.dirtTexture ? this.dirtTexture : t.Texture2D.blackTexture,
				O = y.width / y.height,
				N = i.width / i.height,
				P = this._dirtTileOffset;
			O > N ? P.setValue(N / O, 1, .5 * (1 - P.x), 0) : O < N && P.setValue(1, O / N, 0, .5 * (1 - P.y));
			var V = e.compositeShaderData;
			for (this.fastMode ? V.addDefine(U.SHADERDEFINE_BLOOM_LOW) : V.addDefine(U.SHADERDEFINE_BLOOM), this
				._bloomTextureTexelSize.setValue(1 / D.width, 1 / D.height, D.width, D.height), V.setVector(U
					.SHADERVALUE_BLOOM_DIRTTILEOFFSET, P), V.setVector(U.SHADERVALUE_BLOOM_SETTINGS, C), V
				.setVector(U.SHADERVALUE_BLOOM_COLOR, new a(M.r, M.g, M.b, M.a)), V.setTexture(U
					.SHADERVALUE_BLOOM_DIRTTEX, y), V.setTexture(U.SHADERVALUE_BLOOMTEX, D), V.setVector(U
					.SHADERVALUE_BLOOMTEX_TEXELSIZE, this._bloomTextureTexelSize), S = 0; S < u; S++) R = (v = 2 *
				S) + 1, w.recoverToPool(this._pyramid[v]), 0 !== S && S !== u - 1 && w.recoverToPool(this
				._pyramid[R]);
			e.deferredReleaseTextures.push(D)
		}
	}
	Qi.SHADERVALUE_MAINTEX = F.propertyNameToID("u_MainTex"), Qi.SHADERVALUE_AUTOEXPOSURETEX = F.propertyNameToID(
			"u_AutoExposureTex"), Qi.SHADERVALUE_SAMPLESCALE = F.propertyNameToID("u_SampleScale"), Qi
		.SHADERVALUE_THRESHOLD = F.propertyNameToID("u_Threshold"), Qi.SHADERVALUE_PARAMS = F.propertyNameToID(
			"u_Params"), Qi.SHADERVALUE_BLOOMTEX = F.propertyNameToID("u_BloomTex"), Qi.SUBSHADER_PREFILTER13 = 0, Qi
		.SUBSHADER_PREFILTER4 = 1, Qi.SUBSHADER_DOWNSAMPLE13 = 2, Qi.SUBSHADER_DOWNSAMPLE4 = 3, Qi
		.SUBSHADER_UPSAMPLETENT = 4, Qi.SUBSHADER_UPSAMPLEBOX = 5, Qi.MAXPYRAMIDSIZE = 16;
	class Ki {
		constructor(e) {
			if (!(e instanceof Array) || 4 !== e.length) throw new Error(
				"Rand:Seed must be an array with 4 numbers");
			this._state0U = 0 | e[0], this._state0L = 0 | e[1], this._state1U = 0 | e[2], this._state1L = 0 | e[3]
		}
		randomint() {
			var e = this._state0U,
				t = this._state0L,
				r = this._state1U,
				i = this._state1L,
				a = (i >>> 0) + (t >>> 0),
				n = r + e + (a / 2 >>> 31) >>> 0,
				s = a >>> 0;
			this._state0U = r, this._state0L = i;
			var o = 0,
				l = 0;
			o = (e ^= o = e << 23 | (-512 & t) >>> 9) ^ r, l = (t ^= l = t << 23) ^ i;
			o ^= e >>> 18, l ^= t >>> 18 | (262143 & e) << 14;
			return o ^= r >>> 5, l ^= i >>> 5 | (31 & r) << 27, this._state1U = o, this._state1L = l, [n, s]
		}
		random() {
			var e = this.randomint(),
				t = e[0],
				r = 1023 << 20 | t >>> 12,
				i = 0 | (e[1] >>> 12 | (4095 & t) << 20);
			return Ki._CONVERTION_BUFFER.setUint32(0, r, !1), Ki._CONVERTION_BUFFER.setUint32(4, i, !1), Ki
				._CONVERTION_BUFFER.getFloat64(0, !1) - 1
		}
	}
	Ki._CONVERTION_BUFFER = new DataView(new ArrayBuffer(8)), Ki.defaultRand = new Ki([0, Date.now() / 65536, 0, Date
		.now() % 65536
	]);
	class Ji {
		constructor(e, t) {
			this._width = 0, this._height = 0, this._width = e, this._height = t
		}
		static get fullScreen() {
			return new Ji(-1, -1)
		}
		get width() {
			return -1 === this._width ? P.clientWidth : this._width
		}
		get height() {
			return -1 === this._height ? P.clientHeight : this._height
		}
	}
	e.AlternateLightQueue = hr, e.AnimationClip = D, e.AnimationClipParser03 = S, e.AnimationClipParser04 = R, e
		.AnimationEvent = _, e.AnimationNode = z, e.AnimationTransform3D = G, e.Animator = O, e
		.AnimatorControllerLayer = L, e.AnimatorPlayState = M, e.AnimatorState = C, e.AnimatorStateScript = class {
			constructor() {}
			onStateEnter() {}
			onStateUpdate() {}
			onStateExit() {}
		}, e.Avatar = H, e.BaseCamera = Oe, e.BaseMaterial = W, e.BaseRender = je, e.BaseShape = xt, e.BatchMark = le, e
		.BlinnPhongMaterial = Y, e.BlitScreenQuadCMD = Ve, e.BloomEffect = Qi, e.BoundBox = Ye, e.BoundFrustum = Re, e
		.BoundSphere = _t, e.Bounds = Ze, e.BoundsOctree = Tr, e.BoundsOctreeNode = mr, e.BoxColliderShape = qt, e
		.BoxShape = Dt, e.BufferState = De, e.Burst = mt, e.Camera = Ue, e.CapsuleColliderShape = Qt, e.CastShadowList =
		Bt, e.CharacterController = Or, e.CircleShape = Mt, e.Cluster = Te, e.ColliderShape = jt, e.Collision = Xt, e
		.CollisionTool = Yt, e.CollisionUtils = ve, e.Color = te, e.ColorOverLifetime = Tt, e.Command = we, e
		.CommandBuffer = Be, e.CompoundColliderShape = Kt, e.ConchQuaternion = g, e.ConchVector3 = T, e.ConchVector4 =
		E, e.ConeColliderShape = Jt, e.ConeShape = Lt, e.Config3D = s, e.Constraint3D = class {
			constructor() {}
		}, e.ConstraintComponent = class extends t.Component {
			constructor() {
				super(), this._feedbackEnabled = !1
			}
			get enabled() {
				return super.enabled
			}
			set enabled(e) {
				this._nativeConstraint.IsEnabled = e, super.enabled = e
			}
			get breakingImpulseThreshold() {
				return this._breakingImpulseThreshold
			}
			set breakingImpulseThreshold(e) {
				this._nativeConstraint.BreakingImpulseThreshold = e, this._breakingImpulseThreshold = e
			}
			get appliedImpulse() {
				return this._feedbackEnabled || (this._nativeConstraint.EnableFeedback(!0), this
					._feedbackEnabled = !0), this._nativeConstraint.AppliedImpulse
			}
			get connectedBody() {
				return this._connectedBody
			}
			set connectedBody(e) {
				this._connectedBody = e
			}
			_onDestroy() {
				Zt._physics3D.destroy(this._nativeConstraint), this._nativeConstraint = null
			}
		}, e.ContactPoint = kt, e.ContainmentType = Se, e.CylinderColliderShape = $t, e.DefineDatas = V, e
		.DirectionLight = Gi, e.DirectionLightQueue = _r, e.DynamicBatchManager = re, e.EffectMaterial = Z, e.Emission =
		ct, e.ExtendTerrainMaterial = j, e.FloatKeyframe = c, e.FrameOverTime = pt, e.FrustumCulling = oe, e
		.GeometryElement = _e, e.Gradient = tt, e.GradientAngularVelocity = gt, e.GradientColor = Et, e
		.GradientDataInt = St, e.GradientDataNumber = dt, e.GradientDataVector2 = ji, e.GradientMode = et, e
		.GradientSize = vt, e.GradientVelocity = Rt, e.HalfFloatUtils = v, e.HeightMap = Yi, e
		.HeightfieldColliderShape = class {
			constructor() {}
		}, e.HemisphereShape = Ct, e.HitResult = Ht, e.ILaya3D = o, e.IndexBuffer3D = Me, e.Input3D = ar, e.Keyframe =
		h, e.KeyframeNode = l, e.KeyframeNodeList = I, e.KeyframeNodeOwner = y, e.Laya3D = ki, e.LightQueue = lr, e
		.LightSprite = Ui, e.LoadModelV04 = Fr, e.LoadModelV05 = Br, e.MathUtils3D = r, e.Matrix3x3 = d, e.Matrix4x4 =
		p, e.Mesh = Gr, e.MeshColliderShape = er, e.MeshFilter = Qe, e.MeshReader = Ur, e
		.MeshRenderDynamicBatchManager = Je, e.MeshRenderStaticBatchManager = ke, e.MeshRenderer = qe, e.MeshSprite3D =
		$e, e.MeshSprite3DShaderDeclaration = Xe, e.MeshTerrainSprite3D = Zi, e.MouseTouch = Gt, e.OctreeMotionList =
		Er, e.PBRSpecularMaterial = q, e.PBRStandardMaterial = Q, e.ParallelSplitShadowMap = Bi, e.Physics3D = Zt, e
		.Physics3DUtils = it, e.PhysicsCollider = Pr, e.PhysicsComponent = rr, e.PhysicsSettings = nr, e
		.PhysicsSimulation = ir, e.PhysicsTriggerComponent = Nr, e.PhysicsUpdateList = Wt, e.Picker = xe, e
		.PixelLineData = class {
			constructor() {
				this.startPosition = new n, this.endPosition = new n, this.startColor = new te, this.endColor =
					new te
			}
			cloneTo(e) {
				this.startPosition.cloneTo(e.startPosition), this.endPosition.cloneTo(e.endPosition), this
					.startColor.cloneTo(e.startColor), this.endColor.cloneTo(e.endColor)
			}
		}, e.PixelLineFilter = cr, e.PixelLineMaterial = bt, e.PixelLineRenderer = dr, e.PixelLineSprite3D = ur, e
		.PixelLineVertex = Ft, e.Plane = pe, e.Point2PointConstraint = class {
			constructor() {
				this._pivotInA = new n, this._pivotInB = new n
			}
			get pivotInA() {
				return this._pivotInA
			}
			set pivotInA(e) {
				this._pivotInA = e
			}
			get pivotInB() {
				return this._pivotInB
			}
			set pivotInB(e) {
				this._pivotInB = e
			}
			get damping() {
				return this._damping
			}
			set damping(e) {
				this._damping = e
			}
			get impulseClamp() {
				return this._impulseClamp
			}
			set impulseClamp(e) {
				this._impulseClamp = e
			}
			get tau() {
				return this._tau
			}
			set tau(e) {
				this._tau = e
			}
		}, e.PointLight = zi, e.PostProcess = U, e.PostProcessEffect = qi, e.PostProcessRenderContext = N, e
		.PrimitiveMesh = zr, e.Quaternion = u, e.QuaternionKeyframe = f, e.Rand = ht, e.RandX = Ki, e.Ray = ge, e
		.RenderContext3D = P, e.RenderElement = Ge, e.RenderQueue = fr, e.RenderState = X, e.RenderTexture = w, e
		.RenderableSprite3D = ne, e.Rigidbody3D = wr, e.RotationOverLifetime = It, e.Scene3D = pr, e
		.Scene3DShaderDeclaration = k, e.Scene3DUtils = Wi, e.SceneManager = class {
			constructor() {}
		}, e.ScreenQuad = Ne, e.ScreenTriangle = Pe, e.Script3D = Xi, e.SetRenderTargetCMD = be, e
		.SetShaderDataTextureCMD = Fe, e.Shader3D = F, e.ShaderData = B, e.ShaderDefine = b, e.ShaderInit3D = Fi, e
		.ShaderInstance = wi, e.ShaderPass = Vi, e.ShaderVariable = Pi, e.ShapeUtils = At, e.ShuriKenParticle3D = Vt, e
		.ShuriKenParticle3DShaderDeclaration = at, e.ShurikenParticleData = ut, e.ShurikenParticleMaterial = rt, e
		.ShurikenParticleRenderer = nt, e.ShurikenParticleSystem = ft, e.SimpleSingletonList = Ut, e.SingletonList = We,
		e.Size = Ji, e.SizeOverLifetime = Ot, e.SkinnedMeshRenderer = Sr, e.SkinnedMeshSprite3D = vr, e
		.SkinnedMeshSprite3DShaderDeclaration = gr, e.SkyBox = Ce, e.SkyBoxMaterial = K, e.SkyDome = or, e.SkyMesh = Le,
		e.SkyProceduralMaterial = J, e.SkyRenderer = ye, e.SphereColliderShape = tr, e.SphereShape = yt, e.SpotLight =
		Hi, e.Sprite3D = ae, e.StartFrame = Nt, e.StaticBatchManager = se, e.StaticPlaneColliderShape = Vr, e.SubMesh =
		br, e.SubMeshDynamicBatch = Ke, e.SubMeshInstanceBatch = me, e.SubMeshRenderElement = ze, e.SubMeshStaticBatch =
		He, e.SubShader = bi, e.SystemUtils = Ae, e.TextMesh = class {
			get text() {
				return this._text
			}
			set text(e) {
				this._text = e
			}
			get fontSize() {
				return this._fontSize
			}
			set fontSize(e) {
				this._fontSize = e
			}
			get color() {
				return this._color
			}
			set color(e) {
				this._color = e
			}
			constructor() {}
			_createVertexBuffer(e) {}
			_resizeVertexBuffer(e) {}
			_addChar() {}
		}, e.TextureCube = Hr, e.TextureGenerator = x, e.TextureMode = Ir, e.TextureSheetAnimation = Pt, e.Touch = zt, e
		.TrailFilter = Mr, e.TrailGeometry = Dr, e.TrailMaterial = Rr, e.TrailRenderer = Lr, e.TrailSprite3D = Cr, e
		.Transform3D = ie, e.UnlitMaterial = $, e.Utils3D = A, e.Vector2 = i, e.Vector3 = n, e.Vector3Keyframe = m, e
		.Vector4 = a, e.VelocityOverLifetime = wt, e.VertexBuffer3D = he, e.VertexDeclaration = de, e.VertexElement =
		ue, e.VertexElementFormat = ce, e.VertexMesh = fe, e.VertexPositionTerrain = yr, e.VertexPositionTexture0 = sr,
		e.VertexShuriKenParticle = st, e.VertexShurikenParticleBillboard = ot, e.VertexShurikenParticleMesh = lt, e
		.VertexTrail = Ar, e.Viewport = Ie, e.WaterPrimaryMaterial = ee
}(window.Laya = window.Laya || {}, Laya);
