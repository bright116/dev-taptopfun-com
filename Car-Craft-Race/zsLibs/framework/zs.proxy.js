!function () {
    var _inherits2 = require("../../runtime/helpers/inherits");

    var _createSuper2 = require("../../runtime/helpers/createSuper");

    var _createClass2 = require("../../runtime/helpers/createClass");

    var _classCallCheck2 = require("../../runtime/helpers/classCallCheck");

    window.zs = window.zs || {}, window.zs.proxy = window.zs.proxy || {}, function (a) {
        "use strict";
        var e = function e() {
            _classCallCheck2(this, e);
        };
        e.gameCfgPath = "config/gameCfg.json", e.porductCfgPath = "config/productCfg.json",
            e.uiCfgPath = "config/uiCfg.json";
        var t = /* */ function () {
            function t() {
                _classCallCheck2(this, t);
            }
            _createClass2(t, null, [{
                key: "FGUIEvent",
                value: function FGUIEvent(a, e) {
                    return zs.Handler.create(a, e, null, !1);
                }
            }, {
                key: "FGUIOnClick",
                value: function FGUIOnClick(a, e, _t) {
                    a.onClick(e, _t);
                }
            }, {
                key: "FGUIOffClick",
                value: function FGUIOffClick(a, e, _t2) {
                    a.offClick(e, _t2);
                }
            }, {
                key: "FGUIOn",
                value: function FGUIOn(a, e, _t3, s) {
                    a.on(e, _t3, s);
                }
            }, {
                key: "FGUIOff",
                value: function FGUIOff(a, e, _t4, s) {
                    a.off(e, _t4, s);
                }
            }, {
                key: "FGUIButtonTouchBegin",
                value: function FGUIButtonTouchBegin(a) {
                    a.on(Laya.Event.MOUSE_DOWN, a, a.__mousedown);
                }
            }]);
            return t;
        }();
        t.MOUSE_DOWN = Laya.Event.MOUSE_DOWN, t.MOUSE_MOVE = Laya.Event.MOUSE_MOVE, t.FGUI_CLICK_ITEM = fairygui.Events.CLICK_ITEM,
            t.FGUI_DRAG_START = fairygui.Events.DRAG_START, t.FGUI_DRAG_END = fairygui.Events.DRAG_END;
        a.Configs = e, a.LocalStorage = /* */ function () {
            function _class() {
                _classCallCheck2(this, _class);
            }
            _createClass2(_class, null, [{
                key: "getItem",
                value: function getItem(a) {
                    return Laya.LocalStorage.getItem(a);
                }
            }, {
                key: "setItem",
                value: function setItem(a, e) {
                    Laya.LocalStorage.setItem(a, e);
                }
            }]);
            return _class;
        }(), a.Event = t, a.Touch = /* */ function () {
            function _class2() {
                _classCallCheck2(this, _class2);
            }
            _createClass2(_class2, null, [{
                key: "touchX",
                get: function get() {
                    return Laya.stage.mouseX;
                }
            }, {
                key: "touchY",
                get: function get() {
                    return Laya.stage.mouseY;
                }
            }]);
            return _class2;
        }(), a.Tween = /* */ function () {
            function _class3() {
                _classCallCheck2(this, _class3);
            }
            _createClass2(_class3, null, [{
                key: "to",
                value: function to(a, e, t) {
                    var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                    var i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                    var r = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
                    var n = null;
                    switch (s) {
                        case "linearNone":
                            n = Laya.Ease.linearNone;
                            break;

                        case "linearIn":
                            n = Laya.Ease.linearIn;
                            break;

                        case "linearInOut":
                            n = Laya.Ease.linearInOut;
                            break;

                        case "linearOut":
                            n = Laya.Ease.linearOut;
                            break;

                        case "bounceIn":
                            n = Laya.Ease.bounceIn;
                            break;

                        case "bounceInOut":
                            n = Laya.Ease.bounceInOut;
                            break;

                        case "bounceOut":
                            n = Laya.Ease.bounceOut;
                            break;

                        case "backIn":
                            n = Laya.Ease.backIn;
                            break;

                        case "backInOut":
                            n = Laya.Ease.backInOut;
                            break;

                        case "backOut":
                            n = Laya.Ease.backOut;
                            break;

                        case "elasticIn":
                            n = Laya.Ease.elasticIn;
                            break;

                        case "elasticInOut":
                            n = Laya.Ease.elasticInOut;
                            break;

                        case "elasticOut":
                            n = Laya.Ease.elasticOut;
                            break;

                        case "strongIn":
                            n = Laya.Ease.strongIn;
                            break;

                        case "strongInOut":
                            n = Laya.Ease.strongInOut;
                            break;

                        case "strongOut":
                            n = Laya.Ease.strongOut;
                            break;

                        case "sineInOut":
                            n = Laya.Ease.sineInOut;
                            break;

                        case "sineIn":
                            n = Laya.Ease.sineIn;
                            break;

                        case "sineOut":
                            n = Laya.Ease.sineOut;
                            break;

                        case "quintIn":
                            n = Laya.Ease.quintIn;
                            break;

                        case "quintInOut":
                            n = Laya.Ease.quintInOut;
                            break;

                        case "quintOut":
                            n = Laya.Ease.quintOut;
                            break;

                        case "quartIn":
                            n = Laya.Ease.quartIn;
                            break;

                        case "quartInOut":
                            n = Laya.Ease.quartInOut;
                            break;

                        case "quartOut":
                            n = Laya.Ease.quartOut;
                            break;

                        case "cubicIn":
                            n = Laya.Ease.cubicIn;
                            break;

                        case "cubicInOut":
                            n = Laya.Ease.cubicInOut;
                            break;

                        case "cubicOut":
                            n = Laya.Ease.cubicOut;
                            break;

                        case "quadIn":
                            n = Laya.Ease.quadIn;
                            break;

                        case "quadInOut":
                            n = Laya.Ease.quadInOut;
                            break;

                        case "quadOut":
                            n = Laya.Ease.quadOut;
                            break;

                        case "expoIn":
                            n = Laya.Ease.expoIn;
                            break;

                        case "expoInOut":
                            n = Laya.Ease.expoInOut;
                            break;

                        case "expoOut":
                            n = Laya.Ease.expoOut;
                            break;

                        case "circIn":
                            n = Laya.Ease.circIn;
                            break;

                        case "circInOut":
                            n = Laya.Ease.circInOut;
                            break;

                        case "circOut":
                            n = Laya.Ease.circOut;
                    }
                    return Laya.Tween.to(a, e, t, n, i, r, !1, !0, !0, !0);
                }
            }, {
                key: "clearAll",
                value: function clearAll(a) {
                    Laya.Tween.clearAll(a);
                }
            }]);
            return _class3;
        }(), a.Loader = /* */ function () {
            function _class4() {
                _classCallCheck2(this, _class4);
            }
            _createClass2(_class4, null, [{
                key: "getRes",
                value: function getRes(a) {
                    return Laya.loader.getRes(a);
                }
            }, {
                key: "loadScene",
                value: function loadScene(a, e) {
                    Laya.Scene.load(a, e);
                }
            }, {
                key: "loadScene3D",
                value: function loadScene3D(a, e) {
                    Laya.Scene3D.load(a, e);
                }
            }, {
                key: "loadSprite3D",
                value: function loadSprite3D(a, e) {
                    Laya.Sprite3D.load(a, e);
                }
            }, {
                key: "load",
                value: function load(a, e, t) {
                    t ? Laya.loader.load(a, e, null, null, 1, null, null, !0) : Laya.loader.load(a, e);
                }
            }]);
            return _class4;
        }(), a.NativeLoading = /* */ function (_Laya$Script) {
            _inherits2(_class5, _Laya$Script);
            var _super = _createSuper2(_class5);
            function _class5() {
                var _this;
                _classCallCheck2(this, _class5);
                _this = _super.apply(this, arguments), _this.progressTime = .01, _this.progressCount = 0,
                    _this.current = 0, _this.progress = 0;
                return _this;
            }
            _createClass2(_class5, [{
                key: "init",
                value: function init() {
                    this.updateProgress(0);
                }
            }, {
                key: "updateProgress",
                value: function updateProgress(a) { }
            }, {
                key: "run",
                value: function run(a) {
                    if (this.progress = a, this.current < this.progress) {
                        this.progressCount += .001 * zs.Timer.inst.delta;
                        var _a = Math.round(this.progressCount / this.progressTime);
                        this.progressCount -= _a * this.progressTime, this.current + _a >= this.progress ? this.current = this.progress : this.current = this.current + _a,
                            this.updateProgress(this.current);
                    } else if (this.progress >= 100) return !0;
                    return !1;
                }
            }], [{
                key: "preload",
                value: function preload() {
                    return Promise(function (a, e) {
                        a();
                    });
                }
            }, {
                key: "make",
                value: function make() {
                    return null;
                }
            }]);
            return _class5;
        }(Laya.Script), a.UIScene = /* */ function () {
            function _class6() {
                _classCallCheck2(this, _class6);
            }
            _createClass2(_class6, null, [{
                key: "list",
                get: function get() {
                    return null == this._list && (this._list = []), this._list;
                }
            }, {
                key: "init",
                value: function init() {
                    this.scene = Laya.stage.addChild(new Laya.Scene3D()), this.camera = this.scene.addChild(new Laya.Camera(0, .1, 100)),
                        this.camera.clearFlag = Laya.CameraClearFlags.DepthOnly, this.camera.clearColor = new Laya.Vector4(0, 0, 0, 0),
                        this.camera.transform.position = new Laya.Vector3(0, 0, 3),
                        this.camera.transform.rotation = new Laya.Quaternion(),
                        this.camera.enableRender = !1, this.light = this.scene.addChild(new Laya.DirectionLight()),
                        this.light.color = new Laya.Vector3(1, 1, 1), this.light.transform.worldMatrix.setForward(new Laya.Vector3(1, -1, 0));
                }
            }, {
                key: "sync",
                value: function sync(a) {
                    this.scene || this.init(), a instanceof Laya.Camera ? (this.camera.clearFlag = a.clearFlag,
                        this.camera.clearColor = a.clearColor, this.camera.cullingMask = a.cullingMask,
                        this.camera.aspectRatio = a.aspectRatio, this.camera.nearPlane = a.nearPlane, this.camera.farPlane = a.farPlane,
                        this.camera.fieldOfView = a.fieldOfView, this.camera.orthographic = a.orthographic,
                        this.camera.orthographicVerticalSize = a.orthographicVerticalSize) : a instanceof Laya.DirectionLight && (this.light.transform.rotation = a.transform.rotation,
                            this.light.color = a.color, this.light.intensity = a.intensity);
                }
            }, {
                key: "resetCamera",
                value: function resetCamera() {
                    this.scene || this.init(), this.camera.clearFlag = Laya.CameraClearFlags.DepthOnly,
                        this.camera.clearColor = new Laya.Vector4(0, 0, 0, 0), this.camera.aspectRatio = 0,
                        this.camera.nearPlane = .1, this.camera.farPlane = 100, this.camera.fieldOfView = 60,
                        this.camera.orthographic = !1, this.camera.orthographicVerticalSize = 10, this.camera.addAllLayers(),
                        this.camera.transform.position = new Laya.Vector3(0, 0, 3),
                        this.camera.transform.rotation = new Laya.Quaternion();
                }
            }, {
                key: "resetLight",
                value: function resetLight() {
                    this.scene || this.init(), this.light.transform.worldMatrix.setForward(new Laya.Vector3(1, -1, 0)),
                        this.light.color = new Laya.Vector3(1, 1, 1), this.light.intensity = 1;
                }
            }, {
                key: "add",
                value: function add(a, e, t) {
                    return this.scene || this.init(), this.scene.addChild(a), this.list.push(a), a.transform.position = e || new Laya.Vector3(),
                        a.transform.rotationEuler = t || new Laya.Vector3(), this.camera.enableRender = !0,
                        a;
                }
            }, {
                key: "cloneAdd",
                value: function cloneAdd(a, e, t) {
                    return this.add(a.clone(), e, t);
                }
            }, {
                key: "clear",
                value: function clear() {
                    if (!(null == this.list || this.list.length <= 0)) {
                        for (var _a2 = 0, _e = this.list.length; _a2 < _e; _a2++) {
                            this.list[_a2].removeSelf();
                        }
                        this._list = [], this.camera && (this.camera.enableRender = !1);
                    }
                }
            }, {
                key: "removeAt",
                value: function removeAt(a) {
                    null == this.list || this.list.length <= 0 || a >= this.list.length || (this.list[a].removeSelf(),
                        this.list.splice(a, 1), this.list.length <= 0 && this.camera && (this.camera.enableRender = !1));
                }
            }, {
                key: "remove",
                value: function remove(a) {
                    if (!(null == this.list || this.list.length <= 0)) {
                        for (var _e2 = 0, _t5 = this.list.length; _e2 < _t5; _e2++) {
                            if (this.list[_e2].id == a.id) {
                                this.list[_e2].removeSelf(), this.list.splice(_e2, 1);
                                break;
                            }
                        }
                        this.list.length <= 0 && this.camera && (this.camera.enableRender = !1);
                    }
                }
            }]);
            return _class6;
        }(), a.init = function () { }, a.playSound = function (a) {
            Laya.SoundManager.playSound(a, 1);
        }, a.color = function (a) {
            return a;
        }, a.point = function (a, e) {
            return Laya.Point.create().setTo(a, e);
        }, a.initFGUIRoot = function () {
            Laya.stage.addChild(fairygui.GRoot.inst.displayObject);
        }, a.loadFGUIPack = function (a) {
            var _this2 = this;
            return new Promise(function (e, t) {
                fairygui.UIPackage.loadPackage(a, zs.Handler.create(_this2, function (a) {
                    if (a && a.length > 0) {
                        var _t6 = a[0], s = _t6._items;
                        for (var _a3 = 0, _e3 = s.length; _a3 < _e3; _a3++) {
                            var _e4 = s[_a3];
                            if (_e4.type == fairygui.PackageItemType.Atlas) {
                                var _a4 = _t6.getItemAsset(_e4);
                                _a4._bitmap && (_a4._bitmap.lock = !0);
                            }
                        }
                        e(_t6);
                    } else e(null);
                }));
            });
        }, a.setFGUIExtension = function (a, e) {
            null == fairygui.UIObjectFactory.extensions[a] && fairygui.UIObjectFactory.setPackageItemExtension(a, e);
        }, a.sortScene = function (a) {
            var e = 1;
            zs.ui.UIScene.scene && (Laya.stage.getChildIndex(zs.ui.UIScene.scene) < Laya.stage.numChildren - e && Laya.stage.setChildIndex(zs.ui.UIScene.scene, Laya.stage.numChildren - e),
                e++), Laya.stage.getChildIndex(fairygui.GRoot.inst.displayObject) != Laya.stage.numChildren - e && Laya.stage.setChildIndex(fairygui.GRoot.inst.displayObject, Laya.stage.numChildren - e),
                a && a.loading && a.loading.owner && Laya.stage.getChildIndex(a.loading.owner) != Laya.stage.numChildren - e && Laya.stage.setChildIndex(a.loading.owner, Laya.stage.numChildren - e);
        };
    }(window.zs.proxy = window.zs.proxy || {});
}()