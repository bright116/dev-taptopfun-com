!function(t, e) {
    "function" == typeof define && define.amd ? define([ "long" ], e) : "function" == typeof require && "object" == typeof module && module && module.exports ? module.exports = function() {
        var t;
        try {
            t = require("long");
        } catch (t) {}
        return e(t);
    }() : (t.dcodeIO = t.dcodeIO || {}).ByteBuffer = e(t.dcodeIO.Long);
}(this, function(t) {
    "use strict";
    var e = function(t, r, n) {
        if (void 0 === t && (t = e.DEFAULT_CAPACITY), void 0 === r && (r = e.DEFAULT_ENDIAN), 
        void 0 === n && (n = e.DEFAULT_NOASSERT), !n) {
            if ((t |= 0) < 0) throw RangeError("Illegal capacity");
            r = !!r, n = !!n;
        }
        this.buffer = 0 === t ? i : new ArrayBuffer(t), this.view = 0 === t ? null : new Uint8Array(this.buffer), 
        this.offset = 0, this.markedOffset = -1, this.limit = t, this.littleEndian = r, 
        this.noAssert = n;
    };
    e.VERSION = "5.0.1", e.LITTLE_ENDIAN = !0, e.BIG_ENDIAN = !1, e.DEFAULT_CAPACITY = 16, 
    e.DEFAULT_ENDIAN = e.BIG_ENDIAN, e.DEFAULT_NOASSERT = !1, e.Long = t || null;
    var r = e.prototype;
    r.__isByteBuffer__, Object.defineProperty(r, "__isByteBuffer__", {
        value: !0,
        enumerable: !1,
        configurable: !1
    });
    var i = new ArrayBuffer(0), n = String.fromCharCode;
    function stringSource(t) {
        var e = 0;
        return function() {
            return e < t.length ? t.charCodeAt(e++) : null;
        };
    }
    function stringDestination() {
        var t = [], e = [];
        return function() {
            if (0 === arguments.length) return e.join("") + n.apply(String, t);
            t.length + arguments.length > 1024 && (e.push(n.apply(String, t)), t.length = 0), 
            Array.prototype.push.apply(t, arguments);
        };
    }
    function ieee754_read(t, e, r, i, n) {
        var f, o, s = 8 * n - i - 1, h = (1 << s) - 1, a = h >> 1, l = -7, u = r ? n - 1 : 0, g = r ? -1 : 1, w = t[e + u];
        for (u += g, f = w & (1 << -l) - 1, w >>= -l, l += s; l > 0; f = 256 * f + t[e + u], 
        u += g, l -= 8) ;
        for (o = f & (1 << -l) - 1, f >>= -l, l += i; l > 0; o = 256 * o + t[e + u], u += g, 
        l -= 8) ;
        if (0 === f) f = 1 - a; else {
            if (f === h) return o ? NaN : 1 / 0 * (w ? -1 : 1);
            o += Math.pow(2, i), f -= a;
        }
        return (w ? -1 : 1) * o * Math.pow(2, f - i);
    }
    function ieee754_write(t, e, r, i, n, f) {
        var o, s, h, a = 8 * f - n - 1, l = (1 << a) - 1, u = l >> 1, g = 23 === n ? Math.pow(2, -24) - Math.pow(2, -77) : 0, w = i ? 0 : f - 1, b = i ? 1 : -1, v = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
        for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (s = isNaN(e) ? 1 : 0, o = l) : (o = Math.floor(Math.log(e) / Math.LN2), 
        e * (h = Math.pow(2, -o)) < 1 && (o--, h *= 2), (e += o + u >= 1 ? g / h : g * Math.pow(2, 1 - u)) * h >= 2 && (o++, 
        h /= 2), o + u >= l ? (s = 0, o = l) : o + u >= 1 ? (s = (e * h - 1) * Math.pow(2, n), 
        o += u) : (s = e * Math.pow(2, u - 1) * Math.pow(2, n), o = 0)); n >= 8; t[r + w] = 255 & s, 
        w += b, s /= 256, n -= 8) ;
        for (o = o << n | s, a += n; a > 0; t[r + w] = 255 & o, w += b, o /= 256, a -= 8) ;
        t[r + w - b] |= 128 * v;
    }
    e.accessor = function() {
        return Uint8Array;
    }, e.allocate = function(t, r, i) {
        return new e(t, r, i);
    }, e.concat = function(t, r, i, n) {
        "boolean" != typeof r && "string" == typeof r || (n = i, i = r, r = void 0);
        for (var f, o = 0, s = 0, h = t.length; s < h; ++s) e.isByteBuffer(t[s]) || (t[s] = e.wrap(t[s], r)), 
        (f = t[s].limit - t[s].offset) > 0 && (o += f);
        if (0 === o) return new e(0, i, n);
        var a, l = new e(o, i, n);
        for (s = 0; s < h; ) (f = (a = t[s++]).limit - a.offset) <= 0 || (l.view.set(a.view.subarray(a.offset, a.limit), l.offset), 
        l.offset += f);
        return l.limit = l.offset, l.offset = 0, l;
    }, e.isByteBuffer = function(t) {
        return !0 === (t && t.__isByteBuffer__);
    }, e.type = function() {
        return ArrayBuffer;
    }, e.wrap = function(t, i, n, f) {
        if ("string" != typeof i && (f = n, n = i, i = void 0), "string" == typeof t) switch (void 0 === i && (i = "utf8"), 
        i) {
          case "base64":
            return e.fromBase64(t, n);

          case "hex":
            return e.fromHex(t, n);

          case "binary":
            return e.fromBinary(t, n);

          case "utf8":
            return e.fromUTF8(t, n);

          case "debug":
            return e.fromDebug(t, n);

          default:
            throw Error("Unsupported encoding: " + i);
        }
        if (null === t || "object" != typeof t) throw TypeError("Illegal buffer");
        var o;
        if (e.isByteBuffer(t)) return (o = r.clone.call(t)).markedOffset = -1, o;
        if (t instanceof Uint8Array) o = new e(0, n, f), t.length > 0 && (o.buffer = t.buffer, 
        o.offset = t.byteOffset, o.limit = t.byteOffset + t.byteLength, o.view = new Uint8Array(t.buffer)); else if (t instanceof ArrayBuffer) o = new e(0, n, f), 
        t.byteLength > 0 && (o.buffer = t, o.offset = 0, o.limit = t.byteLength, o.view = t.byteLength > 0 ? new Uint8Array(t) : null); else {
            if ("[object Array]" !== Object.prototype.toString.call(t)) throw TypeError("Illegal buffer");
            (o = new e(t.length, n, f)).limit = t.length;
            for (var s = 0; s < t.length; ++s) o.view[s] = t[s];
        }
        return o;
    }, r.writeBitSet = function(t, e) {
        var r = void 0 === e;
        if (r && (e = this.offset), !this.noAssert) {
            if (!(t instanceof Array)) throw TypeError("Illegal BitSet: Not an array");
            if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
            if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength);
        }
        var i, n = e, f = t.length, o = f >> 3, s = 0;
        for (e += this.writeVarint32(f, e); o--; ) i = 1 & !!t[s++] | (1 & !!t[s++]) << 1 | (1 & !!t[s++]) << 2 | (1 & !!t[s++]) << 3 | (1 & !!t[s++]) << 4 | (1 & !!t[s++]) << 5 | (1 & !!t[s++]) << 6 | (1 & !!t[s++]) << 7, 
        this.writeByte(i, e++);
        if (s < f) {
            var h = 0;
            for (i = 0; s < f; ) i |= (1 & !!t[s++]) << h++;
            this.writeByte(i, e++);
        }
        return r ? (this.offset = e, this) : e - n;
    }, r.readBitSet = function(t) {
        var e = void 0 === t;
        e && (t = this.offset);
        var r, i = this.readVarint32(t), n = i.value, f = n >> 3, o = 0, s = [];
        for (t += i.length; f--; ) r = this.readByte(t++), s[o++] = !!(1 & r), s[o++] = !!(2 & r), 
        s[o++] = !!(4 & r), s[o++] = !!(8 & r), s[o++] = !!(16 & r), s[o++] = !!(32 & r), 
        s[o++] = !!(64 & r), s[o++] = !!(128 & r);
        if (o < n) {
            var h = 0;
            for (r = this.readByte(t++); o < n; ) s[o++] = !!(r >> h++ & 1);
        }
        return e && (this.offset = t), s;
    }, r.readBytes = function(t, e) {
        var r = void 0 === e;
        if (r && (e = this.offset), !this.noAssert) {
            if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
            if ((e >>>= 0) < 0 || e + t > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+" + t + ") <= " + this.buffer.byteLength);
        }
        var i = this.slice(e, e + t);
        return r && (this.offset += t), i;
    }, r.writeBytes = r.append, r.writeInt8 = function(t, e) {
        var r = void 0 === e;
        if (r && (e = this.offset), !this.noAssert) {
            if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal value: " + t + " (not an integer)");
            if (t |= 0, "number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
            if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength);
        }
        e += 1;
        var i = this.buffer.byteLength;
        return e > i && this.resize((i *= 2) > e ? i : e), e -= 1, this.view[e] = t, r && (this.offset += 1), 
        this;
    }, r.writeByte = r.writeInt8, r.readInt8 = function(t) {
        var e = void 0 === t;
        if (e && (t = this.offset), !this.noAssert) {
            if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
            if ((t >>>= 0) < 0 || t + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+1) <= " + this.buffer.byteLength);
        }
        var r = this.view[t];
        return 128 == (128 & r) && (r = -(255 - r + 1)), e && (this.offset += 1), r;
    }, r.readByte = r.readInt8, r.writeUint8 = function(t, e) {
        var r = void 0 === e;
        if (r && (e = this.offset), !this.noAssert) {
            if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal value: " + t + " (not an integer)");
            if (t >>>= 0, "number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
            if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength);
        }
        e += 1;
        var i = this.buffer.byteLength;
        return e > i && this.resize((i *= 2) > e ? i : e), e -= 1, this.view[e] = t, r && (this.offset += 1), 
        this;
    }, r.writeUInt8 = r.writeUint8, r.readUint8 = function(t) {
        var e = void 0 === t;
        if (e && (t = this.offset), !this.noAssert) {
            if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
            if ((t >>>= 0) < 0 || t + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+1) <= " + this.buffer.byteLength);
        }
        var r = this.view[t];
        return e && (this.offset += 1), r;
    }, r.readUInt8 = r.readUint8, r.writeInt16 = function(t, e) {
        var r = void 0 === e;
        if (r && (e = this.offset), !this.noAssert) {
            if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal value: " + t + " (not an integer)");
            if (t |= 0, "number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
            if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength);
        }
        e += 2;
        var i = this.buffer.byteLength;
        return e > i && this.resize((i *= 2) > e ? i : e), e -= 2, this.littleEndian ? (this.view[e + 1] = (65280 & t) >>> 8, 
        this.view[e] = 255 & t) : (this.view[e] = (65280 & t) >>> 8, this.view[e + 1] = 255 & t), 
        r && (this.offset += 2), this;
    }, r.writeShort = r.writeInt16, r.readInt16 = function(t) {
        var e = void 0 === t;
        if (e && (t = this.offset), !this.noAssert) {
            if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
            if ((t >>>= 0) < 0 || t + 2 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+2) <= " + this.buffer.byteLength);
        }
        var r = 0;
        return this.littleEndian ? (r = this.view[t], r |= this.view[t + 1] << 8) : (r = this.view[t] << 8, 
        r |= this.view[t + 1]), 32768 == (32768 & r) && (r = -(65535 - r + 1)), e && (this.offset += 2), 
        r;
    }, r.readShort = r.readInt16, r.writeUint16 = function(t, e) {
        var r = void 0 === e;
        if (r && (e = this.offset), !this.noAssert) {
            if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal value: " + t + " (not an integer)");
            if (t >>>= 0, "number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
            if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength);
        }
        e += 2;
        var i = this.buffer.byteLength;
        return e > i && this.resize((i *= 2) > e ? i : e), e -= 2, this.littleEndian ? (this.view[e + 1] = (65280 & t) >>> 8, 
        this.view[e] = 255 & t) : (this.view[e] = (65280 & t) >>> 8, this.view[e + 1] = 255 & t), 
        r && (this.offset += 2), this;
    }, r.writeUInt16 = r.writeUint16, r.readUint16 = function(t) {
        var e = void 0 === t;
        if (e && (t = this.offset), !this.noAssert) {
            if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
            if ((t >>>= 0) < 0 || t + 2 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+2) <= " + this.buffer.byteLength);
        }
        var r = 0;
        return this.littleEndian ? (r = this.view[t], r |= this.view[t + 1] << 8) : (r = this.view[t] << 8, 
        r |= this.view[t + 1]), e && (this.offset += 2), r;
    }, r.readUInt16 = r.readUint16, r.writeInt32 = function(t, e) {
        var r = void 0 === e;
        if (r && (e = this.offset), !this.noAssert) {
            if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal value: " + t + " (not an integer)");
            if (t |= 0, "number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
            if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength);
        }
        e += 4;
        var i = this.buffer.byteLength;
        return e > i && this.resize((i *= 2) > e ? i : e), e -= 4, this.littleEndian ? (this.view[e + 3] = t >>> 24 & 255, 
        this.view[e + 2] = t >>> 16 & 255, this.view[e + 1] = t >>> 8 & 255, this.view[e] = 255 & t) : (this.view[e] = t >>> 24 & 255, 
        this.view[e + 1] = t >>> 16 & 255, this.view[e + 2] = t >>> 8 & 255, this.view[e + 3] = 255 & t), 
        r && (this.offset += 4), this;
    }, r.writeInt = r.writeInt32, r.readInt32 = function(t) {
        var e = void 0 === t;
        if (e && (t = this.offset), !this.noAssert) {
            if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
            if ((t >>>= 0) < 0 || t + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+4) <= " + this.buffer.byteLength);
        }
        var r = 0;
        return this.littleEndian ? (r = this.view[t + 2] << 16, r |= this.view[t + 1] << 8, 
        r |= this.view[t], r += this.view[t + 3] << 24 >>> 0) : (r = this.view[t + 1] << 16, 
        r |= this.view[t + 2] << 8, r |= this.view[t + 3], r += this.view[t] << 24 >>> 0), 
        r |= 0, e && (this.offset += 4), r;
    }, r.readInt = r.readInt32, r.writeUint32 = function(t, e) {
        var r = void 0 === e;
        if (r && (e = this.offset), !this.noAssert) {
            if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal value: " + t + " (not an integer)");
            if (t >>>= 0, "number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
            if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength);
        }
        e += 4;
        var i = this.buffer.byteLength;
        return e > i && this.resize((i *= 2) > e ? i : e), e -= 4, this.littleEndian ? (this.view[e + 3] = t >>> 24 & 255, 
        this.view[e + 2] = t >>> 16 & 255, this.view[e + 1] = t >>> 8 & 255, this.view[e] = 255 & t) : (this.view[e] = t >>> 24 & 255, 
        this.view[e + 1] = t >>> 16 & 255, this.view[e + 2] = t >>> 8 & 255, this.view[e + 3] = 255 & t), 
        r && (this.offset += 4), this;
    }, r.writeUInt32 = r.writeUint32, r.readUint32 = function(t) {
        var e = void 0 === t;
        if (e && (t = this.offset), !this.noAssert) {
            if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
            if ((t >>>= 0) < 0 || t + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+4) <= " + this.buffer.byteLength);
        }
        var r = 0;
        return this.littleEndian ? (r = this.view[t + 2] << 16, r |= this.view[t + 1] << 8, 
        r |= this.view[t], r += this.view[t + 3] << 24 >>> 0) : (r = this.view[t + 1] << 16, 
        r |= this.view[t + 2] << 8, r |= this.view[t + 3], r += this.view[t] << 24 >>> 0), 
        e && (this.offset += 4), r;
    }, r.readUInt32 = r.readUint32, t && (r.writeInt64 = function(e, r) {
        var i = void 0 === r;
        if (i && (r = this.offset), !this.noAssert) {
            if ("number" == typeof e) e = t.fromNumber(e); else if ("string" == typeof e) e = t.fromString(e); else if (!(e && e instanceof t)) throw TypeError("Illegal value: " + e + " (not an integer or Long)");
            if ("number" != typeof r || r % 1 != 0) throw TypeError("Illegal offset: " + r + " (not an integer)");
            if ((r >>>= 0) < 0 || r + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + r + " (+0) <= " + this.buffer.byteLength);
        }
        "number" == typeof e ? e = t.fromNumber(e) : "string" == typeof e && (e = t.fromString(e)), 
        r += 8;
        var n = this.buffer.byteLength;
        r > n && this.resize((n *= 2) > r ? n : r), r -= 8;
        var f = e.low, o = e.high;
        return this.littleEndian ? (this.view[r + 3] = f >>> 24 & 255, this.view[r + 2] = f >>> 16 & 255, 
        this.view[r + 1] = f >>> 8 & 255, this.view[r] = 255 & f, r += 4, this.view[r + 3] = o >>> 24 & 255, 
        this.view[r + 2] = o >>> 16 & 255, this.view[r + 1] = o >>> 8 & 255, this.view[r] = 255 & o) : (this.view[r] = o >>> 24 & 255, 
        this.view[r + 1] = o >>> 16 & 255, this.view[r + 2] = o >>> 8 & 255, this.view[r + 3] = 255 & o, 
        r += 4, this.view[r] = f >>> 24 & 255, this.view[r + 1] = f >>> 16 & 255, this.view[r + 2] = f >>> 8 & 255, 
        this.view[r + 3] = 255 & f), i && (this.offset += 8), this;
    }, r.writeLong = r.writeInt64, r.readInt64 = function(e) {
        var r = void 0 === e;
        if (r && (e = this.offset), !this.noAssert) {
            if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
            if ((e >>>= 0) < 0 || e + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+8) <= " + this.buffer.byteLength);
        }
        var i = 0, n = 0;
        this.littleEndian ? (i = this.view[e + 2] << 16, i |= this.view[e + 1] << 8, i |= this.view[e], 
        i += this.view[e + 3] << 24 >>> 0, e += 4, n = this.view[e + 2] << 16, n |= this.view[e + 1] << 8, 
        n |= this.view[e], n += this.view[e + 3] << 24 >>> 0) : (n = this.view[e + 1] << 16, 
        n |= this.view[e + 2] << 8, n |= this.view[e + 3], n += this.view[e] << 24 >>> 0, 
        e += 4, i = this.view[e + 1] << 16, i |= this.view[e + 2] << 8, i |= this.view[e + 3], 
        i += this.view[e] << 24 >>> 0);
        var f = new t(i, n, !1);
        return r && (this.offset += 8), f;
    }, r.readLong = r.readInt64, r.writeUint64 = function(e, r) {
        var i = void 0 === r;
        if (i && (r = this.offset), !this.noAssert) {
            if ("number" == typeof e) e = t.fromNumber(e); else if ("string" == typeof e) e = t.fromString(e); else if (!(e && e instanceof t)) throw TypeError("Illegal value: " + e + " (not an integer or Long)");
            if ("number" != typeof r || r % 1 != 0) throw TypeError("Illegal offset: " + r + " (not an integer)");
            if ((r >>>= 0) < 0 || r + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + r + " (+0) <= " + this.buffer.byteLength);
        }
        "number" == typeof e ? e = t.fromNumber(e) : "string" == typeof e && (e = t.fromString(e)), 
        r += 8;
        var n = this.buffer.byteLength;
        r > n && this.resize((n *= 2) > r ? n : r), r -= 8;
        var f = e.low, o = e.high;
        return this.littleEndian ? (this.view[r + 3] = f >>> 24 & 255, this.view[r + 2] = f >>> 16 & 255, 
        this.view[r + 1] = f >>> 8 & 255, this.view[r] = 255 & f, r += 4, this.view[r + 3] = o >>> 24 & 255, 
        this.view[r + 2] = o >>> 16 & 255, this.view[r + 1] = o >>> 8 & 255, this.view[r] = 255 & o) : (this.view[r] = o >>> 24 & 255, 
        this.view[r + 1] = o >>> 16 & 255, this.view[r + 2] = o >>> 8 & 255, this.view[r + 3] = 255 & o, 
        r += 4, this.view[r] = f >>> 24 & 255, this.view[r + 1] = f >>> 16 & 255, this.view[r + 2] = f >>> 8 & 255, 
        this.view[r + 3] = 255 & f), i && (this.offset += 8), this;
    }, r.writeUInt64 = r.writeUint64, r.readUint64 = function(e) {
        var r = void 0 === e;
        if (r && (e = this.offset), !this.noAssert) {
            if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
            if ((e >>>= 0) < 0 || e + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+8) <= " + this.buffer.byteLength);
        }
        var i = 0, n = 0;
        this.littleEndian ? (i = this.view[e + 2] << 16, i |= this.view[e + 1] << 8, i |= this.view[e], 
        i += this.view[e + 3] << 24 >>> 0, e += 4, n = this.view[e + 2] << 16, n |= this.view[e + 1] << 8, 
        n |= this.view[e], n += this.view[e + 3] << 24 >>> 0) : (n = this.view[e + 1] << 16, 
        n |= this.view[e + 2] << 8, n |= this.view[e + 3], n += this.view[e] << 24 >>> 0, 
        e += 4, i = this.view[e + 1] << 16, i |= this.view[e + 2] << 8, i |= this.view[e + 3], 
        i += this.view[e] << 24 >>> 0);
        var f = new t(i, n, !0);
        return r && (this.offset += 8), f;
    }, r.readUInt64 = r.readUint64), r.writeFloat32 = function(t, e) {
        var r = void 0 === e;
        if (r && (e = this.offset), !this.noAssert) {
            if ("number" != typeof t) throw TypeError("Illegal value: " + t + " (not a number)");
            if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
            if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength);
        }
        e += 4;
        var i = this.buffer.byteLength;
        return e > i && this.resize((i *= 2) > e ? i : e), e -= 4, ieee754_write(this.view, t, e, this.littleEndian, 23, 4), 
        r && (this.offset += 4), this;
    }, r.writeFloat = r.writeFloat32, r.readFloat32 = function(t) {
        var e = void 0 === t;
        if (e && (t = this.offset), !this.noAssert) {
            if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
            if ((t >>>= 0) < 0 || t + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+4) <= " + this.buffer.byteLength);
        }
        var r = ieee754_read(this.view, t, this.littleEndian, 23, 4);
        return e && (this.offset += 4), r;
    }, r.readFloat = r.readFloat32, r.writeFloat64 = function(t, e) {
        var r = void 0 === e;
        if (r && (e = this.offset), !this.noAssert) {
            if ("number" != typeof t) throw TypeError("Illegal value: " + t + " (not a number)");
            if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
            if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength);
        }
        e += 8;
        var i = this.buffer.byteLength;
        return e > i && this.resize((i *= 2) > e ? i : e), e -= 8, ieee754_write(this.view, t, e, this.littleEndian, 52, 8), 
        r && (this.offset += 8), this;
    }, r.writeDouble = r.writeFloat64, r.readFloat64 = function(t) {
        var e = void 0 === t;
        if (e && (t = this.offset), !this.noAssert) {
            if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
            if ((t >>>= 0) < 0 || t + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+8) <= " + this.buffer.byteLength);
        }
        var r = ieee754_read(this.view, t, this.littleEndian, 52, 8);
        return e && (this.offset += 8), r;
    }, r.readDouble = r.readFloat64, e.MAX_VARINT32_BYTES = 5, e.calculateVarint32 = function(t) {
        return (t >>>= 0) < 128 ? 1 : t < 16384 ? 2 : t < 1 << 21 ? 3 : t < 1 << 28 ? 4 : 5;
    }, e.zigZagEncode32 = function(t) {
        return ((t |= 0) << 1 ^ t >> 31) >>> 0;
    }, e.zigZagDecode32 = function(t) {
        return t >>> 1 ^ -(1 & t) | 0;
    }, r.writeVarint32 = function(t, r) {
        var i = void 0 === r;
        if (i && (r = this.offset), !this.noAssert) {
            if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal value: " + t + " (not an integer)");
            if (t |= 0, "number" != typeof r || r % 1 != 0) throw TypeError("Illegal offset: " + r + " (not an integer)");
            if ((r >>>= 0) < 0 || r + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + r + " (+0) <= " + this.buffer.byteLength);
        }
        var n, f = e.calculateVarint32(t);
        r += f;
        var o = this.buffer.byteLength;
        for (r > o && this.resize((o *= 2) > r ? o : r), r -= f, t >>>= 0; t >= 128; ) n = 127 & t | 128, 
        this.view[r++] = n, t >>>= 7;
        return this.view[r++] = t, i ? (this.offset = r, this) : f;
    }, r.writeVarint32ZigZag = function(t, r) {
        return this.writeVarint32(e.zigZagEncode32(t), r);
    }, r.readVarint32 = function(t) {
        var e = void 0 === t;
        if (e && (t = this.offset), !this.noAssert) {
            if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
            if ((t >>>= 0) < 0 || t + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+1) <= " + this.buffer.byteLength);
        }
        var r, i = 0, n = 0;
        do {
            if (!this.noAssert && t > this.limit) {
                var f = Error("Truncated");
                throw f.truncated = !0, f;
            }
            r = this.view[t++], i < 5 && (n |= (127 & r) << 7 * i), ++i;
        } while (0 != (128 & r));
        return n |= 0, e ? (this.offset = t, n) : {
            value: n,
            length: i
        };
    }, r.readVarint32ZigZag = function(t) {
        var r = this.readVarint32(t);
        return "object" == typeof r ? r.value = e.zigZagDecode32(r.value) : r = e.zigZagDecode32(r), 
        r;
    }, t && (e.MAX_VARINT64_BYTES = 10, e.calculateVarint64 = function(e) {
        "number" == typeof e ? e = t.fromNumber(e) : "string" == typeof e && (e = t.fromString(e));
        var r = e.toInt() >>> 0, i = e.shiftRightUnsigned(28).toInt() >>> 0, n = e.shiftRightUnsigned(56).toInt() >>> 0;
        return 0 == n ? 0 == i ? r < 16384 ? r < 128 ? 1 : 2 : r < 1 << 21 ? 3 : 4 : i < 16384 ? i < 128 ? 5 : 6 : i < 1 << 21 ? 7 : 8 : n < 128 ? 9 : 10;
    }, e.zigZagEncode64 = function(e) {
        return "number" == typeof e ? e = t.fromNumber(e, !1) : "string" == typeof e ? e = t.fromString(e, !1) : !1 !== e.unsigned && (e = e.toSigned()), 
        e.shiftLeft(1).xor(e.shiftRight(63)).toUnsigned();
    }, e.zigZagDecode64 = function(e) {
        return "number" == typeof e ? e = t.fromNumber(e, !1) : "string" == typeof e ? e = t.fromString(e, !1) : !1 !== e.unsigned && (e = e.toSigned()), 
        e.shiftRightUnsigned(1).xor(e.and(t.ONE).toSigned().negate()).toSigned();
    }, r.writeVarint64 = function(r, i) {
        var n = void 0 === i;
        if (n && (i = this.offset), !this.noAssert) {
            if ("number" == typeof r) r = t.fromNumber(r); else if ("string" == typeof r) r = t.fromString(r); else if (!(r && r instanceof t)) throw TypeError("Illegal value: " + r + " (not an integer or Long)");
            if ("number" != typeof i || i % 1 != 0) throw TypeError("Illegal offset: " + i + " (not an integer)");
            if ((i >>>= 0) < 0 || i + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + i + " (+0) <= " + this.buffer.byteLength);
        }
        "number" == typeof r ? r = t.fromNumber(r, !1) : "string" == typeof r ? r = t.fromString(r, !1) : !1 !== r.unsigned && (r = r.toSigned());
        var f = e.calculateVarint64(r), o = r.toInt() >>> 0, s = r.shiftRightUnsigned(28).toInt() >>> 0, h = r.shiftRightUnsigned(56).toInt() >>> 0;
        i += f;
        var a = this.buffer.byteLength;
        switch (i > a && this.resize((a *= 2) > i ? a : i), i -= f, f) {
          case 10:
            this.view[i + 9] = h >>> 7 & 1;

          case 9:
            this.view[i + 8] = 9 !== f ? 128 | h : 127 & h;

          case 8:
            this.view[i + 7] = 8 !== f ? s >>> 21 | 128 : s >>> 21 & 127;

          case 7:
            this.view[i + 6] = 7 !== f ? s >>> 14 | 128 : s >>> 14 & 127;

          case 6:
            this.view[i + 5] = 6 !== f ? s >>> 7 | 128 : s >>> 7 & 127;

          case 5:
            this.view[i + 4] = 5 !== f ? 128 | s : 127 & s;

          case 4:
            this.view[i + 3] = 4 !== f ? o >>> 21 | 128 : o >>> 21 & 127;

          case 3:
            this.view[i + 2] = 3 !== f ? o >>> 14 | 128 : o >>> 14 & 127;

          case 2:
            this.view[i + 1] = 2 !== f ? o >>> 7 | 128 : o >>> 7 & 127;

          case 1:
            this.view[i] = 1 !== f ? 128 | o : 127 & o;
        }
        return n ? (this.offset += f, this) : f;
    }, r.writeVarint64ZigZag = function(t, r) {
        return this.writeVarint64(e.zigZagEncode64(t), r);
    }, r.readVarint64 = function(e) {
        var r = void 0 === e;
        if (r && (e = this.offset), !this.noAssert) {
            if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
            if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength);
        }
        var i = e, n = 0, f = 0, o = 0, s = 0;
        if (n = 127 & (s = this.view[e++]), 128 & s && (n |= (127 & (s = this.view[e++])) << 7, 
        (128 & s || this.noAssert && void 0 === s) && (n |= (127 & (s = this.view[e++])) << 14, 
        (128 & s || this.noAssert && void 0 === s) && (n |= (127 & (s = this.view[e++])) << 21, 
        (128 & s || this.noAssert && void 0 === s) && (f = 127 & (s = this.view[e++]), (128 & s || this.noAssert && void 0 === s) && (f |= (127 & (s = this.view[e++])) << 7, 
        (128 & s || this.noAssert && void 0 === s) && (f |= (127 & (s = this.view[e++])) << 14, 
        (128 & s || this.noAssert && void 0 === s) && (f |= (127 & (s = this.view[e++])) << 21, 
        (128 & s || this.noAssert && void 0 === s) && (o = 127 & (s = this.view[e++]), (128 & s || this.noAssert && void 0 === s) && (o |= (127 & (s = this.view[e++])) << 7, 
        128 & s || this.noAssert && void 0 === s)))))))))) throw Error("Buffer overrun");
        var h = t.fromBits(n | f << 28, f >>> 4 | o << 24, !1);
        return r ? (this.offset = e, h) : {
            value: h,
            length: e - i
        };
    }, r.readVarint64ZigZag = function(r) {
        var i = this.readVarint64(r);
        return i && i.value instanceof t ? i.value = e.zigZagDecode64(i.value) : i = e.zigZagDecode64(i), 
        i;
    }), r.writeCString = function(t, e) {
        var r = void 0 === e;
        r && (e = this.offset);
        var i, n = t.length;
        if (!this.noAssert) {
            if ("string" != typeof t) throw TypeError("Illegal str: Not a string");
            for (i = 0; i < n; ++i) if (0 === t.charCodeAt(i)) throw RangeError("Illegal str: Contains NULL-characters");
            if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
            if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength);
        }
        n = o.calculateUTF16asUTF8(stringSource(t))[1], e += n + 1;
        var f = this.buffer.byteLength;
        return e > f && this.resize((f *= 2) > e ? f : e), e -= n + 1, o.encodeUTF16toUTF8(stringSource(t), function(t) {
            this.view[e++] = t;
        }.bind(this)), this.view[e++] = 0, r ? (this.offset = e, this) : n;
    }, r.readCString = function(t) {
        var e = void 0 === t;
        if (e && (t = this.offset), !this.noAssert) {
            if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
            if ((t >>>= 0) < 0 || t + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+1) <= " + this.buffer.byteLength);
        }
        var r, i = t, n = -1;
        return o.decodeUTF8toUTF16(function() {
            if (0 === n) return null;
            if (t >= this.limit) throw RangeError("Illegal range: Truncated data, " + t + " < " + this.limit);
            return 0 === (n = this.view[t++]) ? null : n;
        }.bind(this), r = stringDestination(), !0), e ? (this.offset = t, r()) : {
            string: r(),
            length: t - i
        };
    }, r.writeIString = function(t, e) {
        var r = void 0 === e;
        if (r && (e = this.offset), !this.noAssert) {
            if ("string" != typeof t) throw TypeError("Illegal str: Not a string");
            if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
            if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength);
        }
        var i, n = e;
        i = o.calculateUTF16asUTF8(stringSource(t), this.noAssert)[1], e += 4 + i;
        var f = this.buffer.byteLength;
        if (e > f && this.resize((f *= 2) > e ? f : e), e -= 4 + i, this.littleEndian ? (this.view[e + 3] = i >>> 24 & 255, 
        this.view[e + 2] = i >>> 16 & 255, this.view[e + 1] = i >>> 8 & 255, this.view[e] = 255 & i) : (this.view[e] = i >>> 24 & 255, 
        this.view[e + 1] = i >>> 16 & 255, this.view[e + 2] = i >>> 8 & 255, this.view[e + 3] = 255 & i), 
        e += 4, o.encodeUTF16toUTF8(stringSource(t), function(t) {
            this.view[e++] = t;
        }.bind(this)), e !== n + 4 + i) throw RangeError("Illegal range: Truncated data, " + e + " == " + (e + 4 + i));
        return r ? (this.offset = e, this) : e - n;
    }, r.readIString = function(t) {
        var r = void 0 === t;
        if (r && (t = this.offset), !this.noAssert) {
            if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
            if ((t >>>= 0) < 0 || t + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+4) <= " + this.buffer.byteLength);
        }
        var i = t, n = this.readUint32(t), f = this.readUTF8String(n, e.METRICS_BYTES, t += 4);
        return t += f.length, r ? (this.offset = t, f.string) : {
            string: f.string,
            length: t - i
        };
    }, e.METRICS_CHARS = "c", e.METRICS_BYTES = "b", r.writeUTF8String = function(t, e) {
        var r, i = void 0 === e;
        if (i && (e = this.offset), !this.noAssert) {
            if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
            if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength);
        }
        var n = e;
        r = o.calculateUTF16asUTF8(stringSource(t))[1], e += r;
        var f = this.buffer.byteLength;
        return e > f && this.resize((f *= 2) > e ? f : e), e -= r, o.encodeUTF16toUTF8(stringSource(t), function(t) {
            this.view[e++] = t;
        }.bind(this)), i ? (this.offset = e, this) : e - n;
    }, r.writeString = r.writeUTF8String, e.calculateUTF8Chars = function(t) {
        return o.calculateUTF16asUTF8(stringSource(t))[0];
    }, e.calculateUTF8Bytes = function(t) {
        return o.calculateUTF16asUTF8(stringSource(t))[1];
    }, e.calculateString = e.calculateUTF8Bytes, r.readUTF8String = function(t, r, i) {
        "number" == typeof r && (i = r, r = void 0);
        var n = void 0 === i;
        if (n && (i = this.offset), void 0 === r && (r = e.METRICS_CHARS), !this.noAssert) {
            if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal length: " + t + " (not an integer)");
            if (t |= 0, "number" != typeof i || i % 1 != 0) throw TypeError("Illegal offset: " + i + " (not an integer)");
            if ((i >>>= 0) < 0 || i + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + i + " (+0) <= " + this.buffer.byteLength);
        }
        var f, s = 0, h = i;
        if (r === e.METRICS_CHARS) {
            if (f = stringDestination(), o.decodeUTF8(function() {
                return s < t && i < this.limit ? this.view[i++] : null;
            }.bind(this), function(t) {
                ++s, o.UTF8toUTF16(t, f);
            }), s !== t) throw RangeError("Illegal range: Truncated data, " + s + " == " + t);
            return n ? (this.offset = i, f()) : {
                string: f(),
                length: i - h
            };
        }
        if (r === e.METRICS_BYTES) {
            if (!this.noAssert) {
                if ("number" != typeof i || i % 1 != 0) throw TypeError("Illegal offset: " + i + " (not an integer)");
                if ((i >>>= 0) < 0 || i + t > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + i + " (+" + t + ") <= " + this.buffer.byteLength);
            }
            var a = i + t;
            if (o.decodeUTF8toUTF16(function() {
                return i < a ? this.view[i++] : null;
            }.bind(this), f = stringDestination(), this.noAssert), i !== a) throw RangeError("Illegal range: Truncated data, " + i + " == " + a);
            return n ? (this.offset = i, f()) : {
                string: f(),
                length: i - h
            };
        }
        throw TypeError("Unsupported metrics: " + r);
    }, r.readString = r.readUTF8String, r.writeVString = function(t, r) {
        var i = void 0 === r;
        if (i && (r = this.offset), !this.noAssert) {
            if ("string" != typeof t) throw TypeError("Illegal str: Not a string");
            if ("number" != typeof r || r % 1 != 0) throw TypeError("Illegal offset: " + r + " (not an integer)");
            if ((r >>>= 0) < 0 || r + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + r + " (+0) <= " + this.buffer.byteLength);
        }
        var n, f, s = r;
        n = o.calculateUTF16asUTF8(stringSource(t), this.noAssert)[1], f = e.calculateVarint32(n), 
        r += f + n;
        var h = this.buffer.byteLength;
        if (r > h && this.resize((h *= 2) > r ? h : r), r -= f + n, r += this.writeVarint32(n, r), 
        o.encodeUTF16toUTF8(stringSource(t), function(t) {
            this.view[r++] = t;
        }.bind(this)), r !== s + n + f) throw RangeError("Illegal range: Truncated data, " + r + " == " + (r + n + f));
        return i ? (this.offset = r, this) : r - s;
    }, r.readVString = function(t) {
        var r = void 0 === t;
        if (r && (t = this.offset), !this.noAssert) {
            if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
            if ((t >>>= 0) < 0 || t + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+1) <= " + this.buffer.byteLength);
        }
        var i = t, n = this.readVarint32(t), f = this.readUTF8String(n.value, e.METRICS_BYTES, t += n.length);
        return t += f.length, r ? (this.offset = t, f.string) : {
            string: f.string,
            length: t - i
        };
    }, r.append = function(t, r, i) {
        "number" != typeof r && "string" == typeof r || (i = r, r = void 0);
        var n = void 0 === i;
        if (n && (i = this.offset), !this.noAssert) {
            if ("number" != typeof i || i % 1 != 0) throw TypeError("Illegal offset: " + i + " (not an integer)");
            if ((i >>>= 0) < 0 || i + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + i + " (+0) <= " + this.buffer.byteLength);
        }
        t instanceof e || (t = e.wrap(t, r));
        var f = t.limit - t.offset;
        if (f <= 0) return this;
        i += f;
        var o = this.buffer.byteLength;
        return i > o && this.resize((o *= 2) > i ? o : i), i -= f, this.view.set(t.view.subarray(t.offset, t.limit), i), 
        t.offset += f, n && (this.offset += f), this;
    }, r.appendTo = function(t, e) {
        return t.append(this, e), this;
    }, r.assert = function(t) {
        return this.noAssert = !t, this;
    }, r.capacity = function() {
        return this.buffer.byteLength;
    }, r.clear = function() {
        return this.offset = 0, this.limit = this.buffer.byteLength, this.markedOffset = -1, 
        this;
    }, r.clone = function(t) {
        var r = new e(0, this.littleEndian, this.noAssert);
        return t ? (r.buffer = new ArrayBuffer(this.buffer.byteLength), r.view = new Uint8Array(r.buffer)) : (r.buffer = this.buffer, 
        r.view = this.view), r.offset = this.offset, r.markedOffset = this.markedOffset, 
        r.limit = this.limit, r;
    }, r.compact = function(t, e) {
        if (void 0 === t && (t = this.offset), void 0 === e && (e = this.limit), !this.noAssert) {
            if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal begin: Not an integer");
            if (t >>>= 0, "number" != typeof e || e % 1 != 0) throw TypeError("Illegal end: Not an integer");
            if (e >>>= 0, t < 0 || t > e || e > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + t + " <= " + e + " <= " + this.buffer.byteLength);
        }
        if (0 === t && e === this.buffer.byteLength) return this;
        var r = e - t;
        if (0 === r) return this.buffer = i, this.view = null, this.markedOffset >= 0 && (this.markedOffset -= t), 
        this.offset = 0, this.limit = 0, this;
        var n = new ArrayBuffer(r), f = new Uint8Array(n);
        return f.set(this.view.subarray(t, e)), this.buffer = n, this.view = f, this.markedOffset >= 0 && (this.markedOffset -= t), 
        this.offset = 0, this.limit = r, this;
    }, r.copy = function(t, r) {
        if (void 0 === t && (t = this.offset), void 0 === r && (r = this.limit), !this.noAssert) {
            if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal begin: Not an integer");
            if (t >>>= 0, "number" != typeof r || r % 1 != 0) throw TypeError("Illegal end: Not an integer");
            if (r >>>= 0, t < 0 || t > r || r > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + t + " <= " + r + " <= " + this.buffer.byteLength);
        }
        if (t === r) return new e(0, this.littleEndian, this.noAssert);
        var i = r - t, n = new e(i, this.littleEndian, this.noAssert);
        return n.offset = 0, n.limit = i, n.markedOffset >= 0 && (n.markedOffset -= t), 
        this.copyTo(n, 0, t, r), n;
    }, r.copyTo = function(t, r, i, n) {
        var f, o;
        if (!this.noAssert && !e.isByteBuffer(t)) throw TypeError("Illegal target: Not a ByteBuffer");
        if (r = (o = void 0 === r) ? t.offset : 0 | r, i = (f = void 0 === i) ? this.offset : 0 | i, 
        n = void 0 === n ? this.limit : 0 | n, r < 0 || r > t.buffer.byteLength) throw RangeError("Illegal target range: 0 <= " + r + " <= " + t.buffer.byteLength);
        if (i < 0 || n > this.buffer.byteLength) throw RangeError("Illegal source range: 0 <= " + i + " <= " + this.buffer.byteLength);
        var s = n - i;
        return 0 === s ? t : (t.ensureCapacity(r + s), t.view.set(this.view.subarray(i, n), r), 
        f && (this.offset += s), o && (t.offset += s), this);
    }, r.ensureCapacity = function(t) {
        var e = this.buffer.byteLength;
        return e < t ? this.resize((e *= 2) > t ? e : t) : this;
    }, r.fill = function(t, e, r) {
        var i = void 0 === e;
        if (i && (e = this.offset), "string" == typeof t && t.length > 0 && (t = t.charCodeAt(0)), 
        void 0 === e && (e = this.offset), void 0 === r && (r = this.limit), !this.noAssert) {
            if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal value: " + t + " (not an integer)");
            if (t |= 0, "number" != typeof e || e % 1 != 0) throw TypeError("Illegal begin: Not an integer");
            if (e >>>= 0, "number" != typeof r || r % 1 != 0) throw TypeError("Illegal end: Not an integer");
            if (r >>>= 0, e < 0 || e > r || r > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + r + " <= " + this.buffer.byteLength);
        }
        if (e >= r) return this;
        for (;e < r; ) this.view[e++] = t;
        return i && (this.offset = e), this;
    }, r.flip = function() {
        return this.limit = this.offset, this.offset = 0, this;
    }, r.mark = function(t) {
        if (t = void 0 === t ? this.offset : t, !this.noAssert) {
            if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
            if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
        }
        return this.markedOffset = t, this;
    }, r.order = function(t) {
        if (!this.noAssert && "boolean" != typeof t) throw TypeError("Illegal littleEndian: Not a boolean");
        return this.littleEndian = !!t, this;
    }, r.LE = function(t) {
        return this.littleEndian = void 0 === t || !!t, this;
    }, r.BE = function(t) {
        return this.littleEndian = void 0 !== t && !t, this;
    }, r.prepend = function(t, r, i) {
        "number" != typeof r && "string" == typeof r || (i = r, r = void 0);
        var n = void 0 === i;
        if (n && (i = this.offset), !this.noAssert) {
            if ("number" != typeof i || i % 1 != 0) throw TypeError("Illegal offset: " + i + " (not an integer)");
            if ((i >>>= 0) < 0 || i + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + i + " (+0) <= " + this.buffer.byteLength);
        }
        t instanceof e || (t = e.wrap(t, r));
        var f = t.limit - t.offset;
        if (f <= 0) return this;
        var o = f - i;
        if (o > 0) {
            var s = new ArrayBuffer(this.buffer.byteLength + o), h = new Uint8Array(s);
            h.set(this.view.subarray(i, this.buffer.byteLength), f), this.buffer = s, this.view = h, 
            this.offset += o, this.markedOffset >= 0 && (this.markedOffset += o), this.limit += o, 
            i += o;
        } else new Uint8Array(this.buffer);
        return this.view.set(t.view.subarray(t.offset, t.limit), i - f), t.offset = t.limit, 
        n && (this.offset -= f), this;
    }, r.prependTo = function(t, e) {
        return t.prepend(this, e), this;
    }, r.printDebug = function(t) {
        "function" != typeof t && (t = console.log.bind(console)), t(this.toString() + "\n-------------------------------------------------------------------\n" + this.toDebug(!0));
    }, r.remaining = function() {
        return this.limit - this.offset;
    }, r.reset = function() {
        return this.markedOffset >= 0 ? (this.offset = this.markedOffset, this.markedOffset = -1) : this.offset = 0, 
        this;
    }, r.resize = function(t) {
        if (!this.noAssert) {
            if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal capacity: " + t + " (not an integer)");
            if ((t |= 0) < 0) throw RangeError("Illegal capacity: 0 <= " + t);
        }
        if (this.buffer.byteLength < t) {
            var e = new ArrayBuffer(t), r = new Uint8Array(e);
            r.set(this.view), this.buffer = e, this.view = r;
        }
        return this;
    }, r.reverse = function(t, e) {
        if (void 0 === t && (t = this.offset), void 0 === e && (e = this.limit), !this.noAssert) {
            if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal begin: Not an integer");
            if (t >>>= 0, "number" != typeof e || e % 1 != 0) throw TypeError("Illegal end: Not an integer");
            if (e >>>= 0, t < 0 || t > e || e > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + t + " <= " + e + " <= " + this.buffer.byteLength);
        }
        return t === e ? this : (Array.prototype.reverse.call(this.view.subarray(t, e)), 
        this);
    }, r.skip = function(t) {
        if (!this.noAssert) {
            if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal length: " + t + " (not an integer)");
            t |= 0;
        }
        var e = this.offset + t;
        if (!this.noAssert && (e < 0 || e > this.buffer.byteLength)) throw RangeError("Illegal length: 0 <= " + this.offset + " + " + t + " <= " + this.buffer.byteLength);
        return this.offset = e, this;
    }, r.slice = function(t, e) {
        if (void 0 === t && (t = this.offset), void 0 === e && (e = this.limit), !this.noAssert) {
            if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal begin: Not an integer");
            if (t >>>= 0, "number" != typeof e || e % 1 != 0) throw TypeError("Illegal end: Not an integer");
            if (e >>>= 0, t < 0 || t > e || e > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + t + " <= " + e + " <= " + this.buffer.byteLength);
        }
        var r = this.clone();
        return r.offset = t, r.limit = e, r;
    }, r.toBuffer = function(t) {
        var e = this.offset, r = this.limit;
        if (!this.noAssert) {
            if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: Not an integer");
            if (e >>>= 0, "number" != typeof r || r % 1 != 0) throw TypeError("Illegal limit: Not an integer");
            if (r >>>= 0, e < 0 || e > r || r > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + r + " <= " + this.buffer.byteLength);
        }
        if (!t && 0 === e && r === this.buffer.byteLength) return this.buffer;
        if (e === r) return i;
        var n = new ArrayBuffer(r - e);
        return new Uint8Array(n).set(new Uint8Array(this.buffer).subarray(e, r), 0), n;
    }, r.toArrayBuffer = r.toBuffer, r.toString = function(t, e, r) {
        if (void 0 === t) return "ByteBufferAB(offset=" + this.offset + ",markedOffset=" + this.markedOffset + ",limit=" + this.limit + ",capacity=" + this.capacity() + ")";
        switch ("number" == typeof t && (r = e = t = "utf8"), t) {
          case "utf8":
            return this.toUTF8(e, r);

          case "base64":
            return this.toBase64(e, r);

          case "hex":
            return this.toHex(e, r);

          case "binary":
            return this.toBinary(e, r);

          case "debug":
            return this.toDebug();

          case "columns":
            return this.toColumns();

          default:
            throw Error("Unsupported encoding: " + t);
        }
    };
    var f = function() {
        for (var t = {}, e = [ 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 47 ], r = [], i = 0, n = e.length; i < n; ++i) r[e[i]] = i;
        return t.encode = function(t, r) {
            for (var i, n; null !== (i = t()); ) r(e[i >> 2 & 63]), n = (3 & i) << 4, null !== (i = t()) ? (r(e[63 & ((n |= i >> 4 & 15) | i >> 4 & 15)]), 
            n = (15 & i) << 2, null !== (i = t()) ? (r(e[63 & (n | i >> 6 & 3)]), r(e[63 & i])) : (r(e[63 & n]), 
            r(61))) : (r(e[63 & n]), r(61), r(61));
        }, t.decode = function(t, e) {
            var i, n, f;
            function fail(t) {
                throw Error("Illegal character code: " + t);
            }
            for (;null !== (i = t()); ) if (void 0 === (n = r[i]) && fail(i), null !== (i = t()) && (void 0 === (f = r[i]) && fail(i), 
            e(n << 2 >>> 0 | (48 & f) >> 4), null !== (i = t()))) {
                if (void 0 === (n = r[i])) {
                    if (61 === i) break;
                    fail(i);
                }
                if (e((15 & f) << 4 >>> 0 | (60 & n) >> 2), null !== (i = t())) {
                    if (void 0 === (f = r[i])) {
                        if (61 === i) break;
                        fail(i);
                    }
                    e((3 & n) << 6 >>> 0 | f);
                }
            }
        }, t.test = function(t) {
            return /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(t);
        }, t;
    }();
    r.toBase64 = function(t, e) {
        if (void 0 === t && (t = this.offset), void 0 === e && (e = this.limit), e |= 0, 
        (t |= 0) < 0 || e > this.capacity || t > e) throw RangeError("begin, end");
        var r;
        return f.encode(function() {
            return t < e ? this.view[t++] : null;
        }.bind(this), r = stringDestination()), r();
    }, e.fromBase64 = function(t, r) {
        if ("string" != typeof t) throw TypeError("str");
        var i = new e(t.length / 4 * 3, r), n = 0;
        return f.decode(stringSource(t), function(t) {
            i.view[n++] = t;
        }), i.limit = n, i;
    }, e.btoa = function(t) {
        return e.fromBinary(t).toBase64();
    }, e.atob = function(t) {
        return e.fromBase64(t).toBinary();
    }, r.toBinary = function(t, e) {
        if (void 0 === t && (t = this.offset), void 0 === e && (e = this.limit), e |= 0, 
        (t |= 0) < 0 || e > this.capacity() || t > e) throw RangeError("begin, end");
        if (t === e) return "";
        for (var r = [], i = []; t < e; ) r.push(this.view[t++]), r.length >= 1024 && (i.push(String.fromCharCode.apply(String, r)), 
        r = []);
        return i.join("") + String.fromCharCode.apply(String, r);
    }, e.fromBinary = function(t, r) {
        if ("string" != typeof t) throw TypeError("str");
        for (var i, n = 0, f = t.length, o = new e(f, r); n < f; ) {
            if ((i = t.charCodeAt(n)) > 255) throw RangeError("illegal char code: " + i);
            o.view[n++] = i;
        }
        return o.limit = f, o;
    }, r.toDebug = function(t) {
        for (var e, r = -1, i = this.buffer.byteLength, n = "", f = "", o = ""; r < i; ) {
            if (-1 !== r && (n += (e = this.view[r]) < 16 ? "0" + e.toString(16).toUpperCase() : e.toString(16).toUpperCase(), 
            t && (f += e > 32 && e < 127 ? String.fromCharCode(e) : ".")), ++r, t && r > 0 && r % 16 == 0 && r !== i) {
                for (;n.length < 51; ) n += " ";
                o += n + f + "\n", n = f = "";
            }
            r === this.offset && r === this.limit ? n += r === this.markedOffset ? "!" : "|" : r === this.offset ? n += r === this.markedOffset ? "[" : "<" : r === this.limit ? n += r === this.markedOffset ? "]" : ">" : n += r === this.markedOffset ? "'" : t || 0 !== r && r !== i ? " " : "";
        }
        if (t && " " !== n) {
            for (;n.length < 51; ) n += " ";
            o += n + f + "\n";
        }
        return t ? o : n;
    }, e.fromDebug = function(t, r, i) {
        for (var n, f, o = t.length, s = new e((o + 1) / 3 | 0, r, i), h = 0, a = 0, l = !1, u = !1, g = !1, w = !1, b = !1; h < o; ) {
            switch (n = t.charAt(h++)) {
              case "!":
                if (!i) {
                    if (u || g || w) {
                        b = !0;
                        break;
                    }
                    u = g = w = !0;
                }
                s.offset = s.markedOffset = s.limit = a, l = !1;
                break;

              case "|":
                if (!i) {
                    if (u || w) {
                        b = !0;
                        break;
                    }
                    u = w = !0;
                }
                s.offset = s.limit = a, l = !1;
                break;

              case "[":
                if (!i) {
                    if (u || g) {
                        b = !0;
                        break;
                    }
                    u = g = !0;
                }
                s.offset = s.markedOffset = a, l = !1;
                break;

              case "<":
                if (!i) {
                    if (u) {
                        b = !0;
                        break;
                    }
                    u = !0;
                }
                s.offset = a, l = !1;
                break;

              case "]":
                if (!i) {
                    if (w || g) {
                        b = !0;
                        break;
                    }
                    w = g = !0;
                }
                s.limit = s.markedOffset = a, l = !1;
                break;

              case ">":
                if (!i) {
                    if (w) {
                        b = !0;
                        break;
                    }
                    w = !0;
                }
                s.limit = a, l = !1;
                break;

              case "'":
                if (!i) {
                    if (g) {
                        b = !0;
                        break;
                    }
                    g = !0;
                }
                s.markedOffset = a, l = !1;
                break;

              case " ":
                l = !1;
                break;

              default:
                if (!i && l) {
                    b = !0;
                    break;
                }
                if (f = parseInt(n + t.charAt(h++), 16), !i && (isNaN(f) || f < 0 || f > 255)) throw TypeError("Illegal str: Not a debug encoded string");
                s.view[a++] = f, l = !0;
            }
            if (b) throw TypeError("Illegal str: Invalid symbol at " + h);
        }
        if (!i) {
            if (!u || !w) throw TypeError("Illegal str: Missing offset or limit");
            if (a < s.buffer.byteLength) throw TypeError("Illegal str: Not a debug encoded string (is it hex?) " + a + " < " + o);
        }
        return s;
    }, r.toHex = function(t, e) {
        if (t = void 0 === t ? this.offset : t, e = void 0 === e ? this.limit : e, !this.noAssert) {
            if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal begin: Not an integer");
            if (t >>>= 0, "number" != typeof e || e % 1 != 0) throw TypeError("Illegal end: Not an integer");
            if (e >>>= 0, t < 0 || t > e || e > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + t + " <= " + e + " <= " + this.buffer.byteLength);
        }
        for (var r, i = new Array(e - t); t < e; ) (r = this.view[t++]) < 16 ? i.push("0", r.toString(16)) : i.push(r.toString(16));
        return i.join("");
    }, e.fromHex = function(t, r, i) {
        if (!i) {
            if ("string" != typeof t) throw TypeError("Illegal str: Not a string");
            if (t.length % 2 != 0) throw TypeError("Illegal str: Length not a multiple of 2");
        }
        for (var n, f = t.length, o = new e(f / 2 | 0, r), s = 0, h = 0; s < f; s += 2) {
            if (n = parseInt(t.substring(s, s + 2), 16), !i && (!isFinite(n) || n < 0 || n > 255)) throw TypeError("Illegal str: Contains non-hex characters");
            o.view[h++] = n;
        }
        return o.limit = h, o;
    };
    var o = function() {
        var t = {
            MAX_CODEPOINT: 1114111,
            encodeUTF8: function(t, e) {
                var r = null;
                for ("number" == typeof t && (r = t, t = function() {
                    return null;
                }); null !== r || null !== (r = t()); ) r < 128 ? e(127 & r) : r < 2048 ? (e(r >> 6 & 31 | 192), 
                e(63 & r | 128)) : r < 65536 ? (e(r >> 12 & 15 | 224), e(r >> 6 & 63 | 128), e(63 & r | 128)) : (e(r >> 18 & 7 | 240), 
                e(r >> 12 & 63 | 128), e(r >> 6 & 63 | 128), e(63 & r | 128)), r = null;
            },
            decodeUTF8: function(t, e) {
                for (var r, i, n, f, o = function(t) {
                    t = t.slice(0, t.indexOf(null));
                    var e = Error(t.toString());
                    throw e.name = "TruncatedError", e.bytes = t, e;
                }; null !== (r = t()); ) if (0 == (128 & r)) e(r); else if (192 == (224 & r)) null === (i = t()) && o([ r, i ]), 
                e((31 & r) << 6 | 63 & i); else if (224 == (240 & r)) (null === (i = t()) || null === (n = t())) && o([ r, i, n ]), 
                e((15 & r) << 12 | (63 & i) << 6 | 63 & n); else {
                    if (240 != (248 & r)) throw RangeError("Illegal starting byte: " + r);
                    (null === (i = t()) || null === (n = t()) || null === (f = t())) && o([ r, i, n, f ]), 
                    e((7 & r) << 18 | (63 & i) << 12 | (63 & n) << 6 | 63 & f);
                }
            },
            UTF16toUTF8: function(t, e) {
                for (var r, i = null; null !== (r = null !== i ? i : t()); ) r >= 55296 && r <= 57343 && null !== (i = t()) && i >= 56320 && i <= 57343 ? (e(1024 * (r - 55296) + i - 56320 + 65536), 
                i = null) : e(r);
                null !== i && e(i);
            },
            UTF8toUTF16: function(t, e) {
                var r = null;
                for ("number" == typeof t && (r = t, t = function() {
                    return null;
                }); null !== r || null !== (r = t()); ) r <= 65535 ? e(r) : (e(55296 + ((r -= 65536) >> 10)), 
                e(r % 1024 + 56320)), r = null;
            },
            encodeUTF16toUTF8: function(e, r) {
                t.UTF16toUTF8(e, function(e) {
                    t.encodeUTF8(e, r);
                });
            },
            decodeUTF8toUTF16: function(e, r) {
                t.decodeUTF8(e, function(e) {
                    t.UTF8toUTF16(e, r);
                });
            },
            calculateCodePoint: function(t) {
                return t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4;
            },
            calculateUTF8: function(t) {
                for (var e, r = 0; null !== (e = t()); ) r += e < 128 ? 1 : e < 2048 ? 2 : e < 65536 ? 3 : 4;
                return r;
            },
            calculateUTF16asUTF8: function(e) {
                var r = 0, i = 0;
                return t.UTF16toUTF8(e, function(t) {
                    ++r, i += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4;
                }), [ r, i ];
            }
        };
        return t;
    }();
    return r.toUTF8 = function(t, e) {
        if (void 0 === t && (t = this.offset), void 0 === e && (e = this.limit), !this.noAssert) {
            if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal begin: Not an integer");
            if (t >>>= 0, "number" != typeof e || e % 1 != 0) throw TypeError("Illegal end: Not an integer");
            if (e >>>= 0, t < 0 || t > e || e > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + t + " <= " + e + " <= " + this.buffer.byteLength);
        }
        var r;
        try {
            o.decodeUTF8toUTF16(function() {
                return t < e ? this.view[t++] : null;
            }.bind(this), r = stringDestination());
        } catch (r) {
            if (t !== e) throw RangeError("Illegal range: Truncated data, " + t + " != " + e);
        }
        return r();
    }, e.fromUTF8 = function(t, r, i) {
        if (!i && "string" != typeof t) throw TypeError("Illegal str: Not a string");
        var n = new e(o.calculateUTF16asUTF8(stringSource(t), !0)[1], r, i), f = 0;
        return o.encodeUTF16toUTF8(stringSource(t), function(t) {
            n.view[f++] = t;
        }), n.limit = f, n;
    }, e;
});