function _typeof(t) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    })(t);
}

function _get(t, e, i) {
    return (_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, i) {
        var a = _superPropBase(t, e);
        if (a) {
            var r = Object.getOwnPropertyDescriptor(a, e);
            return r.get ? r.get.call(i) : r.value;
        }
    })(t, e, i || t);
}

function _superPropBase(t, e) {
    for (;!Object.prototype.hasOwnProperty.call(t, e) && null !== (t = _getPrototypeOf(t)); ) ;
    return t;
}

function _possibleConstructorReturn(t, e) {
    return !e || "object" !== _typeof(e) && "function" != typeof e ? _assertThisInitialized(t) : e;
}

function _assertThisInitialized(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
}

function _getPrototypeOf(t) {
    return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
}

function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), e && _setPrototypeOf(t, e);
}

function _setPrototypeOf(t, e) {
    return (_setPrototypeOf = Object.setPrototypeOf || function(t, e) {
        return t.__proto__ = e, t;
    })(t, e);
}

function _defineProperties(t, e) {
    for (var i = 0; i < e.length; i++) {
        var a = e[i];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
        Object.defineProperty(t, a.key, a);
    }
}

function _createClass(t, e, i) {
    return e && _defineProperties(t.prototype, e), i && _defineProperties(t, i), t;
}

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

!function(t, e) {
    var i = function IAniLib() {
        _classCallCheck(this, IAniLib);
    };
    i.Skeleton = null, i.AnimationTemplet = null, i.Templet = null;
    var a = function AnimationContent() {
        _classCallCheck(this, AnimationContent);
    }, r = function AnimationNodeContent() {
        _classCallCheck(this, AnimationNodeContent);
    }, s = function KeyFramesContent() {
        _classCallCheck(this, KeyFramesContent);
    }, n = function() {
        function AnimationParser01() {
            _classCallCheck(this, AnimationParser01);
        }
        return _createClass(AnimationParser01, null, [ {
            key: "parse",
            value: function(t, n) {
                var h, l, o, u, c, _, p, d = n.__getBuffer(), f = n.readUTFString();
                t._aniClassName = f;
                var y, m = n.readUTFString().split("\n"), g = n.getUint8(), v = n.getUint32(), x = n.getUint32();
                v > 0 && (y = d.slice(v, x));
                var D = new e.Byte(y);
                for (x > 0 && (t._publicExtData = d.slice(x, d.byteLength)), t._useParent = !!n.getUint8(), 
                t._anis.length = g, h = 0; h < g; h++) {
                    var M = t._anis[h] = new a();
                    M.nodes = [];
                    var k = M.name = m[n.getUint16()];
                    t._aniMap[k] = h, M.bone3DMap = {}, M.playTime = n.getFloat32();
                    var A = M.nodes.length = n.getUint8();
                    for (M.totalKeyframeDatasLength = 0, l = 0; l < A; l++) {
                        var I = M.nodes[l] = new r();
                        I.childs = [];
                        var C = n.getInt16();
                        C >= 0 && (I.name = m[C], M.bone3DMap[I.name] = l), I.keyFrame = [], I.parentIndex = n.getInt16(), 
                        -1 == I.parentIndex ? I.parent = null : I.parent = M.nodes[I.parentIndex], I.lerpType = n.getUint8();
                        var S = n.getUint32();
                        D.pos = S;
                        var T = I.keyframeWidth = D.getUint16();
                        if (M.totalKeyframeDatasLength += T, 0 === I.lerpType || 1 === I.lerpType) for (I.interpolationMethod = [], 
                        I.interpolationMethod.length = T, o = 0; o < T; o++) I.interpolationMethod[o] = i.AnimationTemplet.interpolation[D.getUint8()];
                        null != I.parent && I.parent.childs.push(I);
                        var b = n.getUint16();
                        b > 0 && (I.extenData = d.slice(n.pos, n.pos + b), n.pos += b);
                        var P = n.getUint16();
                        I.keyFrame.length = P;
                        var F, w = 0;
                        for (o = 0, u = P; o < u; o++) {
                            if ((F = I.keyFrame[o] = new s()).duration = n.getFloat32(), F.startTime = w, 2 === I.lerpType) {
                                F.interpolationData = [];
                                var B, L = n.getUint8();
                                switch (B = n.getFloat32()) {
                                  case 254:
                                    for (F.interpolationData.length = T, p = 0; p < T; p++) F.interpolationData[p] = 0;
                                    break;

                                  case 255:
                                    for (F.interpolationData.length = T, p = 0; p < T; p++) F.interpolationData[p] = 5;
                                    break;

                                  default:
                                    for (F.interpolationData.push(B), _ = 1; _ < L; _++) F.interpolationData.push(n.getFloat32());
                                }
                            }
                            for (F.data = new Float32Array(T), F.dData = new Float32Array(T), F.nextData = new Float32Array(T), 
                            c = 0; c < T; c++) F.data[c] = n.getFloat32(), F.data[c] > -1e-8 && F.data[c] < 1e-8 && (F.data[c] = 0);
                            w += F.duration;
                        }
                        F.startTime = M.playTime, I.playTime = M.playTime, t._calculateKeyFrame(I, P, T);
                    }
                }
            }
        } ]), AnimationParser01;
    }(), h = function() {
        function AnimationParser02() {
            _classCallCheck(this, AnimationParser02);
        }
        return _createClass(AnimationParser02, null, [ {
            key: "READ_DATA",
            value: function() {
                AnimationParser02._DATA.offset = AnimationParser02._reader.getUint32(), AnimationParser02._DATA.size = AnimationParser02._reader.getUint32();
            }
        }, {
            key: "READ_BLOCK",
            value: function() {
                for (var t = AnimationParser02._BLOCK.count = AnimationParser02._reader.getUint16(), e = AnimationParser02._BLOCK.blockStarts = [], i = AnimationParser02._BLOCK.blockLengths = [], a = 0; a < t; a++) e.push(AnimationParser02._reader.getUint32()), 
                i.push(AnimationParser02._reader.getUint32());
            }
        }, {
            key: "READ_STRINGS",
            value: function() {
                var t = AnimationParser02._reader.getUint32(), e = AnimationParser02._reader.getUint16(), i = AnimationParser02._reader.pos;
                AnimationParser02._reader.pos = t + AnimationParser02._DATA.offset;
                for (var a = 0; a < e; a++) AnimationParser02._strings[a] = AnimationParser02._reader.readUTFString();
                AnimationParser02._reader.pos = i;
            }
        }, {
            key: "parse",
            value: function(t, e) {
                AnimationParser02._templet = t, AnimationParser02._reader = e;
                e.__getBuffer();
                AnimationParser02.READ_DATA(), AnimationParser02.READ_BLOCK(), AnimationParser02.READ_STRINGS();
                for (var i = 0, a = AnimationParser02._BLOCK.count; i < a; i++) {
                    var r = e.getUint16(), s = AnimationParser02._strings[r], n = AnimationParser02["READ_" + s];
                    if (null == n) throw new Error("model file err,no this function:" + r + " " + s);
                    n.call(null);
                }
            }
        }, {
            key: "READ_ANIMATIONS",
            value: function() {
                var t, e, n, h, l = AnimationParser02._reader, o = l.__getBuffer(), u = l.getUint16(), c = [];
                for (c.length = u, t = 0; t < u; t++) c[t] = i.AnimationTemplet.interpolation[l.getByte()];
                var _ = l.getUint8();
                for (AnimationParser02._templet._anis.length = _, t = 0; t < _; t++) {
                    var p = AnimationParser02._templet._anis[t] = new a();
                    p.nodes = [];
                    var d = p.name = AnimationParser02._strings[l.getUint16()];
                    AnimationParser02._templet._aniMap[d] = t, p.bone3DMap = {}, p.playTime = l.getFloat32();
                    var f = p.nodes.length = l.getInt16();
                    for (p.totalKeyframeDatasLength = 0, e = 0; e < f; e++) {
                        var y = p.nodes[e] = new r();
                        y.keyframeWidth = u, y.childs = [];
                        var m = l.getUint16();
                        m >= 0 && (y.name = AnimationParser02._strings[m], p.bone3DMap[y.name] = e), y.keyFrame = [], 
                        y.parentIndex = l.getInt16(), -1 == y.parentIndex ? y.parent = null : y.parent = p.nodes[y.parentIndex], 
                        p.totalKeyframeDatasLength += u, y.interpolationMethod = c, null != y.parent && y.parent.childs.push(y);
                        var g = l.getUint16();
                        y.keyFrame.length = g;
                        var v = null, x = null;
                        for (n = 0, h = g; n < h; n++) {
                            (v = y.keyFrame[n] = new s()).startTime = l.getFloat32(), x && (x.duration = v.startTime - x.startTime), 
                            v.dData = new Float32Array(u), v.nextData = new Float32Array(u);
                            var D = AnimationParser02._DATA.offset, M = l.getUint32(), k = 4 * u, A = o.slice(D + M, D + M + k);
                            v.data = new Float32Array(A), x = v;
                        }
                        v.duration = 0, y.playTime = p.playTime, AnimationParser02._templet._calculateKeyFrame(y, g, u);
                    }
                }
            }
        } ]), AnimationParser02;
    }();
    h._strings = [], h._BLOCK = {
        count: 0
    }, h._DATA = {
        offset: 0,
        size: 0
    };
    var l = function AnimationState() {
        _classCallCheck(this, AnimationState);
    };
    l.stopped = 0, l.paused = 1, l.playing = 2;
    var o = function(t) {
        function AnimationPlayer() {
            var t;
            return _classCallCheck(this, AnimationPlayer), (t = _possibleConstructorReturn(this, _getPrototypeOf(AnimationPlayer).call(this))).isCache = !0, 
            t.playbackRate = 1, t._destroyed = !1, t._currentAnimationClipIndex = -1, t._currentKeyframeIndex = -1, 
            t._currentTime = 0, t._overallDuration = Number.MAX_VALUE, t._stopWhenCircleFinish = !1, 
            t._elapsedPlaybackTime = 0, t._startUpdateLoopCount = -1, t._cachePlayRate = 1, 
            t.cacheFrameRate = 60, t.returnToZeroStopped = !1, t;
        }
        return _inherits(AnimationPlayer, e.EventDispatcher), _createClass(AnimationPlayer, [ {
            key: "_onTempletLoadedComputeFullKeyframeIndices",
            value: function(t, e, i) {
                this._templet === i && this._cachePlayRate === t && this._cacheFrameRate === e && this._computeFullKeyframeIndices();
            }
        }, {
            key: "_computeFullKeyframeIndices",
            value: function() {}
        }, {
            key: "_onAnimationTempletLoaded",
            value: function() {
                this.destroyed || this._calculatePlayDuration();
            }
        }, {
            key: "_calculatePlayDuration",
            value: function() {
                if (this.state !== l.stopped) {
                    var t = this._templet.getAniDuration(this._currentAnimationClipIndex);
                    0 === this._playEnd && (this._playEnd = t), this._playEnd > t && (this._playEnd = t), 
                    this._playDuration = this._playEnd - this._playStart;
                }
            }
        }, {
            key: "_setPlayParams",
            value: function(t, e) {
                this._currentTime = t, this._currentKeyframeIndex = Math.floor(this.currentPlayTime / e + .01), 
                this._currentFrameTime = this._currentKeyframeIndex * e;
            }
        }, {
            key: "_setPlayParamsWhenStop",
            value: function(t, e) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
                this._currentTime = t;
                var a = i > 0 ? i : t;
                this._currentKeyframeIndex = Math.floor(a / e + .01), this._currentKeyframeIndex = Math.floor(t / e + .01), 
                this._currentFrameTime = this._currentKeyframeIndex * e, this._currentAnimationClipIndex = -1;
            }
        }, {
            key: "_update",
            value: function(t) {
                if (-1 !== this._currentAnimationClipIndex && !this._paused && this._templet) {
                    var i = this._cacheFrameRateInterval * this._cachePlayRate, a = 0;
                    this._startUpdateLoopCount !== e.Stat.loopCount && (a = t * this.playbackRate, this._elapsedPlaybackTime += a);
                    var r = this.playDuration;
                    if (a += this._currentTime, 0 !== this._overallDuration && this._elapsedPlaybackTime >= this._overallDuration || 0 === this._overallDuration && this._elapsedPlaybackTime >= r || 0 === this._overallDuration && a >= this.playEnd) return this._setPlayParamsWhenStop(r, i, this.playEnd), 
                    void this.event(e.Event.STOPPED);
                    if (r > 0) {
                        if (a >= r) return this._stopWhenCircleFinish ? (this._setPlayParamsWhenStop(r, i), 
                        this._stopWhenCircleFinish = !1, void this.event(e.Event.STOPPED)) : (a %= r, this._setPlayParams(a, i), 
                        void this.event(e.Event.COMPLETE));
                        this._setPlayParams(a, i);
                    } else {
                        if (this._stopWhenCircleFinish) return this._setPlayParamsWhenStop(r, i), this._stopWhenCircleFinish = !1, 
                        void this.event(e.Event.STOPPED);
                        this._currentTime = this._currentFrameTime = this._currentKeyframeIndex = 0, this.event(e.Event.COMPLETE);
                    }
                }
            }
        }, {
            key: "_destroy",
            value: function() {
                this.offAll(), this._templet = null, this._destroyed = !0;
            }
        }, {
            key: "play",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2147483647, r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
                if (!this._templet) throw new Error("AnimationPlayer:templet must not be null,maybe you need to set url.");
                if (a < 0 || r < 0 || s < 0) throw new Error("AnimationPlayer:overallDuration,playStart and playEnd must large than zero.");
                if (0 !== s && r > s) throw new Error("AnimationPlayer:start must less than end.");
                this._currentTime = 0, this._currentFrameTime = 0, this._elapsedPlaybackTime = 0, 
                this.playbackRate = i, this._overallDuration = a, this._playStart = r, this._playEnd = s, 
                this._paused = !1, this._currentAnimationClipIndex = t, this._currentKeyframeIndex = 0, 
                this._startUpdateLoopCount = e.Stat.loopCount, this.event(e.Event.PLAYED), this._calculatePlayDuration(), 
                this._update(0);
            }
        }, {
            key: "playByFrame",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2147483647, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0, s = 1e3 / (arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 30);
                this.play(t, e, i, a * s, r * s);
            }
        }, {
            key: "stop",
            value: function() {
                !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0] ? (this._currentTime = this._currentFrameTime = this._currentKeyframeIndex = 0, 
                this._currentAnimationClipIndex = -1, this.event(e.Event.STOPPED)) : this._stopWhenCircleFinish = !0;
            }
        }, {
            key: "destroy",
            value: function() {}
        }, {
            key: "templet",
            get: function() {
                return this._templet;
            },
            set: function(t) {
                this.state !== l.stopped && this.stop(!0), this._templet !== t && (this._templet = t, 
                this._computeFullKeyframeIndices());
            }
        }, {
            key: "playStart",
            get: function() {
                return this._playStart;
            }
        }, {
            key: "playEnd",
            get: function() {
                return this._playEnd;
            }
        }, {
            key: "playDuration",
            get: function() {
                return this._playDuration;
            }
        }, {
            key: "overallDuration",
            get: function() {
                return this._overallDuration;
            }
        }, {
            key: "currentAnimationClipIndex",
            get: function() {
                return this._currentAnimationClipIndex;
            }
        }, {
            key: "currentKeyframeIndex",
            get: function() {
                return this._currentKeyframeIndex;
            }
        }, {
            key: "currentPlayTime",
            get: function() {
                return this._currentTime + this._playStart;
            }
        }, {
            key: "currentFrameTime",
            get: function() {
                return this._currentFrameTime;
            }
        }, {
            key: "cachePlayRate",
            get: function() {
                return this._cachePlayRate;
            },
            set: function(t) {
                this._cachePlayRate !== t && (this._cachePlayRate = t, this._templet && this._computeFullKeyframeIndices());
            }
        }, {
            key: "cacheFrameRate",
            get: function() {
                return this._cacheFrameRate;
            },
            set: function(t) {
                this._cacheFrameRate !== t && (this._cacheFrameRate = t, this._cacheFrameRateInterval = 1e3 / this._cacheFrameRate, 
                this._templet && this._computeFullKeyframeIndices());
            }
        }, {
            key: "currentTime",
            set: function(t) {
                if (-1 !== this._currentAnimationClipIndex && this._templet) {
                    if (t < this._playStart || t > this._playEnd) throw new Error("AnimationPlayer:value must large than playStartTime,small than playEndTime.");
                    this._startUpdateLoopCount = e.Stat.loopCount;
                    var i = this._cacheFrameRateInterval * this._cachePlayRate;
                    this._currentTime = t, this._currentKeyframeIndex = Math.floor(this.currentPlayTime / i), 
                    this._currentFrameTime = this._currentKeyframeIndex * i;
                }
            }
        }, {
            key: "paused",
            get: function() {
                return this._paused;
            },
            set: function(t) {
                this._paused = t, t && this.event(e.Event.PAUSED);
            }
        }, {
            key: "cacheFrameRateInterval",
            get: function() {
                return this._cacheFrameRateInterval;
            }
        }, {
            key: "state",
            get: function() {
                return -1 === this._currentAnimationClipIndex ? l.stopped : this._paused ? l.paused : l.playing;
            }
        }, {
            key: "destroyed",
            get: function() {
                return this._destroyed;
            }
        } ]), AnimationPlayer;
    }(), u = function() {
        function BezierLerp() {
            _classCallCheck(this, BezierLerp);
        }
        return _createClass(BezierLerp, null, [ {
            key: "getBezierRate",
            value: function(t, e, i, a, r) {
                var s = BezierLerp._getBezierParamKey(e, i, a, r), n = 100 * s + t;
                if (BezierLerp._bezierResultCache[n]) return BezierLerp._bezierResultCache[n];
                var h, l, o = BezierLerp._getBezierPoints(e, i, a, r, s);
                for (l = o.length, h = 0; h < l; h += 2) if (t <= o[h]) return BezierLerp._bezierResultCache[n] = o[h + 1], 
                o[h + 1];
                return BezierLerp._bezierResultCache[n] = 1, 1;
            }
        }, {
            key: "_getBezierParamKey",
            value: function(t, e, i, a) {
                return 100 * (100 * (100 * (100 * t + e) + i) + a);
            }
        }, {
            key: "_getBezierPoints",
            value: function(t, i, a, r, s) {
                return BezierLerp._bezierPointsCache[s] ? BezierLerp._bezierPointsCache[s] : (n = [ 0, 0, t, i, a, r, 1, 1 ], 
                h = new e.Bezier().getBezierPoints(n, 100, 3), BezierLerp._bezierPointsCache[s] = h, 
                h);
                var n, h;
            }
        } ]), BezierLerp;
    }();
    u._bezierResultCache = {}, u._bezierPointsCache = {};
    var c = function(t) {
        function AnimationTemplet() {
            var t;
            return _classCallCheck(this, AnimationTemplet), (t = _possibleConstructorReturn(this, _getPrototypeOf(AnimationTemplet).call(this)))._anis = [], 
            t._aniMap = {}, t.unfixedLastAniIndex = -1, t._fullFrames = null, t._boneCurKeyFrm = [], 
            t;
        }
        return _inherits(AnimationTemplet, e.Resource), _createClass(AnimationTemplet, [ {
            key: "parse",
            value: function(t) {
                var i = new e.Byte(t);
                this._aniVersion = i.readUTFString(), n.parse(this, i);
            }
        }, {
            key: "_calculateKeyFrame",
            value: function(t, e, i) {
                var a = t.keyFrame;
                a[e] = a[0];
                for (var r = 0; r < e; r++) for (var s = a[r], n = 0; n < i; n++) s.dData[n] = 0 === s.duration ? 0 : (a[r + 1].data[n] - s.data[n]) / s.duration, 
                s.nextData[n] = a[r + 1].data[n];
                a.length--;
            }
        }, {
            key: "_onAsynLoaded",
            value: function(t) {
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                var i = new e.Byte(t);
                switch (this._aniVersion = i.readUTFString(), this._aniVersion) {
                  case "LAYAANIMATION:02":
                    h.parse(this, i);
                    break;

                  default:
                    n.parse(this, i);
                }
            }
        }, {
            key: "getAnimationCount",
            value: function() {
                return this._anis.length;
            }
        }, {
            key: "getAnimation",
            value: function(t) {
                return this._anis[t];
            }
        }, {
            key: "getAniDuration",
            value: function(t) {
                return this._anis[t].playTime;
            }
        }, {
            key: "getNodes",
            value: function(t) {
                return this._anis[t].nodes;
            }
        }, {
            key: "getNodeIndexWithName",
            value: function(t, e) {
                return this._anis[t].bone3DMap[e];
            }
        }, {
            key: "getNodeCount",
            value: function(t) {
                return this._anis[t].nodes.length;
            }
        }, {
            key: "getTotalkeyframesLength",
            value: function(t) {
                return this._anis[t].totalKeyframeDatasLength;
            }
        }, {
            key: "getPublicExtData",
            value: function() {
                return this._publicExtData;
            }
        }, {
            key: "getAnimationDataWithCache",
            value: function(t, e, i, a) {
                var r = e[i];
                if (r) {
                    var s = r[t];
                    return s ? s[a] : null;
                }
                return null;
            }
        }, {
            key: "setAnimationDataWithCache",
            value: function(t, e, i, a, r) {
                var s = e[i] || (e[i] = {});
                (s[t] || (s[t] = []))[a] = r;
            }
        }, {
            key: "getNodeKeyFrame",
            value: function(t, e, i) {
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
            }
        }, {
            key: "getOriginalData",
            value: function(t, e, i, a, r) {
                var s = this._anis[t].nodes, n = this._boneCurKeyFrm;
                n.length < s.length && (n.length = s.length);
                for (var h = 0, l = 0, o = s.length, u = 0; l < o; l++) {
                    var c, _ = s[l], p = _.keyFrame;
                    c = p[this.getNodeKeyFrame(p, l, r)], _.dataOffset = u;
                    var d = r - c.startTime, f = _.lerpType;
                    if (f) switch (f) {
                      case 0:
                      case 1:
                        for (h = 0; h < _.keyframeWidth; ) h += _.interpolationMethod[h](_, h, e, u + h, c.data, d, c.dData, c.duration, c.nextData);
                        break;

                      case 2:
                        var y = c.interpolationData, m = y.length, g = 0;
                        for (h = 0; h < m; ) {
                            var v = y[h];
                            switch (v) {
                              case 6:
                              case 7:
                                h += AnimationTemplet.interpolation[v](_, g, e, u + g, c.data, d, c.dData, c.duration, c.nextData, y, h + 1);
                                break;

                              default:
                                h += AnimationTemplet.interpolation[v](_, g, e, u + g, c.data, d, c.dData, c.duration, c.nextData);
                            }
                            g++;
                        }
                    } else for (h = 0; h < _.keyframeWidth; ) h += _.interpolationMethod[h](_, h, e, u + h, c.data, d, c.dData, c.duration, c.nextData);
                    u += _.keyframeWidth;
                }
            }
        }, {
            key: "getNodesCurrentFrameIndex",
            value: function(t, e) {
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
            }
        }, {
            key: "getOriginalDataUnfixedRate",
            value: function(t, e, i) {
                var a = this._anis[t].nodes;
                t !== this.unfixedLastAniIndex && (this.unfixedCurrentFrameIndexes = new Uint32Array(a.length), 
                this.unfixedCurrentTimes = new Float32Array(a.length), this.unfixedKeyframes = [], 
                this.unfixedLastAniIndex = t);
                for (var r = 0, s = 0, n = a.length, h = 0; s < n; s++) {
                    var l = a[s];
                    for (i < this.unfixedCurrentTimes[s] && (this.unfixedCurrentFrameIndexes[s] = 0), 
                    this.unfixedCurrentTimes[s] = i; this.unfixedCurrentFrameIndexes[s] < l.keyFrame.length && !(l.keyFrame[this.unfixedCurrentFrameIndexes[s]].startTime > this.unfixedCurrentTimes[s]); ) this.unfixedKeyframes[s] = l.keyFrame[this.unfixedCurrentFrameIndexes[s]], 
                    this.unfixedCurrentFrameIndexes[s]++;
                    var o = this.unfixedKeyframes[s];
                    l.dataOffset = h;
                    var u = i - o.startTime;
                    if (l.lerpType) switch (l.lerpType) {
                      case 0:
                      case 1:
                        for (r = 0; r < l.keyframeWidth; ) r += l.interpolationMethod[r](l, r, e, h + r, o.data, u, o.dData, o.duration, o.nextData);
                        break;

                      case 2:
                        var c = o.interpolationData, _ = c.length, p = 0;
                        for (r = 0; r < _; ) {
                            var d = c[r];
                            switch (d) {
                              case 6:
                              case 7:
                                r += AnimationTemplet.interpolation[d](l, p, e, h + p, o.data, u, o.dData, o.duration, o.nextData, c, r + 1);
                                break;

                              default:
                                r += AnimationTemplet.interpolation[d](l, p, e, h + p, o.data, u, o.dData, o.duration, o.nextData);
                            }
                            p++;
                        }
                    } else for (r = 0; r < l.keyframeWidth; ) r += l.interpolationMethod[r](l, r, e, h + r, o.data, u, o.dData, o.duration, o.nextData);
                    h += l.keyframeWidth;
                }
            }
        } ], [ {
            key: "_LinearInterpolation_0",
            value: function(t, e, i, a, r, s, n, h, l) {
                arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
                return i[a] = r[e] + s * n[e], 1;
            }
        }, {
            key: "_QuaternionInterpolation_1",
            value: function(t, i, a, r, s, n, h, l, o) {
                arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
                var u = 0 === l ? 0 : n / l;
                return e.MathUtil.slerpQuaternionArray(s, i, o, i, u, a, r), 4;
            }
        }, {
            key: "_AngleInterpolation_2",
            value: function(t, e, i, a, r, s, n, h, l) {
                arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
                return 0;
            }
        }, {
            key: "_RadiansInterpolation_3",
            value: function(t, e, i, a, r, s, n, h, l) {
                arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
                return 0;
            }
        }, {
            key: "_Matrix4x4Interpolation_4",
            value: function(t, e, i, a, r, s, n, h, l) {
                arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
                for (var o = 0; o < 16; o++, e++) i[a + o] = r[e] + s * n[e];
                return 16;
            }
        }, {
            key: "_NoInterpolation_5",
            value: function(t, e, i, a, r, s, n, h, l) {
                arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
                return i[a] = r[e], 1;
            }
        }, {
            key: "_BezierInterpolation_6",
            value: function(t, e, i, a, r, s, n, h, l) {
                var o = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null, c = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
                return i[a] = r[e] + (l[e] - r[e]) * u.getBezierRate(s / h, o[c], o[c + 1], o[c + 2], o[c + 3]), 
                5;
            }
        }, {
            key: "_BezierInterpolation_7",
            value: function(t, e, i, a, r, s, n, h, l) {
                var o = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null, c = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
                return i[a] = o[c + 4] + o[c + 5] * u.getBezierRate((.001 * s + o[c + 6]) / o[c + 7], o[c], o[c + 1], o[c + 2], o[c + 3]), 
                9;
            }
        } ]), AnimationTemplet;
    }();
    c.interpolation = [ c._LinearInterpolation_0, c._QuaternionInterpolation_1, c._AngleInterpolation_2, c._RadiansInterpolation_3, c._Matrix4x4Interpolation_4, c._NoInterpolation_5, c._BezierInterpolation_6, c._BezierInterpolation_7 ], 
    i.AnimationTemplet = c;
    var _ = function(t) {
        function GraphicsAni() {
            return _classCallCheck(this, GraphicsAni), _possibleConstructorReturn(this, _getPrototypeOf(GraphicsAni).apply(this, arguments));
        }
        return _inherits(GraphicsAni, e.Graphics), _createClass(GraphicsAni, [ {
            key: "drawSkin",
            value: function(t, i) {
                this.drawTriangles(t.texture, 0, 0, t.vertices, t.uvs, t.indexes, t.transform || e.Matrix.EMPTY, i);
            }
        } ], [ {
            key: "create",
            value: function() {
                return GraphicsAni._caches.pop() || new GraphicsAni();
            }
        }, {
            key: "recycle",
            value: function(t) {
                t.clear(), GraphicsAni._caches.push(t);
            }
        } ]), GraphicsAni;
    }();
    _._caches = [];
    var p = function() {
        function Transform() {
            _classCallCheck(this, Transform), this.skX = 0, this.skY = 0, this.scX = 1, this.scY = 1, 
            this.x = 0, this.y = 0, this.skewX = 0, this.skewY = 0;
        }
        return _createClass(Transform, [ {
            key: "initData",
            value: function(t) {
                null != t.x && (this.x = t.x), null != t.y && (this.y = t.y), null != t.skX && (this.skX = t.skX), 
                null != t.skY && (this.skY = t.skY), null != t.scX && (this.scX = t.scX), null != t.scY && (this.scY = t.scY);
            }
        }, {
            key: "getMatrix",
            value: function() {
                var t;
                return (t = this.mMatrix ? this.mMatrix : this.mMatrix = new e.Matrix()).identity(), 
                t.scale(this.scX, this.scY), (this.skewX || this.skewY) && this.skew(t, this.skewX * Math.PI / 180, this.skewY * Math.PI / 180), 
                t.rotate(this.skX * Math.PI / 180), t.translate(this.x, this.y), t;
            }
        }, {
            key: "skew",
            value: function(t, e, i) {
                var a = Math.sin(i), r = Math.cos(i), s = Math.sin(e), n = Math.cos(e);
                return t.setTo(t.a * n - t.b * a, t.a * s + t.b * r, t.c * n - t.d * a, t.c * s + t.d * r, t.tx * n - t.ty * a, t.tx * s + t.ty * r), 
                t;
            }
        } ]), Transform;
    }(), d = function() {
        function Bone() {
            _classCallCheck(this, Bone), this.length = 10, this.resultTransform = new p(), this.resultMatrix = new e.Matrix(), 
            this.inheritScale = !0, this.inheritRotation = !0, this.d = -1, this._children = [];
        }
        return _createClass(Bone, [ {
            key: "setTempMatrix",
            value: function(t) {
                this._tempMatrix = t;
                var e, i = 0;
                for (i = 0, e = this._children.length; i < e; i++) this._children[i].setTempMatrix(this._tempMatrix);
            }
        }, {
            key: "update",
            value: function() {
                var t, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if (this.rotation = this.transform.skX, i) t = this.resultTransform.getMatrix(), 
                e.Matrix.mul(t, i, this.resultMatrix), this.resultRotation = this.rotation; else if (this.resultRotation = this.rotation + this.parentBone.resultRotation, 
                this.parentBone) if (this.inheritRotation && this.inheritScale) t = this.resultTransform.getMatrix(), 
                e.Matrix.mul(t, this.parentBone.resultMatrix, this.resultMatrix); else {
                    var a, r, s, n = this.parentBone, h = this.parentBone.resultMatrix;
                    t = this.resultTransform.getMatrix();
                    var l = h.a * t.tx + h.c * t.ty + h.tx, o = h.b * t.tx + h.d * t.ty + h.ty, u = new e.Matrix();
                    this.inheritRotation ? (a = Math.atan2(n.resultMatrix.b, n.resultMatrix.a), r = Math.cos(a), 
                    s = Math.sin(a), u.setTo(r, s, -s, r, 0, 0), e.Matrix.mul(this._tempMatrix, u, e.Matrix.TEMP), 
                    e.Matrix.TEMP.copyTo(u), t = this.resultTransform.getMatrix(), e.Matrix.mul(t, u, this.resultMatrix), 
                    this.resultTransform.scX * this.resultTransform.scY < 0 && this.resultMatrix.rotate(.5 * Math.PI), 
                    this.resultMatrix.tx = l, this.resultMatrix.ty = o) : (this.inheritScale, t = this.resultTransform.getMatrix(), 
                    e.Matrix.TEMP.identity(), e.Matrix.TEMP.d = this.d, e.Matrix.mul(t, e.Matrix.TEMP, this.resultMatrix), 
                    this.resultMatrix.tx = l, this.resultMatrix.ty = o);
                } else (t = this.resultTransform.getMatrix()).copyTo(this.resultMatrix);
                var c, _ = 0;
                for (_ = 0, c = this._children.length; _ < c; _++) this._children[_].update();
            }
        }, {
            key: "updateChild",
            value: function() {
                var t, e = 0;
                for (e = 0, t = this._children.length; e < t; e++) this._children[e].update();
            }
        }, {
            key: "setRotation",
            value: function(t) {
                this._sprite && (this._sprite.rotation = 180 * t / Math.PI);
            }
        }, {
            key: "updateDraw",
            value: function(t, i) {
                Bone.ShowBones && !Bone.ShowBones[this.name] || (this._sprite ? (this._sprite.x = t + this.resultMatrix.tx, 
                this._sprite.y = i + this.resultMatrix.ty) : (this._sprite = new e.Sprite(), this._sprite.graphics.drawCircle(0, 0, 5, "#ff0000"), 
                this._sprite.graphics.drawLine(0, 0, this.length, 0, "#00ff00"), this._sprite.graphics.fillText(this.name, 0, 0, "20px Arial", "#00ff00", "center"), 
                e.ILaya.stage.addChild(this._sprite), this._sprite.x = t + this.resultMatrix.tx, 
                this._sprite.y = i + this.resultMatrix.ty));
                var a, r = 0;
                for (r = 0, a = this._children.length; r < a; r++) this._children[r].updateDraw(t, i);
            }
        }, {
            key: "addChild",
            value: function(t) {
                this._children.push(t), t.parentBone = this;
            }
        }, {
            key: "findBone",
            value: function(t) {
                if (this.name == t) return this;
                var e, i, a;
                for (e = 0, i = this._children.length; e < i; e++) if (a = this._children[e].findBone(t)) return a;
                return null;
            }
        }, {
            key: "localToWorld",
            value: function(t) {
                var e = t[0], i = t[1];
                t[0] = e * this.resultMatrix.a + i * this.resultMatrix.c + this.resultMatrix.tx, 
                t[1] = e * this.resultMatrix.b + i * this.resultMatrix.d + this.resultMatrix.ty;
            }
        } ]), Bone;
    }();
    d.ShowBones = {};
    var f = function() {
        function UVTools() {
            _classCallCheck(this, UVTools);
        }
        return _createClass(UVTools, null, [ {
            key: "getRelativeUV",
            value: function(t, e) {
                var i, a, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, s = t[0], n = t[2] - t[0], h = t[1], l = t[5] - t[1];
                r || (r = []), r.length = e.length, a = r.length;
                var o = 1 / n, u = 1 / l;
                for (i = 0; i < a; i += 2) r[i] = (e[i] - s) * o, r[i + 1] = (e[i + 1] - h) * u;
                return r;
            }
        }, {
            key: "getAbsoluteUV",
            value: function(t, i) {
                var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                if (0 == t[0] && 0 == t[1] && 1 == t[4] && 1 == t[5]) return a ? (e.Utils.copyArray(a, i), 
                a) : i;
                var r, s, n = t[0], h = t[2] - t[0], l = t[1], o = t[5] - t[1];
                for (a || (a = []), a.length = i.length, s = a.length, r = 0; r < s; r += 2) a[r] = i[r] * h + n, 
                a[r + 1] = i[r + 1] * o + l;
                return a;
            }
        } ]), UVTools;
    }(), y = function() {
        function MeshData() {
            _classCallCheck(this, MeshData), this.uvs = new Float32Array([ 0, 0, 1, 0, 1, 1, 0, 1 ]), 
            this.vertices = new Float32Array([ 0, 0, 100, 0, 100, 100, 0, 100 ]), this.indexes = new Uint16Array([ 0, 1, 3, 3, 1, 2 ]), 
            this.useUvTransform = !1, this.canvasPadding = 1;
        }
        return _createClass(MeshData, [ {
            key: "getBounds",
            value: function() {
                return e.Rectangle._getWrapRec(this.vertices);
            }
        } ]), MeshData;
    }(), m = function(t) {
        function SkinMeshForGraphic() {
            return _classCallCheck(this, SkinMeshForGraphic), _possibleConstructorReturn(this, _getPrototypeOf(SkinMeshForGraphic).call(this));
        }
        return _inherits(SkinMeshForGraphic, y), _createClass(SkinMeshForGraphic, [ {
            key: "init2",
            value: function(t, e, i, a) {
                this.transform && (this.transform = null);
                var r = e || [ 0, 1, 3, 3, 1, 2 ];
                this.texture = t, this.indexes = new Uint16Array(r), this.vertices = new Float32Array(i), 
                this.uvs = new Float32Array(a);
            }
        } ]), SkinMeshForGraphic;
    }(), g = function() {
        function BoneSlot() {
            _classCallCheck(this, BoneSlot), this.srcDisplayIndex = -1, this.type = "src", this.displayIndex = -1, 
            this.originalIndex = -1, this._replaceDic = {};
        }
        return _createClass(BoneSlot, [ {
            key: "showSlotData",
            value: function(t) {
                var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                this.currSlotData = t, e && (this.displayIndex = this.srcDisplayIndex), this.currDisplayData = null, 
                this.currTexture = null;
            }
        }, {
            key: "showDisplayByName",
            value: function(t) {
                this.currSlotData && this.showDisplayByIndex(this.currSlotData.getDisplayByName(t));
            }
        }, {
            key: "replaceDisplayByName",
            value: function(t, e) {
                var i, a;
                this.currSlotData && (i = this.currSlotData.getDisplayByName(t), a = this.currSlotData.getDisplayByName(e), 
                this.replaceDisplayByIndex(i, a));
            }
        }, {
            key: "replaceDisplayByIndex",
            value: function(t, e) {
                this.currSlotData && (this._replaceDic[t] = e, this.originalIndex == t && this.showDisplayByIndex(t));
            }
        }, {
            key: "showDisplayByIndex",
            value: function(t) {
                if (this.originalIndex = t, null != this._replaceDic[t] && (t = this._replaceDic[t]), 
                this.currSlotData && t > -1 && t < this.currSlotData.displayArr.length) {
                    if (this.displayIndex = t, this.currDisplayData = this.currSlotData.displayArr[t], 
                    this.currDisplayData) {
                        var e = this.currDisplayData.name;
                        this.currTexture = this.templet.getTexture(e), this.currTexture && 0 == this.currDisplayData.type && this.currDisplayData.uvs && (this.currTexture = this.currDisplayData.createTexture(this.currTexture));
                    }
                } else this.displayIndex = -1, this.currDisplayData = null, this.currTexture = null;
            }
        }, {
            key: "replaceSkin",
            value: function(t) {
                this._diyTexture = t, this._curDiyUV && (this._curDiyUV.length = 0), this.currDisplayData && this._diyTexture == this.currDisplayData.texture && (this._diyTexture = null);
            }
        }, {
            key: "setParentMatrix",
            value: function(t) {
                this._parentMatrix = t;
            }
        }, {
            key: "getSaveVerticle",
            value: function(t) {
                return BoneSlot.useSameMatrixAndVerticle && this._preGraphicVerticle && BoneSlot.isSameArr(t, this._preGraphicVerticle) ? t = this._preGraphicVerticle : (t = e.ILaya.Utils.copyArray([], t), 
                this._preGraphicVerticle = t), t;
            }
        }, {
            key: "getSaveMatrix",
            value: function(t) {
                if (BoneSlot.useSameMatrixAndVerticle && this._preGraphicMatrix && BoneSlot.isSameMatrix(t, this._preGraphicMatrix)) t = this._preGraphicMatrix; else {
                    var e = t.clone();
                    t = e, this._preGraphicMatrix = t;
                }
                return t;
            }
        }, {
            key: "draw",
            value: function(t, i) {
                var a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
                if ((null != this._diyTexture || null != this.currTexture) && null != this.currDisplayData || this.currDisplayData && 3 == this.currDisplayData.type) {
                    var s, n = this.currTexture;
                    switch (this._diyTexture && (n = this._diyTexture), this.currDisplayData.type) {
                      case 0:
                        if (t) {
                            var h = this.getDisplayMatrix();
                            if (this._parentMatrix) {
                                var l = !1;
                                if (h) {
                                    var o;
                                    if (e.Matrix.mul(h, this._parentMatrix, e.Matrix.TEMP), a ? (null == this._resultMatrix && (this._resultMatrix = new e.Matrix()), 
                                    o = this._resultMatrix) : o = BoneSlot._tempResultMatrix, this._diyTexture && this.currDisplayData.uvs) {
                                        var u = BoneSlot._tempMatrix;
                                        u.identity(), this.currDisplayData.uvs[1] > this.currDisplayData.uvs[5] && (u.d = -1), 
                                        this.currDisplayData.uvs[0] > this.currDisplayData.uvs[4] && this.currDisplayData.uvs[1] > this.currDisplayData.uvs[5] && (l = !0, 
                                        u.rotate(-Math.PI / 2)), e.Matrix.mul(u, e.Matrix.TEMP, o);
                                    } else e.Matrix.TEMP.copyTo(o);
                                    a || (o = this.getSaveMatrix(o)), o._checkTransform(), l ? t.drawTexture(n, -this.currDisplayData.height / 2, -this.currDisplayData.width / 2, this.currDisplayData.height, this.currDisplayData.width, o, r) : t.drawTexture(n, -this.currDisplayData.width / 2, -this.currDisplayData.height / 2, this.currDisplayData.width, this.currDisplayData.height, o, r);
                                }
                            }
                        }
                        break;

                      case 1:
                        if (a ? (null == this._skinSprite && (this._skinSprite = BoneSlot.createSkinMesh()), 
                        s = this._skinSprite) : s = BoneSlot.createSkinMesh(), null == s) return;
                        var c;
                        if (null == this.currDisplayData.bones) {
                            var _, p = this.currDisplayData.weights;
                            this.deformData && (p = this.deformData), this._diyTexture ? (this._curDiyUV || (this._curDiyUV = []), 
                            0 == this._curDiyUV.length && (this._curDiyUV = f.getRelativeUV(this.currTexture.uv, this.currDisplayData.uvs, this._curDiyUV), 
                            this._curDiyUV = f.getAbsoluteUV(this._diyTexture.uv, this._curDiyUV, this._curDiyUV)), 
                            _ = this._curDiyUV) : _ = this.currDisplayData.uvs, this._mVerticleArr = p;
                            this.currDisplayData.triangles.length;
                            c = this.currDisplayData.triangles, this.deformData && (a || (this._mVerticleArr = this.getSaveVerticle(this._mVerticleArr))), 
                            s.init2(n, c, this._mVerticleArr, _);
                            var d, y = this.getDisplayMatrix();
                            if (this._parentMatrix) if (y) e.Matrix.mul(y, this._parentMatrix, e.Matrix.TEMP), 
                            a ? (null == this._resultMatrix && (this._resultMatrix = new e.Matrix()), d = this._resultMatrix) : d = BoneSlot._tempResultMatrix, 
                            e.Matrix.TEMP.copyTo(d), a || (d = this.getSaveMatrix(d)), s.transform = d;
                        } else this.skinMesh(i, s);
                        t.drawSkin(s, r);
                        break;

                      case 2:
                        if (a ? (null == this._skinSprite && (this._skinSprite = BoneSlot.createSkinMesh()), 
                        s = this._skinSprite) : s = BoneSlot.createSkinMesh(), null == s) return;
                        this.skinMesh(i, s), t.drawSkin(s, r);
                    }
                }
            }
        }, {
            key: "skinMesh",
            value: function(t, e) {
                var i, a = this.currTexture, r = this.currDisplayData.bones;
                this._diyTexture ? (a = this._diyTexture, this._curDiyUV || (this._curDiyUV = []), 
                0 == this._curDiyUV.length && (this._curDiyUV = f.getRelativeUV(this.currTexture.uv, this.currDisplayData.uvs, this._curDiyUV), 
                this._curDiyUV = f.getAbsoluteUV(this._diyTexture.uv, this._curDiyUV, this._curDiyUV)), 
                i = this._curDiyUV) : i = this.currDisplayData.uvs;
                var s, n, h, l, o, u = this.currDisplayData.weights, c = this.currDisplayData.triangles, _ = 0, p = 0, d = 0, y = 0, m = 0, g = 0, v = 0;
                if (BoneSlot._tempVerticleArr.length = 0, o = BoneSlot._tempVerticleArr, this.deformData && this.deformData.length > 0) {
                    var x = 0;
                    for (g = 0, v = r.length; g < v; ) {
                        for (d = r[g++] + g, _ = 0, p = 0; g < d; g++) n = t[r[g]], h = u[y] + this.deformData[x++], 
                        l = u[y + 1] + this.deformData[x++], m = u[y + 2], _ += (h * n.a + l * n.c + n.tx) * m, 
                        p += (h * n.b + l * n.d + n.ty) * m, y += 3;
                        o.push(_, p);
                    }
                } else for (g = 0, v = r.length; g < v; ) {
                    for (d = r[g++] + g, _ = 0, p = 0; g < d; g++) n = t[r[g]], h = u[y], l = u[y + 1], 
                    m = u[y + 2], _ += (h * n.a + l * n.c + n.tx) * m, p += (h * n.b + l * n.d + n.ty) * m, 
                    y += 3;
                    o.push(_, p);
                }
                this._mVerticleArr = o, s = c, this._mVerticleArr = this.getSaveVerticle(this._mVerticleArr), 
                e.init2(a, s, this._mVerticleArr, i);
            }
        }, {
            key: "drawBonePoint",
            value: function(t) {
                t && this._parentMatrix && t.drawCircle(this._parentMatrix.tx, this._parentMatrix.ty, 5, "#ff0000");
            }
        }, {
            key: "getDisplayMatrix",
            value: function() {
                return this.currDisplayData ? this.currDisplayData.transform.getMatrix() : null;
            }
        }, {
            key: "getMatrix",
            value: function() {
                return this._resultMatrix;
            }
        }, {
            key: "copy",
            value: function() {
                var t = new BoneSlot();
                return t.type = "copy", t.name = this.name, t.attachmentName = this.attachmentName, 
                t.srcDisplayIndex = this.srcDisplayIndex, t.parent = this.parent, t.displayIndex = this.displayIndex, 
                t.templet = this.templet, t.currSlotData = this.currSlotData, t.currTexture = this.currTexture, 
                t.currDisplayData = this.currDisplayData, t;
            }
        } ], [ {
            key: "createSkinMesh",
            value: function() {
                return new m();
            }
        }, {
            key: "isSameArr",
            value: function(t, e) {
                if (t.length != e.length) return !1;
                var i, a;
                for (a = t.length, i = 0; i < a; i++) if (t[i] != e[i]) return !1;
                return !0;
            }
        }, {
            key: "isSameMatrix",
            value: function(t, e) {
                return t.a == e.a && t.b == e.b && t.c == e.c && t.d == e.d && Math.abs(t.tx - e.tx) < 1e-5 && Math.abs(t.ty - e.ty) < 1e-5;
            }
        } ]), BoneSlot;
    }();
    g._tempMatrix = new e.Matrix(), g._tempResultMatrix = new e.Matrix(), g.useSameMatrixAndVerticle = !0, 
    g._tempVerticleArr = [];
    var v = function DeformAniData() {
        _classCallCheck(this, DeformAniData), this.deformSlotDataList = [];
    }, x = function DeformSlotData() {
        _classCallCheck(this, DeformSlotData), this.deformSlotDisplayList = [];
    }, D = function() {
        function DeformSlotDisplayData() {
            _classCallCheck(this, DeformSlotDisplayData), this.slotIndex = -1, this.timeList = [], 
            this.vectices = [], this.tweenKeyList = [], this.frameIndex = 0;
        }
        return _createClass(DeformSlotDisplayData, [ {
            key: "binarySearch1",
            value: function(t, e) {
                var i = 0, a = t.length - 2;
                if (0 == a) return 1;
                for (var r = a >>> 1; ;) {
                    if (t[Math.floor(r + 1)] <= e ? i = r + 1 : a = r, i == a) return i + 1;
                    r = i + a >>> 1;
                }
                return 0;
            }
        }, {
            key: "apply",
            value: function(t, e) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                if (t += .05, !(this.timeList.length <= 0)) {
                    var a = 0;
                    if (!(t < this.timeList[0])) {
                        var r = this.vectices[0].length, s = [], n = this.binarySearch1(this.timeList, t);
                        if (this.frameIndex = n, t >= this.timeList[this.timeList.length - 1]) {
                            var h = this.vectices[this.vectices.length - 1];
                            if (i < 1) for (a = 0; a < r; a++) s[a] += (h[a] - s[a]) * i; else for (a = 0; a < r; a++) s[a] = h[a];
                            this.deformData = s;
                        } else {
                            var l, o = this.vectices[this.frameIndex - 1], u = this.vectices[this.frameIndex], c = this.timeList[this.frameIndex - 1], _ = this.timeList[this.frameIndex];
                            for (i = this.tweenKeyList[n - 1] ? (t - c) / (_ - c) : 0, a = 0; a < r; a++) l = o[a], 
                            s[a] = l + (u[a] - l) * i;
                            this.deformData = s;
                        }
                    }
                }
            }
        } ]), DeformSlotDisplayData;
    }(), M = function DrawOrderData() {
        _classCallCheck(this, DrawOrderData), this.drawOrder = [];
    }, k = function EventData() {
        _classCallCheck(this, EventData);
    }, A = function() {
        function IkConstraint(t, e) {
            _classCallCheck(this, IkConstraint), this.isSpine = !0, this.isDebug = !1, this._targetBone = e[t.targetBoneIndex], 
            this.isSpine = t.isSpine, null == this._bones && (this._bones = []), this._bones.length = 0;
            for (var i = 0, a = t.boneIndexs.length; i < a; i++) this._bones.push(e[t.boneIndexs[i]]);
            this.name = t.name, this.mix = t.mix, this.bendDirection = t.bendDirection;
        }
        return _createClass(IkConstraint, [ {
            key: "apply",
            value: function() {
                switch (this._bones.length) {
                  case 1:
                    this._applyIk1(this._bones[0], this._targetBone.resultMatrix.tx, this._targetBone.resultMatrix.ty, this.mix);
                    break;

                  case 2:
                    this.isSpine ? this._applyIk2(this._bones[0], this._bones[1], this._targetBone.resultMatrix.tx, this._targetBone.resultMatrix.ty, this.bendDirection, this.mix) : this._applyIk3(this._bones[0], this._bones[1], this._targetBone.resultMatrix.tx, this._targetBone.resultMatrix.ty, this.bendDirection, this.mix);
                }
            }
        }, {
            key: "_applyIk1",
            value: function(t, e, i, a) {
                var r = t.parentBone, s = 1 / (r.resultMatrix.a * r.resultMatrix.d - r.resultMatrix.b * r.resultMatrix.c), n = e - r.resultMatrix.tx, h = i - r.resultMatrix.ty, l = (n * r.resultMatrix.d - h * r.resultMatrix.c) * s - t.transform.x, o = (h * r.resultMatrix.a - n * r.resultMatrix.b) * s - t.transform.y, u = Math.atan2(o, l) * IkConstraint.radDeg - 0 - t.transform.skX;
                t.transform.scX < 0 && (u += 180), u > 180 ? u -= 360 : u < -180 && (u += 360), 
                t.transform.skX = t.transform.skY = t.transform.skX + u * a, t.update();
            }
        }, {
            key: "updatePos",
            value: function(t, e) {
                this._sp && this._sp.pos(t, e);
            }
        }, {
            key: "_applyIk2",
            value: function(t, i, a, r, s, n) {
                if (0 != n) {
                    var h, l, o, u = t.resultTransform.x, c = t.resultTransform.y, _ = t.transform.scX, p = t.transform.scY, d = i.transform.scX;
                    _ < 0 ? (_ = -_, h = 180, o = -1) : (h = 0, o = 1), p < 0 && (p = -p, o = -o), d < 0 ? (d = -d, 
                    l = 180) : l = 0;
                    var f, y, m, g = i.resultTransform.x, v = t.resultMatrix.a, x = t.resultMatrix.c, D = t.resultMatrix.b, M = t.resultMatrix.d, k = Math.abs(_ - p) <= 1e-4;
                    k ? (y = v * g + x * (f = i.resultTransform.y) + t.resultMatrix.tx, m = D * g + M * f + t.resultMatrix.ty) : (f = 0, 
                    y = v * g + t.resultMatrix.tx, m = D * g + t.resultMatrix.ty), this.isDebug && (this._sp || (this._sp = new e.Sprite(), 
                    e.ILaya.stage.addChild(this._sp)), this._sp.graphics.clear(), this._sp.graphics.drawCircle(a, r, 15, "#ffff00"), 
                    this._sp.graphics.drawCircle(y, m, 15, "#ff00ff")), t.setRotation(Math.atan2(m - t.resultMatrix.ty, y - t.resultMatrix.tx));
                    var A = t.parentBone;
                    v = A.resultMatrix.a, x = A.resultMatrix.c, D = A.resultMatrix.b;
                    var I, C, S = 1 / (v * (M = A.resultMatrix.d) - x * D), T = a - A.resultMatrix.tx, b = r - A.resultMatrix.ty, P = (T * M - b * x) * S - u, F = (b * v - T * D) * S - c, w = ((T = y - A.resultMatrix.tx) * M - (b = m - A.resultMatrix.ty) * x) * S - u, B = (b * v - T * D) * S - c, L = Math.sqrt(w * w + B * B), U = i.length * d;
                    if (k) {
                        var E = (P * P + F * F - L * L - (U *= _) * U) / (2 * L * U);
                        E < -1 ? E = -1 : E > 1 && (E = 1), C = Math.acos(E) * s, v = L + U * E, x = U * Math.sin(C), 
                        I = Math.atan2(F * v - P * x, P * v + F * x);
                    } else {
                        var R = (v = _ * U) * v, O = (x = p * U) * x, N = P * P + F * F, V = Math.atan2(F, P), Y = -2 * O * L, K = O - R;
                        if ((M = Y * Y - 4 * K * (D = O * L * L + R * N - R * O)) > 0) {
                            var X = Math.sqrt(M);
                            Y < 0 && (X = -X);
                            var z = (X = -(Y + X) / 2) / K, G = D / X, W = Math.abs(z) < Math.abs(G) ? z : G;
                            W * W <= N && (b = Math.sqrt(N - W * W) * s, I = V - Math.atan2(b, W), C = Math.atan2(b / p, (W - L) / _));
                        }
                        var q = 0, H = Number.MAX_VALUE, j = 0, Q = 0, Z = 0, J = 0, $ = 0, tt = 0;
                        (M = (T = L + v) * T) > J && (Z = 0, J = M, $ = T), (M = (T = L - v) * T) < H && (q = Math.PI, 
                        H = M, j = T);
                        var et = Math.acos(-v * L / (R - O));
                        (M = (T = v * Math.cos(et) + L) * T + (b = x * Math.sin(et)) * b) < H && (q = et, 
                        H = M, j = T, Q = b), M > J && (Z = et, J = M, $ = T, tt = b), N <= (H + J) / 2 ? (I = V - Math.atan2(Q * s, j), 
                        C = q * s) : (I = V - Math.atan2(tt * s, $), C = Z * s);
                    }
                    var it = Math.atan2(f, g) * o, at = t.resultTransform.skX;
                    (I = (I - it) * IkConstraint.radDeg + h - at) > 180 ? I -= 360 : I < -180 && (I += 360), 
                    t.resultTransform.x = u, t.resultTransform.y = c, t.resultTransform.skX = t.resultTransform.skY = at + I * n, 
                    at = i.resultTransform.skX, at %= 360, (C = ((C + it) * IkConstraint.radDeg - 0) * o + l - at) > 180 ? C -= 360 : C < -180 && (C += 360), 
                    i.resultTransform.x = g, i.resultTransform.y = f, i.resultTransform.skX = i.resultTransform.skY = i.resultTransform.skY + C * n, 
                    t.update();
                }
            }
        }, {
            key: "_applyIk3",
            value: function(t, i, a, r, s, n) {
                if (0 != n) {
                    var h, l, o, u, c, _, p = i.resultMatrix.a * i.length, d = i.resultMatrix.b * i.length, f = p * p + d * d, y = Math.sqrt(f), m = t.resultMatrix.tx, g = t.resultMatrix.ty, v = i.resultMatrix.tx, x = i.resultMatrix.ty, D = v - m, M = x - g, k = D * D + M * M, A = Math.sqrt(k), I = (D = a - t.resultMatrix.tx) * D + (M = r - t.resultMatrix.ty) * M, C = Math.sqrt(I);
                    if (y + A <= C || C + y <= A || C + A <= y) {
                        var S;
                        v = m + (S = y + A <= C ? 1 : -1) * (a - m) * A / C, x = g + S * (r - g) * A / C;
                    } else {
                        var T = (k - f + I) / (2 * I), b = Math.sqrt(k - T * T * I) / C, P = m + D * T, F = g + M * T, w = -M * b, B = D * b;
                        s > 0 ? (v = P - w, x = F - B) : (v = P + w, x = F + B);
                    }
                    h = v, l = x, this.isDebug && (this._sp || (this._sp = new e.Sprite(), e.ILaya.stage.addChild(this._sp)), 
                    this._sp.graphics.clear(), this._sp.graphics.drawCircle(m, g, 15, "#ff00ff"), this._sp.graphics.drawCircle(a, r, 15, "#ffff00"), 
                    this._sp.graphics.drawCircle(h, l, 15, "#ff00ff")), o = Math.atan2(l - t.resultMatrix.ty, h - t.resultMatrix.tx), 
                    t.setRotation(o), (u = IkConstraint._tempMatrix).identity(), u.rotate(o), u.scale(t.resultMatrix.getScaleX(), t.resultMatrix.getScaleY()), 
                    u.translate(t.resultMatrix.tx, t.resultMatrix.ty), u.copyTo(t.resultMatrix), t.updateChild(), 
                    c = Math.atan2(r - l, a - h), i.setRotation(c), (_ = IkConstraint._tempMatrix).identity(), 
                    _.rotate(c), _.scale(i.resultMatrix.getScaleX(), i.resultMatrix.getScaleY()), _.translate(h, l), 
                    u.copyTo(i.resultMatrix), i.updateChild();
                }
            }
        } ]), IkConstraint;
    }();
    A.radDeg = 180 / Math.PI, A.degRad = Math.PI / 180, A._tempMatrix = new e.Matrix();
    var I = function IkConstraintData() {
        _classCallCheck(this, IkConstraintData), this.boneNames = [], this.bendDirection = 1, 
        this.mix = 1, this.isSpine = !0, this.targetBoneIndex = -1, this.boneIndexs = [];
    }, C = function() {
        function PathConstraint(t, e) {
            _classCallCheck(this, PathConstraint), this._debugKey = !1, this._segments = [], 
            this._curves = [], this.data = t, this.position = t.position, this.spacing = t.spacing, 
            this.rotateMix = t.rotateMix, this.translateMix = t.translateMix, this.bones = [];
            for (var i = this.data.bones, a = 0, r = i.length; a < r; a++) this.bones.push(e[i[a]]);
        }
        return _createClass(PathConstraint, [ {
            key: "apply",
            value: function(t, e) {
                if (this.target) {
                    var i = this.translateMix, a = this.translateMix, r = a > 0, s = this.data.spacingMode, n = "length" == s, h = this.data.rotateMode, l = "tangent" == h, o = "chainScale" == h, u = [], c = this.bones.length, _ = l ? c : c + 1, p = [];
                    this._spaces = p, p[0] = this.position;
                    var d = this.spacing;
                    if (o || n) for (var f = 0, y = _ - 1; f < y; ) {
                        var m = this.bones[f], g = m.length, v = g * m.resultMatrix.a, x = g * m.resultMatrix.b;
                        g = Math.sqrt(v * v + x * x), o && (u[f] = g), p[++f] = n ? Math.max(0, g + d) : d;
                    } else for (f = 1; f < _; f++) p[f] = d;
                    var D = this.computeWorldPositions(this.target, t, e, _, l, "percent" == this.data.positionMode, "percent" == s);
                    if (this._debugKey) {
                        for (f = 0; f < D.length; f++) e.drawCircle(D[f++], D[f++], 5, "#00ff00");
                        var M = [];
                        for (f = 0; f < D.length; f++) M.push(D[f++], D[f++]);
                        e.drawLines(0, 0, M, "#ff0000");
                    }
                    var k, A = D[0], I = D[1], C = this.data.offsetRotation, S = "chain" == h && 0 == C;
                    for (f = 0, k = 3; f < c; f++, k += 3) {
                        (m = this.bones[f]).resultMatrix.tx += (A - m.resultMatrix.tx) * i, m.resultMatrix.ty += (I - m.resultMatrix.ty) * i;
                        var T = (v = D[k]) - A, b = (x = D[k + 1]) - I;
                        if (o && 0 != (g = u[f])) {
                            var P = (Math.sqrt(T * T + b * b) / g - 1) * a + 1;
                            m.resultMatrix.a *= P, m.resultMatrix.c *= P;
                        }
                        if (A = v, I = x, r) {
                            var F, w, B, L = m.resultMatrix.a, U = m.resultMatrix.c, E = m.resultMatrix.b, R = m.resultMatrix.d;
                            F = l ? D[k - 1] : 0 == p[f + 1] ? D[k + 2] : Math.atan2(b, T), F -= Math.atan2(E, L) - C / 180 * Math.PI, 
                            S && (w = Math.cos(F), B = Math.sin(F), A += ((g = m.length) * (w * L - B * E) - T) * a, 
                            I += (g * (B * L + w * E) - b) * a), F > Math.PI ? F -= 2 * Math.PI : F < -Math.PI && (F += 2 * Math.PI), 
                            F *= a, w = Math.cos(F), B = Math.sin(F), m.resultMatrix.a = w * L - B * E, m.resultMatrix.c = w * U - B * R, 
                            m.resultMatrix.b = B * L + w * E, m.resultMatrix.d = B * U + w * R;
                        }
                    }
                }
            }
        }, {
            key: "computeWorldVertices2",
            value: function(t, e, i, a, r, s) {
                var n, h, l, o = t.currDisplayData.bones, u = t.currDisplayData.weights, c = t.currDisplayData.triangles, _ = 0, p = 0, d = 0, f = 0, y = 0, m = 0, g = 0, v = 0, x = 0, D = 0;
                if (null != o) {
                    for (_ = 0; _ < i; _ += 2) p += (f = o[p]) + 1, d += f;
                    var M = e;
                    for (y = s, m = 3 * d; y < a; y += 2) {
                        for (g = 0, v = 0, f = o[p++], f += p; p < f; p++, m += 3) {
                            n = M[o[p]].resultMatrix, x = u[m], D = u[m + 1];
                            var k = u[m + 2];
                            g += (x * n.a + D * n.c + n.tx) * k, v += (x * n.b + D * n.d + n.ty) * k;
                        }
                        r[y] = g, r[y + 1] = v;
                    }
                } else {
                    var A, I;
                    if (c || (c = u), t.deformData && (c = t.deformData), A = t.parent, e) for (l = e.length, 
                    _ = 0; _ < l; _++) if (e[_].name == A) {
                        h = e[_];
                        break;
                    }
                    h && (I = h.resultMatrix), I || (I = PathConstraint._tempMt);
                    var C = I.tx, S = I.ty, T = I.a, b = I.b, P = I.c, F = I.d;
                    for (h && (F *= h.d), p = i, y = s; y < a; p += 2, y += 2) x = c[p], D = c[p + 1], 
                    r[y] = x * T + D * b + C, r[y + 1] = -(x * P + D * F + S);
                }
            }
        }, {
            key: "computeWorldPositions",
            value: function(t, e, i, a, r, s, n) {
                t.currDisplayData.bones, t.currDisplayData.weights, t.currDisplayData.triangles;
                var h, l, o, u, c, _, p, d, f = [], y = 0, m = t.currDisplayData.verLen, g = this.position, v = this._spaces, x = [], D = m / 6, M = -1;
                if (D--, m -= 4, this.computeWorldVertices2(t, e, 2, m, f, 0), this._debugKey) for (y = 0; y < f.length; ) i.drawCircle(f[y++], f[y++], 10, "#ff0000");
                h = f, this._curves.length = D;
                var k = this._curves;
                l = 0;
                var A, I, C, S, T, b, P, F, w, B = h[0], L = h[1], U = 0, E = 0, R = 0, O = 0, N = 0, V = 0;
                for (y = 0, w = 2; y < D; y++, w += 6) T = 2 * (A = .1875 * (B - 2 * (U = h[w]) + (R = h[w + 2]))) + (C = .09375 * (3 * (U - R) - B + (N = h[w + 4]))), 
                b = 2 * (I = .1875 * (L - 2 * (E = h[w + 1]) + (O = h[w + 3]))) + (S = .09375 * (3 * (E - O) - L + (V = h[w + 5]))), 
                P = .75 * (U - B) + A + .16666667 * C, F = .75 * (E - L) + I + .16666667 * S, l += Math.sqrt(P * P + F * F), 
                P += T, F += b, T += C, b += S, l += Math.sqrt(P * P + F * F), P += T, F += b, l += Math.sqrt(P * P + F * F), 
                P += T + C, F += b + S, l += Math.sqrt(P * P + F * F), k[y] = l, B = N, L = V;
                if (s && (g *= l), n) for (y = 0; y < a; y++) v[y] *= l;
                var Y, K = this._segments, X = 0;
                for (y = 0, o = 0, u = 0, Y = 0; y < a; y++, o += 3) if ((c = g += _ = v[y]) < 0) this.addBeforePosition(c, h, 0, x, o); else if (c > l) this.addAfterPosition(c - l, h, m - 4, x, o); else {
                    for (;;u++) if (!(c > (d = k[u]))) {
                        0 == u ? c /= d : c = (c - (p = k[u - 1])) / (d - p);
                        break;
                    }
                    if (u != M) {
                        M = u;
                        var z = 6 * u;
                        for (T = 2 * (A = .03 * ((B = h[z]) - 2 * (U = h[z + 2]) + (R = h[z + 4]))) + (C = .006 * (3 * (U - R) - B + (N = h[z + 6]))), 
                        b = 2 * (I = .03 * ((L = h[z + 1]) - 2 * (E = h[z + 3]) + (O = h[z + 5]))) + (S = .006 * (3 * (E - O) - L + (V = h[z + 7]))), 
                        P = .3 * (U - B) + A + .16666667 * C, F = .3 * (E - L) + I + .16666667 * S, X = Math.sqrt(P * P + F * F), 
                        K[0] = X, z = 1; z < 8; z++) P += T, F += b, T += C, b += S, X += Math.sqrt(P * P + F * F), 
                        K[z] = X;
                        P += T, F += b, X += Math.sqrt(P * P + F * F), K[8] = X, P += T + C, F += b + S, 
                        X += Math.sqrt(P * P + F * F), K[9] = X, Y = 0;
                    }
                    for (c *= X; ;Y++) if (!(c > (d = K[Y]))) {
                        0 == Y ? c /= d : c = Y + (c - (p = K[Y - 1])) / (d - p);
                        break;
                    }
                    this.addCurvePosition(.1 * c, B, L, U, E, R, O, N, V, x, o, r || y > 0 && 0 == _);
                }
                return x;
            }
        }, {
            key: "addBeforePosition",
            value: function(t, e, i, a, r) {
                var s = e[i], n = e[i + 1], h = e[i + 2] - s, l = e[i + 3] - n, o = Math.atan2(l, h);
                a[r] = s + t * Math.cos(o), a[r + 1] = n + t * Math.sin(o), a[r + 2] = o;
            }
        }, {
            key: "addAfterPosition",
            value: function(t, e, i, a, r) {
                var s = e[i + 2], n = e[i + 3], h = s - e[i], l = n - e[i + 1], o = Math.atan2(l, h);
                a[r] = s + t * Math.cos(o), a[r + 1] = n + t * Math.sin(o), a[r + 2] = o;
            }
        }, {
            key: "addCurvePosition",
            value: function(t, e, i, a, r, s, n, h, l, o, u, c) {
                0 == t && (t = 1e-4);
                var _ = t * t, p = _ * t, d = 1 - t, f = d * d, y = f * d, m = d * t, g = 3 * m, v = d * g, x = g * t, D = e * y + a * v + s * x + h * p, M = i * y + r * v + n * x + l * p;
                o[u] = D, o[u + 1] = M, o[u + 2] = c ? Math.atan2(M - (i * f + r * m * 2 + n * _), D - (e * f + a * m * 2 + s * _)) : 0;
            }
        } ]), PathConstraint;
    }();
    C.BEFORE = -2, C.AFTER = -3, C._tempMt = new e.Matrix();
    var S = function PathConstraintData() {
        _classCallCheck(this, PathConstraintData), this.bones = [];
    }, T = function() {
        function TfConstraint(t, e) {
            var i, a;
            for (_classCallCheck(this, TfConstraint), this._temp = [], this._data = t, null == this._bones && (this._bones = []), 
            this.target = e[t.targetIndex], i = 0, a = t.boneIndexs.length; i < a; i++) this._bones.push(e[t.boneIndexs[i]]);
            this.rotateMix = t.rotateMix, this.translateMix = t.translateMix, this.scaleMix = t.scaleMix, 
            this.shearMix = t.shearMix;
        }
        return _createClass(TfConstraint, [ {
            key: "apply",
            value: function() {
                for (var t, e = this.target.resultMatrix.a, i = this.target.resultMatrix.b, a = this.target.resultMatrix.c, r = this.target.resultMatrix.d, s = 0, n = this._bones.length; s < n; s++) {
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
                        var d = Math.sqrt(t.resultMatrix.a * t.resultMatrix.a + t.resultMatrix.c * t.resultMatrix.c), f = Math.sqrt(e * e + a * a), y = d > 1e-5 ? (d + (f - d + this._data.offsetScaleX) * this.scaleMix) / d : 0;
                        t.resultMatrix.a *= y, t.resultMatrix.c *= y, d = Math.sqrt(t.resultMatrix.b * t.resultMatrix.b + t.resultMatrix.d * t.resultMatrix.d), 
                        f = Math.sqrt(i * i + r * r), y = d > 1e-5 ? (d + (f - d + this._data.offsetScaleY) * this.scaleMix) / d : 0, 
                        t.resultMatrix.b *= y, t.resultMatrix.d *= y;
                    }
                    if (this.shearMix > 0) {
                        l = t.resultMatrix.b, u = t.resultMatrix.d;
                        var m = Math.atan2(u, l);
                        (c = Math.atan2(r, i) - Math.atan2(a, e) - (m - Math.atan2(t.resultMatrix.c, t.resultMatrix.a))) > Math.PI ? c -= 2 * Math.PI : c < -Math.PI && (c += 2 * Math.PI), 
                        c = m + (c + this._data.offsetShearY * Math.PI / 180) * this.shearMix, y = Math.sqrt(l * l + u * u), 
                        t.resultMatrix.b = Math.cos(c) * y, t.resultMatrix.d = Math.sin(c) * y;
                    }
                }
            }
        } ]), TfConstraint;
    }(), b = function(t) {
        function Skeleton() {
            var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return _classCallCheck(this, Skeleton), (t = _possibleConstructorReturn(this, _getPrototypeOf(Skeleton).call(this)))._boneMatrixArray = [], 
            t._lastTime = 0, t._currAniIndex = -1, t._pause = !0, t._aniClipIndex = -1, t._clipIndex = -1, 
            t._skinIndex = 0, t._skinName = "default", t._aniMode = 0, t._index = -1, t._total = -1, 
            t._indexControl = !1, t._eventIndex = 0, t._drawOrderIndex = 0, t._drawOrder = null, 
            t._lastAniClipIndex = -1, t._lastUpdateAniClipIndex = -1, t._playAudio = !0, t._soundChannelArr = [], 
            e && t.init(e, i), t;
        }
        return _inherits(Skeleton, e.Sprite), _createClass(Skeleton, [ {
            key: "init",
            value: function(t) {
                var i, a, r, s, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, h = 0;
                if (1 == n) for (this._graphicsCache = [], h = 0, i = t.getAnimationCount(); h < i; h++) this._graphicsCache.push([]);
                if (this._yReverseMatrix = t.yReverseMatrix, this._aniMode = n, this._templet = t, 
                this._templet._addReference(1), this._player = new o(), this._player.cacheFrameRate = t.rate, 
                this._player.templet = t, this._player.play(), this._parseSrcBoneMatrix(), this._boneList = t.mBoneArr, 
                this._rootBone = t.mRootBone, this._aniSectionDic = t.aniSectionDic, t.ikArr.length > 0) for (this._ikArr = [], 
                h = 0, i = t.ikArr.length; h < i; h++) this._ikArr.push(new A(t.ikArr[h], this._boneList));
                if (t.pathArr.length > 0) for (null == this._pathDic && (this._pathDic = {}), h = 0, 
                i = t.pathArr.length; h < i; h++) a = t.pathArr[h], r = new C(a, this._boneList), 
                (s = this._boneSlotDic[a.name]) && ((r = new C(a, this._boneList)).target = s), 
                this._pathDic[a.name] = r;
                if (t.tfArr.length > 0) for (this._tfArr = [], h = 0, i = t.tfArr.length; h < i; h++) this._tfArr.push(new T(t.tfArr[h], this._boneList));
                if (t.skinDataArray.length > 0) {
                    var l = this._templet.skinDataArray[this._skinIndex];
                    this._skinName = l.name;
                }
                this._player.on(e.Event.PLAYED, this, this._onPlay), this._player.on(e.Event.STOPPED, this, this._onStop), 
                this._player.on(e.Event.PAUSED, this, this._onPause);
            }
        }, {
            key: "load",
            value: function(t) {
                var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                this._aniPath = t, this._complete = i, this._loadAniMode = a, e.ILaya.loader.load([ {
                    url: t,
                    type: e.ILaya.Loader.BUFFER
                } ], e.Handler.create(this, this._onLoaded));
            }
        }, {
            key: "_onLoaded",
            value: function() {
                var t, a = e.ILaya.Loader.getRes(this._aniPath);
                null != a && (null == i.Templet.TEMPLET_DICTIONARY && (i.Templet.TEMPLET_DICTIONARY = {}), 
                (t = i.Templet.TEMPLET_DICTIONARY[this._aniPath]) ? t.isParseFail ? this._parseFail() : t.isParserComplete ? this._parseComplete() : (t.on(e.Event.COMPLETE, this, this._parseComplete), 
                t.on(e.Event.ERROR, this, this._parseFail)) : ((t = new i.Templet())._setCreateURL(this._aniPath), 
                i.Templet.TEMPLET_DICTIONARY[this._aniPath] = t, t.on(e.Event.COMPLETE, this, this._parseComplete), 
                t.on(e.Event.ERROR, this, this._parseFail), t.isParserComplete = !1, t.parseData(null, a)));
            }
        }, {
            key: "_parseComplete",
            value: function() {
                var t = i.Templet.TEMPLET_DICTIONARY[this._aniPath];
                t && (this.init(t, this._loadAniMode), this.play(0, !0)), this._complete && this._complete.runWith(this);
            }
        }, {
            key: "_parseFail",
            value: function() {
                console.log("[Error]:" + this._aniPath + "解析失败");
            }
        }, {
            key: "_onPlay",
            value: function() {
                this.event(e.Event.PLAYED);
            }
        }, {
            key: "_onStop",
            value: function() {
                var t, i = this._templet.eventAniArr[this._aniClipIndex];
                if (i && this._eventIndex < i.length) for (;this._eventIndex < i.length; this._eventIndex++) (t = i[this._eventIndex]).time >= this._player.playStart && t.time <= this._player.playEnd && this.event(e.Event.LABEL, t);
                this._drawOrder = null, this.event(e.Event.STOPPED);
            }
        }, {
            key: "_onPause",
            value: function() {
                this.event(e.Event.PAUSED);
            }
        }, {
            key: "_parseSrcBoneMatrix",
            value: function() {
                var t = 0, i = 0;
                for (i = this._templet.srcBoneMatrixArr.length, t = 0; t < i; t++) this._boneMatrixArray.push(new e.Matrix());
                if (0 == this._aniMode) this._boneSlotDic = this._templet.boneSlotDic, this._bindBoneBoneSlotDic = this._templet.bindBoneBoneSlotDic, 
                this._boneSlotArray = this._templet.boneSlotArray; else {
                    null == this._boneSlotDic && (this._boneSlotDic = {}), null == this._bindBoneBoneSlotDic && (this._bindBoneBoneSlotDic = {}), 
                    null == this._boneSlotArray && (this._boneSlotArray = []);
                    var a, r, s = this._templet.boneSlotArray;
                    for (t = 0, i = s.length; t < i; t++) a = s[t], null == (r = this._bindBoneBoneSlotDic[a.parent]) && (this._bindBoneBoneSlotDic[a.parent] = r = []), 
                    this._boneSlotDic[a.name] = a = a.copy(), r.push(a), this._boneSlotArray.push(a);
                }
            }
        }, {
            key: "_emitMissedEvents",
            value: function(t, i) {
                var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, r = this._templet.eventAniArr[this._player.currentAnimationClipIndex];
                if (r) {
                    var s, n, h = 0;
                    for (s = r.length, h = a; h < s; h++) (n = r[h]).time >= this._player.playStart && n.time <= this._player.playEnd && this.event(e.Event.LABEL, n);
                }
            }
        }, {
            key: "_update",
            value: function() {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                if (!(this._pause || t && this._indexControl)) {
                    var i = this.timer.currTimer, a = this._player.currentKeyframeIndex, r = i - this._lastTime;
                    if (t ? this._player._update(r) : a = -1, this._lastTime = i, this._player && (this._index = this._clipIndex = this._player.currentKeyframeIndex, 
                    !(this._index < 0 || r > 0 && this._clipIndex == a && this._lastUpdateAniClipIndex == this._aniClipIndex))) {
                        this._lastUpdateAniClipIndex = this._aniClipIndex, a > this._clipIndex && 0 != this._eventIndex && (this._emitMissedEvents(this._player.playStart, this._player.playEnd, this._eventIndex), 
                        this._eventIndex = 0);
                        var s, n, h = this._templet.eventAniArr[this._aniClipIndex];
                        if (h && this._eventIndex < h.length) {
                            var l = h[this._eventIndex];
                            l.time >= this._player.playStart && l.time <= this._player.playEnd ? this._player.currentPlayTime >= l.time && (this.event(e.Event.LABEL, l), 
                            this._eventIndex++, this._playAudio && l.audioValue && "null" !== l.audioValue && "undefined" !== l.audioValue && (s = e.SoundManager.playSound(this._player.templet._path + l.audioValue, 1, e.Handler.create(this, this._onAniSoundStoped)), 
                            e.SoundManager.playbackRate = this._player.playbackRate, s && this._soundChannelArr.push(s))) : l.time < this._player.playStart && this._playAudio && l.audioValue && "null" !== l.audioValue && "undefined" !== l.audioValue ? (this._eventIndex++, 
                            s = e.SoundManager.playSound(this._player.templet._path + l.audioValue, 1, e.Handler.create(this, this._onAniSoundStoped), null, (this._player.currentPlayTime - l.time) / 1e3), 
                            e.SoundManager.playbackRate = this._player.playbackRate, s && this._soundChannelArr.push(s)) : this._eventIndex++;
                        }
                        0 == this._aniMode ? (n = this._templet.getGrahicsDataWithCache(this._aniClipIndex, this._clipIndex) || this._createGraphics()) && this.graphics != n && (this.graphics = n) : 1 == this._aniMode ? (n = this._getGrahicsDataWithCache(this._aniClipIndex, this._clipIndex) || this._createGraphics()) && this.graphics != n && (this.graphics = n) : this._createGraphics();
                    }
                }
            }
        }, {
            key: "_onAniSoundStoped",
            value: function(t) {
                for (var e, i = this._soundChannelArr.length, a = 0; a < i; a++) ((e = this._soundChannelArr[a]).isStopped || t) && (!e.isStopped && e.stop(), 
                this._soundChannelArr.splice(a, 1), i--, a--);
            }
        }, {
            key: "_createGraphics",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
                -1 == t && (t = this._clipIndex);
                var i, a = t * this._player.cacheFrameRateInterval, r = this._templet.drawOrderAniArr[this._aniClipIndex];
                if (r && r.length > 0) for (this._drawOrderIndex = 0, i = r[this._drawOrderIndex]; a >= i.time && (this._drawOrder = i.drawOrder, 
                this._drawOrderIndex++, !(this._drawOrderIndex >= r.length)); ) i = r[this._drawOrderIndex];
                0 == this._aniMode || 1 == this._aniMode ? this.graphics = _.create() : this.graphics instanceof _ ? this.graphics.clear() : this.graphics = _.create();
                var s = this.graphics, n = this._templet.getNodes(this._aniClipIndex), h = 0 == this._player.state;
                this._templet.getOriginalData(this._aniClipIndex, this._curOriginalData, null, t, h ? a + this._player.cacheFrameRateInterval : a);
                var l, o, u, c, p = this._aniSectionDic[this._aniClipIndex], d = 0, f = 0, y = 0, m = 0, g = 0, v = this._templet.srcBoneMatrixArr.length, x = this._curOriginalData;
                for (f = 0, g = p[0]; f < v; f++) {
                    var D = (c = this._boneList[f]).resultTransform;
                    u = this._templet.srcBoneMatrixArr[f], D.scX = u.scX * x[d++], D.skX = u.skX + x[d++], 
                    D.skY = u.skY + x[d++], D.scY = u.scY * x[d++], D.x = u.x + x[d++], D.y = u.y + x[d++], 
                    8 === this._templet.tMatrixDataLen && (D.skewX = u.skewX + x[d++], D.skewY = u.skewY + x[d++]);
                }
                var M, k = {}, A = {};
                for (g += p[1]; f < g; f++) k[(M = n[f]).name] = x[d++], A[M.name] = x[d++], d += 4;
                var I, C, S = {}, T = {};
                for (g += p[2]; f < g; f++) S[(M = n[f]).name] = x[d++], T[M.name] = x[d++], d += 4;
                if (this._pathDic) for (g += p[3]; f < g; f++) {
                    if (M = n[f], I = this._pathDic[M.name]) switch (new e.Byte(M.extenData).getByte()) {
                      case 1:
                        I.position = x[d++];
                        break;

                      case 2:
                        I.spacing = x[d++];
                        break;

                      case 3:
                        I.rotateMix = x[d++], I.translateMix = x[d++];
                    }
                }
                if (this._rootBone.update(this._yReverseMatrix || e.Matrix.TEMP.identity()), this._ikArr) for (f = 0, 
                g = this._ikArr.length; f < g; f++) (C = this._ikArr[f]).name in S && (C.bendDirection = S[C.name]), 
                C.name in T && (C.mix = T[C.name]), C.apply();
                if (this._pathDic) for (var b in this._pathDic) (I = this._pathDic[b]).apply(this._boneList, s);
                if (this._tfArr) for (f = 0, m = this._tfArr.length; f < m; f++) this._tfArr[f].apply();
                for (f = 0, m = this._boneList.length; f < m; f++) if (c = this._boneList[f], o = this._bindBoneBoneSlotDic[c.name], 
                c.resultMatrix.copyTo(this._boneMatrixArray[f]), o) for (y = 0, g = o.length; y < g; y++) (l = o[y]) && l.setParentMatrix(c.resultMatrix);
                var P, F, w, B, L = {}, U = this._templet.deformAniArr;
                if (U && U.length > 0) {
                    if (this._lastAniClipIndex != this._aniClipIndex) for (this._lastAniClipIndex = this._aniClipIndex, 
                    f = 0, g = this._boneSlotArray.length; f < g; f++) (l = this._boneSlotArray[f]).deformData = null;
                    var E, R = U[this._aniClipIndex];
                    for (E in P = R.default, this._setDeform(P, L, this._boneSlotArray, a), R) "default" != E && E != this._skinName && (P = R[E], 
                    this._setDeform(P, L, this._boneSlotArray, a));
                    P = R[this._skinName], this._setDeform(P, L, this._boneSlotArray, a);
                }
                if (this._drawOrder) for (f = 0, g = this._drawOrder.length; f < g; f++) F = k[(l = this._boneSlotArray[this._drawOrder[f]]).name], 
                w = A[l.name], isNaN(F) || -2 == F || (this._templet.attachmentNames ? l.showDisplayByName(this._templet.attachmentNames[F]) : l.showDisplayByIndex(F)), 
                L[this._drawOrder[f]] ? (B = L[this._drawOrder[f]], l.currDisplayData && B[l.currDisplayData.attachmentName] ? l.deformData = B[l.currDisplayData.attachmentName] : l.deformData = null) : l.deformData = null, 
                isNaN(w) ? l.draw(s, this._boneMatrixArray, 2 == this._aniMode) : l.draw(s, this._boneMatrixArray, 2 == this._aniMode, w); else for (f = 0, 
                g = this._boneSlotArray.length; f < g; f++) F = k[(l = this._boneSlotArray[f]).name], 
                w = A[l.name], isNaN(F) || -2 == F || (this._templet.attachmentNames ? l.showDisplayByName(this._templet.attachmentNames[F]) : l.showDisplayByIndex(F)), 
                L[f] ? (B = L[f], l.currDisplayData && B[l.currDisplayData.attachmentName] ? l.deformData = B[l.currDisplayData.attachmentName] : l.deformData = null) : l.deformData = null, 
                isNaN(w) ? l.draw(s, this._boneMatrixArray, 2 == this._aniMode) : l.draw(s, this._boneMatrixArray, 2 == this._aniMode, w);
                return 0 == this._aniMode ? (this._templet.setGrahicsDataWithCache(this._aniClipIndex, t, s), 
                this._checkIsAllParsed(this._aniClipIndex)) : 1 == this._aniMode && this._setGrahicsDataWithCache(this._aniClipIndex, t, s), 
                s;
            }
        }, {
            key: "_checkIsAllParsed",
            value: function(t) {
                var e, i;
                for (i = Math.floor(.01 + this._templet.getAniDuration(t) / 1e3 * this._player.cacheFrameRate), 
                e = 0; e < i; e++) if (!this._templet.getGrahicsDataWithCache(t, e)) return;
                this._templet.getGrahicsDataWithCache(t, i) ? this._templet.deleteAniData(t) : this._createGraphics(i);
            }
        }, {
            key: "_setDeform",
            value: function(t, e, i, a) {
                var r, s, n, h, l, o;
                if (t && t) for (h = 0, l = t.deformSlotDataList.length; h < l; h++) for (r = t.deformSlotDataList[h], 
                o = 0; o < r.deformSlotDisplayList.length; o++) n = i[(s = r.deformSlotDisplayList[o]).slotIndex], 
                s.apply(a, n), e[s.slotIndex] || (e[s.slotIndex] = {}), e[s.slotIndex][s.attachment] = s.deformData;
            }
        }, {
            key: "getAnimNum",
            value: function() {
                return this._templet.getAnimationCount();
            }
        }, {
            key: "getAniNameByIndex",
            value: function(t) {
                return this._templet.getAniNameByIndex(t);
            }
        }, {
            key: "getSlotByName",
            value: function(t) {
                return this._boneSlotDic[t];
            }
        }, {
            key: "showSkinByName",
            value: function(t) {
                var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                this.showSkinByIndex(this._templet.getSkinIndexByName(t), e);
            }
        }, {
            key: "showSkinByIndex",
            value: function(t) {
                for (var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i = 0; i < this._boneSlotArray.length; i++) this._boneSlotArray[i].showSlotData(null, e);
                if (this._templet.showSkinByIndex(this._boneSlotDic, t, e)) {
                    var a = this._templet.skinDataArray[t];
                    this._skinIndex = t, this._skinName = a.name;
                }
                this._clearCache();
            }
        }, {
            key: "showSlotSkinByIndex",
            value: function(t, e) {
                if (0 != this._aniMode) {
                    var i = this.getSlotByName(t);
                    i && i.showDisplayByIndex(e), this._clearCache();
                }
            }
        }, {
            key: "showSlotSkinByName",
            value: function(t, e) {
                if (0 != this._aniMode) {
                    var i = this.getSlotByName(t);
                    i && i.showDisplayByName(e), this._clearCache();
                }
            }
        }, {
            key: "replaceSlotSkinName",
            value: function(t, e, i) {
                if (0 != this._aniMode) {
                    var a = this.getSlotByName(t);
                    a && a.replaceDisplayByName(e, i), this._clearCache();
                }
            }
        }, {
            key: "replaceSlotSkinByIndex",
            value: function(t, e, i) {
                if (0 != this._aniMode) {
                    var a = this.getSlotByName(t);
                    a && a.replaceDisplayByIndex(e, i), this._clearCache();
                }
            }
        }, {
            key: "setSlotSkin",
            value: function(t, e) {
                if (0 != this._aniMode) {
                    var i = this.getSlotByName(t);
                    i && i.replaceSkin(e), this._clearCache();
                }
            }
        }, {
            key: "_clearCache",
            value: function() {
                if (1 == this._aniMode) for (var t = 0, e = this._graphicsCache.length; t < e; t++) {
                    for (var i = 0, a = this._graphicsCache[t].length; i < a; i++) {
                        var r = this._graphicsCache[t][i];
                        r && r != this.graphics && _.recycle(r);
                    }
                    this._graphicsCache[t].length = 0;
                }
            }
        }, {
            key: "play",
            value: function(t, i) {
                var a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0, n = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], h = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
                this._playAudio = h, this._indexControl = !1;
                var l, o = -1;
                if (l = i ? 2147483647 : 0, "string" == typeof t) for (var u = 0, c = this._templet.getAnimationCount(); u < c; u++) {
                    var _ = this._templet.getAnimation(u);
                    if (_ && t == _.name) {
                        o = u;
                        break;
                    }
                } else o = t;
                o > -1 && o < this.getAnimNum() && (this._aniClipIndex = o, (a || this._pause || this._currAniIndex != o) && (this._currAniIndex = o, 
                this._curOriginalData = new Float32Array(this._templet.getTotalkeyframesLength(o)), 
                this._drawOrder = null, this._eventIndex = 0, this._player.play(o, this._player.playbackRate, l, r, s), 
                n && this._templet.showSkinByIndex(this._boneSlotDic, this._skinIndex), this._pause && (this._pause = !1, 
                this._lastTime = e.ILaya.Browser.now(), this.timer.frameLoop(1, this, this._update, null, !0)), 
                this._update()));
            }
        }, {
            key: "stop",
            value: function() {
                this._pause || (this._pause = !0, this._player && this._player.stop(!0), this._soundChannelArr.length > 0 && this._onAniSoundStoped(!0), 
                this.timer.clear(this, this._update));
            }
        }, {
            key: "playbackRate",
            value: function(t) {
                this._player && (this._player.playbackRate = t);
            }
        }, {
            key: "paused",
            value: function() {
                if (!this._pause) {
                    if (this._pause = !0, this._player && (this._player.paused = !0), this._soundChannelArr.length > 0) for (var t, e = this._soundChannelArr.length, i = 0; i < e; i++) (t = this._soundChannelArr[i]).isStopped || t.pause();
                    this.timer.clear(this, this._update);
                }
            }
        }, {
            key: "resume",
            value: function() {
                if (this._indexControl = !1, this._pause) {
                    if (this._pause = !1, this._player && (this._player.paused = !1), this._soundChannelArr.length > 0) for (var t, i = this._soundChannelArr.length, a = 0; a < i; a++) (t = this._soundChannelArr[a]).audioBuffer && t.resume();
                    this._lastTime = e.ILaya.Browser.now(), this.timer.frameLoop(1, this, this._update, null, !0);
                }
            }
        }, {
            key: "_getGrahicsDataWithCache",
            value: function(t, e) {
                return this._graphicsCache[t][e];
            }
        }, {
            key: "_setGrahicsDataWithCache",
            value: function(t, e, i) {
                this._graphicsCache[t][e] = i;
            }
        }, {
            key: "destroy",
            value: function() {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                _get(_getPrototypeOf(Skeleton.prototype), "destroy", this).call(this, t), this._templet._removeReference(1), 
                this._templet = null, this._player && this._player.offAll(), this._player = null, 
                this._curOriginalData = null, this._boneMatrixArray.length = 0, this._lastTime = 0, 
                this.timer.clear(this, this._update), this._soundChannelArr.length > 0 && this._onAniSoundStoped(!0);
            }
        }, {
            key: "url",
            get: function() {
                return this._aniPath;
            },
            set: function(t) {
                this.load(t);
            }
        }, {
            key: "index",
            get: function() {
                return this._index;
            },
            set: function(t) {
                this.player && (this._index = t, this._player.currentTime = 1e3 * this._index / this._player.cacheFrameRate, 
                this._indexControl = !0, this._update(!1));
            }
        }, {
            key: "total",
            get: function() {
                return this._templet && this._player ? this._total = Math.floor(this._templet.getAniDuration(this._player.currentAnimationClipIndex) / 1e3 * this._player.cacheFrameRate) : this._total = -1, 
                this._total;
            }
        }, {
            key: "player",
            get: function() {
                return this._player;
            }
        }, {
            key: "templet",
            get: function() {
                return this._templet;
            }
        } ]), Skeleton;
    }();
    b.useSimpleMeshInCanvas = !1, i.Skeleton = b, e.ILaya.regClass(b), e.ClassUtils.regClass("laya.ani.bone.Skeleton", b), 
    e.ClassUtils.regClass("Laya.Skeleton", b);
    var P = function SkinData() {
        _classCallCheck(this, SkinData), this.slotArr = [];
    }, F = function() {
        function SkinSlotDisplayData() {
            _classCallCheck(this, SkinSlotDisplayData);
        }
        return _createClass(SkinSlotDisplayData, [ {
            key: "createTexture",
            value: function(t) {
                return this.texture ? this.texture : (this.texture = new e.Texture(t.bitmap, this.uvs), 
                this.uvs[0] > this.uvs[4] && this.uvs[1] > this.uvs[5] ? (this.texture.width = t.height, 
                this.texture.height = t.width, this.texture.offsetX = -t.offsetX, this.texture.offsetY = -t.offsetY, 
                this.texture.sourceWidth = t.sourceHeight, this.texture.sourceHeight = t.sourceWidth) : (this.texture.width = t.width, 
                this.texture.height = t.height, this.texture.offsetX = -t.offsetX, this.texture.offsetY = -t.offsetY, 
                this.texture.sourceWidth = t.sourceWidth, this.texture.sourceHeight = t.sourceHeight), 
                this.texture);
            }
        }, {
            key: "destory",
            value: function() {
                this.texture && this.texture.destroy();
            }
        } ]), SkinSlotDisplayData;
    }(), w = function() {
        function SlotData() {
            _classCallCheck(this, SlotData), this.displayArr = [];
        }
        return _createClass(SlotData, [ {
            key: "getDisplayByName",
            value: function(t) {
                for (var e = 0, i = this.displayArr.length; e < i; e++) if (this.displayArr[e].attachmentName == t) return e;
                return -1;
            }
        } ]), SlotData;
    }(), B = function TfConstraintData() {
        _classCallCheck(this, TfConstraintData), this.boneIndexs = [];
    }, L = function(t) {
        function Templet() {
            var t;
            return _classCallCheck(this, Templet), (t = _possibleConstructorReturn(this, _getPrototypeOf(Templet).apply(this, arguments)))._graphicsCache = [], 
            t.srcBoneMatrixArr = [], t.ikArr = [], t.tfArr = [], t.pathArr = [], t.boneSlotDic = {}, 
            t.bindBoneBoneSlotDic = {}, t.boneSlotArray = [], t.skinDataArray = [], t.skinDic = {}, 
            t.subTextureDic = {}, t.isParseFail = !1, t.drawOrderAniArr = [], t.eventAniArr = [], 
            t.attachmentNames = null, t.deformAniArr = [], t.skinSlotDisplayDataArr = [], t._isParseAudio = !1, 
            t._isDestroyed = !1, t._rate = 30, t.isParserComplete = !1, t.aniSectionDic = {}, 
            t._textureDic = {}, t.mBoneArr = [], t;
        }
        return _inherits(Templet, c), _createClass(Templet, [ {
            key: "loadAni",
            value: function(t) {
                this._skBufferUrl = t, e.ILaya.loader.load(t, e.Handler.create(this, this.onComplete), null, e.ILaya.Loader.BUFFER);
            }
        }, {
            key: "onComplete",
            value: function() {
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (this._isDestroyed) this.destroy(); else {
                    var t = e.ILaya.Loader.getRes(this._skBufferUrl);
                    t ? (this._path = this._skBufferUrl.slice(0, this._skBufferUrl.lastIndexOf("/")) + "/", 
                    this.parseData(null, t)) : this.event(e.Event.ERROR, "load failed:" + this._skBufferUrl);
                }
            }
        }, {
            key: "parseData",
            value: function(t, e) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 30;
                if (!this._path) {
                    var a = this._relativeUrl || this.url;
                    if (a) {
                        var r = a.lastIndexOf("/");
                        this._path = r > 0 ? a.slice(0, r) + "/" : "";
                    }
                }
                this._mainTexture = t, this._rate = i, this.parse(e);
            }
        }, {
            key: "buildArmature",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                return new b(this, t);
            }
        }, {
            key: "parse",
            value: function(t) {
                _get(_getPrototypeOf(Templet.prototype), "parse", this).call(this, t), this.event(e.Event.LOADED, this), 
                this._aniVersion === Templet.LAYA_ANIMATION_VISION ? this._isParseAudio = !0 : this._aniVersion != Templet.LAYA_ANIMATION_160_VISION && console.log("[Error] 版本不一致，请使用IDE版本配套的重新导出" + this._aniVersion + "->" + Templet.LAYA_ANIMATION_VISION), 
                this._mainTexture ? this._parsePublicExtData() : this._parseTexturePath();
            }
        }, {
            key: "_parseTexturePath",
            value: function() {
                if (this._isDestroyed) this.destroy(); else {
                    var t = 0;
                    this._loadList = [];
                    var i, a = new e.Byte(this.getPublicExtData()), r = a.getInt32(), s = a.readUTFString(), n = s.split("\n");
                    for (t = 0; t < r; t++) i = this._path + n[2 * t], s = n[2 * t + 1], a.getFloat32(), 
                    a.getFloat32(), a.getFloat32(), a.getFloat32(), a.getFloat32(), a.getFloat32(), 
                    a.getFloat32(), a.getFloat32(), -1 == this._loadList.indexOf(i) && this._loadList.push(i);
                    e.ILaya.loader.load(this._loadList, e.Handler.create(this, this._textureComplete));
                }
            }
        }, {
            key: "_textureComplete",
            value: function() {
                for (var t, i = 0, a = this._loadList.length; i < a; i++) t = this._loadList[i], 
                this._textureDic[t] = e.ILaya.Loader.getRes(t);
                this._parsePublicExtData();
            }
        }, {
            key: "_parsePublicExtData",
            value: function() {
                var t, i = 0, a = 0, r = 0, s = 0, n = 0;
                for (i = 0, n = this.getAnimationCount(); i < n; i++) this._graphicsCache.push([]);
                t = "Dragon" != this._aniClassName;
                var h, l, o = new e.Byte(this.getPublicExtData()), u = 0, c = 0, _ = 0, f = 0, y = 0, m = 0, A = 0, C = 0, T = 0, b = o.getInt32(), L = o.readUTFString(), U = L.split("\n");
                for (i = 0; i < b; i++) {
                    if (h = this._mainTexture, l = this._path + U[2 * i], L = U[2 * i + 1], null == this._mainTexture && (h = this._textureDic[l]), 
                    !h) return this.event(e.Event.ERROR, this), void (this.isParseFail = !0);
                    u = o.getFloat32(), c = o.getFloat32(), _ = o.getFloat32(), f = o.getFloat32(), 
                    T = o.getFloat32(), y = isNaN(T) ? 0 : T, T = o.getFloat32(), m = isNaN(T) ? 0 : T, 
                    T = o.getFloat32(), A = isNaN(T) ? _ : T, T = o.getFloat32(), C = isNaN(T) ? f : T, 
                    this.subTextureDic[L] = e.Texture.create(h, u, c, _, f, -y, -m, A, C);
                }
                this._mainTexture = h;
                var E, R, O, N, V, Y = o.getUint16();
                for (i = 0; i < Y; i++) (E = []).push(o.getUint16()), E.push(o.getUint16()), E.push(o.getUint16()), 
                E.push(o.getUint16()), this.aniSectionDic[i] = E;
                var K, X = o.getInt16(), z = {};
                for (i = 0; i < X; i++) R = new d(), 0 == i ? K = R : R.root = K, R.d = t ? -1 : 1, 
                N = o.readUTFString(), V = o.readUTFString(), R.length = o.getFloat32(), 1 == o.getByte() && (R.inheritRotation = !1), 
                1 == o.getByte() && (R.inheritScale = !1), R.name = N, V && ((O = z[V]) ? O.addChild(R) : this.mRootBone = R), 
                z[N] = R, this.mBoneArr.push(R);
                this.tMatrixDataLen = o.getUint16();
                var G, W, q = o.getUint16(), H = Math.floor(q / this.tMatrixDataLen), j = this.srcBoneMatrixArr;
                for (i = 0; i < H; i++) (G = new p()).scX = o.getFloat32(), G.skX = o.getFloat32(), 
                G.skY = o.getFloat32(), G.scY = o.getFloat32(), G.x = o.getFloat32(), G.y = o.getFloat32(), 
                8 === this.tMatrixDataLen && (G.skewX = o.getFloat32(), G.skewY = o.getFloat32()), 
                j.push(G), (R = this.mBoneArr[i]).transform = G;
                var Q, Z, J = o.getUint16();
                for (i = 0; i < J; i++) {
                    for (W = new I(), Q = o.getUint16(), a = 0; a < Q; a++) W.boneNames.push(o.readUTFString()), 
                    W.boneIndexs.push(o.getInt16());
                    W.name = o.readUTFString(), W.targetBoneName = o.readUTFString(), W.targetBoneIndex = o.getInt16(), 
                    W.bendDirection = o.getFloat32(), W.mix = o.getFloat32(), W.isSpine = t, this.ikArr.push(W);
                }
                var $, tt, et = o.getUint16();
                for (i = 0; i < et; i++) {
                    for (Z = new B(), $ = o.getUint16(), a = 0; a < $; a++) Z.boneIndexs.push(o.getInt16());
                    Z.name = o.getUTFString(), Z.targetIndex = o.getInt16(), Z.rotateMix = o.getFloat32(), 
                    Z.translateMix = o.getFloat32(), Z.scaleMix = o.getFloat32(), Z.shearMix = o.getFloat32(), 
                    Z.offsetRotation = o.getFloat32(), Z.offsetX = o.getFloat32(), Z.offsetY = o.getFloat32(), 
                    Z.offsetScaleX = o.getFloat32(), Z.offsetScaleY = o.getFloat32(), Z.offsetShearY = o.getFloat32(), 
                    this.tfArr.push(Z);
                }
                var it, at, rt, st, nt, ht, lt, ot, ut, ct, _t = o.getUint16();
                for (i = 0; i < _t; i++) {
                    for ((tt = new S()).name = o.readUTFString(), it = o.getUint16(), a = 0; a < it; a++) tt.bones.push(o.getInt16());
                    tt.target = o.readUTFString(), tt.positionMode = o.readUTFString(), tt.spacingMode = o.readUTFString(), 
                    tt.rotateMode = o.readUTFString(), tt.offsetRotation = o.getFloat32(), tt.position = o.getFloat32(), 
                    tt.spacing = o.getFloat32(), tt.rotateMix = o.getFloat32(), tt.translateMix = o.getFloat32(), 
                    this.pathArr.push(tt);
                }
                var pt, dt = o.getInt16();
                for (i = 0; i < dt; i++) {
                    var ft = o.getUint8(), yt = {};
                    this.deformAniArr.push(yt);
                    for (var mt = 0; mt < ft; mt++) for ((lt = new v()).skinName = o.getUTFString(), 
                    yt[lt.skinName] = lt, at = o.getInt16(), a = 0; a < at; a++) for (ot = new x(), 
                    lt.deformSlotDataList.push(ot), rt = o.getInt16(), r = 0; r < rt; r++) for (ut = new D(), 
                    ot.deformSlotDisplayList.push(ut), ut.slotIndex = o.getInt16(), ut.attachment = o.getUTFString(), 
                    st = o.getInt16(), s = 0; s < st; s++) for (1 == o.getByte() ? ut.tweenKeyList.push(!0) : ut.tweenKeyList.push(!1), 
                    nt = o.getFloat32(), ut.timeList.push(nt), ct = [], ut.vectices.push(ct), ht = o.getInt16(), 
                    n = 0; n < ht; n++) ct.push(o.getFloat32());
                }
                var gt, vt, xt, Dt, Mt = o.getInt16();
                for (i = 0; i < Mt; i++) {
                    for (gt = o.getInt16(), pt = [], a = 0; a < gt; a++) {
                        for ((vt = new M()).time = o.getFloat32(), xt = o.getInt16(), r = 0; r < xt; r++) vt.drawOrder.push(o.getInt16());
                        pt.push(vt);
                    }
                    this.drawOrderAniArr.push(pt);
                }
                var kt, At, It = o.getInt16();
                for (i = 0; i < It; i++) {
                    for (kt = o.getInt16(), Dt = [], a = 0; a < kt; a++) (At = new k()).name = o.getUTFString(), 
                    this._isParseAudio && (At.audioValue = o.getUTFString()), At.intValue = o.getInt32(), 
                    At.floatValue = o.getFloat32(), At.stringValue = o.getUTFString(), At.time = o.getFloat32(), 
                    Dt.push(At);
                    this.eventAniArr.push(Dt);
                }
                var Ct = o.getInt16();
                if (Ct > 0) for (this.attachmentNames = [], i = 0; i < Ct; i++) this.attachmentNames.push(o.getUTFString());
                var St, Tt, bt = o.getInt16();
                for (i = 0; i < bt; i++) (St = new g()).name = o.readUTFString(), St.parent = o.readUTFString(), 
                St.attachmentName = o.readUTFString(), St.srcDisplayIndex = St.displayIndex = o.getInt16(), 
                St.templet = this, this.boneSlotDic[St.name] = St, null == (Tt = this.bindBoneBoneSlotDic[St.parent]) && (this.bindBoneBoneSlotDic[St.parent] = Tt = []), 
                Tt.push(St), this.boneSlotArray.push(St);
                var Pt, Ft, wt, Bt, Lt, Ut, Et, Rt, Ot, Nt, Vt = o.readUTFString().split("\n"), Yt = 0, Kt = o.getUint8();
                for (i = 0; i < Kt; i++) {
                    for ((Pt = new P()).name = Vt[Yt++], Bt = o.getUint8(), a = 0; a < Bt; a++) {
                        for ((Ft = new w()).name = Vt[Yt++], St = this.boneSlotDic[Ft.name], Lt = o.getUint8(), 
                        r = 0; r < Lt; r++) {
                            if (wt = new F(), this.skinSlotDisplayDataArr.push(wt), wt.name = Vt[Yt++], wt.attachmentName = Vt[Yt++], 
                            wt.transform = new p(), wt.transform.scX = o.getFloat32(), wt.transform.skX = o.getFloat32(), 
                            wt.transform.skY = o.getFloat32(), wt.transform.scY = o.getFloat32(), wt.transform.x = o.getFloat32(), 
                            wt.transform.y = o.getFloat32(), Ft.displayArr.push(wt), wt.width = o.getFloat32(), 
                            wt.height = o.getFloat32(), wt.type = o.getUint8(), wt.verLen = o.getUint16(), (X = o.getUint16()) > 0) for (wt.bones = [], 
                            s = 0; s < X; s++) {
                                var Xt = o.getUint16();
                                wt.bones.push(Xt);
                            }
                            if ((Ut = o.getUint16()) > 0) for (wt.uvs = [], s = 0; s < Ut; s++) wt.uvs.push(o.getFloat32());
                            if ((Et = o.getUint16()) > 0) for (wt.weights = [], s = 0; s < Et; s++) wt.weights.push(o.getFloat32());
                            if ((Rt = o.getUint16()) > 0) for (wt.triangles = [], s = 0; s < Rt; s++) wt.triangles.push(o.getUint16());
                            if ((Ot = o.getUint16()) > 0) for (wt.vertices = [], s = 0; s < Ot; s++) wt.vertices.push(o.getFloat32());
                            if ((Nt = o.getUint16()) > 0) for (wt.lengths = [], s = 0; s < Nt; s++) wt.lengths.push(o.getFloat32());
                        }
                        Pt.slotArr.push(Ft);
                    }
                    this.skinDic[Pt.name] = Pt, this.skinDataArray.push(Pt);
                }
                1 == o.getUint8() ? (this.yReverseMatrix = new e.Matrix(1, 0, 0, -1, 0, 0), K && K.setTempMatrix(this.yReverseMatrix)) : K && K.setTempMatrix(new e.Matrix()), 
                this.showSkinByIndex(this.boneSlotDic, 0), this.isParserComplete = !0, this.event(e.Event.COMPLETE, this);
            }
        }, {
            key: "getTexture",
            value: function(t) {
                var e = this.subTextureDic[t];
                return e || (e = this.subTextureDic[t.substr(0, t.length - 1)]), null == e ? this._mainTexture : e;
            }
        }, {
            key: "showSkinByIndex",
            value: function(t, e) {
                var i, a, r, s, n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                if (e < 0 && e >= this.skinDataArray.length) return !1;
                var h = this.skinDataArray[e];
                if (h) {
                    for (i = 0, a = h.slotArr.length; i < a; i++) (s = h.slotArr[i]) && (r = t[s.name]) && (r.showSlotData(s, n), 
                    n && "undefined" != r.attachmentName && "null" != r.attachmentName ? r.showDisplayByName(r.attachmentName) : r.showDisplayByIndex(r.displayIndex));
                    return !0;
                }
                return !1;
            }
        }, {
            key: "getSkinIndexByName",
            value: function(t) {
                for (var e = 0, i = this.skinDataArray.length; e < i; e++) if (this.skinDataArray[e].name == t) return e;
                return -1;
            }
        }, {
            key: "getGrahicsDataWithCache",
            value: function(t, e) {
                return this._graphicsCache[t] && this._graphicsCache[t][e] ? this._graphicsCache[t][e] : null;
            }
        }, {
            key: "_setCreateURL",
            value: function(t) {
                this._skBufferUrl = this._relativeUrl = t, _get(_getPrototypeOf(Templet.prototype), "_setCreateURL", this).call(this, t);
            }
        }, {
            key: "setGrahicsDataWithCache",
            value: function(t, e, i) {
                this._graphicsCache[t][e] = i;
            }
        }, {
            key: "deleteAniData",
            value: function(t) {
                if (this._anis[t]) {
                    var e = this._anis[t];
                    e.bone3DMap = null, e.nodes = null;
                }
            }
        }, {
            key: "destroy",
            value: function() {
                var t;
                for (t in this._isDestroyed = !0, this.subTextureDic) t && this.subTextureDic[t].destroy();
                for (t in this._textureDic) t && this._textureDic[t].destroy();
                for (var i = 0, a = this.skinSlotDisplayDataArr.length; i < a; i++) this.skinSlotDisplayDataArr[i].destory();
                this.skinSlotDisplayDataArr.length = 0, this._relativeUrl && delete Templet.TEMPLET_DICTIONARY[this._relativeUrl], 
                _get(_getPrototypeOf(Templet.prototype), "destroy", this).call(this), e.ILaya.loader.clearRes(this._skBufferUrl);
            }
        }, {
            key: "getAniNameByIndex",
            value: function(t) {
                var e = this.getAnimation(t);
                return e ? e.name : null;
            }
        }, {
            key: "rate",
            get: function() {
                return this._rate;
            },
            set: function(t) {
                this._rate = t;
            }
        } ]), Templet;
    }();
    L.LAYA_ANIMATION_160_VISION = "LAYAANIMATION:1.6.0", L.LAYA_ANIMATION_VISION = "LAYAANIMATION:1.7.0", 
    i.Templet = L;
    var U = function(t) {
        function MovieClip() {
            var t, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            return _classCallCheck(this, MovieClip), (t = _possibleConstructorReturn(this, _getPrototypeOf(MovieClip).call(this)))._start = 0, 
            t._Pos = 0, t._ended = !0, t._loadedImage = {}, t._endFrame = -1, t.interval = 30, 
            t._ids = {}, t._idOfSprite = [], t._reset(), t._playing = !1, t._parentMovieClip = i, 
            i ? (t._isRoot = !1, t._movieClipList = i._movieClipList, t._movieClipList.push(_assertThisInitialized(t))) : (t._movieClipList = [ _assertThisInitialized(t) ], 
            t._isRoot = !0, t._setBitUp(e.Const.DISPLAY)), t;
        }
        return _inherits(MovieClip, e.Sprite), _createClass(MovieClip, [ {
            key: "destroy",
            value: function() {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                this._clear(), _get(_getPrototypeOf(MovieClip.prototype), "destroy", this).call(this, t);
            }
        }, {
            key: "_setDisplay",
            value: function(t) {
                _get(_getPrototypeOf(MovieClip.prototype), "_setDisplay", this).call(this, t), this._isRoot && this._onDisplay(t);
            }
        }, {
            key: "_onDisplay",
            value: function(t) {
                t ? this.timer.loop(this.interval, this, this.updates, null, !0) : this.timer.clear(this, this.updates);
            }
        }, {
            key: "updates",
            value: function() {
                var t, e;
                if (!this._parentMovieClip) for (e = this._movieClipList.length, t = 0; t < e; t++) this._movieClipList[t] && this._movieClipList[t]._update();
            }
        }, {
            key: "addLabel",
            value: function(t, e) {
                this._labels || (this._labels = {}), this._labels[e] = t;
            }
        }, {
            key: "removeLabel",
            value: function(t) {
                if (t) {
                    if (!this._labels) for (var e in this._labels) if (this._labels[e] === t) {
                        delete this._labels[e];
                        break;
                    }
                } else this._labels = null;
            }
        }, {
            key: "_update",
            value: function() {
                if (this._data && this._playing) {
                    if (this._playIndex++, this._playIndex >= this._count) {
                        if (!this.loop) return this._playIndex--, void this.stop();
                        this._playIndex = 0;
                    }
                    if (this._parseFrame(this._playIndex), this._labels && this._labels[this._playIndex] && this.event(e.Event.LABEL, this._labels[this._playIndex]), 
                    -1 != this._endFrame && this._endFrame == this._playIndex) {
                        if (this._endFrame = -1, null != this._completeHandler) {
                            var t = this._completeHandler;
                            this._completeHandler = null, t.run();
                        }
                        this.stop();
                    }
                }
            }
        }, {
            key: "stop",
            value: function() {
                this._playing = !1;
            }
        }, {
            key: "gotoAndStop",
            value: function(t) {
                this.index = t, this.stop();
            }
        }, {
            key: "_clear",
            value: function() {
                if (this.stop(), this._idOfSprite.length = 0, !this._parentMovieClip) {
                    var t, i;
                    for (this.timer.clear(this, this.updates), i = this._movieClipList.length, t = 0; t < i; t++) this._movieClipList[t] != this && this._movieClipList[t]._clear();
                    this._movieClipList.length = 0;
                }
                var a;
                for (a in this._atlasPath && e.ILaya.Loader.clearRes(this._atlasPath), this._loadedImage) this._loadedImage[a] && (e.ILaya.Loader.clearRes(a), 
                this._loadedImage[a] = !1);
                this.removeChildren(), this.graphics = null, this._parentMovieClip = null;
            }
        }, {
            key: "play",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                this.loop = e, this._playing = !0, this._data && this._displayFrame(t);
            }
        }, {
            key: "_displayFrame",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
                -1 != t && (this._curIndex > t && this._reset(), this._parseFrame(t));
            }
        }, {
            key: "_reset",
            value: function() {
                (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && 1 != this._curIndex && this.removeChildren(), 
                this._preIndex = this._curIndex = -1, this._Pos = this._start;
            }
        }, {
            key: "_parseFrame",
            value: function(t) {
                var i, a, r, s, n, h, l = !1, o = this._idOfSprite, u = this._data;
                for (this._ended && this._reset(), u.pos = this._Pos, this._ended = !1, this._playIndex = t, 
                this._curIndex > t && t < this._preIndex && (this._reset(!0), u.pos = this._Pos); this._curIndex <= t && !this._ended; ) switch (u.getUint16()) {
                  case 12:
                    if (r = u.getUint16(), s = this._ids[u.getUint16()], this._Pos = u.pos, u.pos = s, 
                    0 == (n = u.getUint8())) {
                        var c = u.getUint16();
                        if (!(a = o[r])) {
                            a = o[r] = new e.Sprite();
                            var _ = new e.Sprite();
                            _.loadImage(this.basePath + c + ".png"), this._loadedImage[this.basePath + c + ".png"] = !0, 
                            a.addChild(_), _.size(u.getFloat32(), u.getFloat32());
                            var p = u._getMatrix();
                            _.transform = p;
                        }
                        a.alpha = 1;
                    } else 1 == n && ((i = o[r]) || (o[r] = i = new MovieClip(this), i.interval = this.interval, 
                    i._ids = this._ids, i.basePath = this.basePath, i._setData(u, s), i._initState(), 
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
                    o[u.getUint16()][MovieClip._ValueList[u.getUint16()]] = u.getFloat32();
                    break;

                  case 6:
                    o[u.getUint16()].visible = u.getUint8() > 0;
                    break;

                  case 7:
                    var f = (a = o[u.getUint16()]).transform || e.Matrix.create();
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
                    h = u.getString(), this.event(h), "stop" == h && this.stop();
                    break;

                  case 99:
                    this._curIndex = u.getUint16(), l && this.updateZOrder();
                    break;

                  case 100:
                    this._count = this._curIndex + 1, this._ended = !0, this._playing && (this.event(e.Event.FRAME), 
                    this.event(e.Event.END), this.event(e.Event.COMPLETE)), this._reset(!1);
                }
                this._playing && !this._ended && this.event(e.Event.FRAME), this._Pos = u.pos;
            }
        }, {
            key: "_setData",
            value: function(t, e) {
                this._data = t, this._start = e + 3;
            }
        }, {
            key: "load",
            value: function(t) {
                var i, a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                this._url = t, a && (this._atlasPath = r || t.split(".swf")[0] + ".json"), this.stop(), 
                this._clear(), this._movieClipList = [ this ], i = [ {
                    url: t,
                    type: e.ILaya.Loader.BUFFER
                } ], this._atlasPath && i.push({
                    url: this._atlasPath,
                    type: e.ILaya.Loader.ATLAS
                }), e.ILaya.loader.load(i, e.Handler.create(this, this._onLoaded));
            }
        }, {
            key: "_onLoaded",
            value: function() {
                var t;
                (t = e.ILaya.Loader.getRes(this._url)) ? !this._atlasPath || e.ILaya.Loader.getAtlas(this._atlasPath) ? (this.basePath = this._atlasPath ? e.ILaya.Loader.getAtlas(this._atlasPath).dir : this._url.split(".swf")[0] + "/image/", 
                this._initData(t)) : this.event(e.Event.ERROR, "Atlas not find") : this.event(e.Event.ERROR, "file not find");
            }
        }, {
            key: "_initState",
            value: function() {
                this._reset(), this._ended = !1;
                var t = this._playing;
                for (this._playing = !1, this._curIndex = 0; !this._ended; ) this._parseFrame(++this._curIndex);
                this._playing = t;
            }
        }, {
            key: "_initData",
            value: function(t) {
                this._data = new e.Byte(t);
                var i, a = this._data.getUint16();
                for (i = 0; i < a; i++) this._ids[this._data.getInt16()] = this._data.getInt32();
                this.interval = 1e3 / this._data.getUint16(), this._setData(this._data, this._ids[32767]), 
                this._initState(), this.play(0), this.event(e.Event.LOADED), this._parentMovieClip || this.timer.loop(this.interval, this, this.updates, null, !0);
            }
        }, {
            key: "playTo",
            value: function(t, e) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                this._completeHandler = i, this._endFrame = e, this.play(t, !1);
            }
        }, {
            key: "index",
            get: function() {
                return this._playIndex;
            },
            set: function(t) {
                this._playIndex = t, this._data && this._displayFrame(this._playIndex), this._labels && this._labels[t] && this.event(e.Event.LABEL, this._labels[t]);
            }
        }, {
            key: "count",
            get: function() {
                return this._count;
            }
        }, {
            key: "playing",
            get: function() {
                return this._playing;
            }
        }, {
            key: "url",
            set: function(t) {
                this.load(t);
            }
        } ]), MovieClip;
    }();
    U._ValueList = [ "x", "y", "width", "height", "scaleX", "scaleY", "rotation", "alpha" ], 
    t.AnimationContent = a, t.AnimationNodeContent = r, t.AnimationParser01 = n, t.AnimationParser02 = h, 
    t.AnimationPlayer = o, t.AnimationState = l, t.AnimationTemplet = c, t.BezierLerp = u, 
    t.Bone = d, t.BoneSlot = g, t.DeformAniData = v, t.DeformSlotData = x, t.DeformSlotDisplayData = D, 
    t.DrawOrderData = M, t.EventData = k, t.GraphicsAni = _, t.IAniLib = i, t.IkConstraint = A, 
    t.IkConstraintData = I, t.KeyFramesContent = s, t.MeshData = y, t.MovieClip = U, 
    t.PathConstraint = C, t.PathConstraintData = S, t.Skeleton = b, t.SkinData = P, 
    t.SkinMeshForGraphic = m, t.SkinSlotDisplayData = F, t.SlotData = w, t.Templet = L, 
    t.TfConstraint = T, t.TfConstraintData = B, t.Transform = p, t.UVTools = f;
}(window.Laya = window.Laya || {}, Laya);