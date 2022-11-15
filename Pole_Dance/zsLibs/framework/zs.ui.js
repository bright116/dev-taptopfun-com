var _interopRequireDefault = require("../../@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("../../@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("../../@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("../../@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("../../@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("../../@babel/runtime/helpers/inherits"));

function _createSuper(Derived) {
    return function () {
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
        Date.prototype.toString.call(Reflect.construct(Date, [], function () { }));
        return true;
    } catch (e) {
        return false;
    }
}

window.zs = window.zs || {}, window.zs.ui = window.zs.ui || {}, function (t) {
    "use strict";
    var e = /* */ function (_fairygui$GComponent) {
        (0, _inherits2.default)(e, _fairygui$GComponent);
        var _super = _createSuper(e);
        function e() {
            var _this;
            (0, _classCallCheck2.default)(this, e);
            _this = _super.apply(this, arguments), _this.picture = null, _this.desc = null,
                _this.title = null, _this.data = null;
            return _this;
        }
        (0, _createClass2.default)(e, null, [{
            key: "createInstance",
            value: function createInstance() {
                return null;
            }
        }]);
        return e;
    }(fairygui.GComponent);
    e.URL = null;
    var i = /* */ function (_fairygui$GComponent2) {
        (0, _inherits2.default)(i, _fairygui$GComponent2);
        var _super2 = _createSuper(i);
        function i() {
            (0, _classCallCheck2.default)(this, i);
            return _super2.apply(this, arguments);
        }
        (0, _createClass2.default)(i, [{
            key: "onConstruct",
            value: function onConstruct() {
                this.loader = this.getChild("loader");
            }
        }], [{
            key: "bind",
            value: function bind(t) {
                zs.ui.bind(t, this.itemName, i), this.pack = t;
            }
        }, {
            key: "createInstance",
            value: function createInstance() {
                return fairygui.UIPackage.createObject(this.pack.name, this.itemName);
            }
        }]);
        return i;
    }(fairygui.GComponent);
    i.itemName = "card";
    var s = /* */ function (_fairygui$GComponent3) {
        (0, _inherits2.default)(s, _fairygui$GComponent3);
        var _super3 = _createSuper(s);
        function s() {
            (0, _classCallCheck2.default)(this, s);
            return _super3.apply(this, arguments);
        }
        (0, _createClass2.default)(s, [{
            key: "onConstruct",
            value: function onConstruct() {
                this.background = this.getChild("background"), this.list = this.getChild("list");
            }
        }], [{
            key: "bind",
            value: function bind(t) {
                zs.ui.bind(t, this.itemName, s), this.pack = t;
            }
        }, {
            key: "createInstance",
            value: function createInstance() {
                return fairygui.UIPackage.createObject(this.pack.name, this.itemName);
            }
        }]);
        return s;
    }(fairygui.GComponent);
    s.itemName = "list";
    var a = /* */ function (_fairygui$GComponent4) {
        (0, _inherits2.default)(a, _fairygui$GComponent4);
        var _super4 = _createSuper(a);
        function a() {
            (0, _classCallCheck2.default)(this, a);
            return _super4.apply(this, arguments);
        }
        (0, _createClass2.default)(a, [{
            key: "onConstruct",
            value: function onConstruct() {
                this.state = this.getController("state"), this.title = this.getChild("title"), this.content = this.getChild("content"),
                    this.btn_confirm = this.getChild("btn_confirm"), this.btn_cancel = this.getChild("btn_cancel");
            }
        }], [{
            key: "bind",
            value: function bind(t) {
                zs.ui.bind(t, this.itemName, a), this.pack = t;
            }
        }, {
            key: "createInstance",
            value: function createInstance() {
                return fairygui.UIPackage.createObject(this.pack.name, this.itemName);
            }
        }]);
        return a;
    }(fairygui.GComponent);
    a.itemName = "msgbox";
    var r = /* */ function (_fairygui$GComponent5) {
        (0, _inherits2.default)(r, _fairygui$GComponent5);
        var _super5 = _createSuper(r);
        function r() {
            (0, _classCallCheck2.default)(this, r);
            return _super5.apply(this, arguments);
        }
        (0, _createClass2.default)(r, null, [{
            key: "createInstance",
            value: function createInstance() {
                var t = new fairygui.GComponent();
                t.width = fairygui.GRoot.inst.width, t.height = fairygui.GRoot.inst.height;
                var e = new fairygui.GGraph();
                e.drawRect(0, "#000000", "#000000"), t.addChild(e), e.x = .25 * -t.width, e.y = .25 * -t.height,
                    e.width = 2 * t.width, e.height = 2 * t.height;
                var i = new fairygui.GBasicTextField();
                return i.pivotX = .5, i.pivotY = .5, i.x = .5 * t.width, i.y = .5 * t.height, i.addRelation(t, fairygui.RelationType.Center_Center),
                    i.addRelation(t, fairygui.RelationType.Middle_Middle), i.fontSize = 100, i.text = "",
                    i.color = "#FFFFFF", t.loadingValue = t.addChild(i), t;
            }
        }]);
        return r;
    }(fairygui.GComponent);
    r.itemName = "loading";
    var n = /* */ function (_zs$fgui$base) {
        (0, _inherits2.default)(n, _zs$fgui$base);
        var _super6 = _createSuper(n);
        function n() {
            var _this2;
            (0, _classCallCheck2.default)(this, n);
            _this2 = _super6.apply(this, arguments), _this2.progressTime = .01, _this2.progressCount = 0,
                _this2.current = 0, _this2.progress = 0;
            return _this2;
        }
        (0, _createClass2.default)(n, [{
            key: "updateProgress",
            value: function updateProgress(t) {
                this.view && (this.view.loadingValue.text = t + "%");
            }
        }, {
            key: "run",
            value: function run(t) {
                if (this.progress = t, this.current < this.progress) {
                    this.progressCount += .001 * Laya.timer.delta;
                    var _t = Math.round(this.progressCount / this.progressTime);
                    this.progressCount -= _t * this.progressTime, this.current + _t >= this.progress ? this.current = this.progress : this.current = this.current + _t,
                        this.updateProgress(this.current);
                } else if (this.progress >= 100) return !0;
                return !1;
            }
        }], [{
            key: "preload",
            value: function preload() {
                return Promise(function (t, e) {
                    t();
                });
            }
        }]);
        return n;
    }(zs.fgui.base);
    n.typeDefine = r;
    t.bind = function (t, e, i) {
        if (null == t) return void zs.log.warn("资源包为空，无法绑定模板 " + e);
        var s = t.getItemByName(e);
        if (null == s) return void zs.log.warn("指定资源包（" + t.name + "）中不存在" + e + "组件，无法绑定指定模板");
        var a = "ui://" + t.id + s.id;
        null == fairygui.UIObjectFactory.extensions[a] && fairygui.UIObjectFactory.setPackageItemExtension(a, i);
    }, t.readURL = function (t, e) {
        if (null == t) return null;
        var i = t.getItemByName(e);
        return null == i ? null : "ui://" + t.id + i.id;
    }, t.FGUI_item = e, t.FGUI_list = s, t.FGUI_card = i, t.FGUI_msgbox = a, t.FGUI_Loading = r,
        t.Loading = n, t.LayaLoading = /* */ function (_Laya$Script) {
            (0, _inherits2.default)(_class, _Laya$Script);
            var _super7 = _createSuper(_class);
            function _class() {
                var _this3;
                (0, _classCallCheck2.default)(this, _class);
                _this3 = _super7.apply(this, arguments), _this3.progressTime = .01, _this3.progressCount = 0,
                    _this3.current = 0, _this3.progress = 0;
                return _this3;
            }
            (0, _createClass2.default)(_class, [{
                key: "updateProgress",
                value: function updateProgress(t) { }
            }, {
                key: "run",
                value: function run(t) {
                    if (this.progress = t, this.current < this.progress) {
                        this.progressCount += .001 * Laya.timer.delta;
                        var _t2 = Math.round(this.progressCount / this.progressTime);
                        this.progressCount -= _t2 * this.progressTime, this.current + _t2 >= this.progress ? this.current = this.progress : this.current = this.current + _t2,
                            this.updateProgress(this.current);
                    } else if (this.progress >= 100) return !0;
                    return !1;
                }
            }], [{
                key: "preload",
                value: function preload() {
                    return Promise(function (t, e) {
                        t();
                    });
                }
            }, {
                key: "make",
                value: function make() {
                    return null;
                }
            }]);
            return _class;
        }(Laya.Script), t.uiScene = /* */ function () {
            function _class2() {
                (0, _classCallCheck2.default)(this, _class2);
            }
            (0, _createClass2.default)(_class2, null, [{
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
                value: function sync(t) {
                    if (t instanceof Laya.Camera) {
                        if (!this.camera) return;
                        this.camera.clearFlag = t.clearFlag, this.camera.clearColor = t.clearColor, this.camera.cullingMask = t.cullingMask,
                            this.camera.aspectRatio = t.aspectRatio, this.camera.nearPlane = t.nearPlane, this.camera.farPlane = t.farPlane,
                            this.camera.fieldOfView = t.fieldOfView, this.camera.orthographic = t.orthographic,
                            this.camera.orthographicVerticalSize = t.orthographicVerticalSize;
                    } else {
                        if (!this.light) return;
                        this.light.transform.rotation = t.transform.rotation, this.light.color = t.color,
                            this.light.intensity = t.intensity;
                    }
                }
            }, {
                key: "resetCamera",
                value: function resetCamera() {
                    this.camera && (this.camera.clearFlag = Laya.CameraClearFlags.DepthOnly, this.camera.clearColor = new Laya.Vector4(0, 0, 0, 0),
                        this.camera.aspectRatio = 0, this.camera.nearPlane = .1, this.camera.farPlane = 100,
                        this.camera.fieldOfView = 60, this.camera.orthographic = !1, this.camera.orthographicVerticalSize = 10,
                        this.camera.addAllLayers(), this.camera.transform.position = new Laya.Vector3(0, 0, 3),
                        this.camera.transform.rotation = new Laya.Quaternion());
                }
            }, {
                key: "resetLight",
                value: function resetLight() {
                    this.light && (this.light.transform.worldMatrix.setForward(new Laya.Vector3(1, -1, 0)),
                        this.light.color = new Laya.Vector3(1, 1, 1), this.light.intensity = 1);
                }
            }, {
                key: "add",
                value: function add(t, e, i) {
                    return this.scene.addChild(t), this.list.push(t), t.transform.position = e || new Laya.Vector3(),
                        t.transform.rotationEuler = i || new Laya.Vector3(), this.camera.enableRender = !0,
                        t;
                }
            }, {
                key: "cloneAdd",
                value: function cloneAdd(t, e, i) {
                    return this.add(t.clone(), e, i);
                }
            }, {
                key: "clear",
                value: function clear() {
                    if (!(null == this.list || this.list.length <= 0)) {
                        for (var _t3 = 0, _e = this.list.length; _t3 < _e; _t3++) {
                            this.list[_t3].removeSelf();
                        }
                        this._list = [], this.camera.enableRender = !1;
                    }
                }
            }, {
                key: "removeAt",
                value: function removeAt(t) {
                    null == this.list || this.list.length <= 0 || t >= this.list.length || (this.list[t].removeSelf(),
                        this.list.splice(t, 1), this.list.length <= 0 && (this.camera.enableRender = !1));
                }
            }, {
                key: "remove",
                value: function remove(t) {
                    if (!(null == this.list || this.list.length <= 0)) {
                        for (var _e2 = 0, _i = this.list.length; _e2 < _i; _e2++) {
                            if (this.list[_e2].id == t.id) {
                                this.list[_e2].removeSelf(), this.list.splice(_e2, 1);
                                break;
                            }
                        }
                        this.list.length <= 0 && (this.camera.enableRender = !1);
                    }
                }
            }, {
                key: "list",
                get: function get() {
                    return null == this._list && (this._list = []), this._list;
                }
            }]);
            return _class2;
        }();
}(window.zs.ui = window.zs.ui || {});