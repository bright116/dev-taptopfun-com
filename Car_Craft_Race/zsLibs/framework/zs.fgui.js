!function () {
    var _interopRequireDefault = require("../../runtime/helpers/interopRequireDefault");

    var _regenerator = _interopRequireDefault(require("../../runtime/regenerator"));

    var _asyncToGenerator2 = require("../../runtime/helpers/asyncToGenerator");

    var _assertThisInitialized2 = require("../../runtime/helpers/assertThisInitialized");

    var _inherits2 = require("../../runtime/helpers/inherits");

    var _createSuper2 = require("../../runtime/helpers/createSuper");

    var _classCallCheck2 = require("../../runtime/helpers/classCallCheck");

    var _createClass2 = require("../../runtime/helpers/createClass");

    window.zs = window.zs || {}, window.zs.fgui = window.zs.fgui || {}, function (t) {
        "use strict";
        var i, e;
        !function (t) {
            t[t.Center = 0] = "Center", t[t.Top = 1] = "Top", t[t.Bottom = 2] = "Bottom", t[t.Left = 3] = "Left",
                t[t.Right = 4] = "Right", t[t.TopLeft = 5] = "TopLeft", t[t.BottomLeft = 6] = "BottomLeft",
                t[t.TopRight = 7] = "TopRight", t[t.BottomRight = 8] = "BottomRight";
        }(i = i || (i = {})), function (t) {
            t[t.None = 0] = "None", t[t.Fit = 1] = "Fit", t[t.ScaleFit = 2] = "ScaleFit", t[t.Both = 3] = "Both";
        }(e = e || (e = {}));
        var s = /* */ function () {
            function s() {
                _classCallCheck2(this, s);
            }
            _createClass2(s, null, [{
                key: "bases",
                get: function get() {
                    return null == this._bases && (this._bases = {}), this._bases;
                }
            }, {
                key: "items",
                get: function get() {
                    return null == this._items && (this._items = {}), this._items;
                }
            }, {
                key: "registeBase",
                value: function registeBase(t, i) {
                    this.bases[t] = i;
                }
            }, {
                key: "unregisteBase",
                value: function unregisteBase(t) {
                    this.bases[t] && delete this.bases[t];
                }
            }, {
                key: "registeItem",
                value: function registeItem(t, i) {
                    this.items[t] = i;
                }
            }, {
                key: "unregisteItem",
                value: function unregisteItem(t) {
                    this.items[t] && delete this.items[t];
                }
            }]);
            return s;
        }();
        function loadPack(t, i) {
            return i || (t = s.path_root + "/" + t), zs.resource.load(t, zs.ResourceType.FGUIPack);
        }
        s.onInit = null, s.path_root = "fgui", s.pack_basic = "zs_basic";
        var n = /* */ function () {
            function n(t) {
                _classCallCheck2(this, n);
                this.disposed = !1, this._view = t, t.baseCtrl = this, this._id = n.usedId, n.usedId++,
                    this.init();
            }
            _createClass2(n, [{
                key: "view",
                get: function get() {
                    return this._view;
                }
            }, {
                key: "id",
                get: function get() {
                    return this._id;
                }
            }, {
                key: "window",
                get: function get() {
                    return this._window;
                }
            }, {
                key: "check",
                value: function check(t) {
                    return !0;
                }
            }, {
                key: "dispose",
                value: function dispose() {
                    zs.Timer.inst.clearAll(this), zs.Tween.clearAll(this), this.disposed = !0;
                }
            }, {
                key: "show",
                value: function show() {
                    return this._view && (this._view.visible = !0), this;
                }
            }, {
                key: "hide",
                value: function hide() {
                    return this._view && (this._view.visible = !1), this;
                }
            }, {
                key: "init",
                value: function init() { }
            }, {
                key: "apply",
                value: function apply() {
                    return this;
                }
            }, {
                key: "applyConfig",
                value: function applyConfig() {
                    return this;
                }
            }], [{
                key: "make",
                value: function make(t) {
                    return t && t.prototype instanceof fairygui.GComponent ? t.createInstance() : new fairygui.GComponent();
                }
            }, {
                key: "type",
                value: function type() {
                    return fairygui.GComponent;
                }
            }]);
            return n;
        }();
        n.usedId = 0, n.typeDefine = null;
        var a = /* */ function () {
            function a() {
                _classCallCheck2(this, a);
            }
            _createClass2(a, [{
                key: "listByKeys",
                get: function get() {
                    return null == this._listByKeys && (this._listByKeys = {}), this._listByKeys;
                }
            }, {
                key: "list",
                get: function get() {
                    return null == this._list && (this._list = {}), this._list;
                }
            }, {
                key: "attach",
                value: function attach(t, i, e) {
                    if (this.lastBase = null, null == t || null == this.window) return this;
                    var s = t.make(t.typeDefine || t.type());
                    null != i && null != i ? this.window.contentPane.addChildAt(s, i) : this.window.contentPane.addChild(s),
                        s instanceof fairygui.GButton ? s.opaque = !0 : s.opaque = !1;
                    var n = new t(s);
                    if (n._window = this, this.lastBase = n, e && (this.listByKeys[e] = n, n.baseKey = e),
                        this.list[n.id] = n, zs.configs.uiCfg && zs.configs.uiCfg.base && zs.configs.uiCfg.binder && zs.configs.uiCfg.binder[e]) {
                        n.bindBases = [];
                        var _t = zs.configs.uiCfg.binder[e];
                        if (Array.isArray(_t)) for (var _i = 0, _e = _t.length; _i < _e; _i++) {
                            if ("string" != typeof _t[_i]) continue;
                            var _e2 = zs.configs.uiCfg.base[_t[_i]];
                            _e2 && (zs.core.workflow || zs.core.workflow.checkSwitch(_e2.switch, _e2.check)) && n.bindBases.push(this.applyConfig(_e2).getBase());
                        } else if ("string" == typeof _t) {
                            var _i2 = zs.configs.uiCfg.base[_t];
                            _i2 && zs.core.workflow && zs.core.workflow.checkSwitch(_i2.switch, _i2.check) && n.bindBases.push(this.applyConfig(_i2).getBase());
                        }
                    }
                    return this.setBase(n), this;
                }
            }, {
                key: "detach",
                value: function detach(t) {
                    if (null == t) return this;
                    if ("number" == typeof t) this.window.contentPane.removeChildAt(t, !0); else if ("string" == typeof t) {
                        var _i3 = this.listByKeys[t];
                        _i3 && (_i3.dispose(), this.window.contentPane.removeChild(_i3.view, !0), this.list[_i3.id] && delete this.list[t.id]);
                    } else {
                        if (t.baseKey && this.listByKeys[t.baseKey] && delete this.listByKeys[t.baseKey],
                            t.bindBases && t.bindBases.length > 0) for (var _i4 = 0; _i4 < t.bindBases.length; _i4++) {
                                this.detach(t.bindBases[_i4]);
                            }
                        t.dispose(), this.window.contentPane.removeChild(t.view, !0), this.list[t.id] && delete this.list[t.id];
                    }
                    return this;
                }
            }, {
                key: "setBase",
                value: function setBase(t, i) {
                    return t && t.view ? (this.lastBase = t, i && (this.listByKeys[i] = t)) : this.lastBase = null,
                        this;
                }
            }, {
                key: "getBase",
                value: function getBase() {
                    return this.lastBase;
                }
            }, {
                key: "getBaseByKey",
                value: function getBaseByKey(t) {
                    var i = this.listByKeys[t];
                    return !i || i.disposed ? null : i;
                }
            }, {
                key: "getBaseByType",
                value: function getBaseByType(t) {
                    var i = [];
                    for (var _e3 in this.list) {
                        var _s = this.list[_e3];
                        _s && !_s.disposed ? _s instanceof t && i.push(_s) : delete this.list[_e3];
                    }
                    return i;
                }
            }, {
                key: "clearBase",
                value: function clearBase() {
                    return this.lastBase = null, this;
                }
            }, {
                key: "align",
                value: function align(t, e, s) {
                    if (this.lastBase) {
                        var _n = this.lastBase.view.width * this.lastBase.view.scaleX, _a2 = this.lastBase.view.height * this.lastBase.view.scaleY, _o = 0;
                        switch (t) {
                            case i.Top:
                            case i.Center:
                            case i.Bottom:
                                _o = .5 * (this.window.contentPane.width - _n);
                                break;

                            case i.TopRight:
                            case i.Right:
                            case i.BottomRight:
                                _o = this.window.contentPane.width - _n;
                        }
                        var _l = 0;
                        switch (t) {
                            case i.Left:
                            case i.Center:
                            case i.Right:
                                _l = .5 * (this.window.contentPane.height - _a2);
                                break;

                            case i.BottomLeft:
                            case i.Bottom:
                            case i.BottomRight:
                                _l = this.window.contentPane.height - _a2;
                        }
                        switch (this.lastBase.view.pivotAsAnchor && (_o += _n * this.lastBase.view.pivotX,
                            _l += _a2 * this.lastBase.view.pivotY), e && (_o += e), s && (_l += s), this.lastBase.view.setXY(_o, _l),
                        t) {
                            case i.TopLeft:
                                this.lastBase.view.addRelation(this.window.contentPane, fairygui.RelationType.Left_Left),
                                    this.lastBase.view.addRelation(this.window.contentPane, fairygui.RelationType.Top_Top);
                                break;

                            case i.Top:
                                this.lastBase.view.addRelation(this.window.contentPane, fairygui.RelationType.Center_Center),
                                    this.lastBase.view.addRelation(this.window.contentPane, fairygui.RelationType.Top_Top);
                                break;

                            case i.TopRight:
                                this.lastBase.view.addRelation(this.window.contentPane, fairygui.RelationType.Right_Right),
                                    this.lastBase.view.addRelation(this.window.contentPane, fairygui.RelationType.Top_Top);
                                break;

                            case i.Left:
                                this.lastBase.view.addRelation(this.window.contentPane, fairygui.RelationType.Left_Left),
                                    this.lastBase.view.addRelation(this.window.contentPane, fairygui.RelationType.Middle_Middle);
                                break;

                            case i.Center:
                                this.lastBase.view.addRelation(this.window.contentPane, fairygui.RelationType.Center_Center),
                                    this.lastBase.view.addRelation(this.window.contentPane, fairygui.RelationType.Middle_Middle);
                                break;

                            case i.Right:
                                this.lastBase.view.addRelation(this.window.contentPane, fairygui.RelationType.Right_Right),
                                    this.lastBase.view.addRelation(this.window.contentPane, fairygui.RelationType.Middle_Middle);
                                break;

                            case i.BottomLeft:
                                this.lastBase.view.addRelation(this.window.contentPane, fairygui.RelationType.Left_Left),
                                    this.lastBase.view.addRelation(this.window.contentPane, fairygui.RelationType.Bottom_Bottom);
                                break;

                            case i.Bottom:
                                this.lastBase.view.addRelation(this.window.contentPane, fairygui.RelationType.Center_Center),
                                    this.lastBase.view.addRelation(this.window.contentPane, fairygui.RelationType.Bottom_Bottom);
                                break;

                            case i.BottomRight:
                                this.lastBase.view.addRelation(this.window.contentPane, fairygui.RelationType.Right_Right),
                                    this.lastBase.view.addRelation(this.window.contentPane, fairygui.RelationType.Bottom_Bottom);
                        }
                    }
                    return this;
                }
            }, {
                key: "setX",
                value: function setX(t) {
                    return this.lastBase && (this.lastBase.view.x = t), this;
                }
            }, {
                key: "setWindowX",
                value: function setWindowX(t) {
                    return this.window && (this.window.x = t), this;
                }
            }, {
                key: "setY",
                value: function setY(t) {
                    return this.lastBase && (this.lastBase.view.y = t), this;
                }
            }, {
                key: "setWindowY",
                value: function setWindowY(t) {
                    return this.window && (this.window.y = t), this;
                }
            }, {
                key: "setXY",
                value: function setXY(t, i) {
                    return this.lastBase && (this.lastBase.view.x = t, this.lastBase.view.y = i), this;
                }
            }, {
                key: "setWindowXY",
                value: function setWindowXY(t, i) {
                    return this.window && (this.window.x = t, this.window.y = i), this;
                }
            }, {
                key: "setWidth",
                value: function setWidth(t) {
                    return this.lastBase && (this.lastBase.view.width = t), this;
                }
            }, {
                key: "setWindowWidth",
                value: function setWindowWidth(t) {
                    return this.window && (this.window.width = t), this;
                }
            }, {
                key: "setHeight",
                value: function setHeight(t) {
                    return this.lastBase && (this.lastBase.view.height = t), this;
                }
            }, {
                key: "setWindowHeight",
                value: function setWindowHeight(t) {
                    return this.window && (this.window.height = t), this;
                }
            }, {
                key: "scaleFitWindow",
                value: function scaleFitWindow(t, i) {
                    if (this.window) {
                        var _e4 = 1;
                        _e4 = i / t >= fairygui.GRoot.inst.width / fairygui.GRoot.inst.height ? fairygui.GRoot.inst.height / i : fairygui.GRoot.inst.width / t,
                            this.window.setScale(_e4, _e4);
                    }
                    return this;
                }
            }, {
                key: "scaleFit",
                value: function scaleFit(t, i) {
                    if (this.lastBase) {
                        var _e5 = 1;
                        _e5 = i / t >= this.window.contentPane.height / this.window.contentPane.width ? this.window.contentPane.height / i : this.window.contentPane.width / t,
                            this.lastBase.view.setScale(_e5, _e5);
                    }
                    return this;
                }
            }, {
                key: "scaleWindow",
                value: function scaleWindow(t, i) {
                    return this.window && this.window.setScale(t, i), this;
                }
            }, {
                key: "scale",
                value: function scale(t, i) {
                    return this.lastBase && this.lastBase.view.setScale(t, i), this;
                }
            }, {
                key: "fitScale",
                value: function fitScale(t, i) {
                    return this.lastBase && this.lastBase.view.setScale(this.lastBase.view.scaleX * t, this.lastBase.view.scaleY * i),
                        this;
                }
            }, {
                key: "fit",
                value: function fit() {
                    if (this.lastBase) {
                        var _t2 = 0, _i5 = 0;
                        this.lastBase.view.width = this.window.contentPane.width / this.lastBase.view.scaleX * (1 / this.window.scaleX),
                            this.lastBase.view.height = this.window.contentPane.height / this.lastBase.view.scaleY * (1 / this.window.scaleY),
                            this.lastBase.view.pivotAsAnchor && (_t2 += this.lastBase.view.width * this.lastBase.view.scaleX * this.lastBase.view.pivotX,
                                _i5 += this.lastBase.view.height * this.lastBase.view.scaleY * this.lastBase.view.pivotY),
                            this.lastBase.view.x = _t2, this.lastBase.view.y = _i5;
                    }
                    return this;
                }
            }, {
                key: "fitWidth",
                value: function fitWidth(t) {
                    if (this.lastBase) {
                        var _i6 = this.window.contentPane.width / this.lastBase.view.width;
                        this.lastBase.view.width = this.window.contentPane.width * (1 / this.window.scaleX),
                            this.lastBase.view.x = this.lastBase.view.pivotAsAnchor ? this.lastBase.view.width * this.lastBase.view.pivotX : 0,
                            t && (this.lastBase.view.height *= _i6 * (1 / this.window.scaleY), this.lastBase.view.y = this.lastBase.view.y + (this.lastBase.view.pivotAsAnchor ? this.lastBase.view.height * this.lastBase.view.pivotY : 0));
                    }
                    return this;
                }
            }, {
                key: "fitHeight",
                value: function fitHeight(t) {
                    if (this.lastBase) {
                        var _i7 = this.window.contentPane.height / this.lastBase.view.height;
                        this.lastBase.view.height = this.window.contentPane.height * (1 / this.window.scaleY),
                            this.lastBase.view.y = this.lastBase.view.pivotAsAnchor ? this.lastBase.view.height * this.lastBase.view.pivotY : 0,
                            t && (this.lastBase.view.width *= _i7 * (1 / this.window.scaleX), this.lastBase.view.x = this.lastBase.view.x + (this.lastBase.view.pivotAsAnchor ? this.lastBase.view.width * this.lastBase.view.pivotX : 0));
                    }
                    return this;
                }
            }, {
                key: "block",
                value: function block(t) {
                    return this.lastBase && (this.lastBase.view.opaque = t), this;
                }
            }, {
                key: "autoFront",
                value: function autoFront(t) {
                    return null != this.window && (this.window.bringToFontOnClick = t), this;
                }
            }, {
                key: "front",
                value: function front() {
                    if (null != this.window) {
                        var _t3 = this.window.root;
                        _t3.getChildIndex(this.window) >= 0 && _t3.setChildIndex(this.window, _t3.numChildren - 1),
                            this.checkMsgbox();
                    }
                    return this;
                }
            }, {
                key: "top",
                value: function top() {
                    if (this.lastBase) {
                        var _t4 = this.window.contentPane;
                        _t4.getChildIndex(this.lastBase.view) >= 0 && _t4.setChildIndex(this.lastBase.view, _t4.numChildren - 1);
                    }
                    return this;
                }
            }, {
                key: "update",
                value: function update(t, i, e) {
                    return this.lastBase && (this.lastBase instanceof t && this.lastBase.view ? i.call(e, this.lastBase, this.window) : zs.log.warn("UI类型不匹配，无法生成对应系统!", this.lastBase)),
                        this;
                }
            }, {
                key: "show",
                value: function show() {
                    return null != this.window && (this.window.show(), this.checkMsgbox()), this;
                }
            }, {
                key: "hide",
                value: function hide() {
                    return null != this.window && this.window.hide(), this;
                }
            }, {
                key: "clear",
                value: function clear() {
                    if (null != this.window) {
                        for (var _t5 = this.window.contentPane.numChildren - 1; _t5 >= 0; _t5--) {
                            var _i8 = this.window.contentPane.getChildAt(_t5);
                            _i8 && _i8.baseCtrl && _i8.baseCtrl.dispose && _i8.baseCtrl.dispose();
                        }
                        this.window.contentPane.removeChildren(0, -1, !0);
                    }
                    return this;
                }
            }, {
                key: "applyConfig",
                value: function applyConfig(t) {
                    var e = s.bases[t.type];
                    if (null == e) return this;
                    if (this.attach(e, null, t.key), t.window) {
                        if (null != t.window.width && this.setWidth(t.window.width), null != t.window.height && this.setHeight(t.window.height),
                            !t.window.ignoreautoscale && !t.window.ignore_auto_scale && (zs.configs.gameCfg.autoScaleFit || null != t.window.scale_fit || null != t.window.scalefit)) {
                            var _i9 = t.window.scale_fit || t.window.scalefit;
                            null == _i9 || !Array.isArray(_i9) || _i9.length <= 1 ? this.scaleFit(zs.configs.gameCfg.designWidth, zs.configs.gameCfg.designHeight) : this.scaleFit(_i9[0], _i9[1]);
                        }
                        if (t.window.fitscale || t.window.fit_scale) {
                            var _i10 = t.window.fit_scale || t.window.fitscale;
                            Array.isArray(_i10) && _i10.length > 1 && this.fitScale(_i10[0], _i10[1]);
                        }
                        t.window.scale && Array.isArray(t.window.scale) && t.window.scale.length > 1 && this.scale(t.window.scale[0], t.window.scale[1]),
                            (t.window.fit_width || t.window.fitwidth) && this.fitWidth(), (t.window.fit_height || t.window.fitheight) && this.fitHeight(),
                            t.window.fit && this.fit();
                    }
                    if (t.base ? this.update(e, function (i) {
                        i.applyConfig(t.base);
                    }) : this.update(e, function (t) {
                        t.apply();
                    }), t.window) {
                        if (t.window.align) switch (t.window.align) {
                            case "center":
                                this.align(i.Center, t.window.alignoffset_x || t.window.alignoffsetx || 0, t.window.alignoffset_y || t.window.alignoffsety || 0);
                                break;

                            case "top":
                                this.align(i.Top, t.window.alignoffset_x || t.window.alignoffsetx || 0, t.window.alignoffset_y || t.window.alignoffsety || 0);
                                break;

                            case "bottom":
                                this.align(i.Bottom, t.window.alignoffset_x || t.window.alignoffsetx || 0, t.window.alignoffset_y || t.window.alignoffsety || 0);
                                break;

                            case "left":
                                this.align(i.Left, t.window.alignoffset_x || t.window.alignoffsetx || 0, t.window.alignoffset_y || t.window.alignoffsety || 0);
                                break;

                            case "right":
                                this.align(i.Right, t.window.alignoffset_x || t.window.alignoffsetx || 0, t.window.alignoffset_y || t.window.alignoffsety || 0);
                                break;

                            case "topleft":
                                this.align(i.TopLeft, t.window.alignoffset_x || t.window.alignoffsetx || 0, t.window.alignoffset_y || t.window.alignoffsety || 0);
                                break;

                            case "bottomleft":
                                this.align(i.BottomLeft, t.window.alignoffset_x || t.window.alignoffsetx || 0, t.window.alignoffset_y || t.window.alignoffsety || 0);
                                break;

                            case "topright":
                                this.align(i.TopRight, t.window.alignoffset_x || t.window.alignoffsetx || 0, t.window.alignoffset_y || t.window.alignoffsety || 0);
                                break;

                            case "bottomright":
                                this.align(i.BottomRight, t.window.alignoffset_x || t.window.alignoffsetx || 0, t.window.alignoffset_y || t.window.alignoffsety || 0);
                        }
                        null != t.window.x && this.setX(t.window.x), null != t.window.y && this.setY(t.window.y),
                            null != t.window.block && this.block(t.window.block), (null != t.window.auto_front || null != t.window.autofront) && this.autoFront(t.window.auto_front || t.window.autofront),
                            t.window.front && this.front(), t.window.top && this.top();
                    }
                    return this;
                }
            }, {
                key: "dispose",
                value: function dispose() {
                    if (null != this.window) {
                        for (var _t6 = this.window.contentPane.numChildren - 1; _t6 >= 0; _t6--) {
                            var _i11 = this.window.contentPane.getChildAt(_t6);
                            _i11 && _i11.baseCtrl && _i11.baseCtrl.dispose && (_i11.baseCtrl.dispose(), _i11.dispose());
                        }
                        this.window.dispose();
                    }
                }
            }, {
                key: "isShowing",
                value: function isShowing() {
                    return null != this.window && this.window.isShowing;
                }
            }, {
                key: "checkMsgbox",
                value: function checkMsgbox() {
                    if (l._windowInst && l._windowInst.isShowing()) {
                        var _t7 = l._windowInst.window, _i12 = _t7.root;
                        _i12.getChildIndex(_t7) >= 0 && _i12.setChildIndex(_t7, _i12.numChildren - 1);
                    }
                    if (h.inst && h.inst.view.visible) {
                        var _t8 = h._windowInst.window, _i13 = _t8.root;
                        _i13.getChildIndex(_t8) >= 0 && _i13.setChildIndex(_t8, _i13.numChildren - 1);
                    }
                }
            }], [{
                key: "create",
                value: function create(t, i, e, s) {
                    null == t && (t = 0), null == i && (i = 0), null == e && (e = fairygui.GRoot.inst.width),
                        null == s && (s = fairygui.GRoot.inst.height);
                    var n = new a();
                    n.window = new fairygui.Window(), n.window.x = t, n.window.y = i, n.window.width = e,
                        n.window.height = s;
                    var o = new fairygui.GComponent();
                    return n.window.contentPane = o, o.x = 0, o.y = 0, o.width = e, o.height = s, n;
                }
            }]);
            return a;
        }();
        var o = /* */ function () {
            function o() {
                _classCallCheck2(this, o);
            }
            _createClass2(o, null, [{
                key: "list",
                get: function get() {
                    return null == this._list && (this._list = {}), this._list;
                }
            }, {
                key: "get",
                value: function get(t, i) {
                    var e = this.defaultPanel;
                    return null != t && t.trim().length > 0 && (t = t.trim(), e = this.list[t]), null == e && i && (e = a.create(),
                        null != t && t.trim().length > 0 ? this.list[t] = e : this.defaultPanel = e), e;
                }
            }, {
                key: "open",
                value: function open(t, i, s) {
                    var n = this.defaultPanel;
                    if (null != i && i.trim().length > 0 && (i = i.trim(), n = this.list[i]), null != n && n.dispose(),
                        n = a.create(), t) switch (n.attach(t), null != s && null != s || (s = e.Both),
                        s) {
                            case e.Fit:
                                n.fit();
                                break;

                            case e.ScaleFit:
                                n.scaleFit(zs.configs.gameCfg.designWidth, zs.configs.gameCfg.designHeight);
                                break;

                            case e.Both:
                                n.scaleFit(zs.configs.gameCfg.designWidth, zs.configs.gameCfg.designHeight).fit();
                        }
                    return n.show(), null != i && i.trim().length > 0 ? this.list[i] = n : this.defaultPanel = n,
                        n;
                }
            }, {
                key: "show",
                value: function show(t, i, s, n) {
                    var a = this.defaultPanel;
                    if (null != s && s.trim().length > 0 && (s = s.trim(), a = this.list[s]), null != a) {
                        if (i) {
                            var _t9 = a.getBaseByType(i);
                            if (_t9 && _t9.length > 0) a.setBase(_t9[0]); else switch (a.attach(i), null != n && null != n || (n = e.Both),
                                n) {
                                    case e.Fit:
                                        a.fit();
                                        break;

                                    case e.ScaleFit:
                                        a.scaleFit(zs.configs.gameCfg.designWidth, zs.configs.gameCfg.designHeight);
                                        break;

                                    case e.Both:
                                        a.scaleFit(zs.configs.gameCfg.designWidth, zs.configs.gameCfg.designHeight).fit();
                                }
                        }
                    } else if (t) return this.open(i, s, n);
                    return a.show();
                }
            }, {
                key: "hide",
                value: function hide(t) {
                    var i = this.defaultPanel;
                    return null != t && t.trim().length > 0 && (t = t.trim(), i = this.list[t]), null != i && i.hide(),
                        i;
                }
            }]);
            return o;
        }();
        o.defaultPanel = null;
        var l = /* */ function (_n2) {
            _inherits2(l, _n2);
            var _super = _createSuper2(l);
            function l(t) {
                var _this;
                _classCallCheck2(this, l);
                _this = _super.call(this, t), zs.proxy.Event.FGUIOnClick(t.btn_confirm, _assertThisInitialized2(_this), _this.onConfirmClick),
                    zs.proxy.Event.FGUIOnClick(t.btn_cancel, _assertThisInitialized2(_this), _this.onCancelClick);
                return _this;
            }
            _createClass2(l, [{
                key: "check",
                value: function check(t) {
                    return t instanceof zs.ui.FGUI_msgbox;
                }
            }, {
                key: "setTitle",
                value: function setTitle(t) {
                    return this.view.title.text = t || "提示", this;
                }
            }, {
                key: "setContent",
                value: function setContent(t) {
                    return this.view.content.text = t || "", this;
                }
            }, {
                key: "setConfirmText",
                value: function setConfirmText(t) {
                    return this.view.btn_confirm.title = t || "确定", this;
                }
            }, {
                key: "setCancelText",
                value: function setCancelText(t) {
                    return this.view.btn_cancel.title = t || "取消", this;
                }
            }, {
                key: "switchCancel",
                value: function switchCancel(t) {
                    return t ? this.hideCancel() : this.showCancel();
                }
            }, {
                key: "showCancel",
                value: function showCancel() {
                    return this.view.state.selectedIndex = 1, this;
                }
            }, {
                key: "hideCancel",
                value: function hideCancel() {
                    return this.view.state.selectedIndex = 0, this;
                }
            }, {
                key: "setConfirmHandler",
                value: function setConfirmHandler(t) {
                    return this.confirmHandler = t, this;
                }
            }, {
                key: "setCancelHandler",
                value: function setCancelHandler(t) {
                    return this.cancelHandler = t, this;
                }
            }, {
                key: "onConfirmClick",
                value: function onConfirmClick() {
                    this.confirmHandler && this.confirmHandler.run(), l.hide();
                }
            }, {
                key: "onCancelClick",
                value: function onCancelClick() {
                    this.cancelHandler && this.cancelHandler.run(), l.hide();
                }
            }], [{
                key: "msgList",
                get: function get() {
                    return null == this._msgList && (this._msgList = []), this._msgList;
                }
            }, {
                key: "windowInst",
                get: function get() {
                    return null == this._windowInst && (this._windowInst = a.create().attach(l).scaleFit(zs.configs.gameCfg.designWidth, zs.configs.gameCfg.designHeight).block(!0)),
                        this._windowInst;
                }
            }, {
                key: "show",
                value: function show(t) {
                    l.windowInst.isShowing() ? l.msgList.push(t) : l.windowInst.update(l, function (i) {
                        i.setTitle(t.title).setContent(t.content).setConfirmText(t.confirmText).setCancelText(t.cancelText).setConfirmHandler(t.confirmHandler).setCancelHandler(t.cancelHandler).switchCancel(t.hideCancel).apply();
                    }).align(i.Center).show().front();
                }
            }, {
                key: "hide",
                value: function hide() {
                    l.windowInst.hide(), l.msgList.length > 0 && l.show(l.msgList.pop());
                }
            }, {
                key: "clear",
                value: function clear() {
                    l._msgList = [];
                }
            }, {
                key: "make",
                value: function make() {
                    return zs.ui.FGUI_msgbox.createInstance();
                }
            }, {
                key: "type",
                value: function type() {
                    return zs.ui.FGUI_msgbox;
                }
            }]);
            return l;
        }(n);
        var h = /* */ function (_n3) {
            _inherits2(h, _n3);
            var _super2 = _createSuper2(h);
            function h(t) {
                var _this2;
                _classCallCheck2(this, h);
                _this2 = _super2.call(this, t), t.text = "", t.color = "#ff0000", t.fontSize = 30,
                    t.bold = !0, t.singleLine = !0, t.autoSize = !0;
                return _this2;
            }
            _createClass2(h, [{
                key: "text",
                get: function get() {
                    return this.view.text;
                }
            }, {
                key: "setText",
                value: function setText(t) {
                    this.view.text = t;
                }
            }], [{
                key: "windowInst",
                get: function get() {
                    return null == this._windowInst && (this._windowInst = a.create()), this._windowInst;
                }
            }, {
                key: "make",
                value: function make() {
                    return new fairygui.GBasicTextField();
                }
            }, {
                key: "show",
                value: function show(t) {
                    null == this.inst && (this.inst = this.windowInst.attach(h).align(zs.fgui.AlignType.BottomLeft).show().front().getBase()),
                        this.inst && (this.inst.view.visible = !0, this.inst.setText(t));
                }
            }, {
                key: "hide",
                value: function hide() {
                    this.inst && (this.inst.view.visible = !1);
                }
            }]);
            return h;
        }(n);
        t.AlignType = i, t.FitType = e, t.configs = s, t.init = function () {
            fairygui.UIConfig.packageFileExtension = "bin", fairygui.UIConfig.bringWindowToFrontOnClick = !1,
                s.onInit && s.onInit.run(), zs.proxy.initFGUIRoot();
        }, t.loadPack = loadPack, t.loadPacks = function (t, i) {
            return new Promise(/* */ function () {
                var _ref = _asyncToGenerator2(/* */ _regenerator.default.mark(function _callee(e, s) {
                    var n, _e6, _s2;
                    return _regenerator.default.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    if (!(null == t || t.length <= 0)) {
                                        _context.next = 2;
                                        break;
                                    }
                                    return _context.abrupt("return", e(null));

                                case 2:
                                    n = [];
                                    _e6 = 0, _s2 = t.length;

                                case 4:
                                    if (!(_e6 < _s2)) {
                                        _context.next = 13;
                                        break;
                                    }
                                    _context.t0 = n;
                                    _context.next = 8;
                                    return loadPack(t[_e6], i).catch(function (t) {
                                        return t;
                                    });

                                case 8:
                                    _context.t1 = _context.sent;
                                    _context.t0.push.call(_context.t0, _context.t1);

                                case 10:
                                    _e6++;
                                    _context.next = 4;
                                    break;

                                case 13:
                                    e(n);

                                case 14:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, _callee);
                }));
                return function (_x, _x2) {
                    return _ref.apply(this, arguments);
                };
            }());
        }, t.base = n, t.baseGeneric = /* */ function (_n4) {
            _inherits2(_class, _n4);
            var _super3 = _createSuper2(_class);
            function _class() {
                _classCallCheck2(this, _class);
                return _super3.apply(this, arguments);
            }
            _createClass2(_class, [{
                key: "view",
                get: function get() {
                    return this._view;
                }
            }]);
            return _class;
        }(n), t.window = a, t.manager = o, t.msgbox = l, t.msgtext = h;
    }(window.zs.fgui = window.zs.fgui || {});
}()