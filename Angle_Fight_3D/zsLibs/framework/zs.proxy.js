var _interopRequireDefault = requirea("../../@babel/runtime/helpers/interopRequireDefault");

var _possibleConstructorReturn2 = _interopRequireDefault(requirea("../../@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(requirea("../../@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(requirea("../../@babel/runtime/helpers/inherits"));

var _createClass2 = _interopRequireDefault(requirea("../../@babel/runtime/helpers/createClass"));

var _classCallCheck2 = _interopRequireDefault(requirea("../../@babel/runtime/helpers/classCallCheck"));

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

window.zs = window.zs || {}, window.zs.platform = window.zs.platform || {}, null == zs.platform.config && (window.zs.platform.config = {}, 
function(a) {
    a.platformMark = "wx_", a.channel = "ZS", a.bannerWidth = 600, a.bannerHeight = 200;
}(window.zs.platform.config = {})), window.zs.proxy = window.zs.proxy || {}, function(a) {
    "use strict";
    var e = function e() {
        (0, _classCallCheck2.default)(this, e);
    };
    e.gameCfgPath = "config/gameCfg.json", e.porductCfgPath = "config/productCfg.json", 
    e.uiCfgPath = "config/uiCfg.json", e.FGUI_AlignType_Top = "top", e.FGUI_AlignType_Middle = "middle", 
    e.FGUI_AlignType_Bottom = "bottom", e.FGUI_AlignType_Left = "left", e.FGUI_AlignType_Center = "center", 
    e.FGUI_AlignType_Right = "right";
    var t = /* */ function() {
        function t() {
            (0, _classCallCheck2.default)(this, t);
        }
        (0, _createClass2.default)(t, null, [ {
            key: "FGUIEvent",
            value: function FGUIEvent(a, e) {
                return zs.Handler.create(a, e, null, !1);
            }
        }, {
            key: "FGUIOnClick",
            value: function FGUIOnClick(a, e, t) {
                a.lastProxyClick && a.offClick(a.lastProxyClick[0], a.lastProxyClick[1]), a.lastProxyClick = null, 
                a.onClick(e, t), a.lastProxyClick = [ e, t ];
            }
        }, {
            key: "FGUIOffClick",
            value: function FGUIOffClick(a, e, t) {
                a.offClick(e, t);
            }
        }, {
            key: "FGUIOn",
            value: function FGUIOn(a, e, t, s) {
                a.on(e, t, s);
            }
        }, {
            key: "FGUIOff",
            value: function FGUIOff(a, e, t, s) {
                a.off(e, t, s);
            }
        }, {
            key: "FGUIButtonTouchBegin",
            value: function FGUIButtonTouchBegin(a) {
                a.on(Laya.Event.MOUSE_DOWN, a, a.__mousedown);
            }
        } ]);
        return t;
    }();
    t.MOUSE_DOWN = Laya.Event.MOUSE_DOWN, t.MOUSE_MOVE = Laya.Event.MOUSE_MOVE, t.FGUI_CLICK_ITEM = fairygui.Events.CLICK_ITEM, 
    t.FGUI_DRAG_START = fairygui.Events.DRAG_START, t.FGUI_DRAG_END = fairygui.Events.DRAG_END;
    var s = fairygui.GBasicTextField;
    a.Configs = e, a.LocalStorage = /* */ function() {
        function _class() {
            (0, _classCallCheck2.default)(this, _class);
        }
        (0, _createClass2.default)(_class, null, [ {
            key: "getItem",
            value: function getItem(a) {
                return Laya.LocalStorage.getItem(a);
            }
        }, {
            key: "setItem",
            value: function setItem(a, e) {
                Laya.LocalStorage.setItem(a, e);
            }
        } ]);
        return _class;
    }(), a.Event = t, a.Touch = /* */ function() {
        function _class2() {
            (0, _classCallCheck2.default)(this, _class2);
        }
        (0, _createClass2.default)(_class2, null, [ {
            key: "touchX",
            get: function get() {
                return Laya.stage.mouseX;
            }
        }, {
            key: "touchY",
            get: function get() {
                return Laya.stage.mouseY;
            }
        } ]);
        return _class2;
    }(), a.Tween = /* */ function() {
        function _class3() {
            (0, _classCallCheck2.default)(this, _class3);
        }
        (0, _createClass2.default)(_class3, null, [ {
            key: "to",
            value: function to(a, e, t) {
                var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                var n = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
                var r = null;
                switch (s) {
                  case "linearNone":
                    r = Laya.Ease.linearNone;
                    break;

                  case "linearIn":
                    r = Laya.Ease.linearIn;
                    break;

                  case "linearInOut":
                    r = Laya.Ease.linearInOut;
                    break;

                  case "linearOut":
                    r = Laya.Ease.linearOut;
                    break;

                  case "bounceIn":
                    r = Laya.Ease.bounceIn;
                    break;

                  case "bounceInOut":
                    r = Laya.Ease.bounceInOut;
                    break;

                  case "bounceOut":
                    r = Laya.Ease.bounceOut;
                    break;

                  case "backIn":
                    r = Laya.Ease.backIn;
                    break;

                  case "backInOut":
                    r = Laya.Ease.backInOut;
                    break;

                  case "backOut":
                    r = Laya.Ease.backOut;
                    break;

                  case "elasticIn":
                    r = Laya.Ease.elasticIn;
                    break;

                  case "elasticInOut":
                    r = Laya.Ease.elasticInOut;
                    break;

                  case "elasticOut":
                    r = Laya.Ease.elasticOut;
                    break;

                  case "strongIn":
                    r = Laya.Ease.strongIn;
                    break;

                  case "strongInOut":
                    r = Laya.Ease.strongInOut;
                    break;

                  case "strongOut":
                    r = Laya.Ease.strongOut;
                    break;

                  case "sineInOut":
                    r = Laya.Ease.sineInOut;
                    break;

                  case "sineIn":
                    r = Laya.Ease.sineIn;
                    break;

                  case "sineOut":
                    r = Laya.Ease.sineOut;
                    break;

                  case "quintIn":
                    r = Laya.Ease.quintIn;
                    break;

                  case "quintInOut":
                    r = Laya.Ease.quintInOut;
                    break;

                  case "quintOut":
                    r = Laya.Ease.quintOut;
                    break;

                  case "quartIn":
                    r = Laya.Ease.quartIn;
                    break;

                  case "quartInOut":
                    r = Laya.Ease.quartInOut;
                    break;

                  case "quartOut":
                    r = Laya.Ease.quartOut;
                    break;

                  case "cubicIn":
                    r = Laya.Ease.cubicIn;
                    break;

                  case "cubicInOut":
                    r = Laya.Ease.cubicInOut;
                    break;

                  case "cubicOut":
                    r = Laya.Ease.cubicOut;
                    break;

                  case "quadIn":
                    r = Laya.Ease.quadIn;
                    break;

                  case "quadInOut":
                    r = Laya.Ease.quadInOut;
                    break;

                  case "quadOut":
                    r = Laya.Ease.quadOut;
                    break;

                  case "expoIn":
                    r = Laya.Ease.expoIn;
                    break;

                  case "expoInOut":
                    r = Laya.Ease.expoInOut;
                    break;

                  case "expoOut":
                    r = Laya.Ease.expoOut;
                    break;

                  case "circIn":
                    r = Laya.Ease.circIn;
                    break;

                  case "circInOut":
                    r = Laya.Ease.circInOut;
                    break;

                  case "circOut":
                    r = Laya.Ease.circOut;
                }
                return Laya.Tween.to(a, e, t, r, i, n, !1, !0, !0, !0);
            }
        }, {
            key: "clearAll",
            value: function clearAll(a) {
                Laya.Tween.clearAll(a);
            }
        } ]);
        return _class3;
    }(), a.Loader = /* */ function() {
        function _class4() {
            (0, _classCallCheck2.default)(this, _class4);
        }
        (0, _createClass2.default)(_class4, null, [ {
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
        } ]);
        return _class4;
    }(), a.NativeLoading = /* */ function(_Laya$Script) {
        (0, _inherits2.default)(_class5, _Laya$Script);
        var _super = _createSuper(_class5);
        function _class5() {
            var _this;
            (0, _classCallCheck2.default)(this, _class5);
            _this = _super.apply(this, arguments), _this.progressTime = .01, _this.progressCount = 0, 
            _this.current = 0, _this.progress = 0;
            return _this;
        }
        (0, _createClass2.default)(_class5, [ {
            key: "init",
            value: function init() {
                this.updateProgress(0);
            }
        }, {
            key: "updateProgress",
            value: function updateProgress(a) {}
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
        } ], [ {
            key: "preload",
            value: function preload() {
                return Promise(function(a, e) {
                    a();
                });
            }
        }, {
            key: "make",
            value: function make() {
                return null;
            }
        } ]);
        return _class5;
    }(Laya.Script), a.UIScene = /* */ function() {
        function _class6() {
            (0, _classCallCheck2.default)(this, _class6);
        }
        (0, _createClass2.default)(_class6, null, [ {
            key: "init",
            value: function init() {
                this.scene = Laya.stage.addChild(new Laya.Scene3D()), this.camera = this.scene.addChild(new Laya.Camera(0, .1, 100)), 
                this.camera.clearFlag = Laya.CameraClearFlags.DepthOnly, this.camera.clearColor = new Laya.Vector4(0, 0, 0, 0), 
                this.camera.transform.position = new Laya.Vector3(0, 0, 3), this.camera.transform.rotation = new Laya.Quaternion(), 
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
                this.camera.transform.position = new Laya.Vector3(0, 0, 3), this.camera.transform.rotation = new Laya.Quaternion();
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
                    for (var _e2 = 0, _t = this.list.length; _e2 < _t; _e2++) {
                        if (this.list[_e2].id == a.id) {
                            this.list[_e2].removeSelf(), this.list.splice(_e2, 1);
                            break;
                        }
                    }
                    this.list.length <= 0 && this.camera && (this.camera.enableRender = !1);
                }
            }
        }, {
            key: "list",
            get: function get() {
                return null == this._list && (this._list = []), this._list;
            }
        } ]);
        return _class6;
    }(), a.init = function() {}, a.playSound = function(a) {
        Laya.SoundManager.playSound(a, 1);
    }, a.color = function(a) {
        return a;
    }, a.point = function(a, e) {
        return Laya.Point.create().setTo(a, e);
    }, a.FGUITextField = s, a.initFGUIRoot = function() {
        Laya.stage.addChild(fairygui.GRoot.inst.displayObject);
    }, a.setFGUIObjectXY = function(a, e, t) {
        a.setXY(e, t);
    }, a.loadFGUIPack = function(a) {
        var _this2 = this;
        return new zs.Coop(function(e, t) {
            fairygui.UIPackage.loadPackage(a, zs.Handler.create(_this2, function(a) {
                if (a && a.length > 0) {
                    var _t2 = a[0], _s = _t2._items;
                    for (var _a3 = 0, _e3 = _s.length; _a3 < _e3; _a3++) {
                        var _e4 = _s[_a3];
                        if (_e4.type == fairygui.PackageItemType.Atlas) {
                            var _a4 = _t2.getItemAsset(_e4);
                            _a4._bitmap && (_a4._bitmap.lock = !0);
                        }
                    }
                    e(_t2);
                } else e(null);
            }));
        });
    }, a.setFGUIExtension = function(a, e) {
        null == fairygui.UIObjectFactory.extensions[a] && fairygui.UIObjectFactory.setPackageItemExtension(a, e);
    }, a.sortScene = function(a) {
        var e = 1;
        zs.ui.UIScene.scene && (Laya.stage.getChildIndex(zs.ui.UIScene.scene) < Laya.stage.numChildren - e && Laya.stage.setChildIndex(zs.ui.UIScene.scene, Laya.stage.numChildren - e), 
        e++), Laya.stage.getChildIndex(fairygui.GRoot.inst.displayObject) != Laya.stage.numChildren - e && Laya.stage.setChildIndex(fairygui.GRoot.inst.displayObject, Laya.stage.numChildren - e), 
        a && a.loading && a.loading.owner && Laya.stage.getChildIndex(a.loading.owner) != Laya.stage.numChildren - e && Laya.stage.setChildIndex(a.loading.owner, Laya.stage.numChildren - e);
    };
}(window.zs.proxy = window.zs.proxy || {});