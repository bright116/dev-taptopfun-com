var _interopRequireDefault = require("../../@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("../../@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("../../@babel/runtime/helpers/asyncToGenerator"));

var _assertThisInitialized2 = _interopRequireDefault(require("../../@babel/runtime/helpers/assertThisInitialized"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("../../@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("../../@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("../../@babel/runtime/helpers/inherits"));

var _classCallCheck2 = _interopRequireDefault(require("../../@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("../../@babel/runtime/helpers/createClass"));

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

window.zs = window.zs || {}, window.zs.fgui = window.zs.fgui || {}, function(t) {
    "use strict";
    var i, e;
    !function(t) {
        t[t.Center = 0] = "Center", t[t.Top = 1] = "Top", t[t.Bottom = 2] = "Bottom", t[t.Left = 3] = "Left", 
        t[t.Right = 4] = "Right", t[t.TopLeft = 5] = "TopLeft", t[t.BottomLeft = 6] = "BottomLeft", 
        t[t.TopRight = 7] = "TopRight", t[t.BottomRight = 8] = "BottomRight";
    }(i = i || (i = {})), function(t) {
        t[t.None = 0] = "None", t[t.Fit = 1] = "Fit", t[t.ScaleFit = 2] = "ScaleFit", t[t.Both = 3] = "Both";
    }(e = e || (e = {}));
    var s = /* */ function() {
        function s() {
            (0, _classCallCheck2.default)(this, s);
        }
        (0, _createClass2.default)(s, null, [ {
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
        }, {
            key: "bases",
            get: function get() {
                return null == this._bases && (this._bases = {}), this._bases;
            }
        }, {
            key: "items",
            get: function get() {
                return null == this._items && (this._items = {}), this._items;
            }
        } ]);
        return s;
    }();
    function loadPack(t, i) {
        return i || (t = s.path_root + "/" + t), zs.resource.load(t, zs.ResourceType.FGUIPack);
    }
    s.onInit = null, s.path_root = "fgui", s.pack_basic_exporter = "basicExporter";
    var n = /* */ function() {
        function n(t) {
            (0, _classCallCheck2.default)(this, n);
            this.disposed = !1, this._view = t, t.baseCtrl = this, this.init();
        }
        (0, _createClass2.default)(n, [ {
            key: "check",
            value: function check(t) {
                return !0;
            }
        }, {
            key: "dispose",
            value: function dispose() {
                Laya.timer.clearAll(this), Laya.Tween.clearAll(this), this.disposed = !0;
            }
        }, {
            key: "init",
            value: function init() {}
        }, {
            key: "apply",
            value: function apply() {}
        }, {
            key: "applyConfig",
            value: function applyConfig() {}
        }, {
            key: "view",
            get: function get() {
                return this._view;
            }
        } ], [ {
            key: "make",
            value: function make(t) {
                return t && t.prototype instanceof fairygui.GComponent ? t.createInstance() : null;
            }
        }, {
            key: "type",
            value: function type() {
                return fairygui.GComponent;
            }
        } ]);
        return n;
    }();
    n.typeDefine = null;
    var a = /* */ function() {
        function a() {
            (0, _classCallCheck2.default)(this, a);
        }
        (0, _createClass2.default)(a, [ {
            key: "attach",
            value: function attach(t, i) {
                if (this.lastBase = null, null == t || null == this.window) return this;
                var e = t.make(t.typeDefine || t.type());
                return i ? this.window.contentPane.addChildAt(e, i) : this.window.contentPane.addChild(e), 
                e instanceof fairygui.GButton ? e.opaque = !0 : e.opaque = !1, this.lastBase = new t(e), 
                this;
            }
        }, {
            key: "detach",
            value: function detach(t) {
                return null == t ? this : ("number" == typeof t ? this.window.contentPane.removeChildAt(t, !0) : (t.dispose(), 
                this.window.contentPane.removeChild(t.view, !0)), this);
            }
        }, {
            key: "setBase",
            value: function setBase(t) {
                return t && t.view ? this.lastBase = t : this.lastBase = null, this;
            }
        }, {
            key: "getBase",
            value: function getBase() {
                return this.lastBase;
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
                    var _n = this.lastBase.view.width * this.lastBase.view.scaleX, _a = this.lastBase.view.height * this.lastBase.view.scaleY, _o = 0;
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
                    var _h = 0;
                    switch (t) {
                      case i.Left:
                      case i.Center:
                      case i.Right:
                        _h = .5 * (this.window.contentPane.height - _a);
                        break;

                      case i.BottomLeft:
                      case i.Bottom:
                      case i.BottomRight:
                        _h = this.window.contentPane.height - _a;
                    }
                    switch (this.lastBase.view.pivotAsAnchor && (_o += _n * this.lastBase.view.pivotX, 
                    _h += _a * this.lastBase.view.pivotY), e && (_o += e), s && (_h += s), this.lastBase.view.setXY(_o, _h), 
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
                    var _e = 1;
                    _e = i / t >= fairygui.GRoot.inst.width / fairygui.GRoot.inst.height ? fairygui.GRoot.inst.height / i : fairygui.GRoot.inst.width / t, 
                    this.window.setScale(_e, _e);
                }
                return this;
            }
        }, {
            key: "scaleFit",
            value: function scaleFit(t, i) {
                if (this.lastBase) {
                    var _e2 = 1;
                    _e2 = i / t >= this.window.contentPane.height / this.window.contentPane.width ? this.window.contentPane.height / i : this.window.contentPane.width / t, 
                    this.lastBase.view.setScale(_e2, _e2);
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
            key: "fit",
            value: function fit() {
                if (this.lastBase) {
                    var _t = 0, _i = 0;
                    this.lastBase.view.width = this.window.contentPane.width / this.lastBase.view.scaleX * (1 / this.window.scaleX), 
                    this.lastBase.view.height = this.window.contentPane.height / this.lastBase.view.scaleY * (1 / this.window.scaleY), 
                    this.lastBase.view.pivotAsAnchor && (_t += this.lastBase.view.width * this.lastBase.view.scaleX * this.lastBase.view.pivotX, 
                    _i += this.lastBase.view.height * this.lastBase.view.scaleY * this.lastBase.view.pivotY), 
                    this.lastBase.view.x = _t, this.lastBase.view.y = _i;
                }
                return this;
            }
        }, {
            key: "fitWidth",
            value: function fitWidth(t) {
                if (this.lastBase) {
                    var _i2 = this.window.contentPane.width / this.lastBase.view.width;
                    this.lastBase.view.width = this.window.contentPane.width * (1 / this.window.scaleX), 
                    this.lastBase.view.x = this.lastBase.view.pivotAsAnchor ? this.lastBase.view.width * this.lastBase.view.pivotX : 0, 
                    t && (this.lastBase.view.height *= _i2 * (1 / this.window.scaleY), this.lastBase.view.y = this.lastBase.view.y + (this.lastBase.view.pivotAsAnchor ? this.lastBase.view.height * this.lastBase.view.pivotY : 0));
                }
                return this;
            }
        }, {
            key: "fitHeight",
            value: function fitHeight(t) {
                if (this.lastBase) {
                    var _i3 = this.window.contentPane.height / this.lastBase.view.height;
                    this.lastBase.view.height = this.window.contentPane.height * (1 / this.window.scaleY), 
                    this.lastBase.view.y = this.lastBase.view.pivotAsAnchor ? this.lastBase.view.height * this.lastBase.view.pivotY : 0, 
                    t && (this.lastBase.view.width *= _i3 * (1 / this.window.scaleX), this.lastBase.view.x = this.lastBase.view.x + (this.lastBase.view.pivotAsAnchor ? this.lastBase.view.width * this.lastBase.view.pivotX : 0));
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
                    var _t2 = this.window.root;
                    _t2.getChildIndex(this.window) >= 0 && _t2.setChildIndex(this.window, _t2.numChildren - 1), 
                    this.checkMsgbox();
                }
                return this;
            }
        }, {
            key: "top",
            value: function top() {
                if (this.lastBase) {
                    var _t3 = this.window.contentPane;
                    _t3.getChildIndex(this.lastBase.view) >= 0 && _t3.setChildIndex(this.lastBase.view, _t3.numChildren - 1);
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
                    for (var _t4 = this.window.contentPane.numChildren - 1; _t4 >= 0; _t4--) {
                        var _i4 = this.window.contentPane.getChildAt(_t4);
                        _i4 && _i4.baseCtrl && _i4.baseCtrl.dispose && _i4.baseCtrl.dispose();
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
                if (this.attach(e), t.window && (null != t.window.width && null != t.window.width && this.setWidth(t.window.width), 
                null != t.window.height && null != t.window.height && this.setHeight(t.window.height), 
                (zs.configs.gameCfg.autoScaleFit || null != t.window.scalefit && null != t.window.scalefit) && (!t.window.scalefit || !Array.isArray(t.window.scalefit) || t.window.scalefit.length <= 1 ? this.scaleFit(zs.configs.gameCfg.designWidth, zs.configs.gameCfg.designHeight) : this.scaleFit(t.window.scalefit[0], t.window.scalefit[1])), 
                t.window.scale && Array.isArray(t.window.scale) && t.window.scale.length > 1 && this.scale(t.window.scale[0], t.window.scale[1]), 
                t.window.fitwidth && this.fitWidth(), t.window.fitheight && this.fitHeight(), t.window.fit && this.fit()), 
                t.base ? this.update(e, function(i) {
                    i.applyConfig(t.base);
                }) : this.update(e, function(t) {
                    t.apply();
                }), t.window) {
                    if (t.window.align) switch (t.window.align) {
                      case "center":
                        this.align(i.Center, t.window.alignoffsetx || 0, t.window.alignoffsety || 0);
                        break;

                      case "top":
                        this.align(i.Top, t.window.alignoffsetx || 0, t.window.alignoffsety || 0);
                        break;

                      case "bottom":
                        this.align(i.Bottom, t.window.alignoffsetx || 0, t.window.alignoffsety || 0);
                        break;

                      case "left":
                        this.align(i.Left, t.window.alignoffsetx || 0, t.window.alignoffsety || 0);
                        break;

                      case "right":
                        this.align(i.Right, t.window.alignoffsetx || 0, t.window.alignoffsety || 0);
                        break;

                      case "topleft":
                        this.align(i.TopLeft, t.window.alignoffsetx || 0, t.window.alignoffsety || 0);
                        break;

                      case "bottomleft":
                        this.align(i.BottomLeft, t.window.alignoffsetx || 0, t.window.alignoffsety || 0);
                        break;

                      case "topright":
                        this.align(i.TopRight, t.window.alignoffsetx || 0, t.window.alignoffsety || 0);
                        break;

                      case "bottomright":
                        this.align(i.BottomRight, t.window.alignoffsetx || 0, t.window.alignoffsety || 0);
                    }
                    null != t.window.x && null != t.window.x && this.setX(t.window.x), null != t.window.y && null != t.window.y && this.setY(t.window.y), 
                    null != t.window.block && null != t.window.block && this.block(t.window.block), 
                    null != t.window.autofront && null != t.window.autofront && this.autoFront(t.window.autofront), 
                    t.window.front && this.front(), t.window.top && this.top();
                }
                return this;
            }
        }, {
            key: "dispose",
            value: function dispose() {
                if (null != this.window) {
                    for (var _t5 = this.window.contentPane.numChildren - 1; _t5 >= 0; _t5--) {
                        var _i5 = this.window.contentPane.getChildAt(_t5);
                        _i5 && _i5.baseCtrl && _i5.baseCtrl.dispose && (_i5.baseCtrl.dispose(), _i5.dispose());
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
                if (h._windowInst && h._windowInst.isShowing()) {
                    var _t6 = h._windowInst.window, _i6 = _t6.root;
                    _i6.getChildIndex(_t6) >= 0 && _i6.setChildIndex(_t6, _i6.numChildren - 1);
                }
            }
        } ], [ {
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
        } ]);
        return a;
    }();
    var o = /* */ function() {
        function o() {
            (0, _classCallCheck2.default)(this, o);
        }
        (0, _createClass2.default)(o, null, [ {
            key: "open",
            value: function open(t, i, s) {
                var n = this.defaultPanel;
                if (null != i && i.trim().length > 0 && (i = i.trim(), n = this.list[i]), null != n && n.dispose(), 
                n = a.create(), t) switch (n.attach(t), s || (s = e.Both), s) {
                  case e.Fit:
                    n.fit();
                    break;

                  case e.ScaleFit:
                    n.scaleFit(zs.configs.gameCfg.designWidth, zs.configs.gameCfg.designHeight);
                    break;

                  case e.Both:
                    n.scaleFit(zs.configs.gameCfg.designWidth, zs.configs.gameCfg.designHeight).fit();
                }
                return n.show(), null != i && i.length > 0 ? this.list[i] = n : this.defaultPanel = n, 
                n;
            }
        }, {
            key: "show",
            value: function show(t, i, e, s) {
                var n = this.defaultPanel;
                if (null != e && e.trim().length > 0 && (e = e.trim(), n = this.list[e]), null != n) n.show(); else if (t) return this.open(i, e, s);
                return n;
            }
        }, {
            key: "hide",
            value: function hide(t) {
                var i = this.defaultPanel;
                return null != t && t.trim().length > 0 && (t = t.trim(), i = this.list[t]), null != i && i.hide(), 
                i;
            }
        }, {
            key: "list",
            get: function get() {
                return null == this._list && (this._list = {}), this._list;
            }
        } ]);
        return o;
    }();
    o.defaultPanel = null;
    var h = /* */ function(_n2) {
        (0, _inherits2.default)(h, _n2);
        var _super = _createSuper(h);
        (0, _createClass2.default)(h, null, [ {
            key: "show",
            value: function show(t) {
                h.windowInst.isShowing() ? h.msgList.push(t) : h.windowInst.update(h, function(i) {
                    i.setTitle(t.title).setContent(t.content).setConfirmText(t.confirmText).setCancelText(t.cancelText).setConfirmHandler(t.confirmHandler).setCancelHandler(t.cancelHandler).switchCancel(t.hideCancel).apply();
                }).align(i.Center).show().front();
            }
        }, {
            key: "hide",
            value: function hide() {
                h.windowInst.hide(), h.msgList.length > 0 && h.show(h.msgList.pop());
            }
        }, {
            key: "clear",
            value: function clear() {
                h._msgList = [];
            }
        }, {
            key: "msgList",
            get: function get() {
                return null == this._msgList && (this._msgList = []), this._msgList;
            }
        }, {
            key: "windowInst",
            get: function get() {
                return null == this._windowInst && (this._windowInst = a.create().attach(h).scaleFit(zs.configs.gameCfg.designWidth, zs.configs.gameCfg.designHeight).block(!0)), 
                this._windowInst;
            }
        } ]);
        function h(t) {
            var _this;
            (0, _classCallCheck2.default)(this, h);
            _this = _super.call(this, t), t.btn_confirm.onClick((0, _assertThisInitialized2.default)(_this), _this.onConfirmClick), 
            t.btn_cancel.onClick((0, _assertThisInitialized2.default)(_this), _this.onCancelClick);
            return _this;
        }
        (0, _createClass2.default)(h, [ {
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
                this.confirmHandler && this.confirmHandler.run(), h.hide();
            }
        }, {
            key: "onCancelClick",
            value: function onCancelClick() {
                this.cancelHandler && this.cancelHandler.run(), h.hide();
            }
        } ], [ {
            key: "make",
            value: function make() {
                return zs.ui.FGUI_msgbox.createInstance();
            }
        }, {
            key: "type",
            value: function type() {
                return zs.ui.FGUI_msgbox;
            }
        } ]);
        return h;
    }(n);
    t.AlignType = i, t.configs = s, t.init = function() {
        fairygui.UIConfig.packageFileExtension = "bin", fairygui.UIConfig.bringWindowToFrontOnClick = !1, 
        s.onInit && s.onInit.run(), Laya.stage.addChild(fairygui.GRoot.inst.displayObject);
    }, t.loadPack = loadPack, t.loadPacks = function(t, i) {
        return new Promise(/* */ function() {
            var _ref = (0, _asyncToGenerator2.default)(/* */ _regenerator.default.mark(function _callee(e, s) {
                var n, _e3, _s;
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
                            _e3 = 0, _s = t.length;

                          case 4:
                            if (!(_e3 < _s)) {
                                _context.next = 13;
                                break;
                            }
                            _context.t0 = n;
                            _context.next = 8;
                            return loadPack(t[_e3], i);

                          case 8:
                            _context.t1 = _context.sent;
                            _context.t0.push.call(_context.t0, _context.t1);

                          case 10:
                            _e3++;
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
            return function(_x, _x2) {
                return _ref.apply(this, arguments);
            };
        }());
    }, t.base = n, t.baseGeneric = /* */ function(_n3) {
        (0, _inherits2.default)(_class, _n3);
        var _super2 = _createSuper(_class);
        function _class() {
            (0, _classCallCheck2.default)(this, _class);
            return _super2.apply(this, arguments);
        }
        (0, _createClass2.default)(_class, [ {
            key: "view",
            get: function get() {
                return this._view;
            }
        } ]);
        return _class;
    }(n), t.window = a, t.manager = o, t.msgbox = h;
}(window.zs.fgui = window.zs.fgui || {});