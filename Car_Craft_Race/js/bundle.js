!function () {
    var _interopRequireDefault = require("../@babel/runtime/helpers/interopRequireDefault");

    var _possibleConstructorReturn2 = require("../@babel/runtime/helpers/possibleConstructorReturn");

    var _regenerator = _interopRequireDefault(require("../@babel/runtime/regenerator"));

    var _assertThisInitialized2 = require("../@babel/runtime/helpers/assertThisInitialized");

    var _classCallCheck2 = require("../@babel/runtime/helpers/classCallCheck");

    var _createClass2 = require("../@babel/runtime/helpers/createClass");

    var _get2 = require("../@babel/runtime/helpers/get");

    var _getPrototypeOf2 = require("../@babel/runtime/helpers/getPrototypeOf");

    var _inherits2 = require("../@babel/runtime/helpers/inherits");

    var _createSuper2 = require("../@babel/runtime/helpers/createSuper");

    !function () {
        "use strict";
        var t, e = Laya.Scene, i = Laya.ClassUtils.regClass;
        !function (t) {
            !function (t) {
                var s = /* */ function (_e) {
                    _inherits2(s, _e);
                    var _super = _createSuper2(s);
                    function s() {
                        _classCallCheck2(this, s);
                        return _super.call(this);
                    }
                    _createClass2(s, [{
                        key: "createChildren",
                        value: function createChildren() {
                            _get2(_getPrototypeOf2(s.prototype), "createChildren", this).call(this), this.loadScene("test/TestScene");
                        }
                    }]);
                    return s;
                }(e);
                t.TestSceneUI = s, i("ui.test.TestSceneUI", s);
            }(t.test || (t.test = {}));
        }(t || (t = {}));
        var s = /* */ function (_t$test$TestSceneUI) {
            _inherits2(s, _t$test$TestSceneUI);
            var _super2 = _createSuper2(s);
            function s() {
                var _this;
                _classCallCheck2(this, s);
                _this = _super2.call(this), _this.newScene = Laya.stage.addChild(new Laya.Scene3D());
                var t = _this.newScene.addChild(new Laya.Camera(0, .1, 100));
                t.transform.translate(new Laya.Vector3(0, 6, 9.5)), t.transform.rotate(new Laya.Vector3(-15, 0, 0), !0, !1);
                var e = new Laya.DirectionLight();
                _this.newScene.addChild(e), e.color = new Laya.Vector3(.6, .6, .6);
                var i = e.transform.worldMatrix;
                i.setForward(new Laya.Vector3(-1, -1, -1)), e.transform.worldMatrix = i;
                var _s = _this.newScene.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createPlane(10, 10, 10, 10))), r = new Laya.BlinnPhongMaterial();
                Laya.Texture2D.load("res/grass.png", Laya.Handler.create(_assertThisInitialized2(_this), function (t) {
                    r.albedoTexture = t;
                }));
                var a = r.tilingOffset;
                a.setValue(5, 5, 0, 0), r.tilingOffset = a, _s.meshRenderer.material = r;
                var n = _s.addComponent(Laya.PhysicsCollider), o = new Laya.BoxColliderShape(10, 0, 10);
                n.colliderShape = o, n.friction = 2, n.restitution = .3, _this.mat1 = new Laya.BlinnPhongMaterial(),
                    Laya.Texture2D.load("res/wood.jpg", Laya.Handler.create(_assertThisInitialized2(_this), function (t) {
                        this.mat1.albedoTexture = t, Laya.timer.once(100, this, function () {
                            this.addBox();
                        });
                    }));
                return _this;
            }
            _createClass2(s, [{
                key: "addBox",
                value: function addBox() {
                    var t = this.newScene.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createBox(.75, .5, .5)));
                    t.meshRenderer.material = this.mat1;
                    var e = t.transform, i = e.position;
                    i.setValue(0, 10, 0), e.position = i;
                    var _s2 = t.addComponent(Laya.Rigidbody3D), r = new Laya.BoxColliderShape(.75, .5, .5);
                    _s2.colliderShape = r, _s2.mass = 10;
                }
            }]);
            return s;
        }(t.test.TestSceneUI);
        var r = /* */ function () {
            function r() {
                _classCallCheck2(this, r);
            }
            _createClass2(r, null, [{
                key: "init",
                value: function init() {
                    (0, Laya.ClassUtils.regClass)("script/GameUI.ts", s);
                }
            }]);
            return r;
        }();
        r.width = 750, r.height = 1334, r.scaleMode = "exactfit", r.screenMode = "none",
            r.alignV = "middle", r.alignH = "center", r.startScene = "test/TestScene.scene", r.sceneRoot = "",
            r.debug = !1, r.stat = !1, r.physicsDebug = !1, r.exportSceneToJson = !0, r.init();
        var a;
        function __awaiter(t, e, i, s) {
            return new (i || (i = Promise))(function (r, a) {
                function fulfilled(t) {
                    try {
                        step(s.next(t));
                    } catch (t) {
                        a(t);
                    }
                }
                function rejected(t) {
                    try {
                        step(s.throw(t));
                    } catch (t) {
                        a(t);
                    }
                }
                function step(t) {
                    t.done ? r(t.value) : new i(function (e) {
                        e(t.value);
                    }).then(fulfilled, rejected);
                }
                step((s = s.apply(t, e || [])).next());
            });
        }
        var n = /* */ function (_fgui$GComponent) {
            _inherits2(n, _fgui$GComponent);
            var _super3 = _createSuper2(n);
            function n() {
                _classCallCheck2(this, n);
                return _super3.apply(this, arguments);
            }
            _createClass2(n, [{
                key: "onConstruct",
                value: function onConstruct() {
                    this.m_needTxt = this.getChildAt(3), this.m_progress = this.getChildAt(4);
                }
            }], [{
                key: "createInstance",
                value: function createInstance() {
                    return fgui.UIPackage.createObject("main1", "CarNode");
                }
            }]);
            return n;
        }(fgui.GComponent);
        n.URL = "ui://yez3x3zggb5w1j";
        var o = /* */ function (_fgui$GComponent2) {
            _inherits2(o, _fgui$GComponent2);
            var _super4 = _createSuper2(o);
            function o() {
                _classCallCheck2(this, o);
                return _super4.apply(this, arguments);
            }
            _createClass2(o, [{
                key: "onConstruct",
                value: function onConstruct() {
                    this.m_c1 = this.getControllerAt(0), this.m_c2 = this.getControllerAt(1), this.m_enemy_full = this.getChildAt(0),
                        this.m_num = this.getChildAt(1), this.m_maxNum = this.getChildAt(2), this.m_player = this.getChildAt(3),
                        this.m_player_full = this.getChildAt(4), this.m_enemy = this.getChildAt(5), this.m_t0 = this.getTransitionAt(0),
                        this.m_t1 = this.getTransitionAt(1);
                }
            }], [{
                key: "createInstance",
                value: function createInstance() {
                    return fgui.UIPackage.createObject("main1", "playerComp");
                }
            }]);
            return o;
        }(fgui.GComponent);
        o.URL = "ui://yez3x3zggb5w1l";
        var l = /* */ function (_fgui$GComponent3) {
            _inherits2(l, _fgui$GComponent3);
            var _super5 = _createSuper2(l);
            function l() {
                _classCallCheck2(this, l);
                return _super5.apply(this, arguments);
            }
            _createClass2(l, [{
                key: "onConstruct",
                value: function onConstruct() {
                    this.m_t0 = this.getTransitionAt(0);
                }
            }], [{
                key: "createInstance",
                value: function createInstance() {
                    return fgui.UIPackage.createObject("main1", "startComp");
                }
            }]);
            return l;
        }(fgui.GComponent);
        l.URL = "ui://yez3x3zgp3imv";
        var h = /* */ function (_fgui$GComponent4) {
            _inherits2(h, _fgui$GComponent4);
            var _super6 = _createSuper2(h);
            function h() {
                _classCallCheck2(this, h);
                return _super6.apply(this, arguments);
            }
            _createClass2(h, [{
                key: "onConstruct",
                value: function onConstruct() {
                    this.m_start = this.getChildAt(0);
                }
            }], [{
                key: "createInstance",
                value: function createInstance() {
                    return fgui.UIPackage.createObject("main1", "HomeView");
                }
            }]);
            return h;
        }(fgui.GComponent);
        h.URL = "ui://yez3x3zgr7pb1";
        var c = /* */ function (_fgui$GComponent5) {
            _inherits2(c, _fgui$GComponent5);
            var _super7 = _createSuper2(c);
            function c() {
                _classCallCheck2(this, c);
                return _super7.apply(this, arguments);
            }
            _createClass2(c, [{
                key: "onConstruct",
                value: function onConstruct() {
                    this.m_c1 = this.getControllerAt(0), this.m_nextBtn = this.getChildAt(0), this.m_touchRec = this.getChildAt(1),
                        this.m_control = this.getChildAt(2), this.m_rank = this.getChildAt(3), this.m_winBtn = this.getChildAt(4),
                        this.m_progress = this.getChildAt(5), this.m_click = this.getChildAt(7);
                }
            }], [{
                key: "createInstance",
                value: function createInstance() {
                    return fgui.UIPackage.createObject("main1", "PlayView");
                }
            }]);
            return c;
        }(fgui.GComponent);
        c.URL = "ui://yez3x3zgr7pb2";
        var d = /* */ function (_fgui$GComponent6) {
            _inherits2(d, _fgui$GComponent6);
            var _super8 = _createSuper2(d);
            function d() {
                _classCallCheck2(this, d);
                return _super8.apply(this, arguments);
            }
            _createClass2(d, [{
                key: "onConstruct",
                value: function onConstruct() {
                    this.m_bgImg = this.getChildAt(0), this.m_controllerPoint = this.getChildAt(1);
                }
            }], [{
                key: "createInstance",
                value: function createInstance() {
                    return fgui.UIPackage.createObject("main1", "playController");
                }
            }]);
            return d;
        }(fgui.GComponent);
        d.URL = "ui://yez3x3zgr7pb6";
        var u = /* */ function () {
            function u() {
                _classCallCheck2(this, u);
            }
            _createClass2(u, null, [{
                key: "bindAll",
                value: function bindAll() {
                    fgui.UIObjectFactory.setExtension(n.URL, n), fgui.UIObjectFactory.setExtension(o.URL, o),
                        fgui.UIObjectFactory.setExtension(l.URL, l), fgui.UIObjectFactory.setExtension(h.URL, h),
                        fgui.UIObjectFactory.setExtension(c.URL, c), fgui.UIObjectFactory.setExtension(d.URL, d);
                }
            }]);
            return u;
        }();
        var _ = /* */ function () {
            function _() {
                _classCallCheck2(this, _);
            }
            _createClass2(_, null, [{
                key: "draw_bezier_curves",
                value: function draw_bezier_curves(t, e, i) {
                    var s = new Array(), r = 0;
                    do {
                        var a = this.bezier_interpolation_func(r, t, e);
                        r += i, s.push(a);
                    } while (r <= 1 && e > 1);
                    return s;
                }
            }, {
                key: "bezier_interpolation_func",
                value: function bezier_interpolation_func(t, e, i) {
                    var s = new Laya.Vector3(), r = 0, a = 0, n = 0;
                    for (var _s3 = 0; _s3 < i; _s3++) {
                        var o, l = i - 1;
                        r += (o = this.calc_combination_number(l, _s3)) * e[_s3].x * Math.pow(1 - t, l - _s3) * Math.pow(t, _s3),
                            a += o * e[_s3].y * Math.pow(1 - t, l - _s3) * Math.pow(t, _s3), n += o * e[_s3].z * Math.pow(1 - t, l - _s3) * Math.pow(t, _s3);
                    }
                    return s.x = r, s.y = a, s.z = n, s;
                }
            }, {
                key: "calc_combination_number",
                value: function calc_combination_number(t, e) {
                    var i = [];
                    for (var _e2 = 1; _e2 <= t; _e2++) {
                        i[_e2] = 1;
                        for (var _t2 = _e2 - 1; _t2 >= 1; _t2--) {
                            i[_t2] += i[_t2 - 1];
                        }
                        i[0] = 1;
                    }
                    return i[e];
                }
            }]);
            return _;
        }();
        var m = /* */ function () {
            function m() {
                _classCallCheck2(this, m);
            }
            _createClass2(m, null, [{
                key: "BaseURL",
                value: function BaseURL(t, e) {
                    var i = this.baseUrl3D + t;
                    return null != e && e.trim().length > 0 && (i += "." + e), i;
                }
            }, {
                key: "LoadScene3D",
                value: function LoadScene3D(t) {
                    return __awaiter(this, void 0, void 0, /* */ _regenerator.default.mark(function _callee() {
                        return _regenerator.default.wrap(function _callee$(_context) {
                            while (1) {
                                switch (_context.prev = _context.next) {
                                    case 0:
                                        return _context.abrupt("return", new Promise(function (e, i) {
                                            var s = Laya.loader.getRes(t);
                                            s ? e(s) : Laya.Scene3D.load(t, Laya.Handler.create(null, function (t) {
                                                e(t);
                                            }));
                                        }));

                                    case 1:
                                    case "end":
                                        return _context.stop();
                                }
                            }
                        }, _callee);
                    }));
                }
            }, {
                key: "LoadSprite3D",
                value: function LoadSprite3D(t) {
                    return __awaiter(this, void 0, void 0, /* */ _regenerator.default.mark(function _callee2() {
                        return _regenerator.default.wrap(function _callee2$(_context2) {
                            while (1) {
                                switch (_context2.prev = _context2.next) {
                                    case 0:
                                        return _context2.abrupt("return", new Promise(function (e, i) {
                                            var s = Laya.loader.getRes(t);
                                            s ? e(s) : Laya.Sprite3D.load(t, Laya.Handler.create(null, function (t) {
                                                e(t);
                                            }));
                                        }));

                                    case 1:
                                    case "end":
                                        return _context2.stop();
                                }
                            }
                        }, _callee2);
                    }));
                }
            }, {
                key: "AddComponentIfNotExist",
                value: function AddComponentIfNotExist(t, e) {
                    if (null == t) return;
                    var i = t.getComponent(e);
                    return null == i && (i = t.addComponent(e)), i;
                }
            }]);
            return m;
        }();
        m.baseUrl3D = "3dres/Conventional/";
        var p = /* */ function () {
            function p() {
                _classCallCheck2(this, p);
            }
            _createClass2(p, null, [{
                key: "prefabs",
                get: function get() {
                    return null == this._prefabs && (this._prefabs = {}), this._prefabs;
                }
            }, {
                key: "pools",
                get: function get() {
                    return null == this._pools && (this._pools = {}), this._pools;
                }
            }, {
                key: "deadMaterial",
                get: function get() {
                    return null == this._deadMaterial && (this._deadMaterial = {}), this._deadMaterial;
                }
            }, {
                key: "loadPrefab",
                value: function loadPrefab(t) {
                    return __awaiter(this, void 0, void 0, /* */ _regenerator.default.mark(function _callee3() {
                        var _e3;
                        return _regenerator.default.wrap(function _callee3$(_context3) {
                            while (1) {
                                switch (_context3.prev = _context3.next) {
                                    case 0:
                                        if (!(null == this.prefabs[t])) {
                                            _context3.next = 5;
                                            break;
                                        }
                                        _context3.next = 3;
                                        return m.LoadSprite3D(m.BaseURL(t, "lh"));

                                    case 3:
                                        _e3 = _context3.sent;
                                        _e3 && (this.prefabs[t] = _e3, _e3 instanceof Laya.ShuriKenParticle3D && this.compileParticleShader(_e3));

                                    case 5:
                                    case "end":
                                        return _context3.stop();
                                }
                            }
                        }, _callee3, this);
                    }));
                }
            }, {
                key: "loadPrefabs",
                value: function loadPrefabs(t) {
                    return __awaiter(this, void 0, void 0, /* */ _regenerator.default.mark(function _callee4() {
                        var _e4, _i;
                        return _regenerator.default.wrap(function _callee4$(_context4) {
                            while (1) {
                                switch (_context4.prev = _context4.next) {
                                    case 0:
                                        if (null == t || t.length <= 0) {
                                            _context4.next = 8;
                                            break;
                                        }
                                        _e4 = 0, _i = t.length;

                                    case 2:
                                        if (!(_e4 < _i)) {
                                            _context4.next = 8;
                                            break;
                                        }
                                        _context4.next = 5;
                                        return this.loadPrefab(t[_e4]);

                                    case 5:
                                        _e4++;
                                        _context4.next = 2;
                                        break;

                                    case 8:
                                    case "end":
                                        return _context4.stop();
                                }
                            }
                        }, _callee4, this);
                    }));
                }
            }, {
                key: "compileParticleShader",
                value: function compileParticleShader(t) {
                    var e = t.particleRenderer.materials;
                    for (var _t3 = 0, _i2 = e.length; _t3 < _i2; _t3++) {
                        var _i3 = e[_t3], _s4 = _i3._defineDatas, _r = Laya.ShaderPass._debugDefineString;
                        if (_r || (_r = []), Laya.Shader3D._getNamesByDefineData(_s4, _r), !Config3D._config && Config3D._config._multiLighting) {
                            var _t4 = _r.indexOf("LEGACYSINGLELIGHTING");
                            -1 !== _t4 && _r.splice(_t4, 1);
                        }
                        var _a = _i3._shader;
                        if (!_a) continue;
                        var _n = _a._subShaders;
                        if (_n && _n.length > 0) for (var _t5 = 0; _t5 < _n.length; _t5++) {
                            var _e5 = _n[_t5]._passes;
                            if (_e5 && _e5.length > 0) for (var _i4 = 0; _i4 < _e5.length; _i4++) {
                                _e5[_i4] && Laya.Shader3D.compileShaderByDefineNames(_a.name, _t5, _i4, _r);
                            }
                        }
                    }
                    var i = t.numChildren;
                    if (i > 0) for (var _e6 = 0; _e6 < i; _e6++) {
                        var _i5 = t.getChildAt(_e6);
                        _i5 instanceof Laya.ShuriKenParticle3D && this.compileParticleShader(_i5);
                    }
                }
            }, {
                key: "getPrefab",
                value: function getPrefab(t) {
                    return this.prefabs[t];
                }
            }, {
                key: "prewarm",
                value: function prewarm(t, e) {
                    var i = e || 1, s = this.pools[t];
                    if (null != s && (i -= s), i <= 0) return;
                    var r = this.getPrefab(t);
                    if (null != r) for (var _t6 = 0; _t6 < i; _t6++) {
                        this.recoverToPool(r.clone());
                    } else console.error("prewarm failed: " + t);
                }
            }, {
                key: "clearPool",
                value: function clearPool(t) {
                    null != this.pools[t] && (Laya.Pool.clearBySign("pool_" + t), delete this.pools[t]);
                }
            }, {
                key: "recoverToPool",
                value: function recoverToPool(t, e) {
                    if (null == t) return;
                    t.removeSelf();
                    var i = t.name, s = this.pools[i];
                    null == e || null == s || s < e ? (Laya.Pool.recover("pool_" + i, t), s ? this.pools[i]++ : this.pools[i] = 1) : t.destroy(!0);
                }
            }, {
                key: "getFromPool",
                value: function getFromPool(t) {
                    if (this.pools[t] <= 0) return delete this.pools[t], null;
                    var e = Laya.Pool.getItem("pool_" + t);
                    return this.pools[t] && (this.pools[t] <= 1 ? delete this.pools[t] : this.pools[t]--),
                        e;
                }
            }, {
                key: "createSpriteToScene",
                value: function createSpriteToScene(t, e, i, s) {
                    var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
                    if (null == t || t.length <= 0 || null == e) return null;
                    var a = null;
                    return null != this.pools[t] && null != (a = this.getFromPool(t)) ? (e.addChild(a),
                        i && (a.transform.position = i), s && (a.transform.rotation = s), a) : ((a = this.getPrefab(t)).name = t,
                            null == a ? (console.error("create " + t + " failed!"), null) : Laya.Sprite3D.instantiate(a, e, r, i, s));
                }
            }, {
                key: "loadDeadMaterial",
                value: function loadDeadMaterial(t) {
                    if (null != this.deadMaterial[t]) return this.deadMaterial[t];
                    var e = new Laya.UnlitMaterial();
                    return Laya.Texture2D.load("3dres/Conventional/Assets/Scenes/Textures/" + t + ".png", Laya.Handler.create(this, function (t) {
                        e.albedoTexture = t, e.renderMode = 2;
                    })), this.deadMaterial[t] = e, e;
                }
            }]);
            return p;
        }();
        var g = /* */ function (_Laya$Script3D) {
            _inherits2(g, _Laya$Script3D);
            var _super9 = _createSuper2(g);
            function g() {
                var _this2;
                _classCallCheck2(this, g);
                _this2 = _super9.apply(this, arguments), _this2.radius = .5, _this2.ignorePool = !1;
                return _this2;
            }
            _createClass2(g, [{
                key: "justDispose",
                value: function justDispose() {
                    this.destroy();
                }
            }, {
                key: "dispose",
                value: function dispose() {
                    this.justDispose();
                }
            }, {
                key: "destroy",
                value: function destroy() {
                    if (null != this.owner) {
                        this.owner.removeSelf();
                        var _t7 = this.owner;
                        !this.ignorePool && _t7 instanceof Laya.Sprite3D ? p.recoverToPool(_t7) : this.owner.destroy(!0);
                    }
                    _get2(_getPrototypeOf2(g.prototype), "destroy", this).call(this);
                }
            }, {
                key: "tick",
                value: function tick(t) { }
            }]);
            return g;
        }(Laya.Script3D);
        var f = /* */ function (_g) {
            _inherits2(f, _g);
            var _super10 = _createSuper2(f);
            function f() {
                _classCallCheck2(this, f);
                return _super10.apply(this, arguments);
            }
            _createClass2(f, [{
                key: "onAwake",
                value: function onAwake() {
                    _get2(_getPrototypeOf2(f.prototype), "onAwake", this).call(this);
                }
            }, {
                key: "setSpeed",
                value: function setSpeed(t) {
                    this.owner instanceof Laya.ShuriKenParticle3D && (this.owner.particleSystem.simulationSpeed = t);
                    for (var _e7 = 0, _i6 = this.owner.numChildren; _e7 < _i6; _e7++) {
                        var _i7 = this.owner.getChildAt(_e7);
                        _i7 instanceof Laya.ShuriKenParticle3D && (_i7.particleSystem.play(), _i7.particleSystem.simulationSpeed = t);
                    }
                }
            }, {
                key: "play",
                value: function play() {
                    this.owner instanceof Laya.ShuriKenParticle3D && this.owner.particleSystem.play();
                    for (var _t8 = 0, _e8 = this.owner.numChildren; _t8 < _e8; _t8++) {
                        var _e9 = this.owner.getChildAt(_t8);
                        _e9 instanceof Laya.ShuriKenParticle3D && _e9.particleSystem.play();
                    }
                }
            }, {
                key: "playBySp",
                value: function playBySp() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                    t || (t = this.owner), t instanceof Laya.ShuriKenParticle3D && t.particleSystem.play();
                    for (var _e10 = 0, _i8 = t.numChildren; _e10 < _i8; _e10++) {
                        var _i9 = t.getChildAt(_e10);
                        _i9 instanceof Laya.ShuriKenParticle3D && _i9.particleSystem.play(), _i9.numChildren > 0 && this.playBySp(_i9);
                    }
                }
            }, {
                key: "onUpdate",
                value: function onUpdate() {
                    if (null == this.owner) return void this.justDispose();
                    var t = !1;
                    if (this.owner instanceof Laya.ShuriKenParticle3D && this.owner.particleSystem.isPlaying && (t = !0),
                        !t) for (var _e11 = 0, _i10 = this.owner.numChildren; _e11 < _i10; _e11++) {
                            var _i11 = this.owner.getChildAt(_e11);
                            if (_i11 instanceof Laya.ShuriKenParticle3D && _i11.particleSystem.isPlaying) {
                                t = !0;
                                break;
                            }
                        }
                    !t && this.disposeAfterPlay && this.justDispose();
                }
            }]);
            return f;
        }(g);
        var y = /* */ function () {
            function y() {
                _classCallCheck2(this, y);
            }
            _createClass2(y, null, [{
                key: "Vector3_Make",
                value: function Vector3_Make() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                    var e = new Laya.Vector3();
                    return e.x = t, e.y = t, e.z = t, e;
                }
            }, {
                key: "Vector2_Lerp",
                value: function Vector2_Lerp(t, e, i) {
                    if (i <= 0) return t.clone();
                    if (i >= 1) return e.clone();
                    var s = t.clone(), r = this.Vector2_Substract(e, t);
                    return r = this.Vector2_Multiply(r, i), y.Vector2_Add(s, r);
                }
            }, {
                key: "Vector2_Add",
                value: function Vector2_Add(t, e) {
                    var i = t.clone();
                    return "number" == typeof e ? (i.x += e, i.y += e) : (i.x += e.x, i.y += e.y), i;
                }
            }, {
                key: "Vector2ToVector3",
                value: function Vector2ToVector3(t, e) {
                    var i = new Laya.Vector3();
                    return i.x = t.x, i.y = e, i.z = t.y, i;
                }
            }, {
                key: "CreateQuaternionFromEuler",
                value: function CreateQuaternionFromEuler(t) {
                    var e = 180 / Math.PI, i = new Laya.Quaternion();
                    return Laya.Quaternion.createFromYawPitchRoll(t.y / e, t.x / e, t.z / e, i), i;
                }
            }, {
                key: "Vector2_Multiply",
                value: function Vector2_Multiply(t, e) {
                    var i = t.clone();
                    return "number" == typeof e ? (i.x *= e, i.y *= e) : (i.x *= e.x, i.y *= e.y), i;
                }
            }, {
                key: "Vector2_SqrMagnitude",
                value: function Vector2_SqrMagnitude(t) {
                    return t.x * t.x + t.y * t.y;
                }
            }, {
                key: "Vector3_Multiply",
                value: function Vector3_Multiply(t, e) {
                    var i = t.clone();
                    return "number" == typeof e ? (i.x *= e, i.y *= e, i.z *= e) : (i.x *= e.x, i.y *= e.y,
                        i.z *= e.z), i;
                }
            }, {
                key: "Vector3_Divide",
                value: function Vector3_Divide(t, e) {
                    var i = t.clone();
                    return "number" == typeof e ? (i.x /= e, i.y /= e, i.z /= e) : (i.x /= e.x, i.y /= e.y,
                        i.z /= e.z), i;
                }
            }, {
                key: "Vector3_Add",
                value: function Vector3_Add(t, e) {
                    var i = t.clone();
                    return "number" == typeof e ? (i.x += e, i.y += e, i.z += e) : (i.x += e.x, i.y += e.y,
                        i.z += e.z), i;
                }
            }, {
                key: "countBezier",
                value: function countBezier(t, e, i, s) {
                    var r = this.countControlPoint(t, e, i), a = [];
                    a.push(t), a.push(r), a.push(e);
                    var n = .05 * s;
                    return _.draw_bezier_curves(a, 3, n);
                }
            }, {
                key: "Vector3_Substract",
                value: function Vector3_Substract(t, e) {
                    var i = t.clone();
                    return "number" == typeof e ? (i.x -= e, i.y -= e, i.z -= e) : (i.x -= e.x, i.y -= e.y,
                        i.z -= e.z), i;
                }
            }, {
                key: "ClampDegree",
                value: function ClampDegree(t) {
                    return t >= 0 && t < 360 ? t : ((t %= 360) < 0 && (t = 360 + t), t);
                }
            }, {
                key: "DegreeDistance",
                value: function DegreeDistance(t, e) {
                    t = this.ClampDegree(t);
                    var i = (e = this.ClampDegree(e)) - t;
                    return i > 180 ? i -= 360 : i < -180 && (i = 360 + i), i;
                }
            }, {
                key: "Point_Add",
                value: function Point_Add(t, e) {
                    var i = new Laya.Point(t.x, t.y);
                    return "number" == typeof e ? (i.x += e, i.y += e) : (i.x += e.x, i.y += e.y), i;
                }
            }, {
                key: "Point_Substarct",
                value: function Point_Substarct(t, e) {
                    var i = new Laya.Point(t.x, t.y);
                    return "number" == typeof e ? (i.x -= e, i.y -= e) : (i.x -= e.x, i.y -= e.y), i;
                }
            }, {
                key: "Point_Multiply",
                value: function Point_Multiply(t, e) {
                    var i = new Laya.Point(t.x, t.y);
                    return "number" == typeof e ? (i.x *= e, i.y *= e) : (i.x *= e.x, i.y *= e.y), i;
                }
            }, {
                key: "Point_Divide",
                value: function Point_Divide(t, e) {
                    var i = new Laya.Point(t.x, t.y);
                    return "number" == typeof e ? (i.x /= e, i.y /= e) : (i.x /= e.x, i.y /= e.y), i;
                }
            }, {
                key: "Point_SqrMagnitude",
                value: function Point_SqrMagnitude(t) {
                    return null == t ? 0 : t.x * t.x + t.y * t.y;
                }
            }, {
                key: "Point_Magnitude",
                value: function Point_Magnitude(t) {
                    return null == t ? 0 : Math.sqrt(t.x * t.x + t.y * t.y);
                }
            }, {
                key: "Vector3_SqrMagnitude",
                value: function Vector3_SqrMagnitude(t) {
                    return t.x * t.x + t.y * t.y + t.z * t.z;
                }
            }, {
                key: "Vector3_Magnitude",
                value: function Vector3_Magnitude(t) {
                    return Math.sqrt(t.x * t.x + t.y * t.y + t.z * t.z);
                }
            }, {
                key: "Vector3_Normalize",
                value: function Vector3_Normalize(t) {
                    var e = new Laya.Vector3();
                    return Laya.Vector3.normalize(t, e), e;
                }
            }, {
                key: "VectorToAngle",
                value: function VectorToAngle(t) {
                    return null == t ? 0 : y.ClampDegree(180 * Math.atan2(-t.y, t.x) / Math.PI - 90);
                }
            }, {
                key: "GetForward",
                value: function GetForward(t) {
                    var e = new Laya.Vector3();
                    return null != t && (t.transform.getForward(e), Laya.Vector3.normalize(e, e)), e;
                }
            }, {
                key: "setForward",
                value: function setForward(t, e) {
                    if (null == t) return;
                    var i = t.transform.worldMatrix;
                    i.setForward(e), t.transform.worldMatrix = i;
                }
            }, {
                key: "setup",
                value: function setup(t, e) {
                    if (null == t) return;
                    var i = t.transform.worldMatrix;
                    t.transform.worldMatrix = i;
                }
            }, {
                key: "randRange",
                value: function randRange(t, e) {
                    return Math.random() * (e - t) + t << 0;
                }
            }, {
                key: "randRangeFloat",
                value: function randRangeFloat(t, e) {
                    return Math.random() * (e - t) + t;
                }
            }, {
                key: "pickNumberArray",
                value: function pickNumberArray(t, e, i) {
                    if (i <= 0) return [];
                    if (t > e) {
                        var _i12 = t;
                        t = e, e = _i12;
                    }
                    var s = [], r = [];
                    for (var _i13 = t; _i13 <= e; _i13++) {
                        r.push(_i13);
                    }
                    if (i >= r.length) return r;
                    for (var _t9 = 0; _t9 < i; _t9++) {
                        var _t10 = this.randRange(0, r.length);
                        s.push(r[_t10]), r.splice(_t10, 1);
                    }
                    return s;
                }
            }, {
                key: "clamp",
                value: function clamp(t, e, i) {
                    return t < e ? e : t > i ? i : t;
                }
            }, {
                key: "clamp01",
                value: function clamp01(t) {
                    return this.clamp(t, 0, 1);
                }
            }, {
                key: "StringStartWith",
                value: function StringStartWith(t, e, i) {
                    if (null == t || null == e) return !1;
                    if (e.length > t.length) return !1;
                    var s = t.slice(0, e.length);
                    return i ? s.toLowerCase() == e.toLowerCase() : s == e;
                }
            }, {
                key: "createEffect",
                value: function createEffect(t, e, i, s) {
                    var r = p.createSpriteToScene(t, i, e).addComponent(f);
                    return r.disposeAfterPlay = s, r.play(), r;
                }
            }, {
                key: "EulerAngleToForward",
                value: function EulerAngleToForward(t) {
                    var e = 180 / Math.PI, i = new Laya.Quaternion();
                    Laya.Quaternion.createFromYawPitchRoll(t.y / e, t.x / e, t.z / e, i);
                    var s = new Laya.Matrix4x4();
                    Laya.Matrix4x4.createFromQuaternion(i, s);
                    var r = new Laya.Vector3();
                    s.getForward(r);
                    var a = i.x, n = i.y, o = i.z, l = i.w, h = a + a, c = n + n, d = o * h, u = l * c, _ = o * c, m = l * h, p = a * h, g = n * c;
                    return new Laya.Vector3(-(d + u), -(_ - m), -(1 - p - g));
                }
            }, {
                key: "vectorDirection",
                value: function vectorDirection(t, e) {
                    var i = new Laya.Vector3(0, 0, 0);
                    Laya.Vector3.subtract(e, t, i);
                    var s = new Laya.Vector3(0, 0, 0);
                    return Laya.Vector3.normalize(i, s), s;
                }
            }, {
                key: "isFaced",
                value: function isFaced(t, e) {
                    return !0;
                }
            }, {
                key: "isInDistance",
                value: function isInDistance(t, e, i) {
                    return t.y = 0, e.y = 0, Laya.Vector3.distance(t, e) <= i;
                }
            }, {
                key: "isPlaying",
                value: function isPlaying(t, e) {
                    return !1;
                }
            }, {
                key: "getSprite3DForward",
                value: function getSprite3DForward(t, e) {
                    var i = this.Vector3_Substract(t.position, e.position);
                    return Laya.Vector3.normalize(i, i), i;
                }
            }, {
                key: "setForwardWithoutScale",
                value: function setForwardWithoutScale(t, e) {
                    var i = new Laya.Quaternion();
                    Laya.Quaternion.rotationLookAt(e, new Laya.Vector3(0, 1, 0), i), i.invert(i), t.transform.rotation = i;
                }
            }, {
                key: "Vector2_Magnitude",
                value: function Vector2_Magnitude(t) {
                    return Math.sqrt(t.x * t.x + t.y * t.y);
                }
            }, {
                key: "Vector2_Divide",
                value: function Vector2_Divide(t, e) {
                    var i = t.clone();
                    return "number" == typeof e ? (i.x /= e, i.y /= e) : (i.x /= e.x, i.y /= e.y), i;
                }
            }, {
                key: "VectorRot",
                value: function VectorRot(t, e, i) {
                    Laya.Vector3.normalize(e, e), i *= .5;
                    var s = Math.sin(i), r = Math.sqrt(1 - s * s), a = 2 * s, n = t.x * e.x + t.y * e.y + t.z * e.z, o = a * (s * (e.x * n - t.x) + r * (e.y * t.z - t.y * e.z)) + t.x, l = a * (s * (e.y * n - t.y) + r * (e.z * t.x - t.z * e.x)) + t.y, h = a * (s * (e.z * n - t.z) + r * (e.x * t.y - t.x * e.y)) + t.z;
                    return new Laya.Vector3(o, l, h);
                }
            }, {
                key: "isAnimPlaying",
                value: function isAnimPlaying(t, e) {
                    if (null == t) return !1;
                    var i = t.getCurrentAnimatorPlayState();
                    return i.animatorState.name == e && i.normalizedTime < 1 && !i.animatorState.clip.islooping;
                }
            }, {
                key: "getAnimPlayingTime",
                value: function getAnimPlayingTime(t) {
                    if (null == t) return 0;
                    return t.getCurrentAnimatorPlayState().normalizedTime;
                }
            }, {
                key: "v3Lerp",
                value: function v3Lerp(t, e, i) {
                    var s = (e - t) / i;
                    return e - s + (t - e + s) * Math.exp(-i);
                }
            }, {
                key: "v3Lerp2",
                value: function v3Lerp2(t, e, i, s, r) {
                    var a = s * r, n = y.Vector3_Divide(y.Vector3_Substract(i, e), a), o = y.Vector3_Substract(t, e), l = y.Vector3_Add(o, n), h = y.Vector3_Substract(i, n), c = y.Vector3_Multiply(l, Math.exp(-a));
                    return y.Vector3_Add(h, c);
                }
            }, {
                key: "lerp",
                value: function lerp(t, e, i) {
                    return i <= 0 ? t : i >= 1 ? e : t + (e - t) * i;
                }
            }, {
                key: "restartAnim",
                value: function restartAnim(t, e) {
                    var i = 16 / 1e3 * 1;
                    var s = t._clip._duration * (t.clipEnd - t.clipStart), r = e._elapsedTime, a = r + i;
                    e._lastElapsedTime = r, e._elapsedTime = a;
                    var n = a / s;
                    e._normalizedTime = n;
                    var o = n % 1;
                    e._normalizedPlayTime = o < 0 ? o + 1 : o, e._duration = s;
                    t._scripts;
                }
            }, {
                key: "resetHitRes",
                value: function resetHitRes(t) {
                    return t.succeeded = !1, t.collider = null, t.point = new Laya.Vector3(), t.normal = new Laya.Vector3(),
                        t.hitFraction = 0, t;
                }
            }, {
                key: "isAnyAnimPlaying",
                value: function isAnyAnimPlaying(t) {
                    var e = t.getCurrentAnimatorPlayState();
                    return !!(e.normalizedTime < 1 || e.animatorState.clip.islooping);
                }
            }, {
                key: "getCountDownStrByNumber",
                value: function getCountDownStrByNumber(t) {
                    var e, i = Math.floor(t / 60);
                    i < 10 && (e = "0" + i);
                    var s = t % 60 + "";
                    return t % 60 < 10 && (s = "0" + s), e + ":" + s;
                }
            }, {
                key: "Vector2_Normalize",
                value: function Vector2_Normalize(t) {
                    var e = new Laya.Vector2();
                    return Laya.Vector2.normalize(t, e), e;
                }
            }, {
                key: "Vector2_Substract",
                value: function Vector2_Substract(t, e) {
                    var i = t.clone();
                    return "number" == typeof e ? (i.x -= e, i.y -= e) : (i.x -= e.x, i.y -= e.y), i;
                }
            }, {
                key: "setSp3dAlpha",
                value: function setSp3dAlpha(t, e) {
                    t._render && (e ? (t._render.material.albedoColor = new Laya.Vector4(1, 1, 1, 1),
                        t._render.material.renderMode = Laya.BlinnPhongMaterial.RENDERMODE_OPAQUE) : t._render && (t._render.material.albedoColor = new Laya.Vector4(1, 1, 1, .1),
                            t._render.material.renderMode = Laya.BlinnPhongMaterial.RENDERMODE_TRANSPARENT));
                }
            }, {
                key: "setSp3dAlphaValue",
                value: function setSp3dAlphaValue(t, e, i) {
                    t._render && (e ? (t._render.material.albedoColor = new Laya.Vector4(1, 1, 1, i),
                        t._render.material.renderMode = Laya.BlinnPhongMaterial.RENDERMODE_OPAQUE) : t._render && (t._render.material.albedoColor = new Laya.Vector4(1, 1, 1, i),
                            t._render.material.renderMode = Laya.BlinnPhongMaterial.RENDERMODE_TRANSPARENT));
                }
            }, {
                key: "calculteMovePoint",
                value: function calculteMovePoint(t, e, i, s, r) {
                    var a = [], n = (16, t.clone()), o = 0;
                    for (; ;) {
                        var _t11 = y.Vector3_Multiply(i, .0166666666666667 * e);
                        if (o -= .0033333333333333405, _t11.y += o, (n = y.Vector3_Add(n, _t11)).y <= r) {
                            n.y = r;
                            break;
                        }
                        a.push(n);
                    }
                    return a;
                }
            }, {
                key: "setAllScale",
                value: function setAllScale(t, e) {
                    for (var _i14 = 0; _i14 < t.numChildren; _i14++) {
                        var _s5 = t.getChildAt(_i14);
                        _s5.transform.localScale = new Laya.Vector3(e, e, e), _s5.numChildren > 0 && this.setAllScale(_s5, e);
                    }
                }
            }, {
                key: "setAllScale2",
                value: function setAllScale2(t, e) {
                    for (var _i15 = 0; _i15 < t.numChildren; _i15++) {
                        var _s6 = t.getChildAt(_i15);
                        _s6.transform.setWorldLossyScale(new Laya.Vector3(e, e, e)), _s6.numChildren > 0 && this.setAllScale(_s6, e);
                    }
                }
            }, {
                key: "setAllCastShadow",
                value: function setAllCastShadow(t) {
                    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
                    for (var _i16 = 0; _i16 < t.numChildren; _i16++) {
                        var _s7 = t.getChildAt(_i16);
                        (_s7 instanceof Laya.SkinnedMeshSprite3D || _s7 instanceof Laya.MeshSprite3D) && (_s7._render.castShadow = e),
                            _s7.numChildren > 0 && this.setAllCastShadow(_s7, e);
                    }
                }
            }, {
                key: "setAllMat2",
                value: function setAllMat2(t, e) {
                    for (var _i17 = 0; _i17 < t.numChildren; _i17++) {
                        var _s8 = t.getChildAt(_i17);
                        _s8 instanceof Laya.MeshSprite3D && (_s8.meshRenderer.sharedMaterial = e), _s8 instanceof Laya.SkinnedMeshSprite3D && (_s8.skinnedMeshRenderer.sharedMaterial = e);
                    }
                }
            }, {
                key: "setAllMat",
                value: function setAllMat(t, e, i, s) {
                    for (var _r2 = 0; _r2 < t.numChildren; _r2++) {
                        var _a2 = t.getChildAt(_r2);
                        if ("160" == _a2.name && console.log(1111), _a2 instanceof Laya.MeshSprite3D) for (var _t12 = 0; _t12 < _a2.meshRenderer.materials.length; _t12++) {
                            var _r3 = _a2.meshRenderer.materials[_t12].albedoTexture._url.split("/"), _n2 = _r3[_r3.length - 1];
                            "160" == _a2.name && console.log(1111), (_n2 == s || y.StringStartWith(_n2, i, !0)) && (_a2.meshRenderer.materials[_t12].albedoTexture = e);
                        }
                        _a2.numChildren > 0 && this.setAllMat(_a2, e, i, s);
                    }
                }
            }, {
                key: "countControlPoint",
                value: function countControlPoint(t, e, i) {
                    var s = Math.PI / 180 * i, r = new Laya.Vector3();
                    Laya.Vector3.subtract(new Laya.Vector3(e.x, 0, e.z), new Laya.Vector3(t.x, 0, t.z), r);
                    var a = Laya.Vector3.distance(new Laya.Vector3(t.x, 0, t.z), new Laya.Vector3(e.x, 0, e.z));
                    Laya.Vector3.scale(r, .5, r);
                    var n = Math.abs(Math.tan(s) * a / 2), o = new Laya.Vector3();
                    Laya.Vector3.normalize(r, o);
                    var l = o.x * (a / 2) + t.x, h = o.z * (a / 2) + t.z;
                    return new Laya.Vector3(l, n, h);
                }
            }, {
                key: "isInScreen",
                value: function isInScreen(t, e) {
                    var i = Laya.stage.width, s = Laya.stage.height, r = (new Laya.Point(.5 * i, .5 * s),
                        new Laya.Vector4()), a = new Laya.Vector3(0, 1.5, 0);
                    return t.worldToViewportPoint(y.Vector3_Add(e.transform.position, a), r), r.w > 0 && r.x >= 0 && r.x <= i && r.y >= 0 && r.y <= s;
                }
            }, {
                key: "Isleft",
                value: function Isleft(t, e, i) {
                    var s = new Laya.Point(), r = new Laya.Point();
                    return s.x = t.x - e.x, s.y = t.y - e.y, r.x = i.x - t.x, r.y = i.y - t.y, s.x * r.y - r.x * s.y;
                }
            }, {
                key: "pointToLineDistance",
                value: function pointToLineDistance(t, e, i) {
                    var s, r = i.x - e.x, a = i.y - e.y, n = r * r + a * a;
                    if (0 === n) s = e; else {
                        var _i18 = ((t.x - e.x) * r + (t.y - e.y) * a) / n;
                        s = {
                            x: e.x + _i18 * r,
                            y: e.y + _i18 * a
                        };
                    }
                    return r = s.x - t.x, a = s.y - t.y, Math.sqrt(r * r + a * a);
                }
            }, {
                key: "getFootPoint",
                value: function getFootPoint(t, e, i) {
                    var s, r = i.x - e.x, a = i.y - e.y, n = r * r + a * a;
                    if (0 === n) s = e; else {
                        var _i19 = ((t.x - e.x) * r + (t.y - e.y) * a) / n;
                        s = {
                            x: e.x + _i19 * r,
                            y: e.y + _i19 * a
                        };
                    }
                    return s;
                }
            }, {
                key: "isInScreenWithPoint",
                value: function isInScreenWithPoint(t, e) {
                    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1.5;
                    var s = Laya.stage.width, r = Laya.stage.height, a = (new Laya.Point(.5 * s, .5 * r),
                        new Laya.Vector4()), n = new Laya.Vector3(0, i, 0);
                    return t.worldToViewportPoint(y.Vector3_Add(e.transform.position, n), a), a.w > 0 && a.x >= 0 && a.x <= s && a.y >= 0 && a.y <= r ? a : null;
                }
            }, {
                key: "checkCollison",
                value: function checkCollison(t, e, i, s, r, a, n) {
                    i && (i.enabled = !1);
                    var o = [];
                    r.physicsSimulation.shapeCastAll(s, t, e, o, null, null, Laya.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER, Laya.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER),
                        i && (i.enabled = !0);
                    for (var _t13 = 0; _t13 < o.length; _t13++) {
                        var _e12 = o[_t13];
                        if (-1 == n.indexOf(_e12.collider.owner.name)) return o;
                    }
                    return null;
                }
            }, {
                key: "checkCollisonRay",
                value: function checkCollisonRay(t, e, i, s) {
                    var r = [];
                    return i.physicsSimulation.raycastAllFromTo(t, e, r), r;
                }
            }, {
                key: "shootRay",
                value: function shootRay(t, e, i, s) {
                    var r = new Laya.Ray(new Laya.Vector3(), new Laya.Vector3()), a = new Laya.Vector2(s.x, s.y);
                    t.viewportPointToRay(a, r);
                    var n = new Laya.HitResult();
                    e.physicsSimulation.rayCast(r, n, 1e3);
                    var o = new Laya.Vector3();
                    var l = new Laya.Vector3();
                    if (n.succeeded) Laya.Vector3.subtract(n.point, i, o), Laya.Vector3.normalize(o, l); else {
                        var h = new Laya.Vector3();
                        Laya.Vector3.scale(r.direction, t.farPlane, h);
                        var c = new Laya.Vector3();
                        Laya.Vector3.subtract(t.transform.position, i, c), Laya.Vector3.add(h, c, o), Laya.Vector3.normalize(o, l);
                    }
                    return l;
                }
            }, {
                key: "setSp3dMat",
                value: function setSp3dMat(t, e, i) {
                    var _this3 = this;
                    var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
                    Laya.Texture2D.load(t, Laya.Handler.create(this, function (t) {
                        _this3.setAllMat(e, t, i, s);
                    }));
                }
            }, {
                key: "turnToTarget",
                value: function turnToTarget(t, e) {
                    var i = e, s = new Laya.Point();
                    s.x = i.transform.position.x - t.x, s.y = i.transform.position.z - t.z, s.normalize();
                    var r = y.VectorToAngle(s);
                    e.transform.rotationEuler = new Laya.Vector3(0, r, 0);
                }
            }, {
                key: "randomFloat",
                value: function randomFloat(t, e) {
                    return Math.random() * (e - t) + t;
                }
            }, {
                key: "roll100",
                value: function roll100(t) {
                    return 100 * Math.random() <= t;
                }
            }, {
                key: "getNodeByString",
                value: function getNodeByString(t, e) {
                    var i = null, s = e.split("/");
                    for (var r = 0; r < s.length; r++) {
                        null == i && (i = t), i = i.getChildByName(s[r]);
                    }
                    return i;
                }
            }]);
            return y;
        }();
        var S = /* */ function (_Laya$Script3D2) {
            _inherits2(S, _Laya$Script3D2);
            var _super11 = _createSuper2(S);
            function S() {
                var _this4;
                _classCallCheck2(this, S);
                _this4 = _super11.apply(this, arguments), _this4.m_MoveSpeed = 3, _this4.m_TurnSpeed = .5,
                    _this4.m_TurnSmoothing = 0, _this4.m_TiltMax = 40, _this4.m_TiltMin = 20, _this4.m_LockCursor = !1,
                    _this4.m_VerticalAutoReturn = !1, _this4.m_LookAngle = 0, _this4.m_TiltAngle = 0,
                    _this4.k_LookDistance = 50, _this4.lastMouseX = 0, _this4.lastMouseY = 0, _this4.mouseRunning = !1,
                    _this4.offset = new Laya.Vector3(0, -1, 0), _this4.needOffset = !1, _this4.focusQua = 0,
                    _this4.focusQuaY = 0, _this4.cameraShow = !1, _this4.carMode = !1, _this4.rotationSpd = .3;
                return _this4;
            }
            _createClass2(S, [{
                key: "onUpdate",
                value: function onUpdate() { }
            }, {
                key: "init",
                value: function init(t, e, i) {
                    this.m_Cam = i, this.m_Pos = e.getChildByName("pos").transform, this.initPos = this.m_Pos.localPosition.clone(),
                        this.m_Target = t, this.m_Pivot = e, this.m_PivotEulers = new Laya.Vector3(), this.m_Pivot.transform.rotation.getYawPitchRoll(this.m_PivotEulers),
                        this.m_PivotTargetRot = this.m_Pivot.transform.localRotation, this.m_TransformTargetRot = this.owner.transform.localRotation;
                }
            }, {
                key: "changeParent",
                value: function changeParent(t) { }
            }, {
                key: "changeTarget",
                value: function changeTarget(t) {
                    this.m_Target = t;
                }
            }, {
                key: "GetAxisX",
                get: function get() {
                    return Laya.stage.mouseX - this.lastMouseX;
                }
            }, {
                key: "GetAxisY",
                get: function get() {
                    return Laya.stage.mouseY - this.lastMouseY;
                }
            }, {
                key: "FollowTarget",
                value: function FollowTarget(t) {
                    if (null == this.m_Target) return;
                    var e = new Laya.Vector3();
                    Laya.Vector3.lerp(this.owner.transform.position, this.m_Target.position, 1, e),
                        this.owner.transform.position = e;
                }
            }, {
                key: "resetPosScale",
                value: function resetPosScale() {
                    this.initPos && (this.scalePosTarget = this.initPos.clone(), this.m_Pos.localPosition = this.initPos.clone());
                }
            }, {
                key: "onUPdateCamera",
                value: function onUPdateCamera() {
                    var t = .001 * 16;
                    this.FollowTarget(t), this.HandleRotationMovement();
                }
            }, {
                key: "onLateUpdate",
                value: function onLateUpdate() { }
            }, {
                key: "resetQua2",
                value: function resetQua2() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : .1;
                    var i;
                    var s = 0, r = 0;
                    this.carMode ? (i = this.m_Target.rotationEuler, 0 != s || (s = i.y + this.focusQua)) : (s = (i = this.m_Target.rotationEuler).y + this.focusQua,
                        r = i.x + this.focusQuaY), r = y.clamp(r, -20, 20), this.m_TransformTargetRot = y.CreateQuaternionFromEuler(new Laya.Vector3(r, s, 0)),
                        this.m_PivotTargetRot = y.CreateQuaternionFromEuler(new Laya.Vector3(i.x, this.m_PivotEulers.y, this.m_PivotEulers.z));
                    var a = new Laya.Quaternion();
                    Laya.Quaternion.slerp(this.m_Pivot.transform.localRotation, this.m_PivotTargetRot, e, a),
                        this.m_Pivot.transform.localRotation = a;
                    var n = new Laya.Quaternion();
                    this.carMode, Laya.Quaternion.slerp(this.owner.transform.localRotation, this.m_TransformTargetRot, e, n),
                        this.owner.transform.localRotation = n, this.m_LookAngle = i.y, this.m_TiltAngle = i.x;
                }
            }, {
                key: "resetQua",
                value: function resetQua() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : .1;
                    var i;
                    var s = 0;
                    this.carMode ? (i = this.m_Target.rotationEuler, 0 != s || (s = i.y + this.focusQua)) : s = (i = this.m_Target.rotationEuler).y + this.focusQua,
                        this.m_TransformTargetRot = y.CreateQuaternionFromEuler(new Laya.Vector3(0, s, 0)),
                        this.m_PivotTargetRot = y.CreateQuaternionFromEuler(new Laya.Vector3(i.x, this.m_PivotEulers.y, this.m_PivotEulers.z));
                    var r = new Laya.Quaternion();
                    Laya.Quaternion.slerp(this.m_Pivot.transform.localRotation, this.m_PivotTargetRot, e, r),
                        this.m_Pivot.transform.localRotation = r;
                    var a = new Laya.Quaternion();
                    this.carMode, Laya.Quaternion.slerp(this.owner.transform.localRotation, this.m_TransformTargetRot, e, a),
                        this.owner.transform.localRotation = a, this.m_LookAngle = i.y, this.m_TiltAngle = i.x;
                }
            }, {
                key: "refresh",
                value: function refresh() {
                    var t = .001 * 16;
                    if (this.m_LookAngle += 0 * this.m_TurnSpeed, this.m_TransformTargetRot = y.CreateQuaternionFromEuler(new Laya.Vector3(0, this.m_LookAngle, 0)),
                        this.m_VerticalAutoReturn ? this.m_TiltAngle = y.lerp(0, this.m_TiltMax, -0) : (this.m_TiltAngle -= 0 * this.m_TurnSpeed,
                            this.m_TiltAngle = y.clamp(this.m_TiltAngle, -this.m_TiltMin, this.m_TiltMax)),
                        this.m_PivotTargetRot = y.CreateQuaternionFromEuler(new Laya.Vector3(this.m_TiltAngle, this.m_PivotEulers.y, this.m_PivotEulers.z)),
                        this.m_TurnSmoothing > 0) {
                        var e = new Laya.Quaternion();
                        Laya.Quaternion.slerp(this.m_Pivot.transform.localRotation, this.m_PivotTargetRot, this.m_TurnSmoothing * t, e),
                            this.m_Pivot.transform.localRotation = e;
                        var i = new Laya.Quaternion();
                        Laya.Quaternion.slerp(this.owner.transform.localRotation, this.m_PivotTargetRot, this.m_TurnSmoothing * t, i),
                            this.owner.transform.localRotation = i, console.log(this.owner.transform.localRotation);
                    } else this.m_Pivot.transform.localRotation = this.m_PivotTargetRot, this.owner.transform.localRotation = this.m_TransformTargetRot,
                        this.carMode;
                }
            }, {
                key: "playerRotateX",
                value: function playerRotateX() { }
            }, {
                key: "HandleRotationMovement",
                value: function HandleRotationMovement() { }
            }, {
                key: "resetView",
                value: function resetView() { }
            }]);
            return S;
        }(Laya.Script3D);
        var L = /* */ function () {
            function L() {
                _classCallCheck2(this, L);
            }
            _createClass2(L, null, [{
                key: "getActionKey",
                value: function getActionKey(t, e, i) {
                    return t + "_" + e + "_" + i;
                }
            }, {
                key: "getCombineKey",
                value: function getCombineKey(t) {
                    return "=>" + t;
                }
            }]);
            return L;
        }();
        L.CHAR_STATUES = "CHAR_STATUES", L.IDLE = "IDLE", L.ATTACKBOSS_1 = "ATTACKBOSS_1",
            L.ATTACKBOSS_2 = "ATTACKBOSS_2", L.ATTACKBOSS_PREPARE = "ATTACKBOSS_PREPARE", L.ATTACKBOSS_ING = "ATTACKBOSS_ING",
            L.ATTACKBOSS_RECOVER = "ATTACKBOSS_RECOVER", L.HITED = "HITED", L.DEAD = "DEAD",
            L.WALK = "WALK", L.RECHARE = "RECHARE", L.FLY = "FLY", L.DASH = "DASH", L.COLLECT = "COLLECT",
            L.ATTACK_1 = "ATTACK_1", L.HITED_DOWN = "HITED_DOWN", L.HITED_DOWNUp = "HITED_DOWNUp",
            L.HITED_STRIGHT = "HITED_STRIGHT", L.HITED_STRIGHTING = "HITED_STRIGHTING", L.HITED_STRIGHTEND = "HITED_STRIGHTEND",
            L.ERROR_NO_SUCH_FROM = "error_no_such_from", L.ERROR_NO_SUCH_TO = "error_no_such_to",
            L.COND_ALL_PASS = "COND_ALL_PASS", function (t) {
                t[t.READY = 0] = "READY", t[t.RUNNING = 1] = "RUNNING", t[t.PAUSE = 2] = "PAUSE",
                    t[t.READYFINISHWIN = 3] = "READYFINISHWIN", t[t.READYFINISHFAILED = 4] = "READYFINISHFAILED",
                    t[t.FINISH = 5] = "FINISH", t[t.WIN = 6] = "WIN", t[t.FAILED = 7] = "FAILED", t[t.UNLOCK = 8] = "UNLOCK";
            }(a || (a = {}));
        var C = /* */ function () {
            function C() {
                _classCallCheck2(this, C);
            }
            _createClass2(C, null, [{
                key: "level",
                get: function get() {
                    return C._level;
                },
                set: function set(t) {
                    C._level = t;
                }
            }, {
                key: "gold",
                get: function get() {
                    return C._gold;
                },
                set: function set(t) {
                    C._gold = t;
                }
            }, {
                key: "getLeftWall",
                value: function getLeftWall(t) {
                    return 1 == t ? C._leftWall : C._leftWall2;
                }
            }, {
                key: "getRightWall",
                value: function getRightWall(t) {
                    return 1 == t ? C._rightWall : C._rightWall2;
                }
            }, {
                key: "getUpWall",
                value: function getUpWall(t) {
                    return 1 == t ? C._upWall : C._upWall2;
                }
            }, {
                key: "getDownWall",
                value: function getDownWall(t) {
                    return 1 == t ? C._downWall : C._downWall2;
                }
            }]);
            return C;
        }();
        C.carMode = !1, C.game_times = 200, C._gold = 0, C._level = 0, C.evt_saveData = "save_data",
            C.evt_getData = "get_data", C.evt_checkResult = "checkResult", C.evt_showCarNodeTutor = "showCarNodeTutor",
            C.evt_showMessage = "showMessage", C.loadComplete = !1, C.AxisX = 0, C.lastMouseX = 0,
            C.mouseRunning = !1, C.lastMouseY = 0, C.AxisY = 0, C.maxLevel = 15, C.meetCollison = !1,
            C.loadSceneComplete = !1, C.evt_playResultHit = "evt_playResultHit", C.isCarGoing = !1,
            C.targetRotationY = 0, C.isNew = !1;
        var E = /* */ function (_Laya$Script3D3) {
            _inherits2(E, _Laya$Script3D3);
            var _super12 = _createSuper2(E);
            function E() {
                var _this5;
                _classCallCheck2(this, E);
                _this5 = _super12.apply(this, arguments), _this5.color = 0, _this5.hp = 0, _this5.maxHp = 23,
                    _this5.aniPlayTimes = 0, _this5.type = "car";
                return _this5;
            }
            _createClass2(E, [{
                key: "onAwake",
                value: function onAwake() {
                    this.color = Number(this.owner.name.split("_")[1]), this.carSp = this.owner.getChildAt(0),
                        this.aniSp = this.carSp.getChildAt(this.carSp.numChildren - 1), this.aniSp.active = !1,
                        this.partList = [];
                    for (var _t14 = 1; _t14 < 23; _t14++) {
                        var _e13 = this.carSp.getChildAt(_t14);
                        _e13.active = !1, this.partList.push(_e13);
                    }
                }
            }, {
                key: "initCarNodeUI",
                value: function initCarNodeUI(t) {
                    this.carNodeUI = t;
                }
            }, {
                key: "onStartAni",
                value: function onStartAni() {
                    this.aniSp.active = !0;
                }
            }, {
                key: "onEndAni",
                value: function onEndAni() {
                    this.aniSp.active = !0;
                }
            }, {
                key: "repair",
                value: function repair() {
                    this.hp += 1, this.hp = y.clamp(this.hp, 0, this.maxHp);
                    for (var _t15 = 0; _t15 < this.hp; _t15++) {
                        if (_t15 >= this.partList.length) continue;
                        var _e14 = this.partList[_t15];
                        _e14.active || (_e14.active = !0);
                    }
                    return this.hp >= this.maxHp || (this.playAni(), !1);
                }
            }, {
                key: "onUpdate",
                value: function onUpdate() {
                    if (this.aniPlayTimes <= 0 ? this.aniSp.active && (this.aniSp.active = !1) : this.aniPlayTimes--, this.carNodeUI) {
                        if (!this.owner.active) return void (this.carNodeUI.visible = !1);
                        if ("people" != C.player.form) return void (this.carNodeUI.visible = !1);
                        this.carNodeUI.m_needTxt.text = this.maxHp - this.hp + "";
                        var _t16 = y.isInScreenWithPoint(C.manager.camera, this.owner, 0);
                        _t16 ? (this.carNodeUI.visible = !0, this.carNodeUI.setXY(_t16.x - 100, _t16.y - 300),
                            this.carNodeUI.m_progress.value = this.hp / this.maxHp * 100) : this.carNodeUI.visible = !1;
                    }
                }
            }, {
                key: "remove",
                value: function remove() {
                    this.carNodeUI && (this.carNodeUI.visible = !1), this.owner.removeSelf(), this.destroy();
                }
            }, {
                key: "playAni",
                value: function playAni() {
                    this.aniPlayTimes = 6, this.aniSp.active || (this.aniSp.active = !0);
                }
            }]);
            return E;
        }(Laya.Script3D);
        var I = /* */ function () {
            function I() {
                _classCallCheck2(this, I);
            }
            _createClass2(I, null, [{
                key: "BaseURL",
                value: function BaseURL(t, e) {
                    var i = this.baseUrl3D + t;
                    return null != e && e.trim().length > 0 && (i += "." + e), i;
                }
            }, {
                key: "GetResSprite3D",
                value: function GetResSprite3D(t) {
                    if (!t) return;
                    var e = Laya.loader.getRes(t);
                    if (e) return e;
                    Laya.Sprite3D.load(t, Laya.Handler.create(null, function (t) {
                        return t;
                    }));
                }
            }, {
                key: "LoadResoures",
                value: function LoadResoures(t) {
                    return __awaiter(this, void 0, void 0, /* */ _regenerator.default.mark(function _callee5() {
                        var _this6 = this;
                        return _regenerator.default.wrap(function _callee5$(_context5) {
                            while (1) {
                                switch (_context5.prev = _context5.next) {
                                    case 0:
                                        return _context5.abrupt("return", new Promise(function (e, i) {
                                            return t ? 0 == t.length ? i() : void Laya.loader.create(t, Laya.Handler.create(_this6, function (t) {
                                                t ? e(t) : i();
                                            })) : i();
                                        }));

                                    case 1:
                                    case "end":
                                        return _context5.stop();
                                }
                            }
                        }, _callee5);
                    }));
                }
            }, {
                key: "loadMat",
                value: function loadMat(t) {
                    return __awaiter(this, void 0, void 0, /* */ _regenerator.default.mark(function _callee6() {
                        var _this7 = this;
                        return _regenerator.default.wrap(function _callee6$(_context6) {
                            while (1) {
                                switch (_context6.prev = _context6.next) {
                                    case 0:
                                        return _context6.abrupt("return", new Promise(function (e, i) {
                                            return t ? 0 == t.length ? i() : void Laya.Material.load(t, Laya.Handler.create(_this7, function (t) {
                                                t ? e(t) : i();
                                            })) : i();
                                        }));

                                    case 1:
                                    case "end":
                                        return _context6.stop();
                                }
                            }
                        }, _callee6);
                    }));
                }
            }, {
                key: "GetResoures",
                value: function GetResoures(t) {
                    if (t) return Laya.loader.getRes(t);
                }
            }, {
                key: "CloneSprite3D",
                value: function CloneSprite3D(t) {
                    if (!t) return;
                    return Laya.Sprite3D.instantiate(t);
                }
            }]);
            return I;
        }();
        I.baseUrl3D = "3dres/Conventional/";
        var T = /* */ function () {
            function T() {
                _classCallCheck2(this, T);
            }
            _createClass2(T, null, [{
                key: "loadNetCfg",
                value: function loadNetCfg() {
                    return __awaiter(this, void 0, void 0, /* */ _regenerator.default.mark(function _callee7() {
                        return _regenerator.default.wrap(function _callee7$(_context7) {
                            while (1) {
                                switch (_context7.prev = _context7.next) {
                                    case 0:
                                        _context7.next = 2;
                                        return zs.network.config(!1, null).then(function (t) {
                                            console.log("success", t);
                                            // if (t.AIcfg) {
                                            T.aiNetCfg = [
                                                {
                                                    "ai_detectionRange": "6",
                                                    "ai_collect_Rate": "30",
                                                    "ai_attack_player_Rate": "100",
                                                    "ai_find_item_range": "100",
                                                    "ai_minEscapeAttack": "70",
                                                    "ai_maxEscapeAttack": "75",
                                                    "ai_nigeruAttackRate": "20",
                                                    "ai_collect_item_ratio": "4"
                                                },
                                                {
                                                    "ai_detectionRange": "6",
                                                    "ai_collect_Rate": "50",
                                                    "ai_attack_player_Rate": "100",
                                                    "ai_find_item_range": "100",
                                                    "ai_minEscapeAttack": "50",
                                                    "ai_maxEscapeAttack": "75",
                                                    "ai_nigeruAttackRate": "20",
                                                    "ai_collect_item_ratio": "2"
                                                },
                                                {
                                                    "ai_detectionRange": "6",
                                                    "ai_collect_Rate": "60",
                                                    "ai_attack_player_Rate": "100",
                                                    "ai_find_item_range": "100",
                                                    "ai_minEscapeAttack": "40",
                                                    "ai_maxEscapeAttack": "75",
                                                    "ai_nigeruAttackRate": "30",
                                                    "ai_collect_item_ratio": "2"
                                                },
                                                {
                                                    "ai_detectionRange": "6",
                                                    "ai_collect_Rate": "70",
                                                    "ai_attack_player_Rate": "100",
                                                    "ai_find_item_range": "100",
                                                    "ai_minEscapeAttack": "30",
                                                    "ai_maxEscapeAttack": "75",
                                                    "ai_nigeruAttackRate": "40",
                                                    "ai_collect_item_ratio": "2"
                                                },
                                                {
                                                    "ai_detectionRange": "6",
                                                    "ai_collect_Rate": "80",
                                                    "ai_attack_player_Rate": "100",
                                                    "ai_find_item_range": "100",
                                                    "ai_minEscapeAttack": "20",
                                                    "ai_maxEscapeAttack": "75",
                                                    "ai_nigeruAttackRate": "50",
                                                    "ai_collect_item_ratio": "2"
                                                },
                                                {
                                                    "ai_detectionRange": "6",
                                                    "ai_collect_Rate": "90",
                                                    "ai_attack_player_Rate": "100",
                                                    "ai_find_item_range": "100",
                                                    "ai_minEscapeAttack": "10",
                                                    "ai_maxEscapeAttack": "75",
                                                    "ai_nigeruAttackRate": "60",
                                                    "ai_collect_item_ratio": "1"
                                                }
                                            ];
                                            // }
                                        }).catch(function () {
                                            console.log("catch fail");
                                        });

                                    case 2:
                                    case "end":
                                        return _context7.stop();
                                }
                            }
                        }, _callee7);
                    }));
                }
            }, {
                key: "PreloadPrefabs",
                value: function PreloadPrefabs() {
                    return __awaiter(this, void 0, void 0, /* */ _regenerator.default.mark(function _callee8() {
                        var _this8 = this;
                        return _regenerator.default.wrap(function _callee8$(_context8) {
                            while (1) {
                                switch (_context8.prev = _context8.next) {
                                    case 0:
                                        _context8.t0 = T.preloadCompleted;
                                        if (_context8.t0) {
                                            _context8.next = 11;
                                            break;
                                        }
                                        _context8.next = 4;
                                        return p.loadPrefabs(this.res_prefab);

                                    case 4:
                                        _context8.next = 6;
                                        return p.loadPrefabs(this.res_effect);

                                    case 6:
                                        _context8.next = 8;
                                        return I.LoadResoures(T.JSONLIST).then(function () {
                                            T.comboCfg = I.GetResoures("config/jellyCombo.json"), T.aiCfg = _this8.comboCfg.aiCfg;
                                        });

                                    case 8:
                                        _context8.next = 10;
                                        return this.loadNetCfg();

                                    case 10:
                                        T.preloadCompleted = !0;

                                    case 11:
                                    case "end":
                                        return _context8.stop();
                                }
                            }
                        }, _callee8, this);
                    }));
                }
            }, {
                key: "prePlayEffect",
                value: function prePlayEffect() {
                    var t = [T.ef_hit, T.ef_strike, T.ef_vehicle_hit], e = [], i = [];
                    for (var _t17 = 0; _t17 < e.length; _t17++) {
                        for (var _s9 = 0; _s9 < 6; _s9++) {
                            var _r4 = zs.scene.inst.dynamicNode, _a3 = p.createSpriteToScene(e[_t17] + "_" + _s9, _r4, new Laya.Vector3(0, -.15, .5), null, !1);
                            if (_a3) {
                                var _t18 = m.AddComponentIfNotExist(_a3, f);
                                _t18.disposeAfterPlay = !0, _t18.play(), i.push(_t18);
                            } else console.log("load hit effect failed!");
                        }
                    }
                    for (var _e15 = 0; _e15 < t.length; _e15++) {
                        var _s10 = zs.scene.inst.dynamicNode, _r5 = p.createSpriteToScene(t[_e15], _s10, new Laya.Vector3(0, -.25, 3), null, !1);
                        if (_r5) {
                            var _t19 = m.AddComponentIfNotExist(_r5, f);
                            _t19.disposeAfterPlay = !0, i.push(_t19), _t19.play();
                        } else console.log("load hit effect failed!");
                    }
                    Laya.timer.once(1e3, this, function () {
                        for (var _t20 = 0; _t20 < i.length; _t20++) {
                            var _e16 = i[_t20];
                            _e16.owner && _e16.owner.removeSelf();
                        }
                    });
                }
            }]);
            return T;
        }();
        T.res_player = "player", T.res_car = "car_1", T.res_hpItem = "hp_item", T.res_bullet = "bullet",
            T.levelLength = 6, T.partLength = 6, T.totalTime = 200, T.ef_bulletHit = "ef_JJJYD_hit",
            T.ef_explosion = "ef_ZEDS_bomb", T.enemyVoice = .1, T.attackCd = 0, T.res_ai = [],
            T.res_prefab = ["item", "Enemy_1", "Enemy_2", "Enemy_3", "player", "brick_01", "brick_02", "brick_03", "brick_04", "barrier_1", "barrier_2", "gold"],
            T.res_effect = ["ef_role_hit", "ef_screen_speed", "ef_role_charging", "ef_strike", "ef_vehicle_hit", "ef_gold"],
            T.JSONLIST = ["config/worldConfig.json"], T.AIOffsetX = 3, T.ai_move_times = 100,
            T.rpg_range = 20, T.updateXOffsetTimer = 5, T.ai_atk_interval = 200, T.tank_damage = 100,
            T.preloadCompleted = !1, T.random_car = 3, T.shoot_event = "shoot_event", T.shoot_hit_event = "shoot_hit_event",
            T.hide_quest = "hide_quest", T.show_quest = "show_quest", T.res_ball = "bag", T.questMaxTime = 90,
            T.CAR_CTRL = 1, T.destroyCarDamage = 50, T.ef_hit = "ef_role_hit", T.ef_strike = "ef_strike",
            T.ef_vehicle_hit = "ef_vehicle_hit", T.noNeedTutor = !1, T.trampPerItem = 2;
        var D = /* */ function () {
            function D() {
                _classCallCheck2(this, D);
                this.isStart = !1, this.clickPower = 10, this.randomClickNum = 2, this.currentClick = 0;
            }
            _createClass2(D, [{
                key: "init",
                value: function init(t, e) {
                    this.parent = e,
                        this.btn = this.parent.contentPanel.m_click,
                        this.progress = this.parent.contentPanel.m_progress,
                        this.btn.onClick(this, this.onAcclerate);
                    this.canFail = false;
                }
            }, {
                key: "onUpdate",
                value: function onUpdate() {
                    if (!this.isStart) return;
                    if (this.progress.value >= 100) return void this.end();
                    var t = this.progress.value;
                    this.tween && this.tween.completed || (t -= .05), this.progress.value = y.clamp(t, 0, 100);
                    if (this.progress.value <= 0 && this.canFail) {
                        this.canFail = false;
                        C.playView.setResult(!1);
                    }
                }
            }, {
                key: "fail",
                value: function fail() {
                    this.isStart = !1, this.hideOverClick();
                }
            }, {
                key: "onAcclerate",
                value: function onAcclerate() {
                    this.currentClick, this.randomClickNum, this.chargingChannel && this.chargingChannel.isStopped &&
                        (this.chargingChannel = Laya.SoundManager.playSound("music/charging.mp3", 1)),
                        this.tween && !this.tween.completed && this.tween.kill();
                    var t = this.progress.value + this.clickPower;
                    this.tween = this.progress.tweenValue(t, 2e3), this.currentClick++;
                }
            }, {
                key: "startOverClick",
                value: function startOverClick() {
                    this.parent.contentPanel.m_c1.setSelectedIndex(3),
                        C.player.startOverClick();
                    this.parent.contentPanel.getChildAt(5).x = 285;
                    this.parent.contentPanel.getChildAt(6).x = 195;
                    this.parent.contentPanel.getChildAt(7).x = 230;
                    this.parent.contentPanel.getChildAt(8).x = 230;
                    this.parent.contentPanel.getChildAt(8).visible = false;
                    if (!this.parent.contentPanel.img) {
                        this.parent.contentPanel.img = new fgui.GLoader();
                        this.parent.contentPanel.img.setXY(310, 1000);
                        this.parent.contentPanel.img.url = "res/head.png";
                        this.parent.contentPanel.img.setSize(50, 50);
                        this.parent.contentPanel.img.onClick(this, this.onbtnHome);
                        this.parent.contentPanel.addChild(this.parent.contentPanel.img);
                        window.contentPanelimg = this.parent.contentPanel.img;
                    }
                    this.parent.contentPanel.visible = true;
                    this.start();
                }
            }, {
                key: "start",
                value: function start() {
                    this.isStart = !0, this.curProgressValue = 50, this.progress.value = this.curProgressValue,
                        this.randomClickNum = y.randRange(2, 5), this.currentClick = 0, zs.platform.sync.hideBanner(), this.canFail = true,
                        console.log("随机点击次数", this.randomClickNum), C.battleState = a.PAUSE;
                }
            }, {
                key: "end",
                value: function end() {
                    this.isStart = !1, this.hideOverClick(), Laya.SoundManager.playSound("music/jump.mp3", 1);
                }
            }, {
                key: "hideOverClick",
                value: function hideOverClick() {
                    C.battleState = a.RUNNING
                        , this.parent.contentPanel.m_c1.setSelectedIndex(0),
                        zs.platform.sync.hideBanner(),
                        C.player.needPlay = !0
                        , console.log(2222222222);
                    this.parent.contentPanel.img.visible = false;
                    C.cAnimator.play("outCarJumpToEnd"),
                        Laya.stage.event(C.evt_playResultHit);
                }
            }]);
            return D;
        }();
        var v = /* */ function (_zs$fgui$base) {
            _inherits2(v, _zs$fgui$base);
            var _super13 = _createSuper2(v);
            function v() {
                var _this9;
                _classCallCheck2(this, v);
                _this9 = _super13.apply(this, arguments), _this9.curTouchId = 0, _this9.isDown = !1,
                    _this9.angle = -1, _this9.radians = -1, _this9.isleftControl = !0, _this9.killPlaying = !1,
                    _this9.radarOffset = 30, _this9.bottomExportHeight = 0, _this9.mouseRunning = !1,
                    _this9.lastTouchPointX = 0, _this9.moveX = 0, _this9.dir = "", _this9.dir2 = new Laya.Vector3();
                return _this9;
            }
            _createClass2(v, [{
                key: "check",
                value: function check(t) {
                    return t instanceof c;
                }
            }, {
                key: "init",
                value: function init() {
                    v._inst = this, C.playView = this, this.setResultView(),
                        this.contentPanel.m_nextBtn.onClick(this, this.onNext),
                        this.contentPanel.m_winBtn.onClick(this, this.onNext), this.overClick = new D(),
                        this.overClick.init(null, this), this.createCharIndictors(), this.createCarNode(),
                        this.width = Laya.stage.width * Laya.stage.scaleX, this.touchRect = this.contentPanel.m_control.displayObject
                    // , Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.touchMove),
                    // Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.touchStart),
                    // Laya.stage.on(Laya.Event.MOUSE_UP, this, this.touchUp);
                    // this.list = platform.getInstance().createLayaList();
                    // this.view.displayObject.addChild(this.list);
                    // platform.getInstance().initList(this.list);
                    this.contentPanel.m_nextBtn.y = this.contentPanel.m_winBtn.y = 850;
                    window.scrollList.scale(0.86, 0.86);
                    window.scrollList.bottom = 150;
                    Laya.stage.addChild(window.scrollList);
                    window.scrollList.visible = false;

                    this.btnHome = new fgui.GLoader();
                    this.btnHome.setXY(50, 20);
                    this.btnHome.setSize(50, 50)
                    this.btnHome.url = "res/home.png";
                    this.btnHome.setScale(1.3, 1.3);
                    this.btnHome.onClick(this, this.onbtnHome);
                    this.contentPanel.addChild(this.btnHome);

                    this.btnNextLevel = new fgui.GLoader();
                    this.btnNextLevel.setXY(238, 700);
                    this.btnNextLevel.url = "res/nextLevel.png";
                    this.btnNextLevel.setSize(239, 139);
                    this.btnNextLevel.onClick(this, this.onbtnNextLevel);
                    this.btnNextLevel.visible = false;
                    this.contentPanel.addChild(this.btnNextLevel);
                    window.btnNextLevel = this.btnNextLevel;
                }
            }, {
                key: "onbtnNextLevel",
                value: function onbtnNextLevel() {
                    platform.getInstance().showReward(() => {
                        window.scrollList.visible = false;
                        this.btnNextLevel.visible = false;
                        zs.core.workflow.next();
                    })
                }
            }, {
                key: "onbtnHome",
                value: function onbtnHome() {
                    platform.getInstance().showInterstitial(() => {
                        window.scrollList.visible = false;
                        this.btnNextLevel.visible = false;
                        window.contentPanelimg && (window.contentPanelimg.visible = false);
                        zs.core.workflow.next();
                    })
                }
            }, {
                key: "createCarNode",
                value: function createCarNode() {
                    this.carNodeIndictors = [];
                    for (var _t21 = 0; _t21 < 2; _t21++) {
                        var _t22 = n.createInstance();
                        this.contentPanel.addChild(_t22), this.carNodeIndictors.push(_t22);
                    }
                }
            }, {
                key: "createCharIndictors",
                value: function createCharIndictors() {
                    this.charIndictors = [];
                    for (var _t23 = 0; _t23 < 4; _t23++) {
                        var _t24 = o.createInstance();
                        this.contentPanel.addChild(_t24), this.charIndictors.push(_t24);
                    }
                }
            }, {
                key: "setCharIndictors",
                value: function setCharIndictors() {
                    for (var _t25 = 0; _t25 < C.manager.characters.length; _t25++) {
                        C.manager.characters[_t25].setCharIndictor(this.charIndictors[_t25]);
                    }
                }
            }, {
                key: "setResult",
                value: function setResult(t) {
                    t ? (this.contentPanel.m_c1.setSelectedIndex(1), this.btnNextLevel.visible = false,
                        C.player.rank <= 1 && (this.contentPanel.m_rank.url = "ui://main1/win_0" + C.player.rank,
                            Laya.SoundManager.playSound("music/win.mp3", 1))) : (this.contentPanel.m_c1.setSelectedIndex(2),
                                this.btnNextLevel.visible = true,
                                this.contentPanel.addChild(this.btnHome),
                                Laya.SoundManager.playSound("music/lose.mp3", 1)), Laya.SoundManager.stopMusic();
                    window.scrollList.visible = true;
                    window.contentPanelimg && (window.contentPanelimg.visible = false);
                }
            }, {
                key: "contentPanel",
                get: function get() {
                    return this.view;
                }
            }, {
                key: "onRightClick",
                value: function onRightClick() { }
            }, {
                key: "setController",
                value: function setController() {
                    this.touchRect = this.contentPanel.m_control.displayObject, this.oriPoint = new Laya.Point(this.touchRect.x, this.touchRect.y),
                        this.knob = this.contentPanel.m_control.m_controllerPoint,
                        this.contentPanel.m_touchRec.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown),
                        Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.onMouseUp),
                        Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUp),
                        this.originPiont = new Laya.Point(this.contentPanel.m_control.width / 2, this.contentPanel.m_control.height / 2);
                    if (!(C.player.form == "car" || C.player.form == "ship")) {
                        this.touchRect.visible = !0;
                    }
                }
            }, {
                key: "onMouseUp",
                value: function onMouseUp(t) {
                    this.isDown = !1, Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.onMove), this.radians = this.angle = -1,
                        this.knob.setXY(this.contentPanel.m_control.width / 2, this.contentPanel.m_control.height / 2),
                        this.touchRect.x = this.oriPoint.x, this.touchRect.y = this.oriPoint.y, this.mouseRunning = !1,
                        C.isCarGoing = !1, this.moveX = 0, this.touchRect.visible = !1, this.dir = "";
                }
            }, {
                key: "onMouseDown",
                value: function onMouseDown(t) {
                    this.isDown = !0, this.contentPanel.m_control.setXY(Laya.stage.mouseX, Laya.stage.mouseY),
                        this.knob.setXY(this.contentPanel.m_control.width / 2, this.contentPanel.m_control.height / 2);
                    if (!(C.player.form == "car" || C.player.form == "ship")) {
                        this.touchRect.visible = !0;////////////
                    }

                    Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMove),
                        this.lastTouchPointX = Laya.stage.mouseX, this.moveX = 0, C.isCarGoing = !0, this.mouseRunning = !0;
                }
            }, {
                key: "onMove",
                value: function onMove(t) {
                    var e = this.touchRect.globalToLocal(new Laya.Point(Laya.stage.mouseX, Laya.stage.mouseY), !1);
                    this.knob.setXY(e.x, e.y),
                        this.deltaX = e.x - this.originPiont.x, this.deltaY = e.y - this.originPiont.y;
                    var i = this.deltaX * this.deltaX, s = this.deltaY * this.deltaY;
                    this.angle = 180 * Math.atan2(this.deltaX, this.deltaY) / Math.PI, this.angle < 0 && (this.angle += 360),
                        this.angle = Math.round(this.angle), this.radians = Math.PI / 180 * this.angle;
                    if (i + s >= 14400) {
                        var r = Math.floor(120 * Math.sin(this.radians) + this.originPiont.x), a = Math.floor(120 * Math.cos(this.radians) + this.originPiont.y);
                        this.knob.setXY(r, a);
                    } else this.knob.setXY(e.x, e.y);
                }
            }, {
                key: "onSlowTick",
                value: function onSlowTick() { }
            }, {
                key: "endPlayKill",
                value: function endPlayKill() {
                    var _this10 = this;
                    Laya.timer.once(500, this, function () {
                        _this10.killPlaying = !1;
                    });
                }
            }, {
                key: "changeDir",
                value: function changeDir() {
                    this.mouseRunning ? (this.moveX = Laya.stage.mouseX - this.lastTouchPointX, this.moveX > 1 ? (this.dir = "right",
                        this.lastTouchPointX = Laya.stage.mouseX) : this.moveX < -1 && (this.dir = "left",
                            this.lastTouchPointX = Laya.stage.mouseX)) : this.dir = "";
                }
            }, {
                key: "onUpdate",
                value: function onUpdate() {
                    if (C.player.form == "car" || C.player.form == "ship") {
                        this.touchRect.visible = !1;
                    }
                    this.changeDir();
                }
            }, {
                key: "setWindow",
                value: function setWindow() {
                    this.contentPanel.m_c1.setSelectedIndex(0)
                        , this.setCharIndictors()
                        , Laya.SoundManager.stopMusic()
                        , this.onMouseDown(null)
                        , C.manager.carNodeArr[0].initCarNodeUI(this.carNodeIndictors[0])
                        , C.manager.shipNodeArr[0].initCarNodeUI(this.carNodeIndictors[1])
                        , C.cAnimator.play("gameStart", 0, 0)
                        , console.log(33333333333)
                        , Laya.SoundManager.playMusic("soundBgm/match1.mp3", 0);
                }
            }, {
                key: "setResultView",
                value: function setResultView() { }
            }, {
                key: "onNext",
                value: function onNext() {
                    this.contentPanel.m_nextBtn.disable = true;
                    this.contentPanel.m_winBtn.disable = true;
                    platform.getInstance().showInterstitial(() => {
                        window.scrollList.visible = false;
                        this.btnNextLevel.visible = false;
                        zs.core.workflow.next();
                    })
                }
            }, {
                key: "onRelive",
                value: function onRelive() {
                    zs.platform.async.playVideo().then(function (t) {
                        t ? (H.inst.player.destroyed, console.log("播放视频完成")) : (console.log("播放视频完成"), zs.core.workflow.next());
                    }).catch(function () {
                        zs.core.workflow.next(), console.log("播放视频未完成");
                    });
                }
            }, {
                key: "onRestart",
                value: function onRestart() {
                    platform.getInstance().showInterstitial(() => {
                        window.scrollList.visible = false;
                        this.btnNextLevel.visible = false;
                        zs.core.workflow.next();
                    })
                }
            }, {
                key: "setUnlockView",
                value: function setUnlockView() { }
            }, {
                key: "setTutorProcess",
                value: function setTutorProcess() { }
            }, {
                key: "onStart",
                value: function onStart() { }
            }, {
                key: "touchMove",
                value: function touchMove(t) { }
            }, {
                key: "touchStart",
                value: function touchStart(t) {


                }
            }, {
                key: "touchUp",
                value: function touchUp(t) { }
            }], [{
                key: "inst",
                get: function get() {
                    return this._inst;
                }
            }, {
                key: "make",
                value: function make() {
                    return c.createInstance();
                }
            }, {
                key: "type",
                value: function type() {
                    return c;
                }
            }]);
            return v;
        }(zs.fgui.base);
        var A = /* */ function (_Laya$EventDispatcher) {
            _inherits2(A, _Laya$EventDispatcher);
            var _super14 = _createSuper2(A);
            function A() {
                var _this11;
                _classCallCheck2(this, A);
                _this11 = _super14.apply(this, arguments), _this11.isRuning = !1, _this11.isRecovering = !1;
                return _this11;
            }
            _createClass2(A, [{
                key: "init",
                value: function init(t) {
                    this.isRuning = !1, this.checkFinishHandle = t.checkFinishHandle, this.completeHandler = t.completeHandler,
                        this.updateHandler = t.updateHandler, this.startHandle = t.startHandle, this.to = t.to,
                        this.isRecovering = !1, this.recoverHandle = t.recoverHandle, this.recoverCheck = t.recoverCheck,
                        this.recoverTo = t.recoverTo;
                }
            }, {
                key: "onUpdate",
                value: function onUpdate() {
                    this.updateHandler && this.updateHandler.run();
                }
            }, {
                key: "checkFinish",
                value: function checkFinish() {
                    return !this.checkFinishHandle || this.checkFinishHandle.run();
                }
            }, {
                key: "checkRecoverFinish",
                value: function checkRecoverFinish() {
                    return !this.recoverCheck || this.recoverCheck.run();
                }
            }, {
                key: "finish",
                value: function finish() {
                    this.isRuning = !1, this.onComplete();
                }
            }, {
                key: "start",
                value: function start() {
                    this.isRuning = !0, this.startHandle && this.startHandle.run();
                }
            }, {
                key: "startRecover",
                value: function startRecover() {
                    "" == this.recoverTo && (this.isRecovering = !0, this.recoverHandle && this.recoverHandle.run());
                }
            }, {
                key: "onComplete",
                value: function onComplete() {
                    this.completeHandler && this.completeHandler.run();
                }
            }]);
            return A;
        }(Laya.EventDispatcher);
        var R = /* */ function () {
            function R() {
                _classCallCheck2(this, R);
                this.to = {};
            }
            _createClass2(R, [{
                key: "init",
                value: function init(t, e) {
                    this.getItem(e.to).init(e);
                }
            }, {
                key: "getItem",
                value: function getItem(t) {
                    var e;
                    return null != this.to[t] ? e = this.to[t] : (e = new A(), this.to[t] = e), e;
                }
            }]);
            return R;
        }();
        var w = /* */ function () {
            function w() {
                _classCallCheck2(this, w);
                this.isRuning = !1, this.isRecovering = !1, this.recoverHandle = null, this.recoverCheck = null,
                    this.recoverCond = null, this.checkFinishHandle = null, this.completeHandler = null,
                    this.updateHandler = null, this.startHandle = null, this.to = "", this.recoverTo = "";
            }
            _createClass2(w, [{
                key: "make",
                value: function make(t, e) {
                    this[t] = e;
                }
            }]);
            return w;
        }();
        w.Key_recoverHandle = "recoverHandle", w.Key_recoverCheck = "recoverCheck", w.Key_recoverCond = "recoverCond",
            w.Key_checkFinishHandle = "checkFinishHandle", w.Key_completeHandler = "completeHandler",
            w.Key_updateHandler = "updateHandler", w.Key_startHandle = "startHandle", w.Key_to = "to",
            w.Key_recoverTo = "recoverTo";
        var N = /* */ function () {
            function N() {
                _classCallCheck2(this, N);
                this.to = {};
            }
            _createClass2(N, [{
                key: "init",
                value: function init(t, e) {
                    this.to[t] = e;
                }
            }]);
            return N;
        }();
        var x = /* */ function () {
            function x(t) {
                _classCallCheck2(this, x);
                this._condMap = {}, this._transMap = {}, this._curTransi = null, this._curUpdateTimes = 0,
                    Laya.timer.frameLoop(1, this, this.onUpdate);
            }
            _createClass2(x, [{
                key: "checkCond",
                value: function checkCond(t) {
                    var e = this._statues, i = this.getCond(e, t);
                    return i != L.ERROR_NO_SUCH_FROM && i != L.ERROR_NO_SUCH_TO && (i == L.COND_ALL_PASS || !(i && i instanceof Laya.Handler) || i.run());
                }
            }, {
                key: "getCond",
                value: function getCond(t, e) {
                    return null == this._condMap[t] ? L.ERROR_NO_SUCH_FROM : null == this._condMap[t].to[e] ? L.ERROR_NO_SUCH_TO : this._condMap[t].to[e];
                }
            }, {
                key: "registCond",
                value: function registCond(t, e, i) {
                    var s;
                    null != this._condMap[t] ? s = this._condMap[t] : (s = new N(), this._condMap[t] = s),
                        s.init(e, i);
                }
            }, {
                key: "registTrans",
                value: function registTrans(t, e, i) {
                    var s;
                    null != this._transMap[t] ? s = this._transMap[t] : (s = new R(), this._transMap[t] = s),
                        i.make(w.Key_to, e), s.init(e, i);
                }
            }, {
                key: "getTrans",
                value: function getTrans(t) {
                    var e = this._statues;
                    return this._transMap[e].getItem(t);
                }
            }, {
                key: "switchStatues",
                value: function switchStatues(t) {
                    if (null != this._statues) return !!this.checkCond(t) && (this._curTransi && this.stopTrans(), this.beginTrans(t),
                        !0);
                    this._statues = t;
                }
            }, {
                key: "stopTrans",
                value: function stopTrans() { }
            }, {
                key: "isMiddle",
                value: function isMiddle() {
                    return this._statues.includes(x._middleFlag);
                }
            }, {
                key: "beginTrans",
                value: function beginTrans(t) {
                    this._curUpdateTimes = 0, this._curTransi = this.getTrans(t),
                        this.isMiddle() ? this._from = this._statues.split(x._middleFlag)[1] : this._from = this._statues,
                        this._statues = x._middleFlag + t, this._to = t, this._curTransi.start();
                }
            }, {
                key: "onTransComplete",
                value: function onTransComplete() {
                    this._curTransi.isRecovering = !1, this._curTransi = null;
                }
            }, {
                key: "onUpdate",
                value: function onUpdate() {
                    null != this._statues && null != this._curTransi && (this._curTransi.onUpdate(),
                        this._curUpdateTimes++, this._curTransi.checkFinish() && (this._statues = this._to,
                            this._from = "", this._to = "", this.transFinish()), x.isLog && console.log(this._statues));
                }
            }, {
                key: "transFinish",
                value: function transFinish() {
                    var t = this._curTransi.completeHandler;
                    this.onTransComplete(), t && t.run();
                }
            }, {
                key: "recoverTo",
                value: function recoverTo() {
                    return "" != this._curTransi.recoverTo;
                }
            }, {
                key: "destroy",
                value: function destroy() {
                    Laya.timer.clear(this, this.onUpdate);
                }
            }]);
            return x;
        }();
        x._middleFlag = "=>", x.completeEvent = "loopFsm_completeEvent", x.isLog = !1;
        var P = /* */ function () {
            function P() {
                _classCallCheck2(this, P);
                this.isStart = !1;
            }
            _createClass2(P, [{
                key: "init",
                value: function init(t, e) {
                    this.owner = t, this.parent = e;
                }
            }, {
                key: "start",
                value: function start(t) {
                    this.target = t, this.isStart = !0, this.pathArray = y.countBezier(this.owner.transform.position, this.target, -45, .5),
                        this.pathIndex = 0;
                }
            }, {
                key: "onUpdate",
                value: function onUpdate() {
                    this.isStart && this.move();
                }
            }, {
                key: "move",
                value: function move() {
                    if (this.isStart && this.target)
                        if (this.pathIndex >= this.pathArray.length) {
                            console.log(111111111111111)
                            this.isStart = !1, this.parent.onBezierEnd();
                        } else {
                            if (this.pathArray.length < 0) return;
                            var _t26 = this.pathArray[this.pathIndex].x - this.owner.transform.position.x,
                                _e17 = this.pathArray[this.pathIndex].y - this.owner.transform.position.y,
                                _i20 = this.pathArray[this.pathIndex].z - this.owner.transform.position.z;
                            this.owner.transform.translate(new Laya.Vector3(_t26, _e17, _i20), !1), this.pathIndex += 1;
                        }
                }
            }]);
            return P;
        }();
        var k = /* */ function () {
            function k() {
                _classCallCheck2(this, k);
            }
            _createClass2(k, [{
                key: "init",
                value: function init(t, e) {
                    this.char = t, this.ui = e, "player" == this.char.type ? this.ui.m_c1.setSelectedIndex(0) : this.ui.m_c1.setSelectedIndex(1),
                        this.ui.touchable = !1;
                }
            }, {
                key: "onUpdate",
                value: function onUpdate() {
                    if (!this.ui) return;
                    if ("people" != this.char.form) return void (this.ui.visible = !1);
                    if (!C.player) return void (this.ui.visible = !1);
                    if ("people" != C.player.form) return void (this.ui.visible = !1);
                    var t = y.isInScreenWithPoint(C.manager.camera, this.char.owner, 0);
                    t ? (this.ui.setXY(t.x - 30, t.y + 20), this.ui.visible = !0) : this.ui.visible = !1,
                        "player" == this.char.type ? (this.char.headItems.length >= this.char.maxItem ? this.ui.m_c1.setSelectedIndex(2) : this.ui.m_c1.setSelectedIndex(0),
                            this.ui.m_c2.setSelectedIndex(1)) : (this.char.headItems.length > C.player.headItems.length ? this.ui.m_c1.setSelectedIndex(3) : this.ui.m_c1.setSelectedIndex(1),
                                this.char.headItems.length <= C.player.headItems.length ? this.ui.m_c2.setSelectedIndex(1) : this.ui.m_c2.setSelectedIndex(0));
                    var e = this.char.headItems.length / this.char.maxItem * 100;
                    this.ui.m_player.value = e, this.ui.m_enemy.value = e, this.ui.m_player_full.value = e,
                        this.ui.m_enemy_full.value = e, this.ui.m_num.text = this.char.headItems.length + "/",
                        this.ui.m_maxNum.text = this.char.maxItem + "";
                }
            }]);
            return k;
        }();
        var M = /* */ function (_Laya$Script3D4) {
            _inherits2(M, _Laya$Script3D4);
            var _super15 = _createSuper2(M);
            function M() {
                _classCallCheck2(this, M);
                return _super15.apply(this, arguments);
            }
            _createClass2(M, [{
                key: "init",
                value: function init(t, e) {
                    this.targetPos = t, this.yAngle = e, this.owner.transform.localRotationEulerY = e,
                        this.parent = this.owner.parent, this.owner.transform.setWorldLossyScale(new Laya.Vector3(.6, .6, .6)),
                        this.char = this.parent.getComponent(b);
                }
            }, {
                key: "onUpdate",
                value: function onUpdate() {
                    if (!this.targetPos) return;
                    this.targetPos.y;
                    var t = this.parent.transform.position.clone();
                    this.targetPos.x = this.parent.transform.position.x, this.targetPos.z = this.parent.transform.position.z,
                        Laya.Vector3.lerp(this.owner.transform.position, this.targetPos, .2, t), this.owner.transform.position = t;
                }
            }, {
                key: "setAlpha",
                value: function setAlpha(t) {
                    t ? y.setSp3dAlphaValue(this.owner, !0, 1) : y.setSp3dAlphaValue(this.owner, !1, .5);
                }
            }, {
                key: "recover",
                value: function recover() {
                    this.owner.transform.localRotationEulerY = 0, this.owner.removeSelf(), p.recoverToPool(this.owner),
                        this.destroy();
                }
            }]);
            return M;
        }(Laya.Script3D);
        var O = /* */ function (_Laya$Script3D5) {
            _inherits2(O, _Laya$Script3D5);
            var _super16 = _createSuper2(O);
            function O() {
                _classCallCheck2(this, O);
                return _super16.apply(this, arguments);
            }
            _createClass2(O, [{
                key: "onAwake",
                value: function onAwake() {
                    this.meshNode = this.owner.getChildAt(0), this.ani = this.owner.getChildAt(0).getComponent(Laya.Animator),
                        this.phy = this.owner.getComponent(Laya.PhysicsCollider), this.phy.collisionGroup = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER1,
                        this.phy.enabled = !0, this.owner.transform.position.z > C.semiPos.transform.position.z ? this.zone = 2 : this.zone = 1;
                }
            }, {
                key: "init",
                value: function init(t) {
                    this.aniName = t;
                }
            }, {
                key: "setMeshNode",
                value: function setMeshNode(t) {
                    this.meshNode.active = !!t;
                }
            }, {
                key: "onHit",
                value: function onHit() {
                    var _this12 = this;
                    this.meshNode.active = !0, this.phy.enabled = !1, this.ani.play(this.aniName), setTimeout(function () {
                        _this12.dispose();
                    }, 1e3);
                }
            }, {
                key: "dispose",
                value: function dispose() {
                    this.owner.removeSelf(), p.recoverToPool(this.owner), this.destroy();
                }
            }]);
            return O;
        }(Laya.Script3D);
        var b = /* */ function (_Laya$Script3D6) {
            _inherits2(b, _Laya$Script3D6);
            var _super17 = _createSuper2(b);
            function b() {
                var _this13;
                _classCallCheck2(this, b);
                _this13 = _super17.call(this), _this13.hitRes = new Laya.HitResult(), _this13.deadFlag = !1,
                    _this13.speed = .9, _this13.castStart = !1, _this13.itemHeight = .05, _this13.maxItem = 23,
                    _this13.isMeetThings = !1, _this13.updateTimes = 0, _this13.form = "", _this13.addSpeed = 1,
                    _this13.normalSpdDecrease = 3, _this13.maxSpd = 6, _this13.carSpd = 6, _this13.angleSpeed = 20,
                    _this13.lastYangle = 0, _this13.radius = .8, _this13.hitedTimes = 0, _this13.driving = !0,
                    _this13.zone = 1, _this13.needPlay = !1, _this13.playIndex = 0, _this13.rank = -1,
                    _this13.trophy_1_url = "Bip001/Bip001 Pelvis/Bip001 Spine/Bip001 Neck/Bip001 R Clavicle/Bip001 R UpperArm/Bip001 R Forearm/Bip001 R Hand/mod_trophy",
                    _this13.trophy_2_url = "Bip001/Bip001 Pelvis/Bip001 Spine/Bip001 Neck/Bip001 R Clavicle/Bip001 R UpperArm/Bip001 R Forearm/Bip001 R Hand/mod_trophy_2",
                    _this13.trophy_3_url = "Bip001/Bip001 Pelvis/Bip001 Spine/Bip001 Neck/Bip001 R Clavicle/Bip001 R UpperArm/Bip001 R Forearm/Bip001 R Hand/mod_trophy_3",
                    _this13.invincibleTimes = 0, _this13.curShipAni = "idle", _this13.targetRotY = 0,
                    _this13.playjimu_pinzhuang = !1, _this13.targetRotationY = 0, _this13.isLerping = !1,
                    _this13.tempPos = new Laya.Vector3(), _this13.gameEnd = !1, _this13.isFalling = !1,
                    _this13.fsm = new x(L.IDLE), _this13.registFsm();
                return _this13;
            }
            _createClass2(b, [{
                key: "startOverClick",
                value: function startOverClick() { }
            }, {
                key: "init",
                value: function init(t) {
                    this.needMulSpeed = false;
                    this.colorId = t, this.phyCollider = this.owner.getComponent(Laya.PhysicsCollider),
                        this.shape = this.phyCollider.colliderShape, this.rotNode = this.owner.getChildAt(0),
                        this.roleNode = this.rotNode.getChildAt(0), this.headNode = this.rotNode.getChildByName("headNode"),
                        this.itemAni = this.headNode.getComponent(Laya.Animator), this.forwardPos = this.owner.getChildByName("toPos"),
                        this.car = this.rotNode.getChildByName("car"), this.shipNode = this.rotNode.getChildByName("ship"),
                        this.shipAni = this.shipNode.getChildAt(0).getComponent(Laya.Animator), this.headItems = [],
                        this.animator = this.roleNode.getComponent(Laya.Animator), this.bezierMove = new P(),
                        this.bezierMove.init(this.owner, this);
                    var e = this.car.getChildByName("ef_hangover_1-1");
                    this.trophy_1 = y.getNodeByString(this.roleNode, this.trophy_1_url), this.trophy_1.active = !1,
                        this.trophy_2 = y.getNodeByString(this.roleNode, this.trophy_2_url), this.trophy_2.active = !1,
                        this.trophy_3 = y.getNodeByString(this.roleNode, this.trophy_3_url), this.trophy_3.active = !1,
                        this.changeForm("people"), this.switchStatues(L.IDLE), this.charIndictor = new k();
                    for (var _t27 = 0; _t27 < 2; _t27++) {
                        var _i21 = e.getChildAt(_t27);
                        _i21.trailFilter.alignment = Laya.TrailAlignment.TransformZ, _i21.transform.localRotationEulerX += 90;
                    }
                    var i = this.roleNode.getChildByName("ef_hangover_1-2");
                    for (var _t28 = 0; _t28 < 1; _t28++) {
                        var _e18 = i.getChildAt(_t28);
                        _e18.trailFilter.alignment = Laya.TrailAlignment.TransformZ, _e18.transform.localRotationEulerX += 90;
                    }
                    var s = this.shipNode.getChildByName("ef_hangover_1-0");
                    for (var _t29 = 0; _t29 < 1; _t29++) {
                        var _e19 = s.getChildAt(_t29);
                        _e19.trailFilter.alignment = Laya.TrailAlignment.TransformZ, _e19.transform.localRotationEulerX += 90;
                    }
                }
            }, {
                key: "setCharIndictor",
                value: function setCharIndictor(t) {
                    this.charIndictor.init(this, t);
                }
            }, {
                key: "playIdle",
                value: function playIdle() {
                    this.refreshAni("idle"), this.itemAni.play("itemStop");
                }
            }, {
                key: "startFinalFly",
                value: function startFinalFly() {
                    this.owner.transform.rotationEuler = new Laya.Vector3(0, 0, 0), this.removeAllPieces();
                    var t = zs.scene.inst.current.getChildByName("FinalPos");
                    C.winArr.push(this), this.rank = C.winArr.length, this.changeForm("playing"), this.playIndex = 0,
                        this.playPos = t.getChildByName("playPos"), this.needPlay = !0;
                }
            }, {
                key: "checkMeetSth",
                value: function checkMeetSth() {
                    this.hitRes = y.resetHitRes(this.hitRes), this.phyCollider.collisionGroup = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER2;
                    var t = C.scene.physicsSimulation.shapeCast(this.shape, this.owner.transform.position, this.forwardPos.transform.position, this.hitRes, null, null, Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER1, Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER1);
                    if (this.phyCollider.collisionGroup = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER1,
                        t) {
                        "player" == this.type && "FinalPos" == this.hitRes.collider.owner.name && (this.changeForm("playing"),
                            C.winArr.push(this), this.rank = C.winArr.length, Laya.SoundManager.playSound("music/cushionBump.mp3", 1),
                            this.playIndex = 0, this.playPos = this.hitRes.collider.owner.getChildByName("playPos"),
                            this.needPlay = !0),
                            "player" == this.type && "semiPos" == this.hitRes.collider.owner.name && (this.changeForm("playing"),
                                this.playPos = this.hitRes.collider.owner.getChildByName("playPos"), Laya.SoundManager.playSound("music/cushionBump.mp3", 1),
                                this.needPlay = !0),
                            "enemy" == this.type && "semiPos" == this.hitRes.collider.owner.name && (this.changeForm("playing"),
                                this.playPos = this.hitRes.collider.owner.getChildByName("playPos"), this.needPlay = !0),
                            "enemy" == this.type && "FinalPos" == this.hitRes.collider.owner.name && (C.winArr.push(this),
                                this.rank = C.winArr.length, this.changeForm("playing"), this.playIndex = 0,
                                this.playPos = this.hitRes.collider.owner.getChildByName("playPos"),
                                this.needPlay = !0)
                        if (y.StringStartWith(this.hitRes.collider.owner.name, "barrier_", !0)) {
                            this.hitRes.collider.owner.getComponent(O).onHit(),
                                "player" == this.type && (Laya.SoundManager.playSound("music/cushionBump.mp3", 1), this.needMulSpeed = true,
                                    Laya.timer.clear(this, this.refreshSpeed),
                                    Laya.timer.once(2000, this, this.refreshSpeed)), y.createEffect(T.ef_vehicle_hit, this.hitRes.point.clone(), C.worldDynamic, !0),
                                this.shiftDown();
                        }
                        return (!this.meetThings || this.meetThings != this.hitRes.collider.owner) && (this.meetThings = this.hitRes.collider.owner,
                            !0);
                    }
                    return !1;
                }
            }, {
                key: "refreshSpeed",
                value: function refreshSpeed() {
                    this && this.needMulSpeed && (this.needMulSpeed = false);
                }
            }, {
                key: "move",
                value: function move(t, e, i, s) {
                    var r;
                    if (r = this.speed, this.fsm._statues != L.WALK) return;
                    if (this.castStart) return;
                    if (this.deadFlag) return;
                    var a = r * t, n = this.owner;
                    i && (n.transform.rotationEuler = new Laya.Vector3(0, i, 0));
                    var o = y.GetForward(n), l = y.Vector3_Multiply(o, -a), h = y.Vector3_Add(n.transform.position, l), c = !1;
                    c = this.checkCollison(h), this.isMeetCollision = c, this.isMeetWall = c, this.isMeetEdge = c;
                    var d = !1, u = (y.Vector3_SqrMagnitude(h), y.Vector3_SqrMagnitude(n.transform.position),
                        y.Vector3_Multiply(l, 2)), _ = this.checkCollisonChar(h, u);
                    if (c || _) { } else n.transform.translate(new Laya.Vector3(0, 0, a)), d = !0;
                    return d;
                }
            }, {
                key: "checkCollison",
                value: function checkCollison(t) {
                    var e = C.getLeftWall(this.zone), i = C.getRightWall(this.zone), s = C.getDownWall(this.zone), r = C.getUpWall(this.zone);
                    return t.x >= e.transform.position.x || t.x <= i.transform.position.x || t.z <= s.transform.position.z || t.z >= r.transform.position.z;
                }
            }, {
                key: "checkCollisonChar",
                value: function checkCollisonChar(t, e) {
                    this.hitRes = y.resetHitRes(this.hitRes);
                    var i = this.phyCollider.colliderShape, s = [], r = this.owner.transform.position.clone(), a = t.clone();
                    C.scene.physicsSimulation.shapeCastAll(i, r, a, s);
                    var n = !1;
                    for (var _t30 = 0; _t30 < s.length; _t30++) {
                        var _e20 = s[_t30];
                        this.owner.id != _e20.collider.owner.id && _e20.collider && this.checkCanAttackTarget(_e20.collider.owner) && (n = !0);
                    }
                    return n;
                }
            }, {
                key: "dropPieces",
                value: function dropPieces(t) {
                    var e = this.owner.transform.position.clone();
                    for (t > 0 && this.type; t > 0;) {
                        t--;
                        var _i22 = e;
                        _i22.x += .4 * Math.random() - .2, _i22.z += .4 * Math.random() - .2, _i22.x >= C._leftWall.transform.position.x - .1 && (_i22.x = C._leftWall.transform.position.x - .1),
                            _i22.x <= C._rightWall.transform.position.x + .1 && (_i22.x = C._rightWall.transform.position.x - .1),
                            H.inst.itemProduce2(this.colorId, null, _i22, -1, -1);
                    }
                }
            }, {
                key: "onHited",
                value: function onHited(t) {
                    if (!t || !t.owner) {
                        return;
                    }
                    if (this.switchStatues(L.HITED)) {
                        this.turnToHandle(t.owner, !0),
                            this.dropPieces(this.headItems.length),
                            this.removeAllPieces();
                        var _e21 = this.owner.transform.position.clone();
                        return _e21.y += .1, y.createEffect(T.ef_hit, _e21, C.worldDynamic, !0),
                            "player" == this.type && Laya.SoundManager.playSound("music/roleBump.mp3", 1),
                            !0;
                    }
                    return !1;
                }
            }, {
                key: "hitedPlay",
                value: function hitedPlay() {
                    this.refreshAni("down");
                }
            }, {
                key: "turnToHandle",
                value: function turnToHandle(t) {
                    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
                    if (!t) return;
                    var i = this.owner, s = new Laya.Point();
                    s.x = i.transform.position.x - t.transform.position.x, s.y = i.transform.position.z - t.transform.position.z,
                        s.normalize(), this.yAngle = y.VectorToAngle(s), e && (this.owner.transform.rotationEuler = new Laya.Vector3(0, this.yAngle, 0));
                }
            }, {
                key: "checkCanHit",
                value: function checkCanHit() {
                    return !(this.invincibleTimes > 0) && this.fsm._statues != L.getCombineKey(L.HITED);
                }
            }, {
                key: "registHited",
                value: function registHited() {
                    var _this14 = this;
                    var t;
                    this.fsm.registCond(L.IDLE, L.HITED, Laya.Handler.create(this, this.checkCanHit, [], !1)),
                        (t = new w()).make(w.Key_startHandle, Laya.Handler.create(this, this.hitedPlay, null, !1)),
                        t.make(w.Key_updateHandler, Laya.Handler.create(this, this.hitedUpdateChcekTimes, null, !1)),
                        t.make(w.Key_completeHandler, Laya.Handler.create(this, function () {
                            _this14.switchStatues(L.IDLE), "player" == _this14.type && (_this14.invincibleTimes = 60);
                        }, null, !1)), t.make(w.Key_checkFinishHandle, Laya.Handler.create(this, this.checkAnimFinish, null, !1)),
                        this.fsm.registTrans(L.IDLE, L.HITED, t), this.fsm.registCond(L.WALK, L.HITED, Laya.Handler.create(this, this.checkCanHit, [], !1)),
                        (t = new w()).make(w.Key_startHandle, Laya.Handler.create(this, this.hitedPlay, null, !1)),
                        t.make(w.Key_updateHandler, Laya.Handler.create(this, this.hitedUpdateChcekTimes, null, !1)),
                        t.make(w.Key_completeHandler, Laya.Handler.create(this, function () {
                            _this14.switchStatues(L.IDLE), "player" == _this14.type && (_this14.invincibleTimes = 60);
                        }, null, !1)), t.make(w.Key_checkFinishHandle, Laya.Handler.create(this, this.checkAnimFinish, null, !1)),
                        this.fsm.registTrans(L.WALK, L.HITED, t), this.fsm.registCond(L.HITED, L.IDLE, L.COND_ALL_PASS),
                        (t = new w()).make(w.Key_completeHandler, Laya.Handler.create(this, this.playIdle, null, !1)),
                        this.fsm.registTrans(L.HITED, L.IDLE, t);
                }
            }, {
                key: "hitedUpdateChcekTimes",
                value: function hitedUpdateChcekTimes() { }
            }, {
                key: "checkAnimFinish",
                value: function checkAnimFinish() {
                    var t, e;
                    return t = this.animator.getCurrentAnimatorPlayState(), e = this.animator, !!t.animatorState.clip.islooping || y.getAnimPlayingTime(e) >= 1;
                }
            }, {
                key: "checkCanAttackTarget",
                value: function checkCanAttackTarget(t) {
                    var e = t.getComponent(b);
                    if (e) {
                        var _t31 = this.headItems.length, _i23 = e.headItems.length;
                        // C.level <= 5 && ("player" == this.type && (_t31 = this.maxItem + 1), "player" == e.type && (_i23 = this.maxItem + 1));
                        var _s11 = !1;
                        ("player" == this.type || "player" == e.type) && (_s11 = !0)
                        //, _t31 == _i23 && ("player" == this.type && (_t31 = this.maxItem + 1),
                        // "player" == e.type && (_i23 = this.maxItem + 1))
                        // if (_t31 && _i23) {
                        console.log(_t31, _i23, "player" == this.type)
                        // }

                        if (_t31 < _i23) {
                            var _t32 = this.onHited(e);
                            return _t32 && _s11 && Laya.SoundManager.playSound("music/roleBump.mp3", 1);
                        } else if (_t31 == _i23) {
                            return (this.onHited(e) || e.onHited(this)) && _s11 && Laya.SoundManager.playSound("music/roleBump.mp3", 1);
                        } else {
                            e.onHited(this) && _s11 && Laya.SoundManager.playSound("music/roleBump.mp3", 1);
                        }

                    }
                }
            }, {
                key: "addItem",
                value: function addItem(t) {
                    t.clone();
                    var e = p.createSpriteToScene(t.name, this.headNode, t.transform.position, t.transform.rotation).addComponent(M), i = this.headNode.transform.position.clone();
                    i.y += this.headItems.length * this.itemHeight;
                    var s = 360 * Math.random();
                    e.init(i, s), this.headItems.push(e), "player" == this.type && (Laya.SoundManager.playSound("music/pick.mp3", 1),
                        this.headItems.length >= this.maxItem && Laya.SoundManager.playSound("music/get_full.mp3", 1));
                }
            }, {
                key: "playShipAni",
                value: function playShipAni(t) {
                    this.curShipAni != t && this.shipAni.play(t);
                }
            }, {
                key: "drive",
                value: function drive() { }
            }, {
                key: "checkDriveWall",
                value: function checkDriveWall(t, e, i) {
                    var s = y.Vector3_Multiply(t, e * i * 1.5), r = y.Vector3_Add(this.owner.transform.position, s), a = C.getLeftWall(this.zone), n = C.getRightWall(this.zone);
                    return r.x >= a.transform.position.x - .1 || r.x <= n.transform.position.x + .1;
                }
            }, {
                key: "changeRot",
                value: function changeRot() {
                    var t = y.lerp(this.rotNode.transform.rotationEuler.y, this.targetRotY, .05);
                    this.rotNode.transform.rotationEuler.y = t, this.rotNode.transform.rotationEuler = this.rotNode.transform.rotationEuler;
                }
            }, {
                key: "isInGround",
                value: function isInGround() {
                    if ("people" != this.form) return;
                    this.hitRes = y.resetHitRes(this.hitRes);
                    var t = new Laya.Ray(this.headNode.transform.position, new Laya.Vector3(0, -1, 0));
                    return C.scene.physicsSimulation.rayCast(t, this.hitRes, 1.7) ? (this.curGournd,
                        this.curGournd = this.hitRes.collider.owner, !0) : (this.setHeadNodeAlphaOpen(),
                            "player" == this.type && this.assemblySound && !this.assemblySound.isStopped && this.assemblySound.stop(),
                            this.curGournd = null, !1);
                }
            }, {
                key: "changeRotation",
                value: function changeRotation(t) { }
            }, {
                key: "registFsm",
                value: function registFsm() {
                    this.registIdle(), this.registHited();
                }
            }, {
                key: "registIdle",
                value: function registIdle() {
                    var t;
                    this.fsm.registCond(L.IDLE, L.WALK, L.COND_ALL_PASS), (t = new w()).make(w.Key_startHandle, Laya.Handler.create(this, this.idleToWalk, null, !1)),
                        this.fsm.registTrans(L.IDLE, L.WALK, t), this.fsm.registCond(L.WALK, L.IDLE, L.COND_ALL_PASS),
                        (t = new w()).make(w.Key_completeHandler, Laya.Handler.create(this, this.playIdle, null, !1)),
                        this.fsm.registTrans(L.WALK, L.IDLE, t), this.fsm.registCond(L.WALK, L.IDLE, L.COND_ALL_PASS),
                        (t = new w()).make(w.Key_completeHandler, Laya.Handler.create(this, this.playIdle, null, !1)),
                        this.fsm.registTrans(L.WALK, L.IDLE, t);
                }
            }, {
                key: "onUpdate",
                value: function onUpdate() {
                    this.isLerping ? this.lerpToTarget() : (this.isInGround(), this.updateTimes % 5 == 0 && this.checkGround(),
                        this.updateTimes++), this.hitedTimes > 0 ? (this.hitedTimes--, this.driving = !1) : this.driving = !0,
                        this.charIndictor.onUpdate(), this.invincibleTimes > 0 && this.invincibleTimes--;
                }
            }, {
                key: "checkGround",
                value: function checkGround() {
                    if (!this.curGournd) return;
                    this.playjimu_pinzhuang && (this.playjimu_pinzhuang = !1);
                    var t = this.curGournd.getComponent(E);
                    t && (this.checkCar(t), this.setHeadNodeAlpha());
                }
            }, {
                key: "setHeadNodeAlphaOpen",
                value: function setHeadNodeAlphaOpen() { }
            }, {
                key: "setHeadNodeAlpha",
                value: function setHeadNodeAlpha() { }
            }, {
                key: "checkCar",
                value: function checkCar(t) {
                    if (t.color == this.colorId && this.repairCar()) {
                        var _e22 = t.repair();
                        "player" == this.type && (this.assemblySound = Laya.SoundManager.playSound("music/assemblyOver.mp3", 1));
                        if (_e22) {
                            "player" == this.type && Laya.SoundManager.playSound("music/assemblyOver.mp3", 1);
                            var _e23 = Laya.Handler.create(this, this.driveStart, [t]);
                            this.refreshAni("toCar"), this.removeAllPieces(), this.startLerp(t.owner.transform.position, _e23);
                        }
                    }
                }
            }, {
                key: "driveStart",
                value: function driveStart(t) {
                    "car" == t.type ? this.changeForm("car") : this.changeForm("ship"), t.remove(),
                        this.owner.transform.localRotationEulerY = 0;
                }
            }, {
                key: "repairCar",
                value: function repairCar() {
                    if (this.headItems.length > 0) {
                        return this.headItems.pop().recover(), !0;
                    }
                    return !1;
                }
            }, {
                key: "idleToWalk",
                value: function idleToWalk() {
                    this.itemAni.play("itemScale"), this.refreshAni("run");
                }
            }, {
                key: "refreshAni",
                value: function refreshAni() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
                    this.animator && this.animator.play(t);
                }
            }, {
                key: "switchStatues",
                value: function switchStatues(t) {
                    if (null != this.fsm._statues) {
                        if (t != this.fsm._statues) return this.fsm.switchStatues(t);
                    } else this.fsm._statues = t;
                }
            }, {
                key: "setRot",
                value: function setRot(t) {
                    this.owner.transform.localRotation = t;
                }
            }, {
                key: "rocker",
                get: function get() {
                    return this._rocker ? this._rocker : (this._rocker = v.inst, this._rocker);
                }
            }, {
                key: "changeForm",
                value: function changeForm(t) {
                    if (t != this.form) if (this.form = t, "people" == t) {
                        this.car.active = !1, this.shipNode.active = !1, this.switchStatues(L.IDLE), this.roleNode.getChildByName("ef_hangover_1-2").active = !0;
                    } else if ("car" == t) {
                        this.car.active = !0, this.shipNode.active = !1, this.roleNode.getChildByName("ef_hangover_1-2").active = !1;
                    } else if ("playing" == t) {
                        this.car.active = !1, this.shipNode.active = !1, this.roleNode.getChildByName("ef_hangover_1-2").active = !1;
                    } else if ("ship" == t) {
                        this.car.active = !1, this.shipNode.active = !0, this.roleNode.getChildByName("ef_hangover_1-2").active = !1;
                    } else "win" == t && (this.car.active = !1, this.shipNode.active = !1);
                }
            }, {
                key: "removeAllPieces",
                value: function removeAllPieces() {
                    for (; this.headItems.length > 0;) {
                        this.headItems.pop().recover();
                    }
                }
            }, {
                key: "startLerp",
                value: function startLerp(t, e) {
                    this.isLerping = !0, this.targetPos = t.clone(), this.afterLerp = e;
                }
            }, {
                key: "shiftDown",
                value: function shiftDown() {
                    this.hitedTimes = 30, this.driving = !1;
                }
            }, {
                key: "lerpToTarget",
                value: function lerpToTarget() {
                    if (this.isLerping) {
                        var _t33 = this.owner.transform.position.clone();
                        Laya.Vector3.lerp(this.owner.transform.position, this.targetPos, .1, this.tempPos),
                            this.owner.transform.position = this.tempPos,
                            // console.log(Laya.Vector3.distance(_t33, this.tempPos), this.afterLerp),
                            // Laya.Vector3.distance(_t33, this.tempPos) < .001 && 
                            (
                                this.isLerping = !1,
                                this.afterLerp && (this.afterLerp.run(), this.afterLerp = null));
                    }
                }
            }, {
                key: "startPlay",
                value: function startPlay() {
                    var _this15 = this;
                    var t = this.owner.transform.position.clone(), e = this.playPos.getChildAt(this.playIndex).transform.position.clone();
                    this.needPlay = !1, Laya.Tween.to(t, {
                        x: e.x,
                        y: e.y,
                        z: e.z,
                        update: Laya.Handler.create(this, function () {
                            _this15.owner.transform.position = t;
                        }, null, !1)
                    }, 500, Laya.Ease.strongInOut, Laya.Handler.create(this, function () {
                        if (_this15.playIndex++, _this15.playIndex == _this15.playPos.numChildren) _this15.changeForm("people"),
                            "player" == _this15.type && C.cAnimator.play("outCarJumpToEnd"),
                            console.log(4444444444),
                            _this15.switchStatues(L.IDLE),
                            _this15.zone = 2; else {
                            var _t34 = _this15.playPos.getChildAt(_this15.playIndex);
                            "player" == _this15.type && "overClickPoint" == _t34.name ? (C.cAnimator.play("outCarJumpIdle"), console.log(55555555),
                                C.playView.overClick.startOverClick(), _this15.needPlay = !1) : _this15.needPlay = !0;
                        }
                    }));
                }
            }, {
                key: "onBezierEnd",
                value: function onBezierEnd() {
                    var _this16 = this;
                    if (this.playIndex++, this.playIndex >= this.playPos.numChildren) {
                        if (this.zone = 2, this.gameEnd) {
                            if (this.isFalling) this.refreshAni("onGround"), this.changeForm("win");
                            else if (1 == this.rank) this.refreshAni("win2"), this.changeForm("win");
                            else if (2 == this.rank || 3 == this.rank) this.refreshAni("win2"),
                                this.changeForm("win");
                            else {
                                this.refreshAni("hitedOn"), Laya.SoundManager.playSound("music/boardBump.mp3", 1);
                                var _t35 = this.owner.transform.position.clone();
                                _t35.y += .2, y.createEffect(T.ef_hit, _t35, C.worldDynamic, !0), Laya.timer.once(800, this, function () {
                                    _this16.startFall();
                                });
                            }
                        } else "player" == this.type && (C.cAnimator.play("outCarJumpToRoleIdle"), console.log(666666),
                            Laya.SoundManager.playMusic("soundBgm/match3.mp3", 0)),
                            this.changeForm("people");
                    } else {
                        var _t36 = this.playPos.getChildAt(this.playIndex);
                        "player" == this.type && "overClickPoint" == _t36.name ? (this.refreshAni("powering"),
                            this.ef_role_charging.active = !0, C.cAnimator.play("outCarJumpIdle"), console.log(777777), C.playView.overClick.startOverClick(),
                            this.needPlay = !1) : "player" == this.type && "stagePos" == _t36.name ? (C.cAnimator.play("outCarJumpIdle"), console.log(888888),
                                C.playView.overClick.startOverClick(), this.refreshAni("powering"), this.ef_role_charging.active = !0,
                                this.needPlay = !1) : ("enemy" == this.type && _t36.name, this.needPlay = !0);
                    }
                }
            }, {
                key: "startFall",
                value: function startFall() {
                    this.ef_role_charging && (this.ef_role_charging.active = !1);
                    this.playPos.getChildByName("stagePos").getChildByName("groundPoint");
                    var t = this.playPos.getChildByName("stagePos").getChildByName("groundPoint").transform.position.clone();
                    this.refreshAni("fall"), this.isFalling = !0, this.needPlay = !1, this.bezierMove.start(t);
                }
            }, {
                key: "startPlayBezier",
                value: function startPlayBezier() {
                    var _this17 = this;
                    this.ef_role_charging && (this.ef_role_charging.active = !1);
                    this.owner.transform.position.clone();
                    var t = this.playPos.getChildAt(this.playIndex).transform.position.clone();
                    this.refreshAni("jump"), Laya.timer.frameOnce(10, this, function () {
                        _this17.refreshAni("inSky");
                    }), "stagePos" == this.playPos.getChildAt(this.playIndex).name &&
                        (t = this.playPos.getChildAt(this.playIndex).getChildAt(this.rank - 1).transform.position.clone(),
                            this.gameEnd = !0),
                        this.needPlay = !1, this.bezierMove.start(t);
                }
            }]);
            return b;
        }(Laya.Script3D);
        var B = /* */ function (_b) {
            _inherits2(B, _b);
            var _super18 = _createSuper2(B);
            function B() {
                var _this18;
                _classCallCheck2(this, B);
                _this18 = _super18.apply(this, arguments), _this18.target = null, _this18.itemTarget = null,
                    _this18.dectRange = 10, _this18.aiStatues = "idle", _this18._moveSecond = 0, _this18.attackTimes = 0,
                    _this18.attackTarget = null, _this18.wantAttackCd = 0, _this18.wantAttack = !1,
                    _this18.level = 0, _this18.hitedTimes = 0, _this18.handlePiecesNum = 0, _this18.dir = "",
                    _this18.dirTimes = 0, _this18.nigeruTimes = 0, _this18.startHandle = !1, _this18.dirTimesMin = 5,
                    _this18.dirTimesMax = 30, _this18.changeDirIntervalMin = 30, _this18.changeDirIntervalMax = 120;
                return _this18;
            }
            _createClass2(B, [{
                key: "onEnable",
                value: function onEnable() {
                    _get2(_getPrototypeOf2(B.prototype), "onEnable", this).call(this), this.level = C.level < T.levelLength ? C.level : T.levelLength - 1,
                        this.dectRange = 3, this.updateTimes = 0, this.genHandlePiecesNum(), this.type = "enemy",
                        this.changeDirInterval = y.randRange(this.changeDirIntervalMin, this.changeDirIntervalMax),
                        this.speed = T.comboCfg.AI_speed[this.level], this.addSpeed = T.comboCfg.vehicle_speed[this.level],
                        this.maxSpd = T.comboCfg.vehicle_Maxspeed[this.level], console.log("level", this.level),
                        console.log("speed", this.speed), console.log("addSpeed", this.addSpeed), console.log("maxSpd", this.maxSpd);
                }
            }, {
                key: "makeDecisonToMove",
                value: function makeDecisonToMove() {
                    this._moveSecond = 10;
                    var t = y.randRange(-90, 90);
                    this.getMoveAngleToCenter(t), this.aiStatues = "move", this.switchStatues(L.WALK);
                }
            }, {
                key: "findItem",
                value: function findItem() {
                    var t = this.owner.transform.position.clone();
                    return C.manager.findRandomItem(this.id, t, Number(T.aiNetCfg[this.level].ai_find_item_range), 0, this.colorId, this.zone);
                }
            }, {
                key: "makeDecisonInMove",
                value: function makeDecisonInMove() {
                    if (this.meetSthTurnRound()) return;
                    var t = y.randRange(0, 100), e = this.findItem();
                    e && e.picked && (e = null), e && this.zone != e.zone && (e = null), e && this.colorId != e.colorId && (e = null);
                    if (null != e && e.owner && t < 100) {
                        this.findItem(), this.aiStatues = "collect", this.itemTarget = e;
                        var _t37 = this.owner, _i24 = new Laya.Point();
                        _i24.x = _t37.transform.position.x - this.itemTarget.owner.transform.position.x,
                            _i24.y = _t37.transform.position.z - this.itemTarget.owner.transform.position.z,
                            _i24.normalize(), this.yAngle = y.VectorToAngle(_i24);
                    } else if (this.findTarget(), this.target) return this.updateTimes = 0, this.aiStatues = "attack",
                        void (this.attackTimes = y.randRange(T.aiCfg.ai_minEscapeIn[this.level], T.aiCfg.ai_maxEscapeIn[this.level]));
                }
            }, {
                key: "makeDecison",
                value: function makeDecison() {
                    switch (this.aiStatues) {
                        case "idle":
                            this.makeDecisonToMove();
                            break;

                        case "move":
                            if (this._moveSecond--, this._moveSecond <= 0 && this.makeDecisonToMove(), this.updateTimes % T.aiCfg.ai_detectionInterval == 0) if (this.makeDecisonInMove(),
                                this.itemTarget && !this.itemTarget.picked && this.zone == this.itemTarget.zone && this.colorId == this.itemTarget.colorId); else if (this.findTarget(),
                                    this.target) return this.updateTimes = 0, this.aiStatues = "attack", void (this.attackTimes = y.randRange(T.aiCfg.ai_minEscapeIn[this.level], T.aiCfg.ai_maxEscapeIn[this.level]));
                            this.meetSthTurnRound(), this.switchStatues(L.WALK);
                            break;

                        case "collect":
                            if (this.meetSthTurnRound()) return void ("attack" != this.fsm._statues && this.goNigeru());
                            if (this.checkItemValid()) {
                                var _t38 = this.owner, _e24 = new Laya.Point();
                                _e24.x = _t38.transform.position.x - this.itemTarget.owner.transform.position.x,
                                    _e24.y = _t38.transform.position.z - this.itemTarget.owner.transform.position.z,
                                    _e24.normalize(), this.yAngle = y.VectorToAngle(_e24);
                            } else this.aiStatues = "idle";
                            break;

                        case "attack":
                            this.checkAiNigeru() && this.goNigeru(), this.checkTargetValid() || (this.aiStatues = "idle");
                            break;

                        case "nigeruAttack":
                            this._moveSecond--, this.nigeruTimes++, this._moveSecond <= 0 && (this.aiStatues = "idle"),
                                this.meetSthTurnRound(), this.meetSthAttack();
                            break;

                        case "nigeru":
                            this._moveSecond--, this._moveSecond <= 0 && (this.aiStatues = "idle"), this.meetSthTurnRound();
                    }
                }
            }, {
                key: "meetSthAttack",
                value: function meetSthAttack() {
                    if (this.nigeruTimes < 60) return;
                    var t = this.owner.transform.position.clone(), e = H.inst.checkCharactorCollisionWithChar(this.id, t, this.radius, 0);
                    if (e) {
                        if (this.turnToTarget(e), "enemy" == e.type) this.enemyAttack(); else {
                            Math.ceil(100 * Math.random()) <= Number(T.aiNetCfg[this.level].ai_attack_player_Rate) && this.enemyAttack();
                        }
                        this.goNigeru();
                    } else this.switchStatues(L.WALK), this.attackTarget = null;
                }
            }, {
                key: "meetSthTurnRound",
                value: function meetSthTurnRound() {
                    var t = !1;
                    if (this.isMeetEdge) {
                        if (this.isMeetWall) if (this.isMeetCollision) {
                            var _t39 = 0, _e25 = new Laya.Vector3();
                            this.owner.transform.getForward(_e25), _e25.y = 0, _e25.x = -_e25.x, _e25.z = -_e25.z,
                                this.yAngle = y.VectorToAngle(new Laya.Point(_e25.x, _e25.z)) + _t39;
                        } else {
                            var _t40 = y.randRange(-30, 30);
                            this.getMoveAngleToCenter(_t40);
                        }
                        this.isMeetChar && (this.target = this.meetingChar, this.updateTimes = 0, this.turnToTarget(this.target),
                            this.aiStatues = "attack", this.attackTimes = y.randRange(T.aiCfg.ai_minEscapeIn[this.level], T.aiCfg.ai_maxEscapeIn[this.level])),
                            t = !0;
                    }
                    return t;
                }
            }, {
                key: "getMoveAngleToCenter",
                value: function getMoveAngleToCenter() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                    var e = this.owner, i = new Laya.Point();
                    i.x = e.transform.position.x, i.y = e.transform.position.z, i.normalize();
                    var s = y.VectorToAngle(i) + t;
                    this.yAngle = s;
                }
            }, {
                key: "checkItemValid",
                value: function checkItemValid() {
                    return null != this.itemTarget.owner && !this.itemTarget.picked && this.itemTarget.colorId == this.colorId && this.zone == this.itemTarget.zone;
                }
            }, {
                key: "tick",
                value: function tick(t) {
                    C.battleState == a.RUNNING && (this.isLerping || (this.makeDecison(), this.tickDecison(),
                        this.fsm._to != L.HITED && this.fsm._to != L.HITED_DOWN && this.fsm._to != L.HITED_DOWNUp && this.fsm._to != L.HITED_STRIGHT && this.fsm._to != L.HITED_STRIGHTEND && this.fsm._to != L.HITED_STRIGHTING && this.fsm._from != L.HITED_STRIGHTING && this.yAngle && (this.owner.transform.rotationEuler = new Laya.Vector3(0, this.yAngle, 0))));
                }
            }, {
                key: "tickDecison",
                value: function tickDecison() {
                    switch (this.aiStatues) {
                        case "idle":
                            break;

                        case "move":
                            this.switchStatues(L.WALK);
                            break;

                        case "attack":
                            if (this.attackTimes--, this.attackTimes < 0) break;
                            this.target && this.turnToTarget(this.target), this.checkAiAttack2();
                            break;

                        case "collect":
                        case "nigeru":
                        case "nigeruAttack":
                            this.switchStatues(L.WALK);
                    }
                }
            }, {
                key: "checkTargetValid",
                value: function checkTargetValid() {
                    if (!this.target) return !1;
                    if (this.target.deadFlag) return !1;
                    var t = this.owner.transform.position.clone();
                    t.y = 0;
                    var e = this.target.owner.transform.position.clone();
                    return e.y = 0, Laya.Vector3.distance(t, e) <= this.dectRange;
                }
            }, {
                key: "checkAttackInDistance",
                value: function checkAttackInDistance(t, e, i, s, r) {
                    return Laya.Vector3.distance(t, e) <= i + s + r;
                }
            }, {
                key: "checkAiAttack2",
                value: function checkAiAttack2() {
                    var t = this.owner.transform.position.clone();
                    if (this.checkTargetValid()) {
                        if (this.attTarget) {
                            if (this.attTarget.deadFlag) return this.attTarget = null, void (this.aiStatues = "move");
                            if (!this.wantAttack) return;
                            if (this.wantAttackCd--, this.wantAttackCd > 0) return void this.switchStatues(L.IDLE);
                            t.y = 0;
                            var _e26 = this.attTarget.owner.transform.position.clone();
                            if (_e26.y = 0, this.checkAttackInDistance(t, _e26, this.radius, this.attTarget.radius, 0)) {
                                if (this.turnToTarget(this.attTarget), "enemy" == this.attTarget.type) this.enemyAttack(); else {
                                    Math.ceil(100 * Math.random()) <= Number(T.aiNetCfg[this.level].ai_attack_player_Rate) && this.enemyAttack();
                                }
                                this.goNigeru();
                            } else {
                                var _e27 = H.inst.checkCharactorCollisionWithChar(this.id, t, this.radius, 0);
                                if (_e27) {
                                    if (this.turnToTarget(_e27), "enemy" == _e27.type) this.enemyAttack(); else {
                                        Math.ceil(100 * Math.random()) <= Number(T.aiNetCfg[this.level].ai_attack_player_Rate) && this.enemyAttack();
                                    }
                                    this.goNigeru();
                                } else this.switchStatues(L.WALK), this.attackTarget = null;
                            }
                        } else {
                            var _e28 = H.inst.checkCharactorCollisionWithChar(this.id, t, this.radius);
                            _e28 ? (this.attTarget = _e28, this.wantAttack = !0, this.wantAttackCd = y.randRange(T.aiCfg.ai_minAtk[this.level], T.aiCfg.ai_maxAtk[this.level])) : this.switchStatues(L.WALK);
                        }
                    } else this.aiStatues = "move";
                }
            }, {
                key: "setHitedTimes",
                value: function setHitedTimes() {
                    this.hitedTimes = y.randRange(T.aiCfg.ai_hitEscape_min[this.level], T.aiCfg.ai_hitEscape_max[this.level]);
                }
            }, {
                key: "goNigeruAttack",
                value: function goNigeruAttack() {
                    this.aiStatues = "nigeruAttack", this.nigeruTimes = 0, this.setHitedTimes();
                    var t = y.randRange(0, 180);
                    this.yAngle = t
                        , this._moveSecond = y.randRange(Number(T.aiNetCfg[this.level].ai_minEscapeAttack), Number(T.aiNetCfg[this.level].ai_maxEscapeAttack));
                }
            }, {
                key: "checkAiNigeru",
                value: function checkAiNigeru() {
                    return this.hitedTimes <= 0 || this.attackTimes < 0;
                }
            }, {
                key: "goNigeru",
                value: function goNigeru() {
                    if (100 * Math.random() <= Number(T.aiNetCfg[this.level].ai_nigeruAttackRate)) return void this.goNigeruAttack();
                    this.aiStatues = "nigeru", this.setHitedTimes();
                    var t = y.randRange(0, 180);
                    this.yAngle = t, this._moveSecond = y.randRange(T.aiCfg.ai_minEscape[this.level], T.aiCfg.ai_maxEscape[this.level]);
                }
            }, {
                key: "enemyAttack",
                value: function enemyAttack() { }
            }, {
                key: "turnToTarget",
                value: function turnToTarget(t) {
                    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
                    if (t.deadFlag) return;
                    var i = this.owner, s = new Laya.Point();
                    s.x = i.transform.position.x - t.owner.transform.position.x, s.y = i.transform.position.z - t.owner.transform.position.z,
                        s.normalize(), this.yAngle = y.VectorToAngle(s), e && (this.owner.transform.rotationEuler = new Laya.Vector3(0, this.yAngle, 0));
                }
            }, {
                key: "findTarget",
                value: function findTarget() {
                    if (this.checkTargetValid()) return;
                    var t = this.owner.transform.position.clone(), e = this.dectRange;
                    this.target = H.inst.findTarget(this.id, t, e, 0, this.headItems.length);
                }
            }, {
                key: "onUpdate",
                value: function onUpdate() {
                    var t = .001 * 16;
                    if (this.fsm._statues != L.getCombineKey(L.DEAD) && C.battleState == a.RUNNING) if ("people" == this.form) {
                        if (this.checkHandlePieces() || this.startHandle) {
                            if (this.startHandle = !0, 1 == this.zone ? this.turnToHandle(this.collectToTarget, !0) : this.turnToHandle(this.collectToTarget2, !0),
                                this.fsm._statues != L.getCombineKey(L.HITED)) {
                                var _e29;
                                _e29 = 1 == this.zone ? this.collectToTarget : this.collectToTarget2, Laya.Vector3.distance(this.owner.transform.position, _e29.transform.position) < .05 ?
                                    this.headItems.length <= 0 && (this.startHandle = !1) : (this.switchStatues(L.WALK),
                                        this.move(t, !1));
                            }
                        } else this.tick(t), this.fsm._statues != L.getCombineKey(L.HITED) && this.move(t, !1);
                        _get2(_getPrototypeOf2(B.prototype), "onUpdate", this).call(this);
                    } else "car" == this.form ? (_get2(_getPrototypeOf2(B.prototype), "onUpdate", this).call(this),
                        this.drive(), this.updateChangeDirInterval()) :
                        "ship" == this.form ? (_get2(_getPrototypeOf2(B.prototype), "onUpdate", this).call(this),
                            this.drive(), this.updateChangeDirInterval()) :
                            "playing" == this.form ? (this.needPlay && this.startPlayBezier(),
                                this.bezierMove.onUpdate()) : "win" == this.form && this.rank <= 3 && (this["trophy_" + this.rank].active = !0);
                }
            }, {
                key: "drive",
                value: function drive() {//船
                    var t = this.carSpd, e = .001 * 16;
                    this.driving ? (t -= this.addSpeed * e, t = y.clamp(t, -this.maxSpd, 0)) : t > 0 ? (t -= this.normalSpdDecrease * e,
                        t = Math.max(t, 0)) : t < 0 && (t += this.normalSpdDecrease * e, t = Math.min(t, 0)),
                        this.carSpd = t, this.changeRotation(e);
                    var i = new Laya.Vector3();
                    this.owner.transform.getForward(i);
                    var s = y.Vector3_Multiply(i, this.carSpd * e), r = new Laya.Vector3();
                    this.owner.transform.getRight(r);
                    "left" == this.dir ? (r = y.Vector3_Multiply(r, 1), this.targetRotY = 30) : "right" == this.dir ? (r = y.Vector3_Multiply(r, -1),
                        this.targetRotY = -30) : (r = y.Vector3_Multiply(r, 0), this.targetRotY = 0), this.checkDriveWall(r, 3, e) && (this.dir = "",
                            r = y.Vector3_Multiply(r, 0)), this.checkMeetSth(), this.dirTimes > 0 && this.dirTimes--,
                        this.changeRot();
                    var a = y.Vector3_Multiply(r, 3 * e), n = y.Vector3_Add(s, a);
                    if (this.needMulSpeed) n.z = n.z / 2;
                    this.owner.transform.translate(n);
                }
            }, {
                key: "changeDir",
                value: function changeDir() {
                    var t = y.randRange(0, 3);
                    0 == t ? this.dir = "" : 1 == t ? this.dir = "left" : 2 == t && (this.dir = "right"),
                        this.dirTimes = y.randRange(this.dirTimesMin, this.dirTimesMax);
                }
            }, {
                key: "updateChangeDirInterval",
                value: function updateChangeDirInterval() {
                    this.changeDirInterval--, 0 == this.changeDirInterval && (this.changeDir(), this.changeDirInterval = y.randRange(this.changeDirIntervalMin, this.changeDirIntervalMax));
                }
            }, {
                key: "genHandlePiecesNum",
                value: function genHandlePiecesNum() {
                    this.handlePiecesNum = y.randRange(this.maxItem / 2, this.maxItem), console.log("需要", this.handlePiecesNum);
                }
            }, {
                key: "checkHandlePieces",
                value: function checkHandlePieces() {
                    return this.headItems.length >= this.handlePiecesNum;
                }
            }]);
            return B;
        }(b);
        var z = /* */ function (_Laya$Script3D7) {
            _inherits2(z, _Laya$Script3D7);
            var _super19 = _createSuper2(z);
            function z() {
                var _this19;
                _classCallCheck2(this, z);
                _this19 = _super19.apply(this, arguments), _this19.rotateEulerAngle = new Laya.Vector3(0, .1, 0),
                    _this19.rotateEulerAngle2 = new Laya.Vector3(0, 2, 0), _this19.pickCharacter = null,
                    _this19.radius = .2, _this19.picked = !1, _this19.destroying = !1;
                return _this19;
            }
            _createClass2(z, [{
                key: "onUpdate",
                value: function onUpdate() {
                    if (this.destroying) {
                        var _t41 = new Laya.Vector3();
                        this.owner.transform.rotate(this.rotateEulerAngle2), Laya.Vector3.lerp(this.owner.transform.position, this.targetPos, .1, _t41),
                            this.owner.transform.position = _t41, Laya.Vector3.distance(this.owner.transform.position, this.targetPos) < .01 && this.dispose();
                    } else this.owner.transform.rotate(this.rotateEulerAngle), this.checkPick();
                }
            }, {
                key: "onAwake",
                value: function onAwake() {
                    this.destroying = !1, this.getAni = this.owner.getChildAt(0), this.getAni.active = !1;
                }
            }, {
                key: "checkPick",
                value: function checkPick() {
                    if (this.pickCharacter) return;
                    var t = this.owner.transform.position.clone(), e = H.inst.findTargetGold(-1, t, this.radius, 0, this);
                    e && (this.pickCharacter = e, this.picked = !0, this.targetPos = this.owner.transform.position.clone(),
                        this.targetPos.y += 1, this.destroying = !0, this.getAni.active = !0, "player" == e.type && Laya.SoundManager.playSound("music/gold.mp3", 1));
                }
            }, {
                key: "dispose",
                value: function dispose() {
                    this.owner.removeSelf(), this.destroy(), p.recoverToPool(this.owner);
                }
            }]);
            return z;
        }(Laya.Script3D);
        var U = /* */ function (_Laya$Script3D8) {
            _inherits2(U, _Laya$Script3D8);
            var _super20 = _createSuper2(U);
            function U() {
                var _this20;
                _classCallCheck2(this, U);
                _this20 = _super20.apply(this, arguments), _this20.rotateEulerAngle = new Laya.Vector3(2, 2, 2),
                    _this20.pickCharacter = null, _this20.cube = null, _this20.radius = .13, _this20.targetScale = 0,
                    _this20.leftTimes = 300, _this20.colorId = 0, _this20.isReProducing = !1, _this20.index = 0,
                    _this20.zone = 1, _this20.updateTimes = 0, _this20.picked = !1;
                return _this20;
            }
            _createClass2(U, [{
                key: "onAwake",
                value: function onAwake() {
                    _get2(_getPrototypeOf2(U.prototype), "onAwake", this).call(this), this.pickCharacter = null,
                        this.animator = this.owner.getChildByName("itemNode").getComponent(Laya.Animator),
                        this.meshNode = this.owner.getChildByName("itemNode"), this.owner.transform.setWorldLossyScale(new Laya.Vector3(.6, .6, .6)),
                        this.tutor = this.owner.getChildByName("ef_yindao_1"), this.tutor.active = !1, this.updateTimes = 0;
                    for (var _t42 = 0; _t42 < this.meshNode.numChildren; _t42++) {
                        var _e30 = this.meshNode.getChildAt(_t42);
                        _e30 instanceof Laya.MeshSprite3D && (_e30.meshRenderer.castShadow = !0);
                    }
                }
            }, {
                key: "init",
                value: function init(t, e, i) {
                    this.colorId = t, this.index = e, this.zone = i, this.setColor();
                }
            }, {
                key: "setColor",
                value: function setColor() {
                    var t = this.owner.getChildByName("itemNode");
                    for (var _e31 = 0; _e31 < t.numChildren; _e31++) {
                        var _i25 = t.getChildAt(_e31);
                        _e31 != this.colorId ? _i25.active = !1 : _i25.active = !0;
                    }
                }
            }, {
                key: "setMeshNode",
                value: function setMeshNode(t) {
                    this.meshNode.active = t;
                }
            }, {
                key: "onEnable",
                value: function onEnable() {
                    this.icon && this.icon.removeSelf();
                }
            }, {
                key: "setTutorActive",
                value: function setTutorActive(t) {
                    this.tutor.active = t;
                }
            }, {
                key: "onUpdate",
                value: function onUpdate() {
                    if (null == this.owner) return void this.dispose();
                    16;
                    this.checkPick(), this.updateTimes % 180 == 0 && 0 == this.colorId && this.zone == C.player.zone && y.getAnimPlayingTime(this.animator) >= 1 && this.animator.play("brickIdle", 0, 0),
                        this.updateTimes++;
                }
            }, {
                key: "checkPick",
                value: function checkPick() {
                    if (this.pickCharacter) return;
                    var t = this.owner.transform.position.clone(), e = H.inst.findTarget2(-1, t, this.radius, 0, this);
                    if (e) {
                        this.pickCharacter = e;
                        var _t43 = this.owner.getChildByName("itemNode").getChildAt(this.colorId);
                        e.addItem(_t43), this.picked = !0, this.pick();
                    }
                }
            }, {
                key: "refreshColor",
                value: function refreshColor(t) {
                    this.picked = !1, this.pickCharacter = null, this.colorId = t, this.setColor(),
                        this.animator.play("brickGenerate", 0, 0);
                }
            }, {
                key: "pick",
                value: function pick() {
                    for (var _t44 = 0; _t44 < 4; _t44++) {
                        this.owner.getChildByName("itemNode").getChildAt(_t44).active = !1;
                    }
                    1 == this.zone ? C.produceColor.push(this.colorId) : C.produceColor2.push(this.colorId),
                        -1 != this.index && (1 == this.zone ? C.produceItemIndex.push(this.index) : C.produceItemIndex2.push(this.index))//,
                    this.tutor.active && (this.setTutorActive(!1)
                        , C.manager.setNearstItemTutor()
                    );
                }
            }, {
                key: "checkCanGet",
                value: function checkCanGet(t) {
                    return t.colorId == this.colorId;
                }
            }, {
                key: "setOutSide",
                value: function setOutSide() { }
            }, {
                key: "dispose",
                value: function dispose() {
                    this.owner.removeSelf(), this.destroy(), p.recoverToPool(this.owner);
                }
            }]);
            return U;
        }(Laya.Script3D);
        var V = /* */ function (_b2) {
            _inherits2(V, _b2);
            var _super21 = _createSuper2(V);
            function V() {
                var _this21;
                _classCallCheck2(this, V);
                _this21 = _super21.apply(this, arguments), _this21.attackCd = 0, _this21.onlySoundStopped = !1,
                    _this21.carBodyAngleYZ = 0, _this21.carBodyAngle = 0, _this21.curDriveAni = "",
                    _this21.showTutor = !1;
                return _this21;
            }
            _createClass2(V, [{
                key: "onUpdate",
                value: function onUpdate() {
                    if (this.deadFlag) return;
                    if (C.battleState != a.RUNNING) return;
                    if (_get2(_getPrototypeOf2(V.prototype), "onUpdate", this).call(this), this.isLerping) return;
                    var t = .001 * 16;
                    "people" == this.form ? this.walk(t) :
                        "car" == this.form ? this.drive() :
                            "ship" == this.form ? this.drive() :
                                "playing" == this.form ? (this.needPlay && this.startPlayBezier()
                                    , this.bezierMove.onUpdate()) :
                                    "win" == this.form && (this.rank <= 3 && (this["trophy_" + this.rank].active = !0), C.manager.startLeftFly()),
                        H.inst.onLateUpdate();
                }
            }, {
                key: "init",
                value: function init(t) {
                    _get2(_getPrototypeOf2(V.prototype), "init", this).call(this, t), this.addKeyEvent(),
                        this.type = "player", this.ef_role_charging = this.roleNode.getChildByName("ef_role_charging"),
                        this.ef_role_charging.active = !1, this.setSkin();
                }
            }, {
                key: "setSkin",
                value: function setSkin() { }
            }, {
                key: "addKeyEvent",
                value: function addKeyEvent() {
                    var _this22 = this;
                    Laya.stage.on(Laya.Event.KEY_UP, this, function (t) {
                        "w" == t.nativeEvent.key ? _this22.onHited(null) : "a" == t.nativeEvent.key || "d" == t.nativeEvent.key || "s" == t.nativeEvent.key || t.nativeEvent.key;
                    });
                }
            }, {
                key: "onAttack",
                value: function onAttack() {
                    this.attackCd > 0 || this.switchStatues(L.ATTACK_1);
                }
            }, {
                key: "win",
                value: function win() { }
            }, {
                key: "changeForm",
                value: function changeForm(t) {
                    if (t != this.form) if (this.form = t, "people" == t) {
                        this.car.active = !1, this.shipNode.active = !1, this.refreshAni("idle"), this.switchStatues(L.IDLE),
                            this.playMposAni("posIntoCarIdleNear"), this.roleNode.getChildByName("ef_hangover_1-2").active = !0;
                    } else if ("car" == t) {
                        this.car.active = !0, this.shipNode.active = !1, C.cAnimator.play("intoCar"), console.log(9999999),
                            Laya.SoundManager.playMusic("soundBgm/match2.mp3", 0),
                            this.roleNode.getChildByName("ef_hangover_1-2").active = !1;
                    } else if ("playing" == t) {
                        this.car.active = !1, this.shipNode.active = !1, C.cAnimator.play("outCarJump"), console.log(10101010101010101010),
                            this.playMposAni("posIntoCarIdleNear"), this.roleNode.getChildByName("ef_hangover_1-2").active = !0;
                    } else if ("ship" == t) {
                        this.car.active = !1, this.shipNode.active = !0, C.cAnimator.play("intoCar"), console.log(1212121212121212), this.roleNode.getChildByName("ef_hangover_1-2").active = !1,
                            Laya.SoundManager.playMusic("soundBgm/match4.mp3", 0);
                    } else "win" == t && (this.car.active = !1, this.shipNode.active = !1);
                }
            }, {
                key: "onDead",
                value: function onDead() { }
            }, {
                key: "onLateUpdate",
                value: function onLateUpdate() { }
            }, {
                key: "driveStart",
                value: function driveStart(t) {
                    _get2(_getPrototypeOf2(V.prototype), "driveStart", this).call(this, t);
                }
            }, {
                key: "addItem",
                value: function addItem(t) {
                    _get2(_getPrototypeOf2(V.prototype), "addItem", this).call(this, t), this.headItems.length >= 10 && !this.showTutor && (this.showTutor = !0,
                        Laya.stage.event(C.evt_checkResult));
                }
            }, {
                key: "changeCarBodyAngleYz",
                value: function changeCarBodyAngleYz() {
                    0 != this.speed ? this.leftPressed ? this.carBodyAngleYZ = 5 : this.rightPressed ? this.carBodyAngleYZ = -5 : this.carBodyAngleYZ = 0 : this.carBodyAngleYZ = 0;
                }
            }, {
                key: "updateBodyAngle",
                value: function updateBodyAngle() {
                    var t = this.shipNode.transform.localRotationEuler.x, e = y.lerp(t, this.carBodyAngle, .05), i = this.shipNode.transform.localRotationEuler.z, s = y.lerp(i, this.carBodyAngleYZ, .3);
                    this.shipNode.transform.localRotationEuler = new Laya.Vector3(e, 180, s);
                }
            }, {
                key: "drive",
                value: function drive() {//车
                    var t, e = -this.maxSpd;
                    e -= .01667 * this.addSpeed, t = 0 == (e = y.clamp(e, -this.maxSpd, 0)) ? "posIntoCarIdleNear" : "posIntoCarIdleFar",
                        this.carSpd = e, this.changeRotation(.01667);
                    var i = new Laya.Vector3();
                    this.owner.transform.getForward(i);
                    var s = y.Vector3_Multiply(i, .01667 * this.carSpd), r = new Laya.Vector3();
                    this.owner.transform.getRight(r), Laya.Vector3.normalize(r, r);
                    "left" == v.inst.dir ? (r = y.Vector3_Multiply(r, 1), this.leftPressed = !0, this.rightPressed = !1) :
                        "right" == v.inst.dir ? (r = y.Vector3_Multiply(r, -1), this.leftPressed = !1, this.rightPressed = !0) :
                            (r = y.Vector3_Multiply(r, 0), this.targetRotY = 0, this.leftPressed = !1, this.rightPressed = !1),
                        this.checkDriveWall(r, 2.8, .01667) && (r = y.Vector3_Multiply(r, 0)), this.checkMeetSth(), this.changeRot();
                    var a = y.Vector3_Multiply(r, .046676), n = (y.Vector3_Add(s, a), y.Vector3_Add(s, a));
                    if (this.needMulSpeed) n.z = n.z / 2;
                    this.owner.transform.position = y.Vector3_Add(this.owner.transform.position, n),
                        this.playMposAni(t), this.changeCarBodyAngleYz(), this.updateBodyAngle();
                }
            }, {
                key: "playMposAni",
                value: function playMposAni(t) {
                    t != this.curDriveAni && (this.curDriveAni = t, "posIntoCarIdleFar" == t ? this.shipAni.play("move") : this.shipAni.play("idle"),
                        C.mPosAnimator && C.mPosAnimator.play(t, 0, 0));
                }
            }, {
                key: "walk",
                value: function walk(t) {
                    var e = !0;
                    if (this.rocker && -1 != this.rocker.angle) {
                        if (this.fsm._statues != L.getCombineKey(L.HITED)) return this.owner.transform.localRotationEulerY = this.rocker.angle + 180,
                            e = this.move(t, !1), void this.switchStatues(L.WALK);
                        this.switchStatues(L.WALK);
                    } else this.switchStatues(L.IDLE);
                }
            }]);
            return V;
        }(b);
        var F = /* */ function (_E) {
            _inherits2(F, _E);
            var _super22 = _createSuper2(F);
            function F() {
                _classCallCheck2(this, F);
                return _super22.apply(this, arguments);
            }
            _createClass2(F, [{
                key: "onAwake",
                value: function onAwake() {
                    this.type = "ship", this.color = Number(this.owner.name.split("_")[1]), this.carSp = this.owner.getChildAt(0),
                        this.aniSp = this.carSp.getChildAt(this.carSp.numChildren - 1), this.aniSp.active = !1,
                        this.partList = [];
                    var t = 0;
                    t = "brickShip_01_b" == this.carSp.name ? 10 : 4;
                    for (var _e32 = 1; _e32 < t; _e32++) {
                        var _t45 = this.carSp.getChildAt(_e32);
                        _t45.active = !1, this.partList.push(_t45);
                    }
                }
            }, {
                key: "repair",
                value: function repair() {
                    this.hp += 1, this.hp = y.clamp(this.hp, 0, this.maxHp);
                    var t = Math.ceil(this.maxHp / this.partList.length);
                    t = Math.ceil(this.hp / t);
                    for (var _e33 = 0; _e33 < t; _e33++) {
                        if (_e33 >= this.partList.length) continue;
                        var _t46 = this.partList[_e33];
                        _t46.active || (_t46.active = !0);
                    }
                    return this.hp >= this.maxHp || (this.playAni(), !1);
                }
            }]);
            return F;
        }(E);
        var H = /* */ function () {
            function H() {
                _classCallCheck2(this, H);
                this.carMode = !0, this.updateTimes = 0, this.goldArr = [], this.trapItems = [],
                    this.startFly = !1;
            }
            _createClass2(H, [{
                key: "init",
                value: function init(t) {
                    return __awaiter(this, void 0, void 0, /* */ _regenerator.default.mark(function _callee9() {
                        return _regenerator.default.wrap(function _callee9$(_context9) {
                            while (1) {
                                switch (_context9.prev = _context9.next) {
                                    case 0:
                                        this.worldScene = t, C.scene = this.worldScene, this.lastHitSp = null, C.nextHitObj = null,
                                            H.inst.worldStatic = this.worldScene.getChildByName(H.staticNode), H.inst.worldDynamic = this.worldScene.getChildByName(H.dynamnicNode),
                                            C.worldDynamic = H.inst.worldDynamic, this.characters = [], this.dropItems = [],
                                            C.produceColor = [], C.produceItemIndex = [], C.produceColor2 = [], C.produceItemIndex2 = [],
                                            C.winArr = [], this.updateTimes = 0, this.startFly = !1, this.initCamera(), this.initLight()
                                            , this.initEvent(), this.initItem(), this.initEnemy(), this.initCarNode(), this.initShipNode(),
                                            this.initWall(), this.initFianlPos(), this.initBarrier(),// this.setNearstItemTutor(),
                                            this.initGold();

                                    case 1:
                                    case "end":
                                        return _context9.stop();
                                }
                            }
                        }, _callee9, this);
                    }));
                }
            }, {
                key: "initShipNode",
                value: function initShipNode() {
                    this.shipNodeArr = [];
                    var t = this.worldScene.getChildByName("shipNode");
                    for (var _e34 = 0; _e34 < t.numChildren; _e34++) {
                        var _i26 = t.getChildAt(_e34);
                        var _s12 = _i26.addComponent(F);
                        _e34 < this.characters.length && (this.characters[_e34].collectToTarget2 = _i26.getChildByName("movePoint")),
                            this.shipNodeArr.push(_s12);
                    }
                    C.carViewPoint = this.worldScene.getChildByName("carViewPoint");
                }
            }, {
                key: "initBarrier",
                value: function initBarrier() {
                    this.trapItems = [];
                    var t = this.worldScene.getChildByName("barrier");
                    for (var _e35 = 0; _e35 < t.numChildren; _e35++) {
                        var _i27 = void 0, _s13 = void 0, _r6 = t.getChildAt(_e35).transform.position.clone();
                        _r6.x = 1.5 * Math.random() - .75, y.roll100(50) ? (_i27 = "barrier_1", _s13 = "mod__barrier_01_anim") : (_i27 = "barrier_2",
                            _s13 = "mod__barrier_02_anim");
                        var _a4 = p.createSpriteToScene(_i27, this.worldDynamic, _r6).addComponent(O);
                        _a4.init(_s13), this.trapItems.push(_a4);
                    }
                }
            }, {
                key: "initGold",
                value: function initGold() {
                    this.goldArr = [];
                    // var t = this.worldScene.getChildByName("barrier");
                    // for (var _e36 = 0; _e36 < t.numChildren; _e36++) {
                    //     var _i28 = t.getChildAt(_e36).transform.position.clone(), _s14 = this.trapItems[_e36].owner.transform.position.clone();
                    //     _i28.x = -_s14.x, Math.abs(_i28.x) < .2 && (_i28.x > 0 ? _i28.x += .2 : _i28.x -= .2);
                    //     var _r7 = _i28.clone();
                    //     for (var _t47 = 0; _t47 < 3; _t47++) {
                    //         _r7.z += .3 * _t47;
                    // var _e37 = p.createSpriteToScene("gold", this.worldDynamic, _r7).addComponent(z);
                    // this.goldArr.push(_e37);
                    // }
                    // }
                }
            }, {
                key: "initFianlPos",
                value: function initFianlPos() {
                    this.finalPos = this.worldScene.getChildByName("FinalPos");
                    var t = this.finalPos.getComponent(Laya.PhysicsCollider);
                    t.collisionGroup = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER1;
                    var e = this.worldScene.getChildByName("semiPos");
                    C.semiPos = e, (t = e.getComponent(Laya.PhysicsCollider)).collisionGroup = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER1;
                }
            }, {
                key: "startLeftFly",
                value: function startLeftFly() {
                    var _this23 = this;
                    if (this.startFly) return;
                    this.startFly = !0;
                    var t = 1;
                    var _loop = function _loop(_e38) {
                        "win" != _this23.characters[_e38].form && (setTimeout(function () {
                            _this23.characters[_e38].startFinalFly();
                        }, 300 * t), t++);
                    };
                    for (var _e38 = this.characters.length - 1; _e38 >= 0; _e38--) {
                        _loop(_e38);
                    }
                }
            }, {
                key: "initWall",
                value: function initWall() {
                    C._leftWall = this.worldScene.getChildByName("zone1").getChildByName("leftWall"),
                        C._rightWall = this.worldScene.getChildByName("zone1").getChildByName("rightWall"),
                        C._upWall = this.worldScene.getChildByName("zone1").getChildByName("upWall"), C._downWall = this.worldScene.getChildByName("zone1").getChildByName("downWall"),
                        C._leftWall2 = this.worldScene.getChildByName("zone2").getChildByName("leftWall"),
                        C._rightWall2 = this.worldScene.getChildByName("zone2").getChildByName("rightWall"),
                        C._upWall2 = this.worldScene.getChildByName("zone2").getChildByName("upWall"), C._downWall2 = this.worldScene.getChildByName("zone2").getChildByName("downWall");
                }
            }, {
                key: "initCarNode",
                value: function initCarNode() {
                    this.carNodeArr = [];
                    var t = this.worldScene.getChildByName("carNode");
                    for (var _e39 = 0; _e39 < t.numChildren; _e39++) {
                        var _i29 = t.getChildAt(_e39);
                        var _s15 = _i29.addComponent(E);
                        if (_e39 < this.characters.length && (this.characters[_e39].collectToTarget = _i29.getChildByName("movePoint")),
                            0 == _e39) {
                            _i29.getChildByName("ef_yindao_2");
                            _i29.getChildByName("ef_yindao_2").getChildAt(0).getChildByName("ef_zz").active = !1,
                                _i29.getChildByName("ef_yindao_2").getChildAt(0).getChildByName("ef_jt").active = !1;
                        }
                        this.carNodeArr.push(_s15);
                    }
                    C.carViewPoint = this.worldScene.getChildByName("carViewPoint");
                }
            }, {
                key: "initEnemy",
                value: function initEnemy() {
                    var t = this.worldScene.getChildByName("characterPos");
                    for (var _e40 = 1; _e40 < t.numChildren; _e40++) {
                        var _i30 = t.getChildAt(_e40);
                        var _s16 = p.createSpriteToScene("Enemy_" + _e40, this.worldDynamic, _i30.transform.position).addComponent(B);
                        _s16.init(_e40), this.characters.push(_s16);
                    }
                }
            }, {
                key: "itemProduce",
                value: function itemProduce(t, e, i, s, r) {
                    var a = p.createSpriteToScene("item", e, i.clone()).addComponent(U);
                    a.init(t, s, r), this.items.push(a);
                }
            }, {
                key: "itemProduce3",
                value: function itemProduce3(t, e, i, s, r) {
                    var a = p.createSpriteToScene("item", e, i.clone()).addComponent(U);
                    a.init(t, s, r), this.items2.push(a);
                }
            }, {
                key: "itemProduce2",
                value: function itemProduce2(t, e, i, s, r) {
                    var a = p.createSpriteToScene("item", this.worldDynamic, i.clone()).addComponent(U);
                    a.init(t, -1, -1), this.dropItems.push(a);
                }
            }, {
                key: "setNearstItemTutor",
                value: function setNearstItemTutor() {
                    if (Laya.LocalStorage.getJSON("Car-Craft-Race-Level")
                        && Laya.LocalStorage.getJSON("Car-Craft-Race-Level") >= 1) {
                        return;
                    }
                    var t, e = 100;
                    for (var _i31 = 0; _i31 < this.items.length; _i31++) {
                        var _s17 = this.items[_i31];
                        if (this.player.colorId != _s17.colorId) continue;
                        if (_s17.picked) continue;
                        var _r8 = this.player.owner.transform.position.clone();
                        _r8.y = 0;
                        var _a5 = _s17.owner.transform.position.clone();
                        _a5.y = 0;
                        var _n3 = Laya.Vector3.distance(_r8, _a5);
                        _n3 < e && (t = _s17, e = _n3);
                    }
                    t && t.setTutorActive(!0);
                }
            }, {
                key: "initItem",
                value: function initItem() {
                    this.items = [];
                    var t = [0, 1, 2, 3];
                    t = t.sort(function () {
                        return .5 - Math.random();
                    });
                    var e = this.worldScene.getChildByName("itemStart").transform.position.clone(), i = e.x, s = 0, r = 0;
                    for (var _a6 = 0; _a6 < 9; _a6++) {
                        e.x = i;
                        for (var _i32 = 0; _i32 < 9; _i32++) {
                            s >= t.length && (s = 0, t = t.sort(function () {
                                return .5 - Math.random();
                            }));
                            var _i33 = t[s];
                            this.itemProduce(_i33, this.worldDynamic, e, r, 1), s++, r++, e.x += .2;
                        }
                        e.z += .2;
                    }
                    this.initItem2();
                }
            }, {
                key: "initItem2",
                value: function initItem2() {
                    this.items2 = [];
                    var t = [0, 1, 2, 3];
                    t = t.sort(function () {
                        return .5 - Math.random();
                    });
                    var e = this.worldScene.getChildByName("itemStart2").transform.position.clone(), i = e.x, s = 0, r = 0;
                    for (var _a7 = 0; _a7 < 9; _a7++) {
                        e.x = i;
                        for (var _i34 = 0; _i34 < 9; _i34++) {
                            s >= t.length && (s = 0, t = t.sort(function () {
                                return .5 - Math.random();
                            }));
                            var _i35 = t[s];
                            this.itemProduce3(_i35, this.worldDynamic, e, r, 2), s++, r++, e.x += .2;
                        }
                        e.z += .2;
                    }
                }
            }, {
                key: "initAi",
                value: function initAi() { }
            }, {
                key: "initEvent",
                value: function initEvent() {
                    Laya.stage.off(C.evt_checkResult, this, this.showCarNodeTutor), Laya.stage.on(C.evt_checkResult, this, this.showCarNodeTutor);
                }
            }, {
                key: "showCarNodeTutor",
                value: function showCarNodeTutor() {
                    var t = this.carNodeArr[0].owner;
                    t.getChildByName("ef_yindao_2");
                    t.getChildByName("ef_yindao_2").getChildAt(0).getChildByName("ef_zz").active = !0,
                        t.getChildByName("ef_yindao_2").getChildAt(0).getChildByName("ef_jt").active = !0;
                }
            }, {
                key: "initLight",
                value: function initLight() {
                    this.light = this.worldScene.getChildByName("Directional Light"), this.light.shadowStrength = .4,
                        this.light.shadowMode = Laya.ShadowMode.SoftLow, this.light.shadowDistance = 5,
                        this.light.shadowResolution = 2048, this.light.shadowCascadesMode = Laya.ShadowCascadesMode.NoCascades;
                    var t = zs.scene.inst.staticNode;
                    for (var _e41 = 0; _e41 < t.numChildren; _e41++) {
                        var _i36 = t.getChildAt(_e41);
                        _i36 instanceof Laya.MeshSprite3D && "arrow" != _i36.name && (_i36.meshRenderer.receiveShadow = !0,
                            _i36.meshRenderer.castShadow = !0);
                    }
                }
            }, {
                key: "createParaCurve",
                value: function createParaCurve(t) {
                    var e = p.createSpriteToScene("lineSpot", this.worldDynamic, t);
                    this.paraCurve.push(e);
                }
            }, {
                key: "findTargetGold",
                value: function findTargetGold(t, e, i) {
                    var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
                    var r = arguments.length > 4 ? arguments[4] : undefined;
                    e.y = 0;
                    var a = 100, n = null;
                    for (var o = 0; o < this.characters.length; o++) {
                        if (this.characters[o].id == t) continue;
                        if (this.characters[o].deadFlag) continue;
                        var _s18 = this.characters[o].owner.transform.position.clone();
                        _s18.y = 0;
                        var _r9 = Laya.Vector3.distance(e, _s18);
                        _r9 < i && _r9 < a && (a = _r9, n = this.characters[o]);
                    }
                    return n;
                }
            }, {
                key: "findTarget2",
                value: function findTarget2(t, e, i) {
                    var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
                    var r = arguments.length > 4 ? arguments[4] : undefined;
                    e.y = 0;
                    var a = 100, n = null;
                    for (var o = 0; o < this.characters.length; o++) {
                        if (this.characters[o].id == t) continue;
                        if (this.characters[o].deadFlag) continue;
                        if (!r.checkCanGet(this.characters[o])) continue;
                        if (this.characters[o].fsm._statues != L.WALK && this.characters[o].fsm._statues != L.IDLE) continue;
                        if (this.characters[o].headItems.length >= this.characters[o].maxItem) continue;
                        var _s19 = this.characters[o].owner.transform.position.clone();
                        _s19.y = 0;
                        var _l = Laya.Vector3.distance(e, _s19);
                        _l < i && _l < a && (a = _l, n = this.characters[o]);
                    }
                    return n;
                }
            }, {
                key: "setShopData",
                value: function setShopData() {
                    Laya.LocalStorage.setItem("Car-Craft-Race-Level", C.level + "");
                }
            }, {
                key: "getShopData",
                value: function getShopData() {
                    var t = Laya.LocalStorage.getItem("Car-Craft-Race-Level");
                    "" != t && null != t && (C.level = Number(t));
                }
            }, {
                key: "LoadSky",
                value: function LoadSky() {
                    Laya.Material.load("3dres/SkyBox/skyMaterial.lmat", Laya.Handler.create(this, function (t) {
                        H.inst.camera.clearFlag = Laya.CameraClearFlags.Sky;
                        var e = H.inst.worldScene.skyRenderer;
                        e.mesh = Laya.SkyBox.instance, e.material = t;
                    }));
                }
            }, {
                key: "clear",
                value: function clear() {
                    this.worldScene && this.worldScene.destroy(!0);
                }
            }, {
                key: "showResult",
                value: function showResult() {
                    var t;
                    C.player.rank <= 1 ? (C.playView.setResult(!0), C.battleState = a.WIN, C.level++,
                        t = !0) : (C.playView.setResult(!1), C.battleState = a.FAILED, t = !1), this.setShopData(),
                        zs.td.track("levelComplete_" + C.level);
                }
            }, {
                key: "initCamera",
                value: function initCamera() {
                    var t = this.worldScene.getChildByName("freelookCameraRig"), e = m.AddComponentIfNotExist(t, S);
                    this.camerScript = e;
                    var i = t.getChildByName("pivot"), s = i.getChildByName("pos").getChildByName("MainCamera");
                    this.camera = s, this.cameraPivot = i;
                    var r = this.worldScene.getChildByName("characterPos")
                        , a = p.createSpriteToScene(T.res_player, this.worldDynamic, r.getChildAt(0).transform.position.clone());
                    this.player = m.AddComponentIfNotExist(a, V),
                        this.player.init(0)
                        , C.player = this.player
                        , this.characters.push(this.player)
                        , e.init(a.transform, i, s.transform)
                        , C.mPosAnimator = i.getChildByName("pos").getComponent(Laya.Animator)
                        , C.cAnimator = this.camera.getComponent(Laya.Animator)
                        , C.cameraScript = this.camerScript
                        , this.cAnimator = s.getComponent(Laya.Animator)
                        , C.carCamera = this.worldScene.getChildByName("MainCamera")
                        , this.player.owner.addChild(C.carCamera)
                        , C.carCamera.active = !1;
                    console.log(111111111)
                    this.cAnimator.play("gameIdle", 0, 0);
                }
            }, {
                key: "checkCharactorCollisionWithChar",
                value: function checkCharactorCollisionWithChar(t, e, i) {
                    var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
                    e.y = 0;
                    for (var r = 0; r < this.characters.length; r++) {
                        if (this.characters[r].id == t) continue;
                        if (this.characters[r].deadFlag) continue;
                        var _a8 = this.characters[r].owner.transform.position.clone();
                        if (_a8.y = 0, Laya.Vector3.distance(e, _a8) < i + this.characters[r].radius + s) return this.characters[r];
                    }
                    return null;
                }
            }, {
                key: "onUpdate",
                value: function onUpdate() {
                    C.battleState == a.RUNNING && (this.updateTimes % 60 == 0 && this.onSlowTick(),
                        this.checkItemActive(), this.checkTrap(), this.checkEF_ripple(), this.updateTimes++);
                }
            }, {
                key: "checkEF_ripple",
                value: function checkEF_ripple() { }
            }, {
                key: "checkTrap",
                value: function checkTrap() {
                    for (var _t48 = 0; _t48 < this.trapItems.length; _t48++) {
                        var _e42 = this.trapItems[_t48];
                        if (!_e42.owner) continue;
                        Laya.Vector3.distance(C.player.owner.transform.position, _e42.owner.transform.position) >= 20 ? _e42.setMeshNode(!1) : _e42.setMeshNode(!0);
                    }
                    for (var _t49 = 0; _t49 < this.goldArr.length; _t49++) {
                        var _e43 = this.goldArr[_t49];
                        if (!_e43.owner) continue;
                        var _i37 = Laya.Vector3.distance(C.player.owner.transform.position, _e43.owner.transform.position);
                        _e43.owner.active = !(_i37 >= 20);
                    }
                }
            }, {
                key: "checkItemActive",
                value: function checkItemActive() {
                    var t = !1, e = !1;
                    for (var _i38 = 0; _i38 < this.characters.length; _i38++) {
                        var _s20 = this.characters[_i38];
                        1 == _s20.zone && (t = !0), 2 == _s20.zone && (e = !0);
                    }
                    for (var _i39 = 0; _i39 < this.items.length; _i39++) {
                        var _s21 = this.items[_i39];
                        1 == _s21.zone ? t ? _s21.meshNode.active || _s21.setMeshNode(!0) : _s21.setMeshNode(!1) : 2 == _s21.zone && (e ? _s21.meshNode.active || _s21.setMeshNode(!0) : _s21.setMeshNode(!1));
                    }
                }
            }, {
                key: "onLateUpdate",
                value: function onLateUpdate() {
                    if (C.battleState != a.RUNNING) return;
                    C.carMode && (C.carViewPoint.transform.position.z = C.player.owner.transform.position.z),
                        this.camerScript.onUPdateCamera();
                    var t = !0;
                    for (var _e44 = 0; _e44 < this.characters.length; _e44++) {
                        if ("win" != this.characters[_e44].form) {
                            t = !1;
                            break;
                        }
                    }
                    C.winArr.length >= 3 && C.player.rank == -1 && (C.playView.setResult(!1), C.battleState = a.FAILED, t = !1);
                    t && this.showResult();
                }
            }, {
                key: "findTarget",
                value: function findTarget(t, e, i) {
                    var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
                    var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : -1;
                    e.y = 0;
                    var a = 100, n = null;
                    for (var o = 0; o < this.characters.length; o++) {
                        if (this.characters[o].id == t) continue;
                        if (this.characters[o].deadFlag) continue;
                        var _s22 = this.characters[o].owner.transform.position.clone();
                        _s22.y = 0;
                        var _l2 = Laya.Vector3.distance(e, _s22);
                        _l2 < i && _l2 < a && r > this.characters[o].headItems.length && (a = _l2, n = this.characters[o]);
                    }
                    return n;
                }
            }, {
                key: "findRandomItem",
                value: function findRandomItem(t, e, i) {
                    var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
                    var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
                    var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
                    e.y = 0;
                    var n, o, l = 200;
                    o = 1 == a ? this.items : this.items2;
                    for (var h = 0; h < o.length; h++) {
                        if (o[h].destroyed) continue;
                        if (o[h].picked) continue;
                        if (a != o[h].zone) continue;
                        if (r != o[h].colorId) continue;
                        var _t50 = o[h].owner.transform.position.clone();
                        _t50.y = 0;
                        var _s23 = Laya.Vector3.distance(e, _t50);
                        _s23 < i + (o[h].targetScale - 1) * o[h].radius && _s23 < l && (l = _s23, n = o[h]);
                    }
                    return n;
                }
            }, {
                key: "refreshItem",
                value: function refreshItem() {
                    C.produceColor = C.produceColor.sort(function () {
                        return .5 - Math.random();
                    });
                    for (var _t51 = 0; _t51 < C.produceItemIndex.length; _t51++) {
                        var _e45 = C.produceColor.splice(0, 1)[0];
                        this.items[C.produceItemIndex[_t51]].refreshColor(_e45);
                    }
                    C.produceColor = [], C.produceItemIndex = [], C.produceColor2 = C.produceColor2.sort(function () {
                        return .5 - Math.random();
                    });
                    for (var _t52 = 0; _t52 < C.produceItemIndex2.length; _t52++) {
                        var _e46 = C.produceColor2.splice(0, 1)[0];
                        this.items2[C.produceItemIndex2[_t52]].refreshColor(_e46);
                    }
                    C.produceColor2 = [], C.produceItemIndex2 = [];
                }
            }, {
                key: "onSlowTick",
                value: function onSlowTick() {
                    this.updateTimes % 480 == 0 && this.refreshItem();
                }
            }], [{
                key: "inst",
                get: function get() {
                    return null == this._inst && (this._inst = new H()), this._inst;
                }
            }]);
            return H;
        }();
        H.dynamnicNode = "dynamic", H.staticNode = "static", H.preloadNode = "preload",
            H.neturalNode = "netural", H.prefabNode = "prefab";
        var G = /* */ function (_zs$fgui$base2) {
            _inherits2(G, _zs$fgui$base2);
            var _super23 = _createSuper2(G);
            function G() {
                _classCallCheck2(this, G);
                return _super23.apply(this, arguments);
            }
            _createClass2(G, [{
                key: "onUpdate",
                value: function onUpdate() { }
            }, {
                key: "setWindow",
                value: function setWindow() {
                    this.contentPanel.displayObject.addChild(window.box_adTwo);
                    Laya.SoundManager.playMusic("soundBgm/mainIdle.mp3", 0);
                }
            }, {
                key: "check",
                value: function check(t) {
                    return t instanceof h;
                }
            }, {
                key: "init",
                value: function init() {
                    this.contentPanel.m_start.on(Laya.Event.MOUSE_DOWN, this, this.onStart);
                    this.btnMusic = new fgui.GLoader();
                    this.btnMusic.setXY(50, 20);
                    this.btnMusic.url = window.WebAudioEngine.pause ? "res/btn_sound_off.png" : "res/btn_sound_on.png";
                    this.btnMusic.setSize(50, 50);
                    this.btnMusic.onClick(this, this.onMusic);
                    this.contentPanel.addChild(this.btnMusic);
                    // window.view = this.contentPanel;
                    window.box_adTwo.top = 200;
                    window.box_adTwo.setSpaceX(100);
                    this.contentPanel.displayObject.addChild(window.box_adTwo);
                }
            }, {
                key: "onMusic",
                value: function onMusic(e) {
                    e.stopPropagation();
                    window.WebAudioEngine.pause = !window.WebAudioEngine.pause;
                    this.btnMusic.icon = window.WebAudioEngine.pause ? "res/btn_sound_off.png" : "res/btn_sound_on.png";
                    Laya.LocalStorage.setItem("Car-Craft-Race-musicState", JSON.stringify(window.WebAudioEngine.pause));
                }
            }, {
                key: "onStart",
                value: function onStart() {
                    platform.getInstance().showInterstitial(() => {
                        window.box_adTwo.removeSelf();
                        zs.core.workflow.next();
                        C.manager.setNearstItemTutor();
                    })
                }
            }, {
                key: "contentPanel",
                get: function get() {
                    return this.view;
                }
            }], [{
                key: "make",
                value: function make() {
                    return h.createInstance();
                }
            }, {
                key: "type",
                value: function type() {
                    return h;
                }
            }]);
            return G;
        }(zs.fgui.base);
        var W = /* */ function (_fgui$GComponent7) {
            _inherits2(W, _fgui$GComponent7);
            var _super24 = _createSuper2(W);
            function W() {
                _classCallCheck2(this, W);
                return _super24.apply(this, arguments);
            }
            _createClass2(W, [{
                key: "onConstruct",
                value: function onConstruct() {
                    this.m_progress = this.getChildAt(2), this.m_pnlText = this.getChildAt(3);
                }
            }], [{
                key: "createInstance",
                value: function createInstance() {
                    return fgui.UIPackage.createObject("entry", "loadingView");
                }
            }]);
            return W;
        }(fgui.GComponent);
        W.URL = "ui://yj6udx9wr7pb0";
        var Y = /* */ function () {
            function Y() {
                _classCallCheck2(this, Y);
            }
            _createClass2(Y, null, [{
                key: "bindAll",
                value: function bindAll() {
                    fgui.UIObjectFactory.setExtension(W.URL, W);
                }
            }]);
            return Y;
        }();
        var X = /* */ function (_zs$ui$Loading) {
            _inherits2(X, _zs$ui$Loading);
            var _super25 = _createSuper2(X);
            function X() {
                var _this24;
                _classCallCheck2(this, X);
                _this24 = _super25.apply(this, arguments), _this24.bSetLogo = !1;
                return _this24;
            }
            _createClass2(X, [{
                key: "setLogo",
                value: function setLogo() {
                    if (this.bSetLogo) return;
                    this.bSetLogo = !0;
                    this.view.getChildAt(1).y = 50;
                    this.view.getChildAt(2).y = 1200;
                    this.view.getChildAt(3).y = 1195;
                    // window.view = this.view;
                }
            }, {
                key: "updateProgress",
                value: function updateProgress(t) {
                    this.setLogo();
                    var e = this.view;
                    e && (t = Math.floor(t), e.m_progress.update(t), e.m_pnlText.text = "".concat(t, "%"));
                }
            }], [{
                key: "preload",
                value: function preload() {
                    return new Promise(function (t, e) {
                        zs.resource.load("fgui/entry", zs.ResourceType.FGUIPack).then(function () {
                            Y.bindAll(), t();
                        });
                    });
                }
            }, {
                key: "make",
                value: function make() {
                    return W.createInstance();
                }
            }]);
            return X;
        }(zs.ui.Loading);
        var j = function j() {
            _classCallCheck2(this, j);
        };
        j.zs_version = 1, j.zs_switch = 1, j.zs_click_award_num = "-1", j.zs_button_delay_time = 2500,
            j.zs_start_game_video_switch = 1, j.zs_banner_vertical_enable = 1, j.zs_ready_click_num = "-1",
            j.zs_full_screen_button_switch = 1, j.zs_jump_switch = 1, j.zs_full_screen1_jump = 1,
            j.zs_full_screen2_jump = 1, j.zs_finish_jump = 1, j.zs_history_list_jump = 1, j.zs_auto_jump_switch = 1,
            j.zs_friends_playing_switch = 1, j.zs_reminder_switch = 1, j.zs_false_news_switch = 1,
            j.zs_false_news_child = "", j.zs_slide_jump_switch = 1, j.zs_full_screen_jump = 1,
            j.zs_before_finsh_jump_switch = 1, j.zs_Fakerjump = 1, j.zs_finish_full_screen_switch = 1,
            j.zs_game_start_jump_switch = 1, j.zs_auto_full_screen_jump_switch = 1, j.zs_skip_settle = 1,
            j.zs_share_title = "", j.zs_share_img = "", j.zs_banner_adunit = "", j.zs_banner_adunit2 = "",
            j.zs_banner_adunit3 = "", j.zs_video_adunit = "", j.zs_full_screen_adunit = "",
            j.zs_gridAd_id = "", j.zs_revive_way = "", j.zs_revive_num = "", j.zs_scene_value = "1005|1006|1011|1012|1013|1014|1017|1019|1020|1023|1024|1025|1030|1031|1032|1036|1042|1047|1048|1049|1053|1102|1129|1106",
            j.zs_click_award_since = "", j.zs_banner_banner_time = 2e3, j.zs_full_screen_banner_time = 3e3,
            j.zs_banner_refresh_time = 7e3, j.zs_full_screen_ad = 0, j.zs_native_adunit = "",
            j.zs_jump_time = 4e3, j.zs_native_adunit_icon = "", j.zs_native_adunit2 = "", j.zs_recommend_id4 = "",
            j.zs_recommend_id3 = "", j.zs_recommend_id2 = "", j.zs_recommend_id1 = "", j.zs_banner_show_number = 5e3,
            j.zs_game_banner_show_switch = 1, j.zs_share = 0, j.zs_unmiss_text_time = "", j.zs_Video_Display_Time = 500,
            j.zs_Screen_video_switch = 10, j.zs_video_adunit1 = "", j.zs_video_adunit2 = "",
            j.zs_banner_cache_num = 3, j.zs_banner_create_interval = 45e3;
        var K = /* */ function (_fgui$GComponent8) {
            _inherits2(K, _fgui$GComponent8);
            var _super26 = _createSuper2(K);
            function K() {
                _classCallCheck2(this, K);
                return _super26.apply(this, arguments);
            }
            _createClass2(K, [{
                key: "onConstruct",
                value: function onConstruct() {
                    this.ditu1 = this.getController("ditu1"), this.bottomlighting = this.getChild("bottomlighting"),
                        this.highlight = this.getChild("highlight"), this.bottom = this.getChild("bottom"),
                        this.picture = this.getChild("picture"), this.title = this.getChild("title"), this.desc = this.getChild("desc");
                }
            }], [{
                key: "createInstance",
                value: function createInstance() {
                    return fgui.UIPackage.createObject("export", "item_1");
                }
            }]);
            return K;
        }(fgui.GComponent);
        K.URL = "ui://pt2mjy81coym71";
        var Q = /* */ function (_fgui$GComponent9) {
            _inherits2(Q, _fgui$GComponent9);
            var _super27 = _createSuper2(Q);
            function Q() {
                _classCallCheck2(this, Q);
                return _super27.apply(this, arguments);
            }
            _createClass2(Q, [{
                key: "onConstruct",
                value: function onConstruct() {
                    this.picture = this.getChild("picture"), this.title = this.getChild("title");
                }
            }], [{
                key: "createInstance",
                value: function createInstance() {
                    return fgui.UIPackage.createObject("export", "item_3");
                }
            }]);
            return Q;
        }(fgui.GComponent);
        Q.URL = "ui://pt2mjy81coym78";
        var J = /* */ function (_fgui$GComponent10) {
            _inherits2(J, _fgui$GComponent10);
            var _super28 = _createSuper2(J);
            function J() {
                _classCallCheck2(this, J);
                return _super28.apply(this, arguments);
            }
            _createClass2(J, [{
                key: "onConstruct",
                value: function onConstruct() {
                    this.background = this.getChild("background"), this.picture = this.getChild("picture"),
                        this.title = this.getChild("title"), this.shakeRight = this.getTransition("shakeRight"),
                        this.shakeLeft = this.getTransition("shakeLeft"), this.t2 = this.getTransition("t2");
                }
            }], [{
                key: "createInstance",
                value: function createInstance() {
                    return fgui.UIPackage.createObject("export", "item_2");
                }
            }]);
            return J;
        }(fgui.GComponent);
        J.URL = "ui://pt2mjy81coym7c";
        var q = /* */ function (_fgui$GComponent11) {
            _inherits2(q, _fgui$GComponent11);
            var _super29 = _createSuper2(q);
            function q() {
                _classCallCheck2(this, q);
                return _super29.apply(this, arguments);
            }
            _createClass2(q, [{
                key: "onConstruct",
                value: function onConstruct() {
                    this.background = this.getChild("background"), this.background_list = this.getChild("background_list"),
                        this.img_hot = this.getChild("img_hot"), this.rank1 = this.getChild("rank1"), this.rank2 = this.getChild("rank2"),
                        this.rank3 = this.getChild("rank3"), this.rankList = this.getChild("rankList"),
                        this.btn_continue = this.getChild("btn_continue"), this.finger = this.getChild("finger");
                }
            }], [{
                key: "createInstance",
                value: function createInstance() {
                    return fgui.UIPackage.createObject("export", "full_2");
                }
            }]);
            return q;
        }(fgui.GComponent);
        q.URL = "ui://pt2mjy81dbce5u";
        var Z = /* */ function (_fgui$GComponent12) {
            _inherits2(Z, _fgui$GComponent12);
            var _super30 = _createSuper2(Z);
            function Z() {
                _classCallCheck2(this, Z);
                return _super30.apply(this, arguments);
            }
            _createClass2(Z, [{
                key: "onConstruct",
                value: function onConstruct() {
                    this.viewCtrl = this.getController("viewCtrl"), this.imgRankBg = this.getChild("imgRankBg"),
                        this.picture = this.getChild("picture"), this.title = this.getChild("title"), this.desc = this.getChild("desc"),
                        this.imgRank = this.getChild("imgRank");
                }
            }], [{
                key: "createInstance",
                value: function createInstance() {
                    return fgui.UIPackage.createObject("export", "item_4");
                }
            }]);
            return Z;
        }(fgui.GComponent);
        Z.URL = "ui://pt2mjy81dbce5z";
        var $ = /* */ function (_fgui$GComponent13) {
            _inherits2($, _fgui$GComponent13);
            var _super31 = _createSuper2($);
            function $() {
                _classCallCheck2(this, $);
                return _super31.apply(this, arguments);
            }
            _createClass2($, [{
                key: "onConstruct",
                value: function onConstruct() {
                    this.rank = this.getChild("rank"), this.desc = this.getChild("desc"), this.title = this.getChild("title"),
                        this.btn_play = this.getChild("btn_play"), this.picture = this.getChild("picture");
                }
            }], [{
                key: "createInstance",
                value: function createInstance() {
                    return fgui.UIPackage.createObject("export", "item_5");
                }
            }]);
            return $;
        }(fgui.GComponent);
        $.URL = "ui://pt2mjy81dbce61";
        var tt = /* */ function (_fgui$GComponent14) {
            _inherits2(tt, _fgui$GComponent14);
            var _super32 = _createSuper2(tt);
            function tt() {
                _classCallCheck2(this, tt);
                return _super32.apply(this, arguments);
            }
            _createClass2(tt, [{
                key: "onConstruct",
                value: function onConstruct() {
                    this.picture1 = this.getChild("picture1"), this.picture2 = this.getChild("picture2"),
                        this.lblName = this.getChild("lblName"), this.lblDesc = this.getChild("lblDesc"),
                        this.lblGame = this.getChild("lblGame"), this.btnNo = this.getChild("btnNo"), this.btnYes = this.getChild("btnYes");
                }
            }], [{
                key: "createInstance",
                value: function createInstance() {
                    return fgui.UIPackage.createObject("export", "challenge");
                }
            }]);
            return tt;
        }(fgui.GComponent);
        tt.URL = "ui://pt2mjy81i71b81";
        var et = /* */ function (_fgui$GButton) {
            _inherits2(et, _fgui$GButton);
            var _super33 = _createSuper2(et);
            function et() {
                _classCallCheck2(this, et);
                return _super33.apply(this, arguments);
            }
            _createClass2(et, [{
                key: "onConstruct",
                value: function onConstruct() {
                    this.desc = this.getChild("desc");
                }
            }], [{
                key: "createInstance",
                value: function createInstance() {
                    return fgui.UIPackage.createObject("export", "fake_msg");
                }
            }]);
            return et;
        }(fgui.GButton);
        et.URL = "ui://pt2mjy81i71b8e";
        var it = /* */ function (_fgui$GComponent15) {
            _inherits2(it, _fgui$GComponent15);
            var _super34 = _createSuper2(it);
            function it() {
                _classCallCheck2(this, it);
                return _super34.apply(this, arguments);
            }
            _createClass2(it, [{
                key: "onConstruct",
                value: function onConstruct() {
                    this.challenge = this.getChild("challenge");
                }
            }], [{
                key: "createInstance",
                value: function createInstance() {
                    return fgui.UIPackage.createObject("export", "friend_challenge");
                }
            }]);
            return it;
        }(fgui.GComponent);
        it.URL = "ui://pt2mjy81i71b8f";
        var st = /* */ function (_fgui$GButton2) {
            _inherits2(st, _fgui$GButton2);
            var _super35 = _createSuper2(st);
            function st() {
                _classCallCheck2(this, st);
                return _super35.apply(this, arguments);
            }
            _createClass2(st, [{
                key: "onConstruct",
                value: function onConstruct() {
                    this.btnExit = this.getChild("btnExit");
                }
            }], [{
                key: "createInstance",
                value: function createInstance() {
                    return fgui.UIPackage.createObject("export", "fake_exit");
                }
            }]);
            return st;
        }(fgui.GButton);
        st.URL = "ui://pt2mjy81i71b8s";
        var rt = /* */ function (_fgui$GComponent16) {
            _inherits2(rt, _fgui$GComponent16);
            var _super36 = _createSuper2(rt);
            function rt() {
                _classCallCheck2(this, rt);
                return _super36.apply(this, arguments);
            }
            _createClass2(rt, [{
                key: "onConstruct",
                value: function onConstruct() {
                    this.aniKnock = this.getTransition("aniKnock");
                }
            }], [{
                key: "createInstance",
                value: function createInstance() {
                    return fgui.UIPackage.createObject("export", "knock_hammer");
                }
            }]);
            return rt;
        }(fgui.GComponent);
        rt.URL = "ui://pt2mjy81m8f8a0";
        var at = /* */ function (_fgui$GComponent17) {
            _inherits2(at, _fgui$GComponent17);
            var _super37 = _createSuper2(at);
            function at() {
                _classCallCheck2(this, at);
                return _super37.apply(this, arguments);
            }
            _createClass2(at, [{
                key: "onConstruct",
                value: function onConstruct() {
                    this.background = this.getChild("background"), this.list = this.getChild("list"),
                        this.btn_continue = this.getChild("btn_continue");
                }
            }], [{
                key: "createInstance",
                value: function createInstance() {
                    return fgui.UIPackage.createObject("export", "full_1");
                }
            }]);
            return at;
        }(fgui.GComponent);
        at.URL = "ui://pt2mjy81nbyx8v";
        var nt = /* */ function (_fgui$GComponent18) {
            _inherits2(nt, _fgui$GComponent18);
            var _super38 = _createSuper2(nt);
            function nt() {
                _classCallCheck2(this, nt);
                return _super38.apply(this, arguments);
            }
            _createClass2(nt, [{
                key: "onConstruct",
                value: function onConstruct() {
                    this.background = this.getChild("background"), this.picture = this.getChild("picture"),
                        this.shakeRight = this.getTransition("shakeRight"), this.shakeLeft = this.getTransition("shakeLeft"),
                        this.t2 = this.getTransition("t2");
                }
            }], [{
                key: "createInstance",
                value: function createInstance() {
                    return fgui.UIPackage.createObject("export", "item_7");
                }
            }]);
            return nt;
        }(fgui.GComponent);
        nt.URL = "ui://pt2mjy81qgjp8w";
        var ot = /* */ function (_fgui$GComponent19) {
            _inherits2(ot, _fgui$GComponent19);
            var _super39 = _createSuper2(ot);
            function ot() {
                _classCallCheck2(this, ot);
                return _super39.apply(this, arguments);
            }
            _createClass2(ot, [{
                key: "onConstruct",
                value: function onConstruct() {
                    this.viewCtrl = this.getController("viewCtrl"), this.content = this.getChild("content");
                }
            }], [{
                key: "createInstance",
                value: function createInstance() {
                    return fgui.UIPackage.createObject("export", "Side");
                }
            }]);
            return ot;
        }(fgui.GComponent);
        ot.URL = "ui://pt2mjy81rx1c67";
        var lt = /* */ function (_fgui$GButton3) {
            _inherits2(lt, _fgui$GButton3);
            var _super40 = _createSuper2(lt);
            function lt() {
                _classCallCheck2(this, lt);
                return _super40.apply(this, arguments);
            }
            _createClass2(lt, [{
                key: "onConstruct",
                value: function onConstruct() {
                    this.c1 = this.getController("c1");
                }
            }], [{
                key: "createInstance",
                value: function createInstance() {
                    return fgui.UIPackage.createObject("export", "btn_left_pop");
                }
            }]);
            return lt;
        }(fgui.GButton);
        lt.URL = "ui://pt2mjy81rx1c68";
        var ht = /* */ function (_fgui$GComponent20) {
            _inherits2(ht, _fgui$GComponent20);
            var _super41 = _createSuper2(ht);
            function ht() {
                _classCallCheck2(this, ht);
                return _super41.apply(this, arguments);
            }
            _createClass2(ht, [{
                key: "onConstruct",
                value: function onConstruct() {
                    this.adList = this.getChild("adList"), this.btnPop = this.getChild("btnPop");
                }
            }], [{
                key: "createInstance",
                value: function createInstance() {
                    return fgui.UIPackage.createObject("export", "hot_game");
                }
            }]);
            return ht;
        }(fgui.GComponent);
        ht.URL = "ui://pt2mjy81rx1c69";
        var ct = /* */ function (_fgui$GComponent21) {
            _inherits2(ct, _fgui$GComponent21);
            var _super42 = _createSuper2(ct);
            function ct() {
                _classCallCheck2(this, ct);
                return _super42.apply(this, arguments);
            }
            _createClass2(ct, [{
                key: "onConstruct",
                value: function onConstruct() {
                    this.title = this.getChild("title"), this.picture = this.getChild("picture");
                }
            }], [{
                key: "createInstance",
                value: function createInstance() {
                    return fgui.UIPackage.createObject("export", "item_6");
                }
            }]);
            return ct;
        }(fgui.GComponent);
        ct.URL = "ui://pt2mjy81rx1c6a";
        var dt = /* */ function (_fgui$GComponent22) {
            _inherits2(dt, _fgui$GComponent22);
            var _super43 = _createSuper2(dt);
            function dt() {
                _classCallCheck2(this, dt);
                return _super43.apply(this, arguments);
            }
            _createClass2(dt, [{
                key: "onConstruct",
                value: function onConstruct() {
                    this.picture = this.getChild("picture"), this.background = this.getChild("background"),
                        this.shakeRight = this.getTransition("shakeRight"), this.shakeLeft = this.getTransition("shakeLeft"),
                        this.t2 = this.getTransition("t2");
                }
            }], [{
                key: "createInstance",
                value: function createInstance() {
                    return fgui.UIPackage.createObject("export", "item_8");
                }
            }]);
            return dt;
        }(fgui.GComponent);
        dt.URL = "ui://pt2mjy81ves39a";
        var ut = /* */ function (_fgui$GComponent23) {
            _inherits2(ut, _fgui$GComponent23);
            var _super44 = _createSuper2(ut);
            function ut() {
                _classCallCheck2(this, ut);
                return _super44.apply(this, arguments);
            }
            _createClass2(ut, [{
                key: "onConstruct",
                value: function onConstruct() {
                    this.adList = this.getChild("adList"), this.knock = this.getChild("knock");
                }
            }], [{
                key: "createInstance",
                value: function createInstance() {
                    return fgui.UIPackage.createObject("export", "knock_export");
                }
            }]);
            return ut;
        }(fgui.GComponent);
        ut.URL = "ui://pt2mjy81ves39b";
        var _t = /* */ function (_fgui$GComponent24) {
            _inherits2(_t, _fgui$GComponent24);
            var _super45 = _createSuper2(_t);
            function _t() {
                _classCallCheck2(this, _t);
                return _super45.apply(this, arguments);
            }
            _createClass2(_t, [{
                key: "onConstruct",
                value: function onConstruct() {
                    this.listRecent = this.getChild("listRecent"), this.listNewGame = this.getChild("listNewGame"),
                        this.listRecommand = this.getChild("listRecommand"), this.finger = this.getChild("finger");
                }
            }], [{
                key: "createInstance",
                value: function createInstance() {
                    return fgui.UIPackage.createObject("export", "full_1_content");
                }
            }]);
            return _t;
        }(fgui.GComponent);
        _t.URL = "ui://pt2mjy81yi0t9h";
        var mt = /* */ function (_fgui$GComponent25) {
            _inherits2(mt, _fgui$GComponent25);
            var _super46 = _createSuper2(mt);
            function mt() {
                _classCallCheck2(this, mt);
                return _super46.apply(this, arguments);
            }
            _createClass2(mt, [{
                key: "onConstruct",
                value: function onConstruct() {
                    this.picture = this.getChild("picture"), this.title = this.getChild("title");
                }
            }], [{
                key: "createInstance",
                value: function createInstance() {
                    return fgui.UIPackage.createObject("export", "item_10");
                }
            }]);
            return mt;
        }(fgui.GComponent);
        mt.URL = "ui://pt2mjy81yi0t9j";
        var pt = /* */ function (_fgui$GComponent26) {
            _inherits2(pt, _fgui$GComponent26);
            var _super47 = _createSuper2(pt);
            function pt() {
                _classCallCheck2(this, pt);
                return _super47.apply(this, arguments);
            }
            _createClass2(pt, [{
                key: "onConstruct",
                value: function onConstruct() {
                    this.picture = this.getChild("picture"), this.title = this.getChild("title");
                }
            }], [{
                key: "createInstance",
                value: function createInstance() {
                    return fgui.UIPackage.createObject("export", "item_9");
                }
            }]);
            return pt;
        }(fgui.GComponent);
        pt.URL = "ui://pt2mjy81yi0t9p";
        var gt = /* */ function (_fgui$GComponent27) {
            _inherits2(gt, _fgui$GComponent27);
            var _super48 = _createSuper2(gt);
            function gt() {
                _classCallCheck2(this, gt);
                return _super48.apply(this, arguments);
            }
            _createClass2(gt, [{
                key: "onConstruct",
                value: function onConstruct() {
                    this.picture = this.getChild("picture"), this.title = this.getChild("title"), this.desc = this.getChild("desc");
                }
            }], [{
                key: "createInstance",
                value: function createInstance() {
                    return fgui.UIPackage.createObject("export", "item_11");
                }
            }]);
            return gt;
        }(fgui.GComponent);
        gt.URL = "ui://pt2mjy81yi0t9t";
        var ft = /* */ function (_fgui$GComponent28) {
            _inherits2(ft, _fgui$GComponent28);
            var _super49 = _createSuper2(ft);
            function ft() {
                _classCallCheck2(this, ft);
                return _super49.apply(this, arguments);
            }
            _createClass2(ft, [{
                key: "onConstruct",
                value: function onConstruct() {
                    this.touch = this.getTransition("touch");
                }
            }], [{
                key: "createInstance",
                value: function createInstance() {
                    return fgui.UIPackage.createObject("export", "full_touch");
                }
            }]);
            return ft;
        }(fgui.GComponent);
        ft.URL = "ui://pt2mjy81yi0t9x";
        var yt = /* */ function () {
            function yt() {
                _classCallCheck2(this, yt);
            }
            _createClass2(yt, null, [{
                key: "bindAll",
                value: function bindAll() {
                    fgui.UIObjectFactory.setExtension(K.URL, K), fgui.UIObjectFactory.setExtension(Q.URL, Q),
                        fgui.UIObjectFactory.setExtension(J.URL, J), fgui.UIObjectFactory.setExtension(q.URL, q),
                        fgui.UIObjectFactory.setExtension(Z.URL, Z), fgui.UIObjectFactory.setExtension($.URL, $),
                        fgui.UIObjectFactory.setExtension(tt.URL, tt), fgui.UIObjectFactory.setExtension(et.URL, et),
                        fgui.UIObjectFactory.setExtension(it.URL, it), fgui.UIObjectFactory.setExtension(st.URL, st),
                        fgui.UIObjectFactory.setExtension(rt.URL, rt), fgui.UIObjectFactory.setExtension(at.URL, at),
                        fgui.UIObjectFactory.setExtension(nt.URL, nt), fgui.UIObjectFactory.setExtension(ot.URL, ot),
                        fgui.UIObjectFactory.setExtension(lt.URL, lt), fgui.UIObjectFactory.setExtension(ht.URL, ht),
                        fgui.UIObjectFactory.setExtension(ct.URL, ct), fgui.UIObjectFactory.setExtension(dt.URL, dt),
                        fgui.UIObjectFactory.setExtension(ut.URL, ut), fgui.UIObjectFactory.setExtension(_t.URL, _t),
                        fgui.UIObjectFactory.setExtension(mt.URL, mt), fgui.UIObjectFactory.setExtension(pt.URL, pt),
                        fgui.UIObjectFactory.setExtension(gt.URL, gt), fgui.UIObjectFactory.setExtension(ft.URL, ft);
                }
            }]);
            return yt;
        }();
        var St = /* */ function (_zs$exporter$full) {
            _inherits2(St, _zs$exporter$full);
            var _super50 = _createSuper2(St);
            function St(t) {
                var _this25;
                _classCallCheck2(this, St);
                if (_this25 = _super50.call(this, t), _this25.autoScrollingDelay = 3e3, _this25.contentHeight = 313,
                    _this25.dragRecoverTime = 3, _this25.checkScrollDistance = 30, _this25.autoScrollSpeed = 60,
                    _this25.fakePlayerMin = 8, _this25.fakePlayerMax = 680, _this25.fingerDelay = 4e3,
                    _this25.maxList_1 = 3, _this25.maxList_2 = 4, t && t instanceof at) {
                    _this25.list = t.list;
                    var e = t.list.getChildAt(0);
                    _this25.list_1 = e.listRecent, _this25.list_2 = e.listNewGame, _this25.list_3 = e.listRecommand,
                        _this25.finger_touch = e.finger, _this25.finger_touch.touchable = !1, _this25.full_1_content = e,
                        _this25.list_1.itemRenderer = zs.proxy.Event.FGUIEvent(_assertThisInitialized2(_this25), _this25.onItem1Renderer),
                        _this25.list_2.itemRenderer = zs.proxy.Event.FGUIEvent(_assertThisInitialized2(_this25), _this25.onItem2Renderer),
                        _this25.list_3.itemRenderer = zs.proxy.Event.FGUIEvent(_assertThisInitialized2(_this25), _this25.onItem3Renderer),
                        zs.proxy.Event.FGUIOn(_this25.list_1, zs.proxy.Event.FGUI_CLICK_ITEM, _assertThisInitialized2(_this25), _this25.onClickItem1),
                        zs.proxy.Event.FGUIOn(_this25.list_2, zs.proxy.Event.FGUI_CLICK_ITEM, _assertThisInitialized2(_this25), _this25.onClickItem2),
                        zs.proxy.Event.FGUIOn(_this25.list_3, zs.proxy.Event.FGUI_CLICK_ITEM, _assertThisInitialized2(_this25), _this25.onClickItem3),
                        zs.proxy.Event.FGUIOn(t.list, zs.proxy.Event.FGUI_DRAG_START, _assertThisInitialized2(_this25), _this25.scrollStart),
                        zs.proxy.Event.FGUIOn(t.list, zs.proxy.Event.FGUI_DRAG_END, _assertThisInitialized2(_this25), _this25.scrollJumpExport),
                        zs.proxy.Event.FGUIOn(t.list, zs.proxy.Event.MOUSE_DOWN, _assertThisInitialized2(_this25), _this25.onDragStateBegin),
                        zs.proxy.Event.FGUIOn(t.list, zs.proxy.Event.MOUSE_MOVE, _assertThisInitialized2(_this25), _this25.onDragStateBegin),
                        zs.proxy.Event.FGUIOnClick(t.btn_continue, _assertThisInitialized2(_this25), _this25.onClickContinue),
                        _this25.maxList_1 = _this25.list_1.numItems, _this25.maxList_2 = _this25.list_2.numItems;
                }
                zs.td.justTrack("展示全屏导出一", "展示全屏导出一");
                return _possibleConstructorReturn2(_this25);
            }
            _createClass2(St, [{
                key: "init",
                value: function init() {
                    _get2(_getPrototypeOf2(St.prototype), "init", this).call(this), zs.platform.sync.hideBanner();
                }
            }, {
                key: "dispose",
                value: function dispose() {
                    _get2(_getPrototypeOf2(St.prototype), "dispose", this).call(this);
                    var t = this.view;
                    zs.Timer.inst.clearAll(this), zs.Tween.clearAll(t.btn_continue), clearTimeout(this.delayTimer1),
                        clearTimeout(this.delayTimer2), zs.platform.sync.hideBanner();
                }
            }, {
                key: "setData_1",
                value: function setData_1(t) {
                    return this._datas_1 = zs.utils.arrayDeepCopy(t).sort(function () {
                        return Math.random() > .5 ? -1 : 1;
                    }), this;
                }
            }, {
                key: "setData_2",
                value: function setData_2(t) {
                    return this._datas_2 = zs.utils.arrayDeepCopy(t).sort(function () {
                        return Math.random() > .5 ? -1 : 1;
                    }), this;
                }
            }, {
                key: "setData_3",
                value: function setData_3(t) {
                    return this._datas_3 = zs.utils.arrayDeepCopy(t).sort(function () {
                        return Math.random() > .5 ? -1 : 1;
                    }), this;
                }
            }, {
                key: "showFingerEffect",
                value: function showFingerEffect() {
                    var t = Math.random() * fairygui.GRoot.inst.width * .5 + .25 * fairygui.GRoot.inst.width, e = Math.random() * fairygui.GRoot.inst.height * .5 + .25 * fairygui.GRoot.inst.height;
                    e += this.list.scrollPane.posY, this.finger_touch.x = t, this.finger_touch.y = e;
                }
            }, {
                key: "apply",
                value: function apply() {
                    var _this26 = this;
                    return this.view && (this.list_1.numItems = 0, this.list_2.numItems = 0, this.list_3.numItems = 0,
                        zs.exporter.dataMgr.load().then(function (t) {
                            _this26.setData_1(t), _this26.setData_2(t), _this26.setData_3(t), _this26.list_1.numItems = Math.min(_this26._datas_1 ? _this26._datas_1.length : 0, _this26.maxList_1),
                                _this26.list_2.numItems = _this26._datas_2 ? _this26._datas_2.length : 0, _this26.list_3.numItems = _this26._datas_3 ? _this26._datas_3.length : 0,
                                _this26.list_3.resizeToFit(_this26.list_3.numItems), _this26.setContentHeight(),
                                _this26.enterJumpExport(), _this26._dragRecoverTime = _this26.dragRecoverTime, _this26._autoScrollSpeed = _this26.autoScrollSpeed,
                                zs.Timer.inst.clear(_this26, _this26.readyAutoScroll), zs.Timer.inst.clear(_this26, _this26.onAutoScroll),
                                zs.Timer.inst.once(_this26.autoScrollingDelay, _this26, _this26.readyAutoScroll);
                        }).catch(function (t) {
                            return t;
                        }), this.showFingerEffect(), zs.Timer.inst.loop(this.fingerDelay, this, this.showFingerEffect)),
                        this;
                }
            }, {
                key: "applyConfig",
                value: function applyConfig(t) {
                    return t && (null != t.scrolldelay && (this.autoScrollingDelay = t.scrolldelay),
                        null != t.scroll_delay && (this.autoScrollingDelay = t.scroll_delay), null != t.contentheight && (this.contentHeight = t.contentheight),
                        null != t.content_height && (this.contentHeight = t.content_height), null != t.recovertime && (this.dragRecoverTime = t.recovertime),
                        null != t.recover_time && (this.dragRecoverTime = t.recover_time), null != t.scrolldistance && (this.checkScrollDistance = t.scrolldistance),
                        null != t.scroll_distance && (this.checkScrollDistance = t.scroll_distance), null != t.scrollspeed && (this.autoScrollSpeed = t.scrollspeed),
                        null != t.scroll_speed && (this.autoScrollSpeed = t.scroll_speed), null != t.playermin && (this.fakePlayerMin = t.playermin),
                        null != t.player_min && (this.fakePlayerMin = t.player_min), null != t.playermax && (this.fakePlayerMax = t.playermax),
                        null != t.player_max && (this.fakePlayerMax = t.player_max), null != t.fingerdelay && (this.fingerDelay = t.fingerdelay),
                        null != t.finger_delay && (this.fingerDelay = t.finger_delay)), this.apply();
                }
            }, {
                key: "setContentHeight",
                value: function setContentHeight() {
                    var t = this._datas_3 ? this._datas_3.length : 0, e = Math.ceil(t / 4), i = e * this.contentHeight + (e - 1) * this.list_3.lineGap - this.list_3.height;
                    i > 0 && (this.full_1_content.height += i);
                }
            }, {
                key: "onItem1Renderer",
                value: function onItem1Renderer(t, e) {
                    if (null == this._datas_1 || this._datas_1.length <= t) e.picture.icon = "", e.title.text = "",
                        e.desc && (e.desc.text = ""), e.data = null; else {
                        var _i40 = this._datas_1[t];
                        e.picture.icon = _i40.getIcon(_i40.img_index), e.title.text = _i40.info.app_title,
                            _i40.info.app_desc && e.desc ? e.desc.text = _i40.info.app_desc : e.desc && (e.desc.text = ""),
                            e.desc && (e.desc.text = ""), e.data = _i40;
                    }
                }
            }, {
                key: "onItem2Renderer",
                value: function onItem2Renderer(t, e) {
                    if (null == this._datas_2 || this._datas_2.length <= t) e.picture.icon = "", e.title.text = "",
                        e.desc && (e.desc.text = ""), e.data = null; else {
                        var _i41 = this._datas_2[t];
                        e.picture.icon = _i41.getIcon(_i41.img_index), e.title.text = _i41.info.app_title,
                            _i41.info.app_desc && e.desc ? e.desc.text = _i41.info.app_desc : e.desc && (e.desc.text = ""),
                            e.data = _i41;
                    }
                    e.desc && (e.desc.text = "");
                }
            }, {
                key: "onItem3Renderer",
                value: function onItem3Renderer(t, e) {
                    if (null == this._datas_3 || this._datas_3.length <= t) e.picture.icon = "", e.title.text = "",
                        e.desc && (e.desc.text = ""), e.data = null; else {
                        var _i42 = this._datas_3[t];
                        if (e.picture.icon = _i42.getIcon(_i42.img_index), e.title.text = _i42.info.app_title,
                            e.desc) {
                            var _t53 = (Math.floor(Math.random() * this.fakePlayerMax) + this.fakePlayerMin) / 10;
                            e.desc.text = _t53 + "万人在玩";
                        }
                        e.data = _i42;
                    }
                }
            }, {
                key: "refreshSingleItem",
                value: function refreshSingleItem(t, e, i) {
                    var s = i[t];
                    if (null != s.img_index) s.img_index++; else {
                        var r = Math.floor(Math.random() * i.length);
                        if (i.length > 1 && r == t) return this.refreshSingleItem(t, e, i);
                        var a = i[r];
                        a && (i[t] = a, i[r] = s);
                    }
                    switch (e) {
                        case 1:
                            this.list_1.numItems = Math.min(this._datas_1 ? this._datas_1.length : 0, this.maxList_1);
                            break;

                        case 2:
                            this.list_2.numItems = this._datas_2 ? this._datas_2.length : 0;
                            break;

                        case 3:
                            this.list_3.numItems = this._datas_3 ? this._datas_3.length : 0;
                    }
                }
            }, {
                key: "onClickItem",
                value: function onClickItem(t, e, i) {
                    var _this27 = this;
                    this.record.push("点击跳转: " + t.data.info.appid), this._clickHandler ? this._clickHandler.runWith(t) : (zs.td.justTrack("全屏一点击导出跳转", "全屏一点击导出跳转"),
                        zs.exporter.utils.navigateToMiniProgram(t.data, t.picture.icon).then(function () {
                            var e;
                            switch (i) {
                                case 1:
                                    e = _this27._datas_1;
                                    break;

                                case 2:
                                    e = _this27._datas_2;
                                    break;

                                case 3:
                                    e = _this27._datas_3;
                            }
                            var s = e.indexOf(t.data);
                            _this27.refreshSingleItem(s, i, e);
                        }).catch(function (t) {
                            return t;
                        }));
                }
            }, {
                key: "onClickItem1",
                value: function onClickItem1(t, e) {
                    this.onClickItem(t, e, 1);
                }
            }, {
                key: "onClickItem2",
                value: function onClickItem2(t, e) {
                    this.onClickItem(t, e, 2);
                }
            }, {
                key: "onClickItem3",
                value: function onClickItem3(t, e) {
                    this.onClickItem(t, e, 3);
                }
            }, {
                key: "scrollStart",
                value: function scrollStart() {
                    this.touchX = zs.proxy.Touch.touchX, this.touchY = zs.proxy.Touch.touchY;
                }
            }, {
                key: "scrollJumpExport",
                value: function scrollJumpExport() {
                    this.record.push("触发滑动误触"), zs.exporter.utils.checkScroll(this.touchX, this.touchY, this.checkScrollDistance) && j.zs_slide_jump_switch && this.randomJumpExport();
                }
            }, {
                key: "randomJumpExport",
                value: function randomJumpExport() {
                    var t = this._datas_3[Math.floor(Math.random() * this._datas_3.length)];
                    this.record.push("随机导出跳转: " + t.info.appid), zs.td.justTrack("全屏一随机导出跳转", "全屏一随机导出跳转"),
                        zs.exporter.utils.navigateToMiniProgram(t).then(function (t) {
                            return t;
                        }).catch(function (t) {
                            return t;
                        });
                }
            }, {
                key: "onDragStateBegin",
                value: function onDragStateBegin() {
                    this._readyDrag = !0;
                }
            }, {
                key: "onDragStateChanged",
                value: function onDragStateChanged() {
                    this._readyDrag && this._dragRecoverTime > 0 && (this._isAutoScrolling = !1, this._dragStopCount = 0),
                        this._readyDrag && (this._readyDrag = !1);
                }
            }, {
                key: "readyAutoScroll",
                value: function readyAutoScroll() {
                    zs.Timer.inst.frameLoop(1, this, this.onAutoScroll), this._isAutoScrolling = !0;
                }
            }, {
                key: "onAutoScroll",
                value: function onAutoScroll() {
                    var t = this.view;
                    if (this._isAutoScrolling) {
                        var _e47 = this._autoScrollSpeed * zs.Timer.inst.delta * .001 * (this._autoScrollForward ? 1 : -1), _i43 = t.list.scrollPane;
                        _i43.setPosY(_e47 + t.list.scrollPane.posY), _i43.percY >= 1 ? this._autoScrollForward = !1 : _i43.percY <= 0 && (this._autoScrollForward = !0),
                            _e47 = this._autoScrollSpeed * zs.Timer.inst.delta * .001 * (this._autoScrollForward2 ? 1 : -1);
                        var _s24 = this.list_2.scrollPane;
                        _s24.setPosX(_e47 + _s24.posX), _s24.percX >= 1 ? this._autoScrollForward2 = !1 : _s24.percX <= 0 && (this._autoScrollForward2 = !0);
                    } else this._dragStopCount += .001 * zs.Timer.inst.delta, this._dragStopCount > this._dragRecoverTime && (this._dragStopCount = 0,
                        this._isAutoScrolling = !0);
                }
            }]);
            return St;
        }(zs.exporter.full);
        St.typeDefine = at;
        var Lt = /* */ function (_zs$exporter$full2) {
            _inherits2(Lt, _zs$exporter$full2);
            var _super51 = _createSuper2(Lt);
            function Lt(t) {
                var _this28;
                _classCallCheck2(this, Lt);
                _this28 = _super51.call(this, t), _this28.dragRecoverTime = 3, _this28.autoScrollSpeed = 50,
                    _this28.autoScrollingDelay = 3e3, _this28.checkScrollDistance = 30, _this28.fakePlayerMin = 8,
                    _this28.fakePlayerMax = 680, _this28.fingerDelay = 4e3, t && t instanceof q && (zs.proxy.Event.FGUIOnClick(t.rank1, _assertThisInitialized2(_this28), _this28.onClickRank1),
                        zs.proxy.Event.FGUIOnClick(t.rank2, _assertThisInitialized2(_this28), _this28.onClickRank2),
                        zs.proxy.Event.FGUIOnClick(t.rank3, _assertThisInitialized2(_this28), _this28.onClickRank3),
                        _this28.finger_touch = t.finger, _this28.finger_touch.touchable = !1, zs.proxy.Event.FGUIOnClick(t.btn_continue, _assertThisInitialized2(_this28), _this28.onClickContinue),
                        t.rankList.itemRenderer = zs.proxy.Event.FGUIEvent(_assertThisInitialized2(_this28), _this28.onItemRenderer),
                        zs.proxy.Event.FGUIOn(t.rankList, zs.proxy.Event.FGUI_CLICK_ITEM, _assertThisInitialized2(_this28), _this28.onClickItem),
                        zs.proxy.Event.FGUIOn(t.rankList, zs.proxy.Event.FGUI_DRAG_START, _assertThisInitialized2(_this28), _this28.scrollStart),
                        zs.proxy.Event.FGUIOn(t.rankList, zs.proxy.Event.FGUI_DRAG_END, _assertThisInitialized2(_this28), _this28.scrollJumpExport),
                        zs.proxy.Event.FGUIOn(t.rankList, zs.proxy.Event.MOUSE_DOWN, _assertThisInitialized2(_this28), _this28.onDragStateBegin),
                        zs.proxy.Event.FGUIOn(t.rankList, zs.proxy.Event.MOUSE_MOVE, _assertThisInitialized2(_this28), _this28.onDragStateChanged)),
                    zs.td.justTrack("展示全屏导出二", "展示全屏导出二");
                return _this28;
            }
            _createClass2(Lt, [{
                key: "init",
                value: function init() {
                    _get2(_getPrototypeOf2(Lt.prototype), "init", this).call(this), zs.platform.sync.hideBanner();
                }
            }, {
                key: "dispose",
                value: function dispose() {
                    _get2(_getPrototypeOf2(Lt.prototype), "dispose", this).call(this);
                    var t = this.view;
                    zs.Timer.inst.clearAll(this), zs.Tween.clearAll(t.btn_continue), zs.platform.sync.hideBanner();
                }
            }, {
                key: "showFingerEffect",
                value: function showFingerEffect() {
                    var t = Math.random() * fairygui.GRoot.inst.width * .5 + .25 * fairygui.GRoot.inst.width, e = Math.random() * fairygui.GRoot.inst.height * .5 + .25 * fairygui.GRoot.inst.height;
                    this.finger_touch.x = t, this.finger_touch.y = e;
                }
            }, {
                key: "setItemByData",
                value: function setItemByData(t, e, i) {
                    return t.picture.icon = e.getIcon(e.img_index), t.title.text = e.info.app_title,
                        i && i > 0 && t.desc ? t.desc.text = "".concat(this.rankPlayNums[i - 1], "万人在玩") : t.desc && (t.desc.text = ""),
                        t.viewCtrl && i && i > 0 && t.viewCtrl.setSelectedIndex(i - 1), t.data = e, this;
                }
            }, {
                key: "onItemRenderer",
                value: function onItemRenderer(t, e) {
                    if (null == this.rankData || this.rankData.length <= t) e.picture.icon = "", e.title.text = "",
                        e.desc && (e.desc.text = ""), e.data = null; else {
                        var _i44 = t + 3, _s25 = this.rankData[this.rankIndies[_i44]];
                        e.picture.icon = _s25.getIcon(_s25.img_index), e.title.text = _s25.info.app_title,
                            _i44 >= 0 && e.desc ? e.desc.text = "".concat(this.rankPlayNums[_i44], "万人在玩") : e.desc && (e.desc.text = ""),
                            _i44 && e.rank ? e.rank.text = (_i44 + 1).toString() : e.rank && (e.rank.text = ""),
                            e.data = _s25;
                    }
                }
            }, {
                key: "apply",
                value: function apply() {
                    var _this29 = this;
                    var t = this.view;
                    return t && (t.rankList.numItems = 0, zs.exporter.dataMgr.load().then(function (e) {
                        var i = zs.utils.arrayDeepCopy(e);
                        _this29.rankIndies = zs.utils.pickNumbers(0, e.length - 1, e.length), _this29.rankPlayNums = [];
                        for (var _t54 = 0; _t54 < e.length; _t54++) {
                            _this29.rankPlayNums.push((Math.floor(Math.random() * _this29.fakePlayerMax) + _this29.fakePlayerMin) / 10);
                        }
                        _this29.rankPlayNums.sort(function (t, e) {
                            return e - t;
                        }), i.length > 0 && _this29.setItemByData(t.rank1, i[_this29.rankIndies[0]], 1),
                            i.length > 1 && _this29.setItemByData(t.rank2, i[_this29.rankIndies[1]], 2), i.length > 2 && _this29.setItemByData(t.rank3, i[_this29.rankIndies[2]], 3),
                            _this29.rankData = i, t.rankList.numItems = _this29.rankData ? Math.max(_this29.rankData.length - 3, 0) : 0,
                            _this29.enterJumpExport(), _this29._dragRecoverTime = _this29.dragRecoverTime, _this29._autoScrollSpeed = _this29.autoScrollSpeed,
                            zs.Timer.inst.clear(_this29, _this29.readyAutoScroll), zs.Timer.inst.clear(_this29, _this29.onAutoScroll),
                            zs.Timer.inst.once(_this29.autoScrollingDelay, _this29, _this29.readyAutoScroll);
                    }).catch(function (t) {
                        return t;
                    }), this.showFingerEffect(), zs.Timer.inst.loop(this.fingerDelay, this, this.showFingerEffect)),
                        this;
                }
            }, {
                key: "applyConfig",
                value: function applyConfig(t) {
                    return t && (null != t.scrolldelay && (this.autoScrollingDelay = t.scrolldelay),
                        null != t.scroll_delay && (this.autoScrollingDelay = t.scroll_delay), null != t.recovertime && (this.dragRecoverTime = t.recovertime),
                        null != t.recover_time && (this.dragRecoverTime = t.recover_time), null != t.scrolldistance && (this.checkScrollDistance = t.scrolldistance),
                        null != t.scroll_distance && (this.checkScrollDistance = t.scroll_distance), null != t.scrollspeed && (this.autoScrollSpeed = t.scrollspeed),
                        null != t.scroll_speed && (this.autoScrollSpeed = t.scroll_speed), null != t.playermin && (this.fakePlayerMin = t.playermin),
                        null != t.player_min && (this.fakePlayerMin = t.player_min), null != t.playermax && (this.fakePlayerMax = t.playermax),
                        null != t.player_max && (this.fakePlayerMax = t.player_max), null != t.fingerdelay && (this.fingerDelay = t.fingerdelay),
                        null != t.finger_delay && (this.fingerDelay = t.finger_delay)), this.apply();
                }
            }, {
                key: "onClickItem",
                value: function onClickItem(t, e) {
                    this.record.push("点击跳转: " + t.data.info.appid), this._clickHandler ? this._clickHandler.runWith(t) : (zs.td.justTrack("全屏二点击导出跳转", "全屏二点击导出跳转"),
                        zs.exporter.utils.navigateToMiniProgram(t.data, t.picture.icon).then(function () {
                            null != t.data.img_index && (t.data.img_index++, t.picture.icon = t.data.getIcon(t.data.img_index));
                        }).catch(function (t) {
                            return t;
                        }));
                }
            }, {
                key: "onClickRank1",
                value: function onClickRank1() {
                    var t = this.view;
                    t instanceof q && this.onClickItem(t.rank1, null);
                }
            }, {
                key: "onClickRank2",
                value: function onClickRank2() {
                    var t = this.view;
                    t instanceof q && this.onClickItem(t.rank2);
                }
            }, {
                key: "onClickRank3",
                value: function onClickRank3() {
                    var t = this.view;
                    t instanceof q && this.onClickItem(t.rank3);
                }
            }, {
                key: "scrollStart",
                value: function scrollStart() {
                    this.touchX = zs.proxy.Touch.touchX, this.touchY = zs.proxy.Touch.touchY;
                }
            }, {
                key: "scrollJumpExport",
                value: function scrollJumpExport(t) {
                    this.record.push("触发滑动误触"), zs.exporter.utils.checkScroll(this.touchX, this.touchY, this.checkScrollDistance) && j.zs_slide_jump_switch && this.randomJumpExport();
                }
            }, {
                key: "randomJumpExport",
                value: function randomJumpExport() {
                    if (!this.rankData) return;
                    var t = this.rankData[Math.floor(Math.random() * this.rankData.length)];
                    this.record.push("随机导出跳转: " + t.info.appid), zs.td.justTrack("全屏二随机导出跳转", "全屏二随机导出跳转"),
                        zs.exporter.utils.navigateToMiniProgram(t).then(function (t) {
                            return t;
                        }).catch(function (t) {
                            return t;
                        });
                }
            }, {
                key: "onDragStateBegin",
                value: function onDragStateBegin() {
                    this._readyDrag = !0;
                }
            }, {
                key: "onDragStateChanged",
                value: function onDragStateChanged() {
                    this._readyDrag && this._dragRecoverTime > 0 && (this._isAutoScrolling = !1, this._dragStopCount = 0),
                        this._readyDrag && (this._readyDrag = !1);
                }
            }, {
                key: "readyAutoScroll",
                value: function readyAutoScroll() {
                    zs.Timer.inst.frameLoop(1, this, this.onAutoScroll), this._isAutoScrolling = !0;
                }
            }, {
                key: "onAutoScroll",
                value: function onAutoScroll() {
                    var t = this.view;
                    if (t && t.rankList) if (this._isAutoScrolling) {
                        var _e48 = this._autoScrollSpeed * zs.Timer.inst.delta * .001 * (this._autoScrollForward ? 1 : -1), _i45 = t.rankList.scrollPane;
                        _i45.setPosY(_e48 + t.rankList.scrollPane.posY), _i45.percY >= 1 ? this._autoScrollForward = !1 : _i45.percY <= 0 && (this._autoScrollForward = !0);
                    } else this._dragStopCount += .001 * zs.Timer.inst.delta, this._dragStopCount > this._dragRecoverTime && (this._dragStopCount = 0,
                        this._isAutoScrolling = !0);
                }
            }]);
            return Lt;
        }(zs.exporter.full);
        Lt.typeDefine = q;
        var Ct = /* */ function (_zs$fgui$baseGeneric) {
            _inherits2(Ct, _zs$fgui$baseGeneric);
            var _super52 = _createSuper2(Ct);
            function Ct(t) {
                var _this30;
                _classCallCheck2(this, Ct);
                _this30 = _super52.call(this, t), _this30.knockInterval = 5e3, _this30.knockBrokenDelay = 1500,
                    t && t instanceof ut && (_this30.listAd = t.adList, _this30.nodeHammer = t.knock,
                        _this30.aniHammer = _this30.nodeHammer.aniKnock, _this30.nodeHammer.visible = !1,
                        t.adList.itemRenderer = zs.proxy.Event.FGUIEvent(_assertThisInitialized2(_this30), _this30.onItemRender),
                        zs.proxy.Event.FGUIOn(t.adList, zs.proxy.Event.FGUI_CLICK_ITEM, _assertThisInitialized2(_this30), _this30.onClickItem));
                return _this30;
            }
            _createClass2(Ct, [{
                key: "dispose",
                value: function dispose() {
                    _get2(_getPrototypeOf2(Ct.prototype), "dispose", this).call(this), this.stopKnock();
                }
            }, {
                key: "apply",
                value: function apply() {
                    var _this31 = this;
                    return zs.exporter.dataMgr.load().then(function (t) {
                        _this31.disposed || (_this31.adData = zs.utils.arrayDeepCopy(t), _this31.updateUI(),
                            _this31.startKnock());
                    }).catch(function (t) {
                        return t;
                    }), this;
                }
            }, {
                key: "applyConfig",
                value: function applyConfig(t) {
                    return t && (null != t.knockinterval && (this.knockInterval = t.knockinterval),
                        null != t.knock_interval && (this.knockInterval = t.knock_interval), null != t.knockbrokendelay && (this.knockBrokenDelay = t.knockbrokendelay),
                        null != t.knock_broken_delay && (this.knockBrokenDelay = t.knock_broken_delay)),
                        this.apply();
                }
            }, {
                key: "onItemRender",
                value: function onItemRender(t, e) {
                    var i = this.adShowArr[t];
                    e.data = i, e.icon = i.getIcon(i.img_index);
                }
            }, {
                key: "onClickItem",
                value: function onClickItem(t) {
                    zs.td.justTrack("砸锤子导出跳转", "砸锤子导出跳转"), zs.exporter.utils.navigateToMiniProgram(t.data, t.icon).then(function () {
                        null != t.data.img_index && (t.data.img_index++, t.icon = t.data.getIcon(t.data.img_index));
                    }).catch(function (t) {
                        return t;
                    });
                }
            }, {
                key: "updateUI",
                value: function updateUI() {
                    this.adData.sort(function (t, e) {
                        return Math.random() > .5 ? -1 : 1;
                    }), this.adShowArr = [];
                    var t = Math.min(6, this.adData.length);
                    for (var _e49 = 0; _e49 < t; _e49++) {
                        this.adShowArr.push(this.adData[_e49]);
                    }
                    this.listAd.numItems = this.adShowArr.length;
                }
            }, {
                key: "startKnock",
                value: function startKnock() {
                    this.stopKnock();
                    zs.Timer.inst.once(1e3, this, this.knockExportIcon, null, !1);
                }
            }, {
                key: "stopKnock",
                value: function stopKnock() {
                    zs.Timer.inst.clearAll(this);
                    for (var _t55 = 0; _t55 < this.listAd.numItems; _t55++) {
                        var _e50 = this.listAd.getChildAt(_t55);
                        zs.Tween.clearAll(_e50);
                    }
                }
            }, {
                key: "knockExportIcon",
                value: function knockExportIcon() {
                    var _this32 = this;
                    if (!(this.listAd.numItems <= 1)) {
                        var t = Math.floor(Math.random() * this.listAd.numItems);
                        if (t == this.knockIndex) return this.knockExportIcon();
                        this.knockIndex = t;
                        var e, i = this.listAd.getChildAt(t);
                        this.nodeHammer.removeFromParent(), i.touchable = !1, e = zs.proxy.point(i.width / 2, i.height / 2),
                            e = i.localToGlobal(e.x, e.y);
                        var s = this.view.globalToLocal(e.x - this.nodeHammer.width * this.view.scaleX / 2, e.y - this.nodeHammer.height * this.view.scaleY / 2);
                        this.nodeHammer.setXY(s.x, s.y), this.view.addChild(this.nodeHammer), this.nodeHammer.visible = !0,
                            this.aniHammer.play(zs.Handler.create(this, function () {
                                _this32.nodeHammer.visible = !1;
                            }, null, !1), 1), zs.Timer.inst.once(this.knockBrokenDelay, this, this.onBrokenComplete),
                            zs.Timer.inst.once(this.knockInterval, this, this.knockExportIcon, null, !0);
                    }
                }
            }, {
                key: "onBrokenComplete",
                value: function onBrokenComplete() {
                    var t = this.listAd.getChildAt(this.knockIndex);
                    this.playScaleEff(t);
                }
            }, {
                key: "playScaleEff",
                value: function playScaleEff(t) {
                    var _this33 = this;
                    zs.Tween.to(t, {
                        scaleX: 0,
                        scaleY: 0
                    }, 500, zs.Ease.bounceIn, zs.Handler.create(this, function () {
                        _this33.refreshSingleItem(_this33.knockIndex), zs.Tween.to(t, {
                            scaleX: 1,
                            scaleY: 1
                        }, 500, zs.Ease.bounceIn, zs.Handler.create(_this33, function () {
                            t.touchable = !0;
                        }));
                    }));
                }
            }, {
                key: "refreshSingleItem",
                value: function refreshSingleItem(t) {
                    var _this34 = this;
                    var e = this.adShowArr[t];
                    if (null != e.img_index) e.img_index++; else {
                        var i = this.adData.filter(function (t) {
                            return !_this34.adShowArr.some(function (e) {
                                return t.info.appid === e.info.appid;
                            });
                        }), s = i[Math.floor(Math.random() * i.length)];
                        this.adShowArr[t] = s;
                    }
                    var r = this.listAd.getChildAt(t);
                    this.onItemRender(t, r);
                }
            }]);
            return Ct;
        }(zs.fgui.baseGeneric);
        Ct.typeDefine = ut;
        var Et = /* */ function (_zs$fgui$baseGeneric2) {
            _inherits2(Et, _zs$fgui$baseGeneric2);
            var _super53 = _createSuper2(Et);
            function Et(t) {
                var _this35;
                _classCallCheck2(this, Et);
                if (_this35 = _super53.call(this, t), _this35.autoScrollingDelay = 3e3, _this35.dragRecoverTime = 3,
                    _this35.checkScrollDistance = 30, _this35.autoScrollSpeed = 50, _this35.hidePos = -600,
                    t && t instanceof ot) {
                    _this35.content = t.content, _this35.adList = t.content.getChild("adList"), _this35.btnPopCtrl = t.content.btnPop.c1;
                    var _e51 = t.content.getChild("btnPop");
                    zs.proxy.Event.FGUIOnClick(_e51, _assertThisInitialized2(_this35), _this35.onBtnPopClick),
                        _this35.adList.itemRenderer = zs.Handler.create(_assertThisInitialized2(_this35), _this35.onAdListRender, null, !1),
                        zs.proxy.Event.FGUIOn(_this35.adList, zs.proxy.Event.FGUI_CLICK_ITEM, _assertThisInitialized2(_this35), _this35.onAdListItemClick),
                        zs.proxy.Event.FGUIOn(_this35.adList, zs.proxy.Event.FGUI_DRAG_START, _assertThisInitialized2(_this35), _this35.scrollStart),
                        zs.proxy.Event.FGUIOn(_this35.adList, zs.proxy.Event.FGUI_DRAG_END, _assertThisInitialized2(_this35), _this35.scrollJumpExport),
                        zs.proxy.Event.FGUIOn(_this35.adList, zs.proxy.Event.MOUSE_DOWN, _assertThisInitialized2(_this35), _this35.onDragStateBegin),
                        zs.proxy.Event.FGUIOn(_this35.adList, zs.proxy.Event.MOUSE_MOVE, _assertThisInitialized2(_this35), _this35.onDragStateChanged),
                        _this35.content.x = _this35.hidePos;
                }
                return _possibleConstructorReturn2(_this35);
            }
            _createClass2(Et, [{
                key: "dispose",
                value: function dispose() {
                    _get2(_getPrototypeOf2(Et.prototype), "dispose", this).call(this), zs.Timer.inst.clearAll(this),
                        zs.Tween.clearAll(this.content), clearTimeout(this.delayHandler);
                }
            }, {
                key: "onBtnPopClick",
                value: function onBtnPopClick() {
                    this.bHide = !this.bHide, this.updatePos();
                }
            }, {
                key: "updatePos",
                value: function updatePos() {
                    this.btnPopCtrl.selectedIndex = this.bHide ? 0 : 1, zs.Tween.to(this.content, {
                        x: this.bHide ? -600 : 0
                    }, 300);
                }
            }, {
                key: "updateUI",
                value: function updateUI() {
                    this.adData && (this.adList.numItems = this.adData.length);
                }
            }, {
                key: "onAdListRender",
                value: function onAdListRender(t, e) {
                    var i = this.adData[t];
                    i && (e.title.text = i.info.app_title, e.picture.icon = i.getIcon(i.img_index));
                }
            }, {
                key: "refreshSingleItem",
                value: function refreshSingleItem(t) {
                    var e = this.adData[t];
                    if (null != e.img_index) e.img_index++; else {
                        var i = Math.floor(Math.random() * this.adData.length);
                        if (this.adData.length > 1 && i == t) return this.refreshSingleItem(t);
                        var s = this.adData[i];
                        s && (this.adData[t] = s, this.adData[i] = e);
                    }
                    this.updateUI();
                }
            }, {
                key: "onAdListItemClick",
                value: function onAdListItemClick(t) {
                    var _this36 = this;
                    var e = this.adList.getChildIndex(t);
                    zs.td.justTrack("侧栏点击导出跳转", "侧栏点击导出跳转"), zs.exporter.utils.navigateToMiniProgram(this.adData[e], t.picture.icons).then(function () {
                        _this36.refreshSingleItem(e);
                    }).catch(function (t) {
                        return t;
                    });
                }
            }, {
                key: "scrollStart",
                value: function scrollStart() {
                    this.touchX = zs.proxy.Touch.touchX, this.touchY = zs.proxy.Touch.touchY;
                }
            }, {
                key: "scrollJumpExport",
                value: function scrollJumpExport() {
                    if (zs.exporter.utils.checkScroll(this.touchX, this.touchY, this.checkScrollDistance)) {
                        var t = j.zs_slide_jump_switch;
                        console.log("滑动跳转开关", t), t && this.randomJumpExport();
                    }
                }
            }, {
                key: "randomJumpExport",
                value: function randomJumpExport() {
                    var t = this.adData[Math.floor(Math.random() * this.adData.length)];
                    zs.td.justTrack("侧栏随机导出跳转", "侧栏随机导出跳转"), zs.exporter.utils.navigateToMiniProgram(t).then(function (t) {
                        return t;
                    }).catch(function (t) {
                        return t;
                    });
                }
            }, {
                key: "onDragStateBegin",
                value: function onDragStateBegin() {
                    this._readyDrag = !0;
                }
            }, {
                key: "onDragStateChanged",
                value: function onDragStateChanged() {
                    this._readyDrag && this._dragRecoverTime > 0 && (this._isAutoScrolling = !1, this._dragStopCount = 0),
                        this._readyDrag && (this._readyDrag = !1);
                }
            }, {
                key: "readyAutoScroll",
                value: function readyAutoScroll() {
                    zs.Timer.inst.frameLoop(1, this, this.onAutoScroll), this._isAutoScrolling = !0;
                }
            }, {
                key: "onAutoScroll",
                value: function onAutoScroll() {
                    if (this._isAutoScrolling) {
                        var _t56 = this._autoScrollSpeed * zs.Timer.inst.delta * .001 * (this._autoScrollForward ? 1 : -1), _e52 = this.adList.scrollPane;
                        _e52.setPosY(_t56 + this.adList.scrollPane.posY), _e52.percY >= 1 ? this._autoScrollForward = !1 : _e52.percY <= 0 && (this._autoScrollForward = !0);
                    } else this._dragStopCount += .001 * zs.Timer.inst.delta, this._dragStopCount > this._dragRecoverTime && (this._dragStopCount = 0,
                        this._isAutoScrolling = !0);
                }
            }, {
                key: "apply",
                value: function apply() {
                    var _this37 = this;
                    return this.view && (this.adList.numItems = 0, this.bHide = !0, zs.exporter.dataMgr.load().then(function (t) {
                        _this37.disposed || (_this37.adData = zs.utils.arrayDeepCopy(t), _this37._dragRecoverTime = _this37.dragRecoverTime,
                            _this37._autoScrollSpeed = _this37.autoScrollSpeed, _this37.updateUI(), zs.Timer.inst.clear(_this37, _this37.readyAutoScroll),
                            zs.Timer.inst.clear(_this37, _this37.onAutoScroll), zs.Timer.inst.once(_this37.autoScrollingDelay, _this37, _this37.readyAutoScroll));
                    }).catch(function (t) {
                        return t;
                    }), this.delayHandler = setTimeout(function () {
                        _this37.bHide = !1, _this37.updatePos();
                    }, 500)), this;
                }
            }, {
                key: "applyConfig",
                value: function applyConfig(t) {
                    return t && (null != t.scrolldelay && (this.autoScrollingDelay = t.scrolldelay),
                        null != t.scroll_delay && (this.autoScrollingDelay = t.scroll_delay), null != t.recovertime && (this.dragRecoverTime = t.recovertime),
                        null != t.recover_time && (this.dragRecoverTime = t.recover_time), null != t.scrolldistance && (this.checkScrollDistance = t.scrolldistance),
                        null != t.scroll_distance && (this.checkScrollDistance = t.scroll_distance), null != t.scrollspeed && (this.autoScrollSpeed = t.scrollspeed),
                        null != t.scroll_speed && (this.autoScrollSpeed = t.scroll_speed)), this.apply();
                }
            }]);
            return Et;
        }(zs.fgui.baseGeneric);
        Et.typeDefine = ot;
        var It = /* */ function (_zs$fgui$baseGeneric3) {
            _inherits2(It, _zs$fgui$baseGeneric3);
            var _super54 = _createSuper2(It);
            function It(t) {
                var _this38;
                _classCallCheck2(this, It);
                _this38 = _super54.call(this, t), _this38.posY = 80, t && t instanceof et && (_this38.desc = t.desc,
                    _this38.posY = 80, zs.proxy.Event.FGUIOnClick(t, _assertThisInitialized2(_this38), _this38.onMsgClick));
                return _this38;
            }
            _createClass2(It, [{
                key: "dispose",
                value: function dispose() {
                    _get2(_getPrototypeOf2(It.prototype), "dispose", this).call(this), zs.Tween.clearAll(this.view);
                }
            }, {
                key: "setTitle",
                value: function setTitle(t) {
                    return this.view.title = t || "", this;
                }
            }, {
                key: "setDesc",
                value: function setDesc(t) {
                    return t && this.desc ? this.desc.text = t : this.desc.text = "", this;
                }
            }, {
                key: "apply",
                value: function apply() {
                    var _this39 = this;
                    return this.tweenHide(), zs.exporter.dataMgr.load().then(function (t) {
                        var e = t;
                        _this39.adData = e[Math.floor(Math.random() * e.length)];
                        var i, s = _this39.adData && _this39.adData.info.app_title || "", r = It.nickList || [];
                        i = r.length > 0 ? r[Math.floor(Math.random() * r.length)] : "", s = " ".concat(s),
                            _this39.setTitle(i).setDesc(s).tweenShow();
                    }).catch(function (t) {
                        return t;
                    }), this;
                }
            }, {
                key: "applyConfig",
                value: function applyConfig(t) {
                    return t && (null != t.posy && (this.posY = t.posy), null != t.pos_y && (this.posY = t.pos_y),
                        t.event && (this.event = t.event)), this.apply();
                }
            }, {
                key: "tweenShow",
                value: function tweenShow() {
                    return It.soundShow && zs.proxy.playSound(It.soundShow), zs.Tween.clearAll(this.view),
                        this.view.y = -this.view.height, zs.Tween.to(this.view, {
                            y: this.posY
                        }, 200), this;
                }
            }, {
                key: "tweenHide",
                value: function tweenHide() {
                    return zs.Tween.clearAll(this.view), zs.Tween.to(this.view, {
                        y: -this.view.height
                    }, 200), this;
                }
            }, {
                key: "setCancelCallback",
                value: function setCancelCallback(t) {
                    return this.callback = t, this;
                }
            }, {
                key: "onMsgClick",
                value: function onMsgClick() {
                    var _this40 = this;
                    this.tweenHide(), zs.platform.async.navigateToOther({
                        appInfo: this.adData
                    }).then(function () {
                        zs.exporter.dataMgr.collectExport(_this40.adData);
                    }).catch(function () {
                        _this40.callback && _this40.callback.run(), _this40.event && zs.core.workflow.runEventConfig(_this40.event);
                    });
                }
            }]);
            return It;
        }(zs.fgui.baseGeneric);
        It.typeDefine = et;
        var Tt = /* */ function (_zs$fgui$baseGeneric4) {
            _inherits2(Tt, _zs$fgui$baseGeneric4);
            var _super55 = _createSuper2(Tt);
            function Tt(t) {
                var _this41;
                _classCallCheck2(this, Tt);
                _this41 = _super55.call(this, t), zs.proxy.Event.FGUIOnClick(t, _assertThisInitialized2(_this41), _this41.onClicked);
                return _this41;
            }
            _createClass2(Tt, [{
                key: "apply",
                value: function apply() {
                    return this;
                }
            }, {
                key: "applyConfig",
                value: function applyConfig(t) {
                    return t && (t.event && (this.event = t.event), null != t.width && (this.view.width = t.width),
                        null != t.height && (this.view.height = t.height)), this.apply();
                }
            }, {
                key: "onClicked",
                value: function onClicked() {
                    this.event && zs.core.workflow && zs.core.workflow.runEventConfig(this.event);
                }
            }]);
            return Tt;
        }(zs.fgui.baseGeneric);
        Tt.typeDefine = st;
        var Dt = /* */ function (_zs$fgui$baseGeneric5) {
            _inherits2(Dt, _zs$fgui$baseGeneric5);
            var _super56 = _createSuper2(Dt);
            function Dt(t) {
                var _this42;
                _classCallCheck2(this, Dt);
                _this42 = _super56.call(this, t), t && t instanceof it && (zs.proxy.Event.FGUIOnClick(t.challenge.btnNo, _assertThisInitialized2(_this42), _this42.onBtnNoClick),
                    zs.proxy.Event.FGUIOnClick(t.challenge.btnYes, _assertThisInitialized2(_this42), _this42.onBtnYesClick));
                return _this42;
            }
            _createClass2(Dt, [{
                key: "init",
                value: function init() {
                    _get2(_getPrototypeOf2(Dt.prototype), "init", this).call(this), zs.platform.sync.hideBanner();
                }
            }, {
                key: "setGameName",
                value: function setGameName(t) {
                    return t && this.view.challenge.lblGame ? this.view.challenge.lblGame.text = t : this.view.challenge.lblGame && (this.view.challenge.lblGame.text = ""),
                        this;
                }
            }, {
                key: "setPlayerName",
                value: function setPlayerName(t) {
                    return t && this.view.challenge.lblName ? this.view.challenge.lblName.text = t : this.view.challenge.lblName && (this.view.challenge.lblName.text = ""),
                        this;
                }
            }, {
                key: "setDesc",
                value: function setDesc(t) {
                    return t && this.view.challenge.lblDesc ? this.view.challenge.lblDesc.text = t : this.view.challenge.lblDesc && (this.view.challenge.lblDesc.text = ""),
                        this;
                }
            }, {
                key: "setGameIcon",
                value: function setGameIcon(t) {
                    return t && this.view.challenge.picture1 ? this.view.challenge.picture1.icon = t : this.view.challenge.picture1,
                        this;
                }
            }, {
                key: "apply",
                value: function apply() {
                    var _this43 = this;
                    return zs.exporter.dataMgr.load().then(function (t) {
                        var e = zs.utils.arrayDeepCopy(t);
                        _this43.adData = e[Math.floor(Math.random() * e.length)];
                        var i = _this43.adData && _this43.adData.info.app_title || "游戏", s = _this43.adData && _this43.adData.getIcon(_this43.adData.img_index), r = Dt.nickList || [], a = "神秘人";
                        r.length > 0 && (a = r[Math.floor(Math.random() * r.length)]);
                        var n = "好友“".concat(a, "”向您发起挑战：");
                        _this43.setPlayerName(a).setGameName(i).setGameIcon(s).setDesc(n);
                    }), this;
                }
            }, {
                key: "setCloseCallback",
                value: function setCloseCallback(t) {
                    return this.callback = t, this;
                }
            }, {
                key: "onBtnNoClick",
                value: function onBtnNoClick() {
                    this.callback && this.callback.run();
                }
            }, {
                key: "onBtnYesClick",
                value: function onBtnYesClick() {
                    var _this44 = this;
                    zs.platform.async.navigateToOther({
                        appInfo: this.adData
                    }).then(function () {
                        zs.exporter.dataMgr.collectExport(_this44.adData, _this44.view.challenge.picture1.icon);
                    }).catch(function (t) {
                        return t;
                    }), this.callback && this.callback.run();
                }
            }]);
            return Dt;
        }(zs.fgui.baseGeneric);
        Dt.typeDefine = it;
        var vt = /* */ function (_fgui$GComponent29) {
            _inherits2(vt, _fgui$GComponent29);
            var _super57 = _createSuper2(vt);
            function vt() {
                _classCallCheck2(this, vt);
                return _super57.apply(this, arguments);
            }
            _createClass2(vt, [{
                key: "onConstruct",
                value: function onConstruct() {
                    this.bar = this.getChild("bar"), this.btn_click = this.getChild("btn_click");
                }
            }], [{
                key: "createInstance",
                value: function createInstance() {
                    return fgui.UIPackage.createObject("knockEgg", "start_egg");
                }
            }]);
            return vt;
        }(fgui.GComponent);
        vt.URL = "ui://umsgti7bm8f80";
        var At = /* */ function (_zs$ui$EggKnock) {
            _inherits2(At, _zs$ui$EggKnock);
            var _super58 = _createSuper2(At);
            function At(t) {
                var _this45;
                _classCallCheck2(this, At);
                _this45 = _super58.call(this, t), _this45.btnSrcOffset = 0, _this45.btnDstOffset = 370,
                    _this45.checkCount = 0, t && t instanceof vt && (_this45._progressBar = t.bar, _this45._btnKnock = t.btn_click),
                    _this45.bannerTime = 0;
                return _this45;
            }
            _createClass2(At, [{
                key: "btnKnock",
                get: function get() {
                    return this._btnKnock;
                }
            }, {
                key: "updateProgress",
                value: function updateProgress(t) {
                    this._progressBar.value = 100 * t;
                }
            }, {
                key: "onBannerCheck",
                value: function onBannerCheck() {
                    if (this.checkCount % 10 == 0) {
                        !zs.platform.sync.hasBanner() && zs.platform.sync.updateBanner({
                            isWait: !0,
                            checkInit: !0
                        });
                    }
                    this.checkCount++;
                }
            }]);
            return At;
        }(zs.ui.EggKnock);
        At.typeDefine = vt;
        var Rt = /* */ function (_fgui$GButton4) {
            _inherits2(Rt, _fgui$GButton4);
            var _super59 = _createSuper2(Rt);
            function Rt() {
                _classCallCheck2(this, Rt);
                return _super59.apply(this, arguments);
            }
            _createClass2(Rt, [{
                key: "onConstruct",
                value: function onConstruct() {
                    this.btnExit = this.getChild("btnExit");
                }
            }], [{
                key: "createInstance",
                value: function createInstance() {
                    return fgui.UIPackage.createObject("knockEgg", "btn_egg");
                }
            }]);
            return Rt;
        }(fgui.GButton);
        Rt.URL = "ui://umsgti7bm8f87";
        var wt = /* */ function () {
            function wt() {
                _classCallCheck2(this, wt);
            }
            _createClass2(wt, null, [{
                key: "bindAll",
                value: function bindAll() {
                    fgui.UIObjectFactory.setExtension(vt.URL, vt), fgui.UIObjectFactory.setExtension(Rt.URL, Rt);
                }
            }]);
            return wt;
        }();
        var Nt = /* */ function (_zs$workflow) {
            _inherits2(Nt, _zs$workflow);
            var _super60 = _createSuper2(Nt);
            function Nt() {
                var _this46;
                _classCallCheck2(this, Nt);
                _this46 = _super60.apply(this, arguments), _this46.exporterPack = ["export/export", "export/knockEgg"],
                    _this46.bannerIgnoreList = ["PRODUCT_START.FULL_1", "PRODUCT_START.FULL_2", "PRODUCT_PLAY_END.FULL_1", "PRODUCT_PLAY_END.FULL_2"];
                return _this46;
            }
            _createClass2(Nt, [{
                key: "registe",
                value: function registe() {
                    _get2(_getPrototypeOf2(Nt.prototype), "registe", this).call(this), yt.bindAll(),
                        wt.bindAll(), zs.core.registeBase(Nt.exporterFull_1, St), zs.core.registeBase(Nt.exporterFull_2, Lt),
                        zs.core.registeBase(Nt.exporterCommonEgg, At), zs.core.registeBase(Nt.exporterSide, Et),
                        zs.core.registeBase(Nt.exporterKnock, Ct), zs.core.registeBase(Nt.exporterFakeExit, Tt),
                        zs.core.registeBase(Nt.exporterFakeMsg, It), zs.core.registeItem(Nt.exportItem1, K),
                        zs.core.registeItem(Nt.exportItem2, J), zs.core.registeItem(Nt.exportItem3, Q),
                        zs.core.registeItem(Nt.exportItem4, Z), zs.core.registeItem(Nt.exportItem5, $),
                        zs.core.registeItem(Nt.exportItem6, ct), zs.core.registeItem(Nt.exportItem7, nt),
                        zs.core.registeItem(Nt.exportItem8, dt), zs.core.registeItem(Nt.exportItem9, pt),
                        zs.core.registeItem(Nt.exportItem10, mt), zs.core.registeItem(Nt.exportItem11, gt),
                        zs.core.workflow.registeEvent(Nt.event_full_1, this, this.showFull1), zs.core.workflow.registeEvent(Nt.event_full_2, this, this.showFull2),
                        zs.core.workflow.registeEvent(Nt.event_start_video, this, this.onGameVideo), zs.core.workflow.registeEvent(Nt.event_fake_delay, this, this.fakeContinueDelay, 1e3),
                        zs.core.workflow.registeEvent(Nt.event_hide_full, this, this.hideWindowFull, !1),
                        zs.core.workflow.registeEvent(Nt.event_full_continue, this, this.onFullContinue),
                        zs.core.workflow.registeEvent(Nt.event_full_next, this, this.onFullNext), zs.core.workflow.registeEvent(Nt.event_product_value, this, function (t) {
                            return j[t];
                        }), zs.core.workflow.registeEvent(Nt.event_check_egg, this, zs.ui.EggKnock.checkEggOpen, !0),
                        zs.core.workflow.registeEvent(Nt.event_challenge_export, this, this.challengeExport),
                        It.soundShow = null, zs.exporter.utils.navigateErrorHandler = zs.Handler.create(this, function () {
                            zs.core.workflow.callEvent(Nt.event_full_1);
                        }, null, !1), zs.configs.load("fake_msg_nick", "fgui/export/nickname.json").then(function (t) {
                            It.nickList = t, Dt.nickList = t;
                        }).catch(function (t) {
                            return t;
                        });
                }
            }, {
                key: "onGameVideo",
                value: function onGameVideo() {
                    j.zs_start_game_video_switch ? zs.platform.async.playVideo().then(function () {
                        zs.core.workflow.childNext();
                    }).catch(function () {
                        zs.core.workflow.childNext();
                    }) : zs.core.workflow.childNext();
                }
            }, {
                key: "fakeContinueDelay",
                value: function fakeContinueDelay(t) {
                    return t;
                }
            }, {
                key: "onFullContinue",
                value: function onFullContinue() {
                    // zs.platform.sync.updateBanner({
                    //     isWait: !0,
                    //     checkInit: !0
                    // }), j.zs_banner_banner_time > 0 ? zs.Timer.inst.once(j.zs_banner_banner_time, this, this.delayShowBanner) : zs.platform.sync.showBanner();
                }
            }, {
                key: "delayShowBanner",
                value: function delayShowBanner() {
                    // zs.platform.sync.showBanner();
                }
            }, {
                key: "onFullNext",
                value: function onFullNext() {
                    // zs.Timer.inst.clear(this, this.delayShowBanner), zs.core.workflow.childNext();
                }
            }, {
                key: "hideWindowFull",
                value: function hideWindowFull(t) {
                    this.windowFull && this.windowFull.dispose(), this.windowFull = null, t && zs.core.workflow.childNext();
                }
            }, {
                key: "showFull1",
                value: function showFull1(t) {
                    // if (!(this.windowFull || zs.core.workflow.exportWindow.getBaseByKey("full_1") || zs.core.workflow.exportWindow.getBaseByKey("full_1_popup") || zs.core.workflow.exportWindow.getBaseByKey("full_2") || zs.core.workflow.exportWindow.getBaseByKey("full_2_popup"))) return this.windowFull = zs.fgui.window.create().attach(St, null, t ? "full_1" : "full_1_popup").scaleFit(zs.configs.gameCfg.designWidth, zs.configs.gameCfg.designHeight).fit().block(!0).update(zs.exporter.full, function (t) {
                    //     t.apply();
                    // }).show(), this.windowFull;
                    // zs.log.debug("全屏已经打开了，不能再开了");
                }
            }, {
                key: "showFull2",
                value: function showFull2(t) {
                    // if (!(this.windowFull || zs.core.workflow.exportWindow.getBaseByKey("full_1") || zs.core.workflow.exportWindow.getBaseByKey("full_1_popup") || zs.core.workflow.exportWindow.getBaseByKey("full_2") || zs.core.workflow.exportWindow.getBaseByKey("full_2_popup"))) return this.windowFull = zs.fgui.window.create().attach(Lt, null, t ? "full_2" : "full_2_popup").scaleFit(zs.configs.gameCfg.designWidth, zs.configs.gameCfg.designHeight).fit().block(!0).update(zs.exporter.full, function (t) {
                    //     t.apply();
                    // }).show(), this.windowFull;
                    // zs.log.debug("全屏已经打开了，不能再开了");
                }
            }, {
                key: "challengeExport",
                value: function challengeExport() {
                    // var _this47 = this;
                    // return this._challengeExport ? (this._challengeExport.view.visible = !0, this._challengeExport.apply(),
                    //     Nt.getPanel().setBase(this._challengeExport)) : Nt.showPanel(Dt).block(!0).update(Dt, function (t) {
                    //         _this47._challengeExport = t, t.setCloseCallback(zs.Handler.create(_this47, function () {
                    //             _this47.hideChallenge();
                    //         })).apply();
                    //     }).show(), Nt.getPanel().front();
                }
            }, {
                key: "hideChallenge",
                value: function hideChallenge() {
                    this._challengeExport && Nt.getPanel().detach(this._challengeExport), this._challengeExport = null;
                }
            }], [{
                key: "showPanel",
                value: function showPanel(t, e) {
                    // return zs.fgui.manager.show(!0, t, "Workflow_Export", e);
                }
            }, {
                key: "getPanel",
                value: function getPanel() {
                    // return zs.fgui.manager.get("Workflow_Export", !0);
                }
            }]);
            return Nt;
        }(zs.workflow);
        Nt.PRODUCT_START = "PRODUCT_START", Nt.PRODUCT_BEGIN = "PRODUCT_BEGIN", Nt.GAME_HOME = "GAME_HOME",
            Nt.PRODUCT_HOME_PLAY = "PRODUCT_HOME_PLAY", Nt.GAME_PLAY = "GAME_PLAY", Nt.PRODUCT_PLAY_END = "PRODUCT_PLAY_END",
            Nt.GAME_END = "GAME_END", Nt.PRODUCT_FINISH = "PRODUCT_FINISH", Nt.exporterFull_1 = "export_full_1",
            Nt.exporterFull_2 = "export_full_2", Nt.exporterCommonEgg = "export_common_egg",
            Nt.exporterSide = "export_side", Nt.exporterKnock = "export_knock", Nt.exporterFakeExit = "export_fake_exit",
            Nt.exporterFakeMsg = "export_fake_msg", Nt.exportItem1 = "export_item_1", Nt.exportItem2 = "export_item_2",
            Nt.exportItem3 = "export_item_3", Nt.exportItem4 = "export_item_4", Nt.exportItem5 = "export_item_5",
            Nt.exportItem6 = "export_item_6", Nt.exportItem7 = "export_item_7", Nt.exportItem8 = "export_item_8",
            Nt.exportItem9 = "export_item_9", Nt.exportItem10 = "export_item_10", Nt.exportItem11 = "export_item_11",
            Nt.event_full_1 = "event_full_1", Nt.event_full_2 = "event_full_2", Nt.event_start_video = "event_start_video",
            Nt.event_fake_delay = "event_fake_delay", Nt.event_hide_full = "event_hide_full",
            Nt.event_full_continue = "event_full_continue", Nt.event_full_next = "event_full_next",
            Nt.event_check_egg = "event_check_egg", Nt.event_product_value = "event_product_value",
            Nt.event_challenge_export = "event_challenge_export";
        var xt = /* */ function (_Laya$Script) {
            _inherits2(xt, _Laya$Script);
            var _super61 = _createSuper2(xt);
            function xt() {
                var _this48;
                _classCallCheck2(this, xt);
                _this48 = _super61.call(this), _this48.updateTimes = 0, _this48.isNeedLoad = !0,
                    _this48.init();
                return _this48;
            }
            _createClass2(xt, [{
                key: "initComplete",
                value: function initComplete() { }
            }, {
                key: "onUpdate",
                value: function onUpdate() {
                    C.battleState != a.RUNNING ? this.homeViewScript && this.homeViewScript.onUpdate() : this.playViewScript && this.playViewScript.onUpdate(),
                        H.inst.onUpdate(), this.updateTimes % 60 == 0 && this.slowTick(), this.updateTimes++,
                        this.playViewScript && this.playViewScript.overClick.onUpdate();
                }
            }, {
                key: "onLateUpdate",
                value: function onLateUpdate() { }
            }, {
                key: "slowTick",
                value: function slowTick() {
                    C.battleState == a.RUNNING && (C.game_times--, v.inst && v.inst.onSlowTick());
                }
            }, {
                key: "init",
                value: function init() {
                    return __awaiter(this, void 0, void 0, /* */ _regenerator.default.mark(function _callee11() {
                        var _this49 = this;
                        return _regenerator.default.wrap(function _callee11$(_context11) {
                            while (1) {
                                switch (_context11.prev = _context11.next) {
                                    case 0:
                                        zs.core.loadingPage = X, zs.log.Configs.logLevel = zs.log.Level.DEBUG, this.workflow = new Nt(),
                                            zs.core.workflow = this.workflow, zs.core.workflow.setFSM(Nt.GAME_PLAY, new zs.fsm().registe("PLAY", "RESULT").registe("RESULT", "PLAY").setDefault("PLAY")),
                                            zs.core.onFGUIBind = Laya.Handler.create(this, function () {
                                                u.bindAll();
                                            }), zs.core.onPrepare = Laya.Handler.create(this, function () {
                                                return __awaiter(_this49, void 0, void 0, /* */ _regenerator.default.mark(function _callee10() {
                                                    var t;
                                                    return _regenerator.default.wrap(function _callee10$(_context10) {
                                                        while (1) {
                                                            switch (_context10.prev = _context10.next) {
                                                                case 0:
                                                                    this.getData();
                                                                    t = C.level + 1;
                                                                    t > C.maxLevel && (t = 1, C.level = 0);
                                                                    _context10.next = 5;
                                                                    return zs.resource.load("3dres/Conventional/game_5.ls", zs.ResourceType.Scene3D);

                                                                case 5:
                                                                    T.PreloadPrefabs().then(function () {
                                                                        zs.core.readyFinish();
                                                                    }).then();

                                                                case 6:
                                                                case "end":
                                                                    return _context10.stop();
                                                            }
                                                        }
                                                    }, _callee10, this);
                                                }));
                                            }), this.registEvent(), zs.core.onWorkflow(Nt.GAME_PLAY + ".PREPARE", Laya.Handler.create(this, function () {
                                                console.log("Workflow ====== GAME_PREPARE");
                                            })), H.inst.getShopData(), zs.core.onWorkflow(Nt.GAME_PLAY + ".RESULT", Laya.Handler.create(this, function () {
                                                console.log("Workflow ====== GAME_RESULT"), H.inst.showResult();
                                            })), zs.core.onWorkflow(Nt.GAME_PLAY + ".PLAY", Laya.Handler.create(this, function () {
                                                console.log("Workflow ===== GAME_PLAY"), C.battleState = a.RUNNING
                                                    , _this49.loadingChangeWin && _this49.loadingChangeWin.hide()
                                                    , xt.homeView && xt.homeView.hide()
                                                    , xt.playView ? (xt.playView.show()
                                                        , _this49.playViewScript.setWindow()
                                                    ) :
                                                        xt.playView = zs.fgui.window.create().attach(v).fit().update(v, function (t) {
                                                            _this49.playViewScript = t, t.setController(), _this49.playViewScript.setWindow();
                                                        }).show();
                                            })), zs.core.onWorkflow(Nt.GAME_PLAY + ".LOADING", Laya.Handler.create(this, function () {
                                                console.log("Workflow ===== GAME_PLAY LOADING"), xt.homeView.hide();
                                            })), zs.core.onWorkflow(Nt.GAME_END, Laya.Handler.create(this, function () {
                                                console.log("Workflow ====== GAME_END"), _this49.getData();
                                                var t = C.level + 1;
                                                t > C.maxLevel && (t = 1, C.level = 0), _this49.isNeedLoad = !1,
                                                    zs.resource.load("3dres/Conventional/game_5.ls", zs.ResourceType.Scene3D).then(function () {
                                                        zs.core.workflow.next();
                                                    });
                                            })), zs.core.onWorkflow(Nt.GAME_HOME, Laya.Handler.create(this, function () {
                                                Laya.MouseManager.enabled = false;
                                                console.log("Workflow ====== GAME_HOME"), C.battleState = a.READY, xt.playView && xt.playView.hide(),
                                                    zs.scene.inst, zs.scene.inst && zs.scene.inst.current && zs.scene.inst.current.destroy(!0),
                                                    _this49.getData();
                                                var t = C.level + 1;
                                                t > C.maxLevel && (t = 1, C.level = 0), _this49.isNeedLoad = !0, C.loadSceneComplete = !1,
                                                    _this49.isNeedLoad ? zs.scene.inst.load("3dres/Conventional/game_5.ls", !0).then(function () {
                                                        T.prePlayEffect()
                                                            , H.inst
                                                            , H.inst.init(zs.scene.inst.current)
                                                            , C.manager = H.inst
                                                            , C.loadSceneComplete = !0;
                                                        Laya.MouseManager.enabled = true;
                                                    }) : (H.inst, H.inst.init(zs.scene.inst.current),
                                                        C.manager = H.inst, C.loadSceneComplete = !0,
                                                        Laya.MouseManager.enabled = true
                                                    ),
                                                    xt.homeView ? (xt.homeView.show(), _this49.homeViewScript.setWindow()) :
                                                        xt.homeView = zs.fgui.window.create().attach(G).update(G, function (t) {
                                                            _this49.homeViewScript = t, t.setWindow();
                                                        }).fit().show(), xt.resultView && xt.resultView.hide();
                                            })), zs.core.init(j);

                                    case 1:
                                    case "end":
                                        return _context11.stop();
                                }
                            }
                        }, _callee11, this);
                    }));
                }
            }, {
                key: "registEvent",
                value: function registEvent() {
                    Laya.stage.on(C.evt_saveData, this, this.saveData), Laya.stage.on(C.evt_getData, this, this.getData);
                }
            }, {
                key: "getData",
                value: function getData() {
                    H.inst.getShopData();
                }
            }, {
                key: "saveData",
                value: function saveData() {
                    H.inst.setShopData();
                }
            }]);
            return xt;
        }(Laya.Script);
        var Pt = Laya.Shader3D;
        var kt = /* */ function (_Laya$Material) {
            _inherits2(kt, _Laya$Material);
            var _super62 = _createSuper2(kt);
            function kt() {
                var _this50;
                _classCallCheck2(this, kt);
                _this50 = _super62.call(this), _this50.setShaderName("UVEffect"), _this50.alphaTest = !1,
                    _this50._shaderValues.setInt(kt.CULL, Laya.RenderState.CULL_NONE), _this50._shaderValues.setInt(kt.BLEND, Laya.RenderState.BLEND_ENABLE_ALL),
                    _this50._shaderValues.setInt(kt.BLENDSRC, Laya.RenderState.BLENDPARAM_SRC_ALPHA),
                    _this50._shaderValues.setBool(kt.DEPTH_WRITE, !1);
                return _this50;
            }
            _createClass2(kt, [{
                key: "clone",
                value: function clone() {
                    var t = new kt();
                    return this.cloneTo(t), t;
                }
            }, {
                key: "_MainTex",
                get: function get() {
                    return this._shaderValues.getTexture(kt.DIFFUSETEXTURE);
                },
                set: function set(t) {
                    t ? this._shaderValues.addDefine(kt.SHADERDEFINE_MAINTEXTURE) : this._shaderValues.removeDefine(kt.SHADERDEFINE_MAINTEXTURE),
                        this._shaderValues.setTexture(kt.DIFFUSETEXTURE, t);
                }
            }, {
                key: "_BlendTex",
                get: function get() {
                    return this._shaderValues.getTexture(kt.BLENDTEXTURE);
                },
                set: function set(t) {
                    t ? this._shaderValues.addDefine(kt.SHADERDEFINE_BLENDTEXTURE) : this._shaderValues.removeDefine(kt.SHADERDEFINE_BLENDTEXTURE),
                        this._shaderValues.setTexture(kt.BLENDTEXTURE, t);
                }
            }, {
                key: "_TintColor",
                get: function get() {
                    return this._shaderValues.getVector(kt.DIFFUSECOLOR);
                },
                set: function set(t) {
                    this._shaderValues.setVector(kt.DIFFUSECOLOR, t);
                }
            }, {
                key: "_BlendColor",
                get: function get() {
                    return this._shaderValues.getVector(kt.BLENDCOLOR);
                },
                set: function set(t) {
                    this._shaderValues.setVector(kt.BLENDCOLOR, t);
                }
            }, {
                key: "_DissolveColor",
                get: function get() {
                    return this._shaderValues.getVector(kt.DISSOLVECOLOR);
                },
                set: function set(t) {
                    this._shaderValues.setVector(kt.DISSOLVECOLOR, t);
                }
            }, {
                key: "_TillingX",
                get: function get() {
                    return this._shaderValues.getNumber(kt.TILLINGX);
                },
                set: function set(t) {
                    this._shaderValues.setNumber(kt.TILLINGX, t);
                }
            }, {
                key: "_TillingY",
                get: function get() {
                    return this._shaderValues.getNumber(kt.TILLINGY);
                },
                set: function set(t) {
                    this._shaderValues.setNumber(kt.TILLINGY, t);
                }
            }, {
                key: "_OffsetX",
                get: function get() {
                    return this._shaderValues.getNumber(kt.OFFSETX);
                },
                set: function set(t) {
                    this._shaderValues.setNumber(kt.OFFSETX, t);
                }
            }, {
                key: "_OffsetY",
                get: function get() {
                    return this._shaderValues.getNumber(kt.OFFSETY);
                },
                set: function set(t) {
                    this._shaderValues.setNumber(kt.OFFSETY, t);
                }
            }, {
                key: "_SpeedX",
                get: function get() {
                    return this._shaderValues.getNumber(kt.SPEEDX);
                },
                set: function set(t) {
                    this._shaderValues.setNumber(kt.SPEEDX, -t);
                }
            }, {
                key: "_SpeedY",
                get: function get() {
                    return this._shaderValues.getNumber(kt.SPEEDY);
                },
                set: function set(t) {
                    this._shaderValues.setNumber(kt.SPEEDY, -t);
                }
            }, {
                key: "_BlendTillingX",
                get: function get() {
                    return this._shaderValues.getNumber(kt.BLENDTILLINGX);
                },
                set: function set(t) {
                    this._shaderValues.setNumber(kt.BLENDTILLINGX, t);
                }
            }, {
                key: "_BlendTillingY",
                get: function get() {
                    return this._shaderValues.getNumber(kt.BLENDTILLINGY);
                },
                set: function set(t) {
                    this._shaderValues.setNumber(kt.BLENDTILLINGY, t);
                }
            }, {
                key: "_BlendOffsetX",
                get: function get() {
                    return this._shaderValues.getNumber(kt.BLENDOFFSETX);
                },
                set: function set(t) {
                    this._shaderValues.setNumber(kt.BLENDOFFSETX, t);
                }
            }, {
                key: "_BlendOffsetY",
                get: function get() {
                    return this._shaderValues.getNumber(kt.BLENDOFFSETY);
                },
                set: function set(t) {
                    this._shaderValues.setNumber(kt.BLENDOFFSETY, t);
                }
            }, {
                key: "_BlendSpeedX",
                get: function get() {
                    return this._shaderValues.getNumber(kt.BLENDSPEEDX);
                },
                set: function set(t) {
                    this._shaderValues.setNumber(kt.BLENDSPEEDX, -t);
                }
            }, {
                key: "_BlendSpeedY",
                get: function get() {
                    return this._shaderValues.getNumber(kt.BLENDSPEEDY);
                },
                set: function set(t) {
                    this._shaderValues.setNumber(kt.BLENDSPEEDY, -t);
                }
            }, {
                key: "_BlendPower",
                get: function get() {
                    return this._shaderValues.getNumber(kt.BLENDPOWER);
                },
                set: function set(t) {
                    this._shaderValues.setNumber(kt.BLENDPOWER, t);
                }
            }, {
                key: "_DissolvePower",
                get: function get() {
                    return this._shaderValues.getNumber(kt.DISSOLVEPOWER);
                },
                set: function set(t) {
                    this._shaderValues.setNumber(kt.DISSOLVEPOWER, t);
                }
            }, {
                key: "_DissolveFade",
                get: function get() {
                    return this._shaderValues.getNumber(kt.DISSOLVEFADE);
                },
                set: function set(t) {
                    this._shaderValues.setNumber(kt.DISSOLVEFADE, t);
                }
            }, {
                key: "_BlendMode",
                get: function get() {
                    var t = 0;
                    switch (this._shaderValues.getInt(kt.BLENDDST)) {
                        case Laya.RenderState.BLENDPARAM_ZERO:
                            t = 0;
                            break;

                        case Laya.RenderState.BLENDPARAM_ONE:
                            t = 1;
                            break;

                        case Laya.RenderState.BLENDPARAM_DST_COLOR:
                            t = 2;
                            break;

                        case Laya.RenderState.BLENDPARAM_SRC_COLOR:
                            t = 3;
                            break;

                        case Laya.RenderState.BLENDPARAM_ONE_MINUS_DST_COLOR:
                            t = 4;
                            break;

                        case Laya.RenderState.BLENDPARAM_SRC_ALPHA:
                            t = 5;
                            break;

                        case Laya.RenderState.BLENDPARAM_ONE_MINUS_SRC_COLOR:
                            t = 6;
                            break;

                        case Laya.RenderState.BLENDPARAM_DST_ALPHA:
                            t = 7;
                            break;

                        case Laya.RenderState.BLENDPARAM_ONE_MINUS_DST_ALPHA:
                            t = 8;
                            break;

                        case Laya.RenderState.BLENDPARAM_SRC_ALPHA_SATURATE:
                            t = 9;
                            break;

                        case Laya.RenderState.BLENDPARAM_ONE_MINUS_SRC_ALPHA:
                            t = 10;
                    }
                    return t;
                },
                set: function set(t) {
                    t < 1 ? this._shaderValues.setInt(kt.BLENDDST, Laya.RenderState.BLENDPARAM_ZERO) : t < 2 ? this._shaderValues.setInt(kt.BLENDDST, Laya.RenderState.BLENDPARAM_ONE) : t < 3 ? this._shaderValues.setInt(kt.BLENDDST, Laya.RenderState.BLENDPARAM_DST_COLOR) : t < 4 ? this._shaderValues.setInt(kt.BLENDDST, Laya.RenderState.BLENDPARAM_SRC_COLOR) : t < 5 ? this._shaderValues.setInt(kt.BLENDDST, Laya.RenderState.BLENDPARAM_ONE_MINUS_DST_COLOR) : t < 6 ? this._shaderValues.setInt(kt.BLENDDST, Laya.RenderState.BLENDPARAM_SRC_ALPHA) : t < 7 ? this._shaderValues.setInt(kt.BLENDDST, Laya.RenderState.BLENDPARAM_ONE_MINUS_SRC_COLOR) : t < 8 ? this._shaderValues.setInt(kt.BLENDDST, Laya.RenderState.BLENDPARAM_DST_ALPHA) : t < 9 ? this._shaderValues.setInt(kt.BLENDDST, Laya.RenderState.BLENDPARAM_ONE_MINUS_DST_ALPHA) : t < 10 ? this._shaderValues.setInt(kt.BLENDDST, Laya.RenderState.BLENDPARAM_SRC_ALPHA_SATURATE) : this._shaderValues.setInt(kt.BLENDDST, Laya.RenderState.BLENDPARAM_ONE_MINUS_SRC_ALPHA);
                }
            }], [{
                key: "init",
                value: function init() {
                    Laya.ClassUtils.regClass("Laya.UVEffect", kt);
                }
            }, {
                key: "clone",
                value: function clone(t) {
                    var e = new kt();
                    return e._MainTex = t._MainTex, e._BlendTex = t._BlendTex, e._TintColor = t._TintColor,
                        e._BlendColor = t._BlendColor, e._DissolveColor = t._DissolveColor, e._TillingX = t._TillingX,
                        e._TillingY = t._TillingY, e._OffsetX = t._OffsetX, e._OffsetY = t._OffsetY, e._SpeedX = t._SpeedX,
                        e._SpeedY = t._SpeedY, e._BlendTillingX = t._BlendTillingX, e._BlendTillingY = t._BlendTillingY,
                        e._BlendOffsetX = t._BlendOffsetX, e._BlendOffsetY = t._BlendOffsetY, e._BlendSpeedX = t._BlendSpeedX,
                        e._BlendSpeedY = t._BlendSpeedY, e._BlendPower = t._BlendPower, e._DissolvePower = t._DissolvePower,
                        e._DissolveFade = t._DissolveFade, e._BlendMode = t._BlendMode, e;
                }
            }]);
            return kt;
        }(Laya.Material);
        kt.DIFFUSETEXTURE = Pt.propertyNameToID("u_DiffuseTexture"), kt.BLENDTEXTURE = Pt.propertyNameToID("u_BlendTexture"),
            kt.DIFFUSECOLOR = Pt.propertyNameToID("u_DiffuseColor"), kt.BLENDCOLOR = Pt.propertyNameToID("u_BlendColor"),
            kt.DISSOLVECOLOR = Pt.propertyNameToID("u_DissolveColor"), kt.TILLINGX = Pt.propertyNameToID("u_TillingX"),
            kt.TILLINGY = Pt.propertyNameToID("u_TillingY"), kt.OFFSETX = Pt.propertyNameToID("u_OffsetX"),
            kt.OFFSETY = Pt.propertyNameToID("u_OffsetY"), kt.SPEEDX = Pt.propertyNameToID("u_SpeedX"),
            kt.SPEEDY = Pt.propertyNameToID("u_SpeedY"), kt.BLENDTILLINGX = Pt.propertyNameToID("u_BlendTillingX"),
            kt.BLENDTILLINGY = Pt.propertyNameToID("u_BlendTillingY"), kt.BLENDOFFSETX = Pt.propertyNameToID("u_BlendOffsetX"),
            kt.BLENDOFFSETY = Pt.propertyNameToID("u_BlendOffsetY"), kt.BLENDSPEEDX = Pt.propertyNameToID("u_BlendSpeedX"),
            kt.BLENDSPEEDY = Pt.propertyNameToID("u_BlendSpeedY"), kt.BLENDPOWER = Pt.propertyNameToID("u_BlendPower"),
            kt.DISSOLVEPOWER = Pt.propertyNameToID("u_DissolvePower"), kt.DISSOLVEFADE = Pt.propertyNameToID("u_DissolveFade"),
            kt.CULL = Pt.propertyNameToID("s_Cull"), kt.BLEND = Pt.propertyNameToID("s_Blend"),
            kt.BLENDSRC = Pt.propertyNameToID("s_BlendSrc"), kt.BLENDDST = Pt.propertyNameToID("s_BlendDst"),
            kt.DEPTH_WRITE = Pt.propertyNameToID("s_DepthWrite"), kt.SHADERDEFINE_MAINTEXTURE = Pt.getDefineByName("MAINTEXTURE"),
            kt.SHADERDEFINE_BLENDTEXTURE = Pt.getDefineByName("BLENDTEXTURE");
        var Mt = '#ifdef GL_FRAGMENT_PRECISION_HIGH\r\n\tprecision highp float;\r\n#else\r\n\tprecision mediump float;\r\n#endif\r\n\r\n#include "Lighting.glsl";\r\n\r\n#ifdef COLOR\r\n\tvarying vec4 v_Color;\r\n#endif\r\nvarying vec2 v_Texcoord0;\r\n\r\n#ifdef MAINTEXTURE\r\n\tuniform sampler2D u_DiffuseTexture;\r\n#endif\r\n\r\n#ifdef BLENDTEXTURE\r\n\tuniform sampler2D u_BlendTexture;\r\n\tuniform vec4 u_BlendColor;\r\n#endif\r\n\r\nuniform vec4 u_DiffuseColor;\r\n\r\nuniform float u_TillingX;\r\nuniform float u_TillingY;\r\nuniform float u_OffsetX;\r\nuniform float u_OffsetY;\r\nuniform float u_SpeedX;\r\nuniform float u_SpeedY;\r\nuniform float u_BlendTillingX;\r\nuniform float u_BlendTillingY;\r\nuniform float u_BlendOffsetX;\r\nuniform float u_BlendOffsetY;\r\nuniform float u_BlendSpeedX;\r\nuniform float u_BlendSpeedY;\r\nuniform float u_BlendPower;\r\nuniform float u_DissolvePower;\r\nuniform float u_DissolveFade;\r\nuniform vec4 u_DissolveColor;\r\nuniform float u_Time;\r\n\r\n#ifdef FOG\r\n\tuniform float u_FogStart;\r\n\tuniform float u_FogRange;\r\n\t#ifdef ADDTIVEFOG\r\n\t#else\r\n\t\tuniform vec3 u_FogColor;\r\n\t#endif\r\n#endif\r\n\r\nvoid main()\r\n{\r\n\r\n\tvec2 uv = v_Texcoord0 * vec2(u_TillingX, u_TillingY) + vec2(u_OffsetX, u_OffsetY) + vec2(u_SpeedX, u_SpeedY) * u_Time * 0.05;\r\n\t// // uv += vec2(u_OffsetX, u_OffsetY);\r\n\t// // uv += vec2(u_SpeedX, u_SpeedY) * u_Time * 0.05;\r\n\r\n\tvec4 color =  2.0 * u_DiffuseColor;\r\n\t#ifdef COLOR\r\n\t\tcolor *= v_Color;\r\n\t#endif\r\n\t#ifdef MAINTEXTURE\r\n\t\tcolor *= texture2D(u_DiffuseTexture, uv);\r\n\t#endif\r\n\r\n\tvec4 dissolveCol = vec4(1.0, 1.0, 1.0, 1.0);\r\n\r\n\t#ifdef BLENDTEXTURE\r\n\t\tvec2 blendUV = v_Texcoord0 * vec2(u_BlendTillingX, u_BlendTillingY) + vec2(u_BlendOffsetX, u_BlendOffsetY) + vec2(u_BlendSpeedX, u_BlendSpeedY) * u_Time * 0.05;\r\n\t\tvec4 blendColor = texture2D(u_BlendTexture, blendUV);\r\n\t\tdissolveCol = texture2D(u_BlendTexture, v_Texcoord0);\r\n\t\tcolor.rgb = mix(u_BlendColor.rgb * u_BlendPower, color.rgb, blendColor.r);\r\n\t#endif\r\n\r\n\tfloat fadeStart = u_DissolvePower - u_DissolveFade;\r\n\tfloat fadeLerp = clamp((dissolveCol.r - fadeStart) / u_DissolveFade ,0.0,1.0);\r\n\tcolor = mix(color, vec4(u_DissolveColor.rgb, 0.0), fadeLerp);\r\n\t\r\n\tgl_FragColor = color;\r\n\t// gl_FragColor = vec4(u_DissolveColor.rgb, 0.0);\r\n\t\r\n\t#ifdef FOG\r\n\t\tfloat lerpFact = clamp((1.0 / gl_FragCoord.w - u_FogStart) / u_FogRange, 0.0, 1.0);\r\n\t\t#ifdef ADDTIVEFOG\r\n\t\t\tgl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.0), lerpFact);\r\n\t\t#else\r\n\t\t\tgl_FragColor.rgb = mix(gl_FragColor.rgb, u_FogColor, lerpFact);\r\n\t\t#endif\r\n\t#endif\r\n}\r\n\r\n', Ot = '#include "Lighting.glsl";\r\n\r\nattribute vec4 a_Position;\r\nattribute vec4 a_Color;\r\nattribute vec2 a_Texcoord0;\r\n\r\n#ifdef GPU_INSTANCE\r\n\tattribute mat4 a_MvpMatrix;\r\n#else\r\n\tuniform mat4 u_MvpMatrix;\r\n#endif\r\n\r\n#ifdef COLOR\r\n\tvarying vec4 v_Color;\r\n#endif\r\nvarying vec2 v_Texcoord0;\r\n\r\n#ifdef BONE\r\n\tconst int c_MaxBoneCount = 24;\r\n\tattribute vec4 a_BoneIndices;\r\n\tattribute vec4 a_BoneWeights;\r\n\tuniform mat4 u_Bones[c_MaxBoneCount];\r\n#endif\r\n\r\nvoid main()\r\n{\r\n\tvec4 position;\r\n\t#ifdef BONE\r\n\t\tmat4 skinTransform = u_Bones[int(a_BoneIndices.x)] * a_BoneWeights.x;\r\n\t\tskinTransform += u_Bones[int(a_BoneIndices.y)] * a_BoneWeights.y;\r\n\t\tskinTransform += u_Bones[int(a_BoneIndices.z)] * a_BoneWeights.z;\r\n\t\tskinTransform += u_Bones[int(a_BoneIndices.w)] * a_BoneWeights.w;\r\n\t\tposition=skinTransform*a_Position;\r\n\t#else\r\n\t\tposition=a_Position;\r\n\t#endif\r\n\t#ifdef GPU_INSTANCE\r\n\t\tgl_Position = a_MvpMatrix * position;\r\n\t#else\r\n\t\tgl_Position = u_MvpMatrix * position;\r\n\t#endif\r\n\t\r\n\tv_Texcoord0 = a_Texcoord0;\r\n\t\t\r\n\t#ifdef COLOR\r\n\t\tv_Color = a_Color;\r\n\t#endif\r\n\tgl_Position=remapGLPositionZ(gl_Position);\r\n}', bt = Laya.Shader3D, Bt = Laya.SubShader, zt = Laya.VertexMesh;
        var Ut = /* */ function () {
            function Ut() {
                _classCallCheck2(this, Ut);
            }
            _createClass2(Ut, null, [{
                key: "init",
                value: function init(t) {
                    var e = {
                        a_Position: zt.MESH_POSITION0,
                        a_Texcoord0: zt.MESH_TEXTURECOORDINATE0,
                        a_BoneWeights: zt.MESH_BLENDWEIGHT0,
                        a_BoneIndices: zt.MESH_BLENDINDICES0,
                        a_MvpMatrix: zt.MESH_MVPMATRIX_ROW0
                    }, i = {
                        u_Bones: bt.PERIOD_CUSTOM,
                        u_DiffuseTexture: bt.PERIOD_MATERIAL,
                        u_BlendTexture: bt.PERIOD_MATERIAL,
                        u_DiffuseColor: bt.PERIOD_MATERIAL,
                        u_BlendColor: bt.PERIOD_MATERIAL,
                        u_DissolveColor: bt.PERIOD_MATERIAL,
                        u_AlphaTestValue: bt.PERIOD_MATERIAL,
                        u_MvpMatrix: bt.PERIOD_SPRITE,
                        u_TillingX: bt.PERIOD_MATERIAL,
                        u_TillingY: bt.PERIOD_MATERIAL,
                        u_OffsetX: bt.PERIOD_MATERIAL,
                        u_OffsetY: bt.PERIOD_MATERIAL,
                        u_SpeedX: bt.PERIOD_MATERIAL,
                        u_SpeedY: bt.PERIOD_MATERIAL,
                        u_BlendTillingX: bt.PERIOD_MATERIAL,
                        u_BlendTillingY: bt.PERIOD_MATERIAL,
                        u_BlendOffsetX: bt.PERIOD_MATERIAL,
                        u_BlendOffsetY: bt.PERIOD_MATERIAL,
                        u_BlendSpeedX: bt.PERIOD_MATERIAL,
                        u_BlendSpeedY: bt.PERIOD_MATERIAL,
                        u_BlendPower: bt.PERIOD_MATERIAL,
                        u_DissolvePower: bt.PERIOD_MATERIAL,
                        u_DissolveFade: bt.PERIOD_MATERIAL,
                        u_FogStart: bt.PERIOD_SCENE,
                        u_FogRange: bt.PERIOD_SCENE,
                        u_FogColor: bt.PERIOD_SCENE,
                        u_Time: bt.PERIOD_SCENE
                    }, s = {
                        s_Cull: bt.RENDER_STATE_CULL,
                        s_Blend: bt.RENDER_STATE_BLEND,
                        s_BlendSrc: bt.RENDER_STATE_BLEND_SRC,
                        s_BlendDst: bt.RENDER_STATE_BLEND_DST,
                        s_DepthTest: bt.RENDER_STATE_DEPTH_TEST,
                        s_DepthWrite: bt.RENDER_STATE_DEPTH_WRITE
                    }, r = bt.add("UVEffect", null, null, !0), a = new Bt(e, i);
                    r.addSubShader(a), a.addShaderPass(Ot, Mt, s);
                }
            }]);
            return Ut;
        }();
        var Vt = /* */ function (_Laya$Material2) {
            _inherits2(Vt, _Laya$Material2);
            var _super63 = _createSuper2(Vt);
            function Vt() {
                var _this51;
                _classCallCheck2(this, Vt);
                _this51 = _super63.call(this), _this51.setShaderName("Runner"), _this51.renderQueue = Laya.Material.RENDERQUEUE_OPAQUE;
                return _this51;
            }
            _createClass2(Vt, [{
                key: "_TillingX",
                get: function get() {
                    return this._shaderValues.getNumber(Vt.TILLINGX);
                },
                set: function set(t) {
                    this._shaderValues.setNumber(Vt.TILLINGX, t);
                }
            }, {
                key: "_TillingY",
                get: function get() {
                    return this._shaderValues.getNumber(Vt.TILLINGY);
                },
                set: function set(t) {
                    this._shaderValues.setNumber(Vt.TILLINGY, t);
                }
            }, {
                key: "_Color",
                get: function get() {
                    return this._shaderValues.getVector(Vt.DIFFUSECOLOR);
                },
                set: function set(t) {
                    this._shaderValues.setVector(Vt.DIFFUSECOLOR, t);
                }
            }, {
                key: "_SpecColor",
                get: function get() {
                    return this._shaderValues.getVector(Vt.SPECULARCOLOR);
                },
                set: function set(t) {
                    this._shaderValues.setVector(Vt.SPECULARCOLOR, t);
                }
            }, {
                key: "_RimColor",
                get: function get() {
                    return this._shaderValues.getVector(Vt.RIMCOLOR);
                },
                set: function set(t) {
                    this._shaderValues.setVector(Vt.RIMCOLOR, t);
                }
            }, {
                key: "_MainTex",
                get: function get() {
                    return this._shaderValues.getTexture(Vt.DIFFUSETEXTURE);
                },
                set: function set(t) {
                    t ? this._shaderValues.addDefine(Vt.SHADERDEFINE_DIFFUSEMAP) : this._shaderValues.removeDefine(Vt.SHADERDEFINE_DIFFUSEMAP),
                        this._shaderValues.setTexture(Vt.DIFFUSETEXTURE, t);
                }
            }, {
                key: "_NormalTex",
                get: function get() {
                    return this._shaderValues.getTexture(Vt.NORMALTEX);
                },
                set: function set(t) {
                    t ? this._shaderValues.addDefine(Vt.SHADERDEFINE_NORMALMAP) : this._shaderValues.removeDefine(Vt.SHADERDEFINE_NORMALMAP),
                        this._shaderValues.setTexture(Vt.NORMALTEX, t);
                }
            }, {
                key: "_Contrast",
                get: function get() {
                    return this._shaderValues.getNumber(Vt.CONTRAST);
                },
                set: function set(t) {
                    this._shaderValues.setNumber(Vt.CONTRAST, t);
                }
            }, {
                key: "_Specular",
                get: function get() {
                    return this._shaderValues.getNumber(Vt.SPECULAR);
                },
                set: function set(t) {
                    this._shaderValues.setNumber(Vt.SPECULAR, t);
                }
            }, {
                key: "_SpecSmooth",
                get: function get() {
                    return this._shaderValues.getNumber(Vt.SPECUALRSMOOTH);
                },
                set: function set(t) {
                    this._shaderValues.setNumber(Vt.SPECUALRSMOOTH, t);
                }
            }, {
                key: "_RimPower",
                get: function get() {
                    return this._shaderValues.getNumber(Vt.RIMPOWER);
                },
                set: function set(t) {
                    this._shaderValues.setNumber(Vt.RIMPOWER, t);
                }
            }, {
                key: "_ScalePower",
                get: function get() {
                    return this._shaderValues.getNumber(Vt.SCALEPOWER);
                },
                set: function set(t) {
                    this._shaderValues.setNumber(Vt.SCALEPOWER, t);
                }
            }, {
                key: "_MaskTex",
                get: function get() {
                    return this._shaderValues.getTexture(Vt.MASKTEXTURE);
                },
                set: function set(t) {
                    t ? this._shaderValues.addDefine(Vt.SHADERDEFINE_EMIISIONMAP) : this._shaderValues.removeDefine(Vt.SHADERDEFINE_EMIISIONMAP),
                        this._shaderValues.setTexture(Vt.MASKTEXTURE, t);
                }
            }, {
                key: "_EmissionTex",
                get: function get() {
                    return this._shaderValues.getTexture(Vt.EMISSIONTEXTURE);
                },
                set: function set(t) {
                    this._shaderValues.setTexture(Vt.EMISSIONTEXTURE, t);
                }
            }, {
                key: "_EmissionDirX",
                get: function get() {
                    return this._shaderValues.getNumber(Vt.EMISSIONDIRX);
                },
                set: function set(t) {
                    this._shaderValues.setNumber(Vt.EMISSIONDIRX, t);
                }
            }, {
                key: "_EmissionDirY",
                get: function get() {
                    return this._shaderValues.getNumber(Vt.EMISSIONDIRY);
                },
                set: function set(t) {
                    this._shaderValues.setNumber(Vt.EMISSIONDIRY, t);
                }
            }, {
                key: "_EmissionPower",
                get: function get() {
                    return this._shaderValues.getNumber(Vt.EMISSIONPOWER);
                },
                set: function set(t) {
                    this._shaderValues.setNumber(Vt.EMISSIONPOWER, t);
                }
            }, {
                key: "_EmissionColor",
                get: function get() {
                    return this._shaderValues.getVector(Vt.EMISSIONCOLOR);
                },
                set: function set(t) {
                    this._shaderValues.setVector(Vt.EMISSIONCOLOR, t);
                }
            }, {
                key: "_RampTex",
                get: function get() {
                    return this._shaderValues.getTexture(Vt.RAMPTEX);
                },
                set: function set(t) {
                    t ? this._shaderValues.addDefine(Vt.SHADERDEFINE_RAMPMAP) : this._shaderValues.removeDefine(Vt.SHADERDEFINE_RAMPMAP),
                        this._shaderValues.setTexture(Vt.RAMPTEX, t);
                }
            }, {
                key: "_XRayColor",
                get: function get() {
                    return this._shaderValues.getVector(Vt.XRAYCOLOR);
                },
                set: function set(t) {
                    this._shaderValues.setVector(Vt.XRAYCOLOR, t);
                }
            }, {
                key: "_XRayRange",
                get: function get() {
                    return this._shaderValues.getNumber(Vt.XRAYRANGE);
                },
                set: function set(t) {
                    this._shaderValues.setNumber(Vt.XRAYRANGE, t);
                }
            }, {
                key: "_Intensity",
                get: function get() {
                    return this._shaderValues.getNumber(Vt.INTENSITY);
                },
                set: function set(t) {
                    this._shaderValues.setNumber(Vt.INTENSITY, t);
                }
            }, {
                key: "_AlphaCull",
                get: function get() {
                    return this._shaderValues.getNumber(Vt.ALPHACULL);
                },
                set: function set(t) {
                    this._shaderValues.setNumber(Vt.ALPHACULL, t);
                }
            }, {
                key: "_OutLine",
                get: function get() {
                    return this._shaderValues.getNumber(Vt.OUTLINE);
                },
                set: function set(t) {
                    t && t > 0 ? this._shaderValues.addDefine(Vt.SHADERDEFINE_OUTLINE) : this._shaderValues.removeDefine(Vt.SHADERDEFINE_OUTLINE),
                        this._shaderValues.setNumber(Vt.OUTLINE, t);
                }
            }, {
                key: "_OutlineColor",
                get: function get() {
                    return this._shaderValues.getVector(Vt.OUTLINECOLOR);
                },
                set: function set(t) {
                    this._shaderValues.setVector(Vt.OUTLINECOLOR, t);
                }
            }, {
                key: "_BurnAmount",
                get: function get() {
                    return this._shaderValues.getNumber(Vt.BURNAMOUNT);
                },
                set: function set(t) {
                    this._shaderValues.setNumber(Vt.BURNAMOUNT, t);
                }
            }, {
                key: "_LineWidth",
                get: function get() {
                    return this._shaderValues.getNumber(Vt.LINEWIDTH);
                },
                set: function set(t) {
                    this._shaderValues.setNumber(Vt.LINEWIDTH, t);
                }
            }, {
                key: "_BurnFirstColor",
                get: function get() {
                    return this._shaderValues.getVector(Vt.BURNFIRSTCOLOR);
                },
                set: function set(t) {
                    this._shaderValues.setVector(Vt.BURNFIRSTCOLOR, t);
                }
            }, {
                key: "_BurnSecondColor",
                get: function get() {
                    return this._shaderValues.getVector(Vt.BURNSECONDCOLOR);
                },
                set: function set(t) {
                    this._shaderValues.setVector(Vt.BURNSECONDCOLOR, t);
                }
            }, {
                key: "_BurnMap",
                get: function get() {
                    return this._shaderValues.getTexture(Vt.BURNTEX);
                },
                set: function set(t) {
                    t ? this._shaderValues.addDefine(Vt.SHADERDEFINE_BURNEABLE) : this._shaderValues.removeDefine(Vt.SHADERDEFINE_BURNEABLE),
                        this._shaderValues.setTexture(Vt.BURNTEX, t);
                }
            }, {
                key: "_Alpha",
                get: function get() {
                    return this._shaderValues.getNumber(Vt.ALPHA);
                },
                set: function set(t) {
                    this._shaderValues.setNumber(Vt.ALPHA, t);
                }
            }], [{
                key: "init",
                value: function init() {
                    Laya.ClassUtils.regClass("Laya.Runner", Vt);
                }
            }, {
                key: "copy",
                value: function copy(t) {
                    var e = new Vt();
                    return e._Color = t._Color, e._SpecColor = t._SpecColor, e._RimColor = t._RimColor,
                        e._MainTex = t._MainTex, e._Contrast = t._Contrast, e._Specular = t._Specular, e._SpecSmooth = t._SpecSmooth,
                        e._RimPower = t._RimPower, e._ScalePower = t._ScalePower, e._MaskTex = t._MaskTex,
                        e._EmissionTex = t._EmissionTex, e._EmissionDirX = t._EmissionDirX, e._EmissionDirY = t._EmissionDirY,
                        e._EmissionPower = t._EmissionPower, e._EmissionColor = t._EmissionColor, e._RampTex = t._RampTex,
                        e._XRayColor = t._XRayColor, e._XRayRange = t._XRayRange, e._AlphaCull = t._AlphaCull,
                        e._NormalTex = t._NormalTex, e._OutLine = t._OutLine, e._OutlineColor = t._OutlineColor,
                        e._BurnAmount = t._BurnAmount, e._LineWidth = t._LineWidth, e._BurnFirstColor = t._BurnFirstColor,
                        e._BurnSecondColor = t._BurnSecondColor, e._BurnMap = t._BurnMap, e._Alpha = t._Alpha,
                        e;
                }
            }]);
            return Vt;
        }(Laya.Material);
        Vt.DIFFUSETEXTURE = Laya.Shader3D.propertyNameToID("u_DiffuseTexture"), Vt.DIFFUSECOLOR = Laya.Shader3D.propertyNameToID("u_DiffuseColor"),
            Vt.TILLINGX = Laya.Shader3D.propertyNameToID("u_TillingX"), Vt.TILLINGY = Laya.Shader3D.propertyNameToID("u_TillingY"),
            Vt.SPECULARCOLOR = Laya.Shader3D.propertyNameToID("u_SpecularColor"), Vt.RIMCOLOR = Laya.Shader3D.propertyNameToID("u_RimColor"),
            Vt.CONTRAST = Laya.Shader3D.propertyNameToID("u_Contrast"), Vt.SPECULAR = Laya.Shader3D.propertyNameToID("u_Specular"),
            Vt.SPECUALRSMOOTH = Laya.Shader3D.propertyNameToID("u_SpecularSmooth"), Vt.RIMPOWER = Laya.Shader3D.propertyNameToID("u_RimPower"),
            Vt.SCALEPOWER = Laya.Shader3D.propertyNameToID("u_ScalePower"), Vt.RAMPTEX = Laya.Shader3D.propertyNameToID("u_RampTex"),
            Vt.XRAYCOLOR = Laya.Shader3D.propertyNameToID("u_XRayColor"), Vt.XRAYRANGE = Laya.Shader3D.propertyNameToID("u_XRayRange"),
            Vt.INTENSITY = Laya.Shader3D.propertyNameToID("u_Intensity"), Vt.ALPHACULL = Laya.Shader3D.propertyNameToID("u_AlphaCull"),
            Vt.ALPHA = Laya.Shader3D.propertyNameToID("u_Alpha"), Vt.MASKTEXTURE = Laya.Shader3D.propertyNameToID("u_MaskTex"),
            Vt.EMISSIONTEXTURE = Laya.Shader3D.propertyNameToID("u_EmissionTex"), Vt.EMISSIONDIRX = Laya.Shader3D.propertyNameToID("u_EmissionDirX"),
            Vt.EMISSIONDIRY = Laya.Shader3D.propertyNameToID("u_EmissionDirY"), Vt.EMISSIONPOWER = Laya.Shader3D.propertyNameToID("u_EmissionPower"),
            Vt.EMISSIONCOLOR = Laya.Shader3D.propertyNameToID("u_EmissionColor"), Vt.NORMALTEX = Laya.Shader3D.propertyNameToID("u_NormalTexture"),
            Vt.OUTLINE = Laya.Shader3D.propertyNameToID("u_OutLine"), Vt.OUTLINECOLOR = Laya.Shader3D.propertyNameToID("u_OutlineColor"),
            Vt.BURNAMOUNT = Laya.Shader3D.propertyNameToID("u_BurnAmount"), Vt.LINEWIDTH = Laya.Shader3D.propertyNameToID("u_LineWidth"),
            Vt.BURNFIRSTCOLOR = Laya.Shader3D.propertyNameToID("u_BurnFirstColor"), Vt.BURNSECONDCOLOR = Laya.Shader3D.propertyNameToID("u_BurnSecondColor"),
            Vt.BURNTEX = Laya.Shader3D.propertyNameToID("u_BurnMap"), Vt.SHADERDEFINE_DIFFUSEMAP = Laya.Shader3D.getDefineByName("DIFFUSEMAP"),
            Vt.SHADERDEFINE_EMIISIONMAP = Laya.Shader3D.getDefineByName("EMISSIONMAP"), Vt.SHADERDEFINE_RAMPMAP = Laya.Shader3D.getDefineByName("RAMPMAP"),
            Vt.SHADERDEFINE_NORMALMAP = Laya.Shader3D.getDefineByName("NORMALMAP"), Vt.SHADERDEFINE_OUTLINE = Laya.Shader3D.getDefineByName("OUTLINE"),
            Vt.SHADERDEFINE_BURNEABLE = Laya.Shader3D.getDefineByName("BURNEABLE");
        var Ft = '#ifdef GL_FRAGMENT_PRECISION_HIGH\r\n\tprecision highp float;\r\n\tprecision highp int;\r\n#else\r\n\tprecision mediump float;\r\n\tprecision mediump int;\r\n#endif\r\n\r\n#include "Lighting.glsl";\r\n#include "Shadow.glsl"\r\n\r\nuniform vec4 u_DiffuseColor;\r\nuniform vec4 u_SpecularColor;\r\nuniform vec4 u_RimColor;\r\nuniform float u_Contrast;\r\nuniform float u_Specular;\r\nuniform float u_SpecularSmooth;\r\nuniform float u_RimPower;\r\n// uniform float u_RampRange;\r\nuniform float u_Intensity;\r\nuniform float u_AlphaCull;\r\nuniform float u_Alpha;\r\n\r\n// #if defined(COLOR)\r\n// \tvarying vec4 v_Color;\r\n// #endif\r\n\r\n#ifdef DIFFUSEMAP\r\n    uniform sampler2D u_DiffuseTexture;\r\n#endif\r\n\r\n#if defined(DIFFUSEMAP) || defined(EMISSIONMAP) ||((defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))&&(defined(SPECULARMAP)||defined(NORMALMAP)))\r\n\tvarying vec2 v_Texcoord0;\r\n#endif\r\n\r\nvarying vec3 v_Normal;\r\n#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n\tvarying vec3 v_ViewDir; \r\n\r\n\tuniform vec3 u_MaterialSpecular;\r\n\tuniform float u_Shininess;\r\n\r\n\t#ifdef LEGACYSINGLELIGHTING\r\n\t\t#ifdef DIRECTIONLIGHT\r\n\t\t\tuniform DirectionLight u_DirectionLight;\r\n\t\t#endif\r\n\t\t#ifdef POINTLIGHT\r\n\t\t\tuniform PointLight u_PointLight;\r\n\t\t#endif\r\n\t\t#ifdef SPOTLIGHT\r\n\t\t\tuniform SpotLight u_SpotLight;\r\n\t\t#endif\r\n\t#else\r\n\t\tuniform mat4 u_View;\r\n\t\tuniform vec4 u_ProjectionParams;\r\n\t\tuniform vec4 u_Viewport;\r\n\t\tuniform int u_DirationLightCount;\r\n\t\tuniform DirectionLight u_SunLight;\r\n\t\tuniform sampler2D u_LightBuffer;\r\n\t\tuniform sampler2D u_LightClusterBuffer;\r\n\t#endif\r\n\r\n\t#ifdef SPECULARMAP \r\n\t\tuniform sampler2D u_SpecularTexture;\r\n\t#endif\r\n#endif\r\n\r\n#ifdef NORMALMAP \r\n\tuniform sampler2D u_NormalTexture;\r\n\tvarying vec3 v_Tangent;\r\n\tvarying vec3 v_Binormal;\r\n#endif\r\n\r\n#ifdef EMISSIONMAP\r\n\tuniform float u_Time;\r\n\tuniform sampler2D u_MaskTex;\r\n\tuniform sampler2D u_EmissionTex;\r\n\tuniform float u_EmissionDirX;\r\n\tuniform float u_EmissionDirY;\r\n\tuniform float u_EmissionPower;\r\n\tuniform vec4 u_EmissionColor;\r\n#endif\r\n\r\n#ifdef BURNEABLE\r\n\tuniform sampler2D u_BurnMap;\r\n\tuniform float u_BurnAmount;\r\n\tuniform float u_LineWidth;\r\n\tuniform vec4 u_BurnFirstColor;\r\n\tuniform vec4 u_BurnSecondColor;\r\n#endif\r\n\r\n#ifdef FOG\r\n\tuniform float u_FogStart;\r\n\tuniform float u_FogRange;\r\n\tuniform vec3 u_FogColor;\r\n#endif\r\n\r\n#if defined(POINTLIGHT)||defined(SPOTLIGHT)||(defined(CALCULATE_SHADOWS)&&defined(SHADOW_CASCADE))||defined(CALCULATE_SPOTSHADOWS)\r\n\tvarying vec3 v_PositionWorld;\r\n#endif\r\n\r\n#ifdef RAMPMAP\r\n\tuniform sampler2D u_RampTex;\r\n#endif\r\n\r\n#include "GlobalIllumination.glsl";//"GlobalIllumination.glsl use uniform should at front of this\r\n\r\n#if defined(CALCULATE_SHADOWS)&&!defined(SHADOW_CASCADE)\r\n\tvarying vec4 v_ShadowCoord;\r\n#endif\r\n\r\nvoid main() {\r\n\tvec3 burnColor;\r\n\t#ifdef BURNEABLE\r\n\t\tburnColor = texture2D(u_BurnMap, v_Texcoord0).rgb;\r\n\t\tif (burnColor.r <= u_BurnAmount) {\r\n\t\t\tdiscard;\r\n\t\t}\r\n\t#endif\r\n    vec4 baseColor = u_DiffuseColor;\r\n    #ifdef DIFFUSEMAP\r\n\t\tvec4 difTexColor=texture2D(u_DiffuseTexture, v_Texcoord0);\r\n\t\tbaseColor=baseColor*difTexColor;\r\n\t#endif\r\n\tif (baseColor.a <= u_AlphaCull) {\r\n\t\tdiscard;\r\n\t}\r\n\tbaseColor*=u_Intensity;\r\n\r\n    vec3 normal;//light and SH maybe use normal\r\n\t#if defined(NORMALMAP)\r\n\t\tvec3 normalMapSample = texture2D(u_NormalTexture, v_Texcoord0).rgb;\r\n\t\tnormal = normalize(NormalSampleToWorldSpace(normalMapSample, v_Normal, v_Tangent,v_Binormal));\r\n\t#else\r\n\t\tnormal = normalize(v_Normal);\r\n\t#endif\r\n\r\n    LayaGIInput giInput;\r\n\tvec3 globalDiffuse=layaGIBase(giInput,1.0,normal);\r\n\r\n    vec3 lightDir;\r\n\tvec3 lightColor;\r\n\t#if defined(DIRECTIONLIGHT)\r\n\t\t#ifdef LEGACYSINGLELIGHTING\r\n      \t\tlightDir = u_DirectionLight.direction;\r\n      \t\tlightColor = u_DirectionLight.color;\r\n   \t\t#else\r\n      \t\tlightDir = u_SunLight.direction;\r\n      \t\tlightColor = u_SunLight.color;\r\n    \t#endif\r\n\t#else\r\n\t\tlightDir = normalize(vec3(1.0, 1.0, 1.0));\r\n\t\tlightColor = vec3(1.0, 1.0, 1.0);\r\n\t#endif\r\n\tlightDir = -lightDir;\r\n\r\n    vec3 viewDir;\r\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n\t\tviewDir = normalize(v_ViewDir);\r\n\t#else\r\n\t\tviewDir = normalize(vec3(1.0, 1.0, 1.0));\r\n\t#endif\r\n\r\n\tvec3 halfDir = normalize(lightDir + viewDir);\r\n\r\n    float ndl = max(0.001, dot(normal, lightDir));\r\n\tfloat ndh = max(0.001, dot(normal, halfDir));\r\n\tfloat ndv = max(0.001, dot(normal, viewDir));\r\n\r\n    float diff = ndl * u_Contrast + (1.0 - u_Contrast);\r\n    float spec = pow(ndh, u_Specular * 128.0);\r\n\tspec = smoothstep(0.5 - u_SpecularSmooth * 0.5, 0.5 + u_SpecularSmooth * 0.5, spec);\r\n    vec3 specular = u_SpecularColor.rgb * spec;\r\n\r\n    float rim = (1.0 - ndv) * ndl;\r\n    vec3 rimColor = u_RimColor.rgb * u_RimPower * rim;\r\n\r\n\tfloat atten = 1.0;\r\n\r\n\t#ifdef LEGACYSINGLELIGHTING\r\n\t\t#ifdef DIRECTIONLIGHT\r\n\t\t\t#ifdef CALCULATE_SHADOWS\r\n\t\t\t\t#ifdef SHADOW_CASCADE\r\n\t\t\t\t\tvec4 shadowCoord = getShadowCoord(vec4(v_PositionWorld,1.0));\r\n\t\t\t\t#else\r\n\t\t\t\t\tvec4 shadowCoord = v_ShadowCoord;\r\n\t\t\t\t#endif\r\n\t\t\t\tatten=sampleShadowmap(shadowCoord);\r\n\t\t\t#endif\r\n\t\t#endif\r\n\t#else\r\n\t\t#ifdef DIRECTIONLIGHT\r\n\t\t\tfor (int i = 0; i < MAX_LIGHT_COUNT; i++) \r\n\t\t\t{\r\n\t\t\t\tif(i >= u_DirationLightCount)\r\n\t\t\t\t\tbreak;\r\n\t\t\t\tDirectionLight directionLight = getDirectionLight(u_LightBuffer,i);\r\n\t\t\t\t#ifdef CALCULATE_SHADOWS\r\n\t\t\t\t\tif(i == 0)\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\t#ifdef SHADOW_CASCADE\r\n\t\t\t\t\t\t\tvec4 shadowCoord = getShadowCoord(vec4(v_PositionWorld,1.0));\r\n\t\t\t\t\t\t#else\r\n\t\t\t\t\t\t\tvec4 shadowCoord = v_ShadowCoord;\r\n\t\t\t\t\t\t#endif\r\n\t\t\t\t\t\tatten *= sampleShadowmap(shadowCoord);\r\n\t\t\t\t\t}\r\n\t\t\t\t#endif\r\n\t\t\t}\r\n\t\t#endif\r\n\t#endif\r\n\t\r\n\tvec3 finalCol;\r\n\t#ifdef RAMPMAP\r\n\t\tvec4 colRamp = texture2D(u_RampTex, vec2(clamp(diff , 0.0, 1.0), 0.5));\r\n\t\tfinalCol = globalDiffuse * baseColor.rgb + (baseColor.rgb * lightColor + rimColor) * colRamp.rgb * atten + specular;\r\n\t#else\r\n\t\tfinalCol = globalDiffuse * baseColor.rgb + (baseColor.rgb * lightColor + rimColor) * diff * atten + specular;\r\n\t#endif\r\n\r\n\t#ifdef BURNEABLE\r\n\t\tfloat t = 1.0 - smoothstep(0.0, u_LineWidth, burnColor.r - u_BurnAmount);\r\n\t\tvec3 burnCol = mix(u_BurnFirstColor.rgb, u_BurnSecondColor.rgb, t);\r\n\t\tfloat powNum = 5.0;\r\n\t\tburnCol = vec3(pow(burnCol.r, powNum), pow(burnCol.g, powNum), pow(burnCol.b, powNum));\r\n\t\tfinalCol = mix(finalCol, burnCol, t * step(0.0001, u_BurnAmount));\r\n\t#endif\r\n\r\n\t#ifdef EMISSIONMAP\r\n\t\tvec4 maskCol = texture2D(u_MaskTex, v_Texcoord0);\r\n\t\tvec4 emissionCol = texture2D(u_EmissionTex, v_Texcoord0);\r\n\t\tvec4 emissionOffsetCol = texture2D(u_MaskTex, v_Texcoord0 + vec2(-u_EmissionDirX, u_EmissionDirY) * u_Time * 0.05);\r\n\t\temissionCol.rgb = emissionCol.rgb * u_EmissionPower * (1.0 - emissionOffsetCol.g);\r\n\t\temissionCol.rgb = mix(emissionCol.rgb, emissionCol.rgb * u_EmissionColor.rgb, (1.0 - maskCol.b));\r\n\t\tfinalCol = finalCol * (1.0 - maskCol.r) + emissionCol.rgb * maskCol.r;\r\n\t#endif\r\n\r\n\tgl_FragColor.rgb = finalCol;\r\n\tgl_FragColor.a = u_Alpha;\r\n\r\n\t#ifdef FOG\r\n\t\tfloat lerpFact=clamp((1.0/gl_FragCoord.w-u_FogStart)/u_FogRange,0.0,1.0);\r\n\t\tgl_FragColor.rgb=mix(gl_FragColor.rgb,u_FogColor,lerpFact);\r\n\t#endif\r\n}', Ht = '#include "Lighting.glsl";\r\n#include "Shadow.glsl";\r\n\r\nattribute vec4 a_Position;\r\n\r\n#ifdef GPU_INSTANCE\r\n\tattribute mat4 a_MvpMatrix;\r\n#else\r\n\tuniform mat4 u_MvpMatrix;\r\n#endif\r\n\r\n#if defined(DIFFUSEMAP)||defined(EMISSIONMAP)||((defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))&&(defined(SPECULARMAP)||defined(NORMALMAP)))||(defined(LIGHTMAP)&&defined(UV))\r\n\tattribute vec2 a_Texcoord0;\r\n\tvarying vec2 v_Texcoord0;\r\n#endif\r\n\r\n#if defined(LIGHTMAP)&&defined(UV1)\r\n\tattribute vec2 a_Texcoord1;\r\n#endif\r\n\r\n#ifdef LIGHTMAP\r\n\tuniform vec4 u_LightmapScaleOffset;\r\n\tvarying vec2 v_LightMapUV;\r\n#endif\r\n\r\n// #ifdef COLOR\r\n// \tattribute vec4 a_Color;\r\n// \tvarying vec4 v_Color;\r\n// #endif\r\n\r\n#ifdef BONE\r\n\tconst int c_MaxBoneCount = 24;\r\n\tattribute vec4 a_BoneIndices;\r\n\tattribute vec4 a_BoneWeights;\r\n\tuniform mat4 u_Bones[c_MaxBoneCount];\r\n#endif\r\n\r\nattribute vec3 a_Normal;\r\nvarying vec3 v_Normal; \r\n\r\n#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n\tuniform vec3 u_CameraPos;\r\n\tvarying vec3 v_ViewDir; \r\n#endif\r\n\r\n#if defined(NORMALMAP)\r\n\tattribute vec4 a_Tangent0;\r\n\tvarying vec3 v_Tangent;\r\n\tvarying vec3 v_Binormal;\r\n#endif\r\n\r\n#ifdef GPU_INSTANCE\r\n\tattribute mat4 a_WorldMat;\r\n#else\r\n\tuniform mat4 u_WorldMat;\r\n#endif\r\n\r\n#if defined(POINTLIGHT)||defined(SPOTLIGHT)||(defined(CALCULATE_SHADOWS)&&defined(SHADOW_CASCADE))||defined(CALCULATE_SPOTSHADOWS)\r\n\tvarying vec3 v_PositionWorld;\r\n#endif\r\n\r\n#if defined(CALCULATE_SHADOWS)&&!defined(SHADOW_CASCADE)\r\n\tvarying vec4 v_ShadowCoord;\r\n#endif\r\n\r\n#ifdef CALCULATE_SPOTSHADOWS\r\n\tvarying vec4 v_SpotShadowCoord;\r\n#endif\r\n\r\n#ifdef TILINGOFFSET\r\n\tuniform vec4 u_TilingOffset;\r\n#endif\r\n\r\nuniform float u_TillingX;\r\nuniform float u_TillingY;\r\n\r\nvoid main()\r\n{\r\n\tvec4 position;\r\n\r\n\t#ifdef BONE\r\n\t\tmat4 skinTransform = u_Bones[int(a_BoneIndices.x)] * a_BoneWeights.x;\r\n\t\tskinTransform += u_Bones[int(a_BoneIndices.y)] * a_BoneWeights.y;\r\n\t\tskinTransform += u_Bones[int(a_BoneIndices.z)] * a_BoneWeights.z;\r\n\t\tskinTransform += u_Bones[int(a_BoneIndices.w)] * a_BoneWeights.w;\r\n\t\tposition=skinTransform*a_Position;\r\n\t#else\r\n\t\tposition=a_Position;\r\n\t#endif\r\n\t#ifdef GPU_INSTANCE\r\n\t\tgl_Position = a_MvpMatrix * position;\r\n\t#else\r\n\t\tgl_Position = u_MvpMatrix * position;\r\n\t#endif\r\n\t\r\n\tmat4 worldMat;\r\n\t#ifdef GPU_INSTANCE\r\n\t\tworldMat = a_WorldMat;\r\n\t#else\r\n\t\tworldMat = u_WorldMat;\r\n\t#endif\r\n\r\n\tmat3 worldInvMat;\r\n\t#ifdef BONE\r\n\t\tworldInvMat=INVERSE_MAT(mat3(worldMat*skinTransform));\r\n\t#else\r\n\t\tworldInvMat=INVERSE_MAT(mat3(worldMat));\r\n\t#endif  \r\n\tv_Normal=normalize(a_Normal*worldInvMat);\r\n\t#if defined(NORMALMAP)\r\n\t\tv_Tangent=normalize(a_Tangent0.xyz*worldInvMat);\r\n\t\tv_Binormal=cross(v_Normal,v_Tangent)*a_Tangent0.w;\r\n\t#endif\r\n\r\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)||(defined(CALCULATE_SHADOWS)&&defined(SHADOW_CASCADE))||defined(CALCULATE_SPOTSHADOWS)\r\n\t\tvec3 positionWS=(worldMat*position).xyz;\r\n\t\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n\t\t\tv_ViewDir = u_CameraPos-positionWS;\r\n\t\t#endif\r\n\t\t#if defined(POINTLIGHT)||defined(SPOTLIGHT)||(defined(CALCULATE_SHADOWS)&&defined(SHADOW_CASCADE))||defined(CALCULATE_SPOTSHADOWS)\r\n\t\t\tv_PositionWorld = positionWS;\r\n\t\t#endif\r\n\t#endif\r\n\r\n\t#if defined(DIFFUSEMAP)||defined(EMISSIONMAP)||((defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))&&(defined(SPECULARMAP)||defined(NORMALMAP)))\r\n\t\t#ifdef TILINGOFFSET\r\n\t\t\tv_Texcoord0=TransformUV(a_Texcoord0,u_TilingOffset);\r\n\t\t#else\r\n\t\t\tv_Texcoord0=a_Texcoord0;\r\n\t\t#endif\r\n\t\tv_Texcoord0 = v_Texcoord0 * vec2(u_TillingX, u_TillingY);\r\n\t#endif\r\n\r\n\t#ifdef LIGHTMAP\r\n\t\t#ifdef UV1\r\n\t\t\tv_LightMapUV=vec2(a_Texcoord1.x,1.0-a_Texcoord1.y)*u_LightmapScaleOffset.xy+u_LightmapScaleOffset.zw;\r\n\t\t#else\r\n\t\t\tv_LightMapUV=vec2(a_Texcoord0.x,1.0-a_Texcoord0.y)*u_LightmapScaleOffset.xy+u_LightmapScaleOffset.zw;\r\n\t\t#endif \r\n\t\tv_LightMapUV.y=1.0-v_LightMapUV.y;\r\n\t#endif\r\n\r\n\t// #if defined(COLOR)\r\n\t// \tv_Color=a_Color;\r\n\t// #endif\r\n\r\n\t#if defined(CALCULATE_SHADOWS)&&!defined(SHADOW_CASCADE)\r\n\t\tv_ShadowCoord =getShadowCoord(vec4(positionWS,1.0));\r\n\t#endif\r\n\r\n\t#ifdef CALCULATE_SPOTSHADOWS\r\n\t\tv_SpotShadowCoord = u_SpotViewProjectMatrix*vec4(positionWS,1.0);\r\n\t#endif\r\n\r\n\tgl_Position=remapGLPositionZ(gl_Position);\r\n}', Gt = Laya.Shader3D, Wt = Laya.SubShader, Yt = Laya.VertexMesh;
        var Xt = /* */ function () {
            function Xt() {
                _classCallCheck2(this, Xt);
            }
            _createClass2(Xt, null, [{
                key: "init",
                value: function init() {
                    var t = {
                        a_Position: Yt.MESH_POSITION0,
                        a_Color: Yt.MESH_COLOR0,
                        a_Normal: Yt.MESH_NORMAL0,
                        a_Texcoord0: Yt.MESH_TEXTURECOORDINATE0,
                        a_Texcoord1: Yt.MESH_TEXTURECOORDINATE1,
                        a_BoneWeights: Yt.MESH_BLENDWEIGHT0,
                        a_BoneIndices: Yt.MESH_BLENDINDICES0,
                        a_Tangent0: Yt.MESH_TANGENT0,
                        a_MvpMatrix: Yt.MESH_MVPMATRIX_ROW0,
                        a_WorldMat: Yt.MESH_WORLDMATRIX_ROW0
                    }, e = {
                        u_Bones: Gt.PERIOD_CUSTOM,
                        u_WorldMat: Gt.PERIOD_SPRITE,
                        u_MvpMatrix: Gt.PERIOD_SPRITE,
                        u_Projection: Gt.PERIOD_CAMERA,
                        u_LightmapScaleOffset: Gt.PERIOD_SPRITE,
                        u_LightMap: Gt.PERIOD_SPRITE,
                        u_LightMapDirection: Gt.PERIOD_SPRITE,
                        u_CameraPos: Gt.PERIOD_CAMERA,
                        u_Viewport: Gt.PERIOD_CAMERA,
                        u_ProjectionParams: Gt.PERIOD_CAMERA,
                        u_View: Gt.PERIOD_CAMERA,
                        u_ViewProjection: Gt.PERIOD_CAMERA,
                        u_ReflectTexture: Gt.PERIOD_SCENE,
                        u_ReflectIntensity: Gt.PERIOD_SCENE,
                        u_FogStart: Gt.PERIOD_SCENE,
                        u_FogRange: Gt.PERIOD_SCENE,
                        u_FogColor: Gt.PERIOD_SCENE,
                        u_DirationLightCount: Gt.PERIOD_SCENE,
                        u_LightBuffer: Gt.PERIOD_SCENE,
                        u_LightClusterBuffer: Gt.PERIOD_SCENE,
                        u_AmbientColor: Gt.PERIOD_SCENE,
                        u_ShadowBias: Gt.PERIOD_SCENE,
                        u_ShadowLightDirection: Gt.PERIOD_SCENE,
                        u_ShadowMap: Gt.PERIOD_SCENE,
                        u_ShadowParams: Gt.PERIOD_SCENE,
                        u_ShadowSplitSpheres: Gt.PERIOD_SCENE,
                        u_ShadowMatrices: Gt.PERIOD_SCENE,
                        u_ShadowMapSize: Gt.PERIOD_SCENE,
                        u_Time: Gt.PERIOD_SCENE,
                        u_AmbientSHAr: Gt.PERIOD_SCENE,
                        u_AmbientSHAg: Gt.PERIOD_SCENE,
                        u_AmbientSHAb: Gt.PERIOD_SCENE,
                        u_AmbientSHBr: Gt.PERIOD_SCENE,
                        u_AmbientSHBg: Gt.PERIOD_SCENE,
                        u_AmbientSHBb: Gt.PERIOD_SCENE,
                        u_AmbientSHC: Gt.PERIOD_SCENE,
                        "u_DirectionLight.color": Gt.PERIOD_SCENE,
                        "u_DirectionLight.direction": Gt.PERIOD_SCENE,
                        "u_SunLight.color": Gt.PERIOD_SCENE,
                        "u_SunLight.direction": Gt.PERIOD_SCENE,
                        "u_PointLight.position": Gt.PERIOD_SCENE,
                        "u_PointLight.range": Gt.PERIOD_SCENE,
                        "u_PointLight.color": Gt.PERIOD_SCENE,
                        "u_SpotLight.position": Gt.PERIOD_SCENE,
                        "u_SpotLight.direction": Gt.PERIOD_SCENE,
                        "u_SpotLight.range": Gt.PERIOD_SCENE,
                        "u_SpotLight.spot": Gt.PERIOD_SCENE,
                        "u_SpotLight.color": Gt.PERIOD_SCENE,
                        u_DiffuseTexture: Gt.PERIOD_MATERIAL,
                        u_DiffuseColor: Gt.PERIOD_MATERIAL,
                        u_TillingX: Gt.PERIOD_MATERIAL,
                        u_TillingY: Gt.PERIOD_MATERIAL,
                        u_SpecularColor: Gt.PERIOD_MATERIAL,
                        u_RimColor: Gt.PERIOD_MATERIAL,
                        u_Contrast: Gt.PERIOD_MATERIAL,
                        u_Specular: Gt.PERIOD_MATERIAL,
                        u_SpecularSmooth: Gt.PERIOD_MATERIAL,
                        u_RimPower: Gt.PERIOD_MATERIAL,
                        u_ScalePower: Gt.PERIOD_MATERIAL,
                        u_MaskTex: Gt.PERIOD_MATERIAL,
                        u_EmissionTex: Gt.PERIOD_MATERIAL,
                        u_EmissionDirX: Gt.PERIOD_MATERIAL,
                        u_EmissionDirY: Gt.PERIOD_MATERIAL,
                        u_EmissionPower: Gt.PERIOD_MATERIAL,
                        u_EmissionColor: Gt.PERIOD_MATERIAL,
                        u_RampTex: Gt.PERIOD_MATERIAL,
                        u_XRayColor: Gt.PERIOD_MATERIAL,
                        u_XRayRange: Gt.PERIOD_MATERIAL,
                        u_Intensity: Gt.PERIOD_MATERIAL,
                        u_AlphaCull: Gt.PERIOD_MATERIAL,
                        u_Alpha: Gt.PERIOD_MATERIAL,
                        u_NormalTexture: Gt.PERIOD_MATERIAL,
                        u_OutLine: Gt.PERIOD_MATERIAL,
                        u_OutlineColor: Gt.PERIOD_MATERIAL,
                        u_BurnAmount: Gt.PERIOD_MATERIAL,
                        u_LineWidth: Gt.PERIOD_MATERIAL,
                        u_BurnFirstColor: Gt.PERIOD_MATERIAL,
                        u_BurnSecondColor: Gt.PERIOD_MATERIAL,
                        u_BurnMap: Gt.PERIOD_MATERIAL
                    }, i = {
                        s_Cull: Gt.RENDER_STATE_CULL,
                        s_Blend: Gt.RENDER_STATE_BLEND,
                        s_BlendSrc: Gt.RENDER_STATE_BLEND_SRC,
                        s_BlendDst: Gt.RENDER_STATE_BLEND_DST,
                        s_DepthTest: Gt.RENDER_STATE_DEPTH_TEST,
                        s_DepthWrite: Gt.RENDER_STATE_DEPTH_WRITE
                    }, s = Gt.add("Runner", null, null, !0), r = new Wt(t, e);
                    s.addSubShader(r);
                    var a = r.addShaderPass(Ht, Ft, i, "Forward");
                    a.renderState.blend = Laya.RenderState.BLEND_ENABLE_ALL, a.renderState.srcBlend = Laya.RenderState.BLENDPARAM_SRC_ALPHA,
                        a.renderState.dstBlend = Laya.RenderState.BLENDPARAM_ONE_MINUS_SRC_ALPHA;
                    r.addShaderPass(this.MeshBlinnPhongShadowCasterVS, this.MeshBlinnPhongShadowCasterPS, i, "ShadowCaster");
                }
            }]);
            return Xt;
        }();
        Xt.MeshBlinnPhongShadowCasterPS = '#ifdef GL_FRAGMENT_PRECISION_HIGH\r\n\tprecision highp float;\r\n\tprecision highp int;\r\n#else\r\n\tprecision mediump float;\r\n\tprecision mediump int;\r\n#endif\r\n\r\n#include "ShadowCasterFS.glsl"\r\n\r\nvoid main()\r\n{\r\n\tgl_FragColor=shadowCasterFragment();\r\n}',
            Xt.MeshBlinnPhongShadowCasterVS = '#include "ShadowCasterVS.glsl"\r\n\r\nvoid main()\r\n{\r\n\tvec4 positionCS =  shadowCasterVertex();\r\n\tgl_Position=remapGLPositionZ(positionCS);\r\n}';
        new (/* */ function () {
            function _class() {
                _classCallCheck2(this, _class);
                window.Laya3D ? Laya3D.init(r.width, r.height) : Laya.init(r.width, r.height, Laya.WebGL),
                    Laya.stage.scaleMode = r.scaleMode, Laya.stage.screenMode = r.screenMode, Laya.stage.alignV = r.alignV,
                    Laya.stage.alignH = r.alignH, Laya.URL.exportSceneToJson = r.exportSceneToJson;
                Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
            }
            _createClass2(_class, [{
                key: "onVersionLoaded",
                value: function onVersionLoaded() {
                    Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
                }
            }, {
                key: "onConfigLoaded",
                value: function onConfigLoaded() {
                    kt.init(), Ut.init(), Vt.init(), Xt.init(), Laya.stage.addComponent(xt);
                }
            }]);
            return _class;
        }())();
    }();
}()