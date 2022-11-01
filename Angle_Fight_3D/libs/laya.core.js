!function(){
    var _interopRequireDefault = requirea("../@babel/runtime/helpers/interopRequireDefault");

requirea("../@babel/runtime/helpers/Arrayincludes");

var _get2 = _interopRequireDefault(requirea("../@babel/runtime/helpers/get"));

var _assertThisInitialized2 = _interopRequireDefault(requirea("../@babel/runtime/helpers/assertThisInitialized"));

var _possibleConstructorReturn2 = _interopRequireDefault(requirea("../@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(requirea("../@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(requirea("../@babel/runtime/helpers/inherits"));

var _createClass2 = _interopRequireDefault(requirea("../@babel/runtime/helpers/createClass"));

var _classCallCheck2 = _interopRequireDefault(requirea("../@babel/runtime/helpers/classCallCheck"));

function _createSuper(Derived) {
    return function() {
        var Super = (0, _getPrototypeOf2.default)(Derived), result;
        if (_isNativeReflectConstruct()) {
            var NewTarget = (0, _getPrototypeOf2.default)(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return (0, _possibleConstructorReturn2.default)(this, result);
    };
}

function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}

window.Laya = function(t) {
    "use strict";
    var e = function e() {
        (0, _classCallCheck2.default)(this, e);
    };
    e.animationInterval = 50, e.isAntialias = !0, e.isAlpha = !1, e.premultipliedAlpha = !0, 
    e.isStencil = !0, e.preserveDrawingBuffer = !1, e.webGL2D_MeshAllocMaxMem = !0, 
    e.is2DPixelArtGame = !1, e.useWebGL2 = !0, e.printWebglOrder = !1, e.allowGPUInstanceDynamicBatch = !0, 
    e.enableStaticBatch = !0, e.useRetinalCanvas = !1, window.Config = e;
    var i = /* */ function() {
        function i() {
            (0, _classCallCheck2.default)(this, i);
        }
        (0, _createClass2.default)(i, null, [ {
            key: "regClass",
            value: function regClass(t) {
                i.__classMap[t.name] = t;
            }
        } ]);
        return i;
    }();
    i.Laya = null, i.Timer = null, i.WorkerLoader = null, i.Dragging = null, i.GraphicsBounds = null, 
    i.Sprite = null, i.TextRender = null, i.TextAtlas = null, i.timer = null, i.systemTimer = null, 
    i.startTimer = null, i.updateTimer = null, i.lateTimer = null, i.physicsTimer = null, 
    i.stage = null, i.Loader = null, i.loader = null, i.TTFLoader = null, i.SoundManager = null, 
    i.WebAudioSound = null, i.AudioSound = null, i.ShaderCompile = null, i.ClassUtils = null, 
    i.SceneUtils = null, i.Context = null, i.Render = null, i.MouseManager = null, i.Text = null, 
    i.Browser = null, i.WebGL = null, i.Pool = null, i.Utils = null, i.Graphics = null, 
    i.Submit = null, i.Stage = null, i.Resource = null, i.__classMap = {};
    var s = /* */ function() {
        function s() {
            (0, _classCallCheck2.default)(this, s);
        }
        (0, _createClass2.default)(s, null, [ {
            key: "getPoolBySign",
            value: function getPoolBySign(t) {
                return s._poolDic[t] || (s._poolDic[t] = []);
            }
        }, {
            key: "clearBySign",
            value: function clearBySign(t) {
                s._poolDic[t] && (s._poolDic[t].length = 0);
            }
        }, {
            key: "recover",
            value: function recover(t, e) {
                e[s.POOLSIGN] || (e[s.POOLSIGN] = !0, s.getPoolBySign(t).push(e));
            }
        }, {
            key: "recoverByClass",
            value: function recoverByClass(t) {
                if (t) {
                    var e = t.__className || t.constructor._$gid;
                    e && s.recover(e, t);
                }
            }
        }, {
            key: "_getClassSign",
            value: function _getClassSign(t) {
                var e = t.__className || t._$gid;
                return e || (t._$gid = e = s._CLSID + "", s._CLSID++), e;
            }
        }, {
            key: "createByClass",
            value: function createByClass(t) {
                return s.getItemByClass(s._getClassSign(t), t);
            }
        }, {
            key: "getItemByClass",
            value: function getItemByClass(t, e) {
                if (!s._poolDic[t]) return new e();
                var i = s.getPoolBySign(t);
                if (i.length) {
                    var r = i.pop();
                    r[s.POOLSIGN] = !1;
                } else r = new e();
                return r;
            }
        }, {
            key: "getItemByCreateFun",
            value: function getItemByCreateFun(t, e) {
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var r = s.getPoolBySign(t), a = r.length ? r.pop() : e.call(i);
                return a[s.POOLSIGN] = !1, a;
            }
        }, {
            key: "getItem",
            value: function getItem(t) {
                var e = s.getPoolBySign(t), i = e.length ? e.pop() : null;
                return i && (i[s.POOLSIGN] = !1), i;
            }
        } ]);
        return s;
    }();
    s._CLSID = 0, s.POOLSIGN = "__InPool", s._poolDic = {};
    var r = /* */ function() {
        function r() {
            (0, _classCallCheck2.default)(this, r);
        }
        (0, _createClass2.default)(r, [ {
            key: "recover",
            value: function recover() {
                s.recover("AlphaCmd", this);
            }
        }, {
            key: "run",
            value: function run(t, e, i) {
                t.alpha(this.alpha);
            }
        }, {
            key: "cmdID",
            get: function get() {
                return r.ID;
            }
        } ], [ {
            key: "create",
            value: function create(t) {
                var e = s.getItemByClass("AlphaCmd", r);
                return e.alpha = t, e;
            }
        } ]);
        return r;
    }();
    r.ID = "Alpha";
    var a = /* */ function() {
        function a() {
            (0, _classCallCheck2.default)(this, a);
        }
        (0, _createClass2.default)(a, [ {
            key: "recover",
            value: function recover() {
                this.fillColor = null, this.lineColor = null, s.recover("DrawCircleCmd", this);
            }
        }, {
            key: "run",
            value: function run(t, e, i) {
                t._drawCircle(this.x + e, this.y + i, this.radius, this.fillColor, this.lineColor, this.lineWidth, this.vid);
            }
        }, {
            key: "cmdID",
            get: function get() {
                return a.ID;
            }
        } ], [ {
            key: "create",
            value: function create(t, e, i, r, n, h, o) {
                var l = s.getItemByClass("DrawCircleCmd", a);
                return l.x = t, l.y = e, l.radius = i, l.fillColor = r, l.lineColor = n, l.lineWidth = h, 
                l.vid = o, l;
            }
        } ]);
        return a;
    }();
    a.ID = "DrawCircle";
    var n = /* */ function() {
        function n() {
            (0, _classCallCheck2.default)(this, n);
        }
        (0, _createClass2.default)(n, [ {
            key: "recover",
            value: function recover() {
                this.points = null, this.lineColor = null, s.recover("DrawCurvesCmd", this);
            }
        }, {
            key: "run",
            value: function run(t, e, i) {
                this.points && t.drawCurves(this.x + e, this.y + i, this.points, this.lineColor, this.lineWidth);
            }
        }, {
            key: "cmdID",
            get: function get() {
                return n.ID;
            }
        } ], [ {
            key: "create",
            value: function create(t, e, i, r, a) {
                var h = s.getItemByClass("DrawCurvesCmd", n);
                return h.x = t, h.y = e, h.points = i, h.lineColor = r, h.lineWidth = a, h;
            }
        } ]);
        return n;
    }();
    n.ID = "DrawCurves";
    var h = /* */ function() {
        function h() {
            (0, _classCallCheck2.default)(this, h);
        }
        (0, _createClass2.default)(h, [ {
            key: "recover",
            value: function recover() {
                this.texture && this.texture._removeReference(), this.texture = null, s.recover("DrawImageCmd", this);
            }
        }, {
            key: "run",
            value: function run(t, e, i) {
                this.texture && t.drawTexture(this.texture, this.x + e, this.y + i, this.width, this.height);
            }
        }, {
            key: "cmdID",
            get: function get() {
                return h.ID;
            }
        } ], [ {
            key: "create",
            value: function create(t, e, i, r, a) {
                var n = s.getItemByClass("DrawImageCmd", h);
                return n.texture = t, t._addReference(), n.x = e, n.y = i, n.width = r, n.height = a, 
                n;
            }
        } ]);
        return h;
    }();
    h.ID = "DrawImage";
    var o = /* */ function() {
        function o() {
            (0, _classCallCheck2.default)(this, o);
        }
        (0, _createClass2.default)(o, [ {
            key: "recover",
            value: function recover() {
                s.recover("DrawLineCmd", this);
            }
        }, {
            key: "run",
            value: function run(t, e, i) {
                t._drawLine(e, i, this.fromX, this.fromY, this.toX, this.toY, this.lineColor, this.lineWidth, this.vid);
            }
        }, {
            key: "cmdID",
            get: function get() {
                return o.ID;
            }
        } ], [ {
            key: "create",
            value: function create(t, e, i, r, a, n, h) {
                var l = s.getItemByClass("DrawLineCmd", o);
                return l.fromX = t, l.fromY = e, l.toX = i, l.toY = r, l.lineColor = a, l.lineWidth = n, 
                l.vid = h, l;
            }
        } ]);
        return o;
    }();
    o.ID = "DrawLine";
    var l = /* */ function() {
        function l() {
            (0, _classCallCheck2.default)(this, l);
        }
        (0, _createClass2.default)(l, [ {
            key: "recover",
            value: function recover() {
                this.points = null, this.lineColor = null, s.recover("DrawLinesCmd", this);
            }
        }, {
            key: "run",
            value: function run(t, e, i) {
                this.points && t._drawLines(this.x + e, this.y + i, this.points, this.lineColor, this.lineWidth, this.vid);
            }
        }, {
            key: "cmdID",
            get: function get() {
                return l.ID;
            }
        } ], [ {
            key: "create",
            value: function create(t, e, i, r, a, n) {
                var h = s.getItemByClass("DrawLinesCmd", l);
                return h.x = t, h.y = e, h.points = i, h.lineColor = r, h.lineWidth = a, h.vid = n, 
                h;
            }
        } ]);
        return l;
    }();
    l.ID = "DrawLines";
    var _ = /* */ function() {
        function _() {
            (0, _classCallCheck2.default)(this, _);
        }
        (0, _createClass2.default)(_, [ {
            key: "recover",
            value: function recover() {
                this.paths = null, this.brush = null, this.pen = null, s.recover("DrawPathCmd", this);
            }
        }, {
            key: "run",
            value: function run(t, e, i) {
                this.paths && t._drawPath(this.x + e, this.y + i, this.paths, this.brush, this.pen);
            }
        }, {
            key: "cmdID",
            get: function get() {
                return _.ID;
            }
        } ], [ {
            key: "create",
            value: function create(t, e, i, r, a) {
                var n = s.getItemByClass("DrawPathCmd", _);
                return n.x = t, n.y = e, n.paths = i, n.brush = r, n.pen = a, n;
            }
        } ]);
        return _;
    }();
    _.ID = "DrawPath";
    var u = /* */ function() {
        function u() {
            (0, _classCallCheck2.default)(this, u);
        }
        (0, _createClass2.default)(u, [ {
            key: "recover",
            value: function recover() {
                this.fillColor = null, this.lineColor = null, s.recover("DrawPieCmd", this);
            }
        }, {
            key: "run",
            value: function run(t, e, i) {
                t._drawPie(this.x + e, this.y + i, this.radius, this._startAngle, this._endAngle, this.fillColor, this.lineColor, this.lineWidth, this.vid);
            }
        }, {
            key: "cmdID",
            get: function get() {
                return u.ID;
            }
        }, {
            key: "startAngle",
            get: function get() {
                return 180 * this._startAngle / Math.PI;
            },
            set: function set(t) {
                this._startAngle = t * Math.PI / 180;
            }
        }, {
            key: "endAngle",
            get: function get() {
                return 180 * this._endAngle / Math.PI;
            },
            set: function set(t) {
                this._endAngle = t * Math.PI / 180;
            }
        } ], [ {
            key: "create",
            value: function create(t, e, i, r, a, n, h, o, l) {
                var _ = s.getItemByClass("DrawPieCmd", u);
                return _.x = t, _.y = e, _.radius = i, _._startAngle = r, _._endAngle = a, _.fillColor = n, 
                _.lineColor = h, _.lineWidth = o, _.vid = l, _;
            }
        } ]);
        return u;
    }();
    u.ID = "DrawPie";
    var c = /* */ function() {
        function c() {
            (0, _classCallCheck2.default)(this, c);
        }
        (0, _createClass2.default)(c, [ {
            key: "recover",
            value: function recover() {
                this.points = null, this.fillColor = null, this.lineColor = null, s.recover("DrawPolyCmd", this);
            }
        }, {
            key: "run",
            value: function run(t, e, i) {
                this.points && t._drawPoly(this.x + e, this.y + i, this.points, this.fillColor, this.lineColor, this.lineWidth, this.isConvexPolygon, this.vid);
            }
        }, {
            key: "cmdID",
            get: function get() {
                return c.ID;
            }
        } ], [ {
            key: "create",
            value: function create(t, e, i, r, a, n, h, o) {
                var l = s.getItemByClass("DrawPolyCmd", c);
                return l.x = t, l.y = e, l.points = i, l.fillColor = r, l.lineColor = a, l.lineWidth = n, 
                l.isConvexPolygon = h, l.vid = o, l;
            }
        } ]);
        return c;
    }();
    c.ID = "DrawPoly";
    var d = /* */ function() {
        function d() {
            (0, _classCallCheck2.default)(this, d);
        }
        (0, _createClass2.default)(d, [ {
            key: "recover",
            value: function recover() {
                this.fillColor = null, this.lineColor = null, s.recover("DrawRectCmd", this);
            }
        }, {
            key: "run",
            value: function run(t, e, i) {
                t.drawRect(this.x + e, this.y + i, this.width, this.height, this.fillColor, this.lineColor, this.lineWidth);
            }
        }, {
            key: "cmdID",
            get: function get() {
                return d.ID;
            }
        } ], [ {
            key: "create",
            value: function create(t, e, i, r, a, n, h) {
                var o = s.getItemByClass("DrawRectCmd", d);
                return o.x = t, o.y = e, o.width = i, o.height = r, o.fillColor = a, o.lineColor = n, 
                o.lineWidth = h, o;
            }
        } ]);
        return d;
    }();
    d.ID = "DrawRect";
    var p = /* */ function() {
        function p() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
            var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
            var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
            var n = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
            (0, _classCallCheck2.default)(this, p);
            if (this._bTransform = !1, null != p._createFun) return p._createFun(t, e, i, s, r, a, n);
            this.a = t, this.b = e, this.c = i, this.d = s, this.tx = r, this.ty = a, this._checkTransform();
        }
        (0, _createClass2.default)(p, [ {
            key: "identity",
            value: function identity() {
                return this.a = this.d = 1, this.b = this.tx = this.ty = this.c = 0, this._bTransform = !1, 
                this;
            }
        }, {
            key: "_checkTransform",
            value: function _checkTransform() {
                return this._bTransform = 1 !== this.a || 0 !== this.b || 0 !== this.c || 1 !== this.d;
            }
        }, {
            key: "setTranslate",
            value: function setTranslate(t, e) {
                return this.tx = t, this.ty = e, this;
            }
        }, {
            key: "translate",
            value: function translate(t, e) {
                return this.tx += t, this.ty += e, this;
            }
        }, {
            key: "scale",
            value: function scale(t, e) {
                return this.a *= t, this.d *= e, this.c *= t, this.b *= e, this.tx *= t, this.ty *= e, 
                this._bTransform = !0, this;
            }
        }, {
            key: "rotate",
            value: function rotate(t) {
                var e = Math.cos(t), i = Math.sin(t), s = this.a, r = this.c, a = this.tx;
                return this.a = s * e - this.b * i, this.b = s * i + this.b * e, this.c = r * e - this.d * i, 
                this.d = r * i + this.d * e, this.tx = a * e - this.ty * i, this.ty = a * i + this.ty * e, 
                this._bTransform = !0, this;
            }
        }, {
            key: "skew",
            value: function skew(t, e) {
                var i = Math.tan(t), s = Math.tan(e), r = this.a, a = this.b;
                return this.a += s * this.c, this.b += s * this.d, this.c += i * r, this.d += i * a, 
                this;
            }
        }, {
            key: "invertTransformPoint",
            value: function invertTransformPoint(t) {
                var e = this.a, i = this.b, s = this.c, r = this.d, a = this.tx, n = e * r - i * s, h = r / n, o = -i / n, l = -s / n, _ = e / n, u = (s * this.ty - r * a) / n, c = -(e * this.ty - i * a) / n;
                return t.setTo(h * t.x + l * t.y + u, o * t.x + _ * t.y + c);
            }
        }, {
            key: "transformPoint",
            value: function transformPoint(t) {
                return t.setTo(this.a * t.x + this.c * t.y + this.tx, this.b * t.x + this.d * t.y + this.ty);
            }
        }, {
            key: "transformPointN",
            value: function transformPointN(t) {
                return t.setTo(this.a * t.x + this.c * t.y, this.b * t.x + this.d * t.y);
            }
        }, {
            key: "getScaleX",
            value: function getScaleX() {
                return 0 === this.b ? this.a : Math.sqrt(this.a * this.a + this.b * this.b);
            }
        }, {
            key: "getScaleY",
            value: function getScaleY() {
                return 0 === this.c ? this.d : Math.sqrt(this.c * this.c + this.d * this.d);
            }
        }, {
            key: "invert",
            value: function invert() {
                var t = this.a, e = this.b, i = this.c, s = this.d, r = this.tx, a = t * s - e * i;
                return this.a = s / a, this.b = -e / a, this.c = -i / a, this.d = t / a, this.tx = (i * this.ty - s * r) / a, 
                this.ty = -(t * this.ty - e * r) / a, this;
            }
        }, {
            key: "setTo",
            value: function setTo(t, e, i, s, r, a) {
                return this.a = t, this.b = e, this.c = i, this.d = s, this.tx = r, this.ty = a, 
                this;
            }
        }, {
            key: "concat",
            value: function concat(t) {
                var e = this.a, i = this.c, s = this.tx;
                return this.a = e * t.a + this.b * t.c, this.b = e * t.b + this.b * t.d, this.c = i * t.a + this.d * t.c, 
                this.d = i * t.b + this.d * t.d, this.tx = s * t.a + this.ty * t.c + t.tx, this.ty = s * t.b + this.ty * t.d + t.ty, 
                this;
            }
        }, {
            key: "scaleEx",
            value: function scaleEx(t, e) {
                var i = this.a, s = this.b, r = this.c, a = this.d;
                0 !== s || 0 !== r ? (this.a = t * i, this.b = t * s, this.c = e * r, this.d = e * a) : (this.a = t * i, 
                this.b = 0 * a, this.c = 0 * i, this.d = e * a), this._bTransform = !0;
            }
        }, {
            key: "rotateEx",
            value: function rotateEx(t) {
                var e = Math.cos(t), i = Math.sin(t), s = this.a, r = this.b, a = this.c, n = this.d;
                0 !== r || 0 !== a ? (this.a = e * s + i * a, this.b = e * r + i * n, this.c = -i * s + e * a, 
                this.d = -i * r + e * n) : (this.a = e * s, this.b = i * n, this.c = -i * s, this.d = e * n), 
                this._bTransform = !0;
            }
        }, {
            key: "clone",
            value: function clone() {
                var t = p.create();
                return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, 
                t._bTransform = this._bTransform, t;
            }
        }, {
            key: "copyTo",
            value: function copyTo(t) {
                return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, 
                t._bTransform = this._bTransform, t;
            }
        }, {
            key: "toString",
            value: function toString() {
                return this.a + "," + this.b + "," + this.c + "," + this.d + "," + this.tx + "," + this.ty;
            }
        }, {
            key: "destroy",
            value: function destroy() {
                this.recover();
            }
        }, {
            key: "recover",
            value: function recover() {
                s.recover("Matrix", this.identity());
            }
        } ], [ {
            key: "mul",
            value: function mul(t, e, i) {
                var s = t.a, r = t.b, a = t.c, n = t.d, h = t.tx, o = t.ty, l = e.a, _ = e.b, u = e.c, c = e.d, d = e.tx, p = e.ty;
                return 0 !== _ || 0 !== u ? (i.a = s * l + r * u, i.b = s * _ + r * c, i.c = a * l + n * u, 
                i.d = a * _ + n * c, i.tx = l * h + u * o + d, i.ty = _ * h + c * o + p) : (i.a = s * l, 
                i.b = r * c, i.c = a * l, i.d = n * c, i.tx = l * h + d, i.ty = c * o + p), i;
            }
        }, {
            key: "mul16",
            value: function mul16(t, e, i) {
                var s = t.a, r = t.b, a = t.c, n = t.d, h = t.tx, o = t.ty, l = e.a, _ = e.b, u = e.c, c = e.d, d = e.tx, p = e.ty;
                return 0 !== _ || 0 !== u ? (i[0] = s * l + r * u, i[1] = s * _ + r * c, i[4] = a * l + n * u, 
                i[5] = a * _ + n * c, i[12] = l * h + u * o + d, i[13] = _ * h + c * o + p) : (i[0] = s * l, 
                i[1] = r * c, i[4] = a * l, i[5] = n * c, i[12] = l * h + d, i[13] = c * o + p), 
                i;
            }
        }, {
            key: "create",
            value: function create() {
                return s.getItemByClass("Matrix", p);
            }
        } ]);
        return p;
    }();
    p.EMPTY = new p(), p.TEMP = new p(), p._createFun = null;
    var f = /* */ function() {
        function f() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            (0, _classCallCheck2.default)(this, f);
            this.x = t, this.y = e;
        }
        (0, _createClass2.default)(f, [ {
            key: "setTo",
            value: function setTo(t, e) {
                return this.x = t, this.y = e, this;
            }
        }, {
            key: "reset",
            value: function reset() {
                return this.x = this.y = 0, this;
            }
        }, {
            key: "recover",
            value: function recover() {
                s.recover("Point", this.reset());
            }
        }, {
            key: "distance",
            value: function distance(t, e) {
                return Math.sqrt((this.x - t) * (this.x - t) + (this.y - e) * (this.y - e));
            }
        }, {
            key: "toString",
            value: function toString() {
                return this.x + "," + this.y;
            }
        }, {
            key: "normalize",
            value: function normalize() {
                var t = Math.sqrt(this.x * this.x + this.y * this.y);
                if (t > 0) {
                    var e = 1 / t;
                    this.x *= e, this.y *= e;
                }
            }
        }, {
            key: "copy",
            value: function copy(t) {
                return this.setTo(t.x, t.y);
            }
        } ], [ {
            key: "create",
            value: function create() {
                return s.getItemByClass("Point", f);
            }
        } ]);
        return f;
    }();
    f.TEMP = new f(), f.EMPTY = new f();
    var m = /* */ function() {
        function m() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
            (0, _classCallCheck2.default)(this, m);
            this.x = t, this.y = e, this.width = i, this.height = s;
        }
        (0, _createClass2.default)(m, [ {
            key: "setTo",
            value: function setTo(t, e, i, s) {
                return this.x = t, this.y = e, this.width = i, this.height = s, this;
            }
        }, {
            key: "reset",
            value: function reset() {
                return this.x = this.y = this.width = this.height = 0, this;
            }
        }, {
            key: "recover",
            value: function recover() {
                this != m.TEMP && this != m.EMPTY ? s.recover("Rectangle", this.reset()) : console.log("recover Temp or Empty:", this);
            }
        }, {
            key: "copyFrom",
            value: function copyFrom(t) {
                return this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height, 
                this;
            }
        }, {
            key: "contains",
            value: function contains(t, e) {
                return !(this.width <= 0 || this.height <= 0) && t >= this.x && t < this.right && e >= this.y && e < this.bottom;
            }
        }, {
            key: "intersects",
            value: function intersects(t) {
                return !(t.x > this.x + this.width || t.x + t.width < this.x || t.y > this.y + this.height || t.y + t.height < this.y);
            }
        }, {
            key: "intersection",
            value: function intersection(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                return this.intersects(t) ? (e || (e = new m()), e.x = Math.max(this.x, t.x), e.y = Math.max(this.y, t.y), 
                e.width = Math.min(this.right, t.right) - e.x, e.height = Math.min(this.bottom, t.bottom) - e.y, 
                e) : null;
            }
        }, {
            key: "union",
            value: function union(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                return e || (e = new m()), this.clone(e), t.width <= 0 || t.height <= 0 ? e : (e.addPoint(t.x, t.y), 
                e.addPoint(t.right, t.bottom), this);
            }
        }, {
            key: "clone",
            value: function clone() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                return t || (t = new m()), t.x = this.x, t.y = this.y, t.width = this.width, t.height = this.height, 
                t;
            }
        }, {
            key: "toString",
            value: function toString() {
                return this.x + "," + this.y + "," + this.width + "," + this.height;
            }
        }, {
            key: "equals",
            value: function equals(t) {
                return !(!t || t.x !== this.x || t.y !== this.y || t.width !== this.width || t.height !== this.height);
            }
        }, {
            key: "addPoint",
            value: function addPoint(t, e) {
                return this.x > t && (this.width += this.x - t, this.x = t), this.y > e && (this.height += this.y - e, 
                this.y = e), this.width < t - this.x && (this.width = t - this.x), this.height < e - this.y && (this.height = e - this.y), 
                this;
            }
        }, {
            key: "_getBoundPoints",
            value: function _getBoundPoints() {
                var t = m._temB;
                return t.length = 0, 0 == this.width || 0 == this.height ? t : (t.push(this.x, this.y, this.x + this.width, this.y, this.x, this.y + this.height, this.x + this.width, this.y + this.height), 
                t);
            }
        }, {
            key: "isEmpty",
            value: function isEmpty() {
                return this.width <= 0 || this.height <= 0;
            }
        }, {
            key: "right",
            get: function get() {
                return this.x + this.width;
            }
        }, {
            key: "bottom",
            get: function get() {
                return this.y + this.height;
            }
        } ], [ {
            key: "create",
            value: function create() {
                return s.getItemByClass("Rectangle", m);
            }
        }, {
            key: "_getBoundPointS",
            value: function _getBoundPointS(t, e, i, s) {
                var r = m._temA;
                return r.length = 0, 0 == i || 0 == s ? r : (r.push(t, e, t + i, e, t, e + s, t + i, e + s), 
                r);
            }
        }, {
            key: "_getWrapRec",
            value: function _getWrapRec(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                if (!t || t.length < 1) return e ? e.setTo(0, 0, 0, 0) : m.TEMP.setTo(0, 0, 0, 0);
                e = e || m.create();
                var i, s, r, a, n, h = t.length, o = f.TEMP;
                for (r = n = -(s = a = 99999), i = 0; i < h; i += 2) {
                    o.x = t[i], o.y = t[i + 1], s = s < o.x ? s : o.x, a = a < o.y ? a : o.y, r = r > o.x ? r : o.x, 
                    n = n > o.y ? n : o.y;
                }
                return e.setTo(s, a, r - s, n - a);
            }
        } ]);
        return m;
    }();
    m.EMPTY = new m(), m.TEMP = new m(), m._temB = [], m._temA = [];
    var g = function g() {
        (0, _classCallCheck2.default)(this, g);
    };
    g.ARRAY_BUFFER_TYPE_DATA = 0, g.ARRAY_BUFFER_TYPE_CMD = 1, g.ARRAY_BUFFER_REF_REFERENCE = 0, 
    g.ARRAY_BUFFER_REF_COPY = 1, g.UPLOAD_SHADER_UNIFORM_TYPE_ID = 0, g.UPLOAD_SHADER_UNIFORM_TYPE_DATA = 1;
    var T, v, x, y, E, A = 1, C = 0;
    var R = /* */ function() {
        function R() {
            (0, _classCallCheck2.default)(this, R);
        }
        (0, _createClass2.default)(R, null, [ {
            key: "__init__",
            value: function __init__() {
                var t = g.instance;
                R._depthFunc = t.LESS, R._blendEquation = t.FUNC_ADD, R._blendEquationRGB = t.FUNC_ADD, 
                R._blendEquationAlpha = t.FUNC_ADD, A = t.ONE, C = t.ZERO, R._sFactorAlpha = t.ONE, 
                R._dFactorAlpha = t.ZERO, R._activedTextureID = t.TEXTURE0;
                var e = t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
                R._activeTextures = new Array(e), R._glTextureIDs = [ t.TEXTURE0, t.TEXTURE1, t.TEXTURE2, t.TEXTURE3, t.TEXTURE4, t.TEXTURE5, t.TEXTURE6, t.TEXTURE7, t.TEXTURE8, t.TEXTURE9, t.TEXTURE10, t.TEXTURE11, t.TEXTURE12, t.TEXTURE13, t.TEXTURE14, t.TEXTURE15, t.TEXTURE16, t.TEXTURE17, t.TEXTURE18, t.TEXTURE19, t.TEXTURE20, t.TEXTURE21, t.TEXTURE22, t.TEXTURE23, t.TEXTURE24, t.TEXTURE25, t.TEXTURE26, t.TEXTURE27, t.TEXTURE28, t.TEXTURE29, t.TEXTURE30, t.TEXTURE31 ];
                var i = t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS), s = t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS);
                R._maxUniformFragmentVectors = Math.min(i, s);
            }
        }, {
            key: "useProgram",
            value: function useProgram(t, e) {
                return R._useProgram !== e && (t.useProgram(e), R._useProgram = e, !0);
            }
        }, {
            key: "setDepthTest",
            value: function setDepthTest(t, e) {
                e !== R._depthTest && (R._depthTest = e, e ? t.enable(t.DEPTH_TEST) : t.disable(t.DEPTH_TEST));
            }
        }, {
            key: "setDepthMask",
            value: function setDepthMask(t, e) {
                e !== R._depthMask && (R._depthMask = e, t.depthMask(e));
            }
        }, {
            key: "setDepthFunc",
            value: function setDepthFunc(t, e) {
                e !== R._depthFunc && (R._depthFunc = e, t.depthFunc(e));
            }
        }, {
            key: "setBlend",
            value: function setBlend(t, e) {
                e !== R._blend && (R._blend = e, e ? t.enable(t.BLEND) : t.disable(t.BLEND));
            }
        }, {
            key: "setBlendEquation",
            value: function setBlendEquation(t, e) {
                e !== R._blendEquation && (R._blendEquation = e, R._blendEquationRGB = R._blendEquationAlpha = null, 
                t.blendEquation(e));
            }
        }, {
            key: "setBlendEquationSeparate",
            value: function setBlendEquationSeparate(t, e, i) {
                e === R._blendEquationRGB && i === R._blendEquationAlpha || (R._blendEquationRGB = e, 
                R._blendEquationAlpha = i, R._blendEquation = null, t.blendEquationSeparate(e, i));
            }
        }, {
            key: "setBlendFunc",
            value: function setBlendFunc(t, e, i) {
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
                (s || e !== A || i !== C) && (A = e, C = i, R._sFactorRGB = null, R._dFactorRGB = null, 
                R._sFactorAlpha = null, R._dFactorAlpha = null, t.blendFunc(e, i));
            }
        }, {
            key: "setBlendFuncSeperate",
            value: function setBlendFuncSeperate(t, e, i, s, r) {
                e === R._sFactorRGB && i === R._dFactorRGB && s === R._sFactorAlpha && r === R._dFactorAlpha || (R._sFactorRGB = e, 
                R._dFactorRGB = i, R._sFactorAlpha = s, R._dFactorAlpha = r, A = null, C = null, 
                t.blendFuncSeparate(e, i, s, r));
            }
        }, {
            key: "setCullFace",
            value: function setCullFace(t, e) {
                e !== R._cullFace && (R._cullFace = e, e ? t.enable(t.CULL_FACE) : t.disable(t.CULL_FACE));
            }
        }, {
            key: "setFrontFace",
            value: function setFrontFace(t, e) {
                e !== R._frontFace && (R._frontFace = e, t.frontFace(e));
            }
        }, {
            key: "activeTexture",
            value: function activeTexture(t, e) {
                R._activedTextureID !== e && (t.activeTexture(e), R._activedTextureID = e);
            }
        }, {
            key: "bindTexture",
            value: function bindTexture(t, e, i) {
                R._activeTextures[R._activedTextureID - t.TEXTURE0] !== i && (t.bindTexture(e, i), 
                R._activeTextures[R._activedTextureID - t.TEXTURE0] = i);
            }
        }, {
            key: "__init_native",
            value: function __init_native() {
                if (i.Render.supportWebGLPlusRendering) {
                    var t = R;
                    t.activeTexture = t.activeTextureForNative, t.bindTexture = t.bindTextureForNative;
                }
            }
        }, {
            key: "useProgramForNative",
            value: function useProgramForNative(t, e) {
                return t.useProgram(e), !0;
            }
        }, {
            key: "setDepthTestForNative",
            value: function setDepthTestForNative(t, e) {
                e ? t.enable(t.DEPTH_TEST) : t.disable(t.DEPTH_TEST);
            }
        }, {
            key: "setDepthMaskForNative",
            value: function setDepthMaskForNative(t, e) {
                t.depthMask(e);
            }
        }, {
            key: "setDepthFuncForNative",
            value: function setDepthFuncForNative(t, e) {
                t.depthFunc(e);
            }
        }, {
            key: "setBlendForNative",
            value: function setBlendForNative(t, e) {
                e ? t.enable(t.BLEND) : t.disable(t.BLEND);
            }
        }, {
            key: "setBlendFuncForNative",
            value: function setBlendFuncForNative(t, e, i) {
                t.blendFunc(e, i);
            }
        }, {
            key: "setCullFaceForNative",
            value: function setCullFaceForNative(t, e) {
                e ? t.enable(t.CULL_FACE) : t.disable(t.CULL_FACE);
            }
        }, {
            key: "setFrontFaceForNative",
            value: function setFrontFaceForNative(t, e) {
                t.frontFace(e);
            }
        }, {
            key: "activeTextureForNative",
            value: function activeTextureForNative(t, e) {
                t.activeTexture(e);
            }
        }, {
            key: "bindTextureForNative",
            value: function bindTextureForNative(t, e, i) {
                t.bindTexture(e, i);
            }
        }, {
            key: "bindVertexArrayForNative",
            value: function bindVertexArrayForNative(t, e) {
                t.bindVertexArray(e);
            }
        }, {
            key: "getUniformMaxVector",
            value: function getUniformMaxVector() {
                return R._maxUniformFragmentVectors;
            }
        } ]);
        return R;
    }();
    R._activeTextures = new Array(1), R._useProgram = null, R._depthTest = !0, R._depthMask = !0, 
    R._blend = !1, R._cullFace = !1, R.mainContext = null;
    var b = /* */ function() {
        function b() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
            (0, _classCallCheck2.default)(this, b);
            this.once = !1, this._id = 0, this.setTo(t, e, i, s);
        }
        (0, _createClass2.default)(b, [ {
            key: "setTo",
            value: function setTo(t, e, i) {
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
                return this._id = b._gid++, this.caller = t, this.method = e, this.args = i, this.once = s, 
                this;
            }
        }, {
            key: "run",
            value: function run() {
                if (null == this.method) return null;
                var t = this._id, e = this.method.apply(this.caller, this.args);
                return this._id === t && this.once && this.recover(), e;
            }
        }, {
            key: "runWith",
            value: function runWith(t) {
                if (null == this.method) return null;
                var e = this._id;
                if (null == t) var i = this.method.apply(this.caller, this.args); else i = this.args || t.unshift ? this.args ? this.method.apply(this.caller, this.args.concat(t)) : this.method.apply(this.caller, t) : this.method.call(this.caller, t);
                return this._id === e && this.once && this.recover(), i;
            }
        }, {
            key: "clear",
            value: function clear() {
                return this.caller = null, this.method = null, this.args = null, this;
            }
        }, {
            key: "recover",
            value: function recover() {
                this._id > 0 && (this._id = 0, b._pool.push(this.clear()));
            }
        } ], [ {
            key: "create",
            value: function create(t, e) {
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
                return b._pool.length ? b._pool.pop().setTo(t, e, i, s) : new b(t, e, i, s);
            }
        } ]);
        return b;
    }();
    b._pool = [], b._gid = 1;
    var S = /* */ function() {
        function S() {
            (0, _classCallCheck2.default)(this, S);
        }
        (0, _createClass2.default)(S, [ {
            key: "hasListener",
            value: function hasListener(t) {
                return !!(this._events && this._events[t]);
            }
        }, {
            key: "event",
            value: function event(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                if (!this._events || !this._events[t]) return !1;
                var i = this._events[t];
                // if(t = "update_coin") console.error(i);
                if (i.run) i.once && delete this._events[t], null != e ? i.runWith(e) : i.run(); else {
                    for (var s = 0, r = i.length; s < r; s++) {
                        var a = i[s];
                        a && (null != e ? a.runWith(e) : a.run()), a && !a.once || (i.splice(s, 1), s--, 
                        r--);
                    }
                    0 === i.length && this._events && delete this._events[t];
                }
                return !0;
            }
        }, {
            key: "on",
            value: function on(t, e, i) {
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                return this._createListener(t, e, i, s, !1);
            }
        }, {
            key: "once",
            value: function once(t, e, i) {
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                return this._createListener(t, e, i, s, !0);
            }
        }, {
            key: "_createListener",
            value: function _createListener(t, e, i, s, r) {
                var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !0;
                a && this.off(t, e, i, r);
                var n = w.create(e || this, i, s, r);
                this._events || (this._events = {});
                var h = this._events;
                return h[t] ? h[t].run ? h[t] = [ h[t], n ] : h[t].push(n) : h[t] = n, this;
            }
        }, {
            key: "off",
            value: function off(t, e, i) {
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
                if (!this._events || !this._events[t]) return this;
                var r = this._events[t];
                if (null != r) if (r.run) e && r.caller !== e || null != i && r.method !== i || s && !r.once || (delete this._events[t], 
                r.recover()); else {
                    for (var a = 0, n = 0, h = r.length; n < h; n++) {
                        var o = r[n];
                        o ? !o || e && o.caller !== e || null != i && o.method !== i || s && !o.once || (a++, 
                        r[n] = null, o.recover()) : a++;
                    }
                    a === h && delete this._events[t];
                }
                return this;
            }
        }, {
            key: "offAll",
            value: function offAll() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                var e = this._events;
                if (!e) return this;
                if (t) this._recoverHandlers(e[t]), delete e[t]; else {
                    for (var i in e) {
                        this._recoverHandlers(e[i]);
                    }
                    this._events = null;
                }
                return this;
            }
        }, {
            key: "offAllCaller",
            value: function offAllCaller(t) {
                if (t && this._events) for (var e in this._events) {
                    this.off(e, t, null);
                }
                return this;
            }
        }, {
            key: "_recoverHandlers",
            value: function _recoverHandlers(t) {
                if (t) if (t.run) t.recover(); else for (var e = t.length - 1; e > -1; e--) {
                    t[e] && (t[e].recover(), t[e] = null);
                }
            }
        }, {
            key: "isMouseEvent",
            value: function isMouseEvent(t) {
                return S.MOUSE_EVENTS[t] || !1;
            }
        } ]);
        return S;
    }();
    S.MOUSE_EVENTS = {
        rightmousedown: !0,
        rightmouseup: !0,
        rightclick: !0,
        mousedown: !0,
        mouseup: !0,
        mousemove: !0,
        mouseover: !0,
        mouseout: !0,
        click: !0,
        doubleclick: !0
    };
    var w = /* */ function(_b) {
        (0, _inherits2.default)(w, _b);
        var _super = _createSuper(w);
        function w(t, e, i, s) {
            (0, _classCallCheck2.default)(this, w);
            return _super.call(this, t, e, i, s);
        }
        (0, _createClass2.default)(w, [ {
            key: "recover",
            value: function recover() {
                this._id > 0 && (this._id = 0, w._pool.push(this.clear()));
            }
        } ], [ {
            key: "create",
            value: function create(t, e) {
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
                return w._pool.length ? w._pool.pop().setTo(t, e, i, s) : new w(t, e, i, s);
            }
        } ]);
        return w;
    }(b);
    w._pool = [];
    var M = /* */ function() {
        function M(t) {
            (0, _classCallCheck2.default)(this, M);
            this._url = M.formatURL(t), this._path = M.getPath(t);
        }
        (0, _createClass2.default)(M, [ {
            key: "url",
            get: function get() {
                return this._url;
            }
        }, {
            key: "path",
            get: function get() {
                return this._path;
            }
        } ], [ {
            key: "formatURL",
            value: function formatURL(t) {
                if (!t) return "null path";
                if (t.indexOf(":") > 0) return t;
                if (M.exportSceneToJson && (t = M.getAdptedFilePath(t)), null != M.customFormat && (t = M.customFormat(t)), 
                t.indexOf(":") > 0) return t;
                var e = t.charAt(0);
                if ("." === e) return M._formatRelativePath(M._basePath + t);
                if ("~" === e) return M.rootPath + t.substring(1);
                if ("d" === e) {
                    if (0 === t.indexOf("data:image")) return t;
                } else if ("/" === e) return t;
                return M._basePath + t;
            }
        }, {
            key: "_formatRelativePath",
            value: function _formatRelativePath(t) {
                for (var e = t.split("/"), i = 0, s = e.length; i < s; i++) {
                    ".." == e[i] && (e.splice(i - 1, 2), i -= 2);
                }
                return e.join("/");
            }
        }, {
            key: "getPath",
            value: function getPath(t) {
                var e = t.lastIndexOf("/");
                return e > 0 ? t.substr(0, e + 1) : "";
            }
        }, {
            key: "getFileName",
            value: function getFileName(t) {
                var e = t.lastIndexOf("/");
                return e > 0 ? t.substr(e + 1) : t;
            }
        }, {
            key: "getAdptedFilePath",
            value: function getAdptedFilePath(t) {
                if (!M.exportSceneToJson || !t) return t;
                var e, i, s;
                for (i = M._adpteTypeList.length, e = 0; e < i; e++) {
                    s = M._adpteTypeList[e], t = t.replace(s[0], s[1]);
                }
                return t;
            }
        }, {
            key: "basePath",
            set: function set(t) {
                M._basePath = i.Laya._getUrlPath(), M._basePath = M.formatURL(t);
            },
            get: function get() {
                return M._basePath;
            }
        } ]);
        return M;
    }();
    M.version = {}, M.exportSceneToJson = !1, M._basePath = "", M.rootPath = "", M.customFormat = function(t) {
        var e = M.version[t];
        return !window.conch && e && (t += "?v=" + e), t;
    }, M._adpteTypeList = [ [ ".scene3d", ".json" ], [ ".scene", ".json" ], [ ".taa", ".json" ], [ ".prefab", ".json" ] ];
    var I = /* */ function(_S) {
        (0, _inherits2.default)(I, _S);
        var _super2 = _createSuper(I);
        function I() {
            var _this;
            (0, _classCallCheck2.default)(this, I);
            _this = _super2.call(this), _this._id = 0, _this._url = null, _this._cpuMemory = 0, 
            _this._gpuMemory = 0, _this._destroyed = !1, _this._referenceCount = 0, _this.lock = !1, 
            _this.name = null, _this._id = ++I._uniqueIDCounter, _this._destroyed = !1, _this._referenceCount = 0, 
            I._idResourcesMap[_this.id] = (0, _assertThisInitialized2.default)(_this), _this.lock = !1;
            return _this;
        }
        (0, _createClass2.default)(I, [ {
            key: "_setCPUMemory",
            value: function _setCPUMemory(t) {
                var e = t - this._cpuMemory;
                this._cpuMemory = t, I._addCPUMemory(e);
            }
        }, {
            key: "_setGPUMemory",
            value: function _setGPUMemory(t) {
                var e = t - this._gpuMemory;
                this._gpuMemory = t, I._addGPUMemory(e);
            }
        }, {
            key: "_setCreateURL",
            value: function _setCreateURL(t) {
                var e;
                (t = M.formatURL(t), this._url !== t) && (this._url && ((e = I._urlResourcesMap[this._url]).splice(e.indexOf(this), 1), 
                0 === e.length && delete I._urlResourcesMap[this._url]), t && ((e = I._urlResourcesMap[t]) || (I._urlResourcesMap[t] = e = []), 
                e.push(this)), this._url = t);
            }
        }, {
            key: "_addReference",
            value: function _addReference() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
                this._referenceCount += t;
            }
        }, {
            key: "_removeReference",
            value: function _removeReference() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
                this._referenceCount -= t;
            }
        }, {
            key: "_clearReference",
            value: function _clearReference() {
                this._referenceCount = 0;
            }
        }, {
            key: "_recoverResource",
            value: function _recoverResource() {}
        }, {
            key: "_disposeResource",
            value: function _disposeResource() {}
        }, {
            key: "_activeResource",
            value: function _activeResource() {}
        }, {
            key: "destroy",
            value: function destroy() {
                var t;
                this._destroyed || (this._destroyed = !0, this.lock = !1, this._disposeResource(), 
                delete I._idResourcesMap[this.id], this._url && ((t = I._urlResourcesMap[this._url]) && (t.splice(t.indexOf(this), 1), 
                0 === t.length && delete I._urlResourcesMap[this._url]), i.Loader.loadedMap[this._url] == this && delete i.Loader.loadedMap[this._url]));
            }
        }, {
            key: "id",
            get: function get() {
                return this._id;
            }
        }, {
            key: "url",
            get: function get() {
                return this._url;
            }
        }, {
            key: "cpuMemory",
            get: function get() {
                return this._cpuMemory;
            }
        }, {
            key: "gpuMemory",
            get: function get() {
                return this._gpuMemory;
            }
        }, {
            key: "destroyed",
            get: function get() {
                return this._destroyed;
            }
        }, {
            key: "referenceCount",
            get: function get() {
                return this._referenceCount;
            }
        } ], [ {
            key: "_addCPUMemory",
            value: function _addCPUMemory(t) {
                I._cpuMemory += t;
            }
        }, {
            key: "_addGPUMemory",
            value: function _addGPUMemory(t) {
                I._gpuMemory += t;
            }
        }, {
            key: "_addMemory",
            value: function _addMemory(t, e) {
                I._cpuMemory += t, I._gpuMemory += e;
            }
        }, {
            key: "getResourceByID",
            value: function getResourceByID(t) {
                return I._idResourcesMap[t];
            }
        }, {
            key: "getResourceByURL",
            value: function getResourceByURL(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                return I._urlResourcesMap[t][e];
            }
        }, {
            key: "destroyUnusedResources",
            value: function destroyUnusedResources() {
                for (var t in I._idResourcesMap) {
                    var e = I._idResourcesMap[t];
                    e.lock || 0 !== e._referenceCount || e.destroy();
                }
            }
        }, {
            key: "cpuMemory",
            get: function get() {
                return I._cpuMemory;
            }
        }, {
            key: "gpuMemory",
            get: function get() {
                return I._gpuMemory;
            }
        } ]);
        return I;
    }(S);
    I._uniqueIDCounter = 0, I._idResourcesMap = {}, I._urlResourcesMap = {}, I._cpuMemory = 0, 
    I._gpuMemory = 0;
    var P = /* */ function(_I) {
        (0, _inherits2.default)(P, _I);
        var _super3 = _createSuper(P);
        function P() {
            var _this2;
            (0, _classCallCheck2.default)(this, P);
            _this2 = _super3.call(this), _this2._width = -1, _this2._height = -1;
            return _this2;
        }
        (0, _createClass2.default)(P, [ {
            key: "_getSource",
            value: function _getSource() {
                throw "Bitmap: must override it.";
            }
        }, {
            key: "width",
            get: function get() {
                return this._width;
            },
            set: function set(t) {
                this._width = t;
            }
        }, {
            key: "height",
            get: function get() {
                return this._height;
            },
            set: function set(t) {
                this._height = t;
            }
        } ]);
        return P;
    }(I);
    (T = t.FilterMode || (t.FilterMode = {}))[T.Point = 0] = "Point", T[T.Bilinear = 1] = "Bilinear", 
    T[T.Trilinear = 2] = "Trilinear", (v = t.TextureFormat || (t.TextureFormat = {}))[v.R8G8B8 = 0] = "R8G8B8", 
    v[v.R8G8B8A8 = 1] = "R8G8B8A8", v[v.R5G6B5 = 16] = "R5G6B5", v[v.Alpha8 = 2] = "Alpha8", 
    v[v.DXT1 = 3] = "DXT1", v[v.DXT5 = 4] = "DXT5", v[v.ETC1RGB = 5] = "ETC1RGB", v[v.ETC2RGB = 6] = "ETC2RGB", 
    v[v.ETC2RGBA = 7] = "ETC2RGBA", v[v.ETC2RGB_Alpha8 = 8] = "ETC2RGB_Alpha8", v[v.ETC2SRGB = 28] = "ETC2SRGB", 
    v[v.PVRTCRGB_2BPPV = 9] = "PVRTCRGB_2BPPV", v[v.PVRTCRGBA_2BPPV = 10] = "PVRTCRGBA_2BPPV", 
    v[v.PVRTCRGB_4BPPV = 11] = "PVRTCRGB_4BPPV", v[v.PVRTCRGBA_4BPPV = 12] = "PVRTCRGBA_4BPPV", 
    v[v.R32G32B32A32 = 15] = "R32G32B32A32", v[v.R16G16B16A16 = 17] = "R16G16B16A16", 
    v[v.ASTC4x4 = 18] = "ASTC4x4", v[v.ASTC4x4SRGB = 23] = "ASTC4x4SRGB", v[v.ASTC6x6 = 19] = "ASTC6x6", 
    v[v.ASTC6x6SRGB = 24] = "ASTC6x6SRGB", v[v.ASTC8x8 = 20] = "ASTC8x8", v[v.ASTC8x8SRGB = 25] = "ASTC8x8SRGB", 
    v[v.ASTC10x10 = 21] = "ASTC10x10", v[v.ASTC10x10SRGB = 26] = "ASTC10x10SRGB", v[v.ASTC12x12 = 22] = "ASTC12x12", 
    v[v.ASTC12x12SRGB = 27] = "ASTC12x12SRGB", v[v.KTXTEXTURE = -1] = "KTXTEXTURE", 
    v[v.PVRTEXTURE = -2] = "PVRTEXTURE", (x = t.WarpMode || (t.WarpMode = {}))[x.Repeat = 0] = "Repeat", 
    x[x.Clamp = 1] = "Clamp";
    var L = /* */ function(_P) {
        (0, _inherits2.default)(L, _P);
        var _super4 = _createSuper(L);
        function L(e, i) {
            var _this3;
            (0, _classCallCheck2.default)(this, L);
            _this3 = _super4.call(this), _this3._wrapModeU = t.WarpMode.Repeat, _this3._wrapModeV = t.WarpMode.Repeat, 
            _this3._filterMode = t.FilterMode.Bilinear, _this3._readyed = !1, _this3._width = -1, 
            _this3._height = -1, _this3._format = e, _this3._mipmap = i, _this3._anisoLevel = 1, 
            _this3._glTexture = g.instance.createTexture();
            return _this3;
        }
        (0, _createClass2.default)(L, [ {
            key: "_getFormatByteCount",
            value: function _getFormatByteCount() {
                switch (this._format) {
                  case t.TextureFormat.R8G8B8:
                    return 3;

                  case t.TextureFormat.R8G8B8A8:
                    return 4;

                  case t.TextureFormat.R5G6B5:
                  case t.TextureFormat.Alpha8:
                    return 1;

                  case t.TextureFormat.R16G16B16A16:
                    return 2;

                  case t.TextureFormat.R32G32B32A32:
                    return 4;

                  default:
                    throw "Texture2D: unknown format.";
                }
            }
        }, {
            key: "_isPot",
            value: function _isPot(t) {
                return 0 == (t & t - 1);
            }
        }, {
            key: "_getGLFormat",
            value: function _getGLFormat() {
                var e, i = g.instance, s = g.layaGPUInstance;
                switch (this._format) {
                  case t.TextureFormat.R8G8B8:
                  case t.TextureFormat.R5G6B5:
                    e = i.RGB;
                    break;

                  case t.TextureFormat.R8G8B8A8:
                    e = i.RGBA;
                    break;

                  case t.TextureFormat.Alpha8:
                    e = i.ALPHA;
                    break;

                  case t.TextureFormat.R32G32B32A32:
                  case t.TextureFormat.R16G16B16A16:
                    e = i.RGBA;
                    break;

                  case t.TextureFormat.DXT1:
                    if (!s._compressedTextureS3tc) throw "BaseTexture: not support DXT1 format.";
                    e = s._compressedTextureS3tc.COMPRESSED_RGB_S3TC_DXT1_EXT;
                    break;

                  case t.TextureFormat.DXT5:
                    if (!s._compressedTextureS3tc) throw "BaseTexture: not support DXT5 format.";
                    e = s._compressedTextureS3tc.COMPRESSED_RGBA_S3TC_DXT5_EXT;
                    break;

                  case t.TextureFormat.ETC1RGB:
                    if (!s._compressedTextureEtc1) throw "BaseTexture: not support ETC1RGB format.";
                    e = s._compressedTextureEtc1.COMPRESSED_RGB_ETC1_WEBGL;
                    break;

                  case t.TextureFormat.ETC2RGB:
                    if (!s._compressedTextureETC) throw "BaseTexture: not support ETC2RGB format.";
                    e = s._compressedTextureETC.COMPRESSED_RGB8_ETC2;
                    break;

                  case t.TextureFormat.ETC2RGBA:
                    if (!s._compressedTextureETC) throw "BaseTexture: not support ETC2RGBA format.";
                    e = s._compressedTextureETC.COMPRESSED_RGBA8_ETC2_EAC;
                    break;

                  case t.TextureFormat.ETC2RGB_Alpha8:
                    if (!s._compressedTextureETC) throw "BaseTexture: not support ETC2SRGB_Alpha8 format.";
                    e = s._compressedTextureETC.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC;
                    break;

                  case t.TextureFormat.ETC2SRGB:
                    if (!s._compressedTextureETC) throw "BaseTexture: not support ETC2SRGB format.";
                    e = s._compressedTextureETC.COMPRESSED_SRGB8_ETC2;
                    break;

                  case t.TextureFormat.PVRTCRGB_2BPPV:
                    if (!s._compressedTexturePvrtc) throw "BaseTexture: not support PVRTCRGB_2BPPV format.";
                    e = s._compressedTexturePvrtc.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                    break;

                  case t.TextureFormat.PVRTCRGBA_2BPPV:
                    if (!s._compressedTexturePvrtc) throw "BaseTexture: not support PVRTCRGBA_2BPPV format.";
                    e = s._compressedTexturePvrtc.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
                    break;

                  case t.TextureFormat.PVRTCRGB_4BPPV:
                    if (!s._compressedTexturePvrtc) throw "BaseTexture: not support PVRTCRGB_4BPPV format.";
                    e = s._compressedTexturePvrtc.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                    break;

                  case t.TextureFormat.PVRTCRGBA_4BPPV:
                    if (!s._compressedTexturePvrtc) throw "BaseTexture: not support PVRTCRGBA_4BPPV format.";
                    e = s._compressedTexturePvrtc.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                    break;

                  case t.TextureFormat.ASTC4x4:
                    if (!s._compressedTextureASTC) throw "BaseTexture: not support ASTC4x4 format.";
                    e = s._compressedTextureASTC.COMPRESSED_RGBA_ASTC_4x4_KHR;
                    break;

                  case t.TextureFormat.ASTC4x4SRGB:
                    if (!s._compressedTextureASTC) throw "BaseTexture: not support ASTC4x4_KHR format.";
                    e = s._compressedTextureASTC.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
                    break;

                  case t.TextureFormat.ASTC6x6:
                    if (!s._compressedTextureASTC) throw "BaseTexture: not support ASTC6x6 format.";
                    e = s._compressedTextureASTC.COMPRESSED_RGBA_ASTC_6x6_KHR;
                    break;

                  case t.TextureFormat.ASTC6x6SRGB:
                    if (!s._compressedTextureASTC) throw "BaseTexture: not support ASTC6x6_KHR format.";
                    e = s._compressedTextureASTC.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
                    break;

                  case t.TextureFormat.ASTC8x8:
                    if (!s._compressedTextureASTC) throw "BaseTexture: not support ASTC8x8 format.";
                    e = s._compressedTextureASTC.COMPRESSED_RGBA_ASTC_8x8_KHR;
                    break;

                  case t.TextureFormat.ASTC8x8SRGB:
                    if (!s._compressedTextureASTC) throw "BaseTexture: not support ASTC8x8 format.";
                    e = s._compressedTextureASTC.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
                    break;

                  case t.TextureFormat.ASTC10x10:
                    if (!s._compressedTextureASTC) throw "BaseTexture: not support ASTC10x10 format.";
                    e = s._compressedTextureASTC.COMPRESSED_RGBA_ASTC_10x10_KHR;
                    break;

                  case t.TextureFormat.ASTC10x10SRGB:
                    if (!s._compressedTextureASTC) throw "BaseTexture: not support ASTC10x10 format.";
                    e = s._compressedTextureASTC.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
                    break;

                  case t.TextureFormat.ASTC12x12:
                    if (!s._compressedTextureASTC) throw "BaseTexture: not support ASTC12x12 format.";
                    e = s._compressedTextureASTC.COMPRESSED_RGBA_ASTC_12x12_KHR;
                    break;

                  case t.TextureFormat.ASTC12x12SRGB:
                    if (!s._compressedTextureASTC) throw "BaseTexture: not support ASTC12x12 format.";
                    e = s._compressedTextureASTC.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
                    break;

                  default:
                    throw "BaseTexture: unknown texture format.";
                }
                return e;
            }
        }, {
            key: "_setFilterMode",
            value: function _setFilterMode(e) {
                var i = g.instance;
                switch (R.bindTexture(i, this._glTextureType, this._glTexture), e) {
                  case t.FilterMode.Point:
                    this._mipmap ? i.texParameteri(this._glTextureType, i.TEXTURE_MIN_FILTER, i.NEAREST_MIPMAP_NEAREST) : i.texParameteri(this._glTextureType, i.TEXTURE_MIN_FILTER, i.NEAREST), 
                    i.texParameteri(this._glTextureType, i.TEXTURE_MAG_FILTER, i.NEAREST);
                    break;

                  case t.FilterMode.Bilinear:
                    this._mipmap ? i.texParameteri(this._glTextureType, i.TEXTURE_MIN_FILTER, i.LINEAR_MIPMAP_NEAREST) : i.texParameteri(this._glTextureType, i.TEXTURE_MIN_FILTER, i.LINEAR), 
                    i.texParameteri(this._glTextureType, i.TEXTURE_MAG_FILTER, i.LINEAR);
                    break;

                  case t.FilterMode.Trilinear:
                    this._mipmap ? i.texParameteri(this._glTextureType, i.TEXTURE_MIN_FILTER, i.LINEAR_MIPMAP_LINEAR) : i.texParameteri(this._glTextureType, i.TEXTURE_MIN_FILTER, i.LINEAR), 
                    i.texParameteri(this._glTextureType, i.TEXTURE_MAG_FILTER, i.LINEAR);
                    break;

                  default:
                    throw new Error("BaseTexture:unknown filterMode value.");
                }
            }
        }, {
            key: "_setWarpMode",
            value: function _setWarpMode(e, i) {
                var s = g.instance;
                if (R.bindTexture(s, this._glTextureType, this._glTexture), this._isPot(this._width) && this._isPot(this._height)) switch (i) {
                  case t.WarpMode.Repeat:
                    s.texParameteri(this._glTextureType, e, s.REPEAT);
                    break;

                  case t.WarpMode.Clamp:
                    s.texParameteri(this._glTextureType, e, s.CLAMP_TO_EDGE);
                } else s.texParameteri(this._glTextureType, e, s.CLAMP_TO_EDGE);
            }
        }, {
            key: "_setAnisotropy",
            value: function _setAnisotropy(t) {
                var e = g.layaGPUInstance._extTextureFilterAnisotropic;
                if (e) {
                    t = Math.max(t, 1);
                    var i = g.instance;
                    R.bindTexture(i, this._glTextureType, this._glTexture), t = Math.min(i.getParameter(e.MAX_TEXTURE_MAX_ANISOTROPY_EXT), t), 
                    i.texParameterf(this._glTextureType, e.TEXTURE_MAX_ANISOTROPY_EXT, t);
                }
            }
        }, {
            key: "_disposeResource",
            value: function _disposeResource() {
                this._glTexture && (g.instance.deleteTexture(this._glTexture), this._glTexture = null, 
                this._setGPUMemory(0));
            }
        }, {
            key: "_getSource",
            value: function _getSource() {
                return this._readyed ? this._glTexture : null;
            }
        }, {
            key: "generateMipmap",
            value: function generateMipmap() {
                this._isPot(this.width) && this._isPot(this.height) && g.instance.generateMipmap(this._glTextureType);
            }
        }, {
            key: "mipmap",
            get: function get() {
                return this._mipmap;
            }
        }, {
            key: "format",
            get: function get() {
                return this._format;
            }
        }, {
            key: "wrapModeU",
            get: function get() {
                return this._wrapModeU;
            },
            set: function set(t) {
                this._wrapModeU !== t && (this._wrapModeU = t, -1 !== this._width && this._setWarpMode(g.instance.TEXTURE_WRAP_S, t));
            }
        }, {
            key: "wrapModeV",
            get: function get() {
                return this._wrapModeV;
            },
            set: function set(t) {
                this._wrapModeV !== t && (this._wrapModeV = t, -1 !== this._height && this._setWarpMode(g.instance.TEXTURE_WRAP_T, t));
            }
        }, {
            key: "filterMode",
            get: function get() {
                return this._filterMode;
            },
            set: function set(t) {
                t !== this._filterMode && (this._filterMode = t, -1 !== this._width && -1 !== this._height && this._setFilterMode(t));
            }
        }, {
            key: "anisoLevel",
            get: function get() {
                return this._anisoLevel;
            },
            set: function set(t) {
                t !== this._anisoLevel && (this._anisoLevel = Math.max(1, Math.min(16, t)), -1 !== this._width && -1 !== this._height && this._setAnisotropy(t));
            }
        }, {
            key: "mipmapCount",
            get: function get() {
                return this._mipmapCount;
            }
        }, {
            key: "defaulteTexture",
            get: function get() {
                throw "BaseTexture:must override it.";
            }
        } ]);
        return L;
    }(P);
    L._rgbmRange = 5, L.FORMAT_R8G8B8 = 0, L.FORMAT_R8G8B8A8 = 1, L.FORMAT_ALPHA8 = 2, 
    L.FORMAT_DXT1 = 3, L.FORMAT_DXT5 = 4, L.FORMAT_ETC1RGB = 5, L.FORMAT_PVRTCRGB_2BPPV = 9, 
    L.FORMAT_PVRTCRGBA_2BPPV = 10, L.FORMAT_PVRTCRGB_4BPPV = 11, L.FORMAT_PVRTCRGBA_4BPPV = 12, 
    L.RENDERTEXTURE_FORMAT_RGBA_HALF_FLOAT = 14, L.FORMAT_R32G32B32A32 = 15, L.FORMAT_DEPTH_16 = 0, 
    L.FORMAT_STENCIL_8 = 1, L.FORMAT_DEPTHSTENCIL_16_8 = 2, L.FORMAT_DEPTHSTENCIL_NONE = 3, 
    L.FILTERMODE_POINT = 0, L.FILTERMODE_BILINEAR = 1, L.FILTERMODE_TRILINEAR = 2, L.WARPMODE_REPEAT = 0, 
    L.WARPMODE_CLAMP = 1;
    var D = /* */ function() {
        function D() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            (0, _classCallCheck2.default)(this, D);
            this._xd_ = !0, this._allocated_ = 8, this._pos_ = 0, this._length = 0, t ? (this._u8d_ = new Uint8Array(t), 
            this._d_ = new DataView(this._u8d_.buffer), this._length = this._d_.byteLength) : this._resizeBuffer(this._allocated_);
        }
        (0, _createClass2.default)(D, [ {
            key: "_resizeBuffer",
            value: function _resizeBuffer(t) {
                try {
                    var e = new Uint8Array(t);
                    null != this._u8d_ && (this._u8d_.length <= t ? e.set(this._u8d_) : e.set(this._u8d_.subarray(0, t))), 
                    this._u8d_ = e, this._d_ = new DataView(e.buffer);
                } catch (e) {
                    throw "Invalid typed array length:" + t;
                }
            }
        }, {
            key: "getString",
            value: function getString() {
                return this.readString();
            }
        }, {
            key: "readString",
            value: function readString() {
                return this._rUTF(this.getUint16());
            }
        }, {
            key: "getFloat32Array",
            value: function getFloat32Array(t, e) {
                return this.readFloat32Array(t, e);
            }
        }, {
            key: "readFloat32Array",
            value: function readFloat32Array(t, e) {
                var i = t + e;
                i = i > this._length ? this._length : i;
                var s = new Float32Array(this._d_.buffer.slice(t, i));
                return this._pos_ = i, s;
            }
        }, {
            key: "getUint8Array",
            value: function getUint8Array(t, e) {
                return this.readUint8Array(t, e);
            }
        }, {
            key: "readUint8Array",
            value: function readUint8Array(t, e) {
                var i = t + e;
                i = i > this._length ? this._length : i;
                var s = new Uint8Array(this._d_.buffer.slice(t, i));
                return this._pos_ = i, s;
            }
        }, {
            key: "getInt16Array",
            value: function getInt16Array(t, e) {
                return this.readInt16Array(t, e);
            }
        }, {
            key: "readInt16Array",
            value: function readInt16Array(t, e) {
                var i = t + e;
                i = i > this._length ? this._length : i;
                var s = new Int16Array(this._d_.buffer.slice(t, i));
                return this._pos_ = i, s;
            }
        }, {
            key: "getFloat32",
            value: function getFloat32() {
                return this.readFloat32();
            }
        }, {
            key: "readFloat32",
            value: function readFloat32() {
                if (this._pos_ + 4 > this._length) throw "getFloat32 error - Out of bounds";
                var t = this._d_.getFloat32(this._pos_, this._xd_);
                return this._pos_ += 4, t;
            }
        }, {
            key: "getFloat64",
            value: function getFloat64() {
                return this.readFloat64();
            }
        }, {
            key: "readFloat64",
            value: function readFloat64() {
                if (this._pos_ + 8 > this._length) throw "getFloat64 error - Out of bounds";
                var t = this._d_.getFloat64(this._pos_, this._xd_);
                return this._pos_ += 8, t;
            }
        }, {
            key: "writeFloat32",
            value: function writeFloat32(t) {
                this._ensureWrite(this._pos_ + 4), this._d_.setFloat32(this._pos_, t, this._xd_), 
                this._pos_ += 4;
            }
        }, {
            key: "writeFloat64",
            value: function writeFloat64(t) {
                this._ensureWrite(this._pos_ + 8), this._d_.setFloat64(this._pos_, t, this._xd_), 
                this._pos_ += 8;
            }
        }, {
            key: "getInt32",
            value: function getInt32() {
                return this.readInt32();
            }
        }, {
            key: "readInt32",
            value: function readInt32() {
                if (this._pos_ + 4 > this._length) throw "getInt32 error - Out of bounds";
                var t = this._d_.getInt32(this._pos_, this._xd_);
                return this._pos_ += 4, t;
            }
        }, {
            key: "getUint32",
            value: function getUint32() {
                return this.readUint32();
            }
        }, {
            key: "readUint32",
            value: function readUint32() {
                if (this._pos_ + 4 > this._length) throw "getUint32 error - Out of bounds";
                var t = this._d_.getUint32(this._pos_, this._xd_);
                return this._pos_ += 4, t;
            }
        }, {
            key: "writeInt32",
            value: function writeInt32(t) {
                this._ensureWrite(this._pos_ + 4), this._d_.setInt32(this._pos_, t, this._xd_), 
                this._pos_ += 4;
            }
        }, {
            key: "writeUint32",
            value: function writeUint32(t) {
                this._ensureWrite(this._pos_ + 4), this._d_.setUint32(this._pos_, t, this._xd_), 
                this._pos_ += 4;
            }
        }, {
            key: "getInt16",
            value: function getInt16() {
                return this.readInt16();
            }
        }, {
            key: "readInt16",
            value: function readInt16() {
                if (this._pos_ + 2 > this._length) throw "getInt16 error - Out of bounds";
                var t = this._d_.getInt16(this._pos_, this._xd_);
                return this._pos_ += 2, t;
            }
        }, {
            key: "getUint16",
            value: function getUint16() {
                return this.readUint16();
            }
        }, {
            key: "readUint16",
            value: function readUint16() {
                if (this._pos_ + 2 > this._length) throw "getUint16 error - Out of bounds";
                var t = this._d_.getUint16(this._pos_, this._xd_);
                return this._pos_ += 2, t;
            }
        }, {
            key: "writeUint16",
            value: function writeUint16(t) {
                this._ensureWrite(this._pos_ + 2), this._d_.setUint16(this._pos_, t, this._xd_), 
                this._pos_ += 2;
            }
        }, {
            key: "writeInt16",
            value: function writeInt16(t) {
                this._ensureWrite(this._pos_ + 2), this._d_.setInt16(this._pos_, t, this._xd_), 
                this._pos_ += 2;
            }
        }, {
            key: "getUint8",
            value: function getUint8() {
                return this.readUint8();
            }
        }, {
            key: "readUint8",
            value: function readUint8() {
                if (this._pos_ + 1 > this._length) throw "getUint8 error - Out of bounds";
                return this._u8d_[this._pos_++];
            }
        }, {
            key: "writeUint8",
            value: function writeUint8(t) {
                this._ensureWrite(this._pos_ + 1), this._d_.setUint8(this._pos_, t), this._pos_++;
            }
        }, {
            key: "_getUInt8",
            value: function _getUInt8(t) {
                return this._readUInt8(t);
            }
        }, {
            key: "_readUInt8",
            value: function _readUInt8(t) {
                return this._d_.getUint8(t);
            }
        }, {
            key: "_getUint16",
            value: function _getUint16(t) {
                return this._readUint16(t);
            }
        }, {
            key: "_readUint16",
            value: function _readUint16(t) {
                return this._d_.getUint16(t, this._xd_);
            }
        }, {
            key: "_getMatrix",
            value: function _getMatrix() {
                return this._readMatrix();
            }
        }, {
            key: "_readMatrix",
            value: function _readMatrix() {
                return new p(this.getFloat32(), this.getFloat32(), this.getFloat32(), this.getFloat32(), this.getFloat32(), this.getFloat32());
            }
        }, {
            key: "_rUTF",
            value: function _rUTF(t) {
                var e, i, s = this._pos_ + t, r = String.fromCharCode, a = this._u8d_, n = [], h = 0;
                for (n.length = 1e3; this._pos_ < s; ) {
                    if ((e = a[this._pos_++]) < 128) 0 != e && (n[h++] = r(e)); else if (e < 224) n[h++] = r((63 & e) << 6 | 127 & a[this._pos_++]); else if (e < 240) i = a[this._pos_++], 
                    n[h++] = r((31 & e) << 12 | (127 & i) << 6 | 127 & a[this._pos_++]); else {
                        var _t2 = (15 & e) << 18 | (127 & (i = a[this._pos_++])) << 12 | (127 & a[this._pos_++]) << 6 | 127 & a[this._pos_++];
                        if (_t2 >= 65536) {
                            var _e2 = _t2 - 65536, _i2 = 55296 | _e2 >> 10, _s2 = 56320 | 1023 & _e2;
                            n[h++] = r(_i2), n[h++] = r(_s2);
                        } else n[h++] = r(_t2);
                    }
                }
                return n.length = h, n.join("");
            }
        }, {
            key: "getCustomString",
            value: function getCustomString(t) {
                return this.readCustomString(t);
            }
        }, {
            key: "readCustomString",
            value: function readCustomString(t) {
                for (var e, i = "", s = 0, r = String.fromCharCode, a = this._u8d_; t > 0; ) {
                    if ((e = a[this._pos_]) < 128) i += r(e), this._pos_++, t--; else for (s = e - 128, 
                    this._pos_++, t -= s; s > 0; ) {
                        e = a[this._pos_++], i += r(a[this._pos_++] << 8 | e), s--;
                    }
                }
                return i;
            }
        }, {
            key: "clear",
            value: function clear() {
                this._pos_ = 0, this.length = 0;
            }
        }, {
            key: "__getBuffer",
            value: function __getBuffer() {
                return this._d_.buffer;
            }
        }, {
            key: "writeUTFBytes",
            value: function writeUTFBytes(t) {
                for (var e = 0, i = (t += "").length; e < i; e++) {
                    var s = t.charCodeAt(e);
                    if (s <= 127) this.writeByte(s); else if (s <= 2047) this._ensureWrite(this._pos_ + 2), 
                    this._u8d_.set([ 192 | s >> 6, 128 | 63 & s ], this._pos_), this._pos_ += 2; else if (s >= 55296 && s <= 56319) {
                        e++;
                        var _i3 = t.charCodeAt(e);
                        if (!Number.isNaN(_i3) && _i3 >= 56320 && _i3 <= 57343) {
                            var _t3 = 64 + (1023 & s), _e3 = 1023 & _i3, _r = 240 | _t3 >> 8 & 63, _a = 128 | _t3 >> 2 & 63, _n = 128 | (3 & _t3) << 4 | _e3 >> 6 & 15, _h = 128 | 63 & _e3;
                            this._ensureWrite(this._pos_ + 4), this._u8d_.set([ _r, _a, _n, _h ], this._pos_), 
                            this._pos_ += 4;
                        }
                    } else s <= 65535 ? (this._ensureWrite(this._pos_ + 3), this._u8d_.set([ 224 | s >> 12, 128 | s >> 6 & 63, 128 | 63 & s ], this._pos_), 
                    this._pos_ += 3) : (this._ensureWrite(this._pos_ + 4), this._u8d_.set([ 240 | s >> 18, 128 | s >> 12 & 63, 128 | s >> 6 & 63, 128 | 63 & s ], this._pos_), 
                    this._pos_ += 4);
                }
            }
        }, {
            key: "writeUTFString",
            value: function writeUTFString(t) {
                var e = this.pos;
                this.writeUint16(1), this.writeUTFBytes(t);
                var i = this.pos - e - 2;
                this._d_.setUint16(e, i, this._xd_);
            }
        }, {
            key: "writeUTFString32",
            value: function writeUTFString32(t) {
                var e = this.pos;
                this.writeUint32(1), this.writeUTFBytes(t);
                var i = this.pos - e - 4;
                this._d_.setUint32(e, i, this._xd_);
            }
        }, {
            key: "readUTFString",
            value: function readUTFString() {
                return this.readUTFBytes(this.getUint16());
            }
        }, {
            key: "readUTFString32",
            value: function readUTFString32() {
                return this.readUTFBytes(this.getUint32());
            }
        }, {
            key: "getUTFString",
            value: function getUTFString() {
                return this.readUTFString();
            }
        }, {
            key: "readUTFBytes",
            value: function readUTFBytes() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
                if (0 === t) return "";
                var e = this.bytesAvailable;
                if (t > e) throw "readUTFBytes error - Out of bounds";
                return t = t > 0 ? t : e, this._rUTF(t);
            }
        }, {
            key: "getUTFBytes",
            value: function getUTFBytes() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
                return this.readUTFBytes(t);
            }
        }, {
            key: "writeByte",
            value: function writeByte(t) {
                this._ensureWrite(this._pos_ + 1), this._d_.setInt8(this._pos_, t), this._pos_ += 1;
            }
        }, {
            key: "readByte",
            value: function readByte() {
                if (this._pos_ + 1 > this._length) throw "readByte error - Out of bounds";
                return this._d_.getInt8(this._pos_++);
            }
        }, {
            key: "getByte",
            value: function getByte() {
                return this.readByte();
            }
        }, {
            key: "_ensureWrite",
            value: function _ensureWrite(t) {
                this._length < t && (this._length = t), this._allocated_ < t && (this.length = t);
            }
        }, {
            key: "writeArrayBuffer",
            value: function writeArrayBuffer(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                if (e < 0 || i < 0) throw "writeArrayBuffer error - Out of bounds";
                0 == i && (i = t.byteLength - e), this._ensureWrite(this._pos_ + i);
                var s = new Uint8Array(t);
                this._u8d_.set(s.subarray(e, e + i), this._pos_), this._pos_ += i;
            }
        }, {
            key: "readArrayBuffer",
            value: function readArrayBuffer(t) {
                var e;
                return e = this._u8d_.buffer.slice(this._pos_, this._pos_ + t), this._pos_ = this._pos_ + t, 
                e;
            }
        }, {
            key: "buffer",
            get: function get() {
                var t = this._d_.buffer;
                return t.byteLength === this._length ? t : t.slice(0, this._length);
            }
        }, {
            key: "endian",
            get: function get() {
                return this._xd_ ? D.LITTLE_ENDIAN : D.BIG_ENDIAN;
            },
            set: function set(t) {
                this._xd_ = t === D.LITTLE_ENDIAN;
            }
        }, {
            key: "length",
            set: function set(t) {
                this._allocated_ < t ? this._resizeBuffer(this._allocated_ = Math.floor(Math.max(t, 2 * this._allocated_))) : this._allocated_ > t && this._resizeBuffer(this._allocated_ = t), 
                this._length = t;
            },
            get: function get() {
                return this._length;
            }
        }, {
            key: "pos",
            get: function get() {
                return this._pos_;
            },
            set: function set(t) {
                this._pos_ = t;
            }
        }, {
            key: "bytesAvailable",
            get: function get() {
                return this._length - this._pos_;
            }
        } ], [ {
            key: "getSystemEndian",
            value: function getSystemEndian() {
                if (!D._sysEndian) {
                    var t = new ArrayBuffer(2);
                    new DataView(t).setInt16(0, 256, !0), D._sysEndian = 256 === new Int16Array(t)[0] ? D.LITTLE_ENDIAN : D.BIG_ENDIAN;
                }
                return D._sysEndian;
            }
        } ]);
        return D;
    }();
    D.BIG_ENDIAN = "bigEndian", D.LITTLE_ENDIAN = "littleEndian", D._sysEndian = null, 
    (y = t.RenderTextureFormat || (t.RenderTextureFormat = {}))[y.R8G8B8 = 0] = "R8G8B8", 
    y[y.R8G8B8A8 = 1] = "R8G8B8A8", y[y.Alpha8 = 2] = "Alpha8", y[y.R16G16B16A16 = 14] = "R16G16B16A16", 
    y[y.Depth = 15] = "Depth", y[y.ShadowMap = 16] = "ShadowMap", (E = t.RenderTextureDepthFormat || (t.RenderTextureDepthFormat = {}))[E.DEPTH_16 = 0] = "DEPTH_16", 
    E[E.STENCIL_8 = 1] = "STENCIL_8", E[E.DEPTHSTENCIL_24_8 = 2] = "DEPTHSTENCIL_24_8", 
    E[E.DEPTHSTENCIL_NONE = 3] = "DEPTHSTENCIL_NONE", E[E.DEPTHSTENCIL_16_8 = 2] = "DEPTHSTENCIL_16_8";
    var B = /* */ function() {
        function B() {
            (0, _classCallCheck2.default)(this, B);
        }
        (0, _createClass2.default)(B, null, [ {
            key: "supportTextureFormat",
            value: function supportTextureFormat(e) {
                switch (e) {
                  case t.TextureFormat.R32G32B32A32:
                    return !(!g.layaGPUInstance._isWebGL2 && !g.layaGPUInstance._oesTextureFloat);

                  case t.TextureFormat.R16G16B16A16:
                    return !(!g.layaGPUInstance._isWebGL2 && !g.layaGPUInstance._oesTextureHalfFloat);

                  default:
                    return !0;
                }
            }
        }, {
            key: "supportRenderTextureFormat",
            value: function supportRenderTextureFormat(e) {
                switch (e) {
                  case t.RenderTextureFormat.R16G16B16A16:
                    return !!(g.layaGPUInstance._isWebGL2 && g.layaGPUInstance._extColorBufferFloat || g.layaGPUInstance._oesTextureHalfFloat && g.layaGPUInstance._oesTextureHalfFloatLinear);

                  case t.RenderTextureFormat.Depth:
                    return !(!g.layaGPUInstance._isWebGL2 && !g.layaGPUInstance._webgl_depth_texture);

                  case t.RenderTextureFormat.ShadowMap:
                    return !!g.layaGPUInstance._isWebGL2;

                  default:
                    return !0;
                }
            }
        }, {
            key: "maxTextureCount",
            get: function get() {
                return this._maxTextureCount;
            }
        }, {
            key: "maxTextureSize",
            get: function get() {
                return this._maxTextureSize;
            }
        }, {
            key: "shaderCapailityLevel",
            get: function get() {
                return this._shaderCapailityLevel;
            }
        } ]);
        return B;
    }();
    var F = /* */ function() {
        function F() {
            (0, _classCallCheck2.default)(this, F);
        }
        (0, _createClass2.default)(F, null, [ {
            key: "__init__",
            value: function __init__() {
                for (var t = 0; t < 256; ++t) {
                    var e = t - 127;
                    e < -27 ? (F._baseTable[0 | t] = 0, F._baseTable[256 | t] = 32768, F._shiftTable[0 | t] = 24, 
                    F._shiftTable[256 | t] = 24) : e < -14 ? (F._baseTable[0 | t] = 1024 >> -e - 14, 
                    F._baseTable[256 | t] = 1024 >> -e - 14 | 32768, F._shiftTable[0 | t] = -e - 1, 
                    F._shiftTable[256 | t] = -e - 1) : e <= 15 ? (F._baseTable[0 | t] = e + 15 << 10, 
                    F._baseTable[256 | t] = e + 15 << 10 | 32768, F._shiftTable[0 | t] = 13, F._shiftTable[256 | t] = 13) : e < 128 ? (F._baseTable[0 | t] = 31744, 
                    F._baseTable[256 | t] = 64512, F._shiftTable[0 | t] = 24, F._shiftTable[256 | t] = 24) : (F._baseTable[0 | t] = 31744, 
                    F._baseTable[256 | t] = 64512, F._shiftTable[0 | t] = 13, F._shiftTable[256 | t] = 13);
                }
                for (F._mantissaTable[0] = 0, t = 1; t < 1024; ++t) {
                    var i = t << 13;
                    for (e = 0; 0 == (8388608 & i); ) {
                        e -= 8388608, i <<= 1;
                    }
                    i &= -8388609, e += 947912704, F._mantissaTable[t] = i | e;
                }
                for (t = 1024; t < 2048; ++t) {
                    F._mantissaTable[t] = 939524096 + (t - 1024 << 13);
                }
                for (F._exponentTable[0] = 0, t = 1; t < 31; ++t) {
                    F._exponentTable[t] = t << 23;
                }
                for (F._exponentTable[31] = 1199570944, F._exponentTable[32] = 2147483648, t = 33; t < 63; ++t) {
                    F._exponentTable[t] = 2147483648 + (t - 32 << 23);
                }
                for (F._exponentTable[63] = 3347054592, F._offsetTable[0] = 0, t = 1; t < 64; ++t) {
                    F._offsetTable[t] = 32 === t ? 0 : 1024;
                }
            }
        }, {
            key: "roundToFloat16Bits",
            value: function roundToFloat16Bits(t) {
                F._floatView[0] = t;
                var e = F._uint32View[0], i = e >> 23 & 511;
                return F._baseTable[i] + ((8388607 & e) >> F._shiftTable[i]);
            }
        }, {
            key: "convertToNumber",
            value: function convertToNumber(t) {
                var e = t >> 10;
                return F._uint32View[0] = F._mantissaTable[F._offsetTable[e] + (1023 & t)] + F._exponentTable[e], 
                F._floatView[0];
            }
        } ]);
        return F;
    }();
    F._buffer = new ArrayBuffer(4), F._floatView = new Float32Array(F._buffer), F._uint32View = new Uint32Array(F._buffer), 
    F._baseTable = new Uint32Array(512), F._shiftTable = new Uint32Array(512), F._mantissaTable = new Uint32Array(2048), 
    F._exponentTable = new Uint32Array(64), F._offsetTable = new Uint32Array(64);
    var O = /* */ function(_L) {
        (0, _inherits2.default)(O, _L);
        var _super5 = _createSuper(O);
        function O() {
            var _this4;
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : t.TextureFormat.R8G8B8A8;
            var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
            var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
            (0, _classCallCheck2.default)(this, O);
            _this4 = _super5.call(this, s, r);
            var n = g.instance;
            _this4._glTextureType = n.TEXTURE_2D, _this4._width = e, _this4._height = i, _this4._canRead = a, 
            _this4._setWarpMode(n.TEXTURE_WRAP_S, _this4._wrapModeU), _this4._setWarpMode(n.TEXTURE_WRAP_T, _this4._wrapModeV), 
            _this4._setFilterMode(_this4._filterMode), _this4._setAnisotropy(_this4._anisoLevel);
            var h = _this4._gpuCompressFormat();
            if (r) {
                var o = Math.max(Math.ceil(Math.log2(e)) + 1, Math.ceil(Math.log2(i)) + 1);
                if (!h) for (var l = 0; l < o; l++) {
                    _this4._setPixels(null, l, Math.max(e >> l, 1), Math.max(i >> l, 1));
                }
                _this4._mipmapCount = o, _this4._setGPUMemory(e * i * 4 * (1 + 1 / 3));
            } else h || _this4._setPixels(null, 0, e, i), _this4._mipmapCount = 1, _this4._setGPUMemory(e * i * 4);
            return _this4;
        }
        (0, _createClass2.default)(O, [ {
            key: "_gpuCompressFormat",
            value: function _gpuCompressFormat() {
                return this._format != t.TextureFormat.R8G8B8A8 && this._format != t.TextureFormat.R8G8B8 && this._format != t.TextureFormat.R16G16B16A16 && this._format != t.TextureFormat.R32G32B32A32 && this._format != t.TextureFormat.R5G6B5 && this._format != t.TextureFormat.Alpha8;
            }
        }, {
            key: "_setPixels",
            value: function _setPixels(e, i, s, r) {
                var a = g.instance, n = this._glTextureType, h = this._getGLFormat();
                switch (R.bindTexture(a, n, this._glTexture), this.format) {
                  case t.TextureFormat.R8G8B8:
                    a.pixelStorei(a.UNPACK_ALIGNMENT, 1), a.texImage2D(n, i, h, s, r, 0, h, a.UNSIGNED_BYTE, e), 
                    a.pixelStorei(a.UNPACK_ALIGNMENT, 4);
                    break;

                  case t.TextureFormat.R5G6B5:
                    a.pixelStorei(a.UNPACK_ALIGNMENT, 2), a.texImage2D(n, i, h, s, r, 0, h, a.UNSIGNED_SHORT_5_6_5, e), 
                    a.pixelStorei(a.UNPACK_ALIGNMENT, 4);
                    break;

                  case t.TextureFormat.R32G32B32A32:
                    g.layaGPUInstance._isWebGL2 ? a.texImage2D(n, i, a.RGBA32F, s, r, 0, h, a.FLOAT, e) : a.texImage2D(n, i, a.RGBA, s, r, 0, h, a.FLOAT, e);
                    break;

                  case t.TextureFormat.R16G16B16A16:
                    g.layaGPUInstance._isWebGL2 ? a.texImage2D(n, i, a.RGBA16F, s, r, 0, h, a.HALF_FLOAT, e) : a.texImage2D(n, i, a.RGBA, s, r, 0, h, g.layaGPUInstance._oesTextureHalfFloat.HALF_FLOAT_OES, e);
                    break;

                  default:
                    a.texImage2D(n, i, h, s, r, 0, h, a.UNSIGNED_BYTE, e);
                }
            }
        }, {
            key: "_calcualatesCompressedDataSize",
            value: function _calcualatesCompressedDataSize(e, i, s) {
                switch (e) {
                  case t.TextureFormat.DXT1:
                    return (i + 3 >> 2) * (s + 3 >> 2) * 8;

                  case t.TextureFormat.DXT5:
                    return (i + 3 >> 2) * (s + 3 >> 2) * 16;

                  case t.TextureFormat.PVRTCRGB_4BPPV:
                  case t.TextureFormat.PVRTCRGBA_4BPPV:
                    return Math.floor((Math.max(i, 8) * Math.max(s, 8) * 4 + 7) / 8);

                  case t.TextureFormat.PVRTCRGB_2BPPV:
                  case t.TextureFormat.PVRTCRGBA_2BPPV:
                    return Math.floor((Math.max(i, 16) * Math.max(s, 8) * 2 + 7) / 8);

                  default:
                    return 0;
                }
            }
        }, {
            key: "_pharseDDS",
            value: function _pharseDDS(e) {
                var i = new Int32Array(e, 0, 31);
                if (542327876 != i[0]) throw "Invalid magic number in DDS header";
                if (!(4 & i[20])) throw "Unsupported format, must contain a FourCC code";
                var s = i[21];
                switch (this._format) {
                  case t.TextureFormat.DXT1:
                    if (827611204 !== s) throw "the FourCC code is not same with texture format.";
                    break;

                  case t.TextureFormat.DXT5:
                    if (894720068 !== s) throw "the FourCC code is not same with texture format.";
                    break;

                  default:
                    throw "unknown texture format.";
                }
                var r = 1;
                if (131072 & i[2]) {
                    if (r = Math.max(1, i[7]), !this._mipmap) throw "the mipmap is not same with Texture2D.";
                } else if (this._mipmap) throw "the mipmap is not same with Texture2D.";
                var a = i[4], n = i[3];
                this._width = a, this._height = n;
                var h = i[1] + 4;
                this._upLoadCompressedTexImage2D(e, a, n, r, h, 0);
            }
        }, {
            key: "_pharseKTX",
            value: function _pharseKTX(e) {
                var i = new Uint8Array(e, 0, 12);
                if (171 != i[0] || 75 != i[1] || 84 != i[2] || 88 != i[3] || 32 != i[4] || 49 != i[5] || 49 != i[6] || 187 != i[7] || 13 != i[8] || 10 != i[9] || 26 != i[10] || 10 != i[11]) throw "Invalid fileIdentifier in KTX header";
                var s = new Int32Array(i.buffer, i.length, 13), r = s[4];
                if (this._format = -1, g.layaGPUInstance._compressedTextureASTC) switch (r) {
                  case g.layaGPUInstance._compressedTextureASTC.COMPRESSED_RGBA_ASTC_4x4_KHR:
                    this._format = t.TextureFormat.ASTC4x4;
                    break;

                  case g.layaGPUInstance._compressedTextureASTC.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:
                    this._format = t.TextureFormat.ASTC4x4SRGB;
                    break;

                  case g.layaGPUInstance._compressedTextureASTC.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:
                    this._format = t.TextureFormat.ASTC6x6SRGB;
                    break;

                  case g.layaGPUInstance._compressedTextureASTC.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:
                    this._format = t.TextureFormat.ASTC8x8SRGB;
                    break;

                  case g.layaGPUInstance._compressedTextureASTC.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:
                    this._format = t.TextureFormat.ASTC10x10SRGB;
                    break;

                  case g.layaGPUInstance._compressedTextureASTC.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:
                    this._format = t.TextureFormat.ASTC12x12SRGB;
                    break;

                  case g.layaGPUInstance._compressedTextureASTC.COMPRESSED_RGBA_ASTC_6x6_KHR:
                    this._format = t.TextureFormat.ASTC6x6;
                    break;

                  case g.layaGPUInstance._compressedTextureASTC.COMPRESSED_RGBA_ASTC_8x8_KHR:
                    this._format = t.TextureFormat.ASTC8x8;
                    break;

                  case g.layaGPUInstance._compressedTextureASTC.COMPRESSED_RGBA_ASTC_10x10_KHR:
                    this._format = t.TextureFormat.ASTC10x10;
                    break;

                  case g.layaGPUInstance._compressedTextureASTC.COMPRESSED_RGBA_ASTC_12x12_KHR:
                    this._format = t.TextureFormat.ASTC12x12;
                }
                if (g.layaGPUInstance._compressedTextureEtc1) switch (r) {
                  case g.layaGPUInstance._compressedTextureEtc1.COMPRESSED_RGB_ETC1_WEBGL:
                    this._format = t.TextureFormat.ETC1RGB;
                }
                if (g.layaGPUInstance._compressedTextureETC) switch (r) {
                  case g.layaGPUInstance._compressedTextureETC.COMPRESSED_RGBA8_ETC2_EAC:
                    this._format = t.TextureFormat.ETC2RGBA;
                    break;

                  case g.layaGPUInstance._compressedTextureETC.COMPRESSED_RGB8_ETC2:
                    this._format = t.TextureFormat.ETC2RGB;
                    break;

                  case g.layaGPUInstance._compressedTextureETC.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:
                    this._format = t.TextureFormat.ETC2RGB_Alpha8;
                    break;

                  case g.layaGPUInstance._compressedTextureETC.COMPRESSED_SRGB8_ETC2:
                    this._format = t.TextureFormat.ETC2SRGB;
                }
                if (-1 == this._format) throw "unknown texture format.";
                var a = s[11], n = s[6], h = s[7];
                this._width = n, this._height = h;
                var o = 64 + s[12];
                this._upLoadKTXCompressedTexImage2D(e, n, h, a, o, 4);
            }
        }, {
            key: "_pharsePVR",
            value: function _pharsePVR(e) {
                var i = new Int32Array(e, 0, 13);
                if (55727696 != i[0]) throw "Invalid magic number in PVR header";
                switch (i[2]) {
                  case 0:
                    this._format = t.TextureFormat.PVRTCRGB_2BPPV;
                    break;

                  case 2:
                    this._format = t.TextureFormat.PVRTCRGB_4BPPV;
                    break;

                  case 1:
                    this._format = t.TextureFormat.PVRTCRGBA_2BPPV;
                    break;

                  case 3:
                    this._format = t.TextureFormat.PVRTCRGBA_4BPPV;
                    break;

                  default:
                    throw "Texture2D:unknown PVR format.";
                }
                var s = i[11], r = i[7], a = i[6];
                this._width = r, this._height = a;
                var n = i[12] + 52;
                this._upLoadCompressedTexImage2D(e, r, a, s, n, 0);
            }
        }, {
            key: "_upLoadCompressedTexImage2D",
            value: function _upLoadCompressedTexImage2D(t, e, i, s, r, a) {
                var n = g.instance, h = this._glTextureType;
                R.bindTexture(n, h, this._glTexture);
                for (var o = this._getGLFormat(), l = r, _ = 0; _ < s; _++) {
                    l += a;
                    var u = this._calcualatesCompressedDataSize(this._format, e, i), c = new Uint8Array(t, l, u);
                    n.compressedTexImage2D(h, _, o, e, i, 0, c), e = Math.max(e >> 1, 1), i = Math.max(i >> 1, 1), 
                    l += u;
                }
                var d = l;
                this._setGPUMemory(d), this._readyed = !0, this._activeResource();
            }
        }, {
            key: "_upLoadKTXCompressedTexImage2D",
            value: function _upLoadKTXCompressedTexImage2D(t, e, i, s, r, a) {
                var n = g.instance, h = this._glTextureType;
                R.bindTexture(n, h, this._glTexture);
                for (var o = this._getGLFormat(), l = r, _ = 0; _ < s; _++) {
                    var u = new Int32Array(t, l, 1)[0];
                    l += a;
                    var c = new Uint8Array(t, l, u);
                    n.compressedTexImage2D(h, _, o, e, i, 0, c), e = Math.max(e >> 1, 1), i = Math.max(i >> 1, 1), 
                    l += u, l += 3 - (u + 3) % 4;
                }
                var d = l;
                this._setGPUMemory(d), this._readyed = !0, this._activeResource();
            }
        }, {
            key: "loadImageSource",
            value: function loadImageSource(e) {
                var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
                var r = g.instance, a = e.width, n = e.height;
                this._width = a, this._height = n, this._isPot(a) && this._isPot(n) || (this._mipmap = !1), 
                this._setWarpMode(r.TEXTURE_WRAP_S, this._wrapModeU), this._setWarpMode(r.TEXTURE_WRAP_T, this._wrapModeV), 
                this._setFilterMode(this._filterMode), R.bindTexture(r, this._glTextureType, this._glTexture);
                var h = this._getGLFormat();
                i.Render.isConchApp ? (e.setPremultiplyAlpha && e.setPremultiplyAlpha(s), r.texImage2D(this._glTextureType, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, e)) : (s && r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0), 
                this.format == t.TextureFormat.R5G6B5 ? r.texImage2D(this._glTextureType, 0, r.RGB, r.RGB, r.UNSIGNED_SHORT_5_6_5, e) : r.texImage2D(this._glTextureType, 0, h, h, r.UNSIGNED_BYTE, e), 
                s && r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1)), this._mipmap ? (r.generateMipmap(this._glTextureType), 
                this._setGPUMemory(a * n * 4 * (1 + 1 / 3))) : this._setGPUMemory(a * n * 4), this._canRead && (i.Render.isConchApp ? this._pixels = new Uint8Array(e._nativeObj.getImageData(0, 0, a, n)) : (i.Browser.canvas.size(a, n), 
                i.Browser.canvas.clear(), i.Browser.context.drawImage(e, 0, 0, a, n), this._pixels = new Uint8Array(i.Browser.context.getImageData(0, 0, a, n).data.buffer))), 
                this._readyed = !0, this._activeResource();
            }
        }, {
            key: "setPixels",
            value: function setPixels(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                if (this._gpuCompressFormat()) throw "Texture2D:the format is GPU compression format.";
                if (!t) throw "Texture2D:pixels can't be null.";
                var i = Math.max(this._width >> e, 1), s = Math.max(this._height >> e, 1), r = i * s * this._getFormatByteCount();
                if (t.length < r) throw "Texture2D:pixels length should at least " + r + ".";
                this._setPixels(t, e, i, s), this._canRead && (this._pixels = t), this._readyed = !0, 
                this._activeResource();
            }
        }, {
            key: "setSubPixels",
            value: function setSubPixels(e, i, s, r, a) {
                var n = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
                if (this._gpuCompressFormat()) throw "Texture2D:the format is GPU compression format.";
                if (!a) throw "Texture2D:pixels can't be null.";
                var h = g.instance, o = this._glTextureType;
                R.bindTexture(h, o, this._glTexture);
                var l = this._getGLFormat();
                switch (this.format) {
                  case t.TextureFormat.R8G8B8:
                    h.pixelStorei(h.UNPACK_ALIGNMENT, 1), h.texSubImage2D(o, n, e, i, s, r, l, h.UNSIGNED_BYTE, a), 
                    h.pixelStorei(h.UNPACK_ALIGNMENT, 4);
                    break;

                  case t.TextureFormat.R5G6B5:
                    h.pixelStorei(h.UNPACK_ALIGNMENT, 2), h.texSubImage2D(o, n, e, i, s, r, l, h.UNSIGNED_SHORT_5_6_5, a), 
                    h.pixelStorei(h.UNPACK_ALIGNMENT, 4);
                    break;

                  case t.TextureFormat.R32G32B32A32:
                    h.texSubImage2D(o, n, e, i, s, r, l, h.FLOAT, a);
                    break;

                  default:
                    h.texSubImage2D(o, n, e, i, s, r, l, h.UNSIGNED_BYTE, a);
                }
                this._readyed = !0, this._activeResource();
            }
        }, {
            key: "setCompressData",
            value: function setCompressData(e) {
                switch (this._format) {
                  case t.TextureFormat.DXT1:
                  case t.TextureFormat.DXT5:
                    this._pharseDDS(e);
                    break;

                  case t.TextureFormat.ETC1RGB:
                  case t.TextureFormat.ETC2RGB:
                  case t.TextureFormat.ETC2RGBA:
                  case t.TextureFormat.ETC2RGB_Alpha8:
                  case t.TextureFormat.ETC2SRGB:
                  case t.TextureFormat.ASTC4x4:
                  case t.TextureFormat.ASTC4x4SRGB:
                  case t.TextureFormat.ASTC6x6:
                  case t.TextureFormat.ASTC6x6SRGB:
                  case t.TextureFormat.ASTC8x8:
                  case t.TextureFormat.ASTC8x8SRGB:
                  case t.TextureFormat.ASTC10x10:
                  case t.TextureFormat.ASTC10x10SRGB:
                  case t.TextureFormat.ASTC12x12:
                  case t.TextureFormat.ASTC12x12SRGB:
                  case t.TextureFormat.KTXTEXTURE:
                    this._pharseKTX(e);
                    break;

                  case t.TextureFormat.PVRTCRGB_2BPPV:
                  case t.TextureFormat.PVRTCRGBA_2BPPV:
                  case t.TextureFormat.PVRTCRGB_4BPPV:
                  case t.TextureFormat.PVRTCRGBA_4BPPV:
                  case t.TextureFormat.PVRTEXTURE:
                    this._pharsePVR(e);
                    break;

                  default:
                    throw "Texture2D:unkonwn format.";
                }
                1 == this.mipmapCount || this.width != 1 << this.mipmapCount - 1 && this.height != 1 << this.mipmapCount ? this._mipmap = !1 : this._mipmap = !0;
                var i = g.instance;
                this._setWarpMode(i.TEXTURE_WRAP_S, this._wrapModeU), this._setWarpMode(i.TEXTURE_WRAP_T, this._wrapModeV), 
                this._setFilterMode(this._filterMode);
            }
        }, {
            key: "getPixels",
            value: function getPixels() {
                if (this._canRead) return this._pixels;
                throw new Error("Texture2D: must set texture canRead is true.");
            }
        }, {
            key: "defaulteTexture",
            get: function get() {
                return O.grayTexture;
            }
        } ], [ {
            key: "__init__",
            value: function __init__() {
                var e = new Uint8Array(3);
                e[0] = 128, e[1] = 128, e[2] = 128, O.grayTexture = new O(1, 1, t.TextureFormat.R8G8B8, !1, !1), 
                O.grayTexture.setPixels(e), O.grayTexture.lock = !0, e[0] = 255, e[1] = 255, e[2] = 255, 
                O.whiteTexture = new O(1, 1, t.TextureFormat.R8G8B8, !1, !1), O.whiteTexture.setPixels(e), 
                O.whiteTexture.lock = !0, e[0] = 0, e[1] = 0, e[2] = 0, O.blackTexture = new O(1, 1, t.TextureFormat.R8G8B8, !1, !1), 
                O.blackTexture.setPixels(e), O.blackTexture.lock = !0, O.erroTextur = O.whiteTexture;
            }
        }, {
            key: "_parse",
            value: function _parse(e) {
                var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var r = s ? new O(s[0], s[1], s[2], s[3], s[4]) : new O(0, 0);
                switch (i && (r.wrapModeU = i.wrapModeU, r.wrapModeV = i.wrapModeV, r.filterMode = i.filterMode, 
                r.anisoLevel = i.anisoLevel), r._format) {
                  case t.TextureFormat.R8G8B8:
                  case t.TextureFormat.R8G8B8A8:
                    r.loadImageSource(e);
                    break;

                  case t.TextureFormat.DXT1:
                  case t.TextureFormat.DXT5:
                  case t.TextureFormat.ETC1RGB:
                  case t.TextureFormat.PVRTCRGB_2BPPV:
                  case t.TextureFormat.PVRTCRGBA_2BPPV:
                  case t.TextureFormat.PVRTCRGB_4BPPV:
                  case t.TextureFormat.PVRTCRGBA_4BPPV:
                  case t.TextureFormat.ETC2RGB:
                  case t.TextureFormat.ETC2RGBA:
                  case t.TextureFormat.ETC2SRGB:
                  case t.TextureFormat.ASTC4x4:
                  case t.TextureFormat.ASTC6x6:
                  case t.TextureFormat.ASTC8x8:
                  case t.TextureFormat.ASTC10x10:
                  case t.TextureFormat.ASTC12x12:
                  case t.TextureFormat.KTXTEXTURE:
                  case t.TextureFormat.PVRTEXTURE:
                    r.setCompressData(e);
                    break;

                  default:
                    throw "Texture2D:unkonwn format.";
                }
                return r;
            }
        }, {
            key: "_SimpleAnimatorTextureParse",
            value: function _SimpleAnimatorTextureParse(e) {
                var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var r, a, n = new D(e);
                switch (n.readUTFString()) {
                  case "LAYAANIMATORTEXTURE:0000":
                    var h, o = n.readInt32(), l = n.readInt32();
                    r = new Float32Array(o * o * 4), a = new Float32Array(n.readArrayBuffer(4 * l)), 
                    r.set(a, 0), (h = new O(o, o, t.TextureFormat.R32G32B32A32, !1, !1)).setPixels(r, 0), 
                    h.filterMode = t.FilterMode.Point;
                    break;

                  case "LAYACOMPRESSANIMATORTEXTURE:0000":
                    o = n.readInt32(), l = n.readInt32();
                    if (r = new Uint16Array(n.readArrayBuffer(2 * l)), B.supportTextureFormat(t.TextureFormat.R16G16B16A16)) (a = new Uint16Array(o * o * 4)).set(r, 0), 
                    (h = new O(o, o, t.TextureFormat.R16G16B16A16, !1, !1)).setPixels(a, 0), h.filterMode = t.FilterMode.Point; else {
                        console.log("The platform does not support 16-bit floating-point textures"), B.supportTextureFormat(t.TextureFormat.R32G32B32A32) || console.error("The platform does not support 32-bit floating-point textures"), 
                        a = new Float32Array(o * o * 4);
                        for (var _ = 0, u = r.length; _ < u; _++) {
                            a[_] = F.convertToNumber(r[_]);
                        }
                        (h = new O(o, o, t.TextureFormat.R32G32B32A32, !1, !1)).setPixels(a, 0), h.filterMode = t.FilterMode.Point;
                    }
                    break;

                  default:
                    throw "Laya3D:unknow version.";
                }
                return h;
            }
        }, {
            key: "load",
            value: function load(t, e) {
                i.loader.create(t, e, null, i.Loader.TEXTURE2D);
            }
        } ]);
        return O;
    }(L);
    O.TEXTURE2D = "TEXTURE2D", O.grayTexture = null, O.whiteTexture = null, O.blackTexture = null, 
    O.erroTextur = null;
    var N = /* */ function(_I2) {
        (0, _inherits2.default)(N, _I2);
        var _super6 = _createSuper(N);
        function N() {
            (0, _classCallCheck2.default)(this, N);
            return _super6.call(this);
        }
        return N;
    }(I);
    var U = /* */ function() {
        function U() {
            (0, _classCallCheck2.default)(this, U);
        }
        (0, _createClass2.default)(U, null, [ {
            key: "mat2MatArray",
            value: function mat2MatArray(t, e) {
                var i = t, s = e;
                return s[0] = i.a, s[1] = i.b, s[2] = U.EMPTYMAT4_ARRAY[2], s[3] = U.EMPTYMAT4_ARRAY[3], 
                s[4] = i.c, s[5] = i.d, s[6] = U.EMPTYMAT4_ARRAY[6], s[7] = U.EMPTYMAT4_ARRAY[7], 
                s[8] = U.EMPTYMAT4_ARRAY[8], s[9] = U.EMPTYMAT4_ARRAY[9], s[10] = U.EMPTYMAT4_ARRAY[10], 
                s[11] = U.EMPTYMAT4_ARRAY[11], s[12] = i.tx, s[13] = i.ty, s[14] = U.EMPTYMAT4_ARRAY[14], 
                s[15] = U.EMPTYMAT4_ARRAY[15], e;
            }
        }, {
            key: "restoreTempArray",
            value: function restoreTempArray() {
                U.TEMPMAT4_ARRAY[0] = 1, U.TEMPMAT4_ARRAY[1] = 0, U.TEMPMAT4_ARRAY[4] = 0, U.TEMPMAT4_ARRAY[5] = 1, 
                U.TEMPMAT4_ARRAY[12] = 0, U.TEMPMAT4_ARRAY[13] = 0;
            }
        }, {
            key: "clear",
            value: function clear() {
                U.worldScissorTest = !1, U.worldAlpha = 1;
            }
        } ]);
        return U;
    }();
    U._MAXSIZE = 99999999, U.EMPTYMAT4_ARRAY = [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ], 
    U.TEMPMAT4_ARRAY = [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ], U.worldMatrix4 = U.TEMPMAT4_ARRAY, 
    U.worldMatrix = new p(), U.matWVP = null, U.worldAlpha = 1, U.worldScissorTest = !1, 
    U.width = 0, U.height = 0;
    var G = /* */ function(_L2) {
        (0, _inherits2.default)(G, _L2);
        var _super7 = _createSuper(G);
        function G(e, i) {
            var _this5;
            var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : t.RenderTextureFormat.R8G8B8;
            var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : t.RenderTextureDepthFormat.DEPTH_16;
            (0, _classCallCheck2.default)(this, G);
            _this5 = _super7.call(this, s, !1), _this5._mgrKey = 0, _this5._glTextureType = g.instance.TEXTURE_2D, 
            _this5._width = e, _this5._height = i, _this5._depthStencilFormat = r, _this5._create(e, i), 
            _this5.lock = !0;
            return _this5;
        }
        (0, _createClass2.default)(G, [ {
            key: "getIsReady",
            value: function getIsReady() {
                return !0;
            }
        }, {
            key: "_create",
            value: function _create(e, i) {
                var s = g.instance;
                this._frameBuffer = s.createFramebuffer(), R.bindTexture(s, this._glTextureType, this._glTexture);
                var r = this._getGLFormat();
                if (s.texImage2D(this._glTextureType, 0, r, e, i, 0, r, s.UNSIGNED_BYTE, null), 
                this._setGPUMemory(e * i * 4), s.bindFramebuffer(s.FRAMEBUFFER, this._frameBuffer), 
                s.framebufferTexture2D(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, this._glTexture, 0), 
                this._depthStencilFormat !== t.RenderTextureDepthFormat.DEPTHSTENCIL_NONE) switch (this._depthStencilBuffer = s.createRenderbuffer(), 
                s.bindRenderbuffer(s.RENDERBUFFER, this._depthStencilBuffer), this._depthStencilFormat) {
                  case t.RenderTextureDepthFormat.DEPTH_16:
                    s.renderbufferStorage(s.RENDERBUFFER, s.DEPTH_COMPONENT16, e, i), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.RENDERBUFFER, this._depthStencilBuffer);
                    break;

                  case t.RenderTextureDepthFormat.STENCIL_8:
                    s.renderbufferStorage(s.RENDERBUFFER, s.STENCIL_INDEX8, e, i), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.STENCIL_ATTACHMENT, s.RENDERBUFFER, this._depthStencilBuffer);
                    break;

                  case t.RenderTextureDepthFormat.DEPTHSTENCIL_24_8:
                    s.renderbufferStorage(s.RENDERBUFFER, s.DEPTH_STENCIL, e, i), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.RENDERBUFFER, this._depthStencilBuffer);
                }
                s.bindFramebuffer(s.FRAMEBUFFER, null), s.bindRenderbuffer(s.RENDERBUFFER, null), 
                this._setWarpMode(s.TEXTURE_WRAP_S, this._wrapModeU), this._setWarpMode(s.TEXTURE_WRAP_T, this._wrapModeV), 
                this._setFilterMode(this._filterMode), this._setAnisotropy(this._anisoLevel), this._readyed = !0, 
                this._activeResource();
            }
        }, {
            key: "generateMipmap",
            value: function generateMipmap() {
                this._isPot(this.width) && this._isPot(this.height) ? (this._mipmap = !0, g.instance.generateMipmap(this._glTextureType), 
                this._setFilterMode(this._filterMode), this._setGPUMemory(this.width * this.height * 4 * (1 + 1 / 3))) : (this._mipmap = !1, 
                this._setGPUMemory(this.width * this.height * 4));
            }
        }, {
            key: "start",
            value: function start() {
                var t = g.instance;
                g.instance.bindFramebuffer(t.FRAMEBUFFER, this._frameBuffer), this._lastRT = G._currentActive, 
                G._currentActive = this, this._readyed = !0, t.viewport(0, 0, this._width, this._height), 
                this._lastWidth = U.width, this._lastHeight = U.height, U.width = this._width, U.height = this._height, 
                N.activeShader = null;
            }
        }, {
            key: "end",
            value: function end() {
                var t = g.instance;
                t.bindFramebuffer(t.FRAMEBUFFER, null), G._currentActive = null, this._readyed = !0;
            }
        }, {
            key: "restore",
            value: function restore() {
                var t = g.instance;
                this._lastRT != G._currentActive && (g.instance.bindFramebuffer(t.FRAMEBUFFER, this._lastRT ? this._lastRT._frameBuffer : null), 
                G._currentActive = this._lastRT), this._readyed = !0, t.viewport(0, 0, this._lastWidth, this._lastHeight), 
                U.width = this._lastWidth, U.height = this._lastHeight, N.activeShader = null;
            }
        }, {
            key: "clear",
            value: function clear() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
                var r = g.instance;
                r.clearColor(t, e, i, s);
                var a = r.COLOR_BUFFER_BIT;
                switch (this._depthStencilFormat) {
                  case r.DEPTH_COMPONENT16:
                    a |= r.DEPTH_BUFFER_BIT;
                    break;

                  case r.STENCIL_INDEX8:
                    a |= r.STENCIL_BUFFER_BIT;
                    break;

                  case r.DEPTH_STENCIL:
                    a |= r.DEPTH_BUFFER_BIT, a |= r.STENCIL_BUFFER_BIT;
                }
                r.clear(a);
            }
        }, {
            key: "getData",
            value: function getData(t, e, s, r) {
                if (i.Render.isConchApp && 2 == window.conchConfig.threadMode) throw "native 2 thread mode use getDataAsync";
                var a = g.instance;
                if (a.bindFramebuffer(a.FRAMEBUFFER, this._frameBuffer), !(a.checkFramebufferStatus(a.FRAMEBUFFER) === a.FRAMEBUFFER_COMPLETE)) return a.bindFramebuffer(a.FRAMEBUFFER, null), 
                null;
                var n = new Uint8Array(this._width * this._height * 4), h = this._getGLFormat();
                return a.readPixels(t, e, s, r, h, a.UNSIGNED_BYTE, n), a.bindFramebuffer(a.FRAMEBUFFER, null), 
                n;
            }
        }, {
            key: "getDataAsync",
            value: function getDataAsync(t, e, i, s, r) {
                var a = g.instance;
                a.bindFramebuffer(a.FRAMEBUFFER, this._frameBuffer), a.readPixelsAsync(t, e, i, s, a.RGBA, a.UNSIGNED_BYTE, function(t) {
                    r(new Uint8Array(t));
                }), a.bindFramebuffer(a.FRAMEBUFFER, null);
            }
        }, {
            key: "recycle",
            value: function recycle() {}
        }, {
            key: "_disposeResource",
            value: function _disposeResource() {
                if (this._frameBuffer) {
                    var t = g.instance;
                    t.deleteTexture(this._glTexture), t.deleteFramebuffer(this._frameBuffer), t.deleteRenderbuffer(this._depthStencilBuffer), 
                    this._glTexture = null, this._frameBuffer = null, this._depthStencilBuffer = null, 
                    this._setGPUMemory(0);
                }
            }
        }, {
            key: "depthStencilFormat",
            get: function get() {
                return this._depthStencilFormat;
            }
        }, {
            key: "defaulteTexture",
            get: function get() {
                return O.grayTexture;
            }
        }, {
            key: "sourceWidth",
            get: function get() {
                return this._width;
            }
        }, {
            key: "sourceHeight",
            get: function get() {
                return this._height;
            }
        }, {
            key: "offsetX",
            get: function get() {
                return 0;
            }
        }, {
            key: "offsetY",
            get: function get() {
                return 0;
            }
        } ], [ {
            key: "pushRT",
            value: function pushRT() {
                G.rtStack.push({
                    rt: G._currentActive,
                    w: U.width,
                    h: U.height
                });
            }
        }, {
            key: "popRT",
            value: function popRT() {
                var t = g.instance, e = G.rtStack.pop();
                e && (G._currentActive != e.rt && (g.instance.bindFramebuffer(t.FRAMEBUFFER, e.rt ? e.rt._frameBuffer : null), 
                G._currentActive = e.rt), t.viewport(0, 0, e.w, e.h), U.width = e.w, U.height = e.h);
            }
        }, {
            key: "currentActive",
            get: function get() {
                return G._currentActive;
            }
        } ]);
        return G;
    }(L);
    G.rtStack = [], G.defuv = [ 0, 0, 1, 0, 1, 1, 0, 1 ], G.flipyuv = [ 0, 1, 1, 1, 1, 0, 0, 0 ];
    var k = /* */ function() {
        function k() {
            (0, _classCallCheck2.default)(this, k);
        }
        (0, _createClass2.default)(k, null, [ {
            key: "getRT",
            value: function getRT(e, i) {
                return i |= 0, (e |= 0) >= 1e4 && console.error("getRT error! w too big"), new G(e, i, t.RenderTextureFormat.R8G8B8A8, -1);
            }
        }, {
            key: "releaseRT",
            value: function releaseRT(t) {
                t.destroy();
            }
        } ]);
        return k;
    }();
    k.dict = {};
    var W = /* */ function() {
        function W() {
            (0, _classCallCheck2.default)(this, W);
        }
        (0, _createClass2.default)(W, null, [ {
            key: "_init_",
            value: function _init_(t) {
                W.fns = [ W.BlendNormal, W.BlendAdd, W.BlendMultiply, W.BlendScreen, W.BlendOverlay, W.BlendLight, W.BlendMask, W.BlendDestinationOut, W.BlendAddOld ], 
                W.targetFns = [ W.BlendNormalTarget, W.BlendAddTarget, W.BlendMultiplyTarget, W.BlendScreenTarget, W.BlendOverlayTarget, W.BlendLightTarget, W.BlendMask, W.BlendDestinationOut, W.BlendAddTargetOld ];
            }
        }, {
            key: "BlendNormal",
            value: function BlendNormal(t) {
                R.setBlendFunc(t, t.ONE, t.ONE_MINUS_SRC_ALPHA, !0);
            }
        }, {
            key: "BlendAddOld",
            value: function BlendAddOld(t) {
                R.setBlendFunc(t, t.ONE, t.DST_ALPHA, !0);
            }
        }, {
            key: "BlendAdd",
            value: function BlendAdd(t) {
                R.setBlendFunc(t, t.ONE, t.ONE, !0);
            }
        }, {
            key: "BlendMultiply",
            value: function BlendMultiply(t) {
                R.setBlendFunc(t, t.DST_COLOR, t.ONE_MINUS_SRC_ALPHA, !0);
            }
        }, {
            key: "BlendScreen",
            value: function BlendScreen(t) {
                R.setBlendFunc(t, t.ONE, t.ONE, !0);
            }
        }, {
            key: "BlendOverlay",
            value: function BlendOverlay(t) {
                R.setBlendFunc(t, t.ONE, t.ONE_MINUS_SRC_COLOR, !0);
            }
        }, {
            key: "BlendLight",
            value: function BlendLight(t) {
                R.setBlendFunc(t, t.ONE, t.ONE, !0);
            }
        }, {
            key: "BlendNormalTarget",
            value: function BlendNormalTarget(t) {
                R.setBlendFunc(t, t.ONE, t.ONE_MINUS_SRC_ALPHA, !0);
            }
        }, {
            key: "BlendAddTargetOld",
            value: function BlendAddTargetOld(t) {
                R.setBlendFunc(t, t.ONE, t.DST_ALPHA, !0);
            }
        }, {
            key: "BlendAddTarget",
            value: function BlendAddTarget(t) {
                R.setBlendFunc(t, t.ONE, t.ONE, !0);
            }
        }, {
            key: "BlendMultiplyTarget",
            value: function BlendMultiplyTarget(t) {
                R.setBlendFunc(t, t.DST_COLOR, t.ONE_MINUS_SRC_ALPHA, !0);
            }
        }, {
            key: "BlendScreenTarget",
            value: function BlendScreenTarget(t) {
                R.setBlendFunc(t, t.ONE, t.ONE, !0);
            }
        }, {
            key: "BlendOverlayTarget",
            value: function BlendOverlayTarget(t) {
                R.setBlendFunc(t, t.ONE, t.ONE_MINUS_SRC_COLOR, !0);
            }
        }, {
            key: "BlendLightTarget",
            value: function BlendLightTarget(t) {
                R.setBlendFunc(t, t.ONE, t.ONE, !0);
            }
        }, {
            key: "BlendMask",
            value: function BlendMask(t) {
                R.setBlendFunc(t, t.ZERO, t.SRC_ALPHA, !0);
            }
        }, {
            key: "BlendDestinationOut",
            value: function BlendDestinationOut(t) {
                R.setBlendFunc(t, t.ZERO, t.ZERO, !0);
            }
        } ]);
        return W;
    }();
    W.activeBlendFunction = null, W.NAMES = [ "normal", "add", "multiply", "screen", "overlay", "light", "mask", "destination-out", "add_old" ], 
    W.TOINT = {
        normal: 0,
        add: 1,
        multiply: 2,
        screen: 3,
        overlay: 4,
        light: 5,
        mask: 6,
        "destination-out": 7,
        lighter: 1,
        lighter_old: 8,
        add_old: 8
    }, W.NORMAL = "normal", W.MASK = "mask", W.LIGHTER = "lighter";
    var Y = /* */ function() {
        function Y(t, e, i) {
            (0, _classCallCheck2.default)(this, Y);
            this._value = 0, this._name2int = t, this._int2name = e, this._int2nameMap = i;
        }
        (0, _createClass2.default)(Y, [ {
            key: "add",
            value: function add(t) {
                return this._value |= "string" == typeof t ? this._name2int[t] : t, this._value;
            }
        }, {
            key: "addInt",
            value: function addInt(t) {
                return this._value |= t, this._value;
            }
        }, {
            key: "remove",
            value: function remove(t) {
                return this._value &= "string" == typeof t ? ~this._name2int[t] : ~t, this._value;
            }
        }, {
            key: "isDefine",
            value: function isDefine(t) {
                return (this._value & t) === t;
            }
        }, {
            key: "getValue",
            value: function getValue() {
                return this._value;
            }
        }, {
            key: "setValue",
            value: function setValue(t) {
                this._value = t;
            }
        }, {
            key: "toNameDic",
            value: function toNameDic() {
                var t = this._int2nameMap[this._value];
                return t || Y._toText(this._value, this._int2name, this._int2nameMap);
            }
        } ], [ {
            key: "_reg",
            value: function _reg(t, e, i, s) {
                i[t] = e, s[e] = t;
            }
        }, {
            key: "_toText",
            value: function _toText(t, e, i) {
                var s = i[t];
                if (s) return s;
                for (var r = {}, a = 1, n = 0; n < 32 && !((a = 1 << n) > t); n++) {
                    if (t & a) {
                        var h = e[a];
                        h && (r[h] = "");
                    }
                }
                return i[t] = r, r;
            }
        }, {
            key: "_toInt",
            value: function _toInt(t, e) {
                for (var i = t.split("."), s = 0, r = 0, a = i.length; r < a; r++) {
                    var n = e[i[r]];
                    if (!n) throw new Error("Defines to int err:" + t + "/" + i[r]);
                    s |= n;
                }
                return s;
            }
        } ]);
        return Y;
    }();
    var V = /* */ function(_Y) {
        (0, _inherits2.default)(V, _Y);
        var _super8 = _createSuper(V);
        function V() {
            (0, _classCallCheck2.default)(this, V);
            return _super8.call(this, V.__name2int, V.__int2name, V.__int2nameMap);
        }
        (0, _createClass2.default)(V, null, [ {
            key: "__init__",
            value: function __init__() {
                V.reg("TEXTURE2D", V.TEXTURE2D), V.reg("PRIMITIVE", V.PRIMITIVE), V.reg("GLOW_FILTER", V.FILTERGLOW), 
                V.reg("BLUR_FILTER", V.FILTERBLUR), V.reg("COLOR_FILTER", V.FILTERCOLOR), V.reg("COLOR_ADD", V.COLORADD), 
                V.reg("WORLDMAT", V.WORLDMAT), V.reg("FILLTEXTURE", V.FILLTEXTURE), V.reg("MVP3D", V.MVP3D);
            }
        }, {
            key: "reg",
            value: function reg(t, e) {
                this._reg(t, e, V.__name2int, V.__int2name);
            }
        }, {
            key: "toText",
            value: function toText(t, e, i) {
                return this._toText(t, e, i);
            }
        }, {
            key: "toInt",
            value: function toInt(t) {
                return this._toInt(t, V.__name2int);
            }
        } ]);
        return V;
    }(Y);
    V.TEXTURE2D = 1, V.PRIMITIVE = 4, V.FILTERGLOW = 8, V.FILTERBLUR = 16, V.FILTERCOLOR = 32, 
    V.COLORADD = 64, V.WORLDMAT = 128, V.FILLTEXTURE = 256, V.SKINMESH = 512, V.MVP3D = 2048, 
    V.NOOPTMASK = V.FILTERGLOW | V.FILTERBLUR | V.FILTERCOLOR | V.FILLTEXTURE, V.__name2int = {}, 
    V.__int2name = [], V.__int2nameMap = [];
    var X = /* */ function() {
        function X() {
            (0, _classCallCheck2.default)(this, X);
        }
        (0, _createClass2.default)(X, null, [ {
            key: "show",
            value: function show() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                X._StatRender.show(t, e);
            }
        }, {
            key: "enable",
            value: function enable() {
                X._StatRender.enable();
            }
        }, {
            key: "hide",
            value: function hide() {
                X._StatRender.hide();
            }
        }, {
            key: "clear",
            value: function clear() {
                X.trianglesFaces = X.renderBatches = X.savedRenderBatches = X.shaderCall = X.spriteRenderUseCacheCount = X.frustumCulling = X.octreeNodeCulling = X.canvasNormal = X.canvasBitmap = X.canvasReCache = 0;
            }
        }, {
            key: "onclick",
            set: function set(t) {
                X._StatRender.set_onclick(t);
            }
        } ]);
        return X;
    }();
    X.FPS = 0, X.loopCount = 0, X.shaderCall = 0, X.renderBatches = 0, X.savedRenderBatches = 0, 
    X.trianglesFaces = 0, X.spriteCount = 0, X.spriteRenderUseCacheCount = 0, X.frustumCulling = 0, 
    X.octreeNodeCulling = 0, X.canvasNormal = 0, X.canvasBitmap = 0, X.canvasReCache = 0, 
    X.renderSlow = !1, X._fpsData = [], X._timer = 0, X._count = 0, X._StatRender = null;
    var H = /* */ function() {
        function H() {
            (0, _classCallCheck2.default)(this, H);
            this._strsToID = {}, this._idToStrs = [], this._length = 0;
        }
        (0, _createClass2.default)(H, [ {
            key: "add",
            value: function add(t) {
                var e = this._strsToID[t];
                return null != e ? e : (this._idToStrs[this._length] = t, this._strsToID[t] = this._length++);
            }
        }, {
            key: "getID",
            value: function getID(t) {
                var e = this._strsToID[t];
                return null == e ? -1 : e;
            }
        }, {
            key: "getName",
            value: function getName(t) {
                var e = this._idToStrs[t];
                return null == e ? void 0 : e;
            }
        } ]);
        return H;
    }();
    var z = /* */ function(_N) {
        (0, _inherits2.default)(z, _N);
        var _super9 = _createSuper(z);
        function z(t, e) {
            var _this6;
            var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
            (0, _classCallCheck2.default)(this, z);
            if (_this6 = _super9.call(this), _this6._attribInfo = null, _this6.customCompile = !1, 
            _this6._curActTexIndex = 0, _this6.tag = {}, _this6._program = null, _this6._params = null, 
            _this6._paramsMap = {}, !t || !e) throw "Shader Error";
            _this6._attribInfo = r, _this6._id = ++z._count, _this6._vs = t, _this6._ps = e, 
            _this6._nameMap = s || {}, null != i && (z.sharders[i] = (0, _assertThisInitialized2.default)(_this6)), 
            _this6.recreateResource(), _this6.lock = !0;
            return (0, _possibleConstructorReturn2.default)(_this6);
        }
        (0, _createClass2.default)(z, [ {
            key: "recreateResource",
            value: function recreateResource() {
                this._compile(), this._setGPUMemory(0);
            }
        }, {
            key: "_disposeResource",
            value: function _disposeResource() {
                R.mainContext.deleteShader(this._vshader), R.mainContext.deleteShader(this._pshader), 
                R.mainContext.deleteProgram(this._program), this._vshader = this._pshader = this._program = null, 
                this._params = null, this._paramsMap = {}, this._setGPUMemory(0), this._curActTexIndex = 0;
            }
        }, {
            key: "_compile",
            value: function _compile() {
                if (this._vs && this._ps && !this._params) {
                    var t;
                    this._reCompile = !0, this._params = [], this.customCompile && (t = i.ShaderCompile.preGetParams(this._vs, this._ps));
                    var e, s, r, a = R.mainContext;
                    this._program = a.createProgram(), this._vshader = z._createShader(a, this._vs, a.VERTEX_SHADER), 
                    this._pshader = z._createShader(a, this._ps, a.FRAGMENT_SHADER), a.attachShader(this._program, this._vshader), 
                    a.attachShader(this._program, this._pshader);
                    var n = this._attribInfo ? this._attribInfo.length : 0;
                    for (s = 0; s < n; s += 2) {
                        a.bindAttribLocation(this._program, this._attribInfo[s + 1], this._attribInfo[s]);
                    }
                    if (a.linkProgram(this._program), !this.customCompile && !a.getProgramParameter(this._program, a.LINK_STATUS)) throw a.getProgramInfoLog(this._program);
                    var h = this.customCompile ? t.uniforms.length : a.getProgramParameter(this._program, a.ACTIVE_UNIFORMS);
                    for (s = 0; s < h; s++) {
                        var o = this.customCompile ? t.uniforms[s] : a.getActiveUniform(this._program, s);
                        (e = {
                            vartype: "uniform",
                            glfun: null,
                            ivartype: 1,
                            location: a.getUniformLocation(this._program, o.name),
                            name: o.name,
                            type: o.type,
                            isArray: !1,
                            isSame: !1,
                            preValue: null,
                            indexOfParams: 0
                        }).name.indexOf("[0]") > 0 && (e.name = e.name.substr(0, e.name.length - 3), e.isArray = !0, 
                        e.location = a.getUniformLocation(this._program, e.name)), this._params.push(e);
                    }
                    for (s = 0, r = this._params.length; s < r; s++) {
                        switch ((e = this._params[s]).indexOfParams = s, e.index = 1, e.value = [ e.location, null ], 
                        e.codename = e.name, e.name = this._nameMap[e.codename] ? this._nameMap[e.codename] : e.codename, 
                        this._paramsMap[e.name] = e, e._this = this, e.uploadedValue = [], e.type) {
                          case a.INT:
                            e.fun = e.isArray ? this._uniform1iv : this._uniform1i;
                            break;

                          case a.FLOAT:
                            e.fun = e.isArray ? this._uniform1fv : this._uniform1f;
                            break;

                          case a.FLOAT_VEC2:
                            e.fun = e.isArray ? this._uniform_vec2v : this._uniform_vec2;
                            break;

                          case a.FLOAT_VEC3:
                            e.fun = e.isArray ? this._uniform_vec3v : this._uniform_vec3;
                            break;

                          case a.FLOAT_VEC4:
                            e.fun = e.isArray ? this._uniform_vec4v : this._uniform_vec4;
                            break;

                          case a.SAMPLER_2D:
                            e.fun = this._uniform_sampler2D;
                            break;

                          case a.SAMPLER_CUBE:
                            e.fun = this._uniform_samplerCube;
                            break;

                          case a.FLOAT_MAT4:
                            e.glfun = a.uniformMatrix4fv, e.fun = this._uniformMatrix4fv;
                            break;

                          case a.BOOL:
                            e.fun = this._uniform1i;
                            break;

                          case a.FLOAT_MAT2:
                          case a.FLOAT_MAT3:
                          default:
                            throw new Error("compile shader err!");
                        }
                    }
                }
            }
        }, {
            key: "getUniform",
            value: function getUniform(t) {
                return this._paramsMap[t];
            }
        }, {
            key: "_uniform1f",
            value: function _uniform1f(t, e) {
                var i = t.uploadedValue;
                return i[0] !== e ? (R.mainContext.uniform1f(t.location, i[0] = e), 1) : 0;
            }
        }, {
            key: "_uniform1fv",
            value: function _uniform1fv(t, e) {
                if (e.length < 4) {
                    var i = t.uploadedValue;
                    return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] || i[3] !== e[3] ? (R.mainContext.uniform1fv(t.location, e), 
                    i[0] = e[0], i[1] = e[1], i[2] = e[2], i[3] = e[3], 1) : 0;
                }
                return R.mainContext.uniform1fv(t.location, e), 1;
            }
        }, {
            key: "_uniform_vec2",
            value: function _uniform_vec2(t, e) {
                var i = t.uploadedValue;
                return i[0] !== e[0] || i[1] !== e[1] ? (R.mainContext.uniform2f(t.location, i[0] = e[0], i[1] = e[1]), 
                1) : 0;
            }
        }, {
            key: "_uniform_vec2v",
            value: function _uniform_vec2v(t, e) {
                if (e.length < 2) {
                    var i = t.uploadedValue;
                    return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] || i[3] !== e[3] ? (R.mainContext.uniform2fv(t.location, e), 
                    i[0] = e[0], i[1] = e[1], i[2] = e[2], i[3] = e[3], 1) : 0;
                }
                return R.mainContext.uniform2fv(t.location, e), 1;
            }
        }, {
            key: "_uniform_vec3",
            value: function _uniform_vec3(t, e) {
                var i = t.uploadedValue;
                return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] ? (R.mainContext.uniform3f(t.location, i[0] = e[0], i[1] = e[1], i[2] = e[2]), 
                1) : 0;
            }
        }, {
            key: "_uniform_vec3v",
            value: function _uniform_vec3v(t, e) {
                return R.mainContext.uniform3fv(t.location, e), 1;
            }
        }, {
            key: "_uniform_vec4",
            value: function _uniform_vec4(t, e) {
                var i = t.uploadedValue;
                return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] || i[3] !== e[3] ? (R.mainContext.uniform4f(t.location, i[0] = e[0], i[1] = e[1], i[2] = e[2], i[3] = e[3]), 
                1) : 0;
            }
        }, {
            key: "_uniform_vec4v",
            value: function _uniform_vec4v(t, e) {
                return R.mainContext.uniform4fv(t.location, e), 1;
            }
        }, {
            key: "_uniformMatrix2fv",
            value: function _uniformMatrix2fv(t, e) {
                return R.mainContext.uniformMatrix2fv(t.location, !1, e), 1;
            }
        }, {
            key: "_uniformMatrix3fv",
            value: function _uniformMatrix3fv(t, e) {
                return R.mainContext.uniformMatrix3fv(t.location, !1, e), 1;
            }
        }, {
            key: "_uniformMatrix4fv",
            value: function _uniformMatrix4fv(t, e) {
                return R.mainContext.uniformMatrix4fv(t.location, !1, e), 1;
            }
        }, {
            key: "_uniform1i",
            value: function _uniform1i(t, e) {
                var i = t.uploadedValue;
                return i[0] !== e ? (R.mainContext.uniform1i(t.location, i[0] = e), 1) : 0;
            }
        }, {
            key: "_uniform1iv",
            value: function _uniform1iv(t, e) {
                return R.mainContext.uniform1iv(t.location, e), 1;
            }
        }, {
            key: "_uniform_ivec2",
            value: function _uniform_ivec2(t, e) {
                var i = t.uploadedValue;
                return i[0] !== e[0] || i[1] !== e[1] ? (R.mainContext.uniform2i(t.location, i[0] = e[0], i[1] = e[1]), 
                1) : 0;
            }
        }, {
            key: "_uniform_ivec2v",
            value: function _uniform_ivec2v(t, e) {
                return R.mainContext.uniform2iv(t.location, e), 1;
            }
        }, {
            key: "_uniform_vec3i",
            value: function _uniform_vec3i(t, e) {
                var i = t.uploadedValue;
                return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] ? (R.mainContext.uniform3i(t.location, i[0] = e[0], i[1] = e[1], i[2] = e[2]), 
                1) : 0;
            }
        }, {
            key: "_uniform_vec3vi",
            value: function _uniform_vec3vi(t, e) {
                return R.mainContext.uniform3iv(t.location, e), 1;
            }
        }, {
            key: "_uniform_vec4i",
            value: function _uniform_vec4i(t, e) {
                var i = t.uploadedValue;
                return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] || i[3] !== e[3] ? (R.mainContext.uniform4i(t.location, i[0] = e[0], i[1] = e[1], i[2] = e[2], i[3] = e[3]), 
                1) : 0;
            }
        }, {
            key: "_uniform_vec4vi",
            value: function _uniform_vec4vi(t, e) {
                return R.mainContext.uniform4iv(t.location, e), 1;
            }
        }, {
            key: "_uniform_sampler2D",
            value: function _uniform_sampler2D(t, e) {
                var i = R.mainContext, s = t.uploadedValue;
                return null == s[0] ? (s[0] = this._curActTexIndex, i.uniform1i(t.location, this._curActTexIndex), 
                R.activeTexture(i, i.TEXTURE0 + this._curActTexIndex), R.bindTexture(i, i.TEXTURE_2D, e), 
                this._curActTexIndex++, 1) : (R.activeTexture(i, i.TEXTURE0 + s[0]), R.bindTexture(i, i.TEXTURE_2D, e), 
                0);
            }
        }, {
            key: "_uniform_samplerCube",
            value: function _uniform_samplerCube(t, e) {
                var i = R.mainContext, s = t.uploadedValue;
                return null == s[0] ? (s[0] = this._curActTexIndex, i.uniform1i(t.location, this._curActTexIndex), 
                R.activeTexture(i, i.TEXTURE0 + this._curActTexIndex), R.bindTexture(i, i.TEXTURE_CUBE_MAP, e), 
                this._curActTexIndex++, 1) : (R.activeTexture(i, i.TEXTURE0 + s[0]), R.bindTexture(i, i.TEXTURE_CUBE_MAP, e), 
                0);
            }
        }, {
            key: "_noSetValue",
            value: function _noSetValue(t) {
                console.log("no....:" + t.name);
            }
        }, {
            key: "uploadOne",
            value: function uploadOne(t, e) {
                R.useProgram(R.mainContext, this._program);
                var i = this._paramsMap[t];
                i.fun.call(this, i, e);
            }
        }, {
            key: "uploadTexture2D",
            value: function uploadTexture2D(t) {
                var e = R;
                e._activeTextures[0] !== t && (e.bindTexture(R.mainContext, g.instance.TEXTURE_2D, t), 
                e._activeTextures[0] = t);
            }
        }, {
            key: "upload",
            value: function upload(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                N.activeShader = N.bindShader = this;
                var i = R.mainContext;
                R.useProgram(i, this._program), this._reCompile ? (e = this._params, this._reCompile = !1) : e = e || this._params;
                for (var s, r, a = e.length, n = 0, h = 0; h < a; h++) {
                    null !== (r = t[(s = e[h]).name]) && (n += s.fun.call(this, s, r));
                }
                X.shaderCall += n;
            }
        }, {
            key: "uploadArray",
            value: function uploadArray(t, e, i) {
                N.activeShader = this, N.bindShader = this, R.useProgram(R.mainContext, this._program);
                this._params;
                for (var s, r, a = 0, n = e - 2; n >= 0; n -= 2) {
                    (r = this._paramsMap[t[n]]) && null != (s = t[n + 1]) && (i && i[r.name] && i[r.name].bind(), 
                    a += r.fun.call(this, r, s));
                }
                X.shaderCall += a;
            }
        }, {
            key: "getParams",
            value: function getParams() {
                return this._params;
            }
        }, {
            key: "setAttributesLocation",
            value: function setAttributesLocation(t) {
                this._attribInfo = t;
            }
        } ], [ {
            key: "getShader",
            value: function getShader(t) {
                return z.sharders[t];
            }
        }, {
            key: "create",
            value: function create(t, e) {
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                return new z(t, e, i, s, r);
            }
        }, {
            key: "withCompile",
            value: function withCompile(t, e, i, s) {
                if (i && z.sharders[i]) return z.sharders[i];
                var r = z._preCompileShader[z.SHADERNAME2ID * t];
                if (!r) throw new Error("withCompile shader err!" + t);
                return r.createShader(e, i, s, null);
            }
        }, {
            key: "withCompile2D",
            value: function withCompile2D(t, e, i, s, r) {
                var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
                if (s && z.sharders[s]) return z.sharders[s];
                var n = z._preCompileShader[z.SHADERNAME2ID * t + e];
                if (!n) throw new Error("withCompile shader err!" + t + " " + e);
                return n.createShader(i, s, r, a);
            }
        }, {
            key: "addInclude",
            value: function addInclude(t, e) {
                i.ShaderCompile.addInclude(t, e);
            }
        }, {
            key: "preCompile",
            value: function preCompile(t, e, s, r) {
                var a = z.SHADERNAME2ID * t;
                z._preCompileShader[a] = new i.ShaderCompile(e, s, r);
            }
        }, {
            key: "preCompile2D",
            value: function preCompile2D(t, e, s, r, a) {
                var n = z.SHADERNAME2ID * t + e;
                z._preCompileShader[n] = new i.ShaderCompile(s, r, a);
            }
        }, {
            key: "_createShader",
            value: function _createShader(t, e, i) {
                var s = t.createShader(i);
                return t.shaderSource(s, e), t.compileShader(s), t.getShaderParameter(s, t.COMPILE_STATUS) ? s : (console.log(t.getShaderInfoLog(s)), 
                null);
            }
        } ]);
        return z;
    }(N);
    z._count = 0, z._preCompileShader = {}, z.SHADERNAME2ID = 2e-4, z.nameKey = new H(), 
    z.sharders = new Array(32);
    var K = /* */ function(_z) {
        (0, _inherits2.default)(K, _z);
        var _super10 = _createSuper(K);
        function K(t, e) {
            var _this7;
            var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
            (0, _classCallCheck2.default)(this, K);
            _this7 = _super10.call(this, t, e, i, s, r), _this7._params2dQuick2 = null, _this7._shaderValueWidth = 0, 
            _this7._shaderValueHeight = 0;
            return _this7;
        }
        (0, _createClass2.default)(K, [ {
            key: "_disposeResource",
            value: function _disposeResource() {
                (0, _get2.default)((0, _getPrototypeOf2.default)(K.prototype), "_disposeResource", this).call(this), 
                this._params2dQuick2 = null;
            }
        }, {
            key: "upload2dQuick2",
            value: function upload2dQuick2(t) {
                this.upload(t, this._params2dQuick2 || this._make2dQuick2());
            }
        }, {
            key: "_make2dQuick2",
            value: function _make2dQuick2() {
                if (!this._params2dQuick2) {
                    this._params2dQuick2 = [];
                    for (var t, e = this._params, i = 0, s = e.length; i < s; i++) {
                        "size" !== (t = e[i]).name && this._params2dQuick2.push(t);
                    }
                }
                return this._params2dQuick2;
            }
        } ], [ {
            key: "create",
            value: function create(t, e) {
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                return new K(t, e, i, s, r);
            }
        } ]);
        return K;
    }(z);
    var j = /* */ function() {
        function j(t, e) {
            (0, _classCallCheck2.default)(this, j);
            this.defines = new V(), this.size = [ 0, 0 ], this.alpha = 1, this.ALPHA = 1, this.subID = 0, 
            this.ref = 1, this._cacheID = 0, this.clipMatDir = [ i.Context._MAXSIZE, 0, 0, i.Context._MAXSIZE ], 
            this.clipMatPos = [ 0, 0 ], this.clipOff = [ 0, 0 ], this.mainID = t, this.subID = e, 
            this.textureHost = null, this.texture = null, this.color = null, this.colorAdd = null, 
            this.u_mmat2 = null, this._cacheID = t | e, this._inClassCache = j._cache[this._cacheID], 
            t > 0 && !this._inClassCache && (this._inClassCache = j._cache[this._cacheID] = [], 
            this._inClassCache._length = 0), this.clear();
        }
        (0, _createClass2.default)(j, [ {
            key: "setValue",
            value: function setValue(t) {}
        }, {
            key: "_ShaderWithCompile",
            value: function _ShaderWithCompile() {
                return z.withCompile2D(0, this.mainID, this.defines.toNameDic(), this.mainID | this.defines._value, K.create, this._attribLocation);
            }
        }, {
            key: "upload",
            value: function upload() {
                var t = U;
                U.worldMatrix4 === U.TEMPMAT4_ARRAY || this.defines.addInt(V.WORLDMAT), this.mmat = t.worldMatrix4, 
                U.matWVP && (this.defines.addInt(V.MVP3D), this.u_MvpMatrix = U.matWVP.elements);
                var e = z.sharders[this.mainID | this.defines._value] || this._ShaderWithCompile();
                e._shaderValueWidth !== t.width || e._shaderValueHeight !== t.height ? (this.size[0] = t.width, 
                this.size[1] = t.height, e._shaderValueWidth = t.width, e._shaderValueHeight = t.height, 
                e.upload(this, null)) : e.upload(this, e._params2dQuick2 || e._make2dQuick2());
            }
        }, {
            key: "setFilters",
            value: function setFilters(t) {
                if (this.filters = t, t) for (var e, i = t.length, s = 0; s < i; s++) {
                    (e = t[s]) && (this.defines.add(e.type), e.action.setValue(this));
                }
            }
        }, {
            key: "clear",
            value: function clear() {
                this.defines._value = this.subID, this.clipOff[0] = 0;
            }
        }, {
            key: "release",
            value: function release() {
                --this.ref < 1 && (this._inClassCache && (this._inClassCache[this._inClassCache._length++] = this), 
                this.clear(), this.filters = null, this.ref = 1, this.clipOff[0] = 0);
            }
        } ], [ {
            key: "_initone",
            value: function _initone(t, e) {
                j._typeClass[t] = e, j._cache[t] = [], j._cache[t]._length = 0;
            }
        }, {
            key: "__init__",
            value: function __init__() {}
        }, {
            key: "create",
            value: function create(t, e) {
                var i = j._cache[t | e];
                return i._length ? i[--i._length] : new j._typeClass[t | e](e);
            }
        } ]);
        return j;
    }();
    j._cache = [], j._typeClass = [], j.TEMPMAT4_ARRAY = [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ];
    var q = /* */ function() {
        function q() {
            (0, _classCallCheck2.default)(this, q);
            this.clear();
        }
        (0, _createClass2.default)(q, [ {
            key: "clear",
            value: function clear() {
                this.submitType = -1, this.blendShader = this.other = 0;
            }
        }, {
            key: "copyFrom",
            value: function copyFrom(t) {
                this.other = t.other, this.blendShader = t.blendShader, this.submitType = t.submitType;
            }
        }, {
            key: "copyFrom2",
            value: function copyFrom2(t, e, i) {
                this.other = i, this.submitType = e;
            }
        }, {
            key: "equal3_2",
            value: function equal3_2(t, e, i) {
                return this.submitType === e && this.other === i && this.blendShader === t.blendShader;
            }
        }, {
            key: "equal4_2",
            value: function equal4_2(t, e, i) {
                return this.submitType === e && this.other === i && this.blendShader === t.blendShader;
            }
        }, {
            key: "equal_3",
            value: function equal_3(t) {
                return this.submitType === t.submitType && this.blendShader === t.blendShader;
            }
        }, {
            key: "equal",
            value: function equal(t) {
                return this.other === t.other && this.submitType === t.submitType && this.blendShader === t.blendShader;
            }
        } ]);
        return q;
    }();
    var Z = /* */ function() {
        function Z() {
            (0, _classCallCheck2.default)(this, Z);
            this._ref = 1, this._key = new q();
        }
        (0, _createClass2.default)(Z, [ {
            key: "renderSubmit",
            value: function renderSubmit() {
                return this.fun.apply(this._this, this.args), 1;
            }
        }, {
            key: "getRenderType",
            value: function getRenderType() {
                return 0;
            }
        }, {
            key: "releaseRender",
            value: function releaseRender() {
                if (--this._ref < 1) {
                    var t = Z.POOL;
                    t[t._length++] = this;
                }
            }
        } ], [ {
            key: "create",
            value: function create(t, e, i) {
                var s = Z.POOL._length ? Z.POOL[--Z.POOL._length] : new Z();
                return s.fun = e, s.args = t, s._this = i, s._ref = 1, s._key.clear(), s;
            }
        } ]);
        return Z;
    }();
    Z.POOL = [], Z.POOL._length = 0;
    var Q = /* */ function() {
        function Q() {
            (0, _classCallCheck2.default)(this, Q);
        }
        (0, _createClass2.default)(Q, [ {
            key: "type",
            get: function get() {
                return -1;
            }
        } ]);
        return Q;
    }();
    Q.BLUR = 16, Q.COLOR = 32, Q.GLOW = 8, Q._filter = function(t, e, i, s) {
        var r = e, a = this._next;
        if (a) {
            var n = t.filters, h = n.length;
            if (1 == h && n[0].type == Q.COLOR) return e.save(), e.setColorFilter(n[0]), a._fun.call(a, t, e, i, s), 
            void e.restore();
            var o, l = j.create(V.TEXTURE2D, 0), _ = f.TEMP, u = r._curMat, c = p.create();
            u.copyTo(c);
            var d = 0, g = 0, T = null, v = t._cacheStyle.filterCache || null;
            if (v && 0 == t.getRepaint()) {
                if ((t._cacheStyle.hasGlowFilter || !1) && (d = 50, g = 25), (o = t.getBounds()).width <= 0 || o.height <= 0) return;
                o.width += d, o.height += d, _.x = o.x * c.a + o.y * c.c, _.y = o.y * c.d + o.x * c.b, 
                o.x = _.x, o.y = _.y, _.x = o.width * c.a + o.height * c.c, _.y = o.height * c.d + o.width * c.b, 
                o.width = _.x, o.height = _.y;
            } else {
                t._isHaveGlowFilter() && (d = 50, g = 25), (o = new m()).copyFrom(t.getSelfBounds()), 
                o.x += t.x, o.y += t.y, o.x -= t.pivotX + 4, o.y -= t.pivotY + 4;
                var x = o.x, y = o.y;
                if (o.width += d + 8, o.height += d + 8, _.x = o.x * c.a + o.y * c.c, _.y = o.y * c.d + o.x * c.b, 
                o.x = _.x, o.y = _.y, _.x = o.width * c.a + o.height * c.c, _.y = o.height * c.d + o.width * c.b, 
                o.width = _.x, o.height = _.y, o.width <= 0 || o.height <= 0) return;
                v && k.releaseRT(v), T = k.getRT(o.width, o.height);
                var E = v = k.getRT(o.width, o.height);
                t._getCacheStyle().filterCache = v, r.pushRT(), r.useRT(T);
                var A = t.x - x + g, C = t.y - y + g;
                a._fun.call(a, t, e, A, C), r.useRT(E);
                for (var R = 0; R < h; R++) {
                    0 != R && (r.useRT(T), r.drawTarget(E, 0, 0, o.width, o.height, p.TEMP.identity(), l, null, W.TOINT.overlay), 
                    r.useRT(E));
                    var b = n[R];
                    switch (b.type) {
                      case Q.BLUR:
                      case Q.GLOW:
                        b._glRender && b._glRender.render(T, e, o.width, o.height, b);
                        break;

                      case Q.COLOR:
                        r.setColorFilter(b), r.drawTarget(T, 0, 0, o.width, o.height, p.EMPTY.identity(), j.create(V.TEXTURE2D, 0)), 
                        r.setColorFilter(null);
                    }
                }
                r.popRT();
            }
            if (i = i - g - t.x, s = s - g - t.y, _.setTo(i, s), c.transformPoint(_), i = _.x + o.x, 
            s = _.y + o.y, r._drawRenderTexture(v, i, s, o.width, o.height, p.TEMP.identity(), 1, G.defuv), 
            T) {
                var S = Z.create([ T ], function(t) {
                    t.destroy();
                }, this);
                T = null, e.addRenderObject(S);
            }
            c.destroy();
        }
    };
    var $ = /* */ function() {
        function $() {
            (0, _classCallCheck2.default)(this, $);
        }
        (0, _createClass2.default)($, null, [ {
            key: "toRadian",
            value: function toRadian(t) {
                return t * $._pi2;
            }
        }, {
            key: "toAngle",
            value: function toAngle(t) {
                return t * $._pi;
            }
        }, {
            key: "toHexColor",
            value: function toHexColor(t) {
                if (t < 0 || isNaN(t)) return null;
                for (var e = t.toString(16); e.length < 6; ) {
                    e = "0" + e;
                }
                return "#" + e;
            }
        }, {
            key: "getGID",
            value: function getGID() {
                return $._gid++;
            }
        }, {
            key: "concatArray",
            value: function concatArray(t, e) {
                if (!e) return t;
                if (!t) return e;
                var i, s = e.length;
                for (i = 0; i < s; i++) {
                    t.push(e[i]);
                }
                return t;
            }
        }, {
            key: "clearArray",
            value: function clearArray(t) {
                return t ? (t.length = 0, t) : t;
            }
        }, {
            key: "copyArray",
            value: function copyArray(t, e) {
                if (t || (t = []), !e) return t;
                t.length = e.length;
                var i, s = e.length;
                for (i = 0; i < s; i++) {
                    t[i] = e[i];
                }
                return t;
            }
        }, {
            key: "getGlobalRecByPoints",
            value: function getGlobalRecByPoints(t, e, i, s, r) {
                var a, n;
                a = f.create().setTo(e, i), a = t.localToGlobal(a), n = f.create().setTo(s, r), 
                n = t.localToGlobal(n);
                var h = m._getWrapRec([ a.x, a.y, n.x, n.y ]);
                return a.recover(), n.recover(), h;
            }
        }, {
            key: "getGlobalPosAndScale",
            value: function getGlobalPosAndScale(t) {
                return $.getGlobalRecByPoints(t, 0, 0, 1, 1);
            }
        }, {
            key: "bind",
            value: function bind(t, e) {
                return t.bind(e);
            }
        }, {
            key: "updateOrder",
            value: function updateOrder(t) {
                if (!t || t.length < 2) return !1;
                for (var e, i, s, r = 1, a = t.length; r < a; ) {
                    for (s = t[e = r], i = t[e]._zOrder; --e > -1 && t[e]._zOrder > i; ) {
                        t[e + 1] = t[e];
                    }
                    t[e + 1] = s, r++;
                }
                return !0;
            }
        }, {
            key: "transPointList",
            value: function transPointList(t, e, i) {
                var s, r = t.length;
                for (s = 0; s < r; s += 2) {
                    t[s] += e, t[s + 1] += i;
                }
            }
        }, {
            key: "parseInt",
            value: function(_parseInt) {
                function parseInt(_x) {
                    return _parseInt.apply(this, arguments);
                }
                parseInt.toString = function() {
                    return _parseInt.toString();
                };
                return parseInt;
            }(function(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var i = parseInt(t, e);
                return isNaN(i) ? 0 : i;
            })
        }, {
            key: "getFileExtension",
            value: function getFileExtension(t) {
                $._extReg.lastIndex = t.lastIndexOf(".");
                var e = $._extReg.exec(t);
                return e && e.length > 1 ? e[1].toLowerCase() : null;
            }
        }, {
            key: "getFilecompatibleExtension",
            value: function getFilecompatibleExtension(t) {
                var e = t.split("."), i = e.length;
                return e.length > 2 ? e[i - 2] + "." + e[i - 1] : null;
            }
        }, {
            key: "getTransformRelativeToWindow",
            value: function getTransformRelativeToWindow(t, e, i) {
                var s = $.gStage, r = $.getGlobalPosAndScale(t), a = s._canvasTransform.clone(), n = a.tx, h = a.ty;
                a.rotate(-Math.PI / 180 * s.canvasDegree), a.scale(s.clientScaleX, s.clientScaleY);
                var o, l, _, u, c = s.canvasDegree % 180 != 0;
                return c ? (o = i + r.y, l = e + r.x, o *= a.d, l *= a.a, 90 == s.canvasDegree ? (o = n - o, 
                l += h) : (o += n, l = h - l)) : (o = e + r.x, l = i + r.y, o *= a.a, l *= a.d, 
                o += n, l += h), l += s._safariOffsetY, c ? (_ = a.d * r.height, u = a.a * r.width) : (_ = a.a * r.width, 
                u = a.d * r.height), {
                    x: o,
                    y: l,
                    scaleX: _,
                    scaleY: u
                };
            }
        }, {
            key: "fitDOMElementInArea",
            value: function fitDOMElementInArea(t, e, i, s, r, a) {
                t._fitLayaAirInitialized || (t._fitLayaAirInitialized = !0, t.style.transformOrigin = t.style.webKittransformOrigin = "left top", 
                t.style.position = "absolute");
                var n = $.getTransformRelativeToWindow(e, i, s);
                t.style.transform = t.style.webkitTransform = "scale(" + n.scaleX + "," + n.scaleY + ") rotate(" + $.gStage.canvasDegree + "deg)", 
                t.style.width = r + "px", t.style.height = a + "px", t.style.left = n.x + "px", 
                t.style.top = n.y + "px";
            }
        }, {
            key: "isOkTextureList",
            value: function isOkTextureList(t) {
                if (!t) return !1;
                var e, i, s = t.length;
                for (e = 0; e < s; e++) {
                    if (!(i = t[e]) || !i._getSource()) return !1;
                }
                return !0;
            }
        }, {
            key: "isOKCmdList",
            value: function isOKCmdList(t) {
                if (!t) return !1;
                var e, i = t.length;
                for (e = 0; e < i; e++) {
                    t[e];
                }
                return !0;
            }
        }, {
            key: "getQueryString",
            value: function getQueryString(t) {
                if (i.Browser.onMiniGame) return null;
                if (!window.location || !window.location.search) return null;
                var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)"), s = window.location.search.substr(1).match(e);
                return null != s ? unescape(s[2]) : null;
            }
        } ]);
        return $;
    }();
    $.gStage = null, $._gid = 1, $._pi = 180 / Math.PI, $._pi2 = Math.PI / 180, $._extReg = /\.(\w+)\??/g, 
    $.parseXMLFromString = function(t) {
        var e;
        if (t = t.replace(/>\s+</g, "><"), (e = new DOMParser().parseFromString(t, "text/xml")).firstChild.textContent.indexOf("This page contains the following errors") > -1) throw new Error(e.firstChild.firstChild.textContent);
        return e;
    };
    var J = /* */ function() {
        function J(t) {
            (0, _classCallCheck2.default)(this, J);
            if (this.arrColor = [], null == t || "none" == t) return this.strColor = "#00000000", 
            this.numColor = 0, void (this.arrColor = [ 0, 0, 0, 0 ]);
            var e, i, s;
            if ("string" == typeof t) {
                if (t.indexOf("rgba(") >= 0 || t.indexOf("rgb(") >= 0) {
                    var r, a, n = t;
                    for (r = n.indexOf("("), a = n.indexOf(")"), n = n.substring(r + 1, a), this.arrColor = n.split(","), 
                    i = this.arrColor.length, e = 0; e < i; e++) {
                        this.arrColor[e] = parseFloat(this.arrColor[e]), e < 3 && (this.arrColor[e] = Math.round(this.arrColor[e]));
                    }
                    s = 4 == this.arrColor.length ? 256 * (256 * (256 * this.arrColor[0] + this.arrColor[1]) + this.arrColor[2]) + Math.round(255 * this.arrColor[3]) : 256 * (256 * this.arrColor[0] + this.arrColor[1]) + this.arrColor[2], 
                    this.strColor = t;
                } else {
                    if (this.strColor = t, "#" === t.charAt(0) && (t = t.substr(1)), 3 === (i = t.length) || 4 === i) {
                        var h = "";
                        for (e = 0; e < i; e++) {
                            h += t[e] + t[e];
                        }
                        t = h;
                    }
                    s = parseInt(t, 16);
                }
            } else s = t, this.strColor = $.toHexColor(s);
            this.strColor.indexOf("rgba") >= 0 || 9 === this.strColor.length ? (this.arrColor = [ ((4278190080 & s) >>> 24) / 255, ((16711680 & s) >> 16) / 255, ((65280 & s) >> 8) / 255, (255 & s) / 255 ], 
            this.numColor = (4278190080 & s) >>> 24 | (16711680 & s) >> 8 | (65280 & s) << 8 | (255 & s) << 24) : (this.arrColor = [ ((16711680 & s) >> 16) / 255, ((65280 & s) >> 8) / 255, (255 & s) / 255, 1 ], 
            this.numColor = 4278190080 | (16711680 & s) >> 16 | 65280 & s | (255 & s) << 16), 
            this.arrColor.__id = ++J._COLODID;
        }
        (0, _createClass2.default)(J, null, [ {
            key: "_initDefault",
            value: function _initDefault() {
                for (var t in J._DEFAULT = {}, J._COLOR_MAP) {
                    J._SAVE[t] = J._DEFAULT[t] = new J(J._COLOR_MAP[t]);
                }
                return J._DEFAULT;
            }
        }, {
            key: "_initSaveMap",
            value: function _initSaveMap() {
                for (var t in J._SAVE_SIZE = 0, J._SAVE = {}, J._DEFAULT) {
                    J._SAVE[t] = J._DEFAULT[t];
                }
            }
        }, {
            key: "create",
            value: function create(t) {
                var e = t + "", i = J._SAVE[e];
                return null != i ? i : (J._SAVE_SIZE < 1e3 && J._initSaveMap(), J._SAVE[e] = new J(t));
            }
        } ]);
        return J;
    }();
    J._SAVE = {}, J._SAVE_SIZE = 0, J._COLOR_MAP = {
        purple: "#800080",
        orange: "#ffa500",
        white: "#FFFFFF",
        red: "#FF0000",
        green: "#00FF00",
        blue: "#0000FF",
        black: "#000000",
        yellow: "#FFFF00",
        gray: "#808080"
    }, J._DEFAULT = J._initDefault(), J._COLODID = 1;
    var tt = /* */ function(_Q) {
        (0, _inherits2.default)(tt, _Q);
        var _super11 = _createSuper(tt);
        function tt() {
            var _this8;
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            (0, _classCallCheck2.default)(this, tt);
            _this8 = _super11.call(this), t || (t = _this8._copyMatrix(tt.IDENTITY_MATRIX)), 
            _this8._mat = new Float32Array(16), _this8._alpha = new Float32Array(4), _this8.setByMatrix(t);
            return _this8;
        }
        (0, _createClass2.default)(tt, [ {
            key: "gray",
            value: function gray() {
                return this.setByMatrix(tt.GRAY_MATRIX);
            }
        }, {
            key: "color",
            value: function color() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
                return this.setByMatrix([ 1, 0, 0, 0, t, 0, 1, 0, 0, e, 0, 0, 1, 0, i, 0, 0, 0, 1, s ]);
            }
        }, {
            key: "setColor",
            value: function setColor(t) {
                var e = J.create(t).arrColor, i = [ 0, 0, 0, 0, 256 * e[0], 0, 0, 0, 0, 256 * e[1], 0, 0, 0, 0, 256 * e[2], 0, 0, 0, 1, 0 ];
                return this.setByMatrix(i);
            }
        }, {
            key: "setByMatrix",
            value: function setByMatrix(t) {
                this._matrix != t && this._copyMatrix(t);
                for (var e = 0, i = 0, s = 0; s < 20; s++) {
                    s % 5 != 4 ? this._mat[e++] = t[s] : this._alpha[i++] = t[s];
                }
                return this;
            }
        }, {
            key: "adjustColor",
            value: function adjustColor(t, e, i, s) {
                return this.adjustHue(s), this.adjustContrast(e), this.adjustBrightness(t), this.adjustSaturation(i), 
                this;
            }
        }, {
            key: "adjustBrightness",
            value: function adjustBrightness(t) {
                return 0 == (t = this._clampValue(t, 100)) || isNaN(t) ? this : this._multiplyMatrix([ 1, 0, 0, 0, t, 0, 1, 0, 0, t, 0, 0, 1, 0, t, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1 ]);
            }
        }, {
            key: "adjustContrast",
            value: function adjustContrast(t) {
                if (0 == (t = this._clampValue(t, 100)) || isNaN(t)) return this;
                var e, i = (e = t < 0 ? 127 + t / 100 * 127 : 127 * (e = 0 == (e = t % 1) ? tt.DELTA_INDEX[t] : tt.DELTA_INDEX[t << 0] * (1 - e) + tt.DELTA_INDEX[1 + (t << 0)] * e) + 127) / 127, s = .5 * (127 - e);
                return this._multiplyMatrix([ i, 0, 0, 0, s, 0, i, 0, 0, s, 0, 0, i, 0, s, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1 ]);
            }
        }, {
            key: "adjustSaturation",
            value: function adjustSaturation(t) {
                if (0 == (t = this._clampValue(t, 100)) || isNaN(t)) return this;
                var e = 1 + (t > 0 ? 3 * t / 100 : t / 100), i = 1 - e, s = .3086 * i, r = .6094 * i, a = .082 * i;
                return this._multiplyMatrix([ s + e, r, a, 0, 0, s, r + e, a, 0, 0, s, r, a + e, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1 ]);
            }
        }, {
            key: "adjustHue",
            value: function adjustHue(t) {
                if (0 == (t = this._clampValue(t, 180) / 180 * Math.PI) || isNaN(t)) return this;
                var e = Math.cos(t), i = Math.sin(t), s = .213, r = .715, a = .072;
                return this._multiplyMatrix([ s + e * (1 - s) + i * -s, r + e * -r + i * -r, a + e * -a + i * (1 - a), 0, 0, s + e * -s + .143 * i, r + e * (1 - r) + .14 * i, a + e * -a + -.283 * i, 0, 0, s + e * -s + -.787 * i, r + e * -r + i * r, a + e * (1 - a) + i * a, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1 ]);
            }
        }, {
            key: "reset",
            value: function reset() {
                return this.setByMatrix(this._copyMatrix(tt.IDENTITY_MATRIX));
            }
        }, {
            key: "_multiplyMatrix",
            value: function _multiplyMatrix(t) {
                var e = [];
                this._matrix = this._fixMatrix(this._matrix);
                for (var i = 0; i < 5; i++) {
                    for (var s = 0; s < 5; s++) {
                        e[s] = this._matrix[s + 5 * i];
                    }
                    for (s = 0; s < 5; s++) {
                        for (var r = 0, a = 0; a < 5; a++) {
                            r += t[s + 5 * a] * e[a];
                        }
                        this._matrix[s + 5 * i] = r;
                    }
                }
                return this.setByMatrix(this._matrix);
            }
        }, {
            key: "_clampValue",
            value: function _clampValue(t, e) {
                return Math.min(e, Math.max(-e, t));
            }
        }, {
            key: "_fixMatrix",
            value: function _fixMatrix() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                return null == t ? tt.IDENTITY_MATRIX : (t.length < tt.LENGTH ? t = t.slice(0, t.length).concat(tt.IDENTITY_MATRIX.slice(t.length, tt.LENGTH)) : t.length > tt.LENGTH && (t = t.slice(0, tt.LENGTH)), 
                t);
            }
        }, {
            key: "_copyMatrix",
            value: function _copyMatrix(t) {
                var e = tt.LENGTH;
                this._matrix || (this._matrix = []);
                for (var i = 0; i < e; i++) {
                    this._matrix[i] = t[i];
                }
                return this._matrix;
            }
        }, {
            key: "type",
            get: function get() {
                return Q.COLOR;
            }
        } ]);
        return tt;
    }(Q);
    tt.DELTA_INDEX = [ 0, .01, .02, .04, .05, .06, .07, .08, .1, .11, .12, .14, .15, .16, .17, .18, .2, .21, .22, .24, .25, .27, .28, .3, .32, .34, .36, .38, .4, .42, .44, .46, .48, .5, .53, .56, .59, .62, .65, .68, .71, .74, .77, .8, .83, .86, .89, .92, .95, .98, 1, 1.06, 1.12, 1.18, 1.24, 1.3, 1.36, 1.42, 1.48, 1.54, 1.6, 1.66, 1.72, 1.78, 1.84, 1.9, 1.96, 2, 2.12, 2.25, 2.37, 2.5, 2.62, 2.75, 2.87, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.3, 4.7, 4.9, 5, 5.5, 6, 6.5, 6.8, 7, 7.3, 7.5, 7.8, 8, 8.4, 8.7, 9, 9.4, 9.6, 9.8, 10 ], 
    tt.GRAY_MATRIX = [ .3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, 0, 0, 0, 1, 0 ], 
    tt.IDENTITY_MATRIX = [ 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1 ], 
    tt.LENGTH = 25;
    var et = /* */ function() {
        function et() {
            (0, _classCallCheck2.default)(this, et);
            this.colorFlt = null, this.uv = null;
        }
        (0, _createClass2.default)(et, [ {
            key: "recover",
            value: function recover() {
                this.texture && this.texture._removeReference(), this.texture = null, this.matrix = null, 
                s.recover("DrawTextureCmd", this);
            }
        }, {
            key: "run",
            value: function run(t, e, i) {
                this.texture && t.drawTextureWithTransform(this.texture, this.x, this.y, this.width, this.height, this.matrix, e, i, this.alpha, this.blendMode, this.colorFlt, this.uv);
            }
        }, {
            key: "cmdID",
            get: function get() {
                return et.ID;
            }
        } ], [ {
            key: "create",
            value: function create(t, e, i, r, a, n, h, o, l, _) {
                var u = s.getItemByClass("DrawTextureCmd", et);
                return u.texture = t, t._addReference(), u.x = e, u.y = i, u.width = r, u.height = a, 
                u.matrix = n, u.alpha = h, u.color = o, u.blendMode = l, u.uv = null == _ ? null : _, 
                o && (u.colorFlt = new tt(), u.colorFlt.setColor(o)), u;
            }
        } ]);
        return et;
    }();
    et.ID = "DrawTexture";
    var it = /* */ function() {
        function it() {
            (0, _classCallCheck2.default)(this, it);
        }
        (0, _createClass2.default)(it, [ {
            key: "recover",
            value: function recover() {
                this.texture = null, this.offset = null, this.other = null, s.recover("FillTextureCmd", this);
            }
        }, {
            key: "run",
            value: function run(t, e, i) {
                t.fillTexture(this.texture, this.x + e, this.y + i, this.width, this.height, this.type, this.offset, this.other);
            }
        }, {
            key: "cmdID",
            get: function get() {
                return it.ID;
            }
        } ], [ {
            key: "create",
            value: function create(t, e, i, r, a, n, h, o) {
                var l = s.getItemByClass("FillTextureCmd", it);
                return l.texture = t, l.x = e, l.y = i, l.width = r, l.height = a, l.type = n, l.offset = h, 
                l.other = o, l;
            }
        } ]);
        return it;
    }();
    it.ID = "FillTexture";
    var st = /* */ function() {
        function st() {
            (0, _classCallCheck2.default)(this, st);
        }
        (0, _createClass2.default)(st, [ {
            key: "recover",
            value: function recover() {
                s.recover("RestoreCmd", this);
            }
        }, {
            key: "run",
            value: function run(t, e, i) {
                t.restore();
            }
        }, {
            key: "cmdID",
            get: function get() {
                return st.ID;
            }
        } ], [ {
            key: "create",
            value: function create() {
                return s.getItemByClass("RestoreCmd", st);
            }
        } ]);
        return st;
    }();
    st.ID = "Restore";
    var rt = /* */ function() {
        function rt() {
            (0, _classCallCheck2.default)(this, rt);
        }
        (0, _createClass2.default)(rt, [ {
            key: "recover",
            value: function recover() {
                s.recover("RotateCmd", this);
            }
        }, {
            key: "run",
            value: function run(t, e, i) {
                t._rotate(this.angle, this.pivotX + e, this.pivotY + i);
            }
        }, {
            key: "cmdID",
            get: function get() {
                return rt.ID;
            }
        } ], [ {
            key: "create",
            value: function create(t, e, i) {
                var r = s.getItemByClass("RotateCmd", rt);
                return r.angle = t, r.pivotX = e, r.pivotY = i, r;
            }
        } ]);
        return rt;
    }();
    rt.ID = "Rotate";
    var at = /* */ function() {
        function at() {
            (0, _classCallCheck2.default)(this, at);
        }
        (0, _createClass2.default)(at, [ {
            key: "recover",
            value: function recover() {
                s.recover("ScaleCmd", this);
            }
        }, {
            key: "run",
            value: function run(t, e, i) {
                t._scale(this.scaleX, this.scaleY, this.pivotX + e, this.pivotY + i);
            }
        }, {
            key: "cmdID",
            get: function get() {
                return at.ID;
            }
        } ], [ {
            key: "create",
            value: function create(t, e, i, r) {
                var a = s.getItemByClass("ScaleCmd", at);
                return a.scaleX = t, a.scaleY = e, a.pivotX = i, a.pivotY = r, a;
            }
        } ]);
        return at;
    }();
    at.ID = "Scale";
    var nt = /* */ function() {
        function nt() {
            (0, _classCallCheck2.default)(this, nt);
        }
        (0, _createClass2.default)(nt, [ {
            key: "recover",
            value: function recover() {
                this.matrix = null, s.recover("TransformCmd", this);
            }
        }, {
            key: "run",
            value: function run(t, e, i) {
                t._transform(this.matrix, this.pivotX + e, this.pivotY + i);
            }
        }, {
            key: "cmdID",
            get: function get() {
                return nt.ID;
            }
        } ], [ {
            key: "create",
            value: function create(t, e, i) {
                var r = s.getItemByClass("TransformCmd", nt);
                return r.matrix = t, r.pivotX = e, r.pivotY = i, r;
            }
        } ]);
        return nt;
    }();
    nt.ID = "Transform";
    var ht = /* */ function() {
        function ht() {
            (0, _classCallCheck2.default)(this, ht);
        }
        (0, _createClass2.default)(ht, [ {
            key: "recover",
            value: function recover() {
                s.recover("TranslateCmd", this);
            }
        }, {
            key: "run",
            value: function run(t, e, i) {
                t.translate(this.tx, this.ty);
            }
        }, {
            key: "cmdID",
            get: function get() {
                return ht.ID;
            }
        } ], [ {
            key: "create",
            value: function create(t, e) {
                var i = s.getItemByClass("TranslateCmd", ht);
                return i.tx = t, i.ty = e, i;
            }
        } ]);
        return ht;
    }();
    ht.ID = "Translate";
    var ot = /* */ function() {
        function ot() {
            (0, _classCallCheck2.default)(this, ot);
            this._controlPoints = [ new f(), new f(), new f() ], this._calFun = this.getPoint2;
        }
        (0, _createClass2.default)(ot, [ {
            key: "_switchPoint",
            value: function _switchPoint(t, e) {
                var i = this._controlPoints.shift();
                i.setTo(t, e), this._controlPoints.push(i);
            }
        }, {
            key: "getPoint2",
            value: function getPoint2(t, e) {
                var i = this._controlPoints[0], s = this._controlPoints[1], r = this._controlPoints[2], a = Math.pow(1 - t, 2) * i.x + 2 * t * (1 - t) * s.x + Math.pow(t, 2) * r.x, n = Math.pow(1 - t, 2) * i.y + 2 * t * (1 - t) * s.y + Math.pow(t, 2) * r.y;
                e.push(a, n);
            }
        }, {
            key: "getPoint3",
            value: function getPoint3(t, e) {
                var i = this._controlPoints[0], s = this._controlPoints[1], r = this._controlPoints[2], a = this._controlPoints[3], n = Math.pow(1 - t, 3) * i.x + 3 * s.x * t * (1 - t) * (1 - t) + 3 * r.x * t * t * (1 - t) + a.x * Math.pow(t, 3), h = Math.pow(1 - t, 3) * i.y + 3 * s.y * t * (1 - t) * (1 - t) + 3 * r.y * t * t * (1 - t) + a.y * Math.pow(t, 3);
                e.push(n, h);
            }
        }, {
            key: "insertPoints",
            value: function insertPoints(t, e) {
                var i, s;
                for (s = 1 / (t = t > 0 ? t : 5), i = 0; i <= 1; i += s) {
                    this._calFun(i, e);
                }
            }
        }, {
            key: "getBezierPoints",
            value: function getBezierPoints(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
                var s, r;
                if ((r = t.length) < 2 * (i + 1)) return [];
                var a = [];
                switch (i) {
                  case 2:
                    this._calFun = this.getPoint2;
                    break;

                  case 3:
                    this._calFun = this.getPoint3;
                    break;

                  default:
                    return [];
                }
                for (;this._controlPoints.length <= i; ) {
                    this._controlPoints.push(f.create());
                }
                for (s = 0; s < 2 * i; s += 2) {
                    this._switchPoint(t[s], t[s + 1]);
                }
                for (s = 2 * i; s < r; s += 2) {
                    this._switchPoint(t[s], t[s + 1]), s / 2 % i == 0 && this.insertPoints(e, a);
                }
                return a;
            }
        } ]);
        return ot;
    }();
    ot.I = new ot();
    var lt = /* */ function() {
        function lt() {
            (0, _classCallCheck2.default)(this, lt);
        }
        (0, _createClass2.default)(lt, null, [ {
            key: "multiply",
            value: function multiply(t, e, i) {
                return (t.x - i.x) * (e.y - i.y) - (e.x - i.x) * (t.y - i.y);
            }
        }, {
            key: "dis",
            value: function dis(t, e) {
                return (t.x - e.x) * (t.x - e.x) + (t.y - e.y) * (t.y - e.y);
            }
        }, {
            key: "_getPoints",
            value: function _getPoints(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                for (lt._mPointList || (lt._mPointList = []); lt._mPointList.length < t; ) {
                    lt._mPointList.push(new f());
                }
                return i || (i = []), i.length = 0, e ? lt.getFrom(i, lt._mPointList, t) : lt.getFromR(i, lt._mPointList, t), 
                i;
            }
        }, {
            key: "getFrom",
            value: function getFrom(t, e, i) {
                var s;
                for (s = 0; s < i; s++) {
                    t.push(e[s]);
                }
                return t;
            }
        }, {
            key: "getFromR",
            value: function getFromR(t, e, i) {
                var s;
                for (s = 0; s < i; s++) {
                    t.push(e.pop());
                }
                return t;
            }
        }, {
            key: "pListToPointList",
            value: function pListToPointList(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
                var i, s = t.length / 2, r = lt._getPoints(s, e, lt._tempPointList);
                for (i = 0; i < s; i++) {
                    r[i].setTo(t[i + i], t[i + i + 1]);
                }
                return r;
            }
        }, {
            key: "pointListToPlist",
            value: function pointListToPlist(t) {
                var e, i, s = t.length, r = lt._temPList;
                for (r.length = 0, e = 0; e < s; e++) {
                    i = t[e], r.push(i.x, i.y);
                }
                return r;
            }
        }, {
            key: "scanPList",
            value: function scanPList(t) {
                return $.copyArray(t, lt.pointListToPlist(lt.scan(lt.pListToPointList(t, !0))));
            }
        }, {
            key: "scan",
            value: function scan(t) {
                var e, i, s, r, a, n = 0, h = t.length, o = {};
                for ((r = lt._temArr).length = 0, e = (h = t.length) - 1; e >= 0; e--) {
                    (a = (s = t[e]).x + "_" + s.y) in o || (o[a] = !0, r.push(s));
                }
                for (h = r.length, $.copyArray(t, r), e = 1; e < h; e++) {
                    (t[e].y < t[n].y || t[e].y == t[n].y && t[e].x < t[n].x) && (n = e);
                }
                for (s = t[0], t[0] = t[n], t[n] = s, e = 1; e < h - 1; e++) {
                    for (n = e, i = e + 1; i < h; i++) {
                        (lt.multiply(t[i], t[n], t[0]) > 0 || 0 == lt.multiply(t[i], t[n], t[0]) && lt.dis(t[0], t[i]) < lt.dis(t[0], t[n])) && (n = i);
                    }
                    s = t[e], t[e] = t[n], t[n] = s;
                }
                if ((r = lt._temArr).length = 0, t.length < 3) return $.copyArray(r, t);
                for (r.push(t[0], t[1], t[2]), e = 3; e < h; e++) {
                    for (;r.length >= 2 && lt.multiply(t[e], r[r.length - 1], r[r.length - 2]) >= 0; ) {
                        r.pop();
                    }
                    t[e] && r.push(t[e]);
                }
                return r;
            }
        } ]);
        return lt;
    }();
    lt._tempPointList = [], lt._temPList = [], lt._temArr = [];
    var _t = /* */ function() {
        function _t(t) {
            (0, _classCallCheck2.default)(this, _t);
            this.setValue(t);
        }
        (0, _createClass2.default)(_t, [ {
            key: "setValue",
            value: function setValue(t) {
                this._color = t ? t instanceof J ? t : J.create(t) : J.create("#000000");
            }
        }, {
            key: "reset",
            value: function reset() {
                this._color = J.create("#000000");
            }
        }, {
            key: "toInt",
            value: function toInt() {
                return this._color.numColor;
            }
        }, {
            key: "equal",
            value: function equal(t) {
                return "string" == typeof t ? this._color.strColor === t : t instanceof J && this._color.numColor === t.numColor;
            }
        }, {
            key: "toColorStr",
            value: function toColorStr() {
                return this._color.strColor;
            }
        } ], [ {
            key: "create",
            value: function create(t) {
                if (t) {
                    var e = t instanceof J ? t : J.create(t);
                    return e._drawStyle || (e._drawStyle = new _t(t));
                }
                return _t.DEFAULT;
            }
        } ]);
        return _t;
    }();
    _t.DEFAULT = new _t("#000000");
    var ut = /* */ function() {
        function ut() {
            (0, _classCallCheck2.default)(this, ut);
            this._lastOriX = 0, this._lastOriY = 0, this.paths = [], this._curPath = null;
        }
        (0, _createClass2.default)(ut, [ {
            key: "beginPath",
            value: function beginPath(t) {
                this.paths.length = 1, this._curPath = this.paths[0] = new ct(), this._curPath.convex = t;
            }
        }, {
            key: "closePath",
            value: function closePath() {
                this._curPath.loop = !0;
            }
        }, {
            key: "newPath",
            value: function newPath() {
                this._curPath = new ct(), this.paths.push(this._curPath);
            }
        }, {
            key: "addPoint",
            value: function addPoint(t, e) {
                this._curPath.path.push(t, e);
            }
        }, {
            key: "push",
            value: function push(t, e) {
                this._curPath ? this._curPath.path.length > 0 && (this._curPath = new ct(), this.paths.push(this._curPath)) : (this._curPath = new ct(), 
                this.paths.push(this._curPath));
                var i = this._curPath;
                i.path = t.slice(), i.convex = e;
            }
        }, {
            key: "reset",
            value: function reset() {
                this.paths.length = 0;
            }
        } ]);
        return ut;
    }();
    var ct = function ct() {
        (0, _classCallCheck2.default)(this, ct);
        this.path = [], this.loop = !1, this.convex = !1;
    };
    var dt = /* */ function() {
        function dt() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : dt.TYPE_2D;
            (0, _classCallCheck2.default)(this, dt);
            this.clipInfoID = -1, this._mesh = null, this._blendFn = null, this._id = 0, this._renderType = 0, 
            this._parent = null, this._key = new q(), this._startIdx = 0, this._numEle = 0, 
            this._ref = 1, this.shaderValue = null, this._renderType = t, this._id = ++dt.ID;
        }
        (0, _createClass2.default)(dt, [ {
            key: "getID",
            value: function getID() {
                return this._id;
            }
        }, {
            key: "getRenderType",
            value: function getRenderType() {
                return this._renderType;
            }
        }, {
            key: "toString",
            value: function toString() {
                return "ibindex:" + this._startIdx + " num:" + this._numEle + " key=" + this._key;
            }
        }, {
            key: "renderSubmit",
            value: function renderSubmit() {
                return 1;
            }
        }, {
            key: "releaseRender",
            value: function releaseRender() {}
        } ], [ {
            key: "__init__",
            value: function __init__() {
                var t = dt.RENDERBASE = new dt(-1);
                t.shaderValue = new j(0, 0), t.shaderValue.ALPHA = 1, t._ref = 4294967295;
            }
        } ]);
        return dt;
    }();
    dt.TYPE_2D = 1e4, dt.TYPE_CANVAS = 10003, dt.TYPE_CMDSETRT = 10004, dt.TYPE_CUSTOM = 10005, 
    dt.TYPE_BLURRT = 10006, dt.TYPE_CMDDESTORYPRERT = 10007, dt.TYPE_DISABLESTENCIL = 10008, 
    dt.TYPE_OTHERIBVB = 10009, dt.TYPE_PRIMITIVE = 10010, dt.TYPE_RT = 10011, dt.TYPE_BLUR_RT = 10012, 
    dt.TYPE_TARGET = 10013, dt.TYPE_CHANGE_VALUE = 10014, dt.TYPE_SHAPE = 10015, dt.TYPE_TEXTURE = 10016, 
    dt.TYPE_FILLTEXTURE = 10017, dt.KEY_ONCE = -1, dt.KEY_FILLRECT = 1, dt.KEY_DRAWTEXTURE = 2, 
    dt.KEY_VG = 3, dt.KEY_TRIANGLES = 4, dt.ID = 1, dt.preRender = null;
    var pt = /* */ function() {
        function pt() {
            (0, _classCallCheck2.default)(this, pt);
        }
        (0, _createClass2.default)(pt, [ {
            key: "isSaveMark",
            value: function isSaveMark() {
                return !1;
            }
        }, {
            key: "restore",
            value: function restore(t) {
                this._dataObj[this._valueName] = this._value, pt.POOL[pt.POOL._length++] = this, 
                this._newSubmit && (t._curSubmit = dt.RENDERBASE);
            }
        } ], [ {
            key: "_createArray",
            value: function _createArray() {
                var t = [];
                return t._length = 0, t;
            }
        }, {
            key: "_init",
            value: function _init() {
                var t = pt._namemap = {};
                return t[pt.TYPE_ALPHA] = "ALPHA", t[pt.TYPE_FILESTYLE] = "fillStyle", t[pt.TYPE_FONT] = "font", 
                t[pt.TYPE_LINEWIDTH] = "lineWidth", t[pt.TYPE_STROKESTYLE] = "strokeStyle", t[pt.TYPE_ENABLEMERGE] = "_mergeID", 
                t[pt.TYPE_MARK] = t[pt.TYPE_TRANSFORM] = t[pt.TYPE_TRANSLATE] = [], t[pt.TYPE_TEXTBASELINE] = "textBaseline", 
                t[pt.TYPE_TEXTALIGN] = "textAlign", t[pt.TYPE_GLOBALCOMPOSITEOPERATION] = "_nBlendType", 
                t[pt.TYPE_SHADER] = "shader", t[pt.TYPE_FILTERS] = "filters", t[pt.TYPE_COLORFILTER] = "_colorFiler", 
                t;
            }
        }, {
            key: "save",
            value: function save(t, e, i, s) {
                if ((t._saveMark._saveuse & e) !== e) {
                    t._saveMark._saveuse |= e;
                    var r = pt.POOL, a = r._length > 0 ? r[--r._length] : new pt();
                    a._value = i[a._valueName = pt._namemap[e]], a._dataObj = i, a._newSubmit = s;
                    var n = t._save;
                    n[n._length++] = a;
                }
            }
        } ]);
        return pt;
    }();
    pt.TYPE_ALPHA = 1, pt.TYPE_FILESTYLE = 2, pt.TYPE_FONT = 8, pt.TYPE_LINEWIDTH = 256, 
    pt.TYPE_STROKESTYLE = 512, pt.TYPE_MARK = 1024, pt.TYPE_TRANSFORM = 2048, pt.TYPE_TRANSLATE = 4096, 
    pt.TYPE_ENABLEMERGE = 8192, pt.TYPE_TEXTBASELINE = 16384, pt.TYPE_TEXTALIGN = 32768, 
    pt.TYPE_GLOBALCOMPOSITEOPERATION = 65536, pt.TYPE_CLIPRECT = 131072, pt.TYPE_CLIPRECT_STENCIL = 262144, 
    pt.TYPE_IBVB = 524288, pt.TYPE_SHADER = 1048576, pt.TYPE_FILTERS = 2097152, pt.TYPE_FILTERS_TYPE = 4194304, 
    pt.TYPE_COLORFILTER = 8388608, pt.POOL = pt._createArray(), pt._namemap = pt._init();
    var ft = /* */ function() {
        function ft() {
            (0, _classCallCheck2.default)(this, ft);
            this._globalClipMatrix = new p(), this._clipInfoID = -1, this._clipRect = new m(), 
            this.incache = !1;
        }
        (0, _createClass2.default)(ft, [ {
            key: "isSaveMark",
            value: function isSaveMark() {
                return !1;
            }
        }, {
            key: "restore",
            value: function restore(t) {
                this._globalClipMatrix.copyTo(t._globalClipMatrix), this._clipRect.clone(t._clipRect), 
                t._clipInfoID = this._clipInfoID, ft.POOL[ft.POOL._length++] = this, t._clipInCache = this.incache;
            }
        } ], [ {
            key: "save",
            value: function save(t) {
                if ((t._saveMark._saveuse & pt.TYPE_CLIPRECT) != pt.TYPE_CLIPRECT) {
                    t._saveMark._saveuse |= pt.TYPE_CLIPRECT;
                    var e = ft.POOL, i = e._length > 0 ? e[--e._length] : new ft();
                    t._globalClipMatrix.copyTo(i._globalClipMatrix), t._clipRect.clone(i._clipRect), 
                    i._clipInfoID = t._clipInfoID, i.incache = t._clipInCache;
                    var s = t._save;
                    s[s._length++] = i;
                }
            }
        } ]);
        return ft;
    }();
    ft.POOL = pt._createArray();
    var mt = /* */ function() {
        function mt() {
            (0, _classCallCheck2.default)(this, mt);
            this._saveuse = 0;
        }
        (0, _createClass2.default)(mt, [ {
            key: "isSaveMark",
            value: function isSaveMark() {
                return !0;
            }
        }, {
            key: "restore",
            value: function restore(t) {
                t._saveMark = this._preSaveMark, mt.POOL[mt.POOL._length++] = this;
            }
        } ], [ {
            key: "Create",
            value: function Create(t) {
                var e = mt.POOL, i = e._length > 0 ? e[--e._length] : new mt();
                return i._saveuse = 0, i._preSaveMark = t._saveMark, t._saveMark = i, i;
            }
        } ]);
        return mt;
    }();
    mt.POOL = pt._createArray();
    var gt = /* */ function() {
        function gt() {
            (0, _classCallCheck2.default)(this, gt);
            this._matrix = new p();
        }
        (0, _createClass2.default)(gt, [ {
            key: "isSaveMark",
            value: function isSaveMark() {
                return !1;
            }
        }, {
            key: "restore",
            value: function restore(t) {
                t._curMat = this._savematrix, gt.POOL[gt.POOL._length++] = this;
            }
        } ], [ {
            key: "save",
            value: function save(t) {
                var e = t._saveMark;
                if ((e._saveuse & pt.TYPE_TRANSFORM) !== pt.TYPE_TRANSFORM) {
                    e._saveuse |= pt.TYPE_TRANSFORM;
                    var i = gt.POOL, s = i._length > 0 ? i[--i._length] : new gt();
                    s._savematrix = t._curMat, t._curMat = t._curMat.copyTo(s._matrix);
                    var r = t._save;
                    r[r._length++] = s;
                }
            }
        } ]);
        return gt;
    }();
    gt.POOL = pt._createArray();
    var Tt = /* */ function() {
        function Tt() {
            (0, _classCallCheck2.default)(this, Tt);
            this._mat = new p();
        }
        (0, _createClass2.default)(Tt, [ {
            key: "isSaveMark",
            value: function isSaveMark() {
                return !1;
            }
        }, {
            key: "restore",
            value: function restore(t) {
                this._mat.copyTo(t._curMat), Tt.POOL[Tt.POOL._length++] = this;
            }
        } ], [ {
            key: "save",
            value: function save(t) {
                var e = Tt.POOL, i = e._length > 0 ? e[--e._length] : new Tt();
                t._curMat.copyTo(i._mat);
                var s = t._save;
                s[s._length++] = i;
            }
        } ]);
        return Tt;
    }();
    Tt.POOL = pt._createArray();
    var vt = /* */ function() {
        function vt() {
            (0, _classCallCheck2.default)(this, vt);
            this._nativeVertexArrayObject = g.layaGPUInstance.createVertexArray();
        }
        (0, _createClass2.default)(vt, [ {
            key: "bind",
            value: function bind() {
                vt._curBindedBufferState !== this && (g.layaGPUInstance.bindVertexArray(this._nativeVertexArrayObject), 
                vt._curBindedBufferState = this);
            }
        }, {
            key: "unBind",
            value: function unBind() {
                if (vt._curBindedBufferState !== this) throw "BufferState: must call bind() function first.";
                g.layaGPUInstance.bindVertexArray(null), vt._curBindedBufferState = null;
            }
        }, {
            key: "destroy",
            value: function destroy() {
                g.layaGPUInstance.deleteVertexArray(this._nativeVertexArrayObject);
            }
        }, {
            key: "bindForNative",
            value: function bindForNative() {
                g.instance.bindVertexArray(this._nativeVertexArrayObject), vt._curBindedBufferState = this;
            }
        }, {
            key: "unBindForNative",
            value: function unBindForNative() {
                g.instance.bindVertexArray(null), vt._curBindedBufferState = null;
            }
        } ]);
        return vt;
    }();
    var xt = /* */ function(_vt) {
        (0, _inherits2.default)(xt, _vt);
        var _super12 = _createSuper(xt);
        function xt() {
            (0, _classCallCheck2.default)(this, xt);
            return _super12.call(this);
        }
        return xt;
    }(vt);
    var yt = /* */ function() {
        function yt() {
            (0, _classCallCheck2.default)(this, yt);
            this._byteLength = 0, this._glBuffer = g.instance.createBuffer();
        }
        (0, _createClass2.default)(yt, [ {
            key: "_bindForVAO",
            value: function _bindForVAO() {}
        }, {
            key: "bind",
            value: function bind() {
                return !1;
            }
        }, {
            key: "destroy",
            value: function destroy() {
                this._glBuffer && (g.instance.deleteBuffer(this._glBuffer), this._glBuffer = null);
            }
        }, {
            key: "bufferUsage",
            get: function get() {
                return this._bufferUsage;
            }
        } ]);
        return yt;
    }();
    var Et = function Et() {
        (0, _classCallCheck2.default)(this, Et);
    };
    Et.loopStTm = 0, Et.loopCount = 0;
    var At = /* */ function(_yt) {
        (0, _inherits2.default)(At, _yt);
        var _super13 = _createSuper(At);
        function At() {
            var _this9;
            (0, _classCallCheck2.default)(this, At);
            _this9 = _super13.call(this), _this9._maxsize = 0, _this9._upload = !0, _this9._uploadSize = 0, 
            _this9._bufferSize = 0, _this9._u8Array = null;
            return _this9;
        }
        (0, _createClass2.default)(At, [ {
            key: "setByteLength",
            value: function setByteLength(t) {
                this._byteLength !== t && (t <= this._bufferSize || this._resizeBuffer(2 * t + 256, !0), 
                this._byteLength = t);
            }
        }, {
            key: "needSize",
            value: function needSize(t) {
                var e = this._byteLength;
                if (t) {
                    var i = this._byteLength + t;
                    i <= this._bufferSize || this._resizeBuffer(i << 1, !0), this._byteLength = i;
                }
                return e;
            }
        }, {
            key: "_bufferData",
            value: function _bufferData() {
                this._maxsize = Math.max(this._maxsize, this._byteLength), Et.loopCount % 30 == 0 && (this._buffer.byteLength > this._maxsize + 64 && (this._buffer = this._buffer.slice(0, this._maxsize + 64), 
                this._bufferSize = this._buffer.byteLength, this._checkArrayUse()), this._maxsize = this._byteLength), 
                this._uploadSize < this._buffer.byteLength && (this._uploadSize = this._buffer.byteLength, 
                g.instance.bufferData(this._bufferType, this._uploadSize, this._bufferUsage)), g.instance.bufferSubData(this._bufferType, 0, new Uint8Array(this._buffer, 0, this._byteLength));
            }
        }, {
            key: "_bufferSubData",
            value: function _bufferSubData() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                if (this._maxsize = Math.max(this._maxsize, this._byteLength), Et.loopCount % 30 == 0 && (this._buffer.byteLength > this._maxsize + 64 && (this._buffer = this._buffer.slice(0, this._maxsize + 64), 
                this._bufferSize = this._buffer.byteLength, this._checkArrayUse()), this._maxsize = this._byteLength), 
                this._uploadSize < this._buffer.byteLength && (this._uploadSize = this._buffer.byteLength, 
                g.instance.bufferData(this._bufferType, this._uploadSize, this._bufferUsage)), e || i) {
                    var s = this._buffer.slice(e, i);
                    g.instance.bufferSubData(this._bufferType, t, s);
                } else g.instance.bufferSubData(this._bufferType, t, this._buffer);
            }
        }, {
            key: "_checkArrayUse",
            value: function _checkArrayUse() {}
        }, {
            key: "_bind_uploadForVAO",
            value: function _bind_uploadForVAO() {
                return !!this._upload && (this._upload = !1, this._bindForVAO(), this._bufferData(), 
                !0);
            }
        }, {
            key: "_bind_upload",
            value: function _bind_upload() {
                return !!this._upload && (this._upload = !1, this.bind(), this._bufferData(), !0);
            }
        }, {
            key: "_bind_subUpload",
            value: function _bind_subUpload() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                return !!this._upload && (this._upload = !1, this.bind(), this._bufferSubData(t, e, i), 
                !0);
            }
        }, {
            key: "_resizeBuffer",
            value: function _resizeBuffer(t, e) {
                var i = this._buffer;
                if (t <= i.byteLength) return this;
                var s = this._u8Array;
                if (e && i && i.byteLength > 0) {
                    var r = new ArrayBuffer(t), a = s && s.buffer == i ? s : new Uint8Array(i);
                    (s = this._u8Array = new Uint8Array(r)).set(a, 0), i = this._buffer = r;
                } else i = this._buffer = new ArrayBuffer(t), this._u8Array = null;
                return this._checkArrayUse(), this._upload = !0, this._bufferSize = i.byteLength, 
                this;
            }
        }, {
            key: "append",
            value: function append(t) {
                var e, i;
                this._upload = !0, e = t.byteLength, t instanceof Uint8Array ? (this._resizeBuffer(this._byteLength + e, !0), 
                i = new Uint8Array(this._buffer, this._byteLength)) : t instanceof Uint16Array ? (this._resizeBuffer(this._byteLength + e, !0), 
                i = new Uint16Array(this._buffer, this._byteLength)) : t instanceof Float32Array && (this._resizeBuffer(this._byteLength + e, !0), 
                i = new Float32Array(this._buffer, this._byteLength)), i.set(t, 0), this._byteLength += e, 
                this._checkArrayUse();
            }
        }, {
            key: "appendU16Array",
            value: function appendU16Array(t, e) {
                this._resizeBuffer(this._byteLength + 2 * e, !0);
                var i = new Uint16Array(this._buffer, this._byteLength, e);
                if (6 == e) i[0] = t[0], i[1] = t[1], i[2] = t[2], i[3] = t[3], i[4] = t[4], i[5] = t[5]; else if (e >= 100) i.set(new Uint16Array(t.buffer, 0, e)); else for (var s = 0; s < e; s++) {
                    i[s] = t[s];
                }
                this._byteLength += 2 * e, this._checkArrayUse();
            }
        }, {
            key: "appendEx",
            value: function appendEx(t, e) {
                var i;
                this._upload = !0, i = t.byteLength, this._resizeBuffer(this._byteLength + i, !0), 
                new e(this._buffer, this._byteLength).set(t, 0), this._byteLength += i, this._checkArrayUse();
            }
        }, {
            key: "appendEx2",
            value: function appendEx2(t, e, i) {
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
                var r, a, n;
                for (this._upload = !0, r = i * s, this._resizeBuffer(this._byteLength + r, !0), 
                a = new e(this._buffer, this._byteLength), n = 0; n < i; n++) {
                    a[n] = t[n];
                }
                this._byteLength += r, this._checkArrayUse();
            }
        }, {
            key: "getBuffer",
            value: function getBuffer() {
                return this._buffer;
            }
        }, {
            key: "setNeedUpload",
            value: function setNeedUpload() {
                this._upload = !0;
            }
        }, {
            key: "getNeedUpload",
            value: function getNeedUpload() {
                return this._upload;
            }
        }, {
            key: "upload",
            value: function upload() {
                var t = g.instance, e = this._bind_upload();
                return t.bindBuffer(this._bufferType, null), this._bufferType == t.ARRAY_BUFFER && (yt._bindedVertexBuffer = null), 
                this._bufferType == t.ELEMENT_ARRAY_BUFFER && (yt._bindedIndexBuffer = null), N.activeShader = null, 
                e;
            }
        }, {
            key: "subUpload",
            value: function subUpload() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                var s = g.instance, r = this._bind_subUpload();
                return s.bindBuffer(this._bufferType, null), this._bufferType == s.ARRAY_BUFFER && (yt._bindedVertexBuffer = null), 
                this._bufferType == s.ELEMENT_ARRAY_BUFFER && (yt._bindedIndexBuffer = null), N.activeShader = null, 
                r;
            }
        }, {
            key: "_disposeResource",
            value: function _disposeResource() {
                this._upload = !0, this._uploadSize = 0;
            }
        }, {
            key: "clear",
            value: function clear() {
                this._byteLength = 0, this._upload = !0;
            }
        }, {
            key: "bufferLength",
            get: function get() {
                return this._buffer.byteLength;
            }
        }, {
            key: "byteLength",
            set: function set(t) {
                this.setByteLength(t);
            }
        } ], [ {
            key: "__int__",
            value: function __int__(t) {}
        } ]);
        return At;
    }(yt);
    At.FLOAT32 = 4, At.SHORT = 2;
    var Ct = /* */ function(_At) {
        (0, _inherits2.default)(Ct, _At);
        var _super14 = _createSuper(Ct);
        function Ct() {
            var _this10;
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 35044;
            (0, _classCallCheck2.default)(this, Ct);
            _this10 = _super14.call(this), _this10._bufferUsage = t, _this10._bufferType = g.instance.ELEMENT_ARRAY_BUFFER, 
            _this10._buffer = new ArrayBuffer(8);
            return _this10;
        }
        (0, _createClass2.default)(Ct, [ {
            key: "_checkArrayUse",
            value: function _checkArrayUse() {
                this._uint16Array && (this._uint16Array = new Uint16Array(this._buffer));
            }
        }, {
            key: "getUint16Array",
            value: function getUint16Array() {
                return this._uint16Array || (this._uint16Array = new Uint16Array(this._buffer));
            }
        }, {
            key: "_bindForVAO",
            value: function _bindForVAO() {
                var t = g.instance;
                t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this._glBuffer);
            }
        }, {
            key: "bind",
            value: function bind() {
                if (yt._bindedIndexBuffer !== this._glBuffer) {
                    var t = g.instance;
                    return t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this._glBuffer), yt._bindedIndexBuffer = this._glBuffer, 
                    !0;
                }
                return !1;
            }
        }, {
            key: "destory",
            value: function destory() {
                this._uint16Array = null, this._buffer = null;
            }
        }, {
            key: "disposeResource",
            value: function disposeResource() {
                this._disposeResource();
            }
        } ]);
        return Ct;
    }(At);
    Ct.create = function() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 35044;
        return new Ct(t);
    };
    var Rt = /* */ function(_At2) {
        (0, _inherits2.default)(Rt, _At2);
        var _super15 = _createSuper(Rt);
        function Rt(t, e) {
            var _this11;
            (0, _classCallCheck2.default)(this, Rt);
            _this11 = _super15.call(this), _this11._vertexStride = t, _this11._bufferUsage = e, 
            _this11._bufferType = g.instance.ARRAY_BUFFER, _this11._buffer = new ArrayBuffer(8), 
            _this11._floatArray32 = new Float32Array(_this11._buffer), _this11._uint32Array = new Uint32Array(_this11._buffer);
            return _this11;
        }
        (0, _createClass2.default)(Rt, [ {
            key: "getFloat32Array",
            value: function getFloat32Array() {
                return this._floatArray32;
            }
        }, {
            key: "appendArray",
            value: function appendArray(t) {
                var e = this._byteLength >> 2;
                this.setByteLength(this._byteLength + 4 * t.length), this.getFloat32Array().set(t, e), 
                this._upload = !0;
            }
        }, {
            key: "_checkArrayUse",
            value: function _checkArrayUse() {
                this._floatArray32 && (this._floatArray32 = new Float32Array(this._buffer)), this._uint32Array && (this._uint32Array = new Uint32Array(this._buffer));
            }
        }, {
            key: "deleteBuffer",
            value: function deleteBuffer() {
                (0, _get2.default)((0, _getPrototypeOf2.default)(Rt.prototype), "_disposeResource", this).call(this);
            }
        }, {
            key: "_bindForVAO",
            value: function _bindForVAO() {
                var t = g.instance;
                t.bindBuffer(t.ARRAY_BUFFER, this._glBuffer);
            }
        }, {
            key: "bind",
            value: function bind() {
                if (yt._bindedVertexBuffer !== this._glBuffer) {
                    var t = g.instance;
                    return t.bindBuffer(t.ARRAY_BUFFER, this._glBuffer), yt._bindedVertexBuffer = this._glBuffer, 
                    !0;
                }
                return !1;
            }
        }, {
            key: "destroy",
            value: function destroy() {
                (0, _get2.default)((0, _getPrototypeOf2.default)(Rt.prototype), "destroy", this).call(this), 
                this._byteLength = 0, this._upload = !0, this._buffer = null, this._floatArray32 = null;
            }
        }, {
            key: "vertexStride",
            get: function get() {
                return this._vertexStride;
            }
        } ]);
        return Rt;
    }(At);
    Rt.create = function(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 35048;
        return new Rt(t, e);
    };
    var bt = /* */ function() {
        function bt(t, i, s) {
            (0, _classCallCheck2.default)(this, bt);
            this._stride = 0, this.vertNum = 0, this.indexNum = 0, this._applied = !1, this._quadNum = 0, 
            this.canReuse = !1, this._stride = t, this._vb = new Rt(t, g.instance.DYNAMIC_DRAW), 
            i ? this._vb._resizeBuffer(i, !1) : e.webGL2D_MeshAllocMaxMem && this._vb._resizeBuffer(65536 * t, !1), 
            this._ib = new Ct(), s && this._ib._resizeBuffer(s, !1);
        }
        (0, _createClass2.default)(bt, [ {
            key: "cloneWithNewVB",
            value: function cloneWithNewVB() {
                var t = new bt(this._stride, 0, 0);
                return t._ib = this._ib, t._quadNum = this._quadNum, t._attribInfo = this._attribInfo, 
                t;
            }
        }, {
            key: "cloneWithNewVBIB",
            value: function cloneWithNewVBIB() {
                var t = new bt(this._stride, 0, 0);
                return t._attribInfo = this._attribInfo, t;
            }
        }, {
            key: "getVBW",
            value: function getVBW() {
                return this._vb.setNeedUpload(), this._vb;
            }
        }, {
            key: "getVBR",
            value: function getVBR() {
                return this._vb;
            }
        }, {
            key: "getIBR",
            value: function getIBR() {
                return this._ib;
            }
        }, {
            key: "getIBW",
            value: function getIBW() {
                return this._ib.setNeedUpload(), this._ib;
            }
        }, {
            key: "createQuadIB",
            value: function createQuadIB(t) {
                this._quadNum = t, this._ib._resizeBuffer(6 * t * 2, !1), this._ib.byteLength = this._ib.bufferLength;
                for (var e = this._ib.getUint16Array(), i = 0, s = 0, r = 0; r < t; r++) {
                    e[i++] = s, e[i++] = s + 2, e[i++] = s + 1, e[i++] = s, e[i++] = s + 3, e[i++] = s + 2, 
                    s += 4;
                }
                this._ib.setNeedUpload();
            }
        }, {
            key: "setAttributes",
            value: function setAttributes(t) {
                if (this._attribInfo = t, this._attribInfo.length % 3 != 0) throw "Mesh2D setAttributes error!";
            }
        }, {
            key: "configVAO",
            value: function configVAO(t) {
                if (!this._applied) {
                    this._applied = !0, this._vao || (this._vao = new xt()), this._vao.bind(), this._vb._bindForVAO(), 
                    this._ib.setNeedUpload(), this._ib._bind_uploadForVAO();
                    for (var e = this._attribInfo.length / 3, i = 0, s = 0; s < e; s++) {
                        var r = this._attribInfo[i + 1], a = this._attribInfo[i], n = this._attribInfo[i + 2];
                        t.enableVertexAttribArray(s), t.vertexAttribPointer(s, r, a, !1, this._stride, n), 
                        i += 3;
                    }
                    this._vao.unBind();
                }
            }
        }, {
            key: "useMesh",
            value: function useMesh(t) {
                this._applied || this.configVAO(t), this._vao.bind(), this._vb.bind(), this._ib._bind_upload() || this._ib.bind(), 
                this._vb._bind_upload() || this._vb.bind();
            }
        }, {
            key: "getEleNum",
            value: function getEleNum() {
                return this._ib.getBuffer().byteLength / 2;
            }
        }, {
            key: "releaseMesh",
            value: function releaseMesh() {}
        }, {
            key: "destroy",
            value: function destroy() {}
        }, {
            key: "clearVB",
            value: function clearVB() {
                this._vb.clear();
            }
        } ]);
        return bt;
    }();
    bt._gvaoid = 0;
    var St = /* */ function(_bt) {
        (0, _inherits2.default)(St, _bt);
        var _super16 = _createSuper(St);
        function St() {
            var _this12;
            (0, _classCallCheck2.default)(this, St);
            _this12 = _super16.call(this, St.const_stride, 4, 4), _this12.canReuse = !0, _this12.setAttributes(St._fixattriInfo), 
            St._fixib ? (_this12._ib = St._fixib, _this12._quadNum = St._maxIB) : (_this12.createQuadIB(St._maxIB), 
            St._fixib = _this12._ib);
            return _this12;
        }
        (0, _createClass2.default)(St, [ {
            key: "releaseMesh",
            value: function releaseMesh() {
                this._vb.setByteLength(0), this.vertNum = 0, this.indexNum = 0, St._POOL.push(this);
            }
        }, {
            key: "destroy",
            value: function destroy() {
                this._vb.destroy(), this._vb.deleteBuffer();
            }
        }, {
            key: "addQuad",
            value: function addQuad(t, e, i, s) {
                var r = this._vb, a = r._byteLength >> 2;
                r.setByteLength(a + St.const_stride << 2);
                var n = r._floatArray32 || r.getFloat32Array(), h = r._uint32Array, o = a, l = s ? 255 : 0;
                n[o++] = t[0], n[o++] = t[1], n[o++] = e[0], n[o++] = e[1], h[o++] = i, h[o++] = l, 
                n[o++] = t[2], n[o++] = t[3], n[o++] = e[2], n[o++] = e[3], h[o++] = i, h[o++] = l, 
                n[o++] = t[4], n[o++] = t[5], n[o++] = e[4], n[o++] = e[5], h[o++] = i, h[o++] = l, 
                n[o++] = t[6], n[o++] = t[7], n[o++] = e[6], n[o++] = e[7], h[o++] = i, h[o++] = l, 
                r._upload = !0;
            }
        } ], [ {
            key: "__int__",
            value: function __int__() {
                St._fixattriInfo = [ 5126, 4, 0, 5121, 4, 16, 5121, 4, 20 ];
            }
        }, {
            key: "getAMesh",
            value: function getAMesh(t) {
                var e = null;
                return e = St._POOL.length ? St._POOL.pop() : new St(), t && e._vb._resizeBuffer(65536 * St.const_stride, !1), 
                e;
            }
        } ]);
        return St;
    }(bt);
    St.const_stride = 24, St._maxIB = 16384, St._POOL = [];
    var wt = /* */ function(_bt2) {
        (0, _inherits2.default)(wt, _bt2);
        var _super17 = _createSuper(wt);
        function wt() {
            var _this13;
            (0, _classCallCheck2.default)(this, wt);
            _this13 = _super17.call(this, wt.const_stride, 4, 4), _this13.canReuse = !0, _this13.setAttributes(wt._fixattriInfo);
            return _this13;
        }
        (0, _createClass2.default)(wt, [ {
            key: "addData",
            value: function addData(t, e, i, s, r) {
                var a = this._vb, n = this._ib, h = t.length >> 1, o = a.needSize(h * wt.const_stride) >> 2, l = a._floatArray32 || a.getFloat32Array(), _ = a._uint32Array, u = 0, c = s.a, d = s.b, p = s.c, f = s.d, m = s.tx, g = s.ty, T = 0;
                for (T = 0; T < h; T++) {
                    var v = t[u], x = t[u + 1];
                    l[o] = v * c + x * p + m, l[o + 1] = v * d + x * f + g, l[o + 2] = e[u], l[o + 3] = e[u + 1], 
                    _[o + 4] = r, _[o + 5] = 255, o += 6, u += 2;
                }
                a.setNeedUpload();
                var y = this.vertNum, E = i.length, A = n.needSize(i.byteLength), C = n.getUint16Array(), R = A >> 1;
                if (y > 0) {
                    var b = R + E, S = 0;
                    for (T = R; T < b; T++, S++) {
                        C[T] = i[S] + y;
                    }
                } else C.set(i, R);
                n.setNeedUpload(), this.vertNum += h, this.indexNum += i.length;
            }
        }, {
            key: "releaseMesh",
            value: function releaseMesh() {
                this._vb.setByteLength(0), this._ib.setByteLength(0), this.vertNum = 0, this.indexNum = 0, 
                wt._POOL.push(this);
            }
        }, {
            key: "destroy",
            value: function destroy() {
                this._ib.destroy(), this._vb.destroy(), this._ib.disposeResource(), this._vb.deleteBuffer();
            }
        } ], [ {
            key: "__init__",
            value: function __init__() {
                wt._fixattriInfo = [ 5126, 4, 0, 5121, 4, 16, 5121, 4, 20 ];
            }
        }, {
            key: "getAMesh",
            value: function getAMesh(t) {
                var e;
                return e = wt._POOL.length ? wt._POOL.pop() : new wt(), t && e._vb._resizeBuffer(65536 * wt.const_stride, !1), 
                e;
            }
        } ]);
        return wt;
    }(bt);
    wt.const_stride = 24, wt._POOL = [];
    var Mt = /* */ function(_bt3) {
        (0, _inherits2.default)(Mt, _bt3);
        var _super18 = _createSuper(Mt);
        function Mt() {
            var _this14;
            (0, _classCallCheck2.default)(this, Mt);
            _this14 = _super18.call(this, Mt.const_stride, 4, 4), _this14.canReuse = !0, _this14.setAttributes(Mt._fixattriInfo);
            return _this14;
        }
        (0, _createClass2.default)(Mt, [ {
            key: "addVertAndIBToMesh",
            value: function addVertAndIBToMesh(t, e, i, s) {
                for (var r = this._vb.needSize(e.length / 2 * Mt.const_stride) >> 2, a = this._vb._floatArray32 || this._vb.getFloat32Array(), n = this._vb._uint32Array, h = 0, o = e.length / 2, l = 0; l < o; l++) {
                    a[r++] = e[h], a[r++] = e[h + 1], h += 2, n[r++] = i;
                }
                this._vb.setNeedUpload(), this._ib.append(new Uint16Array(s)), this._ib.setNeedUpload(), 
                this.vertNum += o, this.indexNum += s.length;
            }
        }, {
            key: "releaseMesh",
            value: function releaseMesh() {
                this._vb.setByteLength(0), this._ib.setByteLength(0), this.vertNum = 0, this.indexNum = 0, 
                Mt._POOL.push(this);
            }
        }, {
            key: "destroy",
            value: function destroy() {
                this._ib.destroy(), this._vb.destroy(), this._ib.disposeResource(), this._vb.deleteBuffer();
            }
        } ], [ {
            key: "__init__",
            value: function __init__() {
                Mt._fixattriInfo = [ 5126, 2, 0, 5121, 4, 8 ];
            }
        }, {
            key: "getAMesh",
            value: function getAMesh(t) {
                var e;
                return e = Mt._POOL.length ? Mt._POOL.pop() : new Mt(), t && e._vb._resizeBuffer(65536 * Mt.const_stride, !1), 
                e;
            }
        } ]);
        return Mt;
    }(bt);
    Mt.const_stride = 12, Mt._POOL = [];
    var It = /* */ function() {
        function It(t, e) {
            (0, _classCallCheck2.default)(this, It);
            this.submitStartPos = 0, this.submitEndPos = 0, this.touches = [], this.submits = [], 
            this.sprite = null, this.meshlist = [], this.cachedClipInfo = new p(), this.oldTx = 0, 
            this.oldTy = 0, this.invMat = new p(), this.context = t, this.sprite = e, t._globalClipMatrix.copyTo(this.cachedClipInfo);
        }
        (0, _createClass2.default)(It, [ {
            key: "startRec",
            value: function startRec() {
                var t = this.context;
                t._charSubmitCache && t._charSubmitCache._enable && (t._charSubmitCache.enable(!1, t), 
                t._charSubmitCache.enable(!0, t)), t._incache = !0, this.touches.length = 0, t.touches = this.touches, 
                t._globalClipMatrix.copyTo(this.cachedClipInfo), this.submits.length = 0, this.submitStartPos = t._submits._length;
                for (var e = 0, i = this.meshlist.length; e < i; e++) {
                    var s = this.meshlist[e];
                    s.canReuse ? s.releaseMesh() : s.destroy();
                }
                this.meshlist.length = 0, this._mesh = St.getAMesh(!1), this._pathMesh = Mt.getAMesh(!1), 
                this._triangleMesh = wt.getAMesh(!1), this.meshlist.push(this._mesh), this.meshlist.push(this._pathMesh), 
                this.meshlist.push(this._triangleMesh), t._curSubmit = dt.RENDERBASE, this._oldMesh = t._mesh, 
                this._oldPathMesh = t._pathMesh, this._oldTriMesh = t._triangleMesh, this._oldMeshList = t.meshlist, 
                t._mesh = this._mesh, t._pathMesh = this._pathMesh, t._triangleMesh = this._triangleMesh, 
                t.meshlist = this.meshlist, this.oldTx = t._curMat.tx, this.oldTy = t._curMat.ty, 
                t._curMat.tx = 0, t._curMat.ty = 0, t._curMat.copyTo(this.invMat), this.invMat.invert();
            }
        }, {
            key: "endRec",
            value: function endRec() {
                var t = this.context;
                t._charSubmitCache && t._charSubmitCache._enable && (t._charSubmitCache.enable(!1, t), 
                t._charSubmitCache.enable(!0, t));
                var e = t._submits;
                this.submitEndPos = e._length;
                for (var i = this.submitEndPos - this.submitStartPos, s = 0; s < i; s++) {
                    this.submits.push(e[this.submitStartPos + s]);
                }
                e._length -= i, t._mesh = this._oldMesh, t._pathMesh = this._oldPathMesh, t._triangleMesh = this._oldTriMesh, 
                t.meshlist = this._oldMeshList, t._curSubmit = dt.RENDERBASE, t._curMat.tx = this.oldTx, 
                t._curMat.ty = this.oldTy, t.touches = null, t._incache = !1;
            }
        }, {
            key: "isCacheValid",
            value: function isCacheValid() {
                var t = this.context._globalClipMatrix;
                return t.a == this.cachedClipInfo.a && t.b == this.cachedClipInfo.b && t.c == this.cachedClipInfo.c && t.d == this.cachedClipInfo.d && t.tx == this.cachedClipInfo.tx && t.ty == this.cachedClipInfo.ty;
            }
        }, {
            key: "flushsubmit",
            value: function flushsubmit() {
                var t = dt.RENDERBASE;
                this.submits.forEach(function(e) {
                    e != dt.RENDERBASE && (dt.preRender = t, t = e, e.renderSubmit());
                });
            }
        }, {
            key: "releaseMem",
            value: function releaseMem() {}
        } ]);
        return It;
    }();
    It.matI = new p();
    var Pt = "/*\n\ttexture和fillrect使用的。\n*/\nattribute vec4 posuv;\nattribute vec4 attribColor;\nattribute vec4 attribFlags;\n//attribute vec4 clipDir;\n//attribute vec2 clipRect;\nuniform vec4 clipMatDir;\nuniform vec2 clipMatPos;\t\t// 这个是全局的，不用再应用矩阵了。\nvarying vec2 cliped;\nuniform vec2 size;\nuniform vec2 clipOff;\t\t\t// 使用要把clip偏移。cacheas normal用. 只用了[0]\n#ifdef WORLDMAT\n\tuniform mat4 mmat;\n#endif\n#ifdef MVP3D\n\tuniform mat4 u_MvpMatrix;\n#endif\nvarying vec4 v_texcoordAlpha;\nvarying vec4 v_color;\nvarying float v_useTex;\n\nvoid main() {\n\n\tvec4 pos = vec4(posuv.xy,0.,1.);\n#ifdef WORLDMAT\n\tpos=mmat*pos;\n#endif\n\tvec4 pos1  =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,0.,1.0);\n#ifdef MVP3D\n\tgl_Position=u_MvpMatrix*pos1;\n#else\n\tgl_Position=pos1;\n#endif\n\tv_texcoordAlpha.xy = posuv.zw;\n\t//v_texcoordAlpha.z = attribColor.a/255.0;\n\tv_color = attribColor/255.0;\n\tv_color.xyz*=v_color.w;//反正后面也要预乘\n\t\n\tv_useTex = attribFlags.r/255.0;\n\tfloat clipw = length(clipMatDir.xy);\n\tfloat cliph = length(clipMatDir.zw);\n\t\n\tvec2 clpos = clipMatPos.xy;\n\t#ifdef WORLDMAT\n\t\t// 如果有mmat，需要修改clipMatPos,因为 这是cacheas normal （如果不是就错了）， clipMatPos被去掉了偏移\n\t\tif(clipOff[0]>0.0){\n\t\t\tclpos.x+=mmat[3].x;\t//tx\t最简单处理\n\t\t\tclpos.y+=mmat[3].y;\t//ty\n\t\t}\n\t#endif\n\tvec2 clippos = pos.xy - clpos;\t//pos已经应用矩阵了，为了减的有意义，clip的位置也要缩放\n\tif(clipw>20000. && cliph>20000.)\n\t\tcliped = vec2(0.5,0.5);\n\telse {\n\t\t//转成0到1之间。/clipw/clipw 表示clippos与normalize之后的clip朝向点积之后，再除以clipw\n\t\tcliped=vec2( dot(clippos,clipMatDir.xy)/clipw/clipw, dot(clippos,clipMatDir.zw)/cliph/cliph);\n\t}\n\n}", Lt = "/*\r\n\ttexture和fillrect使用的。\r\n*/\r\n#if defined(GL_FRAGMENT_PRECISION_HIGH)// 原来的写法会被我们自己的解析流程处理，而我们的解析是不认内置宏的，导致被删掉，所以改成 if defined 了\r\nprecision highp float;\r\n#else\r\nprecision mediump float;\r\n#endif\r\n\r\nvarying vec4 v_texcoordAlpha;\r\nvarying vec4 v_color;\r\nvarying float v_useTex;\r\nuniform sampler2D texture;\r\nvarying vec2 cliped;\r\n\r\n#ifdef BLUR_FILTER\r\nuniform vec4 strength_sig2_2sig2_gauss1;\r\nuniform vec2 blurInfo;\r\n\r\n#define PI 3.141593\r\n\r\nfloat getGaussian(float x, float y){\r\n    return strength_sig2_2sig2_gauss1.w*exp(-(x*x+y*y)/strength_sig2_2sig2_gauss1.z);\r\n}\r\n\r\nvec4 blur(){\r\n    const float blurw = 9.0;\r\n    vec4 vec4Color = vec4(0.0,0.0,0.0,0.0);\r\n    vec2 halfsz=vec2(blurw,blurw)/2.0/blurInfo;    \r\n    vec2 startpos=v_texcoordAlpha.xy-halfsz;\r\n    vec2 ctexcoord = startpos;\r\n    vec2 step = 1.0/blurInfo;  //每个像素      \r\n    \r\n    for(float y = 0.0;y<=blurw; ++y){\r\n        ctexcoord.x=startpos.x;\r\n        for(float x = 0.0;x<=blurw; ++x){\r\n            //TODO 纹理坐标的固定偏移应该在vs中处理\r\n            vec4Color += texture2D(texture, ctexcoord)*getGaussian(x-blurw/2.0,y-blurw/2.0);\r\n            ctexcoord.x+=step.x;\r\n        }\r\n        ctexcoord.y+=step.y;\r\n    }\r\n    return vec4Color;\r\n}\r\n#endif\r\n\r\n#ifdef COLOR_FILTER\r\nuniform vec4 colorAlpha;\r\nuniform mat4 colorMat;\r\n#endif\r\n\r\n#ifdef GLOW_FILTER\r\nuniform vec4 u_color;\r\nuniform vec4 u_blurInfo1;\r\nuniform vec4 u_blurInfo2;\r\n#endif\r\n\r\n#ifdef COLOR_ADD\r\nuniform vec4 colorAdd;\r\n#endif\r\n\r\n#ifdef FILLTEXTURE\t\r\nuniform vec4 u_TexRange;//startu,startv,urange, vrange\r\n#endif\r\nvoid main() {\r\n\tif(cliped.x<0.) discard;\r\n\tif(cliped.x>1.) discard;\r\n\tif(cliped.y<0.) discard;\r\n\tif(cliped.y>1.) discard;\r\n\t\r\n#ifdef FILLTEXTURE\t\r\n   vec4 color= texture2D(texture, fract(v_texcoordAlpha.xy)*u_TexRange.zw + u_TexRange.xy);\r\n#else\r\n   vec4 color= texture2D(texture, v_texcoordAlpha.xy);\r\n#endif\r\n\r\n   if(v_useTex<=0.)color = vec4(1.,1.,1.,1.);\r\n   color.a*=v_color.w;\r\n   //color.rgb*=v_color.w;\r\n   color.rgb*=v_color.rgb;\r\n   gl_FragColor=color;\r\n   \r\n   #ifdef COLOR_ADD\r\n\tgl_FragColor = vec4(colorAdd.rgb,colorAdd.a*gl_FragColor.a);\r\n\tgl_FragColor.xyz *= colorAdd.a;\r\n   #endif\r\n   \r\n   #ifdef BLUR_FILTER\r\n\tgl_FragColor =   blur();\r\n\tgl_FragColor.w*=v_color.w;   \r\n   #endif\r\n   \r\n   #ifdef COLOR_FILTER\r\n\tmat4 alphaMat =colorMat;\r\n\r\n\talphaMat[0][3] *= gl_FragColor.a;\r\n\talphaMat[1][3] *= gl_FragColor.a;\r\n\talphaMat[2][3] *= gl_FragColor.a;\r\n\r\n\tgl_FragColor = gl_FragColor * alphaMat;\r\n\tgl_FragColor += colorAlpha/255.0*gl_FragColor.a;\r\n   #endif\r\n   \r\n   #ifdef GLOW_FILTER\r\n\tconst float c_IterationTime = 10.0;\r\n\tfloat floatIterationTotalTime = c_IterationTime * c_IterationTime;\r\n\tvec4 vec4Color = vec4(0.0,0.0,0.0,0.0);\r\n\tvec2 vec2FilterDir = vec2(-(u_blurInfo1.z)/u_blurInfo2.x,-(u_blurInfo1.w)/u_blurInfo2.y);\r\n\tvec2 vec2FilterOff = vec2(u_blurInfo1.x/u_blurInfo2.x/c_IterationTime * 2.0,u_blurInfo1.y/u_blurInfo2.y/c_IterationTime * 2.0);\r\n\tfloat maxNum = u_blurInfo1.x * u_blurInfo1.y;\r\n\tvec2 vec2Off = vec2(0.0,0.0);\r\n\tfloat floatOff = c_IterationTime/2.0;\r\n\tfor(float i = 0.0;i<=c_IterationTime; ++i){\r\n\t\tfor(float j = 0.0;j<=c_IterationTime; ++j){\r\n\t\t\tvec2Off = vec2(vec2FilterOff.x * (i - floatOff),vec2FilterOff.y * (j - floatOff));\r\n\t\t\tvec4Color += texture2D(texture, v_texcoordAlpha.xy + vec2FilterDir + vec2Off)/floatIterationTotalTime;\r\n\t\t}\r\n\t}\r\n\tgl_FragColor = vec4(u_color.rgb,vec4Color.a * u_blurInfo2.z);\r\n\tgl_FragColor.rgb *= gl_FragColor.a;   \r\n   #endif\r\n   \r\n}", Dt = "attribute vec4 position;\nattribute vec4 attribColor;\n//attribute vec4 clipDir;\n//attribute vec2 clipRect;\nuniform vec4 clipMatDir;\nuniform vec2 clipMatPos;\n#ifdef WORLDMAT\n\tuniform mat4 mmat;\n#endif\nuniform mat4 u_mmat2;\n//uniform vec2 u_pos;\nuniform vec2 size;\nvarying vec4 color;\n//vec4 dirxy=vec4(0.9,0.1, -0.1,0.9);\n//vec4 clip=vec4(100.,30.,300.,600.);\nvarying vec2 cliped;\nvoid main(){\n\t\n#ifdef WORLDMAT\n\tvec4 pos=mmat*vec4(position.xy,0.,1.);\n\tgl_Position =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\n#else\n\tgl_Position =vec4((position.x/size.x-0.5)*2.0,(0.5-position.y/size.y)*2.0,position.z,1.0);\n#endif\t\n\tfloat clipw = length(clipMatDir.xy);\n\tfloat cliph = length(clipMatDir.zw);\n\tvec2 clippos = position.xy - clipMatPos.xy;\t//pos已经应用矩阵了，为了减的有意义，clip的位置也要缩放\n\tif(clipw>20000. && cliph>20000.)\n\t\tcliped = vec2(0.5,0.5);\n\telse {\n\t\t//clipdir是带缩放的方向，由于上面clippos是在缩放后的空间计算的，所以需要把方向先normalize一下\n\t\tcliped=vec2( dot(clippos,clipMatDir.xy)/clipw/clipw, dot(clippos,clipMatDir.zw)/cliph/cliph);\n\t}\n  //pos2d.x = dot(clippos,dirx);\n  color=attribColor/255.;\n}", Bt = "precision mediump float;\n//precision mediump float;\nvarying vec4 color;\n//uniform float alpha;\nvarying vec2 cliped;\nvoid main(){\n\t//vec4 a=vec4(color.r, color.g, color.b, 1);\n\t//a.a*=alpha;\n    gl_FragColor= color;// vec4(color.r, color.g, color.b, alpha);\n\tgl_FragColor.rgb*=color.a;\n\tif(cliped.x<0.) discard;\n\tif(cliped.x>1.) discard;\n\tif(cliped.y<0.) discard;\n\tif(cliped.y>1.) discard;\n}", Ft = "attribute vec2 position;\nattribute vec2 texcoord;\nattribute vec4 color;\nuniform vec2 size;\nuniform float offsetX;\nuniform float offsetY;\nuniform mat4 mmat;\nuniform mat4 u_mmat2;\nvarying vec2 v_texcoord;\nvarying vec4 v_color;\nvoid main() {\n  vec4 pos=mmat*u_mmat2*vec4(offsetX+position.x,offsetY+position.y,0,1 );\n  gl_Position = vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\n  v_color = color;\n  v_color.rgb *= v_color.a;\n  v_texcoord = texcoord;  \n}", Ot = "precision mediump float;\nvarying vec2 v_texcoord;\nvarying vec4 v_color;\nuniform sampler2D texture;\nuniform float alpha;\nvoid main() {\n\tvec4 t_color = texture2D(texture, v_texcoord);\n\tgl_FragColor = t_color.rgba * v_color;\n\tgl_FragColor *= alpha;\n}";
    var Nt = /* */ function() {
        function Nt() {
            (0, _classCallCheck2.default)(this, Nt);
            this.ALPHA = 1, this.defines = new V(), this.shaderType = 0, this.fillStyle = _t.DEFAULT, 
            this.strokeStyle = _t.DEFAULT;
        }
        (0, _createClass2.default)(Nt, [ {
            key: "destroy",
            value: function destroy() {
                this.defines = null, this.filters = null;
            }
        } ], [ {
            key: "__init__",
            value: function __init__() {
                z.preCompile2D(0, V.TEXTURE2D, Pt, Lt, null), z.preCompile2D(0, V.PRIMITIVE, Dt, Bt, null), 
                z.preCompile2D(0, V.SKINMESH, Ft, Ot, null);
            }
        } ]);
        return Nt;
    }();
    var Ut = /* */ function() {
        function Ut() {
            (0, _classCallCheck2.default)(this, Ut);
            var t = g.instance;
            this.ib = Ct.create(t.DYNAMIC_DRAW), this.vb = Rt.create(8);
        }
        (0, _createClass2.default)(Ut, [ {
            key: "addSkinMesh",
            value: function addSkinMesh(t) {
                t.getData2(this.vb, this.ib, this.vb._byteLength / 32);
            }
        }, {
            key: "reset",
            value: function reset() {
                this.vb.clear(), this.ib.clear();
            }
        } ], [ {
            key: "getInstance",
            value: function getInstance() {
                return Ut.instance = Ut.instance || new Ut();
            }
        } ]);
        return Ut;
    }();
    var Gt = /* */ function() {
        function Gt() {
            (0, _classCallCheck2.default)(this, Gt);
        }
        (0, _createClass2.default)(Gt, null, [ {
            key: "createLine2",
            value: function createLine2(t, e, i, s, r, a) {
                if (t.length < 4) return null;
                var n = Gt.tempData.length > t.length + 2 ? Gt.tempData : new Array(t.length + 2);
                n[0] = t[0], n[1] = t[1];
                var h = 2, o = 0, l = t.length;
                for (o = 2; o < l; o += 2) {
                    Math.abs(t[o] - t[o - 2]) + Math.abs(t[o + 1] - t[o - 1]) > .01 && (n[h++] = t[o], 
                    n[h++] = t[o + 1]);
                }
                a && Math.abs(t[0] - n[h - 2]) + Math.abs(t[1] - n[h - 1]) > .01 && (n[h++] = t[0], 
                n[h++] = t[1]);
                var _ = r;
                l = h / 2;
                var u, c, d, p, f, m, g, T, v, x, y, E, A, C, R, b, S, w, M, I, P = i / 2;
                for (d = n[0], p = n[1], x = d - (f = n[2]), v = (v = -(p - (m = n[3]))) / (I = Math.sqrt(v * v + x * x)) * P, 
                x = x / I * P, _.push(d - v, p - x, d + v, p + x), o = 1; o < l - 1; o++) {
                    d = n[2 * (o - 1)], p = n[2 * (o - 1) + 1], f = n[2 * o], m = n[2 * o + 1], g = n[2 * (o + 1)], 
                    T = n[2 * (o + 1) + 1], x = d - f, E = f - g, R = (-(v = (v = -(p - m)) / (I = Math.sqrt(v * v + x * x)) * P) + d) * (-(x = x / I * P) + m) - (-v + f) * (-x + p), 
                    w = (-(y = (y = -(m - T)) / (I = Math.sqrt(y * y + E * E)) * P) + g) * (-(E = E / I * P) + m) - (-y + f) * (-E + T), 
                    M = (A = -x + p - (-x + m)) * (S = -y + f - (-y + g)) - (b = -E + T - (-E + m)) * (C = -v + f - (-v + d)), 
                    Math.abs(M) < .1 ? (M += 10.1, _.push(f - v, m - x, f + v, m + x)) : (u = (C * w - S * R) / M, 
                    c = (b * R - A * w) / M, _.push(u, c, f - (u - f), m - (c - m)));
                }
                for (d = n[h - 4], p = n[h - 3], x = d - (f = n[h - 2]), v = (v = -(p - (m = n[h - 1]))) / (I = Math.sqrt(v * v + x * x)) * P, 
                x = x / I * P, _.push(f - v, m - x, f + v, m + x), o = 1; o < l; o++) {
                    e.push(s + 2 * (o - 1), s + 2 * (o - 1) + 1, s + 2 * o + 1, s + 2 * o + 1, s + 2 * o, s + 2 * (o - 1));
                }
                return _;
            }
        }, {
            key: "createLineTriangle",
            value: function createLineTriangle(t, e, i, s, r, a, n) {
                var h = t.slice(), o = h.length, l = h[0], _ = h[1], u = h[2], c = (h[2], 0), d = 0, p = 0, f = 0, m = o / 2;
                if (!(m <= 1) && 2 != m) {
                    for (var g = new Array(4 * m), T = 0, v = 0, x = 0; x < m - 1; x++) {
                        l = h[v++], _ = h[v++], u = h[v++], f = h[v++] - _, 0 != (p = u - l) && 0 != f && (c = Math.sqrt(p * p + f * f)) > .001 && (g[d = 4 * T] = l, 
                        g[d + 1] = _, g[d + 2] = p / c, g[d + 3] = f / c, T++);
                    }
                    for (s ? (l = h[o - 2], _ = h[o - 1], u = h[0], f = h[1] - _, 0 != (p = u - l) && 0 != f && (c = Math.sqrt(p * p + f * f)) > .001 && (g[d = 4 * T] = l, 
                    g[d + 1] = _, g[d + 2] = p / c, g[d + 3] = f / c, T++)) : (g[d = 4 * T] = l, g[d + 1] = _, 
                    g[d + 2] = p / c, g[d + 3] = f / c, T++), v = 0, x = 0; x < m; x++) {
                        l = h[v], _ = h[v + 1], u = h[v + 2], h[v + 3];
                    }
                }
            }
        } ]);
        return Gt;
    }();
    Gt.tempData = new Array(256);
    var kt = function kt(t, e, i) {
        (0, _classCallCheck2.default)(this, kt);
        this.i = t, this.x = e, this.y = i, this.prev = null, this.next = null, this.z = null, 
        this.prevZ = null, this.nextZ = null, this.steiner = !1;
    };
    var Wt = /* */ function() {
        function Wt() {
            (0, _classCallCheck2.default)(this, Wt);
        }
        (0, _createClass2.default)(Wt, null, [ {
            key: "earcut",
            value: function earcut(t, e, i) {
                i = i || 2;
                var s, r, a, n, h, o, l, _ = e && e.length, u = _ ? e[0] * i : t.length, c = Wt.linkedList(t, 0, u, i, !0), d = [];
                if (!c) return d;
                if (_ && (c = Wt.eliminateHoles(t, e, c, i)), t.length > 80 * i) {
                    s = a = t[0], r = n = t[1];
                    for (var p = i; p < u; p += i) {
                        (h = t[p]) < s && (s = h), (o = t[p + 1]) < r && (r = o), h > a && (a = h), o > n && (n = o);
                    }
                    l = 0 !== (l = Math.max(a - s, n - r)) ? 1 / l : 0;
                }
                return Wt.earcutLinked(c, d, i, s, r, l), d;
            }
        }, {
            key: "linkedList",
            value: function linkedList(t, e, i, s, r) {
                var a, n;
                if (r === Wt.signedArea(t, e, i, s) > 0) for (a = e; a < i; a += s) {
                    n = Wt.insertNode(a, t[a], t[a + 1], n);
                } else for (a = i - s; a >= e; a -= s) {
                    n = Wt.insertNode(a, t[a], t[a + 1], n);
                }
                return n && Wt.equals(n, n.next) && (Wt.removeNode(n), n = n.next), n;
            }
        }, {
            key: "filterPoints",
            value: function filterPoints(t, e) {
                if (!t) return t;
                e || (e = t);
                var i, s = t;
                do {
                    if (i = !1, s.steiner || !Wt.equals(s, s.next) && 0 !== Wt.area(s.prev, s, s.next)) s = s.next; else {
                        if (Wt.removeNode(s), (s = e = s.prev) === s.next) break;
                        i = !0;
                    }
                } while (i || s !== e);
                return e;
            }
        }, {
            key: "earcutLinked",
            value: function earcutLinked(t, e, i, s, r, a) {
                var n = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
                if (t) {
                    !n && a && Wt.indexCurve(t, s, r, a);
                    for (var h, o, l = t; t.prev !== t.next; ) {
                        if (h = t.prev, o = t.next, a ? Wt.isEarHashed(t, s, r, a) : Wt.isEar(t)) e.push(h.i / i), 
                        e.push(t.i / i), e.push(o.i / i), Wt.removeNode(t), t = o.next, l = o.next; else if ((t = o) === l) {
                            n ? 1 === n ? (t = Wt.cureLocalIntersections(t, e, i), Wt.earcutLinked(t, e, i, s, r, a, 2)) : 2 === n && Wt.splitEarcut(t, e, i, s, r, a) : Wt.earcutLinked(Wt.filterPoints(t, null), e, i, s, r, a, 1);
                            break;
                        }
                    }
                }
            }
        }, {
            key: "isEar",
            value: function isEar(t) {
                var e = t.prev, i = t, s = t.next;
                if (Wt.area(e, i, s) >= 0) return !1;
                for (var r = t.next.next; r !== t.prev; ) {
                    if (Wt.pointInTriangle(e.x, e.y, i.x, i.y, s.x, s.y, r.x, r.y) && Wt.area(r.prev, r, r.next) >= 0) return !1;
                    r = r.next;
                }
                return !0;
            }
        }, {
            key: "isEarHashed",
            value: function isEarHashed(t, e, i, s) {
                var r = t.prev, a = t, n = t.next;
                if (Wt.area(r, a, n) >= 0) return !1;
                for (var h = r.x < a.x ? r.x < n.x ? r.x : n.x : a.x < n.x ? a.x : n.x, o = r.y < a.y ? r.y < n.y ? r.y : n.y : a.y < n.y ? a.y : n.y, l = r.x > a.x ? r.x > n.x ? r.x : n.x : a.x > n.x ? a.x : n.x, _ = r.y > a.y ? r.y > n.y ? r.y : n.y : a.y > n.y ? a.y : n.y, u = Wt.zOrder(h, o, e, i, s), c = Wt.zOrder(l, _, e, i, s), d = t.nextZ; d && d.z <= c; ) {
                    if (d !== t.prev && d !== t.next && Wt.pointInTriangle(r.x, r.y, a.x, a.y, n.x, n.y, d.x, d.y) && Wt.area(d.prev, d, d.next) >= 0) return !1;
                    d = d.nextZ;
                }
                for (d = t.prevZ; d && d.z >= u; ) {
                    if (d !== t.prev && d !== t.next && Wt.pointInTriangle(r.x, r.y, a.x, a.y, n.x, n.y, d.x, d.y) && Wt.area(d.prev, d, d.next) >= 0) return !1;
                    d = d.prevZ;
                }
                return !0;
            }
        }, {
            key: "cureLocalIntersections",
            value: function cureLocalIntersections(t, e, i) {
                var s = t;
                do {
                    var r = s.prev, a = s.next.next;
                    !Wt.equals(r, a) && Wt.intersects(r, s, s.next, a) && Wt.locallyInside(r, a) && Wt.locallyInside(a, r) && (e.push(r.i / i), 
                    e.push(s.i / i), e.push(a.i / i), Wt.removeNode(s), Wt.removeNode(s.next), s = t = a), 
                    s = s.next;
                } while (s !== t);
                return s;
            }
        }, {
            key: "splitEarcut",
            value: function splitEarcut(t, e, i, s, r, a) {
                var n = t;
                do {
                    for (var h = n.next.next; h !== n.prev; ) {
                        if (n.i !== h.i && Wt.isValidDiagonal(n, h)) {
                            var o = Wt.splitPolygon(n, h);
                            return n = Wt.filterPoints(n, n.next), o = Wt.filterPoints(o, o.next), Wt.earcutLinked(n, e, i, s, r, a), 
                            void Wt.earcutLinked(o, e, i, s, r, a);
                        }
                        h = h.next;
                    }
                    n = n.next;
                } while (n !== t);
            }
        }, {
            key: "eliminateHoles",
            value: function eliminateHoles(t, e, i, s) {
                var r, a, n, h, o, l = [];
                for (r = 0, a = e.length; r < a; r++) {
                    n = e[r] * s, h = r < a - 1 ? e[r + 1] * s : t.length, (o = Wt.linkedList(t, n, h, s, !1)) === o.next && (o.steiner = !0), 
                    l.push(Wt.getLeftmost(o));
                }
                for (l.sort(Wt.compareX), r = 0; r < l.length; r++) {
                    Wt.eliminateHole(l[r], i), i = Wt.filterPoints(i, i.next);
                }
                return i;
            }
        }, {
            key: "compareX",
            value: function compareX(t, e) {
                return t.x - e.x;
            }
        }, {
            key: "eliminateHole",
            value: function eliminateHole(t, e) {
                if (e = Wt.findHoleBridge(t, e)) {
                    var i = Wt.splitPolygon(e, t);
                    Wt.filterPoints(i, i.next);
                }
            }
        }, {
            key: "findHoleBridge",
            value: function findHoleBridge(t, e) {
                var i, s = e, r = t.x, a = t.y, n = -1 / 0;
                do {
                    if (a <= s.y && a >= s.next.y && s.next.y !== s.y) {
                        var h = s.x + (a - s.y) * (s.next.x - s.x) / (s.next.y - s.y);
                        if (h <= r && h > n) {
                            if (n = h, h === r) {
                                if (a === s.y) return s;
                                if (a === s.next.y) return s.next;
                            }
                            i = s.x < s.next.x ? s : s.next;
                        }
                    }
                    s = s.next;
                } while (s !== e);
                if (!i) return null;
                if (r === n) return i.prev;
                var o, l = i, _ = i.x, u = i.y, c = 1 / 0;
                for (s = i.next; s !== l; ) {
                    r >= s.x && s.x >= _ && r !== s.x && Wt.pointInTriangle(a < u ? r : n, a, _, u, a < u ? n : r, a, s.x, s.y) && ((o = Math.abs(a - s.y) / (r - s.x)) < c || o === c && s.x > i.x) && Wt.locallyInside(s, t) && (i = s, 
                    c = o), s = s.next;
                }
                return i;
            }
        }, {
            key: "indexCurve",
            value: function indexCurve(t, e, i, s) {
                var r = t;
                do {
                    null === r.z && (r.z = Wt.zOrder(r.x, r.y, e, i, s)), r.prevZ = r.prev, r.nextZ = r.next, 
                    r = r.next;
                } while (r !== t);
                r.prevZ.nextZ = null, r.prevZ = null, Wt.sortLinked(r);
            }
        }, {
            key: "sortLinked",
            value: function sortLinked(t) {
                var e, i, s, r, a, n, h, o, l = 1;
                do {
                    for (i = t, t = null, a = null, n = 0; i; ) {
                        for (n++, s = i, h = 0, e = 0; e < l && (h++, s = s.nextZ); e++) {}
                        for (o = l; h > 0 || o > 0 && s; ) {
                            0 !== h && (0 === o || !s || i.z <= s.z) ? (r = i, i = i.nextZ, h--) : (r = s, s = s.nextZ, 
                            o--), a ? a.nextZ = r : t = r, r.prevZ = a, a = r;
                        }
                        i = s;
                    }
                    a.nextZ = null, l *= 2;
                } while (n > 1);
                return t;
            }
        }, {
            key: "zOrder",
            value: function zOrder(t, e, i, s, r) {
                return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - i) * r) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - s) * r) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1;
            }
        }, {
            key: "getLeftmost",
            value: function getLeftmost(t) {
                var e = t, i = t;
                do {
                    e.x < i.x && (i = e), e = e.next;
                } while (e !== t);
                return i;
            }
        }, {
            key: "pointInTriangle",
            value: function pointInTriangle(t, e, i, s, r, a, n, h) {
                return (r - n) * (e - h) - (t - n) * (a - h) >= 0 && (t - n) * (s - h) - (i - n) * (e - h) >= 0 && (i - n) * (a - h) - (r - n) * (s - h) >= 0;
            }
        }, {
            key: "isValidDiagonal",
            value: function isValidDiagonal(t, e) {
                return t.next.i !== e.i && t.prev.i !== e.i && !Wt.intersectsPolygon(t, e) && Wt.locallyInside(t, e) && Wt.locallyInside(e, t) && Wt.middleInside(t, e);
            }
        }, {
            key: "area",
            value: function area(t, e, i) {
                return (e.y - t.y) * (i.x - e.x) - (e.x - t.x) * (i.y - e.y);
            }
        }, {
            key: "equals",
            value: function equals(t, e) {
                return t.x === e.x && t.y === e.y;
            }
        }, {
            key: "intersects",
            value: function intersects(t, e, i, s) {
                return !!(Wt.equals(t, e) && Wt.equals(i, s) || Wt.equals(t, s) && Wt.equals(i, e)) || Wt.area(t, e, i) > 0 != Wt.area(t, e, s) > 0 && Wt.area(i, s, t) > 0 != Wt.area(i, s, e) > 0;
            }
        }, {
            key: "intersectsPolygon",
            value: function intersectsPolygon(t, e) {
                var i = t;
                do {
                    if (i.i !== t.i && i.next.i !== t.i && i.i !== e.i && i.next.i !== e.i && Wt.intersects(i, i.next, t, e)) return !0;
                    i = i.next;
                } while (i !== t);
                return !1;
            }
        }, {
            key: "locallyInside",
            value: function locallyInside(t, e) {
                return Wt.area(t.prev, t, t.next) < 0 ? Wt.area(t, e, t.next) >= 0 && Wt.area(t, t.prev, e) >= 0 : Wt.area(t, e, t.prev) < 0 || Wt.area(t, t.next, e) < 0;
            }
        }, {
            key: "middleInside",
            value: function middleInside(t, e) {
                var i = t, s = !1, r = (t.x + e.x) / 2, a = (t.y + e.y) / 2;
                do {
                    i.y > a != i.next.y > a && i.next.y !== i.y && r < (i.next.x - i.x) * (a - i.y) / (i.next.y - i.y) + i.x && (s = !s), 
                    i = i.next;
                } while (i !== t);
                return s;
            }
        }, {
            key: "splitPolygon",
            value: function splitPolygon(t, e) {
                var i = new kt(t.i, t.x, t.y), s = new kt(e.i, e.x, e.y), r = t.next, a = e.prev;
                return t.next = e, e.prev = t, i.next = r, r.prev = i, s.next = i, i.prev = s, a.next = s, 
                s.prev = a, s;
            }
        }, {
            key: "insertNode",
            value: function insertNode(t, e, i, s) {
                var r = new kt(t, e, i);
                return s ? (r.next = s.next, r.prev = s, s.next.prev = r, s.next = r) : (r.prev = r, 
                r.next = r), r;
            }
        }, {
            key: "removeNode",
            value: function removeNode(t) {
                t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), 
                t.nextZ && (t.nextZ.prevZ = t.prevZ);
            }
        }, {
            key: "signedArea",
            value: function signedArea(t, e, i, s) {
                for (var r = 0, a = e, n = i - s; a < i; a += s) {
                    r += (t[n] - t[a]) * (t[a + 1] + t[n + 1]), n = a;
                }
                return r;
            }
        } ]);
        return Wt;
    }();
    var Yt = function Yt() {
        (0, _classCallCheck2.default)(this, Yt);
    };
    Yt.BYTES_PE = 4, Yt.BYTES_PIDX = 2, Yt.defaultMatrix4 = [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ], 
    Yt.defaultMinusYMatrix4 = [ 1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ], Yt.uniformMatrix3 = [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0 ], 
    Yt._TMPARRAY = [], Yt._OFFSETX = 0, Yt._OFFSETY = 0;
    var Vt = /* */ function(_dt) {
        (0, _inherits2.default)(Vt, _dt);
        var _super19 = _createSuper(Vt);
        function Vt() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : dt.TYPE_2D;
            (0, _classCallCheck2.default)(this, Vt);
            return _super19.call(this, t);
        }
        (0, _createClass2.default)(Vt, [ {
            key: "renderSubmit",
            value: function renderSubmit() {
                if (0 === this._numEle || !this._mesh || 0 == this._numEle) return 1;
                var t = this.shaderValue.textureHost;
                if (t) {
                    var e = t._getSource();
                    if (!e) return 1;
                    this.shaderValue.texture = e;
                }
                var i = R.mainContext;
                return this._mesh.useMesh(i), this.shaderValue.upload(), W.activeBlendFunction !== this._blendFn && (R.setBlend(i, !0), 
                this._blendFn(i), W.activeBlendFunction = this._blendFn), i.drawElements(i.TRIANGLES, this._numEle, i.UNSIGNED_SHORT, this._startIdx), 
                X.renderBatches++, X.trianglesFaces += this._numEle / 3, 1;
            }
        }, {
            key: "releaseRender",
            value: function releaseRender() {
                dt.RENDERBASE != this && --this._ref < 1 && (Vt.POOL[Vt._poolSize++] = this, this.shaderValue.release(), 
                this.shaderValue = null, this._mesh = null, this._parent && (this._parent.releaseRender(), 
                this._parent = null));
            }
        } ], [ {
            key: "create",
            value: function create(t, e, i) {
                var s = Vt._poolSize ? Vt.POOL[--Vt._poolSize] : new Vt();
                s._ref = 1, s._mesh = e, s._key.clear(), s._startIdx = e.indexNum * Yt.BYTES_PIDX, 
                s._numEle = 0;
                var r = t._nBlendType;
                s._blendFn = t._targets ? W.targetFns[r] : W.fns[r], s.shaderValue = i, s.shaderValue.setValue(t._shader2D);
                var a = t._shader2D.filters;
                return a && s.shaderValue.setFilters(a), s;
            }
        }, {
            key: "createShape",
            value: function createShape(t, e, i, s) {
                var r = Vt._poolSize ? Vt.POOL[--Vt._poolSize] : new Vt();
                r._mesh = e, r._numEle = i, r._startIdx = 2 * e.indexNum, r._ref = 1, r.shaderValue = s, 
                r.shaderValue.setValue(t._shader2D);
                var a = t._nBlendType;
                return r._key.blendShader = a, r._blendFn = t._targets ? W.targetFns[a] : W.fns[a], 
                r;
            }
        } ]);
        return Vt;
    }(dt);
    Vt._poolSize = 0, Vt.POOL = [];
    var Xt = /* */ function(_dt2) {
        (0, _inherits2.default)(Xt, _dt2);
        var _super20 = _createSuper(Xt);
        function Xt() {
            var _this15;
            (0, _classCallCheck2.default)(this, Xt);
            _this15 = _super20.call(this, dt.TYPE_2D), _this15._matrix = new p(), _this15._matrix4 = Yt.defaultMatrix4.concat(), 
            _this15.shaderValue = new j(0, 0);
            return _this15;
        }
        (0, _createClass2.default)(Xt, [ {
            key: "renderSubmit",
            value: function renderSubmit() {
                var t = U.worldAlpha, e = U.worldMatrix4, i = U.worldMatrix, s = U.worldFilters, r = U.worldShaderDefines, a = this.shaderValue, n = this._matrix, h = this._matrix4, o = p.TEMP;
                return p.mul(n, i, o), h[0] = o.a, h[1] = o.b, h[4] = o.c, h[5] = o.d, h[12] = o.tx, 
                h[13] = o.ty, U.worldMatrix = o.clone(), U.worldMatrix4 = h, U.worldAlpha = U.worldAlpha * a.alpha, 
                a.filters && a.filters.length && (U.worldFilters = a.filters, U.worldShaderDefines = a.defines), 
                this.canv.flushsubmit(), U.worldAlpha = t, U.worldMatrix4 = e, U.worldMatrix.destroy(), 
                U.worldMatrix = i, U.worldFilters = s, U.worldShaderDefines = r, 1;
            }
        }, {
            key: "releaseRender",
            value: function releaseRender() {
                if (--this._ref < 1) {
                    var t = Xt.POOL;
                    this._mesh = null, t[t._length++] = this;
                }
            }
        }, {
            key: "getRenderType",
            value: function getRenderType() {
                return dt.TYPE_CANVAS;
            }
        } ], [ {
            key: "create",
            value: function create(t, e, i) {
                var s = Xt.POOL._length ? Xt.POOL[--Xt.POOL._length] : new Xt();
                s.canv = t, s._ref = 1, s._numEle = 0;
                var r = s.shaderValue;
                return r.alpha = e, r.defines.setValue(0), i && i.length && r.setFilters(i), s;
            }
        } ]);
        return Xt;
    }(dt);
    Xt.POOL = [], Xt.POOL._length = 0;
    var Ht = /* */ function() {
        function Ht() {
            (0, _classCallCheck2.default)(this, Ht);
            this.blendType = 0, this._ref = 1, this._key = new q();
        }
        (0, _createClass2.default)(Ht, [ {
            key: "renderSubmit",
            value: function renderSubmit() {
                var t = R.mainContext;
                this._mesh.useMesh(t);
                var e = this.srcRT;
                return e && (this.shaderValue.texture = e._getSource(), this.shaderValue.upload(), 
                this.blend(), X.renderBatches++, X.trianglesFaces += this._numEle / 3, t.drawElements(t.TRIANGLES, this._numEle, t.UNSIGNED_SHORT, this._startIdx)), 
                1;
            }
        }, {
            key: "blend",
            value: function blend() {
                if (W.activeBlendFunction !== W.fns[this.blendType]) {
                    var t = R.mainContext;
                    t.enable(t.BLEND), W.fns[this.blendType](t), W.activeBlendFunction = W.fns[this.blendType];
                }
            }
        }, {
            key: "getRenderType",
            value: function getRenderType() {
                return 0;
            }
        }, {
            key: "releaseRender",
            value: function releaseRender() {
                if (--this._ref < 1) {
                    var t = Ht.POOL;
                    t[t._length++] = this;
                }
            }
        } ], [ {
            key: "create",
            value: function create(t, e, i, s) {
                var r = Ht.POOL._length ? Ht.POOL[--Ht.POOL._length] : new Ht();
                if (r._mesh = e, r.srcRT = s, r._startIdx = e.indexNum * Yt.BYTES_PIDX, r._ref = 1, 
                r._key.clear(), r._numEle = 0, r.blendType = t._nBlendType, r._key.blendShader = r.blendType, 
                r.shaderValue = i, r.shaderValue.setValue(t._shader2D), t._colorFiler) {
                    var a = t._colorFiler;
                    i.defines.add(a.type), i.colorMat = a._mat, i.colorAlpha = a._alpha;
                }
                return r;
            }
        } ]);
        return Ht;
    }();
    Ht.POOL = [], Ht.POOL._length = 0;
    var zt = /* */ function(_dt3) {
        (0, _inherits2.default)(zt, _dt3);
        var _super21 = _createSuper(zt);
        function zt() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : dt.TYPE_2D;
            (0, _classCallCheck2.default)(this, zt);
            return _super21.call(this, t);
        }
        (0, _createClass2.default)(zt, [ {
            key: "releaseRender",
            value: function releaseRender() {
                --this._ref < 1 && (zt.POOL[zt._poolSize++] = this, this.shaderValue.release(), 
                this._mesh = null, this._parent && (this._parent.releaseRender(), this._parent = null));
            }
        }, {
            key: "renderSubmit",
            value: function renderSubmit() {
                if (0 === this._numEle) return 1;
                var t = this.shaderValue.textureHost;
                if (t) {
                    var e = t ? t._getSource() : null;
                    if (!e) return 1;
                }
                var i = R.mainContext;
                this._mesh.useMesh(i);
                var s = dt.preRender, r = dt.preRender._key;
                return 0 === this._key.blendShader && this._key.submitType === r.submitType && this._key.blendShader === r.blendShader && N.activeShader && dt.preRender.clipInfoID == this.clipInfoID && s.shaderValue.defines._value === this.shaderValue.defines._value && 0 == (this.shaderValue.defines._value & V.NOOPTMASK) ? N.activeShader.uploadTexture2D(e) : (W.activeBlendFunction !== this._blendFn && (R.setBlend(i, !0), 
                this._blendFn(i), W.activeBlendFunction = this._blendFn), this.shaderValue.texture = e, 
                this.shaderValue.upload()), i.drawElements(i.TRIANGLES, this._numEle, i.UNSIGNED_SHORT, this._startIdx), 
                X.renderBatches++, X.trianglesFaces += this._numEle / 3, 1;
            }
        } ], [ {
            key: "create",
            value: function create(t, e, i) {
                var s = zt._poolSize ? zt.POOL[--zt._poolSize] : new zt(dt.TYPE_TEXTURE);
                s._mesh = e, s._key.clear(), s._key.submitType = dt.KEY_DRAWTEXTURE, s._ref = 1, 
                s._startIdx = e.indexNum * Yt.BYTES_PIDX, s._numEle = 0;
                var r = t._nBlendType;
                if (s._key.blendShader = r, s._blendFn = t._targets ? W.targetFns[r] : W.fns[r], 
                s.shaderValue = i, t._colorFiler) {
                    var a = t._colorFiler;
                    i.defines.add(a.type), i.colorMat = a._mat, i.colorAlpha = a._alpha;
                }
                return s;
            }
        } ]);
        return zt;
    }(dt);
    zt._poolSize = 0, zt.POOL = [];
    var Kt = /* */ function() {
        function Kt() {
            (0, _classCallCheck2.default)(this, Kt);
            this._data = [], this._ndata = 0, this._clipid = -1, this._clipMatrix = new p(), 
            this._enable = !1;
        }
        (0, _createClass2.default)(Kt, [ {
            key: "clear",
            value: function clear() {
                this._tex = null, this._imgId = -1, this._ndata = 0, this._enable = !1, this._colorFiler = null;
            }
        }, {
            key: "destroy",
            value: function destroy() {
                this.clear(), this._data.length = 0, this._data = null;
            }
        }, {
            key: "add",
            value: function add(t, e, i, s, r, a) {
                this._ndata > 0 && (this._tex != e || this._imgId != i || this._clipid >= 0 && this._clipid != t._clipInfoID) && this.submit(t), 
                this._clipid = t._clipInfoID, t._globalClipMatrix.copyTo(this._clipMatrix), this._tex = e, 
                this._imgId = i, this._colorFiler = t._colorFiler, this._data[this._ndata] = s, 
                this._data[this._ndata + 1] = r, this._data[this._ndata + 2] = a, this._ndata += 3;
            }
        }, {
            key: "getPos",
            value: function getPos() {
                return 0 == Kt.__nPosPool ? new Array(8) : Kt.__posPool[--Kt.__nPosPool];
            }
        }, {
            key: "enable",
            value: function enable(t, e) {
                t !== this._enable && (this._enable = t, this._enable || this.submit(e));
            }
        }, {
            key: "submit",
            value: function submit(t) {
                var e = this._ndata;
                if (e) {
                    var i = t._mesh, s = t._colorFiler;
                    t._colorFiler = this._colorFiler;
                    var r = zt.create(t, i, j.create(V.TEXTURE2D, 0));
                    t._submits[t._submits._length++] = t._curSubmit = r, r.shaderValue.textureHost = this._tex, 
                    r._key.other = this._imgId, t._colorFiler = s, t._copyClipInfo(r, this._clipMatrix), 
                    r.clipInfoID = this._clipid;
                    for (var a = 0; a < e; a += 3) {
                        i.addQuad(this._data[a], this._data[a + 1], this._data[a + 2], !0), Kt.__posPool[Kt.__nPosPool++] = this._data[a];
                    }
                    e /= 3, r._numEle += 6 * e, i.indexNum += 6 * e, i.vertNum += 4 * e, t._drawCount += e, 
                    this._ndata = 0, Et.loopCount % 100 == 0 && (this._data.length = 0);
                }
            }
        } ]);
        return Kt;
    }();
    Kt.__posPool = [], Kt.__nPosPool = 0;
    var jt = /* */ function() {
        function jt() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            (0, _classCallCheck2.default)(this, jt);
            this.atlasID = 0, this._width = 0, this._height = 0, this._texCount = 0, this._rowInfo = null, 
            this._cells = null, this._used = 0, this._cells = null, this._rowInfo = null, this.atlasID = i, 
            this._init(t, e);
        }
        (0, _createClass2.default)(jt, [ {
            key: "addRect",
            value: function addRect(t, e, i, s) {
                return !!this._get(e, i, s) && (this._fill(s.x, s.y, e, i, t), this._texCount++, 
                !0);
            }
        }, {
            key: "_release",
            value: function _release() {
                this._cells = null, this._rowInfo = null;
            }
        }, {
            key: "_init",
            value: function _init(t, e) {
                return this._width = t, this._height = e, this._release(), 0 != this._width && (this._cells = new Uint8Array(this._width * this._height * 3), 
                this._rowInfo = new Uint8Array(this._height), this._used = 0, this._clear(), !0);
            }
        }, {
            key: "_get",
            value: function _get(t, e, i) {
                if (t > this._width || e > this._height) return !1;
                for (var s = -1, r = -1, a = this._width, n = this._height, h = this._cells, o = 0; o < n; o++) {
                    if (!(this._rowInfo[o] < t)) for (var l = 0; l < a; ) {
                        var _ = 3 * (o * a + l);
                        if (0 != h[_] || h[_ + 1] < t || h[_ + 2] < e) l += h[_ + 1]; else {
                            s = l, r = o;
                            for (var u = 0; u < t; u++) {
                                if (h[3 * u + _ + 2] < e) {
                                    s = -1;
                                    break;
                                }
                            }
                            if (!(s < 0)) return i.x = s, i.y = r, !0;
                            l += h[_ + 1];
                        }
                    }
                }
                return !1;
            }
        }, {
            key: "_fill",
            value: function _fill(t, e, i, s, r) {
                var a = this._width, n = this._height;
                this._check(t + i <= a && e + s <= n);
                for (var h = e; h < s + e; ++h) {
                    this._check(this._rowInfo[h] >= i), this._rowInfo[h] -= i;
                    for (var o = 0; o < i; o++) {
                        var l = 3 * (t + h * a + o);
                        this._check(0 == this._cells[l]), this._cells[l] = r, this._cells[l + 1] = i, this._cells[l + 2] = s;
                    }
                }
                if (t > 0) for (h = 0; h < s; ++h) {
                    var _ = 0;
                    for (o = t - 1; o >= 0 && 0 == this._cells[3 * ((e + h) * a + o)]; --o, ++_) {}
                    for (o = _; o > 0; --o) {
                        this._cells[3 * ((e + h) * a + t - o) + 1] = o, this._check(o > 0);
                    }
                }
                if (e > 0) for (o = t; o < t + i; ++o) {
                    for (_ = 0, h = e - 1; h >= 0 && 0 == this._cells[3 * (o + h * a)]; --h, _++) {}
                    for (h = _; h > 0; --h) {
                        this._cells[3 * (o + (e - h) * a) + 2] = h, this._check(h > 0);
                    }
                }
                this._used += i * s / (this._width * this._height);
            }
        }, {
            key: "_check",
            value: function _check(t) {
                0 == t && console.log("xtexMerger 错误啦");
            }
        }, {
            key: "_clear",
            value: function _clear() {
                this._texCount = 0;
                for (var t = 0; t < this._height; t++) {
                    this._rowInfo[t] = this._width;
                }
                for (var e = 0; e < this._height; e++) {
                    for (var i = 0; i < this._width; i++) {
                        var s = 3 * (e * this._width + i);
                        this._cells[s] = 0, this._cells[s + 1] = this._width - i, this._cells[s + 2] = this._width - e;
                    }
                }
            }
        } ]);
        return jt;
    }();
    var qt = /* */ function(_I3) {
        (0, _inherits2.default)(qt, _I3);
        var _super22 = _createSuper(qt);
        function qt(t, e) {
            var _this16;
            (0, _classCallCheck2.default)(this, qt);
            _this16 = _super22.call(this), _this16._texW = 0, _this16._texH = 0, _this16.__destroyed = !1, 
            _this16._discardTm = 0, _this16.genID = 0, _this16.bitmap = {
                id: 0,
                _glTexture: null
            }, _this16.curUsedCovRate = 0, _this16.curUsedCovRateAtlas = 0, _this16.lastTouchTm = 0, 
            _this16.ri = null, _this16._texW = t || qt.gTextRender.atlasWidth, _this16._texH = e || qt.gTextRender.atlasWidth, 
            _this16.bitmap.id = _this16.id, _this16.lock = !0;
            return _this16;
        }
        (0, _createClass2.default)(qt, [ {
            key: "recreateResource",
            value: function recreateResource() {
                if (!this._source) {
                    var t = g.instance, e = this._source = t.createTexture();
                    this.bitmap._glTexture = e, R.bindTexture(t, t.TEXTURE_2D, e), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, this._texW, this._texH, 0, t.RGBA, t.UNSIGNED_BYTE, null), 
                    t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), 
                    t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), 
                    qt.gTextRender.debugUV && this.fillWhite();
                }
            }
        }, {
            key: "addChar",
            value: function addChar(t, e, s) {
                var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                if (qt.gTextRender.isWan1Wan) return this.addCharCanvas(t, e, s, r);
                !this._source && this.recreateResource();
                var a = g.instance;
                R.bindTexture(a, a.TEXTURE_2D, this._source), !i.Render.isConchApp && a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
                var n, h, o, l, _ = t.data;
                return t.data instanceof Uint8ClampedArray && (_ = new Uint8Array(_.buffer)), a.texSubImage2D(a.TEXTURE_2D, 0, e, s, t.width, t.height, a.RGBA, a.UNSIGNED_BYTE, _), 
                !i.Render.isConchApp && a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), n = e / this._texW, 
                h = s / this._texH, o = (e + t.width) / this._texW, l = (s + t.height) / this._texH, 
                (r = r || new Array(8))[0] = n, r[1] = h, r[2] = o, r[3] = h, r[4] = o, r[5] = l, 
                r[6] = n, r[7] = l, r;
            }
        }, {
            key: "addCharCanvas",
            value: function addCharCanvas(t, e, s) {
                var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                !this._source && this.recreateResource();
                var a, n, h, o, l = g.instance;
                return R.bindTexture(l, l.TEXTURE_2D, this._source), !i.Render.isConchApp && l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0), 
                l.texSubImage2D(l.TEXTURE_2D, 0, e, s, l.RGBA, l.UNSIGNED_BYTE, t), !i.Render.isConchApp && l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), 
                i.Render.isConchApp ? (a = e / this._texW, n = s / this._texH, h = (e + t.width) / this._texW, 
                o = (s + t.height) / this._texH) : (a = (e + 1) / this._texW, n = (s + 1) / this._texH, 
                h = (e + t.width - 1) / this._texW, o = (s + t.height - 1) / this._texH), (r = r || new Array(8))[0] = a, 
                r[1] = n, r[2] = h, r[3] = n, r[4] = h, r[5] = o, r[6] = a, r[7] = o, r;
            }
        }, {
            key: "fillWhite",
            value: function fillWhite() {
                !this._source && this.recreateResource();
                var t = g.instance, e = new Uint8Array(this._texW * this._texH * 4);
                e.fill(255), t.texSubImage2D(t.TEXTURE_2D, 0, 0, 0, this._texW, this._texH, t.RGBA, t.UNSIGNED_BYTE, e);
            }
        }, {
            key: "discard",
            value: function discard() {
                i.stage.setGlobalRepaint(), this.destroy();
            }
        }, {
            key: "destroy",
            value: function destroy() {
                this.__destroyed = !0;
                var t = g.instance;
                this._source && t.deleteTexture(this._source), this._source = null;
            }
        }, {
            key: "touchRect",
            value: function touchRect(t, e) {
                this.lastTouchTm != e && (this.curUsedCovRate = 0, this.curUsedCovRateAtlas = 0, 
                this.lastTouchTm = e);
                var s = qt.gTextRender.atlasWidth * qt.gTextRender.atlasWidth, r = i.TextAtlas.atlasGridW * i.TextAtlas.atlasGridW;
                this.curUsedCovRate += t.bmpWidth * t.bmpHeight / s, this.curUsedCovRateAtlas += Math.ceil(t.bmpWidth / i.TextAtlas.atlasGridW) * Math.ceil(t.bmpHeight / i.TextAtlas.atlasGridW) / (s / r);
            }
        }, {
            key: "_getSource",
            value: function _getSource() {
                return this._source;
            }
        }, {
            key: "drawOnScreen",
            value: function drawOnScreen(t, e) {}
        }, {
            key: "texture",
            get: function get() {
                return this;
            }
        } ], [ {
            key: "getTextTexture",
            value: function getTextTexture(t, e) {
                return new qt(t, e);
            }
        }, {
            key: "clean",
            value: function clean() {
                var t = Et.loopStTm;
                if (0 === qt.cleanTm && (qt.cleanTm = t), t - qt.cleanTm >= qt.gTextRender.checkCleanTextureDt) {
                    for (var e = 0; e < qt.poolLen; e++) {
                        var i = qt.pool[e];
                        t - i._discardTm >= qt.gTextRender.destroyUnusedTextureDt && (i.destroy(), qt.pool[e] = qt.pool[qt.poolLen - 1], 
                        qt.poolLen--, e--);
                    }
                    qt.cleanTm = t;
                }
            }
        } ]);
        return qt;
    }(I);
    qt.gTextRender = null, qt.pool = new Array(10), qt.poolLen = 0, qt.cleanTm = 0;
    var Zt = /* */ function() {
        function Zt() {
            (0, _classCallCheck2.default)(this, Zt);
            this.texWidth = 1024, this.texHeight = 1024, this.texture = null, this.charMaps = {}, 
            this.texHeight = this.texWidth = i.TextRender.atlasWidth, this.texture = qt.getTextTexture(this.texWidth, this.texHeight), 
            this.texWidth / Zt.atlasGridW > 256 && (Zt.atlasGridW = Math.ceil(this.texWidth / 256)), 
            this.atlasgrid = new jt(this.texWidth / Zt.atlasGridW, this.texHeight / Zt.atlasGridW, this.texture.id);
        }
        (0, _createClass2.default)(Zt, [ {
            key: "setProtecteDist",
            value: function setProtecteDist(t) {}
        }, {
            key: "getAEmpty",
            value: function getAEmpty(t, e, i) {
                var s = this.atlasgrid.addRect(1, Math.ceil(t / Zt.atlasGridW), Math.ceil(e / Zt.atlasGridW), i);
                return s && (i.x *= Zt.atlasGridW, i.y *= Zt.atlasGridW), s;
            }
        }, {
            key: "destroy",
            value: function destroy() {
                for (var t in this.charMaps) {
                    this.charMaps[t].deleted = !0;
                }
                this.texture.discard();
            }
        }, {
            key: "printDebugInfo",
            value: function printDebugInfo() {}
        }, {
            key: "usedRate",
            get: function get() {
                return this.atlasgrid._used;
            }
        } ]);
        return Zt;
    }();
    Zt.atlasGridW = 16;
    var Qt = /* */ function() {
        function Qt() {
            (0, _classCallCheck2.default)(this, Qt);
        }
        (0, _createClass2.default)(Qt, [ {
            key: "setTo",
            value: function setTo(t, e, i) {
                return this.type = t, this.currentTarget = e, this.target = i, this;
            }
        }, {
            key: "stopPropagation",
            value: function stopPropagation() {
                this._stoped = !0;
            }
        }, {
            key: "touches",
            get: function get() {
                if (!this.nativeEvent) return null;
                var t = this.nativeEvent.touches;
                if (t) for (var e = i.stage, s = 0, r = t.length; s < r; s++) {
                    var a = t[s], n = f.TEMP;
                    n.setTo(a.clientX, a.clientY), e._canvasTransform.invertTransformPoint(n), e.transform.invertTransformPoint(n), 
                    a.stageX = n.x, a.stageY = n.y;
                }
                return t;
            }
        }, {
            key: "altKey",
            get: function get() {
                return this.nativeEvent.altKey;
            }
        }, {
            key: "ctrlKey",
            get: function get() {
                return this.nativeEvent.ctrlKey;
            }
        }, {
            key: "shiftKey",
            get: function get() {
                return this.nativeEvent.shiftKey;
            }
        }, {
            key: "charCode",
            get: function get() {
                return this.nativeEvent.charCode;
            }
        }, {
            key: "keyLocation",
            get: function get() {
                return this.nativeEvent.location || this.nativeEvent.keyLocation;
            }
        }, {
            key: "stageX",
            get: function get() {
                return i.stage.mouseX;
            }
        }, {
            key: "stageY",
            get: function get() {
                return i.stage.mouseY;
            }
        } ]);
        return Qt;
    }();
    Qt.EMPTY = new Qt(), Qt.MOUSE_DOWN = "mousedown", Qt.MOUSE_UP = "mouseup", Qt.CLICK = "click", 
    Qt.RIGHT_MOUSE_DOWN = "rightmousedown", Qt.RIGHT_MOUSE_UP = "rightmouseup", Qt.RIGHT_CLICK = "rightclick", 
    Qt.MOUSE_MOVE = "mousemove", Qt.MOUSE_OVER = "mouseover", Qt.MOUSE_OUT = "mouseout", 
    Qt.MOUSE_WHEEL = "mousewheel", Qt.ROLL_OVER = "mouseover", Qt.ROLL_OUT = "mouseout", 
    Qt.DOUBLE_CLICK = "doubleclick", Qt.CHANGE = "change", Qt.CHANGED = "changed", Qt.RESIZE = "resize", 
    Qt.ADDED = "added", Qt.REMOVED = "removed", Qt.DISPLAY = "display", Qt.UNDISPLAY = "undisplay", 
    Qt.ERROR = "error", Qt.COMPLETE = "complete", Qt.LOADED = "loaded", Qt.READY = "ready", 
    Qt.PROGRESS = "progress", Qt.INPUT = "input", Qt.RENDER = "render", Qt.OPEN = "open", 
    Qt.MESSAGE = "message", Qt.CLOSE = "close", Qt.KEY_DOWN = "keydown", Qt.KEY_PRESS = "keypress", 
    Qt.KEY_UP = "keyup", Qt.FRAME = "enterframe", Qt.DRAG_START = "dragstart", Qt.DRAG_MOVE = "dragmove", 
    Qt.DRAG_END = "dragend", Qt.ENTER = "enter", Qt.SELECT = "select", Qt.BLUR = "blur", 
    Qt.FOCUS = "focus", Qt.VISIBILITY_CHANGE = "visibilitychange", Qt.FOCUS_CHANGE = "focuschange", 
    Qt.PLAYED = "played", Qt.PAUSED = "paused", Qt.STOPPED = "stopped", Qt.START = "start", 
    Qt.END = "end", Qt.COMPONENT_ADDED = "componentadded", Qt.COMPONENT_REMOVED = "componentremoved", 
    Qt.RELEASED = "released", Qt.LINK = "link", Qt.LABEL = "label", Qt.FULL_SCREEN_CHANGE = "fullscreenchange", 
    Qt.DEVICE_LOST = "devicelost", Qt.TRANSFORM_CHANGED = "transformchanged", Qt.ANIMATION_CHANGED = "animationchanged", 
    Qt.TRAIL_FILTER_CHANGE = "trailfilterchange", Qt.TRIGGER_ENTER = "triggerenter", 
    Qt.TRIGGER_STAY = "triggerstay", Qt.TRIGGER_EXIT = "triggerexit";
    var $t = /* */ function(_S2) {
        (0, _inherits2.default)($t, _S2);
        var _super23 = _createSuper($t);
        function $t() {
            var _this17;
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
            (0, _classCallCheck2.default)(this, $t);
            _this17 = _super23.call(this), _this17.uvrect = [ 0, 0, 1, 1 ], _this17._destroyed = !1, 
            _this17._referenceCount = 0, _this17.$_GID = 0, _this17.offsetX = 0, _this17.offsetY = 0, 
            _this17._w = 0, _this17._h = 0, _this17.sourceWidth = 0, _this17.sourceHeight = 0, 
            _this17.url = null, _this17.scaleRate = 1, _this17.setTo(t, e, i, s);
            return _this17;
        }
        (0, _createClass2.default)($t, [ {
            key: "_addReference",
            value: function _addReference() {
                this._bitmap && this._bitmap._addReference(), this._referenceCount++;
            }
        }, {
            key: "_removeReference",
            value: function _removeReference() {
                this._bitmap && this._bitmap._removeReference(), this._referenceCount--;
            }
        }, {
            key: "_getSource",
            value: function _getSource() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                return this._destroyed || !this._bitmap ? null : (this.recoverBitmap(t), this._bitmap.destroyed ? null : this.bitmap._getSource());
            }
        }, {
            key: "_onLoaded",
            value: function _onLoaded(t, e) {
                if (e) {
                    if (e == this) ; else if (e instanceof $t) {
                        var i = e;
                        $t._create(e, 0, 0, i.width, i.height, 0, 0, i.sourceWidth, i.sourceHeight, this);
                    } else this.bitmap = e, this.sourceWidth = this._w = e.width, this.sourceHeight = this._h = e.height;
                } else ;
                t && t.run(), this.event(Qt.READY, this);
            }
        }, {
            key: "getIsReady",
            value: function getIsReady() {
                return !this._destroyed && !!this._bitmap;
            }
        }, {
            key: "setTo",
            value: function setTo() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
                this.bitmap = t, this.sourceWidth = i, this.sourceHeight = s, t && (this._w = t.width, 
                this._h = t.height, this.sourceWidth = this.sourceWidth || t.width, this.sourceHeight = this.sourceHeight || t.height), 
                this.uv = e || $t.DEF_UV;
            }
        }, {
            key: "load",
            value: function load(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                this._destroyed || i.loader.load(t, b.create(this, this._onLoaded, [ e ]), null, "htmlimage", 1, !0);
            }
        }, {
            key: "getTexturePixels",
            value: function getTexturePixels(t, e, s, r) {
                var a, n, h, o = this.bitmap, l = this._w, _ = this._h, u = this.sourceWidth, c = this.sourceHeight, d = o.width, p = o.height, f = this.offsetX, m = this.offsetY;
                var g = s, T = r;
                if (t + s > l + f && (g -= t + s - l - f), t + s > u && (s -= t + s - u), e + r > _ + m && (T -= e + r - _ - m), 
                e + r > c && (r -= e + r - c), s <= 0 || r <= 0) return null;
                var v = f > t ? f - t : 0, x = m > e ? m - e : 0, y = t > f ? t - f : 0, E = e > m ? e - m : 0;
                g -= v, T -= x;
                var A = 4 * s, C = null;
                try {
                    C = o.getPixels();
                } catch (t) {}
                if (C) {
                    if (0 == t && 0 == e && s == d && r == p) return C;
                    var _i4 = this._uv.slice(), _o = Math.round(_i4[0] * d), _l = Math.round(_i4[1] * p);
                    var R = new Uint8Array(s * r * 4);
                    for (a = 4 * _o + 4 * y + (n = (_l + E) * (A = 4 * d)), h = 0; h < T; h++) {
                        R.set(C.slice(a, a + 4 * g), 4 * s * (h + x) + 4 * v), a += A;
                    }
                    return R;
                }
                var b = new i.Context();
                b.size(s, r), b.asBitmap = !0;
                var S = null;
                if (0 != t || 0 != e || s != d || r != p) {
                    var w = (S = this._uv.slice())[0], M = S[1], I = (S[2] - w) / l, P = (S[7] - M) / _;
                    S = [ w + y * I, M + E * P, w + (y + g) * I, M + E * P, w + (y + g) * I, M + (E + T) * P, w + y * I, M + (E + T) * P ];
                }
                b._drawTextureM(this, v, x, g, T, null, 1, S), b._targets.start(), b.flush(), b._targets.end(), 
                b._targets.restore();
                var L = b._targets.getData(0, 0, s, r);
                for (b.destroy(), R = new Uint8Array(s * r * 4), a = 0, n = (r - 1) * A, h = r - 1; h >= 0; h--) {
                    R.set(L.slice(n, n + A), a), a += A, n -= A;
                }
                return R;
            }
        }, {
            key: "getPixels",
            value: function getPixels(t, e, i, s) {
                return window.conch ? this._nativeObj.getImageData(t, e, i, s) : this.getTexturePixels(t, e, i, s);
            }
        }, {
            key: "recoverBitmap",
            value: function recoverBitmap() {
                var _this18 = this;
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                var e = this._bitmap.url;
                if (!this._destroyed && (!this._bitmap || this._bitmap.destroyed) && e) {
                    var _s3 = i.Loader.loadedMap[e];
                    _s3 ? (this.bitmap = _s3, t && t()) : i.loader.load(e, b.create(this, function(e) {
                        _this18.bitmap = e, t && t();
                    }), null, "htmlimage", 1, !0);
                }
            }
        }, {
            key: "disposeBitmap",
            value: function disposeBitmap() {
                !this._destroyed && this._bitmap && this._bitmap.destroy();
            }
        }, {
            key: "destroy",
            value: function destroy() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
                if (!this._destroyed) {
                    this._destroyed = !0;
                    var e = this._bitmap;
                    e && (e._removeReference(this._referenceCount), (0 === e.referenceCount || t) && e.destroy(), 
                    e = null), this.url && this === i.loader.getRes(this.url) && i.Loader.clearRes(this.url);
                }
            }
        }, {
            key: "uv",
            get: function get() {
                return this._uv;
            },
            set: function set(t) {
                this.uvrect[0] = Math.min(t[0], t[2], t[4], t[6]), this.uvrect[1] = Math.min(t[1], t[3], t[5], t[7]), 
                this.uvrect[2] = Math.max(t[0], t[2], t[4], t[6]) - this.uvrect[0], this.uvrect[3] = Math.max(t[1], t[3], t[5], t[7]) - this.uvrect[1], 
                this._uv = t;
            }
        }, {
            key: "width",
            get: function get() {
                return this._w ? this._w : this.bitmap ? this.uv && this.uv !== $t.DEF_UV ? (this.uv[2] - this.uv[0]) * this.bitmap.width : this.bitmap.width : 0;
            },
            set: function set(t) {
                this._w = t, this.sourceWidth || (this.sourceWidth = t);
            }
        }, {
            key: "height",
            get: function get() {
                return this._h ? this._h : this.bitmap ? this.uv && this.uv !== $t.DEF_UV ? (this.uv[5] - this.uv[1]) * this.bitmap.height : this.bitmap.height : 0;
            },
            set: function set(t) {
                this._h = t, this.sourceHeight || (this.sourceHeight = t);
            }
        }, {
            key: "bitmap",
            get: function get() {
                return this._bitmap;
            },
            set: function set(t) {
                this._bitmap && this._bitmap._removeReference(this._referenceCount), this._bitmap = t, 
                t && t._addReference(this._referenceCount);
            }
        }, {
            key: "destroyed",
            get: function get() {
                return this._destroyed;
            }
        } ], [ {
            key: "moveUV",
            value: function moveUV(t, e, i) {
                for (var s = 0; s < 8; s += 2) {
                    i[s] += t, i[s + 1] += e;
                }
                return i;
            }
        }, {
            key: "create",
            value: function create(t, e, i, s, r) {
                var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
                var n = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
                var h = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
                var o = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
                return $t._create(t, e, i, s, r, a, n, h, o);
            }
        }, {
            key: "_create",
            value: function _create(t, e, i, s, r) {
                var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
                var n = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
                var h = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
                var o = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
                var l = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : null;
                var _, u = t instanceof $t, c = u ? t.uv : $t.DEF_UV, d = u ? t.bitmap : t;
                d.width && e + s > d.width && (s = d.width - e), d.height && i + r > d.height && (r = d.height - i), 
                l ? (_ = l).setTo(d, null, h || s, o || r) : _ = new $t(d, null, h || s, o || r), 
                _.width = s, _.height = r, _.offsetX = a, _.offsetY = n;
                var p = 1 / d.width, f = 1 / d.height;
                e *= p, i *= f, s *= p, r *= f;
                var m = _.uv[0], g = _.uv[1], T = _.uv[4], v = _.uv[5], x = T - m, y = v - g, E = $t.moveUV(c[0], c[1], [ e, i, e + s, i, e + s, i + r, e, i + r ]);
                _.uv = new Float32Array([ m + E[0] * x, g + E[1] * y, T - (1 - E[2]) * x, g + E[3] * y, T - (1 - E[4]) * x, v - (1 - E[5]) * y, m + E[6] * x, v - (1 - E[7]) * y ]);
                var A = d.scaleRate;
                return A && 1 != A ? (_.sourceWidth /= A, _.sourceHeight /= A, _.width /= A, _.height /= A, 
                _.scaleRate = A) : _.scaleRate = 1, _;
            }
        }, {
            key: "createFromTexture",
            value: function createFromTexture(t, e, i, s, r) {
                var a = t.scaleRate;
                1 != a && (e *= a, i *= a, s *= a, r *= a);
                var n = m.TEMP.setTo(e - t.offsetX, i - t.offsetY, s, r), h = n.intersection($t._rect1.setTo(0, 0, t.width, t.height), $t._rect2);
                return h ? $t.create(t, h.x, h.y, h.width, h.height, h.x - n.x, h.y - n.y, s, r) : null;
            }
        } ]);
        return $t;
    }(S);
    $t.DEF_UV = new Float32Array([ 0, 0, 1, 0, 1, 1, 0, 1 ]), $t.NO_UV = new Float32Array([ 0, 0, 0, 0, 0, 0, 0, 0 ]), 
    $t.INV_UV = new Float32Array([ 0, 1, 1, 1, 1, 0, 0, 0 ]), $t._rect1 = new m(), $t._rect2 = new m();
    var Jt = /* */ function() {
        function Jt(t) {
            (0, _classCallCheck2.default)(this, Jt);
            this._font = "14px Arial", this._family = "Arial", this._size = 14, this._italic = !1, 
            this._bold = !1, this._id = Jt._gfontID++, this.setFont(t || this._font);
        }
        (0, _createClass2.default)(Jt, [ {
            key: "setFont",
            value: function setFont(t) {
                this._font = t;
                var e = t.split(" "), i = e.length;
                if (i < 2) 1 == i && e[0].indexOf("px") > 0 && (this._size = parseInt(e[0])); else {
                    for (var s = -1, r = 0; r < i; r++) {
                        if (e[r].indexOf("px") > 0 || e[r].indexOf("pt") > 0) {
                            s = r, this._size = parseInt(e[r]), this._size <= 0 && (console.error("font parse error:" + t), 
                            this._size = 14);
                            break;
                        }
                    }
                    var a = s + 1, n = e[a];
                    for (a++; a < i; a++) {
                        n += " " + e[a];
                    }
                    this._family = n.split(",")[0], this._italic = e.indexOf("italic") >= 0, this._bold = e.indexOf("bold") >= 0;
                }
            }
        } ], [ {
            key: "Parse",
            value: function Parse(t) {
                if (t === Jt._lastFont) return Jt._lastFontInfo;
                var e = Jt._cache[t];
                return e || (e = Jt._cache[t] = new Jt(t)), Jt._lastFont = t, Jt._lastFontInfo = e, 
                e;
            }
        } ]);
        return Jt;
    }();
    Jt.EMPTY = new Jt(null), Jt._cache = {}, Jt._gfontID = 0, Jt._lastFont = "";
    var te = /* */ function() {
        function te() {
            (0, _classCallCheck2.default)(this, te);
            this.save = [], this.toUpperCase = null, this.width = -1, this.pageChars = [], this.startID = 0, 
            this.startIDStroke = 0, this.lastGCCnt = 0, this.splitRender = !1, this.scalex = 1, 
            this.scaley = 1;
        }
        (0, _createClass2.default)(te, [ {
            key: "setText",
            value: function setText(t) {
                this.changed = !0, this._text = t, this.width = -1, this.cleanCache();
            }
        }, {
            key: "toString",
            value: function toString() {
                return this._text;
            }
        }, {
            key: "charCodeAt",
            value: function charCodeAt(t) {
                return this._text ? this._text.charCodeAt(t) : NaN;
            }
        }, {
            key: "charAt",
            value: function charAt(t) {
                return this._text ? this._text.charAt(t) : null;
            }
        }, {
            key: "cleanCache",
            value: function cleanCache() {
                var t = this.pageChars;
                for (var e in t) {
                    var _s4 = t[e];
                    var i = _s4.tex;
                    1 == _s4.words.length && i && i.ri && i.destroy();
                }
                this.pageChars = [], this.startID = 0, this.scalex = 1, this.scaley = 1;
            }
        }, {
            key: "length",
            get: function get() {
                return this._text ? this._text.length : 0;
            }
        } ]);
        return te;
    }();
    var ee = /* */ function() {
        function ee() {
            (0, _classCallCheck2.default)(this, ee);
            this.char = "", this.deleted = !1, this.uv = new Array(8), this.pos = 0, this.orix = 0, 
            this.oriy = 0, this.touchTick = 0, this.isSpace = !1;
        }
        (0, _createClass2.default)(ee, [ {
            key: "touch",
            value: function touch() {
                var t = Et.loopCount;
                this.touchTick != t && this.tex.touchRect(this, t), this.touchTick = t;
            }
        } ]);
        return ee;
    }();
    var ie = /* */ function() {
        function ie() {
            (0, _classCallCheck2.default)(this, ie);
            this.fontsz = 16;
        }
        (0, _createClass2.default)(ie, [ {
            key: "getWidth",
            value: function getWidth(t, e) {
                return 0;
            }
        }, {
            key: "scale",
            value: function scale(t, e) {}
        }, {
            key: "getCharBmp",
            value: function getCharBmp(t, e, i, s, r, a, n, h, o, l) {
                var _ = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : null;
                return null;
            }
        }, {
            key: "canvasWidth",
            get: function get() {
                return 0;
            },
            set: function set(t) {}
        } ]);
        return ie;
    }();
    var se = /* */ function() {
        function se() {
            (0, _classCallCheck2.default)(this, se);
        }
        (0, _createClass2.default)(se, null, [ {
            key: "__init__",
            value: function __init__() {
                var t = window.Laya || i.Laya;
                if (se._window) return se._window;
                var e = se._window = window, s = se._document = e.document, r = se.userAgent = e.navigator.userAgent, a = e.navigator.maxTouchPoints || 0, n = e.navigator.platform;
                "my" in se.window && (r.indexOf("TB/") > -1 || r.indexOf("Taobao/") > -1 || r.indexOf("TM/") > -1 ? (window.tbMiniGame(t, t), 
                t.TBMiniAdapter ? t.TBMiniAdapter.enable() : console.error("请先添加淘宝适配库,详细教程：https://ldc2.layabox.com/doc/?language=zh&nav=zh-ts-5-6-0")) : r.indexOf("AlipayMiniGame") > -1 && (window.aliPayMiniGame(t, t), 
                t.ALIMiniAdapter ? t.ALIMiniAdapter.enable() : console.error("请先添加阿里小游戏适配库,详细教程：https://ldc2.layabox.com/doc/?language=zh&nav=zh-ts-5-6-0"))), 
                -1 == r.indexOf("OPPO") && r.indexOf("MiniGame") > -1 && "wx" in se.window && ("tt" in se.window ? (window.ttMiniGame(t, t), 
                t.TTMiniAdapter ? t.TTMiniAdapter.enable() : console.error("请引入字节跳动小游戏的适配库")) : "bl" in se.window ? (window.biliMiniGame(t, t), 
                t.BLMiniAdapter ? t.BLMiniAdapter.enable() : console.error("请引入bilibili小游戏的适配库,详细教程：https://ldc2.layabox.com/doc/?language=zh&nav=zh-ts-5-7-0")) : "qq" in se.window ? (window.qqMiniGame(t, t), 
                t.QQMiniAdapter ? t.QQMiniAdapter.enable() : console.error("请引入手机QQ小游戏的适配库,详细教程：https://ldc2.layabox.com/doc/?language=zh&nav=zh-ts-5-0-0")) : (window.wxMiniGame(t, t), 
                t.MiniAdpter ? t.MiniAdpter.enable() : console.error("请先添加小游戏适配库,详细教程：https://ldc2.layabox.com/doc/?nav=zh-ts-5-0-0"))), 
                "hbs" in se.window && (window.hwMiniGame(t, t), t.HWMiniAdapter ? t.HWMiniAdapter.enable() : console.error("请先添加小游戏适配库!")), 
                r.indexOf("SwanGame") > -1 && (window.bdMiniGame(t, t), t.BMiniAdapter ? t.BMiniAdapter.enable() : console.error("请先添加百度小游戏适配库,详细教程：https://ldc2.layabox.com/doc/?language=zh&nav=zh-ts-5-1-0")), 
                r.indexOf("QuickGame") > -1 && (window.miMiniGame(t, t), t.KGMiniAdapter ? t.KGMiniAdapter.enable() : console.error("请先添加小米小游戏适配库,详细教程：https://ldc2.layabox.com/doc/?language=zh&nav=zh-ts-5-2-0")), 
                r.indexOf("OPPO") > -1 && r.indexOf("MiniGame") > -1 && (window.qgMiniGame(t, t), 
                t.QGMiniAdapter ? t.QGMiniAdapter.enable() : console.error("请先添加OPPO小游戏适配库,详细教程：https://ldc2.layabox.com/doc/?language=zh&nav=zh-ts-5-3-0")), 
                r.indexOf("VVGame") > -1 && (window.vvMiniGame(t, t), t.VVMiniAdapter ? t.VVMiniAdapter.enable() : console.error("请先添加VIVO小游戏适配库,详细教程：https://ldc2.layabox.com/doc/?language=zh&nav=zh-ts-5-4-0")), 
                e.trace = console.log, e.requestAnimationFrame = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function(t) {
                    return e.setTimeout(t, 1e3 / 60);
                };
                var h = s.body.style;
                h.margin = 0, h.overflow = "hidden", h["-webkit-user-select"] = "none", h["-webkit-tap-highlight-color"] = "rgba(200,200,200,0)";
                for (var o = s.getElementsByTagName("meta"), l = 0, _ = !1, u = "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"; l < o.length; ) {
                    var c = o[l];
                    if ("viewport" == c.name) {
                        c.content = u, _ = !0;
                        break;
                    }
                    l++;
                }
                return _ || ((c = s.createElement("meta")).name = "viewport", c.content = u, s.getElementsByTagName("head")[0].appendChild(c)), 
                se.onMobile = !!window.conch || r.indexOf("Mobile") > -1, se.onIOS = !!r.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), 
                se.onIPhone = r.indexOf("iPhone") > -1, se.onMac = r.indexOf("Mac OS X") > -1, se.onIPad = r.indexOf("iPad") > -1 || "MacIntel" === n && a > 1, 
                se.onAndroid = r.indexOf("Android") > -1 || r.indexOf("Adr") > -1, se.onWP = r.indexOf("Windows Phone") > -1, 
                se.onQQBrowser = r.indexOf("QQBrowser") > -1, se.onMQQBrowser = r.indexOf("MQQBrowser") > -1 || r.indexOf("Mobile") > -1 && r.indexOf("QQ") > -1, 
                se.onIE = !!e.ActiveXObject || "ActiveXObject" in e, se.onWeiXin = r.indexOf("MicroMessenger") > -1, 
                se.onSafari = r.indexOf("Safari") > -1, se.onPC = !se.onMobile, se.onMiniGame = r.indexOf("MiniGame") > -1, 
                se.onBDMiniGame = r.indexOf("SwanGame") > -1, se.onLayaRuntime = !!window.conch, 
                r.indexOf("OPPO") > -1 && r.indexOf("MiniGame") > -1 ? (se.onQGMiniGame = !0, se.onMiniGame = !1) : "qq" in se.window && r.indexOf("MiniGame") > -1 ? (se.onQQMiniGame = !0, 
                se.onMiniGame = !1) : "bl" in se.window && r.indexOf("MiniGame") > -1 ? (se.onBLMiniGame = !0, 
                se.onMiniGame = !1) : "tt" in se.window && r.indexOf("MiniGame") > -1 && (se.onTTMiniGame = !0, 
                se.onMiniGame = !1), se.onHWMiniGame = "hbs" in se.window, se.onVVMiniGame = r.indexOf("VVGame") > -1, 
                se.onKGMiniGame = r.indexOf("QuickGame") > -1, r.indexOf("AlipayMiniGame") > -1 && (se.onAlipayMiniGame = !0, 
                se.onMiniGame = !1), (r.indexOf("TB/") > -1 || r.indexOf("Taobao/") > -1 || r.indexOf("TM/") > -1) && (se.onTBMiniGame = !0), 
                e;
            }
        }, {
            key: "createElement",
            value: function createElement(t) {
                return se.__init__(), se._document.createElement(t);
            }
        }, {
            key: "getElementById",
            value: function getElementById(t) {
                return se.__init__(), se._document.getElementById(t);
            }
        }, {
            key: "removeElement",
            value: function removeElement(t) {
                t && t.parentNode && t.parentNode.removeChild(t);
            }
        }, {
            key: "now",
            value: function now() {
                return Date.now();
            }
        }, {
            key: "_isMiniGame",
            get: function get() {
                return se.onMiniGame || se.onBDMiniGame || se.onQGMiniGame || se.onKGMiniGame || se.onVVMiniGame || se.onAlipayMiniGame || se.onQQMiniGame || se.onBLMiniGame || se.onTTMiniGame || se.onHWMiniGame || se.onTBMiniGame;
            }
        }, {
            key: "clientWidth",
            get: function get() {
                return se.__init__(), se._window.innerWidth || se._document.body.clientWidth;
            }
        }, {
            key: "clientHeight",
            get: function get() {
                return se.__init__(), se._window.innerHeight || se._document.body.clientHeight || se._document.documentElement.clientHeight;
            }
        }, {
            key: "width",
            get: function get() {
                return se.__init__(), (i.stage && i.stage.canvasRotation ? se.clientHeight : se.clientWidth) * se.pixelRatio;
            }
        }, {
            key: "height",
            get: function get() {
                return se.__init__(), (i.stage && i.stage.canvasRotation ? se.clientWidth : se.clientHeight) * se.pixelRatio;
            }
        }, {
            key: "pixelRatio",
            get: function get() {
                return se._pixelRatio < 0 && (se.__init__(), se.userAgent.indexOf("Mozilla/6.0(Linux; Android 6.0; HUAWEI NXT-AL10 Build/HUAWEINXT-AL10)") > -1 ? se._pixelRatio = 2 : (se._pixelRatio = se._window.devicePixelRatio || 1, 
                se._pixelRatio < 1 && (se._pixelRatio = 1))), se._pixelRatio;
            }
        }, {
            key: "container",
            get: function get() {
                return se._container || (se.__init__(), se._container = se.createElement("div"), 
                se._container.id = "layaContainer", se._document.body.appendChild(se._container)), 
                se._container;
            },
            set: function set(t) {
                se._container = t;
            }
        }, {
            key: "window",
            get: function get() {
                return se._window || se.__init__();
            }
        }, {
            key: "document",
            get: function get() {
                return se.__init__(), se._document;
            }
        } ]);
        return se;
    }();
    se._pixelRatio = -1, se.mainCanvas = null, se.hanzi = new RegExp("^[一-龥]$"), se.fontMap = {}, 
    se.measureText = function(t, e) {
        var i = se.hanzi.test(t);
        if (i && se.fontMap[e]) return se.fontMap[e];
        var s = se.context;
        s.font = e;
        var r = s.measureText(t);
        return i && (se.fontMap[e] = r), r;
    };
    var re = /* */ function(_ie) {
        (0, _inherits2.default)(re, _ie);
        var _super24 = _createSuper(re);
        function re(t, e) {
            var _this19;
            var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
            var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
            var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
            (0, _classCallCheck2.default)(this, re);
            _this19 = _super24.call(this), _this19.ctx = null, _this19.lastScaleX = 1, _this19.lastScaleY = 1, 
            _this19.maxTexW = 0, _this19.maxTexH = 0, _this19.scaleFontSize = !0, _this19.showDbgInfo = !1, 
            _this19.supportImageData = !0, _this19.maxTexW = t, _this19.maxTexH = e, _this19.scaleFontSize = i, 
            _this19.supportImageData = s, _this19.showDbgInfo = r, re.canvas || (re.canvas = se.createElement("canvas"), 
            re.canvas.width = 1024, re.canvas.height = 512, re.canvas.style.left = "-10000px", 
            re.canvas.style.position = "absolute", document.body.appendChild(re.canvas), _this19.ctx = re.canvas.getContext("2d"));
            return _this19;
        }
        (0, _createClass2.default)(re, [ {
            key: "getWidth",
            value: function getWidth(t, e) {
                return this.ctx ? (this.ctx._lastFont != t && (this.ctx.font = t, this.ctx._lastFont = t), 
                this.ctx.measureText(e).width) : 0;
            }
        }, {
            key: "scale",
            value: function scale(t, e) {
                if (!this.supportImageData) return this.lastScaleX = t, void (this.lastScaleY = e);
                this.lastScaleX == t && this.lastScaleY == e || (this.ctx.setTransform(t, 0, 0, e, 0, 0), 
                this.lastScaleX = t, this.lastScaleY = e);
            }
        }, {
            key: "getCharBmp",
            value: function getCharBmp(t, e, i, s, r, a, n, h, o, l) {
                var _ = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : null;
                if (!this.supportImageData) return this.getCharCanvas(t, e, i, s, r, a, n, h, o, l);
                var u = this.ctx, c = this.fontsz;
                u.font != e && (u.font = e, u._lastFont = e), a.width = u.measureText(t).width;
                var d = a.width * this.lastScaleX, p = a.height * this.lastScaleY;
                d += (n + o) * this.lastScaleX, p += (h + l) * this.lastScaleY, d = Math.ceil(d), 
                p = Math.ceil(p);
                var f = (d = Math.min(d, re.canvas.width)) + 2 * i + 1, m = (p = Math.min(p, re.canvas.height)) + 2 * i + 1;
                _ && (f = Math.max(f, _[0] + _[2] + 1), m = Math.max(m, _[1] + _[3] + 1)), u.clearRect(0, 0, f / this.lastScaleX + 1, m / this.lastScaleY + 1), 
                u.save(), u.textBaseline = "middle", i > 0 && (u.strokeStyle = r, u.lineWidth = i, 
                u.strokeText(t, n, h + c / 2)), s && (u.fillStyle = s, u.fillText(t, n, h + c / 2)), 
                this.showDbgInfo && (u.strokeStyle = "#ff0000", u.strokeRect(1, 1, d - 2, p - 2), 
                u.strokeStyle = "#00ff00", u.strokeRect(n, h, a.width, a.height)), _ && (-1 == _[2] && (_[2] = Math.ceil((a.width + 2 * i) * this.lastScaleX)), 
                _[2] <= 0 && (_[2] = 1));
                var g = _ ? u.getImageData(_[0], _[1], _[2], _[3] + 1) : u.getImageData(0, 0, d, p + 1);
                return u.restore(), a.bmpWidth = g.width, a.bmpHeight = g.height, g;
            }
        }, {
            key: "getCharCanvas",
            value: function getCharCanvas(t, e, i, s, r, a, n, h, o, l) {
                var _ = this.ctx;
                _.font != e && (_.font = e, _._lastFont = e), a.width = _.measureText(t).width;
                var u = a.width * this.lastScaleX, c = a.height * this.lastScaleY;
                u += (n + o) * this.lastScaleX, c += (h + l) * this.lastScaleY + 1, u = Math.min(u, this.maxTexW), 
                c = Math.min(c, this.maxTexH), re.canvas.width = Math.min(u + 1, this.maxTexW), 
                re.canvas.height = Math.min(c + 1, this.maxTexH), _.font = e, _.clearRect(0, 0, u + 1 + i, c + 1 + i), 
                _.setTransform(1, 0, 0, 1, 0, 0), _.save(), this.scaleFontSize && _.scale(this.lastScaleX, this.lastScaleY), 
                _.translate(n, h), _.textAlign = "left";
                var d = this.fontsz;
                return _.textBaseline = "middle", i > 0 ? (_.strokeStyle = r, _.fillStyle = s, _.lineWidth = i, 
                _.fillAndStrokeText ? _.fillAndStrokeText(t, 0, d / 2) : (_.strokeText(t, 0, d / 2), 
                _.fillText(t, 0, d / 2))) : s && (_.fillStyle = s, _.fillText(t, 0, d / 2)), this.showDbgInfo && (_.strokeStyle = "#ff0000", 
                _.strokeRect(0, 0, u, c), _.strokeStyle = "#00ff00", _.strokeRect(0, 0, a.width, a.height)), 
                _.restore(), a.bmpWidth = re.canvas.width, a.bmpHeight = re.canvas.height, re.canvas;
            }
        }, {
            key: "canvasWidth",
            get: function get() {
                return re.canvas.width;
            },
            set: function set(t) {
                re.canvas.width != t && (re.canvas.width = t, t > 2048 && console.warn("画文字设置的宽度太大，超过2048了"), 
                this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.scale(this.lastScaleX, this.lastScaleY));
            }
        } ]);
        return re;
    }(ie);
    re.canvas = null;
    var ae = /* */ function(_ie2) {
        (0, _inherits2.default)(ae, _ie2);
        var _super25 = _createSuper(ae);
        function ae() {
            var _this20;
            (0, _classCallCheck2.default)(this, ae);
            _this20 = _super25.call(this), _this20.lastFont = "", _this20.lastScaleX = 1, _this20.lastScaleY = 1;
            return _this20;
        }
        (0, _createClass2.default)(ae, [ {
            key: "getWidth",
            value: function getWidth(t, e) {
                return window.conchTextCanvas ? (window.conchTextCanvas.font = t, this.lastFont = t, 
                window.conchTextCanvas.measureText(e).width) : 0;
            }
        }, {
            key: "scale",
            value: function scale(t, e) {
                this.lastScaleX = t, this.lastScaleY = e;
            }
        }, {
            key: "getCharBmp",
            value: function getCharBmp(t, e, i, s, r, a, n, h, o, l) {
                var _ = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : null;
                if (!window.conchTextCanvas) return null;
                window.conchTextCanvas.font = e, this.lastFont = e;
                a.width = window.conchTextCanvas.measureText(t).width, a.height;
                window.conchTextCanvas.scale && window.conchTextCanvas.scale(this.lastScaleX, this.lastScaleY);
                var u = J.create(r).numColor, c = J.create(s).numColor, d = window.conchTextCanvas.getTextBitmapData(t, c, i > 2 ? 2 : i, u);
                return a.bmpWidth = d.width, a.bmpHeight = d.height, d;
            }
        } ]);
        return ae;
    }(ie);
    var ne = /* */ function() {
        function ne() {
            (0, _classCallCheck2.default)(this, ne);
            this.fontSizeInfo = {}, this.mapFont = {}, this.fontID = 0, this.fontScaleX = 1, 
            this.fontScaleY = 1, this._curStrPos = 0, this.textAtlases = [], this.isoTextures = [], 
            this.lastFont = null, this.fontSizeW = 0, this.fontSizeH = 0, this.fontSizeOffX = 0, 
            this.fontSizeOffY = 0, this.renderPerChar = !0, this.tmpAtlasPos = new f(), this.textureMem = 0, 
            i.TextAtlas = Zt;
            var t = !1, e = i.Laya.MiniAdpter;
            e && e.systemInfo && e.systemInfo.system && (t = "ios 10.1.1" === e.systemInfo.system.toLowerCase()), 
            (i.Browser.onMiniGame || i.Browser.onTTMiniGame || i.Browser.onBLMiniGame || i.Browser.onAlipayMiniGame || i.Browser.onTBMiniGame) && !t && (ne.isWan1Wan = !0), 
            this.charRender = i.Render.isConchApp ? new ae() : new re(2048, 2048, ne.scaleFontWithCtx, !ne.isWan1Wan, !1), 
            ne.textRenderInst = this, i.Laya.textRender = this, ne.atlasWidth2 = ne.atlasWidth * ne.atlasWidth;
        }
        (0, _createClass2.default)(ne, [ {
            key: "setFont",
            value: function setFont(t) {
                if (this.lastFont != t) {
                    this.lastFont = t;
                    var e = this.getFontSizeInfo(t._family), i = e >> 24, s = e >> 16 & 255, r = e >> 8 & 255, a = 255 & e, n = t._size / ne.standardFontSize;
                    this.fontSizeOffX = Math.ceil(i * n), this.fontSizeOffY = Math.ceil(s * n), this.fontSizeW = Math.ceil(r * n), 
                    this.fontSizeH = Math.ceil(a * n), t._font.indexOf("italic") >= 0 ? this.fontStr = t._font.replace("italic", "") : this.fontStr = t._font;
                }
            }
        }, {
            key: "getNextChar",
            value: function getNextChar(t) {
                var e = t.length, i = this._curStrPos;
                if (!t.substring) return null;
                if (i >= e) return null;
                for (var s = i, r = 0; s < e; s++) {
                    var a = t.charCodeAt(s);
                    if (a >>> 11 == 27) {
                        if (1 == r) break;
                        r = 1, s++;
                    } else if (65038 === a || 65039 === a) ; else if (8205 == a) r = 2; else if (0 == r) r = 1; else if (1 == r) break;
                }
                return this._curStrPos = s, t.substring(i, s);
            }
        }, {
            key: "filltext",
            value: function filltext(t, e, s, r, a, n, h, o, l) {
                var _ = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 0;
                if (!(e.length <= 0)) {
                    var u = Jt.Parse(a), c = 0;
                    switch (l) {
                      case "center":
                        c = i.Context.ENUM_TEXTALIGN_CENTER;
                        break;

                      case "right":
                        c = i.Context.ENUM_TEXTALIGN_RIGHT;
                    }
                    this._fast_filltext(t, e, null, s, r, u, n, h, o, c, _);
                }
            }
        }, {
            key: "fillWords",
            value: function fillWords(t, e, i, s, r, a, n, h) {
                if (e && !(e.length <= 0)) {
                    var o = "string" == typeof r ? Jt.Parse(r) : r;
                    this._fast_filltext(t, null, e, i, s, o, a, n, h, 0, 0);
                }
            }
        }, {
            key: "_fast_filltext",
            value: function _fast_filltext(t, e, s, r, a, n, h, o, l, _) {
                var u = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : 0;
                if ((!e || e.length >= 1) && !(s && s.length < 1)) {
                    if (l < 0 && (l = 0), this.setFont(n), this.fontScaleX = this.fontScaleY = 1, ne.scaleFontWithCtx) {
                        var c = 1, d = 1;
                        if (i.Render.isConchApp && !window.conchTextCanvas.scale || (c = t.getMatScaleX(), 
                        d = t.getMatScaleY()), c < 1e-4 || d < .1) return;
                        c > 1 && (this.fontScaleX = c), d > 1 && (this.fontScaleY = d);
                    }
                    n._italic && (t._italicDeg = 13);
                    var p = e, f = !s && e instanceof te, m = e && e.toString(), g = !!s, T = f ? p.pageChars : [], v = 0;
                    switch (f ? (m = p._text, (v = p.width) < 0 && (v = p.width = this.charRender.getWidth(this.fontStr, m))) : v = m ? this.charRender.getWidth(this.fontStr, m) : 0, 
                    _) {
                      case i.Context.ENUM_TEXTALIGN_CENTER:
                        r -= v / 2;
                        break;

                      case i.Context.ENUM_TEXTALIGN_RIGHT:
                        r -= v;
                    }
                    p && T && this.hasFreedText(T) && (T = p.pageChars = []);
                    var x = null, y = this.renderPerChar = !f || ne.forceSplitRender || g || f && p.splitRender;
                    if (!T || T.length < 1) if (f && (p.scalex = this.fontScaleX, p.scaley = this.fontScaleY), 
                    y) {
                        var E, A = 0, C = 0;
                        for (this._curStrPos = 0; ;) {
                            if (s) {
                                var R = s[this._curStrPos++];
                                R ? (E = R.char, A = R.x, C = R.y) : E = null;
                            } else E = this.getNextChar(m);
                            if (!E) break;
                            if (!(x = this.getCharRenderInfo(E, n, h, o, l, !1))) break;
                            if (x.isSpace) ; else {
                                var b = T[x.tex.id];
                                if (b) b = b.words; else {
                                    var S = {
                                        texgen: x.tex.genID,
                                        tex: x.tex,
                                        words: new Array()
                                    };
                                    T[x.tex.id] = S, b = S.words;
                                }
                                b.push({
                                    ri: x,
                                    x: A,
                                    y: C,
                                    w: x.bmpWidth / this.fontScaleX,
                                    h: x.bmpHeight / this.fontScaleY
                                }), A += x.width;
                            }
                        }
                    } else {
                        var w = i.Render.isConchApp ? 0 : n._size / 3 | 0, M = ne.noAtlas || (v + w + w) * this.fontScaleX > ne.atlasWidth;
                        x = this.getCharRenderInfo(m, n, h, o, l, M), T[0] = {
                            texgen: x.tex.genID,
                            tex: x.tex,
                            words: [ {
                                ri: x,
                                x: 0,
                                y: 0,
                                w: x.bmpWidth / this.fontScaleX,
                                h: x.bmpHeight / this.fontScaleY
                            } ]
                        };
                    }
                    this._drawResortedWords(t, r, a, T), t._italicDeg = 0;
                }
            }
        }, {
            key: "_drawResortedWords",
            value: function _drawResortedWords(t, e, s, r) {
                var a = !!t._charSubmitCache && t._charSubmitCache._enable, n = t._curMat;
                for (var h in r) {
                    var o = r[h];
                    if (o) {
                        var l = o.words, _ = l.length;
                        if (!(_ <= 0)) for (var u = r[h].tex, c = 0; c < _; c++) {
                            var d = l[c], p = d.ri;
                            if (!p.isSpace) {
                                if (p.touch(), t.drawTexAlign = !0, i.Render.isConchApp) t._drawTextureM(u.texture, e + d.x - p.orix, s + d.y - p.oriy, d.w, d.h, null, 1, p.uv); else {
                                    var _i5 = u;
                                    t._inner_drawTexture(_i5.texture, _i5.id, e + d.x - p.orix, s + d.y - p.oriy, d.w, d.h, n, p.uv, 1, a);
                                }
                                t.touches && t.touches.push(p);
                            }
                        }
                    }
                }
            }
        }, {
            key: "hasFreedText",
            value: function hasFreedText(t) {
                for (var _s5 in t) {
                    var e = t[_s5];
                    if (e) {
                        var i = e.tex;
                        if (i.__destroyed || i.genID != e.texgen) return !0;
                    }
                }
                return !1;
            }
        }, {
            key: "getCharRenderInfo",
            value: function getCharRenderInfo(t, e, s, r, a) {
                var n = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !1;
                var h = this.mapFont[e._family];
                null == h && (this.mapFont[e._family] = h = this.fontID++);
                var o = t + "_" + h + "_" + e._size + "_" + s;
                a > 0 && (o += "_" + r + a), e._bold && (o += "P"), 1 == this.fontScaleX && 1 == this.fontScaleY || (o += (20 * this.fontScaleX | 0) + "_" + (20 * this.fontScaleY | 0));
                var l, _, u = 0, c = this.textAtlases.length;
                if (!n) for (u = 0; u < c; u++) {
                    if (l = (_ = this.textAtlases[u]).charMaps[o]) return l.touch(), l;
                }
                l = new ee(), this.charRender.scale(this.fontScaleX, this.fontScaleY), l.char = t, 
                l.height = e._size;
                var d = i.Render.isConchApp ? 0 : e._size / 3 | 0, p = null;
                a || (a = 0);
                var f = Math.ceil((this.charRender.getWidth(this.fontStr, t) + 2 * a) * this.fontScaleX);
                if (f > this.charRender.canvasWidth && (this.charRender.canvasWidth = Math.min(2048, f + 2 * d)), 
                n) {
                    if (this.charRender.fontsz = e._size, p = this.charRender.getCharBmp(t, this.fontStr, a, s, r, l, d, d, d, d, null)) {
                        var m = qt.getTextTexture(p.width, p.height);
                        m.addChar(p, 0, 0, l.uv), l.tex = m, l.orix = d, l.oriy = d, m.ri = l, this.isoTextures.push(m);
                    }
                } else {
                    var g = t.length, T = 1 * a, v = Math.ceil((this.fontSizeW + 2 * T) * this.fontScaleX), x = Math.ceil((this.fontSizeH + 2 * T) * this.fontScaleY);
                    ne.imgdtRect[0] = (d - this.fontSizeOffX - T) * this.fontScaleX | 0, ne.imgdtRect[1] = (d - this.fontSizeOffY - T) * this.fontScaleY | 0, 
                    this.renderPerChar || 1 == g ? (ne.imgdtRect[2] = Math.max(f, v), ne.imgdtRect[3] = Math.max(f, x)) : (ne.imgdtRect[2] = -1, 
                    ne.imgdtRect[3] = x), this.charRender.fontsz = e._size, (p = this.charRender.getCharBmp(t, this.fontStr, a, s, r, l, d, d, d, d, ne.imgdtRect)) && (_ = this.addBmpData(p, l), 
                    ne.isWan1Wan ? (l.orix = d, l.oriy = d) : (l.orix = this.fontSizeOffX + T, l.oriy = this.fontSizeOffY + T), 
                    _.charMaps[o] = l);
                }
                return l;
            }
        }, {
            key: "addBmpData",
            value: function addBmpData(t, e) {
                for (var i, s = t.width, r = t.height, a = this.textAtlases.length, n = !1, h = 0; h < a && !(n = (i = this.textAtlases[h]).getAEmpty(s, r, this.tmpAtlasPos)); h++) {}
                if (!n) {
                    if (i = new Zt(), this.textAtlases.push(i), !(n = i.getAEmpty(s, r, this.tmpAtlasPos))) throw "err1";
                    this.cleanAtlases();
                }
                return n && (i.texture.addChar(t, this.tmpAtlasPos.x, this.tmpAtlasPos.y, e.uv), 
                e.tex = i.texture), i;
            }
        }, {
            key: "GC",
            value: function GC() {
                for (var t = 0, e = this.textAtlases.length, i = ne.destroyAtlasDt, s = 0, r = Et.loopCount, a = -1, n = 0, h = null, o = null; t < e; t++) {
                    if (h = (o = this.textAtlases[t]).texture) {
                        h.curUsedCovRate, s += h.curUsedCovRateAtlas;
                        var l = o.usedRate - h.curUsedCovRateAtlas;
                        n < l && (n = l, a = t);
                    }
                    r - o.texture.lastTouchTm > i && (ne.showLog && console.log(o.texture.id), o.destroy(), 
                    this.textAtlases[t] = this.textAtlases[e - 1], e--, t--, a = -1);
                }
                for (this.textAtlases.length = e, e = this.isoTextures.length, t = 0; t < e; t++) {
                    r - (h = this.isoTextures[t]).lastTouchTm > ne.destroyUnusedTextureDt && (h.ri.deleted = !0, 
                    h.ri.tex = null, h.destroy(), this.isoTextures[t] = this.isoTextures[e - 1], e--, 
                    t--);
                }
                this.isoTextures.length = e;
                var _ = this.textAtlases.length > 1 && this.textAtlases.length - s >= 2;
                (ne.atlasWidth * ne.atlasWidth * 4 * this.textAtlases.length > ne.cleanMem || _ || ne.simClean) && (ne.simClean = !1, 
                ne.showLog && console.log("清理使用率低的贴图。总使用率:", s, ":", this.textAtlases.length, "最差贴图:" + a), 
                a >= 0 && ((o = this.textAtlases[a]).destroy(), this.textAtlases[a] = this.textAtlases[this.textAtlases.length - 1], 
                this.textAtlases.length = this.textAtlases.length - 1)), qt.clean();
            }
        }, {
            key: "cleanAtlases",
            value: function cleanAtlases() {}
        }, {
            key: "getCharBmp",
            value: function getCharBmp(t) {}
        }, {
            key: "checkBmpLine",
            value: function checkBmpLine(t, e, i, s) {
                this.bmpData32.buffer != t.data.buffer && (this.bmpData32 = new Uint32Array(t.data.buffer));
                for (var r = t.width * e + i, a = i; a < s; a++) {
                    if (0 != this.bmpData32[r++]) return !0;
                }
                return !1;
            }
        }, {
            key: "updateBbx",
            value: function updateBbx(t, e) {
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
                var s = t.width, r = t.height, a = 0, n = e[1], h = 0, o = n;
                if (this.checkBmpLine(t, n, 0, s)) for (;;) {
                    if ((o = (n + h) / 2 | 0) + 1 >= n) {
                        e[1] = o;
                        break;
                    }
                    this.checkBmpLine(t, o, 0, s) ? n = o : h = o;
                }
                if (e[3] > r) e[3] = r; else if (o = n = e[3], h = r, this.checkBmpLine(t, n, 0, s)) for (;;) {
                    if ((o = (n + h) / 2 | 0) - 1 <= n) {
                        e[3] = o;
                        break;
                    }
                    this.checkBmpLine(t, o, 0, s) ? n = o : h = o;
                }
                if (!i) {
                    var l = e[0], _ = s * e[1];
                    for (o = e[1]; o < e[3]; o++) {
                        for (a = 0; a < l; a++) {
                            if (0 != this.bmpData32[_ + a]) {
                                l = a;
                                break;
                            }
                        }
                        _ += s;
                    }
                    e[0] = l;
                    var u = e[2];
                    for (_ = s * e[1], o = e[1]; o < e[3]; o++) {
                        for (a = u; a < s; a++) {
                            if (0 != this.bmpData32[_ + a]) {
                                u = a;
                                break;
                            }
                        }
                        _ += s;
                    }
                    e[2] = u;
                }
            }
        }, {
            key: "getFontSizeInfo",
            value: function getFontSizeInfo(t) {
                var e = this.fontSizeInfo[t];
                if (null != e) return e;
                var s = "bold " + ne.standardFontSize + "px " + t;
                if (ne.isWan1Wan) {
                    this.fontSizeW = 1.5 * this.charRender.getWidth(s, "有"), this.fontSizeH = 1.5 * ne.standardFontSize;
                    var r = this.fontSizeW << 8 | this.fontSizeH;
                    return this.fontSizeInfo[t] = r, r;
                }
                ne.pixelBBX[0] = ne.standardFontSize / 2, ne.pixelBBX[1] = ne.standardFontSize / 2, 
                ne.pixelBBX[2] = ne.standardFontSize, ne.pixelBBX[3] = ne.standardFontSize;
                var a = 16, n = 16;
                this.charRender.scale(1, 1), ne.tmpRI.height = ne.standardFontSize, this.charRender.fontsz = ne.standardFontSize;
                var h = this.charRender.getCharBmp("g", s, 0, "red", null, ne.tmpRI, a, n, 16, 16);
                i.Render.isConchApp && (h.data = new Uint8ClampedArray(h.data)), this.bmpData32 = new Uint32Array(h.data.buffer), 
                this.updateBbx(h, ne.pixelBBX, !1), h = this.charRender.getCharBmp("有", s, 0, "red", null, ne.tmpRI, n, n, 16, 16), 
                i.Render.isConchApp && (h.data = new Uint8ClampedArray(h.data)), this.bmpData32 = new Uint32Array(h.data.buffer), 
                ne.pixelBBX[2] < a + ne.tmpRI.width && (ne.pixelBBX[2] = a + ne.tmpRI.width), this.updateBbx(h, ne.pixelBBX, !1), 
                i.Render.isConchApp && (a = 0, n = 0);
                var o = Math.max(a - ne.pixelBBX[0], 0) << 24 | Math.max(n - ne.pixelBBX[1], 0) << 16 | ne.pixelBBX[2] - ne.pixelBBX[0] << 8 | ne.pixelBBX[3] - ne.pixelBBX[1];
                return this.fontSizeInfo[t] = o, o;
            }
        }, {
            key: "printDbgInfo",
            value: function printDbgInfo() {
                for (var t in console.log("图集个数:" + this.textAtlases.length + ",每个图集大小:" + ne.atlasWidth + "x" + ne.atlasWidth, " 用canvas:", ne.isWan1Wan), 
                console.log("图集占用空间:" + ne.atlasWidth * ne.atlasWidth * 4 / 1024 / 1024 * this.textAtlases.length + "M"), 
                console.log("缓存用到的字体:"), this.mapFont) {
                    var e = this.getFontSizeInfo(t), i = e >> 24, s = e >> 16 & 255, r = e >> 8 & 255, a = 255 & e;
                    console.log("    " + t, " off:", i, s, " size:", r, a);
                }
                var n = 0;
                console.log("缓存数据:");
                var h = 0, o = 0;
                this.textAtlases.forEach(function(t) {
                    var e = t.texture.id, i = Et.loopCount - t.texture.lastTouchTm, s = i > 0 ? i + "帧以前" : "当前帧";
                    for (var r in h += t.texture.curUsedCovRate, o += t.texture.curUsedCovRateAtlas, 
                    console.log("--图集(id:" + e + ",当前使用率:" + (1e3 * t.texture.curUsedCovRate | 0) + "‰", "当前图集使用率:", (100 * t.texture.curUsedCovRateAtlas | 0) + "%", "图集使用率:", 100 * t.usedRate | 0, "%, 使用于:" + s + ")--:"), 
                    t.charMaps) {
                        var a = t.charMaps[r];
                        console.log("     off:", a.orix, a.oriy, " bmp宽高:", a.bmpWidth, a.bmpHeight, "无效:", a.deleted, "touchdt:", Et.loopCount - a.touchTick, "位置:", a.uv[0] * ne.atlasWidth | 0, a.uv[1] * ne.atlasWidth | 0, "字符:", a.char, "key:", r), 
                        n++;
                    }
                }), console.log("独立贴图文字(" + this.isoTextures.length + "个):"), this.isoTextures.forEach(function(t) {
                    console.log("    size:", t._texW, t._texH, "touch间隔:", Et.loopCount - t.lastTouchTm, "char:", t.ri.char);
                }), console.log("总缓存:", n, "总使用率:", h, "总当前图集使用率:", o);
            }
        }, {
            key: "showAtlas",
            value: function showAtlas(t, e, s, r, a, n) {
                if (!this.textAtlases[t]) return console.log("没有这个图集"), null;
                var h = new i.Sprite(), o = this.textAtlases[t].texture, l = {
                    width: ne.atlasWidth,
                    height: ne.atlasWidth,
                    sourceWidth: ne.atlasWidth,
                    sourceHeight: ne.atlasWidth,
                    offsetX: 0,
                    offsetY: 0,
                    getIsReady: function getIsReady() {
                        return !0;
                    },
                    _addReference: function _addReference() {},
                    _removeReference: function _removeReference() {},
                    _getSource: function _getSource() {
                        return o._getSource();
                    },
                    bitmap: {
                        id: o.id
                    },
                    _uv: $t.DEF_UV
                };
                return h.size = function(t, i) {
                    return this.width = t, this.height = i, h.graphics.clear(), h.graphics.drawRect(0, 0, h.width, h.height, e), 
                    h.graphics.drawTexture(l, 0, 0, h.width, h.height), this;
                }, h.graphics.drawRect(0, 0, a, n, e), h.graphics.drawTexture(l, 0, 0, a, n), h.pos(s, r), 
                i.stage.addChild(h), h;
            }
        }, {
            key: "filltext_native",
            value: function filltext_native(t, e, s, r, a, n, h, o, l, _) {
                var u = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : 0;
                if (!(e && e.length <= 0 || s && s.length < 1)) {
                    var c = Jt.Parse(n), d = 0;
                    switch (_) {
                      case "center":
                        d = i.Context.ENUM_TEXTALIGN_CENTER;
                        break;

                      case "right":
                        d = i.Context.ENUM_TEXTALIGN_RIGHT;
                    }
                    return this._fast_filltext(t, e, s, r, a, c, h, o, l, d, u);
                }
            }
        } ]);
        return ne;
    }();
    ne.useOldCharBook = !1, ne.atlasWidth = 1024, ne.noAtlas = !1, ne.forceSplitRender = !1, 
    ne.forceWholeRender = !1, ne.scaleFontWithCtx = !0, ne.standardFontSize = 32, ne.destroyAtlasDt = 10, 
    ne.checkCleanTextureDt = 2e3, ne.destroyUnusedTextureDt = 3e3, ne.cleanMem = 104857600, 
    ne.isWan1Wan = !1, ne.showLog = !1, ne.debugUV = !1, ne.tmpRI = new ee(), ne.pixelBBX = [ 0, 0, 0, 0 ], 
    ne.imgdtRect = [ 0, 0, 0, 0 ], ne.simClean = !1, qt.gTextRender = ne;
    var he = /* */ function() {
        function he() {
            (0, _classCallCheck2.default)(this, he);
            if (this._tmpMatrix = new p(), this._drawTexToDrawTri_Vert = new Float32Array(8), 
            this._drawTexToDrawTri_Index = new Uint16Array([ 0, 1, 2, 0, 2, 3 ]), this._tempUV = new Float32Array(8), 
            this._drawTriUseAbsMatrix = !1, this._id = ++he._COUNT, this._other = null, this._renderNextSubmitIndex = 0, 
            this._path = null, this._drawCount = 1, this._width = he._MAXSIZE, this._height = he._MAXSIZE, 
            this._renderCount = 0, this._submits = null, this._curSubmit = null, this._submitKey = new q(), 
            this._pathMesh = null, this._triangleMesh = null, this.meshlist = [], this._transedPoints = new Array(8), 
            this._temp4Points = new Array(8), this._clipRect = he.MAXCLIPRECT, this._globalClipMatrix = new p(he._MAXSIZE, 0, 0, he._MAXSIZE, 0, 0), 
            this._clipInCache = !1, this._clipInfoID = 0, this._clipID_Gen = 0, this._lastMatScaleX = 1, 
            this._lastMatScaleY = 1, this._lastMat_a = 1, this._lastMat_b = 0, this._lastMat_c = 0, 
            this._lastMat_d = 1, this._nBlendType = 0, this._save = null, this._targets = null, 
            this._charSubmitCache = null, this._saveMark = null, this._shader2D = new Nt(), 
            this.sprite = null, this._italicDeg = 0, this._lastTex = null, this._fillColor = 0, 
            this._flushCnt = 0, this.defTexture = null, this._colorFiler = null, this.drawTexAlign = !1, 
            this._incache = !1, this.isMain = !1, he._contextcount++, he._textRender = he._textRender || new ne(), 
            !this.defTexture) {
                var t = new O(2, 2);
                t.setPixels(new Uint8Array(16)), t.lock = !0, this.defTexture = new $t(t);
            }
            this._lastTex = this.defTexture, this.clear();
        }
        (0, _createClass2.default)(he, [ {
            key: "drawImage",
            value: function drawImage() {}
        }, {
            key: "getImageData",
            value: function getImageData() {}
        }, {
            key: "measureText",
            value: function measureText(t) {
                return null;
            }
        }, {
            key: "setTransform",
            value: function setTransform() {}
        }, {
            key: "$transform",
            value: function $transform(t, e, i, s, r, a) {}
        }, {
            key: "clearRect",
            value: function clearRect(t, e, i, s) {}
        }, {
            key: "_drawRect",
            value: function _drawRect(t, e, i, s, r) {
                X.renderBatches++, r && (this.fillStyle = r), this.fillRect(t, e, i, s, null);
            }
        }, {
            key: "drawTexture2",
            value: function drawTexture2(t, e, i, s, r, a) {}
        }, {
            key: "transformByMatrix",
            value: function transformByMatrix(t, e, i) {
                this.transform(t.a, t.b, t.c, t.d, t.tx + e, t.ty + i);
            }
        }, {
            key: "saveTransform",
            value: function saveTransform(t) {
                this.save();
            }
        }, {
            key: "restoreTransform",
            value: function restoreTransform(t) {
                this.restore();
            }
        }, {
            key: "drawRect",
            value: function drawRect(t, e, i, s, r, a, n) {
                null != r && (this.fillStyle = r, this.fillRect(t, e, i, s)), null != a && (this.strokeStyle = a, 
                this.lineWidth = n, this.strokeRect(t, e, i, s));
            }
        }, {
            key: "alpha",
            value: function alpha(t) {
                this.globalAlpha *= t;
            }
        }, {
            key: "_transform",
            value: function _transform(t, e, i) {
                this.translate(e, i), this.transform(t.a, t.b, t.c, t.d, t.tx, t.ty), this.translate(-e, -i);
            }
        }, {
            key: "_rotate",
            value: function _rotate(t, e, i) {
                this.translate(e, i), this.rotate(t), this.translate(-e, -i);
            }
        }, {
            key: "_scale",
            value: function _scale(t, e, i, s) {
                this.translate(i, s), this.scale(t, e), this.translate(-i, -s);
            }
        }, {
            key: "_drawLine",
            value: function _drawLine(t, e, i, s, r, a, n, h, o) {
                this.beginPath(), this.strokeStyle = n, this.lineWidth = h, this.moveTo(t + i, e + s), 
                this.lineTo(t + r, e + a), this.stroke();
            }
        }, {
            key: "_drawLines",
            value: function _drawLines(t, e, i, s, r, a) {
                this.beginPath(), this.strokeStyle = s, this.lineWidth = r, this.addPath(i.slice(), !1, !1, t, e), 
                this.stroke();
            }
        }, {
            key: "drawCurves",
            value: function drawCurves(t, e, i, s, r) {
                this.beginPath(), this.strokeStyle = s, this.lineWidth = r, this.moveTo(t + i[0], e + i[1]);
                for (var a = 2, n = i.length; a < n; ) {
                    this.quadraticCurveTo(t + i[a++], e + i[a++], t + i[a++], e + i[a++]);
                }
                this.stroke();
            }
        }, {
            key: "_fillAndStroke",
            value: function _fillAndStroke(t, e, i) {
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
                null != t && (this.fillStyle = t, this.fill()), null != e && i > 0 && (this.strokeStyle = e, 
                this.lineWidth = i, this.stroke());
            }
        }, {
            key: "_drawCircle",
            value: function _drawCircle(t, e, i, s, r, a, n) {
                X.renderBatches++, this.beginPath(!0), this.arc(t, e, i, 0, he.PI2), this.closePath(), 
                this._fillAndStroke(s, r, a);
            }
        }, {
            key: "_drawPie",
            value: function _drawPie(t, e, i, s, r, a, n, h, o) {
                this.beginPath(), this.moveTo(t, e), this.arc(t, e, i, s, r), this.closePath(), 
                this._fillAndStroke(a, n, h);
            }
        }, {
            key: "_drawPoly",
            value: function _drawPoly(t, e, i, s, r, a, n, h) {
                this.beginPath(), this.addPath(i.slice(), !0, n, t, e), this.closePath(), this._fillAndStroke(s, r, a, n);
            }
        }, {
            key: "_drawPath",
            value: function _drawPath(t, e, i, s, r) {
                this.beginPath();
                for (var a = 0, n = i.length; a < n; a++) {
                    var h = i[a];
                    switch (h[0]) {
                      case "moveTo":
                        this.moveTo(t + h[1], e + h[2]);
                        break;

                      case "lineTo":
                        this.lineTo(t + h[1], e + h[2]);
                        break;

                      case "arcTo":
                        this.arcTo(t + h[1], e + h[2], t + h[3], e + h[4], h[5]);
                        break;

                      case "closePath":
                        this.closePath();
                    }
                }
                null != s && (this.fillStyle = s.fillStyle, this.fill()), null != r && (this.strokeStyle = r.strokeStyle, 
                this.lineWidth = r.lineWidth || 1, this.lineJoin = r.lineJoin, this.lineCap = r.lineCap, 
                this.miterLimit = r.miterLimit, this.stroke());
            }
        }, {
            key: "clearBG",
            value: function clearBG(t, e, i, s) {
                var r = R.mainContext;
                r.clearColor(t, e, i, s), r.clear(r.COLOR_BUFFER_BIT);
            }
        }, {
            key: "_getSubmits",
            value: function _getSubmits() {
                return this._submits;
            }
        }, {
            key: "_releaseMem",
            value: function _releaseMem() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
                if (this._submits) {
                    this._curMat && this._curMat.destroy(), this._curMat = null, this._shader2D.destroy(), 
                    this._shader2D = null, this._charSubmitCache.clear();
                    for (var e = 0, i = this._submits._length; e < i; e++) {
                        this._submits[e].releaseRender();
                    }
                    var s;
                    for (this._submits.length = 0, this._submits._length = 0, this._submits = null, 
                    this._curSubmit = null, this._path = null, this._save = null, e = 0, s = this.meshlist.length; e < s; e++) {
                        this.meshlist[e].destroy();
                    }
                    this.meshlist.length = 0, this.sprite = null, t || (this._targets && this._targets.destroy(), 
                    this._targets = null);
                }
            }
        }, {
            key: "destroy",
            value: function destroy() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
                --he._contextcount, this.sprite = null, this._releaseMem(t), this._charSubmitCache && this._charSubmitCache.destroy(), 
                this._mesh.destroy(), t || (this._targets && this._targets.destroy(), this._targets = null);
            }
        }, {
            key: "clear",
            value: function clear() {
                this._submits || (this._other = oe.DEFAULT, this._curMat = p.create(), this._charSubmitCache = new Kt(), 
                this._mesh = St.getAMesh(this.isMain), this.meshlist.push(this._mesh), this._pathMesh = Mt.getAMesh(this.isMain), 
                this.meshlist.push(this._pathMesh), this._triangleMesh = wt.getAMesh(this.isMain), 
                this.meshlist.push(this._triangleMesh), this._submits = [], this._save = [ mt.Create(this) ], 
                this._save.length = 10, this._shader2D = new Nt()), this._submitKey.clear(), this._mesh.clearVB(), 
                this._drawCount = 1, this._other = oe.DEFAULT, this._other.lineWidth = this._shader2D.ALPHA = 1, 
                this._nBlendType = 0, this._clipRect = he.MAXCLIPRECT, this._curSubmit = dt.RENDERBASE, 
                dt.RENDERBASE._ref = 16777215, dt.RENDERBASE._numEle = 0, this._shader2D.fillStyle = this._shader2D.strokeStyle = _t.DEFAULT;
                for (var t = 0, e = this._submits._length; t < e; t++) {
                    this._submits[t].releaseRender();
                }
                this._submits._length = 0, this._curMat.identity(), this._other.clear(), this._saveMark = this._save[0], 
                this._save._length = 1;
            }
        }, {
            key: "size",
            value: function size(e, i) {
                this._width == e && this._height == i || (this._width = e, this._height = i, this._targets && (this._targets.destroy(), 
                this._targets = new G(e, i, t.RenderTextureFormat.R8G8B8A8, -1)), this.isMain && (R.mainContext.viewport(0, 0, e, i), 
                U.width = e, U.height = i)), 0 === e && 0 === i && this._releaseMem();
            }
        }, {
            key: "getMatScaleX",
            value: function getMatScaleX() {
                return this._lastMat_a == this._curMat.a && this._lastMat_b == this._curMat.b ? this._lastMatScaleX : (this._lastMatScaleX = this._curMat.getScaleX(), 
                this._lastMat_a = this._curMat.a, this._lastMat_b = this._curMat.b, this._lastMatScaleX);
            }
        }, {
            key: "getMatScaleY",
            value: function getMatScaleY() {
                return this._lastMat_c == this._curMat.c && this._lastMat_d == this._curMat.d ? this._lastMatScaleY : (this._lastMatScaleY = this._curMat.getScaleY(), 
                this._lastMat_c = this._curMat.c, this._lastMat_d = this._curMat.d, this._lastMatScaleY);
            }
        }, {
            key: "setFillColor",
            value: function setFillColor(t) {
                this._fillColor = t;
            }
        }, {
            key: "getFillColor",
            value: function getFillColor() {
                return this._fillColor;
            }
        }, {
            key: "translate",
            value: function translate(t, e) {
                0 === t && 0 === e || (Tt.save(this), this._curMat._bTransform ? (gt.save(this), 
                this._curMat.tx += t * this._curMat.a + e * this._curMat.c, this._curMat.ty += t * this._curMat.b + e * this._curMat.d) : (this._curMat.tx = t, 
                this._curMat.ty = e));
            }
        }, {
            key: "save",
            value: function save() {
                this._save[this._save._length++] = mt.Create(this);
            }
        }, {
            key: "restore",
            value: function restore() {
                var t = this._save._length, e = this._nBlendType;
                if (!(t < 1)) {
                    for (var i = t - 1; i >= 0; i--) {
                        var s = this._save[i];
                        if (s.restore(this), s.isSaveMark()) return void (this._save._length = i);
                    }
                    e != this._nBlendType && (this._curSubmit = dt.RENDERBASE);
                }
            }
        }, {
            key: "fillText",
            value: function fillText(t, e, i, s, r, a) {
                var n = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
                var h = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : "";
                he._textRender.filltext(this, t, e, i, s, r, h, n, a);
            }
        }, {
            key: "drawText",
            value: function drawText(t, e, i, s, r, a) {
                he._textRender.filltext(this, t, e, i, s, r, null, 0, a);
            }
        }, {
            key: "fillWords",
            value: function fillWords(t, e, i, s, r) {
                he._textRender.fillWords(this, t, e, i, s, r, null, 0);
            }
        }, {
            key: "strokeWord",
            value: function strokeWord(t, e, i, s, r, a, n) {
                he._textRender.filltext(this, t, e, i, s, null, r, a, n);
            }
        }, {
            key: "fillBorderText",
            value: function fillBorderText(t, e, i, s, r, a, n, h) {
                he._textRender.filltext(this, t, e, i, s, r, a, n, h);
            }
        }, {
            key: "fillBorderWords",
            value: function fillBorderWords(t, e, i, s, r, a, n) {
                he._textRender.fillWords(this, t, e, i, s, r, a, n);
            }
        }, {
            key: "_fast_filltext",
            value: function _fast_filltext(t, e, i, s, r, a, n, h) {
                var o = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
                he._textRender._fast_filltext(this, t, null, e, i, s, r, a, n, h, o);
            }
        }, {
            key: "_fillRect",
            value: function _fillRect(t, e, i, s, r) {
                var a = this._curSubmit, n = a && a._key.submitType === dt.KEY_DRAWTEXTURE && a._key.blendShader === this._nBlendType;
                this._mesh.vertNum + 4 > he._MAXVERTNUM && (this._mesh = St.getAMesh(this.isMain), 
                this.meshlist.push(this._mesh), n = !1), n && (n = n && this.isSameClipInfo(a)), 
                this.transformQuad(t, e, i, s, 0, this._curMat, this._transedPoints), this.clipedOff(this._transedPoints) || (this._mesh.addQuad(this._transedPoints, $t.NO_UV, r, !1), 
                n || (a = this._curSubmit = zt.create(this, this._mesh, j.create(V.TEXTURE2D, 0)), 
                this._submits[this._submits._length++] = a, this._copyClipInfo(a, this._globalClipMatrix), 
                a.shaderValue.textureHost = this._lastTex, a._key.other = this._lastTex && this._lastTex.bitmap ? this._lastTex.bitmap.id : -1, 
                a._renderType = dt.TYPE_TEXTURE), this._curSubmit._numEle += 6, this._mesh.indexNum += 6, 
                this._mesh.vertNum += 4);
            }
        }, {
            key: "fillRect",
            value: function fillRect(t, e, i, s, r) {
                var a = r ? _t.create(r) : this._shader2D.fillStyle, n = this.mixRGBandAlpha(a.toInt());
                this._fillRect(t, e, i, s, n);
            }
        }, {
            key: "fillTexture",
            value: function fillTexture(t, e, s, r, a, n, h, o) {
                t._getSource() ? this._fillTexture(t, t.width, t.height, t.uvrect, e, s, r, a, n, h.x, h.y) : this.sprite && i.systemTimer.callLater(this, this._repaintSprite);
            }
        }, {
            key: "_fillTexture",
            value: function _fillTexture(t, e, i, s, r, a, n, h, o, l, _) {
                var u = this._curSubmit;
                this._mesh.vertNum + 4 > he._MAXVERTNUM && (this._mesh = St.getAMesh(this.isMain), 
                this.meshlist.push(this._mesh));
                var c = !0, d = !0;
                switch (o) {
                  case "repeat":
                    break;

                  case "repeat-x":
                    d = !1;
                    break;

                  case "repeat-y":
                    c = !1;
                    break;

                  case "no-repeat":
                    c = d = !1;
                }
                var p = this._temp4Points, f = 0, m = 0, g = 0, T = 0, v = 0, x = 0;
                if (l < 0 ? (g = r, f = -l % e / e) : g = r + l, _ < 0 ? (T = a, m = -_ % i / i) : T = a + _, 
                v = r + n, x = a + h, !c && (v = Math.min(v, r + l + e)), !d && (x = Math.min(x, a + _ + i)), 
                !(v < r || x < a || g > v || T > x)) {
                    var y = (v - r - l) / e, E = (x - a - _) / i;
                    if (this.transformQuad(g, T, v - g, x - T, 0, this._curMat, this._transedPoints), 
                    p[0] = f, p[1] = m, p[2] = y, p[3] = m, p[4] = y, p[5] = E, p[6] = f, p[7] = E, 
                    !this.clipedOff(this._transedPoints)) {
                        var A = this._mixRGBandAlpha(4294967295, this._shader2D.ALPHA);
                        this._mesh.addQuad(this._transedPoints, p, A, !0);
                        var C = j.create(V.TEXTURE2D, 0);
                        C.defines.add(V.FILLTEXTURE), C.u_TexRange = s.concat(), u = this._curSubmit = zt.create(this, this._mesh, C), 
                        this._submits[this._submits._length++] = u, this._copyClipInfo(u, this._globalClipMatrix), 
                        u.shaderValue.textureHost = t, u._renderType = dt.TYPE_TEXTURE, this._curSubmit._numEle += 6, 
                        this._mesh.indexNum += 6, this._mesh.vertNum += 4;
                    }
                    this.breakNextMerge();
                }
            }
        }, {
            key: "setColorFilter",
            value: function setColorFilter(t) {
                pt.save(this, pt.TYPE_COLORFILTER, this, !0), this._colorFiler = t, this._curSubmit = dt.RENDERBASE;
            }
        }, {
            key: "drawTexture",
            value: function drawTexture(t, e, i, s, r) {
                this._drawTextureM(t, e, i, s, r, null, 1, null);
            }
        }, {
            key: "drawTextures",
            value: function drawTextures(t, e, s, r) {
                if (t._getSource()) for (var a = e.length / 2, n = 0, h = t.bitmap.id, o = 0; o < a; o++) {
                    this._inner_drawTexture(t, h, e[n++] + s, e[n++] + r, 0, 0, null, null, 1, !1);
                } else this.sprite && i.systemTimer.callLater(this, this._repaintSprite);
            }
        }, {
            key: "_drawTextureAddSubmit",
            value: function _drawTextureAddSubmit(t, e) {
                var i = null;
                i = zt.create(this, this._mesh, j.create(V.TEXTURE2D, 0)), this._submits[this._submits._length++] = i, 
                i.shaderValue.textureHost = e, i._key.other = t, i._renderType = dt.TYPE_TEXTURE, 
                this._curSubmit = i;
            }
        }, {
            key: "_drawTextureM",
            value: function _drawTextureM(t, e, i, s, r, a, n, h) {
                var o = this.sprite;
                return !!t._getSource(function() {
                    o && o.repaint();
                }) && this._inner_drawTexture(t, t.bitmap.id, e, i, s, r, a, h, n, !1);
            }
        }, {
            key: "_drawRenderTexture",
            value: function _drawRenderTexture(t, e, i, s, r, a, n, h) {
                return this._inner_drawTexture(t, -1, e, i, s, r, a, h, 1, !1);
            }
        }, {
            key: "submitDebugger",
            value: function submitDebugger() {
                this._submits[this._submits._length++] = Z.create([], function() {}, this);
            }
        }, {
            key: "_copyClipInfo",
            value: function _copyClipInfo(t, e) {
                var i = t.shaderValue.clipMatDir;
                i[0] = e.a, i[1] = e.b, i[2] = e.c, i[3] = e.d;
                var s = t.shaderValue.clipMatPos;
                s[0] = e.tx, s[1] = e.ty, t.clipInfoID = this._clipInfoID, this._clipInCache && (t.shaderValue.clipOff[0] = 1);
            }
        }, {
            key: "isSameClipInfo",
            value: function isSameClipInfo(t) {
                return t.clipInfoID === this._clipInfoID;
            }
        }, {
            key: "_useNewTex2DSubmit",
            value: function _useNewTex2DSubmit(t, e) {
                this._mesh.vertNum + e > he._MAXVERTNUM && (this._mesh = St.getAMesh(this.isMain), 
                this.meshlist.push(this._mesh));
                var i = zt.create(this, this._mesh, j.create(V.TEXTURE2D, 0));
                this._submits[this._submits._length++] = this._curSubmit = i, i.shaderValue.textureHost = t, 
                this._copyClipInfo(i, this._globalClipMatrix);
            }
        }, {
            key: "_drawTexRect",
            value: function _drawTexRect(t, e, i, s, r) {
                this.transformQuad(t, e, i, s, this._italicDeg, this._curMat, this._transedPoints);
                var a = this._transedPoints;
                a[0] = a[0] + .5 | 0, a[1] = a[1] + .5 | 0, a[2] = a[2] + .5 | 0, a[3] = a[3] + .5 | 0, 
                a[4] = a[4] + .5 | 0, a[5] = a[5] + .5 | 0, a[6] = a[6] + .5 | 0, a[7] = a[7] + .5 | 0, 
                this.clipedOff(this._transedPoints) || (this._mesh.addQuad(this._transedPoints, r, this._fillColor, !0), 
                this._curSubmit._numEle += 6, this._mesh.indexNum += 6, this._mesh.vertNum += 4);
            }
        }, {
            key: "drawCallOptimize",
            value: function drawCallOptimize(t) {
                return this._charSubmitCache.enable(t, this), t;
            }
        }, {
            key: "_inner_drawTexture",
            value: function _inner_drawTexture(t, e, i, s, r, a, n, h, o, l) {
                if (r <= 0 || a <= 0) return !1;
                var _ = this._curSubmit._key;
                if (h = h || t._uv, _.submitType === dt.KEY_TRIANGLES && _.other === e) {
                    var u = this._drawTexToDrawTri_Vert;
                    u[0] = i, u[1] = s, u[2] = i + r, u[3] = s, u[4] = i + r, u[5] = s + a, u[6] = i, 
                    u[7] = s + a, this._drawTriUseAbsMatrix = !0;
                    var c = this._tempUV;
                    return c[0] = h[0], c[1] = h[1], c[2] = h[2], c[3] = h[3], c[4] = h[4], c[5] = h[5], 
                    c[6] = h[6], c[7] = h[7], this.drawTriangles(t, 0, 0, u, c, this._drawTexToDrawTri_Index, n, o, null, null), 
                    this._drawTriUseAbsMatrix = !1, !0;
                }
                var d = this._mesh, p = this._curSubmit, f = l ? this._charSubmitCache.getPos() : this._transedPoints;
                if (this.transformQuad(i, s, r || t.width, a || t.height, this._italicDeg, n || this._curMat, f), 
                this.drawTexAlign) {
                    var m = Math.round;
                    f[0] = m(f[0]), f[1] = m(f[1]), f[2] = m(f[2]), f[3] = m(f[3]), f[4] = m(f[4]), 
                    f[5] = m(f[5]), f[6] = m(f[6]), f[7] = m(f[7]), this.drawTexAlign = !1;
                }
                var g = this._mixRGBandAlpha(4294967295, this._shader2D.ALPHA * o);
                if (l) return this._charSubmitCache.add(this, t, e, f, h, g), !0;
                this._drawCount++;
                var T = e >= 0 && _.submitType === dt.KEY_DRAWTEXTURE && _.other === e;
                return T && (T = T && this.isSameClipInfo(p)), this._lastTex = t, d.vertNum + 4 > he._MAXVERTNUM && (d = this._mesh = St.getAMesh(this.isMain), 
                this.meshlist.push(d), T = !1), d.addQuad(f, h, g, !0), T || (this._submits[this._submits._length++] = this._curSubmit = p = zt.create(this, d, j.create(V.TEXTURE2D, 0)), 
                p.shaderValue.textureHost = t, p._key.other = e, this._copyClipInfo(p, this._globalClipMatrix)), 
                p._numEle += 6, d.indexNum += 6, d.vertNum += 4, !0;
            }
        }, {
            key: "transform4Points",
            value: function transform4Points(t, e, i) {
                var s = e.tx, r = e.ty, a = e.a, n = e.b, h = e.c, o = e.d, l = t[0], _ = t[1], u = t[2], c = t[3], d = t[4], p = t[5], f = t[6], m = t[7];
                e._bTransform ? (i[0] = l * a + _ * h + s, i[1] = l * n + _ * o + r, i[2] = u * a + c * h + s, 
                i[3] = u * n + c * o + r, i[4] = d * a + p * h + s, i[5] = d * n + p * o + r, i[6] = f * a + m * h + s, 
                i[7] = f * n + m * o + r) : (i[0] = l + s, i[1] = _ + r, i[2] = u + s, i[3] = c + r, 
                i[4] = d + s, i[5] = p + r, i[6] = f + s, i[7] = m + r);
            }
        }, {
            key: "clipedOff",
            value: function clipedOff(t) {
                return this._clipRect.width <= 0 || this._clipRect.height <= 0;
            }
        }, {
            key: "transformQuad",
            value: function transformQuad(t, e, i, s, r, a, n) {
                var h = 0;
                0 != r && (h = Math.tan(r * Math.PI / 180) * s);
                var o = t + i, l = e + s, _ = a.tx, u = a.ty, c = a.a, d = a.b, p = a.c, f = a.d, m = t + h, g = e, T = o + h, v = e, x = o, y = l, E = t, A = l;
                a._bTransform ? (n[0] = m * c + g * p + _, n[1] = m * d + g * f + u, n[2] = T * c + v * p + _, 
                n[3] = T * d + v * f + u, n[4] = x * c + y * p + _, n[5] = x * d + y * f + u, n[6] = E * c + A * p + _, 
                n[7] = E * d + A * f + u) : (n[0] = m + _, n[1] = g + u, n[2] = T + _, n[3] = v + u, 
                n[4] = x + _, n[5] = y + u, n[6] = E + _, n[7] = A + u);
            }
        }, {
            key: "pushRT",
            value: function pushRT() {
                this.addRenderObject(Z.create(null, G.pushRT, this));
            }
        }, {
            key: "popRT",
            value: function popRT() {
                this.addRenderObject(Z.create(null, G.popRT, this)), this.breakNextMerge();
            }
        }, {
            key: "useRT",
            value: function useRT(t) {
                this.addRenderObject(Z.create([ t ], function(t) {
                    if (!t) throw "error useRT";
                    t.start(), t.clear(0, 0, 0, 0);
                }, this)), this.breakNextMerge();
            }
        }, {
            key: "RTRestore",
            value: function RTRestore(t) {
                this.addRenderObject(Z.create([ t ], function(t) {
                    t.restore();
                }, this)), this.breakNextMerge();
            }
        }, {
            key: "breakNextMerge",
            value: function breakNextMerge() {
                this._curSubmit = dt.RENDERBASE;
            }
        }, {
            key: "_repaintSprite",
            value: function _repaintSprite() {
                this.sprite && this.sprite.repaint();
            }
        }, {
            key: "drawTextureWithTransform",
            value: function drawTextureWithTransform(t, e, i, s, r, a, n, h, o, l) {
                var _ = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : null;
                var u = arguments.length > 11 ? arguments[11] : undefined;
                var c, d = this._curMat;
                l && (c = this.globalCompositeOperation, this.globalCompositeOperation = l);
                var f = this._colorFiler;
                if (_ && this.setColorFilter(_), !a) return this._drawTextureM(t, e + n, i + h, s, r, d, o, u), 
                l && (this.globalCompositeOperation = c), void (_ && this.setColorFilter(f));
                var m = this._tmpMatrix;
                m.a = a.a, m.b = a.b, m.c = a.c, m.d = a.d, m.tx = a.tx + n, m.ty = a.ty + h, m._bTransform = a._bTransform, 
                a && d._bTransform ? (p.mul(m, d, m), (a = m)._bTransform = !0) : (m.tx += d.tx, 
                m.ty += d.ty, a = m), this._drawTextureM(t, e, i, s, r, a, o, u), l && (this.globalCompositeOperation = c), 
                _ && this.setColorFilter(f);
            }
        }, {
            key: "_flushToTarget",
            value: function _flushToTarget(t, e) {
                U.worldScissorTest = !1;
                var i = g.instance;
                i.disable(i.SCISSOR_TEST);
                var s = U.worldAlpha, r = U.worldMatrix4, a = U.worldMatrix;
                U.worldMatrix = p.EMPTY, U.restoreTempArray(), U.worldMatrix4 = U.TEMPMAT4_ARRAY, 
                U.worldAlpha = 1, N.activeShader = null, e.start(), t._submits._length > 0 && e.clear(0, 0, 0, 0), 
                t._curSubmit = dt.RENDERBASE, t.flush(), t.clear(), e.restore(), t._curSubmit = dt.RENDERBASE, 
                N.activeShader = null, U.worldAlpha = s, U.worldMatrix4 = r, U.worldMatrix = a;
            }
        }, {
            key: "drawCanvas",
            value: function drawCanvas(t, e, i, s, r) {
                if (t) {
                    var a, n = t.context;
                    if (n._targets) n._submits._length > 0 && (a = Z.create([ n, n._targets ], this._flushToTarget, this), 
                    this._submits[this._submits._length++] = a), this._drawRenderTexture(n._targets, e, i, s, r, null, 1, G.flipyuv), 
                    this._curSubmit = dt.RENDERBASE; else {
                        var h = t;
                        h.touches && h.touches.forEach(function(t) {
                            t.touch();
                        }), a = Xt.create(t, this._shader2D.ALPHA, this._shader2D.filters), this._submits[this._submits._length++] = a, 
                        a._key.clear();
                        var o = a._matrix;
                        this._curMat.copyTo(o);
                        var l = o.tx, _ = o.ty;
                        o.tx = o.ty = 0, o.transformPoint(f.TEMP.setTo(e, i)), o.translate(f.TEMP.x + l, f.TEMP.y + _), 
                        p.mul(h.invMat, o, o), this._curSubmit = dt.RENDERBASE;
                    }
                }
            }
        }, {
            key: "drawTarget",
            value: function drawTarget(t, e, i, s, r, a, n) {
                var h = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
                var o = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : -1;
                if (this._drawCount++, this._mesh.vertNum + 4 > he._MAXVERTNUM && (this._mesh = St.getAMesh(this.isMain), 
                this.meshlist.push(this._mesh)), this.transformQuad(e, i, s, r, 0, a || this._curMat, this._transedPoints), 
                !this.clipedOff(this._transedPoints)) {
                    this._mesh.addQuad(this._transedPoints, h || $t.DEF_UV, 4294967295, !0);
                    var l = this._curSubmit = Ht.create(this, this._mesh, n, t);
                    return l.blendType = -1 == o ? this._nBlendType : o, this._copyClipInfo(l, this._globalClipMatrix), 
                    l._numEle = 6, this._mesh.indexNum += 6, this._mesh.vertNum += 4, this._submits[this._submits._length++] = l, 
                    this._curSubmit = dt.RENDERBASE, !0;
                }
                return this._curSubmit = dt.RENDERBASE, !1;
            }
        }, {
            key: "drawTriangles",
            value: function drawTriangles(t, e, s, r, a, n, h, o, l, _) {
                var u = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : 4294967295;
                if (t._getSource()) {
                    var c = null;
                    _ && (c = this.globalCompositeOperation, this.globalCompositeOperation = _), this._drawCount++;
                    var d = this._tmpMatrix, f = this._triangleMesh, m = null, g = !1;
                    l && (m = this._colorFiler, this._colorFiler = l, this._curSubmit = dt.RENDERBASE, 
                    g = m != l);
                    var T = t.bitmap, v = this._curSubmit._key, x = v.submitType === dt.KEY_TRIANGLES && v.other === T.id && v.blendShader == this._nBlendType;
                    if (f.vertNum + r.length / 2 > he._MAXVERTNUM && (f = this._triangleMesh = wt.getAMesh(this.isMain), 
                    this.meshlist.push(f), x = !1), !x) {
                        var y = this._curSubmit = zt.create(this, f, j.create(V.TEXTURE2D, 0));
                        y.shaderValue.textureHost = t, y._renderType = dt.TYPE_TEXTURE, y._key.submitType = dt.KEY_TRIANGLES, 
                        y._key.other = T.id, this._copyClipInfo(y, this._globalClipMatrix), this._submits[this._submits._length++] = y;
                    }
                    var E = this._mixRGBandAlpha(u, this._shader2D.ALPHA * o);
                    this._drawTriUseAbsMatrix ? f.addData(r, a, n, h, E) : (h ? (d.a = h.a, d.b = h.b, 
                    d.c = h.c, d.d = h.d, d.tx = h.tx + e, d.ty = h.ty + s) : (d.a = 1, d.b = 0, d.c = 0, 
                    d.d = 1, d.tx = e, d.ty = s), p.mul(d, this._curMat, d), f.addData(r, a, n, d || this._curMat, E)), 
                    this._curSubmit._numEle += n.length, g && (this._colorFiler = m, this._curSubmit = dt.RENDERBASE), 
                    _ && (this.globalCompositeOperation = c);
                } else this.sprite && i.systemTimer.callLater(this, this._repaintSprite);
            }
        }, {
            key: "transform",
            value: function transform(t, e, i, s, r, a) {
                gt.save(this), p.mul(p.TEMP.setTo(t, e, i, s, r, a), this._curMat, this._curMat), 
                this._curMat._checkTransform();
            }
        }, {
            key: "_transformByMatrix",
            value: function _transformByMatrix(t, e, i) {
                t.setTranslate(e, i), p.mul(t, this._curMat, this._curMat), t.setTranslate(0, 0), 
                this._curMat._bTransform = !0;
            }
        }, {
            key: "setTransformByMatrix",
            value: function setTransformByMatrix(t) {
                t.copyTo(this._curMat);
            }
        }, {
            key: "rotate",
            value: function rotate(t) {
                gt.save(this), this._curMat.rotateEx(t);
            }
        }, {
            key: "scale",
            value: function scale(t, e) {
                gt.save(this), this._curMat.scaleEx(t, e);
            }
        }, {
            key: "clipRect",
            value: function clipRect(t, e, i, s) {
                ft.save(this), this._clipRect == he.MAXCLIPRECT ? this._clipRect = new m(t, e, i, s) : (this._clipRect.width = i, 
                this._clipRect.height = s, this._clipRect.x = t, this._clipRect.y = e), this._clipID_Gen++, 
                this._clipID_Gen %= 1e4, this._clipInfoID = this._clipID_Gen;
                var r = this._globalClipMatrix, a = r.tx, n = r.ty, h = a + r.a, o = n + r.d;
                if (this._clipRect.width >= he._MAXSIZE ? (r.a = r.d = he._MAXSIZE, r.b = r.c = r.tx = r.ty = 0) : (this._curMat._bTransform ? (r.tx = this._clipRect.x * this._curMat.a + this._clipRect.y * this._curMat.c + this._curMat.tx, 
                r.ty = this._clipRect.x * this._curMat.b + this._clipRect.y * this._curMat.d + this._curMat.ty, 
                r.a = this._clipRect.width * this._curMat.a, r.b = this._clipRect.width * this._curMat.b, 
                r.c = this._clipRect.height * this._curMat.c, r.d = this._clipRect.height * this._curMat.d) : (r.tx = this._clipRect.x + this._curMat.tx, 
                r.ty = this._clipRect.y + this._curMat.ty, r.a = this._clipRect.width, r.b = r.c = 0, 
                r.d = this._clipRect.height), this._incache && (this._clipInCache = !0)), r.a > 0 && r.d > 0) {
                    var l = r.tx + r.a, _ = r.ty + r.d;
                    l <= a || _ <= n || r.tx >= h || r.ty >= o ? (r.a = -.1, r.d = -.1) : (r.tx < a && (r.a -= a - r.tx, 
                    r.tx = a), l > h && (r.a -= l - h), r.ty < n && (r.d -= n - r.ty, r.ty = n), _ > o && (r.d -= _ - o), 
                    r.a <= 0 && (r.a = -.1), r.d <= 0 && (r.d = -.1));
                }
            }
        }, {
            key: "drawMesh",
            value: function drawMesh(t, e, i, s, r, a, n, h) {
                var o = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
            }
        }, {
            key: "addRenderObject",
            value: function addRenderObject(t) {
                this._submits[this._submits._length++] = t;
            }
        }, {
            key: "submitElement",
            value: function submitElement(t, e) {
                this.isMain;
                var i = this._submits, s = i._length;
                e < 0 && (e = i._length);
                for (var r = dt.RENDERBASE; t < e; ) {
                    this._renderNextSubmitIndex = t + 1, i[t] !== dt.RENDERBASE ? (dt.preRender = r, 
                    t += (r = i[t]).renderSubmit()) : t++;
                }
                return s;
            }
        }, {
            key: "flush",
            value: function flush() {
                this._clipID_Gen = 0;
                var t = this.submitElement(0, this._submits._length);
                this._path && this._path.reset(), Ut.instance && Ut.getInstance().reset(), this._curSubmit = dt.RENDERBASE;
                for (var e = 0, i = this.meshlist.length; e < i; e++) {
                    var s = this.meshlist[e];
                    s.canReuse ? s.releaseMesh() : s.destroy();
                }
                return this.meshlist.length = 0, this._mesh = St.getAMesh(this.isMain), this._pathMesh = Mt.getAMesh(this.isMain), 
                this._triangleMesh = wt.getAMesh(this.isMain), this.meshlist.push(this._mesh, this._pathMesh, this._triangleMesh), 
                this._flushCnt++, this._flushCnt % 60 == 0 && this.isMain && ne.textRenderInst && ne.textRenderInst.GC(), 
                t;
            }
        }, {
            key: "beginPath",
            value: function beginPath() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
                this._getPath().beginPath(t);
            }
        }, {
            key: "closePath",
            value: function closePath() {
                this._path.closePath();
            }
        }, {
            key: "addPath",
            value: function addPath(t, e, i, s, r) {
                for (var a = 0, n = 0, h = t.length / 2; n < h; n++) {
                    var o = t[a] + s, l = t[a + 1] + r;
                    t[a] = o, t[a + 1] = l, a += 2;
                }
                this._getPath().push(t, i);
            }
        }, {
            key: "fill",
            value: function fill() {
                var t = this._curMat, e = this._getPath(), i = this._curSubmit, s = i._key.submitType === dt.KEY_VG && i._key.blendShader === this._nBlendType;
                s && (s = s && this.isSameClipInfo(i)), s || (this._curSubmit = this.addVGSubmit(this._pathMesh));
                for (var r, a = this.mixRGBandAlpha(this.fillStyle.toInt()), n = 0, h = 0, o = e.paths.length; h < o; h++) {
                    var l = e.paths[h], _ = l.path.length / 2;
                    if (!(_ < 3 || 3 == _ && !l.convex)) {
                        var u, c, d, p, f = l.path.concat(), m = 0;
                        if (t._bTransform) for (m = 0; m < _; m++) {
                            c = (u = m << 1) + 1, d = f[u], p = f[c], f[u] = t.a * d + t.c * p + t.tx, f[c] = t.b * d + t.d * p + t.ty;
                        } else for (m = 0; m < _; m++) {
                            c = (u = m << 1) + 1, d = f[u], p = f[c], f[u] = d + t.tx, f[c] = p + t.ty;
                        }
                        this._pathMesh.vertNum + _ > he._MAXVERTNUM && (this._curSubmit._numEle += n, n = 0, 
                        this._pathMesh = Mt.getAMesh(this.isMain), this._curSubmit = this.addVGSubmit(this._pathMesh));
                        var g = this._pathMesh.vertNum;
                        if (l.convex) {
                            var T = _ - 2;
                            r = new Array(3 * T);
                            for (var v = 0, x = 0; x < T; x++) {
                                r[v++] = g, r[v++] = x + 1 + g, r[v++] = x + 2 + g;
                            }
                        } else if (r = Wt.earcut(f, null, 2), g > 0) for (var y = 0; y < r.length; y++) {
                            r[y] += g;
                        }
                        this._pathMesh.addVertAndIBToMesh(this, f, a, r), n += r.length;
                    }
                }
                this._curSubmit._numEle += n;
            }
        }, {
            key: "addVGSubmit",
            value: function addVGSubmit(t) {
                var e = Vt.createShape(this, t, 0, j.create(V.PRIMITIVE, 0));
                return e._key.submitType = dt.KEY_VG, this._submits[this._submits._length++] = e, 
                this._copyClipInfo(e, this._globalClipMatrix), e;
            }
        }, {
            key: "stroke",
            value: function stroke() {
                if (this.lineWidth > 0) {
                    var t = this.mixRGBandAlpha(this.strokeStyle._color.numColor), e = this._getPath(), i = this._curSubmit, s = i._key.submitType === dt.KEY_VG && i._key.blendShader === this._nBlendType;
                    s && (s = s && this.isSameClipInfo(i)), s || (this._curSubmit = this.addVGSubmit(this._pathMesh));
                    for (var r = 0, a = 0, n = e.paths.length; a < n; a++) {
                        var h = e.paths[a];
                        if (!(h.path.length <= 0)) {
                            var o = [], l = [], _ = 2 * h.path.length;
                            if (!(_ < 2)) {
                                this._pathMesh.vertNum + _ > he._MAXVERTNUM && (this._curSubmit._numEle += r, r = 0, 
                                this._pathMesh = Mt.getAMesh(this.isMain), this.meshlist.push(this._pathMesh), this._curSubmit = this.addVGSubmit(this._pathMesh)), 
                                Gt.createLine2(h.path, o, this.lineWidth, this._pathMesh.vertNum, l, h.loop);
                                var u, c, d, p, f = l.length / 2, m = this._curMat, g = 0;
                                if (m._bTransform) for (g = 0; g < f; g++) {
                                    c = (u = g << 1) + 1, d = l[u], p = l[c], l[u] = m.a * d + m.c * p + m.tx, l[c] = m.b * d + m.d * p + m.ty;
                                } else for (g = 0; g < f; g++) {
                                    c = (u = g << 1) + 1, d = l[u], p = l[c], l[u] = d + m.tx, l[c] = p + m.ty;
                                }
                                this._pathMesh.addVertAndIBToMesh(this, l, t, o), r += o.length;
                            }
                        }
                    }
                    this._curSubmit._numEle += r;
                }
            }
        }, {
            key: "moveTo",
            value: function moveTo(t, e) {
                var i = this._getPath();
                i.newPath(), i._lastOriX = t, i._lastOriY = e, i.addPoint(t, e);
            }
        }, {
            key: "lineTo",
            value: function lineTo(t, e) {
                var i = this._getPath();
                Math.abs(t - i._lastOriX) < .001 && Math.abs(e - i._lastOriY) < .001 || (i._lastOriX = t, 
                i._lastOriY = e, i.addPoint(t, e));
            }
        }, {
            key: "arcTo",
            value: function arcTo(t, e, i, s, r) {
                var a = 0, n = 0, h = 0, o = this._path._lastOriX - t, l = this._path._lastOriY - e, _ = Math.sqrt(o * o + l * l);
                if (!(_ <= 1e-6)) {
                    var u = o / _, c = l / _, d = i - t, p = s - e, f = d * d + p * p, m = Math.sqrt(f);
                    if (!(m <= 1e-6)) {
                        var g = d / m, T = p / m, v = u + g, x = c + T, y = Math.sqrt(v * v + x * x);
                        if (!(y <= 1e-6)) {
                            var E = v / y, A = x / y, C = Math.acos(E * u + A * c), R = Math.PI / 2 - C, b = (_ = r / Math.tan(R)) * u + t, S = _ * c + e, w = Math.sqrt(_ * _ + r * r), M = t + E * w, I = e + A * w, P = 0, L = 0;
                            if (u * T - c * g >= 0) {
                                var D = 2 * R / he.SEGNUM;
                                P = Math.sin(D), L = Math.cos(D);
                            } else D = 2 * -R / he.SEGNUM, P = Math.sin(D), L = Math.cos(D);
                            var B = this._path._lastOriX, F = this._path._lastOriY, O = b, N = S;
                            (Math.abs(O - this._path._lastOriX) > .1 || Math.abs(N - this._path._lastOriY) > .1) && (n = O, 
                            h = N, B = O, F = N, this._path._lastOriX = n, this._path._lastOriY = h, this._path.addPoint(n, h));
                            var U = b - M, G = S - I;
                            for (a = 0; a < he.SEGNUM; a++) {
                                var k = U * L + G * P, W = -U * P + G * L;
                                n = k + M, h = W + I, (Math.abs(B - n) > .1 || Math.abs(F - h) > .1) && (this._path._lastOriX = n, 
                                this._path._lastOriY = h, this._path.addPoint(n, h), B = n, F = h), U = k, G = W;
                            }
                        }
                    }
                }
            }
        }, {
            key: "arc",
            value: function arc(t, e, i, s, r) {
                var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !1;
                var n = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : !0;
                var h, o, l = 0, _ = 0, u = 0, c = 0, d = 0;
                if (_ = r - s, a) {
                    if (Math.abs(_) >= 2 * Math.PI) _ = 2 * -Math.PI; else for (;_ > 0; ) {
                        _ -= 2 * Math.PI;
                    }
                } else if (Math.abs(_) >= 2 * Math.PI) _ = 2 * Math.PI; else for (;_ < 0; ) {
                    _ += 2 * Math.PI;
                }
                var p = this.getMatScaleX(), f = this.getMatScaleY(), m = i * (p > f ? p : f), g = 2 * Math.PI * m;
                o = 0 | Math.max(g / 10, 10);
                var T = this._getPath();
                for (h = 0; h <= o; h++) {
                    l = s + _ * (h / o), u = Math.cos(l), d = e + Math.sin(l) * i, (c = t + u * i) == this._path._lastOriX && d == this._path._lastOriY || T.addPoint(c, d);
                }
                u = Math.cos(r), d = e + Math.sin(r) * i, (c = t + u * i) == this._path._lastOriX && d == this._path._lastOriY || T.addPoint(c, d);
            }
        }, {
            key: "quadraticCurveTo",
            value: function quadraticCurveTo(t, e, i, s) {
                for (var r = ot.I.getBezierPoints([ this._path._lastOriX, this._path._lastOriY, t, e, i, s ], 30, 2), a = 0, n = r.length / 2; a < n; a++) {
                    this.lineTo(r[2 * a], r[2 * a + 1]);
                }
                this.lineTo(i, s);
            }
        }, {
            key: "mixRGBandAlpha",
            value: function mixRGBandAlpha(t) {
                return this._mixRGBandAlpha(t, this._shader2D.ALPHA);
            }
        }, {
            key: "_mixRGBandAlpha",
            value: function _mixRGBandAlpha(t, e) {
                if (e >= 1) return t;
                var i = (4278190080 & t) >>> 24;
                return 0 != i ? i *= e : i = 255 * e, 16777215 & t | i << 24;
            }
        }, {
            key: "strokeRect",
            value: function strokeRect(t, e, i, s, r) {
                if (this.lineWidth > 0) {
                    var a = this.mixRGBandAlpha(this.strokeStyle._color.numColor), n = this.lineWidth / 2;
                    this._fillRect(t - n, e - n, i + this.lineWidth, this.lineWidth, a), this._fillRect(t - n, e - n + s, i + this.lineWidth, this.lineWidth, a), 
                    this._fillRect(t - n, e + n, this.lineWidth, s - this.lineWidth, a), this._fillRect(t - n + i, e + n, this.lineWidth, s - this.lineWidth, a);
                }
            }
        }, {
            key: "clip",
            value: function clip() {}
        }, {
            key: "drawParticle",
            value: function drawParticle(t, e, i) {
                i.x = t, i.y = e, this._submits[this._submits._length++] = i;
            }
        }, {
            key: "_getPath",
            value: function _getPath() {
                return this._path || (this._path = new ut());
            }
        }, {
            key: "_fillTexture_h",
            value: function _fillTexture_h(t, e, i, s, r, a, n, h) {
                s <= 0 && console.error("_fillTexture_h error: oriw must>0");
                for (var o = a, l = Math.floor(h / s), _ = h % s, u = 0; u < l; u++) {
                    this._inner_drawTexture(t, e, o, n, s, r, this._curMat, i, 1, !1), o += s;
                }
                if (_ > 0) {
                    var c = i[2] - i[0], d = i[0] + c * (_ / s), p = he.tmpuv1;
                    p[0] = i[0], p[1] = i[1], p[2] = d, p[3] = i[3], p[4] = d, p[5] = i[5], p[6] = i[6], 
                    p[7] = i[7], this._inner_drawTexture(t, e, o, n, _, r, this._curMat, p, 1, !1);
                }
            }
        }, {
            key: "_fillTexture_v",
            value: function _fillTexture_v(t, e, i, s, r, a, n, h) {
                r <= 0 && console.error("_fillTexture_v error: orih must>0");
                for (var o = n, l = Math.floor(h / r), _ = h % r, u = 0; u < l; u++) {
                    this._inner_drawTexture(t, e, a, o, s, r, this._curMat, i, 1, !1), o += r;
                }
                if (_ > 0) {
                    var c = i[7] - i[1], d = i[1] + c * (_ / r), p = he.tmpuv1;
                    p[0] = i[0], p[1] = i[1], p[2] = i[2], p[3] = i[3], p[4] = i[4], p[5] = d, p[6] = i[6], 
                    p[7] = d, this._inner_drawTexture(t, e, a, o, s, _, this._curMat, p, 1, !1);
                }
            }
        }, {
            key: "drawTextureWithSizeGrid",
            value: function drawTextureWithSizeGrid(t, e, i, s, r, a, n, h) {
                if (t._getSource()) {
                    e += n, i += h;
                    var o = t.uv, l = t.bitmap.width, _ = t.bitmap.height, u = a[0], c = a[3], d = a[1], p = a[2], f = a[4], m = !1;
                    s == l && (c = d = 0), r == _ && (u = p = 0);
                    var g = u / _, T = c / l, v = d / l, x = p / _;
                    if (c + d > s) {
                        var y = s;
                        m = !0, s = c + d, this.save(), this.clipRect(0 + e, 0 + i, y, r);
                    }
                    var E = t.bitmap.id, A = this._curMat, C = this._tempUV, R = o[0], b = o[1], S = o[4], w = o[5], M = R, I = b, P = S, L = w;
                    if (c && u && (P = R + T, L = b + g, C[0] = R, C[1] = b, C[2] = P, C[3] = b, C[4] = P, 
                    C[5] = L, C[6] = R, C[7] = L, this._inner_drawTexture(t, E, e, i, c, u, A, C, 1, !1)), 
                    d && u && (M = S - v, I = b, P = S, L = b + g, C[0] = M, C[1] = I, C[2] = P, C[3] = I, 
                    C[4] = P, C[5] = L, C[6] = M, C[7] = L, this._inner_drawTexture(t, E, s - d + e, 0 + i, d, u, A, C, 1, !1)), 
                    c && p && (M = R, I = w - x, P = R + T, L = w, C[0] = M, C[1] = I, C[2] = P, C[3] = I, 
                    C[4] = P, C[5] = L, C[6] = M, C[7] = L, this._inner_drawTexture(t, E, 0 + e, r - p + i, c, p, A, C, 1, !1)), 
                    d && p && (M = S - v, I = w - x, P = S, L = w, C[0] = M, C[1] = I, C[2] = P, C[3] = I, 
                    C[4] = P, C[5] = L, C[6] = M, C[7] = L, this._inner_drawTexture(t, E, s - d + e, r - p + i, d, p, A, C, 1, !1)), 
                    u && (M = R + T, I = b, P = S - v, L = b + g, C[0] = M, C[1] = I, C[2] = P, C[3] = I, 
                    C[4] = P, C[5] = L, C[6] = M, C[7] = L, f ? this._fillTexture_h(t, E, C, t.width - c - d, u, c + e, i, s - c - d) : this._inner_drawTexture(t, E, c + e, i, s - c - d, u, A, C, 1, !1)), 
                    p && (M = R + T, I = w - x, P = S - v, L = w, C[0] = M, C[1] = I, C[2] = P, C[3] = I, 
                    C[4] = P, C[5] = L, C[6] = M, C[7] = L, f ? this._fillTexture_h(t, E, C, t.width - c - d, p, c + e, r - p + i, s - c - d) : this._inner_drawTexture(t, E, c + e, r - p + i, s - c - d, p, A, C, 1, !1)), 
                    c && (M = R, I = b + g, P = R + T, L = w - x, C[0] = M, C[1] = I, C[2] = P, C[3] = I, 
                    C[4] = P, C[5] = L, C[6] = M, C[7] = L, f ? this._fillTexture_v(t, E, C, c, t.height - u - p, e, u + i, r - u - p) : this._inner_drawTexture(t, E, e, u + i, c, r - u - p, A, C, 1, !1)), 
                    d && (M = S - v, I = b + g, P = S, L = w - x, C[0] = M, C[1] = I, C[2] = P, C[3] = I, 
                    C[4] = P, C[5] = L, C[6] = M, C[7] = L, f ? this._fillTexture_v(t, E, C, d, t.height - u - p, s - d + e, u + i, r - u - p) : this._inner_drawTexture(t, E, s - d + e, u + i, d, r - u - p, A, C, 1, !1)), 
                    M = R + T, I = b + g, P = S - v, L = w - x, C[0] = M, C[1] = I, C[2] = P, C[3] = I, 
                    C[4] = P, C[5] = L, C[6] = M, C[7] = L, f) {
                        var D = he.tmpUVRect;
                        D[0] = M, D[1] = I, D[2] = P - M, D[3] = L - I, this._fillTexture(t, t.width - c - d, t.height - u - p, D, c + e, u + i, s - c - d, r - u - p, "repeat", 0, 0);
                    } else this._inner_drawTexture(t, E, c + e, u + i, s - c - d, r - u - p, A, C, 1, !1);
                    m && this.restore();
                }
            }
        }, {
            key: "lineJoin",
            get: function get() {
                return "";
            },
            set: function set(t) {}
        }, {
            key: "lineCap",
            get: function get() {
                return "";
            },
            set: function set(t) {}
        }, {
            key: "miterLimit",
            get: function get() {
                return "";
            },
            set: function set(t) {}
        }, {
            key: "asBitmap",
            set: function set(e) {
                if (e) {
                    var _e4 = this._targets;
                    if (!this._width || !this._height) throw Error("asBitmap no size!");
                    _e4 && _e4.width == this._width && _e4.height == this._height || (_e4 && _e4.destroy(), 
                    this._targets = new G(this._width, this._height, t.RenderTextureFormat.R8G8B8A8, -1));
                } else this._targets && this._targets.destroy(), this._targets = null;
            }
        }, {
            key: "fillStyle",
            set: function set(t) {
                this._shader2D.fillStyle.equal(t) || (pt.save(this, pt.TYPE_FILESTYLE, this._shader2D, !1), 
                this._shader2D.fillStyle = _t.create(t), this._submitKey.other = -this._shader2D.fillStyle.toInt());
            },
            get: function get() {
                return this._shader2D.fillStyle;
            }
        }, {
            key: "globalAlpha",
            set: function set(t) {
                (t = Math.floor(1e3 * t) / 1e3) != this._shader2D.ALPHA && (pt.save(this, pt.TYPE_ALPHA, this._shader2D, !1), 
                this._shader2D.ALPHA = t);
            },
            get: function get() {
                return this._shader2D.ALPHA;
            }
        }, {
            key: "textAlign",
            set: function set(t) {
                this._other.textAlign === t || (this._other = this._other.make(), pt.save(this, pt.TYPE_TEXTALIGN, this._other, !1), 
                this._other.textAlign = t);
            },
            get: function get() {
                return this._other.textAlign;
            }
        }, {
            key: "textBaseline",
            set: function set(t) {
                this._other.textBaseline === t || (this._other = this._other.make(), pt.save(this, pt.TYPE_TEXTBASELINE, this._other, !1), 
                this._other.textBaseline = t);
            },
            get: function get() {
                return this._other.textBaseline;
            }
        }, {
            key: "globalCompositeOperation",
            set: function set(t) {
                var e = W.TOINT[t];
                null == e || this._nBlendType === e || (pt.save(this, pt.TYPE_GLOBALCOMPOSITEOPERATION, this, !0), 
                this._curSubmit = dt.RENDERBASE, this._nBlendType = e);
            },
            get: function get() {
                return W.NAMES[this._nBlendType];
            }
        }, {
            key: "strokeStyle",
            set: function set(t) {
                this._shader2D.strokeStyle.equal(t) || (pt.save(this, pt.TYPE_STROKESTYLE, this._shader2D, !1), 
                this._shader2D.strokeStyle = _t.create(t), this._submitKey.other = -this._shader2D.strokeStyle.toInt());
            },
            get: function get() {
                return this._shader2D.strokeStyle;
            }
        }, {
            key: "lineWidth",
            set: function set(t) {
                this._other.lineWidth === t || (this._other = this._other.make(), pt.save(this, pt.TYPE_LINEWIDTH, this._other, !1), 
                this._other.lineWidth = t);
            },
            get: function get() {
                return this._other.lineWidth;
            }
        }, {
            key: "font",
            set: function set(t) {
                this._other = this._other.make(), pt.save(this, pt.TYPE_FONT, this._other, !1);
            }
        }, {
            key: "canvas",
            get: function get() {
                return this._canvas;
            }
        } ], [ {
            key: "__init__",
            value: function __init__() {
                he.MAXCLIPRECT = new m(0, 0, he._MAXSIZE, he._MAXSIZE), oe.DEFAULT = new oe();
            }
        }, {
            key: "set2DRenderConfig",
            value: function set2DRenderConfig() {
                var t = g.instance;
                R.setBlend(t, !0), R.setBlendEquation(t, t.FUNC_ADD), W.activeBlendFunction = null, 
                R.setBlendFunc(t, t.ONE, t.ONE_MINUS_SRC_ALPHA), R.setDepthTest(t, !1), R.setCullFace(t, !1), 
                R.setDepthMask(t, !0), R.setFrontFace(t, t.CCW), t.viewport(0, 0, U.width, U.height);
            }
        } ]);
        return he;
    }();
    he.ENUM_TEXTALIGN_DEFAULT = 0, he.ENUM_TEXTALIGN_CENTER = 1, he.ENUM_TEXTALIGN_RIGHT = 2, 
    he._SUBMITVBSIZE = 32e3, he._MAXSIZE = 99999999, he._MAXVERTNUM = 65535, he.MAXCLIPRECT = null, 
    he._COUNT = 0, he.SEGNUM = 32, he._contextcount = 0, he.PI2 = 2 * Math.PI, he._textRender = null, 
    he.tmpuv1 = [ 0, 0, 0, 0, 0, 0, 0, 0 ], he.tmpUV = [ 0, 0, 0, 0, 0, 0, 0, 0 ], he.tmpUVRect = [ 0, 0, 0, 0 ];
    var oe = /* */ function() {
        function oe() {
            (0, _classCallCheck2.default)(this, oe);
            this.lineWidth = 1;
        }
        (0, _createClass2.default)(oe, [ {
            key: "clear",
            value: function clear() {
                this.lineWidth = 1, this.textAlign = this.textBaseline = null;
            }
        }, {
            key: "make",
            value: function make() {
                return this === oe.DEFAULT ? new oe() : this;
            }
        } ]);
        return oe;
    }();
    var le = /* */ function() {
        function le() {
            (0, _classCallCheck2.default)(this, le);
        }
        (0, _createClass2.default)(le, null, [ {
            key: "_uint8ArraySlice",
            value: function _uint8ArraySlice() {
                for (var t = this.length, e = new Uint8Array(this.length), i = 0; i < t; i++) {
                    e[i] = this[i];
                }
                return e;
            }
        }, {
            key: "_float32ArraySlice",
            value: function _float32ArraySlice() {
                for (var t = this.length, e = new Float32Array(this.length), i = 0; i < t; i++) {
                    e[i] = this[i];
                }
                return e;
            }
        }, {
            key: "_uint16ArraySlice",
            value: function _uint16ArraySlice() {
                var e, i, s;
                if (0 === arguments.length) for (e = this.length, i = new Uint16Array(e), s = 0; s < e; s++) {
                    i[s] = this[s];
                } else if (2 === arguments.length) {
                    var r = arguments.length <= 0 ? undefined : arguments[0], a = arguments.length <= 1 ? undefined : arguments[1];
                    if (a > r) for (e = a - r, i = new Uint16Array(e), s = r; s < a; s++) {
                        i[s - r] = this[s];
                    } else i = new Uint16Array(0);
                }
                return i;
            }
        }, {
            key: "_nativeRender_enable",
            value: function _nativeRender_enable() {}
        }, {
            key: "enable",
            value: function enable() {
                return !0;
            }
        }, {
            key: "inner_enable",
            value: function inner_enable() {
                return Float32Array.prototype.slice || (Float32Array.prototype.slice = le._float32ArraySlice), 
                Uint16Array.prototype.slice || (Uint16Array.prototype.slice = le._uint16ArraySlice), 
                Uint8Array.prototype.slice || (Uint8Array.prototype.slice = le._uint8ArraySlice), 
                !0;
            }
        }, {
            key: "onStageResize",
            value: function onStageResize(t, e) {
                null != R.mainContext && (R.mainContext.viewport(0, 0, t, e), U.width = t, U.height = e);
            }
        } ]);
        return le;
    }();
    le._isWebGL2 = !1, le.isNativeRender_enable = !1;
    !function() {
        var t = {};
        function synthesizeGLError(e, i) {
            var s;
            t[e] = !0, void 0 !== i && (s = i, window.console && window.console.error && window.console.error(s));
        }
        var e = function WebGLVertexArrayObjectOES(t) {
            var e = t.gl;
            this.ext = t, this.isAlive = !0, this.hasBeenBound = !1, this.elementArrayBuffer = null, 
            this.attribs = new Array(t.maxVertexAttribs);
            for (var i = 0; i < this.attribs.length; i++) {
                var s = new WebGLVertexArrayObjectOES.VertexAttrib(e);
                this.attribs[i] = s;
            }
            this.maxAttrib = 0;
        };
        (e.VertexAttrib = function(t) {
            this.enabled = !1, this.buffer = null, this.size = 4, this.type = t.FLOAT, this.normalized = !1, 
            this.stride = 16, this.offset = 0, this.cached = "", this.recache();
        }).prototype.recache = function() {
            this.cached = [ this.size, this.type, this.normalized, this.stride, this.offset ].join(":");
        };
        var i = function i(e) {
            var i = this;
            this.gl = e, function(e) {
                var i = e.getError;
                e.getError = function() {
                    var s;
                    do {
                        (s = i.apply(e)) != e.NO_ERROR && (t[s] = !0);
                    } while (s != e.NO_ERROR);
                    for (var r in t) {
                        if (t[r]) return delete t[r], parseInt(r);
                    }
                    return e.NO_ERROR;
                };
            }(e);
            var s = this.original = {
                getParameter: e.getParameter,
                enableVertexAttribArray: e.enableVertexAttribArray,
                disableVertexAttribArray: e.disableVertexAttribArray,
                bindBuffer: e.bindBuffer,
                getVertexAttrib: e.getVertexAttrib,
                vertexAttribPointer: e.vertexAttribPointer
            };
            e.getParameter = function(t) {
                return t == i.VERTEX_ARRAY_BINDING_OES ? i.currentVertexArrayObject == i.defaultVertexArrayObject ? null : i.currentVertexArrayObject : s.getParameter.apply(this, arguments);
            }, e.enableVertexAttribArray = function(t) {
                var e = i.currentVertexArrayObject;
                return e.maxAttrib = Math.max(e.maxAttrib, t), e.attribs[t].enabled = !0, s.enableVertexAttribArray.apply(this, arguments);
            }, e.disableVertexAttribArray = function(t) {
                var e = i.currentVertexArrayObject;
                return e.maxAttrib = Math.max(e.maxAttrib, t), e.attribs[t].enabled = !1, s.disableVertexAttribArray.apply(this, arguments);
            }, e.bindBuffer = function(t, r) {
                switch (t) {
                  case e.ARRAY_BUFFER:
                    i.currentArrayBuffer = r;
                    break;

                  case e.ELEMENT_ARRAY_BUFFER:
                    i.currentVertexArrayObject.elementArrayBuffer = r;
                }
                return s.bindBuffer.apply(this, arguments);
            }, e.getVertexAttrib = function(t, r) {
                var a = i.currentVertexArrayObject.attribs[t];
                switch (r) {
                  case e.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING:
                    return a.buffer;

                  case e.VERTEX_ATTRIB_ARRAY_ENABLED:
                    return a.enabled;

                  case e.VERTEX_ATTRIB_ARRAY_SIZE:
                    return a.size;

                  case e.VERTEX_ATTRIB_ARRAY_STRIDE:
                    return a.stride;

                  case e.VERTEX_ATTRIB_ARRAY_TYPE:
                    return a.type;

                  case e.VERTEX_ATTRIB_ARRAY_NORMALIZED:
                    return a.normalized;

                  default:
                    return s.getVertexAttrib.apply(this, arguments);
                }
            }, e.vertexAttribPointer = function(t, e, r, a, n, h) {
                var o = i.currentVertexArrayObject;
                o.maxAttrib = Math.max(o.maxAttrib, t);
                var l = o.attribs[t];
                return l.buffer = i.currentArrayBuffer, l.size = e, l.type = r, l.normalized = a, 
                l.stride = n, l.offset = h, l.recache(), s.vertexAttribPointer.apply(this, arguments);
            }, e.instrumentExtension && e.instrumentExtension(this, "OES_vertex_array_object"), 
            e.canvas.addEventListener("webglcontextrestored", function() {
                var t;
                t = "OESVertexArrayObject emulation library context restored", window.console && window.console.log && window.console.log(t), 
                i.reset_();
            }, !0), this.reset_();
        };
        i.prototype.VERTEX_ARRAY_BINDING_OES = 34229, i.prototype.reset_ = function() {
            if (void 0 !== this.vertexArrayObjects) for (var t = 0; t < this.vertexArrayObjects.length; ++t) {
                this.vertexArrayObjects.isAlive = !1;
            }
            var i = this.gl;
            this.maxVertexAttribs = i.getParameter(i.MAX_VERTEX_ATTRIBS), this.defaultVertexArrayObject = new e(this), 
            this.currentVertexArrayObject = null, this.currentArrayBuffer = null, this.vertexArrayObjects = [ this.defaultVertexArrayObject ], 
            this.bindVertexArrayOES(null);
        }, i.prototype.createVertexArrayOES = function() {
            var t = new e(this);
            return this.vertexArrayObjects.push(t), t;
        }, i.prototype.deleteVertexArrayOES = function(t) {
            t.isAlive = !1, this.vertexArrayObjects.splice(this.vertexArrayObjects.indexOf(t), 1), 
            this.currentVertexArrayObject == t && this.bindVertexArrayOES(null);
        }, i.prototype.isVertexArrayOES = function(t) {
            return !!(t && t instanceof e && t.hasBeenBound && t.ext == this);
        }, i.prototype.bindVertexArrayOES = function(t) {
            var e = this.gl;
            if (!t || t.isAlive) {
                var i = this.original, s = this.currentVertexArrayObject;
                this.currentVertexArrayObject = t || this.defaultVertexArrayObject, this.currentVertexArrayObject.hasBeenBound = !0;
                var r = this.currentVertexArrayObject;
                if (s != r) {
                    s && r.elementArrayBuffer == s.elementArrayBuffer || i.bindBuffer.call(e, e.ELEMENT_ARRAY_BUFFER, r.elementArrayBuffer);
                    for (var a = this.currentArrayBuffer, n = Math.max(s ? s.maxAttrib : 0, r.maxAttrib), h = 0; h <= n; h++) {
                        var o = r.attribs[h], l = s ? s.attribs[h] : null;
                        if (s && o.enabled == l.enabled || (o.enabled ? i.enableVertexAttribArray.call(e, h) : i.disableVertexAttribArray.call(e, h)), 
                        o.enabled) {
                            var _ = !1;
                            s && o.buffer == l.buffer || (a != o.buffer && (i.bindBuffer.call(e, e.ARRAY_BUFFER, o.buffer), 
                            a = o.buffer), _ = !0), (_ || o.cached != l.cached) && i.vertexAttribPointer.call(e, h, o.size, o.type, o.normalized, o.stride, o.offset);
                        }
                    }
                    this.currentArrayBuffer != a && i.bindBuffer.call(e, e.ARRAY_BUFFER, this.currentArrayBuffer);
                }
            } else synthesizeGLError(e.INVALID_OPERATION, "bindVertexArrayOES: attempt to bind deleted arrayObject");
        }, window._setupVertexArrayObject = function(t) {
            var e = t.getSupportedExtensions;
            t.getSupportedExtensions = function() {
                var t = e.call(this) || [];
                return t.indexOf("OES_vertex_array_object") < 0 && t.push("OES_vertex_array_object"), 
                t;
            };
            var s = t.getExtension;
            t.getExtension = function(t) {
                var e = s.call(this, t);
                return e || ("OES_vertex_array_object" !== t ? null : (this.__OESVertexArrayObject || (console.log("Setup OES_vertex_array_object polyfill"), 
                this.__OESVertexArrayObject = new i(this)), this.__OESVertexArrayObject));
            };
        };
    }();
    var _e = /* */ function() {
        function _e(t, e) {
            (0, _classCallCheck2.default)(this, _e);
            this._gl = null, this._vaoExt = null, this._angleInstancedArrays = null, this._isWebGL2 = !1, 
            this._oesTextureHalfFloat = null, this._oes_element_index_uint = null, this._oesTextureHalfFloatLinear = null, 
            this._oesTextureFloat = null, this._extShaderTextureLod = null, this._extTextureFilterAnisotropic = null, 
            this._compressedTextureS3tc = null, this._compressedTexturePvrtc = null, this._compressedTextureEtc1 = null, 
            this._compressedTextureETC = null, this._compressedTextureASTC = null, this._webgl_depth_texture = null, 
            this._extColorBufferFloat = null, this._gl = t, this._isWebGL2 = e;
            var s = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS), r = t.getParameter(t.MAX_TEXTURE_SIZE);
            e ? (this._extColorBufferFloat = this._getExtension("EXT_color_buffer_float"), B._shaderCapailityLevel = 35) : (i.Render.isConchApp || window._setupVertexArrayObject && window._setupVertexArrayObject(t), 
            this._vaoExt = this._getExtension("OES_vertex_array_object"), this._angleInstancedArrays = this._getExtension("ANGLE_instanced_arrays"), 
            this._oesTextureHalfFloat = this._getExtension("OES_texture_half_float"), this._oesTextureHalfFloatLinear = this._getExtension("OES_texture_half_float_linear"), 
            this._oesTextureFloat = this._getExtension("OES_texture_float"), this._oes_element_index_uint = this._getExtension("OES_element_index_uint"), 
            this._extShaderTextureLod = this._getExtension("EXT_shader_texture_lod"), this._webgl_depth_texture = this._getExtension("WEBGL_depth_texture"), 
            B._shaderCapailityLevel = 30), this._extTextureFilterAnisotropic = this._getExtension("EXT_texture_filter_anisotropic"), 
            this._compressedTextureS3tc = this._getExtension("WEBGL_compressed_texture_s3tc"), 
            this._compressedTexturePvrtc = this._getExtension("WEBGL_compressed_texture_pvrtc"), 
            this._compressedTextureEtc1 = this._getExtension("WEBGL_compressed_texture_etc1"), 
            this._compressedTextureETC = this._getExtension("WEBGL_compressed_texture_etc"), 
            this._compressedTextureASTC = this._getExtension("WEBGL_compressed_texture_astc"), 
            B._maxTextureCount = s, B._maxTextureSize = r;
        }
        (0, _createClass2.default)(_e, [ {
            key: "_getExtension",
            value: function _getExtension(t) {
                var e = _e._extentionVendorPrefixes;
                for (var i in e) {
                    var s = this._gl.getExtension(e[i] + t);
                    if (s) return s;
                }
                return null;
            }
        }, {
            key: "createVertexArray",
            value: function createVertexArray() {
                return this._isWebGL2 ? this._gl.createVertexArray() : this._vaoExt.createVertexArrayOES();
            }
        }, {
            key: "bindVertexArray",
            value: function bindVertexArray(t) {
                this._isWebGL2 ? this._gl.bindVertexArray(t) : this._vaoExt.bindVertexArrayOES(t);
            }
        }, {
            key: "deleteVertexArray",
            value: function deleteVertexArray(t) {
                this._isWebGL2 ? this._gl.deleteVertexArray(t) : this._vaoExt.deleteVertexArrayOES(t);
            }
        }, {
            key: "isVertexArray",
            value: function isVertexArray(t) {
                this._isWebGL2 ? this._gl.isVertexArray(t) : this._vaoExt.isVertexArrayOES(t);
            }
        }, {
            key: "drawElementsInstanced",
            value: function drawElementsInstanced(t, e, i, s, r) {
                this._isWebGL2 ? this._gl.drawElementsInstanced(t, e, i, s, r) : this._angleInstancedArrays.drawElementsInstancedANGLE(t, e, i, s, r);
            }
        }, {
            key: "drawArraysInstanced",
            value: function drawArraysInstanced(t, e, i, s) {
                this._isWebGL2 ? this._gl.drawArraysInstanced(t, e, i, s) : this._angleInstancedArrays.drawArraysInstancedANGLE(t, e, i, s);
            }
        }, {
            key: "vertexAttribDivisor",
            value: function vertexAttribDivisor(t, e) {
                this._isWebGL2 ? this._gl.vertexAttribDivisor(t, e) : this._angleInstancedArrays.vertexAttribDivisorANGLE(t, e);
            }
        }, {
            key: "supportInstance",
            value: function supportInstance() {
                return !(!this._isWebGL2 && !this._angleInstancedArrays || !e.allowGPUInstanceDynamicBatch);
            }
        }, {
            key: "supportElementIndexUint32",
            value: function supportElementIndexUint32() {
                return !(!this._isWebGL2 && !this._oes_element_index_uint);
            }
        } ]);
        return _e;
    }();
    _e._extentionVendorPrefixes = [ "", "WEBKIT_", "MOZ_" ];
    var ue = /* */ function() {
        function ue(t, e, s) {
            (0, _classCallCheck2.default)(this, ue);
            this._timeId = 0, ue._mainCanvas = s;
            var r = ue._mainCanvas.source;
            r.id = "layaCanvas", r.width = t, r.height = e, ue.isConchApp && document.body.appendChild(r), 
            this.initRender(ue._mainCanvas, t, e), window.requestAnimationFrame(function loop(t) {
                i.stage._loop();
                window.requestAnimationFrame(loop);
            }), i.stage.on("visibilitychange", this, this._onVisibilitychange);
        }
        (0, _createClass2.default)(ue, [ {
            key: "_onVisibilitychange",
            value: function _onVisibilitychange() {
                i.stage.isVisibility ? 0 != this._timeId && window.clearInterval(this._timeId) : this._timeId = window.setInterval(this._enterFrame, 1e3);
            }
        }, {
            key: "initRender",
            value: function initRender(t, i, s) {
                var r = g.instance = R.mainContext = function(t) {
                    var i, s = [ "webgl2", "webgl", "experimental-webgl", "webkit-3d", "moz-webgl" ];
                    e.useWebGL2 && !se.onBDMiniGame || s.shift();
                    for (var r = 0; r < s.length; r++) {
                        try {
                            i = t.getContext(s[r], {
                                stencil: e.isStencil,
                                alpha: e.isAlpha,
                                antialias: e.isAntialias,
                                premultipliedAlpha: e.premultipliedAlpha,
                                preserveDrawingBuffer: e.preserveDrawingBuffer
                            });
                        } catch (t) {}
                        if (i) return "webgl2" === s[r] && (le._isWebGL2 = !0), i;
                    }
                    return null;
                }(ue._mainCanvas.source);
                if (e.printWebglOrder && this._replaceWebglcall(r), !r) return !1;
                g.instance = r, g.layaGPUInstance = new _e(r, le._isWebGL2), t.size(i, s), he.__init__(), 
                dt.__init__();
                var a = new he();
                return a.isMain = !0, ue._context = a, t._setContext(a), V.__init__(), j.__init__(), 
                Nt.__init__(), At.__int__(r), W._init_(r), !0;
            }
        }, {
            key: "_replaceWebglcall",
            value: function _replaceWebglcall(t) {
                var e = {};
                var _loop = function _loop(_i6) {
                    "function" == typeof t[_i6] && "getError" != _i6 && "__SPECTOR_Origin_getError" != _i6 && "__proto__" != _i6 && (e[_i6] = t[_i6], 
                    t[_i6] = function() {
                        var s = [];
                        for (var _t4 = 0; _t4 < arguments.length; _t4++) {
                            s.push(arguments[_t4]);
                        }
                        var r = e[_i6].apply(t, s);
                        console.log(Et.loopCount + ":gl." + _i6 + ":" + s);
                        var a = t.getError();
                        return a && console.log(a), r;
                    });
                };
                for (var _i6 in t) {
                    _loop(_i6);
                }
            }
        }, {
            key: "_enterFrame",
            value: function _enterFrame() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                i.stage._loop();
            }
        } ], [ {
            key: "context",
            get: function get() {
                return ue._context;
            }
        }, {
            key: "canvas",
            get: function get() {
                return ue._mainCanvas.source;
            }
        } ]);
        return ue;
    }();
    ue.supportWebGLPlusAnimation = !1, ue.supportWebGLPlusRendering = !1, ue.isConchApp = !1, 
    ue.isConchApp = null != window.conch, ue.isConchApp ? ue.supportWebGLPlusRendering = !1 : null != window.qq && null != window.qq.webglPlus && (ue.supportWebGLPlusRendering = !1);
    var ce = /* */ function() {
        function ce() {
            (0, _classCallCheck2.default)(this, ce);
        }
        (0, _createClass2.default)(ce, [ {
            key: "recover",
            value: function recover() {
                this.texture = null, this.vertices = null, this.uvs = null, this.indices = null, 
                this.matrix = null, s.recover("DrawTrianglesCmd", this);
            }
        }, {
            key: "run",
            value: function run(t, e, i) {
                t.drawTriangles(this.texture, this.x + e, this.y + i, this.vertices, this.uvs, this.indices, this.matrix, this.alpha, this.color, this.blendMode, this.colorNum);
            }
        }, {
            key: "cmdID",
            get: function get() {
                return ce.ID;
            }
        } ], [ {
            key: "create",
            value: function create(t, e, i, r, a, n, h, o, l, _, u) {
                var c = s.getItemByClass("DrawTrianglesCmd", ce);
                if (c.texture = t, c.x = e, c.y = i, c.vertices = r, c.uvs = a, c.indices = n, c.matrix = h, 
                c.alpha = o, l) {
                    c.color = new tt();
                    var d = J.create(l).arrColor;
                    c.color.color(255 * d[0], 255 * d[1], 255 * d[2], 255 * d[3]);
                }
                return c.blendMode = _, c.colorNum = u, c;
            }
        } ]);
        return ce;
    }();
    ce.ID = "DrawTriangles";
    var de = /* */ function() {
        function de() {
            (0, _classCallCheck2.default)(this, de);
        }
        (0, _createClass2.default)(de, [ {
            key: "recover",
            value: function recover() {
                this.texture._removeReference(), s.recover("Draw9GridTexture", this);
            }
        }, {
            key: "run",
            value: function run(t, e, i) {
                t.drawTextureWithSizeGrid(this.texture, this.x, this.y, this.width, this.height, this.sizeGrid, e, i);
            }
        }, {
            key: "cmdID",
            get: function get() {
                return de.ID;
            }
        } ], [ {
            key: "create",
            value: function create(t, e, i, r, a, n) {
                var h = s.getItemByClass("Draw9GridTexture", de);
                return h.texture = t, t._addReference(), h.x = e, h.y = i, h.width = r, h.height = a, 
                h.sizeGrid = n, h;
            }
        } ]);
        return de;
    }();
    de.ID = "Draw9GridTexture";
    var pe = /* */ function() {
        function pe() {
            (0, _classCallCheck2.default)(this, pe);
        }
        (0, _createClass2.default)(pe, [ {
            key: "recover",
            value: function recover() {
                s.recover("SaveCmd", this);
            }
        }, {
            key: "run",
            value: function run(t, e, i) {
                t.save();
            }
        }, {
            key: "cmdID",
            get: function get() {
                return pe.ID;
            }
        } ], [ {
            key: "create",
            value: function create() {
                return s.getItemByClass("SaveCmd", pe);
            }
        } ]);
        return pe;
    }();
    pe.ID = "Save";
    var fe = /* */ function() {
        function fe() {
            (0, _classCallCheck2.default)(this, fe);
            this._cacheBoundsType = !1;
        }
        (0, _createClass2.default)(fe, [ {
            key: "destroy",
            value: function destroy() {
                this._graphics = null, this._cacheBoundsType = !1, this._temp && (this._temp.length = 0), 
                this._rstBoundPoints && (this._rstBoundPoints.length = 0), this._bounds && this._bounds.recover(), 
                this._bounds = null, s.recover("GraphicsBounds", this);
            }
        }, {
            key: "reset",
            value: function reset() {
                this._temp && (this._temp.length = 0);
            }
        }, {
            key: "getBounds",
            value: function getBounds() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
                return (!this._bounds || !this._temp || this._temp.length < 1 || t != this._cacheBoundsType) && (this._bounds = m._getWrapRec(this.getBoundPoints(t), this._bounds)), 
                this._cacheBoundsType = t, this._bounds;
            }
        }, {
            key: "getBoundPoints",
            value: function getBoundPoints() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
                return (!this._temp || this._temp.length < 1 || t != this._cacheBoundsType) && (this._temp = this._getCmdPoints(t)), 
                this._cacheBoundsType = t, this._rstBoundPoints = $.copyArray(this._rstBoundPoints, this._temp);
            }
        }, {
            key: "_getCmdPoints",
            value: function _getCmdPoints() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
                var e, i = this._graphics.cmds;
                if ((e = this._temp || (this._temp = [])).length = 0, i || null == this._graphics._one || (fe._tempCmds.length = 0, 
                fe._tempCmds.push(this._graphics._one), i = fe._tempCmds), !i) return e;
                var s = fe._tempMatrixArrays;
                s.length = 0;
                var p = fe._initMatrix;
                p.identity();
                for (var f, g, T = fe._tempMatrix, v = 0, x = i.length; v < x; v++) {
                    switch ((f = i[v]).cmdID) {
                      case r.ID:
                      case pe.ID:
                        s.push(p), p = p.clone();
                        break;

                      case st.ID:
                        p = s.pop();
                        break;

                      case at.ID:
                        T.identity(), T.translate(-f.pivotX, -f.pivotY), T.scale(f.scaleX, f.scaleY), T.translate(f.pivotX, f.pivotY), 
                        this._switchMatrix(p, T);
                        break;

                      case rt.ID:
                        T.identity(), T.translate(-f.pivotX, -f.pivotY), T.rotate(f.angle), T.translate(f.pivotX, f.pivotY), 
                        this._switchMatrix(p, T);
                        break;

                      case ht.ID:
                        T.identity(), T.translate(f.tx, f.ty), this._switchMatrix(p, T);
                        break;

                      case nt.ID:
                        T.identity(), T.translate(-f.pivotX, -f.pivotY), T.concat(f.matrix), T.translate(f.pivotX, f.pivotY), 
                        this._switchMatrix(p, T);
                        break;

                      case h.ID:
                      case it.ID:
                        fe._addPointArrToRst(e, m._getBoundPointS(f.x, f.y, f.width, f.height), p);
                        break;

                      case et.ID:
                        p.copyTo(T), f.matrix && T.concat(f.matrix), fe._addPointArrToRst(e, m._getBoundPointS(f.x, f.y, f.width, f.height), T);
                        break;

                      case h.ID:
                        if (g = f.texture, t) f.width && f.height ? fe._addPointArrToRst(e, m._getBoundPointS(f.x, f.y, f.width, f.height), p) : fe._addPointArrToRst(e, m._getBoundPointS(f.x, f.y, g.width, g.height), p); else {
                            var y = (f.width || g.sourceWidth) / g.width, E = (f.height || g.sourceHeight) / g.height, A = y * g.sourceWidth, C = E * g.sourceHeight, R = g.offsetX > 0 ? g.offsetX : 0, b = g.offsetY > 0 ? g.offsetY : 0;
                            R *= y, b *= E, fe._addPointArrToRst(e, m._getBoundPointS(f.x - R, f.y - b, A, C), p);
                        }
                        break;

                      case it.ID:
                        f.width && f.height ? fe._addPointArrToRst(e, m._getBoundPointS(f.x, f.y, f.width, f.height), p) : (g = f.texture, 
                        fe._addPointArrToRst(e, m._getBoundPointS(f.x, f.y, g.width, g.height), p));
                        break;

                      case et.ID:
                        var S;
                        f.matrix ? (p.copyTo(T), T.concat(f.matrix), S = T) : S = p, t ? f.width && f.height ? fe._addPointArrToRst(e, m._getBoundPointS(f.x, f.y, f.width, f.height), S) : (g = f.texture, 
                        fe._addPointArrToRst(e, m._getBoundPointS(f.x, f.y, g.width, g.height), S)) : (g = f.texture, 
                        y = (f.width || g.sourceWidth) / g.width, E = (f.height || g.sourceHeight) / g.height, 
                        A = y * g.sourceWidth, C = E * g.sourceHeight, R = g.offsetX > 0 ? g.offsetX : 0, 
                        b = g.offsetY > 0 ? g.offsetY : 0, R *= y, b *= E, fe._addPointArrToRst(e, m._getBoundPointS(f.x - R, f.y - b, A, C), S));
                        break;

                      case d.ID:
                        fe._addPointArrToRst(e, m._getBoundPointS(f.x, f.y, f.width, f.height), p);
                        break;

                      case a.ID:
                        fe._addPointArrToRst(e, m._getBoundPointS(f.x - f.radius, f.y - f.radius, f.radius + f.radius, f.radius + f.radius), p);
                        break;

                      case o.ID:
                        var w;
                        fe._tempPoints.length = 0, w = .5 * f.lineWidth, f.fromX == f.toX ? fe._tempPoints.push(f.fromX + w, f.fromY, f.toX + w, f.toY, f.fromX - w, f.fromY, f.toX - w, f.toY) : f.fromY == f.toY ? fe._tempPoints.push(f.fromX, f.fromY + w, f.toX, f.toY + w, f.fromX, f.fromY - w, f.toX, f.toY - w) : fe._tempPoints.push(f.fromX, f.fromY, f.toX, f.toY), 
                        fe._addPointArrToRst(e, fe._tempPoints, p);
                        break;

                      case n.ID:
                        fe._addPointArrToRst(e, ot.I.getBezierPoints(f.points), p, f.x, f.y);
                        break;

                      case l.ID:
                      case c.ID:
                        fe._addPointArrToRst(e, f.points, p, f.x, f.y);
                        break;

                      case _.ID:
                        fe._addPointArrToRst(e, this._getPathPoints(f.paths), p, f.x, f.y);
                        break;

                      case u.ID:
                        fe._addPointArrToRst(e, this._getPiePoints(f.x, f.y, f.radius, f.startAngle, f.endAngle), p);
                        break;

                      case ce.ID:
                        fe._addPointArrToRst(e, this._getTriAngBBXPoints(f.vertices), p);
                        break;

                      case de.ID:
                        fe._addPointArrToRst(e, this._getDraw9GridBBXPoints(f), p);
                    }
                }
                return e.length > 200 ? e = $.copyArray(e, m._getWrapRec(e)._getBoundPoints()) : e.length > 8 && (e = lt.scanPList(e)), 
                e;
            }
        }, {
            key: "_switchMatrix",
            value: function _switchMatrix(t, e) {
                e.concat(t), e.copyTo(t);
            }
        }, {
            key: "_getPiePoints",
            value: function _getPiePoints(t, e, i, s, r) {
                var a = fe._tempPoints;
                fe._tempPoints.length = 0;
                var n = Math.PI / 180, h = r - s;
                if (h >= 360 || h <= -360) return a.push(t - i, e - i), a.push(t + i, e - i), a.push(t + i, e + i), 
                a.push(t - i, e + i), a;
                a.push(t, e);
                var o = h % 360;
                o < 0 && (o += 360);
                var l = s + o, _ = s * n, u = l * n;
                a.push(t + i * Math.cos(_), e + i * Math.sin(_)), a.push(t + i * Math.cos(u), e + i * Math.sin(u));
                for (var c = 90 * Math.ceil(s / 90), d = 90 * Math.floor(l / 90), p = c; p <= d; p += 90) {
                    var f = p * n;
                    a.push(t + i * Math.cos(f), e + i * Math.sin(f));
                }
                return a;
            }
        }, {
            key: "_getTriAngBBXPoints",
            value: function _getTriAngBBXPoints(t) {
                var e = t.length;
                if (e < 2) return [];
                for (var i = t[0], s = t[1], r = i, a = s, n = 2; n < e; ) {
                    var h = t[n++], o = t[n++];
                    i > h && (i = h), s > o && (s = o), r < h && (r = h), a < o && (a = o);
                }
                return [ i, s, r, s, r, a, i, a ];
            }
        }, {
            key: "_getDraw9GridBBXPoints",
            value: function _getDraw9GridBBXPoints(t) {
                var e = t.width, i = t.height;
                return [ 0, 0, e, 0, e, i, 0, i ];
            }
        }, {
            key: "_getPathPoints",
            value: function _getPathPoints(t) {
                var e, i, s, r = fe._tempPoints;
                for (r.length = 0, i = t.length, e = 0; e < i; e++) {
                    (s = t[e]).length > 1 && (r.push(s[1], s[2]), s.length > 3 && r.push(s[3], s[4]));
                }
                return r;
            }
        } ], [ {
            key: "create",
            value: function create() {
                return s.getItemByClass("GraphicsBounds", fe);
            }
        }, {
            key: "_addPointArrToRst",
            value: function _addPointArrToRst(t, e, i) {
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
                var a, n;
                for (n = e.length, a = 0; a < n; a += 2) {
                    fe._addPointToRst(t, e[a] + s, e[a + 1] + r, i);
                }
            }
        }, {
            key: "_addPointToRst",
            value: function _addPointToRst(t, e, i, s) {
                var r = f.TEMP;
                r.setTo(e || 0, i || 0), s.transformPoint(r), t.push(r.x, r.y);
            }
        } ]);
        return fe;
    }();
    fe._tempMatrix = new p(), fe._initMatrix = new p(), fe._tempPoints = [], fe._tempMatrixArrays = [], 
    fe._tempCmds = [];
    var me = function me() {
        (0, _classCallCheck2.default)(this, me);
    };
    me.ALPHA = 1, me.TRANSFORM = 2, me.BLEND = 4, me.CANVAS = 8, me.FILTERS = 16, me.MASK = 32, 
    me.CLIP = 64, me.STYLE = 128, me.TEXTURE = 256, me.GRAPHICS = 512, me.LAYAGL3D = 1024, 
    me.CUSTOM = 2048, me.ONECHILD = 4096, me.CHILDS = 8192, me.REPAINT_NONE = 0, me.REPAINT_NODE = 1, 
    me.REPAINT_CACHE = 2, me.REPAINT_ALL = 3;
    var ge = /* */ function() {
        function ge() {
            (0, _classCallCheck2.default)(this, ge);
        }
        (0, _createClass2.default)(ge, [ {
            key: "recover",
            value: function recover() {
                s.recover("ClipRectCmd", this);
            }
        }, {
            key: "run",
            value: function run(t, e, i) {
                t.clipRect(this.x + e, this.y + i, this.width, this.height);
            }
        }, {
            key: "cmdID",
            get: function get() {
                return ge.ID;
            }
        } ], [ {
            key: "create",
            value: function create(t, e, i, r) {
                var a = s.getItemByClass("ClipRectCmd", ge);
                return a.x = t, a.y = e, a.width = i, a.height = r, a;
            }
        } ]);
        return ge;
    }();
    ge.ID = "ClipRect";
    var Te = /* */ function() {
        function Te() {
            (0, _classCallCheck2.default)(this, Te);
        }
        (0, _createClass2.default)(Te, [ {
            key: "recover",
            value: function recover() {
                this.texture._removeReference(), this.texture = null, this.pos = null, s.recover("DrawTexturesCmd", this);
            }
        }, {
            key: "run",
            value: function run(t, e, i) {
                t.drawTextures(this.texture, this.pos, e, i);
            }
        }, {
            key: "cmdID",
            get: function get() {
                return Te.ID;
            }
        } ], [ {
            key: "create",
            value: function create(t, e) {
                var i = s.getItemByClass("DrawTexturesCmd", Te);
                return i.texture = t, t._addReference(), i.pos = e, i;
            }
        } ]);
        return Te;
    }();
    Te.ID = "DrawTextures";
    var ve = /* */ function() {
        function ve() {
            (0, _classCallCheck2.default)(this, ve);
            this._textIsWorldText = !1, this._fontColor = 4294967295, this._strokeColor = 0, 
            this._fontObj = ve._defFontObj, this._nTexAlign = 0;
        }
        (0, _createClass2.default)(ve, [ {
            key: "recover",
            value: function recover() {
                s.recover("FillTextCmd", this);
            }
        }, {
            key: "run",
            value: function run(t, e, s) {
                i.stage.isGlobalRepaint() && this._textIsWorldText && this._text.cleanCache(), this._words ? he._textRender.fillWords(t, this._words, this.x + e, this.y + s, this._fontObj, this._color, this._borderColor, this._lineWidth) : this._textIsWorldText ? t._fast_filltext(this._text, this.x + e, this.y + s, this._fontObj, this._color, this._borderColor, this._lineWidth, this._nTexAlign, 0) : he._textRender.filltext(t, this._text, this.x + e, this.y + s, this.font, this.color, this._borderColor, this._lineWidth, this._textAlign);
            }
        }, {
            key: "cmdID",
            get: function get() {
                return ve.ID;
            }
        }, {
            key: "text",
            get: function get() {
                return this._text;
            },
            set: function set(t) {
                this._text = t, this._textIsWorldText = t instanceof te, this._textIsWorldText && this._text.cleanCache();
            }
        }, {
            key: "font",
            get: function get() {
                return this._font;
            },
            set: function set(t) {
                this._font = t, this._fontObj = Jt.Parse(t), this._textIsWorldText && this._text.cleanCache();
            }
        }, {
            key: "color",
            get: function get() {
                return this._color;
            },
            set: function set(t) {
                this._color = t, this._fontColor = J.create(t).numColor, this._textIsWorldText && this._text.cleanCache();
            }
        }, {
            key: "textAlign",
            get: function get() {
                return this._textAlign;
            },
            set: function set(t) {
                switch (this._textAlign = t, t) {
                  case "center":
                    this._nTexAlign = i.Context.ENUM_TEXTALIGN_CENTER;
                    break;

                  case "right":
                    this._nTexAlign = i.Context.ENUM_TEXTALIGN_RIGHT;
                    break;

                  default:
                    this._nTexAlign = i.Context.ENUM_TEXTALIGN_DEFAULT;
                }
                this._textIsWorldText && this._text.cleanCache();
            }
        } ], [ {
            key: "create",
            value: function create(t, e, i, r, a, n, h, o, l) {
                var _ = s.getItemByClass("FillTextCmd", ve);
                return _.text = t, _._textIsWorldText = t instanceof te, _._words = e, _.x = i, 
                _.y = r, _.font = a, _.color = n, _.textAlign = h, _._lineWidth = o, _._borderColor = l, 
                _;
            }
        } ]);
        return ve;
    }();
    ve.ID = "FillText", ve._defFontObj = new Jt(null);
    var xe = /* */ function() {
        function xe() {
            (0, _classCallCheck2.default)(this, xe);
        }
        (0, _createClass2.default)(xe, null, [ {
            key: "regCacheByFunction",
            value: function regCacheByFunction(t, e) {
                var i;
                xe.unRegCacheByFunction(t, e), i = {
                    tryDispose: t,
                    getCacheList: e
                }, xe._cacheList.push(i);
            }
        }, {
            key: "unRegCacheByFunction",
            value: function unRegCacheByFunction(t, e) {
                var i, s;
                for (s = xe._cacheList.length, i = 0; i < s; i++) {
                    if (xe._cacheList[i].tryDispose == t && xe._cacheList[i].getCacheList == e) return void xe._cacheList.splice(i, 1);
                }
            }
        }, {
            key: "forceDispose",
            value: function forceDispose() {
                var t, e = xe._cacheList.length;
                for (t = 0; t < e; t++) {
                    xe._cacheList[t].tryDispose(!0);
                }
            }
        }, {
            key: "beginCheck",
            value: function beginCheck() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 15e3;
                i.systemTimer.loop(t, null, xe._checkLoop);
            }
        }, {
            key: "stopCheck",
            value: function stopCheck() {
                i.systemTimer.clear(null, xe._checkLoop);
            }
        }, {
            key: "_checkLoop",
            value: function _checkLoop() {
                var t = xe._cacheList;
                if (!(t.length < 1)) {
                    var e, s, r = i.Browser.now();
                    for (s = e = t.length; e > 0 && (xe._index++, xe._index = xe._index % s, t[xe._index].tryDispose(!1), 
                    !(i.Browser.now() - r > xe.loopTimeLimit)); ) {
                        e--;
                    }
                }
            }
        } ]);
        return xe;
    }();
    xe.loopTimeLimit = 2, xe._cacheList = [], xe._index = 0;
    var ye = /* */ function() {
        function ye() {
            (0, _classCallCheck2.default)(this, ye);
            this.useDic = {}, this.shapeDic = {}, this.shapeLineDic = {}, this._id = 0, this._checkKey = !1, 
            this._freeIdArray = [], xe.regCacheByFunction(this.startDispose.bind(this), this.getCacheList.bind(this));
        }
        (0, _createClass2.default)(ye, [ {
            key: "getId",
            value: function getId() {
                return this._id++;
            }
        }, {
            key: "addShape",
            value: function addShape(t, e) {
                this.shapeDic[t] = e, this.useDic[t] || (this.useDic[t] = !0);
            }
        }, {
            key: "addLine",
            value: function addLine(t, e) {
                this.shapeLineDic[t] = e, this.shapeLineDic[t] || (this.shapeLineDic[t] = !0);
            }
        }, {
            key: "getShape",
            value: function getShape(t) {
                this._checkKey && null != this.useDic[t] && (this.useDic[t] = !0);
            }
        }, {
            key: "deleteShape",
            value: function deleteShape(t) {
                this.shapeDic[t] && (this.shapeDic[t] = null, delete this.shapeDic[t]), this.shapeLineDic[t] && (this.shapeLineDic[t] = null, 
                delete this.shapeLineDic[t]), null != this.useDic[t] && delete this.useDic[t];
            }
        }, {
            key: "getCacheList",
            value: function getCacheList() {
                var t, e = [];
                for (t in this.shapeDic) {
                    e.push(this.shapeDic[t]);
                }
                for (t in this.shapeLineDic) {
                    e.push(this.shapeLineDic[t]);
                }
                return e;
            }
        }, {
            key: "startDispose",
            value: function startDispose(t) {
                var e;
                for (e in this.useDic) {
                    this.useDic[e] = !1;
                }
                this._checkKey = !0;
            }
        }, {
            key: "endDispose",
            value: function endDispose() {
                if (this._checkKey) {
                    var t;
                    for (t in this.useDic) {
                        this.useDic[t] || this.deleteShape(t);
                    }
                    this._checkKey = !1;
                }
            }
        } ], [ {
            key: "getInstance",
            value: function getInstance() {
                return ye.instance = ye.instance || new ye();
            }
        } ]);
        return ye;
    }();
    var Ee = /* */ function() {
        function Ee() {
            (0, _classCallCheck2.default)(this, Ee);
            this._sp = null, this._one = null, this._render = this._renderEmpty, this._cmds = null, 
            this._vectorgraphArray = null, this._graphicBounds = null, this.autoDestroy = !1, 
            this._createData();
        }
        (0, _createClass2.default)(Ee, [ {
            key: "_createData",
            value: function _createData() {}
        }, {
            key: "_clearData",
            value: function _clearData() {}
        }, {
            key: "_destroyData",
            value: function _destroyData() {}
        }, {
            key: "destroy",
            value: function destroy() {
                this.clear(!0), this._graphicBounds && this._graphicBounds.destroy(), this._graphicBounds = null, 
                this._vectorgraphArray = null, this._sp && (this._sp._renderType = 0, this._sp._setRenderType(0), 
                this._sp = null), this._destroyData();
            }
        }, {
            key: "clear",
            value: function clear() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                if (t) {
                    var e = this._one;
                    if (this._cmds) {
                        var i, s = this._cmds.length;
                        for (i = 0; i < s; i++) {
                            (e = this._cmds[i]).recover();
                        }
                        this._cmds.length = 0;
                    } else e && e.recover();
                } else this._cmds = null;
                if (this._one = null, this._render = this._renderEmpty, this._clearData(), this._sp && (this._sp._renderType &= ~me.GRAPHICS, 
                this._sp._setRenderType(this._sp._renderType)), this._repaint(), this._vectorgraphArray) {
                    for (i = 0, s = this._vectorgraphArray.length; i < s; i++) {
                        ye.getInstance().deleteShape(this._vectorgraphArray[i]);
                    }
                    this._vectorgraphArray.length = 0;
                }
            }
        }, {
            key: "_clearBoundsCache",
            value: function _clearBoundsCache() {
                this._graphicBounds && this._graphicBounds.reset();
            }
        }, {
            key: "_initGraphicBounds",
            value: function _initGraphicBounds() {
                this._graphicBounds || (this._graphicBounds = fe.create(), this._graphicBounds._graphics = this);
            }
        }, {
            key: "_repaint",
            value: function _repaint() {
                this._clearBoundsCache(), this._sp && this._sp.repaint();
            }
        }, {
            key: "_isOnlyOne",
            value: function _isOnlyOne() {
                return !this._cmds || 0 === this._cmds.length;
            }
        }, {
            key: "getBounds",
            value: function getBounds() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
                return this._initGraphicBounds(), this._graphicBounds.getBounds(t);
            }
        }, {
            key: "getBoundPoints",
            value: function getBoundPoints() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
                return this._initGraphicBounds(), this._graphicBounds.getBoundPoints(t);
            }
        }, {
            key: "drawImage",
            value: function drawImage(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
                if (!t) return null;
                if (s || (s = t.sourceWidth), r || (r = t.sourceHeight), t.getIsReady()) {
                    var a = s / t.sourceWidth, n = r / t.sourceHeight;
                    if (s = t.width * a, r = t.height * n, s <= 0 || r <= 0) return null;
                    e += t.offsetX * a, i += t.offsetY * n;
                }
                this._sp && (this._sp._renderType |= me.GRAPHICS, this._sp._setRenderType(this._sp._renderType));
                var o = h.create.call(this, t, e, i, s, r);
                return null == this._one ? (this._one = o, this._render = this._renderOneImg) : this._saveToCmd(null, o), 
                this._repaint(), o;
            }
        }, {
            key: "drawTexture",
            value: function drawTexture(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
                var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
                var n = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 1;
                var h = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
                var o = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : null;
                var l = arguments.length > 9 ? arguments[9] : undefined;
                if (!t || n < .01) return null;
                if (!t.getIsReady()) return null;
                if (s || (s = t.sourceWidth), r || (r = t.sourceHeight), t.getIsReady()) {
                    var _ = s / t.sourceWidth, u = r / t.sourceHeight;
                    if (s = t.width * _, r = t.height * u, s <= 0 || r <= 0) return null;
                    e += t.offsetX * _, i += t.offsetY * u;
                }
                this._sp && (this._sp._renderType |= me.GRAPHICS, this._sp._setRenderType(this._sp._renderType));
                var c = et.create.call(this, t, e, i, s, r, a, n, h, o, l);
                return this._repaint(), this._saveToCmd(null, c);
            }
        }, {
            key: "drawTextures",
            value: function drawTextures(t, e) {
                return t ? this._saveToCmd(ue._context.drawTextures, Te.create.call(this, t, e)) : null;
            }
        }, {
            key: "drawTriangles",
            value: function drawTriangles(t, e, i, s, r, a) {
                var n = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
                var h = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1;
                var o = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : null;
                var l = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : null;
                var _ = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : 4294967295;
                return this._saveToCmd(ue._context.drawTriangles, ce.create.call(this, t, e, i, s, r, a, n, h, o, l, _));
            }
        }, {
            key: "fillTexture",
            value: function fillTexture(t, e, i) {
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
                var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "repeat";
                var n = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
                return t && t.getIsReady() ? this._saveToCmd(ue._context._fillTexture, it.create.call(this, t, e, i, s, r, a, n || f.EMPTY, {})) : null;
            }
        }, {
            key: "_saveToCmd",
            value: function _saveToCmd(t, e) {
                return this._sp && (this._sp._renderType |= me.GRAPHICS, this._sp._setRenderType(this._sp._renderType)), 
                null == this._one ? (this._one = e, this._render = this._renderOne) : (this._render = this._renderAll, 
                0 === (this._cmds || (this._cmds = [])).length && this._cmds.push(this._one), this._cmds.push(e)), 
                this._repaint(), e;
            }
        }, {
            key: "clipRect",
            value: function clipRect(t, e, i, s) {
                return this._saveToCmd(ue._context.clipRect, ge.create.call(this, t, e, i, s));
            }
        }, {
            key: "fillText",
            value: function fillText(t, e, s, r, a, n) {
                return this._saveToCmd(ue._context.fillText, ve.create.call(this, t, null, e, s, r || i.Text.defaultFontStr(), a, n, 0, ""));
            }
        }, {
            key: "fillBorderText",
            value: function fillBorderText(t, e, s, r, a, n, h, o) {
                return this._saveToCmd(ue._context.fillText, ve.create.call(this, t, null, e, s, r || i.Text.defaultFontStr(), a, n, h, o));
            }
        }, {
            key: "fillWords",
            value: function fillWords(t, e, s, r, a) {
                return this._saveToCmd(ue._context.fillText, ve.create.call(this, null, t, e, s, r || i.Text.defaultFontStr(), a, "", 0, null));
            }
        }, {
            key: "fillBorderWords",
            value: function fillBorderWords(t, e, s, r, a, n, h) {
                return this._saveToCmd(ue._context.fillText, ve.create.call(this, null, t, e, s, r || i.Text.defaultFontStr(), a, "", h, n));
            }
        }, {
            key: "strokeText",
            value: function strokeText(t, e, s, r, a, n, h) {
                return this._saveToCmd(ue._context.fillText, ve.create.call(this, t, null, e, s, r || i.Text.defaultFontStr(), null, h, n, a));
            }
        }, {
            key: "alpha",
            value: function alpha(t) {
                return this._saveToCmd(ue._context.alpha, r.create.call(this, t));
            }
        }, {
            key: "transform",
            value: function transform(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                return this._saveToCmd(ue._context._transform, nt.create.call(this, t, e, i));
            }
        }, {
            key: "rotate",
            value: function rotate(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                return this._saveToCmd(ue._context._rotate, rt.create.call(this, t, e, i));
            }
        }, {
            key: "scale",
            value: function scale(t, e) {
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
                return this._saveToCmd(ue._context._scale, at.create.call(this, t, e, i, s));
            }
        }, {
            key: "translate",
            value: function translate(t, e) {
                return this._saveToCmd(ue._context.translate, ht.create.call(this, t, e));
            }
        }, {
            key: "save",
            value: function save() {
                return this._saveToCmd(ue._context._save, pe.create.call(this));
            }
        }, {
            key: "restore",
            value: function restore() {
                return this._saveToCmd(ue._context.restore, st.create.call(this));
            }
        }, {
            key: "replaceText",
            value: function replaceText(t) {
                this._repaint();
                var e = this._cmds;
                if (e) {
                    for (var i = e.length - 1; i > -1; i--) {
                        if (this._isTextCmd(e[i])) return e[i].text = t, !0;
                    }
                } else if (this._one && this._isTextCmd(this._one)) return this._one.text = t, !0;
                return !1;
            }
        }, {
            key: "_isTextCmd",
            value: function _isTextCmd(t) {
                return t.cmdID == ve.ID;
            }
        }, {
            key: "replaceTextColor",
            value: function replaceTextColor(t) {
                this._repaint();
                var e = this._cmds;
                if (e) for (var i = e.length - 1; i > -1; i--) {
                    this._isTextCmd(e[i]) && this._setTextCmdColor(e[i], t);
                } else this._one && this._isTextCmd(this._one) && this._setTextCmdColor(this._one, t);
            }
        }, {
            key: "_setTextCmdColor",
            value: function _setTextCmdColor(t, e) {
                switch (t.cmdID) {
                  case ve.ID:
                    t.color = e;
                }
            }
        }, {
            key: "loadImage",
            value: function loadImage(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
                var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
                var n = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
                var h = i.Loader.getRes(t);
                h ? h.getIsReady() ? this.drawImage(h, e, s, r, a) : h.once(Qt.READY, this, this.drawImage, [ h, e, s, r, a ]) : ((h = new $t()).load(t), 
                i.Loader.cacheTexture(t, h), h.once(Qt.READY, this, this.drawImage, [ h, e, s, r, a ])), 
                null != n && (h.getIsReady() ? n.call(this._sp) : h.on(Qt.READY, this._sp, n));
            }
        }, {
            key: "_renderEmpty",
            value: function _renderEmpty(t, e, i, s) {}
        }, {
            key: "_renderAll",
            value: function _renderAll(t, e, i, s) {
                for (var r = this._cmds, a = 0, n = r.length; a < n; a++) {
                    r[a].run(e, i, s);
                }
            }
        }, {
            key: "_renderOne",
            value: function _renderOne(t, e, i, s) {
                e.sprite = t, this._one.run(e, i, s);
            }
        }, {
            key: "_renderOneImg",
            value: function _renderOneImg(t, e, i, s) {
                e.sprite = t, this._one.run(e, i, s);
            }
        }, {
            key: "drawLine",
            value: function drawLine(t, e, i, s, r) {
                var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
                var n = a < 1 || a % 2 == 0 ? 0 : .5;
                return this._saveToCmd(ue._context._drawLine, o.create.call(this, t + n, e + n, i + n, s + n, r, a, 0));
            }
        }, {
            key: "drawLines",
            value: function drawLines(t, e, i, s) {
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
                if (!i || i.length < 4) return null;
                var a = r < 1 || r % 2 == 0 ? 0 : .5;
                return this._saveToCmd(ue._context._drawLines, l.create.call(this, t + a, e + a, i, s, r, 0));
            }
        }, {
            key: "drawCurves",
            value: function drawCurves(t, e, i, s) {
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
                return this._saveToCmd(ue._context.drawCurves, n.create.call(this, t, e, i, s, r));
            }
        }, {
            key: "drawRect",
            value: function drawRect(t, e, i, s, r) {
                var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
                var n = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 1;
                var h = n >= 1 && a ? n / 2 : 0, o = a ? n : 0;
                return this._saveToCmd(ue._context.drawRect, d.create.call(this, t + h, e + h, i - o, s - o, r, a, n));
            }
        }, {
            key: "drawCircle",
            value: function drawCircle(t, e, i, s) {
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                var n = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
                var h = n >= 1 && r ? n / 2 : 0;
                return this._saveToCmd(ue._context._drawCircle, a.create.call(this, t, e, i - h, s, r, n, 0));
            }
        }, {
            key: "drawPie",
            value: function drawPie(t, e, i, s, r, a) {
                var n = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
                var h = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1;
                var o = h >= 1 && n ? h / 2 : 0, l = n ? h : 0;
                return this._saveToCmd(ue._context._drawPie, u.create.call(this, t + o, e + o, i - l, $.toRadian(s), $.toRadian(r), a, n, h, 0));
            }
        }, {
            key: "drawPoly",
            value: function drawPoly(t, e, i, s) {
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
                var n = !1;
                n = !(i.length > 6);
                var h = a >= 1 && r ? a % 2 == 0 ? 0 : .5 : 0;
                return this._saveToCmd(ue._context._drawPoly, c.create.call(this, t + h, e + h, i, s, r, a, n, 0));
            }
        }, {
            key: "drawPath",
            value: function drawPath(t, e, i) {
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                return this._saveToCmd(ue._context._drawPath, _.create.call(this, t, e, i, s, r));
            }
        }, {
            key: "draw9Grid",
            value: function draw9Grid(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
                var a = arguments.length > 5 ? arguments[5] : undefined;
                this._saveToCmd(null, de.create(t, e, i, s, r, a));
            }
        }, {
            key: "cmds",
            get: function get() {
                return this._cmds;
            },
            set: function set(t) {
                this._sp && (this._sp._renderType |= me.GRAPHICS, this._sp._setRenderType(this._sp._renderType)), 
                this._cmds = t, this._render = this._renderAll, this._repaint();
            }
        } ]);
        return Ee;
    }();
    var Ae = function Ae() {
        (0, _classCallCheck2.default)(this, Ae);
    };
    Ae.NOT_ACTIVE = 1, Ae.ACTIVE_INHIERARCHY = 2, Ae.AWAKED = 4, Ae.NOT_READY = 8, Ae.DISPLAY = 16, 
    Ae.HAS_ZORDER = 32, Ae.HAS_MOUSE = 64, Ae.DISPLAYED_INSTAGE = 128, Ae.DRAWCALL_OPTIMIZE = 256;
    var Ce = /* */ function() {
        function Ce() {
            (0, _classCallCheck2.default)(this, Ce);
        }
        (0, _createClass2.default)(Ce, null, [ {
            key: "__init__",
            value: function __init__() {
                Ce.map[me.ALPHA | me.TRANSFORM | me.GRAPHICS] = Ce.alpha_transform_drawLayaGL, Ce.map[me.ALPHA | me.GRAPHICS] = Ce.alpha_drawLayaGL, 
                Ce.map[me.TRANSFORM | me.GRAPHICS] = Ce.transform_drawLayaGL, Ce.map[me.TRANSFORM | me.CHILDS] = Ce.transform_drawNodes, 
                Ce.map[me.ALPHA | me.TRANSFORM | me.TEXTURE] = Ce.alpha_transform_drawTexture, Ce.map[me.ALPHA | me.TEXTURE] = Ce.alpha_drawTexture, 
                Ce.map[me.TRANSFORM | me.TEXTURE] = Ce.transform_drawTexture, Ce.map[me.GRAPHICS | me.CHILDS] = Ce.drawLayaGL_drawNodes;
            }
        }, {
            key: "transform_drawTexture",
            value: function transform_drawTexture(t, e, i, s) {
                t._style;
                var r = t.texture;
                e.saveTransform(Ce.curMat), e.transformByMatrix(t.transform, i, s);
                var a = t._width || r.sourceWidth, n = t._height || r.sourceHeight, h = a / r.sourceWidth, o = n / r.sourceHeight;
                if (a = r.width * h, n = r.height * o, a <= 0 || n <= 0) return null;
                var l = -t.pivotX + r.offsetX * h, _ = -t.pivotY + r.offsetY * o;
                e.drawTexture(r, l, _, a, n), e.restoreTransform(Ce.curMat);
            }
        }, {
            key: "alpha_drawTexture",
            value: function alpha_drawTexture(t, e, i, s) {
                var r, a = t._style, n = t.texture;
                if ((r = a.alpha) > .01 || t._needRepaint()) {
                    var h = e.globalAlpha;
                    e.globalAlpha *= r;
                    var o = t._width || n.width, l = t._height || n.height, _ = o / n.sourceWidth, u = l / n.sourceHeight;
                    if (o = n.width * _, l = n.height * u, o <= 0 || l <= 0) return null;
                    var c = i - a.pivotX + n.offsetX * _, d = s - a.pivotY + n.offsetY * u;
                    e.drawTexture(n, c, d, o, l), e.globalAlpha = h;
                }
            }
        }, {
            key: "alpha_transform_drawTexture",
            value: function alpha_transform_drawTexture(t, e, i, s) {
                var r, a = t._style, n = t.texture;
                if ((r = a.alpha) > .01 || t._needRepaint()) {
                    var h = e.globalAlpha;
                    e.globalAlpha *= r, e.saveTransform(Ce.curMat), e.transformByMatrix(t.transform, i, s);
                    var o = t._width || n.sourceWidth, l = t._height || n.sourceHeight, _ = o / n.sourceWidth, u = l / n.sourceHeight;
                    if (o = n.width * _, l = n.height * u, o <= 0 || l <= 0) return null;
                    var c = -a.pivotX + n.offsetX * _, d = -a.pivotY + n.offsetY * u;
                    e.drawTexture(n, c, d, o, l), e.restoreTransform(Ce.curMat), e.globalAlpha = h;
                }
            }
        }, {
            key: "alpha_transform_drawLayaGL",
            value: function alpha_transform_drawLayaGL(t, e, i, s) {
                var r, a = t._style;
                if ((r = a.alpha) > .01 || t._needRepaint()) {
                    var n = e.globalAlpha;
                    e.globalAlpha *= r, e.saveTransform(Ce.curMat), e.transformByMatrix(t.transform, i, s), 
                    t._graphics && t._graphics._render(t, e, -a.pivotX, -a.pivotY), e.restoreTransform(Ce.curMat), 
                    e.globalAlpha = n;
                }
            }
        }, {
            key: "alpha_drawLayaGL",
            value: function alpha_drawLayaGL(t, e, i, s) {
                var r, a = t._style;
                if ((r = a.alpha) > .01 || t._needRepaint()) {
                    var n = e.globalAlpha;
                    e.globalAlpha *= r, t._graphics && t._graphics._render(t, e, i - a.pivotX, s - a.pivotY), 
                    e.globalAlpha = n;
                }
            }
        }, {
            key: "transform_drawLayaGL",
            value: function transform_drawLayaGL(t, e, i, s) {
                var r = t._style;
                e.saveTransform(Ce.curMat), e.transformByMatrix(t.transform, i, s), t._graphics && t._graphics._render(t, e, -r.pivotX, -r.pivotY), 
                e.restoreTransform(Ce.curMat);
            }
        }, {
            key: "transform_drawNodes",
            value: function transform_drawNodes(t, e, i, s) {
                var r = t._getBit(Ae.DRAWCALL_OPTIMIZE) && e.drawCallOptimize(!0), a = t._style;
                e.saveTransform(Ce.curMat), e.transformByMatrix(t.transform, i, s), i = -a.pivotX, 
                s = -a.pivotY;
                var n, h = t._children, o = h.length;
                if (a.viewport) {
                    var l, _, u = a.viewport, c = u.x, d = u.y, p = u.right, f = u.bottom;
                    for (m = 0; m < o; ++m) {
                        (n = h[m])._visible && (l = n._x) < p && l + n.width > c && (_ = n._y) < f && _ + n.height > d && n.render(e, i, s);
                    }
                } else for (var m = 0; m < o; ++m) {
                    (n = h[m])._visible && n.render(e, i, s);
                }
                e.restoreTransform(Ce.curMat), r && e.drawCallOptimize(!1);
            }
        }, {
            key: "drawLayaGL_drawNodes",
            value: function drawLayaGL_drawNodes(t, e, i, s) {
                var r = t._getBit(Ae.DRAWCALL_OPTIMIZE) && e.drawCallOptimize(!0), a = t._style;
                i -= a.pivotX, s -= a.pivotY, t._graphics && t._graphics._render(t, e, i, s);
                var n, h = t._children, o = h.length;
                if (a.viewport) {
                    var l, _, u = a.viewport, c = u.x, d = u.y, p = u.right, f = u.bottom;
                    for (m = 0; m < o; ++m) {
                        (n = h[m])._visible && (l = n._x) < p && l + n.width > c && (_ = n._y) < f && _ + n.height > d && n.render(e, i, s);
                    }
                } else for (var m = 0; m < o; ++m) {
                    (n = h[m])._visible && n.render(e, i, s);
                }
                r && e.drawCallOptimize(!1);
            }
        } ]);
        return Ce;
    }();
    Ce.map = [], Ce.curMat = new p();
    var Re = /* */ function() {
        function Re(t, e) {
            (0, _classCallCheck2.default)(this, Re);
            if (Ce.map[t]) return this._fun = Ce.map[t], void (this._next = Re.NORENDER);
            switch (this._next = e || Re.NORENDER, t) {
              case 0:
                return void (this._fun = this._no);

              case me.ALPHA:
                return void (this._fun = this._alpha);

              case me.TRANSFORM:
                return void (this._fun = this._transform);

              case me.BLEND:
                return void (this._fun = this._blend);

              case me.CANVAS:
                return void (this._fun = this._canvas);

              case me.MASK:
                return void (this._fun = this._mask);

              case me.CLIP:
                return void (this._fun = this._clip);

              case me.STYLE:
                return void (this._fun = this._style);

              case me.GRAPHICS:
                return void (this._fun = this._graphics);

              case me.CHILDS:
                return void (this._fun = this._children);

              case me.CUSTOM:
                return void (this._fun = this._custom);

              case me.TEXTURE:
                return void (this._fun = this._texture);

              case me.FILTERS:
                return void (this._fun = Q._filter);

              case Re.INIT:
                return void (this._fun = Re._initRenderFun);
            }
            this.onCreate(t);
        }
        (0, _createClass2.default)(Re, [ {
            key: "onCreate",
            value: function onCreate(t) {}
        }, {
            key: "_style",
            value: function _style(t, e, i, s) {
                var r = t._style;
                null != r.render && r.render(t, e, i, s);
                var a = this._next;
                a._fun.call(a, t, e, i, s);
            }
        }, {
            key: "_no",
            value: function _no(t, e, i, s) {}
        }, {
            key: "_custom",
            value: function _custom(t, e, i, s) {
                t.customRender(e, i, s), this._next._fun.call(this._next, t, e, 0, 0);
            }
        }, {
            key: "_clip",
            value: function _clip(t, e, i, s) {
                var r = this._next;
                if (r != Re.NORENDER) {
                    var a = t._style.scrollRect, n = a.width, h = a.height;
                    0 !== n && 0 !== h && (e.save(), e.clipRect(i, s, n, h), r._fun.call(r, t, e, i - a.x, s - a.y), 
                    e.restore());
                }
            }
        }, {
            key: "_texture",
            value: function _texture(t, e, i, s) {
                var r = t.texture;
                if (r._getSource()) {
                    var a = t._width || r.sourceWidth, n = t._height || r.sourceHeight, h = a / r.sourceWidth, o = n / r.sourceHeight;
                    if (a = r.width * h, n = r.height * o, a <= 0 || n <= 0) return;
                    var l = i - t.pivotX + r.offsetX * h, _ = s - t.pivotY + r.offsetY * o;
                    e.drawTexture(r, l, _, a, n);
                }
                var u = this._next;
                u != Re.NORENDER && u._fun.call(u, t, e, i, s);
            }
        }, {
            key: "_graphics",
            value: function _graphics(t, e, i, s) {
                var r = t._style, a = t._graphics;
                a && a._render(t, e, i - r.pivotX, s - r.pivotY);
                var n = this._next;
                n != Re.NORENDER && n._fun.call(n, t, e, i, s);
            }
        }, {
            key: "_image",
            value: function _image(t, e, i, s) {
                var r = t._style;
                e.drawTexture2(i, s, r.pivotX, r.pivotY, t.transform, t._graphics._one);
            }
        }, {
            key: "_image2",
            value: function _image2(t, e, i, s) {
                var r = t._style;
                e.drawTexture2(i, s, r.pivotX, r.pivotY, t.transform, t._graphics._one);
            }
        }, {
            key: "_alpha",
            value: function _alpha(t, e, i, s) {
                var r;
                if ((r = t._style.alpha) > .01 || t._needRepaint()) {
                    var a = e.globalAlpha;
                    e.globalAlpha *= r;
                    var n = this._next;
                    n._fun.call(n, t, e, i, s), e.globalAlpha = a;
                }
            }
        }, {
            key: "_transform",
            value: function _transform(t, e, i, s) {
                var r = t.transform, a = this._next;
                t._style;
                r && a != Re.NORENDER ? (e.save(), e.transform(r.a, r.b, r.c, r.d, r.tx + i, r.ty + s), 
                a._fun.call(a, t, e, 0, 0), e.restore()) : a != Re.NORENDER && a._fun.call(a, t, e, i, s);
            }
        }, {
            key: "_children",
            value: function _children(t, e, i, s) {
                var r, a = t._style, n = t._children, h = n.length;
                i -= t.pivotX, s -= t.pivotY;
                var o = t._getBit(Ae.DRAWCALL_OPTIMIZE) && e.drawCallOptimize(!0);
                if (a.viewport) {
                    var l, _, u = a.viewport, c = u.x, d = u.y, p = u.right, f = u.bottom;
                    for (m = 0; m < h; ++m) {
                        (r = n[m])._visible && (l = r._x) < p && l + r.width > c && (_ = r._y) < f && _ + r.height > d && r.render(e, i, s);
                    }
                } else for (var m = 0; m < h; ++m) {
                    (r = n[m])._visible && r.render(e, i, s);
                }
                o && e.drawCallOptimize(!1);
            }
        }, {
            key: "_canvas",
            value: function _canvas(t, e, s, r) {
                var a = t._cacheStyle, n = this._next;
                if (a.enableCanvasRender) {
                    "bitmap" === a.cacheAs ? X.canvasBitmap++ : X.canvasNormal++;
                    var h = !1, o = !1;
                    if (a.canvas) {
                        var l = a.canvas, _ = (l.context, l.touches);
                        if (_) for (var u = 0; u < _.length; u++) {
                            if (_[u].deleted) {
                                o = !0;
                                break;
                            }
                        }
                        h = l.isCacheValid && !l.isCacheValid();
                    }
                    if (t._needRepaint() || !a.canvas || o || h || i.stage.isGlobalRepaint()) if ("normal" === a.cacheAs) {
                        if (e._targets) return void n._fun.call(n, t, e, s, r);
                        this._canvas_webgl_normal_repaint(t, e);
                    } else this._canvas_repaint(t, e, s, r);
                    var c = a.cacheRect;
                    e.drawCanvas(a.canvas, s + c.x, r + c.y, c.width, c.height);
                } else n._fun.call(n, t, e, s, r);
            }
        }, {
            key: "_canvas_repaint",
            value: function _canvas_repaint(t, e, i, s) {
                var r, a, n, h, o, l, _, u, c, d = t._cacheStyle, p = this._next, f = d.canvas, m = d.cacheAs;
                if (_ = (c = d._calculateCacheRect(t, m, i, s)).x, u = c.y, o = (h = d.cacheRect).width * _, 
                l = h.height * u, a = h.x, n = h.y, "bitmap" === m && (o > 2048 || l > 2048)) return console.warn("cache bitmap size larger than 2048,cache ignored"), 
                d.releaseContext(), void p._fun.call(p, t, e, i, s);
                if (f || (d.createContext(), f = d.canvas), (r = f.context).sprite = t, (f.width != o || f.height != l) && f.size(o, l), 
                "bitmap" === m ? r.asBitmap = !0 : "normal" === m && (r.asBitmap = !1), r.clear(), 
                1 != _ || 1 != u) {
                    var g = r;
                    g.save(), g.scale(_, u), p._fun.call(p, t, r, -a, -n), g.restore(), t._applyFilters();
                } else g = r, p._fun.call(p, t, r, -a, -n), t._applyFilters();
                d.staticCache && (d.reCache = !1), X.canvasReCache++;
            }
        }, {
            key: "_canvas_webgl_normal_repaint",
            value: function _canvas_webgl_normal_repaint(t, e) {
                var i = t._cacheStyle, s = this._next, r = i.canvas, a = i.cacheAs;
                i._calculateCacheRect(t, a, 0, 0), r || (r = new It(e, t), i.canvas = r);
                var n = r.context;
                r.startRec(), s._fun.call(s, t, n, t.pivotX, t.pivotY), t._applyFilters(), X.canvasReCache++, 
                r.endRec();
            }
        }, {
            key: "_blend",
            value: function _blend(t, e, i, s) {
                var r = t._style, a = this._next;
                r.blendMode ? (e.save(), e.globalCompositeOperation = r.blendMode, a._fun.call(a, t, e, i, s), 
                e.restore()) : a._fun.call(a, t, e, i, s);
            }
        }, {
            key: "_mask",
            value: function _mask(t, e, i, s) {
                var r = this._next, a = t.mask, n = e;
                if (a) {
                    n.save();
                    var h = n.globalCompositeOperation, o = new m();
                    if (o.copyFrom(a.getBounds()), o.width = Math.round(o.width), o.height = Math.round(o.height), 
                    o.x = Math.round(o.x), o.y = Math.round(o.y), o.width > 0 && o.height > 0) {
                        var l = o.width, _ = o.height, u = k.getRT(l, _);
                        n.breakNextMerge(), n.pushRT(), n.addRenderObject(Z.create([ n, u, l, _ ], Re.tmpTarget, this)), 
                        a.render(n, -o.x, -o.y), n.breakNextMerge(), n.popRT(), n.save();
                        var _e5 = .1;
                        n.clipRect(i + o.x - t.getStyle().pivotX + _e5, s + o.y - t.getStyle().pivotY + _e5, l - 2 * _e5, _ - 2 * _e5), 
                        r._fun.call(r, t, n, i, s), n.restore(), h = n.globalCompositeOperation, n.addRenderObject(Z.create([ "mask" ], Re.setBlendMode, this));
                        var c = j.create(V.TEXTURE2D, 0), d = $t.INV_UV;
                        n.drawTarget(u, i + o.x - t.getStyle().pivotX, s + o.y - t.getStyle().pivotY, l, _, p.TEMP.identity(), c, d, 6), 
                        n.addRenderObject(Z.create([ u ], Re.recycleTarget, this)), n.addRenderObject(Z.create([ h ], Re.setBlendMode, this));
                    }
                    n.restore();
                } else r._fun.call(r, t, e, i, s);
            }
        } ], [ {
            key: "__init__",
            value: function __init__() {
                var t, e, i;
                for (Ce.__init__(), i = new Re(Re.INIT, null), e = Re.renders.length = 2 * me.CHILDS, 
                t = 0; t < e; t++) {
                    Re.renders[t] = i;
                }
                Re.renders[0] = new Re(0, null);
            }
        }, {
            key: "_initRenderFun",
            value: function _initRenderFun(t, e, i, s) {
                var r = t._renderType;
                (Re.renders[r] = Re._getTypeRender(r))._fun(t, e, i, s);
            }
        }, {
            key: "_getTypeRender",
            value: function _getTypeRender(t) {
                if (Ce.map[t]) return new Re(t, null);
                for (var e = null, i = me.CHILDS; i > 0; ) {
                    i & t && (e = new Re(i, e)), i >>= 1;
                }
                return e;
            }
        }, {
            key: "tmpTarget",
            value: function tmpTarget(t, e, i, s) {
                e.start(), e.clear(0, 0, 0, 0);
            }
        }, {
            key: "recycleTarget",
            value: function recycleTarget(t) {
                k.releaseRT(t);
            }
        }, {
            key: "setBlendMode",
            value: function setBlendMode(t) {
                var e = R.mainContext;
                W.targetFns[W.TOINT[t]](e);
            }
        } ]);
        return Re;
    }();
    Re.INIT = 69905, Re.renders = [], Re.NORENDER = new Re(0, null), Re.tempUV = new Array(8);
    var be = /* */ function(_P2) {
        (0, _inherits2.default)(be, _P2);
        var _super26 = _createSuper(be);
        function be() {
            var _this21;
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
            (0, _classCallCheck2.default)(this, be);
            _this21 = _super26.call(this), _this21._source = t ? se.createElement("canvas") : (0, 
            _assertThisInitialized2.default)(_this21), _this21.lock = !0;
            return _this21;
        }
        (0, _createClass2.default)(be, [ {
            key: "_getSource",
            value: function _getSource() {
                return this._source;
            }
        }, {
            key: "clear",
            value: function clear() {
                this._ctx && (this._ctx.clear ? this._ctx.clear() : this._ctx.clearRect(0, 0, this._width, this._height)), 
                this._texture && (this._texture.destroy(), this._texture = null);
            }
        }, {
            key: "destroy",
            value: function destroy() {
                (0, _get2.default)((0, _getPrototypeOf2.default)(be.prototype), "destroy", this).call(this), 
                this._setCPUMemory(0), this._ctx && this._ctx.destroy && this._ctx.destroy(), this._ctx = null;
            }
        }, {
            key: "release",
            value: function release() {}
        }, {
            key: "_setContext",
            value: function _setContext(t) {
                this._ctx = t;
            }
        }, {
            key: "getContext",
            value: function getContext(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                return this.context;
            }
        }, {
            key: "getMemSize",
            value: function getMemSize() {
                return 0;
            }
        }, {
            key: "size",
            value: function size(t, e) {
                (this._width != t || this._height != e || this._source && (this._source.width != t || this._source.height != e)) && (this._width = t, 
                this._height = e, this._setCPUMemory(t * e * 4), this._ctx && this._ctx.size && this._ctx.size(t, e), 
                this._source && (this._source.height = e, this._source.width = t), this._texture && (this._texture.destroy(), 
                this._texture = null));
            }
        }, {
            key: "getTexture",
            value: function getTexture() {
                if (!this._texture) {
                    var t = new O();
                    t.loadImageSource(this.source), this._texture = new $t(t);
                }
                return this._texture;
            }
        }, {
            key: "toBase64",
            value: function toBase64(t, e) {
                if (this._source) {
                    if (i.Render.isConchApp) {
                        var s = window;
                        if (2 == s.conchConfig.threadMode) throw "native 2 thread mode use toBase64Async";
                        var r = this._ctx._targets.sourceWidth, a = this._ctx._targets.sourceHeight, n = this._ctx._targets.getData(0, 0, r, a);
                        return s.conchToBase64FlipY ? s.conchToBase64FlipY(t, e, n.buffer, r, a) : s.conchToBase64(t, e, n.buffer, r, a);
                    }
                    return this._source.toDataURL(t, e);
                }
                return null;
            }
        }, {
            key: "toBase64Async",
            value: function toBase64Async(t, e, i) {
                var s = this._ctx._targets.sourceWidth, r = this._ctx._targets.sourceHeight;
                this._ctx._targets.getDataAsync(0, 0, s, r, function(a) {
                    var n = window;
                    var h = n.conchToBase64FlipY ? n.conchToBase64FlipY(t, e, a.buffer, s, r) : n.conchToBase64(t, e, a.buffer, s, r);
                    i(h);
                });
            }
        }, {
            key: "source",
            get: function get() {
                return this._source;
            }
        }, {
            key: "context",
            get: function get() {
                return this._ctx ? this._ctx : (this._source == this ? this._ctx = new i.Context() : this._ctx = this._source.getContext(i.Render.isConchApp ? "layagl" : "2d"), 
                this._ctx._canvas = this, this._ctx);
            }
        } ]);
        return be;
    }(P);
    var Se = /* */ function() {
        function Se() {
            (0, _classCallCheck2.default)(this, Se);
        }
        (0, _createClass2.default)(Se, [ {
            key: "contains",
            value: function contains(t, e) {
                return !!Se._isHitGraphic(t, e, this.hit) && !Se._isHitGraphic(t, e, this.unHit);
            }
        }, {
            key: "hit",
            get: function get() {
                return this._hit || (this._hit = new i.Graphics()), this._hit;
            },
            set: function set(t) {
                this._hit = t;
            }
        }, {
            key: "unHit",
            get: function get() {
                return this._unHit || (this._unHit = new i.Graphics()), this._unHit;
            },
            set: function set(t) {
                this._unHit = t;
            }
        } ], [ {
            key: "_isHitGraphic",
            value: function _isHitGraphic(t, e, i) {
                if (!i) return !1;
                var s, r, a, n = i.cmds;
                if (!n && i._one && ((n = Se._cmds).length = 1, n[0] = i._one), !n) return !1;
                for (r = n.length, s = 0; s < r; s++) {
                    if (a = n[s]) {
                        switch (a.cmdID) {
                          case "Translate":
                            t -= a.tx, e -= a.ty;
                        }
                        if (Se._isHitCmd(t, e, a)) return !0;
                    }
                }
                return !1;
            }
        }, {
            key: "_isHitCmd",
            value: function _isHitCmd(t, e, i) {
                if (!i) return !1;
                var s = !1;
                switch (i.cmdID) {
                  case "DrawRect":
                    Se._rect.setTo(i.x, i.y, i.width, i.height), s = Se._rect.contains(t, e);
                    break;

                  case "DrawCircle":
                    s = (t -= i.x) * t + (e -= i.y) * e < i.radius * i.radius;
                    break;

                  case "DrawPoly":
                    t -= i.x, e -= i.y, s = Se._ptInPolygon(t, e, i.points);
                }
                return s;
            }
        }, {
            key: "_ptInPolygon",
            value: function _ptInPolygon(t, e, i) {
                var s = Se._ptPoint;
                s.setTo(t, e);
                var r, a, n, h, o, l = 0;
                o = i.length;
                for (var _ = 0; _ < o; _ += 2) {
                    if (r = i[_], a = i[_ + 1], n = i[(_ + 2) % o], a != (h = i[(_ + 3) % o])) if (!(s.y < Math.min(a, h))) if (!(s.y >= Math.max(a, h))) (s.y - a) * (n - r) / (h - a) + r > s.x && l++;
                }
                return l % 2 == 1;
            }
        } ]);
        return Se;
    }();
    Se._cmds = [], Se._rect = new m(), Se._ptPoint = new f();
    var we = /* */ function() {
        function we() {
            (0, _classCallCheck2.default)(this, we);
        }
        (0, _createClass2.default)(we, null, [ {
            key: "regClass",
            value: function regClass(t, e) {
                we._classMap[t] = e;
            }
        }, {
            key: "regShortClassName",
            value: function regShortClassName(t) {
                for (var e = 0; e < t.length; e++) {
                    var i = t[e], s = i.name;
                    we._classMap[s] = i;
                }
            }
        }, {
            key: "getRegClass",
            value: function getRegClass(t) {
                return we._classMap[t];
            }
        }, {
            key: "getClass",
            value: function getClass(t) {
                var e = we._classMap[t] || we._classMap["Laya." + t] || t, s = i.Laya;
                return "string" == typeof e ? i.__classMap[e] || s[t] : e;
            }
        }, {
            key: "getInstance",
            value: function getInstance(t) {
                var e = we.getClass(t);
                return e ? new e() : (console.warn("[error] Undefined class:", t), null);
            }
        }, {
            key: "createByJson",
            value: function createByJson(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                "string" == typeof t && (t = JSON.parse(t));
                var a = t.props;
                if (!e && !(e = r ? r.runWith(t) : we.getInstance(a.runtime || t.type))) return null;
                var n = t.child;
                if (n) for (var h = 0, o = n.length; h < o; h++) {
                    var l = n[h];
                    if ("render" !== l.props.name && "render" !== l.props.renderType || !e._$set_itemRender) {
                        if ("Graphic" == l.type) we._addGraphicsToSprite(l, e); else if (we._isDrawType(l.type)) we._addGraphicToSprite(l, e, !0); else {
                            var _ = we.createByJson(l, null, i, s, r);
                            "Script" === l.type ? "owner" in _ ? _.owner = e : "target" in _ && (_.target = e) : "mask" == l.props.renderType ? e.mask = _ : e.addChild(_);
                        }
                    } else e.itemRender = l;
                }
                if (a) for (var u in a) {
                    var c = a[u];
                    "var" === u && i ? i[c] = e : c instanceof Array && e[u] instanceof Function ? e[u].apply(e, c) : e[u] = c;
                }
                return s && t.customProps && s.runWith([ e, t ]), e.created && e.created(), e;
            }
        }, {
            key: "_addGraphicsToSprite",
            value: function _addGraphicsToSprite(t, e) {
                var i = t.child;
                if (i && !(i.length < 1)) {
                    var s, r, a = we._getGraphicsFromSprite(t, e), n = 0, h = 0;
                    for (t.props && (n = we._getObjVar(t.props, "x", 0), h = we._getObjVar(t.props, "y", 0)), 
                    0 != n && 0 != h && a.translate(n, h), r = i.length, s = 0; s < r; s++) {
                        we._addGraphicToGraphics(i[s], a);
                    }
                    0 != n && 0 != h && a.translate(-n, -h);
                }
            }
        }, {
            key: "_addGraphicToSprite",
            value: function _addGraphicToSprite(t, e) {
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
                var s = i ? we._getGraphicsFromSprite(t, e) : e.graphics;
                we._addGraphicToGraphics(t, s);
            }
        }, {
            key: "_getGraphicsFromSprite",
            value: function _getGraphicsFromSprite(t, e) {
                if (!t || !t.props) return e.graphics;
                var i = t.props.renderType;
                if ("hit" === i || "unHit" === i) {
                    var s = e._style.hitArea || (e.hitArea = new Se());
                    s[i] || (s[i] = new Ee());
                    var r = s[i];
                }
                return r || (r = e.graphics), r;
            }
        }, {
            key: "_getTransformData",
            value: function _getTransformData(t) {
                var e;
                ("pivotX" in t || "pivotY" in t) && (e = e || new p()).translate(-we._getObjVar(t, "pivotX", 0), -we._getObjVar(t, "pivotY", 0));
                var i = we._getObjVar(t, "scaleX", 1), s = we._getObjVar(t, "scaleY", 1), r = we._getObjVar(t, "rotation", 0);
                we._getObjVar(t, "skewX", 0), we._getObjVar(t, "skewY", 0);
                return 1 == i && 1 == s && 0 == r || ((e = e || new p()).scale(i, s), e.rotate(.0174532922222222 * r)), 
                e;
            }
        }, {
            key: "_addGraphicToGraphics",
            value: function _addGraphicToGraphics(t, e) {
                var i, s;
                if ((i = t.props) && (s = we.DrawTypeDic[t.type])) {
                    var r = e, a = we._getParams(i, s[1], s[2], s[3]), n = we._tM;
                    (n || 1 != we._alpha) && (r.save(), n && r.transform(n), 1 != we._alpha && r.alpha(we._alpha)), 
                    r[s[0]].apply(r, a), (n || 1 != we._alpha) && r.restore();
                }
            }
        }, {
            key: "_adptLineData",
            value: function _adptLineData(t) {
                return t[2] = parseFloat(t[0]) + parseFloat(t[2]), t[3] = parseFloat(t[1]) + parseFloat(t[3]), 
                t;
            }
        }, {
            key: "_adptTextureData",
            value: function _adptTextureData(t) {
                return t[0] = i.Loader.getRes(t[0]), t;
            }
        }, {
            key: "_adptLinesData",
            value: function _adptLinesData(t) {
                return t[2] = we._getPointListByStr(t[2]), t;
            }
        }, {
            key: "_isDrawType",
            value: function _isDrawType(t) {
                return "Image" !== t && t in we.DrawTypeDic;
            }
        }, {
            key: "_getParams",
            value: function _getParams(t, e) {
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var r, a, n, h = we._temParam;
                for (h.length = e.length, a = e.length, r = 0; r < a; r++) {
                    h[r] = we._getObjVar(t, e[r][0], e[r][1]);
                }
                return we._alpha = we._getObjVar(t, "alpha", 1), (n = we._getTransformData(t)) ? (i || (i = 0), 
                n.translate(h[i], h[i + 1]), h[i] = h[i + 1] = 0, we._tM = n) : we._tM = null, s && we[s] && (h = we[s](h)), 
                h;
            }
        }, {
            key: "_getPointListByStr",
            value: function _getPointListByStr(t) {
                var e, i, s = t.split(",");
                for (i = s.length, e = 0; e < i; e++) {
                    s[e] = parseFloat(s[e]);
                }
                return s;
            }
        }, {
            key: "_getObjVar",
            value: function _getObjVar(t, e, i) {
                return e in t ? t[e] : i;
            }
        } ]);
        return we;
    }();
    we.DrawTypeDic = {
        Rect: [ "drawRect", [ [ "x", 0 ], [ "y", 0 ], [ "width", 0 ], [ "height", 0 ], [ "fillColor", null ], [ "lineColor", null ], [ "lineWidth", 1 ] ] ],
        Circle: [ "drawCircle", [ [ "x", 0 ], [ "y", 0 ], [ "radius", 0 ], [ "fillColor", null ], [ "lineColor", null ], [ "lineWidth", 1 ] ] ],
        Pie: [ "drawPie", [ [ "x", 0 ], [ "y", 0 ], [ "radius", 0 ], [ "startAngle", 0 ], [ "endAngle", 0 ], [ "fillColor", null ], [ "lineColor", null ], [ "lineWidth", 1 ] ] ],
        Image: [ "drawTexture", [ [ "x", 0 ], [ "y", 0 ], [ "width", 0 ], [ "height", 0 ] ] ],
        Texture: [ "drawTexture", [ [ "skin", null ], [ "x", 0 ], [ "y", 0 ], [ "width", 0 ], [ "height", 0 ] ], 1, "_adptTextureData" ],
        FillTexture: [ "fillTexture", [ [ "skin", null ], [ "x", 0 ], [ "y", 0 ], [ "width", 0 ], [ "height", 0 ], [ "repeat", null ] ], 1, "_adptTextureData" ],
        FillText: [ "fillText", [ [ "text", "" ], [ "x", 0 ], [ "y", 0 ], [ "font", null ], [ "color", null ], [ "textAlign", null ] ], 1 ],
        Line: [ "drawLine", [ [ "x", 0 ], [ "y", 0 ], [ "toX", 0 ], [ "toY", 0 ], [ "lineColor", null ], [ "lineWidth", 0 ] ], 0, "_adptLineData" ],
        Lines: [ "drawLines", [ [ "x", 0 ], [ "y", 0 ], [ "points", "" ], [ "lineColor", null ], [ "lineWidth", 0 ] ], 0, "_adptLinesData" ],
        Curves: [ "drawCurves", [ [ "x", 0 ], [ "y", 0 ], [ "points", "" ], [ "lineColor", null ], [ "lineWidth", 0 ] ], 0, "_adptLinesData" ],
        Poly: [ "drawPoly", [ [ "x", 0 ], [ "y", 0 ], [ "points", "" ], [ "fillColor", null ], [ "lineColor", null ], [ "lineWidth", 1 ] ], 0, "_adptLinesData" ]
    }, we._temParam = [], we._classMap = {};
    var Me = /* */ function() {
        function Me() {
            (0, _classCallCheck2.default)(this, Me);
        }
        (0, _createClass2.default)(Me, [ {
            key: "reset",
            value: function reset() {
                return this.bounds && this.bounds.recover(), this.userBounds && this.userBounds.recover(), 
                this.bounds = null, this.userBounds = null, this.temBM = null, this;
            }
        }, {
            key: "recover",
            value: function recover() {
                s.recover("BoundsStyle", this.reset());
            }
        } ], [ {
            key: "create",
            value: function create() {
                return s.getItemByClass("BoundsStyle", Me);
            }
        } ]);
        return Me;
    }();
    var Ie = /* */ function() {
        function Ie() {
            (0, _classCallCheck2.default)(this, Ie);
            this.reset();
        }
        (0, _createClass2.default)(Ie, [ {
            key: "needBitmapCache",
            value: function needBitmapCache() {
                return this.cacheForFilters || !!this.mask;
            }
        }, {
            key: "needEnableCanvasRender",
            value: function needEnableCanvasRender() {
                return "none" != this.userSetCache || this.cacheForFilters || !!this.mask;
            }
        }, {
            key: "releaseContext",
            value: function releaseContext() {
                if (this.canvas && this.canvas.size) {
                    s.recover("CacheCanvas", this.canvas), this.canvas.size(0, 0);
                    try {
                        this.canvas.width = 0, this.canvas.height = 0;
                    } catch (t) {}
                }
                this.canvas = null;
            }
        }, {
            key: "createContext",
            value: function createContext() {
                if (!this.canvas) {
                    this.canvas = s.getItem("CacheCanvas") || new be(!1);
                    var t = this.canvas.context;
                    t || (t = this.canvas.getContext("2d"));
                }
            }
        }, {
            key: "releaseFilterCache",
            value: function releaseFilterCache() {
                var t = this.filterCache;
                t && (t.destroy(), t.recycle(), this.filterCache = null);
            }
        }, {
            key: "recover",
            value: function recover() {
                this !== Ie.EMPTY && s.recover("SpriteCache", this.reset());
            }
        }, {
            key: "reset",
            value: function reset() {
                return this.releaseContext(), this.releaseFilterCache(), this.cacheAs = "none", 
                this.enableCanvasRender = !1, this.userSetCache = "none", this.cacheForFilters = !1, 
                this.staticCache = !1, this.reCache = !0, this.mask = null, this.maskParent = null, 
                this.filterCache = null, this.filters = null, this.hasGlowFilter = !1, this.cacheRect && this.cacheRect.recover(), 
                this.cacheRect = null, this;
            }
        }, {
            key: "_calculateCacheRect",
            value: function _calculateCacheRect(t, e, i, s) {
                var r, a = t._cacheStyle;
                if (a.cacheRect || (a.cacheRect = m.create()), "bitmap" === e ? ((r = t.getSelfBounds()).width = r.width + 2 * Ie.CANVAS_EXTEND_EDGE, 
                r.height = r.height + 2 * Ie.CANVAS_EXTEND_EDGE, r.x = r.x - t.pivotX, r.y = r.y - t.pivotY, 
                r.x = r.x - Ie.CANVAS_EXTEND_EDGE, r.y = r.y - Ie.CANVAS_EXTEND_EDGE, r.x = Math.floor(r.x + i) - i, 
                r.y = Math.floor(r.y + s) - s, r.width = Math.floor(r.width), r.height = Math.floor(r.height), 
                a.cacheRect.copyFrom(r)) : a.cacheRect.setTo(-t._style.pivotX, -t._style.pivotY, 1, 1), 
                r = a.cacheRect, t._style.scrollRect) {
                    var n = t._style.scrollRect;
                    r.x -= n.x, r.y -= n.y;
                }
                return Ie._scaleInfo.setTo(1, 1), Ie._scaleInfo;
            }
        } ], [ {
            key: "create",
            value: function create() {
                return s.getItemByClass("SpriteCache", Ie);
            }
        } ]);
        return Ie;
    }();
    Ie.EMPTY = new Ie(), Ie._scaleInfo = new f(), Ie.CANVAS_EXTEND_EDGE = 16;
    var Pe = /* */ function() {
        function Pe() {
            (0, _classCallCheck2.default)(this, Pe);
            this.reset();
        }
        (0, _createClass2.default)(Pe, [ {
            key: "reset",
            value: function reset() {
                return this.scaleX = this.scaleY = 1, this.skewX = this.skewY = 0, this.pivotX = this.pivotY = this.rotation = 0, 
                this.alpha = 1, this.scrollRect && this.scrollRect.recover(), this.scrollRect = null, 
                this.viewport && this.viewport.recover(), this.viewport = null, this.hitArea = null, 
                this.dragging = null, this.blendMode = null, this;
            }
        }, {
            key: "recover",
            value: function recover() {
                this !== Pe.EMPTY && s.recover("SpriteStyle", this.reset());
            }
        } ], [ {
            key: "create",
            value: function create() {
                return s.getItemByClass("SpriteStyle", Pe);
            }
        } ]);
        return Pe;
    }();
    Pe.EMPTY = new Pe();
    var Le = /* */ function(_S3) {
        (0, _inherits2.default)(Le, _S3);
        var _super27 = _createSuper(Le);
        function Le() {
            var _this22;
            (0, _classCallCheck2.default)(this, Le);
            _this22 = _super27.call(this), _this22._bits = 0, _this22._children = Le.ARRAY_EMPTY, 
            _this22._extUIChild = Le.ARRAY_EMPTY, _this22._parent = null, _this22.name = "", 
            _this22.destroyed = !1, _this22.createGLBuffer();
            return _this22;
        }
        (0, _createClass2.default)(Le, [ {
            key: "createGLBuffer",
            value: function createGLBuffer() {}
        }, {
            key: "_setBit",
            value: function _setBit(t, e) {
                t === Ae.DISPLAY && this._getBit(t) != e && this._updateDisplayedInstage();
                e ? this._bits |= t : this._bits &= ~t;
            }
        }, {
            key: "_getBit",
            value: function _getBit(t) {
                return 0 != (this._bits & t);
            }
        }, {
            key: "_setUpNoticeChain",
            value: function _setUpNoticeChain() {
                this._getBit(Ae.DISPLAY) && this._setBitUp(Ae.DISPLAY);
            }
        }, {
            key: "_setBitUp",
            value: function _setBitUp(t) {
                var e = this;
                for (e._setBit(t, !0), e = e._parent; e; ) {
                    if (e._getBit(t)) return;
                    e._setBit(t, !0), e = e._parent;
                }
            }
        }, {
            key: "on",
            value: function on(t, e, i) {
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                return t !== Qt.DISPLAY && t !== Qt.UNDISPLAY || this._getBit(Ae.DISPLAY) || this._setBitUp(Ae.DISPLAY), 
                this._createListener(t, e, i, s, !1);
            }
        }, {
            key: "once",
            value: function once(t, e, i) {
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                return t !== Qt.DISPLAY && t !== Qt.UNDISPLAY || this._getBit(Ae.DISPLAY) || this._setBitUp(Ae.DISPLAY), 
                this._createListener(t, e, i, s, !0);
            }
        }, {
            key: "destroy",
            value: function destroy() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                this.destroyed = !0, this._destroyAllComponent(), this._parent && this._parent.removeChild(this), 
                this._children && (t ? this.destroyChildren() : this.removeChildren()), this.onDestroy(), 
                this._children = null, this.offAll();
            }
        }, {
            key: "onDestroy",
            value: function onDestroy() {}
        }, {
            key: "destroyChildren",
            value: function destroyChildren() {
                if (this._children) for (var t = 0, e = this._children.length; t < e; t++) {
                    this._children[0].destroy(!0);
                }
            }
        }, {
            key: "addChild",
            value: function addChild(t) {
                if (!t || this.destroyed || t === this) return t;
                if (t._zOrder && this._setBit(Ae.HAS_ZORDER, !0), t._parent === this) {
                    var e = this.getChildIndex(t);
                    e !== this._children.length - 1 && (this._children.splice(e, 1), this._children.push(t), 
                    this._childChanged());
                } else t._parent && t._parent.removeChild(t), this._children === Le.ARRAY_EMPTY && (this._children = []), 
                this._children.push(t), t._setParent(this), this._childChanged();
                return t;
            }
        }, {
            key: "addInputChild",
            value: function addInputChild(t) {
                if (this._extUIChild == Le.ARRAY_EMPTY) this._extUIChild = [ t ]; else {
                    if (this._extUIChild.indexOf(t) >= 0) return null;
                    this._extUIChild.push(t);
                }
                return null;
            }
        }, {
            key: "removeInputChild",
            value: function removeInputChild(t) {
                var e = this._extUIChild.indexOf(t);
                e >= 0 && this._extUIChild.splice(e, 1);
            }
        }, {
            key: "addChildren",
            value: function addChildren() {
                for (var e = 0, i = arguments.length; e < i; ) {
                    var _e6;
                    this.addChild((_e6 = e++, _e6 < 0 || arguments.length <= _e6 ? undefined : arguments[_e6]));
                }
            }
        }, {
            key: "addChildAt",
            value: function addChildAt(t, e) {
                if (!t || this.destroyed || t === this) return t;
                if (t._zOrder && this._setBit(Ae.HAS_ZORDER, !0), e >= 0 && e <= this._children.length) {
                    if (t._parent === this) {
                        var i = this.getChildIndex(t);
                        this._children.splice(i, 1), this._children.splice(e, 0, t), this._childChanged();
                    } else t._parent && t._parent.removeChild(t), this._children === Le.ARRAY_EMPTY && (this._children = []), 
                    this._children.splice(e, 0, t), t._setParent(this);
                    return t;
                }
                throw new Error("appendChildAt:The index is out of bounds");
            }
        }, {
            key: "getChildIndex",
            value: function getChildIndex(t) {
                return this._children.indexOf(t);
            }
        }, {
            key: "getChildByName",
            value: function getChildByName(t) {
                var e = this._children;
                if (e) for (var i = 0, s = e.length; i < s; i++) {
                    var r = e[i];
                    if (r.name === t) return r;
                }
                return null;
            }
        }, {
            key: "getChildAt",
            value: function getChildAt(t) {
                return this._children[t] || null;
            }
        }, {
            key: "setChildIndex",
            value: function setChildIndex(t, e) {
                var i = this._children;
                if (e < 0 || e >= i.length) throw new Error("setChildIndex:The index is out of bounds.");
                var s = this.getChildIndex(t);
                if (s < 0) throw new Error("setChildIndex:node is must child of this object.");
                return i.splice(s, 1), i.splice(e, 0, t), this._childChanged(), t;
            }
        }, {
            key: "_childChanged",
            value: function _childChanged() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            }
        }, {
            key: "removeChild",
            value: function removeChild(t) {
                if (!this._children) return t;
                var e = this._children.indexOf(t);
                return this.removeChildAt(e);
            }
        }, {
            key: "removeSelf",
            value: function removeSelf() {
                return this._parent && this._parent.removeChild(this), this;
            }
        }, {
            key: "removeChildByName",
            value: function removeChildByName(t) {
                var e = this.getChildByName(t);
                return e && this.removeChild(e), e;
            }
        }, {
            key: "removeChildAt",
            value: function removeChildAt(t) {
                var e = this.getChildAt(t);
                return e && (this._children.splice(t, 1), e._setParent(null)), e;
            }
        }, {
            key: "removeChildren",
            value: function removeChildren() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2147483647;
                if (this._children && this._children.length > 0) {
                    var i = this._children;
                    if (0 === t && e >= i.length - 1) {
                        var s = i;
                        this._children = Le.ARRAY_EMPTY;
                    } else s = i.splice(t, e - t + 1);
                    for (var r = 0, a = s.length; r < a; r++) {
                        s[r]._setParent(null);
                    }
                }
                return this;
            }
        }, {
            key: "replaceChild",
            value: function replaceChild(t, e) {
                var i = this._children.indexOf(e);
                return i > -1 ? (this._children.splice(i, 1, t), e._setParent(null), t._setParent(this), 
                t) : null;
            }
        }, {
            key: "_setParent",
            value: function _setParent(t) {
                this._parent !== t && (t ? (this._parent = t, this._onAdded(), this.event(Qt.ADDED), 
                this._getBit(Ae.DISPLAY) && (this._setUpNoticeChain(), t.displayedInStage && this._displayChild(this, !0)), 
                t._childChanged(this)) : (this._onRemoved(), this.event(Qt.REMOVED), this._parent._childChanged(), 
                this._getBit(Ae.DISPLAY) && this._displayChild(this, !1), this._parent = t));
            }
        }, {
            key: "_updateDisplayedInstage",
            value: function _updateDisplayedInstage() {
                var t;
                t = this;
                for (var e = i.stage, s = !1; t; ) {
                    if (t._getBit(Ae.DISPLAY)) {
                        s = t._getBit(Ae.DISPLAYED_INSTAGE);
                        break;
                    }
                    if (t === e || t._getBit(Ae.DISPLAYED_INSTAGE)) {
                        s = !0;
                        break;
                    }
                    t = t._parent;
                }
                this._setBit(Ae.DISPLAYED_INSTAGE, s);
            }
        }, {
            key: "_setDisplay",
            value: function _setDisplay(t) {
                this._getBit(Ae.DISPLAYED_INSTAGE) !== t && (this._setBit(Ae.DISPLAYED_INSTAGE, t), 
                t ? this.event(Qt.DISPLAY) : this.event(Qt.UNDISPLAY));
            }
        }, {
            key: "_displayChild",
            value: function _displayChild(t, e) {
                var i = t._children;
                if (i) for (var s = 0, r = i.length; s < r; s++) {
                    var a = i[s];
                    a._getBit(Ae.DISPLAY) && (a._children.length > 0 ? this._displayChild(a, e) : a._setDisplay(e));
                }
                t._setDisplay(e);
            }
        }, {
            key: "contains",
            value: function contains(t) {
                if (t === this) return !0;
                for (;t; ) {
                    if (t._parent === this) return !0;
                    t = t._parent;
                }
                return !1;
            }
        }, {
            key: "timerLoop",
            value: function timerLoop(t, e, s) {
                var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !0;
                var n = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !1;
                (this.scene ? this.scene.timer : i.timer).loop(t, e, s, r, a, n);
            }
        }, {
            key: "timerOnce",
            value: function timerOnce(t, e, s) {
                var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !0;
                (this.scene ? this.scene.timer : i.timer)._create(!1, !1, t, e, s, r, a);
            }
        }, {
            key: "frameLoop",
            value: function frameLoop(t, e, s) {
                var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !0;
                (this.scene ? this.scene.timer : i.timer)._create(!0, !0, t, e, s, r, a);
            }
        }, {
            key: "frameOnce",
            value: function frameOnce(t, e, s) {
                var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !0;
                (this.scene ? this.scene.timer : i.timer)._create(!0, !1, t, e, s, r, a);
            }
        }, {
            key: "clearTimer",
            value: function clearTimer(t, e) {
                (this.scene ? this.scene.timer : i.timer).clear(t, e);
            }
        }, {
            key: "callLater",
            value: function callLater(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                (this.scene ? this.scene.timer : i.timer).callLater(this, t, e);
            }
        }, {
            key: "runCallLater",
            value: function runCallLater(t) {
                (this.scene ? this.scene.timer : i.timer).runCallLater(this, t);
            }
        }, {
            key: "_onActive",
            value: function _onActive() {
                X.spriteCount++;
            }
        }, {
            key: "_onInActive",
            value: function _onInActive() {
                X.spriteCount--;
            }
        }, {
            key: "_onActiveInScene",
            value: function _onActiveInScene() {}
        }, {
            key: "_onInActiveInScene",
            value: function _onInActiveInScene() {}
        }, {
            key: "_parse",
            value: function _parse(t, e) {}
        }, {
            key: "_setBelongScene",
            value: function _setBelongScene(t) {
                if (!this._scene) {
                    this._scene = t, this._onActiveInScene();
                    for (var e = 0, i = this._children.length; e < i; e++) {
                        this._children[e]._setBelongScene(t);
                    }
                }
            }
        }, {
            key: "_setUnBelongScene",
            value: function _setUnBelongScene() {
                if (this._scene !== this) {
                    this._onInActiveInScene(), this._scene = null;
                    for (var t = 0, e = this._children.length; t < e; t++) {
                        this._children[t]._setUnBelongScene();
                    }
                }
            }
        }, {
            key: "onAwake",
            value: function onAwake() {}
        }, {
            key: "onEnable",
            value: function onEnable() {}
        }, {
            key: "_processActive",
            value: function _processActive() {
                this._activeChangeScripts || (this._activeChangeScripts = []), this._activeHierarchy(this._activeChangeScripts), 
                this._activeScripts();
            }
        }, {
            key: "_activeHierarchy",
            value: function _activeHierarchy(t) {
                if (this._setBit(Ae.ACTIVE_INHIERARCHY, !0), this._components) for (var e = 0, i = this._components.length; e < i; e++) {
                    var s = this._components[e];
                    s._isScript() ? s._enabled && t.push(s) : s._setActive(!0);
                }
                for (this._onActive(), e = 0, i = this._children.length; e < i; e++) {
                    var r = this._children[e];
                    !r._getBit(Ae.NOT_ACTIVE) && !r._getBit(Ae.NOT_READY) && r._activeHierarchy(t);
                }
                this._getBit(Ae.AWAKED) || (this._setBit(Ae.AWAKED, !0), this.onAwake()), this.onEnable();
            }
        }, {
            key: "_activeScripts",
            value: function _activeScripts() {
                for (var t = 0, e = this._activeChangeScripts.length; t < e; t++) {
                    var i = this._activeChangeScripts[t];
                    i._awaked || (i._awaked = !0, i._onAwake()), i._onEnable();
                }
                this._activeChangeScripts.length = 0;
            }
        }, {
            key: "_processInActive",
            value: function _processInActive() {
                this._activeChangeScripts || (this._activeChangeScripts = []), this._inActiveHierarchy(this._activeChangeScripts), 
                this._inActiveScripts();
            }
        }, {
            key: "_inActiveHierarchy",
            value: function _inActiveHierarchy(t) {
                if (this._onInActive(), this._components) for (var e = 0, i = this._components.length; e < i; e++) {
                    var s = this._components[e];
                    !s._isScript() && s._setActive(!1), s._isScript() && s._enabled && t.push(s);
                }
                for (this._setBit(Ae.ACTIVE_INHIERARCHY, !1), e = 0, i = this._children.length; e < i; e++) {
                    var r = this._children[e];
                    r && !r._getBit(Ae.NOT_ACTIVE) && r._inActiveHierarchy(t);
                }
                this.onDisable();
            }
        }, {
            key: "_inActiveScripts",
            value: function _inActiveScripts() {
                for (var t = 0, e = this._activeChangeScripts.length; t < e; t++) {
                    this._activeChangeScripts[t].owner && this._activeChangeScripts[t]._onDisable();
                }
                this._activeChangeScripts.length = 0;
            }
        }, {
            key: "onDisable",
            value: function onDisable() {}
        }, {
            key: "_onAdded",
            value: function _onAdded() {
                if (this._activeChangeScripts && 0 !== this._activeChangeScripts.length) throw "Node: can't set the main inActive node active in hierarchy,if the operate is in main inActive node or it's children script's onDisable Event.";
                var t = this._parent.scene;
                t && this._setBelongScene(t), this._parent.activeInHierarchy && this.active && this._processActive();
            }
        }, {
            key: "_onRemoved",
            value: function _onRemoved() {
                if (this._activeChangeScripts && 0 !== this._activeChangeScripts.length) throw "Node: can't set the main active node inActive in hierarchy,if the operate is in main active node or it's children script's onEnable Event.";
                this._parent.activeInHierarchy && this.active && this._processInActive(), this._parent.scene && this._setUnBelongScene();
            }
        }, {
            key: "_addComponentInstance",
            value: function _addComponentInstance(t) {
                this._components = this._components || [], this._components.push(t), t.owner = this, 
                t._onAdded(), this.activeInHierarchy && t._setActive(!0);
            }
        }, {
            key: "_destroyComponent",
            value: function _destroyComponent(t) {
                if (this._components) for (var e = 0, i = this._components.length; e < i; e++) {
                    var s = this._components[e];
                    if (s === t) {
                        s._destroy(), this._components.splice(e, 1);
                        break;
                    }
                }
            }
        }, {
            key: "_destroyAllComponent",
            value: function _destroyAllComponent() {
                if (this._components) {
                    for (var t = 0, e = this._components.length; t < e; t++) {
                        var i = this._components[t];
                        i && i._destroy();
                    }
                    this._components.length = 0;
                }
            }
        }, {
            key: "_cloneTo",
            value: function _cloneTo(t, e, i) {
                var s = t;
                if (this._components) for (var r = 0, a = this._components.length; r < a; r++) {
                    var n = s.addComponent(this._components[r].constructor);
                    this._components[r]._cloneTo(n);
                }
            }
        }, {
            key: "addComponentIntance",
            value: function addComponentIntance(t) {
                if (t.owner) throw "Node:the component has belong to other node.";
                if (t.isSingleton && this.getComponent(t.constructor)) throw "Node:the component is singleton,can't add the second one.";
                return this._addComponentInstance(t), t;
            }
        }, {
            key: "addComponent",
            value: function addComponent(t) {
                var e = s.createByClass(t);
                if (!e) throw t.toString() + "组件不存在";
                if (e._destroyed = !1, e.isSingleton && this.getComponent(t)) throw "无法实例" + t + "组件，" + t + "组件已存在！";
                return this._addComponentInstance(e), e;
            }
        }, {
            key: "getComponent",
            value: function getComponent(t) {
                if (this._components) for (var e = 0, i = this._components.length; e < i; e++) {
                    var s = this._components[e];
                    if (s instanceof t) return s;
                }
                return null;
            }
        }, {
            key: "getComponents",
            value: function getComponents(t) {
                var e;
                if (this._components) for (var i = 0, s = this._components.length; i < s; i++) {
                    var r = this._components[i];
                    r instanceof t && (e = e || []).push(r);
                }
                return e;
            }
        }, {
            key: "numChildren",
            get: function get() {
                return this._children.length;
            }
        }, {
            key: "parent",
            get: function get() {
                return this._parent;
            }
        }, {
            key: "displayedInStage",
            get: function get() {
                return this._getBit(Ae.DISPLAY) ? this._getBit(Ae.DISPLAYED_INSTAGE) : (this._setBitUp(Ae.DISPLAY), 
                this._getBit(Ae.DISPLAYED_INSTAGE));
            }
        }, {
            key: "scene",
            get: function get() {
                return this._scene;
            }
        }, {
            key: "active",
            get: function get() {
                return !this._getBit(Ae.NOT_READY) && !this._getBit(Ae.NOT_ACTIVE);
            },
            set: function set(t) {
                if (t = !!t, !this._getBit(Ae.NOT_ACTIVE) !== t) {
                    if (this._activeChangeScripts && 0 !== this._activeChangeScripts.length) throw t ? "Node: can't set the main inActive node active in hierarchy,if the operate is in main inActive node or it's children script's onDisable Event." : "Node: can't set the main active node inActive in hierarchy,if the operate is in main active node or it's children script's onEnable Event.";
                    this._setBit(Ae.NOT_ACTIVE, !t), this._parent && this._parent.activeInHierarchy && (t ? this._processActive() : this._processInActive());
                }
            }
        }, {
            key: "activeInHierarchy",
            get: function get() {
                return this._getBit(Ae.ACTIVE_INHIERARCHY);
            }
        }, {
            key: "timer",
            get: function get() {
                return this.scene ? this.scene.timer : i.timer;
            }
        } ]);
        return Le;
    }(S);
    Le.ARRAY_EMPTY = [], we.regClass("laya.display.Node", Le), we.regClass("Laya.Node", Le);
    var De = /* */ function(_Le) {
        (0, _inherits2.default)(De, _Le);
        var _super28 = _createSuper(De);
        function De() {
            var _this23;
            (0, _classCallCheck2.default)(this, De);
            _this23 = _super28.call(this), _this23._x = 0, _this23._y = 0, _this23._width = 0, 
            _this23._height = 0, _this23._visible = !0, _this23._mouseState = 0, _this23._zOrder = 0, 
            _this23._renderType = 0, _this23._transform = null, _this23._tfChanged = !1, _this23._repaint = me.REPAINT_NONE, 
            _this23._texture = null, _this23._style = Pe.EMPTY, _this23._cacheStyle = Ie.EMPTY, 
            _this23._boundStyle = null, _this23._graphics = null, _this23.mouseThrough = !1, 
            _this23.autoSize = !1, _this23.hitTestPrior = !1;
            return _this23;
        }
        (0, _createClass2.default)(De, [ {
            key: "destroy",
            value: function destroy() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                (0, _get2.default)((0, _getPrototypeOf2.default)(De.prototype), "destroy", this).call(this, t), 
                this._style && this._style.recover(), this._cacheStyle && this._cacheStyle.recover(), 
                this._boundStyle && this._boundStyle.recover(), this._style = null, this._cacheStyle = null, 
                this._boundStyle = null, this._transform = null, this._graphics && this._graphics.autoDestroy && this._graphics.destroy(), 
                this._graphics = null, this.texture = null;
            }
        }, {
            key: "updateZOrder",
            value: function updateZOrder() {
                $.updateOrder(this._children) && this.repaint();
            }
        }, {
            key: "_getBoundsStyle",
            value: function _getBoundsStyle() {
                return this._boundStyle || (this._boundStyle = Me.create()), this._boundStyle;
            }
        }, {
            key: "_setCustomRender",
            value: function _setCustomRender() {}
        }, {
            key: "_setCacheAs",
            value: function _setCacheAs(t) {}
        }, {
            key: "_checkCanvasEnable",
            value: function _checkCanvasEnable() {
                var t = this._cacheStyle.needEnableCanvasRender();
                this._getCacheStyle().enableCanvasRender = t, t ? (this._cacheStyle.needBitmapCache() ? this._cacheStyle.cacheAs = "bitmap" : this._cacheStyle.cacheAs = this._cacheStyle.userSetCache, 
                this._cacheStyle.reCache = !0, this._renderType |= me.CANVAS) : (this._cacheStyle.cacheAs = "none", 
                this._cacheStyle.releaseContext(), this._renderType &= ~me.CANVAS), this._setCacheAs(this._cacheStyle.cacheAs), 
                this._setRenderType(this._renderType);
            }
        }, {
            key: "reCache",
            value: function reCache() {
                this._cacheStyle.reCache = !0, this._repaint |= me.REPAINT_CACHE;
            }
        }, {
            key: "getRepaint",
            value: function getRepaint() {
                return this._repaint;
            }
        }, {
            key: "_setX",
            value: function _setX(t) {
                this._x = t;
            }
        }, {
            key: "_setY",
            value: function _setY(t) {
                this._y = t;
            }
        }, {
            key: "_setWidth",
            value: function _setWidth(t, e) {}
        }, {
            key: "_setHeight",
            value: function _setHeight(t, e) {}
        }, {
            key: "set_width",
            value: function set_width(t) {
                this._width !== t && (this._width = t, this._setWidth(this.texture, t), this._setTranformChange());
            }
        }, {
            key: "get_width",
            value: function get_width() {
                return this.autoSize ? this.texture ? this.texture.width : this._graphics || 0 !== this._children.length ? this.getSelfBounds().width : 0 : this._width || (this.texture ? this.texture.width : 0);
            }
        }, {
            key: "set_height",
            value: function set_height(t) {
                this._height !== t && (this._height = t, this._setHeight(this.texture, t), this._setTranformChange());
            }
        }, {
            key: "get_height",
            value: function get_height() {
                return this.autoSize ? this.texture ? this.texture.height : this._graphics || 0 !== this._children.length ? this.getSelfBounds().height : 0 : this._height || (this.texture ? this.texture.height : 0);
            }
        }, {
            key: "setSelfBounds",
            value: function setSelfBounds(t) {
                this._getBoundsStyle().userBounds = t;
            }
        }, {
            key: "getBounds",
            value: function getBounds() {
                return this._getBoundsStyle().bounds = m._getWrapRec(this._boundPointsToParent());
            }
        }, {
            key: "getSelfBounds",
            value: function getSelfBounds() {
                return this._boundStyle && this._boundStyle.userBounds ? this._boundStyle.userBounds : this._graphics || 0 !== this._children.length || this._texture ? this._getBoundsStyle().bounds = m._getWrapRec(this._getBoundPointsM(!1)) : m.TEMP.setTo(0, 0, this.width, this.height);
            }
        }, {
            key: "_boundPointsToParent",
            value: function _boundPointsToParent() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
                var e = 0, i = 0;
                this._style && (e = this.pivotX, i = this.pivotY, t = t || 0 !== this._style.rotation, 
                this._style.scrollRect && (e += this._style.scrollRect.x, i += this._style.scrollRect.y));
                var s = this._getBoundPointsM(t);
                if (!s || s.length < 1) return s;
                if (8 != s.length && (s = t ? lt.scanPList(s) : m._getWrapRec(s, m.TEMP)._getBoundPoints()), 
                !this.transform) return $.transPointList(s, this._x - e, this._y - i), s;
                var r, a = f.TEMP, n = s.length;
                for (r = 0; r < n; r += 2) {
                    a.x = s[r], a.y = s[r + 1], this.toParentPoint(a), s[r] = a.x, s[r + 1] = a.y;
                }
                return s;
            }
        }, {
            key: "getGraphicBounds",
            value: function getGraphicBounds() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
                return this._graphics ? this._graphics.getBounds(t) : m.TEMP.setTo(0, 0, 0, 0);
            }
        }, {
            key: "_getBoundPointsM",
            value: function _getBoundPointsM() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
                if (this._boundStyle && this._boundStyle.userBounds) return this._boundStyle.userBounds._getBoundPoints();
                if (this._boundStyle || this._getBoundsStyle(), this._boundStyle.temBM || (this._boundStyle.temBM = []), 
                this._style.scrollRect) {
                    var e = $.clearArray(this._boundStyle.temBM), i = m.TEMP;
                    return i.copyFrom(this._style.scrollRect), $.concatArray(e, i._getBoundPoints()), 
                    e;
                }
                var s, r, a, n;
                s = this._graphics ? this._graphics.getBoundPoints() : $.clearArray(this._boundStyle.temBM), 
                this._texture && ((i = m.TEMP).setTo(0, 0, this.width || this._texture.width, this.height || this._texture.height), 
                $.concatArray(s, i._getBoundPoints()));
                for (var h = 0, o = (n = this._children).length; h < o; h++) {
                    (r = n[h]) instanceof De && !0 === r._visible && (a = r._boundPointsToParent(t)) && (s = s ? $.concatArray(s, a) : a);
                }
                return s;
            }
        }, {
            key: "_getCacheStyle",
            value: function _getCacheStyle() {
                return this._cacheStyle === Ie.EMPTY && (this._cacheStyle = Ie.create()), this._cacheStyle;
            }
        }, {
            key: "getStyle",
            value: function getStyle() {
                return this._style === Pe.EMPTY && (this._style = Pe.create()), this._style;
            }
        }, {
            key: "setStyle",
            value: function setStyle(t) {
                this._style = t;
            }
        }, {
            key: "_setScaleX",
            value: function _setScaleX(t) {
                this._style.scaleX = t;
            }
        }, {
            key: "_setScaleY",
            value: function _setScaleY(t) {
                this._style.scaleY = t;
            }
        }, {
            key: "set_scaleX",
            value: function set_scaleX(t) {
                this.getStyle().scaleX !== t && (this._setScaleX(t), this._setTranformChange());
            }
        }, {
            key: "get_scaleX",
            value: function get_scaleX() {
                return this._style.scaleX;
            }
        }, {
            key: "set_scaleY",
            value: function set_scaleY(t) {
                this.getStyle().scaleY !== t && (this._setScaleY(t), this._setTranformChange());
            }
        }, {
            key: "get_scaleY",
            value: function get_scaleY() {
                return this._style.scaleY;
            }
        }, {
            key: "_setRotation",
            value: function _setRotation(t) {
                this._style.rotation = t;
            }
        }, {
            key: "_setSkewX",
            value: function _setSkewX(t) {
                this._style.skewX = t;
            }
        }, {
            key: "_setSkewY",
            value: function _setSkewY(t) {
                this._style.skewY = t;
            }
        }, {
            key: "_createTransform",
            value: function _createTransform() {
                return p.create();
            }
        }, {
            key: "_adjustTransform",
            value: function _adjustTransform() {
                this._tfChanged = !1;
                var t = this._style, e = t.scaleX, i = t.scaleY, s = t.skewX, r = t.skewY, a = t.rotation, n = this._transform || (this._transform = this._createTransform());
                if (a || 1 !== e || 1 !== i || 0 !== s || 0 !== r) {
                    n._bTransform = !0;
                    var h = .0174532922222222 * (a - s), o = .0174532922222222 * (a + r), l = Math.cos(o), _ = Math.sin(o), u = Math.sin(h), c = Math.cos(h);
                    n.a = e * l, n.b = e * _, n.c = -i * u, n.d = i * c, n.tx = n.ty = 0;
                } else n.identity(), this._renderType &= ~me.TRANSFORM, this._setRenderType(this._renderType);
                return n;
            }
        }, {
            key: "_setTransform",
            value: function _setTransform(t) {}
        }, {
            key: "get_transform",
            value: function get_transform() {
                return this._tfChanged ? this._adjustTransform() : this._transform;
            }
        }, {
            key: "set_transform",
            value: function set_transform(t) {
                this._tfChanged = !1;
                var e = this._transform || (this._transform = this._createTransform());
                t.copyTo(e), this._setTransform(e), t && (this._x = e.tx, this._y = e.ty, e.tx = e.ty = 0), 
                t ? this._renderType |= me.TRANSFORM : this._renderType &= ~me.TRANSFORM, this._setRenderType(this._renderType), 
                this.parentRepaint();
            }
        }, {
            key: "_setPivotX",
            value: function _setPivotX(t) {
                this.getStyle().pivotX = t;
            }
        }, {
            key: "_getPivotX",
            value: function _getPivotX() {
                return this._style.pivotX;
            }
        }, {
            key: "_setPivotY",
            value: function _setPivotY(t) {
                this.getStyle().pivotY = t;
            }
        }, {
            key: "_getPivotY",
            value: function _getPivotY() {
                return this._style.pivotY;
            }
        }, {
            key: "_setAlpha",
            value: function _setAlpha(t) {
                this._style.alpha !== t && (this.getStyle().alpha = t, 1 !== t ? this._renderType |= me.ALPHA : this._renderType &= ~me.ALPHA, 
                this._setRenderType(this._renderType), this.parentRepaint());
            }
        }, {
            key: "_getAlpha",
            value: function _getAlpha() {
                return this._style.alpha;
            }
        }, {
            key: "get_visible",
            value: function get_visible() {
                return this._visible;
            }
        }, {
            key: "set_visible",
            value: function set_visible(t) {
                this._visible !== t && (this._visible = t, this.parentRepaint(me.REPAINT_ALL));
            }
        }, {
            key: "_setBlendMode",
            value: function _setBlendMode(t) {}
        }, {
            key: "_setGraphics",
            value: function _setGraphics(t) {}
        }, {
            key: "_setGraphicsCallBack",
            value: function _setGraphicsCallBack() {}
        }, {
            key: "_setScrollRect",
            value: function _setScrollRect(t) {}
        }, {
            key: "pos",
            value: function pos(t, e) {
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
                if (this._x !== t || this._y !== e) {
                    if (this.destroyed) return this;
                    if (i) {
                        this._setX(t), this._setY(e), this.parentRepaint(me.REPAINT_CACHE);
                        var s = this._cacheStyle.maskParent;
                        s && s.repaint(me.REPAINT_CACHE);
                    } else this.x = t, this.y = e;
                }
                return this;
            }
        }, {
            key: "pivot",
            value: function pivot(t, e) {
                return this.pivotX = t, this.pivotY = e, this;
            }
        }, {
            key: "size",
            value: function size(t, e) {
                return this.width = t, this.height = e, this;
            }
        }, {
            key: "scale",
            value: function scale(t, e) {
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
                var s = this.getStyle();
                if (s.scaleX != t || s.scaleY != e) {
                    if (this.destroyed) return this;
                    i ? (this._setScaleX(t), this._setScaleY(e), this._setTranformChange()) : (this.scaleX = t, 
                    this.scaleY = e);
                }
                return this;
            }
        }, {
            key: "skew",
            value: function skew(t, e) {
                return this.skewX = t, this.skewY = e, this;
            }
        }, {
            key: "render",
            value: function render(t, e, i) {
                Re.renders[this._renderType]._fun(this, t, e + this._x, i + this._y), this._repaint = 0;
            }
        }, {
            key: "drawToCanvas",
            value: function drawToCanvas(t, e, i, s) {
                return De.drawToCanvas(this, this._renderType, t, e, i, s);
            }
        }, {
            key: "drawToTexture",
            value: function drawToTexture(t, e, i, s) {
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                return De.drawToTexture(this, this._renderType, t, e, i, s, r);
            }
        }, {
            key: "drawToTexture3D",
            value: function drawToTexture3D(t, e, i) {
                throw "not implement";
            }
        }, {
            key: "customRender",
            value: function customRender(t, e, i) {
                this._repaint = me.REPAINT_ALL;
            }
        }, {
            key: "_applyFilters",
            value: function _applyFilters() {}
        }, {
            key: "_setColorFilter",
            value: function _setColorFilter(t) {}
        }, {
            key: "_isHaveGlowFilter",
            value: function _isHaveGlowFilter() {
                var t, e;
                if (this.filters) for (t = 0; t < this.filters.length; t++) {
                    if (this.filters[t].type == Q.GLOW) return !0;
                }
                for (t = 0, e = this._children.length; t < e; t++) {
                    if (this._children[t]._isHaveGlowFilter()) return !0;
                }
                return !1;
            }
        }, {
            key: "localToGlobal",
            value: function localToGlobal(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
                var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                !0 === e && (t = new f(t.x, t.y));
                var r = this;
                for (s = s || i.stage; r && !r.destroyed && r != s; ) {
                    t = r.toParentPoint(t), r = r.parent;
                }
                return t;
            }
        }, {
            key: "globalToLocal",
            value: function globalToLocal(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
                var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                e && (t = new f(t.x, t.y));
                var r = this, a = [];
                for (s = s || i.stage; r && !r.destroyed && r != s; ) {
                    a.push(r), r = r.parent;
                }
                for (var n = a.length - 1; n >= 0; ) {
                    t = (r = a[n]).fromParentPoint(t), n--;
                }
                return t;
            }
        }, {
            key: "toParentPoint",
            value: function toParentPoint(t) {
                if (!t) return t;
                t.x -= this.pivotX, t.y -= this.pivotY, this.transform && this._transform.transformPoint(t), 
                t.x += this._x, t.y += this._y;
                var e = this._style.scrollRect;
                return e && (t.x -= e.x, t.y -= e.y), t;
            }
        }, {
            key: "fromParentPoint",
            value: function fromParentPoint(t) {
                if (!t) return t;
                t.x -= this._x, t.y -= this._y;
                var e = this._style.scrollRect;
                return e && (t.x += e.x, t.y += e.y), this.transform && this._transform.invertTransformPoint(t), 
                t.x += this.pivotX, t.y += this.pivotY, t;
            }
        }, {
            key: "fromStagePoint",
            value: function fromStagePoint(t) {
                return t;
            }
        }, {
            key: "on",
            value: function on(t, e, i) {
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                return 1 !== this._mouseState && this.isMouseEvent(t) ? (this.mouseEnabled = !0, 
                this._setBit(Ae.HAS_MOUSE, !0), this._parent && this._onDisplay(), this._createListener(t, e, i, s, !1)) : (0, 
                _get2.default)((0, _getPrototypeOf2.default)(De.prototype), "on", this).call(this, t, e, i, s);
            }
        }, {
            key: "once",
            value: function once(t, e, i) {
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                return 1 !== this._mouseState && this.isMouseEvent(t) ? (this.mouseEnabled = !0, 
                this._setBit(Ae.HAS_MOUSE, !0), this._parent && this._onDisplay(), this._createListener(t, e, i, s, !0)) : (0, 
                _get2.default)((0, _getPrototypeOf2.default)(De.prototype), "once", this).call(this, t, e, i, s);
            }
        }, {
            key: "_onDisplay",
            value: function _onDisplay(t) {
                if (1 !== this._mouseState) {
                    var e = this;
                    for (e = e.parent; e && 1 !== e._mouseState && !e._getBit(Ae.HAS_MOUSE); ) {
                        e.mouseEnabled = !0, e._setBit(Ae.HAS_MOUSE, !0), e = e.parent;
                    }
                }
            }
        }, {
            key: "_setParent",
            value: function _setParent(t) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(De.prototype), "_setParent", this).call(this, t), 
                t && this._getBit(Ae.HAS_MOUSE) && this._onDisplay();
            }
        }, {
            key: "loadImage",
            value: function loadImage(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                if (t) {
                    var s = i.Loader.textureMap[M.formatURL(t)];
                    s || ((s = new $t()).load(t), i.Loader.cacheTexture(t, s)), this.texture = s, s.getIsReady() ? loaded.call(this) : s.once(Qt.READY, this, loaded);
                } else this.texture = null, loaded.call(this);
                function loaded() {
                    this.repaint(me.REPAINT_ALL), e && e.run();
                }
                return this;
            }
        }, {
            key: "repaint",
            value: function repaint() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : me.REPAINT_CACHE;
                this._repaint & t || (this._repaint |= t, this.parentRepaint(t)), this._cacheStyle && this._cacheStyle.maskParent && this._cacheStyle.maskParent.repaint(t);
            }
        }, {
            key: "_needRepaint",
            value: function _needRepaint() {
                return this._repaint & me.REPAINT_CACHE && this._cacheStyle.enableCanvasRender && this._cacheStyle.reCache;
            }
        }, {
            key: "_childChanged",
            value: function _childChanged() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                this._children.length ? this._renderType |= me.CHILDS : this._renderType &= ~me.CHILDS, 
                this._setRenderType(this._renderType), t && this._getBit(Ae.HAS_ZORDER) && i.systemTimer.callLater(this, this.updateZOrder), 
                this.repaint(me.REPAINT_ALL);
            }
        }, {
            key: "parentRepaint",
            value: function parentRepaint() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : me.REPAINT_CACHE;
                var e = this._parent;
                !e || e._repaint & t || (e._repaint |= t, e.parentRepaint(t));
            }
        }, {
            key: "_setMask",
            value: function _setMask(t) {}
        }, {
            key: "startDrag",
            value: function startDrag() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
                var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 300;
                var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                var n = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !1;
                var h = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : .92;
                this._style.dragging || (this.getStyle().dragging = new i.Dragging()), this._style.dragging.start(this, t, e, s, r, a, n, h);
            }
        }, {
            key: "stopDrag",
            value: function stopDrag() {
                this._style.dragging && this._style.dragging.stop();
            }
        }, {
            key: "_setDisplay",
            value: function _setDisplay(t) {
                t || this._cacheStyle && (this._cacheStyle.releaseContext(), this._cacheStyle.releaseFilterCache(), 
                this._cacheStyle.hasGlowFilter && (this._cacheStyle.hasGlowFilter = !1)), (0, _get2.default)((0, 
                _getPrototypeOf2.default)(De.prototype), "_setDisplay", this).call(this, t);
            }
        }, {
            key: "hitTestPoint",
            value: function hitTestPoint(t, e) {
                var i = this.globalToLocal(f.TEMP.setTo(t, e));
                return t = i.x, e = i.y, (this._style.hitArea ? this._style.hitArea : this._width > 0 && this._height > 0 ? m.TEMP.setTo(0, 0, this._width, this._height) : this.getSelfBounds()).contains(t, e);
            }
        }, {
            key: "getMousePoint",
            value: function getMousePoint() {
                return this.globalToLocal(f.TEMP.setTo(i.stage.mouseX, i.stage.mouseY));
            }
        }, {
            key: "_setTexture",
            value: function _setTexture(t) {}
        }, {
            key: "_setRenderType",
            value: function _setRenderType(t) {}
        }, {
            key: "_setTranformChange",
            value: function _setTranformChange() {
                this._tfChanged = !0, this._renderType |= me.TRANSFORM, this.parentRepaint(me.REPAINT_CACHE);
            }
        }, {
            key: "_setBgStyleColor",
            value: function _setBgStyleColor(t, e, i, s, r) {}
        }, {
            key: "_setBorderStyleColor",
            value: function _setBorderStyleColor(t, e, i, s, r, a) {}
        }, {
            key: "captureMouseEvent",
            value: function captureMouseEvent(t) {
                i.MouseManager.instance.setCapture(this, t);
            }
        }, {
            key: "releaseMouseEvent",
            value: function releaseMouseEvent() {
                i.MouseManager.instance.releaseCapture();
            }
        }, {
            key: "customRenderEnable",
            set: function set(t) {
                t && (this._renderType |= me.CUSTOM, this._setRenderType(this._renderType), this._setCustomRender());
            }
        }, {
            key: "cacheAs",
            get: function get() {
                return this._cacheStyle.cacheAs;
            },
            set: function set(t) {
                t !== this._cacheStyle.userSetCache && (this.mask && "normal" === t || (this._setCacheAs(t), 
                this._getCacheStyle().userSetCache = t, this._checkCanvasEnable(), this.repaint()));
            }
        }, {
            key: "staticCache",
            get: function get() {
                return this._cacheStyle.staticCache;
            },
            set: function set(t) {
                this._getCacheStyle().staticCache = t, t || this.reCache();
            }
        }, {
            key: "x",
            get: function get() {
                return this._x;
            },
            set: function set(t) {
                if (!this.destroyed && this._x !== t) {
                    this._setX(t), this.parentRepaint(me.REPAINT_CACHE);
                    var e = this._cacheStyle.maskParent;
                    e && e.repaint(me.REPAINT_CACHE);
                }
            }
        }, {
            key: "y",
            get: function get() {
                return this._y;
            },
            set: function set(t) {
                if (!this.destroyed && this._y !== t) {
                    this._setY(t), this.parentRepaint(me.REPAINT_CACHE);
                    var e = this._cacheStyle.maskParent;
                    e && e.repaint(me.REPAINT_CACHE);
                }
            }
        }, {
            key: "width",
            get: function get() {
                return this.get_width();
            },
            set: function set(t) {
                this.set_width(t);
            }
        }, {
            key: "height",
            get: function get() {
                return this.get_height();
            },
            set: function set(t) {
                this.set_height(t);
            }
        }, {
            key: "displayWidth",
            get: function get() {
                return this.width * this.scaleX;
            }
        }, {
            key: "displayHeight",
            get: function get() {
                return this.height * this.scaleY;
            }
        }, {
            key: "scaleX",
            get: function get() {
                return this._style.scaleX;
            },
            set: function set(t) {
                this.set_scaleX(t);
            }
        }, {
            key: "scaleY",
            get: function get() {
                return this._style.scaleY;
            },
            set: function set(t) {
                this.set_scaleY(t);
            }
        }, {
            key: "rotation",
            get: function get() {
                return this._style.rotation;
            },
            set: function set(t) {
                this.getStyle().rotation !== t && (this._setRotation(t), this._setTranformChange());
            }
        }, {
            key: "skewX",
            get: function get() {
                return this._style.skewX;
            },
            set: function set(t) {
                this.getStyle().skewX !== t && (this._setSkewX(t), this._setTranformChange());
            }
        }, {
            key: "skewY",
            get: function get() {
                return this._style.skewY;
            },
            set: function set(t) {
                this.getStyle().skewY !== t && (this._setSkewY(t), this._setTranformChange());
            }
        }, {
            key: "transform",
            get: function get() {
                return this._tfChanged ? this._adjustTransform() : this._transform;
            },
            set: function set(t) {
                this.set_transform(t);
            }
        }, {
            key: "pivotX",
            get: function get() {
                return this._getPivotX();
            },
            set: function set(t) {
                this._setPivotX(t), this.repaint();
            }
        }, {
            key: "pivotY",
            get: function get() {
                return this._getPivotY();
            },
            set: function set(t) {
                this._setPivotY(t), this.repaint();
            }
        }, {
            key: "alpha",
            get: function get() {
                return this._getAlpha();
            },
            set: function set(t) {
                t = t < 0 ? 0 : t > 1 ? 1 : t, this._setAlpha(t);
            }
        }, {
            key: "visible",
            get: function get() {
                return this.get_visible();
            },
            set: function set(t) {
                this.set_visible(t);
            }
        }, {
            key: "blendMode",
            get: function get() {
                return this._style.blendMode;
            },
            set: function set(t) {
                this._setBlendMode(t), this.getStyle().blendMode = t, t && "source-over" != t ? this._renderType |= me.BLEND : this._renderType &= ~me.BLEND, 
                this._setRenderType(this._renderType), this.parentRepaint();
            }
        }, {
            key: "graphics",
            get: function get() {
                return this._graphics || (this.graphics = new Ee(), this._graphics.autoDestroy = !0), 
                this._graphics;
            },
            set: function set(t) {
                this._graphics && (this._graphics._sp = null), this._graphics = t, t ? (this._setGraphics(t), 
                this._renderType |= me.GRAPHICS, t._sp = this) : this._renderType &= ~me.GRAPHICS, 
                this._setRenderType(this._renderType), this.repaint();
            }
        }, {
            key: "scrollRect",
            get: function get() {
                return this._style.scrollRect;
            },
            set: function set(t) {
                this.getStyle().scrollRect = t, this._setScrollRect(t), this.repaint(), t ? this._renderType |= me.CLIP : this._renderType &= ~me.CLIP, 
                this._setRenderType(this._renderType);
            }
        }, {
            key: "filters",
            get: function get() {
                return this._cacheStyle.filters;
            },
            set: function set(t) {
                t && 0 === t.length && (t = null), this._cacheStyle.filters != t && (this._getCacheStyle().filters = t ? t.slice() : null, 
                t && t.length ? (this._setColorFilter(t[0]), this._renderType |= me.FILTERS) : (this._setColorFilter(null), 
                this._renderType &= ~me.FILTERS), this._setRenderType(this._renderType), t && t.length > 0 ? (this._getBit(Ae.DISPLAY) || this._setBitUp(Ae.DISPLAY), 
                1 == t.length && t[0] instanceof tt || (this._getCacheStyle().cacheForFilters = !0, 
                this._checkCanvasEnable())) : this._cacheStyle.cacheForFilters && (this._cacheStyle.cacheForFilters = !1, 
                this._checkCanvasEnable()), this._getCacheStyle().hasGlowFilter = this._isHaveGlowFilter(), 
                this.repaint());
            }
        }, {
            key: "stage",
            get: function get() {
                return i.stage;
            }
        }, {
            key: "hitArea",
            get: function get() {
                return this._style.hitArea;
            },
            set: function set(t) {
                this.getStyle().hitArea = t;
            }
        }, {
            key: "mask",
            get: function get() {
                return this._cacheStyle.mask;
            },
            set: function set(t) {
                t && this.mask && this.mask._cacheStyle.maskParent || (this._getCacheStyle().mask = t, 
                this._setMask(t), this._checkCanvasEnable(), t ? t._getCacheStyle().maskParent = this : this.mask && (this.mask._getCacheStyle().maskParent = null), 
                this._renderType |= me.MASK, this._setRenderType(this._renderType), this.parentRepaint(me.REPAINT_ALL));
            }
        }, {
            key: "mouseEnabled",
            get: function get() {
                return this._mouseState > 1;
            },
            set: function set(t) {
                this._mouseState = t ? 2 : 1;
            }
        }, {
            key: "globalScaleX",
            get: function get() {
                for (var t = 1, e = this; e && e !== i.stage; ) {
                    t *= e.scaleX, e = e.parent;
                }
                return t;
            }
        }, {
            key: "globalRotation",
            get: function get() {
                for (var t = 0, e = this; e && e !== i.stage; ) {
                    t += e.rotation, e = e.parent;
                }
                return t;
            }
        }, {
            key: "globalScaleY",
            get: function get() {
                for (var t = 1, e = this; e && e !== i.stage; ) {
                    t *= e.scaleY, e = e.parent;
                }
                return t;
            }
        }, {
            key: "mouseX",
            get: function get() {
                return this.getMousePoint().x;
            }
        }, {
            key: "mouseY",
            get: function get() {
                return this.getMousePoint().y;
            }
        }, {
            key: "zOrder",
            get: function get() {
                return this._zOrder;
            },
            set: function set(t) {
                this._zOrder != t && (this._zOrder = t, this._parent && (t && this._parent._setBit(Ae.HAS_ZORDER, !0), 
                i.systemTimer.callLater(this._parent, this.updateZOrder)));
            }
        }, {
            key: "texture",
            get: function get() {
                return this._texture;
            },
            set: function set(t) {
                "string" == typeof t ? this.loadImage(t) : this._texture != t && (this._texture && this._texture._removeReference(), 
                this._texture = t, t && t._addReference(), this._setTexture(t), this._setWidth(this._texture, this.width), 
                this._setHeight(this._texture, this.height), t ? this._renderType |= me.TEXTURE : this._renderType &= ~me.TEXTURE, 
                this._setRenderType(this._renderType), this.repaint());
            }
        }, {
            key: "viewport",
            get: function get() {
                return this._style.viewport;
            },
            set: function set(t) {
                var e;
                "string" == typeof t && (e = t.split(",")).length > 3 && (t = new m(parseFloat(e[0]), parseFloat(e[1]), parseFloat(e[2]), parseFloat(e[3])));
                this.getStyle().viewport = t;
            }
        }, {
            key: "drawCallOptimize",
            set: function set(t) {
                this._setBit(Ae.DRAWCALL_OPTIMIZE, t);
            },
            get: function get() {
                return this._getBit(Ae.DRAWCALL_OPTIMIZE);
            }
        } ], [ {
            key: "drawToCanvas",
            value: function drawToCanvas(t, e, i, s, r, a) {
                r -= t.x, a -= t.y, r |= 0, a |= 0, i |= 0, s |= 0;
                var n = new he();
                n.size(i, s), n.asBitmap = !0, n._targets.start(), n._targets.clear(0, 0, 0, 0), 
                Re.renders[e]._fun(t, n, r, a), n.flush(), n._targets.end(), n._targets.restore();
                var h = n._targets.getData(0, 0, i, s);
                n.destroy();
                for (var o = new ImageData(i, s), l = 4 * i, _ = o.data, u = s - 1, c = u * l, d = 0; u >= 0; u--) {
                    _.set(h.subarray(d, d + l), c), c -= l, d += l;
                }
                var p = new be(!0);
                return p.size(i, s), p.getContext("2d").putImageData(o, 0, 0), p;
            }
        }, {
            key: "drawToTexture",
            value: function drawToTexture(t, e, i, s, r, a) {
                var n = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
                De.drawtocanvCtx || (De.drawtocanvCtx = new he()), r -= t.x, a -= t.y, r |= 0, a |= 0, 
                i |= 0, s |= 0;
                var h = n ? De.drawtocanvCtx : new he();
                if (h.clear(), h.size(i, s), n ? h._targets = n : h.asBitmap = !0, h._targets && (h._targets.start(), 
                h._targets.clear(0, 0, 0, 0), Re.renders[e]._fun(t, h, r, a), h.flush(), h._targets.end(), 
                h._targets.restore()), !n) {
                    var o = new $t(h._targets, $t.INV_UV);
                    return h.destroy(!0), o;
                }
                return t._repaint = 0, n;
            }
        }, {
            key: "fromImage",
            value: function fromImage(t) {
                return new De().loadImage(t);
            }
        } ]);
        return De;
    }(Le);
    we.regClass("laya.display.Sprite", De), we.regClass("Laya.Sprite", De);
    var Be = /* */ function(_Pe) {
        (0, _inherits2.default)(Be, _Pe);
        var _super29 = _createSuper(Be);
        function Be() {
            var _this24;
            (0, _classCallCheck2.default)(this, Be);
            _this24 = _super29.apply(this, arguments), _this24.italic = !1;
            return _this24;
        }
        (0, _createClass2.default)(Be, [ {
            key: "reset",
            value: function reset() {
                return (0, _get2.default)((0, _getPrototypeOf2.default)(Be.prototype), "reset", this).call(this), 
                this.italic = !1, this.align = "left", this.wordWrap = !1, this.leading = 0, this.padding = [ 0, 0, 0, 0 ], 
                this.bgColor = null, this.borderColor = null, this.asPassword = !1, this.stroke = 0, 
                this.strokeColor = "#000000", this.bold = !1, this.underline = !1, this.underlineColor = null, 
                this.currBitmapFont = null, this;
            }
        }, {
            key: "recover",
            value: function recover() {
                this !== Be.EMPTY && s.recover("TextStyle", this.reset());
            }
        }, {
            key: "render",
            value: function render(t, e, i, s) {
                (this.bgColor || this.borderColor) && e.drawRect(i - this.pivotX, s - this.pivotY, t.width, t.height, this.bgColor, this.borderColor, 1);
            }
        } ], [ {
            key: "create",
            value: function create() {
                return s.getItemByClass("TextStyle", Be);
            }
        } ]);
        return Be;
    }(Pe);
    Be.EMPTY = new Be();
    var Fe = /* */ function(_De) {
        (0, _inherits2.default)(Fe, _De);
        var _super30 = _createSuper(Fe);
        function Fe() {
            var _this25;
            (0, _classCallCheck2.default)(this, Fe);
            _this25 = _super30.call(this), _this25._textWidth = 0, _this25._textHeight = 0, 
            _this25._lines = [], _this25._lineWidths = [], _this25._startX = 0, _this25._startY = 0, 
            _this25._charSize = {}, _this25._valign = "top", _this25._fontSize = Fe.defaultFontSize, 
            _this25._font = Fe.defaultFont, _this25._color = "#000000", _this25._singleCharRender = !1, 
            _this25.overflow = Fe.VISIBLE, _this25._style = Be.EMPTY;
            return _this25;
        }
        (0, _createClass2.default)(Fe, [ {
            key: "getStyle",
            value: function getStyle() {
                return this._style === Be.EMPTY && (this._style = Be.create()), this._style;
            }
        }, {
            key: "_getTextStyle",
            value: function _getTextStyle() {
                return this._style === Be.EMPTY && (this._style = Be.create()), this._style;
            }
        }, {
            key: "destroy",
            value: function destroy() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                (0, _get2.default)((0, _getPrototypeOf2.default)(Fe.prototype), "destroy", this).call(this, t), 
                this._clipPoint = null, this._lines = null, this._lineWidths = null, this._words && this._words.forEach(function(t) {
                    t.cleanCache();
                }), this._words = null, this._charSize = null;
            }
        }, {
            key: "_getBoundPointsM",
            value: function _getBoundPointsM() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
                var e = m.TEMP;
                return e.setTo(0, 0, this.width, this.height), e._getBoundPoints();
            }
        }, {
            key: "getGraphicBounds",
            value: function getGraphicBounds() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
                var e = m.TEMP;
                return e.setTo(0, 0, this.width, this.height), e;
            }
        }, {
            key: "_getCSSStyle",
            value: function _getCSSStyle() {
                return this._style;
            }
        }, {
            key: "get_text",
            value: function get_text() {
                return this._text || "";
            }
        }, {
            key: "set_text",
            value: function set_text(t) {
                this._text !== t && (this.lang(t + ""), this.isChanged = !0, this.event(Qt.CHANGE), 
                this.borderColor && this._setBorderStyleColor(0, 0, this.width, this.height, this.borderColor, 1));
            }
        }, {
            key: "lang",
            value: function lang(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
                var n = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
                var h = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
                var o = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : null;
                var l = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : null;
                var _ = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : null;
                if (t = Fe.langPacks && Fe.langPacks[t] ? Fe.langPacks[t] : t, arguments.length < 2) this._text = t; else {
                    for (var u = 0, c = arguments.length; u < c; u++) {
                        t = t.replace("{" + u + "}", arguments[u + 1]);
                    }
                    this._text = t;
                }
            }
        }, {
            key: "get_color",
            value: function get_color() {
                return this._color;
            }
        }, {
            key: "set_color",
            value: function set_color(t) {
                this._color != t && (this._color = t, !this._isChanged && this._graphics ? this._graphics.replaceTextColor(this.color) : this.isChanged = !0);
            }
        }, {
            key: "set_bgColor",
            value: function set_bgColor(t) {
                this._getTextStyle().bgColor = t, this._renderType |= me.STYLE, this._setBgStyleColor(0, 0, this.width, this.height, t), 
                this._setRenderType(this._renderType), this.isChanged = !0;
            }
        }, {
            key: "get_bgColor",
            value: function get_bgColor() {
                return this._style.bgColor;
            }
        }, {
            key: "_getContextFont",
            value: function _getContextFont() {
                return (this.italic ? "italic " : "") + (this.bold ? "bold " : "") + this.fontSize + "px " + (i.Browser.onIPhone && Fe.fontFamilyMap[this.font] || this.font);
            }
        }, {
            key: "_isPassWordMode",
            value: function _isPassWordMode() {
                var t = this._style.asPassword;
                return "prompt" in this && this.prompt == this._text && (t = !1), t;
            }
        }, {
            key: "_getPassWordTxt",
            value: function _getPassWordTxt(t) {
                var e;
                e = "";
                for (var i = t.length; i > 0; i--) {
                    e += "●";
                }
                return e;
            }
        }, {
            key: "_renderText",
            value: function _renderText() {
                var t = this.padding, e = this._lines.length;
                this.overflow != Fe.VISIBLE && (e = Math.min(e, Math.floor((this.height - t[0] - t[2]) / (this.leading + this._charSize.height)) + 1));
                var s = this.scrollY / (this._charSize.height + this.leading) | 0, r = this.graphics;
                r.clear(!0);
                var a = this._getContextFont();
                i.Browser.context.font = a;
                var n = t[3], h = "left", o = this._lines, l = this.leading + this._charSize.height, _ = this._style.currBitmapFont;
                _ && (l = this.leading + _.getMaxHeight());
                var u = t[0];
                !_ && this._width > 0 && this._textWidth <= this._width && ("right" == this.align ? (h = "right", 
                n = this._width - t[1]) : "center" == this.align && (h = "center", n = .5 * this._width + t[3] - t[1]));
                var c = 1;
                if (_ && _.autoScaleSize && (c = _.fontSize / this.fontSize), this._height > 0) {
                    var d = this._textHeight > this._height ? "top" : this.valign;
                    "middle" === d ? u = .5 * (this._height - e / c * l) + t[0] - t[2] : "bottom" === d && (u = this._height - e / c * l - t[2]);
                }
                if (this._clipPoint) {
                    var p, f;
                    if (r.save(), _ && _.autoScaleSize) p = this._width ? this._width - t[3] - t[1] : this._textWidth, 
                    f = this._height ? this._height - t[0] - t[2] : this._textHeight, p *= c, f *= c, 
                    r.clipRect(t[3], t[0], p, f); else r.clipRect(t[3], t[0], this._width ? this._width - t[3] - t[1] : this._textWidth, this._height ? this._height - t[0] - t[2] : this._textHeight);
                    this.repaint();
                }
                var m = this._style, g = m.asPassword;
                "prompt" in this && this.prompt == this._text && (g = !1);
                for (var T = 0, v = 0, x = Math.min(this._lines.length, e + s) || 1, y = s; y < x; y++) {
                    var E, A = o[y];
                    if (g) for (var C = (A = "").length; C > 0; C--) {
                        A += "●";
                    }
                    if (null == A && (A = ""), T = n - (this._clipPoint ? this._clipPoint.x : 0), v = u + l * y - (this._clipPoint ? this._clipPoint.y : 0), 
                    this.underline && this._drawUnderline(h, T, v, y), _) {
                        var R = this.width;
                        _.autoScaleSize && (R = this.width * c, T *= c, v *= c), _._drawText(A, this, T, v, this.align, R);
                    } else this._words || (this._words = []), this._words.length > y - s ? E = this._words[y - s] : (E = new te(), 
                    this._words.push(E)), E.setText(A), E.splitRender = this._singleCharRender, m.stroke ? r.fillBorderText(E, T, v, a, this.color, h, m.stroke, m.strokeColor) : r.fillText(E, T, v, a, this.color, h);
                }
                if (_ && _.autoScaleSize) {
                    var b = 1 / c;
                    this.scale(b, b);
                }
                this._clipPoint && r.restore(), this._startX = n, this._startY = u;
            }
        }, {
            key: "_drawUnderline",
            value: function _drawUnderline(t, e, i, s) {
                var r = this._lineWidths[s];
                switch (t) {
                  case "center":
                    e -= r / 2;
                    break;

                  case "right":
                    e -= r;
                }
                i += this._charSize.height, this._graphics.drawLine(e, i, e + r, i, this.underlineColor || this.color, 1);
            }
        }, {
            key: "typeset",
            value: function typeset() {
                if (this._isChanged = !1, !this._text) return this._clipPoint = null, this._textWidth = this._textHeight = 0, 
                void this.graphics.clear(!0);
                i.Render.isConchApp ? window.conchTextCanvas.font = this._getContextFont() : i.Browser.context.font = this._getContextFont(), 
                this._lines.length = 0, this._lineWidths.length = 0, this._isPassWordMode() ? this._parseLines(this._getPassWordTxt(this._text)) : this._parseLines(this._text), 
                this._evalTextSize(), this._checkEnabledViewportOrNot() ? this._clipPoint || (this._clipPoint = new f(0, 0)) : this._clipPoint = null, 
                this._renderText();
            }
        }, {
            key: "_evalTextSize",
            value: function _evalTextSize() {
                var t, e;
                t = Math.max.apply(this, this._lineWidths);
                var i = this._style.currBitmapFont;
                if (i) {
                    var _t5 = i.getMaxHeight();
                    i.autoScaleSize && (_t5 = this.fontSize), e = this._lines.length * (_t5 + this.leading) + this.padding[0] + this.padding[2];
                } else e = this._lines.length * (this._charSize.height + this.leading) + this.padding[0] + this.padding[2], 
                this._lines.length && (e -= this.leading);
                t == this._textWidth && e == this._textHeight || (this._textWidth = t, this._textHeight = e);
            }
        }, {
            key: "_checkEnabledViewportOrNot",
            value: function _checkEnabledViewportOrNot() {
                return this.overflow == Fe.SCROLL && (this._width > 0 && this._textWidth > this._width || this._height > 0 && this._textHeight > this._height);
            }
        }, {
            key: "changeText",
            value: function changeText(t) {
                this._text !== t && (this.lang(t + ""), this._graphics && this._graphics.replaceText(this._text) || this.typeset());
            }
        }, {
            key: "_parseLines",
            value: function _parseLines(t) {
                var e = this.wordWrap || this.overflow == Fe.HIDDEN;
                if (e) var s = this._getWordWrapWidth();
                var r = this._style.currBitmapFont;
                if (r) this._charSize.width = r.getMaxWidth(), this._charSize.height = r.getMaxHeight(); else {
                    var a = null;
                    (a = i.Render.isConchApp ? window.conchTextCanvas.measureText(Fe._testWord) : i.Browser.context.measureText(Fe._testWord)) || (a = {
                        width: 100
                    }), this._charSize.width = a.width, this._charSize.height = a.height || this.fontSize;
                }
                for (var n = t.replace(/\r\n/g, "\n").split("\n"), h = 0, o = n.length; h < o; h++) {
                    var l = n[h];
                    e ? this._parseLine(l, s) : (this._lineWidths.push(this._getTextWidth(l)), this._lines.push(l));
                }
            }
        }, {
            key: "_parseLine",
            value: function _parseLine(t, e) {
                var i = this._lines, s = 0, r = 0, a = 0, n = 0;
                if ((r = this._getTextWidth(t)) <= e) return i.push(t), void this._lineWidths.push(r);
                r = this._charSize.width, 0 == (s = Math.floor(e / r)) && (s = 1), a = r = this._getTextWidth(t.substring(0, s));
                for (var h = s, o = t.length; h < o; h++) {
                    if ((a += r = this._getTextWidth(t.charAt(h))) > e) if (this.wordWrap) {
                        var l = t.substring(n, h);
                        if (l.charCodeAt(l.length - 1) < 255) {
                            var _ = /(?:\w|-)+$/.exec(l);
                            _ && (h = _.index + n, 0 == _.index ? h += l.length : l = t.substring(n, h));
                        }
                        if (i.push(l), this._lineWidths.push(a - r), n = h, !(h + s < o)) {
                            i.push(t.substring(n, o)), this._lineWidths.push(this._getTextWidth(i[i.length - 1])), 
                            n = -1;
                            break;
                        }
                        h += s, a = r = this._getTextWidth(t.substring(n, h)), h--;
                    } else if (this.overflow == Fe.HIDDEN) return i.push(t.substring(0, h)), void this._lineWidths.push(this._getTextWidth(i[i.length - 1]));
                }
                this.wordWrap && -1 != n && (i.push(t.substring(n, o)), this._lineWidths.push(this._getTextWidth(i[i.length - 1])));
            }
        }, {
            key: "_getTextWidth",
            value: function _getTextWidth(t) {
                var e = this._style.currBitmapFont;
                if (e) return e.getTextWidth(t);
                if (i.Render.isConchApp) return window.conchTextCanvas.measureText(t).width;
                return (i.Browser.context.measureText(t) || {
                    width: 100
                }).width;
            }
        }, {
            key: "_getWordWrapWidth",
            value: function _getWordWrapWidth() {
                var t, e = this.padding, s = this._style.currBitmapFont;
                return (t = s && s.autoScaleSize ? this._width * (s.fontSize / this.fontSize) : this._width) <= 0 && (t = this.wordWrap ? 100 : i.Browser.width), 
                t <= 0 && (t = 100), t - e[3] - e[1];
            }
        }, {
            key: "getCharPoint",
            value: function getCharPoint(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                this._isChanged && i.systemTimer.runCallLater(this, this.typeset);
                for (var s = 0, r = this._lines, a = 0, n = 0, h = r.length; n < h; n++) {
                    if (t < (s += r[n].length)) {
                        var o = n;
                        break;
                    }
                    a = s;
                }
                var l = (this.italic ? "italic " : "") + (this.bold ? "bold " : "") + this.fontSize + "px " + this.font;
                i.Browser.context.font = l;
                var _ = this._getTextWidth(this._text.substring(a, t));
                return (e || new f()).setTo(this._startX + _ - (this._clipPoint ? this._clipPoint.x : 0), this._startY + o * (this._charSize.height + this.leading) - (this._clipPoint ? this._clipPoint.y : 0));
            }
        }, {
            key: "width",
            get: function get() {
                return this._width ? this._width : this.textWidth + this.padding[1] + this.padding[3];
            },
            set: function set(t) {
                t != this._width && ((0, _get2.default)((0, _getPrototypeOf2.default)(Fe.prototype), "set_width", this).call(this, t), 
                this.isChanged = !0, this.borderColor && this._setBorderStyleColor(0, 0, this.width, this.height, this.borderColor, 1));
            }
        }, {
            key: "height",
            get: function get() {
                return this._height ? this._height : this.textHeight;
            },
            set: function set(t) {
                t != this._height && ((0, _get2.default)((0, _getPrototypeOf2.default)(Fe.prototype), "set_height", this).call(this, t), 
                this.isChanged = !0, this.borderColor && this._setBorderStyleColor(0, 0, this.width, this.height, this.borderColor, 1));
            }
        }, {
            key: "textWidth",
            get: function get() {
                return this._isChanged && i.systemTimer.runCallLater(this, this.typeset), this._textWidth;
            }
        }, {
            key: "textHeight",
            get: function get() {
                return this._isChanged && i.systemTimer.runCallLater(this, this.typeset), this._textHeight;
            }
        }, {
            key: "text",
            get: function get() {
                return this._text || "";
            },
            set: function set(t) {
                this.set_text(t);
            }
        }, {
            key: "font",
            get: function get() {
                return this._font;
            },
            set: function set(t) {
                this._style.currBitmapFont && (this._getTextStyle().currBitmapFont = null, this.scale(1, 1)), 
                Fe._bitmapFonts && Fe._bitmapFonts[t] && (this._getTextStyle().currBitmapFont = Fe._bitmapFonts[t]), 
                this._font = t, this.isChanged = !0;
            }
        }, {
            key: "fontSize",
            get: function get() {
                return this._fontSize;
            },
            set: function set(t) {
                this._fontSize != t && (this._fontSize = t, this.isChanged = !0);
            }
        }, {
            key: "bold",
            get: function get() {
                return this._style.bold;
            },
            set: function set(t) {
                this._getTextStyle().bold = t, this.isChanged = !0;
            }
        }, {
            key: "color",
            get: function get() {
                return this._color;
            },
            set: function set(t) {
                this.set_color(t);
            }
        }, {
            key: "italic",
            get: function get() {
                return this._style.italic;
            },
            set: function set(t) {
                this._getTextStyle().italic = t, this.isChanged = !0;
            }
        }, {
            key: "align",
            get: function get() {
                return this._style.align;
            },
            set: function set(t) {
                this._getTextStyle().align = t, this.isChanged = !0;
            }
        }, {
            key: "valign",
            get: function get() {
                return this._valign;
            },
            set: function set(t) {
                this._valign = t, this.isChanged = !0;
            }
        }, {
            key: "wordWrap",
            get: function get() {
                return this._style.wordWrap;
            },
            set: function set(t) {
                this._getTextStyle().wordWrap = t, this.isChanged = !0;
            }
        }, {
            key: "leading",
            get: function get() {
                return this._style.leading;
            },
            set: function set(t) {
                this._getTextStyle().leading = t, this.isChanged = !0;
            }
        }, {
            key: "padding",
            get: function get() {
                return this._style.padding;
            },
            set: function set(t) {
                if ("string" == typeof t) {
                    var e, i, s;
                    for (s = (e = t.split(",")).length; e.length < 4; ) {
                        e.push(0);
                    }
                    for (i = 0; i < s; i++) {
                        e[i] = parseFloat(e[i]) || 0;
                    }
                    t = e;
                }
                this._getTextStyle().padding = t, this.isChanged = !0;
            }
        }, {
            key: "bgColor",
            get: function get() {
                return this._style.bgColor;
            },
            set: function set(t) {
                this.set_bgColor(t);
            }
        }, {
            key: "borderColor",
            get: function get() {
                return this._style.borderColor;
            },
            set: function set(t) {
                this._getTextStyle().borderColor = t, this._renderType |= me.STYLE, this._setBorderStyleColor(0, 0, this.width, this.height, t, 1), 
                this._setRenderType(this._renderType), this.isChanged = !0;
            }
        }, {
            key: "stroke",
            get: function get() {
                return this._style.stroke;
            },
            set: function set(t) {
                this._getTextStyle().stroke = t, this.isChanged = !0;
            }
        }, {
            key: "strokeColor",
            get: function get() {
                return this._style.strokeColor;
            },
            set: function set(t) {
                this._getTextStyle().strokeColor = t, this.isChanged = !0;
            }
        }, {
            key: "isChanged",
            set: function set(t) {
                this._isChanged !== t && (this._isChanged = t, t && i.systemTimer.callLater(this, this.typeset));
            }
        }, {
            key: "scrollX",
            set: function set(t) {
                if (!(this.overflow != Fe.SCROLL || this.textWidth < this._width) && this._clipPoint) {
                    t = t < this.padding[3] ? this.padding[3] : t;
                    var e = this._textWidth - this._width;
                    t = t > e ? e : t, this._clipPoint.x = t, this._renderText();
                }
            },
            get: function get() {
                return this._clipPoint ? this._clipPoint.x : 0;
            }
        }, {
            key: "scrollY",
            set: function set(t) {
                if (!(this.overflow != Fe.SCROLL || this.textHeight < this._height) && this._clipPoint) {
                    t = t < this.padding[0] ? this.padding[0] : t;
                    var e = this._textHeight - this._height;
                    t = t > e ? e : t, this._clipPoint.y = t, this._renderText();
                }
            },
            get: function get() {
                return this._clipPoint ? this._clipPoint.y : 0;
            }
        }, {
            key: "maxScrollX",
            get: function get() {
                return this.textWidth < this._width ? 0 : this._textWidth - this._width;
            }
        }, {
            key: "maxScrollY",
            get: function get() {
                return this.textHeight < this._height ? 0 : this._textHeight - this._height;
            }
        }, {
            key: "lines",
            get: function get() {
                return this._isChanged && this.typeset(), this._lines;
            }
        }, {
            key: "underlineColor",
            get: function get() {
                return this._style.underlineColor;
            },
            set: function set(t) {
                this._getTextStyle().underlineColor = t, this._isChanged || this._renderText();
            }
        }, {
            key: "underline",
            get: function get() {
                return this._style.underline;
            },
            set: function set(t) {
                this._getTextStyle().underline = t;
            }
        }, {
            key: "singleCharRender",
            set: function set(t) {
                this._singleCharRender = t;
            },
            get: function get() {
                return this._singleCharRender;
            }
        } ], [ {
            key: "defaultFontStr",
            value: function defaultFontStr() {
                return Fe.defaultFontSize + "px " + Fe.defaultFont;
            }
        }, {
            key: "registerBitmapFont",
            value: function registerBitmapFont(t, e) {
                Fe._bitmapFonts || (Fe._bitmapFonts = {}), Fe._bitmapFonts[t] = e;
            }
        }, {
            key: "unregisterBitmapFont",
            value: function unregisterBitmapFont(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
                if (Fe._bitmapFonts && Fe._bitmapFonts[t]) {
                    var i = Fe._bitmapFonts[t];
                    e && i.destroy(), delete Fe._bitmapFonts[t];
                }
            }
        } ]);
        return Fe;
    }(De);
    Fe.VISIBLE = "visible", Fe.SCROLL = "scroll", Fe.HIDDEN = "hidden", Fe.defaultFontSize = 12, 
    Fe.defaultFont = "Arial", Fe.isComplexText = !1, Fe.fontFamilyMap = {
        "报隶": "报隶-简",
        "黑体": "黑体-简",
        "楷体": "楷体-简",
        "兰亭黑": "兰亭黑-简",
        "隶变": "隶变-简",
        "凌慧体": "凌慧体-简",
        "翩翩体": "翩翩体-简",
        "苹方": "苹方-简",
        "手札体": "手札体-简",
        "宋体": "宋体-简",
        "娃娃体": "娃娃体-简",
        "魏碑": "魏碑-简",
        "行楷": "行楷-简",
        "雅痞": "雅痞-简",
        "圆体": "圆体-简"
    }, Fe._testWord = "游", Fe.CharacterCache = !0, Fe.RightToLeft = !1, i.regClass(Fe), 
    we.regClass("laya.display.Text", Fe), we.regClass("Laya.Text", Fe);
    var Oe = /* */ function(_Fe) {
        (0, _inherits2.default)(Oe, _Fe);
        var _super31 = _createSuper(Oe);
        function Oe() {
            var _this26;
            (0, _classCallCheck2.default)(this, Oe);
            _this26 = _super31.call(this), _this26._multiline = !1, _this26._editable = !0, 
            _this26._maxChars = 1e5, _this26._type = "text", _this26._prompt = "", _this26._promptColor = "#A9A9A9", 
            _this26._originColor = "#000000", _this26._content = "", Oe.IOS_IFRAME = i.Browser.onIOS && i.Browser.window.top != i.Browser.window.self, 
            _this26._width = 100, _this26._height = 20, _this26.multiline = !1, _this26.overflow = Fe.SCROLL, 
            _this26.on(Qt.MOUSE_DOWN, (0, _assertThisInitialized2.default)(_this26), _this26._onMouseDown), 
            _this26.on(Qt.UNDISPLAY, (0, _assertThisInitialized2.default)(_this26), _this26._onUnDisplay);
            return _this26;
        }
        (0, _createClass2.default)(Oe, [ {
            key: "setSelection",
            value: function setSelection(t, e) {
                this.focus = !0, Oe.inputElement.selectionStart = t, Oe.inputElement.selectionEnd = e;
            }
        }, {
            key: "_onUnDisplay",
            value: function _onUnDisplay() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                this.focus = !1;
            }
        }, {
            key: "_onMouseDown",
            value: function _onMouseDown(t) {
                this.focus = !0;
            }
        }, {
            key: "_syncInputTransform",
            value: function _syncInputTransform() {
                var t = this.nativeInput, e = $.getTransformRelativeToWindow(this, this.padding[3], this.padding[0]), s = this._width - this.padding[1] - this.padding[3], r = this._height - this.padding[0] - this.padding[2];
                i.Render.isConchApp ? (t.setScale(e.scaleX, e.scaleY), t.setSize(s, r), t.setPos(e.x, e.y)) : (Oe.inputContainer.style.transform = Oe.inputContainer.style.webkitTransform = "scale(" + e.scaleX + "," + e.scaleY + ") rotate(" + i.stage.canvasDegree + "deg)", 
                t.style.width = s + "px", t.style.height = r + "px", Oe.inputContainer.style.left = e.x + "px", 
                Oe.inputContainer.style.top = e.y + "px");
            }
        }, {
            key: "select",
            value: function select() {
                this.nativeInput.select();
            }
        }, {
            key: "_setInputMethod",
            value: function _setInputMethod() {
                Oe.input.parentElement && Oe.inputContainer.removeChild(Oe.input), Oe.area.parentElement && Oe.inputContainer.removeChild(Oe.area), 
                i.Browser.onAndroid && (Oe.input = Oe.inputElement = i.Browser.createElement("input"), 
                Oe._initInput(Oe.input)), Oe.inputElement = this._multiline ? Oe.area : Oe.input, 
                Oe.inputContainer.appendChild(Oe.inputElement), Fe.RightToLeft && (Oe.inputElement.style.direction = "rtl");
            }
        }, {
            key: "_focusIn",
            value: function _focusIn() {
                Oe.isInputting = !0;
                var t = this.nativeInput;
                Oe.input && (Oe.input.type = this._type), this._focus = !0;
                var e = t.style;
                e.whiteSpace = this.wordWrap ? "pre-wrap" : "nowrap", this._setPromptColor(), t.readOnly = !this._editable, 
                i.Render.isConchApp && (t.setType(this._type), t.setForbidEdit(!this._editable)), 
                t.maxLength = this._maxChars, t.value = this._content, t.placeholder = this._prompt, 
                i.stage.off(Qt.KEY_DOWN, this, this._onKeyDown), i.stage.on(Qt.KEY_DOWN, this, this._onKeyDown), 
                i.stage.focus = this, this.event(Qt.FOCUS), i.Browser.onPC && t.focus(), i.Browser.onMiniGame || i.Browser.onBDMiniGame || i.Browser.onQGMiniGame || i.Browser.onKGMiniGame || i.Browser.onVVMiniGame || i.Browser.onAlipayMiniGame || i.Browser.onQQMiniGame || i.Browser.onBLMiniGame || i.Browser.onTTMiniGame || i.Browser.onHWMiniGame || i.Browser.onTBMiniGame || (this._text = null), 
                this.typeset(), t.setColor(this._originColor), t.setFontSize(this.fontSize), t.setFontFace(i.Browser.onIPhone && Fe.fontFamilyMap[this.font] || this.font), 
                i.Render.isConchApp && t.setMultiAble && t.setMultiAble(this._multiline), e.lineHeight = this.leading + this.fontSize + "px", 
                e.fontStyle = this.italic ? "italic" : "normal", e.fontWeight = this.bold ? "bold" : "normal", 
                e.textAlign = this.align, e.padding = "0 0", this._syncInputTransform(), !i.Render.isConchApp && i.Browser.onPC && i.systemTimer.frameLoop(1, this, this._syncInputTransform);
            }
        }, {
            key: "_setPromptColor",
            value: function _setPromptColor() {
                Oe.promptStyleDOM = i.Browser.getElementById("promptStyle"), Oe.promptStyleDOM || (Oe.promptStyleDOM = i.Browser.createElement("style"), 
                Oe.promptStyleDOM.setAttribute("id", "promptStyle"), i.Browser.document.head.appendChild(Oe.promptStyleDOM)), 
                Oe.promptStyleDOM.innerText = "input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {color:" + this._promptColor + "}input:-moz-placeholder, textarea:-moz-placeholder {color:" + this._promptColor + "}input::-moz-placeholder, textarea::-moz-placeholder {color:" + this._promptColor + "}input:-ms-input-placeholder, textarea:-ms-input-placeholder {color:" + this._promptColor + "}";
            }
        }, {
            key: "_focusOut",
            value: function _focusOut() {
                Oe.isInputting && (Oe.isInputting = !1, this._focus = !1, this._text = null, this._content = this.nativeInput.value, 
                this._content ? ((0, _get2.default)((0, _getPrototypeOf2.default)(Oe.prototype), "set_text", this).call(this, this._content), 
                (0, _get2.default)((0, _getPrototypeOf2.default)(Oe.prototype), "set_color", this).call(this, this._originColor)) : ((0, 
                _get2.default)((0, _getPrototypeOf2.default)(Oe.prototype), "set_text", this).call(this, this._prompt), 
                (0, _get2.default)((0, _getPrototypeOf2.default)(Oe.prototype), "set_color", this).call(this, this._promptColor)), 
                i.stage.off(Qt.KEY_DOWN, this, this._onKeyDown), i.stage.focus = null, this.event(Qt.BLUR), 
                this.event(Qt.CHANGE), i.Render.isConchApp && this.nativeInput.blur(), i.Browser.onPC && i.systemTimer.clear(this, this._syncInputTransform));
            }
        }, {
            key: "_onKeyDown",
            value: function _onKeyDown(t) {
                13 === t.keyCode && (i.Browser.onMobile && !this._multiline && (this.focus = !1), 
                this.event(Qt.ENTER));
            }
        }, {
            key: "changeText",
            value: function changeText(t) {
                this._content = t, this._focus ? (this.nativeInput.value = t || "", this.event(Qt.CHANGE)) : (0, 
                _get2.default)((0, _getPrototypeOf2.default)(Oe.prototype), "changeText", this).call(this, t);
            }
        }, {
            key: "multiline",
            get: function get() {
                return this._multiline;
            },
            set: function set(t) {
                this._multiline = t, this.valign = t ? "top" : "middle";
            }
        }, {
            key: "nativeInput",
            get: function get() {
                return this._multiline ? Oe.area : Oe.input;
            }
        }, {
            key: "focus",
            get: function get() {
                return this._focus;
            },
            set: function set(t) {
                var e = this.nativeInput;
                this._focus !== t && (t ? (e.target ? e.target._focusOut() : this._setInputMethod(), 
                e.target = this, this._focusIn()) : (e.target = null, this._focusOut(), i.Browser.document.body.scrollTop = 0, 
                e.blur(), i.Render.isConchApp ? e.setPos(-1e4, -1e4) : Oe.inputContainer.contains(e) && Oe.inputContainer.removeChild(e)));
            }
        }, {
            key: "text",
            set: function set(t) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(Oe.prototype), "set_color", this).call(this, this._originColor), 
                t += "", this._focus ? (this.nativeInput.value = t || "", this.event(Qt.CHANGE)) : (this._multiline || (t = t.replace(/\r?\n/g, "")), 
                this._content = t, t ? (0, _get2.default)((0, _getPrototypeOf2.default)(Oe.prototype), "set_text", this).call(this, t) : ((0, 
                _get2.default)((0, _getPrototypeOf2.default)(Oe.prototype), "set_text", this).call(this, this._prompt), 
                (0, _get2.default)((0, _getPrototypeOf2.default)(Oe.prototype), "set_color", this).call(this, this.promptColor)));
            },
            get: function get() {
                return this._focus ? this.nativeInput.value : this._content || "";
            }
        }, {
            key: "color",
            set: function set(t) {
                this._focus && this.nativeInput.setColor(t), (0, _get2.default)((0, _getPrototypeOf2.default)(Oe.prototype), "set_color", this).call(this, this._content ? t : this._promptColor), 
                this._originColor = t;
            },
            get: function get() {
                return (0, _get2.default)((0, _getPrototypeOf2.default)(Oe.prototype), "color", this);
            }
        }, {
            key: "bgColor",
            set: function set(t) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(Oe.prototype), "set_bgColor", this).call(this, t), 
                i.Render.isConchApp && this.nativeInput.setBgColor(t);
            },
            get: function get() {
                return (0, _get2.default)((0, _getPrototypeOf2.default)(Oe.prototype), "bgColor", this);
            }
        }, {
            key: "restrict",
            get: function get() {
                return this._restrictPattern ? this._restrictPattern.source : "";
            },
            set: function set(t) {
                t ? ((t = "[^" + t + "]").indexOf("^^") > -1 && (t = t.replace("^^", "")), this._restrictPattern = new RegExp(t, "g")) : this._restrictPattern = null;
            }
        }, {
            key: "editable",
            set: function set(t) {
                this._editable = t, i.Render.isConchApp && Oe.input.setForbidEdit(!t);
            },
            get: function get() {
                return this._editable;
            }
        }, {
            key: "maxChars",
            get: function get() {
                return this._maxChars;
            },
            set: function set(t) {
                t <= 0 && (t = 1e5), this._maxChars = t;
            }
        }, {
            key: "prompt",
            get: function get() {
                return this._prompt;
            },
            set: function set(t) {
                !this._text && t && (0, _get2.default)((0, _getPrototypeOf2.default)(Oe.prototype), "set_color", this).call(this, this._promptColor), 
                this.promptColor = this._promptColor, this._text ? (0, _get2.default)((0, _getPrototypeOf2.default)(Oe.prototype), "set_text", this).call(this, this._text == this._prompt ? t : this._text) : (0, 
                _get2.default)((0, _getPrototypeOf2.default)(Oe.prototype), "set_text", this).call(this, t), 
                this._prompt = Fe.langPacks && Fe.langPacks[t] ? Fe.langPacks[t] : t;
            }
        }, {
            key: "promptColor",
            get: function get() {
                return this._promptColor;
            },
            set: function set(t) {
                this._promptColor = t, this._content || (0, _get2.default)((0, _getPrototypeOf2.default)(Oe.prototype), "set_color", this).call(this, t);
            }
        }, {
            key: "type",
            get: function get() {
                return this._type;
            },
            set: function set(t) {
                this._getTextStyle().asPassword = "password" === t, this._type = t;
            }
        } ], [ {
            key: "__init__",
            value: function __init__() {
                if (Oe._createInputElement(), i.Browser.onMobile) {
                    var t = !1;
                    (i.Browser.onMiniGame || i.Browser.onBDMiniGame || i.Browser.onQGMiniGame || i.Browser.onKGMiniGame || i.Browser.onVVMiniGame || i.Browser.onAlipayMiniGame || i.Browser.onQQMiniGame || i.Browser.onBLMiniGame || i.Browser.onTTMiniGame || i.Browser.onHWMiniGame || i.Browser.onTBMiniGame) && (t = !0), 
                    i.Render.canvas.addEventListener(Oe.IOS_IFRAME ? t ? "touchend" : "click" : "touchend", Oe._popupInputMethod);
                }
            }
        }, {
            key: "_popupInputMethod",
            value: function _popupInputMethod(t) {
                Oe.isInputting && Oe.inputElement.focus();
            }
        }, {
            key: "_createInputElement",
            value: function _createInputElement() {
                Oe._initInput(Oe.area = i.Browser.createElement("textarea")), Oe._initInput(Oe.input = i.Browser.createElement("input")), 
                Oe.inputContainer = i.Browser.createElement("div"), Oe.inputContainer.style.position = "absolute", 
                Oe.inputContainer.style.zIndex = "1E5", i.Browser.container.appendChild(Oe.inputContainer), 
                Oe.inputContainer.setPos = function(t, e) {
                    Oe.inputContainer.style.left = t + "px", Oe.inputContainer.style.top = e + "px";
                };
            }
        }, {
            key: "_initInput",
            value: function _initInput(t) {
                var e = t.style;
                e.cssText = "position:absolute;overflow:hidden;resize:none;transform-origin:0 0;-webkit-transform-origin:0 0;-moz-transform-origin:0 0;-o-transform-origin:0 0;", 
                e.resize = "none", e.backgroundColor = "transparent", e.border = "none", e.outline = "none", 
                e.zIndex = "1", t.addEventListener("input", Oe._processInputting), t.addEventListener("mousemove", Oe._stopEvent), 
                t.addEventListener("mousedown", Oe._stopEvent), t.addEventListener("touchmove", Oe._stopEvent), 
                t.setFontFace = function(e) {
                    t.style.fontFamily = e;
                }, i.Render.isConchApp || (t.setColor = function(e) {
                    t.style.color = e;
                }, t.setFontSize = function(e) {
                    t.style.fontSize = e + "px";
                });
            }
        }, {
            key: "_processInputting",
            value: function _processInputting(t) {
                var e = Oe.inputElement.target;
                if (e) {
                    var i = Oe.inputElement.value;
                    e._restrictPattern && (i = i.replace(/\u2006|\x27/g, ""), e._restrictPattern.test(i) && (i = i.replace(e._restrictPattern, ""), 
                    Oe.inputElement.value = i)), e._text = i, e.event(Qt.INPUT);
                }
            }
        }, {
            key: "_stopEvent",
            value: function _stopEvent(t) {
                "touchmove" == t.type && t.preventDefault(), t.stopPropagation && t.stopPropagation();
            }
        } ]);
        return Oe;
    }(Fe);
    Oe.TYPE_TEXT = "text", Oe.TYPE_PASSWORD = "password", Oe.TYPE_EMAIL = "email", Oe.TYPE_URL = "url", 
    Oe.TYPE_NUMBER = "number", Oe.TYPE_RANGE = "range", Oe.TYPE_DATE = "date", Oe.TYPE_MONTH = "month", 
    Oe.TYPE_WEEK = "week", Oe.TYPE_TIME = "time", Oe.TYPE_DATE_TIME = "datetime", Oe.TYPE_DATE_TIME_LOCAL = "datetime-local", 
    Oe.TYPE_SEARCH = "search", Oe.IOS_IFRAME = !1, Oe.inputHeight = 45, Oe.isInputting = !1, 
    we.regClass("laya.display.Input", Oe), we.regClass("Laya.Input", Oe);
    var Ne = /* */ function() {
        function Ne() {
            (0, _classCallCheck2.default)(this, Ne);
            this.preOvers = [], this.preDowns = [], this.preRightDowns = [], this.enable = !0, 
            this._event = new Qt(), this._lastClickTime = 0;
        }
        (0, _createClass2.default)(Ne, [ {
            key: "_clearTempArrs",
            value: function _clearTempArrs() {
                Ne._oldArr.length = 0, Ne._newArr.length = 0, Ne._tEleArr.length = 0;
            }
        }, {
            key: "getTouchFromArr",
            value: function getTouchFromArr(t, e) {
                var i, s, r;
                for (s = e.length, i = 0; i < s; i++) {
                    if ((r = e[i]).id == t) return r;
                }
                return null;
            }
        }, {
            key: "removeTouchFromArr",
            value: function removeTouchFromArr(t, e) {
                var i;
                for (i = e.length - 1; i >= 0; i--) {
                    e[i].id == t && e.splice(i, 1);
                }
            }
        }, {
            key: "createTouchO",
            value: function createTouchO(t, e) {
                var i;
                return (i = s.getItem("TouchData") || {}).id = e, i.tar = t, i;
            }
        }, {
            key: "onMouseDown",
            value: function onMouseDown(t, e) {
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
                var s, r, a, n;
                this.enable && (s = this.getTouchFromArr(e, this.preOvers), a = this.getEles(t, null, Ne._tEleArr), 
                s ? s.tar = t : (r = this.createTouchO(t, e), this.preOvers.push(r)), se.onMobile && this.sendEvents(a, Qt.MOUSE_OVER), 
                n = i ? this.preDowns : this.preRightDowns, (s = this.getTouchFromArr(e, n)) ? s.tar = t : (r = this.createTouchO(t, e), 
                n.push(r)), this.sendEvents(a, i ? Qt.MOUSE_DOWN : Qt.RIGHT_MOUSE_DOWN), this._clearTempArrs());
            }
        }, {
            key: "sendEvents",
            value: function sendEvents(t, e) {
                var i, s, r;
                for (s = t.length, this._event._stoped = !1, r = t[0], i = 0; i < s; i++) {
                    var a = t[i];
                    if (a.destroyed) return;
                    if (a.event(e, this._event.setTo(e, a, r)), this._event._stoped) break;
                }
            }
        }, {
            key: "getEles",
            value: function getEles(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                for (i ? i.length = 0 : i = []; t && t != e; ) {
                    i.push(t), t = t.parent;
                }
                return i;
            }
        }, {
            key: "checkMouseOutAndOverOfMove",
            value: function checkMouseOutAndOverOfMove(t, e) {
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                var s, r, a, n;
                if (e != t) if (e.contains(t)) r = this.getEles(t, e, Ne._tEleArr), this.sendEvents(r, Qt.MOUSE_OVER); else if (t.contains(e)) r = this.getEles(e, t, Ne._tEleArr), 
                this.sendEvents(r, Qt.MOUSE_OUT); else {
                    var h, o, l;
                    for ((r = Ne._tEleArr).length = 0, h = this.getEles(e, null, Ne._oldArr), o = this.getEles(t, null, Ne._newArr), 
                    n = h.length, a = 0; a < n; a++) {
                        if (s = h[a], (l = o.indexOf(s)) >= 0) {
                            o.splice(l, o.length - l);
                            break;
                        }
                        r.push(s);
                    }
                    r.length > 0 && this.sendEvents(r, Qt.MOUSE_OUT), o.length > 0 && this.sendEvents(o, Qt.MOUSE_OVER);
                }
            }
        }, {
            key: "onMouseMove",
            value: function onMouseMove(t, e) {
                var i, s;
                this.enable && ((i = this.getTouchFromArr(e, this.preOvers)) ? (this.checkMouseOutAndOverOfMove(t, i.tar), 
                i.tar = t, s = this.getEles(t, null, Ne._tEleArr)) : (s = this.getEles(t, null, Ne._tEleArr), 
                this.sendEvents(s, Qt.MOUSE_OVER), this.preOvers.push(this.createTouchO(t, e))), 
                this.sendEvents(s, Qt.MOUSE_MOVE), this._clearTempArrs());
            }
        }, {
            key: "getLastOvers",
            value: function getLastOvers() {
                return Ne._tEleArr.length = 0, this.preOvers.length > 0 && this.preOvers[0].tar ? this.getEles(this.preOvers[0].tar, null, Ne._tEleArr) : (Ne._tEleArr.push(i.stage), 
                Ne._tEleArr);
            }
        }, {
            key: "stageMouseOut",
            value: function stageMouseOut() {
                var t;
                t = this.getLastOvers(), this.preOvers.length = 0, this.sendEvents(t, Qt.MOUSE_OUT);
            }
        }, {
            key: "onMouseUp",
            value: function onMouseUp(t, e) {
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
                if (this.enable) {
                    var r, a, n, h, o, l, _, u, c = se.onMobile;
                    if (a = this.getEles(t, null, Ne._tEleArr), this.sendEvents(a, i ? Qt.MOUSE_UP : Qt.RIGHT_MOUSE_UP), 
                    u = i ? this.preDowns : this.preRightDowns, r = this.getTouchFromArr(e, u)) {
                        var d, p = se.now();
                        if (d = p - this._lastClickTime < 300, this._lastClickTime = p, t == r.tar) _ = a; else for (n = this.getEles(r.tar, null, Ne._oldArr), 
                        (_ = Ne._newArr).length = 0, o = n.length, h = 0; h < o; h++) {
                            l = n[h], a.indexOf(l) >= 0 && _.push(l);
                        }
                        _.length > 0 && this.sendEvents(_, i ? Qt.CLICK : Qt.RIGHT_CLICK), i && d && this.sendEvents(_, Qt.DOUBLE_CLICK), 
                        this.removeTouchFromArr(e, u), r.tar = null, s.recover("TouchData", r);
                    } else ;
                    (r = this.getTouchFromArr(e, this.preOvers)) && c && ((_ = this.getEles(r.tar, null, _)) && _.length > 0 && this.sendEvents(_, Qt.MOUSE_OUT), 
                    this.removeTouchFromArr(e, this.preOvers), r.tar = null, s.recover("TouchData", r)), 
                    this._clearTempArrs();
                }
            }
        } ]);
        return Ne;
    }();
    Ne.I = new Ne(), Ne._oldArr = [], Ne._newArr = [], Ne._tEleArr = [];
    var Ue = /* */ function() {
        function Ue() {
            (0, _classCallCheck2.default)(this, Ue);
            this.mouseX = 0, this.mouseY = 0, this.disableMouseEvent = !1, this.mouseDownTime = 0, 
            this.mouseMoveAccuracy = 2, this._event = new Qt(), this._captureSp = null, this._captureChain = [], 
            this._captureExlusiveMode = !1, this._hitCaputreSp = !1, this._point = new f(), 
            this._rect = new m(), this._lastMoveTimer = 0, this._prePoint = new f(), this._touchIDs = {}, 
            this._curTouchID = NaN, this._id = 1;
        }
        (0, _createClass2.default)(Ue, [ {
            key: "__init__",
            value: function __init__(t, e) {
                this._stage = t;
                var i = this;
                e.oncontextmenu = function(t) {
                    if (Ue.enabled) return !1;
                }, e.addEventListener("mousedown", function(t) {
                    Ue.enabled && (se.onIE || t.cancelable && t.preventDefault(), i.mouseDownTime = se.now(), 
                    i.runEvent(t));
                }), e.addEventListener("mouseup", function(t) {
                    Ue.enabled && (t.cancelable && t.preventDefault(), i.mouseDownTime = -se.now(), 
                    i.runEvent(t));
                }, !0), e.addEventListener("mousemove", function(t) {
                    if (Ue.enabled) {
                        t.cancelable && t.preventDefault();
                        var e = se.now();
                        if (e - i._lastMoveTimer < 10) return;
                        i._lastMoveTimer = e, i.runEvent(t);
                    }
                }, !0), e.addEventListener("mouseout", function(t) {
                    Ue.enabled && i.runEvent(t);
                }), e.addEventListener("mouseover", function(t) {
                    Ue.enabled && i.runEvent(t);
                }), e.addEventListener("touchstart", function(t) {
                    Ue.enabled && (Ue._isFirstTouch || Oe.isInputting || t.cancelable && t.preventDefault(), 
                    i.mouseDownTime = se.now(), i.runEvent(t));
                }), e.addEventListener("touchend", function(t) {
                    Ue.enabled ? (Ue._isFirstTouch || Oe.isInputting || t.cancelable && t.preventDefault(), 
                    Ue._isFirstTouch = !1, i.mouseDownTime = -se.now(), i.runEvent(t)) : i._curTouchID = NaN;
                }, !0), e.addEventListener("touchmove", function(t) {
                    Ue.enabled && (t.cancelable && t.preventDefault(), i.runEvent(t));
                }, !0), e.addEventListener("touchcancel", function(t) {
                    Ue.enabled ? (t.cancelable && t.preventDefault(), i.runEvent(t)) : i._curTouchID = NaN;
                }, !0), e.addEventListener("mousewheel", function(t) {
                    Ue.enabled && i.runEvent(t);
                }), e.addEventListener("DOMMouseScroll", function(t) {
                    Ue.enabled && i.runEvent(t);
                });
            }
        }, {
            key: "initEvent",
            value: function initEvent(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var i;
                this._event._stoped = !1, this._event.nativeEvent = e || t, this._target = null, 
                this._point.setTo(t.pageX || t.clientX, t.pageY || t.clientY), this._stage._canvasTransform && (this._stage._canvasTransform.invertTransformPoint(this._point), 
                this.mouseX = this._point.x, this.mouseY = this._point.y), this._event.touchId = t.identifier || 0, 
                this._tTouchID = this._event.touchId, (i = Ne.I._event)._stoped = !1, i.nativeEvent = this._event.nativeEvent, 
                i.touchId = this._event.touchId;
            }
        }, {
            key: "checkMouseWheel",
            value: function checkMouseWheel(t) {
                this._event.delta = t.wheelDelta ? .025 * t.wheelDelta : -t.detail;
                for (var e = Ne.I.getLastOvers(), i = 0, s = e.length; i < s; i++) {
                    var r = e[i];
                    r.event(Qt.MOUSE_WHEEL, this._event.setTo(Qt.MOUSE_WHEEL, r, this._target));
                }
            }
        }, {
            key: "onMouseMove",
            value: function onMouseMove(t) {
                Ne.I.onMouseMove(t, this._tTouchID);
            }
        }, {
            key: "onMouseDown",
            value: function onMouseDown(t) {
                if (Oe.isInputting && i.stage.focus && i.stage.focus.focus && !i.stage.focus.contains(this._target)) {
                    var e = i.stage.focus._tf || i.stage.focus, s = t._tf || t;
                    s instanceof Oe && s.multiline == e.multiline ? e._focusOut() : e.focus = !1;
                }
                Ne.I.onMouseDown(t, this._tTouchID, this._isLeftMouse);
            }
        }, {
            key: "onMouseUp",
            value: function onMouseUp(t) {
                Ne.I.onMouseUp(t, this._tTouchID, this._isLeftMouse);
            }
        }, {
            key: "check",
            value: function check(t, e, i, s) {
                this._point.setTo(e, i), t.fromParentPoint(this._point), e = this._point.x, i = this._point.y;
                var r = t._style.scrollRect;
                if (r && (this._rect.setTo(r.x, r.y, r.width, r.height), !this._rect.contains(e, i))) return !1;
                if (!this.disableMouseEvent) {
                    if (t.hitTestPrior && !t.mouseThrough && !this.hitTest(t, e, i)) return !1;
                    for (var a = t._children.length - 1; a > -1; a--) {
                        var n = t._children[a];
                        if (!n.destroyed && n._mouseState > 1 && n._visible && this.check(n, e, i, s)) return !0;
                    }
                    for (a = t._extUIChild.length - 1; a >= 0; a--) {
                        var h = t._extUIChild[a];
                        if (!h.destroyed && h._mouseState > 1 && h._visible && this.check(h, e, i, s)) return !0;
                    }
                }
                var o = !(!t.hitTestPrior || t.mouseThrough || this.disableMouseEvent) || this.hitTest(t, e, i);
                return o ? (this._target = t, s.call(this, t), this._target == this._hitCaputreSp && (this._hitCaputreSp = !0)) : s === this.onMouseUp && t === this._stage && (this._target = this._stage, 
                s.call(this, this._target)), o;
            }
        }, {
            key: "hitTest",
            value: function hitTest(t, e, i) {
                var s = !1;
                t.scrollRect && (e -= t._style.scrollRect.x, i -= t._style.scrollRect.y);
                var r = t._style.hitArea;
                return r && r._hit ? r.contains(e, i) : ((t.width > 0 && t.height > 0 || t.mouseThrough || r) && (s = t.mouseThrough ? t.getGraphicBounds().contains(e, i) : (r || this._rect.setTo(0, 0, t.width, t.height)).contains(e, i)), 
                s);
            }
        }, {
            key: "_checkAllBaseUI",
            value: function _checkAllBaseUI(t, e, i) {
                var s = this.handleExclusiveCapture(this.mouseX, this.mouseY, i);
                return !!s || (s = this.check(this._stage, this.mouseX, this.mouseY, i), this.handleCapture(this.mouseX, this.mouseY, i) || s);
            }
        }, {
            key: "check3DUI",
            value: function check3DUI(t, e, i) {
                for (var s = this._stage._3dUI, r = 0, a = !1; r < s.length; r++) {
                    var n = s[r];
                    this._stage._curUIBase = n, !n.destroyed && n._mouseState > 1 && n._visible && (a = a || this.check(n, this.mouseX, this.mouseY, i));
                }
                return this._stage._curUIBase = this._stage, a;
            }
        }, {
            key: "handleExclusiveCapture",
            value: function handleExclusiveCapture(t, e, i) {
                if (this._captureExlusiveMode && this._captureSp && this._captureChain.length > 0) {
                    var s;
                    this._point.setTo(t, e);
                    for (var r = 0; r < this._captureChain.length; r++) {
                        (s = this._captureChain[r]).fromParentPoint(this._point);
                    }
                    return this._target = s, i.call(this, s), !0;
                }
                return !1;
            }
        }, {
            key: "handleCapture",
            value: function handleCapture(t, e, i) {
                if (!this._hitCaputreSp && this._captureSp && this._captureChain.length > 0) {
                    var s;
                    this._point.setTo(t, e);
                    for (var r = 0; r < this._captureChain.length; r++) {
                        (s = this._captureChain[r]).fromParentPoint(this._point);
                    }
                    return this._target = s, i.call(this, s), !0;
                }
                return !1;
            }
        }, {
            key: "runEvent",
            value: function runEvent(t) {
                var e, i, s;
                switch ("mousemove" !== t.type && (this._prePoint.x = this._prePoint.y = -1e6), 
                t.type) {
                  case "mousedown":
                    this._touchIDs[0] = this._id++, Ue._isTouchRespond ? Ue._isTouchRespond = !1 : (this._isLeftMouse = 0 === t.button, 
                    this.initEvent(t), this._checkAllBaseUI(this.mouseX, this.mouseY, this.onMouseDown));
                    break;

                  case "mouseup":
                    this._isLeftMouse = 0 === t.button, this.initEvent(t), this._checkAllBaseUI(this.mouseX, this.mouseY, this.onMouseUp);
                    break;

                  case "mousemove":
                    Math.abs(this._prePoint.x - t.clientX) + Math.abs(this._prePoint.y - t.clientY) >= this.mouseMoveAccuracy && (this._prePoint.x = t.clientX, 
                    this._prePoint.y = t.clientY, this.initEvent(t), this._checkAllBaseUI(this.mouseX, this.mouseY, this.onMouseMove));
                    break;

                  case "touchstart":
                    Ue._isTouchRespond = !0, this._isLeftMouse = !0;
                    var r = t.changedTouches;
                    for (e = 0, i = r.length; e < i; e++) {
                        s = r[e], (Ue.multiTouchEnabled || isNaN(this._curTouchID)) && (this._curTouchID = s.identifier, 
                        this._id % 200 == 0 && (this._touchIDs = {}), this._touchIDs[s.identifier] = this._id++, 
                        this.initEvent(s, t), this._checkAllBaseUI(this.mouseX, this.mouseY, this.onMouseDown));
                    }
                    break;

                  case "touchend":
                  case "touchcancel":
                    Ue._isTouchRespond = !0, this._isLeftMouse = !0;
                    var a = t.changedTouches;
                    for (e = 0, i = a.length; e < i; e++) {
                        if (s = a[e], Ue.multiTouchEnabled || s.identifier == this._curTouchID) this._curTouchID = NaN, 
                        this.initEvent(s, t), this._checkAllBaseUI(this.mouseX, this.mouseY, this.onMouseUp) || this.onMouseUp(null);
                    }
                    break;

                  case "touchmove":
                    var n = t.changedTouches;
                    for (e = 0, i = n.length; e < i; e++) {
                        s = n[e], (Ue.multiTouchEnabled || s.identifier == this._curTouchID) && (this.initEvent(s, t), 
                        this._checkAllBaseUI(this.mouseX, this.mouseY, this.onMouseMove));
                    }
                    break;

                  case "wheel":
                  case "mousewheel":
                  case "DOMMouseScroll":
                    this.checkMouseWheel(t);
                    break;

                  case "mouseout":
                    Ne.I.stageMouseOut();
                    break;

                  case "mouseover":
                    this._stage.event(Qt.MOUSE_OVER, this._event.setTo(Qt.MOUSE_OVER, this._stage, this._stage));
                }
            }
        }, {
            key: "setCapture",
            value: function setCapture(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
                this._captureSp = t, this._captureExlusiveMode = e, this._captureChain.length = 0, 
                this._captureChain.push(t);
                for (var s = t; s != i.stage && s != i.stage._curUIBase && (s = s.parent); ) {
                    this._captureChain.splice(0, 0, s);
                }
            }
        }, {
            key: "releaseCapture",
            value: function releaseCapture() {
                console.log("release capture"), this._captureSp = null;
            }
        } ]);
        return Ue;
    }();
    Ue.instance = new Ue(), Ue.enabled = !0, Ue.multiTouchEnabled = !0, Ue._isFirstTouch = !0;
    var Ge = /* */ function() {
        function Ge() {
            (0, _classCallCheck2.default)(this, Ge);
            this._pool = [], this._map = {}, this._laters = [];
        }
        (0, _createClass2.default)(Ge, [ {
            key: "_update",
            value: function _update() {
                var t = this._laters, e = t.length;
                if (e > 0) {
                    for (var _i7 = 0, _s6 = e - 1; _i7 <= _s6; _i7++) {
                        var _e7 = t[_i7];
                        this._map[_e7.key] = null, null !== _e7.method && (_e7.run(), _e7.clear()), this._pool.push(_e7), 
                        _i7 === _s6 && (_s6 = t.length - 1);
                    }
                    t.length = 0;
                }
            }
        }, {
            key: "_getHandler",
            value: function _getHandler(t, e) {
                var s = t ? t.$_GID || (t.$_GID = i.Utils.getGID()) : 0, r = e.$_TID || (e.$_TID = i.Timer._mid++);
                return this._map[s + "." + r];
            }
        }, {
            key: "callLater",
            value: function callLater(t, e) {
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                if (null == this._getHandler(t, e)) {
                    var _a2;
                    (_a2 = this._pool.length ? this._pool.pop() : new ke()).caller = t, _a2.method = e, 
                    _a2.args = i;
                    var s = t ? t.$_GID : 0, r = e.$_TID;
                    _a2.key = s + "." + r, this._map[_a2.key] = _a2, this._laters.push(_a2);
                }
            }
        }, {
            key: "runCallLater",
            value: function runCallLater(t, e) {
                var i = this._getHandler(t, e);
                i && null != i.method && (this._map[i.key] = null, i.run(), i.clear());
            }
        } ]);
        return Ge;
    }();
    Ge.I = new Ge();
    var ke = /* */ function() {
        function ke() {
            (0, _classCallCheck2.default)(this, ke);
        }
        (0, _createClass2.default)(ke, [ {
            key: "clear",
            value: function clear() {
                this.caller = null, this.method = null, this.args = null;
            }
        }, {
            key: "run",
            value: function run() {
                var t = this.caller;
                if (t && t.destroyed) return this.clear();
                var e = this.method, i = this.args;
                null != e && (i ? e.apply(t, i) : e.call(t));
            }
        } ]);
        return ke;
    }();
    var We = function We() {
        (0, _classCallCheck2.default)(this, We);
    };
    We.createShaderCondition = function(t) {
        var e = "(function() {return " + t + ";})";
        return window.Laya._runScript(e);
    }, We.changeWebGLSize = function(t, e) {
        le.onStageResize(t, e);
    };
    var Ye = /* */ function() {
        function Ye() {
            (0, _classCallCheck2.default)(this, Ye);
        }
        (0, _createClass2.default)(Ye, null, [ {
            key: "setPerformanceDataTool",
            value: function setPerformanceDataTool(t) {
                this.performanceTool = t;
            }
        }, {
            key: "begainSample",
            value: function begainSample(t) {
                this.performanceTool && this.performanceTool.enable && this.performanceTool.BegainSample(t);
            }
        }, {
            key: "endSample",
            value: function endSample(t) {
                return this.performanceTool && this.performanceTool.enable ? this.performanceTool.EndSample(t) : 0;
            }
        }, {
            key: "expoertFile",
            value: function expoertFile(t) {
                if (this.performanceTool) return this.performanceTool.enable ? this.performanceTool.exportPerformanceFile() : null;
            }
        }, {
            key: "showFunSampleFun",
            value: function showFunSampleFun(t) {
                this.performanceTool.showFunSampleFun(t);
            }
        }, {
            key: "enable",
            set: function set(t) {
                this.performanceTool && (this.performanceTool.enable = t);
            },
            get: function get() {
                return !!this.performanceTool && this._enable;
            }
        }, {
            key: "enableDataExport",
            set: function set(t) {
                this.performanceTool && (this.performanceTool.enableDataExport = t);
            },
            get: function get() {
                return !!this.performanceTool && this.performanceTool.enableDataExport;
            }
        } ]);
        return Ye;
    }();
    Ye.performanceTool = null, Ye._enable = !1, Ye.PERFORMANCE_LAYA = "Laya", Ye.PERFORMANCE_LAYA_3D = "Laya/3D", 
    Ye.PERFORMANCE_LAYA_2D = "Laya/2D", Ye.PERFORMANCE_LAYA_3D_PRERENDER = "Laya/3D/PreRender", 
    Ye.PERFORMANCE_LAYA_3D_UPDATESCRIPT = "Laya/3D/UpdateScript", Ye.PERFORMANCE_LAYA_3D_PHYSICS = "Laya/3D/Physics", 
    Ye.PERFORMANCE_LAYA_3D_PHYSICS_SIMULATE = "Laya/3D/Physics/simulate", Ye.PERFORMANCE_LAYA_3D_PHYSICS_CHARACTORCOLLISION = "Laya/3D/Physics/updataCharacters&Collisions", 
    Ye.PERFORMANCE_LAYA_3D_PHYSICS_EVENTSCRIPTS = "Laya/3D/Physics/eventScripts", Ye.PERFORMANCE_LAYA_3D_RENDER = "Laya/3D/Render", 
    Ye.PERFORMANCE_LAYA_3D_RENDER_SHADOWMAP = "Laya/3D/Render/ShadowMap", Ye.PERFORMANCE_LAYA_3D_RENDER_CLUSTER = "Laya/3D/Render/Cluster", 
    Ye.PERFORMANCE_LAYA_3D_RENDER_CULLING = "Laya/3D/Render/Culling", Ye.PERFORMANCE_LAYA_3D_RENDER_RENDERDEPTHMDOE = "Laya/3D/Render/RenderDepthMode", 
    Ye.PERFORMANCE_LAYA_3D_RENDER_RENDEROPAQUE = "Laya/3D/Render/RenderOpaque", Ye.PERFORMANCE_LAYA_3D_RENDER_RENDERCOMMANDBUFFER = "Laya/3D/Render/RenderCommandBuffer", 
    Ye.PERFORMANCE_LAYA_3D_RENDER_RENDERTRANSPARENT = "Laya/3D/Render/RenderTransparent", 
    Ye.PERFORMANCE_LAYA_3D_RENDER_POSTPROCESS = "Laya/3D/Render/PostProcess", window.PerformancePlugin = Ye;
    var Ve = /* */ function(_De2) {
        (0, _inherits2.default)(Ve, _De2);
        var _super32 = _createSuper(Ve);
        function Ve() {
            var _this27;
            (0, _classCallCheck2.default)(this, Ve);
            _this27 = _super32.call(this), _this27.offset = new f(), _this27._frameRate = "fast", 
            _this27.designWidth = 0, _this27.designHeight = 0, _this27.canvasRotation = !1, 
            _this27.canvasDegree = 0, _this27.renderingEnabled = !0, _this27.screenAdaptationEnabled = !0, 
            _this27._canvasTransform = new p(), _this27._screenMode = "none", _this27._scaleMode = "noscale", 
            _this27._alignV = "top", _this27._alignH = "left", _this27._bgColor = "black", _this27._mouseMoveTime = 0, 
            _this27._renderCount = 0, _this27._safariOffsetY = 0, _this27._frameStartTime = 0, 
            _this27._previousOrientation = se.window.orientation, _this27._wgColor = [ 0, 0, 0, 1 ], 
            _this27._scene3Ds = [], _this27._globalRepaintSet = !1, _this27._globalRepaintGet = !1, 
            _this27._3dUI = [], _this27._curUIBase = null, _this27.useRetinalCanvas = !1, (0, 
            _get2.default)((0, _getPrototypeOf2.default)(Ve.prototype), "set_transform", (0, 
            _assertThisInitialized2.default)(_this27)).call((0, _assertThisInitialized2.default)(_this27), _this27._createTransform()), 
            _this27.mouseEnabled = !0, _this27.hitTestPrior = !0, _this27.autoSize = !1, _this27._setBit(Ae.DISPLAYED_INSTAGE, !0), 
            _this27._setBit(Ae.ACTIVE_INHIERARCHY, !0), _this27._isFocused = !0, _this27._isVisibility = !0, 
            _this27.useRetinalCanvas = e.useRetinalCanvas;
            var t = se.window;
            t.addEventListener("focus", function() {
                _this27._isFocused = !0, _this27.event(Qt.FOCUS), _this27.event(Qt.FOCUS_CHANGE);
            }), t.addEventListener("blur", function() {
                _this27._isFocused = !1, _this27.event(Qt.BLUR), _this27.event(Qt.FOCUS_CHANGE), 
                _this27._isInputting() && (Oe.inputElement.target.focus = !1);
            });
            var i = "visibilityState", s = "visibilitychange", r = t.document;
            void 0 !== r.hidden ? (s = "visibilitychange", i = "visibilityState") : void 0 !== r.mozHidden ? (s = "mozvisibilitychange", 
            i = "mozVisibilityState") : void 0 !== r.msHidden ? (s = "msvisibilitychange", i = "msVisibilityState") : void 0 !== r.webkitHidden && (s = "webkitvisibilitychange", 
            i = "webkitVisibilityState"), t.document.addEventListener(s, function() {
                "hidden" == se.document[i] ? (_this27._isVisibility = !1, _this27._isInputting() && (Oe.inputElement.target.focus = !1)) : _this27._isVisibility = !0, 
                _this27.renderingEnabled = _this27._isVisibility, _this27.event(Qt.VISIBILITY_CHANGE);
            }), 


            // t.addEventListener("resize", function() {
            //     var t = se.window.orientation;
            //     null != t && t != _this27._previousOrientation && _this27._isInputting() && (Oe.inputElement.target.focus = !1), 
            //     _this27._previousOrientation = t, _this27._isInputting() || (se.onSafari && (_this27._safariOffsetY = (se.window.__innerHeight || se.document.body.clientHeight || se.document.documentElement.clientHeight) - se.window.innerHeight), 
            //     _this27._resetCanvas());
            // }), 
            // t.addEventListener("orientationchange", function(t) {
            //     _this27._resetCanvas();
            // }), 
            
            t.addEventListener("resize", () => {
                var orientation = se.window.orientation;
                if (orientation != null && orientation != _this27._previousOrientation && _this27._isInputting()) {
                    Oe["inputElement"].target.focus = false;
                }
                _this27._previousOrientation = orientation;
                if (_this27._isInputting())
                    return;
                if (se.onSafari){
                    _this27._safariOffsetY = (se.window.__innerHeight || se.document.body.clientHeight || se.document.documentElement.clientHeight) - se.window.innerHeight;
                    _this27._safariOffsetY =Math.max(0,_this27._safariOffsetY);
                }                   
                _this27._resetCanvas();
            });

            t.addEventListener("orientationchange", (e) => {
                if (se.onSafari) {
                    clearTimeout(_this27._timeoutId);
                    _this27._timeoutId = setTimeout(() => {
                        _this27._safariOffsetY = (se.window.__innerHeight || se.document.body.clientHeight || se.document.documentElement.clientHeight) - se.window.innerHeight;
                        _this27._safariOffsetY =Math.max(0,_this27._safariOffsetY);
                        _this27._resetCanvas();

                    }, 0.5e3);
                } else {
                    _this27._resetCanvas();
                }
            });
            
            _this27.on(Qt.MOUSE_MOVE, (0, _assertThisInitialized2.default)(_this27), _this27._onmouseMove), 
            se.onMobile && _this27.on(Qt.MOUSE_DOWN, (0, _assertThisInitialized2.default)(_this27), _this27._onmouseMove);
            return _this27;
        }
        (0, _createClass2.default)(Ve, [ {
            key: "_isInputting",
            value: function _isInputting() {
                return se.onMobile && Oe.isInputting;
            }
        }, {
            key: "_changeCanvasSize",
            value: function _changeCanvasSize() {
                this.setScreenSize(se.clientWidth * se.pixelRatio, se.clientHeight * se.pixelRatio);
            }
        }, {
            key: "_resetCanvas",
            value: function _resetCanvas() {
                this.screenAdaptationEnabled && this._changeCanvasSize();
            }
        }, {
            key: "setScreenSize",
            value: function setScreenSize(t, e) {
                var i = !1;
                if (this._screenMode !== Ve.SCREEN_NONE && (i = (t / e < 1 ? Ve.SCREEN_VERTICAL : Ve.SCREEN_HORIZONTAL) !== this._screenMode)) {
                    var s = e;
                    e = t, t = s;
                }
                this.canvasRotation = i;
                var r = ue._mainCanvas, a = r.source.style, n = this._canvasTransform.identity(), h = this._scaleMode, o = t / this.designWidth, l = e / this.designHeight, _ = this.useRetinalCanvas ? t : this.designWidth, u = this.useRetinalCanvas ? e : this.designHeight, c = t, d = e, p = se.pixelRatio;
                switch (this._width = this.designWidth, this._height = this.designHeight, h) {
                  case Ve.SCALE_NOSCALE:
                    o = l = 1, c = this.designWidth, d = this.designHeight;
                    break;

                  case Ve.SCALE_SHOWALL:
                    o = l = Math.min(o, l), _ = c = Math.round(this.designWidth * o), u = d = Math.round(this.designHeight * l);
                    break;

                  case Ve.SCALE_NOBORDER:
                    o = l = Math.max(o, l), c = Math.round(this.designWidth * o), d = Math.round(this.designHeight * l);
                    break;

                  case Ve.SCALE_FULL:
                    o = l = 1, this._width = _ = t, this._height = u = e;
                    break;

                  case Ve.SCALE_FIXED_WIDTH:
                    l = o, this._height = u = Math.round(e / o);
                    break;

                  case Ve.SCALE_FIXED_HEIGHT:
                    o = l, this._width = _ = Math.round(t / l);
                    break;

                  case Ve.SCALE_FIXED_AUTO:
                    t / e < this.designWidth / this.designHeight ? (l = o, this._height = u = Math.round(e / o)) : (o = l, 
                    this._width = _ = Math.round(t / l));
                }
                this.useRetinalCanvas && (c = _ = t, d = u = e), o *= this.scaleX, l *= this.scaleY, 
                1 === o && 1 === l ? this.transform.identity() : (this.transform.a = this._formatData(o / (c / _)), 
                this.transform.d = this._formatData(l / (d / u))), r.size(_, u), We.changeWebGLSize(_, u), 
                n.scale(c / _ / p, d / u / p), this._alignH === Ve.ALIGN_LEFT ? this.offset.x = 0 : this._alignH === Ve.ALIGN_RIGHT ? this.offset.x = t - c : this.offset.x = .5 * (t - c) / p, 
                this._alignV === Ve.ALIGN_TOP ? this.offset.y = 0 : this._alignV === Ve.ALIGN_BOTTOM ? this.offset.y = e - d : this.offset.y = .5 * (e - d) / p, 
                this.offset.x = Math.round(this.offset.x), this.offset.y = Math.round(this.offset.y), 
                n.translate(this.offset.x, this.offset.y), this._safariOffsetY && n.translate(0, this._safariOffsetY), 
                this.canvasDegree = 0, i && (this._screenMode === Ve.SCREEN_HORIZONTAL ? (n.rotate(Math.PI / 2), 
                n.translate(e / p, 0), this.canvasDegree = 90) : (n.rotate(-Math.PI / 2), n.translate(0, t / p), 
                this.canvasDegree = -90)), n.a = this._formatData(n.a), n.d = this._formatData(n.d), 
                n.tx = this._formatData(n.tx), n.ty = this._formatData(n.ty), (0, _get2.default)((0, 
                _getPrototypeOf2.default)(Ve.prototype), "set_transform", this).call(this, this.transform), 
                a.transformOrigin = a.webkitTransformOrigin = a.msTransformOrigin = a.mozTransformOrigin = a.oTransformOrigin = "0px 0px 0px", 
                a.transform = a.webkitTransform = a.msTransform = a.mozTransform = a.oTransform = "matrix(" + n.toString() + ")", 
                a.width = _, a.height = u, this._safariOffsetY && n.translate(0, -this._safariOffsetY), 
                n.translate(parseInt(a.left) || 0, parseInt(a.top) || 0), this.visible = !0, this._repaint |= me.REPAINT_CACHE, 
                this.event(Qt.RESIZE);
            }
        }, {
            key: "_formatData",
            value: function _formatData(t) {
                return Math.abs(t) < 1e-6 ? 0 : Math.abs(1 - t) < .001 ? t > 0 ? 1 : -1 : t;
            }
        }, {
            key: "getMousePoint",
            value: function getMousePoint() {
                return f.TEMP.setTo(this.mouseX, this.mouseY);
            }
        }, {
            key: "repaint",
            value: function repaint() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : me.REPAINT_CACHE;
                this._repaint |= t;
            }
        }, {
            key: "parentRepaint",
            value: function parentRepaint() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : me.REPAINT_CACHE;
            }
        }, {
            key: "_loop",
            value: function _loop() {
                return this._globalRepaintGet = this._globalRepaintSet, this._globalRepaintSet = !1, 
                this.render(ue._context, 0, 0), !0;
            }
        }, {
            key: "getFrameTm",
            value: function getFrameTm() {
                return this._frameStartTime;
            }
        }, {
            key: "_onmouseMove",
            value: function _onmouseMove(t) {
                this._mouseMoveTime = se.now();
            }
        }, {
            key: "getTimeFromFrameStart",
            value: function getTimeFromFrameStart() {
                return se.now() - this._frameStartTime;
            }
        }, {
            key: "render",
            value: function render(t, e, i) {
                if (window.conch) this.renderToNative(t, e, i); else {
                    if (this._frameRate === Ve.FRAME_SLEEP) {
                        var s = se.now();
                        if (!(s - this._frameStartTime >= 1e3)) return;
                        this._frameStartTime = s;
                    } else {
                        if (!this._visible) return this._renderCount++, void (this._renderCount % 5 == 0 && (Ge.I._update(), 
                        X.loopCount++, Et.loopCount = X.loopCount, this._updateTimers()));
                        this._frameStartTime = se.now(), Et.loopStTm = this._frameStartTime;
                    }
                    this._renderCount++;
                    var r = (this._frameRate === Ve.FRAME_MOUSE ? this._frameStartTime - this._mouseMoveTime < 2e3 ? Ve.FRAME_FAST : Ve.FRAME_SLOW : this._frameRate) !== Ve.FRAME_SLOW, a = this._renderCount % 2 == 0;
                    if (X.renderSlow = !r, r || a) {
                        if (Ge.I._update(), X.loopCount++, Et.loopCount = X.loopCount, Ye.begainSample(Ye.PERFORMANCE_LAYA), 
                        this.renderingEnabled) {
                            for (var n = 0, h = this._scene3Ds.length; n < h; n++) {
                                this._scene3Ds[n]._update();
                            }
                            t.clear(), (0, _get2.default)((0, _getPrototypeOf2.default)(Ve.prototype), "render", this).call(this, t, e, i), 
                            X._StatRender.renderNotCanvas(t, e, i);
                        }
                        this.renderingEnabled && (Ve.clear(this._bgColor), t.flush(), ye.instance && ye.getInstance().endDispose()), 
                        this._updateTimers(), Ye.endSample(Ye.PERFORMANCE_LAYA);
                    }
                }
            }
        }, {
            key: "renderToNative",
            value: function renderToNative(t, e, i) {
                if (this._renderCount++, this._visible) {
                    if (Ge.I._update(), X.loopCount++, Et.loopCount = X.loopCount, this.renderingEnabled) {
                        for (var s = 0, r = this._scene3Ds.length; s < r; s++) {
                            this._scene3Ds[s]._update();
                        }
                        t.clear(), (0, _get2.default)((0, _getPrototypeOf2.default)(Ve.prototype), "render", this).call(this, t, e, i), 
                        X._StatRender.renderNotCanvas(t, e, i);
                    }
                    this.renderingEnabled && (Ve.clear(this._bgColor), t.flush(), ye.instance && ye.getInstance().endDispose()), 
                    this._updateTimers();
                } else this._renderCount % 5 == 0 && (Ge.I._update(), X.loopCount++, Et.loopCount = X.loopCount, 
                this._updateTimers());
            }
        }, {
            key: "_updateTimers",
            value: function _updateTimers() {
                i.systemTimer._update(), i.startTimer._update(), i.physicsTimer._update(), i.updateTimer._update(), 
                i.lateTimer._update(), i.timer._update();
            }
        }, {
            key: "_requestFullscreen",
            value: function _requestFullscreen() {
                var t = se.document.documentElement;
                t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.msRequestFullscreen && t.msRequestFullscreen();
            }
        }, {
            key: "_fullScreenChanged",
            value: function _fullScreenChanged() {
                i.stage.event(Qt.FULL_SCREEN_CHANGE);
            }
        }, {
            key: "exitFullscreen",
            value: function exitFullscreen() {
                var t = se.document;
                t.exitFullscreen ? t.exitFullscreen() : t.mozCancelFullScreen ? t.mozCancelFullScreen() : t.webkitExitFullscreen && t.webkitExitFullscreen();
            }
        }, {
            key: "isGlobalRepaint",
            value: function isGlobalRepaint() {
                return this._globalRepaintGet;
            }
        }, {
            key: "setGlobalRepaint",
            value: function setGlobalRepaint() {
                this._globalRepaintSet = !0;
            }
        }, {
            key: "add3DUI",
            value: function add3DUI(t) {
                var e = t.rootView;
                this._3dUI.indexOf(e) >= 0 || this._3dUI.push(e);
            }
        }, {
            key: "remove3DUI",
            value: function remove3DUI(t) {
                var e = t.rootView, i = this._3dUI.indexOf(e);
                return i >= 0 && (this._3dUI.splice(i, 1), !0);
            }
        }, {
            key: "width",
            set: function set(t) {
                this.designWidth = t, (0, _get2.default)((0, _getPrototypeOf2.default)(Ve.prototype), "set_width", this).call(this, t), 
                i.systemTimer.callLater(this, this._changeCanvasSize);
            },
            get: function get() {
                return (0, _get2.default)((0, _getPrototypeOf2.default)(Ve.prototype), "get_width", this).call(this);
            }
        }, {
            key: "height",
            set: function set(t) {
                this.designHeight = t, (0, _get2.default)((0, _getPrototypeOf2.default)(Ve.prototype), "set_height", this).call(this, t), 
                i.systemTimer.callLater(this, this._changeCanvasSize);
            },
            get: function get() {
                return (0, _get2.default)((0, _getPrototypeOf2.default)(Ve.prototype), "get_height", this).call(this);
            }
        }, {
            key: "transform",
            set: function set(t) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(Ve.prototype), "set_transform", this).call(this, t);
            },
            get: function get() {
                return this._tfChanged && this._adjustTransform(), this._transform = this._transform || this._createTransform();
            }
        }, {
            key: "isFocused",
            get: function get() {
                return this._isFocused;
            }
        }, {
            key: "isVisibility",
            get: function get() {
                return this._isVisibility;
            }
        }, {
            key: "scaleMode",
            get: function get() {
                return this._scaleMode;
            },
            set: function set(t) {
                this._scaleMode = t, i.systemTimer.callLater(this, this._changeCanvasSize);
            }
        }, {
            key: "alignH",
            get: function get() {
                return this._alignH;
            },
            set: function set(t) {
                this._alignH = t, i.systemTimer.callLater(this, this._changeCanvasSize);
            }
        }, {
            key: "alignV",
            get: function get() {
                return this._alignV;
            },
            set: function set(t) {
                this._alignV = t, i.systemTimer.callLater(this, this._changeCanvasSize);
            }
        }, {
            key: "bgColor",
            get: function get() {
                return this._bgColor;
            },
            set: function set(t) {
                this._bgColor = t, this._wgColor = t ? J.create(t).arrColor : null, ue.canvas.style.background = t || "none";
            }
        }, {
            key: "mouseX",
            get: function get() {
                return Math.round(Ue.instance.mouseX / this.clientScaleX);
            }
        }, {
            key: "mouseY",
            get: function get() {
                return Math.round(Ue.instance.mouseY / this.clientScaleY);
            }
        }, {
            key: "clientScaleX",
            get: function get() {
                return this._transform ? this._transform.getScaleX() : 1;
            }
        }, {
            key: "clientScaleY",
            get: function get() {
                return this._transform ? this._transform.getScaleY() : 1;
            }
        }, {
            key: "screenMode",
            get: function get() {
                return this._screenMode;
            },
            set: function set(t) {
                this._screenMode = t;
            }
        }, {
            key: "visible",
            set: function set(t) {
                this.visible !== t && ((0, _get2.default)((0, _getPrototypeOf2.default)(Ve.prototype), "set_visible", this).call(this, t), 
                ue._mainCanvas.source.style.visibility = t ? "visible" : "hidden");
            },
            get: function get() {
                return (0, _get2.default)((0, _getPrototypeOf2.default)(Ve.prototype), "visible", this);
            }
        }, {
            key: "fullScreenEnabled",
            set: function set(t) {
                var e = se.document, i = ue.canvas;
                t ? (i.addEventListener("mousedown", this._requestFullscreen), i.addEventListener("touchstart", this._requestFullscreen), 
                e.addEventListener("fullscreenchange", this._fullScreenChanged), e.addEventListener("mozfullscreenchange", this._fullScreenChanged), 
                e.addEventListener("webkitfullscreenchange", this._fullScreenChanged), e.addEventListener("msfullscreenchange", this._fullScreenChanged)) : (i.removeEventListener("mousedown", this._requestFullscreen), 
                i.removeEventListener("touchstart", this._requestFullscreen), e.removeEventListener("fullscreenchange", this._fullScreenChanged), 
                e.removeEventListener("mozfullscreenchange", this._fullScreenChanged), e.removeEventListener("webkitfullscreenchange", this._fullScreenChanged), 
                e.removeEventListener("msfullscreenchange", this._fullScreenChanged));
            }
        }, {
            key: "frameRate",
            get: function get() {
                return i.Render.isConchApp ? this._frameRateNative : this._frameRate;
            },
            set: function set(t) {
                if (i.Render.isConchApp) {
                    var e = window.conch;
                    switch (t) {
                      case Ve.FRAME_FAST:
                        e.config.setLimitFPS(60);
                        break;

                      case Ve.FRAME_MOUSE:
                        e.config.setMouseFrame(2e3);
                        break;

                      case Ve.FRAME_SLOW:
                        e.config.setSlowFrame(!0);
                        break;

                      case Ve.FRAME_SLEEP:
                        e.config.setLimitFPS(1);
                    }
                    this._frameRateNative = t;
                } else this._frameRate = t;
            }
        } ]);
        return Ve;
    }(De);
    Ve.SCALE_NOSCALE = "noscale", Ve.SCALE_EXACTFIT = "exactfit", Ve.SCALE_SHOWALL = "showall", 
    Ve.SCALE_NOBORDER = "noborder", Ve.SCALE_FULL = "full", Ve.SCALE_FIXED_WIDTH = "fixedwidth", 
    Ve.SCALE_FIXED_HEIGHT = "fixedheight", Ve.SCALE_FIXED_AUTO = "fixedauto", Ve.ALIGN_LEFT = "left", 
    Ve.ALIGN_RIGHT = "right", Ve.ALIGN_CENTER = "center", Ve.ALIGN_TOP = "top", Ve.ALIGN_MIDDLE = "middle", 
    Ve.ALIGN_BOTTOM = "bottom", Ve.SCREEN_NONE = "none", Ve.SCREEN_HORIZONTAL = "horizontal", 
    Ve.SCREEN_VERTICAL = "vertical", Ve.FRAME_FAST = "fast", Ve.FRAME_SLOW = "slow", 
    Ve.FRAME_MOUSE = "mouse", Ve.FRAME_SLEEP = "sleep", Ve.clear = function(t) {
        he.set2DRenderConfig();
        var s = g.instance;
        U.worldScissorTest && s.disable(s.SCISSOR_TEST);
        var r = ue.context, a = 0 == r._submits._length || e.preserveDrawingBuffer ? J.create(t).arrColor : i.stage._wgColor;
        a ? r.clearBG(a[0], a[1], a[2], a[3]) : r.clearBG(0, 0, 0, 0), U.clear();
    }, we.regClass("laya.display.Stage", Ve), we.regClass("Laya.Stage", Ve);
    var Xe = /* */ function() {
        function Xe() {
            (0, _classCallCheck2.default)(this, Xe);
        }
        (0, _createClass2.default)(Xe, null, [ {
            key: "__init__",
            value: function __init__() {
                Xe._addEvent("keydown"), Xe._addEvent("keypress"), Xe._addEvent("keyup");
            }
        }, {
            key: "_addEvent",
            value: function _addEvent(t) {
                i.Browser.document.addEventListener(t, function(e) {
                    Xe._dispatch(e, t);
                }, !0);
            }
        }, {
            key: "_dispatch",
            value: function _dispatch(t, e) {
                if (Xe.enabled) {
                    Xe._event._stoped = !1, Xe._event.nativeEvent = t, Xe._event.keyCode = t.keyCode || t.which || t.charCode, 
                    "keydown" === e ? Xe._pressKeys[Xe._event.keyCode] = !0 : "keyup" === e && (Xe._pressKeys[Xe._event.keyCode] = null);
                    for (var s = i.stage.focus && null != i.stage.focus.event && i.stage.focus.displayedInStage ? i.stage.focus : i.stage, r = s; r; ) {
                        r.event(e, Xe._event.setTo(e, r, s)), r = r.parent;
                    }
                }
            }
        }, {
            key: "hasKeyDown",
            value: function hasKeyDown(t) {
                return Xe._pressKeys[t];
            }
        } ]);
        return Xe;
    }();
    Xe._pressKeys = {}, Xe.enabled = !0, Xe._event = new Qt();
    var He = /* */ function(_S4) {
        (0, _inherits2.default)(He, _S4);
        var _super33 = _createSuper(He);
        function He() {
            var _this28;
            (0, _classCallCheck2.default)(this, He);
            _this28 = _super33.apply(this, arguments), _this28.isStopped = !1;
            return _this28;
        }
        (0, _createClass2.default)(He, [ {
            key: "play",
            value: function play() {}
        }, {
            key: "stop",
            value: function stop() {
                this.completeHandler && this.completeHandler.runWith(!1);
            }
        }, {
            key: "pause",
            value: function pause() {}
        }, {
            key: "resume",
            value: function resume() {}
        }, {
            key: "__runComplete",
            value: function __runComplete(t) {
                t && t.runWith(!0);
            }
        }, {
            key: "volume",
            set: function set(t) {},
            get: function get() {
                return 1;
            }
        }, {
            key: "position",
            get: function get() {
                return 0;
            }
        }, {
            key: "duration",
            get: function get() {
                return 0;
            }
        } ]);
        return He;
    }(S);
    var ze = /* */ function(_He) {
        (0, _inherits2.default)(ze, _He);
        var _super34 = _createSuper(ze);
        function ze(t) {
            var _this29;
            (0, _classCallCheck2.default)(this, ze);
            _this29 = _super34.call(this), _this29._audio = null, _this29._onEnd = _this29.__onEnd.bind((0, 
            _assertThisInitialized2.default)(_this29)), _this29._resumePlay = _this29.__resumePlay.bind((0, 
            _assertThisInitialized2.default)(_this29)), t.addEventListener("ended", _this29._onEnd), 
            _this29._audio = t;
            return _this29;
        }
        (0, _createClass2.default)(ze, [ {
            key: "__onEnd",
            value: function __onEnd(t) {
                if (1 == this.loops) return this.completeHandler && (i.systemTimer.once(10, this, this.__runComplete, [ this.completeHandler ], !1), 
                this.completeHandler = null), this.stop(), void this.event(Qt.COMPLETE);
                this.loops > 0 && this.loops--, this.startTime = 0, this.play();
            }
        }, {
            key: "__resumePlay",
            value: function __resumePlay() {
                if (this._audio && this._audio.removeEventListener("canplay", this._resumePlay), 
                !this.isStopped) try {
                    this._audio.currentTime = this.startTime, se.container.appendChild(this._audio), 
                    this._audio.play();
                } catch (t) {
                    this.event(Qt.ERROR);
                }
            }
        }, {
            key: "play",
            value: function play() {
                this.isStopped = !1;
                try {
                    this._audio.playbackRate = i.SoundManager.playbackRate, this._audio.currentTime = this.startTime;
                } catch (t) {
                    return void this._audio.addEventListener("canplay", this._resumePlay);
                }
                i.SoundManager.addChannel(this), se.container.appendChild(this._audio), "play" in this._audio && this._audio.play();
            }
        }, {
            key: "stop",
            value: function stop() {
                (0, _get2.default)((0, _getPrototypeOf2.default)(ze.prototype), "stop", this).call(this), 
                this.isStopped = !0, i.SoundManager.removeChannel(this), this.completeHandler = null, 
                this._audio && ("pause" in this._audio && i.Render.isConchApp && this._audio.stop(), 
                this._audio.pause(), this._audio.removeEventListener("ended", this._onEnd), this._audio.removeEventListener("canplay", this._resumePlay), 
                i.Browser.onIE || this._audio != i.AudioSound._musicAudio && i.Pool.recover("audio:" + this.url, this._audio), 
                se.removeElement(this._audio), this._audio = null, i.SoundManager.autoReleaseSound && i.SoundManager.disposeSoundLater(this.url));
            }
        }, {
            key: "pause",
            value: function pause() {
                this.isStopped = !0, i.SoundManager.removeChannel(this), this._audio && ("pause" in this._audio && this._audio.pause(), 
                i.SoundManager.autoReleaseSound && i.SoundManager.disposeSoundLater(this.url));
            }
        }, {
            key: "resume",
            value: function resume() {
                var t = this._audio;
                t && (this.isStopped = !1, 0 == t.readyState && (t.src = this.url, t.addEventListener("canplay", this._resumePlay), 
                t.load()), i.SoundManager.addChannel(this), "play" in t && t.play());
            }
        }, {
            key: "position",
            get: function get() {
                return this._audio ? this._audio.currentTime : 0;
            }
        }, {
            key: "duration",
            get: function get() {
                return this._audio ? this._audio.duration : 0;
            }
        }, {
            key: "volume",
            set: function set(t) {
                this._audio && (this._audio.volume = t);
            },
            get: function get() {
                return this._audio ? this._audio.volume : 1;
            }
        } ]);
        return ze;
    }(He);
    var Ke = /* */ function(_S5) {
        (0, _inherits2.default)(Ke, _S5);
        var _super35 = _createSuper(Ke);
        function Ke() {
            var _this30;
            (0, _classCallCheck2.default)(this, Ke);
            _this30 = _super35.apply(this, arguments), _this30.loaded = !1;
            return _this30;
        }
        (0, _createClass2.default)(Ke, [ {
            key: "dispose",
            value: function dispose() {
                var t = Ke._audioCache[this.url];
                s.clearBySign("audio:" + this.url), t && (ue.isConchApp || (t.src = ""), delete Ke._audioCache[this.url]);
            }
        }, {
            key: "load",
            value: function load(t) {
                var e;
                if (t = M.formatURL(t), this.url = t, t == i.SoundManager._bgMusic ? (Ke._initMusicAudio(), 
                (e = Ke._musicAudio).src != t && (delete Ke._audioCache[e.src], e = null)) : e = Ke._audioCache[t], 
                e && e.readyState >= 2) this.event(Qt.COMPLETE); else {
                    e || (t == i.SoundManager._bgMusic ? (Ke._initMusicAudio(), e = Ke._musicAudio) : e = se.createElement("audio"), 
                    Ke._audioCache[t] = e, e.src = t), e.addEventListener("canplaythrough", onLoaded), 
                    e.addEventListener("error", onErr);
                    var s = this;
                    this.audio = e, e.load ? e.load() : onErr();
                }
                function onLoaded() {
                    offs(), s.loaded = !0, s.event(Qt.COMPLETE);
                }
                function onErr() {
                    e.load = null, offs(), s.event(Qt.ERROR);
                }
                function offs() {
                    e.removeEventListener("canplaythrough", onLoaded), e.removeEventListener("error", onErr);
                }
            }
        }, {
            key: "play",
            value: function play() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                if (!this.url) return null;
                var r, a;
                if (this.url == i.SoundManager._bgMusic ? "" != (r = Ke._musicAudio).src && r.src != this.url && (delete Ke._audioCache[r.src], 
                Ke._audioCache[this.url] = r) : r = Ke._audioCache[this.url], !r) return null;
                a = s.getItem("audio:" + this.url), ue.isConchApp ? a || ((a = se.createElement("audio")).src = this.url) : this.url == i.SoundManager._bgMusic ? (Ke._initMusicAudio(), 
                (a = Ke._musicAudio).src = this.url) : a = a || r.cloneNode(!0);
                var n = new ze(a);
                return n.url = this.url, n.loops = e, n.startTime = t, n.play(), i.SoundManager.addChannel(n), 
                n;
            }
        }, {
            key: "duration",
            get: function get() {
                var t;
                return (t = Ke._audioCache[this.url]) ? t.duration : 0;
            }
        } ], [ {
            key: "_initMusicAudio",
            value: function _initMusicAudio() {
                Ke._musicAudio || (Ke._musicAudio || (Ke._musicAudio = se.createElement("audio")), 
                ue.isConchApp || se.document.addEventListener("mousedown", Ke._makeMusicOK));
            }
        }, {
            key: "_makeMusicOK",
            value: function _makeMusicOK() {
                se.document.removeEventListener("mousedown", Ke._makeMusicOK), Ke._musicAudio.src ? Ke._musicAudio.play() : (Ke._musicAudio.src = "", 
                Ke._musicAudio.load());
            }
        } ]);
        return Ke;
    }(S);
    Ke._audioCache = {};
    var je = /* */ function(_He2) {
        (0, _inherits2.default)(je, _He2);
        var _super36 = _createSuper(je);
        function je() {
            var _this31;
            (0, _classCallCheck2.default)(this, je);
            _this31 = _super36.call(this), _this31.bufferSource = null, _this31._currentTime = 0, 
            _this31._volume = 1, _this31._startTime = 0, _this31._pauseTime = 0, _this31.context = i.WebAudioSound.ctx, 
            _this31._onPlayEnd = $.bind(_this31.__onPlayEnd, (0, _assertThisInitialized2.default)(_this31)), 
            _this31.context.createGain ? _this31.gain = _this31.context.createGain() : _this31.gain = _this31.context.createGainNode();
            return _this31;
        }
        (0, _createClass2.default)(je, [ {
            key: "play",
            value: function play() {
                if (i.SoundManager.addChannel(this), this.isStopped = !1, this._clearBufferSource(), 
                this.audioBuffer) {
                    if (this.startTime >= this.duration) return stop();
                    var t = this.context, e = this.gain, s = t.createBufferSource();
                    this.bufferSource = s, s.buffer = this.audioBuffer, s.connect(e), e && e.disconnect(), 
                    e.connect(t.destination), s.onended = this._onPlayEnd, this._startTime = se.now(), 
                    this.gain.gain.setTargetAtTime ? this.gain.gain.setTargetAtTime(this._volume, this.context.currentTime, je.SetTargetDelay) : this.gain.gain.value = this._volume, 
                    0 == this.loops && (s.loop = !0), s.playbackRate.setTargetAtTime ? s.playbackRate.setTargetAtTime(i.SoundManager.playbackRate, this.context.currentTime, je.SetTargetDelay) : s.playbackRate.value = i.SoundManager.playbackRate, 
                    s.start(0, this.startTime), this._currentTime = 0;
                }
            }
        }, {
            key: "__onPlayEnd",
            value: function __onPlayEnd() {
                if (1 == this.loops) return this.completeHandler && (i.timer.once(10, this, this.__runComplete, [ this.completeHandler ], !1), 
                this.completeHandler = null), this.stop(), void this.event(Qt.COMPLETE);
                this.loops > 0 && this.loops--, this.startTime = 0, this.play();
            }
        }, {
            key: "_clearBufferSource",
            value: function _clearBufferSource() {
                if (this.bufferSource) {
                    var t = this.bufferSource;
                    t.stop ? t.stop(0) : t.noteOff(0), t.disconnect(0), t.onended = null, je._tryCleanFailed || this._tryClearBuffer(t), 
                    this.bufferSource = null;
                }
            }
        }, {
            key: "_tryClearBuffer",
            value: function _tryClearBuffer(t) {
                try {
                    t.buffer = null;
                } catch (t) {
                    je._tryCleanFailed = !0;
                }
            }
        }, {
            key: "stop",
            value: function stop() {
                (0, _get2.default)((0, _getPrototypeOf2.default)(je.prototype), "stop", this).call(this), 
                this._clearBufferSource(), this.audioBuffer = null, this.gain && this.gain.disconnect(), 
                this.isStopped = !0, i.SoundManager.removeChannel(this), this.completeHandler = null, 
                i.SoundManager.autoReleaseSound && i.SoundManager.disposeSoundLater(this.url);
            }
        }, {
            key: "pause",
            value: function pause() {
                this.isStopped || (this._pauseTime = this.position), this._clearBufferSource(), 
                this.gain && this.gain.disconnect(), this.isStopped = !0, i.SoundManager.removeChannel(this), 
                i.SoundManager.autoReleaseSound && i.SoundManager.disposeSoundLater(this.url);
            }
        }, {
            key: "resume",
            value: function resume() {
                this.startTime = this._pauseTime, this.play();
            }
        }, {
            key: "position",
            get: function get() {
                return this.bufferSource ? (se.now() - this._startTime) / 1e3 + this.startTime : 0;
            }
        }, {
            key: "duration",
            get: function get() {
                return this.audioBuffer ? this.audioBuffer.duration : 0;
            }
        }, {
            key: "volume",
            set: function set(t) {
                this._volume = t, this.isStopped || (this.gain.gain.setTargetAtTime ? this.gain.gain.setTargetAtTime(t, this.context.currentTime, je.SetTargetDelay) : this.gain.gain.value = t);
            },
            get: function get() {
                return this._volume;
            }
        } ]);
        return je;
    }(He);
    je._tryCleanFailed = !1, je.SetTargetDelay = .001;
    var qe = /* */ function(_S6) {
        (0, _inherits2.default)(qe, _S6);
        var _super37 = _createSuper(qe);
        function qe() {
            var _this32;
            (0, _classCallCheck2.default)(this, qe);
            _this32 = _super37.apply(this, arguments), _this32.loaded = !1, _this32._disposed = !1;
            return _this32;
        }
        (0, _createClass2.default)(qe, [ {
            key: "load",
            value: function load(t) {
                var e = this;
                if (t = M.formatURL(t), this.url = t, this.audioBuffer = qe._dataCache[t], this.audioBuffer) this._loaded(this.audioBuffer); else if (qe.e.on("loaded:" + t, this, this._loaded), 
                qe.e.on("err:" + t, this, this._err), !qe.__loadingSound[t]) {
                    qe.__loadingSound[t] = !0;
                    var i = new XMLHttpRequest();
                    i.open("GET", t, !0), i.responseType = "arraybuffer", i.onload = function() {
                        e._disposed ? e._removeLoadEvents() : (e.data = i.response, qe.buffs.push({
                            buffer: e.data,
                            url: e.url
                        }), qe.decode());
                    }, i.onerror = function(t) {
                        e._err();
                    }, i.send();
                }
            }
        }, {
            key: "_err",
            value: function _err() {
                this._removeLoadEvents(), qe.__loadingSound[this.url] = !1, this.event(Qt.ERROR);
            }
        }, {
            key: "_loaded",
            value: function _loaded(t) {
                this._removeLoadEvents(), this._disposed || (this.audioBuffer = t, qe._dataCache[this.url] = this.audioBuffer, 
                this.loaded = !0, this.event(Qt.COMPLETE));
            }
        }, {
            key: "_removeLoadEvents",
            value: function _removeLoadEvents() {
                qe.e.off("loaded:" + this.url, this, this._loaded), qe.e.off("err:" + this.url, this, this._err);
            }
        }, {
            key: "__playAfterLoaded",
            value: function __playAfterLoaded() {
                if (this.__toPlays) {
                    var t, e, i, s;
                    for (e = (i = this.__toPlays).length, t = 0; t < e; t++) {
                        (s = i[t])[2] && !s[2].isStopped && this.play(s[0], s[1], s[2]);
                    }
                    this.__toPlays.length = 0;
                }
            }
        }, {
            key: "play",
            value: function play() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                return s = s || new je(), this.audioBuffer || this.url && (this.__toPlays || (this.__toPlays = []), 
                this.__toPlays.push([ t, e, s ]), this.once(Qt.COMPLETE, this, this.__playAfterLoaded), 
                this.load(this.url)), s.url = this.url, s.loops = e, s.audioBuffer = this.audioBuffer, 
                s.startTime = t, s.play(), i.SoundManager.addChannel(s), s;
            }
        }, {
            key: "dispose",
            value: function dispose() {
                this._disposed = !0, delete qe._dataCache[this.url], delete qe.__loadingSound[this.url], 
                this.audioBuffer = null, this.data = null, this.__toPlays = [];
            }
        }, {
            key: "duration",
            get: function get() {
                return this.audioBuffer ? this.audioBuffer.duration : 0;
            }
        } ], [ {
            key: "decode",
            value: function decode() {
                qe.buffs.length <= 0 || qe.isDecoding || (qe.isDecoding = !0, qe.tInfo = qe.buffs.shift(), 
                qe.ctx.decodeAudioData(qe.tInfo.buffer, qe._done, qe._fail));
            }
        }, {
            key: "_done",
            value: function _done(t) {
                qe.e.event("loaded:" + qe.tInfo.url, t), qe.isDecoding = !1, qe.decode();
            }
        }, {
            key: "_fail",
            value: function _fail() {
                qe.e.event("err:" + qe.tInfo.url, null), qe.isDecoding = !1, qe.decode();
            }
        }, {
            key: "_playEmptySound",
            value: function _playEmptySound() {
                if (null != qe.ctx) {
                    var t = qe.ctx.createBufferSource();
                    t.buffer = qe._miniBuffer, t.connect(qe.ctx.destination), t.start(0, 0, 0);
                }
            }
        }, {
            key: "_unlock",
            value: function _unlock() {
                qe._unlocked || (qe._playEmptySound(), "running" == qe.ctx.state && (window.document.removeEventListener("mousedown", qe._unlock, !0), 
                window.document.removeEventListener("touchend", qe._unlock, !0), window.document.removeEventListener("touchstart", qe._unlock, !0), 
                qe._unlocked = !0));
            }
        }, {
            key: "initWebAudio",
            value: function initWebAudio() {
                "running" != qe.ctx.state && (qe._unlock(), window.document.addEventListener("mousedown", qe._unlock, !0), 
                window.document.addEventListener("touchend", qe._unlock, !0), window.document.addEventListener("touchstart", qe._unlock, !0));
            }
        } ]);
        return qe;
    }(S);
    qe._dataCache = {}, qe.webAudioEnabled = window.AudioContext || window.webkitAudioContext || window.mozAudioContext, 
    qe.ctx = qe.webAudioEnabled ? new (window.AudioContext || window.webkitAudioContext || window.mozAudioContext)() : void 0, 
    qe.buffs = [], qe.isDecoding = !1, qe._miniBuffer = qe.ctx ? qe.ctx.createBuffer(1, 1, 22050) : void 0, 
    qe.e = new S(), qe._unlocked = !1, qe.__loadingSound = {};
    var Ze = /* */ function() {
        function Ze() {
            (0, _classCallCheck2.default)(this, Ze);
        }
        (0, _createClass2.default)(Ze, null, [ {
            key: "__init__",
            value: function __init__() {
                var t = i.Browser.window, e = !!(t.AudioContext || t.webkitAudioContext || t.mozAudioContext);
                return e && qe.initWebAudio(), Ze._soundClass = e ? qe : Ke, se.onTBMiniGame || Ke._initMusicAudio(), 
                Ze._musicClass = Ke, e;
            }
        }, {
            key: "addChannel",
            value: function addChannel(t) {
                Ze._channels.indexOf(t) >= 0 || Ze._channels.push(t);
            }
        }, {
            key: "removeChannel",
            value: function removeChannel(t) {
                var e;
                for (e = Ze._channels.length - 1; e >= 0; e--) {
                    Ze._channels[e] == t && Ze._channels.splice(e, 1);
                }
            }
        }, {
            key: "disposeSoundLater",
            value: function disposeSoundLater(t) {
                Ze._lastSoundUsedTimeDic[t] = i.Browser.now(), Ze._isCheckingDispose || (Ze._isCheckingDispose = !0, 
                i.timer.loop(5e3, null, Ze._checkDisposeSound));
            }
        }, {
            key: "_checkDisposeSound",
            value: function _checkDisposeSound() {
                var t, e = i.Browser.now(), s = !1;
                for (t in Ze._lastSoundUsedTimeDic) {
                    e - Ze._lastSoundUsedTimeDic[t] > 3e4 ? (delete Ze._lastSoundUsedTimeDic[t], Ze.disposeSoundIfNotUsed(t)) : s = !0;
                }
                s || (Ze._isCheckingDispose = !1, i.timer.clear(null, Ze._checkDisposeSound));
            }
        }, {
            key: "disposeSoundIfNotUsed",
            value: function disposeSoundIfNotUsed(t) {
                var e;
                for (e = Ze._channels.length - 1; e >= 0; e--) {
                    if (Ze._channels[e].url == t) return;
                }
                Ze.destroySound(t);
            }
        }, {
            key: "_visibilityChange",
            value: function _visibilityChange() {
                i.stage.isVisibility ? Ze._stageOnFocus() : Ze._stageOnBlur();
            }
        }, {
            key: "_stageOnBlur",
            value: function _stageOnBlur() {
                Ze._isActive = !1, Ze._musicChannel && (Ze._musicChannel.isStopped || (Ze._blurPaused = !0, 
                Ze._musicChannel.pause())), Ze.stopAllSound(), i.stage.once(Qt.MOUSE_DOWN, null, Ze._stageOnFocus);
            }
        }, {
            key: "_recoverWebAudio",
            value: function _recoverWebAudio() {
                qe.ctx && "running" != qe.ctx.state && qe.ctx.resume && qe.ctx.resume();
            }
        }, {
            key: "_stageOnFocus",
            value: function _stageOnFocus() {
                Ze._isActive = !0, Ze._recoverWebAudio(), i.stage.off(Qt.MOUSE_DOWN, null, Ze._stageOnFocus), 
                Ze._blurPaused && Ze._musicChannel && Ze._musicChannel.isStopped && (Ze._blurPaused = !1, 
                Ze._musicChannel.resume());
            }
        }, {
            key: "playSound",
            value: function playSound(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
                var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
                if (!Ze._isActive || !t) return null;
                if (Ze._muted) return null;
                if (Ze._recoverWebAudio(), (t = M.formatURL(t)) == Ze._bgMusic) {
                    if (Ze._musicMuted) return null;
                } else {
                    if (i.Render.isConchApp) {
                        var n = $.getFileExtension(t);
                        if ("wav" != n && "ogg" != n) return alert("The sound only supports wav or ogg format,for optimal performance reason,please refer to the official website document."), 
                        null;
                    }
                    if (Ze._soundMuted) return null;
                }
                var h, o;
                return se._isMiniGame || (h = i.loader.getRes(t)), r || (r = Ze._soundClass), h || ((h = new r()).load(t), 
                se._isMiniGame || i.Loader.cacheRes(t, h)), (o = h.play(a, e)) ? (o.url = t, o.volume = t == Ze._bgMusic ? Ze.musicVolume : Ze.soundVolume, 
                o.completeHandler = s, o) : null;
            }
        }, {
            key: "destroySound",
            value: function destroySound(t) {
                var e = i.loader.getRes(t);
                e && (i.Loader.clearRes(t), e.dispose());
            }
        }, {
            key: "playMusic",
            value: function playMusic(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
                return t = M.formatURL(t), Ze._bgMusic = t, Ze._musicChannel && Ze._musicChannel.stop(), 
                Ze._musicChannel = Ze.playSound(t, e, i, Ze._musicClass, s);
            }
        }, {
            key: "stopSound",
            value: function stopSound(t) {
                var e, i;
                for (t = M.formatURL(t), e = Ze._channels.length - 1; e >= 0; e--) {
                    (i = Ze._channels[e]).url == t && i.stop();
                }
            }
        }, {
            key: "stopAll",
            value: function stopAll() {
                var t;
                for (Ze._bgMusic = null, t = Ze._channels.length - 1; t >= 0; t--) {
                    Ze._channels[t].stop();
                }
            }
        }, {
            key: "stopAllSound",
            value: function stopAllSound() {
                var t, e;
                for (t = Ze._channels.length - 1; t >= 0; t--) {
                    (e = Ze._channels[t]).url != Ze._bgMusic && e.stop();
                }
            }
        }, {
            key: "stopMusic",
            value: function stopMusic() {
                Ze._musicChannel && Ze._musicChannel.stop(), Ze._bgMusic = null;
            }
        }, {
            key: "setSoundVolume",
            value: function setSoundVolume(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var i, s;
                if (e) e = M.formatURL(e), Ze._setVolume(e, t); else for (Ze.soundVolume = t, i = Ze._channels.length - 1; i >= 0; i--) {
                    (s = Ze._channels[i]).url != Ze._bgMusic && (s.volume = t);
                }
            }
        }, {
            key: "setMusicVolume",
            value: function setMusicVolume(t) {
                Ze.musicVolume = t, Ze._setVolume(Ze._bgMusic, t);
            }
        }, {
            key: "_setVolume",
            value: function _setVolume(t, e) {
                var i, s;
                for (t = M.formatURL(t), i = Ze._channels.length - 1; i >= 0; i--) {
                    (s = Ze._channels[i]).url == t && (s.volume = e);
                }
            }
        }, {
            key: "autoStopMusic",
            set: function set(t) {
                i.stage.off(Qt.BLUR, null, Ze._stageOnBlur), i.stage.off(Qt.FOCUS, null, Ze._stageOnFocus), 
                i.stage.off(Qt.VISIBILITY_CHANGE, null, Ze._visibilityChange), Ze._autoStopMusic = t, 
                t && (i.stage.on(Qt.BLUR, null, Ze._stageOnBlur), i.stage.on(Qt.FOCUS, null, Ze._stageOnFocus), 
                i.stage.on(Qt.VISIBILITY_CHANGE, null, Ze._visibilityChange));
            },
            get: function get() {
                return Ze._autoStopMusic;
            }
        }, {
            key: "muted",
            set: function set(t) {
                t != Ze._muted && (t && Ze.stopAllSound(), Ze.musicMuted = t, Ze._muted = t);
            },
            get: function get() {
                return Ze._muted;
            }
        }, {
            key: "soundMuted",
            set: function set(t) {
                Ze._soundMuted = t;
            },
            get: function get() {
                return Ze._soundMuted;
            }
        }, {
            key: "musicMuted",
            set: function set(t) {
                t != Ze._musicMuted && (t ? (Ze._bgMusic && Ze._musicChannel && !Ze._musicChannel.isStopped ? i.Render.isConchApp ? Ze._musicChannel._audio && (Ze._musicChannel._audio.muted = !0) : Ze._musicChannel.pause() : Ze._musicChannel = null, 
                Ze._musicMuted = t) : (Ze._musicMuted = t, Ze._bgMusic && Ze._musicChannel && (i.Render.isConchApp ? Ze._musicChannel._audio && (Ze._musicChannel._audio.muted = !1) : Ze._musicChannel.resume())));
            },
            get: function get() {
                return Ze._musicMuted;
            }
        }, {
            key: "useAudioMusic",
            get: function get() {
                return Ze._useAudioMusic;
            },
            set: function set(t) {
                Ze._useAudioMusic = t, Ze._musicClass = t ? Ke : null;
            }
        } ]);
        return Ze;
    }();
    Ze.musicVolume = 1, Ze.soundVolume = 1, Ze.playbackRate = 1, Ze._useAudioMusic = !0, 
    Ze._muted = !1, Ze._soundMuted = !1, Ze._musicMuted = !1, Ze._bgMusic = null, Ze._musicChannel = null, 
    Ze._channels = [], Ze._blurPaused = !1, Ze._isActive = !0, Ze._lastSoundUsedTimeDic = {}, 
    Ze._isCheckingDispose = !1, Ze.autoReleaseSound = !0;
    var Qe = /* */ function() {
        function Qe() {
            (0, _classCallCheck2.default)(this, Qe);
        }
        (0, _createClass2.default)(Qe, [ {
            key: "create",
            value: function create() {
                return this.json ? i.SceneUtils.createByData(null, this.json) : null;
            }
        } ]);
        return Qe;
    }();
    var $e = /* */ function() {
        function $e() {
            (0, _classCallCheck2.default)(this, $e);
            this._fontCharDic = {}, this._fontWidthMap = {}, this._maxWidth = 0, this._spaceWidth = 10, 
            this.fontSize = 12, this.autoScaleSize = !1, this.letterSpacing = 0;
        }
        (0, _createClass2.default)($e, [ {
            key: "loadFont",
            value: function loadFont(t, e) {
                this._path = t, this._complete = e, t && -1 !== t.indexOf(".fnt") ? i.loader.load([ {
                    url: t,
                    type: i.Loader.XML
                }, {
                    url: t.replace(".fnt", ".png"),
                    type: i.Loader.IMAGE
                } ], b.create(this, this._onLoaded)) : console.error('Bitmap font configuration information must be a ".fnt" file');
            }
        }, {
            key: "_onLoaded",
            value: function _onLoaded() {
                this.parseFont(i.Loader.getRes(this._path), i.Loader.getRes(this._path.replace(".fnt", ".png"))), 
                this._complete && this._complete.run();
            }
        }, {
            key: "parseFont",
            value: function parseFont(t, e) {
                if (null != t && null != e) {
                    this._texture = e;
                    var i = t.getElementsByTagName("info");
                    if (!i[0].getAttributeNode) return this.parseFont2(t, e);
                    this.fontSize = parseInt(i[0].getAttributeNode("size").nodeValue);
                    var s = i[0].getAttributeNode("padding").nodeValue.split(",");
                    this._padding = [ parseInt(s[0]), parseInt(s[1]), parseInt(s[2]), parseInt(s[3]) ];
                    var r = t.getElementsByTagName("char"), a = 0;
                    for (a = 0; a < r.length; a++) {
                        var n = r[a], h = parseInt(n.getAttributeNode("id").nodeValue), o = parseInt(n.getAttributeNode("xoffset").nodeValue) / 1, l = parseInt(n.getAttributeNode("yoffset").nodeValue) / 1, _ = parseInt(n.getAttributeNode("xadvance").nodeValue) / 1, u = new m();
                        u.x = parseInt(n.getAttributeNode("x").nodeValue), u.y = parseInt(n.getAttributeNode("y").nodeValue), 
                        u.width = parseInt(n.getAttributeNode("width").nodeValue), u.height = parseInt(n.getAttributeNode("height").nodeValue);
                        var c = $t.create(e, u.x, u.y, u.width, u.height, o, l);
                        this._maxWidth = Math.max(this._maxWidth, _ + this.letterSpacing), this._fontCharDic[h] = c, 
                        this._fontWidthMap[h] = _;
                    }
                }
            }
        }, {
            key: "parseFont2",
            value: function parseFont2(t, e) {
                if (null != t && null != e) {
                    this._texture = e;
                    var i = t.getElementsByTagName("info");
                    this.fontSize = parseInt(i[0].attributes.size.nodeValue);
                    var s = i[0].attributes.padding.nodeValue.split(",");
                    this._padding = [ parseInt(s[0]), parseInt(s[1]), parseInt(s[2]), parseInt(s[3]) ];
                    var r = t.getElementsByTagName("char"), a = 0;
                    for (a = 0; a < r.length; a++) {
                        var n = r[a].attributes, h = parseInt(n.id.nodeValue), o = parseInt(n.xoffset.nodeValue) / 1, l = parseInt(n.yoffset.nodeValue) / 1, _ = parseInt(n.xadvance.nodeValue) / 1, u = new m();
                        u.x = parseInt(n.x.nodeValue), u.y = parseInt(n.y.nodeValue), u.width = parseInt(n.width.nodeValue), 
                        u.height = parseInt(n.height.nodeValue);
                        var c = $t.create(e, u.x, u.y, u.width, u.height, o, l);
                        this._maxWidth = Math.max(this._maxWidth, _ + this.letterSpacing), this._fontCharDic[h] = c, 
                        this._fontWidthMap[h] = _;
                    }
                }
            }
        }, {
            key: "getCharTexture",
            value: function getCharTexture(t) {
                return this._fontCharDic[t.charCodeAt(0)];
            }
        }, {
            key: "destroy",
            value: function destroy() {
                if (this._texture) {
                    for (var t in this._fontCharDic) {
                        var e = this._fontCharDic[t];
                        e && e.destroy();
                    }
                    this._texture.destroy(), this._fontCharDic = null, this._fontWidthMap = null, this._texture = null, 
                    this._complete = null, this._padding = null;
                }
            }
        }, {
            key: "setSpaceWidth",
            value: function setSpaceWidth(t) {
                this._spaceWidth = t;
            }
        }, {
            key: "getCharWidth",
            value: function getCharWidth(t) {
                var e = t.charCodeAt(0);
                return this._fontWidthMap[e] ? this._fontWidthMap[e] + this.letterSpacing : " " === t ? this._spaceWidth + this.letterSpacing : 0;
            }
        }, {
            key: "getTextWidth",
            value: function getTextWidth(t) {
                for (var e = 0, i = 0, s = t.length; i < s; i++) {
                    e += this.getCharWidth(t.charAt(i));
                }
                return e;
            }
        }, {
            key: "getMaxWidth",
            value: function getMaxWidth() {
                return this._maxWidth;
            }
        }, {
            key: "getMaxHeight",
            value: function getMaxHeight() {
                return this.fontSize;
            }
        }, {
            key: "_drawText",
            value: function _drawText(t, e, i, s, r, a) {
                var n, h = this.getTextWidth(t), o = 0;
                "center" === r && (o = (a - h) / 2), "right" === r && (o = a - h);
                for (var l = 0, _ = 0, u = t.length; _ < u; _++) {
                    (n = this.getCharTexture(t.charAt(_))) && (e.graphics.drawImage(n, i + l + o, s), 
                    l += this.getCharWidth(t.charAt(_)));
                }
            }
        } ]);
        return $e;
    }();
    we.regClass("laya.display.BitmapFont", $e), we.regClass("Laya.BitmapFont", $e);
    var Je = /* */ function(_S7) {
        (0, _inherits2.default)(Je, _S7);
        var _super38 = _createSuper(Je);
        function Je() {
            var _this33;
            (0, _classCallCheck2.default)(this, Je);
            _this33 = _super38.apply(this, arguments), _this33._http = new XMLHttpRequest();
            return _this33;
        }
        (0, _createClass2.default)(Je, [ {
            key: "send",
            value: function send(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "get";
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "text";
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                this._responseType = s, this._data = null, (se.onVVMiniGame || se.onQGMiniGame || se.onQQMiniGame || se.onAlipayMiniGame || se.onBLMiniGame || se.onHWMiniGame || se.onTTMiniGame || se.onTBMiniGame) && (t = Je._urlEncode(t)), 
                this._url = t;
                var a = this, n = this._http;
                n.open(i, t, !0);
                var h = !1;
                if (r) for (var o = 0; o < r.length; o++) {
                    n.setRequestHeader(r[o++], r[o]);
                } else window.conch || (e && "string" != typeof e ? (n.setRequestHeader("Content-Type", "application/json"), 
                e instanceof ArrayBuffer || "string" == typeof e || (h = !0)) : n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"));
                var l = "arraybuffer" !== s ? "text" : "arraybuffer";
                n.responseType = l, n.dataType && (n.dataType = l), n.onerror = function(t) {
                    a._onError(t);
                }, n.onabort = function(t) {
                    a._onAbort(t);
                }, n.onprogress = function(t) {
                    a._onProgress(t);
                }, n.onload = function(t) {
                    a._onLoad(t);
                }, se.onBLMiniGame && se.onAndroid && !e && (e = {}), n.send(h ? JSON.stringify(e) : e);
            }
        }, {
            key: "_onProgress",
            value: function _onProgress(t) {
                t && t.lengthComputable && this.event(Qt.PROGRESS, t.loaded / t.total);
            }
        }, {
            key: "_onAbort",
            value: function _onAbort(t) {
                this.error("Request was aborted by user");
            }
        }, {
            key: "_onError",
            value: function _onError(t) {
                this.error("Request failed Status:" + this._http.status + " text:" + this._http.statusText);
            }
        }, {
            key: "_onLoad",
            value: function _onLoad(t) {
                var e = this._http, i = void 0 !== e.status ? e.status : 200;
                200 === i || 204 === i || 0 === i ? this.complete() : this.error("[" + e.status + "]" + e.statusText + ":" + e.responseURL);
            }
        }, {
            key: "error",
            value: function error(t) {
                this.clear(), console.warn(this.url, t), this.event(Qt.ERROR, t);
            }
        }, {
            key: "complete",
            value: function complete() {
                this.clear();
                var t = !0;
                try {
                    "json" === this._responseType ? this._data = JSON.parse(this._http.responseText) : "xml" === this._responseType ? this._data = $.parseXMLFromString(this._http.responseText) : this._data = this._http.response || this._http.responseText;
                } catch (e) {
                    t = !1, this.error(e.message);
                }
                t && this.event(Qt.COMPLETE, this._data instanceof Array ? [ this._data ] : this._data);
            }
        }, {
            key: "clear",
            value: function clear() {
                var t = this._http;
                t.onerror = t.onabort = t.onprogress = t.onload = null;
            }
        }, {
            key: "url",
            get: function get() {
                return this._url;
            }
        }, {
            key: "data",
            get: function get() {
                return this._data;
            }
        }, {
            key: "http",
            get: function get() {
                return this._http;
            }
        } ]);
        return Je;
    }(S);
    Je._urlEncode = encodeURI;
    var ti = /* */ function(_S8) {
        (0, _inherits2.default)(ti, _S8);
        var _super39 = _createSuper(ti);
        function ti() {
            var _this34;
            (0, _classCallCheck2.default)(this, ti);
            _this34 = _super39.apply(this, arguments), _this34._customParse = !1;
            return _this34;
        }
        (0, _createClass2.default)(ti, [ {
            key: "load",
            value: function load(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
                var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
                var n = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : i.WorkerLoader.enable;
                if (t) {
                    var h;
                    if (ti.setGroup(t, "666"), this._url = t, 0 !== t.indexOf("data:image") || e ? t = M.formatURL(t) : e = ti.IMAGE, 
                    this._type = e || (e = ti.getTypeFromUrl(this._url)), this._cache = s, this._useWorkerLoader = n, 
                    this._data = null, n && i.WorkerLoader.enableWorkerLoader(), e == ti.IMAGE ? (h = ti.textureMap[t]) && h.bitmap && h.bitmap.destroyed && (h = null) : h = ti.loadedMap[t], 
                    !a && h) return this._data = h, this.event(Qt.PROGRESS, 1), void this.event(Qt.COMPLETE, this._data);
                    if (r && ti.setGroup(t, r), null != ti.parserMap[e]) return this._customParse = !0, 
                    void (ti.parserMap[e] instanceof b ? ti.parserMap[e].runWith(this) : ti.parserMap[e].call(null, this));
                    this._loadResourceFilter(e, t);
                } else this.onLoaded(null);
            }
        }, {
            key: "_loadResourceFilter",
            value: function _loadResourceFilter(t, e) {
                this._loadResource(t, e);
            }
        }, {
            key: "_loadResource",
            value: function _loadResource(t, e) {
                switch (t) {
                  case ti.IMAGE:
                  case "htmlimage":
                  case "nativeimage":
                    this._loadImage(e);
                    break;

                  case ti.SOUND:
                    this._loadSound(e);
                    break;

                  case ti.TTF:
                    this._loadTTF(e);
                    break;

                  case ti.ATLAS:
                  case ti.PREFAB:
                  case ti.PLF:
                    this._loadHttpRequestWhat(e, ti.JSON);
                    break;

                  case ti.FONT:
                    this._loadHttpRequestWhat(e, ti.XML);
                    break;

                  case ti.PLFB:
                    this._loadHttpRequestWhat(e, ti.BUFFER);
                    break;

                  default:
                    this._loadHttpRequestWhat(e, t);
                }
            }
        }, {
            key: "_loadHttpRequest",
            value: function _loadHttpRequest(t, e, i, s, r, a, n, h) {
                se.onVVMiniGame || se.onHWMiniGame ? this._http = new Je() : this._http || (this._http = new Je()), 
                a && this._http.on(Qt.PROGRESS, r, a), s && this._http.on(Qt.COMPLETE, i, s), this._http.on(Qt.ERROR, n, h), 
                this._http.send(t, null, "get", e);
            }
        }, {
            key: "_loadHtmlImage",
            value: function _loadHtmlImage(t, e, i, s, r) {
                var a;
                function clear() {
                    var e = a;
                    e.onload = null, e.onerror = null, delete ti._imgCache[t];
                }
                (a = new se.window.Image()).crossOrigin = "", a.onload = function() {
                    clear(), i.call(e, a);
                }, a.onerror = function() {
                    clear(), r.call(s);
                }, a.src = t, ti._imgCache[t] = a;
            }
        }, {
            key: "_loadHttpRequestWhat",
            value: function _loadHttpRequestWhat(t, e) {
                ti.preLoadedMap[t] ? this.onLoaded(ti.preLoadedMap[t]) : this._loadHttpRequest(t, e, this, this.onLoaded, this, this.onProgress, this, this.onError);
            }
        }, {
            key: "_loadTTF",
            value: function _loadTTF(t) {
                t = M.formatURL(t);
                var e = new i.TTFLoader();
                e.complete = b.create(this, this.onLoaded), e.load(t);
            }
        }, {
            key: "_loadImage",
            value: function _loadImage(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
                var i = this;
                e && (t = M.formatURL(t));
                var s = function s() {
                    i.event(Qt.ERROR, "Load image failed");
                };
                if ("nativeimage" === this._type) this._loadHtmlImage(t, this, this.onLoaded, this, s); else {
                    var r = $.getFileExtension(t);
                    "bin" == r && this._url && (r = $.getFileExtension(this._url)), "ktx" === r || "pvr" === r ? this._loadHttpRequest(t, ti.BUFFER, this, this.onLoaded, this, this.onProgress, this, this.onError) : this._loadHtmlImage(t, this, this.onLoaded, this, s);
                }
            }
        }, {
            key: "_loadSound",
            value: function _loadSound(t) {
                var e = new Ze._soundClass(), i = this;
                function clear() {
                    e.offAll();
                }
                e.on(Qt.COMPLETE, this, function() {
                    clear(), i.onLoaded(e);
                }), e.on(Qt.ERROR, this, function() {
                    clear(), e.dispose(), i.event(Qt.ERROR, "Load sound failed");
                }), e.load(t);
            }
        }, {
            key: "onProgress",
            value: function onProgress(t) {
                this._type === ti.ATLAS ? this.event(Qt.PROGRESS, .3 * t) : this._originType == ti.HIERARCHY ? this.event(Qt.PROGRESS, t / 3) : this.event(Qt.PROGRESS, t);
            }
        }, {
            key: "onError",
            value: function onError(t) {
                this.event(Qt.ERROR, t);
            }
        }, {
            key: "onLoaded",
            value: function onLoaded() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                if ((c = this._type) == ti.PLFB) this.parsePLFBData(e), this.complete(e); else if (c == ti.PLF) this.parsePLFData(e), 
                this.complete(e); else if (c === ti.IMAGE) {
                    var _s7;
                    if (e instanceof ArrayBuffer) {
                        var _i8;
                        switch (u = $.getFileExtension(this._url)) {
                          case "ktx":
                            _i8 = t.TextureFormat.ETC1RGB;
                            break;

                          case "pvr":
                            _i8 = t.TextureFormat.PVRTCRGBA_4BPPV;
                            break;

                          default:
                            return void console.error("unknown format", u);
                        }
                        (_s7 = new O(0, 0, _i8, !1, !1)).wrapModeU = t.WarpMode.Clamp, _s7.wrapModeV = t.WarpMode.Clamp, 
                        _s7.setCompressData(e), _s7._setCreateURL(this.url);
                    } else e instanceof O ? _s7 = e : ((_s7 = new O(e.width, e.height, 1, !1, !1)).wrapModeU = t.WarpMode.Clamp, 
                    _s7.wrapModeV = t.WarpMode.Clamp, _s7.loadImageSource(e, !0), _s7._setCreateURL(e.src));
                    var i = new $t(_s7);
                    i.url = this._url, this.complete(i);
                } else if (c === ti.SOUND || "nativeimage" === c) this.complete(e); else if ("htmlimage" === c) {
                    var _i9 = new O(e.width, e.height, 1, !1, !1);
                    _i9.wrapModeU = t.WarpMode.Clamp, _i9.wrapModeV = t.WarpMode.Clamp, _i9.loadImageSource(e, !0), 
                    _i9._setCreateURL(e.src), this.complete(_i9);
                } else if (c === ti.ATLAS) {
                    if (e.frames) {
                        var s = [];
                        if (!this._data) {
                            if (this._data = e, e.meta && e.meta.image) {
                                s = e.meta.image.split(",");
                                var r = this._url.indexOf("/") >= 0 ? "/" : "\\", a = this._url.lastIndexOf(r), n = a >= 0 ? this._url.substr(0, a + 1) : "", h = null;
                                se.onAndroid && e.meta.compressTextureAndroid && (h = ".ktx"), se.onIOS && e.meta.compressTextureIOS && (h = e.meta.astc ? ".ktx" : ".pvr");
                                for (var o = 0, l = s.length; o < l; o++) {
                                    s[o] = h ? n + s[o].replace(".png", h) : n + s[o];
                                }
                            } else s = [ this._url.replace(".json", ".png") ];
                            s.reverse(), e.toLoads = s, e.pics = [];
                        }
                        this.event(Qt.PROGRESS, .3 + 1 / s.length * .6);
                        var _ = M.formatURL(s.pop()), u = $.getFileExtension(_), c = ti.IMAGE;
                        return "pvr" != u && "ktx" != u || (c = ti.BUFFER), this._loadResourceFilter(c, _);
                    }
                    if (!(e instanceof O)) if (e instanceof ArrayBuffer) {
                        var _i10 = this._http ? this._http.url : this._url;
                        var _s8;
                        switch (u = $.getFileExtension(_i10)) {
                          case "ktx":
                            _s8 = t.TextureFormat.ETC1RGB;
                            break;

                          case "pvr":
                            _s8 = t.TextureFormat.PVRTCRGBA_4BPPV;
                            break;

                          default:
                            return void console.error("unknown format", u);
                        }
                        var _r2 = new O(0, 0, _s8, !1, !1);
                        _r2.wrapModeU = t.WarpMode.Clamp, _r2.wrapModeV = t.WarpMode.Clamp, _r2.setCompressData(e), 
                        _r2._setCreateURL(_i10), e = _r2;
                    } else {
                        var _i11 = new O(e.width, e.height, 1, !1, !1);
                        _i11.wrapModeU = t.WarpMode.Clamp, _i11.wrapModeV = t.WarpMode.Clamp, _i11.loadImageSource(e, !0), 
                        _i11._setCreateURL(e.src), e = _i11;
                    }
                    if (this._data.pics.push(e), this._data.toLoads.length > 0) {
                        this.event(Qt.PROGRESS, .3 + 1 / this._data.toLoads.length * .6);
                        _ = M.formatURL(this._data.toLoads.pop()), u = $.getFileExtension(_), c = ti.IMAGE;
                        return "pvr" != u && "ktx" != u || (c = ti.BUFFER), this._loadResourceFilter(c, _);
                    }
                    var d = this._data.frames, p = this._url.split("?")[0], f = this._data.meta && this._data.meta.prefix ? this._data.meta.prefix : p.substring(0, p.lastIndexOf(".")) + "/", m = this._data.pics, g = M.formatURL(this._url), T = ti.atlasMap[g] || (ti.atlasMap[g] = []);
                    T.dir = f;
                    var v = 1;
                    if (this._data.meta && this._data.meta.scale && 1 != this._data.meta.scale) for (var x in v = parseFloat(this._data.meta.scale), 
                    d) {
                        var y, E = d[x], A = m[E.frame.idx ? E.frame.idx : 0];
                        _ = M.formatURL(f + x);
                        A.scaleRate = v, y = $t._create(A, E.frame.x, E.frame.y, E.frame.w, E.frame.h, E.spriteSourceSize.x, E.spriteSourceSize.y, E.sourceSize.w, E.sourceSize.h, ti.getRes(_)), 
                        ti.cacheTexture(_, y), y.url = _, T.push(_);
                    } else for (x in d) {
                        A = m[(E = d[x]).frame.idx ? E.frame.idx : 0], _ = M.formatURL(f + x), y = $t._create(A, E.frame.x, E.frame.y, E.frame.w, E.frame.h, E.spriteSourceSize.x, E.spriteSourceSize.y, E.sourceSize.w, E.sourceSize.h, ti.getRes(_)), 
                        ti.cacheTexture(_, y), y.url = _, T.push(_);
                    }
                    delete this._data.pics, this.complete(this._data);
                } else if (c === ti.FONT) {
                    if (!e._source) return this._data = e, this.event(Qt.PROGRESS, .5), this._loadResourceFilter(ti.IMAGE, this._url.replace(".fnt", ".png"));
                    var C = new $e();
                    C.parseFont(this._data, new $t(e));
                    var R = this._url.split(".fnt")[0].split("/"), b = R[R.length - 1];
                    Fe.registerBitmapFont(b, C), this._data = C, this.complete(this._data);
                } else if (c === ti.PREFAB) {
                    var S = new Qe();
                    S.json = e, this.complete(S);
                } else this.complete(e);
            }
        }, {
            key: "parsePLFData",
            value: function parsePLFData(t) {
                var e, i, s;
                for (e in t) {
                    switch (s = t[e], e) {
                      case "json":
                      case "text":
                        for (i in s) {
                            ti.preLoadedMap[M.formatURL(i)] = s[i];
                        }
                        break;

                      default:
                        for (i in s) {
                            ti.preLoadedMap[M.formatURL(i)] = s[i];
                        }
                    }
                }
            }
        }, {
            key: "parsePLFBData",
            value: function parsePLFBData(t) {
                var e, i, s;
                for (s = (e = new D(t)).getInt32(), i = 0; i < s; i++) {
                    this.parseOnePLFBFile(e);
                }
            }
        }, {
            key: "parseOnePLFBFile",
            value: function parseOnePLFBFile(t) {
                var e, i, s;
                i = t.getUTFString(), e = t.getInt32(), s = t.readArrayBuffer(e), ti.preLoadedMap[M.formatURL(i)] = s;
            }
        }, {
            key: "complete",
            value: function complete(t) {
                this._data = t, this._customParse ? this.event(Qt.LOADED, t instanceof Array ? [ t ] : t) : (ti._loaders.push(this), 
                ti._isWorking || ti.checkNext());
            }
        }, {
            key: "endLoad",
            value: function endLoad() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                t && (this._data = t), this._cache && ti.cacheRes(this._url, this._data), this.event(Qt.PROGRESS, 1), 
                this.event(Qt.COMPLETE, this.data instanceof Array ? [ this.data ] : this.data);
            }
        }, {
            key: "url",
            get: function get() {
                return this._url;
            }
        }, {
            key: "type",
            get: function get() {
                return this._type;
            }
        }, {
            key: "cache",
            get: function get() {
                return this._cache;
            }
        }, {
            key: "data",
            get: function get() {
                return this._data;
            }
        } ], [ {
            key: "getTypeFromUrl",
            value: function getTypeFromUrl(t) {
                var e = $.getFileExtension(t);
                return e ? ti.typeMap[e] : (console.warn("Not recognize the resources suffix", t), 
                "text");
            }
        }, {
            key: "checkNext",
            value: function checkNext() {
                ti._isWorking = !0;
                for (var t = se.now(); ti._startIndex < ti._loaders.length; ) {
                    if (ti._loaders[ti._startIndex].endLoad(), ti._startIndex++, se.now() - t > ti.maxTimeOut) return console.warn("loader callback cost a long time:" + (se.now() - t) + " url=" + ti._loaders[ti._startIndex - 1].url), 
                    void i.systemTimer.frameOnce(1, null, ti.checkNext);
                }
                ti._loaders.length = 0, ti._startIndex = 0, ti._isWorking = !1;
            }
        }, {
            key: "clearRes",
            value: function clearRes(t) {
                t = M.formatURL(t);
                var e = ti.getAtlas(t);
                if (e) {
                    for (var i = 0, s = e.length; i < s; i++) {
                        var r = e[i], a = ti.getRes(r);
                        delete ti.textureMap[r], a && a.destroy();
                    }
                    e.length = 0, delete ti.atlasMap[t];
                }
                var n = ti.textureMap[t];
                n && (n.destroy(), delete ti.textureMap[t]), ti.loadedMap[t] && delete ti.loadedMap[t];
            }
        }, {
            key: "clearTextureRes",
            value: function clearTextureRes(t) {
                t = M.formatURL(t);
                var e = ti.getAtlas(t);
                if (e && e.length > 0) e.forEach(function(t) {
                    var e = ti.getRes(t);
                    e instanceof $t && e.disposeBitmap();
                }); else {
                    var i = ti.getRes(t);
                    i instanceof $t && i.disposeBitmap();
                }
            }
        }, {
            key: "getRes",
            value: function getRes(t) {
                var e = ti.textureMap[M.formatURL(t)];
                return e || ti.loadedMap[M.formatURL(t)];
            }
        }, {
            key: "getAtlas",
            value: function getAtlas(t) {
                return ti.atlasMap[M.formatURL(t)];
            }
        }, {
            key: "cacheRes",
            value: function cacheRes(t, e) {
                t = M.formatURL(t), null != ti.loadedMap[t] ? console.warn("Resources already exist,is repeated loading:", t) : e instanceof $t ? (ti.loadedMap[t] = e.bitmap, 
                ti.textureMap[t] = e) : ti.loadedMap[t] = e;
            }
        }, {
            key: "cacheResForce",
            value: function cacheResForce(t, e) {
                ti.loadedMap[t] = e;
            }
        }, {
            key: "cacheTexture",
            value: function cacheTexture(t, e) {
                t = M.formatURL(t), null != ti.textureMap[t] ? console.warn("Resources already exist,is repeated loading:", t) : ti.textureMap[t] = e;
            }
        }, {
            key: "setGroup",
            value: function setGroup(t, e) {
                ti.groupMap[e] || (ti.groupMap[e] = []), ti.groupMap[e].push(t);
            }
        }, {
            key: "clearResByGroup",
            value: function clearResByGroup(t) {
                if (ti.groupMap[t]) {
                    var e, i = ti.groupMap[t], s = i.length;
                    for (e = 0; e < s; e++) {
                        ti.clearRes(i[e]);
                    }
                    i.length = 0;
                }
            }
        } ]);
        return ti;
    }(S);
    ti.TEXT = "text", ti.JSON = "json", ti.PREFAB = "prefab", ti.XML = "xml", ti.BUFFER = "arraybuffer", 
    ti.IMAGE = "image", ti.SOUND = "sound", ti.ATLAS = "atlas", ti.FONT = "font", ti.TTF = "ttf", 
    ti.PLF = "plf", ti.PLFB = "plfb", ti.HIERARCHY = "HIERARCHY", ti.MESH = "MESH", 
    ti.MATERIAL = "MATERIAL", ti.TEXTURE2D = "TEXTURE2D", ti.TEXTURECUBE = "TEXTURECUBE", 
    ti.ANIMATIONCLIP = "ANIMATIONCLIP", ti.AVATAR = "AVATAR", ti.TERRAINHEIGHTDATA = "TERRAINHEIGHTDATA", 
    ti.TERRAINRES = "TERRAIN", ti.typeMap = {
        ttf: "ttf",
        png: "image",
        jpg: "image",
        jpeg: "image",
        ktx: "image",
        pvr: "image",
        txt: "text",
        json: "json",
        prefab: "prefab",
        xml: "xml",
        als: "atlas",
        atlas: "atlas",
        mp3: "sound",
        ogg: "sound",
        wav: "sound",
        part: "json",
        fnt: "font",
        plf: "plf",
        plfb: "plfb",
        scene: "json",
        ani: "json",
        sk: "arraybuffer",
        wasm: "arraybuffer"
    }, ti.parserMap = {}, ti.maxTimeOut = 100, ti.groupMap = {}, ti.loadedMap = {}, 
    ti.atlasMap = {}, ti.textureMap = {}, ti.preLoadedMap = {}, ti._imgCache = {}, ti._loaders = [], 
    ti._isWorking = !1, ti._startIndex = 0;
    var ei = /* */ function() {
        function ei() {
            (0, _classCallCheck2.default)(this, ei);
        }
        (0, _createClass2.default)(ei, null, [ {
            key: "enable",
            value: function enable(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                i.loader.load(t, b.create(null, ei._onInfoLoaded, [ e ]), null, ti.JSON);
            }
        }, {
            key: "_onInfoLoaded",
            value: function _onInfoLoaded(t, e) {
                var i, s, r, a, n;
                for (i in e) {
                    for (s = (r = e[i])[0], n = (r = r[1]).length, a = 0; a < n; a++) {
                        ei._fileLoadDic[s + r[a]] = i;
                    }
                }
                t && t.run();
            }
        }, {
            key: "getFileLoadPath",
            value: function getFileLoadPath(t) {
                return ei._fileLoadDic[t] || t;
            }
        } ]);
        return ei;
    }();
    ei._fileLoadDic = {};
    var ii = /* */ function(_S9) {
        (0, _inherits2.default)(ii, _S9);
        var _super40 = _createSuper(ii);
        function ii() {
            var _this35;
            (0, _classCallCheck2.default)(this, ii);
            _this35 = _super40.call(this), _this35.retryNum = 1, _this35.retryDelay = 0, _this35.maxLoader = 5, 
            _this35._loaders = [], _this35._loaderCount = 0, _this35._resInfos = [], _this35._infoPool = [], 
            _this35._maxPriority = 5, _this35._failRes = {}, _this35._statInfo = {
                count: 1,
                loaded: 1
            };
            for (var t = 0; t < _this35._maxPriority; t++) {
                _this35._resInfos[t] = [];
            }
            return _this35;
        }
        (0, _createClass2.default)(ii, [ {
            key: "getProgress",
            value: function getProgress() {
                return this._statInfo.loaded / this._statInfo.count;
            }
        }, {
            key: "resetProgress",
            value: function resetProgress() {
                this._statInfo.count = this._statInfo.loaded = 1;
            }
        }, {
            key: "create",
            value: function create(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
                var n = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 1;
                var h = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : !0;
                this._create(t, !0, e, i, s, r, a, n, h);
            }
        }, {
            key: "_create",
            value: function _create(t, e) {
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
                var n = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
                var h = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1;
                var o = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : !0;
                if (t instanceof Array) {
                    var l = !0, _ = t, u = _.length, c = 0;
                    if (s) var d = b.create(s.caller, s ? s.method : null, s.args, !1);
                    for (var p = 0; p < u; p++) {
                        var f = _[p];
                        "string" == typeof f && (f = _[p] = {
                            url: f
                        }), f.progress = 0;
                    }
                    for (p = 0; p < u; p++) {
                        f = _[p];
                        var m = s ? b.create(null, function(t, e) {
                            t.progress = e;
                            for (var i = 0, s = 0; s < u; s++) {
                                i += _[s].progress;
                            }
                            var r = i / u;
                            d.runWith(r);
                        }, [ f ], !1) : null, g = s || i ? b.create(null, function(t) {
                            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                            c++, t.progress = 1, e || (l = !1), c === u && i && i.runWith(l);
                        }, [ f ]) : null;
                        this._createOne(f.url, e, g, m, f.type || r, f.constructParams || a, f.propertyParams || n, f.priority || h, o);
                    }
                } else this._createOne(t, e, i, s, r, a, n, h, o);
            }
        }, {
            key: "_createOne",
            value: function _createOne(t, e) {
                var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                var n = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
                var h = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
                var o = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1;
                var l = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : !0;
                var _ = this.getRes(t);
                if (_) !e && _ instanceof I && _._addReference(), r && r.runWith(1), s && s.runWith(_); else {
                    var u = ii.createMap[$.getFilecompatibleExtension(t)] ? $.getFilecompatibleExtension(t) : $.getFileExtension(t);
                    if (a || (a = ii.createMap[u] ? ii.createMap[u][0] : null), !a) return void this.load(t, s, r, a, o, l);
                    if (!ti.parserMap[a]) return void this.load(t, s, r, a, o, l);
                    this._createLoad(t, b.create(null, function(r) {
                        r && (!e && r instanceof I && r._addReference(), r._setCreateURL(t)), s && s.runWith(r), 
                        i.loader.event(t);
                    }), r, a, n, h, o, l, !0);
                }
            }
        }, {
            key: "load",
            value: function load(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
                var n = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !0;
                var h = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
                var o = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : !1;
                var l = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : i.WorkerLoader.enable;
                if (t instanceof Array) return this._loadAssets(t, e, s, r, a, n, h);
                var _;
                if (r || (r = 0 === t.indexOf("data:image") ? ti.IMAGE : ti.getTypeFromUrl(t)), 
                r === ti.IMAGE ? (_ = ti.textureMap[M.formatURL(t)]) && _.bitmap && _.bitmap.destroyed && (_ = null) : _ = ti.loadedMap[M.formatURL(t)], 
                o || null == _) {
                    var u;
                    u = t, (t = ei.getFileLoadPath(t)) != u && "nativeimage" !== r ? r = ti.ATLAS : u = null;
                    var c = ii._resMap[t];
                    c ? (e && (u ? e && c._createListener(Qt.COMPLETE, this, this._resInfoLoaded, [ u, e ], !1, !1) : e && c._createListener(Qt.COMPLETE, e.caller, e.method, e.args, !1, !1)), 
                    s && c._createListener(Qt.PROGRESS, s.caller, s.method, s.args, !1, !1)) : ((c = this._infoPool.length ? this._infoPool.pop() : new si()).url = t, 
                    c.type = r, c.cache = n, c.group = h, c.ignoreCache = o, c.useWorkerLoader = l, 
                    c.originalUrl = u, e && c.on(Qt.COMPLETE, e.caller, e.method, e.args), s && c.on(Qt.PROGRESS, s.caller, s.method, s.args), 
                    ii._resMap[t] = c, a = a < this._maxPriority ? a : this._maxPriority - 1, this._resInfos[a].push(c), 
                    this._statInfo.count++, this.event(Qt.PROGRESS, this.getProgress()), this._next());
                } else i.systemTimer.callLater(this, function() {
                    s && s.runWith(1), e && e.runWith(_ instanceof Array ? [ _ ] : _), this._loaderCount || this.event(Qt.COMPLETE);
                });
                return this;
            }
        }, {
            key: "_resInfoLoaded",
            value: function _resInfoLoaded(t, e) {
                e.runWith(ti.getRes(t));
            }
        }, {
            key: "_createLoad",
            value: function _createLoad(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                var n = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
                var h = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 1;
                var o = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : !0;
                var l = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : !1;
                if (t instanceof Array) return this._loadAssets(t, e, s, r, h, o);
                var _ = ti.getRes(t);
                if (null != _) i.systemTimer.frameOnce(1, this, function() {
                    s && s.runWith(1), e && e.runWith(_), this._loaderCount || this.event(Qt.COMPLETE);
                }); else {
                    var u = ii._resMap[t];
                    u ? (e && u._createListener(Qt.COMPLETE, e.caller, e.method, e.args, !1, !1), s && u._createListener(Qt.PROGRESS, s.caller, s.method, s.args, !1, !1)) : ((u = this._infoPool.length ? this._infoPool.pop() : new si()).url = t, 
                    u.type = r, u.cache = !1, u.ignoreCache = l, u.originalUrl = null, u.group = null, 
                    u.createCache = o, u.createConstructParams = a, u.createPropertyParams = n, e && u.on(Qt.COMPLETE, e.caller, e.method, e.args), 
                    s && u.on(Qt.PROGRESS, s.caller, s.method, s.args), ii._resMap[t] = u, h = h < this._maxPriority ? h : this._maxPriority - 1, 
                    this._resInfos[h].push(u), this._statInfo.count++, this.event(Qt.PROGRESS, this.getProgress()), 
                    this._next());
                }
                return this;
            }
        }, {
            key: "_next",
            value: function _next() {
                if (!(this._loaderCount >= this.maxLoader)) {
                    for (var t = 0; t < this._maxPriority; t++) {
                        for (var e = this._resInfos[t]; e.length > 0; ) {
                            var i = e.shift();
                            if (i) return this._doLoad(i);
                        }
                    }
                    this._loaderCount || this.event(Qt.COMPLETE);
                }
            }
        }, {
            key: "_doLoad",
            value: function _doLoad(t) {
                this._loaderCount++;
                var e = this._loaders.length ? this._loaders.pop() : new ti();
                e.on(Qt.COMPLETE, null, onLoaded), e.on(Qt.PROGRESS, null, function(e) {
                    t.event(Qt.PROGRESS, e);
                }), e.on(Qt.ERROR, null, function(t) {
                    onLoaded(null);
                });
                var i = this;
                function onLoaded() {
                    var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                    e.offAll(), e._data = null, e._customParse = !1, i._loaders.push(e), i._endLoad(t, s instanceof Array ? [ s ] : s), 
                    i._loaderCount--, i._next();
                }
                e._constructParams = t.createConstructParams, e._propertyParams = t.createPropertyParams, 
                e._createCache = t.createCache, e.load(t.url, t.type, t.cache, t.group, t.ignoreCache, t.useWorkerLoader);
            }
        }, {
            key: "_endLoad",
            value: function _endLoad(t, e) {
                var s = t.url;
                if (null == e) {
                    var r = this._failRes[s] || 0;
                    if (r < this.retryNum) return console.warn("[warn]Retry to load:", s), this._failRes[s] = r + 1, 
                    void i.systemTimer.once(this.retryDelay, this, this._addReTry, [ t ], !1);
                    ti.clearRes(s), console.warn("[error]Failed to load:", s), this.event(Qt.ERROR, s);
                }
                this._failRes[s] && (this._failRes[s] = 0), delete ii._resMap[s], t.originalUrl && (e = ti.getRes(t.originalUrl)), 
                t.event(Qt.COMPLETE, e), t.offAll(), this._infoPool.push(t), this._statInfo.loaded++, 
                this.event(Qt.PROGRESS, this.getProgress());
            }
        }, {
            key: "_addReTry",
            value: function _addReTry(t) {
                this._resInfos[this._maxPriority - 1].push(t), this._next();
            }
        }, {
            key: "clearRes",
            value: function clearRes(t) {
                ti.clearRes(t);
            }
        }, {
            key: "clearTextureRes",
            value: function clearTextureRes(t) {
                ti.clearTextureRes(t);
            }
        }, {
            key: "getRes",
            value: function getRes(t) {
                return ti.getRes(t);
            }
        }, {
            key: "cacheRes",
            value: function cacheRes(t, e) {
                ti.cacheRes(t, e);
            }
        }, {
            key: "setGroup",
            value: function setGroup(t, e) {
                ti.setGroup(t, e);
            }
        }, {
            key: "clearResByGroup",
            value: function clearResByGroup(t) {
                ti.clearResByGroup(t);
            }
        }, {
            key: "clearUnLoaded",
            value: function clearUnLoaded() {
                for (var t = 0; t < this._maxPriority; t++) {
                    for (var e = this._resInfos[t], i = e.length - 1; i > -1; i--) {
                        var s = e[i];
                        s && (s.offAll(), this._infoPool.push(s));
                    }
                    e.length = 0;
                }
                this._loaderCount = 0, ii._resMap = {};
            }
        }, {
            key: "cancelLoadByUrls",
            value: function cancelLoadByUrls(t) {
                if (t) for (var e = 0, i = t.length; e < i; e++) {
                    this.cancelLoadByUrl(t[e]);
                }
            }
        }, {
            key: "cancelLoadByUrl",
            value: function cancelLoadByUrl(t) {
                for (var e = 0; e < this._maxPriority; e++) {
                    for (var i = this._resInfos[e], s = i.length - 1; s > -1; s--) {
                        var r = i[s];
                        r && r.url === t && (i[s] = null, r.offAll(), this._infoPool.push(r));
                    }
                }
                ii._resMap[t] && delete ii._resMap[t];
            }
        }, {
            key: "_loadAssets",
            value: function _loadAssets(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
                var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !0;
                var n = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
                for (var h = t.length, o = 0, l = 0, _ = [], u = !0, c = 0; c < h; c++) {
                    var _h2 = void 0, _o2 = t[c];
                    (_h2 = "string" == typeof _o2 ? {
                        url: _o2,
                        type: s,
                        size: 1,
                        priority: r
                    } : _o2).size || (_h2.size = 1), _h2.progress = 0, l += _h2.size, _.push(_h2);
                    var d = i ? b.create(null, loadProgress, [ _h2 ], !1) : null, p = e || i ? b.create(null, loadComplete, [ _h2 ]) : null;
                    this.load(_h2.url, p, d, _h2.type, _h2.priority || 1, a, _h2.group || n, !1, _h2.useWorkerLoader);
                }
                function loadComplete(t) {
                    var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                    o++, t.progress = 1, i || (u = !1), o === h && e && e.runWith(u);
                }
                function loadProgress(t, e) {
                    if (null != i) {
                        t.progress = e;
                        for (var s = 0, r = 0; r < _.length; r++) {
                            var a = _[r];
                            if (a) {
                                var _t6 = null == a.progress ? 0 : a.progress;
                                s += null == a.size ? 0 : a.size * _t6;
                            }
                        }
                        var n = s / l;
                        i.runWith(n);
                    }
                }
                return this;
            }
        }, {
            key: "decodeBitmaps",
            value: function decodeBitmaps(t) {
                var e, s, r = t.length;
                for (s = i.Render._context, e = 0; e < r; e++) {
                    var a, n;
                    if (a = ti.getAtlas(t[e])) this._decodeTexture(a[0], s); else (n = this.getRes(t[e])) && n instanceof $t && this._decodeTexture(n, s);
                }
            }
        }, {
            key: "_decodeTexture",
            value: function _decodeTexture(t, e) {
                var i = t.bitmap;
                if (t && i) {
                    var s = i.source || i.image;
                    if (s && s instanceof HTMLImageElement) {
                        e.drawImage(s, 0, 0, 1, 1);
                        e.getImageData(0, 0, 1, 1);
                    }
                }
            }
        } ], [ {
            key: "cacheRes",
            value: function cacheRes(t, e) {
                ti.cacheRes(t, e);
            }
        } ]);
        return ii;
    }(S);
    ii._resMap = {}, ii.createMap = {
        atlas: [ null, ti.ATLAS ]
    };
    var si = /* */ function(_S10) {
        (0, _inherits2.default)(si, _S10);
        var _super41 = _createSuper(si);
        function si() {
            (0, _classCallCheck2.default)(this, si);
            return _super41.apply(this, arguments);
        }
        return si;
    }(S);
    var ri = /* */ function() {
        function ri() {
            (0, _classCallCheck2.default)(this, ri);
        }
        (0, _createClass2.default)(ri, null, [ {
            key: "__init__",
            value: function __init__() {
                return ri._baseClass || (ri._baseClass = ai, ai.init()), ri.items = ri._baseClass.items, 
                ri.support = ri._baseClass.support, ri.support;
            }
        }, {
            key: "setItem",
            value: function setItem(t, e) {
                ri._baseClass.setItem(t, e);
            }
        }, {
            key: "getItem",
            value: function getItem(t) {
                return ri._baseClass.getItem(t);
            }
        }, {
            key: "setJSON",
            value: function setJSON(t, e) {
                ri._baseClass.setJSON(t, e);
            }
        }, {
            key: "getJSON",
            value: function getJSON(t) {
                return ri._baseClass.getJSON(t);
            }
        }, {
            key: "removeItem",
            value: function removeItem(t) {
                ri._baseClass.removeItem(t);
            }
        }, {
            key: "clear",
            value: function clear() {
                ri._baseClass.clear();
            }
        } ]);
        return ri;
    }();
    ri.support = !1;
    var ai = /* */ function() {
        function ai() {
            (0, _classCallCheck2.default)(this, ai);
        }
        (0, _createClass2.default)(ai, null, [ {
            key: "init",
            value: function init() {
                try {
                    ai.support = !0, ai.items = window.localStorage, ai.setItem("laya", "1"), ai.removeItem("laya");
                } catch (t) {
                    ai.support = !1;
                }
                ai.support || console.log("LocalStorage is not supprot or browser is private mode.");
            }
        }, {
            key: "setItem",
            value: function setItem(t, e) {
                try {
                    ai.support && ai.items.setItem(t, e);
                } catch (t) {
                    console.warn("set localStorage failed", t);
                }
            }
        }, {
            key: "getItem",
            value: function getItem(t) {
                return ai.support ? ai.items.getItem(t) : null;
            }
        }, {
            key: "setJSON",
            value: function setJSON(t, e) {
                try {
                    ai.support && ai.items.setItem(t, JSON.stringify(e));
                } catch (t) {
                    console.warn("set localStorage failed", t);
                }
            }
        }, {
            key: "getJSON",
            value: function getJSON(t) {
                try {
                    return JSON.parse(ai.support ? ai.items.getItem(t) : null);
                } catch (e) {
                    return ai.items.getItem(t);
                }
            }
        }, {
            key: "removeItem",
            value: function removeItem(t) {
                ai.support && ai.items.removeItem(t);
            }
        }, {
            key: "clear",
            value: function clear() {
                ai.support && ai.items.clear();
            }
        } ]);
        return ai;
    }();
    ai.support = !1;
    var ni = /* */ function() {
        function ni() {
            (0, _classCallCheck2.default)(this, ni);
        }
        (0, _createClass2.default)(ni, [ {
            key: "load",
            value: function load(t) {
                this._url = t;
                var e = t.toLowerCase().split(".ttf")[0].split("/");
                this.fontName = e[e.length - 1], i.Render.isConchApp ? this._loadConch() : window.FontFace ? this._loadWithFontFace() : this._loadWithCSS();
            }
        }, {
            key: "_loadConch",
            value: function _loadConch() {
                this._http = new Je(), this._http.on(Qt.ERROR, this, this._onErr), this._http.on(Qt.COMPLETE, this, this._onHttpLoaded), 
                this._http.send(this._url, null, "get", ti.BUFFER);
            }
        }, {
            key: "_onHttpLoaded",
            value: function _onHttpLoaded() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                window.conchTextCanvas.setFontFaceFromBuffer(this.fontName, t), this._clearHttp(), 
                this._complete();
            }
        }, {
            key: "_clearHttp",
            value: function _clearHttp() {
                this._http && (this._http.off(Qt.ERROR, this, this._onErr), this._http.off(Qt.COMPLETE, this, this._onHttpLoaded), 
                this._http = null);
            }
        }, {
            key: "_onErr",
            value: function _onErr() {
                this._clearHttp(), this.err && (this.err.runWith("fail:" + this._url), this.err = null);
            }
        }, {
            key: "_complete",
            value: function _complete() {
                i.systemTimer.clear(this, this._complete), i.systemTimer.clear(this, this._checkComplete), 
                this._div && this._div.parentNode && (this._div.parentNode.removeChild(this._div), 
                this._div = null), this.complete && (this.complete.runWith(this), this.complete = null);
            }
        }, {
            key: "_checkComplete",
            value: function _checkComplete() {
                i.Browser.measureText(ni._testString, this._fontTxt).width != this._txtWidth && this._complete();
            }
        }, {
            key: "_loadWithFontFace",
            value: function _loadWithFontFace() {
                var t = new window.FontFace(this.fontName, "url('" + this._url + "')");
                document.fonts.add(t);
                var e = this;
                t.loaded.then(function() {
                    e._complete();
                }), t.load();
            }
        }, {
            key: "_createDiv",
            value: function _createDiv() {
                this._div = se.createElement("div"), this._div.innerHTML = "laya";
                var t = this._div.style;
                t.fontFamily = this.fontName, t.position = "absolute", t.left = "-100px", t.top = "-100px", 
                document.body.appendChild(this._div);
            }
        }, {
            key: "_loadWithCSS",
            value: function _loadWithCSS() {
                var t = se.createElement("style");
                t.type = "text/css", document.body.appendChild(t), t.textContent = "@font-face { font-family:'" + this.fontName + "'; src:url('" + this._url + "');}", 
                this._fontTxt = "40px " + this.fontName, this._txtWidth = se.measureText(ni._testString, this._fontTxt).width;
                var e = this;
                t.onload = function() {
                    i.systemTimer.once(1e4, e, e._complete);
                }, i.systemTimer.loop(20, this, this._checkComplete), this._createDiv();
            }
        } ]);
        return ni;
    }();
    ni._testString = "LayaTTFFont";
    var hi = /* */ function() {
        function hi() {
            (0, _classCallCheck2.default)(this, hi);
        }
        (0, _createClass2.default)(hi, null, [ {
            key: "linearNone",
            value: function linearNone(t, e, i, s) {
                return i * t / s + e;
            }
        }, {
            key: "linearIn",
            value: function linearIn(t, e, i, s) {
                return i * t / s + e;
            }
        }, {
            key: "linearInOut",
            value: function linearInOut(t, e, i, s) {
                return i * t / s + e;
            }
        }, {
            key: "linearOut",
            value: function linearOut(t, e, i, s) {
                return i * t / s + e;
            }
        }, {
            key: "bounceIn",
            value: function bounceIn(t, e, i, s) {
                return i - hi.bounceOut(s - t, 0, i, s) + e;
            }
        }, {
            key: "bounceInOut",
            value: function bounceInOut(t, e, i, s) {
                return t < .5 * s ? .5 * hi.bounceIn(2 * t, 0, i, s) + e : .5 * hi.bounceOut(2 * t - s, 0, i, s) + .5 * i + e;
            }
        }, {
            key: "bounceOut",
            value: function bounceOut(t, e, i, s) {
                return (t /= s) < 1 / 2.75 ? i * (7.5625 * t * t) + e : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + e : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + e : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + e;
            }
        }, {
            key: "backIn",
            value: function backIn(t, e, i, s) {
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1.70158;
                return i * (t /= s) * t * ((r + 1) * t - r) + e;
            }
        }, {
            key: "backInOut",
            value: function backInOut(t, e, i, s) {
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1.70158;
                return (t /= .5 * s) < 1 ? .5 * i * (t * t * ((1 + (r *= 1.525)) * t - r)) + e : i / 2 * ((t -= 2) * t * ((1 + (r *= 1.525)) * t + r) + 2) + e;
            }
        }, {
            key: "backOut",
            value: function backOut(t, e, i, s) {
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1.70158;
                return i * ((t = t / s - 1) * t * ((r + 1) * t + r) + 1) + e;
            }
        }, {
            key: "elasticIn",
            value: function elasticIn(t, e, i, s) {
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
                var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
                var n;
                return 0 == t ? e : 1 == (t /= s) ? e + i : (a || (a = .3 * s), !r || i > 0 && r < i || i < 0 && r < -i ? (r = i, 
                n = a / 4) : n = a / hi.PI2 * Math.asin(i / r), -r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * s - n) * hi.PI2 / a) + e);
            }
        }, {
            key: "elasticInOut",
            value: function elasticInOut(t, e, i, s) {
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
                var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
                var n;
                return 0 == t ? e : 2 == (t /= .5 * s) ? e + i : (a || (a = s * (.3 * 1.5)), !r || i > 0 && r < i || i < 0 && r < -i ? (r = i, 
                n = a / 4) : n = a / hi.PI2 * Math.asin(i / r), t < 1 ? r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * s - n) * hi.PI2 / a) * -.5 + e : r * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * s - n) * hi.PI2 / a) * .5 + i + e);
            }
        }, {
            key: "elasticOut",
            value: function elasticOut(t, e, i, s) {
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
                var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
                var n;
                return 0 == t ? e : 1 == (t /= s) ? e + i : (a || (a = .3 * s), !r || i > 0 && r < i || i < 0 && r < -i ? (r = i, 
                n = a / 4) : n = a / hi.PI2 * Math.asin(i / r), r * Math.pow(2, -10 * t) * Math.sin((t * s - n) * hi.PI2 / a) + i + e);
            }
        }, {
            key: "strongIn",
            value: function strongIn(t, e, i, s) {
                return i * (t /= s) * t * t * t * t + e;
            }
        }, {
            key: "strongInOut",
            value: function strongInOut(t, e, i, s) {
                return (t /= .5 * s) < 1 ? .5 * i * t * t * t * t * t + e : .5 * i * ((t -= 2) * t * t * t * t + 2) + e;
            }
        }, {
            key: "strongOut",
            value: function strongOut(t, e, i, s) {
                return i * ((t = t / s - 1) * t * t * t * t + 1) + e;
            }
        }, {
            key: "sineInOut",
            value: function sineInOut(t, e, i, s) {
                return .5 * -i * (Math.cos(Math.PI * t / s) - 1) + e;
            }
        }, {
            key: "sineIn",
            value: function sineIn(t, e, i, s) {
                return -i * Math.cos(t / s * hi.HALF_PI) + i + e;
            }
        }, {
            key: "sineOut",
            value: function sineOut(t, e, i, s) {
                return i * Math.sin(t / s * hi.HALF_PI) + e;
            }
        }, {
            key: "quintIn",
            value: function quintIn(t, e, i, s) {
                return i * (t /= s) * t * t * t * t + e;
            }
        }, {
            key: "quintInOut",
            value: function quintInOut(t, e, i, s) {
                return (t /= .5 * s) < 1 ? .5 * i * t * t * t * t * t + e : .5 * i * ((t -= 2) * t * t * t * t + 2) + e;
            }
        }, {
            key: "quintOut",
            value: function quintOut(t, e, i, s) {
                return i * ((t = t / s - 1) * t * t * t * t + 1) + e;
            }
        }, {
            key: "quartIn",
            value: function quartIn(t, e, i, s) {
                return i * (t /= s) * t * t * t + e;
            }
        }, {
            key: "quartInOut",
            value: function quartInOut(t, e, i, s) {
                return (t /= .5 * s) < 1 ? .5 * i * t * t * t * t + e : .5 * -i * ((t -= 2) * t * t * t - 2) + e;
            }
        }, {
            key: "quartOut",
            value: function quartOut(t, e, i, s) {
                return -i * ((t = t / s - 1) * t * t * t - 1) + e;
            }
        }, {
            key: "cubicIn",
            value: function cubicIn(t, e, i, s) {
                return i * (t /= s) * t * t + e;
            }
        }, {
            key: "cubicInOut",
            value: function cubicInOut(t, e, i, s) {
                return (t /= .5 * s) < 1 ? .5 * i * t * t * t + e : .5 * i * ((t -= 2) * t * t + 2) + e;
            }
        }, {
            key: "cubicOut",
            value: function cubicOut(t, e, i, s) {
                return i * ((t = t / s - 1) * t * t + 1) + e;
            }
        }, {
            key: "quadIn",
            value: function quadIn(t, e, i, s) {
                return i * (t /= s) * t + e;
            }
        }, {
            key: "quadInOut",
            value: function quadInOut(t, e, i, s) {
                return (t /= .5 * s) < 1 ? .5 * i * t * t + e : .5 * -i * (--t * (t - 2) - 1) + e;
            }
        }, {
            key: "quadOut",
            value: function quadOut(t, e, i, s) {
                return -i * (t /= s) * (t - 2) + e;
            }
        }, {
            key: "expoIn",
            value: function expoIn(t, e, i, s) {
                return 0 == t ? e : i * Math.pow(2, 10 * (t / s - 1)) + e - .001 * i;
            }
        }, {
            key: "expoInOut",
            value: function expoInOut(t, e, i, s) {
                return 0 == t ? e : t == s ? e + i : (t /= .5 * s) < 1 ? .5 * i * Math.pow(2, 10 * (t - 1)) + e : .5 * i * (2 - Math.pow(2, -10 * --t)) + e;
            }
        }, {
            key: "expoOut",
            value: function expoOut(t, e, i, s) {
                return t == s ? e + i : i * (1 - Math.pow(2, -10 * t / s)) + e;
            }
        }, {
            key: "circIn",
            value: function circIn(t, e, i, s) {
                return -i * (Math.sqrt(1 - (t /= s) * t) - 1) + e;
            }
        }, {
            key: "circInOut",
            value: function circInOut(t, e, i, s) {
                return (t /= .5 * s) < 1 ? .5 * -i * (Math.sqrt(1 - t * t) - 1) + e : .5 * i * (Math.sqrt(1 - (t -= 2) * t) + 1) + e;
            }
        }, {
            key: "circOut",
            value: function circOut(t, e, i, s) {
                return i * Math.sqrt(1 - (t = t / s - 1) * t) + e;
            }
        } ]);
        return hi;
    }();
    hi.HALF_PI = .5 * Math.PI, hi.PI2 = 2 * Math.PI;
    var oi = /* */ function() {
        function oi() {
            (0, _classCallCheck2.default)(this, oi);
            this.gid = 0, this.repeat = 1, this._count = 0;
        }
        (0, _createClass2.default)(oi, [ {
            key: "to",
            value: function to(t, e, i) {
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
                var n = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : !1;
                return this._create(t, e, i, s, r, a, n, !0, !1, !0);
            }
        }, {
            key: "from",
            value: function from(t, e, i) {
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
                var n = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : !1;
                return this._create(t, e, i, s, r, a, n, !1, !1, !0);
            }
        }, {
            key: "_create",
            value: function _create(t, e, s, r, a, n, h, o, l, _) {
                if (!t) throw new Error("Tween:target is null");
                this._target = t, this._duration = s, this._ease = r || e.ease || oi.easeNone, this._complete = a || e.complete, 
                this._delay = n, this._props = [], this._usedTimer = 0, this._startTimer = se.now(), 
                this._usedPool = l, this._delayParam = null, this.update = e.update;
                var u = t.$_GID || (t.$_GID = $.getGID());
                return oi.tweenMap[u] ? (h && oi.clearTween(t), oi.tweenMap[u].push(this)) : oi.tweenMap[u] = [ this ], 
                _ ? n <= 0 ? this.firstStart(t, e, o) : (this._delayParam = [ t, e, o ], i.timer.once(n, this, this.firstStart, this._delayParam)) : this._initProps(t, e, o), 
                this;
            }
        }, {
            key: "firstStart",
            value: function firstStart(t, e, i) {
                this._delayParam = null, t.destroyed ? this.clear() : (this._initProps(t, e, i), 
                this._beginLoop());
            }
        }, {
            key: "_initProps",
            value: function _initProps(t, e, i) {
                for (var s in e) {
                    if ("number" == typeof t[s]) {
                        var r = i ? t[s] : e[s], a = i ? e[s] : t[s];
                        this._props.push([ s, r, a - r ]), i || (t[s] = r);
                    }
                }
            }
        }, {
            key: "_beginLoop",
            value: function _beginLoop() {
                i.timer.frameLoop(1, this, this._doEase);
            }
        }, {
            key: "_doEase",
            value: function _doEase() {
                this._updateEase(se.now());
            }
        }, {
            key: "_updateEase",
            value: function _updateEase(t) {
                var e = this._target;
                if (e) {
                    if (e.destroyed) return oi.clearTween(e);
                    var i = this._usedTimer = t - this._startTimer - this._delay;
                    if (!(i < 0)) {
                        if (i >= this._duration) return this.complete();
                        for (var s = i > 0 ? this._ease(i, 0, 1, this._duration) : 0, r = this._props, a = 0, n = r.length; a < n; a++) {
                            var h = r[a];
                            e[h[0]] = h[1] + s * h[2];
                        }
                        this.update && this.update.run();
                    }
                }
            }
        }, {
            key: "complete",
            value: function complete() {
                if (this._target) {
                    i.timer.runTimer(this, this.firstStart);
                    for (var t = this._target, e = this._props, s = this._complete, r = 0, a = e.length; r < a; r++) {
                        var n = e[r];
                        t[n[0]] = n[1] + n[2];
                    }
                    this.update && this.update.run(), this._count++, 0 != this.repeat && this._count >= this.repeat ? (this.clear(), 
                    s && s.run()) : this.restart();
                }
            }
        }, {
            key: "pause",
            value: function pause() {
                var t;
                i.timer.clear(this, this._beginLoop), i.timer.clear(this, this._doEase), i.timer.clear(this, this.firstStart), 
                (t = se.now() - this._startTimer - this._delay) < 0 && (this._usedTimer = t);
            }
        }, {
            key: "setStartTime",
            value: function setStartTime(t) {
                this._startTimer = t;
            }
        }, {
            key: "clear",
            value: function clear() {
                this._target && (this._remove(), this._clear());
            }
        }, {
            key: "_clear",
            value: function _clear() {
                this.pause(), i.timer.clear(this, this.firstStart), this._complete = null, this._target = null, 
                this._ease = null, this._props = null, this._delayParam = null, this.repeat = 1, 
                this._usedPool && (this.update = null, s.recover("tween", this));
            }
        }, {
            key: "recover",
            value: function recover() {
                this._usedPool = !0, this._clear();
            }
        }, {
            key: "_remove",
            value: function _remove() {
                var t = oi.tweenMap[this._target.$_GID];
                if (t) for (var e = 0, i = t.length; e < i; e++) {
                    if (t[e] === this) {
                        t.splice(e, 1);
                        break;
                    }
                }
            }
        }, {
            key: "restart",
            value: function restart() {
                if (this.pause(), this._usedTimer = 0, this._startTimer = se.now(), this._delayParam) i.timer.once(this._delay, this, this.firstStart, this._delayParam); else {
                    for (var t = this._props, e = 0, s = t.length; e < s; e++) {
                        var r = t[e];
                        this._target[r[0]] = r[1];
                    }
                    i.timer.once(this._delay, this, this._beginLoop);
                }
            }
        }, {
            key: "resume",
            value: function resume() {
                this._usedTimer >= this._duration || (this._startTimer = se.now() - this._usedTimer - this._delay, 
                this._delayParam ? this._usedTimer < 0 ? i.timer.once(-this._usedTimer, this, this.firstStart, this._delayParam) : this.firstStart.apply(this, this._delayParam) : this._beginLoop());
            }
        }, {
            key: "progress",
            set: function set(t) {
                var e = t * this._duration;
                this._startTimer = se.now() - this._delay - e;
            }
        } ], [ {
            key: "to",
            value: function to(t, e, i) {
                var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                var n = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
                var h = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : !1;
                var o = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : !0;
                return s.getItemByClass("tween", oi)._create(t, e, i, r, a, n, h, !0, o, !0);
            }
        }, {
            key: "from",
            value: function from(t, e, i) {
                var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                var n = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
                var h = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : !1;
                var o = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : !0;
                return s.getItemByClass("tween", oi)._create(t, e, i, r, a, n, h, !1, o, !0);
            }
        }, {
            key: "clearAll",
            value: function clearAll(t) {
                if (t && t.$_GID) {
                    var e = oi.tweenMap[t.$_GID];
                    if (e) {
                        for (var i = 0, s = e.length; i < s; i++) {
                            e[i]._clear();
                        }
                        e.length = 0;
                    }
                }
            }
        }, {
            key: "clear",
            value: function clear(t) {
                t.clear();
            }
        }, {
            key: "clearTween",
            value: function clearTween(t) {
                oi.clearAll(t);
            }
        }, {
            key: "easeNone",
            value: function easeNone(t, e, i, s) {
                return i * t / s + e;
            }
        } ]);
        return oi;
    }();
    oi.tweenMap = [];
    var li = /* */ function() {
        function li() {
            (0, _classCallCheck2.default)(this, li);
            this.ratio = .92, this.maxOffset = 60, this._dragging = !1, this._clickOnly = !0;
        }
        (0, _createClass2.default)(li, [ {
            key: "start",
            value: function start(t, e, s, r, a, n, h) {
                var o = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : .92;
                this.clearTimer(), this.target = t, this.area = e, this.hasInertia = s, this.elasticDistance = e ? r : 0, 
                this.elasticBackTime = a, this.data = n, this._disableMouseEvent = h, this.ratio = o, 
                this._parent = t.parent, this._clickOnly = !0, this._dragging = !0, this._elasticRateX = this._elasticRateY = 1, 
                this._lastX = this._parent.mouseX, this._lastY = this._parent.mouseY, i.stage.on(Qt.MOUSE_UP, this, this.onStageMouseUp), 
                i.stage.on(Qt.MOUSE_OUT, this, this.onStageMouseUp), i.systemTimer.frameLoop(1, this, this.loop);
            }
        }, {
            key: "clearTimer",
            value: function clearTimer() {
                i.systemTimer.clear(this, this.loop), i.systemTimer.clear(this, this.tweenMove), 
                this._tween && (this._tween.recover(), this._tween = null);
            }
        }, {
            key: "stop",
            value: function stop() {
                this._dragging && (Ue.instance.disableMouseEvent = !1, i.stage.off(Qt.MOUSE_UP, this, this.onStageMouseUp), 
                i.stage.off(Qt.MOUSE_OUT, this, this.onStageMouseUp), this._dragging = !1, this.target && this.area && this.backToArea(), 
                this.clear());
            }
        }, {
            key: "loop",
            value: function loop() {
                var t = this._parent.getMousePoint(), e = t.x, s = t.y, r = e - this._lastX, a = s - this._lastY;
                if (this._clickOnly) {
                    if (!(Math.abs(r * i.stage._canvasTransform.getScaleX()) > 1 || Math.abs(a * i.stage._canvasTransform.getScaleY()) > 1)) return;
                    this._clickOnly = !1, this._offsets || (this._offsets = []), this._offsets.length = 0, 
                    this.target.event(Qt.DRAG_START, this.data), Ue.instance.disableMouseEvent = this._disableMouseEvent;
                } else this._offsets.push(r, a);
                0 === r && 0 === a || (this._lastX = e, this._lastY = s, this.target.x += r * this._elasticRateX, 
                this.target.y += a * this._elasticRateY, this.area && this.checkArea(), this.target.event(Qt.DRAG_MOVE, this.data));
            }
        }, {
            key: "checkArea",
            value: function checkArea() {
                if (this.elasticDistance <= 0) this.backToArea(); else {
                    if (this.target._x < this.area.x) var t = this.area.x - this.target._x; else t = this.target._x > this.area.x + this.area.width ? this.target._x - this.area.x - this.area.width : 0;
                    if (this._elasticRateX = Math.max(0, 1 - t / this.elasticDistance), this.target._y < this.area.y) var e = this.area.y - this.target.y; else e = this.target._y > this.area.y + this.area.height ? this.target._y - this.area.y - this.area.height : 0;
                    this._elasticRateY = Math.max(0, 1 - e / this.elasticDistance);
                }
            }
        }, {
            key: "backToArea",
            value: function backToArea() {
                this.target.x = Math.min(Math.max(this.target._x, this.area.x), this.area.x + this.area.width), 
                this.target.y = Math.min(Math.max(this.target._y, this.area.y), this.area.y + this.area.height);
            }
        }, {
            key: "onStageMouseUp",
            value: function onStageMouseUp(t) {
                if (Ue.instance.disableMouseEvent = !1, i.stage.off(Qt.MOUSE_UP, this, this.onStageMouseUp), 
                i.stage.off(Qt.MOUSE_OUT, this, this.onStageMouseUp), i.systemTimer.clear(this, this.loop), 
                !this._clickOnly && this.target) if (this.hasInertia) {
                    this._offsets.length < 1 && this._offsets.push(this._parent.mouseX - this._lastX, this._parent.mouseY - this._lastY), 
                    this._offsetX = this._offsetY = 0;
                    for (var e = this._offsets.length, s = Math.min(e, 6), r = this._offsets.length - s, a = e - 1; a > r; a--) {
                        this._offsetY += this._offsets[a--], this._offsetX += this._offsets[a];
                    }
                    this._offsetX = this._offsetX / s * 2, this._offsetY = this._offsetY / s * 2, Math.abs(this._offsetX) > this.maxOffset && (this._offsetX = this._offsetX > 0 ? this.maxOffset : -this.maxOffset), 
                    Math.abs(this._offsetY) > this.maxOffset && (this._offsetY = this._offsetY > 0 ? this.maxOffset : -this.maxOffset), 
                    i.systemTimer.frameLoop(1, this, this.tweenMove);
                } else this.elasticDistance > 0 ? this.checkElastic() : this.clear();
            }
        }, {
            key: "checkElastic",
            value: function checkElastic() {
                var t = NaN, e = NaN;
                if (this.target.x < this.area.x ? t = this.area.x : this.target._x > this.area.x + this.area.width && (t = this.area.x + this.area.width), 
                this.target.y < this.area.y ? e = this.area.y : this.target._y > this.area.y + this.area.height && (e = this.area.y + this.area.height), 
                isNaN(t) && isNaN(e)) this.clear(); else {
                    var i = {};
                    isNaN(t) || (i.x = t), isNaN(e) || (i.y = e), this._tween = oi.to(this.target, i, this.elasticBackTime, hi.sineOut, b.create(this, this.clear), 0, !1, !1);
                }
            }
        }, {
            key: "tweenMove",
            value: function tweenMove() {
                this._offsetX *= this.ratio * this._elasticRateX, this._offsetY *= this.ratio * this._elasticRateY, 
                this.target.x += this._offsetX, this.target.y += this._offsetY, this.area && this.checkArea(), 
                this.target.event(Qt.DRAG_MOVE, this.data), (Math.abs(this._offsetX) < 1 && Math.abs(this._offsetY) < 1 || this._elasticRateX < .5 || this._elasticRateY < .5) && (i.systemTimer.clear(this, this.tweenMove), 
                this.elasticDistance > 0 ? this.checkElastic() : this.clear());
            }
        }, {
            key: "clear",
            value: function clear() {
                if (this.target) {
                    this.clearTimer();
                    var t = this.target;
                    this.target = null, this._parent = null, t.event(Qt.DRAG_END, this.data);
                }
            }
        } ]);
        return li;
    }();
    var _i = /* */ function() {
        function _i() {
            (0, _classCallCheck2.default)(this, _i);
            this._id = $.getGID(), this._resetComp();
        }
        (0, _createClass2.default)(_i, [ {
            key: "_isScript",
            value: function _isScript() {
                return !1;
            }
        }, {
            key: "_resetComp",
            value: function _resetComp() {
                this._indexInList = -1, this._enabled = !0, this._awaked = !1, this.owner = null;
            }
        }, {
            key: "_getIndexInList",
            value: function _getIndexInList() {
                return this._indexInList;
            }
        }, {
            key: "_setIndexInList",
            value: function _setIndexInList(t) {
                this._indexInList = t;
            }
        }, {
            key: "_onAdded",
            value: function _onAdded() {}
        }, {
            key: "_onAwake",
            value: function _onAwake() {}
        }, {
            key: "_onEnable",
            value: function _onEnable() {}
        }, {
            key: "_onDisable",
            value: function _onDisable() {}
        }, {
            key: "_onDestroy",
            value: function _onDestroy() {}
        }, {
            key: "onReset",
            value: function onReset() {}
        }, {
            key: "_parse",
            value: function _parse(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            }
        }, {
            key: "_parseInteractive",
            value: function _parseInteractive() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            }
        }, {
            key: "_cloneTo",
            value: function _cloneTo(t) {}
        }, {
            key: "_setActive",
            value: function _setActive(t) {
                t ? (this._awaked || (this._awaked = !0, this._onAwake()), this._enabled && this._onEnable()) : this._enabled && this._onDisable();
            }
        }, {
            key: "destroy",
            value: function destroy() {
                this.owner && this.owner._destroyComponent(this);
            }
        }, {
            key: "_destroy",
            value: function _destroy() {
                this.owner.activeInHierarchy && this._enabled && this._setActive(!1), this._onDestroy(), 
                this._destroyed = !0, this.onReset !== _i.prototype.onReset ? (this.onReset(), this._resetComp(), 
                s.recoverByClass(this)) : this._resetComp();
            }
        }, {
            key: "id",
            get: function get() {
                return this._id;
            }
        }, {
            key: "enabled",
            get: function get() {
                return this._enabled;
            },
            set: function set(t) {
                this._enabled != t && (this._enabled = t, this.owner && (t ? this.owner.activeInHierarchy && this._onEnable() : this.owner.activeInHierarchy && this._onDisable()));
            }
        }, {
            key: "isSingleton",
            get: function get() {
                return !0;
            }
        }, {
            key: "destroyed",
            get: function get() {
                return this._destroyed;
            }
        } ]);
        return _i;
    }();
    var ui = /* */ function(_De3) {
        (0, _inherits2.default)(ui, _De3);
        var _super42 = _createSuper(ui);
        function ui() {
            var _this36;
            (0, _classCallCheck2.default)(this, ui);
            _this36 = _super42.call(this), _this36.wrapMode = 0, _this36._interval = e.animationInterval, 
            _this36._isReverse = !1, _this36._frameRateChanged = !1, _this36._setBitUp(Ae.DISPLAY);
            return _this36;
        }
        (0, _createClass2.default)(ui, [ {
            key: "play",
            value: function play() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
                this._isPlaying = !0, this._actionName = i, this.index = "string" == typeof t ? this._getFrameByLabel(t) : t, 
                this.loop = e, this._isReverse = this.wrapMode === ui.WRAP_REVERSE, 0 == this.index && this._isReverse && (this.index = this.count - 1), 
                this.interval > 0 && this.timerLoop(this.interval, this, this._frameLoop, null, !0, !0);
            }
        }, {
            key: "_getFrameByLabel",
            value: function _getFrameByLabel(t) {
                for (var e = 0; e < this._count; e++) {
                    var i = this._labels[e];
                    if (i && i.indexOf(t) > -1) return e;
                }
                return 0;
            }
        }, {
            key: "_frameLoop",
            value: function _frameLoop() {
                if (this._controlNode && !this._controlNode.destroyed) {
                    if (this._isReverse) {
                        if (this._index--, this._index < 0) {
                            if (!this.loop) return this._index = 0, this.stop(), void this.event(Qt.COMPLETE);
                            this.wrapMode == ui.WRAP_PINGPONG ? (this._index = this._count > 0 ? 1 : 0, this._isReverse = !1) : this._index = this._count - 1, 
                            this.event(Qt.COMPLETE);
                        }
                    } else if (this._index++, this._index >= this._count) {
                        if (!this.loop) return this._index--, this.stop(), void this.event(Qt.COMPLETE);
                        this.wrapMode == ui.WRAP_PINGPONG ? (this._index = this._count - 2 >= 0 ? this._count - 2 : 0, 
                        this._isReverse = !0) : this._index = 0, this.event(Qt.COMPLETE);
                    }
                    this.index = this._index;
                } else this.clearTimer(this, this._frameLoop);
            }
        }, {
            key: "_setControlNode",
            value: function _setControlNode(t) {
                this._controlNode && (this._controlNode.off(Qt.DISPLAY, this, this._resumePlay), 
                this._controlNode.off(Qt.UNDISPLAY, this, this._resumePlay)), this._controlNode = t, 
                t && t != this && (t.on(Qt.DISPLAY, this, this._resumePlay), t.on(Qt.UNDISPLAY, this, this._resumePlay));
            }
        }, {
            key: "_setDisplay",
            value: function _setDisplay(t) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(ui.prototype), "_setDisplay", this).call(this, t), 
                this._resumePlay();
            }
        }, {
            key: "_resumePlay",
            value: function _resumePlay() {
                this._isPlaying && (this._controlNode.displayedInStage ? this.play(this._index, this.loop, this._actionName) : this.clearTimer(this, this._frameLoop));
            }
        }, {
            key: "stop",
            value: function stop() {
                this._isPlaying = !1, this.clearTimer(this, this._frameLoop);
            }
        }, {
            key: "addLabel",
            value: function addLabel(t, e) {
                this._labels || (this._labels = {}), this._labels[e] || (this._labels[e] = []), 
                this._labels[e].push(t);
            }
        }, {
            key: "removeLabel",
            value: function removeLabel(t) {
                if (t) {
                    if (this._labels) for (var e in this._labels) {
                        this._removeLabelFromList(this._labels[e], t);
                    }
                } else this._labels = null;
            }
        }, {
            key: "_removeLabelFromList",
            value: function _removeLabelFromList(t, e) {
                if (t) for (var i = t.length - 1; i >= 0; i--) {
                    t[i] == e && t.splice(i, 1);
                }
            }
        }, {
            key: "gotoAndStop",
            value: function gotoAndStop(t) {
                this.index = "string" == typeof t ? this._getFrameByLabel(t) : t, this.stop();
            }
        }, {
            key: "_displayToIndex",
            value: function _displayToIndex(t) {}
        }, {
            key: "clear",
            value: function clear() {
                return this.stop(), this._labels = null, this;
            }
        }, {
            key: "interval",
            get: function get() {
                return this._interval;
            },
            set: function set(t) {
                this._interval != t && (this._frameRateChanged = !0, this._interval = t, this._isPlaying && t > 0 && this.timerLoop(t, this, this._frameLoop, null, !0, !0));
            }
        }, {
            key: "isPlaying",
            get: function get() {
                return this._isPlaying;
            }
        }, {
            key: "index",
            get: function get() {
                return this._index;
            },
            set: function set(t) {
                if (this._index = t, this._displayToIndex(t), this._labels && this._labels[t]) for (var e = this._labels[t], i = 0, s = e.length; i < s; i++) {
                    this.event(Qt.LABEL, e[i]);
                }
            }
        }, {
            key: "count",
            get: function get() {
                return this._count;
            }
        } ]);
        return ui;
    }(De);
    ui.WRAP_POSITIVE = 0, ui.WRAP_REVERSE = 1, ui.WRAP_PINGPONG = 2, we.regClass("laya.display.AnimationBase", ui), 
    we.regClass("Laya.AnimationBase", ui);
    var ci = /* */ function() {
        function ci() {
            (0, _classCallCheck2.default)(this, ci);
        }
        (0, _createClass2.default)(ci, null, [ {
            key: "subtractVector3",
            value: function subtractVector3(t, e, i) {
                i[0] = t[0] - e[0], i[1] = t[1] - e[1], i[2] = t[2] - e[2];
            }
        }, {
            key: "lerp",
            value: function lerp(t, e, i) {
                return t * (1 - i) + e * i;
            }
        }, {
            key: "scaleVector3",
            value: function scaleVector3(t, e, i) {
                i[0] = t[0] * e, i[1] = t[1] * e, i[2] = t[2] * e;
            }
        }, {
            key: "lerpVector3",
            value: function lerpVector3(t, e, i, s) {
                var r = t[0], a = t[1], n = t[2];
                s[0] = r + i * (e[0] - r), s[1] = a + i * (e[1] - a), s[2] = n + i * (e[2] - n);
            }
        }, {
            key: "lerpVector4",
            value: function lerpVector4(t, e, i, s) {
                var r = t[0], a = t[1], n = t[2], h = t[3];
                s[0] = r + i * (e[0] - r), s[1] = a + i * (e[1] - a), s[2] = n + i * (e[2] - n), 
                s[3] = h + i * (e[3] - h);
            }
        }, {
            key: "slerpQuaternionArray",
            value: function slerpQuaternionArray(t, e, i, s, r, a, n) {
                var h, o, l, _, u, c = t[e + 0], d = t[e + 1], p = t[e + 2], f = t[e + 3], m = i[s + 0], g = i[s + 1], T = i[s + 2], v = i[s + 3];
                return (o = c * m + d * g + p * T + f * v) < 0 && (o = -o, m = -m, g = -g, T = -T, 
                v = -v), 1 - o > 1e-6 ? (h = Math.acos(o), l = Math.sin(h), _ = Math.sin((1 - r) * h) / l, 
                u = Math.sin(r * h) / l) : (_ = 1 - r, u = r), a[n + 0] = _ * c + u * m, a[n + 1] = _ * d + u * g, 
                a[n + 2] = _ * p + u * T, a[n + 3] = _ * f + u * v, a;
            }
        }, {
            key: "getRotation",
            value: function getRotation(t, e, i, s) {
                return Math.atan2(s - e, i - t) / Math.PI * 180;
            }
        }, {
            key: "sortBigFirst",
            value: function sortBigFirst(t, e) {
                return t == e ? 0 : e > t ? 1 : -1;
            }
        }, {
            key: "sortSmallFirst",
            value: function sortSmallFirst(t, e) {
                return t == e ? 0 : e > t ? -1 : 1;
            }
        }, {
            key: "sortNumBigFirst",
            value: function sortNumBigFirst(t, e) {
                return parseFloat(e) - parseFloat(t);
            }
        }, {
            key: "sortNumSmallFirst",
            value: function sortNumSmallFirst(t, e) {
                return parseFloat(t) - parseFloat(e);
            }
        }, {
            key: "sortByKey",
            value: function sortByKey(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
                var s;
                return s = e ? i ? ci.sortNumBigFirst : ci.sortBigFirst : i ? ci.sortNumSmallFirst : ci.sortSmallFirst, 
                function(e, i) {
                    return s(e[t], i[t]);
                };
            }
        } ]);
        return ci;
    }();
    var di = /* */ function(_ui) {
        (0, _inherits2.default)(di, _ui);
        var _super43 = _createSuper(di);
        function di() {
            var _this37;
            (0, _classCallCheck2.default)(this, di);
            _this37 = _super43.call(this), void 0 === di._sortIndexFun && (di._sortIndexFun = ci.sortByKey("index", !1, !0));
            return _this37;
        }
        (0, _createClass2.default)(di, [ {
            key: "_setUp",
            value: function _setUp(t, e) {
                this._targetDic = t, this._animationData = e, this.interval = 1e3 / e.frameRate, 
                e.parsed ? (this._count = e.count, this._labels = e.labels, this._usedFrames = e.animationNewFrames) : (this._usedFrames = [], 
                this._calculateDatas(), e.parsed = !0, e.labels = this._labels, e.count = this._count, 
                e.animationNewFrames = this._usedFrames);
            }
        }, {
            key: "clear",
            value: function clear() {
                return (0, _get2.default)((0, _getPrototypeOf2.default)(di.prototype), "clear", this).call(this), 
                this._targetDic = null, this._animationData = null, this;
            }
        }, {
            key: "_displayToIndex",
            value: function _displayToIndex(t) {
                if (this._animationData) {
                    t < 0 && (t = 0), t > this._count && (t = this._count);
                    var e, i = this._animationData.nodes, s = i.length;
                    for (e = 0; e < s; e++) {
                        this._displayNodeToFrame(i[e], t);
                    }
                }
            }
        }, {
            key: "_displayNodeToFrame",
            value: function _displayNodeToFrame(t, e) {
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                i || (i = this._targetDic);
                var s = i[t.target];
                if (s) {
                    var r, a, n, h, o = t.frames, l = t.keys, _ = l.length;
                    for (h = 0; h < _; h++) {
                        n = (a = o[r = l[h]]).length > e ? a[e] : a[a.length - 1], s[r] = n;
                    }
                    var u, c = t.funkeys;
                    if (0 != (_ = c.length)) for (h = 0; h < _; h++) {
                        void 0 !== (u = o[r = c[h]])[e] && s[r] && s[r].apply(s, u[e]);
                    }
                }
            }
        }, {
            key: "_calculateDatas",
            value: function _calculateDatas() {
                if (this._animationData) {
                    var t, e, i = this._animationData.nodes, s = i.length;
                    for (this._count = 0, t = 0; t < s; t++) {
                        e = i[t], this._calculateKeyFrames(e);
                    }
                    this._count += 1;
                }
            }
        }, {
            key: "_calculateKeyFrames",
            value: function _calculateKeyFrames(t) {
                var e, i, s = t.keyframes, r = t.target;
                for (e in t.frames || (t.frames = {}), t.keys ? t.keys.length = 0 : t.keys = [], 
                t.funkeys ? t.funkeys.length = 0 : t.funkeys = [], t.initValues || (t.initValues = {}), 
                s) {
                    var a = -1 != e.indexOf("()");
                    if (i = s[e], a && (e = e.substr(0, e.length - 2)), t.frames[e] || (t.frames[e] = []), 
                    a) {
                        t.funkeys.push(e);
                        for (var n = t.frames[e], h = 0; h < i.length; h++) {
                            var o = i[h];
                            n[o.index] = o.value, o.index > this._count && (this._count = o.index);
                        }
                    } else this._targetDic && this._targetDic[r] && (t.initValues[e] = this._targetDic[r][e]), 
                    i.sort(di._sortIndexFun), t.keys.push(e), this._calculateNodePropFrames(i, t.frames[e], e, r);
                }
            }
        }, {
            key: "resetNodes",
            value: function resetNodes() {
                if (this._targetDic && this._animationData) {
                    var t, e, i, s = this._animationData.nodes, r = s.length;
                    for (t = 0; t < r; t++) {
                        if (i = (e = s[t]).initValues) {
                            var a, n = this._targetDic[e.target];
                            if (n) for (a in i) {
                                n[a] = i[a];
                            }
                        }
                    }
                }
            }
        }, {
            key: "_calculateNodePropFrames",
            value: function _calculateNodePropFrames(t, e, i, s) {
                var r, a = t.length - 1;
                for (e.length = t[a].index + 1, r = 0; r < a; r++) {
                    this._dealKeyFrame(t[r]), this._calculateFrameValues(t[r], t[r + 1], e);
                }
                0 == a && (e[0] = t[0].value, this._usedFrames && (this._usedFrames[t[0].index] = !0)), 
                this._dealKeyFrame(t[r]);
            }
        }, {
            key: "_dealKeyFrame",
            value: function _dealKeyFrame(t) {
                t.label && "" != t.label && this.addLabel(t.label, t.index);
            }
        }, {
            key: "_calculateFrameValues",
            value: function _calculateFrameValues(t, e, i) {
                var s, r, a = t.index, n = e.index, h = t.value, o = e.value - t.value, l = n - a, _ = this._usedFrames;
                if (n > this._count && (this._count = n), t.tween) for (null == (r = hi[t.tweenMethod]) && (r = hi.linearNone), 
                s = a; s < n; s++) {
                    i[s] = r(s - a, h, o, l), _ && (_[s] = !0);
                } else for (s = a; s < n; s++) {
                    i[s] = h;
                }
                _ && (_[t.index] = !0, _[e.index] = !0), i[e.index] = e.value;
            }
        } ], [ {
            key: "_sortIndexFun",
            value: function _sortIndexFun(t, e) {
                return t.index - e.index;
            }
        } ]);
        return di;
    }(ui);
    we.regClass("laya.display.FrameAnimation", di), we.regClass("Laya.FrameAnimation", di);
    var pi = /* */ function() {
        function pi() {
            (0, _classCallCheck2.default)(this, pi);
            this._obj = {}, pi._maps.push(this);
        }
        (0, _createClass2.default)(pi, [ {
            key: "set",
            value: function set(t, e) {
                null != t && (pi.supportWeakMap || ("string" == typeof t || "number" == typeof t ? this._obj[t] = e : (t.$_GID || (t.$_GID = $.getGID()), 
                this._obj[t.$_GID] = e)));
            }
        }, {
            key: "get",
            value: function get(t) {
                return null == t ? null : pi.supportWeakMap ? void 0 : "string" == typeof t || "number" == typeof t ? this._obj[t] : this._obj[t.$_GID];
            }
        }, {
            key: "del",
            value: function del(t) {
                null != t && (pi.supportWeakMap || ("string" == typeof t || "number" == typeof t ? delete this._obj[t] : delete this._obj[this._obj.$_GID]));
            }
        }, {
            key: "has",
            value: function has(t) {
                return null != t && !pi.supportWeakMap && ("string" == typeof t || "number" == typeof t ? null != this._obj[t] : null != this._obj[this._obj.$_GID]);
            }
        } ], [ {
            key: "__init__",
            value: function __init__() {
                pi.I = new pi(), pi.supportWeakMap || i.systemTimer.loop(pi.delInterval, null, pi.clearCache);
            }
        }, {
            key: "clearCache",
            value: function clearCache() {
                for (var t = 0, e = pi._maps.length; t < e; t++) {
                    pi._maps[t]._obj = {};
                }
            }
        } ]);
        return pi;
    }();
    pi.supportWeakMap = !1, pi.delInterval = 6e5, pi._maps = [];
    var fi = /* */ function() {
        function fi() {
            (0, _classCallCheck2.default)(this, fi);
        }
        (0, _createClass2.default)(fi, null, [ {
            key: "__init",
            value: function __init() {
                fi._funMap = new pi();
            }
        }, {
            key: "getBindFun",
            value: function getBindFun(t) {
                var e = fi._funMap.get(t);
                if (null == e) {
                    var i = '"' + t + '"', s = "(function(data){if(data==null)return;with(data){try{\nreturn " + (i = i.replace(/^"\${|}"$/g, "").replace(/\${/g, '"+').replace(/}/g, '+"')) + "\n}catch(e){}}})";
                    e = window.Laya._runScript(s), fi._funMap.set(t, e);
                }
                return e;
            }
        }, {
            key: "createByData",
            value: function createByData(t, e) {
                var i = gi.create();
                if ((t = fi.createComp(e, t, t, null, i))._setBit(Ae.NOT_READY, !0), "_idMap" in t && (t._idMap = i._idMap), 
                e.animations) {
                    var s, r, a, n = [], h = e.animations, o = h.length;
                    for (s = 0; s < o; s++) {
                        switch (r = new di(), a = h[s], r._setUp(i._idMap, a), t[a.name] = r, r._setControlNode(t), 
                        a.action) {
                          case 1:
                            r.play(0, !1);
                            break;

                          case 2:
                            r.play(0, !0);
                        }
                        n.push(r);
                    }
                    t._aniList = n;
                }
                return "Scene" === t._$componentType && t._width > 0 && null == e.props.hitTestPrior && !t.mouseThrough && (t.hitTestPrior = !0), 
                i.beginLoad(t), t;
            }
        }, {
            key: "createInitTool",
            value: function createInitTool() {
                return gi.create();
            }
        }, {
            key: "createComp",
            value: function createComp(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                if ("Scene3D" == t.type || "Sprite3D" == t.type) {
                    var n = [], h = i.Laya.Utils3D._createSceneByJsonForMaker(t, n, a);
                    return "Sprite3D" == t.type ? i.Laya.StaticBatchManager.combine(h, n) : i.Laya.StaticBatchManager.combine(null, n), 
                    h;
                }
                if (!(e = e || fi.getCompInstance(t))) return t.props && t.props.runtime ? console.warn("runtime not found:" + t.props.runtime) : console.warn("can not create:" + t.type), 
                null;
                var o = t.child;
                if (o) for (var l = "List" == e._$componentType, _ = 0, u = o.length; _ < u; _++) {
                    var c = o[_];
                    if ("itemRender" in e && ("render" == c.props.name || "render" === c.props.renderType)) e.itemRender = c; else if ("Graphic" == c.type) i.ClassUtils._addGraphicsToSprite(c, e); else if (i.ClassUtils._isDrawType(c.type)) i.ClassUtils._addGraphicToSprite(c, e, !0); else {
                        if (l) {
                            var d = [], p = fi.createComp(c, null, s, d, a);
                            d.length && (p._$bindData = d);
                        } else p = fi.createComp(c, null, s, r, a);
                        "Script" == c.type ? p instanceof _i ? e._addComponentInstance(p) : "owner" in p ? p.owner = e : "target" in p && (p.target = e) : "mask" == c.props.renderType || "mask" == c.props.name ? e.mask = p : p instanceof Le && e.addChild(p);
                    }
                }
                var f = t.props;
                for (var m in f) {
                    var g = f[m];
                    "string" == typeof g && (g.indexOf("@node:") >= 0 || g.indexOf("@Prefab:") >= 0) ? a && a.addNodeRef(e, m, g) : fi.setCompValue(e, m, g, s, r);
                }
                return e._afterInited && e._afterInited(), t.compId && a && a._idMap && (a._idMap[t.compId] = e), 
                e;
            }
        }, {
            key: "setCompValue",
            value: function setCompValue(t, e, s) {
                var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                if ("string" == typeof s && s.indexOf("${") > -1) {
                    if (fi._sheet || (fi._sheet = i.ClassUtils.getClass("laya.data.Table")), !fi._sheet) return void console.warn("Can not find class Sheet");
                    if (a) a.push(t, e, s); else if (r) {
                        -1 == s.indexOf("].") && (s = s.replace(".", "[0]."));
                        var n, h, o = new mi(t, e, s);
                        o.exe(r);
                        for (var l = s.replace(/\[.*?\]\./g, "."); null != (n = fi._parseWatchData.exec(l)); ) {
                            for (var _ = n[1]; null != (h = fi._parseKeyWord.exec(_)); ) {
                                var u = h[0], c = r._watchMap[u] || (r._watchMap[u] = []);
                                c.push(o), fi._sheet.I.notifer.on(u, r, r.changeData, [ u ]);
                            }
                            (c = r._watchMap[_] || (r._watchMap[_] = [])).push(o), fi._sheet.I.notifer.on(_, r, r.changeData, [ _ ]);
                        }
                    }
                } else "var" === e && r ? r[s] = t : t[e] = "true" === s || "false" !== s && s;
            }
        }, {
            key: "getCompInstance",
            value: function getCompInstance(t) {
                if ("UIView" == t.type && t.props && t.props.pageData) return fi.createByData(null, t.props.pageData);
                var e = t.props && t.props.runtime || t.type, r = i.ClassUtils.getClass(e);
                if (!r) throw "Can not find class " + e;
                if ("Script" === t.type && r.prototype._doAwake) {
                    var a = s.createByClass(r);
                    return a._destroyed = !1, a;
                }
                return t.props && "renderType" in t.props && "instance" == t.props.renderType ? (r.instance || (r.instance = new r()), 
                r.instance) : new r();
            }
        } ]);
        return fi;
    }();
    fi._parseWatchData = /\${(.*?)}/g, fi._parseKeyWord = /[a-zA-Z_][a-zA-Z0-9_]*(?:(?:\.[a-zA-Z_][a-zA-Z0-9_]*)+)/g;
    var mi = /* */ function() {
        function mi(t, e, i) {
            (0, _classCallCheck2.default)(this, mi);
            this.comp = t, this.prop = e, this.value = i;
        }
        (0, _createClass2.default)(mi, [ {
            key: "exe",
            value: function exe(t) {
                var e = fi.getBindFun(this.value);
                this.comp[this.prop] = e.call(this, t);
            }
        } ]);
        return mi;
    }();
    var gi = /* */ function() {
        function gi() {
            (0, _classCallCheck2.default)(this, gi);
        }
        (0, _createClass2.default)(gi, [ {
            key: "reset",
            value: function reset() {
                this._nodeRefList = null, this._initList = null, this._idMap = null, this._loadList = null, 
                this._scene = null;
            }
        }, {
            key: "recover",
            value: function recover() {
                this.reset(), s.recover("InitTool", this);
            }
        }, {
            key: "addLoadRes",
            value: function addLoadRes(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                this._loadList || (this._loadList = []), i.loader.getRes(t) || (e ? this._loadList.push({
                    url: t,
                    type: e
                }) : this._loadList.push(t));
            }
        }, {
            key: "addNodeRef",
            value: function addNodeRef(t, e, i) {
                this._nodeRefList || (this._nodeRefList = []), this._nodeRefList.push([ t, e, i ]), 
                i.indexOf("@Prefab:") >= 0 && this.addLoadRes(i.replace("@Prefab:", ""), ti.PREFAB);
            }
        }, {
            key: "setNodeRef",
            value: function setNodeRef() {
                if (this._nodeRefList) if (this._idMap) {
                    var t, e, i;
                    for (e = this._nodeRefList.length, t = 0; t < e; t++) {
                        (i = this._nodeRefList[t])[0][i[1]] = this.getReferData(i[2]);
                    }
                    this._nodeRefList = null;
                } else this._nodeRefList = null;
            }
        }, {
            key: "getReferData",
            value: function getReferData(t) {
                if (t.indexOf("@Prefab:") >= 0) return ti.getRes(t.replace("@Prefab:", ""));
                if (t.indexOf("@arr:") >= 0) {
                    var e, i, s, r;
                    for (s = (e = (t = t.replace("@arr:", "")).split(",")).length, i = 0; i < s; i++) {
                        r = e[i], e[i] = r ? this._idMap[r.replace("@node:", "")] : null;
                    }
                    return e;
                }
                return this._idMap[t.replace("@node:", "")];
            }
        }, {
            key: "addInitItem",
            value: function addInitItem(t) {
                this._initList || (this._initList = []), this._initList.push(t);
            }
        }, {
            key: "doInits",
            value: function doInits() {
                this._initList && (this._initList = null);
            }
        }, {
            key: "finish",
            value: function finish() {
                this.setNodeRef(), this.doInits(), this._scene._setBit(Ae.NOT_READY, !1), this._scene.parent && this._scene.parent.activeInHierarchy && this._scene.active && this._scene._processActive(), 
                this._scene.event("onViewCreated"), this.recover();
            }
        }, {
            key: "beginLoad",
            value: function beginLoad(t) {
                this._scene = t, !this._loadList || this._loadList.length < 1 ? this.finish() : i.loader.load(this._loadList, b.create(this, this.finish));
            }
        } ], [ {
            key: "create",
            value: function create() {
                var t = s.getItemByClass("InitTool", gi);
                return t._idMap = {}, t;
            }
        } ]);
        return gi;
    }();
    var Ti = /* */ function() {
        function Ti() {
            (0, _classCallCheck2.default)(this, Ti);
        }
        (0, _createClass2.default)(Ti, [ {
            key: "show",
            value: function show() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            }
        }, {
            key: "enable",
            value: function enable() {}
        }, {
            key: "hide",
            value: function hide() {}
        }, {
            key: "set_onclick",
            value: function set_onclick(t) {}
        }, {
            key: "isCanvasRender",
            value: function isCanvasRender() {
                return !0;
            }
        }, {
            key: "renderNotCanvas",
            value: function renderNotCanvas(t, e, i) {}
        } ]);
        return Ti;
    }();
    var vi = /* */ function(_Ti) {
        (0, _inherits2.default)(vi, _Ti);
        var _super44 = _createSuper(vi);
        function vi() {
            var _this38;
            (0, _classCallCheck2.default)(this, vi);
            _this38 = _super44.apply(this, arguments), _this38._show = !1, _this38._useCanvas = !1, 
            _this38._height = 100, _this38._view = [];
            return _this38;
        }
        (0, _createClass2.default)(vi, [ {
            key: "show",
            value: function show() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                se._isMiniGame || i.Render.isConchApp || (this._useCanvas = !0), this._show = !0, 
                X._fpsData.length = 60, this._view[0] = {
                    title: "FPS(WebGL)",
                    value: "_fpsStr",
                    color: "yellow",
                    units: "int"
                }, this._view[1] = {
                    title: "Sprite",
                    value: "_spriteStr",
                    color: "white",
                    units: "int"
                }, this._view[2] = {
                    title: "RenderBatches",
                    value: "renderBatches",
                    color: "white",
                    units: "int"
                }, this._view[3] = {
                    title: "SavedRenderBatches",
                    value: "savedRenderBatches",
                    color: "white",
                    units: "int"
                }, this._view[4] = {
                    title: "CPUMemory",
                    value: "cpuMemory",
                    color: "yellow",
                    units: "M"
                }, this._view[5] = {
                    title: "GPUMemory",
                    value: "gpuMemory",
                    color: "yellow",
                    units: "M"
                }, this._view[6] = {
                    title: "Shader",
                    value: "shaderCall",
                    color: "white",
                    units: "int"
                }, this._view[7] = {
                    title: "Canvas",
                    value: "_canvasStr",
                    color: "white",
                    units: "int"
                }, ue.is3DMode && (this._view[0].title = "FPS(3D)", this._view[8] = {
                    title: "TriFaces",
                    value: "trianglesFaces",
                    color: "white",
                    units: "int"
                }, this._view[9] = {
                    title: "FrustumCulling",
                    value: "frustumCulling",
                    color: "white",
                    units: "int"
                }, this._view[10] = {
                    title: "OctreeNodeCulling",
                    value: "octreeNodeCulling",
                    color: "white",
                    units: "int"
                }), this._useCanvas ? this.createUIPre(t, e) : this.createUI(t, e), this.enable();
            }
        }, {
            key: "createUIPre",
            value: function createUIPre(t, e) {
                var i = se.pixelRatio;
                this._width = 180 * i, this._vx = 120 * i, this._height = i * (12 * this._view.length + 3 * i) + 4, 
                vi._fontSize = 12 * i;
                for (var s = 0; s < this._view.length; s++) {
                    this._view[s].x = 4, this._view[s].y = s * vi._fontSize + 2 * i;
                }
                this._canvas || (this._canvas = new be(!0), this._canvas.size(this._width, this._height), 
                this._ctx = this._canvas.getContext("2d"), this._ctx.textBaseline = "top", this._ctx.font = vi._fontSize + "px Arial", 
                this._canvas.source.style.cssText = "pointer-events:none;background:rgba(150,150,150,0.8);z-index:100000;position: absolute;direction:ltr;left:" + t + "px;top:" + e + "px;width:" + this._width / i + "px;height:" + this._height / i + "px;"), 
                se.onKGMiniGame || se.container.appendChild(this._canvas.source), this._first = !0, 
                this.loop(), this._first = !1;
            }
        }, {
            key: "createUI",
            value: function createUI(t, e) {
                var i = this._sp, s = se.pixelRatio;
                i || (i = new De(), this._leftText = new Fe(), this._leftText.pos(5, 5), this._leftText.color = "#ffffff", 
                i.addChild(this._leftText), this._txt = new Fe(), this._txt.pos(130 * s, 5), this._txt.color = "#ffffff", 
                i.addChild(this._txt), this._sp = i), i.pos(t, e);
                for (var r = "", a = 0; a < this._view.length; a++) {
                    r += this._view[a].title + "\n";
                }
                this._leftText.text = r;
                var n = 138 * s, h = s * (12 * this._view.length + 3 * s) + 4;
                this._txt.fontSize = vi._fontSize * s, this._leftText.fontSize = vi._fontSize * s, 
                i.size(n, h), i.graphics.clear(), i.graphics.alpha(.5), i.graphics.drawRect(0, 0, n + 110, h + 30, "#999999"), 
                i.graphics.alpha(2), this.loop();
            }
        }, {
            key: "enable",
            value: function enable() {
                i.systemTimer.frameLoop(1, this, this.loop);
            }
        }, {
            key: "hide",
            value: function hide() {
                this._show = !1, i.systemTimer.clear(this, this.loop), this._canvas && se.removeElement(this._canvas.source);
            }
        }, {
            key: "set_onclick",
            value: function set_onclick(t) {
                this._sp && this._sp.on("click", this._sp, t), this._canvas && (this._canvas.source.onclick = t, 
                this._canvas.source.style.pointerEvents = "");
            }
        }, {
            key: "loop",
            value: function loop() {
                X._count++;
                var t = se.now();
                if (!(t - X._timer < 1e3)) {
                    var e = X._count;
                    if (X.FPS = Math.round(1e3 * e / (t - X._timer)), this._show) {
                        X.trianglesFaces = Math.round(X.trianglesFaces / e), this._useCanvas ? X.renderBatches = Math.round(X.renderBatches / e) : X.renderBatches = Math.round(X.renderBatches / e) - 1, 
                        X.savedRenderBatches = Math.round(X.savedRenderBatches / e), X.shaderCall = Math.round(X.shaderCall / e), 
                        X.spriteRenderUseCacheCount = Math.round(X.spriteRenderUseCacheCount / e), X.canvasNormal = Math.round(X.canvasNormal / e), 
                        X.canvasBitmap = Math.round(X.canvasBitmap / e), X.canvasReCache = Math.ceil(X.canvasReCache / e), 
                        X.frustumCulling = Math.round(X.frustumCulling / e), X.octreeNodeCulling = Math.round(X.octreeNodeCulling / e);
                        var i = X.FPS > 0 ? Math.floor(1e3 / X.FPS).toString() : " ";
                        X._fpsStr = X.FPS + (X.renderSlow ? " slow" : "") + " " + i, X._spriteStr = X.spriteCount + (X.spriteRenderUseCacheCount ? "/" + X.spriteRenderUseCacheCount : ""), 
                        X._canvasStr = X.canvasReCache + "/" + X.canvasNormal + "/" + X.canvasBitmap, X.cpuMemory = I.cpuMemory, 
                        X.gpuMemory = I.gpuMemory, this._useCanvas ? this.renderInfoPre() : this.renderInfo(), 
                        X.clear();
                    }
                    X._count = 0, X._timer = t;
                }
            }
        }, {
            key: "renderInfoPre",
            value: function renderInfoPre() {
                var t, e, i = 0;
                if (this._canvas) {
                    var s = this._ctx;
                    for (s.clearRect(this._first ? 0 : this._vx, 0, this._width, this._height), i = 0; i < this._view.length; i++) {
                        t = this._view[i], this._first && (s.fillStyle = "white", s.fillText(t.title, t.x, t.y)), 
                        s.fillStyle = t.color, e = X[t.value], "M" == t.units && (e = Math.floor(e / 1048576 * 100) / 100 + " M"), 
                        s.fillText(e + "", t.x + this._vx, t.y);
                    }
                }
            }
        }, {
            key: "renderInfo",
            value: function renderInfo() {
                for (var t = "", e = 0; e < this._view.length; e++) {
                    var i = this._view[e], s = X[i.value];
                    "M" == i.units && (s = Math.floor(s / 1048576 * 100) / 100 + " M"), "K" == i.units && (s = Math.floor(s / 1024 * 100) / 100 + " K"), 
                    t += s + "\n";
                }
                this._txt.text = t;
            }
        }, {
            key: "isCanvasRender",
            value: function isCanvasRender() {
                return this._useCanvas;
            }
        }, {
            key: "renderNotCanvas",
            value: function renderNotCanvas(t, e, i) {
                this._show && this._sp && this._sp.render(t, 0, 0);
            }
        } ]);
        return vi;
    }(Ti);
    vi._fontSize = 12;
    var xi = /* */ function() {
        function xi() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
            (0, _classCallCheck2.default)(this, xi);
            this.scale = 1, this.currTimer = Date.now(), this.currFrame = 0, this._delta = 0, 
            this._lastTimer = Date.now(), this._map = [], this._handlers = [], this._temp = [], 
            this._count = 0, t && xi.gSysTimer && xi.gSysTimer.frameLoop(1, this, this._update);
        }
        (0, _createClass2.default)(xi, [ {
            key: "_update",
            value: function _update() {
                if (this.scale <= 0) return this._lastTimer = Date.now(), void (this._delta = 0);
                var t = this.currFrame = this.currFrame + this.scale, e = Date.now(), i = e - this._lastTimer > 3e4;
                this._delta = (e - this._lastTimer) * this.scale;
                var s = this.currTimer = this.currTimer + this._delta;
                this._lastTimer = e;
                var r = this._handlers;
                this._count = 0;
                for (var a = 0, n = r.length; a < n; a++) {
                    var h = r[a];
                    if (null !== h.method) {
                        var o = h.userFrame ? t : s;
                        if (o >= h.exeTime) if (h.repeat) {
                            if (!h.jumpFrame || i) h.exeTime += h.delay, h.run(!1), o > h.exeTime && (h.exeTime += Math.ceil((o - h.exeTime) / h.delay) * h.delay); else for (;o >= h.exeTime; ) {
                                h.exeTime += h.delay, h.run(!1);
                            }
                        } else h.run(!0);
                    } else this._count++;
                }
                (this._count > 30 || t % 200 == 0) && this._clearHandlers();
            }
        }, {
            key: "_clearHandlers",
            value: function _clearHandlers() {
                for (var t = this._handlers, e = 0, i = t.length; e < i; e++) {
                    var s = t[e];
                    null !== s.method ? this._temp.push(s) : this._recoverHandler(s);
                }
                this._handlers = this._temp, t.length = 0, this._temp = t;
            }
        }, {
            key: "_recoverHandler",
            value: function _recoverHandler(t) {
                this._map[t.key] == t && (this._map[t.key] = null), t.clear(), xi._pool.push(t);
            }
        }, {
            key: "_create",
            value: function _create(t, e, i, s, r, a, n) {
                if (!i) return r.apply(s, a), null;
                if (n) {
                    var h = this._getHandler(s, r);
                    if (h) return h.repeat = e, h.userFrame = t, h.delay = i, h.caller = s, h.method = r, 
                    h.args = a, h.exeTime = i + (t ? this.currFrame : this.currTimer + Date.now() - this._lastTimer), 
                    h;
                }
                return (h = xi._pool.length > 0 ? xi._pool.pop() : new yi()).repeat = e, h.userFrame = t, 
                h.delay = i, h.caller = s, h.method = r, h.args = a, h.exeTime = i + (t ? this.currFrame : this.currTimer + Date.now() - this._lastTimer), 
                this._indexHandler(h), this._handlers.push(h), h;
            }
        }, {
            key: "_indexHandler",
            value: function _indexHandler(t) {
                var e = t.caller, s = t.method, r = e ? e.$_GID || (e.$_GID = i.Utils.getGID()) : 0, a = s.$_TID || (s.$_TID = 1e5 * xi._mid++);
                t.key = r + a, this._map[t.key] = t;
            }
        }, {
            key: "once",
            value: function once(t, e, i) {
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !0;
                this._create(!1, !1, t, e, i, s, r);
            }
        }, {
            key: "loop",
            value: function loop(t, e, i) {
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !0;
                var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !1;
                var n = this._create(!1, !0, t, e, i, s, r);
                n && (n.jumpFrame = a);
            }
        }, {
            key: "frameOnce",
            value: function frameOnce(t, e, i) {
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !0;
                this._create(!0, !1, t, e, i, s, r);
            }
        }, {
            key: "frameLoop",
            value: function frameLoop(t, e, i) {
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !0;
                this._create(!0, !0, t, e, i, s, r);
            }
        }, {
            key: "toString",
            value: function toString() {
                return " handlers:" + this._handlers.length + " pool:" + xi._pool.length;
            }
        }, {
            key: "clear",
            value: function clear(t, e) {
                var i = this._getHandler(t, e);
                i && (this._map[i.key] = null, i.key = 0, i.clear());
            }
        }, {
            key: "clearAll",
            value: function clearAll(t) {
                if (t) for (var e = 0, i = this._handlers.length; e < i; e++) {
                    var s = this._handlers[e];
                    s.caller === t && (this._map[s.key] = null, s.key = 0, s.clear());
                }
            }
        }, {
            key: "_getHandler",
            value: function _getHandler(t, e) {
                var s = t ? t.$_GID || (t.$_GID = i.Utils.getGID()) : 0, r = e.$_TID || (e.$_TID = 1e5 * xi._mid++);
                return this._map[s + r];
            }
        }, {
            key: "callLater",
            value: function callLater(t, e) {
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                Ge.I.callLater(t, e, i);
            }
        }, {
            key: "runCallLater",
            value: function runCallLater(t, e) {
                Ge.I.runCallLater(t, e);
            }
        }, {
            key: "runTimer",
            value: function runTimer(t, e) {
                var i = this._getHandler(t, e);
                i && null != i.method && (this._map[i.key] = null, i.run(!0));
            }
        }, {
            key: "pause",
            value: function pause() {
                this.scale = 0;
            }
        }, {
            key: "resume",
            value: function resume() {
                this.scale = 1;
            }
        }, {
            key: "delta",
            get: function get() {
                return this._delta;
            }
        } ]);
        return xi;
    }();
    xi.gSysTimer = null, xi._pool = [], xi._mid = 1;
    var yi = /* */ function() {
        function yi() {
            (0, _classCallCheck2.default)(this, yi);
        }
        (0, _createClass2.default)(yi, [ {
            key: "clear",
            value: function clear() {
                this.caller = null, this.method = null, this.args = null;
            }
        }, {
            key: "run",
            value: function run(t) {
                var e = this.caller;
                if (e && e.destroyed) return this.clear();
                var i = this.method, s = this.args;
                t && this.clear(), null != i && (s ? i.apply(e, s) : i.call(e));
            }
        } ]);
        return yi;
    }();
    var Ei = /* */ function(_j) {
        (0, _inherits2.default)(Ei, _j);
        var _super45 = _createSuper(Ei);
        function Ei(t) {
            var _this39;
            (0, _classCallCheck2.default)(this, Ei);
            _this39 = _super45.call(this, V.SKINMESH, 0), _this39.offsetX = 300, _this39.offsetY = 0;
            var e = R.mainContext, i = 8 * Yt.BYTES_PE;
            _this39.position = [ 2, e.FLOAT, !1, i, 0 ], _this39.texcoord = [ 2, e.FLOAT, !1, i, 2 * Yt.BYTES_PE ], 
            _this39.color = [ 4, e.FLOAT, !1, i, 4 * Yt.BYTES_PE ];
            return _this39;
        }
        return Ei;
    }(j);
    var Ai = /* */ function(_j2) {
        (0, _inherits2.default)(Ai, _j2);
        var _super46 = _createSuper(Ai);
        function Ai(t) {
            var _this40;
            (0, _classCallCheck2.default)(this, Ai);
            _this40 = _super46.call(this, V.PRIMITIVE, 0), _this40._attribLocation = [ "position", 0, "attribColor", 1 ];
            return _this40;
        }
        return Ai;
    }(j);
    var Ci = /* */ function(_j3) {
        (0, _inherits2.default)(Ci, _j3);
        var _super47 = _createSuper(Ci);
        function Ci() {
            var _this41;
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            (0, _classCallCheck2.default)(this, Ci);
            _this41 = _super47.call(this, V.TEXTURE2D, t), _this41.strength = 0, _this41.blurInfo = null, 
            _this41.colorMat = null, _this41.colorAlpha = null, _this41._attribLocation = [ "posuv", 0, "attribColor", 1, "attribFlags", 2 ];
            return _this41;
        }
        (0, _createClass2.default)(Ci, [ {
            key: "clear",
            value: function clear() {
                this.texture = null, this.shader = null, this.defines._value = this.subID;
            }
        } ]);
        return Ci;
    }(j);
    var Ri = /* */ function() {
        function Ri(t) {
            (0, _classCallCheck2.default)(this, Ri);
            this.codes = {}, this.funs = {}, this.curUseID = -1, this.funnames = "", this.script = t;
            for (var e, s, r = 0; !((r = t.indexOf("#begin", r)) < 0); ) {
                for (s = r + 5; !((s = t.indexOf("#end", s)) < 0) && "i" === t.charAt(s + 4); ) {
                    s += 5;
                }
                if (s < 0) throw "add include err,no #end:" + t;
                e = t.indexOf("\n", r);
                var a = i.ShaderCompile.splitToWords(t.substr(r, e - r), null);
                "code" == a[1] ? this.codes[a[2]] = t.substr(e + 1, s - e - 1) : "function" == a[1] && (e = t.indexOf("function", r), 
                e += "function".length, this.funs[a[3]] = t.substr(e + 1, s - e - 1), this.funnames += a[3] + ";"), 
                r = s + 1;
            }
        }
        (0, _createClass2.default)(Ri, [ {
            key: "getWith",
            value: function getWith() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                var e = t ? this.codes[t] : this.script;
                if (!e) throw "get with error:" + t;
                return e;
            }
        }, {
            key: "getFunsScript",
            value: function getFunsScript(t) {
                var e = "";
                for (var i in this.funs) {
                    t.indexOf(i + ";") >= 0 && (e += this.funs[i]);
                }
                return e;
            }
        } ]);
        return Ri;
    }();
    var bi = /* */ function() {
        function bi(t) {
            (0, _classCallCheck2.default)(this, bi);
            this.childs = [], this.text = "", this.useFuns = "", this.z = 0, this.includefiles = t;
        }
        (0, _createClass2.default)(bi, [ {
            key: "setParent",
            value: function setParent(t) {
                t.childs.push(this), this.z = t.z + 1, this.parent = t;
            }
        }, {
            key: "setCondition",
            value: function setCondition(t, e) {
                t && (this.conditionType = e, t = t.replace(/(\s*$)/g, ""), this.condition = function() {
                    return this[t];
                }, this.condition.__condition = t);
            }
        }, {
            key: "toscript",
            value: function toscript(t, e) {
                return this._toscript(t, e, ++bi.__id);
            }
        }, {
            key: "_toscript",
            value: function _toscript(t, e, s) {
                if (this.childs.length < 1 && !this.text) return e;
                e.length;
                if (this.condition) {
                    var r = !!this.condition.call(t);
                    if (this.conditionType === i.ShaderCompile.IFDEF_ELSE && (r = !r), !r) return e;
                }
                if (this.noCompile && this.text && e.push(this.text), this.childs.length > 0 && this.childs.forEach(function(i, r, a) {
                    i._toscript(t, e, s);
                }), this.includefiles.length > 0 && this.useFuns.length > 0) for (var a, n = 0, h = this.includefiles.length; n < h; n++) {
                    this.includefiles[n].curUseID != s && (a = this.includefiles[n].file.getFunsScript(this.useFuns)).length > 0 && (this.includefiles[n].curUseID = s, 
                    e[0] = a + e[0]);
                }
                return e;
            }
        } ]);
        return bi;
    }();
    bi.__id = 1;
    var Si = /* */ function() {
        function Si(t, e, i) {
            (0, _classCallCheck2.default)(this, Si);
            this.defs = {};
            var s = this;
            function _compile(t) {
                t = t.replace(Si._clearCR, "");
                var e = [], i = new bi(e);
                return s._compileToTree(i, t.split("\n"), 0, e, s.defs), i;
            }
            var r = Date.now();
            this._VS = _compile(t), this._PS = _compile(e), this._nameMap = i, Date.now() - r > 2 && console.log("ShaderCompile use time:" + (Date.now() - r) + "  size:" + t.length + "/" + e.length);
        }
        (0, _createClass2.default)(Si, [ {
            key: "_compileToTree",
            value: function _compileToTree(t, e, i, s, r) {
                var a, n, h, o, l, _, u, c, d, p, f;
                for (d = i; d < e.length; d++) {
                    if (!((h = e[d]).length < 1) && 0 !== (_ = h.indexOf("//"))) {
                        if (_ >= 0 && (h = h.substr(0, _)), a = c || new bi(s), c = null, a.text = h, a.noCompile = !0, 
                        (_ = h.indexOf("#")) >= 0) {
                            for (o = "#", f = _ + 1, p = h.length; f < p; f++) {
                                var m = h.charAt(f);
                                if (" " === m || "\t" === m || "?" === m) break;
                                o += m;
                            }
                            switch (a.name = o, o) {
                              case "#ifdef":
                              case "#ifndef":
                                if (a.src = h, a.noCompile = null != h.match(/[!&|()=<>]/), a.noCompile ? console.log("function():Boolean{return " + h.substr(_ + a.name.length) + "}") : (u = h.replace(/^\s*/, "").split(/\s+/), 
                                a.setCondition(u[1], "#ifdef" === o ? Si.IFDEF_YES : Si.IFDEF_ELSE), a.text = "//" + a.text), 
                                a.setParent(t), t = a, r) for (u = h.substr(f).split(Si._splitToWordExps3), f = 0; f < u.length; f++) {
                                    (h = u[f]).length && (r[h] = !0);
                                }
                                continue;

                              case "#if":
                                if (a.src = h, a.noCompile = !0, a.setParent(t), t = a, r) for (u = h.substr(f).split(Si._splitToWordExps3), 
                                f = 0; f < u.length; f++) {
                                    (h = u[f]).length && "defined" != h && (r[h] = !0);
                                }
                                continue;

                              case "#else":
                                a.src = h, n = (t = t.parent).childs[t.childs.length - 1], a.noCompile = n.noCompile, 
                                a.noCompile || (a.condition = n.condition, a.conditionType = n.conditionType == Si.IFDEF_YES ? Si.IFDEF_ELSE : Si.IFDEF_YES, 
                                a.text = "//" + a.text + " " + n.text + " " + a.conditionType), a.setParent(t), 
                                t = a;
                                continue;

                              case "#endif":
                                n = (t = t.parent).childs[t.childs.length - 1], a.noCompile = n.noCompile, a.noCompile || (a.text = "//" + a.text), 
                                a.setParent(t);
                                continue;

                              case "#include":
                                u = Si.splitToWords(h, null);
                                var g = Si.includes[u[1]];
                                if (!g) throw "ShaderCompile error no this include file:" + u[1];
                                if ((_ = u[0].indexOf("?")) < 0) {
                                    a.setParent(t), h = g.getWith("with" == u[2] ? u[3] : null), this._compileToTree(a, h.split("\n"), 0, s, r), 
                                    a.text = "";
                                    continue;
                                }
                                a.setCondition(u[0].substr(_ + 1), Si.IFDEF_YES), a.text = g.getWith("with" == u[2] ? u[3] : null);
                                break;

                              case "#import":
                                l = (u = Si.splitToWords(h, null))[1], s.push({
                                    node: a,
                                    file: Si.includes[l],
                                    ofs: a.text.length
                                });
                                continue;
                            }
                        } else {
                            if ((n = t.childs[t.childs.length - 1]) && !n.name) {
                                s.length > 0 && Si.splitToWords(h, n), c = a, n.text += "\n" + h;
                                continue;
                            }
                            s.length > 0 && Si.splitToWords(h, a);
                        }
                        a.setParent(t);
                    }
                }
            }
        }, {
            key: "createShader",
            value: function createShader(t, e, i, s) {
                var r = {}, a = "";
                if (t) for (var n in t) {
                    a += "#define " + n + "\n", r[n] = !0;
                }
                var h = this._VS.toscript(r, []), o = this._PS.toscript(r, []);
                return (i || z.create)(a + h.join("\n"), a + o.join("\n"), e, this._nameMap, s);
            }
        } ], [ {
            key: "__init__",
            value: function __init__() {
                var t = g.instance;
                Si.shaderParamsMap = {
                    float: t.FLOAT,
                    int: t.INT,
                    bool: t.BOOL,
                    vec2: t.FLOAT_VEC2,
                    vec3: t.FLOAT_VEC3,
                    vec4: t.FLOAT_VEC4,
                    ivec2: t.INT_VEC2,
                    ivec3: t.INT_VEC3,
                    ivec4: t.INT_VEC4,
                    bvec2: t.BOOL_VEC2,
                    bvec3: t.BOOL_VEC3,
                    bvec4: t.BOOL_VEC4,
                    mat2: t.FLOAT_MAT2,
                    mat3: t.FLOAT_MAT3,
                    mat4: t.FLOAT_MAT4,
                    sampler2D: t.SAMPLER_2D,
                    samplerCube: t.SAMPLER_CUBE
                };
            }
        }, {
            key: "_parseOne",
            value: function _parseOne(t, e, i, s, r, a) {
                var n = {
                    type: Si.shaderParamsMap[i[s + 1]],
                    name: i[s + 2],
                    size: isNaN(parseInt(i[s + 3])) ? 1 : parseInt(i[s + 3])
                };
                return a && ("attribute" == r ? t.push(n) : e.push(n)), ":" == i[s + 3] && (n.type = i[s + 4], 
                s += 2), s += 2;
            }
        }, {
            key: "addInclude",
            value: function addInclude(t, e) {
                if (!e || 0 === e.length) throw new Error("add shader include file err:" + t);
                if (Si.includes[t]) throw new Error("add shader include file err, has add:" + t);
                Si.includes[t] = new Ri(e);
            }
        }, {
            key: "preGetParams",
            value: function preGetParams(t, e) {
                var i, s, r = [ t, e ], a = {}, n = [], h = [], o = {}, l = {};
                a.attributes = n, a.uniforms = h, a.defines = o;
                for (var _ = 0; _ < 2; _++) {
                    r[_] = r[_].replace(Si._removeAnnotation, "");
                    var u, c = r[_].match(Si._reg);
                    for (i = 0, s = c.length; i < s; i++) {
                        var d = c[i];
                        if ("attribute" == d || "uniform" == d) i = Si._parseOne(n, h, c, i, d, !0); else {
                            if ("#define" == d) {
                                l[d = c[++i]] = 1;
                                continue;
                            }
                            if ("#ifdef" == d) {
                                o[u = c[++i]] = o[u] || [];
                                for (i++; i < s; i++) {
                                    if ("attribute" == (d = c[i]) || "uniform" == d) i = Si._parseOne(n, h, c, i, d, !!l[u]); else if ("#else" == d) for (i++; i < s; i++) {
                                        if ("attribute" == (d = c[i]) || "uniform" == d) i = Si._parseOne(n, h, c, i, d, !l[u]); else if ("#endif" == d) break;
                                    }
                                }
                            }
                        }
                    }
                }
                return a;
            }
        }, {
            key: "splitToWords",
            value: function splitToWords(t, e) {
                for (var i, s, r = [], a = -1, n = 0, h = t.length; n < h; n++) {
                    if (i = t.charAt(n), " \t=+-*/&%!<>()'\",;".indexOf(i) >= 0) {
                        if (a >= 0 && n - a > 1 && (s = t.substr(a, n - a), r.push(s)), '"' == i || "'" == i) {
                            var o = t.indexOf(i, n + 1);
                            if (o < 0) throw "Sharder err:" + t;
                            r.push(t.substr(n + 1, o - n - 1)), n = o, a = -1;
                            continue;
                        }
                        "(" == i && e && r.length > 0 && (s = r[r.length - 1] + ";", "vec4;main;".indexOf(s) < 0 && (e.useFuns += s)), 
                        a = -1;
                    } else a < 0 && (a = n);
                }
                return a < h && h - a > 1 && (s = t.substr(a, h - a), r.push(s)), r;
            }
        } ]);
        return Si;
    }();
    Si.IFDEF_NO = 0, Si.IFDEF_YES = 1, Si.IFDEF_ELSE = 2, Si.IFDEF_PARENT = 3, Si._removeAnnotation = new RegExp("(/\\*([^*]|[\\r\\\n]|(\\*+([^*/]|[\\r\\n])))*\\*+/)|(//.*)", "g"), 
    Si._reg = new RegExp("(\".*\")|('.*')|([#\\w\\*-\\.+/()=<>{}\\\\]+)|([,;:\\\\])", "g"), 
    Si._splitToWordExps = new RegExp("[(\".*\")]+|[('.*')]+|([ \\t=\\+\\-*/&%!<>!%(),;])", "g"), 
    Si.includes = {}, Si._clearCR = new RegExp("\r", "g"), Si._splitToWordExps3 = new RegExp("[ \\t=\\+\\-*/&%!<>!%(),;\\|]", "g");
    var wi = /* */ function(_S11) {
        (0, _inherits2.default)(wi, _S11);
        var _super48 = _createSuper(wi);
        function wi() {
            var _this42;
            (0, _classCallCheck2.default)(this, wi);
            _this42 = _super48.call(this), _this42.worker = new Worker(wi.workerPath);
            var t = (0, _assertThisInitialized2.default)(_this42);
            _this42.worker.onmessage = function(e) {
                t.workerMessage(e.data);
            };
            return _this42;
        }
        (0, _createClass2.default)(wi, [ {
            key: "workerMessage",
            value: function workerMessage(t) {
                if (t) switch (t.type) {
                  case "Image":
                    this.imageLoaded(t);
                    break;

                  case "Disable":
                    wi.enable = !1;
                }
            }
        }, {
            key: "imageLoaded",
            value: function imageLoaded(t) {
                if (t.dataType && "imageBitmap" == t.dataType) {
                    var e = t.imageBitmap;
                    console.log("load:", t.url), this.event(t.url, e);
                } else this.event(t.url, null);
            }
        }, {
            key: "loadImage",
            value: function loadImage(t) {
                this.worker.postMessage(t);
            }
        }, {
            key: "_loadImage",
            value: function _loadImage(t) {
                var e = this;
                var i = e.type;
                if (this._useWorkerLoader && wi._enable) {
                    t = M.formatURL(t);
                    var s = function s(r) {
                        if (wi.I.off(t, e, s), r) {
                            var a = r;
                            "nativeimage" !== i && (a = new O()).loadImageSource(r), e.onLoaded(a);
                        } else wi._preLoadFun.call(e, t);
                    };
                    wi.I.on(t, e, s), wi.I.loadImage(t);
                } else wi._preLoadFun.call(e, t);
            }
        } ], [ {
            key: "__init__",
            value: function __init__() {
                return null == wi._preLoadFun && !!Worker && (wi._preLoadFun = ti.prototype._loadImage, 
                ti.prototype._loadImage = wi.prototype._loadImage, wi.I || (wi.I = new wi()), !0);
            }
        }, {
            key: "workerSupported",
            value: function workerSupported() {
                return !!Worker;
            }
        }, {
            key: "enableWorkerLoader",
            value: function enableWorkerLoader() {
                wi._tryEnabled || (wi.enable = !0, wi._tryEnabled = !0);
            }
        }, {
            key: "enable",
            set: function set(t) {
                wi._enable != t && (wi._enable = t, t && null == wi._preLoadFun && (wi._enable = wi.__init__()));
            },
            get: function get() {
                return wi._enable;
            }
        } ]);
        return wi;
    }(S);
    wi.workerPath = "libs/workerloader.js", wi._enable = !1, wi._tryEnabled = !1;
    var Mi = /* */ function() {
        function Mi() {
            (0, _classCallCheck2.default)(this, Mi);
        }
        (0, _createClass2.default)(Mi, null, [ {
            key: "__init__",
            value: function __init__() {
                Mi._style = se.document.body.style;
            }
        }, {
            key: "hide",
            value: function hide() {
                "none" != Mi.cursor && (Mi._preCursor = Mi.cursor, Mi.cursor = "none");
            }
        }, {
            key: "show",
            value: function show() {
                "none" == Mi.cursor && (Mi._preCursor ? Mi.cursor = Mi._preCursor : Mi.cursor = "auto");
            }
        }, {
            key: "cursor",
            set: function set(t) {
                Mi._style.cursor = t;
            },
            get: function get() {
                return Mi._style.cursor;
            }
        } ]);
        return Mi;
    }();
    var Ii = /* */ function(_bt4) {
        (0, _inherits2.default)(Ii, _bt4);
        var _super49 = _createSuper(Ii);
        function Ii(t) {
            var _this43;
            (0, _classCallCheck2.default)(this, Ii);
            _this43 = _super49.call(this, Ii.const_stride, 4 * t * Ii.const_stride, 4), _this43.canReuse = !0, 
            _this43.setAttributes(Ii._fixattriInfo), _this43.createQuadIB(t), _this43._quadNum = t;
            return _this43;
        }
        (0, _createClass2.default)(Ii, [ {
            key: "setMaxParticleNum",
            value: function setMaxParticleNum(t) {
                this._vb._resizeBuffer(4 * t * Ii.const_stride, !1), this.createQuadIB(t);
            }
        }, {
            key: "releaseMesh",
            value: function releaseMesh() {
                this._vb.setByteLength(0), this.vertNum = 0, this.indexNum = 0, Ii._POOL.push(this);
            }
        }, {
            key: "destroy",
            value: function destroy() {
                this._ib.destroy(), this._vb.destroy(), this._vb.deleteBuffer();
            }
        } ], [ {
            key: "__init__",
            value: function __init__() {
                var t = g.instance;
                Ii._fixattriInfo = [ t.FLOAT, 4, 0, t.FLOAT, 3, 16, t.FLOAT, 3, 28, t.FLOAT, 4, 40, t.FLOAT, 4, 56, t.FLOAT, 3, 72, t.FLOAT, 2, 84, t.FLOAT, 4, 92, t.FLOAT, 1, 108, t.FLOAT, 1, 112 ];
            }
        }, {
            key: "getAMesh",
            value: function getAMesh(t) {
                if (Ii._POOL.length) {
                    var e = Ii._POOL.pop();
                    return e.setMaxParticleNum(t), e;
                }
                return new Ii(t);
            }
        } ]);
        return Ii;
    }(bt);
    Ii.const_stride = 116, Ii._POOL = [];
    var Pi = /* */ function(_P3) {
        (0, _inherits2.default)(Pi, _P3);
        var _super50 = _createSuper(Pi);
        function Pi() {
            (0, _classCallCheck2.default)(this, Pi);
            return _super50.apply(this, arguments);
        }
        return Pi;
    }(P);
    Pi.create = function(e, i, s) {
        var r = new O(e, i, s, !1, !1);
        return r.wrapModeU = t.WarpMode.Clamp, r.wrapModeV = t.WarpMode.Clamp, r;
    };
    var Li = /* */ function() {
        function Li() {
            (0, _classCallCheck2.default)(this, Li);
        }
        (0, _createClass2.default)(Li, null, [ {
            key: "__init",
            value: function __init(t) {
                t.forEach(function(t) {
                    t.__init$ && t.__init$();
                });
            }
        }, {
            key: "init",
            value: function init(e, s) {
                if (!Li._isinit) {
                    Li._isinit = !0, ArrayBuffer.prototype.slice || (ArrayBuffer.prototype.slice = Li._arrayBufferSlice), 
                    se.__init__();
                    var a = se.mainCanvas = new be(!0), n = a.source.style;
                    for (var _len = arguments.length, r = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                        r[_key - 2] = arguments[_key];
                    }
                    if (n.position = "absolute", n.top = n.left = "0px", n.background = "#000000", se.onKGMiniGame || se.onAlipayMiniGame || se.container.appendChild(a.source), 
                    se.canvas = new be(!0), se.context = se.canvas.getContext("2d"), se.supportWebAudio = Ze.__init__(), 
                    se.supportLocalStorage = ri.__init__(), Li.systemTimer = new xi(!1), t.systemTimer = xi.gSysTimer = Li.systemTimer, 
                    Li.startTimer = new xi(!1), Li.physicsTimer = new xi(!1), Li.updateTimer = new xi(!1), 
                    Li.lateTimer = new xi(!1), Li.timer = new xi(!1), t.startTimer = i.startTimer = Li.startTimer, 
                    t.lateTimer = i.lateTimer = Li.lateTimer, t.updateTimer = i.updateTimer = Li.updateTimer, 
                    i.systemTimer = Li.systemTimer, t.timer = i.timer = Li.timer, t.physicsTimer = i.physicsTimer = Li.physicsTimer, 
                    Li.loader = new ii(), i.Laya = Li, t.loader = i.loader = Li.loader, pi.__init__(), 
                    fi.__init(), Mi.__init__(), le.inner_enable(), r) for (var h = 0, o = r.length; h < o; h++) {
                        r[h] && r[h].enable && r[h].enable();
                    }
                    return i.Render.isConchApp && Li.enableNative(), Li.enableWebGLPlus(), xe.beginCheck(), 
                    t.stage = Li.stage = new Ve(), i.stage = Li.stage, $.gStage = Li.stage, M.rootPath = M._basePath = Li._getUrlPath(), 
                    St.__int__(), Mt.__init__(), wt.__init__(), Li.render = new ue(0, 0, se.mainCanvas), 
                    t.render = Li.render, Li.stage.size(e, s), window.stage = Li.stage, R.__init__(), 
                    Ii.__init__(), Si.__init__(), Re.__init__(), Xe.__init__(), Ue.instance.__init__(Li.stage, ue.canvas), 
                    Oe.__init__(), Ze.autoStopMusic = !0, X._StatRender = new vi(), j._initone(V.TEXTURE2D, Ci), 
                    j._initone(V.TEXTURE2D | V.FILTERGLOW, Ci), j._initone(V.PRIMITIVE, Ai), j._initone(V.SKINMESH, Ei), 
                    ue.canvas;
                }
            }
        }, {
            key: "_getUrlPath",
            value: function _getUrlPath() {
                return M.getPath(location.protocol + "//" + location.host + location.pathname);
            }
        }, {
            key: "_arrayBufferSlice",
            value: function _arrayBufferSlice(t, e) {
                var i = new Uint8Array(this, t, e - t), s = new Uint8Array(i.length);
                return s.set(i), s.buffer;
            }
        }, {
            key: "alertGlobalError",
            value: function alertGlobalError(t) {
                var e = 0;
                se.window.onerror = t ? function(t, i, s, r, a) {
                    e++ < 5 && a && this.alert("出错啦，请把此信息截图给研发商\n" + t + "\n" + a.stack);
                } : null;
            }
        }, {
            key: "_runScript",
            value: function _runScript(t) {
                return se.window[Li._evcode](t);
            }
        }, {
            key: "enableDebugPanel",
            value: function enableDebugPanel() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "libs/laya.debugtool.js";
                if (window.Laya.DebugPanel) window.Laya.DebugPanel.enable(); else {
                    var e = se.createElement("script");
                    e.onload = function() {
                        window.Laya.DebugPanel.enable();
                    }, e.src = t, se.document.body.appendChild(e);
                }
            }
        }, {
            key: "enableWebGLPlus",
            value: function enableWebGLPlus() {
                R.__init_native();
            }
        }, {
            key: "enableNative",
            value: function enableNative() {
                Li.isNativeRender_enable || (Li.isNativeRender_enable = !0, ue.supportWebGLPlusRendering && (z.prototype.uploadTexture2D = function(t) {
                    var e = g.instance;
                    e.bindTexture(e.TEXTURE_2D, t);
                }), U.width = se.window.innerWidth, U.height = se.window.innerHeight, se.measureText = function(t, e) {
                    return window.conchTextCanvas.font = e, window.conchTextCanvas.measureText(t);
                }, Ve.clear = function(t) {
                    he.set2DRenderConfig();
                    var e = J.create(t).arrColor, i = g.instance;
                    e && i.clearColor(e[0], e[1], e[2], e[3]), i.clear(i.COLOR_BUFFER_BIT | i.DEPTH_BUFFER_BIT | i.STENCIL_BUFFER_BIT), 
                    U.clear();
                }, De.drawToCanvas = De.drawToTexture = function(t, e, i, s, r, a) {
                    r -= t.x, a -= t.y, r |= 0, a |= 0, i |= 0, s |= 0;
                    var n = new be(!1), h = n.getContext("2d");
                    return n.size(i, s), h.asBitmap = !0, h._targets.start(), Re.renders[e]._fun(t, h, r, a), 
                    h.flush(), h._targets.end(), h._targets.restore(), n;
                }, Object.defineProperty(G.prototype, "uv", {
                    get: function get() {
                        return this._uv;
                    },
                    set: function set(t) {
                        this._uv = t;
                    }
                }), be.prototype.getTexture = function() {
                    return this._texture || (this._texture = this.context._targets, this._texture.uv = G.flipyuv, 
                    this._texture.bitmap = this._texture), this._texture;
                });
            }
        } ]);
        return Li;
    }();
    Li.stage = null, Li.systemTimer = null, Li.startTimer = null, Li.physicsTimer = null, 
    Li.updateTimer = null, Li.lateTimer = null, Li.timer = null, Li.loader = null, Li.version = "2.12.0", 
    Li._isinit = !1, Li.isWXOpenDataContext = !1, Li.isWXPosMsg = !1, Li.__classmap = null, 
    Li.Config = e, Li.TextRender = ne, Li.EventDispatcher = S, Li.SoundChannel = He, 
    Li.Stage = Ve, Li.Render = ue, Li.Browser = se, Li.Sprite = De, Li.Node = Le, Li.Context = he, 
    Li.WebGL = le, Li.Handler = b, Li.RunDriver = We, Li.Utils = $, Li.Input = Oe, Li.Loader = ti, 
    Li.LocalStorage = ri, Li.SoundManager = Ze, Li.URL = M, Li.Event = Qt, Li.Matrix = p, 
    Li.HTMLImage = Pi, Li.Laya = Li, Li._evcode = "eval", Li.isNativeRender_enable = !1, 
    Li.__classmap = i.__classMap, i.Timer = xi, i.Dragging = li, i.GraphicsBounds = fe, 
    i.Sprite = De, i.TextRender = ne, i.Loader = ti, i.TTFLoader = ni, i.WebAudioSound = qe, 
    i.SoundManager = Ze, i.ShaderCompile = Si, i.ClassUtils = we, i.SceneUtils = fi, 
    i.Context = he, i.Render = ue, i.MouseManager = Ue, i.Text = Fe, i.Browser = se, 
    i.WebGL = le, i.AudioSound = Ke, i.Pool = s, i.Utils = $, i.Graphics = Ee, i.Submit = Vt, 
    i.Stage = Ve, i.Resource = I, i.WorkerLoader = wi;
    var Di = window._layalibs;
    if (Di) {
        Di.sort(function(t, e) {
            return t.i - e.i;
        });
        for (var Bi = 0; Bi < Di.length; Bi++) {
            Di[Bi].f(window, window.document, Li);
        }
    }
    var Fi = window;
    Fi.Laya ? (Fi.Laya.Laya = Li, Object.assign(Fi.Laya, Li)) : Fi.Laya = Li;
    var Oi, Ni = Li.__init, Ui = Li.init, Gi = Li.version, ki = Li.alertGlobalError, Wi = Li.enableDebugPanel;
    function _static(t, e) {
        for (var i = 0, s = e.length; i < s; i += 2) {
            if ("length" == e[i]) t.length = e[i + 1].call(t); else {
                var tmp = function tmp() {
                    var s = e[i], r = e[i + 1];
                    Object.defineProperty(t, s, {
                        get: function get() {
                            return delete this[s], this[s] = r.call(this);
                        },
                        set: function set(t) {
                            delete this[s], this[s] = t;
                        },
                        enumerable: !0,
                        configurable: !0
                    });
                };
                tmp();
            }
        }
    }
    var Yi = /* */ function(_i12) {
        (0, _inherits2.default)(Yi, _i12);
        var _super51 = _createSuper(Yi);
        function Yi() {
            (0, _classCallCheck2.default)(this, Yi);
            return _super51.apply(this, arguments);
        }
        (0, _createClass2.default)(Yi, [ {
            key: "_onAwake",
            value: function _onAwake() {
                this.onAwake(), this.onStart !== Yi.prototype.onStart && i.startTimer.callLater(this, this.onStart);
            }
        }, {
            key: "_onEnable",
            value: function _onEnable() {
                var t = Yi.prototype;
                this.onTriggerEnter !== t.onTriggerEnter && this.owner.on(Qt.TRIGGER_ENTER, this, this.onTriggerEnter), 
                this.onTriggerStay !== t.onTriggerStay && this.owner.on(Qt.TRIGGER_STAY, this, this.onTriggerStay), 
                this.onTriggerExit !== t.onTriggerExit && this.owner.on(Qt.TRIGGER_EXIT, this, this.onTriggerExit), 
                this.onMouseDown !== t.onMouseDown && this.owner.on(Qt.MOUSE_DOWN, this, this.onMouseDown), 
                this.onMouseUp !== t.onMouseUp && this.owner.on(Qt.MOUSE_UP, this, this.onMouseUp), 
                this.onClick !== t.onClick && this.owner.on(Qt.CLICK, this, this.onClick), this.onStageMouseDown !== t.onStageMouseDown && i.stage.on(Qt.MOUSE_DOWN, this, this.onStageMouseDown), 
                this.onStageMouseUp !== t.onStageMouseUp && i.stage.on(Qt.MOUSE_UP, this, this.onStageMouseUp), 
                this.onStageClick !== t.onStageClick && i.stage.on(Qt.CLICK, this, this.onStageClick), 
                this.onStageMouseMove !== t.onStageMouseMove && i.stage.on(Qt.MOUSE_MOVE, this, this.onStageMouseMove), 
                this.onDoubleClick !== t.onDoubleClick && this.owner.on(Qt.DOUBLE_CLICK, this, this.onDoubleClick), 
                this.onRightClick !== t.onRightClick && this.owner.on(Qt.RIGHT_CLICK, this, this.onRightClick), 
                this.onMouseMove !== t.onMouseMove && this.owner.on(Qt.MOUSE_MOVE, this, this.onMouseMove), 
                this.onMouseOver !== t.onMouseOver && this.owner.on(Qt.MOUSE_OVER, this, this.onMouseOver), 
                this.onMouseOut !== t.onMouseOut && this.owner.on(Qt.MOUSE_OUT, this, this.onMouseOut), 
                this.onKeyDown !== t.onKeyDown && i.stage.on(Qt.KEY_DOWN, this, this.onKeyDown), 
                this.onKeyPress !== t.onKeyPress && i.stage.on(Qt.KEY_PRESS, this, this.onKeyPress), 
                this.onKeyUp !== t.onKeyUp && i.stage.on(Qt.KEY_UP, this, this.onKeyUp), this.onUpdate !== t.onUpdate && i.updateTimer.frameLoop(1, this, this.onUpdate), 
                this.onLateUpdate !== t.onLateUpdate && i.lateTimer.frameLoop(1, this, this.onLateUpdate), 
                this.onPreRender !== t.onPreRender && i.lateTimer.frameLoop(1, this, this.onPreRender), 
                this.onEnable();
            }
        }, {
            key: "_onDisable",
            value: function _onDisable() {
                this.owner.offAllCaller(this), i.stage.offAllCaller(this), i.startTimer.clearAll(this), 
                i.updateTimer.clearAll(this), i.lateTimer.clearAll(this);
            }
        }, {
            key: "_isScript",
            value: function _isScript() {
                return !0;
            }
        }, {
            key: "_onDestroy",
            value: function _onDestroy() {
                this.onDestroy();
            }
        }, {
            key: "onAwake",
            value: function onAwake() {}
        }, {
            key: "onEnable",
            value: function onEnable() {}
        }, {
            key: "onStart",
            value: function onStart() {}
        }, {
            key: "onTriggerEnter",
            value: function onTriggerEnter(t, e, i) {}
        }, {
            key: "onTriggerStay",
            value: function onTriggerStay(t, e, i) {}
        }, {
            key: "onTriggerExit",
            value: function onTriggerExit(t, e, i) {}
        }, {
            key: "onMouseDown",
            value: function onMouseDown(t) {}
        }, {
            key: "onMouseUp",
            value: function onMouseUp(t) {}
        }, {
            key: "onClick",
            value: function onClick(t) {}
        }, {
            key: "onStageMouseDown",
            value: function onStageMouseDown(t) {}
        }, {
            key: "onStageMouseUp",
            value: function onStageMouseUp(t) {}
        }, {
            key: "onStageClick",
            value: function onStageClick(t) {}
        }, {
            key: "onStageMouseMove",
            value: function onStageMouseMove(t) {}
        }, {
            key: "onDoubleClick",
            value: function onDoubleClick(t) {}
        }, {
            key: "onRightClick",
            value: function onRightClick(t) {}
        }, {
            key: "onMouseMove",
            value: function onMouseMove(t) {}
        }, {
            key: "onMouseOver",
            value: function onMouseOver(t) {}
        }, {
            key: "onMouseOut",
            value: function onMouseOut(t) {}
        }, {
            key: "onKeyDown",
            value: function onKeyDown(t) {}
        }, {
            key: "onKeyPress",
            value: function onKeyPress(t) {}
        }, {
            key: "onKeyUp",
            value: function onKeyUp(t) {}
        }, {
            key: "onUpdate",
            value: function onUpdate() {}
        }, {
            key: "onLateUpdate",
            value: function onLateUpdate() {}
        }, {
            key: "onPreRender",
            value: function onPreRender() {}
        }, {
            key: "onPostRender",
            value: function onPostRender() {}
        }, {
            key: "onDisable",
            value: function onDisable() {}
        }, {
            key: "onDestroy",
            value: function onDestroy() {}
        }, {
            key: "isSingleton",
            get: function get() {
                return !1;
            }
        } ]);
        return Yi;
    }(_i);
    var Vi = /* */ function(_di) {
        (0, _inherits2.default)(Vi, _di);
        var _super52 = _createSuper(Vi);
        function Vi() {
            var _this44;
            (0, _classCallCheck2.default)(this, Vi);
            _this44 = _super52.apply(this, arguments), _this44._nodeIDAniDic = {};
            return _this44;
        }
        (0, _createClass2.default)(Vi, [ {
            key: "_parseNodeList",
            value: function _parseNodeList(t) {
                this._nodeList || (this._nodeList = []), this._nodeDefaultProps[t.compId] = t.props, 
                t.compId && this._nodeList.push(t.compId);
                var e = t.child;
                if (e) {
                    var i, s = e.length;
                    for (i = 0; i < s; i++) {
                        this._parseNodeList(e[i]);
                    }
                }
            }
        }, {
            key: "_calGraphicData",
            value: function _calGraphicData(t) {
                var e;
                if (this._setUp(null, t), this._createGraphicData(), this._nodeIDAniDic) for (e in this._nodeIDAniDic) {
                    this._nodeIDAniDic[e] = null;
                }
            }
        }, {
            key: "_createGraphicData",
            value: function _createGraphicData() {
                var t, e, i = [], s = this.count, r = this._usedFrames;
                for (r || (r = []), t = 0; t < s; t++) {
                    !r[t] && e || (e = this._createFrameGraphic(t)), i.push(e);
                }
                this._gList = i;
            }
        }, {
            key: "_createFrameGraphic",
            value: function _createFrameGraphic(t) {
                var e = new Ee();
                return Vi._rootMatrix || (Vi._rootMatrix = new p()), this._updateNodeGraphic(this._rootNode, t, Vi._rootMatrix, e), 
                e;
            }
        }, {
            key: "_updateNodeGraphic",
            value: function _updateNodeGraphic(t, e, i, s) {
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
                var a, n, h;
                (a = this._nodeGDic[t.compId] = this._getNodeGraphicData(t.compId, e, this._nodeGDic[t.compId])).resultTransform || (a.resultTransform = new p()), 
                n = a.resultTransform, p.mul(a.transform, i, n);
                var o = a.alpha * r;
                if (!(o < .01)) {
                    a.skin && (h = this._getTextureByUrl(a.skin)) && (n._checkTransform() ? (s.drawTexture(h, 0, 0, a.width, a.height, n, o), 
                    a.resultTransform = null) : s.drawTexture(h, n.tx, n.ty, a.width, a.height, null, o));
                    var l, _, u = t.child;
                    if (u) for (_ = u.length, l = 0; l < _; l++) {
                        this._updateNodeGraphic(u[l], e, n, s, o);
                    }
                }
            }
        }, {
            key: "_updateNoChilds",
            value: function _updateNoChilds(t, e) {
                if (t.skin) {
                    var i = this._getTextureByUrl(t.skin);
                    if (i) {
                        var s = t.transform;
                        s._checkTransform(), !s._bTransform ? e.drawTexture(i, s.tx, s.ty, t.width, t.height, null, t.alpha) : e.drawTexture(i, 0, 0, t.width, t.height, s.clone(), t.alpha);
                    }
                }
            }
        }, {
            key: "_updateNodeGraphic2",
            value: function _updateNodeGraphic2(t, e, i) {
                var s;
                if (s = this._nodeGDic[t.compId] = this._getNodeGraphicData(t.compId, e, this._nodeGDic[t.compId]), 
                t.child) {
                    var r, a, n, h = s.transform;
                    h._checkTransform(), a = (r = !h._bTransform) && (0 != h.tx || 0 != h.ty), (n = h._bTransform || 1 != s.alpha) && i.save(), 
                    1 != s.alpha && i.alpha(s.alpha), r ? a && i.translate(h.tx, h.ty) : i.transform(h.clone());
                    var o, l, _, u = t.child;
                    if (s.skin && (o = this._getTextureByUrl(s.skin)) && i.drawImage(o, 0, 0, s.width, s.height), 
                    u) for (_ = u.length, l = 0; l < _; l++) {
                        this._updateNodeGraphic2(u[l], e, i);
                    }
                    n ? i.restore() : r ? a && i.translate(-h.tx, -h.ty) : i.transform(h.clone().invert());
                } else this._updateNoChilds(s, i);
            }
        }, {
            key: "_calculateKeyFrames",
            value: function _calculateKeyFrames(t) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(Vi.prototype), "_calculateKeyFrames", this).call(this, t), 
                this._nodeIDAniDic[t.target] = t;
            }
        }, {
            key: "getNodeDataByID",
            value: function getNodeDataByID(t) {
                return this._nodeIDAniDic[t];
            }
        }, {
            key: "_getParams",
            value: function _getParams(t, e, i, s) {
                var r = Vi._temParam;
                r.length = e.length;
                var a, n = e.length;
                for (a = 0; a < n; a++) {
                    r[a] = this._getObjVar(t, e[a][0], i, e[a][1], s);
                }
                return r;
            }
        }, {
            key: "_getObjVar",
            value: function _getObjVar(t, e, i, s, r) {
                if (e in t) {
                    var a = t[e];
                    return i >= a.length && (i = a.length - 1), t[e][i];
                }
                return e in r ? r[e] : s;
            }
        }, {
            key: "_getNodeGraphicData",
            value: function _getNodeGraphicData(t, e, i) {
                i || (i = new Xi()), i.transform ? i.transform.identity() : i.transform = new p();
                var s = this.getNodeDataByID(t);
                if (!s) return i;
                var r, a, n, h = s.frames, o = this._getParams(h, Vi._drawTextureCmd, e, this._nodeDefaultProps[t]), l = o[0], _ = o[5], u = o[6], c = o[13], d = o[14], f = o[7], m = o[8], g = o[9], T = o[11], v = o[12];
                r = o[3], a = o[4], 0 != r && 0 != a || (l = null), -1 == r && (r = 0), -1 == a && (a = 0), 
                i.skin = l, i.width = r, i.height = a, l && ((n = this._getTextureByUrl(l)) ? (r || (r = n.sourceWidth), 
                a || (a = n.sourceHeight)) : console.warn("lost skin:", l, ",you may load pics first")), 
                i.alpha = o[10];
                var x = i.transform;
                0 != c && (_ = c * r), 0 != d && (u = d * a), 0 == _ && 0 == u || x.translate(-_, -u);
                var y = null;
                if (g || 1 !== f || 1 !== m || T || v) {
                    (y = Vi._tempMt).identity(), y._bTransform = !0;
                    var E = .0174532922222222 * (g - T), A = .0174532922222222 * (g + v), C = Math.cos(A), R = Math.sin(A), b = Math.sin(E), S = Math.cos(E);
                    y.a = f * C, y.b = f * R, y.c = -m * b, y.d = m * S, y.tx = y.ty = 0;
                }
                return y && (x = p.mul(x, y, x)), x.translate(o[1], o[2]), i;
            }
        }, {
            key: "_getTextureByUrl",
            value: function _getTextureByUrl(t) {
                return ti.getRes(t);
            }
        }, {
            key: "setAniData",
            value: function setAniData(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                if (t.animations) {
                    this._nodeDefaultProps = {}, this._nodeGDic = {}, this._nodeList && (this._nodeList.length = 0), 
                    this._rootNode = t, this._parseNodeList(t);
                    var i, s, r = {}, a = [], n = t.animations, h = n.length;
                    for (i = 0; i < h; i++) {
                        if (s = n[i], this._labels = null, (!e || e == s.name) && s) {
                            try {
                                this._calGraphicData(s);
                            } catch (t) {
                                console.warn("parse animation fail:" + s.name + ",empty animation created"), this._gList = [];
                            }
                            var o = {};
                            o.interval = 1e3 / s.frameRate, o.frames = this._gList, o.labels = this._labels, 
                            o.name = s.name, a.push(o), r[s.name] = o;
                        }
                    }
                    this.animationList = a, this.animationDic = r;
                }
                Vi._temParam.length = 0;
            }
        }, {
            key: "parseByData",
            value: function parseByData(t) {
                var e, i;
                e = t.nodeRoot, i = t.aniO, delete t.nodeRoot, delete t.aniO, this._nodeDefaultProps = {}, 
                this._nodeGDic = {}, this._nodeList && (this._nodeList.length = 0), this._rootNode = e, 
                this._parseNodeList(e), this._labels = null;
                try {
                    this._calGraphicData(i);
                } catch (t) {
                    console.warn("parse animation fail:" + i.name + ",empty animation created"), this._gList = [];
                }
                var s = t;
                return s.interval = 1e3 / i.frameRate, s.frames = this._gList, s.labels = this._labels, 
                s.name = i.name, s;
            }
        }, {
            key: "setUpAniData",
            value: function setUpAniData(t) {
                if (t.animations) {
                    var e, i, s = {}, r = [], a = t.animations, n = a.length;
                    for (e = 0; e < n; e++) {
                        if (i = a[e]) {
                            var h = {};
                            h.name = i.name, h.aniO = i, h.nodeRoot = t, r.push(h), s[i.name] = h;
                        }
                    }
                    this.animationList = r, this.animationDic = s;
                }
            }
        }, {
            key: "_clear",
            value: function _clear() {
                this.animationList = null, this.animationDic = null, this._gList = null, this._nodeGDic = null;
            }
        } ], [ {
            key: "parseAnimationByData",
            value: function parseAnimationByData(t) {
                var e;
                return Vi._I || (Vi._I = new Vi()), e = Vi._I.parseByData(t), Vi._I._clear(), e;
            }
        }, {
            key: "parseAnimationData",
            value: function parseAnimationData(t) {
                var e;
                return Vi._I || (Vi._I = new Vi()), Vi._I.setUpAniData(t), (e = {}).animationList = Vi._I.animationList, 
                e.animationDic = Vi._I.animationDic, Vi._I._clear(), e;
            }
        } ]);
        return Vi;
    }(di);
    Vi._drawTextureCmd = [ [ "skin", null ], [ "x", 0 ], [ "y", 0 ], [ "width", -1 ], [ "height", -1 ], [ "pivotX", 0 ], [ "pivotY", 0 ], [ "scaleX", 1 ], [ "scaleY", 1 ], [ "rotation", 0 ], [ "alpha", 1 ], [ "skewX", 0 ], [ "skewY", 0 ], [ "anchorX", 0 ], [ "anchorY", 0 ] ], 
    Vi._temParam = [], Vi._tempMt = new p();
    var Xi = function Xi() {
        (0, _classCallCheck2.default)(this, Xi);
        this.alpha = 1;
    };
    var Hi = /* */ function(_ui2) {
        (0, _inherits2.default)(Hi, _ui2);
        var _super53 = _createSuper(Hi);
        function Hi() {
            var _this45;
            (0, _classCallCheck2.default)(this, Hi);
            _this45 = _super53.call(this), _this45._setControlNode((0, _assertThisInitialized2.default)(_this45));
            return _this45;
        }
        (0, _createClass2.default)(Hi, [ {
            key: "destroy",
            value: function destroy() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                this.stop(), (0, _get2.default)((0, _getPrototypeOf2.default)(Hi.prototype), "destroy", this).call(this, t), 
                this._frames = null, this._labels = null;
            }
        }, {
            key: "play",
            value: function play() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
                i && this._setFramesFromCache(i, !0), (0, _get2.default)((0, _getPrototypeOf2.default)(Hi.prototype), "play", this).call(this, t, e, i);
            }
        }, {
            key: "_setFramesFromCache",
            value: function _setFramesFromCache(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
                if (this._url && (t = this._url + "#" + t), t && Hi.framesMap[t]) {
                    var i = Hi.framesMap[t];
                    return i instanceof Array ? (this._frames = Hi.framesMap[t], this._count = this._frames.length) : (i.nodeRoot && (Hi.framesMap[t] = Vi.parseAnimationByData(i), 
                    i = Hi.framesMap[t]), this._frames = i.frames, this._count = this._frames.length, 
                    this._frameRateChanged || (this._interval = i.interval), this._labels = this._copyLabels(i.labels)), 
                    !0;
                }
                return e && console.log("ani not found:", t), !1;
            }
        }, {
            key: "_copyLabels",
            value: function _copyLabels(t) {
                if (!t) return null;
                var e, i;
                for (i in e = {}, t) {
                    e[i] = $.copyArray([], t[i]);
                }
                return e;
            }
        }, {
            key: "_frameLoop",
            value: function _frameLoop() {
                this._visible && this._style.alpha > .01 && this._frames && (0, _get2.default)((0, 
                _getPrototypeOf2.default)(Hi.prototype), "_frameLoop", this).call(this);
            }
        }, {
            key: "_displayToIndex",
            value: function _displayToIndex(t) {
                this._frames && (this.graphics = this._frames[t]);
            }
        }, {
            key: "clear",
            value: function clear() {
                return (0, _get2.default)((0, _getPrototypeOf2.default)(Hi.prototype), "clear", this).call(this), 
                this.stop(), this.graphics = null, this._frames = null, this._labels = null, this;
            }
        }, {
            key: "loadImages",
            value: function loadImages(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
                return this._url = "", this._setFramesFromCache(e) || (this.frames = Hi.framesMap[e] ? Hi.framesMap[e] : Hi.createFrames(t, e)), 
                this;
            }
        }, {
            key: "loadAtlas",
            value: function loadAtlas(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
                this._url = "";
                var r = this;
                if (!r._setFramesFromCache(s)) {
                    var onLoaded = function onLoaded(i) {
                        t === i && (r.frames = Hi.framesMap[s] ? Hi.framesMap[s] : Hi.createFrames(t, s), 
                        e && e.run());
                    };
                    ti.getAtlas(t) ? onLoaded(t) : i.loader.load(t, b.create(null, onLoaded, [ t ]), null, ti.ATLAS);
                }
                return this;
            }
        }, {
            key: "loadAnimation",
            value: function loadAnimation(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                this._url = t;
                return this._actionName || (this._actionName = ""), this._setFramesFromCache(this._actionName) ? (this._setFramesFromCache(this._actionName, !0), 
                this.index = 0, e && e.run()) : !s || ti.getAtlas(s) ? this._loadAnimationData(t, e, s) : i.loader.load(s, b.create(this, this._loadAnimationData, [ t, e, s ]), null, ti.ATLAS), 
                this;
            }
        }, {
            key: "_loadAnimationData",
            value: function _loadAnimationData(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                if (!s || ti.getAtlas(s)) {
                    var r = this;
                    ti.getRes(t) ? onLoaded(t) : i.loader.load(t, b.create(null, onLoaded, [ t ]), null, ti.JSON);
                } else console.warn("atlas load fail:" + s);
                function onLoaded(i) {
                    if (ti.getRes(i)) {
                        if (t === i) {
                            var s;
                            if (Hi.framesMap[t + "#"]) r._setFramesFromCache(r._actionName, !0), r.index = 0, 
                            r._resumePlay(); else {
                                var a = Vi.parseAnimationData(ti.getRes(t));
                                if (!a) return;
                                var n, h, o = a.animationList, l = o.length;
                                for (n = 0; n < l; n++) {
                                    s = o[n], Hi.framesMap[t + "#" + s.name] = s, h || (h = s);
                                }
                                h && (Hi.framesMap[t + "#"] = h, r._setFramesFromCache(r._actionName, !0), r.index = 0), 
                                r._resumePlay();
                            }
                            e && e.run();
                        }
                        ti.clearRes(t);
                    } else Hi.framesMap[t + "#"] && (r._setFramesFromCache(r._actionName, !0), r.index = 0, 
                    r._resumePlay(), e && e.run());
                }
            }
        }, {
            key: "frames",
            get: function get() {
                return this._frames;
            },
            set: function set(t) {
                this._frames = t, t && (this._count = t.length, this._actionName && this._setFramesFromCache(this._actionName, !0), 
                this.index = this._index);
            }
        }, {
            key: "source",
            set: function set(t) {
                t.indexOf(".ani") > -1 ? this.loadAnimation(t) : t.indexOf(".json") > -1 || t.indexOf("als") > -1 || t.indexOf("atlas") > -1 ? this.loadAtlas(t) : this.loadImages(t.split(","));
            }
        }, {
            key: "autoAnimation",
            set: function set(t) {
                this.play(0, !0, t);
            }
        }, {
            key: "autoPlay",
            set: function set(t) {
                t ? this.play() : this.stop();
            }
        } ], [ {
            key: "createFrames",
            value: function createFrames(t, e) {
                var i;
                if ("string" == typeof t) {
                    var s = ti.getAtlas(t);
                    if (s && s.length) {
                        i = [];
                        for (var r = 0, a = s.length; r < a; r++) {
                            var n = new Ee();
                            n.drawImage(ti.getRes(s[r]), 0, 0), i.push(n);
                        }
                    }
                } else if (t instanceof Array) for (i = [], r = 0, a = t.length; r < a; r++) {
                    (n = new Ee()).loadImage(t[r], 0, 0), i.push(n);
                }
                return e && (Hi.framesMap[e] = i), i;
            }
        }, {
            key: "clearCache",
            value: function clearCache(t) {
                var e, i = Hi.framesMap, s = t + "#";
                for (e in i) {
                    e !== t && 0 !== e.indexOf(s) || delete Hi.framesMap[e];
                }
            }
        } ]);
        return Hi;
    }(ui);
    Hi.framesMap = {}, i.regClass(Hi), we.regClass("laya.display.Animation", Hi), we.regClass("Laya.Animation", Hi);
    var zi = /* */ function(_di2) {
        (0, _inherits2.default)(zi, _di2);
        var _super54 = _createSuper(zi);
        function zi() {
            var _this46;
            (0, _classCallCheck2.default)(this, zi);
            _this46 = _super54.apply(this, arguments), _this46._initData = {};
            return _this46;
        }
        (0, _createClass2.default)(zi, [ {
            key: "_onOtherBegin",
            value: function _onOtherBegin(t) {
                t !== this && this.stop();
            }
        }, {
            key: "_addEvent",
            value: function _addEvent() {
                this._target && this._playEvent && (this._setControlNode(this._target), this._target.on(this._playEvent, this, this._onPlayAction));
            }
        }, {
            key: "_onPlayAction",
            value: function _onPlayAction() {
                this.play(0, !1);
            }
        }, {
            key: "play",
            value: function play() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
                this._target && (this._target.event(zi.EFFECT_BEGIN, [ this ]), this._recordInitData(), 
                (0, _get2.default)((0, _getPrototypeOf2.default)(zi.prototype), "play", this).call(this, t, e, i));
            }
        }, {
            key: "_recordInitData",
            value: function _recordInitData() {
                var t, e, i;
                if (this._aniKeys) for (e = this._aniKeys.length, t = 0; t < e; t++) {
                    i = this._aniKeys[t], this._initData[i] = this._target[i];
                }
            }
        }, {
            key: "_displayToIndex",
            value: function _displayToIndex(t) {
                if (this._animationData) {
                    t < 0 && (t = 0), t > this._count && (t = this._count);
                    var e, i = this._animationData.nodes, s = i.length;
                    for (s = s > 1 ? 1 : s, e = 0; e < s; e++) {
                        this._displayNodeToFrame(i[e], t);
                    }
                }
            }
        }, {
            key: "_displayNodeToFrame",
            value: function _displayNodeToFrame(t, e) {
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                if (this._target) {
                    var s, r, a, n, h, o, l, _, u, c = this._target, d = t.frames, p = t.keys, f = p.length, m = t.secondFrames;
                    for (n = 0; n < f; n++) {
                        r = d[s = p[n]], -1 == (h = m[s]) ? a = this._initData[s] : e < h ? (_ = (l = t.keyframes[s])[0]).tween ? (null == (o = hi[_.tweenMethod]) && (o = hi.linearNone), 
                        u = l[1], a = o(e, this._initData[s], u.value - this._initData[s], u.index)) : a = this._initData[s] : a = r.length > e ? r[e] : r[r.length - 1], 
                        c[s] = a;
                    }
                }
            }
        }, {
            key: "_calculateKeyFrames",
            value: function _calculateKeyFrames(t) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(zi.prototype), "_calculateKeyFrames", this).call(this, t);
                var e, i, s = t.keyframes, r = (t.target, {});
                for (e in t.secondFrames = r, s) {
                    (i = s[e]).length <= 1 ? r[e] = -1 : r[e] = i[1].index;
                }
            }
        }, {
            key: "target",
            set: function set(t) {
                this._target && this._target.off(zi.EFFECT_BEGIN, this, this._onOtherBegin), this._target = t, 
                this._target && this._target.on(zi.EFFECT_BEGIN, this, this._onOtherBegin), this._addEvent();
            },
            get: function get() {
                return this._target;
            }
        }, {
            key: "playEvent",
            set: function set(t) {
                this._playEvent = t, t && this._addEvent();
            }
        }, {
            key: "effectClass",
            set: function set(t) {
                if (this._effectClass = we.getClass(t), this._effectClass) {
                    var e = this._effectClass.uiView;
                    if (e) {
                        var i = e.animations;
                        if (i && i[0]) {
                            var s = i[0];
                            this._setUp({}, s), s.nodes && s.nodes[0] && (this._aniKeys = s.nodes[0].keys);
                        }
                    }
                }
            }
        }, {
            key: "effectData",
            set: function set(t) {
                if (t) {
                    var e = t.animations;
                    if (e && e[0]) {
                        var i = e[0];
                        this._setUp({}, i), i.nodes && i.nodes[0] && (this._aniKeys = i.nodes[0].keys);
                    }
                }
            }
        } ]);
        return zi;
    }(di);
    zi.EFFECT_BEGIN = "effectbegin", we.regClass("laya.display.EffectAnimation", zi), 
    we.regClass("Laya.EffectAnimation", zi);
    var Ki = /* */ function(_S12) {
        (0, _inherits2.default)(Ki, _S12);
        var _super55 = _createSuper(Ki);
        function Ki() {
            var _this47;
            (0, _classCallCheck2.default)(this, Ki);
            _this47 = _super55.call(this), _this47._completeHandler = new b((0, _assertThisInitialized2.default)(_this47), _this47.onOneLoadComplete), 
            _this47.reset();
            return _this47;
        }
        (0, _createClass2.default)(Ki, [ {
            key: "reset",
            value: function reset() {
                this._toLoadList = [], this._isLoading = !1, this.totalCount = 0;
            }
        }, {
            key: "load",
            value: function load(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
                var s, r;
                if (t instanceof Array) for (r = t.length, s = 0; s < r; s++) {
                    this._addToLoadList(t[s], e);
                } else this._addToLoadList(t, e);
                i && this._checkNext();
            }
        }, {
            key: "_addToLoadList",
            value: function _addToLoadList(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
                this._toLoadList.indexOf(t) >= 0 || ti.getRes(t) || (e ? this._toLoadList.push({
                    url: t
                }) : this._toLoadList.push(t), this.totalCount++);
            }
        }, {
            key: "_checkNext",
            value: function _checkNext() {
                if (!this._isLoading) {
                    if (0 == this._toLoadList.length) return void this.event(Qt.COMPLETE);
                    var t;
                    "string" == typeof (t = this._toLoadList.pop()) ? this.loadOne(t) : this.loadOne(t.url, !0);
                }
            }
        }, {
            key: "loadOne",
            value: function loadOne(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
                this._curUrl = t;
                var s = $.getFileExtension(this._curUrl);
                e ? i.loader.create(t, this._completeHandler) : Ki.LoadableExtensions[s] ? i.loader.load(t, this._completeHandler, null, Ki.LoadableExtensions[s]) : t != ei.getFileLoadPath(t) || Ki.No3dLoadTypes[s] || !ii.createMap[s] ? i.loader.load(t, this._completeHandler) : i.loader.create(t, this._completeHandler);
            }
        }, {
            key: "onOneLoadComplete",
            value: function onOneLoadComplete() {
                this._isLoading = !1, ti.getRes(this._curUrl) || console.log("Fail to load:", this._curUrl);
                var t, e = $.getFileExtension(this._curUrl);
                Ki.LoadableExtensions[e] && ((t = ti.getRes(this._curUrl)) && t instanceof Qe && (t = t.json), 
                t && (t.loadList && this.load(t.loadList, !1, !1), t.loadList3D && this.load(t.loadList3D, !0, !1)));
                "sk" == e && this.load(this._curUrl.replace(".sk", ".png"), !1, !1), this.event(Qt.PROGRESS, this.getProgress()), 
                this._checkNext();
            }
        }, {
            key: "getProgress",
            value: function getProgress() {
                return this.loadedCount / this.totalCount;
            }
        }, {
            key: "leftCount",
            get: function get() {
                return this._isLoading ? this._toLoadList.length + 1 : this._toLoadList.length;
            }
        }, {
            key: "loadedCount",
            get: function get() {
                return this.totalCount - this.leftCount;
            }
        } ]);
        return Ki;
    }(S);
    Ki.LoadableExtensions = {
        scene: ti.JSON,
        scene3d: ti.JSON,
        ani: ti.JSON,
        ui: ti.JSON,
        prefab: ti.PREFAB
    }, Ki.No3dLoadTypes = {
        png: !0,
        jpg: !0,
        txt: !0
    };
    var ji = /* */ function(_De4) {
        (0, _inherits2.default)(ji, _De4);
        var _super56 = _createSuper(ji);
        function ji() {
            var _this48;
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
            (0, _classCallCheck2.default)(this, ji);
            _this48 = _super56.call(this), _this48.autoDestroyAtClosed = !1, _this48.url = null, 
            _this48._viewCreated = !1, _this48._idMap = null, _this48._$componentType = "Scene", 
            ji.unDestroyedScenes.push((0, _assertThisInitialized2.default)(_this48)), _this48._scene = (0, 
            _assertThisInitialized2.default)(_this48), t && _this48.createChildren();
            return _this48;
        }
        (0, _createClass2.default)(ji, [ {
            key: "createChildren",
            value: function createChildren() {}
        }, {
            key: "loadScene",
            value: function loadScene(t) {
                var e = t.indexOf(".") > -1 ? t : t + ".scene", s = i.loader.getRes(e);
                if (s) this.createView(s); else {
                    this._setBit(Ae.NOT_READY, !0), i.loader.resetProgress();
                    var r = new Ki();
                    r.on(Qt.COMPLETE, this, this._onSceneLoaded, [ e ]), r.load(e);
                }
            }
        }, {
            key: "_onSceneLoaded",
            value: function _onSceneLoaded(t) {
                this.createView(i.Loader.getRes(t));
            }
        }, {
            key: "createView",
            value: function createView(t) {
                t && !this._viewCreated && (this._viewCreated = !0, fi.createByData(this, t));
            }
        }, {
            key: "getNodeByID",
            value: function getNodeByID(t) {
                return this._idMap ? this._idMap[t] : null;
            }
        }, {
            key: "open",
            value: function open() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                t && ji.closeAll(), ji.root.addChild(this), this.onOpened(e);
            }
        }, {
            key: "onOpened",
            value: function onOpened(t) {}
        }, {
            key: "close",
            value: function close() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                this.onClosed(t), this.autoDestroyAtClosed ? this.destroy() : this.removeSelf();
            }
        }, {
            key: "onClosed",
            value: function onClosed() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            }
        }, {
            key: "destroy",
            value: function destroy() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                this._idMap = null, (0, _get2.default)((0, _getPrototypeOf2.default)(ji.prototype), "destroy", this).call(this, t);
                for (var e = ji.unDestroyedScenes, i = e.length - 1; i > -1; i--) {
                    if (e[i] === this) return void e.splice(i, 1);
                }
            }
        }, {
            key: "_sizeChanged",
            value: function _sizeChanged() {
                this.event(Qt.RESIZE);
            }
        }, {
            key: "scaleX",
            set: function set(t) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(ji.prototype), "get_scaleX", this).call(this) != t && ((0, 
                _get2.default)((0, _getPrototypeOf2.default)(ji.prototype), "set_scaleX", this).call(this, t), 
                this.event(Qt.RESIZE));
            },
            get: function get() {
                return (0, _get2.default)((0, _getPrototypeOf2.default)(ji.prototype), "scaleX", this);
            }
        }, {
            key: "scaleY",
            set: function set(t) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(ji.prototype), "get_scaleY", this).call(this) != t && ((0, 
                _get2.default)((0, _getPrototypeOf2.default)(ji.prototype), "set_scaleY", this).call(this, t), 
                this.event(Qt.RESIZE));
            },
            get: function get() {
                return (0, _get2.default)((0, _getPrototypeOf2.default)(ji.prototype), "scaleY", this);
            }
        }, {
            key: "width",
            get: function get() {
                if (this._width) return this._width;
                for (var t = 0, e = this.numChildren - 1; e > -1; e--) {
                    var i = this.getChildAt(e);
                    i._visible && (t = Math.max(i._x + i.width * i.scaleX, t));
                }
                return t;
            },
            set: function set(t) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(ji.prototype), "get_width", this).call(this) != t && ((0, 
                _get2.default)((0, _getPrototypeOf2.default)(ji.prototype), "set_width", this).call(this, t), 
                this.callLater(this._sizeChanged));
            }
        }, {
            key: "height",
            get: function get() {
                if (this._height) return this._height;
                for (var t = 0, e = this.numChildren - 1; e > -1; e--) {
                    var i = this.getChildAt(e);
                    i._visible && (t = Math.max(i._y + i.height * i.scaleY, t));
                }
                return t;
            },
            set: function set(t) {
                (0, _get2.default)((0, _getPrototypeOf2.default)(ji.prototype), "get_height", this).call(this) != t && ((0, 
                _get2.default)((0, _getPrototypeOf2.default)(ji.prototype), "set_height", this).call(this, t), 
                this.callLater(this._sizeChanged));
            }
        }, {
            key: "timer",
            get: function get() {
                return this._timer || i.timer;
            },
            set: function set(t) {
                this._timer = t;
            }
        } ], [ {
            key: "setUIMap",
            value: function setUIMap(t) {
                var e = i.loader.getRes(t);
                if (!e) throw "请提前加载uimap的json，再使用该接口设置！";
                for (var _t7 in e) {
                    i.Loader.loadedMap[M.formatURL(_t7 + ".scene")] = e[_t7];
                }
            }
        }, {
            key: "load",
            value: function load(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                i.loader.resetProgress();
                var r = new Ki();
                function onProgress(t) {
                    ji._loadPage && ji._loadPage.event("progress", t), s && s.runWith(t);
                }
                r.on(Qt.PROGRESS, null, onProgress), r.once(Qt.COMPLETE, null, function() {
                    r.off(Qt.PROGRESS, null, onProgress);
                    var s = i.Loader.getRes(t);
                    if (!s) throw "Can not find scene:" + t;
                    if (!s.props) throw "Scene data is error:" + t;
                    var a = s.props.runtime ? s.props.runtime : s.type, n = i.ClassUtils.getClass(a);
                    if ("instance" == s.props.renderType) var h = n.instance || (n.instance = new n()); else h = new n();
                    if (!(h && h instanceof Le)) throw "Can not find scene:" + a;
                    h.url = t, h._viewCreated ? e && e.runWith(h) : (h.on("onViewCreated", null, function() {
                        e && e.runWith(h);
                    }), h.createView(s)), ji.hideLoadingPage();
                }), r.load(t);
            }
        }, {
            key: "open",
            value: function open(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
                var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                if (i instanceof b) {
                    var a = s;
                    s = i, i = a;
                }
                ji.showLoadingPage(), ji.load(t, b.create(null, this._onSceneLoaded, [ e, s, i ]), r);
            }
        }, {
            key: "_onSceneLoaded",
            value: function _onSceneLoaded(t, e, i, s) {
                s.open(t, i), e && e.runWith(s);
            }
        }, {
            key: "close",
            value: function close(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
                for (var i = !1, s = ji.unDestroyedScenes, r = 0, a = s.length; r < a; r++) {
                    var n = s[r];
                    n && n.parent && n.url === t && n.name == e && (n.close(), i = !0);
                }
                return i;
            }
        }, {
            key: "closeAll",
            value: function closeAll() {
                for (var t = ji.root, e = 0, i = t.numChildren; e < i; e++) {
                    var s = t.getChildAt(0);
                    s instanceof ji ? s.close() : s.removeSelf();
                }
            }
        }, {
            key: "destroy",
            value: function destroy(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
                for (var i = !1, s = [].concat(ji.unDestroyedScenes), r = 0, a = s.length; r < a; r++) {
                    var n = s[r];
                    n.url !== t || n.name != e || n.destroyed || (n.destroy(), i = !0);
                }
                return i;
            }
        }, {
            key: "gc",
            value: function gc() {
                I.destroyUnusedResources();
            }
        }, {
            key: "setLoadingPage",
            value: function setLoadingPage(t) {
                ji._loadPage != t && (ji._loadPage = t);
            }
        }, {
            key: "showLoadingPage",
            value: function showLoadingPage() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
                ji._loadPage && (i.systemTimer.clear(null, ji._showLoading), i.systemTimer.clear(null, ji._hideLoading), 
                i.systemTimer.once(e, null, ji._showLoading, [ t ], !1));
            }
        }, {
            key: "_showLoading",
            value: function _showLoading(t) {
                i.stage.addChild(ji._loadPage), ji._loadPage.onOpened(t);
            }
        }, {
            key: "_hideLoading",
            value: function _hideLoading() {
                ji._loadPage.close();
            }
        }, {
            key: "hideLoadingPage",
            value: function hideLoadingPage() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
                ji._loadPage && (i.systemTimer.clear(null, ji._showLoading), i.systemTimer.clear(null, ji._hideLoading), 
                i.systemTimer.once(t, null, ji._hideLoading));
            }
        }, {
            key: "root",
            get: function get() {
                return ji._root || (ji._root = i.stage.addChild(new De()), ji._root.name = "root", 
                i.stage.on("resize", null, function() {
                    ji._root.size(i.stage.width, i.stage.height), ji._root.event(Qt.RESIZE);
                }), ji._root.size(i.stage.width, i.stage.height), ji._root.event(Qt.RESIZE)), ji._root;
            }
        } ]);
        return ji;
    }(De);
    ji.unDestroyedScenes = [], i.regClass(ji), we.regClass("laya.display.Scene", ji), 
    we.regClass("Laya.Scene", ji);
    var qi = /* */ function() {
        function qi() {
            (0, _classCallCheck2.default)(this, qi);
        }
        (0, _createClass2.default)(qi, [ {
            key: "recover",
            value: function recover() {
                this._templ = null, s.recover("DrawParticleCmd", this);
            }
        }, {
            key: "run",
            value: function run(t, e, i) {
                t.drawParticle(e, i, this._templ);
            }
        }, {
            key: "cmdID",
            get: function get() {
                return qi.ID;
            }
        } ], [ {
            key: "create",
            value: function create(t) {
                var e = s.getItemByClass("DrawParticleCmd", qi);
                return e._templ = t, e;
            }
        } ]);
        return qi;
    }();
    qi.ID = "DrawParticleCmd";
    var Zi = /* */ function() {
        function Zi() {
            (0, _classCallCheck2.default)(this, Zi);
        }
        (0, _createClass2.default)(Zi, [ {
            key: "paramChanged",
            value: function paramChanged() {
                Li.systemTimer.callLater(this, this.buildFilter);
            }
        }, {
            key: "buildFilter",
            value: function buildFilter() {
                this._target && this.addFilter(this._target);
            }
        }, {
            key: "addFilter",
            value: function addFilter(t) {
                var e;
                t && (t.filters ? (e = t.filters).indexOf(this._filter) < 0 && (e.push(this._filter), 
                t.filters = $.copyArray([], e)) : t.filters = [ this._filter ]);
            }
        }, {
            key: "removeFilter",
            value: function removeFilter(t) {
                t && (t.filters = null);
            }
        }, {
            key: "target",
            set: function set(t) {
                this._target != t && (this._target = t, this.paramChanged());
            }
        } ]);
        return Zi;
    }();
    var Qi = /* */ function() {
        function Qi() {
            (0, _classCallCheck2.default)(this, Qi);
        }
        (0, _createClass2.default)(Qi, [ {
            key: "render",
            value: function render(t, e, i, s, r) {
                var a = j.create(V.TEXTURE2D, 0);
                this.setShaderInfo(a, r, t.width, t.height), e.drawTarget(t, 0, 0, i, s, p.EMPTY.identity(), a);
            }
        }, {
            key: "setShaderInfo",
            value: function setShaderInfo(t, e, i, s) {
                t.defines.add(Q.BLUR);
                var r = t;
                Qi.blurinfo[0] = i, Qi.blurinfo[1] = s, r.blurInfo = Qi.blurinfo;
                var a = e.strength / 3, n = a * a;
                e.strength_sig2_2sig2_gauss1[0] = e.strength, e.strength_sig2_2sig2_gauss1[1] = n, 
                e.strength_sig2_2sig2_gauss1[2] = 2 * n, e.strength_sig2_2sig2_gauss1[3] = 1 / (2 * Math.PI * n), 
                r.strength_sig2_2sig2_gauss1 = e.strength_sig2_2sig2_gauss1;
            }
        } ]);
        return Qi;
    }();
    Qi.blurinfo = new Array(2);
    var $i = /* */ function(_Q2) {
        (0, _inherits2.default)($i, _Q2);
        var _super57 = _createSuper($i);
        function $i() {
            var _this49;
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;
            (0, _classCallCheck2.default)(this, $i);
            _this49 = _super57.call(this), _this49.strength_sig2_2sig2_gauss1 = [], _this49.strength = t, 
            _this49._glRender = new Qi();
            return _this49;
        }
        (0, _createClass2.default)($i, [ {
            key: "getStrenth_sig2_2sig2_native",
            value: function getStrenth_sig2_2sig2_native() {
                this.strength_sig2_native || (this.strength_sig2_native = new Float32Array(4));
                var t = this.strength / 3, e = t * t;
                return this.strength_sig2_native[0] = this.strength, this.strength_sig2_native[1] = e, 
                this.strength_sig2_native[2] = 2 * e, this.strength_sig2_native[3] = 1 / (2 * Math.PI * e), 
                this.strength_sig2_native;
            }
        }, {
            key: "type",
            get: function get() {
                return Q.BLUR;
            }
        } ]);
        return $i;
    }(Q);
    var Ji = /* */ function(_Zi) {
        (0, _inherits2.default)(Ji, _Zi);
        var _super58 = _createSuper(Ji);
        function Ji() {
            var _this50;
            (0, _classCallCheck2.default)(this, Ji);
            _this50 = _super58.call(this), _this50._strength = 4, _this50._filter = new $i(_this50.strength);
            return _this50;
        }
        (0, _createClass2.default)(Ji, [ {
            key: "buildFilter",
            value: function buildFilter() {
                this._filter = new $i(this.strength), (0, _get2.default)((0, _getPrototypeOf2.default)(Ji.prototype), "buildFilter", this).call(this);
            }
        }, {
            key: "strength",
            get: function get() {
                return this._strength;
            },
            set: function set(t) {
                this._strength = t;
            }
        } ]);
        return Ji;
    }(Zi);
    we.regClass("laya.effect.BlurFilterSetter", Ji), we.regClass("Laya.BlurFilterSetter", Ji);
    var ts = /* */ function(_Zi2) {
        (0, _inherits2.default)(ts, _Zi2);
        var _super59 = _createSuper(ts);
        function ts() {
            var _this51;
            (0, _classCallCheck2.default)(this, ts);
            _this51 = _super59.call(this), _this51._brightness = 0, _this51._contrast = 0, _this51._saturation = 0, 
            _this51._hue = 0, _this51._red = 0, _this51._green = 0, _this51._blue = 0, _this51._alpha = 0, 
            _this51._filter = new tt();
            return _this51;
        }
        (0, _createClass2.default)(ts, [ {
            key: "buildFilter",
            value: function buildFilter() {
                this._filter.reset(), this._filter.color(this.red, this.green, this.blue, this.alpha), 
                this._filter.adjustHue(this.hue), this._filter.adjustContrast(this.contrast), this._filter.adjustBrightness(this.brightness), 
                this._filter.adjustSaturation(this.saturation), (0, _get2.default)((0, _getPrototypeOf2.default)(ts.prototype), "buildFilter", this).call(this);
            }
        }, {
            key: "brightness",
            get: function get() {
                return this._brightness;
            },
            set: function set(t) {
                this._brightness = t, this.paramChanged();
            }
        }, {
            key: "contrast",
            get: function get() {
                return this._contrast;
            },
            set: function set(t) {
                this._contrast = t, this.paramChanged();
            }
        }, {
            key: "saturation",
            get: function get() {
                return this._saturation;
            },
            set: function set(t) {
                this._saturation = t, this.paramChanged();
            }
        }, {
            key: "hue",
            get: function get() {
                return this._hue;
            },
            set: function set(t) {
                this._hue = t, this.paramChanged();
            }
        }, {
            key: "red",
            get: function get() {
                return this._red;
            },
            set: function set(t) {
                this._red = t, this.paramChanged();
            }
        }, {
            key: "green",
            get: function get() {
                return this._green;
            },
            set: function set(t) {
                this._green = t, this.paramChanged();
            }
        }, {
            key: "blue",
            get: function get() {
                return this._blue;
            },
            set: function set(t) {
                this._blue = t, this.paramChanged();
            }
        }, {
            key: "color",
            get: function get() {
                return this._color;
            },
            set: function set(t) {
                var e;
                this._color = t, e = J.create(t), this._red = 255 * e.arrColor[0], this._green = 255 * e.arrColor[1], 
                this._blue = 255 * e.arrColor[2], this.paramChanged();
            }
        }, {
            key: "alpha",
            get: function get() {
                return this._alpha;
            },
            set: function set(t) {
                this._alpha = t, this.paramChanged();
            }
        } ]);
        return ts;
    }(Zi);
    we.regClass("laya.effect.ColorFilterSetter", ts), we.regClass("Laya.ColorFilterSetter", ts);
    var es = /* */ function(_i13) {
        (0, _inherits2.default)(es, _i13);
        var _super60 = _createSuper(es);
        function es() {
            var _this52;
            (0, _classCallCheck2.default)(this, es);
            _this52 = _super60.apply(this, arguments), _this52.duration = 1e3, _this52.delay = 0, 
            _this52.repeat = 0, _this52.autoDestroyAtComplete = !0;
            return _this52;
        }
        (0, _createClass2.default)(es, [ {
            key: "_onAwake",
            value: function _onAwake() {
                this.target = this.target || this.owner, this.autoDestroyAtComplete && (this._comlete = b.create(this.target, this.target.destroy, null, !1)), 
                this.eventName ? this.owner.on(this.eventName, this, this._exeTween) : this._exeTween();
            }
        }, {
            key: "_exeTween",
            value: function _exeTween() {
                this._tween = this._doTween(), this._tween.repeat = this.repeat;
            }
        }, {
            key: "_doTween",
            value: function _doTween() {
                return null;
            }
        }, {
            key: "onReset",
            value: function onReset() {
                this.duration = 1e3, this.delay = 0, this.repeat = 0, this.ease = null, this.target = null, 
                this.eventName && (this.owner.off(this.eventName, this, this._exeTween), this.eventName = null), 
                this._comlete && (this._comlete.recover(), this._comlete = null), this._tween && (this._tween.clear(), 
                this._tween = null);
            }
        } ]);
        return es;
    }(_i);
    var is = /* */ function() {
        function is() {
            (0, _classCallCheck2.default)(this, is);
        }
        (0, _createClass2.default)(is, [ {
            key: "setShaderInfo",
            value: function setShaderInfo(t, e, i, s) {
                t.defines.add(s.type);
                var r = t;
                r.u_blurInfo1 = s._sv_blurInfo1;
                var a = s._sv_blurInfo2;
                a[0] = e, a[1] = i, r.u_blurInfo2 = a, r.u_color = s.getColor();
            }
        }, {
            key: "render",
            value: function render(t, e, i, s, r) {
                var a = i, n = s, h = j.create(V.TEXTURE2D, 0);
                this.setShaderInfo(h, a, n, r);
                var o = j.create(V.TEXTURE2D, 0), l = p.TEMP.identity();
                e.drawTarget(t, 0, 0, a, n, l, h), e.drawTarget(t, 0, 0, a, n, l, o);
            }
        } ]);
        return is;
    }();
    var ss = /* */ function(_Q3) {
        (0, _inherits2.default)(ss, _Q3);
        var _super61 = _createSuper(ss);
        function ss(t) {
            var _this53;
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
            var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 6;
            var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 6;
            (0, _classCallCheck2.default)(this, ss);
            _this53 = _super61.call(this), _this53._elements = new Float32Array(9), _this53._sv_blurInfo1 = new Array(4), 
            _this53._sv_blurInfo2 = [ 0, 0, 1, 0 ], _this53._color = new J(t), _this53.blur = Math.min(e, 20), 
            _this53.offX = i, _this53.offY = s, _this53._sv_blurInfo1[0] = _this53._sv_blurInfo1[1] = _this53.blur, 
            _this53._sv_blurInfo1[2] = i, _this53._sv_blurInfo1[3] = -s, _this53._glRender = new is();
            return _this53;
        }
        (0, _createClass2.default)(ss, [ {
            key: "getColor",
            value: function getColor() {
                return this._color.arrColor;
            }
        }, {
            key: "getColorNative",
            value: function getColorNative() {
                this._color_native || (this._color_native = new Float32Array(4));
                var t = this.getColor();
                return this._color_native[0] = t[0], this._color_native[1] = t[1], this._color_native[2] = t[2], 
                this._color_native[3] = t[3], this._color_native;
            }
        }, {
            key: "getBlurInfo1Native",
            value: function getBlurInfo1Native() {
                return this._blurInof1_native || (this._blurInof1_native = new Float32Array(4)), 
                this._blurInof1_native[0] = this._blurInof1_native[1] = this.blur, this._blurInof1_native[2] = this.offX, 
                this._blurInof1_native[3] = this.offY, this._blurInof1_native;
            }
        }, {
            key: "getBlurInfo2Native",
            value: function getBlurInfo2Native() {
                return this._blurInof2_native || (this._blurInof2_native = new Float32Array(4)), 
                this._blurInof2_native[2] = 1, this._blurInof2_native;
            }
        }, {
            key: "type",
            get: function get() {
                return $i.GLOW;
            }
        }, {
            key: "offY",
            get: function get() {
                return this._elements[6];
            },
            set: function set(t) {
                this._elements[6] = t, this._sv_blurInfo1[3] = -t;
            }
        }, {
            key: "offX",
            get: function get() {
                return this._elements[5];
            },
            set: function set(t) {
                this._elements[5] = t, this._sv_blurInfo1[2] = t;
            }
        }, {
            key: "blur",
            get: function get() {
                return this._elements[4];
            },
            set: function set(t) {
                this._elements[4] = t, this._sv_blurInfo1[0] = this._sv_blurInfo1[1] = t;
            }
        } ]);
        return ss;
    }(Q);
    var rs = /* */ function(_Zi3) {
        (0, _inherits2.default)(rs, _Zi3);
        var _super62 = _createSuper(rs);
        function rs() {
            var _this54;
            (0, _classCallCheck2.default)(this, rs);
            _this54 = _super62.call(this), _this54._color = "#ff0000", _this54._blur = 4, _this54._offX = 6, 
            _this54._offY = 6, _this54._filter = new ss(_this54._color);
            return _this54;
        }
        (0, _createClass2.default)(rs, [ {
            key: "buildFilter",
            value: function buildFilter() {
                this._filter = new ss(this.color, this.blur, this.offX, this.offY), (0, _get2.default)((0, 
                _getPrototypeOf2.default)(rs.prototype), "buildFilter", this).call(this);
            }
        }, {
            key: "color",
            get: function get() {
                return this._color;
            },
            set: function set(t) {
                this._color = t, this.paramChanged();
            }
        }, {
            key: "blur",
            get: function get() {
                return this._blur;
            },
            set: function set(t) {
                this._blur = t, this.paramChanged();
            }
        }, {
            key: "offX",
            get: function get() {
                return this._offX;
            },
            set: function set(t) {
                this._offX = t, this.paramChanged();
            }
        }, {
            key: "offY",
            get: function get() {
                return this._offY;
            },
            set: function set(t) {
                this._offY = t, this.paramChanged();
            }
        } ]);
        return rs;
    }(Zi);
    we.regClass("laya.effect.GlowFilterSetter", rs), we.regClass("Laya.GlowFilterSetter", rs);
    var as = function as() {
        (0, _classCallCheck2.default)(this, as);
    };
    as.STANDARD = 0, as.LEFT = 1, as.RIGHT = 2, as.NUM_PAD = 3;
    var ns = function ns() {
        (0, _classCallCheck2.default)(this, ns);
    };
    ns.NUMBER_0 = 48, ns.NUMBER_1 = 49, ns.NUMBER_2 = 50, ns.NUMBER_3 = 51, ns.NUMBER_4 = 52, 
    ns.NUMBER_5 = 53, ns.NUMBER_6 = 54, ns.NUMBER_7 = 55, ns.NUMBER_8 = 56, ns.NUMBER_9 = 57, 
    ns.A = 65, ns.B = 66, ns.C = 67, ns.D = 68, ns.E = 69, ns.F = 70, ns.G = 71, ns.H = 72, 
    ns.I = 73, ns.J = 74, ns.K = 75, ns.L = 76, ns.M = 77, ns.N = 78, ns.O = 79, ns.P = 80, 
    ns.Q = 81, ns.R = 82, ns.S = 83, ns.T = 84, ns.U = 85, ns.V = 86, ns.W = 87, ns.X = 88, 
    ns.Y = 89, ns.Z = 90, ns.F1 = 112, ns.F2 = 113, ns.F3 = 114, ns.F4 = 115, ns.F5 = 116, 
    ns.F6 = 117, ns.F7 = 118, ns.F8 = 119, ns.F9 = 120, ns.F10 = 121, ns.F11 = 122, 
    ns.F12 = 123, ns.F13 = 124, ns.F14 = 125, ns.F15 = 126, ns.NUMPAD = 21, ns.NUMPAD_0 = 96, 
    ns.NUMPAD_1 = 97, ns.NUMPAD_2 = 98, ns.NUMPAD_3 = 99, ns.NUMPAD_4 = 100, ns.NUMPAD_5 = 101, 
    ns.NUMPAD_6 = 102, ns.NUMPAD_7 = 103, ns.NUMPAD_8 = 104, ns.NUMPAD_9 = 105, ns.NUMPAD_ADD = 107, 
    ns.NUMPAD_DECIMAL = 110, ns.NUMPAD_DIVIDE = 111, ns.NUMPAD_ENTER = 108, ns.NUMPAD_MULTIPLY = 106, 
    ns.NUMPAD_SUBTRACT = 109, ns.SEMICOLON = 186, ns.EQUAL = 187, ns.COMMA = 188, ns.MINUS = 189, 
    ns.PERIOD = 190, ns.SLASH = 191, ns.BACKQUOTE = 192, ns.LEFTBRACKET = 219, ns.BACKSLASH = 220, 
    ns.RIGHTBRACKET = 221, ns.QUOTE = 222, ns.ALTERNATE = 18, ns.BACKSPACE = 8, ns.CAPS_LOCK = 20, 
    ns.COMMAND = 15, ns.CONTROL = 17, ns.DELETE = 46, ns.ENTER = 13, ns.ESCAPE = 27, 
    ns.PAGE_UP = 33, ns.PAGE_DOWN = 34, ns.END = 35, ns.HOME = 36, ns.LEFT = 37, ns.UP = 38, 
    ns.RIGHT = 39, ns.DOWN = 40, ns.SHIFT = 16, ns.SPACE = 32, ns.TAB = 9, ns.INSERT = 45;
    var hs = /* */ function() {
        function hs() {
            (0, _classCallCheck2.default)(this, hs);
        }
        (0, _createClass2.default)(hs, [ {
            key: "render",
            value: function render(t, e, i) {
                hs._addType(this._renderType), hs.showRenderTypeInfo(this._renderType), Re.renders[this._renderType]._fun(this, t, e + this._x, i + this._y), 
                this._repaint = 0;
            }
        }, {
            key: "_stageRender",
            value: function _stageRender(t, e, s) {
                hs._countStart(), hs._PreStageRender.call(i.stage, t, e, s), hs._countEnd();
            }
        } ], [ {
            key: "getMCDName",
            value: function getMCDName(t) {
                return hs._typeToNameDic[t];
            }
        }, {
            key: "showRenderTypeInfo",
            value: function showRenderTypeInfo(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
                if (e || !hs.showedDic[t]) {
                    if (hs.showedDic[t] = !0, !hs._rendertypeToStrDic[t]) {
                        var i, s = [];
                        for (i = 1; i <= t; ) {
                            i & t && s.push(hs.getMCDName(i & t)), i <<= 1;
                        }
                        hs._rendertypeToStrDic[t] = s.join(",");
                    }
                    console.log("cmd:", hs._rendertypeToStrDic[t]);
                }
            }
        }, {
            key: "__init__",
            value: function __init__() {
                hs._typeToNameDic[me.ALPHA] = "ALPHA", hs._typeToNameDic[me.TRANSFORM] = "TRANSFORM", 
                hs._typeToNameDic[me.TEXTURE] = "TEXTURE", hs._typeToNameDic[me.GRAPHICS] = "GRAPHICS", 
                hs._typeToNameDic[me.ONECHILD] = "ONECHILD", hs._typeToNameDic[me.CHILDS] = "CHILDS", 
                hs._typeToNameDic[me.TRANSFORM | me.ALPHA] = "TRANSFORM|ALPHA", hs._typeToNameDic[me.CANVAS] = "CANVAS", 
                hs._typeToNameDic[me.BLEND] = "BLEND", hs._typeToNameDic[me.FILTERS] = "FILTERS", 
                hs._typeToNameDic[me.MASK] = "MASK", hs._typeToNameDic[me.CLIP] = "CLIP", hs._typeToNameDic[me.LAYAGL3D] = "LAYAGL3D";
            }
        }, {
            key: "_countStart",
            value: function _countStart() {
                var t;
                for (t in hs._countDic) {
                    hs._countDic[t] = 0;
                }
            }
        }, {
            key: "_countEnd",
            value: function _countEnd() {
                hs._i++, hs._i > 60 && (hs.showCountInfo(), hs._i = 0);
            }
        }, {
            key: "_addType",
            value: function _addType(t) {
                hs._countDic[t] ? hs._countDic[t] += 1 : hs._countDic[t] = 1;
            }
        }, {
            key: "showCountInfo",
            value: function showCountInfo() {
                var t;
                for (t in console.log("==================="), hs._countDic) {
                    console.log("count:" + hs._countDic[t]), hs.showRenderTypeInfo(t, !0);
                }
            }
        }, {
            key: "enableQuickTest",
            value: function enableQuickTest() {
                hs.__init__(), De.prototype.render = hs.prototype.render, hs._PreStageRender = Ve.prototype.render, 
                Ve.prototype.render = hs.prototype._stageRender;
            }
        } ]);
        return hs;
    }();
    hs.showedDic = {}, hs._rendertypeToStrDic = {}, hs._typeToNameDic = {}, hs._countDic = {}, 
    hs._i = 0;
    var os = /* */ function(_De5) {
        (0, _inherits2.default)(os, _De5);
        var _super63 = _createSuper(os);
        function os() {
            var _this55;
            (0, _classCallCheck2.default)(this, os);
            _this55 = _super63.call(this), _this55.visible = !1, _this55.on(Qt.ADDED, (0, _assertThisInitialized2.default)(_this55), _this55._onParentChange), 
            _this55.on(Qt.REMOVED, (0, _assertThisInitialized2.default)(_this55), _this55._onParentChange);
            return _this55;
        }
        (0, _createClass2.default)(os, [ {
            key: "_onParentChange",
            value: function _onParentChange() {
                this.target = this.parent;
            }
        }, {
            key: "play",
            value: function play() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                isNaN(t) && (t = 1), this.url && (this.stop(), this._channel = Ze.playSound(this.url, t, e));
            }
        }, {
            key: "stop",
            value: function stop() {
                this._channel && !this._channel.isStopped && this._channel.stop(), this._channel = null;
            }
        }, {
            key: "_setPlayAction",
            value: function _setPlayAction(t, e, i) {
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
                this[i] && t && (s ? t.on(e, this, this[i]) : t.off(e, this, this[i]));
            }
        }, {
            key: "_setPlayActions",
            value: function _setPlayActions(t, e, i) {
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
                if (t && e) {
                    var r, a, n = e.split(",");
                    for (a = n.length, r = 0; r < a; r++) {
                        this._setPlayAction(t, n[r], i, s);
                    }
                }
            }
        }, {
            key: "playEvent",
            set: function set(t) {
                this._playEvents = t, t && this._tar && this._setPlayActions(this._tar, t, "play");
            }
        }, {
            key: "target",
            set: function set(t) {
                this._tar && (this._setPlayActions(this._tar, this._playEvents, "play", !1), this._setPlayActions(this._tar, this._stopEvents, "stop", !1)), 
                this._tar = t, this._tar && (this._setPlayActions(this._tar, this._playEvents, "play", !0), 
                this._setPlayActions(this._tar, this._stopEvents, "stop", !0));
            }
        }, {
            key: "stopEvent",
            set: function set(t) {
                this._stopEvents = t, t && this._tar && this._setPlayActions(this._tar, t, "stop");
            }
        } ]);
        return os;
    }(De);
    we.regClass("laya.media.SoundNode", os), we.regClass("Laya.SoundNode", os);
    var ls = /* */ function() {
        function ls() {
            (0, _classCallCheck2.default)(this, ls);
        }
        (0, _createClass2.default)(ls, null, [ {
            key: "enable",
            value: function enable(t, e) {
                var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
                ls.type = s, i.loader.load(t, b.create(null, ls.onManifestLoaded, [ e ]), null, ti.JSON);
            }
        }, {
            key: "onManifestLoaded",
            value: function onManifestLoaded(t, e) {
                ls.manifest = e, M.customFormat = ls.addVersionPrefix, t.run(), e || console.warn("资源版本清单文件不存在，不使用资源版本管理。忽略ERR_FILE_NOT_FOUND错误。");
            }
        }, {
            key: "addVersionPrefix",
            value: function addVersionPrefix(t) {
                return ls.manifest && ls.manifest[t] ? ls.type == ls.FILENAME_VERSION ? ls.manifest[t] : ls.manifest[t] + "/" + t : t;
            }
        } ]);
        return ls;
    }();
    ls.FOLDER_VERSION = 1, ls.FILENAME_VERSION = 2, ls.type = ls.FOLDER_VERSION;
    var _s = /* */ function(_S13) {
        (0, _inherits2.default)(_s, _S13);
        var _super64 = _createSuper(_s);
        function _s() {
            var _this56;
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            (0, _classCallCheck2.default)(this, _s);
            _this56 = _super64.call(this), _this56.disableInput = !1, _this56.protocols = [], 
            _this56._byteClass = i || D, _this56.protocols = s, _this56.endian = _s.BIG_ENDIAN, 
            t && e > 0 && e < 65535 && _this56.connect(t, e);
            return _this56;
        }
        (0, _createClass2.default)(_s, [ {
            key: "connect",
            value: function connect(t, e) {
                var i = "ws://" + t + ":" + e;
                this.connectByUrl(i);
            }
        }, {
            key: "connectByUrl",
            value: function connectByUrl(t) {
                var _this57 = this;
                null != this._socket && this.close(), this._socket && this.cleanSocket(), this.protocols && 0 != this.protocols.length ? this._socket = new se.window.WebSocket(t, this.protocols) : this._socket = new se.window.WebSocket(t), 
                this._socket.binaryType = "arraybuffer", this._output = new this._byteClass(), this._output.endian = this.endian, 
                this._input = new this._byteClass(), this._input.endian = this.endian, this._addInputPosition = 0, 
                this._socket.onopen = function(t) {
                    _this57._onOpen(t);
                }, this._socket.onmessage = function(t) {
                    _this57._onMessage(t);
                }, this._socket.onclose = function(t) {
                    _this57._onClose(t);
                }, this._socket.onerror = function(t) {
                    _this57._onError(t);
                };
            }
        }, {
            key: "cleanSocket",
            value: function cleanSocket() {
                this.close(), this._connected = !1, this._socket.onopen = null, this._socket.onmessage = null, 
                this._socket.onclose = null, this._socket.onerror = null, this._socket = null;
            }
        }, {
            key: "close",
            value: function close() {
                if (null != this._socket) try {
                    this._socket.close();
                } catch (t) {}
            }
        }, {
            key: "_onOpen",
            value: function _onOpen(t) {
                this._connected = !0, this.event(Qt.OPEN, t);
            }
        }, {
            key: "_onMessage",
            value: function _onMessage(t) {
                if (t && t.data) {
                    var e = t.data;
                    if (this.disableInput && e) this.event(Qt.MESSAGE, e); else {
                        this._input.length > 0 && this._input.bytesAvailable < 1 && (this._input.clear(), 
                        this._addInputPosition = 0);
                        var i = this._input.pos;
                        !this._addInputPosition && (this._addInputPosition = 0), this._input.pos = this._addInputPosition, 
                        e && ("string" == typeof e ? this._input.writeUTFBytes(e) : this._input.writeArrayBuffer(e), 
                        this._addInputPosition = this._input.pos, this._input.pos = i), this.event(Qt.MESSAGE, e);
                    }
                }
            }
        }, {
            key: "_onClose",
            value: function _onClose(t) {
                this._connected = !1, this.event(Qt.CLOSE, t);
            }
        }, {
            key: "_onError",
            value: function _onError(t) {
                this.event(Qt.ERROR, t);
            }
        }, {
            key: "send",
            value: function send(t) {
                this._socket.send(t);
            }
        }, {
            key: "flush",
            value: function flush() {
                if (this._output && this._output.length > 0) {
                    var t;
                    try {
                        this._socket && this._socket.send(this._output.__getBuffer().slice(0, this._output.length));
                    } catch (e) {
                        t = e;
                    }
                    this._output.endian = this.endian, this._output.clear(), t && this.event(Qt.ERROR, t);
                }
            }
        }, {
            key: "input",
            get: function get() {
                return this._input;
            }
        }, {
            key: "output",
            get: function get() {
                return this._output;
            }
        }, {
            key: "connected",
            get: function get() {
                return this._connected;
            }
        }, {
            key: "endian",
            get: function get() {
                return this._endian;
            },
            set: function set(t) {
                this._endian = t, null != this._input && (this._input.endian = t), null != this._output && (this._output.endian = t);
            }
        } ]);
        return _s;
    }(S);
    _s.LITTLE_ENDIAN = "littleEndian", _s.BIG_ENDIAN = "bigEndian", (Oi = t.TextureDecodeFormat || (t.TextureDecodeFormat = {}))[Oi.Normal = 0] = "Normal", 
    Oi[Oi.RGBM = 1] = "RGBM";
    var us = /* */ function(_L3) {
        (0, _inherits2.default)(us, _L3);
        var _super65 = _createSuper(us);
        function us() {
            var _this58;
            (0, _classCallCheck2.default)(this, us);
            var e = g.instance;
            _this58 = _super65.call(this, e.RGB, !1), _this58._glTextureType = e.TEXTURE_2D, 
            _this58._width = 1, _this58._height = 1, _this58._wrapModeU = _this58._wrapModeV = t.WarpMode.Clamp, 
            _this58._filterMode = t.FilterMode.Bilinear, _this58._setWarpMode(e.TEXTURE_WRAP_S, _this58._wrapModeU), 
            _this58._setWarpMode(e.TEXTURE_WRAP_T, _this58._wrapModeV), _this58._setFilterMode(_this58._filterMode), 
            _this58._needUpdate = !1, _this58._readyed = !0, us._videoTexturePool.push((0, _assertThisInitialized2.default)(_this58));
            return _this58;
        }
        (0, _createClass2.default)(us, [ {
            key: "_updateVideoData",
            value: function _updateVideoData() {
                if (this._video && this._needUpdate) {
                    var t = g.instance;
                    R.bindTexture(t, this._glTextureType, this._glTexture), t.texImage2D(this._glTextureType, 0, t.RGB, t.RGB, t.UNSIGNED_BYTE, this._video);
                }
            }
        }, {
            key: "videoPlay",
            value: function videoPlay() {
                this._video.play(), this._needUpdate = !0;
            }
        }, {
            key: "videoPause",
            value: function videoPause() {
                this._video.pause(), this._needUpdate = !1;
            }
        }, {
            key: "destroy",
            value: function destroy() {
                (0, _get2.default)((0, _getPrototypeOf2.default)(us.prototype), "destroy", this).call(this), 
                this._video = null;
            }
        }, {
            key: "video",
            get: function get() {
                return this._video;
            },
            set: function set(t) {
                t && t instanceof HTMLVideoElement && (this._video = t, Li.Browser.onMobile && (this._video["x5-playsInline"] = !0, 
                this._video["x5-playsinline"] = !0, this._video.x5PlaysInline = !0, this._video.playsInline = !0, 
                this._video["webkit-playsInline"] = !0, this._video["webkit-playsinline"] = !0, 
                this._video.webkitPlaysInline = !0, this._video.playsinline = !0, this._video.style.playsInline = !0, 
                this._video.crossOrigin = "anonymous", this._video.setAttribute("crossorigin", "anonymous"), 
                this._video.setAttribute("playsinline", "true"), this._video.setAttribute("x5-playsinline", "true"), 
                this._video.setAttribute("webkit-playsinline", "true"), this._video.autoplay = !0));
            }
        } ], [ {
            key: "_update",
            value: function _update() {
                for (var t = us._videoTexturePool, e = 0, i = t.length; e < i; e++) {
                    var s = t[e];
                    s && s._updateVideoData();
                }
            }
        } ]);
        return us;
    }(L);
    us._videoTexturePool = new Array();
    var cs = /* */ function() {
        function cs() {
            (0, _classCallCheck2.default)(this, cs);
            this.reset();
        }
        (0, _createClass2.default)(cs, [ {
            key: "setData",
            value: function setData(t, e, i, s) {
                return this.char = t, this.charNum = t.charCodeAt(0), this.x = this.y = 0, this.width = e, 
                this.height = i, this.style = s, this.isWord = !cs._isWordRegExp.test(t), this;
            }
        }, {
            key: "reset",
            value: function reset() {
                return this.x = this.y = this.width = this.height = 0, this.isWord = !1, this.char = null, 
                this.charNum = 0, this.style = null, this;
            }
        }, {
            key: "recover",
            value: function recover() {
                s.recover("HTMLChar", this.reset());
            }
        }, {
            key: "_isChar",
            value: function _isChar() {
                return !0;
            }
        }, {
            key: "_getCSSStyle",
            value: function _getCSSStyle() {
                return this.style;
            }
        } ], [ {
            key: "create",
            value: function create() {
                return s.getItemByClass("HTMLChar", cs);
            }
        } ]);
        return cs;
    }();
    cs._isWordRegExp = new RegExp("[\\w.]", "");
    var ds = /* */ function() {
        function ds() {
            (0, _classCallCheck2.default)(this, ds);
        }
        (0, _createClass2.default)(ds, null, [ {
            key: "enable",
            value: function enable() {
                ds._logdiv || (ds._logdiv = se.createElement("div"), ds._logdiv.style.cssText = "border:white;padding:4px;overflow-y:auto;z-index:1000000;background:rgba(100,100,100,0.6);color:white;position: absolute;left:0px;top:0px;width:50%;height:50%;", 
                se.document.body.appendChild(ds._logdiv), ds._btn = se.createElement("button"), 
                ds._btn.innerText = "Hide", ds._btn.style.cssText = "z-index:1000001;position: absolute;left:10px;top:10px;", 
                ds._btn.onclick = ds.toggle, se.document.body.appendChild(ds._btn));
            }
        }, {
            key: "toggle",
            value: function toggle() {
                var t = ds._logdiv.style;
                "" === t.display ? (ds._btn.innerText = "Show", t.display = "none") : (ds._btn.innerText = "Hide", 
                t.display = "");
            }
        }, {
            key: "print",
            value: function print(t) {
                ds._logdiv && (ds._count >= ds.maxCount && ds.clear(), ds._count++, ds._logdiv.innerText += t + "\n", 
                ds.autoScrollToBottom && ds._logdiv.scrollHeight - ds._logdiv.scrollTop - ds._logdiv.clientHeight < 50 && (ds._logdiv.scrollTop = ds._logdiv.scrollHeight));
            }
        }, {
            key: "clear",
            value: function clear() {
                ds._logdiv.innerText = "", ds._count = 0;
            }
        } ]);
        return ds;
    }();
    ds._count = 0, ds.maxCount = 50, ds.autoScrollToBottom = !0;
    var ps = 300;
    var fs = /* */ function() {
        function fs(t, e, i, s) {
            (0, _classCallCheck2.default)(this, fs);
            this.scale = 1, this.datas = new Array(ps), this.datapos = 0, this.id = t, this.color = e, 
            this.name = i, this.scale = s;
        }
        (0, _createClass2.default)(fs, [ {
            key: "addData",
            value: function addData(t) {
                this.datas[this.datapos] = t, this.datapos++, this.datapos %= ps;
            }
        } ]);
        return fs;
    }();
    var ms = /* */ function(_De6) {
        (0, _inherits2.default)(ms, _De6);
        var _super66 = _createSuper(ms);
        function ms() {
            var _this59;
            (0, _classCallCheck2.default)(this, ms);
            _this59 = _super66.call(this), _this59.datas = [], _this59.xdata = new Array(ms.DATANUM), 
            _this59.ydata = new Array(ms.DATANUM), _this59.hud_width = 800, _this59.hud_height = 200, 
            _this59.gMinV = 0, _this59.gMaxV = 100, _this59.textSpace = 40, _this59.sttm = 0, 
            ms.inst = (0, _assertThisInitialized2.default)(_this59), _this59._renderType |= me.CUSTOM, 
            _this59._setRenderType(_this59._renderType), _this59._setCustomRender(), _this59.addDataDef(0, 16777215, "frame", 1), 
            _this59.addDataDef(1, 65280, "update", 1), _this59.addDataDef(2, 16711680, "flush", 1), 
            ms._now = performance ? performance.now.bind(performance) : Date.now;
            return _this59;
        }
        (0, _createClass2.default)(ms, [ {
            key: "now",
            value: function now() {
                return ms._now();
            }
        }, {
            key: "start",
            value: function start() {
                this.sttm = ms._now();
            }
        }, {
            key: "end",
            value: function end(t) {
                var e = ms._now() - this.sttm;
                this.updateValue(t, e);
            }
        }, {
            key: "config",
            value: function config(t, e) {
                this.hud_width = t, this.hud_height = e;
            }
        }, {
            key: "addDataDef",
            value: function addDataDef(t, e, i, s) {
                this.datas[t] = new fs(t, e, i, s);
            }
        }, {
            key: "updateValue",
            value: function updateValue(t, e) {
                this.datas[t].addData(e);
            }
        }, {
            key: "v2y",
            value: function v2y(t) {
                this._y, this.hud_height, this.gMinV, this.gMaxV;
                return this._y + this.hud_height * (1 - (t - this.gMinV) / this.gMaxV);
            }
        }, {
            key: "drawHLine",
            value: function drawHLine(t, e, i, s) {
                var r = this._x, a = (this._x, this.hud_width, this.v2y(e));
                t.fillText(s, r, a - 6, null, "green", null), r += this.textSpace, t.fillStyle = i, 
                t.fillRect(r, a, this._x + this.hud_width, 1, null);
            }
        }, {
            key: "customRender",
            value: function customRender(t, e, i) {
                var s = performance.now();
                ms._lastTm <= 0 && (ms._lastTm = s), this.updateValue(0, s - ms._lastTm), ms._lastTm = s, 
                t.save(), t.fillRect(this._x, this._y, this.hud_width, this.hud_height + 4, "#000000cc"), 
                t.globalAlpha = .9, this.drawHLine(t, 0, "green", "    0"), this.drawHLine(t, 10, "green", "  10"), 
                this.drawHLine(t, 16.667, "red", " "), this.drawHLine(t, 20, "green", "50|20"), 
                this.drawHLine(t, 33.334, "yellow", ""), this.drawHLine(t, 16.667 * 3, "yellow", ""), 
                this.drawHLine(t, 66.668, "yellow", ""), this.drawHLine(t, 50, "green", "20|50"), 
                this.drawHLine(t, 100, "green", "10|100");
                for (var r = 0, a = this.datas.length; r < a; r++) {
                    var n = this.datas[r];
                    if (n) {
                        var h = n.datas.length, o = (this.hud_width - this.textSpace) / h, l = n.datapos, _ = this._x + this.textSpace;
                        t.fillStyle = n.color;
                        for (var u = h; l < u; l++) {
                            var c = this.v2y(n.datas[l] * n.scale);
                            t.fillRect(_, c, o, this.hud_height + this._y - c, null), _ += o;
                        }
                        for (l = 0; l < n.datapos; l++) {
                            c = this.v2y(n.datas[l] * n.scale), t.fillRect(_, c, o, this.hud_height + this._y - c, null), 
                            _ += o;
                        }
                    }
                }
                t.restore();
            }
        } ]);
        return ms;
    }(De);
    ms._lastTm = 0, ms._now = null, ms.DATANUM = 300, ms.drawTexTm = 0;
    var gs = /* */ function() {
        function gs() {
            (0, _classCallCheck2.default)(this, gs);
            this.maxCount = 1e3;
        }
        (0, _createClass2.default)(gs, [ {
            key: "getCacheList",
            value: function getCacheList() {
                return s.getPoolBySign(this.sign);
            }
        }, {
            key: "tryDispose",
            value: function tryDispose(t) {
                var e;
                (e = s.getPoolBySign(this.sign)).length > this.maxCount && e.splice(this.maxCount, e.length - this.maxCount);
            }
        } ], [ {
            key: "addPoolCacheManager",
            value: function addPoolCacheManager(t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
                var i;
                (i = new gs()).sign = t, i.maxCount = e, xe.regCacheByFunction($.bind(i.tryDispose, i), $.bind(i.getCacheList, i));
            }
        } ]);
        return gs;
    }();
    var Ts = /* */ function(_S14) {
        (0, _inherits2.default)(Ts, _S14);
        var _super67 = _createSuper(Ts);
        function Ts() {
            var _this60;
            (0, _classCallCheck2.default)(this, Ts);
            _this60 = _super67.apply(this, arguments), _this60._tweenDic = {}, _this60._tweenDataList = [], 
            _this60._currTime = 0, _this60._lastTime = 0, _this60._startTime = 0, _this60._index = 0, 
            _this60._gidIndex = 0, _this60._firstTweenDic = {}, _this60._startTimeSort = !1, 
            _this60._endTimeSort = !1, _this60._loopKey = !1, _this60.scale = 1, _this60._frameRate = 60, 
            _this60._frameIndex = 0, _this60._total = 0;
            return _this60;
        }
        (0, _createClass2.default)(Ts, [ {
            key: "to",
            value: function to(t, e, i) {
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
                return this._create(t, e, i, s, r, !0);
            }
        }, {
            key: "from",
            value: function from(t, e, i) {
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
                return this._create(t, e, i, s, r, !1);
            }
        }, {
            key: "_create",
            value: function _create(t, e, i, r, a, n) {
                var h = s.getItemByClass("tweenData", vs);
                return h.isTo = n, h.type = 0, h.target = t, h.duration = i, h.data = e, h.startTime = this._startTime + a, 
                h.endTime = h.startTime + h.duration, h.ease = r, this._startTime = Math.max(h.endTime, this._startTime), 
                this._tweenDataList.push(h), this._startTimeSort = !0, this._endTimeSort = !0, this;
            }
        }, {
            key: "addLabel",
            value: function addLabel(t, e) {
                var i = s.getItemByClass("tweenData", vs);
                return i.type = 1, i.data = t, i.endTime = i.startTime = this._startTime + e, this._labelDic || (this._labelDic = {}), 
                this._labelDic[t] = i, this._tweenDataList.push(i), this;
            }
        }, {
            key: "removeLabel",
            value: function removeLabel(t) {
                if (this._labelDic && this._labelDic[t]) {
                    var e = this._labelDic[t];
                    if (e) {
                        var i = this._tweenDataList.indexOf(e);
                        i > -1 && this._tweenDataList.splice(i, 1);
                    }
                    delete this._labelDic[t];
                }
            }
        }, {
            key: "gotoTime",
            value: function gotoTime(t) {
                if (null != this._tweenDataList && 0 != this._tweenDataList.length) {
                    var e, i, r, a;
                    for (var n in this._firstTweenDic) {
                        if (i = this._firstTweenDic[n]) for (var h in i) {
                            h in i.diyTarget && (i.diyTarget[h] = i[h]);
                        }
                    }
                    for (n in this._tweenDic) {
                        (e = this._tweenDic[n]).clear(), delete this._tweenDic[n];
                    }
                    if (this._index = 0, this._gidIndex = 0, this._currTime = t, this._lastTime = se.now(), 
                    null == this._endTweenDataList || this._endTimeSort) {
                        this._endTimeSort = !1, this._endTweenDataList = r = this._tweenDataList.concat(), 
                        r.sort(function(t, e) {
                            return t.endTime > e.endTime ? 1 : t.endTime < e.endTime ? -1 : 0;
                        });
                    } else r = this._endTweenDataList;
                    for (var o = 0, l = r.length; o < l; o++) {
                        if (0 == (a = r[o]).type) {
                            if (!(t >= a.endTime)) break;
                            this._index = Math.max(this._index, o + 1);
                            var _ = a.data;
                            if (a.isTo) for (var u in _) {
                                a.target[u] = _[u];
                            }
                        }
                    }
                    for (o = 0, l = this._tweenDataList.length; o < l; o++) {
                        0 == (a = this._tweenDataList[o]).type && t >= a.startTime && t < a.endTime && (this._index = Math.max(this._index, o + 1), 
                        this._gidIndex++, (e = s.getItemByClass("tween", oi))._create(a.target, a.data, a.duration, a.ease, b.create(this, this._animComplete, [ this._gidIndex ]), 0, !1, a.isTo, !0, !1), 
                        e.setStartTime(this._currTime - (t - a.startTime)), e._updateEase(this._currTime), 
                        e.gid = this._gidIndex, this._tweenDic[this._gidIndex] = e);
                    }
                }
            }
        }, {
            key: "gotoLabel",
            value: function gotoLabel(t) {
                if (null != this._labelDic) {
                    var e = this._labelDic[t];
                    e && this.gotoTime(e.startTime);
                }
            }
        }, {
            key: "pause",
            value: function pause() {
                i.timer.clear(this, this._update);
            }
        }, {
            key: "resume",
            value: function resume() {
                this.play(this._currTime, this._loopKey);
            }
        }, {
            key: "play",
            value: function play() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
                if (this._tweenDataList) {
                    if (this._startTimeSort) {
                        this._startTimeSort = !1, this._tweenDataList.sort(function(t, e) {
                            return t.startTime > e.startTime ? 1 : t.startTime < e.startTime ? -1 : 0;
                        });
                        for (var s = 0, r = this._tweenDataList.length; s < r; s++) {
                            var a = this._tweenDataList[s];
                            if (null != a && 0 == a.type) {
                                var n = a.target, h = n.$_GID || (n.$_GID = $.getGID()), o = null;
                                for (var l in null == this._firstTweenDic[h] ? ((o = {}).diyTarget = n, this._firstTweenDic[h] = o) : o = this._firstTweenDic[h], 
                                a.data) {
                                    null == o[l] && (o[l] = n[l]);
                                }
                            }
                        }
                    }
                    "string" == typeof t ? this.gotoLabel(t) : this.gotoTime(t), this._loopKey = e, 
                    this._lastTime = se.now(), i.timer.frameLoop(1, this, this._update);
                }
            }
        }, {
            key: "_update",
            value: function _update() {
                if (this._currTime >= this._startTime) {
                    if (!this._loopKey) {
                        for (var t in this._tweenDic) {
                            (e = this._tweenDic[t]).complete();
                        }
                        return this.pause(), void this._complete();
                    }
                    if (this._complete(), !this._tweenDataList) return;
                    this.gotoTime(0);
                }
                var e, i = se.now(), r = i - this._lastTime, a = this._currTime += r * this.scale;
                for (t in this._lastTime = i, this._tweenDic) {
                    (e = this._tweenDic[t])._updateEase(a);
                }
                if (0 != this._tweenDataList.length && this._index < this._tweenDataList.length) {
                    var n = this._tweenDataList[this._index];
                    a >= n.startTime && (this._index++, 0 == n.type ? (this._gidIndex++, (e = s.getItemByClass("tween", oi))._create(n.target, n.data, n.duration, n.ease, b.create(this, this._animComplete, [ this._gidIndex ]), 0, !1, n.isTo, !0, !1), 
                    e.setStartTime(a), e.gid = this._gidIndex, this._tweenDic[this._gidIndex] = e, e._updateEase(a)) : this.event(Qt.LABEL, n.data));
                }
            }
        }, {
            key: "_animComplete",
            value: function _animComplete(t) {
                this._tweenDic[t] && delete this._tweenDic[t];
            }
        }, {
            key: "_complete",
            value: function _complete() {
                this.event(Qt.COMPLETE);
            }
        }, {
            key: "reset",
            value: function reset() {
                var t, e, s;
                if (this._labelDic) for (t in this._labelDic) {
                    delete this._labelDic[t];
                }
                for (t in this._tweenDic) {
                    this._tweenDic[t].clear(), delete this._tweenDic[t];
                }
                for (t in this._firstTweenDic) {
                    delete this._firstTweenDic[t];
                }
                if (this._endTweenDataList = null, this._tweenDataList && this._tweenDataList.length) for (s = this._tweenDataList.length, 
                e = 0; e < s; e++) {
                    this._tweenDataList[e] && this._tweenDataList[e].destroy();
                }
                this._tweenDataList.length = 0, this._currTime = 0, this._lastTime = 0, this._startTime = 0, 
                this._index = 0, this._gidIndex = 0, this.scale = 1, i.timer.clear(this, this._update);
            }
        }, {
            key: "destroy",
            value: function destroy() {
                this.reset(), this._labelDic = null, this._tweenDic = null, this._tweenDataList = null, 
                this._firstTweenDic = null;
            }
        }, {
            key: "index",
            get: function get() {
                return this._frameIndex;
            },
            set: function set(t) {
                this._frameIndex = t, this.gotoTime(this._frameIndex / this._frameRate * 1e3);
            }
        }, {
            key: "total",
            get: function get() {
                return this._total = Math.floor(this._startTime / 1e3 * this._frameRate), this._total;
            }
        } ], [ {
            key: "to",
            value: function to(t, e, i) {
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
                return new Ts().to(t, e, i, s, r);
            }
        }, {
            key: "from",
            value: function from(t, e, i) {
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
                return new Ts().from(t, e, i, s, r);
            }
        } ]);
        return Ts;
    }(S);
    var vs = /* */ function() {
        function vs() {
            (0, _classCallCheck2.default)(this, vs);
            this.type = 0, this.isTo = !0;
        }
        (0, _createClass2.default)(vs, [ {
            key: "destroy",
            value: function destroy() {
                this.target = null, this.ease = null, this.data = null, this.isTo = !0, this.type = 0, 
                s.recover("tweenData", this);
            }
        } ]);
        return vs;
    }();
    var xs = /* */ function() {
        function xs() {
            (0, _classCallCheck2.default)(this, xs);
        }
        (0, _createClass2.default)(xs, [ {
            key: "characterMapContains",
            value: function characterMapContains(t) {
                for (var e = 0; e < xs.charsMap.length; ++e) {
                    if (xs.charsMap[e][0] === t) return !0;
                }
                return !1;
            }
        }, {
            key: "getCharRep",
            value: function getCharRep(t) {
                for (var e = 0; e < xs.charsMap.length; ++e) {
                    if (xs.charsMap[e][0] === t) return xs.charsMap[e];
                }
                return !1;
            }
        }, {
            key: "getCombCharRep",
            value: function getCombCharRep(t, e) {
                for (var i = 0; i < xs.combCharsMap.length; ++i) {
                    if (xs.combCharsMap[i][0][0] === t && xs.combCharsMap[i][0][1] === e) return xs.combCharsMap[i];
                }
                return !1;
            }
        }, {
            key: "isTransparent",
            value: function isTransparent(t) {
                for (var e = 0; e < xs.transChars.length; ++e) {
                    if (xs.transChars[e] === t) return !0;
                }
                return !1;
            }
        }, {
            key: "getOriginalCharsFromCode",
            value: function getOriginalCharsFromCode(t) {
                var e;
                for (e = 0; e < xs.charsMap.length; ++e) {
                    if (xs.charsMap[e].indexOf(t) > -1) return String.fromCharCode(xs.charsMap[e][0]);
                }
                for (e = 0; e < xs.combCharsMap.length; ++e) {
                    if (xs.combCharsMap[e].indexOf(t) > -1) return String.fromCharCode(xs.combCharsMap[e][0][0]) + String.fromCharCode(xs.combCharsMap[e][0][1]);
                }
                return String.fromCharCode(t);
            }
        }, {
            key: "convertArabic",
            value: function convertArabic(t) {
                for (var e, i, s = "", r = 0; r < t.length; ++r) {
                    var a = t.charCodeAt(r);
                    if (this.characterMapContains(a)) {
                        for (var n = null, h = null, o = r - 1, l = r + 1; o >= 0 && this.isTransparent(t.charCodeAt(o)); --o) {}
                        for ((!(e = !!(n = o >= 0 ? t.charCodeAt(o) : null) && this.getCharRep(n)) || null == e[2] && null == e[3]) && (n = null); l < t.length && this.isTransparent(t.charCodeAt(l)); ++l) {}
                        if ((!(e = !!(h = l < t.length ? t.charCodeAt(l) : null) && this.getCharRep(h)) || null == e[3] && null == e[4]) && (h = null), 
                        1604 === a && null != h && (1570 === h || 1571 === h || 1573 === h || 1575 === h)) {
                            i = this.getCombCharRep(a, h), s += null != n ? String.fromCharCode(i[4]) : String.fromCharCode(i[1]), 
                            ++r;
                            continue;
                        }
                        if (e = this.getCharRep(a), null != n && null != h && null != e[3]) {
                            s += String.fromCharCode(e[3]);
                            continue;
                        }
                        if (null != n && null != e[4]) {
                            s += String.fromCharCode(e[4]);
                            continue;
                        }
                        if (null != h && null != e[2]) {
                            s += String.fromCharCode(e[2]);
                            continue;
                        }
                        s += String.fromCharCode(e[1]);
                    } else s += String.fromCharCode(a);
                }
                return s;
            }
        }, {
            key: "convertArabicBack",
            value: function convertArabicBack(t) {
                var e, i, s = "";
                for (i = 0; i < t.length; ++i) {
                    e = t.charCodeAt(i), s += this.getOriginalCharsFromCode(e);
                }
                return s;
            }
        } ]);
        return xs;
    }();
    xs.charsMap = [ [ 1569, 65152, null, null, null ], [ 1570, 65153, null, null, 65154 ], [ 1571, 65155, null, null, 65156 ], [ 1572, 65157, null, null, 65158 ], [ 1573, 65159, null, null, 65160 ], [ 1574, 65161, 65163, 65164, 65162 ], [ 1575, 65165, null, null, 65166 ], [ 1576, 65167, 65169, 65170, 65168 ], [ 1577, 65171, null, null, 65172 ], [ 1578, 65173, 65175, 65176, 65174 ], [ 1579, 65177, 65179, 65180, 65178 ], [ 1580, 65181, 65183, 65184, 65182 ], [ 1581, 65185, 65187, 65188, 65186 ], [ 1582, 65189, 65191, 65192, 65190 ], [ 1583, 65193, null, null, 65194 ], [ 1584, 65195, null, null, 65196 ], [ 1585, 65197, null, null, 65198 ], [ 1586, 65199, null, null, 65200 ], [ 1587, 65201, 65203, 65204, 65202 ], [ 1588, 65205, 65207, 65208, 65206 ], [ 1589, 65209, 65211, 65212, 65210 ], [ 1590, 65213, 65215, 65216, 65214 ], [ 1591, 65217, 65219, 65220, 65218 ], [ 1592, 65221, 65223, 65224, 65222 ], [ 1593, 65225, 65227, 65228, 65226 ], [ 1594, 65229, 65231, 65232, 65230 ], [ 1600, 1600, 1600, 1600, 1600 ], [ 1601, 65233, 65235, 65236, 65234 ], [ 1602, 65237, 65239, 65240, 65238 ], [ 1603, 65241, 65243, 65244, 65242 ], [ 1604, 65245, 65247, 65248, 65246 ], [ 1605, 65249, 65251, 65252, 65250 ], [ 1606, 65253, 65255, 65256, 65254 ], [ 1607, 65257, 65259, 65260, 65258 ], [ 1608, 65261, null, null, 65262 ], [ 1609, 65263, null, null, 65264 ], [ 1610, 65265, 65267, 65268, 65266 ], [ 1662, 64342, 64344, 64345, 64343 ], [ 1740, 64508, 64510, 64511, 64509 ], [ 1670, 64378, 64380, 64381, 64379 ], [ 1705, 64398, 64400, 64401, 64399 ], [ 1711, 64402, 64404, 64405, 64403 ], [ 1688, 64394, null, null, 64395 ] ], 
    xs.combCharsMap = [ [ [ 1604, 1570 ], 65269, null, null, 65270 ], [ [ 1604, 1571 ], 65271, null, null, 65272 ], [ [ 1604, 1573 ], 65273, null, null, 65274 ], [ [ 1604, 1575 ], 65275, null, null, 65276 ] ], 
    xs.transChars = [ 1552, 1554, 1555, 1556, 1557, 1611, 1612, 1613, 1614, 1615, 1616, 1617, 1618, 1619, 1620, 1621, 1622, 1623, 1624, 1648, 1750, 1751, 1752, 1753, 1754, 1755, 1756, 1759, 1760, 1761, 1762, 1763, 1764, 1767, 1768, 1770, 1771, 1772, 1773 ];
    var ys = /* */ function() {
        function ys() {
            (0, _classCallCheck2.default)(this, ys);
        }
        (0, _createClass2.default)(ys, null, [ {
            key: "ArrayMul",
            value: function ArrayMul(t, e, i) {
                if (t) {
                    if (e) for (var s, r, a, n, h = 0; h < 4; h++) {
                        s = t[h], r = t[h + 4], a = t[h + 8], n = t[h + 12], i[h] = s * e[0] + r * e[1] + a * e[2] + n * e[3], 
                        i[h + 4] = s * e[4] + r * e[5] + a * e[6] + n * e[7], i[h + 8] = s * e[8] + r * e[9] + a * e[10] + n * e[11], 
                        i[h + 12] = s * e[12] + r * e[13] + a * e[14] + n * e[15];
                    } else ys.copyArray(t, i);
                } else ys.copyArray(e, i);
            }
        }, {
            key: "copyArray",
            value: function copyArray(t, e) {
                if (t && e) for (var i = 0; i < t.length; i++) {
                    e[i] = t[i];
                }
            }
        } ]);
        return ys;
    }();
    return t.AlphaCmd = r, t.Animation = Hi, t.AnimationBase = ui, t.ArabicReshaper = xs, 
    t.AtlasGrid = jt, t.AtlasInfoManager = ei, t.AudioSound = Ke, t.AudioSoundChannel = ze, 
    t.BasePoly = Gt, t.BaseShader = N, t.BaseTexture = L, t.Bezier = ot, t.Bitmap = P, 
    t.BitmapFont = $e, t.BlendMode = W, t.BlurFilter = $i, t.BlurFilterGLRender = Qi, 
    t.BlurFilterSetter = Ji, t.BoundsStyle = Me, t.Browser = se, t.Buffer = yt, t.Buffer2D = At, 
    t.BufferState2D = xt, t.BufferStateBase = vt, t.ButtonEffect = /* */ function() {
        function _class() {
            (0, _classCallCheck2.default)(this, _class);
            this._curState = 0, this.effectScale = 1.5, this.tweenTime = 300;
        }
        (0, _createClass2.default)(_class, [ {
            key: "toChangedState",
            value: function toChangedState() {
                this._curState = 1, this._curTween && oi.clear(this._curTween), this._curTween = oi.to(this._tar, {
                    scaleX: this.effectScale,
                    scaleY: this.effectScale
                }, this.tweenTime, hi[this.effectEase], b.create(this, this.tweenComplete));
            }
        }, {
            key: "toInitState",
            value: function toInitState() {
                2 != this._curState && (this._curTween && oi.clear(this._curTween), this._curState = 2, 
                this._curTween = oi.to(this._tar, {
                    scaleX: 1,
                    scaleY: 1
                }, this.tweenTime, hi[this.backEase], b.create(this, this.tweenComplete)));
            }
        }, {
            key: "tweenComplete",
            value: function tweenComplete() {
                this._curState = 0, this._curTween = null;
            }
        }, {
            key: "target",
            set: function set(t) {
                this._tar = t, t.on(Qt.MOUSE_DOWN, this, this.toChangedState), t.on(Qt.MOUSE_UP, this, this.toInitState), 
                t.on(Qt.MOUSE_OUT, this, this.toInitState);
            }
        } ]);
        return _class;
    }(), t.Byte = D, t.CONST3D2D = Yt, t.CacheManger = xe, t.CacheStyle = Ie, t.CallLater = Ge, 
    t.CharRenderInfo = ee, t.CharRender_Canvas = re, t.CharRender_Native = ae, t.CharSubmitCache = Kt, 
    t.ClassUtils = we, t.ClipRectCmd = ge, t.ColorFilter = tt, t.ColorFilterSetter = ts, 
    t.ColorUtils = J, t.CommandEncoder = /* */ function() {
        function _class2(t, e, i, s) {
            (0, _classCallCheck2.default)(this, _class2);
            this._idata = [];
        }
        (0, _createClass2.default)(_class2, [ {
            key: "getArrayData",
            value: function getArrayData() {
                return this._idata;
            }
        }, {
            key: "getPtrID",
            value: function getPtrID() {
                return 0;
            }
        }, {
            key: "beginEncoding",
            value: function beginEncoding() {}
        }, {
            key: "endEncoding",
            value: function endEncoding() {}
        }, {
            key: "clearEncoding",
            value: function clearEncoding() {
                this._idata.length = 0;
            }
        }, {
            key: "getCount",
            value: function getCount() {
                return this._idata.length;
            }
        }, {
            key: "add_ShaderValue",
            value: function add_ShaderValue(t) {
                this._idata.push(t);
            }
        }, {
            key: "addShaderUniform",
            value: function addShaderUniform(t) {
                this.add_ShaderValue(t);
            }
        } ]);
        return _class2;
    }(), t.CommonScript = /* */ function(_i14) {
        (0, _inherits2.default)(_class3, _i14);
        var _super68 = _createSuper(_class3);
        (0, _createClass2.default)(_class3, [ {
            key: "isSingleton",
            get: function get() {
                return !1;
            }
        } ]);
        function _class3() {
            (0, _classCallCheck2.default)(this, _class3);
            return _super68.call(this);
        }
        (0, _createClass2.default)(_class3, [ {
            key: "onAwake",
            value: function onAwake() {}
        }, {
            key: "onEnable",
            value: function onEnable() {}
        }, {
            key: "onStart",
            value: function onStart() {}
        }, {
            key: "onUpdate",
            value: function onUpdate() {}
        }, {
            key: "onLateUpdate",
            value: function onLateUpdate() {}
        }, {
            key: "onDisable",
            value: function onDisable() {}
        }, {
            key: "onDestroy",
            value: function onDestroy() {}
        } ]);
        return _class3;
    }(_i), t.Component = _i, t.Config = e, t.Const = Ae, t.Context = he, t.Dragging = li, 
    t.Draw9GridTexture = de, t.DrawCircleCmd = a, t.DrawCurvesCmd = n, t.DrawImageCmd = h, 
    t.DrawLineCmd = o, t.DrawLinesCmd = l, t.DrawParticleCmd = qi, t.DrawPathCmd = _, 
    t.DrawPieCmd = u, t.DrawPolyCmd = c, t.DrawRectCmd = d, t.DrawStyle = _t, t.DrawTextureCmd = et, 
    t.DrawTexturesCmd = Te, t.DrawTrianglesCmd = ce, t.Earcut = Wt, t.EarcutNode = kt, 
    t.Ease = hi, t.EffectAnimation = zi, t.EffectBase = es, t.Event = Qt, t.EventDispatcher = S, 
    t.FadeIn = /* */ function(_es) {
        (0, _inherits2.default)(_class4, _es);
        var _super69 = _createSuper(_class4);
        function _class4() {
            (0, _classCallCheck2.default)(this, _class4);
            return _super69.apply(this, arguments);
        }
        (0, _createClass2.default)(_class4, [ {
            key: "_doTween",
            value: function _doTween() {
                return this.target.alpha = 0, oi.to(this.target, {
                    alpha: 1
                }, this.duration, hi[this.ease], this._comlete, this.delay);
            }
        } ]);
        return _class4;
    }(es), t.FadeOut = /* */ function(_es2) {
        (0, _inherits2.default)(_class5, _es2);
        var _super70 = _createSuper(_class5);
        function _class5() {
            (0, _classCallCheck2.default)(this, _class5);
            return _super70.apply(this, arguments);
        }
        (0, _createClass2.default)(_class5, [ {
            key: "_doTween",
            value: function _doTween() {
                return this.target.alpha = 1, oi.to(this.target, {
                    alpha: 0
                }, this.duration, hi[this.ease], this._comlete, this.delay);
            }
        } ]);
        return _class5;
    }(es), t.FillTextCmd = ve, t.FillTextureCmd = it, t.Filter = Q, t.FilterSetterBase = Zi, 
    t.FontInfo = Jt, t.FrameAnimation = di, t.GlowFilter = ss, t.GlowFilterGLRender = is, 
    t.GlowFilterSetter = rs, t.GrahamScan = lt, t.GraphicAnimation = Vi, t.Graphics = Ee, 
    t.GraphicsBounds = fe, t.HTMLCanvas = be, t.HTMLChar = cs, t.HTMLImage = Pi, t.HalfFloatUtils = F, 
    t.Handler = b, t.HitArea = Se, t.HttpRequest = Je, t.ICharRender = ie, t.ILaya = i, 
    t.IStatRender = Ti, t.IndexBuffer2D = Ct, t.InlcudeFile = Ri, t.Input = Oe, t.KeyBoardManager = Xe, 
    t.KeyLocation = as, t.Keyboard = ns, t.Laya = Li, t.LayaGL = g, t.LayaGLQuickRunner = Ce, 
    t.LayaGLRunner = /* */ function() {
        function _class6() {
            (0, _classCallCheck2.default)(this, _class6);
        }
        (0, _createClass2.default)(_class6, null, [ {
            key: "uploadShaderUniforms",
            value: function uploadShaderUniforms(t, e, i, s) {
                for (var r = i._data, a = e.getArrayData(), n = 0, h = 0, o = a.length; h < o; h++) {
                    var l = a[h];
                    if (s || -1 !== l.textureID) {
                        var _ = r[l.dataOffset];
                        null != _ && (n += l.fun.call(l.caller, l, _));
                    }
                }
                return n;
            }
        }, {
            key: "uploadCustomUniform",
            value: function uploadCustomUniform(t, e, i, s) {
                var r = 0, a = e[i];
                return a && null != s && (r += a.fun.call(a.caller, a, s)), r;
            }
        }, {
            key: "uploadShaderUniformsForNative",
            value: function uploadShaderUniformsForNative(t, e, i) {
                var s = g.UPLOAD_SHADER_UNIFORM_TYPE_ID;
                i._runtimeCopyValues.length > 0 && (s = g.UPLOAD_SHADER_UNIFORM_TYPE_DATA);
                var r = i._data;
                return g.instance.uploadShaderUniforms(e, r, s);
            }
        } ]);
        return _class6;
    }(), t.LayaGPU = _e, t.Loader = ti, t.LoaderManager = ii, t.LocalStorage = ri, t.Log = ds, 
    t.MathUtil = ci, t.MatirxArray = ys, t.Matrix = p, t.Mesh2D = bt, t.MeshParticle2D = Ii, 
    t.MeshQuadTexture = St, t.MeshTexture = wt, t.MeshVG = Mt, t.Mouse = Mi, t.MouseManager = Ue, 
    t.Node = Le, t.Path = ut, t.PerfData = fs, t.PerfHUD = ms, t.PerformancePlugin = Ye, 
    t.Point = f, t.Pool = s, t.PoolCache = gs, t.Prefab = Qe, t.PrimitiveSV = Ai, t.QuickTestTool = hs, 
    t.Rectangle = m, t.Render = ue, t.RenderInfo = Et, t.RenderSprite = Re, t.RenderState2D = U, 
    t.RenderTexture2D = G, t.Resource = I, t.ResourceVersion = ls, t.RestoreCmd = st, 
    t.RotateCmd = rt, t.RunDriver = We, t.SaveBase = pt, t.SaveClipRect = ft, t.SaveCmd = pe, 
    t.SaveMark = mt, t.SaveTransform = gt, t.SaveTranslate = Tt, t.ScaleCmd = at, t.Scene = ji, 
    t.SceneLoader = Ki, t.SceneUtils = fi, t.Script = Yi, t.Shader = z, t.Shader2D = Nt, 
    t.Shader2X = K, t.ShaderCompile = Si, t.ShaderDefines2D = V, t.ShaderDefinesBase = Y, 
    t.ShaderNode = bi, t.ShaderValue = /* */ function() {
        function _class7() {
            (0, _classCallCheck2.default)(this, _class7);
        }
        return _class7;
    }(), t.SkinMeshBuffer = Ut, t.SkinSV = Ei, t.Socket = _s, t.Sound = /* */ function(_S15) {
        (0, _inherits2.default)(_class8, _S15);
        var _super71 = _createSuper(_class8);
        function _class8() {
            (0, _classCallCheck2.default)(this, _class8);
            return _super71.apply(this, arguments);
        }
        (0, _createClass2.default)(_class8, [ {
            key: "load",
            value: function load(t) {}
        }, {
            key: "play",
            value: function play() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                return null;
            }
        }, {
            key: "dispose",
            value: function dispose() {}
        }, {
            key: "duration",
            get: function get() {
                return 0;
            }
        } ]);
        return _class8;
    }(S), t.SoundChannel = He, t.SoundManager = Ze, t.SoundNode = os, t.Sprite = De, 
    t.SpriteConst = me, t.SpriteStyle = Pe, t.Stage = Ve, t.Stat = X, t.StatUI = vi, 
    t.StringKey = H, t.Submit = Vt, t.SubmitBase = dt, t.SubmitCMD = Z, t.SubmitCanvas = Xt, 
    t.SubmitKey = q, t.SubmitTarget = Ht, t.SubmitTexture = zt, t.System = /* */ function() {
        function _class9() {
            (0, _classCallCheck2.default)(this, _class9);
        }
        (0, _createClass2.default)(_class9, null, [ {
            key: "changeDefinition",
            value: function changeDefinition(t, e) {
                window.Laya[t] = e;
                var i = t + "=classObj";
                window.eval(i);
            }
        } ]);
        return _class9;
    }(), t.SystemUtils = B, t.TTFLoader = ni, t.Text = Fe, t.TextAtlas = Zt, t.TextRender = ne, 
    t.TextStyle = Be, t.TextTexture = qt, t.Texture = $t, t.Texture2D = O, t.TextureSV = Ci, 
    t.TimeLine = Ts, t.Timer = xi, t.TouchManager = Ne, t.TransformCmd = nt, t.TranslateCmd = ht, 
    t.Tween = oi, t.URL = M, t.Utils = $, t.Value2D = j, t.VectorGraphManager = ye, 
    t.VertexArrayObject = /* */ function() {
        function _class10() {
            (0, _classCallCheck2.default)(this, _class10);
        }
        return _class10;
    }(), t.VertexBuffer2D = Rt, t.VideoTexture = us, t.WeakObject = pi, t.WebAudioSound = qe, 
    t.WebAudioSoundChannel = je, t.WebGL = le, t.WebGLCacheAsNormalCanvas = It, t.WebGLContext = R, 
    t.WebGLRTMgr = k, t.WordText = te, t.WorkerLoader = wi, t.__init = Ni, t._static = _static, 
    t.alertGlobalError = ki, t.enableDebugPanel = Wi, t.init = Ui, t.isWXOpenDataContext = void 0, 
    t.isWXPosMsg = void 0, t.version = Gi, t.static = _static, t;
}({});
}()